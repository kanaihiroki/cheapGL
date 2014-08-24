define([
	"prelude",
	"primitive",
], (
	prelude,
	primitive,
	) ->
	# short hand
	min = prelude.min
	max = prelude.max
	min3 = (a,b,c) -> min(min(a,b),c)
	max3 = (a,b,c) -> max(max(a,b),c)

	# 頂点a,b,cに囲まれた面積を計算する。
	area = (a,b,c) ->
		# 	area([-2, 3], [-3, -1], [3, -2]) == 12.5で正しいことを確認
		s = a[0]*b[1] + b[0]*c[1] + c[0]*a[1] - a[1]*b[0] - b[1]*c[0] - c[1]*a[0]
		Math.abs(s/2)

	# 三角形a,b,cの向きを判定。右向きなら正、左向きなら負の値を返す。
	# http://yamatyuu.net/computer/program/algorithm/triangle_cross.pdf
	orient2d = (a, b, c) ->
		# console.log((b[0]-a[0]), (c[1]-a[1]))
		(b[0]-a[0])*(c[1]-a[1]) - (b[1]-a[1])*(c[0]-a[0])

	class Rasterize
		constructor: (@width, @height, @fragmentShaderUnit) ->

		process: (attributes) =>
			# TODO: カリング

			# 三角形頂点のクリッピング座標を取得
			clippingCoord = (attribute.gl_Position for attribute in attributes)

			# TODO: クリッピング

			# クリッピング座標から正規化デバイス座標を計算
			# 同次座標のwで割る(斉次座標に置き換えるということ)
			# http://oshiro.bpe.es.osaka-u.ac.jp/people/staff/imura/computer/OpenGL/coordinates/disp_content
			# http://qpp.bitbucket.org/translation/maximizing_depth_buffer_range_and/
			normalizedDevideCoords = ([a/d, b/d, c/d] for [a,b,c,d] in clippingCoord)
			@drawTri(normalizedDevideCoords)
			attributes = {gl_Position: normalizedDevideCoords} # 頂点属性ストリーム
			@fragmentShaderUnit.process(attributes)

		drawTri: (ndc) ->
			# ビューポート変換
			# TODO: zの扱い
			[v0, v1, v2] = for v in ndc
				[v[0]*@width + @width/2, v[1]*@height + @height/2, 0]

			console.log("screencoord", v0, v1, v2)
	
			# Compute triangle bounding box
			minX = min3(v0[0], v1[0], v2[0]);
			minY = min3(v0[1], v1[1], v2[1]);
			maxX = max3(v0[0], v1[0], v2[0]);
			maxY = max3(v0[1], v1[1], v2[1]);

			# Clip against screen bounds
			minX = max(Math.floor(minX), 0);
			minY = max(Math.floor(minY), 0);
			maxX = min(Math.floor(maxX), @width);
			maxY = min(Math.floor(maxY), @height);


			# 点が三角形に包含されているかどうかは外積を使って判定する。
			# http://www.sousakuba.com/Programming/gs_hittest_point_triangle.html
			tmp = vec3.create()
			e01 = vec3.sub(vec3.create(), v1, v0)
			e12 = vec3.sub(vec3.create(), v2, v1)
			e20 = vec3.sub(vec3.create(), v0, v2)
			console.log(e01, e12, e20)

			
			p = [400,400,0]
			w0 = vec3.cross(vec3.create(), p, e01)
			w1 = vec3.cross(vec3.create(), p, e12)
			w2 = vec3.cross(vec3.create(), p, e20)
			console.log(w0, w1, w2)

			S = area(v0, v1, v2)

			# Rasterize
			for y in [minY..maxY]
				for x in [minX..maxX]
					p = [x,y,0]
					e0p = vec3.sub(vec3.create(), p, v0)
					e1p = vec3.sub(vec3.create(), p, v1)
					e2p = vec3.sub(vec3.create(), p, v2)
					
					w0 = vec3.cross(vec3.create(), e0p, e01)
					w1 = vec3.cross(vec3.create(), e1p, e12)
					w2 = vec3.cross(vec3.create(), e2p, e20)

					# 座標が三角形内部にある
					if (w0[2] >= 0 && w1[2] >= 0 && w2[2] >= 0)
						# 頂点属性の線形補完処理
						
						# 重心座標の計算
						s = [
							area(p,v1,v2),
							area(p,v2,v0),
							area(p,v0,v1),
						]

						a = s[0]/S
						b = s[1]/S
						c = s[2]/S


			console.log("done")
)

define([
	"prelude",
	"primitive",
	"renderer/Triangle"
], (
	prelude,
	primitive,
	Triangle
	) ->
	# short hand
	min = prelude.min
	max = prelude.max
	min3 = (a,b,c) -> min(min(a,b),c)
	max3 = (a,b,c) -> max(max(a,b),c)
	sub = (a,b) -> vec3.sub(vec3.create(), a, b)
	cross = (a,b) -> vec3.cross(vec3.create(), a, b)
	add4_ = (args...) ->
		ret = args[0]
		for i in [1..args.length-1]
			vec4.add(ret, ret, args[i])
		return ret
	scale4 = (a,b) -> vec4.scale(vec4.create(), a, b)

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
			tri = new Triangle(attributes)

   			# TODO: カリング
			fragments = @drawTri(tri)
			@fragmentShaderUnit.process(fragments)

		drawTri: (tri) ->
			[c0, c1, c2] = tri.clippingCoord()
			[v0, v1, v2] = tri.screenCoords(@width, @height)
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

			e01 = sub(v1, v0)
			e12 = sub(v2, v1)
			e20 = sub(v0, v2)
			
			S = area(v0, v1, v2)

			# Rasterize
			fragments = []
			for y in [minY..maxY]
				for x in [minX..maxX]
					# 点が三角形に包含されているかどうかは外積を使って判定する。
					# http://www.sousakuba.com/Programming/gs_hittest_point_triangle.html
					p = [x,y,0]
					e0p = sub(p, v0)
					e1p = sub(p, v1)
					e2p = sub(p, v2)
					
					w0 = cross(e0p, e01)
					w1 = cross(e1p, e12)
					w2 = cross(e2p, e20)

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

						# 頂点属性の線形補完に使う重み
						w = [
							a/c0[3],
							b/c1[3],
							c/c2[3]
						]
						dividerScale = w[0] + w[1] + w[2] / 1

						ret = {}
						for key,val of tri.getVector4Attributes()
							# OpenGL仕様書の式を使う
							f = scale4(add4_(
								scale4(val[0], w[0]),
								scale4(val[1], w[1]),
								scale4(val[2], w[2])
							), dividerScale)
							ret[key] = f
						fragments.push(ret)

			positions = for fragment in fragments
				[a,b,c,d] = fragment.gl_Position
				[ndc0, ndc1, ndc3] = [a/d, b/d, c/d]
				[
					Math.floor(ndc0*@width + @width/2),
					Math.floor(ndc1*@height + @height/2),
					0
				]

			console.log(positions)
			# TODO: stub
			{
				gl_Position: positions
			}
)

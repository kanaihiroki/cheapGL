define [], () ->
	class Triangle
		constructor: (@attributes) ->
			if 3 != @attributes.length
				throw new "attributeArray length error"

			[@v1, @v2, @v3] = @attributes

		clippingCoord: () ->
			attr.gl_Position for attr in @attributes

		# クリッピング座標から正規化デバイス座標を計算
		# 同次座標のwで割る(斉次座標に置き換えるということ)
		# http://oshiro.bpe.es.osaka-u.ac.jp/people/staff/imura/computer/OpenGL/coordinates/disp_content
		# http://qpp.bitbucket.org/translation/maximizing_depth_buffer_range_and/
		normalizedDevideCoords: () ->
			([a/d, b/d, c/d] for [a,b,c,d] in @clippingCoord())

		# ビューポート変換
		# TODO: zの扱い
		screenCoords: (width, height) ->
			for v in @normalizedDevideCoords()
				[
					Math.floor(v[0]*width + width/2),
					Math.floor(v[1]*height + height/2),
					0
				]

		# 三角形a,b,cの向きを判定。
		# http://yamatyuu.net/computer/program/algorithm/triangle_cross.pdf
		isFront: () ->
			[a,b,c,d] = @clippingCoord()
			(b[0]-a[0])*(c[1]-a[1]) - (b[1]-a[1])*(c[0]-a[0]) < 0

		getVector4Attributes: () ->
			ret = {}
			for name of @v1
				ret[name] = [@v1[name], @v2[name], @v3[name]]
			return ret

		# getAttributeMap: () ->
		# 	ret = {}
		# 	for name of @v1
		# 		ret[name] = [@v1[name], @v2[name], @v3[name]]
		# 	return ret

define([
	"prelude",
	"renderer/Triangle"
], (
	prelude,
	Triangle
	) ->

	class Rasterizer
		constructor: (@width, @height, @fragmentShaderUnit) ->

		rasterize: (primitive) =>
			tri = new Triangle(primitive, @width, @height)

			# if !tri.isFront()
			# 	return

			if !tri.isInsideViewFrustrum()
				return

			tri.rasterize()
)

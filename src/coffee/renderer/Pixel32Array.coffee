define([], () ->
	class Pixel32Array
		constructor: (@imageData) ->

		setRGBA: (offset, fragColor) ->
			data = @imageData.data

			rgba = (a*255 for a in fragColor)
			byteOffset = offset * 4
			for i in [0..3]
				@imageData.data[byteOffset + i] = rgba[i]
)

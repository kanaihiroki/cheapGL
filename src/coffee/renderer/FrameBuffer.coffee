define(["renderer/Pixel32Array"], (Pixel32Array) ->
	class FrameBuffer
		constructor: (@canvas) ->
			@width = @canvas.canvas.width
			@height = @canvas.canvas.height
			@imageData = null

		write: (fragments) ->
			@imageData = @canvas.getImageData(0,0, @width, @height)
			# 正規化デバイス座標からスクリーン座標に変換
			for fragment in fragments
				[x,y,z] = fragment.gl_Position
				x = x*@width + @width / 2
				y = y*@height + @height / 2
				fragment.screenCoord = [Math.floor(x), Math.floor(y), z]

			for fragment in fragments
				@_putPixel(fragment)
		
			@flush()

		clear: (styleText) ->
			@canvas.fillStyle = styleText
			@canvas.fillRect(0, 0, @width, @height)

		flush: () ->
			console.log( @imageData.data[960843])
			@canvas.putImageData(@imageData, 0, 0)

		_putPixel: (fragment)->
			[x,y,z] = fragment.screenCoord
			offset = y * @width + x
			pixel32Array = new Pixel32Array(@imageData)
			pixel32Array.setRGBA(offset, fragment.gl_FragColor)
			for i in [0..100]
				pixel32Array.setRGBA(offset, [1.0, 1.0, 0.0, 1.0])
)

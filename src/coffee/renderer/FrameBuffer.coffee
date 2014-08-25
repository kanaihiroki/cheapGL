define(["renderer/Pixel32Array"], (Pixel32Array) ->
	class FrameBuffer
		constructor: (@canvas) ->
			@width = @canvas.canvas.width
			@height = @canvas.canvas.height
			@imageData = null

		write: (fragments) ->
			@imageData = @canvas.getImageData(0,0, @width, @height)
			for fragment in fragments
				@_putPixel(fragment)
		
			@flush()

		clear: (styleText) ->
			@canvas.fillStyle = styleText
			@canvas.fillRect(0, 0, @width, @height)

		flush: () ->
			@canvas.putImageData(@imageData, 0, 0)
			window.a = @canvas

		_putPixel: (fragment)->
			[x,y,z] = fragment.gl_Position
			offset = y * @width + x
			pixel32Array = new Pixel32Array(@imageData)
			pixel32Array.setRGBA(offset, fragment.gl_FragColor)
)

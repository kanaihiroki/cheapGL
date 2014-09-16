define([], () ->
	class FrameBuffer
		constructor: (@canvas) ->
			@width = @canvas.canvas.width
			@height = @canvas.canvas.height
			@imageData = null

		write: (fragments) ->
			@imageData = @canvas.getImageData(0,0, @width, @height)
			for fragment in fragments
				@_transformCanvasCoord(fragment)
				@_putPixel(fragment)
		
			@flush()

		clear: (styleText) ->
			@canvas.fillStyle = styleText
			@canvas.fillRect(0, 0, @width, @height)

		flush: () ->
			@canvas.putImageData(@imageData, 0, 0)

		_putPixel: (fragment)->
			[x,y,z] = fragment.gl_Position
			data = @imageData.data
			rgba = (a*255 for a in fragment.gl_FragColor)

			y = @height - y # y軸を反転する

			offset = y * @width + x
			byteOffset = offset * 4

			for i in [0..3]
				@imageData.data[byteOffset + i] = rgba[i]

		# 最後にスクリーン座標をCanvasの座標に変換する
		_transformCanvasCoord: (fragment) ->
			[x,y,z] = fragment.gl_Position
			fragment.gl_Position = [x + @width / 2, y + @height / 2]
)

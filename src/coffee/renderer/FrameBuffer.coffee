define([], () ->
	class FrameBuffer
		constructor: (@canvas) ->
			@width = @canvas.canvas.width
			@height = @canvas.canvas.height
			@imageData = null
			@zbuffer = null

		write: (fragments) ->
			if not @imageData?
				@imageData = @canvas.getImageData(0,0, @width, @height)

			if not @zbuffer?
				@createZBuffer()

			for fragment in fragments
				@_transformCanvasCoord(fragment)
				@_putPixel(fragment)
		
			@flush()

		createZBuffer: () ->
			# Zバッファの制度は32bitとする
			buf = new ArrayBuffer(@width * @height * 4)
			@zbuffer = new Float32Array(buf)
			for i in [0..@zbuffer.length]
				@zbuffer[i] = 256 + 256 << 4 + 256 << 8

		clear: (styleText) ->
			@canvas.fillStyle = styleText
			@canvas.fillRect(0, 0, @width, @height)
			@zbuffer = null
			@imageData = null

		flush: () ->
			@canvas.putImageData(@imageData, 0, 0)

		_putPixel: (fragment)->
			[x,y,z] = fragment.gl_Position
			data = @imageData.data
			rgba = (a*255 for a in fragment.gl_FragColor)

			y = @height - y # y軸を反転する

			offset = y * @width + x
			byteOffset = offset * 4

			# Zバッファの書き込みとテスト
			if (@zbuffer[offset] < z)
				return

			@zbuffer[offset] = z

			for i in [0..3]
				@imageData.data[byteOffset + i] = rgba[i]

		# 最後にスクリーン座標をCanvasの座標に変換する
		_transformCanvasCoord: (fragment) ->
			[x,y,z] = fragment.gl_Position
			fragment.gl_Position = [x + @width / 2, y + @height / 2, z]
)

define ["gl"], (gl) ->
	class App
		VERTEX_SHADER: "vertexShader.js"
		FRAGMENT_SHADER: "fragmentShader.js"

		constructor: (setting) ->
			@setting = setting
			@ctx = gl.getContext(setting.canvasElement)
			@shaderId = -1
			@vboId = -1
			@mvpMatrix = mat4.create()

			# initialize matrix
			@initializeMVP()
	
		run: ->
			# clearColor非対応
			# @ctx.clearColor(0.0, 0.0, 0.0, 1.0)
			# バッファ指定非対応
			@ctx.clear()
			@shaderId = @ctx.createProgram(@VERTEX_SHADER, @FRAGMENT_SHADER)
			@ctx.useProgram(@shaderId)

			# getAttribLocation は必要なし.vertexAttribPointerで直接指定する
			# attLocation = @ctx.getAttribLocation(@shaderId, 'position');

			@send_vertices(@setting.vertices)
			
			# attribute属性は常に有効とする
			# ctx.enableVertexAttribArray(attLocation);
			
			# attribute属性を登録
			@ctx.vertexAttribPointer(@shaderId, "position", @setting.stride)

			@ctx.drawArrays(gl.TRIANGLES, 0, 3)

		send_vertices: (vertices) ->
			@vboId = @ctx.createBuffer()
			@ctx.bindBuffer(gl.ARRAY_BUFFER, @vboId);
			@ctx.bufferData(gl.ARRAY_BUFFER, vertices);

		initializeMVP: () ->
			m = mat4.create()
			v = mat4.create()
			p = mat4.create()

			mat4.lookAt(v, [0.0, 1.0, 3.0], [0, 0, 0], [0, 1, 0])

			c = @setting.canvasElement
			aspect = c.width / c.height
			mat4.perspective(p, 90, aspect, 0.1, 100)

			mat4.mul(@mvpMatrix, m, v)
			mat4.mul(@mvpMatrix, @mvpMatrix, p)

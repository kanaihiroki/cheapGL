define ["gl", "util"], (gl, util) ->
	createMVP = (width, height) ->
		m = mat4.create()
		v = mat4.create()
		p = mat4.create()
		mvp = mat4.create()

		mat4.lookAt(v, [0.0, 1.0, 3.0], [0, 0, 0], [0, 1, 0])
		mat4.perspective(p, Math.PI / 2.0, width / height, 0.1, 100)

		mat4.mul(mvp, p, v)
		mat4.mul(mvp, mvp, m)

	class App
		@main: (setting) ->
			c = setting.canvasElement
			mvpMatrix = createMVP(c.width, c.height)
			ctx = gl.getContext(c)
			new App(setting, mvpMatrix, ctx).run()

		constructor: (@setting, @mvpMatrix, @ctx) ->
			@shaderId = -1
			@vboId = -1

		run: ->
			@ctx.clearColor(1.0, 1.0, 1.0, 1.0)
			# バッファ指定非対応
			@ctx.clear()
			@shaderId = @ctx.createProgram(@setting.vert, @setting.frag)
			@ctx.useProgram(@shaderId)

			# getAttribLocation は必要なし.vertexAttribPointerで直接指定する
			# attLocation = @ctx.getAttribLocation(@shaderId, 'position');

			@send_vertices(@setting.vertices)
			
			# attribute属性は常に有効とする
			# ctx.enableVertexAttribArray(attLocation);
			
			# attribute属性を登録
			@ctx.vertexAttribPointer(@shaderId, "position", @setting.stride)

			# uniformの型は区別しない
			@ctx.uniform(@shaderId, "mvpMatrix", @mvpMatrix)
			@ctx.drawArrays(gl.TRIANGLES, 0, @setting.vertices.length / @setting.stride)

			# flush非対応
			# @ctx.flush()

		send_vertices: (vertices) ->
			@vboId = @ctx.createBuffer()
			@ctx.bindBuffer(gl.ARRAY_BUFFER, @vboId);
			@ctx.bufferData(gl.ARRAY_BUFFER, vertices);

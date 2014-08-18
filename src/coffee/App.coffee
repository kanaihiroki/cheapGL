define ["gl", "util"], (gl, util) ->
	createMVP = (width, height) ->
		mvp = m = v = p = mat4.create()

		mat4.lookAt(v, [0.0, 1.0, 3.0], [0, 0, 0], [0, 1, 0])
		mat4.perspective(p, 90, width / height, 0.1, 100)

		mat4.mul(mvp, m, v)
		mat4.mul(mvp, mvp, p)

	class App
		@main: (setting) ->
			c = setting.canvasElement
			mvpMatrix = createMVP(c.width, c.height)
			ctx = gl.getContext(c)
			new App(setting, mvpMatrix, ctx).run()

		constructor: (@setting, @mvpMatrix, @ctx) ->
			@shaderId = -1
			@vboId = -1
			@vert = null
			@frag = null

		run: ->
			# シェーダのソースコードを取得する
			@vert = util.get(@setting.vertPath)
			@frag = util.get(@setting.fragPath)
		
			# シェーダのソースコードを画面に反映する
			@setting.vertDisplay.value = @vert
			@setting.fragDisplay.value = @frag

			# clearColor非対応
			# @ctx.clearColor(0.0, 0.0, 0.0, 1.0)
			# バッファ指定非対応
			@ctx.clear()
			@shaderId = @ctx.createProgram(@vert, @frag)
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

		send_vertices: (vertices) ->
			@vboId = @ctx.createBuffer()
			@ctx.bindBuffer(gl.ARRAY_BUFFER, @vboId);
			@ctx.bufferData(gl.ARRAY_BUFFER, vertices);

define ["prelude", "gl", "util", "ThreeJSLoader"], (prelude, gl, util, ThreeJSLoader) ->
	createMVP = (width, height, near, far) ->
		m = mat4.create()
		v = mat4.create()
		p = mat4.create()
		mvp = mat4.create()

		mat4.lookAt(v, [0.0, 0.0, 3.0], [0, 0, 0], [0, 1, 0])
		mat4.perspective(p, Math.PI / 2.0, width / height, near, far)

		mat4.mul(mvp, p, v)
		mat4.mul(mvp, mvp, m)

	class App
		@main: (setting) ->
			c = setting.canvasElement
			mvpMatrix = createMVP(c.width, c.height, setting.near, setting.far)
			ctx = gl.getContext(c)
			new App(setting, mvpMatrix, ctx, new ThreeJSLoader()).run()

		constructor: (@setting, @mvpMatrix, @ctx, @loader) ->
			@shaderId = -1

		run: () =>
			@loader.load(@setting.modelPath, @render)

		render: (model) =>
			vertices = model.vertices
			colors = model.colors

			@ctx.clearColor(1.0, 1.0, 1.0, 1.0)
			# バッファ指定非対応
			@ctx.clear()

			# シェーダ登録
			@shaderId = @ctx.createProgram(@setting.vert, @setting.frag)
			@ctx.useProgram(@shaderId)

			# uniform登録
			# uniformの型は区別しない
			@ctx.uniform(@shaderId, "mvpMatrix", @mvpMatrix)
			# @ctx.uniform(@shaderId, "color", vec4.fromValues(1.0, 1.0, 0.0, 1.0))

			# 頂点属性をVBOにする
			# getAttribLocation は必要なし.vertexAttribPointerで直接指定する
			# attLocation = @ctx.getAttribLocation(@shaderId, 'position');
			# vertexVbo = @sendVertices(@setting.vertices)
			# colorVbo = @sendVertices(@setting.colors)
			vertexVbo = @sendVertices(vertices)
			colorVbo = @sendVertices(model.colors)
			normalVbo = @sendVertices(model.normals)

			# attribute属性にVBOを登録
			@ctx.bindBuffer(gl.ARRAY_BUFFER, vertexVbo);
			# ctx.enableVertexAttribArray(attLocation); # attribute属性は常に有効とする
			@ctx.vertexAttribPointer(@shaderId, "position", @setting.stride)

			# @ctx.bindBuffer(gl.ARRAY_BUFFER, colorVbo);
			# # ctx.enableVertexAttribArray(attLocation); # attribute属性は常に有効とする
			# @ctx.vertexAttribPointer(@shaderId, "color", 4)

			# @ctx.bindBuffer(gl.ARRAY_BUFFER, normalVbo);
			# # ctx.enableVertexAttribArray(attLocation); # attribute属性は常に有効とする
			# @ctx.vertexAttribPointer(@shaderId, "normal", 3)


			# レンダリング
			# @ctx.drawArrays(gl.TRIANGLES, 0, @setting.vertices.length / @setting.stride)
			@ctx.drawArrays(gl.TRIANGLES, 0, vertices.length / @setting.stride)

			# flush非対応
			# @ctx.flush()

		sendVertices: (data) ->
			vboId = @ctx.createBuffer()
			@ctx.bindBuffer(gl.ARRAY_BUFFER, vboId);
			@ctx.bufferData(gl.ARRAY_BUFFER, data);
			return vboId

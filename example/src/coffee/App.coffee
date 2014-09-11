define ["gl", "util", "loadthree"], (gl, util, loadthree) ->
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
			loader = new THREE.JSONLoader()
			new App(setting, mvpMatrix, ctx, loader).run()

		constructor: (@setting, @mvpMatrix, @ctx, @loader) ->
			@shaderId = -1

		run: ->
			@loader.load(@setting.modelPath, @render)

		render: (geometry, args) =>
			@ctx.clearColor(1.0, 1.0, 1.0, 1.0)
			# バッファ指定非対応
			@ctx.clear()

			# シェーダ登録
			@shaderId = @ctx.createProgram(@setting.vert, @setting.frag)
			@ctx.useProgram(@shaderId)

			# uniform登録
			# uniformの型は区別しない
			@ctx.uniform(@shaderId, "mvpMatrix", @mvpMatrix)
			@ctx.uniform(@shaderId, "color", vec4.fromValues(1.0, 1.0, 0.0, 1.0))

			# 頂点属性をVBOにする
			# getAttribLocation は必要なし.vertexAttribPointerで直接指定する
			# attLocation = @ctx.getAttribLocation(@shaderId, 'position');
			vertexVbo = @sendVertices(@setting.vertices)
			colorVbo = @sendVertices(@setting.colors)
			# @sendVertices(geometry.vertices)

					
			# attribute属性にVBOを登録
			@ctx.bindBuffer(gl.ARRAY_BUFFER, vertexVbo);
			# ctx.enableVertexAttribArray(attLocation); # attribute属性は常に有効とする
			@ctx.vertexAttribPointer(@shaderId, "position", 3)

			@ctx.bindBuffer(gl.ARRAY_BUFFER, colorVbo);
			# ctx.enableVertexAttribArray(attLocation); # attribute属性は常に有効とする
			@ctx.vertexAttribPointer(@shaderId, "color", 4)

			# レンダリング
			@ctx.drawArrays(gl.TRIANGLES, 0, @setting.vertices.length / @setting.stride)

			# flush非対応
			# @ctx.flush()

		sendVertices: (data) ->
			vboId = @ctx.createBuffer()
			@ctx.bindBuffer(gl.ARRAY_BUFFER, vboId);
			@ctx.bufferData(gl.ARRAY_BUFFER, data);
			return vboId
			

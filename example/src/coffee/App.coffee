define ["prelude", "gl", "util", "ThreeJSLoader"], (prelude, gl, util, ThreeJSLoader) ->
    class App
        @main: (setting) ->
            c = setting.canvasElement
            ctx = gl.getContext(c)
            new App(setting, ctx, new ThreeJSLoader(setting)).run()

        constructor: (@setting, @ctx, @loader) ->

        run: =>
            @loader.load(@render)

        render: (model) =>
            window.m = model
            vertices = model.vertices

            @ctx.clearColor(1.0, 1.0, 0.0, 1.0)
            # バッファ指定非対応
            @ctx.clear()

            # シェーダ登録
            shaderId = @ctx.createProgram(@setting.vert, @setting.frag)
            @ctx.useProgram(shaderId)

            # テクスチャ読み込み
            textureId = @loadTexture(model.textures[0])
            @ctx.activeTexture(0)
            @ctx.bindTexture(gl.TEXTURE_2D, textureId)

            # uniform登録
            # uniformの型は区別しない
            @ctx.uniform(shaderId, "mvpMatrix", @computeMVPMatrix())
            @ctx.uniform(shaderId, "modelViewMatrix", @computeModelViewMatrix())
            @ctx.uniform(shaderId, "color", vec4.fromValues(1.0, 1.0, 1.0, 1.0))
            @ctx.uniform(shaderId, "Ka", vec3.fromValues(1.0, 1.0, 1.0))
            @ctx.uniform(shaderId, "Kd", vec3.fromValues(1.0, 1.0, 1.0))
            @ctx.uniform(shaderId, "Ks", vec3.fromValues(1.0, 1.0, 1.0))
            @ctx.uniform(shaderId, "La", vec3.fromValues(0.1, 0.1, 0.1))
            @ctx.uniform(shaderId, "Ld", vec3.fromValues(0.6, 0.6, 0.6))
            @ctx.uniform(shaderId, "Ls", vec3.fromValues(0.3, 0.3, 0.3))
            @ctx.uniform(shaderId, "shiness", 4.0)
            @ctx.uniform(shaderId, "texture0", 0) # テクスチャユニット0を設定
            @ctx.uniform(shaderId, "lightPosition", vec4.fromValues([].concat(@setting.lightPosition, [1.0])...))

            # 頂点属性をVBOにする
            # getAttribLocation は必要なし.vertexAttribPointerで直接指定する
            # attLocation = @ctx.getAttribLocation(shaderId, 'position')
            # vertexVbo = @sendVertices(@setting.vertices)
            # colorVbo = @sendVertices(@setting.colors)
            vertexVbo = @sendVertices(vertices)
            # colorVbo = @sendVertices(model.colors)
            normalVbo = @sendVertices(model.normals)
            uvVbo = @sendVertices(model.uvs)

            # attribute属性にVBOを登録
            @ctx.bindBuffer(gl.ARRAY_BUFFER, vertexVbo)
            # ctx.enableVertexAttribArray(attLocation); # attribute属性は常に有効とする
            @ctx.vertexAttribPointer(shaderId, "position", @setting.stride)

            # @ctx.bindBuffer(gl.ARRAY_BUFFER, colorVbo)
            # @ctx.vertexAttribPointer(shaderId, "color", 4)

            @ctx.bindBuffer(gl.ARRAY_BUFFER, normalVbo)
            @ctx.vertexAttribPointer(shaderId, "normal", 3)

            @ctx.bindBuffer(gl.ARRAY_BUFFER, uvVbo)
            @ctx.vertexAttribPointer(shaderId, "uv", 2)

            # レンダリング
            # @ctx.drawArrays(gl.TRIANGLES, 0, @setting.vertices.length / @setting.stride)
            @ctx.drawArrays(gl.TRIANGLES, 0, vertices.length / @setting.stride)

            # flush非対応
            # @ctx.flush()

        computeMVPMatrix: ->
            modelView = @computeModelViewMatrix()
            projection = @computeProjectionMatrix()
            mat4.mul(mat4.create(), projection, modelView)

        computeProjectionMatrix: ->
            width = @setting.canvasElement.width
            height = @setting.canvasElement.height
            near = @setting.near
            far = @setting.far

            mat4.perspective(mat4.create(), Math.PI / 2.0, width / height, near, far)

        computeModelViewMatrix: ->
            # めんどくさいのでモデル変換行列は単位行列として省略!
            mat4.lookAt(mat4.create(), [0.0, 0.0, 3.0], [0.0, 0.0, 0.0], [0.0, 1.0, 0.0])

        sendVertices: (data) ->
            vboId = @ctx.createBuffer()
            @ctx.bindBuffer(gl.ARRAY_BUFFER, vboId);
            @ctx.bufferData(gl.ARRAY_BUFFER, data);
            return vboId

        loadTexture: (image) ->
            textureId = @ctx.createTexture()

            # テクスチャをバインドする
            @ctx.bindTexture(gl.TEXTURE_2D, textureId);

            # テクスチャへイメージを適用
            @ctx.texImage2D(gl.TEXTURE_2D, image)

            # # ミップマップを生成
            # gl.generateMipmap(gl.TEXTURE_2D);

            # テクスチャのバインドを無効化
            @ctx.bindTexture(gl.TEXTURE_2D, null);

            return textureId

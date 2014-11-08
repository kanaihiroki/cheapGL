define ["prelude"], (prelude) ->
    class ThreeJSLoader
        # 法線マップの読み込みがうまくいかないので、こっちでなんとかする
        class LoadContext
            constructor: (@geometry, @texture) ->

            createVertexArray: ->
                vs = @geometry.vertices
                faceVertices = ([vs[face.a], vs[face.b], vs[face.c]] for face in @geometry.faces)

                prelude.concat(prelude.map(prelude.concat(faceVertices), (v) ->
                    [v.x, v.y, v.z]))

            createNormalArray: ->
                faceNormals = (f.vertexNormals for f in @geometry.faces)
                prelude.concat(prelude.map(prelude.concat(faceNormals), (v) ->
                    [v.x, v.y, v.z]))

            # テクスチャ読み込み。Canvas をテクスチャフォーマットとして使用
            createTextureArray: ->
                # TODO: 複数のテクスチャ読み込み対応
                img = @texture.image
                canvas = document.createElement("canvas")
                canvas.width = img.width
                canvas.height = img.height
                ctx = canvas.getContext("2d")
                ctx.drawImage(img, 0, 0)
                [{width: img.width, height: img.height, canvas: ctx}]

            createUVArray: ->
                faceUVs = @geometry.faceVertexUvs[0]
                prelude.concat(prelude.map(prelude.concat(faceUVs), (v) ->
                    [v.x, v.y]))

        constructor: (@impl = new THREE.JSONLoader()) ->

        load: (path, callback) ->
            THREE.ImageUtils.loadTexture('brick.png', THREE.UVMapping, @_onLoad(callback))
            # @impl.load(path, @_onLoad(callback))
            # @_onLoad(callback)()

        _onLoad: (callback) ->
            (texture) =>
                geometry = new THREE.TorusGeometry(1, 0.3 ,16, 100)
                ctx = new LoadContext(geometry, texture)

                callback({
                    vertices: ctx.createVertexArray()
                    normals: ctx.createNormalArray()
                    uvs: ctx.createUVArray()
                    textures: ctx.createTextureArray()
                })

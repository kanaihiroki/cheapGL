define ["prelude"], (pl) ->
    class ThreeJSLoader
        class LoadContext
            constructor: (@geometry, @texture) ->

            createVertexArray: ->
                vs = @geometry.vertices
                faceVertices = ([vs[face.a], vs[face.b], vs[face.c]] for face in @geometry.faces)

                pl.concat(pl.map(pl.concat(faceVertices), (v) ->
                    [v.x, v.y, v.z]))

            createNormalArray: ->
                faceNormals = (f.vertexNormals for f in @geometry.faces)
                pl.concat(pl.map(pl.concat(faceNormals), (v) ->
                    [v.x, v.y, v.z]))

            createUVArray: ->
                faceUVs = @geometry.faceVertexUvs[0]
                pl.concat(pl.map(pl.concat(faceUVs), (v) ->
                    [v.x, v.y]))

            # 接ベクトルの計算
            # 面倒なので頂点の数と帳尻を合わせるために、計算した接ベクトルを3個まとめて保存している
            # 実際のプログラムだとどうしているのだろうか。
            createTangentArray: ->
                vs = @geometry.vertices
                tangents = for pair in pl.zip(@geometry.faces, @geometry.faceVertexUvs[0])
                    face = pair[0]
                    UVs = pair[1]
                    # Tangent vectorのX成分を計算
                    [v0, v1, v2] = [vs[face.a], vs[face.b], vs[face.c]]
                    x = [v0.x, v1.x, v2.x]
                    y = [v0.y, v1.y, v2.y]
                    z = [v0.z, v1.z, v2.z]
                    u = [UVs[0].x, UVs[1].x, UVs[2].x]
                    v = [UVs[0].y, UVs[1].y, UVs[2].y]

                    # 接ベクトルのローカル座標形での値の計算
                    tangent = for i in [0..2]
                        a = [x,y,z][i]
                        j = vec3.subtract(vec3.create(), [a[1], u[1], v[1]], [a[0], u[0], v[0]])
                        k = vec3.subtract(vec3.create(), [a[2], u[2], v[2]], [a[1], u[1], v[1]])
                        [A,B,C] = vec3.cross(vec3.create(), j, k) # 面法線
                        -C/A
                    [tangent, tangent, tangent]
                pl.concat(tangents)

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

        constructor: (@setting, @impl = new THREE.JSONLoader()) ->

        load: (callback) ->
            THREE.ImageUtils.loadTexture(
                @setting.textureFIle,
                THREE.UVMapping,
                @_onLoad(callback))
            # @impl.load(path, @_onLoad(callback))
            # @_onLoad(callback)()

        _onLoad: (callback) ->
            (texture) =>
                window.g = geometry = new THREE.SphereGeometry(1.5, 32, 32)
                ctx = new LoadContext(geometry, texture)

                callback({
                    vertices: ctx.createVertexArray()
                    normals: ctx.createNormalArray()
                    uvs: ctx.createUVArray()
                    tangents: ctx.createTangentArray()
                    textures: ctx.createTextureArray()
                })

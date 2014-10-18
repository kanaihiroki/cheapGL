define ["prelude"], (prelude) ->
    class ThreeJSLoader
        # 法線マップの読み込みがうまくいかないので、こっちでなんとかする
        class LoadContext
            constructor: (@geometry, @materials) ->

            createVertexArray: () ->
                vs = @geometry.vertices
                faceVertices = ([vs[face.a], vs[face.b], vs[face.c]] for face in @geometry.faces)

                prelude.concat(prelude.map(prelude.concat(faceVertices), (v) ->
                    [v.x, v.y, v.z]))

        constructor: (@impl = new THREE.JSONLoader()) ->

        load: (path, callback) ->
            @impl.load(path, @_onLoad(callback))

        _onLoad: (callback) ->
            (geometry, materials) =>
                # geometry = new THREE.TorusGeometry( 10, 3, 16, 100 )
                geometry = new THREE.TorusGeometry(1, 0.3 ,16 ,100)
                loadContext = new LoadContext(geometry, materials)

                window.a = geometry
                window.b = materials


                # for uvs in geometry.faceVertexUvs[0]
                #     console.log("---------------")
                #     for uv in uvs
                #         console.log(uv)

                callback({
                    vertices: loadContext.createVertexArray()
                })

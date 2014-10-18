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

            createColorMap: ->
                @materials[0].map

        constructor: (@impl = new THREE.JSONLoader()) ->

        load: (path, callback) ->
            console.log(path)
            @impl.load(path, @_onLoad(callback))

        _onLoad: (callback) ->
            (geometry, materials) =>
                loadContext = new LoadContext(geometry, materials)

                window.a = geometry
                window.b = materials
                window.c = loadContext.createColorMap()

                callback({
                    vertices: loadContext.createVertexArray()
                    colorMap: loadContext.createColorMap()
                })

        _createColorVertexArray: (geometry) ->
            vertexColors = for face in geometry.faces
                if face.vertexColors.length > 0
                    face.vertexColors
                else
                    [face.color, face.color, face.color]

            prelude.concat(prelude.map(prelude.concat(vertexColors), (c) ->
                [c.r, c.g, c.b, 1.0]))

        _createNormalVertexArray: (geometry) ->
            vertexNormals = (face.vertexNormals for face in geometry.faces)
            prelude.concat(prelude.map(prelude.concat(vertexNormals), (n) -> [n.x, n.y, n.z]))

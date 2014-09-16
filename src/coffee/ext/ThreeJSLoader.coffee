define ["prelude"], (prelude) ->
	class ThreeJSLoader
		constructor: (@impl = new THREE.JSONLoader()) ->

		load: (path, callback) ->
			@impl.load(path, @onLoad(callback))


		onLoad: (callback) ->
			(geometry, args) =>
				window.a = geometry
				callback({
					vertices: @_createVertexArray(geometry)
					colors: @_createColorVertexArray(geometry)
				})
			

		_createVertexArray: (geometry) ->
			vs = geometry.vertices
			faceVertices = ([vs[face.a], vs[face.b], vs[face.c]] for face in geometry.faces)
			
			prelude.concat(prelude.map(prelude.concat(faceVertices), (v) ->
				[v.x, v.y, v.z]))

		_createColorVertexArray: (geometry) ->
			vertexColors = for face in geometry.faces
				if face.vertexColors.length > 0
					face.vertexColors
				else
					[face.color, face.color, face.color]

			prelude.concat(prelude.map(prelude.concat(vertexColors), (c) ->
				[c.r, c.g, c.b, 1.0]))

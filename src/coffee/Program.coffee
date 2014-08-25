define ["prelude", "renderer/VertexAttributeStream"], (prelude, VertexAttributeStream) ->
	class Program
		constructor: (@vertexShader, @fragmentShader) ->
			@attributes = {}
			@uniforms = {}

		attribute: (attributeName, buffer, stride) ->
			data = buffer.data
			if data.length % stride isnt 0
				throw "array length is not multiple of stride"
		
			@attributes[attributeName] = prelude.unfold data, (xn) ->
				if !(prelude.empty xn)
					prelude.splitAt 3, xn

		vertexAttributeStream: () ->
			new VertexAttributeStream(@attributes)

		uniform: (uniformName, data) ->
			@uniforms[uniformName] = data

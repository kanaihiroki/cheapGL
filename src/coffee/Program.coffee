define ["prelude", "renderer/VertexAttributeStream"], (prelude, VertexAttributeStream) ->
	class Program
		constructor: (@vertexShader, @fragmentShader, @attributeStream = new VertexAttributeStream()) ->
			@uniforms = {}

		bindBuffer: (attributeName, buffer, stride) ->
			@attributeStream.attribute(attributeName, buffer.data, stride)

		vertexAttributeStream: () ->
			new VertexAttributeStream(@attributes)

		uniform: (uniformName, data) ->
			@uniforms[uniformName] = data

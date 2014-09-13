define ["renderer/ShaderUnitBase"], (ShaderUnitBase) ->
	class VertexShaderUnit extends ShaderUnitBase
		constructor: (worker) ->
			super(worker)
			@vertexProcessedHandler = () ->
				throw "invalid state"
			
		onMessage: (msg) =>
			@vertexProcessedHandler(msg.data)

		vertexProcessed: (@vertexProcessedHandler) ->

		process: (primitive) ->
			@send(
				method: "process"
				attributes: primitive
			)

		# override
		shaderType: () ->
			"VertexShader"

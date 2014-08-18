define ["shader/ShaderUnitBase"], (ShaderUnitBase) ->
	class VertexShaderUnit extends ShaderUnitBase
		constructor: (worker) ->
			super(worker)
			@onProcess = @error

		error: ->
			throw "onProcess callback not found"
			
		onProcessed: (callback) ->
			@onProcess = callback

		onMessage: (data) =>
			@onProcess(data)

		# override
		shaderType: () ->
			"VertexShader"

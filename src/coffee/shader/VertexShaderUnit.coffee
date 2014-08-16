define ["shader/ShaderUnitBase"], (ShaderUnitBase) ->
	class VertexShaderUnit extends ShaderUnitBase
		constructor: (worker) ->
			super(worker)
			@onProcess = @error

		error: ->
			throw "onProcess callback not found"
			
		onProcessed: (callback) ->
			@onProcess = callback

		# override
		shaderType: () ->
			"VertexShader"

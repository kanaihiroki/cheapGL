define ["renderer/ShaderUnitBase"], (ShaderUnitBase) ->
	class VertexShaderUnit extends ShaderUnitBase
		constructor: (worker) ->
			super(worker)

		process: (primitive) ->
			@send(
				method: "process"
				attributes: primitive
			)

		# override
		shaderType: () ->
			"VertexShader"

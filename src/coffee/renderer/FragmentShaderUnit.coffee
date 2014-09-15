define ["renderer/ShaderUnitBase"], (ShaderUnitBase) ->
	class FragmentShaderUnit extends ShaderUnitBase
		constructor: (worker) ->
			super(worker)

		process: (fragment) ->
			@send(
				method: "process"
				attributes: fragment
			)

		# override
		shaderType: () ->
			"FragmentShader"

define ["renderer/ShaderUnitBase"], (ShaderUnitBase) ->
	class FragmentShaderUnit extends ShaderUnitBase
		constructor: (worker, @frameBuffer) ->
			super(worker)

		onMessage: (msg) =>
			@frameBuffer.write(msg.data)

		process: (fragment) ->
			@send(
				method: "process"
				attributes: fragment
			)

		# override
		shaderType: () ->
			"FragmentShader"

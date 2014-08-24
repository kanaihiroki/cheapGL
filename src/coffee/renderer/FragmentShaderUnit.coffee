define ["renderer/ShaderUnitBase"], (ShaderUnitBase) ->
	class FragmentShaderUnit extends ShaderUnitBase
		constructor: (worker, @frameBuffer) ->
			super(worker)

		onMessage: (msg) =>
			@frameBuffer.write(msg.data)

		# override
		shaderType: () ->
			"FragmentShader"

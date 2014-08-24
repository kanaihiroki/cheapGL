define ["renderer/ShaderUnitBase"], (ShaderUnitBase) ->
	class VertexShaderUnit extends ShaderUnitBase
		constructor: (worker, @rasterizer) ->
			super(worker)
			
		onMessage: (msg) =>
			@rasterizer.process(msg.data)

		# override
		shaderType: () ->
			"VertexShader"

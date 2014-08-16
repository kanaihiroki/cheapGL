define ["shader/ShaderUnitBase"], (ShaderUnitBase) ->
	class FragmentShaderUnit extends ShaderUnitBase
		# override
		shaderType: () ->
			"VertexShader"

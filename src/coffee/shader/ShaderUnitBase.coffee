define [], () ->
	class ShaderUnitBase
		constructor: (worker) ->
			@worker = worker
			@shader = null
			@mode = null

		loadShader: (shader) ->
			@send(
				method: "setShader"
				shader: shader
			)

		process: (mode, attributes) ->
			@mode = mode
			@send(
				method: "process"
				attributes: attributes
			)

		setUniform: (uniforms) ->
			@send {
				method: "setUniforms"
				uniforms: uniforms
			}

		send: (msg) ->
			msg["shaderType"] = @shaderType()
			@worker.postMessage(msg)

		shaderType: () ->
			throw "call abstract method"
	

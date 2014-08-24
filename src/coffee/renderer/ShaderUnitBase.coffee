define [], () ->
	class ShaderUnitBase
		constructor: (worker) ->
			@worker = worker
			@shader = null
			@state = "initialized"

		loadShader: (shader) ->
			@send(
				method: "setShader"
				shaderType: @shaderType()
				shader: shader
			)

		process: (attributes) ->
			@state = "running"
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
			@worker.postMessage(msg)

		shaderType: () ->
			throw "call abstract method"

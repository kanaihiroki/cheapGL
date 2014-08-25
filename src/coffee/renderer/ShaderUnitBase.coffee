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

		process: (vas) ->
			@state = "running"
			@send(
				method: "process"
				attributes: vas
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

define [], () ->
	class ShaderUnitBase
		constructor: (worker) ->
			@worker = worker
			@shader = null

		loadShader: (shader) ->
			@send(
				method: "setShader"
				shader: shader
			)

		process: (attribute) ->
			@send(
				method: "process"
				attribute: attribute
			)

		send: (msg) ->
			msg["shaderType"] = @shaderType()
			@worker.postMessage(msg)

		shaderType: () ->
			throw "call abstract method"
	

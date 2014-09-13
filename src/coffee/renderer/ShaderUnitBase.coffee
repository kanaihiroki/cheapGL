define [], () ->
	class ShaderUnitBase
		constructor: (worker) ->
			@worker = worker

		loadShader: (shader) ->
			@send(
				method: "setShader"
				shaderType: @shaderType()
				shader: shader
			)

		process: ->
			throw "can not call abstract method"

		setUniform: (uniforms) ->
			@send {
				method: "setUniforms"
				uniforms: uniforms
			}

		send: (msg) ->
			@worker.postMessage(msg)

		shaderType: () ->
			throw "can not call abstract method"

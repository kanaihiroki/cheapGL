define [], () ->
	class ShaderUnitBase
		constructor: (worker) ->
			@worker = worker
			@onProcessedHandler = () ->
				throw "invalid state"

		onMessage: (msg) =>
			@onProcessedHandler(msg.data)

		onProcessed: (@onProcessedHandler) ->

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

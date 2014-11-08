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

        preProcess: (renderer) ->
            # uniform値はドローコールに対して設定されるらしい
            @setUniform(renderer.program.uniforms)
            # テクスチャユニットも毎回転送するしかないはず
            @setTextureUnit(renderer.textureUnit)

        process: ->
            throw "can not call abstract method"

        setUniform: (uniforms) ->
            @send {
                method: "setUniforms"
                uniforms: uniforms
            }

        setTextureUnit: (textureUnit) ->
            @send {
                method: "setTextureUnit"
                textureUnit: textureUnit
            }

        send: (msg) ->
            @worker.postMessage(msg)

        shaderType: () ->
            throw "can not call abstract method"

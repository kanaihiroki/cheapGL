# cheepGL Context API implementation
define([
    "Color",
    "Program",
    "Buffer",
    "Texture",
    "Renderer",
    "IllegalArgumentException",
    ], (
    Color,
    Program,
    Buffer,
    Texture,
    Renderer,
    IllegalArgumentException) ->
    class Context
        @create: (htmlCanvas) ->
            canvasImpl = htmlCanvas.getContext("2d")

            width = htmlCanvas.width
            height = htmlCanvas.height

            new Context(canvasImpl,
                Renderer.create(canvasImpl, width, height))

        constructor: (@canvasContext, @renderer) ->
            @canvas = @canvasContext.canvas
            @clearColorStyle = "rgb(0, 0, 0, 1)"
            @programs = []

            @buffers = []
            @currentBuffer = null

            @textures = [] # テクスチャ自体はテクスチャユニットの数より多く持てるようになっているということ
            @currentTextureUnitIndex = 0

        toString: () ->
            "cheepGL Context[#{@canvasContext}]"

        clearColor: (r, g, b, a) ->
            @clearColorStyle = "rgb(#{r}, #{g}, #{b}, #{a})"

        clear: () ->
            @renderer.clear(@clearColorStyle)

        # shader API
        createProgram: (vert, frag) ->
            if typeof vert isnt "string"
                throw new IllegalArgumentException("vert")

            if typeof frag isnt "string"
                throw new IllegalArgumentException("frag")

            programId = @programs.length
            @programs.push(new Program(vert, frag))
            return programId

        useProgram: (programId) ->
            @renderer.loadProgram(@programs[programId])

        # buffer API
        createBuffer: () ->
            bufferId = @buffers.length
            @buffers.push(new Buffer(bufferId))
            return bufferId

        bindBuffer: (bufferType, bufferId) ->
            @currentBuffer = @buffers[bufferId]

        bufferData: (bufferType, data) ->
            # bufferTypeは必要ないように思える
            @currentBuffer.data = data

        # texture API
        activeTexture: (index) ->
            @currentTextureUnitIndex = index

        createTexture: ->
            textureId = @textures.length
            @textures.push(new Texture())
            return textureId

        bindTexture: (textureType, textureId) ->
            texture = @textures[textureId]
            @_currentTexture(texture)

        texImage2D: (mode, texture) ->
            @_currentTexture().loadImage(texture)


        vertexAttribPointer: (programId, attributeName, stride) ->
            program = @programs[programId]
            program.bindBuffer(attributeName, @currentBuffer, stride)

        uniform: (programId, uniformName, data) ->
            program = @programs[programId]
            program.uniform(uniformName, data)

        # rendering
        drawArrays: (mode, first, count) ->
            @renderer.drawArrays(mode, first, count)

        _currentTexture: ->
            if arguments.length > 0
                @renderer.textureUnit[@currentTextureUnitIndex] = arguments[0]
            else
                @renderer.textureUnit[@currentTextureUnitIndex]
)

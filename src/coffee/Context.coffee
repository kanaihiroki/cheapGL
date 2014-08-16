# cheepGL Context API implementation
define([
	"Color",
	"Program",
	"Buffer",
	"util",
	"IllegalArgumentException"
	], (
	Color,
	Program,
	Buffer,
	util,
	IllegalArgumentException) ->
	class Context
		constructor: (canvasContext, shaderUnit) ->
			@canvasContext = canvasContext
			@canvas = @canvasContext.canvas
			@shaderUnit = shaderUnit
			@programs = []
			@buffers = []
			@currentBuffer = null

		toString: () ->
			"cheepGL Context[#{@canvasContext}]"

		clear: () ->
			@canvasContext.fillStyle = "rgb(0, 0, 0, 1)"
			@canvasContext.fillRect(0, 0, @canvas.width, @canvas.height)

		createProgram: (vert, frag) ->
			if not util.isString(vert)
				throw new IllegalArgumentException("vert")

			if not util.isString(vert)
				throw new IllegalArgumentException("frag")
	
			programId = @programs.length
			@programs.push(new Program(vert, frag))
			return programId

		createBuffer: () ->
			bufferId = @buffers.length
			@buffers.push(new Buffer(bufferId))
			return bufferId

		useProgram: (programId) ->
			@shaderUnit.loadProgram(@programs[programId])

		bindBuffer: (bufferType, bufferId) ->
			@currentBuffer = @buffers[bufferId]

		bufferData: (bufferType, data) ->
			# bufferTypeは必要ないように思える
			@currentBuffer.data = data

		vertexAttribPointer: (programId, attributeName, stride) ->
			program = @programs[programId]
			program.attribute(attributeName, @currentBuffer, stride)

		drawArrays: (mode, first, count) ->
			@shaderUnit.drawArrays(mode, first, count)
	)

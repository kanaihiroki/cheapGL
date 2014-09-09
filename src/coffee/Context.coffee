# cheepGL Context API implementation
define([
	"Color",
	"Program",
	"Buffer",
	"Renderer",
	"IllegalArgumentException"
	], (
	Color,
	Program,
	Buffer,
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
			@programs = []
			@buffers = []
			@currentBuffer = null
			@clearColorStyle = "rgb(0, 0, 0, 1)"

		toString: () ->
			"cheepGL Context[#{@canvasContext}]"

		clearColor: (r, g, b, a) ->
			@clearColorStyle = "rgb(#{r}, #{g}, #{b}, #{a})"

		# 同期的に動作する
		clear: () ->
			@renderer.clear(@clearColorStyle)
	
		createProgram: (vert, frag) ->
			if typeof vert isnt "string"
				throw new IllegalArgumentException("vert")

			if typeof frag isnt "string"
				throw new IllegalArgumentException("frag")
	
			programId = @programs.length
			@programs.push(new Program(vert, frag))
			return programId

		createBuffer: () ->
			bufferId = @buffers.length
			@buffers.push(new Buffer(bufferId))
			return bufferId

		useProgram: (programId) ->
			@renderer.loadProgram(@programs[programId])

		bindBuffer: (bufferType, bufferId) ->
			@currentBuffer = @buffers[bufferId]

		bufferData: (bufferType, data) ->
			# bufferTypeは必要ないように思える
			@currentBuffer.data = data

		vertexAttribPointer: (programId, attributeName, stride) ->
			program = @programs[programId]
			program.attribute(attributeName, @currentBuffer, stride)

		uniform: (programId, uniformName, data) ->
			program = @programs[programId]
			program.uniform(uniformName, data)

		drawArrays: (mode, first, count) ->
			@renderer.drawArrays(mode, first, count)
	)

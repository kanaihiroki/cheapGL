importScripts("/bower_components/gl-matrix/dist/gl-matrix.js")
importScripts("gl-matrix-ext.js")

# FragmentShaderと共通かできる?(現実のハードウェアではしている)
class UnifiedShaderWorker
	constructor: ->
		@shader = null
		@shaderType = null
		@process = () -> throw "shader is empty"

	dispatch: (ev) =>
		msg = ev.data
		mthd = @[msg.method]
		mthd.call(this, msg)

	setShader: (msg) ->
		@shader = load(msg.shader)
		switch msg.shaderType
			when "VertexShader" then @process = @processVertex
			when "FragmentShader" then @process = @processFragment
			else "unknown shaderType: " + msg.shaderType

	setUniforms: (msg) ->
		for key, value of msg.uniforms
			@shader[key] = value

	processVertex: (msg) ->
		attrs = msg.attributes

		# TODO: cleanup
		processed = for i in [0..attrs.size-1]
			args = {}
			for key, val of attrs
				args[key] = val[i]
			@shader.main(args)

		self.postMessage(processed)

	processFragment: (msg) ->
		attrs = msg.attributes
		n = attrs.gl_Position.length
		keys = (key for key of attrs)

		processed = for i in [0..n-1]
			args = {}
			for key in keys
				args[key] = attrs[key][i]
			for key, value of @shader.main(args)
				args[key] = value
			args

		self.postMessage(processed)

	run: ->
		self.addEventListener('message', @dispatch, false);

# importは予約語のような扱いだったのでこの名前に
load = (source) ->
	eval(source)
	return this.shader

new UnifiedShaderWorker().run()

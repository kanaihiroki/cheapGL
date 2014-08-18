importScripts("../gl-matrix.js")

# FragmentShaderと共通かできる?(現実のハードウェアではしている)
class VertexShaderWorker
	constructor: ->
		@shader = null

	dispatch: (ev) =>
		msg = ev.data
		mthd = @[msg.method]
		mthd.call(this, msg)

	setShader: (msg) ->
		# globalに読み込まれるが
		# あとでもっと良い方法が見つかったときのためにフィールド変数に束縛する
		@shader = load(msg.shader)

	setUniforms: (msg) ->
		for key, value of msg.uniforms
			@shader[key] = value

	process: (msg) ->
		attrs = msg.attributes
		n = attrs.position.length

		# TODO: cleanup
		processed = for i in [0..n-1]
			args = {}
			for key, val of attrs
				args[key] = val[i]
			@shader.process(args)

		self.postMessage(processed)
	
	run: ->
		self.addEventListener('message', @dispatch, false);

# importは予約語のような扱いだったのでこの名前に
load = (source) ->
	eval(source)
	return this.shader

new VertexShaderWorker().run()

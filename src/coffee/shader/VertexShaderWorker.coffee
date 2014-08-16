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
		@shader = importShader(msg.shader)

	process: (msg) ->
		@shader.process(msg.attribute)

	run: ->
		self.addEventListener('message', @dispatch, false);

# importは予約語のような扱いだったのでこの名前に
importShader = (fileName) ->
	importScripts("../" + fileName)
	return this.shader

new VertexShaderWorker().run()

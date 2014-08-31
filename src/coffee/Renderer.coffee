# Renderer.coffee - シェーダーによるレンダリングパイプラインの実装
define([
	"prelude",
	"primitive",
	"renderer/VertexShaderUnit",
	"renderer/FragmentShaderUnit",
	"renderer/FrameBuffer",
	"renderer/Rasterizer"
], (
	prelude,
	primitive,
	VertexShaderUnit,
	FragmentShaderUnit,
	FrameBuffer,
	Rasterizer
	) ->

	getBoundingRect = (position) ->
		min = (arr) -> prelude.min.apply(this, arr)
		max = (arr) -> prelude.max.apply(this, arr)
		xs = (p[0] for p in position)
		ys = (p[1] for p in position)
		x_min = min(xs)
		y_min = min(ys)
		x_max = max(xs)
		y_max = max(ys)
		top_left = [x_min, y_max]
		top_right = [x_max, y_max]
		bottom_left = [x_min, y_min]
		bottom_right = [x_max, y_min]
		return [top_left, top_right, bottom_right, bottom_left]

	class Renderer
		# TODO: require.jsに現在のパスを得る方法はあるのだろうか?
		@UNIFIED_SHADER_WORKER = "UnifiedShaderWorker.js"

		# factory method
		# このモジュールのオブジェクトの接続を行う
		@create: (canvasImpl, width, height) ->
			vertWorker = new Worker(@UNIFIED_SHADER_WORKER)
			fragWorker = new Worker(@UNIFIED_SHADER_WORKER)
			frameBuffer = new FrameBuffer(canvasImpl)
			fragmentShaderUnit = new FragmentShaderUnit(fragWorker, frameBuffer)
			rasterizer = new Rasterizer(width, height, fragmentShaderUnit)
			vertexShaderUnit = new VertexShaderUnit(vertWorker, rasterizer)
			vertWorker.addEventListener("message", vertexShaderUnit.onMessage)
			fragWorker.addEventListener("message", fragmentShaderUnit.onMessage)
			new Renderer(vertexShaderUnit, fragmentShaderUnit, frameBuffer)
		
		constructor: (@vertexShaderUnit, @fragmentShaderUnit, @frameBuffer) ->
			@program = null

		toString: ->
			"ShaderUnit[#{@program}]"

		loadProgram: (program) ->
			@program = program
			@vertexShaderUnit.loadShader(@program.vertexShader)
			@fragmentShaderUnit.loadShader(@program.fragmentShader)

		# OpenGL本来の処理と違って
		# 配列のコピーを生成しているのでこの部分の処理はかなり重い。
		# TODO: 型付き配列ビューを使って、コピーしない配列操作を使う
		drawArrays: (mode, first, count) ->
			vas = @program.vertexAttributeStream()
			# attributeArrays = @program.attributes
			end = first + count - 1

			# uniform値はドローコールに対して設定されるらしい
			@vertexShaderUnit.setUniform(@program.uniforms)
			@fragmentShaderUnit.setUniform(@program.uniforms)

			for indexArray in primitive.packVertexIndices(mode, first, count)
				# vertexAttributes = slice(attributeArrays, indexArray)
				@vertexShaderUnit.process(vas.slice(indexArray))

		clear: (clearColor) ->
			@frameBuffer.clear(clearColor)
	)

# Renderer.coffee - シェーダーによるレンダリングパイプラインの実装
define([
	"renderer/VertexShaderUnit",
	"renderer/FragmentShaderUnit",
	"renderer/FrameBuffer",
	"renderer/Rasterizer"
], (
	VertexShaderUnit,
	FragmentShaderUnit,
	FrameBuffer,
	Rasterizer
	) ->

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

		loadProgram: (@program) ->
			@vertexShaderUnit.loadShader(@program.vertexShader)
			@fragmentShaderUnit.loadShader(@program.fragmentShader)

		clear: (clearColor) ->
			@frameBuffer.clear(clearColor)

		# OpenGL本来の処理と違って
		# 配列のコピーを生成しているのでこの部分の処理は重いはず。
		# TODO: 型付き配列ビューを使って、コピーしない配列操作を使う
		drawArrays: (mode, first, count) ->
			end = first + count - 1

			# uniform値はドローコールに対して設定されるらしい
			@vertexShaderUnit.setUniform(@program.uniforms)
			@fragmentShaderUnit.setUniform(@program.uniforms)

			for primitive in @program.attributeStream.getPrimitiveArray(mode, first, count)
				@vertexShaderUnit.process(primitive)
	)

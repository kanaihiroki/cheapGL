define([
	"require",
	"shader/VertexShaderUnit",
	"shader/FragmentShaderUnit"
], (
	require,
	VertexShaderUnit,
	FragmentShaderUnit
	) ->
	class ShaderUnit
		# require.jsに現在のパスを得る方法はあるのだろうか?o
		@VSHADER_WORKER = "js/shader/VertexShaderWorker.js"
		@FSHADER_WORKER = "js/shader/FragmentShaderWorker.js"

		# factory method
		@create: () ->
			# このモジュールのオブジェクトの接続を行う
			vertexShaderUnit = new VertexShaderUnit(new Worker(@VSHADER_WORKER))
			fragmentShaderUnit = new FragmentShaderUnit(new Worker(@FSHADER_WORKER))
			instance = new ShaderUnit(vertexShaderUnit, fragmentShaderUnit)
			vertexShaderUnit.onProcessed(instance.rasterize)
			return instance
		
		constructor: (vertexShaderUnit, fragmentShaderUnit) ->
			@vertexShaderUnit = vertexShaderUnit
			@fragmentShaderUnit = fragmentShaderUnit
			@program = null

		toString: ->
			"ShaderUnit[#{@program}]"

		loadProgram: (program) ->
			@program = program
			@vertexShaderUnit.loadShader(@program.vertexShader)
			@fragmentShaderUnit.loadShader(@program.fragmentShader)

		rasterize: (attributes) ->
			# TODO: stub
			console.log("rasterize", attributes)

		# OpenGL本来の処理と違って
		# 配列のコピーを生成しているのでこの部分の処理はかなり重い。
		# TODO: 型付き配列ビューを使って、コピーしない配列操作を使う
		drawArrays: (mode, offset, count) ->
			attributeArrays = @program.attributes
			end = offset + count - 1
			for i in [offset..end]
				keys = (key for key of attributeArrays)

				# TODO: cleanup
				ret = {}
				for key in keys
					ret[key] = attributeArrays[key][i]

				@vertexShaderUnit.process(ret)
	)

define([
	"primitive",
	"shader/VertexShaderUnit",
	"shader/FragmentShaderUnit"
], (
	primitive,
	VertexShaderUnit,
	FragmentShaderUnit
	) ->

	# 頂点属性配列をピックアップした配列を返す
	slice = (attributeArrays, packedVertices) ->
		ret = {}
		for key of attributeArrays
			ret[key] = (attributeArrays[key][i] for i in packedVertices)
		return ret

	class ShaderUnit
		# require.jsに現在のパスを得る方法はあるのだろうか?o
		@VSHADER_WORKER = "js/shader/VertexShaderWorker.js"
		@FSHADER_WORKER = "js/shader/FragmentShaderWorker.js"

		# factory method
		@create: () ->
			# このモジュールのオブジェクトの接続を行う
			vertWorker = new Worker(@VSHADER_WORKER)
			fragWorker = new Worker(@FSHADER_WORKER)
			vertexShaderUnit = new VertexShaderUnit(vertWorker)
			fragmentShaderUnit = new FragmentShaderUnit(fragWorker)

			vertWorker.addEventListener("message",
				(msg) -> vertexShaderUnit.onMessage(msg.data))
			fragWorker.addEventListener("message",
				(msg) -> fragmentShaderUnit.onMessage(msg.data))
	
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

		rasterize: (attributes) =>
			p = (attribute.gl_Position for attribute in attributes)
			# ichiho
			console.log(p[0], p[1], p[2])

		# OpenGL本来の処理と違って
		# 配列のコピーを生成しているのでこの部分の処理はかなり重い。
		# TODO: 型付き配列ビューを使って、コピーしない配列操作を使う
		drawArrays: (mode, first, count) ->
			attributeArrays = @program.attributes
			end = first + count - 1

			# uniform値はドローコールに対して設定されるらしい
			@vertexShaderUnit.setUniform(@program.uniforms)
			# TODO: fragmentShaderUnit

			for packedVertices in primitive.packVertexIndices(mode, first, count)
				vertexAttributes = slice(attributeArrays, packedVertices)
				@vertexShaderUnit.process(mode, vertexAttributes)

			# for i in [first..end]
			# 	keys = (key for key of attributeArrays)

			# 	# TODO: cleanup
			# 	ret = {}
			# 	for key in keys
			# 		ret[key] = attributeArrays[key][i]

			# 	@vertexShaderUnit.process(mode, ret)
	)

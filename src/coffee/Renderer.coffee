# Renderer.coffee - シェーダーによるレンダリングパイプラインの実装
define([
    "renderer/VertexShaderUnit",
    "renderer/FragmentShaderUnit",
    "renderer/FrameBuffer",
    "renderer/Rasterizer",
    "Constants"
], (
    VertexShaderUnit,
    FragmentShaderUnit,
    FrameBuffer,
    Rasterizer,
    Constants
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
            fragmentShaderUnit = new FragmentShaderUnit(fragWorker)
            rasterizer = new Rasterizer(width, height, fragmentShaderUnit)
            vertexShaderUnit = new VertexShaderUnit(vertWorker)
            vertWorker.addEventListener("message", vertexShaderUnit.onMessage)
            fragWorker.addEventListener("message", fragmentShaderUnit.onMessage)
            renderer = new Renderer(vertexShaderUnit, fragmentShaderUnit, frameBuffer, rasterizer)
            vertexShaderUnit.onProcessed(renderer.onVertexProcessed)
            fragmentShaderUnit.onProcessed(renderer.onFragmentProcessed)
            return renderer

        constructor: (@vertexShaderUnit, @fragmentShaderUnit, @frameBuffer, @rasterizer) ->
            @program = null
            @currentTextureUnit = 0
            @textureUnit = new Array(Constants.GL_MAX_TEXTURE_UNITS) # とりあえずテクスチャユニット数は8

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

            # processは非同期なので、いったん準備段階として呼び出す
            @vertexShaderUnit.preProcess(@)
            @fragmentShaderUnit.preProcess(@)

            # 非同期処理を使っている関係で、頂点ごとに分けて渡すよりも
            # プリミティブを丸ごと送った方がよい
            # 頂点シェーダを通した後のプリミティブの再構築がめんどくさそうなのて
            for primitive in @program.attributeStream.getPrimitiveArray(mode, first, count)
                @vertexShaderUnit.process(primitive)

        onVertexProcessed: (primitive) =>
                # console.log(primitive)
                fragments = @rasterizer.rasterize(primitive)
                # console.log(fragments)
                if fragments?.gl_Position?.length > 0
                    @fragmentShaderUnit.process(fragments)

        onFragmentProcessed: (fragments) =>
                @frameBuffer.write(fragments)
    )

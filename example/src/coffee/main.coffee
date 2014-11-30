window.render = ->
    require ["App", "Setting"], (App, Setting) ->
        select = (query) -> document.querySelector(query)
        c = select("#controlpanel")

        setting = new Setting(
            # Canvas要素
            document.querySelector('#display'),

            c.vertSource,
            c.fragSource,
            c.modelPath,

            0.1,
            100,

            # 頂点属性の要素数
            stride = 3,

            # モデルデータ
            vertices = [
                0.0, 1.0, 0.0,
                1.0, 0.0, 0.0,
                -1.0, 0.0, 0.0,
                # カリングで消す用
                0.0, 1.0, 0.0,
                1.0, 2.0, 0.0,
                -1.0, 2.0, 0.0
            ],

            colors = [
                0.0, 1.0, 0.0, 1.0,
                1.0, 0.0, 0.0, 1.0,
                0.0, 0.0, 1.0, 1.0,
                # カリングで消す用
                0.0, 1.0, 0.0, 1.0,
                1.0, 0.0, 0.0, 1.0,
                0.0, 0.0, 1.0, 1.0,
            ],

            textureFile = c.image,
            lightPosition = c.lightPosition
        )
        App.main(setting)

# for debug
onload = window.render
$(() -> setTimeout(onload, 1000))

require.config({
  baseUrl: "js"
})

main = () ->
  require ["App", "Setting"], (App, Setting) ->
    setting = new Setting(
      # Canvas要素
      document.getElementById('display'),

      # 頂点属性の要素数
      stride = 3,

      # モデルデータ
      vertices = [
        0.0, 1.0, 0.0,
        1.0, 0.0, 0.0,
        -1.0, 0.0, 0.0
      ]
    )
    new App(setting).run()

window.onload = main

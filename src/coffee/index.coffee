require.config({
  baseUrl: "js"
})

main = () ->
	require ["App", "Setting"], (App, Setting) ->
		setting = new Setting(
			# シェーダのソースコードのパス
			"asset/passthrough-vert.js",
			"asset/passthrough-frag.js"

			# シェーダ入力欄
			document.querySelector("#vert"),
			document.querySelector("#frag"),

			# Canvas要素
			document.querySelector('#display'),

			# 頂点属性の要素数
			stride = 3,

			# モデルデータ
			vertices = [
				0.0, 1.0, 0.0,
				1.0, 0.0, 0.0,
				-1.0, 0.0, 0.0,
				# 0.0, 1.0, 0.0,
				# 1.0, 2.0, 0.0,
				# -1.0, 2.0, 0.0
			],
		)
		App.main(setting)

window.onload = main

$("#render-button").click(() ->
	require ["App", "Setting"], (App, Setting) ->
		select = (query) -> document.querySelector(query)
		c = select("#controlpanel")

		setting = new Setting(
			# Canvas要素
			document.querySelector('#display'),

			c.vertSource,
			c.fragSource,
			c.modelPath,
			c.ext,
			c.rotate,

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
		)
		App.main(setting)
	)

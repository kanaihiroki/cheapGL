class VertexShader
	# uniform変数はfield injectionされる
	constructor: ->
		@mvpMatrix = null
		
	process: (attribute) ->
		console.log(attribute)
	
# 命名規約としてShaderという名前のグローバル変数を使用する
this.shader = new VertexShader()


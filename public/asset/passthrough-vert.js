// パススルーシェーダ実装
function VertexShader() {
	// uniform変数はfield injectionされる
	this.mvpMatrix = null;

		
	this.process = function (attribute) {
		return {
				gl_Position: attribute.position
		};
	};
}

// 命名規約としてShaderという名前のグローバル変数を使用する
this.shader = new VertexShader();

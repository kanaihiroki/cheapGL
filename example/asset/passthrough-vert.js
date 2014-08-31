// パススルーシェーダ実装
function VertexShader() {
	// uniform変数はfield injectionされる
	this.mvpMatrix = null;
		
	// 命名規約としてmainを使用する。
	this.main = function (attribute) {
		// ベクトル演算は、gl-matrix.jsを使用できる。
		// importScriptsすれば、ほかのライブラリも読み込める
		var pos = vec4.fromVec3(attribute.position, 1.0);
		return {
			gl_Position: vec4.transformMat4(pos, pos, this.mvpMatrix)
		};
	};
}

// 命名規約としてShaderという名前のグローバル変数を使用する
this.shader = new VertexShader();

// ランバートシェーダ実装(グーローシェーディング)
function FragmentShader() {
	this.main = function(fragment) {
		return {
			gl_FragColor: fragment.gl_Color
		};
	};
}

// 命名規約としてShaderという名前のグローバル変数を使用する
this.shader = new FragmentShader();

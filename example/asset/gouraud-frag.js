// フォンシェーダ実装
function FragmentShader() {
    this.color = null;
    this.lightPosition = null;

	this.main = function(fragment) {
		return {
            // gl_FragColor: vec4.fromVec3(fragment.gl_Color, 1.0)
			gl_FragColor: fragment.gl_Color
		};
	};
}

// 命名規約としてShaderという名前のグローバル変数を使用する
this.shader = new FragmentShader();

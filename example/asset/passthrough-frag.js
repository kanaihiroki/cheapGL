function FragmentShader() {
	this.main = function() {
		return {
			// gl_FragColor: vec4.fromValues(1.0, 1.0, 0.0, 1.0)
			gl_FragColor: this.color
		};
	};
}

// 命名規約としてShaderという名前のグローバル変数を使用する
this.shader = new FragmentShader();

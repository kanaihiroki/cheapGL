// テクスチャマッピング実装
function FragmentShader() {
    this.color = null;
    this.lightPosition = null;
    this.texture0 = null;
    
	this.main = function(fragment) {
        fragment.gl_Color = vec4.texture2D(this.texture0, fragment.texture_coord);
        
		return {
			gl_FragColor: fragment.gl_Color
		};
	};
}

// 命名規約としてShaderという名前のグローバル変数を使用する
this.shader = new FragmentShader();

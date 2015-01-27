// 法線マッピング実装
function FragmentShader() {
    this.color = null;
    this.lightPosition = null;
    this.texture0 = null;
    
	this.main = function(fragment) {
        var texture_normal = vec4.texture2D(this.texture0, fragment.texture_coord),
            diffuse = Math.max(vec3.dot(fragment.LightDir, texture_normal), 0.0);

		return {
			gl_FragColor: [diffuse, diffuse, diffuse, 1]
		};
	};
}

// 命名規約としてShaderという名前のグローバル変数を使用する
this.shader = new FragmentShader();

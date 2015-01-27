// 頂点色 フラグメントシェーダ実装
// 頂点シェーダーで決めた色をフラグメント単位で補完した結果を書き込むだけ
function FragmentShader() {
	this.main = function(fragment) {
		return {
			gl_FragColor: fragment.gl_Color
		};
	};
}

this.shader = new FragmentShader();

// パススルーシェーダ実装
function VertexShader() {
    // uniform変数はfield injectionされる
    this.mvpMatrix = null;
    this.color = null;

    // 命名規約としてmainを使用する。
    this.main = function (vertex) {
        // ベクトル演算は、gl-matrix.jsを使用できる。
        // importScriptsすれば、ほかのライブラリも読み込める

        var pos = vec4.fromVec3(vertex.position, 1.0);
        vec4.transformMat4(pos, pos, this.mvpMatrix);

        // varying 変数は戻り値で出力する
        return {
            gl_Color: this.color,
            gl_Position: pos
        };
    };
}

// 命名規約としてShaderという名前のグローバル変数を使用する
this.shader = new VertexShader();

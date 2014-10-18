// フォンシェーダ実装
function VertexShader() {
	this.mvpMatrix = null;

	this.main = function (vertex) {
		// console.log(vertex.normal);
		var pos = vec4.fromVec3(vertex.position, 1.0);
		vec4.transformMat4(pos, pos, this.mvpMatrix);

		return {
			gl_Color: vertex.color,
			gl_Position: pos
		};
	};
}

this.shader = new VertexShader();

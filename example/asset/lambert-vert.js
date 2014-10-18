// ランバートシェーダ実装(グーローシェーディング)
function VertexShader() {
    this.mvpMatrix = null;
    this.modelViewMatrix = null;
    this.color = null;
    this.lightPosition = null;
    this.Kd = null; // ディヒューズ反射率
    this.Ld = null; // 光源の強度

    this.main = function (vertex) {
        var pos = vec4.fromVec3(vertex.position, 1.0);

        // シェーディング
        
        // 頂点法線は正規化済みを受け入れるので下記は不要
        // vec3.normalize(vertex.normal, vertex.normal);
        var eyeCoords = vec4.transformMat4(vec4.create(), pos, this.modelViewMatrix),
            lightPosition = vec4.transformMat4(vec4.create(), this.lightPosition, this.modelViewMatrix),
            s = vec3.sub(vec3.create(), lightPosition, eyeCoords);
        vec3.normalize(s, s);

        // Diffuse Shading 方程式
        // lightIntensity = Ld * Kd * max(dot(s, tnorm), 0)
        var lightIntensity = vec3.mul(vec3.create(), this.Ld, this.Kd),
            angle = Math.max(vec3.dot(s, vertex.normal), 0);
        vec3.scale(lightIntensity, lightIntensity, angle);

        return {
            gl_Color: vec4.fromVec3(lightIntensity, 1.0),
            gl_Position: vec4.transformMat4(vec4.create(), pos, this.mvpMatrix)
        };
    };
}

this.shader = new VertexShader();

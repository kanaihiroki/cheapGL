// フォンシェーダ実装
function VertexShader() {
    this.mvpMatrix = null;
    this.modelViewMatrix = null;
    this.color = null;
    this.lightPosition = null;
    this.Ka = null; // アンビエント反射率
    this.Kd = null; // ディヒューズ反射率
    this.Ks = null; // スペキュラ反射率
    this.shiness = null; // スペキュラ輝き乗数
    this.La = null; // 光源のアンビエント強度
    this.Ld = null; // 光源のディヒューズ強度
    this.Ls = null; // 光源のスペキュラ強度

    this.main = function (vertex) {
        var pos = vec4.fromVec3(vertex.position, 1.0);

        // シェーディング
        
        // 頂点法線は正規化済みを受け入れるので下記は不要
        // vec3.normalize(vertex.normal, vertex.normal);

        var ambient = vec3.mul(vec3.create(), this.La, this.Ka),
            diffuse = vec3.create(),
            specular = vec3.fromValues(0.0, 0.0, 0.0),
            eyeCoords = vec4.create(),
            lightPosition = vec4.create(),
            s = vec3.create(), 
            v = vec3.create(),
            lightIntensity = vec3.create();

        vec4.transformMat4(eyeCoords, pos, this.modelViewMatrix);
        vec4.transformMat4(lightPosition, this.lightPosition, this.modelViewMatrix);
        vec3.sub(s, lightPosition, eyeCoords),
        vec3.scale(v, eyeCoords, -1);
        
        vec3.normalize(s, s);
        vec3.normalize(v, v);

        var r = vec3.reflection(vec3.scale(vec3.create(), s, -1), vertex.normal),
            sn = Math.max(vec3.dot(s, vertex.normal), 0.0);

        vec3.scale(diffuse, vec3.mul(diffuse, this.Ld, this.Kd), sn);

        if (sn > 0) {
            var base = Math.max(vec3.dot(r, v), 0,0),
                coefficient = Math.pow(base, this.shiness);
            vec3.scale(specular, vec3.mul(specular, this.Ls, this.Ks), coefficient);
        }

        vec3.add(lightIntensity, vec3.add(lightIntensity, ambient, diffuse), specular);

        for (var i = 0, n = lightIntensity.length; i < n; ++i) {
            if (isNaN(lightIntensity[i]))
                throw "nan found";
        }

        return {
            gl_Color: vec4.fromVec3(lightIntensity, 1.0),
            gl_Position: vec4.transformMat4(vec4.create(), pos, this.mvpMatrix)
        };
    };
}

this.shader = new VertexShader();

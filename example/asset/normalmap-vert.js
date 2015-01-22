// 法線マッピング実装
function VertexShader() {
    this.mvpMatrix = null;
    this.modelViewMatrix = null;
    this.color = null;
    this.lightPosition = null;
    this.texture0 = null;

    this.main = function (vertex) {
        // 頂点法線は正規化済み
        var modelViewMat3 = mat3.fromMat4(mat3.create(), this.modelViewMatrix),
            position = vec4.fromVec3(vertex.position, 1.0),
            tangent = vec3.normalize(vec3.create(), vertex.tangent),
            eyePosition = vec3.create(),
            eyeLight = vec3.create(),
            eyeNormal = vec3.create(), // 視点座標系での接ベクトル
            eyeTangent = vec3.create(),
            eyeBiTangent = vec3.create(),
            surfaceLightDir = vec3.create(), // 接空間座標系での光源方向ベクトル
            surfaceEyeDir = vec3.create(), // 接空間座標系での視点方向ベクトル
            toSurfaceMat3; // 視点座標系から接空間座標系への変換行列
        
        // 視点座標系のベクトルを計算
        vec3.transformMat3(eyePosition, position, modelViewMat3);
        vec3.transformMat3(eyeLight, this.lightPosition, modelViewMat3);
        vec3.transformMat3(eyeNormal, vertex.normal, modelViewMat3);
        vec3.transformMat3(eyeTangent, tangent, modelViewMat3);
        vec3.cross(eyeBiTangent, eyeNormal, eyeTangent);
        
        toSurfaceMat3 = [eyeTangent[0], eyeBiTangent[0], eyeNormal[0],
                                     eyeTangent[1], eyeBiTangent[1], eyeNormal[1],
                                     eyeTangent[2], eyeBiTangent[2], eyeNormal[2]];
        vec3.transformMat3(surfaceLightDir,
                           vec3.sub(vec3.create(), eyeLight, eyePosition), toSurfaceMat3);
        vec3.transformMat3(surfaceEyeDir,
                           vec3.scale(vec3.create(), eyePosition, -1), toSurfaceMat3);
        vec3.normalize(surfaceLightDir, surfaceLightDir);
        
        return {
            gl_Color: vec4.create(1.0,1.0,1.0,1.0),
            gl_Position: vec4.transformMat4(vec4.create(), position, this.mvpMatrix),
            texture_coord: vec4.fromValues(vertex.uv[0], vertex.uv[1], 1, 1),
            eyeNormal: vec4.fromVec3(eyeNormal, 1),
            LightDir: vec4.fromVec3(surfaceLightDir, 1),
            EyeDir: vec4.fromVec3(surfaceEyeDir, 1)
        };
    };
}

this.shader = new VertexShader();

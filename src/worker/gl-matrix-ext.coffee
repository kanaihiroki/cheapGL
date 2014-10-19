vec4.fromVec3 = (v3, val) ->
	vec4.fromValues(v3[0], v3[1], v3[2], val)

# 下記URLを参考にした
# http://www.slis.tsukuba.ac.jp/~fujisawa.makoto.fu/cgi-bin/wiki/index.php?GLSL%A4%C7%B4%C4%B6%AD%A5%DE%A5%C3%A5%D7%A1%F5%A5%D5%A5%EC%A5%CD%A5%EB%B8%FA%B2%CC
vec3.reflection = (i, n) ->
    cos_theta = vec3.dot(vec3.scale(vec3.create(), i, -1), n)
    r = vec3.scale(vec3.create(), n, (2 * cos_theta))
    vec3.add(r, r, i)

    if cos_theta > 0
        vec3.normalize(r, r)
    else
        vec3.fromValues(0,0,0);

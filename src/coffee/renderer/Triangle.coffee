define [
    "prelude"
    ], (
    prelude
    ) ->
    min = prelude.min
    max = prelude.max
    min3 = (a,b,c) -> min(min(a,b),c)
    max3 = (a,b,c) -> max(max(a,b),c)
    sub = (a,b) -> vec3.sub(vec3.create(), a, b)
    cross = (a,b) -> vec3.cross(vec3.create(), a, b)
    add4_ = (args...) ->
        ret = args[0]
        for i in [1..args.length-1]
            vec4.add(ret, ret, args[i])
        return ret
    scale4 = (a,b) -> vec4.scale(vec4.create(), a, b)

    # 透視除算
    # クリッピング座標から正規化デバイス座標を計算
    # http://oshiro.bpe.es.osaka-u.ac.jp/people/staff/imura/computer/OpenGL/coordinates/disp_content
    # http://qpp.bitbucket.org/translation/maximizing_depth_buffer_range_and/
    perspectiveDivision = ([a,b,c,d]) ->
        [a/d, b/d, c/d]

    # ビューポート変換
    # 正規化デバイス座標からスクリーン座標を計算
    viewportTransform = ([x,y,z], width, height, near, far) ->
        # TODO
        near = 0.1
        far = 100

        [
            Math.floor(x*width/2),
            Math.floor(y*height/2),
            Math.floor(z*(far - near)/2 + (far + near)/2)
        ]

    # 頂点a,b,cに囲まれた面積を計算する。
    area = (a,b,c) ->
        #     area([-2, 3], [-3, -1], [3, -2]) == 12.5で正しいことを確認
        s = a[0]*b[1] + b[0]*c[1] + c[0]*a[1] - a[1]*b[0] - b[1]*c[0] - c[1]*a[0]
        Math.abs(s/2)

    class Triangle
        constructor: (@primitive, @width, @height) ->
            if 3 != @primitive.length
                throw new "attributeArray length error"

            @c = @getClippingCoord()
            @ndc = (perspectiveDivision(v) for v in @c)
            @s = (viewportTransform(v, @width, @height) for v in @ndc)

            # 三角形に外接する長方形の座標
            [@minX, @minY, @maxX, @maxY] = @getBoundingRect()

            # 各辺を表すベクトル
            @e01 = sub(@s[1], @s[0])
            @e12 = sub(@s[2], @s[1])
            @e20 = sub(@s[0], @s[2])

            # この三角形の面積
            @S = area(@s[0], @s[1], @s[2])

        rasterize: ->
            fragmentCoords = prelude.concat(
                ([x,y,0] for y in [@minY..@maxY] for x in [@minX..@maxX]))

            fragments = prelude.map(
                    prelude.filter(
                        fragmentCoords,
                            @isPointInTriangle),
                    @getLinearCompletion)

            # 補完されたクリップ座標をウィンドウ座標に変換する
            for fragment in fragments
                ndc = perspectiveDivision(fragment.gl_Position)
                fragment.gl_Position = viewportTransform(ndc, @width, @height)

            ret = {}
            for name of @primitive[0]
                ret[name] = prelude.map(fragments, (f) -> f[name])
            return ret

        isInsideViewFrustrum: ->
            ret = prelude.any(@c, (c) ->
                -c[3] < c[0] and c[0] < c[3] and
                -c[3] < c[1] and c[1] < c[3] and
                -c[3] < c[2] and c[2] < c[3]
            )
            return ret

        getClippingCoord: () ->
            attr.gl_Position for attr in @primitive

        getBoundingRect: ->
            # Compute triangle bounding box
            minX = min3(@s[0][0], @s[1][0], @s[2][0])
            minY = min3(@s[0][1], @s[1][1], @s[2][1])
            maxX = max3(@s[0][0], @s[1][0], @s[2][0])
            maxY = max3(@s[0][1], @s[1][1], @s[2][1])

            # Clip against screen bounds
            minX = max(Math.floor(minX), -@width/2)
            minY = max(Math.floor(minY), -@height/2)
            maxX = min(Math.floor(maxX), @width/2)
            maxY = min(Math.floor(maxY), @height/2)
            return [minX, minY, maxX, maxY]

        # 三角形a,b,cの向きを判定。
        # http://yamatyuu.net/computer/program/algorithm/triangle_cross.pdf
        # TODO: バグがあるっぽい
        isFront: ->
            [a,b,c] = @c
            (b[0]-a[0])*(c[1]-a[1]) - (b[1]-a[1])*(c[0]-a[0]) < 0

        # 座標が三角形内部にあるか判定する
        isPointInTriangle: (p) =>
            # 点が三角形に包含されているかどうかは外積を使って判定する。
            # http://www.sousakuba.com/Programming/gs_hittest_point_triangle.html
            e0p = sub(p, @s[0])
            e1p = sub(p, @s[1])
            e2p = sub(p, @s[2])

            d = [cross(e0p, @e01),
                cross(e1p, @e12),
                cross(e2p, @e20)]
            return d[0][2] >= 0 && d[1][2] >= 0 && d[2][2] >= 0

        # 頂点属性の線形補完された値を計算する
        # OpenGL仕様書に記載の式を実装
        getLinearCompletion: (p) =>
            s = [
                area(p,@s[1],@s[2]),
                area(p,@s[2],@s[0]),
                area(p,@s[0],@s[1]),
            ]

            a = s[0]/@S
            b = s[1]/@S
            c = s[2]/@S

            ret = {}
            for name of @primitive[0]
                # 頂点属性の線形補完に使う重み
                w = [
                    a/@primitive[0][name][3],
                    b/@primitive[1][name][3],
                    c/@primitive[2][name][3]
                ]

                denom = w[0] + w[1] + w[2]

                attr = [@primitive[0][name], @primitive[1][name], @primitive[2][name]]
                f = scale4(add4_(
                    scale4(attr[0], w[0]),
                    scale4(attr[1], w[1]),
                    scale4(attr[2], w[2])
                ), denom)
                ret[name] = f
            return ret

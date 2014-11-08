vec4.texture2D = (textureUnitIndex, textureCoord) ->
    texture = self.__TEXTURES[textureUnitIndex]

    u = Math.floor(texture.width * textureCoord[0])
    v = Math.floor(texture.height * textureCoord[1])
    idx = (v * texture.height + u) * 4
    # console.log(textureCoord, texture, u, v)

    color = for i in [idx .. idx+4]
        texture.data[i] / 255.0

    return vec4.fromValues(color...)

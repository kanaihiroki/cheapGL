define [], ->
    class Texture
        constructor: ->
            @data = null

        loadImage: ({width: @width, height: @height, canvas: canvas}) ->
            @data = canvas.getImageData(0, 0, @width, @height).data

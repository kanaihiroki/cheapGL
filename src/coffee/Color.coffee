define [], () ->
  class Color
    constructor: (r, g, b, a = 1.0) ->
      @r = r
      @g = g
      @b = b
      @a = a

    toArray: () ->
      [@r, @g, @b, @a]

    toString: () ->
      "#{@toArray()}"
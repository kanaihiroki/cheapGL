define [], () ->
  class Setting
    constructor: (
      canvasElement,
      stride = 3,
      vertices = []
    ) ->
      @canvasElement = canvasElement
      @stride = stride
      @vertices = vertices

# cheepgl API implementation
define ["require", "Context", "ShaderUnit", "Constants"], (require, Context, ShaderUnit, Constants) ->
	api = {
		getContext:  (element) ->
			ShaderUnit = require("ShaderUnit")
			new Context(element.getContext("2d"), ShaderUnit.create())
	}

	for key, val of Constants
		api[key] = val

	return api

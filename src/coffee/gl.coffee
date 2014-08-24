# cheepgl API implementation
define([
	"require",
	"Context",
	"Constants",
], (
	require,
	Context,
	Constants) ->
	api = {
		getContext:  (element) ->
			Context.create(element)
	}

	for key, val of Constants
		api[key] = val

	return api
)

# FragmentShaderと共通かできる?(現実のハードウェアではしている)
onMessage = (msg) ->
	console.log(msg)

self.addEventListener('message', onMessage, false);

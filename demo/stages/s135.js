/**
 * navigator.mimeTypes.length
 * 
 * s135: {
		s: 0,
		v: 2,
	},
 */
function zu() {
	return void 0 === navigator.mimeTypes
		? { s: -1, v: null }
		: void 0 === navigator.mimeTypes.length
		? { s: -3, v: null }
		: { s: 0, v: navigator.mimeTypes.length };
}

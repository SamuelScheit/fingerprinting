/**
 * supports backdrop-filter blur
 * 
 * s139: {
		s: 0,
		v: true,
	},
 */

function Bu() {
	return "undefined" == typeof CSS ? { s: -1, v: null } : { s: 0, v: CSS.supports("backdrop-filter", "blur(2px)") };
}

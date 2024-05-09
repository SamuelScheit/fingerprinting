/**
 * device-pixel-ratio with media query
 *
 * s142: {
		s: 0,
		v: false,
	},
 * 
 */

function Yu() {
	if ("function" != typeof window.matchMedia) return { s: -2, v: null };
	var n = window.matchMedia("(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)");
	return void 0 === n.matches ? { s: -1, v: null } : { s: 0, v: n.matches };
}

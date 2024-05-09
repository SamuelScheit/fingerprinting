/**
 * checks if borders are properly rendered
 *
 * s152: {
		s: 0,
		v: 1,
	},
 */

function Ju() {
	var n = document.createElement("div");
	(n.style.border = ".5px dotted transparent"), document.body.appendChild(n);
	var t = n.offsetHeight;
	return document.body.removeChild(n), { s: 0, v: t };
}

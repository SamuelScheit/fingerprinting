/**
 * webgl information
 * 
 * s74: {
		s: 0,
		v: {
			version: "WebGL 1.0 (OpenGL ES 2.0 Chromium)",
			vendor: "WebKit",
			vendorUnmasked: "Google Inc. (Apple)",
			renderer: "WebKit WebGL",
			rendererUnmasked: "ANGLE (Apple, ANGLE Metal Renderer: Apple M1 Ultra, Unspecified Version)",
			shadingLanguageVersion: "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)",
		},
	},
 */

const a = context;
const c = a.getExtension("WEBGL_debug_renderer_info");
a.getParameter(a.VERSION);
a.getParameter(a.VENDOR);
a.getParameter(c.UNMASKED_VENDOR_WEBGL);
a.getParameter(a.RENDERER);
a.getParameter(c.UNMASKED_RENDERER_WEBGL);
a.getParameter(a.SHADING_LANGUAGE_VERSION);

Nt = function (n) {
	var t,
		e,
		r,
		i,
		o,
		u,
		a = nt(n.cache);
	if (!a) return -1;
	if (!ot(a)) return -2;
	var c = it() ? null : a.getExtension($n);
	return {
		version: (null === (t = a.getParameter(a.VERSION)) || void 0 === t ? void 0 : t.toString()) || "",
		vendor: (null === (e = a.getParameter(a.VENDOR)) || void 0 === e ? void 0 : e.toString()) || "",
		vendorUnmasked: c ? (null === (r = a.getParameter(c.UNMASKED_VENDOR_WEBGL)) || void 0 === r ? void 0 : r.toString()) : "",
		renderer: (null === (i = a.getParameter(a.RENDERER)) || void 0 === i ? void 0 : i.toString()) || "",
		rendererUnmasked: c ? (null === (o = a.getParameter(c.UNMASKED_RENDERER_WEBGL)) || void 0 === o ? void 0 : o.toString()) : "",
		shadingLanguageVersion: (null === (u = a.getParameter(a.SHADING_LANGUAGE_VERSION)) || void 0 === u ? void 0 : u.toString()) || "",
	};
};

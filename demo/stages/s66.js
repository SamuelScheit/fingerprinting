/**
 * a tag attributionSourceId
 *
 * https://caniuse.com/mdn-api_htmlanchorelement_attributionsourceid
 * https://github.com/privacycg/private-click-measurement
 * 
 * s66: {
		s: -1,
		v: null,
	},
 *
 */

Mt = function () {
	var n,
		t = document.createElement("a"),
		e = null !== (n = t.attributionSourceId) && void 0 !== n ? n : t.attributionsourceid;
	return void 0 === e ? void 0 : String(e);
};

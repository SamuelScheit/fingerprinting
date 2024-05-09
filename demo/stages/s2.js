/**
 * navigator.languages
 * 
 * s2: {
		s: 0,
		v: [["en-US"]],
	},
 *
 */
ft = function () {
	var n,
		t = navigator,
		e = [],
		r = t.language || t.userLanguage || t.browserLanguage || t.systemLanguage;
	if ((void 0 !== r && e.push([r]), Array.isArray(t.languages)))
		(vn() &&
			Y([
				!("MediaSettingsRange" in (n = window)),
				"RTCEncodedAudioFrame" in n,
				"" + n.Intl == "[object Intl]",
				"" + n.Reflect == "[object Reflect]",
			]) >= 3) ||
			e.push(t.languages);
	else if ("string" == typeof t.languages) {
		var i = t.languages;
		i && e.push(i.split(","));
	}
	return e;
},
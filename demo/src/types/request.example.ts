export const body = {
	/** api key */
	c: "NIrKSr1SW3HEAoyttBe2",
	t: {
		referrerLink: null,
	},
	/** extendedResult */
	cbd: 1,
	/** version type */
	m: "l",
	/** version number */
	l: "jsl/3.9.2",
	/** types of sources https://github.com/fingerprintjs/fingerprintjs/tree/master/src/sources */
	mo: ["id", "bd", "ex", "be"],
	/** TLS Fingerprint requested by calling https://fingerprint.com/sdub4ver/?q=NIrKSr1SW3HEAoyttBe2 */
	s56: {
		s: 0,
		v: "JVRFQO8Yg+cB/RYPM6ORKJ3Dv/iwVONYIemn/9hM7SdWIXfqaIObP9mTA8MLQQiGdVXxIX/3//ljgf0Vha29MoKcgVkAN9o=",
	},
	/** customComponent (part of the request options) */
	s67: {
		s: -1,
		v: null,
	},
	/** the script name used to calculate the hash */
	sc: {
		u: "https://fingerprint.com/uQ0X/?b=load-vercel&v=3&a=NIrKSr1SW3HEAoyttBe2&l=3.9.2",
	},
	/** stripUrlParams */
	sup: false,
	/** idk, always hardcoded value 1 */
	gt: 1,
	ab: {
		noop: "b",
		wrtcm: "full",
		wrtcd: "-",
		sld: "50",
	},
	url: "https://fingerprint.com/demo/",
	cr: "https://fingerprint.com/demo/",
	/** saved fingerprint id in cookies */
	s55: {
		s: 0, // 0 = saved both in cookies and local storage, 1 = saved in cookies, 2 = saved in local storage, -1 = not saved
		v: "4inmTefodwISxYsH23iwOu8lWgU4ak5WK7mB+wEUU3KfLfSPmfxYvHo4XuMmK5LX6gYlPWA9Lrfdj5IJH8dOZHmv0dvOf+SU53pspYo=",
	},
	/** gets the ice candidates from the peer connection */
	s34: {
		s: -2,
		v: [
			"candidate:2079771436 1 udp 2122260223 169.254.25.252 50012 typ host generation 0 ufrag qRGm network-id 3",
			"candidate:1850891489 1 udp 2122194687 169.254.41.16 60447 typ host generation 0 ufrag qRGm network-id 4",
			"candidate:3267833839 1 udp 2122063615 192.168.178.74 61904 typ host generation 0 ufrag qRGm network-id 1 network-cost 10",
			"candidate:2750988316 1 udp 2121932543 10.1.86.185 55620 typ host generation 0 ufrag qRGm network-id 5 network-cost 50",
			"candidate:693893195 1 udp 2122131711 2a02:2455:16df:fd00:f90a:683d:8bd5:d4c6 62981 typ host generation 0 ufrag qRGm network-id 2 network-cost 10",
			"candidate:4242097647 1 udp 2122003199 fd54:20a4:d33b:b10c:bd3:0:1:55b4 62721 typ host generation 0 ufrag qRGm network-id 6 network-cost 50",
			"candidate:1372769609 1 udp 1685793023 2a02:6ea0:da08:3027::14 57677 typ srflx raddr fd54:20a4:d33b:b10c:bd3:0:1:55b4 rport 62721 generation 0 ufrag qRGm network-id 6 network-cost 50",
			"candidate:2256605174 1 udp 1685724927 149.102.239.229 56388 typ srflx raddr 10.1.86.185 rport 55620 generation 0 ufrag qRGm network-id 5 network-cost 50",
			"candidate:87632308 1 tcp 1518280447 169.254.25.252 9 typ host tcptype active generation 0 ufrag qRGm network-id 3",
			"candidate:278773369 1 tcp 1518214911 169.254.41.16 9 typ host tcptype active generation 0 ufrag qRGm network-id 4",
			"candidate:3154693495 1 tcp 1518083839 192.168.178.74 9 typ host tcptype active generation 0 ufrag qRGm network-id 1 network-cost 10",
			"candidate:3711378052 1 tcp 1517952767 10.1.86.185 9 typ host tcptype active generation 0 ufrag qRGm network-id 5 network-cost 50",
			"candidate:1469323987 1 tcp 1518151935 2a02:2455:16df:fd00:f90a:683d:8bd5:d4c6 9 typ host tcptype active generation 0 ufrag qRGm network-id 2 network-cost 10",
			"candidate:2182522743 1 tcp 1518023423 fd54:20a4:d33b:b10c:bd3:0:1:55b4 9 typ host tcptype active generation 0 ufrag qRGm network-id 6 network-cost 50",
		],
	},
	/** ICE + RTCStatsReport peer.getStats() */
	s78: {
		s: 0, // 0 = success, -2 = error, -3 = unsupported (safari, firefox)
		v: [
			{
				id: "HjD6dszXj",
				type: "codec",
				clockRate: 90000,
				mimeType: "video/VP8",
				direction: "sendrecv",
				uri: "urn:ietf:params:rtp-hdrext:toffset",
			},
			{
				id: "I3Ue5bgKi",
				timestamp: 1715207446861.099,
				type: "remote-candidate",
				address: "169.254.136.39",
				candidateType: "host",
				foundation: "1599188347",
				ip: "169.254.136.39",
				isRemote: true,
				port: 50879,
				priority: 2122260223,
				protocol: "udp",
				transportId: "T01",
				usernameFragment: "lsNp",
			},
			// ...
		],
	},
	/** RTCIceCandidate */
	s94: {
		s: 0, // -4 = used cached value u identifier (e and s are empty), 0 = new, -2 = error
		v: {
			u: "b24e0b46-dc4a-88c6-eddd-ffc38649e846", // random generated Fingerprint uuid
			e: ["candidate:894275136 1 udp 2122260223 169.254.136.39 56911 typ host generation 0 ufrag OWBa network-id 3"],
			s: [
				// ice candidate
				{
					id: "I2uCLDoni",
					timestamp: 1715205548472.197,
					type: "remote-candidate",
					address: "fd54:20a4:d33b:b10c:bd3:0:1:55b4",
					candidateType: "host",
					foundation: "1069691667",
					ip: "fd54:20a4:d33b:b10c:bd3:0:1:55b4",
					isRemote: true,
					port: 56178,
					priority: 2122003199,
					protocol: "udp",
					transportId: "T01",
					usernameFragment: "OWBa",
				},
			],
		},
	},
	/** speechSynthesis.getVoices() */
	s52: {
		s: 0, // 0 = success, 1 = no voices e.g. firefox, -2 = error
		v: "b6d51c1509af9a35a6eb88bb5b7e06d3", // hash of the voices, 1 = "00000000000000000000000000000000"
	},
	/** Apple Pay https://github.com/fingerprintjs/fingerprintjs/blob/master/src/sources/apple_pay.ts */
	s35: {
		s: -1, // -1 = not supported, 0 = disabled, 1 = enabled, NotAvailableInInsecureContext = -2, NotAvailableInFrame = -3
		v: null, // checks ApplePaySession.canMakePayments() and ApplePaySession.canMakePaymentsWithActiveCard()
	},
	/** await window.getScreenDetails(); */
	s6: {
		s: 0,
		v: [25, 0, 0, 0],
		/**
		n.availTop
		n.width - n.availWidth - n.availLeft
		n.height - n.availHeight - n.availTop
		n.availLeft
		*/
	},
	/** navigator.mediaDevices.enumerateDevices() */
	s26: {
		s: 0,
		v: [
			{
				d: "", // deviceId
				g: "", // groupId
				k: "audioinput", // kind
				l: "", // label
			},
			{
				d: "",
				g: "",
				k: "videoinput",
				l: "",
			},
			{
				d: "",
				g: "",
				k: "audiooutput",
				l: "",
			},
		],
	},
	/** await navigator.userAgentData.getHighEntropyValues(['brands', 'mobile', 'platform', 'platformVersion', 'architecture', 'bitness', 'model', 'uaFullVersion', 'fullVersionList']) */
	s58: {
		s: 0, // 0 = success, -1 error
		v: {
			/** brands */
			b: [
				{
					b: "Chromium",
					v: "124",
				},
				{
					b: "Google Chrome",
					v: "124",
				},
				{
					b: "Not-A.Brand",
					v: "99",
				},
			],
			/** mobile */
			m: false,
			/** platform */
			p: "macOS",
			/**  all results are requested individually and are merged into one object with all values strings or JSON.stringified */
			h: {
				brands: '[{"brand":"Chromium","version":"124"},{"brand":"Google Chrome","version":"124"},{"brand":"Not-A.Brand","version":"99"}]',
				mobile: "false",
				platform: "macOS",
				platformVersion: "14.3.0",
				architecture: "arm",
				bitness: "64",
				model: "",
				uaFullVersion: "124.0.6367.119",
				fullVersionList:
					'[{"brand":"Chromium","version":"124.0.6367.119"},{"brand":"Google Chrome","version":"124.0.6367.119"},{"brand":"Not-A.Brand","version":"99.0.0.0"}]',
			},
			nah: [],
		},
	},
	/** checks if specific fonts are installed: see stage20.js */
	s20: {
		s: 0,
		v: ["Arial Unicode MS", "Gill Sans", "Helvetica Neue", "Menlo"],
	},
	/** dom blocker https://github.com/fingerprintjs/fingerprintjs/blob/master/src/sources/dom_blockers.ts */
	s36: {
		s: -1,
		v: null,
	},
	/** calculates the width of text with certain fonts */
	s51: {
		s: 0,
		v: {
			default: 147.5625,
			apple: 147.5625,
			serif: 147.5625,
			sans: 144.015625,
			mono: 133.0625,
			min: 9.234375,
			system: 146.09375,
		},
	},
	/** Audio Fingerprint */
	s90: {
		s: 0,
		v: 0.00006128742097644135,
	},
	/** Audio Fingerprint 2 */
	s21: {
		s: 0,
		v: 124.04344968475198,
	},
	/** save data in FileStorage of Browser */
	s79: {
		s: -3,
		v: [
			{
				n: "default.ini",
				l: 4246720862,
			},
		],
	},
	/** gets href and referrer of page and parent pages */
	s69: {
		s: 0, // 1 if href/referrer is empty, 0 if not
		v: [
			{
				l: "https://fingerprint.com/demo/", // location.href
				f: "https://fingerprint.com/demo/", // document.referrer
			},
		],
	},
	/** window.webkitRequestFileSystem */
	s23: {
		s: -3, // chrome is -3
		v: null,
	},
	/** navigator.storage.estimate */
	s29: {
		s: 0,
		v: 1197130899456,
	},
	/** window.screen */
	s84: {
		s: 0,
		v: {
			w: 1920,
			h: 1080,
		},
	},
	/** TODO: indexedDB */
	s85: {
		s: -1,
		v: null,
	},
	/** navigator.storage.getDirectory() */
	s89: {
		s: 0,
		v: "",
	},
	/** canvas hashes of geometry, text and winding */
	s17: {
		s: 0,
		v: {
			winding: true,
			geometry: "1fd188f9714ca90a5a10eb2fc306b5eb",
			text: "32a115bd05e0f411c5ecd7e285fd36e2",
		},
	},
	/** gets browser specific css colors */
	s87: {
		s: 0,
		v: {
			ac: "rgb(0, 0, 0)",
			act: "rgb(0, 0, 0)",
			at: "rgb(0, 0, 238)",
			ab: "rgb(0, 0, 0)",
			aca: "rgb(0, 0, 0)",
			aw: "rgb(255, 255, 255)",
			b: "rgb(255, 255, 255)",
			bh: "rgb(239, 239, 239)",
			bs: "rgb(239, 239, 239)",
			bb: "rgb(0, 0, 0)",
			bf: "rgb(239, 239, 239)",
			bt: "rgb(0, 0, 0)",
			ft: "rgb(0, 0, 0)",
			gt: "rgb(128, 128, 128)",
			h: "rgb(0, 0, 255)",
			ht: "rgb(255, 255, 255)",
			ib: "rgb(255, 255, 255)",
			ic: "rgb(255, 255, 255)",
			ict: "rgb(128, 128, 128)",
			it: "rgb(0, 0, 0)",
			lt: "rgb(0, 0, 238)",
			m: "rgb(255, 255, 0)",
			me: "rgb(255, 255, 255)",
			s: "rgb(255, 255, 255)",
			tdds: "rgb(0, 0, 0)",
			tdf: "rgb(239, 239, 239)",
			tdh: "rgb(0, 0, 0)",
			tdls: "rgb(0, 0, 0)",
			tds: "rgb(0, 0, 0)",
			vt: "rgb(0, 0, 238)",
			w: "rgb(255, 255, 255)",
			wf: "rgb(0, 0, 0)",
			wt: "rgb(0, 0, 0)",
			si: "rgb(179, 215, 255)",
			sit: "rgb(0, 0, 0)",
		},
	},
	/** gets values for rendering math formulates */
	s92: {
		s: 0,
		v: {
			x: 7.998046875,
			y: 7.998046875,
			left: 7.998046875,
			right: 294.70703125,
			bottom: 26.123046875,
			height: 18.125,
			top: 7.998046875,
			width: 286.708984375,
		},
	},
	/** gets values for rendering emojis */
	s93: {
		s: 0,
		v: {
			x: 7.998046875,
			y: 9.873046875,
			left: 7.998046875,
			right: 1307.998046875,
			bottom: 27.998046875,
			height: 18.125,
			top: 9.873046875,
			width: 1300,
			font: "Times",
		},
	},
	/** TODO */
	s95: {
		s: -1,
		v: null,
	},
	/** WebAssembly */
	s22: {
		s: 0, // -1 = WebAssembly unsupported and v null, 0 = supported
		v: 23, // chrome supports 4 out of 5 programs
	},
	/** navigator.doNotTrack */
	s30: {
		s: 0,
		v: "1",
	},
	/** canvas chrome tamper checks */
	s33: {
		s: 0,
		v: false,
	},
	/** checks preferred dark or white mode via matchMedia("(prefers-color-scheme: dark)")) */
	s44: {
		s: 0, // 0 = retrieval was successful, -1 = retrieval failed
		v: true, // true = prefers dark mode, false = prefers light mode
	},
	/** calculates the timezone offset */
	s45: {
		s: 0,
		v: [1715197587304, 1715204787304], // new Date().getTimezoneOffset()
	},
	/** math random entropy */
	s48: {
		s: 0,
		v: [-73502740, 248815548, -1049183144, -570535580, 790563733, 68073693],
	},
	/** performance.now() accuracy */
	s49: {
		s: 0,
		v: [0.09999999403953552, 0.10000002384185791],
	},
	/** performance.memory() */
	s50: {
		s: 0, // -1 = not available, 0 = available
		v: 4294705152,
	},
	/** window.devicePixelRatio */
	s57: {
		s: 0,
		v: 1.600000023841858,
	},
	/** checks if the browser is internet explorer */
	s59: {
		s: 0,
		v: false,
	},
	/** checks if the browser is edge */
	s60: {
		s: 0,
		v: false,
	},
	/** checks if the browser is chrome */
	s61: {
		s: 0,
		v: true,
	},
	/** checks if the browser is mobile safari */
	s62: {
		s: 0,
		v: false,
	},
	/** checks if the browser is safari */
	s63: {
		s: 0,
		v: false,
	},
	/** checks if the browser is firefox */
	s64: {
		s: 0,
		v: false,
	},
	/** checks if apis are available SharedWorker,  Audio().sinkId, navigator.connection, window.onorientation */
	s65: {
		s: 0,
		v: false, // true if at least two apis are unavailable
	},
	/** a tag attributionSourceId */
	s66: {
		s: -1,
		v: null,
	},
	/** checks if at least 3 are unavailable: window.PushManager, window.AudioBuffer, window.RTCPeerConnection, navigator.geolocation, window.ServiceWorker */
	s68: {
		s: 0,
		v: false, // false = less than 3 are available, true = at least 3 are unavailable
	},
	/** window referer */
	s71: {
		s: 0,
		v: {
			w: "https://fingerprint.com", // window.origin
			l: "https://fingerprint.com", // location.origin
			a: [], // location.ancestorOrigins  // https://developer.mozilla.org/en-US/docs/Web/API/Location/ancestorOrigins
		},
	},
	/** v: eval.toString().length */
	s24: {
		s: 0,
		v: 29,
	},
	/** navigator.webdriver */
	s72: {
		s: 0, // -1 = navigator.webdriver = null, -2 = navigator.webdriver = undefined, 0 = navigator.webdriver = false | true
		v: false,
	},
	/** navigator.oscpu https://developer.mozilla.org/en-US/docs/Web/API/Navigator/oscpu */
	s1: {
		s: -1, // -1 = not available, 0 = available
		v: null,
	},
	/** navigator.languages */
	s2: {
		s: 0,
		v: [["en-US"]],
	},
	/** window.screen.colorDepth */
	s3: {
		s: 0,
		v: 24,
	},
	/** navigator.deviceMemory */
	s4: {
		s: 0,
		v: 8,
	},
	/** [window.screen.width, window.screen.height].sort().reverse() */
	s5: {
		s: 0,
		v: [1920, 1080],
	},
	/** navigator.hardwareConcurrency */
	s7: {
		s: 0,
		v: 20,
	},
	/** timezone */
	s9: {
		s: 0,
		v: "Europe/Berlin",
	},
	/** window.sessionStorage */
	s10: {
		s: 0,
		v: true,
	},
	/** window.localStorage */
	s11: {
		s: 0,
		v: true,
	},
	/** window.indexedDB */
	s12: {
		s: 0,
		v: true,
	},
	/** window.openDatabase */
	s13: {
		s: 0,
		v: false,
	},
	/** navigator.cpuClass */
	s14: {
		s: -1,
		v: null,
	},
	/** navigator.platform */
	s15: {
		s: 0,
		v: "MacIntel",
	},
	/** navigator.plugins */
	s16: {
		s: 0,
		v: [
			{
				name: "PDF Viewer",
				description: "Portable Document Format",
				mimeTypes: [
					{
						type: "application/pdf",
						suffixes: "pdf",
					},
					{
						type: "text/pdf",
						suffixes: "pdf",
					},
				],
			},
			{
				name: "Chrome PDF Viewer",
				description: "Portable Document Format",
				mimeTypes: [
					{
						type: "application/pdf",
						suffixes: "pdf",
					},
					{
						type: "text/pdf",
						suffixes: "pdf",
					},
				],
			},
			{
				name: "Chromium PDF Viewer",
				description: "Portable Document Format",
				mimeTypes: [
					{
						type: "application/pdf",
						suffixes: "pdf",
					},
					{
						type: "text/pdf",
						suffixes: "pdf",
					},
				],
			},
			{
				name: "Microsoft Edge PDF Viewer",
				description: "Portable Document Format",
				mimeTypes: [
					{
						type: "application/pdf",
						suffixes: "pdf",
					},
					{
						type: "text/pdf",
						suffixes: "pdf",
					},
				],
			},
			{
				name: "WebKit built-in PDF",
				description: "Portable Document Format",
				mimeTypes: [
					{
						type: "application/pdf",
						suffixes: "pdf",
					},
					{
						type: "text/pdf",
						suffixes: "pdf",
					},
				],
			},
		],
	},
	/** checks for touch events */
	s19: {
		s: 0,
		v: {
			maxTouchPoints: 0,
			touchEvent: false,
			touchStart: false,
		},
	},
	/** navigator.vendor */
	s27: {
		s: 0,
		v: "Google Inc.",
	},
	/** check for global variables that indiciate the browser type */
	s28: {
		s: 0,
		v: ["chrome"],
	},
	/** checks if cookies are allowed */
	s32: {
		s: 0,
		v: true,
	},
	/** checks for display color depth */
	s37: {
		s: 0,
		v: "p3",
	},
	/** checks for inverted-colors */
	s41: {
		s: 0,
		v: false,
	},
	/** check forced color mode */
	s39: {
		s: 0,
		v: false,
	},
	/** max-monochrome */
	s42: {
		s: 0,
		v: 0,
	},
	/** prefers-contrast */
	s38: {
		s: 0,
		v: 0,
	},
	/** prefers-reduced-motion */
	s43: {
		s: 0,
		v: false,
	},
	/** dynamic range */
	s40: {
		s: 0,
		v: false,
	},
	/** hash of math functions */
	s46: {
		s: 0,
		v: "5963cfe25fe61d0bbd7b4920bc602dc8",
	},
	/** navigator.pdfViewerEnabled */
	s80: {
		s: 0,
		v: true,
	},
	/** math with buffers */
	s81: {
		s: 0,
		v: 127,
	},
	/** navigator.language */
	s82: {
		s: 0,
		v: "en-US",
	},
	/** navigator.languages */
	s83: {
		s: 0,
		v: ["en-US", "de-DE"],
	},
	/** localStorage and window.openDatabase */
	s86: {
		s: -1,
		v: null,
	},
	/** prefers reduced transparency */
	s91: {
		s: 0,
		v: false,
	},
	/** webgl information */
	s74: {
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
	/** get hash over WebGL informations */
	s75: {
		s: 0,
		v: {
			contextAttributes: "6b1ed336830d2bc96442a9d76373252a",
			parameters: "57a2cddb99538d50a0138430ed0720c5",
			parameters2: "7bd4d913de3e22461894a997d864dcb8",
			shaderPrecisions: "f223dfbcd580cf142da156d93790eb83",
			extensions: "57233d7b10f89fcd1ff95e3837ccd72d",
			extensionParameters: "fa430f89faf2af23f701c2c6909bcaad",
			extensionParameters2: "86a8abb36f0cb30b5946dec0c761d042",
		},
	},
	/** webgl hash */
	s76: {
		s: 0,
		v: "9e4b34771c3006cb419537b406158135",
	},
	/** window.permissions */
	s106: {
		s: 0,
		v: false,
	},
	/** gets the supported DRM systems */
	s154: {
		s: 0,
		v: {
			wv: true, // widevine
			wvp: true,
			pr: false,
			ck: false,
			pt: false,
			fp: false,
		},
	},
	/** navigator.webdriver - checks if the browser is automated */
	s158: {
		s: 0,
		v: false,
	},
	/** has Google Voice in speechSynthesis.getVoices() */
	s160: {
		s: 0,
		v: true,
	},
	/** navigator.userAgent */
	s101: {
		s: 0,
		v: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
	},
	/** navigator.appVersion */
	s103: {
		s: 0,
		v: "5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
	},
	/** navigator.connection.rtt */
	s104: {
		s: 0,
		v: 250,
	},
	/** navigator.plugins.length */
	s117: {
		s: 0,
		v: 5,
	},
	/** Error.stack */
	s119: {
		s: 0,
		v: "TypeError: Cannot read properties of null (reading '0')\n    at bi (https://fingerprint.com/uQ0X/?b=load-vercel&v=3&a=NIrKSr1SW3HEAoyttBe2&l=3.9.2:4311:10)\n    at https://fingerprint.com/uQ0X/?b=load-vercel&v=3&a=NIrKSr1SW3HEAoyttBe2&l=3.9.2:4486:14\n    at G (https://fingerprint.com/uQ0X/?b=load-vercel&v=3&a=NIrKSr1SW3HEAoyttBe2&l=3.9.2:589:13)\n    at https://fingerprint.com/uQ0X/?b=load-vercel&v=3&a=NIrKSr1SW3HEAoyttBe2&l=3.9.2:737:8\n    at new Promise (<anonymous>)\n    at Object.construct (https://fingerprint.com/uQ0X/?b=load-vercel&v=3&a=NIrKSr1SW3HEAoyttBe2&l=3.9.2:116:30)\n    at https://fingerprint.com/uQ0X/?b=load-vercel&v=3&a=NIrKSr1SW3HEAoyttBe2&l=3.9.2:735:15\n    at https://fingerprint.com/uQ0X/?b=load-vercel&v=3&a=NIrKSr1SW3HEAoyttBe2&l=3.9.2:770:8\n    at https://fingerprint.com/uQ0X/?b=load-vercel&v=3&a=NIrKSr1SW3HEAoyttBe2&l=3.9.2:615:21\n    at https://fingerprint.com/uQ0X/?b=load-vercel&v=3&a=NIrKSr1SW3HEAoyttBe2&l=3.9.2:274:15",
	},
	/** navigator.productSub */
	s123: {
		s: 0,
		v: "20030107",
	},
	/** document.documentElement.getAttributeNames() */
	s131: {
		s: 0,
		v: ["lang", "class"],
	},
	/** window.external.toString() */
	s133: {
		s: 0,
		v: "[object External]",
	},
	/** navigator.mimeTypes[0] === MimeType.prototype, MimeTypeArray.prototype === navigator.mimeTypes.prototype */
	s136: {
		s: 0,
		v: true,
	},
	/** Function.prototype.bind.toString() */
	s148: {
		s: 0,
		v: "function bind() { [native code] }",
	},
	/** window.process */
	s149: {
		s: -1,
		v: null,
	},
	/** window.outerWidth, window.outerHeight, window.innerWidth, window.innerHeight */
	s150: {
		s: 0,
		v: {
			outerWidth: 1920,
			outerHeight: 1055,
			innerWidth: 966,
			innerHeight: 1167,
		},
	},
	/** typeof navigator.userAgentData === "object" */
	s102: {
		s: 0,
		v: true,
	},
	/** navigator.plugins.prototype === PluginArray.prototype && navigator.plugins[0].protoype === Plugin.prototype */
	s118: {
		s: 0,
		v: false,
	},
	/** checks if new Error().toSource() is defined */
	s120: {
		s: 0,
		v: false,
	},
	/** [typeof SourceBuffer, typeof SourceBufferList] */
	s130: {
		s: 0,
		v: ["function", "function"],
	},
	/** window.close.toString() */
	s132: {
		s: 0,
		v: "function () { [native code] }",
	},
	/** navigator.mimeTypes.length */
	s135: {
		s: 0,
		v: 2,
	},
	/** supports backdrop-filter blur */
	s139: {
		s: 0,
		v: true,
	},
	/** device-pixel-ratio with media query */
	s142: {
		s: 0,
		v: false,
	},
	/** supports SharedArrayBuffer */
	s144: {
		s: -2,
		v: null,
	},
	/** gets all functions defined on the navigator object */
	s145: {
		s: 0,
		v: [
			"getGamepads",
			"javaEnabled",
			"sendBeacon",
			"vibrate",
			"Navigator",
			"adAuctionComponents",
			"runAdAuction",
			"canLoadAdAuctionFencedFrame",
			"clearAppBadge",
			"getBattery",
			"getUserMedia",
			"requestMIDIAccess",
			"requestMediaKeySystemAccess",
			"setAppBadge",
			"webkitGetUserMedia",
			"clearOriginJoinedAdInterestGroups",
			"createAuctionNonce",
			"deprecatedReplaceInURN",
			"deprecatedURNToURL",
			"getInstalledRelatedApps",
			"joinAdInterestGroup",
			"leaveAdInterestGroup",
			"updateAdInterestGroups",
			"registerProtocolHandler",
			"unregisterProtocolHandler",
		],
	},
	/** checks if the browser properly throws an error when accessing undefined variables */
	s146: {
		s: 0,
		v: false,
	},
	/** checks if the browser has overriden the document.createElement function */
	s151: {
		s: -1,
		v: null,
	},
	/** checks if borders are properly rendered */
	s152: {
		s: 0,
		v: 1,
	},
	/** navigator.onLine */
	s153: {
		s: 0,
		v: true,
	},
	/** checks if some window variables were overridden */
	s155: {
		s: 0,
		v: {},
	},
	/** checks if certain globals are in the window object */
	s156: {
		s: 0,
		v: ["chrome", "WebAssembly"],
	},
	/** checks if globals are defined that indicate the use of a headless browser */
	s157: {
		s: 0,
		v: {
			awesomium: false,
			cef: false,
			cefsharp: false,
			coachjs: false,
			fminer: false,
			geb: false,
			nightmarejs: false,
			phantomas: false,
			phantomjs: false,
			rhino: false,
			selenium: false,
			webdriverio: false,
			webdriver: false,
			headless_chrome: false,
		},
	},
	/** checks if globals or navigator.hardwareConcurrency were overridden */
	s159: {
		s: -2,
		v: null,
	},
	/** checks that navigator.languages was not tampered with */
	s162: {
		s: 0,
		v: false, // true if navigator.languages was tampered with
	},
	/** checks the integrity of setTimeout and Error object */
	s163: {
		s: 0,
		v: true,
	},
	/** create a peer connection and sends the userid to FPJS server */
	s161: {
		s: 0,
		v: "c4d497f0-680e-e2c9-c581-a63667571336",
	},
	/** saved random id in cookie */
	si: "U73NX6F7ez",
	/** random id per visit */
	pi: "Ala3cXLIot",
	/** same random id as si saved in localStorage */
	ai: "U73NX6F7ez",
	/** keyboard listener with keydown and keyup events with timestamps */
	b1: {
		s: 0,
		v: [],
	},
	/** previous visits if available */
	lr: [
		{
			v: "1",
			dt: "2024-05-08T19:46:06.650Z",
			ci: "js/3.9.4",
			pi: "dd5FtHQPVP",
			ai: "xyShPyoR",
			ri: "kWgw0KUp66zz",
			c: "NIrKSr1SW3HEAoyttBe2",
			rid: "1715197556254.dEOWJ4",
			er: null,
			mo: ["id", "bd", "ex", "be"],
			sa: [
				{
					s: 1470,
					e: 2026,
					u: "https://fingerprint.com/uQ0X/?b=load-vercel&v=3&a=NIrKSr1SW3HEAoyttBe2&l=3.9.2",
					er: null,
					ds: 1470,
					de: 1470,
					cs: 1470,
					css: 1470,
					ce: 1470,
					qs: 1470,
					ss: 2026,
				},
			],
			ls: 2047,
			le: 37720,
			ca: [
				{
					s: 37742,
					e: 38001,
					u: "https://fingerprint.com/sdub4ver/?q=NIrKSr1SW3HEAoyttBe2",
					er: null,
					ds: 37742,
					de: 37742,
					cs: 37742,
					css: 37742,
					ce: 37742,
					qs: 37744,
					ss: 38000,
				},
			],
			ss: 2049,
			se: 52228,
			sd: {
				s52: 19982,
				s35: 14020,
				s6: 1,
				s26: 19885,
				s58: 19885,
				s20: 19972,
				s36: 19865,
				s51: 19918,
				s90: 42,
				s21: 19,
				s79: 111,
				s69: 1,
				s23: 1,
				s29: 46,
				s84: 51,
				s85: 14,
				s89: 17,
				s17: 59,
				s87: 80,
				s92: 81,
				s93: 63,
				s106: 22,
				s154: 18,
				s158: 62,
				s160: 14188,
				s22: 0,
				s30: 0,
				s33: 1,
				s44: 0,
				s45: 0,
				s48: 1,
				s49: 19,
				s50: 0,
				s57: 0,
				s59: 0,
				s60: 0,
				s61: 0,
				s62: 0,
				s63: 0,
				s64: 0,
				s65: 0,
				s66: 1,
				s68: 0,
				s71: 0,
				s24: 0,
				s72: 0,
				s1: 0,
				s2: 0,
				s3: 0,
				s4: 0,
				s5: 0,
				s7: 0,
				s9: 0,
				s10: 0,
				s11: 0,
				s12: 0,
				s13: 0,
				s14: 0,
				s15: 0,
				s16: 0,
				s19: 0,
				s27: 0,
				s28: 0,
				s32: 1,
				s37: 0,
				s41: 0,
				s39: 0,
				s42: 0,
				s38: 0,
				s43: 0,
				s40: 0,
				s46: 0,
				s80: 0,
				s81: 0,
				s82: 0,
				s83: 0,
				s86: 0,
				s91: 0,
				s74: 8,
				s75: 24,
				s76: 34,
				s101: 0,
				s103: 0,
				s104: 0,
				s117: 0,
				s119: 0,
				s123: 0,
				s131: 0,
				s133: 0,
				s136: 0,
				s148: 0,
				s149: 0,
				s150: 0,
				s102: 0,
				s118: 0,
				s120: 0,
				s130: 0,
				s132: 0,
				s135: 0,
				s139: 0,
				s142: 0,
				s144: 0,
				s145: 0,
				s146: 0,
				s151: 0,
				s152: 1,
				s153: 0,
				s155: 0,
				s156: 7,
				s157: 1,
				s159: 1,
				s162: 0,
				s163: 41,
				s34: 19925,
				s78: 19923,
				s94: 14023,
				s161: 19911,
			},
			gs: 37721,
			ge: 63032,
			ia: [
				{
					s: 52234,
					e: 52727,
					u: "https://fingerprint.com/r4a0Rd2Xs/?ci=js/3.9.4&q=NIrKSr1SW3HEAoyttBe2&ii=fingerprintjs-pro-react/2.6.3/preact/10.19.3&ii=fingerprintjs-pro-spa/1.3.1",
					er: null,
					ds: 52234,
					de: 52234,
					cs: 52234,
					css: 52234,
					ce: 52234,
					qs: 52236,
					ss: 52674,
				},
			],
			vs: [
				{
					t: 1469,
					s: "v",
				},
			],
			ab: {
				noop: "a",
				wrtcm: "timeout",
				wrtcd: "20",
				sld: "-",
			},
		},
	],
};

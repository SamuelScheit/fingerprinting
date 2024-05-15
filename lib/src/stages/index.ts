import getMathFingerprint from "../../../fingerprintjs/src/sources/math";
import { toObject } from "../util/JSON";
import { getDate, getDocument } from "./navigator";
import { getVoices } from "./voices";

export * from "./navigator";
export * from "./index";

export async function get() {
	console.log(
		toObject({
			navigator: window.navigator,
			screen: window.screen,
			date: getDate(),
			document: getDocument(),
			location: location,
			error: new Error("test"),
			performance: performance,
			performanceEntries: performance.getEntries(),
			storage: await navigator.storage.estimate(),
			battery: await window.navigator.getBattery?.(),
			math: getMathFingerprint(),
			highEntropyValues: await navigator.userAgentData.getHighEntropyValues([
				"brands",
				"mobile",
				"platform",
				"platformVersion",
				"architecture",
				"bitness",
				"model",
				"uaFullVersion",
				"fullVersionList",
			]),
			window: {
				WebGL2RenderingContext: window.WebGL2RenderingContext,
				ApplePay: window.ApplePaySession,
				chrome: window.chrome,
				devicePixelRatio: window.devicePixelRatio,
				external: window.external,
				origin: window.origin,
				parent: !!window.parent,
				process: window.process,
			},
			voices: await getVoices(),
		})
	);
}

"use client";

import { useRouter } from "next/navigation";
import { api } from "../../trpc/react";
import { useLayoutEffect, useRef } from "react";
import { Card, CardBody, CardHeader, Skeleton, Snippet } from "@nextui-org/react";
import getApplePayState from "fingerprintjs/src/sources/apple_pay";
import getUnstableCanvasFingerprint from "fingerprintjs/src/sources/canvas";
import { getNavigatorFunctions, getPlugins, getSafeArea } from "./stages/navigator";
import {
	isAndroid,
	isChromium,
	isChromium86OrNewer,
	isDesktopWebKit,
	isEdgeHTML,
	isGecko,
	isIPad,
	isSafariWebKit,
	isTrident,
	isWebKit,
	isWebKit606OrNewer,
	isWebKit616OrNewer,
} from "fingerprintjs/src/utils/browser";
import getMathFingerprint from "fingerprintjs/src/sources/math";
import { getWebGLContext, getWebGlBasics } from "fingerprintjs/src/sources/webgl";
import getFonts from "fingerprintjs/src/sources/fonts";
import getVendorFlavors from "fingerprintjs/src/sources/vendor_flavors";
import getDomBlockers from "fingerprintjs/src/sources/dom_blockers";
import getTouchSupport from "fingerprintjs/src/sources/touch_support";
import { getTimezoneOffset } from "./stages/time";
import getSessionStorage from "fingerprintjs/src/sources/session_storage";
import isTransparencyReduced from "fingerprintjs/src/sources/reduced_transparency";
import isMotionReduce from "fingerprintjs/src/sources/reduced_motion";
import getContrastPreference from "fingerprintjs/src/sources/contrast";
import {
	getMaxMonochrome,
	isDarkMode,
	isForcedColors,
	isHighDynamicRange,
	isHighRes,
	isInvertedColors,
	supportsBackdropBlur,
} from "./stages/media";
import { getBuffer, getErrorStack, performanceNowAccuracy, throwsOnUndefined } from "./stages/generic";
import { getVoices } from "./stages/voices";
import { getWebassemblyPrograms } from "./stages/webassembly";
import {
	getIDCookie,
	getIDFileSystem,
	getIDIndexedDB,
	getIDLocalStorage,
	getIDSessionStorage,
	isCookiesEnabled,
	setAllID,
} from "./stages/storage";
import { enumerateMediaDevices, getWebRTCCandidates, getWebRTCStats, initWebRTC } from "./stages/webrtc";
import { getWebglGeometry } from "./stages/webgl_geometry";
import { getWebglExtensions } from "./stages/webgl_extensions";
import { getAudioFingerprint1, getAudioFingerprint2 } from "./stages/audio";
import { detectSupportedDRMs } from "./stages/drm";
import { measureFontWidths } from "./stages/font_width";
import { renderEmojis } from "./stages/font_emoji";
import { renderMathFormulas } from "./stages/font_math";
import { x64hash128 } from "../../../fingerprintjs/src/utils/hashing";
import { getTLS } from "./stages/tls";
import { Icon } from "@iconify/react";
import { getKeyboardLayout } from "./stages/keyboard";
import { cleanUndefined } from "./stages/util";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";

declare global {
	interface Navigator {
		connection?: {
			rtt: number;
		};
		oscpu?: string;
		deviceMemory?: number;
		userAgentData?: {
			getHighEntropyValues: (x: string[]) => Promise<any>;
		};
	}
	interface Window {
		openDatabase?: any;
		webkitRequestFileSystem?: any;
	}
	interface Performance {
		memory?: any;
	}
	interface HTMLAnchorElement {
		attributionSourceId?: string;
	}
}

if (!globalThis.result) globalThis.result = {};

export function Fingerprint() {
	const router = useRouter();

	const fingerprint = api.fingerprint.visit.useMutation({
		onSuccess: () => {},
	});
	// const result =  useRef({} as any).current;
	const result = globalThis.result as Fingerprint;
	if (globalThis.data) fingerprint.data = globalThis.data;
	else globalThis.data = fingerprint.data;

	type Fingerprint = Parameters<typeof fingerprint.mutateAsync>[0];
	type Sources = {
		[key in keyof Fingerprint]: Fingerprint[key] | (() => Promise<Fingerprint[key]> | Fingerprint[key]);
	};

	useLayoutEffect(() => {
		if (fingerprint.data) return;

		(async () => {
			const { touchEvent, touchStart } = getTouchSupport();
			const context = getWebGLContext({});
			const opts = { cache: { webgl: { context } } };
			const webgl1 = getWebGlBasics(opts);
			const webgl = typeof webgl1 === "object" ? webgl1 : undefined;
			const webglHash = getWebglExtensions(context);
			const canvas = await getUnstableCanvasFingerprint();

			initWebRTC().catch(console.error);

			const hash = (input: string) => (input ? x64hash128(input) : undefined);

			const sources = {
				tls_ja4: getTLS,
				font_list: getFonts,
				font_widths: measureFontWidths,
				font_emoji: renderEmojis,
				font_math: renderMathFormulas,
				element_attributionSourceId: () => document.createElement("a").attributionSourceId,
				element_attributeNames: () => document.documentElement.getAttributeNames(),
				drm: detectSupportedDRMs,
				dom_blocker: getDomBlockers,
				canvas_geometry: hash(canvas?.geometry),
				canvas_text: hash(canvas?.text),
				canvas_winding: canvas?.winding,
				webgl_renderer: webgl?.renderer,
				webgl_vendor: webgl?.vendor,
				webgl_version: webgl?.version,
				webgl_vendor_unmasked: webgl?.vendorUnmasked,
				webgl_renderer_unmasked: webgl?.rendererUnmasked,
				webgl_shading_language_version: webgl?.shadingLanguageVersion,
				webgl_extensions: webglHash?.extensionParameters,
				webgl_extensions_parameters1: webglHash?.extensionParameters,
				webgl_extensions_parameters2: webglHash?.extensionParameters2,
				webgl_context_attributes: webglHash?.contextAttributes,
				webgl_parameters1: webglHash?.parameters,
				webgl_parameters2: webglHash?.parameters2,
				webgl_shader_precisions: webglHash?.shaderPrecisions,
				webgl_geometry: () => {
					if (!context) return null;
					return getWebglGeometry(context);
				},
				apple_pay: getApplePayState,
				navigator_appVersion: navigator.appVersion,
				navigator_connection_rtt: navigator.connection?.rtt,
				navigator_deviceMemory: navigator.deviceMemory,
				navigator_hardwareConcurrency: navigator.hardwareConcurrency,
				navigator_languages: navigator.languages,
				navigator_doNotTrack: navigator.doNotTrack,
				navigator_maxTouchPoints: navigator.maxTouchPoints,
				navigator_getHighEntropyValues: () =>
					navigator.userAgentData?.getHighEntropyValues([
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
				navigator_language: navigator.language,
				navigator_platform: navigator.platform,
				navigator_plugins: getPlugins,
				audio1: getAudioFingerprint1,
				audio2: getAudioFingerprint2,
				navigator_media_devices: enumerateMediaDevices,
				navigator_onLine: navigator.onLine,
				navigator_oscpu: navigator.oscpu,
				browser_android: isAndroid,
				browser_chromium: isChromium,
				browser_safari_webkit: isSafariWebKit,
				browser_webkit_desktop: isDesktopWebKit,
				browser_chromium86OrNewer: isChromium86OrNewer,
				browser_edgeHTML: isEdgeHTML,
				browser_gecko: isGecko,
				browser_trident: isTrident,
				browser_ipad: isIPad,
				browser_webkit: isWebKit,
				browser_webkit606OrNewer: isWebKit606OrNewer,
				browser_webkit616OrNewer: isWebKit616OrNewer,
				window_globals: getVendorFlavors,
				window_TouchEvent: touchEvent,
				window_ontouchstart: touchStart,
				time_zone_offset: getTimezoneOffset,
				window_sessionStorage: getSessionStorage,
				screen_safeArea: getSafeArea,
				screen_height: screen.height,
				screen_width: screen.width,
				screen_colorDepth: screen.colorDepth,
				screen_outerHeight: window.outerHeight,
				screen_outerWidth: window.outerWidth,
				screen_innerHeight: window.innerHeight,
				screen_innerWidth: window.innerWidth,
				window_devicePixelRatio: window.devicePixelRatio,
				screen_highRes: isHighRes,
				media_transparency: isTransparencyReduced,
				media_reduced_motion: isMotionReduce,
				media_backdrop_blur: supportsBackdropBlur,
				media_contrast: getContrastPreference,
				media_dark_mode: isDarkMode,
				media_dynamic_range: isHighDynamicRange,
				media_forced_colors: isForcedColors,
				media_inverted_colors: isInvertedColors,
				media_max_monochrome: getMaxMonochrome,
				window_close_toString: () => window.close.toString(),
				window_localStorage: !!window.localStorage,
				window_indexedDB: !!window.indexedDB,
				window_openDatabase: !!window.openDatabase,
				window_process: !!window.process,
				window_webkitRequestFileSystem: !!window.webkitRequestFileSystem,
				error_stack: getErrorStack, // @ts-ignore
				error_toSource: Error.prototype.toSource,
				error_undefined: throwsOnUndefined,
				document_referrer: document.referrer,
				document_cookie: document.cookie,
				cookies_enabled: isCookiesEnabled,
				location_href: location.href,
				eval_toString: () => eval.toString(),
				external_toString: window.external?.toString,
				function_bind_toString: () => Function.prototype.bind?.toString(),
				performance_memory: performance?.memory?.jsHeapSizeLimit,
				performance_now: performanceNowAccuracy,
				navigator_pdfViewerEnabled: navigator.pdfViewerEnabled,
				navigator_productSub: navigator.productSub,
				navigator_prototype: getNavigatorFunctions,
				user_agent: navigator.userAgent,
				navigator_userAgentData: navigator.userAgentData,
				navigator_vendor: navigator.vendor,
				navigator_vendorSub: navigator.vendorSub,
				navigator_webdriver: navigator.webdriver,
				speechSynthesis_voices: getVoices,
				webassembly_validate: getWebassemblyPrograms,
				storage_estimate: () => navigator.storage?.estimate(),
				storage_getDirectory: async () => (await navigator.storage?.getDirectory()).name,
				id_localStorage: getIDLocalStorage,
				id_sessionStorage: getIDSessionStorage,
				id_cookie: getIDCookie,
				id_fileSystem: getIDFileSystem,
				id_indexedDB: getIDIndexedDB,
				webrtc_candidates: getWebRTCCandidates as any,
				webrtc_stats: getWebRTCStats as any,
				math: getMathFingerprint,
				buffer: getBuffer,
				keyboard_layout: getKeyboardLayout,
			} as Sources;

			await Promise.all(
				Object.entries(sources).map(
					async ([key, source]) =>
						new Promise<void>(async (resolve) => {
							if (typeof source === "function") {
								const timeout = setTimeout(() => {
									console.log("Timeout in", key);
									resolve();
								}, 1000 * 1);
								try {
									result[key] = await source();
								} catch (error) {
									console.error("Error in", key, error);
									result[key] = null;
								}
								clearTimeout(timeout);
							} else {
								result[key] = source;
							}

							resolve();
						}),
				),
			);

			console.log("result", result);
			fingerprint.mutate(
				cleanUndefined({
					ip: "",
					...result,
				}),
			);
		})();
	}, []);

	if (fingerprint.data) {
		setAllID(fingerprint.data.fingerprint);
		console.log(fingerprint.data);
	}

	return (
		<div className="bg-gradient-to-b from-[#120b1c] to-[#15162c]">
			<main className="flex min-h-[100vh] flex-col items-center justify-center px-5 text-center text-white">
				<div>
					<h1 className="break-words text-[3rem] font-extrabold leading-[1] tracking-tight md:text-[5rem]">
						<span className="">
							<span className="text-[2rem] md:text-[3rem]">Your</span> Browser
						</span>
						<span className="">
							{" "}
							Fingerprint <span className="text-[2rem] md:text-[3rem]">is</span>
						</span>
					</h1>
					<Skeleton
						className="mt-2 max-w-[-webkit-fill-available] rounded-2xl"
						isLoaded={fingerprint.isSuccess}
						style={{ containerType: "inline-size", width: "100%" }}
					>
						<h2
							className="z-10 w-full break-words bg-gradient-to-br from-fuchsia-500 to-blue-700 bg-clip-text font-mono font-semibold text-transparent text-[4rem]"
							style={{ fontSize: "5cqw" }}
						>
							{fingerprint.data?.fingerprint || `0c7d1984f9d0b5040ff64321bf5b24ef`}
						</h2>
					</Skeleton>
				</div>
				{fingerprint.isError ? (
					<h2 className="text-[4rem] font-semibold text-red-500">Error: {fingerprint.error.message}</h2>
				) : (
					<>
						<h1
							className="mt-10 grid place-items-center gap-2 text-3xl font-semibold leading-[1] md:gap-5 md:text-[3rem]"
							style={{ gridTemplateColumns: "1fr auto 1fr" }}
						>
							<span className="justify-self-end">You are </span>
							<Skeleton className="rounded-2xl" isLoaded={fingerprint.isSuccess}>
								<span className="bg-gradient-to-br from-fuchsia-500 to-blue-700 bg-clip-text text-transparent md:text-[4.5rem]">
									{fingerprint.data?.percentage ?? 100}%
								</span>
							</Skeleton>
							<span className=""> identifiable</span>
						</h1>
						<div className="text-md md:text-lg text-gray-400">
							The higher the percentage, the more likely you can be tracked.
						</div>
					</>
				)}
			</main>
			{fingerprint.data
				? (() => {
						const { user_agent_details } = fingerprint.data;
						const platform =
							result.navigator_getHighEntropyValues?.platform ||
							fingerprint.data.user_agent_details?.os.name;

						const platformVersion =
							result.navigator_getHighEntropyValues?.platformVersion ||
							fingerprint.data.user_agent_details?.os.version;

						return (
							<article className="mx-auto container min-h-screen w-full pt-0 p-10 text-center text-white">
								<h1 className="text-5xl font-semibold">Details</h1>

								<div className="mt-10 flex flex-row flex-wrap items-start text-[1.6rem] text-center font-semibold gap-5">
									<Card className="gap-3 p-7 bg-[#241040]">
										<CardHeader className="p-0 justify-center">Browser</CardHeader>
										<CardBody className="p-0 items-center gap-5">
											{result.browser_chromium && <Icon icon="logos:chrome" width={75} />}
											{result.browser_edgeHTML && <Icon icon="logos:microsoft-edge" width={75} />}
											{result.browser_trident && (
												<Icon icon="logos:internetexplorer" width={75} />
											)}
											{result.browser_gecko && <Icon icon="logos:firefox" width={75} />}
											{result.browser_webkit && <Icon icon="logos:safari" width={75} />}

											<div className="text-lg">
												{result.navigator_getHighEntropyValues?.uaFullVersion ||
													user_agent_details?.browser.version}
											</div>
										</CardBody>
									</Card>

									<Card className="gap-3 p-7 bg-[#241040]">
										<CardHeader className="p-0 justify-center">OS</CardHeader>
										<CardBody className="p-0 items-center gap-5">
											{(platform === "macOS" || platform == "Mac OS") && (
												<Icon icon="logos:macos" fill="white" width={75} height={75} />
											)}
											{platform == "Windows" && (
												<Icon icon="logos:microsoft-windows-icon" width={75} height={75} />
											)}
											{platform == "iOS" && (
												<Icon fill="white" icon="logos:ios" width={75} height={75} />
											)}
											{platform == "Linux" ||
												(platform === "Unknown" && (
													<Icon icon="logos:linux-tux" width={75} height={75} />
												))}
											{(platform == "Chrome OS" || platform === "Chromium OS") && (
												<Icon icon="logos:chrome" width={75} height={75} />
											)}

											<div className="text-lg">{platformVersion}</div>
										</CardBody>
									</Card>

									<Card className="gap-3 p-7 bg-[#241040]">
										<CardHeader className="p-0 justify-center">Languages</CardHeader>
										<CardBody className="p-0 items-center gap-5">
											<pre className="text-lg">{result.navigator_languages?.join?.("\n")}</pre>
										</CardBody>
									</Card>

									<Card className="gap-3 p-7 bg-[#241040]">
										<CardHeader className="p-0 justify-center">Timezone</CardHeader>
										<CardBody className="p-0 items-center gap-5">
											<div className="text-lg">
												{Intl?.DateTimeFormat?.().resolvedOptions?.()?.timeZone ||
													result.time_zone_offset}
											</div>
										</CardBody>
									</Card>
								</div>
								<details>
									<summary style={{ fontWeight: "600", fontSize: 20 }}>Show all parameters </summary>
									<Table className="mt-10">
										<TableHeader
											columns={
												[
													{ key: "name", label: "Name" },
													{ key: "value", label: "Value" },
													{ key: "count", label: "Count" },
												] as const
											}
										>
											{(column) => (
												<TableColumn align="start" key={column.key}>
													{column.label}
												</TableColumn>
											)}
										</TableHeader>
										<TableBody
											items={Object.entries(result).sort(([key1, value1], [key2, value2]) => {
												return key1.localeCompare(key2);
											})}
										>
											{([key, value]) => (
												<TableRow key={key}>
													<TableCell style={{ textAlign: "left" }} align="left">
														{key}
													</TableCell>
													<TableCell
														align="left"
														style={{
															textAlign: "left",
															overflow: "hidden",
															textOverflow: "ellipsis",
															whiteSpace: "nowrap",
															maxWidth: "200px",
														}}
													>
														{typeof value === "object"
															? JSON.stringify(value)
															: value === true
																? "true"
																: value === false
																	? "false"
																	: value}
													</TableCell>
													<TableCell align="left" style={{ textAlign: "left" }}>
														{fingerprint.data.parameters[key.toLowerCase()] || 0}
													</TableCell>
												</TableRow>
											)}
										</TableBody>
									</Table>
								</details>

								{/* <div className="flex flex-row flex-wrap gap-5">
						{Object.entries(result)
							.map(
								([key, value]) =>
									[key, typeof value === "object" ? JSON.stringify(value, null, 2) : value] as const,
							)
							.sort(([k1, v1], [k2, v2]) => {
								return k1.localeCompare(k2);
							})
							.map(([key, value]) =>
								key === "visits" ? null : (
									<Card key={key} className="mt-5">
										<CardHeader>{key}</CardHeader>
										<CardBody>{value}</CardBody>
									</Card>
								),
							)}
					</div> */}
							</article>
						);
					})()
				: null}
		</div>
	);
}

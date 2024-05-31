CREATE TABLE IF NOT EXISTS "fingerprint_visit" (
	"id" serial PRIMARY KEY NOT NULL,
	"ip" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"id_localStorage" varchar,
	"id_sessionStorage" varchar,
	"id_indexedDB" varchar,
	"id_fileSystem" varchar,
	"id_cookie" varchar,
	"tls_ja4" varchar,
	"audio1" double precision,
	"audio2" double precision,
	"canvas_geometry" varchar,
	"canvas_text" varchar,
	"canvas_winding" boolean,
	"webgl_geometry" varchar,
	"webgl_version" varchar,
	"webgl_vendor" varchar,
	"webgl_shading_language_version" varchar,
	"webgl_vendor_unmasked" varchar,
	"webgl_renderer" varchar,
	"webgl_renderer_unmasked" varchar,
	"webgl_context_attributes" varchar,
	"webgl_shader_precisions" varchar,
	"webgl_extensions" varchar,
	"webgl_parameters1" varchar,
	"webgl_parameters2" varchar,
	"webgl_extensions_parameters1" varchar,
	"webgl_extensions_parameters2" varchar,
	"http_headers" varchar,
	"user_agent" varchar,
	"math" jsonb,
	"buffer" real,
	"navigator_pdfViewerEnabled" boolean,
	"navigator_language" varchar,
	"navigator_languages" jsonb,
	"navigator_webdriver" boolean,
	"navigator_userAgentData" jsonb,
	"navigator_appVersion" varchar,
	"navigator_connection_rtt" real,
	"navigator_plugins" jsonb,
	"navigator_hardwareConcurrency" integer,
	"navigator_deviceMemory" real,
	"navigator_platform" varchar,
	"navigator_vendor" varchar,
	"navigator_productSub" varchar,
	"navigator_vendorSub" varchar,
	"navigator_onLine" boolean,
	"navigator_media_devices" jsonb,
	"navigator_getHighEntropyValues" jsonb,
	"navigator_doNotTrack" varchar(1),
	"navigator_oscpu" varchar,
	"navigator_maxTouchPoints" integer,
	"navigator_prototype" jsonb,
	"window_TouchEvent" boolean,
	"window_ontouchstart" boolean,
	"storage_estimate" jsonb,
	"storage_getDirectory" varchar,
	"speechSynthesis_voices" varchar(32),
	"webrtc_candidates" jsonb,
	"webrtc_stats" jsonb,
	"apple_pay" integer,
	"screen_safeArea" jsonb,
	"screen_width" integer,
	"screen_height" integer,
	"screen_colorDepth" integer,
	"screen_outerWidth" integer,
	"screen_outerHeight" integer,
	"screen_innerWidth" integer,
	"screen_innerHeight" integer,
	"screen_highRes" boolean,
	"window_devicePixelRatio" real,
	"dom_blocker" jsonb,
	"font_list" jsonb,
	"font_widths" jsonb,
	"font_emoji" jsonb,
	"font_math" jsonb,
	"location_href" varchar,
	"document_referrer" varchar,
	"window_webkitRequestFileSystem" boolean,
	"window_openDatabase" boolean,
	"window_sessionStorage" boolean,
	"window_localStorage" boolean,
	"window_indexedDB" boolean,
	"window_permissions" boolean,
	"window_process" boolean,
	"window_globals" jsonb,
	"document_cookie" varchar,
	"cookies_enabled" boolean,
	"webassembly_validate" integer,
	"media_dark_mode" boolean,
	"media_inverted_colors" boolean,
	"media_forced_colors" boolean,
	"media_max_monochrome" integer,
	"media_contrast" integer,
	"media_reduced_motion" boolean,
	"media_dynamic_range" boolean,
	"media_transparency" boolean,
	"media_backdrop_blur" boolean,
	"time_zone_offset" integer,
	"performance_now" jsonb,
	"performance_memory" real,
	"browser_chromium" boolean,
	"browser_chromium86OrNewer" boolean,
	"browser_trident" boolean,
	"browser_gecko" boolean,
	"browser_webkit" boolean,
	"browser_ipad" boolean,
	"browser_android" boolean,
	"browser_webkit606OrNewer" boolean,
	"browser_webkit616OrNewer" boolean,
	"browser_safari_webkit" boolean,
	"browser_webkit_desktop" boolean,
	"browser_edgeHTML" boolean,
	"a_attributionSourceId" real,
	"a_attributeNames" jsonb,
	"eval_toString" varchar,
	"drm" jsonb,
	"error_stack" jsonb,
	"error_toSource" boolean,
	"error_undefined" boolean,
	"external_toString" varchar,
	"window_close_toString" varchar,
	"function_bind_toString" varchar
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "id_idx" ON "fingerprint_visit" ("id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "ip_idx" ON "fingerprint_visit" ("ip");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "createdAt_idx" ON "fingerprint_visit" ("created_at");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "id_localStorage_idx" ON "fingerprint_visit" ("id_localStorage");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "id_sessionStorage_idx" ON "fingerprint_visit" ("id_sessionStorage");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "id_indexedDB_idx" ON "fingerprint_visit" ("id_indexedDB");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "id_fileSystem_idx" ON "fingerprint_visit" ("id_fileSystem");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "id_cookie_idx" ON "fingerprint_visit" ("id_cookie");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tls_ja4_idx" ON "fingerprint_visit" ("tls_ja4");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "audio1_idx" ON "fingerprint_visit" ("audio1");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "audio2_idx" ON "fingerprint_visit" ("audio2");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "canvas_geometry_idx" ON "fingerprint_visit" ("canvas_geometry");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "canvas_text_idx" ON "fingerprint_visit" ("canvas_text");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "canvas_winding_idx" ON "fingerprint_visit" ("canvas_winding");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_geometry_idx" ON "fingerprint_visit" ("webgl_geometry");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_version_idx" ON "fingerprint_visit" ("webgl_version");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_vendor_idx" ON "fingerprint_visit" ("webgl_vendor");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_shading_language_version_idx" ON "fingerprint_visit" ("webgl_shading_language_version");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_vendor_unmasked_idx" ON "fingerprint_visit" ("webgl_vendor_unmasked");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_renderer_idx" ON "fingerprint_visit" ("webgl_renderer");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_renderer_unmasked_idx" ON "fingerprint_visit" ("webgl_renderer_unmasked");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_context_attributes_idx" ON "fingerprint_visit" ("webgl_context_attributes");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_shader_precisions_idx" ON "fingerprint_visit" ("webgl_shader_precisions");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_extensions_idx" ON "fingerprint_visit" ("webgl_extensions");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_parameters1_idx" ON "fingerprint_visit" ("webgl_parameters1");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_parameters2_idx" ON "fingerprint_visit" ("webgl_parameters2");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_extensions_parameters1_idx" ON "fingerprint_visit" ("webgl_extensions_parameters1");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_extensions_parameters2_idx" ON "fingerprint_visit" ("webgl_extensions_parameters2");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "http_headers_idx" ON "fingerprint_visit" ("http_headers");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_agent_idx" ON "fingerprint_visit" ("user_agent");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "math_idx" ON "fingerprint_visit" ("math");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "buffer_idx" ON "fingerprint_visit" ("buffer");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_pdfViewerEnabled_idx" ON "fingerprint_visit" ("navigator_pdfViewerEnabled");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_language_idx" ON "fingerprint_visit" ("navigator_language");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_languages_idx" ON "fingerprint_visit" ("navigator_languages");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_webdriver_idx" ON "fingerprint_visit" ("navigator_webdriver");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_userAgentData_idx" ON "fingerprint_visit" ("navigator_userAgentData");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_appVersion_idx" ON "fingerprint_visit" ("navigator_appVersion");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_connection_rtt_idx" ON "fingerprint_visit" ("navigator_connection_rtt");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_plugins_idx" ON "fingerprint_visit" ("navigator_plugins");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_hardwareConcurrency_idx" ON "fingerprint_visit" ("navigator_hardwareConcurrency");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_deviceMemory_idx" ON "fingerprint_visit" ("navigator_deviceMemory");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_platform_idx" ON "fingerprint_visit" ("navigator_platform");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_vendor_idx" ON "fingerprint_visit" ("navigator_vendor");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_productSub_idx" ON "fingerprint_visit" ("navigator_productSub");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_vendorSub_idx" ON "fingerprint_visit" ("navigator_vendorSub");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_onLine_idx" ON "fingerprint_visit" ("navigator_onLine");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_media_devices_idx" ON "fingerprint_visit" ("navigator_media_devices");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_getHighEntropyValues_idx" ON "fingerprint_visit" ("navigator_getHighEntropyValues");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_doNotTrack_idx" ON "fingerprint_visit" ("navigator_doNotTrack");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_oscpu_idx" ON "fingerprint_visit" ("navigator_oscpu");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_maxTouchPoints_idx" ON "fingerprint_visit" ("navigator_maxTouchPoints");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_prototype_idx" ON "fingerprint_visit" ("navigator_prototype");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "window_TouchEvent_idx" ON "fingerprint_visit" ("window_TouchEvent");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "window_ontouchstart_idx" ON "fingerprint_visit" ("window_ontouchstart");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "storage_estimate_idx" ON "fingerprint_visit" ("storage_estimate");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "storage_getDirectory_idx" ON "fingerprint_visit" ("storage_getDirectory");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "speechSynthesis_voices_idx" ON "fingerprint_visit" ("speechSynthesis_voices");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webrtc_candidates_idx" ON "fingerprint_visit" ("webrtc_candidates");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webrtc_stats_idx" ON "fingerprint_visit" ("webrtc_stats");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "apple_pay_idx" ON "fingerprint_visit" ("apple_pay");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "screen_safeArea_idx" ON "fingerprint_visit" ("screen_safeArea");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "screen_width_idx" ON "fingerprint_visit" ("screen_width");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "screen_height_idx" ON "fingerprint_visit" ("screen_height");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "screen_colorDepth_idx" ON "fingerprint_visit" ("screen_colorDepth");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "screen_outerWidth_idx" ON "fingerprint_visit" ("screen_outerWidth");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "screen_outerHeight_idx" ON "fingerprint_visit" ("screen_outerHeight");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "screen_innerWidth_idx" ON "fingerprint_visit" ("screen_innerWidth");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "screen_innerHeight_idx" ON "fingerprint_visit" ("screen_innerHeight");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "screen_highRes_idx" ON "fingerprint_visit" ("screen_highRes");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "window_devicePixelRatio_idx" ON "fingerprint_visit" ("window_devicePixelRatio");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "dom_blocker_idx" ON "fingerprint_visit" ("dom_blocker");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "font_list_idx" ON "fingerprint_visit" ("font_list");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "font_widths_idx" ON "fingerprint_visit" ("font_widths");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "font_emoji_idx" ON "fingerprint_visit" ("font_emoji");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "font_math_idx" ON "fingerprint_visit" ("font_math");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "location_href_idx" ON "fingerprint_visit" ("location_href");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "document_referrer_idx" ON "fingerprint_visit" ("document_referrer");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "window_webkitRequestFileSystem_idx" ON "fingerprint_visit" ("window_webkitRequestFileSystem");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "window_openDatabase_idx" ON "fingerprint_visit" ("window_openDatabase");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "window_sessionStorage_idx" ON "fingerprint_visit" ("window_sessionStorage");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "window_localStorage_idx" ON "fingerprint_visit" ("window_localStorage");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "window_indexedDB_idx" ON "fingerprint_visit" ("window_indexedDB");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "window_permissions_idx" ON "fingerprint_visit" ("window_permissions");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "window_process_idx" ON "fingerprint_visit" ("window_process");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "window_globals_idx" ON "fingerprint_visit" ("window_globals");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "document_cookie_idx" ON "fingerprint_visit" ("document_cookie");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "cookies_enabled_idx" ON "fingerprint_visit" ("cookies_enabled");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webassembly_validate_idx" ON "fingerprint_visit" ("webassembly_validate");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "media_dark_mode_idx" ON "fingerprint_visit" ("media_dark_mode");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "media_inverted_colors_idx" ON "fingerprint_visit" ("media_inverted_colors");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "media_forced_colors_idx" ON "fingerprint_visit" ("media_forced_colors");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "media_max_monochrome_idx" ON "fingerprint_visit" ("media_max_monochrome");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "media_contrast_idx" ON "fingerprint_visit" ("media_contrast");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "media_reduced_motion_idx" ON "fingerprint_visit" ("media_reduced_motion");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "media_dynamic_range_idx" ON "fingerprint_visit" ("media_dynamic_range");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "media_transparency_idx" ON "fingerprint_visit" ("media_transparency");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "media_backdrop_blur_idx" ON "fingerprint_visit" ("media_backdrop_blur");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "time_zone_offset_idx" ON "fingerprint_visit" ("time_zone_offset");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "performance_now_idx" ON "fingerprint_visit" ("performance_now");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "performance_memory_idx" ON "fingerprint_visit" ("performance_memory");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "browser_chromium_idx" ON "fingerprint_visit" ("browser_chromium");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "browser_chromium86OrNewer_idx" ON "fingerprint_visit" ("browser_chromium86OrNewer");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "browser_trident_idx" ON "fingerprint_visit" ("browser_trident");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "browser_gecko_idx" ON "fingerprint_visit" ("browser_gecko");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "browser_webkit_idx" ON "fingerprint_visit" ("browser_webkit");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "browser_ipad_idx" ON "fingerprint_visit" ("browser_ipad");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "browser_android_idx" ON "fingerprint_visit" ("browser_android");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "browser_webkit606OrNewer_idx" ON "fingerprint_visit" ("browser_webkit606OrNewer");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "browser_webkit616OrNewer_idx" ON "fingerprint_visit" ("browser_webkit616OrNewer");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "browser_safari_webkit_idx" ON "fingerprint_visit" ("browser_safari_webkit");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "browser_webkit_desktop_idx" ON "fingerprint_visit" ("browser_webkit_desktop");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "browser_edgeHTML_idx" ON "fingerprint_visit" ("browser_edgeHTML");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "element_attributionSourceId_idx" ON "fingerprint_visit" ("a_attributionSourceId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "element_attributeNames_idx" ON "fingerprint_visit" ("a_attributeNames");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "eval_toString_idx" ON "fingerprint_visit" ("eval_toString");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "drm_idx" ON "fingerprint_visit" ("drm");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "error_stack_idx" ON "fingerprint_visit" ("error_stack");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "error_toSource_idx" ON "fingerprint_visit" ("error_toSource");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "error_undefined_idx" ON "fingerprint_visit" ("error_undefined");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "external_toString_idx" ON "fingerprint_visit" ("external_toString");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "window_close_toString_idx" ON "fingerprint_visit" ("window_close_toString");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "function_bind_toString_idx" ON "fingerprint_visit" ("function_bind_toString");
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
	"navigator_doNotTrack" varchar,
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
	"error_stack" varchar,
	"error_toSource" boolean,
	"error_undefined" boolean,
	"external_toString" varchar,
	"window_close_toString" varchar,
	"function_bind_toString" varchar
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "id_idx" ON "fingerprint_visit" USING btree ("id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "ip_idx" ON "fingerprint_visit" USING btree ("ip");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "createdAt_idx" ON "fingerprint_visit" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "id_localStorage_idx" ON "fingerprint_visit" USING btree ("id_localStorage");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "id_sessionStorage_idx" ON "fingerprint_visit" USING btree ("id_sessionStorage");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "id_indexedDB_idx" ON "fingerprint_visit" USING btree ("id_indexedDB");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "id_fileSystem_idx" ON "fingerprint_visit" USING btree ("id_fileSystem");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "id_cookie_idx" ON "fingerprint_visit" USING btree ("id_cookie");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tls_ja4_idx" ON "fingerprint_visit" USING btree ("tls_ja4");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "audio1_idx" ON "fingerprint_visit" USING btree ("audio1");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "audio2_idx" ON "fingerprint_visit" USING btree ("audio2");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "canvas_geometry_idx" ON "fingerprint_visit" USING btree ("canvas_geometry");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "canvas_text_idx" ON "fingerprint_visit" USING btree ("canvas_text");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "canvas_winding_idx" ON "fingerprint_visit" USING btree ("canvas_winding");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_geometry_idx" ON "fingerprint_visit" USING btree ("webgl_geometry");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_version_idx" ON "fingerprint_visit" USING btree ("webgl_version");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_vendor_idx" ON "fingerprint_visit" USING btree ("webgl_vendor");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_shading_language_version_idx" ON "fingerprint_visit" USING btree ("webgl_shading_language_version");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_vendor_unmasked_idx" ON "fingerprint_visit" USING btree ("webgl_vendor_unmasked");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_renderer_idx" ON "fingerprint_visit" USING btree ("webgl_renderer");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_renderer_unmasked_idx" ON "fingerprint_visit" USING btree ("webgl_renderer_unmasked");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_context_attributes_idx" ON "fingerprint_visit" USING btree ("webgl_context_attributes");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_shader_precisions_idx" ON "fingerprint_visit" USING btree ("webgl_shader_precisions");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_extensions_idx" ON "fingerprint_visit" USING btree ("webgl_extensions");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_parameters1_idx" ON "fingerprint_visit" USING btree ("webgl_parameters1");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_parameters2_idx" ON "fingerprint_visit" USING btree ("webgl_parameters2");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_extensions_parameters1_idx" ON "fingerprint_visit" USING btree ("webgl_extensions_parameters1");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webgl_extensions_parameters2_idx" ON "fingerprint_visit" USING btree ("webgl_extensions_parameters2");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "http_headers_idx" ON "fingerprint_visit" USING btree ("http_headers");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_agent_idx" ON "fingerprint_visit" USING btree ("user_agent");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "math_idx" ON "fingerprint_visit" USING gin ("math");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "buffer_idx" ON "fingerprint_visit" USING btree ("buffer");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_pdfViewerEnabled_idx" ON "fingerprint_visit" USING btree ("navigator_pdfViewerEnabled");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_language_idx" ON "fingerprint_visit" USING btree ("navigator_language");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_languages_idx" ON "fingerprint_visit" USING gin ("navigator_languages");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_webdriver_idx" ON "fingerprint_visit" USING btree ("navigator_webdriver");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_userAgentData_idx" ON "fingerprint_visit" USING gin ("navigator_userAgentData");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_appVersion_idx" ON "fingerprint_visit" USING btree ("navigator_appVersion");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_connection_rtt_idx" ON "fingerprint_visit" USING btree ("navigator_connection_rtt");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_plugins_idx" ON "fingerprint_visit" USING gin ("navigator_plugins");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_hardwareConcurrency_idx" ON "fingerprint_visit" USING btree ("navigator_hardwareConcurrency");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_deviceMemory_idx" ON "fingerprint_visit" USING btree ("navigator_deviceMemory");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_platform_idx" ON "fingerprint_visit" USING btree ("navigator_platform");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_vendor_idx" ON "fingerprint_visit" USING btree ("navigator_vendor");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_productSub_idx" ON "fingerprint_visit" USING btree ("navigator_productSub");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_vendorSub_idx" ON "fingerprint_visit" USING btree ("navigator_vendorSub");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_onLine_idx" ON "fingerprint_visit" USING btree ("navigator_onLine");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_media_devices_idx" ON "fingerprint_visit" USING gin ("navigator_media_devices");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_getHighEntropyValues_idx" ON "fingerprint_visit" USING gin ("navigator_getHighEntropyValues");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_doNotTrack_idx" ON "fingerprint_visit" USING btree ("navigator_doNotTrack");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_oscpu_idx" ON "fingerprint_visit" USING btree ("navigator_oscpu");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_maxTouchPoints_idx" ON "fingerprint_visit" USING btree ("navigator_maxTouchPoints");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "navigator_prototype_idx" ON "fingerprint_visit" USING gin ("navigator_prototype");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "window_TouchEvent_idx" ON "fingerprint_visit" USING btree ("window_TouchEvent");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "window_ontouchstart_idx" ON "fingerprint_visit" USING btree ("window_ontouchstart");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "storage_estimate_idx" ON "fingerprint_visit" USING gin ("storage_estimate");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "storage_getDirectory_idx" ON "fingerprint_visit" USING btree ("storage_getDirectory");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "speechSynthesis_voices_idx" ON "fingerprint_visit" USING btree ("speechSynthesis_voices");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webrtc_candidates_idx" ON "fingerprint_visit" USING gin ("webrtc_candidates");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webrtc_stats_idx" ON "fingerprint_visit" USING gin ("webrtc_stats");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "apple_pay_idx" ON "fingerprint_visit" USING btree ("apple_pay");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "screen_safeArea_idx" ON "fingerprint_visit" USING gin ("screen_safeArea");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "screen_width_idx" ON "fingerprint_visit" USING btree ("screen_width");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "screen_height_idx" ON "fingerprint_visit" USING btree ("screen_height");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "screen_colorDepth_idx" ON "fingerprint_visit" USING btree ("screen_colorDepth");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "screen_outerWidth_idx" ON "fingerprint_visit" USING btree ("screen_outerWidth");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "screen_outerHeight_idx" ON "fingerprint_visit" USING btree ("screen_outerHeight");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "screen_innerWidth_idx" ON "fingerprint_visit" USING btree ("screen_innerWidth");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "screen_innerHeight_idx" ON "fingerprint_visit" USING btree ("screen_innerHeight");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "screen_highRes_idx" ON "fingerprint_visit" USING btree ("screen_highRes");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "window_devicePixelRatio_idx" ON "fingerprint_visit" USING btree ("window_devicePixelRatio");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "dom_blocker_idx" ON "fingerprint_visit" USING gin ("dom_blocker");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "font_list_idx" ON "fingerprint_visit" USING gin ("font_list");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "font_widths_idx" ON "fingerprint_visit" USING gin ("font_widths");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "font_emoji_idx" ON "fingerprint_visit" USING gin ("font_emoji");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "font_math_idx" ON "fingerprint_visit" USING gin ("font_math");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "location_href_idx" ON "fingerprint_visit" USING btree ("location_href");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "document_referrer_idx" ON "fingerprint_visit" USING btree ("document_referrer");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "window_webkitRequestFileSystem_idx" ON "fingerprint_visit" USING btree ("window_webkitRequestFileSystem");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "window_openDatabase_idx" ON "fingerprint_visit" USING btree ("window_openDatabase");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "window_sessionStorage_idx" ON "fingerprint_visit" USING btree ("window_sessionStorage");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "window_localStorage_idx" ON "fingerprint_visit" USING btree ("window_localStorage");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "window_indexedDB_idx" ON "fingerprint_visit" USING btree ("window_indexedDB");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "window_permissions_idx" ON "fingerprint_visit" USING btree ("window_permissions");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "window_process_idx" ON "fingerprint_visit" USING btree ("window_process");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "window_globals_idx" ON "fingerprint_visit" USING gin ("window_globals");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "document_cookie_idx" ON "fingerprint_visit" USING btree ("document_cookie");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "cookies_enabled_idx" ON "fingerprint_visit" USING btree ("cookies_enabled");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "webassembly_validate_idx" ON "fingerprint_visit" USING btree ("webassembly_validate");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "media_dark_mode_idx" ON "fingerprint_visit" USING btree ("media_dark_mode");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "media_inverted_colors_idx" ON "fingerprint_visit" USING btree ("media_inverted_colors");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "media_forced_colors_idx" ON "fingerprint_visit" USING btree ("media_forced_colors");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "media_max_monochrome_idx" ON "fingerprint_visit" USING btree ("media_max_monochrome");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "media_contrast_idx" ON "fingerprint_visit" USING btree ("media_contrast");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "media_reduced_motion_idx" ON "fingerprint_visit" USING btree ("media_reduced_motion");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "media_dynamic_range_idx" ON "fingerprint_visit" USING btree ("media_dynamic_range");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "media_transparency_idx" ON "fingerprint_visit" USING btree ("media_transparency");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "media_backdrop_blur_idx" ON "fingerprint_visit" USING btree ("media_backdrop_blur");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "time_zone_offset_idx" ON "fingerprint_visit" USING btree ("time_zone_offset");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "performance_now_idx" ON "fingerprint_visit" USING gin ("performance_now");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "performance_memory_idx" ON "fingerprint_visit" USING btree ("performance_memory");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "browser_chromium_idx" ON "fingerprint_visit" USING btree ("browser_chromium");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "browser_chromium86OrNewer_idx" ON "fingerprint_visit" USING btree ("browser_chromium86OrNewer");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "browser_trident_idx" ON "fingerprint_visit" USING btree ("browser_trident");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "browser_gecko_idx" ON "fingerprint_visit" USING btree ("browser_gecko");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "browser_webkit_idx" ON "fingerprint_visit" USING btree ("browser_webkit");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "browser_ipad_idx" ON "fingerprint_visit" USING btree ("browser_ipad");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "browser_android_idx" ON "fingerprint_visit" USING btree ("browser_android");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "browser_webkit606OrNewer_idx" ON "fingerprint_visit" USING btree ("browser_webkit606OrNewer");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "browser_webkit616OrNewer_idx" ON "fingerprint_visit" USING btree ("browser_webkit616OrNewer");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "browser_safari_webkit_idx" ON "fingerprint_visit" USING btree ("browser_safari_webkit");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "browser_webkit_desktop_idx" ON "fingerprint_visit" USING btree ("browser_webkit_desktop");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "browser_edgeHTML_idx" ON "fingerprint_visit" USING btree ("browser_edgeHTML");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "element_attributionSourceId_idx" ON "fingerprint_visit" USING btree ("a_attributionSourceId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "element_attributeNames_idx" ON "fingerprint_visit" USING gin ("a_attributeNames");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "eval_toString_idx" ON "fingerprint_visit" USING btree ("eval_toString");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "drm_idx" ON "fingerprint_visit" USING gin ("drm");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "error_stack_idx" ON "fingerprint_visit" USING btree ("error_stack");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "error_toSource_idx" ON "fingerprint_visit" USING btree ("error_toSource");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "error_undefined_idx" ON "fingerprint_visit" USING btree ("error_undefined");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "external_toString_idx" ON "fingerprint_visit" USING btree ("external_toString");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "window_close_toString_idx" ON "fingerprint_visit" USING btree ("window_close_toString");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "function_bind_toString_idx" ON "fingerprint_visit" USING btree ("function_bind_toString");
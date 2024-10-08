// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  boolean,
  doublePrecision,
  index,
  integer,
  jsonb,
  numeric,
  pgTableCreator,
  real,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `fingerprint_${name}`);

export const visits = createTable(
  "visit",
  {
    id: serial("id").primaryKey(),
    ip: varchar("ip").notNull(),
    createdAt: timestamp("created_at")
      .notNull()
      .default(sql`now()`),
    id_localStorage: varchar("id_localStorage"),
    id_sessionStorage: varchar("id_sessionStorage"),
    id_indexedDB: varchar("id_indexedDB"),
    id_fileSystem: varchar("id_fileSystem"),
    id_cookie: varchar("id_cookie"),
    tls_ja4: varchar("tls_ja4"),
    audio1: doublePrecision("audio1"),
    audio2: doublePrecision("audio2"),
    canvas_geometry: varchar("canvas_geometry"),
    canvas_text: varchar("canvas_text"),
    canvas_winding: boolean("canvas_winding"),
    webgl_geometry: varchar("webgl_geometry"),
    webgl_version: varchar("webgl_version"),
    webgl_vendor: varchar("webgl_vendor"),
    webgl_shading_language_version: varchar("webgl_shading_language_version"),
    webgl_vendor_unmasked: varchar("webgl_vendor_unmasked"),
    webgl_renderer: varchar("webgl_renderer"),
    webgl_renderer_unmasked: varchar("webgl_renderer_unmasked"),
    webgl_context_attributes: varchar("webgl_context_attributes"),
    webgl_shader_precisions: varchar("webgl_shader_precisions"),
    webgl_extensions: varchar("webgl_extensions"),
    webgl_parameters1: varchar("webgl_parameters1"),
    webgl_parameters2: varchar("webgl_parameters2"),
    webgl_extensions_parameters1: varchar("webgl_extensions_parameters1"),
    webgl_extensions_parameters2: varchar("webgl_extensions_parameters2"),
    http_headers: varchar("http_headers"),
    user_agent: varchar("user_agent"),
    math: jsonb("math"),
    buffer: real("buffer"),
    navigator_pdfViewerEnabled: boolean("navigator_pdfViewerEnabled"),
    navigator_language: varchar("navigator_language"),
    navigator_languages: jsonb("navigator_languages"),
    navigator_webdriver: boolean("navigator_webdriver"),
    navigator_userAgentData: jsonb("navigator_userAgentData"),
    navigator_appVersion: varchar("navigator_appVersion"),
    navigator_connection_rtt: real("navigator_connection_rtt"),
    navigator_plugins: jsonb("navigator_plugins"),
    navigator_hardwareConcurrency: integer("navigator_hardwareConcurrency"),
    navigator_deviceMemory: real("navigator_deviceMemory"),
    navigator_platform: varchar("navigator_platform"),
    navigator_vendor: varchar("navigator_vendor"),
    navigator_productSub: varchar("navigator_productSub"),
    navigator_vendorSub: varchar("navigator_vendorSub"),
    navigator_onLine: boolean("navigator_onLine"),
    navigator_media_devices: jsonb("navigator_media_devices"),
    navigator_getHighEntropyValues: jsonb("navigator_getHighEntropyValues"),
    navigator_doNotTrack: varchar("navigator_doNotTrack", {}),
    navigator_oscpu: varchar("navigator_oscpu"),
    navigator_maxTouchPoints: integer("navigator_maxTouchPoints"),
    navigator_prototype: jsonb("navigator_prototype"),
    keyboard_layout: varchar("keyboard_layout"),
    window_TouchEvent: boolean("window_TouchEvent"),
    window_ontouchstart: boolean("window_ontouchstart"),
    storage_estimate: jsonb("storage_estimate"),
    storage_getDirectory: varchar("storage_getDirectory"),
    speechSynthesis_voices: varchar("speechSynthesis_voices", { length: 32 }),
    webrtc_candidates: jsonb("webrtc_candidates"),
    webrtc_stats: jsonb("webrtc_stats"),
    apple_pay: integer("apple_pay"),
    screen_safeArea: jsonb("screen_safeArea"),
    screen_width: integer("screen_width"),
    screen_height: integer("screen_height"),
    screen_colorDepth: integer("screen_colorDepth"),
    screen_outerWidth: integer("screen_outerWidth"),
    screen_outerHeight: integer("screen_outerHeight"),
    screen_innerWidth: integer("screen_innerWidth"),
    screen_innerHeight: integer("screen_innerHeight"),
    screen_highRes: boolean("screen_highRes"), // s142
    window_devicePixelRatio: real("window_devicePixelRatio"),
    dom_blocker: jsonb("dom_blocker"),
    font_list: jsonb("font_list"),
    font_widths: jsonb("font_widths"),
    font_emoji: jsonb("font_emoji"),
    font_math: jsonb("font_math"),
    location_href: varchar("location_href"),
    document_referrer: varchar("document_referrer"),
    window_webkitRequestFileSystem: boolean("window_webkitRequestFileSystem"),
    window_openDatabase: boolean("window_openDatabase"),
    window_sessionStorage: boolean("window_sessionStorage"),
    window_localStorage: boolean("window_localStorage"),
    window_indexedDB: boolean("window_indexedDB"),
    window_permissions: boolean("window_permissions"),
    window_process: boolean("window_process"),
    window_globals: jsonb("window_globals"),
    document_cookie: varchar("document_cookie"),
    cookies_enabled: boolean("cookies_enabled"),
    webassembly_validate: integer("webassembly_validate"),
    media_dark_mode: boolean("media_dark_mode"),
    media_inverted_colors: boolean("media_inverted_colors"),
    media_forced_colors: boolean("media_forced_colors"),
    media_max_monochrome: integer("media_max_monochrome"),
    media_contrast: integer("media_contrast"),
    media_reduced_motion: boolean("media_reduced_motion"),
    media_dynamic_range: boolean("media_dynamic_range"),
    media_transparency: boolean("media_transparency"),
    media_backdrop_blur: boolean("media_backdrop_blur"),
    time_zone_offset: integer("time_zone_offset"),
    performance_now: jsonb("performance_now"),
    performance_memory: real("performance_memory"),
    browser_chromium: boolean("browser_chromium"),
    browser_chromium86OrNewer: boolean("browser_chromium86OrNewer"),
    browser_trident: boolean("browser_trident"),
    browser_gecko: boolean("browser_gecko"),
    browser_webkit: boolean("browser_webkit"),
    browser_ipad: boolean("browser_ipad"),
    browser_android: boolean("browser_android"),
    browser_webkit606OrNewer: boolean("browser_webkit606OrNewer"),
    browser_webkit616OrNewer: boolean("browser_webkit616OrNewer"),
    browser_safari_webkit: boolean("browser_safari_webkit"),
    browser_webkit_desktop: boolean("browser_webkit_desktop"),
    browser_edgeHTML: boolean("browser_edgeHTML"),
    element_attributionSourceId: real("a_attributionSourceId"),
    element_attributeNames: jsonb("a_attributeNames"),
    eval_toString: varchar("eval_toString"),
    drm: jsonb("drm"),
    error_stack: varchar("error_stack"),
    error_toSource: boolean("error_toSource"),
    error_undefined: boolean("error_undefined"), // s146
    external_toString: varchar("external_toString"),
    window_close_toString: varchar("window_close_toString"),
    function_bind_toString: varchar("function_bind_toString"),
    // keyboard b1
  },
  (example) => {
    const obj: any = {};

    Object.keys(example).forEach((key) => {
      // @ts-ignore
      const column = example[key];

      if (column.dataType === "json") {
        obj[key] = index(`${key}_idx`).using("gin", sql.raw(`"${column.name}"`))
      } else {
        obj[key] = index(`${key}_idx`).using("btree", sql.raw(`"${column.name}"`))
      }
    });

    return obj;
  },
);

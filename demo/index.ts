import { JSDOM } from "jsdom";
import { getProxy } from "./proxy";
import { load } from "./fingerprint.pro";

const dom = new JSDOM();
// globalThis.document = getProxy("document");
globalThis.document = getProxy("document", dom.window.document);
globalThis.location = getProxy("location", dom.window.location);
globalThis.window = getProxy("window", dom.window);
dom.window.parent = null;

load();

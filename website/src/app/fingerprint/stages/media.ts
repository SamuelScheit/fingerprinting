export function supportsBackdropBlur() {
  return CSS.supports("backdrop-filter", "blur(2px)");
}

export function isDarkMode() {
  return prefersColorScheme("dark")
    ? true
    : prefersColorScheme("light")
      ? false
      : null;
}

function prefersColorScheme(scheme: string) {
  return window.matchMedia("(prefers-color-scheme: " + scheme + ")").matches;
}

function prefersDynamicRange(n: string) {
  return matchMedia("(dynamic-range: ".concat(n, ")")).matches;
}

export function isHighDynamicRange() {
  return (
    !!prefersDynamicRange("high") ||
    (!prefersDynamicRange("standard") && void 0)
  );
}

function forcedColors(n: string) {
  return matchMedia("(forced-colors: ".concat(n, ")")).matches;
}

export function isForcedColors() {
  return !!forcedColors("active") || (!forcedColors("none") && void 0);
}

function invertedColors(n: string) {
  return matchMedia("(inverted-colors: ".concat(n, ")")).matches;
}

export function isInvertedColors() {
  return !!invertedColors("inverted") || (!invertedColors("none") && void 0);
}

export function getMaxMonochrome() {
  if (!matchMedia("(min-monochrome: 0)").matches) return null;

  for (var n = 0; n <= 100; ++n)
    if (matchMedia("(max-monochrome: ".concat(n.toString(), ")")).matches) {
      return n;
    }

  return 0;
}

export function isHighRes() {
  return window.matchMedia(
    "(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)",
  ).matches;
}

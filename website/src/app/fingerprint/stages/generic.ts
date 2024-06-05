export function getErrorStack() {
  try {
    throw new Error();
  } catch (e) {
    return (e as Error).stack;
  }
}

export function throwsOnUndefined() {
  try {
    // @ts-expect-error objectToInspect is not defined
    return objectToInspect, false;
  } catch (n) {
    return true;
  }
}

export function performanceNowAccuracy() {
  var n = performance;
  // if (!(null == n ? void 0 : n.now)) return { s: -1, v: null };
  for (
    var max = 1, min = 1, current = n.now(), i = current, o = 0;
    o < 50000;
    o++
  ) {
    if ((current = i) < (i = n.now())) {
      var u = i - current;
      if (u > max && u < min) {
        min = u;
      } else if (u < max) {
        min = max;
        max = u;
      }
    }
  }
  return [max, min];
}

export function getBuffer() {
  var n = new Float32Array(1),
    t = new Uint8Array(n.buffer);
  return (n[0] = 1 / 0), (n[0] = n[0] - n[0]), t[3];
}

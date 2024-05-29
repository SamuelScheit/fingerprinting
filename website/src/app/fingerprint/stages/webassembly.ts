export function getWebassemblyPrograms() {
  const prefix = [
    0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10,
  ];

  const programs = [
    [
      9, 1, 7, 0, 65, 0, 253, 15, 26, 11, 0, 10, 4, 110, 97, 109, 101, 2, 3, 1,
      0, 0,
    ], // valid in chrome, safari, firefox
    [
      240, 67, 0, 0, 0, 12, 1, 10, 0, 252, 2, 3, 1, 1, 0, 0, 110, 26, 11, 161,
      10,
    ], // invalid in chrome, safari, firefox => invalid section size: extends past end
    [6, 1, 4, 0, 18, 0, 11, 0, 10, 4, 110, 97, 109, 101, 2, 3, 1, 0, 0], // valid in chrome and firefox, invalid in safari
    [
      8, 1, 6, 0, 65, 0, 192, 26, 11, 0, 10, 4, 110, 97, 109, 101, 2, 3, 1, 0,
      0,
    ], // valid in firefox, chrome and safari
    [7, 1, 5, 0, 208, 112, 26, 11, 0, 10, 4, 110, 97, 109, 101, 2, 3, 1, 0, 0], // valid in firefox, chrome and safari
  ];

  //   bit map of valid programs
  let i = 0;
  for (const program of programs) {
    const wasm = new Uint8Array(prefix.concat(program));
    const valid = WebAssembly.validate(wasm);
    if (valid) {
      i |= 1 << programs.indexOf(program);
    }
  }

  return i;
}

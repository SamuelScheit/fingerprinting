function getBoundingBox(element: HTMLElement, window: Window) {
  const boundingRect = element.getBoundingClientRect();
  const properties = [
    "x",
    "y",
    "left",
    "right",
    "bottom",
    "height",
    "top",
    "width",
  ];
  const boundingBox: any = {};

  properties.forEach((prop) => {
    if (prop in boundingRect) {
      // @ts-ignore
      boundingBox[prop] = boundingRect[prop];
    }
  });

  const fontFamily = window
    .getComputedStyle(element, null)
    .getPropertyValue("font-family");
  boundingBox.font = fontFamily;

  return boundingBox;
}

export function renderMathFormulas() {
  let mathContent = "<mrow><munderover><mmultiscripts><mo>∏</mo>";

  function createMultiScripts(
    main: string,
    sub1: string,
    sub2: string,
    pre1: string,
    pre2: string,
  ) {
    return `<mmultiscripts><mi>${main}</mi><mi>${sub1}</mi><mi>${sub2}</mi>
                <mprescripts></mprescripts><mi>${pre1}</mi><mi>${pre2}</mi></mmultiscripts>`;
  }

  const scriptData = [
    ["𝔈", "υ", "τ", "ρ", "σ"],
    ["𝔇", "π", "ο", "ν", "ξ"],
    ["𝔄", "δ", "γ", "α", "β"],
    ["𝔅", "θ", "η", "ε", "ζ"],
    ["𝔉", "ω", "ψ", "ϕ", "χ"],
    ["ℭ", "μ", "λ", "ι", "κ"],
  ];

  scriptData.forEach((scripts) => {
    mathContent += createMultiScripts(
      scripts[0]!,
      scripts[1]!,
      scripts[2]!,
      scripts[3]!,
      scripts[4]!,
    );
  });

  mathContent += "</munderover></mrow>";

  const mathElement = window.document.createElement("math");
  mathElement.style.whiteSpace = "nowrap";
  mathElement.innerHTML = mathContent;
  window.document.body.append(mathElement);

  const result = getBoundingBox(mathElement, window);
  mathElement.remove();
  return result;
}

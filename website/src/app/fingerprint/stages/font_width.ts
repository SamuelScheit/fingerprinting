// @ts-nocheck
export const measureFontWidths = function () {
  const fontStyles = {
    default: [],
    apple: [{ font: "-apple-system-body" }],
    serif: [{ fontFamily: "serif" }],
    sans: [{ fontFamily: "sans-serif" }],
    mono: [{ fontFamily: "monospace" }],
    min: [{ fontSize: "1px" }],
    system: [{ fontFamily: "system-ui" }],
  };

  const testString = "mmMwWLliI0fiflO&1";
  const defaultWidth = 4000;

  function createTestEnvironment(callback: any, width = defaultWidth) {
    const iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    const doc = iframe.contentDocument!;
    doc.open();
    doc.write(
      '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">',
    );
    doc.close();
    callback(doc, doc.body, width);
    document.body.removeChild(iframe); // Clean up
  }

  function prepareDocument(
    document: Document,
    body: HTMLElement,
    width: number,
  ) {
    body.style.width = `${width}px`;
    body.style.webkitTextSizeAdjust = body.style.textSizeAdjust = "none";

    if (isZoomNeeded()) {
      body.style.zoom = `${1 / window.devicePixelRatio}`;
    } else if (isZoomResetNeeded()) {
      body.style.zoom = "reset";
    }

    const testDiv = document.createElement("div");
    testDiv.textContent = Array.from(
      { length: (width / 20) << 0 },
      () => "word",
    ).join(" ");
    body.appendChild(testDiv);
  }

  function measureFonts(document: Document, body: HTMLElement) {
    const elements = {};
    const results = {};

    for (const [key, styles] of Object.entries(fontStyles)) {
      const style = styles[0] || {};
      const textContent = testString;
      const span = document.createElement("span");

      span.textContent = textContent;
      span.style.whiteSpace = "nowrap";

      for (const [property, value] of Object.entries(style)) {
        if (value !== undefined) {
          span.style[property] = value;
        }
      }

      elements[key] = span;
      body.append(document.createElement("br"), span);
    }

    for (const key of Object.keys(fontStyles)) {
      results[key] = elements[key].getBoundingClientRect().width;
    }

    return results;
  }

  return createTestEnvironment((doc, body, width) => {
    prepareDocument(doc, body, width);
    return measureFonts(doc, body);
  });
};

// Dummy implementations for isZoomNeeded and isZoomResetNeeded
function isZoomNeeded() {
  return true;
}

function isZoomResetNeeded() {
  return false;
}

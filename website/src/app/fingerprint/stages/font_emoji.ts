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

export function renderEmojis() {
  const emojis = Array.from({ length: 80 }, (_, i) =>
    String.fromCodePoint(128512 + i),
  ).join("");

  const span = window.document.createElement("span");
  span.style.whiteSpace = "nowrap";
  span.innerHTML = emojis;
  window.document.body.append(span);

  const result = getBoundingBox(span, window);

  span.remove();

  return result;
}

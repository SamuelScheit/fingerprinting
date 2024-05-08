## General

-   [demo/](./demo) Enthält ein POC mit der fingerprint.pro.js library, die man local ausführen kann.

-   [notes/](./notes) Enthält Notizen und Assets für die Dokumentation.

-   [paper/](./paper) Enthält das Paper in Typst mit allen Bildern.

-   [overrides](./overrides) Enthält die Browser overrides (JS Source Dateien), um die offizielle Demo https://fingerprint.com/demo/ zu debuggen.

## Overrides

app-...js lädt die browser library nach einem dynamischen pfad, der wie folgt aufgebaut ist `?b=load-vercel&v=<version>&a=<apiKey>&l=<apiVersion>`

In dem Fall wurde der pfad hardcoded zu `/uQ0X/?b=load-vercel&v=<version>&a=<apiKey>&l=3.9.2`

Die Main Datei der fingerprint.js logik ist in [`overrides/fingerprint.com/uQ0X/?b=load-vercel&v=3&a=NIrKSr1SW3HEAoyttBe2&l=3.9.2`](./overrides/fingerprint.com/uQ0X/%3Fb%3Dload-vercel%26v%3D3%26a%3DNIrKSr1SW3HEAoyttBe2%26l%3D3.9.2)

Diese wurde so angepasst, dass der gesamte ursprüngliche Code in einem [`with`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with) statement wrapped wurde, um die globalen variablen zu überschreiben.

Dabei werden mit einem [`JS Proxy`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) alle Propertyzugriffe und Funktionsaufrufe abgefangen und protokolliert.

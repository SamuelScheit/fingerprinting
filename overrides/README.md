# Overrides

app-...js loads the browser library using a dynamic path that is structured as follows `?b=load-vercel&v=<version>&a=<apiKey>&l=<apiVersion>`

In this case the path was hardcoded to `/uQ0X/?b=load-vercel&v=<version>&a=<apiKey>&l=3.9.2`

The main file of the fingerprint.js logic is in [`overrides/fingerprint.com/uQ0X/?b=load-vercel&v=3&a=NIrKSr1SW3HEAoyttBe2&l=3.9.2`](./overrides/fingerprint.com/uQ0X/%3Fb%3Dload-vercel%26v%3D3%26a%3DNIrKSr1SW3HEAoyttBe2%26l%3D3.9.2)

This has been modified so that all the original code is wrapped in a [`with`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with) statement to override the global variables.

All property accesses and function calls are intercepted and logged using a [`JS Proxy`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy).

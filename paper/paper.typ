
#import "@preview/charged-ieee:0.1.0": ieee
#import "@preview/cetz:0.2.2"
// #import "@preview/plotst:0.2.0": *

#show: ieee.with(
  title: [Technical analysis of browser fingerprinting techniques based on FingerprintJS],
  // abstract: [],
  authors: (
    (
      name: "James Bergfeld",
      organization: [Technical University Munich],
      location: [Munich, Germany],
      email: "j.bergfeld@tum.de"
    ),
    (
      name: "Samuel Scheit",
      organization: [Technical University Munich],
      location: [Munich, Germany],
      email: "tum@samuelscheit.com"
    ),
  ),
  index-terms: ()
)

#set text(lang: "en")
#let Footlink(href, body) = { link(href, text(body)); footnote(link(href)) }
// #let Footlink(href, body) = { link(href, text(body)) }

#set heading(numbering: "1.1.1)a)")
#show heading: it => locate(loc => {
      // Find out the final number of the heading counter.
      let levels = counter(heading).at(loc)
      let deepest = if levels != () {
        levels.last()
      } else {
        1
      }
  
      set text(10pt, weight: 400)
      set par(first-line-indent: 0pt)
      
      if it.level == 1 [
        // First-level headings are centered smallcaps.
        // We don't want to number of the acknowledgment section.
        #let is-ack = it.body in ([Acknowledgment], [Acknowledgement])
        #set align(center)
        #set text(if is-ack { 10pt } else { 12pt })
        #show: smallcaps
        #v(20pt, weak: true)
        #if it.numbering != none and not is-ack {
          numbering("1.", deepest)
          h(7pt, weak: true)
        }
        *#it.body*
        #v(13.75pt, weak: true)
      ] else if it.level == 2 [
        // Second-level headings are run-ins.
        #set text()
        #v(10pt, weak: true)
        #if it.numbering != none {
          numbering("1.", deepest)
          h(7pt, weak: true)
        }
        *#it.body*
        #v(10pt, weak: true)
      ] else if it.level == 3 [
        #set text()
        #v(10pt, weak: true)
        #if it.numbering != none {
          numbering("1)", deepest)
          h(7pt, weak: true)
        }
        *#it.body*
        #v(10pt, weak: true)
      ] else [
        // Third level headings are run-ins too, but different.
        #if it.numbering != none {
          numbering("a)", deepest)
          h(7pt, weak: true)
        }
        *#(it.body)*
      ]
})

// #cite(<fingerprintJS>, supplement:"pp. 1-2")

/*

QUESTIONS TO OUR INSTRUCTOR:
- (how) can / should we add attachments, e.g. a list of fonts that fingerprintjs checks for? ⭕ Appendix
- (how) do we include code used to test our hypothesis? ❓
- which of the following topics can / should we investigate? ⭕ see selection below (⭕=yes / ❌=no / ❓=maybe)
- is this typst template acceptable? ❓ yes, but check with Emmanuel before handing in the paper just to be sure
- do we need more literature? ❓ hm

Current status:

- read up on browser fingerprinting (what is it; what are some keywords that users should be aware of?)
- reverse-engineered FingerprintJS
  - enumerated function calls and parameters using a debugger (give examples, explain that this is not a conclusive overview of APIs used (due to lack of browser support on the setup used for testing), or how they're used)
  - investigated fingerprint generation payload (obfuscated: no concrete findings)
  - backtraced payload parameters by debugging the script
  - rebuilt fingerprint generation request for testing

Next steps:
- list all parameters used for fingerprint generation, investigate complicated ones (e.g. canvas fingerprint, etc.)
  - compare to those used by the open-source version

Possible further topics:

❓1. compare fingerprint parameters to literature and/or browser fingerprint datasets
❓2. look into parameter weights
❌  1. [?] reverse-engineer server-side fingerprint parameters weights
⭕    - problems with this approach
⭕      - emphasize that we're only describing *one* possible set of weights
⭕      - mention unreliableness of our results
⭕    - state the (obvious) difference between the weighted (commercial-) and unweighted / concatenated (open source) approach
⭕  2. build our own (mock) fingerprinting library (we need users / example visits and browser fingerprints to be able to draw conclusions from this!)
❌4. compare fingprintjs to other (open- or commercial source) fingerprinting libraries (e.g. stytch)
❌5. present possible counter-measures (relative canvas noise, etc)

What do we want to focus on:

❓- literature vs fingerprintjs
❓  - (=> how is data, e.g. the canvas fingerprint, generated?)
❌ - fingerprintjs vs other implementations (open-source version, stytch, etc)
⭕- educated guess abt possible weights for fingerprintjs => custom library!

*/

/*\
| | PAPER STYLE
     - avoid phrases like "we discovered", "we sent a packet", "you can see", "our findings"
     - instead: "it can be shown", "investigating the payload reveiled"
     - name entities directly, e.g. "server", "browser"
     - spell out acronyms when introducing for the first time
     - use #cite() to cite references
     - write in simple past
| |
\*/


/*\
| | SCIENTIFIC METHODOLOGY
     1. define task
     2. state goals
     3. describe specific steps
     4. present results
     5. discuss findings and their implications
| |
\*/

#show outline.entry: it => {
  it
}

// #outline(depth: 2, indent: auto, title: "Contents")

// NOTES

#let note(t) = { /* footnote(t); */ }


= Introduction

/*
== [META] section contents

// META ===================>
// Motivate, develop research questions, outline key content of paper

what goes here:
short intro: what is a fingerprint? what is tracking and how does it work? keep brief.

main question:

- "How does modern browser fingerprinting work (in practice)?"

why our paper:

other academic work focuses on proposing, identifying or improving individual browser properties that can be used to fingerprint browsers. // some of these aspects should more appropriately mentioned in section 2 (background) with a few examples of related papers. Esp the cover you tracks paper "How Unique Is Your Web Browser?" is closely related!

relevance:

- with the deprecation of third-party cookies, a rising demand to find other ways of tracking users to analyze web traffic can be seen. Many content delivery and advertising companies previously relied on these cookies to track their users. ⭕

- to get a realistic view of how fingerprinting actually works, we take a look at a modern fingerprinting library ⭕ and analyze its client-side operation of data collection.

- FingerprintJS is currently the most widely-used fingerprinting library on npm ⭕

key points:

- reverse-engineering the FingerprintJS demo website gives a direct look at the practical implementation of browser fingerprinting technology

- types of data collected by the demo website (don't?) match the properties outlined in prominent literature

- by deploying a website that collects the same data as FPJS, a data set of fingerprints may be built

- collected data can be used to devise and test possible fingerprinting algorithms

// (Browser Fingerprinting) optional taken from proposal

// <=================== META

== [META] Intro

*/

// TODO: start more basic? -> Privacy!
/*
more digitalization ->  more value in user data ((src?))
  -> increasing use of browser fingerprinting tech @DetectFingerprinting
  -> rising awareness of digital privacy, especially third-party cookies (src?) -> deprecation of 3p cookies in major browsers / src? -> other technologies, including browser fingerprinting
*/

//// relevance of fingerprinting
In an age of progressive digitalization and data collection, the commercial value of web users' data is continuously increasing. Personal content delivery, bot detection, user authentication and personalized advertising rely heavily on the ability to reliably identify users across the web. Most data vendors currently use so-called "third-party cookies" to identify and discern between users. However, users and browser developers are becoming more aware of the threats that cookies pose to digital privacy. Most major browser vendors, therefore, have announced the deprecation of third-party cookies in order to reduce the privacy impact on users, with Google's Chrome browser being the most recent example.
These latest changes in the world of web browsing and privacy protection have created a rising demand for other methods of web tracking and traffic analysis, which has lead to increasing usage of browser fingerprinting technology on the internet. @DetectFingerprinting

//// what is a fingerprint? what is fingerprinting?
== Definition
Websites use browser fingerprinting to create a unique identifier of each website visitor by collecting data about the visitor's device and browser configuration and combining them to create a unique "fingerprint". The browser properties considered when creating a fingerprint are herein referred to as parameters of the fingerprint. A parameter may describe browser settings, installed extensions, system configuration, available fonts, audio devices, or others. They may also be derived from the hardware, software or network stack by analyzing the results of tests, such as image rendering, that can yield distinct results depending on the devices attached to and drivers installed on the system.

Because of their statelessness, fingerprints can even identify users across different websites, visits and between regular and private browsing mode (or incognito mode) without the reliance on login- and tracking-cookies stored on a user's browser, which makes fingerprinting a suitable alternative to other tracking methods.

#colbreak()

//// fingerprinting in academics
== Related Academic Work
There are a number of studies concerning browser fingerprinting technology, browser configurations and privacy implications of fingerprinting. Publications such as Olejnik et al. @batteryFP investigate individual features of a browser, e.g. the battery API, to /* propose ways to uniquely identify a device based on information derived from them. */ determine how information derived from them can be used to uniquely identify a device. Other works are mainly concerned with devising custom browser fingerprinting algorithms on parameter sets of varying sizes to demonstrate the effectiveness of browser fingerprinting.
In 2010, Eckersly @howUnique was able to successfully identify 83.6% fingerprints from a sample of 470,161 using a simple algorithm with a manually chosen set of eight parameters. Expanding on the former, Pugliese et al. @longtermFP collected user fingerprints over a span of three years to evaluate the identifiability of possible parameter combinations from a total of 305 collected parameters. Out of 43,025 fingerprints collected from 652 users, 94.5% were deemed to be trackable using feature sets determined by an algorithm optimized based on a dataset of similar size.

== FingerprintJS
//// why FPJS
Despite their successful statistical demonstrations, the aforementioned algorithms are not a suitable basis for conclusions about the practical implementation of modern browser fingerprinting. /*cannot be considered suitable as a sole basis for the practical implementation of a modern browser fingerprinting library. The data#note("better") suffers from*/ This is due to user sampling biases/*#note("see Gómez-Boix2018")*/ and the usage of deprecated features such as the Adobe Flash suite for fingerprint generation.
By conducting an analysis of a widely used fingerprinting library, direct insight into modern standards of browser fingerprinting technology may be gained. // more smooth?
// ↓ copied from refined proposal ↓ \\
FingerprintJS is currently the most widely used browser fingerprinting library @topFingerprintingWebsites. This is evidenced by npm download statistics, which show FPJS as the most popular JavaScript browser fingerprinting library @npmTrends. As such, it's a suitable subject to investigate the implementation of browser fingerprinting in practice.
FPJS offers two fingerprinting solutions: FingerprintJS, an open-source library with moderate coverage of different browser types and configurations as well as FingerprintJS Pro, a subscription-based closed-source library that uses a greater set of parameters and claims a 99.5% rate of (re-)identification. The analysis within this paper focuses solely on the latter because of its higher accuracy that is more likely to match the industry standards that are to be examined.
// ↑ copied from refined proposal ↑ \\

// how does FPJS work
FPJS Pro is a JavaScript library that runs on a user's browser, collecting a total of 117 parameters from browser API calls and statistical properties. The parameters are sent to the FPJS server and parsed using an algorithm that isn't publicly available. The algorithm returns an ID or fingerprint based on the data that uniquely identifies the browser being fingerprinted.

// key points and preview of methodology, research questions

// include methodology from refined proposal
Since the source code of FPJS Pro isn't available, conducting an analysis on the full implementation of FingerprintJS Pro isn't possible. Conclusive results can instead be achieved by reverse-engineering a public instance of the FingerprintJS Pro library hosted on FingerprintJS' demonstration website#footnote("https://fingerprint.com/demo/").

/*
== TODO
should the following be moved to `Methodology`?

- what are the contents of this paper?
- outline research goals / questions and results
- data biases (people we sent it to / website where we published a link / usage of qr-code -> more mobile user agents? / short duration of data collection / etc)
*/
/*
== General
*/
/*
== Advantages

The purpose is to create a detailed profile of each user to display personalized content, serve advertising or analyze user behavior.
This can be used both to improve the user experience and to detect fraudulent activity.
*/

/*
== Disadvantages

In order to create a unique browser fingerprint, extensive information about a user's devices and browser settings must be collected.
However, this violates the user's privacy unless they have explicitly agreed.
Especially since there is no way to opt out of fingerprinting and the data can be used to track users across multiple websites.
This allows websites to create a comprehensive profile of a person's online activities and draw conclusions about a person's identity and behavior.
*/

/*
== Relevance

Because website operators require unique user profiles, even without users' consent, to provide personalized content and to analyze user behavior, browser fingerprinting has become an important tool.
This is evidenced by the fact that 30.6% of the top 1k websites in the Alexa ranking use fingerprinting techniques. @DetectFingerprinting

Since the majority of all browsers deactivate third-party cookies by default in the future #footnote[https://developer.mozilla.org/en-US/blog/goodbye-third-party-cookies/], or need explicit consent to use third-party cookies, browser fingerprinting is a significant alternative to identify users across different websites.
*/
/*
== Application

In order to assign a unique identity or “fingerprint” to each user, various details are collected via the browser.
For example, a combination of rare fonts, a specific screen resolution, or a specific browser plugin can help generate a unique fingerprint.

JavaScript libraries can be used for this, such as _FingerprintJS_ (FPJS), which collects a variety of information about a user's browser environment. In the commercial version, FPJS claims to be able to create a 99.5% unique fingerprint. @fingerprintJS
*/

FPJS is the most popular JavaScript browser fingerprinting library according to npm downloads. @npmTrends

#figure(
   image("npm.png"),
   caption: [NPM downloads per day, comparison of different JS fingerprinting libraries (as of May 2024). From @npmTrends.]
)


// (related to background)
// usage how to use fingerprinting in a project e.g. with fingerprintjs
// explain why fingerprint.js is relevant include npm stats

/*
= Background

// summarize and present work that is crucial to understand your paper and work that is closely related to it

our paper is closely related to @howUnique, we update data used, look at actual implementations and devise /* FIXME dupl? */ a similar though less extensive algorithm to parse data

// https://fingerprint.com/blog/
// https://github.com/fingerprintjs/fingerprintjs
// related browser fingerprinting papers about the browser apis 
*/

= Methodology

// present your study design in a way that makes it possible for third parties to replicate it

/*
- reverse-engineered FingerprintJS
  - enumerated function calls and parameters using a debugger (give examples, explain that this is not a conclusive overview of APIs used (due to lack of browser support on the setup used for testing), or how they're used)
  - investigated fingerprint generation payload (obfuscated: no concrete findings)
  - backtraced payload parameters by debugging the script
  - rebuilt fingerprint generation request for testing
*/


// reverse-engineer, list (and describe) parameters, create a custom library that collects the same data as FPJS pro, evaluate parameter identifiability

== Reverse-engineering FingerprintJS Pro
// #note[one concise sentence that describes what the goal of this process is, comp. @howUnique's Methodology section]
Since the source code of FPJS Pro isn't freely available, a technical analysis necessitates reverse-engineering a publicly hosted instance of FPJS Pro, such as their demonstration website.// #footnote("https://fingerprint.com/demo/")

A snapshot of the demonstration page is captured to ensure a consistent and stable environment for analysis and prevent changes to the code base caused by updates to the FPJS Pro library. The snapshot used for this paper was created on May 8, 2024, capturing version 3.9.4 of FPJS Pro. It is assumed that library files are static and not modified per device and are the same versions for mobile and desktop clients. The obfuscated JavaScript library is retrieved from the site by visiting it with an up-to-date Chrome browser and extracting the code using Chrome's built-in developer tools.

Using a JavaScript Proxy object #footnote(link("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy")) a list of API- and function calls can be captured to give an overview of the general behavior of the library.
This aids in identifying entry points for later reverse engineering.

Analysis of the network calls made when running FPJS reveals that fingerprints are generated by collecting data about the browser setup using client-side JavaScript and sending it to a remote server. The server parses the data and computes a fingerprint.
The client payload is serialized before being sent and can't be read in plaintext. Therefore the request needs to be traced back to the caller function that generates the payload to decipher its contents.
The browser's internal JavaScript debugger can be used to inspect the payload in plaintext format before it is serialized.
The plaintext payload can be used to identify the functions used to measure each parameter value in the user's browser. These functions are then analyzed in detail, with particular regard to the browser APIs used and their processing.

The parameters collected by FingerprintJS Pro and the results of their analysis are described in @revEngResults.

== Implementing a custom library

The actual fingerprints are generated with API calls to a closed-source server. It is therefore infeasible to reverse-engineer the actual fingerprint generation algorithm.
A data-driven approach to developing an algorithm that tracks users across visiting using fingerprints is presented in @FPAlgo.

A representative dataset of fingerprints is necessary to assess the identifiability of browsers using the individual parameters collected by FingerprintJS. To create such a dataset, fingerprints are gathered from real browsers by deploying a custom fingerprinting library on a web server.
The website displays a consent notice and a brief definition of browser fingerprinting. Upon accepting the data usage policy, the library gathers the same parameters as FingerprintJS and sends them back to the server, which in turn generates a fingerprint based on this data. Data was collected between July 9 and July 26, 2024.

To identify and evaluate fingerprints from multiple visits of the same browser, a unique random ID is generated and stored on the client's `localstorage`, cookies, `indexedDB` and the `filesystem` API. The ID persists across visits and is attached to every recorded fingerprint sent back to the server. This establishes a ground truth for measurements pertaining to the stability of fingerprinting parameters as defined in @parameterFormulas.
It is assumed that participants are of good faith and don't send arbitrary requests with invalid visitor IDs or spoofed values aside from those spoofed by privacy-enhancing settings, such as Firefox Enhanced Tracking protection.

// #note[TODO: edgecases, scope limitation]

== Devising a fingerprinting algorithm

After the custom library has collected the visitor's browser parameters, this data must be evaluated to determine whether the visitor is a known or a new visitor.

The collected visitor parameters must be compared with the database of all previous visitors. A probability must be calculated that indicates how closely the visitor matches an existing user in the database.

For this, the algorithm must implement a probability weight system to make sure that the fingerprint still matches the same user if the browser configuration slightly changes.


// #note("TODO")
// determine parameter weights using data gathered with custom library
// develop an algorithm that determines whether a new fingerprint should be considered equal to a previously recorded FP based on their similarity

= Results

== Parameters <revEngResults>

Reverse engineering the FPJS library revealed that 117 parameters are considered for browser fingerprint generation. Further investigation into the obfuscated JavaScript used to collect these parameters showed that the library retrieves a large number of static browser properties such as screen geometry, enabled languages, browser vendor and version. // #note("TODO")
See @parameters for a list of all browser properties and API accesses made by FPJS.

// more: dynamic properties (css colors, canvas fp, math functions)
// dom blockers!
// other studies don't use accessibility apis, such as speech synthesis or high contrast mode to identify users

=== Statistical properties

// some browsers return inaccurate values to prevent fingerprinting
// apple pay

FPJS enumerates properties of the global `navigator` and `window` objects and sends them to the server without further processing. The navigator interface consists of properties and functions used to describe the web browser (navigator) which are suitable for fingerprinting for obvious reasons. The global window object "is home to a variety of functions, namespaces, objects, and constructors which are not necessarily directly associated with the concept of a user interface window" @mdnWindow. The values of these properties have a variety of implications some of which (such as the screen's color depth) may also be used to identify a user.
Checks are made for global JavaScript objects specific to major browsers, e.g. the `chrome` object for Google Chrome and other Chromium-based browsers or the `ApplePaySession` object that is only present on devices supporting Apple Pay.
None of the parameters retrieved by FPJS use the deprecated Adobe Flash API, as opposed to scientific studies such as @longtermFP which rely on values retrieved using flash scripts.

#let brwserProp(href, body) = { link(href, text(body));/* footnote(href) */ }

#let data = json("./fingerprint_visit.json")

#let parameters = ("tls_ja4","audio1","audio2","canvas_geometry","canvas_text","canvas_winding","webgl_geometry","webgl_version","webgl_vendor","webgl_shading_language_version","webgl_vendor_unmasked","webgl_renderer","webgl_renderer_unmasked","webgl_context_attributes","webgl_shader_precisions","webgl_extensions","webgl_parameters1","webgl_parameters2","webgl_extensions_parameters1","webgl_extensions_parameters2","http_headers","user_agent","math","buffer","navigator_pdfViewerEnabled","navigator_language","navigator_languages","navigator_webdriver","navigator_userAgentData","navigator_appVersion","navigator_connection_rtt","navigator_plugins","navigator_hardwareConcurrency","navigator_deviceMemory","navigator_platform","navigator_vendor","navigator_productSub","navigator_vendorSub","navigator_onLine","navigator_media_devices","navigator_getHighEntropyValues","navigator_doNotTrack","navigator_oscpu","navigator_maxTouchPoints","navigator_prototype","window_TouchEvent","window_ontouchstart","storage_estimate","storage_getDirectory","speechSynthesis_voices","webrtc_candidates","webrtc_stats","apple_pay","screen_safeArea","screen_width","screen_height","screen_colorDepth","screen_outerWidth","screen_outerHeight","screen_innerWidth","screen_innerHeight","screen_highRes","window_devicePixelRatio","dom_blocker","font_list","font_widths","font_emoji","font_math","location_href","document_referrer","window_webkitRequestFileSystem","window_openDatabase","window_sessionStorage","window_localStorage","window_indexedDB","window_permissions","window_process","window_globals","document_cookie","cookies_enabled","webassembly_validate","media_dark_mode","media_inverted_colors","media_forced_colors","media_max_monochrome","media_contrast","media_reduced_motion","media_dynamic_range","media_transparency","media_backdrop_blur","time_zone_offset","performance_now","performance_memory","browser_chromium","browser_chromium86OrNewer","browser_trident","browser_gecko","browser_webkit","browser_ipad","browser_android","browser_webkit606OrNewer","browser_webkit616OrNewer","browser_safari_webkit","browser_webkit_desktop","browser_edgeHTML","a_attributionSourceId","a_attributeNames","eval_toString","drm","error_stack","error_toSource","error_undefined","external_toString","window_close_toString","function_bind_toString","keyboard_layout").map(x=>{
  
  return x
})
/*
#grid(
  columns: 1,
  gutter: 7pt,
  ..parameters
)

*/

/*
// navigator.onLine
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio")[window.devicePixelRatio]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Window/screen")[window.screen]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Window/indexedDB")[window.indexedDB]
// semi-auto from here. check links!
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Window/requestFileSystem")[window.requestFileSystem] // FIXME webkit.requestFileSystem?
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Screen/colorDepth")[window.screen.colorDepth]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Screen/width")[window.screen.width]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Screen/height")[window.screen.height]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage")[window.sessionStorage]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage")[window.localStorage]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Window/indexedDB")[window.indexedDB]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory")[navigator.deviceMemory]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Navigator/hardwareConcurrency")[navigator.hardwareConcurrency]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/estimate")[navigator.storage.estimate()]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/getDirectory")[navigator.storage.getDirectory()]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Navigator/doNotTrack")[navigator.doNotTrack]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Navigator/webdriver")[navigator.webdriver]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Navigator/oscpu")[navigator.oscpu]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Navigator/languages")[navigator.languages]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine")[navigator.onLine]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Navigator/platform")[navigator.platform]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Navigator/plugins")[navigator.plugins]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vendor")[navigator.vendor]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language")[navigator.language]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Navigator/languages")[navigator.languages]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Navigator/pdfViewerEnabled")[navigator.pdfViewerEnabled]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Navigator/webdriver")[navigator.webdriver]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgent")[navigator.userAgent]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/Navigator/appVersion")[navigator.appVersion]
- #brwserProp("https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/rtt")[navigator.connection.rtt]
*/

/*

localStorage and window.openDatabase
prefers reduced transparency
gets the supported DRM systems
navigator.productSub
document.documentElement.getAttributeNames()
window.process
window.outerWidth, window.outerHeight, window.innerWidth, window.innerHeight
window.close.toString()
supports backdrop-filter blur
device-pixel-ratio with media query
supports SharedArrayBuffer
checks if borders are properly rendered
saved random id in cookie
random id per visit
same random id as si saved in localStorage
keyboard listener with keydown and keyup events with timestamps

====== more complicated properties ======

a tag attributionSourceId
checks if at least 3 are unavailable: window.PushManager, window.AudioBuffer, window.RTCPeerConnection, navigator.geolocation, wind

window.openDatabase
timezone
navigator.cpuClass
window.permissions
checks for touch events
check for global variables that indiciate the browser type
checks if cookies are allowed
checks for display color depth
checks for inverted-colors
check forced color mode
min-monochrome, max-monochrome
prefers-contrast
prefers-reduced-motion
dynamic range
hash of math functions
math with buffers

Apple Pay https://github.com/fingerprintjs/fingerprintjs/blob/master/src/sources/apple_pay.ts
window.getScreenDetails();
navigator.userAgentData.getHighEntropyValues(['brands', 'mobile', 'platform', 'platformVersion', 'architecture', 'bitness', 'model
dom blocker https://github.com/fingerprintjs/fingerprintjs/blob/master/src/sources/dom_blockers.ts
save data in FileStorage of Browser
gets href and referrer of page and parent pages

saved fingerprint id in cookies
gets browser specific css colors
WebAssembly
checks preferred dark or white mode via matchMedia("(prefers-color-scheme: dark)"))
calculates the timezone offset
math random entropy
performance.now() accuracy
performance.memory()

window referer
window.onorientation
checks if the browser is internet explorer
checks if the browser is edge
checks if the browser is chrome
checks if the browser is mobile safari
checks if the browser is safari
checks if the browser is firefox
checks if apis are available SharedWorker,  Audio().sinkId, navigator.connection, window.onorientation
*/

\

// === Integrity

// Additionally, FPJS performs a series of tests to detect whether 

/**

tamper checks:

window.external.toString()
Error.stack
navigator.mimeTypes[0] === MimeType.prototype, MimeTypeArray.prototype === navigator.mimeTypes.prototype
Function.prototype.bind.toString()
typeof navigator.userAgentData === "object"
checks if new Error().toSource() is defined
[typeof SourceBuffer, typeof SourceBufferList]
navigator.plugins.prototype === PluginArray.prototype && navigator.plugins[0].protoype === Plugin.prototype
gets all functions defined on the navigator object
checks if the browser properly throws an error when accessing undefined variables
checks if the browser has overriden the document.createElement function
checks if some window variables were overridden
checks if certain globals are in the window object
checks if globals are defined that indicate the use of a headless browser
checks if globals or navigator.hardwareConcurrency were overridden
checks that navigator.languages was not tampered with
checks the integrity of setTimeout and Error object

v: eval.toString().length

navigator.plugins.length
navigator.mimeTypes.length

*/

// === Fonts


/*
checks if specific fonts are installed: see stage20.js
calculates the width of text with certain fonts
*/


// === TLS

/**
TLS Fingerprint requested by calling https://fingerprint.com/sdub4ver/?q=NIrKSr1SW3HEAoyttBe2
*/

=== Audio

The #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API")[Web Audio API] is a browser API that can be used to artificially generate sounds and audio data.

However it can also be used to create a unique audio profile of the browser by:

+ Generating a series of tone signals with predefined properties such as frequency, volume and distortion.
+ Playing and recording the sound at the same time via the Web Audio API.
+ Analyzing the recorded audio data and encoding it as a hash to create a unique audio fingerprint.

FPJS first creates a #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createOscillator")[triangle oscillator] tone signal with a frequency of `10.000` Hz. Then a #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createDynamicsCompressor")[compressor] is created with the following #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/")[parameters:]

#table(
  columns: (auto, 1fr),
  inset: 10pt,
  align: horizon,
  table.header(
    [*Value*], [*Description*],
    [`-50db`], ["value above which the compression will start taking effect"],
    [`40db`], ["value representing the range above the threshold where the curve smoothly transitions to the compressed portion."],
    [`12db`], ["amount of change needed in the input for a 1 dB change in the output."],
    [`0s`], ["the amount of time required to reduce the gain by 10 dB."],
    [`0.25s`], ["the amount of time required to increase the gain by 10 dB."],
  ),
)

The open-source FPJS version uses a square oscillator with a base frequency of `1.000` Hz and an additional #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode")[bi-quad filter].
This can be visualized by the following diagram that compares the audio values of different browser implementations:

#figure(image("audio.png"),
  caption: [
    #Footlink("https://fingerprint.com/blog/audio-fingerprinting/")[Audio API browser comparison]
  ]
)

Due to subtle differences in audio processing and playback of different browsers and systems, the recorded data will vary slightly from the original.

To prevent fingerprinting Firefox has the ability to #Footlink("https://bugzilla.mozilla.org/show_bug.cgi?id=1708593")[disable the audio API].


=== WebRTC

Web Real-Time Communication (#Footlink("https://webrtc.org/")[WebRTC]) is a browser API used to transmit video-/audio data in realtime over a (optionally peer-to-peer) connection.

// This connection is initiated by sending a Session Description Protocol (#Footlink("https://www.ietf.org/rfc/rfc2327.txt")[SDP]) packet, which includes the local and public IP-Address of the current device.

==== IP Address

#Footlink("https://www.rfc-editor.org/rfc/rfc8445.html")[Interactive Connectivity Establishment (ICE)] is used in WebRTC to establish connections between clients that may be behind different network configurations or firewalls. 
This is achieved by connecting to a #Footlink("https://datatracker.ietf.org/doc/html/rfc5389")[STUN (Session Traversal Utilities for NAT)] server which resolves possible ICE candidates (public IP address and port of the device). Additionally, the browser exposes the local IP address of the device's #Footlink("https://www.ieee802.org/")[local area network (LAN)] to enable local connections in intranets. \
This information can be retrieved by creating a new #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection")[`RTCPeerConnection`] with a specified ICE server and a unique username to correlate the STUN connection with the current browser session. \
By adding an #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/icecandidate_event")[`icecandidate`] event listener, the ICE candidates can be retrieved. The following string is an example candidate: \ \
`candidate:2079771436 1 udp 2122260223 123.234.1.250 50012 typ host generation 0 ufrag qRGm network-id 3` \ \
The candidate includes the IP address, port, network transport protocol, a unique identifier and other key-value parameters. \
// chrome flags #enable-webrtc-hide-local-ips-with-mdns allows to hide local ip, if video devices were never requested
Specifically the local IP address can be used to recognize a device even if the public IP address changes e.g. when using a Virtual Private Network (VPN). \
For this reason the #Footlink("https://bugzilla.mozilla.org/show_bug.cgi?id=1432983")[TOR Browser has disabled the WebRTC protocol] and the #Footlink("https://support.brave.com/hc/en-us/articles/360017989132-How-do-I-change-my-Privacy-Settings#webrtc")[Brave Browser has the ability to disable the usage of LAN IP addresses for WebRTC]. \
However, it should be noted local IP addresses are not unique and different LAN subnets have a limited address room. 
Specifically, 
#Footlink("https://datatracker.ietf.org/doc/html/rfc1918#section-3")[17.891.328 IPv4 addresses are reserved for LAN networks] and similar subnets and IP addresses are reused on many different networks and therefore can only be used for fingerprinting in conjunction with other parameters.

==== Codecs

Additionally the supported audio and video codecs can further help to fingerprint a device as different Browser and Device configurations support different codecs.
The `RTCPeerConnection` created in the previous step can be queried via #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getStats")[`connection.getStats()`] and returns a #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/RTCStatsReport")[`RTCStatsReport`], which contains statistics of used audio and video codecs for the connection.
For example the VP8 video codec is represented as the following object:
```c
id: "HjD6dszXj",
type: "codec",
clockRate: 90000,
mimeType: "video/VP8",
direction: "sendrecv",
uri: "urn:ietf:params:rtp-hdrext:toffset",
```
and contains various information about the supported audio and video codecs e.g. support for #Footlink("https://datatracker.ietf.org/doc/html/draft-ietf-payload-rtp-opus-04#section-6.1")[CPU acceleration, forward error correction, stereo audio, bit-rate, codec version, frame size and other codec specific parameters]. \
These parameters are partially stable as browser updates might add support for different codecs, but processor specific codec acceleration does not change without a hardware modification.

==== Media devices

WebRTC media devices are audio and video sources of the browser as well as audio playback and video display devices. These can be microphones, cameras, speakers and screens. WebRTC allows websites to access these devices via the #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices")[`MediaDevices`] API.

The #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices")[`navigator.mediaDevices.enumerateDevices()` API returns a "list of the currently available media input and output devices".]
Each #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo")[media device] contains the following properties:
- `deviceId` (unique and persistent device identifier)
- `groupId` (optional identifier that groups multiple ids of the same physical device)
- `kind` (`"videoinput","audioinput","audiooutput"`)
- `label` (optional human readable name for the device)

Note that all device properties except `kind` are `null` if the website has never #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia")[requested a media stream before]. \
FPJS uses this to determine the amount of audio and video devices the user has connected. As most websites don't use the media stream, the devices don't have a unique identifier and the media devices are a weak indicator for a unique fingerprint.


=== Speech synthesis

#let Murmurhash = { [`Murmurhash3_128_x64` ]; cite(<MurmurHash>) }
#let JSONStringify = { Footlink("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify")[`JSON.stringify`] }

#Footlink("https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis")[SpeechSynthesis] is part of the #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API")[Web Speech Browser API] that allows websites to convert text to audio data (so-called Text-to-speech or TTS).
The browser exposes the function #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices")[`SpeechSynthesis.getVoices()`] that lists all locally and remotely available voices that can be used for TTS. \
Each voice contains the following properties:
- `voiceURI` (unique voice identifier)
- `name` (human-readable name of the voice)
- `lang` (ISO language code of the voice)
- `localService` (boolean indicating if the voice is locally available or a remote service)
- `default` (boolean indicating if the voice is set as default)

FPJS converts this list of voices to a string with #JSONStringify and then hashes it with #Murmurhash.
Additionally FPJS also sends a boolean indicating if any `"Google"` voices are installed on the system.
As browsers return the list in order this hash is stable and only changes when the browser or the user adds a new voice to their system. However this hash only identifies specific browser versions and operating systems and is not unique.
Firefox prevents this when `resistFingerprinting` is enabled by returning an empty list.

// present the findings of your study, for statistical results: also add tables and figures
// the commercial browser fingerprint.js library sends all parameters to the FPJS server
// the server processes the parameters and weights the parameters ( https://fingerprint.com/github/ )

=== Canvas

Canvas is a browser API that allows websites to display dynamic 2D graphics.
However it can also be used to create a unique identifier for the user's graphic engine.

Canvas fingerprinting works by using the Canvas API to draw text, shapes, and images onto a canvas element and then extracting the pixel data to create a unique identifier. This identifier is based on subtle differences in the way browsers and devices render the same graphics instructions.

1. *Text Rendering:* By rendering specific text onto a hidden canvas element, the browser's font rendering and antialiasing techniques contribute to the uniqueness of the fingerprint.
2. *Shape Drawing:* Drawing shapes and applying transformations (scaling, rotation, etc.) can reveal details about the graphics rendering engine and hardware acceleration capabilities.
3. *Image Manipulation:* Using images and manipulating them at a pixel level can reveal information about image processing algorithms and rendering accuracy.

FPJS uses the canvas API to render the following text, emojis and geometry:

#image("canvas1.png")

The pixel data is then retrieved by calling #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL?retiredLocale=de")[`canvas.toDataURL()`] and hashed using #Murmurhash.
However browsers such as #Footlink("https://github.com/brave/brave-browser/issues/9186")[Brave] or #Footlink("https://support.mozilla.org/en-US/kb/firefox-protection-against-fingerprinting")[Firefox] add noise to the retrieved canvas data. To verify if canvas noise is added FPJS calls `toDataURL()` twice and compares the resulting buffers. Additionally FPJS uses an embedded image to check if the #Footlink("https://datatracker.ietf.org/doc/html/rfc2083")[PNG] image data returned by `toDataURL()` matches the data of the embedded image. \
If one of the checks fails, it can be concluded that noise was added to the canvas and the resulting hash is always unique per session and therefore unusable for identification without any further parameters.

=== WebGL

The #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API")[WebGL (Web Graphics Library)] is an additional API on top of the canvas element that allows websites to render 3D graphics, shaders and can also be used to create a unique identifier of the graphics engine.

==== Rendering

By rendering specific shaders and geometric shapes the GPU capabilities for texturing and rendering complexity can uniquely be identified.

FPJS uses WebGL fingerprinting by rendering the following graphic:

#image("canvas2.png")

with the following shaders:

```c
attribute vec2 p;
uniform float t;
void main() {
  float s = sin(t);
  float c = cos(t);
  gl_Position = vec4(p * mat2(c, s, -s, c), 1, 1);
}
```

```c
void main() { gl_FragColor = vec4(1, 0, 0, 1); }
```

The data is retrieved, hashed and verified in the same way as with the Canvas API.

==== Extensions

Additionally the GPU capabilities can be queried by calling #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getSupportedExtensions")[`context.getSupportedExtensions()`], #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getContextAttributes")[`context.getContextAttributes()`], #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getParameter")[`context.getParameter()`] and #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getExtension")[`context.getExtension()`] functions of the  #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext")[`WebGLRenderingContext`]-API. \
The list of all queried WebGL extensions and parameters by FPJS are available as an attachment in @WebglAttributes. \
FPJS then concatenates the result of the queries and creates a hash over the following categories of WebGL parameters:
```c
contextAttributes: "6b1ed336830d2bc96442a9d76373252a",
parameters: "57a2cddb99538d50a0138430ed0720c5",
parameters2: "7bd4d913de3e22461894a997d864dcb8",
shaderPrecisions: "f223dfbcd580cf142da156d93790eb83",
extensions: "57233d7b10f89fcd1ff95e3837ccd72d",
extensionParameters: "fa430f89faf2af23f701c2c6909bcaad",
extensionParameters2: "86a8abb36f0cb30b5946dec0c761d042",
```
and extracts the following plaintext parameters:
```c
version: "WebGL 1.0 (OpenGL ES 2.0 Chromium)",
vendor: "WebKit",
vendorUnmasked: "Google Inc. (Apple)",
renderer: "WebKit WebGL",
rendererUnmasked: "ANGLE (Apple, ANGLE Metal Renderer: Apple M1 Ultra, Unspecified Version)",
shadingLanguageVersion: "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)",
```

// TODO: erklären wie einzigartig die parameter sind und welche browser dieses fingerprinting umgehen

#set math.equation(numbering: none)

#show math.equation.where(block: true): e => [
    #box(width: 100%, inset: 0em, [
        #set align(left)
        #e
    ])
]


// #colbreak()


== Algorithm <FPAlgo>

After all browser parameters of the visiting user have been collected, this data must be evaluated.

=== Goal

The algorithm must decide whether the website visitor is a known visitor or a new visitor.

=== Approach

The collected parameters of the visiting user must be compared with the database of all previous visitors. \
A probability must be calculated that indicates how closely the visiting user matches the existing user in the database. \ \
*Calculation* \
To calculate the probability, all parameters have to be compared with each entry in the database, to see if they match or not. \ \
*Naive* \
A naive approach to calculating the probability would be a value between 0 and 1, starting at 0 and increasing evenly for each matching parameter value in the database. \

The issue with this approach is that all parameters influence the probability equally, which reduces the accuracy of the identification. A less stable parameter, such as screen resolution, could distort the identification if it is not weighted accordingly. \ \
*Weighting* \
Weighting is the process of giving a parameter type an adjusted influence on the resulting probability. \
Therefore, the parameters need to be weighted in a way that ensures that a small change in the browser configuration does not have a great impact on the probability. \
This way, the user can continue to be reliably identified.


=== Formula <parameterFormulas>

The implementation of parameter weights is done by evaluating the stability and uniqueness of each parameter.


$
x = cases(
  0 "parameter does not match with the compared value",
  1 "parameter does match with the compared value"
)
$ 

#let stability(s, x) = (1 - s) * (x + 1) + 2 * s * x
#let uniqueness(u, x) = (1 - x) + (1 + u) * x
#let algo(s, u, x) = stability(s, x) * uniqueness(u, x)


1. *Stability*: Indicates how likely it is that a parameter value remains unchanged across multiple website visits from the same user (user session).

  The following stability function determines the probability of a fingerprint match based on the parameter stability.

  $ "stability"(s, x) = (1 - s) dot (x + 1) + 2 dot s dot x $

  Where $s$ is the stability of the parameter. A stable parameter that does not match (s close to 1) decreases the probability of a match, while an unstable parameter (s close to 0) has less influence.
  A stable parameter that does match increases the probability of a match and it is further influenced by the uniqueness of the parameter.

#table(
  columns: (1fr, 1fr),
  align: (center),
  stroke: none,
  column-gutter: 0pt,
  [*Values don't match*],
  [*Values do match*],
  cetz.canvas({
    import cetz: *
  
    plot.plot(
      size: (3, 3),
      axis-style: "scientific-auto",
      y-label: "probability",
      x-label: "stability",
      y-tick-step: 0.25,
      x-tick-step: 0.25, {
      plot.add(domain: (0, 1), s => stability(s, 0))
    })
  }),
  cetz.canvas({
    import cetz: *
    plot.plot(
      size: (3, 3),
      axis-style: "scientific-auto",
      y-label: "probability",
      x-label: "stability",
      y-tick-step: 0.5,
      x-tick-step: 0.25, {
      plot.add(domain: (0, 1), s => stability(s, 1))
    })
  }),
)

*Determining the stability for each parameter*

First, the parameters of different users must be saved in a database.
It must be noted that the user can be identified by a unique cookie parameter.
After a certain time interval, all parameters must be read out from the user's browser and saved again.
The data can then be analyzed by identifying and dividing the user entries from the database based on their unique cookie identifier into so-called "user sessions".
This makes it possible to analyze how individual parameters of a user change over time and which ones remain the same. \

To calculate the stability value for each parameter, the following formula must be calculated:

$ "#" = "count"  $

$ forall p in "Parameter" | p_"stability" = "average user session stability" = \ (sum_(u in "user sessions")(u_"stability")) / "session count" $ \

$
u_"stability"  = sum_("v " in "user parameters p") ("#parameters with value v" / "#parameters for user") $
 

2. *Uniqueness*: Measures how unique a parameter value is compared to other users.
  $ "uniqueness"(u, x) = (1 - x) + (1 + u) dot x $
  
  Here $u$ is the uniqueness of the parameter. A parameter that does match with high uniqueness value ​​($u$ close to 1) increases the probability. The uniqueness of a parameter that does not match has no influence on the probability, as the stability is the deciding factor for that case.

// #colbreak()
  
#table(
  columns: (1fr, 1fr),
  align: (center),
  stroke: none,
  column-gutter: 0pt,
  [*Values don't match*],
  [*Values do match*],
  cetz.canvas({
    import cetz: *
  
    plot.plot(
      size: (3, 3),
      axis-style: "scientific-auto",
      y-label: "probability",
      x-label: "uniqueness",
      y-tick-step: 0.5,
      x-tick-step: 0.25, {
      plot.add(domain: (0, 1), u => uniqueness(u, 0))
    })
  }),
  cetz.canvas({
    import cetz: *
  
    plot.plot(
      size: (3, 3),
      axis-style: "scientific-auto",
      y-label: "probability",
      x-label: "uniqueness",
      y-tick-step: 0.25,
      x-tick-step: 0.25, {
      plot.add(domain: (0, 1), u => uniqueness(u, 1))
    })
  }),
)


*Determining the uniqueness of each parameter*

The parameters of many different users must be saved in a database, possibly with a unique browser configuration.
To calculate the uniqueness value for each parameter, the following formula must be calculated:


$ lambda = "#all parameter values"  $
$ mu_v = ("#parameters with value v" / lambda)  $

 $ forall p in "P" |
  p_"uniqueness" 
  // &= - sum_("v "in C_p) Pr[C_p "= v"] log_(|C_"p+v"|)(Pr[C_p "= v"])\
  // FIXME line below has been commented out to prevent interference with next column
  &= - sum_("v " in "parameters") mu_v dot log_(lambda)(mu_v) \
   $



3. *Algorithm to calculate the probability of a fingerprint match*:

// The variable x is defined as follows:

// $
// x = cases(
//   0 "parameter does not match with the compared value",
//   1 "parameter does match with the compared value"
// )
// $

The following compare function `c` is used to calculate the variable `x`. This function determines if a parameter value matches the compared value from the database. 

#linebreak()

$ "c"(a, b):= cases(0 "if a" != "b", 1 "otherwise")$ \ \
// parameter match set
// for each $c in C$ we calculate the parameter match set:
// $ M_(f,c) = { (f_n, m(f_v, c_v)) | (f_n, f_v) in f, (c_n, c_v) in c, f_n = c_n} $
// \ \ 
// overlap


The following formula combines stability and uniqueness into a parameter_weight function that indicates the influence of the parameter for identifying a user.

#linebreak()

$
"parameter_weight"(s, u, x) = "stability"(s, x) dot "uniqueness"(u, x)
$

#linebreak()

The final fingerprint matching algorithm then multiplies each parameter_weight to a final probability value. \ \

// and use it to calculate the overlap
$ "match" ("db", "user parameters") = \ product_("p " in "parameters")
"parameter_weight"( p_"stability", p_"uniqueness", c(p, "db"_p) ) $

#linebreak()


// product vs sum:
// using a sum may make calculation more intuitive, but non-matching values can't stop a fingerprint from generating a high overlap value if all others match
// our algorithm must return very large values (close to 1) when using a product to combine the results in order to ensure a match even when properties with little relevance (e.g. window geometry) don't match.

// window geometry => unstable + common
// 

// $ "stability(s, x)" = (1 - s) dot (x + 1) + 2 dot s dot x $
// $ "uniqueness(u, x)" = (1 - x) + (1 + u) dot x  $
// algo (stability, uniqueness, match)  = 
// $ "algorithm"(s,         u,          x    ) = "stability(s, x)" dot "uniqueness(u, x)" $

// #colbreak()


== Data analysis

We deployed our custom fingerprint library on our website https://fingerprint.samuelscheit.com/ and over the span of 17 days we collected fingerprints from 229 visits of 115 unique visitors. Each visitor was identified based on their unique cookie ID and IP address.
On average each unique visitor visited the website $2$ times, with a mean visit count of $1$ and a standard deviation of $2.392$.

Furthermore by analyzing the uniqueness values of the parameters that are available in @attachmentsUniqueness the following abnormal uniqueness values can be seen:

```json
"navigator_webdriver": 0.005145600506297009,
```

The parameter `navigator_webdriver` indicates if the browser is being automated, e.g. by Chrome's dev tool protocol, which is used by web scrapers.

One might expect that only "human" visitors visited the website and clicked the consent button to start fingerprinting. However, since the value of `navigator_webdriver` was `true` instead of `null` for one data entry, this strongly suggests that an automated browser (web scraper) visited the website. By analyzing the visitor's IP address and user agent, it can be determined that the #Footlink("https://archive.org/")[WebArchive] scraper also visited the website.

In addition, when analyzing the stability values in @attachmentsStability the following abnormalities can be seen:

```json
"browser_gecko": 0.9608695652173913,
"browser_webkit": 0.9956521739130435,
...
```

These parameters indicate if the browser uses the Gecko or WebKit browser engine. 
Normally these values should have the value `1` indicating that the browser type never changes for the same user. However by analyzing the dataset one can see that the same user has spoofed their user agent and browser type resulting in the slightly decreased stability for the browser engine parameters.

/*

Cases:

unstable:
-  unequal: neutral (1)
-  equal: increase (2) (depending on uniqueness)

stable:
-  unequal: decrease (0)
-  equal: increase (2) (depending on uniqueness)

unique:
-  unequal: neutral (1)
-  equal: increase (u = 1) (1 + 1) (2)

common:
-  unequal: neutral (1)
-  equal: increase (u + 1)


Mixed Cases:

1. unstable | common
-  unequal  : neutral
-  equal    : increase
-  example  : window width

2. stable   | common
-  unequal  : decrease (always results in a new fingerprint)
-  equal    : increase
-  example  : browser type

3. unstable | unique
-  unequal  : neutral
-  equal    : increase (always results in the same fingerprint)
-  example  : cookie

4. stable   | unique
-  unequal  : always results in a new fingerprint
-  equal    : always results in the same fingerprint
-  example  : (not possible)


unstable   = parameter changes for the same user
stable     = parameter stays always the same for the same user

common     = low entropy parameter that shares the same value with other users
unique     = high entropy parameter that is unique for each user

unequal    = parameter is different as in previous sessions
equal      = parameter is the same as in previous sessions

neutral    = no influence on the probability of matching fingerprints
decrease   = decrease the probability of matching fingerprints with the same parameter value
increase   = increase the probability of matching fingerprints with the same parameter value



For each row:
p = probability of row matching

stability = avg_user (1 / (unique parameter values per user))
stability_median = median_user (1 / (unique parameter values per user))

uniqueness = (unique parameter values per user) / (all unique parameter values)

for each parameter
stable = probability between 1 if the parameter is stable and 0 if the parameter is unstable
unique = probability between 1 if the parameter is unique for each user and 0 if the parameter is the same for each user
equal = 1 if the parameter of the row is the same as the compare value, 0 otherwise

stable -> 1
eq: -
neq: no match

m(1, u, 1) := 1
m(1, u, 0) := 0

stable -> 0
eq: -
neq: -
(depends on uniqueness)

m(0, u, 1) := y
m(0, u, 0) := y

uniqueness -> 1
eq: 1
neq: - (when unstable) 0 (when stable)

m(s, 1, 1) := 1
m(s, 1, 0) := 

uniqueness -> 0

overlap = abhängig von stability uniqueness und übereinstimmung


*/


// = Discussion

// discuss the findings and their implications (on firms, individuals, regulators, ...)

= Conclusion

//  Wrap up your paper, mention key results, possible limitations, future work
The analysis of the technical implementation of FPJS and its parameters revealed that the library uses a large set of 117 parameters to identify web browsers. As opposed to comparable algorithms proposed by academic works, FPJS checks for the existence of browser-specific global objects as well as individual fingerprints for the audio, WebGL and canvas APIs. These parameters are sent to the FPJS server which generates a corresponding unique fingerprint for that user agent. The discrepancies between the parameters used in research and their practical application can be explained by the timeliness and constant updating of the FPJS library and the lack of constant research in this area.

As posts about the dataset gathering were made in a forum about digital privacy, a greater than average number of spoofed parameter values in the dataset should be expected due to privacy enhancing technologies used by the visitors. //  the data of the visitors that was gathered might be biased towards users who use privacy enhancing technologies which might spoof certain parameter values.

// exceeding the scope of this project

A total of 229 valid fingerprints were recorded over the course of 17 days using a custom fingerprinting library. 

The size of this dataset was insufficient to provide statistically significant insights into the stability of the parameters used by FPJS.

A larger dataset of fingerprints over a longer time span is required to draw conclusions about the accuracy of FingerprintJS' claims of 99.5% fingerprint stability over 120 days.

Further research is needed to investigate the accuracy of the proposed algorithm. Conducting a study similar to @longtermFP on two datasets, one to weigh parameters based on stability and uniqueness and another to determine the effectiveness of the algorithm may provide more conclusive findings.


= References

#bibliography("refs.bib", full: true, title: none)

#colbreak()

= Attachments <attachments>

== Stability <attachmentsStability>

#raw(read("stability.json"), lang: "json")

== Uniqueness <attachmentsUniqueness>

#raw(read("uniqueness.json"), lang: "json")

== Parameters <parameters>

#text(read("properties.txt"), font: "Roboto Mono", size: 6pt)

== WebGL Attributes <WebglAttributes>

#text(read("canvas.txt"), font: "Roboto Mono", size: 6pt)

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
// #let Footlink(href, body) = { link(href, text(body)); footnote(link(href)) }
#let Footlink(href, body) = { link(href, text(body)) }

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
- (how) can / should we add attachments, e.g. a list of fonts that fingerprintjs checks for?
- (how) do we include code used to test our hypothesis?
- which of the following topics can / should we investigate?
- is this typst template acceptable?
- do we need more literature?

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

Possible futher topics:

1. compare fingerprint parameters to literature and/or browser fingerprint datasets
2. look into parameter weights
  1. [?] reverse-engineer server-side fingerprint parameters weights
    - problems with this approach
      - emphasize that we're only describing *one* possible set of weights
      - mention unreliableness of our results
    - state the (obvious) difference between the weighted (commercial-) and unweighted / concatenated (open source) approach
  2. build our own (mock) fingerprinting library (we need users / example visits and browser fingerprints to be able to draw conclusions from this!)
4. compare fingprintjs to other (open- or commercial source) fingerprinting libraries (e.g. stytch)
5. present possible counter-measures (relative canvas noise, etc)

What do we want to focus on:

- literature vs fingerprintjs
  - (=> how is data, e.g. the canvas fingerprint, generated?)
- fingerprintjs vs other implementations (open-source version, stytch, etc)
- educated guess abt possible weights for fingerprintjs => custom library!

*/

/*\
| | PAPER STYLE
     - avoid phrases like "we discovered", "we send a packet", "you can see", "our findings"
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

#outline(depth: 2, indent: auto, title: "Contents")

= Introduction

// Motivate, develop research questions, outline key content of paper

- "How does modern browser fingerprinting work (in practice)?"

// (Browser Fingerprinting) optional taken from proposal


== General

Websites use browser fingerprinting to create a unique identifier of each website visitor by collecting data about the visitor's device and browser settings and combining them into a unique "fingerprint."

The aim is for website operators to identify users across multiple website visits without them having to actively accept cookies or log in with their user accounts.

== Advantages

The purpose is to create a detailed profile of each user to display personalized content, serve advertising or analyze user behavior.
This can be used both to improve the user experience and to detect fraudulent activity.

== Disadvantages

In order to create a unique browser fingerprint, extensive information about a user's devices and browser settings must be collected.
However, this violates the user's privacy unless they have explicitly agreed.
Especially since there is no way to opt out of fingerprinting and the data can be used to track users across multiple websites.
This allows websites to create a comprehensive profile of a person's online activities and draw conclusions about a person's identity and behavior.

== Relevance

Because website operators require unique user profiles, even without users' consent, to provide personalized content and to analyze user behavior, browser fingerprinting has become an important tool.
This is evidenced by the fact that 30.6% of the top 1k websites in the Alexa ranking use fingerprinting techniques. @fingerprintingML

Since the majority of all browsers deactivate third-party cookies by default in the future #footnote[https://developer.mozilla.org/en-US/blog/goodbye-third-party-cookies/], or need explicit consent to use third-party cookies, browser fingerprinting is a significant alternative to identify users across different websites.

== Application

In order to assign a unique identity or “fingerprint” to each user, various details are collected via the browser.
For example, a combination of rare fonts, a specific screen resolution, or a specific browser plugin can help generate a unique fingerprint.

JavaScript libraries can be used for this, such as _FingerprintJS_ (FPJS), which collects a variety of information about a user's browser environment. In the commercial version, FPJS claims to be able to create a 99.5% unique fingerprint. @fingerprintJS

FPJS is the most popular JavaScript browser fingerprinting library according to npm downloads. #footnote[https://npmtrends.com/@fingerprintjs/fingerprintjs-vs-@rajesh896/broprint.js-vs-@thumbmarkjs/thumbmarkjs-vs-clientjs-vs-imprintjs]

#figure(
   image("npm.png"),
   caption: [NPM downloads per day, comparison of different JS fingerprinting libraries (as of 2024)]
)


// (connected to background)
// usage how to use fingerprinting in a project e.g. with fingerprintjs
// explain why fingerprint.js is relevant include npm stats

= Background

// summarize and present work that is crucial to understand your paper and work that is closely related to it

// https://fingerprint.com/blog/
// https://github.com/fingerprintjs/fingerprintjs
// related browser fingerprinting papers about the browser apis 

= Methodology

// present your study design in a way that makes it possible for third parties to replicate it

/*
- reverse-engineered FingerprintJS
  - enumerated function calls and parameters using a debugger (give examples, explain that this is not a conclusive overview of APIs used (due to lack of browser support on the setup used for testing), or how they're used)
  - investigated fingerprint generation payload (obfuscated: no concrete findings)
  - backtraced payload parameters by debugging the script
  - rebuilt fingerprint generation request for testing
*/

= Results

== Parameters

=== Statistical properties

// the following parameters are read by fingerprintjs from the browser and are sent directly to the FPJS server
// detect browser type based on availability of property
// some browsers return inaccurate values to prevent fingerprinting

#let brwserProp(href, body) = { link(href, text(body));/* footnote(href) */ }


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

=== Integrity

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

=== Fonts


/*
checks if specific fonts are installed: see stage20.js
calculates the width of text with certain fonts
*/


=== TLS

/**
TLS Fingerprint requested by calling https://fingerprint.com/sdub4ver/?q=NIrKSr1SW3HEAoyttBe2
*/

=== Audio

The #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API")[Web Audio API] is a browser API that can be used to artificially generate sounds and audio data.

However it can also be used create a unique audio profile of the browser by:

+ generating a series of tone signals with predefined properties such as frequency, volume and distortion.
+ Playing and recording the sound at the same time via the Web Audio API.
+ Analyzing the recorded audio data and encoding as a hash to create a unique audio fingerprint.

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

The open source FPJS version uses a square oscillator with a base frequency of `1.000` Hz and an additional #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode")[bi-quad filter].
This can be visualized by the following diagram that compares the audio values of different browser implementations:

#figure(image("audio.png"),
  caption: [
    #Footlink("https://fingerprint.com/blog/audio-fingerprinting/")[Audio API browser comparison]
  ]
)

Due to subtle differences in audio processing and playback of different browsers and systems, the recorded data will vary slightly from the original.

To prevent fingerprint Firefox has the ability to #Footlink("https://bugzilla.mozilla.org/show_bug.cgi?id=1708593")[disable the audio API].


=== WebRTC

Web Real-Time Communication (#Footlink("https://webrtc.org/")[WebRTC]) is a browser API used to transmit video-/audio data in realtime over a (optionally peer-to-peer) connection.

// This connection is initiated by sending a Session Description Protocol (#Footlink("https://www.ietf.org/rfc/rfc2327.txt")[SDP]) packet, which includes the local and public IP-Address of the current device.

==== IP Address

#Footlink("https://www.rfc-editor.org/rfc/rfc8445.html")[ICE (Interactive Connectivity Establishment)] is used in WebRTC to establish connections between clients that may be behind different network configurations or firewalls. 
This is achieved by connecting to a #Footlink("https://datatracker.ietf.org/doc/html/rfc5389")[STUN (Session Traversal Utilities for NAT)] server which resolves possible ICE candidates (public IP address and port of the device). Additionally the browser exposes the local IP address of the device's #Footlink("https://www.ieee802.org/")[local area network (LAN)] to enable local connections in intranets. \
This information can be retrieved by creating a #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection")[`new RTCPeerConnection({iceServers:{urls:["stun:stun.fpapi.io:3478", username:"..."]}})`] with the specified ICE server and a unique username to correlate the STUN connection with the current browser session.
By adding an #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/icecandidate_event")[`icecandidate`] event listener, the ICE candidates can be retrieved. The following string is an example candidate: \
`candidate:2079771436 1 udp 2122260223 123.234.1.250 50012 typ host generation 0 ufrag qRGm network-id 3` \
The candidate includes the IP address, port, network transport protocol, a unique identifier and other key value parameters.
// chrome flags #enable-webrtc-hide-local-ips-with-mdns allows to hide local ip, if video devices were never requested
Specifically the local IP address can be used to recognize a device even if the public IP address changes e.g. when using a Virtual Private Network (VPN).
For this reason the #Footlink("https://bugzilla.mozilla.org/show_bug.cgi?id=1432983")[TOR Browser has disabled the WebRTC protocol] and the #Footlink("https://support.brave.com/hc/en-us/articles/360017989132-How-do-I-change-my-Privacy-Settings#webrtc")[Brave Browser has the ability to disable the usage of LAN IP addresses for WebRTC].
However, it should be noted local IP addresses are not unique and different LAN subnets have a limited address room. Specifically, #Footlink("https://datatracker.ietf.org/doc/html/rfc1918#section-3")[17.891.328 IP addresses are reserved for LAN networks] and similar subnets and IP addresses are reused on many different networks and therefore can only be used for fingerprinting in conjunction with other parameters.

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

Note that the all device properties except `kind` are `null` if the website has never #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia")[requested a media stream before]. \
FPJS uses this to determine the amount of audio an video devices the user has connected. As most websites don't use the media stream, the devices don't have a unique identifier and the media devices are a weak indicator for a unique fingerprint.


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
3. *Image Manipulation:* Using images and manipulating them at a pixel-level level can reveal information about image processing algorithms and rendering accuracy.

FPJS uses the canvas API to render the following text, emojis and geometry:

#image("canvas1.png")

The pixel data is then retrieved by calling #Footlink("https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL?retiredLocale=de")[`canvas.toDataURL()`] and hashed using #Murmurhash.
However browsers such as #Footlink("https://github.com/brave/brave-browser/issues/9186")[Brave] or #Footlink("https://support.mozilla.org/en-US/kb/firefox-protection-against-fingerprinting")[Firefox] add noise to the retrieved canvas data. To verify if canvas noise is added FPJS calls `toDataURL()` twice and compares the resulting buffers. Additionally FPJS uses an embedded image to check if the #Footlink("https://datatracker.ietf.org/doc/html/rfc2083")[PNG] image data returned by `toDataURL()` matches the data of the embedded image. \
If one of the checks fail noise was added to the canvas and the resulting hash is always unique per session and therefore unusable for identification without any further parameters.

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

== Comparison to open-source FingerprintJS

// canvas: https://github.com/fingerprintjs/fingerprintjs/blob/master/src/sources/canvas.ts

// does not weight parameters
// every parameter is weighted equally
// a single parameter change results in a different fingerprint


#set math.equation(numbering: none)

#show math.equation.where(block: true): e => [
    #box(width: 100%, inset: 0em, [
        #set align(left)
        #e
    ])
]


#colbreak()
#colbreak()


== Parameter weights


Type definitions:

- Parameter weights: ${ ("name", "stability", "uniqueness") }$
  $"stability", "uniqueness" in [0, 1]$
- Fingerprint: ${ ("name", "value") }$
- $"overlap" in [0, 1]$\
  score for each db entry that describes how accurately said entry matches a fingerprint

Given:
- Database of weights for parameters $P$
- Fingerprint $f$
- Collection of existing fingerprints $C$

- $c_p = ⟨ c in C | c."name" = p ⟩ $ // tuple
- $c_"p+v" = ⟨ c in C | "c.name = p" and "c.value = v" ⟩ $
- $C_p = { c in c_p }$
- $C_"p+v" = { c in c_"p+v" }$

- $ forall p in "P" |
  p_"stability"
  &= EE[C_p] \
  &= sum_("v "in C_p) v dot Pr[C_p "= v"] \
  &= sum_("v "in C_p) (frac(abs(C_"p+v"),|C_"p"|))^2 $
- $ forall p in "P" |
  p_"uniqueness" 
  &= EE[I_(C_"p")] \
  &= - sum_("v "in C_p) Pr[C_p "= v"] log_(|C_"p+v"|)(Pr[C_p "= v"])\
  &= - sum_("v "in C_p) frac(|c_"p+v"|,|C_p|) log_(|C_"p+v"|)(frac(|c_"p+v"|,|C_p|))\
   $
 
We generate a fingerprint:

// (helper) match func
define match function $m(a, b):= cases(0 "if a" != "b", 1 "otherwise")$
\ \
// parameter match set
for each $c in C$ we calculate the parameter match set:
$ M_(f,c) = { (f_n, m(f_v, c_v)) | (f_n, f_v) in f, (c_n, c_v) in c, f_n = c_n} $
\ \ 
// overlap


and use it to calculate the overlap
$ "overlap" (M_(f, c)) = frac( product_(p in M_(f, c)) "algo"(p) , 2) $
// product vs sum:
// using a sum may make calculation more intuitive, but non-matching values can't stop a fingerprint from generating a high overlap value if all others match
// our algorithm must return very large values (close to 1) when using a product to combine the results in order to ensure a match even when properties with little relevance (e.g. window geometry) don't match.

// window geometry => unstable + common
// 

$ "stability(s, x)" = (1 - s) dot (x + 1) + 2 dot s dot x $
$ "uniqueness(u, x)" = (1 - x) + (1 + u) dot x  $
// algo (stability, uniqueness, match)  = 
$ "algo"(s,         u,          x    ) = "stability(s, x)" dot "uniqueness(u, x)" $

#colbreak()


#let stability(s, x) = (1 - s) * (x + 1) + 2 * s * x
#let uniqueness(u, x) = (1 - x) + (1 + u) * x
#let algo(s, u, x) = stability(s, x) * uniqueness(u, x)

#table(
  columns: (1fr, 1fr),
  align: (center),
  stroke: none,
  [*Stability (unequal)*], [*Stability (equal)*],
  cetz.canvas({
    import cetz: *
  
    plot.plot(
      size: (3, 3),
      axis-style: "left",
      y-tick-step: 0.25,
      x-tick-step: 0.25, {
      plot.add(domain: (0, 1), s => stability(s, 0))
    })
  }),
  cetz.canvas({
    import cetz: *
  
    plot.plot(
      size: (3, 3),
      axis-style: "left",
      y-tick-step: 0.5,
      x-tick-step: 0.25, {
      plot.add(domain: (0, 1), s => stability(s, 1))
    })
  }),
  [*Uniqueness (unequal)*], [*Uniqueness (equal)*], 
  cetz.canvas({
    import cetz: *
  
    plot.plot(
      size: (3, 3),
      axis-style: "left",
      y-tick-step: 0.5,
      x-tick-step: 0.25, {
      plot.add(domain: (0, 1), u => uniqueness(u, 0))
    })
  }),
  cetz.canvas({
    import cetz: *
  
    plot.plot(
      size: (3, 3),
      axis-style: "left",
      y-tick-step: 0.25,
      x-tick-step: 0.25, {
      plot.add(domain: (0, 1), u => uniqueness(u, 1))
    })
  }),
)



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
#colbreak()


= Discussion

// discuss the findings and their implications (on firms, individuals, regulators, ...)

= Conclusion

//  Wrap up your paper, mention key results, possible limitations, future work

= References


#bibliography("refs.bib", full: true, title: none)

#colbreak()

= Attachments

== WebGL Attributes <WebglAttributes>

#let canvas = read("canvas.txt")
#text(canvas, font: "Roboto Mono", size: 7pt)

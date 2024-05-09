#import "@preview/charged-ieee:0.1.0": ieee

#show: ieee.with(
  title: [Technical analysis of browser fingerprinting techniques based on FingerprintJS],
  // abstract: [],
  authors: (
    (
      name: "James Bergfeld",
      organization: [Technical University Munich],
      location: [Munich, Germany],
      email: "james.bergfeld@tum.de"
    ),
    (
      name: "Samuel Scheit",
      organization: [Technical University Munich],
      location: [Munich, Germany],
      email: "samuel.scheit@tum.de"
    ),
  ),
  index-terms: (),
  bibliography: bibliography("refs.bib"),
)

#set text(lang: "en")

#set heading(numbering: "I.A.a)")
#show heading: it => locate(loc => {
      // Find out the final number of the heading counter.
      let levels = counter(heading).at(loc)
      let deepest = if levels != () {
        levels.last()
      } else {
        1
      }
  
      set text(10pt, weight: 400)
      if it.level == 1 [
        // First-level headings are centered smallcaps.
        // We don't want to number of the acknowledgment section.
        #let is-ack = it.body in ([Acknowledgment], [Acknowledgement])
        #set align(center)
        #set text(if is-ack { 10pt } else { 12pt })
        #show: smallcaps
        #v(20pt, weak: true)
        #if it.numbering != none and not is-ack {
          numbering("I.", deepest)
          h(7pt, weak: true)
        }
        #it.body
        #v(13.75pt, weak: true)
      ] else if it.level == 2 [
        // Second-level headings are run-ins.
        #set par(first-line-indent: 0pt)
        #set text()
        #v(10pt, weak: true)
        #if it.numbering != none {
          numbering("A.", deepest)
          h(7pt, weak: true)
        }
        *#it.body*
        #v(10pt, weak: true)
      ] else [
        // Third level headings are run-ins too, but different.
        #if it.level == 3 {
          numbering("a)", deepest)
          [ ]
        }
        #(it.body)
      ]
})

= Browser fingerprinting

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
This allows a comprehensive profile of a person's online activities to be created and conclusions to be drawn about a person's identity and behavior.

== Relevance

Because website operators require unique user profiles, even without users' consent, to provide personalized content and to analyze user behavior, browser fingerprinting has become an important tool.
This is evidenced by the fact that 30.6% of the top 1k websites in the Alexa ranking use fingerprinting techniques. @fingerprintingML

Since the majority of all browsers deactivate third-party cookies by default in the future #footnote[https://developer.mozilla.org/en-US/blog/goodbye-third-party-cookies/], or need explicit consent to use third-party cookies, browser fingerprinting is a significant alternative to identify users across different websites.

== Application

In order to assign a unique identity or “fingerprint” to each user, various details are collected via the browser.
For example, a combination of rare fonts, a specific screen resolution, or a specific browser plugin can help generate a unique fingerprint.

JavaScript libraries can be used for this, such as *FingerprintJS*, which collects a variety of information about a user's browser environment. In the commercial version, FingerprintJS claims to be able to create a 99.5% unique fingerprint. @fingerprintJS

FingerprintJS is the most popular JavaScript browser fingerprinting library according to npm downloads. #footnote[https://npmtrends.com/@fingerprintjs/fingerprintjs-vs-@rajesh896/broprint.js-vs-@thumbmarkjs/thumbmarkjs-vs-clientjs-vs-imprintjs]

#figure(
   image("npm.png"),
   caption: [NPM downloads per day, comparison of different JS fingerprinting libraries (as of 2024)]
)

#colbreak()

= Proposal

== Project Idea

*Technical analysis of browser fingerprinting techniques based on FingerprintJS*

/* The paper will examine in detail how browser fingerprinting techniques work, from capturing device and browser signatures to generating unique fingerprints. Various aspects are taken into account, such as the use of the browser canvas, the identification of plug-ins and fonts, and the detection of device parameters. @extensionFingerprinting

Specifically, it analyzes the methods and browser APIs that FingerprintJS uses to create fingerprints and compares the accuracy of these fingerprints compared to the open-source FingerprintJS implementation. @fingerprintJSOpenSource */

In this paper we examine in detail how browser fingerprinting techniques work in practice, from capturing device and browser signatures to generating unique fingerprints. Various aspects are taken into account, such as the use of the browser canvas, the identification of plug-ins and fonts, and the detection of device parameters. @extensionFingerprinting

The library referenced for practical implementation is FingerprintJS. We analyze the methods and browser APIs it uses to create fingerprints and compare the accuracy of these fingerprints to the open-source FingerprintJS implementation. @fingerprintJSOpenSource

We also examine how robust these techniques are to changes in the browser environment, e.g. software updates and configuration changes.

Additionally, we provide an assessment of the privacy and security risks associated with browser fingerprinting. This includes the ability to identify users across different websites, potential attack scenarios, and the effectiveness of privacy protections against fingerprinting techniques.

The results will be documented in the form of a paper that explains how browser fingerprinting techniques work, shows their advantages and disadvantages, and offers recommendations on possible countermeasures. // FIXME a few of these points are repeated from earlier paragraphs?

== Relevance

The technical implementation of fingerprinting technology based on FingerprintJS is a highly relevant topic because browser fingerprinting is widely used on the web, with an increase in the last few years @fingerprintingML. FingerprintJS was chosen as the library to be analyzed due to its prevalence as one of the most used fingerprinting libraries.
Our analysis helps us to understand how fingerprinting is implemented, outlines possible countermeasures and their respective effectiveness.
On the one hand, this allows browser manufacturers and browser extension developers to limit or customize possible interfaces to make browser fingerprinting more difficult. On the other hand, library developers can use the identified techniques to improve and make their own fingerprinting libraries more effective.

== Research questions

+ What specific techniques and methods are used by the FingerprintJS library for browser fingerprinting?
+ How can these techniques be used or adapted to by other actors such as browser manufacturers, extension developers and library developers?
+ What impact do the identified techniques have on user privacy and security?
+ How reliable are the fingerprinting mechanisms and can FingerprintJS keep up with their promise of 99.5% unique device identification and high temporal fingerprint stability? // they promise: "[...] our visitor identifier that is stable for months not days." (https://fingerprint.com/resources/comparisons/compare-fingerprint-vs-shield/)

// #colbreak()

== Methodology

- *Analysis of FingerprintJS library:*
   Examination of the documentation, source code, and how fingerprinting techniques are implemented in FingerprintJS.
   
- *Experiments and tests:* Conducting tests to evaluate the effectiveness of the fingerprinting techniques under different browser configurations and identifying possible countermeasures.
   
- *Literature review:* Analysis of existing research and studies on browser fingerprinting techniques.


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

#set text(lang: "de")

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

= Browser Fingerprinting

== Allgemein

Websites verwenden Browser-Fingerprinting, um einen eindeutigen Identifier eines jeden Website Besuchers zu erstellen, indem Daten über die Geräte- und Browsereinstellungen des Besuchers gesammelt werden und diese zu einem eindeutigen "Fingerabdruck" Kombiniert werden.

Ziel dabei ist es für Website-Betreibern, Benutzer über mehrere Website Besuche hinweg zu identifizieren, ohne dass diese aktiv Cookies akzeptieren müssen oder sich mit ihren Benutzerkonten anmelden müssen.

== Vorteile

Der Zweck besteht darin, ein detailliertes Profil jedes Benutzers zu erstellen, um personalisierte Inhalte anzuzeigen, Werbung zu schalten oder das Benutzerverhalten zu analysieren.
Dies kann sowohl für das Verbessern der Benutzererfahrung als auch verwendet werden um betrügerische Aktivitäten zu erkennen.

== Nachteile

Damit ein eindeutiger Browser Fingerprint erstellt werden kann, müssen umfangreichen Informationen über die Geräte und Browsereinstellungen eines Benutzers gesammelt werden.
Jedoch verletzt dies die Privatsphäre des Nutzers, sofern dieser nicht explizit zugestimmt hat.
Insbesondere da es keine Möglichkeit gibt das Fingerprinting abzulehnen und die Daten verwendet werden können, um Benutzer über mehrere Websiten hinweg zu tracken.
Dadurch kann ein umfassendes Profil der Online-Aktivitäten einer Person erstellt werden und es lassen sich Rückschlüsse auf die Identität und das Verhalten einer Person ziehen.

== Relevanz

Da Website-Betreiber eindeutige Benutzerprofile benötigen, auch ohne der Zustimmung der Nutzer, um personalisierte Inhalte bereitzustellen und um das Benutzerverhalten zu analysieren, ist Browser-Fingerprinting zu einem wichtigen Werkzeug geworden.
Dies wird belegt dadurch, dass 30,6% der Top 1k Websiten des Alexa Ranking Fingerprinting Techniken einsetzen. @fingerprintingML

Da ein Großteil aller Browsers standardmäßig Third-Party Cookies in Zukunft deaktivieren #footnote[https://developer.mozilla.org/en-US/blog/goodbye-third-party-cookies/], bzw. erst eine explizite Einwilligung zur Benutzung von Third-Party Cookies erfordern, ist das Browser Fingerprinting eine bedeutsame Alternative, um Benutzer über unterschiedliche Websiten hinweg zu identifzieren.

== Anwendung

Um für jeden Benutzer einer eindeutigen Identität bzw. einem „Fingerabdruck“ zuzuordnen, werden verschiedene Details über den Browser erfasst.
Zum Beispiel kann die Kombination von seltenen Schriftarten, einer bestimmten Bildschirmauflösung und einem spezifischen Browser-Plugin dazu beitragen, einen einzigartigen Fingerabdruck zu generieren

Dafür können JavaScript-Bibliotheken verwendet werden, wie z.b. *FingerprintJS*, die eine Vielzahl von Informationen über die Browserumgebung eines Benutzers sammeln und in der kommerziellen Version laut eigenen Aussagen einen 99.5% einzigartigen Fingerabdruck erstellen können. @fingerprintJS

Dabei ist FingerprintJS die populärste JavaScript Browser Fingerprinting Library nach npm-Downloads. #footnote[https://npmtrends.com/@fingerprintjs/fingerprintjs-vs-@rajesh896/broprint.js-vs-@thumbmarkjs/thumbmarkjs-vs-clientjs-vs-imprintjs]

#figure(
  image("npm.png"),
  caption: [NPM Downloads pro Tag, Vergleich unterschiedlicher JS-Fingerprinting libraries (Stand 2024)]
)

// Ziel dieses Paper ist es, eine technische Analyse der Browser-Fingerprinting-Techniken bereitzustellen, wobei der Schwerpunkt insbesondere auf den von der FingerprintJS-Bibliothek implementierten Techniken liegt. Die von FingerprintJS verwendeten Methoden und ihre Auswirkungen auf die Privatsphäre und Sicherheit der Benutzer werden untersucht, um ein besseres Verständnis der Möglichkeiten und Einschränkungen des Browser-Fingerprintings in aktuellen Webumgebungen zu gewinnen.

#block()
= Proposal

== Project Idea

*Technische Analyse von Browser-Fingerprinting-Techniken basierend auf FingerprintJS*

Dabei sollen die Methoden untersucht werden, die von dieser Bibliothek verwendet werden, um einzigartige Browser-Fingerabdrücke zu erstellen. 

Das Projekt wird die Funktionsweise von Browser-Fingerprinting-Techniken im Detail untersuchen, angefangen von der Erfassung von Geräte- und Browsersignaturen bis hin zur Generierung eindeutiger Fingerabdrücke. Hierbei werden verschiedene Aspekte berücksichtigt, wie zum Beispiel die Verwendung des Browser Canvas, die Identifizierung von Plug-Ins und Schriftarten sowie die Erkennung von Geräteparametern.

Insbesondere werden die Methoden und Browser APIs analysiert, die FingerprintJS verwendet, um Fingerabdrücke zu erstellen, und die Genauigkeit dieser Fingerabdrücke im Vergleich zu anderen Implementierungen verglichen. Außerdem wird untersucht, wie robust diese Techniken gegenüber Veränderungen in der Browserumgebung sind, z.B. bei Updates oder Änderungen der Konfiguration.

Die Analyse umfasst auch eine Bewertung der Privatsphäre und Sicherheitsrisiken, die mit Browser-Fingerprinting verbunden sind. Dies beinhaltet die Möglichkeit der Identifizierung von Benutzern über verschiedene Websites hinweg, potenzielle Angriffsszenarien und die Wirksamkeit von Datenschutzmaßnahmen gegen Fingerprinting-Techniken.

Das Projekt beabsichtigt, Erkenntnisse zu gewinnen, die Website-Betreibern, Datenschutzexperten und Entwicklern helfen, die Auswirkungen und Einsatzmöglichkeiten von Browser-Fingerprinting besser zu verstehen und entsprechende Maßnahmen zum Schutz der Privatsphäre und Sicherheit zu ergreifen.

Die erzielten Ergebnisse sollen in Form eines umfassenden Papers dokumentiert werden, der die Funktionsweise von Browser-Fingerprinting-Techniken erklärt, deren Vor- und Nachteile aufzeigt und Empfehlungen für eine verantwortungsvolle Nutzung dieser Technologien bietet.

Dieses Projekt trägt dazu bei, das Verständnis für die Funktionsweise und die potenziellen Auswirkungen von Browser-Fingerprinting-Techniken zu vertiefen und bewusste Entscheidungen im Umgang mit dieser Technologie zu fördern.


== Relevance

Eine detaillierte technische Analyse der Implementierung von Browser-Fingerprinting-Techniken, wie sie in FingerprintJS verwendet werden, ist von großer Relevanz. Einerseits können Browser-Hersteller und Entwickler von Browser-Erweiterungen durch dieses Verständnis mögliche Schnittstellen begrenzen oder anpassen, um das Browser-Fingerprinting zu erschweren. Andererseits können Bibliotheksentwickler die erkannten Techniken nutzen, um ihre eigenen Fingerprinting-Bibliotheken zu verbessern und effektiver zu gestalten.

== Research questions

1. Welche konkreten Techniken und Methoden werden von der FingerprintJS-Bibliothek für das Browser-Fingerprinting verwendet?
2. Wie können diese Techniken von verschiedenen Akteuren wie Browser-Herstellern, Erweiterungsentwicklern und Bibliotheksentwicklern genutzt oder angepasst werden?
3. Welche Auswirkungen haben die identifizierten Techniken auf die Privatsphäre und Sicherheit der Benutzer?

== Methodology

- *Analyse der FingerprintJS-Bibliothek:*
  Untersuchung der Dokumentation, des Quellcodes und der Funktionsweise der Fingerprinting-Techniken in FingerprintJS.
   
- *Experimente und Tests:* Durchführung von Tests und Experimenten, um die Wirksamkeit der Fingerprinting-Techniken unter verschiedenen Bedingungen zu bewerten und mögliche Gegenmaßnahmen zu identifizieren.
   
- *Literaturrecherche:* Analyse vorhandener Forschungsergebnisse und Studien zu Browser-Fingerprinting-Techniken, um relevante Erkenntnisse und Vergleiche zu gewinnen.


@extensionFingerprinting
@fingerprintingML

# Fingerprinting

[**Paper**](./paper/paper.pdf)

## Abstract

This work provides a comprehensive technical analysis of browser fingerprinting techniques, in particular using FingerprintJS. Browser fingerprinting allows individual users to be identified based on specific characteristics of their web browser without the need for cookies or other traditional tracking methods. This study examines the various components and mechanisms of FingerprintJS in detail, including their ability to create unique fingerprints and evaluate their accuracy and reliability. In addition, the effectiveness of these fingerprinting techniques in various application scenarios is analyzed and evaluated.

A central part of this research is the development of a custom fingerprinting library and the collection of our own dataset to validate and evaluate the methods. By analyzing this dataset, additional insights into the practical challenges and performance of the fingerprinting methods could be gained. The goal is to highlight the strengths and weaknesses of the current methods and to identify possible improvements for future implementations.

## General

-   [demo/](./demo) Contains a POC with the fingerprint.pro.js library that can be run locally.

-   [notes/](./notes) Contains notes and assets for documentation.

-   [paper/](./paper) Contains the paper in typst with all assets.

-   [overrides](./overrides) Contains the browser overrides (JS source files) to debug the official demo https://fingerprint.com/demo/.

-   [website](./website) Contains the website with the custom fingerprinting library.

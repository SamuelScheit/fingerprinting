"use strict";
(self.webpackChunkfingerprint_com = self.webpackChunkfingerprint_com || []).push([[7471], {
    70732: function(e, t, l) {
        l.d(t, {
            Z: function() {
                return m
            }
        });
        var i = l(67294)
          , a = l(21083)
          , n = l.n(a)
          , r = {
            root: "HeroWithCTA-module--root--419a3",
            heroContainer: "HeroWithCTA-module--heroContainer--2c784",
            buttonContainer: "HeroWithCTA-module--buttonContainer--f747a",
            title: "HeroWithCTA-module--title--4ead6",
            secondaryTitle: "HeroWithCTA-module--secondaryTitle--03c87",
            description: "HeroWithCTA-module--description--0863a",
            secondaryDescription: "HeroWithCTA-module--secondaryDescription--055a2",
            secondaryButton: "HeroWithCTA-module--secondaryButton--6bbc4"
        }
          , o = l(26490)
          , c = l(81399)
          , s = l(32750);
        function m(e) {
            let {title: t, children: l, className: a, ctaText1: m, ctaHref1: d, ctaText2: u, ctaHref2: h, variant: v="primary", openNewTab: f, buttonId1: p, buttonId2: g} = e;
            return i.createElement(o.Z, {
                className: n()(r.root, a)
            }, i.createElement(c.Z, {
                size: "large",
                className: r.heroContainer
            }, i.createElement("h1", {
                className: "primary" === v ? r.title : r.secondaryTitle
            }, t), i.createElement("p", {
                className: "primary" === v ? r.description : r.secondaryDescription
            }, l), (null != m ? m : u) && i.createElement("div", {
                className: r.buttonContainer
            }, m && i.createElement(s.Z, {
                size: "large",
                href: d,
                variant: "primary",
                className: n()(r.button, {
                    [r.secondaryButton]: "secondary" === v
                }),
                openNewTab: f,
                buttonId: p
            }, m), u && i.createElement(s.Z, {
                size: "large",
                href: h,
                variant: "primary",
                outlined: !0,
                className: n()(r.button, {
                    [r.secondaryButton]: "secondary" === v
                }),
                openNewTab: f,
                buttonId: g
            }, u))))
        }
    },
    31359: function(e, t, l) {
        l.d(t, {
            E: function() {
                return y
            },
            Z: function() {
                return S
            }
        });
        var i, a = l(67294), n = {
            window: "CodeWindowWithSelector-module--window--77763",
            header: "CodeWindowWithSelector-module--header--1846d",
            button: "CodeWindowWithSelector-module--button--b0c1c",
            close: "CodeWindowWithSelector-module--close--f131e",
            minimize: "CodeWindowWithSelector-module--minimize--01bcd",
            expand: "CodeWindowWithSelector-module--expand--066be",
            content: "CodeWindowWithSelector-module--content--f4607",
            actions: "CodeWindowWithSelector-module--actions--c0100",
            nav: "CodeWindowWithSelector-module--nav--ba46e",
            tabs: "CodeWindowWithSelector-module--tabs--cc4dd",
            tab: "CodeWindowWithSelector-module--tab--9b99d",
            active: "CodeWindowWithSelector-module--active--31a22",
            copy: "CodeWindowWithSelector-module--copy--aba0c",
            icon: "CodeWindowWithSelector-module--icon--1a20a",
            windowLight: "CodeWindowWithSelector-module--windowLight--d759a",
            contentLight: "CodeWindowWithSelector-module--contentLight--4c42c",
            infoIcon: "CodeWindowWithSelector-module--infoIcon--1f7c4"
        }, r = l(21083), o = l.n(r), c = l(41501), s = l.n(c), m = (l(6541),
        l(45064),
        l(53124),
        l(29990),
        l(4521),
        l(73763),
        l(75986),
        l(2604),
        l(37651),
        l(85599),
        l(8082),
        l(38954),
        l(72820),
        l(55900),
        l(37798),
        l(84226),
        l(52580));
        function d() {
            return d = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var l = arguments[t];
                    for (var i in l)
                        Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i])
                }
                return e
            }
            ,
            d.apply(this, arguments)
        }
        const u = (e,t)=>a.createElement("svg", d({
            viewBox: "0 0 22 22",
            xmlns: "http://www.w3.org/2000/svg",
            ref: t
        }, e), i || (i = a.createElement("path", {
            d: "M2 4H0V20C0 21.1 0.9 22 2 22H18V20H2V4ZM20 0H6C4.9 0 4 0.9 4 2V16C4 17.1 4.9 18 6 18H20C21.1 18 22 17.1 22 16V2C22 0.9 21.1 0 20 0ZM20 16H6V2H20V16Z"
        })))
          , h = (0,
        a.forwardRef)(u);
        var v, f = l(62322);
        function p() {
            return p = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var l = arguments[t];
                    for (var i in l)
                        Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i])
                }
                return e
            }
            ,
            p.apply(this, arguments)
        }
        const g = (e,t)=>a.createElement("svg", p({
            width: 14,
            height: 14,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: t
        }, e), v || (v = a.createElement("path", {
            d: "M6.33301 3.66671H7.66634V5.00004H6.33301V3.66671ZM6.33301 6.33337H7.66634V10.3334H6.33301V6.33337ZM6.99967 0.333374C3.31967 0.333374 0.333008 3.32004 0.333008 7.00004C0.333008 10.68 3.31967 13.6667 6.99967 13.6667C10.6797 13.6667 13.6663 10.68 13.6663 7.00004C13.6663 3.32004 10.6797 0.333374 6.99967 0.333374ZM6.99967 12.3334C4.05967 12.3334 1.66634 9.94004 1.66634 7.00004C1.66634 4.06004 4.05967 1.66671 6.99967 1.66671C9.93967 1.66671 12.333 4.06004 12.333 7.00004C12.333 9.94004 9.93967 12.3334 6.99967 12.3334Z",
            fill: "white"
        })))
          , E = (0,
        a.forwardRef)(g);
        var w = l(13843)
          , b = l(76817)
          , S = (0,
        a.memo)((function(e) {
            let {codeBlocks: t, hasLineNumbers: l=!0, className: i, tooltips: r, copyButton: c=!0, hasControls: d=!0, variant: u="dark"} = e;
            const {0: v, 1: f} = (0,
            a.useState)(t[0])
              , {0: p, 1: g} = (0,
            a.useState)(t[0].type)
              , {0: E, 1: S} = (0,
            a.useState)(0)
              , y = t.length > 1;
            (0,
            a.useEffect)((()=>{
                s().highlightAll()
            }
            ), [t, p]);
            return a.createElement("div", {
                className: o()(n.window, {
                    [n.windowLight]: "light" === u
                })
            }, d && a.createElement("div", {
                className: n.header
            }, a.createElement("div", {
                className: o()(n.button, n.close)
            }), a.createElement("div", {
                className: o()(n.button, n.minimize)
            }), a.createElement("div", {
                className: o()(n.button, n.expand)
            })), y && a.createElement("div", {
                className: n.nav
            }, a.createElement("ul", {
                className: n.tabs
            }, t.map(((e,l)=>a.createElement("li", {
                key: l,
                className: o()(n.tab, {
                    [n.active]: v.type === e.type
                }),
                onClick: ()=>(e=>{
                    f(t[e]),
                    S(e)
                }
                )(l)
            }, e.type)))), c && a.createElement("div", {
                className: n.copy,
                onClick: ()=>{
                    return e = t[E].code,
                    void (0,
                    m.v)(e);
                    var e
                }
            }, a.createElement(h, {
                className: n.icon
            }), "Copy")), a.createElement(w.M, {
                initial: !1,
                mode: "wait",
                onExitComplete: ()=>g(v.type)
            }, a.createElement(b.E.div, {
                key: v.type,
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                className: o()(i, n.content, {
                    [n.contentLight]: "light" === u
                })
            }, a.createElement("pre", {
                tabIndex: 0,
                className: o()(n.pre, {
                    "line-numbers": l
                }, "language-" + v.language)
            }, a.createElement("code", {
                className: o()(n.code, "language-" + v.language)
            }, t[E].code), r && r.map((e=>e))))))
        }
        ));
        function y(e) {
            let {children: t, className: l, left: i, leftMobile: r, maxWidth: c, theme: s} = e;
            const {0: m, 1: d} = (0,
            a.useState)();
            return (0,
            a.useEffect)((()=>{
                d(document.body)
            }
            ), []),
            a.createElement(f.ZP, {
                interactive: !0,
                appendTo: m,
                placement: "right",
                theme: null != s ? s : "checkmark",
                maxWidth: null != c ? c : 460,
                hideOnClick: !1,
                popperOptions: {
                    modifiers: [{
                        name: "flip",
                        options: {
                            fallbackPlacements: ["bottom", "top"]
                        }
                    }]
                },
                content: t
            }, a.createElement(E, {
                tabIndex: 0,
                className: o()(l, n.infoIcon),
                style: {
                    ...i && {
                        "--left": i + "px"
                    },
                    ...r && {
                        "--leftMobile": r + "px"
                    }
                }
            }))
        }
    },
    52580: function(e, t, l) {
        function i(e) {
            return navigator.clipboard.writeText(e)
        }
        l.d(t, {
            v: function() {
                return i
            }
        })
    },
    31511: function(e, t, l) {
        l.d(t, {
            F: function() {
                return r
            }
        });
        var i = l(67294)
          , a = l(22742)
          , n = l(28884);
        const r = e=>{
            let {rollbar: t} = e;
            const {0: l, 1: r} = (0,
            i.useState)()
              , {0: o, 1: c} = (0,
            i.useState)(!0)
              , {0: s, 1: m} = (0,
            i.useState)(!1);
            return (0,
            i.useEffect)((()=>{
                (async()=>{
                    c(!0);
                    try {
                        const e = await (0,
                        a.EE)();
                        if (c(!1),
                        !e)
                            return t.error("Unable to get OAuth Links"),
                            void m(!0);
                        r(e)
                    } catch (e) {
                        m(!0),
                        t.error("Unable to load visits", (0,
                        n.e)(e))
                    }
                }
                )()
            }
            ), [t]),
            {
                oAuthLinks: l,
                isLoading: o,
                error: s
            }
        }
    },
    590: function(e, t, l) {
        l.r(t),
        l.d(t, {
            Head: function() {
                return Mt
            },
            default: function() {
                return At
            }
        });
        var i, a, n, r, o, c, s, m, d = l(67294), u = l(22769), h = l(66714), v = l(45614), f = l(70732), p = {
            root: "OAuthButtons-module--root--8347a",
            startButtons: "OAuthButtons-module--startButtons--45b39",
            content: "OAuthButtons-module--content--7f7c5",
            icon: "OAuthButtons-module--icon--dcd60",
            startWithEmail: "OAuthButtons-module--startWithEmail--53c54",
            startButton: "OAuthButtons-module--startButton--a4cf3"
        }, g = l(26490), E = l(81399), w = l(32750);
        function b() {
            return b = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var l = arguments[t];
                    for (var i in l)
                        Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i])
                }
                return e
            }
            ,
            b.apply(this, arguments)
        }
        const S = (e,t)=>d.createElement("svg", b({
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            ref: t
        }, e), d.createElement("mask", {
            id: "mask0_5948_54438",
            width: 24,
            height: 24,
            x: 0,
            y: 0,
            maskUnits: "userSpaceOnUse",
            style: {
                maskType: "alpha"
            }
        }, i || (i = d.createElement("path", {
            fill: "#000",
            fillRule: "evenodd",
            d: "M23.2 9.8H12v4.7h6.4c-.6 2.9-3 4.6-6.4 4.6a7 7 0 1 1 4.4-12.6L20 3A12 12 0 0 0 0 12a12 12 0 0 0 12 12c6 0 11.5-4.4 11.5-12l-.3-2.2Z",
            clipRule: "evenodd"
        }))), a || (a = d.createElement("g", {
            mask: "url(#mask0_5948_54438)"
        }, d.createElement("path", {
            fill: "#FBBC05",
            d: "M-1 19V5l9.2 7-9.3 7Z"
        }))), d.createElement("mask", {
            id: "mask1_5948_54438",
            width: 24,
            height: 24,
            x: 0,
            y: 0,
            maskUnits: "userSpaceOnUse",
            style: {
                maskType: "alpha"
            }
        }, n || (n = d.createElement("path", {
            fill: "#000",
            fillRule: "evenodd",
            d: "M23.2 9.8H12v4.7h6.4c-.6 2.9-3 4.6-6.4 4.6a7 7 0 1 1 4.4-12.6L20 3A12 12 0 0 0 0 12a12 12 0 0 0 12 12c6 0 11.5-4.4 11.5-12l-.3-2.2Z",
            clipRule: "evenodd"
        }))), r || (r = d.createElement("g", {
            mask: "url(#mask1_5948_54438)"
        }, d.createElement("path", {
            fill: "#34A853",
            d: "M-1 19 15.2 6.6l4.3.6L25-1.1v26.2H-1.1v-6Z"
        }))), d.createElement("mask", {
            id: "mask2_5948_54438",
            width: 24,
            height: 24,
            x: 0,
            y: 0,
            maskUnits: "userSpaceOnUse",
            style: {
                maskType: "alpha"
            }
        }, o || (o = d.createElement("path", {
            fill: "#000",
            fillRule: "evenodd",
            d: "M23.2 9.8H12v4.7h6.4c-.6 2.9-3 4.6-6.4 4.6a7 7 0 1 1 4.4-12.6L20 3A12 12 0 0 0 0 12a12 12 0 0 0 12 12c6 0 11.5-4.4 11.5-12l-.3-2.2Z",
            clipRule: "evenodd"
        }))), c || (c = d.createElement("g", {
            mask: "url(#mask2_5948_54438)"
        }, d.createElement("path", {
            fill: "#EA4335",
            d: "m-1 5 9.2 7L12 8.7l13-2.2V-1H-1v6Z"
        }))), d.createElement("mask", {
            id: "mask3_5948_54438",
            width: 24,
            height: 24,
            x: 0,
            y: 0,
            maskUnits: "userSpaceOnUse",
            style: {
                maskType: "alpha"
            }
        }, s || (s = d.createElement("path", {
            fill: "#000",
            fillRule: "evenodd",
            d: "M23.2 9.8H12v4.7h6.4c-.6 2.9-3 4.6-6.4 4.6a7 7 0 1 1 4.4-12.6L20 3A12 12 0 0 0 0 12a12 12 0 0 0 12 12c6 0 11.5-4.4 11.5-12l-.3-2.2Z",
            clipRule: "evenodd"
        }))), m || (m = d.createElement("g", {
            mask: "url(#mask3_5948_54438)"
        }, d.createElement("path", {
            fill: "#4285F4",
            d: "M25 25 8.3 12 6 10.4l19-5.5v20.2Z"
        }))))
          , y = (0,
        d.forwardRef)(S);
        var N, Z;
        function V() {
            return V = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var l = arguments[t];
                    for (var i in l)
                        Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i])
                }
                return e
            }
            ,
            V.apply(this, arguments)
        }
        const C = (e,t)=>d.createElement("svg", V({
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            ref: t
        }, e), N || (N = d.createElement("g", {
            clipPath: "url(#clip0_5948_54441)"
        }, d.createElement("path", {
            fill: "#191717",
            fillRule: "evenodd",
            d: "M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.4 1 .2-.8.5-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.1-.3-.6-1.6 0-3.2 0 0 1.1-.3 3.4 1.2a11.6 11.6 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.9 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z",
            clipRule: "evenodd"
        }))), Z || (Z = d.createElement("defs", null, d.createElement("clipPath", {
            id: "clip0_5948_54441"
        }, d.createElement("path", {
            fill: "#fff",
            d: "M0 0h24v24H0z"
        })))))
          , k = (0,
        d.forwardRef)(C);
        var A = l(88742)
          , M = l(31511)
          , O = l(76420);
        function _() {
            var e, t;
            const l = (0,
            A.F)()
              , {oAuthLinks: i, isLoading: a, error: n} = (0,
            M.F)(l)
              , {ampli: r, isClientLoaded: o} = (0,
            O.mr)();
            return (0,
            d.useEffect)((()=>{
                o && r.signupOptionsShown({
                    domainName: "fingerprint.com"
                })
            }
            ), [r, o]),
            d.createElement(g.Z, {
                className: p.root
            }, d.createElement(E.Z, {
                size: "large"
            }, d.createElement("div", {
                className: p.startButtons
            }, d.createElement(w.Z, {
                disabled: a || n,
                className: p.startButton,
                href: null !== (e = null == i ? void 0 : i.data.GoogleOAuth) && void 0 !== e ? e : v.Jx.signupUrl,
                onClick: ()=>r.signupStarted({
                    signupType: "google sso"
                }),
                size: "large",
                buttonId: "demo-google-start-free",
                outlined: !0
            }, d.createElement("span", {
                className: p.content
            }, d.createElement(y, {
                className: p.icon
            }), "Start Free with Google")), d.createElement(w.Z, {
                disabled: a || n,
                className: p.startButton,
                href: null !== (t = null == i ? void 0 : i.data.GitHubOAuth) && void 0 !== t ? t : v.Jx.signupUrl,
                onClick: ()=>r.signupStarted({
                    signupType: "github sso"
                }),
                size: "large",
                buttonId: "demo-github-start-free",
                outlined: !0
            }, d.createElement("span", {
                className: p.content
            }, d.createElement(k, {
                className: p.icon
            }), "Start Free with GitHub")), d.createElement("a", {
                target: "_blank",
                rel: "noreferrer",
                id: "demo-email-start-free",
                href: v.Jx.signupUrl,
                className: p.startWithEmail
            }, "or", d.createElement("strong", null, "Start Free with Email")))))
        }
        var x, z, I, L, R, F = l(52259), T = l(22742), H = l(28884), W = l(52217), j = l(82695), B = l(89926), D = l(21083), U = l.n(D), G = l(83686);
        function P() {
            return P = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var l = arguments[t];
                    for (var i in l)
                        Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i])
                }
                return e
            }
            ,
            P.apply(this, arguments)
        }
        const Y = (e,t)=>d.createElement("svg", P({
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 48 48",
            ref: t
        }, e), x || (x = d.createElement("path", {
            stroke: "#901414",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 1.4,
            d: "M6.5 24c0 9.665 7.835 17.5 17.5 17.5S41.5 33.665 41.5 24 33.665 6.5 24 6.5 6.5 14.335 6.5 24Z"
        })), z || (z = d.createElement("path", {
            fill: "#901414",
            stroke: "#901414",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m23.5042 16.2567.4963 10.5472.4953-10.5429a.49424.49424 0 0 0-.0315-.1978.49425.49425 0 0 0-.1071-.1692.49408.49408 0 0 0-.1653-.1131.497.497 0 0 0-.1966-.0386.49672.49672 0 0 0-.3541.1536.49546.49546 0 0 0-.105.1665.49754.49754 0 0 0-.032.1943Z"
        })), I || (I = d.createElement("path", {
            fill: "#901414",
            fillRule: "evenodd",
            d: "M23.9926 15.4689a.76865.76865 0 0 1 .3049.0598.76985.76985 0 0 1 .2565.1754.77096.77096 0 0 1 .1662.2625.77164.77164 0 0 1 .0488.3068l-.4954 10.5433c-.0068.1459-.1271.2606-.2731.2606-.146 0-.2663-.1147-.2732-.2606l-.4962-10.5471.2731-.0129-.2732.01a.76875.76875 0 0 1 .0496-.3013.7685.7685 0 0 1 .1628-.2583.76955.76955 0 0 1 .5492-.2382Zm.0054.5469a.22362.22362 0 0 0-.0865.0183.22369.22369 0 0 0-.0725.0506.22285.22285 0 0 0-.0472.0748.22188.22188 0 0 0-.0143.0861v.0011l.2228 4.7351.2224-4.7332a.22444.22444 0 0 0-.0142-.0888.22238.22238 0 0 0-.1223-.1267.22095.22095 0 0 0-.0882-.0173Z",
            clipRule: "evenodd"
        })), L || (L = d.createElement("path", {
            stroke: "#901414",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M23.9926 15.4689a.76865.76865 0 0 1 .3049.0598.76985.76985 0 0 1 .2565.1754.77096.77096 0 0 1 .1662.2625.77164.77164 0 0 1 .0488.3068l-.4954 10.5433c-.0068.1459-.1271.2606-.2731.2606-.146 0-.2663-.1147-.2732-.2606l-.4962-10.5471.2731-.0129-.2732.01a.76875.76875 0 0 1 .0496-.3013.7685.7685 0 0 1 .1628-.2583.76955.76955 0 0 1 .5492-.2382Zm0 0 .0027.2738m-.0838.2914a.22362.22362 0 0 1 .0865-.0183.22095.22095 0 0 1 .0882.0173.22238.22238 0 0 1 .1223.1267.22444.22444 0 0 1 .0142.0888l-.2224 4.7332-.2228-4.7351v-.0011a.22188.22188 0 0 1 .0143-.0861.22285.22285 0 0 1 .0472-.0748.22369.22369 0 0 1 .0725-.0506Z"
        })), R || (R = d.createElement("path", {
            fill: "#901414",
            stroke: "#901414",
            d: "M24 31.1639a.766.766 0 0 1-.4254-.129.76501.76501 0 0 1-.2819-.3436.76455.76455 0 0 1-.0436-.4423.7651.7651 0 0 1 .2095-.3921.76563.76563 0 0 1 .8344-.1659.76523.76523 0 0 1 .3436.282c.0841.1259.129.2739.129.4253 0 .2031-.0806.3978-.2242.5414a.76551.76551 0 0 1-.5414.2242Z"
        })))
          , J = (0,
        d.forwardRef)(Y);
        var q, X;
        function K() {
            return K = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var l = arguments[t];
                    for (var i in l)
                        Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i])
                }
                return e
            }
            ,
            K.apply(this, arguments)
        }
        const Q = (e,t)=>d.createElement("svg", K({
            width: 12,
            height: 12,
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: t
        }, e), q || (q = d.createElement("path", {
            d: "M3.46781 1.25684H11.0587M11.0587 1.25684L11.0587 8.84775M11.0587 1.25684L0.9375 11.3781",
            stroke: "url(#paint0_linear_10588_8082)",
            strokeWidth: 1.28047
        })), X || (X = d.createElement("defs", null, d.createElement("linearGradient", {
            id: "paint0_linear_10588_8082",
            x1: .9375,
            y1: 1.25684,
            x2: 11.7856,
            y2: 2.10732,
            gradientUnits: "userSpaceOnUse"
        }, d.createElement("stop", {
            stopColor: "#F5614B"
        }), d.createElement("stop", {
            offset: 1e-4,
            stopColor: "#F5614B"
        }), d.createElement("stop", {
            offset: 1,
            stopColor: "#FA7545"
        })))))
          , $ = (0,
        d.forwardRef)(Q);
        var ee, te, le, ie;
        function ae() {
            return ae = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var l = arguments[t];
                    for (var i in l)
                        Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i])
                }
                return e
            }
            ,
            ae.apply(this, arguments)
        }
        const ne = (e,t)=>d.createElement("svg", ae({
            id: "svg",
            width: 132,
            height: 40,
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 132 40",
            ref: t
        }, e), ee || (ee = d.createElement("style", null, "\n        #svg {\n            #color {\n                opacity: 0;\n                transition: opacity 0.3s ease;\n            }\n        }\n\n        #svg:hover {\n            #color {\n                opacity: 1;\n            }\n        }\n    ")), te || (te = d.createElement("g", null, d.createElement("path", {
            stroke: "null",
            strokeWidth: 0,
            id: "svg_1",
            fill: "black",
            d: "m126.70549,39.10083l-121.41108,0c-2.71961,0 -4.85645,-2.12701 -4.85645,-4.83406l0,-29.0049c0,-2.70712 2.13684,-4.83415 4.85645,-4.83415l121.41108,0c2.71983,0 4.85656,2.12702 4.85656,4.83415l0,29.0049c0,2.70704 -2.13673,4.83406 -4.85656,4.83406z"
        }), d.createElement("path", {
            d: "M127.111 1.06396C129.36 1.06396 131.218 2.92174 131.218 5.17063V34.504C131.218 36.7528 129.36 38.6106 127.111 38.6106H4.88889C2.64 38.6106 0.782222 36.7528 0.782222 34.504V5.17063C0.782222 2.92174 2.64 1.06396 4.88889 1.06396H127.111ZM127.111 0.281738H4.88889C2.15111 0.281738 0 2.53063 0 5.17063V34.504C0 37.2417 2.15111 39.3928 4.88889 39.3928H127.111C129.849 39.3928 132 37.2417 132 34.504V5.17063C132 2.53063 129.849 0.281738 127.111 0.281738Z",
            fill: "#ffffff"
        }), d.createElement("path", {
            id: "svg_2",
            strokeMiterlimit: 10,
            strokeWidth: .5,
            stroke: "white",
            fill: "white",
            d: "m46.3432,10.255c0,0.7822 -0.1955,1.4667 -0.6844,1.9555c-0.5867,0.5867 -1.2711,0.88 -2.1511,0.88c-0.88,0 -1.5645,-0.2933 -2.1511,-0.88c-0.5867,-0.5866 -0.88,-1.2711 -0.88,-2.1511c0,-0.87997 0.2933,-1.56441 0.88,-2.15108c0.5866,-0.58667 1.2711,-0.88 2.1511,-0.88c0.3911,0 0.7822,0.09778 1.1733,0.29333c0.3911,0.19556 0.6844,0.39111 0.88,0.68445l-0.4889,0.48889c-0.3911,-0.48889 -0.88,-0.68445 -1.5644,-0.68445c-0.5867,0 -1.1734,0.19556 -1.5645,0.68445c-0.4889,0.39111 -0.6844,0.97778 -0.6844,1.66221c0,0.6845 0.1955,1.2711 0.6844,1.6622c0.4889,0.3911 0.9778,0.6845 1.5645,0.6845c0.6844,0 1.1733,-0.1956 1.6622,-0.6845c0.2933,-0.2933 0.4889,-0.6844 0.4889,-1.1733l-2.1511,0l0,-0.78222l2.8355,0l0,0.39112zm4.4978,-2.44446l-2.64,0l0,1.85778l2.4444,0l0,0.68448l-2.4444,0l0,1.8577l2.64,0l0,0.7823l-3.4222,0l0,-5.8667l3.4222,0l0,0.68444zm3.2267,5.18226l-0.7822,0l0,-5.18226l-1.6623,0l0,-0.68444l4.1067,0l0,0.68444l-1.6622,0l0,5.18226zm4.4978,0l0,-5.8667l0.7822,0l0,5.8667l-0.7822,0zm4.1066,0l-0.7822,0l0,-5.18226l-1.6622,0l0,-0.68444l4.0089,0l0,0.68444l-1.6623,0l0,5.18226l0.0978,0zm9.2889,-0.7823c-0.5867,0.5867 -1.2711,0.88 -2.1511,0.88c-0.88,0 -1.5645,-0.2933 -2.1511,-0.88c-0.5867,-0.5866 -0.88,-1.2711 -0.88,-2.1511c0,-0.87997 0.2933,-1.56441 0.88,-2.15108c0.5866,-0.58667 1.2711,-0.88 2.1511,-0.88c0.88,0 1.5644,0.29333 2.1511,0.88c0.5867,0.58667 0.88,1.27111 0.88,2.15108c0,0.88 -0.2933,1.5645 -0.88,2.1511zm-3.7155,-0.4888c0.3911,0.3911 0.9777,0.6844 1.5644,0.6844c0.5867,0 1.1733,-0.1956 1.5644,-0.6844c0.3912,-0.3912 0.6845,-0.9778 0.6845,-1.6623c0,-0.68441 -0.1956,-1.27108 -0.6845,-1.66219c-0.3911,-0.39111 -0.9777,-0.68445 -1.5644,-0.68445c-0.5867,0 -1.1733,0.19556 -1.5644,0.68445c-0.3912,0.39111 -0.6845,0.97778 -0.6845,1.66219c0,0.6845 0.1956,1.2711 0.6845,1.6623zm5.6711,1.2711l0,-5.8667l0.88,0l2.8355,4.5956l0,-4.5956l0.7822,0l0,5.8667l-0.7822,0l-3.0311,-4.79115l0,4.79115l-0.6844,0z"
        }), d.createElement("path", {
            id: "svg_3",
            fill: "white",
            d: "m66.5875,21.597c-2.3467,0 -4.2044,1.76 -4.2044,4.2045c0,2.3466 1.8577,4.2044 4.2044,4.2044c2.3467,0 4.2044,-1.76 4.2044,-4.2044c0,-2.5423 -1.8577,-4.2045 -4.2044,-4.2045zm0,6.6489c-1.2711,0 -2.3467,-1.0755 -2.3467,-2.5422c0,-1.4667 1.0756,-2.5422 2.3467,-2.5422c1.2711,0 2.3467,0.9777 2.3467,2.5422c0,1.4667 -1.0756,2.5422 -2.3467,2.5422zm-9.0933,-6.6489c-2.3467,0 -4.2045,1.76 -4.2045,4.2045c0,2.3466 1.8578,4.2044 4.2045,4.2044c2.3466,0 4.2044,-1.76 4.2044,-4.2044c0,-2.5423 -1.8578,-4.2045 -4.2044,-4.2045zm0,6.6489c-1.2711,0 -2.3467,-1.0755 -2.3467,-2.5422c0,-1.4667 1.0756,-2.5422 2.3467,-2.5422c1.2711,0 2.3466,0.9777 2.3466,2.5422c0,1.4667 -1.0755,2.5422 -2.3466,2.5422zm-10.8534,-5.3778l0,1.76l4.2045,0c-0.0978,0.9778 -0.4889,1.76 -0.9778,2.2489c-0.5867,0.5867 -1.5644,1.2711 -3.2267,1.2711c-2.64,0 -4.5955,-2.0533 -4.5955,-4.6933c0,-2.64 2.0533,-4.6933 4.5955,-4.6933c1.3689,0 2.4445,0.5866 3.2267,1.2711l1.2711,-1.2711c-1.0755,-0.9778 -2.4444,-1.76 -4.4,-1.76c-3.52,0 -6.5511,2.9333 -6.5511,6.4533c0,3.52 3.0311,6.4533 6.5511,6.4533c1.9556,0 3.3245,-0.5866 4.4978,-1.8577c1.1733,-1.1734 1.5644,-2.8356 1.5644,-4.1067c0,-0.3911 0,-0.7822 -0.0977,-1.0756l-6.0623,0zm44.3911,1.3689c-0.3911,-0.9778 -1.3688,-2.64 -3.52,-2.64c-2.1511,0 -3.9111,1.6622 -3.9111,4.2045c0,2.3466 1.76,4.2044 4.1067,4.2044c1.8578,0 3.0311,-1.1733 3.4222,-1.8578l-1.3689,-0.9777c-0.4889,0.6844 -1.0755,1.1733 -2.0533,1.1733c-0.9778,0 -1.5644,-0.3911 -2.0533,-1.2711l5.5733,-2.3467l-0.1956,-0.4889zm-5.6711,1.3689c0,-1.5644 1.2711,-2.4444 2.1511,-2.4444c0.6845,0 1.3689,0.3911 1.5645,0.88l-3.7156,1.5644zm-4.5955,4.0089l1.8578,0l0,-12.2222l-1.8578,0l0,12.2222zm-2.9334,-7.1378c-0.4888,-0.4889 -1.2711,-0.9778 -2.2488,-0.9778c-2.0534,0 -4.0089,1.8578 -4.0089,4.2045c0,2.3467 1.8577,4.1067 4.0089,4.1067c0.9777,0 1.76,-0.4889 2.1511,-0.9778l0.0977,0l0,0.5866c0,1.5645 -0.88,2.4445 -2.2488,2.4445c-1.0756,0 -1.8578,-0.7822 -2.0534,-1.4667l-1.5644,0.6845c0.4889,1.0755 1.6622,2.4444 3.7155,2.4444c2.1511,0 3.9111,-1.2711 3.9111,-4.3022l0,-7.4311l-1.76,0l0,0.6844zm-2.1511,5.7689c-1.2711,0 -2.3466,-1.0755 -2.3466,-2.5422c0,-1.4667 1.0755,-2.5422 2.3466,-2.5422c1.2711,0 2.2489,1.0755 2.2489,2.5422c0,1.4667 -0.9778,2.5422 -2.2489,2.5422zm23.8578,-10.8533l-4.4,0l0,12.2222l1.8578,0l0,-4.5956l2.5422,0c2.0534,0 4.0094,-1.4666 4.0094,-3.8133c0,-2.3467 -1.956,-3.8133 -4.0094,-3.8133zm0.0978,5.8666l-2.64,0l0,-4.2044l2.64,0c1.3686,0 2.1506,1.1733 2.1506,2.0533c-0.097,1.0756 -0.879,2.1511 -2.1506,2.1511zm11.2446,-1.76c-1.369,0 -2.738,0.5867 -3.227,1.8578l1.662,0.6845c0.391,-0.6845 0.978,-0.88 1.663,-0.88c0.977,0 1.857,0.5866 1.955,1.5644l0,0.0978c-0.293,-0.1956 -1.075,-0.4889 -1.858,-0.4889c-1.76,0 -3.52,0.9778 -3.52,2.7378c0,1.6622 1.467,2.7378 3.031,2.7378c1.272,0 1.858,-0.5867 2.347,-1.1734l0.098,0l0,0.9778l1.76,0l0,-4.6933c-0.196,-2.1511 -1.858,-3.4223 -3.911,-3.4223zm-0.196,6.7467c-0.586,0 -1.466,-0.2933 -1.466,-1.0755c0,-0.9778 1.075,-1.2712 1.955,-1.2712c0.782,0 1.173,0.1956 1.662,0.3912c-0.195,1.1733 -1.173,1.9555 -2.151,1.9555zm10.267,-6.4533l-2.053,5.28l-0.098,0l-2.151,-5.28l-1.956,0l3.227,7.4311l-1.858,4.1067l1.858,0l4.986,-11.5378l-1.955,0zm-16.427,7.8222l1.858,0l0,-12.2222l-1.858,0l0,12.2222z"
        }), d.createElement("path", {
            id: "svg_4",
            fill: "url(#paint0_linear_10492_30432)",
            d: "m10.1645,7.61475c-0.29329,0.29333 -0.39106,0.78222 -0.39106,1.36888l0,21.60887c0,0.5867 0.19555,1.0756 0.48886,1.3689l0.0978,0.0978l12.1244,-12.1245l0,-0.1955l-12.32,-12.12445z"
        }), d.createElement("path", {
            id: "svg_5",
            fill: "url(#paint1_linear_10492_30432)",
            d: "m26.3995,24.0416l-4.0089,-4.0089l0,-0.2933l4.0089,-4.0089l0.0978,0.0977l4.7911,2.7378c1.3689,0.7822 1.3689,2.0534 0,2.8356l-4.8889,2.64z"
        }), d.createElement("path", {
            id: "svg_6",
            fill: "url(#paint2_linear_10492_30432)",
            d: "m26.493,23.9441l-4.1067,-4.1067l-12.2222,12.2222c0.4889,0.4889 1.1733,0.4889 2.0533,0.0978l14.2756,-8.2133z"
        }), d.createElement("path", {
            transform: "translate(10.8553 12.5)",
            id: "svg_7",
            fill: "url(#paint3_linear_10492_30432)",
            d: "m26.493,15.7304l-14.2756,-8.11552c-0.88,-0.48889 -1.5644,-0.39111 -2.0533,0.09778l12.2222,12.12444l4.1067,-4.1067z"
        }), d.createElement("path", {
            id: "svg_8",
            fill: "black",
            d: "m26.3952,23.8457l-14.1778,8.0178c-0.7822,0.4889 -1.4667,0.3911 -1.9556,0l-0.0977,0.0978l0.0977,0.0977c0.4889,0.3911 1.1734,0.4889 1.9556,0l14.1778,-8.2133z",
            opacity: .2
        }), d.createElement("path", {
            id: "svg_9",
            fill: "black",
            d: "m10.1645,31.8641c-0.29329,-0.2934 -0.39106,-0.7823 -0.39106,-1.3689l0,0.0978c0,0.5866 0.19555,1.0755 0.48886,1.3688l0,-0.0977l-0.0978,0zm21.12,-10.7556l-4.8888,2.7378l0.0977,0.0978l4.7911,-2.7378c0.6845,-0.3911 0.9778,-0.88 0.9778,-1.3689c0,0.4889 -0.3911,0.88 -0.9778,1.2711z",
            opacity: .12
        }), d.createElement("path", {
            id: "svg_11",
            fill: "white",
            d: "m10.41078,31.56692c-0.3676,-0.189 -0.5514,-0.6614 -0.5514,-1.1338c0,-0.0945 0,-0.2835 0,-0.378c0,-6.9918 0,-13.9837 0,-20.881c0,-0.378 0.0919,-0.6614 0.1838,-1.03932c0.0919,-0.189 0.2757,-0.37794 0.4596,-0.56688c3.9524,4.0628 7.8128,8.1256 11.6733,12.1884c-3.9524,3.7794 -7.8128,7.7478 -11.7653,11.8106z"
        }), d.createElement("path", {
            id: "svg_12",
            fill: "white",
            d: "m26.03048,15.59952c-1.103,1.1339 -2.2979,2.2677 -3.4008,3.496c-3.6767,-3.8739 -7.4452,-7.7478 -11.1219,-11.62161c0,0 0,-0.09447 0.0919,-0.09447c4.7797,2.73998 9.5593,5.48008 14.4308,8.22008z"
        }), d.createElement("path", {
            id: "svg_13",
            fill: "white",
            d: "m11.50778,31.56712c3.6767,-3.7794 7.4452,-7.5587 11.1219,-11.3381c1.011,1.0393 2.114,2.0787 3.3089,3.2125c-4.7796,2.74 -9.5592,5.4801 -14.3389,8.1256l-0.0919,0z"
        }), d.createElement("path", {
            id: "svg_14",
            fill: "white",
            d: "m26.58648,23.24393c-1.1949,-1.1338 -2.2978,-2.2676 -3.4928,-3.4014c1.195,-1.2283 2.3899,-2.4566 3.5847,-3.6849c0.3677,0.1889 0.7354,0.3779 1.103,0.6613c0.9192,0.567 1.9303,1.0394 2.8495,1.6063c0.2757,0.0945 0.4595,0.2835 0.6433,0.5669c0.3677,0.4724 0.3677,0.9449 0,1.4173c-0.1838,0.1889 -0.3676,0.3779 -0.6433,0.4724c-1.2869,0.8504 -2.6656,1.6062 -4.0444,2.3621z"
        }))), le || (le = d.createElement("g", {
            id: "color"
        }, d.createElement("path", {
            id: "svg_5",
            fill: "url(#cpaint0_linear_10492_30432)",
            d: "m10.1645,7.61475c-0.29329,0.29333 -0.39106,0.78222 -0.39106,1.36888l0,21.60887c0,0.5867 0.19555,1.0756 0.48886,1.3689l0.0978,0.0978l12.1244,-12.1245l0,-0.1955l-12.32,-12.12445z"
        }), d.createElement("path", {
            id: "svg_6",
            fill: "url(#cpaint1_linear_10492_30432)",
            d: "m26.3995,24.0416l-4.0089,-4.0089l0,-0.2933l4.0089,-4.0089l0.0978,0.0977l4.7911,2.7378c1.3689,0.7822 1.3689,2.0534 0,2.8356l-4.8889,2.64z"
        }), d.createElement("path", {
            id: "svg_7",
            fill: "url(#cpaint2_linear_10492_30432)",
            d: "m26.493,23.9441l-4.1067,-4.1067l-12.2222,12.2222c0.4889,0.4889 1.1733,0.4889 2.0533,0.0978l14.2756,-8.2133z"
        }), d.createElement("path", {
            id: "svg_8",
            fill: "url(#cpaint3_linear_10492_30432)",
            d: "m26.493,15.7304l-14.2756,-8.11552c-0.88,-0.48889 -1.5644,-0.39111 -2.0533,0.09778l12.2222,12.12444l4.1067,-4.1067z"
        }))), ie || (ie = d.createElement("defs", null, d.createElement("linearGradient", {
            y2: .71968,
            x2: -.38331,
            y1: .0484,
            x1: .90769,
            id: "cpaint0_linear_10492_30432"
        }, d.createElement("stop", {
            stopColor: "#00A0FF"
        }), d.createElement("stop", {
            stopColor: "#00A1FF",
            offset: .007
        }), d.createElement("stop", {
            stopColor: "#00BEFF",
            offset: .26
        }), d.createElement("stop", {
            stopColor: "#00D2FF",
            offset: .512
        }), d.createElement("stop", {
            stopColor: "#00DFFF",
            offset: .76
        }), d.createElement("stop", {
            stopColor: "#00E3FF",
            offset: 1
        })), d.createElement("linearGradient", {
            y2: .49423,
            x2: -1.30669,
            y1: .49423,
            x1: 1.07724,
            id: "cpaint1_linear_10492_30432"
        }, d.createElement("stop", {
            stopColor: "#FFE000"
        }), d.createElement("stop", {
            stopColor: "#FFBD00",
            offset: .409
        }), d.createElement("stop", {
            stopColor: "#FFA500",
            offset: .775
        }), d.createElement("stop", {
            stopColor: "#FF9C00",
            offset: 1
        })), d.createElement("linearGradient", {
            y2: 1.94389,
            x2: -.49886,
            y1: .17814,
            x1: .86389,
            id: "cpaint2_linear_10492_30432"
        }, d.createElement("stop", {
            stopColor: "#FF3A44"
        }), d.createElement("stop", {
            stopColor: "#C31162",
            offset: 1
        })), d.createElement("linearGradient", {
            y2: .24693,
            x2: .42275,
            y1: -.54528,
            x1: -.18581,
            id: "cpaint3_linear_10492_30432"
        }, d.createElement("stop", {
            stopColor: "#32A071"
        }), d.createElement("stop", {
            stopColor: "#2DA771",
            offset: .069
        }), d.createElement("stop", {
            stopColor: "#15CF74",
            offset: .476
        }), d.createElement("stop", {
            stopColor: "#06E775",
            offset: .801
        }), d.createElement("stop", {
            stopColor: "#00F076",
            offset: 1
        })))))
          , re = (0,
        d.forwardRef)(ne);
        var oe, ce, se;
        l.p;
        function me() {
            return me = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var l = arguments[t];
                    for (var i in l)
                        Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i])
                }
                return e
            }
            ,
            me.apply(this, arguments)
        }
        const de = (e,t)=>d.createElement("svg", me({
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 121 40",
            ref: t
        }, e), oe || (oe = d.createElement("path", {
            fill: "#fff",
            d: "M110.81 0H9.12L8.2.01c-.67.01-1.34.07-2 .18A6.67 6.67 0 0 0 2.68 2a6.26 6.26 0 0 0-1.8 3.53 13 13 0 0 0-.19 2l-.01.92v23.12l.01.92a13 13 0 0 0 .18 2A6.59 6.59 0 0 0 2.67 38a6.27 6.27 0 0 0 3.53 1.81c.66.1 1.33.17 2 .18h.92l1.1.01H111.9l.92-.01c.67-.01 1.34-.07 2-.18a6.3 6.3 0 0 0 4.7-3.42c.3-.6.52-1.24.63-1.9.1-.67.17-1.34.18-2v-.93l.01-1.1V7.52c-.02-.67-.08-1.34-.2-2A6.47 6.47 0 0 0 114.82.2c-.65-.1-1.32-.17-1.99-.18h-.92L110.8 0Z"
        })), ce || (ce = d.createElement("path", {
            fill: "#141415",
            d: "M9.13 39.13c-.3 0-.6 0-.9-.02-.63 0-1.26-.06-1.88-.16A5.88 5.88 0 0 1 3.3 37.4a5.32 5.32 0 0 1-1.56-3.06c-.1-.62-.16-1.24-.17-1.87l-.02-.92V8.44l.02-.89c0-.63.06-1.25.16-1.87A5.76 5.76 0 0 1 3.3 2.62a5.57 5.57 0 0 1 3.06-1.57C6.97.95 7.6.9 8.22.9l.9-.02H111.9l.9.02c.63 0 1.25.06 1.87.16a5.6 5.6 0 0 1 4.62 4.62c.1.62.16 1.25.17 1.88v.9l.01 1.09v22.93a12.8 12.8 0 0 1-.18 1.85 5.47 5.47 0 0 1-2.96 4.08c-.52.27-1.08.45-1.66.55-.62.1-1.25.16-1.87.16l-.9.02H9.12Z"
        })), se || (se = d.createElement("path", {
            fill: "#fff",
            d: "M25.68 19.89a5.15 5.15 0 0 1 2.45-4.32 5.27 5.27 0 0 0-4.15-2.24c-1.75-.19-3.44 1.04-4.33 1.04-.9 0-2.28-1.02-3.75-1a5.53 5.53 0 0 0-4.66 2.84c-2 3.48-.5 8.6 1.42 11.42.96 1.38 2.09 2.91 3.56 2.86 1.45-.06 1.99-.92 3.73-.92 1.72 0 2.23.92 3.73.89 1.55-.03 2.52-1.39 3.45-2.78a11.4 11.4 0 0 0 1.58-3.22 4.97 4.97 0 0 1-3.03-4.57ZM22.84 11.48A5.07 5.07 0 0 0 24 7.85a5.16 5.16 0 0 0-4.28 3.35c-.2.6-.29 1.24-.25 1.87a4.26 4.26 0 0 0 3.37-1.6ZM42.98 27.14h-4.73l-1.14 3.36h-2l4.48-12.42h2.09l4.48 12.42h-2.04l-1.14-3.36Zm-4.24-1.55h3.75l-1.85-5.45h-.05l-1.85 5.45ZM55.84 25.97c0 2.81-1.5 4.62-3.78 4.62a3.07 3.07 0 0 1-2.85-1.58h-.04v4.48h-1.86V21.44h1.8v1.5h.04a3.21 3.21 0 0 1 2.88-1.6c2.3 0 3.81 1.82 3.81 4.63Zm-1.9 0c0-1.83-.96-3.04-2.4-3.04-1.42 0-2.38 1.23-2.38 3.04 0 1.82.96 3.05 2.38 3.05 1.44 0 2.4-1.2 2.4-3.05ZM65.81 25.97c0 2.81-1.5 4.62-3.78 4.62a3.07 3.07 0 0 1-2.85-1.58h-.04v4.48h-1.86V21.44h1.8v1.5h.03a3.21 3.21 0 0 1 2.89-1.6c2.3 0 3.81 1.82 3.81 4.63Zm-1.91 0c0-1.83-.95-3.04-2.4-3.04-1.41 0-2.37 1.23-2.37 3.04 0 1.82.96 3.05 2.38 3.05 1.44 0 2.39-1.2 2.39-3.05ZM72.4 27.04c.13 1.23 1.33 2.04 2.96 2.04 1.57 0 2.7-.81 2.7-1.92 0-.97-.68-1.54-2.3-1.94l-1.6-.39c-2.28-.55-3.34-1.61-3.34-3.35 0-2.14 1.87-3.6 4.52-3.6 2.62 0 4.42 1.46 4.48 3.6h-1.87c-.12-1.23-1.14-1.98-2.64-1.98-1.5 0-2.52.75-2.52 1.86 0 .87.65 1.39 2.25 1.79l1.37.33c2.55.6 3.6 1.63 3.6 3.44 0 2.33-1.84 3.78-4.78 3.78-2.76 0-4.62-1.42-4.74-3.66h1.9ZM84.03 19.3v2.14h1.72v1.47h-1.72v5c0 .77.34 1.13 1.1 1.13.2 0 .4-.02.61-.04v1.46c-.34.06-.69.1-1.03.09-1.83 0-2.55-.7-2.55-2.45v-5.19h-1.32v-1.47h1.32V19.3h1.87ZM86.75 25.97c0-2.85 1.68-4.64 4.3-4.64s4.29 1.8 4.29 4.64c0 2.86-1.66 4.64-4.3 4.64-2.63 0-4.29-1.78-4.29-4.64Zm6.7 0c0-1.95-.9-3.1-2.4-3.1-1.51 0-2.4 1.15-2.4 3.1 0 1.96.89 3.1 2.4 3.1 1.5 0 2.4-1.14 2.4-3.1ZM96.87 21.44h1.77v1.54h.04a2.16 2.16 0 0 1 2.18-1.63c.22 0 .43.02.64.07v1.73a2.6 2.6 0 0 0-.84-.1 1.87 1.87 0 0 0-1.93 2.08v5.37h-1.86v-9.06ZM110.06 27.84c-.25 1.64-1.84 2.77-3.9 2.77-2.63 0-4.26-1.77-4.26-4.6 0-2.84 1.64-4.68 4.19-4.68 2.5 0 4.08 1.72 4.08 4.47v.63h-6.4v.12a2.37 2.37 0 0 0 2.44 2.56 2.05 2.05 0 0 0 2.1-1.27h1.75Zm-6.28-2.7h4.53a2.18 2.18 0 0 0-2.22-2.3 2.3 2.3 0 0 0-2.3 2.3ZM38.5 8.73a2.64 2.64 0 0 1 2.81 2.97c0 1.9-1.03 3-2.8 3h-2.16V8.73h2.16Zm-1.22 5.12h1.12a1.88 1.88 0 0 0 1.97-2.14 1.88 1.88 0 0 0-1.97-2.14h-1.12v4.28ZM42.36 12.44a2.13 2.13 0 1 1 4.25 0 2.13 2.13 0 1 1-4.25 0Zm3.33 0c0-.97-.43-1.54-1.2-1.54-.78 0-1.21.57-1.21 1.54 0 .99.43 1.55 1.2 1.55.78 0 1.21-.57 1.21-1.55ZM52.25 14.7h-.92l-.93-3.32h-.07l-.93 3.32h-.9l-1.25-4.5h.9l.8 3.43h.07l.93-3.44h.85l.93 3.44h.07l.8-3.44h.89l-1.24 4.5ZM54.53 10.2h.86v.71h.06a1.35 1.35 0 0 1 1.35-.8 1.47 1.47 0 0 1 1.56 1.67v2.92h-.9V12c0-.72-.3-1.08-.96-1.08a1.03 1.03 0 0 0-1.08 1.14v2.64h-.89v-4.5ZM59.77 8.44h.9v6.26h-.9V8.44ZM61.9 12.44a2.13 2.13 0 1 1 4.25 0 2.13 2.13 0 1 1-4.25 0Zm3.33 0c0-.97-.43-1.54-1.2-1.54-.78 0-1.21.57-1.21 1.54 0 .99.43 1.55 1.2 1.55.78 0 1.21-.57 1.21-1.55ZM67.08 13.42c0-.8.6-1.27 1.67-1.34l1.22-.07v-.39c0-.47-.31-.74-.92-.74-.5 0-.84.18-.94.5h-.86c.1-.78.82-1.27 1.84-1.27 1.13 0 1.77.56 1.77 1.51v3.08H70v-.64h-.07a1.51 1.51 0 0 1-1.35.71 1.36 1.36 0 0 1-1.5-1.35Zm2.9-.38v-.38l-1.1.07c-.63.04-.9.26-.9.65 0 .4.34.64.83.64a1.06 1.06 0 0 0 1.16-.98ZM72.03 12.44c0-1.42.73-2.32 1.87-2.32a1.48 1.48 0 0 1 1.38.79h.07V8.44h.89v6.26h-.86v-.71h-.07a1.56 1.56 0 0 1-1.41.78c-1.15 0-1.87-.9-1.87-2.33Zm.92 0c0 .96.45 1.53 1.2 1.53s1.21-.58 1.21-1.52c0-.94-.46-1.53-1.2-1.53-.76 0-1.21.58-1.21 1.52ZM79.9 12.44a2.13 2.13 0 1 1 4.26 0 2.14 2.14 0 1 1-4.25 0Zm3.34 0c0-.97-.44-1.54-1.2-1.54-.78 0-1.21.57-1.21 1.54 0 .99.43 1.55 1.2 1.55s1.21-.57 1.21-1.55ZM85.35 10.2h.86v.71h.06a1.35 1.35 0 0 1 1.35-.8 1.47 1.47 0 0 1 1.56 1.67v2.92h-.9V12c0-.72-.3-1.08-.96-1.08a1.03 1.03 0 0 0-1.08 1.14v2.64h-.89v-4.5ZM94.2 9.07v1.15h.97v.74h-.97v2.32c0 .47.2.68.63.68l.34-.02v.74a2.9 2.9 0 0 1-.48.04c-.99 0-1.38-.35-1.38-1.21v-2.55h-.72v-.74h.72V9.07h.89ZM96.38 8.44h.88v2.48h.07a1.38 1.38 0 0 1 1.38-.8 1.49 1.49 0 0 1 1.55 1.67v2.9h-.9v-2.68c0-.72-.33-1.08-.95-1.08a1.05 1.05 0 0 0-1.14 1.14v2.63h-.89V8.44ZM105.44 13.48a1.83 1.83 0 0 1-1.95 1.3 2.04 2.04 0 0 1-2.08-2.32 2.08 2.08 0 0 1 2.08-2.35c1.25 0 2 .85 2 2.27v.3h-3.17v.06a1.2 1.2 0 0 0 1.2 1.29 1.08 1.08 0 0 0 1.07-.55h.85Zm-3.13-1.45h2.28a1.07 1.07 0 0 0-.3-.83 1.1 1.1 0 0 0-.8-.34 1.16 1.16 0 0 0-1.17 1.17Z"
        })))
          , ue = (0,
        d.forwardRef)(de);
        var he = {
            root: "VisitorSection-module--root--80c29",
            container: "VisitorSection-module--container--9fa91",
            headerSection: "VisitorSection-module--headerSection--6ff8a",
            waitUtiw5eu: "VisitorSection-module--wait-utiw5eu--1f817",
            fadeInUtiw5eu: "VisitorSection-module--fade-in-utiw5eu--88d28",
            descriptionSection: "VisitorSection-module--descriptionSection--ab90d",
            title: "VisitorSection-module--title--701c1",
            description: "VisitorSection-module--description--58945",
            link: "VisitorSection-module--link--917b2",
            arrow: "VisitorSection-module--arrow--35e89",
            mobileSection: "VisitorSection-module--mobileSection--76758",
            mobileWrapper: "VisitorSection-module--mobileWrapper--98c99",
            waitUtiw5fk: "VisitorSection-module--wait-utiw5fk--b58af",
            fadeInUtiw5fk: "VisitorSection-module--fade-in-utiw5fk--8d79a",
            downloadMobile: "VisitorSection-module--downloadMobile--9849e",
            waitUtiw5gk: "VisitorSection-module--wait-utiw5gk--03063",
            fadeInUtiw5gk: "VisitorSection-module--fade-in-utiw5gk--28d63",
            mobileHeaderTitle: "VisitorSection-module--mobileHeaderTitle--7dee0",
            waitUtiw5hd: "VisitorSection-module--wait-utiw5hd--71d1b",
            fadeInUtiw5hd: "VisitorSection-module--fade-in-utiw5hd--33b01",
            mobileTitle: "VisitorSection-module--mobileTitle--74fa9",
            appStoresSection: "VisitorSection-module--appStoresSection--3fc6e",
            storeIcon: "VisitorSection-module--storeIcon--c2c3a",
            card: "VisitorSection-module--card--c8a6b",
            waitUtiw5i1: "VisitorSection-module--wait-utiw5i1--877b9",
            fadeInUtiw5i1: "VisitorSection-module--fade-in-utiw5i1--e82c3",
            incognito: "VisitorSection-module--incognito--91a86",
            label: "VisitorSection-module--label--a867a",
            infoValue: "VisitorSection-module--infoValue--3c2fe",
            error: "VisitorSection-module--error--f7afd",
            id: "VisitorSection-module--id--4f2fc",
            idValue: "VisitorSection-module--idValue--39d10",
            infoList: "VisitorSection-module--infoList--fb218",
            footer: "VisitorSection-module--footer--c2228",
            waitUtiw5im: "VisitorSection-module--wait-utiw5im--503dc",
            fadeInUtiw5im: "VisitorSection-module--fade-in-utiw5im--49810",
            idSkeleton: "VisitorSection-module--idSkeleton--4c750",
            errorState: "VisitorSection-module--errorState--e4455",
            warningIcon: "VisitorSection-module--warningIcon--c7284",
            errorMessage: "VisitorSection-module--errorMessage--67d80",
            tryMessage: "VisitorSection-module--tryMessage--67f11"
        };
        function ve(e) {
            let {isLoading: t, currentVisit: l, visitorId: i, error: a, isVpn: n} = e;
            const r = !(null == l || !l.incognito)
              , o = (0,
            d.useMemo)((()=>a ? d.createElement("div", {
                className: he.errorState
            }, d.createElement(J, {
                className: he.warningIcon
            }), d.createElement("h2", {
                className: he.errorMessage
            }, "An error occurred."), d.createElement("p", {
                className: he.tryMessage
            }, "Please refresh the page or try in incognito mode.")) : !t && i ? d.createElement(d.Fragment, null, d.createElement("div", {
                className: he.id
            }, d.createElement("label", {
                className: he.label
            }, "your ID"), d.createElement("p", {
                className: he.idValue
            }, i)), d.createElement("div", {
                className: he.info
            }, d.createElement("ul", {
                className: he.infoList
            }, d.createElement("li", null, d.createElement("label", {
                className: he.label
            }, "IP"), d.createElement("p", {
                className: he.infoValue
            }, null == l ? void 0 : l.ip)), d.createElement("li", null, d.createElement("label", {
                className: he.label
            }, "browser"), d.createElement("p", {
                className: he.infoValue
            }, (null == l ? void 0 : l.browserDetails.browserName) + " on " + (null == l ? void 0 : l.browserDetails.os))), d.createElement("li", null, d.createElement("label", {
                className: he.label
            }, "incognito"), d.createElement("p", {
                className: he.infoValue
            }, r ? "Yes" : "No")), d.createElement("li", null, d.createElement("label", {
                className: he.label
            }, "vpn"), d.createElement("p", {
                className: he.infoValue
            }, n ? "Yes" : "No"))))) : d.createElement(d.Fragment, null, d.createElement("div", {
                className: he.id
            }, d.createElement("label", {
                className: he.label
            }, "your ID"), d.createElement(B.Z, {
                className: he.idSkeleton
            })), d.createElement("div", {
                className: he.info
            }, d.createElement("ul", {
                className: he.infoList
            }, d.createElement("li", null, d.createElement("label", {
                className: he.label
            }, "IP"), d.createElement(B.Z, {
                width: 110,
                height: 22
            })), d.createElement("li", null, d.createElement("label", {
                className: he.label
            }, "browser"), d.createElement(B.Z, {
                width: 166,
                height: 22
            })), d.createElement("li", null, d.createElement("label", {
                className: he.label
            }, "incognito"), d.createElement(B.Z, {
                width: 83,
                height: 22
            })), d.createElement("li", null, d.createElement("label", {
                className: he.label
            }, "vpn"), d.createElement(B.Z, {
                width: 83,
                height: 22
            })))))), [a, t, i, l, n, r]);
            return d.createElement(g.Z, {
                className: he.root
            }, d.createElement(E.Z, {
                className: he.container
            }, d.createElement("section", {
                className: he.descriptionSection
            }, d.createElement("div", {
                className: he.headerSection
            }, d.createElement("h1", {
                className: he.title
            }, "This is your browser’s ", d.createElement("span", null, "visitor ID")), d.createElement("p", {
                className: he.description
            }, "Install our JS agent on your website to uniquely identify the browsers that visit it."), d.createElement("p", {
                className: he.link
            }, d.createElement("a", {
                href: v.XG.documentationUrl,
                target: "_blank",
                rel: "noreferrer"
            }, "See documentation ", d.createElement($, {
                className: he.arrow
            })))), d.createElement("div", {
                className: U()(he.card, {
                    [he.incognito]: r,
                    [he.error]: a
                })
            }, o), !a && d.createElement("footer", {
                className: he.footer
            }, r ? d.createElement("p", null, "You are in private browsing. Your visitor ID is the same.") : d.createElement("p", null, "Try revisiting on VPN or incognito mode. ", d.createElement("strong", null, "Your visitor ID will be the same.")))), d.createElement("section", {
                className: he.mobileSection
            }, d.createElement("div", {
                className: he.mobileWrapper
            }, d.createElement("h3", {
                className: he.mobileHeaderTitle
            }, "Looking to identify the ", d.createElement("span", null, "devices"), " that visit your mobile app?"), d.createElement("div", {
                className: he.downloadMobile
            }, d.createElement("p", {
                className: he.mobileTitle
            }, "Try our demo for ", d.createElement("strong", null, "mobile devices")), d.createElement("div", {
                className: he.appStoresSection
            }, G.D && d.createElement("div", null, d.createElement("a", {
                target: "_blank",
                rel: "noreferrer",
                href: G.D
            }, d.createElement(re, {
                className: he.storeIcon
            }))), G.dG && d.createElement("div", null, d.createElement("a", {
                target: "_blank",
                rel: "noreferrer",
                href: G.dG
            }, d.createElement(ue, {
                className: he.storeIcon
            })))))))))
        }
        var fe, pe, ge = l(48869);
        function Ee() {
            return Ee = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var l = arguments[t];
                    for (var i in l)
                        Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i])
                }
                return e
            }
            ,
            Ee.apply(this, arguments)
        }
        const we = (e,t)=>d.createElement("svg", Ee({
            viewBox: "0 0 44 44",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: t
        }, e), fe || (fe = d.createElement("rect", {
            width: 44,
            height: 44,
            rx: 8,
            fill: "#141415"
        })), pe || (pe = d.createElement("path", {
            d: "M29 27.918v.5a.5.5 0 0 0 .498-.542l-.498.042Zm-14 0-.498-.042a.5.5 0 0 0 .498.542v-.5Zm13.045-11.46-.498.042.498-.041Zm-.58-.451.082.493-.082-.493Zm-5.547.897.082-.493-.082.493Zm.164 0L22 16.411l.082.493Zm-6.127-.445-.498-.042.498.042Zm.58-.452-.082.493.082-.493ZM12.5 27.417a.5.5 0 1 0 0 1v-1Zm19 1a.5.5 0 0 0 0-1v1ZM27.547 16.5l.955 11.46.996-.084-.955-11.459-.996.083ZM15.498 27.96l.955-11.46-.996-.083-.955 11.46.996.082Zm.955-11.46 5.383.897.164-.986-5.382-.897-.165.986Zm5.711.897 5.383-.897-.165-.986L22 16.41l.164.986Zm6.38-.98a1 1 0 0 0-1.162-.903l.165.986.996-.083Zm-6.708.98c.108.018.22.018.328 0L22 16.411l-.164.986Zm-5.383-.897.165-.986a1 1 0 0 0-1.161.903l.996.083ZM12.5 28.418h19v-1h-19v1Zm16.5-1H15v1h14v-1Z",
            fill: "#fff"
        })))
          , be = (0,
        d.forwardRef)(we);
        var Se, ye, Ne, Ze, Ve;
        function Ce() {
            return Ce = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var l = arguments[t];
                    for (var i in l)
                        Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i])
                }
                return e
            }
            ,
            Ce.apply(this, arguments)
        }
        const ke = (e,t)=>d.createElement("svg", Ce({
            viewBox: "0 0 44 44",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: t
        }, e), Se || (Se = d.createElement("rect", {
            width: 44,
            height: 44,
            rx: 8,
            fill: "#141415"
        })), ye || (ye = d.createElement("rect", {
            x: 13,
            y: 15.5,
            width: 18,
            height: 13,
            rx: .5,
            stroke: "white"
        })), Ne || (Ne = d.createElement("circle", {
            cx: 15,
            cy: 17.5,
            r: .5,
            fill: "white"
        })), Ze || (Ze = d.createElement("circle", {
            cx: 16.5,
            cy: 17.5,
            r: .5,
            fill: "white"
        })), Ve || (Ve = d.createElement("circle", {
            cx: 18,
            cy: 17.5,
            r: .5,
            fill: "white"
        })))
          , Ae = (0,
        d.forwardRef)(ke);
        var Me, Oe, _e, xe;
        function ze() {
            return ze = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var l = arguments[t];
                    for (var i in l)
                        Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i])
                }
                return e
            }
            ,
            ze.apply(this, arguments)
        }
        const Ie = (e,t)=>d.createElement("svg", ze({
            viewBox: "0 0 44 44",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: t
        }, e), Me || (Me = d.createElement("rect", {
            width: 44,
            height: 44,
            rx: 8,
            fill: "#141415"
        })), Oe || (Oe = d.createElement("path", {
            d: "M31.5 22a9.5 9.5 0 11-19 0 9.5 9.5 0 0119 0z",
            stroke: "#fff"
        })), _e || (_e = d.createElement("path", {
            d: "M26.5 22c0 5.247-2.015 9.5-4.5 9.5s-4.5-4.253-4.5-9.5 2.015-9.5 4.5-9.5 4.5 4.253 4.5 9.5z",
            stroke: "#fff"
        })), xe || (xe = d.createElement("path", {
            d: "M29 15.5c-1.736.922-4.23 1.5-7 1.5-2.77 0-5.264-.578-7-1.5M29 28.5c-1.736-.922-4.23-1.5-7-1.5-2.77 0-5.264.578-7 1.5M12.5 22h19M22 12.5v19",
            stroke: "#fff"
        })))
          , Le = (0,
        d.forwardRef)(Ie);
        var Re, Fe, Te;
        function He() {
            return He = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var l = arguments[t];
                    for (var i in l)
                        Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i])
                }
                return e
            }
            ,
            He.apply(this, arguments)
        }
        const We = (e,t)=>d.createElement("svg", He({
            viewBox: "0 0 44 44",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: t
        }, e), Re || (Re = d.createElement("rect", {
            width: 44,
            height: 44,
            rx: 8,
            fill: "#141415"
        })), Fe || (Fe = d.createElement("path", {
            d: "M16 14.5a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5v-15z",
            stroke: "#fff"
        })), Te || (Te = d.createElement("path", {
            d: "M20 29h4",
            stroke: "#fff",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })))
          , je = (0,
        d.forwardRef)(We);
        var Be, De;
        function Ue() {
            return Ue = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var l = arguments[t];
                    for (var i in l)
                        Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i])
                }
                return e
            }
            ,
            Ue.apply(this, arguments)
        }
        const Ge = (e,t)=>d.createElement("svg", Ue({
            viewBox: "0 0 44 44",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: t
        }, e), Be || (Be = d.createElement("rect", {
            width: 44,
            height: 44,
            rx: 8,
            fill: "#434875"
        })), De || (De = d.createElement("path", {
            d: "M25.5 27.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm0 0h-7m0 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm5-8.5 3.71 5.936M20.71 19 17 24.936m8-8.436a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
            stroke: "#fff"
        })))
          , Pe = (0,
        d.forwardRef)(Ge);
        var Ye;
        function Je() {
            return Je = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var l = arguments[t];
                    for (var i in l)
                        Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i])
                }
                return e
            }
            ,
            Je.apply(this, arguments)
        }
        const qe = (e,t)=>d.createElement("svg", Je({
            width: 18,
            height: 12,
            viewBox: "0 0 18 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: t
        }, e), Ye || (Ye = d.createElement("path", {
            d: "M14.834 10.931v.6a.6.6 0 00.598-.65l-.598.05zm-11.667 0l-.598-.05a.6.6 0 00.598.65v-.6zm10.871-9.549l-.598.05.598-.05zm-.483-.376l.098.592-.098-.592zm-4.623.747l.099-.592-.099.592zm.137 0l-.098-.592.098.592zm-5.106-.37l-.598-.05.598.05zm.484-.377l-.099.592.099-.592zM1.084 10.33a.6.6 0 100 1.2v-1.2zm15.833 1.2a.6.6 0 100-1.2v1.2zM13.44 1.432l.796 9.55 1.196-.1-.796-9.55-1.196.1zm-9.675 9.55l.796-9.55-1.196-.1-.796 9.55 1.196.1zm.583-9.384l4.486.747.197-1.184L4.545.414l-.197 1.184zm4.82.747l4.485-.747-.197-1.184-4.485.747.197 1.184zm5.468-1.013a1.017 1.017 0 00-1.18-.918l.197 1.184a.183.183 0 01-.213-.166l1.196-.1zM8.834 2.345c.11.019.223.019.334 0L8.97 1.161a.184.184 0 01.06 0l-.197 1.184zM4.56 1.432a.183.183 0 01-.213.166L4.545.414a1.017 1.017 0 00-1.18.918l1.196.1zm-3.477 10.1h15.833v-1.2H1.084v1.2zm13.75-1.2H3.167v1.2h11.667v-1.2z",
            fill: "#141415",
            fillOpacity: .72
        })))
          , Xe = (0,
        d.forwardRef)(qe);
        var Ke;
        function Qe() {
            return Qe = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var l = arguments[t];
                    for (var i in l)
                        Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i])
                }
                return e
            }
            ,
            Qe.apply(this, arguments)
        }
        const $e = (e,t)=>d.createElement("svg", Qe({
            width: 8,
            height: 8,
            viewBox: "0 0 8 8",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: t
        }, e), Ke || (Ke = d.createElement("circle", {
            cx: 4,
            cy: 4,
            r: 4,
            fill: "#F04405"
        })))
          , et = (0,
        d.forwardRef)($e);
        var tt, lt, it;
        function at() {
            return at = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var l = arguments[t];
                    for (var i in l)
                        Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i])
                }
                return e
            }
            ,
            at.apply(this, arguments)
        }
        const nt = (e,t)=>d.createElement("svg", at({
            viewBox: "0 0 44 44",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: t
        }, e), tt || (tt = d.createElement("rect", {
            width: 44,
            height: 44,
            rx: 8,
            fill: "#FF5D22"
        })), lt || (lt = d.createElement("circle", {
            cx: 22,
            cy: 17.5,
            r: 4,
            stroke: "#fff",
            strokeWidth: 1.6
        })), it || (it = d.createElement("path", {
            d: "M31 30.5a9 9 0 10-18 0",
            stroke: "#fff",
            strokeWidth: 1.6,
            strokeLinecap: "round"
        })))
          , rt = (0,
        d.forwardRef)(nt);
        var ot = {
            root: "AlgorithmSection-module--root--3edb5",
            headerContainer: "AlgorithmSection-module--headerContainer--252de",
            title: "AlgorithmSection-module--title--3be43",
            description: "AlgorithmSection-module--description--8ced4",
            algorithmContainer: "AlgorithmSection-module--algorithmContainer--7486e",
            mobileRows: "AlgorithmSection-module--mobileRows--cba23",
            browserRows: "AlgorithmSection-module--browserRows--16cfb",
            otherRows: "AlgorithmSection-module--otherRows--e838d",
            visitorRow: "AlgorithmSection-module--visitorRow--eddab",
            browserSignalsTitle: "AlgorithmSection-module--browserSignalsTitle--32899",
            browserSignals: "AlgorithmSection-module--browserSignals--fac3a",
            otherSignalsTitle: "AlgorithmSection-module--otherSignalsTitle--97993",
            otherSignals: "AlgorithmSection-module--otherSignals--41c92",
            visitHistoryTitle: "AlgorithmSection-module--visitHistoryTitle--9cb66",
            visitHistory: "AlgorithmSection-module--visitHistory--3e2b5",
            historyRows: "AlgorithmSection-module--historyRows--8c9a6",
            server: "AlgorithmSection-module--server--38c96",
            visitorId: "AlgorithmSection-module--visitorId--5a2b5",
            visitorIdTitle: "AlgorithmSection-module--visitorIdTitle--794d3",
            visitorMobileRow: "AlgorithmSection-module--visitorMobileRow--e3e59",
            visitorMobileRowSVG: "AlgorithmSection-module--visitorMobileRowSVG--1fc45",
            browserRowsSVG: "AlgorithmSection-module--browserRowsSVG--5238b",
            otherRowsSVG: "AlgorithmSection-module--otherRowsSVG--ad1ba",
            visitorRowSVG: "AlgorithmSection-module--visitorRowSVG--cb7fd",
            mobileRowsSVG: "AlgorithmSection-module--mobileRowsSVG--ce394",
            card: "AlgorithmSection-module--card--eab96",
            icon: "AlgorithmSection-module--icon--b7f4a",
            cardTitle: "AlgorithmSection-module--cardTitle--981ab",
            visitTitle: "AlgorithmSection-module--visitTitle--9bf90",
            visitCard: "AlgorithmSection-module--visitCard--4c452",
            isVisible: "AlgorithmSection-module--isVisible--fde53",
            auraVisit: "AlgorithmSection-module--auraVisit--101d3",
            auraVisitMobile: "AlgorithmSection-module--auraVisitMobile--92df7",
            errorCard: "AlgorithmSection-module--errorCard--e40e1",
            visitsError: "AlgorithmSection-module--visitsError--464a5",
            visitSection: "AlgorithmSection-module--visitSection--9fc90",
            visit: "AlgorithmSection-module--visit--7f12e",
            visitIcon: "AlgorithmSection-module--visitIcon--79355",
            warningIcon: "AlgorithmSection-module--warningIcon--08a4f",
            errorMessage: "AlgorithmSection-module--errorMessage--454ba",
            serverSection: "AlgorithmSection-module--serverSection--effcf",
            serverTitle: "AlgorithmSection-module--serverTitle--c1386",
            cardSkeleton: "AlgorithmSection-module--cardSkeleton--2c38b",
            visitSkeleton: "AlgorithmSection-module--visitSkeleton--89746",
            visible: "AlgorithmSection-module--visible--becff",
            aura: "AlgorithmSection-module--aura--b9dd4",
            auraMobile: "AlgorithmSection-module--auraMobile--eef9e"
        }
          , ct = l(35170);
        function st(e) {
            var t, l, i, a, n;
            let {isVisitDetailsLoading: r, isVisitHistoryLoading: o, visits: c, currentVisit: s, visitorId: m, identificationError: u, visitsError: h} = e;
            const {0: v, 1: f} = (0,
            d.useState)("")
              , {0: p, 1: w} = (0,
            d.useState)(0)
              , {0: b, 1: S} = (0,
            d.useState)(0);
            (0,
            d.useEffect)((()=>{
                f(function() {
                    function e(e) {
                        return (e < 10 ? "0" : "") + e
                    }
                    let t = (new Date).getTimezoneOffset();
                    const l = t < 0 ? "+" : "-";
                    return t = Math.abs(t),
                    l + e(t / 60 | 0) + ":" + e(t % 60)
                }()),
                w(window.screen.width),
                S(window.screen.height)
            }
            ), []);
            const y = (0,
            d.useRef)(null)
              , N = (0,
            ct.Z)(y, {
                freezeOnceVisible: !0
            })
              , Z = !(null == N || !N.isIntersecting);
            return d.createElement(g.Z, {
                className: ot.root
            }, d.createElement(ut, null), d.createElement(E.Z, {
                size: "large",
                className: ot.algorithmContainer
            }, d.createElement("h2", {
                className: U()(ot.browserSignalsTitle, {
                    [ot.visible]: Z
                })
            }, "Browser fingerprinting details"), d.createElement("section", {
                ref: y,
                className: U()(ot.browserSignals, {
                    [ot.visible]: Z
                })
            }, r ? d.createElement(d.Fragment, null, d.createElement(mt, {
                icon: d.createElement(be, null),
                isLoading: !0
            }), d.createElement(mt, {
                icon: d.createElement(Le, null),
                isLoading: !0
            }), d.createElement(mt, {
                icon: d.createElement(Ae, null),
                isLoading: !0
            }), d.createElement(mt, {
                icon: d.createElement(je, null),
                isLoading: !0
            })) : (null != h ? h : u) ? d.createElement(d.Fragment, null, d.createElement(mt, {
                icon: d.createElement(be, null),
                title: "Incognito Mode"
            }), d.createElement(mt, {
                icon: d.createElement(Le, null),
                title: "IP"
            }), d.createElement(mt, {
                icon: d.createElement(Ae, null),
                title: "Resolution"
            }), d.createElement(mt, {
                icon: d.createElement(je, null),
                title: "OS"
            })) : d.createElement(d.Fragment, null, d.createElement(mt, {
                icon: d.createElement(be, null),
                title: "Incognito: " + (null != s && s.incognito ? "Yes" : "No")
            }), d.createElement(mt, {
                icon: d.createElement(Le, null),
                title: (null == s || null === (t = s.ipLocation) || void 0 === t || null === (l = t.country) || void 0 === l ? void 0 : l.code) + ", " + (null == s || null === (i = s.ipLocation) || void 0 === i || null === (a = i.city) || void 0 === a ? void 0 : a.name) + " GTM " + v
            }), d.createElement(mt, {
                icon: d.createElement(Ae, null),
                title: "resolution " + p + "x" + b
            }), d.createElement(mt, {
                icon: d.createElement(je, null),
                title: null == s || null === (n = s.browserDetails) || void 0 === n ? void 0 : n.os
            }))), d.createElement("div", {
                className: U()(ot.browserRows, {
                    [ot.visible]: Z
                })
            }, d.createElement("div", {
                className: ot.browserRowsSVG
            })), d.createElement("section", {
                className: U()(ot.otherSignals, {
                    [ot.visible]: Z
                })
            }, d.createElement(mt, {
                variant: "outline",
                icon: d.createElement(Pe, null),
                title: "OTHER IDENTIFIERS"
            })), d.createElement("div", {
                className: U()(ot.otherRows, {
                    [ot.visible]: Z
                })
            }, d.createElement("div", {
                className: ot.otherRowsSVG
            })), d.createElement("h2", {
                className: U()(ot.visitHistoryTitle, {
                    [ot.visible]: Z
                })
            }, "visit History"), d.createElement("section", {
                className: U()(ot.visitHistory, {
                    [ot.visible]: Z
                })
            }, (null != h ? h : u) ? d.createElement("div", {
                className: ot.visitsError
            }, d.createElement(J, {
                className: ot.warningIcon
            }), d.createElement("h2", {
                className: ot.errorMessage
            }, "An error occurred.")) : d.createElement("div", {
                className: ot.visitSection
            }, d.createElement(dt, {
                current: !0,
                title: "Current visit"
            }), o ? d.createElement(d.Fragment, null, d.createElement(dt, {
                isLoading: !0
            }), d.createElement(dt, {
                isLoading: !0
            })) : c && c.slice(1, 3).map(((e,t)=>d.createElement(dt, {
                key: t,
                incognito: e.incognito,
                title: (0,
                ge.om)(e.timestamp)
            }))))), d.createElement("div", {
                className: U()(ot.historyRows, {
                    [ot.visible]: Z
                })
            }, d.createElement("div", {
                className: ot.historyRowsSVG
            })), d.createElement("section", {
                className: U()(ot.server, {
                    [ot.visible]: Z
                })
            }, d.createElement("div", {
                className: U()(ot.serverSection, {
                    [ot.visible]: Z
                })
            }, d.createElement("h2", {
                className: ot.serverTitle
            }, "Server"))), d.createElement("div", {
                className: U()(ot.visitorRow, {
                    [ot.visible]: Z
                })
            }, d.createElement("div", {
                className: ot.visitorRowSVG
            })), d.createElement("h2", {
                className: U()(ot.visitorIdTitle, {
                    [ot.visible]: Z
                })
            }, "Your visitor Id"), d.createElement("section", {
                className: U()(ot.visitorId, {
                    [ot.visible]: Z
                })
            }, r ? d.createElement(mt, {
                variant: "visitor",
                icon: d.createElement(rt, null),
                isLoading: !0,
                isVisible: Z
            }) : u ? d.createElement(mt, {
                variant: "error",
                icon: d.createElement(J, null),
                title: "Error",
                isVisible: Z
            }) : d.createElement(mt, {
                variant: "visitor",
                icon: d.createElement(rt, null),
                title: m,
                isVisible: Z
            })), d.createElement("aside", {
                className: U()(ot.mobileRows, {
                    [ot.visible]: Z
                })
            }, d.createElement("div", {
                className: ot.mobileRowsSVG
            })), d.createElement("div", {
                className: U()(ot.visitorMobileRow, {
                    [ot.visible]: Z
                })
            }, d.createElement("div", {
                className: ot.visitorMobileRowSVG
            }))))
        }
        function mt(e) {
            let {icon: t, title: l, variant: i, isLoading: a, isVisible: n} = e;
            return d.createElement("div", {
                className: U()(ot.card, {
                    [ot.outline]: "outline" === i
                }, {
                    [ot.visitCard]: "visitor" === i
                }, {
                    [ot.errorCard]: "error" === i
                }, {
                    [ot.isVisible]: n
                })
            }, d.createElement("span", {
                className: ot.icon
            }, t), a ? d.createElement(B.Z, {
                className: U()(ot.cardSkeleton, {
                    [ot.visitSkeleton]: "visitor" === i
                }),
                width: 150,
                height: 20
            }) : d.createElement("h3", {
                className: U()(ot.cardTitle, {
                    [ot.visitTitle]: "visitor" === i
                })
            }, l))
        }
        function dt(e) {
            let {current: t, incognito: l, title: i, isLoading: a} = e;
            return d.createElement("div", {
                className: U()(ot.visit)
            }, t ? d.createElement("span", {
                className: ot.visitIcon
            }, d.createElement(et, null)) : l ? d.createElement("span", {
                className: ot.visitIcon
            }, d.createElement(Xe, null)) : d.createElement("span", null), a ? d.createElement(B.Z, {
                width: 100,
                height: 19
            }) : d.createElement("h3", {
                suppressHydrationWarning: !0,
                className: ot.visitTitle
            }, i))
        }
        function ut() {
            return d.createElement(E.Z, {
                size: "small",
                className: ot.headerContainer
            }, d.createElement("header", null, d.createElement("h1", {
                className: ot.title
            }, "Advanced identification algorithm"), d.createElement("p", {
                className: ot.description
            }, "Your visitor ID is generated using multiple identification techniques, machine learning and probability algorithms.")))
        }
        var ht = l(38032)
          , vt = l(10913)
          , ft = l(1323);
        function pt(e) {
            let {isLoading: t, currentVisit: i, visits: a, error: n} = e;
            const r = (0,
            d.useRef)(null)
              , o = (0,
            ct.Z)(r, {
                freezeOnceVisible: !0
            })
              , c = !(null == o || !o.isIntersecting);
            return d.createElement(g.Z, {
                className: ft.Z.visitSection
            }, d.createElement(E.Z, {
                className: ft.Z.containerVisits,
                size: "large"
            }, n ? d.createElement("div", {
                className: ft.Z.errorState
            }, d.createElement(J, {
                className: ft.Z.warningIcon
            }), d.createElement("h2", {
                className: ft.Z.errorMessage
            }, "An error occurred."), d.createElement("p", {
                className: ft.Z.tryMessage
            }, "Please refresh the page or try in incognito mode.")) : d.createElement(vt.Z, {
                isLoading: t,
                currentVisit: i,
                visits: a,
                isVisible: c
            }), d.createElement("section", {
                ref: r,
                className: U()(ft.Z.cardSection, {
                    [ft.Z.visible]: c
                })
            }, d.createElement(gt, {
                icon: d.createElement(ht.S, {
                    src: "../../../../img/IncognitoLayers.png",
                    alt: "Incognito Card",
                    __imageData: l(85977)
                }),
                title: "Incognito Mode Detection",
                description: "Your Visitor ID remains constant even if you revisit the page in incognito mode or turn on a VPN. "
            }))))
        }
        function gt(e) {
            let {icon: t, title: l, description: i} = e;
            return d.createElement("div", {
                className: ft.Z.card
            }, d.createElement("span", {
                className: ft.Z.icon
            }, t), d.createElement("h1", {
                className: ft.Z.cardTitle
            }, l), d.createElement("p", {
                className: ft.Z.cardDescription
            }, i))
        }
        function Et() {
            var e, t, l, i;
            const {0: a, 1: n} = (0,
            d.useState)()
              , {0: r, 1: o} = (0,
            d.useState)()
              , {0: c, 1: s} = (0,
            d.useState)([])
              , {0: m, 1: u} = (0,
            d.useState)(!0)
              , {getData: h, isLoading: v, error: f} = (0,
            F.qG)(W.i, {
                immediate: !1
            })
              , {visitorData: p, isLoading: g, hasError: E} = (0,
            j.Cv)()
              , {0: w, 1: b} = (0,
            d.useState)(!1)
              , S = (0,
            A.F)();
            return (0,
            d.useEffect)((()=>{
                let e = !1;
                return u(!0),
                async function() {
                    if (!r) {
                        const e = await h({
                            ignoreCache: !0
                        });
                        o(null == e ? void 0 : e.visitorId);
                        const t = [{
                            ...e,
                            browserDetails: {
                                browserName: null == e ? void 0 : e.browserName,
                                os: null == e ? void 0 : e.os,
                                osVersion: null == e ? void 0 : e.osVersion,
                                device: null == e ? void 0 : e.device
                            }
                        }];
                        s(t),
                        n(t[0])
                    }
                    if (r)
                        try {
                            const {visits: t} = await (0,
                            T.VO)(r);
                            e || (s(t),
                            n(t[0]))
                        } catch (t) {
                            S.error("Unable to load visits", (0,
                            H.e)(t)),
                            b(!0)
                        } finally {
                            e || u(!1)
                        }
                }(),
                ()=>{
                    e = !0
                }
            }
            ), [h, r, S]),
            d.createElement(d.Fragment, null, d.createElement(ve, {
                error: null !== (e = !!f) && void 0 !== e ? e : !!E,
                isLoading: !!v || !!g,
                isVpn: !(null == p || null === (t = p.products) || void 0 === t || null === (l = t.vpn) || void 0 === l || null === (i = l.data) || void 0 === i || !i.result),
                currentVisit: a,
                visitorId: r
            }), d.createElement(st, {
                isVisitHistoryLoading: m,
                isVisitDetailsLoading: v,
                visitorId: r,
                visits: c,
                currentVisit: a,
                identificationError: !!f,
                visitsError: w
            }), d.createElement(pt, {
                error: w || !!f,
                isLoading: m,
                visits: c,
                currentVisit: a
            }))
        }
        var wt = l(31359)
          , bt = {
            codeApi: "SolveAnyFraudSection-module--codeApi--74ffc",
            container: "SolveAnyFraudSection-module--container--62717",
            content: "SolveAnyFraudSection-module--content--acfd4",
            solveAnyFraud: "SolveAnyFraudSection-module--solveAnyFraud--770bf",
            title: "SolveAnyFraudSection-module--title--7c0a1",
            description: "SolveAnyFraudSection-module--description--20248",
            caseStudies: "SolveAnyFraudSection-module--caseStudies--95bbe",
            label: "SolveAnyFraudSection-module--label--15384",
            cards: "SolveAnyFraudSection-module--cards--4ce58",
            link: "SolveAnyFraudSection-module--link--4dbe7"
        }
          , St = l(14160);
        function yt() {
            return d.createElement(g.Z, {
                className: bt.codeApi
            }, d.createElement(E.Z, {
                size: "large",
                className: bt.container
            }, d.createElement("section", {
                className: bt.content
            }, d.createElement(wt.Z, {
                codeBlocks: [{
                    code: "curl https://api.fpjs.io/visitors/:visitId \\\n      -H 'Auth-Token: Bearer eyJ0eXAiOiJKV1...'",
                    language: "javascript"
                }]
            }), d.createElement(wt.Z, {
                codeBlocks: [{
                    code: '{\n      "visitorId": "Ibk1527CUFmcnjLwIs4A9",\n      "visits": [\n        {\n          "incognito": true,\n          "ip": "61.127.217.15",\n          "ipLocation": { ... },\n          "browserDetails": { ... }\n        }\n      ]\n    }',
                    language: "javascript"
                }],
                hasControls: !1
            })), d.createElement("section", {
                className: bt.solveAnyFraud
            }, d.createElement("h2", {
                className: bt.title
            }, "Solve any fraud use case"), d.createElement("p", {
                className: bt.description
            }, "Our 99.5% accurate visitor ID gives websites a flexible tool to solve their toughest fraud challenges."), d.createElement("div", {
                className: bt.caseStudies
            }, d.createElement("p", {
                className: bt.label
            }, "Read our customer case studies:"), d.createElement("div", {
                className: bt.cards
            }, d.createElement(Nt, {
                text: "Credit card fraud",
                url: "/case-studies/credit-card-fraud/"
            }), d.createElement(Nt, {
                text: "Promo abuse",
                url: "/case-studies/promo-abuse/"
            }), d.createElement(Nt, {
                text: "Account sharing",
                url: "/case-studies/edtech/"
            }), d.createElement(Nt, {
                text: "Review fraud",
                url: "/case-studies/review-fraud/"
            }))))))
        }
        function Nt(e) {
            let {text: t, url: l} = e;
            return d.createElement(St.rU, {
                className: bt.link,
                key: l,
                to: l,
                target: "_blank",
                rel: "noreferrer"
            }, t, " →")
        }
        var Zt = l(7406);
        function Vt() {
            const e = (0,
            d.useRef)(null)
              , t = (0,
            ct.Z)(e, {
                freezeOnceVisible: !0
            })
              , i = !(null == t || !t.isIntersecting);
            return d.createElement(g.Z, {
                className: ft.Z.catchFraudstersSection
            }, d.createElement(E.Z, {
                className: ft.Z.containerFraudsters,
                size: "large"
            }, d.createElement("section", {
                ref: e,
                className: U()(ft.Z.cardSection, {
                    [ft.Z.visible]: i
                })
            }, d.createElement("div", {
                className: ft.Z.card
            }, d.createElement("span", {
                className: ft.Z.icon
            }, d.createElement(ht.S, {
                src: "../../../../img/CatchLayers.png",
                alt: "Catch Fraudsters Card",
                __imageData: l(5e3)
            })), d.createElement("h1", {
                className: ft.Z.cardTitle
            }, "Catch fraudsters concealing their identity"), d.createElement("p", {
                className: ft.Z.cardDescription
            }, "Visitor IDs can be used to connect fraud events across multiple visits."))), d.createElement(Zt.Z, null)))
        }
        var Ct = l(83202)
          , kt = {
            heroSection: "demo-module--heroSection--7d11c",
            heroSectionAb: "demo-module--heroSectionAb--199ac",
            videoSection: "demo-module--videoSection--a924b",
            container: "demo-module--container--c66eb",
            videoTitle: "demo-module--videoTitle--ab868",
            videoContainer: "demo-module--videoContainer--1d469",
            iframe: "demo-module--iframe--4f38d",
            button: "demo-module--button--ed94f"
        };
        function At(e) {
            let {pageContext: t} = e;
            const l = t.breadcrumb.crumbs;
            return d.createElement(u.bM, null, d.createElement(h.Z, {
                breadcrumbs: l
            }), d.createElement(f.Z, {
                className: kt.heroSectionAb,
                title: "Fingerprint Demo",
                variant: "secondary"
            }, "Identify anonymous site visitors with 99.5% accuracy to prevent online fraud"), d.createElement(_, null), d.createElement(Et, null), d.createElement(Vt, null), d.createElement(yt, null), d.createElement(g.Z, {
                className: kt.videoSection
            }, d.createElement(E.Z, {
                className: kt.container
            }, d.createElement("h2", {
                className: kt.videoTitle
            }, "See how Fingerprint works"), d.createElement("div", {
                className: kt.videoContainer
            }, d.createElement(w.Z, {
                href: v.mD.contactSales,
                className: kt.button,
                buttonId: "contact_sales_demo_video"
            }, "Contact Sales")))))
        }
        function Mt(e) {
            return d.createElement(Ct.H, {
                pathname: e.location.pathname,
                title: "Technical Demo - Fingerprint Pro"
            })
        }
    },
    5e3: function(e) {
        e.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#c8c8d8","images":{"fallback":{"src":"/static/4c7d21c301dbaeb7b76d0f72df69f79c/7805d/CatchLayers.png","srcSet":"/static/4c7d21c301dbaeb7b76d0f72df69f79c/658ae/CatchLayers.png 104w,\\n/static/4c7d21c301dbaeb7b76d0f72df69f79c/8fc5d/CatchLayers.png 208w,\\n/static/4c7d21c301dbaeb7b76d0f72df69f79c/7805d/CatchLayers.png 416w","sizes":"(min-width: 416px) 416px, 100vw"},"sources":[]},"width":416,"height":416}')
    },
    85977: function(e) {
        e.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#c8c8d8","images":{"fallback":{"src":"/static/a08dc188736a0ac4d34fe30319b4400e/7805d/IncognitoLayers.png","srcSet":"/static/a08dc188736a0ac4d34fe30319b4400e/658ae/IncognitoLayers.png 104w,\\n/static/a08dc188736a0ac4d34fe30319b4400e/8fc5d/IncognitoLayers.png 208w,\\n/static/a08dc188736a0ac4d34fe30319b4400e/7805d/IncognitoLayers.png 416w","sizes":"(min-width: 416px) 416px, 100vw"},"sources":[]},"width":416,"height":416}')
    }
}]);
//# sourceMappingURL=component---src-pages-demo-index-tsx-ba2e00d079917f0d41bf.js.map

!function(e) {
    function t(n) {
        if (r[n])
            return r[n].exports;
        var i = r[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(i.exports, i, i.exports, t),
            i.loaded = !0,
            i.exports
    }
    var n = window.webpackJsonp;
    window.webpackJsonp = function(r, o) {
        for (var a, s, l = 0, u = []; l < r.length; l++)
            s = r[l],
            i[s] && u.push.apply(u, i[s]),
                i[s] = 0;
        for (a in o)
            e[a] = o[a];
        for (n && n(r, o); u.length; )
            u.shift().call(null , t)
    }
    ;
    var r = {}
        , i = {
        0: 0
    };
    return t.e = function(e, n) {
        if (0 === i[e])
            return n.call(null , t);
        if (void 0 !== i[e])
            i[e].push(n);
        else {
            i[e] = [n];
            var r = document.getElementsByTagName("head")[0]
                , o = document.createElement("script");
            o.type = "text/javascript",
                o.charset = "utf-8",
                o.async = !0,
                o.src = t.p + "" + ({
                        1: "chart"
                    }[e] || e) + ".js",
                r.appendChild(o)
        }
    }
        ,
        t.m = e,
        t.c = r,
        t.p = "",
        t(0)
}([function(e, t, n) {
    window.$ = window.jQuery = n(1),
        n(2),
        n(3);
    var r = n(4)
        , i = n(7)
        , o = n(8)
        , a = n(9)
        , s = n(10);
    !function() {
        return window.isOldBrowser ? ($("html").addClass("ie-fallback"),
            $(".fallback-chart").attr("src", "images/fallback-chart.png"),
            !1) : (r.init(),
            i.init(),
            o.init(),
            a.init(),
            void s.init("#chart", "data/data.csv"))
    }()
}
    , function(e, t, n) {
        var r, i;
        /*!
         * jQuery JavaScript Library v1.11.3
         * http://jquery.com/
         *
         * Includes Sizzle.js
         * http://sizzlejs.com/
         *
         * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2015-04-28T16:19Z
         */
        !function(t, n) {
            "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                return n(e)
            }
                : n(t)
        }("undefined" != typeof window ? window : this, function(n, o) {
            function a(e) {
                var t = "length"in e && e.length
                    , n = le.type(e);
                return "function" === n || le.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
            }
            function s(e, t, n) {
                if (le.isFunction(t))
                    return le.grep(e, function(e, r) {
                        return !!t.call(e, r, e) !== n
                    });
                if (t.nodeType)
                    return le.grep(e, function(e) {
                        return e === t !== n
                    });
                if ("string" == typeof t) {
                    if (ge.test(t))
                        return le.filter(t, e, n);
                    t = le.filter(t, e)
                }
                return le.grep(e, function(e) {
                    return le.inArray(e, t) >= 0 !== n
                })
            }
            function l(e, t) {
                do
                    e = e[t];
                while (e && 1 !== e.nodeType);return e
            }
            function u(e) {
                var t = Ce[e] = {};
                return le.each(e.match(Te) || [], function(e, n) {
                    t[n] = !0
                }),
                    t
            }
            function c() {
                ye.addEventListener ? (ye.removeEventListener("DOMContentLoaded", d, !1),
                    n.removeEventListener("load", d, !1)) : (ye.detachEvent("onreadystatechange", d),
                    n.detachEvent("onload", d))
            }
            function d() {
                (ye.addEventListener || "load" === event.type || "complete" === ye.readyState) && (c(),
                    le.ready())
            }
            function f(e, t, n) {
                if (void 0 === n && 1 === e.nodeType) {
                    var r = "data-" + t.replace(De, "-$1").toLowerCase();
                    if (n = e.getAttribute(r),
                        "string" == typeof n) {
                        try {
                            n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Se.test(n) ? le.parseJSON(n) : n
                        } catch (i) {}
                        le.data(e, t, n)
                    } else
                        n = void 0
                }
                return n
            }
            function p(e) {
                var t;
                for (t in e)
                    if (("data" !== t || !le.isEmptyObject(e[t])) && "toJSON" !== t)
                        return !1;
                return !0
            }
            function h(e, t, n, r) {
                if (le.acceptData(e)) {
                    var i, o, a = le.expando, s = e.nodeType, l = s ? le.cache : e, u = s ? e[a] : e[a] && a;
                    if (u && l[u] && (r || l[u].data) || void 0 !== n || "string" != typeof t)
                        return u || (u = s ? e[a] = Q.pop() || le.guid++ : a),
                        l[u] || (l[u] = s ? {} : {
                            toJSON: le.noop
                        }),
                        ("object" == typeof t || "function" == typeof t) && (r ? l[u] = le.extend(l[u], t) : l[u].data = le.extend(l[u].data, t)),
                            o = l[u],
                        r || (o.data || (o.data = {}),
                            o = o.data),
                        void 0 !== n && (o[le.camelCase(t)] = n),
                            "string" == typeof t ? (i = o[t],
                            null == i && (i = o[le.camelCase(t)])) : i = o,
                            i
                }
            }
            function m(e, t, n) {
                if (le.acceptData(e)) {
                    var r, i, o = e.nodeType, a = o ? le.cache : e, s = o ? e[le.expando] : le.expando;
                    if (a[s]) {
                        if (t && (r = n ? a[s] : a[s].data)) {
                            le.isArray(t) ? t = t.concat(le.map(t, le.camelCase)) : t in r ? t = [t] : (t = le.camelCase(t),
                                t = t in r ? [t] : t.split(" ")),
                                i = t.length;
                            for (; i--; )
                                delete r[t[i]];
                            if (n ? !p(r) : !le.isEmptyObject(r))
                                return
                        }
                        (n || (delete a[s].data,
                            p(a[s]))) && (o ? le.cleanData([e], !0) : ae.deleteExpando || a != a.window ? delete a[s] : a[s] = null )
                    }
                }
            }
            function g() {
                return !0
            }
            function v() {
                return !1
            }
            function y() {
                try {
                    return ye.activeElement
                } catch (e) {}
            }
            function b(e) {
                var t = Fe.split("|")
                    , n = e.createDocumentFragment();
                if (n.createElement)
                    for (; t.length; )
                        n.createElement(t.pop());
                return n
            }
            function x(e, t) {
                var n, r, i = 0, o = typeof e.getElementsByTagName !== Ae ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ae ? e.querySelectorAll(t || "*") : void 0;
                if (!o)
                    for (o = [],
                             n = e.childNodes || e; null != (r = n[i]); i++)
                        !t || le.nodeName(r, t) ? o.push(r) : le.merge(o, x(r, t));
                return void 0 === t || t && le.nodeName(e, t) ? le.merge([e], o) : o
            }
            function w(e) {
                Me.test(e.type) && (e.defaultChecked = e.checked)
            }
            function k(e, t) {
                return le.nodeName(e, "table") && le.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }
            function T(e) {
                return e.type = (null !== le.find.attr(e, "type")) + "/" + e.type,
                    e
            }
            function C(e) {
                var t = Ke.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"),
                    e
            }
            function E(e, t) {
                for (var n, r = 0; null != (n = e[r]); r++)
                    le._data(n, "globalEval", !t || le._data(t[r], "globalEval"))
            }
            function N(e, t) {
                if (1 === t.nodeType && le.hasData(e)) {
                    var n, r, i, o = le._data(e), a = le._data(t, o), s = o.events;
                    if (s) {
                        delete a.handle,
                            a.events = {};
                        for (n in s)
                            for (r = 0,
                                     i = s[n].length; i > r; r++)
                                le.event.add(t, n, s[n][r])
                    }
                    a.data && (a.data = le.extend({}, a.data))
                }
            }
            function A(e, t) {
                var n, r, i;
                if (1 === t.nodeType) {
                    if (n = t.nodeName.toLowerCase(),
                        !ae.noCloneEvent && t[le.expando]) {
                        i = le._data(t);
                        for (r in i.events)
                            le.removeEvent(t, r, i.handle);
                        t.removeAttribute(le.expando)
                    }
                    "script" === n && t.text !== e.text ? (T(t).text = e.text,
                        C(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
                    ae.html5Clone && e.innerHTML && !le.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Me.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
                    t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
                }
            }
            function S(e, t) {
                var r, i = le(t.createElement(e)).appendTo(t.body), o = n.getDefaultComputedStyle && (r = n.getDefaultComputedStyle(i[0])) ? r.display : le.css(i[0], "display");
                return i.detach(),
                    o
            }
            function D(e) {
                var t = ye
                    , n = rt[e];
                return n || (n = S(e, t),
                "none" !== n && n || (nt = (nt || le("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
                    t = (nt[0].contentWindow || nt[0].contentDocument).document,
                    t.write(),
                    t.close(),
                    n = S(e, t),
                    nt.detach()),
                    rt[e] = n),
                    n
            }
            function j(e, t) {
                return {
                    get: function() {
                        var n = e();
                        if (null != n)
                            return n ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }
            function L(e, t) {
                if (t in e)
                    return t;
                for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = gt.length; i--; )
                    if (t = gt[i] + n,
                        t in e)
                        return t;
                return r
            }
            function $(e, t) {
                for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)
                    r = e[a],
                    r.style && (o[a] = le._data(r, "olddisplay"),
                        n = r.style.display,
                        t ? (o[a] || "none" !== n || (r.style.display = ""),
                        "" === r.style.display && $e(r) && (o[a] = le._data(r, "olddisplay", D(r.nodeName)))) : (i = $e(r),
                        (n && "none" !== n || !i) && le._data(r, "olddisplay", i ? n : le.css(r, "display"))));
                for (a = 0; s > a; a++)
                    r = e[a],
                    r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
                return e
            }
            function H(e, t, n) {
                var r = ft.exec(t);
                return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
            }
            function M(e, t, n, r, i) {
                for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)
                    "margin" === n && (a += le.css(e, n + Le[o], !0, i)),
                        r ? ("content" === n && (a -= le.css(e, "padding" + Le[o], !0, i)),
                        "margin" !== n && (a -= le.css(e, "border" + Le[o] + "Width", !0, i))) : (a += le.css(e, "padding" + Le[o], !0, i),
                        "padding" !== n && (a += le.css(e, "border" + Le[o] + "Width", !0, i)));
                return a
            }
            function B(e, t, n) {
                var r = !0
                    , i = "width" === t ? e.offsetWidth : e.offsetHeight
                    , o = it(e)
                    , a = ae.boxSizing && "border-box" === le.css(e, "boxSizing", !1, o);
                if (0 >= i || null == i) {
                    if (i = ot(e, t, o),
                        (0 > i || null == i) && (i = e.style[t]),
                            st.test(i))
                        return i;
                    r = a && (ae.boxSizingReliable() || i === e.style[t]),
                        i = parseFloat(i) || 0
                }
                return i + M(e, t, n || (a ? "border" : "content"), r, o) + "px"
            }
            function _(e, t, n, r, i) {
                return new _.prototype.init(e,t,n,r,i)
            }
            function z() {
                return setTimeout(function() {
                    vt = void 0
                }),
                    vt = le.now()
            }
            function P(e, t) {
                var n, r = {
                    height: e
                }, i = 0;
                for (t = t ? 1 : 0; 4 > i; i += 2 - t)
                    n = Le[i],
                        r["margin" + n] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e),
                    r
            }
            function q(e, t, n) {
                for (var r, i = (Tt[t] || []).concat(Tt["*"]), o = 0, a = i.length; a > o; o++)
                    if (r = i[o].call(n, t, e))
                        return r
            }
            function F(e, t, n) {
                var r, i, o, a, s, l, u, c, d = this, f = {}, p = e.style, h = e.nodeType && $e(e), m = le._data(e, "fxshow");
                n.queue || (s = le._queueHooks(e, "fx"),
                null == s.unqueued && (s.unqueued = 0,
                        l = s.empty.fire,
                        s.empty.fire = function() {
                            s.unqueued || l()
                        }
                ),
                    s.unqueued++,
                    d.always(function() {
                        d.always(function() {
                            s.unqueued--,
                            le.queue(e, "fx").length || s.empty.fire()
                        })
                    })),
                1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                    u = le.css(e, "display"),
                    c = "none" === u ? le._data(e, "olddisplay") || D(e.nodeName) : u,
                "inline" === c && "none" === le.css(e, "float") && (ae.inlineBlockNeedsLayout && "inline" !== D(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
                n.overflow && (p.overflow = "hidden",
                ae.shrinkWrapBlocks() || d.always(function() {
                    p.overflow = n.overflow[0],
                        p.overflowX = n.overflow[1],
                        p.overflowY = n.overflow[2]
                }));
                for (r in t)
                    if (i = t[r],
                            bt.exec(i)) {
                        if (delete t[r],
                                o = o || "toggle" === i,
                            i === (h ? "hide" : "show")) {
                            if ("show" !== i || !m || void 0 === m[r])
                                continue;
                            h = !0
                        }
                        f[r] = m && m[r] || le.style(e, r)
                    } else
                        u = void 0;
                if (le.isEmptyObject(f))
                    "inline" === ("none" === u ? D(e.nodeName) : u) && (p.display = u);
                else {
                    m ? "hidden"in m && (h = m.hidden) : m = le._data(e, "fxshow", {}),
                    o && (m.hidden = !h),
                        h ? le(e).show() : d.done(function() {
                            le(e).hide()
                        }),
                        d.done(function() {
                            var t;
                            le._removeData(e, "fxshow");
                            for (t in f)
                                le.style(e, t, f[t])
                        });
                    for (r in f)
                        a = q(h ? m[r] : 0, r, d),
                        r in m || (m[r] = a.start,
                        h && (a.end = a.start,
                            a.start = "width" === r || "height" === r ? 1 : 0))
                }
            }
            function W(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (r = le.camelCase(n),
                            i = t[r],
                            o = e[n],
                        le.isArray(o) && (i = o[1],
                            o = e[n] = o[0]),
                        n !== r && (e[r] = o,
                            delete e[n]),
                            a = le.cssHooks[r],
                        a && "expand"in a) {
                        o = a.expand(o),
                            delete e[r];
                        for (n in o)
                            n in e || (e[n] = o[n],
                                t[n] = i)
                    } else
                        t[r] = i
            }
            function O(e, t, n) {
                var r, i, o = 0, a = kt.length, s = le.Deferred().always(function() {
                    delete l.elem
                }), l = function() {
                    if (i)
                        return !1;
                    for (var t = vt || z(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; l > a; a++)
                        u.tweens[a].run(o);
                    return s.notifyWith(e, [u, o, n]),
                        1 > o && l ? n : (s.resolveWith(e, [u]),
                            !1)
                }, u = s.promise({
                    elem: e,
                    props: le.extend({}, t),
                    opts: le.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: vt || z(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = le.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(r),
                            r
                    },
                    stop: function(t) {
                        var n = 0
                            , r = t ? u.tweens.length : 0;
                        if (i)
                            return this;
                        for (i = !0; r > n; n++)
                            u.tweens[n].run(1);
                        return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]),
                            this
                    }
                }), c = u.props;
                for (W(c, u.opts.specialEasing); a > o; o++)
                    if (r = kt[o].call(u, e, c, u.opts))
                        return r;
                return le.map(c, q, u),
                le.isFunction(u.opts.start) && u.opts.start.call(e, u),
                    le.fx.timer(le.extend(l, {
                        elem: e,
                        anim: u,
                        queue: u.opts.queue
                    })),
                    u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
            }
            function I(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t,
                        t = "*");
                    var r, i = 0, o = t.toLowerCase().match(Te) || [];
                    if (le.isFunction(n))
                        for (; r = o[i++]; )
                            "+" === r.charAt(0) ? (r = r.slice(1) || "*",
                                (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }
            function R(e, t, n, r) {
                function i(s) {
                    var l;
                    return o[s] = !0,
                        le.each(e[s] || [], function(e, s) {
                            var u = s(t, n, r);
                            return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u),
                                i(u),
                                !1)
                        }),
                        l
                }
                var o = {}
                    , a = e === Gt;
                return i(t.dataTypes[0]) || !o["*"] && i("*")
            }
            function X(e, t) {
                var n, r, i = le.ajaxSettings.flatOptions || {};
                for (r in t)
                    void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
                return n && le.extend(!0, e, n),
                    e
            }
            function U(e, t, n) {
                for (var r, i, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
                    l.shift(),
                    void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                    for (a in s)
                        if (s[a] && s[a].test(i)) {
                            l.unshift(a);
                            break
                        }
                if (l[0]in n)
                    o = l[0];
                else {
                    for (a in n) {
                        if (!l[0] || e.converters[a + " " + l[0]]) {
                            o = a;
                            break
                        }
                        r || (r = a)
                    }
                    o = o || r
                }
                return o ? (o !== l[0] && l.unshift(o),
                    n[o]) : void 0
            }
            function G(e, t, n, r) {
                var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
                if (c[1])
                    for (a in e.converters)
                        u[a.toLowerCase()] = e.converters[a];
                for (o = c.shift(); o; )
                    if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                            l = o,
                            o = c.shift())
                        if ("*" === o)
                            o = l;
                        else if ("*" !== l && l !== o) {
                            if (a = u[l + " " + o] || u["* " + o],
                                    !a)
                                for (i in u)
                                    if (s = i.split(" "),
                                        s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                        a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0],
                                            c.unshift(s[1]));
                                        break
                                    }
                            if (a !== !0)
                                if (a && e["throws"])
                                    t = a(t);
                                else
                                    try {
                                        t = a(t)
                                    } catch (d) {
                                        return {
                                            state: "parsererror",
                                            error: a ? d : "No conversion from " + l + " to " + o
                                        }
                                    }
                        }
                return {
                    state: "success",
                    data: t
                }
            }
            function Y(e, t, n, r) {
                var i;
                if (le.isArray(t))
                    le.each(t, function(t, i) {
                        n || Kt.test(e) ? r(e, i) : Y(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
                    });
                else if (n || "object" !== le.type(t))
                    r(e, t);
                else
                    for (i in t)
                        Y(e + "[" + i + "]", t[i], n, r)
            }
            function J() {
                try {
                    return new n.XMLHttpRequest
                } catch (e) {}
            }
            function V() {
                try {
                    return new n.ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {}
            }
            function K(e) {
                return le.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
            }
            var Q = []
                , Z = Q.slice
                , ee = Q.concat
                , te = Q.push
                , ne = Q.indexOf
                , re = {}
                , ie = re.toString
                , oe = re.hasOwnProperty
                , ae = {}
                , se = "1.11.3"
                , le = function(e, t) {
                return new le.fn.init(e,t)
            }
                , ue = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
                , ce = /^-ms-/
                , de = /-([\da-z])/gi
                , fe = function(e, t) {
                return t.toUpperCase()
            };
            le.fn = le.prototype = {
                jquery: se,
                constructor: le,
                selector: "",
                length: 0,
                toArray: function() {
                    return Z.call(this)
                },
                get: function(e) {
                    return null != e ? 0 > e ? this[e + this.length] : this[e] : Z.call(this)
                },
                pushStack: function(e) {
                    var t = le.merge(this.constructor(), e);
                    return t.prevObject = this,
                        t.context = this.context,
                        t
                },
                each: function(e, t) {
                    return le.each(this, e, t)
                },
                map: function(e) {
                    return this.pushStack(le.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(Z.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length
                        , n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor(null )
                },
                push: te,
                sort: Q.sort,
                splice: Q.splice
            },
                le.extend = le.fn.extend = function() {
                    var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
                    for ("boolean" == typeof a && (u = a,
                        a = arguments[s] || {},
                        s++),
                         "object" == typeof a || le.isFunction(a) || (a = {}),
                         s === l && (a = this,
                             s--); l > s; s++)
                        if (null != (i = arguments[s]))
                            for (r in i)
                                e = a[r],
                                    n = i[r],
                                a !== n && (u && n && (le.isPlainObject(n) || (t = le.isArray(n))) ? (t ? (t = !1,
                                    o = e && le.isArray(e) ? e : []) : o = e && le.isPlainObject(e) ? e : {},
                                    a[r] = le.extend(u, o, n)) : void 0 !== n && (a[r] = n));
                    return a
                }
                ,
                le.extend({
                    expando: "jQuery" + (se + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(e) {
                        throw new Error(e)
                    },
                    noop: function() {},
                    isFunction: function(e) {
                        return "function" === le.type(e)
                    },
                    isArray: Array.isArray || function(e) {
                        return "array" === le.type(e)
                    }
                    ,
                    isWindow: function(e) {
                        return null != e && e == e.window
                    },
                    isNumeric: function(e) {
                        return !le.isArray(e) && e - parseFloat(e) + 1 >= 0
                    },
                    isEmptyObject: function(e) {
                        var t;
                        for (t in e)
                            return !1;
                        return !0
                    },
                    isPlainObject: function(e) {
                        var t;
                        if (!e || "object" !== le.type(e) || e.nodeType || le.isWindow(e))
                            return !1;
                        try {
                            if (e.constructor && !oe.call(e, "constructor") && !oe.call(e.constructor.prototype, "isPrototypeOf"))
                                return !1
                        } catch (n) {
                            return !1
                        }
                        if (ae.ownLast)
                            for (t in e)
                                return oe.call(e, t);
                        for (t in e)
                            ;
                        return void 0 === t || oe.call(e, t)
                    },
                    type: function(e) {
                        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? re[ie.call(e)] || "object" : typeof e
                    },
                    globalEval: function(e) {
                        e && le.trim(e) && (n.execScript || function(e) {
                                n.eval.call(n, e)
                            }
                        )(e)
                    },
                    camelCase: function(e) {
                        return e.replace(ce, "ms-").replace(de, fe)
                    },
                    nodeName: function(e, t) {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                    },
                    each: function(e, t, n) {
                        var r, i = 0, o = e.length, s = a(e);
                        if (n) {
                            if (s)
                                for (; o > i && (r = t.apply(e[i], n),
                                r !== !1); i++)
                                    ;
                            else
                                for (i in e)
                                    if (r = t.apply(e[i], n),
                                        r === !1)
                                        break
                        } else if (s)
                            for (; o > i && (r = t.call(e[i], i, e[i]),
                            r !== !1); i++)
                                ;
                        else
                            for (i in e)
                                if (r = t.call(e[i], i, e[i]),
                                    r === !1)
                                    break;
                        return e
                    },
                    trim: function(e) {
                        return null == e ? "" : (e + "").replace(ue, "")
                    },
                    makeArray: function(e, t) {
                        var n = t || [];
                        return null != e && (a(Object(e)) ? le.merge(n, "string" == typeof e ? [e] : e) : te.call(n, e)),
                            n
                    },
                    inArray: function(e, t, n) {
                        var r;
                        if (t) {
                            if (ne)
                                return ne.call(t, e, n);
                            for (r = t.length,
                                     n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                                if (n in t && t[n] === e)
                                    return n
                        }
                        return -1
                    },
                    merge: function(e, t) {
                        for (var n = +t.length, r = 0, i = e.length; n > r; )
                            e[i++] = t[r++];
                        if (n !== n)
                            for (; void 0 !== t[r]; )
                                e[i++] = t[r++];
                        return e.length = i,
                            e
                    },
                    grep: function(e, t, n) {
                        for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++)
                            r = !t(e[o], o),
                            r !== s && i.push(e[o]);
                        return i
                    },
                    map: function(e, t, n) {
                        var r, i = 0, o = e.length, s = a(e), l = [];
                        if (s)
                            for (; o > i; i++)
                                r = t(e[i], i, n),
                                null != r && l.push(r);
                        else
                            for (i in e)
                                r = t(e[i], i, n),
                                null != r && l.push(r);
                        return ee.apply([], l)
                    },
                    guid: 1,
                    proxy: function(e, t) {
                        var n, r, i;
                        return "string" == typeof t && (i = e[t],
                            t = e,
                            e = i),
                            le.isFunction(e) ? (n = Z.call(arguments, 2),
                                r = function() {
                                    return e.apply(t || this, n.concat(Z.call(arguments)))
                                }
                                ,
                                r.guid = e.guid = e.guid || le.guid++,
                                r) : void 0
                    },
                    now: function() {
                        return +new Date
                    },
                    support: ae
                }),
                le.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                    re["[object " + t + "]"] = t.toLowerCase()
                });
            var pe = /*!
             * Sizzle CSS Selector Engine v2.2.0-pre
             * http://sizzlejs.com/
             *
             * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2014-12-16
             */
                function(e) {
                    function t(e, t, n, r) {
                        var i, o, a, s, l, u, d, p, h, m;
                        if ((t ? t.ownerDocument || t : F) !== $ && L(t),
                                t = t || $,
                                n = n || [],
                                s = t.nodeType,
                            "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s)
                            return n;
                        if (!r && M) {
                            if (11 !== s && (i = ye.exec(e)))
                                if (a = i[1]) {
                                    if (9 === s) {
                                        if (o = t.getElementById(a),
                                            !o || !o.parentNode)
                                            return n;
                                        if (o.id === a)
                                            return n.push(o),
                                                n
                                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && P(t, o) && o.id === a)
                                        return n.push(o),
                                            n
                                } else {
                                    if (i[2])
                                        return Q.apply(n, t.getElementsByTagName(e)),
                                            n;
                                    if ((a = i[3]) && w.getElementsByClassName)
                                        return Q.apply(n, t.getElementsByClassName(a)),
                                            n
                                }
                            if (w.qsa && (!B || !B.test(e))) {
                                if (p = d = q,
                                        h = t,
                                        m = 1 !== s && e,
                                    1 === s && "object" !== t.nodeName.toLowerCase()) {
                                    for (u = E(e),
                                             (d = t.getAttribute("id")) ? p = d.replace(xe, "\\$&") : t.setAttribute("id", p),
                                             p = "[id='" + p + "'] ",
                                             l = u.length; l--; )
                                        u[l] = p + f(u[l]);
                                    h = be.test(e) && c(t.parentNode) || t,
                                        m = u.join(",")
                                }
                                if (m)
                                    try {
                                        return Q.apply(n, h.querySelectorAll(m)),
                                            n
                                    } catch (g) {} finally {
                                        d || t.removeAttribute("id")
                                    }
                            }
                        }
                        return A(e.replace(le, "$1"), t, n, r)
                    }
                    function n() {
                        function e(n, r) {
                            return t.push(n + " ") > k.cacheLength && delete e[t.shift()],
                                e[n + " "] = r
                        }
                        var t = [];
                        return e
                    }
                    function r(e) {
                        return e[q] = !0,
                            e
                    }
                    function i(e) {
                        var t = $.createElement("div");
                        try {
                            return !!e(t)
                        } catch (n) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t),
                                t = null
                        }
                    }
                    function o(e, t) {
                        for (var n = e.split("|"), r = e.length; r--; )
                            k.attrHandle[n[r]] = t
                    }
                    function a(e, t) {
                        var n = t && e
                            , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
                        if (r)
                            return r;
                        if (n)
                            for (; n = n.nextSibling; )
                                if (n === t)
                                    return -1;
                        return e ? 1 : -1
                    }
                    function s(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return "input" === n && t.type === e
                        }
                    }
                    function l(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }
                    function u(e) {
                        return r(function(t) {
                            return t = +t,
                                r(function(n, r) {
                                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                                })
                        })
                    }
                    function c(e) {
                        return e && "undefined" != typeof e.getElementsByTagName && e
                    }
                    function d() {}
                    function f(e) {
                        for (var t = 0, n = e.length, r = ""; n > t; t++)
                            r += e[t].value;
                        return r
                    }
                    function p(e, t, n) {
                        var r = t.dir
                            , i = n && "parentNode" === r
                            , o = O++;
                        return t.first ? function(t, n, o) {
                            for (; t = t[r]; )
                                if (1 === t.nodeType || i)
                                    return e(t, n, o)
                        }
                            : function(t, n, a) {
                            var s, l, u = [W, o];
                            if (a) {
                                for (; t = t[r]; )
                                    if ((1 === t.nodeType || i) && e(t, n, a))
                                        return !0
                            } else
                                for (; t = t[r]; )
                                    if (1 === t.nodeType || i) {
                                        if (l = t[q] || (t[q] = {}),
                                            (s = l[r]) && s[0] === W && s[1] === o)
                                            return u[2] = s[2];
                                        if (l[r] = u,
                                                u[2] = e(t, n, a))
                                            return !0
                                    }
                        }
                    }
                    function h(e) {
                        return e.length > 1 ? function(t, n, r) {
                            for (var i = e.length; i--; )
                                if (!e[i](t, n, r))
                                    return !1;
                            return !0
                        }
                            : e[0]
                    }
                    function m(e, n, r) {
                        for (var i = 0, o = n.length; o > i; i++)
                            t(e, n[i], r);
                        return r
                    }
                    function g(e, t, n, r, i) {
                        for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)
                            (o = e[s]) && (!n || n(o, r, i)) && (a.push(o),
                            u && t.push(s));
                        return a
                    }
                    function v(e, t, n, i, o, a) {
                        return i && !i[q] && (i = v(i)),
                        o && !o[q] && (o = v(o, a)),
                            r(function(r, a, s, l) {
                                var u, c, d, f = [], p = [], h = a.length, v = r || m(t || "*", s.nodeType ? [s] : s, []), y = !e || !r && t ? v : g(v, f, e, s, l), b = n ? o || (r ? e : h || i) ? [] : a : y;
                                if (n && n(y, b, s, l),
                                        i)
                                    for (u = g(b, p),
                                             i(u, [], s, l),
                                             c = u.length; c--; )
                                        (d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
                                if (r) {
                                    if (o || e) {
                                        if (o) {
                                            for (u = [],
                                                     c = b.length; c--; )
                                                (d = b[c]) && u.push(y[c] = d);
                                            o(null , b = [], u, l)
                                        }
                                        for (c = b.length; c--; )
                                            (d = b[c]) && (u = o ? ee(r, d) : f[c]) > -1 && (r[u] = !(a[u] = d))
                                    }
                                } else
                                    b = g(b === a ? b.splice(h, b.length) : b),
                                        o ? o(null , a, b, l) : Q.apply(a, b)
                            })
                    }
                    function y(e) {
                        for (var t, n, r, i = e.length, o = k.relative[e[0].type], a = o || k.relative[" "], s = o ? 1 : 0, l = p(function(e) {
                            return e === t
                        }, a, !0), u = p(function(e) {
                            return ee(t, e) > -1
                        }, a, !0), c = [function(e, n, r) {
                            var i = !o && (r || n !== S) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                            return t = null ,
                                i
                        }
                        ]; i > s; s++)
                            if (n = k.relative[e[s].type])
                                c = [p(h(c), n)];
                            else {
                                if (n = k.filter[e[s].type].apply(null , e[s].matches),
                                        n[q]) {
                                    for (r = ++s; i > r && !k.relative[e[r].type]; r++)
                                        ;
                                    return v(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({
                                            value: " " === e[s - 2].type ? "*" : ""
                                        })).replace(le, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && f(e))
                                }
                                c.push(n)
                            }
                        return h(c)
                    }
                    function b(e, n) {
                        var i = n.length > 0
                            , o = e.length > 0
                            , a = function(r, a, s, l, u) {
                            var c, d, f, p = 0, h = "0", m = r && [], v = [], y = S, b = r || o && k.find.TAG("*", u), x = W += null == y ? 1 : Math.random() || .1, w = b.length;
                            for (u && (S = a !== $ && a); h !== w && null != (c = b[h]); h++) {
                                if (o && c) {
                                    for (d = 0; f = e[d++]; )
                                        if (f(c, a, s)) {
                                            l.push(c);
                                            break
                                        }
                                    u && (W = x)
                                }
                                i && ((c = !f && c) && p--,
                                r && m.push(c))
                            }
                            if (p += h,
                                i && h !== p) {
                                for (d = 0; f = n[d++]; )
                                    f(m, v, a, s);
                                if (r) {
                                    if (p > 0)
                                        for (; h--; )
                                            m[h] || v[h] || (v[h] = V.call(l));
                                    v = g(v)
                                }
                                Q.apply(l, v),
                                u && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                            }
                            return u && (W = x,
                                S = y),
                                m
                        };
                        return i ? r(a) : a
                    }
                    var x, w, k, T, C, E, N, A, S, D, j, L, $, H, M, B, _, z, P, q = "sizzle" + 1 * new Date, F = e.document, W = 0, O = 0, I = n(), R = n(), X = n(), U = function(e, t) {
                        return e === t && (j = !0),
                            0
                    }, G = 1 << 31, Y = {}.hasOwnProperty, J = [], V = J.pop, K = J.push, Q = J.push, Z = J.slice, ee = function(e, t) {
                        for (var n = 0, r = e.length; r > n; n++)
                            if (e[n] === t)
                                return n;
                        return -1
                    }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = re.replace("w", "w#"), oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]", ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", se = new RegExp(ne + "+","g"), le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), ue = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), fe = new RegExp(ae), pe = new RegExp("^" + ie + "$"), he = {
                        ID: new RegExp("^#(" + re + ")"),
                        CLASS: new RegExp("^\\.(" + re + ")"),
                        TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + oe),
                        PSEUDO: new RegExp("^" + ae),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
                        bool: new RegExp("^(?:" + te + ")$","i"),
                        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
                    }, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, xe = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), ke = function(e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    }, Te = function() {
                        L()
                    };
                    try {
                        Q.apply(J = Z.call(F.childNodes), F.childNodes),
                            J[F.childNodes.length].nodeType
                    } catch (Ce) {
                        Q = {
                            apply: J.length ? function(e, t) {
                                K.apply(e, Z.call(t))
                            }
                                : function(e, t) {
                                for (var n = e.length, r = 0; e[n++] = t[r++]; )
                                    ;
                                e.length = n - 1
                            }
                        }
                    }
                    w = t.support = {},
                        C = t.isXML = function(e) {
                            var t = e && (e.ownerDocument || e).documentElement;
                            return t ? "HTML" !== t.nodeName : !1
                        }
                        ,
                        L = t.setDocument = function(e) {
                            var t, n, r = e ? e.ownerDocument || e : F;
                            return r !== $ && 9 === r.nodeType && r.documentElement ? ($ = r,
                                H = r.documentElement,
                                n = r.defaultView,
                            n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)),
                                M = !C(r),
                                w.attributes = i(function(e) {
                                    return e.className = "i",
                                        !e.getAttribute("className")
                                }),
                                w.getElementsByTagName = i(function(e) {
                                    return e.appendChild(r.createComment("")),
                                        !e.getElementsByTagName("*").length
                                }),
                                w.getElementsByClassName = ve.test(r.getElementsByClassName),
                                w.getById = i(function(e) {
                                    return H.appendChild(e).id = q,
                                    !r.getElementsByName || !r.getElementsByName(q).length
                                }),
                                w.getById ? (k.find.ID = function(e, t) {
                                        if ("undefined" != typeof t.getElementById && M) {
                                            var n = t.getElementById(e);
                                            return n && n.parentNode ? [n] : []
                                        }
                                    }
                                        ,
                                        k.filter.ID = function(e) {
                                            var t = e.replace(we, ke);
                                            return function(e) {
                                                return e.getAttribute("id") === t
                                            }
                                        }
                                ) : (delete k.find.ID,
                                        k.filter.ID = function(e) {
                                            var t = e.replace(we, ke);
                                            return function(e) {
                                                var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                                return n && n.value === t
                                            }
                                        }
                                ),
                                k.find.TAG = w.getElementsByTagName ? function(e, t) {
                                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                                }
                                    : function(e, t) {
                                    var n, r = [], i = 0, o = t.getElementsByTagName(e);
                                    if ("*" === e) {
                                        for (; n = o[i++]; )
                                            1 === n.nodeType && r.push(n);
                                        return r
                                    }
                                    return o
                                }
                                ,
                                k.find.CLASS = w.getElementsByClassName && function(e, t) {
                                        return M ? t.getElementsByClassName(e) : void 0
                                    }
                                ,
                                _ = [],
                                B = [],
                            (w.qsa = ve.test(r.querySelectorAll)) && (i(function(e) {
                                H.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\f]' msallowcapture=''><option selected=''></option></select>",
                                e.querySelectorAll("[msallowcapture^='']").length && B.push("[*^$]=" + ne + "*(?:''|\"\")"),
                                e.querySelectorAll("[selected]").length || B.push("\\[" + ne + "*(?:value|" + te + ")"),
                                e.querySelectorAll("[id~=" + q + "-]").length || B.push("~="),
                                e.querySelectorAll(":checked").length || B.push(":checked"),
                                e.querySelectorAll("a#" + q + "+*").length || B.push(".#.+[+~]")
                            }),
                                i(function(e) {
                                    var t = r.createElement("input");
                                    t.setAttribute("type", "hidden"),
                                        e.appendChild(t).setAttribute("name", "D"),
                                    e.querySelectorAll("[name=d]").length && B.push("name" + ne + "*[*^$|!~]?="),
                                    e.querySelectorAll(":enabled").length || B.push(":enabled", ":disabled"),
                                        e.querySelectorAll("*,:x"),
                                        B.push(",.*:")
                                })),
                            (w.matchesSelector = ve.test(z = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) {
                                w.disconnectedMatch = z.call(e, "div"),
                                    z.call(e, "[s!='']:x"),
                                    _.push("!=", ae)
                            }),
                                B = B.length && new RegExp(B.join("|")),
                                _ = _.length && new RegExp(_.join("|")),
                                t = ve.test(H.compareDocumentPosition),
                                P = t || ve.test(H.contains) ? function(e, t) {
                                    var n = 9 === e.nodeType ? e.documentElement : e
                                        , r = t && t.parentNode;
                                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                                }
                                    : function(e, t) {
                                    if (t)
                                        for (; t = t.parentNode; )
                                            if (t === e)
                                                return !0;
                                    return !1
                                }
                                ,
                                U = t ? function(e, t) {
                                    if (e === t)
                                        return j = !0,
                                            0;
                                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                                        1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === F && P(F, e) ? -1 : t === r || t.ownerDocument === F && P(F, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
                                }
                                    : function(e, t) {
                                    if (e === t)
                                        return j = !0,
                                            0;
                                    var n, i = 0, o = e.parentNode, s = t.parentNode, l = [e], u = [t];
                                    if (!o || !s)
                                        return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                                    if (o === s)
                                        return a(e, t);
                                    for (n = e; n = n.parentNode; )
                                        l.unshift(n);
                                    for (n = t; n = n.parentNode; )
                                        u.unshift(n);
                                    for (; l[i] === u[i]; )
                                        i++;
                                    return i ? a(l[i], u[i]) : l[i] === F ? -1 : u[i] === F ? 1 : 0
                                }
                                ,
                                r) : $
                        }
                        ,
                        t.matches = function(e, n) {
                            return t(e, null , null , n)
                        }
                        ,
                        t.matchesSelector = function(e, n) {
                            if ((e.ownerDocument || e) !== $ && L(e),
                                    n = n.replace(de, "='$1']"),
                                w.matchesSelector && M && (!_ || !_.test(n)) && (!B || !B.test(n)))
                                try {
                                    var r = z.call(e, n);
                                    if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                        return r
                                } catch (i) {}
                            return t(n, $, null , [e]).length > 0
                        }
                        ,
                        t.contains = function(e, t) {
                            return (e.ownerDocument || e) !== $ && L(e),
                                P(e, t)
                        }
                        ,
                        t.attr = function(e, t) {
                            (e.ownerDocument || e) !== $ && L(e);
                            var n = k.attrHandle[t.toLowerCase()]
                                , r = n && Y.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
                            return void 0 !== r ? r : w.attributes || !M ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                        }
                        ,
                        t.error = function(e) {
                            throw new Error("Syntax error, unrecognized expression: " + e)
                        }
                        ,
                        t.uniqueSort = function(e) {
                            var t, n = [], r = 0, i = 0;
                            if (j = !w.detectDuplicates,
                                    D = !w.sortStable && e.slice(0),
                                    e.sort(U),
                                    j) {
                                for (; t = e[i++]; )
                                    t === e[i] && (r = n.push(i));
                                for (; r--; )
                                    e.splice(n[r], 1)
                            }
                            return D = null ,
                                e
                        }
                        ,
                        T = t.getText = function(e) {
                            var t, n = "", r = 0, i = e.nodeType;
                            if (i) {
                                if (1 === i || 9 === i || 11 === i) {
                                    if ("string" == typeof e.textContent)
                                        return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        n += T(e)
                                } else if (3 === i || 4 === i)
                                    return e.nodeValue
                            } else
                                for (; t = e[r++]; )
                                    n += T(t);
                            return n
                        }
                        ,
                        k = t.selectors = {
                            cacheLength: 50,
                            createPseudo: r,
                            match: he,
                            attrHandle: {},
                            find: {},
                            relative: {
                                ">": {
                                    dir: "parentNode",
                                    first: !0
                                },
                                " ": {
                                    dir: "parentNode"
                                },
                                "+": {
                                    dir: "previousSibling",
                                    first: !0
                                },
                                "~": {
                                    dir: "previousSibling"
                                }
                            },
                            preFilter: {
                                ATTR: function(e) {
                                    return e[1] = e[1].replace(we, ke),
                                        e[3] = (e[3] || e[4] || e[5] || "").replace(we, ke),
                                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                        e.slice(0, 4)
                                },
                                CHILD: function(e) {
                                    return e[1] = e[1].toLowerCase(),
                                        "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                            e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                                        e
                                },
                                PSEUDO: function(e) {
                                    var t, n = !e[6] && e[2];
                                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                                        e[2] = n.slice(0, t)),
                                        e.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function(e) {
                                    var t = e.replace(we, ke).toLowerCase();
                                    return "*" === e ? function() {
                                        return !0
                                    }
                                        : function(e) {
                                        return e.nodeName && e.nodeName.toLowerCase() === t
                                    }
                                },
                                CLASS: function(e) {
                                    var t = I[e + " "];
                                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && I(e, function(e) {
                                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                                        })
                                },
                                ATTR: function(e, n, r) {
                                    return function(i) {
                                        var o = t.attr(i, e);
                                        return null == o ? "!=" === n : n ? (o += "",
                                            "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                                    }
                                },
                                CHILD: function(e, t, n, r, i) {
                                    var o = "nth" !== e.slice(0, 3)
                                        , a = "last" !== e.slice(-4)
                                        , s = "of-type" === t;
                                    return 1 === r && 0 === i ? function(e) {
                                        return !!e.parentNode
                                    }
                                        : function(t, n, l) {
                                        var u, c, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !l && !s;
                                        if (g) {
                                            if (o) {
                                                for (; m; ) {
                                                    for (d = t; d = d[m]; )
                                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                                            return !1;
                                                    h = m = "only" === e && !h && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (h = [a ? g.firstChild : g.lastChild],
                                                a && y) {
                                                for (c = g[q] || (g[q] = {}),
                                                         u = c[e] || [],
                                                         p = u[0] === W && u[1],
                                                         f = u[0] === W && u[2],
                                                         d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop(); )
                                                    if (1 === d.nodeType && ++f && d === t) {
                                                        c[e] = [W, p, f];
                                                        break
                                                    }
                                            } else if (y && (u = (t[q] || (t[q] = {}))[e]) && u[0] === W)
                                                f = u[1];
                                            else
                                                for (; (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[q] || (d[q] = {}))[e] = [W, f]),
                                                d !== t)); )
                                                    ;
                                            return f -= i,
                                            f === r || f % r === 0 && f / r >= 0
                                        }
                                    }
                                },
                                PSEUDO: function(e, n) {
                                    var i, o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                                    return o[q] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                                            k.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                                                for (var r, i = o(e, n), a = i.length; a--; )
                                                    r = ee(e, i[a]),
                                                        e[r] = !(t[r] = i[a])
                                            }) : function(e) {
                                                return o(e, 0, i)
                                            }
                                    ) : o
                                }
                            },
                            pseudos: {
                                not: r(function(e) {
                                    var t = []
                                        , n = []
                                        , i = N(e.replace(le, "$1"));
                                    return i[q] ? r(function(e, t, n, r) {
                                        for (var o, a = i(e, null , r, []), s = e.length; s--; )
                                            (o = a[s]) && (e[s] = !(t[s] = o))
                                    }) : function(e, r, o) {
                                        return t[0] = e,
                                            i(t, null , o, n),
                                            t[0] = null ,
                                            !n.pop()
                                    }
                                }),
                                has: r(function(e) {
                                    return function(n) {
                                        return t(e, n).length > 0
                                    }
                                }),
                                contains: r(function(e) {
                                    return e = e.replace(we, ke),
                                        function(t) {
                                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                                        }
                                }),
                                lang: r(function(e) {
                                    return pe.test(e || "") || t.error("unsupported lang: " + e),
                                        e = e.replace(we, ke).toLowerCase(),
                                        function(t) {
                                            var n;
                                            do
                                                if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                                    return n = n.toLowerCase(),
                                                    n === e || 0 === n.indexOf(e + "-");
                                            while ((t = t.parentNode) && 1 === t.nodeType);return !1
                                        }
                                }),
                                target: function(t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id
                                },
                                root: function(e) {
                                    return e === H
                                },
                                focus: function(e) {
                                    return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                },
                                enabled: function(e) {
                                    return e.disabled === !1
                                },
                                disabled: function(e) {
                                    return e.disabled === !0
                                },
                                checked: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                                },
                                selected: function(e) {
                                    return e.parentNode && e.parentNode.selectedIndex,
                                    e.selected === !0
                                },
                                empty: function(e) {
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        if (e.nodeType < 6)
                                            return !1;
                                    return !0
                                },
                                parent: function(e) {
                                    return !k.pseudos.empty(e)
                                },
                                header: function(e) {
                                    return ge.test(e.nodeName)
                                },
                                input: function(e) {
                                    return me.test(e.nodeName)
                                },
                                button: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && "button" === e.type || "button" === t
                                },
                                text: function(e) {
                                    var t;
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                },
                                first: u(function() {
                                    return [0]
                                }),
                                last: u(function(e, t) {
                                    return [t - 1]
                                }),
                                eq: u(function(e, t, n) {
                                    return [0 > n ? n + t : n]
                                }),
                                even: u(function(e, t) {
                                    for (var n = 0; t > n; n += 2)
                                        e.push(n);
                                    return e
                                }),
                                odd: u(function(e, t) {
                                    for (var n = 1; t > n; n += 2)
                                        e.push(n);
                                    return e
                                }),
                                lt: u(function(e, t, n) {
                                    for (var r = 0 > n ? n + t : n; --r >= 0; )
                                        e.push(r);
                                    return e
                                }),
                                gt: u(function(e, t, n) {
                                    for (var r = 0 > n ? n + t : n; ++r < t; )
                                        e.push(r);
                                    return e
                                })
                            }
                        },
                        k.pseudos.nth = k.pseudos.eq;
                    for (x in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    })
                        k.pseudos[x] = s(x);
                    for (x in {
                        submit: !0,
                        reset: !0
                    })
                        k.pseudos[x] = l(x);
                    return d.prototype = k.filters = k.pseudos,
                        k.setFilters = new d,
                        E = t.tokenize = function(e, n) {
                            var r, i, o, a, s, l, u, c = R[e + " "];
                            if (c)
                                return n ? 0 : c.slice(0);
                            for (s = e,
                                     l = [],
                                     u = k.preFilter; s; ) {
                                (!r || (i = ue.exec(s))) && (i && (s = s.slice(i[0].length) || s),
                                    l.push(o = [])),
                                    r = !1,
                                (i = ce.exec(s)) && (r = i.shift(),
                                    o.push({
                                        value: r,
                                        type: i[0].replace(le, " ")
                                    }),
                                    s = s.slice(r.length));
                                for (a in k.filter)
                                    !(i = he[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(),
                                        o.push({
                                            value: r,
                                            type: a,
                                            matches: i
                                        }),
                                        s = s.slice(r.length));
                                if (!r)
                                    break
                            }
                            return n ? s.length : s ? t.error(e) : R(e, l).slice(0)
                        }
                        ,
                        N = t.compile = function(e, t) {
                            var n, r = [], i = [], o = X[e + " "];
                            if (!o) {
                                for (t || (t = E(e)),
                                         n = t.length; n--; )
                                    o = y(t[n]),
                                        o[q] ? r.push(o) : i.push(o);
                                o = X(e, b(i, r)),
                                    o.selector = e
                            }
                            return o
                        }
                        ,
                        A = t.select = function(e, t, n, r) {
                            var i, o, a, s, l, u = "function" == typeof e && e, d = !r && E(e = u.selector || e);
                            if (n = n || [],
                                1 === d.length) {
                                if (o = d[0] = d[0].slice(0),
                                    o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && M && k.relative[o[1].type]) {
                                    if (t = (k.find.ID(a.matches[0].replace(we, ke), t) || [])[0],
                                            !t)
                                        return n;
                                    u && (t = t.parentNode),
                                        e = e.slice(o.shift().value.length)
                                }
                                for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                                    !k.relative[s = a.type]); )
                                    if ((l = k.find[s]) && (r = l(a.matches[0].replace(we, ke), be.test(o[0].type) && c(t.parentNode) || t))) {
                                        if (o.splice(i, 1),
                                                e = r.length && f(o),
                                                !e)
                                            return Q.apply(n, r),
                                                n;
                                        break
                                    }
                            }
                            return (u || N(e, d))(r, t, !M, n, be.test(e) && c(t.parentNode) || t),
                                n
                        }
                        ,
                        w.sortStable = q.split("").sort(U).join("") === q,
                        w.detectDuplicates = !!j,
                        L(),
                        w.sortDetached = i(function(e) {
                            return 1 & e.compareDocumentPosition($.createElement("div"))
                        }),
                    i(function(e) {
                        return e.innerHTML = "<a href='#'></a>",
                        "#" === e.firstChild.getAttribute("href")
                    }) || o("type|href|height|width", function(e, t, n) {
                        return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                    }),
                    w.attributes && i(function(e) {
                        return e.innerHTML = "<input/>",
                            e.firstChild.setAttribute("value", ""),
                        "" === e.firstChild.getAttribute("value")
                    }) || o("value", function(e, t, n) {
                        return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                    }),
                    i(function(e) {
                        return null == e.getAttribute("disabled")
                    }) || o(te, function(e, t, n) {
                        var r;
                        return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                    }),
                        t
                }(n);
            le.find = pe,
                le.expr = pe.selectors,
                le.expr[":"] = le.expr.pseudos,
                le.unique = pe.uniqueSort,
                le.text = pe.getText,
                le.isXMLDoc = pe.isXML,
                le.contains = pe.contains;
            var he = le.expr.match.needsContext
                , me = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
                , ge = /^.[^:#\[\.,]*$/;
            le.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === r.nodeType ? le.find.matchesSelector(r, e) ? [r] : [] : le.find.matches(e, le.grep(t, function(e) {
                        return 1 === e.nodeType
                    }))
            }
                ,
                le.fn.extend({
                    find: function(e) {
                        var t, n = [], r = this, i = r.length;
                        if ("string" != typeof e)
                            return this.pushStack(le(e).filter(function() {
                                for (t = 0; i > t; t++)
                                    if (le.contains(r[t], this))
                                        return !0
                            }));
                        for (t = 0; i > t; t++)
                            le.find(e, r[t], n);
                        return n = this.pushStack(i > 1 ? le.unique(n) : n),
                            n.selector = this.selector ? this.selector + " " + e : e,
                            n
                    },
                    filter: function(e) {
                        return this.pushStack(s(this, e || [], !1))
                    },
                    not: function(e) {
                        return this.pushStack(s(this, e || [], !0))
                    },
                    is: function(e) {
                        return !!s(this, "string" == typeof e && he.test(e) ? le(e) : e || [], !1).length
                    }
                });
            var ve, ye = n.document, be = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, xe = le.fn.init = function(e, t) {
                    var n, r;
                    if (!e)
                        return this;
                    if ("string" == typeof e) {
                        if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null , e, null ] : be.exec(e),
                            !n || !n[1] && t)
                            return !t || t.jquery ? (t || ve).find(e) : this.constructor(t).find(e);
                        if (n[1]) {
                            if (t = t instanceof le ? t[0] : t,
                                    le.merge(this, le.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ye, !0)),
                                me.test(n[1]) && le.isPlainObject(t))
                                for (n in t)
                                    le.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                            return this
                        }
                        if (r = ye.getElementById(n[2]),
                            r && r.parentNode) {
                            if (r.id !== n[2])
                                return ve.find(e);
                            this.length = 1,
                                this[0] = r
                        }
                        return this.context = ye,
                            this.selector = e,
                            this
                    }
                    return e.nodeType ? (this.context = this[0] = e,
                        this.length = 1,
                        this) : le.isFunction(e) ? "undefined" != typeof ve.ready ? ve.ready(e) : e(le) : (void 0 !== e.selector && (this.selector = e.selector,
                        this.context = e.context),
                        le.makeArray(e, this))
                }
                ;
            xe.prototype = le.fn,
                ve = le(ye);
            var we = /^(?:parents|prev(?:Until|All))/
                , ke = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            le.extend({
                dir: function(e, t, n) {
                    for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !le(i).is(n)); )
                        1 === i.nodeType && r.push(i),
                            i = i[t];
                    return r
                },
                sibling: function(e, t) {
                    for (var n = []; e; e = e.nextSibling)
                        1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
            }),
                le.fn.extend({
                    has: function(e) {
                        var t, n = le(e, this), r = n.length;
                        return this.filter(function() {
                            for (t = 0; r > t; t++)
                                if (le.contains(this, n[t]))
                                    return !0
                        })
                    },
                    closest: function(e, t) {
                        for (var n, r = 0, i = this.length, o = [], a = he.test(e) || "string" != typeof e ? le(e, t || this.context) : 0; i > r; r++)
                            for (n = this[r]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && le.find.matchesSelector(n, e))) {
                                    o.push(n);
                                    break
                                }
                        return this.pushStack(o.length > 1 ? le.unique(o) : o)
                    },
                    index: function(e) {
                        return e ? "string" == typeof e ? le.inArray(this[0], le(e)) : le.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(e, t) {
                        return this.pushStack(le.unique(le.merge(this.get(), le(e, t))))
                    },
                    addBack: function(e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                    }
                }),
                le.each({
                    parent: function(e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t : null
                    },
                    parents: function(e) {
                        return le.dir(e, "parentNode")
                    },
                    parentsUntil: function(e, t, n) {
                        return le.dir(e, "parentNode", n)
                    },
                    next: function(e) {
                        return l(e, "nextSibling")
                    },
                    prev: function(e) {
                        return l(e, "previousSibling")
                    },
                    nextAll: function(e) {
                        return le.dir(e, "nextSibling")
                    },
                    prevAll: function(e) {
                        return le.dir(e, "previousSibling")
                    },
                    nextUntil: function(e, t, n) {
                        return le.dir(e, "nextSibling", n)
                    },
                    prevUntil: function(e, t, n) {
                        return le.dir(e, "previousSibling", n)
                    },
                    siblings: function(e) {
                        return le.sibling((e.parentNode || {}).firstChild, e)
                    },
                    children: function(e) {
                        return le.sibling(e.firstChild)
                    },
                    contents: function(e) {
                        return le.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : le.merge([], e.childNodes)
                    }
                }, function(e, t) {
                    le.fn[e] = function(n, r) {
                        var i = le.map(this, t, n);
                        return "Until" !== e.slice(-5) && (r = n),
                        r && "string" == typeof r && (i = le.filter(r, i)),
                        this.length > 1 && (ke[e] || (i = le.unique(i)),
                        we.test(e) && (i = i.reverse())),
                            this.pushStack(i)
                    }
                });
            var Te = /\S+/g
                , Ce = {};
            le.Callbacks = function(e) {
                e = "string" == typeof e ? Ce[e] || u(e) : le.extend({}, e);
                var t, n, r, i, o, a, s = [], l = !e.once && [], c = function(u) {
                    for (n = e.memory && u,
                             r = !0,
                             o = a || 0,
                             a = 0,
                             i = s.length,
                             t = !0; s && i > o; o++)
                        if (s[o].apply(u[0], u[1]) === !1 && e.stopOnFalse) {
                            n = !1;
                            break
                        }
                    t = !1,
                    s && (l ? l.length && c(l.shift()) : n ? s = [] : d.disable())
                }, d = {
                    add: function() {
                        if (s) {
                            var r = s.length;
                            !function o(t) {
                                le.each(t, function(t, n) {
                                    var r = le.type(n);
                                    "function" === r ? e.unique && d.has(n) || s.push(n) : n && n.length && "string" !== r && o(n)
                                })
                            }(arguments),
                                t ? i = s.length : n && (a = r,
                                    c(n))
                        }
                        return this
                    },
                    remove: function() {
                        return s && le.each(arguments, function(e, n) {
                            for (var r; (r = le.inArray(n, s, r)) > -1; )
                                s.splice(r, 1),
                                t && (i >= r && i--,
                                o >= r && o--)
                        }),
                            this
                    },
                    has: function(e) {
                        return e ? le.inArray(e, s) > -1 : !(!s || !s.length)
                    },
                    empty: function() {
                        return s = [],
                            i = 0,
                            this
                    },
                    disable: function() {
                        return s = l = n = void 0,
                            this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return l = void 0,
                        n || d.disable(),
                            this
                    },
                    locked: function() {
                        return !l
                    },
                    fireWith: function(e, n) {
                        return !s || r && !l || (n = n || [],
                            n = [e, n.slice ? n.slice() : n],
                            t ? l.push(n) : c(n)),
                            this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments),
                            this
                    },
                    fired: function() {
                        return !!r
                    }
                };
                return d
            }
                ,
                le.extend({
                    Deferred: function(e) {
                        var t = [["resolve", "done", le.Callbacks("once memory"), "resolved"], ["reject", "fail", le.Callbacks("once memory"), "rejected"], ["notify", "progress", le.Callbacks("memory")]]
                            , n = "pending"
                            , r = {
                            state: function() {
                                return n
                            },
                            always: function() {
                                return i.done(arguments).fail(arguments),
                                    this
                            },
                            then: function() {
                                var e = arguments;
                                return le.Deferred(function(n) {
                                    le.each(t, function(t, o) {
                                        var a = le.isFunction(e[t]) && e[t];
                                        i[o[1]](function() {
                                            var e = a && a.apply(this, arguments);
                                            e && le.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                        })
                                    }),
                                        e = null
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? le.extend(e, r) : r
                            }
                        }
                            , i = {};
                        return r.pipe = r.then,
                            le.each(t, function(e, o) {
                                var a = o[2]
                                    , s = o[3];
                                r[o[1]] = a.add,
                                s && a.add(function() {
                                    n = s
                                }, t[1 ^ e][2].disable, t[2][2].lock),
                                    i[o[0]] = function() {
                                        return i[o[0] + "With"](this === i ? r : this, arguments),
                                            this
                                    }
                                    ,
                                    i[o[0] + "With"] = a.fireWith
                            }),
                            r.promise(i),
                        e && e.call(i, i),
                            i
                    },
                    when: function(e) {
                        var t, n, r, i = 0, o = Z.call(arguments), a = o.length, s = 1 !== a || e && le.isFunction(e.promise) ? a : 0, l = 1 === s ? e : le.Deferred(), u = function(e, n, r) {
                            return function(i) {
                                n[e] = this,
                                    r[e] = arguments.length > 1 ? Z.call(arguments) : i,
                                    r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                            }
                        };
                        if (a > 1)
                            for (t = new Array(a),
                                     n = new Array(a),
                                     r = new Array(a); a > i; i++)
                                o[i] && le.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, t)) : --s;
                        return s || l.resolveWith(r, o),
                            l.promise()
                    }
                });
            var Ee;
            le.fn.ready = function(e) {
                return le.ready.promise().done(e),
                    this
            }
                ,
                le.extend({
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function(e) {
                        e ? le.readyWait++ : le.ready(!0)
                    },
                    ready: function(e) {
                        if (e === !0 ? !--le.readyWait : !le.isReady) {
                            if (!ye.body)
                                return setTimeout(le.ready);
                            le.isReady = !0,
                            e !== !0 && --le.readyWait > 0 || (Ee.resolveWith(ye, [le]),
                            le.fn.triggerHandler && (le(ye).triggerHandler("ready"),
                                le(ye).off("ready")))
                        }
                    }
                }),
                le.ready.promise = function(e) {
                    if (!Ee)
                        if (Ee = le.Deferred(),
                            "complete" === ye.readyState)
                            setTimeout(le.ready);
                        else if (ye.addEventListener)
                            ye.addEventListener("DOMContentLoaded", d, !1),
                                n.addEventListener("load", d, !1);
                        else {
                            ye.attachEvent("onreadystatechange", d),
                                n.attachEvent("onload", d);
                            var t = !1;
                            try {
                                t = null == n.frameElement && ye.documentElement
                            } catch (r) {}
                            t && t.doScroll && !function i() {
                                if (!le.isReady) {
                                    try {
                                        t.doScroll("left")
                                    } catch (e) {
                                        return setTimeout(i, 50)
                                    }
                                    c(),
                                        le.ready()
                                }
                            }()
                        }
                    return Ee.promise(e)
                }
            ;
            var Ne, Ae = "undefined";
            for (Ne in le(ae))
                break;
            ae.ownLast = "0" !== Ne,
                ae.inlineBlockNeedsLayout = !1,
                le(function() {
                    var e, t, n, r;
                    n = ye.getElementsByTagName("body")[0],
                    n && n.style && (t = ye.createElement("div"),
                        r = ye.createElement("div"),
                        r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                        n.appendChild(r).appendChild(t),
                    typeof t.style.zoom !== Ae && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
                        ae.inlineBlockNeedsLayout = e = 3 === t.offsetWidth,
                    e && (n.style.zoom = 1)),
                        n.removeChild(r))
                }),
                function() {
                    var e = ye.createElement("div");
                    if (null == ae.deleteExpando) {
                        ae.deleteExpando = !0;
                        try {
                            delete e.test
                        } catch (t) {
                            ae.deleteExpando = !1
                        }
                    }
                    e = null
                }(),
                le.acceptData = function(e) {
                    var t = le.noData[(e.nodeName + " ").toLowerCase()]
                        , n = +e.nodeType || 1;
                    return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
                }
            ;
            var Se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
                , De = /([A-Z])/g;
            le.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(e) {
                    return e = e.nodeType ? le.cache[e[le.expando]] : e[le.expando],
                    !!e && !p(e)
                },
                data: function(e, t, n) {
                    return h(e, t, n)
                },
                removeData: function(e, t) {
                    return m(e, t)
                },
                _data: function(e, t, n) {
                    return h(e, t, n, !0)
                },
                _removeData: function(e, t) {
                    return m(e, t, !0)
                }
            }),
                le.fn.extend({
                    data: function(e, t) {
                        var n, r, i, o = this[0], a = o && o.attributes;
                        if (void 0 === e) {
                            if (this.length && (i = le.data(o),
                                1 === o.nodeType && !le._data(o, "parsedAttrs"))) {
                                for (n = a.length; n--; )
                                    a[n] && (r = a[n].name,
                                    0 === r.indexOf("data-") && (r = le.camelCase(r.slice(5)),
                                        f(o, r, i[r])));
                                le._data(o, "parsedAttrs", !0)
                            }
                            return i
                        }
                        return "object" == typeof e ? this.each(function() {
                            le.data(this, e)
                        }) : arguments.length > 1 ? this.each(function() {
                            le.data(this, e, t)
                        }) : o ? f(o, e, le.data(o, e)) : void 0
                    },
                    removeData: function(e) {
                        return this.each(function() {
                            le.removeData(this, e)
                        })
                    }
                }),
                le.extend({
                    queue: function(e, t, n) {
                        var r;
                        return e ? (t = (t || "fx") + "queue",
                            r = le._data(e, t),
                        n && (!r || le.isArray(n) ? r = le._data(e, t, le.makeArray(n)) : r.push(n)),
                        r || []) : void 0
                    },
                    dequeue: function(e, t) {
                        t = t || "fx";
                        var n = le.queue(e, t)
                            , r = n.length
                            , i = n.shift()
                            , o = le._queueHooks(e, t)
                            , a = function() {
                            le.dequeue(e, t)
                        };
                        "inprogress" === i && (i = n.shift(),
                            r--),
                        i && ("fx" === t && n.unshift("inprogress"),
                            delete o.stop,
                            i.call(e, a, o)),
                        !r && o && o.empty.fire()
                    },
                    _queueHooks: function(e, t) {
                        var n = t + "queueHooks";
                        return le._data(e, n) || le._data(e, n, {
                                empty: le.Callbacks("once memory").add(function() {
                                    le._removeData(e, t + "queue"),
                                        le._removeData(e, n)
                                })
                            })
                    }
                }),
                le.fn.extend({
                    queue: function(e, t) {
                        var n = 2;
                        return "string" != typeof e && (t = e,
                            e = "fx",
                            n--),
                            arguments.length < n ? le.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                                var n = le.queue(this, e, t);
                                le._queueHooks(this, e),
                                "fx" === e && "inprogress" !== n[0] && le.dequeue(this, e)
                            })
                    },
                    dequeue: function(e) {
                        return this.each(function() {
                            le.dequeue(this, e)
                        })
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", [])
                    },
                    promise: function(e, t) {
                        var n, r = 1, i = le.Deferred(), o = this, a = this.length, s = function() {
                            --r || i.resolveWith(o, [o])
                        };
                        for ("string" != typeof e && (t = e,
                            e = void 0),
                                 e = e || "fx"; a--; )
                            n = le._data(o[a], e + "queueHooks"),
                            n && n.empty && (r++,
                                n.empty.add(s));
                        return s(),
                            i.promise(t)
                    }
                });
            var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
                , Le = ["Top", "Right", "Bottom", "Left"]
                , $e = function(e, t) {
                return e = t || e,
                "none" === le.css(e, "display") || !le.contains(e.ownerDocument, e)
            }
                , He = le.access = function(e, t, n, r, i, o, a) {
                var s = 0
                    , l = e.length
                    , u = null == n;
                if ("object" === le.type(n)) {
                    i = !0;
                    for (s in n)
                        le.access(e, t, s, n[s], !0, o, a)
                } else if (void 0 !== r && (i = !0,
                    le.isFunction(r) || (a = !0),
                    u && (a ? (t.call(e, r),
                        t = null ) : (u = t,
                            t = function(e, t, n) {
                                return u.call(le(e), n)
                            }
                    )),
                        t))
                    for (; l > s; s++)
                        t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
            }
                , Me = /^(?:checkbox|radio)$/i;
            !function() {
                var e = ye.createElement("input")
                    , t = ye.createElement("div")
                    , n = ye.createDocumentFragment();
                if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                        ae.leadingWhitespace = 3 === t.firstChild.nodeType,
                        ae.tbody = !t.getElementsByTagName("tbody").length,
                        ae.htmlSerialize = !!t.getElementsByTagName("link").length,
                        ae.html5Clone = "<:nav></:nav>" !== ye.createElement("nav").cloneNode(!0).outerHTML,
                        e.type = "checkbox",
                        e.checked = !0,
                        n.appendChild(e),
                        ae.appendChecked = e.checked,
                        t.innerHTML = "<textarea>x</textarea>",
                        ae.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
                        n.appendChild(t),
                        t.innerHTML = "<input type='radio' checked='checked' name='t'/>",
                        ae.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
                        ae.noCloneEvent = !0,
                    t.attachEvent && (t.attachEvent("onclick", function() {
                        ae.noCloneEvent = !1
                    }),
                        t.cloneNode(!0).click()),
                    null == ae.deleteExpando) {
                    ae.deleteExpando = !0;
                    try {
                        delete t.test
                    } catch (r) {
                        ae.deleteExpando = !1
                    }
                }
            }(),
                function() {
                    var e, t, r = ye.createElement("div");
                    for (e in {
                        submit: !0,
                        change: !0,
                        focusin: !0
                    })
                        t = "on" + e,
                        (ae[e + "Bubbles"] = t in n) || (r.setAttribute(t, "t"),
                            ae[e + "Bubbles"] = r.attributes[t].expando === !1);
                    r = null
                }();
            var Be = /^(?:input|select|textarea)$/i
                , _e = /^key/
                , ze = /^(?:mouse|pointer|contextmenu)|click/
                , Pe = /^(?:focusinfocus|focusoutblur)$/
                , qe = /^([^.]*)(?:\.(.+)|)$/;
            le.event = {
                global: {},
                add: function(e, t, n, r, i) {
                    var o, a, s, l, u, c, d, f, p, h, m, g = le._data(e);
                    if (g) {
                        for (n.handler && (l = n,
                            n = l.handler,
                            i = l.selector),
                             n.guid || (n.guid = le.guid++),
                             (a = g.events) || (a = g.events = {}),
                             (c = g.handle) || (c = g.handle = function(e) {
                                 return typeof le === Ae || e && le.event.triggered === e.type ? void 0 : le.event.dispatch.apply(c.elem, arguments)
                             }
                                 ,
                                 c.elem = e),
                                 t = (t || "").match(Te) || [""],
                                 s = t.length; s--; )
                            o = qe.exec(t[s]) || [],
                                p = m = o[1],
                                h = (o[2] || "").split(".").sort(),
                            p && (u = le.event.special[p] || {},
                                p = (i ? u.delegateType : u.bindType) || p,
                                u = le.event.special[p] || {},
                                d = le.extend({
                                    type: p,
                                    origType: m,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext: i && le.expr.match.needsContext.test(i),
                                    namespace: h.join(".")
                                }, l),
                            (f = a[p]) || (f = a[p] = [],
                                f.delegateCount = 0,
                            u.setup && u.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))),
                            u.add && (u.add.call(e, d),
                            d.handler.guid || (d.handler.guid = n.guid)),
                                i ? f.splice(f.delegateCount++, 0, d) : f.push(d),
                                le.event.global[p] = !0);
                        e = null
                    }
                },
                remove: function(e, t, n, r, i) {
                    var o, a, s, l, u, c, d, f, p, h, m, g = le.hasData(e) && le._data(e);
                    if (g && (c = g.events)) {
                        for (t = (t || "").match(Te) || [""],
                                 u = t.length; u--; )
                            if (s = qe.exec(t[u]) || [],
                                    p = m = s[1],
                                    h = (s[2] || "").split(".").sort(),
                                    p) {
                                for (d = le.event.special[p] || {},
                                         p = (r ? d.delegateType : d.bindType) || p,
                                         f = c[p] || [],
                                         s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                         l = o = f.length; o--; )
                                    a = f[o],
                                    !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1),
                                    a.selector && f.delegateCount--,
                                    d.remove && d.remove.call(e, a));
                                l && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || le.removeEvent(e, p, g.handle),
                                    delete c[p])
                            } else
                                for (p in c)
                                    le.event.remove(e, p + t[u], n, r, !0);
                        le.isEmptyObject(c) && (delete g.handle,
                            le._removeData(e, "events"))
                    }
                },
                trigger: function(e, t, r, i) {
                    var o, a, s, l, u, c, d, f = [r || ye], p = oe.call(e, "type") ? e.type : e, h = oe.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (s = c = r = r || ye,
                        3 !== r.nodeType && 8 !== r.nodeType && !Pe.test(p + le.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."),
                            p = h.shift(),
                            h.sort()),
                            a = p.indexOf(":") < 0 && "on" + p,
                            e = e[le.expando] ? e : new le.Event(p,"object" == typeof e && e),
                            e.isTrigger = i ? 2 : 3,
                            e.namespace = h.join("."),
                            e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
                            e.result = void 0,
                        e.target || (e.target = r),
                            t = null == t ? [e] : le.makeArray(t, [e]),
                            u = le.event.special[p] || {},
                        i || !u.trigger || u.trigger.apply(r, t) !== !1)) {
                        if (!i && !u.noBubble && !le.isWindow(r)) {
                            for (l = u.delegateType || p,
                                 Pe.test(l + p) || (s = s.parentNode); s; s = s.parentNode)
                                f.push(s),
                                    c = s;
                            c === (r.ownerDocument || ye) && f.push(c.defaultView || c.parentWindow || n)
                        }
                        for (d = 0; (s = f[d++]) && !e.isPropagationStopped(); )
                            e.type = d > 1 ? l : u.bindType || p,
                                o = (le._data(s, "events") || {})[e.type] && le._data(s, "handle"),
                            o && o.apply(s, t),
                                o = a && s[a],
                            o && o.apply && le.acceptData(s) && (e.result = o.apply(s, t),
                            e.result === !1 && e.preventDefault());
                        if (e.type = p,
                            !i && !e.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), t) === !1) && le.acceptData(r) && a && r[p] && !le.isWindow(r)) {
                            c = r[a],
                            c && (r[a] = null ),
                                le.event.triggered = p;
                            try {
                                r[p]()
                            } catch (m) {}
                            le.event.triggered = void 0,
                            c && (r[a] = c)
                        }
                        return e.result
                    }
                },
                dispatch: function(e) {
                    e = le.event.fix(e);
                    var t, n, r, i, o, a = [], s = Z.call(arguments), l = (le._data(this, "events") || {})[e.type] || [], u = le.event.special[e.type] || {};
                    if (s[0] = e,
                            e.delegateTarget = this,
                        !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                        for (a = le.event.handlers.call(this, e, l),
                                 t = 0; (i = a[t++]) && !e.isPropagationStopped(); )
                            for (e.currentTarget = i.elem,
                                     o = 0; (r = i.handlers[o++]) && !e.isImmediatePropagationStopped(); )
                                (!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r,
                                    e.data = r.data,
                                    n = ((le.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s),
                                void 0 !== n && (e.result = n) === !1 && (e.preventDefault(),
                                    e.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, e),
                            e.result
                    }
                },
                handlers: function(e, t) {
                    var n, r, i, o, a = [], s = t.delegateCount, l = e.target;
                    if (s && l.nodeType && (!e.button || "click" !== e.type))
                        for (; l != this; l = l.parentNode || this)
                            if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                                for (i = [],
                                         o = 0; s > o; o++)
                                    r = t[o],
                                        n = r.selector + " ",
                                    void 0 === i[n] && (i[n] = r.needsContext ? le(n, this).index(l) >= 0 : le.find(n, this, null , [l]).length),
                                    i[n] && i.push(r);
                                i.length && a.push({
                                    elem: l,
                                    handlers: i
                                })
                            }
                    return s < t.length && a.push({
                        elem: this,
                        handlers: t.slice(s)
                    }),
                        a
                },
                fix: function(e) {
                    if (e[le.expando])
                        return e;
                    var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
                    for (a || (this.fixHooks[i] = a = ze.test(i) ? this.mouseHooks : _e.test(i) ? this.keyHooks : {}),
                             r = a.props ? this.props.concat(a.props) : this.props,
                             e = new le.Event(o),
                             t = r.length; t--; )
                        n = r[t],
                            e[n] = o[n];
                    return e.target || (e.target = o.srcElement || ye),
                    3 === e.target.nodeType && (e.target = e.target.parentNode),
                        e.metaKey = !!e.metaKey,
                        a.filter ? a.filter(e, o) : e
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                            e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, t) {
                        var n, r, i, o = t.button, a = t.fromElement;
                        return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || ye,
                            i = r.documentElement,
                            n = r.body,
                            e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0),
                            e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)),
                        !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a),
                        e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                            e
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== y() && this.focus)
                                try {
                                    return this.focus(),
                                        !1
                                } catch (e) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            return this === y() && this.blur ? (this.blur(),
                                !1) : void 0
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            return le.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                                !1) : void 0
                        },
                        _default: function(e) {
                            return le.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function(e, t, n, r) {
                    var i = le.extend(new le.Event, n, {
                        type: e,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    r ? le.event.trigger(i, null , t) : le.event.dispatch.call(t, i),
                    i.isDefaultPrevented() && n.preventDefault()
                }
            },
                le.removeEvent = ye.removeEventListener ? function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n, !1)
                }
                    : function(e, t, n) {
                    var r = "on" + t;
                    e.detachEvent && (typeof e[r] === Ae && (e[r] = null ),
                        e.detachEvent(r, n))
                }
                ,
                le.Event = function(e, t) {
                    return this instanceof le.Event ? (e && e.type ? (this.originalEvent = e,
                        this.type = e.type,
                        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? g : v) : this.type = e,
                    t && le.extend(this, t),
                        this.timeStamp = e && e.timeStamp || le.now(),
                        void (this[le.expando] = !0)) : new le.Event(e,t)
                }
                ,
                le.Event.prototype = {
                    isDefaultPrevented: v,
                    isPropagationStopped: v,
                    isImmediatePropagationStopped: v,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = g,
                        e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = g,
                        e && (e.stopPropagation && e.stopPropagation(),
                            e.cancelBubble = !0)
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = g,
                        e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
                            this.stopPropagation()
                    }
                },
                le.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, function(e, t) {
                    le.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                            var n, r = this, i = e.relatedTarget, o = e.handleObj;
                            return (!i || i !== r && !le.contains(r, i)) && (e.type = o.origType,
                                n = o.handler.apply(this, arguments),
                                e.type = t),
                                n
                        }
                    }
                }),
            ae.submitBubbles || (le.event.special.submit = {
                setup: function() {
                    return le.nodeName(this, "form") ? !1 : void le.event.add(this, "click._submit keypress._submit", function(e) {
                        var t = e.target
                            , n = le.nodeName(t, "input") || le.nodeName(t, "button") ? t.form : void 0;
                        n && !le._data(n, "submitBubbles") && (le.event.add(n, "submit._submit", function(e) {
                            e._submit_bubble = !0
                        }),
                            le._data(n, "submitBubbles", !0))
                    })
                },
                postDispatch: function(e) {
                    e._submit_bubble && (delete e._submit_bubble,
                    this.parentNode && !e.isTrigger && le.event.simulate("submit", this.parentNode, e, !0))
                },
                teardown: function() {
                    return le.nodeName(this, "form") ? !1 : void le.event.remove(this, "._submit")
                }
            }),
            ae.changeBubbles || (le.event.special.change = {
                setup: function() {
                    return Be.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (le.event.add(this, "propertychange._change", function(e) {
                        "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                    }),
                        le.event.add(this, "click._change", function(e) {
                            this._just_changed && !e.isTrigger && (this._just_changed = !1),
                                le.event.simulate("change", this, e, !0)
                        })),
                        !1) : void le.event.add(this, "beforeactivate._change", function(e) {
                        var t = e.target;
                        Be.test(t.nodeName) && !le._data(t, "changeBubbles") && (le.event.add(t, "change._change", function(e) {
                            !this.parentNode || e.isSimulated || e.isTrigger || le.event.simulate("change", this.parentNode, e, !0)
                        }),
                            le._data(t, "changeBubbles", !0))
                    })
                },
                handle: function(e) {
                    var t = e.target;
                    return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
                },
                teardown: function() {
                    return le.event.remove(this, "._change"),
                        !Be.test(this.nodeName)
                }
            }),
            ae.focusinBubbles || le.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(e) {
                    le.event.simulate(t, e.target, le.event.fix(e), !0)
                };
                le.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this
                            , i = le._data(r, t);
                        i || r.addEventListener(e, n, !0),
                            le._data(r, t, (i || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this
                            , i = le._data(r, t) - 1;
                        i ? le._data(r, t, i) : (r.removeEventListener(e, n, !0),
                            le._removeData(r, t))
                    }
                }
            }),
                le.fn.extend({
                    on: function(e, t, n, r, i) {
                        var o, a;
                        if ("object" == typeof e) {
                            "string" != typeof t && (n = n || t,
                                t = void 0);
                            for (o in e)
                                this.on(o, t, n, e[o], i);
                            return this
                        }
                        if (null == n && null == r ? (r = t,
                                n = t = void 0) : null == r && ("string" == typeof t ? (r = n,
                                n = void 0) : (r = n,
                                n = t,
                                t = void 0)),
                            r === !1)
                            r = v;
                        else if (!r)
                            return this;
                        return 1 === i && (a = r,
                            r = function(e) {
                                return le().off(e),
                                    a.apply(this, arguments)
                            }
                            ,
                            r.guid = a.guid || (a.guid = le.guid++)),
                            this.each(function() {
                                le.event.add(this, e, r, n, t)
                            })
                    },
                    one: function(e, t, n, r) {
                        return this.on(e, t, n, r, 1)
                    },
                    off: function(e, t, n) {
                        var r, i;
                        if (e && e.preventDefault && e.handleObj)
                            return r = e.handleObj,
                                le(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                                this;
                        if ("object" == typeof e) {
                            for (i in e)
                                this.off(i, t, e[i]);
                            return this
                        }
                        return (t === !1 || "function" == typeof t) && (n = t,
                            t = void 0),
                        n === !1 && (n = v),
                            this.each(function() {
                                le.event.remove(this, e, n, t)
                            })
                    },
                    trigger: function(e, t) {
                        return this.each(function() {
                            le.event.trigger(e, t, this)
                        })
                    },
                    triggerHandler: function(e, t) {
                        var n = this[0];
                        return n ? le.event.trigger(e, t, n, !0) : void 0
                    }
                });
            var Fe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
                , We = / jQuery\d+="(?:null|\d+)"/g
                , Oe = new RegExp("<(?:" + Fe + ")[\\s/>]","i")
                , Ie = /^\s+/
                , Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
                , Xe = /<([\w:]+)/
                , Ue = /<tbody/i
                , Ge = /<|&#?\w+;/
                , Ye = /<(?:script|style|link)/i
                , Je = /checked\s*(?:[^=]|=\s*.checked.)/i
                , Ve = /^$|\/(?:java|ecma)script/i
                , Ke = /^true\/(.*)/
                , Qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
                , Ze = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ae.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            }
                , et = b(ye)
                , tt = et.appendChild(ye.createElement("div"));
            Ze.optgroup = Ze.option,
                Ze.tbody = Ze.tfoot = Ze.colgroup = Ze.caption = Ze.thead,
                Ze.th = Ze.td,
                le.extend({
                    clone: function(e, t, n) {
                        var r, i, o, a, s, l = le.contains(e.ownerDocument, e);
                        if (ae.html5Clone || le.isXMLDoc(e) || !Oe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (tt.innerHTML = e.outerHTML,
                                tt.removeChild(o = tt.firstChild)),
                                !(ae.noCloneEvent && ae.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || le.isXMLDoc(e)))
                            for (r = x(o),
                                     s = x(e),
                                     a = 0; null != (i = s[a]); ++a)
                                r[a] && A(i, r[a]);
                        if (t)
                            if (n)
                                for (s = s || x(e),
                                         r = r || x(o),
                                         a = 0; null != (i = s[a]); a++)
                                    N(i, r[a]);
                            else
                                N(e, o);
                        return r = x(o, "script"),
                        r.length > 0 && E(r, !l && x(e, "script")),
                            r = s = i = null ,
                            o
                    },
                    buildFragment: function(e, t, n, r) {
                        for (var i, o, a, s, l, u, c, d = e.length, f = b(t), p = [], h = 0; d > h; h++)
                            if (o = e[h],
                                o || 0 === o)
                                if ("object" === le.type(o))
                                    le.merge(p, o.nodeType ? [o] : o);
                                else if (Ge.test(o)) {
                                    for (s = s || f.appendChild(t.createElement("div")),
                                             l = (Xe.exec(o) || ["", ""])[1].toLowerCase(),
                                             c = Ze[l] || Ze._default,
                                             s.innerHTML = c[1] + o.replace(Re, "<$1></$2>") + c[2],
                                             i = c[0]; i--; )
                                        s = s.lastChild;
                                    if (!ae.leadingWhitespace && Ie.test(o) && p.push(t.createTextNode(Ie.exec(o)[0])),
                                            !ae.tbody)
                                        for (o = "table" !== l || Ue.test(o) ? "<table>" !== c[1] || Ue.test(o) ? 0 : s : s.firstChild,
                                                 i = o && o.childNodes.length; i--; )
                                            le.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
                                    for (le.merge(p, s.childNodes),
                                             s.textContent = ""; s.firstChild; )
                                        s.removeChild(s.firstChild);
                                    s = f.lastChild
                                } else
                                    p.push(t.createTextNode(o));
                        for (s && f.removeChild(s),
                             ae.appendChecked || le.grep(x(p, "input"), w),
                                 h = 0; o = p[h++]; )
                            if ((!r || -1 === le.inArray(o, r)) && (a = le.contains(o.ownerDocument, o),
                                    s = x(f.appendChild(o), "script"),
                                a && E(s),
                                    n))
                                for (i = 0; o = s[i++]; )
                                    Ve.test(o.type || "") && n.push(o);
                        return s = null ,
                            f
                    },
                    cleanData: function(e, t) {
                        for (var n, r, i, o, a = 0, s = le.expando, l = le.cache, u = ae.deleteExpando, c = le.event.special; null != (n = e[a]); a++)
                            if ((t || le.acceptData(n)) && (i = n[s],
                                    o = i && l[i])) {
                                if (o.events)
                                    for (r in o.events)
                                        c[r] ? le.event.remove(n, r) : le.removeEvent(n, r, o.handle);
                                l[i] && (delete l[i],
                                    u ? delete n[s] : typeof n.removeAttribute !== Ae ? n.removeAttribute(s) : n[s] = null ,
                                    Q.push(i))
                            }
                    }
                }),
                le.fn.extend({
                    text: function(e) {
                        return He(this, function(e) {
                            return void 0 === e ? le.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ye).createTextNode(e))
                        }, null , e, arguments.length)
                    },
                    append: function() {
                        return this.domManip(arguments, function(e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = k(this, e);
                                t.appendChild(e)
                            }
                        })
                    },
                    prepend: function() {
                        return this.domManip(arguments, function(e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = k(this, e);
                                t.insertBefore(e, t.firstChild)
                            }
                        })
                    },
                    before: function() {
                        return this.domManip(arguments, function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        })
                    },
                    after: function() {
                        return this.domManip(arguments, function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                        })
                    },
                    remove: function(e, t) {
                        for (var n, r = e ? le.filter(e, this) : this, i = 0; null != (n = r[i]); i++)
                            t || 1 !== n.nodeType || le.cleanData(x(n)),
                            n.parentNode && (t && le.contains(n.ownerDocument, n) && E(x(n, "script")),
                                n.parentNode.removeChild(n));
                        return this
                    },
                    empty: function() {
                        for (var e, t = 0; null != (e = this[t]); t++) {
                            for (1 === e.nodeType && le.cleanData(x(e, !1)); e.firstChild; )
                                e.removeChild(e.firstChild);
                            e.options && le.nodeName(e, "select") && (e.options.length = 0)
                        }
                        return this
                    },
                    clone: function(e, t) {
                        return e = null == e ? !1 : e,
                            t = null == t ? e : t,
                            this.map(function() {
                                return le.clone(this, e, t)
                            })
                    },
                    html: function(e) {
                        return He(this, function(e) {
                            var t = this[0] || {}
                                , n = 0
                                , r = this.length;
                            if (void 0 === e)
                                return 1 === t.nodeType ? t.innerHTML.replace(We, "") : void 0;
                            if ("string" == typeof e && !Ye.test(e) && (ae.htmlSerialize || !Oe.test(e)) && (ae.leadingWhitespace || !Ie.test(e)) && !Ze[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = e.replace(Re, "<$1></$2>");
                                try {
                                    for (; r > n; n++)
                                        t = this[n] || {},
                                        1 === t.nodeType && (le.cleanData(x(t, !1)),
                                            t.innerHTML = e);
                                    t = 0
                                } catch (i) {}
                            }
                            t && this.empty().append(e)
                        }, null , e, arguments.length)
                    },
                    replaceWith: function() {
                        var e = arguments[0];
                        return this.domManip(arguments, function(t) {
                            e = this.parentNode,
                                le.cleanData(x(this)),
                            e && e.replaceChild(t, this)
                        }),
                            e && (e.length || e.nodeType) ? this : this.remove()
                    },
                    detach: function(e) {
                        return this.remove(e, !0)
                    },
                    domManip: function(e, t) {
                        e = ee.apply([], e);
                        var n, r, i, o, a, s, l = 0, u = this.length, c = this, d = u - 1, f = e[0], p = le.isFunction(f);
                        if (p || u > 1 && "string" == typeof f && !ae.checkClone && Je.test(f))
                            return this.each(function(n) {
                                var r = c.eq(n);
                                p && (e[0] = f.call(this, n, r.html())),
                                    r.domManip(e, t)
                            });
                        if (u && (s = le.buildFragment(e, this[0].ownerDocument, !1, this),
                                n = s.firstChild,
                            1 === s.childNodes.length && (s = n),
                                n)) {
                            for (o = le.map(x(s, "script"), T),
                                     i = o.length; u > l; l++)
                                r = s,
                                l !== d && (r = le.clone(r, !0, !0),
                                i && le.merge(o, x(r, "script"))),
                                    t.call(this[l], r, l);
                            if (i)
                                for (a = o[o.length - 1].ownerDocument,
                                         le.map(o, C),
                                         l = 0; i > l; l++)
                                    r = o[l],
                                    Ve.test(r.type || "") && !le._data(r, "globalEval") && le.contains(a, r) && (r.src ? le._evalUrl && le._evalUrl(r.src) : le.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Qe, "")));
                            s = n = null
                        }
                        return this
                    }
                }),
                le.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, function(e, t) {
                    le.fn[e] = function(e) {
                        for (var n, r = 0, i = [], o = le(e), a = o.length - 1; a >= r; r++)
                            n = r === a ? this : this.clone(!0),
                                le(o[r])[t](n),
                                te.apply(i, n.get());
                        return this.pushStack(i)
                    }
                });
            var nt, rt = {};
            !function() {
                var e;
                ae.shrinkWrapBlocks = function() {
                    if (null != e)
                        return e;
                    e = !1;
                    var t, n, r;
                    return n = ye.getElementsByTagName("body")[0],
                        n && n.style ? (t = ye.createElement("div"),
                            r = ye.createElement("div"),
                            r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                            n.appendChild(r).appendChild(t),
                        typeof t.style.zoom !== Ae && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                            t.appendChild(ye.createElement("div")).style.width = "5px",
                            e = 3 !== t.offsetWidth),
                            n.removeChild(r),
                            e) : void 0
                }
            }();
            var it, ot, at = /^margin/, st = new RegExp("^(" + je + ")(?!px)[a-z%]+$","i"), lt = /^(top|right|bottom|left)$/;
            n.getComputedStyle ? (it = function(e) {
                    return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null ) : n.getComputedStyle(e, null )
                }
                    ,
                    ot = function(e, t, n) {
                        var r, i, o, a, s = e.style;
                        return n = n || it(e),
                            a = n ? n.getPropertyValue(t) || n[t] : void 0,
                        n && ("" !== a || le.contains(e.ownerDocument, e) || (a = le.style(e, t)),
                        st.test(a) && at.test(t) && (r = s.width,
                            i = s.minWidth,
                            o = s.maxWidth,
                            s.minWidth = s.maxWidth = s.width = a,
                            a = n.width,
                            s.width = r,
                            s.minWidth = i,
                            s.maxWidth = o)),
                            void 0 === a ? a : a + ""
                    }
            ) : ye.documentElement.currentStyle && (it = function(e) {
                    return e.currentStyle
                }
                    ,
                    ot = function(e, t, n) {
                        var r, i, o, a, s = e.style;
                        return n = n || it(e),
                            a = n ? n[t] : void 0,
                        null == a && s && s[t] && (a = s[t]),
                        st.test(a) && !lt.test(t) && (r = s.left,
                            i = e.runtimeStyle,
                            o = i && i.left,
                        o && (i.left = e.currentStyle.left),
                            s.left = "fontSize" === t ? "1em" : a,
                            a = s.pixelLeft + "px",
                            s.left = r,
                        o && (i.left = o)),
                            void 0 === a ? a : a + "" || "auto"
                    }
            ),
                function() {
                    function e() {
                        var e, t, r, i;
                        t = ye.getElementsByTagName("body")[0],
                        t && t.style && (e = ye.createElement("div"),
                            r = ye.createElement("div"),
                            r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                            t.appendChild(r).appendChild(e),
                            e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                            o = a = !1,
                            l = !0,
                        n.getComputedStyle && (o = "1%" !== (n.getComputedStyle(e, null ) || {}).top,
                            a = "4px" === (n.getComputedStyle(e, null ) || {
                                    width: "4px"
                                }).width,
                            i = e.appendChild(ye.createElement("div")),
                            i.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                            i.style.marginRight = i.style.width = "0",
                            e.style.width = "1px",
                            l = !parseFloat((n.getComputedStyle(i, null ) || {}).marginRight),
                            e.removeChild(i)),
                            e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                            i = e.getElementsByTagName("td"),
                            i[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                            s = 0 === i[0].offsetHeight,
                        s && (i[0].style.display = "",
                            i[1].style.display = "none",
                            s = 0 === i[0].offsetHeight),
                            t.removeChild(r))
                    }
                    var t, r, i, o, a, s, l;
                    t = ye.createElement("div"),
                        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                        i = t.getElementsByTagName("a")[0],
                        r = i && i.style,
                    r && (r.cssText = "float:left;opacity:.5",
                        ae.opacity = "0.5" === r.opacity,
                        ae.cssFloat = !!r.cssFloat,
                        t.style.backgroundClip = "content-box",
                        t.cloneNode(!0).style.backgroundClip = "",
                        ae.clearCloneStyle = "content-box" === t.style.backgroundClip,
                        ae.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing,
                        le.extend(ae, {
                            reliableHiddenOffsets: function() {
                                return null == s && e(),
                                    s
                            },
                            boxSizingReliable: function() {
                                return null == a && e(),
                                    a
                            },
                            pixelPosition: function() {
                                return null == o && e(),
                                    o
                            },
                            reliableMarginRight: function() {
                                return null == l && e(),
                                    l
                            }
                        }))
                }(),
                le.swap = function(e, t, n, r) {
                    var i, o, a = {};
                    for (o in t)
                        a[o] = e.style[o],
                            e.style[o] = t[o];
                    i = n.apply(e, r || []);
                    for (o in t)
                        e.style[o] = a[o];
                    return i
                }
            ;
            var ut = /alpha\([^)]*\)/i
                , ct = /opacity\s*=\s*([^)]*)/
                , dt = /^(none|table(?!-c[ea]).+)/
                , ft = new RegExp("^(" + je + ")(.*)$","i")
                , pt = new RegExp("^([+-])=(" + je + ")","i")
                , ht = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }
                , mt = {
                letterSpacing: "0",
                fontWeight: "400"
            }
                , gt = ["Webkit", "O", "Moz", "ms"];
            le.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = ot(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": ae.cssFloat ? "cssFloat" : "styleFloat"
                },
                style: function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, o, a, s = le.camelCase(t), l = e.style;
                        if (t = le.cssProps[s] || (le.cssProps[s] = L(l, s)),
                                a = le.cssHooks[t] || le.cssHooks[s],
                            void 0 === n)
                            return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                        if (o = typeof n,
                            "string" === o && (i = pt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(le.css(e, t)),
                                o = "number"),
                            null != n && n === n && ("number" !== o || le.cssNumber[s] || (n += "px"),
                            ae.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                                !(a && "set"in a && void 0 === (n = a.set(e, n, r)))))
                            try {
                                l[t] = n
                            } catch (u) {}
                    }
                },
                css: function(e, t, n, r) {
                    var i, o, a, s = le.camelCase(t);
                    return t = le.cssProps[s] || (le.cssProps[s] = L(e.style, s)),
                        a = le.cssHooks[t] || le.cssHooks[s],
                    a && "get"in a && (o = a.get(e, !0, n)),
                    void 0 === o && (o = ot(e, t, r)),
                    "normal" === o && t in mt && (o = mt[t]),
                        "" === n || n ? (i = parseFloat(o),
                            n === !0 || le.isNumeric(i) ? i || 0 : o) : o
                }
            }),
                le.each(["height", "width"], function(e, t) {
                    le.cssHooks[t] = {
                        get: function(e, n, r) {
                            return n ? dt.test(le.css(e, "display")) && 0 === e.offsetWidth ? le.swap(e, ht, function() {
                                return B(e, t, r)
                            }) : B(e, t, r) : void 0
                        },
                        set: function(e, n, r) {
                            var i = r && it(e);
                            return H(e, n, r ? M(e, t, r, ae.boxSizing && "border-box" === le.css(e, "boxSizing", !1, i), i) : 0)
                        }
                    }
                }),
            ae.opacity || (le.cssHooks.opacity = {
                get: function(e, t) {
                    return ct.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
                },
                set: function(e, t) {
                    var n = e.style
                        , r = e.currentStyle
                        , i = le.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
                        , o = r && r.filter || n.filter || "";
                    n.zoom = 1,
                    (t >= 1 || "" === t) && "" === le.trim(o.replace(ut, "")) && n.removeAttribute && (n.removeAttribute("filter"),
                    "" === t || r && !r.filter) || (n.filter = ut.test(o) ? o.replace(ut, i) : o + " " + i)
                }
            }),
                le.cssHooks.marginRight = j(ae.reliableMarginRight, function(e, t) {
                    return t ? le.swap(e, {
                        display: "inline-block"
                    }, ot, [e, "marginRight"]) : void 0
                }),
                le.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, function(e, t) {
                    le.cssHooks[e + t] = {
                        expand: function(n) {
                            for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                                i[e + Le[r] + t] = o[r] || o[r - 2] || o[0];
                            return i
                        }
                    },
                    at.test(e) || (le.cssHooks[e + t].set = H)
                }),
                le.fn.extend({
                    css: function(e, t) {
                        return He(this, function(e, t, n) {
                            var r, i, o = {}, a = 0;
                            if (le.isArray(t)) {
                                for (r = it(e),
                                         i = t.length; i > a; a++)
                                    o[t[a]] = le.css(e, t[a], !1, r);
                                return o
                            }
                            return void 0 !== n ? le.style(e, t, n) : le.css(e, t)
                        }, e, t, arguments.length > 1)
                    },
                    show: function() {
                        return $(this, !0)
                    },
                    hide: function() {
                        return $(this)
                    },
                    toggle: function(e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                            $e(this) ? le(this).show() : le(this).hide()
                        })
                    }
                }),
                le.Tween = _,
                _.prototype = {
                    constructor: _,
                    init: function(e, t, n, r, i, o) {
                        this.elem = e,
                            this.prop = n,
                            this.easing = i || "swing",
                            this.options = t,
                            this.start = this.now = this.cur(),
                            this.end = r,
                            this.unit = o || (le.cssNumber[n] ? "" : "px")
                    },
                    cur: function() {
                        var e = _.propHooks[this.prop];
                        return e && e.get ? e.get(this) : _.propHooks._default.get(this)
                    },
                    run: function(e) {
                        var t, n = _.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = le.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                            this.now = (this.end - this.start) * t + this.start,
                        this.options.step && this.options.step.call(this.elem, this.now, this),
                            n && n.set ? n.set(this) : _.propHooks._default.set(this),
                            this
                    }
                },
                _.prototype.init.prototype = _.prototype,
                _.propHooks = {
                    _default: {
                        get: function(e) {
                            var t;
                            return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = le.css(e.elem, e.prop, ""),
                                t && "auto" !== t ? t : 0) : e.elem[e.prop]
                        },
                        set: function(e) {
                            le.fx.step[e.prop] ? le.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[le.cssProps[e.prop]] || le.cssHooks[e.prop]) ? le.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                        }
                    }
                },
                _.propHooks.scrollTop = _.propHooks.scrollLeft = {
                    set: function(e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                    }
                },
                le.easing = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    }
                },
                le.fx = _.prototype.init,
                le.fx.step = {};
            var vt, yt, bt = /^(?:toggle|show|hide)$/, xt = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$","i"), wt = /queueHooks$/, kt = [F], Tt = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t)
                        , r = n.cur()
                        , i = xt.exec(t)
                        , o = i && i[3] || (le.cssNumber[e] ? "" : "px")
                        , a = (le.cssNumber[e] || "px" !== o && +r) && xt.exec(le.css(n.elem, e))
                        , s = 1
                        , l = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3],
                            i = i || [],
                            a = +r || 1;
                        do
                            s = s || ".5",
                                a /= s,
                                le.style(n.elem, e, a + o);
                        while (s !== (s = n.cur() / r) && 1 !== s && --l)
                    }
                    return i && (a = n.start = +a || +r || 0,
                        n.unit = o,
                        n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]),
                        n
                }
                ]
            };
            le.Animation = le.extend(O, {
                tweener: function(e, t) {
                    le.isFunction(e) ? (t = e,
                        e = ["*"]) : e = e.split(" ");
                    for (var n, r = 0, i = e.length; i > r; r++)
                        n = e[r],
                            Tt[n] = Tt[n] || [],
                            Tt[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? kt.unshift(e) : kt.push(e)
                }
            }),
                le.speed = function(e, t, n) {
                    var r = e && "object" == typeof e ? le.extend({}, e) : {
                        complete: n || !n && t || le.isFunction(e) && e,
                        duration: e,
                        easing: n && t || t && !le.isFunction(t) && t
                    };
                    return r.duration = le.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in le.fx.speeds ? le.fx.speeds[r.duration] : le.fx.speeds._default,
                    (null == r.queue || r.queue === !0) && (r.queue = "fx"),
                        r.old = r.complete,
                        r.complete = function() {
                            le.isFunction(r.old) && r.old.call(this),
                            r.queue && le.dequeue(this, r.queue)
                        }
                        ,
                        r
                }
                ,
                le.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter($e).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function(e, t, n, r) {
                        var i = le.isEmptyObject(e)
                            , o = le.speed(t, n, r)
                            , a = function() {
                            var t = O(this, le.extend({}, e), o);
                            (i || le._data(this, "finish")) && t.stop(!0)
                        };
                        return a.finish = a,
                            i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                    },
                    stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop,
                                t(n)
                        };
                        return "string" != typeof e && (n = t,
                            t = e,
                            e = void 0),
                        t && e !== !1 && this.queue(e || "fx", []),
                            this.each(function() {
                                var t = !0
                                    , i = null != e && e + "queueHooks"
                                    , o = le.timers
                                    , a = le._data(this);
                                if (i)
                                    a[i] && a[i].stop && r(a[i]);
                                else
                                    for (i in a)
                                        a[i] && a[i].stop && wt.test(i) && r(a[i]);
                                for (i = o.length; i--; )
                                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                                        t = !1,
                                        o.splice(i, 1));
                                (t || !n) && le.dequeue(this, e)
                            })
                    },
                    finish: function(e) {
                        return e !== !1 && (e = e || "fx"),
                            this.each(function() {
                                var t, n = le._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = le.timers, a = r ? r.length : 0;
                                for (n.finish = !0,
                                         le.queue(this, e, []),
                                     i && i.stop && i.stop.call(this, !0),
                                         t = o.length; t--; )
                                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                                        o.splice(t, 1));
                                for (t = 0; a > t; t++)
                                    r[t] && r[t].finish && r[t].finish.call(this);
                                delete n.finish
                            })
                    }
                }),
                le.each(["toggle", "show", "hide"], function(e, t) {
                    var n = le.fn[t];
                    le.fn[t] = function(e, r, i) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, r, i)
                    }
                }),
                le.each({
                    slideDown: P("show"),
                    slideUp: P("hide"),
                    slideToggle: P("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(e, t) {
                    le.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }),
                le.timers = [],
                le.fx.tick = function() {
                    var e, t = le.timers, n = 0;
                    for (vt = le.now(); n < t.length; n++)
                        e = t[n],
                        e() || t[n] !== e || t.splice(n--, 1);
                    t.length || le.fx.stop(),
                        vt = void 0
                }
                ,
                le.fx.timer = function(e) {
                    le.timers.push(e),
                        e() ? le.fx.start() : le.timers.pop()
                }
                ,
                le.fx.interval = 13,
                le.fx.start = function() {
                    yt || (yt = setInterval(le.fx.tick, le.fx.interval))
                }
                ,
                le.fx.stop = function() {
                    clearInterval(yt),
                        yt = null
                }
                ,
                le.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                },
                le.fn.delay = function(e, t) {
                    return e = le.fx ? le.fx.speeds[e] || e : e,
                        t = t || "fx",
                        this.queue(t, function(t, n) {
                            var r = setTimeout(t, e);
                            n.stop = function() {
                                clearTimeout(r)
                            }
                        })
                }
                ,
                function() {
                    var e, t, n, r, i;
                    t = ye.createElement("div"),
                        t.setAttribute("className", "t"),
                        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                        r = t.getElementsByTagName("a")[0],
                        n = ye.createElement("select"),
                        i = n.appendChild(ye.createElement("option")),
                        e = t.getElementsByTagName("input")[0],
                        r.style.cssText = "top:1px",
                        ae.getSetAttribute = "t" !== t.className,
                        ae.style = /top/.test(r.getAttribute("style")),
                        ae.hrefNormalized = "/a" === r.getAttribute("href"),
                        ae.checkOn = !!e.value,
                        ae.optSelected = i.selected,
                        ae.enctype = !!ye.createElement("form").enctype,
                        n.disabled = !0,
                        ae.optDisabled = !i.disabled,
                        e = ye.createElement("input"),
                        e.setAttribute("value", ""),
                        ae.input = "" === e.getAttribute("value"),
                        e.value = "t",
                        e.setAttribute("type", "radio"),
                        ae.radioValue = "t" === e.value
                }();
            var Ct = /\r/g;
            le.fn.extend({
                val: function(e) {
                    var t, n, r, i = this[0];
                    {
                        if (arguments.length)
                            return r = le.isFunction(e),
                                this.each(function(n) {
                                    var i;
                                    1 === this.nodeType && (i = r ? e.call(this, n, le(this).val()) : e,
                                        null == i ? i = "" : "number" == typeof i ? i += "" : le.isArray(i) && (i = le.map(i, function(e) {
                                            return null == e ? "" : e + ""
                                        })),
                                        t = le.valHooks[this.type] || le.valHooks[this.nodeName.toLowerCase()],
                                    t && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                                });
                        if (i)
                            return t = le.valHooks[i.type] || le.valHooks[i.nodeName.toLowerCase()],
                                t && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value,
                                    "string" == typeof n ? n.replace(Ct, "") : null == n ? "" : n)
                    }
                }
            }),
                le.extend({
                    valHooks: {
                        option: {
                            get: function(e) {
                                var t = le.find.attr(e, "value");
                                return null != t ? t : le.trim(le.text(e))
                            }
                        },
                        select: {
                            get: function(e) {
                                for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++)
                                    if (n = r[l],
                                        (n.selected || l === i) && (ae.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !le.nodeName(n.parentNode, "optgroup"))) {
                                        if (t = le(n).val(),
                                                o)
                                            return t;
                                        a.push(t)
                                    }
                                return a
                            },
                            set: function(e, t) {
                                for (var n, r, i = e.options, o = le.makeArray(t), a = i.length; a--; )
                                    if (r = i[a],
                                        le.inArray(le.valHooks.option.get(r), o) >= 0)
                                        try {
                                            r.selected = n = !0
                                        } catch (s) {
                                            r.scrollHeight
                                        }
                                    else
                                        r.selected = !1;
                                return n || (e.selectedIndex = -1),
                                    i
                            }
                        }
                    }
                }),
                le.each(["radio", "checkbox"], function() {
                    le.valHooks[this] = {
                        set: function(e, t) {
                            return le.isArray(t) ? e.checked = le.inArray(le(e).val(), t) >= 0 : void 0
                        }
                    },
                    ae.checkOn || (le.valHooks[this].get = function(e) {
                            return null === e.getAttribute("value") ? "on" : e.value
                        }
                    )
                });
            var Et, Nt, At = le.expr.attrHandle, St = /^(?:checked|selected)$/i, Dt = ae.getSetAttribute, jt = ae.input;
            le.fn.extend({
                attr: function(e, t) {
                    return He(this, le.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        le.removeAttr(this, e)
                    })
                }
            }),
                le.extend({
                    attr: function(e, t, n) {
                        var r, i, o = e.nodeType;
                        if (e && 3 !== o && 8 !== o && 2 !== o)
                            return typeof e.getAttribute === Ae ? le.prop(e, t, n) : (1 === o && le.isXMLDoc(e) || (t = t.toLowerCase(),
                                r = le.attrHooks[t] || (le.expr.match.bool.test(t) ? Nt : Et)),
                                void 0 === n ? r && "get"in r && null !== (i = r.get(e, t)) ? i : (i = le.find.attr(e, t),
                                    null == i ? void 0 : i) : null !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                                    n) : void le.removeAttr(e, t))
                    },
                    removeAttr: function(e, t) {
                        var n, r, i = 0, o = t && t.match(Te);
                        if (o && 1 === e.nodeType)
                            for (; n = o[i++]; )
                                r = le.propFix[n] || n,
                                    le.expr.match.bool.test(n) ? jt && Dt || !St.test(n) ? e[r] = !1 : e[le.camelCase("default-" + n)] = e[r] = !1 : le.attr(e, n, ""),
                                    e.removeAttribute(Dt ? n : r)
                    },
                    attrHooks: {
                        type: {
                            set: function(e, t) {
                                if (!ae.radioValue && "radio" === t && le.nodeName(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t),
                                    n && (e.value = n),
                                        t
                                }
                            }
                        }
                    }
                }),
                Nt = {
                    set: function(e, t, n) {
                        return t === !1 ? le.removeAttr(e, n) : jt && Dt || !St.test(n) ? e.setAttribute(!Dt && le.propFix[n] || n, n) : e[le.camelCase("default-" + n)] = e[n] = !0,
                            n
                    }
                },
                le.each(le.expr.match.bool.source.match(/\w+/g), function(e, t) {
                    var n = At[t] || le.find.attr;
                    At[t] = jt && Dt || !St.test(t) ? function(e, t, r) {
                        var i, o;
                        return r || (o = At[t],
                            At[t] = i,
                            i = null != n(e, t, r) ? t.toLowerCase() : null ,
                            At[t] = o),
                            i
                    }
                        : function(e, t, n) {
                        return n ? void 0 : e[le.camelCase("default-" + t)] ? t.toLowerCase() : null
                    }
                }),
            jt && Dt || (le.attrHooks.value = {
                set: function(e, t, n) {
                    return le.nodeName(e, "input") ? void (e.defaultValue = t) : Et && Et.set(e, t, n)
                }
            }),
            Dt || (Et = {
                set: function(e, t, n) {
                    var r = e.getAttributeNode(n);
                    return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)),
                        r.value = t += "",
                        "value" === n || t === e.getAttribute(n) ? t : void 0
                }
            },
                At.id = At.name = At.coords = function(e, t, n) {
                    var r;
                    return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
                }
                ,
                le.valHooks.button = {
                    get: function(e, t) {
                        var n = e.getAttributeNode(t);
                        return n && n.specified ? n.value : void 0
                    },
                    set: Et.set
                },
                le.attrHooks.contenteditable = {
                    set: function(e, t, n) {
                        Et.set(e, "" === t ? !1 : t, n)
                    }
                },
                le.each(["width", "height"], function(e, t) {
                    le.attrHooks[t] = {
                        set: function(e, n) {
                            return "" === n ? (e.setAttribute(t, "auto"),
                                n) : void 0
                        }
                    }
                })),
            ae.style || (le.attrHooks.style = {
                get: function(e) {
                    return e.style.cssText || void 0
                },
                set: function(e, t) {
                    return e.style.cssText = t + ""
                }
            });
            var Lt = /^(?:input|select|textarea|button|object)$/i
                , $t = /^(?:a|area)$/i;
            le.fn.extend({
                prop: function(e, t) {
                    return He(this, le.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return e = le.propFix[e] || e,
                        this.each(function() {
                            try {
                                this[e] = void 0,
                                    delete this[e]
                            } catch (t) {}
                        })
                }
            }),
                le.extend({
                    propFix: {
                        "for": "htmlFor",
                        "class": "className"
                    },
                    prop: function(e, t, n) {
                        var r, i, o, a = e.nodeType;
                        if (e && 3 !== a && 8 !== a && 2 !== a)
                            return o = 1 !== a || !le.isXMLDoc(e),
                            o && (t = le.propFix[t] || t,
                                i = le.propHooks[t]),
                                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(e) {
                                var t = le.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : Lt.test(e.nodeName) || $t.test(e.nodeName) && e.href ? 0 : -1
                            }
                        }
                    }
                }),
            ae.hrefNormalized || le.each(["href", "src"], function(e, t) {
                le.propHooks[t] = {
                    get: function(e) {
                        return e.getAttribute(t, 4)
                    }
                }
            }),
            ae.optSelected || (le.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex),
                        null
                }
            }),
                le.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                    le.propFix[this.toLowerCase()] = this
                }),
            ae.enctype || (le.propFix.enctype = "encoding");
            var Ht = /[\t\r\n\f]/g;
            le.fn.extend({
                addClass: function(e) {
                    var t, n, r, i, o, a, s = 0, l = this.length, u = "string" == typeof e && e;
                    if (le.isFunction(e))
                        return this.each(function(t) {
                            le(this).addClass(e.call(this, t, this.className))
                        });
                    if (u)
                        for (t = (e || "").match(Te) || []; l > s; s++)
                            if (n = this[s],
                                    r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ht, " ") : " ")) {
                                for (o = 0; i = t[o++]; )
                                    r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                                a = le.trim(r),
                                n.className !== a && (n.className = a)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, r, i, o, a, s = 0, l = this.length, u = 0 === arguments.length || "string" == typeof e && e;
                    if (le.isFunction(e))
                        return this.each(function(t) {
                            le(this).removeClass(e.call(this, t, this.className))
                        });
                    if (u)
                        for (t = (e || "").match(Te) || []; l > s; s++)
                            if (n = this[s],
                                    r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ht, " ") : "")) {
                                for (o = 0; i = t[o++]; )
                                    for (; r.indexOf(" " + i + " ") >= 0; )
                                        r = r.replace(" " + i + " ", " ");
                                a = e ? le.trim(r) : "",
                                n.className !== a && (n.className = a)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : le.isFunction(e) ? this.each(function(n) {
                        le(this).toggleClass(e.call(this, n, this.className, t), t)
                    }) : this.each(function() {
                        if ("string" === n)
                            for (var t, r = 0, i = le(this), o = e.match(Te) || []; t = o[r++]; )
                                i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                        else
                            (n === Ae || "boolean" === n) && (this.className && le._data(this, "__className__", this.className),
                                this.className = this.className || e === !1 ? "" : le._data(this, "__className__") || "")
                    })
                },
                hasClass: function(e) {
                    for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ht, " ").indexOf(t) >= 0)
                            return !0;
                    return !1
                }
            }),
                le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
                    le.fn[t] = function(e, n) {
                        return arguments.length > 0 ? this.on(t, null , e, n) : this.trigger(t)
                    }
                }),
                le.fn.extend({
                    hover: function(e, t) {
                        return this.mouseenter(e).mouseleave(t || e)
                    },
                    bind: function(e, t, n) {
                        return this.on(e, null , t, n)
                    },
                    unbind: function(e, t) {
                        return this.off(e, null , t)
                    },
                    delegate: function(e, t, n, r) {
                        return this.on(t, e, n, r)
                    },
                    undelegate: function(e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                    }
                });
            var Mt = le.now()
                , Bt = /\?/
                , _t = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            le.parseJSON = function(e) {
                if (n.JSON && n.JSON.parse)
                    return n.JSON.parse(e + "");
                var t, r = null , i = le.trim(e + "");
                return i && !le.trim(i.replace(_t, function(e, n, i, o) {
                    return t && n && (r = 0),
                        0 === r ? e : (t = i || n,
                            r += !o - !i,
                            "")
                })) ? Function("return " + i)() : le.error("Invalid JSON: " + e)
            }
                ,
                le.parseXML = function(e) {
                    var t, r;
                    if (!e || "string" != typeof e)
                        return null ;
                    try {
                        n.DOMParser ? (r = new DOMParser,
                            t = r.parseFromString(e, "text/xml")) : (t = new ActiveXObject("Microsoft.XMLDOM"),
                            t.async = "false",
                            t.loadXML(e))
                    } catch (i) {
                        t = void 0
                    }
                    return t && t.documentElement && !t.getElementsByTagName("parsererror").length || le.error("Invalid XML: " + e),
                        t
                }
            ;
            var zt, Pt, qt = /#.*$/, Ft = /([?&])_=[^&]*/, Wt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ot = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, It = /^(?:GET|HEAD)$/, Rt = /^\/\//, Xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Ut = {}, Gt = {}, Yt = "*/".concat("*");
            try {
                Pt = location.href
            } catch (Jt) {
                Pt = ye.createElement("a"),
                    Pt.href = "",
                    Pt = Pt.href
            }
            zt = Xt.exec(Pt.toLowerCase()) || [],
                le.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: Pt,
                        type: "GET",
                        isLocal: Ot.test(zt[1]),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Yt,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /xml/,
                            html: /html/,
                            json: /json/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": le.parseJSON,
                            "text xml": le.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(e, t) {
                        return t ? X(X(e, le.ajaxSettings), t) : X(le.ajaxSettings, e)
                    },
                    ajaxPrefilter: I(Ut),
                    ajaxTransport: I(Gt),
                    ajax: function(e, t) {
                        function n(e, t, n, r) {
                            var i, c, v, y, x, k = t;
                            2 !== b && (b = 2,
                            s && clearTimeout(s),
                                u = void 0,
                                a = r || "",
                                w.readyState = e > 0 ? 4 : 0,
                                i = e >= 200 && 300 > e || 304 === e,
                            n && (y = U(d, w, n)),
                                y = G(d, y, w, i),
                                i ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"),
                                x && (le.lastModified[o] = x),
                                    x = w.getResponseHeader("etag"),
                                x && (le.etag[o] = x)),
                                    204 === e || "HEAD" === d.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = y.state,
                                        c = y.data,
                                        v = y.error,
                                        i = !v)) : (v = k,
                                (e || !k) && (k = "error",
                                0 > e && (e = 0))),
                                w.status = e,
                                w.statusText = (t || k) + "",
                                i ? h.resolveWith(f, [c, k, w]) : h.rejectWith(f, [w, k, v]),
                                w.statusCode(g),
                                g = void 0,
                            l && p.trigger(i ? "ajaxSuccess" : "ajaxError", [w, d, i ? c : v]),
                                m.fireWith(f, [w, k]),
                            l && (p.trigger("ajaxComplete", [w, d]),
                            --le.active || le.event.trigger("ajaxStop")))
                        }
                        "object" == typeof e && (t = e,
                            e = void 0),
                            t = t || {};
                        var r, i, o, a, s, l, u, c, d = le.ajaxSetup({}, t), f = d.context || d, p = d.context && (f.nodeType || f.jquery) ? le(f) : le.event, h = le.Deferred(), m = le.Callbacks("once memory"), g = d.statusCode || {}, v = {}, y = {}, b = 0, x = "canceled", w = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (2 === b) {
                                    if (!c)
                                        for (c = {}; t = Wt.exec(a); )
                                            c[t[1].toLowerCase()] = t[2];
                                    t = c[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function() {
                                return 2 === b ? a : null
                            },
                            setRequestHeader: function(e, t) {
                                var n = e.toLowerCase();
                                return b || (e = y[n] = y[n] || e,
                                    v[e] = t),
                                    this
                            },
                            overrideMimeType: function(e) {
                                return b || (d.mimeType = e),
                                    this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (2 > b)
                                        for (t in e)
                                            g[t] = [g[t], e[t]];
                                    else
                                        w.always(e[w.status]);
                                return this
                            },
                            abort: function(e) {
                                var t = e || x;
                                return u && u.abort(t),
                                    n(0, t),
                                    this
                            }
                        };
                        if (h.promise(w).complete = m.add,
                                w.success = w.done,
                                w.error = w.fail,
                                d.url = ((e || d.url || Pt) + "").replace(qt, "").replace(Rt, zt[1] + "//"),
                                d.type = t.method || t.type || d.method || d.type,
                                d.dataTypes = le.trim(d.dataType || "*").toLowerCase().match(Te) || [""],
                            null == d.crossDomain && (r = Xt.exec(d.url.toLowerCase()),
                                d.crossDomain = !(!r || r[1] === zt[1] && r[2] === zt[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (zt[3] || ("http:" === zt[1] ? "80" : "443")))),
                            d.data && d.processData && "string" != typeof d.data && (d.data = le.param(d.data, d.traditional)),
                                R(Ut, d, t, w),
                            2 === b)
                            return w;
                        l = le.event && d.global,
                        l && 0 === le.active++ && le.event.trigger("ajaxStart"),
                            d.type = d.type.toUpperCase(),
                            d.hasContent = !It.test(d.type),
                            o = d.url,
                        d.hasContent || (d.data && (o = d.url += (Bt.test(o) ? "&" : "?") + d.data,
                            delete d.data),
                        d.cache === !1 && (d.url = Ft.test(o) ? o.replace(Ft, "$1_=" + Mt++) : o + (Bt.test(o) ? "&" : "?") + "_=" + Mt++)),
                        d.ifModified && (le.lastModified[o] && w.setRequestHeader("If-Modified-Since", le.lastModified[o]),
                        le.etag[o] && w.setRequestHeader("If-None-Match", le.etag[o])),
                        (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType),
                            w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Yt + "; q=0.01" : "") : d.accepts["*"]);
                        for (i in d.headers)
                            w.setRequestHeader(i, d.headers[i]);
                        if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b))
                            return w.abort();
                        x = "abort";
                        for (i in {
                            success: 1,
                            error: 1,
                            complete: 1
                        })
                            w[i](d[i]);
                        if (u = R(Gt, d, t, w)) {
                            w.readyState = 1,
                            l && p.trigger("ajaxSend", [w, d]),
                            d.async && d.timeout > 0 && (s = setTimeout(function() {
                                w.abort("timeout")
                            }, d.timeout));
                            try {
                                b = 1,
                                    u.send(v, n)
                            } catch (k) {
                                if (!(2 > b))
                                    throw k;
                                n(-1, k)
                            }
                        } else
                            n(-1, "No Transport");
                        return w
                    },
                    getJSON: function(e, t, n) {
                        return le.get(e, t, n, "json")
                    },
                    getScript: function(e, t) {
                        return le.get(e, void 0, t, "script")
                    }
                }),
                le.each(["get", "post"], function(e, t) {
                    le[t] = function(e, n, r, i) {
                        return le.isFunction(n) && (i = i || r,
                            r = n,
                            n = void 0),
                            le.ajax({
                                url: e,
                                type: t,
                                dataType: i,
                                data: n,
                                success: r
                            })
                    }
                }),
                le._evalUrl = function(e) {
                    return le.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    })
                }
                ,
                le.fn.extend({
                    wrapAll: function(e) {
                        if (le.isFunction(e))
                            return this.each(function(t) {
                                le(this).wrapAll(e.call(this, t))
                            });
                        if (this[0]) {
                            var t = le(e, this[0].ownerDocument).eq(0).clone(!0);
                            this[0].parentNode && t.insertBefore(this[0]),
                                t.map(function() {
                                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                                        e = e.firstChild;
                                    return e
                                }).append(this)
                        }
                        return this
                    },
                    wrapInner: function(e) {
                        return le.isFunction(e) ? this.each(function(t) {
                            le(this).wrapInner(e.call(this, t))
                        }) : this.each(function() {
                            var t = le(this)
                                , n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        })
                    },
                    wrap: function(e) {
                        var t = le.isFunction(e);
                        return this.each(function(n) {
                            le(this).wrapAll(t ? e.call(this, n) : e)
                        })
                    },
                    unwrap: function() {
                        return this.parent().each(function() {
                            le.nodeName(this, "body") || le(this).replaceWith(this.childNodes)
                        }).end()
                    }
                }),
                le.expr.filters.hidden = function(e) {
                    return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ae.reliableHiddenOffsets() && "none" === (e.style && e.style.display || le.css(e, "display"))
                }
                ,
                le.expr.filters.visible = function(e) {
                    return !le.expr.filters.hidden(e)
                }
            ;
            var Vt = /%20/g
                , Kt = /\[\]$/
                , Qt = /\r?\n/g
                , Zt = /^(?:submit|button|image|reset|file)$/i
                , en = /^(?:input|select|textarea|keygen)/i;
            le.param = function(e, t) {
                var n, r = [], i = function(e, t) {
                    t = le.isFunction(t) ? t() : null == t ? "" : t,
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
                if (void 0 === t && (t = le.ajaxSettings && le.ajaxSettings.traditional),
                    le.isArray(e) || e.jquery && !le.isPlainObject(e))
                    le.each(e, function() {
                        i(this.name, this.value)
                    });
                else
                    for (n in e)
                        Y(n, e[n], t, i);
                return r.join("&").replace(Vt, "+")
            }
                ,
                le.fn.extend({
                    serialize: function() {
                        return le.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map(function() {
                            var e = le.prop(this, "elements");
                            return e ? le.makeArray(e) : this
                        }).filter(function() {
                            var e = this.type;
                            return this.name && !le(this).is(":disabled") && en.test(this.nodeName) && !Zt.test(e) && (this.checked || !Me.test(e))
                        }).map(function(e, t) {
                            var n = le(this).val();
                            return null == n ? null : le.isArray(n) ? le.map(n, function(e) {
                                return {
                                    name: t.name,
                                    value: e.replace(Qt, "\r\n")
                                }
                            }) : {
                                name: t.name,
                                value: n.replace(Qt, "\r\n")
                            }
                        }).get()
                    }
                }),
                le.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function() {
                    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && J() || V()
                }
                    : J;
            var tn = 0
                , nn = {}
                , rn = le.ajaxSettings.xhr();
            n.attachEvent && n.attachEvent("onunload", function() {
                for (var e in nn)
                    nn[e](void 0, !0)
            }),
                ae.cors = !!rn && "withCredentials"in rn,
                rn = ae.ajax = !!rn,
            rn && le.ajaxTransport(function(e) {
                if (!e.crossDomain || ae.cors) {
                    var t;
                    return {
                        send: function(n, r) {
                            var i, o = e.xhr(), a = ++tn;
                            if (o.open(e.type, e.url, e.async, e.username, e.password),
                                    e.xhrFields)
                                for (i in e.xhrFields)
                                    o[i] = e.xhrFields[i];
                            e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                            e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                            for (i in n)
                                void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                            o.send(e.hasContent && e.data || null ),
                                t = function(n, i) {
                                    var s, l, u;
                                    if (t && (i || 4 === o.readyState))
                                        if (delete nn[a],
                                                t = void 0,
                                                o.onreadystatechange = le.noop,
                                                i)
                                            4 !== o.readyState && o.abort();
                                        else {
                                            u = {},
                                                s = o.status,
                                            "string" == typeof o.responseText && (u.text = o.responseText);
                                            try {
                                                l = o.statusText
                                            } catch (c) {
                                                l = ""
                                            }
                                            s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                                        }
                                    u && r(s, l, u, o.getAllResponseHeaders())
                                }
                                ,
                                e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = nn[a] = t : t()
                        },
                        abort: function() {
                            t && t(void 0, !0)
                        }
                    }
                }
            }),
                le.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /(?:java|ecma)script/
                    },
                    converters: {
                        "text script": function(e) {
                            return le.globalEval(e),
                                e
                        }
                    }
                }),
                le.ajaxPrefilter("script", function(e) {
                    void 0 === e.cache && (e.cache = !1),
                    e.crossDomain && (e.type = "GET",
                        e.global = !1)
                }),
                le.ajaxTransport("script", function(e) {
                    if (e.crossDomain) {
                        var t, n = ye.head || le("head")[0] || ye.documentElement;
                        return {
                            send: function(r, i) {
                                t = ye.createElement("script"),
                                    t.async = !0,
                                e.scriptCharset && (t.charset = e.scriptCharset),
                                    t.src = e.url,
                                    t.onload = t.onreadystatechange = function(e, n) {
                                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null ,
                                        t.parentNode && t.parentNode.removeChild(t),
                                            t = null ,
                                        n || i(200, "success"))
                                    }
                                    ,
                                    n.insertBefore(t, n.firstChild)
                            },
                            abort: function() {
                                t && t.onload(void 0, !0)
                            }
                        }
                    }
                });
            var on = []
                , an = /(=)\?(?=&|$)|\?\?/;
            le.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = on.pop() || le.expando + "_" + Mt++;
                    return this[e] = !0,
                        e
                }
            }),
                le.ajaxPrefilter("json jsonp", function(e, t, r) {
                    var i, o, a, s = e.jsonp !== !1 && (an.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && an.test(e.data) && "data");
                    return s || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = le.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                        s ? e[s] = e[s].replace(an, "$1" + i) : e.jsonp !== !1 && (e.url += (Bt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                        e.converters["script json"] = function() {
                            return a || le.error(i + " was not called"),
                                a[0]
                        }
                        ,
                        e.dataTypes[0] = "json",
                        o = n[i],
                        n[i] = function() {
                            a = arguments
                        }
                        ,
                        r.always(function() {
                            n[i] = o,
                            e[i] && (e.jsonpCallback = t.jsonpCallback,
                                on.push(i)),
                            a && le.isFunction(o) && o(a[0]),
                                a = o = void 0
                        }),
                        "script") : void 0
                }),
                le.parseHTML = function(e, t, n) {
                    if (!e || "string" != typeof e)
                        return null ;
                    "boolean" == typeof t && (n = t,
                        t = !1),
                        t = t || ye;
                    var r = me.exec(e)
                        , i = !n && [];
                    return r ? [t.createElement(r[1])] : (r = le.buildFragment([e], t, i),
                    i && i.length && le(i).remove(),
                        le.merge([], r.childNodes))
                }
            ;
            var sn = le.fn.load;
            le.fn.load = function(e, t, n) {
                if ("string" != typeof e && sn)
                    return sn.apply(this, arguments);
                var r, i, o, a = this, s = e.indexOf(" ");
                return s >= 0 && (r = le.trim(e.slice(s, e.length)),
                    e = e.slice(0, s)),
                    le.isFunction(t) ? (n = t,
                        t = void 0) : t && "object" == typeof t && (o = "POST"),
                a.length > 0 && le.ajax({
                    url: e,
                    type: o,
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    i = arguments,
                        a.html(r ? le("<div>").append(le.parseHTML(e)).find(r) : e)
                }).complete(n && function(e, t) {
                        a.each(n, i || [e.responseText, t, e])
                    }
                ),
                    this
            }
                ,
                le.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                    le.fn[t] = function(e) {
                        return this.on(t, e)
                    }
                }),
                le.expr.filters.animated = function(e) {
                    return le.grep(le.timers, function(t) {
                        return e === t.elem
                    }).length
                }
            ;
            var ln = n.document.documentElement;
            le.offset = {
                setOffset: function(e, t, n) {
                    var r, i, o, a, s, l, u, c = le.css(e, "position"), d = le(e), f = {};
                    "static" === c && (e.style.position = "relative"),
                        s = d.offset(),
                        o = le.css(e, "top"),
                        l = le.css(e, "left"),
                        u = ("absolute" === c || "fixed" === c) && le.inArray("auto", [o, l]) > -1,
                        u ? (r = d.position(),
                            a = r.top,
                            i = r.left) : (a = parseFloat(o) || 0,
                            i = parseFloat(l) || 0),
                    le.isFunction(t) && (t = t.call(e, n, s)),
                    null != t.top && (f.top = t.top - s.top + a),
                    null != t.left && (f.left = t.left - s.left + i),
                        "using"in t ? t.using.call(e, f) : d.css(f)
                }
            },
                le.fn.extend({
                    offset: function(e) {
                        if (arguments.length)
                            return void 0 === e ? this : this.each(function(t) {
                                le.offset.setOffset(this, e, t)
                            });
                        var t, n, r = {
                            top: 0,
                            left: 0
                        }, i = this[0], o = i && i.ownerDocument;
                        if (o)
                            return t = o.documentElement,
                                le.contains(t, i) ? (typeof i.getBoundingClientRect !== Ae && (r = i.getBoundingClientRect()),
                                    n = K(o),
                                {
                                    top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                                    left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                                }) : r
                    },
                    position: function() {
                        if (this[0]) {
                            var e, t, n = {
                                top: 0,
                                left: 0
                            }, r = this[0];
                            return "fixed" === le.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(),
                                t = this.offset(),
                            le.nodeName(e[0], "html") || (n = e.offset()),
                                n.top += le.css(e[0], "borderTopWidth", !0),
                                n.left += le.css(e[0], "borderLeftWidth", !0)),
                            {
                                top: t.top - n.top - le.css(r, "marginTop", !0),
                                left: t.left - n.left - le.css(r, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map(function() {
                            for (var e = this.offsetParent || ln; e && !le.nodeName(e, "html") && "static" === le.css(e, "position"); )
                                e = e.offsetParent;
                            return e || ln
                        })
                    }
                }),
                le.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, function(e, t) {
                    var n = /Y/.test(t);
                    le.fn[e] = function(r) {
                        return He(this, function(e, r, i) {
                            var o = K(e);
                            return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void (o ? o.scrollTo(n ? le(o).scrollLeft() : i, n ? i : le(o).scrollTop()) : e[r] = i)
                        }, e, r, arguments.length, null )
                    }
                }),
                le.each(["top", "left"], function(e, t) {
                    le.cssHooks[t] = j(ae.pixelPosition, function(e, n) {
                        return n ? (n = ot(e, t),
                            st.test(n) ? le(e).position()[t] + "px" : n) : void 0
                    })
                }),
                le.each({
                    Height: "height",
                    Width: "width"
                }, function(e, t) {
                    le.each({
                        padding: "inner" + e,
                        content: t,
                        "": "outer" + e
                    }, function(n, r) {
                        le.fn[r] = function(r, i) {
                            var o = arguments.length && (n || "boolean" != typeof r)
                                , a = n || (r === !0 || i === !0 ? "margin" : "border");
                            return He(this, function(t, n, r) {
                                var i;
                                return le.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? le.css(t, n, a) : le.style(t, n, r, a)
                            }, t, o ? r : void 0, o, null )
                        }
                    })
                }),
                le.fn.size = function() {
                    return this.length
                }
                ,
                le.fn.andSelf = le.fn.addBack,
                r = [],
                i = function() {
                    return le
                }
                    .apply(t, r),
                !(void 0 !== i && (e.exports = i));
            var un = n.jQuery
                , cn = n.$;
            return le.noConflict = function(e) {
                return n.$ === le && (n.$ = cn),
                e && n.jQuery === le && (n.jQuery = un),
                    le
            }
                ,
            typeof o === Ae && (n.jQuery = n.$ = le),
                le
        })
    }
    , function(e, t) {
        !function(e) {
            var t = e(window);
            e.fn.visible = function(e, n) {
                if (!(this.length < 1)) {
                    var r = this.length > 1 ? this.eq(0) : this
                        , i = r.get(0)
                        , o = t.width()
                        , a = t.height()
                        , s = n === !0 ? i.offsetWidth * i.offsetHeight : !0;
                    if ("function" == typeof i.getBoundingClientRect) {
                        var l = i.getBoundingClientRect()
                            , u = l.top + 25 >= 0 && l.top - 25 < a
                            , c = l.bottom + 25 > 0 && l.bottom - 25 <= a
                            , d = (l.left >= 0 && l.left < o,
                        l.right > 0 && l.right <= o,
                            e ? u || c : u && c);
                        return s && d
                    }
                    var f = t.scrollTop()
                        , p = f + a
                        , h = (t.scrollLeft(),
                        r.offset())
                        , m = h.top
                        , g = m + r.height()
                        , v = h.left
                        , y = (v + r.width(),
                        e === !0 ? g : m)
                        , b = e === !0 ? m : g;
                    return !!s && p >= b - 25 && y + 25 >= f
                }
            }
        }(jQuery)
    }
    , function(e, t) {
        /*! Lazy Load XT v1.0.5 2014-06-05
         * http://ressio.github.io/lazy-load-xt
         * (C) 2014 RESS.io
         * Licensed under MIT */
        !function(e, t, n, r) {
            function i(e, t) {
                return e[t] === r ? b[t] : e[t]
            }
            function o() {
                var e = t.pageYOffset;
                return e === r ? v.scrollTop : e
            }
            function a(e, t) {
                var n = b["on" + e];
                n && (k(n) ? n.call(t[0]) : (n.addClass && t.addClass(n.addClass),
                n.removeClass && t.removeClass(n.removeClass))),
                    t.trigger("lazy" + e, [t]),
                    c()
            }
            function s(t) {
                a(t.type, e(this).off(m, s))
            }
            function l(n) {
                if (N.length) {
                    n = n || b.forceLoad,
                        A = 1 / 0;
                    var r, i, l = o(), u = t.innerHeight || v.clientHeight, c = t.innerWidth || v.clientWidth;
                    for (r = 0,
                             i = N.length; i > r; r++) {
                        var d, f = N[r], h = f[0], g = f[p], y = !1, x = n;
                        if (E(v, h)) {
                            if (n || !g.visibleOnly || h.offsetWidth || h.offsetHeight) {
                                if (!x) {
                                    var w = h.getBoundingClientRect()
                                        , T = g.edgeX
                                        , C = g.edgeY;
                                    d = w.top + l - C - u,
                                        x = l >= d && w.bottom > -C && w.left <= c + T && w.right > -T
                                }
                                if (x) {
                                    a("show", f);
                                    var S = g.srcAttr
                                        , D = k(S) ? S(f) : h.getAttribute(S);
                                    D && (f.on(m, s),
                                        h.src = D),
                                        y = !0
                                } else
                                    A > d && (A = d)
                            }
                        } else
                            y = !0;
                        y && (N.splice(r--, 1),
                            i--)
                    }
                    i || a("complete", e(v))
                }
            }
            function u() {
                S > 1 ? (S = 1,
                    l(),
                    setTimeout(u, b.throttle)) : S = 0
            }
            function c(e) {
                N.length && (e && "scroll" === e.type && e.currentTarget === t && A >= o() || (S || setTimeout(u, 0),
                    S = 2))
            }
            function d() {
                w.lazyLoadXT()
            }
            function f() {
                l(!0)
            }
            var p = "lazyLoadXT"
                , h = "lazied"
                , m = "load error"
                , g = "lazy-hidden"
                , v = n.documentElement || n.body
                , y = t.onscroll === r || !!t.operamini || !v.getBoundingClientRect
                , b = {
                autoInit: !0,
                selector: "img[data-src]",
                blankImage: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                throttle: 99,
                forceLoad: y,
                loadEvent: "pageshow",
                updateEvent: "load orientationchange resize scroll touchmove focus",
                forceEvent: "",
                oninit: {
                    removeClass: "lazy"
                },
                onshow: {
                    addClass: g
                },
                onload: {
                    removeClass: g,
                    addClass: "lazy-loaded"
                },
                onerror: {
                    removeClass: g
                },
                checkDuplicates: !0
            }
                , x = {
                srcAttr: "data-src",
                edgeX: 0,
                edgeY: 0,
                visibleOnly: !0
            }
                , w = e(t)
                , k = e.isFunction
                , T = e.extend
                , C = e.data || function(t, n) {
                    return e(t).data(n)
                }
                , E = e.contains || function(e, t) {
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                    return !1
                }
                , N = []
                , A = 0
                , S = 0;
            e[p] = T(b, x, e[p]),
                e.fn[p] = function(n) {
                    n = n || {};
                    var r, o = i(n, "blankImage"), s = i(n, "checkDuplicates"), l = i(n, "scrollContainer"), u = {};
                    e(l).on("scroll", c);
                    for (r in x)
                        u[r] = i(n, r);
                    return this.each(function(r, i) {
                        if (i === t)
                            e(b.selector).lazyLoadXT(n);
                        else {
                            if (s && C(i, h))
                                return;
                            var l = e(i).data(h, 1);
                            o && "IMG" === i.tagName && !i.src && (i.src = o),
                                l[p] = T({}, u),
                                a("init", l),
                                N.push(l)
                        }
                    })
                }
                ,
                e(n).ready(function() {
                    a("start", w),
                        w.on(b.loadEvent, d).on(b.updateEvent, c).on(b.forceEvent, f),
                        e(n).on(b.updateEvent, c),
                    b.autoInit && d()
                })
        }(window.jQuery || window.Zepto || window.$, window, document),
            function(e) {
                var t = e.lazyLoadXT;
                t.selector += ",video,iframe[data-src]",
                    t.videoPoster = "data-poster",
                    e(document).on("lazyshow", "video", function(n, r) {
                        var i = r.lazyLoadXT.srcAttr
                            , o = e.isFunction(i);
                        r.attr("poster", r.attr(t.videoPoster)).children("source,track").each(function(t, n) {
                            var r = e(n);
                            r.attr("src", o ? i(r) : r.attr(i))
                        }),
                            this.load()
                    })
            }(window.jQuery || window.Zepto || window.$)
    }
    , function(e, t, n) {
        function r() {
            if (c.tracking.enabled && (u.isUndefined(c.tracking.id) || u.isUndefined(c.tracking.section) || u.isUndefined(c.tracking.name) || u.isUndefined(c.tracking.publishingDate)))
                throw new Error("Please specify all these parameters: id, section, name and publishingDate for config.tracking");
            isIframe ? ($("html").addClass("is-embed-mode"),
                d.on(u.clickEvent, o)) : o()
        }
        function o() {
            if ($("html").removeClass("is-embed-mode"),
                    d.remove(),
                    !c.tracking.enabled)
                return !1;
            var e = c.tracking.id
                , t = '<img src="http://morgpost.ivwbox.de/cgi-bin/ivw/CP/' + e + "?r=" + escape(document.referrer) + "&amp;d=" + 1e5 * Math.random() + '" width="1" height="1" alt="" class="countPixel"/>';
            document.getElementById("ivw").innerHTML = t,
                window.webtrekkConfig = {
                    trackId: "620353405768149",
                    trackDomain: "morgenpost01.webtrekk.net",
                    domain: "REGEXP:(.morgenpost.de)|(.immerhertha.de)|(.istderberschonfertig.de)",
                    cookie: "1",
                    mediaCode: "wtmc",
                    contentId: "",
                    executePluginFunction: "wt_replaceLinkInfos",
                    ignorePrerendering: !0
                };
            var n = document.createElement("script");
            n.src = "http://js.morgenpost.de/resources/js/554/webtrekk.js";
            var r = document.createElement("script");
            r.src = "http://js.morgenpost.de/resources/js/554/webtrekk_media.js",
                r.onload = function() {
                    n.onload = a,
                        document.head.appendChild(n)
                }
                ,
                document.head.appendChild(r),
                l(),
                s()
        }
        function a() {
            var e = {
                linkTrack: "link",
                heatmap: "1"
            }
                , t = "Artikel: " + c.tracking.section + ": " + c.tracking.name;
            window.wt = new webtrekkV3(e),
                wt.internalSearch = "",
                wt.contentId = t,
                wt.contentGroup = {
                    1: c.tracking.section,
                    2: "",
                    3: "",
                    4: t
                },
                wt.customParameter = {},
                wt.customParameter[1] = c.tracking.publishingDate,
                wt.customParameter[2] = "Artikel",
                wt.customParameter[3] = t,
                wt.customParameter[4] = c.tracking.section,
                wt.customParameter[5] = "",
                wt.customParameter[6] = "",
                wt.customParameter[8] = c.tracking.id,
                wt.customParameter[9] = "",
                wt.customParameter[11] = "bmo",
                wt.customClickParameter = {},
                wt_init_media(wt.trackDomain, wt.trackId),
                wt.sendinfo(),
                $(document).ready(function() {
                    wt.linkTrack && wt.linkTrackInit();
                    for (var e = document.links, t = 0; t < e.length; t++)
                        for (var n = e[t].attributes, r = 0; r < n.length; r++)
                            "name" == n[r].name && (wt.customClickParameter[n[r].value] = {
                                1: n[r].value
                            })
                }),
                document.getWebtrekkInformation = function(e) {
                    if (e) {
                        e.contentGroup1 && (wt.contentGroup[1] = e.contentGroup1),
                        e.contentGroup2 && (wt.contentGroup[2] = e.contentGroup2),
                        e.contentGroup3 && (wt.contentGroup[3] = e.contentGroup3),
                        e.contentGroup4 && (wt.contentGroup[4] = e.contentGroup4),
                        e.contentId && (wt.contentId = e.contentId);
                        for (i in e.customParameter) {
                            var t = e.customParameter[i];
                            t && (wt.customParameter[i] = e.customParameter[i])
                        }
                        !wt.customParameter[8] && e.agofCode && (wt.customParameter[8] = e.agofCode)
                    }
                    wt.sendinfo()
                }
                ,
                document.getCounters = function(e) {
                    try {
                        "undefined" != typeof getIVW && getIVW(e),
                        "undefined" != typeof getEae && getEae(e),
                        "undefined" != typeof getWebtrekkInformation && getWebtrekkInformation(e),
                        "undefined" != typeof getMM && getMM(e)
                    } catch (t) {}
                }
            ;
            new Array,
                new Array
        }
        function s() {
            var e = {};
            e.uid = 58335,
                e.domain = "morgenpost.de",
                e.useCanonical = !0,
                e.sections = c.tracking.section,
                e.authors = "",
                window._sf_async_config = e,
                function() {
                    function e() {
                        window._sf_endpt = (new Date).getTime();
                        var e = document.createElement("script");
                        e.setAttribute("language", "javascript"),
                            e.setAttribute("type", "text/javascript"),
                            e.setAttribute("src", "//static.chartbeat.com/js/chartbeat.js"),
                            document.body.appendChild(e)
                    }
                    var t = window.onload;
                    window.onload = "function" != typeof window.onload ? e : function() {
                        t(),
                            e()
                    }
                }()
        }
        function l() {
            !function(e, t, n, r, i, o, a) {
                e.GoogleAnalyticsObject = i,
                    e[i] = e[i] || function() {
                            (e[i].q = e[i].q || []).push(arguments)
                        }
                    ,
                    e[i].l = 1 * new Date,
                    o = t.createElement(n),
                    a = t.getElementsByTagName(n)[0],
                    o.async = 1,
                    o.src = r,
                    a.parentNode.insertBefore(o, a)
            }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"),
                ga("create", "UA-31059345-1", "auto"),
                ga("set", "anonymizeIp", !0),
                ga("send", "pageview")
        }
        var u = n(5)
            , c = n(6)
            , d = $(".iframe-overlay");
        e.exports = {
            init: r
        }
    }
    , function(e, t) {
        function n(e) {
            return "undefined" == typeof e
        }
        function r(e) {
            return n(e) ? !1 : !isNaN(e) && isFinite(e)
        }
        function i(e) {
            var t = e.toString().split(".");
            return e > 9999 && (t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".")),
                t.join(",")
        }
        function o() {
            a = !("querySelector"in document && "localStorage"in window && "addEventListener"in window),
                s = !n(window.orientation),
                l = /android.*mobile|mobile.*android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                u = "undefined" != typeof window.orientation ? "touchstart" : "click"
        }
        var a, s, l, u;
        o();
        var c = {
            berlinCenter: [52.52, 13.4],
            berlinBounds: [[51, 12.924], [54.5, 13.8249]]
        };
        c.geoCode = function(e) {
            var t = "http://interaktiv.morgenpost.de/php-scripts/geocode.php?search=" + e;
            return $.ajax({
                url: t,
                type: "GET",
                dataType: "json"
            })
        }
            ,
            c.reverseGeoCode = function(e, t) {}
            ,
            c.getZoomByWindowSize = function() {
                var e = 11
                    , t = window.innerWidth;
                return l || 500 > t ? e = 10 : 700 > t ? e = 11 : 1100 > t ? e = 11 : t > 2e3 && (e = 12),
                    e
            }
            ,
            e.exports = {
                isUndefined: n,
                isNumeric: r,
                numberFormat: i,
                isOldBrowser: a,
                isMobile: s,
                isSmartphone: l,
                clickEvent: u,
                updateDevices: o,
                geo: c
            }
    }
    , function(e, t) {
        var n = {
            url: "http://interaktiv.morgenpost.de/umzuege-in-berlin/",
            socialid: "umzuege-in-berlin",
            meta: {
                title: "Die Berliner ziehen nicht mehr um",
                description: "Noch in den 90er-Jahren fuhr fast jede Minute ein Umzugswagen von Kiez zu Kiez. Das hat sich nun geändert. Mit den steigenden Mieten sind die Berliner sesshaft geworden.",
                robots: "index, follow",
                ogTitle: "Die Berliner ziehen nicht mehr um",
                ogType: "article",
                ogUrl: "http://interaktiv.morgenpost.de/umzuege-in-berlin/",
                ogImage: "http://interaktiv.morgenpost.de/umzuege-in-berlin/images/thumb.jpg?v2",
                ogSiteName: "Berliner Morgenpost",
                ogDescription: "Noch in den 90er-Jahren fuhr fast jede Minute ein Umzugswagen von Kiez zu Kiez. Das hat sich nun geändert. Mit den steigenden Mieten sind die Berliner sesshaft geworden.",
                twCard: "summary_large_image",
                twSite: "@morgenpost",
                twTitle: "Die Berliner ziehen nicht mehr um",
                twDescription: "Nach einem Umzugsboom in den 90er-Jahren sind die Berliner heute mit den steigenden Mieten sesshaft geworden.",
                twImgSrc: "http://interaktiv.morgenpost.de/umzuege-in-berlin/images/thumb.jpg?v1"
            },
            intro: {
                isFullScreenHeader: !1,
                isWhiteLogo: !1,
                fullBgImage: !1,
                showCalltoaction: !1
            },
            whatsappText: "Noch in den 90er-Jahren fuhr fast jede Minute ein Umzugswagen von Kiez zu Kiez. Das hat sich nun geändert. Mit den steigenden Mieten sind die Berliner sesshaft geworden. http://interaktiv.morgenpost.de/umzuege-in-berlin/",
            facebookText: "Noch in den 90er-Jahren fuhr fast jede Minute ein Umzugswagen von Kiez zu Kiez. Das hat sich nun geändert. Mit den steigenden Mieten sind die Berliner sesshaft geworden.",
            twitterText: "Nach einem Umzugsboom in den 90er-Jahren sind die Berliner heute mit den steigenden Mieten sesshaft geworden. http://interaktiv.morgenpost.de/umzuege-in-berlin/",
            adspace: !1,
            controls: {
                showInfo: !1,
                showTopButton: !1,
                showMuteButton: !1
            },
            tracking: {
                enabled: !0,
                id: "90027_Umzuege_Berlin",
                section: "Interaktiv",
                name: "Umzüge in Berlin",
                publishingDate: "11.11.2015"
            },
            map: {
                accessToken: "pk.eyJ1IjoiYmVybGluZXJtb3JnZW5wb3N0IiwiYSI6IjVhZWJkYWU4Zjg4YTdkYWYwMGUzOTAzMTU4NzI3MDliIn0.WrzhdNN4v9RQ_PlscNfDvg",
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/"">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                mapTest: {
                    center: [34.829, 36.1958],
                    zoom: 12,
                    scrollWheelZoom: !1,
                    tileLayer: "https://api.tiles.mapbox.com/v4/berlinermorgenpost.ru9xusor/{z}/{x}/{y}.png?access_token={accessToken}"
                }
            },
            teaser: {
                enable: !0,
                title: "Wo Sie sich Berlin leisten können",
                description: "Die interaktive Karte zeigt auf Kiezebene genau, wie viel Sie für Miete einplanen müssen - und wie stark dort die Preise gestiegen sind.",
                background: "images/teaser_bg.jpg",
                url: "http://interaktiv.morgenpost.de/mietkarte-berlin/"
            }
        };
        e.exports = n
    }
    , function(e, t, n) {
        function r() {
            i(),
                a()
        }
        function i() {
            $(document).on(u.clickEvent, ".info-button", o),
                $(document).on(u.clickEvent, ".info-box .close", o),
                $(document).on(u.clickEvent, ".scrolltop-button", s),
                $(document).on(u.clickEvent, ".calltoaction", l)
        }
        function o() {
            $(".info-box").toggle()
        }
        function a() {
            c.adspace && $("html").addClass("has-adspace"),
            c.controls.showInfo && f.show(),
            c.controls.showTopButton && d.show(),
            c.controls.showMuteButton && !u.isMobile && p.show(),
            c.intro.showCalltoaction && h.show(),
            c.intro.fullBgImage && $(".full-bg").css("background-image", "url(" + c.intro.fullBgImage + ")")
        }
        function s() {
            $("html, body").animate({
                scrollTop: 0
            }, 600)
        }
        function l() {
            $("html, body").animate({
                scrollTop: window.innerHeight
            }, 600)
        }
        var u = n(5)
            , c = n(6)
            , d = $(".scrolltop-button")
            , f = $(".info-button")
            , p = $(".mute-button")
            , h = $(".calltoaction");
        e.exports = {
            init: r
        }
    }
    , function(e, t, n) {
        function r() {
            c(!0),
                u(),
                v(),
                a(),
                o(),
                m(),
                h(),
                i()
        }
        function i() {
            return y.isMobile ? void $.each($(".poster-only"), function(e, t) {
                var n = $(t)
                    , r = n.find("video")
                    , i = r.attr("data-poster");
                n.find("video").remove();
                var o = new Image;
                o.src = i,
                    n.prepend(o),
                    n.find(".lazyloader").remove()
            }) : !1
        }
        function o() {
            $(".full-bg").find("video").on("loadeddata ", function() {
                $(this)[0].play()
            })
        }
        function a() {
            $("img, video, iframe").on("lazyshow", l),
                $(window).on("scroll", f),
                $(window).on("resize", h),
                $(document).on(y.clickEvent, "video", s),
                T.on(y.clickEvent, d)
        }
        function s(e) {
            var t = e.originalEvent.srcElement;
            return t.paused ? t.play() : void t.pause()
        }
        function l(e) {
            $(this).siblings(".lazyloader").remove()
        }
        function u() {
            x.prepend('<div class="lazyloader"><i class="spin icon_loading"></i></div>')
        }
        function c(e) {
            $.each(k, function(t, n) {
                n.muted = e
            })
        }
        function d() {
            var e = $(this)
                , t = e.hasClass("muted");
            e.toggleClass("muted"),
                c(!t)
        }
        function f() {
            v(),
            b.intro.isFullScreenHeader && m(),
            b.adspace && p()
        }
        function p() {
            var e = scrollY > D ? 0 : D;
            A.css({
                top: e
            })
        }
        function h() {
            g()
        }
        function m() {
            return C.scrollTop() < window.innerHeight ? E.hide() : void E.show()
        }
        function g() {
            if (N.size() <= 0)
                return !1;
            var e = w.outerWidth()
                , t = e / 16 * 9;
            N.css({
                width: e + "px",
                height: t + "px"
            })
        }
        function v() {
            if (y.isMobile)
                return !1;
            var e = !1;
            $.each(k, function(t, n) {
                $(n).visible() && !e ? (n.play(),
                    e = !0) : "undefined" != typeof n.pause && n.pause()
            })
        }
        var y = n(5)
            , b = n(6)
            , x = $(".media-wrapper.lazy")
            , w = $(".media-wrapper")
            , k = $("video")
            , T = $(".mute-button")
            , C = $("body")
            , E = $(".scrolltop-button")
            , N = $(".video-responsive")
            , A = $("header")
            , S = $(".attspace")
            , D = S.outerHeight();
        e.exports = {
            init: r
        }
    }
    , function(e, t, n) {
        function r(e) {
            var t = l.isUndefined(e) ? u.url : e;
            t = encodeURIComponent(t),
                o(t),
                a(t),
                s(t),
                i()
        }
        function i() {
            $.getJSON("http://mpst.achernar.uberspace.de/socialcount/" + u.socialid + ".json", function(e) {
                c.$twCount.text(e.twitter),
                    c.$fbCount.text(e.facebook)
            })
        }
        function o(e) {
            if (!navigator.userAgent.match(/Android|iPhone/i) || navigator.userAgent.match(/iPod|iPad/i))
                return !1;
            c.$waBtn.show(),
                c.$waBtn.append($('<img src="images/whatsapp-icon.svg" />'));
            var t = "whatsapp://send?text=" + u.whatsappText;
            c.$waBtn.attr("href", t)
        }
        function a(e) {
            var t = "http://www.facebook.com/plugins/like.php?href=" + e + "&width&layout=button&action=like&show_faces=false&share=false&height=80&locale=de_DE";
            c.$fbFrame.attr("src", t);
            var n = "https://www.facebook.com/sharer/sharer.php?u=" + e + "&t=" + encodeURIComponent(u.facebookText);
            c.$fbBtn.attr("href", n)
        }
        function s(e) {
            var t = "https://twitter.com/intent/tweet?source=" + e + "&text=" + encodeURIComponent(u.twitterText);
            c.$twBtn.attr("href", t)
        }
        var l = n(5)
            , u = n(6)
            , c = {
            $waBtn: $(".wa-btn"),
            $fbBtn: $(".fb-button"),
            $twBtn: $(".tw-button"),
            $twCount: $(".tw-count"),
            $fbCount: $(".fb-count"),
            $fbFrame: $(".fb-iframe")
        };
        e.exports = {
            init: r
        }
    }
    , function(e, t, n) {
        function r(e, t) {
            n.e(1, function(r) {
                y = n(11),
                    w = n(1),
                    T = w("ul.annotations"),
                    $annotationBox = w(".annotation-box"),
                    $tooltipWrapper = w(".chart-tooltip"),
                    k = w(".chart-cta"),
                    E = e,
                    b = y.time.format("%Y"),
                    y.csv(t, i)
            })
        }
        function i(e) {
            $ = e.map(f),
                o($),
                w(window).on("resize orientationchange", o)
        }
        function o(e) {
            _ = window.innerWidth < 768,
                x = _ ? .8 : .5,
                x = 90 == window.orientation || -90 == window.orientation ? .5 : x,
                J[3] = _ ? 15 : 60,
                B = y.select(E),
                B.node().innerHTML = "",
                Y = p(window.innerWidth),
                extent = y.extent($, function(e, t) {
                    return e[V]
                }),
                N = y.extent($, function(e, t) {
                    return e.date
                }),
                A = y.time.scale().domain(N).range([0, Y[0]]),
                S = y.scale.linear().domain([25e4, 5e5]).range([Y[1], 0]),
                C = B.append("svg").attr({
                    width: Y[0] + J[1] + J[3],
                    height: Y[1] + J[0] + J[2]
                }).append("g").translate([J[3], J[0]]),
                C.call(a),
                D = y.svg.line().x(function(e) {
                    return A(e.date)
                }).y(function(e) {
                    return S(e[V])
                }),
                C.append("path").datum($).attr("class", "line").attr("d", D),
                C.append("g").classed("d3-evt-overlay", !0).call(l),
                tooltip = s(C),
                h(),
                m(),
                y.select(".chart-uber-wrapper").classed("loading", !1)
        }
        function a() {
            j = y.svg.axis().ticks(y.time.year, 1).scale(A).orient("bottom"),
            window.innerWidth < 520 && j.tickValues([b.parse("1991"), b.parse("1996"), b.parse("2000"), b.parse("2004"), b.parse("2008"), b.parse("2013")]),
                L = y.svg.axis().scale(S).tickValues([3e5, 35e4, 4e5, 45e4]).tickFormat(U.numberFormat).orient("left");
            var e = this.append("g").classed("x axis", !0).translate([0, Y[1]]).call(j)
                , t = this.append("g").classed("y axis", !0).call(L);
            t.selectAll(".tick line").attr("x2", Y[0]).classed("tick-line", !0).attr("stroke-dasharray", "5,3"),
                t.selectAll(".tick text").filter(function(e, t) {
                    return _
                }).attr("y", -5).attr("x", 0).style("text-anchor", _ ? "start" : "end"),
                window.innerWidth >= 520 ? e.selectAll("text").filter(function(e, t) {
                    return e.getFullYear() % 2 == 0
                }).remove() : (t.selectAll("text").filter(function(e, t) {
                    return 3e5 == e
                }).remove(),
                    e.selectAll("text").filter(function(e, t) {
                        return 0 == t
                    }).attr("x", 12),
                    e.selectAll("text").filter(function(e, t) {
                        return 2013 == e.getFullYear()
                    }).attr("text-anchor", "end").style("text-anchor", "end"))
        }
        function s(e) {
            $tooltipWrapper.html("");
            var t = w('<div class="tt-key"/>')
                , n = w('<div class="tt-val"/>');
            $tooltipWrapper.append(t),
                $tooltipWrapper.append(n);
            var r = e.append("circle").classed("tooltip-locator", !0).attr("r", 7.5)
                , i = function(e, t) {
                r.attr({
                    cx: e[0],
                    cy: e[1]
                });
                var n = t > $.length - 5;
                n = _ ? t > $.length / 2 : n,
                    n ? $tooltipWrapper.css("transform", "translateX(-100%)") : $tooltipWrapper.css("transform", "translateX(0)"),
                    w(".chart-tooltip").css({
                        top: e[1] + "px",
                        left: e[0] + J[3] + (n ? -10 : 15) + "px"
                    })
            }
                , o = function(e) {
                t.text(e.key),
                    n.text(e.value + " Umzüge")
            }
                , a = function() {
                $tooltipWrapper.hide(),
                    r.style("display", "none")
            }
                , s = function() {
                $tooltipWrapper.show(),
                    r.style("display", "block")
            };
            return {
                setPosition: i,
                hide: a,
                show: s,
                setData: o
            }
        }
        function l(e) {
            H = Y[0] / $.length + 3,
                M = y.scale.linear().domain([0, Y[0]]).range([0, $.length - 1]),
                this.on("mouseleave", c).on("touchmove", u),
                this.selectAll("rect.d3-evt-rect").data($).enter().append("rect").classed("d3-evt-rect", !0).attr("x", function(e, t) {
                    return A(e.date) - H / 2
                }).attr("y", 0).attr("width", H).attr("height", Y[1]).on("mouseenter touchstart click", d)
        }
        function u(e, t) {
            Z = y.event,
                W = y.touches(this)[0],
            Q && (q = Z.touches[0].clientX,
                F = Z.touches[0].clientY,
                O = q - z,
                I = F - P,
                K = Math.abs(I) > Math.abs(O),
                Q = !1),
            K || (k.fadeOut(),
                Z.preventDefault(),
                R = M(W[0]),
                R = 0 > R ? 0 : ~~R,
                R = R > $.length - 1 ? $.length - 1 : R,
                X = $[R],
                tooltip.setPosition([A(X.date), S(X[V])], R),
                tooltip.setData({
                    key: X.date.getFullYear(),
                    value: U.numberFormat(X[V])
                }),
                tooltip.show())
        }
        function c(e, t) {
            tooltip.hide(),
                v()
        }
        function d(e, t) {
            var n = y.event;
            return g(),
                "touchstart" == n.type ? (Q = !0,
                    P = n.touches[0].clientY,
                    void (z = n.touches[0].clientX)) : (n.preventDefault(),
                    k.fadeOut(),
                    tooltip.setPosition([A(e.date), S(e[V])], t),
                    tooltip.setData({
                        key: e.date.getFullYear(),
                        value: U.numberFormat(e[V])
                    }),
                    void tooltip.show())
        }
        function f(e) {
            return {
                date: b.parse(e.date),
                value: parseFloat(e.value)
            }
        }
        function p(e) {
            e = e > G ? G : e;
            var t = e - J[3];
            window.innerWidth < 1e3 && (t -= J[1]);
            var n = t * x;
            return [t, n]
        }
        function h() {
            T.html("");
            var e, t, n, r;
            y.selectAll(".annotation").each(function(i, o) {
                e = y.select(this),
                    r = b.parse(e.attr("data-x")),
                    t = A(r),
                    n = S(e.attr("data-y")),
                    e.style({
                        top: n + J[0] + "px",
                        left: t + J[3] + "px",
                        display: "block"
                    }).classed("bubble", _).text(_ ? o + 1 : e.attr("data-text")),
                    T.append('<li class="clearfix"><div class="index">' + (o + 1) + '</div><div class="text">' + e.attr("data-text") + "</div></li>"),
                    $annotationBox.show()
            })
        }
        function m() {
            y.selectAll(".chart-label").each(function(e, t) {
                _this = y.select(this),
                    date = b.parse(_this.attr("data-x")),
                    xPos = A(date),
                    yPos = S(_this.attr("data-y")),
                    xPos -= "left" == _this.attr("data-orientation") ? 60 : 0,
                    _this.style({
                        top: yPos + J[0] + "px",
                        left: xPos + J[3] + 10 + "px",
                        display: "block"
                    })
            })
        }
        function g() {
            y.selectAll(".chart-label").style("display", "none")
        }
        function v() {
            y.selectAll(".chart-label").style("display", "block")
        }
        var y, b, x, w, k, T, C, E, N, A, S, D, j, L, $, H, M, B, _, z, P, q, F, W, O, I, R, X, U = n(5), G = 930, Y = [0, 0], J = [30, 40, 25, 0], V = "value", K = !0, Q = !0, Z = null ;
        e.exports = {
            init: r
        }
    }
]);

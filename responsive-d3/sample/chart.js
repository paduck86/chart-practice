webpackJsonp([1], {
    11: function(n, t, e) {
        var r, u, i, o = e(12);
        !function() {
            function a(n) {
                function t(n) {
                    if ("string" == typeof n) {
                        var t, e = {}, r = n.split(u);
                        for (n = r.shift(); t = r.shift(); )
                            "." == t ? e["class"] = e["class"] ? e["class"] + " " + r.shift() : r.shift() : "#" == t && (e.id = r.shift());
                        return e.id || e["class"] ? {
                            tag: n,
                            attr: e
                        } : n
                    }
                    return n
                }
                function e(t) {
                    return "function" == typeof t ? t : (t = n.ns.qualify(t)).local ? function() {
                        return this.ownerDocument.createElementNS(t.space, t.local)
                    }
                        : function() {
                        return this.ownerDocument.createElementNS(this.namespaceURI, t)
                    }
                }
                function r(n) {
                    return "function" == typeof n ? n : function() {
                        return this.querySelector(n)
                    }
                }
                n.selection.prototype.translate = function(n) {
                    return this.attr("transform", function(t, e) {
                        return "translate(" + ["function" == typeof n ? n(t, e) : n] + ")"
                    })
                }
                    ,
                    n.transition.prototype.translate = function(n) {
                        return this.attr("transform", function(t, e) {
                            return "translate(" + ["function" == typeof n ? n(t, e) : n] + ")"
                        })
                    }
                    ,
                    n.selection.prototype.tspans = function(n, t) {
                        return this.selectAll("tspan").data(n).enter().append("tspan").text(function(n) {
                            return n
                        }).attr("x", 0).attr("dy", function(n, e) {
                            return e ? t || 15 : 0
                        })
                    }
                    ,
                    n.selection.prototype.append = n.selection.enter.prototype.append = function(n) {
                        var r, u = t(n);
                        return n = u.attr ? u.tag : n,
                            n = e(n),
                            r = this.select(function() {
                                return this.appendChild(n.apply(this, arguments))
                            }),
                            u.attr ? r.attr(u.attr) : r
                    }
                    ,
                    n.selection.prototype.insert = n.selection.enter.prototype.insert = function(n, u) {
                        var i, o = t(n);
                        return n = o.attr ? o.tag : n,
                            n = e(n),
                            u = r(u),
                            i = this.select(function() {
                                return this.insertBefore(n.apply(this, arguments), u.apply(this, arguments) || null )
                            }),
                            o.attr ? i.attr(o.attr) : i
                    }
                ;
                var u = /([\.#])/g;
                n.wordwrap = function(n, t) {
                    var e = n.split(" ")
                        , r = []
                        , u = []
                        , i = t || 40
                        , o = 0;
                    return e.forEach(function(n) {
                        o + n.length > i && (r.push(u.join(" ")),
                            u.length = 0,
                            o = 0),
                            o += n.length,
                            u.push(n)
                    }),
                    u.length && r.push(u.join(" ")),
                        r
                }
                    ,
                    n.ascendingKey = function(n) {
                        return "function" == typeof n ? function(t, e) {
                            return n(t) < n(e) ? -1 : n(t) > n(e) ? 1 : n(t) >= n(e) ? 0 : NaN
                        }
                            : function(t, e) {
                            return t[n] < e[n] ? -1 : t[n] > e[n] ? 1 : t[n] >= e[n] ? 0 : NaN
                        }
                    }
                    ,
                    n.descendingKey = function(n) {
                        return "function" == typeof n ? function(t, e) {
                            return n(e) < n(t) ? -1 : n(e) > n(t) ? 1 : n(e) >= n(t) ? 0 : NaN
                        }
                            : function(t, e) {
                            return e[n] < t[n] ? -1 : e[n] > t[n] ? 1 : e[n] >= t[n] ? 0 : NaN
                        }
                    }
                    ,
                    n.f = function() {
                        for (var n = arguments, t = 0, e = n.length; e > t; )
                            ("string" == typeof n[t] || "number" == typeof n[t]) && (n[t] = function(n) {
                                return function(t) {
                                    return t[n]
                                }
                            }(n[t])),
                                t++;
                        return function(t) {
                            for (var e = 0, r = n.length; e++ < r; )
                                t = n[e - 1].call(this, t);
                            return t
                        }
                    }
                    ,
                window.hasOwnProperty("ƒ") || (window.ƒ = n.f);
                var i = n.selection.prototype.on;
                n.selection.prototype.on = function(n, t, e) {
                    if ("string" == typeof n && n.indexOf(" ") > -1) {
                        n = n.split(" ");
                        for (var r = 0; r < n.length; r++)
                            i.apply(this, [n[r], t, e])
                    } else
                        i.apply(this, [n, t, e]);
                    return this
                }
                    ,
                    n.selection.prototype.prop = n.selection.prototype.property
            }
            "object" == typeof o && o.version ? a(o) : (u = [e(12)],
                r = a,
                i = "function" == typeof r ? r.apply(t, u) : r,
                !(void 0 !== i && (n.exports = i)))
        }(),
            n.exports = o
    },
    12: function(n, t, e) {
        var r, u;
        !function() {
            function i(n) {
                return n && (n.ownerDocument || n.document || n).documentElement
            }
            function o(n) {
                return n && (n.ownerDocument && n.ownerDocument.defaultView || n.document && n || n.defaultView)
            }
            function a(n, t) {
                return t > n ? -1 : n > t ? 1 : n >= t ? 0 : NaN
            }
            function c(n) {
                return null === n ? NaN : +n
            }
            function l(n) {
                return !isNaN(n)
            }
            function s(n) {
                return {
                    left: function(t, e, r, u) {
                        for (arguments.length < 3 && (r = 0),
                             arguments.length < 4 && (u = t.length); u > r; ) {
                            var i = r + u >>> 1;
                            n(t[i], e) < 0 ? r = i + 1 : u = i
                        }
                        return r
                    },
                    right: function(t, e, r, u) {
                        for (arguments.length < 3 && (r = 0),
                             arguments.length < 4 && (u = t.length); u > r; ) {
                            var i = r + u >>> 1;
                            n(t[i], e) > 0 ? u = i : r = i + 1
                        }
                        return r
                    }
                }
            }
            function f(n) {
                return n.length
            }
            function h(n) {
                for (var t = 1; n * t % 1; )
                    t *= 10;
                return t
            }
            function g(n, t) {
                for (var e in t)
                    Object.defineProperty(n.prototype, e, {
                        value: t[e],
                        enumerable: !1
                    })
            }
            function p() {
                this._ = Object.create(null )
            }
            function v(n) {
                return (n += "") === xo || n[0] === bo ? bo + n : n
            }
            function d(n) {
                return (n += "")[0] === bo ? n.slice(1) : n
            }
            function m(n) {
                return v(n)in this._
            }
            function y(n) {
                return (n = v(n))in this._ && delete this._[n]
            }
            function M() {
                var n = [];
                for (var t in this._)
                    n.push(d(t));
                return n
            }
            function x() {
                var n = 0;
                for (var t in this._)
                    ++n;
                return n
            }
            function b() {
                for (var n in this._)
                    return !1;
                return !0
            }
            function w() {
                this._ = Object.create(null )
            }
            function _(n) {
                return n
            }
            function S(n, t, e) {
                return function() {
                    var r = e.apply(t, arguments);
                    return r === t ? n : r
                }
            }
            function k(n, t) {
                if (t in n)
                    return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e = 0, r = wo.length; r > e; ++e) {
                    var u = wo[e] + t;
                    if (u in n)
                        return u
                }
            }
            function N() {}
            function E() {}
            function A(n) {
                function t() {
                    for (var t, r = e, u = -1, i = r.length; ++u < i; )
                        (t = r[u].on) && t.apply(this, arguments);
                    return n
                }
                var e = []
                    , r = new p;
                return t.on = function(t, u) {
                    var i, o = r.get(t);
                    return arguments.length < 2 ? o && o.on : (o && (o.on = null ,
                        e = e.slice(0, i = e.indexOf(o)).concat(e.slice(i + 1)),
                        r.remove(t)),
                    u && e.push(r.set(t, {
                        on: u
                    })),
                        n)
                }
                    ,
                    t
            }
            function C() {
                oo.event.preventDefault()
            }
            function z() {
                for (var n, t = oo.event; n = t.sourceEvent; )
                    t = n;
                return t
            }
            function q(n) {
                for (var t = new E, e = 0, r = arguments.length; ++e < r; )
                    t[arguments[e]] = A(t);
                return t.of = function(e, r) {
                    return function(u) {
                        try {
                            var i = u.sourceEvent = oo.event;
                            u.target = n,
                                oo.event = u,
                                t[u.type].apply(e, r)
                        } finally {
                            oo.event = i
                        }
                    }
                }
                    ,
                    t
            }
            function L(n) {
                return So(n, Ao),
                    n
            }
            function T(n) {
                return "function" == typeof n ? n : function() {
                    return ko(n, this)
                }
            }
            function R(n) {
                return "function" == typeof n ? n : function() {
                    return No(n, this)
                }
            }
            function D(n, t) {
                function e() {
                    this.removeAttribute(n)
                }
                function r() {
                    this.removeAttributeNS(n.space, n.local)
                }
                function u() {
                    this.setAttribute(n, t)
                }
                function i() {
                    this.setAttributeNS(n.space, n.local, t)
                }
                function o() {
                    var e = t.apply(this, arguments);
                    null == e ? this.removeAttribute(n) : this.setAttribute(n, e)
                }
                function a() {
                    var e = t.apply(this, arguments);
                    null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e)
                }
                return n = oo.ns.qualify(n),
                    null == t ? n.local ? r : e : "function" == typeof t ? n.local ? a : o : n.local ? i : u
            }
            function P(n) {
                return n.trim().replace(/\s+/g, " ")
            }
            function j(n) {
                return new RegExp("(?:^|\\s+)" + oo.requote(n) + "(?:\\s+|$)","g")
            }
            function U(n) {
                return (n + "").trim().split(/^|\s+/)
            }
            function F(n, t) {
                function e() {
                    for (var e = -1; ++e < u; )
                        n[e](this, t)
                }
                function r() {
                    for (var e = -1, r = t.apply(this, arguments); ++e < u; )
                        n[e](this, r)
                }
                n = U(n).map(H);
                var u = n.length;
                return "function" == typeof t ? r : e
            }
            function H(n) {
                var t = j(n);
                return function(e, r) {
                    if (u = e.classList)
                        return r ? u.add(n) : u.remove(n);
                    var u = e.getAttribute("class") || "";
                    r ? (t.lastIndex = 0,
                    t.test(u) || e.setAttribute("class", P(u + " " + n))) : e.setAttribute("class", P(u.replace(t, " ")))
                }
            }
            function O(n, t, e) {
                function r() {
                    this.style.removeProperty(n)
                }
                function u() {
                    this.style.setProperty(n, t, e)
                }
                function i() {
                    var r = t.apply(this, arguments);
                    null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e)
                }
                return null == t ? r : "function" == typeof t ? i : u
            }
            function I(n, t) {
                function e() {
                    delete this[n]
                }
                function r() {
                    this[n] = t
                }
                function u() {
                    var e = t.apply(this, arguments);
                    null == e ? delete this[n] : this[n] = e
                }
                return null == t ? e : "function" == typeof t ? u : r
            }
            function Y(n) {
                function t() {
                    var t = this.ownerDocument
                        , e = this.namespaceURI;
                    return e ? t.createElementNS(e, n) : t.createElement(n)
                }
                function e() {
                    return this.ownerDocument.createElementNS(n.space, n.local)
                }
                return "function" == typeof n ? n : (n = oo.ns.qualify(n)).local ? e : t
            }
            function Z() {
                var n = this.parentNode;
                n && n.removeChild(this)
            }
            function V(n) {
                return {
                    __data__: n
                }
            }
            function X(n) {
                return function() {
                    return Eo(this, n)
                }
            }
            function $(n) {
                return arguments.length || (n = a),
                    function(t, e) {
                        return t && e ? n(t.__data__, e.__data__) : !t - !e
                    }
            }
            function B(n, t) {
                for (var e = 0, r = n.length; r > e; e++)
                    for (var u, i = n[e], o = 0, a = i.length; a > o; o++)
                        (u = i[o]) && t(u, o, e);
                return n
            }
            function J(n) {
                return So(n, zo),
                    n
            }
            function W(n) {
                var t, e;
                return function(r, u, i) {
                    var o, a = n[i].update, c = a.length;
                    for (i != e && (e = i,
                        t = 0),
                         u >= t && (t = u + 1); !(o = a[t]) && ++t < c; )
                        ;
                    return o
                }
            }
            function K(n, t, e) {
                function r() {
                    var t = this[o];
                    t && (this.removeEventListener(n, t, t.$),
                        delete this[o])
                }
                function u() {
                    var u = c(t, co(arguments));
                    r.call(this),
                        this.addEventListener(n, this[o] = u, u.$ = e),
                        u._ = t
                }
                function i() {
                    var t, e = new RegExp("^__on([^.]+)" + oo.requote(n) + "$");
                    for (var r in this)
                        if (t = r.match(e)) {
                            var u = this[r];
                            this.removeEventListener(t[1], u, u.$),
                                delete this[r]
                        }
                }
                var o = "__on" + n
                    , a = n.indexOf(".")
                    , c = G;
                a > 0 && (n = n.slice(0, a));
                var l = qo.get(n);
                return l && (n = l,
                    c = Q),
                    a ? t ? u : r : t ? N : i
            }
            function G(n, t) {
                return function(e) {
                    var r = oo.event;
                    oo.event = e,
                        t[0] = this.__data__;
                    try {
                        n.apply(this, t)
                    } finally {
                        oo.event = r
                    }
                }
            }
            function Q(n, t) {
                var e = G(n, t);
                return function(n) {
                    var t = this
                        , r = n.relatedTarget;
                    r && (r === t || 8 & r.compareDocumentPosition(t)) || e.call(t, n)
                }
            }
            function nn(n) {
                var t = ".dragsuppress-" + ++To
                    , e = "click" + t
                    , r = oo.select(o(n)).on("touchmove" + t, C).on("dragstart" + t, C).on("selectstart" + t, C);
                if (null == Lo && (Lo = "onselectstart"in n ? !1 : k(n.style, "userSelect")),
                        Lo) {
                    var u = i(n).style
                        , a = u[Lo];
                    u[Lo] = "none"
                }
                return function(n) {
                    if (r.on(t, null ),
                        Lo && (u[Lo] = a),
                            n) {
                        var i = function() {
                            r.on(e, null )
                        };
                        r.on(e, function() {
                            C(),
                                i()
                        }, !0),
                            setTimeout(i, 0)
                    }
                }
            }
            function tn(n, t) {
                t.changedTouches && (t = t.changedTouches[0]);
                var e = n.ownerSVGElement || n;
                if (e.createSVGPoint) {
                    var r = e.createSVGPoint();
                    if (0 > Ro) {
                        var u = o(n);
                        if (u.scrollX || u.scrollY) {
                            e = oo.select("body").append("svg").style({
                                position: "absolute",
                                top: 0,
                                left: 0,
                                margin: 0,
                                padding: 0,
                                border: "none"
                            }, "important");
                            var i = e[0][0].getScreenCTM();
                            Ro = !(i.f || i.e),
                                e.remove()
                        }
                    }
                    return Ro ? (r.x = t.pageX,
                        r.y = t.pageY) : (r.x = t.clientX,
                        r.y = t.clientY),
                        r = r.matrixTransform(n.getScreenCTM().inverse()),
                        [r.x, r.y]
                }
                var a = n.getBoundingClientRect();
                return [t.clientX - a.left - n.clientLeft, t.clientY - a.top - n.clientTop]
            }
            function en() {
                return oo.event.changedTouches[0].identifier
            }
            function rn(n) {
                return n > 0 ? 1 : 0 > n ? -1 : 0
            }
            function un(n, t, e) {
                return (t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0])
            }
            function on(n) {
                return n > 1 ? 0 : -1 > n ? jo : Math.acos(n)
            }
            function an(n) {
                return n > 1 ? Ho : -1 > n ? -Ho : Math.asin(n)
            }
            function cn(n) {
                return ((n = Math.exp(n)) - 1 / n) / 2
            }
            function ln(n) {
                return ((n = Math.exp(n)) + 1 / n) / 2
            }
            function sn(n) {
                return ((n = Math.exp(2 * n)) - 1) / (n + 1)
            }
            function fn(n) {
                return (n = Math.sin(n / 2)) * n
            }
            function hn() {}
            function gn(n, t, e) {
                return this instanceof gn ? (this.h = +n,
                    this.s = +t,
                    void (this.l = +e)) : arguments.length < 2 ? n instanceof gn ? new gn(n.h,n.s,n.l) : En("" + n, An, gn) : new gn(n,t,e)
            }
            function pn(n, t, e) {
                function r(n) {
                    return n > 360 ? n -= 360 : 0 > n && (n += 360),
                        60 > n ? i + (o - i) * n / 60 : 180 > n ? o : 240 > n ? i + (o - i) * (240 - n) / 60 : i
                }
                function u(n) {
                    return Math.round(255 * r(n))
                }
                var i, o;
                return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n,
                    t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t,
                    e = 0 > e ? 0 : e > 1 ? 1 : e,
                    o = .5 >= e ? e * (1 + t) : e + t - e * t,
                    i = 2 * e - o,
                    new _n(u(n + 120),u(n),u(n - 120))
            }
            function vn(n, t, e) {
                return this instanceof vn ? (this.h = +n,
                    this.c = +t,
                    void (this.l = +e)) : arguments.length < 2 ? n instanceof vn ? new vn(n.h,n.c,n.l) : n instanceof mn ? Mn(n.l, n.a, n.b) : Mn((n = Cn((n = oo.rgb(n)).r, n.g, n.b)).l, n.a, n.b) : new vn(n,t,e)
            }
            function dn(n, t, e) {
                return isNaN(n) && (n = 0),
                isNaN(t) && (t = 0),
                    new mn(e,Math.cos(n *= Oo) * t,Math.sin(n) * t)
            }
            function mn(n, t, e) {
                return this instanceof mn ? (this.l = +n,
                    this.a = +t,
                    void (this.b = +e)) : arguments.length < 2 ? n instanceof mn ? new mn(n.l,n.a,n.b) : n instanceof vn ? dn(n.h, n.c, n.l) : Cn((n = _n(n)).r, n.g, n.b) : new mn(n,t,e)
            }
            function yn(n, t, e) {
                var r = (n + 16) / 116
                    , u = r + t / 500
                    , i = r - e / 200;
                return u = xn(u) * Go,
                    r = xn(r) * Qo,
                    i = xn(i) * na,
                    new _n(wn(3.2404542 * u - 1.5371385 * r - .4985314 * i),wn(-.969266 * u + 1.8760108 * r + .041556 * i),wn(.0556434 * u - .2040259 * r + 1.0572252 * i))
            }
            function Mn(n, t, e) {
                return n > 0 ? new vn(Math.atan2(e, t) * Io,Math.sqrt(t * t + e * e),n) : new vn(NaN,NaN,n)
            }
            function xn(n) {
                return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037
            }
            function bn(n) {
                return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29
            }
            function wn(n) {
                return Math.round(255 * (.00304 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055))
            }
            function _n(n, t, e) {
                return this instanceof _n ? (this.r = ~~n,
                    this.g = ~~t,
                    void (this.b = ~~e)) : arguments.length < 2 ? n instanceof _n ? new _n(n.r,n.g,n.b) : En("" + n, _n, pn) : new _n(n,t,e)
            }
            function Sn(n) {
                return new _n(n >> 16,n >> 8 & 255,255 & n)
            }
            function kn(n) {
                return Sn(n) + ""
            }
            function Nn(n) {
                return 16 > n ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16)
            }
            function En(n, t, e) {
                n = n.toLowerCase();
                var r, u, i, o = 0, a = 0, c = 0;
                if (r = /([a-z]+)\((.*)\)/.exec(n))
                    switch (u = r[2].split(","),
                        r[1]) {
                        case "hsl":
                            return e(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);
                        case "rgb":
                            return t(qn(u[0]), qn(u[1]), qn(u[2]))
                    }
                return (i = ra.get(n)) ? t(i.r, i.g, i.b) : (null == n || "#" !== n.charAt(0) || isNaN(i = parseInt(n.slice(1), 16)) || (4 === n.length ? (o = (3840 & i) >> 4,
                    o = o >> 4 | o,
                    a = 240 & i,
                    a = a >> 4 | a,
                    c = 15 & i,
                    c = c << 4 | c) : 7 === n.length && (o = (16711680 & i) >> 16,
                    a = (65280 & i) >> 8,
                    c = 255 & i)),
                    t(o, a, c))
            }
            function An(n, t, e) {
                var r, u, i = Math.min(n /= 255, t /= 255, e /= 255), o = Math.max(n, t, e), a = o - i, c = (o + i) / 2;
                return a ? (u = .5 > c ? a / (o + i) : a / (2 - o - i),
                    r = n == o ? (t - e) / a + (e > t ? 6 : 0) : t == o ? (e - n) / a + 2 : (n - t) / a + 4,
                    r *= 60) : (r = NaN,
                    u = c > 0 && 1 > c ? 0 : r),
                    new gn(r,u,c)
            }
            function Cn(n, t, e) {
                n = zn(n),
                    t = zn(t),
                    e = zn(e);
                var r = bn((.4124564 * n + .3575761 * t + .1804375 * e) / Go)
                    , u = bn((.2126729 * n + .7151522 * t + .072175 * e) / Qo)
                    , i = bn((.0193339 * n + .119192 * t + .9503041 * e) / na);
                return mn(116 * u - 16, 500 * (r - u), 200 * (u - i))
            }
            function zn(n) {
                return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
            }
            function qn(n) {
                var t = parseFloat(n);
                return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t
            }
            function Ln(n) {
                return "function" == typeof n ? n : function() {
                    return n
                }
            }
            function Tn(n) {
                return function(t, e, r) {
                    return 2 === arguments.length && "function" == typeof e && (r = e,
                        e = null ),
                        Rn(t, e, n, r)
                }
            }
            function Rn(n, t, e, r) {
                function u() {
                    var n, t = c.status;
                    if (!t && Pn(c) || t >= 200 && 300 > t || 304 === t) {
                        try {
                            n = e.call(i, c)
                        } catch (r) {
                            return void o.error.call(i, r)
                        }
                        o.load.call(i, n)
                    } else
                        o.error.call(i, c)
                }
                var i = {}
                    , o = oo.dispatch("beforesend", "progress", "load", "error")
                    , a = {}
                    , c = new XMLHttpRequest
                    , l = null ;
                return !this.XDomainRequest || "withCredentials"in c || !/^(http(s)?:)?\/\//.test(n) || (c = new XDomainRequest),
                    "onload"in c ? c.onload = c.onerror = u : c.onreadystatechange = function() {
                        c.readyState > 3 && u()
                    }
                    ,
                    c.onprogress = function(n) {
                        var t = oo.event;
                        oo.event = n;
                        try {
                            o.progress.call(i, c)
                        } finally {
                            oo.event = t
                        }
                    }
                    ,
                    i.header = function(n, t) {
                        return n = (n + "").toLowerCase(),
                            arguments.length < 2 ? a[n] : (null == t ? delete a[n] : a[n] = t + "",
                                i)
                    }
                    ,
                    i.mimeType = function(n) {
                        return arguments.length ? (t = null == n ? null : n + "",
                            i) : t
                    }
                    ,
                    i.responseType = function(n) {
                        return arguments.length ? (l = n,
                            i) : l
                    }
                    ,
                    i.response = function(n) {
                        return e = n,
                            i
                    }
                    ,
                    ["get", "post"].forEach(function(n) {
                        i[n] = function() {
                            return i.send.apply(i, [n].concat(co(arguments)))
                        }
                    }),
                    i.send = function(e, r, u) {
                        if (2 === arguments.length && "function" == typeof r && (u = r,
                                r = null ),
                                c.open(e, n, !0),
                            null == t || "accept"in a || (a.accept = t + ",*/*"),
                                c.setRequestHeader)
                            for (var s in a)
                                c.setRequestHeader(s, a[s]);
                        return null != t && c.overrideMimeType && c.overrideMimeType(t),
                        null != l && (c.responseType = l),
                        null != u && i.on("error", u).on("load", function(n) {
                            u(null , n)
                        }),
                            o.beforesend.call(i, c),
                            c.send(null == r ? null : r),
                            i
                    }
                    ,
                    i.abort = function() {
                        return c.abort(),
                            i
                    }
                    ,
                    oo.rebind(i, o, "on"),
                    null == r ? i : i.get(Dn(r))
            }
            function Dn(n) {
                return 1 === n.length ? function(t, e) {
                    n(null == t ? e : null )
                }
                    : n
            }
            function Pn(n) {
                var t = n.responseType;
                return t && "text" !== t ? n.response : n.responseText
            }
            function jn() {
                var n = Un()
                    , t = Fn() - n;
                t > 24 ? (isFinite(t) && (clearTimeout(aa),
                    aa = setTimeout(jn, t)),
                    oa = 0) : (oa = 1,
                    la(jn))
            }
            function Un() {
                var n = Date.now();
                for (ca = ua; ca; )
                    n >= ca.t && (ca.f = ca.c(n - ca.t)),
                        ca = ca.n;
                return n
            }
            function Fn() {
                for (var n, t = ua, e = 1 / 0; t; )
                    t.f ? t = n ? n.n = t.n : ua = t.n : (t.t < e && (e = t.t),
                        t = (n = t).n);
                return ia = n,
                    e
            }
            function Hn(n, t) {
                return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1)
            }
            function On(n, t) {
                var e = Math.pow(10, 3 * Mo(8 - t));
                return {
                    scale: t > 8 ? function(n) {
                        return n / e
                    }
                        : function(n) {
                        return n * e
                    }
                    ,
                    symbol: n
                }
            }
            function In(n) {
                var t = n.decimal
                    , e = n.thousands
                    , r = n.grouping
                    , u = n.currency
                    , i = r && e ? function(n, t) {
                    for (var u = n.length, i = [], o = 0, a = r[0], c = 0; u > 0 && a > 0 && (c + a + 1 > t && (a = Math.max(1, t - c)),
                        i.push(n.substring(u -= a, u + a)),
                        !((c += a + 1) > t)); )
                        a = r[o = (o + 1) % r.length];
                    return i.reverse().join(e)
                }
                    : _;
                return function(n) {
                    var e = fa.exec(n)
                        , r = e[1] || " "
                        , o = e[2] || ">"
                        , a = e[3] || "-"
                        , c = e[4] || ""
                        , l = e[5]
                        , s = +e[6]
                        , f = e[7]
                        , h = e[8]
                        , g = e[9]
                        , p = 1
                        , v = ""
                        , d = ""
                        , m = !1
                        , y = !0;
                    switch (h && (h = +h.substring(1)),
                    (l || "0" === r && "=" === o) && (l = r = "0",
                        o = "="),
                        g) {
                        case "n":
                            f = !0,
                                g = "g";
                            break;
                        case "%":
                            p = 100,
                                d = "%",
                                g = "f";
                            break;
                        case "p":
                            p = 100,
                                d = "%",
                                g = "r";
                            break;
                        case "b":
                        case "o":
                        case "x":
                        case "X":
                            "#" === c && (v = "0" + g.toLowerCase());
                        case "c":
                            y = !1;
                        case "d":
                            m = !0,
                                h = 0;
                            break;
                        case "s":
                            p = -1,
                                g = "r"
                    }
                    "$" === c && (v = u[0],
                        d = u[1]),
                    "r" != g || h || (g = "g"),
                    null != h && ("g" == g ? h = Math.max(1, Math.min(21, h)) : ("e" == g || "f" == g) && (h = Math.max(0, Math.min(20, h)))),
                        g = ha.get(g) || Yn;
                    var M = l && f;
                    return function(n) {
                        var e = d;
                        if (m && n % 1)
                            return "";
                        var u = 0 > n || 0 === n && 0 > 1 / n ? (n = -n,
                            "-") : "-" === a ? "" : a;
                        if (0 > p) {
                            var c = oo.formatPrefix(n, h);
                            n = c.scale(n),
                                e = c.symbol + d
                        } else
                            n *= p;
                        n = g(n, h);
                        var x, b, w = n.lastIndexOf(".");
                        if (0 > w) {
                            var _ = y ? n.lastIndexOf("e") : -1;
                            0 > _ ? (x = n,
                                b = "") : (x = n.substring(0, _),
                                b = n.substring(_))
                        } else
                            x = n.substring(0, w),
                                b = t + n.substring(w + 1);
                        !l && f && (x = i(x, 1 / 0));
                        var S = v.length + x.length + b.length + (M ? 0 : u.length)
                            , k = s > S ? new Array(S = s - S + 1).join(r) : "";
                        return M && (x = i(k + x, k.length ? s - b.length : 1 / 0)),
                            u += v,
                            n = x + b,
                        ("<" === o ? u + n + k : ">" === o ? k + u + n : "^" === o ? k.substring(0, S >>= 1) + u + n + k.substring(S) : u + (M ? n : k + n)) + e
                    }
                }
            }
            function Yn(n) {
                return n + ""
            }
            function Zn() {
                this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
            }
            function Vn(n, t, e) {
                function r(t) {
                    var e = n(t)
                        , r = i(e, 1);
                    return r - t > t - e ? e : r
                }
                function u(e) {
                    return t(e = n(new pa(e - 1)), 1),
                        e
                }
                function i(n, e) {
                    return t(n = new pa(+n), e),
                        n
                }
                function o(n, r, i) {
                    var o = u(n)
                        , a = [];
                    if (i > 1)
                        for (; r > o; )
                            e(o) % i || a.push(new Date(+o)),
                                t(o, 1);
                    else
                        for (; r > o; )
                            a.push(new Date(+o)),
                                t(o, 1);
                    return a
                }
                function a(n, t, e) {
                    try {
                        pa = Zn;
                        var r = new Zn;
                        return r._ = n,
                            o(r, t, e)
                    } finally {
                        pa = Date
                    }
                }
                n.floor = n,
                    n.round = r,
                    n.ceil = u,
                    n.offset = i,
                    n.range = o;
                var c = n.utc = Xn(n);
                return c.floor = c,
                    c.round = Xn(r),
                    c.ceil = Xn(u),
                    c.offset = Xn(i),
                    c.range = a,
                    n
            }
            function Xn(n) {
                return function(t, e) {
                    try {
                        pa = Zn;
                        var r = new Zn;
                        return r._ = t,
                            n(r, e)._
                    } finally {
                        pa = Date
                    }
                }
            }
            function $n(n) {
                function t(n) {
                    function t(t) {
                        for (var e, u, i, o = [], a = -1, c = 0; ++a < r; )
                            37 === n.charCodeAt(a) && (o.push(n.slice(c, a)),
                            null != (u = da[e = n.charAt(++a)]) && (e = n.charAt(++a)),
                            (i = A[e]) && (e = i(t, null == u ? "e" === e ? " " : "0" : u)),
                                o.push(e),
                                c = a + 1);
                        return o.push(n.slice(c, a)),
                            o.join("")
                    }
                    var r = n.length;
                    return t.parse = function(t) {
                        var r = {
                            y: 1900,
                            m: 0,
                            d: 1,
                            H: 0,
                            M: 0,
                            S: 0,
                            L: 0,
                            Z: null
                        }
                            , u = e(r, n, t, 0);
                        if (u != t.length)
                            return null ;
                        "p"in r && (r.H = r.H % 12 + 12 * r.p);
                        var i = null != r.Z && pa !== Zn
                            , o = new (i ? Zn : pa);
                        return "j"in r ? o.setFullYear(r.y, 0, r.j) : "w"in r && ("W"in r || "U"in r) ? (o.setFullYear(r.y, 0, 1),
                            o.setFullYear(r.y, 0, "W"in r ? (r.w + 6) % 7 + 7 * r.W - (o.getDay() + 5) % 7 : r.w + 7 * r.U - (o.getDay() + 6) % 7)) : o.setFullYear(r.y, r.m, r.d),
                            o.setHours(r.H + (r.Z / 100 | 0), r.M + r.Z % 100, r.S, r.L),
                            i ? o._ : o
                    }
                        ,
                        t.toString = function() {
                            return n
                        }
                        ,
                        t
                }
                function e(n, t, e, r) {
                    for (var u, i, o, a = 0, c = t.length, l = e.length; c > a; ) {
                        if (r >= l)
                            return -1;
                        if (u = t.charCodeAt(a++),
                            37 === u) {
                            if (o = t.charAt(a++),
                                    i = C[o in da ? t.charAt(a++) : o],
                                !i || (r = i(n, e, r)) < 0)
                                return -1
                        } else if (u != e.charCodeAt(r++))
                            return -1
                    }
                    return r
                }
                function r(n, t, e) {
                    w.lastIndex = 0;
                    var r = w.exec(t.slice(e));
                    return r ? (n.w = _.get(r[0].toLowerCase()),
                    e + r[0].length) : -1
                }
                function u(n, t, e) {
                    x.lastIndex = 0;
                    var r = x.exec(t.slice(e));
                    return r ? (n.w = b.get(r[0].toLowerCase()),
                    e + r[0].length) : -1
                }
                function i(n, t, e) {
                    N.lastIndex = 0;
                    var r = N.exec(t.slice(e));
                    return r ? (n.m = E.get(r[0].toLowerCase()),
                    e + r[0].length) : -1
                }
                function o(n, t, e) {
                    S.lastIndex = 0;
                    var r = S.exec(t.slice(e));
                    return r ? (n.m = k.get(r[0].toLowerCase()),
                    e + r[0].length) : -1
                }
                function a(n, t, r) {
                    return e(n, A.c.toString(), t, r)
                }
                function c(n, t, r) {
                    return e(n, A.x.toString(), t, r)
                }
                function l(n, t, r) {
                    return e(n, A.X.toString(), t, r)
                }
                function s(n, t, e) {
                    var r = M.get(t.slice(e, e += 2).toLowerCase());
                    return null == r ? -1 : (n.p = r,
                        e)
                }
                var f = n.dateTime
                    , h = n.date
                    , g = n.time
                    , p = n.periods
                    , v = n.days
                    , d = n.shortDays
                    , m = n.months
                    , y = n.shortMonths;
                t.utc = function(n) {
                    function e(n) {
                        try {
                            pa = Zn;
                            var t = new pa;
                            return t._ = n,
                                r(t)
                        } finally {
                            pa = Date
                        }
                    }
                    var r = t(n);
                    return e.parse = function(n) {
                        try {
                            pa = Zn;
                            var t = r.parse(n);
                            return t && t._
                        } finally {
                            pa = Date
                        }
                    }
                        ,
                        e.toString = r.toString,
                        e
                }
                    ,
                    t.multi = t.utc.multi = gt;
                var M = oo.map()
                    , x = Jn(v)
                    , b = Wn(v)
                    , w = Jn(d)
                    , _ = Wn(d)
                    , S = Jn(m)
                    , k = Wn(m)
                    , N = Jn(y)
                    , E = Wn(y);
                p.forEach(function(n, t) {
                    M.set(n.toLowerCase(), t)
                });
                var A = {
                    a: function(n) {
                        return d[n.getDay()]
                    },
                    A: function(n) {
                        return v[n.getDay()]
                    },
                    b: function(n) {
                        return y[n.getMonth()]
                    },
                    B: function(n) {
                        return m[n.getMonth()]
                    },
                    c: t(f),
                    d: function(n, t) {
                        return Bn(n.getDate(), t, 2)
                    },
                    e: function(n, t) {
                        return Bn(n.getDate(), t, 2)
                    },
                    H: function(n, t) {
                        return Bn(n.getHours(), t, 2)
                    },
                    I: function(n, t) {
                        return Bn(n.getHours() % 12 || 12, t, 2)
                    },
                    j: function(n, t) {
                        return Bn(1 + ga.dayOfYear(n), t, 3)
                    },
                    L: function(n, t) {
                        return Bn(n.getMilliseconds(), t, 3)
                    },
                    m: function(n, t) {
                        return Bn(n.getMonth() + 1, t, 2)
                    },
                    M: function(n, t) {
                        return Bn(n.getMinutes(), t, 2)
                    },
                    p: function(n) {
                        return p[+(n.getHours() >= 12)]
                    },
                    S: function(n, t) {
                        return Bn(n.getSeconds(), t, 2)
                    },
                    U: function(n, t) {
                        return Bn(ga.sundayOfYear(n), t, 2)
                    },
                    w: function(n) {
                        return n.getDay()
                    },
                    W: function(n, t) {
                        return Bn(ga.mondayOfYear(n), t, 2)
                    },
                    x: t(h),
                    X: t(g),
                    y: function(n, t) {
                        return Bn(n.getFullYear() % 100, t, 2)
                    },
                    Y: function(n, t) {
                        return Bn(n.getFullYear() % 1e4, t, 4)
                    },
                    Z: ft,
                    "%": function() {
                        return "%"
                    }
                }
                    , C = {
                    a: r,
                    A: u,
                    b: i,
                    B: o,
                    c: a,
                    d: it,
                    e: it,
                    H: at,
                    I: at,
                    j: ot,
                    L: st,
                    m: ut,
                    M: ct,
                    p: s,
                    S: lt,
                    U: Gn,
                    w: Kn,
                    W: Qn,
                    x: c,
                    X: l,
                    y: tt,
                    Y: nt,
                    Z: et,
                    "%": ht
                };
                return t
            }
            function Bn(n, t, e) {
                var r = 0 > n ? "-" : ""
                    , u = (r ? -n : n) + ""
                    , i = u.length;
                return r + (e > i ? new Array(e - i + 1).join(t) + u : u)
            }
            function Jn(n) {
                return new RegExp("^(?:" + n.map(oo.requote).join("|") + ")","i")
            }
            function Wn(n) {
                for (var t = new p, e = -1, r = n.length; ++e < r; )
                    t.set(n[e].toLowerCase(), e);
                return t
            }
            function Kn(n, t, e) {
                ma.lastIndex = 0;
                var r = ma.exec(t.slice(e, e + 1));
                return r ? (n.w = +r[0],
                e + r[0].length) : -1
            }
            function Gn(n, t, e) {
                ma.lastIndex = 0;
                var r = ma.exec(t.slice(e));
                return r ? (n.U = +r[0],
                e + r[0].length) : -1
            }
            function Qn(n, t, e) {
                ma.lastIndex = 0;
                var r = ma.exec(t.slice(e));
                return r ? (n.W = +r[0],
                e + r[0].length) : -1
            }
            function nt(n, t, e) {
                ma.lastIndex = 0;
                var r = ma.exec(t.slice(e, e + 4));
                return r ? (n.y = +r[0],
                e + r[0].length) : -1
            }
            function tt(n, t, e) {
                ma.lastIndex = 0;
                var r = ma.exec(t.slice(e, e + 2));
                return r ? (n.y = rt(+r[0]),
                e + r[0].length) : -1
            }
            function et(n, t, e) {
                return /^[+-]\d{4}$/.test(t = t.slice(e, e + 5)) ? (n.Z = -t,
                e + 5) : -1
            }
            function rt(n) {
                return n + (n > 68 ? 1900 : 2e3)
            }
            function ut(n, t, e) {
                ma.lastIndex = 0;
                var r = ma.exec(t.slice(e, e + 2));
                return r ? (n.m = r[0] - 1,
                e + r[0].length) : -1
            }
            function it(n, t, e) {
                ma.lastIndex = 0;
                var r = ma.exec(t.slice(e, e + 2));
                return r ? (n.d = +r[0],
                e + r[0].length) : -1
            }
            function ot(n, t, e) {
                ma.lastIndex = 0;
                var r = ma.exec(t.slice(e, e + 3));
                return r ? (n.j = +r[0],
                e + r[0].length) : -1
            }
            function at(n, t, e) {
                ma.lastIndex = 0;
                var r = ma.exec(t.slice(e, e + 2));
                return r ? (n.H = +r[0],
                e + r[0].length) : -1
            }
            function ct(n, t, e) {
                ma.lastIndex = 0;
                var r = ma.exec(t.slice(e, e + 2));
                return r ? (n.M = +r[0],
                e + r[0].length) : -1
            }
            function lt(n, t, e) {
                ma.lastIndex = 0;
                var r = ma.exec(t.slice(e, e + 2));
                return r ? (n.S = +r[0],
                e + r[0].length) : -1
            }
            function st(n, t, e) {
                ma.lastIndex = 0;
                var r = ma.exec(t.slice(e, e + 3));
                return r ? (n.L = +r[0],
                e + r[0].length) : -1
            }
            function ft(n) {
                var t = n.getTimezoneOffset()
                    , e = t > 0 ? "-" : "+"
                    , r = Mo(t) / 60 | 0
                    , u = Mo(t) % 60;
                return e + Bn(r, "0", 2) + Bn(u, "0", 2)
            }
            function ht(n, t, e) {
                ya.lastIndex = 0;
                var r = ya.exec(t.slice(e, e + 1));
                return r ? e + r[0].length : -1
            }
            function gt(n) {
                for (var t = n.length, e = -1; ++e < t; )
                    n[e][0] = this(n[e][0]);
                return function(t) {
                    for (var e = 0, r = n[e]; !r[1](t); )
                        r = n[++e];
                    return r[0](t)
                }
            }
            function pt() {}
            function vt(n, t, e) {
                var r = e.s = n + t
                    , u = r - n
                    , i = r - u;
                e.t = n - i + (t - u)
            }
            function dt(n, t) {
                n && wa.hasOwnProperty(n.type) && wa[n.type](n, t)
            }
            function mt(n, t, e) {
                var r, u = -1, i = n.length - e;
                for (t.lineStart(); ++u < i; )
                    r = n[u],
                        t.point(r[0], r[1], r[2]);
                t.lineEnd()
            }
            function yt(n, t) {
                var e = -1
                    , r = n.length;
                for (t.polygonStart(); ++e < r; )
                    mt(n[e], t, 1);
                t.polygonEnd()
            }
            function Mt() {
                function n(n, t) {
                    n *= Oo,
                        t = t * Oo / 2 + jo / 4;
                    var e = n - r
                        , o = e >= 0 ? 1 : -1
                        , a = o * e
                        , c = Math.cos(t)
                        , l = Math.sin(t)
                        , s = i * l
                        , f = u * c + s * Math.cos(a)
                        , h = s * o * Math.sin(a);
                    Sa.add(Math.atan2(h, f)),
                        r = n,
                        u = c,
                        i = l
                }
                var t, e, r, u, i;
                ka.point = function(o, a) {
                    ka.point = n,
                        r = (t = o) * Oo,
                        u = Math.cos(a = (e = a) * Oo / 2 + jo / 4),
                        i = Math.sin(a)
                }
                    ,
                    ka.lineEnd = function() {
                        n(t, e)
                    }
            }
            function xt(n) {
                var t = n[0]
                    , e = n[1]
                    , r = Math.cos(e);
                return [r * Math.cos(t), r * Math.sin(t), Math.sin(e)]
            }
            function bt(n, t) {
                return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
            }
            function wt(n, t) {
                return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]
            }
            function _t(n, t) {
                n[0] += t[0],
                    n[1] += t[1],
                    n[2] += t[2]
            }
            function St(n, t) {
                return [n[0] * t, n[1] * t, n[2] * t]
            }
            function kt(n) {
                var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
                n[0] /= t,
                    n[1] /= t,
                    n[2] /= t
            }
            function Nt(n) {
                return [Math.atan2(n[1], n[0]), an(n[2])]
            }
            function Et(n, t) {
                return Mo(n[0] - t[0]) < Do && Mo(n[1] - t[1]) < Do
            }
            function At(n, t) {
                n *= Oo;
                var e = Math.cos(t *= Oo);
                Ct(e * Math.cos(n), e * Math.sin(n), Math.sin(t))
            }
            function Ct(n, t, e) {
                ++Na,
                    Aa += (n - Aa) / Na,
                    Ca += (t - Ca) / Na,
                    za += (e - za) / Na
            }
            function zt() {
                function n(n, u) {
                    n *= Oo;
                    var i = Math.cos(u *= Oo)
                        , o = i * Math.cos(n)
                        , a = i * Math.sin(n)
                        , c = Math.sin(u)
                        , l = Math.atan2(Math.sqrt((l = e * c - r * a) * l + (l = r * o - t * c) * l + (l = t * a - e * o) * l), t * o + e * a + r * c);
                    Ea += l,
                        qa += l * (t + (t = o)),
                        La += l * (e + (e = a)),
                        Ta += l * (r + (r = c)),
                        Ct(t, e, r)
                }
                var t, e, r;
                ja.point = function(u, i) {
                    u *= Oo;
                    var o = Math.cos(i *= Oo);
                    t = o * Math.cos(u),
                        e = o * Math.sin(u),
                        r = Math.sin(i),
                        ja.point = n,
                        Ct(t, e, r)
                }
            }
            function qt() {
                ja.point = At
            }
            function Lt() {
                function n(n, t) {
                    n *= Oo;
                    var e = Math.cos(t *= Oo)
                        , o = e * Math.cos(n)
                        , a = e * Math.sin(n)
                        , c = Math.sin(t)
                        , l = u * c - i * a
                        , s = i * o - r * c
                        , f = r * a - u * o
                        , h = Math.sqrt(l * l + s * s + f * f)
                        , g = r * o + u * a + i * c
                        , p = h && -on(g) / h
                        , v = Math.atan2(h, g);
                    Ra += p * l,
                        Da += p * s,
                        Pa += p * f,
                        Ea += v,
                        qa += v * (r + (r = o)),
                        La += v * (u + (u = a)),
                        Ta += v * (i + (i = c)),
                        Ct(r, u, i)
                }
                var t, e, r, u, i;
                ja.point = function(o, a) {
                    t = o,
                        e = a,
                        ja.point = n,
                        o *= Oo;
                    var c = Math.cos(a *= Oo);
                    r = c * Math.cos(o),
                        u = c * Math.sin(o),
                        i = Math.sin(a),
                        Ct(r, u, i)
                }
                    ,
                    ja.lineEnd = function() {
                        n(t, e),
                            ja.lineEnd = qt,
                            ja.point = At
                    }
            }
            function Tt(n, t) {
                function e(e, r) {
                    return e = n(e, r),
                        t(e[0], e[1])
                }
                return n.invert && t.invert && (e.invert = function(e, r) {
                        return e = t.invert(e, r),
                        e && n.invert(e[0], e[1])
                    }
                ),
                    e
            }
            function Rt() {
                return !0
            }
            function Dt(n, t, e, r, u) {
                var i = []
                    , o = [];
                if (n.forEach(function(n) {
                        if (!((t = n.length - 1) <= 0)) {
                            var t, e = n[0], r = n[t];
                            if (Et(e, r)) {
                                u.lineStart();
                                for (var a = 0; t > a; ++a)
                                    u.point((e = n[a])[0], e[1]);
                                return void u.lineEnd()
                            }
                            var c = new jt(e,n,null ,!0)
                                , l = new jt(e,null ,c,!1);
                            c.o = l,
                                i.push(c),
                                o.push(l),
                                c = new jt(r,n,null ,!1),
                                l = new jt(r,null ,c,!0),
                                c.o = l,
                                i.push(c),
                                o.push(l)
                        }
                    }),
                        o.sort(t),
                        Pt(i),
                        Pt(o),
                        i.length) {
                    for (var a = 0, c = e, l = o.length; l > a; ++a)
                        o[a].e = c = !c;
                    for (var s, f, h = i[0]; ; ) {
                        for (var g = h, p = !0; g.v; )
                            if ((g = g.n) === h)
                                return;
                        s = g.z,
                            u.lineStart();
                        do {
                            if (g.v = g.o.v = !0,
                                    g.e) {
                                if (p)
                                    for (var a = 0, l = s.length; l > a; ++a)
                                        u.point((f = s[a])[0], f[1]);
                                else
                                    r(g.x, g.n.x, 1, u);
                                g = g.n
                            } else {
                                if (p) {
                                    s = g.p.z;
                                    for (var a = s.length - 1; a >= 0; --a)
                                        u.point((f = s[a])[0], f[1])
                                } else
                                    r(g.x, g.p.x, -1, u);
                                g = g.p
                            }
                            g = g.o,
                                s = g.z,
                                p = !p
                        } while (!g.v);u.lineEnd()
                    }
                }
            }
            function Pt(n) {
                if (t = n.length) {
                    for (var t, e, r = 0, u = n[0]; ++r < t; )
                        u.n = e = n[r],
                            e.p = u,
                            u = e;
                    u.n = e = n[0],
                        e.p = u
                }
            }
            function jt(n, t, e, r) {
                this.x = n,
                    this.z = t,
                    this.o = e,
                    this.e = r,
                    this.v = !1,
                    this.n = this.p = null
            }
            function Ut(n, t, e, r) {
                return function(u, i) {
                    function o(t, e) {
                        var r = u(t, e);
                        n(t = r[0], e = r[1]) && i.point(t, e)
                    }
                    function a(n, t) {
                        var e = u(n, t);
                        d.point(e[0], e[1])
                    }
                    function c() {
                        y.point = a,
                            d.lineStart()
                    }
                    function l() {
                        y.point = o,
                            d.lineEnd()
                    }
                    function s(n, t) {
                        v.push([n, t]);
                        var e = u(n, t);
                        x.point(e[0], e[1])
                    }
                    function f() {
                        x.lineStart(),
                            v = []
                    }
                    function h() {
                        s(v[0][0], v[0][1]),
                            x.lineEnd();
                        var n, t = x.clean(), e = M.buffer(), r = e.length;
                        if (v.pop(),
                                p.push(v),
                                v = null ,
                                r)
                            if (1 & t) {
                                n = e[0];
                                var u, r = n.length - 1, o = -1;
                                if (r > 0) {
                                    for (b || (i.polygonStart(),
                                        b = !0),
                                             i.lineStart(); ++o < r; )
                                        i.point((u = n[o])[0], u[1]);
                                    i.lineEnd()
                                }
                            } else
                                r > 1 && 2 & t && e.push(e.pop().concat(e.shift())),
                                    g.push(e.filter(Ft))
                    }
                    var g, p, v, d = t(i), m = u.invert(r[0], r[1]), y = {
                        point: o,
                        lineStart: c,
                        lineEnd: l,
                        polygonStart: function() {
                            y.point = s,
                                y.lineStart = f,
                                y.lineEnd = h,
                                g = [],
                                p = []
                        },
                        polygonEnd: function() {
                            y.point = o,
                                y.lineStart = c,
                                y.lineEnd = l,
                                g = oo.merge(g);
                            var n = Vt(m, p);
                            g.length ? (b || (i.polygonStart(),
                                b = !0),
                                Dt(g, Ot, n, e, i)) : n && (b || (i.polygonStart(),
                                b = !0),
                                i.lineStart(),
                                e(null , null , 1, i),
                                i.lineEnd()),
                            b && (i.polygonEnd(),
                                b = !1),
                                g = p = null
                        },
                        sphere: function() {
                            i.polygonStart(),
                                i.lineStart(),
                                e(null , null , 1, i),
                                i.lineEnd(),
                                i.polygonEnd()
                        }
                    }, M = Ht(), x = t(M), b = !1;
                    return y
                }
            }
            function Ft(n) {
                return n.length > 1
            }
            function Ht() {
                var n, t = [];
                return {
                    lineStart: function() {
                        t.push(n = [])
                    },
                    point: function(t, e) {
                        n.push([t, e])
                    },
                    lineEnd: N,
                    buffer: function() {
                        var e = t;
                        return t = [],
                            n = null ,
                            e
                    },
                    rejoin: function() {
                        t.length > 1 && t.push(t.pop().concat(t.shift()))
                    }
                }
            }
            function Ot(n, t) {
                return ((n = n.x)[0] < 0 ? n[1] - Ho - Do : Ho - n[1]) - ((t = t.x)[0] < 0 ? t[1] - Ho - Do : Ho - t[1])
            }
            function It(n) {
                var t, e = NaN, r = NaN, u = NaN;
                return {
                    lineStart: function() {
                        n.lineStart(),
                            t = 1
                    },
                    point: function(i, o) {
                        var a = i > 0 ? jo : -jo
                            , c = Mo(i - e);
                        Mo(c - jo) < Do ? (n.point(e, r = (r + o) / 2 > 0 ? Ho : -Ho),
                            n.point(u, r),
                            n.lineEnd(),
                            n.lineStart(),
                            n.point(a, r),
                            n.point(i, r),
                            t = 0) : u !== a && c >= jo && (Mo(e - u) < Do && (e -= u * Do),
                        Mo(i - a) < Do && (i -= a * Do),
                            r = Yt(e, r, i, o),
                            n.point(u, r),
                            n.lineEnd(),
                            n.lineStart(),
                            n.point(a, r),
                            t = 0),
                            n.point(e = i, r = o),
                            u = a
                    },
                    lineEnd: function() {
                        n.lineEnd(),
                            e = r = NaN
                    },
                    clean: function() {
                        return 2 - t
                    }
                }
            }
            function Yt(n, t, e, r) {
                var u, i, o = Math.sin(n - e);
                return Mo(o) > Do ? Math.atan((Math.sin(t) * (i = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (u = Math.cos(t)) * Math.sin(n)) / (u * i * o)) : (t + r) / 2
            }
            function Zt(n, t, e, r) {
                var u;
                if (null == n)
                    u = e * Ho,
                        r.point(-jo, u),
                        r.point(0, u),
                        r.point(jo, u),
                        r.point(jo, 0),
                        r.point(jo, -u),
                        r.point(0, -u),
                        r.point(-jo, -u),
                        r.point(-jo, 0),
                        r.point(-jo, u);
                else if (Mo(n[0] - t[0]) > Do) {
                    var i = n[0] < t[0] ? jo : -jo;
                    u = e * i / 2,
                        r.point(-i, u),
                        r.point(0, u),
                        r.point(i, u)
                } else
                    r.point(t[0], t[1])
            }
            function Vt(n, t) {
                var e = n[0]
                    , r = n[1]
                    , u = [Math.sin(e), -Math.cos(e), 0]
                    , i = 0
                    , o = 0;
                Sa.reset();
                for (var a = 0, c = t.length; c > a; ++a) {
                    var l = t[a]
                        , s = l.length;
                    if (s)
                        for (var f = l[0], h = f[0], g = f[1] / 2 + jo / 4, p = Math.sin(g), v = Math.cos(g), d = 1; ; ) {
                            d === s && (d = 0),
                                n = l[d];
                            var m = n[0]
                                , y = n[1] / 2 + jo / 4
                                , M = Math.sin(y)
                                , x = Math.cos(y)
                                , b = m - h
                                , w = b >= 0 ? 1 : -1
                                , _ = w * b
                                , S = _ > jo
                                , k = p * M;
                            if (Sa.add(Math.atan2(k * w * Math.sin(_), v * x + k * Math.cos(_))),
                                    i += S ? b + w * Uo : b,
                                S ^ h >= e ^ m >= e) {
                                var N = wt(xt(f), xt(n));
                                kt(N);
                                var E = wt(u, N);
                                kt(E);
                                var A = (S ^ b >= 0 ? -1 : 1) * an(E[2]);
                                (r > A || r === A && (N[0] || N[1])) && (o += S ^ b >= 0 ? 1 : -1)
                            }
                            if (!d++)
                                break;
                            h = m,
                                p = M,
                                v = x,
                                f = n
                        }
                }
                return (-Do > i || Do > i && 0 > Sa) ^ 1 & o
            }
            function Xt(n) {
                function t(n, t) {
                    return Math.cos(n) * Math.cos(t) > i
                }
                function e(n) {
                    var e, i, c, l, s;
                    return {
                        lineStart: function() {
                            l = c = !1,
                                s = 1
                        },
                        point: function(f, h) {
                            var g, p = [f, h], v = t(f, h), d = o ? v ? 0 : u(f, h) : v ? u(f + (0 > f ? jo : -jo), h) : 0;
                            if (!e && (l = c = v) && n.lineStart(),
                                v !== c && (g = r(e, p),
                                (Et(e, g) || Et(p, g)) && (p[0] += Do,
                                    p[1] += Do,
                                    v = t(p[0], p[1]))),
                                v !== c)
                                s = 0,
                                    v ? (n.lineStart(),
                                        g = r(p, e),
                                        n.point(g[0], g[1])) : (g = r(e, p),
                                        n.point(g[0], g[1]),
                                        n.lineEnd()),
                                    e = g;
                            else if (a && e && o ^ v) {
                                var m;
                                d & i || !(m = r(p, e, !0)) || (s = 0,
                                    o ? (n.lineStart(),
                                        n.point(m[0][0], m[0][1]),
                                        n.point(m[1][0], m[1][1]),
                                        n.lineEnd()) : (n.point(m[1][0], m[1][1]),
                                        n.lineEnd(),
                                        n.lineStart(),
                                        n.point(m[0][0], m[0][1])))
                            }
                            !v || e && Et(e, p) || n.point(p[0], p[1]),
                                e = p,
                                c = v,
                                i = d
                        },
                        lineEnd: function() {
                            c && n.lineEnd(),
                                e = null
                        },
                        clean: function() {
                            return s | (l && c) << 1
                        }
                    }
                }
                function r(n, t, e) {
                    var r = xt(n)
                        , u = xt(t)
                        , o = [1, 0, 0]
                        , a = wt(r, u)
                        , c = bt(a, a)
                        , l = a[0]
                        , s = c - l * l;
                    if (!s)
                        return !e && n;
                    var f = i * c / s
                        , h = -i * l / s
                        , g = wt(o, a)
                        , p = St(o, f)
                        , v = St(a, h);
                    _t(p, v);
                    var d = g
                        , m = bt(p, d)
                        , y = bt(d, d)
                        , M = m * m - y * (bt(p, p) - 1);
                    if (!(0 > M)) {
                        var x = Math.sqrt(M)
                            , b = St(d, (-m - x) / y);
                        if (_t(b, p),
                                b = Nt(b),
                                !e)
                            return b;
                        var w, _ = n[0], S = t[0], k = n[1], N = t[1];
                        _ > S && (w = _,
                            _ = S,
                            S = w);
                        var E = S - _
                            , A = Mo(E - jo) < Do
                            , C = A || Do > E;
                        if (!A && k > N && (w = k,
                                k = N,
                                N = w),
                                C ? A ? k + N > 0 ^ b[1] < (Mo(b[0] - _) < Do ? k : N) : k <= b[1] && b[1] <= N : E > jo ^ (_ <= b[0] && b[0] <= S)) {
                            var z = St(d, (-m + x) / y);
                            return _t(z, p),
                                [b, Nt(z)]
                        }
                    }
                }
                function u(t, e) {
                    var r = o ? n : jo - n
                        , u = 0;
                    return -r > t ? u |= 1 : t > r && (u |= 2),
                        -r > e ? u |= 4 : e > r && (u |= 8),
                        u
                }
                var i = Math.cos(n)
                    , o = i > 0
                    , a = Mo(i) > Do
                    , c = Me(n, 6 * Oo);
                return Ut(t, e, c, o ? [0, -n] : [-jo, n - jo])
            }
            function $t(n, t, e, r) {
                return function(u) {
                    var i, o = u.a, a = u.b, c = o.x, l = o.y, s = a.x, f = a.y, h = 0, g = 1, p = s - c, v = f - l;
                    if (i = n - c,
                        p || !(i > 0)) {
                        if (i /= p,
                            0 > p) {
                            if (h > i)
                                return;
                            g > i && (g = i)
                        } else if (p > 0) {
                            if (i > g)
                                return;
                            i > h && (h = i)
                        }
                        if (i = e - c,
                            p || !(0 > i)) {
                            if (i /= p,
                                0 > p) {
                                if (i > g)
                                    return;
                                i > h && (h = i)
                            } else if (p > 0) {
                                if (h > i)
                                    return;
                                g > i && (g = i)
                            }
                            if (i = t - l,
                                v || !(i > 0)) {
                                if (i /= v,
                                    0 > v) {
                                    if (h > i)
                                        return;
                                    g > i && (g = i)
                                } else if (v > 0) {
                                    if (i > g)
                                        return;
                                    i > h && (h = i)
                                }
                                if (i = r - l,
                                    v || !(0 > i)) {
                                    if (i /= v,
                                        0 > v) {
                                        if (i > g)
                                            return;
                                        i > h && (h = i)
                                    } else if (v > 0) {
                                        if (h > i)
                                            return;
                                        g > i && (g = i)
                                    }
                                    return h > 0 && (u.a = {
                                        x: c + h * p,
                                        y: l + h * v
                                    }),
                                    1 > g && (u.b = {
                                        x: c + g * p,
                                        y: l + g * v
                                    }),
                                        u
                                }
                            }
                        }
                    }
                }
            }
            function Bt(n, t, e, r) {
                function u(r, u) {
                    return Mo(r[0] - n) < Do ? u > 0 ? 0 : 3 : Mo(r[0] - e) < Do ? u > 0 ? 2 : 1 : Mo(r[1] - t) < Do ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2
                }
                function i(n, t) {
                    return o(n.x, t.x)
                }
                function o(n, t) {
                    var e = u(n, 1)
                        , r = u(t, 1);
                    return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0]
                }
                return function(a) {
                    function c(n) {
                        for (var t = 0, e = d.length, r = n[1], u = 0; e > u; ++u)
                            for (var i, o = 1, a = d[u], c = a.length, l = a[0]; c > o; ++o)
                                i = a[o],
                                    l[1] <= r ? i[1] > r && un(l, i, n) > 0 && ++t : i[1] <= r && un(l, i, n) < 0 && --t,
                                    l = i;
                        return 0 !== t
                    }
                    function l(i, a, c, l) {
                        var s = 0
                            , f = 0;
                        if (null == i || (s = u(i, c)) !== (f = u(a, c)) || o(i, a) < 0 ^ c > 0) {
                            do
                                l.point(0 === s || 3 === s ? n : e, s > 1 ? r : t);
                            while ((s = (s + c + 4) % 4) !== f)
                        } else
                            l.point(a[0], a[1])
                    }
                    function s(u, i) {
                        return u >= n && e >= u && i >= t && r >= i
                    }
                    function f(n, t) {
                        s(n, t) && a.point(n, t)
                    }
                    function h() {
                        C.point = p,
                        d && d.push(m = []),
                            S = !0,
                            _ = !1,
                            b = w = NaN
                    }
                    function g() {
                        v && (p(y, M),
                        x && _ && E.rejoin(),
                            v.push(E.buffer())),
                            C.point = f,
                        _ && a.lineEnd()
                    }
                    function p(n, t) {
                        n = Math.max(-Fa, Math.min(Fa, n)),
                            t = Math.max(-Fa, Math.min(Fa, t));
                        var e = s(n, t);
                        if (d && m.push([n, t]),
                                S)
                            y = n,
                                M = t,
                                x = e,
                                S = !1,
                            e && (a.lineStart(),
                                a.point(n, t));
                        else if (e && _)
                            a.point(n, t);
                        else {
                            var r = {
                                a: {
                                    x: b,
                                    y: w
                                },
                                b: {
                                    x: n,
                                    y: t
                                }
                            };
                            A(r) ? (_ || (a.lineStart(),
                                a.point(r.a.x, r.a.y)),
                                a.point(r.b.x, r.b.y),
                            e || a.lineEnd(),
                                k = !1) : e && (a.lineStart(),
                                a.point(n, t),
                                k = !1)
                        }
                        b = n,
                            w = t,
                            _ = e
                    }
                    var v, d, m, y, M, x, b, w, _, S, k, N = a, E = Ht(), A = $t(n, t, e, r), C = {
                        point: f,
                        lineStart: h,
                        lineEnd: g,
                        polygonStart: function() {
                            a = E,
                                v = [],
                                d = [],
                                k = !0
                        },
                        polygonEnd: function() {
                            a = N,
                                v = oo.merge(v);
                            var t = c([n, r])
                                , e = k && t
                                , u = v.length;
                            (e || u) && (a.polygonStart(),
                            e && (a.lineStart(),
                                l(null , null , 1, a),
                                a.lineEnd()),
                            u && Dt(v, i, t, l, a),
                                a.polygonEnd()),
                                v = d = m = null
                        }
                    };
                    return C
                }
            }
            function Jt(n) {
                var t = 0
                    , e = jo / 3
                    , r = fe(n)
                    , u = r(t, e);
                return u.parallels = function(n) {
                    return arguments.length ? r(t = n[0] * jo / 180, e = n[1] * jo / 180) : [t / jo * 180, e / jo * 180]
                }
                    ,
                    u
            }
            function Wt(n, t) {
                function e(n, t) {
                    var e = Math.sqrt(i - 2 * u * Math.sin(t)) / u;
                    return [e * Math.sin(n *= u), o - e * Math.cos(n)]
                }
                var r = Math.sin(n)
                    , u = (r + Math.sin(t)) / 2
                    , i = 1 + r * (2 * u - r)
                    , o = Math.sqrt(i) / u;
                return e.invert = function(n, t) {
                    var e = o - t;
                    return [Math.atan2(n, e) / u, an((i - (n * n + e * e) * u * u) / (2 * u))]
                }
                    ,
                    e
            }
            function Kt() {
                function n(n, t) {
                    Oa += u * n - r * t,
                        r = n,
                        u = t
                }
                var t, e, r, u;
                Xa.point = function(i, o) {
                    Xa.point = n,
                        t = r = i,
                        e = u = o
                }
                    ,
                    Xa.lineEnd = function() {
                        n(t, e)
                    }
            }
            function Gt(n, t) {
                Ia > n && (Ia = n),
                n > Za && (Za = n),
                Ya > t && (Ya = t),
                t > Va && (Va = t)
            }
            function Qt() {
                function n(n, t) {
                    o.push("M", n, ",", t, i)
                }
                function t(n, t) {
                    o.push("M", n, ",", t),
                        a.point = e
                }
                function e(n, t) {
                    o.push("L", n, ",", t)
                }
                function r() {
                    a.point = n
                }
                function u() {
                    o.push("Z")
                }
                var i = ne(4.5)
                    , o = []
                    , a = {
                    point: n,
                    lineStart: function() {
                        a.point = t
                    },
                    lineEnd: r,
                    polygonStart: function() {
                        a.lineEnd = u
                    },
                    polygonEnd: function() {
                        a.lineEnd = r,
                            a.point = n
                    },
                    pointRadius: function(n) {
                        return i = ne(n),
                            a
                    },
                    result: function() {
                        if (o.length) {
                            var n = o.join("");
                            return o = [],
                                n
                        }
                    }
                };
                return a
            }
            function ne(n) {
                return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z"
            }
            function te(n, t) {
                Aa += n,
                    Ca += t,
                    ++za
            }
            function ee() {
                function n(n, r) {
                    var u = n - t
                        , i = r - e
                        , o = Math.sqrt(u * u + i * i);
                    qa += o * (t + n) / 2,
                        La += o * (e + r) / 2,
                        Ta += o,
                        te(t = n, e = r)
                }
                var t, e;
                Ba.point = function(r, u) {
                    Ba.point = n,
                        te(t = r, e = u)
                }
            }
            function re() {
                Ba.point = te
            }
            function ue() {
                function n(n, t) {
                    var e = n - r
                        , i = t - u
                        , o = Math.sqrt(e * e + i * i);
                    qa += o * (r + n) / 2,
                        La += o * (u + t) / 2,
                        Ta += o,
                        o = u * n - r * t,
                        Ra += o * (r + n),
                        Da += o * (u + t),
                        Pa += 3 * o,
                        te(r = n, u = t)
                }
                var t, e, r, u;
                Ba.point = function(i, o) {
                    Ba.point = n,
                        te(t = r = i, e = u = o)
                }
                    ,
                    Ba.lineEnd = function() {
                        n(t, e)
                    }
            }
            function ie(n) {
                function t(t, e) {
                    n.moveTo(t + o, e),
                        n.arc(t, e, o, 0, Uo)
                }
                function e(t, e) {
                    n.moveTo(t, e),
                        a.point = r
                }
                function r(t, e) {
                    n.lineTo(t, e)
                }
                function u() {
                    a.point = t
                }
                function i() {
                    n.closePath()
                }
                var o = 4.5
                    , a = {
                    point: t,
                    lineStart: function() {
                        a.point = e
                    },
                    lineEnd: u,
                    polygonStart: function() {
                        a.lineEnd = i
                    },
                    polygonEnd: function() {
                        a.lineEnd = u,
                            a.point = t
                    },
                    pointRadius: function(n) {
                        return o = n,
                            a
                    },
                    result: N
                };
                return a
            }
            function oe(n) {
                function t(n) {
                    return (a ? r : e)(n)
                }
                function e(t) {
                    return le(t, function(e, r) {
                        e = n(e, r),
                            t.point(e[0], e[1])
                    })
                }
                function r(t) {
                    function e(e, r) {
                        e = n(e, r),
                            t.point(e[0], e[1])
                    }
                    function r() {
                        M = NaN,
                            S.point = i,
                            t.lineStart()
                    }
                    function i(e, r) {
                        var i = xt([e, r])
                            , o = n(e, r);
                        u(M, x, y, b, w, _, M = o[0], x = o[1], y = e, b = i[0], w = i[1], _ = i[2], a, t),
                            t.point(M, x)
                    }
                    function o() {
                        S.point = e,
                            t.lineEnd()
                    }
                    function c() {
                        r(),
                            S.point = l,
                            S.lineEnd = s
                    }
                    function l(n, t) {
                        i(f = n, h = t),
                            g = M,
                            p = x,
                            v = b,
                            d = w,
                            m = _,
                            S.point = i
                    }
                    function s() {
                        u(M, x, y, b, w, _, g, p, f, v, d, m, a, t),
                            S.lineEnd = o,
                            o()
                    }
                    var f, h, g, p, v, d, m, y, M, x, b, w, _, S = {
                        point: e,
                        lineStart: r,
                        lineEnd: o,
                        polygonStart: function() {
                            t.polygonStart(),
                                S.lineStart = c
                        },
                        polygonEnd: function() {
                            t.polygonEnd(),
                                S.lineStart = r
                        }
                    };
                    return S
                }
                function u(t, e, r, a, c, l, s, f, h, g, p, v, d, m) {
                    var y = s - t
                        , M = f - e
                        , x = y * y + M * M;
                    if (x > 4 * i && d--) {
                        var b = a + g
                            , w = c + p
                            , _ = l + v
                            , S = Math.sqrt(b * b + w * w + _ * _)
                            , k = Math.asin(_ /= S)
                            , N = Mo(Mo(_) - 1) < Do || Mo(r - h) < Do ? (r + h) / 2 : Math.atan2(w, b)
                            , E = n(N, k)
                            , A = E[0]
                            , C = E[1]
                            , z = A - t
                            , q = C - e
                            , L = M * z - y * q;
                        (L * L / x > i || Mo((y * z + M * q) / x - .5) > .3 || o > a * g + c * p + l * v) && (u(t, e, r, a, c, l, A, C, N, b /= S, w /= S, _, d, m),
                            m.point(A, C),
                            u(A, C, N, b, w, _, s, f, h, g, p, v, d, m))
                    }
                }
                var i = .5
                    , o = Math.cos(30 * Oo)
                    , a = 16;
                return t.precision = function(n) {
                    return arguments.length ? (a = (i = n * n) > 0 && 16,
                        t) : Math.sqrt(i)
                }
                    ,
                    t
            }
            function ae(n) {
                var t = oe(function(t, e) {
                    return n([t * Io, e * Io])
                });
                return function(n) {
                    return he(t(n))
                }
            }
            function ce(n) {
                this.stream = n
            }
            function le(n, t) {
                return {
                    point: t,
                    sphere: function() {
                        n.sphere()
                    },
                    lineStart: function() {
                        n.lineStart()
                    },
                    lineEnd: function() {
                        n.lineEnd()
                    },
                    polygonStart: function() {
                        n.polygonStart()
                    },
                    polygonEnd: function() {
                        n.polygonEnd()
                    }
                }
            }
            function se(n) {
                return fe(function() {
                    return n
                })()
            }
            function fe(n) {
                function t(n) {
                    return n = a(n[0] * Oo, n[1] * Oo),
                        [n[0] * h + c, l - n[1] * h]
                }
                function e(n) {
                    return n = a.invert((n[0] - c) / h, (l - n[1]) / h),
                    n && [n[0] * Io, n[1] * Io]
                }
                function r() {
                    a = Tt(o = ve(m, y, M), i);
                    var n = i(v, d);
                    return c = g - n[0] * h,
                        l = p + n[1] * h,
                        u()
                }
                function u() {
                    return s && (s.valid = !1,
                        s = null ),
                        t
                }
                var i, o, a, c, l, s, f = oe(function(n, t) {
                    return n = i(n, t),
                        [n[0] * h + c, l - n[1] * h]
                }), h = 150, g = 480, p = 250, v = 0, d = 0, m = 0, y = 0, M = 0, x = Ua, b = _, w = null , S = null ;
                return t.stream = function(n) {
                    return s && (s.valid = !1),
                        s = he(x(o, f(b(n)))),
                        s.valid = !0,
                        s
                }
                    ,
                    t.clipAngle = function(n) {
                        return arguments.length ? (x = null == n ? (w = n,
                            Ua) : Xt((w = +n) * Oo),
                            u()) : w
                    }
                    ,
                    t.clipExtent = function(n) {
                        return arguments.length ? (S = n,
                            b = n ? Bt(n[0][0], n[0][1], n[1][0], n[1][1]) : _,
                            u()) : S
                    }
                    ,
                    t.scale = function(n) {
                        return arguments.length ? (h = +n,
                            r()) : h
                    }
                    ,
                    t.translate = function(n) {
                        return arguments.length ? (g = +n[0],
                            p = +n[1],
                            r()) : [g, p]
                    }
                    ,
                    t.center = function(n) {
                        return arguments.length ? (v = n[0] % 360 * Oo,
                            d = n[1] % 360 * Oo,
                            r()) : [v * Io, d * Io]
                    }
                    ,
                    t.rotate = function(n) {
                        return arguments.length ? (m = n[0] % 360 * Oo,
                            y = n[1] % 360 * Oo,
                            M = n.length > 2 ? n[2] % 360 * Oo : 0,
                            r()) : [m * Io, y * Io, M * Io]
                    }
                    ,
                    oo.rebind(t, f, "precision"),
                    function() {
                        return i = n.apply(this, arguments),
                            t.invert = i.invert && e,
                            r()
                    }
            }
            function he(n) {
                return le(n, function(t, e) {
                    n.point(t * Oo, e * Oo)
                })
            }
            function ge(n, t) {
                return [n, t]
            }
            function pe(n, t) {
                return [n > jo ? n - Uo : -jo > n ? n + Uo : n, t]
            }
            function ve(n, t, e) {
                return n ? t || e ? Tt(me(n), ye(t, e)) : me(n) : t || e ? ye(t, e) : pe
            }
            function de(n) {
                return function(t, e) {
                    return t += n,
                        [t > jo ? t - Uo : -jo > t ? t + Uo : t, e]
                }
            }
            function me(n) {
                var t = de(n);
                return t.invert = de(-n),
                    t
            }
            function ye(n, t) {
                function e(n, t) {
                    var e = Math.cos(t)
                        , a = Math.cos(n) * e
                        , c = Math.sin(n) * e
                        , l = Math.sin(t)
                        , s = l * r + a * u;
                    return [Math.atan2(c * i - s * o, a * r - l * u), an(s * i + c * o)]
                }
                var r = Math.cos(n)
                    , u = Math.sin(n)
                    , i = Math.cos(t)
                    , o = Math.sin(t);
                return e.invert = function(n, t) {
                    var e = Math.cos(t)
                        , a = Math.cos(n) * e
                        , c = Math.sin(n) * e
                        , l = Math.sin(t)
                        , s = l * i - c * o;
                    return [Math.atan2(c * i + l * o, a * r + s * u), an(s * r - a * u)]
                }
                    ,
                    e
            }
            function Me(n, t) {
                var e = Math.cos(n)
                    , r = Math.sin(n);
                return function(u, i, o, a) {
                    var c = o * t;
                    null != u ? (u = xe(e, u),
                        i = xe(e, i),
                    (o > 0 ? i > u : u > i) && (u += o * Uo)) : (u = n + o * Uo,
                        i = n - .5 * c);
                    for (var l, s = u; o > 0 ? s > i : i > s; s -= c)
                        a.point((l = Nt([e, -r * Math.cos(s), -r * Math.sin(s)]))[0], l[1])
                }
            }
            function xe(n, t) {
                var e = xt(t);
                e[0] -= n,
                    kt(e);
                var r = on(-e[1]);
                return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - Do) % (2 * Math.PI)
            }
            function be(n, t, e) {
                var r = oo.range(n, t - Do, e).concat(t);
                return function(n) {
                    return r.map(function(t) {
                        return [n, t]
                    })
                }
            }
            function we(n, t, e) {
                var r = oo.range(n, t - Do, e).concat(t);
                return function(n) {
                    return r.map(function(t) {
                        return [t, n]
                    })
                }
            }
            function _e(n) {
                return n.source
            }
            function Se(n) {
                return n.target
            }
            function ke(n, t, e, r) {
                var u = Math.cos(t)
                    , i = Math.sin(t)
                    , o = Math.cos(r)
                    , a = Math.sin(r)
                    , c = u * Math.cos(n)
                    , l = u * Math.sin(n)
                    , s = o * Math.cos(e)
                    , f = o * Math.sin(e)
                    , h = 2 * Math.asin(Math.sqrt(fn(r - t) + u * o * fn(e - n)))
                    , g = 1 / Math.sin(h)
                    , p = h ? function(n) {
                        var t = Math.sin(n *= h) * g
                            , e = Math.sin(h - n) * g
                            , r = e * c + t * s
                            , u = e * l + t * f
                            , o = e * i + t * a;
                        return [Math.atan2(u, r) * Io, Math.atan2(o, Math.sqrt(r * r + u * u)) * Io]
                    }
                        : function() {
                        return [n * Io, t * Io]
                    }
                    ;
                return p.distance = h,
                    p
            }
            function Ne() {
                function n(n, u) {
                    var i = Math.sin(u *= Oo)
                        , o = Math.cos(u)
                        , a = Mo((n *= Oo) - t)
                        , c = Math.cos(a);
                    Ja += Math.atan2(Math.sqrt((a = o * Math.sin(a)) * a + (a = r * i - e * o * c) * a), e * i + r * o * c),
                        t = n,
                        e = i,
                        r = o
                }
                var t, e, r;
                Wa.point = function(u, i) {
                    t = u * Oo,
                        e = Math.sin(i *= Oo),
                        r = Math.cos(i),
                        Wa.point = n
                }
                    ,
                    Wa.lineEnd = function() {
                        Wa.point = Wa.lineEnd = N
                    }
            }
            function Ee(n, t) {
                function e(t, e) {
                    var r = Math.cos(t)
                        , u = Math.cos(e)
                        , i = n(r * u);
                    return [i * u * Math.sin(t), i * Math.sin(e)]
                }
                return e.invert = function(n, e) {
                    var r = Math.sqrt(n * n + e * e)
                        , u = t(r)
                        , i = Math.sin(u)
                        , o = Math.cos(u);
                    return [Math.atan2(n * i, r * o), Math.asin(r && e * i / r)]
                }
                    ,
                    e
            }
            function Ae(n, t) {
                function e(n, t) {
                    o > 0 ? -Ho + Do > t && (t = -Ho + Do) : t > Ho - Do && (t = Ho - Do);
                    var e = o / Math.pow(u(t), i);
                    return [e * Math.sin(i * n), o - e * Math.cos(i * n)]
                }
                var r = Math.cos(n)
                    , u = function(n) {
                    return Math.tan(jo / 4 + n / 2)
                }
                    , i = n === t ? Math.sin(n) : Math.log(r / Math.cos(t)) / Math.log(u(t) / u(n))
                    , o = r * Math.pow(u(n), i) / i;
                return i ? (e.invert = function(n, t) {
                    var e = o - t
                        , r = rn(i) * Math.sqrt(n * n + e * e);
                    return [Math.atan2(n, e) / i, 2 * Math.atan(Math.pow(o / r, 1 / i)) - Ho]
                }
                    ,
                    e) : ze
            }
            function Ce(n, t) {
                function e(n, t) {
                    var e = i - t;
                    return [e * Math.sin(u * n), i - e * Math.cos(u * n)]
                }
                var r = Math.cos(n)
                    , u = n === t ? Math.sin(n) : (r - Math.cos(t)) / (t - n)
                    , i = r / u + n;
                return Mo(u) < Do ? ge : (e.invert = function(n, t) {
                    var e = i - t;
                    return [Math.atan2(n, e) / u, i - rn(u) * Math.sqrt(n * n + e * e)]
                }
                    ,
                    e)
            }
            function ze(n, t) {
                return [n, Math.log(Math.tan(jo / 4 + t / 2))]
            }
            function qe(n) {
                var t, e = se(n), r = e.scale, u = e.translate, i = e.clipExtent;
                return e.scale = function() {
                    var n = r.apply(e, arguments);
                    return n === e ? t ? e.clipExtent(null ) : e : n
                }
                    ,
                    e.translate = function() {
                        var n = u.apply(e, arguments);
                        return n === e ? t ? e.clipExtent(null ) : e : n
                    }
                    ,
                    e.clipExtent = function(n) {
                        var o = i.apply(e, arguments);
                        if (o === e) {
                            if (t = null == n) {
                                var a = jo * r()
                                    , c = u();
                                i([[c[0] - a, c[1] - a], [c[0] + a, c[1] + a]])
                            }
                        } else
                            t && (o = null );
                        return o
                    }
                    ,
                    e.clipExtent(null )
            }
            function Le(n, t) {
                return [Math.log(Math.tan(jo / 4 + t / 2)), -n]
            }
            function Te(n) {
                return n[0]
            }
            function Re(n) {
                return n[1]
            }
            function De(n) {
                for (var t = n.length, e = [0, 1], r = 2, u = 2; t > u; u++) {
                    for (; r > 1 && un(n[e[r - 2]], n[e[r - 1]], n[u]) <= 0; )
                        --r;
                    e[r++] = u
                }
                return e.slice(0, r)
            }
            function Pe(n, t) {
                return n[0] - t[0] || n[1] - t[1]
            }
            function je(n, t, e) {
                return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0])
            }
            function Ue(n, t, e, r) {
                var u = n[0]
                    , i = e[0]
                    , o = t[0] - u
                    , a = r[0] - i
                    , c = n[1]
                    , l = e[1]
                    , s = t[1] - c
                    , f = r[1] - l
                    , h = (a * (c - l) - f * (u - i)) / (f * o - a * s);
                return [u + h * o, c + h * s]
            }
            function Fe(n) {
                var t = n[0]
                    , e = n[n.length - 1];
                return !(t[0] - e[0] || t[1] - e[1])
            }
            function He() {
                ar(this),
                    this.edge = this.site = this.circle = null
            }
            function Oe(n) {
                var t = cc.pop() || new He;
                return t.site = n,
                    t
            }
            function Ie(n) {
                Ge(n),
                    ic.remove(n),
                    cc.push(n),
                    ar(n)
            }
            function Ye(n) {
                var t = n.circle
                    , e = t.x
                    , r = t.cy
                    , u = {
                    x: e,
                    y: r
                }
                    , i = n.P
                    , o = n.N
                    , a = [n];
                Ie(n);
                for (var c = i; c.circle && Mo(e - c.circle.x) < Do && Mo(r - c.circle.cy) < Do; )
                    i = c.P,
                        a.unshift(c),
                        Ie(c),
                        c = i;
                a.unshift(c),
                    Ge(c);
                for (var l = o; l.circle && Mo(e - l.circle.x) < Do && Mo(r - l.circle.cy) < Do; )
                    o = l.N,
                        a.push(l),
                        Ie(l),
                        l = o;
                a.push(l),
                    Ge(l);
                var s, f = a.length;
                for (s = 1; f > s; ++s)
                    l = a[s],
                        c = a[s - 1],
                        ur(l.edge, c.site, l.site, u);
                c = a[0],
                    l = a[f - 1],
                    l.edge = er(c.site, l.site, null , u),
                    Ke(c),
                    Ke(l)
            }
            function Ze(n) {
                for (var t, e, r, u, i = n.x, o = n.y, a = ic._; a; )
                    if (r = Ve(a, o) - i,
                        r > Do)
                        a = a.L;
                    else {
                        if (u = i - Xe(a, o),
                                !(u > Do)) {
                            r > -Do ? (t = a.P,
                                e = a) : u > -Do ? (t = a,
                                e = a.N) : t = e = a;
                            break
                        }
                        if (!a.R) {
                            t = a;
                            break
                        }
                        a = a.R
                    }
                var c = Oe(n);
                if (ic.insert(t, c),
                    t || e) {
                    if (t === e)
                        return Ge(t),
                            e = Oe(t.site),
                            ic.insert(c, e),
                            c.edge = e.edge = er(t.site, c.site),
                            Ke(t),
                            void Ke(e);
                    if (!e)
                        return void (c.edge = er(t.site, c.site));
                    Ge(t),
                        Ge(e);
                    var l = t.site
                        , s = l.x
                        , f = l.y
                        , h = n.x - s
                        , g = n.y - f
                        , p = e.site
                        , v = p.x - s
                        , d = p.y - f
                        , m = 2 * (h * d - g * v)
                        , y = h * h + g * g
                        , M = v * v + d * d
                        , x = {
                        x: (d * y - g * M) / m + s,
                        y: (h * M - v * y) / m + f
                    };
                    ur(e.edge, l, p, x),
                        c.edge = er(l, n, null , x),
                        e.edge = er(n, p, null , x),
                        Ke(t),
                        Ke(e)
                }
            }
            function Ve(n, t) {
                var e = n.site
                    , r = e.x
                    , u = e.y
                    , i = u - t;
                if (!i)
                    return r;
                var o = n.P;
                if (!o)
                    return -(1 / 0);
                e = o.site;
                var a = e.x
                    , c = e.y
                    , l = c - t;
                if (!l)
                    return a;
                var s = a - r
                    , f = 1 / i - 1 / l
                    , h = s / l;
                return f ? (-h + Math.sqrt(h * h - 2 * f * (s * s / (-2 * l) - c + l / 2 + u - i / 2))) / f + r : (r + a) / 2
            }
            function Xe(n, t) {
                var e = n.N;
                if (e)
                    return Ve(e, t);
                var r = n.site;
                return r.y === t ? r.x : 1 / 0
            }
            function $e(n) {
                this.site = n,
                    this.edges = []
            }
            function Be(n) {
                for (var t, e, r, u, i, o, a, c, l, s, f = n[0][0], h = n[1][0], g = n[0][1], p = n[1][1], v = uc, d = v.length; d--; )
                    if (i = v[d],
                        i && i.prepare())
                        for (a = i.edges,
                                 c = a.length,
                                 o = 0; c > o; )
                            s = a[o].end(),
                                r = s.x,
                                u = s.y,
                                l = a[++o % c].start(),
                                t = l.x,
                                e = l.y,
                            (Mo(r - t) > Do || Mo(u - e) > Do) && (a.splice(o, 0, new ir(rr(i.site, s, Mo(r - f) < Do && p - u > Do ? {
                                x: f,
                                y: Mo(t - f) < Do ? e : p
                            } : Mo(u - p) < Do && h - r > Do ? {
                                x: Mo(e - p) < Do ? t : h,
                                y: p
                            } : Mo(r - h) < Do && u - g > Do ? {
                                x: h,
                                y: Mo(t - h) < Do ? e : g
                            } : Mo(u - g) < Do && r - f > Do ? {
                                x: Mo(e - g) < Do ? t : f,
                                y: g
                            } : null ),i.site,null )),
                                ++c)
            }
            function Je(n, t) {
                return t.angle - n.angle
            }
            function We() {
                ar(this),
                    this.x = this.y = this.arc = this.site = this.cy = null
            }
            function Ke(n) {
                var t = n.P
                    , e = n.N;
                if (t && e) {
                    var r = t.site
                        , u = n.site
                        , i = e.site;
                    if (r !== i) {
                        var o = u.x
                            , a = u.y
                            , c = r.x - o
                            , l = r.y - a
                            , s = i.x - o
                            , f = i.y - a
                            , h = 2 * (c * f - l * s);
                        if (!(h >= -Po)) {
                            var g = c * c + l * l
                                , p = s * s + f * f
                                , v = (f * g - l * p) / h
                                , d = (c * p - s * g) / h
                                , f = d + a
                                , m = lc.pop() || new We;
                            m.arc = n,
                                m.site = u,
                                m.x = v + o,
                                m.y = f + Math.sqrt(v * v + d * d),
                                m.cy = f,
                                n.circle = m;
                            for (var y = null , M = ac._; M; )
                                if (m.y < M.y || m.y === M.y && m.x <= M.x) {
                                    if (!M.L) {
                                        y = M.P;
                                        break
                                    }
                                    M = M.L
                                } else {
                                    if (!M.R) {
                                        y = M;
                                        break
                                    }
                                    M = M.R
                                }
                            ac.insert(y, m),
                            y || (oc = m)
                        }
                    }
                }
            }
            function Ge(n) {
                var t = n.circle;
                t && (t.P || (oc = t.N),
                    ac.remove(t),
                    lc.push(t),
                    ar(t),
                    n.circle = null )
            }
            function Qe(n) {
                for (var t, e = rc, r = $t(n[0][0], n[0][1], n[1][0], n[1][1]), u = e.length; u--; )
                    t = e[u],
                    (!nr(t, n) || !r(t) || Mo(t.a.x - t.b.x) < Do && Mo(t.a.y - t.b.y) < Do) && (t.a = t.b = null ,
                        e.splice(u, 1))
            }
            function nr(n, t) {
                var e = n.b;
                if (e)
                    return !0;
                var r, u, i = n.a, o = t[0][0], a = t[1][0], c = t[0][1], l = t[1][1], s = n.l, f = n.r, h = s.x, g = s.y, p = f.x, v = f.y, d = (h + p) / 2, m = (g + v) / 2;
                if (v === g) {
                    if (o > d || d >= a)
                        return;
                    if (h > p) {
                        if (i) {
                            if (i.y >= l)
                                return
                        } else
                            i = {
                                x: d,
                                y: c
                            };
                        e = {
                            x: d,
                            y: l
                        }
                    } else {
                        if (i) {
                            if (i.y < c)
                                return
                        } else
                            i = {
                                x: d,
                                y: l
                            };
                        e = {
                            x: d,
                            y: c
                        }
                    }
                } else if (r = (h - p) / (v - g),
                        u = m - r * d,
                    -1 > r || r > 1)
                    if (h > p) {
                        if (i) {
                            if (i.y >= l)
                                return
                        } else
                            i = {
                                x: (c - u) / r,
                                y: c
                            };
                        e = {
                            x: (l - u) / r,
                            y: l
                        }
                    } else {
                        if (i) {
                            if (i.y < c)
                                return
                        } else
                            i = {
                                x: (l - u) / r,
                                y: l
                            };
                        e = {
                            x: (c - u) / r,
                            y: c
                        }
                    }
                else if (v > g) {
                    if (i) {
                        if (i.x >= a)
                            return
                    } else
                        i = {
                            x: o,
                            y: r * o + u
                        };
                    e = {
                        x: a,
                        y: r * a + u
                    }
                } else {
                    if (i) {
                        if (i.x < o)
                            return
                    } else
                        i = {
                            x: a,
                            y: r * a + u
                        };
                    e = {
                        x: o,
                        y: r * o + u
                    }
                }
                return n.a = i,
                    n.b = e,
                    !0
            }
            function tr(n, t) {
                this.l = n,
                    this.r = t,
                    this.a = this.b = null
            }
            function er(n, t, e, r) {
                var u = new tr(n,t);
                return rc.push(u),
                e && ur(u, n, t, e),
                r && ur(u, t, n, r),
                    uc[n.i].edges.push(new ir(u,n,t)),
                    uc[t.i].edges.push(new ir(u,t,n)),
                    u
            }
            function rr(n, t, e) {
                var r = new tr(n,null );
                return r.a = t,
                    r.b = e,
                    rc.push(r),
                    r
            }
            function ur(n, t, e, r) {
                n.a || n.b ? n.l === e ? n.b = r : n.a = r : (n.a = r,
                    n.l = t,
                    n.r = e)
            }
            function ir(n, t, e) {
                var r = n.a
                    , u = n.b;
                this.edge = n,
                    this.site = t,
                    this.angle = e ? Math.atan2(e.y - t.y, e.x - t.x) : n.l === t ? Math.atan2(u.x - r.x, r.y - u.y) : Math.atan2(r.x - u.x, u.y - r.y)
            }
            function or() {
                this._ = null
            }
            function ar(n) {
                n.U = n.C = n.L = n.R = n.P = n.N = null
            }
            function cr(n, t) {
                var e = t
                    , r = t.R
                    , u = e.U;
                u ? u.L === e ? u.L = r : u.R = r : n._ = r,
                    r.U = u,
                    e.U = r,
                    e.R = r.L,
                e.R && (e.R.U = e),
                    r.L = e
            }
            function lr(n, t) {
                var e = t
                    , r = t.L
                    , u = e.U;
                u ? u.L === e ? u.L = r : u.R = r : n._ = r,
                    r.U = u,
                    e.U = r,
                    e.L = r.R,
                e.L && (e.L.U = e),
                    r.R = e
            }
            function sr(n) {
                for (; n.L; )
                    n = n.L;
                return n
            }
            function fr(n, t) {
                var e, r, u, i = n.sort(hr).pop();
                for (rc = [],
                         uc = new Array(n.length),
                         ic = new or,
                         ac = new or; ; )
                    if (u = oc,
                        i && (!u || i.y < u.y || i.y === u.y && i.x < u.x))
                        (i.x !== e || i.y !== r) && (uc[i.i] = new $e(i),
                            Ze(i),
                            e = i.x,
                            r = i.y),
                            i = n.pop();
                    else {
                        if (!u)
                            break;
                        Ye(u.arc)
                    }
                t && (Qe(t),
                    Be(t));
                var o = {
                    cells: uc,
                    edges: rc
                };
                return ic = ac = rc = uc = null ,
                    o
            }
            function hr(n, t) {
                return t.y - n.y || t.x - n.x
            }
            function gr(n, t, e) {
                return (n.x - e.x) * (t.y - n.y) - (n.x - t.x) * (e.y - n.y)
            }
            function pr(n) {
                return n.x
            }
            function vr(n) {
                return n.y
            }
            function dr() {
                return {
                    leaf: !0,
                    nodes: [],
                    point: null ,
                    x: null ,
                    y: null
                }
            }
            function mr(n, t, e, r, u, i) {
                if (!n(t, e, r, u, i)) {
                    var o = .5 * (e + u)
                        , a = .5 * (r + i)
                        , c = t.nodes;
                    c[0] && mr(n, c[0], e, r, o, a),
                    c[1] && mr(n, c[1], o, r, u, a),
                    c[2] && mr(n, c[2], e, a, o, i),
                    c[3] && mr(n, c[3], o, a, u, i)
                }
            }
            function yr(n, t, e, r, u, i, o) {
                var a, c = 1 / 0;
                return function l(n, s, f, h, g) {
                    if (!(s > i || f > o || r > h || u > g)) {
                        if (p = n.point) {
                            var p, v = t - n.x, d = e - n.y, m = v * v + d * d;
                            if (c > m) {
                                var y = Math.sqrt(c = m);
                                r = t - y,
                                    u = e - y,
                                    i = t + y,
                                    o = e + y,
                                    a = p
                            }
                        }
                        for (var M = n.nodes, x = .5 * (s + h), b = .5 * (f + g), w = t >= x, _ = e >= b, S = _ << 1 | w, k = S + 4; k > S; ++S)
                            if (n = M[3 & S])
                                switch (3 & S) {
                                    case 0:
                                        l(n, s, f, x, b);
                                        break;
                                    case 1:
                                        l(n, x, f, h, b);
                                        break;
                                    case 2:
                                        l(n, s, b, x, g);
                                        break;
                                    case 3:
                                        l(n, x, b, h, g)
                                }
                    }
                }(n, r, u, i, o),
                    a
            }
            function Mr(n, t) {
                n = oo.rgb(n),
                    t = oo.rgb(t);
                var e = n.r
                    , r = n.g
                    , u = n.b
                    , i = t.r - e
                    , o = t.g - r
                    , a = t.b - u;
                return function(n) {
                    return "#" + Nn(Math.round(e + i * n)) + Nn(Math.round(r + o * n)) + Nn(Math.round(u + a * n))
                }
            }
            function xr(n, t) {
                var e, r = {}, u = {};
                for (e in n)
                    e in t ? r[e] = _r(n[e], t[e]) : u[e] = n[e];
                for (e in t)
                    e in n || (u[e] = t[e]);
                return function(n) {
                    for (e in r)
                        u[e] = r[e](n);
                    return u
                }
            }
            function br(n, t) {
                return n = +n,
                    t = +t,
                    function(e) {
                        return n * (1 - e) + t * e
                    }
            }
            function wr(n, t) {
                var e, r, u, i = fc.lastIndex = hc.lastIndex = 0, o = -1, a = [], c = [];
                for (n += "",
                         t += ""; (e = fc.exec(n)) && (r = hc.exec(t)); )
                    (u = r.index) > i && (u = t.slice(i, u),
                        a[o] ? a[o] += u : a[++o] = u),
                        (e = e[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null ,
                            c.push({
                                i: o,
                                x: br(e, r)
                            })),
                        i = hc.lastIndex;
                return i < t.length && (u = t.slice(i),
                    a[o] ? a[o] += u : a[++o] = u),
                    a.length < 2 ? c[0] ? (t = c[0].x,
                            function(n) {
                                return t(n) + ""
                            }
                    ) : function() {
                        return t
                    }
                        : (t = c.length,
                            function(n) {
                                for (var e, r = 0; t > r; ++r)
                                    a[(e = c[r]).i] = e.x(n);
                                return a.join("")
                            }
                    )
            }
            function _r(n, t) {
                for (var e, r = oo.interpolators.length; --r >= 0 && !(e = oo.interpolators[r](n, t)); )
                    ;
                return e
            }
            function Sr(n, t) {
                var e, r = [], u = [], i = n.length, o = t.length, a = Math.min(n.length, t.length);
                for (e = 0; a > e; ++e)
                    r.push(_r(n[e], t[e]));
                for (; i > e; ++e)
                    u[e] = n[e];
                for (; o > e; ++e)
                    u[e] = t[e];
                return function(n) {
                    for (e = 0; a > e; ++e)
                        u[e] = r[e](n);
                    return u
                }
            }
            function kr(n) {
                return function(t) {
                    return 0 >= t ? 0 : t >= 1 ? 1 : n(t)
                }
            }
            function Nr(n) {
                return function(t) {
                    return 1 - n(1 - t)
                }
            }
            function Er(n) {
                return function(t) {
                    return .5 * (.5 > t ? n(2 * t) : 2 - n(2 - 2 * t))
                }
            }
            function Ar(n) {
                return n * n
            }
            function Cr(n) {
                return n * n * n
            }
            function zr(n) {
                if (0 >= n)
                    return 0;
                if (n >= 1)
                    return 1;
                var t = n * n
                    , e = t * n;
                return 4 * (.5 > n ? e : 3 * (n - t) + e - .75)
            }
            function qr(n) {
                return function(t) {
                    return Math.pow(t, n)
                }
            }
            function Lr(n) {
                return 1 - Math.cos(n * Ho)
            }
            function Tr(n) {
                return Math.pow(2, 10 * (n - 1))
            }
            function Rr(n) {
                return 1 - Math.sqrt(1 - n * n)
            }
            function Dr(n, t) {
                var e;
                return arguments.length < 2 && (t = .45),
                    arguments.length ? e = t / Uo * Math.asin(1 / n) : (n = 1,
                        e = t / 4),
                    function(r) {
                        return 1 + n * Math.pow(2, -10 * r) * Math.sin((r - e) * Uo / t)
                    }
            }
            function Pr(n) {
                return n || (n = 1.70158),
                    function(t) {
                        return t * t * ((n + 1) * t - n)
                    }
            }
            function jr(n) {
                return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
            }
            function Ur(n, t) {
                n = oo.hcl(n),
                    t = oo.hcl(t);
                var e = n.h
                    , r = n.c
                    , u = n.l
                    , i = t.h - e
                    , o = t.c - r
                    , a = t.l - u;
                return isNaN(o) && (o = 0,
                    r = isNaN(r) ? t.c : r),
                    isNaN(i) ? (i = 0,
                        e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360),
                    function(n) {
                        return dn(e + i * n, r + o * n, u + a * n) + ""
                    }
            }
            function Fr(n, t) {
                n = oo.hsl(n),
                    t = oo.hsl(t);
                var e = n.h
                    , r = n.s
                    , u = n.l
                    , i = t.h - e
                    , o = t.s - r
                    , a = t.l - u;
                return isNaN(o) && (o = 0,
                    r = isNaN(r) ? t.s : r),
                    isNaN(i) ? (i = 0,
                        e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360),
                    function(n) {
                        return pn(e + i * n, r + o * n, u + a * n) + ""
                    }
            }
            function Hr(n, t) {
                n = oo.lab(n),
                    t = oo.lab(t);
                var e = n.l
                    , r = n.a
                    , u = n.b
                    , i = t.l - e
                    , o = t.a - r
                    , a = t.b - u;
                return function(n) {
                    return yn(e + i * n, r + o * n, u + a * n) + ""
                }
            }
            function Or(n, t) {
                return t -= n,
                    function(e) {
                        return Math.round(n + t * e)
                    }
            }
            function Ir(n) {
                var t = [n.a, n.b]
                    , e = [n.c, n.d]
                    , r = Zr(t)
                    , u = Yr(t, e)
                    , i = Zr(Vr(e, t, -u)) || 0;
                t[0] * e[1] < e[0] * t[1] && (t[0] *= -1,
                    t[1] *= -1,
                    r *= -1,
                    u *= -1),
                    this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-e[0], e[1])) * Io,
                    this.translate = [n.e, n.f],
                    this.scale = [r, i],
                    this.skew = i ? Math.atan2(u, i) * Io : 0
            }
            function Yr(n, t) {
                return n[0] * t[0] + n[1] * t[1]
            }
            function Zr(n) {
                var t = Math.sqrt(Yr(n, n));
                return t && (n[0] /= t,
                    n[1] /= t),
                    t
            }
            function Vr(n, t, e) {
                return n[0] += e * t[0],
                    n[1] += e * t[1],
                    n
            }
            function Xr(n, t) {
                var e, r = [], u = [], i = oo.transform(n), o = oo.transform(t), a = i.translate, c = o.translate, l = i.rotate, s = o.rotate, f = i.skew, h = o.skew, g = i.scale, p = o.scale;
                return a[0] != c[0] || a[1] != c[1] ? (r.push("translate(", null , ",", null , ")"),
                    u.push({
                        i: 1,
                        x: br(a[0], c[0])
                    }, {
                        i: 3,
                        x: br(a[1], c[1])
                    })) : c[0] || c[1] ? r.push("translate(" + c + ")") : r.push(""),
                    l != s ? (l - s > 180 ? s += 360 : s - l > 180 && (l += 360),
                        u.push({
                            i: r.push(r.pop() + "rotate(", null , ")") - 2,
                            x: br(l, s)
                        })) : s && r.push(r.pop() + "rotate(" + s + ")"),
                    f != h ? u.push({
                        i: r.push(r.pop() + "skewX(", null , ")") - 2,
                        x: br(f, h)
                    }) : h && r.push(r.pop() + "skewX(" + h + ")"),
                    g[0] != p[0] || g[1] != p[1] ? (e = r.push(r.pop() + "scale(", null , ",", null , ")"),
                        u.push({
                            i: e - 4,
                            x: br(g[0], p[0])
                        }, {
                            i: e - 2,
                            x: br(g[1], p[1])
                        })) : (1 != p[0] || 1 != p[1]) && r.push(r.pop() + "scale(" + p + ")"),
                    e = u.length,
                    function(n) {
                        for (var t, i = -1; ++i < e; )
                            r[(t = u[i]).i] = t.x(n);
                        return r.join("")
                    }
            }
            function $r(n, t) {
                return t = (t -= n = +n) || 1 / t,
                    function(e) {
                        return (e - n) / t
                    }
            }
            function Br(n, t) {
                return t = (t -= n = +n) || 1 / t,
                    function(e) {
                        return Math.max(0, Math.min(1, (e - n) / t))
                    }
            }
            function Jr(n) {
                for (var t = n.source, e = n.target, r = Kr(t, e), u = [t]; t !== r; )
                    t = t.parent,
                        u.push(t);
                for (var i = u.length; e !== r; )
                    u.splice(i, 0, e),
                        e = e.parent;
                return u
            }
            function Wr(n) {
                for (var t = [], e = n.parent; null != e; )
                    t.push(n),
                        n = e,
                        e = e.parent;
                return t.push(n),
                    t
            }
            function Kr(n, t) {
                if (n === t)
                    return n;
                for (var e = Wr(n), r = Wr(t), u = e.pop(), i = r.pop(), o = null ; u === i; )
                    o = u,
                        u = e.pop(),
                        i = r.pop();
                return o
            }
            function Gr(n) {
                n.fixed |= 2
            }
            function Qr(n) {
                n.fixed &= -7
            }
            function nu(n) {
                n.fixed |= 4,
                    n.px = n.x,
                    n.py = n.y
            }
            function tu(n) {
                n.fixed &= -5
            }
            function eu(n, t, e) {
                var r = 0
                    , u = 0;
                if (n.charge = 0,
                        !n.leaf)
                    for (var i, o = n.nodes, a = o.length, c = -1; ++c < a; )
                        i = o[c],
                        null != i && (eu(i, t, e),
                            n.charge += i.charge,
                            r += i.charge * i.cx,
                            u += i.charge * i.cy);
                if (n.point) {
                    n.leaf || (n.point.x += Math.random() - .5,
                        n.point.y += Math.random() - .5);
                    var l = t * e[n.point.index];
                    n.charge += n.pointCharge = l,
                        r += l * n.point.x,
                        u += l * n.point.y
                }
                n.cx = r / n.charge,
                    n.cy = u / n.charge
            }
            function ru(n, t) {
                return oo.rebind(n, t, "sort", "children", "value"),
                    n.nodes = n,
                    n.links = lu,
                    n
            }
            function uu(n, t) {
                for (var e = [n]; null != (n = e.pop()); )
                    if (t(n),
                        (u = n.children) && (r = u.length))
                        for (var r, u; --r >= 0; )
                            e.push(u[r])
            }
            function iu(n, t) {
                for (var e = [n], r = []; null != (n = e.pop()); )
                    if (r.push(n),
                        (i = n.children) && (u = i.length))
                        for (var u, i, o = -1; ++o < u; )
                            e.push(i[o]);
                for (; null != (n = r.pop()); )
                    t(n)
            }
            function ou(n) {
                return n.children
            }
            function au(n) {
                return n.value
            }
            function cu(n, t) {
                return t.value - n.value
            }
            function lu(n) {
                return oo.merge(n.map(function(n) {
                    return (n.children || []).map(function(t) {
                        return {
                            source: n,
                            target: t
                        }
                    })
                }))
            }
            function su(n) {
                return n.x
            }
            function fu(n) {
                return n.y
            }
            function hu(n, t, e) {
                n.y0 = t,
                    n.y = e
            }
            function gu(n) {
                return oo.range(n.length)
            }
            function pu(n) {
                for (var t = -1, e = n[0].length, r = []; ++t < e; )
                    r[t] = 0;
                return r
            }
            function vu(n) {
                for (var t, e = 1, r = 0, u = n[0][1], i = n.length; i > e; ++e)
                    (t = n[e][1]) > u && (r = e,
                        u = t);
                return r
            }
            function du(n) {
                return n.reduce(mu, 0)
            }
            function mu(n, t) {
                return n + t[1]
            }
            function yu(n, t) {
                return Mu(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
            }
            function Mu(n, t) {
                for (var e = -1, r = +n[0], u = (n[1] - r) / t, i = []; ++e <= t; )
                    i[e] = u * e + r;
                return i
            }
            function xu(n) {
                return [oo.min(n), oo.max(n)]
            }
            function bu(n, t) {
                return n.value - t.value
            }
            function wu(n, t) {
                var e = n._pack_next;
                n._pack_next = t,
                    t._pack_prev = n,
                    t._pack_next = e,
                    e._pack_prev = t
            }
            function _u(n, t) {
                n._pack_next = t,
                    t._pack_prev = n
            }
            function Su(n, t) {
                var e = t.x - n.x
                    , r = t.y - n.y
                    , u = n.r + t.r;
                return .999 * u * u > e * e + r * r
            }
            function ku(n) {
                function t(n) {
                    s = Math.min(n.x - n.r, s),
                        f = Math.max(n.x + n.r, f),
                        h = Math.min(n.y - n.r, h),
                        g = Math.max(n.y + n.r, g)
                }
                if ((e = n.children) && (l = e.length)) {
                    var e, r, u, i, o, a, c, l, s = 1 / 0, f = -(1 / 0), h = 1 / 0, g = -(1 / 0);
                    if (e.forEach(Nu),
                            r = e[0],
                            r.x = -r.r,
                            r.y = 0,
                            t(r),
                        l > 1 && (u = e[1],
                            u.x = u.r,
                            u.y = 0,
                            t(u),
                        l > 2))
                        for (i = e[2],
                                 Cu(r, u, i),
                                 t(i),
                                 wu(r, i),
                                 r._pack_prev = i,
                                 wu(i, u),
                                 u = r._pack_next,
                                 o = 3; l > o; o++) {
                            Cu(r, u, i = e[o]);
                            var p = 0
                                , v = 1
                                , d = 1;
                            for (a = u._pack_next; a !== u; a = a._pack_next,
                                v++)
                                if (Su(a, i)) {
                                    p = 1;
                                    break
                                }
                            if (1 == p)
                                for (c = r._pack_prev; c !== a._pack_prev && !Su(c, i); c = c._pack_prev,
                                    d++)
                                    ;
                            p ? (d > v || v == d && u.r < r.r ? _u(r, u = a) : _u(r = c, u),
                                o--) : (wu(r, i),
                                u = i,
                                t(i))
                        }
                    var m = (s + f) / 2
                        , y = (h + g) / 2
                        , M = 0;
                    for (o = 0; l > o; o++)
                        i = e[o],
                            i.x -= m,
                            i.y -= y,
                            M = Math.max(M, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
                    n.r = M,
                        e.forEach(Eu)
                }
            }
            function Nu(n) {
                n._pack_next = n._pack_prev = n
            }
            function Eu(n) {
                delete n._pack_next,
                    delete n._pack_prev
            }
            function Au(n, t, e, r) {
                var u = n.children;
                if (n.x = t += r * n.x,
                        n.y = e += r * n.y,
                        n.r *= r,
                        u)
                    for (var i = -1, o = u.length; ++i < o; )
                        Au(u[i], t, e, r)
            }
            function Cu(n, t, e) {
                var r = n.r + e.r
                    , u = t.x - n.x
                    , i = t.y - n.y;
                if (r && (u || i)) {
                    var o = t.r + e.r
                        , a = u * u + i * i;
                    o *= o,
                        r *= r;
                    var c = .5 + (r - o) / (2 * a)
                        , l = Math.sqrt(Math.max(0, 2 * o * (r + a) - (r -= a) * r - o * o)) / (2 * a);
                    e.x = n.x + c * u + l * i,
                        e.y = n.y + c * i - l * u
                } else
                    e.x = n.x + r,
                        e.y = n.y
            }
            function zu(n, t) {
                return n.parent == t.parent ? 1 : 2
            }
            function qu(n) {
                var t = n.children;
                return t.length ? t[0] : n.t
            }
            function Lu(n) {
                var t, e = n.children;
                return (t = e.length) ? e[t - 1] : n.t
            }
            function Tu(n, t, e) {
                var r = e / (t.i - n.i);
                t.c -= r,
                    t.s += e,
                    n.c += r,
                    t.z += e,
                    t.m += e
            }
            function Ru(n) {
                for (var t, e = 0, r = 0, u = n.children, i = u.length; --i >= 0; )
                    t = u[i],
                        t.z += e,
                        t.m += e,
                        e += t.s + (r += t.c)
            }
            function Du(n, t, e) {
                return n.a.parent === t.parent ? n.a : e
            }
            function Pu(n) {
                return 1 + oo.max(n, function(n) {
                        return n.y
                    })
            }
            function ju(n) {
                return n.reduce(function(n, t) {
                        return n + t.x
                    }, 0) / n.length
            }
            function Uu(n) {
                var t = n.children;
                return t && t.length ? Uu(t[0]) : n
            }
            function Fu(n) {
                var t, e = n.children;
                return e && (t = e.length) ? Fu(e[t - 1]) : n
            }
            function Hu(n) {
                return {
                    x: n.x,
                    y: n.y,
                    dx: n.dx,
                    dy: n.dy
                }
            }
            function Ou(n, t) {
                var e = n.x + t[3]
                    , r = n.y + t[0]
                    , u = n.dx - t[1] - t[3]
                    , i = n.dy - t[0] - t[2];
                return 0 > u && (e += u / 2,
                    u = 0),
                0 > i && (r += i / 2,
                    i = 0),
                {
                    x: e,
                    y: r,
                    dx: u,
                    dy: i
                }
            }
            function Iu(n) {
                var t = n[0]
                    , e = n[n.length - 1];
                return e > t ? [t, e] : [e, t]
            }
            function Yu(n) {
                return n.rangeExtent ? n.rangeExtent() : Iu(n.range())
            }
            function Zu(n, t, e, r) {
                var u = e(n[0], n[1])
                    , i = r(t[0], t[1]);
                return function(n) {
                    return i(u(n))
                }
            }
            function Vu(n, t) {
                var e, r = 0, u = n.length - 1, i = n[r], o = n[u];
                return i > o && (e = r,
                    r = u,
                    u = e,
                    e = i,
                    i = o,
                    o = e),
                    n[r] = t.floor(i),
                    n[u] = t.ceil(o),
                    n
            }
            function Xu(n) {
                return n ? {
                    floor: function(t) {
                        return Math.floor(t / n) * n
                    },
                    ceil: function(t) {
                        return Math.ceil(t / n) * n
                    }
                } : _c
            }
            function $u(n, t, e, r) {
                var u = []
                    , i = []
                    , o = 0
                    , a = Math.min(n.length, t.length) - 1;
                for (n[a] < n[0] && (n = n.slice().reverse(),
                    t = t.slice().reverse()); ++o <= a; )
                    u.push(e(n[o - 1], n[o])),
                        i.push(r(t[o - 1], t[o]));
                return function(t) {
                    var e = oo.bisect(n, t, 1, a) - 1;
                    return i[e](u[e](t))
                }
            }
            function Bu(n, t, e, r) {
                function u() {
                    var u = Math.min(n.length, t.length) > 2 ? $u : Zu
                        , c = r ? Br : $r;
                    return o = u(n, t, c, e),
                        a = u(t, n, c, _r),
                        i
                }
                function i(n) {
                    return o(n)
                }
                var o, a;
                return i.invert = function(n) {
                    return a(n)
                }
                    ,
                    i.domain = function(t) {
                        return arguments.length ? (n = t.map(Number),
                            u()) : n
                    }
                    ,
                    i.range = function(n) {
                        return arguments.length ? (t = n,
                            u()) : t
                    }
                    ,
                    i.rangeRound = function(n) {
                        return i.range(n).interpolate(Or)
                    }
                    ,
                    i.clamp = function(n) {
                        return arguments.length ? (r = n,
                            u()) : r
                    }
                    ,
                    i.interpolate = function(n) {
                        return arguments.length ? (e = n,
                            u()) : e
                    }
                    ,
                    i.ticks = function(t) {
                        return Gu(n, t)
                    }
                    ,
                    i.tickFormat = function(t, e) {
                        return Qu(n, t, e)
                    }
                    ,
                    i.nice = function(t) {
                        return Wu(n, t),
                            u()
                    }
                    ,
                    i.copy = function() {
                        return Bu(n, t, e, r)
                    }
                    ,
                    u()
            }
            function Ju(n, t) {
                return oo.rebind(n, t, "range", "rangeRound", "interpolate", "clamp")
            }
            function Wu(n, t) {
                return Vu(n, Xu(Ku(n, t)[2]))
            }
            function Ku(n, t) {
                null == t && (t = 10);
                var e = Iu(n)
                    , r = e[1] - e[0]
                    , u = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10))
                    , i = t / r * u;
                return .15 >= i ? u *= 10 : .35 >= i ? u *= 5 : .75 >= i && (u *= 2),
                    e[0] = Math.ceil(e[0] / u) * u,
                    e[1] = Math.floor(e[1] / u) * u + .5 * u,
                    e[2] = u,
                    e
            }
            function Gu(n, t) {
                return oo.range.apply(oo, Ku(n, t))
            }
            function Qu(n, t, e) {
                var r = Ku(n, t);
                if (e) {
                    var u = fa.exec(e);
                    if (u.shift(),
                        "s" === u[8]) {
                        var i = oo.formatPrefix(Math.max(Mo(r[0]), Mo(r[1])));
                        return u[7] || (u[7] = "." + ni(i.scale(r[2]))),
                            u[8] = "f",
                            e = oo.format(u.join("")),
                            function(n) {
                                return e(i.scale(n)) + i.symbol
                            }
                    }
                    u[7] || (u[7] = "." + ti(u[8], r)),
                        e = u.join("")
                } else
                    e = ",." + ni(r[2]) + "f";
                return oo.format(e)
            }
            function ni(n) {
                return -Math.floor(Math.log(n) / Math.LN10 + .01)
            }
            function ti(n, t) {
                var e = ni(t[2]);
                return n in Sc ? Math.abs(e - ni(Math.max(Mo(t[0]), Mo(t[1])))) + +("e" !== n) : e - 2 * ("%" === n)
            }
            function ei(n, t, e, r) {
                function u(n) {
                    return (e ? Math.log(0 > n ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(t)
                }
                function i(n) {
                    return e ? Math.pow(t, n) : -Math.pow(t, -n)
                }
                function o(t) {
                    return n(u(t))
                }
                return o.invert = function(t) {
                    return i(n.invert(t))
                }
                    ,
                    o.domain = function(t) {
                        return arguments.length ? (e = t[0] >= 0,
                            n.domain((r = t.map(Number)).map(u)),
                            o) : r
                    }
                    ,
                    o.base = function(e) {
                        return arguments.length ? (t = +e,
                            n.domain(r.map(u)),
                            o) : t
                    }
                    ,
                    o.nice = function() {
                        var t = Vu(r.map(u), e ? Math : Nc);
                        return n.domain(t),
                            r = t.map(i),
                            o
                    }
                    ,
                    o.ticks = function() {
                        var n = Iu(r)
                            , o = []
                            , a = n[0]
                            , c = n[1]
                            , l = Math.floor(u(a))
                            , s = Math.ceil(u(c))
                            , f = t % 1 ? 2 : t;
                        if (isFinite(s - l)) {
                            if (e) {
                                for (; s > l; l++)
                                    for (var h = 1; f > h; h++)
                                        o.push(i(l) * h);
                                o.push(i(l))
                            } else
                                for (o.push(i(l)); l++ < s; )
                                    for (var h = f - 1; h > 0; h--)
                                        o.push(i(l) * h);
                            for (l = 0; o[l] < a; l++)
                                ;
                            for (s = o.length; o[s - 1] > c; s--)
                                ;
                            o = o.slice(l, s)
                        }
                        return o
                    }
                    ,
                    o.tickFormat = function(n, t) {
                        if (!arguments.length)
                            return kc;
                        arguments.length < 2 ? t = kc : "function" != typeof t && (t = oo.format(t));
                        var r, a = Math.max(.1, n / o.ticks().length), c = e ? (r = 1e-12,
                            Math.ceil) : (r = -1e-12,
                            Math.floor);
                        return function(n) {
                            return n / i(c(u(n) + r)) <= a ? t(n) : ""
                        }
                    }
                    ,
                    o.copy = function() {
                        return ei(n.copy(), t, e, r)
                    }
                    ,
                    Ju(o, n)
            }
            function ri(n, t, e) {
                function r(t) {
                    return n(u(t))
                }
                var u = ui(t)
                    , i = ui(1 / t);
                return r.invert = function(t) {
                    return i(n.invert(t))
                }
                    ,
                    r.domain = function(t) {
                        return arguments.length ? (n.domain((e = t.map(Number)).map(u)),
                            r) : e
                    }
                    ,
                    r.ticks = function(n) {
                        return Gu(e, n)
                    }
                    ,
                    r.tickFormat = function(n, t) {
                        return Qu(e, n, t)
                    }
                    ,
                    r.nice = function(n) {
                        return r.domain(Wu(e, n))
                    }
                    ,
                    r.exponent = function(o) {
                        return arguments.length ? (u = ui(t = o),
                            i = ui(1 / t),
                            n.domain(e.map(u)),
                            r) : t
                    }
                    ,
                    r.copy = function() {
                        return ri(n.copy(), t, e)
                    }
                    ,
                    Ju(r, n)
            }
            function ui(n) {
                return function(t) {
                    return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n)
                }
            }
            function ii(n, t) {
                function e(e) {
                    return i[((u.get(e) || ("range" === t.t ? u.set(e, n.push(e)) : NaN)) - 1) % i.length]
                }
                function r(t, e) {
                    return oo.range(n.length).map(function(n) {
                        return t + e * n
                    })
                }
                var u, i, o;
                return e.domain = function(r) {
                    if (!arguments.length)
                        return n;
                    n = [],
                        u = new p;
                    for (var i, o = -1, a = r.length; ++o < a; )
                        u.has(i = r[o]) || u.set(i, n.push(i));
                    return e[t.t].apply(e, t.a)
                }
                    ,
                    e.range = function(n) {
                        return arguments.length ? (i = n,
                            o = 0,
                            t = {
                                t: "range",
                                a: arguments
                            },
                            e) : i
                    }
                    ,
                    e.rangePoints = function(u, a) {
                        arguments.length < 2 && (a = 0);
                        var c = u[0]
                            , l = u[1]
                            , s = n.length < 2 ? (c = (c + l) / 2,
                            0) : (l - c) / (n.length - 1 + a);
                        return i = r(c + s * a / 2, s),
                            o = 0,
                            t = {
                                t: "rangePoints",
                                a: arguments
                            },
                            e
                    }
                    ,
                    e.rangeRoundPoints = function(u, a) {
                        arguments.length < 2 && (a = 0);
                        var c = u[0]
                            , l = u[1]
                            , s = n.length < 2 ? (c = l = Math.round((c + l) / 2),
                            0) : (l - c) / (n.length - 1 + a) | 0;
                        return i = r(c + Math.round(s * a / 2 + (l - c - (n.length - 1 + a) * s) / 2), s),
                            o = 0,
                            t = {
                                t: "rangeRoundPoints",
                                a: arguments
                            },
                            e
                    }
                    ,
                    e.rangeBands = function(u, a, c) {
                        arguments.length < 2 && (a = 0),
                        arguments.length < 3 && (c = a);
                        var l = u[1] < u[0]
                            , s = u[l - 0]
                            , f = u[1 - l]
                            , h = (f - s) / (n.length - a + 2 * c);
                        return i = r(s + h * c, h),
                        l && i.reverse(),
                            o = h * (1 - a),
                            t = {
                                t: "rangeBands",
                                a: arguments
                            },
                            e
                    }
                    ,
                    e.rangeRoundBands = function(u, a, c) {
                        arguments.length < 2 && (a = 0),
                        arguments.length < 3 && (c = a);
                        var l = u[1] < u[0]
                            , s = u[l - 0]
                            , f = u[1 - l]
                            , h = Math.floor((f - s) / (n.length - a + 2 * c));
                        return i = r(s + Math.round((f - s - (n.length - a) * h) / 2), h),
                        l && i.reverse(),
                            o = Math.round(h * (1 - a)),
                            t = {
                                t: "rangeRoundBands",
                                a: arguments
                            },
                            e
                    }
                    ,
                    e.rangeBand = function() {
                        return o
                    }
                    ,
                    e.rangeExtent = function() {
                        return Iu(t.a[0])
                    }
                    ,
                    e.copy = function() {
                        return ii(n, t)
                    }
                    ,
                    e.domain(n)
            }
            function oi(n, t) {
                function e() {
                    var e = 0
                        , i = t.length;
                    for (u = []; ++e < i; )
                        u[e - 1] = oo.quantile(n, e / i);
                    return r
                }
                function r(n) {
                    return isNaN(n = +n) ? void 0 : t[oo.bisect(u, n)]
                }
                var u;
                return r.domain = function(t) {
                    return arguments.length ? (n = t.map(c).filter(l).sort(a),
                        e()) : n
                }
                    ,
                    r.range = function(n) {
                        return arguments.length ? (t = n,
                            e()) : t
                    }
                    ,
                    r.quantiles = function() {
                        return u
                    }
                    ,
                    r.invertExtent = function(e) {
                        return e = t.indexOf(e),
                            0 > e ? [NaN, NaN] : [e > 0 ? u[e - 1] : n[0], e < u.length ? u[e] : n[n.length - 1]]
                    }
                    ,
                    r.copy = function() {
                        return oi(n, t)
                    }
                    ,
                    e()
            }
            function ai(n, t, e) {
                function r(t) {
                    return e[Math.max(0, Math.min(o, Math.floor(i * (t - n))))]
                }
                function u() {
                    return i = e.length / (t - n),
                        o = e.length - 1,
                        r
                }
                var i, o;
                return r.domain = function(e) {
                    return arguments.length ? (n = +e[0],
                        t = +e[e.length - 1],
                        u()) : [n, t]
                }
                    ,
                    r.range = function(n) {
                        return arguments.length ? (e = n,
                            u()) : e
                    }
                    ,
                    r.invertExtent = function(t) {
                        return t = e.indexOf(t),
                            t = 0 > t ? NaN : t / i + n,
                            [t, t + 1 / i]
                    }
                    ,
                    r.copy = function() {
                        return ai(n, t, e)
                    }
                    ,
                    u()
            }
            function ci(n, t) {
                function e(e) {
                    return e >= e ? t[oo.bisect(n, e)] : void 0
                }
                return e.domain = function(t) {
                    return arguments.length ? (n = t,
                        e) : n
                }
                    ,
                    e.range = function(n) {
                        return arguments.length ? (t = n,
                            e) : t
                    }
                    ,
                    e.invertExtent = function(e) {
                        return e = t.indexOf(e),
                            [n[e - 1], n[e]]
                    }
                    ,
                    e.copy = function() {
                        return ci(n, t)
                    }
                    ,
                    e
            }
            function li(n) {
                function t(n) {
                    return +n
                }
                return t.invert = t,
                    t.domain = t.range = function(e) {
                        return arguments.length ? (n = e.map(t),
                            t) : n
                    }
                    ,
                    t.ticks = function(t) {
                        return Gu(n, t)
                    }
                    ,
                    t.tickFormat = function(t, e) {
                        return Qu(n, t, e)
                    }
                    ,
                    t.copy = function() {
                        return li(n)
                    }
                    ,
                    t
            }
            function si() {
                return 0
            }
            function fi(n) {
                return n.innerRadius
            }
            function hi(n) {
                return n.outerRadius
            }
            function gi(n) {
                return n.startAngle
            }
            function pi(n) {
                return n.endAngle
            }
            function vi(n) {
                return n && n.padAngle
            }
            function di(n, t, e, r) {
                return (n - e) * t - (t - r) * n > 0 ? 0 : 1
            }
            function mi(n, t, e, r, u) {
                var i = n[0] - t[0]
                    , o = n[1] - t[1]
                    , a = (u ? r : -r) / Math.sqrt(i * i + o * o)
                    , c = a * o
                    , l = -a * i
                    , s = n[0] + c
                    , f = n[1] + l
                    , h = t[0] + c
                    , g = t[1] + l
                    , p = (s + h) / 2
                    , v = (f + g) / 2
                    , d = h - s
                    , m = g - f
                    , y = d * d + m * m
                    , M = e - r
                    , x = s * g - h * f
                    , b = (0 > m ? -1 : 1) * Math.sqrt(M * M * y - x * x)
                    , w = (x * m - d * b) / y
                    , _ = (-x * d - m * b) / y
                    , S = (x * m + d * b) / y
                    , k = (-x * d + m * b) / y
                    , N = w - p
                    , E = _ - v
                    , A = S - p
                    , C = k - v;
                return N * N + E * E > A * A + C * C && (w = S,
                    _ = k),
                    [[w - c, _ - l], [w * e / M, _ * e / M]]
            }
            function yi(n) {
                function t(t) {
                    function o() {
                        l.push("M", i(n(s), a))
                    }
                    for (var c, l = [], s = [], f = -1, h = t.length, g = Ln(e), p = Ln(r); ++f < h; )
                        u.call(this, c = t[f], f) ? s.push([+g.call(this, c, f), +p.call(this, c, f)]) : s.length && (o(),
                            s = []);
                    return s.length && o(),
                        l.length ? l.join("") : null
                }
                var e = Te
                    , r = Re
                    , u = Rt
                    , i = Mi
                    , o = i.key
                    , a = .7;
                return t.x = function(n) {
                    return arguments.length ? (e = n,
                        t) : e
                }
                    ,
                    t.y = function(n) {
                        return arguments.length ? (r = n,
                            t) : r
                    }
                    ,
                    t.defined = function(n) {
                        return arguments.length ? (u = n,
                            t) : u
                    }
                    ,
                    t.interpolate = function(n) {
                        return arguments.length ? (o = "function" == typeof n ? i = n : (i = Lc.get(n) || Mi).key,
                            t) : o
                    }
                    ,
                    t.tension = function(n) {
                        return arguments.length ? (a = n,
                            t) : a
                    }
                    ,
                    t
            }
            function Mi(n) {
                return n.join("L")
            }
            function xi(n) {
                return Mi(n) + "Z"
            }
            function bi(n) {
                for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e; )
                    u.push("H", (r[0] + (r = n[t])[0]) / 2, "V", r[1]);
                return e > 1 && u.push("H", r[0]),
                    u.join("")
            }
            function wi(n) {
                for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e; )
                    u.push("V", (r = n[t])[1], "H", r[0]);
                return u.join("")
            }
            function _i(n) {
                for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e; )
                    u.push("H", (r = n[t])[0], "V", r[1]);
                return u.join("")
            }
            function Si(n, t) {
                return n.length < 4 ? Mi(n) : n[1] + Ei(n.slice(1, -1), Ai(n, t))
            }
            function ki(n, t) {
                return n.length < 3 ? Mi(n) : n[0] + Ei((n.push(n[0]),
                    n), Ai([n[n.length - 2]].concat(n, [n[1]]), t))
            }
            function Ni(n, t) {
                return n.length < 3 ? Mi(n) : n[0] + Ei(n, Ai(n, t))
            }
            function Ei(n, t) {
                if (t.length < 1 || n.length != t.length && n.length != t.length + 2)
                    return Mi(n);
                var e = n.length != t.length
                    , r = ""
                    , u = n[0]
                    , i = n[1]
                    , o = t[0]
                    , a = o
                    , c = 1;
                if (e && (r += "Q" + (i[0] - 2 * o[0] / 3) + "," + (i[1] - 2 * o[1] / 3) + "," + i[0] + "," + i[1],
                        u = n[1],
                        c = 2),
                    t.length > 1) {
                    a = t[1],
                        i = n[c],
                        c++,
                        r += "C" + (u[0] + o[0]) + "," + (u[1] + o[1]) + "," + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1];
                    for (var l = 2; l < t.length; l++,
                        c++)
                        i = n[c],
                            a = t[l],
                            r += "S" + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1]
                }
                if (e) {
                    var s = n[c];
                    r += "Q" + (i[0] + 2 * a[0] / 3) + "," + (i[1] + 2 * a[1] / 3) + "," + s[0] + "," + s[1]
                }
                return r
            }
            function Ai(n, t) {
                for (var e, r = [], u = (1 - t) / 2, i = n[0], o = n[1], a = 1, c = n.length; ++a < c; )
                    e = i,
                        i = o,
                        o = n[a],
                        r.push([u * (o[0] - e[0]), u * (o[1] - e[1])]);
                return r
            }
            function Ci(n) {
                if (n.length < 3)
                    return Mi(n);
                var t = 1
                    , e = n.length
                    , r = n[0]
                    , u = r[0]
                    , i = r[1]
                    , o = [u, u, u, (r = n[1])[0]]
                    , a = [i, i, i, r[1]]
                    , c = [u, ",", i, "L", Ti(Dc, o), ",", Ti(Dc, a)];
                for (n.push(n[e - 1]); ++t <= e; )
                    r = n[t],
                        o.shift(),
                        o.push(r[0]),
                        a.shift(),
                        a.push(r[1]),
                        Ri(c, o, a);
                return n.pop(),
                    c.push("L", r),
                    c.join("")
            }
            function zi(n) {
                if (n.length < 4)
                    return Mi(n);
                for (var t, e = [], r = -1, u = n.length, i = [0], o = [0]; ++r < 3; )
                    t = n[r],
                        i.push(t[0]),
                        o.push(t[1]);
                for (e.push(Ti(Dc, i) + "," + Ti(Dc, o)),
                         --r; ++r < u; )
                    t = n[r],
                        i.shift(),
                        i.push(t[0]),
                        o.shift(),
                        o.push(t[1]),
                        Ri(e, i, o);
                return e.join("")
            }
            function qi(n) {
                for (var t, e, r = -1, u = n.length, i = u + 4, o = [], a = []; ++r < 4; )
                    e = n[r % u],
                        o.push(e[0]),
                        a.push(e[1]);
                for (t = [Ti(Dc, o), ",", Ti(Dc, a)],
                         --r; ++r < i; )
                    e = n[r % u],
                        o.shift(),
                        o.push(e[0]),
                        a.shift(),
                        a.push(e[1]),
                        Ri(t, o, a);
                return t.join("")
            }
            function Li(n, t) {
                var e = n.length - 1;
                if (e)
                    for (var r, u, i = n[0][0], o = n[0][1], a = n[e][0] - i, c = n[e][1] - o, l = -1; ++l <= e; )
                        r = n[l],
                            u = l / e,
                            r[0] = t * r[0] + (1 - t) * (i + u * a),
                            r[1] = t * r[1] + (1 - t) * (o + u * c);
                return Ci(n)
            }
            function Ti(n, t) {
                return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3]
            }
            function Ri(n, t, e) {
                n.push("C", Ti(Tc, t), ",", Ti(Tc, e), ",", Ti(Rc, t), ",", Ti(Rc, e), ",", Ti(Dc, t), ",", Ti(Dc, e))
            }
            function Di(n, t) {
                return (t[1] - n[1]) / (t[0] - n[0])
            }
            function Pi(n) {
                for (var t = 0, e = n.length - 1, r = [], u = n[0], i = n[1], o = r[0] = Di(u, i); ++t < e; )
                    r[t] = (o + (o = Di(u = i, i = n[t + 1]))) / 2;
                return r[t] = o,
                    r
            }
            function ji(n) {
                for (var t, e, r, u, i = [], o = Pi(n), a = -1, c = n.length - 1; ++a < c; )
                    t = Di(n[a], n[a + 1]),
                        Mo(t) < Do ? o[a] = o[a + 1] = 0 : (e = o[a] / t,
                            r = o[a + 1] / t,
                            u = e * e + r * r,
                        u > 9 && (u = 3 * t / Math.sqrt(u),
                            o[a] = u * e,
                            o[a + 1] = u * r));
                for (a = -1; ++a <= c; )
                    u = (n[Math.min(c, a + 1)][0] - n[Math.max(0, a - 1)][0]) / (6 * (1 + o[a] * o[a])),
                        i.push([u || 0, o[a] * u || 0]);
                return i
            }
            function Ui(n) {
                return n.length < 3 ? Mi(n) : n[0] + Ei(n, ji(n))
            }
            function Fi(n) {
                for (var t, e, r, u = -1, i = n.length; ++u < i; )
                    t = n[u],
                        e = t[0],
                        r = t[1] - Ho,
                        t[0] = e * Math.cos(r),
                        t[1] = e * Math.sin(r);
                return n
            }
            function Hi(n) {
                function t(t) {
                    function c() {
                        v.push("M", a(n(m), f), s, l(n(d.reverse()), f), "Z")
                    }
                    for (var h, g, p, v = [], d = [], m = [], y = -1, M = t.length, x = Ln(e), b = Ln(u), w = e === r ? function() {
                        return g
                    }
                        : Ln(r), _ = u === i ? function() {
                        return p
                    }
                        : Ln(i); ++y < M; )
                        o.call(this, h = t[y], y) ? (d.push([g = +x.call(this, h, y), p = +b.call(this, h, y)]),
                            m.push([+w.call(this, h, y), +_.call(this, h, y)])) : d.length && (c(),
                            d = [],
                            m = []);
                    return d.length && c(),
                        v.length ? v.join("") : null
                }
                var e = Te
                    , r = Te
                    , u = 0
                    , i = Re
                    , o = Rt
                    , a = Mi
                    , c = a.key
                    , l = a
                    , s = "L"
                    , f = .7;
                return t.x = function(n) {
                    return arguments.length ? (e = r = n,
                        t) : r
                }
                    ,
                    t.x0 = function(n) {
                        return arguments.length ? (e = n,
                            t) : e
                    }
                    ,
                    t.x1 = function(n) {
                        return arguments.length ? (r = n,
                            t) : r
                    }
                    ,
                    t.y = function(n) {
                        return arguments.length ? (u = i = n,
                            t) : i
                    }
                    ,
                    t.y0 = function(n) {
                        return arguments.length ? (u = n,
                            t) : u
                    }
                    ,
                    t.y1 = function(n) {
                        return arguments.length ? (i = n,
                            t) : i
                    }
                    ,
                    t.defined = function(n) {
                        return arguments.length ? (o = n,
                            t) : o
                    }
                    ,
                    t.interpolate = function(n) {
                        return arguments.length ? (c = "function" == typeof n ? a = n : (a = Lc.get(n) || Mi).key,
                            l = a.reverse || a,
                            s = a.closed ? "M" : "L",
                            t) : c
                    }
                    ,
                    t.tension = function(n) {
                        return arguments.length ? (f = n,
                            t) : f
                    }
                    ,
                    t
            }
            function Oi(n) {
                return n.radius
            }
            function Ii(n) {
                return [n.x, n.y]
            }
            function Yi(n) {
                return function() {
                    var t = n.apply(this, arguments)
                        , e = t[0]
                        , r = t[1] - Ho;
                    return [e * Math.cos(r), e * Math.sin(r)]
                }
            }
            function Zi() {
                return 64
            }
            function Vi() {
                return "circle"
            }
            function Xi(n) {
                var t = Math.sqrt(n / jo);
                return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"
            }
            function $i(n) {
                return function() {
                    var t, e;
                    (t = this[n]) && (e = t[t.active]) && (--t.count ? delete t[t.active] : delete this[n],
                        t.active += .5,
                    e.event && e.event.interrupt.call(this, this.__data__, e.index))
                }
            }
            function Bi(n, t, e) {
                return So(n, Ic),
                    n.namespace = t,
                    n.id = e,
                    n
            }
            function Ji(n, t, e, r) {
                var u = n.id
                    , i = n.namespace;
                return B(n, "function" == typeof e ? function(n, o, a) {
                    n[i][u].tween.set(t, r(e.call(n, n.__data__, o, a)))
                }
                    : (e = r(e),
                        function(n) {
                            n[i][u].tween.set(t, e)
                        }
                ))
            }
            function Wi(n) {
                return null == n && (n = ""),
                    function() {
                        this.textContent = n
                    }
            }
            function Ki(n) {
                return null == n ? "__transition__" : "__transition_" + n + "__"
            }
            function Gi(n, t, e, r, u) {
                var i = n[e] || (n[e] = {
                        active: 0,
                        count: 0
                    })
                    , o = i[r];
                if (!o) {
                    var a = u.time;
                    o = i[r] = {
                        tween: new p,
                        time: a,
                        delay: u.delay,
                        duration: u.duration,
                        ease: u.ease,
                        index: t
                    },
                        u = null ,
                        ++i.count,
                        oo.timer(function(u) {
                            function c(e) {
                                if (i.active > r)
                                    return s();
                                var u = i[i.active];
                                u && (--i.count,
                                    delete i[i.active],
                                u.event && u.event.interrupt.call(n, n.__data__, u.index)),
                                    i.active = r,
                                o.event && o.event.start.call(n, n.__data__, t),
                                    o.tween.forEach(function(e, r) {
                                        (r = r.call(n, n.__data__, t)) && v.push(r)
                                    }),
                                    h = o.ease,
                                    f = o.duration,
                                    oo.timer(function() {
                                        return p.c = l(e || 1) ? Rt : l,
                                            1
                                    }, 0, a)
                            }
                            function l(e) {
                                if (i.active !== r)
                                    return 1;
                                for (var u = e / f, a = h(u), c = v.length; c > 0; )
                                    v[--c].call(n, a);
                                return u >= 1 ? (o.event && o.event.end.call(n, n.__data__, t),
                                    s()) : void 0
                            }
                            function s() {
                                return --i.count ? delete i[r] : delete n[e],
                                    1
                            }
                            var f, h, g = o.delay, p = ca, v = [];
                            return p.t = g + a,
                                u >= g ? c(u - g) : void (p.c = c)
                        }, 0, a)
                }
            }
            function Qi(n, t, e) {
                n.attr("transform", function(n) {
                    var r = t(n);
                    return "translate(" + (isFinite(r) ? r : e(n)) + ",0)"
                })
            }
            function no(n, t, e) {
                n.attr("transform", function(n) {
                    var r = t(n);
                    return "translate(0," + (isFinite(r) ? r : e(n)) + ")"
                })
            }
            function to(n) {
                return n.toISOString()
            }
            function eo(n, t, e) {
                function r(t) {
                    return n(t)
                }
                function u(n, e) {
                    var r = n[1] - n[0]
                        , u = r / e
                        , i = oo.bisect(Kc, u);
                    return i == Kc.length ? [t.year, Ku(n.map(function(n) {
                        return n / 31536e6
                    }), e)[2]] : i ? t[u / Kc[i - 1] < Kc[i] / u ? i - 1 : i] : [nl, Ku(n, e)[2]]
                }
                return r.invert = function(t) {
                    return ro(n.invert(t))
                }
                    ,
                    r.domain = function(t) {
                        return arguments.length ? (n.domain(t),
                            r) : n.domain().map(ro)
                    }
                    ,
                    r.nice = function(n, t) {
                        function e(e) {
                            return !isNaN(e) && !n.range(e, ro(+e + 1), t).length
                        }
                        var i = r.domain()
                            , o = Iu(i)
                            , a = null == n ? u(o, 10) : "number" == typeof n && u(o, n);
                        return a && (n = a[0],
                            t = a[1]),
                            r.domain(Vu(i, t > 1 ? {
                                floor: function(t) {
                                    for (; e(t = n.floor(t)); )
                                        t = ro(t - 1);
                                    return t
                                },
                                ceil: function(t) {
                                    for (; e(t = n.ceil(t)); )
                                        t = ro(+t + 1);
                                    return t
                                }
                            } : n))
                    }
                    ,
                    r.ticks = function(n, t) {
                        var e = Iu(r.domain())
                            , i = null == n ? u(e, 10) : "number" == typeof n ? u(e, n) : !n.range && [{
                            range: n
                        }, t];
                        return i && (n = i[0],
                            t = i[1]),
                            n.range(e[0], ro(+e[1] + 1), 1 > t ? 1 : t)
                    }
                    ,
                    r.tickFormat = function() {
                        return e
                    }
                    ,
                    r.copy = function() {
                        return eo(n.copy(), t, e)
                    }
                    ,
                    Ju(r, n)
            }
            function ro(n) {
                return new Date(n)
            }
            function uo(n) {
                return JSON.parse(n.responseText)
            }
            function io(n) {
                var t = lo.createRange();
                return t.selectNode(lo.body),
                    t.createContextualFragment(n.responseText)
            }
            var oo = {
                version: "3.5.6"
            }
                , ao = [].slice
                , co = function(n) {
                return ao.call(n)
            }
                , lo = this.document;
            if (lo)
                try {
                    co(lo.documentElement.childNodes)[0].nodeType
                } catch (so) {
                    co = function(n) {
                        for (var t = n.length, e = new Array(t); t--; )
                            e[t] = n[t];
                        return e
                    }
                }
            if (Date.now || (Date.now = function() {
                        return +new Date
                    }
                ),
                    lo)
                try {
                    lo.createElement("DIV").style.setProperty("opacity", 0, "")
                } catch (fo) {
                    var ho = this.Element.prototype
                        , go = ho.setAttribute
                        , po = ho.setAttributeNS
                        , vo = this.CSSStyleDeclaration.prototype
                        , mo = vo.setProperty;
                    ho.setAttribute = function(n, t) {
                        go.call(this, n, t + "")
                    }
                        ,
                        ho.setAttributeNS = function(n, t, e) {
                            po.call(this, n, t, e + "")
                        }
                        ,
                        vo.setProperty = function(n, t, e) {
                            mo.call(this, n, t + "", e)
                        }
                }
            oo.ascending = a,
                oo.descending = function(n, t) {
                    return n > t ? -1 : t > n ? 1 : t >= n ? 0 : NaN
                }
                ,
                oo.min = function(n, t) {
                    var e, r, u = -1, i = n.length;
                    if (1 === arguments.length) {
                        for (; ++u < i; )
                            if (null != (r = n[u]) && r >= r) {
                                e = r;
                                break
                            }
                        for (; ++u < i; )
                            null != (r = n[u]) && e > r && (e = r)
                    } else {
                        for (; ++u < i; )
                            if (null != (r = t.call(n, n[u], u)) && r >= r) {
                                e = r;
                                break
                            }
                        for (; ++u < i; )
                            null != (r = t.call(n, n[u], u)) && e > r && (e = r)
                    }
                    return e
                }
                ,
                oo.max = function(n, t) {
                    var e, r, u = -1, i = n.length;
                    if (1 === arguments.length) {
                        for (; ++u < i; )
                            if (null != (r = n[u]) && r >= r) {
                                e = r;
                                break
                            }
                        for (; ++u < i; )
                            null != (r = n[u]) && r > e && (e = r)
                    } else {
                        for (; ++u < i; )
                            if (null != (r = t.call(n, n[u], u)) && r >= r) {
                                e = r;
                                break
                            }
                        for (; ++u < i; )
                            null != (r = t.call(n, n[u], u)) && r > e && (e = r)
                    }
                    return e
                }
                ,
                oo.extent = function(n, t) {
                    var e, r, u, i = -1, o = n.length;
                    if (1 === arguments.length) {
                        for (; ++i < o; )
                            if (null != (r = n[i]) && r >= r) {
                                e = u = r;
                                break
                            }
                        for (; ++i < o; )
                            null != (r = n[i]) && (e > r && (e = r),
                            r > u && (u = r))
                    } else {
                        for (; ++i < o; )
                            if (null != (r = t.call(n, n[i], i)) && r >= r) {
                                e = u = r;
                                break
                            }
                        for (; ++i < o; )
                            null != (r = t.call(n, n[i], i)) && (e > r && (e = r),
                            r > u && (u = r))
                    }
                    return [e, u]
                }
                ,
                oo.sum = function(n, t) {
                    var e, r = 0, u = n.length, i = -1;
                    if (1 === arguments.length)
                        for (; ++i < u; )
                            l(e = +n[i]) && (r += e);
                    else
                        for (; ++i < u; )
                            l(e = +t.call(n, n[i], i)) && (r += e);
                    return r
                }
                ,
                oo.mean = function(n, t) {
                    var e, r = 0, u = n.length, i = -1, o = u;
                    if (1 === arguments.length)
                        for (; ++i < u; )
                            l(e = c(n[i])) ? r += e : --o;
                    else
                        for (; ++i < u; )
                            l(e = c(t.call(n, n[i], i))) ? r += e : --o;
                    return o ? r / o : void 0
                }
                ,
                oo.quantile = function(n, t) {
                    var e = (n.length - 1) * t + 1
                        , r = Math.floor(e)
                        , u = +n[r - 1]
                        , i = e - r;
                    return i ? u + i * (n[r] - u) : u
                }
                ,
                oo.median = function(n, t) {
                    var e, r = [], u = n.length, i = -1;
                    if (1 === arguments.length)
                        for (; ++i < u; )
                            l(e = c(n[i])) && r.push(e);
                    else
                        for (; ++i < u; )
                            l(e = c(t.call(n, n[i], i))) && r.push(e);
                    return r.length ? oo.quantile(r.sort(a), .5) : void 0
                }
                ,
                oo.variance = function(n, t) {
                    var e, r, u = n.length, i = 0, o = 0, a = -1, s = 0;
                    if (1 === arguments.length)
                        for (; ++a < u; )
                            l(e = c(n[a])) && (r = e - i,
                                i += r / ++s,
                                o += r * (e - i));
                    else
                        for (; ++a < u; )
                            l(e = c(t.call(n, n[a], a))) && (r = e - i,
                                i += r / ++s,
                                o += r * (e - i));
                    return s > 1 ? o / (s - 1) : void 0
                }
                ,
                oo.deviation = function() {
                    var n = oo.variance.apply(this, arguments);
                    return n ? Math.sqrt(n) : n
                }
            ;
            var yo = s(a);
            oo.bisectLeft = yo.left,
                oo.bisect = oo.bisectRight = yo.right,
                oo.bisector = function(n) {
                    return s(1 === n.length ? function(t, e) {
                        return a(n(t), e)
                    }
                        : n)
                }
                ,
                oo.shuffle = function(n, t, e) {
                    (i = arguments.length) < 3 && (e = n.length,
                    2 > i && (t = 0));
                    for (var r, u, i = e - t; i; )
                        u = Math.random() * i-- | 0,
                            r = n[i + t],
                            n[i + t] = n[u + t],
                            n[u + t] = r;
                    return n
                }
                ,
                oo.permute = function(n, t) {
                    for (var e = t.length, r = new Array(e); e--; )
                        r[e] = n[t[e]];
                    return r
                }
                ,
                oo.pairs = function(n) {
                    for (var t, e = 0, r = n.length - 1, u = n[0], i = new Array(0 > r ? 0 : r); r > e; )
                        i[e] = [t = u, u = n[++e]];
                    return i
                }
                ,
                oo.zip = function() {
                    if (!(r = arguments.length))
                        return [];
                    for (var n = -1, t = oo.min(arguments, f), e = new Array(t); ++n < t; )
                        for (var r, u = -1, i = e[n] = new Array(r); ++u < r; )
                            i[u] = arguments[u][n];
                    return e
                }
                ,
                oo.transpose = function(n) {
                    return oo.zip.apply(oo, n)
                }
                ,
                oo.keys = function(n) {
                    var t = [];
                    for (var e in n)
                        t.push(e);
                    return t
                }
                ,
                oo.values = function(n) {
                    var t = [];
                    for (var e in n)
                        t.push(n[e]);
                    return t
                }
                ,
                oo.entries = function(n) {
                    var t = [];
                    for (var e in n)
                        t.push({
                            key: e,
                            value: n[e]
                        });
                    return t
                }
                ,
                oo.merge = function(n) {
                    for (var t, e, r, u = n.length, i = -1, o = 0; ++i < u; )
                        o += n[i].length;
                    for (e = new Array(o); --u >= 0; )
                        for (r = n[u],
                                 t = r.length; --t >= 0; )
                            e[--o] = r[t];
                    return e
                }
            ;
            var Mo = Math.abs;
            oo.range = function(n, t, e) {
                if (arguments.length < 3 && (e = 1,
                    arguments.length < 2 && (t = n,
                        n = 0)),
                    (t - n) / e === 1 / 0)
                    throw new Error("infinite range");
                var r, u = [], i = h(Mo(e)), o = -1;
                if (n *= i,
                        t *= i,
                        e *= i,
                    0 > e)
                    for (; (r = n + e * ++o) > t; )
                        u.push(r / i);
                else
                    for (; (r = n + e * ++o) < t; )
                        u.push(r / i);
                return u
            }
                ,
                oo.map = function(n, t) {
                    var e = new p;
                    if (n instanceof p)
                        n.forEach(function(n, t) {
                            e.set(n, t)
                        });
                    else if (Array.isArray(n)) {
                        var r, u = -1, i = n.length;
                        if (1 === arguments.length)
                            for (; ++u < i; )
                                e.set(u, n[u]);
                        else
                            for (; ++u < i; )
                                e.set(t.call(n, r = n[u], u), r)
                    } else
                        for (var o in n)
                            e.set(o, n[o]);
                    return e
                }
            ;
            var xo = "__proto__"
                , bo = "\x00";
            g(p, {
                has: m,
                get: function(n) {
                    return this._[v(n)]
                },
                set: function(n, t) {
                    return this._[v(n)] = t
                },
                remove: y,
                keys: M,
                values: function() {
                    var n = [];
                    for (var t in this._)
                        n.push(this._[t]);
                    return n
                },
                entries: function() {
                    var n = [];
                    for (var t in this._)
                        n.push({
                            key: d(t),
                            value: this._[t]
                        });
                    return n
                },
                size: x,
                empty: b,
                forEach: function(n) {
                    for (var t in this._)
                        n.call(this, d(t), this._[t])
                }
            }),
                oo.nest = function() {
                    function n(t, o, a) {
                        if (a >= i.length)
                            return r ? r.call(u, o) : e ? o.sort(e) : o;
                        for (var c, l, s, f, h = -1, g = o.length, v = i[a++], d = new p; ++h < g; )
                            (f = d.get(c = v(l = o[h]))) ? f.push(l) : d.set(c, [l]);
                        return t ? (l = t(),
                                s = function(e, r) {
                                    l.set(e, n(t, r, a))
                                }
                        ) : (l = {},
                                s = function(e, r) {
                                    l[e] = n(t, r, a)
                                }
                        ),
                            d.forEach(s),
                            l
                    }
                    function t(n, e) {
                        if (e >= i.length)
                            return n;
                        var r = []
                            , u = o[e++];
                        return n.forEach(function(n, u) {
                            r.push({
                                key: n,
                                values: t(u, e)
                            })
                        }),
                            u ? r.sort(function(n, t) {
                                return u(n.key, t.key)
                            }) : r
                    }
                    var e, r, u = {}, i = [], o = [];
                    return u.map = function(t, e) {
                        return n(e, t, 0)
                    }
                        ,
                        u.entries = function(e) {
                            return t(n(oo.map, e, 0), 0)
                        }
                        ,
                        u.key = function(n) {
                            return i.push(n),
                                u
                        }
                        ,
                        u.sortKeys = function(n) {
                            return o[i.length - 1] = n,
                                u
                        }
                        ,
                        u.sortValues = function(n) {
                            return e = n,
                                u
                        }
                        ,
                        u.rollup = function(n) {
                            return r = n,
                                u
                        }
                        ,
                        u
                }
                ,
                oo.set = function(n) {
                    var t = new w;
                    if (n)
                        for (var e = 0, r = n.length; r > e; ++e)
                            t.add(n[e]);
                    return t
                }
                ,
                g(w, {
                    has: m,
                    add: function(n) {
                        return this._[v(n += "")] = !0,
                            n
                    },
                    remove: y,
                    values: M,
                    size: x,
                    empty: b,
                    forEach: function(n) {
                        for (var t in this._)
                            n.call(this, d(t))
                    }
                }),
                oo.behavior = {},
                oo.rebind = function(n, t) {
                    for (var e, r = 1, u = arguments.length; ++r < u; )
                        n[e = arguments[r]] = S(n, t, t[e]);
                    return n
                }
            ;
            var wo = ["webkit", "ms", "moz", "Moz", "o", "O"];
            oo.dispatch = function() {
                for (var n = new E, t = -1, e = arguments.length; ++t < e; )
                    n[arguments[t]] = A(n);
                return n
            }
                ,
                E.prototype.on = function(n, t) {
                    var e = n.indexOf(".")
                        , r = "";
                    if (e >= 0 && (r = n.slice(e + 1),
                            n = n.slice(0, e)),
                            n)
                        return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t);
                    if (2 === arguments.length) {
                        if (null == t)
                            for (n in this)
                                this.hasOwnProperty(n) && this[n].on(r, null );
                        return this
                    }
                }
                ,
                oo.event = null ,
                oo.requote = function(n) {
                    return n.replace(_o, "\\$&")
                }
            ;
            var _o = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g
                , So = {}.__proto__ ? function(n, t) {
                n.__proto__ = t
            }
                : function(n, t) {
                for (var e in t)
                    n[e] = t[e]
            }
                , ko = function(n, t) {
                return t.querySelector(n)
            }
                , No = function(n, t) {
                return t.querySelectorAll(n)
            }
                , Eo = function(n, t) {
                var e = n.matches || n[k(n, "matchesSelector")];
                return (Eo = function(n, t) {
                        return e.call(n, t)
                    }
                )(n, t)
            };
            "function" == typeof Sizzle && (ko = function(n, t) {
                return Sizzle(n, t)[0] || null
            }
                ,
                No = Sizzle,
                Eo = Sizzle.matchesSelector),
                oo.selection = function() {
                    return oo.select(lo.documentElement)
                }
            ;
            var Ao = oo.selection.prototype = [];
            Ao.select = function(n) {
                var t, e, r, u, i = [];
                n = T(n);
                for (var o = -1, a = this.length; ++o < a; ) {
                    i.push(t = []),
                        t.parentNode = (r = this[o]).parentNode;
                    for (var c = -1, l = r.length; ++c < l; )
                        (u = r[c]) ? (t.push(e = n.call(u, u.__data__, c, o)),
                        e && "__data__"in u && (e.__data__ = u.__data__)) : t.push(null )
                }
                return L(i)
            }
                ,
                Ao.selectAll = function(n) {
                    var t, e, r = [];
                    n = R(n);
                    for (var u = -1, i = this.length; ++u < i; )
                        for (var o = this[u], a = -1, c = o.length; ++a < c; )
                            (e = o[a]) && (r.push(t = co(n.call(e, e.__data__, a, u))),
                                t.parentNode = e);
                    return L(r)
                }
            ;
            var Co = {
                svg: "http://www.w3.org/2000/svg",
                xhtml: "http://www.w3.org/1999/xhtml",
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace",
                xmlns: "http://www.w3.org/2000/xmlns/"
            };
            oo.ns = {
                prefix: Co,
                qualify: function(n) {
                    var t = n.indexOf(":")
                        , e = n;
                    return t >= 0 && (e = n.slice(0, t),
                        n = n.slice(t + 1)),
                        Co.hasOwnProperty(e) ? {
                            space: Co[e],
                            local: n
                        } : n
                }
            },
                Ao.attr = function(n, t) {
                    if (arguments.length < 2) {
                        if ("string" == typeof n) {
                            var e = this.node();
                            return n = oo.ns.qualify(n),
                                n.local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n)
                        }
                        for (t in n)
                            this.each(D(t, n[t]));
                        return this
                    }
                    return this.each(D(n, t))
                }
                ,
                Ao.classed = function(n, t) {
                    if (arguments.length < 2) {
                        if ("string" == typeof n) {
                            var e = this.node()
                                , r = (n = U(n)).length
                                , u = -1;
                            if (t = e.classList) {
                                for (; ++u < r; )
                                    if (!t.contains(n[u]))
                                        return !1
                            } else
                                for (t = e.getAttribute("class"); ++u < r; )
                                    if (!j(n[u]).test(t))
                                        return !1;
                            return !0
                        }
                        for (t in n)
                            this.each(F(t, n[t]));
                        return this
                    }
                    return this.each(F(n, t))
                }
                ,
                Ao.style = function(n, t, e) {
                    var r = arguments.length;
                    if (3 > r) {
                        if ("string" != typeof n) {
                            2 > r && (t = "");
                            for (e in n)
                                this.each(O(e, n[e], t));
                            return this
                        }
                        if (2 > r) {
                            var u = this.node();
                            return o(u).getComputedStyle(u, null ).getPropertyValue(n)
                        }
                        e = ""
                    }
                    return this.each(O(n, t, e))
                }
                ,
                Ao.property = function(n, t) {
                    if (arguments.length < 2) {
                        if ("string" == typeof n)
                            return this.node()[n];
                        for (t in n)
                            this.each(I(t, n[t]));
                        return this
                    }
                    return this.each(I(n, t))
                }
                ,
                Ao.text = function(n) {
                    return arguments.length ? this.each("function" == typeof n ? function() {
                            var t = n.apply(this, arguments);
                            this.textContent = null == t ? "" : t
                        }
                            : null == n ? function() {
                            this.textContent = ""
                        }
                            : function() {
                            this.textContent = n
                        }
                    ) : this.node().textContent
                }
                ,
                Ao.html = function(n) {
                    return arguments.length ? this.each("function" == typeof n ? function() {
                            var t = n.apply(this, arguments);
                            this.innerHTML = null == t ? "" : t
                        }
                            : null == n ? function() {
                            this.innerHTML = ""
                        }
                            : function() {
                            this.innerHTML = n
                        }
                    ) : this.node().innerHTML
                }
                ,
                Ao.append = function(n) {
                    return n = Y(n),
                        this.select(function() {
                            return this.appendChild(n.apply(this, arguments))
                        })
                }
                ,
                Ao.insert = function(n, t) {
                    return n = Y(n),
                        t = T(t),
                        this.select(function() {
                            return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments) || null )
                        })
                }
                ,
                Ao.remove = function() {
                    return this.each(Z)
                }
                ,
                Ao.data = function(n, t) {
                    function e(n, e) {
                        var r, u, i, o = n.length, s = e.length, f = Math.min(o, s), h = new Array(s), g = new Array(s), v = new Array(o);
                        if (t) {
                            var d, m = new p, y = new Array(o);
                            for (r = -1; ++r < o; )
                                m.has(d = t.call(u = n[r], u.__data__, r)) ? v[r] = u : m.set(d, u),
                                    y[r] = d;
                            for (r = -1; ++r < s; )
                                (u = m.get(d = t.call(e, i = e[r], r))) ? u !== !0 && (h[r] = u,
                                    u.__data__ = i) : g[r] = V(i),
                                    m.set(d, !0);
                            for (r = -1; ++r < o; )
                                m.get(y[r]) !== !0 && (v[r] = n[r])
                        } else {
                            for (r = -1; ++r < f; )
                                u = n[r],
                                    i = e[r],
                                    u ? (u.__data__ = i,
                                        h[r] = u) : g[r] = V(i);
                            for (; s > r; ++r)
                                g[r] = V(e[r]);
                            for (; o > r; ++r)
                                v[r] = n[r]
                        }
                        g.update = h,
                            g.parentNode = h.parentNode = v.parentNode = n.parentNode,
                            a.push(g),
                            c.push(h),
                            l.push(v)
                    }
                    var r, u, i = -1, o = this.length;
                    if (!arguments.length) {
                        for (n = new Array(o = (r = this[0]).length); ++i < o; )
                            (u = r[i]) && (n[i] = u.__data__);
                        return n
                    }
                    var a = J([])
                        , c = L([])
                        , l = L([]);
                    if ("function" == typeof n)
                        for (; ++i < o; )
                            e(r = this[i], n.call(r, r.parentNode.__data__, i));
                    else
                        for (; ++i < o; )
                            e(r = this[i], n);
                    return c.enter = function() {
                        return a
                    }
                        ,
                        c.exit = function() {
                            return l
                        }
                        ,
                        c
                }
                ,
                Ao.datum = function(n) {
                    return arguments.length ? this.property("__data__", n) : this.property("__data__")
                }
                ,
                Ao.filter = function(n) {
                    var t, e, r, u = [];
                    "function" != typeof n && (n = X(n));
                    for (var i = 0, o = this.length; o > i; i++) {
                        u.push(t = []),
                            t.parentNode = (e = this[i]).parentNode;
                        for (var a = 0, c = e.length; c > a; a++)
                            (r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r)
                    }
                    return L(u)
                }
                ,
                Ao.order = function() {
                    for (var n = -1, t = this.length; ++n < t; )
                        for (var e, r = this[n], u = r.length - 1, i = r[u]; --u >= 0; )
                            (e = r[u]) && (i && i !== e.nextSibling && i.parentNode.insertBefore(e, i),
                                i = e);
                    return this
                }
                ,
                Ao.sort = function(n) {
                    n = $.apply(this, arguments);
                    for (var t = -1, e = this.length; ++t < e; )
                        this[t].sort(n);
                    return this.order()
                }
                ,
                Ao.each = function(n) {
                    return B(this, function(t, e, r) {
                        n.call(t, t.__data__, e, r)
                    })
                }
                ,
                Ao.call = function(n) {
                    var t = co(arguments);
                    return n.apply(t[0] = this, t),
                        this
                }
                ,
                Ao.empty = function() {
                    return !this.node()
                }
                ,
                Ao.node = function() {
                    for (var n = 0, t = this.length; t > n; n++)
                        for (var e = this[n], r = 0, u = e.length; u > r; r++) {
                            var i = e[r];
                            if (i)
                                return i
                        }
                    return null
                }
                ,
                Ao.size = function() {
                    var n = 0;
                    return B(this, function() {
                        ++n
                    }),
                        n
                }
            ;
            var zo = [];
            oo.selection.enter = J,
                oo.selection.enter.prototype = zo,
                zo.append = Ao.append,
                zo.empty = Ao.empty,
                zo.node = Ao.node,
                zo.call = Ao.call,
                zo.size = Ao.size,
                zo.select = function(n) {
                    for (var t, e, r, u, i, o = [], a = -1, c = this.length; ++a < c; ) {
                        r = (u = this[a]).update,
                            o.push(t = []),
                            t.parentNode = u.parentNode;
                        for (var l = -1, s = u.length; ++l < s; )
                            (i = u[l]) ? (t.push(r[l] = e = n.call(u.parentNode, i.__data__, l, a)),
                                e.__data__ = i.__data__) : t.push(null )
                    }
                    return L(o)
                }
                ,
                zo.insert = function(n, t) {
                    return arguments.length < 2 && (t = W(this)),
                        Ao.insert.call(this, n, t)
                }
                ,
                oo.select = function(n) {
                    var t;
                    return "string" == typeof n ? (t = [ko(n, lo)],
                        t.parentNode = lo.documentElement) : (t = [n],
                        t.parentNode = i(n)),
                        L([t])
                }
                ,
                oo.selectAll = function(n) {
                    var t;
                    return "string" == typeof n ? (t = co(No(n, lo)),
                        t.parentNode = lo.documentElement) : (t = n,
                        t.parentNode = null ),
                        L([t])
                }
                ,
                Ao.on = function(n, t, e) {
                    var r = arguments.length;
                    if (3 > r) {
                        if ("string" != typeof n) {
                            2 > r && (t = !1);
                            for (e in n)
                                this.each(K(e, n[e], t));
                            return this
                        }
                        if (2 > r)
                            return (r = this.node()["__on" + n]) && r._;
                        e = !1
                    }
                    return this.each(K(n, t, e))
                }
            ;
            var qo = oo.map({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            });
            lo && qo.forEach(function(n) {
                "on" + n in lo && qo.remove(n)
            });
            var Lo, To = 0;
            oo.mouse = function(n) {
                return tn(n, z())
            }
            ;
            var Ro = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
            oo.touch = function(n, t, e) {
                if (arguments.length < 3 && (e = t,
                        t = z().changedTouches),
                        t)
                    for (var r, u = 0, i = t.length; i > u; ++u)
                        if ((r = t[u]).identifier === e)
                            return tn(n, r)
            }
                ,
                oo.behavior.drag = function() {
                    function n() {
                        this.on("mousedown.drag", u).on("touchstart.drag", i)
                    }
                    function t(n, t, u, i, o) {
                        return function() {
                            function a() {
                                var n, e, r = t(h, v);
                                r && (n = r[0] - M[0],
                                    e = r[1] - M[1],
                                    p |= n | e,
                                    M = r,
                                    g({
                                        type: "drag",
                                        x: r[0] + l[0],
                                        y: r[1] + l[1],
                                        dx: n,
                                        dy: e
                                    }))
                            }
                            function c() {
                                t(h, v) && (m.on(i + d, null ).on(o + d, null ),
                                    y(p && oo.event.target === f),
                                    g({
                                        type: "dragend"
                                    }))
                            }
                            var l, s = this, f = oo.event.target, h = s.parentNode, g = e.of(s, arguments), p = 0, v = n(), d = ".drag" + (null == v ? "" : "-" + v), m = oo.select(u(f)).on(i + d, a).on(o + d, c), y = nn(f), M = t(h, v);
                            r ? (l = r.apply(s, arguments),
                                l = [l.x - M[0], l.y - M[1]]) : l = [0, 0],
                                g({
                                    type: "dragstart"
                                })
                        }
                    }
                    var e = q(n, "drag", "dragstart", "dragend")
                        , r = null
                        , u = t(N, oo.mouse, o, "mousemove", "mouseup")
                        , i = t(en, oo.touch, _, "touchmove", "touchend");
                    return n.origin = function(t) {
                        return arguments.length ? (r = t,
                            n) : r
                    }
                        ,
                        oo.rebind(n, e, "on")
                }
                ,
                oo.touches = function(n, t) {
                    return arguments.length < 2 && (t = z().touches),
                        t ? co(t).map(function(t) {
                            var e = tn(n, t);
                            return e.identifier = t.identifier,
                                e
                        }) : []
                }
            ;
            var Do = 1e-6
                , Po = Do * Do
                , jo = Math.PI
                , Uo = 2 * jo
                , Fo = Uo - Do
                , Ho = jo / 2
                , Oo = jo / 180
                , Io = 180 / jo
                , Yo = Math.SQRT2
                , Zo = 2
                , Vo = 4;
            oo.interpolateZoom = function(n, t) {
                function e(n) {
                    var t = n * y;
                    if (m) {
                        var e = ln(v)
                            , o = i / (Zo * h) * (e * sn(Yo * t + v) - cn(v));
                        return [r + o * l, u + o * s, i * e / ln(Yo * t + v)]
                    }
                    return [r + n * l, u + n * s, i * Math.exp(Yo * t)]
                }
                var r = n[0]
                    , u = n[1]
                    , i = n[2]
                    , o = t[0]
                    , a = t[1]
                    , c = t[2]
                    , l = o - r
                    , s = a - u
                    , f = l * l + s * s
                    , h = Math.sqrt(f)
                    , g = (c * c - i * i + Vo * f) / (2 * i * Zo * h)
                    , p = (c * c - i * i - Vo * f) / (2 * c * Zo * h)
                    , v = Math.log(Math.sqrt(g * g + 1) - g)
                    , d = Math.log(Math.sqrt(p * p + 1) - p)
                    , m = d - v
                    , y = (m || Math.log(c / i)) / Yo;
                return e.duration = 1e3 * y,
                    e
            }
                ,
                oo.behavior.zoom = function() {
                    function n(n) {
                        n.on(z, f).on($o + ".zoom", g).on("dblclick.zoom", p).on(R, h)
                    }
                    function t(n) {
                        return [(n[0] - S.x) / S.k, (n[1] - S.y) / S.k]
                    }
                    function e(n) {
                        return [n[0] * S.k + S.x, n[1] * S.k + S.y]
                    }
                    function r(n) {
                        S.k = Math.max(N[0], Math.min(N[1], n))
                    }
                    function u(n, t) {
                        t = e(t),
                            S.x += n[0] - t[0],
                            S.y += n[1] - t[1]
                    }
                    function i(t, e, i, o) {
                        t.__chart__ = {
                            x: S.x,
                            y: S.y,
                            k: S.k
                        },
                            r(Math.pow(2, o)),
                            u(d = e, i),
                            t = oo.select(t),
                        E > 0 && (t = t.transition().duration(E)),
                            t.call(n.event)
                    }
                    function a() {
                        b && b.domain(x.range().map(function(n) {
                            return (n - S.x) / S.k
                        }).map(x.invert)),
                        _ && _.domain(w.range().map(function(n) {
                            return (n - S.y) / S.k
                        }).map(w.invert))
                    }
                    function c(n) {
                        A++ || n({
                            type: "zoomstart"
                        })
                    }
                    function l(n) {
                        a(),
                            n({
                                type: "zoom",
                                scale: S.k,
                                translate: [S.x, S.y]
                            })
                    }
                    function s(n) {
                        --A || (n({
                            type: "zoomend"
                        }),
                            d = null )
                    }
                    function f() {
                        function n() {
                            f = 1,
                                u(oo.mouse(r), g),
                                l(a)
                        }
                        function e() {
                            h.on(L, null ).on(T, null ),
                                p(f && oo.event.target === i),
                                s(a)
                        }
                        var r = this
                            , i = oo.event.target
                            , a = D.of(r, arguments)
                            , f = 0
                            , h = oo.select(o(r)).on(L, n).on(T, e)
                            , g = t(oo.mouse(r))
                            , p = nn(r);
                        Oc.call(r),
                            c(a)
                    }
                    function h() {
                        function n() {
                            var n = oo.touches(p);
                            return g = S.k,
                                n.forEach(function(n) {
                                    n.identifier in d && (d[n.identifier] = t(n))
                                }),
                                n
                        }
                        function e() {
                            var t = oo.event.target;
                            oo.select(t).on(x, o).on(b, a),
                                w.push(t);
                            for (var e = oo.event.changedTouches, r = 0, u = e.length; u > r; ++r)
                                d[e[r].identifier] = null ;
                            var c = n()
                                , l = Date.now();
                            if (1 === c.length) {
                                if (500 > l - M) {
                                    var s = c[0];
                                    i(p, s, d[s.identifier], Math.floor(Math.log(S.k) / Math.LN2) + 1),
                                        C()
                                }
                                M = l
                            } else if (c.length > 1) {
                                var s = c[0]
                                    , f = c[1]
                                    , h = s[0] - f[0]
                                    , g = s[1] - f[1];
                                m = h * h + g * g
                            }
                        }
                        function o() {
                            var n, t, e, i, o = oo.touches(p);
                            Oc.call(p);
                            for (var a = 0, c = o.length; c > a; ++a,
                                i = null )
                                if (e = o[a],
                                        i = d[e.identifier]) {
                                    if (t)
                                        break;
                                    n = e,
                                        t = i
                                }
                            if (i) {
                                var s = (s = e[0] - n[0]) * s + (s = e[1] - n[1]) * s
                                    , f = m && Math.sqrt(s / m);
                                n = [(n[0] + e[0]) / 2, (n[1] + e[1]) / 2],
                                    t = [(t[0] + i[0]) / 2, (t[1] + i[1]) / 2],
                                    r(f * g)
                            }
                            M = null ,
                                u(n, t),
                                l(v)
                        }
                        function a() {
                            if (oo.event.touches.length) {
                                for (var t = oo.event.changedTouches, e = 0, r = t.length; r > e; ++e)
                                    delete d[t[e].identifier];
                                for (var u in d)
                                    return void n()
                            }
                            oo.selectAll(w).on(y, null ),
                                _.on(z, f).on(R, h),
                                k(),
                                s(v)
                        }
                        var g, p = this, v = D.of(p, arguments), d = {}, m = 0, y = ".zoom-" + oo.event.changedTouches[0].identifier, x = "touchmove" + y, b = "touchend" + y, w = [], _ = oo.select(p), k = nn(p);
                        e(),
                            c(v),
                            _.on(z, null ).on(R, e)
                    }
                    function g() {
                        var n = D.of(this, arguments);
                        y ? clearTimeout(y) : (Oc.call(this),
                            v = t(d = m || oo.mouse(this)),
                            c(n)),
                            y = setTimeout(function() {
                                y = null ,
                                    s(n)
                            }, 50),
                            C(),
                            r(Math.pow(2, .002 * Xo()) * S.k),
                            u(d, v),
                            l(n)
                    }
                    function p() {
                        var n = oo.mouse(this)
                            , e = Math.log(S.k) / Math.LN2;
                        i(this, n, t(n), oo.event.shiftKey ? Math.ceil(e) - 1 : Math.floor(e) + 1)
                    }
                    var v, d, m, y, M, x, b, w, _, S = {
                        x: 0,
                        y: 0,
                        k: 1
                    }, k = [960, 500], N = Bo, E = 250, A = 0, z = "mousedown.zoom", L = "mousemove.zoom", T = "mouseup.zoom", R = "touchstart.zoom", D = q(n, "zoomstart", "zoom", "zoomend");
                    return $o || ($o = "onwheel"in lo ? (Xo = function() {
                        return -oo.event.deltaY * (oo.event.deltaMode ? 120 : 1)
                    }
                        ,
                        "wheel") : "onmousewheel"in lo ? (Xo = function() {
                        return oo.event.wheelDelta
                    }
                        ,
                        "mousewheel") : (Xo = function() {
                        return -oo.event.detail
                    }
                        ,
                        "MozMousePixelScroll")),
                        n.event = function(n) {
                            n.each(function() {
                                var n = D.of(this, arguments)
                                    , t = S;
                                Fc ? oo.select(this).transition().each("start.zoom", function() {
                                    S = this.__chart__ || {
                                            x: 0,
                                            y: 0,
                                            k: 1
                                        },
                                        c(n)
                                }).tween("zoom:zoom", function() {
                                    var e = k[0]
                                        , r = k[1]
                                        , u = d ? d[0] : e / 2
                                        , i = d ? d[1] : r / 2
                                        , o = oo.interpolateZoom([(u - S.x) / S.k, (i - S.y) / S.k, e / S.k], [(u - t.x) / t.k, (i - t.y) / t.k, e / t.k]);
                                    return function(t) {
                                        var r = o(t)
                                            , a = e / r[2];
                                        this.__chart__ = S = {
                                            x: u - r[0] * a,
                                            y: i - r[1] * a,
                                            k: a
                                        },
                                            l(n)
                                    }
                                }).each("interrupt.zoom", function() {
                                    s(n)
                                }).each("end.zoom", function() {
                                    s(n)
                                }) : (this.__chart__ = S,
                                    c(n),
                                    l(n),
                                    s(n))
                            })
                        }
                        ,
                        n.translate = function(t) {
                            return arguments.length ? (S = {
                                x: +t[0],
                                y: +t[1],
                                k: S.k
                            },
                                a(),
                                n) : [S.x, S.y]
                        }
                        ,
                        n.scale = function(t) {
                            return arguments.length ? (S = {
                                x: S.x,
                                y: S.y,
                                k: +t
                            },
                                a(),
                                n) : S.k
                        }
                        ,
                        n.scaleExtent = function(t) {
                            return arguments.length ? (N = null == t ? Bo : [+t[0], +t[1]],
                                n) : N
                        }
                        ,
                        n.center = function(t) {
                            return arguments.length ? (m = t && [+t[0], +t[1]],
                                n) : m
                        }
                        ,
                        n.size = function(t) {
                            return arguments.length ? (k = t && [+t[0], +t[1]],
                                n) : k
                        }
                        ,
                        n.duration = function(t) {
                            return arguments.length ? (E = +t,
                                n) : E
                        }
                        ,
                        n.x = function(t) {
                            return arguments.length ? (b = t,
                                x = t.copy(),
                                S = {
                                    x: 0,
                                    y: 0,
                                    k: 1
                                },
                                n) : b
                        }
                        ,
                        n.y = function(t) {
                            return arguments.length ? (_ = t,
                                w = t.copy(),
                                S = {
                                    x: 0,
                                    y: 0,
                                    k: 1
                                },
                                n) : _
                        }
                        ,
                        oo.rebind(n, D, "on")
                }
            ;
            var Xo, $o, Bo = [0, 1 / 0];
            oo.color = hn,
                hn.prototype.toString = function() {
                    return this.rgb() + ""
                }
                ,
                oo.hsl = gn;
            var Jo = gn.prototype = new hn;
            Jo.brighter = function(n) {
                return n = Math.pow(.7, arguments.length ? n : 1),
                    new gn(this.h,this.s,this.l / n)
            }
                ,
                Jo.darker = function(n) {
                    return n = Math.pow(.7, arguments.length ? n : 1),
                        new gn(this.h,this.s,n * this.l)
                }
                ,
                Jo.rgb = function() {
                    return pn(this.h, this.s, this.l)
                }
                ,
                oo.hcl = vn;
            var Wo = vn.prototype = new hn;
            Wo.brighter = function(n) {
                return new vn(this.h,this.c,Math.min(100, this.l + Ko * (arguments.length ? n : 1)))
            }
                ,
                Wo.darker = function(n) {
                    return new vn(this.h,this.c,Math.max(0, this.l - Ko * (arguments.length ? n : 1)))
                }
                ,
                Wo.rgb = function() {
                    return dn(this.h, this.c, this.l).rgb()
                }
                ,
                oo.lab = mn;
            var Ko = 18
                , Go = .95047
                , Qo = 1
                , na = 1.08883
                , ta = mn.prototype = new hn;
            ta.brighter = function(n) {
                return new mn(Math.min(100, this.l + Ko * (arguments.length ? n : 1)),this.a,this.b)
            }
                ,
                ta.darker = function(n) {
                    return new mn(Math.max(0, this.l - Ko * (arguments.length ? n : 1)),this.a,this.b)
                }
                ,
                ta.rgb = function() {
                    return yn(this.l, this.a, this.b)
                }
                ,
                oo.rgb = _n;
            var ea = _n.prototype = new hn;
            ea.brighter = function(n) {
                n = Math.pow(.7, arguments.length ? n : 1);
                var t = this.r
                    , e = this.g
                    , r = this.b
                    , u = 30;
                return t || e || r ? (t && u > t && (t = u),
                e && u > e && (e = u),
                r && u > r && (r = u),
                    new _n(Math.min(255, t / n),Math.min(255, e / n),Math.min(255, r / n))) : new _n(u,u,u)
            }
                ,
                ea.darker = function(n) {
                    return n = Math.pow(.7, arguments.length ? n : 1),
                        new _n(n * this.r,n * this.g,n * this.b)
                }
                ,
                ea.hsl = function() {
                    return An(this.r, this.g, this.b)
                }
                ,
                ea.toString = function() {
                    return "#" + Nn(this.r) + Nn(this.g) + Nn(this.b)
                }
            ;
            var ra = oo.map({
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            });
            ra.forEach(function(n, t) {
                ra.set(n, Sn(t))
            }),
                oo.functor = Ln,
                oo.xhr = Tn(_),
                oo.dsv = function(n, t) {
                    function e(n, e, i) {
                        arguments.length < 3 && (i = e,
                            e = null );
                        var o = Rn(n, t, null == e ? r : u(e), i);
                        return o.row = function(n) {
                            return arguments.length ? o.response(null == (e = n) ? r : u(n)) : e
                        }
                            ,
                            o
                    }
                    function r(n) {
                        return e.parse(n.responseText)
                    }
                    function u(n) {
                        return function(t) {
                            return e.parse(t.responseText, n)
                        }
                    }
                    function i(t) {
                        return t.map(o).join(n)
                    }
                    function o(n) {
                        return a.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n
                    }
                    var a = new RegExp('["' + n + "\n]")
                        , c = n.charCodeAt(0);
                    return e.parse = function(n, t) {
                        var r;
                        return e.parseRows(n, function(n, e) {
                            if (r)
                                return r(n, e - 1);
                            var u = new Function("d","return {" + n.map(function(n, t) {
                                    return JSON.stringify(n) + ": d[" + t + "]"
                                }).join(",") + "}");
                            r = t ? function(n, e) {
                                return t(u(n), e)
                            }
                                : u
                        })
                    }
                        ,
                        e.parseRows = function(n, t) {
                            function e() {
                                if (s >= l)
                                    return o;
                                if (u)
                                    return u = !1,
                                        i;
                                var t = s;
                                if (34 === n.charCodeAt(t)) {
                                    for (var e = t; e++ < l; )
                                        if (34 === n.charCodeAt(e)) {
                                            if (34 !== n.charCodeAt(e + 1))
                                                break;
                                            ++e
                                        }
                                    s = e + 2;
                                    var r = n.charCodeAt(e + 1);
                                    return 13 === r ? (u = !0,
                                    10 === n.charCodeAt(e + 2) && ++s) : 10 === r && (u = !0),
                                        n.slice(t + 1, e).replace(/""/g, '"')
                                }
                                for (; l > s; ) {
                                    var r = n.charCodeAt(s++)
                                        , a = 1;
                                    if (10 === r)
                                        u = !0;
                                    else if (13 === r)
                                        u = !0,
                                        10 === n.charCodeAt(s) && (++s,
                                            ++a);
                                    else if (r !== c)
                                        continue;
                                    return n.slice(t, s - a)
                                }
                                return n.slice(t)
                            }
                            for (var r, u, i = {}, o = {}, a = [], l = n.length, s = 0, f = 0; (r = e()) !== o; ) {
                                for (var h = []; r !== i && r !== o; )
                                    h.push(r),
                                        r = e();
                                t && null == (h = t(h, f++)) || a.push(h)
                            }
                            return a
                        }
                        ,
                        e.format = function(t) {
                            if (Array.isArray(t[0]))
                                return e.formatRows(t);
                            var r = new w
                                , u = [];
                            return t.forEach(function(n) {
                                for (var t in n)
                                    r.has(t) || u.push(r.add(t))
                            }),
                                [u.map(o).join(n)].concat(t.map(function(t) {
                                    return u.map(function(n) {
                                        return o(t[n])
                                    }).join(n)
                                })).join("\n")
                        }
                        ,
                        e.formatRows = function(n) {
                            return n.map(i).join("\n")
                        }
                        ,
                        e
                }
                ,
                oo.csv = oo.dsv(",", "text/csv"),
                oo.tsv = oo.dsv("	", "text/tab-separated-values");
            var ua, ia, oa, aa, ca, la = this[k(this, "requestAnimationFrame")] || function(n) {
                        setTimeout(n, 17)
                    }
                ;
            oo.timer = function(n, t, e) {
                var r = arguments.length;
                2 > r && (t = 0),
                3 > r && (e = Date.now());
                var u = e + t
                    , i = {
                    c: n,
                    t: u,
                    f: !1,
                    n: null
                };
                ia ? ia.n = i : ua = i,
                    ia = i,
                oa || (aa = clearTimeout(aa),
                    oa = 1,
                    la(jn))
            }
                ,
                oo.timer.flush = function() {
                    Un(),
                        Fn()
                }
                ,
                oo.round = function(n, t) {
                    return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n)
                }
            ;
            var sa = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(On);
            oo.formatPrefix = function(n, t) {
                var e = 0;
                return n && (0 > n && (n *= -1),
                t && (n = oo.round(n, Hn(n, t))),
                    e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10),
                    e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))),
                    sa[8 + e / 3]
            }
            ;
            var fa = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i
                , ha = oo.map({
                b: function(n) {
                    return n.toString(2)
                },
                c: function(n) {
                    return String.fromCharCode(n)
                },
                o: function(n) {
                    return n.toString(8)
                },
                x: function(n) {
                    return n.toString(16)
                },
                X: function(n) {
                    return n.toString(16).toUpperCase()
                },
                g: function(n, t) {
                    return n.toPrecision(t)
                },
                e: function(n, t) {
                    return n.toExponential(t)
                },
                f: function(n, t) {
                    return n.toFixed(t)
                },
                r: function(n, t) {
                    return (n = oo.round(n, Hn(n, t))).toFixed(Math.max(0, Math.min(20, Hn(n * (1 + 1e-15), t))))
                }
            })
                , ga = oo.time = {}
                , pa = Date;
            Zn.prototype = {
                getDate: function() {
                    return this._.getUTCDate()
                },
                getDay: function() {
                    return this._.getUTCDay()
                },
                getFullYear: function() {
                    return this._.getUTCFullYear()
                },
                getHours: function() {
                    return this._.getUTCHours()
                },
                getMilliseconds: function() {
                    return this._.getUTCMilliseconds()
                },
                getMinutes: function() {
                    return this._.getUTCMinutes()
                },
                getMonth: function() {
                    return this._.getUTCMonth()
                },
                getSeconds: function() {
                    return this._.getUTCSeconds()
                },
                getTime: function() {
                    return this._.getTime()
                },
                getTimezoneOffset: function() {
                    return 0
                },
                valueOf: function() {
                    return this._.valueOf()
                },
                setDate: function() {
                    va.setUTCDate.apply(this._, arguments)
                },
                setDay: function() {
                    va.setUTCDay.apply(this._, arguments)
                },
                setFullYear: function() {
                    va.setUTCFullYear.apply(this._, arguments)
                },
                setHours: function() {
                    va.setUTCHours.apply(this._, arguments)
                },
                setMilliseconds: function() {
                    va.setUTCMilliseconds.apply(this._, arguments)
                },
                setMinutes: function() {
                    va.setUTCMinutes.apply(this._, arguments)
                },
                setMonth: function() {
                    va.setUTCMonth.apply(this._, arguments)
                },
                setSeconds: function() {
                    va.setUTCSeconds.apply(this._, arguments)
                },
                setTime: function() {
                    va.setTime.apply(this._, arguments)
                }
            };
            var va = Date.prototype;
            ga.year = Vn(function(n) {
                return n = ga.day(n),
                    n.setMonth(0, 1),
                    n
            }, function(n, t) {
                n.setFullYear(n.getFullYear() + t)
            }, function(n) {
                return n.getFullYear()
            }),
                ga.years = ga.year.range,
                ga.years.utc = ga.year.utc.range,
                ga.day = Vn(function(n) {
                    var t = new pa(2e3,0);
                    return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()),
                        t
                }, function(n, t) {
                    n.setDate(n.getDate() + t)
                }, function(n) {
                    return n.getDate() - 1
                }),
                ga.days = ga.day.range,
                ga.days.utc = ga.day.utc.range,
                ga.dayOfYear = function(n) {
                    var t = ga.year(n);
                    return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5)
                }
                ,
                ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(n, t) {
                    t = 7 - t;
                    var e = ga[n] = Vn(function(n) {
                        return (n = ga.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7),
                            n
                    }, function(n, t) {
                        n.setDate(n.getDate() + 7 * Math.floor(t))
                    }, function(n) {
                        var e = ga.year(n).getDay();
                        return Math.floor((ga.dayOfYear(n) + (e + t) % 7) / 7) - (e !== t)
                    });
                    ga[n + "s"] = e.range,
                        ga[n + "s"].utc = e.utc.range,
                        ga[n + "OfYear"] = function(n) {
                            var e = ga.year(n).getDay();
                            return Math.floor((ga.dayOfYear(n) + (e + t) % 7) / 7)
                        }
                }),
                ga.week = ga.sunday,
                ga.weeks = ga.sunday.range,
                ga.weeks.utc = ga.sunday.utc.range,
                ga.weekOfYear = ga.sundayOfYear;
            var da = {
                "-": "",
                _: " ",
                0: "0"
            }
                , ma = /^\s*\d+/
                , ya = /^%/;
            oo.locale = function(n) {
                return {
                    numberFormat: In(n),
                    timeFormat: $n(n)
                }
            }
            ;
            var Ma = oo.locale({
                decimal: ".",
                thousands: ",",
                grouping: [3],
                currency: ["$", ""],
                dateTime: "%a %b %e %X %Y",
                date: "%m/%d/%Y",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            });
            oo.format = Ma.numberFormat,
                oo.geo = {},
                pt.prototype = {
                    s: 0,
                    t: 0,
                    add: function(n) {
                        vt(n, this.t, xa),
                            vt(xa.s, this.s, this),
                            this.s ? this.t += xa.t : this.s = xa.t
                    },
                    reset: function() {
                        this.s = this.t = 0
                    },
                    valueOf: function() {
                        return this.s
                    }
                };
            var xa = new pt;
            oo.geo.stream = function(n, t) {
                n && ba.hasOwnProperty(n.type) ? ba[n.type](n, t) : dt(n, t)
            }
            ;
            var ba = {
                Feature: function(n, t) {
                    dt(n.geometry, t)
                },
                FeatureCollection: function(n, t) {
                    for (var e = n.features, r = -1, u = e.length; ++r < u; )
                        dt(e[r].geometry, t)
                }
            }
                , wa = {
                Sphere: function(n, t) {
                    t.sphere()
                },
                Point: function(n, t) {
                    n = n.coordinates,
                        t.point(n[0], n[1], n[2])
                },
                MultiPoint: function(n, t) {
                    for (var e = n.coordinates, r = -1, u = e.length; ++r < u; )
                        n = e[r],
                            t.point(n[0], n[1], n[2])
                },
                LineString: function(n, t) {
                    mt(n.coordinates, t, 0)
                },
                MultiLineString: function(n, t) {
                    for (var e = n.coordinates, r = -1, u = e.length; ++r < u; )
                        mt(e[r], t, 0)
                },
                Polygon: function(n, t) {
                    yt(n.coordinates, t)
                },
                MultiPolygon: function(n, t) {
                    for (var e = n.coordinates, r = -1, u = e.length; ++r < u; )
                        yt(e[r], t)
                },
                GeometryCollection: function(n, t) {
                    for (var e = n.geometries, r = -1, u = e.length; ++r < u; )
                        dt(e[r], t)
                }
            };
            oo.geo.area = function(n) {
                return _a = 0,
                    oo.geo.stream(n, ka),
                    _a
            }
            ;
            var _a, Sa = new pt, ka = {
                sphere: function() {
                    _a += 4 * jo
                },
                point: N,
                lineStart: N,
                lineEnd: N,
                polygonStart: function() {
                    Sa.reset(),
                        ka.lineStart = Mt
                },
                polygonEnd: function() {
                    var n = 2 * Sa;
                    _a += 0 > n ? 4 * jo + n : n,
                        ka.lineStart = ka.lineEnd = ka.point = N
                }
            };
            oo.geo.bounds = function() {
                function n(n, t) {
                    M.push(x = [s = n, h = n]),
                    f > t && (f = t),
                    t > g && (g = t)
                }
                function t(t, e) {
                    var r = xt([t * Oo, e * Oo]);
                    if (m) {
                        var u = wt(m, r)
                            , i = [u[1], -u[0], 0]
                            , o = wt(i, u);
                        kt(o),
                            o = Nt(o);
                        var c = t - p
                            , l = c > 0 ? 1 : -1
                            , v = o[0] * Io * l
                            , d = Mo(c) > 180;
                        if (d ^ (v > l * p && l * t > v)) {
                            var y = o[1] * Io;
                            y > g && (g = y)
                        } else if (v = (v + 360) % 360 - 180,
                            d ^ (v > l * p && l * t > v)) {
                            var y = -o[1] * Io;
                            f > y && (f = y)
                        } else
                            f > e && (f = e),
                            e > g && (g = e);
                        d ? p > t ? a(s, t) > a(s, h) && (h = t) : a(t, h) > a(s, h) && (s = t) : h >= s ? (s > t && (s = t),
                        t > h && (h = t)) : t > p ? a(s, t) > a(s, h) && (h = t) : a(t, h) > a(s, h) && (s = t)
                    } else
                        n(t, e);
                    m = r,
                        p = t
                }
                function e() {
                    b.point = t
                }
                function r() {
                    x[0] = s,
                        x[1] = h,
                        b.point = n,
                        m = null
                }
                function u(n, e) {
                    if (m) {
                        var r = n - p;
                        y += Mo(r) > 180 ? r + (r > 0 ? 360 : -360) : r
                    } else
                        v = n,
                            d = e;
                    ka.point(n, e),
                        t(n, e)
                }
                function i() {
                    ka.lineStart()
                }
                function o() {
                    u(v, d),
                        ka.lineEnd(),
                    Mo(y) > Do && (s = -(h = 180)),
                        x[0] = s,
                        x[1] = h,
                        m = null
                }
                function a(n, t) {
                    return (t -= n) < 0 ? t + 360 : t
                }
                function c(n, t) {
                    return n[0] - t[0]
                }
                function l(n, t) {
                    return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
                }
                var s, f, h, g, p, v, d, m, y, M, x, b = {
                    point: n,
                    lineStart: e,
                    lineEnd: r,
                    polygonStart: function() {
                        b.point = u,
                            b.lineStart = i,
                            b.lineEnd = o,
                            y = 0,
                            ka.polygonStart()
                    },
                    polygonEnd: function() {
                        ka.polygonEnd(),
                            b.point = n,
                            b.lineStart = e,
                            b.lineEnd = r,
                            0 > Sa ? (s = -(h = 180),
                                f = -(g = 90)) : y > Do ? g = 90 : -Do > y && (f = -90),
                            x[0] = s,
                            x[1] = h
                    }
                };
                return function(n) {
                    g = h = -(s = f = 1 / 0),
                        M = [],
                        oo.geo.stream(n, b);
                    var t = M.length;
                    if (t) {
                        M.sort(c);
                        for (var e, r = 1, u = M[0], i = [u]; t > r; ++r)
                            e = M[r],
                                l(e[0], u) || l(e[1], u) ? (a(u[0], e[1]) > a(u[0], u[1]) && (u[1] = e[1]),
                                a(e[0], u[1]) > a(u[0], u[1]) && (u[0] = e[0])) : i.push(u = e);
                        for (var o, e, p = -(1 / 0), t = i.length - 1, r = 0, u = i[t]; t >= r; u = e,
                            ++r)
                            e = i[r],
                            (o = a(u[1], e[0])) > p && (p = o,
                                s = e[0],
                                h = u[1])
                    }
                    return M = x = null ,
                        s === 1 / 0 || f === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[s, f], [h, g]]
                }
            }(),
                oo.geo.centroid = function(n) {
                    Na = Ea = Aa = Ca = za = qa = La = Ta = Ra = Da = Pa = 0,
                        oo.geo.stream(n, ja);
                    var t = Ra
                        , e = Da
                        , r = Pa
                        , u = t * t + e * e + r * r;
                    return Po > u && (t = qa,
                        e = La,
                        r = Ta,
                    Do > Ea && (t = Aa,
                        e = Ca,
                        r = za),
                        u = t * t + e * e + r * r,
                    Po > u) ? [NaN, NaN] : [Math.atan2(e, t) * Io, an(r / Math.sqrt(u)) * Io]
                }
            ;
            var Na, Ea, Aa, Ca, za, qa, La, Ta, Ra, Da, Pa, ja = {
                sphere: N,
                point: At,
                lineStart: zt,
                lineEnd: qt,
                polygonStart: function() {
                    ja.lineStart = Lt
                },
                polygonEnd: function() {
                    ja.lineStart = zt
                }
            }, Ua = Ut(Rt, It, Zt, [-jo, -jo / 2]), Fa = 1e9;
            oo.geo.clipExtent = function() {
                var n, t, e, r, u, i, o = {
                    stream: function(n) {
                        return u && (u.valid = !1),
                            u = i(n),
                            u.valid = !0,
                            u
                    },
                    extent: function(a) {
                        return arguments.length ? (i = Bt(n = +a[0][0], t = +a[0][1], e = +a[1][0], r = +a[1][1]),
                        u && (u.valid = !1,
                            u = null ),
                            o) : [[n, t], [e, r]]
                    }
                };
                return o.extent([[0, 0], [960, 500]])
            }
                ,
                (oo.geo.conicEqualArea = function() {
                        return Jt(Wt)
                    }
                ).raw = Wt,
                oo.geo.albers = function() {
                    return oo.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
                }
                ,
                oo.geo.albersUsa = function() {
                    function n(n) {
                        var i = n[0]
                            , o = n[1];
                        return t = null ,
                            e(i, o),
                        t || (r(i, o),
                            t) || u(i, o),
                            t
                    }
                    var t, e, r, u, i = oo.geo.albers(), o = oo.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), a = oo.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), c = {
                        point: function(n, e) {
                            t = [n, e]
                        }
                    };
                    return n.invert = function(n) {
                        var t = i.scale()
                            , e = i.translate()
                            , r = (n[0] - e[0]) / t
                            , u = (n[1] - e[1]) / t;
                        return (u >= .12 && .234 > u && r >= -.425 && -.214 > r ? o : u >= .166 && .234 > u && r >= -.214 && -.115 > r ? a : i).invert(n)
                    }
                        ,
                        n.stream = function(n) {
                            var t = i.stream(n)
                                , e = o.stream(n)
                                , r = a.stream(n);
                            return {
                                point: function(n, u) {
                                    t.point(n, u),
                                        e.point(n, u),
                                        r.point(n, u)
                                },
                                sphere: function() {
                                    t.sphere(),
                                        e.sphere(),
                                        r.sphere()
                                },
                                lineStart: function() {
                                    t.lineStart(),
                                        e.lineStart(),
                                        r.lineStart()
                                },
                                lineEnd: function() {
                                    t.lineEnd(),
                                        e.lineEnd(),
                                        r.lineEnd()
                                },
                                polygonStart: function() {
                                    t.polygonStart(),
                                        e.polygonStart(),
                                        r.polygonStart()
                                },
                                polygonEnd: function() {
                                    t.polygonEnd(),
                                        e.polygonEnd(),
                                        r.polygonEnd()
                                }
                            }
                        }
                        ,
                        n.precision = function(t) {
                            return arguments.length ? (i.precision(t),
                                o.precision(t),
                                a.precision(t),
                                n) : i.precision()
                        }
                        ,
                        n.scale = function(t) {
                            return arguments.length ? (i.scale(t),
                                o.scale(.35 * t),
                                a.scale(t),
                                n.translate(i.translate())) : i.scale()
                        }
                        ,
                        n.translate = function(t) {
                            if (!arguments.length)
                                return i.translate();
                            var l = i.scale()
                                , s = +t[0]
                                , f = +t[1];
                            return e = i.translate(t).clipExtent([[s - .455 * l, f - .238 * l], [s + .455 * l, f + .238 * l]]).stream(c).point,
                                r = o.translate([s - .307 * l, f + .201 * l]).clipExtent([[s - .425 * l + Do, f + .12 * l + Do], [s - .214 * l - Do, f + .234 * l - Do]]).stream(c).point,
                                u = a.translate([s - .205 * l, f + .212 * l]).clipExtent([[s - .214 * l + Do, f + .166 * l + Do], [s - .115 * l - Do, f + .234 * l - Do]]).stream(c).point,
                                n
                        }
                        ,
                        n.scale(1070)
                }
            ;
            var Ha, Oa, Ia, Ya, Za, Va, Xa = {
                point: N,
                lineStart: N,
                lineEnd: N,
                polygonStart: function() {
                    Oa = 0,
                        Xa.lineStart = Kt
                },
                polygonEnd: function() {
                    Xa.lineStart = Xa.lineEnd = Xa.point = N,
                        Ha += Mo(Oa / 2)
                }
            }, $a = {
                point: Gt,
                lineStart: N,
                lineEnd: N,
                polygonStart: N,
                polygonEnd: N
            }, Ba = {
                point: te,
                lineStart: ee,
                lineEnd: re,
                polygonStart: function() {
                    Ba.lineStart = ue
                },
                polygonEnd: function() {
                    Ba.point = te,
                        Ba.lineStart = ee,
                        Ba.lineEnd = re
                }
            };
            oo.geo.path = function() {
                function n(n) {
                    return n && ("function" == typeof a && i.pointRadius(+a.apply(this, arguments)),
                    o && o.valid || (o = u(i)),
                        oo.geo.stream(n, o)),
                        i.result()
                }
                function t() {
                    return o = null ,
                        n
                }
                var e, r, u, i, o, a = 4.5;
                return n.area = function(n) {
                    return Ha = 0,
                        oo.geo.stream(n, u(Xa)),
                        Ha
                }
                    ,
                    n.centroid = function(n) {
                        return Aa = Ca = za = qa = La = Ta = Ra = Da = Pa = 0,
                            oo.geo.stream(n, u(Ba)),
                            Pa ? [Ra / Pa, Da / Pa] : Ta ? [qa / Ta, La / Ta] : za ? [Aa / za, Ca / za] : [NaN, NaN]
                    }
                    ,
                    n.bounds = function(n) {
                        return Za = Va = -(Ia = Ya = 1 / 0),
                            oo.geo.stream(n, u($a)),
                            [[Ia, Ya], [Za, Va]]
                    }
                    ,
                    n.projection = function(n) {
                        return arguments.length ? (u = (e = n) ? n.stream || ae(n) : _,
                            t()) : e
                    }
                    ,
                    n.context = function(n) {
                        return arguments.length ? (i = null == (r = n) ? new Qt : new ie(n),
                        "function" != typeof a && i.pointRadius(a),
                            t()) : r
                    }
                    ,
                    n.pointRadius = function(t) {
                        return arguments.length ? (a = "function" == typeof t ? t : (i.pointRadius(+t),
                            +t),
                            n) : a
                    }
                    ,
                    n.projection(oo.geo.albersUsa()).context(null )
            }
                ,
                oo.geo.transform = function(n) {
                    return {
                        stream: function(t) {
                            var e = new ce(t);
                            for (var r in n)
                                e[r] = n[r];
                            return e
                        }
                    }
                }
                ,
                ce.prototype = {
                    point: function(n, t) {
                        this.stream.point(n, t)
                    },
                    sphere: function() {
                        this.stream.sphere()
                    },
                    lineStart: function() {
                        this.stream.lineStart()
                    },
                    lineEnd: function() {
                        this.stream.lineEnd()
                    },
                    polygonStart: function() {
                        this.stream.polygonStart()
                    },
                    polygonEnd: function() {
                        this.stream.polygonEnd()
                    }
                },
                oo.geo.projection = se,
                oo.geo.projectionMutator = fe,
                (oo.geo.equirectangular = function() {
                        return se(ge)
                    }
                ).raw = ge.invert = ge,
                oo.geo.rotation = function(n) {
                    function t(t) {
                        return t = n(t[0] * Oo, t[1] * Oo),
                            t[0] *= Io,
                            t[1] *= Io,
                            t
                    }
                    return n = ve(n[0] % 360 * Oo, n[1] * Oo, n.length > 2 ? n[2] * Oo : 0),
                        t.invert = function(t) {
                            return t = n.invert(t[0] * Oo, t[1] * Oo),
                                t[0] *= Io,
                                t[1] *= Io,
                                t
                        }
                        ,
                        t
                }
                ,
                pe.invert = ge,
                oo.geo.circle = function() {
                    function n() {
                        var n = "function" == typeof r ? r.apply(this, arguments) : r
                            , t = ve(-n[0] * Oo, -n[1] * Oo, 0).invert
                            , u = [];
                        return e(null , null , 1, {
                            point: function(n, e) {
                                u.push(n = t(n, e)),
                                    n[0] *= Io,
                                    n[1] *= Io
                            }
                        }),
                        {
                            type: "Polygon",
                            coordinates: [u]
                        }
                    }
                    var t, e, r = [0, 0], u = 6;
                    return n.origin = function(t) {
                        return arguments.length ? (r = t,
                            n) : r
                    }
                        ,
                        n.angle = function(r) {
                            return arguments.length ? (e = Me((t = +r) * Oo, u * Oo),
                                n) : t
                        }
                        ,
                        n.precision = function(r) {
                            return arguments.length ? (e = Me(t * Oo, (u = +r) * Oo),
                                n) : u
                        }
                        ,
                        n.angle(90)
                }
                ,
                oo.geo.distance = function(n, t) {
                    var e, r = (t[0] - n[0]) * Oo, u = n[1] * Oo, i = t[1] * Oo, o = Math.sin(r), a = Math.cos(r), c = Math.sin(u), l = Math.cos(u), s = Math.sin(i), f = Math.cos(i);
                    return Math.atan2(Math.sqrt((e = f * o) * e + (e = l * s - c * f * a) * e), c * s + l * f * a)
                }
                ,
                oo.geo.graticule = function() {
                    function n() {
                        return {
                            type: "MultiLineString",
                            coordinates: t()
                        }
                    }
                    function t() {
                        return oo.range(Math.ceil(i / d) * d, u, d).map(h).concat(oo.range(Math.ceil(l / m) * m, c, m).map(g)).concat(oo.range(Math.ceil(r / p) * p, e, p).filter(function(n) {
                            return Mo(n % d) > Do
                        }).map(s)).concat(oo.range(Math.ceil(a / v) * v, o, v).filter(function(n) {
                            return Mo(n % m) > Do
                        }).map(f))
                    }
                    var e, r, u, i, o, a, c, l, s, f, h, g, p = 10, v = p, d = 90, m = 360, y = 2.5;
                    return n.lines = function() {
                        return t().map(function(n) {
                            return {
                                type: "LineString",
                                coordinates: n
                            }
                        })
                    }
                        ,
                        n.outline = function() {
                            return {
                                type: "Polygon",
                                coordinates: [h(i).concat(g(c).slice(1), h(u).reverse().slice(1), g(l).reverse().slice(1))]
                            }
                        }
                        ,
                        n.extent = function(t) {
                            return arguments.length ? n.majorExtent(t).minorExtent(t) : n.minorExtent()
                        }
                        ,
                        n.majorExtent = function(t) {
                            return arguments.length ? (i = +t[0][0],
                                u = +t[1][0],
                                l = +t[0][1],
                                c = +t[1][1],
                            i > u && (t = i,
                                i = u,
                                u = t),
                            l > c && (t = l,
                                l = c,
                                c = t),
                                n.precision(y)) : [[i, l], [u, c]]
                        }
                        ,
                        n.minorExtent = function(t) {
                            return arguments.length ? (r = +t[0][0],
                                e = +t[1][0],
                                a = +t[0][1],
                                o = +t[1][1],
                            r > e && (t = r,
                                r = e,
                                e = t),
                            a > o && (t = a,
                                a = o,
                                o = t),
                                n.precision(y)) : [[r, a], [e, o]]
                        }
                        ,
                        n.step = function(t) {
                            return arguments.length ? n.majorStep(t).minorStep(t) : n.minorStep()
                        }
                        ,
                        n.majorStep = function(t) {
                            return arguments.length ? (d = +t[0],
                                m = +t[1],
                                n) : [d, m]
                        }
                        ,
                        n.minorStep = function(t) {
                            return arguments.length ? (p = +t[0],
                                v = +t[1],
                                n) : [p, v]
                        }
                        ,
                        n.precision = function(t) {
                            return arguments.length ? (y = +t,
                                s = be(a, o, 90),
                                f = we(r, e, y),
                                h = be(l, c, 90),
                                g = we(i, u, y),
                                n) : y
                        }
                        ,
                        n.majorExtent([[-180, -90 + Do], [180, 90 - Do]]).minorExtent([[-180, -80 - Do], [180, 80 + Do]])
                }
                ,
                oo.geo.greatArc = function() {
                    function n() {
                        return {
                            type: "LineString",
                            coordinates: [t || r.apply(this, arguments), e || u.apply(this, arguments)]
                        }
                    }
                    var t, e, r = _e, u = Se;
                    return n.distance = function() {
                        return oo.geo.distance(t || r.apply(this, arguments), e || u.apply(this, arguments))
                    }
                        ,
                        n.source = function(e) {
                            return arguments.length ? (r = e,
                                t = "function" == typeof e ? null : e,
                                n) : r
                        }
                        ,
                        n.target = function(t) {
                            return arguments.length ? (u = t,
                                e = "function" == typeof t ? null : t,
                                n) : u
                        }
                        ,
                        n.precision = function() {
                            return arguments.length ? n : 0
                        }
                        ,
                        n
                }
                ,
                oo.geo.interpolate = function(n, t) {
                    return ke(n[0] * Oo, n[1] * Oo, t[0] * Oo, t[1] * Oo)
                }
                ,
                oo.geo.length = function(n) {
                    return Ja = 0,
                        oo.geo.stream(n, Wa),
                        Ja
                }
            ;
            var Ja, Wa = {
                sphere: N,
                point: N,
                lineStart: Ne,
                lineEnd: N,
                polygonStart: N,
                polygonEnd: N
            }, Ka = Ee(function(n) {
                return Math.sqrt(2 / (1 + n))
            }, function(n) {
                return 2 * Math.asin(n / 2)
            });
            (oo.geo.azimuthalEqualArea = function() {
                    return se(Ka)
                }
            ).raw = Ka;
            var Ga = Ee(function(n) {
                var t = Math.acos(n);
                return t && t / Math.sin(t)
            }, _);
            (oo.geo.azimuthalEquidistant = function() {
                    return se(Ga)
                }
            ).raw = Ga,
                (oo.geo.conicConformal = function() {
                        return Jt(Ae)
                    }
                ).raw = Ae,
                (oo.geo.conicEquidistant = function() {
                        return Jt(Ce)
                    }
                ).raw = Ce;
            var Qa = Ee(function(n) {
                return 1 / n
            }, Math.atan);
            (oo.geo.gnomonic = function() {
                    return se(Qa)
                }
            ).raw = Qa,
                ze.invert = function(n, t) {
                    return [n, 2 * Math.atan(Math.exp(t)) - Ho]
                }
                ,
                (oo.geo.mercator = function() {
                        return qe(ze)
                    }
                ).raw = ze;
            var nc = Ee(function() {
                return 1
            }, Math.asin);
            (oo.geo.orthographic = function() {
                    return se(nc)
                }
            ).raw = nc;
            var tc = Ee(function(n) {
                return 1 / (1 + n)
            }, function(n) {
                return 2 * Math.atan(n)
            });
            (oo.geo.stereographic = function() {
                    return se(tc)
                }
            ).raw = tc,
                Le.invert = function(n, t) {
                    return [-t, 2 * Math.atan(Math.exp(n)) - Ho]
                }
                ,
                (oo.geo.transverseMercator = function() {
                        var n = qe(Le)
                            , t = n.center
                            , e = n.rotate;
                        return n.center = function(n) {
                            return n ? t([-n[1], n[0]]) : (n = t(),
                                [n[1], -n[0]])
                        }
                            ,
                            n.rotate = function(n) {
                                return n ? e([n[0], n[1], n.length > 2 ? n[2] + 90 : 90]) : (n = e(),
                                    [n[0], n[1], n[2] - 90])
                            }
                            ,
                            e([0, 0, 90])
                    }
                ).raw = Le,
                oo.geom = {},
                oo.geom.hull = function(n) {
                    function t(n) {
                        if (n.length < 3)
                            return [];
                        var t, u = Ln(e), i = Ln(r), o = n.length, a = [], c = [];
                        for (t = 0; o > t; t++)
                            a.push([+u.call(this, n[t], t), +i.call(this, n[t], t), t]);
                        for (a.sort(Pe),
                                 t = 0; o > t; t++)
                            c.push([a[t][0], -a[t][1]]);
                        var l = De(a)
                            , s = De(c)
                            , f = s[0] === l[0]
                            , h = s[s.length - 1] === l[l.length - 1]
                            , g = [];
                        for (t = l.length - 1; t >= 0; --t)
                            g.push(n[a[l[t]][2]]);
                        for (t = +f; t < s.length - h; ++t)
                            g.push(n[a[s[t]][2]]);
                        return g
                    }
                    var e = Te
                        , r = Re;
                    return arguments.length ? t(n) : (t.x = function(n) {
                        return arguments.length ? (e = n,
                            t) : e
                    }
                        ,
                        t.y = function(n) {
                            return arguments.length ? (r = n,
                                t) : r
                        }
                        ,
                        t)
                }
                ,
                oo.geom.polygon = function(n) {
                    return So(n, ec),
                        n
                }
            ;
            var ec = oo.geom.polygon.prototype = [];
            ec.area = function() {
                for (var n, t = -1, e = this.length, r = this[e - 1], u = 0; ++t < e; )
                    n = r,
                        r = this[t],
                        u += n[1] * r[0] - n[0] * r[1];
                return .5 * u
            }
                ,
                ec.centroid = function(n) {
                    var t, e, r = -1, u = this.length, i = 0, o = 0, a = this[u - 1];
                    for (arguments.length || (n = -1 / (6 * this.area())); ++r < u; )
                        t = a,
                            a = this[r],
                            e = t[0] * a[1] - a[0] * t[1],
                            i += (t[0] + a[0]) * e,
                            o += (t[1] + a[1]) * e;
                    return [i * n, o * n]
                }
                ,
                ec.clip = function(n) {
                    for (var t, e, r, u, i, o, a = Fe(n), c = -1, l = this.length - Fe(this), s = this[l - 1]; ++c < l; ) {
                        for (t = n.slice(),
                                 n.length = 0,
                                 u = this[c],
                                 i = t[(r = t.length - a) - 1],
                                 e = -1; ++e < r; )
                            o = t[e],
                                je(o, s, u) ? (je(i, s, u) || n.push(Ue(i, o, s, u)),
                                    n.push(o)) : je(i, s, u) && n.push(Ue(i, o, s, u)),
                                i = o;
                        a && n.push(n[0]),
                            s = u
                    }
                    return n
                }
            ;
            var rc, uc, ic, oc, ac, cc = [], lc = [];
            $e.prototype.prepare = function() {
                for (var n, t = this.edges, e = t.length; e--; )
                    n = t[e].edge,
                    n.b && n.a || t.splice(e, 1);
                return t.sort(Je),
                    t.length
            }
                ,
                ir.prototype = {
                    start: function() {
                        return this.edge.l === this.site ? this.edge.a : this.edge.b
                    },
                    end: function() {
                        return this.edge.l === this.site ? this.edge.b : this.edge.a
                    }
                },
                or.prototype = {
                    insert: function(n, t) {
                        var e, r, u;
                        if (n) {
                            if (t.P = n,
                                    t.N = n.N,
                                n.N && (n.N.P = t),
                                    n.N = t,
                                    n.R) {
                                for (n = n.R; n.L; )
                                    n = n.L;
                                n.L = t
                            } else
                                n.R = t;
                            e = n
                        } else
                            this._ ? (n = sr(this._),
                                t.P = null ,
                                t.N = n,
                                n.P = n.L = t,
                                e = n) : (t.P = t.N = null ,
                                this._ = t,
                                e = null );
                        for (t.L = t.R = null ,
                                 t.U = e,
                                 t.C = !0,
                                 n = t; e && e.C; )
                            r = e.U,
                                e === r.L ? (u = r.R,
                                    u && u.C ? (e.C = u.C = !1,
                                        r.C = !0,
                                        n = r) : (n === e.R && (cr(this, e),
                                        n = e,
                                        e = n.U),
                                        e.C = !1,
                                        r.C = !0,
                                        lr(this, r))) : (u = r.L,
                                    u && u.C ? (e.C = u.C = !1,
                                        r.C = !0,
                                        n = r) : (n === e.L && (lr(this, e),
                                        n = e,
                                        e = n.U),
                                        e.C = !1,
                                        r.C = !0,
                                        cr(this, r))),
                                e = n.U;
                        this._.C = !1
                    },
                    remove: function(n) {
                        n.N && (n.N.P = n.P),
                        n.P && (n.P.N = n.N),
                            n.N = n.P = null ;
                        var t, e, r, u = n.U, i = n.L, o = n.R;
                        if (e = i ? o ? sr(o) : i : o,
                                u ? u.L === n ? u.L = e : u.R = e : this._ = e,
                                i && o ? (r = e.C,
                                    e.C = n.C,
                                    e.L = i,
                                    i.U = e,
                                    e !== o ? (u = e.U,
                                        e.U = n.U,
                                        n = e.R,
                                        u.L = n,
                                        e.R = o,
                                        o.U = e) : (e.U = u,
                                        u = e,
                                        n = e.R)) : (r = n.C,
                                    n = e),
                            n && (n.U = u),
                                !r) {
                            if (n && n.C)
                                return void (n.C = !1);
                            do {
                                if (n === this._)
                                    break;
                                if (n === u.L) {
                                    if (t = u.R,
                                        t.C && (t.C = !1,
                                            u.C = !0,
                                            cr(this, u),
                                            t = u.R),
                                        t.L && t.L.C || t.R && t.R.C) {
                                        t.R && t.R.C || (t.L.C = !1,
                                            t.C = !0,
                                            lr(this, t),
                                            t = u.R),
                                            t.C = u.C,
                                            u.C = t.R.C = !1,
                                            cr(this, u),
                                            n = this._;
                                        break
                                    }
                                } else if (t = u.L,
                                    t.C && (t.C = !1,
                                        u.C = !0,
                                        lr(this, u),
                                        t = u.L),
                                    t.L && t.L.C || t.R && t.R.C) {
                                    t.L && t.L.C || (t.R.C = !1,
                                        t.C = !0,
                                        cr(this, t),
                                        t = u.L),
                                        t.C = u.C,
                                        u.C = t.L.C = !1,
                                        lr(this, u),
                                        n = this._;
                                    break
                                }
                                t.C = !0,
                                    n = u,
                                    u = u.U
                            } while (!n.C);n && (n.C = !1)
                        }
                    }
                },
                oo.geom.voronoi = function(n) {
                    function t(n) {
                        var t = new Array(n.length)
                            , r = a[0][0]
                            , u = a[0][1]
                            , i = a[1][0]
                            , o = a[1][1];
                        return fr(e(n), a).cells.forEach(function(e, a) {
                            var c = e.edges
                                , l = e.site
                                , s = t[a] = c.length ? c.map(function(n) {
                                var t = n.start();
                                return [t.x, t.y]
                            }) : l.x >= r && l.x <= i && l.y >= u && l.y <= o ? [[r, o], [i, o], [i, u], [r, u]] : [];
                            s.point = n[a]
                        }),
                            t
                    }
                    function e(n) {
                        return n.map(function(n, t) {
                            return {
                                x: Math.round(i(n, t) / Do) * Do,
                                y: Math.round(o(n, t) / Do) * Do,
                                i: t
                            }
                        })
                    }
                    var r = Te
                        , u = Re
                        , i = r
                        , o = u
                        , a = sc;
                    return n ? t(n) : (t.links = function(n) {
                        return fr(e(n)).edges.filter(function(n) {
                            return n.l && n.r
                        }).map(function(t) {
                            return {
                                source: n[t.l.i],
                                target: n[t.r.i]
                            }
                        })
                    }
                        ,
                        t.triangles = function(n) {
                            var t = [];
                            return fr(e(n)).cells.forEach(function(e, r) {
                                for (var u, i, o = e.site, a = e.edges.sort(Je), c = -1, l = a.length, s = a[l - 1].edge, f = s.l === o ? s.r : s.l; ++c < l; )
                                    u = s,
                                        i = f,
                                        s = a[c].edge,
                                        f = s.l === o ? s.r : s.l,
                                    r < i.i && r < f.i && gr(o, i, f) < 0 && t.push([n[r], n[i.i], n[f.i]])
                            }),
                                t
                        }
                        ,
                        t.x = function(n) {
                            return arguments.length ? (i = Ln(r = n),
                                t) : r
                        }
                        ,
                        t.y = function(n) {
                            return arguments.length ? (o = Ln(u = n),
                                t) : u
                        }
                        ,
                        t.clipExtent = function(n) {
                            return arguments.length ? (a = null == n ? sc : n,
                                t) : a === sc ? null : a
                        }
                        ,
                        t.size = function(n) {
                            return arguments.length ? t.clipExtent(n && [[0, 0], n]) : a === sc ? null : a && a[1]
                        }
                        ,
                        t)
                }
            ;
            var sc = [[-1e6, -1e6], [1e6, 1e6]];
            oo.geom.delaunay = function(n) {
                return oo.geom.voronoi().triangles(n)
            }
                ,
                oo.geom.quadtree = function(n, t, e, r, u) {
                    function i(n) {
                        function i(n, t, e, r, u, i, o, a) {
                            if (!isNaN(e) && !isNaN(r))
                                if (n.leaf) {
                                    var c = n.x
                                        , s = n.y;
                                    if (null != c)
                                        if (Mo(c - e) + Mo(s - r) < .01)
                                            l(n, t, e, r, u, i, o, a);
                                        else {
                                            var f = n.point;
                                            n.x = n.y = n.point = null ,
                                                l(n, f, c, s, u, i, o, a),
                                                l(n, t, e, r, u, i, o, a)
                                        }
                                    else
                                        n.x = e,
                                            n.y = r,
                                            n.point = t
                                } else
                                    l(n, t, e, r, u, i, o, a)
                        }
                        function l(n, t, e, r, u, o, a, c) {
                            var l = .5 * (u + a)
                                , s = .5 * (o + c)
                                , f = e >= l
                                , h = r >= s
                                , g = h << 1 | f;
                            n.leaf = !1,
                                n = n.nodes[g] || (n.nodes[g] = dr()),
                                f ? u = l : a = l,
                                h ? o = s : c = s,
                                i(n, t, e, r, u, o, a, c)
                        }
                        var s, f, h, g, p, v, d, m, y, M = Ln(a), x = Ln(c);
                        if (null != t)
                            v = t,
                                d = e,
                                m = r,
                                y = u;
                        else if (m = y = -(v = d = 1 / 0),
                                f = [],
                                h = [],
                                p = n.length,
                                o)
                            for (g = 0; p > g; ++g)
                                s = n[g],
                                s.x < v && (v = s.x),
                                s.y < d && (d = s.y),
                                s.x > m && (m = s.x),
                                s.y > y && (y = s.y),
                                    f.push(s.x),
                                    h.push(s.y);
                        else
                            for (g = 0; p > g; ++g) {
                                var b = +M(s = n[g], g)
                                    , w = +x(s, g);
                                v > b && (v = b),
                                d > w && (d = w),
                                b > m && (m = b),
                                w > y && (y = w),
                                    f.push(b),
                                    h.push(w)
                            }
                        var _ = m - v
                            , S = y - d;
                        _ > S ? y = d + _ : m = v + S;
                        var k = dr();
                        if (k.add = function(n) {
                                i(k, n, +M(n, ++g), +x(n, g), v, d, m, y)
                            }
                                ,
                                k.visit = function(n) {
                                    mr(n, k, v, d, m, y)
                                }
                                ,
                                k.find = function(n) {
                                    return yr(k, n[0], n[1], v, d, m, y)
                                }
                                ,
                                g = -1,
                            null == t) {
                            for (; ++g < p; )
                                i(k, n[g], f[g], h[g], v, d, m, y);
                            --g
                        } else
                            n.forEach(k.add);
                        return f = h = n = s = null ,
                            k
                    }
                    var o, a = Te, c = Re;
                    return (o = arguments.length) ? (a = pr,
                        c = vr,
                    3 === o && (u = e,
                        r = t,
                        e = t = 0),
                        i(n)) : (i.x = function(n) {
                        return arguments.length ? (a = n,
                            i) : a
                    }
                        ,
                        i.y = function(n) {
                            return arguments.length ? (c = n,
                                i) : c
                        }
                        ,
                        i.extent = function(n) {
                            return arguments.length ? (null == n ? t = e = r = u = null : (t = +n[0][0],
                                e = +n[0][1],
                                r = +n[1][0],
                                u = +n[1][1]),
                                i) : null == t ? null : [[t, e], [r, u]]
                        }
                        ,
                        i.size = function(n) {
                            return arguments.length ? (null == n ? t = e = r = u = null : (t = e = 0,
                                r = +n[0],
                                u = +n[1]),
                                i) : null == t ? null : [r - t, u - e]
                        }
                        ,
                        i)
                }
                ,
                oo.interpolateRgb = Mr,
                oo.interpolateObject = xr,
                oo.interpolateNumber = br,
                oo.interpolateString = wr;
            var fc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g
                , hc = new RegExp(fc.source,"g");
            oo.interpolate = _r,
                oo.interpolators = [function(n, t) {
                    var e = typeof t;
                    return ("string" === e ? ra.has(t.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(t) ? Mr : wr : t instanceof hn ? Mr : Array.isArray(t) ? Sr : "object" === e && isNaN(t) ? xr : br)(n, t)
                }
                ],
                oo.interpolateArray = Sr;
            var gc = function() {
                return _
            }
                , pc = oo.map({
                linear: gc,
                poly: qr,
                quad: function() {
                    return Ar
                },
                cubic: function() {
                    return Cr
                },
                sin: function() {
                    return Lr
                },
                exp: function() {
                    return Tr
                },
                circle: function() {
                    return Rr
                },
                elastic: Dr,
                back: Pr,
                bounce: function() {
                    return jr
                }
            })
                , vc = oo.map({
                "in": _,
                out: Nr,
                "in-out": Er,
                "out-in": function(n) {
                    return Er(Nr(n))
                }
            });
            oo.ease = function(n) {
                var t = n.indexOf("-")
                    , e = t >= 0 ? n.slice(0, t) : n
                    , r = t >= 0 ? n.slice(t + 1) : "in";
                return e = pc.get(e) || gc,
                    r = vc.get(r) || _,
                    kr(r(e.apply(null , ao.call(arguments, 1))))
            }
                ,
                oo.interpolateHcl = Ur,
                oo.interpolateHsl = Fr,
                oo.interpolateLab = Hr,
                oo.interpolateRound = Or,
                oo.transform = function(n) {
                    var t = lo.createElementNS(oo.ns.prefix.svg, "g");
                    return (oo.transform = function(n) {
                            if (null != n) {
                                t.setAttribute("transform", n);
                                var e = t.transform.baseVal.consolidate()
                            }
                            return new Ir(e ? e.matrix : dc)
                        }
                    )(n)
                }
                ,
                Ir.prototype.toString = function() {
                    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
                }
            ;
            var dc = {
                a: 1,
                b: 0,
                c: 0,
                d: 1,
                e: 0,
                f: 0
            };
            oo.interpolateTransform = Xr,
                oo.layout = {},
                oo.layout.bundle = function() {
                    return function(n) {
                        for (var t = [], e = -1, r = n.length; ++e < r; )
                            t.push(Jr(n[e]));
                        return t
                    }
                }
                ,
                oo.layout.chord = function() {
                    function n() {
                        var n, l, f, h, g, p = {}, v = [], d = oo.range(i), m = [];
                        for (e = [],
                                 r = [],
                                 n = 0,
                                 h = -1; ++h < i; ) {
                            for (l = 0,
                                     g = -1; ++g < i; )
                                l += u[h][g];
                            v.push(l),
                                m.push(oo.range(i)),
                                n += l
                        }
                        for (o && d.sort(function(n, t) {
                            return o(v[n], v[t])
                        }),
                             a && m.forEach(function(n, t) {
                                 n.sort(function(n, e) {
                                     return a(u[t][n], u[t][e])
                                 })
                             }),
                                 n = (Uo - s * i) / n,
                                 l = 0,
                                 h = -1; ++h < i; ) {
                            for (f = l,
                                     g = -1; ++g < i; ) {
                                var y = d[h]
                                    , M = m[y][g]
                                    , x = u[y][M]
                                    , b = l
                                    , w = l += x * n;
                                p[y + "-" + M] = {
                                    index: y,
                                    subindex: M,
                                    startAngle: b,
                                    endAngle: w,
                                    value: x
                                }
                            }
                            r[y] = {
                                index: y,
                                startAngle: f,
                                endAngle: l,
                                value: (l - f) / n
                            },
                                l += s
                        }
                        for (h = -1; ++h < i; )
                            for (g = h - 1; ++g < i; ) {
                                var _ = p[h + "-" + g]
                                    , S = p[g + "-" + h];
                                (_.value || S.value) && e.push(_.value < S.value ? {
                                    source: S,
                                    target: _
                                } : {
                                    source: _,
                                    target: S
                                })
                            }
                        c && t()
                    }
                    function t() {
                        e.sort(function(n, t) {
                            return c((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2)
                        })
                    }
                    var e, r, u, i, o, a, c, l = {}, s = 0;
                    return l.matrix = function(n) {
                        return arguments.length ? (i = (u = n) && u.length,
                            e = r = null ,
                            l) : u
                    }
                        ,
                        l.padding = function(n) {
                            return arguments.length ? (s = n,
                                e = r = null ,
                                l) : s
                        }
                        ,
                        l.sortGroups = function(n) {
                            return arguments.length ? (o = n,
                                e = r = null ,
                                l) : o
                        }
                        ,
                        l.sortSubgroups = function(n) {
                            return arguments.length ? (a = n,
                                e = null ,
                                l) : a
                        }
                        ,
                        l.sortChords = function(n) {
                            return arguments.length ? (c = n,
                            e && t(),
                                l) : c
                        }
                        ,
                        l.chords = function() {
                            return e || n(),
                                e
                        }
                        ,
                        l.groups = function() {
                            return r || n(),
                                r
                        }
                        ,
                        l
                }
                ,
                oo.layout.force = function() {
                    function n(n) {
                        return function(t, e, r, u) {
                            if (t.point !== n) {
                                var i = t.cx - n.x
                                    , o = t.cy - n.y
                                    , a = u - e
                                    , c = i * i + o * o;
                                if (c > a * a / d) {
                                    if (p > c) {
                                        var l = t.charge / c;
                                        n.px -= i * l,
                                            n.py -= o * l
                                    }
                                    return !0
                                }
                                if (t.point && c && p > c) {
                                    var l = t.pointCharge / c;
                                    n.px -= i * l,
                                        n.py -= o * l
                                }
                            }
                            return !t.charge
                        }
                    }
                    function t(n) {
                        n.px = oo.event.x,
                            n.py = oo.event.y,
                            a.resume()
                    }
                    var e, r, u, i, o, a = {}, c = oo.dispatch("start", "tick", "end"), l = [1, 1], s = .9, f = mc, h = yc, g = -30, p = Mc, v = .1, d = .64, m = [], y = [];
                    return a.tick = function() {
                        if ((r *= .99) < .005)
                            return c.end({
                                type: "end",
                                alpha: r = 0
                            }),
                                !0;
                        var t, e, a, f, h, p, d, M, x, b = m.length, w = y.length;
                        for (e = 0; w > e; ++e)
                            a = y[e],
                                f = a.source,
                                h = a.target,
                                M = h.x - f.x,
                                x = h.y - f.y,
                            (p = M * M + x * x) && (p = r * i[e] * ((p = Math.sqrt(p)) - u[e]) / p,
                                M *= p,
                                x *= p,
                                h.x -= M * (d = f.weight / (h.weight + f.weight)),
                                h.y -= x * d,
                                f.x += M * (d = 1 - d),
                                f.y += x * d);
                        if ((d = r * v) && (M = l[0] / 2,
                                x = l[1] / 2,
                                e = -1,
                                d))
                            for (; ++e < b; )
                                a = m[e],
                                    a.x += (M - a.x) * d,
                                    a.y += (x - a.y) * d;
                        if (g)
                            for (eu(t = oo.geom.quadtree(m), r, o),
                                     e = -1; ++e < b; )
                                (a = m[e]).fixed || t.visit(n(a));
                        for (e = -1; ++e < b; )
                            a = m[e],
                                a.fixed ? (a.x = a.px,
                                    a.y = a.py) : (a.x -= (a.px - (a.px = a.x)) * s,
                                    a.y -= (a.py - (a.py = a.y)) * s);
                        c.tick({
                            type: "tick",
                            alpha: r
                        })
                    }
                        ,
                        a.nodes = function(n) {
                            return arguments.length ? (m = n,
                                a) : m
                        }
                        ,
                        a.links = function(n) {
                            return arguments.length ? (y = n,
                                a) : y
                        }
                        ,
                        a.size = function(n) {
                            return arguments.length ? (l = n,
                                a) : l
                        }
                        ,
                        a.linkDistance = function(n) {
                            return arguments.length ? (f = "function" == typeof n ? n : +n,
                                a) : f
                        }
                        ,
                        a.distance = a.linkDistance,
                        a.linkStrength = function(n) {
                            return arguments.length ? (h = "function" == typeof n ? n : +n,
                                a) : h
                        }
                        ,
                        a.friction = function(n) {
                            return arguments.length ? (s = +n,
                                a) : s
                        }
                        ,
                        a.charge = function(n) {
                            return arguments.length ? (g = "function" == typeof n ? n : +n,
                                a) : g
                        }
                        ,
                        a.chargeDistance = function(n) {
                            return arguments.length ? (p = n * n,
                                a) : Math.sqrt(p)
                        }
                        ,
                        a.gravity = function(n) {
                            return arguments.length ? (v = +n,
                                a) : v
                        }
                        ,
                        a.theta = function(n) {
                            return arguments.length ? (d = n * n,
                                a) : Math.sqrt(d)
                        }
                        ,
                        a.alpha = function(n) {
                            return arguments.length ? (n = +n,
                                r ? r = n > 0 ? n : 0 : n > 0 && (c.start({
                                    type: "start",
                                    alpha: r = n
                                }),
                                    oo.timer(a.tick)),
                                a) : r
                        }
                        ,
                        a.start = function() {
                            function n(n, r) {
                                if (!e) {
                                    for (e = new Array(c),
                                             a = 0; c > a; ++a)
                                        e[a] = [];
                                    for (a = 0; s > a; ++a) {
                                        var u = y[a];
                                        e[u.source.index].push(u.target),
                                            e[u.target.index].push(u.source)
                                    }
                                }
                                for (var i, o = e[t], a = -1, l = o.length; ++a < l; )
                                    if (!isNaN(i = o[a][n]))
                                        return i;
                                return Math.random() * r
                            }
                            var t, e, r, c = m.length, s = y.length, p = l[0], v = l[1];
                            for (t = 0; c > t; ++t)
                                (r = m[t]).index = t,
                                    r.weight = 0;
                            for (t = 0; s > t; ++t)
                                r = y[t],
                                "number" == typeof r.source && (r.source = m[r.source]),
                                "number" == typeof r.target && (r.target = m[r.target]),
                                    ++r.source.weight,
                                    ++r.target.weight;
                            for (t = 0; c > t; ++t)
                                r = m[t],
                                isNaN(r.x) && (r.x = n("x", p)),
                                isNaN(r.y) && (r.y = n("y", v)),
                                isNaN(r.px) && (r.px = r.x),
                                isNaN(r.py) && (r.py = r.y);
                            if (u = [],
                                "function" == typeof f)
                                for (t = 0; s > t; ++t)
                                    u[t] = +f.call(this, y[t], t);
                            else
                                for (t = 0; s > t; ++t)
                                    u[t] = f;
                            if (i = [],
                                "function" == typeof h)
                                for (t = 0; s > t; ++t)
                                    i[t] = +h.call(this, y[t], t);
                            else
                                for (t = 0; s > t; ++t)
                                    i[t] = h;
                            if (o = [],
                                "function" == typeof g)
                                for (t = 0; c > t; ++t)
                                    o[t] = +g.call(this, m[t], t);
                            else
                                for (t = 0; c > t; ++t)
                                    o[t] = g;
                            return a.resume()
                        }
                        ,
                        a.resume = function() {
                            return a.alpha(.1)
                        }
                        ,
                        a.stop = function() {
                            return a.alpha(0)
                        }
                        ,
                        a.drag = function() {
                            return e || (e = oo.behavior.drag().origin(_).on("dragstart.force", Gr).on("drag.force", t).on("dragend.force", Qr)),
                                arguments.length ? void this.on("mouseover.force", nu).on("mouseout.force", tu).call(e) : e
                        }
                        ,
                        oo.rebind(a, c, "on")
                }
            ;
            var mc = 20
                , yc = 1
                , Mc = 1 / 0;
            oo.layout.hierarchy = function() {
                function n(u) {
                    var i, o = [u], a = [];
                    for (u.depth = 0; null != (i = o.pop()); )
                        if (a.push(i),
                            (l = e.call(n, i, i.depth)) && (c = l.length)) {
                            for (var c, l, s; --c >= 0; )
                                o.push(s = l[c]),
                                    s.parent = i,
                                    s.depth = i.depth + 1;
                            r && (i.value = 0),
                                i.children = l
                        } else
                            r && (i.value = +r.call(n, i, i.depth) || 0),
                                delete i.children;
                    return iu(u, function(n) {
                        var e, u;
                        t && (e = n.children) && e.sort(t),
                        r && (u = n.parent) && (u.value += n.value)
                    }),
                        a
                }
                var t = cu
                    , e = ou
                    , r = au;
                return n.sort = function(e) {
                    return arguments.length ? (t = e,
                        n) : t
                }
                    ,
                    n.children = function(t) {
                        return arguments.length ? (e = t,
                            n) : e
                    }
                    ,
                    n.value = function(t) {
                        return arguments.length ? (r = t,
                            n) : r
                    }
                    ,
                    n.revalue = function(t) {
                        return r && (uu(t, function(n) {
                            n.children && (n.value = 0)
                        }),
                            iu(t, function(t) {
                                var e;
                                t.children || (t.value = +r.call(n, t, t.depth) || 0),
                                (e = t.parent) && (e.value += t.value)
                            })),
                            t
                    }
                    ,
                    n
            }
                ,
                oo.layout.partition = function() {
                    function n(t, e, r, u) {
                        var i = t.children;
                        if (t.x = e,
                                t.y = t.depth * u,
                                t.dx = r,
                                t.dy = u,
                            i && (o = i.length)) {
                            var o, a, c, l = -1;
                            for (r = t.value ? r / t.value : 0; ++l < o; )
                                n(a = i[l], e, c = a.value * r, u),
                                    e += c
                        }
                    }
                    function t(n) {
                        var e = n.children
                            , r = 0;
                        if (e && (u = e.length))
                            for (var u, i = -1; ++i < u; )
                                r = Math.max(r, t(e[i]));
                        return 1 + r
                    }
                    function e(e, i) {
                        var o = r.call(this, e, i);
                        return n(o[0], 0, u[0], u[1] / t(o[0])),
                            o
                    }
                    var r = oo.layout.hierarchy()
                        , u = [1, 1];
                    return e.size = function(n) {
                        return arguments.length ? (u = n,
                            e) : u
                    }
                        ,
                        ru(e, r)
                }
                ,
                oo.layout.pie = function() {
                    function n(o) {
                        var a, c = o.length, l = o.map(function(e, r) {
                            return +t.call(n, e, r)
                        }), s = +("function" == typeof r ? r.apply(this, arguments) : r), f = ("function" == typeof u ? u.apply(this, arguments) : u) - s, h = Math.min(Math.abs(f) / c, +("function" == typeof i ? i.apply(this, arguments) : i)), g = h * (0 > f ? -1 : 1), p = (f - c * g) / oo.sum(l), v = oo.range(c), d = [];
                        return null != e && v.sort(e === xc ? function(n, t) {
                                return l[t] - l[n]
                            }
                                : function(n, t) {
                                return e(o[n], o[t])
                            }
                        ),
                            v.forEach(function(n) {
                                d[n] = {
                                    data: o[n],
                                    value: a = l[n],
                                    startAngle: s,
                                    endAngle: s += a * p + g,
                                    padAngle: h
                                }
                            }),
                            d
                    }
                    var t = Number
                        , e = xc
                        , r = 0
                        , u = Uo
                        , i = 0;
                    return n.value = function(e) {
                        return arguments.length ? (t = e,
                            n) : t
                    }
                        ,
                        n.sort = function(t) {
                            return arguments.length ? (e = t,
                                n) : e
                        }
                        ,
                        n.startAngle = function(t) {
                            return arguments.length ? (r = t,
                                n) : r
                        }
                        ,
                        n.endAngle = function(t) {
                            return arguments.length ? (u = t,
                                n) : u
                        }
                        ,
                        n.padAngle = function(t) {
                            return arguments.length ? (i = t,
                                n) : i
                        }
                        ,
                        n
                }
            ;
            var xc = {};
            oo.layout.stack = function() {
                function n(a, c) {
                    if (!(h = a.length))
                        return a;
                    var l = a.map(function(e, r) {
                        return t.call(n, e, r)
                    })
                        , s = l.map(function(t) {
                        return t.map(function(t, e) {
                            return [i.call(n, t, e), o.call(n, t, e)]
                        })
                    })
                        , f = e.call(n, s, c);
                    l = oo.permute(l, f),
                        s = oo.permute(s, f);
                    var h, g, p, v, d = r.call(n, s, c), m = l[0].length;
                    for (p = 0; m > p; ++p)
                        for (u.call(n, l[0][p], v = d[p], s[0][p][1]),
                                 g = 1; h > g; ++g)
                            u.call(n, l[g][p], v += s[g - 1][p][1], s[g][p][1]);
                    return a
                }
                var t = _
                    , e = gu
                    , r = pu
                    , u = hu
                    , i = su
                    , o = fu;
                return n.values = function(e) {
                    return arguments.length ? (t = e,
                        n) : t
                }
                    ,
                    n.order = function(t) {
                        return arguments.length ? (e = "function" == typeof t ? t : bc.get(t) || gu,
                            n) : e
                    }
                    ,
                    n.offset = function(t) {
                        return arguments.length ? (r = "function" == typeof t ? t : wc.get(t) || pu,
                            n) : r
                    }
                    ,
                    n.x = function(t) {
                        return arguments.length ? (i = t,
                            n) : i
                    }
                    ,
                    n.y = function(t) {
                        return arguments.length ? (o = t,
                            n) : o
                    }
                    ,
                    n.out = function(t) {
                        return arguments.length ? (u = t,
                            n) : u
                    }
                    ,
                    n
            }
            ;
            var bc = oo.map({
                "inside-out": function(n) {
                    var t, e, r = n.length, u = n.map(vu), i = n.map(du), o = oo.range(r).sort(function(n, t) {
                        return u[n] - u[t]
                    }), a = 0, c = 0, l = [], s = [];
                    for (t = 0; r > t; ++t)
                        e = o[t],
                            c > a ? (a += i[e],
                                l.push(e)) : (c += i[e],
                                s.push(e));
                    return s.reverse().concat(l)
                },
                reverse: function(n) {
                    return oo.range(n.length).reverse()
                },
                "default": gu
            })
                , wc = oo.map({
                silhouette: function(n) {
                    var t, e, r, u = n.length, i = n[0].length, o = [], a = 0, c = [];
                    for (e = 0; i > e; ++e) {
                        for (t = 0,
                                 r = 0; u > t; t++)
                            r += n[t][e][1];
                        r > a && (a = r),
                            o.push(r)
                    }
                    for (e = 0; i > e; ++e)
                        c[e] = (a - o[e]) / 2;
                    return c
                },
                wiggle: function(n) {
                    var t, e, r, u, i, o, a, c, l, s = n.length, f = n[0], h = f.length, g = [];
                    for (g[0] = c = l = 0,
                             e = 1; h > e; ++e) {
                        for (t = 0,
                                 u = 0; s > t; ++t)
                            u += n[t][e][1];
                        for (t = 0,
                                 i = 0,
                                 a = f[e][0] - f[e - 1][0]; s > t; ++t) {
                            for (r = 0,
                                     o = (n[t][e][1] - n[t][e - 1][1]) / (2 * a); t > r; ++r)
                                o += (n[r][e][1] - n[r][e - 1][1]) / a;
                            i += o * n[t][e][1]
                        }
                        g[e] = c -= u ? i / u * a : 0,
                        l > c && (l = c)
                    }
                    for (e = 0; h > e; ++e)
                        g[e] -= l;
                    return g
                },
                expand: function(n) {
                    var t, e, r, u = n.length, i = n[0].length, o = 1 / u, a = [];
                    for (e = 0; i > e; ++e) {
                        for (t = 0,
                                 r = 0; u > t; t++)
                            r += n[t][e][1];
                        if (r)
                            for (t = 0; u > t; t++)
                                n[t][e][1] /= r;
                        else
                            for (t = 0; u > t; t++)
                                n[t][e][1] = o
                    }
                    for (e = 0; i > e; ++e)
                        a[e] = 0;
                    return a
                },
                zero: pu
            });
            oo.layout.histogram = function() {
                function n(n, i) {
                    for (var o, a, c = [], l = n.map(e, this), s = r.call(this, l, i), f = u.call(this, s, l, i), i = -1, h = l.length, g = f.length - 1, p = t ? 1 : 1 / h; ++i < g; )
                        o = c[i] = [],
                            o.dx = f[i + 1] - (o.x = f[i]),
                            o.y = 0;
                    if (g > 0)
                        for (i = -1; ++i < h; )
                            a = l[i],
                            a >= s[0] && a <= s[1] && (o = c[oo.bisect(f, a, 1, g) - 1],
                                o.y += p,
                                o.push(n[i]));
                    return c
                }
                var t = !0
                    , e = Number
                    , r = xu
                    , u = yu;
                return n.value = function(t) {
                    return arguments.length ? (e = t,
                        n) : e
                }
                    ,
                    n.range = function(t) {
                        return arguments.length ? (r = Ln(t),
                            n) : r
                    }
                    ,
                    n.bins = function(t) {
                        return arguments.length ? (u = "number" == typeof t ? function(n) {
                            return Mu(n, t)
                        }
                            : Ln(t),
                            n) : u
                    }
                    ,
                    n.frequency = function(e) {
                        return arguments.length ? (t = !!e,
                            n) : t
                    }
                    ,
                    n
            }
                ,
                oo.layout.pack = function() {
                    function n(n, i) {
                        var o = e.call(this, n, i)
                            , a = o[0]
                            , c = u[0]
                            , l = u[1]
                            , s = null == t ? Math.sqrt : "function" == typeof t ? t : function() {
                                return t
                            }
                            ;
                        if (a.x = a.y = 0,
                                iu(a, function(n) {
                                    n.r = +s(n.value)
                                }),
                                iu(a, ku),
                                r) {
                            var f = r * (t ? 1 : Math.max(2 * a.r / c, 2 * a.r / l)) / 2;
                            iu(a, function(n) {
                                n.r += f
                            }),
                                iu(a, ku),
                                iu(a, function(n) {
                                    n.r -= f
                                })
                        }
                        return Au(a, c / 2, l / 2, t ? 1 : 1 / Math.max(2 * a.r / c, 2 * a.r / l)),
                            o
                    }
                    var t, e = oo.layout.hierarchy().sort(bu), r = 0, u = [1, 1];
                    return n.size = function(t) {
                        return arguments.length ? (u = t,
                            n) : u
                    }
                        ,
                        n.radius = function(e) {
                            return arguments.length ? (t = null == e || "function" == typeof e ? e : +e,
                                n) : t
                        }
                        ,
                        n.padding = function(t) {
                            return arguments.length ? (r = +t,
                                n) : r
                        }
                        ,
                        ru(n, e)
                }
                ,
                oo.layout.tree = function() {
                    function n(n, u) {
                        var s = o.call(this, n, u)
                            , f = s[0]
                            , h = t(f);
                        if (iu(h, e),
                                h.parent.m = -h.z,
                                uu(h, r),
                                l)
                            uu(f, i);
                        else {
                            var g = f
                                , p = f
                                , v = f;
                            uu(f, function(n) {
                                n.x < g.x && (g = n),
                                n.x > p.x && (p = n),
                                n.depth > v.depth && (v = n)
                            });
                            var d = a(g, p) / 2 - g.x
                                , m = c[0] / (p.x + a(p, g) / 2 + d)
                                , y = c[1] / (v.depth || 1);
                            uu(f, function(n) {
                                n.x = (n.x + d) * m,
                                    n.y = n.depth * y
                            })
                        }
                        return s
                    }
                    function t(n) {
                        for (var t, e = {
                            A: null ,
                            children: [n]
                        }, r = [e]; null != (t = r.pop()); )
                            for (var u, i = t.children, o = 0, a = i.length; a > o; ++o)
                                r.push((i[o] = u = {
                                    _: i[o],
                                    parent: t,
                                    children: (u = i[o].children) && u.slice() || [],
                                    A: null ,
                                    a: null ,
                                    z: 0,
                                    m: 0,
                                    c: 0,
                                    s: 0,
                                    t: null ,
                                    i: o
                                }).a = u);
                        return e.children[0]
                    }
                    function e(n) {
                        var t = n.children
                            , e = n.parent.children
                            , r = n.i ? e[n.i - 1] : null ;
                        if (t.length) {
                            Ru(n);
                            var i = (t[0].z + t[t.length - 1].z) / 2;
                            r ? (n.z = r.z + a(n._, r._),
                                n.m = n.z - i) : n.z = i
                        } else
                            r && (n.z = r.z + a(n._, r._));
                        n.parent.A = u(n, r, n.parent.A || e[0])
                    }
                    function r(n) {
                        n._.x = n.z + n.parent.m,
                            n.m += n.parent.m
                    }
                    function u(n, t, e) {
                        if (t) {
                            for (var r, u = n, i = n, o = t, c = u.parent.children[0], l = u.m, s = i.m, f = o.m, h = c.m; o = Lu(o),
                                u = qu(u),
                            o && u; )
                                c = qu(c),
                                    i = Lu(i),
                                    i.a = n,
                                    r = o.z + f - u.z - l + a(o._, u._),
                                r > 0 && (Tu(Du(o, n, e), n, r),
                                    l += r,
                                    s += r),
                                    f += o.m,
                                    l += u.m,
                                    h += c.m,
                                    s += i.m;
                            o && !Lu(i) && (i.t = o,
                                i.m += f - s),
                            u && !qu(c) && (c.t = u,
                                c.m += l - h,
                                e = n)
                        }
                        return e
                    }
                    function i(n) {
                        n.x *= c[0],
                            n.y = n.depth * c[1]
                    }
                    var o = oo.layout.hierarchy().sort(null ).value(null )
                        , a = zu
                        , c = [1, 1]
                        , l = null ;
                    return n.separation = function(t) {
                        return arguments.length ? (a = t,
                            n) : a
                    }
                        ,
                        n.size = function(t) {
                            return arguments.length ? (l = null == (c = t) ? i : null ,
                                n) : l ? null : c
                        }
                        ,
                        n.nodeSize = function(t) {
                            return arguments.length ? (l = null == (c = t) ? null : i,
                                n) : l ? c : null
                        }
                        ,
                        ru(n, o)
                }
                ,
                oo.layout.cluster = function() {
                    function n(n, i) {
                        var o, a = t.call(this, n, i), c = a[0], l = 0;
                        iu(c, function(n) {
                            var t = n.children;
                            t && t.length ? (n.x = ju(t),
                                n.y = Pu(t)) : (n.x = o ? l += e(n, o) : 0,
                                n.y = 0,
                                o = n)
                        });
                        var s = Uu(c)
                            , f = Fu(c)
                            , h = s.x - e(s, f) / 2
                            , g = f.x + e(f, s) / 2;
                        return iu(c, u ? function(n) {
                                n.x = (n.x - c.x) * r[0],
                                    n.y = (c.y - n.y) * r[1]
                            }
                                : function(n) {
                                n.x = (n.x - h) / (g - h) * r[0],
                                    n.y = (1 - (c.y ? n.y / c.y : 1)) * r[1]
                            }
                        ),
                            a
                    }
                    var t = oo.layout.hierarchy().sort(null ).value(null )
                        , e = zu
                        , r = [1, 1]
                        , u = !1;
                    return n.separation = function(t) {
                        return arguments.length ? (e = t,
                            n) : e
                    }
                        ,
                        n.size = function(t) {
                            return arguments.length ? (u = null == (r = t),
                                n) : u ? null : r
                        }
                        ,
                        n.nodeSize = function(t) {
                            return arguments.length ? (u = null != (r = t),
                                n) : u ? r : null
                        }
                        ,
                        ru(n, t)
                }
                ,
                oo.layout.treemap = function() {
                    function n(n, t) {
                        for (var e, r, u = -1, i = n.length; ++u < i; )
                            r = (e = n[u]).value * (0 > t ? 0 : t),
                                e.area = isNaN(r) || 0 >= r ? 0 : r
                    }
                    function t(e) {
                        var i = e.children;
                        if (i && i.length) {
                            var o, a, c, l = f(e), s = [], h = i.slice(), p = 1 / 0, v = "slice" === g ? l.dx : "dice" === g ? l.dy : "slice-dice" === g ? 1 & e.depth ? l.dy : l.dx : Math.min(l.dx, l.dy);
                            for (n(h, l.dx * l.dy / e.value),
                                     s.area = 0; (c = h.length) > 0; )
                                s.push(o = h[c - 1]),
                                    s.area += o.area,
                                    "squarify" !== g || (a = r(s, v)) <= p ? (h.pop(),
                                        p = a) : (s.area -= s.pop().area,
                                        u(s, v, l, !1),
                                        v = Math.min(l.dx, l.dy),
                                        s.length = s.area = 0,
                                        p = 1 / 0);
                            s.length && (u(s, v, l, !0),
                                s.length = s.area = 0),
                                i.forEach(t)
                        }
                    }
                    function e(t) {
                        var r = t.children;
                        if (r && r.length) {
                            var i, o = f(t), a = r.slice(), c = [];
                            for (n(a, o.dx * o.dy / t.value),
                                     c.area = 0; i = a.pop(); )
                                c.push(i),
                                    c.area += i.area,
                                null != i.z && (u(c, i.z ? o.dx : o.dy, o, !a.length),
                                    c.length = c.area = 0);
                            r.forEach(e)
                        }
                    }
                    function r(n, t) {
                        for (var e, r = n.area, u = 0, i = 1 / 0, o = -1, a = n.length; ++o < a; )
                            (e = n[o].area) && (i > e && (i = e),
                            e > u && (u = e));
                        return r *= r,
                            t *= t,
                            r ? Math.max(t * u * p / r, r / (t * i * p)) : 1 / 0
                    }
                    function u(n, t, e, r) {
                        var u, i = -1, o = n.length, a = e.x, l = e.y, s = t ? c(n.area / t) : 0;
                        if (t == e.dx) {
                            for ((r || s > e.dy) && (s = e.dy); ++i < o; )
                                u = n[i],
                                    u.x = a,
                                    u.y = l,
                                    u.dy = s,
                                    a += u.dx = Math.min(e.x + e.dx - a, s ? c(u.area / s) : 0);
                            u.z = !0,
                                u.dx += e.x + e.dx - a,
                                e.y += s,
                                e.dy -= s
                        } else {
                            for ((r || s > e.dx) && (s = e.dx); ++i < o; )
                                u = n[i],
                                    u.x = a,
                                    u.y = l,
                                    u.dx = s,
                                    l += u.dy = Math.min(e.y + e.dy - l, s ? c(u.area / s) : 0);
                            u.z = !1,
                                u.dy += e.y + e.dy - l,
                                e.x += s,
                                e.dx -= s
                        }
                    }
                    function i(r) {
                        var u = o || a(r)
                            , i = u[0];
                        return i.x = 0,
                            i.y = 0,
                            i.dx = l[0],
                            i.dy = l[1],
                        o && a.revalue(i),
                            n([i], i.dx * i.dy / i.value),
                            (o ? e : t)(i),
                        h && (o = u),
                            u
                    }
                    var o, a = oo.layout.hierarchy(), c = Math.round, l = [1, 1], s = null , f = Hu, h = !1, g = "squarify", p = .5 * (1 + Math.sqrt(5));
                    return i.size = function(n) {
                        return arguments.length ? (l = n,
                            i) : l
                    }
                        ,
                        i.padding = function(n) {
                            function t(t) {
                                var e = n.call(i, t, t.depth);
                                return null == e ? Hu(t) : Ou(t, "number" == typeof e ? [e, e, e, e] : e)
                            }
                            function e(t) {
                                return Ou(t, n)
                            }
                            if (!arguments.length)
                                return s;
                            var r;
                            return f = null == (s = n) ? Hu : "function" == (r = typeof n) ? t : "number" === r ? (n = [n, n, n, n],
                                e) : e,
                                i
                        }
                        ,
                        i.round = function(n) {
                            return arguments.length ? (c = n ? Math.round : Number,
                                i) : c != Number
                        }
                        ,
                        i.sticky = function(n) {
                            return arguments.length ? (h = n,
                                o = null ,
                                i) : h
                        }
                        ,
                        i.ratio = function(n) {
                            return arguments.length ? (p = n,
                                i) : p
                        }
                        ,
                        i.mode = function(n) {
                            return arguments.length ? (g = n + "",
                                i) : g
                        }
                        ,
                        ru(i, a)
                }
                ,
                oo.random = {
                    normal: function(n, t) {
                        var e = arguments.length;
                        return 2 > e && (t = 1),
                        1 > e && (n = 0),
                            function() {
                                var e, r, u;
                                do
                                    e = 2 * Math.random() - 1,
                                        r = 2 * Math.random() - 1,
                                        u = e * e + r * r;
                                while (!u || u > 1);return n + t * e * Math.sqrt(-2 * Math.log(u) / u)
                            }
                    },
                    logNormal: function() {
                        var n = oo.random.normal.apply(oo, arguments);
                        return function() {
                            return Math.exp(n())
                        }
                    },
                    bates: function(n) {
                        var t = oo.random.irwinHall(n);
                        return function() {
                            return t() / n
                        }
                    },
                    irwinHall: function(n) {
                        return function() {
                            for (var t = 0, e = 0; n > e; e++)
                                t += Math.random();
                            return t
                        }
                    }
                },
                oo.scale = {};
            var _c = {
                floor: _,
                ceil: _
            };
            oo.scale.linear = function() {
                return Bu([0, 1], [0, 1], _r, !1)
            }
            ;
            var Sc = {
                s: 1,
                g: 1,
                p: 1,
                r: 1,
                e: 1
            };
            oo.scale.log = function() {
                return ei(oo.scale.linear().domain([0, 1]), 10, !0, [1, 10])
            }
            ;
            var kc = oo.format(".0e")
                , Nc = {
                floor: function(n) {
                    return -Math.ceil(-n)
                },
                ceil: function(n) {
                    return -Math.floor(-n)
                }
            };
            oo.scale.pow = function() {
                return ri(oo.scale.linear(), 1, [0, 1])
            }
                ,
                oo.scale.sqrt = function() {
                    return oo.scale.pow().exponent(.5)
                }
                ,
                oo.scale.ordinal = function() {
                    return ii([], {
                        t: "range",
                        a: [[]]
                    })
                }
                ,
                oo.scale.category10 = function() {
                    return oo.scale.ordinal().range(Ec)
                }
                ,
                oo.scale.category20 = function() {
                    return oo.scale.ordinal().range(Ac)
                }
                ,
                oo.scale.category20b = function() {
                    return oo.scale.ordinal().range(Cc)
                }
                ,
                oo.scale.category20c = function() {
                    return oo.scale.ordinal().range(zc)
                }
            ;
            var Ec = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(kn)
                , Ac = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(kn)
                , Cc = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(kn)
                , zc = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(kn);
            oo.scale.quantile = function() {
                return oi([], [])
            }
                ,
                oo.scale.quantize = function() {
                    return ai(0, 1, [0, 1])
                }
                ,
                oo.scale.threshold = function() {
                    return ci([.5], [0, 1])
                }
                ,
                oo.scale.identity = function() {
                    return li([0, 1])
                }
                ,
                oo.svg = {},
                oo.svg.arc = function() {
                    function n() {
                        var n = Math.max(0, +e.apply(this, arguments))
                            , l = Math.max(0, +r.apply(this, arguments))
                            , s = o.apply(this, arguments) - Ho
                            , f = a.apply(this, arguments) - Ho
                            , h = Math.abs(f - s)
                            , g = s > f ? 0 : 1;
                        if (n > l && (p = l,
                                l = n,
                                n = p),
                            h >= Fo)
                            return t(l, g) + (n ? t(n, 1 - g) : "") + "Z";
                        var p, v, d, m, y, M, x, b, w, _, S, k, N = 0, E = 0, A = [];
                        if ((m = (+c.apply(this, arguments) || 0) / 2) && (d = i === qc ? Math.sqrt(n * n + l * l) : +i.apply(this, arguments),
                            g || (E *= -1),
                            l && (E = an(d / l * Math.sin(m))),
                            n && (N = an(d / n * Math.sin(m)))),
                                l) {
                            y = l * Math.cos(s + E),
                                M = l * Math.sin(s + E),
                                x = l * Math.cos(f - E),
                                b = l * Math.sin(f - E);
                            var C = Math.abs(f - s - 2 * E) <= jo ? 0 : 1;
                            if (E && di(y, M, x, b) === g ^ C) {
                                var z = (s + f) / 2;
                                y = l * Math.cos(z),
                                    M = l * Math.sin(z),
                                    x = b = null
                            }
                        } else
                            y = M = 0;
                        if (n) {
                            w = n * Math.cos(f - N),
                                _ = n * Math.sin(f - N),
                                S = n * Math.cos(s + N),
                                k = n * Math.sin(s + N);
                            var q = Math.abs(s - f + 2 * N) <= jo ? 0 : 1;
                            if (N && di(w, _, S, k) === 1 - g ^ q) {
                                var L = (s + f) / 2;
                                w = n * Math.cos(L),
                                    _ = n * Math.sin(L),
                                    S = k = null
                            }
                        } else
                            w = _ = 0;
                        if ((p = Math.min(Math.abs(l - n) / 2, +u.apply(this, arguments))) > .001) {
                            v = l > n ^ g ? 0 : 1;
                            var T = null == S ? [w, _] : null == x ? [y, M] : Ue([y, M], [S, k], [x, b], [w, _])
                                , R = y - T[0]
                                , D = M - T[1]
                                , P = x - T[0]
                                , j = b - T[1]
                                , U = 1 / Math.sin(Math.acos((R * P + D * j) / (Math.sqrt(R * R + D * D) * Math.sqrt(P * P + j * j))) / 2)
                                , F = Math.sqrt(T[0] * T[0] + T[1] * T[1]);
                            if (null != x) {
                                var H = Math.min(p, (l - F) / (U + 1))
                                    , O = mi(null == S ? [w, _] : [S, k], [y, M], l, H, g)
                                    , I = mi([x, b], [w, _], l, H, g);
                                p === H ? A.push("M", O[0], "A", H, ",", H, " 0 0,", v, " ", O[1], "A", l, ",", l, " 0 ", 1 - g ^ di(O[1][0], O[1][1], I[1][0], I[1][1]), ",", g, " ", I[1], "A", H, ",", H, " 0 0,", v, " ", I[0]) : A.push("M", O[0], "A", H, ",", H, " 0 1,", v, " ", I[0])
                            } else
                                A.push("M", y, ",", M);
                            if (null != S) {
                                var Y = Math.min(p, (n - F) / (U - 1))
                                    , Z = mi([y, M], [S, k], n, -Y, g)
                                    , V = mi([w, _], null == x ? [y, M] : [x, b], n, -Y, g);
                                p === Y ? A.push("L", V[0], "A", Y, ",", Y, " 0 0,", v, " ", V[1], "A", n, ",", n, " 0 ", g ^ di(V[1][0], V[1][1], Z[1][0], Z[1][1]), ",", 1 - g, " ", Z[1], "A", Y, ",", Y, " 0 0,", v, " ", Z[0]) : A.push("L", V[0], "A", Y, ",", Y, " 0 0,", v, " ", Z[0])
                            } else
                                A.push("L", w, ",", _)
                        } else
                            A.push("M", y, ",", M),
                            null != x && A.push("A", l, ",", l, " 0 ", C, ",", g, " ", x, ",", b),
                                A.push("L", w, ",", _),
                            null != S && A.push("A", n, ",", n, " 0 ", q, ",", 1 - g, " ", S, ",", k);
                        return A.push("Z"),
                            A.join("")
                    }
                    function t(n, t) {
                        return "M0," + n + "A" + n + "," + n + " 0 1," + t + " 0," + -n + "A" + n + "," + n + " 0 1," + t + " 0," + n
                    }
                    var e = fi
                        , r = hi
                        , u = si
                        , i = qc
                        , o = gi
                        , a = pi
                        , c = vi;
                    return n.innerRadius = function(t) {
                        return arguments.length ? (e = Ln(t),
                            n) : e
                    }
                        ,
                        n.outerRadius = function(t) {
                            return arguments.length ? (r = Ln(t),
                                n) : r
                        }
                        ,
                        n.cornerRadius = function(t) {
                            return arguments.length ? (u = Ln(t),
                                n) : u
                        }
                        ,
                        n.padRadius = function(t) {
                            return arguments.length ? (i = t == qc ? qc : Ln(t),
                                n) : i
                        }
                        ,
                        n.startAngle = function(t) {
                            return arguments.length ? (o = Ln(t),
                                n) : o
                        }
                        ,
                        n.endAngle = function(t) {
                            return arguments.length ? (a = Ln(t),
                                n) : a
                        }
                        ,
                        n.padAngle = function(t) {
                            return arguments.length ? (c = Ln(t),
                                n) : c
                        }
                        ,
                        n.centroid = function() {
                            var n = (+e.apply(this, arguments) + +r.apply(this, arguments)) / 2
                                , t = (+o.apply(this, arguments) + +a.apply(this, arguments)) / 2 - Ho;
                            return [Math.cos(t) * n, Math.sin(t) * n]
                        }
                        ,
                        n
                }
            ;
            var qc = "auto";
            oo.svg.line = function() {
                return yi(_)
            }
            ;
            var Lc = oo.map({
                linear: Mi,
                "linear-closed": xi,
                step: bi,
                "step-before": wi,
                "step-after": _i,
                basis: Ci,
                "basis-open": zi,
                "basis-closed": qi,
                bundle: Li,
                cardinal: Ni,
                "cardinal-open": Si,
                "cardinal-closed": ki,
                monotone: Ui
            });
            Lc.forEach(function(n, t) {
                t.key = n,
                    t.closed = /-closed$/.test(n)
            });
            var Tc = [0, 2 / 3, 1 / 3, 0]
                , Rc = [0, 1 / 3, 2 / 3, 0]
                , Dc = [0, 1 / 6, 2 / 3, 1 / 6];
            oo.svg.line.radial = function() {
                var n = yi(Fi);
                return n.radius = n.x,
                    delete n.x,
                    n.angle = n.y,
                    delete n.y,
                    n
            }
                ,
                wi.reverse = _i,
                _i.reverse = wi,
                oo.svg.area = function() {
                    return Hi(_)
                }
                ,
                oo.svg.area.radial = function() {
                    var n = Hi(Fi);
                    return n.radius = n.x,
                        delete n.x,
                        n.innerRadius = n.x0,
                        delete n.x0,
                        n.outerRadius = n.x1,
                        delete n.x1,
                        n.angle = n.y,
                        delete n.y,
                        n.startAngle = n.y0,
                        delete n.y0,
                        n.endAngle = n.y1,
                        delete n.y1,
                        n
                }
                ,
                oo.svg.chord = function() {
                    function n(n, a) {
                        var c = t(this, i, n, a)
                            , l = t(this, o, n, a);
                        return "M" + c.p0 + r(c.r, c.p1, c.a1 - c.a0) + (e(c, l) ? u(c.r, c.p1, c.r, c.p0) : u(c.r, c.p1, l.r, l.p0) + r(l.r, l.p1, l.a1 - l.a0) + u(l.r, l.p1, c.r, c.p0)) + "Z"
                    }
                    function t(n, t, e, r) {
                        var u = t.call(n, e, r)
                            , i = a.call(n, u, r)
                            , o = c.call(n, u, r) - Ho
                            , s = l.call(n, u, r) - Ho;
                        return {
                            r: i,
                            a0: o,
                            a1: s,
                            p0: [i * Math.cos(o), i * Math.sin(o)],
                            p1: [i * Math.cos(s), i * Math.sin(s)]
                        }
                    }
                    function e(n, t) {
                        return n.a0 == t.a0 && n.a1 == t.a1
                    }
                    function r(n, t, e) {
                        return "A" + n + "," + n + " 0 " + +(e > jo) + ",1 " + t
                    }
                    function u(n, t, e, r) {
                        return "Q 0,0 " + r
                    }
                    var i = _e
                        , o = Se
                        , a = Oi
                        , c = gi
                        , l = pi;
                    return n.radius = function(t) {
                        return arguments.length ? (a = Ln(t),
                            n) : a
                    }
                        ,
                        n.source = function(t) {
                            return arguments.length ? (i = Ln(t),
                                n) : i
                        }
                        ,
                        n.target = function(t) {
                            return arguments.length ? (o = Ln(t),
                                n) : o
                        }
                        ,
                        n.startAngle = function(t) {
                            return arguments.length ? (c = Ln(t),
                                n) : c
                        }
                        ,
                        n.endAngle = function(t) {
                            return arguments.length ? (l = Ln(t),
                                n) : l
                        }
                        ,
                        n
                }
                ,
                oo.svg.diagonal = function() {
                    function n(n, u) {
                        var i = t.call(this, n, u)
                            , o = e.call(this, n, u)
                            , a = (i.y + o.y) / 2
                            , c = [i, {
                            x: i.x,
                            y: a
                        }, {
                            x: o.x,
                            y: a
                        }, o];
                        return c = c.map(r),
                        "M" + c[0] + "C" + c[1] + " " + c[2] + " " + c[3]
                    }
                    var t = _e
                        , e = Se
                        , r = Ii;
                    return n.source = function(e) {
                        return arguments.length ? (t = Ln(e),
                            n) : t
                    }
                        ,
                        n.target = function(t) {
                            return arguments.length ? (e = Ln(t),
                                n) : e
                        }
                        ,
                        n.projection = function(t) {
                            return arguments.length ? (r = t,
                                n) : r
                        }
                        ,
                        n
                }
                ,
                oo.svg.diagonal.radial = function() {
                    var n = oo.svg.diagonal()
                        , t = Ii
                        , e = n.projection;
                    return n.projection = function(n) {
                        return arguments.length ? e(Yi(t = n)) : t
                    }
                        ,
                        n
                }
                ,
                oo.svg.symbol = function() {
                    function n(n, r) {
                        return (Pc.get(t.call(this, n, r)) || Xi)(e.call(this, n, r))
                    }
                    var t = Vi
                        , e = Zi;
                    return n.type = function(e) {
                        return arguments.length ? (t = Ln(e),
                            n) : t
                    }
                        ,
                        n.size = function(t) {
                            return arguments.length ? (e = Ln(t),
                                n) : e
                        }
                        ,
                        n
                }
            ;
            var Pc = oo.map({
                circle: Xi,
                cross: function(n) {
                    var t = Math.sqrt(n / 5) / 2;
                    return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"
                },
                diamond: function(n) {
                    var t = Math.sqrt(n / (2 * Uc))
                        , e = t * Uc;
                    return "M0," + -t + "L" + e + ",0 0," + t + " " + -e + ",0Z"
                },
                square: function(n) {
                    var t = Math.sqrt(n) / 2;
                    return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"
                },
                "triangle-down": function(n) {
                    var t = Math.sqrt(n / jc)
                        , e = t * jc / 2;
                    return "M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z"
                },
                "triangle-up": function(n) {
                    var t = Math.sqrt(n / jc)
                        , e = t * jc / 2;
                    return "M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z"
                }
            });
            oo.svg.symbolTypes = Pc.keys();
            var jc = Math.sqrt(3)
                , Uc = Math.tan(30 * Oo);
            Ao.transition = function(n) {
                for (var t, e, r = Fc || ++Yc, u = Ki(n), i = [], o = Hc || {
                        time: Date.now(),
                        ease: zr,
                        delay: 0,
                        duration: 250
                    }, a = -1, c = this.length; ++a < c; ) {
                    i.push(t = []);
                    for (var l = this[a], s = -1, f = l.length; ++s < f; )
                        (e = l[s]) && Gi(e, s, u, r, o),
                            t.push(e)
                }
                return Bi(i, u, r)
            }
                ,
                Ao.interrupt = function(n) {
                    return this.each(null == n ? Oc : $i(Ki(n)))
                }
            ;
            var Fc, Hc, Oc = $i(Ki()), Ic = [], Yc = 0;
            Ic.call = Ao.call,
                Ic.empty = Ao.empty,
                Ic.node = Ao.node,
                Ic.size = Ao.size,
                oo.transition = function(n, t) {
                    return n && n.transition ? Fc ? n.transition(t) : n : oo.selection().transition(n)
                }
                ,
                oo.transition.prototype = Ic,
                Ic.select = function(n) {
                    var t, e, r, u = this.id, i = this.namespace, o = [];
                    n = T(n);
                    for (var a = -1, c = this.length; ++a < c; ) {
                        o.push(t = []);
                        for (var l = this[a], s = -1, f = l.length; ++s < f; )
                            (r = l[s]) && (e = n.call(r, r.__data__, s, a)) ? ("__data__"in r && (e.__data__ = r.__data__),
                                Gi(e, s, i, u, r[i][u]),
                                t.push(e)) : t.push(null )
                    }
                    return Bi(o, i, u)
                }
                ,
                Ic.selectAll = function(n) {
                    var t, e, r, u, i, o = this.id, a = this.namespace, c = [];
                    n = R(n);
                    for (var l = -1, s = this.length; ++l < s; )
                        for (var f = this[l], h = -1, g = f.length; ++h < g; )
                            if (r = f[h]) {
                                i = r[a][o],
                                    e = n.call(r, r.__data__, h, l),
                                    c.push(t = []);
                                for (var p = -1, v = e.length; ++p < v; )
                                    (u = e[p]) && Gi(u, p, a, o, i),
                                        t.push(u)
                            }
                    return Bi(c, a, o)
                }
                ,
                Ic.filter = function(n) {
                    var t, e, r, u = [];
                    "function" != typeof n && (n = X(n));
                    for (var i = 0, o = this.length; o > i; i++) {
                        u.push(t = []);
                        for (var e = this[i], a = 0, c = e.length; c > a; a++)
                            (r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r)
                    }
                    return Bi(u, this.namespace, this.id)
                }
                ,
                Ic.tween = function(n, t) {
                    var e = this.id
                        , r = this.namespace;
                    return arguments.length < 2 ? this.node()[r][e].tween.get(n) : B(this, null == t ? function(t) {
                            t[r][e].tween.remove(n)
                        }
                            : function(u) {
                            u[r][e].tween.set(n, t)
                        }
                    )
                }
                ,
                Ic.attr = function(n, t) {
                    function e() {
                        this.removeAttribute(a)
                    }
                    function r() {
                        this.removeAttributeNS(a.space, a.local)
                    }
                    function u(n) {
                        return null == n ? e : (n += "",
                                function() {
                                    var t, e = this.getAttribute(a);
                                    return e !== n && (t = o(e, n),
                                                function(n) {
                                                    this.setAttribute(a, t(n))
                                                }
                                        )
                                }
                        )
                    }
                    function i(n) {
                        return null == n ? r : (n += "",
                                function() {
                                    var t, e = this.getAttributeNS(a.space, a.local);
                                    return e !== n && (t = o(e, n),
                                                function(n) {
                                                    this.setAttributeNS(a.space, a.local, t(n))
                                                }
                                        )
                                }
                        )
                    }
                    if (arguments.length < 2) {
                        for (t in n)
                            this.attr(t, n[t]);
                        return this
                    }
                    var o = "transform" == n ? Xr : _r
                        , a = oo.ns.qualify(n);
                    return Ji(this, "attr." + n, t, a.local ? i : u)
                }
                ,
                Ic.attrTween = function(n, t) {
                    function e(n, e) {
                        var r = t.call(this, n, e, this.getAttribute(u));
                        return r && function(n) {
                                this.setAttribute(u, r(n))
                            }
                    }
                    function r(n, e) {
                        var r = t.call(this, n, e, this.getAttributeNS(u.space, u.local));
                        return r && function(n) {
                                this.setAttributeNS(u.space, u.local, r(n))
                            }
                    }
                    var u = oo.ns.qualify(n);
                    return this.tween("attr." + n, u.local ? r : e)
                }
                ,
                Ic.style = function(n, t, e) {
                    function r() {
                        this.style.removeProperty(n)
                    }
                    function u(t) {
                        return null == t ? r : (t += "",
                                function() {
                                    var r, u = o(this).getComputedStyle(this, null ).getPropertyValue(n);
                                    return u !== t && (r = _r(u, t),
                                                function(t) {
                                                    this.style.setProperty(n, r(t), e)
                                                }
                                        )
                                }
                        )
                    }
                    var i = arguments.length;
                    if (3 > i) {
                        if ("string" != typeof n) {
                            2 > i && (t = "");
                            for (e in n)
                                this.style(e, n[e], t);
                            return this
                        }
                        e = ""
                    }
                    return Ji(this, "style." + n, t, u)
                }
                ,
                Ic.styleTween = function(n, t, e) {
                    function r(r, u) {
                        var i = t.call(this, r, u, o(this).getComputedStyle(this, null ).getPropertyValue(n));
                        return i && function(t) {
                                this.style.setProperty(n, i(t), e)
                            }
                    }
                    return arguments.length < 3 && (e = ""),
                        this.tween("style." + n, r)
                }
                ,
                Ic.text = function(n) {
                    return Ji(this, "text", n, Wi)
                }
                ,
                Ic.remove = function() {
                    var n = this.namespace;
                    return this.each("end.transition", function() {
                        var t;
                        this[n].count < 2 && (t = this.parentNode) && t.removeChild(this)
                    })
                }
                ,
                Ic.ease = function(n) {
                    var t = this.id
                        , e = this.namespace;
                    return arguments.length < 1 ? this.node()[e][t].ease : ("function" != typeof n && (n = oo.ease.apply(oo, arguments)),
                        B(this, function(r) {
                            r[e][t].ease = n
                        }))
                }
                ,
                Ic.delay = function(n) {
                    var t = this.id
                        , e = this.namespace;
                    return arguments.length < 1 ? this.node()[e][t].delay : B(this, "function" == typeof n ? function(r, u, i) {
                        r[e][t].delay = +n.call(r, r.__data__, u, i)
                    }
                        : (n = +n,
                            function(r) {
                                r[e][t].delay = n
                            }
                    ))
                }
                ,
                Ic.duration = function(n) {
                    var t = this.id
                        , e = this.namespace;
                    return arguments.length < 1 ? this.node()[e][t].duration : B(this, "function" == typeof n ? function(r, u, i) {
                        r[e][t].duration = Math.max(1, n.call(r, r.__data__, u, i))
                    }
                        : (n = Math.max(1, n),
                            function(r) {
                                r[e][t].duration = n
                            }
                    ))
                }
                ,
                Ic.each = function(n, t) {
                    var e = this.id
                        , r = this.namespace;
                    if (arguments.length < 2) {
                        var u = Hc
                            , i = Fc;
                        try {
                            Fc = e,
                                B(this, function(t, u, i) {
                                    Hc = t[r][e],
                                        n.call(t, t.__data__, u, i)
                                })
                        } finally {
                            Hc = u,
                                Fc = i
                        }
                    } else
                        B(this, function(u) {
                            var i = u[r][e];
                            (i.event || (i.event = oo.dispatch("start", "end", "interrupt"))).on(n, t)
                        });
                    return this
                }
                ,
                Ic.transition = function() {
                    for (var n, t, e, r, u = this.id, i = ++Yc, o = this.namespace, a = [], c = 0, l = this.length; l > c; c++) {
                        a.push(n = []);
                        for (var t = this[c], s = 0, f = t.length; f > s; s++)
                            (e = t[s]) && (r = e[o][u],
                                Gi(e, s, o, i, {
                                    time: r.time,
                                    ease: r.ease,
                                    delay: r.delay + r.duration,
                                    duration: r.duration
                                })),
                                n.push(e)
                    }
                    return Bi(a, o, i)
                }
                ,
                oo.svg.axis = function() {
                    function n(n) {
                        n.each(function() {
                            var n, l = oo.select(this), s = this.__chart__ || e, f = this.__chart__ = e.copy(), h = null == c ? f.ticks ? f.ticks.apply(f, a) : f.domain() : c, g = null == t ? f.tickFormat ? f.tickFormat.apply(f, a) : _ : t, p = l.selectAll(".tick").data(h, f), v = p.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Do), d = oo.transition(p.exit()).style("opacity", Do).remove(), m = oo.transition(p.order()).style("opacity", 1), y = Math.max(u, 0) + o, M = Yu(f), x = l.selectAll(".domain").data([0]), b = (x.enter().append("path").attr("class", "domain"),
                                oo.transition(x));
                            v.append("line"),
                                v.append("text");
                            var w, S, k, N, E = v.select("line"), A = m.select("line"), C = p.select("text").text(g), z = v.select("text"), q = m.select("text"), L = "top" === r || "left" === r ? -1 : 1;
                            if ("bottom" === r || "top" === r ? (n = Qi,
                                    w = "x",
                                    k = "y",
                                    S = "x2",
                                    N = "y2",
                                    C.attr("dy", 0 > L ? "0em" : ".71em").style("text-anchor", "middle"),
                                    b.attr("d", "M" + M[0] + "," + L * i + "V0H" + M[1] + "V" + L * i)) : (n = no,
                                    w = "y",
                                    k = "x",
                                    S = "y2",
                                    N = "x2",
                                    C.attr("dy", ".32em").style("text-anchor", 0 > L ? "end" : "start"),
                                    b.attr("d", "M" + L * i + "," + M[0] + "H0V" + M[1] + "H" + L * i)),
                                    E.attr(N, L * u),
                                    z.attr(k, L * y),
                                    A.attr(S, 0).attr(N, L * u),
                                    q.attr(w, 0).attr(k, L * y),
                                    f.rangeBand) {
                                var T = f
                                    , R = T.rangeBand() / 2;
                                s = f = function(n) {
                                    return T(n) + R
                                }
                            } else
                                s.rangeBand ? s = f : d.call(n, f, s);
                            v.call(n, s, f),
                                m.call(n, f, f)
                        })
                    }
                    var t, e = oo.scale.linear(), r = Zc, u = 6, i = 6, o = 3, a = [10], c = null ;
                    return n.scale = function(t) {
                        return arguments.length ? (e = t,
                            n) : e
                    }
                        ,
                        n.orient = function(t) {
                            return arguments.length ? (r = t in Vc ? t + "" : Zc,
                                n) : r
                        }
                        ,
                        n.ticks = function() {
                            return arguments.length ? (a = arguments,
                                n) : a
                        }
                        ,
                        n.tickValues = function(t) {
                            return arguments.length ? (c = t,
                                n) : c
                        }
                        ,
                        n.tickFormat = function(e) {
                            return arguments.length ? (t = e,
                                n) : t
                        }
                        ,
                        n.tickSize = function(t) {
                            var e = arguments.length;
                            return e ? (u = +t,
                                i = +arguments[e - 1],
                                n) : u
                        }
                        ,
                        n.innerTickSize = function(t) {
                            return arguments.length ? (u = +t,
                                n) : u
                        }
                        ,
                        n.outerTickSize = function(t) {
                            return arguments.length ? (i = +t,
                                n) : i
                        }
                        ,
                        n.tickPadding = function(t) {
                            return arguments.length ? (o = +t,
                                n) : o
                        }
                        ,
                        n.tickSubdivide = function() {
                            return arguments.length && n
                        }
                        ,
                        n
                }
            ;
            var Zc = "bottom"
                , Vc = {
                top: 1,
                right: 1,
                bottom: 1,
                left: 1
            };
            oo.svg.brush = function() {
                function n(i) {
                    i.each(function() {
                        var i = oo.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", u).on("touchstart.brush", u)
                            , o = i.selectAll(".background").data([0]);
                        o.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"),
                            i.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                        var a = i.selectAll(".resize").data(v, _);
                        a.exit().remove(),
                            a.enter().append("g").attr("class", function(n) {
                                return "resize " + n
                            }).style("cursor", function(n) {
                                return Xc[n]
                            }).append("rect").attr("x", function(n) {
                                return /[ew]$/.test(n) ? -3 : null
                            }).attr("y", function(n) {
                                return /^[ns]/.test(n) ? -3 : null
                            }).attr("width", 6).attr("height", 6).style("visibility", "hidden"),
                            a.style("display", n.empty() ? "none" : null );
                        var c, f = oo.transition(i), h = oo.transition(o);
                        l && (c = Yu(l),
                            h.attr("x", c[0]).attr("width", c[1] - c[0]),
                            e(f)),
                        s && (c = Yu(s),
                            h.attr("y", c[0]).attr("height", c[1] - c[0]),
                            r(f)),
                            t(f)
                    })
                }
                function t(n) {
                    n.selectAll(".resize").attr("transform", function(n) {
                        return "translate(" + f[+/e$/.test(n)] + "," + h[+/^s/.test(n)] + ")"
                    })
                }
                function e(n) {
                    n.select(".extent").attr("x", f[0]),
                        n.selectAll(".extent,.n>rect,.s>rect").attr("width", f[1] - f[0])
                }
                function r(n) {
                    n.select(".extent").attr("y", h[0]),
                        n.selectAll(".extent,.e>rect,.w>rect").attr("height", h[1] - h[0])
                }
                function u() {
                    function u() {
                        32 == oo.event.keyCode && (A || (M = null ,
                            q[0] -= f[1],
                            q[1] -= h[1],
                            A = 2),
                            C())
                    }
                    function v() {
                        32 == oo.event.keyCode && 2 == A && (q[0] += f[1],
                            q[1] += h[1],
                            A = 0,
                            C())
                    }
                    function d() {
                        var n = oo.mouse(b)
                            , u = !1;
                        x && (n[0] += x[0],
                            n[1] += x[1]),
                        A || (oo.event.altKey ? (M || (M = [(f[0] + f[1]) / 2, (h[0] + h[1]) / 2]),
                            q[0] = f[+(n[0] < M[0])],
                            q[1] = h[+(n[1] < M[1])]) : M = null ),
                        N && m(n, l, 0) && (e(S),
                            u = !0),
                        E && m(n, s, 1) && (r(S),
                            u = !0),
                        u && (t(S),
                            _({
                                type: "brush",
                                mode: A ? "move" : "resize"
                            }))
                    }
                    function m(n, t, e) {
                        var r, u, o = Yu(t), c = o[0], l = o[1], s = q[e], v = e ? h : f, d = v[1] - v[0];
                        return A && (c -= s,
                            l -= d + s),
                            r = (e ? p : g) ? Math.max(c, Math.min(l, n[e])) : n[e],
                            A ? u = (r += s) + d : (M && (s = Math.max(c, Math.min(l, 2 * M[e] - r))),
                                r > s ? (u = r,
                                    r = s) : u = s),
                            v[0] != r || v[1] != u ? (e ? a = null : i = null ,
                                v[0] = r,
                                v[1] = u,
                                !0) : void 0
                    }
                    function y() {
                        d(),
                            S.style("pointer-events", "all").selectAll(".resize").style("display", n.empty() ? "none" : null ),
                            oo.select("body").style("cursor", null ),
                            L.on("mousemove.brush", null ).on("mouseup.brush", null ).on("touchmove.brush", null ).on("touchend.brush", null ).on("keydown.brush", null ).on("keyup.brush", null ),
                            z(),
                            _({
                                type: "brushend"
                            })
                    }
                    var M, x, b = this, w = oo.select(oo.event.target), _ = c.of(b, arguments), S = oo.select(b), k = w.datum(), N = !/^(n|s)$/.test(k) && l, E = !/^(e|w)$/.test(k) && s, A = w.classed("extent"), z = nn(b), q = oo.mouse(b), L = oo.select(o(b)).on("keydown.brush", u).on("keyup.brush", v);
                    if (oo.event.changedTouches ? L.on("touchmove.brush", d).on("touchend.brush", y) : L.on("mousemove.brush", d).on("mouseup.brush", y),
                            S.interrupt().selectAll("*").interrupt(),
                            A)
                        q[0] = f[0] - q[0],
                            q[1] = h[0] - q[1];
                    else if (k) {
                        var T = +/w$/.test(k)
                            , R = +/^n/.test(k);
                        x = [f[1 - T] - q[0], h[1 - R] - q[1]],
                            q[0] = f[T],
                            q[1] = h[R]
                    } else
                        oo.event.altKey && (M = q.slice());
                    S.style("pointer-events", "none").selectAll(".resize").style("display", null ),
                        oo.select("body").style("cursor", w.style("cursor")),
                        _({
                            type: "brushstart"
                        }),
                        d()
                }
                var i, a, c = q(n, "brushstart", "brush", "brushend"), l = null , s = null , f = [0, 0], h = [0, 0], g = !0, p = !0, v = $c[0];
                return n.event = function(n) {
                    n.each(function() {
                        var n = c.of(this, arguments)
                            , t = {
                            x: f,
                            y: h,
                            i: i,
                            j: a
                        }
                            , e = this.__chart__ || t;
                        this.__chart__ = t,
                            Fc ? oo.select(this).transition().each("start.brush", function() {
                                i = e.i,
                                    a = e.j,
                                    f = e.x,
                                    h = e.y,
                                    n({
                                        type: "brushstart"
                                    })
                            }).tween("brush:brush", function() {
                                var e = Sr(f, t.x)
                                    , r = Sr(h, t.y);
                                return i = a = null ,
                                    function(u) {
                                        f = t.x = e(u),
                                            h = t.y = r(u),
                                            n({
                                                type: "brush",
                                                mode: "resize"
                                            })
                                    }
                            }).each("end.brush", function() {
                                i = t.i,
                                    a = t.j,
                                    n({
                                        type: "brush",
                                        mode: "resize"
                                    }),
                                    n({
                                        type: "brushend"
                                    })
                            }) : (n({
                                type: "brushstart"
                            }),
                                n({
                                    type: "brush",
                                    mode: "resize"
                                }),
                                n({
                                    type: "brushend"
                                }))
                    })
                }
                    ,
                    n.x = function(t) {
                        return arguments.length ? (l = t,
                            v = $c[!l << 1 | !s],
                            n) : l
                    }
                    ,
                    n.y = function(t) {
                        return arguments.length ? (s = t,
                            v = $c[!l << 1 | !s],
                            n) : s
                    }
                    ,
                    n.clamp = function(t) {
                        return arguments.length ? (l && s ? (g = !!t[0],
                            p = !!t[1]) : l ? g = !!t : s && (p = !!t),
                            n) : l && s ? [g, p] : l ? g : s ? p : null
                    }
                    ,
                    n.extent = function(t) {
                        var e, r, u, o, c;
                        return arguments.length ? (l && (e = t[0],
                            r = t[1],
                        s && (e = e[0],
                            r = r[0]),
                            i = [e, r],
                        l.invert && (e = l(e),
                            r = l(r)),
                        e > r && (c = e,
                            e = r,
                            r = c),
                        (e != f[0] || r != f[1]) && (f = [e, r])),
                        s && (u = t[0],
                            o = t[1],
                        l && (u = u[1],
                            o = o[1]),
                            a = [u, o],
                        s.invert && (u = s(u),
                            o = s(o)),
                        u > o && (c = u,
                            u = o,
                            o = c),
                        (u != h[0] || o != h[1]) && (h = [u, o])),
                            n) : (l && (i ? (e = i[0],
                            r = i[1]) : (e = f[0],
                            r = f[1],
                        l.invert && (e = l.invert(e),
                            r = l.invert(r)),
                        e > r && (c = e,
                            e = r,
                            r = c))),
                        s && (a ? (u = a[0],
                            o = a[1]) : (u = h[0],
                            o = h[1],
                        s.invert && (u = s.invert(u),
                            o = s.invert(o)),
                        u > o && (c = u,
                            u = o,
                            o = c))),
                            l && s ? [[e, u], [r, o]] : l ? [e, r] : s && [u, o])
                    }
                    ,
                    n.clear = function() {
                        return n.empty() || (f = [0, 0],
                            h = [0, 0],
                            i = a = null ),
                            n
                    }
                    ,
                    n.empty = function() {
                        return !!l && f[0] == f[1] || !!s && h[0] == h[1]
                    }
                    ,
                    oo.rebind(n, c, "on")
            }
            ;
            var Xc = {
                n: "ns-resize",
                e: "ew-resize",
                s: "ns-resize",
                w: "ew-resize",
                nw: "nwse-resize",
                ne: "nesw-resize",
                se: "nwse-resize",
                sw: "nesw-resize"
            }
                , $c = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []]
                , Bc = ga.format = Ma.timeFormat
                , Jc = Bc.utc
                , Wc = Jc("%Y-%m-%dT%H:%M:%S.%LZ");
            Bc.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? to : Wc,
                to.parse = function(n) {
                    var t = new Date(n);
                    return isNaN(t) ? null : t
                }
                ,
                to.toString = Wc.toString,
                ga.second = Vn(function(n) {
                    return new pa(1e3 * Math.floor(n / 1e3))
                }, function(n, t) {
                    n.setTime(n.getTime() + 1e3 * Math.floor(t))
                }, function(n) {
                    return n.getSeconds()
                }),
                ga.seconds = ga.second.range,
                ga.seconds.utc = ga.second.utc.range,
                ga.minute = Vn(function(n) {
                    return new pa(6e4 * Math.floor(n / 6e4))
                }, function(n, t) {
                    n.setTime(n.getTime() + 6e4 * Math.floor(t))
                }, function(n) {
                    return n.getMinutes()
                }),
                ga.minutes = ga.minute.range,
                ga.minutes.utc = ga.minute.utc.range,
                ga.hour = Vn(function(n) {
                    var t = n.getTimezoneOffset() / 60;
                    return new pa(36e5 * (Math.floor(n / 36e5 - t) + t))
                }, function(n, t) {
                    n.setTime(n.getTime() + 36e5 * Math.floor(t))
                }, function(n) {
                    return n.getHours()
                }),
                ga.hours = ga.hour.range,
                ga.hours.utc = ga.hour.utc.range,
                ga.month = Vn(function(n) {
                    return n = ga.day(n),
                        n.setDate(1),
                        n
                }, function(n, t) {
                    n.setMonth(n.getMonth() + t)
                }, function(n) {
                    return n.getMonth()
                }),
                ga.months = ga.month.range,
                ga.months.utc = ga.month.utc.range;
            var Kc = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6]
                , Gc = [[ga.second, 1], [ga.second, 5], [ga.second, 15], [ga.second, 30], [ga.minute, 1], [ga.minute, 5], [ga.minute, 15], [ga.minute, 30], [ga.hour, 1], [ga.hour, 3], [ga.hour, 6], [ga.hour, 12], [ga.day, 1], [ga.day, 2], [ga.week, 1], [ga.month, 1], [ga.month, 3], [ga.year, 1]]
                , Qc = Bc.multi([[".%L", function(n) {
                return n.getMilliseconds()
            }
            ], [":%S", function(n) {
                return n.getSeconds()
            }
            ], ["%I:%M", function(n) {
                return n.getMinutes()
            }
            ], ["%I %p", function(n) {
                return n.getHours()
            }
            ], ["%a %d", function(n) {
                return n.getDay() && 1 != n.getDate()
            }
            ], ["%b %d", function(n) {
                return 1 != n.getDate()
            }
            ], ["%B", function(n) {
                return n.getMonth()
            }
            ], ["%Y", Rt]])
                , nl = {
                range: function(n, t, e) {
                    return oo.range(Math.ceil(n / e) * e, +t, e).map(ro)
                },
                floor: _,
                ceil: _
            };
            Gc.year = ga.year,
                ga.scale = function() {
                    return eo(oo.scale.linear(), Gc, Qc)
                }
            ;
            var tl = Gc.map(function(n) {
                return [n[0].utc, n[1]]
            })
                , el = Jc.multi([[".%L", function(n) {
                return n.getUTCMilliseconds()
            }
            ], [":%S", function(n) {
                return n.getUTCSeconds()
            }
            ], ["%I:%M", function(n) {
                return n.getUTCMinutes()
            }
            ], ["%I %p", function(n) {
                return n.getUTCHours()
            }
            ], ["%a %d", function(n) {
                return n.getUTCDay() && 1 != n.getUTCDate()
            }
            ], ["%b %d", function(n) {
                return 1 != n.getUTCDate()
            }
            ], ["%B", function(n) {
                return n.getUTCMonth()
            }
            ], ["%Y", Rt]]);
            tl.year = ga.year.utc,
                ga.scale.utc = function() {
                    return eo(oo.scale.linear(), tl, el)
                }
                ,
                oo.text = Tn(function(n) {
                    return n.responseText
                }),
                oo.json = function(n, t) {
                    return Rn(n, "application/json", uo, t)
                }
                ,
                oo.html = function(n, t) {
                    return Rn(n, "text/html", io, t)
                }
                ,
                oo.xml = Tn(function(n) {
                    return n.responseXML
                }),
                r = oo,
                u = "function" == typeof r ? r.call(t, e, t, n) : r,
                !(void 0 !== u && (n.exports = u)),
                this.d3 = oo
        }()
    }
});

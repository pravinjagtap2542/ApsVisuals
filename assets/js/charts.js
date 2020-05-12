(function() {
    /*

        Copyright The Closure Library Authors.
        SPDX-License-Identifier: Apache-2.0
       */
    var a = "' of type ",
        aa = "CFInstall.js",
        ba = "CFInstall.min.js",
        ca = "SCRIPT",
        da = "Uneven number of arguments",
        ea = "annotatedtimeline",
        fa = "annotationchart",
        l = "array",
        p = "browserchart",
        q = "build/yuiloader/yuiloader-min.js",
        r = "build/yuiloader/yuiloader.js",
        ha = "corechart",
        ia = "dojo/dojo.js",
        ja = "dojo/dojo.js.uncompressed.js",
        t = "dojo/dojo.xd.js",
        u = "dojo/dojo.xd.js.uncompressed.js",
        ka = "dygraph",
        la = "ext-core-debug.js",
        w = "function",
        ma = "hasOwnProperty",
        na = "https://www.gstatic.cn/charts/%{version}/third_party/%{subdir}/%{filename}",
        oa = "https://www.gstatic.com/charts/%{version}/third_party/%{subdir}/%{filename}",
        x = "imagechart",
        y = "jquery-ui.js",
        z = "jquery-ui.min.js",
        A = "jquery.js",
        B = "jquery.min.js",
        C = "mootools-yui-compressed.js",
        D = "mootools.js",
        E = "number",
        F = "object",
        pa = "orgchart",
        qa = "pre-45",
        ra = "propertyIsEnumerable",
        G = "prototype.js",
        sa = "script",
        H = "scriptaculous.js",
        I = "string",
        ta = "swfobject_src.js",
        ua = "text/javascript",
        va = "toLocaleString",
        K = "ui",
        wa = "ui_base",
        L = "webfont.js",
        N = "webfont_debug.js",
        Aa = "webfontloader";

    function Ba() { return function(b) { return b } }

    function O() { return function() {} }

    function P(b) { return function() { return this[b] } }

    function Ca(b) { return function() { return b } }
    var Q, S = S || {};
    S.scope = {};
    S.Gt = function(b) { return b.raw = b };
    S.Ht = function(b, c) { b.raw = c; return b };
    S.Zk = function(b) { var c = 0; return function() { return c < b.length ? { done: !1, value: b[c++] } : { done: !0 } } };
    S.Yk = function(b) { return { next: S.Zk(b) } };
    S.Ed = function(b) { var c = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator]; return c ? c.call(b) : S.Yk(b) };
    S.Xk = function(b) { for (var c, d = []; !(c = b.next()).done;) d.push(c.value); return d };
    S.dd = function(b) { return b instanceof Array ? b : S.Xk(S.Ed(b)) };
    S.fu = function(b, c, d) { b instanceof String && (b = String(b)); for (var e = b.length, f = 0; f < e; f++) { var g = b[f]; if (c.call(d, g, f, b)) return { Em: f, Qo: g } } return { Em: -1, Qo: void 0 } };
    S.Ej = !1;
    S.jp = !1;
    S.kp = !1;
    S.Nr = !1;
    S.defineProperty = S.Ej || typeof Object.defineProperties == w ? Object.defineProperty : function(b, c, d) { b != Array.prototype && b != Object.prototype && (b[c] = d.value) };
    S.im = function(b) { b = [F == typeof window && window, F == typeof self && self, F == typeof global && global, b]; for (var c = 0; c < b.length; ++c) { var d = b[c]; if (d && d.Math == Math) return d } throw Error("Cannot find global object"); };
    S.global = S.im(this);
    S.Qc = function(b, c) {
        if (c) {
            var d = S.global;
            b = b.split(".");
            for (var e = 0; e < b.length - 1; e++) {
                var f = b[e];
                f in d || (d[f] = {});
                d = d[f]
            }
            b = b[b.length - 1];
            e = d[b];
            c = c(e);
            c != e && null != c && S.defineProperty(d, b, { configurable: !0, writable: !0, value: c })
        }
    };
    S.Pg = function(b, c, d) { if (null == b) throw new TypeError("The 'this' value for String.prototype." + d + " must not be null or undefined"); if (c instanceof RegExp) throw new TypeError("First argument to String.prototype." + d + " must not be a regular expression"); return b + "" };
    S.Qc("String.prototype.repeat", function(b) {
        return b ? b : function(c) {
            var d = S.Pg(this, null, "repeat");
            if (0 > c || 1342177279 < c) throw new RangeError("Invalid count value");
            c |= 0;
            for (var e = ""; c;)
                if (c & 1 && (e += d), c >>>= 1) d += d;
            return e
        }
    });
    S.ek = !1;
    S.Qc("Promise", function(b) {
        function c(h) {
            this.qa = g.Wa;
            this.Ga = void 0;
            this.ic = [];
            var m = this.ze();
            try { h(m.resolve, m.reject) } catch (n) { m.reject(n) }
        }

        function d() { this.ob = null }

        function e(h) { return h instanceof c ? h : new c(function(m) { m(h) }) }
        if (b && !S.ek) return b;
        d.prototype.Gg = function(h) {
            if (null == this.ob) {
                this.ob = [];
                var m = this;
                this.Hg(function() { m.Sl() })
            }
            this.ob.push(h)
        };
        var f = S.global.setTimeout;
        d.prototype.Hg = function(h) { f(h, 0) };
        d.prototype.Sl = function() {
            for (; this.ob && this.ob.length;) {
                var h = this.ob;
                this.ob = [];
                for (var m = 0; m < h.length; ++m) {
                    var n = h[m];
                    h[m] = null;
                    try { n() } catch (v) { this.kl(v) }
                }
            }
            this.ob = null
        };
        d.prototype.kl = function(h) { this.Hg(function() { throw h; }) };
        var g = { Wa: 0, lb: 1, Ia: 2 };
        c.prototype.ze = function() {
            function h(v) { return function(J) { n || (n = !0, v.call(m, J)) } }
            var m = this,
                n = !1;
            return { resolve: h(this.Sn), reject: h(this.mf) }
        };
        c.prototype.Sn = function(h) {
            if (h === this) this.mf(new TypeError("A Promise cannot resolve to itself"));
            else if (h instanceof c) this.po(h);
            else {
                a: switch (typeof h) {
                    case F:
                        var m = null != h;
                        break a;
                    case w:
                        m = !0;
                        break a;
                    default:
                        m = !1
                }
                m ? this.Rn(h) : this.oh(h)
            }
        };
        c.prototype.Rn = function(h) {
            var m = void 0;
            try { m = h.then } catch (n) { this.mf(n); return }
            typeof m == w ? this.qo(m, h) : this.oh(h)
        };
        c.prototype.mf = function(h) { this.ej(g.Ia, h) };
        c.prototype.oh = function(h) { this.ej(g.lb, h) };
        c.prototype.ej = function(h, m) {
            if (this.qa != g.Wa) throw Error("Cannot settle(" + h + ", " + m + "): Promise already settled in state" + this.qa);
            this.qa = h;
            this.Ga = m;
            this.Ul()
        };
        c.prototype.Ul = function() {
            if (null != this.ic) {
                for (var h = 0; h < this.ic.length; ++h) k.Gg(this.ic[h]);
                this.ic = null
            }
        };
        var k = new d;
        c.prototype.po = function(h) {
            var m = this.ze();
            h.fd(m.resolve, m.reject)
        };
        c.prototype.qo = function(h, m) { var n = this.ze(); try { h.call(m, n.resolve, n.reject) } catch (v) { n.reject(v) } };
        c.prototype.then = function(h, m) {
            function n(M, R) { return typeof M == w ? function(xa) { try { v(M(xa)) } catch (ya) { J(ya) } } : R }
            var v, J, za = new c(function(M, R) {
                v = M;
                J = R
            });
            this.fd(n(h, v), n(m, J));
            return za
        };
        c.prototype.catch = function(h) { return this.then(void 0, h) };
        c.prototype.fd = function(h, m) {
            function n() {
                switch (v.qa) {
                    case g.lb:
                        h(v.Ga);
                        break;
                    case g.Ia:
                        m(v.Ga);
                        break;
                    default:
                        throw Error("Unexpected state: " + v.qa);
                }
            }
            var v = this;
            null == this.ic ? k.Gg(n) : this.ic.push(n)
        };
        c.resolve = e;
        c.reject = function(h) { return new c(function(m, n) { n(h) }) };
        c.race = function(h) { return new c(function(m, n) { for (var v = S.Ed(h), J = v.next(); !J.done; J = v.next()) e(J.value).fd(m, n) }) };
        c.all = function(h) {
            var m = S.Ed(h),
                n = m.next();
            return n.done ? e([]) : new c(function(v, J) {
                function za(xa) {
                    return function(ya) {
                        M[xa] = ya;
                        R--;
                        0 == R && v(M)
                    }
                }
                var M = [],
                    R = 0;
                do M.push(void 0), R++, e(n.value).fd(za(M.length -
                    1), J), n = m.next(); while (!n.done)
            })
        };
        return c
    });
    S.Qc("Object.is", function(b) { return b ? b : function(c, d) { return c === d ? 0 !== c || 1 / c === 1 / d : c !== c && d !== d } });
    S.Qc("Array.prototype.includes", function(b) {
        return b ? b : function(c, d) {
            var e = this;
            e instanceof String && (e = String(e));
            var f = e.length;
            d = d || 0;
            for (0 > d && (d = Math.max(d + f, 0)); d < f; d++) { var g = e[d]; if (g === c || Object.is(g, c)) return !0 }
            return !1
        }
    });
    S.Qc("String.prototype.includes", function(b) { return b ? b : function(c, d) { return -1 !== S.Pg(this, c, "includes").indexOf(c, d || 0) } });
    var T = T || {};
    T.global = this || self;
    T.gh = function(b, c, d) {
        b = b.split(".");
        d = d || T.global;
        b[0] in d || "undefined" == typeof d.execScript || d.execScript("var " + b[0]);
        for (var e; b.length && (e = b.shift());) b.length || void 0 === c ? d = d[e] && d[e] !== Object.prototype[e] ? d[e] : d[e] = {} : d[e] = c
    };
    T.define = function(b, c) { return c };
    T.ck = 2012;
    T.ma = !0;
    T.R = "en";
    T.me = !0;
    T.Rr = !1;
    T.Zj = !T.ma;
    T.$p = !1;
    T.qw = function(b) {
        if (T.mi()) throw Error("goog.provide cannot be used within a module.");
        T.Ug(b)
    };
    T.Ug = function(b, c) { T.gh(b, c) };
    T.Rh = function() { null === T.Ae && (T.Ae = T.nm()); return T.Ae };
    T.rk = /^[\w+/_-]+[=]{0,2}$/;
    T.Ae = null;
    T.nm = function() { var b = T.global.document; return (b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && T.rk.test(b) ? b : "" };
    T.Qk = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
    T.module = function(b) {
        if (typeof b !== I || !b || -1 == b.search(T.Qk)) throw Error("Invalid module identifier");
        if (!T.li()) throw Error("Module " + b + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
        if (T.Da.Nc) throw Error("goog.module may only be called once per module.");
        T.Da.Nc = b
    };
    T.module.get = Ca(null);
    T.module.Iu = Ca(null);
    T.tc = { Wf: "es6", he: "goog" };
    T.Da = null;
    T.mi = function() { return T.li() || T.Mm() };
    T.li = function() { return !!T.Da && T.Da.type == T.tc.he };
    T.Mm = function() { if (T.Da && T.Da.type == T.tc.Wf) return !0; var b = T.global.$jscomp; return b ? typeof b.Je != w ? !1 : !!b.Je() : !1 };
    T.module.Be = function() { T.Da.Be = !0 };
    T.Nt = function(b) {
        if (T.Da) T.Da.Nc = b;
        else {
            var c = T.global.$jscomp;
            if (!c || typeof c.Je != w) throw Error('Module with namespace "' + b + '" has been loaded incorrectly.');
            c = c.Pn(c.Je());
            T.Hi[b] = { exports: c, type: T.tc.Wf, vn: b }
        }
    };
    T.jx = function(b) { if (T.Zj) throw b = b || "", Error("Importing test-only code into non-debug environment" + (b ? ": " + b : ".")); };
    T.lu = O();
    T.Jb = function(b) {
        b = b.split(".");
        for (var c = T.global, d = 0; d < b.length; d++)
            if (c = c[b[d]], null == c) return null;
        return c
    };
    T.Yu = function(b, c) { c = c || T.global; for (var d in b) c[d] = b[d] };
    T.Bs = O();
    T.Ox = !1;
    T.aq = !0;
    T.Ii = function(b) { T.global.console && T.global.console.error(b) };
    T.Pn = O();
    T.Bw = function() { return {} };
    T.ml = "";
    T.Mb = O();
    T.zs = function() { throw Error("unimplemented abstract method"); };
    T.Cs = O();
    T.jv = [];
    T.Wq = !0;
    T.Fk = T.ma;
    T.Hi = {};
    T.Mp = !1;
    T.ms = "detect";
    T.ip = !1;
    T.ns = "";
    T.Lk = "transpile.js";
    T.We = null;
    T.Oo = function() {
        if (null == T.We) {
            try { var b = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";') } catch (c) { b = !1 }
            T.We = b
        }
        return T.We
    };
    T.To = function(b) { return "(function(){" + b + "\n;})();\n" };
    T.Gi = function(b) {
        var c = T.Da;
        try {
            T.Da = { Nc: "", Be: !1, type: T.tc.he };
            if (T.Sa(b)) var d = b.call(void 0, {});
            else if (typeof b === I) T.Oo() && (b = T.To(b)), d = T.hn.call(void 0, b);
            else throw Error("Invalid module definition");
            var e = T.Da.Nc;
            if (typeof e === I && e) T.Da.Be ? T.Ug(e, d) : T.Fk && Object.seal && typeof d == F && null != d && Object.seal(d), T.Hi[e] = { exports: d, type: T.tc.he, vn: T.Da.Nc };
            else throw Error('Invalid module name "' + e + '"');
        } finally { T.Da = c }
    };
    T.hn = function(b) { eval(b); return {} };
    T.ew = function(b) { b = b.split("/"); for (var c = 0; c < b.length;) "." == b[c] ? b.splice(c, 1) : c && ".." == b[c] && b[c - 1] && ".." != b[c - 1] ? b.splice(--c, 2) : c++; return b.join("/") };
    T.dn = function(b) {
        if (T.global.Rj) return T.global.Rj(b);
        try {
            var c = new T.global.XMLHttpRequest;
            c.open("get", b, !1);
            c.send();
            return 0 == c.status || 200 == c.status ? c.responseText : null
        } catch (d) { return null }
    };
    T.Ix = function(b, c, d) {
        var e = T.global.$jscomp;
        e || (T.global.$jscomp = e = {});
        var f = e.Bf;
        if (!f) {
            var g = T.ml + T.Lk,
                k = T.dn(g);
            if (k) {
                (function() {
                    (0, eval)(k + "\n//# sourceURL=" + g)
                }).call(T.global);
                if (T.global.$gwtExport && T.global.$gwtExport.$jscomp && !T.global.$gwtExport.$jscomp.transpile) throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(T.global.$gwtExport));
                T.global.$jscomp.Bf = T.global.$gwtExport.$jscomp.transpile;
                e = T.global.$jscomp;
                f = e.Bf
            }
        }
        if (!f) {
            var h = " requires transpilation but no transpiler was found.";
            h += ' Please add "//javascript/closure:transpiler" as a data dependency to ensure it is included.';
            f = e.Bf = function(m, n) { T.Ii(n + h); return m }
        }
        return f(b, c, d)
    };
    T.ra = function(b) {
        var c = typeof b;
        if (c == F)
            if (b) { if (b instanceof Array) return l; if (b instanceof Object) return c; var d = Object.prototype.toString.call(b); if ("[object Window]" == d) return F; if ("[object Array]" == d || typeof b.length == E && "undefined" != typeof b.splice && "undefined" != typeof b.propertyIsEnumerable && !b.propertyIsEnumerable("splice")) return l; if ("[object Function]" == d || "undefined" != typeof b.call && "undefined" != typeof b.propertyIsEnumerable && !b.propertyIsEnumerable("call")) return w } else return "null";
        else if (c == w && "undefined" == typeof b.call) return F;
        return c
    };
    T.isArray = function(b) { return T.ra(b) == l };
    T.la = function(b) { var c = T.ra(b); return c == l || c == F && typeof b.length == E };
    T.sv = function(b) { return T.Ba(b) && typeof b.getFullYear == w };
    T.Sa = function(b) { return T.ra(b) == w };
    T.Ba = function(b) { var c = typeof b; return c == F && null != b || c == w };
    T.Uh = function(b) { return Object.prototype.hasOwnProperty.call(b, T.nb) && b[T.nb] || (b[T.nb] = ++T.Go) };
    T.cv = function(b) { return !!b[T.nb] };
    T.Nn = function(b) { null !== b && "removeAttribute" in b && b.removeAttribute(T.nb); try { delete b[T.nb] } catch (c) {} };
    T.nb = "closure_uid_" + (1E9 * Math.random() >>> 0);
    T.Go = 0;
    T.Gu = T.Uh;
    T.ww = T.Nn;
    T.zl = function(b) {
        var c = T.ra(b);
        if (c == F || c == l) {
            if (typeof b.clone === w) return b.clone();
            c = c == l ? [] : {};
            for (var d in b) c[d] = T.zl(b[d]);
            return c
        }
        return b
    };
    T.ol = function(b, c, d) { return b.call.apply(b.bind, arguments) };
    T.nl = function(b, c, d) {
        if (!b) throw Error();
        if (2 < arguments.length) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function() {
                var f = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(f, e);
                return b.apply(c, f)
            }
        }
        return function() { return b.apply(c, arguments) }
    };
    T.bind = function(b, c, d) { T.bind = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? T.ol : T.nl; return T.bind.apply(null, arguments) };
    T.Nb = function(b, c) {
        var d = Array.prototype.slice.call(arguments, 1);
        return function() {
            var e = d.slice();
            e.push.apply(e, arguments);
            return b.apply(this, e)
        }
    };
    T.$v = function(b, c) { for (var d in c) b[d] = c[d] };
    T.now = T.me && Date.now || function() { return +new Date };
    T.Xu = function(b) {
        if (T.global.execScript) T.global.execScript(b, "JavaScript");
        else if (T.global.eval) {
            if (null == T.od) {
                try { T.global.eval("var _evalTest_ = 1;") } catch (e) {}
                if ("undefined" != typeof T.global._evalTest_) {
                    try { delete T.global._evalTest_ } catch (e) {}
                    T.od = !0
                } else T.od = !1
            }
            if (T.od) T.global.eval(b);
            else {
                var c = T.global.document,
                    d = c.createElement(sa);
                d.type = ua;
                d.defer = !1;
                d.appendChild(c.createTextNode(b));
                c.head.appendChild(d);
                c.head.removeChild(d)
            }
        } else throw Error("goog.globalEval not available");
    };
    T.od = null;
    T.Du = function(b, c) {
        function d(g) { g = g.split("-"); for (var k = [], h = 0; h < g.length; h++) k.push(e(g[h])); return k.join("-") }

        function e(g) { return T.Zg[g] || g }
        if ("." == String(b).charAt(0)) throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + b);
        var f = T.Zg ? "BY_WHOLE" == T.Fl ? e : d : Ba();
        b = c ? b + "-" + f(c) : f(b);
        return T.global.Qj ? T.global.Qj(b) : b
    };
    T.Rw = function(b, c) {
        T.Zg = b;
        T.Fl = c
    };
    T.Ju = function(b, c, d) {
        d && d.b && (b = b.replace(/</g, "&lt;"));
        c && (b = b.replace(/\{\$([^}]+)}/g, function(e, f) { return null != c && f in c ? c[f] : e }));
        return b
    };
    T.Ku = Ba();
    T.Yb = function(b, c) { T.gh(b, c, void 0) };
    T.bu = function(b, c, d) { b[c] = d };
    T.vb = function(b, c) {
        function d() {}
        d.prototype = c.prototype;
        b.prototype = new d;
        b.prototype.constructor = b;
        b.Zs = function(e, f, g) { for (var k = Array(arguments.length - 2), h = 2; h < arguments.length; h++) k[h - 2] = arguments[h]; return c.prototype[f].apply(e, k) }
    };
    T.scope = function(b) {
        if (T.mi()) throw Error("goog.scope is not supported within a module.");
        b.call(T.global)
    };
    T.Ka = function(b, c) {
        var d = c.constructor,
            e = c.vo;
        d && d != Object.prototype.constructor || (d = function() { throw Error("cannot instantiate an interface (no constructor defined)."); });
        d = T.Ka.Bl(d, b);
        b && T.vb(d, b);
        delete c.constructor;
        delete c.vo;
        T.Ka.Bg(d.prototype, c);
        null != e && (e instanceof Function ? e(d) : T.Ka.Bg(d, e));
        return d
    };
    T.Ka.Ek = T.ma;
    T.Ka.Bl = function(b, c) {
        function d() {
            var f = b.apply(this, arguments) || this;
            f[T.nb] = f[T.nb];
            this.constructor === d && e && Object.seal instanceof Function && Object.seal(f);
            return f
        }
        if (!T.Ka.Ek) return b;
        var e = !T.Ka.Xm(c);
        return d
    };
    T.Ka.Xm = function(b) { return b && b.prototype && b.prototype[T.Nk] };
    T.Ka.ig = ["constructor", ma, "isPrototypeOf", ra, va, "toString", "valueOf"];
    T.Ka.Bg = function(b, c) { for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (b[d] = c[d]); for (var e = 0; e < T.Ka.ig.length; e++) d = T.Ka.ig[e], Object.prototype.hasOwnProperty.call(c, d) && (b[d] = c[d]) };
    T.zx = O();
    T.Nk = "goog_defineClass_legacy_unsealable";
    T.bd = "";
    T.Ad = Ba();
    T.Yg = function(b) {
        var c = null,
            d = T.global.trustedTypes || T.global.TrustedTypes;
        if (!d || !d.createPolicy) return c;
        try { c = d.createPolicy(b, { createHTML: T.Ad, createScript: T.Ad, createScriptURL: T.Ad, createURL: T.Ad }) } catch (e) { T.Ii(e.message) }
        return c
    };
    T.ps = T.bd ? T.Yg(T.bd + "#base") : null;
    T.i = {};
    T.i.j = {};
    T.i.j.fk = !1;
    T.i.j.dg = T.i.j.fk || ("ar" == T.R.substring(0, 2).toLowerCase() || "fa" == T.R.substring(0, 2).toLowerCase() || "he" == T.R.substring(0, 2).toLowerCase() || "iw" == T.R.substring(0, 2).toLowerCase() || "ps" == T.R.substring(0, 2).toLowerCase() || "sd" == T.R.substring(0, 2).toLowerCase() || "ug" == T.R.substring(0, 2).toLowerCase() || "ur" == T.R.substring(0, 2).toLowerCase() || "yi" == T.R.substring(0, 2).toLowerCase()) && (2 == T.R.length || "-" == T.R.substring(2, 3) || "_" == T.R.substring(2, 3)) || 3 <= T.R.length && "ckb" == T.R.substring(0, 3).toLowerCase() &&
        (3 == T.R.length || "-" == T.R.substring(3, 4) || "_" == T.R.substring(3, 4)) || 7 <= T.R.length && ("-" == T.R.substring(2, 3) || "_" == T.R.substring(2, 3)) && ("adlm" == T.R.substring(3, 7).toLowerCase() || "arab" == T.R.substring(3, 7).toLowerCase() || "hebr" == T.R.substring(3, 7).toLowerCase() || "nkoo" == T.R.substring(3, 7).toLowerCase() || "rohg" == T.R.substring(3, 7).toLowerCase() || "thaa" == T.R.substring(3, 7).toLowerCase()) || 8 <= T.R.length && ("-" == T.R.substring(3, 4) || "_" == T.R.substring(3, 4)) && ("adlm" == T.R.substring(4, 8).toLowerCase() || "arab" ==
            T.R.substring(4, 8).toLowerCase() || "hebr" == T.R.substring(4, 8).toLowerCase() || "nkoo" == T.R.substring(4, 8).toLowerCase() || "rohg" == T.R.substring(4, 8).toLowerCase() || "thaa" == T.R.substring(4, 8).toLowerCase());
    T.i.j.Sb = { mk: "\u202a", vk: "\u202b", kg: "\u202c", nk: "\u200e", wk: "\u200f" };
    T.i.j.$ = { zb: 1, Ab: -1, Va: 0 };
    T.i.j.$c = "right";
    T.i.j.Yc = "left";
    T.i.j.Cq = T.i.j.dg ? T.i.j.Yc : T.i.j.$c;
    T.i.j.Bq = T.i.j.dg ? T.i.j.$c : T.i.j.Yc;
    T.i.j.Bo = function(b) { return typeof b == E ? 0 < b ? T.i.j.$.zb : 0 > b ? T.i.j.$.Ab : T.i.j.$.Va : null == b ? null : b ? T.i.j.$.Ab : T.i.j.$.zb };
    T.i.j.fc = "A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
    T.i.j.lc = "\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc";
    T.i.j.Dm = /<[^>]*>|&[^;]+;/g;
    T.i.j.xb = function(b, c) { return c ? b.replace(T.i.j.Dm, "") : b };
    T.i.j.Vn = new RegExp("[" + T.i.j.lc + "]");
    T.i.j.ln = new RegExp("[" + T.i.j.fc + "]");
    T.i.j.Ve = function(b, c) { return T.i.j.Vn.test(T.i.j.xb(b, c)) };
    T.i.j.bv = T.i.j.Ve;
    T.i.j.Zh = function(b) { return T.i.j.ln.test(T.i.j.xb(b, void 0)) };
    T.i.j.on = new RegExp("^[" + T.i.j.fc + "]");
    T.i.j.$n = new RegExp("^[" + T.i.j.lc + "]");
    T.i.j.Um = function(b) { return T.i.j.$n.test(b) };
    T.i.j.Qm = function(b) { return T.i.j.on.test(b) };
    T.i.j.Fv = function(b) { return !T.i.j.Qm(b) && !T.i.j.Um(b) };
    T.i.j.mn = new RegExp("^[^" + T.i.j.lc + "]*[" + T.i.j.fc + "]");
    T.i.j.Xn = new RegExp("^[^" + T.i.j.fc + "]*[" + T.i.j.lc + "]");
    T.i.j.gj = function(b, c) { return T.i.j.Xn.test(T.i.j.xb(b, c)) };
    T.i.j.Lv = T.i.j.gj;
    T.i.j.uo = function(b, c) { return T.i.j.mn.test(T.i.j.xb(b, c)) };
    T.i.j.Dv = T.i.j.uo;
    T.i.j.vi = /^http:\/\/.*/;
    T.i.j.Gv = function(b, c) { b = T.i.j.xb(b, c); return T.i.j.vi.test(b) || !T.i.j.Zh(b) && !T.i.j.Ve(b) };
    T.i.j.nn = new RegExp("[" + T.i.j.fc + "][^" + T.i.j.lc + "]*$");
    T.i.j.Yn = new RegExp("[" + T.i.j.lc + "][^" + T.i.j.fc + "]*$");
    T.i.j.Pl = function(b, c) { return T.i.j.nn.test(T.i.j.xb(b, c)) };
    T.i.j.Cv = T.i.j.Pl;
    T.i.j.Ql = function(b, c) { return T.i.j.Yn.test(T.i.j.xb(b, c)) };
    T.i.j.Jv = T.i.j.Ql;
    T.i.j.Zn = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
    T.i.j.Kv = function(b) { return T.i.j.Zn.test(b) };
    T.i.j.ql = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
    T.i.j.$u = function(b, c) { c = (void 0 === c ? T.i.j.Ve(b) : c) ? T.i.j.Sb.wk : T.i.j.Sb.nk; return b.replace(T.i.j.ql, c + "$&" + c) };
    T.i.j.Xt = function(b) { return "<" == b.charAt(0) ? b.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + b + "</span>" };
    T.i.j.Yt = function(b) { return T.i.j.Sb.vk + b + T.i.j.Sb.kg };
    T.i.j.Vt = function(b) { return "<" == b.charAt(0) ? b.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + b + "</span>" };
    T.i.j.Wt = function(b) { return T.i.j.Sb.mk + b + T.i.j.Sb.kg };
    T.i.j.Ll = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
    T.i.j.an = /left/gi;
    T.i.j.Un = /right/gi;
    T.i.j.zo = /%%%%/g;
    T.i.j.Zv = function(b) { return b.replace(T.i.j.Ll, ":$1 $4 $3 $2").replace(T.i.j.an, "%%%%").replace(T.i.j.Un, T.i.j.Yc).replace(T.i.j.zo, T.i.j.$c) };
    T.i.j.Nl = /([\u0591-\u05f2])"/g;
    T.i.j.ro = /([\u0591-\u05f2])'/g;
    T.i.j.dw = function(b) { return b.replace(T.i.j.Nl, "$1\u05f4").replace(T.i.j.ro, "$1\u05f3") };
    T.i.j.So = /\s+/;
    T.i.j.Bm = /[\d\u06f0-\u06f9]/;
    T.i.j.Wn = .4;
    T.i.j.fh = function(b, c) {
        var d = 0,
            e = 0,
            f = !1;
        b = T.i.j.xb(b, c).split(T.i.j.So);
        for (c = 0; c < b.length; c++) {
            var g = b[c];
            T.i.j.gj(g) ? (d++, e++) : T.i.j.vi.test(g) ? f = !0 : T.i.j.Zh(g) ? e++ : T.i.j.Bm.test(g) && (f = !0)
        }
        return 0 == e ? f ? T.i.j.$.zb : T.i.j.$.Va : d / e > T.i.j.Wn ? T.i.j.$.Ab : T.i.j.$.zb
    };
    T.i.j.Qt = function(b, c) { return T.i.j.fh(b, c) == T.i.j.$.Ab };
    T.i.j.Sw = function(b, c) { b && (c = T.i.j.Bo(c)) && (b.style.textAlign = c == T.i.j.$.Ab ? T.i.j.$c : T.i.j.Yc, b.dir = c == T.i.j.$.Ab ? "rtl" : "ltr") };
    T.i.j.Tw = function(b, c) {
        switch (T.i.j.fh(c)) {
            case T.i.j.$.zb:
                b.dir = "ltr";
                break;
            case T.i.j.$.Ab:
                b.dir = "rtl";
                break;
            default:
                b.removeAttribute("dir")
        }
    };
    T.i.j.Wp = O();
    T.debug = {};
    T.debug.Error = function(b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, T.debug.Error);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        b && (this.message = String(b))
    };
    T.vb(T.debug.Error, Error);
    T.debug.Error.prototype.name = "CustomError";
    T.a = {};
    T.a.sa = { kb: 1, lp: 2, ad: 3, Ap: 4, cq: 5, bq: 6, zr: 7, Hp: 8, Vc: 9, Up: 10, $j: 11, lr: 12 };
    T.m = {};
    T.m.xa = T.ma;
    T.m.pc = function(b, c) { T.debug.Error.call(this, T.m.xo(b, c)) };
    T.vb(T.m.pc, T.debug.Error);
    T.m.pc.prototype.name = "AssertionError";
    T.m.Wj = function(b) { throw b; };
    T.m.Ce = T.m.Wj;
    T.m.xo = function(b, c) { b = b.split("%s"); for (var d = "", e = b.length - 1, f = 0; f < e; f++) d += b[f] + (f < c.length ? c[f] : "%s"); return d + b[e] };
    T.m.Qa = function(b, c, d, e) {
        var f = "Assertion failed";
        if (d) { f += ": " + d; var g = e } else b && (f += ": " + b, g = c);
        b = new T.m.pc("" + f, g || []);
        T.m.Ce(b)
    };
    T.m.Vw = function(b) { T.m.xa && (T.m.Ce = b) };
    T.m.assert = function(b, c, d) { T.m.xa && !b && T.m.Qa("", null, c, Array.prototype.slice.call(arguments, 2)); return b };
    T.m.Ms = function(b, c, d) { T.m.xa && null == b && T.m.Qa("Expected to exist: %s.", [b], c, Array.prototype.slice.call(arguments, 2)); return b };
    T.m.va = function(b, c) { T.m.xa && T.m.Ce(new T.m.pc("Failure" + (b ? ": " + b : ""), Array.prototype.slice.call(arguments, 1))) };
    T.m.Us = function(b, c, d) { T.m.xa && typeof b !== E && T.m.Qa("Expected number but got %s: %s.", [T.ra(b), b], c, Array.prototype.slice.call(arguments, 2)); return b };
    T.m.Xs = function(b, c, d) { T.m.xa && typeof b !== I && T.m.Qa("Expected string but got %s: %s.", [T.ra(b), b], c, Array.prototype.slice.call(arguments, 2)); return b };
    T.m.Os = function(b, c, d) { T.m.xa && !T.Sa(b) && T.m.Qa("Expected function but got %s: %s.", [T.ra(b), b], c, Array.prototype.slice.call(arguments, 2)); return b };
    T.m.Vs = function(b, c, d) { T.m.xa && !T.Ba(b) && T.m.Qa("Expected object but got %s: %s.", [T.ra(b), b], c, Array.prototype.slice.call(arguments, 2)); return b };
    T.m.Js = function(b, c, d) { T.m.xa && !Array.isArray(b) && T.m.Qa("Expected array but got %s: %s.", [T.ra(b), b], c, Array.prototype.slice.call(arguments, 2)); return b };
    T.m.Ks = function(b, c, d) { T.m.xa && "boolean" !== typeof b && T.m.Qa("Expected boolean but got %s: %s.", [T.ra(b), b], c, Array.prototype.slice.call(arguments, 2)); return b };
    T.m.Ls = function(b, c, d) {!T.m.xa || T.Ba(b) && b.nodeType == T.a.sa.kb || T.m.Qa("Expected Element but got %s: %s.", [T.ra(b), b], c, Array.prototype.slice.call(arguments, 2)); return b };
    T.m.Ps = function(b, c, d, e) {!T.m.xa || b instanceof c || T.m.Qa("Expected instanceof %s but got %s.", [T.m.Th(c), T.m.Th(b)], d, Array.prototype.slice.call(arguments, 3)); return b };
    T.m.Ns = function(b, c, d) {!T.m.xa || typeof b == E && isFinite(b) || T.m.Qa("Expected %s to be a finite number but it is not.", [b], c, Array.prototype.slice.call(arguments, 2)); return b };
    T.m.Ws = function() { for (var b in Object.prototype) T.m.va(b + " should not be enumerable in Object.prototype.") };
    T.m.Th = function(b) { return b instanceof Function ? b.displayName || b.name || "unknown type name" : b instanceof Object ? b.constructor.displayName || b.constructor.name || Object.prototype.toString.call(b) : null === b ? "null" : typeof b };
    T.g = {};
    T.bb = T.me;
    T.g.$a = 2012 < T.ck;
    T.g.An = function(b) { return b[b.length - 1] };
    T.g.Rv = T.g.An;
    T.g.indexOf = T.bb && (T.g.$a || Array.prototype.indexOf) ? function(b, c, d) { return Array.prototype.indexOf.call(b, c, d) } : function(b, c, d) {
        d = null == d ? 0 : 0 > d ? Math.max(0, b.length + d) : d;
        if (typeof b === I) return typeof c !== I || 1 != c.length ? -1 : b.indexOf(c, d);
        for (; d < b.length; d++)
            if (d in b && b[d] === c) return d;
        return -1
    };
    T.g.lastIndexOf = T.bb && (T.g.$a || Array.prototype.lastIndexOf) ? function(b, c, d) { return Array.prototype.lastIndexOf.call(b, c, null == d ? b.length - 1 : d) } : function(b, c, d) {
        d = null == d ? b.length - 1 : d;
        0 > d && (d = Math.max(0, b.length + d));
        if (typeof b === I) return typeof c !== I || 1 != c.length ? -1 : b.lastIndexOf(c, d);
        for (; 0 <= d; d--)
            if (d in b && b[d] === c) return d;
        return -1
    };
    T.g.forEach = T.bb && (T.g.$a || Array.prototype.forEach) ? function(b, c, d) { Array.prototype.forEach.call(b, c, d) } : function(b, c, d) { for (var e = b.length, f = typeof b === I ? b.split("") : b, g = 0; g < e; g++) g in f && c.call(d, f[g], g, b) };
    T.g.nh = function(b, c) {
        var d = b.length,
            e = typeof b === I ? b.split("") : b;
        for (--d; 0 <= d; --d) d in e && c.call(void 0, e[d], d, b)
    };
    T.g.filter = T.bb && (T.g.$a || Array.prototype.filter) ? function(b, c, d) { return Array.prototype.filter.call(b, c, d) } : function(b, c, d) {
        for (var e = b.length, f = [], g = 0, k = typeof b === I ? b.split("") : b, h = 0; h < e; h++)
            if (h in k) {
                var m = k[h];
                c.call(d, m, h, b) && (f[g++] = m)
            }
        return f
    };
    T.g.map = T.bb && (T.g.$a || Array.prototype.map) ? function(b, c, d) { return Array.prototype.map.call(b, c, d) } : function(b, c, d) { for (var e = b.length, f = Array(e), g = typeof b === I ? b.split("") : b, k = 0; k < e; k++) k in g && (f[k] = c.call(d, g[k], k, b)); return f };
    T.g.reduce = T.bb && (T.g.$a || Array.prototype.reduce) ? function(b, c, d, e) { e && (c = T.bind(c, e)); return Array.prototype.reduce.call(b, c, d) } : function(b, c, d, e) {
        var f = d;
        T.g.forEach(b, function(g, k) { f = c.call(e, f, g, k, b) });
        return f
    };
    T.g.reduceRight = T.bb && (T.g.$a || Array.prototype.reduceRight) ? function(b, c, d, e) { e && (c = T.bind(c, e)); return Array.prototype.reduceRight.call(b, c, d) } : function(b, c, d, e) {
        var f = d;
        T.g.nh(b, function(g, k) { f = c.call(e, f, g, k, b) });
        return f
    };
    T.g.some = T.bb && (T.g.$a || Array.prototype.some) ? function(b, c, d) { return Array.prototype.some.call(b, c, d) } : function(b, c, d) {
        for (var e = b.length, f = typeof b === I ? b.split("") : b, g = 0; g < e; g++)
            if (g in f && c.call(d, f[g], g, b)) return !0;
        return !1
    };
    T.g.every = T.bb && (T.g.$a || Array.prototype.every) ? function(b, c, d) { return Array.prototype.every.call(b, c, d) } : function(b, c, d) {
        for (var e = b.length, f = typeof b === I ? b.split("") : b, g = 0; g < e; g++)
            if (g in f && !c.call(d, f[g], g, b)) return !1;
        return !0
    };
    T.g.count = function(b, c, d) {
        var e = 0;
        T.g.forEach(b, function(f, g, k) { c.call(d, f, g, k) && ++e }, d);
        return e
    };
    T.g.find = function(b, c, d) { c = T.g.findIndex(b, c, d); return 0 > c ? null : typeof b === I ? b.charAt(c) : b[c] };
    T.g.findIndex = function(b, c, d) {
        for (var e = b.length, f = typeof b === I ? b.split("") : b, g = 0; g < e; g++)
            if (g in f && c.call(d, f[g], g, b)) return g;
        return -1
    };
    T.g.gu = function(b, c, d) { c = T.g.Wl(b, c, d); return 0 > c ? null : typeof b === I ? b.charAt(c) : b[c] };
    T.g.Wl = function(b, c, d) {
        var e = b.length,
            f = typeof b === I ? b.split("") : b;
        for (--e; 0 <= e; e--)
            if (e in f && c.call(d, f[e], e, b)) return e;
        return -1
    };
    T.g.contains = function(b, c) { return 0 <= T.g.indexOf(b, c) };
    T.g.Aa = function(b) { return 0 == b.length };
    T.g.clear = function(b) {
        if (!Array.isArray(b))
            for (var c = b.length - 1; 0 <= c; c--) delete b[c];
        b.length = 0
    };
    T.g.gv = function(b, c) { T.g.contains(b, c) || b.push(c) };
    T.g.bi = function(b, c, d) { T.g.splice(b, d, 0, c) };
    T.g.iv = function(b, c, d) { T.Nb(T.g.splice, b, d, 0).apply(null, c) };
    T.g.insertBefore = function(b, c, d) {
        var e;
        2 == arguments.length || 0 > (e = T.g.indexOf(b, d)) ? b.push(c) : T.g.bi(b, c, e)
    };
    T.g.remove = function(b, c) {
        c = T.g.indexOf(b, c);
        var d;
        (d = 0 <= c) && T.g.kc(b, c);
        return d
    };
    T.g.yw = function(b, c) { c = T.g.lastIndexOf(b, c); return 0 <= c ? (T.g.kc(b, c), !0) : !1 };
    T.g.kc = function(b, c) { return 1 == Array.prototype.splice.call(b, c, 1).length };
    T.g.xw = function(b, c, d) { c = T.g.findIndex(b, c, d); return 0 <= c ? (T.g.kc(b, c), !0) : !1 };
    T.g.vw = function(b, c, d) {
        var e = 0;
        T.g.nh(b, function(f, g) { c.call(d, f, g, b) && T.g.kc(b, g) && e++ });
        return e
    };
    T.g.concat = function(b) { return Array.prototype.concat.apply([], arguments) };
    T.g.join = function(b) { return Array.prototype.concat.apply([], arguments) };
    T.g.Za = function(b) { var c = b.length; if (0 < c) { for (var d = Array(c), e = 0; e < c; e++) d[e] = b[e]; return d } return [] };
    T.g.clone = T.g.Za;
    T.g.extend = function(b, c) {
        for (var d = 1; d < arguments.length; d++) {
            var e = arguments[d];
            if (T.la(e)) {
                var f = b.length || 0,
                    g = e.length || 0;
                b.length = f + g;
                for (var k = 0; k < g; k++) b[f + k] = e[k]
            } else b.push(e)
        }
    };
    T.g.splice = function(b, c, d, e) { return Array.prototype.splice.apply(b, T.g.slice(arguments, 1)) };
    T.g.slice = function(b, c, d) { return 2 >= arguments.length ? Array.prototype.slice.call(b, c) : Array.prototype.slice.call(b, c, d) };
    T.g.Kn = function(b, c) {
        c = c || b;
        for (var d = {}, e = 0, f = 0; f < b.length;) {
            var g = b[f++];
            var k = g;
            k = T.Ba(k) ? "o" + T.Uh(k) : (typeof k).charAt(0) + k;
            Object.prototype.hasOwnProperty.call(d, k) || (d[k] = !0, c[e++] = g)
        }
        c.length = e
    };
    T.g.Ig = function(b, c, d) { return T.g.Jg(b, d || T.g.qb, !1, c) };
    T.g.bt = function(b, c, d) { return T.g.Jg(b, c, !0, void 0, d) };
    T.g.Jg = function(b, c, d, e, f) {
        for (var g = 0, k = b.length, h; g < k;) {
            var m = g + (k - g >>> 1);
            var n = d ? c.call(f, b[m], m, b) : c(e, b[m]);
            0 < n ? g = m + 1 : (k = m, h = !n)
        }
        return h ? g : -g - 1
    };
    T.g.sort = function(b, c) { b.sort(c || T.g.qb) };
    T.g.sx = function(b, c) {
        for (var d = Array(b.length), e = 0; e < b.length; e++) d[e] = { index: e, value: b[e] };
        var f = c || T.g.qb;
        T.g.sort(d, function(g, k) { return f(g.value, k.value) || g.index - k.index });
        for (e = 0; e < b.length; e++) b[e] = d[e].value
    };
    T.g.so = function(b, c, d) {
        var e = d || T.g.qb;
        T.g.sort(b, function(f, g) { return e(c(f), c(g)) })
    };
    T.g.px = function(b, c, d) { T.g.so(b, function(e) { return e[c] }, d) };
    T.g.yi = function(b) {
        for (var c = T.g.qb, d = 1; d < b.length; d++)
            if (0 < c(b[d - 1], b[d])) return !1;
        return !0
    };
    T.g.Ib = function(b, c) {
        if (!T.la(b) || !T.la(c) || b.length != c.length) return !1;
        for (var d = b.length, e = T.g.bh, f = 0; f < d; f++)
            if (!e(b[f], c[f])) return !1;
        return !0
    };
    T.g.ot = function(b, c, d) { d = d || T.g.qb; for (var e = Math.min(b.length, c.length), f = 0; f < e; f++) { var g = d(b[f], c[f]); if (0 != g) return g } return T.g.qb(b.length, c.length) };
    T.g.qb = function(b, c) { return b > c ? 1 : b < c ? -1 : 0 };
    T.g.lv = function(b, c) { return -T.g.qb(b, c) };
    T.g.bh = function(b, c) { return b === c };
    T.g.$s = function(b, c, d) { d = T.g.Ig(b, c, d); return 0 > d ? (T.g.bi(b, c, -(d + 1)), !0) : !1 };
    T.g.at = function(b, c, d) { c = T.g.Ig(b, c, d); return 0 <= c ? T.g.kc(b, c) : !1 };
    T.g.dt = function(b, c, d) {
        for (var e = {}, f = 0; f < b.length; f++) {
            var g = b[f],
                k = c.call(d, g, f, b);
            void 0 !== k && (e[k] || (e[k] = [])).push(g)
        }
        return e
    };
    T.g.Co = function(b, c, d) {
        var e = {};
        T.g.forEach(b, function(f, g) { e[c.call(d, f, g, b)] = f });
        return e
    };
    T.g.Pd = function(b, c, d) {
        var e = [],
            f = 0,
            g = b;
        d = d || 1;
        void 0 !== c && (f = b, g = c);
        if (0 > d * (g - f)) return [];
        if (0 < d)
            for (b = f; b < g; b += d) e.push(b);
        else
            for (b = f; b > g; b += d) e.push(b);
        return e
    };
    T.g.repeat = function(b, c) { for (var d = [], e = 0; e < c; e++) d[e] = b; return d };
    T.g.flatten = function(b) {
        for (var c = [], d = 0; d < arguments.length; d++) {
            var e = arguments[d];
            if (Array.isArray(e))
                for (var f = 0; f < e.length; f += 8192) {
                    var g = T.g.slice(e, f, f + 8192);
                    g = T.g.flatten.apply(null, g);
                    for (var k = 0; k < g.length; k++) c.push(g[k])
                } else c.push(e)
        }
        return c
    };
    T.g.rotate = function(b, c) { b.length && (c %= b.length, 0 < c ? Array.prototype.unshift.apply(b, b.splice(-c, c)) : 0 > c && Array.prototype.push.apply(b, b.splice(0, -c))); return b };
    T.g.bw = function(b, c, d) {
        c = Array.prototype.splice.call(b, c, 1);
        Array.prototype.splice.call(b, d, 0, c[0])
    };
    T.g.xj = function(b) {
        if (!arguments.length) return [];
        for (var c = [], d = arguments[0].length, e = 1; e < arguments.length; e++) arguments[e].length < d && (d = arguments[e].length);
        for (e = 0; e < d; e++) {
            for (var f = [], g = 0; g < arguments.length; g++) f.push(arguments[g][e]);
            c.push(f)
        }
        return c
    };
    T.g.ox = function(b, c) {
        c = c || Math.random;
        for (var d = b.length - 1; 0 < d; d--) {
            var e = Math.floor(c() * (d + 1)),
                f = b[d];
            b[d] = b[e];
            b[e] = f
        }
    };
    T.g.ut = function(b, c) {
        var d = [];
        T.g.forEach(c, function(e) { d.push(b[e]) });
        return d
    };
    T.g.rt = function(b, c, d) { return T.g.concat.apply([], T.g.map(b, c, d)) };
    T.c = {};
    T.c.A = {};
    T.c.A.startsWith = function(b, c) { return 0 == b.lastIndexOf(c, 0) };
    T.c.A.endsWith = function(b, c) { var d = b.length - c.length; return 0 <= d && b.indexOf(c, d) == d };
    T.c.A.Cb = function(b, c) { return 0 == T.c.A.gd(c, b.substr(0, c.length)) };
    T.c.A.Mg = function(b, c) { return 0 == T.c.A.gd(c, b.substr(b.length - c.length, c.length)) };
    T.c.A.Ng = function(b, c) { return b.toLowerCase() == c.toLowerCase() };
    T.c.A.Mc = function(b) { return /^[\s\xa0]*$/.test(b) };
    T.c.A.trim = T.me && String.prototype.trim ? function(b) { return b.trim() } : function(b) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(b)[1] };
    T.c.A.gd = function(b, c) {
        b = String(b).toLowerCase();
        c = String(c).toLowerCase();
        return b < c ? -1 : b == c ? 0 : 1
    };
    T.c.A.Oc = function(b, c) { return b.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>") };
    T.c.A.Fa = function(b, c) {
        if (c) b = b.replace(T.c.A.Ff, "&amp;").replace(T.c.A.fg, "&lt;").replace(T.c.A.ag, "&gt;").replace(T.c.A.mg, "&quot;").replace(T.c.A.og, "&#39;").replace(T.c.A.hg, "&#0;");
        else {
            if (!T.c.A.Cj.test(b)) return b; - 1 != b.indexOf("&") && (b = b.replace(T.c.A.Ff, "&amp;")); - 1 != b.indexOf("<") && (b = b.replace(T.c.A.fg, "&lt;")); - 1 != b.indexOf(">") && (b = b.replace(T.c.A.ag, "&gt;")); - 1 != b.indexOf('"') && (b = b.replace(T.c.A.mg, "&quot;")); - 1 != b.indexOf("'") && (b = b.replace(T.c.A.og, "&#39;")); - 1 != b.indexOf("\x00") &&
                (b = b.replace(T.c.A.hg, "&#0;"))
        }
        return b
    };
    T.c.A.Ff = /&/g;
    T.c.A.fg = /</g;
    T.c.A.ag = />/g;
    T.c.A.mg = /"/g;
    T.c.A.og = /'/g;
    T.c.A.hg = /\x00/g;
    T.c.A.Cj = /[\x00&<>"']/;
    T.c.A.vj = function(b) { return T.c.A.Oc(b.replace(/  /g, " &#160;"), void 0) };
    T.c.A.contains = function(b, c) { return -1 != b.indexOf(c) };
    T.c.A.hd = function(b, c) { return T.c.A.contains(b.toLowerCase(), c.toLowerCase()) };
    T.c.A.Eb = function(b, c) {
        var d = 0;
        b = T.c.A.trim(String(b)).split(".");
        c = T.c.A.trim(String(c)).split(".");
        for (var e = Math.max(b.length, c.length), f = 0; 0 == d && f < e; f++) {
            var g = b[f] || "",
                k = c[f] || "";
            do {
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                if (0 == g[0].length && 0 == k[0].length) break;
                d = T.c.A.ve(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || T.c.A.ve(0 == g[2].length, 0 == k[2].length) || T.c.A.ve(g[2], k[2]);
                g = g[3];
                k = k[3]
            } while (0 == d)
        }
        return d
    };
    T.c.A.ve = function(b, c) { return b < c ? -1 : b > c ? 1 : 0 };
    T.h = {};
    T.h.userAgent = {};
    T.h.userAgent.K = {};
    T.h.userAgent.K.Eh = function() { var b = T.h.userAgent.K.km(); return b && (b = b.userAgent) ? b : "" };
    T.h.userAgent.K.km = function() { return T.global.navigator };
    T.h.userAgent.K.tj = T.h.userAgent.K.Eh();
    T.h.userAgent.K.lx = function(b) { T.h.userAgent.K.tj = b || T.h.userAgent.K.Eh() };
    T.h.userAgent.K.bc = function() { return T.h.userAgent.K.tj };
    T.h.userAgent.K.S = function(b) { return T.c.A.contains(T.h.userAgent.K.bc(), b) };
    T.h.userAgent.K.Ni = function(b) { return T.c.A.hd(T.h.userAgent.K.bc(), b) };
    T.h.userAgent.K.hh = function(b) { for (var c = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, d = [], e; e = c.exec(b);) d.push([e[1], e[2], e[3] || void 0]); return d };
    T.object = {};
    T.object.is = function(b, c) { return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c };
    T.object.forEach = function(b, c, d) { for (var e in b) c.call(d, b[e], e, b) };
    T.object.filter = function(b, c, d) {
        var e = {},
            f;
        for (f in b) c.call(d, b[f], f, b) && (e[f] = b[f]);
        return e
    };
    T.object.map = function(b, c, d) {
        var e = {},
            f;
        for (f in b) e[f] = c.call(d, b[f], f, b);
        return e
    };
    T.object.some = function(b, c, d) {
        for (var e in b)
            if (c.call(d, b[e], e, b)) return !0;
        return !1
    };
    T.object.every = function(b, c, d) {
        for (var e in b)
            if (!c.call(d, b[e], e, b)) return !1;
        return !0
    };
    T.object.sb = function(b) {
        var c = 0,
            d;
        for (d in b) c++;
        return c
    };
    T.object.Bu = function(b) { for (var c in b) return c };
    T.object.Cu = function(b) { for (var c in b) return b[c] };
    T.object.contains = function(b, c) { return T.object.Gb(b, c) };
    T.object.fa = function(b) {
        var c = [],
            d = 0,
            e;
        for (e in b) c[d++] = b[e];
        return c
    };
    T.object.ka = function(b) {
        var c = [],
            d = 0,
            e;
        for (e in b) c[d++] = e;
        return c
    };
    T.object.Wu = function(b, c) {
        var d = T.la(c),
            e = d ? c : arguments;
        for (d = d ? 0 : 1; d < e.length; d++) {
            if (null == b) return;
            b = b[e[d]]
        }
        return b
    };
    T.object.Fb = function(b, c) { return null !== b && c in b };
    T.object.Gb = function(b, c) {
        for (var d in b)
            if (b[d] == c) return !0;
        return !1
    };
    T.object.Xl = function(b, c, d) {
        for (var e in b)
            if (c.call(d, b[e], e, b)) return e
    };
    T.object.hu = function(b, c, d) { return (c = T.object.Xl(b, c, d)) && b[c] };
    T.object.Aa = function(b) { for (var c in b) return !1; return !0 };
    T.object.clear = function(b) { for (var c in b) delete b[c] };
    T.object.remove = function(b, c) {
        var d;
        (d = c in b) && delete b[c];
        return d
    };
    T.object.add = function(b, c, d) {
        if (null !== b && c in b) throw Error('The object already contains the key "' + c + '"');
        T.object.set(b, c, d)
    };
    T.object.get = function(b, c, d) { return null !== b && c in b ? b[c] : d };
    T.object.set = function(b, c, d) { b[c] = d };
    T.object.Zw = function(b, c, d) { return c in b ? b[c] : b[c] = d };
    T.object.nx = function(b, c, d) {
        if (c in b) return b[c];
        d = d();
        return b[c] = d
    };
    T.object.Ib = function(b, c) {
        for (var d in b)
            if (!(d in c) || b[d] !== c[d]) return !1;
        for (var e in c)
            if (!(e in b)) return !1;
        return !0
    };
    T.object.clone = function(b) {
        var c = {},
            d;
        for (d in b) c[d] = b[d];
        return c
    };
    T.object.Lo = function(b) {
        var c = T.ra(b);
        if (c == F || c == l) {
            if (T.Sa(b.clone)) return b.clone();
            c = c == l ? [] : {};
            for (var d in b) c[d] = T.object.Lo(b[d]);
            return c
        }
        return b
    };
    T.object.Eo = function(b) {
        var c = {},
            d;
        for (d in b) c[b[d]] = d;
        return c
    };
    T.object.lg = ["constructor", ma, "isPrototypeOf", ra, va, "toString", "valueOf"];
    T.object.extend = function(b, c) { for (var d, e, f = 1; f < arguments.length; f++) { e = arguments[f]; for (d in e) b[d] = e[d]; for (var g = 0; g < T.object.lg.length; g++) d = T.object.lg[g], Object.prototype.hasOwnProperty.call(e, d) && (b[d] = e[d]) } };
    T.object.create = function(b) { var c = arguments.length; if (1 == c && Array.isArray(arguments[0])) return T.object.create.apply(null, arguments[0]); if (c % 2) throw Error(da); for (var d = {}, e = 0; e < c; e += 2) d[arguments[e]] = arguments[e + 1]; return d };
    T.object.Cl = function(b) { var c = arguments.length; if (1 == c && Array.isArray(arguments[0])) return T.object.Cl.apply(null, arguments[0]); for (var d = {}, e = 0; e < c; e++) d[arguments[e]] = !0; return d };
    T.object.At = function(b) {
        var c = b;
        Object.isFrozen && !Object.isFrozen(b) && (c = Object.create(b), Object.freeze(c));
        return c
    };
    T.object.xv = function(b) { return !!Object.isFrozen && Object.isFrozen(b) };
    T.object.Au = function(b, c, d) {
        if (!b) return [];
        if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) return T.object.ka(b);
        for (var e = {}; b && (b !== Object.prototype || c) && (b !== Function.prototype || d);) {
            for (var f = Object.getOwnPropertyNames(b), g = 0; g < f.length; g++) e[f[g]] = !0;
            b = Object.getPrototypeOf(b)
        }
        return T.object.ka(e)
    };
    T.object.Vu = function(b) { return (b = Object.getPrototypeOf(b.prototype)) && b.constructor };
    T.h.userAgent.B = {};
    T.h.userAgent.B.Li = function() { return T.h.userAgent.K.S("Opera") };
    T.h.userAgent.B.tn = function() { return T.h.userAgent.K.S("Trident") || T.h.userAgent.K.S("MSIE") };
    T.h.userAgent.B.ff = function() { return T.h.userAgent.K.S("Edge") };
    T.h.userAgent.B.Ji = function() { return T.h.userAgent.K.S("Edg/") };
    T.h.userAgent.B.Ki = function() { return T.h.userAgent.K.S("OPR") };
    T.h.userAgent.B.gf = function() { return T.h.userAgent.K.S("Firefox") || T.h.userAgent.K.S("FxiOS") };
    T.h.userAgent.B.Mi = function() { return T.h.userAgent.K.S("Safari") && !(T.h.userAgent.B.df() || T.h.userAgent.B.ef() || T.h.userAgent.B.Li() || T.h.userAgent.B.ff() || T.h.userAgent.B.Ji() || T.h.userAgent.B.Ki() || T.h.userAgent.B.gf() || T.h.userAgent.B.xi() || T.h.userAgent.K.S("Android")) };
    T.h.userAgent.B.ef = function() { return T.h.userAgent.K.S("Coast") };
    T.h.userAgent.B.un = function() { return (T.h.userAgent.K.S("iPad") || T.h.userAgent.K.S("iPhone")) && !T.h.userAgent.B.Mi() && !T.h.userAgent.B.df() && !T.h.userAgent.B.ef() && !T.h.userAgent.B.gf() && T.h.userAgent.K.S("AppleWebKit") };
    T.h.userAgent.B.df = function() { return (T.h.userAgent.K.S("Chrome") || T.h.userAgent.K.S("CriOS")) && !T.h.userAgent.B.ff() };
    T.h.userAgent.B.sn = function() { return T.h.userAgent.K.S("Android") && !(T.h.userAgent.B.hi() || T.h.userAgent.B.Km() || T.h.userAgent.B.bf() || T.h.userAgent.B.xi()) };
    T.h.userAgent.B.bf = T.h.userAgent.B.Li;
    T.h.userAgent.B.Bd = T.h.userAgent.B.tn;
    T.h.userAgent.B.wb = T.h.userAgent.B.ff;
    T.h.userAgent.B.Im = T.h.userAgent.B.Ji;
    T.h.userAgent.B.Iv = T.h.userAgent.B.Ki;
    T.h.userAgent.B.Km = T.h.userAgent.B.gf;
    T.h.userAgent.B.Mv = T.h.userAgent.B.Mi;
    T.h.userAgent.B.rv = T.h.userAgent.B.ef;
    T.h.userAgent.B.Av = T.h.userAgent.B.un;
    T.h.userAgent.B.hi = T.h.userAgent.B.df;
    T.h.userAgent.B.ov = T.h.userAgent.B.sn;
    T.h.userAgent.B.xi = function() { return T.h.userAgent.K.S("Silk") };
    T.h.userAgent.B.Ic = function() {
        function b(f) { f = T.g.find(f, e); return d[f] || "" }
        var c = T.h.userAgent.K.bc();
        if (T.h.userAgent.B.Bd()) return T.h.userAgent.B.jm(c);
        c = T.h.userAgent.K.hh(c);
        var d = {};
        T.g.forEach(c, function(f) { d[f[0]] = f[1] });
        var e = T.Nb(T.object.Fb, d);
        return T.h.userAgent.B.bf() ? b(["Version", "Opera"]) : T.h.userAgent.B.wb() ? b(["Edge"]) : T.h.userAgent.B.Im() ? b(["Edg"]) : T.h.userAgent.B.hi() ? b(["Chrome", "CriOS", "HeadlessChrome"]) : (c = c[2]) && c[1] || ""
    };
    T.h.userAgent.B.Ta = function(b) { return 0 <= T.c.A.Eb(T.h.userAgent.B.Ic(), b) };
    T.h.userAgent.B.jm = function(b) {
        var c = /rv: *([\d\.]*)/.exec(b);
        if (c && c[1]) return c[1];
        c = "";
        var d = /MSIE +([\d\.]+)/.exec(b);
        if (d && d[1])
            if (b = /Trident\/(\d.\d)/.exec(b), "7.0" == d[1])
                if (b && b[1]) switch (b[1]) {
                    case "4.0":
                        c = "8.0";
                        break;
                    case "5.0":
                        c = "9.0";
                        break;
                    case "6.0":
                        c = "10.0";
                        break;
                    case "7.0":
                        c = "11.0"
                } else c = "7.0";
                else c = d[1];
        return c
    };
    T.a.m = {};
    T.a.m.Fg = function(b) {
        if (T.m.xa) {
            var c = T.a.m.dc(b);
            c && (!b || !(b instanceof c.Location) && b instanceof c.Element) && T.m.va("Argument is not a Location (or a non-Element mock); got: %s", T.a.m.ah(b))
        }
    };
    T.a.m.za = function(b, c) {
        if (T.m.xa) {
            var d = T.a.m.dc(b);
            d && "undefined" != typeof d[c] && (b && (b instanceof d[c] || !(b instanceof d.Location || b instanceof d.Element)) || T.m.va("Argument is not a %s (or a non-Element, non-Location mock); got: %s", c, T.a.m.ah(b)))
        }
        return b
    };
    T.a.m.$k = function(b) { T.a.m.za(b, "HTMLAnchorElement") };
    T.a.m.bl = function(b) { return T.a.m.za(b, "HTMLButtonElement") };
    T.a.m.hl = function(b) { T.a.m.za(b, "HTMLLinkElement") };
    T.a.m.fl = function(b) { T.a.m.za(b, "HTMLImageElement") };
    T.a.m.al = function(b) { T.a.m.za(b, "HTMLAudioElement") };
    T.a.m.jl = function(b) { T.a.m.za(b, "HTMLVideoElement") };
    T.a.m.gl = function(b) { return T.a.m.za(b, "HTMLInputElement") };
    T.a.m.Rs = function(b) { return T.a.m.za(b, "HTMLTextAreaElement") };
    T.a.m.Qs = function(b) { return T.a.m.za(b, "HTMLCanvasElement") };
    T.a.m.cl = function(b) { T.a.m.za(b, "HTMLEmbedElement") };
    T.a.m.dl = function(b) { return T.a.m.za(b, "HTMLFormElement") };
    T.a.m.el = function(b) { T.a.m.za(b, "HTMLFrameElement") };
    T.a.m.Dg = function(b) { T.a.m.za(b, "HTMLIFrameElement") };
    T.a.m.il = function(b) { T.a.m.za(b, "HTMLObjectElement") };
    T.a.m.Eg = function(b) { T.a.m.za(b, "HTMLScriptElement") };
    T.a.m.ah = function(b) { if (T.Ba(b)) try { return b.constructor.displayName || b.constructor.name || Object.prototype.toString.call(b) } catch (c) { return "<object could not be stringified>" } else return void 0 === b ? "undefined" : null === b ? "null" : typeof b };
    T.a.m.dc = function(b) {
        try {
            var c = b && b.ownerDocument,
                d = c && (c.defaultView || c.parentWindow);
            d = d || T.global;
            if (d.Element && d.Location) return d
        } catch (e) {}
        return null
    };
    T.U = {};
    T.U.Tg = function(b) { return function() { return b } };
    T.U.fq = Ca(!1);
    T.U.os = Ca(!0);
    T.U.mr = Ca(null);
    T.U.ai = Ba();
    T.U.error = function(b) { return function() { throw Error(b); } };
    T.U.va = function(b) { return function() { throw b; } };
    T.U.lock = function(b, c) { c = c || 0; return function() { return b.apply(this, Array.prototype.slice.call(arguments, 0, c)) } };
    T.U.iw = function(b) { return function() { return arguments[b] } };
    T.U.ow = function(b, c) {
        var d = Array.prototype.slice.call(arguments, 1);
        return function() {
            var e = Array.prototype.slice.call(arguments);
            e.push.apply(e, d);
            return b.apply(this, e)
        }
    };
    T.U.Rx = function(b, c) { return T.U.io(b, T.U.Tg(c)) };
    T.U.$t = function(b, c) { return function(d) { return c ? b == d : b === d } };
    T.U.pt = function(b, c) {
        var d = arguments,
            e = d.length;
        return function() {
            var f;
            e && (f = d[e - 1].apply(this, arguments));
            for (var g = e - 2; 0 <= g; g--) f = d[g].call(this, f);
            return f
        }
    };
    T.U.io = function(b) {
        var c = arguments,
            d = c.length;
        return function() { for (var e, f = 0; f < d; f++) e = c[f].apply(this, arguments); return e }
    };
    T.U.and = function(b) {
        var c = arguments,
            d = c.length;
        return function() {
            for (var e = 0; e < d; e++)
                if (!c[e].apply(this, arguments)) return !1;
            return !0
        }
    };
    T.U.or = function(b) {
        var c = arguments,
            d = c.length;
        return function() {
            for (var e = 0; e < d; e++)
                if (c[e].apply(this, arguments)) return !0;
            return !1
        }
    };
    T.U.yn = function(b) { return function() { return !b.apply(this, arguments) } };
    T.U.create = function(b, c) {
        function d() {}
        d.prototype = b.prototype;
        var e = new d;
        b.apply(e, Array.prototype.slice.call(arguments, 1));
        return e
    };
    T.U.Mj = !0;
    T.U.tl = function(b) {
        var c = !1,
            d;
        return function() {
            if (!T.U.Mj) return b();
            c || (d = b(), c = !0);
            return d
        }
    };
    T.U.once = function(b) {
        var c = b;
        return function() {
            if (c) {
                var d = c;
                c = null;
                d()
            }
        }
    };
    T.U.Mt = function(b, c, d) {
        var e = 0;
        return function(f) {
            T.global.clearTimeout(e);
            var g = arguments;
            e = T.global.setTimeout(function() { b.apply(d, g) }, c)
        }
    };
    T.U.Dx = function(b, c, d) {
        function e() {
            g = T.global.setTimeout(f, c);
            b.apply(d, h)
        }

        function f() {
            g = 0;
            k && (k = !1, e())
        }
        var g = 0,
            k = !1,
            h = [];
        return function(m) {
            h = arguments;
            g ? k = !0 : e()
        }
    };
    T.U.sw = function(b, c, d) {
        function e() { f = 0 }
        var f = 0;
        return function(g) { f || (f = T.global.setTimeout(e, c), b.apply(d, arguments)) }
    };
    T.a.zq = O();
    T.a.f = function(b) { this.yo = b };
    T.a.f.prototype.toString = P("yo");
    T.a.f.Wo = new T.a.f("A");
    T.a.f.Xo = new T.a.f("ABBR");
    T.a.f.Zo = new T.a.f("ACRONYM");
    T.a.f.$o = new T.a.f("ADDRESS");
    T.a.f.ep = new T.a.f("APPLET");
    T.a.f.fp = new T.a.f("AREA");
    T.a.f.gp = new T.a.f("ARTICLE");
    T.a.f.hp = new T.a.f("ASIDE");
    T.a.f.mp = new T.a.f("AUDIO");
    T.a.f.np = new T.a.f("B");
    T.a.f.op = new T.a.f("BASE");
    T.a.f.pp = new T.a.f("BASEFONT");
    T.a.f.qp = new T.a.f("BDI");
    T.a.f.rp = new T.a.f("BDO");
    T.a.f.up = new T.a.f("BIG");
    T.a.f.vp = new T.a.f("BLOCKQUOTE");
    T.a.f.wp = new T.a.f("BODY");
    T.a.f.Rf = new T.a.f("BR");
    T.a.f.xp = new T.a.f("BUTTON");
    T.a.f.yp = new T.a.f("CANVAS");
    T.a.f.zp = new T.a.f("CAPTION");
    T.a.f.Bp = new T.a.f("CENTER");
    T.a.f.Cp = new T.a.f("CITE");
    T.a.f.Dp = new T.a.f("CODE");
    T.a.f.Ep = new T.a.f("COL");
    T.a.f.Fp = new T.a.f("COLGROUP");
    T.a.f.Gp = new T.a.f("COMMAND");
    T.a.f.Ip = new T.a.f("DATA");
    T.a.f.Jp = new T.a.f("DATALIST");
    T.a.f.Kp = new T.a.f("DD");
    T.a.f.Lp = new T.a.f("DEL");
    T.a.f.Np = new T.a.f("DETAILS");
    T.a.f.Op = new T.a.f("DFN");
    T.a.f.Pp = new T.a.f("DIALOG");
    T.a.f.Qp = new T.a.f("DIR");
    T.a.f.Rp = new T.a.f("DIV");
    T.a.f.Sp = new T.a.f("DL");
    T.a.f.Vp = new T.a.f("DT");
    T.a.f.Yp = new T.a.f("EM");
    T.a.f.Zp = new T.a.f("EMBED");
    T.a.f.gq = new T.a.f("FIELDSET");
    T.a.f.hq = new T.a.f("FIGCAPTION");
    T.a.f.iq = new T.a.f("FIGURE");
    T.a.f.jq = new T.a.f("FONT");
    T.a.f.kq = new T.a.f("FOOTER");
    T.a.f.lq = new T.a.f("FORM");
    T.a.f.mq = new T.a.f("FRAME");
    T.a.f.nq = new T.a.f("FRAMESET");
    T.a.f.oq = new T.a.f("H1");
    T.a.f.pq = new T.a.f("H2");
    T.a.f.qq = new T.a.f("H3");
    T.a.f.rq = new T.a.f("H4");
    T.a.f.sq = new T.a.f("H5");
    T.a.f.tq = new T.a.f("H6");
    T.a.f.uq = new T.a.f("HEAD");
    T.a.f.vq = new T.a.f("HEADER");
    T.a.f.wq = new T.a.f("HGROUP");
    T.a.f.xq = new T.a.f("HR");
    T.a.f.yq = new T.a.f("HTML");
    T.a.f.Aq = new T.a.f("I");
    T.a.f.Dq = new T.a.f("IFRAME");
    T.a.f.Eq = new T.a.f("IMG");
    T.a.f.Fq = new T.a.f("INPUT");
    T.a.f.Gq = new T.a.f("INS");
    T.a.f.Lq = new T.a.f("ISINDEX");
    T.a.f.Oq = new T.a.f("KBD");
    T.a.f.Pq = new T.a.f("KEYGEN");
    T.a.f.Qq = new T.a.f("LABEL");
    T.a.f.Sq = new T.a.f("LEGEND");
    T.a.f.Tq = new T.a.f("LI");
    T.a.f.Uq = new T.a.f("LINK");
    T.a.f.Yq = new T.a.f("MAIN");
    T.a.f.Zq = new T.a.f("MAP");
    T.a.f.$q = new T.a.f("MARK");
    T.a.f.ar = new T.a.f("MATH");
    T.a.f.cr = new T.a.f("MENU");
    T.a.f.dr = new T.a.f("MENUITEM");
    T.a.f.er = new T.a.f("META");
    T.a.f.fr = new T.a.f("METER");
    T.a.f.ir = new T.a.f("NAV");
    T.a.f.jr = new T.a.f("NOFRAMES");
    T.a.f.kr = new T.a.f("NOSCRIPT");
    T.a.f.nr = new T.a.f("OBJECT");
    T.a.f.qr = new T.a.f("OL");
    T.a.f.rr = new T.a.f("OPTGROUP");
    T.a.f.sr = new T.a.f("OPTION");
    T.a.f.tr = new T.a.f("OUTPUT");
    T.a.f.ur = new T.a.f("P");
    T.a.f.vr = new T.a.f("PARAM");
    T.a.f.wr = new T.a.f("PICTURE");
    T.a.f.yr = new T.a.f("PRE");
    T.a.f.Ar = new T.a.f("PROGRESS");
    T.a.f.Q = new T.a.f("Q");
    T.a.f.Br = new T.a.f("RP");
    T.a.f.Cr = new T.a.f("RT");
    T.a.f.Dr = new T.a.f("RTC");
    T.a.f.Er = new T.a.f("RUBY");
    T.a.f.Gr = new T.a.f("S");
    T.a.f.Jr = new T.a.f("SAMP");
    T.a.f.Kr = new T.a.f(ca);
    T.a.f.Lr = new T.a.f("SECTION");
    T.a.f.Mr = new T.a.f("SELECT");
    T.a.f.Or = new T.a.f("SMALL");
    T.a.f.Pr = new T.a.f("SOURCE");
    T.a.f.Qr = new T.a.f("SPAN");
    T.a.f.Sr = new T.a.f("STRIKE");
    T.a.f.Tr = new T.a.f("STRONG");
    T.a.f.Ur = new T.a.f("STYLE");
    T.a.f.Vr = new T.a.f("SUB");
    T.a.f.Wr = new T.a.f("SUMMARY");
    T.a.f.Xr = new T.a.f("SUP");
    T.a.f.Yr = new T.a.f("SVG");
    T.a.f.Zr = new T.a.f("TABLE");
    T.a.f.$r = new T.a.f("TBODY");
    T.a.f.bs = new T.a.f("TD");
    T.a.f.cs = new T.a.f("TEMPLATE");
    T.a.f.ds = new T.a.f("TEXTAREA");
    T.a.f.es = new T.a.f("TFOOT");
    T.a.f.fs = new T.a.f("TH");
    T.a.f.gs = new T.a.f("THEAD");
    T.a.f.hs = new T.a.f("TIME");
    T.a.f.js = new T.a.f("TITLE");
    T.a.f.ks = new T.a.f("TR");
    T.a.f.ls = new T.a.f("TRACK");
    T.a.f.qs = new T.a.f("TT");
    T.a.f.ss = new T.a.f("U");
    T.a.f.ts = new T.a.f("UL");
    T.a.f.us = new T.a.f("VAR");
    T.a.f.vs = new T.a.f("VIDEO");
    T.a.f.ws = new T.a.f("WBR");
    T.a.tags = {};
    T.a.tags.Uk = { area: !0, base: !0, br: !0, col: !0, command: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 };
    T.a.tags.Zm = function(b) { return !0 === T.a.tags.Uk[b] };
    T.b = {};
    T.b.Ob = {};
    T.b.Ob.Tb = T.bd ? T.Yg(T.bd + "#html") : null;
    T.c.rs = O();
    T.c.F = function(b, c) {
        this.zf = b === T.c.F.$f && c || "";
        this.Jk = T.c.F.rg
    };
    T.c.F.prototype.Ra = !0;
    T.c.F.prototype.Ea = P("zf");
    T.ma && (T.c.F.prototype.toString = function() { return "Const{" + this.zf + "}" });
    T.c.F.D = function(b) {
        if (b instanceof T.c.F && b.constructor === T.c.F && b.Jk === T.c.F.rg) return b.zf;
        T.m.va("expected object of type Const, got '" + b + "'");
        return "type_error:Const"
    };
    T.c.F.from = function(b) { return new T.c.F(T.c.F.$f, b) };
    T.c.F.rg = {};
    T.c.F.$f = {};
    T.c.F.EMPTY = T.c.F.from("");
    T.b.V = function() {
        this.Kd = "";
        this.Ak = T.b.V.ua
    };
    T.b.V.prototype.Ra = !0;
    T.b.V.ua = {};
    T.b.V.Fc = function(b) { b = T.c.F.D(b); return 0 === b.length ? T.b.V.EMPTY : T.b.V.wc(b) };
    T.b.V.nu = function(b, c) { for (var d = [], e = 1; e < arguments.length; e++) d.push(T.b.V.ij(arguments[e])); return T.b.V.wc("(" + T.c.F.D(b) + ")(" + d.join(", ") + ");") };
    T.b.V.qu = function(b) { return T.b.V.wc(T.b.V.ij(b)) };
    T.b.V.prototype.Ea = function() { return this.Kd.toString() };
    T.ma && (T.b.V.prototype.toString = function() { return "SafeScript{" + this.Kd + "}" });
    T.b.V.D = function(b) { return T.b.V.sj(b).toString() };
    T.b.V.sj = function(b) {
        if (b instanceof T.b.V && b.constructor === T.b.V && b.Ak === T.b.V.ua) return b.Kd;
        T.m.va("expected object of type SafeScript, got '" + b + a + T.ra(b));
        return "type_error:SafeScript"
    };
    T.b.V.ij = function(b) { return JSON.stringify(b).replace(/</g, "\\x3c") };
    T.b.V.wc = function(b) { return (new T.b.V).Lb(b) };
    T.b.V.prototype.Lb = function(b) { this.Kd = T.b.Ob.Tb ? T.b.Ob.Tb.createScript(b) : b; return this };
    T.b.V.EMPTY = T.b.V.wc("");
    T.da = {};
    T.da.url = {};
    T.da.url.ye = function(b) { return T.da.url.Vh().createObjectURL(b) };
    T.da.url.Ew = function(b) { T.da.url.Vh().revokeObjectURL(b) };
    T.da.url.ug = O();
    T.da.url.ug.prototype.createObjectURL = O();
    T.da.url.ug.prototype.revokeObjectURL = O();
    T.da.url.Vh = function() { var b = T.da.url.lh(); if (null != b) return b; throw Error("This browser doesn't seem to support blob URLs"); };
    T.da.url.lh = function() { return void 0 !== T.global.URL && void 0 !== T.global.URL.createObjectURL ? T.global.URL : void 0 !== T.global.webkitURL && void 0 !== T.global.webkitURL.createObjectURL ? T.global.webkitURL : void 0 !== T.global.createObjectURL ? T.global : null };
    T.da.url.ct = function() { return null != T.da.url.lh() };
    T.da.blob = {};
    T.da.blob.getBlob = function(b) { var c = T.global.BlobBuilder || T.global.WebKitBlobBuilder; if (void 0 !== c) { c = new c; for (var d = 0; d < arguments.length; d++) c.append(arguments[d]); return c.getBlob() } return T.da.blob.rh(T.g.Za(arguments)) };
    T.da.blob.rh = function(b, c) { var d = T.global.BlobBuilder || T.global.WebKitBlobBuilder; if (void 0 !== d) { d = new d; for (var e = 0; e < b.length; e++) d.append(b[e], void 0); return d.getBlob(c) } if (void 0 !== T.global.Blob) return d = {}, c && (d.type = c), new Blob(b, d); throw Error("This browser doesn't seem to support creating Blobs"); };
    T.b.I = function(b, c) {
        this.kf = b === T.b.I.rc && c || "";
        this.Mk = T.b.I.ua
    };
    T.b.I.prototype.Ra = !0;
    T.b.I.prototype.Ea = function() { return this.kf.toString() };
    T.b.I.prototype.Xe = !0;
    T.b.I.prototype.tb = function() { return T.i.j.$.zb };
    T.ma && (T.b.I.prototype.toString = function() { return "TrustedResourceUrl{" + this.kf + "}" });
    T.b.I.D = function(b) { return T.b.I.Xd(b).toString() };
    T.b.I.Xd = function(b) {
        if (b instanceof T.b.I && b.constructor === T.b.I && b.Mk === T.b.I.ua) return b.kf;
        T.m.va("expected object of type TrustedResourceUrl, got '" + b + a + T.ra(b));
        return "type_error:TrustedResourceUrl"
    };
    T.b.I.format = function(b, c) {
        var d = T.c.F.D(b);
        if (!T.b.I.Kj.test(d)) throw Error("Invalid TrustedResourceUrl format: " + d);
        b = d.replace(T.b.I.gk, function(e, f) {
            if (!Object.prototype.hasOwnProperty.call(c, f)) throw Error('Found marker, "' + f + '", in format string, "' + d + '", but no valid label mapping found in args: ' + JSON.stringify(c));
            e = c[f];
            return e instanceof T.c.F ? T.c.F.D(e) : encodeURIComponent(String(e))
        });
        return T.b.I.Xb(b)
    };
    T.b.I.gk = /%{(\w+)}/g;
    T.b.I.Kj = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i;
    T.b.I.Pk = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
    T.b.I.ku = function(b, c, d, e) {
        b = T.b.I.format(b, c);
        b = T.b.I.D(b);
        b = T.b.I.Pk.exec(b);
        c = b[3] || "";
        return T.b.I.Xb(b[1] + T.b.I.hj("?", b[2] || "", d) + T.b.I.hj("#", c, e))
    };
    T.b.I.Fc = function(b) { return T.b.I.Xb(T.c.F.D(b)) };
    T.b.I.ou = function(b) { for (var c = "", d = 0; d < b.length; d++) c += T.c.F.D(b[d]); return T.b.I.Xb(c) };
    T.b.I.tu = function(b) {
        b = T.da.blob.rh([T.b.V.D(b)], ua);
        b = T.da.url.ye(b);
        return T.b.I.Xb(b)
    };
    T.b.I.ua = {};
    T.b.I.Xb = function(b) { b = T.b.Ob.Tb ? T.b.Ob.Tb.createScriptURL(b) : b; return new T.b.I(T.b.I.rc, b) };
    T.b.I.hj = function(b, c, d) {
        if (null == d) return c;
        if (typeof d === I) return d ? b + encodeURIComponent(d) : "";
        for (var e in d) {
            var f = d[e];
            f = Array.isArray(f) ? f : [f];
            for (var g = 0; g < f.length; g++) {
                var k = f[g];
                null != k && (c || (c = b), c += (c.length > b.length ? "&" : "") + encodeURIComponent(e) + "=" + encodeURIComponent(String(k)))
            }
        }
        return c
    };
    T.b.I.rc = {};
    T.b.s = function(b, c) {
        this.jf = b === T.b.s.rc && c || "";
        this.Dk = T.b.s.ua
    };
    T.b.s.oa = "about:invalid#zClosurez";
    T.b.s.prototype.Ra = !0;
    T.b.s.prototype.Ea = function() { return this.jf.toString() };
    T.b.s.prototype.Xe = !0;
    T.b.s.prototype.tb = function() { return T.i.j.$.zb };
    T.ma && (T.b.s.prototype.toString = function() { return "SafeUrl{" + this.jf + "}" });
    T.b.s.D = function(b) {
        if (b instanceof T.b.s && b.constructor === T.b.s && b.Dk === T.b.s.ua) return b.jf;
        T.m.va("expected object of type SafeUrl, got '" + b + a + T.ra(b));
        return "type_error:SafeUrl"
    };
    T.b.s.Fc = function(b) { return T.b.s.ya(T.c.F.D(b)) };
    T.b.zk = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i;
    T.b.s.wi = function(b) { return T.b.zk.test(b) };
    T.b.s.mu = function(b) { b = T.b.s.wi(b.type) ? T.da.url.ye(b) : T.b.s.oa; return T.b.s.ya(b) };
    T.b.s.ru = function(b) { b = b instanceof MediaSource ? T.da.url.ye(b) : T.b.s.oa; return T.b.s.ya(b) };
    T.b.Vj = /^data:([^,]*);base64,[a-z0-9+\/]+=*$/i;
    T.b.s.Zl = function(b) {
        b = b.replace(/(%0A|%0D)/g, "");
        var c = b.match(T.b.Vj);
        c = c && T.b.s.wi(c[1]);
        return T.b.s.ya(c ? b : T.b.s.oa)
    };
    T.b.s.xu = function(b) { T.c.A.Cb(b, "tel:") || (b = T.b.s.oa); return T.b.s.ya(b) };
    T.b.Hk = /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i;
    T.b.s.uu = function(b) { T.b.Hk.test(decodeURIComponent(b)) || (b = T.b.s.oa); return T.b.s.ya(b) };
    T.b.s.pu = function(b) { T.c.A.Cb(b, "fb-messenger://share") || (b = T.b.s.oa); return T.b.s.ya(b) };
    T.b.s.zu = function(b) { T.c.A.Cb(b, "whatsapp://send") || (b = T.b.s.oa); return T.b.s.ya(b) };
    T.b.s.vu = function(b) { T.c.A.Cb(b, "sms:") && T.b.s.Vm(b) || (b = T.b.s.oa); return T.b.s.ya(b) };
    T.b.s.Vm = function(b) {
        var c = b.indexOf("#");
        0 < c && (b = b.substring(0, c));
        c = b.match(/[?&]body=/gi);
        if (!c) return !0;
        if (1 < c.length) return !1;
        b = b.match(/[?&]body=([^&]*)/)[1];
        if (!b) return !0;
        try { decodeURIComponent(b) } catch (d) { return !1 }
        return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(b)
    };
    T.b.s.wu = function(b) { T.c.A.Cb(b, "ssh://") || (b = T.b.s.oa); return T.b.s.ya(b) };
    T.b.s.Lw = function(b, c) { return T.b.s.pf(/^chrome-extension:\/\/([^\/]+)\//, b, c) };
    T.b.s.Nw = function(b, c) { return T.b.s.pf(/^moz-extension:\/\/([^\/]+)\//, b, c) };
    T.b.s.Mw = function(b, c) { return T.b.s.pf(/^ms-browser-extension:\/\/([^\/]+)\//, b, c) };
    T.b.s.pf = function(b, c, d) {
        (b = b.exec(c)) ? (b = b[1], -1 == (d instanceof T.c.F ? [T.c.F.D(d)] : d.map(function(e) { return T.c.F.D(e) })).indexOf(b) && (c = T.b.s.oa)) : c = T.b.s.oa;
        return T.b.s.ya(c)
    };
    T.b.s.yu = function(b) { return T.b.s.ya(T.b.I.D(b)) };
    T.b.le = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    T.b.s.Ir = T.b.le;
    T.b.s.Rd = function(b) {
        if (b instanceof T.b.s) return b;
        b = typeof b == F && b.Ra ? b.Ea() : String(b);
        T.b.le.test(b) || (b = T.b.s.oa);
        return T.b.s.ya(b)
    };
    T.b.s.Oa = function(b, c) {
        if (b instanceof T.b.s) return b;
        b = typeof b == F && b.Ra ? b.Ea() : String(b);
        if (c && /^data:/i.test(b) && (c = T.b.s.Zl(b), c.Ea() == b)) return c;
        T.b.le.test(b) || (b = T.b.s.oa);
        return T.b.s.ya(b)
    };
    T.b.s.ua = {};
    T.b.s.ya = function(b) { return new T.b.s(T.b.s.rc, b) };
    T.b.s.Yo = T.b.s.ya("about:blank");
    T.b.s.rc = {};
    T.b.G = function() {
        this.Md = "";
        this.Ck = T.b.G.ua
    };
    T.b.G.prototype.Ra = !0;
    T.b.G.ua = {};
    T.b.G.Fc = function(b) { b = T.c.F.D(b); return 0 === b.length ? T.b.G.EMPTY : T.b.G.xc(b) };
    T.b.G.prototype.Ea = P("Md");
    T.ma && (T.b.G.prototype.toString = function() { return "SafeStyle{" + this.Md + "}" });
    T.b.G.D = function(b) {
        if (b instanceof T.b.G && b.constructor === T.b.G && b.Ck === T.b.G.ua) return b.Md;
        T.m.va("expected object of type SafeStyle, got '" + b + a + T.ra(b));
        return "type_error:SafeStyle"
    };
    T.b.G.xc = function(b) { return (new T.b.G).Lb(b) };
    T.b.G.prototype.Lb = function(b) { this.Md = b; return this };
    T.b.G.EMPTY = T.b.G.xc("");
    T.b.G.oa = "zClosurez";
    T.b.G.create = function(b) {
        var c = "",
            d;
        for (d in b) {
            if (!/^[-_a-zA-Z0-9]+$/.test(d)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + d);
            var e = b[d];
            null != e && (e = Array.isArray(e) ? T.g.map(e, T.b.G.Zi).join(" ") : T.b.G.Zi(e), c += d + ":" + e + ";")
        }
        return c ? T.b.G.xc(c) : T.b.G.EMPTY
    };
    T.b.G.Zi = function(b) {
        if (b instanceof T.b.s) return 'url("' + T.b.s.D(b).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        b = b instanceof T.c.F ? T.c.F.D(b) : T.b.G.eo(String(b));
        if (/[{;}]/.test(b)) throw new T.m.pc("Value does not allow [{;}], got: %s.", [b]);
        return b
    };
    T.b.G.eo = function(b) {
        var c = b.replace(T.b.G.Zf, "$1").replace(T.b.G.Zf, "$1").replace(T.b.G.sg, "url");
        if (T.b.G.Rk.test(c)) { if (T.b.G.Sj.test(b)) return T.m.va("String value disallows comments, got: " + b), T.b.G.oa; if (!T.b.G.xm(b)) return T.m.va("String value requires balanced quotes, got: " + b), T.b.G.oa; if (!T.b.G.ym(b)) return T.m.va("String value requires balanced square brackets and one identifier per pair of brackets, got: " + b), T.b.G.oa } else return T.m.va("String value allows only " + T.b.G.wg + " and simple functions, got: " +
            b), T.b.G.oa;
        return T.b.G.fo(b)
    };
    T.b.G.xm = function(b) { for (var c = !0, d = !0, e = 0; e < b.length; e++) { var f = b.charAt(e); "'" == f && d ? c = !c : '"' == f && c && (d = !d) } return c && d };
    T.b.G.ym = function(b) {
        for (var c = !0, d = /^[-_a-zA-Z0-9]$/, e = 0; e < b.length; e++) {
            var f = b.charAt(e);
            if ("]" == f) {
                if (c) return !1;
                c = !0
            } else if ("[" == f) {
                if (!c) return !1;
                c = !1
            } else if (!c && !d.test(f)) return !1
        }
        return c
    };
    T.b.G.wg = "[-,.\"'%_!# a-zA-Z0-9\\[\\]]";
    T.b.G.Rk = new RegExp("^" + T.b.G.wg + "+$");
    T.b.G.sg = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;
    T.b.G.Bj = "calc cubic-bezier fit-content hsl hsla linear-gradient matrix minmax repeat rgb rgba (rotate|scale|translate)(X|Y|Z|3d)?".split(" ");
    T.b.G.Zf = new RegExp("\\b(" + T.b.G.Bj.join("|") + ")\\([-+*/0-9a-z.%\\[\\], ]+\\)", "g");
    T.b.G.Sj = /\/\*/;
    T.b.G.fo = function(b) {
        return b.replace(T.b.G.sg, function(c, d, e, f) {
            var g = "";
            e = e.replace(/^(['"])(.*)\1$/, function(k, h, m) { g = h; return m });
            c = T.b.s.Rd(e).Ea();
            return d + g + c + g + f
        })
    };
    T.b.G.concat = function(b) {
        function c(e) { Array.isArray(e) ? T.g.forEach(e, c) : d += T.b.G.D(e) }
        var d = "";
        T.g.forEach(arguments, c);
        return d ? T.b.G.xc(d) : T.b.G.EMPTY
    };
    T.b.X = function() {
        this.Ld = "";
        this.Bk = T.b.X.ua
    };
    T.b.X.prototype.Ra = !0;
    T.b.X.ua = {};
    T.b.X.Ct = function(b, c) {
        if (T.c.A.contains(b, "<")) throw Error("Selector does not allow '<', got: " + b);
        var d = b.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
        if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(d)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + b);
        if (!T.b.X.wm(d)) throw Error("() and [] in selector must be balanced, got: " + b);
        c instanceof T.b.G || (c = T.b.G.create(c));
        b = b + "{" + T.b.G.D(c).replace(/</g, "\\3C ") + "}";
        return T.b.X.yc(b)
    };
    T.b.X.wm = function(b) {
        for (var c = { "(": ")", "[": "]" }, d = [], e = 0; e < b.length; e++) {
            var f = b[e];
            if (c[f]) d.push(c[f]);
            else if (T.object.contains(c, f) && d.pop() != f) return !1
        }
        return 0 == d.length
    };
    T.b.X.concat = function(b) {
        function c(e) { Array.isArray(e) ? T.g.forEach(e, c) : d += T.b.X.D(e) }
        var d = "";
        T.g.forEach(arguments, c);
        return T.b.X.yc(d)
    };
    T.b.X.Fc = function(b) { b = T.c.F.D(b); return 0 === b.length ? T.b.X.EMPTY : T.b.X.yc(b) };
    T.b.X.prototype.Ea = P("Ld");
    T.ma && (T.b.X.prototype.toString = function() { return "SafeStyleSheet{" + this.Ld + "}" });
    T.b.X.D = function(b) {
        if (b instanceof T.b.X && b.constructor === T.b.X && b.Bk === T.b.X.ua) return b.Ld;
        T.m.va("expected object of type SafeStyleSheet, got '" + b + a + T.ra(b));
        return "type_error:SafeStyleSheet"
    };
    T.b.X.yc = function(b) { return (new T.b.X).Lb(b) };
    T.b.X.prototype.Lb = function(b) { this.Ld = b; return this };
    T.b.X.EMPTY = T.b.X.yc("");
    T.b.u = function() {
        this.Jd = "";
        this.yk = T.b.u.ua;
        this.nd = null
    };
    T.b.u.Ua = T.ma;
    T.b.u.Kk = !0;
    T.b.u.prototype.Xe = !0;
    T.b.u.prototype.tb = P("nd");
    T.b.u.prototype.Ra = !0;
    T.b.u.prototype.Ea = function() { return this.Jd.toString() };
    T.ma && (T.b.u.prototype.toString = function() { return "SafeHtml{" + this.Jd + "}" });
    T.b.u.D = function(b) { return T.b.u.yb(b).toString() };
    T.b.u.yb = function(b) {
        if (b instanceof T.b.u && b.constructor === T.b.u && b.yk === T.b.u.ua) return b.Jd;
        T.m.va("expected object of type SafeHtml, got '" + b + a + T.ra(b));
        return "type_error:SafeHtml"
    };
    T.b.u.Fa = function(b) {
        if (b instanceof T.b.u) return b;
        var c = typeof b == F,
            d = null;
        c && b.Xe && (d = b.tb());
        return T.b.u.Pa(T.c.A.Fa(c && b.Ra ? b.Ea() : String(b)), d)
    };
    T.b.u.ev = function(b) {
        if (b instanceof T.b.u) return b;
        b = T.b.u.Fa(b);
        return T.b.u.Pa(T.c.A.Oc(T.b.u.D(b)), b.tb())
    };
    T.b.u.fv = function(b) {
        if (b instanceof T.b.u) return b;
        b = T.b.u.Fa(b);
        return T.b.u.Pa(T.c.A.vj(T.b.u.D(b)), b.tb())
    };
    T.b.u.from = T.b.u.Fa;
    T.b.u.vg = /^[a-zA-Z0-9-]+$/;
    T.b.u.Ok = { action: !0, cite: !0, data: !0, formaction: !0, href: !0, manifest: !0, poster: !0, src: !0 };
    T.b.u.sk = { APPLET: !0, BASE: !0, EMBED: !0, IFRAME: !0, LINK: !0, MATH: !0, META: !0, OBJECT: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0 };
    T.b.u.create = function(b, c, d) { T.b.u.Ro(String(b)); return T.b.u.Hb(String(b), c, d) };
    T.b.u.Ro = function(b) { if (!T.b.u.vg.test(b)) throw Error(T.b.u.Ua ? "Invalid tag name <" + b + ">." : ""); if (b.toUpperCase() in T.b.u.sk) throw Error(T.b.u.Ua ? "Tag name <" + b + "> is not allowed for SafeHtml." : ""); };
    T.b.u.yt = function(b, c, d, e) {
        b && T.b.I.D(b);
        var f = {};
        f.src = b || null;
        f.srcdoc = c && T.b.u.D(c);
        b = T.b.u.kd(f, { sandbox: "" }, d);
        return T.b.u.Hb("iframe", b, e)
    };
    T.b.u.Dt = function(b, c, d, e) {
        if (!T.b.u.ul()) throw Error(T.b.u.Ua ? "The browser does not support sandboxed iframes." : "");
        var f = {};
        f.src = b ? T.b.s.D(T.b.s.Rd(b)) : null;
        f.srcdoc = c || null;
        f.sandbox = "";
        b = T.b.u.kd(f, {}, d);
        return T.b.u.Hb("iframe", b, e)
    };
    T.b.u.ul = function() { return T.global.HTMLIFrameElement && "sandbox" in T.global.HTMLIFrameElement.prototype };
    T.b.u.Et = function(b, c) {
        T.b.I.D(b);
        b = T.b.u.kd({ src: b }, {}, c);
        return T.b.u.Hb(sa, b)
    };
    T.b.u.createScript = function(b, c) {
        for (var d in c) { var e = d.toLowerCase(); if ("language" == e || "src" == e || "text" == e || "type" == e) throw Error(T.b.u.Ua ? 'Cannot set "' + e + '" attribute' : ""); }
        d = "";
        b = T.g.concat(b);
        for (e = 0; e < b.length; e++) d += T.b.V.D(b[e]);
        b = T.b.u.Pa(d, T.i.j.$.Va);
        return T.b.u.Hb(sa, c, b)
    };
    T.b.u.Ft = function(b, c) {
        c = T.b.u.kd({ type: "text/css" }, {}, c);
        var d = "";
        b = T.g.concat(b);
        for (var e = 0; e < b.length; e++) d += T.b.X.D(b[e]);
        b = T.b.u.Pa(d, T.i.j.$.Va);
        return T.b.u.Hb("style", c, b)
    };
    T.b.u.Bt = function(b, c) {
        b = T.b.s.D(T.b.s.Rd(b));
        (T.h.userAgent.B.Bd() || T.h.userAgent.B.wb()) && T.c.A.contains(b, ";") && (b = "'" + b.replace(/'/g, "%27") + "'");
        return T.b.u.Hb("meta", { "http-equiv": "refresh", content: (c || 0) + "; url=" + b })
    };
    T.b.u.am = function(b, c, d) {
        if (d instanceof T.c.F) d = T.c.F.D(d);
        else if ("style" == c.toLowerCase())
            if (T.b.u.Kk) d = T.b.u.qm(d);
            else throw Error(T.b.u.Ua ? 'Attribute "style" not supported.' : "");
        else {
            if (/^on/i.test(c)) throw Error(T.b.u.Ua ? 'Attribute "' + c + '" requires goog.string.Const value, "' + d + '" given.' : "");
            if (c.toLowerCase() in T.b.u.Ok)
                if (d instanceof T.b.I) d = T.b.I.D(d);
                else if (d instanceof T.b.s) d = T.b.s.D(d);
            else if (typeof d === I) d = T.b.s.Rd(d).Ea();
            else throw Error(T.b.u.Ua ? 'Attribute "' + c + '" on tag "' +
                b + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + d + '" given.' : "");
        }
        d.Ra && (d = d.Ea());
        return c + '="' + T.c.A.Fa(String(d)) + '"'
    };
    T.b.u.qm = function(b) {
        if (!T.Ba(b)) throw Error(T.b.u.Ua ? 'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof b + " given: " + b : "");
        b instanceof T.b.G || (b = T.b.G.create(b));
        return T.b.G.D(b)
    };
    T.b.u.Jt = function(b, c, d, e) {
        c = T.b.u.create(c, d, e);
        c.nd = b;
        return c
    };
    T.b.u.join = function(b, c) {
        function d(g) { Array.isArray(g) ? T.g.forEach(g, d) : (g = T.b.u.Fa(g), f.push(T.b.u.D(g)), g = g.tb(), e == T.i.j.$.Va ? e = g : g != T.i.j.$.Va && e != g && (e = null)) }
        b = T.b.u.Fa(b);
        var e = b.tb(),
            f = [];
        T.g.forEach(c, d);
        return T.b.u.Pa(f.join(T.b.u.D(b)), e)
    };
    T.b.u.concat = function(b) { return T.b.u.join(T.b.u.EMPTY, Array.prototype.slice.call(arguments)) };
    T.b.u.st = function(b, c) {
        var d = T.b.u.concat(T.g.slice(arguments, 1));
        d.nd = b;
        return d
    };
    T.b.u.ua = {};
    T.b.u.Pa = function(b, c) { return (new T.b.u).Lb(b, c) };
    T.b.u.prototype.Lb = function(b, c) {
        this.Jd = T.b.Ob.Tb ? T.b.Ob.Tb.createHTML(b) : b;
        this.nd = c;
        return this
    };
    T.b.u.Hb = function(b, c, d) {
        var e = null;
        var f = "<" + b + T.b.u.wo(b, c);
        null == d ? d = [] : Array.isArray(d) || (d = [d]);
        T.a.tags.Zm(b.toLowerCase()) ? f += ">" : (e = T.b.u.concat(d), f += ">" + T.b.u.D(e) + "</" + b + ">", e = e.tb());
        (b = c && c.dir) && (e = /^(ltr|rtl|auto)$/i.test(b) ? T.i.j.$.Va : null);
        return T.b.u.Pa(f, e)
    };
    T.b.u.wo = function(b, c) {
        var d = "";
        if (c)
            for (var e in c) {
                if (!T.b.u.vg.test(e)) throw Error(T.b.u.Ua ? 'Invalid attribute name "' + e + '".' : "");
                var f = c[e];
                null != f && (d += " " + T.b.u.am(b, e, f))
            }
        return d
    };
    T.b.u.kd = function(b, c, d) {
        var e = {},
            f;
        for (f in b) e[f] = b[f];
        for (f in c) e[f] = c[f];
        if (d)
            for (f in d) {
                var g = f.toLowerCase();
                if (g in b) throw Error(T.b.u.Ua ? 'Cannot override "' + g + '" attribute, got "' + f + '" with value "' + d[f] + '"' : "");
                g in c && delete e[g];
                e[f] = d[f]
            }
        return e
    };
    T.b.u.Tp = T.b.u.Pa("<!DOCTYPE html>", T.i.j.$.Va);
    T.b.u.EMPTY = T.b.u.Pa("", T.i.j.$.Va);
    T.b.u.Rf = T.b.u.Pa("<br>", T.i.j.$.Va);
    T.b.ib = {};
    T.b.ib.Wi = function(b, c) { return T.b.u.Pa(c, null) };
    T.b.ib.Iw = function(b, c) { return T.b.V.wc(c) };
    T.b.ib.Jw = function(b, c) { return T.b.G.xc(c) };
    T.b.ib.Kw = function(b, c) { return T.b.X.yc(c) };
    T.b.ib.bo = function(b, c) { return T.b.s.ya(c) };
    T.b.ib.Kx = function(b, c) { return T.b.I.Xb(c) };
    T.a.N = {};
    T.a.N.Mq = { ap: "afterbegin", bp: "afterend", sp: "beforebegin", tp: "beforeend" };
    T.a.N.hv = function(b, c, d) { b.insertAdjacentHTML(c, T.b.u.yb(d)) };
    T.a.N.Gk = { MATH: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0 };
    T.a.N.Nm = T.U.tl(function() {
        if (T.ma && "undefined" === typeof document) return !1;
        var b = document.createElement("div"),
            c = document.createElement("div");
        c.appendChild(document.createElement("div"));
        b.appendChild(c);
        if (T.ma && !b.firstChild) return !1;
        c = b.firstChild.firstChild;
        b.innerHTML = T.b.u.yb(T.b.u.EMPTY);
        return !c.parentElement
    });
    T.a.N.Mo = function(b, c) {
        if (T.a.N.Nm())
            for (; b.lastChild;) b.removeChild(b.lastChild);
        b.innerHTML = T.b.u.yb(c)
    };
    T.a.N.sf = function(b, c) {
        if (T.m.xa && T.a.N.Gk[b.tagName.toUpperCase()]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + b.tagName + ".");
        T.a.N.Mo(b, c)
    };
    T.a.N.ex = function(b, c) { b.outerHTML = T.b.u.yb(c) };
    T.a.N.Ww = function(b, c) {
        c = c instanceof T.b.s ? c : T.b.s.Oa(c);
        T.a.m.dl(b).action = T.b.s.D(c)
    };
    T.a.N.Qw = function(b, c) {
        c = c instanceof T.b.s ? c : T.b.s.Oa(c);
        T.a.m.bl(b).formAction = T.b.s.D(c)
    };
    T.a.N.ax = function(b, c) {
        c = c instanceof T.b.s ? c : T.b.s.Oa(c);
        T.a.m.gl(b).formAction = T.b.s.D(c)
    };
    T.a.N.ix = function(b, c) { b.style.cssText = T.b.G.D(c) };
    T.a.N.Ml = function(b) { b.write(T.b.u.yb(T.b.u.EMPTY)) };
    T.a.N.Ow = function(b, c) {
        T.a.m.$k(b);
        c = c instanceof T.b.s ? c : T.b.s.Oa(c);
        b.href = T.b.s.D(c)
    };
    T.a.N.ko = function(b, c) {
        T.a.m.fl(b);
        c = c instanceof T.b.s ? c : T.b.s.Oa(c, /^data:image\//i.test(c));
        b.src = T.b.s.D(c)
    };
    T.a.N.Pw = function(b, c) {
        T.a.m.al(b);
        c = c instanceof T.b.s ? c : T.b.s.Oa(c, /^data:audio\//i.test(c));
        b.src = T.b.s.D(c)
    };
    T.a.N.mx = function(b, c) {
        T.a.m.jl(b);
        c = c instanceof T.b.s ? c : T.b.s.Oa(c, /^data:video\//i.test(c));
        b.src = T.b.s.D(c)
    };
    T.a.N.Uw = function(b, c) {
        T.a.m.cl(b);
        b.src = T.b.I.Xd(c)
    };
    T.a.N.Yw = function(b, c) {
        T.a.m.el(b);
        b.src = T.b.I.D(c)
    };
    T.a.N.jo = function(b) {
        var c = T.b.I.Fc(T.c.F.EMPTY);
        T.a.m.Dg(b);
        b.src = T.b.I.D(c)
    };
    T.a.N.$w = function(b, c) {
        T.a.m.Dg(b);
        b.srcdoc = T.b.u.yb(c)
    };
    T.a.N.bx = function(b, c, d) {
        T.a.m.hl(b);
        b.rel = d;
        T.c.A.hd(d, "stylesheet") ? b.href = T.b.I.D(c) : b.href = c instanceof T.b.I ? T.b.I.D(c) : c instanceof T.b.s ? T.b.s.D(c) : T.b.s.D(T.b.s.Oa(c))
    };
    T.a.N.dx = function(b, c) {
        T.a.m.il(b);
        b.data = T.b.I.Xd(c)
    };
    T.a.N.oo = function(b, c) {
        T.a.m.Eg(b);
        b.src = T.b.I.Xd(c);
        (c = T.Rh()) && b.setAttribute("nonce", c)
    };
    T.a.N.hx = function(b, c) {
        T.a.m.Eg(b);
        b.text = T.b.V.sj(c);
        (c = T.Rh()) && b.setAttribute("nonce", c)
    };
    T.a.N.cx = function(b, c) {
        T.a.m.Fg(b);
        c = c instanceof T.b.s ? c : T.b.s.Oa(c);
        b.href = T.b.s.D(c)
    };
    T.a.N.Ys = function(b, c) {
        T.a.m.Fg(b);
        c = c instanceof T.b.s ? c : T.b.s.Oa(c);
        b.assign(T.b.s.D(c))
    };
    T.a.N.Aw = function(b, c) {
        c = c instanceof T.b.s ? c : T.b.s.Oa(c);
        b.replace(T.b.s.D(c))
    };
    T.a.N.lw = function(b, c, d, e, f) { b = b instanceof T.b.s ? b : T.b.s.Oa(b); return (c || T.global).open(T.b.s.D(b), d ? T.c.F.D(d) : "", e, f) };
    T.a.N.nw = function(b, c) { return T.a.N.parseFromString(b, c, "text/html") };
    T.a.N.parseFromString = function(b, c, d) { return b.parseFromString(T.b.u.yb(c), d) };
    T.a.N.zt = function(b) {
        if (!/^image\/.*/g.test(b.type)) throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");
        var c = T.global.URL.createObjectURL(b);
        b = new T.global.Image;
        b.onload = function() { T.global.URL.revokeObjectURL(c) };
        T.a.N.ko(b, T.b.ib.bo(T.c.F.from("Image blob URL."), c));
        return b
    };
    T.c.Yj = !1;
    T.c.dk = !1;
    T.c.tg = { gg: "\u00a0" };
    T.c.startsWith = T.c.A.startsWith;
    T.c.endsWith = T.c.A.endsWith;
    T.c.Cb = T.c.A.Cb;
    T.c.Mg = T.c.A.Mg;
    T.c.Ng = T.c.A.Ng;
    T.c.yx = function(b, c) { for (var d = b.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1); f.length && 1 < d.length;) e += d.shift() + f.shift(); return e + d.join("%s") };
    T.c.lt = function(b) { return b.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "") };
    T.c.Mc = T.c.A.Mc;
    T.c.vv = function(b) { return 0 == b.length };
    T.c.Aa = T.c.Mc;
    T.c.Jm = function(b) { return T.c.Mc(T.c.pn(b)) };
    T.c.uv = T.c.Jm;
    T.c.pv = function(b) { return !/[^\t\n\r ]/.test(b) };
    T.c.mv = function(b) { return !/[^a-zA-Z]/.test(b) };
    T.c.Hv = function(b) { return !/[^0-9]/.test(b) };
    T.c.nv = function(b) { return !/[^a-zA-Z0-9]/.test(b) };
    T.c.Nv = function(b) { return " " == b };
    T.c.Ov = function(b) { return 1 == b.length && " " <= b && "~" >= b || "\u0080" <= b && "\ufffd" >= b };
    T.c.wx = function(b) { return b.replace(/(\r\n|\r|\n)+/g, " ") };
    T.c.wl = function(b) { return b.replace(/(\r\n|\r|\n)/g, "\n") };
    T.c.hw = function(b) { return b.replace(/\xa0|\s/g, " ") };
    T.c.gw = function(b) { return b.replace(/\xa0|[ \t]+/g, " ") };
    T.c.kt = function(b) { return b.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "") };
    T.c.trim = T.c.A.trim;
    T.c.trimLeft = function(b) { return b.replace(/^[\s\xa0]+/, "") };
    T.c.trimRight = function(b) { return b.replace(/[\s\xa0]+$/, "") };
    T.c.gd = T.c.A.gd;
    T.c.Ri = function(b, c, d) { if (b == c) return 0; if (!b) return -1; if (!c) return 1; for (var e = b.toLowerCase().match(d), f = c.toLowerCase().match(d), g = Math.min(e.length, f.length), k = 0; k < g; k++) { d = e[k]; var h = f[k]; if (d != h) return b = parseInt(d, 10), !isNaN(b) && (c = parseInt(h, 10), !isNaN(c) && b - c) ? b - c : d < h ? -1 : 1 } return e.length != f.length ? e.length - f.length : b < c ? -1 : 1 };
    T.c.kv = function(b, c) { return T.c.Ri(b, c, /\d+|\D+/g) };
    T.c.Yl = function(b, c) { return T.c.Ri(b, c, /\d+|\.\d+|\D+/g) };
    T.c.jw = T.c.Yl;
    T.c.Sc = function(b) { return encodeURIComponent(String(b)) };
    T.c.Yd = function(b) { return decodeURIComponent(b.replace(/\+/g, " ")) };
    T.c.Oc = T.c.A.Oc;
    T.c.Fa = function(b, c) {
        b = T.c.A.Fa(b, c);
        T.c.Yj && (b = b.replace(T.c.bk, "&#101;"));
        return b
    };
    T.c.bk = /e/g;
    T.c.qj = function(b) { return T.c.contains(b, "&") ? !T.c.dk && "document" in T.global ? T.c.rj(b) : T.c.Jo(b) : b };
    T.c.Lx = function(b, c) { return T.c.contains(b, "&") ? T.c.rj(b, c) : b };
    T.c.rj = function(b, c) {
        var d = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
        var e = c ? c.createElement("div") : T.global.document.createElement("div");
        return b.replace(T.c.jk, function(f, g) {
            var k = d[f];
            if (k) return k;
            "#" == g.charAt(0) && (g = Number("0" + g.substr(1)), isNaN(g) || (k = String.fromCharCode(g)));
            k || (T.a.N.sf(e, T.b.ib.Wi(T.c.F.from("Single HTML entity."), f + " ")), k = e.firstChild.nodeValue.slice(0, -1));
            return d[f] = k
        })
    };
    T.c.Jo = function(b) {
        return b.replace(/&([^;]+);/g, function(c, d) {
            switch (d) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    return "#" != d.charAt(0) || (d = Number("0" + d.substr(1)), isNaN(d)) ? c : String.fromCharCode(d)
            }
        })
    };
    T.c.jk = /&([^;\s<&]+);?/g;
    T.c.vj = function(b) { return T.c.Oc(b.replace(/  /g, " &#160;"), void 0) };
    T.c.pw = function(b) { return b.replace(/(^|[\n ]) /g, "$1" + T.c.tg.gg) };
    T.c.xx = function(b, c) { for (var d = c.length, e = 0; e < d; e++) { var f = 1 == d ? c : c.charAt(e); if (b.charAt(0) == f && b.charAt(b.length - 1) == f) return b.substring(1, b.length - 1) } return b };
    T.c.truncate = function(b, c, d) {
        d && (b = T.c.qj(b));
        b.length > c && (b = b.substring(0, c - 3) + "...");
        d && (b = T.c.Fa(b));
        return b
    };
    T.c.Jx = function(b, c, d, e) {
        d && (b = T.c.qj(b));
        e && b.length > c ? (e > c && (e = c), b = b.substring(0, c - e) + "..." + b.substring(b.length - e)) : b.length > c && (e = Math.floor(c / 2), b = b.substring(0, e + c % 2) + "..." + b.substring(b.length - e));
        d && (b = T.c.Fa(b));
        return b
    };
    T.c.wf = { "\x00": "\\0", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\x0B": "\\x0B", '"': '\\"', "\\": "\\\\", "<": "\\u003C" };
    T.c.Cd = { "'": "\\'" };
    T.c.quote = function(b) {
        b = String(b);
        for (var c = ['"'], d = 0; d < b.length; d++) {
            var e = b.charAt(d),
                f = e.charCodeAt(0);
            c[d + 1] = T.c.wf[e] || (31 < f && 127 > f ? e : T.c.eh(e))
        }
        c.push('"');
        return c.join("")
    };
    T.c.au = function(b) { for (var c = [], d = 0; d < b.length; d++) c[d] = T.c.eh(b.charAt(d)); return c.join("") };
    T.c.eh = function(b) {
        if (b in T.c.Cd) return T.c.Cd[b];
        if (b in T.c.wf) return T.c.Cd[b] = T.c.wf[b];
        var c = b.charCodeAt(0);
        if (31 < c && 127 > c) var d = b;
        else {
            if (256 > c) { if (d = "\\x", 16 > c || 256 < c) d += "0" } else d = "\\u", 4096 > c && (d += "0");
            d += c.toString(16).toUpperCase()
        }
        return T.c.Cd[b] = d
    };
    T.c.contains = T.c.A.contains;
    T.c.hd = T.c.A.hd;
    T.c.vt = function(b, c) { return b && c ? b.split(c).length - 1 : 0 };
    T.c.kc = Ba();
    T.c.remove = function(b, c) { return b.replace(c, "") };
    T.c.uw = function(b, c) { c = new RegExp(T.c.lf(c), "g"); return b.replace(c, "") };
    T.c.zw = function(b, c, d) { c = new RegExp(T.c.lf(c), "g"); return b.replace(c, d.replace(/\$/g, "$$$$")) };
    T.c.lf = function(b) { return String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") };
    T.c.repeat = String.prototype.repeat ? function(b, c) { return b.repeat(c) } : function(b, c) { return Array(c + 1).join(b) };
    T.c.mw = function(b, c, d) {
        b = void 0 !== d ? b.toFixed(d) : String(b);
        d = b.indexOf("."); - 1 == d && (d = b.length);
        return T.c.repeat("0", Math.max(0, c - d)) + b
    };
    T.c.pn = function(b) { return null == b ? "" : String(b) };
    T.c.sl = function(b) { return Array.prototype.join.call(arguments, "") };
    T.c.Oh = function() { return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ T.now()).toString(36) };
    T.c.Eb = T.c.A.Eb;
    T.c.dv = function(b) { for (var c = 0, d = 0; d < b.length; ++d) c = 31 * c + b.charCodeAt(d) >>> 0; return c };
    T.c.Ko = 2147483648 * Math.random() | 0;
    T.c.It = function() { return "goog_" + T.c.Ko++ };
    T.c.Fx = function(b) { var c = Number(b); return 0 == c && T.c.Mc(b) ? NaN : c };
    T.c.Bv = function(b) { return /^[a-z]+([A-Z][a-z]*)*$/.test(b) };
    T.c.Pv = function(b) { return /^([A-Z][a-z]*)+$/.test(b) };
    T.c.Ex = function(b) { return String(b).replace(/\-([a-z])/g, function(c, d) { return d.toUpperCase() }) };
    T.c.Gx = function(b) { return String(b).replace(/([A-Z])/g, "-$1").toLowerCase() };
    T.c.Hx = function(b, c) { c = typeof c === I ? T.c.lf(c) : "\\s"; return b.replace(new RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])", "g"), function(d, e, f) { return e + f.toUpperCase() }) };
    T.c.gt = function(b) { return String(b.charAt(0)).toUpperCase() + String(b.substr(1)).toLowerCase() };
    T.c.parseInt = function(b) { isFinite(b) && (b = String(b)); return typeof b === I ? /^\s*-?0x/i.test(b) ? parseInt(b, 16) : parseInt(b, 10) : NaN };
    T.c.qx = function(b, c, d) {
        b = b.split(c);
        for (var e = []; 0 < d && b.length;) e.push(b.shift()), d--;
        b.length && e.push(b.join(c));
        return e
    };
    T.c.Sv = function(b, c) {
        if (c) typeof c == I && (c = [c]);
        else return b;
        for (var d = -1, e = 0; e < c.length; e++)
            if ("" != c[e]) {
                var f = b.lastIndexOf(c[e]);
                f > d && (d = f)
            }
        return -1 == d ? b : b.slice(d + 1)
    };
    T.c.Ut = function(b, c) {
        var d = [],
            e = [];
        if (b == c) return 0;
        if (!b.length || !c.length) return Math.max(b.length, c.length);
        for (var f = 0; f < c.length + 1; f++) d[f] = f;
        for (f = 0; f < b.length; f++) { e[0] = f + 1; for (var g = 0; g < c.length; g++) e[g + 1] = Math.min(e[g] + 1, d[g + 1] + 1, d[g] + Number(b[f] != c[g])); for (g = 0; g < d.length; g++) d[g] = e[g] }
        return e[c.length]
    };
    T.h.userAgent.ca = {};
    T.h.userAgent.ca.Sm = function() { return T.h.userAgent.K.S("Presto") };
    T.h.userAgent.ca.Wm = function() { return T.h.userAgent.K.S("Trident") || T.h.userAgent.K.S("MSIE") };
    T.h.userAgent.ca.wb = function() { return T.h.userAgent.K.S("Edge") };
    T.h.userAgent.ca.Ai = function() { return T.h.userAgent.K.Ni("WebKit") && !T.h.userAgent.ca.wb() };
    T.h.userAgent.ca.Lm = function() { return T.h.userAgent.K.S("Gecko") && !T.h.userAgent.ca.Ai() && !T.h.userAgent.ca.Wm() && !T.h.userAgent.ca.wb() };
    T.h.userAgent.ca.Ic = function() {
        var b = T.h.userAgent.K.bc();
        if (b) {
            b = T.h.userAgent.K.hh(b);
            var c = T.h.userAgent.ca.gm(b);
            if (c) return "Gecko" == c[0] ? T.h.userAgent.ca.tm(b) : c[1];
            b = b[0];
            var d;
            if (b && (d = b[2]) && (d = /Trident\/([^\s;]+)/.exec(d))) return d[1]
        }
        return ""
    };
    T.h.userAgent.ca.gm = function(b) { if (!T.h.userAgent.ca.wb()) return b[1]; for (var c = 0; c < b.length; c++) { var d = b[c]; if ("Edge" == d[0]) return d } };
    T.h.userAgent.ca.Ta = function(b) { return 0 <= T.c.Eb(T.h.userAgent.ca.Ic(), b) };
    T.h.userAgent.ca.tm = function(b) { return (b = T.g.find(b, function(c) { return "Firefox" == c[0] })) && b[1] || "" };
    T.h.userAgent.platform = {};
    T.h.userAgent.platform.gi = function() { return T.h.userAgent.K.S("Android") };
    T.h.userAgent.platform.ri = function() { return T.h.userAgent.K.S("iPod") };
    T.h.userAgent.platform.pi = function() { return T.h.userAgent.K.S("iPhone") && !T.h.userAgent.K.S("iPod") && !T.h.userAgent.K.S("iPad") };
    T.h.userAgent.platform.oi = function() { return T.h.userAgent.K.S("iPad") };
    T.h.userAgent.platform.ni = function() { return T.h.userAgent.platform.pi() || T.h.userAgent.platform.oi() || T.h.userAgent.platform.ri() };
    T.h.userAgent.platform.ti = function() { return T.h.userAgent.K.S("Macintosh") };
    T.h.userAgent.platform.Pm = function() { return T.h.userAgent.K.S("Linux") };
    T.h.userAgent.platform.Di = function() { return T.h.userAgent.K.S("Windows") };
    T.h.userAgent.platform.ii = function() { return T.h.userAgent.K.S("CrOS") };
    T.h.userAgent.platform.qv = function() { return T.h.userAgent.K.S("CrKey") };
    T.h.userAgent.platform.si = function() { return T.h.userAgent.K.Ni("KaiOS") };
    T.h.userAgent.platform.Ic = function() {
        var b = T.h.userAgent.K.bc(),
            c = "";
        T.h.userAgent.platform.Di() ? (c = /Windows (?:NT|Phone) ([0-9.]+)/, c = (b = c.exec(b)) ? b[1] : "0.0") : T.h.userAgent.platform.ni() ? (c = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, c = (b = c.exec(b)) && b[1].replace(/_/g, ".")) : T.h.userAgent.platform.ti() ? (c = /Mac OS X ([0-9_.]+)/, c = (b = c.exec(b)) ? b[1].replace(/_/g, ".") : "10") : T.h.userAgent.platform.si() ? (c = /(?:KaiOS)\/(\S+)/i, c = (b = c.exec(b)) && b[1]) : T.h.userAgent.platform.gi() ? (c = /Android\s+([^\);]+)(\)|;)/,
            c = (b = c.exec(b)) && b[1]) : T.h.userAgent.platform.ii() && (c = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, c = (b = c.exec(b)) && b[1]);
        return c || ""
    };
    T.h.userAgent.platform.Ta = function(b) { return 0 <= T.c.Eb(T.h.userAgent.platform.Ic(), b) };
    T.hb = {};
    T.hb.object = function(b, c) { return c };
    T.hb.vf = function(b) { T.hb.vf[" "](b); return b };
    T.hb.vf[" "] = T.Mb;
    T.hb.et = function(b, c) { try { return T.hb.vf(b[c]), !0 } catch (d) {} return !1 };
    T.hb.cache = function(b, c, d, e) { e = e ? e(c) : c; return Object.prototype.hasOwnProperty.call(b, e) ? b[e] : b[e] = d(c) };
    T.userAgent = {};
    T.userAgent.Jf = !1;
    T.userAgent.Hf = !1;
    T.userAgent.If = !1;
    T.userAgent.Of = !1;
    T.userAgent.de = !1;
    T.userAgent.Mf = !1;
    T.userAgent.Dj = !1;
    T.userAgent.qc = T.userAgent.Jf || T.userAgent.Hf || T.userAgent.If || T.userAgent.de || T.userAgent.Of || T.userAgent.Mf;
    T.userAgent.rm = function() { return T.h.userAgent.K.bc() };
    T.userAgent.Se = function() { return T.global.navigator || null };
    T.userAgent.Lu = function() { return T.userAgent.Se() };
    T.userAgent.jg = T.userAgent.qc ? T.userAgent.Mf : T.h.userAgent.B.bf();
    T.userAgent.na = T.userAgent.qc ? T.userAgent.Jf : T.h.userAgent.B.Bd();
    T.userAgent.Vf = T.userAgent.qc ? T.userAgent.Hf : T.h.userAgent.ca.wb();
    T.userAgent.Xp = T.userAgent.Vf || T.userAgent.na;
    T.userAgent.fe = T.userAgent.qc ? T.userAgent.If : T.h.userAgent.ca.Lm();
    T.userAgent.uc = T.userAgent.qc ? T.userAgent.Of || T.userAgent.de : T.h.userAgent.ca.Ai();
    T.userAgent.Rm = function() { return T.userAgent.uc && T.h.userAgent.K.S("Mobile") };
    T.userAgent.gr = T.userAgent.de || T.userAgent.Rm();
    T.userAgent.Hr = T.userAgent.uc;
    T.userAgent.Jl = function() { var b = T.userAgent.Se(); return b && b.platform || "" };
    T.userAgent.xr = T.userAgent.Jl();
    T.userAgent.Lf = !1;
    T.userAgent.Pf = !1;
    T.userAgent.Kf = !1;
    T.userAgent.Qf = !1;
    T.userAgent.Gf = !1;
    T.userAgent.be = !1;
    T.userAgent.ae = !1;
    T.userAgent.ce = !1;
    T.userAgent.Fj = !1;
    T.userAgent.Xa = T.userAgent.Lf || T.userAgent.Pf || T.userAgent.Kf || T.userAgent.Qf || T.userAgent.Gf || T.userAgent.be || T.userAgent.ae || T.userAgent.ce;
    T.userAgent.Xq = T.userAgent.Xa ? T.userAgent.Lf : T.h.userAgent.platform.ti();
    T.userAgent.xs = T.userAgent.Xa ? T.userAgent.Pf : T.h.userAgent.platform.Di();
    T.userAgent.Om = function() { return T.h.userAgent.platform.Pm() || T.h.userAgent.platform.ii() };
    T.userAgent.Vq = T.userAgent.Xa ? T.userAgent.Kf : T.userAgent.Om();
    T.userAgent.$m = function() { var b = T.userAgent.Se(); return !!b && T.c.contains(b.appVersion || "", "X11") };
    T.userAgent.ys = T.userAgent.Xa ? T.userAgent.Qf : T.userAgent.$m();
    T.userAgent.cp = T.userAgent.Xa ? T.userAgent.Gf : T.h.userAgent.platform.gi();
    T.userAgent.Jq = T.userAgent.Xa ? T.userAgent.be : T.h.userAgent.platform.pi();
    T.userAgent.Iq = T.userAgent.Xa ? T.userAgent.ae : T.h.userAgent.platform.oi();
    T.userAgent.Kq = T.userAgent.Xa ? T.userAgent.ce : T.h.userAgent.platform.ri();
    T.userAgent.Hq = T.userAgent.Xa ? T.userAgent.be || T.userAgent.ae || T.userAgent.ce : T.h.userAgent.platform.ni();
    T.userAgent.Nq = T.userAgent.Xa ? T.userAgent.Fj : T.h.userAgent.platform.si();
    T.userAgent.Kl = function() {
        var b = "",
            c = T.userAgent.um();
        c && (b = c ? c[1] : "");
        return T.userAgent.na && (c = T.userAgent.wh(), null != c && c > parseFloat(b)) ? String(c) : b
    };
    T.userAgent.um = function() { var b = T.userAgent.rm(); if (T.userAgent.fe) return /rv:([^\);]+)(\)|;)/.exec(b); if (T.userAgent.Vf) return /Edge\/([\d\.]+)/.exec(b); if (T.userAgent.na) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(b); if (T.userAgent.uc) return /WebKit\/(\S+)/.exec(b); if (T.userAgent.jg) return /(?:Version)[ \/]?(\S+)/.exec(b) };
    T.userAgent.wh = function() { var b = T.global.document; return b ? b.documentMode : void 0 };
    T.userAgent.VERSION = T.userAgent.Kl();
    T.userAgent.compare = function(b, c) { return T.c.Eb(b, c) };
    T.userAgent.Ym = {};
    T.userAgent.Ta = function(b) { return T.userAgent.Dj || T.hb.cache(T.userAgent.Ym, b, function() { return 0 <= T.c.Eb(T.userAgent.VERSION, b) }) };
    T.userAgent.Qv = T.userAgent.Ta;
    T.userAgent.Lc = function(b) { return Number(T.userAgent.ak) >= b };
    T.userAgent.tv = T.userAgent.Lc;
    var Da;
    if (T.global.document && T.userAgent.na) {
        var Ea = T.userAgent.wh();
        Da = Ea ? Ea : parseInt(T.userAgent.VERSION, 10) || void 0
    } else Da = void 0;
    T.userAgent.ak = Da;
    T.a.ga = {};
    T.a.ga.Hj = !1;
    T.a.ga.Ij = !1;
    T.a.ga.Il = function() { try { return !!(new self.OffscreenCanvas(0, 0)).getContext("2d") } catch (b) {} return !1 };
    T.a.ga.pr = !T.a.ga.Hj && (T.a.ga.Ij || T.a.ga.Il());
    T.a.ga.Nj = !T.userAgent.na || T.userAgent.Lc(9);
    T.a.ga.Oj = !T.userAgent.fe && !T.userAgent.na || T.userAgent.na && T.userAgent.Lc(9) || T.userAgent.fe && T.userAgent.Ta("1.9.1");
    T.a.ga.Sf = T.userAgent.na && !T.userAgent.Ta("9");
    T.a.ga.Pj = T.userAgent.na || T.userAgent.jg || T.userAgent.uc;
    T.a.ga.kk = T.userAgent.na;
    T.a.ga.Rq = T.userAgent.na && !T.userAgent.Lc(9);
    T.C = {};
    T.C.rw = function(b) { return Math.floor(Math.random() * b) };
    T.C.Mx = function(b, c) { return b + Math.random() * (c - b) };
    T.C.it = function(b, c, d) { return Math.min(Math.max(b, c), d) };
    T.C.Pi = function(b, c) { b %= c; return 0 > b * c ? b + c : b };
    T.C.Tv = function(b, c, d) { return b + d * (c - b) };
    T.C.cw = function(b, c, d) { return Math.abs(b - c) <= (d || 1E-6) };
    T.C.yf = function(b) { return T.C.Pi(b, 360) };
    T.C.tx = function(b) { return T.C.Pi(b, 2 * Math.PI) };
    T.C.pj = function(b) { return b * Math.PI / 180 };
    T.C.Ao = function(b) { return 180 * b / Math.PI };
    T.C.Es = function(b, c) { return c * Math.cos(T.C.pj(b)) };
    T.C.Fs = function(b, c) { return c * Math.sin(T.C.pj(b)) };
    T.C.angle = function(b, c, d, e) { return T.C.yf(T.C.Ao(Math.atan2(e - c, d - b))) };
    T.C.Ds = function(b, c) {
        b = T.C.yf(c) - T.C.yf(b);
        180 < b ? b -= 360 : -180 >= b && (b = 360 + b);
        return b
    };
    T.C.sign = function(b) { return 0 < b ? 1 : 0 > b ? -1 : b };
    T.C.Wv = function(b, c, d, e) {
        d = d || function(v, J) { return v == J };
        e = e || function(v) { return b[v] };
        for (var f = b.length, g = c.length, k = [], h = 0; h < f + 1; h++) k[h] = [], k[h][0] = 0;
        for (var m = 0; m < g + 1; m++) k[0][m] = 0;
        for (h = 1; h <= f; h++)
            for (m = 1; m <= g; m++) d(b[h - 1], c[m - 1]) ? k[h][m] = k[h - 1][m - 1] + 1 : k[h][m] = Math.max(k[h - 1][m], k[h][m - 1]);
        var n = [];
        h = f;
        for (m = g; 0 < h && 0 < m;) d(b[h - 1], c[m - 1]) ? (n.unshift(e(h - 1, m - 1)), h--, m--) : k[h - 1][m] > k[h][m - 1] ? h-- : m--;
        return n
    };
    T.C.Af = function(b) { return T.g.reduce(arguments, function(c, d) { return c + d }, 0) };
    T.C.ll = function(b) { return T.C.Af.apply(null, arguments) / arguments.length };
    T.C.co = function(b) { var c = arguments.length; if (2 > c) return 0; var d = T.C.ll.apply(null, arguments); return T.C.Af.apply(null, T.g.map(arguments, function(e) { return Math.pow(e - d, 2) })) / (c - 1) };
    T.C.ux = function(b) { return Math.sqrt(T.C.co.apply(null, arguments)) };
    T.C.zv = function(b) { return isFinite(b) && 0 == b % 1 };
    T.C.wv = function(b) { return isFinite(b) };
    T.C.Ev = function(b) { return 0 == b && 0 > 1 / b };
    T.C.Vv = function(b) { if (0 < b) { var c = Math.round(Math.log(b) * Math.LOG10E); return c - (parseFloat("1e" + c) > b ? 1 : 0) } return 0 == b ? -Infinity : NaN };
    T.C.Gw = function(b, c) { return Math.floor(b + (c || 2E-15)) };
    T.C.Fw = function(b, c) { return Math.ceil(b - (c || 2E-15)) };
    T.C.ha = function(b, c) {
        this.x = void 0 !== b ? b : 0;
        this.y = void 0 !== c ? c : 0
    };
    T.C.ha.prototype.clone = function() { return new T.C.ha(this.x, this.y) };
    T.ma && (T.C.ha.prototype.toString = function() { return "(" + this.x + ", " + this.y + ")" });
    T.C.ha.prototype.Ib = function(b) { return b instanceof T.C.ha && T.C.ha.Ib(this, b) };
    T.C.ha.Ib = function(b, c) { return b == c ? !0 : b && c ? b.x == c.x && b.y == c.y : !1 };
    T.C.ha.St = function(b, c) {
        var d = b.x - c.x;
        b = b.y - c.y;
        return Math.sqrt(d * d + b * b)
    };
    T.C.ha.Xv = function(b) { return Math.sqrt(b.x * b.x + b.y * b.y) };
    T.C.ha.azimuth = function(b) { return T.C.angle(0, 0, b.x, b.y) };
    T.C.ha.rx = function(b, c) {
        var d = b.x - c.x;
        b = b.y - c.y;
        return d * d + b * b
    };
    T.C.ha.Rt = function(b, c) { return new T.C.ha(b.x - c.x, b.y - c.y) };
    T.C.ha.Af = function(b, c) { return new T.C.ha(b.x + c.x, b.y + c.y) };
    Q = T.C.ha.prototype;
    Q.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    Q.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    Q.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    Q.translate = function(b, c) { b instanceof T.C.ha ? (this.x += b.x, this.y += b.y) : (this.x += Number(b), typeof c === E && (this.y += c)); return this };
    Q.scale = function(b, c) {
        this.x *= b;
        this.y *= typeof c === E ? c : b;
        return this
    };
    T.C.Vb = function(b, c) {
        this.width = b;
        this.height = c
    };
    T.C.Vb.Ib = function(b, c) { return b == c ? !0 : b && c ? b.width == c.width && b.height == c.height : !1 };
    T.C.Vb.prototype.clone = function() { return new T.C.Vb(this.width, this.height) };
    T.ma && (T.C.Vb.prototype.toString = function() { return "(" + this.width + " x " + this.height + ")" });
    Q = T.C.Vb.prototype;
    Q.aspectRatio = function() { return this.width / this.height };
    Q.Aa = function() { return !(this.width * this.height) };
    Q.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Q.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Q.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    Q.scale = function(b, c) {
        this.width *= b;
        this.height *= typeof c === E ? c : b;
        return this
    };
    T.a.Jj = !1;
    T.a.Nf = !1;
    T.a.Tj = T.a.Jj || T.a.Nf;
    T.a.Me = function(b) { return b ? new T.a.Rb(T.a.ub(b)) : T.a.Gl || (T.a.Gl = new T.a.Rb) };
    T.a.bm = function() { return document };
    T.a.Ne = function(b) { return T.a.Qe(document, b) };
    T.a.Qe = function(b, c) { return typeof c === I ? b.getElementById(c) : c };
    T.a.mm = function(b) { return T.a.Qh(document, b) };
    T.a.Qh = function(b, c) { return T.a.Qe(b, c) };
    T.a.yj = T.a.Ne;
    T.a.getElementsByTagName = function(b, c) { return (c || document).getElementsByTagName(String(b)) };
    T.a.Re = function(b, c, d) { return T.a.qd(document, b, c, d) };
    T.a.fm = function(b, c, d) { return T.a.Pe(document, b, c, d) };
    T.a.zh = function(b, c) { var d = c || document; return T.a.ue(d) ? d.querySelectorAll("." + b) : T.a.qd(document, "*", b, c) };
    T.a.Oe = function(b, c) { var d = c || document; return (d.getElementsByClassName ? d.getElementsByClassName(b)[0] : T.a.Pe(document, "*", b, c)) || null };
    T.a.Ph = function(b, c) { return T.a.Oe(b, c) };
    T.a.ue = function(b) { return !(!b.querySelectorAll || !b.querySelector) };
    T.a.qd = function(b, c, d, e) {
        b = e || b;
        c = c && "*" != c ? String(c).toUpperCase() : "";
        if (T.a.ue(b) && (c || d)) return b.querySelectorAll(c + (d ? "." + d : ""));
        if (d && b.getElementsByClassName) {
            b = b.getElementsByClassName(d);
            if (c) {
                e = {};
                for (var f = 0, g = 0, k; k = b[g]; g++) c == k.nodeName && (e[f++] = k);
                e.length = f;
                return e
            }
            return b
        }
        b = b.getElementsByTagName(c || "*");
        if (d) {
            e = {};
            for (g = f = 0; k = b[g]; g++) c = k.className, typeof c.split == w && T.g.contains(c.split(/\s+/), d) && (e[f++] = k);
            e.length = f;
            return e
        }
        return b
    };
    T.a.Pe = function(b, c, d, e) {
        var f = e || b,
            g = c && "*" != c ? String(c).toUpperCase() : "";
        return T.a.ue(f) && (g || d) ? f.querySelector(g + (d ? "." + d : "")) : T.a.qd(b, c, d, e)[0] || null
    };
    T.a.zj = T.a.Re;
    T.a.Ud = function(b, c) { T.object.forEach(c, function(d, e) { d && typeof d == F && d.Ra && (d = d.Ea()); "style" == e ? b.style.cssText = d : "class" == e ? b.className = d : "for" == e ? b.htmlFor = d : T.a.Uf.hasOwnProperty(e) ? b.setAttribute(T.a.Uf[e], d) : T.c.startsWith(e, "aria-") || T.c.startsWith(e, "data-") ? b.setAttribute(e, d) : b[e] = d }) };
    T.a.Uf = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" };
    T.a.Wh = function(b) { return T.a.Xh(b || window) };
    T.a.Xh = function(b) {
        b = b.document;
        b = T.a.Kc(b) ? b.documentElement : b.body;
        return new T.C.Vb(b.clientWidth, b.clientHeight)
    };
    T.a.cm = function() { return T.a.Ke(window) };
    T.a.Eu = function(b) { return T.a.Ke(b) };
    T.a.Ke = function(b) {
        var c = b.document,
            d = 0;
        if (c) {
            d = c.body;
            var e = c.documentElement;
            if (!e || !d) return 0;
            b = T.a.Xh(b).height;
            if (T.a.Kc(c) && e.scrollHeight) d = e.scrollHeight != b ? e.scrollHeight : e.offsetHeight;
            else {
                c = e.scrollHeight;
                var f = e.offsetHeight;
                e.clientHeight != f && (c = d.scrollHeight, f = d.offsetHeight);
                d = c > b ? c > f ? c : f : c < f ? c : f
            }
        }
        return d
    };
    T.a.Nu = function(b) { return T.a.Me((b || T.global || window).document).xh() };
    T.a.xh = function() { return T.a.yh(document) };
    T.a.yh = function(b) {
        var c = T.a.Le(b);
        b = T.a.dc(b);
        return T.userAgent.na && T.userAgent.Ta("10") && b.pageYOffset != c.scrollTop ? new T.C.ha(c.scrollLeft, c.scrollTop) : new T.C.ha(b.pageXOffset || c.scrollLeft, b.pageYOffset || c.scrollTop)
    };
    T.a.dm = function() { return T.a.Le(document) };
    T.a.Le = function(b) { return b.scrollingElement ? b.scrollingElement : !T.userAgent.uc && T.a.Kc(b) ? b.documentElement : b.body || b.documentElement };
    T.a.cc = function(b) { return b ? T.a.dc(b) : window };
    T.a.dc = function(b) { return b.parentWindow || b.defaultView };
    T.a.xe = function(b, c, d) { return T.a.Wg(document, arguments) };
    T.a.Wg = function(b, c) {
        var d = String(c[0]),
            e = c[1];
        if (!T.a.ga.Nj && e && (e.name || e.type)) {
            d = ["<", d];
            e.name && d.push(' name="', T.c.Fa(e.name), '"');
            if (e.type) {
                d.push(' type="', T.c.Fa(e.type), '"');
                var f = {};
                T.object.extend(f, e);
                delete f.type;
                e = f
            }
            d.push(">");
            d = d.join("")
        }
        d = T.a.eb(b, d);
        e && (typeof e === I ? d.className = e : Array.isArray(e) ? d.className = e.join(" ") : T.a.Ud(d, e));
        2 < c.length && T.a.Ag(b, d, c, 2);
        return d
    };
    T.a.Ag = function(b, c, d, e) {
        function f(k) { k && c.appendChild(typeof k === I ? b.createTextNode(k) : k) }
        for (; e < d.length; e++) {
            var g = d[e];
            T.la(g) && !T.a.$e(g) ? T.g.forEach(T.a.af(g) ? T.g.Za(g) : g, f) : f(g)
        }
    };
    T.a.Aj = T.a.xe;
    T.a.createElement = function(b) { return T.a.eb(document, b) };
    T.a.eb = function(b, c) { c = String(c); "application/xhtml+xml" === b.contentType && (c = c.toLowerCase()); return b.createElement(c) };
    T.a.createTextNode = function(b) { return document.createTextNode(String(b)) };
    T.a.Dl = function(b, c, d) { return T.a.Xg(document, b, c, !!d) };
    T.a.Xg = function(b, c, d, e) {
        for (var f = T.a.eb(b, "TABLE"), g = f.appendChild(T.a.eb(b, "TBODY")), k = 0; k < c; k++) {
            for (var h = T.a.eb(b, "TR"), m = 0; m < d; m++) {
                var n = T.a.eb(b, "TD");
                e && T.a.tf(n, T.c.tg.gg);
                h.appendChild(n)
            }
            g.appendChild(h)
        }
        return f
    };
    T.a.tt = function(b) {
        var c = T.g.map(arguments, T.c.F.D);
        c = T.b.ib.Wi(T.c.F.from("Constant HTML string, that gets turned into a Node later, so it will be automatically balanced."), c.join(""));
        return T.a.Xi(c)
    };
    T.a.Xi = function(b) { return T.a.Yi(document, b) };
    T.a.Yi = function(b, c) {
        var d = T.a.eb(b, "DIV");
        T.a.ga.kk ? (T.a.N.sf(d, T.b.u.concat(T.b.u.Rf, c)), d.removeChild(d.firstChild)) : T.a.N.sf(d, c);
        return T.a.yl(b, d)
    };
    T.a.yl = function(b, c) { if (1 == c.childNodes.length) return c.removeChild(c.firstChild); for (b = b.createDocumentFragment(); c.firstChild;) b.appendChild(c.firstChild); return b };
    T.a.Hm = function() { return T.a.Kc(document) };
    T.a.Kc = function(b) { return T.a.Tj ? T.a.Nf : "CSS1Compat" == b.compatMode };
    T.a.canHaveChildren = function(b) {
        if (b.nodeType != T.a.sa.kb) return !1;
        switch (b.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case ca:
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    T.a.appendChild = function(b, c) { b.appendChild(c) };
    T.a.append = function(b, c) { T.a.Ag(T.a.ub(b), b, arguments, 1) };
    T.a.nf = function(b) { for (var c; c = b.firstChild;) b.removeChild(c) };
    T.a.ei = function(b, c) { c.parentNode && c.parentNode.insertBefore(b, c) };
    T.a.di = function(b, c) { c.parentNode && c.parentNode.insertBefore(b, c.nextSibling) };
    T.a.ci = function(b, c, d) { b.insertBefore(c, b.childNodes[d] || null) };
    T.a.removeNode = function(b) { return b && b.parentNode ? b.parentNode.removeChild(b) : null };
    T.a.Vi = function(b, c) {
        var d = c.parentNode;
        d && d.replaceChild(b, c)
    };
    T.a.mh = function(b) { var c, d = b.parentNode; if (d && d.nodeType != T.a.sa.$j) { if (b.removeNode) return b.removeNode(!1); for (; c = b.firstChild;) d.insertBefore(c, b); return T.a.removeNode(b) } };
    T.a.uh = function(b) { return T.a.ga.Oj && void 0 != b.children ? b.children : T.g.filter(b.childNodes, function(c) { return c.nodeType == T.a.sa.kb }) };
    T.a.Ah = function(b) { return void 0 !== b.firstElementChild ? b.firstElementChild : T.a.sd(b.firstChild, !0) };
    T.a.Dh = function(b) { return void 0 !== b.lastElementChild ? b.lastElementChild : T.a.sd(b.lastChild, !1) };
    T.a.Fh = function(b) { return void 0 !== b.nextElementSibling ? b.nextElementSibling : T.a.sd(b.nextSibling, !0) };
    T.a.Mh = function(b) { return void 0 !== b.previousElementSibling ? b.previousElementSibling : T.a.sd(b.previousSibling, !1) };
    T.a.sd = function(b, c) { for (; b && b.nodeType != T.a.sa.kb;) b = c ? b.nextSibling : b.previousSibling; return b };
    T.a.Gh = function(b) { if (!b) return null; if (b.firstChild) return b.firstChild; for (; b && !b.nextSibling;) b = b.parentNode; return b ? b.nextSibling : null };
    T.a.Nh = function(b) { if (!b) return null; if (!b.previousSibling) return b.parentNode; for (b = b.previousSibling; b && b.lastChild;) b = b.lastChild; return b };
    T.a.$e = function(b) { return T.Ba(b) && 0 < b.nodeType };
    T.a.Ye = function(b) { return T.Ba(b) && b.nodeType == T.a.sa.kb };
    T.a.Bi = function(b) { return T.Ba(b) && b.window == b };
    T.a.Lh = function(b) {
        var c;
        if (T.a.ga.Pj && !(T.userAgent.na && T.userAgent.Ta("9") && !T.userAgent.Ta("10") && T.global.SVGElement && b instanceof T.global.SVGElement) && (c = b.parentElement)) return c;
        c = b.parentNode;
        return T.a.Ye(c) ? c : null
    };
    T.a.contains = function(b, c) { if (!b || !c) return !1; if (b.contains && c.nodeType == T.a.sa.kb) return b == c || b.contains(c); if ("undefined" != typeof b.compareDocumentPosition) return b == c || !!(b.compareDocumentPosition(c) & 16); for (; c && b != c;) c = c.parentNode; return c == b };
    T.a.Qg = function(b, c) {
        if (b == c) return 0;
        if (b.compareDocumentPosition) return b.compareDocumentPosition(c) & 2 ? 1 : -1;
        if (T.userAgent.na && !T.userAgent.Lc(9)) { if (b.nodeType == T.a.sa.Vc) return -1; if (c.nodeType == T.a.sa.Vc) return 1 }
        if ("sourceIndex" in b || b.parentNode && "sourceIndex" in b.parentNode) {
            var d = b.nodeType == T.a.sa.kb,
                e = c.nodeType == T.a.sa.kb;
            if (d && e) return b.sourceIndex - c.sourceIndex;
            var f = b.parentNode,
                g = c.parentNode;
            return f == g ? T.a.Sg(b, c) : !d && T.a.contains(f, c) ? -1 * T.a.Rg(b, c) : !e && T.a.contains(g, b) ? T.a.Rg(c,
                b) : (d ? b.sourceIndex : f.sourceIndex) - (e ? c.sourceIndex : g.sourceIndex)
        }
        e = T.a.ub(b);
        d = e.createRange();
        d.selectNode(b);
        d.collapse(!0);
        b = e.createRange();
        b.selectNode(c);
        b.collapse(!0);
        return d.compareBoundaryPoints(T.global.Range.START_TO_END, b)
    };
    T.a.Rg = function(b, c) { var d = b.parentNode; if (d == c) return -1; for (; c.parentNode != d;) c = c.parentNode; return T.a.Sg(c, b) };
    T.a.Sg = function(b, c) {
        for (; c = c.previousSibling;)
            if (c == b) return -1;
        return 1
    };
    T.a.ih = function(b) {
        var c, d = arguments.length;
        if (!d) return null;
        if (1 == d) return arguments[0];
        var e = [],
            f = Infinity;
        for (c = 0; c < d; c++) {
            for (var g = [], k = arguments[c]; k;) g.unshift(k), k = k.parentNode;
            e.push(g);
            f = Math.min(f, g.length)
        }
        g = null;
        for (c = 0; c < f; c++) {
            k = e[0][c];
            for (var h = 1; h < d; h++)
                if (k != e[h][c]) return g;
            g = k
        }
        return g
    };
    T.a.yv = function(b) { return 16 == (b.ownerDocument.compareDocumentPosition(b) & 16) };
    T.a.ub = function(b) { return b.nodeType == T.a.sa.Vc ? b : b.ownerDocument || b.document };
    T.a.Bh = function(b) { return b.contentDocument || b.contentWindow.document };
    T.a.Ch = function(b) { try { return b.contentWindow || (b.contentDocument ? T.a.cc(b.contentDocument) : null) } catch (c) {} return null };
    T.a.tf = function(b, c) {
        if ("textContent" in b) b.textContent = c;
        else if (b.nodeType == T.a.sa.ad) b.data = String(c);
        else if (b.firstChild && b.firstChild.nodeType == T.a.sa.ad) {
            for (; b.lastChild != b.firstChild;) b.removeChild(b.lastChild);
            b.firstChild.data = String(c)
        } else T.a.nf(b), b.appendChild(T.a.ub(b).createTextNode(String(c)))
    };
    T.a.Kh = function(b) {
        if ("outerHTML" in b) return b.outerHTML;
        var c = T.a.eb(T.a.ub(b), "DIV");
        c.appendChild(b.cloneNode(!0));
        return c.innerHTML
    };
    T.a.jh = function(b, c) { var d = []; return T.a.Ee(b, c, d, !0) ? d[0] : void 0 };
    T.a.kh = function(b, c) {
        var d = [];
        T.a.Ee(b, c, d, !1);
        return d
    };
    T.a.Ee = function(b, c, d, e) {
        if (null != b)
            for (b = b.firstChild; b;) {
                if (c(b) && (d.push(b), e) || T.a.Ee(b, c, d, e)) return !0;
                b = b.nextSibling
            }
        return !1
    };
    T.a.du = function(b, c) { for (b = T.a.vh(b); 0 < b.length;) { var d = b.pop(); if (c(d)) return d; for (d = d.lastElementChild; d; d = d.previousElementSibling) b.push(d) } return null };
    T.a.eu = function(b, c) {
        var d = [];
        for (b = T.a.vh(b); 0 < b.length;) {
            var e = b.pop();
            c(e) && d.push(e);
            for (e = e.lastElementChild; e; e = e.previousElementSibling) b.push(e)
        }
        return d
    };
    T.a.vh = function(b) { if (b.nodeType == T.a.sa.Vc) return [b.documentElement]; var c = []; for (b = b.lastElementChild; b; b = b.previousElementSibling) c.push(b); return c };
    T.a.qg = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 };
    T.a.Zc = { IMG: " ", BR: "\n" };
    T.a.Ze = function(b) { return T.a.$h(b) && T.a.zi(b) };
    T.a.bj = function(b, c) { c ? b.tabIndex = 0 : (b.tabIndex = -1, b.removeAttribute("tabIndex")) };
    T.a.ji = function(b) { var c; return (c = T.a.wn(b) ? !b.disabled && (!T.a.$h(b) || T.a.zi(b)) : T.a.Ze(b)) && T.userAgent.na ? T.a.Am(b) : c };
    T.a.$h = function(b) { return T.userAgent.na && !T.userAgent.Ta("9") ? (b = b.getAttributeNode("tabindex"), null != b && b.specified) : b.hasAttribute("tabindex") };
    T.a.zi = function(b) { b = b.tabIndex; return typeof b === E && 0 <= b && 32768 > b };
    T.a.wn = function(b) { return "A" == b.tagName && b.hasAttribute("href") || "INPUT" == b.tagName || "TEXTAREA" == b.tagName || "SELECT" == b.tagName || "BUTTON" == b.tagName };
    T.a.Am = function(b) { b = !T.Sa(b.getBoundingClientRect) || T.userAgent.na && null == b.parentElement ? { height: b.offsetHeight, width: b.offsetWidth } : b.getBoundingClientRect(); return null != b && 0 < b.height && 0 < b.width };
    T.a.ud = function(b) {
        if (T.a.ga.Sf && null !== b && "innerText" in b) b = T.c.wl(b.innerText);
        else {
            var c = [];
            T.a.Ue(b, c, !0);
            b = c.join("")
        }
        b = b.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        b = b.replace(/\u200B/g, "");
        T.a.ga.Sf || (b = b.replace(/ +/g, " "));
        " " != b && (b = b.replace(/^\s*/, ""));
        return b
    };
    T.a.Su = function(b) {
        var c = [];
        T.a.Ue(b, c, !1);
        return c.join("")
    };
    T.a.Ue = function(b, c, d) {
        if (!(b.nodeName in T.a.qg))
            if (b.nodeType == T.a.sa.ad) d ? c.push(String(b.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : c.push(b.nodeValue);
            else if (b.nodeName in T.a.Zc) c.push(T.a.Zc[b.nodeName]);
        else
            for (b = b.firstChild; b;) T.a.Ue(b, c, d), b = b.nextSibling
    };
    T.a.Ih = function(b) { return T.a.ud(b).length };
    T.a.Jh = function(b, c) {
        c = c || T.a.ub(b).body;
        for (var d = []; b && b != c;) {
            for (var e = b; e = e.previousSibling;) d.unshift(T.a.ud(e));
            b = b.parentNode
        }
        return T.c.trimLeft(d.join("")).replace(/ +/g, " ").length
    };
    T.a.Hh = function(b, c, d) {
        b = [b];
        for (var e = 0, f = null; 0 < b.length && e < c;)
            if (f = b.pop(), !(f.nodeName in T.a.qg))
                if (f.nodeType == T.a.sa.ad) {
                    var g = f.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " ");
                    e += g.length
                } else if (f.nodeName in T.a.Zc) e += T.a.Zc[f.nodeName].length;
        else
            for (g = f.childNodes.length - 1; 0 <= g; g--) b.push(f.childNodes[g]);
        T.Ba(d) && (d.tw = f ? f.nodeValue.length + c - e - 1 : 0, d.node = f);
        return f
    };
    T.a.af = function(b) { if (b && typeof b.length == E) { if (T.Ba(b)) return typeof b.item == w || typeof b.item == I; if (T.Sa(b)) return typeof b.item == w } return !1 };
    T.a.Ie = function(b, c, d, e) { if (!c && !d) return null; var f = c ? String(c).toUpperCase() : null; return T.a.He(b, function(g) { return (!f || g.nodeName == f) && (!d || typeof g.className === I && T.g.contains(g.className.split(/\s+/), d)) }, !0, e) };
    T.a.qh = function(b, c, d) { return T.a.Ie(b, null, c, d) };
    T.a.He = function(b, c, d, e) {
        b && !d && (b = b.parentNode);
        for (d = 0; b && (null == e || d <= e);) {
            if (c(b)) return b;
            b = b.parentNode;
            d++
        }
        return null
    };
    T.a.ph = function(b) { try { var c = b && b.activeElement; return c && c.nodeName ? c : null } catch (d) { return null } };
    T.a.Ru = function() { var b = T.a.cc(); return void 0 !== b.devicePixelRatio ? b.devicePixelRatio : b.matchMedia ? T.a.Fd(3) || T.a.Fd(2) || T.a.Fd(1.5) || T.a.Fd(1) || .75 : 1 };
    T.a.Fd = function(b) { return T.a.cc().matchMedia("(min-resolution: " + b + "dppx),(min--moz-device-pixel-ratio: " + b + "),(min-resolution: " + 96 * b + "dpi)").matches ? b : 0 };
    T.a.th = function(b) { return b.getContext("2d") };
    T.a.Rb = function(b) { this.ja = b || T.global.document || document };
    Q = T.a.Rb.prototype;
    Q.Me = T.a.Me;
    Q.bm = P("ja");
    Q.Ne = function(b) { return T.a.Qe(this.ja, b) };
    Q.mm = function(b) { return T.a.Qh(this.ja, b) };
    Q.yj = T.a.Rb.prototype.Ne;
    Q.getElementsByTagName = function(b, c) { return (c || this.ja).getElementsByTagName(String(b)) };
    Q.Re = function(b, c, d) { return T.a.qd(this.ja, b, c, d) };
    Q.fm = function(b, c, d) { return T.a.Pe(this.ja, b, c, d) };
    Q.zh = function(b, c) { return T.a.zh(b, c || this.ja) };
    Q.Oe = function(b, c) { return T.a.Oe(b, c || this.ja) };
    Q.Ph = function(b, c) { return T.a.Ph(b, c || this.ja) };
    Q.zj = T.a.Rb.prototype.Re;
    Q.Ud = T.a.Ud;
    Q.Wh = function(b) { return T.a.Wh(b || this.cc()) };
    Q.cm = function() { return T.a.Ke(this.cc()) };
    Q.xe = function(b, c, d) { return T.a.Wg(this.ja, arguments) };
    Q.Aj = T.a.Rb.prototype.xe;
    Q.createElement = function(b) { return T.a.eb(this.ja, b) };
    Q.createTextNode = function(b) { return this.ja.createTextNode(String(b)) };
    Q.Dl = function(b, c, d) { return T.a.Xg(this.ja, b, c, !!d) };
    Q.Xi = function(b) { return T.a.Yi(this.ja, b) };
    Q.Hm = function() { return T.a.Kc(this.ja) };
    Q.cc = function() { return T.a.dc(this.ja) };
    Q.dm = function() { return T.a.Le(this.ja) };
    Q.xh = function() { return T.a.yh(this.ja) };
    Q.ph = function(b) { return T.a.ph(b || this.ja) };
    Q.appendChild = T.a.appendChild;
    Q.append = T.a.append;
    Q.canHaveChildren = T.a.canHaveChildren;
    Q.nf = T.a.nf;
    Q.ei = T.a.ei;
    Q.di = T.a.di;
    Q.ci = T.a.ci;
    Q.removeNode = T.a.removeNode;
    Q.Vi = T.a.Vi;
    Q.mh = T.a.mh;
    Q.uh = T.a.uh;
    Q.Ah = T.a.Ah;
    Q.Dh = T.a.Dh;
    Q.Fh = T.a.Fh;
    Q.Mh = T.a.Mh;
    Q.Gh = T.a.Gh;
    Q.Nh = T.a.Nh;
    Q.$e = T.a.$e;
    Q.Ye = T.a.Ye;
    Q.Bi = T.a.Bi;
    Q.Lh = T.a.Lh;
    Q.contains = T.a.contains;
    Q.Qg = T.a.Qg;
    Q.ih = T.a.ih;
    Q.ub = T.a.ub;
    Q.Bh = T.a.Bh;
    Q.Ch = T.a.Ch;
    Q.tf = T.a.tf;
    Q.Kh = T.a.Kh;
    Q.jh = T.a.jh;
    Q.kh = T.a.kh;
    Q.Ze = T.a.Ze;
    Q.bj = T.a.bj;
    Q.ji = T.a.ji;
    Q.ud = T.a.ud;
    Q.Ih = T.a.Ih;
    Q.Jh = T.a.Jh;
    Q.Hh = T.a.Hh;
    Q.af = T.a.af;
    Q.Ie = T.a.Ie;
    Q.qh = T.a.qh;
    Q.He = T.a.He;
    Q.th = T.a.th;
    T.async = {};
    T.async.Xc = function(b, c, d) {
        this.cn = d;
        this.El = b;
        this.Qn = c;
        this.Gd = 0;
        this.zd = null
    };
    T.async.Xc.prototype.get = function() {
        if (0 < this.Gd) {
            this.Gd--;
            var b = this.zd;
            this.zd = b.next;
            b.next = null
        } else b = this.El();
        return b
    };
    T.async.Xc.prototype.put = function(b) {
        this.Qn(b);
        this.Gd < this.cn && (this.Gd++, b.next = this.zd, this.zd = b)
    };
    T.debug.pa = {};
    T.debug.eq = O();
    T.debug.pa.jc = [];
    T.debug.pa.hf = [];
    T.debug.pa.Qi = !1;
    T.debug.pa.register = function(b) {
        T.debug.pa.jc[T.debug.pa.jc.length] = b;
        if (T.debug.pa.Qi)
            for (var c = T.debug.pa.hf, d = 0; d < c.length; d++) b(T.bind(c[d].Uo, c[d]))
    };
    T.debug.pa.aw = function(b) {
        T.debug.pa.Qi = !0;
        for (var c = T.bind(b.Uo, b), d = 0; d < T.debug.pa.jc.length; d++) T.debug.pa.jc[d](c);
        T.debug.pa.hf.push(b)
    };
    T.debug.pa.Nx = function(b) {
        var c = T.debug.pa.hf;
        b = T.bind(b.D, b);
        for (var d = 0; d < T.debug.pa.jc.length; d++) T.debug.pa.jc[d](b);
        c.length--
    };
    T.async.mj = function(b) { T.global.setTimeout(function() { throw b; }, 0) };
    T.async.Ma = function(b, c, d) {
        var e = b;
        c && (e = T.bind(b, c));
        e = T.async.Ma.wj(e);
        T.Sa(T.global.setImmediate) && (d || T.async.Ma.Po()) ? T.global.setImmediate(e) : (T.async.Ma.cj || (T.async.Ma.cj = T.async.Ma.pm()), T.async.Ma.cj(e))
    };
    T.async.Ma.Po = function() { return T.global.Window && T.global.Window.prototype && !T.h.userAgent.B.wb() && T.global.Window.prototype.setImmediate == T.global.setImmediate ? !1 : !0 };
    T.async.Ma.pm = function() {
        var b = T.global.MessageChannel;
        "undefined" === typeof b && "undefined" !== typeof window && window.postMessage && window.addEventListener && !T.h.userAgent.ca.Sm() && (b = function() {
            var f = T.a.createElement("IFRAME");
            f.style.display = "none";
            T.a.N.jo(f);
            document.documentElement.appendChild(f);
            var g = f.contentWindow;
            f = g.document;
            f.open();
            T.a.N.Ml(f);
            f.close();
            var k = "callImmediate" + Math.random(),
                h = "file:" == g.location.protocol ? "*" : g.location.protocol + "//" + g.location.host;
            f = T.bind(function(m) {
                if (("*" ==
                        h || m.origin == h) && m.data == k) this.port1.onmessage()
            }, this);
            g.addEventListener("message", f, !1);
            this.port1 = {};
            this.port2 = { postMessage: function() { g.postMessage(k, h) } }
        });
        if ("undefined" !== typeof b && !T.h.userAgent.B.Bd()) {
            var c = new b,
                d = {},
                e = d;
            c.port1.onmessage = function() {
                if (void 0 !== d.next) {
                    d = d.next;
                    var f = d.Og;
                    d.Og = null;
                    f()
                }
            };
            return function(f) {
                e.next = { Og: f };
                e = e.next;
                c.port2.postMessage(0)
            }
        }
        return function(f) { T.global.setTimeout(f, 0) }
    };
    T.async.Ma.wj = T.U.ai;
    T.debug.pa.register(function(b) { T.async.Ma.wj = b });
    T.async.cb = function() { this.$d = this.oc = null };
    T.async.cb.ee = 100;
    T.async.cb.Ec = new T.async.Xc(function() { return new T.async.oe }, function(b) { b.reset() }, T.async.cb.ee);
    T.async.cb.prototype.add = function(b, c) {
        var d = T.async.cb.Ec.get();
        d.set(b, c);
        this.$d ? this.$d.next = d : this.oc = d;
        this.$d = d
    };
    T.async.cb.prototype.remove = function() {
        var b = null;
        this.oc && (b = this.oc, this.oc = this.oc.next, this.oc || (this.$d = null), b.next = null);
        return b
    };
    T.async.oe = function() { this.next = this.scope = this.Fe = null };
    T.async.oe.prototype.set = function(b, c) {
        this.Fe = b;
        this.scope = c;
        this.next = null
    };
    T.async.oe.prototype.reset = function() { this.next = this.scope = this.Fe = null };
    T.Gj = !1;
    T.async.W = function(b, c) {
        T.async.W.Sd || T.async.W.Gm();
        T.async.W.Zd || (T.async.W.Sd(), T.async.W.Zd = !0);
        T.async.W.Df.add(b, c)
    };
    T.async.W.Gm = function() {
        if (T.Gj || T.global.Promise && T.global.Promise.resolve) {
            var b = T.global.Promise.resolve(void 0);
            T.async.W.Sd = function() { b.then(T.async.W.Nd) }
        } else T.async.W.Sd = function() { T.async.Ma(T.async.W.Nd) }
    };
    T.async.W.ju = function(b) {
        T.async.W.Sd = function() {
            T.async.Ma(T.async.W.Nd);
            b && b(T.async.W.Nd)
        }
    };
    T.async.W.Zd = !1;
    T.async.W.Df = new T.async.cb;
    T.ma && (T.async.W.Dw = function() {
        T.async.W.Zd = !1;
        T.async.W.Df = new T.async.cb
    });
    T.async.W.Nd = function() {
        for (var b; b = T.async.W.Df.remove();) {
            try { b.Fe.call(b.scope) } catch (c) { T.async.mj(c) }
            T.async.cb.Ec.put(b)
        }
        T.async.W.Zd = !1
    };
    T.Od = {};
    T.Od.Fr = O();
    T.Thenable = O();
    T.Thenable.prototype.then = O();
    T.Thenable.bg = "$goog_Thenable";
    T.Thenable.yg = function(b) { b.prototype[T.Thenable.bg] = !0 };
    T.Thenable.ki = function(b) { if (!b) return !1; try { return !!b[T.Thenable.bg] } catch (c) { return !1 } };
    T.Promise = function(b, c) {
        this.qa = T.Promise.aa.Wa;
        this.Ga = void 0;
        this.Wb = this.pb = this.wa = null;
        this.De = !1;
        0 < T.Promise.Bb ? this.Wd = 0 : 0 == T.Promise.Bb && (this.wd = !1);
        T.Promise.ab && (this.xf = [], Fa(this, Error("created")), this.$g = 0);
        if (b != T.Mb) try {
            var d = this;
            b.call(c, function(e) { U(d, T.Promise.aa.lb, e) }, function(e) {
                if (T.ma && !(e instanceof T.Promise.Qb)) try { if (e instanceof Error) throw e; throw Error("Promise rejected."); } catch (f) {}
                U(d, T.Promise.aa.Ia, e)
            })
        } catch (e) { U(this, T.Promise.aa.Ia, e) }
    };
    T.Promise.ab = !1;
    T.Promise.Bb = 0;
    T.Promise.aa = { Wa: 0, Lj: 1, lb: 2, Ia: 3 };
    T.Promise.Tf = function() {
        this.next = this.context = this.hc = this.Pc = this.Db = null;
        this.cd = !1
    };
    T.Promise.Tf.prototype.reset = function() {
        this.context = this.hc = this.Pc = this.Db = null;
        this.cd = !1
    };
    T.Promise.ee = 100;
    T.Promise.Ec = new T.async.Xc(function() { return new T.Promise.Tf }, function(b) { b.reset() }, T.Promise.ee);
    T.Promise.sh = function(b, c, d) {
        var e = T.Promise.Ec.get();
        e.Pc = b;
        e.hc = c;
        e.context = d;
        return e
    };
    T.Promise.Tn = function(b) { T.Promise.Ec.put(b) };
    T.Promise.resolve = function(b) {
        if (b instanceof T.Promise) return b;
        var c = new T.Promise(T.Mb);
        U(c, T.Promise.aa.lb, b);
        return c
    };
    T.Promise.reject = function(b) { return new T.Promise(function(c, d) { d(b) }) };
    T.Promise.Qd = function(b, c, d) { T.Promise.Oi(b, c, d, null) || T.async.W(T.Nb(c, b)) };
    T.Promise.race = function(b) { return new T.Promise(function(c, d) { b.length || c(void 0); for (var e = 0, f; e < b.length; e++) f = b[e], T.Promise.Qd(f, c, d) }) };
    T.Promise.all = function(b) {
        return new T.Promise(function(c, d) {
            var e = b.length,
                f = [];
            if (e)
                for (var g = function(n, v) {
                        e--;
                        f[n] = v;
                        0 == e && c(f)
                    }, k = function(n) { d(n) }, h = 0, m; h < b.length; h++) m = b[h], T.Promise.Qd(m, T.Nb(g, h), k);
            else c(f)
        })
    };
    T.Promise.allSettled = function(b) {
        return new T.Promise(function(c) {
            var d = b.length,
                e = [];
            if (d)
                for (var f = function(h, m, n) {
                        d--;
                        e[h] = m ? { $l: !0, value: n } : { $l: !1, reason: n };
                        0 == d && c(e)
                    }, g = 0, k; g < b.length; g++) k = b[g], T.Promise.Qd(k, T.Nb(f, g, !0), T.Nb(f, g, !1));
            else c(e)
        })
    };
    T.Promise.iu = function(b) {
        return new T.Promise(function(c, d) {
            var e = b.length,
                f = [];
            if (e)
                for (var g = function(n) { c(n) }, k = function(n, v) {
                        e--;
                        f[n] = v;
                        0 == e && d(f)
                    }, h = 0, m; h < b.length; h++) m = b[h], T.Promise.Qd(m, g, T.Nb(k, h));
            else c(void 0)
        })
    };
    T.Promise.Qx = function() {
        var b, c, d = new T.Promise(function(e, f) {
            b = e;
            c = f
        });
        return new T.Promise.xk(d, b, c)
    };
    T.Promise.prototype.then = function(b, c, d) { T.Promise.ab && Fa(this, Error("then")); return Ga(this, T.Sa(b) ? b : null, T.Sa(c) ? c : null, d) };
    T.Thenable.yg(T.Promise);
    T.Promise.prototype.cancel = function(b) {
        if (this.qa == T.Promise.aa.Wa) {
            var c = new T.Promise.Qb(b);
            T.async.W(function() { Ha(this, c) }, this)
        }
    };

    function Ha(b, c) {
        if (b.qa == T.Promise.aa.Wa)
            if (b.wa) {
                var d = b.wa;
                if (d.pb) {
                    for (var e = 0, f = null, g = null, k = d.pb; k && (k.cd || (e++, k.Db == b && (f = k), !(f && 1 < e))); k = k.next) f || (g = k);
                    f && (d.qa == T.Promise.aa.Wa && 1 == e ? Ha(d, c) : (g ? (e = g, e.next == d.Wb && (d.Wb = e), e.next = e.next.next) : Ia(d), Ja(d, f, T.Promise.aa.Ia, c)))
                }
                b.wa = null
            } else U(b, T.Promise.aa.Ia, c)
    }

    function Ka(b, c) {
        b.pb || b.qa != T.Promise.aa.lb && b.qa != T.Promise.aa.Ia || La(b);
        b.Wb ? b.Wb.next = c : b.pb = c;
        b.Wb = c
    }

    function Ga(b, c, d, e) {
        var f = T.Promise.sh(null, null, null);
        f.Db = new T.Promise(function(g, k) {
            f.Pc = c ? function(h) {
                try {
                    var m = c.call(e, h);
                    g(m)
                } catch (n) { k(n) }
            } : g;
            f.hc = d ? function(h) {
                try {
                    var m = d.call(e, h);
                    void 0 === m && h instanceof T.Promise.Qb ? k(h) : g(m)
                } catch (n) { k(n) }
            } : k
        });
        f.Db.wa = b;
        Ka(b, f);
        return f.Db
    }
    T.Promise.prototype.Ho = function(b) {
        this.qa = T.Promise.aa.Wa;
        U(this, T.Promise.aa.lb, b)
    };
    T.Promise.prototype.Io = function(b) {
        this.qa = T.Promise.aa.Wa;
        U(this, T.Promise.aa.Ia, b)
    };

    function U(b, c, d) { b.qa == T.Promise.aa.Wa && (b === d && (c = T.Promise.aa.Ia, d = new TypeError("Promise cannot resolve to itself")), b.qa = T.Promise.aa.Lj, T.Promise.Oi(d, b.Ho, b.Io, b) || (b.Ga = d, b.qa = c, b.wa = null, La(b), c != T.Promise.aa.Ia || d instanceof T.Promise.Qb || T.Promise.Vk(b, d))) }
    T.Promise.Oi = function(b, c, d, e) {
        if (b instanceof T.Promise) return T.Promise.ab && Fa(b, Error("then")), Ka(b, T.Promise.sh(c || T.Mb, d || null, e)), !0;
        if (T.Thenable.ki(b)) return b.then(c, d, e), !0;
        if (T.Ba(b)) try { var f = b.then; if (T.Sa(f)) return T.Promise.Fo(b, f, c, d, e), !0 } catch (g) { return d.call(e, g), !0 }
        return !1
    };
    T.Promise.Fo = function(b, c, d, e, f) {
        function g(m) { h || (h = !0, e.call(f, m)) }

        function k(m) { h || (h = !0, d.call(f, m)) }
        var h = !1;
        try { c.call(b, k, g) } catch (m) { g(m) }
    };

    function La(b) { b.De || (b.De = !0, T.async.W(b.Tl, b)) }

    function Ia(b) {
        var c = null;
        b.pb && (c = b.pb, b.pb = c.next, c.next = null);
        b.pb || (b.Wb = null);
        return c
    }
    T.Promise.prototype.Tl = function() {
        for (var b; b = Ia(this);) T.Promise.ab && this.$g++, Ja(this, b, this.qa, this.Ga);
        this.De = !1
    };

    function Ja(b, c, d, e) {
        if (d == T.Promise.aa.Ia && c.hc && !c.cd)
            if (0 < T.Promise.Bb)
                for (; b && b.Wd; b = b.wa) T.global.clearTimeout(b.Wd), b.Wd = 0;
            else if (0 == T.Promise.Bb)
            for (; b && b.wd; b = b.wa) b.wd = !1;
        if (c.Db) c.Db.wa = null, T.Promise.fi(c, d, e);
        else try { c.cd ? c.Pc.call(c.context) : T.Promise.fi(c, d, e) } catch (f) { T.Promise.xd.call(null, f) }
        T.Promise.Tn(c)
    }
    T.Promise.fi = function(b, c, d) { c == T.Promise.aa.lb ? b.Pc.call(b.context, d) : b.hc && b.hc.call(b.context, d) };

    function Fa(b, c) {
        if (T.Promise.ab && typeof c.stack === I) {
            var d = c.stack.split("\n", 4)[3];
            c = c.message;
            c += Array(11 - c.length).join(" ");
            b.xf.push(c + d)
        }
    }

    function Ma(b, c) {
        if (T.Promise.ab && c && typeof c.stack === I && b.xf.length) {
            for (var d = ["Promise trace:"], e = b; e; e = e.wa) {
                for (var f = b.$g; 0 <= f; f--) d.push(e.xf[f]);
                d.push("Value: [" + (e.qa == T.Promise.aa.Ia ? "REJECTED" : "FULFILLED") + "] <" + String(e.Ga) + ">")
            }
            c.stack += "\n\n" + d.join("\n")
        }
    }
    T.Promise.Vk = function(b, c) {
        0 < T.Promise.Bb ? b.Wd = T.global.setTimeout(function() {
            Ma(b, c);
            T.Promise.xd.call(null, c)
        }, T.Promise.Bb) : 0 == T.Promise.Bb && (b.wd = !0, T.async.W(function() { b.wd && (Ma(b, c), T.Promise.xd.call(null, c)) }))
    };
    T.Promise.xd = T.async.mj;
    T.Promise.kx = function(b) { T.Promise.xd = b };
    T.Promise.Qb = function(b) { T.debug.Error.call(this, b) };
    T.vb(T.Promise.Qb, T.debug.Error);
    T.Promise.Qb.prototype.name = "cancel";
    T.Promise.xk = function(b, c, d) {
        this.Od = b;
        this.resolve = c;
        this.reject = d
    };
    /*
        Portions of this code are from MochiKit, received by
        The Closure Authors under the MIT license. All other code is Copyright
        2005-2009 The Closure Authors. All Rights Reserved.
       */
    T.async.L = function(b, c) {
        this.Td = [];
        this.Si = b;
        this.dh = c || null;
        this.ec = this.Zb = !1;
        this.Ga = void 0;
        this.uf = this.pl = this.se = !1;
        this.Vd = 0;
        this.wa = null;
        this.ed = 0;
        T.async.L.ab && (this.we = null, Error.captureStackTrace && (b = { stack: "" }, Error.captureStackTrace(b, T.async.L), typeof b.stack == I && (this.we = b.stack.replace(/^[^\n]*\n/, ""))))
    };
    T.async.L.Ik = !1;
    T.async.L.ab = !1;
    Q = T.async.L.prototype;
    Q.cancel = function(b) {
        if (this.Zb) this.Ga instanceof T.async.L && this.Ga.cancel();
        else {
            if (this.wa) {
                var c = this.wa;
                delete this.wa;
                b ? c.cancel(b) : (c.ed--, 0 >= c.ed && c.cancel())
            }
            this.Si ? this.Si.call(this.dh, this) : this.uf = !0;
            this.Zb || this.rb(new T.async.L.Pb(this))
        }
    };
    Q.Vg = function(b, c) {
        this.se = !1;
        Na(this, b, c)
    };

    function Na(b, c, d) {
        b.Zb = !0;
        b.Ga = d;
        b.ec = !c;
        Oa(b)
    }

    function Pa(b) {
        if (b.Zb) {
            if (!b.uf) throw new T.async.L.Uc(b);
            b.uf = !1
        }
    }
    Q.vc = function(b) {
        Pa(this);
        Na(this, !0, b)
    };
    Q.rb = function(b) {
        Pa(this);
        Qa(this, b);
        Na(this, !1, b)
    };

    function Qa(b, c) { T.async.L.ab && b.we && T.Ba(c) && c.stack && /^[^\n]+(\n   [^\n]+)+/.test(c.stack) && (c.stack = c.stack + "\nDEFERRED OPERATION:\n" + b.we) }

    function Ra(b, c, d) { return V(b, c, null, d) }

    function Sa(b, c) { V(b, null, c, void 0) }

    function V(b, c, d, e) {
        b.Td.push([c, d, e]);
        b.Zb && Oa(b);
        return b
    }
    Q.then = function(b, c, d) {
        var e, f, g = new T.Promise(function(k, h) {
            e = k;
            f = h
        });
        V(this, e, function(k) { k instanceof T.async.L.Pb ? g.cancel() : f(k) });
        return g.then(b, c, d)
    };
    T.Thenable.yg(T.async.L);
    T.async.L.prototype.rl = function() {
        var b = new T.async.L;
        V(this, b.vc, b.rb, b);
        b.wa = this;
        this.ed++;
        return b
    };

    function Ta(b) { return T.g.some(b.Td, function(c) { return T.Sa(c[1]) }) }

    function Oa(b) {
        b.Vd && b.Zb && Ta(b) && (T.async.L.No(b.Vd), b.Vd = 0);
        b.wa && (b.wa.ed--, delete b.wa);
        for (var c = b.Ga, d = !1, e = !1; b.Td.length && !b.se;) {
            var f = b.Td.shift(),
                g = f[0],
                k = f[1];
            f = f[2];
            if (g = b.ec ? k : g) try {
                var h = g.call(f || b.dh, c);
                void 0 !== h && (b.ec = b.ec && (h == c || h instanceof Error), b.Ga = c = h);
                if (T.Thenable.ki(c) || typeof T.global.Promise === w && c instanceof T.global.Promise) e = !0, b.se = !0
            } catch (m) { c = m, b.ec = !0, Qa(b, c), Ta(b) || (d = !0) }
        }
        b.Ga = c;
        e ? (e = T.bind(b.Vg, b, !0), h = T.bind(b.Vg, b, !1), c instanceof T.async.L ? (V(c, e, h),
            c.pl = !0) : c.then(e, h)) : T.async.L.Ik && c instanceof Error && !(c instanceof T.async.L.Pb) && (d = b.ec = !0);
        d && (b.Vd = T.async.L.ho(c))
    }
    T.async.L.jj = function(b) {
        var c = new T.async.L;
        c.vc(b);
        return c
    };
    T.async.L.su = function(b) {
        var c = new T.async.L;
        b.then(function(d) { c.vc(d) }, function(d) { c.rb(d) });
        return c
    };
    T.async.L.va = function(b) {
        var c = new T.async.L;
        c.rb(b);
        return c
    };
    T.async.L.ft = function() {
        var b = new T.async.L;
        b.cancel();
        return b
    };
    T.async.L.Px = function(b, c, d) { return b instanceof T.async.L ? Ra(b.rl(), c, d) : Ra(T.async.L.jj(b), c, d) };
    T.async.L.Uc = function() { T.debug.Error.call(this) };
    T.vb(T.async.L.Uc, T.debug.Error);
    T.async.L.Uc.prototype.message = "Deferred has already fired";
    T.async.L.Uc.prototype.name = "AlreadyCalledError";
    T.async.L.Pb = function() { T.debug.Error.call(this) };
    T.vb(T.async.L.Pb, T.debug.Error);
    T.async.L.Pb.prototype.message = "Deferred was canceled";
    T.async.L.Pb.prototype.name = "CanceledError";
    T.async.L.Xf = function(b) {
        this.Jc = T.global.setTimeout(T.bind(this.lj, this), 0);
        this.Rl = b
    };
    T.async.L.Xf.prototype.lj = function() { delete T.async.L.Dc[this.Jc]; throw this.Rl; };
    T.async.L.Dc = {};
    T.async.L.ho = function(b) {
        b = new T.async.L.Xf(b);
        T.async.L.Dc[b.Jc] = b;
        return b.Jc
    };
    T.async.L.No = function(b) {
        var c = T.async.L.Dc[b];
        c && (T.global.clearTimeout(c.Jc), delete T.async.L.Dc[b])
    };
    T.async.L.Ss = function() {
        var b = T.async.L.Dc,
            c;
        for (c in b) {
            var d = b[c];
            T.global.clearTimeout(d.Jc);
            d.lj()
        }
    };
    T.M = {};
    T.M.O = {};
    T.M.O.ge = "closure_verification";
    T.M.O.Xj = 5E3;
    T.M.O.qf = [];
    T.M.O.ao = function(b, c) {
        function d() {
            var f = b.shift();
            f = T.M.O.mc(f, c);
            b.length && V(f, d, d, void 0);
            return f
        }
        if (!b.length) return T.async.L.jj(null);
        var e = T.M.O.qf.length;
        T.g.extend(T.M.O.qf, b);
        if (e) return T.M.O.$i;
        b = T.M.O.qf;
        T.M.O.$i = d();
        return T.M.O.$i
    };
    T.M.O.mc = function(b, c) {
        var d = c || {};
        c = d.document || document;
        var e = T.b.I.D(b),
            f = T.a.createElement(ca),
            g = { aj: f, oj: void 0 },
            k = new T.async.L(T.M.O.vl, g),
            h = null,
            m = null != d.timeout ? d.timeout : T.M.O.Xj;
        0 < m && (h = window.setTimeout(function() {
            T.M.O.jd(f, !0);
            k.rb(new T.M.O.Error(T.M.O.Wc.TIMEOUT, "Timeout reached for loading script " + e))
        }, m), g.oj = h);
        f.onload = f.onreadystatechange = function() { f.readyState && "loaded" != f.readyState && "complete" != f.readyState || (T.M.O.jd(f, d.jt || !1, h), k.vc(null)) };
        f.onerror = function() {
            T.M.O.jd(f, !0, h);
            k.rb(new T.M.O.Error(T.M.O.Wc.lk, "Error while loading script " + e))
        };
        g = d.attributes || {};
        T.object.extend(g, { type: ua, charset: "UTF-8" });
        T.a.Ud(f, g);
        T.a.N.oo(f, b);
        T.M.O.om(c).appendChild(f);
        return k
    };
    T.M.O.Hw = function(b, c, d) {
        T.global[T.M.O.ge] || (T.global[T.M.O.ge] = {});
        var e = T.global[T.M.O.ge],
            f = T.b.I.D(b);
        if (void 0 !== e[c]) return T.async.L.va(new T.M.O.Error(T.M.O.Wc.Tk, "Verification object " + c + " already defined."));
        b = T.M.O.mc(b, d);
        var g = new T.async.L(T.bind(b.cancel, b));
        Ra(b, function() {
            var k = e[c];
            void 0 !== k ? (g.vc(k), delete e[c]) : g.rb(new T.M.O.Error(T.M.O.Wc.Sk, "Script " + f + " loaded, but verification object " + c + " was not defined."))
        });
        Sa(b, function(k) {
            void 0 !== e[c] && delete e[c];
            g.rb(k)
        });
        return g
    };
    T.M.O.om = function(b) { var c = T.a.getElementsByTagName("HEAD", b); return !c || T.g.Aa(c) ? b.documentElement : c[0] };
    T.M.O.vl = function() {
        if (this && this.aj) {
            var b = this.aj;
            b && b.tagName == ca && T.M.O.jd(b, !0, this.oj)
        }
    };
    T.M.O.jd = function(b, c, d) {
        null != d && T.global.clearTimeout(d);
        b.onload = T.Mb;
        b.onerror = T.Mb;
        b.onreadystatechange = T.Mb;
        c && window.setTimeout(function() { T.a.removeNode(b) }, 0)
    };
    T.M.O.Wc = { lk: 0, TIMEOUT: 1, Sk: 2, Tk: 3 };
    T.M.O.Error = function(b, c) {
        var d = "Jsloader error (code #" + b + ")";
        c && (d += ": " + c);
        T.debug.Error.call(this, d);
        this.code = b
    };
    T.vb(T.M.O.Error, T.debug.Error);
    var google = { v: {} };
    google.v.w = {};
    google.v.w.Uj = {
        On: {
            "gstatic.com": {
                loader: T.c.F.from("https://www.gstatic.com/charts/%{version}/loader.js"),
                debug: T.c.F.from("https://www.gstatic.com/charts/debug/%{version}/js/jsapi_debug_%{package}_module.js"),
                debug_i18n: T.c.F.from("https://www.gstatic.com/charts/debug/%{version}/i18n/jsapi_debug_i18n_%{package}_module__%{language}.js"),
                compiled: T.c.F.from("https://www.gstatic.com/charts/%{version}/js/jsapi_compiled_%{package}_module.js"),
                compiled_i18n: T.c.F.from("https://www.gstatic.com/charts/%{version}/i18n/jsapi_compiled_i18n_%{package}_module__%{language}.js"),
                css: T.c.F.from("https://www.gstatic.com/charts/%{version}/css/%{subdir}/%{filename}"),
                css2: T.c.F.from("https://www.gstatic.com/charts/%{version}/css/%{subdir1}/%{subdir2}/%{filename}"),
                third_party: T.c.F.from(oa),
                third_party2: T.c.F.from("https://www.gstatic.com/charts/%{version}/third_party/%{subdir1}/%{subdir2}/%{filename}"),
                third_party_gen: T.c.F.from(oa)
            },
            "gstatic.cn": {
                loader: T.c.F.from("https://www.gstatic.cn/charts/%{version}/loader.js"),
                debug: T.c.F.from("https://www.gstatic.cn/charts/debug/%{version}/js/jsapi_debug_%{package}_module.js"),
                debug_i18n: T.c.F.from("https://www.gstatic.cn/charts/debug/%{version}/i18n/jsapi_debug_i18n_%{package}_module__%{language}.js"),
                compiled: T.c.F.from("https://www.gstatic.cn/charts/%{version}/js/jsapi_compiled_%{package}_module.js"),
                compiled_i18n: T.c.F.from("https://www.gstatic.cn/charts/%{version}/i18n/jsapi_compiled_i18n_%{package}_module__%{language}.js"),
                css: T.c.F.from("https://www.gstatic.cn/charts/%{version}/css/%{subdir}/%{filename}"),
                css2: T.c.F.from("https://www.gstatic.cn/charts/%{version}/css/%{subdir1}/%{subdir2}/%{filename}"),
                third_party: T.c.F.from(na),
                third_party2: T.c.F.from("https://www.gstatic.cn/charts/%{version}/third_party/%{subdir1}/%{subdir2}/%{filename}"),
                third_party_gen: T.c.F.from(na)
            }
        },
        Ot: ["default"],
        Pt: {
            format: [],
            "default": ["format"],
            ui: ["default"],
            ui_base: ["default"],
            flashui: [K],
            fw: [K],
            annotatedtimeline: [fa],
            annotationchart: [K, "controls", ha, "table"],
            areachart: p,
            bar: ["fw", ka, Aa],
            barchart: p,
            browserchart: [K],
            bubbles: ["fw", "d3"],
            calendar: ["fw"],
            charteditor: [K, ha, x, ea, "gauge", "motionchart", pa, "table"],
            charteditor_base: [wa, ha, x, ea, "gauge", "motionchart", pa, "table_base"],
            circles: ["fw", "d3"],
            clusterchart: [ha, "d3"],
            columnchart: p,
            controls: [K],
            controls_base: [wa],
            corechart: [K],
            gantt: ["fw", ka],
            gauge: [K],
            geochart: [K],
            geomap: ["flashui"],
            geomap_base: [wa],
            heatmap: ["vegachart"],
            helloworld: ["fw"],
            imagechart: [K],
            imageareachart: x,
            imagebarchart: x,
            imagelinechart: x,
            imagepiechart: x,
            imagesparkline: x,
            line: ["fw", ka, Aa],
            linechart: p,
            map: [K],
            motionchart: ["flashui"],
            orgchart: [K],
            overtimecharts: [K, ha],
            piechart: p,
            sankey: ["fw", "d3", "d3.sankey"],
            scatter: ["fw", ka, Aa],
            scatterchart: p,
            sunburst: ["fw", "d3"],
            streamgraph: ["fw", "d3"],
            table: [K],
            table_base: [wa],
            timeline: ["fw", K, ka],
            treemap: [K],
            vegachart: [K, "vegaLib"],
            wordtree: [K]
        },
        Cx: { d3: { subdir1: "d3", subdir2: "v5", filename: "d3.js" }, "d3.sankey": { subdir1: "d3_sankey", subdir2: "v4", filename: "d3.sankey.js" }, webfontloader: { subdir: Aa, filename: L } },
        Bx: { dygraph: { subdir: "dygraphs", filename: "dygraph-tickers-combined.js" }, vegaLib: { subdir: "vega", filename: "vega-bundle.js" } },
        Kt: {
            "default": [{ subdir: "core", filename: "tooltip.css" }],
            annotationchart: [{ subdir: fa, filename: "annotationchart.css" }],
            charteditor: [{ subdir: "charteditor", filename: "charteditor.css" }],
            charteditor_base: [{ subdir: "charteditor_base", filename: "charteditor_base.css" }],
            controls: [{ subdir: "controls", filename: "controls.css" }],
            imagesparkline: [{ subdir: x, filename: "imagesparkline.css" }],
            orgchart: [{ subdir: pa, filename: "orgchart.css" }],
            table: [{ subdir: "table", filename: "table.css" }, { subdir: "util", filename: "format.css" }],
            table_base: [{ subdir: "util", filename: "format.css" }, { subdir: "table", filename: "table_base.css" }],
            ui: [{ subdir: "util", filename: "util.css" }],
            ui_base: [{ subdir: "util", filename: "util_base.css" }]
        }
    };
    google.v.w.eg = {};
    google.v.w.eg.vm = {
        "chrome-frame": { versions: { "1.0.0": { uncompressed: aa, compressed: ba }, "1.0.1": { uncompressed: aa, compressed: ba }, "1.0.2": { uncompressed: aa, compressed: ba } }, aliases: { 1: "1.0.2", "1.0": "1.0.2" } },
        swfobject: { versions: { "2.1": { uncompressed: ta, compressed: "swfobject.js" }, "2.2": { uncompressed: ta, compressed: "swfobject.js" } }, aliases: { 2: "2.2" } },
        "ext-core": { versions: { "3.1.0": { uncompressed: la, compressed: "ext-core.js" }, "3.0.0": { uncompressed: la, compressed: "ext-core.js" } }, aliases: { 3: "3.1.0", "3.0": "3.0.0", "3.1": "3.1.0" } },
        scriptaculous: { versions: { "1.8.3": { uncompressed: H, compressed: H }, "1.9.0": { uncompressed: H, compressed: H }, "1.8.1": { uncompressed: H, compressed: H }, "1.8.2": { uncompressed: H, compressed: H } }, aliases: { 1: "1.9.0", "1.8": "1.8.3", "1.9": "1.9.0" } },
        webfont: {
            versions: {
                "1.0.12": { uncompressed: N, compressed: L },
                "1.0.13": { uncompressed: N, compressed: L },
                "1.0.14": { uncompressed: N, compressed: L },
                "1.0.15": { uncompressed: N, compressed: L },
                "1.0.10": { uncompressed: N, compressed: L },
                "1.0.11": { uncompressed: N, compressed: L },
                "1.0.27": {
                    uncompressed: N,
                    compressed: L
                },
                "1.0.28": { uncompressed: N, compressed: L },
                "1.0.29": { uncompressed: N, compressed: L },
                "1.0.23": { uncompressed: N, compressed: L },
                "1.0.24": { uncompressed: N, compressed: L },
                "1.0.25": { uncompressed: N, compressed: L },
                "1.0.26": { uncompressed: N, compressed: L },
                "1.0.21": { uncompressed: N, compressed: L },
                "1.0.22": { uncompressed: N, compressed: L },
                "1.0.3": { uncompressed: N, compressed: L },
                "1.0.4": { uncompressed: N, compressed: L },
                "1.0.5": { uncompressed: N, compressed: L },
                "1.0.6": { uncompressed: N, compressed: L },
                "1.0.9": {
                    uncompressed: N,
                    compressed: L
                },
                "1.0.16": { uncompressed: N, compressed: L },
                "1.0.17": { uncompressed: N, compressed: L },
                "1.0.0": { uncompressed: N, compressed: L },
                "1.0.18": { uncompressed: N, compressed: L },
                "1.0.1": { uncompressed: N, compressed: L },
                "1.0.19": { uncompressed: N, compressed: L },
                "1.0.2": { uncompressed: N, compressed: L }
            },
            aliases: { 1: "1.0.29", "1.0": "1.0.29" }
        },
        jqueryui: {
            versions: {
                "1.8.17": { uncompressed: y, compressed: z },
                "1.8.16": { uncompressed: y, compressed: z },
                "1.8.15": { uncompressed: y, compressed: z },
                "1.8.14": { uncompressed: y, compressed: z },
                "1.8.4": {
                    uncompressed: y,
                    compressed: z
                },
                "1.8.13": { uncompressed: y, compressed: z },
                "1.8.5": { uncompressed: y, compressed: z },
                "1.8.12": { uncompressed: y, compressed: z },
                "1.8.6": { uncompressed: y, compressed: z },
                "1.8.11": { uncompressed: y, compressed: z },
                "1.8.7": { uncompressed: y, compressed: z },
                "1.8.10": { uncompressed: y, compressed: z },
                "1.8.8": { uncompressed: y, compressed: z },
                "1.8.9": { uncompressed: y, compressed: z },
                "1.6.0": { uncompressed: y, compressed: z },
                "1.7.0": { uncompressed: y, compressed: z },
                "1.5.2": { uncompressed: y, compressed: z },
                "1.8.0": { uncompressed: y, compressed: z },
                "1.7.1": { uncompressed: y, compressed: z },
                "1.5.3": { uncompressed: y, compressed: z },
                "1.8.1": { uncompressed: y, compressed: z },
                "1.7.2": { uncompressed: y, compressed: z },
                "1.8.2": { uncompressed: y, compressed: z },
                "1.7.3": { uncompressed: y, compressed: z }
            },
            aliases: { 1: "1.8.17", "1.8.3": "1.8.4", "1.5": "1.5.3", "1.6": "1.6.0", "1.7": "1.7.3", "1.8": "1.8.17" }
        },
        mootools: {
            versions: {
                "1.3.0": { uncompressed: D, compressed: C },
                "1.2.1": { uncompressed: D, compressed: C },
                "1.1.2": { uncompressed: D, compressed: C },
                "1.4.0": { uncompressed: D, compressed: C },
                "1.3.1": {
                    uncompressed: D,
                    compressed: C
                },
                "1.2.2": { uncompressed: D, compressed: C },
                "1.4.1": { uncompressed: D, compressed: C },
                "1.3.2": { uncompressed: D, compressed: C },
                "1.2.3": { uncompressed: D, compressed: C },
                "1.4.2": { uncompressed: D, compressed: C },
                "1.2.4": { uncompressed: D, compressed: C },
                "1.2.5": { uncompressed: D, compressed: C },
                "1.1.1": { uncompressed: D, compressed: C }
            },
            aliases: { 1: "1.1.2", "1.1": "1.1.2", "1.2": "1.2.5", "1.3": "1.3.2", "1.4": "1.4.2", "1.11": "1.1.1" }
        },
        yui: {
            versions: {
                "2.8.0r4": { uncompressed: r, compressed: q },
                "2.9.0": { uncompressed: r, compressed: q },
                "2.8.1": { uncompressed: r, compressed: q },
                "2.6.0": { uncompressed: r, compressed: q },
                "2.7.0": { uncompressed: r, compressed: q },
                "3.3.0": { uncompressed: "build/yui/yui.js", compressed: "build/yui/yui-min.js" },
                "2.8.2r1": { uncompressed: r, compressed: q }
            },
            aliases: { 2: "2.9.0", 3: "3.3.0", "2.8.2": "2.8.2r1", "2.8.0": "2.8.0r4", "3.3": "3.3.0", "2.6": "2.6.0", "2.7": "2.7.0", "2.8": "2.8.2r1", "2.9": "2.9.0" }
        },
        prototype: {
            versions: {
                "1.6.1.0": { uncompressed: G, compressed: G },
                "1.6.0.2": { uncompressed: G, compressed: G },
                "1.7.0.0": { uncompressed: G, compressed: G },
                "1.6.0.3": { uncompressed: G, compressed: G }
            },
            aliases: { 1: "1.7.0.0", "1.6.0": "1.6.0.3", "1.6.1": "1.6.1.0", "1.7.0": "1.7.0.0", "1.6": "1.6.1.0", "1.7": "1.7.0.0" }
        },
        jquery: {
            versions: {
                "1.3.0": { uncompressed: A, compressed: B },
                "1.4.0": { uncompressed: A, compressed: B },
                "1.3.1": { uncompressed: A, compressed: B },
                "1.5.0": { uncompressed: A, compressed: B },
                "1.4.1": { uncompressed: A, compressed: B },
                "1.3.2": { uncompressed: A, compressed: B },
                "1.2.3": { uncompressed: A, compressed: B },
                "1.6.0": { uncompressed: A, compressed: B },
                "1.5.1": { uncompressed: A, compressed: B },
                "1.4.2": { uncompressed: A, compressed: B },
                "1.7.0": { uncompressed: A, compressed: B },
                "1.6.1": { uncompressed: A, compressed: B },
                "1.5.2": { uncompressed: A, compressed: B },
                "1.4.3": { uncompressed: A, compressed: B },
                "1.7.1": { uncompressed: A, compressed: B },
                "1.6.2": { uncompressed: A, compressed: B },
                "1.4.4": { uncompressed: A, compressed: B },
                "1.2.6": { uncompressed: A, compressed: B },
                "1.6.3": { uncompressed: A, compressed: B },
                "1.6.4": { uncompressed: A, compressed: B }
            },
            aliases: {
                1: "1.7.1",
                "1.2": "1.2.6",
                "1.3": "1.3.2",
                "1.4": "1.4.4",
                "1.5": "1.5.2",
                "1.6": "1.6.4",
                "1.7": "1.7.1"
            }
        },
        dojo: {
            versions: {
                "1.3.0": { uncompressed: u, compressed: t },
                "1.4.0": { uncompressed: u, compressed: t },
                "1.3.1": { uncompressed: u, compressed: t },
                "1.5.0": { uncompressed: u, compressed: t },
                "1.4.1": { uncompressed: u, compressed: t },
                "1.3.2": { uncompressed: u, compressed: t },
                "1.2.3": { uncompressed: u, compressed: t },
                "1.6.0": { uncompressed: u, compressed: t },
                "1.5.1": { uncompressed: u, compressed: t },
                "1.7.0": { uncompressed: ja, compressed: ia },
                "1.6.1": { uncompressed: u, compressed: t },
                "1.4.3": { uncompressed: u, compressed: t },
                "1.7.1": {
                    uncompressed: ja,
                    compressed: ia
                },
                "1.7.2": { uncompressed: ja, compressed: ia },
                "1.2.0": { uncompressed: u, compressed: t },
                "1.1.1": { uncompressed: u, compressed: t }
            },
            aliases: { 1: "1.6.1", "1.1": "1.1.1", "1.2": "1.2.3", "1.3": "1.3.2", "1.4": "1.4.3", "1.5": "1.5.1", "1.6": "1.6.1", "1.7": "1.7.2" }
        }
    };
    google.v.w.ia = {};
    google.v.w.ia.Ci = function() {
        return new Promise(function(b) {
            if ("undefined" == typeof window || "complete" === document.readyState) b();
            else if (window.addEventListener) document.addEventListener("DOMContentLoaded", b, !0), window.addEventListener("load", b, !0);
            else if (window.attachEvent) window.attachEvent("onload", b);
            else {
                var c = window.onload;
                T.Sa(c) ? window.onload = function(d) {
                    c(d);
                    b()
                } : window.onload = b
            }
        })
    };
    T.Yb("google.charts.loader.Utils.isWindowLoaded", google.v.w.ia.Ci);
    google.v.w.ia.gb = {};
    google.v.w.ia.Cw = function() { google.v.w.ia.gb = {} };
    google.v.w.ia.Uu = function(b) { return google.v.w.ia.gb[b] && google.v.w.ia.gb[b].Od };
    google.v.w.ia.Tu = function(b) { return google.v.w.ia.gb[b] && google.v.w.ia.gb[b].loaded };
    google.v.w.ia.gx = function(b, c) { google.v.w.ia.gb[b] = { Od: c, loaded: !1 } };
    google.v.w.ia.no = function(b) {
        google.v.w.ia.gb[b] || (google.v.w.ia.gb[b] = { loaded: !1 });
        google.v.w.ia.gb[b].loaded = !0
    };
    google.v.w.Ha = {};
    google.v.w.Ha.nj = 3E4;
    google.v.w.Ha.Yv = function(b, c) { return { format: b, Cg: c } };
    google.v.w.Ha.Sh = function(b) { return T.b.I.format(b.format, b.Cg) };
    google.v.w.Ha.load = function(b, c) {
        var d = T.b.I.format(b, c),
            e = T.M.O.mc(d, { timeout: google.v.w.Ha.nj, attributes: { async: !1, defer: !1 } });
        return new Promise(function(f) {
            google.v.w.ia.no(d.toString());
            Ra(e, f)
        })
    };
    google.v.w.Ha.Uv = function(b) {
        b = T.g.map(b, google.v.w.Ha.Sh);
        if (T.g.Aa(b)) return Promise.resolve();
        var c = { timeout: google.v.w.Ha.nj, attributes: { async: !1, defer: !1 } },
            d = [];
        !T.userAgent.na || T.userAgent.Ta(11) ? T.g.forEach(b, function(e) { d.push(T.M.O.mc(e, c)) }) : d.push(T.M.O.ao(b, c));
        return Promise.all(T.g.map(d, function(e) { return new Promise(function(f) { return Ra(e, f) }) }))
    };
    google.v.w.xg = { 1: "1.0", "1.0": "current", "1.1": "upcoming", 41: qa, 42: qa, 43: qa, 44: qa, 46: "46.1", "46.1": "46.2", current: "47", upcoming: "47" };
    T.o = {};
    T.o.ta = "StopIteration" in T.global ? T.global.StopIteration : { message: "StopIteration", stack: "" };
    T.o.Iterator = O();
    T.o.Iterator.prototype.next = function() { throw T.o.ta; };
    T.o.Iterator.prototype.pe = function() { return this };
    T.o.ea = function(b) {
        if (b instanceof T.o.Iterator) return b;
        if (typeof b.pe == w) return b.pe(!1);
        if (T.la(b)) {
            var c = 0,
                d = new T.o.Iterator;
            d.next = function() {
                for (;;) {
                    if (c >= b.length) throw T.o.ta;
                    if (c in b) return b[c++];
                    c++
                }
            };
            return d
        }
        throw Error("Not implemented");
    };
    T.o.forEach = function(b, c, d) { if (T.la(b)) try { T.g.forEach(b, c, d) } catch (e) { if (e !== T.o.ta) throw e; } else { b = T.o.ea(b); try { for (;;) c.call(d, b.next(), void 0, b) } catch (e) { if (e !== T.o.ta) throw e; } } };
    T.o.filter = function(b, c, d) {
        var e = T.o.ea(b);
        b = new T.o.Iterator;
        b.next = function() { for (;;) { var f = e.next(); if (c.call(d, f, void 0, e)) return f } };
        return b
    };
    T.o.cu = function(b, c, d) { return T.o.filter(b, T.U.yn(c), d) };
    T.o.Pd = function(b, c, d) {
        var e = 0,
            f = b,
            g = d || 1;
        1 < arguments.length && (e = b, f = +c);
        if (0 == g) throw Error("Range step argument must not be zero");
        var k = new T.o.Iterator;
        k.next = function() {
            if (0 < g && e >= f || 0 > g && e <= f) throw T.o.ta;
            var h = e;
            e += g;
            return h
        };
        return k
    };
    T.o.join = function(b, c) { return T.o.Za(b).join(c) };
    T.o.map = function(b, c, d) {
        var e = T.o.ea(b);
        b = new T.o.Iterator;
        b.next = function() { var f = e.next(); return c.call(d, f, void 0, e) };
        return b
    };
    T.o.reduce = function(b, c, d, e) {
        var f = d;
        T.o.forEach(b, function(g) { f = c.call(e, f, g) });
        return f
    };
    T.o.some = function(b, c, d) {
        b = T.o.ea(b);
        try {
            for (;;)
                if (c.call(d, b.next(), void 0, b)) return !0
        } catch (e) { if (e !== T.o.ta) throw e; }
        return !1
    };
    T.o.every = function(b, c, d) {
        b = T.o.ea(b);
        try {
            for (;;)
                if (!c.call(d, b.next(), void 0, b)) return !1
        } catch (e) { if (e !== T.o.ta) throw e; }
        return !0
    };
    T.o.ht = function(b) { return T.o.xl(arguments) };
    T.o.xl = function(b) {
        var c = T.o.ea(b);
        b = new T.o.Iterator;
        var d = null;
        b.next = function() {
            for (;;) {
                if (null == d) {
                    var e = c.next();
                    d = T.o.ea(e)
                }
                try { return d.next() } catch (f) {
                    if (f !== T.o.ta) throw f;
                    d = null
                }
            }
        };
        return b
    };
    T.o.Tt = function(b, c, d) {
        var e = T.o.ea(b);
        b = new T.o.Iterator;
        var f = !0;
        b.next = function() { for (;;) { var g = e.next(); if (!f || !c.call(d, g, void 0, e)) return f = !1, g } };
        return b
    };
    T.o.Ax = function(b, c, d) {
        var e = T.o.ea(b);
        b = new T.o.Iterator;
        b.next = function() { var f = e.next(); if (c.call(d, f, void 0, e)) return f; throw T.o.ta; };
        return b
    };
    T.o.Za = function(b) {
        if (T.la(b)) return T.g.Za(b);
        b = T.o.ea(b);
        var c = [];
        T.o.forEach(b, function(d) { c.push(d) });
        return c
    };
    T.o.Ib = function(b, c) { b = T.o.Vo({}, b, c); var d = T.g.bh; return T.o.every(b, function(e) { return d(e[0], e[1]) }) };
    T.o.xn = function(b) { try { T.o.ea(b).next() } catch (c) { if (c != T.o.ta) throw c; } };
    T.o.product = function(b) {
        if (T.g.some(arguments, function(f) { return !f.length }) || !arguments.length) return new T.o.Iterator;
        var c = new T.o.Iterator,
            d = arguments,
            e = T.g.repeat(0, d.length);
        c.next = function() {
            if (e) {
                for (var f = T.g.map(e, function(k, h) { return d[h][k] }), g = e.length - 1; 0 <= g; g--) {
                    if (e[g] < d[g].length - 1) { e[g]++; break }
                    if (0 == g) { e = null; break }
                    e[g] = 0
                }
                return f
            }
            throw T.o.ta;
        };
        return c
    };
    T.o.Lt = function(b) {
        var c = T.o.ea(b),
            d = [],
            e = 0;
        b = new T.o.Iterator;
        var f = !1;
        b.next = function() {
            var g = null;
            if (!f) try { return g = c.next(), d.push(g), g } catch (k) {
                if (k != T.o.ta || T.g.Aa(d)) throw k;
                f = !0
            }
            g = d[e];
            e = (e + 1) % d.length;
            return g
        };
        return b
    };
    T.o.count = function(b, c) {
        var d = b || 0,
            e = void 0 !== c ? c : 1;
        b = new T.o.Iterator;
        b.next = function() {
            var f = d;
            d += e;
            return f
        };
        return b
    };
    T.o.repeat = function(b) {
        var c = new T.o.Iterator;
        c.next = T.U.Tg(b);
        return c
    };
    T.o.As = function(b) {
        var c = T.o.ea(b),
            d = 0;
        b = new T.o.Iterator;
        b.next = function() { return d += c.next() };
        return b
    };
    T.o.xj = function(b) {
        var c = arguments,
            d = new T.o.Iterator;
        if (0 < c.length) {
            var e = T.g.map(c, T.o.ea);
            d.next = function() { return T.g.map(e, function(f) { return f.next() }) }
        }
        return d
    };
    T.o.Vo = function(b, c) {
        var d = T.g.slice(arguments, 1),
            e = new T.o.Iterator;
        if (0 < d.length) {
            var f = T.g.map(d, T.o.ea);
            e.next = function() {
                var g = !1,
                    k = T.g.map(f, function(h) {
                        try {
                            var m = h.next();
                            g = !0
                        } catch (n) {
                            if (n !== T.o.ta) throw n;
                            m = b
                        }
                        return m
                    });
                if (!g) throw T.o.ta;
                return k
            }
        }
        return e
    };
    T.o.qt = function(b, c) { var d = T.o.ea(c); return T.o.filter(b, function() { return !!d.next() }) };
    T.o.ie = function(b, c) {
        this.iterator = T.o.ea(b);
        this.Fi = c || T.U.ai
    };
    T.vb(T.o.ie, T.o.Iterator);
    T.o.ie.prototype.next = function() {
        for (; this.zc == this.kj;) this.ld = this.iterator.next(), this.zc = this.Fi(this.ld);
        for (var b = this.kj = this.zc, c = this.kj, d = []; this.zc == c;) {
            d.push(this.ld);
            try { this.ld = this.iterator.next() } catch (e) { if (e !== T.o.ta) throw e; break }
            this.zc = this.Fi(this.ld)
        }
        return [b, d]
    };
    T.o.Zu = function(b, c) { return new T.o.ie(b, c) };
    T.o.vx = function(b, c, d) {
        var e = T.o.ea(b);
        b = new T.o.Iterator;
        b.next = function() { var f = T.o.Za(e.next()); return c.apply(d, T.g.concat(f, void 0, e)) };
        return b
    };
    T.o.tee = function(b, c) {
        function d() {
            var g = e.next();
            T.g.forEach(f, function(k) { k.push(g) })
        }
        var e = T.o.ea(b),
            f = T.g.map(T.g.Pd(typeof c === E ? c : 2), function() { return [] });
        return T.g.map(f, function(g) {
            var k = new T.o.Iterator;
            k.next = function() { T.g.Aa(g) && d(); return g.shift() };
            return k
        })
    };
    T.o.Zt = function(b, c) { return T.o.xj(T.o.count(c), b) };
    T.o.bn = function(b, c) {
        var d = T.o.ea(b);
        b = new T.o.Iterator;
        var e = c;
        b.next = function() { if (0 < e--) return d.next(); throw T.o.ta; };
        return b
    };
    T.o.Al = function(b, c) { for (b = T.o.ea(b); 0 < c--;) T.o.xn(b); return b };
    T.o.slice = function(b, c, d) {
        b = T.o.Al(b, c);
        typeof d === E && (b = T.o.bn(b, d - c));
        return b
    };
    T.o.zm = function(b) {
        var c = [];
        T.g.Kn(b, c);
        return b.length != c.length
    };
    T.o.Bn = function(b, c) {
        b = T.o.Za(b);
        c = T.g.repeat(b, typeof c === E ? c : b.length);
        c = T.o.product.apply(void 0, c);
        return T.o.filter(c, function(d) { return !T.o.zm(d) })
    };
    T.o.mt = function(b, c) {
        function d(g) { return e[g] }
        var e = T.o.Za(b);
        b = T.o.Pd(e.length);
        c = T.o.Bn(b, c);
        var f = T.o.filter(c, function(g) { return T.g.yi(g) });
        c = new T.o.Iterator;
        c.next = function() { return T.g.map(f.next(), d) };
        return c
    };
    T.o.nt = function(b, c) {
        function d(g) { return e[g] }
        var e = T.o.Za(b);
        b = T.g.Pd(e.length);
        c = T.g.repeat(b, c);
        c = T.o.product.apply(void 0, c);
        var f = T.o.filter(c, function(g) { return T.g.yi(g) });
        c = new T.o.Iterator;
        c.next = function() { return T.g.map(f.next(), d) };
        return c
    };
    T.P = {};
    T.P.Map = function(b, c) {
        this.Ca = {};
        this.Z = [];
        this.Tc = this.Y = 0;
        var d = arguments.length;
        if (1 < d) { if (d % 2) throw Error(da); for (var e = 0; e < d; e += 2) this.set(arguments[e], arguments[e + 1]) } else b && this.addAll(b)
    };
    Q = T.P.Map.prototype;
    Q.sb = P("Y");
    Q.fa = function() { W(this); for (var b = [], c = 0; c < this.Z.length; c++) b.push(this.Ca[this.Z[c]]); return b };
    Q.ka = function() { W(this); return this.Z.concat() };
    Q.Fb = function(b) { return T.P.Map.Kb(this.Ca, b) };
    Q.Gb = function(b) { for (var c = 0; c < this.Z.length; c++) { var d = this.Z[c]; if (T.P.Map.Kb(this.Ca, d) && this.Ca[d] == b) return !0 } return !1 };
    Q.Ib = function(b, c) {
        if (this === b) return !0;
        if (this.Y != b.sb()) return !1;
        c = c || T.P.Map.Hl;
        W(this);
        for (var d, e = 0; d = this.Z[e]; e++)
            if (!c(this.get(d), b.get(d))) return !1;
        return !0
    };
    T.P.Map.Hl = function(b, c) { return b === c };
    Q = T.P.Map.prototype;
    Q.Aa = function() { return 0 == this.Y };
    Q.clear = function() {
        this.Ca = {};
        this.Tc = this.Y = this.Z.length = 0
    };
    Q.remove = function(b) { return T.P.Map.Kb(this.Ca, b) ? (delete this.Ca[b], this.Y--, this.Tc++, this.Z.length > 2 * this.Y && W(this), !0) : !1 };

    function W(b) {
        if (b.Y != b.Z.length) {
            for (var c = 0, d = 0; c < b.Z.length;) {
                var e = b.Z[c];
                T.P.Map.Kb(b.Ca, e) && (b.Z[d++] = e);
                c++
            }
            b.Z.length = d
        }
        if (b.Y != b.Z.length) {
            var f = {};
            for (d = c = 0; c < b.Z.length;) e = b.Z[c], T.P.Map.Kb(f, e) || (b.Z[d++] = e, f[e] = 1), c++;
            b.Z.length = d
        }
    }
    Q.get = function(b, c) { return T.P.Map.Kb(this.Ca, b) ? this.Ca[b] : c };
    Q.set = function(b, c) {
        T.P.Map.Kb(this.Ca, b) || (this.Y++, this.Z.push(b), this.Tc++);
        this.Ca[b] = c
    };
    Q.addAll = function(b) {
        if (b instanceof T.P.Map)
            for (var c = b.ka(), d = 0; d < c.length; d++) this.set(c[d], b.get(c[d]));
        else
            for (c in b) this.set(c, b[c])
    };
    Q.forEach = function(b, c) {
        for (var d = this.ka(), e = 0; e < d.length; e++) {
            var f = d[e],
                g = this.get(f);
            b.call(c, g, f, this)
        }
    };
    Q.clone = function() { return new T.P.Map(this) };
    Q.Eo = function() {
        for (var b = new T.P.Map, c = 0; c < this.Z.length; c++) {
            var d = this.Z[c];
            b.set(this.Ca[d], d)
        }
        return b
    };
    Q.Co = function() {
        W(this);
        for (var b = {}, c = 0; c < this.Z.length; c++) {
            var d = this.Z[c];
            b[d] = this.Ca[d]
        }
        return b
    };
    Q.pe = function(b) {
        W(this);
        var c = 0,
            d = this.Tc,
            e = this,
            f = new T.o.Iterator;
        f.next = function() { if (d != e.Tc) throw Error("The map has changed since the iterator was created"); if (c >= e.Z.length) throw T.o.ta; var g = e.Z[c++]; return b ? g : e.Ca[g] };
        return f
    };
    T.P.Map.Kb = function(b, c) { return Object.prototype.hasOwnProperty.call(b, c) };
    T.P.sb = function(b) { return b.sb && typeof b.sb == w ? b.sb() : T.la(b) || typeof b === I ? b.length : T.object.sb(b) };
    T.P.fa = function(b) { if (b.fa && typeof b.fa == w) return b.fa(); if (typeof b === I) return b.split(""); if (T.la(b)) { for (var c = [], d = b.length, e = 0; e < d; e++) c.push(b[e]); return c } return T.object.fa(b) };
    T.P.ka = function(b) {
        if (b.ka && typeof b.ka == w) return b.ka();
        if (!b.fa || typeof b.fa != w) {
            if (T.la(b) || typeof b === I) {
                var c = [];
                b = b.length;
                for (var d = 0; d < b; d++) c.push(d);
                return c
            }
            return T.object.ka(b)
        }
    };
    T.P.contains = function(b, c) { return b.contains && typeof b.contains == w ? b.contains(c) : b.Gb && typeof b.Gb == w ? b.Gb(c) : T.la(b) || typeof b === I ? T.g.contains(b, c) : T.object.Gb(b, c) };
    T.P.Aa = function(b) { return b.Aa && typeof b.Aa == w ? b.Aa() : T.la(b) || typeof b === I ? T.g.Aa(b) : T.object.Aa(b) };
    T.P.clear = function(b) { b.clear && typeof b.clear == w ? b.clear() : T.la(b) ? T.g.clear(b) : T.object.clear(b) };
    T.P.forEach = function(b, c, d) {
        if (b.forEach && typeof b.forEach == w) b.forEach(c, d);
        else if (T.la(b) || typeof b === I) T.g.forEach(b, c, d);
        else
            for (var e = T.P.ka(b), f = T.P.fa(b), g = f.length, k = 0; k < g; k++) c.call(d, f[k], e && e[k], b)
    };
    T.P.filter = function(b, c, d) {
        if (typeof b.filter == w) return b.filter(c, d);
        if (T.la(b) || typeof b === I) return T.g.filter(b, c, d);
        var e = T.P.ka(b),
            f = T.P.fa(b),
            g = f.length;
        if (e) { var k = {}; for (var h = 0; h < g; h++) c.call(d, f[h], e[h], b) && (k[e[h]] = f[h]) } else
            for (k = [], h = 0; h < g; h++) c.call(d, f[h], void 0, b) && k.push(f[h]);
        return k
    };
    T.P.map = function(b, c, d) {
        if (typeof b.map == w) return b.map(c, d);
        if (T.la(b) || typeof b === I) return T.g.map(b, c, d);
        var e = T.P.ka(b),
            f = T.P.fa(b),
            g = f.length;
        if (e) { var k = {}; for (var h = 0; h < g; h++) k[e[h]] = c.call(d, f[h], e[h], b) } else
            for (k = [], h = 0; h < g; h++) k[h] = c.call(d, f[h], void 0, b);
        return k
    };
    T.P.some = function(b, c, d) {
        if (typeof b.some == w) return b.some(c, d);
        if (T.la(b) || typeof b === I) return T.g.some(b, c, d);
        for (var e = T.P.ka(b), f = T.P.fa(b), g = f.length, k = 0; k < g; k++)
            if (c.call(d, f[k], e && e[k], b)) return !0;
        return !1
    };
    T.P.every = function(b, c, d) {
        if (typeof b.every == w) return b.every(c, d);
        if (T.la(b) || typeof b === I) return T.g.every(b, c, d);
        for (var e = T.P.ka(b), f = T.P.fa(b), g = f.length, k = 0; k < g; k++)
            if (!c.call(d, f[k], e && e[k], b)) return !1;
        return !0
    };
    T.uri = {};
    T.uri.l = {};
    T.uri.l.sc = { Ef: 38, EQUAL: 61, ik: 35, tk: 63 };
    T.uri.l.te = function(b, c, d, e, f, g, k) {
        var h = "";
        b && (h += b + ":");
        d && (h += "//", c && (h += c + "@"), h += d, e && (h += ":" + e));
        f && (h += f);
        g && (h += "?" + g);
        k && (h += "#" + k);
        return h
    };
    T.uri.l.to = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    T.uri.l.T = { Ub: 1, ne: 2, jb: 3, mb: 4, je: 5, ke: 6, Yf: 7 };
    T.uri.l.split = function(b) { return b.match(T.uri.l.to) };
    T.uri.l.md = function(b, c) { return b ? c ? decodeURI(b) : decodeURIComponent(b) : b };
    T.uri.l.$b = function(b, c) { return T.uri.l.split(c)[b] || null };
    T.uri.l.Hc = function(b) { return T.uri.l.$b(T.uri.l.T.Ub, b) };
    T.uri.l.Fu = function(b) { b = T.uri.l.Hc(b);!b && T.global.self && T.global.self.location && (b = T.global.self.location.protocol, b = b.substr(0, b.length - 1)); return b ? b.toLowerCase() : "" };
    T.uri.l.sm = function() { return T.uri.l.$b(T.uri.l.T.ne, void 0) };
    T.uri.l.vd = function() { return T.uri.l.md(T.uri.l.sm()) };
    T.uri.l.em = function() { return T.uri.l.$b(T.uri.l.T.jb, void 0) };
    T.uri.l.Gc = function() { return T.uri.l.md(T.uri.l.em(), !0) };
    T.uri.l.td = function() { return Number(T.uri.l.$b(T.uri.l.T.mb, void 0)) || null };
    T.uri.l.lm = function() { return T.uri.l.$b(T.uri.l.T.je, void 0) };
    T.uri.l.ac = function() { return T.uri.l.md(T.uri.l.lm(), !0) };
    T.uri.l.Te = function() { return T.uri.l.$b(T.uri.l.T.ke, void 0) };
    T.uri.l.hm = function() { var b = (void 0).indexOf("#"); return 0 > b ? null : (void 0).substr(b + 1) };
    T.uri.l.Xw = function(b, c) { return T.uri.l.Ln(b) + (c ? "#" + c : "") };
    T.uri.l.rd = function() { return T.uri.l.md(T.uri.l.hm()) };
    T.uri.l.Hu = function(b) { b = T.uri.l.split(b); return T.uri.l.te(b[T.uri.l.T.Ub], b[T.uri.l.T.ne], b[T.uri.l.T.jb], b[T.uri.l.T.mb]) };
    T.uri.l.Mu = function(b) { b = T.uri.l.split(b); return T.uri.l.te(b[T.uri.l.T.Ub], null, b[T.uri.l.T.jb], b[T.uri.l.T.mb]) };
    T.uri.l.Qu = function(b) { b = T.uri.l.split(b); return T.uri.l.te(null, null, null, null, b[T.uri.l.T.je], b[T.uri.l.T.ke], b[T.uri.l.T.Yf]) };
    T.uri.l.Ln = function(b) { var c = b.indexOf("#"); return 0 > c ? b : b.substr(0, c) };
    T.uri.l.Cm = function(b, c) {
        b = T.uri.l.split(b);
        c = T.uri.l.split(c);
        return b[T.uri.l.T.jb] == c[T.uri.l.T.jb] && b[T.uri.l.T.Ub] == c[T.uri.l.T.Ub] && b[T.uri.l.T.mb] == c[T.uri.l.T.mb]
    };
    T.uri.l.Ts = O();
    T.uri.l.zn = function(b, c) {
        if (b) {
            b = b.split("&");
            for (var d = 0; d < b.length; d++) {
                var e = b[d].indexOf("="),
                    f = null;
                if (0 <= e) {
                    var g = b[d].substring(0, e);
                    f = b[d].substring(e + 1)
                } else g = b[d];
                c(g, f ? T.c.Yd(f) : "")
            }
        }
    };
    T.uri.l.fj = function(b) {
        var c = b.indexOf("#");
        0 > c && (c = b.length);
        var d = b.indexOf("?");
        if (0 > d || d > c) { d = c; var e = "" } else e = b.substring(d + 1, c);
        return [b.substr(0, d), e, b.substr(c)]
    };
    T.uri.l.Ei = function(b) { return b[0] + (b[1] ? "?" + b[1] : "") + b[2] };
    T.uri.l.zg = function(b, c) { return c ? b ? b + "&" + c : c : b };
    T.uri.l.re = function(b, c) {
        if (!c) return b;
        b = T.uri.l.fj(b);
        b[1] = T.uri.l.zg(b[1], c);
        return T.uri.l.Ei(b)
    };
    T.uri.l.qe = function(b, c, d) {
        if (Array.isArray(c))
            for (var e = 0; e < c.length; e++) T.uri.l.qe(b, String(c[e]), d);
        else null != c && d.push(b + ("" === c ? "" : "=" + T.c.Sc(c)))
    };
    T.uri.l.Kg = function(b, c) { var d = []; for (c = c || 0; c < b.length; c += 2) T.uri.l.qe(b[c], b[c + 1], d); return d.join("&") };
    T.uri.l.Lg = function(b) {
        var c = [],
            d;
        for (d in b) T.uri.l.qe(d, b[d], c);
        return c.join("&")
    };
    T.uri.l.Gs = function(b, c) { var d = 2 == arguments.length ? T.uri.l.Kg(arguments[1], 0) : T.uri.l.Kg(arguments, 1); return T.uri.l.re(b, d) };
    T.uri.l.Hs = function(b, c) { c = T.uri.l.Lg(c); return T.uri.l.re(b, c) };
    T.uri.l.Wk = function(b, c, d) { d = null != d ? "=" + T.c.Sc(d) : ""; return T.uri.l.re(b, c + d) };
    T.uri.l.pd = function(b, c, d, e) {
        for (var f = d.length; 0 <= (c = b.indexOf(d, c)) && c < e;) {
            var g = b.charCodeAt(c - 1);
            if (g == T.uri.l.sc.Ef || g == T.uri.l.sc.tk)
                if (g = b.charCodeAt(c + f), !g || g == T.uri.l.sc.EQUAL || g == T.uri.l.sc.Ef || g == T.uri.l.sc.ik) return c;
            c += f + 1
        }
        return -1
    };
    T.uri.l.yd = /#|$/;
    T.uri.l.av = function(b, c) { return 0 <= T.uri.l.pd(b, 0, c, b.search(T.uri.l.yd)) };
    T.uri.l.Ou = function(b, c) {
        var d = b.search(T.uri.l.yd),
            e = T.uri.l.pd(b, 0, c, d);
        if (0 > e) return null;
        var f = b.indexOf("&", e);
        if (0 > f || f > d) f = d;
        e += c.length + 1;
        return T.c.Yd(b.substr(e, f - e))
    };
    T.uri.l.Pu = function(b, c) {
        for (var d = b.search(T.uri.l.yd), e = 0, f, g = []; 0 <= (f = T.uri.l.pd(b, e, c, d));) {
            e = b.indexOf("&", f);
            if (0 > e || e > d) e = d;
            f += c.length + 1;
            g.push(T.c.Yd(b.substr(f, e - f)))
        }
        return g
    };
    T.uri.l.Do = /[?&]($|#)/;
    T.uri.l.Mn = function(b, c) {
        for (var d = b.search(T.uri.l.yd), e = 0, f, g = []; 0 <= (f = T.uri.l.pd(b, e, c, d));) g.push(b.substring(e, f)), e = Math.min(b.indexOf("&", f) + 1 || d, d);
        g.push(b.substr(e));
        return g.join("").replace(T.uri.l.Do, "$1")
    };
    T.uri.l.mo = function(b) {
        var c = T.uri.l.pg.ng,
            d = T.c.Oh();
        return T.uri.l.Wk(T.uri.l.Mn(b, c), c, d)
    };
    T.uri.l.fx = function(b, c) {
        b = T.uri.l.fj(b);
        var d = b[1],
            e = [];
        d && T.g.forEach(d.split("&"), function(f) {
            var g = f.indexOf("=");
            c.hasOwnProperty(0 <= g ? f.substr(0, g) : f) || e.push(f)
        });
        b[1] = T.uri.l.zg(e.join("&"), T.uri.l.Lg(c));
        return T.uri.l.Ei(b)
    };
    T.uri.l.Is = function(b, c) {
        T.c.endsWith(b, "/") && (b = b.substr(0, b.length - 1));
        T.c.startsWith(c, "/") && (c = c.substr(1));
        return T.c.sl(b, "/", c)
    };
    T.uri.l.Rc = function(b) { T.uri.l.split(b) };
    T.uri.l.pg = { ng: "zx" };
    T.uri.l.qn = function(b) { return T.uri.l.mo(b) };
    T.J = function(b, c) {
        this.fb = this.Cf = this.nc = "";
        this.Id = null;
        this.Ge = this.Hd = "";
        this.La = this.Tm = !1;
        var d;
        b instanceof T.J ? (this.La = void 0 !== c ? c : b.La, Ua(this, b.Hc()), Va(this, b.vd()), Wa(this, b.Gc()), Xa(this, b.td()), this.Rc(b.ac()), Ya(this, b.Te().clone()), Za(this, b.rd())) : b && (d = T.uri.l.split(String(b))) ? (this.La = !!c, Ua(this, d[T.uri.l.T.Ub] || "", !0), Va(this, d[T.uri.l.T.ne] || "", !0), Wa(this, d[T.uri.l.T.jb] || "", !0), Xa(this, d[T.uri.l.T.mb]), this.Rc(d[T.uri.l.T.je] || "", !0), Ya(this, d[T.uri.l.T.ke] || "", !0), Za(this,
            d[T.uri.l.T.Yf] || "", !0)) : (this.La = !!c, this.Na = new T.J.Ya(null, this.La))
    };
    T.J.uk = T.uri.l.pg.ng;
    Q = T.J.prototype;
    Q.toString = function() {
        var b = [],
            c = this.Hc();
        c && b.push(T.J.Cc(c, T.J.Ti, !0), ":");
        var d = this.Gc();
        if (d || "file" == c) b.push("//"), (c = this.vd()) && b.push(T.J.Cc(c, T.J.Ti, !0), "@"), b.push(T.J.Ui(T.c.Sc(d))), d = this.td(), null != d && b.push(":", String(d));
        if (d = this.ac()) this.fb && "/" != d.charAt(0) && b.push("/"), b.push(T.J.Cc(d, "/" == d.charAt(0) ? T.J.Fn : T.J.In, !0));
        (d = this.Na.toString()) && b.push("?", d);
        (d = this.rd()) && b.push("#", T.J.Cc(d, T.J.Gn));
        return b.join("")
    };
    Q.resolve = function(b) {
        var c = this.clone(),
            d = !!b.nc;
        d ? Ua(c, b.Hc()) : d = !!b.Cf;
        d ? Va(c, b.vd()) : d = !!b.fb;
        d ? Wa(c, b.Gc()) : d = null != b.Id;
        var e = b.ac();
        if (d) Xa(c, b.td());
        else if (d = !!b.Hd) {
            if ("/" != e.charAt(0))
                if (this.fb && !this.Hd) e = "/" + e;
                else { var f = c.ac().lastIndexOf("/"); - 1 != f && (e = c.ac().substr(0, f + 1) + e) }
            e = T.J.Jn(e)
        }
        d ? c.Rc(e) : d = "" !== b.Na.toString();
        d ? Ya(c, b.Te().clone()) : d = !!b.Ge;
        d && Za(c, b.rd());
        return c
    };
    Q.clone = function() { return new T.J(this) };
    Q.Hc = P("nc");

    function Ua(b, c, d) {
        X(b);
        b.nc = d ? T.J.Bc(c, !0) : c;
        b.nc && (b.nc = b.nc.replace(/:$/, ""))
    }
    Q.vd = P("Cf");

    function Va(b, c, d) {
        X(b);
        b.Cf = d ? T.J.Bc(c) : c
    }
    Q.Gc = P("fb");

    function Wa(b, c, d) {
        X(b);
        b.fb = d ? T.J.Bc(c, !0) : c
    }
    Q.td = P("Id");

    function Xa(b, c) {
        X(b);
        if (c) {
            c = Number(c);
            if (isNaN(c) || 0 > c) throw Error("Bad port number " + c);
            b.Id = c
        } else b.Id = null
    }
    Q.ac = P("Hd");
    Q.Rc = function(b, c) {
        X(this);
        this.Hd = c ? T.J.Bc(b, !0) : b
    };

    function Ya(b, c, d) {
        X(b);
        c instanceof T.J.Ya ? (b.Na = c, b.Na.rf(b.La)) : (d || (c = T.J.Cc(c, T.J.Hn)), b.Na = new T.J.Ya(c, b.La))
    }
    Q.Te = P("Na");
    Q.getQuery = function() { return this.Na.toString() };
    Q.rd = P("Ge");

    function Za(b, c, d) {
        X(b);
        b.Ge = d ? T.J.Bc(c) : c
    }
    Q.qn = function() {
        X(this);
        var b = T.J.uk,
            c = T.c.Oh();
        X(this);
        this.Na.set(b, c);
        return this
    };
    Q.removeParameter = function(b) {
        X(this);
        this.Na.remove(b);
        return this
    };

    function X(b) { if (b.Tm) throw Error("Tried to modify a read-only Uri"); }
    Q.rf = function(b) {
        this.La = b;
        this.Na && this.Na.rf(b)
    };
    T.J.parse = function(b, c) { return b instanceof T.J ? b.clone() : new T.J(b, c) };
    T.J.create = function(b, c, d, e, f, g, k, h) {
        h = new T.J(null, h);
        b && Ua(h, b);
        c && Va(h, c);
        d && Wa(h, d);
        e && Xa(h, e);
        f && h.Rc(f);
        g && Ya(h, g);
        k && Za(h, k);
        return h
    };
    T.J.resolve = function(b, c) {
        b instanceof T.J || (b = T.J.parse(b));
        c instanceof T.J || (c = T.J.parse(c));
        return b.resolve(c)
    };
    T.J.Jn = function(b) {
        if (".." == b || "." == b) return "";
        if (T.c.contains(b, "./") || T.c.contains(b, "/.")) {
            var c = T.c.startsWith(b, "/");
            b = b.split("/");
            for (var d = [], e = 0; e < b.length;) { var f = b[e++]; "." == f ? c && e == b.length && d.push("") : ".." == f ? ((1 < d.length || 1 == d.length && "" != d[0]) && d.pop(), c && e == b.length && d.push("")) : (d.push(f), c = !0) }
            return d.join("/")
        }
        return b
    };
    T.J.Bc = function(b, c) { return b ? c ? decodeURI(b.replace(/%25/g, "%2525")) : decodeURIComponent(b) : "" };
    T.J.Cc = function(b, c, d) { return typeof b === I ? (b = encodeURI(b).replace(c, T.J.Ol), d && (b = T.J.Ui(b)), b) : null };
    T.J.Ol = function(b) { b = b.charCodeAt(0); return "%" + (b >> 4 & 15).toString(16) + (b & 15).toString(16) };
    T.J.Ui = function(b) { return b.replace(/%25([0-9a-fA-F]{2})/g, "%$1") };
    T.J.Ti = /[#\/\?@]/g;
    T.J.In = /[#\?:]/g;
    T.J.Fn = /[#\?]/g;
    T.J.Hn = /[#\?@]/g;
    T.J.Gn = /#/g;
    T.J.Cm = function(b, c) {
        b = T.uri.l.split(b);
        c = T.uri.l.split(c);
        return b[T.uri.l.T.jb] == c[T.uri.l.T.jb] && b[T.uri.l.T.mb] == c[T.uri.l.T.mb]
    };
    T.J.Ya = function(b, c) {
        this.Y = this.ba = null;
        this.Ja = b || null;
        this.La = !!c
    };

    function Y(b) { b.ba || (b.ba = new T.P.Map, b.Y = 0, b.Ja && T.uri.l.zn(b.Ja, function(c, d) { b.add(T.c.Yd(c), d) })) }
    T.J.Ya.xt = function(b, c, d) {
        c = T.P.ka(b);
        if ("undefined" == typeof c) throw Error("Keys are undefined");
        d = new T.J.Ya(null, d);
        b = T.P.fa(b);
        for (var e = 0; e < c.length; e++) {
            var f = c[e],
                g = b[e];
            Array.isArray(g) ? $a(d, f, g) : d.add(f, g)
        }
        return d
    };
    T.J.Ya.wt = function(b, c, d, e) {
        if (b.length != c.length) throw Error("Mismatched lengths for keys/values");
        d = new T.J.Ya(null, e);
        for (e = 0; e < b.length; e++) d.add(b[e], c[e]);
        return d
    };
    Q = T.J.Ya.prototype;
    Q.sb = function() { Y(this); return this.Y };
    Q.add = function(b, c) {
        Y(this);
        this.Ja = null;
        b = Z(this, b);
        var d = this.ba.get(b);
        d || this.ba.set(b, d = []);
        d.push(c);
        this.Y += 1;
        return this
    };
    Q.remove = function(b) {
        Y(this);
        b = Z(this, b);
        return this.ba.Fb(b) ? (this.Ja = null, this.Y -= this.ba.get(b).length, this.ba.remove(b)) : !1
    };
    Q.clear = function() {
        this.ba = this.Ja = null;
        this.Y = 0
    };
    Q.Aa = function() { Y(this); return 0 == this.Y };
    Q.Fb = function(b) {
        Y(this);
        b = Z(this, b);
        return this.ba.Fb(b)
    };
    Q.Gb = function(b) { var c = this.fa(); return T.g.contains(c, b) };
    Q.forEach = function(b, c) {
        Y(this);
        this.ba.forEach(function(d, e) { T.g.forEach(d, function(f) { b.call(c, f, e, this) }, this) }, this)
    };
    Q.ka = function() {
        Y(this);
        for (var b = this.ba.fa(), c = this.ba.ka(), d = [], e = 0; e < c.length; e++)
            for (var f = b[e], g = 0; g < f.length; g++) d.push(c[e]);
        return d
    };
    Q.fa = function(b) {
        Y(this);
        var c = [];
        if (typeof b === I) this.Fb(b) && (c = T.g.concat(c, this.ba.get(Z(this, b))));
        else { b = this.ba.fa(); for (var d = 0; d < b.length; d++) c = T.g.concat(c, b[d]) }
        return c
    };
    Q.set = function(b, c) {
        Y(this);
        this.Ja = null;
        b = Z(this, b);
        this.Fb(b) && (this.Y -= this.ba.get(b).length);
        this.ba.set(b, [c]);
        this.Y += 1;
        return this
    };
    Q.get = function(b, c) {
        if (!b) return c;
        b = this.fa(b);
        return 0 < b.length ? String(b[0]) : c
    };

    function $a(b, c, d) {
        b.remove(c);
        0 < d.length && (b.Ja = null, b.ba.set(Z(b, c), T.g.clone(d)), b.Y += d.length)
    }
    Q.toString = function() {
        if (this.Ja) return this.Ja;
        if (!this.ba) return "";
        for (var b = [], c = this.ba.ka(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = T.c.Sc(e);
            e = this.fa(e);
            for (var g = 0; g < e.length; g++) {
                var k = f;
                "" !== e[g] && (k += "=" + T.c.Sc(e[g]));
                b.push(k)
            }
        }
        return this.Ja = b.join("&")
    };
    Q.clone = function() {
        var b = new T.J.Ya;
        b.Ja = this.Ja;
        this.ba && (b.ba = this.ba.clone(), b.Y = this.Y);
        return b
    };

    function Z(b, c) {
        c = String(c);
        b.La && (c = c.toLowerCase());
        return c
    }
    Q.rf = function(b) {
        b && !this.La && (Y(this), this.Ja = null, this.ba.forEach(function(c, d) {
            var e = d.toLowerCase();
            d != e && (this.remove(d), $a(this, e, c))
        }, this));
        this.La = b
    };
    Q.extend = function(b) { for (var c = 0; c < arguments.length; c++) T.P.forEach(arguments[c], function(d, e) { this.add(e, d) }, this) };
    google.v.w.H = {};
    google.v.w.H.Fm = function() {
        google.v.w.H.cf = null;
        google.v.w.H.Ac = null;
        google.v.w.H.uj = null;
        google.v.w.H.Vl();
        var b = document.getElementsByTagName(sa);
        b = b[b.length - 1].getAttribute("src");
        b = new T.J(b);
        var c = b.Gc();
        c = c.match(/^www\.gstatic\.cn/) ? "gstatic.cn" : "gstatic.com";
        google.v.w.H.fb = c;
        b = new T.J.Ya(b.Na.toString());
        google.v.w.H.Dn(b.get("callback"));
        google.v.w.H.Cn(b.get("autoload"))
    };
    google.v.w.H.En = function() { google.v.w.H.fb ? console.warn("Google Charts loader.js should only be loaded once.") : google.v.w.H.Fm() };
    google.v.w.H.rn = function(b) {
        var c = b,
            d = b.match(/^testing-/);
        d && (c = c.replace(/^testing-/, ""));
        b = c;
        do {
            if (c === google.v.w.xg[c]) throw Error("Infinite loop in version mapping: " + c);
            var e = google.v.w.xg[c];
            e && (c = e)
        } while (e);
        d = (d ? "testing-" : "") + c;
        return { version: c == qa ? b : d, kn: d }
    };
    google.v.w.H.jn = function(b) {
        var c = google.v.w.Uj.On[google.v.w.H.fb].loader,
            d = google.v.w.H.rn(b);
        return google.v.w.Ha.load(c, { version: d.kn }).then(function() {
            var e = T.Jb("google.charts.loader.VersionSpecific.load") || T.Jb("google.charts.loader.publicLoad") || T.Jb("google.charts.versionSpecific.load");
            if (!e) throw Error("Bad version: " + b);
            google.v.w.H.uj = function(f) {
                f = e(d.version, f);
                if (null == f || null == f.then) {
                    var g = T.Jb("google.charts.loader.publicSetOnLoadCallback") || T.Jb("google.charts.versionSpecific.setOnLoadCallback");
                    f = new Promise(function(k) { g(k) });
                    f.then = g
                }
                return f
            }
        })
    };
    google.v.w.H.fn = function(b, c) {
        c.domain = google.v.w.H.fb;
        if (!google.v.w.H.cf) {
            if (c.enableUrlSettings && window.URLSearchParams) try { b = (new URLSearchParams(top.location.search)).get("charts-version") || b } catch (d) { console.info("Failed to get charts-version from top URL", d) }
            google.v.w.H.cf = google.v.w.H.jn(b)
        }
        return google.v.w.H.Ac = google.v.w.H.cf.then(function() { return google.v.w.H.uj(c) })
    };
    google.v.w.H.lo = function(b) { if (!google.v.w.H.Ac) throw Error("Must call google.charts.load before google.charts.setOnLoadCallback"); return b ? google.v.w.H.Ac.then(b) : google.v.w.H.Ac };
    google.v.mc = function(b) { return google.v.load(Object.assign({}, b, { safeMode: !0 })) };
    T.Yb("google.charts.safeLoad", google.v.mc);
    google.v.load = function(b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d - 0] = arguments[d];
        d = 0;
        "visualization" === c[d] && d++;
        var e = "current";
        typeof c[d] === I && (e = c[d], d++);
        var f = {};
        T.Ba(c[d]) && (f = c[d]);
        return google.v.w.H.fn(e, f)
    };
    T.Yb("google.charts.load", google.v.load);
    google.v.dj = google.v.w.H.lo;
    T.Yb("google.charts.setOnLoadCallback", google.v.dj);
    google.v.w.H.pk = T.c.F.from("https://maps.googleapis.com/maps/api/js?jsapiRedirect=true&key=%{key}&v=%{version}&libraries=%{libraries}");
    google.v.w.H.qk = T.c.F.from("https://maps-api-ssl.google.com/maps?jsapiRedirect=true&file=googleapi&key=%{key}&v=%{version}&libraries=%{libraries}");
    google.v.w.H.gn = function(b, c, d) {
        console.warn("Loading Maps API with the jsapi loader is deprecated.");
        d = d || {};
        b = google.v.w.H.Dd(d.callback);
        google.v.w.Ha.load("2" === c ? google.v.w.H.qk : google.v.w.H.pk, { key: d.key || d.client || "", version: c || "", libraries: d.libraries || "" }).then(b)
    };
    google.v.w.H.cg = T.c.F.from("https://www.gstatic.com/inputtools/js/ita/inputtools_3.js");
    google.v.w.H.en = function(b, c, d) { T.Ba(d) && d.packages ? (T.isArray(d.packages) ? d.packages : [d.packages]).includes("inputtools") ? (console.warn("Loading Input Tools with the jsapi loader is deprecated.\nPlease load " + (google.v.w.H.cg + " directly.")), b = google.v.w.H.Dd(d.callback), google.v.w.Ha.load(google.v.w.H.cg, {}).then(b)) : console.error("Loading elements other than inputtools with the jsapi loader is unsupported.") : console.error("google.load of elements was invoked without specifying packages") };
    google.v.w.H.hk = T.c.F.from("https://ajax.googleapis.com/ajax/libs/%{module}/%{version}/%{file}");
    google.v.w.H.Gi = function(b, c, d) {
        var e = google.v.w.eg.vm[b];
        if (!e) throw Error('Module "' + b + '" is not supported.');
        var f = e.aliases;
        c = function(h) {
            var m;
            do {
                if (h === f[h]) throw Error("Infinite loop in version mapping for version " + h);
                (m = f[h]) && (h = m)
            } while (m);
            return h
        }(c);
        if (!e.versions[c]) throw Error("Unknown version, " + c + ", of " + b + ".");
        var g = google.v.w.H.hk,
            k = { module: b, version: c || "", file: e.versions[c].compressed };
        c = T.b.I.D(google.v.w.Ha.Sh({ format: g, Cg: k }));
        console.warn("Loading modules with the jsapi loader is deprecated.\nPlease load " +
            (b + " directly from " + c + "."));
        google.v.w.H.Ac = new Promise(function(h) {
            var m = google.v.w.H.Dd(d && d.callback);
            google.v.w.Ha.load(g, k).then(m).then(h)
        })
    };
    google.v.w.H.Dd = function(b) { return function() { if (typeof b === I && "" !== b) try { T.Jb(b)() } catch (c) { throw Error("Callback failed with: " + c); } } };
    google.v.w.H.Yh = function(b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d - 0] = arguments[d];
        switch (c[0]) {
            case "maps":
                google.v.w.H.gn.apply(google.v.w.H, S.dd(c));
                break;
            case "elements":
                google.v.w.H.en.apply(google.v.w.H, S.dd(c));
                break;
            case "visualization":
                google.v.load.apply(google.v, S.dd(c));
                break;
            default:
                google.v.w.H.Gi.apply(google.v.w.H, S.dd(c))
        }
    };
    google.v.w.H.Dn = function(b) { typeof b === I && (b = google.v.w.H.Dd(b), google.v.w.ia.Ci().then(b)) };
    google.v.w.H.Cn = function(b) {
        if (typeof b === I) try {
            if ("" !== b)
                for (var c = JSON.parse(b).modules, d = S.Ed(c), e = d.next(); !e.done; e = d.next()) {
                    var f = e.value;
                    google.v.w.H.Yh(f.name, f.version, f)
                }
        } catch (g) { throw Error("Autoload failed with: " + g); }
    };
    google.v.w.H.Vl = function() { T.Jb("google.load") || (T.Yb("google.load", google.v.w.H.Yh), T.Yb("google.setOnLoadCallback", google.v.dj)) };
    google.v.w.H.En();
}).call(this);
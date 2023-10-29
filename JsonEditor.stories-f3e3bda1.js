import { r as s, R as Se, c as xf, a as fo, d as wf, b as ua } from "./index-f4fe79b1.js";
import { c as Ia, g as qc } from "./_commonjsHelpers-c5d32002.js";
import { _ as Ef, c as et, a as $f, b as il, d as je } from "./assertThisInitialized-16f5f00e.js";
var Kc = { exports: {} }, vo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rf = s, Of = Symbol.for("react.element"), If = Symbol.for("react.fragment"), Mf = Object.prototype.hasOwnProperty, Pf = Rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Nf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xc(e, t, n) {
  var r, a = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    Mf.call(t, r) && !Nf.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: Of, type: e, key: o, ref: i, props: a, _owner: Pf.current };
}
vo.Fragment = If;
vo.jsx = Xc;
vo.jsxs = Xc;
Kc.exports = vo;
var re = Kc.exports;
var Ka = { exports: {} };
Ka.exports;
(function(e, t) {
  var n = 200, r = "__lodash_hash_undefined__", a = 9007199254740991, o = "[object Arguments]", i = "[object Array]", l = "[object Boolean]", c = "[object Date]", u = "[object Error]", d = "[object Function]", f = "[object GeneratorFunction]", v = "[object Map]", m = "[object Number]", h = "[object Object]", b = "[object Promise]", p = "[object RegExp]", g = "[object Set]", C = "[object String]", S = "[object Symbol]", x = "[object WeakMap]", R = "[object ArrayBuffer]", E = "[object DataView]", y = "[object Float32Array]", $ = "[object Float64Array]", I = "[object Int8Array]", T = "[object Int16Array]", N = "[object Int32Array]", F = "[object Uint8Array]", A = "[object Uint8ClampedArray]", D = "[object Uint16Array]", z = "[object Uint32Array]", M = /[\\^$.*+?()[\]{}|]/g, O = /\w*$/, P = /^\[object .+?Constructor\]$/, L = /^(?:0|[1-9]\d*)$/, j = {};
  j[o] = j[i] = j[R] = j[E] = j[l] = j[c] = j[y] = j[$] = j[I] = j[T] = j[N] = j[v] = j[m] = j[h] = j[p] = j[g] = j[C] = j[S] = j[F] = j[A] = j[D] = j[z] = !0, j[u] = j[d] = j[x] = !1;
  var V = typeof Ia == "object" && Ia && Ia.Object === Object && Ia, k = typeof self == "object" && self && self.Object === Object && self, U = V || k || Function("return this")(), W = t && !t.nodeType && t, le = W && !0 && e && !e.nodeType && e, te = le && le.exports === W;
  function X(w, H) {
    return w.set(H[0], H[1]), w;
  }
  function K(w, H) {
    return w.add(H), w;
  }
  function ee(w, H) {
    for (var q = -1, Ee = w ? w.length : 0; ++q < Ee && H(w[q], q, w) !== !1; )
      ;
    return w;
  }
  function ce(w, H) {
    for (var q = -1, Ee = H.length, Tt = w.length; ++q < Ee; )
      w[Tt + q] = H[q];
    return w;
  }
  function ge(w, H, q, Ee) {
    var Tt = -1, kt = w ? w.length : 0;
    for (Ee && kt && (q = w[++Tt]); ++Tt < kt; )
      q = H(q, w[Tt], Tt, w);
    return q;
  }
  function ve(w, H) {
    for (var q = -1, Ee = Array(w); ++q < w; )
      Ee[q] = H(q);
    return Ee;
  }
  function ae(w, H) {
    return w == null ? void 0 : w[H];
  }
  function Ce(w) {
    var H = !1;
    if (w != null && typeof w.toString != "function")
      try {
        H = !!(w + "");
      } catch {
      }
    return H;
  }
  function Oe(w) {
    var H = -1, q = Array(w.size);
    return w.forEach(function(Ee, Tt) {
      q[++H] = [Tt, Ee];
    }), q;
  }
  function Ne(w, H) {
    return function(q) {
      return w(H(q));
    };
  }
  function Ie(w) {
    var H = -1, q = Array(w.size);
    return w.forEach(function(Ee) {
      q[++H] = Ee;
    }), q;
  }
  var oe = Array.prototype, pe = Function.prototype, se = Object.prototype, ie = U["__core-js_shared__"], _e = function() {
    var w = /[^.]+$/.exec(ie && ie.keys && ie.keys.IE_PROTO || "");
    return w ? "Symbol(src)_1." + w : "";
  }(), He = pe.toString, Te = se.hasOwnProperty, ue = se.toString, de = RegExp(
    "^" + He.call(Te).replace(M, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Ae = te ? U.Buffer : void 0, Ke = U.Symbol, Be = U.Uint8Array, tt = Ne(Object.getPrototypeOf, Object), De = Object.create, _t = se.propertyIsEnumerable, lt = oe.splice, ot = Object.getOwnPropertySymbols, Xe = Ae ? Ae.isBuffer : void 0, ht = Ne(Object.keys, Object), at = Mt(U, "DataView"), Ye = Mt(U, "Map"), qe = Mt(U, "Promise"), fe = Mt(U, "Set"), be = Mt(U, "WeakMap"), Me = Mt(Object, "create"), J = En(at), me = En(Ye), ke = En(qe), Ue = En(fe), Re = En(be), Q = Ke ? Ke.prototype : void 0, Y = Q ? Q.valueOf : void 0;
  function ne(w) {
    var H = -1, q = w ? w.length : 0;
    for (this.clear(); ++H < q; ) {
      var Ee = w[H];
      this.set(Ee[0], Ee[1]);
    }
  }
  function $e() {
    this.__data__ = Me ? Me(null) : {};
  }
  function Le(w) {
    return this.has(w) && delete this.__data__[w];
  }
  function Qe(w) {
    var H = this.__data__;
    if (Me) {
      var q = H[w];
      return q === r ? void 0 : q;
    }
    return Te.call(H, w) ? H[w] : void 0;
  }
  function nt(w) {
    var H = this.__data__;
    return Me ? H[w] !== void 0 : Te.call(H, w);
  }
  function Et(w, H) {
    var q = this.__data__;
    return q[w] = Me && H === void 0 ? r : H, this;
  }
  ne.prototype.clear = $e, ne.prototype.delete = Le, ne.prototype.get = Qe, ne.prototype.has = nt, ne.prototype.set = Et;
  function ct(w) {
    var H = -1, q = w ? w.length : 0;
    for (this.clear(); ++H < q; ) {
      var Ee = w[H];
      this.set(Ee[0], Ee[1]);
    }
  }
  function rt() {
    this.__data__ = [];
  }
  function $t(w) {
    var H = this.__data__, q = un(H, w);
    if (q < 0)
      return !1;
    var Ee = H.length - 1;
    return q == Ee ? H.pop() : lt.call(H, q, 1), !0;
  }
  function Vt(w) {
    var H = this.__data__, q = un(H, w);
    return q < 0 ? void 0 : H[q][1];
  }
  function Ot(w) {
    return un(this.__data__, w) > -1;
  }
  function Qt(w, H) {
    var q = this.__data__, Ee = un(q, w);
    return Ee < 0 ? q.push([w, H]) : q[Ee][1] = H, this;
  }
  ct.prototype.clear = rt, ct.prototype.delete = $t, ct.prototype.get = Vt, ct.prototype.has = Ot, ct.prototype.set = Qt;
  function we(w) {
    var H = -1, q = w ? w.length : 0;
    for (this.clear(); ++H < q; ) {
      var Ee = w[H];
      this.set(Ee[0], Ee[1]);
    }
  }
  function ye() {
    this.__data__ = {
      hash: new ne(),
      map: new (Ye || ct)(),
      string: new ne()
    };
  }
  function Ge(w) {
    return Gn(this, w).delete(w);
  }
  function Ze(w) {
    return Gn(this, w).get(w);
  }
  function mt(w) {
    return Gn(this, w).has(w);
  }
  function Nn(w, H) {
    return Gn(this, w).set(w, H), this;
  }
  we.prototype.clear = ye, we.prototype.delete = Ge, we.prototype.get = Ze, we.prototype.has = mt, we.prototype.set = Nn;
  function Nt(w) {
    this.__data__ = new ct(w);
  }
  function Tn() {
    this.__data__ = new ct();
  }
  function _n(w) {
    return this.__data__.delete(w);
  }
  function qt(w) {
    return this.__data__.get(w);
  }
  function Jt(w) {
    return this.__data__.has(w);
  }
  function tr(w, H) {
    var q = this.__data__;
    if (q instanceof ct) {
      var Ee = q.__data__;
      if (!Ye || Ee.length < n - 1)
        return Ee.push([w, H]), this;
      q = this.__data__ = new we(Ee);
    }
    return q.set(w, H), this;
  }
  Nt.prototype.clear = Tn, Nt.prototype.delete = _n, Nt.prototype.get = qt, Nt.prototype.has = Jt, Nt.prototype.set = tr;
  function cn(w, H) {
    var q = dt(w) || Ve(w) ? ve(w.length, String) : [], Ee = q.length, Tt = !!Ee;
    for (var kt in w)
      (H || Te.call(w, kt)) && !(Tt && (kt == "length" || qn(kt, Ee))) && q.push(kt);
    return q;
  }
  function Zt(w, H, q) {
    var Ee = w[H];
    (!(Te.call(w, H) && xe(Ee, q)) || q === void 0 && !(H in w)) && (w[H] = q);
  }
  function un(w, H) {
    for (var q = w.length; q--; )
      if (xe(w[q][0], H))
        return q;
    return -1;
  }
  function dn(w, H) {
    return w && en(H, Go(H), w);
  }
  function Kt(w, H, q, Ee, Tt, kt, hn) {
    var Yt;
    if (Ee && (Yt = kt ? Ee(w, Tt, kt, hn) : Ee(w)), Yt !== void 0)
      return Yt;
    if (!zn(w))
      return w;
    var nl = dt(w);
    if (nl) {
      if (Yt = Dn(w), !H)
        return Xt(w, Yt);
    } else {
      var Er = gn(w), rl = Er == d || Er == f;
      if (xr(w))
        return ze(w, H);
      if (Er == h || Er == o || rl && !kt) {
        if (Ce(w))
          return kt ? w : {};
        if (Yt = Fn(rl ? {} : w), !H)
          return Bt(w, dn(Yt, w));
      } else {
        if (!j[Er])
          return kt ? w : {};
        Yt = nr(w, Er, Kt, H);
      }
    }
    hn || (hn = new Nt());
    var al = hn.get(w);
    if (al)
      return al;
    if (hn.set(w, Yt), !nl)
      var ol = q ? Un(w) : Go(w);
    return ee(ol || w, function(qo, Oa) {
      ol && (Oa = qo, qo = w[Oa]), Zt(Yt, Oa, Kt(qo, H, q, Ee, Oa, w, hn));
    }), Yt;
  }
  function fn(w) {
    return zn(w) ? De(w) : {};
  }
  function xn(w, H, q) {
    var Ee = H(w);
    return dt(w) ? Ee : ce(Ee, q(w));
  }
  function An(w) {
    return ue.call(w);
  }
  function wn(w) {
    if (!zn(w) || Yr(w))
      return !1;
    var H = wr(w) || Ce(w) ? de : P;
    return H.test(En(w));
  }
  function Ht(w) {
    if (!Cr(w))
      return ht(w);
    var H = [];
    for (var q in Object(w))
      Te.call(w, q) && q != "constructor" && H.push(q);
    return H;
  }
  function ze(w, H) {
    if (H)
      return w.slice();
    var q = new w.constructor(w.length);
    return w.copy(q), q;
  }
  function Fe(w) {
    var H = new w.constructor(w.byteLength);
    return new Be(H).set(new Be(w)), H;
  }
  function yt(w, H) {
    var q = H ? Fe(w.buffer) : w.buffer;
    return new w.constructor(q, w.byteOffset, w.byteLength);
  }
  function xt(w, H, q) {
    var Ee = H ? q(Oe(w), !0) : Oe(w);
    return ge(Ee, X, new w.constructor());
  }
  function ut(w) {
    var H = new w.constructor(w.source, O.exec(w));
    return H.lastIndex = w.lastIndex, H;
  }
  function It(w, H, q) {
    var Ee = H ? q(Ie(w), !0) : Ie(w);
    return ge(Ee, K, new w.constructor());
  }
  function At(w) {
    return Y ? Object(Y.call(w)) : {};
  }
  function vn(w, H) {
    var q = H ? Fe(w.buffer) : w.buffer;
    return new w.constructor(q, w.byteOffset, w.length);
  }
  function Xt(w, H) {
    var q = -1, Ee = w.length;
    for (H || (H = Array(Ee)); ++q < Ee; )
      H[q] = w[q];
    return H;
  }
  function en(w, H, q, Ee) {
    q || (q = {});
    for (var Tt = -1, kt = H.length; ++Tt < kt; ) {
      var hn = H[Tt], Yt = Ee ? Ee(q[hn], w[hn], hn, q, w) : void 0;
      Zt(q, hn, Yt === void 0 ? w[hn] : Yt);
    }
    return q;
  }
  function Bt(w, H) {
    return en(w, mn(w), H);
  }
  function Un(w) {
    return xn(w, Go, mn);
  }
  function Gn(w, H) {
    var q = w.__data__;
    return Sr(H) ? q[typeof H == "string" ? "string" : "hash"] : q.map;
  }
  function Mt(w, H) {
    var q = ae(w, H);
    return wn(q) ? q : void 0;
  }
  var mn = ot ? Ne(ot, Object) : Sf, gn = An;
  (at && gn(new at(new ArrayBuffer(1))) != E || Ye && gn(new Ye()) != v || qe && gn(qe.resolve()) != b || fe && gn(new fe()) != g || be && gn(new be()) != x) && (gn = function(w) {
    var H = ue.call(w), q = H == h ? w.constructor : void 0, Ee = q ? En(q) : void 0;
    if (Ee)
      switch (Ee) {
        case J:
          return E;
        case me:
          return v;
        case ke:
          return b;
        case Ue:
          return g;
        case Re:
          return x;
      }
    return H;
  });
  function Dn(w) {
    var H = w.length, q = w.constructor(H);
    return H && typeof w[0] == "string" && Te.call(w, "index") && (q.index = w.index, q.input = w.input), q;
  }
  function Fn(w) {
    return typeof w.constructor == "function" && !Cr(w) ? fn(tt(w)) : {};
  }
  function nr(w, H, q, Ee) {
    var Tt = w.constructor;
    switch (H) {
      case R:
        return Fe(w);
      case l:
      case c:
        return new Tt(+w);
      case E:
        return yt(w, Ee);
      case y:
      case $:
      case I:
      case T:
      case N:
      case F:
      case A:
      case D:
      case z:
        return vn(w, Ee);
      case v:
        return xt(w, Ee, q);
      case m:
      case C:
        return new Tt(w);
      case p:
        return ut(w);
      case g:
        return It(w, Ee, q);
      case S:
        return At(w);
    }
  }
  function qn(w, H) {
    return H = H ?? a, !!H && (typeof w == "number" || L.test(w)) && w > -1 && w % 1 == 0 && w < H;
  }
  function Sr(w) {
    var H = typeof w;
    return H == "string" || H == "number" || H == "symbol" || H == "boolean" ? w !== "__proto__" : w === null;
  }
  function Yr(w) {
    return !!_e && _e in w;
  }
  function Cr(w) {
    var H = w && w.constructor, q = typeof H == "function" && H.prototype || se;
    return w === q;
  }
  function En(w) {
    if (w != null) {
      try {
        return He.call(w);
      } catch {
      }
      try {
        return w + "";
      } catch {
      }
    }
    return "";
  }
  function Qr(w) {
    return Kt(w, !0, !0);
  }
  function xe(w, H) {
    return w === H || w !== w && H !== H;
  }
  function Ve(w) {
    return pt(w) && Te.call(w, "callee") && (!_t.call(w, "callee") || ue.call(w) == o);
  }
  var dt = Array.isArray;
  function St(w) {
    return w != null && Ra(w.length) && !wr(w);
  }
  function pt(w) {
    return yf(w) && St(w);
  }
  var xr = Xe || Cf;
  function wr(w) {
    var H = zn(w) ? ue.call(w) : "";
    return H == d || H == f;
  }
  function Ra(w) {
    return typeof w == "number" && w > -1 && w % 1 == 0 && w <= a;
  }
  function zn(w) {
    var H = typeof w;
    return !!w && (H == "object" || H == "function");
  }
  function yf(w) {
    return !!w && typeof w == "object";
  }
  function Go(w) {
    return St(w) ? cn(w) : Ht(w);
  }
  function Sf() {
    return [];
  }
  function Cf() {
    return !1;
  }
  e.exports = Qr;
})(Ka, Ka.exports);
var Tf = Ka.exports;
const xs = /* @__PURE__ */ qc(Tf);
var Yc = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], a = 0; a < arguments.length; a++) {
        var o = arguments[a];
        if (o) {
          var i = typeof o;
          if (i === "string" || i === "number")
            r.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var l = n.apply(null, o);
              l && r.push(l);
            }
          } else if (i === "object") {
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) {
              r.push(o.toString());
              continue;
            }
            for (var c in o)
              t.call(o, c) && o[c] && r.push(c);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Yc);
var _f = Yc.exports;
const he = /* @__PURE__ */ qc(_f);
var Qc = { exports: {} }, it = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ws = Symbol.for("react.element"), Es = Symbol.for("react.portal"), mo = Symbol.for("react.fragment"), go = Symbol.for("react.strict_mode"), ho = Symbol.for("react.profiler"), po = Symbol.for("react.provider"), bo = Symbol.for("react.context"), Af = Symbol.for("react.server_context"), yo = Symbol.for("react.forward_ref"), So = Symbol.for("react.suspense"), Co = Symbol.for("react.suspense_list"), xo = Symbol.for("react.memo"), wo = Symbol.for("react.lazy"), Ff = Symbol.for("react.offscreen"), Jc;
Jc = Symbol.for("react.module.reference");
function Sn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ws:
        switch (e = e.type, e) {
          case mo:
          case ho:
          case go:
          case So:
          case Co:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Af:
              case bo:
              case yo:
              case wo:
              case xo:
              case po:
                return e;
              default:
                return t;
            }
        }
      case Es:
        return t;
    }
  }
}
it.ContextConsumer = bo;
it.ContextProvider = po;
it.Element = ws;
it.ForwardRef = yo;
it.Fragment = mo;
it.Lazy = wo;
it.Memo = xo;
it.Portal = Es;
it.Profiler = ho;
it.StrictMode = go;
it.Suspense = So;
it.SuspenseList = Co;
it.isAsyncMode = function() {
  return !1;
};
it.isConcurrentMode = function() {
  return !1;
};
it.isContextConsumer = function(e) {
  return Sn(e) === bo;
};
it.isContextProvider = function(e) {
  return Sn(e) === po;
};
it.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ws;
};
it.isForwardRef = function(e) {
  return Sn(e) === yo;
};
it.isFragment = function(e) {
  return Sn(e) === mo;
};
it.isLazy = function(e) {
  return Sn(e) === wo;
};
it.isMemo = function(e) {
  return Sn(e) === xo;
};
it.isPortal = function(e) {
  return Sn(e) === Es;
};
it.isProfiler = function(e) {
  return Sn(e) === ho;
};
it.isStrictMode = function(e) {
  return Sn(e) === go;
};
it.isSuspense = function(e) {
  return Sn(e) === So;
};
it.isSuspenseList = function(e) {
  return Sn(e) === Co;
};
it.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === mo || e === ho || e === go || e === So || e === Co || e === Ff || typeof e == "object" && e !== null && (e.$$typeof === wo || e.$$typeof === xo || e.$$typeof === po || e.$$typeof === bo || e.$$typeof === yo || e.$$typeof === Jc || e.getModuleId !== void 0);
};
it.typeOf = Sn;
Qc.exports = it;
var Zc = Qc.exports;
function Jn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [];
  return Se.Children.forEach(e, function(r) {
    r == null && !t.keepEmpty || (Array.isArray(r) ? n = n.concat(Jn(r)) : Zc.isFragment(r) && r.props ? n = n.concat(Jn(r.props.children, t)) : n.push(r));
  }), n;
}
var Ei = {}, jf = function(t) {
};
function Lf(e, t) {
}
function Df(e, t) {
}
function zf() {
  Ei = {};
}
function eu(e, t, n) {
  !t && !Ei[n] && (e(!1, n), Ei[n] = !0);
}
function Wt(e, t) {
  eu(Lf, e, t);
}
function Vf(e, t) {
  eu(Df, e, t);
}
Wt.preMessage = jf;
Wt.resetWarned = zf;
Wt.noteOnce = Vf;
function We(e) {
  "@babel/helpers - typeof";
  return We = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, We(e);
}
function Hf(e, t) {
  if (We(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (We(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function tu(e) {
  var t = Hf(e, "string");
  return We(t) === "symbol" ? t : String(t);
}
function _(e, t, n) {
  return t = tu(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function sl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sl(Object(n), !0).forEach(function(r) {
      _(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sl(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Xa(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function ra(e) {
  return Xa(e) ? e : e instanceof Se.Component ? xf.findDOMNode(e) : null;
}
function Eo(e, t, n) {
  var r = s.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
function $s(e, t) {
  typeof e == "function" ? e(t) : We(e) === "object" && e && "current" in e && (e.current = t);
}
function jn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t.filter(function(a) {
    return a;
  });
  return r.length <= 1 ? r[0] : function(a) {
    t.forEach(function(o) {
      $s(o, a);
    });
  };
}
function $o() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Eo(function() {
    return jn.apply(void 0, t);
  }, t, function(r, a) {
    return r.length !== a.length || r.every(function(o, i) {
      return o !== a[i];
    });
  });
}
function pa(e) {
  var t, n, r = Zc.isMemo(e) ? e.type.type : e.type;
  return !(typeof r == "function" && !((t = r.prototype) !== null && t !== void 0 && t.render) || typeof e == "function" && !((n = e.prototype) !== null && n !== void 0 && n.render));
}
var $i = /* @__PURE__ */ s.createContext(null);
function Bf(e) {
  var t = e.children, n = e.onBatchResize, r = s.useRef(0), a = s.useRef([]), o = s.useContext($i), i = s.useCallback(function(l, c, u) {
    r.current += 1;
    var d = r.current;
    a.current.push({
      size: l,
      element: c,
      data: u
    }), Promise.resolve().then(function() {
      d === r.current && (n == null || n(a.current), a.current = []);
    }), o == null || o(l, c, u);
  }, [n, o]);
  return /* @__PURE__ */ s.createElement($i.Provider, {
    value: i
  }, t);
}
var nu = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var r = -1;
    return t.some(function(a, o) {
      return a[0] === n ? (r = o, !0) : !1;
    }), r;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var r = e(this.__entries__, n), a = this.__entries__[r];
        return a && a[1];
      }, t.prototype.set = function(n, r) {
        var a = e(this.__entries__, n);
        ~a ? this.__entries__[a][1] = r : this.__entries__.push([n, r]);
      }, t.prototype.delete = function(n) {
        var r = this.__entries__, a = e(r, n);
        ~a && r.splice(a, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var a = 0, o = this.__entries__; a < o.length; a++) {
          var i = o[a];
          n.call(r, i[1], i[0]);
        }
      }, t;
    }()
  );
}(), Ri = typeof window < "u" && typeof document < "u" && window.document === document, Ya = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), kf = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Ya) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Wf = 2;
function Uf(e, t) {
  var n = !1, r = !1, a = 0;
  function o() {
    n && (n = !1, e()), r && l();
  }
  function i() {
    kf(o);
  }
  function l() {
    var c = Date.now();
    if (n) {
      if (c - a < Wf)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(i, t);
    a = c;
  }
  return l;
}
var Gf = 20, qf = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Kf = typeof MutationObserver < "u", Xf = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Uf(this.refresh.bind(this), Gf);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, r = n.indexOf(t);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !Ri || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Kf ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Ri || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, r = n === void 0 ? "" : n, a = qf.some(function(o) {
        return !!~r.indexOf(o);
      });
      a && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), ru = function(e, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var a = r[n];
    Object.defineProperty(e, a, {
      value: t[a],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, zr = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Ya;
}, au = Ro(0, 0, 0, 0);
function Qa(e) {
  return parseFloat(e) || 0;
}
function ll(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, a) {
    var o = e["border-" + a + "-width"];
    return r + Qa(o);
  }, 0);
}
function Yf(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, a = t; r < a.length; r++) {
    var o = a[r], i = e["padding-" + o];
    n[o] = Qa(i);
  }
  return n;
}
function Qf(e) {
  var t = e.getBBox();
  return Ro(0, 0, t.width, t.height);
}
function Jf(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return au;
  var r = zr(e).getComputedStyle(e), a = Yf(r), o = a.left + a.right, i = a.top + a.bottom, l = Qa(r.width), c = Qa(r.height);
  if (r.boxSizing === "border-box" && (Math.round(l + o) !== t && (l -= ll(r, "left", "right") + o), Math.round(c + i) !== n && (c -= ll(r, "top", "bottom") + i)), !ev(e)) {
    var u = Math.round(l + o) - t, d = Math.round(c + i) - n;
    Math.abs(u) !== 1 && (l -= u), Math.abs(d) !== 1 && (c -= d);
  }
  return Ro(a.left, a.top, l, c);
}
var Zf = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof zr(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof zr(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function ev(e) {
  return e === zr(e).document.documentElement;
}
function tv(e) {
  return Ri ? Zf(e) ? Qf(e) : Jf(e) : au;
}
function nv(e) {
  var t = e.x, n = e.y, r = e.width, a = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, i = Object.create(o.prototype);
  return ru(i, {
    x: t,
    y: n,
    width: r,
    height: a,
    top: n,
    right: t + r,
    bottom: a + n,
    left: t
  }), i;
}
function Ro(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var rv = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ro(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = tv(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), av = (
  /** @class */
  function() {
    function e(t, n) {
      var r = nv(n);
      ru(this, { target: t, contentRect: r });
    }
    return e;
  }()
), ov = (
  /** @class */
  function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new nu(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof zr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new rv(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof zr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
          return new av(r.target, r.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), ou = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new nu(), iu = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = Xf.getInstance(), r = new ov(t, n, this);
      ou.set(this, r);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  iu.prototype[e] = function() {
    var t;
    return (t = ou.get(this))[e].apply(t, arguments);
  };
});
var iv = function() {
  return typeof Ya.ResizeObserver < "u" ? Ya.ResizeObserver : iu;
}(), Xn = /* @__PURE__ */ new Map();
function sv(e) {
  e.forEach(function(t) {
    var n, r = t.target;
    (n = Xn.get(r)) === null || n === void 0 || n.forEach(function(a) {
      return a(r);
    });
  });
}
var su = new iv(sv);
function lv(e, t) {
  Xn.has(e) || (Xn.set(e, /* @__PURE__ */ new Set()), su.observe(e)), Xn.get(e).add(t);
}
function cv(e, t) {
  Xn.has(e) && (Xn.get(e).delete(t), Xn.get(e).size || (su.unobserve(e), Xn.delete(e)));
}
function sn(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, tu(r.key), r);
  }
}
function ln(e, t, n) {
  return t && cl(e.prototype, t), n && cl(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Oo(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Ef(e, t);
}
function uv(e, t) {
  if (t && (We(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return et(e);
}
function Io(e) {
  var t = $f();
  return function() {
    var r = il(e), a;
    if (t) {
      var o = il(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return uv(this, a);
  };
}
var dv = /* @__PURE__ */ function(e) {
  Oo(n, e);
  var t = Io(n);
  function n() {
    return sn(this, n), t.apply(this, arguments);
  }
  return ln(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(s.Component);
function fv(e, t) {
  var n = e.children, r = e.disabled, a = s.useRef(null), o = s.useRef(null), i = s.useContext($i), l = typeof n == "function", c = l ? n(a) : n, u = s.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), d = !l && /* @__PURE__ */ s.isValidElement(c) && pa(c), f = d ? c.ref : null, v = $o(f, a), m = function() {
    var g;
    return ra(a.current) || // Support `nativeElement` format
    (a.current && We(a.current) === "object" ? ra((g = a.current) === null || g === void 0 ? void 0 : g.nativeElement) : null) || ra(o.current);
  };
  s.useImperativeHandle(t, function() {
    return m();
  });
  var h = s.useRef(e);
  h.current = e;
  var b = s.useCallback(function(p) {
    var g = h.current, C = g.onResize, S = g.data, x = p.getBoundingClientRect(), R = x.width, E = x.height, y = p.offsetWidth, $ = p.offsetHeight, I = Math.floor(R), T = Math.floor(E);
    if (u.current.width !== I || u.current.height !== T || u.current.offsetWidth !== y || u.current.offsetHeight !== $) {
      var N = {
        width: I,
        height: T,
        offsetWidth: y,
        offsetHeight: $
      };
      u.current = N;
      var F = y === Math.round(R) ? R : y, A = $ === Math.round(E) ? E : $, D = B(B({}, N), {}, {
        offsetWidth: F,
        offsetHeight: A
      });
      i == null || i(D, p, S), C && Promise.resolve().then(function() {
        C(D, p);
      });
    }
  }, []);
  return s.useEffect(function() {
    var p = m();
    return p && !r && lv(p, b), function() {
      return cv(p, b);
    };
  }, [a.current, r]), /* @__PURE__ */ s.createElement(dv, {
    ref: o
  }, d ? /* @__PURE__ */ s.cloneElement(c, {
    ref: v
  }) : c);
}
var vv = /* @__PURE__ */ s.forwardRef(fv), mv = "rc-observer-key";
function gv(e, t) {
  var n = e.children, r = typeof n == "function" ? [n] : Jn(n);
  return r.map(function(a, o) {
    var i = (a == null ? void 0 : a.key) || "".concat(mv, "-").concat(o);
    return /* @__PURE__ */ s.createElement(vv, je({}, e, {
      key: i,
      ref: o === 0 ? t : void 0
    }), a);
  });
}
var er = /* @__PURE__ */ s.forwardRef(gv);
er.Collection = Bf;
function Gr(e, t) {
  var n = B({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
function Oi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function hv(e) {
  if (Array.isArray(e))
    return Oi(e);
}
function lu(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Rs(e, t) {
  if (e) {
    if (typeof e == "string")
      return Oi(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Oi(e, t);
  }
}
function pv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pe(e) {
  return hv(e) || lu(e) || Rs(e) || pv();
}
var cu = function(t) {
  return +setTimeout(t, 16);
}, uu = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (cu = function(t) {
  return window.requestAnimationFrame(t);
}, uu = function(t) {
  return window.cancelAnimationFrame(t);
});
var ul = 0, Os = /* @__PURE__ */ new Map();
function du(e) {
  Os.delete(e);
}
var ft = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  ul += 1;
  var r = ul;
  function a(o) {
    if (o === 0)
      du(r), t();
    else {
      var i = cu(function() {
        a(o - 1);
      });
      Os.set(r, i);
    }
  }
  return a(n), r;
};
ft.cancel = function(e) {
  var t = Os.get(e);
  return du(t), uu(t);
};
function Is(e) {
  for (var t = 0, n, r = 0, a = e.length; a >= 4; ++r, a -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function bv(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function vt(e, t) {
  if (e == null)
    return {};
  var n = bv(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function fu(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function a(o, i) {
    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(o);
    if (Wt(!c, "Warning: There may be circular references"), c)
      return !1;
    if (o === i)
      return !0;
    if (n && l > 1)
      return !1;
    r.add(o);
    var u = l + 1;
    if (Array.isArray(o)) {
      if (!Array.isArray(i) || o.length !== i.length)
        return !1;
      for (var d = 0; d < o.length; d++)
        if (!a(o[d], i[d], u))
          return !1;
      return !0;
    }
    if (o && i && We(o) === "object" && We(i) === "object") {
      var f = Object.keys(o);
      return f.length !== Object.keys(i).length ? !1 : f.every(function(v) {
        return a(o[v], i[v], u);
      });
    }
    return !1;
  }
  return a(e, t);
}
var dl = "%", yv = /* @__PURE__ */ function() {
  function e(t) {
    sn(this, e), _(this, "instanceId", void 0), _(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return ln(e, [{
    key: "get",
    value: function(n) {
      return this.cache.get(n.join(dl)) || null;
    }
  }, {
    key: "update",
    value: function(n, r) {
      var a = n.join(dl), o = this.cache.get(a), i = r(o);
      i === null ? this.cache.delete(a) : this.cache.set(a, i);
    }
  }]), e;
}(), Ii = "data-token-hash", cr = "data-css-hash", _r = "__cssinjs_instance__";
function Sv() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(cr, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(a) {
      a[_r] = a[_r] || e, a[_r] === e && document.head.insertBefore(a, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(cr, "]"))).forEach(function(a) {
      var o = a.getAttribute(cr);
      if (r[o]) {
        if (a[_r] === e) {
          var i;
          (i = a.parentNode) === null || i === void 0 || i.removeChild(a);
        }
      } else
        r[o] = !0;
    });
  }
  return new yv(e);
}
var Cv = /* @__PURE__ */ s.createContext({
  hashPriority: "low",
  cache: Sv(),
  defaultCache: !0
});
const Ms = Cv;
function Ut() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function xv(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var n = t; n; ) {
    if (n === e)
      return !0;
    n = n.parentNode;
  }
  return !1;
}
var fl = "data-rc-order", vl = "data-rc-priority", wv = "rc-util-key", Mi = /* @__PURE__ */ new Map();
function vu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : wv;
}
function Mo(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Ev(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function mu(e) {
  return Array.from((Mi.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function gu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Ut())
    return null;
  var n = t.csp, r = t.prepend, a = t.priority, o = a === void 0 ? 0 : a, i = Ev(r), l = i === "prependQueue", c = document.createElement("style");
  c.setAttribute(fl, i), l && o && c.setAttribute(vl, "".concat(o)), n != null && n.nonce && (c.nonce = n == null ? void 0 : n.nonce), c.innerHTML = e;
  var u = Mo(t), d = u.firstChild;
  if (r) {
    if (l) {
      var f = mu(u).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(fl)))
          return !1;
        var m = Number(v.getAttribute(vl) || 0);
        return o >= m;
      });
      if (f.length)
        return u.insertBefore(c, f[f.length - 1].nextSibling), c;
    }
    u.insertBefore(c, d);
  } else
    u.appendChild(c);
  return c;
}
function hu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Mo(t);
  return mu(n).find(function(r) {
    return r.getAttribute(vu(t)) === e;
  });
}
function Ja(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = hu(e, t);
  if (n) {
    var r = Mo(t);
    r.removeChild(n);
  }
}
function $v(e, t) {
  var n = Mi.get(e);
  if (!n || !xv(document, n)) {
    var r = gu("", t), a = r.parentNode;
    Mi.set(e, a), e.removeChild(r);
  }
}
function Vr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Mo(n);
  $v(r, n);
  var a = hu(t, n);
  if (a) {
    var o, i;
    if ((o = n.csp) !== null && o !== void 0 && o.nonce && a.nonce !== ((i = n.csp) === null || i === void 0 ? void 0 : i.nonce)) {
      var l;
      a.nonce = (l = n.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return a.innerHTML !== e && (a.innerHTML = e), a;
  }
  var c = gu(e, n);
  return c.setAttribute(vu(n), t), c;
}
function pu(e) {
  if (Array.isArray(e))
    return e;
}
function Rv(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, o, i, l = [], c = !0, u = !1;
    try {
      if (o = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n)
          return;
        c = !1;
      } else
        for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); c = !0)
          ;
    } catch (d) {
      u = !0, a = d;
    } finally {
      try {
        if (!c && n.return != null && (i = n.return(), Object(i) !== i))
          return;
      } finally {
        if (u)
          throw a;
      }
    }
    return l;
  }
}
function bu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function G(e, t) {
  return pu(e) || Rv(e, t) || Rs(e, t) || bu();
}
function Ov(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var Ps = /* @__PURE__ */ function() {
  function e() {
    sn(this, e), _(this, "cache", void 0), _(this, "keys", void 0), _(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return ln(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(n) {
      var r, a, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = {
        map: this.cache
      };
      return n.forEach(function(l) {
        if (!i)
          i = void 0;
        else {
          var c, u;
          i = (c = i) === null || c === void 0 || (u = c.map) === null || u === void 0 ? void 0 : u.get(l);
        }
      }), (r = i) !== null && r !== void 0 && r.value && o && (i.value[1] = this.cacheCallTimes++), (a = i) === null || a === void 0 ? void 0 : a.value;
    }
  }, {
    key: "get",
    value: function(n) {
      var r;
      return (r = this.internalGet(n, !0)) === null || r === void 0 ? void 0 : r[0];
    }
  }, {
    key: "has",
    value: function(n) {
      return !!this.internalGet(n);
    }
  }, {
    key: "set",
    value: function(n, r) {
      var a = this;
      if (!this.has(n)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var o = this.keys.reduce(function(u, d) {
            var f = G(u, 2), v = f[1];
            return a.internalGet(d)[1] < v ? [d, a.internalGet(d)[1]] : u;
          }, [this.keys[0], this.cacheCallTimes]), i = G(o, 1), l = i[0];
          this.delete(l);
        }
        this.keys.push(n);
      }
      var c = this.cache;
      n.forEach(function(u, d) {
        if (d === n.length - 1)
          c.set(u, {
            value: [r, a.cacheCallTimes++]
          });
        else {
          var f = c.get(u);
          f ? f.map || (f.map = /* @__PURE__ */ new Map()) : c.set(u, {
            map: /* @__PURE__ */ new Map()
          }), c = c.get(u).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(n, r) {
      var a = n.get(r[0]);
      if (r.length === 1) {
        var o;
        return a.map ? n.set(r[0], {
          map: a.map
        }) : n.delete(r[0]), (o = a.value) === null || o === void 0 ? void 0 : o[0];
      }
      var i = this.deleteByPath(a.map, r.slice(1));
      return (!a.map || a.map.size === 0) && !a.value && n.delete(r[0]), i;
    }
  }, {
    key: "delete",
    value: function(n) {
      if (this.has(n))
        return this.keys = this.keys.filter(function(r) {
          return !Ov(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
}();
_(Ps, "MAX_CACHE_SIZE", 20);
_(Ps, "MAX_CACHE_OFFSET", 5);
var ml = 0, yu = /* @__PURE__ */ function() {
  function e(t) {
    sn(this, e), _(this, "derivatives", void 0), _(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = ml, t.length === 0 && (t.length > 0, void 0), ml += 1;
  }
  return ln(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, a) {
        return a(n, r);
      }, void 0);
    }
  }]), e;
}(), Ko = new Ps();
function Pi(e) {
  var t = Array.isArray(e) ? e : [e];
  return Ko.has(t) || Ko.set(t, new yu(t)), Ko.get(t);
}
var Iv = /* @__PURE__ */ new WeakMap(), Xo = {};
function Mv(e, t) {
  for (var n = Iv, r = 0; r < t.length; r += 1) {
    var a = t[r];
    n.has(a) || n.set(a, /* @__PURE__ */ new WeakMap()), n = n.get(a);
  }
  return n.has(Xo) || n.set(Xo, e()), n.get(Xo);
}
var gl = /* @__PURE__ */ new WeakMap();
function Za(e) {
  var t = gl.get(e) || "";
  return t || (Object.keys(e).forEach(function(n) {
    var r = e[n];
    t += n, r instanceof yu ? t += r.id : r && We(r) === "object" ? t += Za(r) : t += r;
  }), gl.set(e, t)), t;
}
function Pv(e, t) {
  return Is("".concat(t, "_").concat(Za(e)));
}
var aa = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""), Su = "_bAmBoO_";
function Nv(e, t, n) {
  if (Ut()) {
    var r, a;
    Vr(e, aa);
    var o = document.createElement("div");
    o.style.position = "fixed", o.style.left = "0", o.style.top = "0", t == null || t(o), document.body.appendChild(o);
    var i = n ? n(o) : (r = getComputedStyle(o).content) === null || r === void 0 ? void 0 : r.includes(Su);
    return (a = o.parentNode) === null || a === void 0 || a.removeChild(o), Ja(aa), i;
  }
  return !1;
}
var Yo = void 0;
function Tv() {
  return Yo === void 0 && (Yo = Nv("@layer ".concat(aa, " { .").concat(aa, ' { content: "').concat(Su, '"!important; } }'), function(e) {
    e.className = aa;
  })), Yo;
}
var hl = Ut() ? s.useLayoutEffect : s.useEffect, gt = function(t, n) {
  var r = s.useRef(!0);
  hl(function() {
    return t(r.current);
  }, n), hl(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, oa = function(t, n) {
  gt(function(r) {
    if (!r)
      return t();
  }, n);
}, _v = B({}, fo), pl = _v.useInsertionEffect, Av = function(t, n, r) {
  s.useMemo(t, r), gt(function() {
    return n(!0);
  }, r);
}, Fv = pl ? function(e, t, n) {
  return pl(function() {
    return e(), t();
  }, n);
} : Av;
const jv = Fv;
var Lv = B({}, fo), Dv = Lv.useInsertionEffect, zv = function(t) {
  var n = [], r = !1;
  function a(o) {
    r || n.push(o);
  }
  return s.useEffect(function() {
    return r = !1, function() {
      r = !0, n.length && n.forEach(function(o) {
        return o();
      });
    };
  }, t), a;
}, Vv = function() {
  return function(t) {
    t();
  };
}, Hv = typeof Dv < "u" ? zv : Vv;
const Bv = Hv;
function Cu(e, t, n, r, a) {
  var o = s.useContext(Ms), i = o.cache, l = [e].concat(Pe(t)), c = l.join("_"), u = Bv([c]), d = function(h) {
    i.update(l, function(b) {
      var p = b || [], g = G(p, 2), C = g[0], S = C === void 0 ? 0 : C, x = g[1], R = x, E = R || n(), y = [S, E];
      return h ? h(y) : y;
    });
  };
  s.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [c]
    /* eslint-enable */
  );
  var f = i.get(l), v = f[1];
  return jv(function() {
    a == null || a(v);
  }, function(m) {
    return d(function(h) {
      var b = G(h, 2), p = b[0], g = b[1];
      return m && p === 0 && (a == null || a(v)), [p + 1, g];
    }), function() {
      i.update(l, function(h) {
        var b = h || [], p = G(b, 2), g = p[0], C = g === void 0 ? 0 : g, S = p[1], x = C - 1;
        return x === 0 ? (u(function() {
          return r == null ? void 0 : r(S, !1);
        }), null) : [C - 1, S];
      });
    };
  }, [c]), v;
}
var kv = {}, Wv = "css", ar = /* @__PURE__ */ new Map();
function Uv(e) {
  ar.set(e, (ar.get(e) || 0) + 1);
}
function Gv(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(Ii, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[_r] === t) {
        var a;
        (a = r.parentNode) === null || a === void 0 || a.removeChild(r);
      }
    });
  }
}
var qv = 0;
function Kv(e, t) {
  ar.set(e, (ar.get(e) || 0) - 1);
  var n = Array.from(ar.keys()), r = n.filter(function(a) {
    var o = ar.get(a) || 0;
    return o <= 0;
  });
  n.length - r.length > qv && r.forEach(function(a) {
    Gv(a, t), ar.delete(a);
  });
}
var Xv = function(t, n, r, a) {
  var o = r.getDerivativeToken(t), i = B(B({}, o), n);
  return a && (i = a(i)), i;
};
function Yv(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = s.useContext(Ms), a = r.cache.instanceId, o = n.salt, i = o === void 0 ? "" : o, l = n.override, c = l === void 0 ? kv : l, u = n.formatToken, d = n.getComputedToken, f = Mv(function() {
    return Object.assign.apply(Object, [{}].concat(Pe(t)));
  }, t), v = Za(f), m = Za(c), h = Cu("token", [i, e.id, v, m], function() {
    var b = d ? d(f, c, e) : Xv(f, c, e, u), p = Pv(b, i);
    b._tokenKey = p, Uv(p);
    var g = "".concat(Wv, "-").concat(Is(p));
    return b._hashId = g, [b, g];
  }, function(b) {
    Kv(b[0]._tokenKey, a);
  });
  return h;
}
var Qv = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, xu = "comm", wu = "rule", Eu = "decl", Jv = "@import", Zv = "@keyframes", em = "@layer", tm = Math.abs, Ns = String.fromCharCode;
function $u(e) {
  return e.trim();
}
function Ha(e, t, n) {
  return e.replace(t, n);
}
function nm(e, t) {
  return e.indexOf(t);
}
function da(e, t) {
  return e.charCodeAt(t) | 0;
}
function fa(e, t, n) {
  return e.slice(t, n);
}
function Bn(e) {
  return e.length;
}
function rm(e) {
  return e.length;
}
function Ma(e, t) {
  return t.push(e), e;
}
var Po = 1, Hr = 1, Ru = 0, yn = 0, Rt = 0, qr = "";
function Ts(e, t, n, r, a, o, i, l) {
  return { value: e, root: t, parent: n, type: r, props: a, children: o, line: Po, column: Hr, length: i, return: "", siblings: l };
}
function am() {
  return Rt;
}
function om() {
  return Rt = yn > 0 ? da(qr, --yn) : 0, Hr--, Rt === 10 && (Hr = 1, Po--), Rt;
}
function Pn() {
  return Rt = yn < Ru ? da(qr, yn++) : 0, Hr++, Rt === 10 && (Hr = 1, Po++), Rt;
}
function ur() {
  return da(qr, yn);
}
function Ba() {
  return yn;
}
function No(e, t) {
  return fa(qr, e, t);
}
function Ni(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function im(e) {
  return Po = Hr = 1, Ru = Bn(qr = e), yn = 0, [];
}
function sm(e) {
  return qr = "", e;
}
function Qo(e) {
  return $u(No(yn - 1, Ti(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function lm(e) {
  for (; (Rt = ur()) && Rt < 33; )
    Pn();
  return Ni(e) > 2 || Ni(Rt) > 3 ? "" : " ";
}
function cm(e, t) {
  for (; --t && Pn() && !(Rt < 48 || Rt > 102 || Rt > 57 && Rt < 65 || Rt > 70 && Rt < 97); )
    ;
  return No(e, Ba() + (t < 6 && ur() == 32 && Pn() == 32));
}
function Ti(e) {
  for (; Pn(); )
    switch (Rt) {
      case e:
        return yn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ti(Rt);
        break;
      case 40:
        e === 41 && Ti(e);
        break;
      case 92:
        Pn();
        break;
    }
  return yn;
}
function um(e, t) {
  for (; Pn() && e + Rt !== 47 + 10; )
    if (e + Rt === 42 + 42 && ur() === 47)
      break;
  return "/*" + No(t, yn - 1) + "*" + Ns(e === 47 ? e : Pn());
}
function dm(e) {
  for (; !Ni(ur()); )
    Pn();
  return No(e, yn);
}
function fm(e) {
  return sm(ka("", null, null, null, [""], e = im(e), 0, [0], e));
}
function ka(e, t, n, r, a, o, i, l, c) {
  for (var u = 0, d = 0, f = i, v = 0, m = 0, h = 0, b = 1, p = 1, g = 1, C = 0, S = "", x = a, R = o, E = r, y = S; p; )
    switch (h = C, C = Pn()) {
      case 40:
        if (h != 108 && da(y, f - 1) == 58) {
          nm(y += Ha(Qo(C), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        y += Qo(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        y += lm(h);
        break;
      case 92:
        y += cm(Ba() - 1, 7);
        continue;
      case 47:
        switch (ur()) {
          case 42:
          case 47:
            Ma(vm(um(Pn(), Ba()), t, n, c), c);
            break;
          default:
            y += "/";
        }
        break;
      case 123 * b:
        l[u++] = Bn(y) * g;
      case 125 * b:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            p = 0;
          case 59 + d:
            g == -1 && (y = Ha(y, /\f/g, "")), m > 0 && Bn(y) - f && Ma(m > 32 ? yl(y + ";", r, n, f - 1, c) : yl(Ha(y, " ", "") + ";", r, n, f - 2, c), c);
            break;
          case 59:
            y += ";";
          default:
            if (Ma(E = bl(y, t, n, u, d, a, l, S, x = [], R = [], f, o), o), C === 123)
              if (d === 0)
                ka(y, t, E, E, x, o, f, l, R);
              else
                switch (v === 99 && da(y, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ka(e, E, E, r && Ma(bl(e, E, E, 0, 0, a, l, S, a, x = [], f, R), R), a, R, f, l, r ? x : R);
                    break;
                  default:
                    ka(y, E, E, E, [""], R, 0, l, R);
                }
        }
        u = d = m = 0, b = g = 1, S = y = "", f = i;
        break;
      case 58:
        f = 1 + Bn(y), m = h;
      default:
        if (b < 1) {
          if (C == 123)
            --b;
          else if (C == 125 && b++ == 0 && om() == 125)
            continue;
        }
        switch (y += Ns(C), C * b) {
          case 38:
            g = d > 0 ? 1 : (y += "\f", -1);
            break;
          case 44:
            l[u++] = (Bn(y) - 1) * g, g = 1;
            break;
          case 64:
            ur() === 45 && (y += Qo(Pn())), v = ur(), d = f = Bn(S = y += dm(Ba())), C++;
            break;
          case 45:
            h === 45 && Bn(y) == 2 && (b = 0);
        }
    }
  return o;
}
function bl(e, t, n, r, a, o, i, l, c, u, d, f) {
  for (var v = a - 1, m = a === 0 ? o : [""], h = rm(m), b = 0, p = 0, g = 0; b < r; ++b)
    for (var C = 0, S = fa(e, v + 1, v = tm(p = i[b])), x = e; C < h; ++C)
      (x = $u(p > 0 ? m[C] + " " + S : Ha(S, /&\f/g, m[C]))) && (c[g++] = x);
  return Ts(e, t, n, a === 0 ? wu : l, c, u, d, f);
}
function vm(e, t, n, r) {
  return Ts(e, t, n, xu, Ns(am()), fa(e, 2, -2), 0, r);
}
function yl(e, t, n, r, a) {
  return Ts(e, t, n, Eu, fa(e, 0, r), fa(e, r + 1, -1), r, a);
}
function _i(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function mm(e, t, n, r) {
  switch (e.type) {
    case em:
      if (e.children.length)
        break;
    case Jv:
    case Eu:
      return e.return = e.return || e.value;
    case xu:
      return "";
    case Zv:
      return e.return = e.value + "{" + _i(e.children, r) + "}";
    case wu:
      if (!Bn(e.value = e.props.join(",")))
        return "";
  }
  return Bn(n = _i(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
var Sl = "data-ant-cssinjs-cache-path", Ou = "_FILE_STYLE__", dr, Iu = !0;
function gm() {
  if (!dr && (dr = {}, Ut())) {
    var e = document.createElement("div");
    e.className = Sl, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(a) {
      var o = a.split(":"), i = G(o, 2), l = i[0], c = i[1];
      dr[l] = c;
    });
    var n = document.querySelector("style[".concat(Sl, "]"));
    if (n) {
      var r;
      Iu = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function hm(e) {
  return gm(), !!dr[e];
}
function pm(e) {
  var t = dr[e], n = null;
  if (t && Ut())
    if (Iu)
      n = Ou;
    else {
      var r = document.querySelector("style[".concat(cr, '="').concat(dr[e], '"]'));
      r ? n = r.innerHTML : delete dr[e];
    }
  return [n, t];
}
var Cl = Ut(), bm = "_skip_check_", Mu = "_multi_value_";
function xl(e) {
  var t = _i(fm(e), mm);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function ym(e) {
  return We(e) === "object" && e && (bm in e || Mu in e);
}
function Sm(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), a = n === "low" ? ":where(".concat(r, ")") : r, o = e.split(",").map(function(i) {
    var l, c = i.trim().split(/\s+/), u = c[0] || "", d = ((l = u.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || "";
    return u = "".concat(d).concat(a).concat(u.slice(d.length)), [u].concat(Pe(c.slice(1))).join(" ");
  });
  return o.join(",");
}
var Cm = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = r.root, o = r.injectHash, i = r.parentSelectors, l = n.hashId, c = n.layer;
  n.path;
  var u = n.hashPriority, d = n.transformers, f = d === void 0 ? [] : d;
  n.linters;
  var v = "", m = {};
  function h(S) {
    var x = S.getName(l);
    if (!m[x]) {
      var R = e(S.style, n, {
        root: !1,
        parentSelectors: i
      }), E = G(R, 1), y = E[0];
      m[x] = "@keyframes ".concat(S.getName(l)).concat(y);
    }
  }
  function b(S) {
    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return S.forEach(function(R) {
      Array.isArray(R) ? b(R, x) : R && x.push(R);
    }), x;
  }
  var p = b(Array.isArray(t) ? t : [t]);
  if (p.forEach(function(S) {
    var x = typeof S == "string" && !a ? {} : S;
    if (typeof x == "string")
      v += "".concat(x, `
`);
    else if (x._keyframe)
      h(x);
    else {
      var R = f.reduce(function(E, y) {
        var $;
        return (y == null || ($ = y.visit) === null || $ === void 0 ? void 0 : $.call(y, E)) || E;
      }, x);
      Object.keys(R).forEach(function(E) {
        var y = R[E];
        if (We(y) === "object" && y && (E !== "animationName" || !y._keyframe) && !ym(y)) {
          var $ = !1, I = E.trim(), T = !1;
          (a || o) && l ? I.startsWith("@") ? $ = !0 : I = Sm(E, l, u) : a && !l && (I === "&" || I === "") && (I = "", T = !0);
          var N = e(y, n, {
            root: T,
            injectHash: $,
            parentSelectors: [].concat(Pe(i), [I])
          }), F = G(N, 2), A = F[0], D = F[1];
          m = B(B({}, m), D), v += "".concat(I).concat(A);
        } else {
          let O = function(P, L) {
            var j = P.replace(/[A-Z]/g, function(k) {
              return "-".concat(k.toLowerCase());
            }), V = L;
            !Qv[P] && typeof V == "number" && V !== 0 && (V = "".concat(V, "px")), P === "animationName" && L !== null && L !== void 0 && L._keyframe && (h(L), V = L.getName(l)), v += "".concat(j, ":").concat(V, ";");
          };
          var z, M = (z = y == null ? void 0 : y.value) !== null && z !== void 0 ? z : y;
          We(y) === "object" && y !== null && y !== void 0 && y[Mu] && Array.isArray(M) ? M.forEach(function(P) {
            O(E, P);
          }) : O(E, M);
        }
      });
    }
  }), !a)
    v = "{".concat(v, "}");
  else if (c && Tv()) {
    var g = c.split(","), C = g[g.length - 1].trim();
    v = "@layer ".concat(C, " {").concat(v, "}"), g.length > 1 && (v = "@layer ".concat(c, "{%%%:%}").concat(v));
  }
  return [v, m];
};
function xm(e, t) {
  return Is("".concat(e.join("%")).concat(t));
}
function wm() {
  return null;
}
function Ai(e, t) {
  var n = e.token, r = e.path, a = e.hashId, o = e.layer, i = e.nonce, l = e.clientOnly, c = e.order, u = c === void 0 ? 0 : c, d = s.useContext(Ms), f = d.autoClear;
  d.mock;
  var v = d.defaultCache, m = d.hashPriority, h = d.container, b = d.ssrInline, p = d.transformers, g = d.linters, C = d.cache, S = n._tokenKey, x = [S].concat(Pe(r)), R = Cl, E = Cu(
    "style",
    x,
    // Create cache if needed
    function() {
      var N = x.join("|");
      if (hm(N)) {
        var F = pm(N), A = G(F, 2), D = A[0], z = A[1];
        if (D)
          return [D, S, z, {}, l, u];
      }
      var M = t(), O = Cm(M, {
        hashId: a,
        hashPriority: m,
        layer: o,
        path: r.join("-"),
        transformers: p,
        linters: g
      }), P = G(O, 2), L = P[0], j = P[1], V = xl(L), k = xm(x, V);
      return [V, S, k, j, l, u];
    },
    // Remove cache if no need
    function(N, F) {
      var A = G(N, 3), D = A[2];
      (F || f) && Cl && Ja(D, {
        mark: cr
      });
    },
    // Effect: Inject style here
    function(N) {
      var F = G(N, 4), A = F[0];
      F[1];
      var D = F[2], z = F[3];
      if (R && A !== Ou) {
        var M = {
          mark: cr,
          prepend: "queue",
          attachTo: h,
          priority: u
        }, O = typeof i == "function" ? i() : i;
        O && (M.csp = {
          nonce: O
        });
        var P = Vr(A, D, M);
        P[_r] = C.instanceId, P.setAttribute(Ii, S), Object.keys(z).forEach(function(L) {
          Vr(xl(z[L]), "_effect-".concat(L), M);
        });
      }
    }
  ), y = G(E, 3), $ = y[0], I = y[1], T = y[2];
  return function(N) {
    var F;
    if (!b || R || !v)
      F = /* @__PURE__ */ s.createElement(wm, null);
    else {
      var A;
      F = /* @__PURE__ */ s.createElement("style", je({}, (A = {}, _(A, Ii, I), _(A, cr, T), A), {
        dangerouslySetInnerHTML: {
          __html: $
        }
      }));
    }
    return /* @__PURE__ */ s.createElement(s.Fragment, null, F, N);
  };
}
var zt = /* @__PURE__ */ function() {
  function e(t, n) {
    sn(this, e), _(this, "name", void 0), _(this, "style", void 0), _(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return ln(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function $r(e) {
  return e.notSplit = !0, e;
}
$r(["borderTop", "borderBottom"]), $r(["borderTop"]), $r(["borderBottom"]), $r(["borderLeft", "borderRight"]), $r(["borderLeft"]), $r(["borderRight"]);
var Em = /* @__PURE__ */ s.createContext({});
const _s = Em;
function Pu(e) {
  return pu(e) || lu(e) || Rs(e) || bu();
}
function Mn(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function Nu(e, t, n, r) {
  if (!t.length)
    return n;
  var a = Pu(t), o = a[0], i = a.slice(1), l;
  return !e && typeof o == "number" ? l = [] : Array.isArray(e) ? l = Pe(e) : l = B({}, e), r && n === void 0 && i.length === 1 ? delete l[o][i[0]] : l[o] = Nu(l[o], i, n, r), l;
}
function On(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !Mn(e, t.slice(0, -1)) ? e : Nu(e, t, n, r);
}
function $m(e) {
  return We(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function wl(e) {
  return Array.isArray(e) ? [] : {};
}
var Rm = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Ar() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = wl(t[0]);
  return t.forEach(function(a) {
    function o(i, l) {
      var c = new Set(l), u = Mn(a, i), d = Array.isArray(u);
      if (d || $m(u)) {
        if (!c.has(u)) {
          c.add(u);
          var f = Mn(r, i);
          d ? r = On(r, i, []) : (!f || We(f) !== "object") && (r = On(r, i, wl(u))), Rm(u).forEach(function(v) {
            o([].concat(Pe(i), [v]), c);
          });
        }
      } else
        r = On(r, i, u);
    }
    o([]);
  }), r;
}
const Om = /* @__PURE__ */ s.createContext({}), Im = /* @__PURE__ */ s.createContext(void 0), Mm = {
  // Options.jsx
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination.jsx
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
};
var Pm = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
const Nm = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Tu = Nm, Tm = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, Pm),
  timePickerLocale: Object.assign({}, Tu)
}, El = Tm, tn = "${label} is not a valid ${type}", _m = {
  locale: "en",
  Pagination: Mm,
  DatePicker: El,
  TimePicker: Tu,
  Calendar: El,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: tn,
        method: tn,
        array: tn,
        object: tn,
        number: tn,
        date: tn,
        boolean: tn,
        integer: tn,
        float: tn,
        regexp: tn,
        email: tn,
        url: tn,
        hex: tn
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh"
  },
  ColorPicker: {
    presetEmpty: "Empty"
  }
}, Br = _m;
Object.assign({}, Br.Modal);
let Wa = [];
const $l = () => Wa.reduce((e, t) => Object.assign(Object.assign({}, e), t), Br.Modal);
function Am(e) {
  if (e) {
    const t = Object.assign({}, e);
    return Wa.push(t), $l(), () => {
      Wa = Wa.filter((n) => n !== t), $l();
    };
  }
  Object.assign({}, Br.Modal);
}
const Fm = /* @__PURE__ */ s.createContext(void 0), As = Fm, jm = (e, t) => {
  const n = s.useContext(As), r = s.useMemo(() => {
    var o;
    const i = t || Br[e], l = (o = n == null ? void 0 : n[e]) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, typeof i == "function" ? i() : i), l || {});
  }, [e, t, n]), a = s.useMemo(() => {
    const o = n == null ? void 0 : n.locale;
    return n != null && n.exist && !o ? Br.locale : o;
  }, [n]);
  return [r, a];
}, Lm = jm, Dm = "internalMark", zm = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  s.useEffect(() => Am(t && t.Modal), [t]);
  const a = s.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ s.createElement(As.Provider, {
    value: a
  }, n);
}, Vm = zm;
function Dt(e, t) {
  Hm(e) && (e = "100%");
  var n = Bm(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Pa(e) {
  return Math.min(1, Math.max(0, e));
}
function Hm(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Bm(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function _u(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Na(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function or(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function km(e, t, n) {
  return {
    r: Dt(e, 255) * 255,
    g: Dt(t, 255) * 255,
    b: Dt(n, 255) * 255
  };
}
function Rl(e, t, n) {
  e = Dt(e, 255), t = Dt(t, 255), n = Dt(n, 255);
  var r = Math.max(e, t, n), a = Math.min(e, t, n), o = 0, i = 0, l = (r + a) / 2;
  if (r === a)
    i = 0, o = 0;
  else {
    var c = r - a;
    switch (i = l > 0.5 ? c / (2 - r - a) : c / (r + a), r) {
      case e:
        o = (t - n) / c + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / c + 2;
        break;
      case n:
        o = (e - t) / c + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: i, l };
}
function Jo(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Wm(e, t, n) {
  var r, a, o;
  if (e = Dt(e, 360), t = Dt(t, 100), n = Dt(n, 100), t === 0)
    a = n, o = n, r = n;
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - i;
    r = Jo(l, i, e + 1 / 3), a = Jo(l, i, e), o = Jo(l, i, e - 1 / 3);
  }
  return { r: r * 255, g: a * 255, b: o * 255 };
}
function Fi(e, t, n) {
  e = Dt(e, 255), t = Dt(t, 255), n = Dt(n, 255);
  var r = Math.max(e, t, n), a = Math.min(e, t, n), o = 0, i = r, l = r - a, c = r === 0 ? 0 : l / r;
  if (r === a)
    o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / l + 2;
        break;
      case n:
        o = (e - t) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: c, v: i };
}
function Um(e, t, n) {
  e = Dt(e, 360) * 6, t = Dt(t, 100), n = Dt(n, 100);
  var r = Math.floor(e), a = e - r, o = n * (1 - t), i = n * (1 - a * t), l = n * (1 - (1 - a) * t), c = r % 6, u = [n, i, o, o, l, n][c], d = [l, n, n, i, o, o][c], f = [o, o, l, n, n, i][c];
  return { r: u * 255, g: d * 255, b: f * 255 };
}
function ji(e, t, n, r) {
  var a = [
    or(Math.round(e).toString(16)),
    or(Math.round(t).toString(16)),
    or(Math.round(n).toString(16))
  ];
  return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function Gm(e, t, n, r, a) {
  var o = [
    or(Math.round(e).toString(16)),
    or(Math.round(t).toString(16)),
    or(Math.round(n).toString(16)),
    or(qm(r))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function qm(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Ol(e) {
  return rn(e) / 255;
}
function rn(e) {
  return parseInt(e, 16);
}
function Km(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Li = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function Tr(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, a = null, o = null, i = !1, l = !1;
  return typeof e == "string" && (e = Qm(e)), typeof e == "object" && (Vn(e.r) && Vn(e.g) && Vn(e.b) ? (t = km(e.r, e.g, e.b), i = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Vn(e.h) && Vn(e.s) && Vn(e.v) ? (r = Na(e.s), a = Na(e.v), t = Um(e.h, r, a), i = !0, l = "hsv") : Vn(e.h) && Vn(e.s) && Vn(e.l) && (r = Na(e.s), o = Na(e.l), t = Wm(e.h, r, o), i = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = _u(n), {
    ok: i,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var Xm = "[-\\+]?\\d+%?", Ym = "[-\\+]?\\d*\\.\\d+%?", Yn = "(?:".concat(Ym, ")|(?:").concat(Xm, ")"), Zo = "[\\s|\\(]+(".concat(Yn, ")[,|\\s]+(").concat(Yn, ")[,|\\s]+(").concat(Yn, ")\\s*\\)?"), ei = "[\\s|\\(]+(".concat(Yn, ")[,|\\s]+(").concat(Yn, ")[,|\\s]+(").concat(Yn, ")[,|\\s]+(").concat(Yn, ")\\s*\\)?"), $n = {
  CSS_UNIT: new RegExp(Yn),
  rgb: new RegExp("rgb" + Zo),
  rgba: new RegExp("rgba" + ei),
  hsl: new RegExp("hsl" + Zo),
  hsla: new RegExp("hsla" + ei),
  hsv: new RegExp("hsv" + Zo),
  hsva: new RegExp("hsva" + ei),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Qm(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Li[e])
    e = Li[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = $n.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = $n.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = $n.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = $n.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = $n.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = $n.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = $n.hex8.exec(e), n ? {
    r: rn(n[1]),
    g: rn(n[2]),
    b: rn(n[3]),
    a: Ol(n[4]),
    format: t ? "name" : "hex8"
  } : (n = $n.hex6.exec(e), n ? {
    r: rn(n[1]),
    g: rn(n[2]),
    b: rn(n[3]),
    format: t ? "name" : "hex"
  } : (n = $n.hex4.exec(e), n ? {
    r: rn(n[1] + n[1]),
    g: rn(n[2] + n[2]),
    b: rn(n[3] + n[3]),
    a: Ol(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = $n.hex3.exec(e), n ? {
    r: rn(n[1] + n[1]),
    g: rn(n[2] + n[2]),
    b: rn(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Vn(e) {
  return !!$n.CSS_UNIT.exec(String(e));
}
var Lt = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = Km(t)), this.originalInput = t;
      var a = Tr(t);
      this.originalInput = t, this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : a.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = a.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, r, a, o = t.r / 255, i = t.g / 255, l = t.b / 255;
      return o <= 0.03928 ? n = o / 12.92 : n = Math.pow((o + 0.055) / 1.055, 2.4), i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), l <= 0.03928 ? a = l / 12.92 : a = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * a;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = _u(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Fi(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Fi(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), a = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Rl(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Rl(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), a = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), ji(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Gm(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(Dt(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Dt(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + ji(this.r, this.g, this.b, !1), n = 0, r = Object.entries(Li); n < r.length; n++) {
        var a = r[n], o = a[0], i = a[1];
        if (t === i)
          return o;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1, a = this.a < 1 && this.a >= 0, o = !n && a && (t.startsWith("hex") || t === "name");
      return o ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = Pa(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Pa(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Pa(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Pa(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), a = new e(t).toRgb(), o = n / 100, i = {
        r: (a.r - r.r) * o + r.r,
        g: (a.g - r.g) * o + r.g,
        b: (a.b - r.b) * o + r.b,
        a: (a.a - r.a) * o + r.a
      };
      return new e(i);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), a = 360 / n, o = [this];
      for (r.h = (r.h - (a * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + a) % 360, o.push(new e(r));
      return o;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, a = n.s, o = n.v, i = [], l = 1 / t; t--; )
        i.push(new e({ h: r, s: a, v: o })), o = (o + l) % 1;
      return i;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), r = new e(t).toRgb(), a = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / a,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / a,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / a,
        a
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, a = [this], o = 360 / t, i = 1; i < t; i++)
        a.push(new e({ h: (r + i * o) % 360, s: n.s, l: n.l }));
      return a;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), Ta = 2, Il = 0.16, Jm = 0.05, Zm = 0.05, eg = 0.15, Au = 5, Fu = 4, tg = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function Ml(e) {
  var t = e.r, n = e.g, r = e.b, a = Fi(t, n, r);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function _a(e) {
  var t = e.r, n = e.g, r = e.b;
  return "#".concat(ji(t, n, r, !1));
}
function ng(e, t, n) {
  var r = n / 100, a = {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
  return a;
}
function Pl(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - Ta * t : Math.round(e.h) + Ta * t : r = n ? Math.round(e.h) + Ta * t : Math.round(e.h) - Ta * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Nl(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - Il * t : t === Fu ? r = e.s + Il : r = e.s + Jm * t, r > 1 && (r = 1), n && t === Au && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function Tl(e, t, n) {
  var r;
  return n ? r = e.v + Zm * t : r = e.v - eg * t, r > 1 && (r = 1), Number(r.toFixed(2));
}
function vr(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = Tr(e), a = Au; a > 0; a -= 1) {
    var o = Ml(r), i = _a(Tr({
      h: Pl(o, a, !0),
      s: Nl(o, a, !0),
      v: Tl(o, a, !0)
    }));
    n.push(i);
  }
  n.push(_a(r));
  for (var l = 1; l <= Fu; l += 1) {
    var c = Ml(r), u = _a(Tr({
      h: Pl(c, l),
      s: Nl(c, l),
      v: Tl(c, l)
    }));
    n.push(u);
  }
  return t.theme === "dark" ? tg.map(function(d) {
    var f = d.index, v = d.opacity, m = _a(ng(Tr(t.backgroundColor || "#141414"), Tr(n[f]), v * 100));
    return m;
  }) : n;
}
var ti = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Ua = {}, ni = {};
Object.keys(ti).forEach(function(e) {
  Ua[e] = vr(ti[e]), Ua[e].primary = Ua[e][5], ni[e] = vr(ti[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), ni[e].primary = ni[e][5];
});
var rg = Ua.blue;
const ag = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
}, og = ag;
function ig(e) {
  const {
    sizeUnit: t,
    sizeStep: n
  } = e;
  return {
    sizeXXL: t * (n + 8),
    sizeXL: t * (n + 4),
    sizeLG: t * (n + 2),
    sizeMD: t * (n + 1),
    sizeMS: t * n,
    size: t * n,
    sizeSM: t * (n - 1),
    sizeXS: t * (n - 2),
    sizeXXS: t * (n - 3)
    // 4
  };
}
const ju = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, sg = Object.assign(Object.assign({}, ju), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
}), va = sg;
function lg(e, t) {
  let {
    generateColorPalettes: n,
    generateNeutralColorPalettes: r
  } = t;
  const {
    colorSuccess: a,
    colorWarning: o,
    colorError: i,
    colorInfo: l,
    colorPrimary: c,
    colorBgBase: u,
    colorTextBase: d
  } = e, f = n(c), v = n(a), m = n(o), h = n(i), b = n(l), p = r(u, d), g = e.colorLink || e.colorInfo, C = n(g);
  return Object.assign(Object.assign({}, p), {
    colorPrimaryBg: f[1],
    colorPrimaryBgHover: f[2],
    colorPrimaryBorder: f[3],
    colorPrimaryBorderHover: f[4],
    colorPrimaryHover: f[5],
    colorPrimary: f[6],
    colorPrimaryActive: f[7],
    colorPrimaryTextHover: f[8],
    colorPrimaryText: f[9],
    colorPrimaryTextActive: f[10],
    colorSuccessBg: v[1],
    colorSuccessBgHover: v[2],
    colorSuccessBorder: v[3],
    colorSuccessBorderHover: v[4],
    colorSuccessHover: v[4],
    colorSuccess: v[6],
    colorSuccessActive: v[7],
    colorSuccessTextHover: v[8],
    colorSuccessText: v[9],
    colorSuccessTextActive: v[10],
    colorErrorBg: h[1],
    colorErrorBgHover: h[2],
    colorErrorBorder: h[3],
    colorErrorBorderHover: h[4],
    colorErrorHover: h[5],
    colorError: h[6],
    colorErrorActive: h[7],
    colorErrorTextHover: h[8],
    colorErrorText: h[9],
    colorErrorTextActive: h[10],
    colorWarningBg: m[1],
    colorWarningBgHover: m[2],
    colorWarningBorder: m[3],
    colorWarningBorderHover: m[4],
    colorWarningHover: m[4],
    colorWarning: m[6],
    colorWarningActive: m[7],
    colorWarningTextHover: m[8],
    colorWarningText: m[9],
    colorWarningTextActive: m[10],
    colorInfoBg: b[1],
    colorInfoBgHover: b[2],
    colorInfoBorder: b[3],
    colorInfoBorderHover: b[4],
    colorInfoHover: b[4],
    colorInfo: b[6],
    colorInfoActive: b[7],
    colorInfoTextHover: b[8],
    colorInfoText: b[9],
    colorInfoTextActive: b[10],
    colorLinkHover: C[4],
    colorLink: C[6],
    colorLinkActive: C[7],
    colorBgMask: new Lt("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const cg = (e) => {
  let t = e, n = e, r = e, a = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? a = 4 : e >= 8 && (a = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: a
  };
}, ug = cg;
function dg(e) {
  const {
    motionUnit: t,
    motionBase: n,
    borderRadius: r,
    lineWidth: a
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(n + t).toFixed(1)}s`,
    motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: a + 1
  }, ug(r));
}
const Hn = (e, t) => new Lt(e).setAlpha(t).toRgbString(), Jr = (e, t) => new Lt(e).darken(t).toHexString(), fg = (e) => {
  const t = vr(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, vg = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: Hn(r, 0.88),
    colorTextSecondary: Hn(r, 0.65),
    colorTextTertiary: Hn(r, 0.45),
    colorTextQuaternary: Hn(r, 0.25),
    colorFill: Hn(r, 0.15),
    colorFillSecondary: Hn(r, 0.06),
    colorFillTertiary: Hn(r, 0.04),
    colorFillQuaternary: Hn(r, 0.02),
    colorBgLayout: Jr(n, 4),
    colorBgContainer: Jr(n, 0),
    colorBgElevated: Jr(n, 0),
    colorBgSpotlight: Hn(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Jr(n, 15),
    colorBorderSecondary: Jr(n, 6)
  };
};
function mg(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const a = r - 1, o = e * Math.pow(2.71828, a / 5), i = r > 1 ? Math.floor(o) : Math.ceil(o);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((n) => {
    const r = n + 8;
    return {
      size: n,
      lineHeight: r / n
    };
  });
}
const gg = (e) => {
  const t = mg(e), n = t.map((a) => a.size), r = t.map((a) => a.lineHeight);
  return {
    fontSizeSM: n[0],
    fontSize: n[1],
    fontSizeLG: n[2],
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: r[1],
    lineHeightLG: r[2],
    lineHeightSM: r[0],
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2]
  };
}, hg = gg;
function pg(e) {
  const t = Object.keys(ju).map((n) => {
    const r = vr(e[n]);
    return new Array(10).fill(1).reduce((a, o, i) => (a[`${n}-${i + 1}`] = r[i], a[`${n}${i + 1}`] = r[i], a), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), lg(e, {
    generateColorPalettes: fg,
    generateNeutralColorPalettes: vg
  })), hg(e.fontSize)), ig(e)), og(e)), dg(e));
}
const Lu = Pi(pg), Du = {
  token: va,
  override: {
    override: va
  },
  hashed: !0
}, zu = /* @__PURE__ */ Se.createContext(Du), Vu = "anticon", bg = (e, t) => t || (e ? `ant-${e}` : "ant"), Ct = /* @__PURE__ */ s.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: bg,
  iconPrefixCls: Vu
}), yg = `-ant-${Date.now()}-${Math.random()}`;
function Sg(e, t) {
  const n = {}, r = (i, l) => {
    let c = i.clone();
    return c = (l == null ? void 0 : l(c)) || c, c.toRgbString();
  }, a = (i, l) => {
    const c = new Lt(i), u = vr(c.toRgbString());
    n[`${l}-color`] = r(c), n[`${l}-color-disabled`] = u[1], n[`${l}-color-hover`] = u[4], n[`${l}-color-active`] = u[6], n[`${l}-color-outline`] = c.clone().setAlpha(0.2).toRgbString(), n[`${l}-color-deprecated-bg`] = u[0], n[`${l}-color-deprecated-border`] = u[2];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    const i = new Lt(t.primaryColor), l = vr(i.toRgbString());
    l.forEach((u, d) => {
      n[`primary-${d + 1}`] = u;
    }), n["primary-color-deprecated-l-35"] = r(i, (u) => u.lighten(35)), n["primary-color-deprecated-l-20"] = r(i, (u) => u.lighten(20)), n["primary-color-deprecated-t-20"] = r(i, (u) => u.tint(20)), n["primary-color-deprecated-t-50"] = r(i, (u) => u.tint(50)), n["primary-color-deprecated-f-12"] = r(i, (u) => u.setAlpha(u.getAlpha() * 0.12));
    const c = new Lt(l[0]);
    n["primary-color-active-deprecated-f-30"] = r(c, (u) => u.setAlpha(u.getAlpha() * 0.3)), n["primary-color-active-deprecated-d-02"] = r(c, (u) => u.darken(2));
  }
  return t.successColor && a(t.successColor, "success"), t.warningColor && a(t.warningColor, "warning"), t.errorColor && a(t.errorColor, "error"), t.infoColor && a(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((i) => `--${e}-${i}: ${n[i]};`).join(`
`)}
  }
  `.trim();
}
function Cg(e, t) {
  const n = Sg(e, t);
  Ut() && Vr(n, `${yg}-dynamic-theme`);
}
const Di = /* @__PURE__ */ s.createContext(!1), xg = (e) => {
  let {
    children: t,
    disabled: n
  } = e;
  const r = s.useContext(Di);
  return /* @__PURE__ */ s.createElement(Di.Provider, {
    value: n ?? r
  }, t);
}, Kr = Di, zi = /* @__PURE__ */ s.createContext(void 0), wg = (e) => {
  let {
    children: t,
    size: n
  } = e;
  const r = s.useContext(zi);
  return /* @__PURE__ */ s.createElement(zi.Provider, {
    value: n || r
  }, t);
}, To = zi;
function Eg() {
  const e = s.useContext(Kr), t = s.useContext(To);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
const $g = "5.10.2";
function ri(e) {
  return e >= 0 && e <= 255;
}
function Aa(e, t) {
  const {
    r: n,
    g: r,
    b: a,
    a: o
  } = new Lt(e).toRgb();
  if (o < 1)
    return e;
  const {
    r: i,
    g: l,
    b: c
  } = new Lt(t).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const d = Math.round((n - i * (1 - u)) / u), f = Math.round((r - l * (1 - u)) / u), v = Math.round((a - c * (1 - u)) / u);
    if (ri(d) && ri(f) && ri(v))
      return new Lt({
        r: d,
        g: f,
        b: v,
        a: Math.round(u * 100) / 100
      }).toRgbString();
  }
  return new Lt({
    r: n,
    g: r,
    b: a,
    a: 1
  }).toRgbString();
}
var Rg = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function Hu(e) {
  const {
    override: t
  } = e, n = Rg(e, ["override"]), r = Object.assign({}, t);
  Object.keys(va).forEach((v) => {
    delete r[v];
  });
  const a = Object.assign(Object.assign({}, n), r), o = 480, i = 576, l = 768, c = 992, u = 1200, d = 1600;
  if (a.motion === !1) {
    const v = "0s";
    a.motionDurationFast = v, a.motionDurationMid = v, a.motionDurationSlow = v;
  }
  return Object.assign(Object.assign(Object.assign({}, a), {
    // ============== Background ============== //
    colorFillContent: a.colorFillSecondary,
    colorFillContentHover: a.colorFill,
    colorFillAlter: a.colorFillQuaternary,
    colorBgContainerDisabled: a.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: a.colorBgContainer,
    colorSplit: Aa(a.colorBorderSecondary, a.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: a.colorTextQuaternary,
    colorTextDisabled: a.colorTextQuaternary,
    colorTextHeading: a.colorText,
    colorTextLabel: a.colorTextSecondary,
    colorTextDescription: a.colorTextTertiary,
    colorTextLightSolid: a.colorWhite,
    colorHighlight: a.colorError,
    colorBgTextHover: a.colorFillSecondary,
    colorBgTextActive: a.colorFill,
    colorIcon: a.colorTextTertiary,
    colorIconHover: a.colorText,
    colorErrorOutline: Aa(a.colorErrorBg, a.colorBgContainer),
    colorWarningOutline: Aa(a.colorWarningBg, a.colorBgContainer),
    // Font
    fontSizeIcon: a.fontSizeSM,
    // Line
    lineWidthFocus: a.lineWidth * 4,
    // Control
    lineWidth: a.lineWidth,
    controlOutlineWidth: a.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: a.controlHeight / 2,
    controlItemBgHover: a.colorFillTertiary,
    controlItemBgActive: a.colorPrimaryBg,
    controlItemBgActiveHover: a.colorPrimaryBgHover,
    controlItemBgActiveDisabled: a.colorFill,
    controlTmpOutline: a.colorFillQuaternary,
    controlOutline: Aa(a.colorPrimaryBg, a.colorBgContainer),
    lineType: a.lineType,
    borderRadius: a.borderRadius,
    borderRadiusXS: a.borderRadiusXS,
    borderRadiusSM: a.borderRadiusSM,
    borderRadiusLG: a.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: a.sizeXXS,
    paddingXS: a.sizeXS,
    paddingSM: a.sizeSM,
    padding: a.size,
    paddingMD: a.sizeMD,
    paddingLG: a.sizeLG,
    paddingXL: a.sizeXL,
    paddingContentHorizontalLG: a.sizeLG,
    paddingContentVerticalLG: a.sizeMS,
    paddingContentHorizontal: a.sizeMS,
    paddingContentVertical: a.sizeSM,
    paddingContentHorizontalSM: a.size,
    paddingContentVerticalSM: a.sizeXS,
    marginXXS: a.sizeXXS,
    marginXS: a.sizeXS,
    marginSM: a.sizeSM,
    margin: a.size,
    marginMD: a.sizeMD,
    marginLG: a.sizeLG,
    marginXL: a.sizeXL,
    marginXXL: a.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: o,
    screenXSMin: o,
    screenXSMax: i - 1,
    screenSM: i,
    screenSMMin: i,
    screenSMMax: l - 1,
    screenMD: l,
    screenMDMin: l,
    screenMDMax: c - 1,
    screenLG: c,
    screenLGMin: c,
    screenLGMax: u - 1,
    screenXL: u,
    screenXLMin: u,
    screenXLMax: d - 1,
    screenXXL: d,
    screenXXLMin: d,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Lt("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Lt("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Lt("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), r);
}
var _l = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Bu = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: a
  } = t, o = _l(t, ["override"]);
  let i = Object.assign(Object.assign({}, r), {
    override: a
  });
  return i = Hu(i), o && Object.entries(o).forEach((l) => {
    let [c, u] = l;
    const {
      theme: d
    } = u, f = _l(u, ["theme"]);
    let v = f;
    d && (v = Bu(Object.assign(Object.assign({}, i), f), {
      override: f
    }, d)), i[c] = v;
  }), i;
};
function hr() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r
  } = Se.useContext(zu), a = `${$g}-${t || ""}`, o = n || Lu, [i, l] = Yv(o, [va, e], {
    salt: a,
    override: r,
    getComputedToken: Bu,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Hu
  });
  return [o, i, t ? l : ""];
}
function an(e) {
  var t = s.useRef();
  t.current = e;
  var n = s.useCallback(function() {
    for (var r, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(o));
  }, []);
  return n;
}
function Lr(e) {
  var t = s.useRef(!1), n = s.useState(e), r = G(n, 2), a = r[0], o = r[1];
  s.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function i(l, c) {
    c && t.current || o(l);
  }
  return [a, i];
}
function ai(e) {
  return e !== void 0;
}
function mr(e, t) {
  var n = t || {}, r = n.defaultValue, a = n.value, o = n.onChange, i = n.postState, l = Lr(function() {
    return ai(a) ? a : ai(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), c = G(l, 2), u = c[0], d = c[1], f = a !== void 0 ? a : u, v = i ? i(f) : f, m = an(o), h = Lr([f]), b = G(h, 2), p = b[0], g = b[1];
  oa(function() {
    var S = p[0];
    u !== S && m(u, S);
  }, [p]), oa(function() {
    ai(a) || d(a);
  }, [a]);
  var C = an(function(S, x) {
    d(S, x), g([f], x);
  });
  return [v, C];
}
const Vi = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, Qn = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: e.colorText,
    fontSize: e.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: e.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: t ? "inherit" : e.fontFamily
  };
}, _o = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), Og = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
}), Ig = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active,\n  &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), Mg = (e, t) => {
  const {
    fontFamily: n,
    fontSize: r
  } = e, a = `[class^="${t}"], [class*=" ${t}"]`;
  return {
    [a]: {
      fontFamily: n,
      fontSize: r,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [a]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
}, Pg = (e) => ({
  outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), Ng = (e) => ({
  "&:focus-visible": Object.assign({}, Pg(e))
}), ku = typeof CSSINJS_STATISTIC < "u";
let Hi = !0;
function bt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!ku)
    return Object.assign.apply(Object, [{}].concat(t));
  Hi = !1;
  const r = {};
  return t.forEach((a) => {
    Object.keys(a).forEach((i) => {
      Object.defineProperty(r, i, {
        configurable: !0,
        enumerable: !0,
        get: () => a[i]
      });
    });
  }), Hi = !0, r;
}
const Al = {};
function Tg() {
}
function _g(e) {
  let t, n = e, r = Tg;
  return ku && (t = /* @__PURE__ */ new Set(), n = new Proxy(e, {
    get(a, o) {
      return Hi && t.add(o), a[o];
    }
  }), r = (a, o) => {
    var i;
    Al[a] = {
      global: Array.from(t),
      component: Object.assign(Object.assign({}, (i = Al[a]) === null || i === void 0 ? void 0 : i.component), o)
    };
  }), {
    token: n,
    keys: t,
    flush: r
  };
}
const Ag = (e, t) => {
  const [n, r] = hr();
  return Ai({
    theme: n,
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, _o()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, Wu = Ag;
function Ln(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const a = Array.isArray(e) ? e : [e, e], [o] = a, i = a.join("-");
  return (l) => {
    const [c, u, d] = hr(), {
      getPrefixCls: f,
      iconPrefixCls: v,
      csp: m
    } = s.useContext(Ct), h = f(), b = {
      theme: c,
      token: u,
      hashId: d,
      nonce: () => m == null ? void 0 : m.nonce,
      clientOnly: r.clientOnly,
      // antd is always at top of styles
      order: r.order || -999
    };
    return Ai(Object.assign(Object.assign({}, b), {
      clientOnly: !1,
      path: ["Shared", h]
    }), () => [{
      // Link
      "&": Ig(u)
    }]), Wu(v, m), [Ai(Object.assign(Object.assign({}, b), {
      path: [i, l, v]
    }), () => {
      const {
        token: p,
        flush: g
      } = _g(u), C = Object.assign({}, u[o]);
      if (r.deprecatedTokens) {
        const {
          deprecatedTokens: $
        } = r;
        $.forEach((I) => {
          let [T, N] = I;
          var F;
          (C != null && C[T] || C != null && C[N]) && ((F = C[N]) !== null && F !== void 0 || (C[N] = C == null ? void 0 : C[T]));
        });
      }
      const S = typeof n == "function" ? n(bt(p, C ?? {})) : n, x = Object.assign(Object.assign({}, S), C), R = `.${l}`, E = bt(p, {
        componentCls: R,
        prefixCls: l,
        iconCls: `.${v}`,
        antCls: `.${h}`
      }, x), y = t(E, {
        hashId: d,
        prefixCls: l,
        rootPrefixCls: h,
        iconPrefixCls: v,
        overrideComponentToken: C
      });
      return g(o, x), [r.resetStyle === !1 ? null : Mg(u, l), y];
    }), d];
  };
}
const Fg = (e, t, n, r) => {
  const a = Ln(e, t, n, Object.assign({
    resetStyle: !1,
    // Sub Style should default after root one
    order: -998
  }, r));
  return (i) => {
    let {
      prefixCls: l
    } = i;
    return a(l), null;
  };
};
function jg(e, t) {
  const n = e || {}, r = n.inherit === !1 || !t ? Du : t;
  return Eo(() => {
    if (!e)
      return t;
    const a = Object.assign({}, r.components);
    return Object.keys(e.components || {}).forEach((o) => {
      a[o] = Object.assign(Object.assign({}, a[o]), e.components[o]);
    }), Object.assign(Object.assign(Object.assign({}, r), n), {
      token: Object.assign(Object.assign({}, r.token), n.token),
      components: a
    });
  }, [n, r], (a, o) => a.some((i, l) => {
    const c = o[l];
    return !fu(i, c, !0);
  }));
}
var Lg = ["children"], Uu = /* @__PURE__ */ s.createContext({});
function Dg(e) {
  var t = e.children, n = vt(e, Lg);
  return /* @__PURE__ */ s.createElement(Uu.Provider, {
    value: n
  }, t);
}
var zg = /* @__PURE__ */ function(e) {
  Oo(n, e);
  var t = Io(n);
  function n() {
    return sn(this, n), t.apply(this, arguments);
  }
  return ln(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(s.Component), rr = "none", Fa = "appear", ja = "enter", La = "leave", Fl = "none", In = "prepare", Fr = "start", jr = "active", Fs = "end", Gu = "prepared";
function jl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function Vg(e, t) {
  var n = {
    animationend: jl("Animation", "AnimationEnd"),
    transitionend: jl("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var Hg = Vg(Ut(), typeof window < "u" ? window : {}), qu = {};
if (Ut()) {
  var Bg = document.createElement("div");
  qu = Bg.style;
}
var Da = {};
function Ku(e) {
  if (Da[e])
    return Da[e];
  var t = Hg[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, a = 0; a < r; a += 1) {
      var o = n[a];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in qu)
        return Da[e] = t[o], Da[e];
    }
  return "";
}
var Xu = Ku("animationend"), Yu = Ku("transitionend"), Qu = !!(Xu && Yu), Ll = Xu || "animationend", Dl = Yu || "transitionend";
function zl(e, t) {
  if (!e)
    return null;
  if (We(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const kg = function(e) {
  var t = s.useRef(), n = s.useRef(e);
  n.current = e;
  var r = s.useCallback(function(i) {
    n.current(i);
  }, []);
  function a(i) {
    i && (i.removeEventListener(Dl, r), i.removeEventListener(Ll, r));
  }
  function o(i) {
    t.current && t.current !== i && a(t.current), i && i !== t.current && (i.addEventListener(Dl, r), i.addEventListener(Ll, r), t.current = i);
  }
  return s.useEffect(function() {
    return function() {
      a(t.current);
    };
  }, []), [o, a];
};
var Ju = Ut() ? s.useLayoutEffect : s.useEffect;
const Wg = function() {
  var e = s.useRef(null);
  function t() {
    ft.cancel(e.current);
  }
  function n(r) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var o = ft(function() {
      a <= 1 ? r({
        isCanceled: function() {
          return o !== e.current;
        }
      }) : n(r, a - 1);
    });
    e.current = o;
  }
  return s.useEffect(function() {
    return function() {
      t();
    };
  }, []), [n, t];
};
var Ug = [In, Fr, jr, Fs], Gg = [In, Gu], Zu = !1, qg = !0;
function ed(e) {
  return e === jr || e === Fs;
}
const Kg = function(e, t, n) {
  var r = Lr(Fl), a = G(r, 2), o = a[0], i = a[1], l = Wg(), c = G(l, 2), u = c[0], d = c[1];
  function f() {
    i(In, !0);
  }
  var v = t ? Gg : Ug;
  return Ju(function() {
    if (o !== Fl && o !== Fs) {
      var m = v.indexOf(o), h = v[m + 1], b = n(o);
      b === Zu ? i(h, !0) : h && u(function(p) {
        function g() {
          p.isCanceled() || i(h, !0);
        }
        b === !0 ? g() : Promise.resolve(b).then(g);
      });
    }
  }, [e, o]), s.useEffect(function() {
    return function() {
      d();
    };
  }, []), [f, o];
};
function Xg(e, t, n, r) {
  var a = r.motionEnter, o = a === void 0 ? !0 : a, i = r.motionAppear, l = i === void 0 ? !0 : i, c = r.motionLeave, u = c === void 0 ? !0 : c, d = r.motionDeadline, f = r.motionLeaveImmediately, v = r.onAppearPrepare, m = r.onEnterPrepare, h = r.onLeavePrepare, b = r.onAppearStart, p = r.onEnterStart, g = r.onLeaveStart, C = r.onAppearActive, S = r.onEnterActive, x = r.onLeaveActive, R = r.onAppearEnd, E = r.onEnterEnd, y = r.onLeaveEnd, $ = r.onVisibleChanged, I = Lr(), T = G(I, 2), N = T[0], F = T[1], A = Lr(rr), D = G(A, 2), z = D[0], M = D[1], O = Lr(null), P = G(O, 2), L = P[0], j = P[1], V = s.useRef(!1), k = s.useRef(null);
  function U() {
    return n();
  }
  var W = s.useRef(!1);
  function le() {
    M(rr, !0), j(null, !0);
  }
  function te(pe) {
    var se = U();
    if (!(pe && !pe.deadline && pe.target !== se)) {
      var ie = W.current, _e;
      z === Fa && ie ? _e = R == null ? void 0 : R(se, pe) : z === ja && ie ? _e = E == null ? void 0 : E(se, pe) : z === La && ie && (_e = y == null ? void 0 : y(se, pe)), z !== rr && ie && _e !== !1 && le();
    }
  }
  var X = kg(te), K = G(X, 1), ee = K[0], ce = function(se) {
    var ie, _e, He;
    switch (se) {
      case Fa:
        return ie = {}, _(ie, In, v), _(ie, Fr, b), _(ie, jr, C), ie;
      case ja:
        return _e = {}, _(_e, In, m), _(_e, Fr, p), _(_e, jr, S), _e;
      case La:
        return He = {}, _(He, In, h), _(He, Fr, g), _(He, jr, x), He;
      default:
        return {};
    }
  }, ge = s.useMemo(function() {
    return ce(z);
  }, [z]), ve = Kg(z, !e, function(pe) {
    if (pe === In) {
      var se = ge[In];
      return se ? se(U()) : Zu;
    }
    if (Oe in ge) {
      var ie;
      j(((ie = ge[Oe]) === null || ie === void 0 ? void 0 : ie.call(ge, U(), null)) || null);
    }
    return Oe === jr && (ee(U()), d > 0 && (clearTimeout(k.current), k.current = setTimeout(function() {
      te({
        deadline: !0
      });
    }, d))), Oe === Gu && le(), qg;
  }), ae = G(ve, 2), Ce = ae[0], Oe = ae[1], Ne = ed(Oe);
  W.current = Ne, Ju(function() {
    F(t);
    var pe = V.current;
    V.current = !0;
    var se;
    !pe && t && l && (se = Fa), pe && t && o && (se = ja), (pe && !t && u || !pe && f && !t && u) && (se = La);
    var ie = ce(se);
    se && (e || ie[In]) ? (M(se), Ce()) : M(rr);
  }, [t]), s.useEffect(function() {
    // Cancel appear
    (z === Fa && !l || // Cancel enter
    z === ja && !o || // Cancel leave
    z === La && !u) && M(rr);
  }, [l, o, u]), s.useEffect(function() {
    return function() {
      V.current = !1, clearTimeout(k.current);
    };
  }, []);
  var Ie = s.useRef(!1);
  s.useEffect(function() {
    N && (Ie.current = !0), N !== void 0 && z === rr && ((Ie.current || N) && ($ == null || $(N)), Ie.current = !0);
  }, [N, z]);
  var oe = L;
  return ge[In] && Oe === Fr && (oe = B({
    transition: "none"
  }, oe)), [z, Oe, oe, N ?? t];
}
function Yg(e) {
  var t = e;
  We(e) === "object" && (t = e.transitionSupport);
  function n(a, o) {
    return !!(a.motionName && t && o !== !1);
  }
  var r = /* @__PURE__ */ s.forwardRef(function(a, o) {
    var i = a.visible, l = i === void 0 ? !0 : i, c = a.removeOnLeave, u = c === void 0 ? !0 : c, d = a.forceRender, f = a.children, v = a.motionName, m = a.leavedClassName, h = a.eventProps, b = s.useContext(Uu), p = b.motion, g = n(a, p), C = s.useRef(), S = s.useRef();
    function x() {
      try {
        return C.current instanceof HTMLElement ? C.current : ra(S.current);
      } catch {
        return null;
      }
    }
    var R = Xg(g, l, x, a), E = G(R, 4), y = E[0], $ = E[1], I = E[2], T = E[3], N = s.useRef(T);
    T && (N.current = !0);
    var F = s.useCallback(function(j) {
      C.current = j, $s(o, j);
    }, [o]), A, D = B(B({}, h), {}, {
      visible: l
    });
    if (!f)
      A = null;
    else if (y === rr)
      T ? A = f(B({}, D), F) : !u && N.current && m ? A = f(B(B({}, D), {}, {
        className: m
      }), F) : d || !u && !m ? A = f(B(B({}, D), {}, {
        style: {
          display: "none"
        }
      }), F) : A = null;
    else {
      var z, M;
      $ === In ? M = "prepare" : ed($) ? M = "active" : $ === Fr && (M = "start");
      var O = zl(v, "".concat(y, "-").concat(M));
      A = f(B(B({}, D), {}, {
        className: he(zl(v, y), (z = {}, _(z, O, O && M), _(z, v, typeof v == "string"), z)),
        style: I
      }), F);
    }
    if (/* @__PURE__ */ s.isValidElement(A) && pa(A)) {
      var P = A, L = P.ref;
      L || (A = /* @__PURE__ */ s.cloneElement(A, {
        ref: F
      }));
    }
    return /* @__PURE__ */ s.createElement(zg, {
      ref: S
    }, A);
  });
  return r.displayName = "CSSMotion", r;
}
const ba = Yg(Qu);
var Bi = "add", ki = "keep", Wi = "remove", oi = "removed";
function Qg(e) {
  var t;
  return e && We(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, B(B({}, t), {}, {
    key: String(t.key)
  });
}
function Ui() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(Qg);
}
function Jg() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, a = t.length, o = Ui(e), i = Ui(t);
  o.forEach(function(u) {
    for (var d = !1, f = r; f < a; f += 1) {
      var v = i[f];
      if (v.key === u.key) {
        r < f && (n = n.concat(i.slice(r, f).map(function(m) {
          return B(B({}, m), {}, {
            status: Bi
          });
        })), r = f), n.push(B(B({}, v), {}, {
          status: ki
        })), r += 1, d = !0;
        break;
      }
    }
    d || n.push(B(B({}, u), {}, {
      status: Wi
    }));
  }), r < a && (n = n.concat(i.slice(r).map(function(u) {
    return B(B({}, u), {}, {
      status: Bi
    });
  })));
  var l = {};
  n.forEach(function(u) {
    var d = u.key;
    l[d] = (l[d] || 0) + 1;
  });
  var c = Object.keys(l).filter(function(u) {
    return l[u] > 1;
  });
  return c.forEach(function(u) {
    n = n.filter(function(d) {
      var f = d.key, v = d.status;
      return f !== u || v !== Wi;
    }), n.forEach(function(d) {
      d.key === u && (d.status = ki);
    });
  }), n;
}
var Zg = ["component", "children", "onVisibleChanged", "onAllRemoved"], eh = ["status"], th = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function nh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ba, n = /* @__PURE__ */ function(r) {
    Oo(o, r);
    var a = Io(o);
    function o() {
      var i;
      sn(this, o);
      for (var l = arguments.length, c = new Array(l), u = 0; u < l; u++)
        c[u] = arguments[u];
      return i = a.call.apply(a, [this].concat(c)), _(et(i), "state", {
        keyEntities: []
      }), _(et(i), "removeKey", function(d) {
        var f = i.state.keyEntities, v = f.map(function(m) {
          return m.key !== d ? m : B(B({}, m), {}, {
            status: oi
          });
        });
        return i.setState({
          keyEntities: v
        }), v.filter(function(m) {
          var h = m.status;
          return h !== oi;
        }).length;
      }), i;
    }
    return ln(o, [{
      key: "render",
      value: function() {
        var l = this, c = this.state.keyEntities, u = this.props, d = u.component, f = u.children, v = u.onVisibleChanged, m = u.onAllRemoved, h = vt(u, Zg), b = d || s.Fragment, p = {};
        return th.forEach(function(g) {
          p[g] = h[g], delete h[g];
        }), delete h.keys, /* @__PURE__ */ s.createElement(b, h, c.map(function(g, C) {
          var S = g.status, x = vt(g, eh), R = S === Bi || S === ki;
          return /* @__PURE__ */ s.createElement(t, je({}, p, {
            key: x.key,
            visible: R,
            eventProps: x,
            onVisibleChanged: function(y) {
              if (v == null || v(y, {
                key: x.key
              }), !y) {
                var $ = l.removeKey(x.key);
                $ === 0 && m && m();
              }
            }
          }), function(E, y) {
            return f(B(B({}, E), {}, {
              index: C
            }), y);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(l, c) {
        var u = l.keys, d = c.keyEntities, f = Ui(u), v = Jg(d, f);
        return {
          keyEntities: v.filter(function(m) {
            var h = d.find(function(b) {
              var p = b.key;
              return m.key === p;
            });
            return !(h && h.status === oi && m.status === Wi);
          })
        };
      }
    }]), o;
  }(s.Component);
  return _(n, "defaultProps", {
    component: "div"
  }), n;
}
nh(Qu);
function rh(e) {
  const {
    children: t
  } = e, [, n] = hr(), {
    motion: r
  } = n, a = s.useRef(!1);
  return a.current = a.current || r === !1, a.current ? /* @__PURE__ */ s.createElement(Dg, {
    motion: r
  }, t) : t;
}
const ah = () => null;
var oh = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const ih = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form", "select", "button"], sh = "ant";
let td;
function lh() {
  return td || sh;
}
function ch(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const uh = (e) => {
  let {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r
  } = e;
  t !== void 0 && (td = t), r && ch(r) && Cg(lh(), r);
}, dh = (e) => {
  const {
    children: t,
    csp: n,
    autoInsertSpaceInButton: r,
    alert: a,
    anchor: o,
    form: i,
    locale: l,
    componentSize: c,
    direction: u,
    space: d,
    virtual: f,
    dropdownMatchSelectWidth: v,
    popupMatchSelectWidth: m,
    popupOverflow: h,
    legacyLocale: b,
    parentContext: p,
    iconPrefixCls: g,
    theme: C,
    componentDisabled: S,
    segmented: x,
    statistic: R,
    spin: E,
    calendar: y,
    carousel: $,
    cascader: I,
    collapse: T,
    typography: N,
    checkbox: F,
    descriptions: A,
    divider: D,
    drawer: z,
    skeleton: M,
    steps: O,
    image: P,
    layout: L,
    list: j,
    mentions: V,
    modal: k,
    progress: U,
    result: W,
    slider: le,
    breadcrumb: te,
    menu: X,
    pagination: K,
    input: ee,
    empty: ce,
    badge: ge,
    radio: ve,
    rate: ae,
    switch: Ce,
    transfer: Oe,
    avatar: Ne,
    message: Ie,
    tag: oe,
    table: pe,
    card: se,
    tabs: ie,
    timeline: _e,
    timePicker: He,
    upload: Te,
    notification: ue,
    tree: de,
    colorPicker: Ae,
    datePicker: Ke,
    flex: Be,
    wave: tt,
    warning: De
  } = e, _t = s.useCallback((J, me) => {
    const {
      prefixCls: ke
    } = e;
    if (me)
      return me;
    const Ue = ke || p.getPrefixCls("");
    return J ? `${Ue}-${J}` : Ue;
  }, [p.getPrefixCls, e.prefixCls]), lt = g || p.iconPrefixCls || Vu, ot = n || p.csp;
  Wu(lt, ot);
  const Xe = jg(C, p.theme), ht = {
    csp: ot,
    autoInsertSpaceInButton: r,
    alert: a,
    anchor: o,
    locale: l || b,
    direction: u,
    space: d,
    virtual: f,
    popupMatchSelectWidth: m ?? v,
    popupOverflow: h,
    getPrefixCls: _t,
    iconPrefixCls: lt,
    theme: Xe,
    segmented: x,
    statistic: R,
    spin: E,
    calendar: y,
    carousel: $,
    cascader: I,
    collapse: T,
    typography: N,
    checkbox: F,
    descriptions: A,
    divider: D,
    drawer: z,
    skeleton: M,
    steps: O,
    image: P,
    input: ee,
    layout: L,
    list: j,
    mentions: V,
    modal: k,
    progress: U,
    result: W,
    slider: le,
    breadcrumb: te,
    menu: X,
    pagination: K,
    empty: ce,
    badge: ge,
    radio: ve,
    rate: ae,
    switch: Ce,
    transfer: Oe,
    avatar: Ne,
    message: Ie,
    tag: oe,
    table: pe,
    card: se,
    tabs: ie,
    timeline: _e,
    timePicker: He,
    upload: Te,
    notification: ue,
    tree: de,
    colorPicker: Ae,
    datePicker: Ke,
    flex: Be,
    wave: tt,
    warning: De
  }, at = Object.assign({}, p);
  Object.keys(ht).forEach((J) => {
    ht[J] !== void 0 && (at[J] = ht[J]);
  }), ih.forEach((J) => {
    const me = e[J];
    me && (at[J] = me);
  });
  const Ye = Eo(() => at, at, (J, me) => {
    const ke = Object.keys(J), Ue = Object.keys(me);
    return ke.length !== Ue.length || ke.some((Re) => J[Re] !== me[Re]);
  }), qe = s.useMemo(() => ({
    prefixCls: lt,
    csp: ot
  }), [lt, ot]);
  let fe = /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(ah, {
    dropdownMatchSelectWidth: v
  }), t);
  const be = s.useMemo(() => {
    var J, me, ke, Ue;
    return Ar(((J = Br.Form) === null || J === void 0 ? void 0 : J.defaultValidateMessages) || {}, ((ke = (me = Ye.locale) === null || me === void 0 ? void 0 : me.Form) === null || ke === void 0 ? void 0 : ke.defaultValidateMessages) || {}, ((Ue = Ye.form) === null || Ue === void 0 ? void 0 : Ue.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [Ye, i == null ? void 0 : i.validateMessages]);
  Object.keys(be).length > 0 && (fe = /* @__PURE__ */ s.createElement(Im.Provider, {
    value: be
  }, fe)), l && (fe = /* @__PURE__ */ s.createElement(Vm, {
    locale: l,
    _ANT_MARK__: Dm
  }, fe)), (lt || ot) && (fe = /* @__PURE__ */ s.createElement(_s.Provider, {
    value: qe
  }, fe)), c && (fe = /* @__PURE__ */ s.createElement(wg, {
    size: c
  }, fe)), fe = /* @__PURE__ */ s.createElement(rh, null, fe);
  const Me = s.useMemo(() => {
    const J = Xe || {}, {
      algorithm: me,
      token: ke,
      components: Ue
    } = J, Re = oh(J, ["algorithm", "token", "components"]), Q = me && (!Array.isArray(me) || me.length > 0) ? Pi(me) : Lu, Y = {};
    Object.entries(Ue || {}).forEach(($e) => {
      let [Le, Qe] = $e;
      const nt = Object.assign({}, Qe);
      "algorithm" in nt && (nt.algorithm === !0 ? nt.theme = Q : (Array.isArray(nt.algorithm) || typeof nt.algorithm == "function") && (nt.theme = Pi(nt.algorithm)), delete nt.algorithm), Y[Le] = nt;
    });
    const ne = Object.assign(Object.assign({}, va), ke);
    return Object.assign(Object.assign({}, Re), {
      theme: Q,
      token: ne,
      components: Y,
      override: Object.assign({
        override: ne
      }, Y)
    });
  }, [Xe]);
  return C && (fe = /* @__PURE__ */ s.createElement(zu.Provider, {
    value: Me
  }, fe)), Ye.warning && (fe = /* @__PURE__ */ s.createElement(Om.Provider, {
    value: Ye.warning
  }, fe)), S !== void 0 && (fe = /* @__PURE__ */ s.createElement(xg, {
    disabled: S
  }, fe)), /* @__PURE__ */ s.createElement(Ct.Provider, {
    value: Ye
  }, fe);
}, pr = (e) => {
  const t = s.useContext(Ct), n = s.useContext(As);
  return /* @__PURE__ */ s.createElement(dh, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
pr.ConfigContext = Ct;
pr.SizeContext = To;
pr.config = uh;
pr.useConfig = Eg;
Object.defineProperty(pr, "SizeContext", {
  get: () => To
});
function nd(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function fh(e) {
  return nd(e) instanceof ShadowRoot;
}
function eo(e) {
  return fh(e) ? nd(e) : null;
}
function vh(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function mh(e, t) {
  Wt(e, "[@ant-design/icons] ".concat(t));
}
function Vl(e) {
  return We(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (We(e.icon) === "object" || typeof e.icon == "function");
}
function Hl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[vh(n)] = r;
    }
    return t;
  }, {});
}
function Gi(e, t, n) {
  return n ? /* @__PURE__ */ Se.createElement(e.tag, B(B({
    key: t
  }, Hl(e.attrs)), n), (e.children || []).map(function(r, a) {
    return Gi(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : /* @__PURE__ */ Se.createElement(e.tag, B({
    key: t
  }, Hl(e.attrs)), (e.children || []).map(function(r, a) {
    return Gi(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function rd(e) {
  return vr(e)[0];
}
function ad(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var gh = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, hh = function(t) {
  var n = s.useContext(_s), r = n.csp, a = n.prefixCls, o = gh;
  a && (o = o.replace(/anticon/g, a)), s.useEffect(function() {
    var i = t.current, l = eo(i);
    Vr(o, "@ant-design-icons", {
      prepend: !0,
      csp: r,
      attachTo: l
    });
  }, []);
}, ph = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], ia = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function bh(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  ia.primaryColor = t, ia.secondaryColor = n || rd(t), ia.calculated = !!n;
}
function yh() {
  return B({}, ia);
}
var Ao = function(t) {
  var n = t.icon, r = t.className, a = t.onClick, o = t.style, i = t.primaryColor, l = t.secondaryColor, c = vt(t, ph), u = s.useRef(), d = ia;
  if (i && (d = {
    primaryColor: i,
    secondaryColor: l || rd(i)
  }), hh(u), mh(Vl(n), "icon should be icon definiton, but got ".concat(n)), !Vl(n))
    return null;
  var f = n;
  return f && typeof f.icon == "function" && (f = B(B({}, f), {}, {
    icon: f.icon(d.primaryColor, d.secondaryColor)
  })), Gi(f.icon, "svg-".concat(f.name), B(B({
    className: r,
    onClick: a,
    style: o,
    "data-icon": f.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, c), {}, {
    ref: u
  }));
};
Ao.displayName = "IconReact";
Ao.getTwoToneColors = yh;
Ao.setTwoToneColors = bh;
const js = Ao;
function od(e) {
  var t = ad(e), n = G(t, 2), r = n[0], a = n[1];
  return js.setTwoToneColors({
    primaryColor: r,
    secondaryColor: a
  });
}
function Sh() {
  var e = js.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Ch = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
od(rg.primary);
var Fo = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n, r = e.className, a = e.icon, o = e.spin, i = e.rotate, l = e.tabIndex, c = e.onClick, u = e.twoToneColor, d = vt(e, Ch), f = s.useContext(_s), v = f.prefixCls, m = v === void 0 ? "anticon" : v, h = f.rootClassName, b = he(h, m, (n = {}, _(n, "".concat(m, "-").concat(a.name), !!a.name), _(n, "".concat(m, "-spin"), !!o || a.name === "loading"), n), r), p = l;
  p === void 0 && c && (p = -1);
  var g = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, C = ad(u), S = G(C, 2), x = S[0], R = S[1];
  return /* @__PURE__ */ s.createElement("span", je({
    role: "img",
    "aria-label": a.name
  }, d, {
    ref: t,
    tabIndex: p,
    onClick: c,
    className: b
  }), /* @__PURE__ */ s.createElement(js, {
    icon: a,
    primaryColor: x,
    secondaryColor: R,
    style: g
  }));
});
Fo.displayName = "AntdIcon";
Fo.getTwoToneColor = Sh;
Fo.setTwoToneColor = od;
const Cn = Fo;
var xh = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" };
const wh = xh;
var Eh = function(t, n) {
  return /* @__PURE__ */ s.createElement(Cn, je({}, t, {
    ref: n,
    icon: wh
  }));
};
const Ls = /* @__PURE__ */ s.forwardRef(Eh);
var $h = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" };
const Rh = $h;
var Oh = function(t, n) {
  return /* @__PURE__ */ s.createElement(Cn, je({}, t, {
    ref: n,
    icon: Rh
  }));
};
const Ih = /* @__PURE__ */ s.forwardRef(Oh);
var Mh = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`, Ph = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, Nh = "".concat(Mh, " ").concat(Ph).split(/[\s\n]+/), Th = "aria-", _h = "data-";
function Bl(e, t) {
  return e.indexOf(t) === 0;
}
function to(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = B({}, t);
  var r = {};
  return Object.keys(e).forEach(function(a) {
    // Aria
    (n.aria && (a === "role" || Bl(a, Th)) || // Data
    n.data && Bl(a, _h) || // Attr
    n.attr && Nh.includes(a)) && (r[a] = e[a]);
  }), r;
}
const {
  isValidElement: no
} = fo;
function Ah(e) {
  return e && no(e) && e.type === s.Fragment;
}
function Fh(e, t, n) {
  return no(e) ? /* @__PURE__ */ s.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t;
}
function ro(e, t) {
  return Fh(e, e, t);
}
var Z = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function(t) {
    var n = t.keyCode;
    if (t.altKey && !t.ctrlKey || t.metaKey || // Function keys don't generate text
    n >= Z.F1 && n <= Z.F12)
      return !1;
    switch (n) {
      case Z.ALT:
      case Z.CAPS_LOCK:
      case Z.CONTEXT_MENU:
      case Z.CTRL:
      case Z.DOWN:
      case Z.END:
      case Z.ESC:
      case Z.HOME:
      case Z.INSERT:
      case Z.LEFT:
      case Z.MAC_FF_META:
      case Z.META:
      case Z.NUMLOCK:
      case Z.NUM_CENTER:
      case Z.PAGE_DOWN:
      case Z.PAGE_UP:
      case Z.PAUSE:
      case Z.PRINT_SCREEN:
      case Z.RIGHT:
      case Z.SHIFT:
      case Z.UP:
      case Z.WIN_KEY:
      case Z.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= Z.ZERO && t <= Z.NINE || t >= Z.NUM_ZERO && t <= Z.NUM_MULTIPLY || t >= Z.A && t <= Z.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case Z.SPACE:
      case Z.QUESTION_MARK:
      case Z.NUM_PLUS:
      case Z.NUM_MINUS:
      case Z.NUM_PERIOD:
      case Z.NUM_DIVISION:
      case Z.SEMICOLON:
      case Z.DASH:
      case Z.EQUALS:
      case Z.COMMA:
      case Z.PERIOD:
      case Z.SLASH:
      case Z.APOSTROPHE:
      case Z.SINGLE_QUOTE:
      case Z.OPEN_SQUARE_BRACKET:
      case Z.BACKSLASH:
      case Z.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, jh = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const Lh = jh;
var Dh = function(t, n) {
  return /* @__PURE__ */ s.createElement(Cn, je({}, t, {
    ref: n,
    icon: Lh
  }));
};
const id = /* @__PURE__ */ s.forwardRef(Dh);
function Gt() {
  Gt = function() {
    return t;
  };
  var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, a = Object.defineProperty || function(M, O, P) {
    M[O] = P.value;
  }, o = typeof Symbol == "function" ? Symbol : {}, i = o.iterator || "@@iterator", l = o.asyncIterator || "@@asyncIterator", c = o.toStringTag || "@@toStringTag";
  function u(M, O, P) {
    return Object.defineProperty(M, O, {
      value: P,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), M[O];
  }
  try {
    u({}, "");
  } catch {
    u = function(P, L, j) {
      return P[L] = j;
    };
  }
  function d(M, O, P, L) {
    var j = O && O.prototype instanceof g ? O : g, V = Object.create(j.prototype), k = new D(L || []);
    return a(V, "_invoke", {
      value: T(M, P, k)
    }), V;
  }
  function f(M, O, P) {
    try {
      return {
        type: "normal",
        arg: M.call(O, P)
      };
    } catch (L) {
      return {
        type: "throw",
        arg: L
      };
    }
  }
  t.wrap = d;
  var v = "suspendedStart", m = "suspendedYield", h = "executing", b = "completed", p = {};
  function g() {
  }
  function C() {
  }
  function S() {
  }
  var x = {};
  u(x, i, function() {
    return this;
  });
  var R = Object.getPrototypeOf, E = R && R(R(z([])));
  E && E !== n && r.call(E, i) && (x = E);
  var y = S.prototype = g.prototype = Object.create(x);
  function $(M) {
    ["next", "throw", "return"].forEach(function(O) {
      u(M, O, function(P) {
        return this._invoke(O, P);
      });
    });
  }
  function I(M, O) {
    function P(j, V, k, U) {
      var W = f(M[j], M, V);
      if (W.type !== "throw") {
        var le = W.arg, te = le.value;
        return te && We(te) == "object" && r.call(te, "__await") ? O.resolve(te.__await).then(function(X) {
          P("next", X, k, U);
        }, function(X) {
          P("throw", X, k, U);
        }) : O.resolve(te).then(function(X) {
          le.value = X, k(le);
        }, function(X) {
          return P("throw", X, k, U);
        });
      }
      U(W.arg);
    }
    var L;
    a(this, "_invoke", {
      value: function(V, k) {
        function U() {
          return new O(function(W, le) {
            P(V, k, W, le);
          });
        }
        return L = L ? L.then(U, U) : U();
      }
    });
  }
  function T(M, O, P) {
    var L = v;
    return function(j, V) {
      if (L === h)
        throw new Error("Generator is already running");
      if (L === b) {
        if (j === "throw")
          throw V;
        return {
          value: e,
          done: !0
        };
      }
      for (P.method = j, P.arg = V; ; ) {
        var k = P.delegate;
        if (k) {
          var U = N(k, P);
          if (U) {
            if (U === p)
              continue;
            return U;
          }
        }
        if (P.method === "next")
          P.sent = P._sent = P.arg;
        else if (P.method === "throw") {
          if (L === v)
            throw L = b, P.arg;
          P.dispatchException(P.arg);
        } else
          P.method === "return" && P.abrupt("return", P.arg);
        L = h;
        var W = f(M, O, P);
        if (W.type === "normal") {
          if (L = P.done ? b : m, W.arg === p)
            continue;
          return {
            value: W.arg,
            done: P.done
          };
        }
        W.type === "throw" && (L = b, P.method = "throw", P.arg = W.arg);
      }
    };
  }
  function N(M, O) {
    var P = O.method, L = M.iterator[P];
    if (L === e)
      return O.delegate = null, P === "throw" && M.iterator.return && (O.method = "return", O.arg = e, N(M, O), O.method === "throw") || P !== "return" && (O.method = "throw", O.arg = new TypeError("The iterator does not provide a '" + P + "' method")), p;
    var j = f(L, M.iterator, O.arg);
    if (j.type === "throw")
      return O.method = "throw", O.arg = j.arg, O.delegate = null, p;
    var V = j.arg;
    return V ? V.done ? (O[M.resultName] = V.value, O.next = M.nextLoc, O.method !== "return" && (O.method = "next", O.arg = e), O.delegate = null, p) : V : (O.method = "throw", O.arg = new TypeError("iterator result is not an object"), O.delegate = null, p);
  }
  function F(M) {
    var O = {
      tryLoc: M[0]
    };
    1 in M && (O.catchLoc = M[1]), 2 in M && (O.finallyLoc = M[2], O.afterLoc = M[3]), this.tryEntries.push(O);
  }
  function A(M) {
    var O = M.completion || {};
    O.type = "normal", delete O.arg, M.completion = O;
  }
  function D(M) {
    this.tryEntries = [{
      tryLoc: "root"
    }], M.forEach(F, this), this.reset(!0);
  }
  function z(M) {
    if (M || M === "") {
      var O = M[i];
      if (O)
        return O.call(M);
      if (typeof M.next == "function")
        return M;
      if (!isNaN(M.length)) {
        var P = -1, L = function j() {
          for (; ++P < M.length; )
            if (r.call(M, P))
              return j.value = M[P], j.done = !1, j;
          return j.value = e, j.done = !0, j;
        };
        return L.next = L;
      }
    }
    throw new TypeError(We(M) + " is not iterable");
  }
  return C.prototype = S, a(y, "constructor", {
    value: S,
    configurable: !0
  }), a(S, "constructor", {
    value: C,
    configurable: !0
  }), C.displayName = u(S, c, "GeneratorFunction"), t.isGeneratorFunction = function(M) {
    var O = typeof M == "function" && M.constructor;
    return !!O && (O === C || (O.displayName || O.name) === "GeneratorFunction");
  }, t.mark = function(M) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(M, S) : (M.__proto__ = S, u(M, c, "GeneratorFunction")), M.prototype = Object.create(y), M;
  }, t.awrap = function(M) {
    return {
      __await: M
    };
  }, $(I.prototype), u(I.prototype, l, function() {
    return this;
  }), t.AsyncIterator = I, t.async = function(M, O, P, L, j) {
    j === void 0 && (j = Promise);
    var V = new I(d(M, O, P, L), j);
    return t.isGeneratorFunction(O) ? V : V.next().then(function(k) {
      return k.done ? k.value : V.next();
    });
  }, $(y), u(y, c, "Generator"), u(y, i, function() {
    return this;
  }), u(y, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(M) {
    var O = Object(M), P = [];
    for (var L in O)
      P.push(L);
    return P.reverse(), function j() {
      for (; P.length; ) {
        var V = P.pop();
        if (V in O)
          return j.value = V, j.done = !1, j;
      }
      return j.done = !0, j;
    };
  }, t.values = z, D.prototype = {
    constructor: D,
    reset: function(O) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(A), !O)
        for (var P in this)
          P.charAt(0) === "t" && r.call(this, P) && !isNaN(+P.slice(1)) && (this[P] = e);
    },
    stop: function() {
      this.done = !0;
      var O = this.tryEntries[0].completion;
      if (O.type === "throw")
        throw O.arg;
      return this.rval;
    },
    dispatchException: function(O) {
      if (this.done)
        throw O;
      var P = this;
      function L(le, te) {
        return k.type = "throw", k.arg = O, P.next = le, te && (P.method = "next", P.arg = e), !!te;
      }
      for (var j = this.tryEntries.length - 1; j >= 0; --j) {
        var V = this.tryEntries[j], k = V.completion;
        if (V.tryLoc === "root")
          return L("end");
        if (V.tryLoc <= this.prev) {
          var U = r.call(V, "catchLoc"), W = r.call(V, "finallyLoc");
          if (U && W) {
            if (this.prev < V.catchLoc)
              return L(V.catchLoc, !0);
            if (this.prev < V.finallyLoc)
              return L(V.finallyLoc);
          } else if (U) {
            if (this.prev < V.catchLoc)
              return L(V.catchLoc, !0);
          } else {
            if (!W)
              throw new Error("try statement without catch or finally");
            if (this.prev < V.finallyLoc)
              return L(V.finallyLoc);
          }
        }
      }
    },
    abrupt: function(O, P) {
      for (var L = this.tryEntries.length - 1; L >= 0; --L) {
        var j = this.tryEntries[L];
        if (j.tryLoc <= this.prev && r.call(j, "finallyLoc") && this.prev < j.finallyLoc) {
          var V = j;
          break;
        }
      }
      V && (O === "break" || O === "continue") && V.tryLoc <= P && P <= V.finallyLoc && (V = null);
      var k = V ? V.completion : {};
      return k.type = O, k.arg = P, V ? (this.method = "next", this.next = V.finallyLoc, p) : this.complete(k);
    },
    complete: function(O, P) {
      if (O.type === "throw")
        throw O.arg;
      return O.type === "break" || O.type === "continue" ? this.next = O.arg : O.type === "return" ? (this.rval = this.arg = O.arg, this.method = "return", this.next = "end") : O.type === "normal" && P && (this.next = P), p;
    },
    finish: function(O) {
      for (var P = this.tryEntries.length - 1; P >= 0; --P) {
        var L = this.tryEntries[P];
        if (L.finallyLoc === O)
          return this.complete(L.completion, L.afterLoc), A(L), p;
      }
    },
    catch: function(O) {
      for (var P = this.tryEntries.length - 1; P >= 0; --P) {
        var L = this.tryEntries[P];
        if (L.tryLoc === O) {
          var j = L.completion;
          if (j.type === "throw") {
            var V = j.arg;
            A(L);
          }
          return V;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(O, P, L) {
      return this.delegate = {
        iterator: z(O),
        resultName: P,
        nextLoc: L
      }, this.method === "next" && (this.arg = e), p;
    }
  }, t;
}
function kl(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i), c = l.value;
  } catch (u) {
    n(u);
    return;
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function br(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, a) {
      var o = e.apply(t, n);
      function i(c) {
        kl(o, r, a, i, l, "next", c);
      }
      function l(c) {
        kl(o, r, a, i, l, "throw", c);
      }
      i(void 0);
    });
  };
}
var ya = B({}, wf), zh = ya.version, Vh = ya.render, Hh = ya.unmountComponentAtNode, jo;
try {
  var Bh = Number((zh || "").split(".")[0]);
  Bh >= 18 && (jo = ya.createRoot);
} catch {
}
function Wl(e) {
  var t = ya.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && We(t) === "object" && (t.usingClientEntryPoint = e);
}
var ao = "__rc_react_root__";
function kh(e, t) {
  Wl(!0);
  var n = t[ao] || jo(t);
  Wl(!1), n.render(e), t[ao] = n;
}
function Wh(e, t) {
  Vh(e, t);
}
function Uh(e, t) {
  if (jo) {
    kh(e, t);
    return;
  }
  Wh(e, t);
}
function Gh(e) {
  return qi.apply(this, arguments);
}
function qi() {
  return qi = br(/* @__PURE__ */ Gt().mark(function e(t) {
    return Gt().wrap(function(r) {
      for (; ; )
        switch (r.prev = r.next) {
          case 0:
            return r.abrupt("return", Promise.resolve().then(function() {
              var a;
              (a = t[ao]) === null || a === void 0 || a.unmount(), delete t[ao];
            }));
          case 1:
          case "end":
            return r.stop();
        }
    }, e);
  })), qi.apply(this, arguments);
}
function qh(e) {
  Hh(e);
}
function Kh(e) {
  return Ki.apply(this, arguments);
}
function Ki() {
  return Ki = br(/* @__PURE__ */ Gt().mark(function e(t) {
    return Gt().wrap(function(r) {
      for (; ; )
        switch (r.prev = r.next) {
          case 0:
            if (jo === void 0) {
              r.next = 2;
              break;
            }
            return r.abrupt("return", Gh(t));
          case 2:
            qh(t);
          case 3:
          case "end":
            return r.stop();
        }
    }, e);
  })), Ki.apply(this, arguments);
}
const Xh = (e, t, n) => n !== void 0 ? n : `${e}-${t}`, sd = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), n = t.width, r = t.height;
      if (n || r)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var a = e.getBoundingClientRect(), o = a.width, i = a.height;
      if (o || i)
        return !0;
    }
  }
  return !1;
}, Yh = (e) => {
  const {
    componentCls: t,
    colorPrimary: n
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${n})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        },
        "&.wave-quick": {
          transition: [`box-shadow 0.3s ${e.motionEaseInOut}`, `opacity 0.35s ${e.motionEaseInOut}`].join(",")
        }
      }
    }
  };
}, Qh = Ln("Wave", (e) => [Yh(e)]);
function Jh(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function ii(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && Jh(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function Zh(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: r
  } = getComputedStyle(e);
  return ii(t) ? t : ii(n) ? n : ii(r) ? r : null;
}
const ld = "ant-wave-target";
function si(e) {
  return Number.isNaN(e) ? 0 : e;
}
const ep = (e) => {
  const {
    className: t,
    target: n,
    component: r
  } = e, a = s.useRef(null), [o, i] = s.useState(null), [l, c] = s.useState([]), [u, d] = s.useState(0), [f, v] = s.useState(0), [m, h] = s.useState(0), [b, p] = s.useState(0), [g, C] = s.useState(!1), S = {
    left: u,
    top: f,
    width: m,
    height: b,
    borderRadius: l.map((E) => `${E}px`).join(" ")
  };
  o && (S["--wave-color"] = o);
  function x() {
    const E = getComputedStyle(n);
    i(Zh(n));
    const y = E.position === "static", {
      borderLeftWidth: $,
      borderTopWidth: I
    } = E;
    d(y ? n.offsetLeft : si(-parseFloat($))), v(y ? n.offsetTop : si(-parseFloat(I))), h(n.offsetWidth), p(n.offsetHeight);
    const {
      borderTopLeftRadius: T,
      borderTopRightRadius: N,
      borderBottomLeftRadius: F,
      borderBottomRightRadius: A
    } = E;
    c([T, N, A, F].map((D) => si(parseFloat(D))));
  }
  if (s.useEffect(() => {
    if (n) {
      const E = ft(() => {
        x(), C(!0);
      });
      let y;
      return typeof ResizeObserver < "u" && (y = new ResizeObserver(x), y.observe(n)), () => {
        ft.cancel(E), y == null || y.disconnect();
      };
    }
  }, []), !g)
    return null;
  const R = (r === "Checkbox" || r === "Radio") && (n == null ? void 0 : n.classList.contains(ld));
  return /* @__PURE__ */ s.createElement(ba, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (E, y) => {
      var $;
      if (y.deadline || y.propertyName === "opacity") {
        const I = ($ = a.current) === null || $ === void 0 ? void 0 : $.parentElement;
        Kh(I).then(() => {
          I == null || I.remove();
        });
      }
      return !1;
    }
  }, (E) => {
    let {
      className: y
    } = E;
    return /* @__PURE__ */ s.createElement("div", {
      ref: a,
      className: he(t, {
        "wave-quick": R
      }, y),
      style: S
    });
  });
}, tp = (e, t) => {
  var n;
  const {
    component: r
  } = t;
  if (r === "Checkbox" && !(!((n = e.querySelector("input")) === null || n === void 0) && n.checked))
    return;
  const a = document.createElement("div");
  a.style.position = "absolute", a.style.left = "0px", a.style.top = "0px", e == null || e.insertBefore(a, e == null ? void 0 : e.firstChild), Uh(/* @__PURE__ */ s.createElement(ep, Object.assign({}, t, {
    target: e
  })), a);
}, np = tp;
function rp(e, t, n) {
  const {
    wave: r
  } = s.useContext(Ct), [, a, o] = hr(), i = an((u) => {
    const d = e.current;
    if (r != null && r.disabled || !d)
      return;
    const f = d.querySelector(`.${ld}`) || d, {
      showEffect: v
    } = r || {};
    (v || np)(f, {
      className: t,
      token: a,
      component: n,
      event: u,
      hashId: o
    });
  }), l = s.useRef();
  return (u) => {
    ft.cancel(l.current), l.current = ft(() => {
      i(u);
    });
  };
}
const ap = (e) => {
  const {
    children: t,
    disabled: n,
    component: r
  } = e, {
    getPrefixCls: a
  } = s.useContext(Ct), o = s.useRef(null), i = a("wave"), [, l] = Qh(i), c = rp(o, he(i, l), r);
  if (Se.useEffect(() => {
    const d = o.current;
    if (!d || d.nodeType !== 1 || n)
      return;
    const f = (v) => {
      !sd(v.target) || // No need wave
      !d.getAttribute || d.getAttribute("disabled") || d.disabled || d.className.includes("disabled") || d.className.includes("-leave") || c(v);
    };
    return d.addEventListener("click", f, !0), () => {
      d.removeEventListener("click", f, !0);
    };
  }, [n]), !/* @__PURE__ */ Se.isValidElement(t))
    return t ?? null;
  const u = pa(t) ? jn(t.ref, o) : o;
  return ro(t, {
    ref: u
  });
}, op = ap, ip = (e) => {
  const t = Se.useContext(To);
  return Se.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, yr = ip, sp = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
}, lp = sp, cp = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${t}-item:empty`]: {
        display: "none"
      }
    }
  };
}, up = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      "&-gap-row-small": {
        rowGap: e.spaceGapSmallSize
      },
      "&-gap-row-middle": {
        rowGap: e.spaceGapMiddleSize
      },
      "&-gap-row-large": {
        rowGap: e.spaceGapLargeSize
      },
      "&-gap-col-small": {
        columnGap: e.spaceGapSmallSize
      },
      "&-gap-col-middle": {
        columnGap: e.spaceGapMiddleSize
      },
      "&-gap-col-large": {
        columnGap: e.spaceGapLargeSize
      }
    }
  };
}, cd = Ln("Space", (e) => {
  const t = bt(e, {
    spaceGapSmallSize: e.paddingXS,
    spaceGapMiddleSize: e.padding,
    spaceGapLargeSize: e.paddingLG
  });
  return [cp(t), up(t), lp(t)];
}, () => ({}), {
  // Space component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/40315
  resetStyle: !1
});
var ud = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Lo = /* @__PURE__ */ s.createContext(null), Sa = (e, t) => {
  const n = s.useContext(Lo), r = s.useMemo(() => {
    if (!n)
      return "";
    const {
      compactDirection: a,
      isFirstItem: o,
      isLastItem: i
    } = n, l = a === "vertical" ? "-vertical-" : "-";
    return he(`${e}-compact${l}item`, {
      [`${e}-compact${l}first-item`]: o,
      [`${e}-compact${l}last-item`]: i,
      [`${e}-compact${l}item-rtl`]: t === "rtl"
    });
  }, [e, t, n]);
  return {
    compactSize: n == null ? void 0 : n.compactSize,
    compactDirection: n == null ? void 0 : n.compactDirection,
    compactItemClassnames: r
  };
}, oo = (e) => {
  let {
    children: t
  } = e;
  return /* @__PURE__ */ s.createElement(Lo.Provider, {
    value: null
  }, t);
}, dp = (e) => {
  var {
    children: t
  } = e, n = ud(e, ["children"]);
  return /* @__PURE__ */ s.createElement(Lo.Provider, {
    value: n
  }, t);
}, fp = (e) => {
  const {
    getPrefixCls: t,
    direction: n
  } = s.useContext(Ct), {
    size: r,
    direction: a,
    block: o,
    prefixCls: i,
    className: l,
    rootClassName: c,
    children: u
  } = e, d = ud(e, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]), f = yr((S) => r ?? S), v = t("space-compact", i), [m, h] = cd(v), b = he(v, h, {
    [`${v}-rtl`]: n === "rtl",
    [`${v}-block`]: o,
    [`${v}-vertical`]: a === "vertical"
  }, l, c), p = s.useContext(Lo), g = Jn(u), C = s.useMemo(() => g.map((S, x) => {
    const R = S && S.key || `${v}-item-${x}`;
    return /* @__PURE__ */ s.createElement(dp, {
      key: R,
      compactSize: f,
      compactDirection: a,
      isFirstItem: x === 0 && (!p || (p == null ? void 0 : p.isFirstItem)),
      isLastItem: x === g.length - 1 && (!p || (p == null ? void 0 : p.isLastItem))
    }, S);
  }), [r, g, p]);
  return g.length === 0 ? null : m(/* @__PURE__ */ s.createElement("div", Object.assign({
    className: b
  }, d), C));
};
var vp = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const dd = /* @__PURE__ */ s.createContext(void 0), mp = (e) => {
  const {
    getPrefixCls: t,
    direction: n
  } = s.useContext(Ct), {
    prefixCls: r,
    size: a,
    className: o
  } = e, i = vp(e, ["prefixCls", "size", "className"]), l = t("btn-group", r), [, , c] = hr();
  let u = "";
  switch (a) {
    case "large":
      u = "lg";
      break;
    case "small":
      u = "sm";
      break;
  }
  const d = he(l, {
    [`${l}-${u}`]: u,
    [`${l}-rtl`]: n === "rtl"
  }, o, c);
  return /* @__PURE__ */ s.createElement(dd.Provider, {
    value: a
  }, /* @__PURE__ */ s.createElement("div", Object.assign({}, i, {
    className: d
  })));
}, gp = mp, Ul = /^[\u4e00-\u9fa5]{2}$/, Xi = Ul.test.bind(Ul);
function Gl(e) {
  return typeof e == "string";
}
function li(e) {
  return e === "text" || e === "link";
}
function hp(e, t) {
  if (e == null)
    return;
  const n = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && Gl(e.type) && Xi(e.props.children) ? ro(e, {
    children: e.props.children.split("").join(n)
  }) : Gl(e) ? Xi(e) ? /* @__PURE__ */ Se.createElement("span", null, e.split("").join(n)) : /* @__PURE__ */ Se.createElement("span", null, e) : Ah(e) ? /* @__PURE__ */ Se.createElement("span", null, e) : e;
}
function pp(e, t) {
  let n = !1;
  const r = [];
  return Se.Children.forEach(e, (a) => {
    const o = typeof a, i = o === "string" || o === "number";
    if (n && i) {
      const l = r.length - 1, c = r[l];
      r[l] = `${c}${a}`;
    } else
      r.push(a);
    n = i;
  }), Se.Children.map(r, (a) => hp(a, t));
}
const bp = /* @__PURE__ */ s.forwardRef((e, t) => {
  const {
    className: n,
    style: r,
    children: a,
    prefixCls: o
  } = e, i = he(`${o}-icon`, n);
  return /* @__PURE__ */ Se.createElement("span", {
    ref: t,
    className: i,
    style: r
  }, a);
}), fd = bp, ql = /* @__PURE__ */ s.forwardRef((e, t) => {
  let {
    prefixCls: n,
    className: r,
    style: a,
    iconClassName: o
  } = e;
  const i = he(`${n}-loading-icon`, r);
  return /* @__PURE__ */ Se.createElement(fd, {
    prefixCls: n,
    className: i,
    style: a,
    ref: t
  }, /* @__PURE__ */ Se.createElement(id, {
    className: o
  }));
}), ci = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), ui = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), yp = (e) => {
  const {
    prefixCls: t,
    loading: n,
    existIcon: r,
    className: a,
    style: o
  } = e, i = !!n;
  return r ? /* @__PURE__ */ Se.createElement(ql, {
    prefixCls: t,
    className: a,
    style: o
  }) : /* @__PURE__ */ Se.createElement(ba, {
    visible: i,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    motionLeave: i,
    removeOnLeave: !0,
    onAppearStart: ci,
    onAppearActive: ui,
    onEnterStart: ci,
    onEnterActive: ui,
    onLeaveStart: ui,
    onLeaveActive: ci
  }, (l, c) => {
    let {
      className: u,
      style: d
    } = l;
    return /* @__PURE__ */ Se.createElement(ql, {
      prefixCls: t,
      className: a,
      style: Object.assign(Object.assign({}, o), d),
      ref: c,
      iconClassName: u
    });
  });
}, Sp = yp, Kl = (e, t) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: t
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: t
        }
      }
    }
  }
}), Cp = (e) => {
  const {
    componentCls: t,
    fontSize: n,
    lineWidth: r,
    groupBorderColor: a,
    colorErrorHover: o
  } = e;
  return {
    [`${t}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${t}`]: {
          "&:not(:last-child)": {
            [`&, & > ${t}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: -r,
            [`&, & > ${t}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [t]: {
          position: "relative",
          zIndex: 1,
          "&:hover,\n          &:focus,\n          &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${t}-icon-only`]: {
          fontSize: n
        }
      },
      // Border Color
      Kl(`${t}-primary`, a),
      Kl(`${t}-danger`, o)
    ]
  };
}, xp = Cp, wp = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    fontWeight: r
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-block",
      fontWeight: r,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      backgroundColor: "transparent",
      border: `${e.lineWidth}px ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      lineHeight: e.lineHeight,
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      "> span": {
        display: "inline-block"
      },
      [`${t}-icon`]: {
        lineHeight: 0
      },
      // Leave a space between icon and text.
      [`> ${n} + span, > span + ${n}`]: {
        marginInlineStart: e.marginXS
      },
      [`&:not(${t}-icon-only) > ${t}-icon`]: {
        [`&${t}-loading-icon, &:not(:last-child)`]: {
          marginInlineEnd: e.marginXS
        }
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": Object.assign({}, Ng(e)),
      [`&${t}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${t}-two-chinese-chars > *:not(${n})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      // make `btn-icon-only` not too narrow
      [`&-icon-only${t}-compact-item`]: {
        flex: "none"
      },
      // Special styles for Primary Button
      [`&-compact-item${t}-primary`]: {
        [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: -e.lineWidth,
            insetInlineStart: -e.lineWidth,
            display: "inline-block",
            width: e.lineWidth,
            height: `calc(100% + ${e.lineWidth * 2}px)`,
            backgroundColor: e.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: -e.lineWidth,
              insetInlineStart: -e.lineWidth,
              display: "inline-block",
              width: `calc(100% + ${e.lineWidth * 2}px)`,
              height: e.lineWidth,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, Wn = (e, t, n) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": n
  }
}), Ep = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), $p = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.controlHeight / 2,
  paddingInlineEnd: e.controlHeight / 2
}), Rp = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  boxShadow: "none"
}), ma = (e, t, n, r, a, o, i, l) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: n || void 0,
    backgroundColor: t,
    borderColor: r || void 0,
    boxShadow: "none"
  }, Wn(e, Object.assign({
    backgroundColor: t
  }, i), Object.assign({
    backgroundColor: t
  }, l))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: a || void 0,
      borderColor: o || void 0
    }
  })
}), Ds = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, Rp(e))
}), vd = (e) => Object.assign({}, Ds(e)), io = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), md = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, vd(e)), {
  backgroundColor: e.defaultBg,
  borderColor: e.defaultBorderColor,
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}), Wn(e.componentCls, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), ma(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: e.colorError,
    borderColor: e.colorError
  }, Wn(e.componentCls, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), ma(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), Ds(e))
}), Op = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, vd(e)), {
  color: e.primaryColor,
  backgroundColor: e.colorPrimary,
  boxShadow: e.primaryShadow
}), Wn(e.componentCls, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryActive
})), ma(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    backgroundColor: e.colorError,
    boxShadow: e.dangerShadow,
    color: e.dangerColor
  }, Wn(e.componentCls, {
    backgroundColor: e.colorErrorHover
  }, {
    backgroundColor: e.colorErrorActive
  })), ma(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), Ds(e))
}), Ip = (e) => Object.assign(Object.assign({}, md(e)), {
  borderStyle: "dashed"
}), Mp = (e) => Object.assign(Object.assign(Object.assign({
  color: e.colorLink
}, Wn(e.componentCls, {
  color: e.colorLinkHover,
  backgroundColor: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), io(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, Wn(e.componentCls, {
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), io(e))
}), Pp = (e) => Object.assign(Object.assign(Object.assign({}, Wn(e.componentCls, {
  color: e.colorText,
  backgroundColor: e.textHoverBg
}, {
  color: e.colorText,
  backgroundColor: e.colorBgTextActive
})), io(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, io(e)), Wn(e.componentCls, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }))
}), Np = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: md(e),
    [`${t}-primary`]: Op(e),
    [`${t}-dashed`]: Ip(e),
    [`${t}-link`]: Mp(e),
    [`${t}-text`]: Pp(e),
    [`${t}-ghost`]: ma(e.componentCls, e.ghostBg, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)
  };
}, zs = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: n,
    controlHeight: r,
    fontSize: a,
    lineHeight: o,
    lineWidth: i,
    borderRadius: l,
    buttonPaddingHorizontal: c,
    iconCls: u
  } = e, d = Math.max(0, (r - a * o) / 2 - i), f = `${n}-icon-only`;
  return [
    // Size
    {
      [`${n}${t}`]: {
        fontSize: a,
        height: r,
        padding: `${d}px ${c}px`,
        borderRadius: l,
        [`&${f}`]: {
          width: r,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          [`&${n}-round`]: {
            width: "auto"
          },
          [u]: {
            fontSize: e.buttonIconOnlyFontSize
          }
        },
        // Loading
        [`&${n}-loading`]: {
          opacity: e.opacityLoading,
          cursor: "default"
        },
        [`${n}-loading-icon`]: {
          transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${n}${n}-circle${t}`]: Ep(e)
    },
    {
      [`${n}${n}-round${t}`]: $p(e)
    }
  ];
}, Tp = (e) => zs(bt(e, {
  fontSize: e.contentFontSize
})), _p = (e) => {
  const t = bt(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return zs(t, `${e.componentCls}-sm`);
}, Ap = (e) => {
  const t = bt(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return zs(t, `${e.componentCls}-lg`);
}, Fp = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`&${t}-block`]: {
        width: "100%"
      }
    }
  };
}, gd = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: n
  } = e;
  return bt(e, {
    buttonPaddingHorizontal: t,
    buttonIconOnlyFontSize: n
  });
}, hd = (e) => ({
  fontWeight: 400,
  defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
  primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
  dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
  primaryColor: e.colorTextLightSolid,
  dangerColor: e.colorTextLightSolid,
  borderColorDisabled: e.colorBorder,
  defaultGhostColor: e.colorBgContainer,
  ghostBg: "transparent",
  defaultGhostBorderColor: e.colorBgContainer,
  paddingInline: e.paddingContentHorizontal - e.lineWidth,
  paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
  paddingInlineSM: 8 - e.lineWidth,
  onlyIconSize: e.fontSizeLG,
  onlyIconSizeSM: e.fontSizeLG - 2,
  onlyIconSizeLG: e.fontSizeLG + 2,
  groupBorderColor: e.colorPrimaryHover,
  linkHoverBg: "transparent",
  textHoverBg: e.colorBgTextHover,
  defaultColor: e.colorText,
  defaultBg: e.colorBgContainer,
  defaultBorderColor: e.colorBorder,
  defaultBorderColorDisabled: e.colorBorder,
  contentFontSize: e.fontSize,
  contentFontSizeSM: e.fontSize,
  contentFontSizeLG: e.fontSizeLG
}), jp = Ln("Button", (e) => {
  const t = gd(e);
  return [
    // Shared
    wp(t),
    // Size
    _p(t),
    Tp(t),
    Ap(t),
    // Block
    Fp(t),
    // Group (type, ghost, danger, loading)
    Np(t),
    // Button Group
    xp(t)
  ];
}, hd);
function Lp(e, t, n) {
  const {
    focusElCls: r,
    focus: a,
    borderElCls: o
  } = n, i = o ? "> *" : "", l = ["hover", a ? "focus" : null, "active"].filter(Boolean).map((c) => `&:${c} ${i}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: -e.lineWidth
    },
    "&-item": Object.assign(Object.assign({
      [l]: {
        zIndex: 2
      }
    }, r ? {
      [`&${r}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${i}`]: {
        zIndex: 0
      }
    })
  };
}
function Dp(e, t, n) {
  const {
    borderElCls: r
  } = n, a = r ? `> ${r}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${a}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${a}, &${e}-sm ${a}, &${e}-lg ${a}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${a}, &${e}-sm ${a}, &${e}-lg ${a}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function Do(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: n
  } = e, r = `${n}-compact`;
  return {
    [r]: Object.assign(Object.assign({}, Lp(e, r, t)), Dp(n, r, t))
  };
}
function zp(e, t) {
  return {
    // border collapse
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: -e.lineWidth
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function Vp(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function Hp(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, zp(e, t)), Vp(e.componentCls, t))
  };
}
const Bp = Fg(["Button", "compact"], (e) => {
  const t = gd(e);
  return [
    // Space Compact
    Do(t),
    Hp(t)
  ];
}, hd);
var kp = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function Wp(e) {
  if (typeof e == "object" && e) {
    let t = e == null ? void 0 : e.delay;
    return t = !Number.isNaN(t) && typeof t == "number" ? t : 0, {
      loading: t <= 0,
      delay: t
    };
  }
  return {
    loading: !!e,
    delay: 0
  };
}
const Up = (e, t) => {
  var n, r;
  const {
    loading: a = !1,
    prefixCls: o,
    type: i = "default",
    danger: l,
    shape: c = "default",
    size: u,
    styles: d,
    disabled: f,
    className: v,
    rootClassName: m,
    children: h,
    icon: b,
    ghost: p = !1,
    block: g = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: C = "button",
    classNames: S,
    style: x = {}
  } = e, R = kp(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]), {
    getPrefixCls: E,
    autoInsertSpaceInButton: y,
    direction: $,
    button: I
  } = s.useContext(Ct), T = E("btn", o), [N, F] = jp(T), A = s.useContext(Kr), D = f ?? A, z = s.useContext(dd), M = s.useMemo(() => Wp(a), [a]), [O, P] = s.useState(M.loading), [L, j] = s.useState(!1), k = jn(t, /* @__PURE__ */ s.createRef()), U = s.Children.count(h) === 1 && !b && !li(i);
  s.useEffect(() => {
    let se = null;
    M.delay > 0 ? se = setTimeout(() => {
      se = null, P(!0);
    }, M.delay) : P(M.loading);
    function ie() {
      se && (clearTimeout(se), se = null);
    }
    return ie;
  }, [M]), s.useEffect(() => {
    if (!k || !k.current || y === !1)
      return;
    const se = k.current.textContent;
    U && Xi(se) ? L || j(!0) : L && j(!1);
  }, [k]);
  const W = (se) => {
    const {
      onClick: ie
    } = e;
    if (O || D) {
      se.preventDefault();
      return;
    }
    ie == null || ie(se);
  }, le = y !== !1, {
    compactSize: te,
    compactItemClassnames: X
  } = Sa(T, $), K = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, ee = yr((se) => {
    var ie, _e;
    return (_e = (ie = u ?? te) !== null && ie !== void 0 ? ie : z) !== null && _e !== void 0 ? _e : se;
  }), ce = ee && K[ee] || "", ge = O ? "loading" : b, ve = Gr(R, ["navigate"]), ae = he(T, F, {
    [`${T}-${c}`]: c !== "default" && c,
    [`${T}-${i}`]: i,
    [`${T}-${ce}`]: ce,
    [`${T}-icon-only`]: !h && h !== 0 && !!ge,
    [`${T}-background-ghost`]: p && !li(i),
    [`${T}-loading`]: O,
    [`${T}-two-chinese-chars`]: L && le && !O,
    [`${T}-block`]: g,
    [`${T}-dangerous`]: !!l,
    [`${T}-rtl`]: $ === "rtl"
  }, X, v, m, I == null ? void 0 : I.className), Ce = Object.assign(Object.assign({}, I == null ? void 0 : I.style), x), Oe = he(S == null ? void 0 : S.icon, (n = I == null ? void 0 : I.classNames) === null || n === void 0 ? void 0 : n.icon), Ne = Object.assign(Object.assign({}, (d == null ? void 0 : d.icon) || {}), ((r = I == null ? void 0 : I.styles) === null || r === void 0 ? void 0 : r.icon) || {}), Ie = b && !O ? /* @__PURE__ */ Se.createElement(fd, {
    prefixCls: T,
    className: Oe,
    style: Ne
  }, b) : /* @__PURE__ */ Se.createElement(Sp, {
    existIcon: !!b,
    prefixCls: T,
    loading: !!O
  }), oe = h || h === 0 ? pp(h, U && le) : null;
  if (ve.href !== void 0)
    return N(/* @__PURE__ */ Se.createElement("a", Object.assign({}, ve, {
      className: he(ae, {
        [`${T}-disabled`]: D
      }),
      style: Ce,
      onClick: W,
      ref: k
    }), Ie, oe));
  let pe = /* @__PURE__ */ Se.createElement("button", Object.assign({}, R, {
    type: C,
    className: ae,
    style: Ce,
    onClick: W,
    disabled: D,
    ref: k
  }), Ie, oe, X && /* @__PURE__ */ Se.createElement(Bp, {
    key: "compact",
    prefixCls: T
  }));
  return li(i) || (pe = /* @__PURE__ */ Se.createElement(op, {
    component: "Button",
    disabled: !!O
  }, pe)), N(pe);
}, Vs = /* @__PURE__ */ s.forwardRef(Up);
Vs.Group = gp;
Vs.__ANT_BUTTON = !0;
const Yi = Vs;
var pd = /* @__PURE__ */ s.createContext(null), Xl = [];
function Gp(e, t) {
  var n = s.useState(function() {
    if (!Ut())
      return null;
    var h = document.createElement("div");
    return h;
  }), r = G(n, 1), a = r[0], o = s.useRef(!1), i = s.useContext(pd), l = s.useState(Xl), c = G(l, 2), u = c[0], d = c[1], f = i || (o.current ? void 0 : function(h) {
    d(function(b) {
      var p = [h].concat(Pe(b));
      return p;
    });
  });
  function v() {
    a.parentElement || document.body.appendChild(a), o.current = !0;
  }
  function m() {
    var h;
    (h = a.parentElement) === null || h === void 0 || h.removeChild(a), o.current = !1;
  }
  return gt(function() {
    return e ? i ? i(v) : v() : m(), m;
  }, [e]), gt(function() {
    u.length && (u.forEach(function(h) {
      return h();
    }), d(Xl));
  }, [u]), [a, f];
}
var di;
function qp(e) {
  if (typeof document > "u")
    return 0;
  if (e || di === void 0) {
    var t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    var n = document.createElement("div"), r = n.style;
    r.position = "absolute", r.top = "0", r.left = "0", r.pointerEvents = "none", r.visibility = "hidden", r.width = "200px", r.height = "150px", r.overflow = "hidden", n.appendChild(t), document.body.appendChild(n);
    var a = t.offsetWidth;
    n.style.overflow = "scroll";
    var o = t.offsetWidth;
    a === o && (o = n.clientWidth), document.body.removeChild(n), di = a - o;
  }
  return di;
}
function Yl(e) {
  var t = e.match(/^(.*)px$/), n = Number(t == null ? void 0 : t[1]);
  return Number.isNaN(n) ? qp() : n;
}
function Kp(e) {
  if (typeof document > "u" || !e || !(e instanceof Element))
    return {
      width: 0,
      height: 0
    };
  var t = getComputedStyle(e, "::-webkit-scrollbar"), n = t.width, r = t.height;
  return {
    width: Yl(n),
    height: Yl(r)
  };
}
function Xp() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var Yp = "rc-util-locker-".concat(Date.now()), Ql = 0;
function Qp(e) {
  var t = !!e, n = s.useState(function() {
    return Ql += 1, "".concat(Yp, "_").concat(Ql);
  }), r = G(n, 1), a = r[0];
  gt(function() {
    if (t) {
      var o = Kp(document.body).width, i = Xp();
      Vr(`
html body {
  overflow-y: hidden;
  `.concat(i ? "width: calc(100% - ".concat(o, "px);") : "", `
}`), a);
    } else
      Ja(a);
    return function() {
      Ja(a);
    };
  }, [t, a]);
}
var Jl = !1;
function Jp(e) {
  return typeof e == "boolean" && (Jl = e), Jl;
}
var Zl = function(t) {
  return t === !1 ? !1 : !Ut() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, bd = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.open, r = e.autoLock, a = e.getContainer;
  e.debug;
  var o = e.autoDestroy, i = o === void 0 ? !0 : o, l = e.children, c = s.useState(n), u = G(c, 2), d = u[0], f = u[1], v = d || n;
  s.useEffect(function() {
    (i || n) && f(n);
  }, [n, i]);
  var m = s.useState(function() {
    return Zl(a);
  }), h = G(m, 2), b = h[0], p = h[1];
  s.useEffect(function() {
    var N = Zl(a);
    p(N ?? null);
  });
  var g = Gp(v && !b), C = G(g, 2), S = C[0], x = C[1], R = b ?? S;
  Qp(r && n && Ut() && (R === S || R === document.body));
  var E = null;
  if (l && pa(l) && t) {
    var y = l;
    E = y.ref;
  }
  var $ = $o(E, t);
  if (!v || !Ut() || b === void 0)
    return null;
  var I = R === !1 || Jp(), T = l;
  return t && (T = /* @__PURE__ */ s.cloneElement(l, {
    ref: $
  })), /* @__PURE__ */ s.createElement(pd.Provider, {
    value: x
  }, I ? T : /* @__PURE__ */ ua.createPortal(T, R));
});
function Zp() {
  var e = B({}, fo);
  return e.useId;
}
var ec = 0, tc = Zp();
const e0 = tc ? (
  // Use React `useId`
  function(t) {
    var n = tc();
    return t || n;
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var n = s.useState("ssr-id"), r = G(n, 2), a = r[0], o = r[1];
    return s.useEffect(function() {
      var i = ec;
      ec += 1, o("rc_unique_".concat(i));
    }, []), t || a;
  }
);
var ir = "RC_FORM_INTERNAL_HOOKS", st = function() {
  Wt(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, kr = /* @__PURE__ */ s.createContext({
  getFieldValue: st,
  getFieldsValue: st,
  getFieldError: st,
  getFieldWarning: st,
  getFieldsError: st,
  isFieldsTouched: st,
  isFieldTouched: st,
  isFieldValidating: st,
  isFieldsValidating: st,
  resetFields: st,
  setFields: st,
  setFieldValue: st,
  setFieldsValue: st,
  validateFields: st,
  submit: st,
  getInternalHooks: function() {
    return st(), {
      dispatch: st,
      initEntityValue: st,
      registerField: st,
      useSubscribe: st,
      setInitialValues: st,
      destroyForm: st,
      setCallbacks: st,
      registerWatch: st,
      getFields: st,
      setValidateMessages: st,
      setPreserve: st,
      getInitialValue: st
    };
  }
}), so = /* @__PURE__ */ s.createContext(null);
function Qi(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function t0(e) {
  return e && !!e._init;
}
function sr() {
  return sr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, sr.apply(this, arguments);
}
function n0(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ga(e, t);
}
function Ji(e) {
  return Ji = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ji(e);
}
function ga(e, t) {
  return ga = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, ga(e, t);
}
function r0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ga(e, t, n) {
  return r0() ? Ga = Reflect.construct.bind() : Ga = function(a, o, i) {
    var l = [null];
    l.push.apply(l, o);
    var c = Function.bind.apply(a, l), u = new c();
    return i && ga(u, i.prototype), u;
  }, Ga.apply(null, arguments);
}
function a0(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Zi(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Zi = function(r) {
    if (r === null || !a0(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, a);
    }
    function a() {
      return Ga(r, arguments, Ji(this).constructor);
    }
    return a.prototype = Object.create(r.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ga(a, r);
  }, Zi(e);
}
var o0 = /%[sdj%]/g, i0 = function() {
};
typeof process < "u" && process.env;
function es(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function on(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var a = 0, o = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var i = e.replace(o0, function(l) {
      if (l === "%%")
        return "%";
      if (a >= o)
        return l;
      switch (l) {
        case "%s":
          return String(n[a++]);
        case "%d":
          return Number(n[a++]);
        case "%j":
          try {
            return JSON.stringify(n[a++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return l;
      }
    });
    return i;
  }
  return e;
}
function s0(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Pt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || s0(t) && typeof e == "string" && !e);
}
function l0(e, t, n) {
  var r = [], a = 0, o = e.length;
  function i(l) {
    r.push.apply(r, l || []), a++, a === o && n(r);
  }
  e.forEach(function(l) {
    t(l, i);
  });
}
function nc(e, t, n) {
  var r = 0, a = e.length;
  function o(i) {
    if (i && i.length) {
      n(i);
      return;
    }
    var l = r;
    r = r + 1, l < a ? t(e[l], o) : n([]);
  }
  o([]);
}
function c0(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || []);
  }), t;
}
var rc = /* @__PURE__ */ function(e) {
  n0(t, e);
  function t(n, r) {
    var a;
    return a = e.call(this, "Async Validation Error") || this, a.errors = n, a.fields = r, a;
  }
  return t;
}(/* @__PURE__ */ Zi(Error));
function u0(e, t, n, r, a) {
  if (t.first) {
    var o = new Promise(function(v, m) {
      var h = function(g) {
        return r(g), g.length ? m(new rc(g, es(g))) : v(a);
      }, b = c0(e);
      nc(b, n, h);
    });
    return o.catch(function(v) {
      return v;
    }), o;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], l = Object.keys(e), c = l.length, u = 0, d = [], f = new Promise(function(v, m) {
    var h = function(p) {
      if (d.push.apply(d, p), u++, u === c)
        return r(d), d.length ? m(new rc(d, es(d))) : v(a);
    };
    l.length || (r(d), v(a)), l.forEach(function(b) {
      var p = e[b];
      i.indexOf(b) !== -1 ? nc(p, n, h) : l0(p, n, h);
    });
  });
  return f.catch(function(v) {
    return v;
  }), f;
}
function d0(e) {
  return !!(e && e.message !== void 0);
}
function f0(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function ac(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = f0(t, e.fullFields) : r = t[n.field || e.fullField], d0(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function oc(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == "object" && typeof e[n] == "object" ? e[n] = sr({}, e[n], r) : e[n] = r;
      }
  }
  return e;
}
var yd = function(t, n, r, a, o, i) {
  t.required && (!r.hasOwnProperty(t.field) || Pt(n, i || t.type)) && a.push(on(o.messages.required, t.fullField));
}, v0 = function(t, n, r, a, o) {
  (/^\s+$/.test(n) || n === "") && a.push(on(o.messages.whitespace, t.fullField));
}, za, m0 = function() {
  if (za)
    return za;
  var e = "[a-fA-F\\d:]", t = function(x) {
    return x && x.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", a = (`
(?:
(?:` + r + ":){7}(?:" + r + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + r + ":){6}(?:" + n + "|:" + r + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + r + ":){5}(?::" + n + "|(?::" + r + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + r + ":){4}(?:(?::" + r + "){0,1}:" + n + "|(?::" + r + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + r + ":){3}(?:(?::" + r + "){0,2}:" + n + "|(?::" + r + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + r + ":){2}(?:(?::" + r + "){0,3}:" + n + "|(?::" + r + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + r + ":){1}(?:(?::" + r + "){0,4}:" + n + "|(?::" + r + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + r + "){0,5}:" + n + "|(?::" + r + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), o = new RegExp("(?:^" + n + "$)|(?:^" + a + "$)"), i = new RegExp("^" + n + "$"), l = new RegExp("^" + a + "$"), c = function(x) {
    return x && x.exact ? o : new RegExp("(?:" + t(x) + n + t(x) + ")|(?:" + t(x) + a + t(x) + ")", "g");
  };
  c.v4 = function(S) {
    return S && S.exact ? i : new RegExp("" + t(S) + n + t(S), "g");
  }, c.v6 = function(S) {
    return S && S.exact ? l : new RegExp("" + t(S) + a + t(S), "g");
  };
  var u = "(?:(?:[a-z]+:)?//)", d = "(?:\\S+(?::\\S*)?@)?", f = c.v4().source, v = c.v6().source, m = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", h = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", b = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", p = "(?::\\d{2,5})?", g = '(?:[/?#][^\\s"]*)?', C = "(?:" + u + "|www\\.)" + d + "(?:localhost|" + f + "|" + v + "|" + m + h + b + ")" + p + g;
  return za = new RegExp("(?:^" + C + "$)", "i"), za;
}, ic = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, na = {
  integer: function(t) {
    return na.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return na.number(t) && !na.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return typeof t == "object" && !na.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(ic.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(m0());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(ic.hex);
  }
}, g0 = function(t, n, r, a, o) {
  if (t.required && n === void 0) {
    yd(t, n, r, a, o);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], l = t.type;
  i.indexOf(l) > -1 ? na[l](n) || a.push(on(o.messages.types[l], t.fullField, t.type)) : l && typeof n !== t.type && a.push(on(o.messages.types[l], t.fullField, t.type));
}, h0 = function(t, n, r, a, o) {
  var i = typeof t.len == "number", l = typeof t.min == "number", c = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = n, f = null, v = typeof n == "number", m = typeof n == "string", h = Array.isArray(n);
  if (v ? f = "number" : m ? f = "string" : h && (f = "array"), !f)
    return !1;
  h && (d = n.length), m && (d = n.replace(u, "_").length), i ? d !== t.len && a.push(on(o.messages[f].len, t.fullField, t.len)) : l && !c && d < t.min ? a.push(on(o.messages[f].min, t.fullField, t.min)) : c && !l && d > t.max ? a.push(on(o.messages[f].max, t.fullField, t.max)) : l && c && (d < t.min || d > t.max) && a.push(on(o.messages[f].range, t.fullField, t.min, t.max));
}, Rr = "enum", p0 = function(t, n, r, a, o) {
  t[Rr] = Array.isArray(t[Rr]) ? t[Rr] : [], t[Rr].indexOf(n) === -1 && a.push(on(o.messages[Rr], t.fullField, t[Rr].join(", ")));
}, b0 = function(t, n, r, a, o) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || a.push(on(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(n) || a.push(on(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, Je = {
  required: yd,
  whitespace: v0,
  type: g0,
  range: h0,
  enum: p0,
  pattern: b0
}, y0 = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Pt(n, "string") && !t.required)
      return r();
    Je.required(t, n, a, i, o, "string"), Pt(n, "string") || (Je.type(t, n, a, i, o), Je.range(t, n, a, i, o), Je.pattern(t, n, a, i, o), t.whitespace === !0 && Je.whitespace(t, n, a, i, o));
  }
  r(i);
}, S0 = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Pt(n) && !t.required)
      return r();
    Je.required(t, n, a, i, o), n !== void 0 && Je.type(t, n, a, i, o);
  }
  r(i);
}, C0 = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (n === "" && (n = void 0), Pt(n) && !t.required)
      return r();
    Je.required(t, n, a, i, o), n !== void 0 && (Je.type(t, n, a, i, o), Je.range(t, n, a, i, o));
  }
  r(i);
}, x0 = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Pt(n) && !t.required)
      return r();
    Je.required(t, n, a, i, o), n !== void 0 && Je.type(t, n, a, i, o);
  }
  r(i);
}, w0 = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Pt(n) && !t.required)
      return r();
    Je.required(t, n, a, i, o), Pt(n) || Je.type(t, n, a, i, o);
  }
  r(i);
}, E0 = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Pt(n) && !t.required)
      return r();
    Je.required(t, n, a, i, o), n !== void 0 && (Je.type(t, n, a, i, o), Je.range(t, n, a, i, o));
  }
  r(i);
}, $0 = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Pt(n) && !t.required)
      return r();
    Je.required(t, n, a, i, o), n !== void 0 && (Je.type(t, n, a, i, o), Je.range(t, n, a, i, o));
  }
  r(i);
}, R0 = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (n == null && !t.required)
      return r();
    Je.required(t, n, a, i, o, "array"), n != null && (Je.type(t, n, a, i, o), Je.range(t, n, a, i, o));
  }
  r(i);
}, O0 = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Pt(n) && !t.required)
      return r();
    Je.required(t, n, a, i, o), n !== void 0 && Je.type(t, n, a, i, o);
  }
  r(i);
}, I0 = "enum", M0 = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Pt(n) && !t.required)
      return r();
    Je.required(t, n, a, i, o), n !== void 0 && Je[I0](t, n, a, i, o);
  }
  r(i);
}, P0 = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Pt(n, "string") && !t.required)
      return r();
    Je.required(t, n, a, i, o), Pt(n, "string") || Je.pattern(t, n, a, i, o);
  }
  r(i);
}, N0 = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Pt(n, "date") && !t.required)
      return r();
    if (Je.required(t, n, a, i, o), !Pt(n, "date")) {
      var c;
      n instanceof Date ? c = n : c = new Date(n), Je.type(t, c, a, i, o), c && Je.range(t, c.getTime(), a, i, o);
    }
  }
  r(i);
}, T0 = function(t, n, r, a, o) {
  var i = [], l = Array.isArray(n) ? "array" : typeof n;
  Je.required(t, n, a, i, o, l), r(i);
}, fi = function(t, n, r, a, o) {
  var i = t.type, l = [], c = t.required || !t.required && a.hasOwnProperty(t.field);
  if (c) {
    if (Pt(n, i) && !t.required)
      return r();
    Je.required(t, n, a, l, o, i), Pt(n, i) || Je.type(t, n, a, l, o);
  }
  r(l);
}, _0 = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Pt(n) && !t.required)
      return r();
    Je.required(t, n, a, i, o);
  }
  r(i);
}, sa = {
  string: y0,
  method: S0,
  number: C0,
  boolean: x0,
  regexp: w0,
  integer: E0,
  float: $0,
  array: R0,
  object: O0,
  enum: M0,
  pattern: P0,
  date: N0,
  url: fi,
  hex: fi,
  email: fi,
  required: T0,
  any: _0
};
function ts() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var ns = ts(), Ca = /* @__PURE__ */ function() {
  function e(n) {
    this.rules = null, this._messages = ns, this.define(n);
  }
  var t = e.prototype;
  return t.define = function(r) {
    var a = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(o) {
      var i = r[o];
      a.rules[o] = Array.isArray(i) ? i : [i];
    });
  }, t.messages = function(r) {
    return r && (this._messages = oc(ts(), r)), this._messages;
  }, t.validate = function(r, a, o) {
    var i = this;
    a === void 0 && (a = {}), o === void 0 && (o = function() {
    });
    var l = r, c = a, u = o;
    if (typeof c == "function" && (u = c, c = {}), !this.rules || Object.keys(this.rules).length === 0)
      return u && u(null, l), Promise.resolve(l);
    function d(b) {
      var p = [], g = {};
      function C(x) {
        if (Array.isArray(x)) {
          var R;
          p = (R = p).concat.apply(R, x);
        } else
          p.push(x);
      }
      for (var S = 0; S < b.length; S++)
        C(b[S]);
      p.length ? (g = es(p), u(p, g)) : u(null, l);
    }
    if (c.messages) {
      var f = this.messages();
      f === ns && (f = ts()), oc(f, c.messages), c.messages = f;
    } else
      c.messages = this.messages();
    var v = {}, m = c.keys || Object.keys(this.rules);
    m.forEach(function(b) {
      var p = i.rules[b], g = l[b];
      p.forEach(function(C) {
        var S = C;
        typeof S.transform == "function" && (l === r && (l = sr({}, l)), g = l[b] = S.transform(g)), typeof S == "function" ? S = {
          validator: S
        } : S = sr({}, S), S.validator = i.getValidationMethod(S), S.validator && (S.field = b, S.fullField = S.fullField || b, S.type = i.getType(S), v[b] = v[b] || [], v[b].push({
          rule: S,
          value: g,
          source: l,
          field: b
        }));
      });
    });
    var h = {};
    return u0(v, c, function(b, p) {
      var g = b.rule, C = (g.type === "object" || g.type === "array") && (typeof g.fields == "object" || typeof g.defaultField == "object");
      C = C && (g.required || !g.required && b.value), g.field = b.field;
      function S(E, y) {
        return sr({}, y, {
          fullField: g.fullField + "." + E,
          fullFields: g.fullFields ? [].concat(g.fullFields, [E]) : [E]
        });
      }
      function x(E) {
        E === void 0 && (E = []);
        var y = Array.isArray(E) ? E : [E];
        !c.suppressWarning && y.length && e.warning("async-validator:", y), y.length && g.message !== void 0 && (y = [].concat(g.message));
        var $ = y.map(ac(g, l));
        if (c.first && $.length)
          return h[g.field] = 1, p($);
        if (!C)
          p($);
        else {
          if (g.required && !b.value)
            return g.message !== void 0 ? $ = [].concat(g.message).map(ac(g, l)) : c.error && ($ = [c.error(g, on(c.messages.required, g.field))]), p($);
          var I = {};
          g.defaultField && Object.keys(b.value).map(function(F) {
            I[F] = g.defaultField;
          }), I = sr({}, I, b.rule.fields);
          var T = {};
          Object.keys(I).forEach(function(F) {
            var A = I[F], D = Array.isArray(A) ? A : [A];
            T[F] = D.map(S.bind(null, F));
          });
          var N = new e(T);
          N.messages(c.messages), b.rule.options && (b.rule.options.messages = c.messages, b.rule.options.error = c.error), N.validate(b.value, b.rule.options || c, function(F) {
            var A = [];
            $ && $.length && A.push.apply(A, $), F && F.length && A.push.apply(A, F), p(A.length ? A : null);
          });
        }
      }
      var R;
      if (g.asyncValidator)
        R = g.asyncValidator(g, b.value, x, b.source, c);
      else if (g.validator) {
        try {
          R = g.validator(g, b.value, x, b.source, c);
        } catch (E) {
          console.error == null || console.error(E), c.suppressValidatorError || setTimeout(function() {
            throw E;
          }, 0), x(E.message);
        }
        R === !0 ? x() : R === !1 ? x(typeof g.message == "function" ? g.message(g.fullField || g.field) : g.message || (g.fullField || g.field) + " fails") : R instanceof Array ? x(R) : R instanceof Error && x(R.message);
      }
      R && R.then && R.then(function() {
        return x();
      }, function(E) {
        return x(E);
      });
    }, function(b) {
      d(b);
    }, l);
  }, t.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !sa.hasOwnProperty(r.type))
      throw new Error(on("Unknown rule type %s", r.type));
    return r.type || "string";
  }, t.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var a = Object.keys(r), o = a.indexOf("message");
    return o !== -1 && a.splice(o, 1), a.length === 1 && a[0] === "required" ? sa.required : sa[this.getType(r)] || void 0;
  }, e;
}();
Ca.register = function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  sa[t] = n;
};
Ca.warning = i0;
Ca.messages = ns;
Ca.validators = sa;
var nn = "'${name}' is not a valid ${type}", Sd = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: nn,
    method: nn,
    array: nn,
    object: nn,
    number: nn,
    date: nn,
    boolean: nn,
    integer: nn,
    float: nn,
    regexp: nn,
    email: nn,
    url: nn,
    hex: nn
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}, sc = Ca;
function A0(e, t) {
  return e.replace(/\$\{\w+\}/g, function(n) {
    var r = n.slice(2, -1);
    return t[r];
  });
}
var lc = "CODE_LOGIC_ERROR";
function rs(e, t, n, r, a) {
  return as.apply(this, arguments);
}
function as() {
  return as = br(/* @__PURE__ */ Gt().mark(function e(t, n, r, a, o) {
    var i, l, c, u, d, f, v, m, h;
    return Gt().wrap(function(p) {
      for (; ; )
        switch (p.prev = p.next) {
          case 0:
            return i = B({}, r), delete i.ruleIndex, sc.warning = function() {
            }, i.validator && (l = i.validator, i.validator = function() {
              try {
                return l.apply(void 0, arguments);
              } catch (g) {
                return console.error(g), Promise.reject(lc);
              }
            }), c = null, i && i.type === "array" && i.defaultField && (c = i.defaultField, delete i.defaultField), u = new sc(_({}, t, [i])), d = Ar(Sd, a.validateMessages), u.messages(d), f = [], p.prev = 10, p.next = 13, Promise.resolve(u.validate(_({}, t, n), B({}, a)));
          case 13:
            p.next = 18;
            break;
          case 15:
            p.prev = 15, p.t0 = p.catch(10), p.t0.errors && (f = p.t0.errors.map(function(g, C) {
              var S = g.message, x = S === lc ? d.default : S;
              return /* @__PURE__ */ s.isValidElement(x) ? (
                // Wrap ReactNode with `key`
                /* @__PURE__ */ s.cloneElement(x, {
                  key: "error_".concat(C)
                })
              ) : x;
            }));
          case 18:
            if (!(!f.length && c)) {
              p.next = 23;
              break;
            }
            return p.next = 21, Promise.all(n.map(function(g, C) {
              return rs("".concat(t, ".").concat(C), g, c, a, o);
            }));
          case 21:
            return v = p.sent, p.abrupt("return", v.reduce(function(g, C) {
              return [].concat(Pe(g), Pe(C));
            }, []));
          case 23:
            return m = B(B({}, r), {}, {
              name: t,
              enum: (r.enum || []).join(", ")
            }, o), h = f.map(function(g) {
              return typeof g == "string" ? A0(g, m) : g;
            }), p.abrupt("return", h);
          case 26:
          case "end":
            return p.stop();
        }
    }, e, null, [[10, 15]]);
  })), as.apply(this, arguments);
}
function F0(e, t, n, r, a, o) {
  var i = e.join("."), l = n.map(function(d, f) {
    var v = d.validator, m = B(B({}, d), {}, {
      ruleIndex: f
    });
    return v && (m.validator = function(h, b, p) {
      var g = !1, C = function() {
        for (var R = arguments.length, E = new Array(R), y = 0; y < R; y++)
          E[y] = arguments[y];
        Promise.resolve().then(function() {
          Wt(!g, "Your validator function has already return a promise. `callback` will be ignored."), g || p.apply(void 0, E);
        });
      }, S = v(h, b, C);
      g = S && typeof S.then == "function" && typeof S.catch == "function", Wt(g, "`callback` is deprecated. Please return a promise instead."), g && S.then(function() {
        p();
      }).catch(function(x) {
        p(x || " ");
      });
    }), m;
  }).sort(function(d, f) {
    var v = d.warningOnly, m = d.ruleIndex, h = f.warningOnly, b = f.ruleIndex;
    return !!v == !!h ? m - b : v ? 1 : -1;
  }), c;
  if (a === !0)
    c = new Promise(/* @__PURE__ */ function() {
      var d = br(/* @__PURE__ */ Gt().mark(function f(v, m) {
        var h, b, p;
        return Gt().wrap(function(C) {
          for (; ; )
            switch (C.prev = C.next) {
              case 0:
                h = 0;
              case 1:
                if (!(h < l.length)) {
                  C.next = 12;
                  break;
                }
                return b = l[h], C.next = 5, rs(i, t, b, r, o);
              case 5:
                if (p = C.sent, !p.length) {
                  C.next = 9;
                  break;
                }
                return m([{
                  errors: p,
                  rule: b
                }]), C.abrupt("return");
              case 9:
                h += 1, C.next = 1;
                break;
              case 12:
                v([]);
              case 13:
              case "end":
                return C.stop();
            }
        }, f);
      }));
      return function(f, v) {
        return d.apply(this, arguments);
      };
    }());
  else {
    var u = l.map(function(d) {
      return rs(i, t, d, r, o).then(function(f) {
        return {
          errors: f,
          rule: d
        };
      });
    });
    c = (a ? L0(u) : j0(u)).then(function(d) {
      return Promise.reject(d);
    });
  }
  return c.catch(function(d) {
    return d;
  }), c;
}
function j0(e) {
  return os.apply(this, arguments);
}
function os() {
  return os = br(/* @__PURE__ */ Gt().mark(function e(t) {
    return Gt().wrap(function(r) {
      for (; ; )
        switch (r.prev = r.next) {
          case 0:
            return r.abrupt("return", Promise.all(t).then(function(a) {
              var o, i = (o = []).concat.apply(o, Pe(a));
              return i;
            }));
          case 1:
          case "end":
            return r.stop();
        }
    }, e);
  })), os.apply(this, arguments);
}
function L0(e) {
  return is.apply(this, arguments);
}
function is() {
  return is = br(/* @__PURE__ */ Gt().mark(function e(t) {
    var n;
    return Gt().wrap(function(a) {
      for (; ; )
        switch (a.prev = a.next) {
          case 0:
            return n = 0, a.abrupt("return", new Promise(function(o) {
              t.forEach(function(i) {
                i.then(function(l) {
                  l.errors.length && o([l]), n += 1, n === t.length && o([]);
                });
              });
            }));
          case 2:
          case "end":
            return a.stop();
        }
    }, e);
  })), is.apply(this, arguments);
}
function wt(e) {
  return Qi(e);
}
function cc(e, t) {
  var n = {};
  return t.forEach(function(r) {
    var a = Mn(e, r);
    n = On(n, r, a);
  }), n;
}
function Dr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(r) {
    return Cd(t, r, n);
  });
}
function Cd(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !n && e.length !== t.length ? !1 : t.every(function(r, a) {
    return e[a] === r;
  });
}
function D0(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || We(e) !== "object" || We(t) !== "object")
    return !1;
  var n = Object.keys(e), r = Object.keys(t), a = new Set([].concat(n, r));
  return Pe(a).every(function(o) {
    var i = e[o], l = t[o];
    return typeof i == "function" && typeof l == "function" ? !0 : i === l;
  });
}
function z0(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && We(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function uc(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r)
    return e;
  var a = e[t], o = t - n;
  return o > 0 ? [].concat(Pe(e.slice(0, n)), [a], Pe(e.slice(n, t)), Pe(e.slice(t + 1, r))) : o < 0 ? [].concat(Pe(e.slice(0, t)), Pe(e.slice(t + 1, n + 1)), [a], Pe(e.slice(n + 1, r))) : e;
}
var V0 = ["name"], pn = [];
function dc(e, t, n, r, a, o) {
  return typeof e == "function" ? e(t, n, "source" in o ? {
    source: o.source
  } : {}) : r !== a;
}
var Hs = /* @__PURE__ */ function(e) {
  Oo(n, e);
  var t = Io(n);
  function n(r) {
    var a;
    if (sn(this, n), a = t.call(this, r), _(et(a), "state", {
      resetCount: 0
    }), _(et(a), "cancelRegisterFunc", null), _(et(a), "mounted", !1), _(et(a), "touched", !1), _(et(a), "dirty", !1), _(et(a), "validatePromise", void 0), _(et(a), "prevValidating", void 0), _(et(a), "errors", pn), _(et(a), "warnings", pn), _(et(a), "cancelRegister", function() {
      var c = a.props, u = c.preserve, d = c.isListField, f = c.name;
      a.cancelRegisterFunc && a.cancelRegisterFunc(d, u, wt(f)), a.cancelRegisterFunc = null;
    }), _(et(a), "getNamePath", function() {
      var c = a.props, u = c.name, d = c.fieldContext, f = d.prefixName, v = f === void 0 ? [] : f;
      return u !== void 0 ? [].concat(Pe(v), Pe(u)) : [];
    }), _(et(a), "getRules", function() {
      var c = a.props, u = c.rules, d = u === void 0 ? [] : u, f = c.fieldContext;
      return d.map(function(v) {
        return typeof v == "function" ? v(f) : v;
      });
    }), _(et(a), "refresh", function() {
      a.mounted && a.setState(function(c) {
        var u = c.resetCount;
        return {
          resetCount: u + 1
        };
      });
    }), _(et(a), "metaCache", null), _(et(a), "triggerMetaEvent", function(c) {
      var u = a.props.onMetaChange;
      if (u) {
        var d = B(B({}, a.getMeta()), {}, {
          destroy: c
        });
        fu(a.metaCache, d) || u(d), a.metaCache = d;
      } else
        a.metaCache = null;
    }), _(et(a), "onStoreChange", function(c, u, d) {
      var f = a.props, v = f.shouldUpdate, m = f.dependencies, h = m === void 0 ? [] : m, b = f.onReset, p = d.store, g = a.getNamePath(), C = a.getValue(c), S = a.getValue(p), x = u && Dr(u, g);
      switch (d.type === "valueUpdate" && d.source === "external" && C !== S && (a.touched = !0, a.dirty = !0, a.validatePromise = null, a.errors = pn, a.warnings = pn, a.triggerMetaEvent()), d.type) {
        case "reset":
          if (!u || x) {
            a.touched = !1, a.dirty = !1, a.validatePromise = void 0, a.errors = pn, a.warnings = pn, a.triggerMetaEvent(), b == null || b(), a.refresh();
            return;
          }
          break;
        case "remove": {
          if (v) {
            a.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var R = d.data;
          if (x) {
            "touched" in R && (a.touched = R.touched), "validating" in R && !("originRCField" in R) && (a.validatePromise = R.validating ? Promise.resolve([]) : null), "errors" in R && (a.errors = R.errors || pn), "warnings" in R && (a.warnings = R.warnings || pn), a.dirty = !0, a.triggerMetaEvent(), a.reRender();
            return;
          } else if ("value" in R && Dr(u, g, !0)) {
            a.reRender();
            return;
          }
          if (v && !g.length && dc(v, c, p, C, S, d)) {
            a.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var E = h.map(wt);
          if (E.some(function(y) {
            return Dr(d.relatedFields, y);
          })) {
            a.reRender();
            return;
          }
          break;
        }
        default:
          if (x || (!h.length || g.length || v) && dc(v, c, p, C, S, d)) {
            a.reRender();
            return;
          }
          break;
      }
      v === !0 && a.reRender();
    }), _(et(a), "validateRules", function(c) {
      var u = a.getNamePath(), d = a.getValue(), f = c || {}, v = f.triggerName, m = f.validateOnly, h = m === void 0 ? !1 : m, b = Promise.resolve().then(/* @__PURE__ */ br(/* @__PURE__ */ Gt().mark(function p() {
        var g, C, S, x, R, E, y;
        return Gt().wrap(function(I) {
          for (; ; )
            switch (I.prev = I.next) {
              case 0:
                if (a.mounted) {
                  I.next = 2;
                  break;
                }
                return I.abrupt("return", []);
              case 2:
                if (g = a.props, C = g.validateFirst, S = C === void 0 ? !1 : C, x = g.messageVariables, R = g.validateDebounce, E = a.getRules(), v && (E = E.filter(function(T) {
                  return T;
                }).filter(function(T) {
                  var N = T.validateTrigger;
                  if (!N)
                    return !0;
                  var F = Qi(N);
                  return F.includes(v);
                })), !(R && v)) {
                  I.next = 10;
                  break;
                }
                return I.next = 8, new Promise(function(T) {
                  setTimeout(T, R);
                });
              case 8:
                if (a.validatePromise === b) {
                  I.next = 10;
                  break;
                }
                return I.abrupt("return", []);
              case 10:
                return y = F0(u, d, E, c, S, x), y.catch(function(T) {
                  return T;
                }).then(function() {
                  var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : pn;
                  if (a.validatePromise === b) {
                    var N;
                    a.validatePromise = null;
                    var F = [], A = [];
                    (N = T.forEach) === null || N === void 0 || N.call(T, function(D) {
                      var z = D.rule.warningOnly, M = D.errors, O = M === void 0 ? pn : M;
                      z ? A.push.apply(A, Pe(O)) : F.push.apply(F, Pe(O));
                    }), a.errors = F, a.warnings = A, a.triggerMetaEvent(), a.reRender();
                  }
                }), I.abrupt("return", y);
              case 13:
              case "end":
                return I.stop();
            }
        }, p);
      })));
      return h || (a.validatePromise = b, a.dirty = !0, a.errors = pn, a.warnings = pn, a.triggerMetaEvent(), a.reRender()), b;
    }), _(et(a), "isFieldValidating", function() {
      return !!a.validatePromise;
    }), _(et(a), "isFieldTouched", function() {
      return a.touched;
    }), _(et(a), "isFieldDirty", function() {
      if (a.dirty || a.props.initialValue !== void 0)
        return !0;
      var c = a.props.fieldContext, u = c.getInternalHooks(ir), d = u.getInitialValue;
      return d(a.getNamePath()) !== void 0;
    }), _(et(a), "getErrors", function() {
      return a.errors;
    }), _(et(a), "getWarnings", function() {
      return a.warnings;
    }), _(et(a), "isListField", function() {
      return a.props.isListField;
    }), _(et(a), "isList", function() {
      return a.props.isList;
    }), _(et(a), "isPreserve", function() {
      return a.props.preserve;
    }), _(et(a), "getMeta", function() {
      a.prevValidating = a.isFieldValidating();
      var c = {
        touched: a.isFieldTouched(),
        validating: a.prevValidating,
        errors: a.errors,
        warnings: a.warnings,
        name: a.getNamePath(),
        validated: a.validatePromise === null
      };
      return c;
    }), _(et(a), "getOnlyChild", function(c) {
      if (typeof c == "function") {
        var u = a.getMeta();
        return B(B({}, a.getOnlyChild(c(a.getControlled(), u, a.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var d = Jn(c);
      return d.length !== 1 || !/* @__PURE__ */ s.isValidElement(d[0]) ? {
        child: d,
        isFunction: !1
      } : {
        child: d[0],
        isFunction: !1
      };
    }), _(et(a), "getValue", function(c) {
      var u = a.props.fieldContext.getFieldsValue, d = a.getNamePath();
      return Mn(c || u(!0), d);
    }), _(et(a), "getControlled", function() {
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = a.props, d = u.trigger, f = u.validateTrigger, v = u.getValueFromEvent, m = u.normalize, h = u.valuePropName, b = u.getValueProps, p = u.fieldContext, g = f !== void 0 ? f : p.validateTrigger, C = a.getNamePath(), S = p.getInternalHooks, x = p.getFieldsValue, R = S(ir), E = R.dispatch, y = a.getValue(), $ = b || function(F) {
        return _({}, h, F);
      }, I = c[d], T = B(B({}, c), $(y));
      T[d] = function() {
        a.touched = !0, a.dirty = !0, a.triggerMetaEvent();
        for (var F, A = arguments.length, D = new Array(A), z = 0; z < A; z++)
          D[z] = arguments[z];
        v ? F = v.apply(void 0, D) : F = z0.apply(void 0, [h].concat(D)), m && (F = m(F, y, x(!0))), E({
          type: "updateValue",
          namePath: C,
          value: F
        }), I && I.apply(void 0, D);
      };
      var N = Qi(g || []);
      return N.forEach(function(F) {
        var A = T[F];
        T[F] = function() {
          A && A.apply(void 0, arguments);
          var D = a.props.rules;
          D && D.length && E({
            type: "validateField",
            namePath: C,
            triggerName: F
          });
        };
      }), T;
    }), r.fieldContext) {
      var o = r.fieldContext.getInternalHooks, i = o(ir), l = i.initEntityValue;
      l(et(a));
    }
    return a;
  }
  return ln(n, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, o = a.shouldUpdate, i = a.fieldContext;
      if (this.mounted = !0, i) {
        var l = i.getInternalHooks, c = l(ir), u = c.registerField;
        this.cancelRegisterFunc = u(this);
      }
      o === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var a = this.state.resetCount, o = this.props.children, i = this.getOnlyChild(o), l = i.child, c = i.isFunction, u;
      return c ? u = l : /* @__PURE__ */ s.isValidElement(l) ? u = /* @__PURE__ */ s.cloneElement(l, this.getControlled(l.props)) : (Wt(!l, "`children` of Field is not validate ReactElement."), u = l), /* @__PURE__ */ s.createElement(s.Fragment, {
        key: a
      }, u);
    }
  }]), n;
}(s.Component);
_(Hs, "contextType", kr);
_(Hs, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function xd(e) {
  var t = e.name, n = vt(e, V0), r = s.useContext(kr), a = s.useContext(so), o = t !== void 0 ? wt(t) : void 0, i = "keep";
  return n.isListField || (i = "_".concat((o || []).join("_"))), /* @__PURE__ */ s.createElement(Hs, je({
    key: i,
    name: o,
    isListField: !!a
  }, n, {
    fieldContext: r
  }));
}
function H0(e) {
  var t = e.name, n = e.initialValue, r = e.children, a = e.rules, o = e.validateTrigger, i = e.isListField, l = s.useContext(kr), c = s.useContext(so), u = s.useRef({
    keys: [],
    id: 0
  }), d = u.current, f = s.useMemo(function() {
    var b = wt(l.prefixName) || [];
    return [].concat(Pe(b), Pe(wt(t)));
  }, [l.prefixName, t]), v = s.useMemo(function() {
    return B(B({}, l), {}, {
      prefixName: f
    });
  }, [l, f]), m = s.useMemo(function() {
    return {
      getKey: function(p) {
        var g = f.length, C = p[g];
        return [d.keys[C], p.slice(g + 1)];
      }
    };
  }, [f]);
  if (typeof r != "function")
    return Wt(!1, "Form.List only accepts function as children."), null;
  var h = function(p, g, C) {
    var S = C.source;
    return S === "internal" ? !1 : p !== g;
  };
  return /* @__PURE__ */ s.createElement(so.Provider, {
    value: m
  }, /* @__PURE__ */ s.createElement(kr.Provider, {
    value: v
  }, /* @__PURE__ */ s.createElement(xd, {
    name: [],
    shouldUpdate: h,
    rules: a,
    validateTrigger: o,
    initialValue: n,
    isList: !0,
    isListField: i ?? !!c
  }, function(b, p) {
    var g = b.value, C = g === void 0 ? [] : g, S = b.onChange, x = l.getFieldValue, R = function() {
      var I = x(f || []);
      return I || [];
    }, E = {
      add: function(I, T) {
        var N = R();
        T >= 0 && T <= N.length ? (d.keys = [].concat(Pe(d.keys.slice(0, T)), [d.id], Pe(d.keys.slice(T))), S([].concat(Pe(N.slice(0, T)), [I], Pe(N.slice(T))))) : (d.keys = [].concat(Pe(d.keys), [d.id]), S([].concat(Pe(N), [I]))), d.id += 1;
      },
      remove: function(I) {
        var T = R(), N = new Set(Array.isArray(I) ? I : [I]);
        N.size <= 0 || (d.keys = d.keys.filter(function(F, A) {
          return !N.has(A);
        }), S(T.filter(function(F, A) {
          return !N.has(A);
        })));
      },
      move: function(I, T) {
        if (I !== T) {
          var N = R();
          I < 0 || I >= N.length || T < 0 || T >= N.length || (d.keys = uc(d.keys, I, T), S(uc(N, I, T)));
        }
      }
    }, y = C || [];
    return Array.isArray(y) || (y = []), r(y.map(function($, I) {
      var T = d.keys[I];
      return T === void 0 && (d.keys[I] = d.id, T = d.keys[I], d.id += 1), {
        name: I,
        key: T,
        isListField: !0
      };
    }), E, p);
  })));
}
function B0(e) {
  var t = !1, n = e.length, r = [];
  return e.length ? new Promise(function(a, o) {
    e.forEach(function(i, l) {
      i.catch(function(c) {
        return t = !0, c;
      }).then(function(c) {
        n -= 1, r[l] = c, !(n > 0) && (t && o(r), a(r));
      });
    });
  }) : Promise.resolve([]);
}
var wd = "__@field_split__";
function vi(e) {
  return e.map(function(t) {
    return "".concat(We(t), ":").concat(t);
  }).join(wd);
}
var Or = /* @__PURE__ */ function() {
  function e() {
    sn(this, e), _(this, "kvs", /* @__PURE__ */ new Map());
  }
  return ln(e, [{
    key: "set",
    value: function(n, r) {
      this.kvs.set(vi(n), r);
    }
  }, {
    key: "get",
    value: function(n) {
      return this.kvs.get(vi(n));
    }
  }, {
    key: "update",
    value: function(n, r) {
      var a = this.get(n), o = r(a);
      o ? this.set(n, o) : this.delete(n);
    }
  }, {
    key: "delete",
    value: function(n) {
      this.kvs.delete(vi(n));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(n) {
      return Pe(this.kvs.entries()).map(function(r) {
        var a = G(r, 2), o = a[0], i = a[1], l = o.split(wd);
        return n({
          key: l.map(function(c) {
            var u = c.match(/^([^:]*):(.*)$/), d = G(u, 3), f = d[1], v = d[2];
            return f === "number" ? Number(v) : v;
          }),
          value: i
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var n = {};
      return this.map(function(r) {
        var a = r.key, o = r.value;
        return n[a.join(".")] = o, null;
      }), n;
    }
  }]), e;
}(), k0 = ["name"], W0 = /* @__PURE__ */ ln(function e(t) {
  var n = this;
  sn(this, e), _(this, "formHooked", !1), _(this, "forceRootUpdate", void 0), _(this, "subscribable", !0), _(this, "store", {}), _(this, "fieldEntities", []), _(this, "initialValues", {}), _(this, "callbacks", {}), _(this, "validateMessages", null), _(this, "preserve", null), _(this, "lastValidatePromise", null), _(this, "getForm", function() {
    return {
      getFieldValue: n.getFieldValue,
      getFieldsValue: n.getFieldsValue,
      getFieldError: n.getFieldError,
      getFieldWarning: n.getFieldWarning,
      getFieldsError: n.getFieldsError,
      isFieldsTouched: n.isFieldsTouched,
      isFieldTouched: n.isFieldTouched,
      isFieldValidating: n.isFieldValidating,
      isFieldsValidating: n.isFieldsValidating,
      resetFields: n.resetFields,
      setFields: n.setFields,
      setFieldValue: n.setFieldValue,
      setFieldsValue: n.setFieldsValue,
      validateFields: n.validateFields,
      submit: n.submit,
      _init: !0,
      getInternalHooks: n.getInternalHooks
    };
  }), _(this, "getInternalHooks", function(r) {
    return r === ir ? (n.formHooked = !0, {
      dispatch: n.dispatch,
      initEntityValue: n.initEntityValue,
      registerField: n.registerField,
      useSubscribe: n.useSubscribe,
      setInitialValues: n.setInitialValues,
      destroyForm: n.destroyForm,
      setCallbacks: n.setCallbacks,
      setValidateMessages: n.setValidateMessages,
      getFields: n.getFields,
      setPreserve: n.setPreserve,
      getInitialValue: n.getInitialValue,
      registerWatch: n.registerWatch
    }) : (Wt(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), _(this, "useSubscribe", function(r) {
    n.subscribable = r;
  }), _(this, "prevWithoutPreserves", null), _(this, "setInitialValues", function(r, a) {
    if (n.initialValues = r || {}, a) {
      var o, i = Ar(r, n.store);
      (o = n.prevWithoutPreserves) === null || o === void 0 || o.map(function(l) {
        var c = l.key;
        i = On(i, c, Mn(r, c));
      }), n.prevWithoutPreserves = null, n.updateStore(i);
    }
  }), _(this, "destroyForm", function() {
    var r = new Or();
    n.getFieldEntities(!0).forEach(function(a) {
      n.isMergedPreserve(a.isPreserve()) || r.set(a.getNamePath(), !0);
    }), n.prevWithoutPreserves = r;
  }), _(this, "getInitialValue", function(r) {
    var a = Mn(n.initialValues, r);
    return r.length ? Ar(a) : a;
  }), _(this, "setCallbacks", function(r) {
    n.callbacks = r;
  }), _(this, "setValidateMessages", function(r) {
    n.validateMessages = r;
  }), _(this, "setPreserve", function(r) {
    n.preserve = r;
  }), _(this, "watchList", []), _(this, "registerWatch", function(r) {
    return n.watchList.push(r), function() {
      n.watchList = n.watchList.filter(function(a) {
        return a !== r;
      });
    };
  }), _(this, "notifyWatch", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (n.watchList.length) {
      var a = n.getFieldsValue(), o = n.getFieldsValue(!0);
      n.watchList.forEach(function(i) {
        i(a, o, r);
      });
    }
  }), _(this, "timeoutId", null), _(this, "warningUnhooked", function() {
  }), _(this, "updateStore", function(r) {
    n.store = r;
  }), _(this, "getFieldEntities", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return r ? n.fieldEntities.filter(function(a) {
      return a.getNamePath().length;
    }) : n.fieldEntities;
  }), _(this, "getFieldsMap", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, a = new Or();
    return n.getFieldEntities(r).forEach(function(o) {
      var i = o.getNamePath();
      a.set(i, o);
    }), a;
  }), _(this, "getFieldEntitiesForNamePathList", function(r) {
    if (!r)
      return n.getFieldEntities(!0);
    var a = n.getFieldsMap(!0);
    return r.map(function(o) {
      var i = wt(o);
      return a.get(i) || {
        INVALIDATE_NAME_PATH: wt(o)
      };
    });
  }), _(this, "getFieldsValue", function(r, a) {
    n.warningUnhooked();
    var o, i, l;
    if (r === !0 || Array.isArray(r) ? (o = r, i = a) : r && We(r) === "object" && (l = r.strict, i = r.filter), o === !0 && !i)
      return n.store;
    var c = n.getFieldEntitiesForNamePathList(Array.isArray(o) ? o : null), u = [];
    return c.forEach(function(d) {
      var f, v, m = "INVALIDATE_NAME_PATH" in d ? d.INVALIDATE_NAME_PATH : d.getNamePath();
      if (l) {
        var h, b;
        if ((h = (b = d).isList) !== null && h !== void 0 && h.call(b))
          return;
      } else if (!o && (f = (v = d).isListField) !== null && f !== void 0 && f.call(v))
        return;
      if (!i)
        u.push(m);
      else {
        var p = "getMeta" in d ? d.getMeta() : null;
        i(p) && u.push(m);
      }
    }), cc(n.store, u.map(wt));
  }), _(this, "getFieldValue", function(r) {
    n.warningUnhooked();
    var a = wt(r);
    return Mn(n.store, a);
  }), _(this, "getFieldsError", function(r) {
    n.warningUnhooked();
    var a = n.getFieldEntitiesForNamePathList(r);
    return a.map(function(o, i) {
      return o && !("INVALIDATE_NAME_PATH" in o) ? {
        name: o.getNamePath(),
        errors: o.getErrors(),
        warnings: o.getWarnings()
      } : {
        name: wt(r[i]),
        errors: [],
        warnings: []
      };
    });
  }), _(this, "getFieldError", function(r) {
    n.warningUnhooked();
    var a = wt(r), o = n.getFieldsError([a])[0];
    return o.errors;
  }), _(this, "getFieldWarning", function(r) {
    n.warningUnhooked();
    var a = wt(r), o = n.getFieldsError([a])[0];
    return o.warnings;
  }), _(this, "isFieldsTouched", function() {
    n.warningUnhooked();
    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
      a[o] = arguments[o];
    var i = a[0], l = a[1], c, u = !1;
    a.length === 0 ? c = null : a.length === 1 ? Array.isArray(i) ? (c = i.map(wt), u = !1) : (c = null, u = i) : (c = i.map(wt), u = l);
    var d = n.getFieldEntities(!0), f = function(p) {
      return p.isFieldTouched();
    };
    if (!c)
      return u ? d.every(f) : d.some(f);
    var v = new Or();
    c.forEach(function(b) {
      v.set(b, []);
    }), d.forEach(function(b) {
      var p = b.getNamePath();
      c.forEach(function(g) {
        g.every(function(C, S) {
          return p[S] === C;
        }) && v.update(g, function(C) {
          return [].concat(Pe(C), [b]);
        });
      });
    });
    var m = function(p) {
      return p.some(f);
    }, h = v.map(function(b) {
      var p = b.value;
      return p;
    });
    return u ? h.every(m) : h.some(m);
  }), _(this, "isFieldTouched", function(r) {
    return n.warningUnhooked(), n.isFieldsTouched([r]);
  }), _(this, "isFieldsValidating", function(r) {
    n.warningUnhooked();
    var a = n.getFieldEntities();
    if (!r)
      return a.some(function(i) {
        return i.isFieldValidating();
      });
    var o = r.map(wt);
    return a.some(function(i) {
      var l = i.getNamePath();
      return Dr(o, l) && i.isFieldValidating();
    });
  }), _(this, "isFieldValidating", function(r) {
    return n.warningUnhooked(), n.isFieldsValidating([r]);
  }), _(this, "resetWithFieldInitialValue", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = new Or(), o = n.getFieldEntities(!0);
    o.forEach(function(c) {
      var u = c.props.initialValue, d = c.getNamePath();
      if (u !== void 0) {
        var f = a.get(d) || /* @__PURE__ */ new Set();
        f.add({
          entity: c,
          value: u
        }), a.set(d, f);
      }
    });
    var i = function(u) {
      u.forEach(function(d) {
        var f = d.props.initialValue;
        if (f !== void 0) {
          var v = d.getNamePath(), m = n.getInitialValue(v);
          if (m !== void 0)
            Wt(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
          else {
            var h = a.get(v);
            if (h && h.size > 1)
              Wt(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (h) {
              var b = n.getFieldValue(v), p = d.isListField();
              !p && (!r.skipExist || b === void 0) && n.updateStore(On(n.store, v, Pe(h)[0].value));
            }
          }
        }
      });
    }, l;
    r.entities ? l = r.entities : r.namePathList ? (l = [], r.namePathList.forEach(function(c) {
      var u = a.get(c);
      if (u) {
        var d;
        (d = l).push.apply(d, Pe(Pe(u).map(function(f) {
          return f.entity;
        })));
      }
    })) : l = o, i(l);
  }), _(this, "resetFields", function(r) {
    n.warningUnhooked();
    var a = n.store;
    if (!r) {
      n.updateStore(Ar(n.initialValues)), n.resetWithFieldInitialValue(), n.notifyObservers(a, null, {
        type: "reset"
      }), n.notifyWatch();
      return;
    }
    var o = r.map(wt);
    o.forEach(function(i) {
      var l = n.getInitialValue(i);
      n.updateStore(On(n.store, i, l));
    }), n.resetWithFieldInitialValue({
      namePathList: o
    }), n.notifyObservers(a, o, {
      type: "reset"
    }), n.notifyWatch(o);
  }), _(this, "setFields", function(r) {
    n.warningUnhooked();
    var a = n.store, o = [];
    r.forEach(function(i) {
      var l = i.name, c = vt(i, k0), u = wt(l);
      o.push(u), "value" in c && n.updateStore(On(n.store, u, c.value)), n.notifyObservers(a, [u], {
        type: "setField",
        data: i
      });
    }), n.notifyWatch(o);
  }), _(this, "getFields", function() {
    var r = n.getFieldEntities(!0), a = r.map(function(o) {
      var i = o.getNamePath(), l = o.getMeta(), c = B(B({}, l), {}, {
        name: i,
        value: n.getFieldValue(i)
      });
      return Object.defineProperty(c, "originRCField", {
        value: !0
      }), c;
    });
    return a;
  }), _(this, "initEntityValue", function(r) {
    var a = r.props.initialValue;
    if (a !== void 0) {
      var o = r.getNamePath(), i = Mn(n.store, o);
      i === void 0 && n.updateStore(On(n.store, o, a));
    }
  }), _(this, "isMergedPreserve", function(r) {
    var a = r !== void 0 ? r : n.preserve;
    return a ?? !0;
  }), _(this, "registerField", function(r) {
    n.fieldEntities.push(r);
    var a = r.getNamePath();
    if (n.notifyWatch([a]), r.props.initialValue !== void 0) {
      var o = n.store;
      n.resetWithFieldInitialValue({
        entities: [r],
        skipExist: !0
      }), n.notifyObservers(o, [r.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(i, l) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (n.fieldEntities = n.fieldEntities.filter(function(f) {
        return f !== r;
      }), !n.isMergedPreserve(l) && (!i || c.length > 1)) {
        var u = i ? void 0 : n.getInitialValue(a);
        if (a.length && n.getFieldValue(a) !== u && n.fieldEntities.every(function(f) {
          return (
            // Only reset when no namePath exist
            !Cd(f.getNamePath(), a)
          );
        })) {
          var d = n.store;
          n.updateStore(On(d, a, u, !0)), n.notifyObservers(d, [a], {
            type: "remove"
          }), n.triggerDependenciesUpdate(d, a);
        }
      }
      n.notifyWatch([a]);
    };
  }), _(this, "dispatch", function(r) {
    switch (r.type) {
      case "updateValue": {
        var a = r.namePath, o = r.value;
        n.updateValue(a, o);
        break;
      }
      case "validateField": {
        var i = r.namePath, l = r.triggerName;
        n.validateFields([i], {
          triggerName: l
        });
        break;
      }
    }
  }), _(this, "notifyObservers", function(r, a, o) {
    if (n.subscribable) {
      var i = B(B({}, o), {}, {
        store: n.getFieldsValue(!0)
      });
      n.getFieldEntities().forEach(function(l) {
        var c = l.onStoreChange;
        c(r, a, i);
      });
    } else
      n.forceRootUpdate();
  }), _(this, "triggerDependenciesUpdate", function(r, a) {
    var o = n.getDependencyChildrenFields(a);
    return o.length && n.validateFields(o), n.notifyObservers(r, o, {
      type: "dependenciesUpdate",
      relatedFields: [a].concat(Pe(o))
    }), o;
  }), _(this, "updateValue", function(r, a) {
    var o = wt(r), i = n.store;
    n.updateStore(On(n.store, o, a)), n.notifyObservers(i, [o], {
      type: "valueUpdate",
      source: "internal"
    }), n.notifyWatch([o]);
    var l = n.triggerDependenciesUpdate(i, o), c = n.callbacks.onValuesChange;
    if (c) {
      var u = cc(n.store, [o]);
      c(u, n.getFieldsValue());
    }
    n.triggerOnFieldsChange([o].concat(Pe(l)));
  }), _(this, "setFieldsValue", function(r) {
    n.warningUnhooked();
    var a = n.store;
    if (r) {
      var o = Ar(n.store, r);
      n.updateStore(o);
    }
    n.notifyObservers(a, null, {
      type: "valueUpdate",
      source: "external"
    }), n.notifyWatch();
  }), _(this, "setFieldValue", function(r, a) {
    n.setFields([{
      name: r,
      value: a
    }]);
  }), _(this, "getDependencyChildrenFields", function(r) {
    var a = /* @__PURE__ */ new Set(), o = [], i = new Or();
    n.getFieldEntities().forEach(function(c) {
      var u = c.props.dependencies;
      (u || []).forEach(function(d) {
        var f = wt(d);
        i.update(f, function() {
          var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return v.add(c), v;
        });
      });
    });
    var l = function c(u) {
      var d = i.get(u) || /* @__PURE__ */ new Set();
      d.forEach(function(f) {
        if (!a.has(f)) {
          a.add(f);
          var v = f.getNamePath();
          f.isFieldDirty() && v.length && (o.push(v), c(v));
        }
      });
    };
    return l(r), o;
  }), _(this, "triggerOnFieldsChange", function(r, a) {
    var o = n.callbacks.onFieldsChange;
    if (o) {
      var i = n.getFields();
      if (a) {
        var l = new Or();
        a.forEach(function(u) {
          var d = u.name, f = u.errors;
          l.set(d, f);
        }), i.forEach(function(u) {
          u.errors = l.get(u.name) || u.errors;
        });
      }
      var c = i.filter(function(u) {
        var d = u.name;
        return Dr(r, d);
      });
      c.length && o(c, i);
    }
  }), _(this, "validateFields", function(r, a) {
    var o;
    n.warningUnhooked();
    var i, l;
    Array.isArray(r) || typeof r == "string" || typeof a == "string" ? (i = r, l = a) : l = r;
    var c = !!i, u = c ? i.map(wt) : [], d = [], f = String(Date.now()), v = /* @__PURE__ */ new Set(), m = (o = l) === null || o === void 0 ? void 0 : o.recursive;
    n.getFieldEntities(!0).forEach(function(g) {
      if (c || u.push(g.getNamePath()), !(!g.props.rules || !g.props.rules.length)) {
        var C = g.getNamePath();
        if (v.add(C.join(f)), !c || Dr(u, C, m)) {
          var S = g.validateRules(B({
            validateMessages: B(B({}, Sd), n.validateMessages)
          }, l));
          d.push(S.then(function() {
            return {
              name: C,
              errors: [],
              warnings: []
            };
          }).catch(function(x) {
            var R, E = [], y = [];
            return (R = x.forEach) === null || R === void 0 || R.call(x, function($) {
              var I = $.rule.warningOnly, T = $.errors;
              I ? y.push.apply(y, Pe(T)) : E.push.apply(E, Pe(T));
            }), E.length ? Promise.reject({
              name: C,
              errors: E,
              warnings: y
            }) : {
              name: C,
              errors: E,
              warnings: y
            };
          }));
        }
      }
    });
    var h = B0(d);
    n.lastValidatePromise = h, h.catch(function(g) {
      return g;
    }).then(function(g) {
      var C = g.map(function(S) {
        var x = S.name;
        return x;
      });
      n.notifyObservers(n.store, C, {
        type: "validateFinish"
      }), n.triggerOnFieldsChange(C, g);
    });
    var b = h.then(function() {
      return n.lastValidatePromise === h ? Promise.resolve(n.getFieldsValue(u)) : Promise.reject([]);
    }).catch(function(g) {
      var C = g.filter(function(S) {
        return S && S.errors.length;
      });
      return Promise.reject({
        values: n.getFieldsValue(u),
        errorFields: C,
        outOfDate: n.lastValidatePromise !== h
      });
    });
    b.catch(function(g) {
      return g;
    });
    var p = u.filter(function(g) {
      return v.has(g.join(f));
    });
    return n.triggerOnFieldsChange(p), b;
  }), _(this, "submit", function() {
    n.warningUnhooked(), n.validateFields().then(function(r) {
      var a = n.callbacks.onFinish;
      if (a)
        try {
          a(r);
        } catch (o) {
          console.error(o);
        }
    }).catch(function(r) {
      var a = n.callbacks.onFinishFailed;
      a && a(r);
    });
  }), this.forceRootUpdate = t;
});
function Ed(e) {
  var t = s.useRef(), n = s.useState({}), r = G(n, 2), a = r[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var o = function() {
        a({});
      }, i = new W0(o);
      t.current = i.getForm();
    }
  return [t.current];
}
var ss = /* @__PURE__ */ s.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), U0 = function(t) {
  var n = t.validateMessages, r = t.onFormChange, a = t.onFormFinish, o = t.children, i = s.useContext(ss), l = s.useRef({});
  return /* @__PURE__ */ s.createElement(ss.Provider, {
    value: B(B({}, i), {}, {
      validateMessages: B(B({}, i.validateMessages), n),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(u, d) {
        r && r(u, {
          changedFields: d,
          forms: l.current
        }), i.triggerFormChange(u, d);
      },
      triggerFormFinish: function(u, d) {
        a && a(u, {
          values: d,
          forms: l.current
        }), i.triggerFormFinish(u, d);
      },
      registerForm: function(u, d) {
        u && (l.current = B(B({}, l.current), {}, _({}, u, d))), i.registerForm(u, d);
      },
      unregisterForm: function(u) {
        var d = B({}, l.current);
        delete d[u], l.current = d, i.unregisterForm(u);
      }
    })
  }, o);
}, G0 = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"], q0 = function(t, n) {
  var r = t.name, a = t.initialValues, o = t.fields, i = t.form, l = t.preserve, c = t.children, u = t.component, d = u === void 0 ? "form" : u, f = t.validateMessages, v = t.validateTrigger, m = v === void 0 ? "onChange" : v, h = t.onValuesChange, b = t.onFieldsChange, p = t.onFinish, g = t.onFinishFailed, C = vt(t, G0), S = s.useContext(ss), x = Ed(i), R = G(x, 1), E = R[0], y = E.getInternalHooks(ir), $ = y.useSubscribe, I = y.setInitialValues, T = y.setCallbacks, N = y.setValidateMessages, F = y.setPreserve, A = y.destroyForm;
  s.useImperativeHandle(n, function() {
    return E;
  }), s.useEffect(function() {
    return S.registerForm(r, E), function() {
      S.unregisterForm(r);
    };
  }, [S, E, r]), N(B(B({}, S.validateMessages), f)), T({
    onValuesChange: h,
    onFieldsChange: function(k) {
      if (S.triggerFormChange(r, k), b) {
        for (var U = arguments.length, W = new Array(U > 1 ? U - 1 : 0), le = 1; le < U; le++)
          W[le - 1] = arguments[le];
        b.apply(void 0, [k].concat(W));
      }
    },
    onFinish: function(k) {
      S.triggerFormFinish(r, k), p && p(k);
    },
    onFinishFailed: g
  }), F(l);
  var D = s.useRef(null);
  I(a, !D.current), D.current || (D.current = !0), s.useEffect(
    function() {
      return A;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var z, M = typeof c == "function";
  if (M) {
    var O = E.getFieldsValue(!0);
    z = c(O, E);
  } else
    z = c;
  $(!M);
  var P = s.useRef();
  s.useEffect(function() {
    D0(P.current || [], o || []) || E.setFields(o || []), P.current = o;
  }, [o, E]);
  var L = s.useMemo(function() {
    return B(B({}, E), {}, {
      validateTrigger: m
    });
  }, [E, m]), j = /* @__PURE__ */ s.createElement(so.Provider, {
    value: null
  }, /* @__PURE__ */ s.createElement(kr.Provider, {
    value: L
  }, z));
  return d === !1 ? j : /* @__PURE__ */ s.createElement(d, je({}, C, {
    onSubmit: function(k) {
      k.preventDefault(), k.stopPropagation(), E.submit();
    },
    onReset: function(k) {
      var U;
      k.preventDefault(), E.resetFields(), (U = C.onReset) === null || U === void 0 || U.call(C, k);
    }
  }), j);
};
function fc(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
function K0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0], a = r === void 0 ? [] : r, o = t[1], i = o === void 0 ? {} : o, l = t0(i) ? {
    form: i
  } : i, c = l.form, u = s.useState(), d = G(u, 2), f = d[0], v = d[1], m = s.useMemo(function() {
    return fc(f);
  }, [f]), h = s.useRef(m);
  h.current = m;
  var b = s.useContext(kr), p = c || b, g = p && p._init, C = wt(a), S = s.useRef(C);
  return S.current = C, s.useEffect(
    function() {
      if (g) {
        var x = p.getFieldsValue, R = p.getInternalHooks, E = R(ir), y = E.registerWatch, $ = y(function(T, N) {
          var F = Mn(l.preserve ? N : T, S.current), A = fc(F);
          h.current !== A && (h.current = A, v(F));
        }), I = Mn(l.preserve ? x(!0) : x(), S.current);
        return f !== I && v(I), $;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [g]
  ), f;
}
var X0 = /* @__PURE__ */ s.forwardRef(q0), xa = X0;
xa.FormProvider = U0;
xa.Field = xd;
xa.List = H0;
xa.useForm = Ed;
xa.useWatch = K0;
const Zn = /* @__PURE__ */ s.createContext({}), lo = (e) => {
  let {
    children: t,
    status: n,
    override: r
  } = e;
  const a = s.useContext(Zn), o = s.useMemo(() => {
    const i = Object.assign({}, a);
    return r && delete i.isFormItemInput, n && (delete i.status, delete i.hasFeedback, delete i.feedbackIcon), i;
  }, [n, r, a]);
  return /* @__PURE__ */ s.createElement(Zn.Provider, {
    value: o
  }, t);
}, Y0 = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Q0 = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), $d = function(e, t, n, r) {
  const o = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]: Object.assign(Object.assign({}, Y0(r)), {
      animationPlayState: "paused"
    }),
    [`${o}${e}-leave`]: Object.assign(Object.assign({}, Q0(r)), {
      animationPlayState: "paused"
    }),
    [`
      ${o}${e}-enter${e}-enter-active,
      ${o}${e}-appear${e}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${o}${e}-leave${e}-leave-active`]: {
      animationName: n,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, J0 = new zt("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), Z0 = new zt("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), eb = new zt("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), tb = new zt("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), nb = new zt("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), rb = new zt("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), ab = new zt("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), ob = new zt("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), ib = {
  "move-up": {
    inKeyframes: ab,
    outKeyframes: ob
  },
  "move-down": {
    inKeyframes: J0,
    outKeyframes: Z0
  },
  "move-left": {
    inKeyframes: eb,
    outKeyframes: tb
  },
  "move-right": {
    inKeyframes: nb,
    outKeyframes: rb
  }
}, vc = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = ib[t];
  return [$d(r, a, o, e.motionDurationMid), {
    [`
        ${r}-enter,
        ${r}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, Rd = new zt("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), Od = new zt("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), Id = new zt("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
}), Md = new zt("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
}), sb = new zt("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), lb = new zt("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), cb = new zt("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
}), ub = new zt("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
}), db = {
  "slide-up": {
    inKeyframes: Rd,
    outKeyframes: Od
  },
  "slide-down": {
    inKeyframes: Id,
    outKeyframes: Md
  },
  "slide-left": {
    inKeyframes: sb,
    outKeyframes: lb
  },
  "slide-right": {
    inKeyframes: cb,
    outKeyframes: ub
  }
}, mc = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = db[t];
  return [$d(r, a, o, e.motionDurationMid), {
    [`
      ${r}-enter,
      ${r}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutQuint,
      "&-prepare": {
        transform: "scale(1)"
      }
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInQuint
    }
  }];
};
function fb(e) {
  return function(n) {
    return /* @__PURE__ */ s.createElement(pr, {
      theme: {
        token: {
          motion: !1,
          zIndexPopupBase: 0
        }
      }
    }, /* @__PURE__ */ s.createElement(e, Object.assign({}, n)));
  };
}
function Pd(e, t, n, r) {
  function a(o) {
    const {
      prefixCls: i,
      style: l
    } = o, c = s.useRef(null), [u, d] = s.useState(0), [f, v] = s.useState(0), [m, h] = mr(!1, {
      value: o.open
    }), {
      getPrefixCls: b
    } = s.useContext(Ct), p = b(t || "select", i);
    s.useEffect(() => {
      if (h(!0), typeof ResizeObserver < "u") {
        const C = new ResizeObserver((x) => {
          const R = x[0].target;
          d(R.offsetHeight + 8), v(R.offsetWidth);
        }), S = setInterval(() => {
          var x;
          const R = n ? `.${n(p)}` : `.${p}-dropdown`, E = (x = c.current) === null || x === void 0 ? void 0 : x.querySelector(R);
          E && (clearInterval(S), C.observe(E));
        }, 10);
        return () => {
          clearInterval(S), C.disconnect();
        };
      }
    }, []);
    let g = Object.assign(Object.assign({}, o), {
      style: Object.assign(Object.assign({}, l), {
        margin: 0
      }),
      open: m,
      visible: m,
      getPopupContainer: () => c.current
    });
    return r && (g = r(g)), /* @__PURE__ */ s.createElement("div", {
      ref: c,
      style: {
        paddingBottom: u,
        position: "relative",
        minWidth: f
      }
    }, /* @__PURE__ */ s.createElement(e, Object.assign({}, g)));
  }
  return fb(a);
}
const Bs = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
};
var zo = function(t) {
  var n = t.className, r = t.customizeIcon, a = t.customizeIconProps, o = t.onMouseDown, i = t.onClick, l = t.children, c;
  return typeof r == "function" ? c = r(a) : c = r, /* @__PURE__ */ s.createElement("span", {
    className: n,
    onMouseDown: function(d) {
      d.preventDefault(), o && o(d);
    },
    style: {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    unselectable: "on",
    onClick: i,
    "aria-hidden": !0
  }, c !== void 0 ? c : /* @__PURE__ */ s.createElement("span", {
    className: he(n.split(/\s+/).map(function(u) {
      return "".concat(u, "-icon");
    }))
  }, l));
};
function vb(e, t, n, r, a) {
  var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1, i = arguments.length > 6 ? arguments[6] : void 0, l = arguments.length > 7 ? arguments[7] : void 0, c = Se.useMemo(function() {
    if (We(r) === "object")
      return r.clearIcon;
    if (a)
      return a;
  }, [r, a]), u = Se.useMemo(function() {
    return !!(!o && r && (n.length || i) && !(l === "combobox" && i === ""));
  }, [r, o, n.length, i, l]);
  return {
    allowClear: u,
    clearIcon: /* @__PURE__ */ Se.createElement(zo, {
      className: "".concat(e, "-clear"),
      onMouseDown: t,
      customizeIcon: c
    }, "×")
  };
}
var Nd = /* @__PURE__ */ s.createContext(null);
function mb() {
  return s.useContext(Nd);
}
function gb() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10, t = s.useState(!1), n = G(t, 2), r = n[0], a = n[1], o = s.useRef(null), i = function() {
    window.clearTimeout(o.current);
  };
  s.useEffect(function() {
    return i;
  }, []);
  var l = function(u, d) {
    i(), o.current = window.setTimeout(function() {
      a(u), d && d();
    }, e);
  };
  return [r, l, i];
}
function Td() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250, t = s.useRef(null), n = s.useRef(null);
  s.useEffect(function() {
    return function() {
      window.clearTimeout(n.current);
    };
  }, []);
  function r(a) {
    (a || t.current === null) && (t.current = a), window.clearTimeout(n.current), n.current = window.setTimeout(function() {
      t.current = null;
    }, e);
  }
  return [function() {
    return t.current;
  }, r];
}
function hb(e, t, n, r) {
  var a = s.useRef(null);
  a.current = {
    open: t,
    triggerOpen: n,
    customizedTrigger: r
  }, s.useEffect(function() {
    function o(i) {
      var l;
      if (!((l = a.current) !== null && l !== void 0 && l.customizedTrigger)) {
        var c = i.target;
        c.shadowRoot && i.composed && (c = i.composedPath()[0] || c), a.current.open && e().filter(function(u) {
          return u;
        }).every(function(u) {
          return !u.contains(c) && u !== c;
        }) && a.current.triggerOpen(!1);
      }
    }
    return window.addEventListener("mousedown", o), function() {
      return window.removeEventListener("mousedown", o);
    };
  }, []);
}
var pb = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], Ir = void 0;
function bb(e, t) {
  var n = e.prefixCls, r = e.invalidate, a = e.item, o = e.renderItem, i = e.responsive, l = e.responsiveDisabled, c = e.registerSize, u = e.itemKey, d = e.className, f = e.style, v = e.children, m = e.display, h = e.order, b = e.component, p = b === void 0 ? "div" : b, g = vt(e, pb), C = i && !m;
  function S($) {
    c(u, $);
  }
  s.useEffect(function() {
    return function() {
      S(null);
    };
  }, []);
  var x = o && a !== Ir ? o(a) : v, R;
  r || (R = {
    opacity: C ? 0 : 1,
    height: C ? 0 : Ir,
    overflowY: C ? "hidden" : Ir,
    order: i ? h : Ir,
    pointerEvents: C ? "none" : Ir,
    position: C ? "absolute" : Ir
  });
  var E = {};
  C && (E["aria-hidden"] = !0);
  var y = /* @__PURE__ */ s.createElement(p, je({
    className: he(!r && n, d),
    style: B(B({}, R), f)
  }, E, g, {
    ref: t
  }), x);
  return i && (y = /* @__PURE__ */ s.createElement(er, {
    onResize: function(I) {
      var T = I.offsetWidth;
      S(T);
    },
    disabled: l
  }, y)), y;
}
var la = /* @__PURE__ */ s.forwardRef(bb);
la.displayName = "Item";
function yb(e) {
  if (typeof MessageChannel > "u")
    ft(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function Sb() {
  var e = s.useRef(null), t = function(r) {
    e.current || (e.current = [], yb(function() {
      ua.unstable_batchedUpdates(function() {
        e.current.forEach(function(a) {
          a();
        }), e.current = null;
      });
    })), e.current.push(r);
  };
  return t;
}
function Zr(e, t) {
  var n = s.useState(t), r = G(n, 2), a = r[0], o = r[1], i = an(function(l) {
    e(function() {
      o(l);
    });
  });
  return [a, i];
}
var co = /* @__PURE__ */ Se.createContext(null), Cb = ["component"], xb = ["className"], wb = ["className"], Eb = function(t, n) {
  var r = s.useContext(co);
  if (!r) {
    var a = t.component, o = a === void 0 ? "div" : a, i = vt(t, Cb);
    return /* @__PURE__ */ s.createElement(o, je({}, i, {
      ref: n
    }));
  }
  var l = r.className, c = vt(r, xb), u = t.className, d = vt(t, wb);
  return /* @__PURE__ */ s.createElement(co.Provider, {
    value: null
  }, /* @__PURE__ */ s.createElement(la, je({
    ref: n,
    className: he(l, u)
  }, c, d)));
}, _d = /* @__PURE__ */ s.forwardRef(Eb);
_d.displayName = "RawItem";
var $b = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], Ad = "responsive", Fd = "invalidate";
function Rb(e) {
  return "+ ".concat(e.length, " ...");
}
function Ob(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-overflow" : n, a = e.data, o = a === void 0 ? [] : a, i = e.renderItem, l = e.renderRawItem, c = e.itemKey, u = e.itemWidth, d = u === void 0 ? 10 : u, f = e.ssr, v = e.style, m = e.className, h = e.maxCount, b = e.renderRest, p = e.renderRawRest, g = e.suffix, C = e.component, S = C === void 0 ? "div" : C, x = e.itemComponent, R = e.onVisibleChange, E = vt(e, $b), y = f === "full", $ = Sb(), I = Zr($, null), T = G(I, 2), N = T[0], F = T[1], A = N || 0, D = Zr($, /* @__PURE__ */ new Map()), z = G(D, 2), M = z[0], O = z[1], P = Zr($, 0), L = G(P, 2), j = L[0], V = L[1], k = Zr($, 0), U = G(k, 2), W = U[0], le = U[1], te = Zr($, 0), X = G(te, 2), K = X[0], ee = X[1], ce = s.useState(null), ge = G(ce, 2), ve = ge[0], ae = ge[1], Ce = s.useState(null), Oe = G(Ce, 2), Ne = Oe[0], Ie = Oe[1], oe = s.useMemo(function() {
    return Ne === null && y ? Number.MAX_SAFE_INTEGER : Ne || 0;
  }, [Ne, N]), pe = s.useState(!1), se = G(pe, 2), ie = se[0], _e = se[1], He = "".concat(r, "-item"), Te = Math.max(j, W), ue = h === Ad, de = o.length && ue, Ae = h === Fd, Ke = de || typeof h == "number" && o.length > h, Be = s.useMemo(function() {
    var Re = o;
    return de ? N === null && y ? Re = o : Re = o.slice(0, Math.min(o.length, A / d)) : typeof h == "number" && (Re = o.slice(0, h)), Re;
  }, [o, d, N, h, de]), tt = s.useMemo(function() {
    return de ? o.slice(oe + 1) : o.slice(Be.length);
  }, [o, Be, de, oe]), De = s.useCallback(function(Re, Q) {
    var Y;
    return typeof c == "function" ? c(Re) : (Y = c && (Re == null ? void 0 : Re[c])) !== null && Y !== void 0 ? Y : Q;
  }, [c]), _t = s.useCallback(i || function(Re) {
    return Re;
  }, [i]);
  function lt(Re, Q, Y) {
    Ne === Re && (Q === void 0 || Q === ve) || (Ie(Re), Y || (_e(Re < o.length - 1), R == null || R(Re)), Q !== void 0 && ae(Q));
  }
  function ot(Re, Q) {
    F(Q.clientWidth);
  }
  function Xe(Re, Q) {
    O(function(Y) {
      var ne = new Map(Y);
      return Q === null ? ne.delete(Re) : ne.set(Re, Q), ne;
    });
  }
  function ht(Re, Q) {
    le(Q), V(W);
  }
  function at(Re, Q) {
    ee(Q);
  }
  function Ye(Re) {
    return M.get(De(Be[Re], Re));
  }
  gt(function() {
    if (A && typeof Te == "number" && Be) {
      var Re = K, Q = Be.length, Y = Q - 1;
      if (!Q) {
        lt(0, null);
        return;
      }
      for (var ne = 0; ne < Q; ne += 1) {
        var $e = Ye(ne);
        if (y && ($e = $e || 0), $e === void 0) {
          lt(ne - 1, void 0, !0);
          break;
        }
        if (Re += $e, // Only one means `totalWidth` is the final width
        Y === 0 && Re <= A || // Last two width will be the final width
        ne === Y - 1 && Re + Ye(Y) <= A) {
          lt(Y, null);
          break;
        } else if (Re + Te > A) {
          lt(ne - 1, Re - $e - K + W);
          break;
        }
      }
      g && Ye(0) + K > A && ae(null);
    }
  }, [A, M, W, K, De, Be]);
  var qe = ie && !!tt.length, fe = {};
  ve !== null && de && (fe = {
    position: "absolute",
    left: ve,
    top: 0
  });
  var be = {
    prefixCls: He,
    responsive: de,
    component: x,
    invalidate: Ae
  }, Me = l ? function(Re, Q) {
    var Y = De(Re, Q);
    return /* @__PURE__ */ s.createElement(co.Provider, {
      key: Y,
      value: B(B({}, be), {}, {
        order: Q,
        item: Re,
        itemKey: Y,
        registerSize: Xe,
        display: Q <= oe
      })
    }, l(Re, Q));
  } : function(Re, Q) {
    var Y = De(Re, Q);
    return /* @__PURE__ */ s.createElement(la, je({}, be, {
      order: Q,
      key: Y,
      item: Re,
      renderItem: _t,
      itemKey: Y,
      registerSize: Xe,
      display: Q <= oe
    }));
  }, J, me = {
    order: qe ? oe : Number.MAX_SAFE_INTEGER,
    className: "".concat(He, "-rest"),
    registerSize: ht,
    display: qe
  };
  if (p)
    p && (J = /* @__PURE__ */ s.createElement(co.Provider, {
      value: B(B({}, be), me)
    }, p(tt)));
  else {
    var ke = b || Rb;
    J = /* @__PURE__ */ s.createElement(la, je({}, be, me), typeof ke == "function" ? ke(tt) : ke);
  }
  var Ue = /* @__PURE__ */ s.createElement(S, je({
    className: he(!Ae && r, m),
    style: v,
    ref: t
  }, E), Be.map(Me), Ke ? J : null, g && /* @__PURE__ */ s.createElement(la, je({}, be, {
    responsive: ue,
    responsiveDisabled: !de,
    order: oe,
    className: "".concat(He, "-suffix"),
    registerSize: at,
    display: !0,
    style: fe
  }), g));
  return ue && (Ue = /* @__PURE__ */ s.createElement(er, {
    onResize: ot,
    disabled: !de
  }, Ue)), Ue;
}
var wa = /* @__PURE__ */ s.forwardRef(Ob);
wa.displayName = "Overflow";
wa.Item = _d;
wa.RESPONSIVE = Ad;
wa.INVALIDATE = Fd;
var Ib = function(t, n) {
  var r, a, o = t.prefixCls, i = t.id, l = t.inputElement, c = t.disabled, u = t.tabIndex, d = t.autoFocus, f = t.autoComplete, v = t.editable, m = t.activeDescendantId, h = t.value, b = t.maxLength, p = t.onKeyDown, g = t.onMouseDown, C = t.onChange, S = t.onPaste, x = t.onCompositionStart, R = t.onCompositionEnd, E = t.open, y = t.attrs, $ = l || /* @__PURE__ */ s.createElement("input", null), I = $, T = I.ref, N = I.props, F = N.onKeyDown, A = N.onChange, D = N.onMouseDown, z = N.onCompositionStart, M = N.onCompositionEnd, O = N.style;
  return "maxLength" in $.props, $ = /* @__PURE__ */ s.cloneElement($, B(B(B({
    type: "search"
  }, N), {}, {
    // Override over origin props
    id: i,
    ref: jn(n, T),
    disabled: c,
    tabIndex: u,
    autoComplete: f || "off",
    autoFocus: d,
    className: he("".concat(o, "-selection-search-input"), (r = $) === null || r === void 0 || (a = r.props) === null || a === void 0 ? void 0 : a.className),
    role: "combobox",
    "aria-expanded": E || !1,
    "aria-haspopup": "listbox",
    "aria-owns": "".concat(i, "_list"),
    "aria-autocomplete": "list",
    "aria-controls": "".concat(i, "_list"),
    "aria-activedescendant": E ? m : void 0
  }, y), {}, {
    value: v ? h : "",
    maxLength: b,
    readOnly: !v,
    unselectable: v ? null : "on",
    style: B(B({}, O), {}, {
      opacity: v ? null : 0
    }),
    onKeyDown: function(L) {
      p(L), F && F(L);
    },
    onMouseDown: function(L) {
      g(L), D && D(L);
    },
    onChange: function(L) {
      C(L), A && A(L);
    },
    onCompositionStart: function(L) {
      x(L), z && z(L);
    },
    onCompositionEnd: function(L) {
      R(L), M && M(L);
    },
    onPaste: S
  })), $;
}, ks = /* @__PURE__ */ s.forwardRef(Ib);
ks.displayName = "Input";
function jd(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
var Mb = typeof window < "u" && window.document && window.document.documentElement, Pb = Mb;
function Nb(e) {
  return e != null;
}
function Tb(e) {
  return !e && e !== 0;
}
function gc(e) {
  return ["string", "number"].includes(We(e));
}
function Ld(e) {
  var t = void 0;
  return e && (gc(e.title) ? t = e.title.toString() : gc(e.label) && (t = e.label.toString())), t;
}
function _b(e, t) {
  Pb ? s.useLayoutEffect(e, t) : s.useEffect(e, t);
}
function Ab(e) {
  var t;
  return (t = e.key) !== null && t !== void 0 ? t : e.value;
}
var hc = function(t) {
  t.preventDefault(), t.stopPropagation();
}, Fb = function(t) {
  var n = t.id, r = t.prefixCls, a = t.values, o = t.open, i = t.searchValue, l = t.autoClearSearchValue, c = t.inputRef, u = t.placeholder, d = t.disabled, f = t.mode, v = t.showSearch, m = t.autoFocus, h = t.autoComplete, b = t.activeDescendantId, p = t.tabIndex, g = t.removeIcon, C = t.maxTagCount, S = t.maxTagTextLength, x = t.maxTagPlaceholder, R = x === void 0 ? function(ae) {
    return "+ ".concat(ae.length, " ...");
  } : x, E = t.tagRender, y = t.onToggleOpen, $ = t.onRemove, I = t.onInputChange, T = t.onInputPaste, N = t.onInputKeyDown, F = t.onInputMouseDown, A = t.onInputCompositionStart, D = t.onInputCompositionEnd, z = s.useRef(null), M = s.useState(0), O = G(M, 2), P = O[0], L = O[1], j = s.useState(!1), V = G(j, 2), k = V[0], U = V[1], W = "".concat(r, "-selection"), le = o || f === "multiple" && l === !1 || f === "tags" ? i : "", te = f === "tags" || f === "multiple" && l === !1 || v && (o || k);
  _b(function() {
    L(z.current.scrollWidth);
  }, [le]);
  function X(ae, Ce, Oe, Ne, Ie) {
    return /* @__PURE__ */ s.createElement("span", {
      className: he("".concat(W, "-item"), _({}, "".concat(W, "-item-disabled"), Oe)),
      title: Ld(ae)
    }, /* @__PURE__ */ s.createElement("span", {
      className: "".concat(W, "-item-content")
    }, Ce), Ne && /* @__PURE__ */ s.createElement(zo, {
      className: "".concat(W, "-item-remove"),
      onMouseDown: hc,
      onClick: Ie,
      customizeIcon: g
    }, "×"));
  }
  function K(ae, Ce, Oe, Ne, Ie) {
    var oe = function(se) {
      hc(se), y(!o);
    };
    return /* @__PURE__ */ s.createElement("span", {
      onMouseDown: oe
    }, E({
      label: Ce,
      value: ae,
      disabled: Oe,
      closable: Ne,
      onClose: Ie
    }));
  }
  function ee(ae) {
    var Ce = ae.disabled, Oe = ae.label, Ne = ae.value, Ie = !d && !Ce, oe = Oe;
    if (typeof S == "number" && (typeof Oe == "string" || typeof Oe == "number")) {
      var pe = String(oe);
      pe.length > S && (oe = "".concat(pe.slice(0, S), "..."));
    }
    var se = function(_e) {
      _e && _e.stopPropagation(), $(ae);
    };
    return typeof E == "function" ? K(Ne, oe, Ce, Ie, se) : X(ae, oe, Ce, Ie, se);
  }
  function ce(ae) {
    var Ce = typeof R == "function" ? R(ae) : R;
    return X({
      title: Ce
    }, Ce, !1);
  }
  var ge = /* @__PURE__ */ s.createElement("div", {
    className: "".concat(W, "-search"),
    style: {
      width: P
    },
    onFocus: function() {
      U(!0);
    },
    onBlur: function() {
      U(!1);
    }
  }, /* @__PURE__ */ s.createElement(ks, {
    ref: c,
    open: o,
    prefixCls: r,
    id: n,
    inputElement: null,
    disabled: d,
    autoFocus: m,
    autoComplete: h,
    editable: te,
    activeDescendantId: b,
    value: le,
    onKeyDown: N,
    onMouseDown: F,
    onChange: I,
    onPaste: T,
    onCompositionStart: A,
    onCompositionEnd: D,
    tabIndex: p,
    attrs: to(t, !0)
  }), /* @__PURE__ */ s.createElement("span", {
    ref: z,
    className: "".concat(W, "-search-mirror"),
    "aria-hidden": !0
  }, le, " ")), ve = /* @__PURE__ */ s.createElement(wa, {
    prefixCls: "".concat(W, "-overflow"),
    data: a,
    renderItem: ee,
    renderRest: ce,
    suffix: ge,
    itemKey: Ab,
    maxCount: C
  });
  return /* @__PURE__ */ s.createElement(s.Fragment, null, ve, !a.length && !le && /* @__PURE__ */ s.createElement("span", {
    className: "".concat(W, "-placeholder")
  }, u));
}, jb = function(t) {
  var n = t.inputElement, r = t.prefixCls, a = t.id, o = t.inputRef, i = t.disabled, l = t.autoFocus, c = t.autoComplete, u = t.activeDescendantId, d = t.mode, f = t.open, v = t.values, m = t.placeholder, h = t.tabIndex, b = t.showSearch, p = t.searchValue, g = t.activeValue, C = t.maxLength, S = t.onInputKeyDown, x = t.onInputMouseDown, R = t.onInputChange, E = t.onInputPaste, y = t.onInputCompositionStart, $ = t.onInputCompositionEnd, I = t.title, T = s.useState(!1), N = G(T, 2), F = N[0], A = N[1], D = d === "combobox", z = D || b, M = v[0], O = p || "";
  D && g && !F && (O = g), s.useEffect(function() {
    D && A(!1);
  }, [D, g]);
  var P = d !== "combobox" && !f && !b ? !1 : !!O, L = I === void 0 ? Ld(M) : I, j = function() {
    if (M)
      return null;
    var k = P ? {
      visibility: "hidden"
    } : void 0;
    return /* @__PURE__ */ s.createElement("span", {
      className: "".concat(r, "-selection-placeholder"),
      style: k
    }, m);
  };
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement("span", {
    className: "".concat(r, "-selection-search")
  }, /* @__PURE__ */ s.createElement(ks, {
    ref: o,
    prefixCls: r,
    id: a,
    open: f,
    inputElement: n,
    disabled: i,
    autoFocus: l,
    autoComplete: c,
    editable: z,
    activeDescendantId: u,
    value: O,
    onKeyDown: S,
    onMouseDown: x,
    onChange: function(k) {
      A(!0), R(k);
    },
    onPaste: E,
    onCompositionStart: y,
    onCompositionEnd: $,
    tabIndex: h,
    attrs: to(t, !0),
    maxLength: D ? C : void 0
  })), !D && M ? /* @__PURE__ */ s.createElement("span", {
    className: "".concat(r, "-selection-item"),
    title: L,
    style: P ? {
      visibility: "hidden"
    } : void 0
  }, M.label) : null, j());
};
function Lb(e) {
  return ![
    // System function button
    Z.ESC,
    Z.SHIFT,
    Z.BACKSPACE,
    Z.TAB,
    Z.WIN_KEY,
    Z.ALT,
    Z.META,
    Z.WIN_KEY_RIGHT,
    Z.CTRL,
    Z.SEMICOLON,
    Z.EQUALS,
    Z.CAPS_LOCK,
    Z.CONTEXT_MENU,
    // F1-F12
    Z.F1,
    Z.F2,
    Z.F3,
    Z.F4,
    Z.F5,
    Z.F6,
    Z.F7,
    Z.F8,
    Z.F9,
    Z.F10,
    Z.F11,
    Z.F12
  ].includes(e);
}
var Db = function(t, n) {
  var r = s.useRef(null), a = s.useRef(!1), o = t.prefixCls, i = t.open, l = t.mode, c = t.showSearch, u = t.tokenWithEnter, d = t.autoClearSearchValue, f = t.onSearch, v = t.onSearchSubmit, m = t.onToggleOpen, h = t.onInputKeyDown, b = t.domRef;
  s.useImperativeHandle(n, function() {
    return {
      focus: function() {
        r.current.focus();
      },
      blur: function() {
        r.current.blur();
      }
    };
  });
  var p = Td(0), g = G(p, 2), C = g[0], S = g[1], x = function(O) {
    var P = O.which;
    (P === Z.UP || P === Z.DOWN) && O.preventDefault(), h && h(O), P === Z.ENTER && l === "tags" && !a.current && !i && (v == null || v(O.target.value)), Lb(P) && m(!0);
  }, R = function() {
    S(!0);
  }, E = s.useRef(null), y = function(O) {
    f(O, !0, a.current) !== !1 && m(!0);
  }, $ = function() {
    a.current = !0;
  }, I = function(O) {
    a.current = !1, l !== "combobox" && y(O.target.value);
  }, T = function(O) {
    var P = O.target.value;
    if (u && E.current && /[\r\n]/.test(E.current)) {
      var L = E.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
      P = P.replace(L, E.current);
    }
    E.current = null, y(P);
  }, N = function(O) {
    var P = O.clipboardData, L = P.getData("text");
    E.current = L;
  }, F = function(O) {
    var P = O.target;
    if (P !== r.current) {
      var L = document.body.style.msTouchAction !== void 0;
      L ? setTimeout(function() {
        r.current.focus();
      }) : r.current.focus();
    }
  }, A = function(O) {
    var P = C();
    O.target !== r.current && !P && l !== "combobox" && O.preventDefault(), (l !== "combobox" && (!c || !P) || !i) && (i && d !== !1 && f("", !0, !1), m());
  }, D = {
    inputRef: r,
    onInputKeyDown: x,
    onInputMouseDown: R,
    onInputChange: T,
    onInputPaste: N,
    onInputCompositionStart: $,
    onInputCompositionEnd: I
  }, z = l === "multiple" || l === "tags" ? /* @__PURE__ */ s.createElement(Fb, je({}, t, D)) : /* @__PURE__ */ s.createElement(jb, je({}, t, D));
  return /* @__PURE__ */ s.createElement("div", {
    ref: b,
    className: "".concat(o, "-selector"),
    onClick: F,
    onMouseDown: A
  }, z);
}, Dd = /* @__PURE__ */ s.forwardRef(Db);
Dd.displayName = "Selector";
var pc = /* @__PURE__ */ s.createContext(null);
function bc(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function zb(e, t, n, r) {
  return s.useMemo(function() {
    var a = bc(n ?? t), o = bc(r ?? t), i = new Set(a), l = new Set(o);
    return e && (i.has("hover") && (i.delete("hover"), i.add("click")), l.has("hover") && (l.delete("hover"), l.add("click"))), [i, l];
  }, [e, t, n, r]);
}
function Vb() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 ? arguments[2] : void 0;
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function Hb(e, t, n, r) {
  for (var a = n.points, o = Object.keys(e), i = 0; i < o.length; i += 1) {
    var l, c = o[i];
    if (Vb((l = e[c]) === null || l === void 0 ? void 0 : l.points, a, r))
      return "".concat(t, "-placement-").concat(c);
  }
  return "";
}
function yc(e, t, n, r) {
  return t || (n ? {
    motionName: "".concat(e, "-").concat(n)
  } : r ? {
    motionName: r
  } : null);
}
function Ea(e) {
  return e.ownerDocument.defaultView;
}
function ls(e) {
  for (var t = [], n = e == null ? void 0 : e.parentElement, r = ["hidden", "scroll", "clip", "auto"]; n; ) {
    var a = Ea(n).getComputedStyle(n), o = a.overflowX, i = a.overflowY, l = a.overflow;
    [o, i, l].some(function(c) {
      return r.includes(c);
    }) && t.push(n), n = n.parentElement;
  }
  return t;
}
function ha(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function ea(e) {
  return ha(parseFloat(e), 0);
}
function Sc(e, t) {
  var n = B({}, e);
  return (t || []).forEach(function(r) {
    if (!(r instanceof HTMLBodyElement || r instanceof HTMLHtmlElement)) {
      var a = Ea(r).getComputedStyle(r), o = a.overflow, i = a.overflowClipMargin, l = a.borderTopWidth, c = a.borderBottomWidth, u = a.borderLeftWidth, d = a.borderRightWidth, f = r.getBoundingClientRect(), v = r.offsetHeight, m = r.clientHeight, h = r.offsetWidth, b = r.clientWidth, p = ea(l), g = ea(c), C = ea(u), S = ea(d), x = ha(Math.round(f.width / h * 1e3) / 1e3), R = ha(Math.round(f.height / v * 1e3) / 1e3), E = (h - b - C - S) * x, y = (v - m - p - g) * R, $ = p * R, I = g * R, T = C * x, N = S * x, F = 0, A = 0;
      if (o === "clip") {
        var D = ea(i);
        F = D * x, A = D * R;
      }
      var z = f.x + T - F, M = f.y + $ - A, O = z + f.width + 2 * F - T - N - E, P = M + f.height + 2 * A - $ - I - y;
      n.left = Math.max(n.left, z), n.top = Math.max(n.top, M), n.right = Math.min(n.right, O), n.bottom = Math.min(n.bottom, P);
    }
  }), n;
}
function Cc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = "".concat(t), r = n.match(/^(.*)\%$/);
  return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n);
}
function xc(e, t) {
  var n = t || [], r = G(n, 2), a = r[0], o = r[1];
  return [Cc(e.width, a), Cc(e.height, o)];
}
function wc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function Mr(e, t) {
  var n = t[0], r = t[1], a, o;
  return n === "t" ? o = e.y : n === "b" ? o = e.y + e.height : o = e.y + e.height / 2, r === "l" ? a = e.x : r === "r" ? a = e.x + e.width : a = e.x + e.width / 2, {
    x: a,
    y: o
  };
}
function Kn(e, t) {
  var n = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(r, a) {
    return a === t ? n[r] || "c" : r;
  }).join("");
}
function Bb(e, t, n, r, a, o, i) {
  var l = s.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: a[r] || {}
  }), c = G(l, 2), u = c[0], d = c[1], f = s.useRef(0), v = s.useMemo(function() {
    return t ? ls(t) : [];
  }, [t]), m = s.useRef({}), h = function() {
    m.current = {};
  };
  e || h();
  var b = an(function() {
    if (t && n && e) {
      let Mt = function(gn, Dn) {
        var Fn = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : pe, nr = L.x + gn, qn = L.y + Dn, Sr = nr + K, Yr = qn + X, Cr = Math.max(nr, Fn.left), En = Math.max(qn, Fn.top), Qr = Math.min(Sr, Fn.right), xe = Math.min(Yr, Fn.bottom);
        return Math.max(0, (Qr - Cr) * (xe - En));
      }, mn = function() {
        rt = L.y + me, $t = rt + X, Vt = L.x + J, Ot = Vt + K;
      };
      var C, S, x = t, R = x.ownerDocument, E = Ea(x), y = E.getComputedStyle(x), $ = y.width, I = y.height, T = y.position, N = x.style.left, F = x.style.top, A = x.style.right, D = x.style.bottom, z = B(B({}, a[r]), o), M = R.createElement("div");
      (C = x.parentElement) === null || C === void 0 || C.appendChild(M), M.style.left = "".concat(x.offsetLeft, "px"), M.style.top = "".concat(x.offsetTop, "px"), M.style.position = T, M.style.height = "".concat(x.offsetHeight, "px"), M.style.width = "".concat(x.offsetWidth, "px"), x.style.left = "0", x.style.top = "0", x.style.right = "auto", x.style.bottom = "auto";
      var O;
      if (Array.isArray(n))
        O = {
          x: n[0],
          y: n[1],
          width: 0,
          height: 0
        };
      else {
        var P = n.getBoundingClientRect();
        O = {
          x: P.x,
          y: P.y,
          width: P.width,
          height: P.height
        };
      }
      var L = x.getBoundingClientRect(), j = R.documentElement, V = j.clientWidth, k = j.clientHeight, U = j.scrollWidth, W = j.scrollHeight, le = j.scrollTop, te = j.scrollLeft, X = L.height, K = L.width, ee = O.height, ce = O.width, ge = {
        left: 0,
        top: 0,
        right: V,
        bottom: k
      }, ve = {
        left: -te,
        top: -le,
        right: U - te,
        bottom: W - le
      }, ae = z.htmlRegion, Ce = "visible", Oe = "visibleFirst";
      ae !== "scroll" && ae !== Oe && (ae = Ce);
      var Ne = ae === Oe, Ie = Sc(ve, v), oe = Sc(ge, v), pe = ae === Ce ? oe : Ie, se = Ne ? oe : pe;
      x.style.left = "auto", x.style.top = "auto", x.style.right = "0", x.style.bottom = "0";
      var ie = x.getBoundingClientRect();
      x.style.left = N, x.style.top = F, x.style.right = A, x.style.bottom = D, (S = x.parentElement) === null || S === void 0 || S.removeChild(M);
      var _e = ha(Math.round(K / parseFloat($) * 1e3) / 1e3), He = ha(Math.round(X / parseFloat(I) * 1e3) / 1e3);
      if (_e === 0 || He === 0 || Xa(n) && !sd(n))
        return;
      var Te = z.offset, ue = z.targetOffset, de = xc(L, Te), Ae = G(de, 2), Ke = Ae[0], Be = Ae[1], tt = xc(O, ue), De = G(tt, 2), _t = De[0], lt = De[1];
      O.x -= _t, O.y -= lt;
      var ot = z.points || [], Xe = G(ot, 2), ht = Xe[0], at = Xe[1], Ye = wc(at), qe = wc(ht), fe = Mr(O, Ye), be = Mr(L, qe), Me = B({}, z), J = fe.x - be.x + Ke, me = fe.y - be.y + Be, ke = Mt(J, me), Ue = Mt(J, me, oe), Re = Mr(O, ["t", "l"]), Q = Mr(L, ["t", "l"]), Y = Mr(O, ["b", "r"]), ne = Mr(L, ["b", "r"]), $e = z.overflow || {}, Le = $e.adjustX, Qe = $e.adjustY, nt = $e.shiftX, Et = $e.shiftY, ct = function(Dn) {
        return typeof Dn == "boolean" ? Dn : Dn >= 0;
      }, rt, $t, Vt, Ot;
      mn();
      var Qt = ct(Qe), we = qe[0] === Ye[0];
      if (Qt && qe[0] === "t" && ($t > se.bottom || m.current.bt)) {
        var ye = me;
        we ? ye -= X - ee : ye = Re.y - ne.y - Be;
        var Ge = Mt(J, ye), Ze = Mt(J, ye, oe);
        // Of course use larger one
        Ge > ke || Ge === ke && (!Ne || // Choose recommend one
        Ze >= Ue) ? (m.current.bt = !0, me = ye, Be = -Be, Me.points = [Kn(qe, 0), Kn(Ye, 0)]) : m.current.bt = !1;
      }
      if (Qt && qe[0] === "b" && (rt < se.top || m.current.tb)) {
        var mt = me;
        we ? mt += X - ee : mt = Y.y - Q.y - Be;
        var Nn = Mt(J, mt), Nt = Mt(J, mt, oe);
        // Of course use larger one
        Nn > ke || Nn === ke && (!Ne || // Choose recommend one
        Nt >= Ue) ? (m.current.tb = !0, me = mt, Be = -Be, Me.points = [Kn(qe, 0), Kn(Ye, 0)]) : m.current.tb = !1;
      }
      var Tn = ct(Le), _n = qe[1] === Ye[1];
      if (Tn && qe[1] === "l" && (Ot > se.right || m.current.rl)) {
        var qt = J;
        _n ? qt -= K - ce : qt = Re.x - ne.x - Ke;
        var Jt = Mt(qt, me), tr = Mt(qt, me, oe);
        // Of course use larger one
        Jt > ke || Jt === ke && (!Ne || // Choose recommend one
        tr >= Ue) ? (m.current.rl = !0, J = qt, Ke = -Ke, Me.points = [Kn(qe, 1), Kn(Ye, 1)]) : m.current.rl = !1;
      }
      if (Tn && qe[1] === "r" && (Vt < se.left || m.current.lr)) {
        var cn = J;
        _n ? cn += K - ce : cn = Y.x - Q.x - Ke;
        var Zt = Mt(cn, me), un = Mt(cn, me, oe);
        // Of course use larger one
        Zt > ke || Zt === ke && (!Ne || // Choose recommend one
        un >= Ue) ? (m.current.lr = !0, J = cn, Ke = -Ke, Me.points = [Kn(qe, 1), Kn(Ye, 1)]) : m.current.lr = !1;
      }
      mn();
      var dn = nt === !0 ? 0 : nt;
      typeof dn == "number" && (Vt < oe.left && (J -= Vt - oe.left - Ke, O.x + ce < oe.left + dn && (J += O.x - oe.left + ce - dn)), Ot > oe.right && (J -= Ot - oe.right - Ke, O.x > oe.right - dn && (J += O.x - oe.right + dn)));
      var Kt = Et === !0 ? 0 : Et;
      typeof Kt == "number" && (rt < oe.top && (me -= rt - oe.top - Be, O.y + ee < oe.top + Kt && (me += O.y - oe.top + ee - Kt)), $t > oe.bottom && (me -= $t - oe.bottom - Be, O.y > oe.bottom - Kt && (me += O.y - oe.bottom + Kt)));
      var fn = L.x + J, xn = fn + K, An = L.y + me, wn = An + X, Ht = O.x, ze = Ht + ce, Fe = O.y, yt = Fe + ee, xt = Math.max(fn, Ht), ut = Math.min(xn, ze), It = (xt + ut) / 2, At = It - fn, vn = Math.max(An, Fe), Xt = Math.min(wn, yt), en = (vn + Xt) / 2, Bt = en - An;
      i == null || i(t, Me);
      var Un = ie.right - L.x - (J + L.width), Gn = ie.bottom - L.y - (me + L.height);
      d({
        ready: !0,
        offsetX: J / _e,
        offsetY: me / He,
        offsetR: Un / _e,
        offsetB: Gn / He,
        arrowX: At / _e,
        arrowY: Bt / He,
        scaleX: _e,
        scaleY: He,
        align: Me
      });
    }
  }), p = function() {
    f.current += 1;
    var S = f.current;
    Promise.resolve().then(function() {
      f.current === S && b();
    });
  }, g = function() {
    d(function(S) {
      return B(B({}, S), {}, {
        ready: !1
      });
    });
  };
  return gt(g, [r]), gt(function() {
    e || g();
  }, [e]), [u.ready, u.offsetX, u.offsetY, u.offsetR, u.offsetB, u.arrowX, u.arrowY, u.scaleX, u.scaleY, u.align, p];
}
function kb(e, t, n, r, a) {
  gt(function() {
    if (e && t && n) {
      let f = function() {
        r(), a();
      };
      var o = t, i = n, l = ls(o), c = ls(i), u = Ea(i), d = new Set([u].concat(Pe(l), Pe(c)));
      return d.forEach(function(v) {
        v.addEventListener("scroll", f, {
          passive: !0
        });
      }), u.addEventListener("resize", f, {
        passive: !0
      }), r(), function() {
        d.forEach(function(v) {
          v.removeEventListener("scroll", f), u.removeEventListener("resize", f);
        });
      };
    }
  }, [e, t, n]);
}
function Wb(e, t, n, r, a, o, i, l) {
  var c = s.useRef(e), u = s.useRef(!1);
  c.current !== e && (u.current = !0, c.current = e), s.useEffect(function() {
    var d = ft(function() {
      u.current = !1;
    });
    return function() {
      ft.cancel(d);
    };
  }, [e]), s.useEffect(function() {
    if (t && r && (!a || o)) {
      var d = function() {
        var E = !1, y = function(T) {
          var N = T.target;
          E = i(N);
        }, $ = function(T) {
          var N = T.target;
          !u.current && c.current && !E && !i(N) && l(!1);
        };
        return [y, $];
      }, f = d(), v = G(f, 2), m = v[0], h = v[1], b = d(), p = G(b, 2), g = p[0], C = p[1], S = Ea(r);
      S.addEventListener("mousedown", m, !0), S.addEventListener("click", h, !0), S.addEventListener("contextmenu", h, !0);
      var x = eo(n);
      return x && (x.addEventListener("mousedown", g, !0), x.addEventListener("click", C, !0), x.addEventListener("contextmenu", C, !0)), function() {
        S.removeEventListener("mousedown", m, !0), S.removeEventListener("click", h, !0), S.removeEventListener("contextmenu", h, !0), x && (x.removeEventListener("mousedown", g, !0), x.removeEventListener("click", C, !0), x.removeEventListener("contextmenu", C, !0));
      };
    }
  }, [t, n, r, a, o]);
}
function Ub(e) {
  var t = e.prefixCls, n = e.align, r = e.arrow, a = e.arrowPos, o = r || {}, i = o.className, l = o.content, c = a.x, u = c === void 0 ? 0 : c, d = a.y, f = d === void 0 ? 0 : d, v = s.useRef();
  if (!n || !n.points)
    return null;
  var m = {
    position: "absolute"
  };
  if (n.autoArrow !== !1) {
    var h = n.points[0], b = n.points[1], p = h[0], g = h[1], C = b[0], S = b[1];
    p === C || !["t", "b"].includes(p) ? m.top = f : p === "t" ? m.top = 0 : m.bottom = 0, g === S || !["l", "r"].includes(g) ? m.left = u : g === "l" ? m.left = 0 : m.right = 0;
  }
  return /* @__PURE__ */ s.createElement("div", {
    ref: v,
    className: he("".concat(t, "-arrow"), i),
    style: m
  }, l);
}
function Gb(e) {
  var t = e.prefixCls, n = e.open, r = e.zIndex, a = e.mask, o = e.motion;
  return a ? /* @__PURE__ */ s.createElement(ba, je({}, o, {
    motionAppear: !0,
    visible: n,
    removeOnLeave: !0
  }), function(i) {
    var l = i.className;
    return /* @__PURE__ */ s.createElement("div", {
      style: {
        zIndex: r
      },
      className: he("".concat(t, "-mask"), l)
    });
  }) : null;
}
var qb = /* @__PURE__ */ s.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
}), Kb = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.popup, r = e.className, a = e.prefixCls, o = e.style, i = e.target, l = e.onVisibleChanged, c = e.open, u = e.keepDom, d = e.fresh, f = e.onClick, v = e.mask, m = e.arrow, h = e.arrowPos, b = e.align, p = e.motion, g = e.maskMotion, C = e.forceRender, S = e.getPopupContainer, x = e.autoDestroy, R = e.portal, E = e.zIndex, y = e.onMouseEnter, $ = e.onMouseLeave, I = e.onPointerEnter, T = e.ready, N = e.offsetX, F = e.offsetY, A = e.offsetR, D = e.offsetB, z = e.onAlign, M = e.onPrepare, O = e.stretch, P = e.targetWidth, L = e.targetHeight, j = typeof n == "function" ? n() : n, V = c || u, k = (S == null ? void 0 : S.length) > 0, U = s.useState(!S || !k), W = G(U, 2), le = W[0], te = W[1];
  if (gt(function() {
    !le && k && i && te(!0);
  }, [le, k, i]), !le)
    return null;
  var X = "auto", K = {
    left: "-1000vw",
    top: "-1000vh",
    right: X,
    bottom: X
  };
  if (T || !c) {
    var ee, ce = b.points, ge = b.dynamicInset || ((ee = b._experimental) === null || ee === void 0 ? void 0 : ee.dynamicInset), ve = ge && ce[0][1] === "r", ae = ge && ce[0][0] === "b";
    ve ? (K.right = A, K.left = X) : (K.left = N, K.right = X), ae ? (K.bottom = D, K.top = X) : (K.top = F, K.bottom = X);
  }
  var Ce = {};
  return O && (O.includes("height") && L ? Ce.height = L : O.includes("minHeight") && L && (Ce.minHeight = L), O.includes("width") && P ? Ce.width = P : O.includes("minWidth") && P && (Ce.minWidth = P)), c || (Ce.pointerEvents = "none"), /* @__PURE__ */ s.createElement(R, {
    open: C || V,
    getContainer: S && function() {
      return S(i);
    },
    autoDestroy: x
  }, /* @__PURE__ */ s.createElement(Gb, {
    prefixCls: a,
    open: c,
    zIndex: E,
    mask: v,
    motion: g
  }), /* @__PURE__ */ s.createElement(er, {
    onResize: z,
    disabled: !c
  }, function(Oe) {
    return /* @__PURE__ */ s.createElement(ba, je({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: C,
      leavedClassName: "".concat(a, "-hidden")
    }, p, {
      onAppearPrepare: M,
      onEnterPrepare: M,
      visible: c,
      onVisibleChanged: function(Ie) {
        var oe;
        p == null || (oe = p.onVisibleChanged) === null || oe === void 0 || oe.call(p, Ie), l(Ie);
      }
    }), function(Ne, Ie) {
      var oe = Ne.className, pe = Ne.style, se = he(a, oe, r);
      return /* @__PURE__ */ s.createElement("div", {
        ref: jn(Oe, t, Ie),
        className: se,
        style: B(B(B(B({
          "--arrow-x": "".concat(h.x || 0, "px"),
          "--arrow-y": "".concat(h.y || 0, "px")
        }, K), Ce), pe), {}, {
          boxSizing: "border-box",
          zIndex: E
        }, o),
        onMouseEnter: y,
        onMouseLeave: $,
        onPointerEnter: I,
        onClick: f
      }, m && /* @__PURE__ */ s.createElement(Ub, {
        prefixCls: a,
        arrow: m,
        arrowPos: h,
        align: b
      }), /* @__PURE__ */ s.createElement(qb, {
        cache: !c && !d
      }, j));
    });
  }));
}), Xb = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.children, r = e.getTriggerDOMNode, a = pa(n), o = s.useCallback(function(l) {
    $s(t, r ? r(l) : l);
  }, [r]), i = $o(o, n.ref);
  return a ? /* @__PURE__ */ s.cloneElement(n, {
    ref: i
  }) : n;
}), Yb = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function Qb() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : bd, t = /* @__PURE__ */ s.forwardRef(function(n, r) {
    var a = n.prefixCls, o = a === void 0 ? "rc-trigger-popup" : a, i = n.children, l = n.action, c = l === void 0 ? "hover" : l, u = n.showAction, d = n.hideAction, f = n.popupVisible, v = n.defaultPopupVisible, m = n.onPopupVisibleChange, h = n.afterPopupVisibleChange, b = n.mouseEnterDelay, p = n.mouseLeaveDelay, g = p === void 0 ? 0.1 : p, C = n.focusDelay, S = n.blurDelay, x = n.mask, R = n.maskClosable, E = R === void 0 ? !0 : R, y = n.getPopupContainer, $ = n.forceRender, I = n.autoDestroy, T = n.destroyPopupOnHide, N = n.popup, F = n.popupClassName, A = n.popupStyle, D = n.popupPlacement, z = n.builtinPlacements, M = z === void 0 ? {} : z, O = n.popupAlign, P = n.zIndex, L = n.stretch, j = n.getPopupClassNameFromAlign, V = n.fresh, k = n.alignPoint, U = n.onPopupClick, W = n.onPopupAlign, le = n.arrow, te = n.popupMotion, X = n.maskMotion, K = n.popupTransitionName, ee = n.popupAnimation, ce = n.maskTransitionName, ge = n.maskAnimation, ve = n.className, ae = n.getTriggerDOMNode, Ce = vt(n, Yb), Oe = I || T || !1, Ne = s.useState(!1), Ie = G(Ne, 2), oe = Ie[0], pe = Ie[1];
    gt(function() {
      pe(Bs());
    }, []);
    var se = s.useRef({}), ie = s.useContext(pc), _e = s.useMemo(function() {
      return {
        registerSubPopup: function(Ve, dt) {
          se.current[Ve] = dt, ie == null || ie.registerSubPopup(Ve, dt);
        }
      };
    }, [ie]), He = e0(), Te = s.useState(null), ue = G(Te, 2), de = ue[0], Ae = ue[1], Ke = an(function(xe) {
      Xa(xe) && de !== xe && Ae(xe), ie == null || ie.registerSubPopup(He, xe);
    }), Be = s.useState(null), tt = G(Be, 2), De = tt[0], _t = tt[1], lt = an(function(xe) {
      Xa(xe) && De !== xe && _t(xe);
    }), ot = s.Children.only(i), Xe = (ot == null ? void 0 : ot.props) || {}, ht = {}, at = an(function(xe) {
      var Ve, dt, St = De;
      return (St == null ? void 0 : St.contains(xe)) || ((Ve = eo(St)) === null || Ve === void 0 ? void 0 : Ve.host) === xe || xe === St || (de == null ? void 0 : de.contains(xe)) || ((dt = eo(de)) === null || dt === void 0 ? void 0 : dt.host) === xe || xe === de || Object.values(se.current).some(function(pt) {
        return (pt == null ? void 0 : pt.contains(xe)) || xe === pt;
      });
    }), Ye = yc(o, te, ee, K), qe = yc(o, X, ge, ce), fe = s.useState(v || !1), be = G(fe, 2), Me = be[0], J = be[1], me = f ?? Me, ke = an(function(xe) {
      f === void 0 && J(xe);
    });
    gt(function() {
      J(f || !1);
    }, [f]);
    var Ue = s.useRef(me);
    Ue.current = me;
    var Re = an(function(xe) {
      ua.flushSync(function() {
        me !== xe && (ke(xe), m == null || m(xe));
      });
    }), Q = s.useRef(), Y = function() {
      clearTimeout(Q.current);
    }, ne = function(Ve) {
      var dt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      Y(), dt === 0 ? Re(Ve) : Q.current = setTimeout(function() {
        Re(Ve);
      }, dt * 1e3);
    };
    s.useEffect(function() {
      return Y;
    }, []);
    var $e = s.useState(!1), Le = G($e, 2), Qe = Le[0], nt = Le[1];
    gt(function(xe) {
      (!xe || me) && nt(!0);
    }, [me]);
    var Et = s.useState(null), ct = G(Et, 2), rt = ct[0], $t = ct[1], Vt = s.useState([0, 0]), Ot = G(Vt, 2), Qt = Ot[0], we = Ot[1], ye = function(Ve) {
      we([Ve.clientX, Ve.clientY]);
    }, Ge = Bb(me, de, k ? Qt : De, D, M, O, W), Ze = G(Ge, 11), mt = Ze[0], Nn = Ze[1], Nt = Ze[2], Tn = Ze[3], _n = Ze[4], qt = Ze[5], Jt = Ze[6], tr = Ze[7], cn = Ze[8], Zt = Ze[9], un = Ze[10], dn = zb(oe, c, u, d), Kt = G(dn, 2), fn = Kt[0], xn = Kt[1], An = fn.has("click"), wn = xn.has("click") || xn.has("contextMenu"), Ht = an(function() {
      Qe || un();
    }), ze = function() {
      Ue.current && k && wn && ne(!1);
    };
    kb(me, De, de, Ht, ze), gt(function() {
      Ht();
    }, [Qt, D]), gt(function() {
      me && !(M != null && M[D]) && Ht();
    }, [JSON.stringify(O)]);
    var Fe = s.useMemo(function() {
      var xe = Hb(M, o, Zt, k);
      return he(xe, j == null ? void 0 : j(Zt));
    }, [Zt, j, M, o, k]);
    s.useImperativeHandle(r, function() {
      return {
        forceAlign: Ht
      };
    });
    var yt = s.useState(0), xt = G(yt, 2), ut = xt[0], It = xt[1], At = s.useState(0), vn = G(At, 2), Xt = vn[0], en = vn[1], Bt = function() {
      if (L && De) {
        var Ve = De.getBoundingClientRect();
        It(Ve.width), en(Ve.height);
      }
    }, Un = function() {
      Bt(), Ht();
    }, Gn = function(Ve) {
      nt(!1), un(), h == null || h(Ve);
    }, Mt = function() {
      return new Promise(function(Ve) {
        Bt(), $t(function() {
          return Ve;
        });
      });
    };
    gt(function() {
      rt && (un(), rt(), $t(null));
    }, [rt]);
    function mn(xe, Ve, dt, St) {
      ht[xe] = function(pt) {
        var xr;
        St == null || St(pt), ne(Ve, dt);
        for (var wr = arguments.length, Ra = new Array(wr > 1 ? wr - 1 : 0), zn = 1; zn < wr; zn++)
          Ra[zn - 1] = arguments[zn];
        (xr = Xe[xe]) === null || xr === void 0 || xr.call.apply(xr, [Xe, pt].concat(Ra));
      };
    }
    (An || wn) && (ht.onClick = function(xe) {
      var Ve;
      Ue.current && wn ? ne(!1) : !Ue.current && An && (ye(xe), ne(!0));
      for (var dt = arguments.length, St = new Array(dt > 1 ? dt - 1 : 0), pt = 1; pt < dt; pt++)
        St[pt - 1] = arguments[pt];
      (Ve = Xe.onClick) === null || Ve === void 0 || Ve.call.apply(Ve, [Xe, xe].concat(St));
    }), Wb(me, wn, De, de, x, E, at, ne);
    var gn = fn.has("hover"), Dn = xn.has("hover"), Fn, nr;
    gn && (mn("onMouseEnter", !0, b, function(xe) {
      ye(xe);
    }), mn("onPointerEnter", !0, b, function(xe) {
      ye(xe);
    }), Fn = function() {
      (me || Qe) && ne(!0, b);
    }, k && (ht.onMouseMove = function(xe) {
      var Ve;
      (Ve = Xe.onMouseMove) === null || Ve === void 0 || Ve.call(Xe, xe);
    })), Dn && (mn("onMouseLeave", !1, g), mn("onPointerLeave", !1, g), nr = function() {
      ne(!1, g);
    }), fn.has("focus") && mn("onFocus", !0, C), xn.has("focus") && mn("onBlur", !1, S), fn.has("contextMenu") && (ht.onContextMenu = function(xe) {
      var Ve;
      Ue.current && xn.has("contextMenu") ? ne(!1) : (ye(xe), ne(!0)), xe.preventDefault();
      for (var dt = arguments.length, St = new Array(dt > 1 ? dt - 1 : 0), pt = 1; pt < dt; pt++)
        St[pt - 1] = arguments[pt];
      (Ve = Xe.onContextMenu) === null || Ve === void 0 || Ve.call.apply(Ve, [Xe, xe].concat(St));
    }), ve && (ht.className = he(Xe.className, ve));
    var qn = B(B({}, Xe), ht), Sr = {}, Yr = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    Yr.forEach(function(xe) {
      Ce[xe] && (Sr[xe] = function() {
        for (var Ve, dt = arguments.length, St = new Array(dt), pt = 0; pt < dt; pt++)
          St[pt] = arguments[pt];
        (Ve = qn[xe]) === null || Ve === void 0 || Ve.call.apply(Ve, [qn].concat(St)), Ce[xe].apply(Ce, St);
      });
    });
    var Cr = /* @__PURE__ */ s.cloneElement(ot, B(B({}, qn), Sr)), En = {
      x: qt,
      y: Jt
    }, Qr = le ? B({}, le !== !0 ? le : {}) : null;
    return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(er, {
      disabled: !me,
      ref: lt,
      onResize: Un
    }, /* @__PURE__ */ s.createElement(Xb, {
      getTriggerDOMNode: ae
    }, Cr)), /* @__PURE__ */ s.createElement(pc.Provider, {
      value: _e
    }, /* @__PURE__ */ s.createElement(Kb, {
      portal: e,
      ref: Ke,
      prefixCls: o,
      popup: N,
      className: he(F, Fe),
      style: A,
      target: De,
      onMouseEnter: Fn,
      onMouseLeave: nr,
      onPointerEnter: Fn,
      zIndex: P,
      open: me,
      keepDom: Qe,
      fresh: V,
      onClick: U,
      mask: x,
      motion: Ye,
      maskMotion: qe,
      onVisibleChanged: Gn,
      onPrepare: Mt,
      forceRender: $,
      autoDestroy: Oe,
      getPopupContainer: y,
      align: Zt,
      arrow: Qr,
      arrowPos: En,
      ready: mt,
      offsetX: Nn,
      offsetY: Nt,
      offsetR: Tn,
      offsetB: _n,
      onAlign: Ht,
      stretch: L,
      targetWidth: ut / tr,
      targetHeight: Xt / cn
    })));
  });
  return t;
}
const Jb = Qb(bd);
var Zb = ["prefixCls", "disabled", "visible", "children", "popupElement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "builtinPlacements", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"], ey = function(t) {
  var n = t === !0 ? 0 : 1;
  return {
    bottomLeft: {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    bottomRight: {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    topLeft: {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    topRight: {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    }
  };
}, ty = function(t, n) {
  var r = t.prefixCls;
  t.disabled;
  var a = t.visible, o = t.children, i = t.popupElement, l = t.animation, c = t.transitionName, u = t.dropdownStyle, d = t.dropdownClassName, f = t.direction, v = f === void 0 ? "ltr" : f, m = t.placement, h = t.builtinPlacements, b = t.dropdownMatchSelectWidth, p = t.dropdownRender, g = t.dropdownAlign, C = t.getPopupContainer, S = t.empty, x = t.getTriggerDOMNode, R = t.onPopupVisibleChange, E = t.onPopupMouseEnter, y = vt(t, Zb), $ = "".concat(r, "-dropdown"), I = i;
  p && (I = p(i));
  var T = s.useMemo(function() {
    return h || ey(b);
  }, [h, b]), N = l ? "".concat($, "-").concat(l) : c, F = typeof b == "number", A = s.useMemo(function() {
    return F ? null : b === !1 ? "minWidth" : "width";
  }, [b, F]), D = u;
  F && (D = B(B({}, D), {}, {
    width: b
  }));
  var z = s.useRef(null);
  return s.useImperativeHandle(n, function() {
    return {
      getPopupElement: function() {
        return z.current;
      }
    };
  }), /* @__PURE__ */ s.createElement(Jb, je({}, y, {
    showAction: R ? ["click"] : [],
    hideAction: R ? ["click"] : [],
    popupPlacement: m || (v === "rtl" ? "bottomRight" : "bottomLeft"),
    builtinPlacements: T,
    prefixCls: $,
    popupTransitionName: N,
    popup: /* @__PURE__ */ s.createElement("div", {
      ref: z,
      onMouseEnter: E
    }, I),
    stretch: A,
    popupAlign: g,
    popupVisible: a,
    getPopupContainer: C,
    popupClassName: he(d, _({}, "".concat($, "-empty"), S)),
    popupStyle: D,
    getTriggerDOMNode: x,
    onPopupVisibleChange: R
  }), o);
}, zd = /* @__PURE__ */ s.forwardRef(ty);
zd.displayName = "SelectTrigger";
function Ec(e, t) {
  var n = e.key, r;
  return "value" in e && (r = e.value), n ?? (r !== void 0 ? r : "rc-index-key-".concat(t));
}
function Vd(e, t) {
  var n = e || {}, r = n.label, a = n.value, o = n.options, i = n.groupLabel, l = r || (t ? "children" : "label");
  return {
    label: l,
    value: a || "value",
    options: o || "options",
    groupLabel: i || l
  };
}
function ny(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.fieldNames, r = t.childrenAsData, a = [], o = Vd(n, !1), i = o.label, l = o.value, c = o.options, u = o.groupLabel;
  function d(f, v) {
    f.forEach(function(m) {
      if (v || !(c in m)) {
        var h = m[l];
        a.push({
          key: Ec(m, a.length),
          groupOption: v,
          data: m,
          label: m[i],
          value: h
        });
      } else {
        var b = m[u];
        b === void 0 && r && (b = m.label), a.push({
          key: Ec(m, a.length),
          group: !0,
          data: m,
          label: b
        }), d(m[c], !0);
      }
    });
  }
  return d(e, !1), a;
}
function cs(e) {
  var t = B({}, e);
  return "props" in t || Object.defineProperty(t, "props", {
    get: function() {
      return Wt(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), t;
    }
  }), t;
}
function ry(e, t) {
  if (!t || !t.length)
    return null;
  var n = !1;
  function r(o, i) {
    var l = Pu(i), c = l[0], u = l.slice(1);
    if (!c)
      return [o];
    var d = o.split(c);
    return n = n || d.length > 1, d.reduce(function(f, v) {
      return [].concat(Pe(f), Pe(r(v, u)));
    }, []).filter(function(f) {
      return f;
    });
  }
  var a = r(e, t);
  return n ? a : null;
}
var ay = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "suffixIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "builtinPlacements", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"], oy = ["value", "onChange", "removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabIndex"];
function us(e) {
  return e === "tags" || e === "multiple";
}
var iy = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n, r, a = e.id, o = e.prefixCls, i = e.className, l = e.showSearch, c = e.tagRender, u = e.direction, d = e.omitDomProps, f = e.displayValues, v = e.onDisplayValuesChange, m = e.emptyOptions, h = e.notFoundContent, b = h === void 0 ? "Not Found" : h, p = e.onClear, g = e.mode, C = e.disabled, S = e.loading, x = e.getInputElement, R = e.getRawInputElement, E = e.open, y = e.defaultOpen, $ = e.onDropdownVisibleChange, I = e.activeValue, T = e.onActiveValueChange, N = e.activeDescendantId, F = e.searchValue, A = e.autoClearSearchValue, D = e.onSearch, z = e.onSearchSplit, M = e.tokenSeparators, O = e.allowClear, P = e.suffixIcon, L = e.clearIcon, j = e.OptionList, V = e.animation, k = e.transitionName, U = e.dropdownStyle, W = e.dropdownClassName, le = e.dropdownMatchSelectWidth, te = e.dropdownRender, X = e.dropdownAlign, K = e.placement, ee = e.builtinPlacements, ce = e.getPopupContainer, ge = e.showAction, ve = ge === void 0 ? [] : ge, ae = e.onFocus, Ce = e.onBlur, Oe = e.onKeyUp, Ne = e.onKeyDown, Ie = e.onMouseDown, oe = vt(e, ay), pe = us(g), se = (l !== void 0 ? l : pe) || g === "combobox", ie = B({}, oe);
  oy.forEach(function(ze) {
    delete ie[ze];
  }), d == null || d.forEach(function(ze) {
    delete ie[ze];
  });
  var _e = s.useState(!1), He = G(_e, 2), Te = He[0], ue = He[1];
  s.useEffect(function() {
    ue(Bs());
  }, []);
  var de = s.useRef(null), Ae = s.useRef(null), Ke = s.useRef(null), Be = s.useRef(null), tt = s.useRef(null), De = s.useRef(!1), _t = gb(), lt = G(_t, 3), ot = lt[0], Xe = lt[1], ht = lt[2];
  s.useImperativeHandle(t, function() {
    var ze, Fe;
    return {
      focus: (ze = Be.current) === null || ze === void 0 ? void 0 : ze.focus,
      blur: (Fe = Be.current) === null || Fe === void 0 ? void 0 : Fe.blur,
      scrollTo: function(xt) {
        var ut;
        return (ut = tt.current) === null || ut === void 0 ? void 0 : ut.scrollTo(xt);
      }
    };
  });
  var at = s.useMemo(function() {
    var ze;
    if (g !== "combobox")
      return F;
    var Fe = (ze = f[0]) === null || ze === void 0 ? void 0 : ze.value;
    return typeof Fe == "string" || typeof Fe == "number" ? String(Fe) : "";
  }, [F, g, f]), Ye = g === "combobox" && typeof x == "function" && x() || null, qe = typeof R == "function" && R(), fe = $o(Ae, qe == null || (n = qe.props) === null || n === void 0 ? void 0 : n.ref), be = s.useState(!1), Me = G(be, 2), J = Me[0], me = Me[1];
  gt(function() {
    me(!0);
  }, []);
  var ke = mr(!1, {
    defaultValue: y,
    value: E
  }), Ue = G(ke, 2), Re = Ue[0], Q = Ue[1], Y = J ? Re : !1, ne = !b && m;
  (C || ne && Y && g === "combobox") && (Y = !1);
  var $e = ne ? !1 : Y, Le = s.useCallback(function(ze) {
    var Fe = ze !== void 0 ? ze : !Y;
    C || (Q(Fe), Y !== Fe && ($ == null || $(Fe)));
  }, [C, Y, Q, $]), Qe = s.useMemo(function() {
    return (M || []).some(function(ze) {
      return [`
`, `\r
`].includes(ze);
    });
  }, [M]), nt = function(Fe, yt, xt) {
    var ut = !0, It = Fe;
    T == null || T(null);
    var At = xt ? null : ry(Fe, M);
    return g !== "combobox" && At && (It = "", z == null || z(At), Le(!1), ut = !1), D && at !== It && D(It, {
      source: yt ? "typing" : "effect"
    }), ut;
  }, Et = function(Fe) {
    !Fe || !Fe.trim() || D(Fe, {
      source: "submit"
    });
  };
  s.useEffect(function() {
    !Y && !pe && g !== "combobox" && nt("", !1, !1);
  }, [Y]), s.useEffect(function() {
    Re && C && Q(!1), C && !De.current && Xe(!1);
  }, [C]);
  var ct = Td(), rt = G(ct, 2), $t = rt[0], Vt = rt[1], Ot = function(Fe) {
    var yt = $t(), xt = Fe.which;
    if (xt === Z.ENTER && (g !== "combobox" && Fe.preventDefault(), Y || Le(!0)), Vt(!!at), xt === Z.BACKSPACE && !yt && pe && !at && f.length) {
      for (var ut = Pe(f), It = null, At = ut.length - 1; At >= 0; At -= 1) {
        var vn = ut[At];
        if (!vn.disabled) {
          ut.splice(At, 1), It = vn;
          break;
        }
      }
      It && v(ut, {
        type: "remove",
        values: [It]
      });
    }
    for (var Xt = arguments.length, en = new Array(Xt > 1 ? Xt - 1 : 0), Bt = 1; Bt < Xt; Bt++)
      en[Bt - 1] = arguments[Bt];
    if (Y && tt.current) {
      var Un;
      (Un = tt.current).onKeyDown.apply(Un, [Fe].concat(en));
    }
    Ne == null || Ne.apply(void 0, [Fe].concat(en));
  }, Qt = function(Fe) {
    for (var yt = arguments.length, xt = new Array(yt > 1 ? yt - 1 : 0), ut = 1; ut < yt; ut++)
      xt[ut - 1] = arguments[ut];
    if (Y && tt.current) {
      var It;
      (It = tt.current).onKeyUp.apply(It, [Fe].concat(xt));
    }
    Oe == null || Oe.apply(void 0, [Fe].concat(xt));
  }, we = function(Fe) {
    var yt = f.filter(function(xt) {
      return xt !== Fe;
    });
    v(yt, {
      type: "remove",
      values: [Fe]
    });
  }, ye = s.useRef(!1), Ge = function() {
    Xe(!0), C || (ae && !ye.current && ae.apply(void 0, arguments), ve.includes("focus") && Le(!0)), ye.current = !0;
  }, Ze = function() {
    De.current = !0, Xe(!1, function() {
      ye.current = !1, De.current = !1, Le(!1);
    }), !C && (at && (g === "tags" ? D(at, {
      source: "submit"
    }) : g === "multiple" && D("", {
      source: "blur"
    })), Ce && Ce.apply(void 0, arguments));
  }, mt = [];
  s.useEffect(function() {
    return function() {
      mt.forEach(function(ze) {
        return clearTimeout(ze);
      }), mt.splice(0, mt.length);
    };
  }, []);
  var Nn = function(Fe) {
    var yt, xt = Fe.target, ut = (yt = Ke.current) === null || yt === void 0 ? void 0 : yt.getPopupElement();
    if (ut && ut.contains(xt)) {
      var It = setTimeout(function() {
        var en = mt.indexOf(It);
        if (en !== -1 && mt.splice(en, 1), ht(), !Te && !ut.contains(document.activeElement)) {
          var Bt;
          (Bt = Be.current) === null || Bt === void 0 || Bt.focus();
        }
      });
      mt.push(It);
    }
    for (var At = arguments.length, vn = new Array(At > 1 ? At - 1 : 0), Xt = 1; Xt < At; Xt++)
      vn[Xt - 1] = arguments[Xt];
    Ie == null || Ie.apply(void 0, [Fe].concat(vn));
  }, Nt = s.useState({}), Tn = G(Nt, 2), _n = Tn[1];
  function qt() {
    _n({});
  }
  var Jt;
  qe && (Jt = function(Fe) {
    Le(Fe);
  }), hb(function() {
    var ze;
    return [de.current, (ze = Ke.current) === null || ze === void 0 ? void 0 : ze.getPopupElement()];
  }, $e, Le, !!qe);
  var tr = s.useMemo(function() {
    return B(B({}, e), {}, {
      notFoundContent: b,
      open: Y,
      triggerOpen: $e,
      id: a,
      showSearch: se,
      multiple: pe,
      toggleOpen: Le
    });
  }, [e, b, $e, Y, a, se, pe, Le]), cn = !!P || S, Zt;
  cn && (Zt = /* @__PURE__ */ s.createElement(zo, {
    className: he("".concat(o, "-arrow"), _({}, "".concat(o, "-arrow-loading"), S)),
    customizeIcon: P,
    customizeIconProps: {
      loading: S,
      searchValue: at,
      open: Y,
      focused: ot,
      showSearch: se
    }
  }));
  var un = function() {
    var Fe;
    p == null || p(), (Fe = Be.current) === null || Fe === void 0 || Fe.focus(), v([], {
      type: "clear",
      values: f
    }), nt("", !1, !1);
  }, dn = vb(o, un, f, O, L, C, at, g), Kt = dn.allowClear, fn = dn.clearIcon, xn = /* @__PURE__ */ s.createElement(j, {
    ref: tt
  }), An = he(o, i, (r = {}, _(r, "".concat(o, "-focused"), ot), _(r, "".concat(o, "-multiple"), pe), _(r, "".concat(o, "-single"), !pe), _(r, "".concat(o, "-allow-clear"), O), _(r, "".concat(o, "-show-arrow"), cn), _(r, "".concat(o, "-disabled"), C), _(r, "".concat(o, "-loading"), S), _(r, "".concat(o, "-open"), Y), _(r, "".concat(o, "-customize-input"), Ye), _(r, "".concat(o, "-show-search"), se), r)), wn = /* @__PURE__ */ s.createElement(zd, {
    ref: Ke,
    disabled: C,
    prefixCls: o,
    visible: $e,
    popupElement: xn,
    animation: V,
    transitionName: k,
    dropdownStyle: U,
    dropdownClassName: W,
    direction: u,
    dropdownMatchSelectWidth: le,
    dropdownRender: te,
    dropdownAlign: X,
    placement: K,
    builtinPlacements: ee,
    getPopupContainer: ce,
    empty: m,
    getTriggerDOMNode: function() {
      return Ae.current;
    },
    onPopupVisibleChange: Jt,
    onPopupMouseEnter: qt
  }, qe ? /* @__PURE__ */ s.cloneElement(qe, {
    ref: fe
  }) : /* @__PURE__ */ s.createElement(Dd, je({}, e, {
    domRef: Ae,
    prefixCls: o,
    inputElement: Ye,
    ref: Be,
    id: a,
    showSearch: se,
    autoClearSearchValue: A,
    mode: g,
    activeDescendantId: N,
    tagRender: c,
    values: f,
    open: Y,
    onToggleOpen: Le,
    activeValue: I,
    searchValue: at,
    onSearch: nt,
    onSearchSubmit: Et,
    onRemove: we,
    tokenWithEnter: Qe
  }))), Ht;
  return qe ? Ht = wn : Ht = /* @__PURE__ */ s.createElement("div", je({
    className: An
  }, ie, {
    ref: de,
    onMouseDown: Nn,
    onKeyDown: Ot,
    onKeyUp: Qt,
    onFocus: Ge,
    onBlur: Ze
  }), ot && !Y && /* @__PURE__ */ s.createElement("span", {
    style: {
      width: 0,
      height: 0,
      position: "absolute",
      overflow: "hidden",
      opacity: 0
    },
    "aria-live": "polite"
  }, "".concat(f.map(function(ze) {
    var Fe = ze.label, yt = ze.value;
    return ["number", "string"].includes(We(Fe)) ? Fe : yt;
  }).join(", "))), wn, Zt, Kt && fn), /* @__PURE__ */ s.createElement(Nd.Provider, {
    value: tr
  }, Ht);
});
const sy = function(e, t) {
  var n = s.useRef({
    values: /* @__PURE__ */ new Map(),
    options: /* @__PURE__ */ new Map()
  }), r = s.useMemo(function() {
    var o = n.current, i = o.values, l = o.options, c = e.map(function(f) {
      if (f.label === void 0) {
        var v;
        return B(B({}, f), {}, {
          label: (v = i.get(f.value)) === null || v === void 0 ? void 0 : v.label
        });
      }
      return f;
    }), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
    return c.forEach(function(f) {
      u.set(f.value, f), d.set(f.value, t.get(f.value) || l.get(f.value));
    }), n.current.values = u, n.current.options = d, c;
  }, [e, t]), a = s.useCallback(function(o) {
    return t.get(o) || n.current.options.get(o);
  }, [t]);
  return [r, a];
};
function mi(e, t) {
  return jd(e).join("").toUpperCase().includes(t);
}
const ly = function(e, t, n, r, a) {
  return s.useMemo(function() {
    if (!n || r === !1)
      return e;
    var o = t.options, i = t.label, l = t.value, c = [], u = typeof r == "function", d = n.toUpperCase(), f = u ? r : function(m, h) {
      return a ? mi(h[a], d) : h[o] ? mi(h[i !== "children" ? i : "label"], d) : mi(h[l], d);
    }, v = u ? function(m) {
      return cs(m);
    } : function(m) {
      return m;
    };
    return e.forEach(function(m) {
      if (m[o]) {
        var h = f(n, v(m));
        if (h)
          c.push(m);
        else {
          var b = m[o].filter(function(p) {
            return f(n, v(p));
          });
          b.length && c.push(B(B({}, m), {}, _({}, o, b)));
        }
        return;
      }
      f(n, v(m)) && c.push(m);
    }), c;
  }, [e, r, a, n, t]);
};
var $c = 0, cy = Ut();
function uy() {
  var e;
  return cy ? (e = $c, $c += 1) : e = "TEST_OR_SSR", e;
}
function dy(e) {
  var t = s.useState(), n = G(t, 2), r = n[0], a = n[1];
  return s.useEffect(function() {
    a("rc_select_".concat(uy()));
  }, []), e || r;
}
var fy = ["children", "value"], vy = ["children"];
function my(e) {
  var t = e, n = t.key, r = t.props, a = r.children, o = r.value, i = vt(r, fy);
  return B({
    key: n,
    value: o !== void 0 ? o : n,
    children: a
  }, i);
}
function Hd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return Jn(e).map(function(n, r) {
    if (!/* @__PURE__ */ s.isValidElement(n) || !n.type)
      return null;
    var a = n, o = a.type.isSelectOptGroup, i = a.key, l = a.props, c = l.children, u = vt(l, vy);
    return t || !o ? my(n) : B(B({
      key: "__RC_SELECT_GRP__".concat(i === null ? r : i, "__"),
      label: i
    }, u), {}, {
      options: Hd(c)
    });
  }).filter(function(n) {
    return n;
  });
}
function gy(e, t, n, r, a) {
  return s.useMemo(function() {
    var o = e, i = !e;
    i && (o = Hd(t));
    var l = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), u = function(v, m, h) {
      h && typeof h == "string" && v.set(m[h], m);
    };
    function d(f) {
      for (var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, m = 0; m < f.length; m += 1) {
        var h = f[m];
        !h[n.options] || v ? (l.set(h[n.value], h), u(c, h, n.label), u(c, h, r), u(c, h, a)) : d(h[n.options], !0);
      }
    }
    return d(o), {
      options: o,
      valueOptions: l,
      labelOptions: c
    };
  }, [e, t, n, r, a]);
}
function Rc(e) {
  var t = s.useRef();
  t.current = e;
  var n = s.useCallback(function() {
    return t.current.apply(t, arguments);
  }, []);
  return n;
}
var Ws = function() {
  return null;
};
Ws.isSelectOptGroup = !0;
var Us = function() {
  return null;
};
Us.isSelectOption = !0;
var Bd = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.height, r = e.offsetY, a = e.offsetX, o = e.children, i = e.prefixCls, l = e.onInnerResize, c = e.innerProps, u = e.rtl, d = e.extra, f = {}, v = {
    display: "flex",
    flexDirection: "column"
  };
  if (r !== void 0) {
    var m;
    f = {
      height: n,
      position: "relative",
      overflow: "hidden"
    }, v = B(B({}, v), {}, (m = {
      transform: "translateY(".concat(r, "px)")
    }, _(m, u ? "marginRight" : "marginLeft", -a), _(m, "position", "absolute"), _(m, "left", 0), _(m, "right", 0), _(m, "top", 0), m));
  }
  return /* @__PURE__ */ s.createElement("div", {
    style: f
  }, /* @__PURE__ */ s.createElement(er, {
    onResize: function(b) {
      var p = b.offsetHeight;
      p && l && l();
    }
  }, /* @__PURE__ */ s.createElement("div", je({
    style: v,
    className: he(_({}, "".concat(i, "-holder-inner"), i)),
    ref: t
  }, c), o, d)));
});
Bd.displayName = "Filler";
function Oc(e, t) {
  var n = "touches" in e ? e.touches[0] : e;
  return n[t ? "pageX" : "pageY"];
}
var Ic = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n, r = e.prefixCls, a = e.rtl, o = e.scrollOffset, i = e.scrollRange, l = e.onStartMove, c = e.onStopMove, u = e.onScroll, d = e.horizontal, f = e.spinSize, v = e.containerSize, m = e.style, h = e.thumbStyle, b = s.useState(!1), p = G(b, 2), g = p[0], C = p[1], S = s.useState(null), x = G(S, 2), R = x[0], E = x[1], y = s.useState(null), $ = G(y, 2), I = $[0], T = $[1], N = !a, F = s.useRef(), A = s.useRef(), D = s.useState(!1), z = G(D, 2), M = z[0], O = z[1], P = s.useRef(), L = function() {
    clearTimeout(P.current), O(!0), P.current = setTimeout(function() {
      O(!1);
    }, 3e3);
  }, j = i - v || 0, V = v - f || 0, k = j > 0, U = s.useMemo(function() {
    if (o === 0 || j === 0)
      return 0;
    var ve = o / j;
    return ve * V;
  }, [o, j, V]), W = function(ae) {
    ae.stopPropagation(), ae.preventDefault();
  }, le = s.useRef({
    top: U,
    dragging: g,
    pageY: R,
    startTop: I
  });
  le.current = {
    top: U,
    dragging: g,
    pageY: R,
    startTop: I
  };
  var te = function(ae) {
    C(!0), E(Oc(ae, d)), T(le.current.top), l(), ae.stopPropagation(), ae.preventDefault();
  };
  s.useEffect(function() {
    var ve = function(Ne) {
      Ne.preventDefault();
    }, ae = F.current, Ce = A.current;
    return ae.addEventListener("touchstart", ve), Ce.addEventListener("touchstart", te), function() {
      ae.removeEventListener("touchstart", ve), Ce.removeEventListener("touchstart", te);
    };
  }, []);
  var X = s.useRef();
  X.current = j;
  var K = s.useRef();
  K.current = V, s.useEffect(function() {
    if (g) {
      var ve, ae = function(Ne) {
        var Ie = le.current, oe = Ie.dragging, pe = Ie.pageY, se = Ie.startTop;
        if (ft.cancel(ve), oe) {
          var ie = Oc(Ne, d) - pe, _e = se;
          !N && d ? _e -= ie : _e += ie;
          var He = X.current, Te = K.current, ue = Te ? _e / Te : 0, de = Math.ceil(ue * He);
          de = Math.max(de, 0), de = Math.min(de, He), ve = ft(function() {
            u(de, d);
          });
        }
      }, Ce = function() {
        C(!1), c();
      };
      return window.addEventListener("mousemove", ae), window.addEventListener("touchmove", ae), window.addEventListener("mouseup", Ce), window.addEventListener("touchend", Ce), function() {
        window.removeEventListener("mousemove", ae), window.removeEventListener("touchmove", ae), window.removeEventListener("mouseup", Ce), window.removeEventListener("touchend", Ce), ft.cancel(ve);
      };
    }
  }, [g]), s.useEffect(function() {
    L();
  }, [o]), s.useImperativeHandle(t, function() {
    return {
      delayHidden: L
    };
  });
  var ee = "".concat(r, "-scrollbar"), ce = {
    position: "absolute",
    visibility: M && k ? null : "hidden"
  }, ge = {
    position: "absolute",
    background: "rgba(0, 0, 0, 0.5)",
    borderRadius: 99,
    cursor: "pointer",
    userSelect: "none"
  };
  return d ? (ce.height = 8, ce.left = 0, ce.right = 0, ce.bottom = 0, ge.height = "100%", ge.width = f, N ? ge.left = U : ge.right = U) : (ce.width = 8, ce.top = 0, ce.bottom = 0, N ? ce.right = 0 : ce.left = 0, ge.width = "100%", ge.height = f, ge.top = U), /* @__PURE__ */ s.createElement("div", {
    ref: F,
    className: he(ee, (n = {}, _(n, "".concat(ee, "-horizontal"), d), _(n, "".concat(ee, "-vertical"), !d), _(n, "".concat(ee, "-visible"), M), n)),
    style: B(B({}, ce), m),
    onMouseDown: W,
    onMouseMove: L
  }, /* @__PURE__ */ s.createElement("div", {
    ref: A,
    className: he("".concat(ee, "-thumb"), _({}, "".concat(ee, "-thumb-moving"), g)),
    style: B(B({}, ge), h),
    onMouseDown: te
  }));
});
function hy(e) {
  var t = e.children, n = e.setRef, r = s.useCallback(function(a) {
    n(a);
  }, []);
  return /* @__PURE__ */ s.cloneElement(t, {
    ref: r
  });
}
function py(e, t, n, r, a, o, i) {
  var l = i.getKey;
  return e.slice(t, n + 1).map(function(c, u) {
    var d = t + u, f = o(c, d, {
      style: {
        width: r
      }
    }), v = l(c);
    return /* @__PURE__ */ s.createElement(hy, {
      key: v,
      setRef: function(h) {
        return a(c, h);
      }
    }, f);
  });
}
var by = /* @__PURE__ */ function() {
  function e() {
    sn(this, e), this.maps = void 0, this.id = 0, this.maps = /* @__PURE__ */ Object.create(null);
  }
  return ln(e, [{
    key: "set",
    value: function(n, r) {
      this.maps[n] = r, this.id += 1;
    }
  }, {
    key: "get",
    value: function(n) {
      return this.maps[n];
    }
  }]), e;
}();
function yy(e, t, n) {
  var r = s.useState(0), a = G(r, 2), o = a[0], i = a[1], l = s.useRef(/* @__PURE__ */ new Map()), c = s.useRef(new by()), u = s.useRef();
  function d() {
    ft.cancel(u.current);
  }
  function f() {
    var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    d();
    var h = function() {
      l.current.forEach(function(p, g) {
        if (p && p.offsetParent) {
          var C = ra(p), S = C.offsetHeight;
          c.current.get(g) !== S && c.current.set(g, C.offsetHeight);
        }
      }), i(function(p) {
        return p + 1;
      });
    };
    m ? h() : u.current = ft(h);
  }
  function v(m, h) {
    var b = e(m), p = l.current.get(b);
    h ? (l.current.set(b, h), f()) : l.current.delete(b), !p != !h && (h ? t == null || t(m) : n == null || n(m));
  }
  return s.useEffect(function() {
    return d;
  }, []), [v, f, c.current, o];
}
var Sy = 10;
function Cy(e, t, n, r, a, o, i, l) {
  var c = s.useRef(), u = s.useState(null), d = G(u, 2), f = d[0], v = d[1];
  return gt(function() {
    if (f && f.times < Sy) {
      if (!e.current) {
        v(function(L) {
          return B({}, L);
        });
        return;
      }
      o();
      var m = f.targetAlign, h = f.originAlign, b = f.index, p = f.offset, g = e.current.clientHeight, C = !1, S = m, x = null;
      if (g) {
        for (var R = m || h, E = 0, y = 0, $ = 0, I = Math.min(t.length - 1, b), T = 0; T <= I; T += 1) {
          var N = a(t[T]);
          y = E;
          var F = n.get(N);
          $ = y + (F === void 0 ? r : F), E = $;
        }
        for (var A = R === "top" ? p : g - p, D = I; D >= 0; D -= 1) {
          var z = a(t[D]), M = n.get(z);
          if (M === void 0) {
            C = !0;
            break;
          }
          if (A -= M, A <= 0)
            break;
        }
        switch (R) {
          case "top":
            x = y - p;
            break;
          case "bottom":
            x = $ - g + p;
            break;
          default: {
            var O = e.current.scrollTop, P = O + g;
            y < O ? S = "top" : $ > P && (S = "bottom");
          }
        }
        x !== null && i(x), x !== f.lastTop && (C = !0);
      }
      C && v(function(L) {
        return B(B({}, L), {}, {
          times: L.times + 1,
          targetAlign: S,
          lastTop: x
        });
      });
    }
  }, [f, e.current]), function(m) {
    if (m == null) {
      l();
      return;
    }
    if (ft.cancel(c.current), typeof m == "number")
      i(m);
    else if (m && We(m) === "object") {
      var h, b = m.align;
      "index" in m ? h = m.index : h = t.findIndex(function(C) {
        return a(C) === m.key;
      });
      var p = m.offset, g = p === void 0 ? 0 : p;
      v({
        times: 0,
        index: h,
        offset: g,
        originAlign: b
      });
    }
  };
}
function xy(e, t, n) {
  var r = e.length, a = t.length, o, i;
  if (r === 0 && a === 0)
    return null;
  r < a ? (o = e, i = t) : (o = t, i = e);
  var l = {
    __EMPTY_ITEM__: !0
  };
  function c(h) {
    return h !== void 0 ? n(h) : l;
  }
  for (var u = null, d = Math.abs(r - a) !== 1, f = 0; f < i.length; f += 1) {
    var v = c(o[f]), m = c(i[f]);
    if (v !== m) {
      u = f, d = d || v !== c(i[f + 1]);
      break;
    }
  }
  return u === null ? null : {
    index: u,
    multiple: d
  };
}
function wy(e, t, n) {
  var r = s.useState(e), a = G(r, 2), o = a[0], i = a[1], l = s.useState(null), c = G(l, 2), u = c[0], d = c[1];
  return s.useEffect(function() {
    var f = xy(o || [], e || [], t);
    (f == null ? void 0 : f.index) !== void 0 && (n == null || n(f.index), d(e[f.index])), i(e);
  }, [e]), [u];
}
var Mc = (typeof navigator > "u" ? "undefined" : We(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
const kd = function(e, t) {
  var n = s.useRef(!1), r = s.useRef(null);
  function a() {
    clearTimeout(r.current), n.current = !0, r.current = setTimeout(function() {
      n.current = !1;
    }, 50);
  }
  var o = s.useRef({
    top: e,
    bottom: t
  });
  return o.current.top = e, o.current.bottom = t, function(i) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, c = (
      // Pass origin wheel when on the top
      i < 0 && o.current.top || // Pass origin wheel when on the bottom
      i > 0 && o.current.bottom
    );
    return l && c ? (clearTimeout(r.current), n.current = !1) : (!c || n.current) && a(), !n.current && c;
  };
};
function Ey(e, t, n, r, a) {
  var o = s.useRef(0), i = s.useRef(null), l = s.useRef(null), c = s.useRef(!1), u = kd(t, n);
  function d(p, g) {
    ft.cancel(i.current), o.current += g, l.current = g, !u(g) && (Mc || p.preventDefault(), i.current = ft(function() {
      var C = c.current ? 10 : 1;
      a(o.current * C), o.current = 0;
    }));
  }
  function f(p, g) {
    a(g, !0), Mc || p.preventDefault();
  }
  var v = s.useRef(null), m = s.useRef(null);
  function h(p) {
    if (e) {
      ft.cancel(m.current), m.current = ft(function() {
        v.current = null;
      }, 2);
      var g = p.deltaX, C = p.deltaY, S = p.shiftKey, x = g, R = C;
      (v.current === "sx" || !v.current && S && C && !g) && (x = C, R = 0, v.current = "sx");
      var E = Math.abs(x), y = Math.abs(R);
      v.current === null && (v.current = r && E > y ? "x" : "y"), v.current === "y" ? d(p, R) : f(p, x);
    }
  }
  function b(p) {
    e && (c.current = p.detail === l.current);
  }
  return [h, b];
}
var $y = 14 / 15;
function Ry(e, t, n) {
  var r = s.useRef(!1), a = s.useRef(0), o = s.useRef(null), i = s.useRef(null), l, c = function(v) {
    if (r.current) {
      var m = Math.ceil(v.touches[0].pageY), h = a.current - m;
      a.current = m, n(h) && v.preventDefault(), clearInterval(i.current), i.current = setInterval(function() {
        h *= $y, (!n(h, !0) || Math.abs(h) <= 0.1) && clearInterval(i.current);
      }, 16);
    }
  }, u = function() {
    r.current = !1, l();
  }, d = function(v) {
    l(), v.touches.length === 1 && !r.current && (r.current = !0, a.current = Math.ceil(v.touches[0].pageY), o.current = v.target, o.current.addEventListener("touchmove", c), o.current.addEventListener("touchend", u));
  };
  l = function() {
    o.current && (o.current.removeEventListener("touchmove", c), o.current.removeEventListener("touchend", u));
  }, gt(function() {
    return e && t.current.addEventListener("touchstart", d), function() {
      var f;
      (f = t.current) === null || f === void 0 || f.removeEventListener("touchstart", d), l(), clearInterval(i.current);
    };
  }, [e]);
}
var Oy = 20;
function Pc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = e / t * 100;
  return isNaN(n) && (n = 0), n = Math.max(n, Oy), n = Math.min(n, e / 2), Math.floor(n);
}
function Iy(e, t, n, r) {
  var a = s.useMemo(function() {
    return [/* @__PURE__ */ new Map(), []];
  }, [e, n.id, r]), o = G(a, 2), i = o[0], l = o[1], c = function(d) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : d, v = i.get(d), m = i.get(f);
    if (v === void 0 || m === void 0)
      for (var h = e.length, b = l.length; b < h; b += 1) {
        var p, g = e[b], C = t(g);
        i.set(C, b);
        var S = (p = n.get(C)) !== null && p !== void 0 ? p : r;
        if (l[b] = (l[b - 1] || 0) + S, C === d && (v = b), C === f && (m = b), v !== void 0 && m !== void 0)
          break;
      }
    return {
      top: l[v - 1] || 0,
      bottom: l[m]
    };
  };
  return c;
}
var My = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "scrollWidth", "component", "onScroll", "onVirtualScroll", "onVisibleChange", "innerProps", "extraRender", "styles"], Py = [], Ny = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function Ty(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-virtual-list" : n, a = e.className, o = e.height, i = e.itemHeight, l = e.fullHeight, c = l === void 0 ? !0 : l, u = e.style, d = e.data, f = e.children, v = e.itemKey, m = e.virtual, h = e.direction, b = e.scrollWidth, p = e.component, g = p === void 0 ? "div" : p, C = e.onScroll, S = e.onVirtualScroll, x = e.onVisibleChange, R = e.innerProps, E = e.extraRender, y = e.styles, $ = vt(e, My), I = !!(m !== !1 && o && i), T = I && d && (i * d.length > o || !!b), N = h === "rtl", F = he(r, _({}, "".concat(r, "-rtl"), N), a), A = d || Py, D = s.useRef(), z = s.useRef(), M = s.useState(0), O = G(M, 2), P = O[0], L = O[1], j = s.useState(0), V = G(j, 2), k = V[0], U = V[1], W = s.useState(!1), le = G(W, 2), te = le[0], X = le[1], K = function() {
    X(!0);
  }, ee = function() {
    X(!1);
  }, ce = s.useCallback(function(we) {
    return typeof v == "function" ? v(we) : we == null ? void 0 : we[v];
  }, [v]), ge = {
    getKey: ce
  };
  function ve(we) {
    L(function(ye) {
      var Ge;
      typeof we == "function" ? Ge = we(ye) : Ge = we;
      var Ze = fe(Ge);
      return D.current.scrollTop = Ze, Ze;
    });
  }
  var ae = s.useRef({
    start: 0,
    end: A.length
  }), Ce = s.useRef(), Oe = wy(A, ce), Ne = G(Oe, 1), Ie = Ne[0];
  Ce.current = Ie;
  var oe = yy(ce, null, null), pe = G(oe, 4), se = pe[0], ie = pe[1], _e = pe[2], He = pe[3], Te = s.useMemo(function() {
    if (!I)
      return {
        scrollHeight: void 0,
        start: 0,
        end: A.length - 1,
        offset: void 0
      };
    if (!T) {
      var we;
      return {
        scrollHeight: ((we = z.current) === null || we === void 0 ? void 0 : we.offsetHeight) || 0,
        start: 0,
        end: A.length - 1,
        offset: void 0
      };
    }
    for (var ye = 0, Ge, Ze, mt, Nn = A.length, Nt = 0; Nt < Nn; Nt += 1) {
      var Tn = A[Nt], _n = ce(Tn), qt = _e.get(_n), Jt = ye + (qt === void 0 ? i : qt);
      Jt >= P && Ge === void 0 && (Ge = Nt, Ze = ye), Jt > P + o && mt === void 0 && (mt = Nt), ye = Jt;
    }
    return Ge === void 0 && (Ge = 0, Ze = 0, mt = Math.ceil(o / i)), mt === void 0 && (mt = A.length - 1), mt = Math.min(mt + 1, A.length - 1), {
      scrollHeight: ye,
      start: Ge,
      end: mt,
      offset: Ze
    };
  }, [T, I, P, A, He, o]), ue = Te.scrollHeight, de = Te.start, Ae = Te.end, Ke = Te.offset;
  ae.current.start = de, ae.current.end = Ae;
  var Be = s.useState({
    width: 0,
    height: o
  }), tt = G(Be, 2), De = tt[0], _t = tt[1], lt = function(ye) {
    _t({
      width: ye.width || ye.offsetWidth,
      height: ye.height || ye.offsetHeight
    });
  }, ot = s.useRef(), Xe = s.useRef(), ht = s.useMemo(function() {
    return Pc(De.width, b);
  }, [De.width, b]), at = s.useMemo(function() {
    return Pc(De.height, ue);
  }, [De.height, ue]), Ye = ue - o, qe = s.useRef(Ye);
  qe.current = Ye;
  function fe(we) {
    var ye = we;
    return Number.isNaN(qe.current) || (ye = Math.min(ye, qe.current)), ye = Math.max(ye, 0), ye;
  }
  var be = P <= 0, Me = P >= Ye, J = kd(be, Me), me = function() {
    return {
      x: N ? -k : k,
      y: P
    };
  }, ke = s.useRef(me()), Ue = an(function() {
    if (S) {
      var we = me();
      (ke.current.x !== we.x || ke.current.y !== we.y) && (S(we), ke.current = we);
    }
  });
  function Re(we, ye) {
    var Ge = we;
    ye ? (ua.flushSync(function() {
      U(Ge);
    }), Ue()) : ve(Ge);
  }
  function Q(we) {
    var ye = we.currentTarget.scrollTop;
    ye !== P && ve(ye), C == null || C(we), Ue();
  }
  var Y = function(ye) {
    var Ge = ye, Ze = b - De.width;
    return Ge = Math.max(Ge, 0), Ge = Math.min(Ge, Ze), Ge;
  }, ne = an(function(we, ye) {
    ye ? (ua.flushSync(function() {
      U(function(Ge) {
        var Ze = Ge + (N ? -we : we);
        return Y(Ze);
      });
    }), Ue()) : ve(function(Ge) {
      var Ze = Ge + we;
      return Ze;
    });
  }), $e = Ey(I, be, Me, !!b, ne), Le = G($e, 2), Qe = Le[0], nt = Le[1];
  Ry(I, D, function(we, ye) {
    return J(we, ye) ? !1 : (Qe({
      preventDefault: function() {
      },
      deltaY: we
    }), !0);
  }), gt(function() {
    function we(Ge) {
      I && Ge.preventDefault();
    }
    var ye = D.current;
    return ye.addEventListener("wheel", Qe), ye.addEventListener("DOMMouseScroll", nt), ye.addEventListener("MozMousePixelScroll", we), function() {
      ye.removeEventListener("wheel", Qe), ye.removeEventListener("DOMMouseScroll", nt), ye.removeEventListener("MozMousePixelScroll", we);
    };
  }, [I]), gt(function() {
    b && U(function(we) {
      return Y(we);
    });
  }, [De.width, b]);
  var Et = function() {
    var ye, Ge;
    (ye = ot.current) === null || ye === void 0 || ye.delayHidden(), (Ge = Xe.current) === null || Ge === void 0 || Ge.delayHidden();
  }, ct = Cy(D, A, _e, i, ce, function() {
    return ie(!0);
  }, ve, Et);
  s.useImperativeHandle(t, function() {
    return {
      getScrollInfo: me,
      scrollTo: function(ye) {
        function Ge(Ze) {
          return Ze && We(Ze) === "object" && ("left" in Ze || "top" in Ze);
        }
        Ge(ye) ? (ye.left !== void 0 && U(Y(ye.left)), ct(ye.top)) : ct(ye);
      }
    };
  }), gt(function() {
    if (x) {
      var we = A.slice(de, Ae + 1);
      x(we, A);
    }
  }, [de, Ae, A]);
  var rt = Iy(A, ce, _e, i), $t = E == null ? void 0 : E({
    start: de,
    end: Ae,
    virtual: T,
    offsetX: k,
    offsetY: Ke,
    rtl: N,
    getSize: rt
  }), Vt = py(A, de, Ae, b, se, f, ge), Ot = null;
  o && (Ot = B(_({}, c ? "height" : "maxHeight", o), Ny), I && (Ot.overflowY = "hidden", b && (Ot.overflowX = "hidden"), te && (Ot.pointerEvents = "none")));
  var Qt = {};
  return N && (Qt.dir = "rtl"), /* @__PURE__ */ s.createElement("div", je({
    style: B(B({}, u), {}, {
      position: "relative"
    }),
    className: F
  }, Qt, $), /* @__PURE__ */ s.createElement(er, {
    onResize: lt
  }, /* @__PURE__ */ s.createElement(g, {
    className: "".concat(r, "-holder"),
    style: Ot,
    ref: D,
    onScroll: Q,
    onMouseEnter: Et
  }, /* @__PURE__ */ s.createElement(Bd, {
    prefixCls: r,
    height: ue,
    offsetX: k,
    offsetY: Ke,
    scrollWidth: b,
    onInnerResize: ie,
    ref: z,
    innerProps: R,
    rtl: N,
    extra: $t
  }, Vt))), T && ue > o && /* @__PURE__ */ s.createElement(Ic, {
    ref: ot,
    prefixCls: r,
    scrollOffset: P,
    scrollRange: ue,
    rtl: N,
    onScroll: Re,
    onStartMove: K,
    onStopMove: ee,
    spinSize: at,
    containerSize: De.height,
    style: y == null ? void 0 : y.verticalScrollBar,
    thumbStyle: y == null ? void 0 : y.verticalScrollBarThumb
  }), T && b && /* @__PURE__ */ s.createElement(Ic, {
    ref: Xe,
    prefixCls: r,
    scrollOffset: k,
    scrollRange: b,
    rtl: N,
    onScroll: Re,
    onStartMove: K,
    onStopMove: ee,
    spinSize: ht,
    containerSize: De.width,
    horizontal: !0,
    style: y == null ? void 0 : y.horizontalScrollBar,
    thumbStyle: y == null ? void 0 : y.horizontalScrollBarThumb
  }));
}
var Wd = /* @__PURE__ */ s.forwardRef(Ty);
Wd.displayName = "List";
var Ud = /* @__PURE__ */ s.createContext(null);
function _y() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
var Ay = ["disabled", "title", "children", "style", "className"];
function Nc(e) {
  return typeof e == "string" || typeof e == "number";
}
var Fy = function(t, n) {
  var r = mb(), a = r.prefixCls, o = r.id, i = r.open, l = r.multiple, c = r.mode, u = r.searchValue, d = r.toggleOpen, f = r.notFoundContent, v = r.onPopupScroll, m = s.useContext(Ud), h = m.flattenOptions, b = m.onActiveValue, p = m.defaultActiveFirstOption, g = m.onSelect, C = m.menuItemSelectedIcon, S = m.rawValues, x = m.fieldNames, R = m.virtual, E = m.direction, y = m.listHeight, $ = m.listItemHeight, I = "".concat(a, "-item"), T = Eo(function() {
    return h;
  }, [i, h], function(X, K) {
    return K[0] && X[1] !== K[1];
  }), N = s.useRef(null), F = function(K) {
    K.preventDefault();
  }, A = function(K) {
    N.current && N.current.scrollTo(typeof K == "number" ? {
      index: K
    } : K);
  }, D = function(K) {
    for (var ee = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, ce = T.length, ge = 0; ge < ce; ge += 1) {
      var ve = (K + ge * ee + ce) % ce, ae = T[ve], Ce = ae.group, Oe = ae.data;
      if (!Ce && !Oe.disabled)
        return ve;
    }
    return -1;
  }, z = s.useState(function() {
    return D(0);
  }), M = G(z, 2), O = M[0], P = M[1], L = function(K) {
    var ee = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    P(K);
    var ce = {
      source: ee ? "keyboard" : "mouse"
    }, ge = T[K];
    if (!ge) {
      b(null, -1, ce);
      return;
    }
    b(ge.value, K, ce);
  };
  s.useEffect(function() {
    L(p !== !1 ? D(0) : -1);
  }, [T.length, u]);
  var j = s.useCallback(function(X) {
    return S.has(X) && c !== "combobox";
  }, [c, Pe(S).toString(), S.size]);
  s.useEffect(function() {
    var X = setTimeout(function() {
      if (!l && i && S.size === 1) {
        var ee = Array.from(S)[0], ce = T.findIndex(function(ge) {
          var ve = ge.data;
          return ve.value === ee;
        });
        ce !== -1 && (L(ce), A(ce));
      }
    });
    if (i) {
      var K;
      (K = N.current) === null || K === void 0 || K.scrollTo(void 0);
    }
    return function() {
      return clearTimeout(X);
    };
  }, [i, u]);
  var V = function(K) {
    K !== void 0 && g(K, {
      selected: !S.has(K)
    }), l || d(!1);
  };
  if (s.useImperativeHandle(n, function() {
    return {
      onKeyDown: function(K) {
        var ee = K.which, ce = K.ctrlKey;
        switch (ee) {
          case Z.N:
          case Z.P:
          case Z.UP:
          case Z.DOWN: {
            var ge = 0;
            if (ee === Z.UP ? ge = -1 : ee === Z.DOWN ? ge = 1 : _y() && ce && (ee === Z.N ? ge = 1 : ee === Z.P && (ge = -1)), ge !== 0) {
              var ve = D(O + ge, ge);
              A(ve), L(ve, !0);
            }
            break;
          }
          case Z.ENTER: {
            var ae = T[O];
            ae && !ae.data.disabled ? V(ae.value) : V(void 0), i && K.preventDefault();
            break;
          }
          case Z.ESC:
            d(!1), i && K.stopPropagation();
        }
      },
      onKeyUp: function() {
      },
      scrollTo: function(K) {
        A(K);
      }
    };
  }), T.length === 0)
    return /* @__PURE__ */ s.createElement("div", {
      role: "listbox",
      id: "".concat(o, "_list"),
      className: "".concat(I, "-empty"),
      onMouseDown: F
    }, f);
  var k = Object.keys(x).map(function(X) {
    return x[X];
  }), U = function(K) {
    return K.label;
  };
  function W(X, K) {
    var ee = X.group;
    return {
      role: ee ? "presentation" : "option",
      id: "".concat(o, "_list_").concat(K)
    };
  }
  var le = function(K) {
    var ee = T[K];
    if (!ee)
      return null;
    var ce = ee.data || {}, ge = ce.value, ve = ee.group, ae = to(ce, !0), Ce = U(ee);
    return ee ? /* @__PURE__ */ s.createElement("div", je({
      "aria-label": typeof Ce == "string" && !ve ? Ce : null
    }, ae, {
      key: K
    }, W(ee, K), {
      "aria-selected": j(ge)
    }), ge) : null;
  }, te = {
    role: "listbox",
    id: "".concat(o, "_list")
  };
  return /* @__PURE__ */ s.createElement(s.Fragment, null, R && /* @__PURE__ */ s.createElement("div", je({}, te, {
    style: {
      height: 0,
      width: 0,
      overflow: "hidden"
    }
  }), le(O - 1), le(O), le(O + 1)), /* @__PURE__ */ s.createElement(Wd, {
    itemKey: "key",
    ref: N,
    data: T,
    height: y,
    itemHeight: $,
    fullHeight: !1,
    onMouseDown: F,
    onScroll: v,
    virtual: R,
    direction: E,
    innerProps: R ? null : te
  }, function(X, K) {
    var ee, ce = X.group, ge = X.groupOption, ve = X.data, ae = X.label, Ce = X.value, Oe = ve.key;
    if (ce) {
      var Ne, Ie = (Ne = ve.title) !== null && Ne !== void 0 ? Ne : Nc(ae) ? ae.toString() : void 0;
      return /* @__PURE__ */ s.createElement("div", {
        className: he(I, "".concat(I, "-group")),
        title: Ie
      }, ae !== void 0 ? ae : Oe);
    }
    var oe = ve.disabled, pe = ve.title;
    ve.children;
    var se = ve.style, ie = ve.className, _e = vt(ve, Ay), He = Gr(_e, k), Te = j(Ce), ue = "".concat(I, "-option"), de = he(I, ue, ie, (ee = {}, _(ee, "".concat(ue, "-grouped"), ge), _(ee, "".concat(ue, "-active"), O === K && !oe), _(ee, "".concat(ue, "-disabled"), oe), _(ee, "".concat(ue, "-selected"), Te), ee)), Ae = U(X), Ke = !C || typeof C == "function" || Te, Be = typeof Ae == "number" ? Ae : Ae || Ce, tt = Nc(Be) ? Be.toString() : void 0;
    return pe !== void 0 && (tt = pe), /* @__PURE__ */ s.createElement("div", je({}, to(He), R ? {} : W(X, K), {
      "aria-selected": Te,
      className: de,
      title: tt,
      onMouseMove: function() {
        O === K || oe || L(K);
      },
      onClick: function() {
        oe || V(Ce);
      },
      style: se
    }), /* @__PURE__ */ s.createElement("div", {
      className: "".concat(ue, "-content")
    }, Be), /* @__PURE__ */ s.isValidElement(C) || Te, Ke && /* @__PURE__ */ s.createElement(zo, {
      className: "".concat(I, "-option-state"),
      customizeIcon: C,
      customizeIconProps: {
        value: Ce,
        disabled: oe,
        isSelected: Te
      }
    }, Te ? "✓" : null));
  }));
}, Gd = /* @__PURE__ */ s.forwardRef(Fy);
Gd.displayName = "OptionList";
var jy = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "direction", "listHeight", "listItemHeight", "value", "defaultValue", "labelInValue", "onChange"], Ly = ["inputValue"];
function Dy(e) {
  return !e || We(e) !== "object";
}
var zy = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.id, r = e.mode, a = e.prefixCls, o = a === void 0 ? "rc-select" : a, i = e.backfill, l = e.fieldNames, c = e.inputValue, u = e.searchValue, d = e.onSearch, f = e.autoClearSearchValue, v = f === void 0 ? !0 : f, m = e.onSelect, h = e.onDeselect, b = e.dropdownMatchSelectWidth, p = b === void 0 ? !0 : b, g = e.filterOption, C = e.filterSort, S = e.optionFilterProp, x = e.optionLabelProp, R = e.options, E = e.children, y = e.defaultActiveFirstOption, $ = e.menuItemSelectedIcon, I = e.virtual, T = e.direction, N = e.listHeight, F = N === void 0 ? 200 : N, A = e.listItemHeight, D = A === void 0 ? 20 : A, z = e.value, M = e.defaultValue, O = e.labelInValue, P = e.onChange, L = vt(e, jy), j = dy(n), V = us(r), k = !!(!R && E), U = s.useMemo(function() {
    return g === void 0 && r === "combobox" ? !1 : g;
  }, [g, r]), W = s.useMemo(
    function() {
      return Vd(l, k);
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [
      // We stringify fieldNames to avoid unnecessary re-renders.
      JSON.stringify(l),
      k
    ]
    /* eslint-enable react-hooks/exhaustive-deps */
  ), le = mr("", {
    value: u !== void 0 ? u : c,
    postState: function(Y) {
      return Y || "";
    }
  }), te = G(le, 2), X = te[0], K = te[1], ee = gy(R, E, W, S, x), ce = ee.valueOptions, ge = ee.labelOptions, ve = ee.options, ae = s.useCallback(function(Q) {
    var Y = jd(Q);
    return Y.map(function(ne) {
      var $e, Le, Qe, nt, Et;
      if (Dy(ne))
        $e = ne;
      else {
        var ct;
        Qe = ne.key, Le = ne.label, $e = (ct = ne.value) !== null && ct !== void 0 ? ct : Qe;
      }
      var rt = ce.get($e);
      if (rt) {
        var $t;
        Le === void 0 && (Le = rt == null ? void 0 : rt[x || W.label]), Qe === void 0 && (Qe = ($t = rt == null ? void 0 : rt.key) !== null && $t !== void 0 ? $t : $e), nt = rt == null ? void 0 : rt.disabled, Et = rt == null ? void 0 : rt.title;
      }
      return {
        label: Le,
        value: $e,
        key: Qe,
        disabled: nt,
        title: Et
      };
    });
  }, [W, x, ce]), Ce = mr(M, {
    value: z
  }), Oe = G(Ce, 2), Ne = Oe[0], Ie = Oe[1], oe = s.useMemo(function() {
    var Q, Y = ae(Ne);
    return r === "combobox" && Tb((Q = Y[0]) === null || Q === void 0 ? void 0 : Q.value) ? [] : Y;
  }, [Ne, ae, r]), pe = sy(oe, ce), se = G(pe, 2), ie = se[0], _e = se[1], He = s.useMemo(function() {
    if (!r && ie.length === 1) {
      var Q = ie[0];
      if (Q.value === null && (Q.label === null || Q.label === void 0))
        return [];
    }
    return ie.map(function(Y) {
      var ne;
      return B(B({}, Y), {}, {
        label: (ne = Y.label) !== null && ne !== void 0 ? ne : Y.value
      });
    });
  }, [r, ie]), Te = s.useMemo(function() {
    return new Set(ie.map(function(Q) {
      return Q.value;
    }));
  }, [ie]);
  s.useEffect(function() {
    if (r === "combobox") {
      var Q, Y = (Q = ie[0]) === null || Q === void 0 ? void 0 : Q.value;
      K(Nb(Y) ? String(Y) : "");
    }
  }, [ie]);
  var ue = Rc(function(Q, Y) {
    var ne, $e = Y ?? Q;
    return ne = {}, _(ne, W.value, Q), _(ne, W.label, $e), ne;
  }), de = s.useMemo(function() {
    if (r !== "tags")
      return ve;
    var Q = Pe(ve), Y = function($e) {
      return ce.has($e);
    };
    return Pe(ie).sort(function(ne, $e) {
      return ne.value < $e.value ? -1 : 1;
    }).forEach(function(ne) {
      var $e = ne.value;
      Y($e) || Q.push(ue($e, ne.label));
    }), Q;
  }, [ue, ve, ce, ie, r]), Ae = ly(de, W, X, U, S), Ke = s.useMemo(function() {
    return r !== "tags" || !X || Ae.some(function(Q) {
      return Q[S || "value"] === X;
    }) || Ae.some(function(Q) {
      return Q[W.value] === X;
    }) ? Ae : [ue(X)].concat(Pe(Ae));
  }, [ue, S, r, Ae, X, W]), Be = s.useMemo(function() {
    return C ? Pe(Ke).sort(function(Q, Y) {
      return C(Q, Y);
    }) : Ke;
  }, [Ke, C]), tt = s.useMemo(function() {
    return ny(Be, {
      fieldNames: W,
      childrenAsData: k
    });
  }, [Be, W, k]), De = function(Y) {
    var ne = ae(Y);
    if (Ie(ne), P && // Trigger event only when value changed
    (ne.length !== ie.length || ne.some(function(Qe, nt) {
      var Et;
      return ((Et = ie[nt]) === null || Et === void 0 ? void 0 : Et.value) !== (Qe == null ? void 0 : Qe.value);
    }))) {
      var $e = O ? ne : ne.map(function(Qe) {
        return Qe.value;
      }), Le = ne.map(function(Qe) {
        return cs(_e(Qe.value));
      });
      P(
        // Value
        V ? $e : $e[0],
        // Option
        V ? Le : Le[0]
      );
    }
  }, _t = s.useState(null), lt = G(_t, 2), ot = lt[0], Xe = lt[1], ht = s.useState(0), at = G(ht, 2), Ye = at[0], qe = at[1], fe = y !== void 0 ? y : r !== "combobox", be = s.useCallback(function(Q, Y) {
    var ne = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, $e = ne.source, Le = $e === void 0 ? "keyboard" : $e;
    qe(Y), i && r === "combobox" && Q !== null && Le === "keyboard" && Xe(String(Q));
  }, [i, r]), Me = function(Y, ne, $e) {
    var Le = function() {
      var we, ye = _e(Y);
      return [O ? {
        label: ye == null ? void 0 : ye[W.label],
        value: Y,
        key: (we = ye == null ? void 0 : ye.key) !== null && we !== void 0 ? we : Y
      } : Y, cs(ye)];
    };
    if (ne && m) {
      var Qe = Le(), nt = G(Qe, 2), Et = nt[0], ct = nt[1];
      m(Et, ct);
    } else if (!ne && h && $e !== "clear") {
      var rt = Le(), $t = G(rt, 2), Vt = $t[0], Ot = $t[1];
      h(Vt, Ot);
    }
  }, J = Rc(function(Q, Y) {
    var ne, $e = V ? Y.selected : !0;
    $e ? ne = V ? [].concat(Pe(ie), [Q]) : [Q] : ne = ie.filter(function(Le) {
      return Le.value !== Q;
    }), De(ne), Me(Q, $e), r === "combobox" ? Xe("") : (!us || v) && (K(""), Xe(""));
  }), me = function(Y, ne) {
    De(Y);
    var $e = ne.type, Le = ne.values;
    ($e === "remove" || $e === "clear") && Le.forEach(function(Qe) {
      Me(Qe.value, !1, $e);
    });
  }, ke = function(Y, ne) {
    if (K(Y), Xe(null), ne.source === "submit") {
      var $e = (Y || "").trim();
      if ($e) {
        var Le = Array.from(new Set([].concat(Pe(Te), [$e])));
        De(Le), Me($e, !0), K("");
      }
      return;
    }
    ne.source !== "blur" && (r === "combobox" && De(Y), d == null || d(Y));
  }, Ue = function(Y) {
    var ne = Y;
    r !== "tags" && (ne = Y.map(function(Le) {
      var Qe = ge.get(Le);
      return Qe == null ? void 0 : Qe.value;
    }).filter(function(Le) {
      return Le !== void 0;
    }));
    var $e = Array.from(new Set([].concat(Pe(Te), Pe(ne))));
    De($e), $e.forEach(function(Le) {
      Me(Le, !0);
    });
  }, Re = s.useMemo(function() {
    var Q = I !== !1 && p !== !1;
    return B(B({}, ee), {}, {
      flattenOptions: tt,
      onActiveValue: be,
      defaultActiveFirstOption: fe,
      onSelect: J,
      menuItemSelectedIcon: $,
      rawValues: Te,
      fieldNames: W,
      virtual: Q,
      direction: T,
      listHeight: F,
      listItemHeight: D,
      childrenAsData: k
    });
  }, [ee, tt, be, fe, J, $, Te, W, I, p, F, D, k]);
  return /* @__PURE__ */ s.createElement(Ud.Provider, {
    value: Re
  }, /* @__PURE__ */ s.createElement(iy, je({}, L, {
    // >>> MISC
    id: j,
    prefixCls: o,
    ref: t,
    omitDomProps: Ly,
    mode: r,
    displayValues: He,
    onDisplayValuesChange: me,
    direction: T,
    searchValue: X,
    onSearch: ke,
    autoClearSearchValue: v,
    onSearchSplit: Ue,
    dropdownMatchSelectWidth: p,
    OptionList: Gd,
    emptyOptions: !tt.length,
    activeValue: ot,
    activeDescendantId: "".concat(j, "_list_").concat(Ye)
  })));
}), Gs = zy;
Gs.Option = Us;
Gs.OptGroup = Ws;
function kn(e, t, n) {
  return he({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: n
  });
}
const Vo = (e, t) => t || e, Vy = () => {
  const [, e] = hr(), n = new Lt(e.colorBgBase).toHsl().l < 0.5 ? {
    opacity: 0.65
  } : {};
  return /* @__PURE__ */ s.createElement("svg", {
    style: n,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ s.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ s.createElement("g", {
    transform: "translate(24 31.67)"
  }, /* @__PURE__ */ s.createElement("ellipse", {
    fillOpacity: ".8",
    fill: "#F5F5F7",
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /* @__PURE__ */ s.createElement("path", {
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
    fill: "#AEB8C2"
  }), /* @__PURE__ */ s.createElement("path", {
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    fill: "url(#linearGradient-1)",
    transform: "translate(13.56)"
  }), /* @__PURE__ */ s.createElement("path", {
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
    fill: "#F5F5F7"
  }), /* @__PURE__ */ s.createElement("path", {
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
    fill: "#DCE0E6"
  })), /* @__PURE__ */ s.createElement("path", {
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
    fill: "#DCE0E6"
  }), /* @__PURE__ */ s.createElement("g", {
    transform: "translate(149.65 15.383)",
    fill: "#FFF"
  }, /* @__PURE__ */ s.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /* @__PURE__ */ s.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
}, Hy = Vy, By = () => {
  const [, e] = hr(), {
    colorFill: t,
    colorFillTertiary: n,
    colorFillQuaternary: r,
    colorBgContainer: a
  } = e, {
    borderColor: o,
    shadowColor: i,
    contentColor: l
  } = s.useMemo(() => ({
    borderColor: new Lt(t).onBackground(a).toHexShortString(),
    shadowColor: new Lt(n).onBackground(a).toHexShortString(),
    contentColor: new Lt(r).onBackground(a).toHexShortString()
  }), [t, n, r, a]);
  return /* @__PURE__ */ s.createElement("svg", {
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ s.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ s.createElement("ellipse", {
    fill: i,
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /* @__PURE__ */ s.createElement("g", {
    fillRule: "nonzero",
    stroke: o
  }, /* @__PURE__ */ s.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /* @__PURE__ */ s.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: l
  }))));
}, ky = By, Wy = (e) => {
  const {
    componentCls: t,
    margin: n,
    marginXS: r,
    marginXL: a,
    fontSize: o,
    lineHeight: i
  } = e;
  return {
    [t]: {
      marginInline: r,
      fontSize: o,
      lineHeight: i,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${t}-image`]: {
        height: e.emptyImgHeight,
        marginBottom: r,
        opacity: e.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          maxWidth: "100%",
          height: "100%",
          margin: "auto"
        }
      },
      [`${t}-description`]: {
        color: e.colorText
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${t}-footer`]: {
        marginTop: n
      },
      "&-normal": {
        marginBlock: a,
        color: e.colorTextDisabled,
        [`${t}-description`]: {
          color: e.colorTextDisabled
        },
        [`${t}-image`]: {
          height: e.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: r,
        color: e.colorTextDisabled,
        [`${t}-image`]: {
          height: e.emptyImgHeightSM
        }
      }
    }
  };
}, Uy = Ln("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: n
  } = e, r = bt(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: n * 2.5,
    emptyImgHeightMD: n,
    emptyImgHeightSM: n * 0.875
  });
  return [Wy(r)];
});
var Gy = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const qd = /* @__PURE__ */ s.createElement(Hy, null), Kd = /* @__PURE__ */ s.createElement(ky, null), qs = (e) => {
  var {
    className: t,
    rootClassName: n,
    prefixCls: r,
    image: a = qd,
    description: o,
    children: i,
    imageStyle: l,
    style: c
  } = e, u = Gy(e, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle", "style"]);
  const {
    getPrefixCls: d,
    direction: f,
    empty: v
  } = s.useContext(Ct), m = d("empty", r), [h, b] = Uy(m), [p] = Lm("Empty"), g = typeof o < "u" ? o : p == null ? void 0 : p.description, C = typeof g == "string" ? g : "empty";
  let S = null;
  return typeof a == "string" ? S = /* @__PURE__ */ s.createElement("img", {
    alt: C,
    src: a
  }) : S = a, h(/* @__PURE__ */ s.createElement("div", Object.assign({
    className: he(b, m, v == null ? void 0 : v.className, {
      [`${m}-normal`]: a === Kd,
      [`${m}-rtl`]: f === "rtl"
    }, t, n),
    style: Object.assign(Object.assign({}, v == null ? void 0 : v.style), c)
  }, u), /* @__PURE__ */ s.createElement("div", {
    className: `${m}-image`,
    style: l
  }, S), g && /* @__PURE__ */ s.createElement("div", {
    className: `${m}-description`
  }, g), i && /* @__PURE__ */ s.createElement("div", {
    className: `${m}-footer`
  }, i)));
};
qs.PRESENTED_IMAGE_DEFAULT = qd;
qs.PRESENTED_IMAGE_SIMPLE = Kd;
const ta = qs, qy = (e) => {
  const {
    componentName: t
  } = e, {
    getPrefixCls: n
  } = s.useContext(Ct), r = n("empty");
  switch (t) {
    case "Table":
    case "List":
      return /* @__PURE__ */ Se.createElement(ta, {
        image: ta.PRESENTED_IMAGE_SIMPLE
      });
    case "Select":
    case "TreeSelect":
    case "Cascader":
    case "Transfer":
    case "Mentions":
      return /* @__PURE__ */ Se.createElement(ta, {
        image: ta.PRESENTED_IMAGE_SIMPLE,
        className: `${r}-small`
      });
    default:
      return /* @__PURE__ */ Se.createElement(ta, null);
  }
}, Ky = qy, Xy = (e) => {
  const {
    optionHeight: t,
    optionFontSize: n,
    optionLineHeight: r,
    optionPadding: a
  } = e;
  return {
    position: "relative",
    display: "block",
    minHeight: t,
    padding: a,
    color: e.colorText,
    fontWeight: "normal",
    fontSize: n,
    lineHeight: r,
    boxSizing: "border-box"
  };
}, Yy = (e) => {
  const {
    antCls: t,
    componentCls: n
  } = e, r = `${n}-item`, a = `&${t}-slide-up-enter${t}-slide-up-enter-active`, o = `&${t}-slide-up-appear${t}-slide-up-appear-active`, i = `&${t}-slide-up-leave${t}-slide-up-leave-active`, l = `${n}-dropdown-placement-`;
  return [
    {
      [`${n}-dropdown`]: Object.assign(Object.assign({}, Qn(e)), {
        position: "absolute",
        top: -9999,
        zIndex: e.zIndexPopup,
        boxSizing: "border-box",
        padding: e.paddingXXS,
        overflow: "hidden",
        fontSize: e.fontSize,
        // Fix select render lag of long text in chrome
        // https://github.com/ant-design/ant-design/issues/11456
        // https://github.com/ant-design/ant-design/issues/11843
        fontVariant: "initial",
        backgroundColor: e.colorBgElevated,
        borderRadius: e.borderRadiusLG,
        outline: "none",
        boxShadow: e.boxShadowSecondary,
        [`
          ${a}${l}bottomLeft,
          ${o}${l}bottomLeft
        `]: {
          animationName: Rd
        },
        [`
          ${a}${l}topLeft,
          ${o}${l}topLeft,
          ${a}${l}topRight,
          ${o}${l}topRight
        `]: {
          animationName: Id
        },
        [`${i}${l}bottomLeft`]: {
          animationName: Od
        },
        [`
          ${i}${l}topLeft,
          ${i}${l}topRight
        `]: {
          animationName: Md
        },
        "&-hidden": {
          display: "none"
        },
        [`${r}`]: Object.assign(Object.assign({}, Xy(e)), {
          cursor: "pointer",
          transition: `background ${e.motionDurationSlow} ease`,
          borderRadius: e.borderRadiusSM,
          // =========== Group ============
          "&-group": {
            color: e.colorTextDescription,
            fontSize: e.fontSizeSM,
            cursor: "default"
          },
          // =========== Option ===========
          "&-option": {
            display: "flex",
            "&-content": Object.assign({
              flex: "auto"
            }, Vi),
            "&-state": {
              flex: "none",
              display: "flex",
              alignItems: "center"
            },
            [`&-active:not(${r}-option-disabled)`]: {
              backgroundColor: e.optionActiveBg
            },
            [`&-selected:not(${r}-option-disabled)`]: {
              color: e.optionSelectedColor,
              fontWeight: e.optionSelectedFontWeight,
              backgroundColor: e.optionSelectedBg,
              [`${r}-option-state`]: {
                color: e.colorPrimary
              }
            },
            "&-disabled": {
              [`&${r}-option-selected`]: {
                backgroundColor: e.colorBgContainerDisabled
              },
              color: e.colorTextDisabled,
              cursor: "not-allowed"
            },
            "&-grouped": {
              paddingInlineStart: e.controlPaddingHorizontal * 2
            }
          }
        }),
        // =========================== RTL ===========================
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Follow code may reuse in other components
    mc(e, "slide-up"),
    mc(e, "slide-down"),
    vc(e, "move-up"),
    vc(e, "move-down")
  ];
}, Qy = Yy, Pr = 2, Xd = (e) => {
  let {
    multipleSelectItemHeight: t,
    selectHeight: n,
    lineWidth: r
  } = e;
  const a = (n - t) / 2 - r, o = Math.ceil(a / 2);
  return [a, o];
};
function gi(e, t) {
  const {
    componentCls: n,
    iconCls: r
  } = e, a = `${n}-selection-overflow`, o = e.multipleSelectItemHeight, [i] = Xd(e), l = t ? `${n}-${t}` : "";
  return {
    [`${n}-multiple${l}`]: {
      fontSize: e.fontSize,
      /**
       * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
       * may update to redesign with its align logic.
       */
      // =========================== Overflow ===========================
      [a]: {
        position: "relative",
        display: "flex",
        flex: "auto",
        flexWrap: "wrap",
        maxWidth: "100%",
        "&-item": {
          flex: "none",
          alignSelf: "center",
          maxWidth: "100%",
          display: "inline-flex"
        }
      },
      // ========================= Selector =========================
      [`${n}-selector`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        height: "100%",
        // Multiple is little different that horizontal is follow the vertical
        padding: `${i - Pr}px ${Pr * 2}px`,
        borderRadius: e.borderRadius,
        [`${n}-show-search&`]: {
          cursor: "text"
        },
        [`${n}-disabled&`]: {
          background: e.multipleSelectorBgDisabled,
          cursor: "not-allowed"
        },
        "&:after": {
          display: "inline-block",
          width: 0,
          margin: `${Pr}px 0`,
          lineHeight: `${o}px`,
          visibility: "hidden",
          content: '"\\a0"'
        }
      },
      [`
        &${n}-show-arrow ${n}-selector,
        &${n}-allow-clear ${n}-selector
      `]: {
        paddingInlineEnd: e.fontSizeIcon + e.controlPaddingHorizontal
      },
      // ======================== Selections ========================
      [`${n}-selection-item`]: {
        display: "flex",
        alignSelf: "center",
        flex: "none",
        boxSizing: "border-box",
        maxWidth: "100%",
        height: o,
        marginTop: Pr,
        marginBottom: Pr,
        lineHeight: `${o - e.lineWidth * 2}px`,
        background: e.multipleItemBg,
        border: `${e.lineWidth}px ${e.lineType} ${e.multipleItemBorderColor}`,
        borderRadius: e.borderRadiusSM,
        cursor: "default",
        transition: `font-size ${e.motionDurationSlow}, line-height ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
        marginInlineEnd: Pr * 2,
        paddingInlineStart: e.paddingXS,
        paddingInlineEnd: e.paddingXS / 2,
        [`${n}-disabled&`]: {
          color: e.multipleItemColorDisabled,
          borderColor: e.multipleItemBorderColorDisabled,
          cursor: "not-allowed"
        },
        // It's ok not to do this, but 24px makes bottom narrow in view should adjust
        "&-content": {
          display: "inline-block",
          marginInlineEnd: e.paddingXS / 2,
          overflow: "hidden",
          whiteSpace: "pre",
          textOverflow: "ellipsis"
        },
        "&-remove": Object.assign(Object.assign({}, _o()), {
          display: "inline-flex",
          alignItems: "center",
          color: e.colorIcon,
          fontWeight: "bold",
          fontSize: 10,
          lineHeight: "inherit",
          cursor: "pointer",
          [`> ${r}`]: {
            verticalAlign: "-0.2em"
          },
          "&:hover": {
            color: e.colorIconHover
          }
        })
      },
      // ========================== Input ==========================
      [`${a}-item + ${a}-item`]: {
        [`${n}-selection-search`]: {
          marginInlineStart: 0
        }
      },
      // https://github.com/ant-design/ant-design/issues/44754
      [`${a}-item-suffix`]: {
        height: "100%"
      },
      [`${n}-selection-search`]: {
        display: "inline-flex",
        position: "relative",
        maxWidth: "100%",
        marginInlineStart: e.inputPaddingHorizontalBase - i,
        "\n          &-input,\n          &-mirror\n        ": {
          height: o,
          fontFamily: e.fontFamily,
          lineHeight: `${o}px`,
          transition: `all ${e.motionDurationSlow}`
        },
        "&-input": {
          width: "100%",
          minWidth: 4.1
          // fix search cursor missing
        },
        "&-mirror": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: "auto",
          zIndex: 999,
          whiteSpace: "pre",
          visibility: "hidden"
        }
      },
      // ======================= Placeholder =======================
      [`${n}-selection-placeholder`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: e.inputPaddingHorizontalBase,
        insetInlineEnd: e.inputPaddingHorizontalBase,
        transform: "translateY(-50%)",
        transition: `all ${e.motionDurationSlow}`
      }
    }
  };
}
const Jy = (e) => {
  const {
    componentCls: t
  } = e, n = bt(e, {
    selectHeight: e.controlHeightSM,
    multipleSelectItemHeight: e.controlHeightXS,
    borderRadius: e.borderRadiusSM,
    borderRadiusSM: e.borderRadiusXS
  }), r = bt(e, {
    fontSize: e.fontSizeLG,
    selectHeight: e.controlHeightLG,
    multipleSelectItemHeight: e.multipleItemHeightLG,
    borderRadius: e.borderRadiusLG,
    borderRadiusSM: e.borderRadius
  }), [, a] = Xd(e);
  return [
    gi(e),
    // ======================== Small ========================
    gi(n, "sm"),
    // Padding
    {
      [`${t}-multiple${t}-sm`]: {
        [`${t}-selection-placeholder`]: {
          insetInline: e.controlPaddingHorizontalSM - e.lineWidth
        },
        // https://github.com/ant-design/ant-design/issues/29559
        [`${t}-selection-search`]: {
          marginInlineStart: a
        }
      }
    },
    // ======================== Large ========================
    gi(r, "lg")
  ];
}, Zy = Jy;
function hi(e, t) {
  const {
    componentCls: n,
    inputPaddingHorizontalBase: r,
    borderRadius: a
  } = e, o = e.controlHeight - e.lineWidth * 2, i = Math.ceil(e.fontSize * 1.25), l = t ? `${n}-${t}` : "";
  return {
    [`${n}-single${l}`]: {
      fontSize: e.fontSize,
      height: e.controlHeight,
      // ========================= Selector =========================
      [`${n}-selector`]: Object.assign(Object.assign({}, Qn(e, !0)), {
        display: "flex",
        borderRadius: a,
        [`${n}-selection-search`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: r,
          insetInlineEnd: r,
          bottom: 0,
          "&-input": {
            width: "100%"
          }
        },
        [`
          ${n}-selection-item,
          ${n}-selection-placeholder
        `]: {
          padding: 0,
          lineHeight: `${o}px`,
          transition: `all ${e.motionDurationSlow}, visibility 0s`,
          alignSelf: "center"
        },
        [`${n}-selection-placeholder`]: {
          transition: "none",
          pointerEvents: "none"
        },
        // For common baseline align
        [[
          "&:after",
          /* For '' value baseline align */
          `${n}-selection-item:empty:after`,
          /* For undefined value baseline align */
          `${n}-selection-placeholder:empty:after`
        ].join(",")]: {
          display: "inline-block",
          width: 0,
          visibility: "hidden",
          content: '"\\a0"'
        }
      }),
      [`
        &${n}-show-arrow ${n}-selection-item,
        &${n}-show-arrow ${n}-selection-placeholder
      `]: {
        paddingInlineEnd: i
      },
      // Opacity selection if open
      [`&${n}-open ${n}-selection-item`]: {
        color: e.colorTextPlaceholder
      },
      // ========================== Input ==========================
      // We only change the style of non-customize input which is only support by `combobox` mode.
      // Not customize
      [`&:not(${n}-customize-input)`]: {
        [`${n}-selector`]: {
          width: "100%",
          height: "100%",
          padding: `0 ${r}px`,
          [`${n}-selection-search-input`]: {
            height: o
          },
          "&:after": {
            lineHeight: `${o}px`
          }
        }
      },
      [`&${n}-customize-input`]: {
        [`${n}-selector`]: {
          "&:after": {
            display: "none"
          },
          [`${n}-selection-search`]: {
            position: "static",
            width: "100%"
          },
          [`${n}-selection-placeholder`]: {
            position: "absolute",
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${r}px`,
            "&:after": {
              display: "none"
            }
          }
        }
      }
    }
  };
}
function eS(e) {
  const {
    componentCls: t
  } = e, n = e.controlPaddingHorizontalSM - e.lineWidth;
  return [
    hi(e),
    // ======================== Small ========================
    // Shared
    hi(bt(e, {
      controlHeight: e.controlHeightSM,
      borderRadius: e.borderRadiusSM
    }), "sm"),
    // padding
    {
      [`${t}-single${t}-sm`]: {
        [`&:not(${t}-customize-input)`]: {
          [`${t}-selection-search`]: {
            insetInlineStart: n,
            insetInlineEnd: n
          },
          [`${t}-selector`]: {
            padding: `0 ${n}px`
          },
          // With arrow should provides `padding-right` to show the arrow
          [`&${t}-show-arrow ${t}-selection-search`]: {
            insetInlineEnd: n + e.fontSize * 1.5
          },
          [`
            &${t}-show-arrow ${t}-selection-item,
            &${t}-show-arrow ${t}-selection-placeholder
          `]: {
            paddingInlineEnd: e.fontSize * 1.5
          }
        }
      }
    },
    // ======================== Large ========================
    // Shared
    hi(bt(e, {
      controlHeight: e.singleItemHeightLG,
      fontSize: e.fontSizeLG,
      borderRadius: e.borderRadiusLG
    }), "lg")
  ];
}
const tS = (e) => {
  const {
    componentCls: t,
    selectorBg: n
  } = e;
  return {
    position: "relative",
    backgroundColor: n,
    border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
    transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
    input: {
      cursor: "pointer"
    },
    [`${t}-show-search&`]: {
      cursor: "text",
      input: {
        cursor: "auto",
        color: "inherit",
        height: "100%"
      }
    },
    [`${t}-disabled&`]: {
      color: e.colorTextDisabled,
      background: e.colorBgContainerDisabled,
      cursor: "not-allowed",
      [`${t}-multiple&`]: {
        background: e.multipleSelectorBgDisabled
      },
      input: {
        cursor: "not-allowed"
      }
    }
  };
}, pi = function(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  const {
    componentCls: r,
    borderHoverColor: a,
    antCls: o,
    borderActiveColor: i,
    outlineColor: l,
    controlOutlineWidth: c
  } = t, u = n ? {
    [`${r}-selector`]: {
      borderColor: i
    }
  } : {};
  return {
    [e]: {
      [`&:not(${r}-disabled):not(${r}-customize-input):not(${o}-pagination-size-changer)`]: Object.assign(Object.assign({}, u), {
        [`&:hover ${r}-selector`]: {
          borderColor: a
        },
        [`${r}-focused& ${r}-selector`]: {
          borderColor: i,
          boxShadow: `0 0 0 ${c}px ${l}`,
          outline: 0
        }
      })
    }
  };
}, nS = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-selection-search-input`]: {
      margin: 0,
      padding: 0,
      background: "transparent",
      border: "none",
      outline: "none",
      appearance: "none",
      fontFamily: "inherit",
      "&::-webkit-search-cancel-button": {
        display: "none",
        "-webkit-appearance": "none"
      }
    }
  };
}, rS = (e) => {
  const {
    antCls: t,
    componentCls: n,
    inputPaddingHorizontalBase: r,
    iconCls: a
  } = e;
  return {
    [n]: Object.assign(Object.assign({}, Qn(e)), {
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      [`&:not(${n}-customize-input) ${n}-selector`]: Object.assign(Object.assign({}, tS(e)), nS(e)),
      // [`&:not(&-disabled):hover ${selectCls}-selector`]: {
      //   ...genHoverStyle(token),
      // },
      // ======================== Selection ========================
      [`${n}-selection-item`]: Object.assign(Object.assign({
        flex: 1,
        fontWeight: "normal",
        position: "relative",
        userSelect: "none"
      }, Vi), {
        // https://github.com/ant-design/ant-design/issues/40421
        [`> ${t}-typography`]: {
          display: "inline"
        }
      }),
      // ======================= Placeholder =======================
      [`${n}-selection-placeholder`]: Object.assign(Object.assign({}, Vi), {
        flex: 1,
        color: e.colorTextPlaceholder,
        pointerEvents: "none"
      }),
      // ========================== Arrow ==========================
      [`${n}-arrow`]: Object.assign(Object.assign({}, _o()), {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: r,
        height: e.fontSizeIcon,
        marginTop: -e.fontSizeIcon / 2,
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        lineHeight: 1,
        textAlign: "center",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        [a]: {
          verticalAlign: "top",
          transition: `transform ${e.motionDurationSlow}`,
          "> svg": {
            verticalAlign: "top"
          },
          [`&:not(${n}-suffix)`]: {
            pointerEvents: "auto"
          }
        },
        [`${n}-disabled &`]: {
          cursor: "not-allowed"
        },
        "> *:not(:last-child)": {
          marginInlineEnd: 8
          // FIXME: magic
        }
      }),
      // ========================== Clear ==========================
      [`${n}-clear`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: r,
        zIndex: 1,
        display: "inline-block",
        width: e.fontSizeIcon,
        height: e.fontSizeIcon,
        marginTop: -e.fontSizeIcon / 2,
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        fontStyle: "normal",
        lineHeight: 1,
        textAlign: "center",
        textTransform: "none",
        background: e.clearBg,
        cursor: "pointer",
        opacity: 0,
        transition: `color ${e.motionDurationMid} ease, opacity ${e.motionDurationSlow} ease`,
        textRendering: "auto",
        "&:before": {
          display: "block"
        },
        "&:hover": {
          color: e.colorTextTertiary
        }
      },
      "&:hover": {
        [`${n}-clear`]: {
          opacity: 1
        }
      }
    }),
    // ========================= Feedback ==========================
    [`${n}-has-feedback`]: {
      [`${n}-clear`]: {
        insetInlineEnd: r + e.fontSize + e.paddingXS
      }
    }
  };
}, aS = (e) => {
  const {
    componentCls: t
  } = e;
  return [
    {
      [t]: {
        // ==================== BorderLess ====================
        [`&-borderless ${t}-selector`]: {
          backgroundColor: "transparent !important",
          borderColor: "transparent !important",
          boxShadow: "none !important"
        },
        // ==================== In Form ====================
        [`&${t}-in-form-item`]: {
          width: "100%"
        }
      }
    },
    // =====================================================
    // ==                       LTR                       ==
    // =====================================================
    // Base
    rS(e),
    // Single
    eS(e),
    // Multiple
    Zy(e),
    // Dropdown
    Qy(e),
    // =====================================================
    // ==                       RTL                       ==
    // =====================================================
    {
      [`${t}-rtl`]: {
        direction: "rtl"
      }
    },
    // =====================================================
    // ==                     Status                      ==
    // =====================================================
    pi(t, bt(e, {
      borderHoverColor: e.colorPrimaryHover,
      borderActiveColor: e.colorPrimary,
      outlineColor: e.controlOutline
    })),
    pi(`${t}-status-error`, bt(e, {
      borderHoverColor: e.colorErrorHover,
      borderActiveColor: e.colorError,
      outlineColor: e.colorErrorOutline
    }), !0),
    pi(`${t}-status-warning`, bt(e, {
      borderHoverColor: e.colorWarningHover,
      borderActiveColor: e.colorWarning,
      outlineColor: e.colorWarningOutline
    }), !0),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Do(e, {
      borderElCls: `${t}-selector`,
      focusElCls: `${t}-focused`
    })
  ];
}, oS = Ln("Select", (e, t) => {
  let {
    rootPrefixCls: n
  } = t;
  const r = bt(e, {
    rootPrefixCls: n,
    inputPaddingHorizontalBase: e.paddingSM - 1,
    multipleSelectItemHeight: e.multipleItemHeight,
    selectHeight: e.controlHeight
  });
  return [aS(r)];
}, (e) => {
  const {
    fontSize: t,
    lineHeight: n,
    controlHeight: r,
    controlPaddingHorizontal: a,
    zIndexPopupBase: o,
    colorText: i,
    fontWeightStrong: l,
    controlItemBgActive: c,
    controlItemBgHover: u,
    colorBgContainer: d,
    colorFillSecondary: f,
    controlHeightLG: v,
    controlHeightSM: m,
    colorBgContainerDisabled: h,
    colorTextDisabled: b
  } = e;
  return {
    zIndexPopup: o + 50,
    optionSelectedColor: i,
    optionSelectedFontWeight: l,
    optionSelectedBg: c,
    optionActiveBg: u,
    optionPadding: `${(r - t * n) / 2}px ${a}px`,
    optionFontSize: t,
    optionLineHeight: n,
    optionHeight: r,
    selectorBg: d,
    clearBg: d,
    singleItemHeightLG: v,
    multipleItemBg: f,
    multipleItemBorderColor: "transparent",
    multipleItemHeight: m,
    multipleItemHeightLG: r,
    multipleSelectorBgDisabled: h,
    multipleItemColorDisabled: b,
    multipleItemBorderColorDisabled: "transparent"
  };
}), iS = (e) => {
  const n = {
    overflow: {
      adjustX: !0,
      adjustY: !0,
      shiftY: !0
    },
    htmlRegion: e === "scroll" ? "scroll" : "visible",
    dynamicInset: !0
  };
  return {
    bottomLeft: Object.assign(Object.assign({}, n), {
      points: ["tl", "bl"],
      offset: [0, 4]
    }),
    bottomRight: Object.assign(Object.assign({}, n), {
      points: ["tr", "br"],
      offset: [0, 4]
    }),
    topLeft: Object.assign(Object.assign({}, n), {
      points: ["bl", "tl"],
      offset: [0, -4]
    }),
    topRight: Object.assign(Object.assign({}, n), {
      points: ["br", "tr"],
      offset: [0, -4]
    })
  };
};
function sS(e, t) {
  return e || iS(t);
}
function lS(e, t) {
  return t !== void 0 ? t : e !== null;
}
var cS = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" };
const uS = cS;
var dS = function(t, n) {
  return /* @__PURE__ */ s.createElement(Cn, je({}, t, {
    ref: n,
    icon: uS
  }));
};
const fS = /* @__PURE__ */ s.forwardRef(dS);
var vS = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" };
const mS = vS;
var gS = function(t, n) {
  return /* @__PURE__ */ s.createElement(Cn, je({}, t, {
    ref: n,
    icon: mS
  }));
};
const Yd = /* @__PURE__ */ s.forwardRef(gS);
var hS = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" };
const pS = hS;
var bS = function(t, n) {
  return /* @__PURE__ */ s.createElement(Cn, je({}, t, {
    ref: n,
    icon: pS
  }));
};
const Qd = /* @__PURE__ */ s.forwardRef(bS);
function yS(e) {
  let {
    suffixIcon: t,
    clearIcon: n,
    menuItemSelectedIcon: r,
    removeIcon: a,
    loading: o,
    multiple: i,
    hasFeedback: l,
    prefixCls: c,
    showSuffixIcon: u,
    feedbackIcon: d,
    showArrow: f,
    componentName: v
  } = e;
  const m = n ?? /* @__PURE__ */ s.createElement(Ls, null), h = (C) => t === null && !l && !f ? null : /* @__PURE__ */ s.createElement(s.Fragment, null, u !== !1 && C, l && d);
  let b = null;
  if (t !== void 0)
    b = h(t);
  else if (o)
    b = h(/* @__PURE__ */ s.createElement(id, {
      spin: !0
    }));
  else {
    const C = `${c}-suffix`;
    b = (S) => {
      let {
        open: x,
        showSearch: R
      } = S;
      return h(x && R ? /* @__PURE__ */ s.createElement(Qd, {
        className: C
      }) : /* @__PURE__ */ s.createElement(Yd, {
        className: C
      }));
    };
  }
  let p = null;
  r !== void 0 ? p = r : i ? p = /* @__PURE__ */ s.createElement(fS, null) : p = null;
  let g = null;
  return a !== void 0 ? g = a : g = /* @__PURE__ */ s.createElement(Ih, null), {
    clearIcon: m,
    suffixIcon: b,
    itemIcon: p,
    removeIcon: g
  };
}
var SS = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Jd = "SECRET_COMBOBOX_MODE_DO_NOT_USE", CS = (e, t) => {
  var n, {
    prefixCls: r,
    bordered: a = !0,
    className: o,
    rootClassName: i,
    getPopupContainer: l,
    popupClassName: c,
    dropdownClassName: u,
    listHeight: d = 256,
    placement: f,
    listItemHeight: v = 24,
    size: m,
    disabled: h,
    notFoundContent: b,
    status: p,
    builtinPlacements: g,
    dropdownMatchSelectWidth: C,
    popupMatchSelectWidth: S,
    direction: x,
    style: R,
    allowClear: E
  } = e, y = SS(e, ["prefixCls", "bordered", "className", "rootClassName", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth", "direction", "style", "allowClear"]);
  const {
    getPopupContainer: $,
    getPrefixCls: I,
    renderEmpty: T,
    direction: N,
    virtual: F,
    popupMatchSelectWidth: A,
    popupOverflow: D,
    select: z
  } = s.useContext(Ct), M = I("select", r), O = I(), P = x ?? N, {
    compactSize: L,
    compactItemClassnames: j
  } = Sa(M, P), [V, k] = oS(M), U = s.useMemo(() => {
    const {
      mode: de
    } = y;
    if (de !== "combobox")
      return de === Jd ? "combobox" : de;
  }, [y.mode]), W = U === "multiple" || U === "tags", le = lS(y.suffixIcon, y.showArrow), te = (n = S ?? C) !== null && n !== void 0 ? n : A, {
    status: X,
    hasFeedback: K,
    isFormItemInput: ee,
    feedbackIcon: ce
  } = s.useContext(Zn), ge = Vo(X, p);
  let ve;
  b !== void 0 ? ve = b : U === "combobox" ? ve = null : ve = (T == null ? void 0 : T("Select")) || /* @__PURE__ */ s.createElement(Ky, {
    componentName: "Select"
  });
  const {
    suffixIcon: ae,
    itemIcon: Ce,
    removeIcon: Oe,
    clearIcon: Ne
  } = yS(Object.assign(Object.assign({}, y), {
    multiple: W,
    hasFeedback: K,
    feedbackIcon: ce,
    showSuffixIcon: le,
    prefixCls: M,
    showArrow: y.showArrow,
    componentName: "Select"
  })), Ie = E === !0 ? {
    clearIcon: Ne
  } : E, oe = Gr(y, ["suffixIcon", "itemIcon"]), pe = he(c || u, {
    [`${M}-dropdown-${P}`]: P === "rtl"
  }, i, k), se = yr((de) => {
    var Ae;
    return (Ae = m ?? L) !== null && Ae !== void 0 ? Ae : de;
  }), ie = s.useContext(Kr), _e = h ?? ie, He = he({
    [`${M}-lg`]: se === "large",
    [`${M}-sm`]: se === "small",
    [`${M}-rtl`]: P === "rtl",
    [`${M}-borderless`]: !a,
    [`${M}-in-form-item`]: ee
  }, kn(M, ge, K), j, z == null ? void 0 : z.className, o, i, k), Te = s.useMemo(() => f !== void 0 ? f : P === "rtl" ? "bottomRight" : "bottomLeft", [f, P]), ue = sS(g, D);
  return V(/* @__PURE__ */ s.createElement(Gs, Object.assign({
    ref: t,
    virtual: F,
    showSearch: z == null ? void 0 : z.showSearch
  }, oe, {
    style: Object.assign(Object.assign({}, z == null ? void 0 : z.style), R),
    dropdownMatchSelectWidth: te,
    builtinPlacements: ue,
    transitionName: Xh(O, "slide-up", y.transitionName),
    listHeight: d,
    listItemHeight: v,
    mode: U,
    prefixCls: M,
    placement: Te,
    direction: P,
    suffixIcon: ae,
    menuItemSelectedIcon: Ce,
    removeIcon: Oe,
    allowClear: Ie,
    notFoundContent: ve,
    className: He,
    getPopupContainer: l || $,
    dropdownClassName: pe,
    disabled: _e
  })));
}, Xr = /* @__PURE__ */ s.forwardRef(CS), xS = Pd(Xr);
Xr.SECRET_COMBOBOX_MODE_DO_NOT_USE = Jd;
Xr.Option = Us;
Xr.OptGroup = Ws;
Xr._InternalPanelDoNotUseOrYouWillBeFired = xS;
const jt = Xr, {
  Option: ds
} = jt;
function Tc(e) {
  return e && e.type && (e.type.isSelectOption || e.type.isSelectOptGroup);
}
const wS = (e, t) => {
  const {
    prefixCls: n,
    className: r,
    popupClassName: a,
    dropdownClassName: o,
    children: i,
    dataSource: l
  } = e, c = Jn(i);
  let u;
  c.length === 1 && no(c[0]) && !Tc(c[0]) && ([u] = c);
  const d = u ? () => u : void 0;
  let f;
  c.length && Tc(c[0]) ? f = i : f = l ? l.map((h) => {
    if (no(h))
      return h;
    switch (typeof h) {
      case "string":
        return /* @__PURE__ */ s.createElement(ds, {
          key: h,
          value: h
        }, h);
      case "object": {
        const {
          value: b
        } = h;
        return /* @__PURE__ */ s.createElement(ds, {
          key: b,
          value: b
        }, h.text);
      }
      default:
        return;
    }
  }) : [];
  const {
    getPrefixCls: v
  } = s.useContext(Ct), m = v("select", n);
  return /* @__PURE__ */ s.createElement(jt, Object.assign({
    ref: t,
    suffixIcon: null
  }, Gr(e, ["dataSource", "dropdownClassName"]), {
    prefixCls: m,
    popupClassName: a || o,
    className: he(`${m}-auto-complete`, r),
    mode: jt.SECRET_COMBOBOX_MODE_DO_NOT_USE,
    // Internal api
    getInputElement: d
  }), f);
}, Ho = /* @__PURE__ */ s.forwardRef(wS), ES = Pd(Ho);
Ho.Option = ds;
Ho._InternalPanelDoNotUseOrYouWillBeFired = ES;
const $S = Ho, Zd = (e) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color: e,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
}), ef = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), fs = (e) => ({
  borderColor: e.activeBorderColor,
  boxShadow: e.activeShadow,
  outline: 0,
  backgroundColor: e.activeBg
}), Ks = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "&:hover": Object.assign({}, ef(bt(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), tf = (e) => {
  const {
    paddingBlockLG: t,
    fontSizeLG: n,
    lineHeightLG: r,
    borderRadiusLG: a,
    paddingInlineLG: o
  } = e;
  return {
    padding: `${t}px ${o}px`,
    fontSize: n,
    lineHeight: r,
    borderRadius: a
  };
}, nf = (e) => ({
  padding: `${e.paddingBlockSM}px ${e.paddingInlineSM}px`,
  borderRadius: e.borderRadiusSM
}), Bo = (e, t) => {
  const {
    componentCls: n,
    colorError: r,
    colorWarning: a,
    errorActiveShadow: o,
    warningActiveShadow: i,
    colorErrorBorderHover: l,
    colorWarningBorderHover: c
  } = e;
  return {
    [`&-status-error:not(${t}-disabled):not(${t}-borderless)${t}`]: {
      borderColor: r,
      "&:hover": {
        borderColor: l
      },
      "&:focus, &:focus-within": Object.assign({}, fs(bt(e, {
        activeBorderColor: r,
        activeShadow: o
      }))),
      [`${n}-prefix, ${n}-suffix`]: {
        color: r
      }
    },
    [`&-status-warning:not(${t}-disabled):not(${t}-borderless)${t}`]: {
      borderColor: a,
      "&:hover": {
        borderColor: c
      },
      "&:focus, &:focus-within": Object.assign({}, fs(bt(e, {
        activeBorderColor: a,
        activeShadow: i
      }))),
      [`${n}-prefix, ${n}-suffix`]: {
        color: a
      }
    }
  };
}, ko = (e) => Object.assign(Object.assign({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${e.paddingBlock}px ${e.paddingInline}px`,
  color: e.colorText,
  fontSize: e.fontSize,
  lineHeight: e.lineHeight,
  backgroundColor: e.colorBgContainer,
  backgroundImage: "none",
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: e.colorBorder,
  borderRadius: e.borderRadius,
  transition: `all ${e.motionDurationMid}`
}, Zd(e.colorTextPlaceholder)), {
  "&:hover": Object.assign({}, ef(e)),
  "&:focus, &:focus-within": Object.assign({}, fs(e)),
  "&-disabled, &[disabled]": Object.assign({}, Ks(e)),
  "&-borderless": {
    "&, &:hover, &:focus, &-focused, &-disabled, &[disabled]": {
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none"
    }
  },
  // Reset height for `textarea`s
  "textarea&": {
    maxWidth: "100%",
    height: "auto",
    minHeight: e.controlHeight,
    lineHeight: e.lineHeight,
    verticalAlign: "bottom",
    transition: `all ${e.motionDurationSlow}, height 0s`,
    resize: "vertical"
  },
  // Size
  "&-lg": Object.assign({}, tf(e)),
  "&-sm": Object.assign({}, nf(e)),
  // RTL
  "&-rtl": {
    direction: "rtl"
  },
  "&-textarea-rtl": {
    direction: "rtl"
  }
}), rf = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    "&[class*='col-']": {
      paddingInlineEnd: e.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, tf(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, nf(e)),
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${n}-select-single ${n}-select-selector`]: {
      height: e.controlHeightLG
    },
    [`&-sm ${n}-select-single ${n}-select-selector`]: {
      height: e.controlHeightSM
    },
    [`> ${t}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${t}-group`]: {
      "&-addon, &-wrap": {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${e.paddingInline}px`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.fontSize,
        textAlign: "center",
        backgroundColor: e.addonBg,
        border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${n}-select`]: {
          margin: `-${e.paddingBlock + 1}px -${e.paddingInline}px`,
          [`&${n}-select-single:not(${n}-select-customize-input):not(${n}-pagination-size-changer)`]: {
            [`${n}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${e.lineWidth}px ${e.lineType} transparent`,
              boxShadow: "none"
            }
          },
          "&-open, &-focused": {
            [`${n}-select-selector`]: {
              color: e.colorPrimary
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${n}-cascader-picker`]: {
          margin: `-9px -${e.paddingInline}px`,
          backgroundColor: "transparent",
          [`${n}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    },
    [`${t}`]: {
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${n}-select ${n}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}-affix-wrapper`]: {
      [`&:not(:first-child) ${t}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${t}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${n}-select ${n}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${t}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${t}-search &`]: {
          borderStartStartRadius: e.borderRadius,
          borderEndStartRadius: e.borderRadius
        }
      },
      [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${t}-group-compact`]: Object.assign(Object.assign({
      display: "block"
    }, Og()), {
      [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: e.lineWidth,
          "&:hover": {
            zIndex: 1
          },
          "&:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-block",
        float: "none",
        verticalAlign: "top",
        borderRadius: 0
      },
      [`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${n}-picker-range
      `]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: -e.lineWidth,
        borderInlineEndWidth: e.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [`${t}`]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${n}-select > ${n}-select-selector,
      & > ${n}-select-auto-complete ${t},
      & > ${n}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderRadius: 0,
        "&:hover": {
          zIndex: 1
        },
        "&:focus": {
          zIndex: 1
        }
      },
      [`& > ${n}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${n}-select > ${n}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${n}-select:first-child > ${n}-select-selector,
      & > ${n}-select-auto-complete:first-child ${t},
      & > ${n}-cascader-picker:first-child ${t}`]: {
        borderStartStartRadius: e.borderRadius,
        borderEndStartRadius: e.borderRadius
      },
      [`& > *:last-child,
      & > ${n}-select:last-child > ${n}-select-selector,
      & > ${n}-cascader-picker:last-child ${t},
      & > ${n}-cascader-picker-focused:last-child ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderStartEndRadius: e.borderRadius,
        borderEndEndRadius: e.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${n}-select-auto-complete ${t}`]: {
        verticalAlign: "top"
      },
      [`${t}-group-wrapper + ${t}-group-wrapper`]: {
        marginInlineStart: -e.lineWidth,
        [`${t}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${t}-group-wrapper:not(:last-child)`]: {
        [`&${t}-search > ${t}-group`]: {
          [`& > ${t}-group-addon > ${t}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${t}`]: {
            borderStartStartRadius: e.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: e.borderRadius
          }
        }
      }
    })
  };
}, RS = (e) => {
  const {
    componentCls: t,
    controlHeightSM: n,
    lineWidth: r
  } = e, a = 16, o = (n - r * 2 - a) / 2;
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, Qn(e)), ko(e)), Bo(e, t)), {
      '&[type="color"]': {
        height: e.controlHeight,
        [`&${t}-lg`]: {
          height: e.controlHeightLG
        },
        [`&${t}-sm`]: {
          height: n,
          paddingTop: o,
          paddingBottom: o
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        "-webkit-appearance": "none"
      }
    })
  };
}, OS = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // ========================= Input =========================
    [`${t}-clear-icon`]: {
      margin: 0,
      color: e.colorTextQuaternary,
      fontSize: e.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      "&:hover": {
        color: e.colorTextTertiary
      },
      "&:active": {
        color: e.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${e.inputAffixPadding}px`
      }
    }
  };
}, IS = (e) => {
  const {
    componentCls: t,
    inputAffixPadding: n,
    colorTextDescription: r,
    motionDurationSlow: a,
    colorIcon: o,
    colorIconHover: i,
    iconCls: l
  } = e;
  return {
    [`${t}-affix-wrapper`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ko(e)), {
      display: "inline-flex",
      [`&:not(${t}-affix-wrapper-disabled):hover`]: {
        zIndex: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      },
      "&-focused, &:focus": {
        zIndex: 1
      },
      "&-disabled": {
        [`${t}[disabled]`]: {
          background: "transparent"
        }
      },
      [`> input${t}`]: {
        padding: 0,
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        "&::-ms-reveal": {
          display: "none"
        },
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [`${t}`]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: e.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: r
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: e.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: n
        },
        "&-suffix": {
          marginInlineStart: n
        }
      }
    }), OS(e)), {
      // password
      [`${l}${t}-password-icon`]: {
        color: o,
        cursor: "pointer",
        transition: `all ${a}`,
        "&:hover": {
          color: i
        }
      }
    }), Bo(e, `${t}-affix-wrapper`))
  };
}, MS = (e) => {
  const {
    componentCls: t,
    colorError: n,
    colorWarning: r,
    borderRadiusLG: a,
    borderRadiusSM: o
  } = e;
  return {
    [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, Qn(e)), rf(e)), {
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": {
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${t}-group-addon`]: {
            borderRadius: a,
            fontSize: e.fontSizeLG
          }
        },
        "&-sm": {
          [`${t}-group-addon`]: {
            borderRadius: o
          }
        },
        // Status
        "&-status-error": {
          [`${t}-group-addon`]: {
            color: n,
            borderColor: n
          }
        },
        "&-status-warning": {
          [`${t}-group-addon`]: {
            color: r,
            borderColor: r
          }
        },
        "&-disabled": {
          [`${t}-group-addon`]: Object.assign({}, Ks(e))
        },
        // Fix the issue of using icons in Space Compact mode
        // https://github.com/ant-design/ant-design/issues/42122
        [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderRadius: 0
          }
        },
        [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        }
      }
    })
  };
}, PS = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e, r = `${t}-search`;
  return {
    [r]: {
      [`${t}`]: {
        "&:hover, &:focus": {
          borderColor: e.colorPrimaryHover,
          [`+ ${t}-group-addon ${r}-button:not(${n}-btn-primary)`]: {
            borderInlineStartColor: e.colorPrimaryHover
          }
        }
      },
      [`${t}-affix-wrapper`]: {
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#components-auto-complete-demo-certain-category
      [`${t}-lg`]: {
        lineHeight: e.lineHeightLG - 2e-4
      },
      [`> ${t}-group`]: {
        [`> ${t}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${r}-button`]: {
            paddingTop: 0,
            paddingBottom: 0,
            borderStartStartRadius: 0,
            borderStartEndRadius: e.borderRadius,
            borderEndEndRadius: e.borderRadius,
            borderEndStartRadius: 0,
            boxShadow: "none"
          },
          [`${r}-button:not(${n}-btn-primary)`]: {
            color: e.colorTextDescription,
            "&:hover": {
              color: e.colorPrimaryHover
            },
            "&:active": {
              color: e.colorPrimaryActive
            },
            [`&${n}-btn-loading::before`]: {
              insetInlineStart: 0,
              insetInlineEnd: 0,
              insetBlockStart: 0,
              insetBlockEnd: 0
            }
          }
        }
      },
      [`${r}-button`]: {
        height: e.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`&-large ${r}-button`]: {
        height: e.controlHeightLG
      },
      [`&-small ${r}-button`]: {
        height: e.controlHeightSM
      },
      "&-rtl": {
        direction: "rtl"
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${t}-compact-item`]: {
        [`&:not(${t}-compact-last-item)`]: {
          [`${t}-group-addon`]: {
            [`${t}-search-button`]: {
              marginInlineEnd: -e.lineWidth,
              borderRadius: 0
            }
          }
        },
        [`&:not(${t}-compact-first-item)`]: {
          [`${t},${t}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: {
          "&:hover,&:focus,&:active": {
            zIndex: 2
          }
        },
        [`> ${t}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
}, NS = (e) => {
  const {
    componentCls: t,
    paddingLG: n
  } = e, r = `${t}-textarea`;
  return {
    [r]: {
      position: "relative",
      "&-show-count": {
        // https://github.com/ant-design/ant-design/issues/33049
        [`> ${t}`]: {
          height: "100%"
        },
        [`${t}-data-count`]: {
          position: "absolute",
          bottom: -e.fontSize * e.lineHeight,
          insetInlineEnd: 0,
          color: e.colorTextDescription,
          whiteSpace: "nowrap",
          pointerEvents: "none"
        }
      },
      "&-allow-clear": {
        [`> ${t}`]: {
          paddingInlineEnd: n
        }
      },
      [`&-affix-wrapper${r}-has-feedback`]: {
        [`${t}`]: {
          paddingInlineEnd: n
        }
      },
      [`&-affix-wrapper${t}-affix-wrapper`]: {
        padding: 0,
        [`> textarea${t}`]: {
          fontSize: "inherit",
          border: "none",
          outline: "none",
          "&:focus": {
            boxShadow: "none !important"
          }
        },
        [`${t}-suffix`]: {
          margin: 0,
          "> *:not(:last-child)": {
            marginInline: 0
          },
          // Clear Icon
          [`${t}-clear-icon`]: {
            position: "absolute",
            insetInlineEnd: e.paddingXS,
            insetBlockStart: e.paddingXS
          },
          // Feedback Icon
          [`${r}-suffix`]: {
            position: "absolute",
            top: 0,
            insetInlineEnd: e.paddingInline,
            bottom: 0,
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            margin: "auto",
            pointerEvents: "none"
          }
        }
      }
    }
  };
};
function af(e) {
  return bt(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const of = (e) => {
  const {
    controlHeight: t,
    fontSize: n,
    lineHeight: r,
    lineWidth: a,
    controlHeightSM: o,
    controlHeightLG: i,
    fontSizeLG: l,
    lineHeightLG: c,
    paddingSM: u,
    controlPaddingHorizontalSM: d,
    controlPaddingHorizontal: f,
    colorFillAlter: v,
    colorPrimaryHover: m,
    colorPrimary: h,
    controlOutlineWidth: b,
    controlOutline: p,
    colorErrorOutline: g,
    colorWarningOutline: C
  } = e;
  return {
    paddingBlock: Math.max(Math.round((t - n * r) / 2 * 10) / 10 - a, 0),
    paddingBlockSM: Math.max(Math.round((o - n * r) / 2 * 10) / 10 - a, 0),
    paddingBlockLG: Math.ceil((i - l * c) / 2 * 10) / 10 - a,
    paddingInline: u - a,
    paddingInlineSM: d - a,
    paddingInlineLG: f - a,
    addonBg: v,
    activeBorderColor: h,
    hoverBorderColor: m,
    activeShadow: `0 0 0 ${b}px ${p}`,
    errorActiveShadow: `0 0 0 ${b}px ${g}`,
    warningActiveShadow: `0 0 0 ${b}px ${C}`,
    hoverBg: "",
    activeBg: ""
  };
}, Xs = Ln("Input", (e) => {
  const t = bt(e, af(e));
  return [
    RS(t),
    NS(t),
    IS(t),
    MS(t),
    PS(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Do(t)
  ];
}, of), TS = /* @__PURE__ */ s.createContext({}), _S = TS, AS = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // Grid system
    [t]: {
      display: "flex",
      flexFlow: "row wrap",
      minWidth: 0,
      "&::before, &::after": {
        display: "flex"
      },
      "&-no-wrap": {
        flexWrap: "nowrap"
      },
      // The origin of the X-axis
      "&-start": {
        justifyContent: "flex-start"
      },
      // The center of the X-axis
      "&-center": {
        justifyContent: "center"
      },
      // The opposite of the X-axis
      "&-end": {
        justifyContent: "flex-end"
      },
      "&-space-between": {
        justifyContent: "space-between"
      },
      "&-space-around": {
        justifyContent: "space-around"
      },
      "&-space-evenly": {
        justifyContent: "space-evenly"
      },
      // Align at the top
      "&-top": {
        alignItems: "flex-start"
      },
      // Align at the center
      "&-middle": {
        alignItems: "center"
      },
      "&-bottom": {
        alignItems: "flex-end"
      }
    }
  };
}, FS = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // Grid system
    [t]: {
      position: "relative",
      maxWidth: "100%",
      // Prevent columns from collapsing when empty
      minHeight: 1
    }
  };
}, jS = (e, t) => {
  const {
    componentCls: n,
    gridColumns: r
  } = e, a = {};
  for (let o = r; o >= 0; o--)
    o === 0 ? (a[`${n}${t}-${o}`] = {
      display: "none"
    }, a[`${n}-push-${o}`] = {
      insetInlineStart: "auto"
    }, a[`${n}-pull-${o}`] = {
      insetInlineEnd: "auto"
    }, a[`${n}${t}-push-${o}`] = {
      insetInlineStart: "auto"
    }, a[`${n}${t}-pull-${o}`] = {
      insetInlineEnd: "auto"
    }, a[`${n}${t}-offset-${o}`] = {
      marginInlineStart: 0
    }, a[`${n}${t}-order-${o}`] = {
      order: 0
    }) : (a[`${n}${t}-${o}`] = [
      // https://github.com/ant-design/ant-design/issues/44456
      // Form set `display: flex` on Col which will override `display: block`.
      // Let's get it from css variable to support override.
      {
        "--ant-display": "block",
        // Fallback to display if variable not support
        display: "block"
      },
      {
        display: "var(--ant-display)",
        flex: `0 0 ${o / r * 100}%`,
        maxWidth: `${o / r * 100}%`
      }
    ], a[`${n}${t}-push-${o}`] = {
      insetInlineStart: `${o / r * 100}%`
    }, a[`${n}${t}-pull-${o}`] = {
      insetInlineEnd: `${o / r * 100}%`
    }, a[`${n}${t}-offset-${o}`] = {
      marginInlineStart: `${o / r * 100}%`
    }, a[`${n}${t}-order-${o}`] = {
      order: o
    });
  return a;
}, vs = (e, t) => jS(e, t), LS = (e, t, n) => ({
  [`@media (min-width: ${t}px)`]: Object.assign({}, vs(e, n))
});
Ln("Grid", (e) => [AS(e)]);
const DS = Ln("Grid", (e) => {
  const t = bt(e, {
    gridColumns: 24
    // Row is divided into 24 parts in Grid
  }), n = {
    "-sm": t.screenSMMin,
    "-md": t.screenMDMin,
    "-lg": t.screenLGMin,
    "-xl": t.screenXLMin,
    "-xxl": t.screenXXLMin
  };
  return [FS(t), vs(t, ""), vs(t, "-xs"), Object.keys(n).map((r) => LS(t, n[r], r)).reduce((r, a) => Object.assign(Object.assign({}, r), a), {})];
});
var zS = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function VS(e) {
  return typeof e == "number" ? `${e} ${e} auto` : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? `0 0 ${e}` : e;
}
const HS = ["xs", "sm", "md", "lg", "xl", "xxl"], BS = /* @__PURE__ */ s.forwardRef((e, t) => {
  const {
    getPrefixCls: n,
    direction: r
  } = s.useContext(Ct), {
    gutter: a,
    wrap: o
  } = s.useContext(_S), {
    prefixCls: i,
    span: l,
    order: c,
    offset: u,
    push: d,
    pull: f,
    className: v,
    children: m,
    flex: h,
    style: b
  } = e, p = zS(e, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]), g = n("col", i), [C, S] = DS(g);
  let x = {};
  HS.forEach((y) => {
    let $ = {};
    const I = e[y];
    typeof I == "number" ? $.span = I : typeof I == "object" && ($ = I || {}), delete p[y], x = Object.assign(Object.assign({}, x), {
      [`${g}-${y}-${$.span}`]: $.span !== void 0,
      [`${g}-${y}-order-${$.order}`]: $.order || $.order === 0,
      [`${g}-${y}-offset-${$.offset}`]: $.offset || $.offset === 0,
      [`${g}-${y}-push-${$.push}`]: $.push || $.push === 0,
      [`${g}-${y}-pull-${$.pull}`]: $.pull || $.pull === 0,
      [`${g}-${y}-flex-${$.flex}`]: $.flex || $.flex === "auto",
      [`${g}-rtl`]: r === "rtl"
    });
  });
  const R = he(g, {
    [`${g}-${l}`]: l !== void 0,
    [`${g}-order-${c}`]: c,
    [`${g}-offset-${u}`]: u,
    [`${g}-push-${d}`]: d,
    [`${g}-pull-${f}`]: f
  }, v, x, S), E = {};
  if (a && a[0] > 0) {
    const y = a[0] / 2;
    E.paddingLeft = y, E.paddingRight = y;
  }
  return h && (E.flex = VS(h), o === !1 && !E.minWidth && (E.minWidth = 0)), C(/* @__PURE__ */ s.createElement("div", Object.assign({}, p, {
    style: Object.assign(Object.assign({}, E), b),
    className: R,
    ref: t
  }), m));
}), kS = BS;
var WS = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" } }] }, name: "up", theme: "outlined" };
const US = WS;
var GS = function(t, n) {
  return /* @__PURE__ */ s.createElement(Cn, je({}, t, {
    ref: n,
    icon: US
  }));
};
const qS = /* @__PURE__ */ s.forwardRef(GS);
function ms() {
  return typeof BigInt == "function";
}
function sf(e) {
  return !e && e !== 0 && !Number.isNaN(e) || !String(e).trim();
}
function fr(e) {
  var t = e.trim(), n = t.startsWith("-");
  n && (t = t.slice(1)), t = t.replace(/(\.\d*[^0])0*$/, "$1").replace(/\.0*$/, "").replace(/^0+/, ""), t.startsWith(".") && (t = "0".concat(t));
  var r = t || "0", a = r.split("."), o = a[0] || "0", i = a[1] || "0";
  o === "0" && i === "0" && (n = !1);
  var l = n ? "-" : "";
  return {
    negative: n,
    negativeStr: l,
    trimStr: r,
    integerStr: o,
    decimalStr: i,
    fullStr: "".concat(l).concat(r)
  };
}
function Ys(e) {
  var t = String(e);
  return !Number.isNaN(Number(t)) && t.includes("e");
}
function lr(e) {
  var t = String(e);
  if (Ys(e)) {
    var n = Number(t.slice(t.indexOf("e-") + 2)), r = t.match(/\.(\d+)/);
    return r != null && r[1] && (n += r[1].length), n;
  }
  return t.includes(".") && Qs(t) ? t.length - t.indexOf(".") - 1 : 0;
}
function Wo(e) {
  var t = String(e);
  if (Ys(e)) {
    if (e > Number.MAX_SAFE_INTEGER)
      return String(ms() ? BigInt(e).toString() : Number.MAX_SAFE_INTEGER);
    if (e < Number.MIN_SAFE_INTEGER)
      return String(ms() ? BigInt(e).toString() : Number.MIN_SAFE_INTEGER);
    t = e.toFixed(lr(t));
  }
  return fr(t).fullStr;
}
function Qs(e) {
  return typeof e == "number" ? !Number.isNaN(e) : e ? (
    // Normal type: 11.28
    /^\s*-?\d+(\.\d+)?\s*$/.test(e) || // Pre-number: 1.
    /^\s*-?\d+\.\s*$/.test(e) || // Post-number: .1
    /^\s*-?\.\d+\s*$/.test(e)
  ) : !1;
}
var KS = /* @__PURE__ */ function() {
  function e(t) {
    if (sn(this, e), _(this, "origin", ""), _(this, "negative", void 0), _(this, "integer", void 0), _(this, "decimal", void 0), _(this, "decimalLen", void 0), _(this, "empty", void 0), _(this, "nan", void 0), sf(t)) {
      this.empty = !0;
      return;
    }
    if (this.origin = String(t), t === "-" || Number.isNaN(t)) {
      this.nan = !0;
      return;
    }
    var n = t;
    if (Ys(n) && (n = Number(n)), n = typeof n == "string" ? n : Wo(n), Qs(n)) {
      var r = fr(n);
      this.negative = r.negative;
      var a = r.trimStr.split(".");
      this.integer = BigInt(a[0]);
      var o = a[1] || "0";
      this.decimal = BigInt(o), this.decimalLen = o.length;
    } else
      this.nan = !0;
  }
  return ln(e, [{
    key: "getMark",
    value: function() {
      return this.negative ? "-" : "";
    }
  }, {
    key: "getIntegerStr",
    value: function() {
      return this.integer.toString();
    }
    /**
     * @private get decimal string
     */
  }, {
    key: "getDecimalStr",
    value: function() {
      return this.decimal.toString().padStart(this.decimalLen, "0");
    }
    /**
     * @private Align BigIntDecimal with same decimal length. e.g. 12.3 + 5 = 1230000
     * This is used for add function only.
     */
  }, {
    key: "alignDecimal",
    value: function(n) {
      var r = "".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(n, "0"));
      return BigInt(r);
    }
  }, {
    key: "negate",
    value: function() {
      var n = new e(this.toString());
      return n.negative = !n.negative, n;
    }
  }, {
    key: "cal",
    value: function(n, r, a) {
      var o = Math.max(this.getDecimalStr().length, n.getDecimalStr().length), i = this.alignDecimal(o), l = n.alignDecimal(o), c = r(i, l).toString(), u = a(o), d = fr(c), f = d.negativeStr, v = d.trimStr, m = "".concat(f).concat(v.padStart(u + 1, "0"));
      return new e("".concat(m.slice(0, -u), ".").concat(m.slice(-u)));
    }
  }, {
    key: "add",
    value: function(n) {
      if (this.isInvalidate())
        return new e(n);
      var r = new e(n);
      return r.isInvalidate() ? this : this.cal(r, function(a, o) {
        return a + o;
      }, function(a) {
        return a;
      });
    }
  }, {
    key: "multi",
    value: function(n) {
      var r = new e(n);
      return this.isInvalidate() || r.isInvalidate() ? new e(NaN) : this.cal(r, function(a, o) {
        return a * o;
      }, function(a) {
        return a * 2;
      });
    }
  }, {
    key: "isEmpty",
    value: function() {
      return this.empty;
    }
  }, {
    key: "isNaN",
    value: function() {
      return this.nan;
    }
  }, {
    key: "isInvalidate",
    value: function() {
      return this.isEmpty() || this.isNaN();
    }
  }, {
    key: "equals",
    value: function(n) {
      return this.toString() === (n == null ? void 0 : n.toString());
    }
  }, {
    key: "lessEquals",
    value: function(n) {
      return this.add(n.negate().toString()).toNumber() <= 0;
    }
  }, {
    key: "toNumber",
    value: function() {
      return this.isNaN() ? NaN : Number(this.toString());
    }
  }, {
    key: "toString",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      return n ? this.isInvalidate() ? "" : fr("".concat(this.getMark()).concat(this.getIntegerStr(), ".").concat(this.getDecimalStr())).fullStr : this.origin;
    }
  }]), e;
}(), XS = /* @__PURE__ */ function() {
  function e(t) {
    if (sn(this, e), _(this, "origin", ""), _(this, "number", void 0), _(this, "empty", void 0), sf(t)) {
      this.empty = !0;
      return;
    }
    this.origin = String(t), this.number = Number(t);
  }
  return ln(e, [{
    key: "negate",
    value: function() {
      return new e(-this.toNumber());
    }
  }, {
    key: "add",
    value: function(n) {
      if (this.isInvalidate())
        return new e(n);
      var r = Number(n);
      if (Number.isNaN(r))
        return this;
      var a = this.number + r;
      if (a > Number.MAX_SAFE_INTEGER)
        return new e(Number.MAX_SAFE_INTEGER);
      if (a < Number.MIN_SAFE_INTEGER)
        return new e(Number.MIN_SAFE_INTEGER);
      var o = Math.max(lr(this.number), lr(r));
      return new e(a.toFixed(o));
    }
  }, {
    key: "multi",
    value: function(n) {
      var r = Number(n);
      if (this.isInvalidate() || Number.isNaN(r))
        return new e(NaN);
      var a = this.number * r;
      if (a > Number.MAX_SAFE_INTEGER)
        return new e(Number.MAX_SAFE_INTEGER);
      if (a < Number.MIN_SAFE_INTEGER)
        return new e(Number.MIN_SAFE_INTEGER);
      var o = Math.max(lr(this.number), lr(r));
      return new e(a.toFixed(o));
    }
  }, {
    key: "isEmpty",
    value: function() {
      return this.empty;
    }
  }, {
    key: "isNaN",
    value: function() {
      return Number.isNaN(this.number);
    }
  }, {
    key: "isInvalidate",
    value: function() {
      return this.isEmpty() || this.isNaN();
    }
  }, {
    key: "equals",
    value: function(n) {
      return this.toNumber() === (n == null ? void 0 : n.toNumber());
    }
  }, {
    key: "lessEquals",
    value: function(n) {
      return this.add(n.negate().toString()).toNumber() <= 0;
    }
  }, {
    key: "toNumber",
    value: function() {
      return this.number;
    }
  }, {
    key: "toString",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      return n ? this.isInvalidate() ? "" : Wo(this.number) : this.origin;
    }
  }]), e;
}();
function Rn(e) {
  return ms() ? new KS(e) : new XS(e);
}
function qa(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (e === "")
    return "";
  var a = fr(e), o = a.negativeStr, i = a.integerStr, l = a.decimalStr, c = "".concat(t).concat(l), u = "".concat(o).concat(i);
  if (n >= 0) {
    var d = Number(l[n]);
    if (d >= 5 && !r) {
      var f = Rn(e).add("".concat(o, "0.").concat("0".repeat(n)).concat(10 - d));
      return qa(f.toString(), t, n, r);
    }
    return n === 0 ? u : "".concat(u).concat(t).concat(l.padEnd(n, "0").slice(0, n));
  }
  return c === ".0" ? u : "".concat(u).concat(c);
}
function Nr(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function bi(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function ca(e, t, n, r) {
  if (n) {
    var a = t;
    if (t.type === "click") {
      var o = e.cloneNode(!0);
      a = Object.create(t, {
        target: {
          value: o
        },
        currentTarget: {
          value: o
        }
      }), o.value = "", n(a);
      return;
    }
    if (r !== void 0) {
      a = Object.create(t, {
        target: {
          value: e
        },
        currentTarget: {
          value: e
        }
      }), e.value = r, n(a);
      return;
    }
    n(a);
  }
}
function lf(e, t) {
  if (e) {
    e.focus(t);
    var n = t || {}, r = n.cursor;
    if (r) {
      var a = e.value.length;
      switch (r) {
        case "start":
          e.setSelectionRange(0, 0);
          break;
        case "end":
          e.setSelectionRange(a, a);
          break;
        default:
          e.setSelectionRange(0, a);
      }
    }
  }
}
function gs(e) {
  return typeof e > "u" || e === null ? "" : String(e);
}
var Js = function(t) {
  var n, r, a = t.inputElement, o = t.prefixCls, i = t.prefix, l = t.suffix, c = t.addonBefore, u = t.addonAfter, d = t.className, f = t.style, v = t.disabled, m = t.readOnly, h = t.focused, b = t.triggerFocus, p = t.allowClear, g = t.value, C = t.handleReset, S = t.hidden, x = t.classes, R = t.classNames, E = t.dataAttrs, y = t.styles, $ = t.components, I = ($ == null ? void 0 : $.affixWrapper) || "span", T = ($ == null ? void 0 : $.groupWrapper) || "span", N = ($ == null ? void 0 : $.wrapper) || "span", F = ($ == null ? void 0 : $.groupAddon) || "span", A = s.useRef(null), D = function(te) {
    var X;
    (X = A.current) !== null && X !== void 0 && X.contains(te.target) && (b == null || b());
  }, z = function() {
    var te;
    if (!p)
      return null;
    var X = !v && !m && g, K = "".concat(o, "-clear-icon"), ee = We(p) === "object" && p !== null && p !== void 0 && p.clearIcon ? p.clearIcon : "✖";
    return /* @__PURE__ */ Se.createElement("span", {
      onClick: C,
      onMouseDown: function(ge) {
        return ge.preventDefault();
      },
      className: he(K, (te = {}, _(te, "".concat(K, "-hidden"), !X), _(te, "".concat(K, "-has-suffix"), !!l), te)),
      role: "button",
      tabIndex: -1
    }, ee);
  }, M = /* @__PURE__ */ s.cloneElement(a, {
    value: g,
    hidden: S,
    className: he((n = a.props) === null || n === void 0 ? void 0 : n.className, !bi(t) && !Nr(t) && d) || null,
    style: B(B({}, (r = a.props) === null || r === void 0 ? void 0 : r.style), !bi(t) && !Nr(t) ? f : {})
  });
  if (bi(t)) {
    var O, P = "".concat(o, "-affix-wrapper"), L = he(P, (O = {}, _(O, "".concat(P, "-disabled"), v), _(O, "".concat(P, "-focused"), h), _(O, "".concat(P, "-readonly"), m), _(O, "".concat(P, "-input-with-clear-btn"), l && p && g), O), !Nr(t) && d, x == null ? void 0 : x.affixWrapper, R == null ? void 0 : R.affixWrapper), j = (l || p) && /* @__PURE__ */ Se.createElement("span", {
      className: he("".concat(o, "-suffix"), R == null ? void 0 : R.suffix),
      style: y == null ? void 0 : y.suffix
    }, z(), l);
    M = /* @__PURE__ */ Se.createElement(I, je({
      className: L,
      style: B(B({}, Nr(t) ? void 0 : f), y == null ? void 0 : y.affixWrapper),
      hidden: !Nr(t) && S,
      onClick: D
    }, E == null ? void 0 : E.affixWrapper, {
      ref: A
    }), i && /* @__PURE__ */ Se.createElement("span", {
      className: he("".concat(o, "-prefix"), R == null ? void 0 : R.prefix),
      style: y == null ? void 0 : y.prefix
    }, i), /* @__PURE__ */ s.cloneElement(a, {
      value: g,
      hidden: null
    }), j);
  }
  if (Nr(t)) {
    var V = "".concat(o, "-group"), k = "".concat(V, "-addon"), U = he("".concat(o, "-wrapper"), V, x == null ? void 0 : x.wrapper), W = he("".concat(o, "-group-wrapper"), d, x == null ? void 0 : x.group);
    return /* @__PURE__ */ Se.createElement(T, {
      className: W,
      style: f,
      hidden: S
    }, /* @__PURE__ */ Se.createElement(N, {
      className: U
    }, c && /* @__PURE__ */ Se.createElement(F, {
      className: k
    }, c), /* @__PURE__ */ s.cloneElement(M, {
      hidden: null
    }), u && /* @__PURE__ */ Se.createElement(F, {
      className: k
    }, u)));
  }
  return M;
}, YS = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "type", "classes", "classNames", "styles"], QS = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.autoComplete, r = e.onChange, a = e.onFocus, o = e.onBlur, i = e.onPressEnter, l = e.onKeyDown, c = e.prefixCls, u = c === void 0 ? "rc-input" : c, d = e.disabled, f = e.htmlSize, v = e.className, m = e.maxLength, h = e.suffix, b = e.showCount, p = e.type, g = p === void 0 ? "text" : p, C = e.classes, S = e.classNames, x = e.styles, R = vt(e, YS), E = mr(e.defaultValue, {
    value: e.value
  }), y = G(E, 2), $ = y[0], I = y[1], T = s.useState(!1), N = G(T, 2), F = N[0], A = N[1], D = s.useRef(null), z = function(W) {
    D.current && lf(D.current, W);
  };
  s.useImperativeHandle(t, function() {
    return {
      focus: z,
      blur: function() {
        var W;
        (W = D.current) === null || W === void 0 || W.blur();
      },
      setSelectionRange: function(W, le, te) {
        var X;
        (X = D.current) === null || X === void 0 || X.setSelectionRange(W, le, te);
      },
      select: function() {
        var W;
        (W = D.current) === null || W === void 0 || W.select();
      },
      input: D.current
    };
  }), s.useEffect(function() {
    A(function(U) {
      return U && d ? !1 : U;
    });
  }, [d]);
  var M = function(W) {
    e.value === void 0 && I(W.target.value), D.current && ca(D.current, W, r);
  }, O = function(W) {
    i && W.key === "Enter" && i(W), l == null || l(W);
  }, P = function(W) {
    A(!0), a == null || a(W);
  }, L = function(W) {
    A(!1), o == null || o(W);
  }, j = function(W) {
    I(""), z(), D.current && ca(D.current, W, r);
  }, V = function() {
    var W = Gr(e, [
      "prefixCls",
      "onPressEnter",
      "addonBefore",
      "addonAfter",
      "prefix",
      "suffix",
      "allowClear",
      // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      "defaultValue",
      "showCount",
      "classes",
      "htmlSize",
      "styles",
      "classNames"
    ]);
    return /* @__PURE__ */ Se.createElement("input", je({
      autoComplete: n
    }, W, {
      onChange: M,
      onFocus: P,
      onBlur: L,
      onKeyDown: O,
      className: he(u, _({}, "".concat(u, "-disabled"), d), S == null ? void 0 : S.input),
      style: x == null ? void 0 : x.input,
      ref: D,
      size: f,
      type: g
    }));
  }, k = function() {
    var W = Number(m) > 0;
    if (h || b) {
      var le = gs($), te = Pe(le).length, X = We(b) === "object" ? b.formatter({
        value: le,
        count: te,
        maxLength: m
      }) : "".concat(te).concat(W ? " / ".concat(m) : "");
      return /* @__PURE__ */ Se.createElement(Se.Fragment, null, !!b && /* @__PURE__ */ Se.createElement("span", {
        className: he("".concat(u, "-show-count-suffix"), _({}, "".concat(u, "-show-count-has-suffix"), !!h), S == null ? void 0 : S.count),
        style: B({}, x == null ? void 0 : x.count)
      }, X), h);
    }
    return null;
  };
  return /* @__PURE__ */ Se.createElement(Js, je({}, R, {
    prefixCls: u,
    className: v,
    inputElement: V(),
    handleReset: j,
    value: gs($),
    focused: F,
    triggerFocus: z,
    suffix: k(),
    disabled: d,
    classes: C,
    classNames: S,
    styles: x
  }));
});
function JS(e, t) {
  var n = s.useRef(null);
  function r() {
    try {
      var o = e.selectionStart, i = e.selectionEnd, l = e.value, c = l.substring(0, o), u = l.substring(i);
      n.current = {
        start: o,
        end: i,
        value: l,
        beforeTxt: c,
        afterTxt: u
      };
    } catch {
    }
  }
  function a() {
    if (e && n.current && t)
      try {
        var o = e.value, i = n.current, l = i.beforeTxt, c = i.afterTxt, u = i.start, d = o.length;
        if (o.endsWith(c))
          d = o.length - n.current.afterTxt.length;
        else if (o.startsWith(l))
          d = l.length;
        else {
          var f = l[u - 1], v = o.indexOf(f, u - 1);
          v !== -1 && (d = v + 1);
        }
        e.setSelectionRange(d, d);
      } catch (m) {
        Wt(!1, "Something warning of cursor restore. Please fire issue about this: ".concat(m.message));
      }
  }
  return [r, a];
}
var ZS = function() {
  var t = s.useState(!1), n = G(t, 2), r = n[0], a = n[1];
  return gt(function() {
    a(Bs());
  }, []), r;
}, e1 = 200, t1 = 600;
function n1(e) {
  var t = e.prefixCls, n = e.upNode, r = e.downNode, a = e.upDisabled, o = e.downDisabled, i = e.onStep, l = s.useRef(), c = s.useRef([]), u = s.useRef();
  u.current = i;
  var d = function() {
    clearTimeout(l.current);
  }, f = function(S, x) {
    S.preventDefault(), d(), u.current(x);
    function R() {
      u.current(x), l.current = setTimeout(R, e1);
    }
    l.current = setTimeout(R, t1);
  };
  s.useEffect(function() {
    return function() {
      d(), c.current.forEach(function(C) {
        return ft.cancel(C);
      });
    };
  }, []);
  var v = ZS();
  if (v)
    return null;
  var m = "".concat(t, "-handler"), h = he(m, "".concat(m, "-up"), _({}, "".concat(m, "-up-disabled"), a)), b = he(m, "".concat(m, "-down"), _({}, "".concat(m, "-down-disabled"), o)), p = function() {
    return c.current.push(ft(d));
  }, g = {
    unselectable: "on",
    role: "button",
    onMouseUp: p,
    onMouseLeave: p
  };
  return /* @__PURE__ */ s.createElement("div", {
    className: "".concat(m, "-wrap")
  }, /* @__PURE__ */ s.createElement("span", je({}, g, {
    onMouseDown: function(S) {
      f(S, !0);
    },
    "aria-label": "Increase Value",
    "aria-disabled": a,
    className: h
  }), n || /* @__PURE__ */ s.createElement("span", {
    unselectable: "on",
    className: "".concat(t, "-handler-up-inner")
  })), /* @__PURE__ */ s.createElement("span", je({}, g, {
    onMouseDown: function(S) {
      f(S, !1);
    },
    "aria-label": "Decrease Value",
    "aria-disabled": o,
    className: b
  }), r || /* @__PURE__ */ s.createElement("span", {
    unselectable: "on",
    className: "".concat(t, "-handler-down-inner")
  })));
}
function _c(e) {
  var t = typeof e == "number" ? Wo(e) : fr(e).fullStr, n = t.includes(".");
  return n ? fr(t.replace(/(\d)\.(\d)/g, "$1$2.")).fullStr : e + "0";
}
const r1 = function() {
  var e = s.useRef(0), t = function() {
    ft.cancel(e.current);
  };
  return s.useEffect(function() {
    return t;
  }, []), function(n) {
    t(), e.current = ft(function() {
      n();
    });
  };
};
var a1 = ["prefixCls", "className", "style", "min", "max", "step", "defaultValue", "value", "disabled", "readOnly", "upHandler", "downHandler", "keyboard", "controls", "classNames", "stringMode", "parser", "formatter", "precision", "decimalSeparator", "onChange", "onInput", "onPressEnter", "onStep"], o1 = ["disabled", "style", "prefixCls", "value", "prefix", "suffix", "addonBefore", "addonAfter", "classes", "className", "classNames"], Ac = function(t, n) {
  return t || n.isEmpty() ? n.toString() : n.toNumber();
}, Fc = function(t) {
  var n = Rn(t);
  return n.isInvalidate() ? null : n;
}, i1 = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n, r = e.prefixCls, a = r === void 0 ? "rc-input-number" : r, o = e.className, i = e.style, l = e.min, c = e.max, u = e.step, d = u === void 0 ? 1 : u, f = e.defaultValue, v = e.value, m = e.disabled, h = e.readOnly, b = e.upHandler, p = e.downHandler, g = e.keyboard, C = e.controls, S = C === void 0 ? !0 : C, x = e.classNames, R = e.stringMode, E = e.parser, y = e.formatter, $ = e.precision, I = e.decimalSeparator, T = e.onChange, N = e.onInput, F = e.onPressEnter, A = e.onStep, D = vt(e, a1), z = "".concat(a, "-input"), M = s.useRef(null), O = s.useState(!1), P = G(O, 2), L = P[0], j = P[1], V = s.useRef(!1), k = s.useRef(!1), U = s.useRef(!1), W = s.useState(function() {
    return Rn(v ?? f);
  }), le = G(W, 2), te = le[0], X = le[1];
  function K(fe) {
    v === void 0 && X(fe);
  }
  var ee = s.useCallback(function(fe, be) {
    if (!be)
      return $ >= 0 ? $ : Math.max(lr(fe), lr(d));
  }, [$, d]), ce = s.useCallback(function(fe) {
    var be = String(fe);
    if (E)
      return E(be);
    var Me = be;
    return I && (Me = Me.replace(I, ".")), Me.replace(/[^\w.-]+/g, "");
  }, [E, I]), ge = s.useRef(""), ve = s.useCallback(function(fe, be) {
    if (y)
      return y(fe, {
        userTyping: be,
        input: String(ge.current)
      });
    var Me = typeof fe == "number" ? Wo(fe) : fe;
    if (!be) {
      var J = ee(Me, be);
      if (Qs(Me) && (I || J >= 0)) {
        var me = I || ".";
        Me = qa(Me, me, J);
      }
    }
    return Me;
  }, [y, ee, I]), ae = s.useState(function() {
    var fe = f ?? v;
    return te.isInvalidate() && ["string", "number"].includes(We(fe)) ? Number.isNaN(fe) ? "" : fe : ve(te.toString(), !1);
  }), Ce = G(ae, 2), Oe = Ce[0], Ne = Ce[1];
  ge.current = Oe;
  function Ie(fe, be) {
    Ne(ve(
      // Invalidate number is sometime passed by external control, we should let it go
      // Otherwise is controlled by internal interactive logic which check by userTyping
      // You can ref 'show limited value when input is not focused' test for more info.
      fe.isInvalidate() ? fe.toString(!1) : fe.toString(!be),
      be
    ));
  }
  var oe = s.useMemo(function() {
    return Fc(c);
  }, [c, $]), pe = s.useMemo(function() {
    return Fc(l);
  }, [l, $]), se = s.useMemo(function() {
    return !oe || !te || te.isInvalidate() ? !1 : oe.lessEquals(te);
  }, [oe, te]), ie = s.useMemo(function() {
    return !pe || !te || te.isInvalidate() ? !1 : te.lessEquals(pe);
  }, [pe, te]), _e = JS(M.current, L), He = G(_e, 2), Te = He[0], ue = He[1], de = function(be) {
    return oe && !be.lessEquals(oe) ? oe : pe && !pe.lessEquals(be) ? pe : null;
  }, Ae = function(be) {
    return !de(be);
  }, Ke = function(be, Me) {
    var J = be, me = Ae(J) || J.isEmpty();
    if (!J.isEmpty() && !Me && (J = de(J) || J, me = !0), !h && !m && me) {
      var ke = J.toString(), Ue = ee(ke, Me);
      return Ue >= 0 && (J = Rn(qa(ke, ".", Ue)), Ae(J) || (J = Rn(qa(ke, ".", Ue, !0)))), J.equals(te) || (K(J), T == null || T(J.isEmpty() ? null : Ac(R, J)), v === void 0 && Ie(J, Me)), J;
    }
    return te;
  }, Be = r1(), tt = function fe(be) {
    if (Te(), ge.current = be, Ne(be), !k.current) {
      var Me = ce(be), J = Rn(Me);
      J.isNaN() || Ke(J, !0);
    }
    N == null || N(be), Be(function() {
      var me = be;
      E || (me = be.replace(/。/g, ".")), me !== be && fe(me);
    });
  }, De = function() {
    k.current = !0;
  }, _t = function() {
    k.current = !1, tt(M.current.value);
  }, lt = function(be) {
    tt(be.target.value);
  }, ot = function(be) {
    var Me;
    if (!(be && se || !be && ie)) {
      V.current = !1;
      var J = Rn(U.current ? _c(d) : d);
      be || (J = J.negate());
      var me = (te || Rn(0)).add(J.toString()), ke = Ke(me, !1);
      A == null || A(Ac(R, ke), {
        offset: U.current ? _c(d) : d,
        type: be ? "up" : "down"
      }), (Me = M.current) === null || Me === void 0 || Me.focus();
    }
  }, Xe = function(be) {
    var Me = Rn(ce(Oe)), J = Me;
    Me.isNaN() ? J = Ke(te, be) : J = Ke(Me, be), v !== void 0 ? Ie(te, !1) : J.isNaN() || Ie(J, !1);
  }, ht = function() {
    V.current = !0;
  }, at = function(be) {
    var Me = be.key, J = be.shiftKey;
    V.current = !0, U.current = J, Me === "Enter" && (k.current || (V.current = !1), Xe(!1), F == null || F(be)), g !== !1 && !k.current && ["Up", "ArrowUp", "Down", "ArrowDown"].includes(Me) && (ot(Me === "Up" || Me === "ArrowUp"), be.preventDefault());
  }, Ye = function() {
    V.current = !1, U.current = !1;
  }, qe = function() {
    Xe(!1), j(!1), V.current = !1;
  };
  return oa(function() {
    te.isInvalidate() || Ie(te, !1);
  }, [$]), oa(function() {
    var fe = Rn(v);
    X(fe);
    var be = Rn(ce(Oe));
    (!fe.equals(be) || !V.current || y) && Ie(fe, V.current);
  }, [v]), oa(function() {
    y && ue();
  }, [Oe]), /* @__PURE__ */ s.createElement("div", {
    className: he(a, x == null ? void 0 : x.input, o, (n = {}, _(n, "".concat(a, "-focused"), L), _(n, "".concat(a, "-disabled"), m), _(n, "".concat(a, "-readonly"), h), _(n, "".concat(a, "-not-a-number"), te.isNaN()), _(n, "".concat(a, "-out-of-range"), !te.isInvalidate() && !Ae(te)), n)),
    style: i,
    onFocus: function() {
      j(!0);
    },
    onBlur: qe,
    onKeyDown: at,
    onKeyUp: Ye,
    onCompositionStart: De,
    onCompositionEnd: _t,
    onBeforeInput: ht
  }, S && /* @__PURE__ */ s.createElement(n1, {
    prefixCls: a,
    upNode: b,
    downNode: p,
    upDisabled: se,
    downDisabled: ie,
    onStep: ot
  }), /* @__PURE__ */ s.createElement("div", {
    className: "".concat(z, "-wrap")
  }, /* @__PURE__ */ s.createElement("input", je({
    autoComplete: "off",
    role: "spinbutton",
    "aria-valuemin": l,
    "aria-valuemax": c,
    "aria-valuenow": te.isInvalidate() ? null : te.toString(),
    step: d
  }, D, {
    ref: jn(M, t),
    className: z,
    value: Oe,
    onChange: lt,
    disabled: m,
    readOnly: h
  }))));
}), cf = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.disabled, r = e.style, a = e.prefixCls, o = e.value, i = e.prefix, l = e.suffix, c = e.addonBefore, u = e.addonAfter, d = e.classes, f = e.className, v = e.classNames, m = vt(e, o1), h = s.useRef(null), b = function(g) {
    h.current && lf(h.current, g);
  };
  return /* @__PURE__ */ s.createElement(Js, {
    inputElement: /* @__PURE__ */ s.createElement(i1, je({
      prefixCls: a,
      disabled: n,
      classNames: v,
      ref: jn(h, t)
    }, m)),
    className: f,
    triggerFocus: b,
    prefixCls: a,
    value: o,
    disabled: n,
    style: r,
    prefix: i,
    suffix: l,
    addonAfter: u,
    addonBefore: c,
    classes: d,
    classNames: v,
    components: {
      affixWrapper: "div",
      groupWrapper: "div",
      wrapper: "div",
      groupAddon: "div"
    }
  });
});
cf.displayName = "InputNumber";
const jc = (e, t) => {
  let {
    componentCls: n,
    borderRadiusSM: r,
    borderRadiusLG: a
  } = e;
  const o = t === "lg" ? a : r;
  return {
    [`&-${t}`]: {
      [`${n}-handler-wrap`]: {
        borderStartEndRadius: o,
        borderEndEndRadius: o
      },
      [`${n}-handler-up`]: {
        borderStartEndRadius: o
      },
      [`${n}-handler-down`]: {
        borderEndEndRadius: o
      }
    }
  };
}, s1 = (e) => {
  const {
    componentCls: t,
    lineWidth: n,
    lineType: r,
    colorBorder: a,
    borderRadius: o,
    fontSizeLG: i,
    controlHeightLG: l,
    controlHeightSM: c,
    colorError: u,
    paddingInlineSM: d,
    colorTextDescription: f,
    motionDurationMid: v,
    handleHoverColor: m,
    paddingInline: h,
    paddingBlock: b,
    handleBg: p,
    handleActiveBg: g,
    colorTextDisabled: C,
    borderRadiusSM: S,
    borderRadiusLG: x,
    controlWidth: R,
    handleVisible: E,
    handleBorderColor: y
  } = e;
  return [
    {
      [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, Qn(e)), ko(e)), Bo(e, t)), {
        display: "inline-block",
        width: R,
        margin: 0,
        padding: 0,
        border: `${n}px ${r} ${a}`,
        borderRadius: o,
        "&-rtl": {
          direction: "rtl",
          [`${t}-input`]: {
            direction: "rtl"
          }
        },
        "&-lg": {
          padding: 0,
          fontSize: i,
          borderRadius: x,
          [`input${t}-input`]: {
            height: l - 2 * n
          }
        },
        "&-sm": {
          padding: 0,
          borderRadius: S,
          [`input${t}-input`]: {
            height: c - 2 * n,
            padding: `0 ${d}px`
          }
        },
        // ===================== Out Of Range =====================
        "&-out-of-range": {
          [`${t}-input-wrap`]: {
            input: {
              color: u
            }
          }
        },
        // Style for input-group: input with label, with button or dropdown...
        "&-group": Object.assign(Object.assign(Object.assign({}, Qn(e)), rf(e)), {
          "&-wrapper": {
            display: "inline-block",
            textAlign: "start",
            verticalAlign: "top",
            [`${t}-affix-wrapper`]: {
              width: "100%"
            },
            // Size
            "&-lg": {
              [`${t}-group-addon`]: {
                borderRadius: x,
                fontSize: e.fontSizeLG
              }
            },
            "&-sm": {
              [`${t}-group-addon`]: {
                borderRadius: S
              }
            },
            [`${t}-wrapper-disabled > ${t}-group-addon`]: Object.assign({}, Ks(e))
          }
        }),
        [`&-disabled ${t}-input`]: {
          cursor: "not-allowed"
        },
        [t]: {
          "&-input": Object.assign(Object.assign(Object.assign(Object.assign({}, Qn(e)), {
            width: "100%",
            padding: `${b}px ${h}px`,
            textAlign: "start",
            backgroundColor: "transparent",
            border: 0,
            borderRadius: o,
            outline: 0,
            transition: `all ${v} linear`,
            appearance: "textfield",
            fontSize: "inherit"
          }), Zd(e.colorTextPlaceholder)), {
            '&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button': {
              margin: 0,
              /* stylelint-disable-next-line property-no-vendor-prefix */
              webkitAppearance: "none",
              appearance: "none"
            }
          })
        }
      })
    },
    // Handler
    {
      [t]: Object.assign(Object.assign(Object.assign({
        [`&:hover ${t}-handler-wrap, &-focused ${t}-handler-wrap`]: {
          opacity: 1
        },
        [`${t}-handler-wrap`]: {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineEnd: 0,
          width: e.handleWidth,
          height: "100%",
          background: p,
          borderStartStartRadius: 0,
          borderStartEndRadius: o,
          borderEndEndRadius: o,
          borderEndStartRadius: 0,
          opacity: E === !0 ? 1 : 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          transition: `opacity ${v} linear ${v}`,
          // Fix input number inside Menu makes icon too large
          // We arise the selector priority by nest selector here
          // https://github.com/ant-design/ant-design/issues/14367
          [`${t}-handler`]: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "auto",
            height: "40%",
            [`
              ${t}-handler-up-inner,
              ${t}-handler-down-inner
            `]: {
              marginInlineEnd: 0,
              fontSize: e.handleFontSize
            }
          }
        },
        [`${t}-handler`]: {
          height: "50%",
          overflow: "hidden",
          color: f,
          fontWeight: "bold",
          lineHeight: 0,
          textAlign: "center",
          cursor: "pointer",
          borderInlineStart: `${n}px ${r} ${y}`,
          transition: `all ${v} linear`,
          "&:active": {
            background: g
          },
          // Hover
          "&:hover": {
            height: "60%",
            [`
              ${t}-handler-up-inner,
              ${t}-handler-down-inner
            `]: {
              color: m
            }
          },
          "&-up-inner, &-down-inner": Object.assign(Object.assign({}, _o()), {
            color: f,
            transition: `all ${v} linear`,
            userSelect: "none"
          })
        },
        [`${t}-handler-up`]: {
          borderStartEndRadius: o
        },
        [`${t}-handler-down`]: {
          borderBlockStart: `${n}px ${r} ${y}`,
          borderEndEndRadius: o
        }
      }, jc(e, "lg")), jc(e, "sm")), {
        // Disabled
        "&-disabled, &-readonly": {
          [`${t}-handler-wrap`]: {
            display: "none"
          },
          [`${t}-input`]: {
            color: "inherit"
          }
        },
        [`
          ${t}-handler-up-disabled,
          ${t}-handler-down-disabled
        `]: {
          cursor: "not-allowed"
        },
        [`
          ${t}-handler-up-disabled:hover &-handler-up-inner,
          ${t}-handler-down-disabled:hover &-handler-down-inner
        `]: {
          color: C
        }
      })
    },
    // Border-less
    {
      [`${t}-borderless`]: {
        borderColor: "transparent",
        boxShadow: "none",
        [`${t}-handler-down`]: {
          borderBlockStartWidth: 0
        }
      }
    }
  ];
}, l1 = (e) => {
  const {
    componentCls: t,
    paddingBlock: n,
    paddingInline: r,
    inputAffixPadding: a,
    controlWidth: o,
    borderRadiusLG: i,
    borderRadiusSM: l
  } = e;
  return {
    [`${t}-affix-wrapper`]: Object.assign(Object.assign(Object.assign({}, ko(e)), Bo(e, `${t}-affix-wrapper`)), {
      // or number handler will cover form status
      position: "relative",
      display: "inline-flex",
      width: o,
      padding: 0,
      paddingInlineStart: r,
      "&-lg": {
        borderRadius: i
      },
      "&-sm": {
        borderRadius: l
      },
      [`&:not(${t}-affix-wrapper-disabled):hover`]: {
        zIndex: 1
      },
      "&-focused, &:focus": {
        zIndex: 1
      },
      [`&-disabled > ${t}-disabled`]: {
        background: "transparent"
      },
      [`> div${t}`]: {
        width: "100%",
        border: "none",
        outline: "none",
        [`&${t}-focused`]: {
          boxShadow: "none !important"
        }
      },
      [`input${t}-input`]: {
        padding: `${n}px 0`
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [`${t}-handler-wrap`]: {
        zIndex: 2
      },
      [t]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          pointerEvents: "none"
        },
        "&-prefix": {
          marginInlineEnd: a
        },
        "&-suffix": {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineEnd: 0,
          zIndex: 1,
          height: "100%",
          marginInlineEnd: r,
          marginInlineStart: a
        }
      }
    })
  };
}, c1 = Ln("InputNumber", (e) => {
  const t = bt(e, af(e));
  return [
    s1(t),
    l1(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Do(t)
  ];
}, (e) => Object.assign(Object.assign({}, of(e)), {
  controlWidth: 90,
  handleWidth: e.controlHeightSM - e.lineWidth * 2,
  handleFontSize: e.fontSize / 2,
  handleVisible: "auto",
  handleActiveBg: e.colorFillAlter,
  handleBg: e.colorBgContainer,
  handleHoverColor: e.colorPrimary,
  handleBorderColor: e.colorBorder
}));
var u1 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const uf = /* @__PURE__ */ s.forwardRef((e, t) => {
  const {
    getPrefixCls: n,
    direction: r
  } = s.useContext(Ct), a = s.useRef(null);
  s.useImperativeHandle(t, () => a.current);
  const {
    className: o,
    rootClassName: i,
    size: l,
    disabled: c,
    prefixCls: u,
    addonBefore: d,
    addonAfter: f,
    prefix: v,
    bordered: m = !0,
    readOnly: h,
    status: b,
    controls: p
  } = e, g = u1(e, ["className", "rootClassName", "size", "disabled", "prefixCls", "addonBefore", "addonAfter", "prefix", "bordered", "readOnly", "status", "controls"]), C = n("input-number", u), [S, x] = c1(C), {
    compactSize: R,
    compactItemClassnames: E
  } = Sa(C, r);
  let y = /* @__PURE__ */ s.createElement(qS, {
    className: `${C}-handler-up-inner`
  }), $ = /* @__PURE__ */ s.createElement(Yd, {
    className: `${C}-handler-down-inner`
  });
  const I = typeof p == "boolean" ? p : void 0;
  typeof p == "object" && (y = typeof p.upIcon > "u" ? y : /* @__PURE__ */ s.createElement("span", {
    className: `${C}-handler-up-inner`
  }, p.upIcon), $ = typeof p.downIcon > "u" ? $ : /* @__PURE__ */ s.createElement("span", {
    className: `${C}-handler-down-inner`
  }, p.downIcon));
  const {
    hasFeedback: T,
    status: N,
    isFormItemInput: F,
    feedbackIcon: A
  } = s.useContext(Zn), D = Vo(N, b), z = yr((V) => {
    var k;
    return (k = l ?? R) !== null && k !== void 0 ? k : V;
  }), M = s.useContext(Kr), O = c ?? M, P = he({
    [`${C}-lg`]: z === "large",
    [`${C}-sm`]: z === "small",
    [`${C}-rtl`]: r === "rtl",
    [`${C}-borderless`]: !m,
    [`${C}-in-form-item`]: F
  }, kn(C, D), x), L = `${C}-group`, j = /* @__PURE__ */ s.createElement(cf, Object.assign({
    ref: a,
    disabled: O,
    className: he(o, i, E),
    upHandler: y,
    downHandler: $,
    prefixCls: C,
    readOnly: h,
    controls: I,
    prefix: v,
    suffix: T && A,
    addonAfter: f && /* @__PURE__ */ s.createElement(oo, null, /* @__PURE__ */ s.createElement(lo, {
      override: !0,
      status: !0
    }, f)),
    addonBefore: d && /* @__PURE__ */ s.createElement(oo, null, /* @__PURE__ */ s.createElement(lo, {
      override: !0,
      status: !0
    }, d)),
    classNames: {
      input: P
    },
    classes: {
      affixWrapper: he(kn(`${C}-affix-wrapper`, D, T), {
        [`${C}-affix-wrapper-sm`]: z === "small",
        [`${C}-affix-wrapper-lg`]: z === "large",
        [`${C}-affix-wrapper-rtl`]: r === "rtl",
        [`${C}-affix-wrapper-borderless`]: !m
      }, x),
      wrapper: he({
        [`${L}-rtl`]: r === "rtl",
        [`${C}-wrapper-disabled`]: O
      }, x),
      group: he({
        [`${C}-group-wrapper-sm`]: z === "small",
        [`${C}-group-wrapper-lg`]: z === "large",
        [`${C}-group-wrapper-rtl`]: r === "rtl"
      }, kn(`${C}-group-wrapper`, D, T), x)
    }
  }, g));
  return S(j);
}), df = uf, d1 = (e) => /* @__PURE__ */ s.createElement(pr, {
  theme: {
    components: {
      InputNumber: {
        handleVisible: !0
      }
    }
  }
}, /* @__PURE__ */ s.createElement(uf, Object.assign({}, e)));
df._InternalPanelDoNotUseOrYouWillBeFired = d1;
const f1 = df, v1 = (e) => {
  const {
    getPrefixCls: t,
    direction: n
  } = s.useContext(Ct), {
    prefixCls: r,
    className: a
  } = e, o = t("input-group", r), i = t("input"), [l, c] = Xs(i), u = he(o, {
    [`${o}-lg`]: e.size === "large",
    [`${o}-sm`]: e.size === "small",
    [`${o}-compact`]: e.compact,
    [`${o}-rtl`]: n === "rtl"
  }, c, a), d = s.useContext(Zn), f = s.useMemo(() => Object.assign(Object.assign({}, d), {
    isFormItemInput: !1
  }), [d]);
  return l(/* @__PURE__ */ s.createElement("span", {
    className: u,
    style: e.style,
    onMouseEnter: e.onMouseEnter,
    onMouseLeave: e.onMouseLeave,
    onFocus: e.onFocus,
    onBlur: e.onBlur
  }, /* @__PURE__ */ s.createElement(Zn.Provider, {
    value: f
  }, e.children)));
}, m1 = v1;
function ff(e, t) {
  const n = s.useRef([]), r = () => {
    n.current.push(setTimeout(() => {
      var a, o, i, l;
      !((a = e.current) === null || a === void 0) && a.input && ((o = e.current) === null || o === void 0 ? void 0 : o.input.getAttribute("type")) === "password" && (!((i = e.current) === null || i === void 0) && i.input.hasAttribute("value")) && ((l = e.current) === null || l === void 0 || l.input.removeAttribute("value"));
    }));
  };
  return s.useEffect(() => (t && r(), () => n.current.forEach((a) => {
    a && clearTimeout(a);
  })), []), r;
}
function g1(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
var h1 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function p1(e, t) {
  if (!e)
    return;
  e.focus(t);
  const {
    cursor: n
  } = t || {};
  if (n) {
    const r = e.value.length;
    switch (n) {
      case "start":
        e.setSelectionRange(0, 0);
        break;
      case "end":
        e.setSelectionRange(r, r);
        break;
      default:
        e.setSelectionRange(0, r);
        break;
    }
  }
}
const b1 = /* @__PURE__ */ s.forwardRef((e, t) => {
  var n;
  const {
    prefixCls: r,
    bordered: a = !0,
    status: o,
    size: i,
    disabled: l,
    onBlur: c,
    onFocus: u,
    suffix: d,
    allowClear: f,
    addonAfter: v,
    addonBefore: m,
    className: h,
    style: b,
    styles: p,
    rootClassName: g,
    onChange: C,
    classNames: S
  } = e, x = h1(e, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames"]), {
    getPrefixCls: R,
    direction: E,
    input: y
  } = Se.useContext(Ct), $ = R("input", r), I = s.useRef(null), [T, N] = Xs($), {
    compactSize: F,
    compactItemClassnames: A
  } = Sa($, E), D = yr((K) => {
    var ee;
    return (ee = i ?? F) !== null && ee !== void 0 ? ee : K;
  }), z = Se.useContext(Kr), M = l ?? z, {
    status: O,
    hasFeedback: P,
    feedbackIcon: L
  } = s.useContext(Zn), j = Vo(O, o), V = g1(e) || !!P;
  s.useRef(V);
  const k = ff(I, !0), U = (K) => {
    k(), c == null || c(K);
  }, W = (K) => {
    k(), u == null || u(K);
  }, le = (K) => {
    k(), C == null || C(K);
  }, te = (P || d) && /* @__PURE__ */ Se.createElement(Se.Fragment, null, d, P && L);
  let X;
  return typeof f == "object" && (f != null && f.clearIcon) ? X = f : f && (X = {
    clearIcon: /* @__PURE__ */ Se.createElement(Ls, null)
  }), T(/* @__PURE__ */ Se.createElement(QS, Object.assign({
    ref: jn(t, I),
    prefixCls: $,
    autoComplete: y == null ? void 0 : y.autoComplete
  }, x, {
    disabled: M,
    onBlur: U,
    onFocus: W,
    style: Object.assign(Object.assign({}, y == null ? void 0 : y.style), b),
    styles: Object.assign(Object.assign({}, y == null ? void 0 : y.styles), p),
    suffix: te,
    allowClear: X,
    className: he(h, g, A, y == null ? void 0 : y.className),
    onChange: le,
    addonAfter: v && /* @__PURE__ */ Se.createElement(oo, null, /* @__PURE__ */ Se.createElement(lo, {
      override: !0,
      status: !0
    }, v)),
    addonBefore: m && /* @__PURE__ */ Se.createElement(oo, null, /* @__PURE__ */ Se.createElement(lo, {
      override: !0,
      status: !0
    }, m)),
    classNames: Object.assign(Object.assign(Object.assign({}, S), y == null ? void 0 : y.classNames), {
      input: he({
        [`${$}-sm`]: D === "small",
        [`${$}-lg`]: D === "large",
        [`${$}-rtl`]: E === "rtl",
        [`${$}-borderless`]: !a
      }, !V && kn($, j), S == null ? void 0 : S.input, (n = y == null ? void 0 : y.classNames) === null || n === void 0 ? void 0 : n.input, N)
    }),
    classes: {
      affixWrapper: he({
        [`${$}-affix-wrapper-sm`]: D === "small",
        [`${$}-affix-wrapper-lg`]: D === "large",
        [`${$}-affix-wrapper-rtl`]: E === "rtl",
        [`${$}-affix-wrapper-borderless`]: !a
      }, kn(`${$}-affix-wrapper`, j, P), N),
      wrapper: he({
        [`${$}-group-rtl`]: E === "rtl"
      }, N),
      group: he({
        [`${$}-group-wrapper-sm`]: D === "small",
        [`${$}-group-wrapper-lg`]: D === "large",
        [`${$}-group-wrapper-rtl`]: E === "rtl",
        [`${$}-group-wrapper-disabled`]: M
      }, kn(`${$}-group-wrapper`, j, P), N)
    }
  })));
}), Zs = b1;
var y1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { tag: "path", attrs: { d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, name: "eye-invisible", theme: "outlined" };
const S1 = y1;
var C1 = function(t, n) {
  return /* @__PURE__ */ s.createElement(Cn, je({}, t, {
    ref: n,
    icon: S1
  }));
};
const x1 = /* @__PURE__ */ s.forwardRef(C1);
var w1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, name: "eye", theme: "outlined" };
const E1 = w1;
var $1 = function(t, n) {
  return /* @__PURE__ */ s.createElement(Cn, je({}, t, {
    ref: n,
    icon: E1
  }));
};
const R1 = /* @__PURE__ */ s.forwardRef($1);
var O1 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const I1 = (e) => e ? /* @__PURE__ */ s.createElement(R1, null) : /* @__PURE__ */ s.createElement(x1, null), M1 = {
  click: "onClick",
  hover: "onMouseOver"
}, P1 = /* @__PURE__ */ s.forwardRef((e, t) => {
  const {
    visibilityToggle: n = !0
  } = e, r = typeof n == "object" && n.visible !== void 0, [a, o] = s.useState(() => r ? n.visible : !1), i = s.useRef(null);
  s.useEffect(() => {
    r && o(n.visible);
  }, [r, n]);
  const l = ff(i), c = () => {
    const {
      disabled: R
    } = e;
    R || (a && l(), o((E) => {
      var y;
      const $ = !E;
      return typeof n == "object" && ((y = n.onVisibleChange) === null || y === void 0 || y.call(n, $)), $;
    }));
  }, u = (R) => {
    const {
      action: E = "click",
      iconRender: y = I1
    } = e, $ = M1[E] || "", I = y(a), T = {
      [$]: c,
      className: `${R}-icon`,
      key: "passwordIcon",
      onMouseDown: (N) => {
        N.preventDefault();
      },
      onMouseUp: (N) => {
        N.preventDefault();
      }
    };
    return /* @__PURE__ */ s.cloneElement(/* @__PURE__ */ s.isValidElement(I) ? I : /* @__PURE__ */ s.createElement("span", null, I), T);
  }, {
    className: d,
    prefixCls: f,
    inputPrefixCls: v,
    size: m
  } = e, h = O1(e, ["className", "prefixCls", "inputPrefixCls", "size"]), {
    getPrefixCls: b
  } = s.useContext(Ct), p = b("input", v), g = b("input-password", f), C = n && u(g), S = he(g, d, {
    [`${g}-${m}`]: !!m
  }), x = Object.assign(Object.assign({}, Gr(h, ["suffix", "iconRender", "visibilityToggle"])), {
    type: a ? "text" : "password",
    className: S,
    prefixCls: p,
    suffix: C
  });
  return m && (x.size = m), /* @__PURE__ */ s.createElement(Zs, Object.assign({
    ref: jn(t, i)
  }, x));
}), N1 = P1;
var T1 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const _1 = /* @__PURE__ */ s.forwardRef((e, t) => {
  const {
    prefixCls: n,
    inputPrefixCls: r,
    className: a,
    size: o,
    suffix: i,
    enterButton: l = !1,
    addonAfter: c,
    loading: u,
    disabled: d,
    onSearch: f,
    onChange: v,
    onCompositionStart: m,
    onCompositionEnd: h
  } = e, b = T1(e, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange", "onCompositionStart", "onCompositionEnd"]), {
    getPrefixCls: p,
    direction: g
  } = s.useContext(Ct), C = s.useRef(!1), S = p("input-search", n), x = p("input", r), {
    compactSize: R
  } = Sa(S, g), E = yr((j) => {
    var V;
    return (V = o ?? R) !== null && V !== void 0 ? V : j;
  }), y = s.useRef(null), $ = (j) => {
    j && j.target && j.type === "click" && f && f(j.target.value, j, {
      source: "clear"
    }), v && v(j);
  }, I = (j) => {
    var V;
    document.activeElement === ((V = y.current) === null || V === void 0 ? void 0 : V.input) && j.preventDefault();
  }, T = (j) => {
    var V, k;
    f && f((k = (V = y.current) === null || V === void 0 ? void 0 : V.input) === null || k === void 0 ? void 0 : k.value, j, {
      source: "input"
    });
  }, N = (j) => {
    C.current || u || T(j);
  }, F = typeof l == "boolean" ? /* @__PURE__ */ s.createElement(Qd, null) : null, A = `${S}-button`;
  let D;
  const z = l || {}, M = z.type && z.type.__ANT_BUTTON === !0;
  M || z.type === "button" ? D = ro(z, Object.assign({
    onMouseDown: I,
    onClick: (j) => {
      var V, k;
      (k = (V = z == null ? void 0 : z.props) === null || V === void 0 ? void 0 : V.onClick) === null || k === void 0 || k.call(V, j), T(j);
    },
    key: "enterButton"
  }, M ? {
    className: A,
    size: E
  } : {})) : D = /* @__PURE__ */ s.createElement(Yi, {
    className: A,
    type: l ? "primary" : void 0,
    size: E,
    disabled: d,
    key: "enterButton",
    onMouseDown: I,
    onClick: T,
    loading: u,
    icon: F
  }, l), c && (D = [D, ro(c, {
    key: "addonAfter"
  })]);
  const O = he(S, {
    [`${S}-rtl`]: g === "rtl",
    [`${S}-${E}`]: !!E,
    [`${S}-with-button`]: !!l
  }, a), P = (j) => {
    C.current = !0, m == null || m(j);
  }, L = (j) => {
    C.current = !1, h == null || h(j);
  };
  return /* @__PURE__ */ s.createElement(Zs, Object.assign({
    ref: jn(y, t),
    onPressEnter: N
  }, b, {
    size: E,
    onCompositionStart: P,
    onCompositionEnd: L,
    prefixCls: x,
    addonAfter: D,
    suffix: i,
    onChange: $,
    className: O,
    disabled: d
  }));
}), A1 = _1;
var F1 = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`, j1 = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"], yi = {}, bn;
function L1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (t && yi[n])
    return yi[n];
  var r = window.getComputedStyle(e), a = r.getPropertyValue("box-sizing") || r.getPropertyValue("-moz-box-sizing") || r.getPropertyValue("-webkit-box-sizing"), o = parseFloat(r.getPropertyValue("padding-bottom")) + parseFloat(r.getPropertyValue("padding-top")), i = parseFloat(r.getPropertyValue("border-bottom-width")) + parseFloat(r.getPropertyValue("border-top-width")), l = j1.map(function(u) {
    return "".concat(u, ":").concat(r.getPropertyValue(u));
  }).join(";"), c = {
    sizingStyle: l,
    paddingSize: o,
    borderSize: i,
    boxSizing: a
  };
  return t && n && (yi[n] = c), c;
}
function D1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  bn || (bn = document.createElement("textarea"), bn.setAttribute("tab-index", "-1"), bn.setAttribute("aria-hidden", "true"), document.body.appendChild(bn)), e.getAttribute("wrap") ? bn.setAttribute("wrap", e.getAttribute("wrap")) : bn.removeAttribute("wrap");
  var a = L1(e, t), o = a.paddingSize, i = a.borderSize, l = a.boxSizing, c = a.sizingStyle;
  bn.setAttribute("style", "".concat(c, ";").concat(F1)), bn.value = e.value || e.placeholder || "";
  var u = void 0, d = void 0, f, v = bn.scrollHeight;
  if (l === "border-box" ? v += i : l === "content-box" && (v -= o), n !== null || r !== null) {
    bn.value = " ";
    var m = bn.scrollHeight - o;
    n !== null && (u = m * n, l === "border-box" && (u = u + o + i), v = Math.max(u, v)), r !== null && (d = m * r, l === "border-box" && (d = d + o + i), f = v > d ? "" : "hidden", v = Math.min(d, v));
  }
  var h = {
    height: v,
    overflowY: f,
    resize: "none"
  };
  return u && (h.minHeight = u), d && (h.maxHeight = d), h;
}
var z1 = ["prefixCls", "onPressEnter", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"], Si = 0, Ci = 1, xi = 2, V1 = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e, r = n.prefixCls;
  n.onPressEnter;
  var a = n.defaultValue, o = n.value, i = n.autoSize, l = n.onResize, c = n.className, u = n.style, d = n.disabled, f = n.onChange;
  n.onInternalAutoSize;
  var v = vt(n, z1), m = mr(a, {
    value: o,
    postState: function(W) {
      return W ?? "";
    }
  }), h = G(m, 2), b = h[0], p = h[1], g = function(W) {
    p(W.target.value), f == null || f(W);
  }, C = s.useRef();
  s.useImperativeHandle(t, function() {
    return {
      textArea: C.current
    };
  });
  var S = s.useMemo(function() {
    return i && We(i) === "object" ? [i.minRows, i.maxRows] : [];
  }, [i]), x = G(S, 2), R = x[0], E = x[1], y = !!i, $ = function() {
    try {
      if (document.activeElement === C.current) {
        var W = C.current, le = W.selectionStart, te = W.selectionEnd, X = W.scrollTop;
        C.current.setSelectionRange(le, te), C.current.scrollTop = X;
      }
    } catch {
    }
  }, I = s.useState(xi), T = G(I, 2), N = T[0], F = T[1], A = s.useState(), D = G(A, 2), z = D[0], M = D[1], O = function() {
    F(Si);
  };
  gt(function() {
    y && O();
  }, [o, R, E, y]), gt(function() {
    if (N === Si)
      F(Ci);
    else if (N === Ci) {
      var U = D1(C.current, !1, R, E);
      F(xi), M(U);
    } else
      $();
  }, [N]);
  var P = s.useRef(), L = function() {
    ft.cancel(P.current);
  }, j = function(W) {
    N === xi && (l == null || l(W), i && (L(), P.current = ft(function() {
      O();
    })));
  };
  s.useEffect(function() {
    return L;
  }, []);
  var V = y ? z : null, k = B(B({}, u), V);
  return (N === Si || N === Ci) && (k.overflowY = "hidden", k.overflowX = "hidden"), /* @__PURE__ */ s.createElement(er, {
    onResize: j,
    disabled: !(i || l)
  }, /* @__PURE__ */ s.createElement("textarea", je({}, v, {
    ref: C,
    style: k,
    className: he(r, c, _({}, "".concat(r, "-disabled"), d)),
    disabled: d,
    value: b,
    onChange: g
  })));
}), H1 = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "classes", "showCount", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize"];
function vf(e, t) {
  return Pe(e || "").slice(0, t).join("");
}
function Lc(e, t, n, r) {
  var a = n;
  return e ? a = vf(n, r) : Pe(t || "").length < n.length && Pe(n || "").length > r && (a = t), a;
}
var B1 = /* @__PURE__ */ Se.forwardRef(function(e, t) {
  var n, r = e.defaultValue, a = e.value, o = e.onFocus, i = e.onBlur, l = e.onChange, c = e.allowClear, u = e.maxLength, d = e.onCompositionStart, f = e.onCompositionEnd, v = e.suffix, m = e.prefixCls, h = m === void 0 ? "rc-textarea" : m, b = e.classes, p = e.showCount, g = e.className, C = e.style, S = e.disabled, x = e.hidden, R = e.classNames, E = e.styles, y = e.onResize, $ = vt(e, H1), I = mr(r, {
    value: a,
    defaultValue: r
  }), T = G(I, 2), N = T[0], F = T[1], A = s.useRef(null), D = Se.useState(!1), z = G(D, 2), M = z[0], O = z[1], P = Se.useState(!1), L = G(P, 2), j = L[0], V = L[1], k = Se.useRef(), U = Se.useRef(0), W = Se.useState(null), le = G(W, 2), te = le[0], X = le[1], K = function() {
    var ue;
    (ue = A.current) === null || ue === void 0 || ue.textArea.focus();
  };
  s.useImperativeHandle(t, function() {
    return {
      resizableTextArea: A.current,
      focus: K,
      blur: function() {
        var ue;
        (ue = A.current) === null || ue === void 0 || ue.textArea.blur();
      }
    };
  }), s.useEffect(function() {
    O(function(Te) {
      return !S && Te;
    });
  }, [S]);
  var ee = Number(u) > 0, ce = function(ue) {
    V(!0), k.current = N, U.current = ue.currentTarget.selectionStart, d == null || d(ue);
  }, ge = function(ue) {
    V(!1);
    var de = ue.currentTarget.value;
    if (ee) {
      var Ae, Ke = U.current >= u + 1 || U.current === ((Ae = k.current) === null || Ae === void 0 ? void 0 : Ae.length);
      de = Lc(Ke, k.current, de, u);
    }
    de !== N && (F(de), ca(ue.currentTarget, ue, l, de)), f == null || f(ue);
  }, ve = function(ue) {
    var de = ue.target.value;
    if (!j && ee) {
      var Ae = ue.target.selectionStart >= u + 1 || ue.target.selectionStart === de.length || !ue.target.selectionStart;
      de = Lc(Ae, N, de, u);
    }
    F(de), ca(ue.currentTarget, ue, l, de);
  }, ae = function(ue) {
    var de = $.onPressEnter, Ae = $.onKeyDown;
    ue.key === "Enter" && de && de(ue), Ae == null || Ae(ue);
  }, Ce = function(ue) {
    O(!0), o == null || o(ue);
  }, Oe = function(ue) {
    O(!1), i == null || i(ue);
  }, Ne = function(ue) {
    var de;
    F(""), K(), ca((de = A.current) === null || de === void 0 ? void 0 : de.textArea, ue, l);
  }, Ie = gs(N);
  !j && ee && a == null && (Ie = vf(Ie, u));
  var oe = v, pe;
  if (p) {
    var se = Pe(Ie).length;
    We(p) === "object" ? pe = p.formatter({
      value: Ie,
      count: se,
      maxLength: u
    }) : pe = "".concat(se).concat(ee ? " / ".concat(u) : ""), oe = /* @__PURE__ */ Se.createElement(Se.Fragment, null, oe, /* @__PURE__ */ Se.createElement("span", {
      className: he("".concat(h, "-data-count"), R == null ? void 0 : R.count),
      style: E == null ? void 0 : E.count
    }, pe));
  }
  var ie = function(ue) {
    var de;
    y == null || y(ue), (de = A.current) !== null && de !== void 0 && de.textArea.style.height && X(!0);
  }, _e = !$.autoSize && !p && !c, He = /* @__PURE__ */ Se.createElement(Js, {
    value: Ie,
    allowClear: c,
    handleReset: Ne,
    suffix: oe,
    prefixCls: h,
    classes: {
      affixWrapper: he(b == null ? void 0 : b.affixWrapper, (n = {}, _(n, "".concat(h, "-show-count"), p), _(n, "".concat(h, "-textarea-allow-clear"), c), n))
    },
    disabled: S,
    focused: M,
    className: g,
    style: B(B({}, C), te && !_e ? {
      height: "auto"
    } : {}),
    dataAttrs: {
      affixWrapper: {
        "data-count": typeof pe == "string" ? pe : void 0
      }
    },
    hidden: x,
    inputElement: /* @__PURE__ */ Se.createElement(V1, je({}, $, {
      onKeyDown: ae,
      onChange: ve,
      onFocus: Ce,
      onBlur: Oe,
      onCompositionStart: ce,
      onCompositionEnd: ge,
      className: R == null ? void 0 : R.textarea,
      style: B(B({}, E == null ? void 0 : E.textarea), {}, {
        resize: C == null ? void 0 : C.resize
      }),
      disabled: S,
      prefixCls: h,
      onResize: ie,
      ref: A
    }))
  });
  return He;
}), k1 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const W1 = /* @__PURE__ */ s.forwardRef((e, t) => {
  const {
    prefixCls: n,
    bordered: r = !0,
    size: a,
    disabled: o,
    status: i,
    allowClear: l,
    showCount: c,
    classNames: u,
    rootClassName: d,
    className: f
  } = e, v = k1(e, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "showCount", "classNames", "rootClassName", "className"]), {
    getPrefixCls: m,
    direction: h
  } = s.useContext(Ct), b = yr(a), p = s.useContext(Kr), g = o ?? p, {
    status: C,
    hasFeedback: S,
    feedbackIcon: x
  } = s.useContext(Zn), R = Vo(C, i), E = s.useRef(null);
  s.useImperativeHandle(t, () => {
    var N;
    return {
      resizableTextArea: (N = E.current) === null || N === void 0 ? void 0 : N.resizableTextArea,
      focus: (F) => {
        var A, D;
        p1((D = (A = E.current) === null || A === void 0 ? void 0 : A.resizableTextArea) === null || D === void 0 ? void 0 : D.textArea, F);
      },
      blur: () => {
        var F;
        return (F = E.current) === null || F === void 0 ? void 0 : F.blur();
      }
    };
  });
  const y = m("input", n);
  let $;
  typeof l == "object" && (l != null && l.clearIcon) ? $ = l : l && ($ = {
    clearIcon: /* @__PURE__ */ s.createElement(Ls, null)
  });
  const [I, T] = Xs(y);
  return I(/* @__PURE__ */ s.createElement(B1, Object.assign({}, v, {
    disabled: g,
    allowClear: $,
    className: he(f, d),
    classes: {
      affixWrapper: he(`${y}-textarea-affix-wrapper`, {
        [`${y}-affix-wrapper-rtl`]: h === "rtl",
        [`${y}-affix-wrapper-borderless`]: !r,
        [`${y}-affix-wrapper-sm`]: b === "small",
        [`${y}-affix-wrapper-lg`]: b === "large",
        [`${y}-textarea-show-count`]: c
      }, kn(`${y}-affix-wrapper`, R), T)
    },
    classNames: Object.assign(Object.assign({}, u), {
      textarea: he({
        [`${y}-borderless`]: !r,
        [`${y}-sm`]: b === "small",
        [`${y}-lg`]: b === "large"
      }, kn(y, R), T, u == null ? void 0 : u.textarea)
    }),
    prefixCls: y,
    suffix: S && /* @__PURE__ */ s.createElement("span", {
      className: `${y}-textarea-suffix`
    }, x),
    showCount: c,
    ref: E
  })));
}), U1 = W1, $a = Zs;
$a.Group = m1;
$a.Search = A1;
$a.TextArea = U1;
$a.Password = N1;
const G1 = $a;
function Dc(e) {
  return ["small", "middle", "large"].includes(e);
}
function zc(e) {
  return e ? typeof e == "number" && !Number.isNaN(e) : !1;
}
const mf = /* @__PURE__ */ Se.createContext({
  latestIndex: 0
}), q1 = mf.Provider, K1 = (e) => {
  let {
    className: t,
    index: n,
    children: r,
    split: a,
    style: o
  } = e;
  const {
    latestIndex: i
  } = s.useContext(mf);
  return r == null ? null : /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement("div", {
    className: t,
    style: o
  }, r), n < i && a && /* @__PURE__ */ s.createElement("span", {
    className: `${t}-split`
  }, a));
}, X1 = K1;
var Y1 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Q1 = /* @__PURE__ */ s.forwardRef((e, t) => {
  var n, r;
  const {
    getPrefixCls: a,
    space: o,
    direction: i
  } = s.useContext(Ct), {
    size: l = (o == null ? void 0 : o.size) || "small",
    align: c,
    className: u,
    rootClassName: d,
    children: f,
    direction: v = "horizontal",
    prefixCls: m,
    split: h,
    style: b,
    wrap: p = !1,
    classNames: g,
    styles: C
  } = e, S = Y1(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]), [x, R] = Array.isArray(l) ? l : [l, l], E = Dc(R), y = Dc(x), $ = zc(R), I = zc(x), T = Jn(f, {
    keepEmpty: !0
  }), N = c === void 0 && v === "horizontal" ? "center" : c, F = a("space", m), [A, D] = cd(F), z = he(F, o == null ? void 0 : o.className, D, `${F}-${v}`, {
    [`${F}-rtl`]: i === "rtl",
    [`${F}-align-${N}`]: N,
    [`${F}-gap-row-${R}`]: E,
    [`${F}-gap-col-${x}`]: y
  }, u, d), M = he(`${F}-item`, (n = g == null ? void 0 : g.item) !== null && n !== void 0 ? n : (r = o == null ? void 0 : o.classNames) === null || r === void 0 ? void 0 : r.item);
  let O = 0;
  const P = T.map((V, k) => {
    var U, W;
    V != null && (O = k);
    const le = V && V.key || `${M}-${k}`;
    return /* @__PURE__ */ s.createElement(X1, {
      className: M,
      key: le,
      index: k,
      split: h,
      style: (U = C == null ? void 0 : C.item) !== null && U !== void 0 ? U : (W = o == null ? void 0 : o.styles) === null || W === void 0 ? void 0 : W.item
    }, V);
  }), L = s.useMemo(() => ({
    latestIndex: O
  }), [O]);
  if (T.length === 0)
    return null;
  const j = {};
  return p && (j.flexWrap = "wrap"), !y && I && (j.columnGap = x), !E && $ && (j.rowGap = R), A(/* @__PURE__ */ s.createElement("div", Object.assign({
    ref: t,
    className: z,
    style: Object.assign(Object.assign(Object.assign({}, j), o == null ? void 0 : o.style), b)
  }, S), /* @__PURE__ */ s.createElement(q1, {
    value: L
  }, P)));
}), gf = Q1;
gf.Compact = fp;
const Vc = gf;
var J1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" } }, { tag: "path", attrs: { d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, name: "minus-square", theme: "outlined" };
const Z1 = J1;
var eC = function(t, n) {
  return /* @__PURE__ */ s.createElement(Cn, je({}, t, {
    ref: n,
    icon: Z1
  }));
};
const tC = /* @__PURE__ */ s.forwardRef(eC);
var nC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" } }, { tag: "path", attrs: { d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, name: "plus-square", theme: "outlined" };
const rC = nC;
var aC = function(t, n) {
  return /* @__PURE__ */ s.createElement(Cn, je({}, t, {
    ref: n,
    icon: rC
  }));
};
const oC = /* @__PURE__ */ s.forwardRef(aC);
var iC = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" } }] }, name: "caret-down", theme: "outlined" };
const sC = iC;
var lC = function(t, n) {
  return /* @__PURE__ */ s.createElement(Cn, je({}, t, {
    ref: n,
    icon: sC
  }));
};
const cC = /* @__PURE__ */ s.forwardRef(lC);
var Ft = /* @__PURE__ */ ((e) => (e.STRING = "string", e.NUMBER = "number", e.BOOLEAN = "boolean", e.OBJECT = "object", e.ARRAY = "array", e))(Ft || {});
const hf = {
  string: "",
  boolean: !0,
  number: 0,
  object: {},
  array: []
}, el = (e) => {
  var t;
  return (t = Object.prototype.toString.call(e).match(/\w+/g)) == null ? void 0 : t[1].toLowerCase();
}, pf = (e, t, n, r = !1, a = []) => {
  const o = e.shift(), i = Object.keys(t);
  if (e.length) {
    pf(e, t[i[o]], n, r);
    return;
  }
  r ? (delete t[i[o]], a[0] = { ...t, ...n }) : t[i[o]] = n;
}, wi = (e, t, n, r = !1) => {
  const a = t.split("-").slice(1);
  return pf(a, n, e, r), n;
}, Uo = (e) => !!(e && typeof e == "object"), bf = (e) => Uo(e) ? el(e) === "array" ? `Array [${e.length}]` : `Object {${Object.keys(e).length}}` : null, gr = (e, t) => {
  var a, o, i;
  const n = t.shift() || "";
  let r = {};
  if (/\\d+\]/.test(n)) {
    const l = n.replace(/[\[\]]/g, "");
    r = gr((a = e == null ? void 0 : e.properties) == null ? void 0 : a[l], t);
  } else
    n ? r = gr(((o = e == null ? void 0 : e.properties) == null ? void 0 : o[n]) || ((i = e == null ? void 0 : e.properties) == null ? void 0 : i["*"]), t) : r = e;
  return r;
}, tl = (e, t, n) => {
  const r = gr(
    e,
    [...t.split("."), "*"].filter((o) => o != "")
  ), a = gr(
    e,
    [...t.split("."), n].filter((o) => o != "")
  );
  return r || a || {};
}, Wr = Se.createContext(null), uC = oC, hs = (e) => {
  const { setEditObject: t, editObject: n, optionsMap: r, schema: a } = s.useContext(Wr), { uniqueKey: o, sourceData: i, parentPath: l } = e, c = gr(a, [...l.split("."), "*"]), u = Object.keys((c == null ? void 0 : c.properties) || {}).length > 0 || (c == null ? void 0 : c.type) == "object", d = Array.isArray(i), [f, v] = s.useState(""), [m, h] = s.useState({}), [b, p] = s.useState({}), g = (y, $) => {
    v(""), b[y] = $, m[y] = {}, h({
      ...m
    }), p({
      ...b
    });
  }, C = (y, $) => {
    m[y].key = $.target.value, h({ ...m });
  }, S = (y, $) => {
    m[y].value = $, h({ ...m });
  }, x = (y, $) => {
    m[y].type = $, m[y].value = hf[$], h({
      ...m
    });
  }, R = (y, $) => {
    const { key: I, value: T } = xs(m[y]);
    if (Object.keys($).some((N) => N == I)) {
      v("Key already exists");
      return;
    } else if (!d && (I == null || I === "")) {
      v("Key can not be empty");
      return;
    }
    if (u) {
      const N = {};
      Object.entries(c.properties ?? {}).forEach(([F, A]) => {
        if (A.default !== void 0)
          N[F] = A.default;
        else {
          const z = {
            string: "",
            array: [],
            object: {},
            number: 0,
            boolean: !1
          };
          N[F] = z[A.type];
        }
      }), $[I] = N;
    } else {
      const N = T === void 0 ? "" : T;
      d ? $.push(N) : $[I] = N;
    }
    t({ ...n }), g(y, !1);
  }, E = (y) => {
    var I;
    switch (u ? null : y) {
      case Ft.STRING:
        const T = (r == null ? void 0 : r[(I = m[o]) == null ? void 0 : I.key]) ?? [];
        return /* @__PURE__ */ re.jsx(
          $S,
          {
            style: { width: 100 },
            size: "small",
            options: T,
            onChange: (N) => S(o, N),
            filterOption: (N, F) => `${F.value}`.toUpperCase().indexOf(N.toUpperCase()) !== -1
          }
        );
      case Ft.NUMBER:
        return /* @__PURE__ */ re.jsx(f1, { size: "small", onBlur: (N) => S(o, +N.target.value) });
      case Ft.BOOLEAN:
        return /* @__PURE__ */ re.jsxs(
          jt,
          {
            size: "small",
            defaultValue: !0,
            onChange: (N) => {
              S(o, N);
            },
            children: [
              /* @__PURE__ */ re.jsx(jt.Option, { value: !0, label: "true", children: "true" }),
              /* @__PURE__ */ re.jsx(jt.Option, { value: !1, label: "false", children: "false" })
            ]
          }
        );
      default:
        return null;
    }
  };
  return /* @__PURE__ */ re.jsx("div", { className: "addItem", "data-path": l, children: b[o] ? /* @__PURE__ */ re.jsxs(re.Fragment, { children: [
    /* @__PURE__ */ re.jsxs(Vc, { children: [
      !d && /* @__PURE__ */ re.jsx("div", { children: /* @__PURE__ */ re.jsx(G1, { size: "small", onChange: (y) => C(o, y) }) }),
      /* @__PURE__ */ re.jsx("div", { children: /* @__PURE__ */ re.jsx(
        jt,
        {
          size: "small",
          onChange: (y) => x(o, y),
          defaultValue: u ? Ft.OBJECT : Ft.STRING,
          children: u ? /* @__PURE__ */ re.jsx(jt.Option, { value: Ft.OBJECT, children: Ft.OBJECT }, Ft.OBJECT) : Object.values(Ft).map((y) => /* @__PURE__ */ re.jsx(jt.Option, { value: y, children: y }, y))
        }
      ) }),
      E(m[o].type || Ft.STRING),
      /* @__PURE__ */ re.jsx("div", { children: /* @__PURE__ */ re.jsxs(Vc, { children: [
        /* @__PURE__ */ re.jsx(Yi, { size: "small", type: "primary", onClick: () => R(o, i), children: "Confirm" }),
        /* @__PURE__ */ re.jsx(Yi, { size: "small", onClick: () => g(o, !1), children: "Cancel" })
      ] }) })
    ] }),
    !!f && /* @__PURE__ */ re.jsx("div", { style: { color: "red", margin: "2px 0 0 2px" }, children: f })
  ] }) : /* @__PURE__ */ re.jsx(kS, { span: 8, children: /* @__PURE__ */ re.jsx(uC, { style: { color: "#1E88E5" }, onClick: () => g(o, !0) }) }) }, o);
}, ps = hs;
try {
  hs.displayName = "AddItem", hs.__docgenInfo = { description: "", displayName: "AddItem", props: { uniqueKey: { defaultValue: null, description: "", name: "uniqueKey", required: !0, type: { name: "string" } }, sourceData: { defaultValue: null, description: "", name: "sourceData", required: !0, type: { name: "any" } }, deepLevel: { defaultValue: null, description: "", name: "deepLevel", required: !0, type: { name: "number" } }, parentPath: { defaultValue: null, description: "", name: "parentPath", required: !0, type: { name: "string" } } } };
} catch {
}
const dC = cC;
function uo(e) {
  const { fieldValue: t, uniqueKey: n } = e, { onChangeAllow: r, allowMap: a } = s.useContext(Wr);
  return Uo(t) ? /* @__PURE__ */ re.jsx("span", { className: "caret", onClick: () => r(n), children: /* @__PURE__ */ re.jsx(dC, { style: { display: "block" }, className: `collapse ${a[n] ? "up" : "down"}` }) }) : null;
}
try {
  uo.displayName = "CollapsePart", uo.__docgenInfo = { description: "", displayName: "CollapsePart", props: { uniqueKey: { defaultValue: null, description: "", name: "uniqueKey", required: !0, type: { name: "string" } }, fieldValue: { defaultValue: null, description: "", name: "fieldValue", required: !0, type: { name: "any" } } } };
} catch {
}
const Hc = tC;
function Ur(e) {
  var i;
  const { schema: t } = s.useContext(Wr);
  if ((i = gr(t, e.parentPath.split("."))) != null && i.fixed)
    return null;
  const n = tl(t, e.parentPath, e.fieldKey), r = Object.keys(n.properties || {}).length > 0, a = r || n.type !== void 0, o = r ? "object" : n.type;
  return /* @__PURE__ */ re.jsx(Wr.Consumer, { children: ({ onChangeType: l, onClickDelete: c }) => /* @__PURE__ */ re.jsxs("span", { className: "tools", "data-path": e.parentPath, "data-custom": e.custom, children: [
    /* @__PURE__ */ re.jsx("span", { children: /* @__PURE__ */ re.jsx(
      jt,
      {
        size: "small",
        onChange: (u) => l(u, e.uniqueKey),
        defaultValue: el(e.fieldValue),
        children: a ? /* @__PURE__ */ re.jsx(jt.Option, { value: o, children: o }, o) : Object.values(Ft).map((u) => /* @__PURE__ */ re.jsx(jt.Option, { value: u, children: u }, u))
      }
    ) }),
    n.mandatory ? /* @__PURE__ */ re.jsx("span", { className: "iconSubtraction", children: /* @__PURE__ */ re.jsx(Hc, { style: { color: "gray" } }) }) : /* @__PURE__ */ re.jsx("span", { className: "iconSubtraction", children: /* @__PURE__ */ re.jsx(Hc, { onClick: () => c(e.fieldKey, e.sourceData) }) })
  ] }) });
}
try {
  Ur.displayName = "ToolsView", Ur.__docgenInfo = { description: "", displayName: "ToolsView", props: { fieldValue: { defaultValue: null, description: "", name: "fieldValue", required: !0, type: { name: "any" } }, fieldKey: { defaultValue: null, description: "", name: "fieldKey", required: !0, type: { name: "string" } }, uniqueKey: { defaultValue: null, description: "", name: "uniqueKey", required: !0, type: { name: "string" } }, sourceData: { defaultValue: null, description: "", name: "sourceData", required: !0, type: { name: "any" } }, parentPath: { defaultValue: null, description: "", name: "parentPath", required: !0, type: { name: "string" } }, custom: { defaultValue: null, description: "", name: "custom", required: !1, type: { name: "string" } } } };
} catch {
}
function bs(e) {
  const { allowMap: t } = s.useContext(Wr);
  return /* @__PURE__ */ re.jsxs("div", { className: "arrayContent", children: [
    /* @__PURE__ */ re.jsx("div", { style: { marginTop: "10px" }, children: e.fieldValue.map((n, r) => {
      const a = `${e.parentUniqueKey}-${r}`, o = Uo(n), i = `${e.parentPath}[${r}]`, l = /* @__PURE__ */ re.jsxs(re.Fragment, { children: [
        /* @__PURE__ */ re.jsxs("span", { className: "jsonKey", children: [
          r + 1,
          "."
        ] }),
        /* @__PURE__ */ re.jsx(uo, { uniqueKey: a, fieldValue: n }),
        o ? /* @__PURE__ */ re.jsx("b", { className: "mt15", children: bf(n) }) : null,
        !o && /* @__PURE__ */ re.jsx("span", { className: "jsonValue", children: e.getValue(
          n,
          r,
          e.fieldValue,
          e.deepLevel + 1,
          a,
          i,
          e.schema,
          t
        ) })
      ] });
      return /* @__PURE__ */ re.jsx("div", { className: "indexLine", "data-key": a, children: /* @__PURE__ */ re.jsxs("div", { className: "lineData", "data-obj": o, children: [
        /* @__PURE__ */ re.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center " }, children: [
          o ? /* @__PURE__ */ re.jsx("div", { style: { display: "flex", alignItems: "center" }, children: l }) : l,
          o && /* @__PURE__ */ re.jsx(
            Ur,
            {
              uniqueKey: a,
              fieldValue: n,
              fieldKey: `${r}`,
              sourceData: e.fieldValue,
              parentPath: i,
              custom: "array"
            }
          )
        ] }),
        !o && /* @__PURE__ */ re.jsx(
          Ur,
          {
            uniqueKey: a,
            fieldValue: n,
            fieldKey: `${r}`,
            sourceData: e.fieldValue,
            parentPath: i,
            custom: "array"
          }
        ),
        o && t[a] && /* @__PURE__ */ re.jsx("span", { className: "jsonValue", children: e.getValue(
          n,
          r,
          e.fieldValue,
          e.deepLevel + 1,
          a,
          i,
          e.schema,
          t
        ) })
      ] }) }, a);
    }) }),
    /* @__PURE__ */ re.jsx("div", { children: /* @__PURE__ */ re.jsx(
      ps,
      {
        uniqueKey: e.parentUniqueKey,
        deepLevel: e.deepLevel,
        sourceData: e.fieldValue,
        parentPath: `${e.parentPath}[${e.fieldValue.length}]`
      },
      e.parentUniqueKey
    ) })
  ] });
}
try {
  bs.displayName = "ArrayView", bs.__docgenInfo = { description: "", displayName: "ArrayView", props: { fieldValue: { defaultValue: null, description: "", name: "fieldValue", required: !0, type: { name: "any[]" } }, fieldKey: { defaultValue: null, description: "", name: "fieldKey", required: !0, type: { name: "string" } }, sourceData: { defaultValue: null, description: "", name: "sourceData", required: !0, type: { name: "any" } }, getValue: { defaultValue: null, description: "", name: "getValue", required: !0, type: { name: "any" } }, deepLevel: { defaultValue: null, description: "", name: "deepLevel", required: !0, type: { name: "number" } }, parentUniqueKey: { defaultValue: null, description: "", name: "parentUniqueKey", required: !0, type: { name: "string" } }, parentPath: { defaultValue: null, description: "", name: "parentPath", required: !0, type: { name: "string" } }, schema: { defaultValue: null, description: "", name: "schema", required: !0, type: { name: "any" } } } };
} catch {
}
const fC = 1, ys = ({
  sourceData: e,
  deepLevel: t,
  parentUniqueKey: n,
  parentPath: r,
  schema: a,
  onChangeKey: o,
  allowMap: i,
  getValue: l
}) => {
  var m;
  const c = {};
  Object.entries(i).forEach(([h, b]) => {
    new RegExp(n).test(h) && (c[h] = b);
  });
  const u = s.useRef(0);
  t = t ?? 1, n = n ?? `${t}`, r = r ?? "";
  const d = Object.keys(e), f = !!((m = gr(a, r.split("."))) != null && m.fixed);
  return s.useMemo(() => d.length ? /* @__PURE__ */ re.jsxs("div", { className: "objectContent", style: { marginLeft: fC === t ? "0" : "15px" }, children: [
    d.map((h, b) => {
      const p = `${n}-${b}`, g = e[h], C = bf(g), S = Uo(g), x = tl(a, r, h), R = /^\$E-\d+\$_/.test(h);
      return /* @__PURE__ */ re.jsxs("div", { className: "indexLine", "data-key": p, children: [
        /* @__PURE__ */ re.jsxs("div", { className: "lineData", "data-obj": S, children: [
          /* @__PURE__ */ re.jsxs("div", { children: [
            /* @__PURE__ */ re.jsxs("div", { children: [
              /* @__PURE__ */ re.jsx(uo, { uniqueKey: p, fieldValue: g }),
              /* @__PURE__ */ re.jsx("span", { className: "jsonKey", children: f || x.mandatory ? /* @__PURE__ */ re.jsx("span", { style: { margin: "5px", fontWeight: "bold" }, children: h }) : /* @__PURE__ */ re.jsx(
                "input",
                {
                  ref: (E) => {
                    E && (E.value = h.replace(/^\$E-\d+\$_/, ""));
                  },
                  placeholder: h,
                  onChange: (E) => {
                    u.current && clearTimeout(u.current), u.current = +setTimeout(() => {
                      o(E, h, p, e, n);
                    }, 800);
                  },
                  "data-error": R
                }
              ) }),
              !!C && /* @__PURE__ */ re.jsx("div", { style: { margin: "5px" }, children: C })
            ] }),
            !S && /* @__PURE__ */ re.jsx("span", { className: "jsonValue", children: l(g, h, e, t, p, r, a, i) }),
            S && /* @__PURE__ */ re.jsx(
              Ur,
              {
                uniqueKey: p,
                fieldValue: g,
                fieldKey: h,
                sourceData: e,
                parentPath: r,
                custom: "json"
              }
            )
          ] }),
          S && i[p] && /* @__PURE__ */ re.jsx("span", { className: "jsonValue", children: l(g, h, e, t, p, r, a, i) }),
          !S && /* @__PURE__ */ re.jsx(
            Ur,
            {
              uniqueKey: p,
              fieldValue: g,
              fieldKey: h,
              sourceData: e,
              parentPath: r,
              custom: "json"
            }
          )
        ] }),
        R && /* @__PURE__ */ re.jsx("div", { style: { color: "red" }, children: "Duplicated key" })
      ] }, p);
    }),
    !f && /* @__PURE__ */ re.jsx("div", { children: /* @__PURE__ */ re.jsx(
      ps,
      {
        uniqueKey: n,
        deepLevel: t,
        sourceData: e,
        parentPath: r
      },
      n
    ) })
  ] }) : /* @__PURE__ */ re.jsx("div", { style: { marginLeft: "20px" }, children: /* @__PURE__ */ re.jsx(
    ps,
    {
      uniqueKey: "defaultKay",
      deepLevel: t,
      sourceData: e,
      parentPath: r
    }
  ) }), [JSON.stringify(e), JSON.stringify(c), f]);
}, Bc = ys;
try {
  ys.displayName = "RenderJsonConfig", ys.__docgenInfo = { description: "", displayName: "RenderJsonConfig", props: { sourceData: { defaultValue: null, description: "", name: "sourceData", required: !0, type: { name: "any" } }, deepLevel: { defaultValue: null, description: "", name: "deepLevel", required: !1, type: { name: "number" } }, parentUniqueKey: { defaultValue: null, description: "", name: "parentUniqueKey", required: !1, type: { name: "string" } }, parentPath: { defaultValue: null, description: "", name: "parentPath", required: !1, type: { name: "string" } }, schema: { defaultValue: null, description: "", name: "schema", required: !0, type: { name: "any" } }, onChangeKey: { defaultValue: null, description: "", name: "onChangeKey", required: !0, type: { name: "any" } }, allowMap: { defaultValue: null, description: "", name: "allowMap", required: !0, type: { name: "any" } }, getValue: { defaultValue: null, description: "", name: "getValue", required: !0, type: { name: "any" } } } };
} catch {
}
function Ss(e) {
  const { editObject: t, setEditObject: n, optionsMap: r } = e, a = s.useRef(0), [o, i] = s.useState({}), l = JSON.stringify(t), c = (S) => {
    n({ ...S });
  }, u = s.useCallback(
    (S, x) => {
      Array.isArray(x) ? x.splice(+S, 1) : Reflect.deleteProperty(x, S), c(t);
    },
    [l]
  ), d = s.useCallback(
    (S, x) => {
      const R = wi(hf[S], x, t);
      c(R);
    },
    [l]
  ), f = s.useCallback(
    (S, x, R, E, y) => {
      var A;
      const $ = {}, I = Object.keys(E);
      let T = !1;
      const N = +(((A = /.*-(\d+)$/.exec(R)) == null ? void 0 : A[1]) || -1);
      I.some((D, z) => D == S.target.value && z != N) && (T = !0, a.current++);
      for (const [D, z] of Object.entries(E))
        D === x ? $[(T ? `$E-${a.current}$_` : "") + S.target.value] = E[D] : $[D] = z;
      let F;
      /^1-\d+$/.test(R) ? F = $ : (F = wi($, R, t, !0), F = wi($, y, F)), c(F);
    },
    [l]
  ), v = (S, x, R, E = 0, y = "") => {
    if (R[x] = S, E == 1)
      c(R);
    else {
      const $ = [];
      y.split(".").forEach((I) => {
        /.*\[\d+\]/.test(I) ? $.push(I.replace(/\[\d*\]/, "")) : $.push(I);
      }), c(m(R, $));
    }
  }, m = (S, x) => {
    const R = [...x], E = R.pop(), y = xs(t);
    let $ = y;
    return R.forEach((I) => {
      $ = $[I];
    }), $[E] = S, y;
  }, h = s.useRef(0), b = (S, x, R, E = 0, y = "") => {
    h.current && clearTimeout(h.current), h.current = +setTimeout(() => {
      v(S, x, R, E, y);
    }, 800);
  }, p = s.useCallback(
    (S, x, R, E, y, $, I, T) => {
      var A;
      const N = el(S), F = `${$ ? $ + "." : ""}${x}`;
      switch (N) {
        case Ft.ARRAY:
          return /* @__PURE__ */ re.jsx(
            bs,
            {
              fieldValue: S,
              fieldKey: x,
              sourceData: R,
              deepLevel: E,
              parentUniqueKey: y,
              getValue: p,
              parentPath: F,
              schema: I
            }
          );
        case Ft.OBJECT:
          return /* @__PURE__ */ re.jsx("span", { children: /* @__PURE__ */ re.jsx(
            Bc,
            {
              sourceData: S,
              schema: I,
              deepLevel: E + 1,
              parentUniqueKey: y,
              parentPath: F,
              onChangeKey: f,
              allowMap: T,
              getValue: p
            }
          ) });
        case Ft.STRING:
          const D = tl(I, $, x);
          return ((A = D.options) == null ? void 0 : A.length) > 0 ? /* @__PURE__ */ re.jsx(
            jt,
            {
              size: "small",
              defaultValue: "string",
              onChange: (z) => {
                b(z, x, R, E, $);
              },
              children: D.options.map((z) => /* @__PURE__ */ re.jsx(jt.Option, { value: z, label: "true", children: z }, z))
            }
          ) : /* @__PURE__ */ re.jsx(
            "input",
            {
              ref: (z) => {
                z && (z.value = S);
              },
              style: { width: 100 },
              onChange: (z) => {
                b(z.currentTarget.value, x, R, E, $);
              }
            }
          );
        case Ft.NUMBER:
          return /* @__PURE__ */ re.jsx(
            "input",
            {
              ref: (z) => {
                z && (z.value = S);
              },
              className: "inputNumber",
              type: "number",
              onChange: (z) => {
                b(+(z.target.value || 0), x, R, E, $);
              }
            }
          );
        case Ft.BOOLEAN:
          return /* @__PURE__ */ re.jsxs(
            jt,
            {
              size: "small",
              defaultValue: !!S,
              onChange: (z) => {
                b(z, x, R, E, $);
              },
              children: [
                /* @__PURE__ */ re.jsx(jt.Option, { value: !0, label: "true", children: "true" }),
                /* @__PURE__ */ re.jsx(jt.Option, { value: !1, label: "false", children: "false" })
              ]
            }
          );
      }
      return null;
    },
    []
  ), g = s.useCallback(
    (S) => {
      o[S] = !o[S], i({ ...o });
    },
    [JSON.stringify(o)]
  ), C = s.useMemo(
    () => ({
      editObject: t,
      setEditObject: c,
      optionsMap: r,
      onChangeType: d,
      onClickDelete: u,
      onChangeAllow: g,
      allowMap: o,
      schema: e.schema
    }),
    [
      l,
      JSON.stringify(r),
      d,
      u,
      g,
      JSON.stringify(o),
      JSON.stringify(e.schema)
    ]
  );
  return /* @__PURE__ */ re.jsx(Wr.Provider, { value: C, children: /* @__PURE__ */ re.jsx(
    Bc,
    {
      sourceData: t,
      schema: e.schema,
      onChangeKey: f,
      allowMap: o,
      getValue: p
    }
  ) });
}
try {
  Ss.displayName = "JsonView", Ss.__docgenInfo = { description: "", displayName: "JsonView", props: { setEditObject: { defaultValue: null, description: "", name: "setEditObject", required: !0, type: { name: "any" } }, editObject: { defaultValue: null, description: "", name: "editObject", required: !0, type: { name: "Record<string, any>" } }, optionsMap: { defaultValue: null, description: "", name: "optionsMap", required: !1, type: { name: "Record<string, { value: string; label?: string; }[]>" } }, schema: { defaultValue: null, description: "", name: "schema", required: !0, type: { name: "any" } } } };
} catch {
}
const Cs = ({ data: e, onChange: t, schema: n, optionsMap: r, width: a }) => /* @__PURE__ */ re.jsx("div", { className: "jsonEditorContainer", style: { width: a ?? 500, marginBottom: "20px" }, children: /* @__PURE__ */ re.jsx(
  Ss,
  {
    //the cloneDeep is to ensure that an entirily new object is being used
    editObject: xs(e),
    setEditObject: t,
    optionsMap: r,
    schema: n || {}
  }
) });
try {
  Cs.displayName = "JsonEditor", Cs.__docgenInfo = { description: "", displayName: "JsonEditor", props: { width: { defaultValue: null, description: "", name: "width", required: !1, type: { name: "string | number" } }, data: { defaultValue: null, description: "", name: "data", required: !0, type: { name: "Record<string, any>" } }, optionsMap: { defaultValue: null, description: "", name: "optionsMap", required: !1, type: { name: "Record<string, { value: string; label?: string; }[]>" } }, schema: { defaultValue: null, description: "", name: "schema", required: !1, type: { name: "any" } }, onChange: { defaultValue: null, description: "", name: "onChange", required: !0, type: { name: "(data: any) => void" } } } };
} catch {
}
const hC = {
  title: "Example/JsonEditor",
  component: Cs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
};
let kc = {
  data: {
    keyStr: "string",
    keyNum: 1,
    keyBool: !0,
    keyArr: ["1", 1, !0, [], {}],
    keyObj: {
      second: null
    }
  }
};
const Va = {
  args: {
    width: "440px",
    data: kc.data,
    schema: {},
    onChange(e) {
      kc.data = e, console.log(e);
    }
  }
};
var Wc, Uc, Gc;
Va.parameters = {
  ...Va.parameters,
  docs: {
    ...(Wc = Va.parameters) == null ? void 0 : Wc.docs,
    source: {
      originalSource: `{
  args: {
    width: '440px',
    data: dataRef.data,
    schema: {},
    onChange(data) {
      dataRef.data = data;
      console.log(data);
    }
  }
}`,
      ...(Gc = (Uc = Va.parameters) == null ? void 0 : Uc.docs) == null ? void 0 : Gc.source
    }
  }
};
const pC = ["Primary"];
export {
  Va as Primary,
  pC as __namedExportsOrder,
  hC as default
};
//# sourceMappingURL=JsonEditor.stories-f3e3bda1.js.map

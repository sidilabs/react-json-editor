import { R as Ge, r as qe } from "./index-d373fa27.js";
import { u as Yr, r as is, b as ns, c as Bi, d as ss, e as ji, f as as, g as os, S as us, h as ls, j as ve, k as cs, l as Jr, m as Xr, n as _t, o as fs, p as hs, T as Hr, q as ps } from "./_getPrototype-e4d945f6.js";
import { g as Et, c as xt, a as ds } from "./_commonjsHelpers-c5d32002.js";
import { d as ms } from "./index-398c73a4.js";
const { global: gs } = __STORYBOOK_MODULE_GLOBAL__;
var { FRAMEWORK_OPTIONS: Qt } = gs, Yu = (e, t) => {
  let { id: r, component: i } = t;
  if (!i)
    throw new Error(`Unable to render story ${r} as the component annotation is missing from the default export`);
  return Ge.createElement(i, { ...e });
}, ys = class extends qe.Component {
  constructor() {
    super(...arguments), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidMount() {
    let { hasError: e } = this.state, { showMain: t } = this.props;
    e || t();
  }
  componentDidCatch(e) {
    let { showException: t } = this.props;
    t(e);
  }
  render() {
    let { hasError: e } = this.state, { children: t } = this.props;
    return e ? null : t;
  }
}, Qr = Qt != null && Qt.strictMode ? qe.StrictMode : qe.Fragment;
async function Ju({ storyContext: e, unboundStoryFn: t, showMain: r, showException: i, forceRemount: s }, a) {
  let u = Ge.createElement(ys, { showMain: r, showException: i }, Ge.createElement(t, { ...e })), f = Qr ? Ge.createElement(Qr, null, u) : u;
  return s && Yr(a), await is(f, a), () => Yr(a);
}
var dr = { exports: {} }, Ot = { exports: {} }, pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kr;
function vs() {
  if (Kr)
    return pe;
  Kr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, y = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, x = e ? Symbol.for("react.suspense") : 60113, S = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
  function F(p) {
    if (typeof p == "object" && p !== null) {
      var E = p.$$typeof;
      switch (E) {
        case t:
          switch (p = p.type, p) {
            case h:
            case y:
            case i:
            case a:
            case s:
            case x:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case f:
                case m:
                case C:
                case b:
                case u:
                  return p;
                default:
                  return E;
              }
          }
        case r:
          return E;
      }
    }
  }
  function w(p) {
    return F(p) === y;
  }
  return pe.AsyncMode = h, pe.ConcurrentMode = y, pe.ContextConsumer = f, pe.ContextProvider = u, pe.Element = t, pe.ForwardRef = m, pe.Fragment = i, pe.Lazy = C, pe.Memo = b, pe.Portal = r, pe.Profiler = a, pe.StrictMode = s, pe.Suspense = x, pe.isAsyncMode = function(p) {
    return w(p) || F(p) === h;
  }, pe.isConcurrentMode = w, pe.isContextConsumer = function(p) {
    return F(p) === f;
  }, pe.isContextProvider = function(p) {
    return F(p) === u;
  }, pe.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, pe.isForwardRef = function(p) {
    return F(p) === m;
  }, pe.isFragment = function(p) {
    return F(p) === i;
  }, pe.isLazy = function(p) {
    return F(p) === C;
  }, pe.isMemo = function(p) {
    return F(p) === b;
  }, pe.isPortal = function(p) {
    return F(p) === r;
  }, pe.isProfiler = function(p) {
    return F(p) === a;
  }, pe.isStrictMode = function(p) {
    return F(p) === s;
  }, pe.isSuspense = function(p) {
    return F(p) === x;
  }, pe.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === i || p === y || p === a || p === s || p === x || p === S || typeof p == "object" && p !== null && (p.$$typeof === C || p.$$typeof === b || p.$$typeof === u || p.$$typeof === f || p.$$typeof === m || p.$$typeof === _ || p.$$typeof === R || p.$$typeof === N || p.$$typeof === v);
  }, pe.typeOf = F, pe;
}
var de = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zr;
function xs() {
  return Zr || (Zr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, y = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, x = e ? Symbol.for("react.suspense") : 60113, S = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
    function F(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === i || D === y || D === a || D === s || D === x || D === S || typeof D == "object" && D !== null && (D.$$typeof === C || D.$$typeof === b || D.$$typeof === u || D.$$typeof === f || D.$$typeof === m || D.$$typeof === _ || D.$$typeof === R || D.$$typeof === N || D.$$typeof === v);
    }
    function w(D) {
      if (typeof D == "object" && D !== null) {
        var Oe = D.$$typeof;
        switch (Oe) {
          case t:
            var j = D.type;
            switch (j) {
              case h:
              case y:
              case i:
              case a:
              case s:
              case x:
                return j;
              default:
                var Ue = j && j.$$typeof;
                switch (Ue) {
                  case f:
                  case m:
                  case C:
                  case b:
                  case u:
                    return Ue;
                  default:
                    return Oe;
                }
            }
          case r:
            return Oe;
        }
      }
    }
    var p = h, E = y, A = f, T = u, q = t, B = m, Y = i, z = C, U = b, K = r, ye = a, fe = s, ue = x, ee = !1;
    function Ee(D) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(D) || w(D) === h;
    }
    function O(D) {
      return w(D) === y;
    }
    function V(D) {
      return w(D) === f;
    }
    function I(D) {
      return w(D) === u;
    }
    function Q(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function X(D) {
      return w(D) === m;
    }
    function Z(D) {
      return w(D) === i;
    }
    function $(D) {
      return w(D) === C;
    }
    function J(D) {
      return w(D) === b;
    }
    function re(D) {
      return w(D) === r;
    }
    function le(D) {
      return w(D) === a;
    }
    function ne(D) {
      return w(D) === s;
    }
    function Ce(D) {
      return w(D) === x;
    }
    de.AsyncMode = p, de.ConcurrentMode = E, de.ContextConsumer = A, de.ContextProvider = T, de.Element = q, de.ForwardRef = B, de.Fragment = Y, de.Lazy = z, de.Memo = U, de.Portal = K, de.Profiler = ye, de.StrictMode = fe, de.Suspense = ue, de.isAsyncMode = Ee, de.isConcurrentMode = O, de.isContextConsumer = V, de.isContextProvider = I, de.isElement = Q, de.isForwardRef = X, de.isFragment = Z, de.isLazy = $, de.isMemo = J, de.isPortal = re, de.isProfiler = le, de.isStrictMode = ne, de.isSuspense = Ce, de.isValidElementType = F, de.typeOf = w;
  }()), de;
}
var ei;
function Vi() {
  return ei || (ei = 1, process.env.NODE_ENV === "production" ? Ot.exports = vs() : Ot.exports = xs()), Ot.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Kt, ti;
function bs() {
  if (ti)
    return Kt;
  ti = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function i(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var u = {}, f = 0; f < 10; f++)
        u["_" + String.fromCharCode(f)] = f;
      var h = Object.getOwnPropertyNames(u).map(function(m) {
        return u[m];
      });
      if (h.join("") !== "0123456789")
        return !1;
      var y = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        y[m] = m;
      }), Object.keys(Object.assign({}, y)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Kt = s() ? Object.assign : function(a, u) {
    for (var f, h = i(a), y, m = 1; m < arguments.length; m++) {
      f = Object(arguments[m]);
      for (var x in f)
        t.call(f, x) && (h[x] = f[x]);
      if (e) {
        y = e(f);
        for (var S = 0; S < y.length; S++)
          r.call(f, y[S]) && (h[y[S]] = f[y[S]]);
      }
    }
    return h;
  }, Kt;
}
var Zt, ri;
function Cr() {
  if (ri)
    return Zt;
  ri = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Zt = e, Zt;
}
var er, ii;
function qi() {
  return ii || (ii = 1, er = Function.call.bind(Object.prototype.hasOwnProperty)), er;
}
var tr, ni;
function Ss() {
  if (ni)
    return tr;
  ni = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Cr(), r = {}, i = qi();
    e = function(a) {
      var u = "Warning: " + a;
      typeof console < "u" && console.error(u);
      try {
        throw new Error(u);
      } catch {
      }
    };
  }
  function s(a, u, f, h, y) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in a)
        if (i(a, m)) {
          var x;
          try {
            if (typeof a[m] != "function") {
              var S = Error(
                (h || "React class") + ": " + f + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw S.name = "Invariant Violation", S;
            }
            x = a[m](u, m, h, f, null, t);
          } catch (C) {
            x = C;
          }
          if (x && !(x instanceof Error) && e(
            (h || "React class") + ": type specification of " + f + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof x + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), x instanceof Error && !(x.message in r)) {
            r[x.message] = !0;
            var b = y ? y() : "";
            e(
              "Failed " + f + " type: " + x.message + (b ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, tr = s, tr;
}
var rr, si;
function _s() {
  if (si)
    return rr;
  si = 1;
  var e = Vi(), t = bs(), r = Cr(), i = qi(), s = Ss(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(f) {
    var h = "Warning: " + f;
    typeof console < "u" && console.error(h);
    try {
      throw new Error(h);
    } catch {
    }
  });
  function u() {
    return null;
  }
  return rr = function(f, h) {
    var y = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function x(O) {
      var V = O && (y && O[y] || O[m]);
      if (typeof V == "function")
        return V;
    }
    var S = "<<anonymous>>", b = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: N(),
      arrayOf: F,
      element: w(),
      elementType: p(),
      instanceOf: E,
      node: B(),
      objectOf: T,
      oneOf: A,
      oneOfType: q,
      shape: z,
      exact: U
    };
    function C(O, V) {
      return O === V ? O !== 0 || 1 / O === 1 / V : O !== O && V !== V;
    }
    function v(O, V) {
      this.message = O, this.data = V && typeof V == "object" ? V : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function _(O) {
      if (process.env.NODE_ENV !== "production")
        var V = {}, I = 0;
      function Q(Z, $, J, re, le, ne, Ce) {
        if (re = re || S, ne = ne || J, Ce !== r) {
          if (h) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Oe = re + ":" + J;
            !V[Oe] && // Avoid spamming the console because they are often not actionable except for lib authors
            I < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + ne + "` prop on `" + re + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), V[Oe] = !0, I++);
          }
        }
        return $[J] == null ? Z ? $[J] === null ? new v("The " + le + " `" + ne + "` is marked as required " + ("in `" + re + "`, but its value is `null`.")) : new v("The " + le + " `" + ne + "` is marked as required in " + ("`" + re + "`, but its value is `undefined`.")) : null : O($, J, re, le, ne);
      }
      var X = Q.bind(null, !1);
      return X.isRequired = Q.bind(null, !0), X;
    }
    function R(O) {
      function V(I, Q, X, Z, $, J) {
        var re = I[Q], le = fe(re);
        if (le !== O) {
          var ne = ue(re);
          return new v(
            "Invalid " + Z + " `" + $ + "` of type " + ("`" + ne + "` supplied to `" + X + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return _(V);
    }
    function N() {
      return _(u);
    }
    function F(O) {
      function V(I, Q, X, Z, $) {
        if (typeof O != "function")
          return new v("Property `" + $ + "` of component `" + X + "` has invalid PropType notation inside arrayOf.");
        var J = I[Q];
        if (!Array.isArray(J)) {
          var re = fe(J);
          return new v("Invalid " + Z + " `" + $ + "` of type " + ("`" + re + "` supplied to `" + X + "`, expected an array."));
        }
        for (var le = 0; le < J.length; le++) {
          var ne = O(J, le, X, Z, $ + "[" + le + "]", r);
          if (ne instanceof Error)
            return ne;
        }
        return null;
      }
      return _(V);
    }
    function w() {
      function O(V, I, Q, X, Z) {
        var $ = V[I];
        if (!f($)) {
          var J = fe($);
          return new v("Invalid " + X + " `" + Z + "` of type " + ("`" + J + "` supplied to `" + Q + "`, expected a single ReactElement."));
        }
        return null;
      }
      return _(O);
    }
    function p() {
      function O(V, I, Q, X, Z) {
        var $ = V[I];
        if (!e.isValidElementType($)) {
          var J = fe($);
          return new v("Invalid " + X + " `" + Z + "` of type " + ("`" + J + "` supplied to `" + Q + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return _(O);
    }
    function E(O) {
      function V(I, Q, X, Z, $) {
        if (!(I[Q] instanceof O)) {
          var J = O.name || S, re = Ee(I[Q]);
          return new v("Invalid " + Z + " `" + $ + "` of type " + ("`" + re + "` supplied to `" + X + "`, expected ") + ("instance of `" + J + "`."));
        }
        return null;
      }
      return _(V);
    }
    function A(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), u;
      function V(I, Q, X, Z, $) {
        for (var J = I[Q], re = 0; re < O.length; re++)
          if (C(J, O[re]))
            return null;
        var le = JSON.stringify(O, function(Ce, D) {
          var Oe = ue(D);
          return Oe === "symbol" ? String(D) : D;
        });
        return new v("Invalid " + Z + " `" + $ + "` of value `" + String(J) + "` " + ("supplied to `" + X + "`, expected one of " + le + "."));
      }
      return _(V);
    }
    function T(O) {
      function V(I, Q, X, Z, $) {
        if (typeof O != "function")
          return new v("Property `" + $ + "` of component `" + X + "` has invalid PropType notation inside objectOf.");
        var J = I[Q], re = fe(J);
        if (re !== "object")
          return new v("Invalid " + Z + " `" + $ + "` of type " + ("`" + re + "` supplied to `" + X + "`, expected an object."));
        for (var le in J)
          if (i(J, le)) {
            var ne = O(J, le, X, Z, $ + "." + le, r);
            if (ne instanceof Error)
              return ne;
          }
        return null;
      }
      return _(V);
    }
    function q(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), u;
      for (var V = 0; V < O.length; V++) {
        var I = O[V];
        if (typeof I != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(I) + " at index " + V + "."
          ), u;
      }
      function Q(X, Z, $, J, re) {
        for (var le = [], ne = 0; ne < O.length; ne++) {
          var Ce = O[ne], D = Ce(X, Z, $, J, re, r);
          if (D == null)
            return null;
          D.data && i(D.data, "expectedType") && le.push(D.data.expectedType);
        }
        var Oe = le.length > 0 ? ", expected one of type [" + le.join(", ") + "]" : "";
        return new v("Invalid " + J + " `" + re + "` supplied to " + ("`" + $ + "`" + Oe + "."));
      }
      return _(Q);
    }
    function B() {
      function O(V, I, Q, X, Z) {
        return K(V[I]) ? null : new v("Invalid " + X + " `" + Z + "` supplied to " + ("`" + Q + "`, expected a ReactNode."));
      }
      return _(O);
    }
    function Y(O, V, I, Q, X) {
      return new v(
        (O || "React class") + ": " + V + " type `" + I + "." + Q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + X + "`."
      );
    }
    function z(O) {
      function V(I, Q, X, Z, $) {
        var J = I[Q], re = fe(J);
        if (re !== "object")
          return new v("Invalid " + Z + " `" + $ + "` of type `" + re + "` " + ("supplied to `" + X + "`, expected `object`."));
        for (var le in O) {
          var ne = O[le];
          if (typeof ne != "function")
            return Y(X, Z, $, le, ue(ne));
          var Ce = ne(J, le, X, Z, $ + "." + le, r);
          if (Ce)
            return Ce;
        }
        return null;
      }
      return _(V);
    }
    function U(O) {
      function V(I, Q, X, Z, $) {
        var J = I[Q], re = fe(J);
        if (re !== "object")
          return new v("Invalid " + Z + " `" + $ + "` of type `" + re + "` " + ("supplied to `" + X + "`, expected `object`."));
        var le = t({}, I[Q], O);
        for (var ne in le) {
          var Ce = O[ne];
          if (i(O, ne) && typeof Ce != "function")
            return Y(X, Z, $, ne, ue(Ce));
          if (!Ce)
            return new v(
              "Invalid " + Z + " `" + $ + "` key `" + ne + "` supplied to `" + X + "`.\nBad object: " + JSON.stringify(I[Q], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var D = Ce(J, ne, X, Z, $ + "." + ne, r);
          if (D)
            return D;
        }
        return null;
      }
      return _(V);
    }
    function K(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(K);
          if (O === null || f(O))
            return !0;
          var V = x(O);
          if (V) {
            var I = V.call(O), Q;
            if (V !== O.entries) {
              for (; !(Q = I.next()).done; )
                if (!K(Q.value))
                  return !1;
            } else
              for (; !(Q = I.next()).done; ) {
                var X = Q.value;
                if (X && !K(X[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ye(O, V) {
      return O === "symbol" ? !0 : V ? V["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && V instanceof Symbol : !1;
    }
    function fe(O) {
      var V = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : ye(V, O) ? "symbol" : V;
    }
    function ue(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var V = fe(O);
      if (V === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return V;
    }
    function ee(O) {
      var V = ue(O);
      switch (V) {
        case "array":
        case "object":
          return "an " + V;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + V;
        default:
          return V;
      }
    }
    function Ee(O) {
      return !O.constructor || !O.constructor.name ? S : O.constructor.name;
    }
    return b.checkPropTypes = s, b.resetWarningCache = s.resetWarningCache, b.PropTypes = b, b;
  }, rr;
}
var ir, ai;
function Es() {
  if (ai)
    return ir;
  ai = 1;
  var e = Cr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ir = function() {
    function i(u, f, h, y, m, x) {
      if (x !== e) {
        var S = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw S.name = "Invariant Violation", S;
      }
    }
    i.isRequired = i;
    function s() {
      return i;
    }
    var a = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: s,
      element: i,
      elementType: i,
      instanceOf: s,
      node: i,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, ir;
}
if (process.env.NODE_ENV !== "production") {
  var Cs = Vi(), As = !0;
  dr.exports = _s()(Cs.isElement, As);
} else
  dr.exports = Es()();
var ws = dr.exports;
const oi = /* @__PURE__ */ Et(ws), Ts = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "search",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
var ks = Ts;
const Ps = /* @__PURE__ */ Et(ks);
var Ui = {}, $i = {};
(function(e) {
  (function t(r) {
    var i, s, a, u, f, h;
    function y(p) {
      var E = {}, A, T;
      for (A in p)
        p.hasOwnProperty(A) && (T = p[A], typeof T == "object" && T !== null ? E[A] = y(T) : E[A] = T);
      return E;
    }
    function m(p, E) {
      var A, T, q, B;
      for (T = p.length, q = 0; T; )
        A = T >>> 1, B = q + A, E(p[B]) ? T = A : (q = B + 1, T -= A + 1);
      return q;
    }
    i = {
      AssignmentExpression: "AssignmentExpression",
      AssignmentPattern: "AssignmentPattern",
      ArrayExpression: "ArrayExpression",
      ArrayPattern: "ArrayPattern",
      ArrowFunctionExpression: "ArrowFunctionExpression",
      AwaitExpression: "AwaitExpression",
      // CAUTION: It's deferred to ES7.
      BlockStatement: "BlockStatement",
      BinaryExpression: "BinaryExpression",
      BreakStatement: "BreakStatement",
      CallExpression: "CallExpression",
      CatchClause: "CatchClause",
      ChainExpression: "ChainExpression",
      ClassBody: "ClassBody",
      ClassDeclaration: "ClassDeclaration",
      ClassExpression: "ClassExpression",
      ComprehensionBlock: "ComprehensionBlock",
      // CAUTION: It's deferred to ES7.
      ComprehensionExpression: "ComprehensionExpression",
      // CAUTION: It's deferred to ES7.
      ConditionalExpression: "ConditionalExpression",
      ContinueStatement: "ContinueStatement",
      DebuggerStatement: "DebuggerStatement",
      DirectiveStatement: "DirectiveStatement",
      DoWhileStatement: "DoWhileStatement",
      EmptyStatement: "EmptyStatement",
      ExportAllDeclaration: "ExportAllDeclaration",
      ExportDefaultDeclaration: "ExportDefaultDeclaration",
      ExportNamedDeclaration: "ExportNamedDeclaration",
      ExportSpecifier: "ExportSpecifier",
      ExpressionStatement: "ExpressionStatement",
      ForStatement: "ForStatement",
      ForInStatement: "ForInStatement",
      ForOfStatement: "ForOfStatement",
      FunctionDeclaration: "FunctionDeclaration",
      FunctionExpression: "FunctionExpression",
      GeneratorExpression: "GeneratorExpression",
      // CAUTION: It's deferred to ES7.
      Identifier: "Identifier",
      IfStatement: "IfStatement",
      ImportExpression: "ImportExpression",
      ImportDeclaration: "ImportDeclaration",
      ImportDefaultSpecifier: "ImportDefaultSpecifier",
      ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
      ImportSpecifier: "ImportSpecifier",
      Literal: "Literal",
      LabeledStatement: "LabeledStatement",
      LogicalExpression: "LogicalExpression",
      MemberExpression: "MemberExpression",
      MetaProperty: "MetaProperty",
      MethodDefinition: "MethodDefinition",
      ModuleSpecifier: "ModuleSpecifier",
      NewExpression: "NewExpression",
      ObjectExpression: "ObjectExpression",
      ObjectPattern: "ObjectPattern",
      PrivateIdentifier: "PrivateIdentifier",
      Program: "Program",
      Property: "Property",
      PropertyDefinition: "PropertyDefinition",
      RestElement: "RestElement",
      ReturnStatement: "ReturnStatement",
      SequenceExpression: "SequenceExpression",
      SpreadElement: "SpreadElement",
      Super: "Super",
      SwitchStatement: "SwitchStatement",
      SwitchCase: "SwitchCase",
      TaggedTemplateExpression: "TaggedTemplateExpression",
      TemplateElement: "TemplateElement",
      TemplateLiteral: "TemplateLiteral",
      ThisExpression: "ThisExpression",
      ThrowStatement: "ThrowStatement",
      TryStatement: "TryStatement",
      UnaryExpression: "UnaryExpression",
      UpdateExpression: "UpdateExpression",
      VariableDeclaration: "VariableDeclaration",
      VariableDeclarator: "VariableDeclarator",
      WhileStatement: "WhileStatement",
      WithStatement: "WithStatement",
      YieldExpression: "YieldExpression"
    }, a = {
      AssignmentExpression: ["left", "right"],
      AssignmentPattern: ["left", "right"],
      ArrayExpression: ["elements"],
      ArrayPattern: ["elements"],
      ArrowFunctionExpression: ["params", "body"],
      AwaitExpression: ["argument"],
      // CAUTION: It's deferred to ES7.
      BlockStatement: ["body"],
      BinaryExpression: ["left", "right"],
      BreakStatement: ["label"],
      CallExpression: ["callee", "arguments"],
      CatchClause: ["param", "body"],
      ChainExpression: ["expression"],
      ClassBody: ["body"],
      ClassDeclaration: ["id", "superClass", "body"],
      ClassExpression: ["id", "superClass", "body"],
      ComprehensionBlock: ["left", "right"],
      // CAUTION: It's deferred to ES7.
      ComprehensionExpression: ["blocks", "filter", "body"],
      // CAUTION: It's deferred to ES7.
      ConditionalExpression: ["test", "consequent", "alternate"],
      ContinueStatement: ["label"],
      DebuggerStatement: [],
      DirectiveStatement: [],
      DoWhileStatement: ["body", "test"],
      EmptyStatement: [],
      ExportAllDeclaration: ["source"],
      ExportDefaultDeclaration: ["declaration"],
      ExportNamedDeclaration: ["declaration", "specifiers", "source"],
      ExportSpecifier: ["exported", "local"],
      ExpressionStatement: ["expression"],
      ForStatement: ["init", "test", "update", "body"],
      ForInStatement: ["left", "right", "body"],
      ForOfStatement: ["left", "right", "body"],
      FunctionDeclaration: ["id", "params", "body"],
      FunctionExpression: ["id", "params", "body"],
      GeneratorExpression: ["blocks", "filter", "body"],
      // CAUTION: It's deferred to ES7.
      Identifier: [],
      IfStatement: ["test", "consequent", "alternate"],
      ImportExpression: ["source"],
      ImportDeclaration: ["specifiers", "source"],
      ImportDefaultSpecifier: ["local"],
      ImportNamespaceSpecifier: ["local"],
      ImportSpecifier: ["imported", "local"],
      Literal: [],
      LabeledStatement: ["label", "body"],
      LogicalExpression: ["left", "right"],
      MemberExpression: ["object", "property"],
      MetaProperty: ["meta", "property"],
      MethodDefinition: ["key", "value"],
      ModuleSpecifier: [],
      NewExpression: ["callee", "arguments"],
      ObjectExpression: ["properties"],
      ObjectPattern: ["properties"],
      PrivateIdentifier: [],
      Program: ["body"],
      Property: ["key", "value"],
      PropertyDefinition: ["key", "value"],
      RestElement: ["argument"],
      ReturnStatement: ["argument"],
      SequenceExpression: ["expressions"],
      SpreadElement: ["argument"],
      Super: [],
      SwitchStatement: ["discriminant", "cases"],
      SwitchCase: ["test", "consequent"],
      TaggedTemplateExpression: ["tag", "quasi"],
      TemplateElement: [],
      TemplateLiteral: ["quasis", "expressions"],
      ThisExpression: [],
      ThrowStatement: ["argument"],
      TryStatement: ["block", "handler", "finalizer"],
      UnaryExpression: ["argument"],
      UpdateExpression: ["argument"],
      VariableDeclaration: ["declarations"],
      VariableDeclarator: ["id", "init"],
      WhileStatement: ["test", "body"],
      WithStatement: ["object", "body"],
      YieldExpression: ["argument"]
    }, u = {}, f = {}, h = {}, s = {
      Break: u,
      Skip: f,
      Remove: h
    };
    function x(p, E) {
      this.parent = p, this.key = E;
    }
    x.prototype.replace = function(E) {
      this.parent[this.key] = E;
    }, x.prototype.remove = function() {
      return Array.isArray(this.parent) ? (this.parent.splice(this.key, 1), !0) : (this.replace(null), !1);
    };
    function S(p, E, A, T) {
      this.node = p, this.path = E, this.wrap = A, this.ref = T;
    }
    function b() {
    }
    b.prototype.path = function() {
      var E, A, T, q, B, Y;
      function z(U, K) {
        if (Array.isArray(K))
          for (T = 0, q = K.length; T < q; ++T)
            U.push(K[T]);
        else
          U.push(K);
      }
      if (!this.__current.path)
        return null;
      for (B = [], E = 2, A = this.__leavelist.length; E < A; ++E)
        Y = this.__leavelist[E], z(B, Y.path);
      return z(B, this.__current.path), B;
    }, b.prototype.type = function() {
      var p = this.current();
      return p.type || this.__current.wrap;
    }, b.prototype.parents = function() {
      var E, A, T;
      for (T = [], E = 1, A = this.__leavelist.length; E < A; ++E)
        T.push(this.__leavelist[E].node);
      return T;
    }, b.prototype.current = function() {
      return this.__current.node;
    }, b.prototype.__execute = function(E, A) {
      var T, q;
      return q = void 0, T = this.__current, this.__current = A, this.__state = null, E && (q = E.call(this, A.node, this.__leavelist[this.__leavelist.length - 1].node)), this.__current = T, q;
    }, b.prototype.notify = function(E) {
      this.__state = E;
    }, b.prototype.skip = function() {
      this.notify(f);
    }, b.prototype.break = function() {
      this.notify(u);
    }, b.prototype.remove = function() {
      this.notify(h);
    }, b.prototype.__initialize = function(p, E) {
      this.visitor = E, this.root = p, this.__worklist = [], this.__leavelist = [], this.__current = null, this.__state = null, this.__fallback = null, E.fallback === "iteration" ? this.__fallback = Object.keys : typeof E.fallback == "function" && (this.__fallback = E.fallback), this.__keys = a, E.keys && (this.__keys = Object.assign(Object.create(this.__keys), E.keys));
    };
    function C(p) {
      return p == null ? !1 : typeof p == "object" && typeof p.type == "string";
    }
    function v(p, E) {
      return (p === i.ObjectExpression || p === i.ObjectPattern) && E === "properties";
    }
    function _(p, E) {
      for (var A = p.length - 1; A >= 0; --A)
        if (p[A].node === E)
          return !0;
      return !1;
    }
    b.prototype.traverse = function(E, A) {
      var T, q, B, Y, z, U, K, ye, fe, ue, ee, Ee;
      for (this.__initialize(E, A), Ee = {}, T = this.__worklist, q = this.__leavelist, T.push(new S(E, null, null, null)), q.push(new S(null, null, null, null)); T.length; ) {
        if (B = T.pop(), B === Ee) {
          if (B = q.pop(), U = this.__execute(A.leave, B), this.__state === u || U === u)
            return;
          continue;
        }
        if (B.node) {
          if (U = this.__execute(A.enter, B), this.__state === u || U === u)
            return;
          if (T.push(Ee), q.push(B), this.__state === f || U === f)
            continue;
          if (Y = B.node, z = Y.type || B.wrap, ue = this.__keys[z], !ue)
            if (this.__fallback)
              ue = this.__fallback(Y);
            else
              throw new Error("Unknown node type " + z + ".");
          for (ye = ue.length; (ye -= 1) >= 0; )
            if (K = ue[ye], ee = Y[K], !!ee) {
              if (Array.isArray(ee)) {
                for (fe = ee.length; (fe -= 1) >= 0; )
                  if (ee[fe] && !_(q, ee[fe])) {
                    if (v(z, ue[ye]))
                      B = new S(ee[fe], [K, fe], "Property", null);
                    else if (C(ee[fe]))
                      B = new S(ee[fe], [K, fe], null, null);
                    else
                      continue;
                    T.push(B);
                  }
              } else if (C(ee)) {
                if (_(q, ee))
                  continue;
                T.push(new S(ee, K, null, null));
              }
            }
        }
      }
    }, b.prototype.replace = function(E, A) {
      var T, q, B, Y, z, U, K, ye, fe, ue, ee, Ee, O;
      function V(I) {
        var Q, X, Z, $;
        if (I.ref.remove()) {
          for (X = I.ref.key, $ = I.ref.parent, Q = T.length; Q--; )
            if (Z = T[Q], Z.ref && Z.ref.parent === $) {
              if (Z.ref.key < X)
                break;
              --Z.ref.key;
            }
        }
      }
      for (this.__initialize(E, A), ee = {}, T = this.__worklist, q = this.__leavelist, Ee = {
        root: E
      }, U = new S(E, null, null, new x(Ee, "root")), T.push(U), q.push(U); T.length; ) {
        if (U = T.pop(), U === ee) {
          if (U = q.pop(), z = this.__execute(A.leave, U), z !== void 0 && z !== u && z !== f && z !== h && U.ref.replace(z), (this.__state === h || z === h) && V(U), this.__state === u || z === u)
            return Ee.root;
          continue;
        }
        if (z = this.__execute(A.enter, U), z !== void 0 && z !== u && z !== f && z !== h && (U.ref.replace(z), U.node = z), (this.__state === h || z === h) && (V(U), U.node = null), this.__state === u || z === u)
          return Ee.root;
        if (B = U.node, !!B && (T.push(ee), q.push(U), !(this.__state === f || z === f))) {
          if (Y = B.type || U.wrap, fe = this.__keys[Y], !fe)
            if (this.__fallback)
              fe = this.__fallback(B);
            else
              throw new Error("Unknown node type " + Y + ".");
          for (K = fe.length; (K -= 1) >= 0; )
            if (O = fe[K], ue = B[O], !!ue)
              if (Array.isArray(ue)) {
                for (ye = ue.length; (ye -= 1) >= 0; )
                  if (ue[ye]) {
                    if (v(Y, fe[K]))
                      U = new S(ue[ye], [O, ye], "Property", new x(ue, ye));
                    else if (C(ue[ye]))
                      U = new S(ue[ye], [O, ye], null, new x(ue, ye));
                    else
                      continue;
                    T.push(U);
                  }
              } else
                C(ue) && T.push(new S(ue, O, null, new x(B, O)));
        }
      }
      return Ee.root;
    };
    function R(p, E) {
      var A = new b();
      return A.traverse(p, E);
    }
    function N(p, E) {
      var A = new b();
      return A.replace(p, E);
    }
    function F(p, E) {
      var A;
      return A = m(E, function(q) {
        return q.range[0] > p.range[0];
      }), p.extendedRange = [p.range[0], p.range[1]], A !== E.length && (p.extendedRange[1] = E[A].range[0]), A -= 1, A >= 0 && (p.extendedRange[0] = E[A].range[1]), p;
    }
    function w(p, E, A) {
      var T = [], q, B, Y, z;
      if (!p.range)
        throw new Error("attachComments needs range information");
      if (!A.length) {
        if (E.length) {
          for (Y = 0, B = E.length; Y < B; Y += 1)
            q = y(E[Y]), q.extendedRange = [0, p.range[0]], T.push(q);
          p.leadingComments = T;
        }
        return p;
      }
      for (Y = 0, B = E.length; Y < B; Y += 1)
        T.push(F(y(E[Y]), A));
      return z = 0, R(p, {
        enter: function(U) {
          for (var K; z < T.length && (K = T[z], !(K.extendedRange[1] > U.range[0])); )
            K.extendedRange[1] === U.range[0] ? (U.leadingComments || (U.leadingComments = []), U.leadingComments.push(K), T.splice(z, 1)) : z += 1;
          if (z === T.length)
            return s.Break;
          if (T[z].extendedRange[0] > U.range[1])
            return s.Skip;
        }
      }), z = 0, R(p, {
        leave: function(U) {
          for (var K; z < T.length && (K = T[z], !(U.range[1] < K.extendedRange[0])); )
            U.range[1] === K.extendedRange[0] ? (U.trailingComments || (U.trailingComments = []), U.trailingComments.push(K), T.splice(z, 1)) : z += 1;
          if (z === T.length)
            return s.Break;
          if (T[z].extendedRange[0] > U.range[1])
            return s.Skip;
        }
      }), p;
    }
    return r.Syntax = i, r.traverse = R, r.replace = N, r.attachComments = w, r.VisitorKeys = a, r.VisitorOption = s, r.Controller = b, r.cloneEnvironment = function() {
      return t({});
    }, r;
  })(e);
})($i);
var dt = {}, nr = {}, Rt = {}, Lt = {}, ui;
function Is() {
  if (ui)
    return Lt;
  ui = 1;
  var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return Lt.encode = function(t) {
    if (0 <= t && t < e.length)
      return e[t];
    throw new TypeError("Must be between 0 and 63: " + t);
  }, Lt.decode = function(t) {
    var r = 65, i = 90, s = 97, a = 122, u = 48, f = 57, h = 43, y = 47, m = 26, x = 52;
    return r <= t && t <= i ? t - r : s <= t && t <= a ? t - s + m : u <= t && t <= f ? t - u + x : t == h ? 62 : t == y ? 63 : -1;
  }, Lt;
}
var li;
function Wi() {
  if (li)
    return Rt;
  li = 1;
  var e = Is(), t = 5, r = 1 << t, i = r - 1, s = r;
  function a(f) {
    return f < 0 ? (-f << 1) + 1 : (f << 1) + 0;
  }
  function u(f) {
    var h = (f & 1) === 1, y = f >> 1;
    return h ? -y : y;
  }
  return Rt.encode = function(h) {
    var y = "", m, x = a(h);
    do
      m = x & i, x >>>= t, x > 0 && (m |= s), y += e.encode(m);
    while (x > 0);
    return y;
  }, Rt.decode = function(h, y, m) {
    var x = h.length, S = 0, b = 0, C, v;
    do {
      if (y >= x)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (v = e.decode(h.charCodeAt(y++)), v === -1)
        throw new Error("Invalid base64 digit: " + h.charAt(y - 1));
      C = !!(v & s), v &= i, S = S + (v << b), b += t;
    } while (C);
    m.value = u(S), m.rest = y;
  }, Rt;
}
var sr = {}, ci;
function Ct() {
  return ci || (ci = 1, function(e) {
    function t(w, p, E) {
      if (p in w)
        return w[p];
      if (arguments.length === 3)
        return E;
      throw new Error('"' + p + '" is a required argument.');
    }
    e.getArg = t;
    var r = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, i = /^data:.+\,.+$/;
    function s(w) {
      var p = w.match(r);
      return p ? {
        scheme: p[1],
        auth: p[2],
        host: p[3],
        port: p[4],
        path: p[5]
      } : null;
    }
    e.urlParse = s;
    function a(w) {
      var p = "";
      return w.scheme && (p += w.scheme + ":"), p += "//", w.auth && (p += w.auth + "@"), w.host && (p += w.host), w.port && (p += ":" + w.port), w.path && (p += w.path), p;
    }
    e.urlGenerate = a;
    function u(w) {
      var p = w, E = s(w);
      if (E) {
        if (!E.path)
          return w;
        p = E.path;
      }
      for (var A = e.isAbsolute(p), T = p.split(/\/+/), q, B = 0, Y = T.length - 1; Y >= 0; Y--)
        q = T[Y], q === "." ? T.splice(Y, 1) : q === ".." ? B++ : B > 0 && (q === "" ? (T.splice(Y + 1, B), B = 0) : (T.splice(Y, 2), B--));
      return p = T.join("/"), p === "" && (p = A ? "/" : "."), E ? (E.path = p, a(E)) : p;
    }
    e.normalize = u;
    function f(w, p) {
      w === "" && (w = "."), p === "" && (p = ".");
      var E = s(p), A = s(w);
      if (A && (w = A.path || "/"), E && !E.scheme)
        return A && (E.scheme = A.scheme), a(E);
      if (E || p.match(i))
        return p;
      if (A && !A.host && !A.path)
        return A.host = p, a(A);
      var T = p.charAt(0) === "/" ? p : u(w.replace(/\/+$/, "") + "/" + p);
      return A ? (A.path = T, a(A)) : T;
    }
    e.join = f, e.isAbsolute = function(w) {
      return w.charAt(0) === "/" || r.test(w);
    };
    function h(w, p) {
      w === "" && (w = "."), w = w.replace(/\/$/, "");
      for (var E = 0; p.indexOf(w + "/") !== 0; ) {
        var A = w.lastIndexOf("/");
        if (A < 0 || (w = w.slice(0, A), w.match(/^([^\/]+:\/)?\/*$/)))
          return p;
        ++E;
      }
      return Array(E + 1).join("../") + p.substr(w.length + 1);
    }
    e.relative = h;
    var y = function() {
      var w = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in w);
    }();
    function m(w) {
      return w;
    }
    function x(w) {
      return b(w) ? "$" + w : w;
    }
    e.toSetString = y ? m : x;
    function S(w) {
      return b(w) ? w.slice(1) : w;
    }
    e.fromSetString = y ? m : S;
    function b(w) {
      if (!w)
        return !1;
      var p = w.length;
      if (p < 9 || w.charCodeAt(p - 1) !== 95 || w.charCodeAt(p - 2) !== 95 || w.charCodeAt(p - 3) !== 111 || w.charCodeAt(p - 4) !== 116 || w.charCodeAt(p - 5) !== 111 || w.charCodeAt(p - 6) !== 114 || w.charCodeAt(p - 7) !== 112 || w.charCodeAt(p - 8) !== 95 || w.charCodeAt(p - 9) !== 95)
        return !1;
      for (var E = p - 10; E >= 0; E--)
        if (w.charCodeAt(E) !== 36)
          return !1;
      return !0;
    }
    function C(w, p, E) {
      var A = _(w.source, p.source);
      return A !== 0 || (A = w.originalLine - p.originalLine, A !== 0) || (A = w.originalColumn - p.originalColumn, A !== 0 || E) || (A = w.generatedColumn - p.generatedColumn, A !== 0) || (A = w.generatedLine - p.generatedLine, A !== 0) ? A : _(w.name, p.name);
    }
    e.compareByOriginalPositions = C;
    function v(w, p, E) {
      var A = w.generatedLine - p.generatedLine;
      return A !== 0 || (A = w.generatedColumn - p.generatedColumn, A !== 0 || E) || (A = _(w.source, p.source), A !== 0) || (A = w.originalLine - p.originalLine, A !== 0) || (A = w.originalColumn - p.originalColumn, A !== 0) ? A : _(w.name, p.name);
    }
    e.compareByGeneratedPositionsDeflated = v;
    function _(w, p) {
      return w === p ? 0 : w === null ? 1 : p === null ? -1 : w > p ? 1 : -1;
    }
    function R(w, p) {
      var E = w.generatedLine - p.generatedLine;
      return E !== 0 || (E = w.generatedColumn - p.generatedColumn, E !== 0) || (E = _(w.source, p.source), E !== 0) || (E = w.originalLine - p.originalLine, E !== 0) || (E = w.originalColumn - p.originalColumn, E !== 0) ? E : _(w.name, p.name);
    }
    e.compareByGeneratedPositionsInflated = R;
    function N(w) {
      return JSON.parse(w.replace(/^\)]}'[^\n]*\n/, ""));
    }
    e.parseSourceMapInput = N;
    function F(w, p, E) {
      if (p = p || "", w && (w[w.length - 1] !== "/" && p[0] !== "/" && (w += "/"), p = w + p), E) {
        var A = s(E);
        if (!A)
          throw new Error("sourceMapURL could not be parsed");
        if (A.path) {
          var T = A.path.lastIndexOf("/");
          T >= 0 && (A.path = A.path.substring(0, T + 1));
        }
        p = f(a(A), p);
      }
      return u(p);
    }
    e.computeSourceURL = F;
  }(sr)), sr;
}
var ar = {}, fi;
function zi() {
  if (fi)
    return ar;
  fi = 1;
  var e = Ct(), t = Object.prototype.hasOwnProperty, r = typeof Map < "u";
  function i() {
    this._array = [], this._set = r ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return i.fromArray = function(a, u) {
    for (var f = new i(), h = 0, y = a.length; h < y; h++)
      f.add(a[h], u);
    return f;
  }, i.prototype.size = function() {
    return r ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, i.prototype.add = function(a, u) {
    var f = r ? a : e.toSetString(a), h = r ? this.has(a) : t.call(this._set, f), y = this._array.length;
    (!h || u) && this._array.push(a), h || (r ? this._set.set(a, y) : this._set[f] = y);
  }, i.prototype.has = function(a) {
    if (r)
      return this._set.has(a);
    var u = e.toSetString(a);
    return t.call(this._set, u);
  }, i.prototype.indexOf = function(a) {
    if (r) {
      var u = this._set.get(a);
      if (u >= 0)
        return u;
    } else {
      var f = e.toSetString(a);
      if (t.call(this._set, f))
        return this._set[f];
    }
    throw new Error('"' + a + '" is not in the set.');
  }, i.prototype.at = function(a) {
    if (a >= 0 && a < this._array.length)
      return this._array[a];
    throw new Error("No element indexed by " + a);
  }, i.prototype.toArray = function() {
    return this._array.slice();
  }, ar.ArraySet = i, ar;
}
var or = {}, hi;
function Os() {
  if (hi)
    return or;
  hi = 1;
  var e = Ct();
  function t(i, s) {
    var a = i.generatedLine, u = s.generatedLine, f = i.generatedColumn, h = s.generatedColumn;
    return u > a || u == a && h >= f || e.compareByGeneratedPositionsInflated(i, s) <= 0;
  }
  function r() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return r.prototype.unsortedForEach = function(s, a) {
    this._array.forEach(s, a);
  }, r.prototype.add = function(s) {
    t(this._last, s) ? (this._last = s, this._array.push(s)) : (this._sorted = !1, this._array.push(s));
  }, r.prototype.toArray = function() {
    return this._sorted || (this._array.sort(e.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, or.MappingList = r, or;
}
var pi;
function Gi() {
  if (pi)
    return nr;
  pi = 1;
  var e = Wi(), t = Ct(), r = zi().ArraySet, i = Os().MappingList;
  function s(a) {
    a || (a = {}), this._file = t.getArg(a, "file", null), this._sourceRoot = t.getArg(a, "sourceRoot", null), this._skipValidation = t.getArg(a, "skipValidation", !1), this._sources = new r(), this._names = new r(), this._mappings = new i(), this._sourcesContents = null;
  }
  return s.prototype._version = 3, s.fromSourceMap = function(u) {
    var f = u.sourceRoot, h = new s({
      file: u.file,
      sourceRoot: f
    });
    return u.eachMapping(function(y) {
      var m = {
        generated: {
          line: y.generatedLine,
          column: y.generatedColumn
        }
      };
      y.source != null && (m.source = y.source, f != null && (m.source = t.relative(f, m.source)), m.original = {
        line: y.originalLine,
        column: y.originalColumn
      }, y.name != null && (m.name = y.name)), h.addMapping(m);
    }), u.sources.forEach(function(y) {
      var m = y;
      f !== null && (m = t.relative(f, y)), h._sources.has(m) || h._sources.add(m);
      var x = u.sourceContentFor(y);
      x != null && h.setSourceContent(y, x);
    }), h;
  }, s.prototype.addMapping = function(u) {
    var f = t.getArg(u, "generated"), h = t.getArg(u, "original", null), y = t.getArg(u, "source", null), m = t.getArg(u, "name", null);
    this._skipValidation || this._validateMapping(f, h, y, m), y != null && (y = String(y), this._sources.has(y) || this._sources.add(y)), m != null && (m = String(m), this._names.has(m) || this._names.add(m)), this._mappings.add({
      generatedLine: f.line,
      generatedColumn: f.column,
      originalLine: h != null && h.line,
      originalColumn: h != null && h.column,
      source: y,
      name: m
    });
  }, s.prototype.setSourceContent = function(u, f) {
    var h = u;
    this._sourceRoot != null && (h = t.relative(this._sourceRoot, h)), f != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[t.toSetString(h)] = f) : this._sourcesContents && (delete this._sourcesContents[t.toSetString(h)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, s.prototype.applySourceMap = function(u, f, h) {
    var y = f;
    if (f == null) {
      if (u.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      y = u.file;
    }
    var m = this._sourceRoot;
    m != null && (y = t.relative(m, y));
    var x = new r(), S = new r();
    this._mappings.unsortedForEach(function(b) {
      if (b.source === y && b.originalLine != null) {
        var C = u.originalPositionFor({
          line: b.originalLine,
          column: b.originalColumn
        });
        C.source != null && (b.source = C.source, h != null && (b.source = t.join(h, b.source)), m != null && (b.source = t.relative(m, b.source)), b.originalLine = C.line, b.originalColumn = C.column, C.name != null && (b.name = C.name));
      }
      var v = b.source;
      v != null && !x.has(v) && x.add(v);
      var _ = b.name;
      _ != null && !S.has(_) && S.add(_);
    }, this), this._sources = x, this._names = S, u.sources.forEach(function(b) {
      var C = u.sourceContentFor(b);
      C != null && (h != null && (b = t.join(h, b)), m != null && (b = t.relative(m, b)), this.setSourceContent(b, C));
    }, this);
  }, s.prototype._validateMapping = function(u, f, h, y) {
    if (f && typeof f.line != "number" && typeof f.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(u && "line" in u && "column" in u && u.line > 0 && u.column >= 0 && !f && !h && !y)) {
      if (u && "line" in u && "column" in u && f && "line" in f && "column" in f && u.line > 0 && u.column >= 0 && f.line > 0 && f.column >= 0 && h)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: u,
        source: h,
        original: f,
        name: y
      }));
    }
  }, s.prototype._serializeMappings = function() {
    for (var u = 0, f = 1, h = 0, y = 0, m = 0, x = 0, S = "", b, C, v, _, R = this._mappings.toArray(), N = 0, F = R.length; N < F; N++) {
      if (C = R[N], b = "", C.generatedLine !== f)
        for (u = 0; C.generatedLine !== f; )
          b += ";", f++;
      else if (N > 0) {
        if (!t.compareByGeneratedPositionsInflated(C, R[N - 1]))
          continue;
        b += ",";
      }
      b += e.encode(C.generatedColumn - u), u = C.generatedColumn, C.source != null && (_ = this._sources.indexOf(C.source), b += e.encode(_ - x), x = _, b += e.encode(C.originalLine - 1 - y), y = C.originalLine - 1, b += e.encode(C.originalColumn - h), h = C.originalColumn, C.name != null && (v = this._names.indexOf(C.name), b += e.encode(v - m), m = v)), S += b;
    }
    return S;
  }, s.prototype._generateSourcesContent = function(u, f) {
    return u.map(function(h) {
      if (!this._sourcesContents)
        return null;
      f != null && (h = t.relative(f, h));
      var y = t.toSetString(h);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, y) ? this._sourcesContents[y] : null;
    }, this);
  }, s.prototype.toJSON = function() {
    var u = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (u.file = this._file), this._sourceRoot != null && (u.sourceRoot = this._sourceRoot), this._sourcesContents && (u.sourcesContent = this._generateSourcesContent(u.sources, u.sourceRoot)), u;
  }, s.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, nr.SourceMapGenerator = s, nr;
}
var mt = {}, ur = {}, di;
function Rs() {
  return di || (di = 1, function(e) {
    e.GREATEST_LOWER_BOUND = 1, e.LEAST_UPPER_BOUND = 2;
    function t(r, i, s, a, u, f) {
      var h = Math.floor((i - r) / 2) + r, y = u(s, a[h], !0);
      return y === 0 ? h : y > 0 ? i - h > 1 ? t(h, i, s, a, u, f) : f == e.LEAST_UPPER_BOUND ? i < a.length ? i : -1 : h : h - r > 1 ? t(r, h, s, a, u, f) : f == e.LEAST_UPPER_BOUND ? h : r < 0 ? -1 : r;
    }
    e.search = function(i, s, a, u) {
      if (s.length === 0)
        return -1;
      var f = t(
        -1,
        s.length,
        i,
        s,
        a,
        u || e.GREATEST_LOWER_BOUND
      );
      if (f < 0)
        return -1;
      for (; f - 1 >= 0 && a(s[f], s[f - 1], !0) === 0; )
        --f;
      return f;
    };
  }(ur)), ur;
}
var lr = {}, mi;
function Ls() {
  if (mi)
    return lr;
  mi = 1;
  function e(i, s, a) {
    var u = i[s];
    i[s] = i[a], i[a] = u;
  }
  function t(i, s) {
    return Math.round(i + Math.random() * (s - i));
  }
  function r(i, s, a, u) {
    if (a < u) {
      var f = t(a, u), h = a - 1;
      e(i, f, u);
      for (var y = i[u], m = a; m < u; m++)
        s(i[m], y) <= 0 && (h += 1, e(i, h, m));
      e(i, h + 1, m);
      var x = h + 1;
      r(i, s, a, x - 1), r(i, s, x + 1, u);
    }
  }
  return lr.quickSort = function(i, s) {
    r(i, s, 0, i.length - 1);
  }, lr;
}
var gi;
function Ns() {
  if (gi)
    return mt;
  gi = 1;
  var e = Ct(), t = Rs(), r = zi().ArraySet, i = Wi(), s = Ls().quickSort;
  function a(y, m) {
    var x = y;
    return typeof y == "string" && (x = e.parseSourceMapInput(y)), x.sections != null ? new h(x, m) : new u(x, m);
  }
  a.fromSourceMap = function(y, m) {
    return u.fromSourceMap(y, m);
  }, a.prototype._version = 3, a.prototype.__generatedMappings = null, Object.defineProperty(a.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
    }
  }), a.prototype.__originalMappings = null, Object.defineProperty(a.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
    }
  }), a.prototype._charIsMappingSeparator = function(m, x) {
    var S = m.charAt(x);
    return S === ";" || S === ",";
  }, a.prototype._parseMappings = function(m, x) {
    throw new Error("Subclasses must implement _parseMappings");
  }, a.GENERATED_ORDER = 1, a.ORIGINAL_ORDER = 2, a.GREATEST_LOWER_BOUND = 1, a.LEAST_UPPER_BOUND = 2, a.prototype.eachMapping = function(m, x, S) {
    var b = x || null, C = S || a.GENERATED_ORDER, v;
    switch (C) {
      case a.GENERATED_ORDER:
        v = this._generatedMappings;
        break;
      case a.ORIGINAL_ORDER:
        v = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var _ = this.sourceRoot;
    v.map(function(R) {
      var N = R.source === null ? null : this._sources.at(R.source);
      return N = e.computeSourceURL(_, N, this._sourceMapURL), {
        source: N,
        generatedLine: R.generatedLine,
        generatedColumn: R.generatedColumn,
        originalLine: R.originalLine,
        originalColumn: R.originalColumn,
        name: R.name === null ? null : this._names.at(R.name)
      };
    }, this).forEach(m, b);
  }, a.prototype.allGeneratedPositionsFor = function(m) {
    var x = e.getArg(m, "line"), S = {
      source: e.getArg(m, "source"),
      originalLine: x,
      originalColumn: e.getArg(m, "column", 0)
    };
    if (S.source = this._findSourceIndex(S.source), S.source < 0)
      return [];
    var b = [], C = this._findMapping(
      S,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      e.compareByOriginalPositions,
      t.LEAST_UPPER_BOUND
    );
    if (C >= 0) {
      var v = this._originalMappings[C];
      if (m.column === void 0)
        for (var _ = v.originalLine; v && v.originalLine === _; )
          b.push({
            line: e.getArg(v, "generatedLine", null),
            column: e.getArg(v, "generatedColumn", null),
            lastColumn: e.getArg(v, "lastGeneratedColumn", null)
          }), v = this._originalMappings[++C];
      else
        for (var R = v.originalColumn; v && v.originalLine === x && v.originalColumn == R; )
          b.push({
            line: e.getArg(v, "generatedLine", null),
            column: e.getArg(v, "generatedColumn", null),
            lastColumn: e.getArg(v, "lastGeneratedColumn", null)
          }), v = this._originalMappings[++C];
    }
    return b;
  }, mt.SourceMapConsumer = a;
  function u(y, m) {
    var x = y;
    typeof y == "string" && (x = e.parseSourceMapInput(y));
    var S = e.getArg(x, "version"), b = e.getArg(x, "sources"), C = e.getArg(x, "names", []), v = e.getArg(x, "sourceRoot", null), _ = e.getArg(x, "sourcesContent", null), R = e.getArg(x, "mappings"), N = e.getArg(x, "file", null);
    if (S != this._version)
      throw new Error("Unsupported version: " + S);
    v && (v = e.normalize(v)), b = b.map(String).map(e.normalize).map(function(F) {
      return v && e.isAbsolute(v) && e.isAbsolute(F) ? e.relative(v, F) : F;
    }), this._names = r.fromArray(C.map(String), !0), this._sources = r.fromArray(b, !0), this._absoluteSources = this._sources.toArray().map(function(F) {
      return e.computeSourceURL(v, F, m);
    }), this.sourceRoot = v, this.sourcesContent = _, this._mappings = R, this._sourceMapURL = m, this.file = N;
  }
  u.prototype = Object.create(a.prototype), u.prototype.consumer = a, u.prototype._findSourceIndex = function(y) {
    var m = y;
    if (this.sourceRoot != null && (m = e.relative(this.sourceRoot, m)), this._sources.has(m))
      return this._sources.indexOf(m);
    var x;
    for (x = 0; x < this._absoluteSources.length; ++x)
      if (this._absoluteSources[x] == y)
        return x;
    return -1;
  }, u.fromSourceMap = function(m, x) {
    var S = Object.create(u.prototype), b = S._names = r.fromArray(m._names.toArray(), !0), C = S._sources = r.fromArray(m._sources.toArray(), !0);
    S.sourceRoot = m._sourceRoot, S.sourcesContent = m._generateSourcesContent(
      S._sources.toArray(),
      S.sourceRoot
    ), S.file = m._file, S._sourceMapURL = x, S._absoluteSources = S._sources.toArray().map(function(E) {
      return e.computeSourceURL(S.sourceRoot, E, x);
    });
    for (var v = m._mappings.toArray().slice(), _ = S.__generatedMappings = [], R = S.__originalMappings = [], N = 0, F = v.length; N < F; N++) {
      var w = v[N], p = new f();
      p.generatedLine = w.generatedLine, p.generatedColumn = w.generatedColumn, w.source && (p.source = C.indexOf(w.source), p.originalLine = w.originalLine, p.originalColumn = w.originalColumn, w.name && (p.name = b.indexOf(w.name)), R.push(p)), _.push(p);
    }
    return s(S.__originalMappings, e.compareByOriginalPositions), S;
  }, u.prototype._version = 3, Object.defineProperty(u.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function f() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  u.prototype._parseMappings = function(m, x) {
    for (var S = 1, b = 0, C = 0, v = 0, _ = 0, R = 0, N = m.length, F = 0, w = {}, p = {}, E = [], A = [], T, q, B, Y, z; F < N; )
      if (m.charAt(F) === ";")
        S++, F++, b = 0;
      else if (m.charAt(F) === ",")
        F++;
      else {
        for (T = new f(), T.generatedLine = S, Y = F; Y < N && !this._charIsMappingSeparator(m, Y); Y++)
          ;
        if (q = m.slice(F, Y), B = w[q], B)
          F += q.length;
        else {
          for (B = []; F < Y; )
            i.decode(m, F, p), z = p.value, F = p.rest, B.push(z);
          if (B.length === 2)
            throw new Error("Found a source, but no line and column");
          if (B.length === 3)
            throw new Error("Found a source and line, but no column");
          w[q] = B;
        }
        T.generatedColumn = b + B[0], b = T.generatedColumn, B.length > 1 && (T.source = _ + B[1], _ += B[1], T.originalLine = C + B[2], C = T.originalLine, T.originalLine += 1, T.originalColumn = v + B[3], v = T.originalColumn, B.length > 4 && (T.name = R + B[4], R += B[4])), A.push(T), typeof T.originalLine == "number" && E.push(T);
      }
    s(A, e.compareByGeneratedPositionsDeflated), this.__generatedMappings = A, s(E, e.compareByOriginalPositions), this.__originalMappings = E;
  }, u.prototype._findMapping = function(m, x, S, b, C, v) {
    if (m[S] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + m[S]);
    if (m[b] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + m[b]);
    return t.search(m, x, C, v);
  }, u.prototype.computeColumnSpans = function() {
    for (var m = 0; m < this._generatedMappings.length; ++m) {
      var x = this._generatedMappings[m];
      if (m + 1 < this._generatedMappings.length) {
        var S = this._generatedMappings[m + 1];
        if (x.generatedLine === S.generatedLine) {
          x.lastGeneratedColumn = S.generatedColumn - 1;
          continue;
        }
      }
      x.lastGeneratedColumn = 1 / 0;
    }
  }, u.prototype.originalPositionFor = function(m) {
    var x = {
      generatedLine: e.getArg(m, "line"),
      generatedColumn: e.getArg(m, "column")
    }, S = this._findMapping(
      x,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      e.compareByGeneratedPositionsDeflated,
      e.getArg(m, "bias", a.GREATEST_LOWER_BOUND)
    );
    if (S >= 0) {
      var b = this._generatedMappings[S];
      if (b.generatedLine === x.generatedLine) {
        var C = e.getArg(b, "source", null);
        C !== null && (C = this._sources.at(C), C = e.computeSourceURL(this.sourceRoot, C, this._sourceMapURL));
        var v = e.getArg(b, "name", null);
        return v !== null && (v = this._names.at(v)), {
          source: C,
          line: e.getArg(b, "originalLine", null),
          column: e.getArg(b, "originalColumn", null),
          name: v
        };
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, u.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(m) {
      return m == null;
    }) : !1;
  }, u.prototype.sourceContentFor = function(m, x) {
    if (!this.sourcesContent)
      return null;
    var S = this._findSourceIndex(m);
    if (S >= 0)
      return this.sourcesContent[S];
    var b = m;
    this.sourceRoot != null && (b = e.relative(this.sourceRoot, b));
    var C;
    if (this.sourceRoot != null && (C = e.urlParse(this.sourceRoot))) {
      var v = b.replace(/^file:\/\//, "");
      if (C.scheme == "file" && this._sources.has(v))
        return this.sourcesContent[this._sources.indexOf(v)];
      if ((!C.path || C.path == "/") && this._sources.has("/" + b))
        return this.sourcesContent[this._sources.indexOf("/" + b)];
    }
    if (x)
      return null;
    throw new Error('"' + b + '" is not in the SourceMap.');
  }, u.prototype.generatedPositionFor = function(m) {
    var x = e.getArg(m, "source");
    if (x = this._findSourceIndex(x), x < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var S = {
      source: x,
      originalLine: e.getArg(m, "line"),
      originalColumn: e.getArg(m, "column")
    }, b = this._findMapping(
      S,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      e.compareByOriginalPositions,
      e.getArg(m, "bias", a.GREATEST_LOWER_BOUND)
    );
    if (b >= 0) {
      var C = this._originalMappings[b];
      if (C.source === S.source)
        return {
          line: e.getArg(C, "generatedLine", null),
          column: e.getArg(C, "generatedColumn", null),
          lastColumn: e.getArg(C, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, mt.BasicSourceMapConsumer = u;
  function h(y, m) {
    var x = y;
    typeof y == "string" && (x = e.parseSourceMapInput(y));
    var S = e.getArg(x, "version"), b = e.getArg(x, "sections");
    if (S != this._version)
      throw new Error("Unsupported version: " + S);
    this._sources = new r(), this._names = new r();
    var C = {
      line: -1,
      column: 0
    };
    this._sections = b.map(function(v) {
      if (v.url)
        throw new Error("Support for url field in sections not implemented.");
      var _ = e.getArg(v, "offset"), R = e.getArg(_, "line"), N = e.getArg(_, "column");
      if (R < C.line || R === C.line && N < C.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return C = _, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: R + 1,
          generatedColumn: N + 1
        },
        consumer: new a(e.getArg(v, "map"), m)
      };
    });
  }
  return h.prototype = Object.create(a.prototype), h.prototype.constructor = a, h.prototype._version = 3, Object.defineProperty(h.prototype, "sources", {
    get: function() {
      for (var y = [], m = 0; m < this._sections.length; m++)
        for (var x = 0; x < this._sections[m].consumer.sources.length; x++)
          y.push(this._sections[m].consumer.sources[x]);
      return y;
    }
  }), h.prototype.originalPositionFor = function(m) {
    var x = {
      generatedLine: e.getArg(m, "line"),
      generatedColumn: e.getArg(m, "column")
    }, S = t.search(
      x,
      this._sections,
      function(C, v) {
        var _ = C.generatedLine - v.generatedOffset.generatedLine;
        return _ || C.generatedColumn - v.generatedOffset.generatedColumn;
      }
    ), b = this._sections[S];
    return b ? b.consumer.originalPositionFor({
      line: x.generatedLine - (b.generatedOffset.generatedLine - 1),
      column: x.generatedColumn - (b.generatedOffset.generatedLine === x.generatedLine ? b.generatedOffset.generatedColumn - 1 : 0),
      bias: m.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, h.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(m) {
      return m.consumer.hasContentsOfAllSources();
    });
  }, h.prototype.sourceContentFor = function(m, x) {
    for (var S = 0; S < this._sections.length; S++) {
      var b = this._sections[S], C = b.consumer.sourceContentFor(m, !0);
      if (C)
        return C;
    }
    if (x)
      return null;
    throw new Error('"' + m + '" is not in the SourceMap.');
  }, h.prototype.generatedPositionFor = function(m) {
    for (var x = 0; x < this._sections.length; x++) {
      var S = this._sections[x];
      if (S.consumer._findSourceIndex(e.getArg(m, "source")) !== -1) {
        var b = S.consumer.generatedPositionFor(m);
        if (b) {
          var C = {
            line: b.line + (S.generatedOffset.generatedLine - 1),
            column: b.column + (S.generatedOffset.generatedLine === b.line ? S.generatedOffset.generatedColumn - 1 : 0)
          };
          return C;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, h.prototype._parseMappings = function(m, x) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var S = 0; S < this._sections.length; S++)
      for (var b = this._sections[S], C = b.consumer._generatedMappings, v = 0; v < C.length; v++) {
        var _ = C[v], R = b.consumer._sources.at(_.source);
        R = e.computeSourceURL(b.consumer.sourceRoot, R, this._sourceMapURL), this._sources.add(R), R = this._sources.indexOf(R);
        var N = null;
        _.name && (N = b.consumer._names.at(_.name), this._names.add(N), N = this._names.indexOf(N));
        var F = {
          source: R,
          generatedLine: _.generatedLine + (b.generatedOffset.generatedLine - 1),
          generatedColumn: _.generatedColumn + (b.generatedOffset.generatedLine === _.generatedLine ? b.generatedOffset.generatedColumn - 1 : 0),
          originalLine: _.originalLine,
          originalColumn: _.originalColumn,
          name: N
        };
        this.__generatedMappings.push(F), typeof F.originalLine == "number" && this.__originalMappings.push(F);
      }
    s(this.__generatedMappings, e.compareByGeneratedPositionsDeflated), s(this.__originalMappings, e.compareByOriginalPositions);
  }, mt.IndexedSourceMapConsumer = h, mt;
}
var cr = {}, yi;
function Ms() {
  if (yi)
    return cr;
  yi = 1;
  var e = Gi().SourceMapGenerator, t = Ct(), r = /(\r?\n)/, i = 10, s = "$$$isSourceNode$$$";
  function a(u, f, h, y, m) {
    this.children = [], this.sourceContents = {}, this.line = u ?? null, this.column = f ?? null, this.source = h ?? null, this.name = m ?? null, this[s] = !0, y != null && this.add(y);
  }
  return a.fromStringWithSourceMap = function(f, h, y) {
    var m = new a(), x = f.split(r), S = 0, b = function() {
      var N = w(), F = w() || "";
      return N + F;
      function w() {
        return S < x.length ? x[S++] : void 0;
      }
    }, C = 1, v = 0, _ = null;
    return h.eachMapping(function(N) {
      if (_ !== null)
        if (C < N.generatedLine)
          R(_, b()), C++, v = 0;
        else {
          var F = x[S] || "", w = F.substr(0, N.generatedColumn - v);
          x[S] = F.substr(N.generatedColumn - v), v = N.generatedColumn, R(_, w), _ = N;
          return;
        }
      for (; C < N.generatedLine; )
        m.add(b()), C++;
      if (v < N.generatedColumn) {
        var F = x[S] || "";
        m.add(F.substr(0, N.generatedColumn)), x[S] = F.substr(N.generatedColumn), v = N.generatedColumn;
      }
      _ = N;
    }, this), S < x.length && (_ && R(_, b()), m.add(x.splice(S).join(""))), h.sources.forEach(function(N) {
      var F = h.sourceContentFor(N);
      F != null && (y != null && (N = t.join(y, N)), m.setSourceContent(N, F));
    }), m;
    function R(N, F) {
      if (N === null || N.source === void 0)
        m.add(F);
      else {
        var w = y ? t.join(y, N.source) : N.source;
        m.add(new a(
          N.originalLine,
          N.originalColumn,
          w,
          F,
          N.name
        ));
      }
    }
  }, a.prototype.add = function(f) {
    if (Array.isArray(f))
      f.forEach(function(h) {
        this.add(h);
      }, this);
    else if (f[s] || typeof f == "string")
      f && this.children.push(f);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + f
      );
    return this;
  }, a.prototype.prepend = function(f) {
    if (Array.isArray(f))
      for (var h = f.length - 1; h >= 0; h--)
        this.prepend(f[h]);
    else if (f[s] || typeof f == "string")
      this.children.unshift(f);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + f
      );
    return this;
  }, a.prototype.walk = function(f) {
    for (var h, y = 0, m = this.children.length; y < m; y++)
      h = this.children[y], h[s] ? h.walk(f) : h !== "" && f(h, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, a.prototype.join = function(f) {
    var h, y, m = this.children.length;
    if (m > 0) {
      for (h = [], y = 0; y < m - 1; y++)
        h.push(this.children[y]), h.push(f);
      h.push(this.children[y]), this.children = h;
    }
    return this;
  }, a.prototype.replaceRight = function(f, h) {
    var y = this.children[this.children.length - 1];
    return y[s] ? y.replaceRight(f, h) : typeof y == "string" ? this.children[this.children.length - 1] = y.replace(f, h) : this.children.push("".replace(f, h)), this;
  }, a.prototype.setSourceContent = function(f, h) {
    this.sourceContents[t.toSetString(f)] = h;
  }, a.prototype.walkSourceContents = function(f) {
    for (var h = 0, y = this.children.length; h < y; h++)
      this.children[h][s] && this.children[h].walkSourceContents(f);
    for (var m = Object.keys(this.sourceContents), h = 0, y = m.length; h < y; h++)
      f(t.fromSetString(m[h]), this.sourceContents[m[h]]);
  }, a.prototype.toString = function() {
    var f = "";
    return this.walk(function(h) {
      f += h;
    }), f;
  }, a.prototype.toStringWithSourceMap = function(f) {
    var h = {
      code: "",
      line: 1,
      column: 0
    }, y = new e(f), m = !1, x = null, S = null, b = null, C = null;
    return this.walk(function(v, _) {
      h.code += v, _.source !== null && _.line !== null && _.column !== null ? ((x !== _.source || S !== _.line || b !== _.column || C !== _.name) && y.addMapping({
        source: _.source,
        original: {
          line: _.line,
          column: _.column
        },
        generated: {
          line: h.line,
          column: h.column
        },
        name: _.name
      }), x = _.source, S = _.line, b = _.column, C = _.name, m = !0) : m && (y.addMapping({
        generated: {
          line: h.line,
          column: h.column
        }
      }), x = null, m = !1);
      for (var R = 0, N = v.length; R < N; R++)
        v.charCodeAt(R) === i ? (h.line++, h.column = 0, R + 1 === N ? (x = null, m = !1) : m && y.addMapping({
          source: _.source,
          original: {
            line: _.line,
            column: _.column
          },
          generated: {
            line: h.line,
            column: h.column
          },
          name: _.name
        })) : h.column++;
    }), this.walkSourceContents(function(v, _) {
      y.setSourceContent(v, _);
    }), { code: h.code, map: y };
  }, cr.SourceNode = a, cr;
}
var vi;
function Fs() {
  return vi || (vi = 1, dt.SourceMapGenerator = Gi().SourceMapGenerator, dt.SourceMapConsumer = Ns().SourceMapConsumer, dt.SourceNode = Ms().SourceNode), dt;
}
const Ds = "escodegen", Bs = "ECMAScript code generator", js = "http://github.com/estools/escodegen", Vs = "escodegen.js", qs = {
  esgenerate: "./bin/esgenerate.js",
  escodegen: "./bin/escodegen.js"
}, Us = [
  "LICENSE.BSD",
  "README.md",
  "bin",
  "escodegen.js",
  "package.json"
], $s = "2.1.0", Ws = {
  node: ">=6.0"
}, zs = [
  {
    name: "Yusuke Suzuki",
    email: "utatane.tea@gmail.com",
    web: "http://github.com/Constellation"
  }
], Gs = {
  type: "git",
  url: "http://github.com/estools/escodegen.git"
}, Ys = {
  estraverse: "^5.2.0",
  esutils: "^2.0.2",
  esprima: "^4.0.1"
}, Js = {
  "source-map": "~0.6.1"
}, Xs = {
  acorn: "^8.0.4",
  bluebird: "^3.4.7",
  "bower-registry-client": "^1.0.0",
  chai: "^4.2.0",
  "chai-exclude": "^2.0.2",
  "commonjs-everywhere": "^0.9.7",
  gulp: "^4.0.2",
  "gulp-eslint": "^6.0.0",
  "gulp-mocha": "^7.0.2",
  minimist: "^1.2.5",
  optionator: "^0.9.1",
  semver: "^7.3.4"
}, Hs = "BSD-2-Clause", Qs = {
  test: "gulp travis",
  "unit-test": "gulp test",
  lint: "gulp lint",
  release: "node tools/release.js",
  "build-min": "./node_modules/.bin/cjsify -ma path: tools/entry-point.js > escodegen.browser.min.js",
  build: "./node_modules/.bin/cjsify -a path: tools/entry-point.js > escodegen.browser.js"
}, Ks = {
  name: Ds,
  description: Bs,
  homepage: js,
  main: Vs,
  bin: qs,
  files: Us,
  version: $s,
  engines: Ws,
  maintainers: zs,
  repository: Gs,
  dependencies: Ys,
  optionalDependencies: Js,
  devDependencies: Xs,
  license: Hs,
  scripts: Qs
};
(function(e) {
  (function() {
    var t, r, i, s, a, u, f, h, y, m, x, S, b, C, v, _, R, N, F, w, p, E, A, T, q, B;
    a = $i, u = ns, t = a.Syntax;
    function Y(n) {
      return _e.Expression.hasOwnProperty(n.type);
    }
    function z(n) {
      return _e.Statement.hasOwnProperty(n.type);
    }
    r = {
      Sequence: 0,
      Yield: 1,
      Assignment: 1,
      Conditional: 2,
      ArrowFunction: 2,
      Coalesce: 3,
      LogicalOR: 4,
      LogicalAND: 5,
      BitwiseOR: 6,
      BitwiseXOR: 7,
      BitwiseAND: 8,
      Equality: 9,
      Relational: 10,
      BitwiseSHIFT: 11,
      Additive: 12,
      Multiplicative: 13,
      Exponentiation: 14,
      Await: 15,
      Unary: 15,
      Postfix: 16,
      OptionalChaining: 17,
      Call: 18,
      New: 19,
      TaggedTemplate: 20,
      Member: 21,
      Primary: 22
    }, i = {
      "??": r.Coalesce,
      "||": r.LogicalOR,
      "&&": r.LogicalAND,
      "|": r.BitwiseOR,
      "^": r.BitwiseXOR,
      "&": r.BitwiseAND,
      "==": r.Equality,
      "!=": r.Equality,
      "===": r.Equality,
      "!==": r.Equality,
      is: r.Equality,
      isnt: r.Equality,
      "<": r.Relational,
      ">": r.Relational,
      "<=": r.Relational,
      ">=": r.Relational,
      in: r.Relational,
      instanceof: r.Relational,
      "<<": r.BitwiseSHIFT,
      ">>": r.BitwiseSHIFT,
      ">>>": r.BitwiseSHIFT,
      "+": r.Additive,
      "-": r.Additive,
      "*": r.Multiplicative,
      "%": r.Multiplicative,
      "/": r.Multiplicative,
      "**": r.Exponentiation
    };
    var U = 1, K = 2, ye = 4, fe = 8, ue = 16, ee = 32, Ee = 64, O = K | ye, V = U | K, I = U | K | ye, Q = U, X = ye, Z = U | ye, $ = U, J = U | ee, re = 0, le = U | ue, ne = U | fe;
    function Ce() {
      return {
        indent: null,
        base: null,
        parse: null,
        comment: !1,
        format: {
          indent: {
            style: "    ",
            base: 0,
            adjustMultilineComment: !1
          },
          newline: `
`,
          space: " ",
          json: !1,
          renumber: !1,
          hexadecimal: !1,
          quotes: "single",
          escapeless: !1,
          compact: !1,
          parentheses: !0,
          semicolons: !0,
          safeConcatenation: !1,
          preserveBlankLines: !1
        },
        moz: {
          comprehensionExpressionStartsWithAssignment: !1,
          starlessGenerator: !1
        },
        sourceMap: null,
        sourceMapRoot: null,
        sourceMapWithCode: !1,
        directive: !1,
        raw: !0,
        verbatim: null,
        sourceCode: null
      };
    }
    function D(n, l) {
      var o = "";
      for (l |= 0; l > 0; l >>>= 1, n += n)
        l & 1 && (o += n);
      return o;
    }
    function Oe(n) {
      return /[\r\n]/g.test(n);
    }
    function j(n) {
      var l = n.length;
      return l && u.code.isLineTerminator(n.charCodeAt(l - 1));
    }
    function Ue(n, l) {
      var o;
      for (o in l)
        l.hasOwnProperty(o) && (n[o] = l[o]);
      return n;
    }
    function $e(n, l) {
      var o, c;
      function g(k) {
        return typeof k == "object" && k instanceof Object && !(k instanceof RegExp);
      }
      for (o in l)
        l.hasOwnProperty(o) && (c = l[o], g(c) ? g(n[o]) ? $e(n[o], c) : n[o] = $e({}, c) : n[o] = c);
      return n;
    }
    function Pt(n) {
      var l, o, c, g, k;
      if (n !== n)
        throw new Error("Numeric literal whose value is NaN");
      if (n < 0 || n === 0 && 1 / n < 0)
        throw new Error("Numeric literal whose value is negative");
      if (n === 1 / 0)
        return y ? "null" : m ? "1e400" : "1e+400";
      if (l = "" + n, !m || l.length < 3)
        return l;
      for (o = l.indexOf("."), !y && l.charCodeAt(0) === 48 && o === 1 && (o = 0, l = l.slice(1)), c = l, l = l.replace("e+", "e"), g = 0, (k = c.indexOf("e")) > 0 && (g = +c.slice(k + 1), c = c.slice(0, k)), o >= 0 && (g -= c.length - o - 1, c = +(c.slice(0, o) + c.slice(o + 1)) + ""), k = 0; c.charCodeAt(c.length + k - 1) === 48; )
        --k;
      return k !== 0 && (g -= k, c = c.slice(0, k)), g !== 0 && (c += "e" + g), (c.length < l.length || x && n > 1e12 && Math.floor(n) === n && (c = "0x" + n.toString(16)).length < l.length) && +c === n && (l = c), l;
    }
    function Vr(n, l) {
      return (n & -2) === 8232 ? (l ? "u" : "\\u") + (n === 8232 ? "2028" : "2029") : n === 10 || n === 13 ? (l ? "" : "\\") + (n === 10 ? "n" : "r") : String.fromCharCode(n);
    }
    function Yn(n) {
      var l, o, c, g, k, P, L, W;
      if (o = n.toString(), n.source) {
        if (l = o.match(/\/([^/]*)$/), !l)
          return o;
        for (c = l[1], o = "", L = !1, W = !1, g = 0, k = n.source.length; g < k; ++g)
          P = n.source.charCodeAt(g), W ? (o += Vr(P, W), W = !1) : (L ? P === 93 && (L = !1) : P === 47 ? o += "\\" : P === 91 && (L = !0), o += Vr(P, W), W = P === 92);
        return "/" + o + "/" + c;
      }
      return o;
    }
    function Jn(n, l) {
      var o;
      return n === 8 ? "\\b" : n === 12 ? "\\f" : n === 9 ? "\\t" : (o = n.toString(16).toUpperCase(), y || n > 255 ? "\\u" + "0000".slice(o.length) + o : n === 0 && !u.code.isDecimalDigit(l) ? "\\0" : n === 11 ? "\\x0B" : "\\x" + "00".slice(o.length) + o);
    }
    function Xn(n) {
      if (n === 92)
        return "\\\\";
      if (n === 10)
        return "\\n";
      if (n === 13)
        return "\\r";
      if (n === 8232)
        return "\\u2028";
      if (n === 8233)
        return "\\u2029";
      throw new Error("Incorrectly classified character");
    }
    function Hn(n) {
      var l, o, c, g;
      for (g = S === "double" ? '"' : "'", l = 0, o = n.length; l < o; ++l)
        if (c = n.charCodeAt(l), c === 39) {
          g = '"';
          break;
        } else if (c === 34) {
          g = "'";
          break;
        } else
          c === 92 && ++l;
      return g + n + g;
    }
    function Qn(n) {
      var l = "", o, c, g, k = 0, P = 0, L, W;
      for (o = 0, c = n.length; o < c; ++o) {
        if (g = n.charCodeAt(o), g === 39)
          ++k;
        else if (g === 34)
          ++P;
        else if (g === 47 && y)
          l += "\\";
        else if (u.code.isLineTerminator(g) || g === 92) {
          l += Xn(g);
          continue;
        } else if (!u.code.isIdentifierPartES5(g) && (y && g < 32 || !y && !b && (g < 32 || g > 126))) {
          l += Jn(g, n.charCodeAt(o + 1));
          continue;
        }
        l += String.fromCharCode(g);
      }
      if (L = !(S === "double" || S === "auto" && P < k), W = L ? "'" : '"', !(L ? k : P))
        return W + l + W;
      for (n = l, l = W, o = 0, c = n.length; o < c; ++o)
        g = n.charCodeAt(o), (g === 39 && L || g === 34 && !L) && (l += "\\"), l += String.fromCharCode(g);
      return l + W;
    }
    function qr(n) {
      var l, o, c, g = "";
      for (l = 0, o = n.length; l < o; ++l)
        c = n[l], g += Array.isArray(c) ? qr(c) : c;
      return g;
    }
    function he(n, l) {
      if (!E)
        return Array.isArray(n) ? qr(n) : n;
      if (l == null) {
        if (n instanceof s)
          return n;
        l = {};
      }
      return l.loc == null ? new s(null, null, E, n, l.name || null) : new s(l.loc.start.line, l.loc.start.column, E === !0 ? l.loc.source || null : E, n, l.name || null);
    }
    function Te() {
      return v || " ";
    }
    function H(n, l) {
      var o, c, g, k;
      return o = he(n).toString(), o.length === 0 ? [l] : (c = he(l).toString(), c.length === 0 ? [n] : (g = o.charCodeAt(o.length - 1), k = c.charCodeAt(0), (g === 43 || g === 45) && g === k || u.code.isIdentifierPartES5(g) && u.code.isIdentifierPartES5(k) || g === 47 && k === 105 ? [n, Te(), l] : u.code.isWhiteSpace(g) || u.code.isLineTerminator(g) || u.code.isWhiteSpace(k) || u.code.isLineTerminator(k) ? [n, l] : [n, v, l]));
    }
    function ke(n) {
      return [f, n];
    }
    function Se(n) {
      var l;
      l = f, f += h, n(f), f = l;
    }
    function Kn(n) {
      var l;
      for (l = n.length - 1; l >= 0 && !u.code.isLineTerminator(n.charCodeAt(l)); --l)
        ;
      return n.length - 1 - l;
    }
    function Zn(n, l) {
      var o, c, g, k, P, L, W, ae;
      for (o = n.split(/\r\n|[\r\n]/), L = Number.MAX_VALUE, c = 1, g = o.length; c < g; ++c) {
        for (k = o[c], P = 0; P < k.length && u.code.isWhiteSpace(k.charCodeAt(P)); )
          ++P;
        L > P && (L = P);
      }
      for (typeof l < "u" ? (W = f, o[1][L] === "*" && (l += " "), f = l) : (L & 1 && --L, W = f), c = 1, g = o.length; c < g; ++c)
        ae = he(ke(o[c].slice(L))), o[c] = E ? ae.join("") : ae;
      return f = W, o.join(`
`);
    }
    function We(n, l) {
      if (n.type === "Line") {
        if (j(n.value))
          return "//" + n.value;
        var o = "//" + n.value;
        return T || (o += `
`), o;
      }
      return w.format.indent.adjustMultilineComment && /[\n\r]/.test(n.value) ? Zn("/*" + n.value + "*/", l) : "/*" + n.value + "*/";
    }
    function Ur(n, l) {
      var o, c, g, k, P, L, W, ae, we, et, at, zr, Gr, je;
      if (n.leadingComments && n.leadingComments.length > 0) {
        if (k = l, T) {
          for (g = n.leadingComments[0], l = [], ae = g.extendedRange, we = g.range, at = A.substring(ae[0], we[0]), je = (at.match(/\n/g) || []).length, je > 0 ? (l.push(D(`
`, je)), l.push(ke(We(g)))) : (l.push(at), l.push(We(g))), et = we, o = 1, c = n.leadingComments.length; o < c; o++)
            g = n.leadingComments[o], we = g.range, zr = A.substring(et[1], we[0]), je = (zr.match(/\n/g) || []).length, l.push(D(`
`, je)), l.push(ke(We(g))), et = we;
          Gr = A.substring(we[1], ae[1]), je = (Gr.match(/\n/g) || []).length, l.push(D(`
`, je));
        } else
          for (g = n.leadingComments[0], l = [], N && n.type === t.Program && n.body.length === 0 && l.push(`
`), l.push(We(g)), j(he(l).toString()) || l.push(`
`), o = 1, c = n.leadingComments.length; o < c; ++o)
            g = n.leadingComments[o], W = [We(g)], j(he(W).toString()) || W.push(`
`), l.push(ke(W));
        l.push(ke(k));
      }
      if (n.trailingComments)
        if (T)
          g = n.trailingComments[0], ae = g.extendedRange, we = g.range, at = A.substring(ae[0], we[0]), je = (at.match(/\n/g) || []).length, je > 0 ? (l.push(D(`
`, je)), l.push(ke(We(g)))) : (l.push(at), l.push(We(g)));
        else
          for (P = !j(he(l).toString()), L = D(" ", Kn(he([f, l, h]).toString())), o = 0, c = n.trailingComments.length; o < c; ++o)
            g = n.trailingComments[o], P ? (o === 0 ? l = [l, h] : l = [l, L], l.push(We(g, L))) : l = [l, ke(We(g))], o !== c - 1 && !j(he(l).toString()) && (l = [l, `
`]);
      return l;
    }
    function st(n, l, o) {
      var c, g = 0;
      for (c = n; c < l; c++)
        A[c] === `
` && g++;
      for (c = 1; c < g; c++)
        o.push(C);
    }
    function Ae(n, l, o) {
      return l < o ? ["(", n, ")"] : n;
    }
    function $r(n) {
      var l, o, c;
      for (c = n.split(/\r\n|\n/), l = 1, o = c.length; l < o; l++)
        c[l] = C + f + c[l];
      return c;
    }
    function es(n, l) {
      var o, c, g;
      return o = n[w.verbatim], typeof o == "string" ? c = Ae($r(o), r.Sequence, l) : (c = $r(o.content), g = o.precedence != null ? o.precedence : r.Sequence, c = Ae(c, g, l)), he(c, n);
    }
    function _e() {
    }
    _e.prototype.maybeBlock = function(n, l) {
      var o, c, g = this;
      return c = !w.comment || !n.leadingComments, n.type === t.BlockStatement && c ? [v, this.generateStatement(n, l)] : n.type === t.EmptyStatement && c ? ";" : (Se(function() {
        o = [
          C,
          ke(g.generateStatement(n, l))
        ];
      }), o);
    }, _e.prototype.maybeBlockSuffix = function(n, l) {
      var o = j(he(l).toString());
      return n.type === t.BlockStatement && (!w.comment || !n.leadingComments) && !o ? [l, v] : o ? [l, f] : [l, C, f];
    };
    function Re(n) {
      return he(n.name, n);
    }
    function pt(n, l) {
      return n.async ? "async" + (l ? Te() : v) : "";
    }
    function It(n) {
      var l = n.generator && !w.moz.starlessGenerator;
      return l ? "*" + v : "";
    }
    function Wr(n) {
      var l = n.value, o = "";
      return l.async && (o += pt(l, !n.computed)), l.generator && (o += It(l) ? "*" : ""), o;
    }
    _e.prototype.generatePattern = function(n, l, o) {
      return n.type === t.Identifier ? Re(n) : this.generateExpression(n, l, o);
    }, _e.prototype.generateFunctionParams = function(n) {
      var l, o, c, g;
      if (g = !1, n.type === t.ArrowFunctionExpression && !n.rest && (!n.defaults || n.defaults.length === 0) && n.params.length === 1 && n.params[0].type === t.Identifier)
        c = [pt(n, !0), Re(n.params[0])];
      else {
        for (c = n.type === t.ArrowFunctionExpression ? [pt(n, !1)] : [], c.push("("), n.defaults && (g = !0), l = 0, o = n.params.length; l < o; ++l)
          g && n.defaults[l] ? c.push(this.generateAssignment(n.params[l], n.defaults[l], "=", r.Assignment, I)) : c.push(this.generatePattern(n.params[l], r.Assignment, I)), l + 1 < o && c.push("," + v);
        n.rest && (n.params.length && c.push("," + v), c.push("..."), c.push(Re(n.rest))), c.push(")");
      }
      return c;
    }, _e.prototype.generateFunctionBody = function(n) {
      var l, o;
      return l = this.generateFunctionParams(n), n.type === t.ArrowFunctionExpression && (l.push(v), l.push("=>")), n.expression ? (l.push(v), o = this.generateExpression(n.body, r.Assignment, I), o.toString().charAt(0) === "{" && (o = ["(", o, ")"]), l.push(o)) : l.push(this.maybeBlock(n.body, ne)), l;
    }, _e.prototype.generateIterationForStatement = function(n, l, o) {
      var c = ["for" + (l.await ? Te() + "await" : "") + v + "("], g = this;
      return Se(function() {
        l.left.type === t.VariableDeclaration ? Se(function() {
          c.push(l.left.kind + Te()), c.push(g.generateStatement(l.left.declarations[0], re));
        }) : c.push(g.generateExpression(l.left, r.Call, I)), c = H(c, n), c = [H(
          c,
          g.generateExpression(l.right, r.Assignment, I)
        ), ")"];
      }), c.push(this.maybeBlock(l.body, o)), c;
    }, _e.prototype.generatePropertyKey = function(n, l) {
      var o = [];
      return l && o.push("["), o.push(this.generateExpression(n, r.Assignment, I)), l && o.push("]"), o;
    }, _e.prototype.generateAssignment = function(n, l, o, c, g) {
      return r.Assignment < c && (g |= U), Ae(
        [
          this.generateExpression(n, r.Call, g),
          v + o + v,
          this.generateExpression(l, r.Assignment, g)
        ],
        r.Assignment,
        c
      );
    }, _e.prototype.semicolon = function(n) {
      return !R && n & ee ? "" : ";";
    }, _e.Statement = {
      BlockStatement: function(n, l) {
        var o, c, g = ["{", C], k = this;
        return Se(function() {
          n.body.length === 0 && T && (o = n.range, o[1] - o[0] > 2 && (c = A.substring(o[0] + 1, o[1] - 1), c[0] === `
` && (g = ["{"]), g.push(c)));
          var P, L, W, ae;
          for (ae = $, l & fe && (ae |= ue), P = 0, L = n.body.length; P < L; ++P)
            T && (P === 0 && (n.body[0].leadingComments && (o = n.body[0].leadingComments[0].extendedRange, c = A.substring(o[0], o[1]), c[0] === `
` && (g = ["{"])), n.body[0].leadingComments || st(n.range[0], n.body[0].range[0], g)), P > 0 && !n.body[P - 1].trailingComments && !n.body[P].leadingComments && st(n.body[P - 1].range[1], n.body[P].range[0], g)), P === L - 1 && (ae |= ee), n.body[P].leadingComments && T ? W = k.generateStatement(n.body[P], ae) : W = ke(k.generateStatement(n.body[P], ae)), g.push(W), j(he(W).toString()) || T && P < L - 1 && n.body[P + 1].leadingComments || g.push(C), T && P === L - 1 && (n.body[P].trailingComments || st(n.body[P].range[1], n.range[1], g));
        }), g.push(ke("}")), g;
      },
      BreakStatement: function(n, l) {
        return n.label ? "break " + n.label.name + this.semicolon(l) : "break" + this.semicolon(l);
      },
      ContinueStatement: function(n, l) {
        return n.label ? "continue " + n.label.name + this.semicolon(l) : "continue" + this.semicolon(l);
      },
      ClassBody: function(n, l) {
        var o = ["{", C], c = this;
        return Se(function(g) {
          var k, P;
          for (k = 0, P = n.body.length; k < P; ++k)
            o.push(g), o.push(c.generateExpression(n.body[k], r.Sequence, I)), k + 1 < P && o.push(C);
        }), j(he(o).toString()) || o.push(C), o.push(f), o.push("}"), o;
      },
      ClassDeclaration: function(n, l) {
        var o, c;
        return o = ["class"], n.id && (o = H(o, this.generateExpression(n.id, r.Sequence, I))), n.superClass && (c = H("extends", this.generateExpression(n.superClass, r.Unary, I)), o = H(o, c)), o.push(v), o.push(this.generateStatement(n.body, J)), o;
      },
      DirectiveStatement: function(n, l) {
        return w.raw && n.raw ? n.raw + this.semicolon(l) : Hn(n.directive) + this.semicolon(l);
      },
      DoWhileStatement: function(n, l) {
        var o = H("do", this.maybeBlock(n.body, $));
        return o = this.maybeBlockSuffix(n.body, o), H(o, [
          "while" + v + "(",
          this.generateExpression(n.test, r.Sequence, I),
          ")" + this.semicolon(l)
        ]);
      },
      CatchClause: function(n, l) {
        var o, c = this;
        return Se(function() {
          var g;
          n.param ? (o = [
            "catch" + v + "(",
            c.generateExpression(n.param, r.Sequence, I),
            ")"
          ], n.guard && (g = c.generateExpression(n.guard, r.Sequence, I), o.splice(2, 0, " if ", g))) : o = ["catch"];
        }), o.push(this.maybeBlock(n.body, $)), o;
      },
      DebuggerStatement: function(n, l) {
        return "debugger" + this.semicolon(l);
      },
      EmptyStatement: function(n, l) {
        return ";";
      },
      ExportDefaultDeclaration: function(n, l) {
        var o = ["export"], c;
        return c = l & ee ? J : $, o = H(o, "default"), z(n.declaration) ? o = H(o, this.generateStatement(n.declaration, c)) : o = H(o, this.generateExpression(n.declaration, r.Assignment, I) + this.semicolon(l)), o;
      },
      ExportNamedDeclaration: function(n, l) {
        var o = ["export"], c, g = this;
        return c = l & ee ? J : $, n.declaration ? H(o, this.generateStatement(n.declaration, c)) : (n.specifiers && (n.specifiers.length === 0 ? o = H(o, "{" + v + "}") : n.specifiers[0].type === t.ExportBatchSpecifier ? o = H(o, this.generateExpression(n.specifiers[0], r.Sequence, I)) : (o = H(o, "{"), Se(function(k) {
          var P, L;
          for (o.push(C), P = 0, L = n.specifiers.length; P < L; ++P)
            o.push(k), o.push(g.generateExpression(n.specifiers[P], r.Sequence, I)), P + 1 < L && o.push("," + C);
        }), j(he(o).toString()) || o.push(C), o.push(f + "}")), n.source ? o = H(o, [
          "from" + v,
          // ModuleSpecifier
          this.generateExpression(n.source, r.Sequence, I),
          this.semicolon(l)
        ]) : o.push(this.semicolon(l))), o);
      },
      ExportAllDeclaration: function(n, l) {
        return [
          "export" + v,
          "*" + v,
          "from" + v,
          // ModuleSpecifier
          this.generateExpression(n.source, r.Sequence, I),
          this.semicolon(l)
        ];
      },
      ExpressionStatement: function(n, l) {
        var o, c;
        function g(L) {
          var W;
          return L.slice(0, 5) !== "class" ? !1 : (W = L.charCodeAt(5), W === 123 || u.code.isWhiteSpace(W) || u.code.isLineTerminator(W));
        }
        function k(L) {
          var W;
          return L.slice(0, 8) !== "function" ? !1 : (W = L.charCodeAt(8), W === 40 || u.code.isWhiteSpace(W) || W === 42 || u.code.isLineTerminator(W));
        }
        function P(L) {
          var W, ae, we;
          if (L.slice(0, 5) !== "async" || !u.code.isWhiteSpace(L.charCodeAt(5)))
            return !1;
          for (ae = 6, we = L.length; ae < we && u.code.isWhiteSpace(L.charCodeAt(ae)); ++ae)
            ;
          return ae === we || L.slice(ae, ae + 8) !== "function" ? !1 : (W = L.charCodeAt(ae + 8), W === 40 || u.code.isWhiteSpace(W) || W === 42 || u.code.isLineTerminator(W));
        }
        return o = [this.generateExpression(n.expression, r.Sequence, I)], c = he(o).toString(), c.charCodeAt(0) === 123 || // ObjectExpression
        g(c) || k(c) || P(c) || F && l & ue && n.expression.type === t.Literal && typeof n.expression.value == "string" ? o = ["(", o, ")" + this.semicolon(l)] : o.push(this.semicolon(l)), o;
      },
      ImportDeclaration: function(n, l) {
        var o, c, g = this;
        return n.specifiers.length === 0 ? [
          "import",
          v,
          // ModuleSpecifier
          this.generateExpression(n.source, r.Sequence, I),
          this.semicolon(l)
        ] : (o = [
          "import"
        ], c = 0, n.specifiers[c].type === t.ImportDefaultSpecifier && (o = H(o, [
          this.generateExpression(n.specifiers[c], r.Sequence, I)
        ]), ++c), n.specifiers[c] && (c !== 0 && o.push(","), n.specifiers[c].type === t.ImportNamespaceSpecifier ? o = H(o, [
          v,
          this.generateExpression(n.specifiers[c], r.Sequence, I)
        ]) : (o.push(v + "{"), n.specifiers.length - c === 1 ? (o.push(v), o.push(this.generateExpression(n.specifiers[c], r.Sequence, I)), o.push(v + "}" + v)) : (Se(function(k) {
          var P, L;
          for (o.push(C), P = c, L = n.specifiers.length; P < L; ++P)
            o.push(k), o.push(g.generateExpression(n.specifiers[P], r.Sequence, I)), P + 1 < L && o.push("," + C);
        }), j(he(o).toString()) || o.push(C), o.push(f + "}" + v)))), o = H(o, [
          "from" + v,
          // ModuleSpecifier
          this.generateExpression(n.source, r.Sequence, I),
          this.semicolon(l)
        ]), o);
      },
      VariableDeclarator: function(n, l) {
        var o = l & U ? I : O;
        return n.init ? [
          this.generateExpression(n.id, r.Assignment, o),
          v,
          "=",
          v,
          this.generateExpression(n.init, r.Assignment, o)
        ] : this.generatePattern(n.id, r.Assignment, o);
      },
      VariableDeclaration: function(n, l) {
        var o, c, g, k, P, L = this;
        o = [n.kind], P = l & U ? $ : re;
        function W() {
          for (k = n.declarations[0], w.comment && k.leadingComments ? (o.push(`
`), o.push(ke(L.generateStatement(k, P)))) : (o.push(Te()), o.push(L.generateStatement(k, P))), c = 1, g = n.declarations.length; c < g; ++c)
            k = n.declarations[c], w.comment && k.leadingComments ? (o.push("," + C), o.push(ke(L.generateStatement(k, P)))) : (o.push("," + v), o.push(L.generateStatement(k, P)));
        }
        return n.declarations.length > 1 ? Se(W) : W(), o.push(this.semicolon(l)), o;
      },
      ThrowStatement: function(n, l) {
        return [H(
          "throw",
          this.generateExpression(n.argument, r.Sequence, I)
        ), this.semicolon(l)];
      },
      TryStatement: function(n, l) {
        var o, c, g, k;
        if (o = ["try", this.maybeBlock(n.block, $)], o = this.maybeBlockSuffix(n.block, o), n.handlers)
          for (c = 0, g = n.handlers.length; c < g; ++c)
            o = H(o, this.generateStatement(n.handlers[c], $)), (n.finalizer || c + 1 !== g) && (o = this.maybeBlockSuffix(n.handlers[c].body, o));
        else {
          for (k = n.guardedHandlers || [], c = 0, g = k.length; c < g; ++c)
            o = H(o, this.generateStatement(k[c], $)), (n.finalizer || c + 1 !== g) && (o = this.maybeBlockSuffix(k[c].body, o));
          if (n.handler)
            if (Array.isArray(n.handler))
              for (c = 0, g = n.handler.length; c < g; ++c)
                o = H(o, this.generateStatement(n.handler[c], $)), (n.finalizer || c + 1 !== g) && (o = this.maybeBlockSuffix(n.handler[c].body, o));
            else
              o = H(o, this.generateStatement(n.handler, $)), n.finalizer && (o = this.maybeBlockSuffix(n.handler.body, o));
        }
        return n.finalizer && (o = H(o, ["finally", this.maybeBlock(n.finalizer, $)])), o;
      },
      SwitchStatement: function(n, l) {
        var o, c, g, k, P, L = this;
        if (Se(function() {
          o = [
            "switch" + v + "(",
            L.generateExpression(n.discriminant, r.Sequence, I),
            ")" + v + "{" + C
          ];
        }), n.cases)
          for (P = $, g = 0, k = n.cases.length; g < k; ++g)
            g === k - 1 && (P |= ee), c = ke(this.generateStatement(n.cases[g], P)), o.push(c), j(he(c).toString()) || o.push(C);
        return o.push(ke("}")), o;
      },
      SwitchCase: function(n, l) {
        var o, c, g, k, P, L = this;
        return Se(function() {
          for (n.test ? o = [
            H("case", L.generateExpression(n.test, r.Sequence, I)),
            ":"
          ] : o = ["default:"], g = 0, k = n.consequent.length, k && n.consequent[0].type === t.BlockStatement && (c = L.maybeBlock(n.consequent[0], $), o.push(c), g = 1), g !== k && !j(he(o).toString()) && o.push(C), P = $; g < k; ++g)
            g === k - 1 && l & ee && (P |= ee), c = ke(L.generateStatement(n.consequent[g], P)), o.push(c), g + 1 !== k && !j(he(c).toString()) && o.push(C);
        }), o;
      },
      IfStatement: function(n, l) {
        var o, c, g, k = this;
        return Se(function() {
          o = [
            "if" + v + "(",
            k.generateExpression(n.test, r.Sequence, I),
            ")"
          ];
        }), g = l & ee, c = $, g && (c |= ee), n.alternate ? (o.push(this.maybeBlock(n.consequent, $)), o = this.maybeBlockSuffix(n.consequent, o), n.alternate.type === t.IfStatement ? o = H(o, ["else ", this.generateStatement(n.alternate, c)]) : o = H(o, H("else", this.maybeBlock(n.alternate, c)))) : o.push(this.maybeBlock(n.consequent, c)), o;
      },
      ForStatement: function(n, l) {
        var o, c = this;
        return Se(function() {
          o = ["for" + v + "("], n.init ? n.init.type === t.VariableDeclaration ? o.push(c.generateStatement(n.init, re)) : (o.push(c.generateExpression(n.init, r.Sequence, O)), o.push(";")) : o.push(";"), n.test && (o.push(v), o.push(c.generateExpression(n.test, r.Sequence, I))), o.push(";"), n.update && (o.push(v), o.push(c.generateExpression(n.update, r.Sequence, I))), o.push(")");
        }), o.push(this.maybeBlock(n.body, l & ee ? J : $)), o;
      },
      ForInStatement: function(n, l) {
        return this.generateIterationForStatement("in", n, l & ee ? J : $);
      },
      ForOfStatement: function(n, l) {
        return this.generateIterationForStatement("of", n, l & ee ? J : $);
      },
      LabeledStatement: function(n, l) {
        return [n.label.name + ":", this.maybeBlock(n.body, l & ee ? J : $)];
      },
      Program: function(n, l) {
        var o, c, g, k, P;
        for (k = n.body.length, o = [N && k > 0 ? `
` : ""], P = le, g = 0; g < k; ++g)
          !N && g === k - 1 && (P |= ee), T && (g === 0 && (n.body[0].leadingComments || st(n.range[0], n.body[g].range[0], o)), g > 0 && !n.body[g - 1].trailingComments && !n.body[g].leadingComments && st(n.body[g - 1].range[1], n.body[g].range[0], o)), c = ke(this.generateStatement(n.body[g], P)), o.push(c), g + 1 < k && !j(he(c).toString()) && (T && n.body[g + 1].leadingComments || o.push(C)), T && g === k - 1 && (n.body[g].trailingComments || st(n.body[g].range[1], n.range[1], o));
        return o;
      },
      FunctionDeclaration: function(n, l) {
        return [
          pt(n, !0),
          "function",
          It(n) || Te(),
          n.id ? Re(n.id) : "",
          this.generateFunctionBody(n)
        ];
      },
      ReturnStatement: function(n, l) {
        return n.argument ? [H(
          "return",
          this.generateExpression(n.argument, r.Sequence, I)
        ), this.semicolon(l)] : ["return" + this.semicolon(l)];
      },
      WhileStatement: function(n, l) {
        var o, c = this;
        return Se(function() {
          o = [
            "while" + v + "(",
            c.generateExpression(n.test, r.Sequence, I),
            ")"
          ];
        }), o.push(this.maybeBlock(n.body, l & ee ? J : $)), o;
      },
      WithStatement: function(n, l) {
        var o, c = this;
        return Se(function() {
          o = [
            "with" + v + "(",
            c.generateExpression(n.object, r.Sequence, I),
            ")"
          ];
        }), o.push(this.maybeBlock(n.body, l & ee ? J : $)), o;
      }
    }, Ue(_e.prototype, _e.Statement), _e.Expression = {
      SequenceExpression: function(n, l, o) {
        var c, g, k;
        for (r.Sequence < l && (o |= U), c = [], g = 0, k = n.expressions.length; g < k; ++g)
          c.push(this.generateExpression(n.expressions[g], r.Assignment, o)), g + 1 < k && c.push("," + v);
        return Ae(c, r.Sequence, l);
      },
      AssignmentExpression: function(n, l, o) {
        return this.generateAssignment(n.left, n.right, n.operator, l, o);
      },
      ArrowFunctionExpression: function(n, l, o) {
        return Ae(this.generateFunctionBody(n), r.ArrowFunction, l);
      },
      ConditionalExpression: function(n, l, o) {
        return r.Conditional < l && (o |= U), Ae(
          [
            this.generateExpression(n.test, r.Coalesce, o),
            v + "?" + v,
            this.generateExpression(n.consequent, r.Assignment, o),
            v + ":" + v,
            this.generateExpression(n.alternate, r.Assignment, o)
          ],
          r.Conditional,
          l
        );
      },
      LogicalExpression: function(n, l, o) {
        return n.operator === "??" && (o |= Ee), this.BinaryExpression(n, l, o);
      },
      BinaryExpression: function(n, l, o) {
        var c, g, k, P, L, W;
        return P = i[n.operator], g = n.operator === "**" ? r.Postfix : P, k = n.operator === "**" ? P : P + 1, P < l && (o |= U), L = this.generateExpression(n.left, g, o), W = L.toString(), W.charCodeAt(W.length - 1) === 47 && u.code.isIdentifierPartES5(n.operator.charCodeAt(0)) ? c = [L, Te(), n.operator] : c = H(L, n.operator), L = this.generateExpression(n.right, k, o), n.operator === "/" && L.toString().charAt(0) === "/" || n.operator.slice(-1) === "<" && L.toString().slice(0, 3) === "!--" ? (c.push(Te()), c.push(L)) : c = H(c, L), n.operator === "in" && !(o & U) ? ["(", c, ")"] : (n.operator === "||" || n.operator === "&&") && o & Ee ? ["(", c, ")"] : Ae(c, P, l);
      },
      CallExpression: function(n, l, o) {
        var c, g, k;
        for (c = [this.generateExpression(n.callee, r.Call, V)], n.optional && c.push("?."), c.push("("), g = 0, k = n.arguments.length; g < k; ++g)
          c.push(this.generateExpression(n.arguments[g], r.Assignment, I)), g + 1 < k && c.push("," + v);
        return c.push(")"), o & K ? Ae(c, r.Call, l) : ["(", c, ")"];
      },
      ChainExpression: function(n, l, o) {
        r.OptionalChaining < l && (o |= K);
        var c = this.generateExpression(n.expression, r.OptionalChaining, o);
        return Ae(c, r.OptionalChaining, l);
      },
      NewExpression: function(n, l, o) {
        var c, g, k, P, L;
        if (g = n.arguments.length, L = o & ye && !_ && g === 0 ? Z : Q, c = H(
          "new",
          this.generateExpression(n.callee, r.New, L)
        ), !(o & ye) || _ || g > 0) {
          for (c.push("("), k = 0, P = g; k < P; ++k)
            c.push(this.generateExpression(n.arguments[k], r.Assignment, I)), k + 1 < P && c.push("," + v);
          c.push(")");
        }
        return Ae(c, r.New, l);
      },
      MemberExpression: function(n, l, o) {
        var c, g;
        return c = [this.generateExpression(n.object, r.Call, o & K ? V : Q)], n.computed ? (n.optional && c.push("?."), c.push("["), c.push(this.generateExpression(n.property, r.Sequence, o & K ? I : Z)), c.push("]")) : (!n.optional && n.object.type === t.Literal && typeof n.object.value == "number" && (g = he(c).toString(), g.indexOf(".") < 0 && !/[eExX]/.test(g) && u.code.isDecimalDigit(g.charCodeAt(g.length - 1)) && !(g.length >= 2 && g.charCodeAt(0) === 48) && c.push(" ")), c.push(n.optional ? "?." : "."), c.push(Re(n.property))), Ae(c, r.Member, l);
      },
      MetaProperty: function(n, l, o) {
        var c;
        return c = [], c.push(typeof n.meta == "string" ? n.meta : Re(n.meta)), c.push("."), c.push(typeof n.property == "string" ? n.property : Re(n.property)), Ae(c, r.Member, l);
      },
      UnaryExpression: function(n, l, o) {
        var c, g, k, P, L;
        return g = this.generateExpression(n.argument, r.Unary, I), v === "" ? c = H(n.operator, g) : (c = [n.operator], n.operator.length > 2 ? c = H(c, g) : (P = he(c).toString(), L = P.charCodeAt(P.length - 1), k = g.toString().charCodeAt(0), ((L === 43 || L === 45) && L === k || u.code.isIdentifierPartES5(L) && u.code.isIdentifierPartES5(k)) && c.push(Te()), c.push(g))), Ae(c, r.Unary, l);
      },
      YieldExpression: function(n, l, o) {
        var c;
        return n.delegate ? c = "yield*" : c = "yield", n.argument && (c = H(
          c,
          this.generateExpression(n.argument, r.Yield, I)
        )), Ae(c, r.Yield, l);
      },
      AwaitExpression: function(n, l, o) {
        var c = H(
          n.all ? "await*" : "await",
          this.generateExpression(n.argument, r.Await, I)
        );
        return Ae(c, r.Await, l);
      },
      UpdateExpression: function(n, l, o) {
        return n.prefix ? Ae(
          [
            n.operator,
            this.generateExpression(n.argument, r.Unary, I)
          ],
          r.Unary,
          l
        ) : Ae(
          [
            this.generateExpression(n.argument, r.Postfix, I),
            n.operator
          ],
          r.Postfix,
          l
        );
      },
      FunctionExpression: function(n, l, o) {
        var c = [
          pt(n, !0),
          "function"
        ];
        return n.id ? (c.push(It(n) || Te()), c.push(Re(n.id))) : c.push(It(n) || v), c.push(this.generateFunctionBody(n)), c;
      },
      ArrayPattern: function(n, l, o) {
        return this.ArrayExpression(n, l, o, !0);
      },
      ArrayExpression: function(n, l, o, c) {
        var g, k, P = this;
        return n.elements.length ? (k = c ? !1 : n.elements.length > 1, g = ["[", k ? C : ""], Se(function(L) {
          var W, ae;
          for (W = 0, ae = n.elements.length; W < ae; ++W)
            n.elements[W] ? (g.push(k ? L : ""), g.push(P.generateExpression(n.elements[W], r.Assignment, I))) : (k && g.push(L), W + 1 === ae && g.push(",")), W + 1 < ae && g.push("," + (k ? C : v));
        }), k && !j(he(g).toString()) && g.push(C), g.push(k ? f : ""), g.push("]"), g) : "[]";
      },
      RestElement: function(n, l, o) {
        return "..." + this.generatePattern(n.argument);
      },
      ClassExpression: function(n, l, o) {
        var c, g;
        return c = ["class"], n.id && (c = H(c, this.generateExpression(n.id, r.Sequence, I))), n.superClass && (g = H("extends", this.generateExpression(n.superClass, r.Unary, I)), c = H(c, g)), c.push(v), c.push(this.generateStatement(n.body, J)), c;
      },
      MethodDefinition: function(n, l, o) {
        var c, g;
        return n.static ? c = ["static" + v] : c = [], n.kind === "get" || n.kind === "set" ? g = [
          H(n.kind, this.generatePropertyKey(n.key, n.computed)),
          this.generateFunctionBody(n.value)
        ] : g = [
          Wr(n),
          this.generatePropertyKey(n.key, n.computed),
          this.generateFunctionBody(n.value)
        ], H(c, g);
      },
      Property: function(n, l, o) {
        return n.kind === "get" || n.kind === "set" ? [
          n.kind,
          Te(),
          this.generatePropertyKey(n.key, n.computed),
          this.generateFunctionBody(n.value)
        ] : n.shorthand ? n.value.type === "AssignmentPattern" ? this.AssignmentPattern(n.value, r.Sequence, I) : this.generatePropertyKey(n.key, n.computed) : n.method ? [
          Wr(n),
          this.generatePropertyKey(n.key, n.computed),
          this.generateFunctionBody(n.value)
        ] : [
          this.generatePropertyKey(n.key, n.computed),
          ":" + v,
          this.generateExpression(n.value, r.Assignment, I)
        ];
      },
      ObjectExpression: function(n, l, o) {
        var c, g, k, P = this;
        return n.properties.length ? (c = n.properties.length > 1, Se(function() {
          k = P.generateExpression(n.properties[0], r.Sequence, I);
        }), !c && !Oe(he(k).toString()) ? ["{", v, k, v, "}"] : (Se(function(L) {
          var W, ae;
          if (g = ["{", C, L, k], c)
            for (g.push("," + C), W = 1, ae = n.properties.length; W < ae; ++W)
              g.push(L), g.push(P.generateExpression(n.properties[W], r.Sequence, I)), W + 1 < ae && g.push("," + C);
        }), j(he(g).toString()) || g.push(C), g.push(f), g.push("}"), g)) : "{}";
      },
      AssignmentPattern: function(n, l, o) {
        return this.generateAssignment(n.left, n.right, "=", l, o);
      },
      ObjectPattern: function(n, l, o) {
        var c, g, k, P, L, W = this;
        if (!n.properties.length)
          return "{}";
        if (P = !1, n.properties.length === 1)
          L = n.properties[0], L.type === t.Property && L.value.type !== t.Identifier && (P = !0);
        else
          for (g = 0, k = n.properties.length; g < k; ++g)
            if (L = n.properties[g], L.type === t.Property && !L.shorthand) {
              P = !0;
              break;
            }
        return c = ["{", P ? C : ""], Se(function(ae) {
          var we, et;
          for (we = 0, et = n.properties.length; we < et; ++we)
            c.push(P ? ae : ""), c.push(W.generateExpression(n.properties[we], r.Sequence, I)), we + 1 < et && c.push("," + (P ? C : v));
        }), P && !j(he(c).toString()) && c.push(C), c.push(P ? f : ""), c.push("}"), c;
      },
      ThisExpression: function(n, l, o) {
        return "this";
      },
      Super: function(n, l, o) {
        return "super";
      },
      Identifier: function(n, l, o) {
        return Re(n);
      },
      ImportDefaultSpecifier: function(n, l, o) {
        return Re(n.id || n.local);
      },
      ImportNamespaceSpecifier: function(n, l, o) {
        var c = ["*"], g = n.id || n.local;
        return g && c.push(v + "as" + Te() + Re(g)), c;
      },
      ImportSpecifier: function(n, l, o) {
        var c = n.imported, g = [c.name], k = n.local;
        return k && k.name !== c.name && g.push(Te() + "as" + Te() + Re(k)), g;
      },
      ExportSpecifier: function(n, l, o) {
        var c = n.local, g = [c.name], k = n.exported;
        return k && k.name !== c.name && g.push(Te() + "as" + Te() + Re(k)), g;
      },
      Literal: function(n, l, o) {
        var c;
        if (n.hasOwnProperty("raw") && p && w.raw)
          try {
            if (c = p(n.raw).body[0].expression, c.type === t.Literal && c.value === n.value)
              return n.raw;
          } catch {
          }
        return n.regex ? "/" + n.regex.pattern + "/" + n.regex.flags : typeof n.value == "bigint" ? n.value.toString() + "n" : n.bigint ? n.bigint + "n" : n.value === null ? "null" : typeof n.value == "string" ? Qn(n.value) : typeof n.value == "number" ? Pt(n.value) : typeof n.value == "boolean" ? n.value ? "true" : "false" : Yn(n.value);
      },
      GeneratorExpression: function(n, l, o) {
        return this.ComprehensionExpression(n, l, o);
      },
      ComprehensionExpression: function(n, l, o) {
        var c, g, k, P, L = this;
        return c = n.type === t.GeneratorExpression ? ["("] : ["["], w.moz.comprehensionExpressionStartsWithAssignment && (P = this.generateExpression(n.body, r.Assignment, I), c.push(P)), n.blocks && Se(function() {
          for (g = 0, k = n.blocks.length; g < k; ++g)
            P = L.generateExpression(n.blocks[g], r.Sequence, I), g > 0 || w.moz.comprehensionExpressionStartsWithAssignment ? c = H(c, P) : c.push(P);
        }), n.filter && (c = H(c, "if" + v), P = this.generateExpression(n.filter, r.Sequence, I), c = H(c, ["(", P, ")"])), w.moz.comprehensionExpressionStartsWithAssignment || (P = this.generateExpression(n.body, r.Assignment, I), c = H(c, P)), c.push(n.type === t.GeneratorExpression ? ")" : "]"), c;
      },
      ComprehensionBlock: function(n, l, o) {
        var c;
        return n.left.type === t.VariableDeclaration ? c = [
          n.left.kind,
          Te(),
          this.generateStatement(n.left.declarations[0], re)
        ] : c = this.generateExpression(n.left, r.Call, I), c = H(c, n.of ? "of" : "in"), c = H(c, this.generateExpression(n.right, r.Sequence, I)), ["for" + v + "(", c, ")"];
      },
      SpreadElement: function(n, l, o) {
        return [
          "...",
          this.generateExpression(n.argument, r.Assignment, I)
        ];
      },
      TaggedTemplateExpression: function(n, l, o) {
        var c = V;
        o & K || (c = Q);
        var g = [
          this.generateExpression(n.tag, r.Call, c),
          this.generateExpression(n.quasi, r.Primary, X)
        ];
        return Ae(g, r.TaggedTemplate, l);
      },
      TemplateElement: function(n, l, o) {
        return n.value.raw;
      },
      TemplateLiteral: function(n, l, o) {
        var c, g, k;
        for (c = ["`"], g = 0, k = n.quasis.length; g < k; ++g)
          c.push(this.generateExpression(n.quasis[g], r.Primary, I)), g + 1 < k && (c.push("${" + v), c.push(this.generateExpression(n.expressions[g], r.Sequence, I)), c.push(v + "}"));
        return c.push("`"), c;
      },
      ModuleSpecifier: function(n, l, o) {
        return this.Literal(n, l, o);
      },
      ImportExpression: function(n, l, o) {
        return Ae([
          "import(",
          this.generateExpression(n.source, r.Assignment, I),
          ")"
        ], r.Call, l);
      }
    }, Ue(_e.prototype, _e.Expression), _e.prototype.generateExpression = function(n, l, o) {
      var c, g;
      return g = n.type || t.Property, w.verbatim && n.hasOwnProperty(w.verbatim) ? es(n, l) : (c = this[g](n, l, o), w.comment && (c = Ur(n, c)), he(c, n));
    }, _e.prototype.generateStatement = function(n, l) {
      var o, c;
      return o = this[n.type](n, l), w.comment && (o = Ur(n, o)), c = he(o).toString(), n.type === t.Program && !N && C === "" && c.charAt(c.length - 1) === `
` && (o = E ? he(o).replaceRight(/\s+$/, "") : c.replace(/\s+$/, "")), he(o, n);
    };
    function ts(n) {
      var l;
      if (l = new _e(), z(n))
        return l.generateStatement(n, $);
      if (Y(n))
        return l.generateExpression(n, r.Sequence, I);
      throw new Error("Unknown node type: " + n.type);
    }
    function rs(n, l) {
      var o = Ce(), c, g;
      return l != null ? (typeof l.indent == "string" && (o.format.indent.style = l.indent), typeof l.base == "number" && (o.format.indent.base = l.base), l = $e(o, l), h = l.format.indent.style, typeof l.base == "string" ? f = l.base : f = D(h, l.format.indent.base)) : (l = o, h = l.format.indent.style, f = D(h, l.format.indent.base)), y = l.format.json, m = l.format.renumber, x = y ? !1 : l.format.hexadecimal, S = y ? "double" : l.format.quotes, b = l.format.escapeless, C = l.format.newline, v = l.format.space, l.format.compact && (C = v = h = f = ""), _ = l.format.parentheses, R = l.format.semicolons, N = l.format.safeConcatenation, F = l.directive, p = y ? null : l.parse, E = l.sourceMap, A = l.sourceCode, T = l.format.preserveBlankLines && A !== null, w = l, E && (e.browser ? s = xt.sourceMap.SourceNode : s = Fs().SourceNode), c = ts(n), E ? (g = c.toStringWithSourceMap({
        file: l.file,
        sourceRoot: l.sourceMapRoot
      }), l.sourceContent && g.map.setSourceContent(
        l.sourceMap,
        l.sourceContent
      ), l.sourceMapWithCode ? g : g.map.toString()) : (g = { code: c.toString(), map: null }, l.sourceMapWithCode ? g : g.code);
    }
    q = {
      indent: {
        style: "",
        base: 0
      },
      renumber: !0,
      hexadecimal: !0,
      quotes: "auto",
      escapeless: !0,
      compact: !0,
      parentheses: !1,
      semicolons: !1
    }, B = Ce().format, e.version = Ks.version, e.generate = rs, e.attachComments = a.attachComments, e.Precedence = $e({}, r), e.browser = !1, e.FORMAT_MINIFY = q, e.FORMAT_DEFAULTS = B;
  })();
})(Ui);
var fr = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
}, hr = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", Zs = {
  5: hr,
  "5module": hr + " export import",
  6: hr + " const class extends export import super"
}, ea = /^in(stanceof)?$/, Ar = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", Yi = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿", ta = new RegExp("[" + Ar + "]"), ra = new RegExp("[" + Ar + Yi + "]");
Ar = Yi = null;
var Ji = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938], ia = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
function mr(e, t) {
  for (var r = 65536, i = 0; i < t.length; i += 2) {
    if (r += t[i], r > e)
      return !1;
    if (r += t[i + 1], r >= e)
      return !0;
  }
}
function Je(e, t) {
  return e < 65 ? e === 36 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && ta.test(String.fromCharCode(e)) : t === !1 ? !1 : mr(e, Ji);
}
function rt(e, t) {
  return e < 48 ? e === 36 : e < 58 ? !0 : e < 65 ? !1 : e < 91 ? !0 : e < 97 ? e === 95 : e < 123 ? !0 : e <= 65535 ? e >= 170 && ra.test(String.fromCharCode(e)) : t === !1 ? !1 : mr(e, Ji) || mr(e, ia);
}
var ce = function(t, r) {
  r === void 0 && (r = {}), this.label = t, this.keyword = r.keyword, this.beforeExpr = !!r.beforeExpr, this.startsExpr = !!r.startsExpr, this.isLoop = !!r.isLoop, this.isAssign = !!r.isAssign, this.prefix = !!r.prefix, this.postfix = !!r.postfix, this.binop = r.binop || null, this.updateContext = null;
};
function Me(e, t) {
  return new ce(e, { beforeExpr: !0, binop: t });
}
var Fe = { beforeExpr: !0 }, Le = { startsExpr: !0 }, qt = {};
function oe(e, t) {
  return t === void 0 && (t = {}), t.keyword = e, qt[e] = new ce(e, t);
}
var d = {
  num: new ce("num", Le),
  regexp: new ce("regexp", Le),
  string: new ce("string", Le),
  name: new ce("name", Le),
  eof: new ce("eof"),
  // Punctuation token types.
  bracketL: new ce("[", { beforeExpr: !0, startsExpr: !0 }),
  bracketR: new ce("]"),
  braceL: new ce("{", { beforeExpr: !0, startsExpr: !0 }),
  braceR: new ce("}"),
  parenL: new ce("(", { beforeExpr: !0, startsExpr: !0 }),
  parenR: new ce(")"),
  comma: new ce(",", Fe),
  semi: new ce(";", Fe),
  colon: new ce(":", Fe),
  dot: new ce("."),
  question: new ce("?", Fe),
  questionDot: new ce("?."),
  arrow: new ce("=>", Fe),
  template: new ce("template"),
  invalidTemplate: new ce("invalidTemplate"),
  ellipsis: new ce("...", Fe),
  backQuote: new ce("`", Le),
  dollarBraceL: new ce("${", { beforeExpr: !0, startsExpr: !0 }),
  // Operators. These carry several kinds of properties to help the
  // parser use them properly (the presence of these properties is
  // what categorizes them as operators).
  //
  // `binop`, when present, specifies that this operator is a binary
  // operator, and will refer to its precedence.
  //
  // `prefix` and `postfix` mark the operator as a prefix or postfix
  // unary operator.
  //
  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
  // binary operators with a very low precedence, that should result
  // in AssignmentExpression nodes.
  eq: new ce("=", { beforeExpr: !0, isAssign: !0 }),
  assign: new ce("_=", { beforeExpr: !0, isAssign: !0 }),
  incDec: new ce("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
  prefix: new ce("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  logicalOR: Me("||", 1),
  logicalAND: Me("&&", 2),
  bitwiseOR: Me("|", 3),
  bitwiseXOR: Me("^", 4),
  bitwiseAND: Me("&", 5),
  equality: Me("==/!=/===/!==", 6),
  relational: Me("</>/<=/>=", 7),
  bitShift: Me("<</>>/>>>", 8),
  plusMin: new ce("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
  modulo: Me("%", 10),
  star: Me("*", 10),
  slash: Me("/", 10),
  starstar: new ce("**", { beforeExpr: !0 }),
  coalesce: Me("??", 1),
  // Keyword token types.
  _break: oe("break"),
  _case: oe("case", Fe),
  _catch: oe("catch"),
  _continue: oe("continue"),
  _debugger: oe("debugger"),
  _default: oe("default", Fe),
  _do: oe("do", { isLoop: !0, beforeExpr: !0 }),
  _else: oe("else", Fe),
  _finally: oe("finally"),
  _for: oe("for", { isLoop: !0 }),
  _function: oe("function", Le),
  _if: oe("if"),
  _return: oe("return", Fe),
  _switch: oe("switch"),
  _throw: oe("throw", Fe),
  _try: oe("try"),
  _var: oe("var"),
  _const: oe("const"),
  _while: oe("while", { isLoop: !0 }),
  _with: oe("with"),
  _new: oe("new", { beforeExpr: !0, startsExpr: !0 }),
  _this: oe("this", Le),
  _super: oe("super", Le),
  _class: oe("class", Le),
  _extends: oe("extends", Fe),
  _export: oe("export"),
  _import: oe("import", Le),
  _null: oe("null", Le),
  _true: oe("true", Le),
  _false: oe("false", Le),
  _in: oe("in", { beforeExpr: !0, binop: 7 }),
  _instanceof: oe("instanceof", { beforeExpr: !0, binop: 7 }),
  _typeof: oe("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _void: oe("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  _delete: oe("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 })
}, Ne = /\r\n?|\n|\u2028|\u2029/, ot = new RegExp(Ne.source, "g");
function ft(e, t) {
  return e === 10 || e === 13 || !t && (e === 8232 || e === 8233);
}
var wr = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, Be = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, Xi = Object.prototype, na = Xi.hasOwnProperty, sa = Xi.toString;
function Ut(e, t) {
  return na.call(e, t);
}
var xi = Array.isArray || function(e) {
  return sa.call(e) === "[object Array]";
};
function tt(e) {
  return new RegExp("^(?:" + e.replace(/ /g, "|") + ")$");
}
var ut = function(t, r) {
  this.line = t, this.column = r;
};
ut.prototype.offset = function(t) {
  return new ut(this.line, this.column + t);
};
var At = function(t, r, i) {
  this.start = r, this.end = i, t.sourceFile !== null && (this.source = t.sourceFile);
};
function Tr(e, t) {
  for (var r = 1, i = 0; ; ) {
    ot.lastIndex = i;
    var s = ot.exec(e);
    if (s && s.index < t)
      ++r, i = s.index + s[0].length;
    else
      return new ut(r, t - i);
  }
}
var Ft = {
  // `ecmaVersion` indicates the ECMAScript version to parse. Must be
  // either 3, 5, 6 (2015), 7 (2016), 8 (2017), 9 (2018), or 10
  // (2019). This influences support for strict mode, the set of
  // reserved words, and support for new syntax features. The default
  // is 10.
  ecmaVersion: 10,
  // `sourceType` indicates the mode the code should be parsed in.
  // Can be either `"script"` or `"module"`. This influences global
  // strict mode and parsing of `import` and `export` declarations.
  sourceType: "script",
  // `onInsertedSemicolon` can be a callback that will be called
  // when a semicolon is automatically inserted. It will be passed
  // the position of the comma as an offset, and if `locations` is
  // enabled, it is given the location as a `{line, column}` object
  // as second argument.
  onInsertedSemicolon: null,
  // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
  // trailing commas.
  onTrailingComma: null,
  // By default, reserved words are only enforced if ecmaVersion >= 5.
  // Set `allowReserved` to a boolean value to explicitly turn this on
  // an off. When this option has the value "never", reserved words
  // and keywords can also not be used as property names.
  allowReserved: null,
  // When enabled, a return at the top level is not considered an
  // error.
  allowReturnOutsideFunction: !1,
  // When enabled, import/export statements are not constrained to
  // appearing at the top of the program.
  allowImportExportEverywhere: !1,
  // When enabled, await identifiers are allowed to appear at the top-level scope,
  // but they are still not allowed in non-async functions.
  allowAwaitOutsideFunction: !1,
  // When enabled, hashbang directive in the beginning of file
  // is allowed and treated as a line comment.
  allowHashBang: !1,
  // When `locations` is on, `loc` properties holding objects with
  // `start` and `end` properties in `{line, column}` form (with
  // line being 1-based and column 0-based) will be attached to the
  // nodes.
  locations: !1,
  // A function can be passed as `onToken` option, which will
  // cause Acorn to call that function with object in the same
  // format as tokens returned from `tokenizer().getToken()`. Note
  // that you are not allowed to call the parser from the
  // callback—that will corrupt its internal state.
  onToken: null,
  // A function can be passed as `onComment` option, which will
  // cause Acorn to call that function with `(block, text, start,
  // end)` parameters whenever a comment is skipped. `block` is a
  // boolean indicating whether this is a block (`/* */`) comment,
  // `text` is the content of the comment, and `start` and `end` are
  // character offsets that denote the start and end of the comment.
  // When the `locations` option is on, two more parameters are
  // passed, the full `{line, column}` locations of the start and
  // end of the comments. Note that you are not allowed to call the
  // parser from the callback—that will corrupt its internal state.
  onComment: null,
  // Nodes have their start and end characters offsets recorded in
  // `start` and `end` properties (directly on the node, rather than
  // the `loc` object, which holds line/column data. To also add a
  // [semi-standardized][range] `range` property holding a `[start,
  // end]` array with the same numbers, set the `ranges` option to
  // `true`.
  //
  // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
  ranges: !1,
  // It is possible to parse multiple files into a single AST by
  // passing the tree produced by parsing the first file as
  // `program` option in subsequent parses. This will add the
  // toplevel forms of the parsed file to the `Program` (top) node
  // of an existing parse tree.
  program: null,
  // When `locations` is on, you can pass this to record the source
  // file in every node's `loc` object.
  sourceFile: null,
  // This value, if given, is stored in every node, whether
  // `locations` is on or off.
  directSourceFile: null,
  // When enabled, parenthesized expressions are represented by
  // (non-standard) ParenthesizedExpression nodes
  preserveParens: !1
};
function aa(e) {
  var t = {};
  for (var r in Ft)
    t[r] = e && Ut(e, r) ? e[r] : Ft[r];
  if (t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009), t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5), xi(t.onToken)) {
    var i = t.onToken;
    t.onToken = function(s) {
      return i.push(s);
    };
  }
  return xi(t.onComment) && (t.onComment = oa(t, t.onComment)), t;
}
function oa(e, t) {
  return function(r, i, s, a, u, f) {
    var h = {
      type: r ? "Block" : "Line",
      value: i,
      start: s,
      end: a
    };
    e.locations && (h.loc = new At(this, u, f)), e.ranges && (h.range = [s, a]), t.push(h);
  };
}
var bt = 1, wt = 2, kr = bt | wt, Hi = 4, Qi = 8, Ki = 16, Zi = 32, en = 64, tn = 128;
function Pr(e, t) {
  return wt | (e ? Hi : 0) | (t ? Qi : 0);
}
var bi = 0, Ir = 1, Ye = 2, rn = 3, nn = 4, sn = 5, xe = function(t, r, i) {
  this.options = t = aa(t), this.sourceFile = t.sourceFile, this.keywords = tt(Zs[t.ecmaVersion >= 6 ? 6 : t.sourceType === "module" ? "5module" : 5]);
  var s = "";
  if (t.allowReserved !== !0) {
    for (var a = t.ecmaVersion; !(s = fr[a]); a--)
      ;
    t.sourceType === "module" && (s += " await");
  }
  this.reservedWords = tt(s);
  var u = (s ? s + " " : "") + fr.strict;
  this.reservedWordsStrict = tt(u), this.reservedWordsStrictBind = tt(u + " " + fr.strictBind), this.input = String(r), this.containsEsc = !1, i ? (this.pos = i, this.lineStart = this.input.lastIndexOf(`
`, i - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(Ne).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = d.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = t.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = {}, this.pos === 0 && t.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(bt), this.regexpState = null;
}, it = { inFunction: { configurable: !0 }, inGenerator: { configurable: !0 }, inAsync: { configurable: !0 }, allowSuper: { configurable: !0 }, allowDirectSuper: { configurable: !0 }, treatFunctionsAsVar: { configurable: !0 } };
xe.prototype.parse = function() {
  var t = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(t);
};
it.inFunction.get = function() {
  return (this.currentVarScope().flags & wt) > 0;
};
it.inGenerator.get = function() {
  return (this.currentVarScope().flags & Qi) > 0;
};
it.inAsync.get = function() {
  return (this.currentVarScope().flags & Hi) > 0;
};
it.allowSuper.get = function() {
  return (this.currentThisScope().flags & en) > 0;
};
it.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & tn) > 0;
};
it.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
xe.prototype.inNonArrowFunction = function() {
  return (this.currentThisScope().flags & wt) > 0;
};
xe.extend = function() {
  for (var t = [], r = arguments.length; r--; )
    t[r] = arguments[r];
  for (var i = this, s = 0; s < t.length; s++)
    i = t[s](i);
  return i;
};
xe.parse = function(t, r) {
  return new this(r, t).parse();
};
xe.parseExpressionAt = function(t, r, i) {
  var s = new this(i, t, r);
  return s.nextToken(), s.parseExpression();
};
xe.tokenizer = function(t, r) {
  return new this(r, t);
};
Object.defineProperties(xe.prototype, it);
var Ie = xe.prototype, ua = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
Ie.strictDirective = function(e) {
  for (; ; ) {
    Be.lastIndex = e, e += Be.exec(this.input)[0].length;
    var t = ua.exec(this.input.slice(e));
    if (!t)
      return !1;
    if ((t[1] || t[2]) === "use strict") {
      Be.lastIndex = e + t[0].length;
      var r = Be.exec(this.input), i = r.index + r[0].length, s = this.input.charAt(i);
      return s === ";" || s === "}" || Ne.test(r[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(s) || s === "!" && this.input.charAt(i + 1) === "=");
    }
    e += t[0].length, Be.lastIndex = e, e += Be.exec(this.input)[0].length, this.input[e] === ";" && e++;
  }
};
Ie.eat = function(e) {
  return this.type === e ? (this.next(), !0) : !1;
};
Ie.isContextual = function(e) {
  return this.type === d.name && this.value === e && !this.containsEsc;
};
Ie.eatContextual = function(e) {
  return this.isContextual(e) ? (this.next(), !0) : !1;
};
Ie.expectContextual = function(e) {
  this.eatContextual(e) || this.unexpected();
};
Ie.canInsertSemicolon = function() {
  return this.type === d.eof || this.type === d.braceR || Ne.test(this.input.slice(this.lastTokEnd, this.start));
};
Ie.insertSemicolon = function() {
  if (this.canInsertSemicolon())
    return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
};
Ie.semicolon = function() {
  !this.eat(d.semi) && !this.insertSemicolon() && this.unexpected();
};
Ie.afterTrailingComma = function(e, t) {
  if (this.type === e)
    return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), !0;
};
Ie.expect = function(e) {
  this.eat(e) || this.unexpected();
};
Ie.unexpected = function(e) {
  this.raise(e ?? this.start, "Unexpected token");
};
function $t() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
}
Ie.checkPatternErrors = function(e, t) {
  if (e) {
    e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
    var r = t ? e.parenthesizedAssign : e.parenthesizedBind;
    r > -1 && this.raiseRecoverable(r, "Parenthesized pattern");
  }
};
Ie.checkExpressionErrors = function(e, t) {
  if (!e)
    return !1;
  var r = e.shorthandAssign, i = e.doubleProto;
  if (!t)
    return r >= 0 || i >= 0;
  r >= 0 && this.raise(r, "Shorthand property assignments are valid only in destructuring patterns"), i >= 0 && this.raiseRecoverable(i, "Redefinition of __proto__ property");
};
Ie.checkYieldAwaitInDefaultParams = function() {
  this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
};
Ie.isSimpleAssignTarget = function(e) {
  return e.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(e.expression) : e.type === "Identifier" || e.type === "MemberExpression";
};
var te = xe.prototype;
te.parseTopLevel = function(e) {
  var t = {};
  for (e.body || (e.body = []); this.type !== d.eof; ) {
    var r = this.parseStatement(null, !0, t);
    e.body.push(r);
  }
  if (this.inModule)
    for (var i = 0, s = Object.keys(this.undefinedExports); i < s.length; i += 1) {
      var a = s[i];
      this.raiseRecoverable(this.undefinedExports[a].start, "Export '" + a + "' is not defined");
    }
  return this.adaptDirectivePrologue(e.body), this.next(), e.sourceType = this.options.sourceType, this.finishNode(e, "Program");
};
var Or = { kind: "loop" }, la = { kind: "switch" };
te.isLet = function(e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
    return !1;
  Be.lastIndex = this.pos;
  var t = Be.exec(this.input), r = this.pos + t[0].length, i = this.input.charCodeAt(r);
  if (i === 91)
    return !0;
  if (e)
    return !1;
  if (i === 123)
    return !0;
  if (Je(i, !0)) {
    for (var s = r + 1; rt(this.input.charCodeAt(s), !0); )
      ++s;
    var a = this.input.slice(r, s);
    if (!ea.test(a))
      return !0;
  }
  return !1;
};
te.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    return !1;
  Be.lastIndex = this.pos;
  var e = Be.exec(this.input), t = this.pos + e[0].length;
  return !Ne.test(this.input.slice(this.pos, t)) && this.input.slice(t, t + 8) === "function" && (t + 8 === this.input.length || !rt(this.input.charAt(t + 8)));
};
te.parseStatement = function(e, t, r) {
  var i = this.type, s = this.startNode(), a;
  switch (this.isLet(e) && (i = d._var, a = "let"), i) {
    case d._break:
    case d._continue:
      return this.parseBreakContinueStatement(s, i.keyword);
    case d._debugger:
      return this.parseDebuggerStatement(s);
    case d._do:
      return this.parseDoStatement(s);
    case d._for:
      return this.parseForStatement(s);
    case d._function:
      return e && (this.strict || e !== "if" && e !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(s, !1, !e);
    case d._class:
      return e && this.unexpected(), this.parseClass(s, !0);
    case d._if:
      return this.parseIfStatement(s);
    case d._return:
      return this.parseReturnStatement(s);
    case d._switch:
      return this.parseSwitchStatement(s);
    case d._throw:
      return this.parseThrowStatement(s);
    case d._try:
      return this.parseTryStatement(s);
    case d._const:
    case d._var:
      return a = a || this.value, e && a !== "var" && this.unexpected(), this.parseVarStatement(s, a);
    case d._while:
      return this.parseWhileStatement(s);
    case d._with:
      return this.parseWithStatement(s);
    case d.braceL:
      return this.parseBlock(!0, s);
    case d.semi:
      return this.parseEmptyStatement(s);
    case d._export:
    case d._import:
      if (this.options.ecmaVersion > 10 && i === d._import) {
        Be.lastIndex = this.pos;
        var u = Be.exec(this.input), f = this.pos + u[0].length, h = this.input.charCodeAt(f);
        if (h === 40 || h === 46)
          return this.parseExpressionStatement(s, this.parseExpression());
      }
      return this.options.allowImportExportEverywhere || (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), i === d._import ? this.parseImport(s) : this.parseExport(s, r);
    default:
      if (this.isAsyncFunction())
        return e && this.unexpected(), this.next(), this.parseFunctionStatement(s, !0, !e);
      var y = this.value, m = this.parseExpression();
      return i === d.name && m.type === "Identifier" && this.eat(d.colon) ? this.parseLabeledStatement(s, y, m, e) : this.parseExpressionStatement(s, m);
  }
};
te.parseBreakContinueStatement = function(e, t) {
  var r = t === "break";
  this.next(), this.eat(d.semi) || this.insertSemicolon() ? e.label = null : this.type !== d.name ? this.unexpected() : (e.label = this.parseIdent(), this.semicolon());
  for (var i = 0; i < this.labels.length; ++i) {
    var s = this.labels[i];
    if ((e.label == null || s.name === e.label.name) && (s.kind != null && (r || s.kind === "loop") || e.label && r))
      break;
  }
  return i === this.labels.length && this.raise(e.start, "Unsyntactic " + t), this.finishNode(e, r ? "BreakStatement" : "ContinueStatement");
};
te.parseDebuggerStatement = function(e) {
  return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
};
te.parseDoStatement = function(e) {
  return this.next(), this.labels.push(Or), e.body = this.parseStatement("do"), this.labels.pop(), this.expect(d._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(d.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement");
};
te.parseForStatement = function(e) {
  this.next();
  var t = this.options.ecmaVersion >= 9 && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction) && this.eatContextual("await") ? this.lastTokStart : -1;
  if (this.labels.push(Or), this.enterScope(0), this.expect(d.parenL), this.type === d.semi)
    return t > -1 && this.unexpected(t), this.parseFor(e, null);
  var r = this.isLet();
  if (this.type === d._var || this.type === d._const || r) {
    var i = this.startNode(), s = r ? "let" : this.value;
    return this.next(), this.parseVar(i, !0, s), this.finishNode(i, "VariableDeclaration"), (this.type === d._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && i.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === d._in ? t > -1 && this.unexpected(t) : e.await = t > -1), this.parseForIn(e, i)) : (t > -1 && this.unexpected(t), this.parseFor(e, i));
  }
  var a = new $t(), u = this.parseExpression(!0, a);
  return this.type === d._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? (this.options.ecmaVersion >= 9 && (this.type === d._in ? t > -1 && this.unexpected(t) : e.await = t > -1), this.toAssignable(u, !1, a), this.checkLVal(u), this.parseForIn(e, u)) : (this.checkExpressionErrors(a, !0), t > -1 && this.unexpected(t), this.parseFor(e, u));
};
te.parseFunctionStatement = function(e, t, r) {
  return this.next(), this.parseFunction(e, yt | (r ? 0 : gr), !1, t);
};
te.parseIfStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(d._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
};
te.parseReturnStatement = function(e) {
  return !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"), this.next(), this.eat(d.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement");
};
te.parseSwitchStatement = function(e) {
  this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(d.braceL), this.labels.push(la), this.enterScope(0);
  for (var t, r = !1; this.type !== d.braceR; )
    if (this.type === d._case || this.type === d._default) {
      var i = this.type === d._case;
      t && this.finishNode(t, "SwitchCase"), e.cases.push(t = this.startNode()), t.consequent = [], this.next(), i ? t.test = this.parseExpression() : (r && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), r = !0, t.test = null), this.expect(d.colon);
    } else
      t || this.unexpected(), t.consequent.push(this.parseStatement(null));
  return this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
};
te.parseThrowStatement = function(e) {
  return this.next(), Ne.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
};
var ca = [];
te.parseTryStatement = function(e) {
  if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === d._catch) {
    var t = this.startNode();
    if (this.next(), this.eat(d.parenL)) {
      t.param = this.parseBindingAtom();
      var r = t.param.type === "Identifier";
      this.enterScope(r ? Zi : 0), this.checkLVal(t.param, r ? nn : Ye), this.expect(d.parenR);
    } else
      this.options.ecmaVersion < 10 && this.unexpected(), t.param = null, this.enterScope(0);
    t.body = this.parseBlock(!1), this.exitScope(), e.handler = this.finishNode(t, "CatchClause");
  }
  return e.finalizer = this.eat(d._finally) ? this.parseBlock() : null, !e.handler && !e.finalizer && this.raise(e.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement");
};
te.parseVarStatement = function(e, t) {
  return this.next(), this.parseVar(e, !1, t), this.semicolon(), this.finishNode(e, "VariableDeclaration");
};
te.parseWhileStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), this.labels.push(Or), e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement");
};
te.parseWithStatement = function(e) {
  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement");
};
te.parseEmptyStatement = function(e) {
  return this.next(), this.finishNode(e, "EmptyStatement");
};
te.parseLabeledStatement = function(e, t, r, i) {
  for (var s = 0, a = this.labels; s < a.length; s += 1) {
    var u = a[s];
    u.name === t && this.raise(r.start, "Label '" + t + "' is already declared");
  }
  for (var f = this.type.isLoop ? "loop" : this.type === d._switch ? "switch" : null, h = this.labels.length - 1; h >= 0; h--) {
    var y = this.labels[h];
    if (y.statementStart === e.start)
      y.statementStart = this.start, y.kind = f;
    else
      break;
  }
  return this.labels.push({ name: t, kind: f, statementStart: this.start }), e.body = this.parseStatement(i ? i.indexOf("label") === -1 ? i + "label" : i : "label"), this.labels.pop(), e.label = r, this.finishNode(e, "LabeledStatement");
};
te.parseExpressionStatement = function(e, t) {
  return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement");
};
te.parseBlock = function(e, t, r) {
  for (e === void 0 && (e = !0), t === void 0 && (t = this.startNode()), t.body = [], this.expect(d.braceL), e && this.enterScope(0); this.type !== d.braceR; ) {
    var i = this.parseStatement(null);
    t.body.push(i);
  }
  return r && (this.strict = !1), this.next(), e && this.exitScope(), this.finishNode(t, "BlockStatement");
};
te.parseFor = function(e, t) {
  return e.init = t, this.expect(d.semi), e.test = this.type === d.semi ? null : this.parseExpression(), this.expect(d.semi), e.update = this.type === d.parenR ? null : this.parseExpression(), this.expect(d.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, "ForStatement");
};
te.parseForIn = function(e, t) {
  var r = this.type === d._in;
  return this.next(), t.type === "VariableDeclaration" && t.declarations[0].init != null && (!r || this.options.ecmaVersion < 8 || this.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier") ? this.raise(
    t.start,
    (r ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
  ) : t.type === "AssignmentPattern" && this.raise(t.start, "Invalid left-hand side in for-loop"), e.left = t, e.right = r ? this.parseExpression() : this.parseMaybeAssign(), this.expect(d.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, r ? "ForInStatement" : "ForOfStatement");
};
te.parseVar = function(e, t, r) {
  for (e.declarations = [], e.kind = r; ; ) {
    var i = this.startNode();
    if (this.parseVarId(i, r), this.eat(d.eq) ? i.init = this.parseMaybeAssign(t) : r === "const" && !(this.type === d._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : i.id.type !== "Identifier" && !(t && (this.type === d._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : i.init = null, e.declarations.push(this.finishNode(i, "VariableDeclarator")), !this.eat(d.comma))
      break;
  }
  return e;
};
te.parseVarId = function(e, t) {
  e.id = this.parseBindingAtom(), this.checkLVal(e.id, t === "var" ? Ir : Ye, !1);
};
var yt = 1, gr = 2, an = 4;
te.parseFunction = function(e, t, r, i) {
  this.initFunction(e), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !i) && (this.type === d.star && t & gr && this.unexpected(), e.generator = this.eat(d.star)), this.options.ecmaVersion >= 8 && (e.async = !!i), t & yt && (e.id = t & an && this.type !== d.name ? null : this.parseIdent(), e.id && !(t & gr) && this.checkLVal(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? Ir : Ye : rn));
  var s = this.yieldPos, a = this.awaitPos, u = this.awaitIdentPos;
  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Pr(e.async, e.generator)), t & yt || (e.id = this.type === d.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, r, !1), this.yieldPos = s, this.awaitPos = a, this.awaitIdentPos = u, this.finishNode(e, t & yt ? "FunctionDeclaration" : "FunctionExpression");
};
te.parseFunctionParams = function(e) {
  this.expect(d.parenL), e.params = this.parseBindingList(d.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
};
te.parseClass = function(e, t) {
  this.next();
  var r = this.strict;
  this.strict = !0, this.parseClassId(e, t), this.parseClassSuper(e);
  var i = this.startNode(), s = !1;
  for (i.body = [], this.expect(d.braceL); this.type !== d.braceR; ) {
    var a = this.parseClassElement(e.superClass !== null);
    a && (i.body.push(a), a.type === "MethodDefinition" && a.kind === "constructor" && (s && this.raise(a.start, "Duplicate constructor in the same class"), s = !0));
  }
  return this.strict = r, this.next(), e.body = this.finishNode(i, "ClassBody"), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
};
te.parseClassElement = function(e) {
  var t = this;
  if (this.eat(d.semi))
    return null;
  var r = this.startNode(), i = function(h, y) {
    y === void 0 && (y = !1);
    var m = t.start, x = t.startLoc;
    return t.eatContextual(h) ? t.type !== d.parenL && (!y || !t.canInsertSemicolon()) ? !0 : (r.key && t.unexpected(), r.computed = !1, r.key = t.startNodeAt(m, x), r.key.name = h, t.finishNode(r.key, "Identifier"), !1) : !1;
  };
  r.kind = "method", r.static = i("static");
  var s = this.eat(d.star), a = !1;
  s || (this.options.ecmaVersion >= 8 && i("async", !0) ? (a = !0, s = this.options.ecmaVersion >= 9 && this.eat(d.star)) : i("get") ? r.kind = "get" : i("set") && (r.kind = "set")), r.key || this.parsePropertyName(r);
  var u = r.key, f = !1;
  return !r.computed && !r.static && (u.type === "Identifier" && u.name === "constructor" || u.type === "Literal" && u.value === "constructor") ? (r.kind !== "method" && this.raise(u.start, "Constructor can't have get/set modifier"), s && this.raise(u.start, "Constructor can't be a generator"), a && this.raise(u.start, "Constructor can't be an async method"), r.kind = "constructor", f = e) : r.static && u.type === "Identifier" && u.name === "prototype" && this.raise(u.start, "Classes may not have a static property named prototype"), this.parseClassMethod(r, s, a, f), r.kind === "get" && r.value.params.length !== 0 && this.raiseRecoverable(r.value.start, "getter should have no params"), r.kind === "set" && r.value.params.length !== 1 && this.raiseRecoverable(r.value.start, "setter should have exactly one param"), r.kind === "set" && r.value.params[0].type === "RestElement" && this.raiseRecoverable(r.value.params[0].start, "Setter cannot use rest params"), r;
};
te.parseClassMethod = function(e, t, r, i) {
  return e.value = this.parseMethod(t, r, i), this.finishNode(e, "MethodDefinition");
};
te.parseClassId = function(e, t) {
  this.type === d.name ? (e.id = this.parseIdent(), t && this.checkLVal(e.id, Ye, !1)) : (t === !0 && this.unexpected(), e.id = null);
};
te.parseClassSuper = function(e) {
  e.superClass = this.eat(d._extends) ? this.parseExprSubscripts() : null;
};
te.parseExport = function(e, t) {
  if (this.next(), this.eat(d.star))
    return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (e.exported = this.parseIdent(!0), this.checkExport(t, e.exported.name, this.lastTokStart)) : e.exported = null), this.expectContextual("from"), this.type !== d.string && this.unexpected(), e.source = this.parseExprAtom(), this.semicolon(), this.finishNode(e, "ExportAllDeclaration");
  if (this.eat(d._default)) {
    this.checkExport(t, "default", this.lastTokStart);
    var r;
    if (this.type === d._function || (r = this.isAsyncFunction())) {
      var i = this.startNode();
      this.next(), r && this.next(), e.declaration = this.parseFunction(i, yt | an, !1, r);
    } else if (this.type === d._class) {
      var s = this.startNode();
      e.declaration = this.parseClass(s, "nullableID");
    } else
      e.declaration = this.parseMaybeAssign(), this.semicolon();
    return this.finishNode(e, "ExportDefaultDeclaration");
  }
  if (this.shouldParseExportStatement())
    e.declaration = this.parseStatement(null), e.declaration.type === "VariableDeclaration" ? this.checkVariableExport(t, e.declaration.declarations) : this.checkExport(t, e.declaration.id.name, e.declaration.id.start), e.specifiers = [], e.source = null;
  else {
    if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(t), this.eatContextual("from"))
      this.type !== d.string && this.unexpected(), e.source = this.parseExprAtom();
    else {
      for (var a = 0, u = e.specifiers; a < u.length; a += 1) {
        var f = u[a];
        this.checkUnreserved(f.local), this.checkLocalExport(f.local);
      }
      e.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(e, "ExportNamedDeclaration");
};
te.checkExport = function(e, t, r) {
  e && (Ut(e, t) && this.raiseRecoverable(r, "Duplicate export '" + t + "'"), e[t] = !0);
};
te.checkPatternExport = function(e, t) {
  var r = t.type;
  if (r === "Identifier")
    this.checkExport(e, t.name, t.start);
  else if (r === "ObjectPattern")
    for (var i = 0, s = t.properties; i < s.length; i += 1) {
      var a = s[i];
      this.checkPatternExport(e, a);
    }
  else if (r === "ArrayPattern")
    for (var u = 0, f = t.elements; u < f.length; u += 1) {
      var h = f[u];
      h && this.checkPatternExport(e, h);
    }
  else
    r === "Property" ? this.checkPatternExport(e, t.value) : r === "AssignmentPattern" ? this.checkPatternExport(e, t.left) : r === "RestElement" ? this.checkPatternExport(e, t.argument) : r === "ParenthesizedExpression" && this.checkPatternExport(e, t.expression);
};
te.checkVariableExport = function(e, t) {
  if (e)
    for (var r = 0, i = t; r < i.length; r += 1) {
      var s = i[r];
      this.checkPatternExport(e, s.id);
    }
};
te.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
te.parseExportSpecifiers = function(e) {
  var t = [], r = !0;
  for (this.expect(d.braceL); !this.eat(d.braceR); ) {
    if (r)
      r = !1;
    else if (this.expect(d.comma), this.afterTrailingComma(d.braceR))
      break;
    var i = this.startNode();
    i.local = this.parseIdent(!0), i.exported = this.eatContextual("as") ? this.parseIdent(!0) : i.local, this.checkExport(e, i.exported.name, i.exported.start), t.push(this.finishNode(i, "ExportSpecifier"));
  }
  return t;
};
te.parseImport = function(e) {
  return this.next(), this.type === d.string ? (e.specifiers = ca, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === d.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(e, "ImportDeclaration");
};
te.parseImportSpecifiers = function() {
  var e = [], t = !0;
  if (this.type === d.name) {
    var r = this.startNode();
    if (r.local = this.parseIdent(), this.checkLVal(r.local, Ye), e.push(this.finishNode(r, "ImportDefaultSpecifier")), !this.eat(d.comma))
      return e;
  }
  if (this.type === d.star) {
    var i = this.startNode();
    return this.next(), this.expectContextual("as"), i.local = this.parseIdent(), this.checkLVal(i.local, Ye), e.push(this.finishNode(i, "ImportNamespaceSpecifier")), e;
  }
  for (this.expect(d.braceL); !this.eat(d.braceR); ) {
    if (t)
      t = !1;
    else if (this.expect(d.comma), this.afterTrailingComma(d.braceR))
      break;
    var s = this.startNode();
    s.imported = this.parseIdent(!0), this.eatContextual("as") ? s.local = this.parseIdent() : (this.checkUnreserved(s.imported), s.local = s.imported), this.checkLVal(s.local, Ye), e.push(this.finishNode(s, "ImportSpecifier"));
  }
  return e;
};
te.adaptDirectivePrologue = function(e) {
  for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t)
    e[t].directive = e[t].expression.raw.slice(1, -1);
};
te.isDirectiveCandidate = function(e) {
  return e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && // Reject parenthesized strings.
  (this.input[e.start] === '"' || this.input[e.start] === "'");
};
var Xe = xe.prototype;
Xe.toAssignable = function(e, t, r) {
  if (this.options.ecmaVersion >= 6 && e)
    switch (e.type) {
      case "Identifier":
        this.inAsync && e.name === "await" && this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        e.type = "ObjectPattern", r && this.checkPatternErrors(r, !0);
        for (var i = 0, s = e.properties; i < s.length; i += 1) {
          var a = s[i];
          this.toAssignable(a, t), a.type === "RestElement" && (a.argument.type === "ArrayPattern" || a.argument.type === "ObjectPattern") && this.raise(a.argument.start, "Unexpected token");
        }
        break;
      case "Property":
        e.kind !== "init" && this.raise(e.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(e.value, t);
        break;
      case "ArrayExpression":
        e.type = "ArrayPattern", r && this.checkPatternErrors(r, !0), this.toAssignableList(e.elements, t);
        break;
      case "SpreadElement":
        e.type = "RestElement", this.toAssignable(e.argument, t), e.argument.type === "AssignmentPattern" && this.raise(e.argument.start, "Rest elements cannot have a default value");
        break;
      case "AssignmentExpression":
        e.operator !== "=" && this.raise(e.left.end, "Only '=' operator can be used for specifying default value."), e.type = "AssignmentPattern", delete e.operator, this.toAssignable(e.left, t);
      case "AssignmentPattern":
        break;
      case "ParenthesizedExpression":
        this.toAssignable(e.expression, t, r);
        break;
      case "ChainExpression":
        this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (!t)
          break;
      default:
        this.raise(e.start, "Assigning to rvalue");
    }
  else
    r && this.checkPatternErrors(r, !0);
  return e;
};
Xe.toAssignableList = function(e, t) {
  for (var r = e.length, i = 0; i < r; i++) {
    var s = e[i];
    s && this.toAssignable(s, t);
  }
  if (r) {
    var a = e[r - 1];
    this.options.ecmaVersion === 6 && t && a && a.type === "RestElement" && a.argument.type !== "Identifier" && this.unexpected(a.argument.start);
  }
  return e;
};
Xe.parseSpread = function(e) {
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeAssign(!1, e), this.finishNode(t, "SpreadElement");
};
Xe.parseRestBinding = function() {
  var e = this.startNode();
  return this.next(), this.options.ecmaVersion === 6 && this.type !== d.name && this.unexpected(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
};
Xe.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case d.bracketL:
        var e = this.startNode();
        return this.next(), e.elements = this.parseBindingList(d.bracketR, !0, !0), this.finishNode(e, "ArrayPattern");
      case d.braceL:
        return this.parseObj(!0);
    }
  return this.parseIdent();
};
Xe.parseBindingList = function(e, t, r) {
  for (var i = [], s = !0; !this.eat(e); )
    if (s ? s = !1 : this.expect(d.comma), t && this.type === d.comma)
      i.push(null);
    else {
      if (r && this.afterTrailingComma(e))
        break;
      if (this.type === d.ellipsis) {
        var a = this.parseRestBinding();
        this.parseBindingListItem(a), i.push(a), this.type === d.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.expect(e);
        break;
      } else {
        var u = this.parseMaybeDefault(this.start, this.startLoc);
        this.parseBindingListItem(u), i.push(u);
      }
    }
  return i;
};
Xe.parseBindingListItem = function(e) {
  return e;
};
Xe.parseMaybeDefault = function(e, t, r) {
  if (r = r || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(d.eq))
    return r;
  var i = this.startNodeAt(e, t);
  return i.left = r, i.right = this.parseMaybeAssign(), this.finishNode(i, "AssignmentPattern");
};
Xe.checkLVal = function(e, t, r) {
  switch (t === void 0 && (t = bi), e.type) {
    case "Identifier":
      t === Ye && e.name === "let" && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"), this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (t ? "Binding " : "Assigning to ") + e.name + " in strict mode"), r && (Ut(r, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), r[e.name] = !0), t !== bi && t !== sn && this.declareName(e.name, t, e.start);
      break;
    case "ChainExpression":
      this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      t && this.raiseRecoverable(e.start, "Binding member expression");
      break;
    case "ObjectPattern":
      for (var i = 0, s = e.properties; i < s.length; i += 1) {
        var a = s[i];
        this.checkLVal(a, t, r);
      }
      break;
    case "Property":
      this.checkLVal(e.value, t, r);
      break;
    case "ArrayPattern":
      for (var u = 0, f = e.elements; u < f.length; u += 1) {
        var h = f[u];
        h && this.checkLVal(h, t, r);
      }
      break;
    case "AssignmentPattern":
      this.checkLVal(e.left, t, r);
      break;
    case "RestElement":
      this.checkLVal(e.argument, t, r);
      break;
    case "ParenthesizedExpression":
      this.checkLVal(e.expression, t, r);
      break;
    default:
      this.raise(e.start, (t ? "Binding" : "Assigning to") + " rvalue");
  }
};
var ie = xe.prototype;
ie.checkPropClash = function(e, t, r) {
  if (!(this.options.ecmaVersion >= 9 && e.type === "SpreadElement") && !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))) {
    var i = e.key, s;
    switch (i.type) {
      case "Identifier":
        s = i.name;
        break;
      case "Literal":
        s = String(i.value);
        break;
      default:
        return;
    }
    var a = e.kind;
    if (this.options.ecmaVersion >= 6) {
      s === "__proto__" && a === "init" && (t.proto && (r ? r.doubleProto < 0 && (r.doubleProto = i.start) : this.raiseRecoverable(i.start, "Redefinition of __proto__ property")), t.proto = !0);
      return;
    }
    s = "$" + s;
    var u = t[s];
    if (u) {
      var f;
      a === "init" ? f = this.strict && u.init || u.get || u.set : f = u.init || u[a], f && this.raiseRecoverable(i.start, "Redefinition of property");
    } else
      u = t[s] = {
        init: !1,
        get: !1,
        set: !1
      };
    u[a] = !0;
  }
};
ie.parseExpression = function(e, t) {
  var r = this.start, i = this.startLoc, s = this.parseMaybeAssign(e, t);
  if (this.type === d.comma) {
    var a = this.startNodeAt(r, i);
    for (a.expressions = [s]; this.eat(d.comma); )
      a.expressions.push(this.parseMaybeAssign(e, t));
    return this.finishNode(a, "SequenceExpression");
  }
  return s;
};
ie.parseMaybeAssign = function(e, t, r) {
  if (this.isContextual("yield")) {
    if (this.inGenerator)
      return this.parseYield(e);
    this.exprAllowed = !1;
  }
  var i = !1, s = -1, a = -1;
  t ? (s = t.parenthesizedAssign, a = t.trailingComma, t.parenthesizedAssign = t.trailingComma = -1) : (t = new $t(), i = !0);
  var u = this.start, f = this.startLoc;
  (this.type === d.parenL || this.type === d.name) && (this.potentialArrowAt = this.start);
  var h = this.parseMaybeConditional(e, t);
  if (r && (h = r.call(this, h, u, f)), this.type.isAssign) {
    var y = this.startNodeAt(u, f);
    return y.operator = this.value, y.left = this.type === d.eq ? this.toAssignable(h, !1, t) : h, i || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1), t.shorthandAssign >= y.left.start && (t.shorthandAssign = -1), this.checkLVal(h), this.next(), y.right = this.parseMaybeAssign(e), this.finishNode(y, "AssignmentExpression");
  } else
    i && this.checkExpressionErrors(t, !0);
  return s > -1 && (t.parenthesizedAssign = s), a > -1 && (t.trailingComma = a), h;
};
ie.parseMaybeConditional = function(e, t) {
  var r = this.start, i = this.startLoc, s = this.parseExprOps(e, t);
  if (this.checkExpressionErrors(t))
    return s;
  if (this.eat(d.question)) {
    var a = this.startNodeAt(r, i);
    return a.test = s, a.consequent = this.parseMaybeAssign(), this.expect(d.colon), a.alternate = this.parseMaybeAssign(e), this.finishNode(a, "ConditionalExpression");
  }
  return s;
};
ie.parseExprOps = function(e, t) {
  var r = this.start, i = this.startLoc, s = this.parseMaybeUnary(t, !1);
  return this.checkExpressionErrors(t) || s.start === r && s.type === "ArrowFunctionExpression" ? s : this.parseExprOp(s, r, i, -1, e);
};
ie.parseExprOp = function(e, t, r, i, s) {
  var a = this.type.binop;
  if (a != null && (!s || this.type !== d._in) && a > i) {
    var u = this.type === d.logicalOR || this.type === d.logicalAND, f = this.type === d.coalesce;
    f && (a = d.logicalAND.binop);
    var h = this.value;
    this.next();
    var y = this.start, m = this.startLoc, x = this.parseExprOp(this.parseMaybeUnary(null, !1), y, m, a, s), S = this.buildBinary(t, r, e, x, h, u || f);
    return (u && this.type === d.coalesce || f && (this.type === d.logicalOR || this.type === d.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(S, t, r, i, s);
  }
  return e;
};
ie.buildBinary = function(e, t, r, i, s, a) {
  var u = this.startNodeAt(e, t);
  return u.left = r, u.operator = s, u.right = i, this.finishNode(u, a ? "LogicalExpression" : "BinaryExpression");
};
ie.parseMaybeUnary = function(e, t) {
  var r = this.start, i = this.startLoc, s;
  if (this.isContextual("await") && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction))
    s = this.parseAwait(), t = !0;
  else if (this.type.prefix) {
    var a = this.startNode(), u = this.type === d.incDec;
    a.operator = this.value, a.prefix = !0, this.next(), a.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(e, !0), u ? this.checkLVal(a.argument) : this.strict && a.operator === "delete" && a.argument.type === "Identifier" ? this.raiseRecoverable(a.start, "Deleting local variable in strict mode") : t = !0, s = this.finishNode(a, u ? "UpdateExpression" : "UnaryExpression");
  } else {
    if (s = this.parseExprSubscripts(e), this.checkExpressionErrors(e))
      return s;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var f = this.startNodeAt(r, i);
      f.operator = this.value, f.prefix = !1, f.argument = s, this.checkLVal(s), this.next(), s = this.finishNode(f, "UpdateExpression");
    }
  }
  return !t && this.eat(d.starstar) ? this.buildBinary(r, i, s, this.parseMaybeUnary(null, !1), "**", !1) : s;
};
ie.parseExprSubscripts = function(e) {
  var t = this.start, r = this.startLoc, i = this.parseExprAtom(e);
  if (i.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
    return i;
  var s = this.parseSubscripts(i, t, r);
  return e && s.type === "MemberExpression" && (e.parenthesizedAssign >= s.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= s.start && (e.parenthesizedBind = -1)), s;
};
ie.parseSubscripts = function(e, t, r, i) {
  for (var s = this.options.ecmaVersion >= 8 && e.type === "Identifier" && e.name === "async" && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && this.potentialArrowAt === e.start, a = !1; ; ) {
    var u = this.parseSubscript(e, t, r, i, s, a);
    if (u.optional && (a = !0), u === e || u.type === "ArrowFunctionExpression") {
      if (a) {
        var f = this.startNodeAt(t, r);
        f.expression = u, u = this.finishNode(f, "ChainExpression");
      }
      return u;
    }
    e = u;
  }
};
ie.parseSubscript = function(e, t, r, i, s, a) {
  var u = this.options.ecmaVersion >= 11, f = u && this.eat(d.questionDot);
  i && f && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  var h = this.eat(d.bracketL);
  if (h || f && this.type !== d.parenL && this.type !== d.backQuote || this.eat(d.dot)) {
    var y = this.startNodeAt(t, r);
    y.object = e, y.property = h ? this.parseExpression() : this.parseIdent(this.options.allowReserved !== "never"), y.computed = !!h, h && this.expect(d.bracketR), u && (y.optional = f), e = this.finishNode(y, "MemberExpression");
  } else if (!i && this.eat(d.parenL)) {
    var m = new $t(), x = this.yieldPos, S = this.awaitPos, b = this.awaitIdentPos;
    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
    var C = this.parseExprList(d.parenR, this.options.ecmaVersion >= 8, !1, m);
    if (s && !f && !this.canInsertSemicolon() && this.eat(d.arrow))
      return this.checkPatternErrors(m, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = x, this.awaitPos = S, this.awaitIdentPos = b, this.parseArrowExpression(this.startNodeAt(t, r), C, !0);
    this.checkExpressionErrors(m, !0), this.yieldPos = x || this.yieldPos, this.awaitPos = S || this.awaitPos, this.awaitIdentPos = b || this.awaitIdentPos;
    var v = this.startNodeAt(t, r);
    v.callee = e, v.arguments = C, u && (v.optional = f), e = this.finishNode(v, "CallExpression");
  } else if (this.type === d.backQuote) {
    (f || a) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    var _ = this.startNodeAt(t, r);
    _.tag = e, _.quasi = this.parseTemplate({ isTagged: !0 }), e = this.finishNode(_, "TaggedTemplateExpression");
  }
  return e;
};
ie.parseExprAtom = function(e) {
  this.type === d.slash && this.readRegexp();
  var t, r = this.potentialArrowAt === this.start;
  switch (this.type) {
    case d._super:
      return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), t = this.startNode(), this.next(), this.type === d.parenL && !this.allowDirectSuper && this.raise(t.start, "super() call outside constructor of a subclass"), this.type !== d.dot && this.type !== d.bracketL && this.type !== d.parenL && this.unexpected(), this.finishNode(t, "Super");
    case d._this:
      return t = this.startNode(), this.next(), this.finishNode(t, "ThisExpression");
    case d.name:
      var i = this.start, s = this.startLoc, a = this.containsEsc, u = this.parseIdent(!1);
      if (this.options.ecmaVersion >= 8 && !a && u.name === "async" && !this.canInsertSemicolon() && this.eat(d._function))
        return this.parseFunction(this.startNodeAt(i, s), 0, !1, !0);
      if (r && !this.canInsertSemicolon()) {
        if (this.eat(d.arrow))
          return this.parseArrowExpression(this.startNodeAt(i, s), [u], !1);
        if (this.options.ecmaVersion >= 8 && u.name === "async" && this.type === d.name && !a)
          return u = this.parseIdent(!1), (this.canInsertSemicolon() || !this.eat(d.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(i, s), [u], !0);
      }
      return u;
    case d.regexp:
      var f = this.value;
      return t = this.parseLiteral(f.value), t.regex = { pattern: f.pattern, flags: f.flags }, t;
    case d.num:
    case d.string:
      return this.parseLiteral(this.value);
    case d._null:
    case d._true:
    case d._false:
      return t = this.startNode(), t.value = this.type === d._null ? null : this.type === d._true, t.raw = this.type.keyword, this.next(), this.finishNode(t, "Literal");
    case d.parenL:
      var h = this.start, y = this.parseParenAndDistinguishExpression(r);
      return e && (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(y) && (e.parenthesizedAssign = h), e.parenthesizedBind < 0 && (e.parenthesizedBind = h)), y;
    case d.bracketL:
      return t = this.startNode(), this.next(), t.elements = this.parseExprList(d.bracketR, !0, !0, e), this.finishNode(t, "ArrayExpression");
    case d.braceL:
      return this.parseObj(!1, e);
    case d._function:
      return t = this.startNode(), this.next(), this.parseFunction(t, 0);
    case d._class:
      return this.parseClass(this.startNode(), !1);
    case d._new:
      return this.parseNew();
    case d.backQuote:
      return this.parseTemplate();
    case d._import:
      return this.options.ecmaVersion >= 11 ? this.parseExprImport() : this.unexpected();
    default:
      this.unexpected();
  }
};
ie.parseExprImport = function() {
  var e = this.startNode();
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import");
  var t = this.parseIdent(!0);
  switch (this.type) {
    case d.parenL:
      return this.parseDynamicImport(e);
    case d.dot:
      return e.meta = t, this.parseImportMeta(e);
    default:
      this.unexpected();
  }
};
ie.parseDynamicImport = function(e) {
  if (this.next(), e.source = this.parseMaybeAssign(), !this.eat(d.parenR)) {
    var t = this.start;
    this.eat(d.comma) && this.eat(d.parenR) ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()") : this.unexpected(t);
  }
  return this.finishNode(e, "ImportExpression");
};
ie.parseImportMeta = function(e) {
  this.next();
  var t = this.containsEsc;
  return e.property = this.parseIdent(!0), e.property.name !== "meta" && this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'"), t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"), this.finishNode(e, "MetaProperty");
};
ie.parseLiteral = function(e) {
  var t = this.startNode();
  return t.value = e, t.raw = this.input.slice(this.start, this.end), t.raw.charCodeAt(t.raw.length - 1) === 110 && (t.bigint = t.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(t, "Literal");
};
ie.parseParenExpression = function() {
  this.expect(d.parenL);
  var e = this.parseExpression();
  return this.expect(d.parenR), e;
};
ie.parseParenAndDistinguishExpression = function(e) {
  var t = this.start, r = this.startLoc, i, s = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var a = this.start, u = this.startLoc, f = [], h = !0, y = !1, m = new $t(), x = this.yieldPos, S = this.awaitPos, b;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== d.parenR; )
      if (h ? h = !1 : this.expect(d.comma), s && this.afterTrailingComma(d.parenR, !0)) {
        y = !0;
        break;
      } else if (this.type === d.ellipsis) {
        b = this.start, f.push(this.parseParenItem(this.parseRestBinding())), this.type === d.comma && this.raise(this.start, "Comma is not permitted after the rest element");
        break;
      } else
        f.push(this.parseMaybeAssign(!1, m, this.parseParenItem));
    var C = this.start, v = this.startLoc;
    if (this.expect(d.parenR), e && !this.canInsertSemicolon() && this.eat(d.arrow))
      return this.checkPatternErrors(m, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = x, this.awaitPos = S, this.parseParenArrowList(t, r, f);
    (!f.length || y) && this.unexpected(this.lastTokStart), b && this.unexpected(b), this.checkExpressionErrors(m, !0), this.yieldPos = x || this.yieldPos, this.awaitPos = S || this.awaitPos, f.length > 1 ? (i = this.startNodeAt(a, u), i.expressions = f, this.finishNodeAt(i, "SequenceExpression", C, v)) : i = f[0];
  } else
    i = this.parseParenExpression();
  if (this.options.preserveParens) {
    var _ = this.startNodeAt(t, r);
    return _.expression = i, this.finishNode(_, "ParenthesizedExpression");
  } else
    return i;
};
ie.parseParenItem = function(e) {
  return e;
};
ie.parseParenArrowList = function(e, t, r) {
  return this.parseArrowExpression(this.startNodeAt(e, t), r);
};
var fa = [];
ie.parseNew = function() {
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var e = this.startNode(), t = this.parseIdent(!0);
  if (this.options.ecmaVersion >= 6 && this.eat(d.dot)) {
    e.meta = t;
    var r = this.containsEsc;
    return e.property = this.parseIdent(!0), e.property.name !== "target" && this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"), r && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"), this.inNonArrowFunction() || this.raiseRecoverable(e.start, "'new.target' can only be used in functions"), this.finishNode(e, "MetaProperty");
  }
  var i = this.start, s = this.startLoc, a = this.type === d._import;
  return e.callee = this.parseSubscripts(this.parseExprAtom(), i, s, !0), a && e.callee.type === "ImportExpression" && this.raise(i, "Cannot use new with import()"), this.eat(d.parenL) ? e.arguments = this.parseExprList(d.parenR, this.options.ecmaVersion >= 8, !1) : e.arguments = fa, this.finishNode(e, "NewExpression");
};
ie.parseTemplateElement = function(e) {
  var t = e.isTagged, r = this.startNode();
  return this.type === d.invalidTemplate ? (t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), r.value = {
    raw: this.value,
    cooked: null
  }) : r.value = {
    raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `
`),
    cooked: this.value
  }, this.next(), r.tail = this.type === d.backQuote, this.finishNode(r, "TemplateElement");
};
ie.parseTemplate = function(e) {
  e === void 0 && (e = {});
  var t = e.isTagged;
  t === void 0 && (t = !1);
  var r = this.startNode();
  this.next(), r.expressions = [];
  var i = this.parseTemplateElement({ isTagged: t });
  for (r.quasis = [i]; !i.tail; )
    this.type === d.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(d.dollarBraceL), r.expressions.push(this.parseExpression()), this.expect(d.braceR), r.quasis.push(i = this.parseTemplateElement({ isTagged: t }));
  return this.next(), this.finishNode(r, "TemplateLiteral");
};
ie.isAsyncProp = function(e) {
  return !e.computed && e.key.type === "Identifier" && e.key.name === "async" && (this.type === d.name || this.type === d.num || this.type === d.string || this.type === d.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === d.star) && !Ne.test(this.input.slice(this.lastTokEnd, this.start));
};
ie.parseObj = function(e, t) {
  var r = this.startNode(), i = !0, s = {};
  for (r.properties = [], this.next(); !this.eat(d.braceR); ) {
    if (i)
      i = !1;
    else if (this.expect(d.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(d.braceR))
      break;
    var a = this.parseProperty(e, t);
    e || this.checkPropClash(a, s, t), r.properties.push(a);
  }
  return this.finishNode(r, e ? "ObjectPattern" : "ObjectExpression");
};
ie.parseProperty = function(e, t) {
  var r = this.startNode(), i, s, a, u;
  if (this.options.ecmaVersion >= 9 && this.eat(d.ellipsis))
    return e ? (r.argument = this.parseIdent(!1), this.type === d.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.finishNode(r, "RestElement")) : (this.type === d.parenL && t && (t.parenthesizedAssign < 0 && (t.parenthesizedAssign = this.start), t.parenthesizedBind < 0 && (t.parenthesizedBind = this.start)), r.argument = this.parseMaybeAssign(!1, t), this.type === d.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(r, "SpreadElement"));
  this.options.ecmaVersion >= 6 && (r.method = !1, r.shorthand = !1, (e || t) && (a = this.start, u = this.startLoc), e || (i = this.eat(d.star)));
  var f = this.containsEsc;
  return this.parsePropertyName(r), !e && !f && this.options.ecmaVersion >= 8 && !i && this.isAsyncProp(r) ? (s = !0, i = this.options.ecmaVersion >= 9 && this.eat(d.star), this.parsePropertyName(r, t)) : s = !1, this.parsePropertyValue(r, e, i, s, a, u, t, f), this.finishNode(r, "Property");
};
ie.parsePropertyValue = function(e, t, r, i, s, a, u, f) {
  if ((r || i) && this.type === d.colon && this.unexpected(), this.eat(d.colon))
    e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, u), e.kind = "init";
  else if (this.options.ecmaVersion >= 6 && this.type === d.parenL)
    t && this.unexpected(), e.kind = "init", e.method = !0, e.value = this.parseMethod(r, i);
  else if (!t && !f && this.options.ecmaVersion >= 5 && !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.type !== d.comma && this.type !== d.braceR && this.type !== d.eq) {
    (r || i) && this.unexpected(), e.kind = e.key.name, this.parsePropertyName(e), e.value = this.parseMethod(!1);
    var h = e.kind === "get" ? 0 : 1;
    if (e.value.params.length !== h) {
      var y = e.value.start;
      e.kind === "get" ? this.raiseRecoverable(y, "getter should have no params") : this.raiseRecoverable(y, "setter should have exactly one param");
    } else
      e.kind === "set" && e.value.params[0].type === "RestElement" && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
  } else
    this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier" ? ((r || i) && this.unexpected(), this.checkUnreserved(e.key), e.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = s), e.kind = "init", t ? e.value = this.parseMaybeDefault(s, a, e.key) : this.type === d.eq && u ? (u.shorthandAssign < 0 && (u.shorthandAssign = this.start), e.value = this.parseMaybeDefault(s, a, e.key)) : e.value = e.key, e.shorthand = !0) : this.unexpected();
};
ie.parsePropertyName = function(e) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(d.bracketL))
      return e.computed = !0, e.key = this.parseMaybeAssign(), this.expect(d.bracketR), e.key;
    e.computed = !1;
  }
  return e.key = this.type === d.num || this.type === d.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
ie.initFunction = function(e) {
  e.id = null, this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1), this.options.ecmaVersion >= 8 && (e.async = !1);
};
ie.parseMethod = function(e, t, r) {
  var i = this.startNode(), s = this.yieldPos, a = this.awaitPos, u = this.awaitIdentPos;
  return this.initFunction(i), this.options.ecmaVersion >= 6 && (i.generator = e), this.options.ecmaVersion >= 8 && (i.async = !!t), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Pr(t, i.generator) | en | (r ? tn : 0)), this.expect(d.parenL), i.params = this.parseBindingList(d.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(i, !1, !0), this.yieldPos = s, this.awaitPos = a, this.awaitIdentPos = u, this.finishNode(i, "FunctionExpression");
};
ie.parseArrowExpression = function(e, t, r) {
  var i = this.yieldPos, s = this.awaitPos, a = this.awaitIdentPos;
  return this.enterScope(Pr(r, !1) | Ki), this.initFunction(e), this.options.ecmaVersion >= 8 && (e.async = !!r), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t, !0), this.parseFunctionBody(e, !0, !1), this.yieldPos = i, this.awaitPos = s, this.awaitIdentPos = a, this.finishNode(e, "ArrowFunctionExpression");
};
ie.parseFunctionBody = function(e, t, r) {
  var i = t && this.type !== d.braceL, s = this.strict, a = !1;
  if (i)
    e.body = this.parseMaybeAssign(), e.expression = !0, this.checkParams(e, !1);
  else {
    var u = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
    (!s || u) && (a = this.strictDirective(this.end), a && u && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
    var f = this.labels;
    this.labels = [], a && (this.strict = !0), this.checkParams(e, !s && !a && !t && !r && this.isSimpleParamList(e.params)), this.strict && e.id && this.checkLVal(e.id, sn), e.body = this.parseBlock(!1, void 0, a && !s), e.expression = !1, this.adaptDirectivePrologue(e.body.body), this.labels = f;
  }
  this.exitScope();
};
ie.isSimpleParamList = function(e) {
  for (var t = 0, r = e; t < r.length; t += 1) {
    var i = r[t];
    if (i.type !== "Identifier")
      return !1;
  }
  return !0;
};
ie.checkParams = function(e, t) {
  for (var r = {}, i = 0, s = e.params; i < s.length; i += 1) {
    var a = s[i];
    this.checkLVal(a, Ir, t ? null : r);
  }
};
ie.parseExprList = function(e, t, r, i) {
  for (var s = [], a = !0; !this.eat(e); ) {
    if (a)
      a = !1;
    else if (this.expect(d.comma), t && this.afterTrailingComma(e))
      break;
    var u = void 0;
    r && this.type === d.comma ? u = null : this.type === d.ellipsis ? (u = this.parseSpread(i), i && this.type === d.comma && i.trailingComma < 0 && (i.trailingComma = this.start)) : u = this.parseMaybeAssign(!1, i), s.push(u);
  }
  return s;
};
ie.checkUnreserved = function(e) {
  var t = e.start, r = e.end, i = e.name;
  if (this.inGenerator && i === "yield" && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && i === "await" && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"), this.keywords.test(i) && this.raise(t, "Unexpected keyword '" + i + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(t, r).indexOf("\\") !== -1)) {
    var s = this.strict ? this.reservedWordsStrict : this.reservedWords;
    s.test(i) && (!this.inAsync && i === "await" && this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t, "The keyword '" + i + "' is reserved"));
  }
};
ie.parseIdent = function(e, t) {
  var r = this.startNode();
  return this.type === d.name ? r.name = this.value : this.type.keyword ? (r.name = this.type.keyword, (r.name === "class" || r.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop()) : this.unexpected(), this.next(!!e), this.finishNode(r, "Identifier"), e || (this.checkUnreserved(r), r.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = r.start)), r;
};
ie.parseYield = function(e) {
  this.yieldPos || (this.yieldPos = this.start);
  var t = this.startNode();
  return this.next(), this.type === d.semi || this.canInsertSemicolon() || this.type !== d.star && !this.type.startsExpr ? (t.delegate = !1, t.argument = null) : (t.delegate = this.eat(d.star), t.argument = this.parseMaybeAssign(e)), this.finishNode(t, "YieldExpression");
};
ie.parseAwait = function() {
  this.awaitPos || (this.awaitPos = this.start);
  var e = this.startNode();
  return this.next(), e.argument = this.parseMaybeUnary(null, !1), this.finishNode(e, "AwaitExpression");
};
var Dt = xe.prototype;
Dt.raise = function(e, t) {
  var r = Tr(this.input, e);
  t += " (" + r.line + ":" + r.column + ")";
  var i = new SyntaxError(t);
  throw i.pos = e, i.loc = r, i.raisedAt = this.pos, i;
};
Dt.raiseRecoverable = Dt.raise;
Dt.curPosition = function() {
  if (this.options.locations)
    return new ut(this.curLine, this.pos - this.lineStart);
};
var Ze = xe.prototype, ha = function(t) {
  this.flags = t, this.var = [], this.lexical = [], this.functions = [];
};
Ze.enterScope = function(e) {
  this.scopeStack.push(new ha(e));
};
Ze.exitScope = function() {
  this.scopeStack.pop();
};
Ze.treatFunctionsAsVarInScope = function(e) {
  return e.flags & wt || !this.inModule && e.flags & bt;
};
Ze.declareName = function(e, t, r) {
  var i = !1;
  if (t === Ye) {
    var s = this.currentScope();
    i = s.lexical.indexOf(e) > -1 || s.functions.indexOf(e) > -1 || s.var.indexOf(e) > -1, s.lexical.push(e), this.inModule && s.flags & bt && delete this.undefinedExports[e];
  } else if (t === nn) {
    var a = this.currentScope();
    a.lexical.push(e);
  } else if (t === rn) {
    var u = this.currentScope();
    this.treatFunctionsAsVar ? i = u.lexical.indexOf(e) > -1 : i = u.lexical.indexOf(e) > -1 || u.var.indexOf(e) > -1, u.functions.push(e);
  } else
    for (var f = this.scopeStack.length - 1; f >= 0; --f) {
      var h = this.scopeStack[f];
      if (h.lexical.indexOf(e) > -1 && !(h.flags & Zi && h.lexical[0] === e) || !this.treatFunctionsAsVarInScope(h) && h.functions.indexOf(e) > -1) {
        i = !0;
        break;
      }
      if (h.var.push(e), this.inModule && h.flags & bt && delete this.undefinedExports[e], h.flags & kr)
        break;
    }
  i && this.raiseRecoverable(r, "Identifier '" + e + "' has already been declared");
};
Ze.checkLocalExport = function(e) {
  this.scopeStack[0].lexical.indexOf(e.name) === -1 && this.scopeStack[0].var.indexOf(e.name) === -1 && (this.undefinedExports[e.name] = e);
};
Ze.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
Ze.currentVarScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & kr)
      return t;
  }
};
Ze.currentThisScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & kr && !(t.flags & Ki))
      return t;
  }
};
var Wt = function(t, r, i) {
  this.type = "", this.start = r, this.end = 0, t.options.locations && (this.loc = new At(t, i)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [r, 0]);
}, zt = xe.prototype;
zt.startNode = function() {
  return new Wt(this, this.start, this.startLoc);
};
zt.startNodeAt = function(e, t) {
  return new Wt(this, e, t);
};
function on(e, t, r, i) {
  return e.type = t, e.end = r, this.options.locations && (e.loc.end = i), this.options.ranges && (e.range[1] = r), e;
}
zt.finishNode = function(e, t) {
  return on.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
};
zt.finishNodeAt = function(e, t, r, i) {
  return on.call(this, e, t, r, i);
};
var De = function(t, r, i, s, a) {
  this.token = t, this.isExpr = !!r, this.preserveSpace = !!i, this.override = s, this.generator = !!a;
}, be = {
  b_stat: new De("{", !1),
  b_expr: new De("{", !0),
  b_tmpl: new De("${", !1),
  p_stat: new De("(", !1),
  p_expr: new De("(", !0),
  q_tmpl: new De("`", !0, !0, function(e) {
    return e.tryReadTemplateToken();
  }),
  f_stat: new De("function", !1),
  f_expr: new De("function", !0),
  f_expr_gen: new De("function", !0, !1, null, !0),
  f_gen: new De("function", !1, !1, null, !0)
}, Gt = xe.prototype;
Gt.initialContext = function() {
  return [be.b_stat];
};
Gt.braceIsBlock = function(e) {
  var t = this.curContext();
  return t === be.f_expr || t === be.f_stat ? !0 : e === d.colon && (t === be.b_stat || t === be.b_expr) ? !t.isExpr : e === d._return || e === d.name && this.exprAllowed ? Ne.test(this.input.slice(this.lastTokEnd, this.start)) : e === d._else || e === d.semi || e === d.eof || e === d.parenR || e === d.arrow ? !0 : e === d.braceL ? t === be.b_stat : e === d._var || e === d._const || e === d.name ? !1 : !this.exprAllowed;
};
Gt.inGeneratorContext = function() {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var t = this.context[e];
    if (t.token === "function")
      return t.generator;
  }
  return !1;
};
Gt.updateContext = function(e) {
  var t, r = this.type;
  r.keyword && e === d.dot ? this.exprAllowed = !1 : (t = r.updateContext) ? t.call(this, e) : this.exprAllowed = r.beforeExpr;
};
d.parenR.updateContext = d.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var e = this.context.pop();
  e === be.b_stat && this.curContext().token === "function" && (e = this.context.pop()), this.exprAllowed = !e.isExpr;
};
d.braceL.updateContext = function(e) {
  this.context.push(this.braceIsBlock(e) ? be.b_stat : be.b_expr), this.exprAllowed = !0;
};
d.dollarBraceL.updateContext = function() {
  this.context.push(be.b_tmpl), this.exprAllowed = !0;
};
d.parenL.updateContext = function(e) {
  var t = e === d._if || e === d._for || e === d._with || e === d._while;
  this.context.push(t ? be.p_stat : be.p_expr), this.exprAllowed = !0;
};
d.incDec.updateContext = function() {
};
d._function.updateContext = d._class.updateContext = function(e) {
  e.beforeExpr && e !== d.semi && e !== d._else && !(e === d._return && Ne.test(this.input.slice(this.lastTokEnd, this.start))) && !((e === d.colon || e === d.braceL) && this.curContext() === be.b_stat) ? this.context.push(be.f_expr) : this.context.push(be.f_stat), this.exprAllowed = !1;
};
d.backQuote.updateContext = function() {
  this.curContext() === be.q_tmpl ? this.context.pop() : this.context.push(be.q_tmpl), this.exprAllowed = !1;
};
d.star.updateContext = function(e) {
  if (e === d._function) {
    var t = this.context.length - 1;
    this.context[t] === be.f_expr ? this.context[t] = be.f_expr_gen : this.context[t] = be.f_gen;
  }
  this.exprAllowed = !0;
};
d.name.updateContext = function(e) {
  var t = !1;
  this.options.ecmaVersion >= 6 && e !== d.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (t = !0), this.exprAllowed = t;
};
var un = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", ln = un + " Extended_Pictographic", pa = ln, da = {
  9: un,
  10: ln,
  11: pa
}, Si = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", cn = "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", fn = cn + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", ma = fn + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", ga = {
  9: cn,
  10: fn,
  11: ma
}, hn = {};
function Rr(e) {
  var t = hn[e] = {
    binary: tt(da[e] + " " + Si),
    nonBinary: {
      General_Category: tt(Si),
      Script: tt(ga[e])
    }
  };
  t.nonBinary.Script_Extensions = t.nonBinary.Script, t.nonBinary.gc = t.nonBinary.General_Category, t.nonBinary.sc = t.nonBinary.Script, t.nonBinary.scx = t.nonBinary.Script_Extensions;
}
Rr(9);
Rr(10);
Rr(11);
var G = xe.prototype, He = function(t) {
  this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : ""), this.unicodeProperties = hn[t.options.ecmaVersion >= 11 ? 11 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = [], this.backReferenceNames = [];
};
He.prototype.reset = function(t, r, i) {
  var s = i.indexOf("u") !== -1;
  this.start = t | 0, this.source = r + "", this.flags = i, this.switchU = s && this.parser.options.ecmaVersion >= 6, this.switchN = s && this.parser.options.ecmaVersion >= 9;
};
He.prototype.raise = function(t) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t);
};
He.prototype.at = function(t, r) {
  r === void 0 && (r = !1);
  var i = this.source, s = i.length;
  if (t >= s)
    return -1;
  var a = i.charCodeAt(t);
  if (!(r || this.switchU) || a <= 55295 || a >= 57344 || t + 1 >= s)
    return a;
  var u = i.charCodeAt(t + 1);
  return u >= 56320 && u <= 57343 ? (a << 10) + u - 56613888 : a;
};
He.prototype.nextIndex = function(t, r) {
  r === void 0 && (r = !1);
  var i = this.source, s = i.length;
  if (t >= s)
    return s;
  var a = i.charCodeAt(t), u;
  return !(r || this.switchU) || a <= 55295 || a >= 57344 || t + 1 >= s || (u = i.charCodeAt(t + 1)) < 56320 || u > 57343 ? t + 1 : t + 2;
};
He.prototype.current = function(t) {
  return t === void 0 && (t = !1), this.at(this.pos, t);
};
He.prototype.lookahead = function(t) {
  return t === void 0 && (t = !1), this.at(this.nextIndex(this.pos, t), t);
};
He.prototype.advance = function(t) {
  t === void 0 && (t = !1), this.pos = this.nextIndex(this.pos, t);
};
He.prototype.eat = function(t, r) {
  return r === void 0 && (r = !1), this.current(r) === t ? (this.advance(r), !0) : !1;
};
function Bt(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
G.validateRegExpFlags = function(e) {
  for (var t = e.validFlags, r = e.flags, i = 0; i < r.length; i++) {
    var s = r.charAt(i);
    t.indexOf(s) === -1 && this.raise(e.start, "Invalid regular expression flag"), r.indexOf(s, i + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag");
  }
};
G.validateRegExpPattern = function(e) {
  this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && e.groupNames.length > 0 && (e.switchN = !0, this.regexp_pattern(e));
};
G.regexp_pattern = function(e) {
  e.pos = 0, e.lastIntValue = 0, e.lastStringValue = "", e.lastAssertionIsQuantifiable = !1, e.numCapturingParens = 0, e.maxBackReference = 0, e.groupNames.length = 0, e.backReferenceNames.length = 0, this.regexp_disjunction(e), e.pos !== e.source.length && (e.eat(
    41
    /* ) */
  ) && e.raise("Unmatched ')'"), (e.eat(
    93
    /* ] */
  ) || e.eat(
    125
    /* } */
  )) && e.raise("Lone quantifier brackets")), e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");
  for (var t = 0, r = e.backReferenceNames; t < r.length; t += 1) {
    var i = r[t];
    e.groupNames.indexOf(i) === -1 && e.raise("Invalid named capture referenced");
  }
};
G.regexp_disjunction = function(e) {
  for (this.regexp_alternative(e); e.eat(
    124
    /* | */
  ); )
    this.regexp_alternative(e);
  this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"), e.eat(
    123
    /* { */
  ) && e.raise("Lone quantifier brackets");
};
G.regexp_alternative = function(e) {
  for (; e.pos < e.source.length && this.regexp_eatTerm(e); )
    ;
};
G.regexp_eatTerm = function(e) {
  return this.regexp_eatAssertion(e) ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), !0) : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e)) ? (this.regexp_eatQuantifier(e), !0) : !1;
};
G.regexp_eatAssertion = function(e) {
  var t = e.pos;
  if (e.lastAssertionIsQuantifiable = !1, e.eat(
    94
    /* ^ */
  ) || e.eat(
    36
    /* $ */
  ))
    return !0;
  if (e.eat(
    92
    /* \ */
  )) {
    if (e.eat(
      66
      /* B */
    ) || e.eat(
      98
      /* b */
    ))
      return !0;
    e.pos = t;
  }
  if (e.eat(
    40
    /* ( */
  ) && e.eat(
    63
    /* ? */
  )) {
    var r = !1;
    if (this.options.ecmaVersion >= 9 && (r = e.eat(
      60
      /* < */
    )), e.eat(
      61
      /* = */
    ) || e.eat(
      33
      /* ! */
    ))
      return this.regexp_disjunction(e), e.eat(
        41
        /* ) */
      ) || e.raise("Unterminated group"), e.lastAssertionIsQuantifiable = !r, !0;
  }
  return e.pos = t, !1;
};
G.regexp_eatQuantifier = function(e, t) {
  return t === void 0 && (t = !1), this.regexp_eatQuantifierPrefix(e, t) ? (e.eat(
    63
    /* ? */
  ), !0) : !1;
};
G.regexp_eatQuantifierPrefix = function(e, t) {
  return e.eat(
    42
    /* * */
  ) || e.eat(
    43
    /* + */
  ) || e.eat(
    63
    /* ? */
  ) || this.regexp_eatBracedQuantifier(e, t);
};
G.regexp_eatBracedQuantifier = function(e, t) {
  var r = e.pos;
  if (e.eat(
    123
    /* { */
  )) {
    var i = 0, s = -1;
    if (this.regexp_eatDecimalDigits(e) && (i = e.lastIntValue, e.eat(
      44
      /* , */
    ) && this.regexp_eatDecimalDigits(e) && (s = e.lastIntValue), e.eat(
      125
      /* } */
    )))
      return s !== -1 && s < i && !t && e.raise("numbers out of order in {} quantifier"), !0;
    e.switchU && !t && e.raise("Incomplete quantifier"), e.pos = r;
  }
  return !1;
};
G.regexp_eatAtom = function(e) {
  return this.regexp_eatPatternCharacters(e) || e.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e);
};
G.regexp_eatReverseSolidusAtomEscape = function(e) {
  var t = e.pos;
  if (e.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatAtomEscape(e))
      return !0;
    e.pos = t;
  }
  return !1;
};
G.regexp_eatUncapturingGroup = function(e) {
  var t = e.pos;
  if (e.eat(
    40
    /* ( */
  )) {
    if (e.eat(
      63
      /* ? */
    ) && e.eat(
      58
      /* : */
    )) {
      if (this.regexp_disjunction(e), e.eat(
        41
        /* ) */
      ))
        return !0;
      e.raise("Unterminated group");
    }
    e.pos = t;
  }
  return !1;
};
G.regexp_eatCapturingGroup = function(e) {
  if (e.eat(
    40
    /* ( */
  )) {
    if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(e) : e.current() === 63 && e.raise("Invalid group"), this.regexp_disjunction(e), e.eat(
      41
      /* ) */
    ))
      return e.numCapturingParens += 1, !0;
    e.raise("Unterminated group");
  }
  return !1;
};
G.regexp_eatExtendedAtom = function(e) {
  return e.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e);
};
G.regexp_eatInvalidBracedQuantifier = function(e) {
  return this.regexp_eatBracedQuantifier(e, !0) && e.raise("Nothing to repeat"), !1;
};
G.regexp_eatSyntaxCharacter = function(e) {
  var t = e.current();
  return pn(t) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
function pn(e) {
  return e === 36 || e >= 40 && e <= 43 || e === 46 || e === 63 || e >= 91 && e <= 94 || e >= 123 && e <= 125;
}
G.regexp_eatPatternCharacters = function(e) {
  for (var t = e.pos, r = 0; (r = e.current()) !== -1 && !pn(r); )
    e.advance();
  return e.pos !== t;
};
G.regexp_eatExtendedPatternCharacter = function(e) {
  var t = e.current();
  return t !== -1 && t !== 36 && !(t >= 40 && t <= 43) && t !== 46 && t !== 63 && t !== 91 && t !== 94 && t !== 124 ? (e.advance(), !0) : !1;
};
G.regexp_groupSpecifier = function(e) {
  if (e.eat(
    63
    /* ? */
  )) {
    if (this.regexp_eatGroupName(e)) {
      e.groupNames.indexOf(e.lastStringValue) !== -1 && e.raise("Duplicate capture group name"), e.groupNames.push(e.lastStringValue);
      return;
    }
    e.raise("Invalid group");
  }
};
G.regexp_eatGroupName = function(e) {
  if (e.lastStringValue = "", e.eat(
    60
    /* < */
  )) {
    if (this.regexp_eatRegExpIdentifierName(e) && e.eat(
      62
      /* > */
    ))
      return !0;
    e.raise("Invalid capture group name");
  }
  return !1;
};
G.regexp_eatRegExpIdentifierName = function(e) {
  if (e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e)) {
    for (e.lastStringValue += Bt(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e); )
      e.lastStringValue += Bt(e.lastIntValue);
    return !0;
  }
  return !1;
};
G.regexp_eatRegExpIdentifierStart = function(e) {
  var t = e.pos, r = this.options.ecmaVersion >= 11, i = e.current(r);
  return e.advance(r), i === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, r) && (i = e.lastIntValue), ya(i) ? (e.lastIntValue = i, !0) : (e.pos = t, !1);
};
function ya(e) {
  return Je(e, !0) || e === 36 || e === 95;
}
G.regexp_eatRegExpIdentifierPart = function(e) {
  var t = e.pos, r = this.options.ecmaVersion >= 11, i = e.current(r);
  return e.advance(r), i === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, r) && (i = e.lastIntValue), va(i) ? (e.lastIntValue = i, !0) : (e.pos = t, !1);
};
function va(e) {
  return rt(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
G.regexp_eatAtomEscape = function(e) {
  return this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e) ? !0 : (e.switchU && (e.current() === 99 && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), !1);
};
G.regexp_eatBackReference = function(e) {
  var t = e.pos;
  if (this.regexp_eatDecimalEscape(e)) {
    var r = e.lastIntValue;
    if (e.switchU)
      return r > e.maxBackReference && (e.maxBackReference = r), !0;
    if (r <= e.numCapturingParens)
      return !0;
    e.pos = t;
  }
  return !1;
};
G.regexp_eatKGroupName = function(e) {
  if (e.eat(
    107
    /* k */
  )) {
    if (this.regexp_eatGroupName(e))
      return e.backReferenceNames.push(e.lastStringValue), !0;
    e.raise("Invalid named reference");
  }
  return !1;
};
G.regexp_eatCharacterEscape = function(e) {
  return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e);
};
G.regexp_eatCControlLetter = function(e) {
  var t = e.pos;
  if (e.eat(
    99
    /* c */
  )) {
    if (this.regexp_eatControlLetter(e))
      return !0;
    e.pos = t;
  }
  return !1;
};
G.regexp_eatZero = function(e) {
  return e.current() === 48 && !Yt(e.lookahead()) ? (e.lastIntValue = 0, e.advance(), !0) : !1;
};
G.regexp_eatControlEscape = function(e) {
  var t = e.current();
  return t === 116 ? (e.lastIntValue = 9, e.advance(), !0) : t === 110 ? (e.lastIntValue = 10, e.advance(), !0) : t === 118 ? (e.lastIntValue = 11, e.advance(), !0) : t === 102 ? (e.lastIntValue = 12, e.advance(), !0) : t === 114 ? (e.lastIntValue = 13, e.advance(), !0) : !1;
};
G.regexp_eatControlLetter = function(e) {
  var t = e.current();
  return dn(t) ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
function dn(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
G.regexp_eatRegExpUnicodeEscapeSequence = function(e, t) {
  t === void 0 && (t = !1);
  var r = e.pos, i = t || e.switchU;
  if (e.eat(
    117
    /* u */
  )) {
    if (this.regexp_eatFixedHexDigits(e, 4)) {
      var s = e.lastIntValue;
      if (i && s >= 55296 && s <= 56319) {
        var a = e.pos;
        if (e.eat(
          92
          /* \ */
        ) && e.eat(
          117
          /* u */
        ) && this.regexp_eatFixedHexDigits(e, 4)) {
          var u = e.lastIntValue;
          if (u >= 56320 && u <= 57343)
            return e.lastIntValue = (s - 55296) * 1024 + (u - 56320) + 65536, !0;
        }
        e.pos = a, e.lastIntValue = s;
      }
      return !0;
    }
    if (i && e.eat(
      123
      /* { */
    ) && this.regexp_eatHexDigits(e) && e.eat(
      125
      /* } */
    ) && xa(e.lastIntValue))
      return !0;
    i && e.raise("Invalid unicode escape"), e.pos = r;
  }
  return !1;
};
function xa(e) {
  return e >= 0 && e <= 1114111;
}
G.regexp_eatIdentityEscape = function(e) {
  if (e.switchU)
    return this.regexp_eatSyntaxCharacter(e) ? !0 : e.eat(
      47
      /* / */
    ) ? (e.lastIntValue = 47, !0) : !1;
  var t = e.current();
  return t !== 99 && (!e.switchN || t !== 107) ? (e.lastIntValue = t, e.advance(), !0) : !1;
};
G.regexp_eatDecimalEscape = function(e) {
  e.lastIntValue = 0;
  var t = e.current();
  if (t >= 49 && t <= 57) {
    do
      e.lastIntValue = 10 * e.lastIntValue + (t - 48), e.advance();
    while ((t = e.current()) >= 48 && t <= 57);
    return !0;
  }
  return !1;
};
G.regexp_eatCharacterClassEscape = function(e) {
  var t = e.current();
  if (ba(t))
    return e.lastIntValue = -1, e.advance(), !0;
  if (e.switchU && this.options.ecmaVersion >= 9 && (t === 80 || t === 112)) {
    if (e.lastIntValue = -1, e.advance(), e.eat(
      123
      /* { */
    ) && this.regexp_eatUnicodePropertyValueExpression(e) && e.eat(
      125
      /* } */
    ))
      return !0;
    e.raise("Invalid property name");
  }
  return !1;
};
function ba(e) {
  return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87;
}
G.regexp_eatUnicodePropertyValueExpression = function(e) {
  var t = e.pos;
  if (this.regexp_eatUnicodePropertyName(e) && e.eat(
    61
    /* = */
  )) {
    var r = e.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(e)) {
      var i = e.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(e, r, i), !0;
    }
  }
  if (e.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
    var s = e.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(e, s), !0;
  }
  return !1;
};
G.regexp_validateUnicodePropertyNameAndValue = function(e, t, r) {
  Ut(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"), e.unicodeProperties.nonBinary[t].test(r) || e.raise("Invalid property value");
};
G.regexp_validateUnicodePropertyNameOrValue = function(e, t) {
  e.unicodeProperties.binary.test(t) || e.raise("Invalid property name");
};
G.regexp_eatUnicodePropertyName = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; mn(t = e.current()); )
    e.lastStringValue += Bt(t), e.advance();
  return e.lastStringValue !== "";
};
function mn(e) {
  return dn(e) || e === 95;
}
G.regexp_eatUnicodePropertyValue = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; Sa(t = e.current()); )
    e.lastStringValue += Bt(t), e.advance();
  return e.lastStringValue !== "";
};
function Sa(e) {
  return mn(e) || Yt(e);
}
G.regexp_eatLoneUnicodePropertyNameOrValue = function(e) {
  return this.regexp_eatUnicodePropertyValue(e);
};
G.regexp_eatCharacterClass = function(e) {
  if (e.eat(
    91
    /* [ */
  )) {
    if (e.eat(
      94
      /* ^ */
    ), this.regexp_classRanges(e), e.eat(
      93
      /* ] */
    ))
      return !0;
    e.raise("Unterminated character class");
  }
  return !1;
};
G.regexp_classRanges = function(e) {
  for (; this.regexp_eatClassAtom(e); ) {
    var t = e.lastIntValue;
    if (e.eat(
      45
      /* - */
    ) && this.regexp_eatClassAtom(e)) {
      var r = e.lastIntValue;
      e.switchU && (t === -1 || r === -1) && e.raise("Invalid character class"), t !== -1 && r !== -1 && t > r && e.raise("Range out of order in character class");
    }
  }
};
G.regexp_eatClassAtom = function(e) {
  var t = e.pos;
  if (e.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatClassEscape(e))
      return !0;
    if (e.switchU) {
      var r = e.current();
      (r === 99 || vn(r)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
    }
    e.pos = t;
  }
  var i = e.current();
  return i !== 93 ? (e.lastIntValue = i, e.advance(), !0) : !1;
};
G.regexp_eatClassEscape = function(e) {
  var t = e.pos;
  if (e.eat(
    98
    /* b */
  ))
    return e.lastIntValue = 8, !0;
  if (e.switchU && e.eat(
    45
    /* - */
  ))
    return e.lastIntValue = 45, !0;
  if (!e.switchU && e.eat(
    99
    /* c */
  )) {
    if (this.regexp_eatClassControlLetter(e))
      return !0;
    e.pos = t;
  }
  return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
};
G.regexp_eatClassControlLetter = function(e) {
  var t = e.current();
  return Yt(t) || t === 95 ? (e.lastIntValue = t % 32, e.advance(), !0) : !1;
};
G.regexp_eatHexEscapeSequence = function(e) {
  var t = e.pos;
  if (e.eat(
    120
    /* x */
  )) {
    if (this.regexp_eatFixedHexDigits(e, 2))
      return !0;
    e.switchU && e.raise("Invalid escape"), e.pos = t;
  }
  return !1;
};
G.regexp_eatDecimalDigits = function(e) {
  var t = e.pos, r = 0;
  for (e.lastIntValue = 0; Yt(r = e.current()); )
    e.lastIntValue = 10 * e.lastIntValue + (r - 48), e.advance();
  return e.pos !== t;
};
function Yt(e) {
  return e >= 48 && e <= 57;
}
G.regexp_eatHexDigits = function(e) {
  var t = e.pos, r = 0;
  for (e.lastIntValue = 0; gn(r = e.current()); )
    e.lastIntValue = 16 * e.lastIntValue + yn(r), e.advance();
  return e.pos !== t;
};
function gn(e) {
  return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}
function yn(e) {
  return e >= 65 && e <= 70 ? 10 + (e - 65) : e >= 97 && e <= 102 ? 10 + (e - 97) : e - 48;
}
G.regexp_eatLegacyOctalEscapeSequence = function(e) {
  if (this.regexp_eatOctalDigit(e)) {
    var t = e.lastIntValue;
    if (this.regexp_eatOctalDigit(e)) {
      var r = e.lastIntValue;
      t <= 3 && this.regexp_eatOctalDigit(e) ? e.lastIntValue = t * 64 + r * 8 + e.lastIntValue : e.lastIntValue = t * 8 + r;
    } else
      e.lastIntValue = t;
    return !0;
  }
  return !1;
};
G.regexp_eatOctalDigit = function(e) {
  var t = e.current();
  return vn(t) ? (e.lastIntValue = t - 48, e.advance(), !0) : (e.lastIntValue = 0, !1);
};
function vn(e) {
  return e >= 48 && e <= 55;
}
G.regexp_eatFixedHexDigits = function(e, t) {
  var r = e.pos;
  e.lastIntValue = 0;
  for (var i = 0; i < t; ++i) {
    var s = e.current();
    if (!gn(s))
      return e.pos = r, !1;
    e.lastIntValue = 16 * e.lastIntValue + yn(s), e.advance();
  }
  return !0;
};
var Jt = function(t) {
  this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new At(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end]);
}, se = xe.prototype;
se.next = function(e) {
  !e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new Jt(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
};
se.getToken = function() {
  return this.next(), new Jt(this);
};
typeof Symbol < "u" && (se[Symbol.iterator] = function() {
  var e = this;
  return {
    next: function() {
      var t = e.getToken();
      return {
        done: t.type === d.eof,
        value: t
      };
    }
  };
});
se.curContext = function() {
  return this.context[this.context.length - 1];
};
se.nextToken = function() {
  var e = this.curContext();
  if ((!e || !e.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length)
    return this.finishToken(d.eof);
  if (e.override)
    return e.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
se.readToken = function(e) {
  return Je(e, this.options.ecmaVersion >= 6) || e === 92 ? this.readWord() : this.getTokenFromCode(e);
};
se.fullCharCodeAtPos = function() {
  var e = this.input.charCodeAt(this.pos);
  if (e <= 55295 || e >= 57344)
    return e;
  var t = this.input.charCodeAt(this.pos + 1);
  return (e << 10) + t - 56613888;
};
se.skipBlockComment = function() {
  var e = this.options.onComment && this.curPosition(), t = this.pos, r = this.input.indexOf("*/", this.pos += 2);
  if (r === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = r + 2, this.options.locations) {
    ot.lastIndex = t;
    for (var i; (i = ot.exec(this.input)) && i.index < this.pos; )
      ++this.curLine, this.lineStart = i.index + i[0].length;
  }
  this.options.onComment && this.options.onComment(
    !0,
    this.input.slice(t + 2, r),
    t,
    this.pos,
    e,
    this.curPosition()
  );
};
se.skipLineComment = function(e) {
  for (var t = this.pos, r = this.options.onComment && this.curPosition(), i = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !ft(i); )
    i = this.input.charCodeAt(++this.pos);
  this.options.onComment && this.options.onComment(
    !1,
    this.input.slice(t + e, this.pos),
    t,
    this.pos,
    r,
    this.curPosition()
  );
};
se.skipSpace = function() {
  e:
    for (; this.pos < this.input.length; ) {
      var e = this.input.charCodeAt(this.pos);
      switch (e) {
        case 32:
        case 160:
          ++this.pos;
          break;
        case 13:
          this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
        case 10:
        case 8232:
        case 8233:
          ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
          break;
        case 47:
          switch (this.input.charCodeAt(this.pos + 1)) {
            case 42:
              this.skipBlockComment();
              break;
            case 47:
              this.skipLineComment(2);
              break;
            default:
              break e;
          }
          break;
        default:
          if (e > 8 && e < 14 || e >= 5760 && wr.test(String.fromCharCode(e)))
            ++this.pos;
          else
            break e;
      }
    }
};
se.finishToken = function(e, t) {
  this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
  var r = this.type;
  this.type = e, this.value = t, this.updateContext(r);
};
se.readToken_dot = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e >= 48 && e <= 57)
    return this.readNumber(!0);
  var t = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && e === 46 && t === 46 ? (this.pos += 3, this.finishToken(d.ellipsis)) : (++this.pos, this.finishToken(d.dot));
};
se.readToken_slash = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : e === 61 ? this.finishOp(d.assign, 2) : this.finishOp(d.slash, 1);
};
se.readToken_mult_modulo_exp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), r = 1, i = e === 42 ? d.star : d.modulo;
  return this.options.ecmaVersion >= 7 && e === 42 && t === 42 && (++r, i = d.starstar, t = this.input.charCodeAt(this.pos + 2)), t === 61 ? this.finishOp(d.assign, r + 1) : this.finishOp(i, r);
};
se.readToken_pipe_amp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t === e) {
    if (this.options.ecmaVersion >= 12) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r === 61)
        return this.finishOp(d.assign, 3);
    }
    return this.finishOp(e === 124 ? d.logicalOR : d.logicalAND, 2);
  }
  return t === 61 ? this.finishOp(d.assign, 2) : this.finishOp(e === 124 ? d.bitwiseOR : d.bitwiseAND, 1);
};
se.readToken_caret = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(d.assign, 2) : this.finishOp(d.bitwiseXOR, 1);
};
se.readToken_plus_min = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === e ? t === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || Ne.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(d.incDec, 2) : t === 61 ? this.finishOp(d.assign, 2) : this.finishOp(d.plusMin, 1);
};
se.readToken_lt_gt = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), r = 1;
  return t === e ? (r = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + r) === 61 ? this.finishOp(d.assign, r + 1) : this.finishOp(d.bitShift, r)) : t === 33 && e === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (t === 61 && (r = 2), this.finishOp(d.relational, r));
};
se.readToken_eq_excl = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61 ? this.finishOp(d.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : e === 61 && t === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(d.arrow)) : this.finishOp(e === 61 ? d.eq : d.prefix, 1);
};
se.readToken_question = function() {
  var e = this.options.ecmaVersion;
  if (e >= 11) {
    var t = this.input.charCodeAt(this.pos + 1);
    if (t === 46) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r < 48 || r > 57)
        return this.finishOp(d.questionDot, 2);
    }
    if (t === 63) {
      if (e >= 12) {
        var i = this.input.charCodeAt(this.pos + 2);
        if (i === 61)
          return this.finishOp(d.assign, 3);
      }
      return this.finishOp(d.coalesce, 2);
    }
  }
  return this.finishOp(d.question, 1);
};
se.getTokenFromCode = function(e) {
  switch (e) {
    case 46:
      return this.readToken_dot();
    case 40:
      return ++this.pos, this.finishToken(d.parenL);
    case 41:
      return ++this.pos, this.finishToken(d.parenR);
    case 59:
      return ++this.pos, this.finishToken(d.semi);
    case 44:
      return ++this.pos, this.finishToken(d.comma);
    case 91:
      return ++this.pos, this.finishToken(d.bracketL);
    case 93:
      return ++this.pos, this.finishToken(d.bracketR);
    case 123:
      return ++this.pos, this.finishToken(d.braceL);
    case 125:
      return ++this.pos, this.finishToken(d.braceR);
    case 58:
      return ++this.pos, this.finishToken(d.colon);
    case 96:
      if (this.options.ecmaVersion < 6)
        break;
      return ++this.pos, this.finishToken(d.backQuote);
    case 48:
      var t = this.input.charCodeAt(this.pos + 1);
      if (t === 120 || t === 88)
        return this.readRadixNumber(16);
      if (this.options.ecmaVersion >= 6) {
        if (t === 111 || t === 79)
          return this.readRadixNumber(8);
        if (t === 98 || t === 66)
          return this.readRadixNumber(2);
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(!1);
    case 34:
    case 39:
      return this.readString(e);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(e);
    case 124:
    case 38:
      return this.readToken_pipe_amp(e);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(e);
    case 60:
    case 62:
      return this.readToken_lt_gt(e);
    case 61:
    case 33:
      return this.readToken_eq_excl(e);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(d.prefix, 1);
  }
  this.raise(this.pos, "Unexpected character '" + Lr(e) + "'");
};
se.finishOp = function(e, t) {
  var r = this.input.slice(this.pos, this.pos + t);
  return this.pos += t, this.finishToken(e, r);
};
se.readRegexp = function() {
  for (var e, t, r = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(r, "Unterminated regular expression");
    var i = this.input.charAt(this.pos);
    if (Ne.test(i) && this.raise(r, "Unterminated regular expression"), e)
      e = !1;
    else {
      if (i === "[")
        t = !0;
      else if (i === "]" && t)
        t = !1;
      else if (i === "/" && !t)
        break;
      e = i === "\\";
    }
    ++this.pos;
  }
  var s = this.input.slice(r, this.pos);
  ++this.pos;
  var a = this.pos, u = this.readWord1();
  this.containsEsc && this.unexpected(a);
  var f = this.regexpState || (this.regexpState = new He(this));
  f.reset(r, s, u), this.validateRegExpFlags(f), this.validateRegExpPattern(f);
  var h = null;
  try {
    h = new RegExp(s, u);
  } catch {
  }
  return this.finishToken(d.regexp, { pattern: s, flags: u, value: h });
};
se.readInt = function(e, t, r) {
  for (var i = this.options.ecmaVersion >= 12 && t === void 0, s = r && this.input.charCodeAt(this.pos) === 48, a = this.pos, u = 0, f = 0, h = 0, y = t ?? 1 / 0; h < y; ++h, ++this.pos) {
    var m = this.input.charCodeAt(this.pos), x = void 0;
    if (i && m === 95) {
      s && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), f === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), h === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), f = m;
      continue;
    }
    if (m >= 97 ? x = m - 97 + 10 : m >= 65 ? x = m - 65 + 10 : m >= 48 && m <= 57 ? x = m - 48 : x = 1 / 0, x >= e)
      break;
    f = m, u = u * e + x;
  }
  return i && f === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === a || t != null && this.pos - a !== t ? null : u;
};
function _a(e, t) {
  return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
}
function xn(e) {
  return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
}
se.readRadixNumber = function(e) {
  var t = this.pos;
  this.pos += 2;
  var r = this.readInt(e);
  return r == null && this.raise(this.start + 2, "Expected number in radix " + e), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (r = xn(this.input.slice(t, this.pos)), ++this.pos) : Je(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(d.num, r);
};
se.readNumber = function(e) {
  var t = this.pos;
  !e && this.readInt(10, void 0, !0) === null && this.raise(t, "Invalid number");
  var r = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
  r && this.strict && this.raise(t, "Invalid number");
  var i = this.input.charCodeAt(this.pos);
  if (!r && !e && this.options.ecmaVersion >= 11 && i === 110) {
    var s = xn(this.input.slice(t, this.pos));
    return ++this.pos, Je(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(d.num, s);
  }
  r && /[89]/.test(this.input.slice(t, this.pos)) && (r = !1), i === 46 && !r && (++this.pos, this.readInt(10), i = this.input.charCodeAt(this.pos)), (i === 69 || i === 101) && !r && (i = this.input.charCodeAt(++this.pos), (i === 43 || i === 45) && ++this.pos, this.readInt(10) === null && this.raise(t, "Invalid number")), Je(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
  var a = _a(this.input.slice(t, this.pos), r);
  return this.finishToken(d.num, a);
};
se.readCodePoint = function() {
  var e = this.input.charCodeAt(this.pos), t;
  if (e === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var r = ++this.pos;
    t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(r, "Code point out of bounds");
  } else
    t = this.readHexChar(4);
  return t;
};
function Lr(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
se.readString = function(e) {
  for (var t = "", r = ++this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
    var i = this.input.charCodeAt(this.pos);
    if (i === e)
      break;
    i === 92 ? (t += this.input.slice(r, this.pos), t += this.readEscapedChar(!1), r = this.pos) : (ft(i, this.options.ecmaVersion >= 10) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
  }
  return t += this.input.slice(r, this.pos++), this.finishToken(d.string, t);
};
var bn = {};
se.tryReadTemplateToken = function() {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (e) {
    if (e === bn)
      this.readInvalidTemplateToken();
    else
      throw e;
  }
  this.inTemplateElement = !1;
};
se.invalidStringToken = function(e, t) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9)
    throw bn;
  this.raise(e, t);
};
se.readTmplToken = function() {
  for (var e = "", t = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
    var r = this.input.charCodeAt(this.pos);
    if (r === 96 || r === 36 && this.input.charCodeAt(this.pos + 1) === 123)
      return this.pos === this.start && (this.type === d.template || this.type === d.invalidTemplate) ? r === 36 ? (this.pos += 2, this.finishToken(d.dollarBraceL)) : (++this.pos, this.finishToken(d.backQuote)) : (e += this.input.slice(t, this.pos), this.finishToken(d.template, e));
    if (r === 92)
      e += this.input.slice(t, this.pos), e += this.readEscapedChar(!0), t = this.pos;
    else if (ft(r)) {
      switch (e += this.input.slice(t, this.pos), ++this.pos, r) {
        case 13:
          this.input.charCodeAt(this.pos) === 10 && ++this.pos;
        case 10:
          e += `
`;
          break;
        default:
          e += String.fromCharCode(r);
          break;
      }
      this.options.locations && (++this.curLine, this.lineStart = this.pos), t = this.pos;
    } else
      ++this.pos;
  }
};
se.readInvalidTemplateToken = function() {
  for (; this.pos < this.input.length; this.pos++)
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if (this.input[this.pos + 1] !== "{")
          break;
      case "`":
        return this.finishToken(d.invalidTemplate, this.input.slice(this.start, this.pos));
    }
  this.raise(this.start, "Unterminated template");
};
se.readEscapedChar = function(e) {
  var t = this.input.charCodeAt(++this.pos);
  switch (++this.pos, t) {
    case 110:
      return `
`;
    case 114:
      return "\r";
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return Lr(this.readCodePoint());
    case 116:
      return "	";
    case 98:
      return "\b";
    case 118:
      return "\v";
    case 102:
      return "\f";
    case 13:
      this.input.charCodeAt(this.pos) === 10 && ++this.pos;
    case 10:
      return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
    case 56:
    case 57:
      if (e) {
        var r = this.pos - 1;
        return this.invalidStringToken(
          r,
          "Invalid escape sequence in template string"
        ), null;
      }
    default:
      if (t >= 48 && t <= 55) {
        var i = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], s = parseInt(i, 8);
        return s > 255 && (i = i.slice(0, -1), s = parseInt(i, 8)), this.pos += i.length - 1, t = this.input.charCodeAt(this.pos), (i !== "0" || t === 56 || t === 57) && (this.strict || e) && this.invalidStringToken(
          this.pos - 1 - i.length,
          e ? "Octal literal in template string" : "Octal literal in strict mode"
        ), String.fromCharCode(s);
      }
      return ft(t) ? "" : String.fromCharCode(t);
  }
};
se.readHexChar = function(e) {
  var t = this.pos, r = this.readInt(16, e);
  return r === null && this.invalidStringToken(t, "Bad character escape sequence"), r;
};
se.readWord1 = function() {
  this.containsEsc = !1;
  for (var e = "", t = !0, r = this.pos, i = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
    var s = this.fullCharCodeAtPos();
    if (rt(s, i))
      this.pos += s <= 65535 ? 1 : 2;
    else if (s === 92) {
      this.containsEsc = !0, e += this.input.slice(r, this.pos);
      var a = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
      var u = this.readCodePoint();
      (t ? Je : rt)(u, i) || this.invalidStringToken(a, "Invalid Unicode escape"), e += Lr(u), r = this.pos;
    } else
      break;
    t = !1;
  }
  return e + this.input.slice(r, this.pos);
};
se.readWord = function() {
  var e = this.readWord1(), t = d.name;
  return this.keywords.test(e) && (t = qt[e]), this.finishToken(t, e);
};
var Sn = "7.4.1";
xe.acorn = {
  Parser: xe,
  version: Sn,
  defaultOptions: Ft,
  Position: ut,
  SourceLocation: At,
  getLineInfo: Tr,
  Node: Wt,
  TokenType: ce,
  tokTypes: d,
  keywordTypes: qt,
  TokContext: De,
  tokContexts: be,
  isIdentifierChar: rt,
  isIdentifierStart: Je,
  Token: Jt,
  isNewLine: ft,
  lineBreak: Ne,
  lineBreakG: ot,
  nonASCIIwhitespace: wr
};
function Ea(e, t) {
  return xe.parse(e, t);
}
function Ca(e, t, r) {
  return xe.parseExpressionAt(e, t, r);
}
function Aa(e, t) {
  return xe.tokenizer(e, t);
}
const wa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Node: Wt,
  Parser: xe,
  Position: ut,
  SourceLocation: At,
  TokContext: De,
  Token: Jt,
  TokenType: ce,
  defaultOptions: Ft,
  getLineInfo: Tr,
  isIdentifierChar: rt,
  isIdentifierStart: Je,
  isNewLine: ft,
  keywordTypes: qt,
  lineBreak: Ne,
  lineBreakG: ot,
  nonASCIIwhitespace: wr,
  parse: Ea,
  parseExpressionAt: Ca,
  tokContexts: be,
  tokTypes: d,
  tokenizer: Aa,
  version: Sn
}, Symbol.toStringTag, { value: "Module" }));
var _n = { exports: {} }, Ta = {
  quot: '"',
  amp: "&",
  apos: "'",
  lt: "<",
  gt: ">",
  nbsp: " ",
  iexcl: "¡",
  cent: "¢",
  pound: "£",
  curren: "¤",
  yen: "¥",
  brvbar: "¦",
  sect: "§",
  uml: "¨",
  copy: "©",
  ordf: "ª",
  laquo: "«",
  not: "¬",
  shy: "­",
  reg: "®",
  macr: "¯",
  deg: "°",
  plusmn: "±",
  sup2: "²",
  sup3: "³",
  acute: "´",
  micro: "µ",
  para: "¶",
  middot: "·",
  cedil: "¸",
  sup1: "¹",
  ordm: "º",
  raquo: "»",
  frac14: "¼",
  frac12: "½",
  frac34: "¾",
  iquest: "¿",
  Agrave: "À",
  Aacute: "Á",
  Acirc: "Â",
  Atilde: "Ã",
  Auml: "Ä",
  Aring: "Å",
  AElig: "Æ",
  Ccedil: "Ç",
  Egrave: "È",
  Eacute: "É",
  Ecirc: "Ê",
  Euml: "Ë",
  Igrave: "Ì",
  Iacute: "Í",
  Icirc: "Î",
  Iuml: "Ï",
  ETH: "Ð",
  Ntilde: "Ñ",
  Ograve: "Ò",
  Oacute: "Ó",
  Ocirc: "Ô",
  Otilde: "Õ",
  Ouml: "Ö",
  times: "×",
  Oslash: "Ø",
  Ugrave: "Ù",
  Uacute: "Ú",
  Ucirc: "Û",
  Uuml: "Ü",
  Yacute: "Ý",
  THORN: "Þ",
  szlig: "ß",
  agrave: "à",
  aacute: "á",
  acirc: "â",
  atilde: "ã",
  auml: "ä",
  aring: "å",
  aelig: "æ",
  ccedil: "ç",
  egrave: "è",
  eacute: "é",
  ecirc: "ê",
  euml: "ë",
  igrave: "ì",
  iacute: "í",
  icirc: "î",
  iuml: "ï",
  eth: "ð",
  ntilde: "ñ",
  ograve: "ò",
  oacute: "ó",
  ocirc: "ô",
  otilde: "õ",
  ouml: "ö",
  divide: "÷",
  oslash: "ø",
  ugrave: "ù",
  uacute: "ú",
  ucirc: "û",
  uuml: "ü",
  yacute: "ý",
  thorn: "þ",
  yuml: "ÿ",
  OElig: "Œ",
  oelig: "œ",
  Scaron: "Š",
  scaron: "š",
  Yuml: "Ÿ",
  fnof: "ƒ",
  circ: "ˆ",
  tilde: "˜",
  Alpha: "Α",
  Beta: "Β",
  Gamma: "Γ",
  Delta: "Δ",
  Epsilon: "Ε",
  Zeta: "Ζ",
  Eta: "Η",
  Theta: "Θ",
  Iota: "Ι",
  Kappa: "Κ",
  Lambda: "Λ",
  Mu: "Μ",
  Nu: "Ν",
  Xi: "Ξ",
  Omicron: "Ο",
  Pi: "Π",
  Rho: "Ρ",
  Sigma: "Σ",
  Tau: "Τ",
  Upsilon: "Υ",
  Phi: "Φ",
  Chi: "Χ",
  Psi: "Ψ",
  Omega: "Ω",
  alpha: "α",
  beta: "β",
  gamma: "γ",
  delta: "δ",
  epsilon: "ε",
  zeta: "ζ",
  eta: "η",
  theta: "θ",
  iota: "ι",
  kappa: "κ",
  lambda: "λ",
  mu: "μ",
  nu: "ν",
  xi: "ξ",
  omicron: "ο",
  pi: "π",
  rho: "ρ",
  sigmaf: "ς",
  sigma: "σ",
  tau: "τ",
  upsilon: "υ",
  phi: "φ",
  chi: "χ",
  psi: "ψ",
  omega: "ω",
  thetasym: "ϑ",
  upsih: "ϒ",
  piv: "ϖ",
  ensp: " ",
  emsp: " ",
  thinsp: " ",
  zwnj: "‌",
  zwj: "‍",
  lrm: "‎",
  rlm: "‏",
  ndash: "–",
  mdash: "—",
  lsquo: "‘",
  rsquo: "’",
  sbquo: "‚",
  ldquo: "“",
  rdquo: "”",
  bdquo: "„",
  dagger: "†",
  Dagger: "‡",
  bull: "•",
  hellip: "…",
  permil: "‰",
  prime: "′",
  Prime: "″",
  lsaquo: "‹",
  rsaquo: "›",
  oline: "‾",
  frasl: "⁄",
  euro: "€",
  image: "ℑ",
  weierp: "℘",
  real: "ℜ",
  trade: "™",
  alefsym: "ℵ",
  larr: "←",
  uarr: "↑",
  rarr: "→",
  darr: "↓",
  harr: "↔",
  crarr: "↵",
  lArr: "⇐",
  uArr: "⇑",
  rArr: "⇒",
  dArr: "⇓",
  hArr: "⇔",
  forall: "∀",
  part: "∂",
  exist: "∃",
  empty: "∅",
  nabla: "∇",
  isin: "∈",
  notin: "∉",
  ni: "∋",
  prod: "∏",
  sum: "∑",
  minus: "−",
  lowast: "∗",
  radic: "√",
  prop: "∝",
  infin: "∞",
  ang: "∠",
  and: "∧",
  or: "∨",
  cap: "∩",
  cup: "∪",
  int: "∫",
  there4: "∴",
  sim: "∼",
  cong: "≅",
  asymp: "≈",
  ne: "≠",
  equiv: "≡",
  le: "≤",
  ge: "≥",
  sub: "⊂",
  sup: "⊃",
  nsub: "⊄",
  sube: "⊆",
  supe: "⊇",
  oplus: "⊕",
  otimes: "⊗",
  perp: "⊥",
  sdot: "⋅",
  lceil: "⌈",
  rceil: "⌉",
  lfloor: "⌊",
  rfloor: "⌋",
  lang: "〈",
  rang: "〉",
  loz: "◊",
  spades: "♠",
  clubs: "♣",
  hearts: "♥",
  diams: "♦"
};
const _i = /* @__PURE__ */ ds(wa);
(function(e) {
  const t = Ta, r = /^[\da-fA-F]+$/, i = /^\d+$/, s = /* @__PURE__ */ new WeakMap();
  function a(h) {
    h = h.Parser.acorn || h;
    let y = s.get(h);
    if (!y) {
      const m = h.tokTypes, x = h.TokContext, S = h.TokenType, b = new x("<tag", !1), C = new x("</tag", !1), v = new x("<tag>...</tag>", !0, !0), _ = {
        tc_oTag: b,
        tc_cTag: C,
        tc_expr: v
      }, R = {
        jsxName: new S("jsxName"),
        jsxText: new S("jsxText", { beforeExpr: !0 }),
        jsxTagStart: new S("jsxTagStart", { startsExpr: !0 }),
        jsxTagEnd: new S("jsxTagEnd")
      };
      R.jsxTagStart.updateContext = function() {
        this.context.push(v), this.context.push(b), this.exprAllowed = !1;
      }, R.jsxTagEnd.updateContext = function(N) {
        let F = this.context.pop();
        F === b && N === m.slash || F === C ? (this.context.pop(), this.exprAllowed = this.curContext() === v) : this.exprAllowed = !0;
      }, y = { tokContexts: _, tokTypes: R }, s.set(h, y);
    }
    return y;
  }
  function u(h) {
    if (!h)
      return h;
    if (h.type === "JSXIdentifier")
      return h.name;
    if (h.type === "JSXNamespacedName")
      return h.namespace.name + ":" + h.name.name;
    if (h.type === "JSXMemberExpression")
      return u(h.object) + "." + u(h.property);
  }
  e.exports = function(h) {
    return h = h || {}, function(y) {
      return f({
        allowNamespaces: h.allowNamespaces !== !1,
        allowNamespacedObjects: !!h.allowNamespacedObjects
      }, y);
    };
  }, Object.defineProperty(e.exports, "tokTypes", {
    get: function() {
      return a(_i).tokTypes;
    },
    configurable: !0,
    enumerable: !0
  });
  function f(h, y) {
    const m = y.acorn || _i, x = a(m), S = m.tokTypes, b = x.tokTypes, C = m.tokContexts, v = x.tokContexts.tc_oTag, _ = x.tokContexts.tc_cTag, R = x.tokContexts.tc_expr, N = m.isNewLine, F = m.isIdentifierStart, w = m.isIdentifierChar;
    return class extends y {
      // Expose actual `tokTypes` and `tokContexts` to other plugins.
      static get acornJsx() {
        return x;
      }
      // Reads inline JSX contents token.
      jsx_readToken() {
        let p = "", E = this.pos;
        for (; ; ) {
          this.pos >= this.input.length && this.raise(this.start, "Unterminated JSX contents");
          let A = this.input.charCodeAt(this.pos);
          switch (A) {
            case 60:
            case 123:
              return this.pos === this.start ? A === 60 && this.exprAllowed ? (++this.pos, this.finishToken(b.jsxTagStart)) : this.getTokenFromCode(A) : (p += this.input.slice(E, this.pos), this.finishToken(b.jsxText, p));
            case 38:
              p += this.input.slice(E, this.pos), p += this.jsx_readEntity(), E = this.pos;
              break;
            case 62:
            case 125:
              this.raise(
                this.pos,
                "Unexpected token `" + this.input[this.pos] + "`. Did you mean `" + (A === 62 ? "&gt;" : "&rbrace;") + '` or `{"' + this.input[this.pos] + '"}`?'
              );
            default:
              N(A) ? (p += this.input.slice(E, this.pos), p += this.jsx_readNewLine(!0), E = this.pos) : ++this.pos;
          }
        }
      }
      jsx_readNewLine(p) {
        let E = this.input.charCodeAt(this.pos), A;
        return ++this.pos, E === 13 && this.input.charCodeAt(this.pos) === 10 ? (++this.pos, A = p ? `
` : `\r
`) : A = String.fromCharCode(E), this.options.locations && (++this.curLine, this.lineStart = this.pos), A;
      }
      jsx_readString(p) {
        let E = "", A = ++this.pos;
        for (; ; ) {
          this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
          let T = this.input.charCodeAt(this.pos);
          if (T === p)
            break;
          T === 38 ? (E += this.input.slice(A, this.pos), E += this.jsx_readEntity(), A = this.pos) : N(T) ? (E += this.input.slice(A, this.pos), E += this.jsx_readNewLine(!1), A = this.pos) : ++this.pos;
        }
        return E += this.input.slice(A, this.pos++), this.finishToken(S.string, E);
      }
      jsx_readEntity() {
        let p = "", E = 0, A, T = this.input[this.pos];
        T !== "&" && this.raise(this.pos, "Entity must start with an ampersand");
        let q = ++this.pos;
        for (; this.pos < this.input.length && E++ < 10; ) {
          if (T = this.input[this.pos++], T === ";") {
            p[0] === "#" ? p[1] === "x" ? (p = p.substr(2), r.test(p) && (A = String.fromCharCode(parseInt(p, 16)))) : (p = p.substr(1), i.test(p) && (A = String.fromCharCode(parseInt(p, 10)))) : A = t[p];
            break;
          }
          p += T;
        }
        return A || (this.pos = q, "&");
      }
      // Read a JSX identifier (valid tag or attribute name).
      //
      // Optimized version since JSX identifiers can't contain
      // escape characters and so can be read as single slice.
      // Also assumes that first character was already checked
      // by isIdentifierStart in readToken.
      jsx_readWord() {
        let p, E = this.pos;
        do
          p = this.input.charCodeAt(++this.pos);
        while (w(p) || p === 45);
        return this.finishToken(b.jsxName, this.input.slice(E, this.pos));
      }
      // Parse next token as JSX identifier
      jsx_parseIdentifier() {
        let p = this.startNode();
        return this.type === b.jsxName ? p.name = this.value : this.type.keyword ? p.name = this.type.keyword : this.unexpected(), this.next(), this.finishNode(p, "JSXIdentifier");
      }
      // Parse namespaced identifier.
      jsx_parseNamespacedName() {
        let p = this.start, E = this.startLoc, A = this.jsx_parseIdentifier();
        if (!h.allowNamespaces || !this.eat(S.colon))
          return A;
        var T = this.startNodeAt(p, E);
        return T.namespace = A, T.name = this.jsx_parseIdentifier(), this.finishNode(T, "JSXNamespacedName");
      }
      // Parses element name in any form - namespaced, member
      // or single identifier.
      jsx_parseElementName() {
        if (this.type === b.jsxTagEnd)
          return "";
        let p = this.start, E = this.startLoc, A = this.jsx_parseNamespacedName();
        for (this.type === S.dot && A.type === "JSXNamespacedName" && !h.allowNamespacedObjects && this.unexpected(); this.eat(S.dot); ) {
          let T = this.startNodeAt(p, E);
          T.object = A, T.property = this.jsx_parseIdentifier(), A = this.finishNode(T, "JSXMemberExpression");
        }
        return A;
      }
      // Parses any type of JSX attribute value.
      jsx_parseAttributeValue() {
        switch (this.type) {
          case S.braceL:
            let p = this.jsx_parseExpressionContainer();
            return p.expression.type === "JSXEmptyExpression" && this.raise(p.start, "JSX attributes must only be assigned a non-empty expression"), p;
          case b.jsxTagStart:
          case S.string:
            return this.parseExprAtom();
          default:
            this.raise(this.start, "JSX value should be either an expression or a quoted JSX text");
        }
      }
      // JSXEmptyExpression is unique type since it doesn't actually parse anything,
      // and so it should start at the end of last read token (left brace) and finish
      // at the beginning of the next one (right brace).
      jsx_parseEmptyExpression() {
        let p = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
        return this.finishNodeAt(p, "JSXEmptyExpression", this.start, this.startLoc);
      }
      // Parses JSX expression enclosed into curly brackets.
      jsx_parseExpressionContainer() {
        let p = this.startNode();
        return this.next(), p.expression = this.type === S.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression(), this.expect(S.braceR), this.finishNode(p, "JSXExpressionContainer");
      }
      // Parses following JSX attribute name-value pair.
      jsx_parseAttribute() {
        let p = this.startNode();
        return this.eat(S.braceL) ? (this.expect(S.ellipsis), p.argument = this.parseMaybeAssign(), this.expect(S.braceR), this.finishNode(p, "JSXSpreadAttribute")) : (p.name = this.jsx_parseNamespacedName(), p.value = this.eat(S.eq) ? this.jsx_parseAttributeValue() : null, this.finishNode(p, "JSXAttribute"));
      }
      // Parses JSX opening tag starting after '<'.
      jsx_parseOpeningElementAt(p, E) {
        let A = this.startNodeAt(p, E);
        A.attributes = [];
        let T = this.jsx_parseElementName();
        for (T && (A.name = T); this.type !== S.slash && this.type !== b.jsxTagEnd; )
          A.attributes.push(this.jsx_parseAttribute());
        return A.selfClosing = this.eat(S.slash), this.expect(b.jsxTagEnd), this.finishNode(A, T ? "JSXOpeningElement" : "JSXOpeningFragment");
      }
      // Parses JSX closing tag starting after '</'.
      jsx_parseClosingElementAt(p, E) {
        let A = this.startNodeAt(p, E), T = this.jsx_parseElementName();
        return T && (A.name = T), this.expect(b.jsxTagEnd), this.finishNode(A, T ? "JSXClosingElement" : "JSXClosingFragment");
      }
      // Parses entire JSX element, including it's opening tag
      // (starting after '<'), attributes, contents and closing tag.
      jsx_parseElementAt(p, E) {
        let A = this.startNodeAt(p, E), T = [], q = this.jsx_parseOpeningElementAt(p, E), B = null;
        if (!q.selfClosing) {
          e:
            for (; ; )
              switch (this.type) {
                case b.jsxTagStart:
                  if (p = this.start, E = this.startLoc, this.next(), this.eat(S.slash)) {
                    B = this.jsx_parseClosingElementAt(p, E);
                    break e;
                  }
                  T.push(this.jsx_parseElementAt(p, E));
                  break;
                case b.jsxText:
                  T.push(this.parseExprAtom());
                  break;
                case S.braceL:
                  T.push(this.jsx_parseExpressionContainer());
                  break;
                default:
                  this.unexpected();
              }
          u(B.name) !== u(q.name) && this.raise(
            B.start,
            "Expected corresponding JSX closing tag for <" + u(q.name) + ">"
          );
        }
        let Y = q.name ? "Element" : "Fragment";
        return A["opening" + Y] = q, A["closing" + Y] = B, A.children = T, this.type === S.relational && this.value === "<" && this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag"), this.finishNode(A, "JSX" + Y);
      }
      // Parse JSX text
      jsx_parseText() {
        let p = this.parseLiteral(this.value);
        return p.type = "JSXText", p;
      }
      // Parses entire JSX element from current position.
      jsx_parseElement() {
        let p = this.start, E = this.startLoc;
        return this.next(), this.jsx_parseElementAt(p, E);
      }
      parseExprAtom(p) {
        return this.type === b.jsxText ? this.jsx_parseText() : this.type === b.jsxTagStart ? this.jsx_parseElement() : super.parseExprAtom(p);
      }
      readToken(p) {
        let E = this.curContext();
        if (E === R)
          return this.jsx_readToken();
        if (E === v || E === _) {
          if (F(p))
            return this.jsx_readWord();
          if (p == 62)
            return ++this.pos, this.finishToken(b.jsxTagEnd);
          if ((p === 34 || p === 39) && E == v)
            return this.jsx_readString(p);
        }
        return p === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33 ? (++this.pos, this.finishToken(b.jsxTagStart)) : super.readToken(p);
      }
      updateContext(p) {
        if (this.type == S.braceL) {
          var E = this.curContext();
          E == v ? this.context.push(C.b_expr) : E == R ? this.context.push(C.b_tmpl) : super.updateContext(p), this.exprAllowed = !0;
        } else if (this.type === S.slash && p === b.jsxTagStart)
          this.context.length -= 2, this.context.push(_), this.exprAllowed = !1;
        else
          return super.updateContext(p);
      }
    };
  }
})(_n);
var ka = _n.exports;
const Pa = /* @__PURE__ */ Et(ka);
function En(e, t, r, i, s) {
  r || (r = M), function a(u, f, h) {
    var y = h || u.type, m = t[y];
    r[y](u, f, a), m && m(u, f);
  }(e, i, s);
}
function Ia(e, t, r, i, s) {
  var a = [];
  r || (r = M), function u(f, h, y) {
    var m = y || f.type, x = t[m], S = f !== a[a.length - 1];
    S && a.push(f), r[m](f, h, u), x && x(f, h || a, a), S && a.pop();
  }(e, i, s);
}
function Nr(e, t, r) {
  r(e, t);
}
function nt(e, t, r) {
}
var M = {};
M.Program = M.BlockStatement = function(e, t, r) {
  for (var i = 0, s = e.body; i < s.length; i += 1) {
    var a = s[i];
    r(a, t, "Statement");
  }
};
M.Statement = Nr;
M.EmptyStatement = nt;
M.ExpressionStatement = M.ParenthesizedExpression = M.ChainExpression = function(e, t, r) {
  return r(e.expression, t, "Expression");
};
M.IfStatement = function(e, t, r) {
  r(e.test, t, "Expression"), r(e.consequent, t, "Statement"), e.alternate && r(e.alternate, t, "Statement");
};
M.LabeledStatement = function(e, t, r) {
  return r(e.body, t, "Statement");
};
M.BreakStatement = M.ContinueStatement = nt;
M.WithStatement = function(e, t, r) {
  r(e.object, t, "Expression"), r(e.body, t, "Statement");
};
M.SwitchStatement = function(e, t, r) {
  r(e.discriminant, t, "Expression");
  for (var i = 0, s = e.cases; i < s.length; i += 1) {
    var a = s[i];
    a.test && r(a.test, t, "Expression");
    for (var u = 0, f = a.consequent; u < f.length; u += 1) {
      var h = f[u];
      r(h, t, "Statement");
    }
  }
};
M.SwitchCase = function(e, t, r) {
  e.test && r(e.test, t, "Expression");
  for (var i = 0, s = e.consequent; i < s.length; i += 1) {
    var a = s[i];
    r(a, t, "Statement");
  }
};
M.ReturnStatement = M.YieldExpression = M.AwaitExpression = function(e, t, r) {
  e.argument && r(e.argument, t, "Expression");
};
M.ThrowStatement = M.SpreadElement = function(e, t, r) {
  return r(e.argument, t, "Expression");
};
M.TryStatement = function(e, t, r) {
  r(e.block, t, "Statement"), e.handler && r(e.handler, t), e.finalizer && r(e.finalizer, t, "Statement");
};
M.CatchClause = function(e, t, r) {
  e.param && r(e.param, t, "Pattern"), r(e.body, t, "Statement");
};
M.WhileStatement = M.DoWhileStatement = function(e, t, r) {
  r(e.test, t, "Expression"), r(e.body, t, "Statement");
};
M.ForStatement = function(e, t, r) {
  e.init && r(e.init, t, "ForInit"), e.test && r(e.test, t, "Expression"), e.update && r(e.update, t, "Expression"), r(e.body, t, "Statement");
};
M.ForInStatement = M.ForOfStatement = function(e, t, r) {
  r(e.left, t, "ForInit"), r(e.right, t, "Expression"), r(e.body, t, "Statement");
};
M.ForInit = function(e, t, r) {
  e.type === "VariableDeclaration" ? r(e, t) : r(e, t, "Expression");
};
M.DebuggerStatement = nt;
M.FunctionDeclaration = function(e, t, r) {
  return r(e, t, "Function");
};
M.VariableDeclaration = function(e, t, r) {
  for (var i = 0, s = e.declarations; i < s.length; i += 1) {
    var a = s[i];
    r(a, t);
  }
};
M.VariableDeclarator = function(e, t, r) {
  r(e.id, t, "Pattern"), e.init && r(e.init, t, "Expression");
};
M.Function = function(e, t, r) {
  e.id && r(e.id, t, "Pattern");
  for (var i = 0, s = e.params; i < s.length; i += 1) {
    var a = s[i];
    r(a, t, "Pattern");
  }
  r(e.body, t, e.expression ? "Expression" : "Statement");
};
M.Pattern = function(e, t, r) {
  e.type === "Identifier" ? r(e, t, "VariablePattern") : e.type === "MemberExpression" ? r(e, t, "MemberPattern") : r(e, t);
};
M.VariablePattern = nt;
M.MemberPattern = Nr;
M.RestElement = function(e, t, r) {
  return r(e.argument, t, "Pattern");
};
M.ArrayPattern = function(e, t, r) {
  for (var i = 0, s = e.elements; i < s.length; i += 1) {
    var a = s[i];
    a && r(a, t, "Pattern");
  }
};
M.ObjectPattern = function(e, t, r) {
  for (var i = 0, s = e.properties; i < s.length; i += 1) {
    var a = s[i];
    a.type === "Property" ? (a.computed && r(a.key, t, "Expression"), r(a.value, t, "Pattern")) : a.type === "RestElement" && r(a.argument, t, "Pattern");
  }
};
M.Expression = Nr;
M.ThisExpression = M.Super = M.MetaProperty = nt;
M.ArrayExpression = function(e, t, r) {
  for (var i = 0, s = e.elements; i < s.length; i += 1) {
    var a = s[i];
    a && r(a, t, "Expression");
  }
};
M.ObjectExpression = function(e, t, r) {
  for (var i = 0, s = e.properties; i < s.length; i += 1) {
    var a = s[i];
    r(a, t);
  }
};
M.FunctionExpression = M.ArrowFunctionExpression = M.FunctionDeclaration;
M.SequenceExpression = function(e, t, r) {
  for (var i = 0, s = e.expressions; i < s.length; i += 1) {
    var a = s[i];
    r(a, t, "Expression");
  }
};
M.TemplateLiteral = function(e, t, r) {
  for (var i = 0, s = e.quasis; i < s.length; i += 1) {
    var a = s[i];
    r(a, t);
  }
  for (var u = 0, f = e.expressions; u < f.length; u += 1) {
    var h = f[u];
    r(h, t, "Expression");
  }
};
M.TemplateElement = nt;
M.UnaryExpression = M.UpdateExpression = function(e, t, r) {
  r(e.argument, t, "Expression");
};
M.BinaryExpression = M.LogicalExpression = function(e, t, r) {
  r(e.left, t, "Expression"), r(e.right, t, "Expression");
};
M.AssignmentExpression = M.AssignmentPattern = function(e, t, r) {
  r(e.left, t, "Pattern"), r(e.right, t, "Expression");
};
M.ConditionalExpression = function(e, t, r) {
  r(e.test, t, "Expression"), r(e.consequent, t, "Expression"), r(e.alternate, t, "Expression");
};
M.NewExpression = M.CallExpression = function(e, t, r) {
  if (r(e.callee, t, "Expression"), e.arguments)
    for (var i = 0, s = e.arguments; i < s.length; i += 1) {
      var a = s[i];
      r(a, t, "Expression");
    }
};
M.MemberExpression = function(e, t, r) {
  r(e.object, t, "Expression"), e.computed && r(e.property, t, "Expression");
};
M.ExportNamedDeclaration = M.ExportDefaultDeclaration = function(e, t, r) {
  e.declaration && r(e.declaration, t, e.type === "ExportNamedDeclaration" || e.declaration.id ? "Statement" : "Expression"), e.source && r(e.source, t, "Expression");
};
M.ExportAllDeclaration = function(e, t, r) {
  e.exported && r(e.exported, t), r(e.source, t, "Expression");
};
M.ImportDeclaration = function(e, t, r) {
  for (var i = 0, s = e.specifiers; i < s.length; i += 1) {
    var a = s[i];
    r(a, t);
  }
  r(e.source, t, "Expression");
};
M.ImportExpression = function(e, t, r) {
  r(e.source, t, "Expression");
};
M.ImportSpecifier = M.ImportDefaultSpecifier = M.ImportNamespaceSpecifier = M.Identifier = M.Literal = nt;
M.TaggedTemplateExpression = function(e, t, r) {
  r(e.tag, t, "Expression"), r(e.quasi, t, "Expression");
};
M.ClassDeclaration = M.ClassExpression = function(e, t, r) {
  return r(e, t, "Class");
};
M.Class = function(e, t, r) {
  e.id && r(e.id, t, "Pattern"), e.superClass && r(e.superClass, t, "Expression"), r(e.body, t);
};
M.ClassBody = function(e, t, r) {
  for (var i = 0, s = e.body; i < s.length; i += 1) {
    var a = s[i];
    r(a, t);
  }
};
M.MethodDefinition = M.Property = function(e, t, r) {
  e.computed && r(e.key, t, "Expression"), r(e.value, t, "Expression");
};
var Oa = Bi, Ra = ss, La = ji, Na = "[object Object]", Ma = Function.prototype, Fa = Object.prototype, Cn = Ma.toString, Da = Fa.hasOwnProperty, Ba = Cn.call(Object);
function ja(e) {
  if (!La(e) || Oa(e) != Na)
    return !1;
  var t = Ra(e);
  if (t === null)
    return !0;
  var r = Da.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Cn.call(r) == Ba;
}
var Va = ja;
const qa = /* @__PURE__ */ Et(Va);
var Ua = Bi, $a = as, Wa = ji, za = "[object String]";
function Ga(e) {
  return typeof e == "string" || !$a(e) && Wa(e) && Ua(e) == za;
}
var Ya = Ga;
const Ja = /* @__PURE__ */ Et(Ya);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function Ei(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Xa(e) {
  var t, r;
  return Ei(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (r = t.prototype, !(Ei(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
var An = {}, jt = xt && xt.__assign || function() {
  return jt = Object.assign || function(e) {
    for (var t, r = 1, i = arguments.length; r < i; r++) {
      t = arguments[r];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
  }, jt.apply(this, arguments);
}, Ha = xt && xt.__spreadArrays || function() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++)
    e += arguments[t].length;
  for (var i = Array(e), s = 0, t = 0; t < r; t++)
    for (var a = arguments[t], u = 0, f = a.length; u < f; u++, s++)
      i[s] = a[u];
  return i;
};
Object.defineProperty(An, "__esModule", { value: !0 });
var gt = [];
function Qa(e) {
  var t = typeof e;
  return e !== null && (t === "object" || t === "function");
}
function Ka(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function Za(e) {
  return Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.prototype.propertyIsEnumerable.call(e, t);
  });
}
function Mt(e, t, r) {
  r === void 0 && (r = "");
  var i = {
    indent: "	",
    singleQuotes: !0
  }, s = jt(jt({}, i), t), a;
  s.inlineCharacterLimit === void 0 ? a = {
    newLine: `
`,
    newLineOrSpace: `
`,
    pad: r,
    indent: r + s.indent
  } : a = {
    newLine: "@@__PRETTY_PRINT_NEW_LINE__@@",
    newLineOrSpace: "@@__PRETTY_PRINT_NEW_LINE_OR_SPACE__@@",
    pad: "@@__PRETTY_PRINT_PAD__@@",
    indent: "@@__PRETTY_PRINT_INDENT__@@"
  };
  var u = function(y) {
    if (s.inlineCharacterLimit === void 0)
      return y;
    var m = y.replace(new RegExp(a.newLine, "g"), "").replace(new RegExp(a.newLineOrSpace, "g"), " ").replace(new RegExp(a.pad + "|" + a.indent, "g"), "");
    return m.length <= s.inlineCharacterLimit ? m : y.replace(new RegExp(a.newLine + "|" + a.newLineOrSpace, "g"), `
`).replace(new RegExp(a.pad, "g"), r).replace(new RegExp(a.indent, "g"), r + s.indent);
  };
  if (gt.indexOf(e) !== -1)
    return '"[Circular]"';
  if (e == null || typeof e == "number" || typeof e == "boolean" || typeof e == "function" || typeof e == "symbol" || Ka(e))
    return String(e);
  if (e instanceof Date)
    return "new Date('" + e.toISOString() + "')";
  if (Array.isArray(e)) {
    if (e.length === 0)
      return "[]";
    gt.push(e);
    var f = "[" + a.newLine + e.map(function(y, m) {
      var x = e.length - 1 === m ? a.newLine : "," + a.newLineOrSpace, S = Mt(y, s, r + s.indent);
      return s.transform && (S = s.transform(e, m, S)), a.indent + S + x;
    }).join("") + a.pad + "]";
    return gt.pop(), u(f);
  }
  if (Qa(e)) {
    var h = Ha(Object.keys(e), Za(e));
    if (s.filter && (h = h.filter(function(m) {
      return s.filter && s.filter(e, m);
    })), h.length === 0)
      return "{}";
    gt.push(e);
    var f = "{" + a.newLine + h.map(function(m, x) {
      var S = h.length - 1 === x ? a.newLine : "," + a.newLineOrSpace, b = typeof m == "symbol", C = !b && /^[a-z$_][a-z$_0-9]*$/i.test(m.toString()), v = b || C ? m : Mt(m, s), _ = Mt(e[m], s, r + s.indent);
      return s.transform && (_ = s.transform(e, m, _)), a.indent + String(v) + ": " + _ + S;
    }).join("") + a.pad + "}";
    return gt.pop(), u(f);
  }
  return e = String(e).replace(/[\r\n]/g, function(y) {
    return y === `
` ? "\\n" : "\\r";
  }), s.singleQuotes ? (e = e.replace(/\\?'/g, "\\'"), "'" + e + "'") : (e = e.replace(/"/g, '\\"'), '"' + e + '"');
}
var eo = An.prettyPrint = Mt, yr = { exports: {} }, me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ci;
function to() {
  if (Ci)
    return me;
  Ci = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.server_context"), h = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), C;
  C = Symbol.for("react.module.reference");
  function v(_) {
    if (typeof _ == "object" && _ !== null) {
      var R = _.$$typeof;
      switch (R) {
        case e:
          switch (_ = _.type, _) {
            case r:
            case s:
            case i:
            case y:
            case m:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case f:
                case u:
                case h:
                case S:
                case x:
                case a:
                  return _;
                default:
                  return R;
              }
          }
        case t:
          return R;
      }
    }
  }
  return me.ContextConsumer = u, me.ContextProvider = a, me.Element = e, me.ForwardRef = h, me.Fragment = r, me.Lazy = S, me.Memo = x, me.Portal = t, me.Profiler = s, me.StrictMode = i, me.Suspense = y, me.SuspenseList = m, me.isAsyncMode = function() {
    return !1;
  }, me.isConcurrentMode = function() {
    return !1;
  }, me.isContextConsumer = function(_) {
    return v(_) === u;
  }, me.isContextProvider = function(_) {
    return v(_) === a;
  }, me.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === e;
  }, me.isForwardRef = function(_) {
    return v(_) === h;
  }, me.isFragment = function(_) {
    return v(_) === r;
  }, me.isLazy = function(_) {
    return v(_) === S;
  }, me.isMemo = function(_) {
    return v(_) === x;
  }, me.isPortal = function(_) {
    return v(_) === t;
  }, me.isProfiler = function(_) {
    return v(_) === s;
  }, me.isStrictMode = function(_) {
    return v(_) === i;
  }, me.isSuspense = function(_) {
    return v(_) === y;
  }, me.isSuspenseList = function(_) {
    return v(_) === m;
  }, me.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === r || _ === s || _ === i || _ === y || _ === m || _ === b || typeof _ == "object" && _ !== null && (_.$$typeof === S || _.$$typeof === x || _.$$typeof === a || _.$$typeof === u || _.$$typeof === h || _.$$typeof === C || _.getModuleId !== void 0);
  }, me.typeOf = v, me;
}
var ge = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ai;
function ro() {
  return Ai || (Ai = 1, process.env.NODE_ENV !== "production" && function() {
    var e = !1, t = !1, r = !1, i = !1, s = !1, a = Symbol.for("react.element"), u = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), x = Symbol.for("react.context"), S = Symbol.for("react.server_context"), b = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), F;
    F = Symbol.for("react.module.reference");
    function w(j) {
      return !!(typeof j == "string" || typeof j == "function" || j === f || j === y || s || j === h || j === C || j === v || i || j === N || e || t || r || typeof j == "object" && j !== null && (j.$$typeof === R || j.$$typeof === _ || j.$$typeof === m || j.$$typeof === x || j.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      j.$$typeof === F || j.getModuleId !== void 0));
    }
    function p(j) {
      if (typeof j == "object" && j !== null) {
        var Ue = j.$$typeof;
        switch (Ue) {
          case a:
            var $e = j.type;
            switch ($e) {
              case f:
              case y:
              case h:
              case C:
              case v:
                return $e;
              default:
                var Pt = $e && $e.$$typeof;
                switch (Pt) {
                  case S:
                  case x:
                  case b:
                  case R:
                  case _:
                  case m:
                    return Pt;
                  default:
                    return Ue;
                }
            }
          case u:
            return Ue;
        }
      }
    }
    var E = x, A = m, T = a, q = b, B = f, Y = R, z = _, U = u, K = y, ye = h, fe = C, ue = v, ee = !1, Ee = !1;
    function O(j) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function V(j) {
      return Ee || (Ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function I(j) {
      return p(j) === x;
    }
    function Q(j) {
      return p(j) === m;
    }
    function X(j) {
      return typeof j == "object" && j !== null && j.$$typeof === a;
    }
    function Z(j) {
      return p(j) === b;
    }
    function $(j) {
      return p(j) === f;
    }
    function J(j) {
      return p(j) === R;
    }
    function re(j) {
      return p(j) === _;
    }
    function le(j) {
      return p(j) === u;
    }
    function ne(j) {
      return p(j) === y;
    }
    function Ce(j) {
      return p(j) === h;
    }
    function D(j) {
      return p(j) === C;
    }
    function Oe(j) {
      return p(j) === v;
    }
    ge.ContextConsumer = E, ge.ContextProvider = A, ge.Element = T, ge.ForwardRef = q, ge.Fragment = B, ge.Lazy = Y, ge.Memo = z, ge.Portal = U, ge.Profiler = K, ge.StrictMode = ye, ge.Suspense = fe, ge.SuspenseList = ue, ge.isAsyncMode = O, ge.isConcurrentMode = V, ge.isContextConsumer = I, ge.isContextProvider = Q, ge.isElement = X, ge.isForwardRef = Z, ge.isFragment = $, ge.isLazy = J, ge.isMemo = re, ge.isPortal = le, ge.isProfiler = ne, ge.isStrictMode = Ce, ge.isSuspense = D, ge.isSuspenseList = Oe, ge.isValidElementType = w, ge.typeOf = p;
  }()), ge;
}
process.env.NODE_ENV === "production" ? yr.exports = to() : yr.exports = ro();
var Ve = yr.exports, ze = function(e, t) {
  return e === 0 ? "" : new Array(e * t).fill(" ").join("");
};
function St(e) {
  "@babel/helpers - typeof";
  return St = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, St(e);
}
function wi(e) {
  return io(e) || no(e) || so(e) || ao();
}
function io(e) {
  if (Array.isArray(e))
    return vr(e);
}
function no(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function so(e, t) {
  if (e) {
    if (typeof e == "string")
      return vr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return vr(e, t);
  }
}
function vr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, i = new Array(t); r < t; r++)
    i[r] = e[r];
  return i;
}
function ao() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xr(e, t) {
  return e === null || St(e) !== "object" || e instanceof Date || e instanceof RegExp || /* @__PURE__ */ qe.isValidElement(e) ? e : (t.add(e), Array.isArray(e) ? e.map(function(r) {
    return xr(r, t);
  }) : Object.keys(e).sort().reduce(function(r, i) {
    return i === "_owner" || (i === "current" || t.has(e[i]) ? r[i] = "[Circular]" : r[i] = xr(e[i], t)), r;
  }, {}));
}
function oo(e) {
  return xr(e, /* @__PURE__ */ new WeakSet());
}
var wn = function(t) {
  return {
    type: "string",
    value: t
  };
}, uo = function(t) {
  return {
    type: "number",
    value: t
  };
}, lo = function(t, r, i, s) {
  return {
    type: "ReactElement",
    displayName: t,
    props: r,
    defaultProps: i,
    childrens: s
  };
}, co = function(t, r) {
  return {
    type: "ReactFragment",
    key: t,
    childrens: r
  };
}, fo = !!qe.Fragment, Tn = function(t) {
  return !t.name || t.name === "_default" ? "No Display Name" : t.name;
}, ho = function e(t) {
  switch (!0) {
    case !!t.displayName:
      return t.displayName;
    case t.$$typeof === Ve.Memo:
      return e(t.type);
    case t.$$typeof === Ve.ForwardRef:
      return e(t.render);
    default:
      return Tn(t);
  }
}, po = function(t) {
  switch (!0) {
    case typeof t.type == "string":
      return t.type;
    case typeof t.type == "function":
      return t.type.displayName ? t.type.displayName : Tn(t.type);
    case Ve.isForwardRef(t):
    case Ve.isMemo(t):
      return ho(t.type);
    case Ve.isContextConsumer(t):
      return "".concat(t.type._context.displayName || "Context", ".Consumer");
    case Ve.isContextProvider(t):
      return "".concat(t.type._context.displayName || "Context", ".Provider");
    case Ve.isLazy(t):
      return "Lazy";
    case Ve.isProfiler(t):
      return "Profiler";
    case Ve.isStrictMode(t):
      return "StrictMode";
    case Ve.isSuspense(t):
      return "Suspense";
    default:
      return "UnknownElementType";
  }
}, Ti = function(t, r) {
  return r !== "children";
}, mo = function(t) {
  return t !== !0 && t !== !1 && t !== null && t !== "";
}, ki = function(t, r) {
  var i = {};
  return Object.keys(t).filter(function(s) {
    return r(t[s], s);
  }).forEach(function(s) {
    return i[s] = t[s];
  }), i;
}, Mr = function e(t, r) {
  var i = r.displayName, s = i === void 0 ? po : i;
  if (typeof t == "string")
    return wn(t);
  if (typeof t == "number")
    return uo(t);
  if (!/* @__PURE__ */ Ge.isValidElement(t))
    throw new Error("react-element-to-jsx-string: Expected a React.Element, got `".concat(St(t), "`"));
  var a = s(t), u = ki(t.props, Ti);
  t.ref !== null && (u.ref = t.ref);
  var f = t.key;
  typeof f == "string" && f.search(/^\./) && (u.key = f);
  var h = ki(t.type.defaultProps || {}, Ti), y = Ge.Children.toArray(t.props.children).filter(mo).map(function(m) {
    return e(m, r);
  });
  return fo && t.type === qe.Fragment ? co(f, y) : lo(a, u, h, y);
};
function go() {
}
var yo = function(t) {
  return t.toString().split(`
`).map(function(r) {
    return r.trim();
  }).join("");
}, Pi = yo, kn = function(e, t) {
  var r = t.functionValue, i = r === void 0 ? Pi : r, s = t.showFunctions;
  return i(!s && i === Pi ? go : e);
}, vo = function(e, t, r, i) {
  var s = oo(e), a = eo(s, {
    transform: function(f, h, y) {
      var m = f[h];
      return m && /* @__PURE__ */ qe.isValidElement(m) ? Xt(Mr(m, i), !0, r, i) : typeof m == "function" ? kn(m, i) : y;
    }
  });
  return t ? a.replace(/\s+/g, " ").replace(/{ /g, "{").replace(/ }/g, "}").replace(/\[ /g, "[").replace(/ ]/g, "]") : a.replace(/\t/g, ze(1, i.tabStop)).replace(/\n([^$])/g, `
`.concat(ze(r + 1, i.tabStop), "$1"));
}, xo = function(t) {
  return t.replace(/"/g, "&quot;");
}, bo = function(t, r, i, s) {
  if (typeof t == "number")
    return "{".concat(String(t), "}");
  if (typeof t == "string")
    return '"'.concat(xo(t), '"');
  if (St(t) === "symbol") {
    var a = t.valueOf().toString().replace(/Symbol\((.*)\)/, "$1");
    return a ? "{Symbol('".concat(a, "')}") : "{Symbol()}";
  }
  return typeof t == "function" ? "{".concat(kn(t, s), "}") : /* @__PURE__ */ qe.isValidElement(t) ? "{".concat(Xt(Mr(t, s), !0, i, s), "}") : t instanceof Date ? isNaN(t.valueOf()) ? "{new Date(NaN)}" : '{new Date("'.concat(t.toISOString(), '")}') : Xa(t) || Array.isArray(t) ? "{".concat(vo(t, r, i, s), "}") : "{".concat(String(t), "}");
}, So = function(e, t, r, i, s, a, u, f) {
  if (!t && !i)
    throw new Error('The prop "'.concat(e, '" has no value and no default: could not be formatted'));
  var h = t ? r : s, y = f.useBooleanShorthandSyntax, m = f.tabStop, x = bo(h, a, u, f), S = " ", b = `
`.concat(ze(u + 1, m)), C = x.includes(`
`);
  return y && x === "{false}" && !i ? (S = "", b = "") : y && x === "{true}" ? (S += "".concat(e), b += "".concat(e)) : (S += "".concat(e, "=").concat(x), b += "".concat(e, "=").concat(x)), {
    attributeFormattedInline: S,
    attributeFormattedMultiline: b,
    isMultilineAttribute: C
  };
}, _o = function(e, t) {
  var r = e.slice(0, e.length > 0 ? e.length - 1 : 0), i = e[e.length - 1];
  return i && (t.type === "string" || t.type === "number") && (i.type === "string" || i.type === "number") ? r.push(wn(String(i.value) + String(t.value))) : (i && r.push(i), r.push(t)), r;
}, Eo = function(t) {
  return ["key", "ref"].includes(t);
}, Co = function(e) {
  return function(t) {
    var r = t.includes("key"), i = t.includes("ref"), s = t.filter(function(u) {
      return !Eo(u);
    }), a = wi(e ? s.sort() : s);
    return i && a.unshift("ref"), r && a.unshift("key"), a;
  };
};
function Ao(e, t) {
  return Array.isArray(t) ? function(r) {
    return t.indexOf(r) === -1;
  } : function(r) {
    return t(e[r], r);
  };
}
var wo = function(t, r, i, s, a) {
  var u = a.tabStop;
  return t.type === "string" ? r.split(`
`).map(function(f, h) {
    return h === 0 ? f : "".concat(ze(s, u)).concat(f);
  }).join(`
`) : r;
}, To = function(t, r, i) {
  return function(s) {
    return wo(s, Xt(s, t, r, i), t, r, i);
  };
}, ko = function(t, r) {
  return function(i) {
    var s = Object.keys(t).includes(i);
    return !s || s && t[i] !== r[i];
  };
}, Pn = function(t, r, i, s, a) {
  return a ? ze(i, s).length + r.length > a : t.length > 1;
}, Po = function(t, r, i, s, a, u, f) {
  return (Pn(t, r, a, u, f) || i) && !s;
}, In = function(e, t, r, i) {
  var s = e.type, a = e.displayName, u = a === void 0 ? "" : a, f = e.childrens, h = e.props, y = h === void 0 ? {} : h, m = e.defaultProps, x = m === void 0 ? {} : m;
  if (s !== "ReactElement")
    throw new Error('The "formatReactElementNode" function could only format node of type "ReactElement". Given:  '.concat(s));
  var S = i.filterProps, b = i.maxInlineAttributesLineLength, C = i.showDefaultProps, v = i.sortProps, _ = i.tabStop, R = "<".concat(u), N = R, F = R, w = !1, p = [], E = Ao(y, S);
  Object.keys(y).filter(E).filter(ko(x, y)).forEach(function(q) {
    return p.push(q);
  }), Object.keys(x).filter(E).filter(function() {
    return C;
  }).filter(function(q) {
    return !p.includes(q);
  }).forEach(function(q) {
    return p.push(q);
  });
  var A = Co(v)(p);
  if (A.forEach(function(q) {
    var B = So(q, Object.keys(y).includes(q), y[q], Object.keys(x).includes(q), x[q], t, r, i), Y = B.attributeFormattedInline, z = B.attributeFormattedMultiline, U = B.isMultilineAttribute;
    U && (w = !0), N += Y, F += z;
  }), F += `
`.concat(ze(r, _)), Po(A, N, w, t, r, _, b) ? R = F : R = N, f && f.length > 0) {
    var T = r + 1;
    R += ">", t || (R += `
`, R += ze(T, _)), R += f.reduce(_o, []).map(To(t, T, i)).join(t ? "" : `
`.concat(ze(T, _))), t || (R += `
`, R += ze(T - 1, _)), R += "</".concat(u, ">");
  } else
    Pn(A, N, r, _, b) || (R += " "), R += "/>";
  return R;
}, Io = "", Ii = "React.Fragment", Oo = function(t, r, i) {
  var s = {};
  return r && (s = {
    key: r
  }), {
    type: "ReactElement",
    displayName: t,
    props: s,
    defaultProps: {},
    childrens: i
  };
}, Ro = function(t) {
  var r = t.key;
  return !!r;
}, Lo = function(t) {
  var r = t.childrens;
  return r.length === 0;
}, No = function(e, t, r, i) {
  var s = e.type, a = e.key, u = e.childrens;
  if (s !== "ReactFragment")
    throw new Error('The "formatReactFragmentNode" function could only format node of type "ReactFragment". Given: '.concat(s));
  var f = i.useFragmentShortSyntax, h;
  return f ? Lo(e) || Ro(e) ? h = Ii : h = Io : h = Ii, In(Oo(h, a, u), t, r, i);
}, Mo = ["<", ">", "{", "}"], Fo = function(t) {
  return Mo.some(function(r) {
    return t.includes(r);
  });
}, Do = function(t) {
  return Fo(t) ? "{`".concat(t, "`}") : t;
}, Bo = function(t) {
  var r = t;
  return r.endsWith(" ") && (r = r.replace(/^(.*?)(\s+)$/, "$1{'$2'}")), r.startsWith(" ") && (r = r.replace(/^(\s+)(.*)$/, "{'$1'}$2")), r;
}, Xt = function(e, t, r, i) {
  if (e.type === "number")
    return String(e.value);
  if (e.type === "string")
    return e.value ? "".concat(Bo(Do(String(e.value)))) : "";
  if (e.type === "ReactElement")
    return In(e, t, r, i);
  if (e.type === "ReactFragment")
    return No(e, t, r, i);
  throw new TypeError('Unknow format type "'.concat(e.type, '"'));
}, jo = function(e, t) {
  return Xt(e, !1, 0, t);
}, vt = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.filterProps, s = i === void 0 ? [] : i, a = r.showDefaultProps, u = a === void 0 ? !0 : a, f = r.showFunctions, h = f === void 0 ? !1 : f, y = r.functionValue, m = r.tabStop, x = m === void 0 ? 2 : m, S = r.useBooleanShorthandSyntax, b = S === void 0 ? !0 : S, C = r.useFragmentShortSyntax, v = C === void 0 ? !0 : C, _ = r.sortProps, R = _ === void 0 ? !0 : _, N = r.maxInlineAttributesLineLength, F = r.displayName;
  if (!t)
    throw new Error("react-element-to-jsx-string: Expected a ReactElement");
  var w = {
    filterProps: s,
    showDefaultProps: u,
    showFunctions: h,
    functionValue: y,
    tabStop: x,
    useBooleanShorthandSyntax: b,
    useFragmentShortSyntax: v,
    sortProps: R,
    maxInlineAttributesLineLength: N,
    displayName: F
  };
  return jo(Mr(t, w), w);
};
const { defaultDecorateStory: Vo, addons: qo, useEffect: Uo } = __STORYBOOK_MODULE_PREVIEW_API__, { logger: Nt } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
function $o(e, t) {
  let r = e != null, i = t != null;
  if (!r && !i)
    return "";
  let s = [];
  if (r) {
    let a = e.map((u) => {
      let f = u.getPrettyName(), h = u.getTypeName();
      return h != null ? `${f}: ${h}` : f;
    });
    s.push(`(${a.join(", ")})`);
  } else
    s.push("()");
  return i && s.push(`=> ${t.getTypeName()}`), s.join(" ");
}
function Wo(e, t) {
  let r = e != null, i = t != null;
  if (!r && !i)
    return "";
  let s = [];
  return r ? s.push("( ... )") : s.push("()"), i && s.push(`=> ${t.getTypeName()}`), s.join(" ");
}
function zo(e) {
  return e.replace(/,/g, `,\r
`);
}
var br = "custom", Tt = "object", Fr = "array", Go = "class", lt = "func", ht = "element";
function Dr(e) {
  return Ps.includes(e.toLowerCase());
}
var On = { format: { indent: { style: "  " }, semicolons: !1 } }, Yo = { ...On, format: { newline: "" } }, Jo = { ...On };
function Qe(e, t = !1) {
  return Ui.generate(e, t ? Yo : Jo);
}
function Sr(e, t = !1) {
  return t ? Xo(e) : Qe(e);
}
function Xo(e) {
  let t = Qe(e, !0);
  return t.endsWith(" }") || (t = `${t.slice(0, -1)} }`), t;
}
function Oi(e, t = !1) {
  return t ? Qo(e) : Ho(e);
}
function Ho(e) {
  let t = Qe(e);
  return t.endsWith("  }]") && (t = ms(t)), t;
}
function Qo(e) {
  let t = Qe(e, !0);
  return t.startsWith("[    ") && (t = t.replace("[    ", "[")), t;
}
var Rn = (e) => e.$$typeof === Symbol.for("react.memo"), Ko = (e) => e.$$typeof === Symbol.for("react.forward_ref"), Br = { ...M, JSXElement: () => {
} }, Zo = xe.extend(Pa());
function kt(e) {
  return e != null ? e.name : null;
}
function Ri(e) {
  return e.filter((t) => t.type === "ObjectExpression" || t.type === "ArrayExpression");
}
function Ln(e) {
  let t = [];
  return Ia(e, { ObjectExpression(r, i) {
    t.push(Ri(i).length);
  }, ArrayExpression(r, i) {
    t.push(Ri(i).length);
  } }, Br), Math.max(...t);
}
function eu(e) {
  return { inferredType: { type: "Identifier", identifier: kt(e) }, ast: e };
}
function tu(e) {
  return { inferredType: { type: "Literal" }, ast: e };
}
function ru(e) {
  let t;
  En(e.body, { JSXElement(s) {
    t = s;
  } }, Br);
  let r = { type: t != null ? "Element" : "Function", params: e.params, hasParams: e.params.length !== 0 }, i = kt(e.id);
  return i != null && (r.identifier = i), { inferredType: r, ast: e };
}
function iu(e) {
  let t;
  return En(e.body, { JSXElement(r) {
    t = r;
  } }, Br), { inferredType: { type: t != null ? "Element" : "Class", identifier: kt(e.id) }, ast: e };
}
function nu(e) {
  let t = { type: "Element" }, r = kt(e.openingElement.name);
  return r != null && (t.identifier = r), { inferredType: t, ast: e };
}
function su(e) {
  let t = e.callee.type === "MemberExpression" ? e.callee.property : e.callee;
  return kt(t) === "shape" ? Nn(e.arguments[0]) : null;
}
function Nn(e) {
  return { inferredType: { type: "Object", depth: Ln(e) }, ast: e };
}
function au(e) {
  return { inferredType: { type: "Array", depth: Ln(e) }, ast: e };
}
function ou(e) {
  switch (e.type) {
    case "Identifier":
      return eu(e);
    case "Literal":
      return tu(e);
    case "FunctionExpression":
    case "ArrowFunctionExpression":
      return ru(e);
    case "ClassExpression":
      return iu(e);
    case "JSXElement":
      return nu(e);
    case "CallExpression":
      return su(e);
    case "ObjectExpression":
      return Nn(e);
    case "ArrayExpression":
      return au(e);
    default:
      return null;
  }
}
function uu(e) {
  let t = Zo.parse(`(${e})`), r = { inferredType: { type: "Unknown" }, ast: t };
  if (t.body[0] != null) {
    let i = t.body[0];
    switch (i.type) {
      case "ExpressionStatement": {
        let s = ou(i.expression);
        s != null && (r = s);
        break;
      }
    }
  }
  return r;
}
function Ke(e) {
  try {
    return { ...uu(e) };
  } catch {
  }
  return { inferredType: { type: "Unknown" } };
}
var lu = 150;
function Pe({ name: e, short: t, compact: r, full: i, inferredType: s }) {
  return { name: e, short: t, compact: r, full: i ?? t, inferredType: s };
}
function Mn(e) {
  return e.replace(/PropTypes./g, "").replace(/.isRequired/g, "");
}
function Li(e) {
  return e.split(/\r?\n/);
}
function Vt(e, t = !1) {
  return Mn(Sr(e, t));
}
function Ni(e, t = !1) {
  return Mn(Qe(e, t));
}
function cu(e) {
  switch (e) {
    case "Object":
      return Tt;
    case "Array":
      return Fr;
    case "Class":
      return Go;
    case "Function":
      return lt;
    case "Element":
      return ht;
    default:
      return br;
  }
}
function Fn(e, t) {
  let { inferredType: r, ast: i } = Ke(e), { type: s } = r, a, u, f;
  switch (s) {
    case "Identifier":
    case "Literal":
      a = e, u = e;
      break;
    case "Object": {
      let { depth: h } = r;
      a = Tt, u = h === 1 ? Vt(i, !0) : null, f = Vt(i);
      break;
    }
    case "Element": {
      let { identifier: h } = r;
      a = h != null && !Dr(h) ? h : ht, u = Li(e).length === 1 ? e : null, f = e;
      break;
    }
    case "Array": {
      let { depth: h } = r;
      a = Fr, u = h <= 2 ? Ni(i, !0) : null, f = Ni(i);
      break;
    }
    default:
      a = cu(s), u = Li(e).length === 1 ? e : null, f = e;
      break;
  }
  return Pe({ name: t, short: a, compact: u, full: f, inferredType: s });
}
function fu({ raw: e }) {
  return e != null ? Fn(e, "custom") : Pe({ name: "custom", short: br, compact: br });
}
function hu(e) {
  let { jsDocTags: t } = e;
  return t != null && (t.params != null || t.returns != null) ? Pe({ name: "func", short: Wo(t.params, t.returns), compact: null, full: $o(t.params, t.returns) }) : Pe({ name: "func", short: lt, compact: lt });
}
function pu(e, t) {
  let r = Object.keys(e.value).map((u) => `${u}: ${ct(e.value[u], t).full}`).join(", "), { inferredType: i, ast: s } = Ke(`{ ${r} }`), { depth: a } = i;
  return Pe({ name: "shape", short: Tt, compact: a === 1 && s ? Vt(s, !0) : null, full: s ? Vt(s) : null });
}
function pr(e) {
  return `objectOf(${e})`;
}
function du(e, t) {
  let { short: r, compact: i, full: s } = ct(e.value, t);
  return Pe({ name: "objectOf", short: pr(r), compact: i != null ? pr(i) : null, full: s && pr(s) });
}
function mu(e, t) {
  if (Array.isArray(e.value)) {
    let r = e.value.reduce((i, s) => {
      let { short: a, compact: u, full: f } = ct(s, t);
      return i.short.push(a), i.compact.push(u), i.full.push(f), i;
    }, { short: [], compact: [], full: [] });
    return Pe({ name: "union", short: r.short.join(" | "), compact: r.compact.every((i) => i != null) ? r.compact.join(" | ") : null, full: r.full.join(" | ") });
  }
  return Pe({ name: "union", short: e.value, compact: null });
}
function gu({ value: e, computed: t }) {
  return t ? Fn(e, "enumvalue") : Pe({ name: "enumvalue", short: e, compact: e });
}
function yu(e) {
  if (Array.isArray(e.value)) {
    let t = e.value.reduce((r, i) => {
      let { short: s, compact: a, full: u } = gu(i);
      return r.short.push(s), r.compact.push(a), r.full.push(u), r;
    }, { short: [], compact: [], full: [] });
    return Pe({ name: "enum", short: t.short.join(" | "), compact: t.compact.every((r) => r != null) ? t.compact.join(" | ") : null, full: t.full.join(" | ") });
  }
  return Pe({ name: "enum", short: e.value, compact: e.value });
}
function _r(e) {
  return `${e}[]`;
}
function Mi(e) {
  return `[${e}]`;
}
function Fi(e, t, r) {
  return Pe({ name: "arrayOf", short: _r(e), compact: t != null ? Mi(t) : null, full: r && Mi(r) });
}
function vu(e, t) {
  let { name: r, short: i, compact: s, full: a, inferredType: u } = ct(e.value, t);
  if (r === "custom") {
    if (u === "Object")
      return Fi(i, s, a);
  } else if (r === "shape")
    return Fi(i, s, a);
  return Pe({ name: "arrayOf", short: _r(i), compact: _r(i) });
}
function ct(e, t) {
  try {
    switch (e.name) {
      case "custom":
        return fu(e);
      case "func":
        return hu(t);
      case "shape":
        return pu(e, t);
      case "instanceOf":
        return Pe({ name: "instanceOf", short: e.value, compact: e.value });
      case "objectOf":
        return du(e, t);
      case "union":
        return mu(e, t);
      case "enum":
        return yu(e);
      case "arrayOf":
        return vu(e, t);
      default:
        return Pe({ name: e.name, short: e.name, compact: e.name });
    }
  } catch (r) {
    console.error(r);
  }
  return Pe({ name: "unknown", short: "unknown", compact: "unknown" });
}
function xu(e) {
  let { type: t } = e.docgenInfo;
  if (t == null)
    return null;
  try {
    switch (t.name) {
      case "custom":
      case "shape":
      case "instanceOf":
      case "objectOf":
      case "union":
      case "enum":
      case "arrayOf": {
        let { short: r, compact: i, full: s } = ct(t, e);
        return i != null && !ps(i) ? ve(i) : s ? ve(r, s) : ve(r);
      }
      case "func": {
        let { short: r, full: i } = ct(t, e), s = r, a;
        return i && i.length < lu ? s = i : i && (a = zo(i)), ve(s, a);
      }
      default:
        return null;
    }
  } catch (r) {
    console.error(r);
  }
  return null;
}
function Dn({ inferredType: e, ast: t }) {
  let { depth: r } = e;
  if (r === 1) {
    let i = Sr(t, !0);
    if (!_t(i))
      return ve(i);
  }
  return ve(Tt, Sr(t));
}
function Bn({ inferredType: e, ast: t }) {
  let { depth: r } = e;
  if (r <= 2) {
    let i = Oi(t, !0);
    if (!_t(i))
      return ve(i);
  }
  return ve(Fr, Oi(t));
}
function jr(e, t) {
  return t ? `${e}( ... )` : `${e}()`;
}
function Ht(e) {
  return `<${e} />`;
}
function jn(e) {
  let { type: t, identifier: r } = e;
  switch (t) {
    case "Function":
      return jr(r, e.hasParams);
    case "Element":
      return Ht(r);
    default:
      return r;
  }
}
function bu({ inferredType: e, ast: t }) {
  let { identifier: r } = e;
  if (r != null)
    return ve(jn(e), Qe(t));
  let i = Qe(t, !0);
  return _t(i) ? ve(lt, Qe(t)) : ve(i);
}
function Su(e, t) {
  let { inferredType: r } = t, { identifier: i } = r;
  if (i != null && !Dr(i)) {
    let s = jn(r);
    return ve(s, e);
  }
  return _t(e) ? ve(ht, e) : ve(e);
}
function Vn(e) {
  try {
    let t = Ke(e);
    switch (t.inferredType.type) {
      case "Object":
        return Dn(t);
      case "Function":
        return bu(t);
      case "Element":
        return Su(e, t);
      case "Array":
        return Bn(t);
      default:
        return null;
    }
  } catch (t) {
    console.error(t);
  }
  return null;
}
function qn(e) {
  return e.$$typeof != null;
}
function Un(e, t) {
  let { name: r } = e;
  return r !== "" && r !== "anonymous" && r !== t ? r : null;
}
var _u = (e) => ve(JSON.stringify(e));
function Eu(e) {
  let { type: t } = e, { displayName: r } = t, i = vt(e, {});
  if (r != null) {
    let s = Ht(r);
    return ve(s, i);
  }
  if (Ja(t) && Dr(t)) {
    let s = vt(e, { tabStop: 0 }).replace(/\r?\n|\r/g, "");
    if (!_t(s))
      return ve(s);
  }
  return ve(ht, i);
}
var Cu = (e) => {
  if (qn(e) && e.type != null)
    return Eu(e);
  if (qa(e)) {
    let t = Ke(JSON.stringify(e));
    return Dn(t);
  }
  if (Array.isArray(e)) {
    let t = Ke(JSON.stringify(e));
    return Bn(t);
  }
  return ve(Tt);
}, Au = (e, t) => {
  let r = !1, i;
  if (Xr(e.render))
    r = !0;
  else if (e.prototype != null && Xr(e.prototype.render))
    r = !0;
  else {
    let a;
    try {
      i = Ke(e.toString());
      let { hasParams: u, params: f } = i.inferredType;
      u ? f.length === 1 && f[0].type === "ObjectPattern" && (a = e({})) : a = e(), a != null && qn(a) && (r = !0);
    } catch {
    }
  }
  let s = Un(e, t.name);
  if (s != null) {
    if (r)
      return ve(Ht(s));
    i != null && (i = Ke(e.toString()));
    let { hasParams: a } = i.inferredType;
    return ve(jr(s, a));
  }
  return ve(r ? ht : lt);
}, wu = (e) => ve(e.toString()), $n = { string: _u, object: Cu, function: Au, default: wu };
function Tu(e = {}) {
  return { ...$n, ...e };
}
function Wn(e, t, r = $n) {
  try {
    switch (typeof e) {
      case "string":
        return r.string(e, t);
      case "object":
        return r.object(e, t);
      case "function":
        return r.function(e, t);
      default:
        return r.default(e, t);
    }
  } catch (i) {
    console.error(i);
  }
  return null;
}
function ku(e, t) {
  let { propTypes: r } = t;
  return r != null ? Object.keys(r).map((i) => e.find((s) => s.name === i)).filter(Boolean) : e;
}
var Pu = (e, { name: t, type: r }) => {
  let i = r.summary === "element" || r.summary === "elementType", s = Un(e, t);
  if (s != null) {
    if (i)
      return ve(Ht(s));
    let { hasParams: a } = Ke(e.toString()).inferredType;
    return ve(jr(s, a));
  }
  return ve(i ? ht : lt);
}, Iu = Tu({ function: Pu });
function Ou(e, t) {
  let { propDef: r } = e, i = xu(e);
  i != null && (r.type = i);
  let { defaultValue: s } = e.docgenInfo;
  if (s != null && s.value != null) {
    let a = Vn(s.value);
    a != null && (r.defaultValue = a);
  } else if (t != null) {
    let a = Wn(t, r, Iu);
    a != null && (r.defaultValue = a);
  }
  return r;
}
function Ru(e, t) {
  let r = t.defaultProps != null ? t.defaultProps : {}, i = e.map((s) => Ou(s, r[s.propDef.name]));
  return ku(i, t);
}
function Lu(e, t) {
  let { propDef: r } = e, { defaultValue: i } = e.docgenInfo;
  if (i != null && i.value != null) {
    let s = Vn(i.value);
    s != null && (r.defaultValue = s);
  } else if (t != null) {
    let s = Wn(t, r);
    s != null && (r.defaultValue = s);
  }
  return r;
}
function Nu(e) {
  return e.map((t) => Lu(t));
}
var Di = /* @__PURE__ */ new Map();
Object.keys(oi).forEach((e) => {
  let t = oi[e];
  Di.set(t, e), Di.set(t.isRequired, e);
});
function Mu(e, t) {
  let r = e;
  !fs(e) && !e.propTypes && Rn(e) && (r = e.type);
  let i = hs(r, t);
  if (i.length === 0)
    return [];
  switch (i[0].typeSystem) {
    case Hr.JAVASCRIPT:
      return Ru(i, e);
    case Hr.TYPESCRIPT:
      return Nu(i);
    default:
      return i.map((s) => s.propDef);
  }
}
var Fu = (e) => ({ rows: Mu(e, "props") }), Du = (e) => {
  if (e) {
    let { rows: t } = Fu(e);
    if (t)
      return t.reduce((r, i) => {
        let { name: s, description: a, type: u, sbType: f, defaultValue: h, jsDocTags: y, required: m } = i;
        return r[s] = { name: s, description: a, type: { required: m, ...f }, table: { type: u, jsDocTags: y, defaultValue: h } }, r;
      }, {});
  }
  return null;
};
function Er(e) {
  if (qe.isValidElement(e)) {
    let t = Object.keys(e.props).reduce((r, i) => (r[i] = Er(e.props[i]), r), {});
    return { ...e, props: t, _owner: null };
  }
  return Array.isArray(e) ? e.map(Er) : e;
}
var Bu = (e, t) => {
  if (typeof e > "u")
    return Nt.warn("Too many skip or undefined component"), null;
  let r = e, i = r.type;
  for (let a = 0; a < t.skip; a += 1) {
    if (typeof r > "u")
      return Nt.warn("Cannot skip undefined element"), null;
    if (Ge.Children.count(r) > 1)
      return Nt.warn("Trying to skip an array of elements"), null;
    typeof r.props.children > "u" ? (Nt.warn("Not enough children to skip elements."), typeof r.type == "function" && r.type.name === "" && (r = Ge.createElement(i, { ...r.props }))) : typeof r.props.children == "function" ? r = r.props.children() : r = r.props.children;
  }
  let s = { ...typeof t.displayName == "string" ? { showFunctions: !0, displayName: () => t.displayName } : { displayName: (a) => a.type.displayName || (a.type === Symbol.for("react.profiler") ? "Profiler" : null) || cs(a.type, "displayName") || (a.type.name !== "_default" ? a.type.name : null) || (typeof a.type == "function" ? "No Display Name" : null) || (Ko(a.type) ? a.type.render.name : null) || (Rn(a.type) ? a.type.type.name : null) || a.type }, filterProps: (a, u) => a !== void 0, ...t };
  return Ge.Children.map(e, (a) => {
    let u = typeof a == "number" ? a.toString() : a, f = (typeof vt == "function" ? vt : vt.default)(Er(u), s);
    if (f.indexOf("&quot;") > -1) {
      let h = f.match(/\S+=\\"([^"]*)\\"/g);
      h && h.forEach((y) => {
        f = f.replace(y, y.replace(/&quot;/g, "'"));
      });
    }
    return f;
  }).join(`
`).replace(/function\s+noRefCheck\(\)\s+\{\}/g, "() => {}");
}, ju = { skip: 0, showFunctions: !1, enableBeautify: !0, showDefaultProps: !1 }, Vu = (e) => {
  var i;
  let t = (i = e == null ? void 0 : e.parameters.docs) == null ? void 0 : i.source, r = e == null ? void 0 : e.parameters.__isArgsStory;
  return (t == null ? void 0 : t.type) === Jr.DYNAMIC ? !1 : !r || (t == null ? void 0 : t.code) || (t == null ? void 0 : t.type) === Jr.CODE;
}, qu = (e) => {
  var t, r;
  return ((t = e.type) == null ? void 0 : t.displayName) === "MDXCreateElement" && !!((r = e.props) != null && r.mdxType);
}, zn = (e) => {
  if (!qu(e))
    return e;
  let { mdxType: t, originalType: r, children: i, ...s } = e.props, a = [];
  return i && (a = (Array.isArray(i) ? i : [i]).map(zn)), qe.createElement(r, s, ...a);
}, Gn = (e, t) => {
  var m, x;
  let r = qo.getChannel(), i = Vu(t), s = "";
  Uo(() => {
    if (!i) {
      let { id: S, unmappedArgs: b } = t;
      r.emit(us, { id: S, source: s, args: b });
    }
  });
  let a = e();
  if (i)
    return a;
  let u = { ...ju, ...(t == null ? void 0 : t.parameters.jsx) || {} }, f = (x = (m = t == null ? void 0 : t.parameters.docs) == null ? void 0 : m.source) != null && x.excludeDecorators ? t.originalStoryFn(t.args, t) : a, h = zn(f), y = Bu(h, u);
  return y && (s = y), a;
}, Uu = { docs: { story: { inline: !0 }, extractArgTypes: Du, extractComponentDescription: ls } }, Xu = [Gn], Hu = [os], Qu = (e, t) => {
  let r = t.findIndex((s) => s.originalFn === Gn), i = r === -1 ? t : [...t.splice(r, 1), ...t];
  return Vo(e, i);
}, Ku = { renderer: "react", ...Uu };
export {
  Qu as applyDecorators,
  Hu as argTypesEnhancers,
  Xu as decorators,
  Ku as parameters,
  Yu as render,
  Ju as renderToCanvas
};
//# sourceMappingURL=config-f9b9a286.js.map

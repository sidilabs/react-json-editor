import "./JsonEditor.stories.css";
import { r as s, R as Re, c as sv, a as So, d as lv, b as pa } from "./index-d373fa27.js";
import { c as Aa, g as ru } from "./_commonjsHelpers-c5d32002.js";
import { _ as cv, c as ct, a as uv, b as fl, d as Ue } from "./assertThisInitialized-16f5f00e.js";
var wi = { exports: {} }, na = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vl;
function dv() {
  if (vl)
    return na;
  vl = 1;
  var e = s, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(l, c, u) {
    var d, f = {}, m = null, g = null;
    u !== void 0 && (m = "" + u), c.key !== void 0 && (m = "" + c.key), c.ref !== void 0 && (g = c.ref);
    for (d in c)
      r.call(c, d) && !o.hasOwnProperty(d) && (f[d] = c[d]);
    if (l && l.defaultProps)
      for (d in c = l.defaultProps, c)
        f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: t, type: l, key: m, ref: g, props: f, _owner: a.current };
  }
  return na.Fragment = n, na.jsx = i, na.jsxs = i, na;
}
var ra = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ml;
function fv() {
  return ml || (ml = 1, process.env.NODE_ENV !== "production" && function() {
    var e = s, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), b = Symbol.iterator, p = "@@iterator";
    function v($) {
      if ($ === null || typeof $ != "object")
        return null;
      var K = b && $[b] || $[p];
      return typeof K == "function" ? K : null;
    }
    var h = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y($) {
      {
        for (var K = arguments.length, ae = new Array(K > 1 ? K - 1 : 0), Ne = 1; Ne < K; Ne++)
          ae[Ne - 1] = arguments[Ne];
        E("error", $, ae);
      }
    }
    function E($, K, ae) {
      {
        var Ne = h.ReactDebugCurrentFrame, Ge = Ne.getStackAddendum();
        Ge !== "" && (K += "%s", ae = ae.concat([Ge]));
        var le = ae.map(function(Z) {
          return String(Z);
        });
        le.unshift("Warning: " + K), Function.prototype.apply.call(console[$], console, le);
      }
    }
    var C = !1, O = !1, x = !1, S = !1, R = !1, _;
    _ = Symbol.for("react.module.reference");
    function N($) {
      return !!(typeof $ == "string" || typeof $ == "function" || $ === r || $ === o || R || $ === a || $ === u || $ === d || S || $ === g || C || O || x || typeof $ == "object" && $ !== null && ($.$$typeof === m || $.$$typeof === f || $.$$typeof === i || $.$$typeof === l || $.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      $.$$typeof === _ || $.getModuleId !== void 0));
    }
    function F($, K, ae) {
      var Ne = $.displayName;
      if (Ne)
        return Ne;
      var Ge = K.displayName || K.name || "";
      return Ge !== "" ? ae + "(" + Ge + ")" : ae;
    }
    function A($) {
      return $.displayName || "Context";
    }
    function M($) {
      if ($ == null)
        return null;
      if (typeof $.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof $ == "function")
        return $.displayName || $.name || null;
      if (typeof $ == "string")
        return $;
      switch ($) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case a:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof $ == "object")
        switch ($.$$typeof) {
          case l:
            var K = $;
            return A(K) + ".Consumer";
          case i:
            var ae = $;
            return A(ae._context) + ".Provider";
          case c:
            return F($, $.render, "ForwardRef");
          case f:
            var Ne = $.displayName || null;
            return Ne !== null ? Ne : M($.type) || "Memo";
          case m: {
            var Ge = $, le = Ge._payload, Z = Ge._init;
            try {
              return M(Z(le));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, V = 0, P, I, T, z, L, H, W;
    function G() {
    }
    G.__reactDisabledLog = !0;
    function U() {
      {
        if (V === 0) {
          P = console.log, I = console.info, T = console.warn, z = console.error, L = console.group, H = console.groupCollapsed, W = console.groupEnd;
          var $ = {
            configurable: !0,
            enumerable: !0,
            value: G,
            writable: !0
          };
          Object.defineProperties(console, {
            info: $,
            log: $,
            warn: $,
            error: $,
            group: $,
            groupCollapsed: $,
            groupEnd: $
          });
        }
        V++;
      }
    }
    function ne() {
      {
        if (V--, V === 0) {
          var $ = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, $, {
              value: P
            }),
            info: D({}, $, {
              value: I
            }),
            warn: D({}, $, {
              value: T
            }),
            error: D({}, $, {
              value: z
            }),
            group: D({}, $, {
              value: L
            }),
            groupCollapsed: D({}, $, {
              value: H
            }),
            groupEnd: D({}, $, {
              value: W
            })
          });
        }
        V < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = h.ReactCurrentDispatcher, J;
    function X($, K, ae) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (Ge) {
            var Ne = Ge.stack.trim().match(/\n( *(at )?)/);
            J = Ne && Ne[1] || "";
          }
        return `
` + J + $;
      }
    }
    var ee = !1, oe;
    {
      var Ce = typeof WeakMap == "function" ? WeakMap : Map;
      oe = new Ce();
    }
    function be($, K) {
      if (!$ || ee)
        return "";
      {
        var ae = oe.get($);
        if (ae !== void 0)
          return ae;
      }
      var Ne;
      ee = !0;
      var Ge = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var le;
      le = se.current, se.current = null, U();
      try {
        if (K) {
          var Z = function() {
            throw Error();
          };
          if (Object.defineProperty(Z.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Z, []);
            } catch (Ot) {
              Ne = Ot;
            }
            Reflect.construct($, [], Z);
          } else {
            try {
              Z.call();
            } catch (Ot) {
              Ne = Ot;
            }
            $.call(Z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ot) {
            Ne = Ot;
          }
          $();
        }
      } catch (Ot) {
        if (Ot && Ne && typeof Ot.stack == "string") {
          for (var Ee = Ot.stack.split(`
`), He = Ne.stack.split(`
`), We = Ee.length - 1, ft = He.length - 1; We >= 1 && ft >= 0 && Ee[We] !== He[ft]; )
            ft--;
          for (; We >= 1 && ft >= 0; We--, ft--)
            if (Ee[We] !== He[ft]) {
              if (We !== 1 || ft !== 1)
                do
                  if (We--, ft--, ft < 0 || Ee[We] !== He[ft]) {
                    var vt = `
` + Ee[We].replace(" at new ", " at ");
                    return $.displayName && vt.includes("<anonymous>") && (vt = vt.replace("<anonymous>", $.displayName)), typeof $ == "function" && oe.set($, vt), vt;
                  }
                while (We >= 1 && ft >= 0);
              break;
            }
        }
      } finally {
        ee = !1, se.current = le, ne(), Error.prepareStackTrace = Ge;
      }
      var zt = $ ? $.displayName || $.name : "", tn = zt ? X(zt) : "";
      return typeof $ == "function" && oe.set($, tn), tn;
    }
    function ue($, K, ae) {
      return be($, !1);
    }
    function q($) {
      var K = $.prototype;
      return !!(K && K.isReactComponent);
    }
    function $e($, K, ae) {
      if ($ == null)
        return "";
      if (typeof $ == "function")
        return be($, q($));
      if (typeof $ == "string")
        return X($);
      switch ($) {
        case u:
          return X("Suspense");
        case d:
          return X("SuspenseList");
      }
      if (typeof $ == "object")
        switch ($.$$typeof) {
          case c:
            return ue($.render);
          case f:
            return $e($.type, K, ae);
          case m: {
            var Ne = $, Ge = Ne._payload, le = Ne._init;
            try {
              return $e(le(Ge), K, ae);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = Object.prototype.hasOwnProperty, _e = {}, fe = h.ReactDebugCurrentFrame;
    function xe($) {
      if ($) {
        var K = $._owner, ae = $e($.type, $._source, K ? K.type : null);
        fe.setExtraStackFrame(ae);
      } else
        fe.setExtraStackFrame(null);
    }
    function me($, K, ae, Ne, Ge) {
      {
        var le = Function.call.bind(Ie);
        for (var Z in $)
          if (le($, Z)) {
            var Ee = void 0;
            try {
              if (typeof $[Z] != "function") {
                var He = Error((Ne || "React class") + ": " + ae + " type `" + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof $[Z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw He.name = "Invariant Violation", He;
              }
              Ee = $[Z](K, Z, Ne, ae, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (We) {
              Ee = We;
            }
            Ee && !(Ee instanceof Error) && (xe(Ge), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ne || "React class", ae, Z, typeof Ee), xe(null)), Ee instanceof Error && !(Ee.message in _e) && (_e[Ee.message] = !0, xe(Ge), y("Failed %s type: %s", ae, Ee.message), xe(null));
          }
      }
    }
    var pe = Array.isArray;
    function je($) {
      return pe($);
    }
    function Ke($) {
      {
        var K = typeof Symbol == "function" && Symbol.toStringTag, ae = K && $[Symbol.toStringTag] || $.constructor.name || "Object";
        return ae;
      }
    }
    function Le($) {
      try {
        return he($), !1;
      } catch {
        return !0;
      }
    }
    function he($) {
      return "" + $;
    }
    function ge($) {
      if (Le($))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke($)), he($);
    }
    var Ve = h.ReactCurrentOwner, tt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, qe, st, ke;
    ke = {};
    function Ft($) {
      if (Ie.call($, "ref")) {
        var K = Object.getOwnPropertyDescriptor($, "ref").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return $.ref !== void 0;
    }
    function pt($) {
      if (Ie.call($, "key")) {
        var K = Object.getOwnPropertyDescriptor($, "key").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return $.key !== void 0;
    }
    function dt($, K) {
      if (typeof $.ref == "string" && Ve.current && K && Ve.current.stateNode !== K) {
        var ae = M(Ve.current.type);
        ke[ae] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(Ve.current.type), $.ref), ke[ae] = !0);
      }
    }
    function nt($, K) {
      {
        var ae = function() {
          qe || (qe = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        ae.isReactWarning = !0, Object.defineProperty($, "key", {
          get: ae,
          configurable: !0
        });
      }
    }
    function yt($, K) {
      {
        var ae = function() {
          st || (st = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        ae.isReactWarning = !0, Object.defineProperty($, "ref", {
          get: ae,
          configurable: !0
        });
      }
    }
    var ut = function($, K, ae, Ne, Ge, le, Z) {
      var Ee = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: $,
        key: K,
        ref: ae,
        props: Z,
        // Record the component responsible for creating this element.
        _owner: le
      };
      return Ee._store = {}, Object.defineProperty(Ee._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ee, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ne
      }), Object.defineProperty(Ee, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ge
      }), Object.freeze && (Object.freeze(Ee.props), Object.freeze(Ee)), Ee;
    };
    function rt($, K, ae, Ne, Ge) {
      {
        var le, Z = {}, Ee = null, He = null;
        ae !== void 0 && (ge(ae), Ee = "" + ae), pt(K) && (ge(K.key), Ee = "" + K.key), Ft(K) && (He = K.ref, dt(K, Ge));
        for (le in K)
          Ie.call(K, le) && !tt.hasOwnProperty(le) && (Z[le] = K[le]);
        if ($ && $.defaultProps) {
          var We = $.defaultProps;
          for (le in We)
            Z[le] === void 0 && (Z[le] = We[le]);
        }
        if (Ee || He) {
          var ft = typeof $ == "function" ? $.displayName || $.name || "Unknown" : $;
          Ee && nt(Z, ft), He && yt(Z, ft);
        }
        return ut($, Ee, He, Ge, Ne, Ve.current, Z);
      }
    }
    var Ye = h.ReactCurrentOwner, ye = h.ReactDebugCurrentFrame;
    function Se($) {
      if ($) {
        var K = $._owner, ae = $e($.type, $._source, K ? K.type : null);
        ye.setExtraStackFrame(ae);
      } else
        ye.setExtraStackFrame(null);
    }
    var Te;
    Te = !1;
    function ie($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === t;
    }
    function we() {
      {
        if (Ye.current) {
          var $ = M(Ye.current.type);
          if ($)
            return `

Check the render method of \`` + $ + "`.";
        }
        return "";
      }
    }
    function Xe($) {
      {
        if ($ !== void 0) {
          var K = $.fileName.replace(/^.*[\\\/]/, ""), ae = $.lineNumber;
          return `

Check your code at ` + K + ":" + ae + ".";
        }
        return "";
      }
    }
    var Qe = {};
    function Ae($) {
      {
        var K = we();
        if (!K) {
          var ae = typeof $ == "string" ? $ : $.displayName || $.name;
          ae && (K = `

Check the top-level render call using <` + ae + ">.");
        }
        return K;
      }
    }
    function re($, K) {
      {
        if (!$._store || $._store.validated || $.key != null)
          return;
        $._store.validated = !0;
        var ae = Ae(K);
        if (Qe[ae])
          return;
        Qe[ae] = !0;
        var Ne = "";
        $ && $._owner && $._owner !== Ye.current && (Ne = " It was passed a child from " + M($._owner.type) + "."), Se($), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ae, Ne), Se(null);
      }
    }
    function te($, K) {
      {
        if (typeof $ != "object")
          return;
        if (je($))
          for (var ae = 0; ae < $.length; ae++) {
            var Ne = $[ae];
            ie(Ne) && re(Ne, K);
          }
        else if (ie($))
          $._store && ($._store.validated = !0);
        else if ($) {
          var Ge = v($);
          if (typeof Ge == "function" && Ge !== $.entries)
            for (var le = Ge.call($), Z; !(Z = le.next()).done; )
              ie(Z.value) && re(Z.value, K);
        }
      }
    }
    function de($) {
      {
        var K = $.type;
        if (K == null || typeof K == "string")
          return;
        var ae;
        if (typeof K == "function")
          ae = K.propTypes;
        else if (typeof K == "object" && (K.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        K.$$typeof === f))
          ae = K.propTypes;
        else
          return;
        if (ae) {
          var Ne = M(K);
          me(ae, $.props, "prop", Ne, $);
        } else if (K.PropTypes !== void 0 && !Te) {
          Te = !0;
          var Ge = M(K);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ge || "Unknown");
        }
        typeof K.getDefaultProps == "function" && !K.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Me($) {
      {
        for (var K = Object.keys($.props), ae = 0; ae < K.length; ae++) {
          var Ne = K[ae];
          if (Ne !== "children" && Ne !== "key") {
            Se($), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ne), Se(null);
            break;
          }
        }
        $.ref !== null && (Se($), y("Invalid attribute `ref` supplied to `React.Fragment`."), Se(null));
      }
    }
    function ze($, K, ae, Ne, Ge, le) {
      {
        var Z = N($);
        if (!Z) {
          var Ee = "";
          ($ === void 0 || typeof $ == "object" && $ !== null && Object.keys($).length === 0) && (Ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var He = Xe(Ge);
          He ? Ee += He : Ee += we();
          var We;
          $ === null ? We = "null" : je($) ? We = "array" : $ !== void 0 && $.$$typeof === t ? (We = "<" + (M($.type) || "Unknown") + " />", Ee = " Did you accidentally export a JSX literal instead of a component?") : We = typeof $, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", We, Ee);
        }
        var ft = rt($, K, ae, Ge, le);
        if (ft == null)
          return ft;
        if (Z) {
          var vt = K.children;
          if (vt !== void 0)
            if (Ne)
              if (je(vt)) {
                for (var zt = 0; zt < vt.length; zt++)
                  te(vt[zt], $);
                Object.freeze && Object.freeze(vt);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              te(vt, $);
        }
        return $ === r ? Me(ft) : de(ft), ft;
      }
    }
    function at($, K, ae) {
      return ze($, K, ae, !0);
    }
    function lt($, K, ae) {
      return ze($, K, ae, !1);
    }
    var It = lt, ht = at;
    ra.Fragment = r, ra.jsx = It, ra.jsxs = ht;
  }()), ra;
}
process.env.NODE_ENV === "production" ? wi.exports = dv() : wi.exports = fv();
var ve = wi.exports;
var to = { exports: {} };
to.exports;
(function(e, t) {
  var n = 200, r = "__lodash_hash_undefined__", a = 9007199254740991, o = "[object Arguments]", i = "[object Array]", l = "[object Boolean]", c = "[object Date]", u = "[object Error]", d = "[object Function]", f = "[object GeneratorFunction]", m = "[object Map]", g = "[object Number]", b = "[object Object]", p = "[object Promise]", v = "[object RegExp]", h = "[object Set]", y = "[object String]", E = "[object Symbol]", C = "[object WeakMap]", O = "[object ArrayBuffer]", x = "[object DataView]", S = "[object Float32Array]", R = "[object Float64Array]", _ = "[object Int8Array]", N = "[object Int16Array]", F = "[object Int32Array]", A = "[object Uint8Array]", M = "[object Uint8ClampedArray]", D = "[object Uint16Array]", V = "[object Uint32Array]", P = /[\\^$.*+?()[\]{}|]/g, I = /\w*$/, T = /^\[object .+?Constructor\]$/, z = /^(?:0|[1-9]\d*)$/, L = {};
  L[o] = L[i] = L[O] = L[x] = L[l] = L[c] = L[S] = L[R] = L[_] = L[N] = L[F] = L[m] = L[g] = L[b] = L[v] = L[h] = L[y] = L[E] = L[A] = L[M] = L[D] = L[V] = !0, L[u] = L[d] = L[C] = !1;
  var H = typeof Aa == "object" && Aa && Aa.Object === Object && Aa, W = typeof self == "object" && self && self.Object === Object && self, G = H || W || Function("return this")(), U = t && !t.nodeType && t, ne = U && !0 && e && !e.nodeType && e, se = ne && ne.exports === U;
  function J(w, B) {
    return w.set(B[0], B[1]), w;
  }
  function X(w, B) {
    return w.add(B), w;
  }
  function ee(w, B) {
    for (var Q = -1, Fe = w ? w.length : 0; ++Q < Fe && B(w[Q], Q, w) !== !1; )
      ;
    return w;
  }
  function oe(w, B) {
    for (var Q = -1, Fe = B.length, Vt = w.length; ++Q < Fe; )
      w[Vt + Q] = B[Q];
    return w;
  }
  function Ce(w, B, Q, Fe) {
    var Vt = -1, Xt = w ? w.length : 0;
    for (Fe && Xt && (Q = w[++Vt]); ++Vt < Xt; )
      Q = B(Q, w[Vt], Vt, w);
    return Q;
  }
  function be(w, B) {
    for (var Q = -1, Fe = Array(w); ++Q < w; )
      Fe[Q] = B(Q);
    return Fe;
  }
  function ue(w, B) {
    return w == null ? void 0 : w[B];
  }
  function q(w) {
    var B = !1;
    if (w != null && typeof w.toString != "function")
      try {
        B = !!(w + "");
      } catch {
      }
    return B;
  }
  function $e(w) {
    var B = -1, Q = Array(w.size);
    return w.forEach(function(Fe, Vt) {
      Q[++B] = [Vt, Fe];
    }), Q;
  }
  function Ie(w, B) {
    return function(Q) {
      return w(B(Q));
    };
  }
  function _e(w) {
    var B = -1, Q = Array(w.size);
    return w.forEach(function(Fe) {
      Q[++B] = Fe;
    }), Q;
  }
  var fe = Array.prototype, xe = Function.prototype, me = Object.prototype, pe = G["__core-js_shared__"], je = function() {
    var w = /[^.]+$/.exec(pe && pe.keys && pe.keys.IE_PROTO || "");
    return w ? "Symbol(src)_1." + w : "";
  }(), Ke = xe.toString, Le = me.hasOwnProperty, he = me.toString, ge = RegExp(
    "^" + Ke.call(Le).replace(P, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Ve = se ? G.Buffer : void 0, tt = G.Symbol, qe = G.Uint8Array, st = Ie(Object.getPrototypeOf, Object), ke = Object.create, Ft = me.propertyIsEnumerable, pt = fe.splice, dt = Object.getOwnPropertySymbols, nt = Ve ? Ve.isBuffer : void 0, yt = Ie(Object.keys, Object), ut = jt(G, "DataView"), rt = jt(G, "Map"), Ye = jt(G, "Promise"), ye = jt(G, "Set"), Se = jt(G, "WeakMap"), Te = jt(Object, "create"), ie = $n(ut), we = $n(rt), Xe = $n(Ye), Qe = $n(ye), Ae = $n(Se), re = tt ? tt.prototype : void 0, te = re ? re.valueOf : void 0;
  function de(w) {
    var B = -1, Q = w ? w.length : 0;
    for (this.clear(); ++B < Q; ) {
      var Fe = w[B];
      this.set(Fe[0], Fe[1]);
    }
  }
  function Me() {
    this.__data__ = Te ? Te(null) : {};
  }
  function ze(w) {
    return this.has(w) && delete this.__data__[w];
  }
  function at(w) {
    var B = this.__data__;
    if (Te) {
      var Q = B[w];
      return Q === r ? void 0 : Q;
    }
    return Le.call(B, w) ? B[w] : void 0;
  }
  function lt(w) {
    var B = this.__data__;
    return Te ? B[w] !== void 0 : Le.call(B, w);
  }
  function It(w, B) {
    var Q = this.__data__;
    return Q[w] = Te && B === void 0 ? r : B, this;
  }
  de.prototype.clear = Me, de.prototype.delete = ze, de.prototype.get = at, de.prototype.has = lt, de.prototype.set = It;
  function ht(w) {
    var B = -1, Q = w ? w.length : 0;
    for (this.clear(); ++B < Q; ) {
      var Fe = w[B];
      this.set(Fe[0], Fe[1]);
    }
  }
  function $() {
    this.__data__ = [];
  }
  function K(w) {
    var B = this.__data__, Q = mn(B, w);
    if (Q < 0)
      return !1;
    var Fe = B.length - 1;
    return Q == Fe ? B.pop() : pt.call(B, Q, 1), !0;
  }
  function ae(w) {
    var B = this.__data__, Q = mn(B, w);
    return Q < 0 ? void 0 : B[Q][1];
  }
  function Ne(w) {
    return mn(this.__data__, w) > -1;
  }
  function Ge(w, B) {
    var Q = this.__data__, Fe = mn(Q, w);
    return Fe < 0 ? Q.push([w, B]) : Q[Fe][1] = B, this;
  }
  ht.prototype.clear = $, ht.prototype.delete = K, ht.prototype.get = ae, ht.prototype.has = Ne, ht.prototype.set = Ge;
  function le(w) {
    var B = -1, Q = w ? w.length : 0;
    for (this.clear(); ++B < Q; ) {
      var Fe = w[B];
      this.set(Fe[0], Fe[1]);
    }
  }
  function Z() {
    this.__data__ = {
      hash: new de(),
      map: new (rt || ht)(),
      string: new de()
    };
  }
  function Ee(w) {
    return Jn(this, w).delete(w);
  }
  function He(w) {
    return Jn(this, w).get(w);
  }
  function We(w) {
    return Jn(this, w).has(w);
  }
  function ft(w, B) {
    return Jn(this, w).set(w, B), this;
  }
  le.prototype.clear = Z, le.prototype.delete = Ee, le.prototype.get = He, le.prototype.has = We, le.prototype.set = ft;
  function vt(w) {
    this.__data__ = new ht(w);
  }
  function zt() {
    this.__data__ = new ht();
  }
  function tn(w) {
    return this.__data__.delete(w);
  }
  function Ot(w) {
    return this.__data__.get(w);
  }
  function nn(w) {
    return this.__data__.has(w);
  }
  function ar(w, B) {
    var Q = this.__data__;
    if (Q instanceof ht) {
      var Fe = Q.__data__;
      if (!rt || Fe.length < n - 1)
        return Fe.push([w, B]), this;
      Q = this.__data__ = new le(Fe);
    }
    return Q.set(w, B), this;
  }
  vt.prototype.clear = zt, vt.prototype.delete = tn, vt.prototype.get = Ot, vt.prototype.has = nn, vt.prototype.set = ar;
  function vn(w, B) {
    var Q = Et(w) || et(w) ? be(w.length, String) : [], Fe = Q.length, Vt = !!Fe;
    for (var Xt in w)
      (B || Le.call(w, Xt)) && !(Vt && (Xt == "length" || Zn(Xt, Fe))) && Q.push(Xt);
    return Q;
  }
  function rn(w, B, Q) {
    var Fe = w[B];
    (!(Le.call(w, B) && Pe(Fe, Q)) || Q === void 0 && !(B in w)) && (w[B] = Q);
  }
  function mn(w, B) {
    for (var Q = w.length; Q--; )
      if (Pe(w[Q][0], B))
        return Q;
    return -1;
  }
  function gn(w, B) {
    return w && an(B, Uo(B), w);
  }
  function Jt(w, B, Q, Fe, Vt, Xt, Sn) {
    var en;
    if (Fe && (en = Xt ? Fe(w, Vt, Xt, Sn) : Fe(w)), en !== void 0)
      return en;
    if (!zn(w))
      return w;
    var ll = Et(w);
    if (ll) {
      if (en = Vn(w), !B)
        return Zt(w, en);
    } else {
      var Ir = yn(w), cl = Ir == d || Ir == f;
      if (Rr(w))
        return Ze(w, B);
      if (Ir == b || Ir == o || cl && !Xt) {
        if (q(w))
          return Xt ? w : {};
        if (en = Fn(cl ? {} : w), !B)
          return Yt(w, gn(en, w));
      } else {
        if (!L[Ir])
          return Xt ? w : {};
        en = or(w, Ir, Jt, B);
      }
    }
    Sn || (Sn = new vt());
    var ul = Sn.get(w);
    if (ul)
      return ul;
    if (Sn.set(w, en), !ll)
      var dl = Q ? Qn(w) : Uo(w);
    return ee(dl || w, function(Go, Ma) {
      dl && (Ma = Go, Go = w[Ma]), rn(en, Ma, Jt(Go, B, Q, Fe, Ma, w, Sn));
    }), en;
  }
  function pn(w) {
    return zn(w) ? ke(w) : {};
  }
  function On(w, B, Q) {
    var Fe = B(w);
    return Et(w) ? Fe : oe(Fe, Q(w));
  }
  function An(w) {
    return he.call(w);
  }
  function Rn(w) {
    if (!zn(w) || ea(w))
      return !1;
    var B = $r(w) || q(w) ? ge : T;
    return B.test($n(w));
  }
  function Kt(w) {
    if (!Or(w))
      return yt(w);
    var B = [];
    for (var Q in Object(w))
      Le.call(w, Q) && Q != "constructor" && B.push(Q);
    return B;
  }
  function Ze(w, B) {
    if (B)
      return w.slice();
    var Q = new w.constructor(w.length);
    return w.copy(Q), Q;
  }
  function Be(w) {
    var B = new w.constructor(w.byteLength);
    return new qe(B).set(new qe(w)), B;
  }
  function Nt(w, B) {
    var Q = B ? Be(w.buffer) : w.buffer;
    return new w.constructor(Q, w.byteOffset, w.byteLength);
  }
  function Tt(w, B, Q) {
    var Fe = B ? Q($e(w), !0) : $e(w);
    return Ce(Fe, J, new w.constructor());
  }
  function St(w) {
    var B = new w.constructor(w.source, I.exec(w));
    return B.lastIndex = w.lastIndex, B;
  }
  function Dt(w, B, Q) {
    var Fe = B ? Q(_e(w), !0) : _e(w);
    return Ce(Fe, X, new w.constructor());
  }
  function Ht(w) {
    return te ? Object(te.call(w)) : {};
  }
  function hn(w, B) {
    var Q = B ? Be(w.buffer) : w.buffer;
    return new w.constructor(Q, w.byteOffset, w.length);
  }
  function Zt(w, B) {
    var Q = -1, Fe = w.length;
    for (B || (B = Array(Fe)); ++Q < Fe; )
      B[Q] = w[Q];
    return B;
  }
  function an(w, B, Q, Fe) {
    Q || (Q = {});
    for (var Vt = -1, Xt = B.length; ++Vt < Xt; ) {
      var Sn = B[Vt], en = Fe ? Fe(Q[Sn], w[Sn], Sn, Q, w) : void 0;
      rn(Q, Sn, en === void 0 ? w[Sn] : en);
    }
    return Q;
  }
  function Yt(w, B) {
    return an(w, bn(w), B);
  }
  function Qn(w) {
    return On(w, Uo, bn);
  }
  function Jn(w, B) {
    var Q = w.__data__;
    return xr(B) ? Q[typeof B == "string" ? "string" : "hash"] : Q.map;
  }
  function jt(w, B) {
    var Q = ue(w, B);
    return Rn(Q) ? Q : void 0;
  }
  var bn = dt ? Ie(dt, Object) : ov, yn = An;
  (ut && yn(new ut(new ArrayBuffer(1))) != x || rt && yn(new rt()) != m || Ye && yn(Ye.resolve()) != p || ye && yn(new ye()) != h || Se && yn(new Se()) != C) && (yn = function(w) {
    var B = he.call(w), Q = B == b ? w.constructor : void 0, Fe = Q ? $n(Q) : void 0;
    if (Fe)
      switch (Fe) {
        case ie:
          return x;
        case we:
          return m;
        case Xe:
          return p;
        case Qe:
          return h;
        case Ae:
          return C;
      }
    return B;
  });
  function Vn(w) {
    var B = w.length, Q = w.constructor(B);
    return B && typeof w[0] == "string" && Le.call(w, "index") && (Q.index = w.index, Q.input = w.input), Q;
  }
  function Fn(w) {
    return typeof w.constructor == "function" && !Or(w) ? pn(st(w)) : {};
  }
  function or(w, B, Q, Fe) {
    var Vt = w.constructor;
    switch (B) {
      case O:
        return Be(w);
      case l:
      case c:
        return new Vt(+w);
      case x:
        return Nt(w, Fe);
      case S:
      case R:
      case _:
      case N:
      case F:
      case A:
      case M:
      case D:
      case V:
        return hn(w, Fe);
      case m:
        return Tt(w, Fe, Q);
      case g:
      case y:
        return new Vt(w);
      case v:
        return St(w);
      case h:
        return Dt(w, Fe, Q);
      case E:
        return Ht(w);
    }
  }
  function Zn(w, B) {
    return B = B ?? a, !!B && (typeof w == "number" || z.test(w)) && w > -1 && w % 1 == 0 && w < B;
  }
  function xr(w) {
    var B = typeof w;
    return B == "string" || B == "number" || B == "symbol" || B == "boolean" ? w !== "__proto__" : w === null;
  }
  function ea(w) {
    return !!je && je in w;
  }
  function Or(w) {
    var B = w && w.constructor, Q = typeof B == "function" && B.prototype || me;
    return w === Q;
  }
  function $n(w) {
    if (w != null) {
      try {
        return Ke.call(w);
      } catch {
      }
      try {
        return w + "";
      } catch {
      }
    }
    return "";
  }
  function ta(w) {
    return Jt(w, !0, !0);
  }
  function Pe(w, B) {
    return w === B || w !== w && B !== B;
  }
  function et(w) {
    return Rt(w) && Le.call(w, "callee") && (!Ft.call(w, "callee") || he.call(w) == o);
  }
  var Et = Array.isArray;
  function _t(w) {
    return w != null && Ta(w.length) && !$r(w);
  }
  function Rt(w) {
    return av(w) && _t(w);
  }
  var Rr = nt || iv;
  function $r(w) {
    var B = zn(w) ? he.call(w) : "";
    return B == d || B == f;
  }
  function Ta(w) {
    return typeof w == "number" && w > -1 && w % 1 == 0 && w <= a;
  }
  function zn(w) {
    var B = typeof w;
    return !!w && (B == "object" || B == "function");
  }
  function av(w) {
    return !!w && typeof w == "object";
  }
  function Uo(w) {
    return _t(w) ? vn(w) : Kt(w);
  }
  function ov() {
    return [];
  }
  function iv() {
    return !1;
  }
  e.exports = ta;
})(to, to.exports);
var vv = to.exports;
const Rs = /* @__PURE__ */ ru(vv);
var au = { exports: {} };
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
})(au);
var mv = au.exports;
const Oe = /* @__PURE__ */ ru(mv);
var xi = { exports: {} }, mt = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gl;
function gv() {
  if (gl)
    return mt;
  gl = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function p(v) {
    if (typeof v == "object" && v !== null) {
      var h = v.$$typeof;
      switch (h) {
        case e:
          switch (v = v.type, v) {
            case n:
            case a:
            case r:
            case u:
            case d:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case l:
                case i:
                case c:
                case m:
                case f:
                case o:
                  return v;
                default:
                  return h;
              }
          }
        case t:
          return h;
      }
    }
  }
  return mt.ContextConsumer = i, mt.ContextProvider = o, mt.Element = e, mt.ForwardRef = c, mt.Fragment = n, mt.Lazy = m, mt.Memo = f, mt.Portal = t, mt.Profiler = a, mt.StrictMode = r, mt.Suspense = u, mt.SuspenseList = d, mt.isAsyncMode = function() {
    return !1;
  }, mt.isConcurrentMode = function() {
    return !1;
  }, mt.isContextConsumer = function(v) {
    return p(v) === i;
  }, mt.isContextProvider = function(v) {
    return p(v) === o;
  }, mt.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, mt.isForwardRef = function(v) {
    return p(v) === c;
  }, mt.isFragment = function(v) {
    return p(v) === n;
  }, mt.isLazy = function(v) {
    return p(v) === m;
  }, mt.isMemo = function(v) {
    return p(v) === f;
  }, mt.isPortal = function(v) {
    return p(v) === t;
  }, mt.isProfiler = function(v) {
    return p(v) === a;
  }, mt.isStrictMode = function(v) {
    return p(v) === r;
  }, mt.isSuspense = function(v) {
    return p(v) === u;
  }, mt.isSuspenseList = function(v) {
    return p(v) === d;
  }, mt.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === a || v === r || v === u || v === d || v === g || typeof v == "object" && v !== null && (v.$$typeof === m || v.$$typeof === f || v.$$typeof === o || v.$$typeof === i || v.$$typeof === c || v.$$typeof === b || v.getModuleId !== void 0);
  }, mt.typeOf = p, mt;
}
var gt = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pl;
function pv() {
  return pl || (pl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), b = !1, p = !1, v = !1, h = !1, y = !1, E;
    E = Symbol.for("react.module.reference");
    function C(q) {
      return !!(typeof q == "string" || typeof q == "function" || q === n || q === a || y || q === r || q === u || q === d || h || q === g || b || p || v || typeof q == "object" && q !== null && (q.$$typeof === m || q.$$typeof === f || q.$$typeof === o || q.$$typeof === i || q.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      q.$$typeof === E || q.getModuleId !== void 0));
    }
    function O(q) {
      if (typeof q == "object" && q !== null) {
        var $e = q.$$typeof;
        switch ($e) {
          case e:
            var Ie = q.type;
            switch (Ie) {
              case n:
              case a:
              case r:
              case u:
              case d:
                return Ie;
              default:
                var _e = Ie && Ie.$$typeof;
                switch (_e) {
                  case l:
                  case i:
                  case c:
                  case m:
                  case f:
                  case o:
                    return _e;
                  default:
                    return $e;
                }
            }
          case t:
            return $e;
        }
      }
    }
    var x = i, S = o, R = e, _ = c, N = n, F = m, A = f, M = t, D = a, V = r, P = u, I = d, T = !1, z = !1;
    function L(q) {
      return T || (T = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(q) {
      return z || (z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W(q) {
      return O(q) === i;
    }
    function G(q) {
      return O(q) === o;
    }
    function U(q) {
      return typeof q == "object" && q !== null && q.$$typeof === e;
    }
    function ne(q) {
      return O(q) === c;
    }
    function se(q) {
      return O(q) === n;
    }
    function J(q) {
      return O(q) === m;
    }
    function X(q) {
      return O(q) === f;
    }
    function ee(q) {
      return O(q) === t;
    }
    function oe(q) {
      return O(q) === a;
    }
    function Ce(q) {
      return O(q) === r;
    }
    function be(q) {
      return O(q) === u;
    }
    function ue(q) {
      return O(q) === d;
    }
    gt.ContextConsumer = x, gt.ContextProvider = S, gt.Element = R, gt.ForwardRef = _, gt.Fragment = N, gt.Lazy = F, gt.Memo = A, gt.Portal = M, gt.Profiler = D, gt.StrictMode = V, gt.Suspense = P, gt.SuspenseList = I, gt.isAsyncMode = L, gt.isConcurrentMode = H, gt.isContextConsumer = W, gt.isContextProvider = G, gt.isElement = U, gt.isForwardRef = ne, gt.isFragment = se, gt.isLazy = J, gt.isMemo = X, gt.isPortal = ee, gt.isProfiler = oe, gt.isStrictMode = Ce, gt.isSuspense = be, gt.isSuspenseList = ue, gt.isValidElementType = C, gt.typeOf = O;
  }()), gt;
}
process.env.NODE_ENV === "production" ? xi.exports = gv() : xi.exports = pv();
var ou = xi.exports;
function Dn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [];
  return Re.Children.forEach(e, function(r) {
    r == null && !t.keepEmpty || (Array.isArray(r) ? n = n.concat(Dn(r)) : ou.isFragment(r) && r.props ? n = n.concat(Dn(r.props.children, t)) : n.push(r));
  }), n;
}
var Oi = {}, $s = [], hv = function(t) {
  $s.push(t);
};
function pr(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = $s.reduce(function(r, a) {
      return a(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function bv(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = $s.reduce(function(r, a) {
      return a(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function iu() {
  Oi = {};
}
function su(e, t, n) {
  !t && !Oi[n] && (e(!1, n), Oi[n] = !0);
}
function ot(e, t) {
  su(pr, e, t);
}
function Ri(e, t) {
  su(bv, e, t);
}
ot.preMessage = hv;
ot.resetWarned = iu;
ot.noteOnce = Ri;
function Je(e) {
  "@babel/helpers - typeof";
  return Je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Je(e);
}
function yv(e, t) {
  if (Je(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Je(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function lu(e) {
  var t = yv(e, "string");
  return Je(t) === "symbol" ? t : String(t);
}
function j(e, t, n) {
  return t = lu(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function hl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hl(Object(n), !0).forEach(function(r) {
      j(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hl(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function no(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function ca(e) {
  return no(e) ? e : e instanceof Re.Component ? sv.findDOMNode(e) : null;
}
function Eo(e, t, n) {
  var r = s.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
function Is(e, t) {
  typeof e == "function" ? e(t) : Je(e) === "object" && e && "current" in e && (e.current = t);
}
function jn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t.filter(function(a) {
    return a;
  });
  return r.length <= 1 ? r[0] : function(a) {
    t.forEach(function(o) {
      Is(o, a);
    });
  };
}
function Co() {
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
function wa(e) {
  var t, n, r = ou.isMemo(e) ? e.type.type : e.type;
  return !(typeof r == "function" && !((t = r.prototype) !== null && t !== void 0 && t.render) || typeof e == "function" && !((n = e.prototype) !== null && n !== void 0 && n.render));
}
var $i = /* @__PURE__ */ s.createContext(null);
function Sv(e) {
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
var cu = function() {
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
}(), Ii = typeof window < "u" && typeof document < "u" && window.document === document, ro = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Ev = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(ro) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Cv = 2;
function wv(e, t) {
  var n = !1, r = !1, a = 0;
  function o() {
    n && (n = !1, e()), r && l();
  }
  function i() {
    Ev(o);
  }
  function l() {
    var c = Date.now();
    if (n) {
      if (c - a < Cv)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(i, t);
    a = c;
  }
  return l;
}
var xv = 20, Ov = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Rv = typeof MutationObserver < "u", $v = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = wv(this.refresh.bind(this), xv);
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
      !Ii || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Rv ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Ii || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, r = n === void 0 ? "" : n, a = Ov.some(function(o) {
        return !!~r.indexOf(o);
      });
      a && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), uu = function(e, t) {
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
}, kr = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || ro;
}, du = wo(0, 0, 0, 0);
function ao(e) {
  return parseFloat(e) || 0;
}
function bl(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, a) {
    var o = e["border-" + a + "-width"];
    return r + ao(o);
  }, 0);
}
function Iv(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, a = t; r < a.length; r++) {
    var o = a[r], i = e["padding-" + o];
    n[o] = ao(i);
  }
  return n;
}
function Nv(e) {
  var t = e.getBBox();
  return wo(0, 0, t.width, t.height);
}
function _v(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return du;
  var r = kr(e).getComputedStyle(e), a = Iv(r), o = a.left + a.right, i = a.top + a.bottom, l = ao(r.width), c = ao(r.height);
  if (r.boxSizing === "border-box" && (Math.round(l + o) !== t && (l -= bl(r, "left", "right") + o), Math.round(c + i) !== n && (c -= bl(r, "top", "bottom") + i)), !Tv(e)) {
    var u = Math.round(l + o) - t, d = Math.round(c + i) - n;
    Math.abs(u) !== 1 && (l -= u), Math.abs(d) !== 1 && (c -= d);
  }
  return wo(a.left, a.top, l, c);
}
var Pv = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof kr(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof kr(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Tv(e) {
  return e === kr(e).document.documentElement;
}
function Mv(e) {
  return Ii ? Pv(e) ? Nv(e) : _v(e) : du;
}
function Av(e) {
  var t = e.x, n = e.y, r = e.width, a = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, i = Object.create(o.prototype);
  return uu(i, {
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
function wo(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var Fv = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = wo(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Mv(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Dv = (
  /** @class */
  function() {
    function e(t, n) {
      var r = Av(n);
      uu(this, { target: t, contentRect: r });
    }
    return e;
  }()
), jv = (
  /** @class */
  function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new cu(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof kr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new Fv(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof kr(t).Element))
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
          return new Dv(r.target, r.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), fu = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new cu(), vu = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = $v.getInstance(), r = new jv(t, n, this);
      fu.set(this, r);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  vu.prototype[e] = function() {
    var t;
    return (t = fu.get(this))[e].apply(t, arguments);
  };
});
var Lv = function() {
  return typeof ro.ResizeObserver < "u" ? ro.ResizeObserver : vu;
}(), Un = /* @__PURE__ */ new Map();
function mu(e) {
  e.forEach(function(t) {
    var n, r = t.target;
    (n = Un.get(r)) === null || n === void 0 || n.forEach(function(a) {
      return a(r);
    });
  });
}
var gu = new Lv(mu);
process.env.NODE_ENV;
process.env.NODE_ENV;
function Vv(e, t) {
  Un.has(e) || (Un.set(e, /* @__PURE__ */ new Set()), gu.observe(e)), Un.get(e).add(t);
}
function zv(e, t) {
  Un.has(e) && (Un.get(e).delete(t), Un.get(e).size || (gu.unobserve(e), Un.delete(e)));
}
function dn(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, lu(r.key), r);
  }
}
function fn(e, t, n) {
  return t && yl(e.prototype, t), n && yl(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function xo(e, t) {
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
  }), t && cv(e, t);
}
function Hv(e, t) {
  if (t && (Je(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ct(e);
}
function Oo(e) {
  var t = uv();
  return function() {
    var r = fl(e), a;
    if (t) {
      var o = fl(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Hv(this, a);
  };
}
var Bv = /* @__PURE__ */ function(e) {
  xo(n, e);
  var t = Oo(n);
  function n() {
    return dn(this, n), t.apply(this, arguments);
  }
  return fn(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(s.Component);
function kv(e, t) {
  var n = e.children, r = e.disabled, a = s.useRef(null), o = s.useRef(null), i = s.useContext($i), l = typeof n == "function", c = l ? n(a) : n, u = s.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), d = !l && /* @__PURE__ */ s.isValidElement(c) && wa(c), f = d ? c.ref : null, m = Co(f, a), g = function() {
    var h;
    return ca(a.current) || // Support `nativeElement` format
    (a.current && Je(a.current) === "object" ? ca((h = a.current) === null || h === void 0 ? void 0 : h.nativeElement) : null) || ca(o.current);
  };
  s.useImperativeHandle(t, function() {
    return g();
  });
  var b = s.useRef(e);
  b.current = e;
  var p = s.useCallback(function(v) {
    var h = b.current, y = h.onResize, E = h.data, C = v.getBoundingClientRect(), O = C.width, x = C.height, S = v.offsetWidth, R = v.offsetHeight, _ = Math.floor(O), N = Math.floor(x);
    if (u.current.width !== _ || u.current.height !== N || u.current.offsetWidth !== S || u.current.offsetHeight !== R) {
      var F = {
        width: _,
        height: N,
        offsetWidth: S,
        offsetHeight: R
      };
      u.current = F;
      var A = S === Math.round(O) ? O : S, M = R === Math.round(x) ? x : R, D = k(k({}, F), {}, {
        offsetWidth: A,
        offsetHeight: M
      });
      i == null || i(D, v, E), y && Promise.resolve().then(function() {
        y(D, v);
      });
    }
  }, []);
  return s.useEffect(function() {
    var v = g();
    return v && !r && Vv(v, p), function() {
      return zv(v, p);
    };
  }, [a.current, r]), /* @__PURE__ */ s.createElement(Bv, {
    ref: o
  }, d ? /* @__PURE__ */ s.cloneElement(c, {
    ref: m
  }) : c);
}
var pu = /* @__PURE__ */ s.forwardRef(kv);
process.env.NODE_ENV !== "production" && (pu.displayName = "SingleObserver");
var Wv = "rc-observer-key";
function Uv(e, t) {
  var n = e.children, r = typeof n == "function" ? [n] : Dn(n);
  return process.env.NODE_ENV !== "production" && (r.length > 1 ? pr(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : r.length === 0 && pr(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), r.map(function(a, o) {
    var i = (a == null ? void 0 : a.key) || "".concat(Wv, "-").concat(o);
    return /* @__PURE__ */ s.createElement(pu, Ue({}, e, {
      key: i,
      ref: o === 0 ? t : void 0
    }), a);
  });
}
var Yn = /* @__PURE__ */ s.forwardRef(Uv);
process.env.NODE_ENV !== "production" && (Yn.displayName = "ResizeObserver");
Yn.Collection = Sv;
function Xr(e, t) {
  var n = k({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
function Ni(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Gv(e) {
  if (Array.isArray(e))
    return Ni(e);
}
function hu(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Ns(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ni(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ni(e, t);
  }
}
function qv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function De(e) {
  return Gv(e) || hu(e) || Ns(e) || qv();
}
var bu = function(t) {
  return +setTimeout(t, 16);
}, yu = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (bu = function(t) {
  return window.requestAnimationFrame(t);
}, yu = function(t) {
  return window.cancelAnimationFrame(t);
});
var Sl = 0, _s = /* @__PURE__ */ new Map();
function Su(e) {
  _s.delete(e);
}
var Ct = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Sl += 1;
  var r = Sl;
  function a(o) {
    if (o === 0)
      Su(r), t();
    else {
      var i = bu(function() {
        a(o - 1);
      });
      _s.set(r, i);
    }
  }
  return a(n), r;
};
Ct.cancel = function(e) {
  var t = _s.get(e);
  return Su(t), yu(t);
};
function Ps(e) {
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
function Kv(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function wt(e, t) {
  if (e == null)
    return {};
  var n = Kv(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Eu(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function a(o, i) {
    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(o);
    if (ot(!c, "Warning: There may be circular references"), c)
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
    if (o && i && Je(o) === "object" && Je(i) === "object") {
      var f = Object.keys(o);
      return f.length !== Object.keys(i).length ? !1 : f.every(function(m) {
        return a(o[m], i[m], u);
      });
    }
    return !1;
  }
  return a(e, t);
}
var El = "%", Yv = /* @__PURE__ */ function() {
  function e(t) {
    dn(this, e), j(this, "instanceId", void 0), j(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return fn(e, [{
    key: "get",
    value: function(n) {
      return this.cache.get(n.join(El)) || null;
    }
  }, {
    key: "update",
    value: function(n, r) {
      var a = n.join(El), o = this.cache.get(a), i = r(o);
      i === null ? this.cache.delete(a) : this.cache.set(a, i);
    }
  }]), e;
}(), _i = "data-token-hash", fr = "data-css-hash", Xv = "data-cache-path", jr = "__cssinjs_instance__";
function Qv() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(fr, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(a) {
      a[jr] = a[jr] || e, a[jr] === e && document.head.insertBefore(a, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(fr, "]"))).forEach(function(a) {
      var o = a.getAttribute(fr);
      if (r[o]) {
        if (a[jr] === e) {
          var i;
          (i = a.parentNode) === null || i === void 0 || i.removeChild(a);
        }
      } else
        r[o] = !0;
    });
  }
  return new Yv(e);
}
var Jv = /* @__PURE__ */ s.createContext({
  hashPriority: "low",
  cache: Qv(),
  defaultCache: !0
});
const Ts = Jv;
function Gt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Zv(e, t) {
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
var Cl = "data-rc-order", wl = "data-rc-priority", em = "rc-util-key", Pi = /* @__PURE__ */ new Map();
function Cu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : em;
}
function Ro(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function tm(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function wu(e) {
  return Array.from((Pi.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function xu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Gt())
    return null;
  var n = t.csp, r = t.prepend, a = t.priority, o = a === void 0 ? 0 : a, i = tm(r), l = i === "prependQueue", c = document.createElement("style");
  c.setAttribute(Cl, i), l && o && c.setAttribute(wl, "".concat(o)), n != null && n.nonce && (c.nonce = n == null ? void 0 : n.nonce), c.innerHTML = e;
  var u = Ro(t), d = u.firstChild;
  if (r) {
    if (l) {
      var f = wu(u).filter(function(m) {
        if (!["prepend", "prependQueue"].includes(m.getAttribute(Cl)))
          return !1;
        var g = Number(m.getAttribute(wl) || 0);
        return o >= g;
      });
      if (f.length)
        return u.insertBefore(c, f[f.length - 1].nextSibling), c;
    }
    u.insertBefore(c, d);
  } else
    u.appendChild(c);
  return c;
}
function Ou(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Ro(t);
  return wu(n).find(function(r) {
    return r.getAttribute(Cu(t)) === e;
  });
}
function oo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Ou(e, t);
  if (n) {
    var r = Ro(t);
    r.removeChild(n);
  }
}
function nm(e, t) {
  var n = Pi.get(e);
  if (!n || !Zv(document, n)) {
    var r = xu("", t), a = r.parentNode;
    Pi.set(e, a), e.removeChild(r);
  }
}
function Wr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Ro(n);
  nm(r, n);
  var a = Ou(t, n);
  if (a) {
    var o, i;
    if ((o = n.csp) !== null && o !== void 0 && o.nonce && a.nonce !== ((i = n.csp) === null || i === void 0 ? void 0 : i.nonce)) {
      var l;
      a.nonce = (l = n.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return a.innerHTML !== e && (a.innerHTML = e), a;
  }
  var c = xu(e, n);
  return c.setAttribute(Cu(n), t), c;
}
function Ru(e) {
  if (Array.isArray(e))
    return e;
}
function rm(e, t) {
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
function $u() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Y(e, t) {
  return Ru(e) || rm(e, t) || Ns(e, t) || $u();
}
function am(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var Ms = /* @__PURE__ */ function() {
  function e() {
    dn(this, e), j(this, "cache", void 0), j(this, "keys", void 0), j(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return fn(e, [{
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
            var f = Y(u, 2), m = f[1];
            return a.internalGet(d)[1] < m ? [d, a.internalGet(d)[1]] : u;
          }, [this.keys[0], this.cacheCallTimes]), i = Y(o, 1), l = i[0];
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
          return !am(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
}();
j(Ms, "MAX_CACHE_SIZE", 20);
j(Ms, "MAX_CACHE_OFFSET", 5);
var xl = 0, Iu = /* @__PURE__ */ function() {
  function e(t) {
    dn(this, e), j(this, "derivatives", void 0), j(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = xl, t.length === 0 && pr(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), xl += 1;
  }
  return fn(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, a) {
        return a(n, r);
      }, void 0);
    }
  }]), e;
}(), qo = new Ms();
function Ti(e) {
  var t = Array.isArray(e) ? e : [e];
  return qo.has(t) || qo.set(t, new Iu(t)), qo.get(t);
}
var om = /* @__PURE__ */ new WeakMap(), Ko = {};
function im(e, t) {
  for (var n = om, r = 0; r < t.length; r += 1) {
    var a = t[r];
    n.has(a) || n.set(a, /* @__PURE__ */ new WeakMap()), n = n.get(a);
  }
  return n.has(Ko) || n.set(Ko, e()), n.get(Ko);
}
var Ol = /* @__PURE__ */ new WeakMap();
function io(e) {
  var t = Ol.get(e) || "";
  return t || (Object.keys(e).forEach(function(n) {
    var r = e[n];
    t += n, r instanceof Iu ? t += r.id : r && Je(r) === "object" ? t += io(r) : t += r;
  }), Ol.set(e, t)), t;
}
function sm(e, t) {
  return Ps("".concat(t, "_").concat(io(e)));
}
var ua = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""), Nu = "_bAmBoO_";
function lm(e, t, n) {
  if (Gt()) {
    var r, a;
    Wr(e, ua);
    var o = document.createElement("div");
    o.style.position = "fixed", o.style.left = "0", o.style.top = "0", t == null || t(o), document.body.appendChild(o), process.env.NODE_ENV !== "production" && (o.innerHTML = "Test", o.style.zIndex = "9999999");
    var i = n ? n(o) : (r = getComputedStyle(o).content) === null || r === void 0 ? void 0 : r.includes(Nu);
    return (a = o.parentNode) === null || a === void 0 || a.removeChild(o), oo(ua), i;
  }
  return !1;
}
var Yo = void 0;
function cm() {
  return Yo === void 0 && (Yo = lm("@layer ".concat(ua, " { .").concat(ua, ' { content: "').concat(Nu, '"!important; } }'), function(e) {
    e.className = ua;
  })), Yo;
}
var Rl = process.env.NODE_ENV !== "test" && Gt() ? s.useLayoutEffect : s.useEffect, xt = function(t, n) {
  var r = s.useRef(!0);
  Rl(function() {
    return t(r.current);
  }, n), Rl(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, da = function(t, n) {
  xt(function(r) {
    if (!r)
      return t();
  }, n);
}, um = k({}, So), $l = um.useInsertionEffect, dm = function(t, n, r) {
  s.useMemo(t, r), xt(function() {
    return n(!0);
  }, r);
}, fm = $l ? function(e, t, n) {
  return $l(function() {
    return e(), t();
  }, n);
} : dm;
const vm = fm;
var mm = k({}, So), gm = mm.useInsertionEffect, pm = function(t) {
  var n = [], r = !1;
  function a(o) {
    if (r) {
      process.env.NODE_ENV !== "production" && pr(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    n.push(o);
  }
  return s.useEffect(function() {
    return r = !1, function() {
      r = !0, n.length && n.forEach(function(o) {
        return o();
      });
    };
  }, t), a;
}, hm = function() {
  return function(t) {
    t();
  };
}, bm = typeof gm < "u" ? pm : hm;
const ym = bm;
function Sm() {
  return !1;
}
var Mi = !1;
function Em() {
  return Mi;
}
const Cm = process.env.NODE_ENV === "production" ? Sm : Em;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Xo = window;
  if (typeof Xo.webpackHotUpdate == "function") {
    var wm = Xo.webpackHotUpdate;
    Xo.webpackHotUpdate = function() {
      return Mi = !0, setTimeout(function() {
        Mi = !1;
      }, 0), wm.apply(void 0, arguments);
    };
  }
}
function _u(e, t, n, r, a) {
  var o = s.useContext(Ts), i = o.cache, l = [e].concat(De(t)), c = l.join("_"), u = ym([c]), d = Cm(), f = function(p) {
    i.update(l, function(v) {
      var h = v || [], y = Y(h, 2), E = y[0], C = E === void 0 ? 0 : E, O = y[1], x = O;
      process.env.NODE_ENV !== "production" && O && d && (r == null || r(x, d), x = null);
      var S = x || n(), R = [C, S];
      return p ? p(R) : R;
    });
  };
  s.useMemo(
    function() {
      f();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [c]
    /* eslint-enable */
  );
  var m = i.get(l);
  process.env.NODE_ENV !== "production" && !m && (f(), m = i.get(l));
  var g = m[1];
  return vm(function() {
    a == null || a(g);
  }, function(b) {
    return f(function(p) {
      var v = Y(p, 2), h = v[0], y = v[1];
      return b && h === 0 && (a == null || a(g)), [h + 1, y];
    }), function() {
      i.update(l, function(p) {
        var v = p || [], h = Y(v, 2), y = h[0], E = y === void 0 ? 0 : y, C = h[1], O = E - 1;
        return O === 0 ? (u(function() {
          return r == null ? void 0 : r(C, !1);
        }), null) : [E - 1, C];
      });
    };
  }, [c]), g;
}
var xm = {}, Om = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", sr = /* @__PURE__ */ new Map();
function Rm(e) {
  sr.set(e, (sr.get(e) || 0) + 1);
}
function $m(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(_i, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[jr] === t) {
        var a;
        (a = r.parentNode) === null || a === void 0 || a.removeChild(r);
      }
    });
  }
}
var Im = 0;
function Nm(e, t) {
  sr.set(e, (sr.get(e) || 0) - 1);
  var n = Array.from(sr.keys()), r = n.filter(function(a) {
    var o = sr.get(a) || 0;
    return o <= 0;
  });
  n.length - r.length > Im && r.forEach(function(a) {
    $m(a, t), sr.delete(a);
  });
}
var _m = function(t, n, r, a) {
  var o = r.getDerivativeToken(t), i = k(k({}, o), n);
  return a && (i = a(i)), i;
};
function Pm(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = s.useContext(Ts), a = r.cache.instanceId, o = n.salt, i = o === void 0 ? "" : o, l = n.override, c = l === void 0 ? xm : l, u = n.formatToken, d = n.getComputedToken, f = im(function() {
    return Object.assign.apply(Object, [{}].concat(De(t)));
  }, t), m = io(f), g = io(c), b = _u("token", [i, e.id, m, g], function() {
    var p = d ? d(f, c, e) : _m(f, c, e, u), v = sm(p, i);
    p._tokenKey = v, Rm(v);
    var h = "".concat(Om, "-").concat(Ps(v));
    return p._hashId = h, [p, h];
  }, function(p) {
    Nm(p[0]._tokenKey, a);
  });
  return b;
}
var Tm = {
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
}, Pu = "comm", Tu = "rule", Mu = "decl", Mm = "@import", Am = "@keyframes", Fm = "@layer", Dm = Math.abs, As = String.fromCharCode;
function Au(e) {
  return e.trim();
}
function Ka(e, t, n) {
  return e.replace(t, n);
}
function jm(e, t) {
  return e.indexOf(t);
}
function ha(e, t) {
  return e.charCodeAt(t) | 0;
}
function ba(e, t, n) {
  return e.slice(t, n);
}
function Wn(e) {
  return e.length;
}
function Lm(e) {
  return e.length;
}
function Fa(e, t) {
  return t.push(e), e;
}
var $o = 1, Ur = 1, Fu = 0, wn = 0, At = 0, Qr = "";
function Fs(e, t, n, r, a, o, i, l) {
  return { value: e, root: t, parent: n, type: r, props: a, children: o, line: $o, column: Ur, length: i, return: "", siblings: l };
}
function Vm() {
  return At;
}
function zm() {
  return At = wn > 0 ? ha(Qr, --wn) : 0, Ur--, At === 10 && (Ur = 1, $o--), At;
}
function Mn() {
  return At = wn < Fu ? ha(Qr, wn++) : 0, Ur++, At === 10 && (Ur = 1, $o++), At;
}
function vr() {
  return ha(Qr, wn);
}
function Ya() {
  return wn;
}
function Io(e, t) {
  return ba(Qr, e, t);
}
function Ai(e) {
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
function Hm(e) {
  return $o = Ur = 1, Fu = Wn(Qr = e), wn = 0, [];
}
function Bm(e) {
  return Qr = "", e;
}
function Qo(e) {
  return Au(Io(wn - 1, Fi(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function km(e) {
  for (; (At = vr()) && At < 33; )
    Mn();
  return Ai(e) > 2 || Ai(At) > 3 ? "" : " ";
}
function Wm(e, t) {
  for (; --t && Mn() && !(At < 48 || At > 102 || At > 57 && At < 65 || At > 70 && At < 97); )
    ;
  return Io(e, Ya() + (t < 6 && vr() == 32 && Mn() == 32));
}
function Fi(e) {
  for (; Mn(); )
    switch (At) {
      case e:
        return wn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Fi(At);
        break;
      case 40:
        e === 41 && Fi(e);
        break;
      case 92:
        Mn();
        break;
    }
  return wn;
}
function Um(e, t) {
  for (; Mn() && e + At !== 47 + 10; )
    if (e + At === 42 + 42 && vr() === 47)
      break;
  return "/*" + Io(t, wn - 1) + "*" + As(e === 47 ? e : Mn());
}
function Gm(e) {
  for (; !Ai(vr()); )
    Mn();
  return Io(e, wn);
}
function qm(e) {
  return Bm(Xa("", null, null, null, [""], e = Hm(e), 0, [0], e));
}
function Xa(e, t, n, r, a, o, i, l, c) {
  for (var u = 0, d = 0, f = i, m = 0, g = 0, b = 0, p = 1, v = 1, h = 1, y = 0, E = "", C = a, O = o, x = r, S = E; v; )
    switch (b = y, y = Mn()) {
      case 40:
        if (b != 108 && ha(S, f - 1) == 58) {
          jm(S += Ka(Qo(y), "&", "&\f"), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += Qo(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += km(b);
        break;
      case 92:
        S += Wm(Ya() - 1, 7);
        continue;
      case 47:
        switch (vr()) {
          case 42:
          case 47:
            Fa(Km(Um(Mn(), Ya()), t, n, c), c);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * p:
        l[u++] = Wn(S) * h;
      case 125 * p:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            v = 0;
          case 59 + d:
            h == -1 && (S = Ka(S, /\f/g, "")), g > 0 && Wn(S) - f && Fa(g > 32 ? Nl(S + ";", r, n, f - 1, c) : Nl(Ka(S, " ", "") + ";", r, n, f - 2, c), c);
            break;
          case 59:
            S += ";";
          default:
            if (Fa(x = Il(S, t, n, u, d, a, l, E, C = [], O = [], f, o), o), y === 123)
              if (d === 0)
                Xa(S, t, x, x, C, o, f, l, O);
              else
                switch (m === 99 && ha(S, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Xa(e, x, x, r && Fa(Il(e, x, x, 0, 0, a, l, E, a, C = [], f, O), O), a, O, f, l, r ? C : O);
                    break;
                  default:
                    Xa(S, x, x, x, [""], O, 0, l, O);
                }
        }
        u = d = g = 0, p = h = 1, E = S = "", f = i;
        break;
      case 58:
        f = 1 + Wn(S), g = b;
      default:
        if (p < 1) {
          if (y == 123)
            --p;
          else if (y == 125 && p++ == 0 && zm() == 125)
            continue;
        }
        switch (S += As(y), y * p) {
          case 38:
            h = d > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            l[u++] = (Wn(S) - 1) * h, h = 1;
            break;
          case 64:
            vr() === 45 && (S += Qo(Mn())), m = vr(), d = f = Wn(E = S += Gm(Ya())), y++;
            break;
          case 45:
            b === 45 && Wn(S) == 2 && (p = 0);
        }
    }
  return o;
}
function Il(e, t, n, r, a, o, i, l, c, u, d, f) {
  for (var m = a - 1, g = a === 0 ? o : [""], b = Lm(g), p = 0, v = 0, h = 0; p < r; ++p)
    for (var y = 0, E = ba(e, m + 1, m = Dm(v = i[p])), C = e; y < b; ++y)
      (C = Au(v > 0 ? g[y] + " " + E : Ka(E, /&\f/g, g[y]))) && (c[h++] = C);
  return Fs(e, t, n, a === 0 ? Tu : l, c, u, d, f);
}
function Km(e, t, n, r) {
  return Fs(e, t, n, Pu, As(Vm()), ba(e, 2, -2), 0, r);
}
function Nl(e, t, n, r, a) {
  return Fs(e, t, n, Mu, ba(e, 0, r), ba(e, r + 1, -1), r, a);
}
function Di(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Ym(e, t, n, r) {
  switch (e.type) {
    case Fm:
      if (e.children.length)
        break;
    case Mm:
    case Mu:
      return e.return = e.return || e.value;
    case Pu:
      return "";
    case Am:
      return e.return = e.value + "{" + Di(e.children, r) + "}";
    case Tu:
      if (!Wn(e.value = e.props.join(",")))
        return "";
  }
  return Wn(n = Di(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Du(e, t) {
  var n = t.path, r = t.parentSelectors;
  ot(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var Xm = function(t, n, r) {
  if (t === "content") {
    var a = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, o = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || o.indexOf(n) === -1 && !a.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && Du("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, Qm = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && Du("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, _l = "data-ant-cssinjs-cache-path", ju = "_FILE_STYLE__", mr, Lu = !0;
function Jm() {
  if (!mr && (mr = {}, Gt())) {
    var e = document.createElement("div");
    e.className = _l, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(a) {
      var o = a.split(":"), i = Y(o, 2), l = i[0], c = i[1];
      mr[l] = c;
    });
    var n = document.querySelector("style[".concat(_l, "]"));
    if (n) {
      var r;
      Lu = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function Zm(e) {
  return Jm(), !!mr[e];
}
function eg(e) {
  var t = mr[e], n = null;
  if (t && Gt())
    if (Lu)
      n = ju;
    else {
      var r = document.querySelector("style[".concat(fr, '="').concat(mr[e], '"]'));
      r ? n = r.innerHTML : delete mr[e];
    }
  return [n, t];
}
var Pl = Gt(), Vu = "_skip_check_", zu = "_multi_value_";
function Tl(e) {
  var t = Di(qm(e), Ym);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function tg(e) {
  return Je(e) === "object" && e && (Vu in e || zu in e);
}
function ng(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), a = n === "low" ? ":where(".concat(r, ")") : r, o = e.split(",").map(function(i) {
    var l, c = i.trim().split(/\s+/), u = c[0] || "", d = ((l = u.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || "";
    return u = "".concat(d).concat(a).concat(u.slice(d.length)), [u].concat(De(c.slice(1))).join(" ");
  });
  return o.join(",");
}
var rg = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = r.root, o = r.injectHash, i = r.parentSelectors, l = n.hashId, c = n.layer, u = n.path, d = n.hashPriority, f = n.transformers, m = f === void 0 ? [] : f, g = n.linters, b = g === void 0 ? [] : g, p = "", v = {};
  function h(x) {
    var S = x.getName(l);
    if (!v[S]) {
      var R = e(x.style, n, {
        root: !1,
        parentSelectors: i
      }), _ = Y(R, 1), N = _[0];
      v[S] = "@keyframes ".concat(x.getName(l)).concat(N);
    }
  }
  function y(x) {
    var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return x.forEach(function(R) {
      Array.isArray(R) ? y(R, S) : R && S.push(R);
    }), S;
  }
  var E = y(Array.isArray(t) ? t : [t]);
  if (E.forEach(function(x) {
    var S = typeof x == "string" && !a ? {} : x;
    if (typeof S == "string")
      p += "".concat(S, `
`);
    else if (S._keyframe)
      h(S);
    else {
      var R = m.reduce(function(_, N) {
        var F;
        return (N == null || (F = N.visit) === null || F === void 0 ? void 0 : F.call(N, _)) || _;
      }, S);
      Object.keys(R).forEach(function(_) {
        var N = R[_];
        if (Je(N) === "object" && N && (_ !== "animationName" || !N._keyframe) && !tg(N)) {
          var F = !1, A = _.trim(), M = !1;
          (a || o) && l ? A.startsWith("@") ? F = !0 : A = ng(_, l, d) : a && !l && (A === "&" || A === "") && (A = "", M = !0);
          var D = e(N, n, {
            root: M,
            injectHash: F,
            parentSelectors: [].concat(De(i), [A])
          }), V = Y(D, 2), P = V[0], I = V[1];
          v = k(k({}, v), I), p += "".concat(A).concat(P);
        } else {
          let L = function(H, W) {
            process.env.NODE_ENV !== "production" && (Je(N) !== "object" || !(N != null && N[Vu])) && [Xm, Qm].concat(De(b)).forEach(function(ne) {
              return ne(H, W, {
                path: u,
                hashId: l,
                parentSelectors: i
              });
            });
            var G = H.replace(/[A-Z]/g, function(ne) {
              return "-".concat(ne.toLowerCase());
            }), U = W;
            !Tm[H] && typeof U == "number" && U !== 0 && (U = "".concat(U, "px")), H === "animationName" && W !== null && W !== void 0 && W._keyframe && (h(W), U = W.getName(l)), p += "".concat(G, ":").concat(U, ";");
          };
          var T, z = (T = N == null ? void 0 : N.value) !== null && T !== void 0 ? T : N;
          Je(N) === "object" && N !== null && N !== void 0 && N[zu] && Array.isArray(z) ? z.forEach(function(H) {
            L(_, H);
          }) : L(_, z);
        }
      });
    }
  }), !a)
    p = "{".concat(p, "}");
  else if (c && cm()) {
    var C = c.split(","), O = C[C.length - 1].trim();
    p = "@layer ".concat(O, " {").concat(p, "}"), C.length > 1 && (p = "@layer ".concat(c, "{%%%:%}").concat(p));
  }
  return [p, v];
};
function ag(e, t) {
  return Ps("".concat(e.join("%")).concat(t));
}
function og() {
  return null;
}
function ji(e, t) {
  var n = e.token, r = e.path, a = e.hashId, o = e.layer, i = e.nonce, l = e.clientOnly, c = e.order, u = c === void 0 ? 0 : c, d = s.useContext(Ts), f = d.autoClear, m = d.mock, g = d.defaultCache, b = d.hashPriority, p = d.container, v = d.ssrInline, h = d.transformers, y = d.linters, E = d.cache, C = n._tokenKey, O = [C].concat(De(r)), x = Pl;
  process.env.NODE_ENV !== "production" && m !== void 0 && (x = m === "client");
  var S = _u(
    "style",
    O,
    // Create cache if needed
    function() {
      var A = O.join("|");
      if (Zm(A)) {
        var M = eg(A), D = Y(M, 2), V = D[0], P = D[1];
        if (V)
          return [V, C, P, {}, l, u];
      }
      var I = t(), T = rg(I, {
        hashId: a,
        hashPriority: b,
        layer: o,
        path: r.join("-"),
        transformers: h,
        linters: y
      }), z = Y(T, 2), L = z[0], H = z[1], W = Tl(L), G = ag(O, W);
      return [W, C, G, H, l, u];
    },
    // Remove cache if no need
    function(A, M) {
      var D = Y(A, 3), V = D[2];
      (M || f) && Pl && oo(V, {
        mark: fr
      });
    },
    // Effect: Inject style here
    function(A) {
      var M = Y(A, 4), D = M[0];
      M[1];
      var V = M[2], P = M[3];
      if (x && D !== ju) {
        var I = {
          mark: fr,
          prepend: "queue",
          attachTo: p,
          priority: u
        }, T = typeof i == "function" ? i() : i;
        T && (I.csp = {
          nonce: T
        });
        var z = Wr(D, V, I);
        z[jr] = E.instanceId, z.setAttribute(_i, C), process.env.NODE_ENV !== "production" && z.setAttribute(Xv, O.join("|")), Object.keys(P).forEach(function(L) {
          Wr(Tl(P[L]), "_effect-".concat(L), I);
        });
      }
    }
  ), R = Y(S, 3), _ = R[0], N = R[1], F = R[2];
  return function(A) {
    var M;
    if (!v || x || !g)
      M = /* @__PURE__ */ s.createElement(og, null);
    else {
      var D;
      M = /* @__PURE__ */ s.createElement("style", Ue({}, (D = {}, j(D, _i, N), j(D, fr, F), D), {
        dangerouslySetInnerHTML: {
          __html: _
        }
      }));
    }
    return /* @__PURE__ */ s.createElement(s.Fragment, null, M, A);
  };
}
var qt = /* @__PURE__ */ function() {
  function e(t, n) {
    dn(this, e), j(this, "name", void 0), j(this, "style", void 0), j(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return fn(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function Nr(e) {
  return e.notSplit = !0, e;
}
Nr(["borderTop", "borderBottom"]), Nr(["borderTop"]), Nr(["borderBottom"]), Nr(["borderLeft", "borderRight"]), Nr(["borderLeft"]), Nr(["borderRight"]);
var ig = /* @__PURE__ */ s.createContext({});
const Ds = ig;
function Hu(e) {
  return Ru(e) || hu(e) || Ns(e) || $u();
}
function Tn(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function Bu(e, t, n, r) {
  if (!t.length)
    return n;
  var a = Hu(t), o = a[0], i = a.slice(1), l;
  return !e && typeof o == "number" ? l = [] : Array.isArray(e) ? l = De(e) : l = k({}, e), r && n === void 0 && i.length === 1 ? delete l[o][i[0]] : l[o] = Bu(l[o], i, n, r), l;
}
function _n(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !Tn(e, t.slice(0, -1)) ? e : Bu(e, t, n, r);
}
function sg(e) {
  return Je(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Ml(e) {
  return Array.isArray(e) ? [] : {};
}
var lg = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Lr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = Ml(t[0]);
  return t.forEach(function(a) {
    function o(i, l) {
      var c = new Set(l), u = Tn(a, i), d = Array.isArray(u);
      if (d || sg(u)) {
        if (!c.has(u)) {
          c.add(u);
          var f = Tn(r, i);
          d ? r = _n(r, i, []) : (!f || Je(f) !== "object") && (r = _n(r, i, Ml(u))), lg(u).forEach(function(m) {
            o([].concat(De(i), [m]), c);
          });
        }
      } else
        r = _n(r, i, u);
    }
    o([]);
  }), r;
}
function ku() {
}
let kn = null;
function cg() {
  kn = null, iu();
}
let js = ku;
process.env.NODE_ENV !== "production" && (js = (e, t, n) => {
  ot(e, `[antd: ${t}] ${n}`), process.env.NODE_ENV === "test" && cg();
});
const Wu = /* @__PURE__ */ s.createContext({}), Xn = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = s.useContext(Wu), n = (r, a, o) => {
    if (!r)
      if (t === !1 && a === "deprecated") {
        const i = kn;
        kn || (kn = {}), kn[e] = kn[e] || [], kn[e].includes(o || "") || kn[e].push(o || ""), i || console.warn("[antd] There exists deprecated usage in your code:", kn);
      } else
        process.env.NODE_ENV !== "production" && js(r, e, o);
  };
  return n.deprecated = (r, a, o, i) => {
    n(r, "deprecated", `\`${a}\` is deprecated. Please use \`${o}\` instead.${i ? ` ${i}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = ku, e;
}, No = js, ug = /* @__PURE__ */ s.createContext(void 0), dg = {
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
var fg = {
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
const vg = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Uu = vg, mg = {
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
  }, fg),
  timePickerLocale: Object.assign({}, Uu)
}, Al = mg, on = "${label} is not a valid ${type}", gg = {
  locale: "en",
  Pagination: dg,
  DatePicker: Al,
  TimePicker: Uu,
  Calendar: Al,
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
        string: on,
        method: on,
        array: on,
        object: on,
        number: on,
        date: on,
        boolean: on,
        integer: on,
        float: on,
        regexp: on,
        email: on,
        url: on,
        hex: on
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
}, Gr = gg;
Object.assign({}, Gr.Modal);
let Qa = [];
const Fl = () => Qa.reduce((e, t) => Object.assign(Object.assign({}, e), t), Gr.Modal);
function pg(e) {
  if (e) {
    const t = Object.assign({}, e);
    return Qa.push(t), Fl(), () => {
      Qa = Qa.filter((n) => n !== t), Fl();
    };
  }
  Object.assign({}, Gr.Modal);
}
const hg = /* @__PURE__ */ s.createContext(void 0), Ls = hg, bg = (e, t) => {
  const n = s.useContext(Ls), r = s.useMemo(() => {
    var o;
    const i = t || Gr[e], l = (o = n == null ? void 0 : n[e]) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, typeof i == "function" ? i() : i), l || {});
  }, [e, t, n]), a = s.useMemo(() => {
    const o = n == null ? void 0 : n.locale;
    return n != null && n.exist && !o ? Gr.locale : o;
  }, [n]);
  return [r, a];
}, yg = bg, Gu = "internalMark", qu = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const o = Xn("LocaleProvider");
    process.env.NODE_ENV !== "production" && o(r === Gu, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  s.useEffect(() => pg(t && t.Modal), [t]);
  const a = s.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ s.createElement(Ls.Provider, {
    value: a
  }, n);
};
process.env.NODE_ENV !== "production" && (qu.displayName = "LocaleProvider");
const Sg = qu;
function Ut(e, t) {
  Eg(e) && (e = "100%");
  var n = Cg(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Da(e) {
  return Math.min(1, Math.max(0, e));
}
function Eg(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Cg(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Ku(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function ja(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function lr(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function wg(e, t, n) {
  return {
    r: Ut(e, 255) * 255,
    g: Ut(t, 255) * 255,
    b: Ut(n, 255) * 255
  };
}
function Dl(e, t, n) {
  e = Ut(e, 255), t = Ut(t, 255), n = Ut(n, 255);
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
function xg(e, t, n) {
  var r, a, o;
  if (e = Ut(e, 360), t = Ut(t, 100), n = Ut(n, 100), t === 0)
    a = n, o = n, r = n;
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - i;
    r = Jo(l, i, e + 1 / 3), a = Jo(l, i, e), o = Jo(l, i, e - 1 / 3);
  }
  return { r: r * 255, g: a * 255, b: o * 255 };
}
function Li(e, t, n) {
  e = Ut(e, 255), t = Ut(t, 255), n = Ut(n, 255);
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
function Og(e, t, n) {
  e = Ut(e, 360) * 6, t = Ut(t, 100), n = Ut(n, 100);
  var r = Math.floor(e), a = e - r, o = n * (1 - t), i = n * (1 - a * t), l = n * (1 - (1 - a) * t), c = r % 6, u = [n, i, o, o, l, n][c], d = [l, n, n, i, o, o][c], f = [o, o, l, n, n, i][c];
  return { r: u * 255, g: d * 255, b: f * 255 };
}
function Vi(e, t, n, r) {
  var a = [
    lr(Math.round(e).toString(16)),
    lr(Math.round(t).toString(16)),
    lr(Math.round(n).toString(16))
  ];
  return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function Rg(e, t, n, r, a) {
  var o = [
    lr(Math.round(e).toString(16)),
    lr(Math.round(t).toString(16)),
    lr(Math.round(n).toString(16)),
    lr($g(r))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function $g(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function jl(e) {
  return ln(e) / 255;
}
function ln(e) {
  return parseInt(e, 16);
}
function Ig(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var zi = {
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
function Dr(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, a = null, o = null, i = !1, l = !1;
  return typeof e == "string" && (e = Pg(e)), typeof e == "object" && (Hn(e.r) && Hn(e.g) && Hn(e.b) ? (t = wg(e.r, e.g, e.b), i = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Hn(e.h) && Hn(e.s) && Hn(e.v) ? (r = ja(e.s), a = ja(e.v), t = Og(e.h, r, a), i = !0, l = "hsv") : Hn(e.h) && Hn(e.s) && Hn(e.l) && (r = ja(e.s), o = ja(e.l), t = xg(e.h, r, o), i = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Ku(n), {
    ok: i,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var Ng = "[-\\+]?\\d+%?", _g = "[-\\+]?\\d*\\.\\d+%?", tr = "(?:".concat(_g, ")|(?:").concat(Ng, ")"), Zo = "[\\s|\\(]+(".concat(tr, ")[,|\\s]+(").concat(tr, ")[,|\\s]+(").concat(tr, ")\\s*\\)?"), ei = "[\\s|\\(]+(".concat(tr, ")[,|\\s]+(").concat(tr, ")[,|\\s]+(").concat(tr, ")[,|\\s]+(").concat(tr, ")\\s*\\)?"), In = {
  CSS_UNIT: new RegExp(tr),
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
function Pg(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (zi[e])
    e = zi[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = In.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = In.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = In.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = In.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = In.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = In.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = In.hex8.exec(e), n ? {
    r: ln(n[1]),
    g: ln(n[2]),
    b: ln(n[3]),
    a: jl(n[4]),
    format: t ? "name" : "hex8"
  } : (n = In.hex6.exec(e), n ? {
    r: ln(n[1]),
    g: ln(n[2]),
    b: ln(n[3]),
    format: t ? "name" : "hex"
  } : (n = In.hex4.exec(e), n ? {
    r: ln(n[1] + n[1]),
    g: ln(n[2] + n[2]),
    b: ln(n[3] + n[3]),
    a: jl(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = In.hex3.exec(e), n ? {
    r: ln(n[1] + n[1]),
    g: ln(n[2] + n[2]),
    b: ln(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Hn(e) {
  return !!In.CSS_UNIT.exec(String(e));
}
var Wt = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = Ig(t)), this.originalInput = t;
      var a = Dr(t);
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
      return this.a = Ku(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Li(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Li(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), a = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Dl(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Dl(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), a = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), Vi(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Rg(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(Ut(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Ut(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + Vi(this.r, this.g, this.b, !1), n = 0, r = Object.entries(zi); n < r.length; n++) {
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
      return n.l += t / 100, n.l = Da(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Da(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Da(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Da(n.s), new e(n);
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
), La = 2, Ll = 0.16, Tg = 0.05, Mg = 0.05, Ag = 0.15, Yu = 5, Xu = 4, Fg = [{
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
function Vl(e) {
  var t = e.r, n = e.g, r = e.b, a = Li(t, n, r);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function Va(e) {
  var t = e.r, n = e.g, r = e.b;
  return "#".concat(Vi(t, n, r, !1));
}
function Dg(e, t, n) {
  var r = n / 100, a = {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
  return a;
}
function zl(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - La * t : Math.round(e.h) + La * t : r = n ? Math.round(e.h) + La * t : Math.round(e.h) - La * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Hl(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - Ll * t : t === Xu ? r = e.s + Ll : r = e.s + Tg * t, r > 1 && (r = 1), n && t === Yu && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function Bl(e, t, n) {
  var r;
  return n ? r = e.v + Mg * t : r = e.v - Ag * t, r > 1 && (r = 1), Number(r.toFixed(2));
}
function hr(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = Dr(e), a = Yu; a > 0; a -= 1) {
    var o = Vl(r), i = Va(Dr({
      h: zl(o, a, !0),
      s: Hl(o, a, !0),
      v: Bl(o, a, !0)
    }));
    n.push(i);
  }
  n.push(Va(r));
  for (var l = 1; l <= Xu; l += 1) {
    var c = Vl(r), u = Va(Dr({
      h: zl(c, l),
      s: Hl(c, l),
      v: Bl(c, l)
    }));
    n.push(u);
  }
  return t.theme === "dark" ? Fg.map(function(d) {
    var f = d.index, m = d.opacity, g = Va(Dg(Dr(t.backgroundColor || "#141414"), Dr(n[f]), m * 100));
    return g;
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
}, Ja = {}, ni = {};
Object.keys(ti).forEach(function(e) {
  Ja[e] = hr(ti[e]), Ja[e].primary = Ja[e][5], ni[e] = hr(ti[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), ni[e].primary = ni[e][5];
});
var jg = Ja.blue;
const Lg = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
}, Vg = Lg;
function zg(e) {
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
const Qu = {
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
}, Hg = Object.assign(Object.assign({}, Qu), {
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
}), ya = Hg;
function Bg(e, t) {
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
  } = e, f = n(c), m = n(a), g = n(o), b = n(i), p = n(l), v = r(u, d), h = e.colorLink || e.colorInfo, y = n(h);
  return Object.assign(Object.assign({}, v), {
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
    colorSuccessBg: m[1],
    colorSuccessBgHover: m[2],
    colorSuccessBorder: m[3],
    colorSuccessBorderHover: m[4],
    colorSuccessHover: m[4],
    colorSuccess: m[6],
    colorSuccessActive: m[7],
    colorSuccessTextHover: m[8],
    colorSuccessText: m[9],
    colorSuccessTextActive: m[10],
    colorErrorBg: b[1],
    colorErrorBgHover: b[2],
    colorErrorBorder: b[3],
    colorErrorBorderHover: b[4],
    colorErrorHover: b[5],
    colorError: b[6],
    colorErrorActive: b[7],
    colorErrorTextHover: b[8],
    colorErrorText: b[9],
    colorErrorTextActive: b[10],
    colorWarningBg: g[1],
    colorWarningBgHover: g[2],
    colorWarningBorder: g[3],
    colorWarningBorderHover: g[4],
    colorWarningHover: g[4],
    colorWarning: g[6],
    colorWarningActive: g[7],
    colorWarningTextHover: g[8],
    colorWarningText: g[9],
    colorWarningTextActive: g[10],
    colorInfoBg: p[1],
    colorInfoBgHover: p[2],
    colorInfoBorder: p[3],
    colorInfoBorderHover: p[4],
    colorInfoHover: p[4],
    colorInfo: p[6],
    colorInfoActive: p[7],
    colorInfoTextHover: p[8],
    colorInfoText: p[9],
    colorInfoTextActive: p[10],
    colorLinkHover: y[4],
    colorLink: y[6],
    colorLinkActive: y[7],
    colorBgMask: new Wt("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const kg = (e) => {
  let t = e, n = e, r = e, a = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? a = 4 : e >= 8 && (a = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: a
  };
}, Wg = kg;
function Ug(e) {
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
  }, Wg(r));
}
const Bn = (e, t) => new Wt(e).setAlpha(t).toRgbString(), aa = (e, t) => new Wt(e).darken(t).toHexString(), Gg = (e) => {
  const t = hr(e);
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
}, qg = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: Bn(r, 0.88),
    colorTextSecondary: Bn(r, 0.65),
    colorTextTertiary: Bn(r, 0.45),
    colorTextQuaternary: Bn(r, 0.25),
    colorFill: Bn(r, 0.15),
    colorFillSecondary: Bn(r, 0.06),
    colorFillTertiary: Bn(r, 0.04),
    colorFillQuaternary: Bn(r, 0.02),
    colorBgLayout: aa(n, 4),
    colorBgContainer: aa(n, 0),
    colorBgElevated: aa(n, 0),
    colorBgSpotlight: Bn(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: aa(n, 15),
    colorBorderSecondary: aa(n, 6)
  };
};
function Kg(e) {
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
const Yg = (e) => {
  const t = Kg(e), n = t.map((a) => a.size), r = t.map((a) => a.lineHeight);
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
}, Xg = Yg;
function Qg(e) {
  const t = Object.keys(Qu).map((n) => {
    const r = hr(e[n]);
    return new Array(10).fill(1).reduce((a, o, i) => (a[`${n}-${i + 1}`] = r[i], a[`${n}${i + 1}`] = r[i], a), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Bg(e, {
    generateColorPalettes: Gg,
    generateNeutralColorPalettes: qg
  })), Xg(e.fontSize)), zg(e)), Vg(e)), Ug(e));
}
const Ju = Ti(Qg), Zu = {
  token: ya,
  override: {
    override: ya
  },
  hashed: !0
}, ed = /* @__PURE__ */ Re.createContext(Zu), td = "anticon", Jg = (e, t) => t || (e ? `ant-${e}` : "ant"), Pt = /* @__PURE__ */ s.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Jg,
  iconPrefixCls: td
}), Zg = `-ant-${Date.now()}-${Math.random()}`;
function ep(e, t) {
  const n = {}, r = (i, l) => {
    let c = i.clone();
    return c = (l == null ? void 0 : l(c)) || c, c.toRgbString();
  }, a = (i, l) => {
    const c = new Wt(i), u = hr(c.toRgbString());
    n[`${l}-color`] = r(c), n[`${l}-color-disabled`] = u[1], n[`${l}-color-hover`] = u[4], n[`${l}-color-active`] = u[6], n[`${l}-color-outline`] = c.clone().setAlpha(0.2).toRgbString(), n[`${l}-color-deprecated-bg`] = u[0], n[`${l}-color-deprecated-border`] = u[2];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    const i = new Wt(t.primaryColor), l = hr(i.toRgbString());
    l.forEach((u, d) => {
      n[`primary-${d + 1}`] = u;
    }), n["primary-color-deprecated-l-35"] = r(i, (u) => u.lighten(35)), n["primary-color-deprecated-l-20"] = r(i, (u) => u.lighten(20)), n["primary-color-deprecated-t-20"] = r(i, (u) => u.tint(20)), n["primary-color-deprecated-t-50"] = r(i, (u) => u.tint(50)), n["primary-color-deprecated-f-12"] = r(i, (u) => u.setAlpha(u.getAlpha() * 0.12));
    const c = new Wt(l[0]);
    n["primary-color-active-deprecated-f-30"] = r(c, (u) => u.setAlpha(u.getAlpha() * 0.3)), n["primary-color-active-deprecated-d-02"] = r(c, (u) => u.darken(2));
  }
  return t.successColor && a(t.successColor, "success"), t.warningColor && a(t.warningColor, "warning"), t.errorColor && a(t.errorColor, "error"), t.infoColor && a(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((i) => `--${e}-${i}: ${n[i]};`).join(`
`)}
  }
  `.trim();
}
function tp(e, t) {
  const n = ep(e, t);
  Gt() ? Wr(n, `${Zg}-dynamic-theme`) : process.env.NODE_ENV !== "production" && No(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Hi = /* @__PURE__ */ s.createContext(!1), np = (e) => {
  let {
    children: t,
    disabled: n
  } = e;
  const r = s.useContext(Hi);
  return /* @__PURE__ */ s.createElement(Hi.Provider, {
    value: n ?? r
  }, t);
}, Jr = Hi, Bi = /* @__PURE__ */ s.createContext(void 0), rp = (e) => {
  let {
    children: t,
    size: n
  } = e;
  const r = s.useContext(Bi);
  return /* @__PURE__ */ s.createElement(Bi.Provider, {
    value: n || r
  }, t);
}, _o = Bi;
function ap() {
  const e = s.useContext(Jr), t = s.useContext(_o);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
const op = "5.10.2";
function ri(e) {
  return e >= 0 && e <= 255;
}
function za(e, t) {
  const {
    r: n,
    g: r,
    b: a,
    a: o
  } = new Wt(e).toRgb();
  if (o < 1)
    return e;
  const {
    r: i,
    g: l,
    b: c
  } = new Wt(t).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const d = Math.round((n - i * (1 - u)) / u), f = Math.round((r - l * (1 - u)) / u), m = Math.round((a - c * (1 - u)) / u);
    if (ri(d) && ri(f) && ri(m))
      return new Wt({
        r: d,
        g: f,
        b: m,
        a: Math.round(u * 100) / 100
      }).toRgbString();
  }
  return new Wt({
    r: n,
    g: r,
    b: a,
    a: 1
  }).toRgbString();
}
var ip = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function nd(e) {
  const {
    override: t
  } = e, n = ip(e, ["override"]), r = Object.assign({}, t);
  Object.keys(ya).forEach((m) => {
    delete r[m];
  });
  const a = Object.assign(Object.assign({}, n), r), o = 480, i = 576, l = 768, c = 992, u = 1200, d = 1600;
  if (a.motion === !1) {
    const m = "0s";
    a.motionDurationFast = m, a.motionDurationMid = m, a.motionDurationSlow = m;
  }
  return Object.assign(Object.assign(Object.assign({}, a), {
    // ============== Background ============== //
    colorFillContent: a.colorFillSecondary,
    colorFillContentHover: a.colorFill,
    colorFillAlter: a.colorFillQuaternary,
    colorBgContainerDisabled: a.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: a.colorBgContainer,
    colorSplit: za(a.colorBorderSecondary, a.colorBgContainer),
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
    colorErrorOutline: za(a.colorErrorBg, a.colorBgContainer),
    colorWarningOutline: za(a.colorWarningBg, a.colorBgContainer),
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
    controlOutline: za(a.colorPrimaryBg, a.colorBgContainer),
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
      0 1px 2px -2px ${new Wt("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Wt("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Wt("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var kl = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const rd = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: a
  } = t, o = kl(t, ["override"]);
  let i = Object.assign(Object.assign({}, r), {
    override: a
  });
  return i = nd(i), o && Object.entries(o).forEach((l) => {
    let [c, u] = l;
    const {
      theme: d
    } = u, f = kl(u, ["theme"]);
    let m = f;
    d && (m = rd(Object.assign(Object.assign({}, i), f), {
      override: f
    }, d)), i[c] = m;
  }), i;
};
function Sr() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r
  } = Re.useContext(ed), a = `${op}-${t || ""}`, o = n || Ju, [i, l] = Pm(o, [ya, e], {
    salt: a,
    override: r,
    getComputedToken: rd,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: nd
  });
  return [o, i, t ? l : ""];
}
function cn(e) {
  var t = s.useRef();
  t.current = e;
  var n = s.useCallback(function() {
    for (var r, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(o));
  }, []);
  return n;
}
function Hr(e) {
  var t = s.useRef(!1), n = s.useState(e), r = Y(n, 2), a = r[0], o = r[1];
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
function br(e, t) {
  var n = t || {}, r = n.defaultValue, a = n.value, o = n.onChange, i = n.postState, l = Hr(function() {
    return ai(a) ? a : ai(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), c = Y(l, 2), u = c[0], d = c[1], f = a !== void 0 ? a : u, m = i ? i(f) : f, g = cn(o), b = Hr([f]), p = Y(b, 2), v = p[0], h = p[1];
  da(function() {
    var E = v[0];
    u !== E && g(u, E);
  }, [v]), da(function() {
    ai(a) || d(a);
  }, [a]);
  var y = cn(function(E, C) {
    d(E, C), h([f], C);
  });
  return [m, y];
}
const ki = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, nr = function(e) {
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
}, Po = () => ({
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
}), sp = () => ({
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
}), lp = (e) => ({
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
}), cp = (e, t) => {
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
}, up = (e) => ({
  outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), dp = (e) => ({
  "&:focus-visible": Object.assign({}, up(e))
}), ad = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let Wi = !0;
function $t() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!ad)
    return Object.assign.apply(Object, [{}].concat(t));
  Wi = !1;
  const r = {};
  return t.forEach((a) => {
    Object.keys(a).forEach((i) => {
      Object.defineProperty(r, i, {
        configurable: !0,
        enumerable: !0,
        get: () => a[i]
      });
    });
  }), Wi = !0, r;
}
const Wl = {};
function fp() {
}
function vp(e) {
  let t, n = e, r = fp;
  return ad && (t = /* @__PURE__ */ new Set(), n = new Proxy(e, {
    get(a, o) {
      return Wi && t.add(o), a[o];
    }
  }), r = (a, o) => {
    var i;
    Wl[a] = {
      global: Array.from(t),
      component: Object.assign(Object.assign({}, (i = Wl[a]) === null || i === void 0 ? void 0 : i.component), o)
    };
  }), {
    token: n,
    keys: t,
    flush: r
  };
}
const mp = (e, t) => {
  const [n, r] = Sr();
  return ji({
    theme: n,
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, Po()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, od = mp;
function Ln(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const a = Array.isArray(e) ? e : [e, e], [o] = a, i = a.join("-");
  return (l) => {
    const [c, u, d] = Sr(), {
      getPrefixCls: f,
      iconPrefixCls: m,
      csp: g
    } = s.useContext(Pt), b = f(), p = {
      theme: c,
      token: u,
      hashId: d,
      nonce: () => g == null ? void 0 : g.nonce,
      clientOnly: r.clientOnly,
      // antd is always at top of styles
      order: r.order || -999
    };
    return ji(Object.assign(Object.assign({}, p), {
      clientOnly: !1,
      path: ["Shared", b]
    }), () => [{
      // Link
      "&": lp(u)
    }]), od(m, g), [ji(Object.assign(Object.assign({}, p), {
      path: [i, l, m]
    }), () => {
      const {
        token: v,
        flush: h
      } = vp(u), y = Object.assign({}, u[o]);
      if (r.deprecatedTokens) {
        const {
          deprecatedTokens: R
        } = r;
        R.forEach((_) => {
          let [N, F] = _;
          var A;
          process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && ot(!(y != null && y[N]), `The token '${String(N)}' of ${o} had deprecated, use '${String(F)}' instead.`), (y != null && y[N] || y != null && y[F]) && ((A = y[F]) !== null && A !== void 0 || (y[F] = y == null ? void 0 : y[N]));
        });
      }
      const E = typeof n == "function" ? n($t(v, y ?? {})) : n, C = Object.assign(Object.assign({}, E), y), O = `.${l}`, x = $t(v, {
        componentCls: O,
        prefixCls: l,
        iconCls: `.${m}`,
        antCls: `.${b}`
      }, C), S = t(x, {
        hashId: d,
        prefixCls: l,
        rootPrefixCls: b,
        iconPrefixCls: m,
        overrideComponentToken: y
      });
      return h(o, C), [r.resetStyle === !1 ? null : cp(u, l), S];
    }), d];
  };
}
const gp = (e, t, n, r) => {
  const a = Ln(e, t, n, Object.assign({
    resetStyle: !1,
    // Sub Style should default after root one
    order: -998
  }, r)), o = (i) => {
    let {
      prefixCls: l
    } = i;
    return a(l), null;
  };
  return process.env.NODE_ENV !== "production" && (o.displayName = `SubStyle_${Array.isArray(e) ? e.join(".") : e}`), o;
};
function pp(e, t) {
  const n = e || {}, r = n.inherit === !1 || !t ? Zu : t;
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
    return !Eu(i, c, !0);
  }));
}
var hp = ["children"], id = /* @__PURE__ */ s.createContext({});
function bp(e) {
  var t = e.children, n = wt(e, hp);
  return /* @__PURE__ */ s.createElement(id.Provider, {
    value: n
  }, t);
}
var yp = /* @__PURE__ */ function(e) {
  xo(n, e);
  var t = Oo(n);
  function n() {
    return dn(this, n), t.apply(this, arguments);
  }
  return fn(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(s.Component), ir = "none", Ha = "appear", Ba = "enter", ka = "leave", Ul = "none", Pn = "prepare", Vr = "start", zr = "active", Vs = "end", sd = "prepared";
function Gl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function Sp(e, t) {
  var n = {
    animationend: Gl("Animation", "AnimationEnd"),
    transitionend: Gl("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var Ep = Sp(Gt(), typeof window < "u" ? window : {}), ld = {};
if (Gt()) {
  var Cp = document.createElement("div");
  ld = Cp.style;
}
var Wa = {};
function cd(e) {
  if (Wa[e])
    return Wa[e];
  var t = Ep[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, a = 0; a < r; a += 1) {
      var o = n[a];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in ld)
        return Wa[e] = t[o], Wa[e];
    }
  return "";
}
var ud = cd("animationend"), dd = cd("transitionend"), fd = !!(ud && dd), ql = ud || "animationend", Kl = dd || "transitionend";
function Yl(e, t) {
  if (!e)
    return null;
  if (Je(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const wp = function(e) {
  var t = s.useRef(), n = s.useRef(e);
  n.current = e;
  var r = s.useCallback(function(i) {
    n.current(i);
  }, []);
  function a(i) {
    i && (i.removeEventListener(Kl, r), i.removeEventListener(ql, r));
  }
  function o(i) {
    t.current && t.current !== i && a(t.current), i && i !== t.current && (i.addEventListener(Kl, r), i.addEventListener(ql, r), t.current = i);
  }
  return s.useEffect(function() {
    return function() {
      a(t.current);
    };
  }, []), [o, a];
};
var vd = Gt() ? s.useLayoutEffect : s.useEffect;
const xp = function() {
  var e = s.useRef(null);
  function t() {
    Ct.cancel(e.current);
  }
  function n(r) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var o = Ct(function() {
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
var Op = [Pn, Vr, zr, Vs], Rp = [Pn, sd], md = !1, $p = !0;
function gd(e) {
  return e === zr || e === Vs;
}
const Ip = function(e, t, n) {
  var r = Hr(Ul), a = Y(r, 2), o = a[0], i = a[1], l = xp(), c = Y(l, 2), u = c[0], d = c[1];
  function f() {
    i(Pn, !0);
  }
  var m = t ? Rp : Op;
  return vd(function() {
    if (o !== Ul && o !== Vs) {
      var g = m.indexOf(o), b = m[g + 1], p = n(o);
      p === md ? i(b, !0) : b && u(function(v) {
        function h() {
          v.isCanceled() || i(b, !0);
        }
        p === !0 ? h() : Promise.resolve(p).then(h);
      });
    }
  }, [e, o]), s.useEffect(function() {
    return function() {
      d();
    };
  }, []), [f, o];
};
function Np(e, t, n, r) {
  var a = r.motionEnter, o = a === void 0 ? !0 : a, i = r.motionAppear, l = i === void 0 ? !0 : i, c = r.motionLeave, u = c === void 0 ? !0 : c, d = r.motionDeadline, f = r.motionLeaveImmediately, m = r.onAppearPrepare, g = r.onEnterPrepare, b = r.onLeavePrepare, p = r.onAppearStart, v = r.onEnterStart, h = r.onLeaveStart, y = r.onAppearActive, E = r.onEnterActive, C = r.onLeaveActive, O = r.onAppearEnd, x = r.onEnterEnd, S = r.onLeaveEnd, R = r.onVisibleChanged, _ = Hr(), N = Y(_, 2), F = N[0], A = N[1], M = Hr(ir), D = Y(M, 2), V = D[0], P = D[1], I = Hr(null), T = Y(I, 2), z = T[0], L = T[1], H = s.useRef(!1), W = s.useRef(null);
  function G() {
    return n();
  }
  var U = s.useRef(!1);
  function ne() {
    P(ir, !0), L(null, !0);
  }
  function se(xe) {
    var me = G();
    if (!(xe && !xe.deadline && xe.target !== me)) {
      var pe = U.current, je;
      V === Ha && pe ? je = O == null ? void 0 : O(me, xe) : V === Ba && pe ? je = x == null ? void 0 : x(me, xe) : V === ka && pe && (je = S == null ? void 0 : S(me, xe)), V !== ir && pe && je !== !1 && ne();
    }
  }
  var J = wp(se), X = Y(J, 1), ee = X[0], oe = function(me) {
    var pe, je, Ke;
    switch (me) {
      case Ha:
        return pe = {}, j(pe, Pn, m), j(pe, Vr, p), j(pe, zr, y), pe;
      case Ba:
        return je = {}, j(je, Pn, g), j(je, Vr, v), j(je, zr, E), je;
      case ka:
        return Ke = {}, j(Ke, Pn, b), j(Ke, Vr, h), j(Ke, zr, C), Ke;
      default:
        return {};
    }
  }, Ce = s.useMemo(function() {
    return oe(V);
  }, [V]), be = Ip(V, !e, function(xe) {
    if (xe === Pn) {
      var me = Ce[Pn];
      return me ? me(G()) : md;
    }
    if ($e in Ce) {
      var pe;
      L(((pe = Ce[$e]) === null || pe === void 0 ? void 0 : pe.call(Ce, G(), null)) || null);
    }
    return $e === zr && (ee(G()), d > 0 && (clearTimeout(W.current), W.current = setTimeout(function() {
      se({
        deadline: !0
      });
    }, d))), $e === sd && ne(), $p;
  }), ue = Y(be, 2), q = ue[0], $e = ue[1], Ie = gd($e);
  U.current = Ie, vd(function() {
    A(t);
    var xe = H.current;
    H.current = !0;
    var me;
    !xe && t && l && (me = Ha), xe && t && o && (me = Ba), (xe && !t && u || !xe && f && !t && u) && (me = ka);
    var pe = oe(me);
    me && (e || pe[Pn]) ? (P(me), q()) : P(ir);
  }, [t]), s.useEffect(function() {
    // Cancel appear
    (V === Ha && !l || // Cancel enter
    V === Ba && !o || // Cancel leave
    V === ka && !u) && P(ir);
  }, [l, o, u]), s.useEffect(function() {
    return function() {
      H.current = !1, clearTimeout(W.current);
    };
  }, []);
  var _e = s.useRef(!1);
  s.useEffect(function() {
    F && (_e.current = !0), F !== void 0 && V === ir && ((_e.current || F) && (R == null || R(F)), _e.current = !0);
  }, [F, V]);
  var fe = z;
  return Ce[Pn] && $e === Vr && (fe = k({
    transition: "none"
  }, fe)), [V, $e, fe, F ?? t];
}
function _p(e) {
  var t = e;
  Je(e) === "object" && (t = e.transitionSupport);
  function n(a, o) {
    return !!(a.motionName && t && o !== !1);
  }
  var r = /* @__PURE__ */ s.forwardRef(function(a, o) {
    var i = a.visible, l = i === void 0 ? !0 : i, c = a.removeOnLeave, u = c === void 0 ? !0 : c, d = a.forceRender, f = a.children, m = a.motionName, g = a.leavedClassName, b = a.eventProps, p = s.useContext(id), v = p.motion, h = n(a, v), y = s.useRef(), E = s.useRef();
    function C() {
      try {
        return y.current instanceof HTMLElement ? y.current : ca(E.current);
      } catch {
        return null;
      }
    }
    var O = Np(h, l, C, a), x = Y(O, 4), S = x[0], R = x[1], _ = x[2], N = x[3], F = s.useRef(N);
    N && (F.current = !0);
    var A = s.useCallback(function(L) {
      y.current = L, Is(o, L);
    }, [o]), M, D = k(k({}, b), {}, {
      visible: l
    });
    if (!f)
      M = null;
    else if (S === ir)
      N ? M = f(k({}, D), A) : !u && F.current && g ? M = f(k(k({}, D), {}, {
        className: g
      }), A) : d || !u && !g ? M = f(k(k({}, D), {}, {
        style: {
          display: "none"
        }
      }), A) : M = null;
    else {
      var V, P;
      R === Pn ? P = "prepare" : gd(R) ? P = "active" : R === Vr && (P = "start");
      var I = Yl(m, "".concat(S, "-").concat(P));
      M = f(k(k({}, D), {}, {
        className: Oe(Yl(m, S), (V = {}, j(V, I, I && P), j(V, m, typeof m == "string"), V)),
        style: _
      }), A);
    }
    if (/* @__PURE__ */ s.isValidElement(M) && wa(M)) {
      var T = M, z = T.ref;
      z || (M = /* @__PURE__ */ s.cloneElement(M, {
        ref: A
      }));
    }
    return /* @__PURE__ */ s.createElement(yp, {
      ref: E
    }, M);
  });
  return r.displayName = "CSSMotion", r;
}
const xa = _p(fd);
var Ui = "add", Gi = "keep", qi = "remove", oi = "removed";
function Pp(e) {
  var t;
  return e && Je(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, k(k({}, t), {}, {
    key: String(t.key)
  });
}
function Ki() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(Pp);
}
function Tp() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, a = t.length, o = Ki(e), i = Ki(t);
  o.forEach(function(u) {
    for (var d = !1, f = r; f < a; f += 1) {
      var m = i[f];
      if (m.key === u.key) {
        r < f && (n = n.concat(i.slice(r, f).map(function(g) {
          return k(k({}, g), {}, {
            status: Ui
          });
        })), r = f), n.push(k(k({}, m), {}, {
          status: Gi
        })), r += 1, d = !0;
        break;
      }
    }
    d || n.push(k(k({}, u), {}, {
      status: qi
    }));
  }), r < a && (n = n.concat(i.slice(r).map(function(u) {
    return k(k({}, u), {}, {
      status: Ui
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
      var f = d.key, m = d.status;
      return f !== u || m !== qi;
    }), n.forEach(function(d) {
      d.key === u && (d.status = Gi);
    });
  }), n;
}
var Mp = ["component", "children", "onVisibleChanged", "onAllRemoved"], Ap = ["status"], Fp = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Dp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xa, n = /* @__PURE__ */ function(r) {
    xo(o, r);
    var a = Oo(o);
    function o() {
      var i;
      dn(this, o);
      for (var l = arguments.length, c = new Array(l), u = 0; u < l; u++)
        c[u] = arguments[u];
      return i = a.call.apply(a, [this].concat(c)), j(ct(i), "state", {
        keyEntities: []
      }), j(ct(i), "removeKey", function(d) {
        var f = i.state.keyEntities, m = f.map(function(g) {
          return g.key !== d ? g : k(k({}, g), {}, {
            status: oi
          });
        });
        return i.setState({
          keyEntities: m
        }), m.filter(function(g) {
          var b = g.status;
          return b !== oi;
        }).length;
      }), i;
    }
    return fn(o, [{
      key: "render",
      value: function() {
        var l = this, c = this.state.keyEntities, u = this.props, d = u.component, f = u.children, m = u.onVisibleChanged, g = u.onAllRemoved, b = wt(u, Mp), p = d || s.Fragment, v = {};
        return Fp.forEach(function(h) {
          v[h] = b[h], delete b[h];
        }), delete b.keys, /* @__PURE__ */ s.createElement(p, b, c.map(function(h, y) {
          var E = h.status, C = wt(h, Ap), O = E === Ui || E === Gi;
          return /* @__PURE__ */ s.createElement(t, Ue({}, v, {
            key: C.key,
            visible: O,
            eventProps: C,
            onVisibleChanged: function(S) {
              if (m == null || m(S, {
                key: C.key
              }), !S) {
                var R = l.removeKey(C.key);
                R === 0 && g && g();
              }
            }
          }), function(x, S) {
            return f(k(k({}, x), {}, {
              index: y
            }), S);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(l, c) {
        var u = l.keys, d = c.keyEntities, f = Ki(u), m = Tp(d, f);
        return {
          keyEntities: m.filter(function(g) {
            var b = d.find(function(p) {
              var v = p.key;
              return g.key === v;
            });
            return !(b && b.status === oi && g.status === qi);
          })
        };
      }
    }]), o;
  }(s.Component);
  return j(n, "defaultProps", {
    component: "div"
  }), n;
}
Dp(fd);
function jp(e) {
  const {
    children: t
  } = e, [, n] = Sr(), {
    motion: r
  } = n, a = s.useRef(!1);
  return a.current = a.current || r === !1, a.current ? /* @__PURE__ */ s.createElement(bp, {
    motion: r
  }, t) : t;
}
const pd = /* @__PURE__ */ s.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return Xn("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (pd.displayName = "PropWarning");
const Lp = process.env.NODE_ENV !== "production" ? pd : () => null;
var Vp = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
let Yi = !1;
process.env.NODE_ENV;
const zp = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form", "select", "button"], Hp = "ant";
let hd;
function Bp() {
  return hd || Hp;
}
function kp(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const Wp = (e) => {
  let {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r
  } = e;
  t !== void 0 && (hd = t), r && kp(r) && (process.env.NODE_ENV !== "production" && No(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), tp(Bp(), r));
}, Up = (e) => {
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
    dropdownMatchSelectWidth: m,
    popupMatchSelectWidth: g,
    popupOverflow: b,
    legacyLocale: p,
    parentContext: v,
    iconPrefixCls: h,
    theme: y,
    componentDisabled: E,
    segmented: C,
    statistic: O,
    spin: x,
    calendar: S,
    carousel: R,
    cascader: _,
    collapse: N,
    typography: F,
    checkbox: A,
    descriptions: M,
    divider: D,
    drawer: V,
    skeleton: P,
    steps: I,
    image: T,
    layout: z,
    list: L,
    mentions: H,
    modal: W,
    progress: G,
    result: U,
    slider: ne,
    breadcrumb: se,
    menu: J,
    pagination: X,
    input: ee,
    empty: oe,
    badge: Ce,
    radio: be,
    rate: ue,
    switch: q,
    transfer: $e,
    avatar: Ie,
    message: _e,
    tag: fe,
    table: xe,
    card: me,
    tabs: pe,
    timeline: je,
    timePicker: Ke,
    upload: Le,
    notification: he,
    tree: ge,
    colorPicker: Ve,
    datePicker: tt,
    flex: qe,
    wave: st,
    warning: ke
  } = e, Ft = s.useCallback((ie, we) => {
    const {
      prefixCls: Xe
    } = e;
    if (we)
      return we;
    const Qe = Xe || v.getPrefixCls("");
    return ie ? `${Qe}-${ie}` : Qe;
  }, [v.getPrefixCls, e.prefixCls]), pt = h || v.iconPrefixCls || td, dt = n || v.csp;
  od(pt, dt);
  const nt = pp(y, v.theme);
  process.env.NODE_ENV !== "production" && (Yi = Yi || !!nt);
  const yt = {
    csp: dt,
    autoInsertSpaceInButton: r,
    alert: a,
    anchor: o,
    locale: l || p,
    direction: u,
    space: d,
    virtual: f,
    popupMatchSelectWidth: g ?? m,
    popupOverflow: b,
    getPrefixCls: Ft,
    iconPrefixCls: pt,
    theme: nt,
    segmented: C,
    statistic: O,
    spin: x,
    calendar: S,
    carousel: R,
    cascader: _,
    collapse: N,
    typography: F,
    checkbox: A,
    descriptions: M,
    divider: D,
    drawer: V,
    skeleton: P,
    steps: I,
    image: T,
    input: ee,
    layout: z,
    list: L,
    mentions: H,
    modal: W,
    progress: G,
    result: U,
    slider: ne,
    breadcrumb: se,
    menu: J,
    pagination: X,
    empty: oe,
    badge: Ce,
    radio: be,
    rate: ue,
    switch: q,
    transfer: $e,
    avatar: Ie,
    message: _e,
    tag: fe,
    table: xe,
    card: me,
    tabs: pe,
    timeline: je,
    timePicker: Ke,
    upload: Le,
    notification: he,
    tree: ge,
    colorPicker: Ve,
    datePicker: tt,
    flex: qe,
    wave: st,
    warning: ke
  }, ut = Object.assign({}, v);
  Object.keys(yt).forEach((ie) => {
    yt[ie] !== void 0 && (ut[ie] = yt[ie]);
  }), zp.forEach((ie) => {
    const we = e[ie];
    we && (ut[ie] = we);
  });
  const rt = Eo(() => ut, ut, (ie, we) => {
    const Xe = Object.keys(ie), Qe = Object.keys(we);
    return Xe.length !== Qe.length || Xe.some((Ae) => ie[Ae] !== we[Ae]);
  }), Ye = s.useMemo(() => ({
    prefixCls: pt,
    csp: dt
  }), [pt, dt]);
  let ye = /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Lp, {
    dropdownMatchSelectWidth: m
  }), t);
  const Se = s.useMemo(() => {
    var ie, we, Xe, Qe;
    return Lr(((ie = Gr.Form) === null || ie === void 0 ? void 0 : ie.defaultValidateMessages) || {}, ((Xe = (we = rt.locale) === null || we === void 0 ? void 0 : we.Form) === null || Xe === void 0 ? void 0 : Xe.defaultValidateMessages) || {}, ((Qe = rt.form) === null || Qe === void 0 ? void 0 : Qe.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [rt, i == null ? void 0 : i.validateMessages]);
  Object.keys(Se).length > 0 && (ye = /* @__PURE__ */ s.createElement(ug.Provider, {
    value: Se
  }, ye)), l && (ye = /* @__PURE__ */ s.createElement(Sg, {
    locale: l,
    _ANT_MARK__: Gu
  }, ye)), (pt || dt) && (ye = /* @__PURE__ */ s.createElement(Ds.Provider, {
    value: Ye
  }, ye)), c && (ye = /* @__PURE__ */ s.createElement(rp, {
    size: c
  }, ye)), ye = /* @__PURE__ */ s.createElement(jp, null, ye);
  const Te = s.useMemo(() => {
    const ie = nt || {}, {
      algorithm: we,
      token: Xe,
      components: Qe
    } = ie, Ae = Vp(ie, ["algorithm", "token", "components"]), re = we && (!Array.isArray(we) || we.length > 0) ? Ti(we) : Ju, te = {};
    Object.entries(Qe || {}).forEach((Me) => {
      let [ze, at] = Me;
      const lt = Object.assign({}, at);
      "algorithm" in lt && (lt.algorithm === !0 ? lt.theme = re : (Array.isArray(lt.algorithm) || typeof lt.algorithm == "function") && (lt.theme = Ti(lt.algorithm)), delete lt.algorithm), te[ze] = lt;
    });
    const de = Object.assign(Object.assign({}, ya), Xe);
    return Object.assign(Object.assign({}, Ae), {
      theme: re,
      token: de,
      components: te,
      override: Object.assign({
        override: de
      }, te)
    });
  }, [nt]);
  return y && (ye = /* @__PURE__ */ s.createElement(ed.Provider, {
    value: Te
  }, ye)), rt.warning && (ye = /* @__PURE__ */ s.createElement(Wu.Provider, {
    value: rt.warning
  }, ye)), E !== void 0 && (ye = /* @__PURE__ */ s.createElement(np, {
    disabled: E
  }, ye)), /* @__PURE__ */ s.createElement(Pt.Provider, {
    value: rt
  }, ye);
}, rr = (e) => {
  const t = s.useContext(Pt), n = s.useContext(Ls);
  return /* @__PURE__ */ s.createElement(Up, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
rr.ConfigContext = Pt;
rr.SizeContext = _o;
rr.config = Wp;
rr.useConfig = ap;
Object.defineProperty(rr, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && No(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), _o)
});
process.env.NODE_ENV !== "production" && (rr.displayName = "ConfigProvider");
function bd(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Gp(e) {
  return bd(e) instanceof ShadowRoot;
}
function so(e) {
  return Gp(e) ? bd(e) : null;
}
function qp(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function Kp(e, t) {
  ot(e, "[@ant-design/icons] ".concat(t));
}
function Xl(e) {
  return Je(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (Je(e.icon) === "object" || typeof e.icon == "function");
}
function Ql() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[qp(n)] = r;
    }
    return t;
  }, {});
}
function Xi(e, t, n) {
  return n ? /* @__PURE__ */ Re.createElement(e.tag, k(k({
    key: t
  }, Ql(e.attrs)), n), (e.children || []).map(function(r, a) {
    return Xi(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : /* @__PURE__ */ Re.createElement(e.tag, k({
    key: t
  }, Ql(e.attrs)), (e.children || []).map(function(r, a) {
    return Xi(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function yd(e) {
  return hr(e)[0];
}
function Sd(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Yp = `
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
`, Xp = function(t) {
  var n = s.useContext(Ds), r = n.csp, a = n.prefixCls, o = Yp;
  a && (o = o.replace(/anticon/g, a)), s.useEffect(function() {
    var i = t.current, l = so(i);
    Wr(o, "@ant-design-icons", {
      prepend: !0,
      csp: r,
      attachTo: l
    });
  }, []);
}, Qp = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], fa = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Jp(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  fa.primaryColor = t, fa.secondaryColor = n || yd(t), fa.calculated = !!n;
}
function Zp() {
  return k({}, fa);
}
var To = function(t) {
  var n = t.icon, r = t.className, a = t.onClick, o = t.style, i = t.primaryColor, l = t.secondaryColor, c = wt(t, Qp), u = s.useRef(), d = fa;
  if (i && (d = {
    primaryColor: i,
    secondaryColor: l || yd(i)
  }), Xp(u), Kp(Xl(n), "icon should be icon definiton, but got ".concat(n)), !Xl(n))
    return null;
  var f = n;
  return f && typeof f.icon == "function" && (f = k(k({}, f), {}, {
    icon: f.icon(d.primaryColor, d.secondaryColor)
  })), Xi(f.icon, "svg-".concat(f.name), k(k({
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
To.displayName = "IconReact";
To.getTwoToneColors = Zp;
To.setTwoToneColors = Jp;
const zs = To;
function Ed(e) {
  var t = Sd(e), n = Y(t, 2), r = n[0], a = n[1];
  return zs.setTwoToneColors({
    primaryColor: r,
    secondaryColor: a
  });
}
function eh() {
  var e = zs.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var th = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Ed(jg.primary);
var Mo = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n, r = e.className, a = e.icon, o = e.spin, i = e.rotate, l = e.tabIndex, c = e.onClick, u = e.twoToneColor, d = wt(e, th), f = s.useContext(Ds), m = f.prefixCls, g = m === void 0 ? "anticon" : m, b = f.rootClassName, p = Oe(b, g, (n = {}, j(n, "".concat(g, "-").concat(a.name), !!a.name), j(n, "".concat(g, "-spin"), !!o || a.name === "loading"), n), r), v = l;
  v === void 0 && c && (v = -1);
  var h = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, y = Sd(u), E = Y(y, 2), C = E[0], O = E[1];
  return /* @__PURE__ */ s.createElement("span", Ue({
    role: "img",
    "aria-label": a.name
  }, d, {
    ref: t,
    tabIndex: v,
    onClick: c,
    className: p
  }), /* @__PURE__ */ s.createElement(zs, {
    icon: a,
    primaryColor: C,
    secondaryColor: O,
    style: h
  }));
});
Mo.displayName = "AntdIcon";
Mo.getTwoToneColor = eh;
Mo.setTwoToneColor = Ed;
const xn = Mo;
var nh = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" };
const rh = nh;
var Cd = function(t, n) {
  return /* @__PURE__ */ s.createElement(xn, Ue({}, t, {
    ref: n,
    icon: rh
  }));
};
process.env.NODE_ENV !== "production" && (Cd.displayName = "CloseCircleFilled");
const Hs = /* @__PURE__ */ s.forwardRef(Cd);
var ah = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" };
const oh = ah;
var wd = function(t, n) {
  return /* @__PURE__ */ s.createElement(xn, Ue({}, t, {
    ref: n,
    icon: oh
  }));
};
process.env.NODE_ENV !== "production" && (wd.displayName = "CloseOutlined");
const ih = /* @__PURE__ */ s.forwardRef(wd);
var sh = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, lh = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, ch = "".concat(sh, " ").concat(lh).split(/[\s\n]+/), uh = "aria-", dh = "data-";
function Jl(e, t) {
  return e.indexOf(t) === 0;
}
function lo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = k({}, t);
  var r = {};
  return Object.keys(e).forEach(function(a) {
    // Aria
    (n.aria && (a === "role" || Jl(a, uh)) || // Data
    n.data && Jl(a, dh) || // Attr
    n.attr && ch.includes(a)) && (r[a] = e[a]);
  }), r;
}
const {
  isValidElement: co
} = So;
function fh(e) {
  return e && co(e) && e.type === s.Fragment;
}
function vh(e, t, n) {
  return co(e) ? /* @__PURE__ */ s.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t;
}
function uo(e, t) {
  return vh(e, e, t);
}
var ce = {
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
    n >= ce.F1 && n <= ce.F12)
      return !1;
    switch (n) {
      case ce.ALT:
      case ce.CAPS_LOCK:
      case ce.CONTEXT_MENU:
      case ce.CTRL:
      case ce.DOWN:
      case ce.END:
      case ce.ESC:
      case ce.HOME:
      case ce.INSERT:
      case ce.LEFT:
      case ce.MAC_FF_META:
      case ce.META:
      case ce.NUMLOCK:
      case ce.NUM_CENTER:
      case ce.PAGE_DOWN:
      case ce.PAGE_UP:
      case ce.PAUSE:
      case ce.PRINT_SCREEN:
      case ce.RIGHT:
      case ce.SHIFT:
      case ce.UP:
      case ce.WIN_KEY:
      case ce.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= ce.ZERO && t <= ce.NINE || t >= ce.NUM_ZERO && t <= ce.NUM_MULTIPLY || t >= ce.A && t <= ce.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case ce.SPACE:
      case ce.QUESTION_MARK:
      case ce.NUM_PLUS:
      case ce.NUM_MINUS:
      case ce.NUM_PERIOD:
      case ce.NUM_DIVISION:
      case ce.SEMICOLON:
      case ce.DASH:
      case ce.EQUALS:
      case ce.COMMA:
      case ce.PERIOD:
      case ce.SLASH:
      case ce.APOSTROPHE:
      case ce.SINGLE_QUOTE:
      case ce.OPEN_SQUARE_BRACKET:
      case ce.BACKSLASH:
      case ce.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, mh = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const gh = mh;
var xd = function(t, n) {
  return /* @__PURE__ */ s.createElement(xn, Ue({}, t, {
    ref: n,
    icon: gh
  }));
};
process.env.NODE_ENV !== "production" && (xd.displayName = "LoadingOutlined");
const Od = /* @__PURE__ */ s.forwardRef(xd);
function Qt() {
  Qt = function() {
    return t;
  };
  var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, a = Object.defineProperty || function(P, I, T) {
    P[I] = T.value;
  }, o = typeof Symbol == "function" ? Symbol : {}, i = o.iterator || "@@iterator", l = o.asyncIterator || "@@asyncIterator", c = o.toStringTag || "@@toStringTag";
  function u(P, I, T) {
    return Object.defineProperty(P, I, {
      value: T,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), P[I];
  }
  try {
    u({}, "");
  } catch {
    u = function(T, z, L) {
      return T[z] = L;
    };
  }
  function d(P, I, T, z) {
    var L = I && I.prototype instanceof h ? I : h, H = Object.create(L.prototype), W = new D(z || []);
    return a(H, "_invoke", {
      value: N(P, T, W)
    }), H;
  }
  function f(P, I, T) {
    try {
      return {
        type: "normal",
        arg: P.call(I, T)
      };
    } catch (z) {
      return {
        type: "throw",
        arg: z
      };
    }
  }
  t.wrap = d;
  var m = "suspendedStart", g = "suspendedYield", b = "executing", p = "completed", v = {};
  function h() {
  }
  function y() {
  }
  function E() {
  }
  var C = {};
  u(C, i, function() {
    return this;
  });
  var O = Object.getPrototypeOf, x = O && O(O(V([])));
  x && x !== n && r.call(x, i) && (C = x);
  var S = E.prototype = h.prototype = Object.create(C);
  function R(P) {
    ["next", "throw", "return"].forEach(function(I) {
      u(P, I, function(T) {
        return this._invoke(I, T);
      });
    });
  }
  function _(P, I) {
    function T(L, H, W, G) {
      var U = f(P[L], P, H);
      if (U.type !== "throw") {
        var ne = U.arg, se = ne.value;
        return se && Je(se) == "object" && r.call(se, "__await") ? I.resolve(se.__await).then(function(J) {
          T("next", J, W, G);
        }, function(J) {
          T("throw", J, W, G);
        }) : I.resolve(se).then(function(J) {
          ne.value = J, W(ne);
        }, function(J) {
          return T("throw", J, W, G);
        });
      }
      G(U.arg);
    }
    var z;
    a(this, "_invoke", {
      value: function(H, W) {
        function G() {
          return new I(function(U, ne) {
            T(H, W, U, ne);
          });
        }
        return z = z ? z.then(G, G) : G();
      }
    });
  }
  function N(P, I, T) {
    var z = m;
    return function(L, H) {
      if (z === b)
        throw new Error("Generator is already running");
      if (z === p) {
        if (L === "throw")
          throw H;
        return {
          value: e,
          done: !0
        };
      }
      for (T.method = L, T.arg = H; ; ) {
        var W = T.delegate;
        if (W) {
          var G = F(W, T);
          if (G) {
            if (G === v)
              continue;
            return G;
          }
        }
        if (T.method === "next")
          T.sent = T._sent = T.arg;
        else if (T.method === "throw") {
          if (z === m)
            throw z = p, T.arg;
          T.dispatchException(T.arg);
        } else
          T.method === "return" && T.abrupt("return", T.arg);
        z = b;
        var U = f(P, I, T);
        if (U.type === "normal") {
          if (z = T.done ? p : g, U.arg === v)
            continue;
          return {
            value: U.arg,
            done: T.done
          };
        }
        U.type === "throw" && (z = p, T.method = "throw", T.arg = U.arg);
      }
    };
  }
  function F(P, I) {
    var T = I.method, z = P.iterator[T];
    if (z === e)
      return I.delegate = null, T === "throw" && P.iterator.return && (I.method = "return", I.arg = e, F(P, I), I.method === "throw") || T !== "return" && (I.method = "throw", I.arg = new TypeError("The iterator does not provide a '" + T + "' method")), v;
    var L = f(z, P.iterator, I.arg);
    if (L.type === "throw")
      return I.method = "throw", I.arg = L.arg, I.delegate = null, v;
    var H = L.arg;
    return H ? H.done ? (I[P.resultName] = H.value, I.next = P.nextLoc, I.method !== "return" && (I.method = "next", I.arg = e), I.delegate = null, v) : H : (I.method = "throw", I.arg = new TypeError("iterator result is not an object"), I.delegate = null, v);
  }
  function A(P) {
    var I = {
      tryLoc: P[0]
    };
    1 in P && (I.catchLoc = P[1]), 2 in P && (I.finallyLoc = P[2], I.afterLoc = P[3]), this.tryEntries.push(I);
  }
  function M(P) {
    var I = P.completion || {};
    I.type = "normal", delete I.arg, P.completion = I;
  }
  function D(P) {
    this.tryEntries = [{
      tryLoc: "root"
    }], P.forEach(A, this), this.reset(!0);
  }
  function V(P) {
    if (P || P === "") {
      var I = P[i];
      if (I)
        return I.call(P);
      if (typeof P.next == "function")
        return P;
      if (!isNaN(P.length)) {
        var T = -1, z = function L() {
          for (; ++T < P.length; )
            if (r.call(P, T))
              return L.value = P[T], L.done = !1, L;
          return L.value = e, L.done = !0, L;
        };
        return z.next = z;
      }
    }
    throw new TypeError(Je(P) + " is not iterable");
  }
  return y.prototype = E, a(S, "constructor", {
    value: E,
    configurable: !0
  }), a(E, "constructor", {
    value: y,
    configurable: !0
  }), y.displayName = u(E, c, "GeneratorFunction"), t.isGeneratorFunction = function(P) {
    var I = typeof P == "function" && P.constructor;
    return !!I && (I === y || (I.displayName || I.name) === "GeneratorFunction");
  }, t.mark = function(P) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(P, E) : (P.__proto__ = E, u(P, c, "GeneratorFunction")), P.prototype = Object.create(S), P;
  }, t.awrap = function(P) {
    return {
      __await: P
    };
  }, R(_.prototype), u(_.prototype, l, function() {
    return this;
  }), t.AsyncIterator = _, t.async = function(P, I, T, z, L) {
    L === void 0 && (L = Promise);
    var H = new _(d(P, I, T, z), L);
    return t.isGeneratorFunction(I) ? H : H.next().then(function(W) {
      return W.done ? W.value : H.next();
    });
  }, R(S), u(S, c, "Generator"), u(S, i, function() {
    return this;
  }), u(S, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(P) {
    var I = Object(P), T = [];
    for (var z in I)
      T.push(z);
    return T.reverse(), function L() {
      for (; T.length; ) {
        var H = T.pop();
        if (H in I)
          return L.value = H, L.done = !1, L;
      }
      return L.done = !0, L;
    };
  }, t.values = V, D.prototype = {
    constructor: D,
    reset: function(I) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(M), !I)
        for (var T in this)
          T.charAt(0) === "t" && r.call(this, T) && !isNaN(+T.slice(1)) && (this[T] = e);
    },
    stop: function() {
      this.done = !0;
      var I = this.tryEntries[0].completion;
      if (I.type === "throw")
        throw I.arg;
      return this.rval;
    },
    dispatchException: function(I) {
      if (this.done)
        throw I;
      var T = this;
      function z(ne, se) {
        return W.type = "throw", W.arg = I, T.next = ne, se && (T.method = "next", T.arg = e), !!se;
      }
      for (var L = this.tryEntries.length - 1; L >= 0; --L) {
        var H = this.tryEntries[L], W = H.completion;
        if (H.tryLoc === "root")
          return z("end");
        if (H.tryLoc <= this.prev) {
          var G = r.call(H, "catchLoc"), U = r.call(H, "finallyLoc");
          if (G && U) {
            if (this.prev < H.catchLoc)
              return z(H.catchLoc, !0);
            if (this.prev < H.finallyLoc)
              return z(H.finallyLoc);
          } else if (G) {
            if (this.prev < H.catchLoc)
              return z(H.catchLoc, !0);
          } else {
            if (!U)
              throw new Error("try statement without catch or finally");
            if (this.prev < H.finallyLoc)
              return z(H.finallyLoc);
          }
        }
      }
    },
    abrupt: function(I, T) {
      for (var z = this.tryEntries.length - 1; z >= 0; --z) {
        var L = this.tryEntries[z];
        if (L.tryLoc <= this.prev && r.call(L, "finallyLoc") && this.prev < L.finallyLoc) {
          var H = L;
          break;
        }
      }
      H && (I === "break" || I === "continue") && H.tryLoc <= T && T <= H.finallyLoc && (H = null);
      var W = H ? H.completion : {};
      return W.type = I, W.arg = T, H ? (this.method = "next", this.next = H.finallyLoc, v) : this.complete(W);
    },
    complete: function(I, T) {
      if (I.type === "throw")
        throw I.arg;
      return I.type === "break" || I.type === "continue" ? this.next = I.arg : I.type === "return" ? (this.rval = this.arg = I.arg, this.method = "return", this.next = "end") : I.type === "normal" && T && (this.next = T), v;
    },
    finish: function(I) {
      for (var T = this.tryEntries.length - 1; T >= 0; --T) {
        var z = this.tryEntries[T];
        if (z.finallyLoc === I)
          return this.complete(z.completion, z.afterLoc), M(z), v;
      }
    },
    catch: function(I) {
      for (var T = this.tryEntries.length - 1; T >= 0; --T) {
        var z = this.tryEntries[T];
        if (z.tryLoc === I) {
          var L = z.completion;
          if (L.type === "throw") {
            var H = L.arg;
            M(z);
          }
          return H;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(I, T, z) {
      return this.delegate = {
        iterator: V(I),
        resultName: T,
        nextLoc: z
      }, this.method === "next" && (this.arg = e), v;
    }
  }, t;
}
function Zl(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i), c = l.value;
  } catch (u) {
    n(u);
    return;
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function Er(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, a) {
      var o = e.apply(t, n);
      function i(c) {
        Zl(o, r, a, i, l, "next", c);
      }
      function l(c) {
        Zl(o, r, a, i, l, "throw", c);
      }
      i(void 0);
    });
  };
}
var Oa = k({}, lv), ph = Oa.version, hh = Oa.render, bh = Oa.unmountComponentAtNode, Ao;
try {
  var yh = Number((ph || "").split(".")[0]);
  yh >= 18 && (Ao = Oa.createRoot);
} catch {
}
function ec(e) {
  var t = Oa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && Je(t) === "object" && (t.usingClientEntryPoint = e);
}
var fo = "__rc_react_root__";
function Sh(e, t) {
  ec(!0);
  var n = t[fo] || Ao(t);
  ec(!1), n.render(e), t[fo] = n;
}
function Eh(e, t) {
  hh(e, t);
}
function Ch(e, t) {
  if (Ao) {
    Sh(e, t);
    return;
  }
  Eh(e, t);
}
function wh(e) {
  return Qi.apply(this, arguments);
}
function Qi() {
  return Qi = Er(/* @__PURE__ */ Qt().mark(function e(t) {
    return Qt().wrap(function(r) {
      for (; ; )
        switch (r.prev = r.next) {
          case 0:
            return r.abrupt("return", Promise.resolve().then(function() {
              var a;
              (a = t[fo]) === null || a === void 0 || a.unmount(), delete t[fo];
            }));
          case 1:
          case "end":
            return r.stop();
        }
    }, e);
  })), Qi.apply(this, arguments);
}
function xh(e) {
  bh(e);
}
function Oh(e) {
  return Ji.apply(this, arguments);
}
function Ji() {
  return Ji = Er(/* @__PURE__ */ Qt().mark(function e(t) {
    return Qt().wrap(function(r) {
      for (; ; )
        switch (r.prev = r.next) {
          case 0:
            if (Ao === void 0) {
              r.next = 2;
              break;
            }
            return r.abrupt("return", wh(t));
          case 2:
            xh(t);
          case 3:
          case "end":
            return r.stop();
        }
    }, e);
  })), Ji.apply(this, arguments);
}
const Rh = (e, t, n) => n !== void 0 ? n : `${e}-${t}`, Rd = function(e) {
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
}, $h = (e) => {
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
}, Ih = Ln("Wave", (e) => [$h(e)]);
function Nh(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function ii(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && Nh(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function _h(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: r
  } = getComputedStyle(e);
  return ii(t) ? t : ii(n) ? n : ii(r) ? r : null;
}
const $d = "ant-wave-target";
function si(e) {
  return Number.isNaN(e) ? 0 : e;
}
const Ph = (e) => {
  const {
    className: t,
    target: n,
    component: r
  } = e, a = s.useRef(null), [o, i] = s.useState(null), [l, c] = s.useState([]), [u, d] = s.useState(0), [f, m] = s.useState(0), [g, b] = s.useState(0), [p, v] = s.useState(0), [h, y] = s.useState(!1), E = {
    left: u,
    top: f,
    width: g,
    height: p,
    borderRadius: l.map((x) => `${x}px`).join(" ")
  };
  o && (E["--wave-color"] = o);
  function C() {
    const x = getComputedStyle(n);
    i(_h(n));
    const S = x.position === "static", {
      borderLeftWidth: R,
      borderTopWidth: _
    } = x;
    d(S ? n.offsetLeft : si(-parseFloat(R))), m(S ? n.offsetTop : si(-parseFloat(_))), b(n.offsetWidth), v(n.offsetHeight);
    const {
      borderTopLeftRadius: N,
      borderTopRightRadius: F,
      borderBottomLeftRadius: A,
      borderBottomRightRadius: M
    } = x;
    c([N, F, M, A].map((D) => si(parseFloat(D))));
  }
  if (s.useEffect(() => {
    if (n) {
      const x = Ct(() => {
        C(), y(!0);
      });
      let S;
      return typeof ResizeObserver < "u" && (S = new ResizeObserver(C), S.observe(n)), () => {
        Ct.cancel(x), S == null || S.disconnect();
      };
    }
  }, []), !h)
    return null;
  const O = (r === "Checkbox" || r === "Radio") && (n == null ? void 0 : n.classList.contains($d));
  return /* @__PURE__ */ s.createElement(xa, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (x, S) => {
      var R;
      if (S.deadline || S.propertyName === "opacity") {
        const _ = (R = a.current) === null || R === void 0 ? void 0 : R.parentElement;
        Oh(_).then(() => {
          _ == null || _.remove();
        });
      }
      return !1;
    }
  }, (x) => {
    let {
      className: S
    } = x;
    return /* @__PURE__ */ s.createElement("div", {
      ref: a,
      className: Oe(t, {
        "wave-quick": O
      }, S),
      style: E
    });
  });
}, Th = (e, t) => {
  var n;
  const {
    component: r
  } = t;
  if (r === "Checkbox" && !(!((n = e.querySelector("input")) === null || n === void 0) && n.checked))
    return;
  const a = document.createElement("div");
  a.style.position = "absolute", a.style.left = "0px", a.style.top = "0px", e == null || e.insertBefore(a, e == null ? void 0 : e.firstChild), Ch(/* @__PURE__ */ s.createElement(Ph, Object.assign({}, t, {
    target: e
  })), a);
}, Mh = Th;
function Ah(e, t, n) {
  const {
    wave: r
  } = s.useContext(Pt), [, a, o] = Sr(), i = cn((u) => {
    const d = e.current;
    if (r != null && r.disabled || !d)
      return;
    const f = d.querySelector(`.${$d}`) || d, {
      showEffect: m
    } = r || {};
    (m || Mh)(f, {
      className: t,
      token: a,
      component: n,
      event: u,
      hashId: o
    });
  }), l = s.useRef();
  return (u) => {
    Ct.cancel(l.current), l.current = Ct(() => {
      i(u);
    });
  };
}
const Id = (e) => {
  const {
    children: t,
    disabled: n,
    component: r
  } = e, {
    getPrefixCls: a
  } = s.useContext(Pt), o = s.useRef(null), i = a("wave"), [, l] = Ih(i), c = Ah(o, Oe(i, l), r);
  if (Re.useEffect(() => {
    const d = o.current;
    if (!d || d.nodeType !== 1 || n)
      return;
    const f = (m) => {
      !Rd(m.target) || // No need wave
      !d.getAttribute || d.getAttribute("disabled") || d.disabled || d.className.includes("disabled") || d.className.includes("-leave") || c(m);
    };
    return d.addEventListener("click", f, !0), () => {
      d.removeEventListener("click", f, !0);
    };
  }, [n]), !/* @__PURE__ */ Re.isValidElement(t))
    return t ?? null;
  const u = wa(t) ? jn(t.ref, o) : o;
  return uo(t, {
    ref: u
  });
};
process.env.NODE_ENV !== "production" && (Id.displayName = "Wave");
const Fh = Id, Dh = (e) => {
  const t = Re.useContext(_o);
  return Re.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, Cr = Dh, jh = (e) => {
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
}, Lh = jh, Vh = (e) => {
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
}, zh = (e) => {
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
}, Nd = Ln("Space", (e) => {
  const t = $t(e, {
    spaceGapSmallSize: e.paddingXS,
    spaceGapMiddleSize: e.padding,
    spaceGapLargeSize: e.paddingLG
  });
  return [Vh(t), zh(t), Lh(t)];
}, () => ({}), {
  // Space component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/40315
  resetStyle: !1
});
var _d = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Fo = /* @__PURE__ */ s.createContext(null), Ra = (e, t) => {
  const n = s.useContext(Fo), r = s.useMemo(() => {
    if (!n)
      return "";
    const {
      compactDirection: a,
      isFirstItem: o,
      isLastItem: i
    } = n, l = a === "vertical" ? "-vertical-" : "-";
    return Oe(`${e}-compact${l}item`, {
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
}, vo = (e) => {
  let {
    children: t
  } = e;
  return /* @__PURE__ */ s.createElement(Fo.Provider, {
    value: null
  }, t);
}, Hh = (e) => {
  var {
    children: t
  } = e, n = _d(e, ["children"]);
  return /* @__PURE__ */ s.createElement(Fo.Provider, {
    value: n
  }, t);
}, Bh = (e) => {
  const {
    getPrefixCls: t,
    direction: n
  } = s.useContext(Pt), {
    size: r,
    direction: a,
    block: o,
    prefixCls: i,
    className: l,
    rootClassName: c,
    children: u
  } = e, d = _d(e, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]), f = Cr((E) => r ?? E), m = t("space-compact", i), [g, b] = Nd(m), p = Oe(m, b, {
    [`${m}-rtl`]: n === "rtl",
    [`${m}-block`]: o,
    [`${m}-vertical`]: a === "vertical"
  }, l, c), v = s.useContext(Fo), h = Dn(u), y = s.useMemo(() => h.map((E, C) => {
    const O = E && E.key || `${m}-item-${C}`;
    return /* @__PURE__ */ s.createElement(Hh, {
      key: O,
      compactSize: f,
      compactDirection: a,
      isFirstItem: C === 0 && (!v || (v == null ? void 0 : v.isFirstItem)),
      isLastItem: C === h.length - 1 && (!v || (v == null ? void 0 : v.isLastItem))
    }, E);
  }), [r, h, v]);
  return h.length === 0 ? null : g(/* @__PURE__ */ s.createElement("div", Object.assign({
    className: p
  }, d), y));
};
var kh = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Pd = /* @__PURE__ */ s.createContext(void 0), Wh = (e) => {
  const {
    getPrefixCls: t,
    direction: n
  } = s.useContext(Pt), {
    prefixCls: r,
    size: a,
    className: o
  } = e, i = kh(e, ["prefixCls", "size", "className"]), l = t("btn-group", r), [, , c] = Sr();
  let u = "";
  switch (a) {
    case "large":
      u = "lg";
      break;
    case "small":
      u = "sm";
      break;
  }
  if (process.env.NODE_ENV !== "production") {
    const f = Xn("Button.Group");
    process.env.NODE_ENV !== "production" && f(!a || ["large", "small", "middle"].includes(a), "usage", "Invalid prop `size`.");
  }
  const d = Oe(l, {
    [`${l}-${u}`]: u,
    [`${l}-rtl`]: n === "rtl"
  }, o, c);
  return /* @__PURE__ */ s.createElement(Pd.Provider, {
    value: a
  }, /* @__PURE__ */ s.createElement("div", Object.assign({}, i, {
    className: d
  })));
}, Uh = Wh, tc = /^[\u4e00-\u9fa5]{2}$/, Zi = tc.test.bind(tc);
function nc(e) {
  return typeof e == "string";
}
function Ua(e) {
  return e === "text" || e === "link";
}
function Gh(e, t) {
  if (e == null)
    return;
  const n = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && nc(e.type) && Zi(e.props.children) ? uo(e, {
    children: e.props.children.split("").join(n)
  }) : nc(e) ? Zi(e) ? /* @__PURE__ */ Re.createElement("span", null, e.split("").join(n)) : /* @__PURE__ */ Re.createElement("span", null, e) : fh(e) ? /* @__PURE__ */ Re.createElement("span", null, e) : e;
}
function qh(e, t) {
  let n = !1;
  const r = [];
  return Re.Children.forEach(e, (a) => {
    const o = typeof a, i = o === "string" || o === "number";
    if (n && i) {
      const l = r.length - 1, c = r[l];
      r[l] = `${c}${a}`;
    } else
      r.push(a);
    n = i;
  }), Re.Children.map(r, (a) => Gh(a, t));
}
const Kh = /* @__PURE__ */ s.forwardRef((e, t) => {
  const {
    className: n,
    style: r,
    children: a,
    prefixCls: o
  } = e, i = Oe(`${o}-icon`, n);
  return /* @__PURE__ */ Re.createElement("span", {
    ref: t,
    className: i,
    style: r
  }, a);
}), Td = Kh, rc = /* @__PURE__ */ s.forwardRef((e, t) => {
  let {
    prefixCls: n,
    className: r,
    style: a,
    iconClassName: o
  } = e;
  const i = Oe(`${n}-loading-icon`, r);
  return /* @__PURE__ */ Re.createElement(Td, {
    prefixCls: n,
    className: i,
    style: a,
    ref: t
  }, /* @__PURE__ */ Re.createElement(Od, {
    className: o
  }));
}), li = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), ci = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), Yh = (e) => {
  const {
    prefixCls: t,
    loading: n,
    existIcon: r,
    className: a,
    style: o
  } = e, i = !!n;
  return r ? /* @__PURE__ */ Re.createElement(rc, {
    prefixCls: t,
    className: a,
    style: o
  }) : /* @__PURE__ */ Re.createElement(xa, {
    visible: i,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    motionLeave: i,
    removeOnLeave: !0,
    onAppearStart: li,
    onAppearActive: ci,
    onEnterStart: li,
    onEnterActive: ci,
    onLeaveStart: ci,
    onLeaveActive: li
  }, (l, c) => {
    let {
      className: u,
      style: d
    } = l;
    return /* @__PURE__ */ Re.createElement(rc, {
      prefixCls: t,
      className: a,
      style: Object.assign(Object.assign({}, o), d),
      ref: c,
      iconClassName: u
    });
  });
}, Xh = Yh, ac = (e, t) => ({
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
}), Qh = (e) => {
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
      ac(`${t}-primary`, a),
      ac(`${t}-danger`, o)
    ]
  };
}, Jh = Qh, Zh = (e) => {
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
      "&:not(:disabled)": Object.assign({}, dp(e)),
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
}, qn = (e, t, n) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": n
  }
}), e0 = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), t0 = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.controlHeight / 2,
  paddingInlineEnd: e.controlHeight / 2
}), n0 = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  boxShadow: "none"
}), Sa = (e, t, n, r, a, o, i, l) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: n || void 0,
    backgroundColor: t,
    borderColor: r || void 0,
    boxShadow: "none"
  }, qn(e, Object.assign({
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
}), Bs = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, n0(e))
}), Md = (e) => Object.assign({}, Bs(e)), mo = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), Ad = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Md(e)), {
  backgroundColor: e.defaultBg,
  borderColor: e.defaultBorderColor,
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}), qn(e.componentCls, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), Sa(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: e.colorError,
    borderColor: e.colorError
  }, qn(e.componentCls, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), Sa(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), Bs(e))
}), r0 = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Md(e)), {
  color: e.primaryColor,
  backgroundColor: e.colorPrimary,
  boxShadow: e.primaryShadow
}), qn(e.componentCls, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryActive
})), Sa(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
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
  }, qn(e.componentCls, {
    backgroundColor: e.colorErrorHover
  }, {
    backgroundColor: e.colorErrorActive
  })), Sa(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), Bs(e))
}), a0 = (e) => Object.assign(Object.assign({}, Ad(e)), {
  borderStyle: "dashed"
}), o0 = (e) => Object.assign(Object.assign(Object.assign({
  color: e.colorLink
}, qn(e.componentCls, {
  color: e.colorLinkHover,
  backgroundColor: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), mo(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, qn(e.componentCls, {
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), mo(e))
}), i0 = (e) => Object.assign(Object.assign(Object.assign({}, qn(e.componentCls, {
  color: e.colorText,
  backgroundColor: e.textHoverBg
}, {
  color: e.colorText,
  backgroundColor: e.colorBgTextActive
})), mo(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, mo(e)), qn(e.componentCls, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }))
}), s0 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: Ad(e),
    [`${t}-primary`]: r0(e),
    [`${t}-dashed`]: a0(e),
    [`${t}-link`]: o0(e),
    [`${t}-text`]: i0(e),
    [`${t}-ghost`]: Sa(e.componentCls, e.ghostBg, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)
  };
}, ks = function(e) {
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
      [`${n}${n}-circle${t}`]: e0(e)
    },
    {
      [`${n}${n}-round${t}`]: t0(e)
    }
  ];
}, l0 = (e) => ks($t(e, {
  fontSize: e.contentFontSize
})), c0 = (e) => {
  const t = $t(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return ks(t, `${e.componentCls}-sm`);
}, u0 = (e) => {
  const t = $t(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return ks(t, `${e.componentCls}-lg`);
}, d0 = (e) => {
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
}, Fd = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: n
  } = e;
  return $t(e, {
    buttonPaddingHorizontal: t,
    buttonIconOnlyFontSize: n
  });
}, Dd = (e) => ({
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
}), f0 = Ln("Button", (e) => {
  const t = Fd(e);
  return [
    // Shared
    Zh(t),
    // Size
    c0(t),
    l0(t),
    u0(t),
    // Block
    d0(t),
    // Group (type, ghost, danger, loading)
    s0(t),
    // Button Group
    Jh(t)
  ];
}, Dd);
function v0(e, t, n) {
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
function m0(e, t, n) {
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
    [r]: Object.assign(Object.assign({}, v0(e, r, t)), m0(n, r, t))
  };
}
function g0(e, t) {
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
function p0(e, t) {
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
function h0(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, g0(e, t)), p0(e.componentCls, t))
  };
}
const b0 = gp(["Button", "compact"], (e) => {
  const t = Fd(e);
  return [
    // Space Compact
    Do(t),
    h0(t)
  ];
}, Dd);
var y0 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function S0(e) {
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
const E0 = (e, t) => {
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
    className: m,
    rootClassName: g,
    children: b,
    icon: p,
    ghost: v = !1,
    block: h = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: y = "button",
    classNames: E,
    style: C = {}
  } = e, O = y0(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]), {
    getPrefixCls: x,
    autoInsertSpaceInButton: S,
    direction: R,
    button: _
  } = s.useContext(Pt), N = x("btn", o), [F, A] = f0(N), M = s.useContext(Jr), D = f ?? M, V = s.useContext(Pd), P = s.useMemo(() => S0(a), [a]), [I, T] = s.useState(P.loading), [z, L] = s.useState(!1), W = jn(t, /* @__PURE__ */ s.createRef()), G = s.Children.count(b) === 1 && !p && !Ua(i);
  s.useEffect(() => {
    let me = null;
    P.delay > 0 ? me = setTimeout(() => {
      me = null, T(!0);
    }, P.delay) : T(P.loading);
    function pe() {
      me && (clearTimeout(me), me = null);
    }
    return pe;
  }, [P]), s.useEffect(() => {
    if (!W || !W.current || S === !1)
      return;
    const me = W.current.textContent;
    G && Zi(me) ? z || L(!0) : z && L(!1);
  }, [W]);
  const U = (me) => {
    const {
      onClick: pe
    } = e;
    if (I || D) {
      me.preventDefault();
      return;
    }
    pe == null || pe(me);
  };
  if (process.env.NODE_ENV !== "production") {
    const me = Xn("Button");
    process.env.NODE_ENV !== "production" && me(!(typeof p == "string" && p.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${p}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && me(!(v && Ua(i)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const ne = S !== !1, {
    compactSize: se,
    compactItemClassnames: J
  } = Ra(N, R), X = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, ee = Cr((me) => {
    var pe, je;
    return (je = (pe = u ?? se) !== null && pe !== void 0 ? pe : V) !== null && je !== void 0 ? je : me;
  }), oe = ee && X[ee] || "", Ce = I ? "loading" : p, be = Xr(O, ["navigate"]), ue = Oe(N, A, {
    [`${N}-${c}`]: c !== "default" && c,
    [`${N}-${i}`]: i,
    [`${N}-${oe}`]: oe,
    [`${N}-icon-only`]: !b && b !== 0 && !!Ce,
    [`${N}-background-ghost`]: v && !Ua(i),
    [`${N}-loading`]: I,
    [`${N}-two-chinese-chars`]: z && ne && !I,
    [`${N}-block`]: h,
    [`${N}-dangerous`]: !!l,
    [`${N}-rtl`]: R === "rtl"
  }, J, m, g, _ == null ? void 0 : _.className), q = Object.assign(Object.assign({}, _ == null ? void 0 : _.style), C), $e = Oe(E == null ? void 0 : E.icon, (n = _ == null ? void 0 : _.classNames) === null || n === void 0 ? void 0 : n.icon), Ie = Object.assign(Object.assign({}, (d == null ? void 0 : d.icon) || {}), ((r = _ == null ? void 0 : _.styles) === null || r === void 0 ? void 0 : r.icon) || {}), _e = p && !I ? /* @__PURE__ */ Re.createElement(Td, {
    prefixCls: N,
    className: $e,
    style: Ie
  }, p) : /* @__PURE__ */ Re.createElement(Xh, {
    existIcon: !!p,
    prefixCls: N,
    loading: !!I
  }), fe = b || b === 0 ? qh(b, G && ne) : null;
  if (be.href !== void 0)
    return F(/* @__PURE__ */ Re.createElement("a", Object.assign({}, be, {
      className: Oe(ue, {
        [`${N}-disabled`]: D
      }),
      style: q,
      onClick: U,
      ref: W
    }), _e, fe));
  let xe = /* @__PURE__ */ Re.createElement("button", Object.assign({}, O, {
    type: y,
    className: ue,
    style: q,
    onClick: U,
    disabled: D,
    ref: W
  }), _e, fe, J && /* @__PURE__ */ Re.createElement(b0, {
    key: "compact",
    prefixCls: N
  }));
  return Ua(i) || (xe = /* @__PURE__ */ Re.createElement(Fh, {
    component: "Button",
    disabled: !!I
  }, xe)), F(xe);
}, jo = /* @__PURE__ */ s.forwardRef(E0);
process.env.NODE_ENV !== "production" && (jo.displayName = "Button");
jo.Group = Uh;
jo.__ANT_BUTTON = !0;
const es = jo;
var jd = /* @__PURE__ */ s.createContext(null), oc = [];
function C0(e, t) {
  var n = s.useState(function() {
    if (!Gt())
      return null;
    var b = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && b.setAttribute("data-debug", t), b;
  }), r = Y(n, 1), a = r[0], o = s.useRef(!1), i = s.useContext(jd), l = s.useState(oc), c = Y(l, 2), u = c[0], d = c[1], f = i || (o.current ? void 0 : function(b) {
    d(function(p) {
      var v = [b].concat(De(p));
      return v;
    });
  });
  function m() {
    a.parentElement || document.body.appendChild(a), o.current = !0;
  }
  function g() {
    var b;
    (b = a.parentElement) === null || b === void 0 || b.removeChild(a), o.current = !1;
  }
  return xt(function() {
    return e ? i ? i(m) : m() : g(), g;
  }, [e]), xt(function() {
    u.length && (u.forEach(function(b) {
      return b();
    }), d(oc));
  }, [u]), [a, f];
}
var ui;
function w0(e) {
  if (typeof document > "u")
    return 0;
  if (e || ui === void 0) {
    var t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    var n = document.createElement("div"), r = n.style;
    r.position = "absolute", r.top = "0", r.left = "0", r.pointerEvents = "none", r.visibility = "hidden", r.width = "200px", r.height = "150px", r.overflow = "hidden", n.appendChild(t), document.body.appendChild(n);
    var a = t.offsetWidth;
    n.style.overflow = "scroll";
    var o = t.offsetWidth;
    a === o && (o = n.clientWidth), document.body.removeChild(n), ui = a - o;
  }
  return ui;
}
function ic(e) {
  var t = e.match(/^(.*)px$/), n = Number(t == null ? void 0 : t[1]);
  return Number.isNaN(n) ? w0() : n;
}
function x0(e) {
  if (typeof document > "u" || !e || !(e instanceof Element))
    return {
      width: 0,
      height: 0
    };
  var t = getComputedStyle(e, "::-webkit-scrollbar"), n = t.width, r = t.height;
  return {
    width: ic(n),
    height: ic(r)
  };
}
function O0() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var R0 = "rc-util-locker-".concat(Date.now()), sc = 0;
function $0(e) {
  var t = !!e, n = s.useState(function() {
    return sc += 1, "".concat(R0, "_").concat(sc);
  }), r = Y(n, 1), a = r[0];
  xt(function() {
    if (t) {
      var o = x0(document.body).width, i = O0();
      Wr(`
html body {
  overflow-y: hidden;
  `.concat(i ? "width: calc(100% - ".concat(o, "px);") : "", `
}`), a);
    } else
      oo(a);
    return function() {
      oo(a);
    };
  }, [t, a]);
}
var lc = !1;
function I0(e) {
  return typeof e == "boolean" && (lc = e), lc;
}
var cc = function(t) {
  return t === !1 ? !1 : !Gt() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, Ws = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.open, r = e.autoLock, a = e.getContainer, o = e.debug, i = e.autoDestroy, l = i === void 0 ? !0 : i, c = e.children, u = s.useState(n), d = Y(u, 2), f = d[0], m = d[1], g = f || n;
  process.env.NODE_ENV !== "production" && ot(Gt() || !n, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), s.useEffect(function() {
    (l || n) && m(n);
  }, [n, l]);
  var b = s.useState(function() {
    return cc(a);
  }), p = Y(b, 2), v = p[0], h = p[1];
  s.useEffect(function() {
    var A = cc(a);
    h(A ?? null);
  });
  var y = C0(g && !v, o), E = Y(y, 2), C = E[0], O = E[1], x = v ?? C;
  $0(r && n && Gt() && (x === C || x === document.body));
  var S = null;
  if (c && wa(c) && t) {
    var R = c;
    S = R.ref;
  }
  var _ = Co(S, t);
  if (!g || !Gt() || v === void 0)
    return null;
  var N = x === !1 || I0(), F = c;
  return t && (F = /* @__PURE__ */ s.cloneElement(c, {
    ref: _
  })), /* @__PURE__ */ s.createElement(jd.Provider, {
    value: O
  }, N ? F : /* @__PURE__ */ pa.createPortal(F, x));
});
process.env.NODE_ENV !== "production" && (Ws.displayName = "Portal");
function N0() {
  var e = k({}, So);
  return e.useId;
}
var uc = 0, dc = N0();
const _0 = dc ? (
  // Use React `useId`
  function(t) {
    var n = dc();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : n);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var n = s.useState("ssr-id"), r = Y(n, 2), a = r[0], o = r[1];
    return s.useEffect(function() {
      var i = uc;
      uc += 1, o("rc_unique_".concat(i));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : a);
  }
);
var cr = "RC_FORM_INTERNAL_HOOKS", bt = function() {
  ot(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, qr = /* @__PURE__ */ s.createContext({
  getFieldValue: bt,
  getFieldsValue: bt,
  getFieldError: bt,
  getFieldWarning: bt,
  getFieldsError: bt,
  isFieldsTouched: bt,
  isFieldTouched: bt,
  isFieldValidating: bt,
  isFieldsValidating: bt,
  resetFields: bt,
  setFields: bt,
  setFieldValue: bt,
  setFieldsValue: bt,
  validateFields: bt,
  submit: bt,
  getInternalHooks: function() {
    return bt(), {
      dispatch: bt,
      initEntityValue: bt,
      registerField: bt,
      useSubscribe: bt,
      setInitialValues: bt,
      destroyForm: bt,
      setCallbacks: bt,
      registerWatch: bt,
      getFields: bt,
      setValidateMessages: bt,
      setPreserve: bt,
      getInitialValue: bt
    };
  }
}), go = /* @__PURE__ */ s.createContext(null);
function ts(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function P0(e) {
  return e && !!e._init;
}
function ur() {
  return ur = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ur.apply(this, arguments);
}
function T0(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ea(e, t);
}
function ns(e) {
  return ns = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ns(e);
}
function Ea(e, t) {
  return Ea = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, Ea(e, t);
}
function M0() {
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
function Za(e, t, n) {
  return M0() ? Za = Reflect.construct.bind() : Za = function(a, o, i) {
    var l = [null];
    l.push.apply(l, o);
    var c = Function.bind.apply(a, l), u = new c();
    return i && Ea(u, i.prototype), u;
  }, Za.apply(null, arguments);
}
function A0(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function rs(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return rs = function(r) {
    if (r === null || !A0(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, a);
    }
    function a() {
      return Za(r, arguments, ns(this).constructor);
    }
    return a.prototype = Object.create(r.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Ea(a, r);
  }, rs(e);
}
var F0 = /%[sdj%]/g, Ld = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Ld = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function as(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function un(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var a = 0, o = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var i = e.replace(F0, function(l) {
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
function D0(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Lt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || D0(t) && typeof e == "string" && !e);
}
function j0(e, t, n) {
  var r = [], a = 0, o = e.length;
  function i(l) {
    r.push.apply(r, l || []), a++, a === o && n(r);
  }
  e.forEach(function(l) {
    t(l, i);
  });
}
function fc(e, t, n) {
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
function L0(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || []);
  }), t;
}
var vc = /* @__PURE__ */ function(e) {
  T0(t, e);
  function t(n, r) {
    var a;
    return a = e.call(this, "Async Validation Error") || this, a.errors = n, a.fields = r, a;
  }
  return t;
}(/* @__PURE__ */ rs(Error));
function V0(e, t, n, r, a) {
  if (t.first) {
    var o = new Promise(function(m, g) {
      var b = function(h) {
        return r(h), h.length ? g(new vc(h, as(h))) : m(a);
      }, p = L0(e);
      fc(p, n, b);
    });
    return o.catch(function(m) {
      return m;
    }), o;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], l = Object.keys(e), c = l.length, u = 0, d = [], f = new Promise(function(m, g) {
    var b = function(v) {
      if (d.push.apply(d, v), u++, u === c)
        return r(d), d.length ? g(new vc(d, as(d))) : m(a);
    };
    l.length || (r(d), m(a)), l.forEach(function(p) {
      var v = e[p];
      i.indexOf(p) !== -1 ? fc(v, n, b) : j0(v, n, b);
    });
  });
  return f.catch(function(m) {
    return m;
  }), f;
}
function z0(e) {
  return !!(e && e.message !== void 0);
}
function H0(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function mc(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = H0(t, e.fullFields) : r = t[n.field || e.fullField], z0(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function gc(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == "object" && typeof e[n] == "object" ? e[n] = ur({}, e[n], r) : e[n] = r;
      }
  }
  return e;
}
var Vd = function(t, n, r, a, o, i) {
  t.required && (!r.hasOwnProperty(t.field) || Lt(n, i || t.type)) && a.push(un(o.messages.required, t.fullField));
}, B0 = function(t, n, r, a, o) {
  (/^\s+$/.test(n) || n === "") && a.push(un(o.messages.whitespace, t.fullField));
}, Ga, k0 = function() {
  if (Ga)
    return Ga;
  var e = "[a-fA-F\\d:]", t = function(C) {
    return C && C.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
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
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), o = new RegExp("(?:^" + n + "$)|(?:^" + a + "$)"), i = new RegExp("^" + n + "$"), l = new RegExp("^" + a + "$"), c = function(C) {
    return C && C.exact ? o : new RegExp("(?:" + t(C) + n + t(C) + ")|(?:" + t(C) + a + t(C) + ")", "g");
  };
  c.v4 = function(E) {
    return E && E.exact ? i : new RegExp("" + t(E) + n + t(E), "g");
  }, c.v6 = function(E) {
    return E && E.exact ? l : new RegExp("" + t(E) + a + t(E), "g");
  };
  var u = "(?:(?:[a-z]+:)?//)", d = "(?:\\S+(?::\\S*)?@)?", f = c.v4().source, m = c.v6().source, g = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", b = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", p = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", v = "(?::\\d{2,5})?", h = '(?:[/?#][^\\s"]*)?', y = "(?:" + u + "|www\\.)" + d + "(?:localhost|" + f + "|" + m + "|" + g + b + p + ")" + v + h;
  return Ga = new RegExp("(?:^" + y + "$)", "i"), Ga;
}, pc = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, la = {
  integer: function(t) {
    return la.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return la.number(t) && !la.integer(t);
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
    return typeof t == "object" && !la.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(pc.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(k0());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(pc.hex);
  }
}, W0 = function(t, n, r, a, o) {
  if (t.required && n === void 0) {
    Vd(t, n, r, a, o);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], l = t.type;
  i.indexOf(l) > -1 ? la[l](n) || a.push(un(o.messages.types[l], t.fullField, t.type)) : l && typeof n !== t.type && a.push(un(o.messages.types[l], t.fullField, t.type));
}, U0 = function(t, n, r, a, o) {
  var i = typeof t.len == "number", l = typeof t.min == "number", c = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = n, f = null, m = typeof n == "number", g = typeof n == "string", b = Array.isArray(n);
  if (m ? f = "number" : g ? f = "string" : b && (f = "array"), !f)
    return !1;
  b && (d = n.length), g && (d = n.replace(u, "_").length), i ? d !== t.len && a.push(un(o.messages[f].len, t.fullField, t.len)) : l && !c && d < t.min ? a.push(un(o.messages[f].min, t.fullField, t.min)) : c && !l && d > t.max ? a.push(un(o.messages[f].max, t.fullField, t.max)) : l && c && (d < t.min || d > t.max) && a.push(un(o.messages[f].range, t.fullField, t.min, t.max));
}, _r = "enum", G0 = function(t, n, r, a, o) {
  t[_r] = Array.isArray(t[_r]) ? t[_r] : [], t[_r].indexOf(n) === -1 && a.push(un(o.messages[_r], t.fullField, t[_r].join(", ")));
}, q0 = function(t, n, r, a, o) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || a.push(un(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(n) || a.push(un(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, it = {
  required: Vd,
  whitespace: B0,
  type: W0,
  range: U0,
  enum: G0,
  pattern: q0
}, K0 = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Lt(n, "string") && !t.required)
      return r();
    it.required(t, n, a, i, o, "string"), Lt(n, "string") || (it.type(t, n, a, i, o), it.range(t, n, a, i, o), it.pattern(t, n, a, i, o), t.whitespace === !0 && it.whitespace(t, n, a, i, o));
  }
  r(i);
}, Y0 = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Lt(n) && !t.required)
      return r();
    it.required(t, n, a, i, o), n !== void 0 && it.type(t, n, a, i, o);
  }
  r(i);
}, X0 = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (n === "" && (n = void 0), Lt(n) && !t.required)
      return r();
    it.required(t, n, a, i, o), n !== void 0 && (it.type(t, n, a, i, o), it.range(t, n, a, i, o));
  }
  r(i);
}, Q0 = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Lt(n) && !t.required)
      return r();
    it.required(t, n, a, i, o), n !== void 0 && it.type(t, n, a, i, o);
  }
  r(i);
}, J0 = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Lt(n) && !t.required)
      return r();
    it.required(t, n, a, i, o), Lt(n) || it.type(t, n, a, i, o);
  }
  r(i);
}, Z0 = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Lt(n) && !t.required)
      return r();
    it.required(t, n, a, i, o), n !== void 0 && (it.type(t, n, a, i, o), it.range(t, n, a, i, o));
  }
  r(i);
}, eb = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Lt(n) && !t.required)
      return r();
    it.required(t, n, a, i, o), n !== void 0 && (it.type(t, n, a, i, o), it.range(t, n, a, i, o));
  }
  r(i);
}, tb = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (n == null && !t.required)
      return r();
    it.required(t, n, a, i, o, "array"), n != null && (it.type(t, n, a, i, o), it.range(t, n, a, i, o));
  }
  r(i);
}, nb = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Lt(n) && !t.required)
      return r();
    it.required(t, n, a, i, o), n !== void 0 && it.type(t, n, a, i, o);
  }
  r(i);
}, rb = "enum", ab = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Lt(n) && !t.required)
      return r();
    it.required(t, n, a, i, o), n !== void 0 && it[rb](t, n, a, i, o);
  }
  r(i);
}, ob = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Lt(n, "string") && !t.required)
      return r();
    it.required(t, n, a, i, o), Lt(n, "string") || it.pattern(t, n, a, i, o);
  }
  r(i);
}, ib = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Lt(n, "date") && !t.required)
      return r();
    if (it.required(t, n, a, i, o), !Lt(n, "date")) {
      var c;
      n instanceof Date ? c = n : c = new Date(n), it.type(t, c, a, i, o), c && it.range(t, c.getTime(), a, i, o);
    }
  }
  r(i);
}, sb = function(t, n, r, a, o) {
  var i = [], l = Array.isArray(n) ? "array" : typeof n;
  it.required(t, n, a, i, o, l), r(i);
}, di = function(t, n, r, a, o) {
  var i = t.type, l = [], c = t.required || !t.required && a.hasOwnProperty(t.field);
  if (c) {
    if (Lt(n, i) && !t.required)
      return r();
    it.required(t, n, a, l, o, i), Lt(n, i) || it.type(t, n, a, l, o);
  }
  r(l);
}, lb = function(t, n, r, a, o) {
  var i = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (Lt(n) && !t.required)
      return r();
    it.required(t, n, a, i, o);
  }
  r(i);
}, va = {
  string: K0,
  method: Y0,
  number: X0,
  boolean: Q0,
  regexp: J0,
  integer: Z0,
  float: eb,
  array: tb,
  object: nb,
  enum: ab,
  pattern: ob,
  date: ib,
  url: di,
  hex: di,
  email: di,
  required: sb,
  any: lb
};
function os() {
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
var is = os(), $a = /* @__PURE__ */ function() {
  function e(n) {
    this.rules = null, this._messages = is, this.define(n);
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
    return r && (this._messages = gc(os(), r)), this._messages;
  }, t.validate = function(r, a, o) {
    var i = this;
    a === void 0 && (a = {}), o === void 0 && (o = function() {
    });
    var l = r, c = a, u = o;
    if (typeof c == "function" && (u = c, c = {}), !this.rules || Object.keys(this.rules).length === 0)
      return u && u(null, l), Promise.resolve(l);
    function d(p) {
      var v = [], h = {};
      function y(C) {
        if (Array.isArray(C)) {
          var O;
          v = (O = v).concat.apply(O, C);
        } else
          v.push(C);
      }
      for (var E = 0; E < p.length; E++)
        y(p[E]);
      v.length ? (h = as(v), u(v, h)) : u(null, l);
    }
    if (c.messages) {
      var f = this.messages();
      f === is && (f = os()), gc(f, c.messages), c.messages = f;
    } else
      c.messages = this.messages();
    var m = {}, g = c.keys || Object.keys(this.rules);
    g.forEach(function(p) {
      var v = i.rules[p], h = l[p];
      v.forEach(function(y) {
        var E = y;
        typeof E.transform == "function" && (l === r && (l = ur({}, l)), h = l[p] = E.transform(h)), typeof E == "function" ? E = {
          validator: E
        } : E = ur({}, E), E.validator = i.getValidationMethod(E), E.validator && (E.field = p, E.fullField = E.fullField || p, E.type = i.getType(E), m[p] = m[p] || [], m[p].push({
          rule: E,
          value: h,
          source: l,
          field: p
        }));
      });
    });
    var b = {};
    return V0(m, c, function(p, v) {
      var h = p.rule, y = (h.type === "object" || h.type === "array") && (typeof h.fields == "object" || typeof h.defaultField == "object");
      y = y && (h.required || !h.required && p.value), h.field = p.field;
      function E(x, S) {
        return ur({}, S, {
          fullField: h.fullField + "." + x,
          fullFields: h.fullFields ? [].concat(h.fullFields, [x]) : [x]
        });
      }
      function C(x) {
        x === void 0 && (x = []);
        var S = Array.isArray(x) ? x : [x];
        !c.suppressWarning && S.length && e.warning("async-validator:", S), S.length && h.message !== void 0 && (S = [].concat(h.message));
        var R = S.map(mc(h, l));
        if (c.first && R.length)
          return b[h.field] = 1, v(R);
        if (!y)
          v(R);
        else {
          if (h.required && !p.value)
            return h.message !== void 0 ? R = [].concat(h.message).map(mc(h, l)) : c.error && (R = [c.error(h, un(c.messages.required, h.field))]), v(R);
          var _ = {};
          h.defaultField && Object.keys(p.value).map(function(A) {
            _[A] = h.defaultField;
          }), _ = ur({}, _, p.rule.fields);
          var N = {};
          Object.keys(_).forEach(function(A) {
            var M = _[A], D = Array.isArray(M) ? M : [M];
            N[A] = D.map(E.bind(null, A));
          });
          var F = new e(N);
          F.messages(c.messages), p.rule.options && (p.rule.options.messages = c.messages, p.rule.options.error = c.error), F.validate(p.value, p.rule.options || c, function(A) {
            var M = [];
            R && R.length && M.push.apply(M, R), A && A.length && M.push.apply(M, A), v(M.length ? M : null);
          });
        }
      }
      var O;
      if (h.asyncValidator)
        O = h.asyncValidator(h, p.value, C, p.source, c);
      else if (h.validator) {
        try {
          O = h.validator(h, p.value, C, p.source, c);
        } catch (x) {
          console.error == null || console.error(x), c.suppressValidatorError || setTimeout(function() {
            throw x;
          }, 0), C(x.message);
        }
        O === !0 ? C() : O === !1 ? C(typeof h.message == "function" ? h.message(h.fullField || h.field) : h.message || (h.fullField || h.field) + " fails") : O instanceof Array ? C(O) : O instanceof Error && C(O.message);
      }
      O && O.then && O.then(function() {
        return C();
      }, function(x) {
        return C(x);
      });
    }, function(p) {
      d(p);
    }, l);
  }, t.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !va.hasOwnProperty(r.type))
      throw new Error(un("Unknown rule type %s", r.type));
    return r.type || "string";
  }, t.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var a = Object.keys(r), o = a.indexOf("message");
    return o !== -1 && a.splice(o, 1), a.length === 1 && a[0] === "required" ? va.required : va[this.getType(r)] || void 0;
  }, e;
}();
$a.register = function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  va[t] = n;
};
$a.warning = Ld;
$a.messages = is;
$a.validators = va;
var sn = "'${name}' is not a valid ${type}", zd = {
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
    string: sn,
    method: sn,
    array: sn,
    object: sn,
    number: sn,
    date: sn,
    boolean: sn,
    integer: sn,
    float: sn,
    regexp: sn,
    email: sn,
    url: sn,
    hex: sn
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
}, hc = $a;
function cb(e, t) {
  return e.replace(/\$\{\w+\}/g, function(n) {
    var r = n.slice(2, -1);
    return t[r];
  });
}
var bc = "CODE_LOGIC_ERROR";
function ss(e, t, n, r, a) {
  return ls.apply(this, arguments);
}
function ls() {
  return ls = Er(/* @__PURE__ */ Qt().mark(function e(t, n, r, a, o) {
    var i, l, c, u, d, f, m, g, b;
    return Qt().wrap(function(v) {
      for (; ; )
        switch (v.prev = v.next) {
          case 0:
            return i = k({}, r), delete i.ruleIndex, hc.warning = function() {
            }, i.validator && (l = i.validator, i.validator = function() {
              try {
                return l.apply(void 0, arguments);
              } catch (h) {
                return console.error(h), Promise.reject(bc);
              }
            }), c = null, i && i.type === "array" && i.defaultField && (c = i.defaultField, delete i.defaultField), u = new hc(j({}, t, [i])), d = Lr(zd, a.validateMessages), u.messages(d), f = [], v.prev = 10, v.next = 13, Promise.resolve(u.validate(j({}, t, n), k({}, a)));
          case 13:
            v.next = 18;
            break;
          case 15:
            v.prev = 15, v.t0 = v.catch(10), v.t0.errors && (f = v.t0.errors.map(function(h, y) {
              var E = h.message, C = E === bc ? d.default : E;
              return /* @__PURE__ */ s.isValidElement(C) ? (
                // Wrap ReactNode with `key`
                /* @__PURE__ */ s.cloneElement(C, {
                  key: "error_".concat(y)
                })
              ) : C;
            }));
          case 18:
            if (!(!f.length && c)) {
              v.next = 23;
              break;
            }
            return v.next = 21, Promise.all(n.map(function(h, y) {
              return ss("".concat(t, ".").concat(y), h, c, a, o);
            }));
          case 21:
            return m = v.sent, v.abrupt("return", m.reduce(function(h, y) {
              return [].concat(De(h), De(y));
            }, []));
          case 23:
            return g = k(k({}, r), {}, {
              name: t,
              enum: (r.enum || []).join(", ")
            }, o), b = f.map(function(h) {
              return typeof h == "string" ? cb(h, g) : h;
            }), v.abrupt("return", b);
          case 26:
          case "end":
            return v.stop();
        }
    }, e, null, [[10, 15]]);
  })), ls.apply(this, arguments);
}
function ub(e, t, n, r, a, o) {
  var i = e.join("."), l = n.map(function(d, f) {
    var m = d.validator, g = k(k({}, d), {}, {
      ruleIndex: f
    });
    return m && (g.validator = function(b, p, v) {
      var h = !1, y = function() {
        for (var O = arguments.length, x = new Array(O), S = 0; S < O; S++)
          x[S] = arguments[S];
        Promise.resolve().then(function() {
          ot(!h, "Your validator function has already return a promise. `callback` will be ignored."), h || v.apply(void 0, x);
        });
      }, E = m(b, p, y);
      h = E && typeof E.then == "function" && typeof E.catch == "function", ot(h, "`callback` is deprecated. Please return a promise instead."), h && E.then(function() {
        v();
      }).catch(function(C) {
        v(C || " ");
      });
    }), g;
  }).sort(function(d, f) {
    var m = d.warningOnly, g = d.ruleIndex, b = f.warningOnly, p = f.ruleIndex;
    return !!m == !!b ? g - p : m ? 1 : -1;
  }), c;
  if (a === !0)
    c = new Promise(/* @__PURE__ */ function() {
      var d = Er(/* @__PURE__ */ Qt().mark(function f(m, g) {
        var b, p, v;
        return Qt().wrap(function(y) {
          for (; ; )
            switch (y.prev = y.next) {
              case 0:
                b = 0;
              case 1:
                if (!(b < l.length)) {
                  y.next = 12;
                  break;
                }
                return p = l[b], y.next = 5, ss(i, t, p, r, o);
              case 5:
                if (v = y.sent, !v.length) {
                  y.next = 9;
                  break;
                }
                return g([{
                  errors: v,
                  rule: p
                }]), y.abrupt("return");
              case 9:
                b += 1, y.next = 1;
                break;
              case 12:
                m([]);
              case 13:
              case "end":
                return y.stop();
            }
        }, f);
      }));
      return function(f, m) {
        return d.apply(this, arguments);
      };
    }());
  else {
    var u = l.map(function(d) {
      return ss(i, t, d, r, o).then(function(f) {
        return {
          errors: f,
          rule: d
        };
      });
    });
    c = (a ? fb(u) : db(u)).then(function(d) {
      return Promise.reject(d);
    });
  }
  return c.catch(function(d) {
    return d;
  }), c;
}
function db(e) {
  return cs.apply(this, arguments);
}
function cs() {
  return cs = Er(/* @__PURE__ */ Qt().mark(function e(t) {
    return Qt().wrap(function(r) {
      for (; ; )
        switch (r.prev = r.next) {
          case 0:
            return r.abrupt("return", Promise.all(t).then(function(a) {
              var o, i = (o = []).concat.apply(o, De(a));
              return i;
            }));
          case 1:
          case "end":
            return r.stop();
        }
    }, e);
  })), cs.apply(this, arguments);
}
function fb(e) {
  return us.apply(this, arguments);
}
function us() {
  return us = Er(/* @__PURE__ */ Qt().mark(function e(t) {
    var n;
    return Qt().wrap(function(a) {
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
  })), us.apply(this, arguments);
}
function Mt(e) {
  return ts(e);
}
function yc(e, t) {
  var n = {};
  return t.forEach(function(r) {
    var a = Tn(e, r);
    n = _n(n, r, a);
  }), n;
}
function Br(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(r) {
    return Hd(t, r, n);
  });
}
function Hd(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !n && e.length !== t.length ? !1 : t.every(function(r, a) {
    return e[a] === r;
  });
}
function vb(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || Je(e) !== "object" || Je(t) !== "object")
    return !1;
  var n = Object.keys(e), r = Object.keys(t), a = new Set([].concat(n, r));
  return De(a).every(function(o) {
    var i = e[o], l = t[o];
    return typeof i == "function" && typeof l == "function" ? !0 : i === l;
  });
}
function mb(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && Je(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function Sc(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r)
    return e;
  var a = e[t], o = t - n;
  return o > 0 ? [].concat(De(e.slice(0, n)), [a], De(e.slice(n, t)), De(e.slice(t + 1, r))) : o < 0 ? [].concat(De(e.slice(0, t)), De(e.slice(t + 1, n + 1)), [a], De(e.slice(n + 1, r))) : e;
}
var gb = ["name"], En = [];
function Ec(e, t, n, r, a, o) {
  return typeof e == "function" ? e(t, n, "source" in o ? {
    source: o.source
  } : {}) : r !== a;
}
var Us = /* @__PURE__ */ function(e) {
  xo(n, e);
  var t = Oo(n);
  function n(r) {
    var a;
    if (dn(this, n), a = t.call(this, r), j(ct(a), "state", {
      resetCount: 0
    }), j(ct(a), "cancelRegisterFunc", null), j(ct(a), "mounted", !1), j(ct(a), "touched", !1), j(ct(a), "dirty", !1), j(ct(a), "validatePromise", void 0), j(ct(a), "prevValidating", void 0), j(ct(a), "errors", En), j(ct(a), "warnings", En), j(ct(a), "cancelRegister", function() {
      var c = a.props, u = c.preserve, d = c.isListField, f = c.name;
      a.cancelRegisterFunc && a.cancelRegisterFunc(d, u, Mt(f)), a.cancelRegisterFunc = null;
    }), j(ct(a), "getNamePath", function() {
      var c = a.props, u = c.name, d = c.fieldContext, f = d.prefixName, m = f === void 0 ? [] : f;
      return u !== void 0 ? [].concat(De(m), De(u)) : [];
    }), j(ct(a), "getRules", function() {
      var c = a.props, u = c.rules, d = u === void 0 ? [] : u, f = c.fieldContext;
      return d.map(function(m) {
        return typeof m == "function" ? m(f) : m;
      });
    }), j(ct(a), "refresh", function() {
      a.mounted && a.setState(function(c) {
        var u = c.resetCount;
        return {
          resetCount: u + 1
        };
      });
    }), j(ct(a), "metaCache", null), j(ct(a), "triggerMetaEvent", function(c) {
      var u = a.props.onMetaChange;
      if (u) {
        var d = k(k({}, a.getMeta()), {}, {
          destroy: c
        });
        Eu(a.metaCache, d) || u(d), a.metaCache = d;
      } else
        a.metaCache = null;
    }), j(ct(a), "onStoreChange", function(c, u, d) {
      var f = a.props, m = f.shouldUpdate, g = f.dependencies, b = g === void 0 ? [] : g, p = f.onReset, v = d.store, h = a.getNamePath(), y = a.getValue(c), E = a.getValue(v), C = u && Br(u, h);
      switch (d.type === "valueUpdate" && d.source === "external" && y !== E && (a.touched = !0, a.dirty = !0, a.validatePromise = null, a.errors = En, a.warnings = En, a.triggerMetaEvent()), d.type) {
        case "reset":
          if (!u || C) {
            a.touched = !1, a.dirty = !1, a.validatePromise = void 0, a.errors = En, a.warnings = En, a.triggerMetaEvent(), p == null || p(), a.refresh();
            return;
          }
          break;
        case "remove": {
          if (m) {
            a.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var O = d.data;
          if (C) {
            "touched" in O && (a.touched = O.touched), "validating" in O && !("originRCField" in O) && (a.validatePromise = O.validating ? Promise.resolve([]) : null), "errors" in O && (a.errors = O.errors || En), "warnings" in O && (a.warnings = O.warnings || En), a.dirty = !0, a.triggerMetaEvent(), a.reRender();
            return;
          } else if ("value" in O && Br(u, h, !0)) {
            a.reRender();
            return;
          }
          if (m && !h.length && Ec(m, c, v, y, E, d)) {
            a.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var x = b.map(Mt);
          if (x.some(function(S) {
            return Br(d.relatedFields, S);
          })) {
            a.reRender();
            return;
          }
          break;
        }
        default:
          if (C || (!b.length || h.length || m) && Ec(m, c, v, y, E, d)) {
            a.reRender();
            return;
          }
          break;
      }
      m === !0 && a.reRender();
    }), j(ct(a), "validateRules", function(c) {
      var u = a.getNamePath(), d = a.getValue(), f = c || {}, m = f.triggerName, g = f.validateOnly, b = g === void 0 ? !1 : g, p = Promise.resolve().then(/* @__PURE__ */ Er(/* @__PURE__ */ Qt().mark(function v() {
        var h, y, E, C, O, x, S;
        return Qt().wrap(function(_) {
          for (; ; )
            switch (_.prev = _.next) {
              case 0:
                if (a.mounted) {
                  _.next = 2;
                  break;
                }
                return _.abrupt("return", []);
              case 2:
                if (h = a.props, y = h.validateFirst, E = y === void 0 ? !1 : y, C = h.messageVariables, O = h.validateDebounce, x = a.getRules(), m && (x = x.filter(function(N) {
                  return N;
                }).filter(function(N) {
                  var F = N.validateTrigger;
                  if (!F)
                    return !0;
                  var A = ts(F);
                  return A.includes(m);
                })), !(O && m)) {
                  _.next = 10;
                  break;
                }
                return _.next = 8, new Promise(function(N) {
                  setTimeout(N, O);
                });
              case 8:
                if (a.validatePromise === p) {
                  _.next = 10;
                  break;
                }
                return _.abrupt("return", []);
              case 10:
                return S = ub(u, d, x, c, E, C), S.catch(function(N) {
                  return N;
                }).then(function() {
                  var N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : En;
                  if (a.validatePromise === p) {
                    var F;
                    a.validatePromise = null;
                    var A = [], M = [];
                    (F = N.forEach) === null || F === void 0 || F.call(N, function(D) {
                      var V = D.rule.warningOnly, P = D.errors, I = P === void 0 ? En : P;
                      V ? M.push.apply(M, De(I)) : A.push.apply(A, De(I));
                    }), a.errors = A, a.warnings = M, a.triggerMetaEvent(), a.reRender();
                  }
                }), _.abrupt("return", S);
              case 13:
              case "end":
                return _.stop();
            }
        }, v);
      })));
      return b || (a.validatePromise = p, a.dirty = !0, a.errors = En, a.warnings = En, a.triggerMetaEvent(), a.reRender()), p;
    }), j(ct(a), "isFieldValidating", function() {
      return !!a.validatePromise;
    }), j(ct(a), "isFieldTouched", function() {
      return a.touched;
    }), j(ct(a), "isFieldDirty", function() {
      if (a.dirty || a.props.initialValue !== void 0)
        return !0;
      var c = a.props.fieldContext, u = c.getInternalHooks(cr), d = u.getInitialValue;
      return d(a.getNamePath()) !== void 0;
    }), j(ct(a), "getErrors", function() {
      return a.errors;
    }), j(ct(a), "getWarnings", function() {
      return a.warnings;
    }), j(ct(a), "isListField", function() {
      return a.props.isListField;
    }), j(ct(a), "isList", function() {
      return a.props.isList;
    }), j(ct(a), "isPreserve", function() {
      return a.props.preserve;
    }), j(ct(a), "getMeta", function() {
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
    }), j(ct(a), "getOnlyChild", function(c) {
      if (typeof c == "function") {
        var u = a.getMeta();
        return k(k({}, a.getOnlyChild(c(a.getControlled(), u, a.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var d = Dn(c);
      return d.length !== 1 || !/* @__PURE__ */ s.isValidElement(d[0]) ? {
        child: d,
        isFunction: !1
      } : {
        child: d[0],
        isFunction: !1
      };
    }), j(ct(a), "getValue", function(c) {
      var u = a.props.fieldContext.getFieldsValue, d = a.getNamePath();
      return Tn(c || u(!0), d);
    }), j(ct(a), "getControlled", function() {
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = a.props, d = u.trigger, f = u.validateTrigger, m = u.getValueFromEvent, g = u.normalize, b = u.valuePropName, p = u.getValueProps, v = u.fieldContext, h = f !== void 0 ? f : v.validateTrigger, y = a.getNamePath(), E = v.getInternalHooks, C = v.getFieldsValue, O = E(cr), x = O.dispatch, S = a.getValue(), R = p || function(A) {
        return j({}, b, A);
      }, _ = c[d], N = k(k({}, c), R(S));
      N[d] = function() {
        a.touched = !0, a.dirty = !0, a.triggerMetaEvent();
        for (var A, M = arguments.length, D = new Array(M), V = 0; V < M; V++)
          D[V] = arguments[V];
        m ? A = m.apply(void 0, D) : A = mb.apply(void 0, [b].concat(D)), g && (A = g(A, S, C(!0))), x({
          type: "updateValue",
          namePath: y,
          value: A
        }), _ && _.apply(void 0, D);
      };
      var F = ts(h || []);
      return F.forEach(function(A) {
        var M = N[A];
        N[A] = function() {
          M && M.apply(void 0, arguments);
          var D = a.props.rules;
          D && D.length && x({
            type: "validateField",
            namePath: y,
            triggerName: A
          });
        };
      }), N;
    }), r.fieldContext) {
      var o = r.fieldContext.getInternalHooks, i = o(cr), l = i.initEntityValue;
      l(ct(a));
    }
    return a;
  }
  return fn(n, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, o = a.shouldUpdate, i = a.fieldContext;
      if (this.mounted = !0, i) {
        var l = i.getInternalHooks, c = l(cr), u = c.registerField;
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
      return c ? u = l : /* @__PURE__ */ s.isValidElement(l) ? u = /* @__PURE__ */ s.cloneElement(l, this.getControlled(l.props)) : (ot(!l, "`children` of Field is not validate ReactElement."), u = l), /* @__PURE__ */ s.createElement(s.Fragment, {
        key: a
      }, u);
    }
  }]), n;
}(s.Component);
j(Us, "contextType", qr);
j(Us, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function Bd(e) {
  var t = e.name, n = wt(e, gb), r = s.useContext(qr), a = s.useContext(go), o = t !== void 0 ? Mt(t) : void 0, i = "keep";
  return n.isListField || (i = "_".concat((o || []).join("_"))), process.env.NODE_ENV !== "production" && n.preserve === !1 && n.isListField && o.length <= 1 && ot(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ s.createElement(Us, Ue({
    key: i,
    name: o,
    isListField: !!a
  }, n, {
    fieldContext: r
  }));
}
function pb(e) {
  var t = e.name, n = e.initialValue, r = e.children, a = e.rules, o = e.validateTrigger, i = e.isListField, l = s.useContext(qr), c = s.useContext(go), u = s.useRef({
    keys: [],
    id: 0
  }), d = u.current, f = s.useMemo(function() {
    var p = Mt(l.prefixName) || [];
    return [].concat(De(p), De(Mt(t)));
  }, [l.prefixName, t]), m = s.useMemo(function() {
    return k(k({}, l), {}, {
      prefixName: f
    });
  }, [l, f]), g = s.useMemo(function() {
    return {
      getKey: function(v) {
        var h = f.length, y = v[h];
        return [d.keys[y], v.slice(h + 1)];
      }
    };
  }, [f]);
  if (typeof r != "function")
    return ot(!1, "Form.List only accepts function as children."), null;
  var b = function(v, h, y) {
    var E = y.source;
    return E === "internal" ? !1 : v !== h;
  };
  return /* @__PURE__ */ s.createElement(go.Provider, {
    value: g
  }, /* @__PURE__ */ s.createElement(qr.Provider, {
    value: m
  }, /* @__PURE__ */ s.createElement(Bd, {
    name: [],
    shouldUpdate: b,
    rules: a,
    validateTrigger: o,
    initialValue: n,
    isList: !0,
    isListField: i ?? !!c
  }, function(p, v) {
    var h = p.value, y = h === void 0 ? [] : h, E = p.onChange, C = l.getFieldValue, O = function() {
      var _ = C(f || []);
      return _ || [];
    }, x = {
      add: function(_, N) {
        var F = O();
        N >= 0 && N <= F.length ? (d.keys = [].concat(De(d.keys.slice(0, N)), [d.id], De(d.keys.slice(N))), E([].concat(De(F.slice(0, N)), [_], De(F.slice(N))))) : (process.env.NODE_ENV !== "production" && (N < 0 || N > F.length) && ot(!1, "The second parameter of the add function should be a valid positive number."), d.keys = [].concat(De(d.keys), [d.id]), E([].concat(De(F), [_]))), d.id += 1;
      },
      remove: function(_) {
        var N = O(), F = new Set(Array.isArray(_) ? _ : [_]);
        F.size <= 0 || (d.keys = d.keys.filter(function(A, M) {
          return !F.has(M);
        }), E(N.filter(function(A, M) {
          return !F.has(M);
        })));
      },
      move: function(_, N) {
        if (_ !== N) {
          var F = O();
          _ < 0 || _ >= F.length || N < 0 || N >= F.length || (d.keys = Sc(d.keys, _, N), E(Sc(F, _, N)));
        }
      }
    }, S = y || [];
    return Array.isArray(S) || (S = [], process.env.NODE_ENV !== "production" && ot(!1, "Current value of '".concat(f.join(" > "), "' is not an array type."))), r(S.map(function(R, _) {
      var N = d.keys[_];
      return N === void 0 && (d.keys[_] = d.id, N = d.keys[_], d.id += 1), {
        name: _,
        key: N,
        isListField: !0
      };
    }), x, v);
  })));
}
function hb(e) {
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
var kd = "__@field_split__";
function fi(e) {
  return e.map(function(t) {
    return "".concat(Je(t), ":").concat(t);
  }).join(kd);
}
var Pr = /* @__PURE__ */ function() {
  function e() {
    dn(this, e), j(this, "kvs", /* @__PURE__ */ new Map());
  }
  return fn(e, [{
    key: "set",
    value: function(n, r) {
      this.kvs.set(fi(n), r);
    }
  }, {
    key: "get",
    value: function(n) {
      return this.kvs.get(fi(n));
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
      this.kvs.delete(fi(n));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(n) {
      return De(this.kvs.entries()).map(function(r) {
        var a = Y(r, 2), o = a[0], i = a[1], l = o.split(kd);
        return n({
          key: l.map(function(c) {
            var u = c.match(/^([^:]*):(.*)$/), d = Y(u, 3), f = d[1], m = d[2];
            return f === "number" ? Number(m) : m;
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
}(), bb = ["name"], yb = /* @__PURE__ */ fn(function e(t) {
  var n = this;
  dn(this, e), j(this, "formHooked", !1), j(this, "forceRootUpdate", void 0), j(this, "subscribable", !0), j(this, "store", {}), j(this, "fieldEntities", []), j(this, "initialValues", {}), j(this, "callbacks", {}), j(this, "validateMessages", null), j(this, "preserve", null), j(this, "lastValidatePromise", null), j(this, "getForm", function() {
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
  }), j(this, "getInternalHooks", function(r) {
    return r === cr ? (n.formHooked = !0, {
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
    }) : (ot(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), j(this, "useSubscribe", function(r) {
    n.subscribable = r;
  }), j(this, "prevWithoutPreserves", null), j(this, "setInitialValues", function(r, a) {
    if (n.initialValues = r || {}, a) {
      var o, i = Lr(r, n.store);
      (o = n.prevWithoutPreserves) === null || o === void 0 || o.map(function(l) {
        var c = l.key;
        i = _n(i, c, Tn(r, c));
      }), n.prevWithoutPreserves = null, n.updateStore(i);
    }
  }), j(this, "destroyForm", function() {
    var r = new Pr();
    n.getFieldEntities(!0).forEach(function(a) {
      n.isMergedPreserve(a.isPreserve()) || r.set(a.getNamePath(), !0);
    }), n.prevWithoutPreserves = r;
  }), j(this, "getInitialValue", function(r) {
    var a = Tn(n.initialValues, r);
    return r.length ? Lr(a) : a;
  }), j(this, "setCallbacks", function(r) {
    n.callbacks = r;
  }), j(this, "setValidateMessages", function(r) {
    n.validateMessages = r;
  }), j(this, "setPreserve", function(r) {
    n.preserve = r;
  }), j(this, "watchList", []), j(this, "registerWatch", function(r) {
    return n.watchList.push(r), function() {
      n.watchList = n.watchList.filter(function(a) {
        return a !== r;
      });
    };
  }), j(this, "notifyWatch", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (n.watchList.length) {
      var a = n.getFieldsValue(), o = n.getFieldsValue(!0);
      n.watchList.forEach(function(i) {
        i(a, o, r);
      });
    }
  }), j(this, "timeoutId", null), j(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !n.timeoutId && typeof window < "u" && (n.timeoutId = setTimeout(function() {
      n.timeoutId = null, n.formHooked || ot(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), j(this, "updateStore", function(r) {
    n.store = r;
  }), j(this, "getFieldEntities", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return r ? n.fieldEntities.filter(function(a) {
      return a.getNamePath().length;
    }) : n.fieldEntities;
  }), j(this, "getFieldsMap", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, a = new Pr();
    return n.getFieldEntities(r).forEach(function(o) {
      var i = o.getNamePath();
      a.set(i, o);
    }), a;
  }), j(this, "getFieldEntitiesForNamePathList", function(r) {
    if (!r)
      return n.getFieldEntities(!0);
    var a = n.getFieldsMap(!0);
    return r.map(function(o) {
      var i = Mt(o);
      return a.get(i) || {
        INVALIDATE_NAME_PATH: Mt(o)
      };
    });
  }), j(this, "getFieldsValue", function(r, a) {
    n.warningUnhooked();
    var o, i, l;
    if (r === !0 || Array.isArray(r) ? (o = r, i = a) : r && Je(r) === "object" && (l = r.strict, i = r.filter), o === !0 && !i)
      return n.store;
    var c = n.getFieldEntitiesForNamePathList(Array.isArray(o) ? o : null), u = [];
    return c.forEach(function(d) {
      var f, m, g = "INVALIDATE_NAME_PATH" in d ? d.INVALIDATE_NAME_PATH : d.getNamePath();
      if (l) {
        var b, p;
        if ((b = (p = d).isList) !== null && b !== void 0 && b.call(p))
          return;
      } else if (!o && (f = (m = d).isListField) !== null && f !== void 0 && f.call(m))
        return;
      if (!i)
        u.push(g);
      else {
        var v = "getMeta" in d ? d.getMeta() : null;
        i(v) && u.push(g);
      }
    }), yc(n.store, u.map(Mt));
  }), j(this, "getFieldValue", function(r) {
    n.warningUnhooked();
    var a = Mt(r);
    return Tn(n.store, a);
  }), j(this, "getFieldsError", function(r) {
    n.warningUnhooked();
    var a = n.getFieldEntitiesForNamePathList(r);
    return a.map(function(o, i) {
      return o && !("INVALIDATE_NAME_PATH" in o) ? {
        name: o.getNamePath(),
        errors: o.getErrors(),
        warnings: o.getWarnings()
      } : {
        name: Mt(r[i]),
        errors: [],
        warnings: []
      };
    });
  }), j(this, "getFieldError", function(r) {
    n.warningUnhooked();
    var a = Mt(r), o = n.getFieldsError([a])[0];
    return o.errors;
  }), j(this, "getFieldWarning", function(r) {
    n.warningUnhooked();
    var a = Mt(r), o = n.getFieldsError([a])[0];
    return o.warnings;
  }), j(this, "isFieldsTouched", function() {
    n.warningUnhooked();
    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
      a[o] = arguments[o];
    var i = a[0], l = a[1], c, u = !1;
    a.length === 0 ? c = null : a.length === 1 ? Array.isArray(i) ? (c = i.map(Mt), u = !1) : (c = null, u = i) : (c = i.map(Mt), u = l);
    var d = n.getFieldEntities(!0), f = function(v) {
      return v.isFieldTouched();
    };
    if (!c)
      return u ? d.every(f) : d.some(f);
    var m = new Pr();
    c.forEach(function(p) {
      m.set(p, []);
    }), d.forEach(function(p) {
      var v = p.getNamePath();
      c.forEach(function(h) {
        h.every(function(y, E) {
          return v[E] === y;
        }) && m.update(h, function(y) {
          return [].concat(De(y), [p]);
        });
      });
    });
    var g = function(v) {
      return v.some(f);
    }, b = m.map(function(p) {
      var v = p.value;
      return v;
    });
    return u ? b.every(g) : b.some(g);
  }), j(this, "isFieldTouched", function(r) {
    return n.warningUnhooked(), n.isFieldsTouched([r]);
  }), j(this, "isFieldsValidating", function(r) {
    n.warningUnhooked();
    var a = n.getFieldEntities();
    if (!r)
      return a.some(function(i) {
        return i.isFieldValidating();
      });
    var o = r.map(Mt);
    return a.some(function(i) {
      var l = i.getNamePath();
      return Br(o, l) && i.isFieldValidating();
    });
  }), j(this, "isFieldValidating", function(r) {
    return n.warningUnhooked(), n.isFieldsValidating([r]);
  }), j(this, "resetWithFieldInitialValue", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = new Pr(), o = n.getFieldEntities(!0);
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
          var m = d.getNamePath(), g = n.getInitialValue(m);
          if (g !== void 0)
            ot(!1, "Form already set 'initialValues' with path '".concat(m.join("."), "'. Field can not overwrite it."));
          else {
            var b = a.get(m);
            if (b && b.size > 1)
              ot(!1, "Multiple Field with path '".concat(m.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (b) {
              var p = n.getFieldValue(m), v = d.isListField();
              !v && (!r.skipExist || p === void 0) && n.updateStore(_n(n.store, m, De(b)[0].value));
            }
          }
        }
      });
    }, l;
    r.entities ? l = r.entities : r.namePathList ? (l = [], r.namePathList.forEach(function(c) {
      var u = a.get(c);
      if (u) {
        var d;
        (d = l).push.apply(d, De(De(u).map(function(f) {
          return f.entity;
        })));
      }
    })) : l = o, i(l);
  }), j(this, "resetFields", function(r) {
    n.warningUnhooked();
    var a = n.store;
    if (!r) {
      n.updateStore(Lr(n.initialValues)), n.resetWithFieldInitialValue(), n.notifyObservers(a, null, {
        type: "reset"
      }), n.notifyWatch();
      return;
    }
    var o = r.map(Mt);
    o.forEach(function(i) {
      var l = n.getInitialValue(i);
      n.updateStore(_n(n.store, i, l));
    }), n.resetWithFieldInitialValue({
      namePathList: o
    }), n.notifyObservers(a, o, {
      type: "reset"
    }), n.notifyWatch(o);
  }), j(this, "setFields", function(r) {
    n.warningUnhooked();
    var a = n.store, o = [];
    r.forEach(function(i) {
      var l = i.name, c = wt(i, bb), u = Mt(l);
      o.push(u), "value" in c && n.updateStore(_n(n.store, u, c.value)), n.notifyObservers(a, [u], {
        type: "setField",
        data: i
      });
    }), n.notifyWatch(o);
  }), j(this, "getFields", function() {
    var r = n.getFieldEntities(!0), a = r.map(function(o) {
      var i = o.getNamePath(), l = o.getMeta(), c = k(k({}, l), {}, {
        name: i,
        value: n.getFieldValue(i)
      });
      return Object.defineProperty(c, "originRCField", {
        value: !0
      }), c;
    });
    return a;
  }), j(this, "initEntityValue", function(r) {
    var a = r.props.initialValue;
    if (a !== void 0) {
      var o = r.getNamePath(), i = Tn(n.store, o);
      i === void 0 && n.updateStore(_n(n.store, o, a));
    }
  }), j(this, "isMergedPreserve", function(r) {
    var a = r !== void 0 ? r : n.preserve;
    return a ?? !0;
  }), j(this, "registerField", function(r) {
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
            !Hd(f.getNamePath(), a)
          );
        })) {
          var d = n.store;
          n.updateStore(_n(d, a, u, !0)), n.notifyObservers(d, [a], {
            type: "remove"
          }), n.triggerDependenciesUpdate(d, a);
        }
      }
      n.notifyWatch([a]);
    };
  }), j(this, "dispatch", function(r) {
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
  }), j(this, "notifyObservers", function(r, a, o) {
    if (n.subscribable) {
      var i = k(k({}, o), {}, {
        store: n.getFieldsValue(!0)
      });
      n.getFieldEntities().forEach(function(l) {
        var c = l.onStoreChange;
        c(r, a, i);
      });
    } else
      n.forceRootUpdate();
  }), j(this, "triggerDependenciesUpdate", function(r, a) {
    var o = n.getDependencyChildrenFields(a);
    return o.length && n.validateFields(o), n.notifyObservers(r, o, {
      type: "dependenciesUpdate",
      relatedFields: [a].concat(De(o))
    }), o;
  }), j(this, "updateValue", function(r, a) {
    var o = Mt(r), i = n.store;
    n.updateStore(_n(n.store, o, a)), n.notifyObservers(i, [o], {
      type: "valueUpdate",
      source: "internal"
    }), n.notifyWatch([o]);
    var l = n.triggerDependenciesUpdate(i, o), c = n.callbacks.onValuesChange;
    if (c) {
      var u = yc(n.store, [o]);
      c(u, n.getFieldsValue());
    }
    n.triggerOnFieldsChange([o].concat(De(l)));
  }), j(this, "setFieldsValue", function(r) {
    n.warningUnhooked();
    var a = n.store;
    if (r) {
      var o = Lr(n.store, r);
      n.updateStore(o);
    }
    n.notifyObservers(a, null, {
      type: "valueUpdate",
      source: "external"
    }), n.notifyWatch();
  }), j(this, "setFieldValue", function(r, a) {
    n.setFields([{
      name: r,
      value: a
    }]);
  }), j(this, "getDependencyChildrenFields", function(r) {
    var a = /* @__PURE__ */ new Set(), o = [], i = new Pr();
    n.getFieldEntities().forEach(function(c) {
      var u = c.props.dependencies;
      (u || []).forEach(function(d) {
        var f = Mt(d);
        i.update(f, function() {
          var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return m.add(c), m;
        });
      });
    });
    var l = function c(u) {
      var d = i.get(u) || /* @__PURE__ */ new Set();
      d.forEach(function(f) {
        if (!a.has(f)) {
          a.add(f);
          var m = f.getNamePath();
          f.isFieldDirty() && m.length && (o.push(m), c(m));
        }
      });
    };
    return l(r), o;
  }), j(this, "triggerOnFieldsChange", function(r, a) {
    var o = n.callbacks.onFieldsChange;
    if (o) {
      var i = n.getFields();
      if (a) {
        var l = new Pr();
        a.forEach(function(u) {
          var d = u.name, f = u.errors;
          l.set(d, f);
        }), i.forEach(function(u) {
          u.errors = l.get(u.name) || u.errors;
        });
      }
      var c = i.filter(function(u) {
        var d = u.name;
        return Br(r, d);
      });
      c.length && o(c, i);
    }
  }), j(this, "validateFields", function(r, a) {
    var o;
    n.warningUnhooked();
    var i, l;
    Array.isArray(r) || typeof r == "string" || typeof a == "string" ? (i = r, l = a) : l = r;
    var c = !!i, u = c ? i.map(Mt) : [], d = [], f = String(Date.now()), m = /* @__PURE__ */ new Set(), g = (o = l) === null || o === void 0 ? void 0 : o.recursive;
    n.getFieldEntities(!0).forEach(function(h) {
      if (c || u.push(h.getNamePath()), !(!h.props.rules || !h.props.rules.length)) {
        var y = h.getNamePath();
        if (m.add(y.join(f)), !c || Br(u, y, g)) {
          var E = h.validateRules(k({
            validateMessages: k(k({}, zd), n.validateMessages)
          }, l));
          d.push(E.then(function() {
            return {
              name: y,
              errors: [],
              warnings: []
            };
          }).catch(function(C) {
            var O, x = [], S = [];
            return (O = C.forEach) === null || O === void 0 || O.call(C, function(R) {
              var _ = R.rule.warningOnly, N = R.errors;
              _ ? S.push.apply(S, De(N)) : x.push.apply(x, De(N));
            }), x.length ? Promise.reject({
              name: y,
              errors: x,
              warnings: S
            }) : {
              name: y,
              errors: x,
              warnings: S
            };
          }));
        }
      }
    });
    var b = hb(d);
    n.lastValidatePromise = b, b.catch(function(h) {
      return h;
    }).then(function(h) {
      var y = h.map(function(E) {
        var C = E.name;
        return C;
      });
      n.notifyObservers(n.store, y, {
        type: "validateFinish"
      }), n.triggerOnFieldsChange(y, h);
    });
    var p = b.then(function() {
      return n.lastValidatePromise === b ? Promise.resolve(n.getFieldsValue(u)) : Promise.reject([]);
    }).catch(function(h) {
      var y = h.filter(function(E) {
        return E && E.errors.length;
      });
      return Promise.reject({
        values: n.getFieldsValue(u),
        errorFields: y,
        outOfDate: n.lastValidatePromise !== b
      });
    });
    p.catch(function(h) {
      return h;
    });
    var v = u.filter(function(h) {
      return m.has(h.join(f));
    });
    return n.triggerOnFieldsChange(v), p;
  }), j(this, "submit", function() {
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
function Wd(e) {
  var t = s.useRef(), n = s.useState({}), r = Y(n, 2), a = r[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var o = function() {
        a({});
      }, i = new yb(o);
      t.current = i.getForm();
    }
  return [t.current];
}
var ds = /* @__PURE__ */ s.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), Sb = function(t) {
  var n = t.validateMessages, r = t.onFormChange, a = t.onFormFinish, o = t.children, i = s.useContext(ds), l = s.useRef({});
  return /* @__PURE__ */ s.createElement(ds.Provider, {
    value: k(k({}, i), {}, {
      validateMessages: k(k({}, i.validateMessages), n),
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
        u && (l.current = k(k({}, l.current), {}, j({}, u, d))), i.registerForm(u, d);
      },
      unregisterForm: function(u) {
        var d = k({}, l.current);
        delete d[u], l.current = d, i.unregisterForm(u);
      }
    })
  }, o);
}, Eb = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"], Cb = function(t, n) {
  var r = t.name, a = t.initialValues, o = t.fields, i = t.form, l = t.preserve, c = t.children, u = t.component, d = u === void 0 ? "form" : u, f = t.validateMessages, m = t.validateTrigger, g = m === void 0 ? "onChange" : m, b = t.onValuesChange, p = t.onFieldsChange, v = t.onFinish, h = t.onFinishFailed, y = wt(t, Eb), E = s.useContext(ds), C = Wd(i), O = Y(C, 1), x = O[0], S = x.getInternalHooks(cr), R = S.useSubscribe, _ = S.setInitialValues, N = S.setCallbacks, F = S.setValidateMessages, A = S.setPreserve, M = S.destroyForm;
  s.useImperativeHandle(n, function() {
    return x;
  }), s.useEffect(function() {
    return E.registerForm(r, x), function() {
      E.unregisterForm(r);
    };
  }, [E, x, r]), F(k(k({}, E.validateMessages), f)), N({
    onValuesChange: b,
    onFieldsChange: function(W) {
      if (E.triggerFormChange(r, W), p) {
        for (var G = arguments.length, U = new Array(G > 1 ? G - 1 : 0), ne = 1; ne < G; ne++)
          U[ne - 1] = arguments[ne];
        p.apply(void 0, [W].concat(U));
      }
    },
    onFinish: function(W) {
      E.triggerFormFinish(r, W), v && v(W);
    },
    onFinishFailed: h
  }), A(l);
  var D = s.useRef(null);
  _(a, !D.current), D.current || (D.current = !0), s.useEffect(
    function() {
      return M;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var V, P = typeof c == "function";
  if (P) {
    var I = x.getFieldsValue(!0);
    V = c(I, x);
  } else
    V = c;
  R(!P);
  var T = s.useRef();
  s.useEffect(function() {
    vb(T.current || [], o || []) || x.setFields(o || []), T.current = o;
  }, [o, x]);
  var z = s.useMemo(function() {
    return k(k({}, x), {}, {
      validateTrigger: g
    });
  }, [x, g]), L = /* @__PURE__ */ s.createElement(go.Provider, {
    value: null
  }, /* @__PURE__ */ s.createElement(qr.Provider, {
    value: z
  }, V));
  return d === !1 ? L : /* @__PURE__ */ s.createElement(d, Ue({}, y, {
    onSubmit: function(W) {
      W.preventDefault(), W.stopPropagation(), x.submit();
    },
    onReset: function(W) {
      var G;
      W.preventDefault(), x.resetFields(), (G = y.onReset) === null || G === void 0 || G.call(y, W);
    }
  }), L);
};
function Cc(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var wb = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), n = s.useRef(t);
  ot(n.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function xb() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0], a = r === void 0 ? [] : r, o = t[1], i = o === void 0 ? {} : o, l = P0(i) ? {
    form: i
  } : i, c = l.form, u = s.useState(), d = Y(u, 2), f = d[0], m = d[1], g = s.useMemo(function() {
    return Cc(f);
  }, [f]), b = s.useRef(g);
  b.current = g;
  var p = s.useContext(qr), v = c || p, h = v && v._init;
  process.env.NODE_ENV !== "production" && ot(t.length === 2 ? c ? h : !0 : h, "useWatch requires a form instance since it can not auto detect from context.");
  var y = Mt(a), E = s.useRef(y);
  return E.current = y, wb(y), s.useEffect(
    function() {
      if (h) {
        var C = v.getFieldsValue, O = v.getInternalHooks, x = O(cr), S = x.registerWatch, R = S(function(N, F) {
          var A = Tn(l.preserve ? F : N, E.current), M = Cc(A);
          b.current !== M && (b.current = M, m(A));
        }), _ = Tn(l.preserve ? C(!0) : C(), E.current);
        return f !== _ && m(_), R;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [h]
  ), f;
}
var Ob = /* @__PURE__ */ s.forwardRef(Cb), Ia = Ob;
Ia.FormProvider = Sb;
Ia.Field = Bd;
Ia.List = pb;
Ia.useForm = Wd;
Ia.useWatch = xb;
const Kn = /* @__PURE__ */ s.createContext({});
process.env.NODE_ENV !== "production" && (Kn.displayName = "FormItemInputContext");
const po = (e) => {
  let {
    children: t,
    status: n,
    override: r
  } = e;
  const a = s.useContext(Kn), o = s.useMemo(() => {
    const i = Object.assign({}, a);
    return r && delete i.isFormItemInput, n && (delete i.status, delete i.hasFeedback, delete i.feedbackIcon), i;
  }, [n, r, a]);
  return /* @__PURE__ */ s.createElement(Kn.Provider, {
    value: o
  }, t);
}, Rb = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), $b = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Ud = function(e, t, n, r) {
  const o = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]: Object.assign(Object.assign({}, Rb(r)), {
      animationPlayState: "paused"
    }),
    [`${o}${e}-leave`]: Object.assign(Object.assign({}, $b(r)), {
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
}, Ib = new qt("antMoveDownIn", {
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
}), Nb = new qt("antMoveDownOut", {
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
}), _b = new qt("antMoveLeftIn", {
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
}), Pb = new qt("antMoveLeftOut", {
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
}), Tb = new qt("antMoveRightIn", {
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
}), Mb = new qt("antMoveRightOut", {
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
}), Ab = new qt("antMoveUpIn", {
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
}), Fb = new qt("antMoveUpOut", {
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
}), Db = {
  "move-up": {
    inKeyframes: Ab,
    outKeyframes: Fb
  },
  "move-down": {
    inKeyframes: Ib,
    outKeyframes: Nb
  },
  "move-left": {
    inKeyframes: _b,
    outKeyframes: Pb
  },
  "move-right": {
    inKeyframes: Tb,
    outKeyframes: Mb
  }
}, wc = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = Db[t];
  return [Ud(r, a, o, e.motionDurationMid), {
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
}, Gd = new qt("antSlideUpIn", {
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
}), qd = new qt("antSlideUpOut", {
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
}), Kd = new qt("antSlideDownIn", {
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
}), Yd = new qt("antSlideDownOut", {
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
}), jb = new qt("antSlideLeftIn", {
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
}), Lb = new qt("antSlideLeftOut", {
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
}), Vb = new qt("antSlideRightIn", {
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
}), zb = new qt("antSlideRightOut", {
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
}), Hb = {
  "slide-up": {
    inKeyframes: Gd,
    outKeyframes: qd
  },
  "slide-down": {
    inKeyframes: Kd,
    outKeyframes: Yd
  },
  "slide-left": {
    inKeyframes: jb,
    outKeyframes: Lb
  },
  "slide-right": {
    inKeyframes: Vb,
    outKeyframes: zb
  }
}, xc = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: a,
    outKeyframes: o
  } = Hb[t];
  return [Ud(r, a, o, e.motionDurationMid), {
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
function Bb(e) {
  return function(n) {
    return /* @__PURE__ */ s.createElement(rr, {
      theme: {
        token: {
          motion: !1,
          zIndexPopupBase: 0
        }
      }
    }, /* @__PURE__ */ s.createElement(e, Object.assign({}, n)));
  };
}
function Xd(e, t, n, r) {
  function a(o) {
    const {
      prefixCls: i,
      style: l
    } = o, c = s.useRef(null), [u, d] = s.useState(0), [f, m] = s.useState(0), [g, b] = br(!1, {
      value: o.open
    }), {
      getPrefixCls: p
    } = s.useContext(Pt), v = p(t || "select", i);
    s.useEffect(() => {
      if (b(!0), typeof ResizeObserver < "u") {
        const y = new ResizeObserver((C) => {
          const O = C[0].target;
          d(O.offsetHeight + 8), m(O.offsetWidth);
        }), E = setInterval(() => {
          var C;
          const O = n ? `.${n(v)}` : `.${v}-dropdown`, x = (C = c.current) === null || C === void 0 ? void 0 : C.querySelector(O);
          x && (clearInterval(E), y.observe(x));
        }, 10);
        return () => {
          clearInterval(E), y.disconnect();
        };
      }
    }, []);
    let h = Object.assign(Object.assign({}, o), {
      style: Object.assign(Object.assign({}, l), {
        margin: 0
      }),
      open: g,
      visible: g,
      getPopupContainer: () => c.current
    });
    return r && (h = r(h)), /* @__PURE__ */ s.createElement("div", {
      ref: c,
      style: {
        paddingBottom: u,
        position: "relative",
        minWidth: f
      }
    }, /* @__PURE__ */ s.createElement(e, Object.assign({}, h)));
  }
  return Bb(a);
}
const Gs = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
};
var Lo = function(t) {
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
    className: Oe(n.split(/\s+/).map(function(u) {
      return "".concat(u, "-icon");
    }))
  }, l));
};
function kb(e, t, n, r, a) {
  var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1, i = arguments.length > 6 ? arguments[6] : void 0, l = arguments.length > 7 ? arguments[7] : void 0, c = Re.useMemo(function() {
    if (Je(r) === "object")
      return r.clearIcon;
    if (a)
      return a;
  }, [r, a]), u = Re.useMemo(function() {
    return !!(!o && r && (n.length || i) && !(l === "combobox" && i === ""));
  }, [r, o, n.length, i, l]);
  return {
    allowClear: u,
    clearIcon: /* @__PURE__ */ Re.createElement(Lo, {
      className: "".concat(e, "-clear"),
      onMouseDown: t,
      customizeIcon: c
    }, "×")
  };
}
var Qd = /* @__PURE__ */ s.createContext(null);
function Wb() {
  return s.useContext(Qd);
}
function Ub() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10, t = s.useState(!1), n = Y(t, 2), r = n[0], a = n[1], o = s.useRef(null), i = function() {
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
function Jd() {
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
function Gb(e, t, n, r) {
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
var qb = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], Tr = void 0;
function Kb(e, t) {
  var n = e.prefixCls, r = e.invalidate, a = e.item, o = e.renderItem, i = e.responsive, l = e.responsiveDisabled, c = e.registerSize, u = e.itemKey, d = e.className, f = e.style, m = e.children, g = e.display, b = e.order, p = e.component, v = p === void 0 ? "div" : p, h = wt(e, qb), y = i && !g;
  function E(R) {
    c(u, R);
  }
  s.useEffect(function() {
    return function() {
      E(null);
    };
  }, []);
  var C = o && a !== Tr ? o(a) : m, O;
  r || (O = {
    opacity: y ? 0 : 1,
    height: y ? 0 : Tr,
    overflowY: y ? "hidden" : Tr,
    order: i ? b : Tr,
    pointerEvents: y ? "none" : Tr,
    position: y ? "absolute" : Tr
  });
  var x = {};
  y && (x["aria-hidden"] = !0);
  var S = /* @__PURE__ */ s.createElement(v, Ue({
    className: Oe(!r && n, d),
    style: k(k({}, O), f)
  }, x, h, {
    ref: t
  }), C);
  return i && (S = /* @__PURE__ */ s.createElement(Yn, {
    onResize: function(_) {
      var N = _.offsetWidth;
      E(N);
    },
    disabled: l
  }, S)), S;
}
var ma = /* @__PURE__ */ s.forwardRef(Kb);
ma.displayName = "Item";
function Yb(e) {
  if (typeof MessageChannel > "u")
    Ct(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function Xb() {
  var e = s.useRef(null), t = function(r) {
    e.current || (e.current = [], Yb(function() {
      pa.unstable_batchedUpdates(function() {
        e.current.forEach(function(a) {
          a();
        }), e.current = null;
      });
    })), e.current.push(r);
  };
  return t;
}
function oa(e, t) {
  var n = s.useState(t), r = Y(n, 2), a = r[0], o = r[1], i = cn(function(l) {
    e(function() {
      o(l);
    });
  });
  return [a, i];
}
var ho = /* @__PURE__ */ Re.createContext(null), Qb = ["component"], Jb = ["className"], Zb = ["className"], ey = function(t, n) {
  var r = s.useContext(ho);
  if (!r) {
    var a = t.component, o = a === void 0 ? "div" : a, i = wt(t, Qb);
    return /* @__PURE__ */ s.createElement(o, Ue({}, i, {
      ref: n
    }));
  }
  var l = r.className, c = wt(r, Jb), u = t.className, d = wt(t, Zb);
  return /* @__PURE__ */ s.createElement(ho.Provider, {
    value: null
  }, /* @__PURE__ */ s.createElement(ma, Ue({
    ref: n,
    className: Oe(l, u)
  }, c, d)));
}, Zd = /* @__PURE__ */ s.forwardRef(ey);
Zd.displayName = "RawItem";
var ty = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], ef = "responsive", tf = "invalidate";
function ny(e) {
  return "+ ".concat(e.length, " ...");
}
function ry(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-overflow" : n, a = e.data, o = a === void 0 ? [] : a, i = e.renderItem, l = e.renderRawItem, c = e.itemKey, u = e.itemWidth, d = u === void 0 ? 10 : u, f = e.ssr, m = e.style, g = e.className, b = e.maxCount, p = e.renderRest, v = e.renderRawRest, h = e.suffix, y = e.component, E = y === void 0 ? "div" : y, C = e.itemComponent, O = e.onVisibleChange, x = wt(e, ty), S = f === "full", R = Xb(), _ = oa(R, null), N = Y(_, 2), F = N[0], A = N[1], M = F || 0, D = oa(R, /* @__PURE__ */ new Map()), V = Y(D, 2), P = V[0], I = V[1], T = oa(R, 0), z = Y(T, 2), L = z[0], H = z[1], W = oa(R, 0), G = Y(W, 2), U = G[0], ne = G[1], se = oa(R, 0), J = Y(se, 2), X = J[0], ee = J[1], oe = s.useState(null), Ce = Y(oe, 2), be = Ce[0], ue = Ce[1], q = s.useState(null), $e = Y(q, 2), Ie = $e[0], _e = $e[1], fe = s.useMemo(function() {
    return Ie === null && S ? Number.MAX_SAFE_INTEGER : Ie || 0;
  }, [Ie, F]), xe = s.useState(!1), me = Y(xe, 2), pe = me[0], je = me[1], Ke = "".concat(r, "-item"), Le = Math.max(L, U), he = b === ef, ge = o.length && he, Ve = b === tf, tt = ge || typeof b == "number" && o.length > b, qe = s.useMemo(function() {
    var Ae = o;
    return ge ? F === null && S ? Ae = o : Ae = o.slice(0, Math.min(o.length, M / d)) : typeof b == "number" && (Ae = o.slice(0, b)), Ae;
  }, [o, d, F, b, ge]), st = s.useMemo(function() {
    return ge ? o.slice(fe + 1) : o.slice(qe.length);
  }, [o, qe, ge, fe]), ke = s.useCallback(function(Ae, re) {
    var te;
    return typeof c == "function" ? c(Ae) : (te = c && (Ae == null ? void 0 : Ae[c])) !== null && te !== void 0 ? te : re;
  }, [c]), Ft = s.useCallback(i || function(Ae) {
    return Ae;
  }, [i]);
  function pt(Ae, re, te) {
    Ie === Ae && (re === void 0 || re === be) || (_e(Ae), te || (je(Ae < o.length - 1), O == null || O(Ae)), re !== void 0 && ue(re));
  }
  function dt(Ae, re) {
    A(re.clientWidth);
  }
  function nt(Ae, re) {
    I(function(te) {
      var de = new Map(te);
      return re === null ? de.delete(Ae) : de.set(Ae, re), de;
    });
  }
  function yt(Ae, re) {
    ne(re), H(U);
  }
  function ut(Ae, re) {
    ee(re);
  }
  function rt(Ae) {
    return P.get(ke(qe[Ae], Ae));
  }
  xt(function() {
    if (M && typeof Le == "number" && qe) {
      var Ae = X, re = qe.length, te = re - 1;
      if (!re) {
        pt(0, null);
        return;
      }
      for (var de = 0; de < re; de += 1) {
        var Me = rt(de);
        if (S && (Me = Me || 0), Me === void 0) {
          pt(de - 1, void 0, !0);
          break;
        }
        if (Ae += Me, // Only one means `totalWidth` is the final width
        te === 0 && Ae <= M || // Last two width will be the final width
        de === te - 1 && Ae + rt(te) <= M) {
          pt(te, null);
          break;
        } else if (Ae + Le > M) {
          pt(de - 1, Ae - Me - X + U);
          break;
        }
      }
      h && rt(0) + X > M && ue(null);
    }
  }, [M, P, U, X, ke, qe]);
  var Ye = pe && !!st.length, ye = {};
  be !== null && ge && (ye = {
    position: "absolute",
    left: be,
    top: 0
  });
  var Se = {
    prefixCls: Ke,
    responsive: ge,
    component: C,
    invalidate: Ve
  }, Te = l ? function(Ae, re) {
    var te = ke(Ae, re);
    return /* @__PURE__ */ s.createElement(ho.Provider, {
      key: te,
      value: k(k({}, Se), {}, {
        order: re,
        item: Ae,
        itemKey: te,
        registerSize: nt,
        display: re <= fe
      })
    }, l(Ae, re));
  } : function(Ae, re) {
    var te = ke(Ae, re);
    return /* @__PURE__ */ s.createElement(ma, Ue({}, Se, {
      order: re,
      key: te,
      item: Ae,
      renderItem: Ft,
      itemKey: te,
      registerSize: nt,
      display: re <= fe
    }));
  }, ie, we = {
    order: Ye ? fe : Number.MAX_SAFE_INTEGER,
    className: "".concat(Ke, "-rest"),
    registerSize: yt,
    display: Ye
  };
  if (v)
    v && (ie = /* @__PURE__ */ s.createElement(ho.Provider, {
      value: k(k({}, Se), we)
    }, v(st)));
  else {
    var Xe = p || ny;
    ie = /* @__PURE__ */ s.createElement(ma, Ue({}, Se, we), typeof Xe == "function" ? Xe(st) : Xe);
  }
  var Qe = /* @__PURE__ */ s.createElement(E, Ue({
    className: Oe(!Ve && r, g),
    style: m,
    ref: t
  }, x), qe.map(Te), tt ? ie : null, h && /* @__PURE__ */ s.createElement(ma, Ue({}, Se, {
    responsive: he,
    responsiveDisabled: !ge,
    order: fe,
    className: "".concat(Ke, "-suffix"),
    registerSize: ut,
    display: !0,
    style: ye
  }), h));
  return he && (Qe = /* @__PURE__ */ s.createElement(Yn, {
    onResize: dt,
    disabled: !ge
  }, Qe)), Qe;
}
var Na = /* @__PURE__ */ s.forwardRef(ry);
Na.displayName = "Overflow";
Na.Item = Zd;
Na.RESPONSIVE = ef;
Na.INVALIDATE = tf;
var ay = function(t, n) {
  var r, a, o = t.prefixCls, i = t.id, l = t.inputElement, c = t.disabled, u = t.tabIndex, d = t.autoFocus, f = t.autoComplete, m = t.editable, g = t.activeDescendantId, b = t.value, p = t.maxLength, v = t.onKeyDown, h = t.onMouseDown, y = t.onChange, E = t.onPaste, C = t.onCompositionStart, O = t.onCompositionEnd, x = t.open, S = t.attrs, R = l || /* @__PURE__ */ s.createElement("input", null), _ = R, N = _.ref, F = _.props, A = F.onKeyDown, M = F.onChange, D = F.onMouseDown, V = F.onCompositionStart, P = F.onCompositionEnd, I = F.style;
  return pr(!("maxLength" in R.props), "Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled."), R = /* @__PURE__ */ s.cloneElement(R, k(k(k({
    type: "search"
  }, F), {}, {
    // Override over origin props
    id: i,
    ref: jn(n, N),
    disabled: c,
    tabIndex: u,
    autoComplete: f || "off",
    autoFocus: d,
    className: Oe("".concat(o, "-selection-search-input"), (r = R) === null || r === void 0 || (a = r.props) === null || a === void 0 ? void 0 : a.className),
    role: "combobox",
    "aria-expanded": x || !1,
    "aria-haspopup": "listbox",
    "aria-owns": "".concat(i, "_list"),
    "aria-autocomplete": "list",
    "aria-controls": "".concat(i, "_list"),
    "aria-activedescendant": x ? g : void 0
  }, S), {}, {
    value: m ? b : "",
    maxLength: p,
    readOnly: !m,
    unselectable: m ? null : "on",
    style: k(k({}, I), {}, {
      opacity: m ? null : 0
    }),
    onKeyDown: function(z) {
      v(z), A && A(z);
    },
    onMouseDown: function(z) {
      h(z), D && D(z);
    },
    onChange: function(z) {
      y(z), M && M(z);
    },
    onCompositionStart: function(z) {
      C(z), V && V(z);
    },
    onCompositionEnd: function(z) {
      O(z), P && P(z);
    },
    onPaste: E
  })), R;
}, qs = /* @__PURE__ */ s.forwardRef(ay);
qs.displayName = "Input";
function Ks(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
var oy = typeof window < "u" && window.document && window.document.documentElement, iy = process.env.NODE_ENV !== "test" && oy;
function sy(e) {
  return e != null;
}
function ly(e) {
  return !e && e !== 0;
}
function Oc(e) {
  return ["string", "number"].includes(Je(e));
}
function nf(e) {
  var t = void 0;
  return e && (Oc(e.title) ? t = e.title.toString() : Oc(e.label) && (t = e.label.toString())), t;
}
function cy(e, t) {
  iy ? s.useLayoutEffect(e, t) : s.useEffect(e, t);
}
function uy(e) {
  var t;
  return (t = e.key) !== null && t !== void 0 ? t : e.value;
}
var Rc = function(t) {
  t.preventDefault(), t.stopPropagation();
}, dy = function(t) {
  var n = t.id, r = t.prefixCls, a = t.values, o = t.open, i = t.searchValue, l = t.autoClearSearchValue, c = t.inputRef, u = t.placeholder, d = t.disabled, f = t.mode, m = t.showSearch, g = t.autoFocus, b = t.autoComplete, p = t.activeDescendantId, v = t.tabIndex, h = t.removeIcon, y = t.maxTagCount, E = t.maxTagTextLength, C = t.maxTagPlaceholder, O = C === void 0 ? function(ue) {
    return "+ ".concat(ue.length, " ...");
  } : C, x = t.tagRender, S = t.onToggleOpen, R = t.onRemove, _ = t.onInputChange, N = t.onInputPaste, F = t.onInputKeyDown, A = t.onInputMouseDown, M = t.onInputCompositionStart, D = t.onInputCompositionEnd, V = s.useRef(null), P = s.useState(0), I = Y(P, 2), T = I[0], z = I[1], L = s.useState(!1), H = Y(L, 2), W = H[0], G = H[1], U = "".concat(r, "-selection"), ne = o || f === "multiple" && l === !1 || f === "tags" ? i : "", se = f === "tags" || f === "multiple" && l === !1 || m && (o || W);
  cy(function() {
    z(V.current.scrollWidth);
  }, [ne]);
  function J(ue, q, $e, Ie, _e) {
    return /* @__PURE__ */ s.createElement("span", {
      className: Oe("".concat(U, "-item"), j({}, "".concat(U, "-item-disabled"), $e)),
      title: nf(ue)
    }, /* @__PURE__ */ s.createElement("span", {
      className: "".concat(U, "-item-content")
    }, q), Ie && /* @__PURE__ */ s.createElement(Lo, {
      className: "".concat(U, "-item-remove"),
      onMouseDown: Rc,
      onClick: _e,
      customizeIcon: h
    }, "×"));
  }
  function X(ue, q, $e, Ie, _e) {
    var fe = function(me) {
      Rc(me), S(!o);
    };
    return /* @__PURE__ */ s.createElement("span", {
      onMouseDown: fe
    }, x({
      label: q,
      value: ue,
      disabled: $e,
      closable: Ie,
      onClose: _e
    }));
  }
  function ee(ue) {
    var q = ue.disabled, $e = ue.label, Ie = ue.value, _e = !d && !q, fe = $e;
    if (typeof E == "number" && (typeof $e == "string" || typeof $e == "number")) {
      var xe = String(fe);
      xe.length > E && (fe = "".concat(xe.slice(0, E), "..."));
    }
    var me = function(je) {
      je && je.stopPropagation(), R(ue);
    };
    return typeof x == "function" ? X(Ie, fe, q, _e, me) : J(ue, fe, q, _e, me);
  }
  function oe(ue) {
    var q = typeof O == "function" ? O(ue) : O;
    return J({
      title: q
    }, q, !1);
  }
  var Ce = /* @__PURE__ */ s.createElement("div", {
    className: "".concat(U, "-search"),
    style: {
      width: T
    },
    onFocus: function() {
      G(!0);
    },
    onBlur: function() {
      G(!1);
    }
  }, /* @__PURE__ */ s.createElement(qs, {
    ref: c,
    open: o,
    prefixCls: r,
    id: n,
    inputElement: null,
    disabled: d,
    autoFocus: g,
    autoComplete: b,
    editable: se,
    activeDescendantId: p,
    value: ne,
    onKeyDown: F,
    onMouseDown: A,
    onChange: _,
    onPaste: N,
    onCompositionStart: M,
    onCompositionEnd: D,
    tabIndex: v,
    attrs: lo(t, !0)
  }), /* @__PURE__ */ s.createElement("span", {
    ref: V,
    className: "".concat(U, "-search-mirror"),
    "aria-hidden": !0
  }, ne, " ")), be = /* @__PURE__ */ s.createElement(Na, {
    prefixCls: "".concat(U, "-overflow"),
    data: a,
    renderItem: ee,
    renderRest: oe,
    suffix: Ce,
    itemKey: uy,
    maxCount: y
  });
  return /* @__PURE__ */ s.createElement(s.Fragment, null, be, !a.length && !ne && /* @__PURE__ */ s.createElement("span", {
    className: "".concat(U, "-placeholder")
  }, u));
}, fy = function(t) {
  var n = t.inputElement, r = t.prefixCls, a = t.id, o = t.inputRef, i = t.disabled, l = t.autoFocus, c = t.autoComplete, u = t.activeDescendantId, d = t.mode, f = t.open, m = t.values, g = t.placeholder, b = t.tabIndex, p = t.showSearch, v = t.searchValue, h = t.activeValue, y = t.maxLength, E = t.onInputKeyDown, C = t.onInputMouseDown, O = t.onInputChange, x = t.onInputPaste, S = t.onInputCompositionStart, R = t.onInputCompositionEnd, _ = t.title, N = s.useState(!1), F = Y(N, 2), A = F[0], M = F[1], D = d === "combobox", V = D || p, P = m[0], I = v || "";
  D && h && !A && (I = h), s.useEffect(function() {
    D && M(!1);
  }, [D, h]);
  var T = d !== "combobox" && !f && !p ? !1 : !!I, z = _ === void 0 ? nf(P) : _, L = function() {
    if (P)
      return null;
    var W = T ? {
      visibility: "hidden"
    } : void 0;
    return /* @__PURE__ */ s.createElement("span", {
      className: "".concat(r, "-selection-placeholder"),
      style: W
    }, g);
  };
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement("span", {
    className: "".concat(r, "-selection-search")
  }, /* @__PURE__ */ s.createElement(qs, {
    ref: o,
    prefixCls: r,
    id: a,
    open: f,
    inputElement: n,
    disabled: i,
    autoFocus: l,
    autoComplete: c,
    editable: V,
    activeDescendantId: u,
    value: I,
    onKeyDown: E,
    onMouseDown: C,
    onChange: function(W) {
      M(!0), O(W);
    },
    onPaste: x,
    onCompositionStart: S,
    onCompositionEnd: R,
    tabIndex: b,
    attrs: lo(t, !0),
    maxLength: D ? y : void 0
  })), !D && P ? /* @__PURE__ */ s.createElement("span", {
    className: "".concat(r, "-selection-item"),
    title: z,
    style: T ? {
      visibility: "hidden"
    } : void 0
  }, P.label) : null, L());
};
function vy(e) {
  return ![
    // System function button
    ce.ESC,
    ce.SHIFT,
    ce.BACKSPACE,
    ce.TAB,
    ce.WIN_KEY,
    ce.ALT,
    ce.META,
    ce.WIN_KEY_RIGHT,
    ce.CTRL,
    ce.SEMICOLON,
    ce.EQUALS,
    ce.CAPS_LOCK,
    ce.CONTEXT_MENU,
    // F1-F12
    ce.F1,
    ce.F2,
    ce.F3,
    ce.F4,
    ce.F5,
    ce.F6,
    ce.F7,
    ce.F8,
    ce.F9,
    ce.F10,
    ce.F11,
    ce.F12
  ].includes(e);
}
var my = function(t, n) {
  var r = s.useRef(null), a = s.useRef(!1), o = t.prefixCls, i = t.open, l = t.mode, c = t.showSearch, u = t.tokenWithEnter, d = t.autoClearSearchValue, f = t.onSearch, m = t.onSearchSubmit, g = t.onToggleOpen, b = t.onInputKeyDown, p = t.domRef;
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
  var v = Jd(0), h = Y(v, 2), y = h[0], E = h[1], C = function(I) {
    var T = I.which;
    (T === ce.UP || T === ce.DOWN) && I.preventDefault(), b && b(I), T === ce.ENTER && l === "tags" && !a.current && !i && (m == null || m(I.target.value)), vy(T) && g(!0);
  }, O = function() {
    E(!0);
  }, x = s.useRef(null), S = function(I) {
    f(I, !0, a.current) !== !1 && g(!0);
  }, R = function() {
    a.current = !0;
  }, _ = function(I) {
    a.current = !1, l !== "combobox" && S(I.target.value);
  }, N = function(I) {
    var T = I.target.value;
    if (u && x.current && /[\r\n]/.test(x.current)) {
      var z = x.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
      T = T.replace(z, x.current);
    }
    x.current = null, S(T);
  }, F = function(I) {
    var T = I.clipboardData, z = T.getData("text");
    x.current = z;
  }, A = function(I) {
    var T = I.target;
    if (T !== r.current) {
      var z = document.body.style.msTouchAction !== void 0;
      z ? setTimeout(function() {
        r.current.focus();
      }) : r.current.focus();
    }
  }, M = function(I) {
    var T = y();
    I.target !== r.current && !T && l !== "combobox" && I.preventDefault(), (l !== "combobox" && (!c || !T) || !i) && (i && d !== !1 && f("", !0, !1), g());
  }, D = {
    inputRef: r,
    onInputKeyDown: C,
    onInputMouseDown: O,
    onInputChange: N,
    onInputPaste: F,
    onInputCompositionStart: R,
    onInputCompositionEnd: _
  }, V = l === "multiple" || l === "tags" ? /* @__PURE__ */ s.createElement(dy, Ue({}, t, D)) : /* @__PURE__ */ s.createElement(fy, Ue({}, t, D));
  return /* @__PURE__ */ s.createElement("div", {
    ref: p,
    className: "".concat(o, "-selector"),
    onClick: A,
    onMouseDown: M
  }, V);
}, rf = /* @__PURE__ */ s.forwardRef(my);
rf.displayName = "Selector";
var $c = /* @__PURE__ */ s.createContext(null);
function Ic(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function gy(e, t, n, r) {
  return s.useMemo(function() {
    var a = Ic(n ?? t), o = Ic(r ?? t), i = new Set(a), l = new Set(o);
    return e && (i.has("hover") && (i.delete("hover"), i.add("click")), l.has("hover") && (l.delete("hover"), l.add("click"))), [i, l];
  }, [e, t, n, r]);
}
function py() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 ? arguments[2] : void 0;
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function hy(e, t, n, r) {
  for (var a = n.points, o = Object.keys(e), i = 0; i < o.length; i += 1) {
    var l, c = o[i];
    if (py((l = e[c]) === null || l === void 0 ? void 0 : l.points, a, r))
      return "".concat(t, "-placement-").concat(c);
  }
  return "";
}
function Nc(e, t, n, r) {
  return t || (n ? {
    motionName: "".concat(e, "-").concat(n)
  } : r ? {
    motionName: r
  } : null);
}
function _a(e) {
  return e.ownerDocument.defaultView;
}
function fs(e) {
  for (var t = [], n = e == null ? void 0 : e.parentElement, r = ["hidden", "scroll", "clip", "auto"]; n; ) {
    var a = _a(n).getComputedStyle(n), o = a.overflowX, i = a.overflowY, l = a.overflow;
    [o, i, l].some(function(c) {
      return r.includes(c);
    }) && t.push(n), n = n.parentElement;
  }
  return t;
}
function Ca(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function ia(e) {
  return Ca(parseFloat(e), 0);
}
function _c(e, t) {
  var n = k({}, e);
  return (t || []).forEach(function(r) {
    if (!(r instanceof HTMLBodyElement || r instanceof HTMLHtmlElement)) {
      var a = _a(r).getComputedStyle(r), o = a.overflow, i = a.overflowClipMargin, l = a.borderTopWidth, c = a.borderBottomWidth, u = a.borderLeftWidth, d = a.borderRightWidth, f = r.getBoundingClientRect(), m = r.offsetHeight, g = r.clientHeight, b = r.offsetWidth, p = r.clientWidth, v = ia(l), h = ia(c), y = ia(u), E = ia(d), C = Ca(Math.round(f.width / b * 1e3) / 1e3), O = Ca(Math.round(f.height / m * 1e3) / 1e3), x = (b - p - y - E) * C, S = (m - g - v - h) * O, R = v * O, _ = h * O, N = y * C, F = E * C, A = 0, M = 0;
      if (o === "clip") {
        var D = ia(i);
        A = D * C, M = D * O;
      }
      var V = f.x + N - A, P = f.y + R - M, I = V + f.width + 2 * A - N - F - x, T = P + f.height + 2 * M - R - _ - S;
      n.left = Math.max(n.left, V), n.top = Math.max(n.top, P), n.right = Math.min(n.right, I), n.bottom = Math.min(n.bottom, T);
    }
  }), n;
}
function Pc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = "".concat(t), r = n.match(/^(.*)\%$/);
  return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n);
}
function Tc(e, t) {
  var n = t || [], r = Y(n, 2), a = r[0], o = r[1];
  return [Pc(e.width, a), Pc(e.height, o)];
}
function Mc() {
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
function er(e, t) {
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
function by(e, t, n, r, a, o, i) {
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
  }), c = Y(l, 2), u = c[0], d = c[1], f = s.useRef(0), m = s.useMemo(function() {
    return t ? fs(t) : [];
  }, [t]), g = s.useRef({}), b = function() {
    g.current = {};
  };
  e || b();
  var p = cn(function() {
    if (t && n && e) {
      let jt = function(yn, Vn) {
        var Fn = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : xe, or = z.x + yn, Zn = z.y + Vn, xr = or + X, ea = Zn + J, Or = Math.max(or, Fn.left), $n = Math.max(Zn, Fn.top), ta = Math.min(xr, Fn.right), Pe = Math.min(ea, Fn.bottom);
        return Math.max(0, (ta - Or) * (Pe - $n));
      }, bn = function() {
        $ = z.y + we, K = $ + J, ae = z.x + ie, Ne = ae + X;
      };
      var y, E, C = t, O = C.ownerDocument, x = _a(C), S = x.getComputedStyle(C), R = S.width, _ = S.height, N = S.position, F = C.style.left, A = C.style.top, M = C.style.right, D = C.style.bottom, V = k(k({}, a[r]), o), P = O.createElement("div");
      (y = C.parentElement) === null || y === void 0 || y.appendChild(P), P.style.left = "".concat(C.offsetLeft, "px"), P.style.top = "".concat(C.offsetTop, "px"), P.style.position = N, P.style.height = "".concat(C.offsetHeight, "px"), P.style.width = "".concat(C.offsetWidth, "px"), C.style.left = "0", C.style.top = "0", C.style.right = "auto", C.style.bottom = "auto";
      var I;
      if (Array.isArray(n))
        I = {
          x: n[0],
          y: n[1],
          width: 0,
          height: 0
        };
      else {
        var T = n.getBoundingClientRect();
        I = {
          x: T.x,
          y: T.y,
          width: T.width,
          height: T.height
        };
      }
      var z = C.getBoundingClientRect(), L = O.documentElement, H = L.clientWidth, W = L.clientHeight, G = L.scrollWidth, U = L.scrollHeight, ne = L.scrollTop, se = L.scrollLeft, J = z.height, X = z.width, ee = I.height, oe = I.width, Ce = {
        left: 0,
        top: 0,
        right: H,
        bottom: W
      }, be = {
        left: -se,
        top: -ne,
        right: G - se,
        bottom: U - ne
      }, ue = V.htmlRegion, q = "visible", $e = "visibleFirst";
      ue !== "scroll" && ue !== $e && (ue = q);
      var Ie = ue === $e, _e = _c(be, m), fe = _c(Ce, m), xe = ue === q ? fe : _e, me = Ie ? fe : xe;
      C.style.left = "auto", C.style.top = "auto", C.style.right = "0", C.style.bottom = "0";
      var pe = C.getBoundingClientRect();
      C.style.left = F, C.style.top = A, C.style.right = M, C.style.bottom = D, (E = C.parentElement) === null || E === void 0 || E.removeChild(P);
      var je = Ca(Math.round(X / parseFloat(R) * 1e3) / 1e3), Ke = Ca(Math.round(J / parseFloat(_) * 1e3) / 1e3);
      if (je === 0 || Ke === 0 || no(n) && !Rd(n))
        return;
      var Le = V.offset, he = V.targetOffset, ge = Tc(z, Le), Ve = Y(ge, 2), tt = Ve[0], qe = Ve[1], st = Tc(I, he), ke = Y(st, 2), Ft = ke[0], pt = ke[1];
      I.x -= Ft, I.y -= pt;
      var dt = V.points || [], nt = Y(dt, 2), yt = nt[0], ut = nt[1], rt = Mc(ut), Ye = Mc(yt), ye = Mr(I, rt), Se = Mr(z, Ye), Te = k({}, V), ie = ye.x - Se.x + tt, we = ye.y - Se.y + qe, Xe = jt(ie, we), Qe = jt(ie, we, fe), Ae = Mr(I, ["t", "l"]), re = Mr(z, ["t", "l"]), te = Mr(I, ["b", "r"]), de = Mr(z, ["b", "r"]), Me = V.overflow || {}, ze = Me.adjustX, at = Me.adjustY, lt = Me.shiftX, It = Me.shiftY, ht = function(Vn) {
        return typeof Vn == "boolean" ? Vn : Vn >= 0;
      }, $, K, ae, Ne;
      bn();
      var Ge = ht(at), le = Ye[0] === rt[0];
      if (Ge && Ye[0] === "t" && (K > me.bottom || g.current.bt)) {
        var Z = we;
        le ? Z -= J - ee : Z = Ae.y - de.y - qe;
        var Ee = jt(ie, Z), He = jt(ie, Z, fe);
        // Of course use larger one
        Ee > Xe || Ee === Xe && (!Ie || // Choose recommend one
        He >= Qe) ? (g.current.bt = !0, we = Z, qe = -qe, Te.points = [er(Ye, 0), er(rt, 0)]) : g.current.bt = !1;
      }
      if (Ge && Ye[0] === "b" && ($ < me.top || g.current.tb)) {
        var We = we;
        le ? We += J - ee : We = te.y - re.y - qe;
        var ft = jt(ie, We), vt = jt(ie, We, fe);
        // Of course use larger one
        ft > Xe || ft === Xe && (!Ie || // Choose recommend one
        vt >= Qe) ? (g.current.tb = !0, we = We, qe = -qe, Te.points = [er(Ye, 0), er(rt, 0)]) : g.current.tb = !1;
      }
      var zt = ht(ze), tn = Ye[1] === rt[1];
      if (zt && Ye[1] === "l" && (Ne > me.right || g.current.rl)) {
        var Ot = ie;
        tn ? Ot -= X - oe : Ot = Ae.x - de.x - tt;
        var nn = jt(Ot, we), ar = jt(Ot, we, fe);
        // Of course use larger one
        nn > Xe || nn === Xe && (!Ie || // Choose recommend one
        ar >= Qe) ? (g.current.rl = !0, ie = Ot, tt = -tt, Te.points = [er(Ye, 1), er(rt, 1)]) : g.current.rl = !1;
      }
      if (zt && Ye[1] === "r" && (ae < me.left || g.current.lr)) {
        var vn = ie;
        tn ? vn += X - oe : vn = te.x - re.x - tt;
        var rn = jt(vn, we), mn = jt(vn, we, fe);
        // Of course use larger one
        rn > Xe || rn === Xe && (!Ie || // Choose recommend one
        mn >= Qe) ? (g.current.lr = !0, ie = vn, tt = -tt, Te.points = [er(Ye, 1), er(rt, 1)]) : g.current.lr = !1;
      }
      bn();
      var gn = lt === !0 ? 0 : lt;
      typeof gn == "number" && (ae < fe.left && (ie -= ae - fe.left - tt, I.x + oe < fe.left + gn && (ie += I.x - fe.left + oe - gn)), Ne > fe.right && (ie -= Ne - fe.right - tt, I.x > fe.right - gn && (ie += I.x - fe.right + gn)));
      var Jt = It === !0 ? 0 : It;
      typeof Jt == "number" && ($ < fe.top && (we -= $ - fe.top - qe, I.y + ee < fe.top + Jt && (we += I.y - fe.top + ee - Jt)), K > fe.bottom && (we -= K - fe.bottom - qe, I.y > fe.bottom - Jt && (we += I.y - fe.bottom + Jt)));
      var pn = z.x + ie, On = pn + X, An = z.y + we, Rn = An + J, Kt = I.x, Ze = Kt + oe, Be = I.y, Nt = Be + ee, Tt = Math.max(pn, Kt), St = Math.min(On, Ze), Dt = (Tt + St) / 2, Ht = Dt - pn, hn = Math.max(An, Be), Zt = Math.min(Rn, Nt), an = (hn + Zt) / 2, Yt = an - An;
      i == null || i(t, Te);
      var Qn = pe.right - z.x - (ie + z.width), Jn = pe.bottom - z.y - (we + z.height);
      d({
        ready: !0,
        offsetX: ie / je,
        offsetY: we / Ke,
        offsetR: Qn / je,
        offsetB: Jn / Ke,
        arrowX: Ht / je,
        arrowY: Yt / Ke,
        scaleX: je,
        scaleY: Ke,
        align: Te
      });
    }
  }), v = function() {
    f.current += 1;
    var E = f.current;
    Promise.resolve().then(function() {
      f.current === E && p();
    });
  }, h = function() {
    d(function(E) {
      return k(k({}, E), {}, {
        ready: !1
      });
    });
  };
  return xt(h, [r]), xt(function() {
    e || h();
  }, [e]), [u.ready, u.offsetX, u.offsetY, u.offsetR, u.offsetB, u.arrowX, u.arrowY, u.scaleX, u.scaleY, u.align, v];
}
function yy(e, t, n, r, a) {
  xt(function() {
    if (e && t && n) {
      let f = function() {
        r(), a();
      };
      var o = t, i = n, l = fs(o), c = fs(i), u = _a(i), d = new Set([u].concat(De(l), De(c)));
      return d.forEach(function(m) {
        m.addEventListener("scroll", f, {
          passive: !0
        });
      }), u.addEventListener("resize", f, {
        passive: !0
      }), r(), function() {
        d.forEach(function(m) {
          m.removeEventListener("scroll", f), u.removeEventListener("resize", f);
        });
      };
    }
  }, [e, t, n]);
}
function Sy(e, t, n, r, a, o, i, l) {
  var c = s.useRef(e), u = s.useRef(!1);
  c.current !== e && (u.current = !0, c.current = e), s.useEffect(function() {
    var d = Ct(function() {
      u.current = !1;
    });
    return function() {
      Ct.cancel(d);
    };
  }, [e]), s.useEffect(function() {
    if (t && r && (!a || o)) {
      var d = function() {
        var N = !1, F = function(D) {
          var V = D.target;
          N = i(V);
        }, A = function(D) {
          var V = D.target;
          !u.current && c.current && !N && !i(V) && l(!1);
        };
        return [F, A];
      }, f = d(), m = Y(f, 2), g = m[0], b = m[1], p = d(), v = Y(p, 2), h = v[0], y = v[1], E = _a(r);
      E.addEventListener("mousedown", g, !0), E.addEventListener("click", b, !0), E.addEventListener("contextmenu", b, !0);
      var C = so(n);
      if (C && (C.addEventListener("mousedown", h, !0), C.addEventListener("click", y, !0), C.addEventListener("contextmenu", y, !0)), process.env.NODE_ENV !== "production") {
        var O, x, S = n == null || (O = n.getRootNode) === null || O === void 0 ? void 0 : O.call(n), R = (x = r.getRootNode) === null || x === void 0 ? void 0 : x.call(r);
        pr(S === R, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        E.removeEventListener("mousedown", g, !0), E.removeEventListener("click", b, !0), E.removeEventListener("contextmenu", b, !0), C && (C.removeEventListener("mousedown", h, !0), C.removeEventListener("click", y, !0), C.removeEventListener("contextmenu", y, !0));
      };
    }
  }, [t, n, r, a, o]);
}
function Ey(e) {
  var t = e.prefixCls, n = e.align, r = e.arrow, a = e.arrowPos, o = r || {}, i = o.className, l = o.content, c = a.x, u = c === void 0 ? 0 : c, d = a.y, f = d === void 0 ? 0 : d, m = s.useRef();
  if (!n || !n.points)
    return null;
  var g = {
    position: "absolute"
  };
  if (n.autoArrow !== !1) {
    var b = n.points[0], p = n.points[1], v = b[0], h = b[1], y = p[0], E = p[1];
    v === y || !["t", "b"].includes(v) ? g.top = f : v === "t" ? g.top = 0 : g.bottom = 0, h === E || !["l", "r"].includes(h) ? g.left = u : h === "l" ? g.left = 0 : g.right = 0;
  }
  return /* @__PURE__ */ s.createElement("div", {
    ref: m,
    className: Oe("".concat(t, "-arrow"), i),
    style: g
  }, l);
}
function Cy(e) {
  var t = e.prefixCls, n = e.open, r = e.zIndex, a = e.mask, o = e.motion;
  return a ? /* @__PURE__ */ s.createElement(xa, Ue({}, o, {
    motionAppear: !0,
    visible: n,
    removeOnLeave: !0
  }), function(i) {
    var l = i.className;
    return /* @__PURE__ */ s.createElement("div", {
      style: {
        zIndex: r
      },
      className: Oe("".concat(t, "-mask"), l)
    });
  }) : null;
}
var af = /* @__PURE__ */ s.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (af.displayName = "PopupContent");
var of = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.popup, r = e.className, a = e.prefixCls, o = e.style, i = e.target, l = e.onVisibleChanged, c = e.open, u = e.keepDom, d = e.fresh, f = e.onClick, m = e.mask, g = e.arrow, b = e.arrowPos, p = e.align, v = e.motion, h = e.maskMotion, y = e.forceRender, E = e.getPopupContainer, C = e.autoDestroy, O = e.portal, x = e.zIndex, S = e.onMouseEnter, R = e.onMouseLeave, _ = e.onPointerEnter, N = e.ready, F = e.offsetX, A = e.offsetY, M = e.offsetR, D = e.offsetB, V = e.onAlign, P = e.onPrepare, I = e.stretch, T = e.targetWidth, z = e.targetHeight, L = typeof n == "function" ? n() : n, H = c || u, W = (E == null ? void 0 : E.length) > 0, G = s.useState(!E || !W), U = Y(G, 2), ne = U[0], se = U[1];
  if (xt(function() {
    !ne && W && i && se(!0);
  }, [ne, W, i]), !ne)
    return null;
  var J = "auto", X = {
    left: "-1000vw",
    top: "-1000vh",
    right: J,
    bottom: J
  };
  if (N || !c) {
    var ee, oe = p.points, Ce = p.dynamicInset || ((ee = p._experimental) === null || ee === void 0 ? void 0 : ee.dynamicInset), be = Ce && oe[0][1] === "r", ue = Ce && oe[0][0] === "b";
    be ? (X.right = M, X.left = J) : (X.left = F, X.right = J), ue ? (X.bottom = D, X.top = J) : (X.top = A, X.bottom = J);
  }
  var q = {};
  return I && (I.includes("height") && z ? q.height = z : I.includes("minHeight") && z && (q.minHeight = z), I.includes("width") && T ? q.width = T : I.includes("minWidth") && T && (q.minWidth = T)), c || (q.pointerEvents = "none"), /* @__PURE__ */ s.createElement(O, {
    open: y || H,
    getContainer: E && function() {
      return E(i);
    },
    autoDestroy: C
  }, /* @__PURE__ */ s.createElement(Cy, {
    prefixCls: a,
    open: c,
    zIndex: x,
    mask: m,
    motion: h
  }), /* @__PURE__ */ s.createElement(Yn, {
    onResize: V,
    disabled: !c
  }, function($e) {
    return /* @__PURE__ */ s.createElement(xa, Ue({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: y,
      leavedClassName: "".concat(a, "-hidden")
    }, v, {
      onAppearPrepare: P,
      onEnterPrepare: P,
      visible: c,
      onVisibleChanged: function(_e) {
        var fe;
        v == null || (fe = v.onVisibleChanged) === null || fe === void 0 || fe.call(v, _e), l(_e);
      }
    }), function(Ie, _e) {
      var fe = Ie.className, xe = Ie.style, me = Oe(a, fe, r);
      return /* @__PURE__ */ s.createElement("div", {
        ref: jn($e, t, _e),
        className: me,
        style: k(k(k(k({
          "--arrow-x": "".concat(b.x || 0, "px"),
          "--arrow-y": "".concat(b.y || 0, "px")
        }, X), q), xe), {}, {
          boxSizing: "border-box",
          zIndex: x
        }, o),
        onMouseEnter: S,
        onMouseLeave: R,
        onPointerEnter: _,
        onClick: f
      }, g && /* @__PURE__ */ s.createElement(Ey, {
        prefixCls: a,
        arrow: g,
        arrowPos: b,
        align: p
      }), /* @__PURE__ */ s.createElement(af, {
        cache: !c && !d
      }, L));
    });
  }));
});
process.env.NODE_ENV !== "production" && (of.displayName = "Popup");
var sf = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.children, r = e.getTriggerDOMNode, a = wa(n), o = s.useCallback(function(l) {
    Is(t, r ? r(l) : l);
  }, [r]), i = Co(o, n.ref);
  return a ? /* @__PURE__ */ s.cloneElement(n, {
    ref: i
  }) : n;
});
process.env.NODE_ENV !== "production" && (sf.displayName = "TriggerWrapper");
var wy = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function xy() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ws, t = /* @__PURE__ */ s.forwardRef(function(n, r) {
    var a = n.prefixCls, o = a === void 0 ? "rc-trigger-popup" : a, i = n.children, l = n.action, c = l === void 0 ? "hover" : l, u = n.showAction, d = n.hideAction, f = n.popupVisible, m = n.defaultPopupVisible, g = n.onPopupVisibleChange, b = n.afterPopupVisibleChange, p = n.mouseEnterDelay, v = n.mouseLeaveDelay, h = v === void 0 ? 0.1 : v, y = n.focusDelay, E = n.blurDelay, C = n.mask, O = n.maskClosable, x = O === void 0 ? !0 : O, S = n.getPopupContainer, R = n.forceRender, _ = n.autoDestroy, N = n.destroyPopupOnHide, F = n.popup, A = n.popupClassName, M = n.popupStyle, D = n.popupPlacement, V = n.builtinPlacements, P = V === void 0 ? {} : V, I = n.popupAlign, T = n.zIndex, z = n.stretch, L = n.getPopupClassNameFromAlign, H = n.fresh, W = n.alignPoint, G = n.onPopupClick, U = n.onPopupAlign, ne = n.arrow, se = n.popupMotion, J = n.maskMotion, X = n.popupTransitionName, ee = n.popupAnimation, oe = n.maskTransitionName, Ce = n.maskAnimation, be = n.className, ue = n.getTriggerDOMNode, q = wt(n, wy), $e = _ || N || !1, Ie = s.useState(!1), _e = Y(Ie, 2), fe = _e[0], xe = _e[1];
    xt(function() {
      xe(Gs());
    }, []);
    var me = s.useRef({}), pe = s.useContext($c), je = s.useMemo(function() {
      return {
        registerSubPopup: function(et, Et) {
          me.current[et] = Et, pe == null || pe.registerSubPopup(et, Et);
        }
      };
    }, [pe]), Ke = _0(), Le = s.useState(null), he = Y(Le, 2), ge = he[0], Ve = he[1], tt = cn(function(Pe) {
      no(Pe) && ge !== Pe && Ve(Pe), pe == null || pe.registerSubPopup(Ke, Pe);
    }), qe = s.useState(null), st = Y(qe, 2), ke = st[0], Ft = st[1], pt = cn(function(Pe) {
      no(Pe) && ke !== Pe && Ft(Pe);
    }), dt = s.Children.only(i), nt = (dt == null ? void 0 : dt.props) || {}, yt = {}, ut = cn(function(Pe) {
      var et, Et, _t = ke;
      return (_t == null ? void 0 : _t.contains(Pe)) || ((et = so(_t)) === null || et === void 0 ? void 0 : et.host) === Pe || Pe === _t || (ge == null ? void 0 : ge.contains(Pe)) || ((Et = so(ge)) === null || Et === void 0 ? void 0 : Et.host) === Pe || Pe === ge || Object.values(me.current).some(function(Rt) {
        return (Rt == null ? void 0 : Rt.contains(Pe)) || Pe === Rt;
      });
    }), rt = Nc(o, se, ee, X), Ye = Nc(o, J, Ce, oe), ye = s.useState(m || !1), Se = Y(ye, 2), Te = Se[0], ie = Se[1], we = f ?? Te, Xe = cn(function(Pe) {
      f === void 0 && ie(Pe);
    });
    xt(function() {
      ie(f || !1);
    }, [f]);
    var Qe = s.useRef(we);
    Qe.current = we;
    var Ae = cn(function(Pe) {
      pa.flushSync(function() {
        we !== Pe && (Xe(Pe), g == null || g(Pe));
      });
    }), re = s.useRef(), te = function() {
      clearTimeout(re.current);
    }, de = function(et) {
      var Et = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      te(), Et === 0 ? Ae(et) : re.current = setTimeout(function() {
        Ae(et);
      }, Et * 1e3);
    };
    s.useEffect(function() {
      return te;
    }, []);
    var Me = s.useState(!1), ze = Y(Me, 2), at = ze[0], lt = ze[1];
    xt(function(Pe) {
      (!Pe || we) && lt(!0);
    }, [we]);
    var It = s.useState(null), ht = Y(It, 2), $ = ht[0], K = ht[1], ae = s.useState([0, 0]), Ne = Y(ae, 2), Ge = Ne[0], le = Ne[1], Z = function(et) {
      le([et.clientX, et.clientY]);
    }, Ee = by(we, ge, W ? Ge : ke, D, P, I, U), He = Y(Ee, 11), We = He[0], ft = He[1], vt = He[2], zt = He[3], tn = He[4], Ot = He[5], nn = He[6], ar = He[7], vn = He[8], rn = He[9], mn = He[10], gn = gy(fe, c, u, d), Jt = Y(gn, 2), pn = Jt[0], On = Jt[1], An = pn.has("click"), Rn = On.has("click") || On.has("contextMenu"), Kt = cn(function() {
      at || mn();
    }), Ze = function() {
      Qe.current && W && Rn && de(!1);
    };
    yy(we, ke, ge, Kt, Ze), xt(function() {
      Kt();
    }, [Ge, D]), xt(function() {
      we && !(P != null && P[D]) && Kt();
    }, [JSON.stringify(I)]);
    var Be = s.useMemo(function() {
      var Pe = hy(P, o, rn, W);
      return Oe(Pe, L == null ? void 0 : L(rn));
    }, [rn, L, P, o, W]);
    s.useImperativeHandle(r, function() {
      return {
        forceAlign: Kt
      };
    });
    var Nt = s.useState(0), Tt = Y(Nt, 2), St = Tt[0], Dt = Tt[1], Ht = s.useState(0), hn = Y(Ht, 2), Zt = hn[0], an = hn[1], Yt = function() {
      if (z && ke) {
        var et = ke.getBoundingClientRect();
        Dt(et.width), an(et.height);
      }
    }, Qn = function() {
      Yt(), Kt();
    }, Jn = function(et) {
      lt(!1), mn(), b == null || b(et);
    }, jt = function() {
      return new Promise(function(et) {
        Yt(), K(function() {
          return et;
        });
      });
    };
    xt(function() {
      $ && (mn(), $(), K(null));
    }, [$]);
    function bn(Pe, et, Et, _t) {
      yt[Pe] = function(Rt) {
        var Rr;
        _t == null || _t(Rt), de(et, Et);
        for (var $r = arguments.length, Ta = new Array($r > 1 ? $r - 1 : 0), zn = 1; zn < $r; zn++)
          Ta[zn - 1] = arguments[zn];
        (Rr = nt[Pe]) === null || Rr === void 0 || Rr.call.apply(Rr, [nt, Rt].concat(Ta));
      };
    }
    (An || Rn) && (yt.onClick = function(Pe) {
      var et;
      Qe.current && Rn ? de(!1) : !Qe.current && An && (Z(Pe), de(!0));
      for (var Et = arguments.length, _t = new Array(Et > 1 ? Et - 1 : 0), Rt = 1; Rt < Et; Rt++)
        _t[Rt - 1] = arguments[Rt];
      (et = nt.onClick) === null || et === void 0 || et.call.apply(et, [nt, Pe].concat(_t));
    }), Sy(we, Rn, ke, ge, C, x, ut, de);
    var yn = pn.has("hover"), Vn = On.has("hover"), Fn, or;
    yn && (bn("onMouseEnter", !0, p, function(Pe) {
      Z(Pe);
    }), bn("onPointerEnter", !0, p, function(Pe) {
      Z(Pe);
    }), Fn = function() {
      (we || at) && de(!0, p);
    }, W && (yt.onMouseMove = function(Pe) {
      var et;
      (et = nt.onMouseMove) === null || et === void 0 || et.call(nt, Pe);
    })), Vn && (bn("onMouseLeave", !1, h), bn("onPointerLeave", !1, h), or = function() {
      de(!1, h);
    }), pn.has("focus") && bn("onFocus", !0, y), On.has("focus") && bn("onBlur", !1, E), pn.has("contextMenu") && (yt.onContextMenu = function(Pe) {
      var et;
      Qe.current && On.has("contextMenu") ? de(!1) : (Z(Pe), de(!0)), Pe.preventDefault();
      for (var Et = arguments.length, _t = new Array(Et > 1 ? Et - 1 : 0), Rt = 1; Rt < Et; Rt++)
        _t[Rt - 1] = arguments[Rt];
      (et = nt.onContextMenu) === null || et === void 0 || et.call.apply(et, [nt, Pe].concat(_t));
    }), be && (yt.className = Oe(nt.className, be));
    var Zn = k(k({}, nt), yt), xr = {}, ea = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    ea.forEach(function(Pe) {
      q[Pe] && (xr[Pe] = function() {
        for (var et, Et = arguments.length, _t = new Array(Et), Rt = 0; Rt < Et; Rt++)
          _t[Rt] = arguments[Rt];
        (et = Zn[Pe]) === null || et === void 0 || et.call.apply(et, [Zn].concat(_t)), q[Pe].apply(q, _t);
      });
    });
    var Or = /* @__PURE__ */ s.cloneElement(dt, k(k({}, Zn), xr)), $n = {
      x: Ot,
      y: nn
    }, ta = ne ? k({}, ne !== !0 ? ne : {}) : null;
    return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Yn, {
      disabled: !we,
      ref: pt,
      onResize: Qn
    }, /* @__PURE__ */ s.createElement(sf, {
      getTriggerDOMNode: ue
    }, Or)), /* @__PURE__ */ s.createElement($c.Provider, {
      value: je
    }, /* @__PURE__ */ s.createElement(of, {
      portal: e,
      ref: tt,
      prefixCls: o,
      popup: F,
      className: Oe(A, Be),
      style: M,
      target: ke,
      onMouseEnter: Fn,
      onMouseLeave: or,
      onPointerEnter: Fn,
      zIndex: T,
      open: we,
      keepDom: at,
      fresh: H,
      onClick: G,
      mask: C,
      motion: rt,
      maskMotion: Ye,
      onVisibleChanged: Jn,
      onPrepare: jt,
      forceRender: R,
      autoDestroy: $e,
      getPopupContainer: S,
      align: rn,
      arrow: ta,
      arrowPos: $n,
      ready: We,
      offsetX: ft,
      offsetY: vt,
      offsetR: zt,
      offsetB: tn,
      onAlign: Kt,
      stretch: z,
      targetWidth: St / ar,
      targetHeight: Zt / vn
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const Oy = xy(Ws);
var Ry = ["prefixCls", "disabled", "visible", "children", "popupElement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "builtinPlacements", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"], $y = function(t) {
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
}, Iy = function(t, n) {
  var r = t.prefixCls;
  t.disabled;
  var a = t.visible, o = t.children, i = t.popupElement, l = t.animation, c = t.transitionName, u = t.dropdownStyle, d = t.dropdownClassName, f = t.direction, m = f === void 0 ? "ltr" : f, g = t.placement, b = t.builtinPlacements, p = t.dropdownMatchSelectWidth, v = t.dropdownRender, h = t.dropdownAlign, y = t.getPopupContainer, E = t.empty, C = t.getTriggerDOMNode, O = t.onPopupVisibleChange, x = t.onPopupMouseEnter, S = wt(t, Ry), R = "".concat(r, "-dropdown"), _ = i;
  v && (_ = v(i));
  var N = s.useMemo(function() {
    return b || $y(p);
  }, [b, p]), F = l ? "".concat(R, "-").concat(l) : c, A = typeof p == "number", M = s.useMemo(function() {
    return A ? null : p === !1 ? "minWidth" : "width";
  }, [p, A]), D = u;
  A && (D = k(k({}, D), {}, {
    width: p
  }));
  var V = s.useRef(null);
  return s.useImperativeHandle(n, function() {
    return {
      getPopupElement: function() {
        return V.current;
      }
    };
  }), /* @__PURE__ */ s.createElement(Oy, Ue({}, S, {
    showAction: O ? ["click"] : [],
    hideAction: O ? ["click"] : [],
    popupPlacement: g || (m === "rtl" ? "bottomRight" : "bottomLeft"),
    builtinPlacements: N,
    prefixCls: R,
    popupTransitionName: F,
    popup: /* @__PURE__ */ s.createElement("div", {
      ref: V,
      onMouseEnter: x
    }, _),
    stretch: M,
    popupAlign: h,
    popupVisible: a,
    getPopupContainer: y,
    popupClassName: Oe(d, j({}, "".concat(R, "-empty"), E)),
    popupStyle: D,
    getTriggerDOMNode: C,
    onPopupVisibleChange: O
  }), o);
}, lf = /* @__PURE__ */ s.forwardRef(Iy);
lf.displayName = "SelectTrigger";
function Ac(e, t) {
  var n = e.key, r;
  return "value" in e && (r = e.value), n ?? (r !== void 0 ? r : "rc-index-key-".concat(t));
}
function cf(e, t) {
  var n = e || {}, r = n.label, a = n.value, o = n.options, i = n.groupLabel, l = r || (t ? "children" : "label");
  return {
    label: l,
    value: a || "value",
    options: o || "options",
    groupLabel: i || l
  };
}
function Ny(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.fieldNames, r = t.childrenAsData, a = [], o = cf(n, !1), i = o.label, l = o.value, c = o.options, u = o.groupLabel;
  function d(f, m) {
    f.forEach(function(g) {
      if (m || !(c in g)) {
        var b = g[l];
        a.push({
          key: Ac(g, a.length),
          groupOption: m,
          data: g,
          label: g[i],
          value: b
        });
      } else {
        var p = g[u];
        p === void 0 && r && (p = g.label), a.push({
          key: Ac(g, a.length),
          group: !0,
          data: g,
          label: p
        }), d(g[c], !0);
      }
    });
  }
  return d(e, !1), a;
}
function vs(e) {
  var t = k({}, e);
  return "props" in t || Object.defineProperty(t, "props", {
    get: function() {
      return ot(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), t;
    }
  }), t;
}
function _y(e, t) {
  if (!t || !t.length)
    return null;
  var n = !1;
  function r(o, i) {
    var l = Hu(i), c = l[0], u = l.slice(1);
    if (!c)
      return [o];
    var d = o.split(c);
    return n = n || d.length > 1, d.reduce(function(f, m) {
      return [].concat(De(f), De(r(m, u)));
    }, []).filter(function(f) {
      return f;
    });
  }
  var a = r(e, t);
  return n ? a : null;
}
var Py = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "suffixIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "builtinPlacements", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"], Ty = ["value", "onChange", "removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabIndex"];
function bo(e) {
  return e === "tags" || e === "multiple";
}
var uf = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n, r, a = e.id, o = e.prefixCls, i = e.className, l = e.showSearch, c = e.tagRender, u = e.direction, d = e.omitDomProps, f = e.displayValues, m = e.onDisplayValuesChange, g = e.emptyOptions, b = e.notFoundContent, p = b === void 0 ? "Not Found" : b, v = e.onClear, h = e.mode, y = e.disabled, E = e.loading, C = e.getInputElement, O = e.getRawInputElement, x = e.open, S = e.defaultOpen, R = e.onDropdownVisibleChange, _ = e.activeValue, N = e.onActiveValueChange, F = e.activeDescendantId, A = e.searchValue, M = e.autoClearSearchValue, D = e.onSearch, V = e.onSearchSplit, P = e.tokenSeparators, I = e.allowClear, T = e.suffixIcon, z = e.clearIcon, L = e.OptionList, H = e.animation, W = e.transitionName, G = e.dropdownStyle, U = e.dropdownClassName, ne = e.dropdownMatchSelectWidth, se = e.dropdownRender, J = e.dropdownAlign, X = e.placement, ee = e.builtinPlacements, oe = e.getPopupContainer, Ce = e.showAction, be = Ce === void 0 ? [] : Ce, ue = e.onFocus, q = e.onBlur, $e = e.onKeyUp, Ie = e.onKeyDown, _e = e.onMouseDown, fe = wt(e, Py), xe = bo(h), me = (l !== void 0 ? l : xe) || h === "combobox", pe = k({}, fe);
  Ty.forEach(function(Ze) {
    delete pe[Ze];
  }), d == null || d.forEach(function(Ze) {
    delete pe[Ze];
  });
  var je = s.useState(!1), Ke = Y(je, 2), Le = Ke[0], he = Ke[1];
  s.useEffect(function() {
    he(Gs());
  }, []);
  var ge = s.useRef(null), Ve = s.useRef(null), tt = s.useRef(null), qe = s.useRef(null), st = s.useRef(null), ke = s.useRef(!1), Ft = Ub(), pt = Y(Ft, 3), dt = pt[0], nt = pt[1], yt = pt[2];
  s.useImperativeHandle(t, function() {
    var Ze, Be;
    return {
      focus: (Ze = qe.current) === null || Ze === void 0 ? void 0 : Ze.focus,
      blur: (Be = qe.current) === null || Be === void 0 ? void 0 : Be.blur,
      scrollTo: function(Tt) {
        var St;
        return (St = st.current) === null || St === void 0 ? void 0 : St.scrollTo(Tt);
      }
    };
  });
  var ut = s.useMemo(function() {
    var Ze;
    if (h !== "combobox")
      return A;
    var Be = (Ze = f[0]) === null || Ze === void 0 ? void 0 : Ze.value;
    return typeof Be == "string" || typeof Be == "number" ? String(Be) : "";
  }, [A, h, f]), rt = h === "combobox" && typeof C == "function" && C() || null, Ye = typeof O == "function" && O(), ye = Co(Ve, Ye == null || (n = Ye.props) === null || n === void 0 ? void 0 : n.ref), Se = s.useState(!1), Te = Y(Se, 2), ie = Te[0], we = Te[1];
  xt(function() {
    we(!0);
  }, []);
  var Xe = br(!1, {
    defaultValue: S,
    value: x
  }), Qe = Y(Xe, 2), Ae = Qe[0], re = Qe[1], te = ie ? Ae : !1, de = !p && g;
  (y || de && te && h === "combobox") && (te = !1);
  var Me = de ? !1 : te, ze = s.useCallback(function(Ze) {
    var Be = Ze !== void 0 ? Ze : !te;
    y || (re(Be), te !== Be && (R == null || R(Be)));
  }, [y, te, re, R]), at = s.useMemo(function() {
    return (P || []).some(function(Ze) {
      return [`
`, `\r
`].includes(Ze);
    });
  }, [P]), lt = function(Be, Nt, Tt) {
    var St = !0, Dt = Be;
    N == null || N(null);
    var Ht = Tt ? null : _y(Be, P);
    return h !== "combobox" && Ht && (Dt = "", V == null || V(Ht), ze(!1), St = !1), D && ut !== Dt && D(Dt, {
      source: Nt ? "typing" : "effect"
    }), St;
  }, It = function(Be) {
    !Be || !Be.trim() || D(Be, {
      source: "submit"
    });
  };
  s.useEffect(function() {
    !te && !xe && h !== "combobox" && lt("", !1, !1);
  }, [te]), s.useEffect(function() {
    Ae && y && re(!1), y && !ke.current && nt(!1);
  }, [y]);
  var ht = Jd(), $ = Y(ht, 2), K = $[0], ae = $[1], Ne = function(Be) {
    var Nt = K(), Tt = Be.which;
    if (Tt === ce.ENTER && (h !== "combobox" && Be.preventDefault(), te || ze(!0)), ae(!!ut), Tt === ce.BACKSPACE && !Nt && xe && !ut && f.length) {
      for (var St = De(f), Dt = null, Ht = St.length - 1; Ht >= 0; Ht -= 1) {
        var hn = St[Ht];
        if (!hn.disabled) {
          St.splice(Ht, 1), Dt = hn;
          break;
        }
      }
      Dt && m(St, {
        type: "remove",
        values: [Dt]
      });
    }
    for (var Zt = arguments.length, an = new Array(Zt > 1 ? Zt - 1 : 0), Yt = 1; Yt < Zt; Yt++)
      an[Yt - 1] = arguments[Yt];
    if (te && st.current) {
      var Qn;
      (Qn = st.current).onKeyDown.apply(Qn, [Be].concat(an));
    }
    Ie == null || Ie.apply(void 0, [Be].concat(an));
  }, Ge = function(Be) {
    for (var Nt = arguments.length, Tt = new Array(Nt > 1 ? Nt - 1 : 0), St = 1; St < Nt; St++)
      Tt[St - 1] = arguments[St];
    if (te && st.current) {
      var Dt;
      (Dt = st.current).onKeyUp.apply(Dt, [Be].concat(Tt));
    }
    $e == null || $e.apply(void 0, [Be].concat(Tt));
  }, le = function(Be) {
    var Nt = f.filter(function(Tt) {
      return Tt !== Be;
    });
    m(Nt, {
      type: "remove",
      values: [Be]
    });
  }, Z = s.useRef(!1), Ee = function() {
    nt(!0), y || (ue && !Z.current && ue.apply(void 0, arguments), be.includes("focus") && ze(!0)), Z.current = !0;
  }, He = function() {
    ke.current = !0, nt(!1, function() {
      Z.current = !1, ke.current = !1, ze(!1);
    }), !y && (ut && (h === "tags" ? D(ut, {
      source: "submit"
    }) : h === "multiple" && D("", {
      source: "blur"
    })), q && q.apply(void 0, arguments));
  }, We = [];
  s.useEffect(function() {
    return function() {
      We.forEach(function(Ze) {
        return clearTimeout(Ze);
      }), We.splice(0, We.length);
    };
  }, []);
  var ft = function(Be) {
    var Nt, Tt = Be.target, St = (Nt = tt.current) === null || Nt === void 0 ? void 0 : Nt.getPopupElement();
    if (St && St.contains(Tt)) {
      var Dt = setTimeout(function() {
        var an = We.indexOf(Dt);
        if (an !== -1 && We.splice(an, 1), yt(), !Le && !St.contains(document.activeElement)) {
          var Yt;
          (Yt = qe.current) === null || Yt === void 0 || Yt.focus();
        }
      });
      We.push(Dt);
    }
    for (var Ht = arguments.length, hn = new Array(Ht > 1 ? Ht - 1 : 0), Zt = 1; Zt < Ht; Zt++)
      hn[Zt - 1] = arguments[Zt];
    _e == null || _e.apply(void 0, [Be].concat(hn));
  }, vt = s.useState({}), zt = Y(vt, 2), tn = zt[1];
  function Ot() {
    tn({});
  }
  var nn;
  Ye && (nn = function(Be) {
    ze(Be);
  }), Gb(function() {
    var Ze;
    return [ge.current, (Ze = tt.current) === null || Ze === void 0 ? void 0 : Ze.getPopupElement()];
  }, Me, ze, !!Ye);
  var ar = s.useMemo(function() {
    return k(k({}, e), {}, {
      notFoundContent: p,
      open: te,
      triggerOpen: Me,
      id: a,
      showSearch: me,
      multiple: xe,
      toggleOpen: ze
    });
  }, [e, p, Me, te, a, me, xe, ze]), vn = !!T || E, rn;
  vn && (rn = /* @__PURE__ */ s.createElement(Lo, {
    className: Oe("".concat(o, "-arrow"), j({}, "".concat(o, "-arrow-loading"), E)),
    customizeIcon: T,
    customizeIconProps: {
      loading: E,
      searchValue: ut,
      open: te,
      focused: dt,
      showSearch: me
    }
  }));
  var mn = function() {
    var Be;
    v == null || v(), (Be = qe.current) === null || Be === void 0 || Be.focus(), m([], {
      type: "clear",
      values: f
    }), lt("", !1, !1);
  }, gn = kb(o, mn, f, I, z, y, ut, h), Jt = gn.allowClear, pn = gn.clearIcon, On = /* @__PURE__ */ s.createElement(L, {
    ref: st
  }), An = Oe(o, i, (r = {}, j(r, "".concat(o, "-focused"), dt), j(r, "".concat(o, "-multiple"), xe), j(r, "".concat(o, "-single"), !xe), j(r, "".concat(o, "-allow-clear"), I), j(r, "".concat(o, "-show-arrow"), vn), j(r, "".concat(o, "-disabled"), y), j(r, "".concat(o, "-loading"), E), j(r, "".concat(o, "-open"), te), j(r, "".concat(o, "-customize-input"), rt), j(r, "".concat(o, "-show-search"), me), r)), Rn = /* @__PURE__ */ s.createElement(lf, {
    ref: tt,
    disabled: y,
    prefixCls: o,
    visible: Me,
    popupElement: On,
    animation: H,
    transitionName: W,
    dropdownStyle: G,
    dropdownClassName: U,
    direction: u,
    dropdownMatchSelectWidth: ne,
    dropdownRender: se,
    dropdownAlign: J,
    placement: X,
    builtinPlacements: ee,
    getPopupContainer: oe,
    empty: g,
    getTriggerDOMNode: function() {
      return Ve.current;
    },
    onPopupVisibleChange: nn,
    onPopupMouseEnter: Ot
  }, Ye ? /* @__PURE__ */ s.cloneElement(Ye, {
    ref: ye
  }) : /* @__PURE__ */ s.createElement(rf, Ue({}, e, {
    domRef: Ve,
    prefixCls: o,
    inputElement: rt,
    ref: qe,
    id: a,
    showSearch: me,
    autoClearSearchValue: M,
    mode: h,
    activeDescendantId: F,
    tagRender: c,
    values: f,
    open: te,
    onToggleOpen: ze,
    activeValue: _,
    searchValue: ut,
    onSearch: lt,
    onSearchSubmit: It,
    onRemove: le,
    tokenWithEnter: at
  }))), Kt;
  return Ye ? Kt = Rn : Kt = /* @__PURE__ */ s.createElement("div", Ue({
    className: An
  }, pe, {
    ref: ge,
    onMouseDown: ft,
    onKeyDown: Ne,
    onKeyUp: Ge,
    onFocus: Ee,
    onBlur: He
  }), dt && !te && /* @__PURE__ */ s.createElement("span", {
    style: {
      width: 0,
      height: 0,
      position: "absolute",
      overflow: "hidden",
      opacity: 0
    },
    "aria-live": "polite"
  }, "".concat(f.map(function(Ze) {
    var Be = Ze.label, Nt = Ze.value;
    return ["number", "string"].includes(Je(Be)) ? Be : Nt;
  }).join(", "))), Rn, rn, Jt && pn), /* @__PURE__ */ s.createElement(Qd.Provider, {
    value: ar
  }, Kt);
});
process.env.NODE_ENV !== "production" && (uf.displayName = "BaseSelect");
const My = function(e, t) {
  var n = s.useRef({
    values: /* @__PURE__ */ new Map(),
    options: /* @__PURE__ */ new Map()
  }), r = s.useMemo(function() {
    var o = n.current, i = o.values, l = o.options, c = e.map(function(f) {
      if (f.label === void 0) {
        var m;
        return k(k({}, f), {}, {
          label: (m = i.get(f.value)) === null || m === void 0 ? void 0 : m.label
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
function vi(e, t) {
  return Ks(e).join("").toUpperCase().includes(t);
}
const Ay = function(e, t, n, r, a) {
  return s.useMemo(function() {
    if (!n || r === !1)
      return e;
    var o = t.options, i = t.label, l = t.value, c = [], u = typeof r == "function", d = n.toUpperCase(), f = u ? r : function(g, b) {
      return a ? vi(b[a], d) : b[o] ? vi(b[i !== "children" ? i : "label"], d) : vi(b[l], d);
    }, m = u ? function(g) {
      return vs(g);
    } : function(g) {
      return g;
    };
    return e.forEach(function(g) {
      if (g[o]) {
        var b = f(n, m(g));
        if (b)
          c.push(g);
        else {
          var p = g[o].filter(function(v) {
            return f(n, m(v));
          });
          p.length && c.push(k(k({}, g), {}, j({}, o, p)));
        }
        return;
      }
      f(n, m(g)) && c.push(g);
    }), c;
  }, [e, r, a, n, t]);
};
var Fc = 0, Fy = process.env.NODE_ENV !== "test" && Gt();
function Dy() {
  var e;
  return Fy ? (e = Fc, Fc += 1) : e = "TEST_OR_SSR", e;
}
function jy(e) {
  var t = s.useState(), n = Y(t, 2), r = n[0], a = n[1];
  return s.useEffect(function() {
    a("rc_select_".concat(Dy()));
  }, []), e || r;
}
var Ly = ["children", "value"], Vy = ["children"];
function zy(e) {
  var t = e, n = t.key, r = t.props, a = r.children, o = r.value, i = wt(r, Ly);
  return k({
    key: n,
    value: o !== void 0 ? o : n,
    children: a
  }, i);
}
function Ys(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return Dn(e).map(function(n, r) {
    if (!/* @__PURE__ */ s.isValidElement(n) || !n.type)
      return null;
    var a = n, o = a.type.isSelectOptGroup, i = a.key, l = a.props, c = l.children, u = wt(l, Vy);
    return t || !o ? zy(n) : k(k({
      key: "__RC_SELECT_GRP__".concat(i === null ? r : i, "__"),
      label: i
    }, u), {}, {
      options: Ys(c)
    });
  }).filter(function(n) {
    return n;
  });
}
function Hy(e, t, n, r, a) {
  return s.useMemo(function() {
    var o = e, i = !e;
    i && (o = Ys(t));
    var l = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), u = function(m, g, b) {
      b && typeof b == "string" && m.set(g[b], g);
    };
    function d(f) {
      for (var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, g = 0; g < f.length; g += 1) {
        var b = f[g];
        !b[n.options] || m ? (l.set(b[n.value], b), u(c, b, n.label), u(c, b, r), u(c, b, a)) : d(b[n.options], !0);
      }
    }
    return d(o), {
      options: o,
      valueOptions: l,
      labelOptions: c
    };
  }, [e, t, n, r, a]);
}
function Dc(e) {
  var t = s.useRef();
  t.current = e;
  var n = s.useCallback(function() {
    return t.current.apply(t, arguments);
  }, []);
  return n;
}
var Xs = function() {
  return null;
};
Xs.isSelectOptGroup = !0;
var Qs = function() {
  return null;
};
Qs.isSelectOption = !0;
var df = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.height, r = e.offsetY, a = e.offsetX, o = e.children, i = e.prefixCls, l = e.onInnerResize, c = e.innerProps, u = e.rtl, d = e.extra, f = {}, m = {
    display: "flex",
    flexDirection: "column"
  };
  if (r !== void 0) {
    var g;
    f = {
      height: n,
      position: "relative",
      overflow: "hidden"
    }, m = k(k({}, m), {}, (g = {
      transform: "translateY(".concat(r, "px)")
    }, j(g, u ? "marginRight" : "marginLeft", -a), j(g, "position", "absolute"), j(g, "left", 0), j(g, "right", 0), j(g, "top", 0), g));
  }
  return /* @__PURE__ */ s.createElement("div", {
    style: f
  }, /* @__PURE__ */ s.createElement(Yn, {
    onResize: function(p) {
      var v = p.offsetHeight;
      v && l && l();
    }
  }, /* @__PURE__ */ s.createElement("div", Ue({
    style: m,
    className: Oe(j({}, "".concat(i, "-holder-inner"), i)),
    ref: t
  }, c), o, d)));
});
df.displayName = "Filler";
function jc(e, t) {
  var n = "touches" in e ? e.touches[0] : e;
  return n[t ? "pageX" : "pageY"];
}
var ms = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n, r = e.prefixCls, a = e.rtl, o = e.scrollOffset, i = e.scrollRange, l = e.onStartMove, c = e.onStopMove, u = e.onScroll, d = e.horizontal, f = e.spinSize, m = e.containerSize, g = e.style, b = e.thumbStyle, p = s.useState(!1), v = Y(p, 2), h = v[0], y = v[1], E = s.useState(null), C = Y(E, 2), O = C[0], x = C[1], S = s.useState(null), R = Y(S, 2), _ = R[0], N = R[1], F = !a, A = s.useRef(), M = s.useRef(), D = s.useState(!1), V = Y(D, 2), P = V[0], I = V[1], T = s.useRef(), z = function() {
    clearTimeout(T.current), I(!0), T.current = setTimeout(function() {
      I(!1);
    }, 3e3);
  }, L = i - m || 0, H = m - f || 0, W = L > 0, G = s.useMemo(function() {
    if (o === 0 || L === 0)
      return 0;
    var be = o / L;
    return be * H;
  }, [o, L, H]), U = function(ue) {
    ue.stopPropagation(), ue.preventDefault();
  }, ne = s.useRef({
    top: G,
    dragging: h,
    pageY: O,
    startTop: _
  });
  ne.current = {
    top: G,
    dragging: h,
    pageY: O,
    startTop: _
  };
  var se = function(ue) {
    y(!0), x(jc(ue, d)), N(ne.current.top), l(), ue.stopPropagation(), ue.preventDefault();
  };
  s.useEffect(function() {
    var be = function(Ie) {
      Ie.preventDefault();
    }, ue = A.current, q = M.current;
    return ue.addEventListener("touchstart", be), q.addEventListener("touchstart", se), function() {
      ue.removeEventListener("touchstart", be), q.removeEventListener("touchstart", se);
    };
  }, []);
  var J = s.useRef();
  J.current = L;
  var X = s.useRef();
  X.current = H, s.useEffect(function() {
    if (h) {
      var be, ue = function(Ie) {
        var _e = ne.current, fe = _e.dragging, xe = _e.pageY, me = _e.startTop;
        if (Ct.cancel(be), fe) {
          var pe = jc(Ie, d) - xe, je = me;
          !F && d ? je -= pe : je += pe;
          var Ke = J.current, Le = X.current, he = Le ? je / Le : 0, ge = Math.ceil(he * Ke);
          ge = Math.max(ge, 0), ge = Math.min(ge, Ke), be = Ct(function() {
            u(ge, d);
          });
        }
      }, q = function() {
        y(!1), c();
      };
      return window.addEventListener("mousemove", ue), window.addEventListener("touchmove", ue), window.addEventListener("mouseup", q), window.addEventListener("touchend", q), function() {
        window.removeEventListener("mousemove", ue), window.removeEventListener("touchmove", ue), window.removeEventListener("mouseup", q), window.removeEventListener("touchend", q), Ct.cancel(be);
      };
    }
  }, [h]), s.useEffect(function() {
    z();
  }, [o]), s.useImperativeHandle(t, function() {
    return {
      delayHidden: z
    };
  });
  var ee = "".concat(r, "-scrollbar"), oe = {
    position: "absolute",
    visibility: P && W ? null : "hidden"
  }, Ce = {
    position: "absolute",
    background: "rgba(0, 0, 0, 0.5)",
    borderRadius: 99,
    cursor: "pointer",
    userSelect: "none"
  };
  return d ? (oe.height = 8, oe.left = 0, oe.right = 0, oe.bottom = 0, Ce.height = "100%", Ce.width = f, F ? Ce.left = G : Ce.right = G) : (oe.width = 8, oe.top = 0, oe.bottom = 0, F ? oe.right = 0 : oe.left = 0, Ce.width = "100%", Ce.height = f, Ce.top = G), /* @__PURE__ */ s.createElement("div", {
    ref: A,
    className: Oe(ee, (n = {}, j(n, "".concat(ee, "-horizontal"), d), j(n, "".concat(ee, "-vertical"), !d), j(n, "".concat(ee, "-visible"), P), n)),
    style: k(k({}, oe), g),
    onMouseDown: U,
    onMouseMove: z
  }, /* @__PURE__ */ s.createElement("div", {
    ref: M,
    className: Oe("".concat(ee, "-thumb"), j({}, "".concat(ee, "-thumb-moving"), h)),
    style: k(k({}, Ce), b),
    onMouseDown: se
  }));
});
process.env.NODE_ENV !== "production" && (ms.displayName = "ScrollBar");
function By(e) {
  var t = e.children, n = e.setRef, r = s.useCallback(function(a) {
    n(a);
  }, []);
  return /* @__PURE__ */ s.cloneElement(t, {
    ref: r
  });
}
function ky(e, t, n, r, a, o, i) {
  var l = i.getKey;
  return e.slice(t, n + 1).map(function(c, u) {
    var d = t + u, f = o(c, d, {
      style: {
        width: r
      }
    }), m = l(c);
    return /* @__PURE__ */ s.createElement(By, {
      key: m,
      setRef: function(b) {
        return a(c, b);
      }
    }, f);
  });
}
var Wy = /* @__PURE__ */ function() {
  function e() {
    dn(this, e), this.maps = void 0, this.id = 0, this.maps = /* @__PURE__ */ Object.create(null);
  }
  return fn(e, [{
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
function Uy(e, t, n) {
  var r = s.useState(0), a = Y(r, 2), o = a[0], i = a[1], l = s.useRef(/* @__PURE__ */ new Map()), c = s.useRef(new Wy()), u = s.useRef();
  function d() {
    Ct.cancel(u.current);
  }
  function f() {
    var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    d();
    var b = function() {
      l.current.forEach(function(v, h) {
        if (v && v.offsetParent) {
          var y = ca(v), E = y.offsetHeight;
          c.current.get(h) !== E && c.current.set(h, y.offsetHeight);
        }
      }), i(function(v) {
        return v + 1;
      });
    };
    g ? b() : u.current = Ct(b);
  }
  function m(g, b) {
    var p = e(g), v = l.current.get(p);
    b ? (l.current.set(p, b), f()) : l.current.delete(p), !v != !b && (b ? t == null || t(g) : n == null || n(g));
  }
  return s.useEffect(function() {
    return d;
  }, []), [m, f, c.current, o];
}
var Lc = 10;
function Gy(e, t, n, r, a, o, i, l) {
  var c = s.useRef(), u = s.useState(null), d = Y(u, 2), f = d[0], m = d[1];
  return xt(function() {
    if (f && f.times < Lc) {
      if (!e.current) {
        m(function(z) {
          return k({}, z);
        });
        return;
      }
      o();
      var g = f.targetAlign, b = f.originAlign, p = f.index, v = f.offset, h = e.current.clientHeight, y = !1, E = g, C = null;
      if (h) {
        for (var O = g || b, x = 0, S = 0, R = 0, _ = Math.min(t.length - 1, p), N = 0; N <= _; N += 1) {
          var F = a(t[N]);
          S = x;
          var A = n.get(F);
          R = S + (A === void 0 ? r : A), x = R;
        }
        for (var M = O === "top" ? v : h - v, D = _; D >= 0; D -= 1) {
          var V = a(t[D]), P = n.get(V);
          if (P === void 0) {
            y = !0;
            break;
          }
          if (M -= P, M <= 0)
            break;
        }
        switch (O) {
          case "top":
            C = S - v;
            break;
          case "bottom":
            C = R - h + v;
            break;
          default: {
            var I = e.current.scrollTop, T = I + h;
            S < I ? E = "top" : R > T && (E = "bottom");
          }
        }
        C !== null && i(C), C !== f.lastTop && (y = !0);
      }
      y && m(function(z) {
        return k(k({}, z), {}, {
          times: z.times + 1,
          targetAlign: E,
          lastTop: C
        });
      });
    } else
      process.env.NODE_ENV !== "production" && (f == null ? void 0 : f.times) === Lc && ot(!1, "Seems `scrollTo` with `rc-virtual-list` reach the max limitation. Please fire issue for us. Thanks.");
  }, [f, e.current]), function(g) {
    if (g == null) {
      l();
      return;
    }
    if (Ct.cancel(c.current), typeof g == "number")
      i(g);
    else if (g && Je(g) === "object") {
      var b, p = g.align;
      "index" in g ? b = g.index : b = t.findIndex(function(y) {
        return a(y) === g.key;
      });
      var v = g.offset, h = v === void 0 ? 0 : v;
      m({
        times: 0,
        index: b,
        offset: h,
        originAlign: p
      });
    }
  };
}
function qy(e, t, n) {
  var r = e.length, a = t.length, o, i;
  if (r === 0 && a === 0)
    return null;
  r < a ? (o = e, i = t) : (o = t, i = e);
  var l = {
    __EMPTY_ITEM__: !0
  };
  function c(b) {
    return b !== void 0 ? n(b) : l;
  }
  for (var u = null, d = Math.abs(r - a) !== 1, f = 0; f < i.length; f += 1) {
    var m = c(o[f]), g = c(i[f]);
    if (m !== g) {
      u = f, d = d || m !== c(i[f + 1]);
      break;
    }
  }
  return u === null ? null : {
    index: u,
    multiple: d
  };
}
function Ky(e, t, n) {
  var r = s.useState(e), a = Y(r, 2), o = a[0], i = a[1], l = s.useState(null), c = Y(l, 2), u = c[0], d = c[1];
  return s.useEffect(function() {
    var f = qy(o || [], e || [], t);
    (f == null ? void 0 : f.index) !== void 0 && (n == null || n(f.index), d(e[f.index])), i(e);
  }, [e]), [u];
}
var Vc = (typeof navigator > "u" ? "undefined" : Je(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
const ff = function(e, t) {
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
function Yy(e, t, n, r, a) {
  var o = s.useRef(0), i = s.useRef(null), l = s.useRef(null), c = s.useRef(!1), u = ff(t, n);
  function d(v, h) {
    Ct.cancel(i.current), o.current += h, l.current = h, !u(h) && (Vc || v.preventDefault(), i.current = Ct(function() {
      var y = c.current ? 10 : 1;
      a(o.current * y), o.current = 0;
    }));
  }
  function f(v, h) {
    a(h, !0), Vc || v.preventDefault();
  }
  var m = s.useRef(null), g = s.useRef(null);
  function b(v) {
    if (e) {
      Ct.cancel(g.current), g.current = Ct(function() {
        m.current = null;
      }, 2);
      var h = v.deltaX, y = v.deltaY, E = v.shiftKey, C = h, O = y;
      (m.current === "sx" || !m.current && E && y && !h) && (C = y, O = 0, m.current = "sx");
      var x = Math.abs(C), S = Math.abs(O);
      m.current === null && (m.current = r && x > S ? "x" : "y"), m.current === "y" ? d(v, O) : f(v, C);
    }
  }
  function p(v) {
    e && (c.current = v.detail === l.current);
  }
  return [b, p];
}
var Xy = 14 / 15;
function Qy(e, t, n) {
  var r = s.useRef(!1), a = s.useRef(0), o = s.useRef(null), i = s.useRef(null), l, c = function(m) {
    if (r.current) {
      var g = Math.ceil(m.touches[0].pageY), b = a.current - g;
      a.current = g, n(b) && m.preventDefault(), clearInterval(i.current), i.current = setInterval(function() {
        b *= Xy, (!n(b, !0) || Math.abs(b) <= 0.1) && clearInterval(i.current);
      }, 16);
    }
  }, u = function() {
    r.current = !1, l();
  }, d = function(m) {
    l(), m.touches.length === 1 && !r.current && (r.current = !0, a.current = Math.ceil(m.touches[0].pageY), o.current = m.target, o.current.addEventListener("touchmove", c), o.current.addEventListener("touchend", u));
  };
  l = function() {
    o.current && (o.current.removeEventListener("touchmove", c), o.current.removeEventListener("touchend", u));
  }, xt(function() {
    return e && t.current.addEventListener("touchstart", d), function() {
      var f;
      (f = t.current) === null || f === void 0 || f.removeEventListener("touchstart", d), l(), clearInterval(i.current);
    };
  }, [e]);
}
var Jy = 20;
function zc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = e / t * 100;
  return isNaN(n) && (n = 0), n = Math.max(n, Jy), n = Math.min(n, e / 2), Math.floor(n);
}
function Zy(e, t, n, r) {
  var a = s.useMemo(function() {
    return [/* @__PURE__ */ new Map(), []];
  }, [e, n.id, r]), o = Y(a, 2), i = o[0], l = o[1], c = function(d) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : d, m = i.get(d), g = i.get(f);
    if (m === void 0 || g === void 0)
      for (var b = e.length, p = l.length; p < b; p += 1) {
        var v, h = e[p], y = t(h);
        i.set(y, p);
        var E = (v = n.get(y)) !== null && v !== void 0 ? v : r;
        if (l[p] = (l[p - 1] || 0) + E, y === d && (m = p), y === f && (g = p), m !== void 0 && g !== void 0)
          break;
      }
    return {
      top: l[m - 1] || 0,
      bottom: l[g]
    };
  };
  return c;
}
var eS = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "scrollWidth", "component", "onScroll", "onVirtualScroll", "onVisibleChange", "innerProps", "extraRender", "styles"], tS = [], nS = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function rS(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-virtual-list" : n, a = e.className, o = e.height, i = e.itemHeight, l = e.fullHeight, c = l === void 0 ? !0 : l, u = e.style, d = e.data, f = e.children, m = e.itemKey, g = e.virtual, b = e.direction, p = e.scrollWidth, v = e.component, h = v === void 0 ? "div" : v, y = e.onScroll, E = e.onVirtualScroll, C = e.onVisibleChange, O = e.innerProps, x = e.extraRender, S = e.styles, R = wt(e, eS), _ = !!(g !== !1 && o && i), N = _ && d && (i * d.length > o || !!p), F = b === "rtl", A = Oe(r, j({}, "".concat(r, "-rtl"), F), a), M = d || tS, D = s.useRef(), V = s.useRef(), P = s.useState(0), I = Y(P, 2), T = I[0], z = I[1], L = s.useState(0), H = Y(L, 2), W = H[0], G = H[1], U = s.useState(!1), ne = Y(U, 2), se = ne[0], J = ne[1], X = function() {
    J(!0);
  }, ee = function() {
    J(!1);
  }, oe = s.useCallback(function(le) {
    return typeof m == "function" ? m(le) : le == null ? void 0 : le[m];
  }, [m]), Ce = {
    getKey: oe
  };
  function be(le) {
    z(function(Z) {
      var Ee;
      typeof le == "function" ? Ee = le(Z) : Ee = le;
      var He = ye(Ee);
      return D.current.scrollTop = He, He;
    });
  }
  var ue = s.useRef({
    start: 0,
    end: M.length
  }), q = s.useRef(), $e = Ky(M, oe), Ie = Y($e, 1), _e = Ie[0];
  q.current = _e;
  var fe = Uy(oe, null, null), xe = Y(fe, 4), me = xe[0], pe = xe[1], je = xe[2], Ke = xe[3], Le = s.useMemo(function() {
    if (!_)
      return {
        scrollHeight: void 0,
        start: 0,
        end: M.length - 1,
        offset: void 0
      };
    if (!N) {
      var le;
      return {
        scrollHeight: ((le = V.current) === null || le === void 0 ? void 0 : le.offsetHeight) || 0,
        start: 0,
        end: M.length - 1,
        offset: void 0
      };
    }
    for (var Z = 0, Ee, He, We, ft = M.length, vt = 0; vt < ft; vt += 1) {
      var zt = M[vt], tn = oe(zt), Ot = je.get(tn), nn = Z + (Ot === void 0 ? i : Ot);
      nn >= T && Ee === void 0 && (Ee = vt, He = Z), nn > T + o && We === void 0 && (We = vt), Z = nn;
    }
    return Ee === void 0 && (Ee = 0, He = 0, We = Math.ceil(o / i)), We === void 0 && (We = M.length - 1), We = Math.min(We + 1, M.length - 1), {
      scrollHeight: Z,
      start: Ee,
      end: We,
      offset: He
    };
  }, [N, _, T, M, Ke, o]), he = Le.scrollHeight, ge = Le.start, Ve = Le.end, tt = Le.offset;
  ue.current.start = ge, ue.current.end = Ve;
  var qe = s.useState({
    width: 0,
    height: o
  }), st = Y(qe, 2), ke = st[0], Ft = st[1], pt = function(Z) {
    Ft({
      width: Z.width || Z.offsetWidth,
      height: Z.height || Z.offsetHeight
    });
  }, dt = s.useRef(), nt = s.useRef(), yt = s.useMemo(function() {
    return zc(ke.width, p);
  }, [ke.width, p]), ut = s.useMemo(function() {
    return zc(ke.height, he);
  }, [ke.height, he]), rt = he - o, Ye = s.useRef(rt);
  Ye.current = rt;
  function ye(le) {
    var Z = le;
    return Number.isNaN(Ye.current) || (Z = Math.min(Z, Ye.current)), Z = Math.max(Z, 0), Z;
  }
  var Se = T <= 0, Te = T >= rt, ie = ff(Se, Te), we = function() {
    return {
      x: F ? -W : W,
      y: T
    };
  }, Xe = s.useRef(we()), Qe = cn(function() {
    if (E) {
      var le = we();
      (Xe.current.x !== le.x || Xe.current.y !== le.y) && (E(le), Xe.current = le);
    }
  });
  function Ae(le, Z) {
    var Ee = le;
    Z ? (pa.flushSync(function() {
      G(Ee);
    }), Qe()) : be(Ee);
  }
  function re(le) {
    var Z = le.currentTarget.scrollTop;
    Z !== T && be(Z), y == null || y(le), Qe();
  }
  var te = function(Z) {
    var Ee = Z, He = p - ke.width;
    return Ee = Math.max(Ee, 0), Ee = Math.min(Ee, He), Ee;
  }, de = cn(function(le, Z) {
    Z ? (pa.flushSync(function() {
      G(function(Ee) {
        var He = Ee + (F ? -le : le);
        return te(He);
      });
    }), Qe()) : be(function(Ee) {
      var He = Ee + le;
      return He;
    });
  }), Me = Yy(_, Se, Te, !!p, de), ze = Y(Me, 2), at = ze[0], lt = ze[1];
  Qy(_, D, function(le, Z) {
    return ie(le, Z) ? !1 : (at({
      preventDefault: function() {
      },
      deltaY: le
    }), !0);
  }), xt(function() {
    function le(Ee) {
      _ && Ee.preventDefault();
    }
    var Z = D.current;
    return Z.addEventListener("wheel", at), Z.addEventListener("DOMMouseScroll", lt), Z.addEventListener("MozMousePixelScroll", le), function() {
      Z.removeEventListener("wheel", at), Z.removeEventListener("DOMMouseScroll", lt), Z.removeEventListener("MozMousePixelScroll", le);
    };
  }, [_]), xt(function() {
    p && G(function(le) {
      return te(le);
    });
  }, [ke.width, p]);
  var It = function() {
    var Z, Ee;
    (Z = dt.current) === null || Z === void 0 || Z.delayHidden(), (Ee = nt.current) === null || Ee === void 0 || Ee.delayHidden();
  }, ht = Gy(D, M, je, i, oe, function() {
    return pe(!0);
  }, be, It);
  s.useImperativeHandle(t, function() {
    return {
      getScrollInfo: we,
      scrollTo: function(Z) {
        function Ee(He) {
          return He && Je(He) === "object" && ("left" in He || "top" in He);
        }
        Ee(Z) ? (Z.left !== void 0 && G(te(Z.left)), ht(Z.top)) : ht(Z);
      }
    };
  }), xt(function() {
    if (C) {
      var le = M.slice(ge, Ve + 1);
      C(le, M);
    }
  }, [ge, Ve, M]);
  var $ = Zy(M, oe, je, i), K = x == null ? void 0 : x({
    start: ge,
    end: Ve,
    virtual: N,
    offsetX: W,
    offsetY: tt,
    rtl: F,
    getSize: $
  }), ae = ky(M, ge, Ve, p, me, f, Ce), Ne = null;
  o && (Ne = k(j({}, c ? "height" : "maxHeight", o), nS), _ && (Ne.overflowY = "hidden", p && (Ne.overflowX = "hidden"), se && (Ne.pointerEvents = "none")));
  var Ge = {};
  return F && (Ge.dir = "rtl"), /* @__PURE__ */ s.createElement("div", Ue({
    style: k(k({}, u), {}, {
      position: "relative"
    }),
    className: A
  }, Ge, R), /* @__PURE__ */ s.createElement(Yn, {
    onResize: pt
  }, /* @__PURE__ */ s.createElement(h, {
    className: "".concat(r, "-holder"),
    style: Ne,
    ref: D,
    onScroll: re,
    onMouseEnter: It
  }, /* @__PURE__ */ s.createElement(df, {
    prefixCls: r,
    height: he,
    offsetX: W,
    offsetY: tt,
    scrollWidth: p,
    onInnerResize: pe,
    ref: V,
    innerProps: O,
    rtl: F,
    extra: K
  }, ae))), N && he > o && /* @__PURE__ */ s.createElement(ms, {
    ref: dt,
    prefixCls: r,
    scrollOffset: T,
    scrollRange: he,
    rtl: F,
    onScroll: Ae,
    onStartMove: X,
    onStopMove: ee,
    spinSize: ut,
    containerSize: ke.height,
    style: S == null ? void 0 : S.verticalScrollBar,
    thumbStyle: S == null ? void 0 : S.verticalScrollBarThumb
  }), N && p && /* @__PURE__ */ s.createElement(ms, {
    ref: nt,
    prefixCls: r,
    scrollOffset: W,
    scrollRange: p,
    rtl: F,
    onScroll: Ae,
    onStartMove: X,
    onStopMove: ee,
    spinSize: yt,
    containerSize: ke.width,
    horizontal: !0,
    style: S == null ? void 0 : S.horizontalScrollBar,
    thumbStyle: S == null ? void 0 : S.horizontalScrollBarThumb
  }));
}
var vf = /* @__PURE__ */ s.forwardRef(rS);
vf.displayName = "List";
var mf = /* @__PURE__ */ s.createContext(null);
function aS() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
var oS = ["disabled", "title", "children", "style", "className"];
function Hc(e) {
  return typeof e == "string" || typeof e == "number";
}
var iS = function(t, n) {
  var r = Wb(), a = r.prefixCls, o = r.id, i = r.open, l = r.multiple, c = r.mode, u = r.searchValue, d = r.toggleOpen, f = r.notFoundContent, m = r.onPopupScroll, g = s.useContext(mf), b = g.flattenOptions, p = g.onActiveValue, v = g.defaultActiveFirstOption, h = g.onSelect, y = g.menuItemSelectedIcon, E = g.rawValues, C = g.fieldNames, O = g.virtual, x = g.direction, S = g.listHeight, R = g.listItemHeight, _ = "".concat(a, "-item"), N = Eo(function() {
    return b;
  }, [i, b], function(J, X) {
    return X[0] && J[1] !== X[1];
  }), F = s.useRef(null), A = function(X) {
    X.preventDefault();
  }, M = function(X) {
    F.current && F.current.scrollTo(typeof X == "number" ? {
      index: X
    } : X);
  }, D = function(X) {
    for (var ee = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, oe = N.length, Ce = 0; Ce < oe; Ce += 1) {
      var be = (X + Ce * ee + oe) % oe, ue = N[be], q = ue.group, $e = ue.data;
      if (!q && !$e.disabled)
        return be;
    }
    return -1;
  }, V = s.useState(function() {
    return D(0);
  }), P = Y(V, 2), I = P[0], T = P[1], z = function(X) {
    var ee = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    T(X);
    var oe = {
      source: ee ? "keyboard" : "mouse"
    }, Ce = N[X];
    if (!Ce) {
      p(null, -1, oe);
      return;
    }
    p(Ce.value, X, oe);
  };
  s.useEffect(function() {
    z(v !== !1 ? D(0) : -1);
  }, [N.length, u]);
  var L = s.useCallback(function(J) {
    return E.has(J) && c !== "combobox";
  }, [c, De(E).toString(), E.size]);
  s.useEffect(function() {
    var J = setTimeout(function() {
      if (!l && i && E.size === 1) {
        var ee = Array.from(E)[0], oe = N.findIndex(function(Ce) {
          var be = Ce.data;
          return be.value === ee;
        });
        oe !== -1 && (z(oe), M(oe));
      }
    });
    if (i) {
      var X;
      (X = F.current) === null || X === void 0 || X.scrollTo(void 0);
    }
    return function() {
      return clearTimeout(J);
    };
  }, [i, u]);
  var H = function(X) {
    X !== void 0 && h(X, {
      selected: !E.has(X)
    }), l || d(!1);
  };
  if (s.useImperativeHandle(n, function() {
    return {
      onKeyDown: function(X) {
        var ee = X.which, oe = X.ctrlKey;
        switch (ee) {
          case ce.N:
          case ce.P:
          case ce.UP:
          case ce.DOWN: {
            var Ce = 0;
            if (ee === ce.UP ? Ce = -1 : ee === ce.DOWN ? Ce = 1 : aS() && oe && (ee === ce.N ? Ce = 1 : ee === ce.P && (Ce = -1)), Ce !== 0) {
              var be = D(I + Ce, Ce);
              M(be), z(be, !0);
            }
            break;
          }
          case ce.ENTER: {
            var ue = N[I];
            ue && !ue.data.disabled ? H(ue.value) : H(void 0), i && X.preventDefault();
            break;
          }
          case ce.ESC:
            d(!1), i && X.stopPropagation();
        }
      },
      onKeyUp: function() {
      },
      scrollTo: function(X) {
        M(X);
      }
    };
  }), N.length === 0)
    return /* @__PURE__ */ s.createElement("div", {
      role: "listbox",
      id: "".concat(o, "_list"),
      className: "".concat(_, "-empty"),
      onMouseDown: A
    }, f);
  var W = Object.keys(C).map(function(J) {
    return C[J];
  }), G = function(X) {
    return X.label;
  };
  function U(J, X) {
    var ee = J.group;
    return {
      role: ee ? "presentation" : "option",
      id: "".concat(o, "_list_").concat(X)
    };
  }
  var ne = function(X) {
    var ee = N[X];
    if (!ee)
      return null;
    var oe = ee.data || {}, Ce = oe.value, be = ee.group, ue = lo(oe, !0), q = G(ee);
    return ee ? /* @__PURE__ */ s.createElement("div", Ue({
      "aria-label": typeof q == "string" && !be ? q : null
    }, ue, {
      key: X
    }, U(ee, X), {
      "aria-selected": L(Ce)
    }), Ce) : null;
  }, se = {
    role: "listbox",
    id: "".concat(o, "_list")
  };
  return /* @__PURE__ */ s.createElement(s.Fragment, null, O && /* @__PURE__ */ s.createElement("div", Ue({}, se, {
    style: {
      height: 0,
      width: 0,
      overflow: "hidden"
    }
  }), ne(I - 1), ne(I), ne(I + 1)), /* @__PURE__ */ s.createElement(vf, {
    itemKey: "key",
    ref: F,
    data: N,
    height: S,
    itemHeight: R,
    fullHeight: !1,
    onMouseDown: A,
    onScroll: m,
    virtual: O,
    direction: x,
    innerProps: O ? null : se
  }, function(J, X) {
    var ee, oe = J.group, Ce = J.groupOption, be = J.data, ue = J.label, q = J.value, $e = be.key;
    if (oe) {
      var Ie, _e = (Ie = be.title) !== null && Ie !== void 0 ? Ie : Hc(ue) ? ue.toString() : void 0;
      return /* @__PURE__ */ s.createElement("div", {
        className: Oe(_, "".concat(_, "-group")),
        title: _e
      }, ue !== void 0 ? ue : $e);
    }
    var fe = be.disabled, xe = be.title;
    be.children;
    var me = be.style, pe = be.className, je = wt(be, oS), Ke = Xr(je, W), Le = L(q), he = "".concat(_, "-option"), ge = Oe(_, he, pe, (ee = {}, j(ee, "".concat(he, "-grouped"), Ce), j(ee, "".concat(he, "-active"), I === X && !fe), j(ee, "".concat(he, "-disabled"), fe), j(ee, "".concat(he, "-selected"), Le), ee)), Ve = G(J), tt = !y || typeof y == "function" || Le, qe = typeof Ve == "number" ? Ve : Ve || q, st = Hc(qe) ? qe.toString() : void 0;
    return xe !== void 0 && (st = xe), /* @__PURE__ */ s.createElement("div", Ue({}, lo(Ke), O ? {} : U(J, X), {
      "aria-selected": Le,
      className: ge,
      title: st,
      onMouseMove: function() {
        I === X || fe || z(X);
      },
      onClick: function() {
        fe || H(q);
      },
      style: me
    }), /* @__PURE__ */ s.createElement("div", {
      className: "".concat(he, "-content")
    }, qe), /* @__PURE__ */ s.isValidElement(y) || Le, tt && /* @__PURE__ */ s.createElement(Lo, {
      className: "".concat(_, "-option-state"),
      customizeIcon: y,
      customizeIconProps: {
        value: q,
        disabled: fe,
        isSelected: Le
      }
    }, Le ? "✓" : null));
  }));
}, gf = /* @__PURE__ */ s.forwardRef(iS);
gf.displayName = "OptionList";
function sS(e) {
  var t = e.mode, n = e.options, r = e.children, a = e.backfill, o = e.allowClear, i = e.placeholder, l = e.getInputElement, c = e.showSearch, u = e.onSearch, d = e.defaultOpen, f = e.autoFocus, m = e.labelInValue, g = e.value, b = e.inputValue, p = e.optionLabelProp, v = bo(t), h = c !== void 0 ? c : v || t === "combobox", y = n || Ys(r);
  if (ot(t !== "tags" || y.every(function(x) {
    return !x.disabled;
  }), "Please avoid setting option to disabled in tags mode since user can always type text as tag."), t === "tags" || t === "combobox") {
    var E = y.some(function(x) {
      return x.options ? x.options.some(function(S) {
        return typeof ("value" in S ? S.value : S.key) == "number";
      }) : typeof ("value" in x ? x.value : x.key) == "number";
    });
    ot(!E, "`value` of Option should not use number type when `mode` is `tags` or `combobox`.");
  }
  if (ot(t !== "combobox" || !p, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly."), ot(t === "combobox" || !a, "`backfill` only works with `combobox` mode."), ot(t === "combobox" || !l, "`getInputElement` only work with `combobox` mode."), Ri(t !== "combobox" || !l || !o || !i, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`."), u && !h && t !== "combobox" && t !== "tags" && ot(!1, "`onSearch` should work with `showSearch` instead of use alone."), Ri(!d || f, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed."), g != null) {
    var C = Ks(g);
    ot(!m || C.every(function(x) {
      return Je(x) === "object" && ("key" in x || "value" in x);
    }), "`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`"), ot(!v || Array.isArray(g), "`value` should be array when `mode` is `multiple` or `tags`");
  }
  if (r) {
    var O = null;
    Dn(r).some(function(x) {
      if (!/* @__PURE__ */ s.isValidElement(x) || !x.type)
        return !1;
      var S = x, R = S.type;
      if (R.isSelectOption)
        return !1;
      if (R.isSelectOptGroup) {
        var _ = Dn(x.props.children).every(function(N) {
          return !/* @__PURE__ */ s.isValidElement(N) || !x.type || N.type.isSelectOption ? !0 : (O = N.type, !1);
        });
        return !_;
      }
      return O = R, !0;
    }), O && ot(!1, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(O.displayName || O.name || O, "`.")), ot(b === void 0, "`inputValue` is deprecated, please use `searchValue` instead.");
  }
}
function lS(e, t) {
  if (e) {
    var n = function r(a) {
      for (var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = 0; i < a.length; i++) {
        var l = a[i];
        if (l[t == null ? void 0 : t.value] === null)
          return ot(!1, "`value` in Select options should not be `null`."), !0;
        if (!o && Array.isArray(l[t == null ? void 0 : t.options]) && r(l[t == null ? void 0 : t.options], !0))
          break;
      }
    };
    n(e);
  }
}
var cS = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "direction", "listHeight", "listItemHeight", "value", "defaultValue", "labelInValue", "onChange"], uS = ["inputValue"];
function dS(e) {
  return !e || Je(e) !== "object";
}
var pf = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.id, r = e.mode, a = e.prefixCls, o = a === void 0 ? "rc-select" : a, i = e.backfill, l = e.fieldNames, c = e.inputValue, u = e.searchValue, d = e.onSearch, f = e.autoClearSearchValue, m = f === void 0 ? !0 : f, g = e.onSelect, b = e.onDeselect, p = e.dropdownMatchSelectWidth, v = p === void 0 ? !0 : p, h = e.filterOption, y = e.filterSort, E = e.optionFilterProp, C = e.optionLabelProp, O = e.options, x = e.children, S = e.defaultActiveFirstOption, R = e.menuItemSelectedIcon, _ = e.virtual, N = e.direction, F = e.listHeight, A = F === void 0 ? 200 : F, M = e.listItemHeight, D = M === void 0 ? 20 : M, V = e.value, P = e.defaultValue, I = e.labelInValue, T = e.onChange, z = wt(e, cS), L = jy(n), H = bo(r), W = !!(!O && x), G = s.useMemo(function() {
    return h === void 0 && r === "combobox" ? !1 : h;
  }, [h, r]), U = s.useMemo(
    function() {
      return cf(l, W);
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [
      // We stringify fieldNames to avoid unnecessary re-renders.
      JSON.stringify(l),
      W
    ]
    /* eslint-enable react-hooks/exhaustive-deps */
  ), ne = br("", {
    value: u !== void 0 ? u : c,
    postState: function(te) {
      return te || "";
    }
  }), se = Y(ne, 2), J = se[0], X = se[1], ee = Hy(O, x, U, E, C), oe = ee.valueOptions, Ce = ee.labelOptions, be = ee.options, ue = s.useCallback(function(re) {
    var te = Ks(re);
    return te.map(function(de) {
      var Me, ze, at, lt, It;
      if (dS(de))
        Me = de;
      else {
        var ht;
        at = de.key, ze = de.label, Me = (ht = de.value) !== null && ht !== void 0 ? ht : at;
      }
      var $ = oe.get(Me);
      if ($) {
        var K;
        if (ze === void 0 && (ze = $ == null ? void 0 : $[C || U.label]), at === void 0 && (at = (K = $ == null ? void 0 : $.key) !== null && K !== void 0 ? K : Me), lt = $ == null ? void 0 : $.disabled, It = $ == null ? void 0 : $.title, process.env.NODE_ENV !== "production" && !C) {
          var ae = $ == null ? void 0 : $[U.label];
          ae !== void 0 && !/* @__PURE__ */ s.isValidElement(ae) && !/* @__PURE__ */ s.isValidElement(ze) && ae !== ze && ot(!1, "`label` of `value` is not same as `label` in Select options.");
        }
      }
      return {
        label: ze,
        value: Me,
        key: at,
        disabled: lt,
        title: It
      };
    });
  }, [U, C, oe]), q = br(P, {
    value: V
  }), $e = Y(q, 2), Ie = $e[0], _e = $e[1], fe = s.useMemo(function() {
    var re, te = ue(Ie);
    return r === "combobox" && ly((re = te[0]) === null || re === void 0 ? void 0 : re.value) ? [] : te;
  }, [Ie, ue, r]), xe = My(fe, oe), me = Y(xe, 2), pe = me[0], je = me[1], Ke = s.useMemo(function() {
    if (!r && pe.length === 1) {
      var re = pe[0];
      if (re.value === null && (re.label === null || re.label === void 0))
        return [];
    }
    return pe.map(function(te) {
      var de;
      return k(k({}, te), {}, {
        label: (de = te.label) !== null && de !== void 0 ? de : te.value
      });
    });
  }, [r, pe]), Le = s.useMemo(function() {
    return new Set(pe.map(function(re) {
      return re.value;
    }));
  }, [pe]);
  s.useEffect(function() {
    if (r === "combobox") {
      var re, te = (re = pe[0]) === null || re === void 0 ? void 0 : re.value;
      X(sy(te) ? String(te) : "");
    }
  }, [pe]);
  var he = Dc(function(re, te) {
    var de, Me = te ?? re;
    return de = {}, j(de, U.value, re), j(de, U.label, Me), de;
  }), ge = s.useMemo(function() {
    if (r !== "tags")
      return be;
    var re = De(be), te = function(Me) {
      return oe.has(Me);
    };
    return De(pe).sort(function(de, Me) {
      return de.value < Me.value ? -1 : 1;
    }).forEach(function(de) {
      var Me = de.value;
      te(Me) || re.push(he(Me, de.label));
    }), re;
  }, [he, be, oe, pe, r]), Ve = Ay(ge, U, J, G, E), tt = s.useMemo(function() {
    return r !== "tags" || !J || Ve.some(function(re) {
      return re[E || "value"] === J;
    }) || Ve.some(function(re) {
      return re[U.value] === J;
    }) ? Ve : [he(J)].concat(De(Ve));
  }, [he, E, r, Ve, J, U]), qe = s.useMemo(function() {
    return y ? De(tt).sort(function(re, te) {
      return y(re, te);
    }) : tt;
  }, [tt, y]), st = s.useMemo(function() {
    return Ny(qe, {
      fieldNames: U,
      childrenAsData: W
    });
  }, [qe, U, W]), ke = function(te) {
    var de = ue(te);
    if (_e(de), T && // Trigger event only when value changed
    (de.length !== pe.length || de.some(function(at, lt) {
      var It;
      return ((It = pe[lt]) === null || It === void 0 ? void 0 : It.value) !== (at == null ? void 0 : at.value);
    }))) {
      var Me = I ? de : de.map(function(at) {
        return at.value;
      }), ze = de.map(function(at) {
        return vs(je(at.value));
      });
      T(
        // Value
        H ? Me : Me[0],
        // Option
        H ? ze : ze[0]
      );
    }
  }, Ft = s.useState(null), pt = Y(Ft, 2), dt = pt[0], nt = pt[1], yt = s.useState(0), ut = Y(yt, 2), rt = ut[0], Ye = ut[1], ye = S !== void 0 ? S : r !== "combobox", Se = s.useCallback(function(re, te) {
    var de = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, Me = de.source, ze = Me === void 0 ? "keyboard" : Me;
    Ye(te), i && r === "combobox" && re !== null && ze === "keyboard" && nt(String(re));
  }, [i, r]), Te = function(te, de, Me) {
    var ze = function() {
      var le, Z = je(te);
      return [I ? {
        label: Z == null ? void 0 : Z[U.label],
        value: te,
        key: (le = Z == null ? void 0 : Z.key) !== null && le !== void 0 ? le : te
      } : te, vs(Z)];
    };
    if (de && g) {
      var at = ze(), lt = Y(at, 2), It = lt[0], ht = lt[1];
      g(It, ht);
    } else if (!de && b && Me !== "clear") {
      var $ = ze(), K = Y($, 2), ae = K[0], Ne = K[1];
      b(ae, Ne);
    }
  }, ie = Dc(function(re, te) {
    var de, Me = H ? te.selected : !0;
    Me ? de = H ? [].concat(De(pe), [re]) : [re] : de = pe.filter(function(ze) {
      return ze.value !== re;
    }), ke(de), Te(re, Me), r === "combobox" ? nt("") : (!bo || m) && (X(""), nt(""));
  }), we = function(te, de) {
    ke(te);
    var Me = de.type, ze = de.values;
    (Me === "remove" || Me === "clear") && ze.forEach(function(at) {
      Te(at.value, !1, Me);
    });
  }, Xe = function(te, de) {
    if (X(te), nt(null), de.source === "submit") {
      var Me = (te || "").trim();
      if (Me) {
        var ze = Array.from(new Set([].concat(De(Le), [Me])));
        ke(ze), Te(Me, !0), X("");
      }
      return;
    }
    de.source !== "blur" && (r === "combobox" && ke(te), d == null || d(te));
  }, Qe = function(te) {
    var de = te;
    r !== "tags" && (de = te.map(function(ze) {
      var at = Ce.get(ze);
      return at == null ? void 0 : at.value;
    }).filter(function(ze) {
      return ze !== void 0;
    }));
    var Me = Array.from(new Set([].concat(De(Le), De(de))));
    ke(Me), Me.forEach(function(ze) {
      Te(ze, !0);
    });
  }, Ae = s.useMemo(function() {
    var re = _ !== !1 && v !== !1;
    return k(k({}, ee), {}, {
      flattenOptions: st,
      onActiveValue: Se,
      defaultActiveFirstOption: ye,
      onSelect: ie,
      menuItemSelectedIcon: R,
      rawValues: Le,
      fieldNames: U,
      virtual: re,
      direction: N,
      listHeight: A,
      listItemHeight: D,
      childrenAsData: W
    });
  }, [ee, st, Se, ye, ie, R, Le, U, _, v, A, D, W]);
  return process.env.NODE_ENV !== "production" && (sS(e), lS(be, U)), /* @__PURE__ */ s.createElement(mf.Provider, {
    value: Ae
  }, /* @__PURE__ */ s.createElement(uf, Ue({}, z, {
    // >>> MISC
    id: L,
    prefixCls: o,
    ref: t,
    omitDomProps: uS,
    mode: r,
    displayValues: Ke,
    onDisplayValuesChange: we,
    direction: N,
    searchValue: J,
    onSearch: Xe,
    autoClearSearchValue: m,
    onSearchSplit: Qe,
    dropdownMatchSelectWidth: v,
    OptionList: gf,
    emptyOptions: !st.length,
    activeValue: dt,
    activeDescendantId: "".concat(L, "_list_").concat(rt)
  })));
});
process.env.NODE_ENV !== "production" && (pf.displayName = "Select");
var Js = pf;
Js.Option = Qs;
Js.OptGroup = Xs;
function Gn(e, t, n) {
  return Oe({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: n
  });
}
const Vo = (e, t) => t || e, hf = () => {
  const [, e] = Sr(), n = new Wt(e.colorBgBase).toHsl().l < 0.5 ? {
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
};
process.env.NODE_ENV !== "production" && (hf.displayName = "EmptyImage");
const fS = hf, bf = () => {
  const [, e] = Sr(), {
    colorFill: t,
    colorFillTertiary: n,
    colorFillQuaternary: r,
    colorBgContainer: a
  } = e, {
    borderColor: o,
    shadowColor: i,
    contentColor: l
  } = s.useMemo(() => ({
    borderColor: new Wt(t).onBackground(a).toHexShortString(),
    shadowColor: new Wt(n).onBackground(a).toHexShortString(),
    contentColor: new Wt(r).onBackground(a).toHexShortString()
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
};
process.env.NODE_ENV !== "production" && (bf.displayName = "SimpleImage");
const vS = bf, mS = (e) => {
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
}, gS = Ln("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: n
  } = e, r = $t(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: n * 2.5,
    emptyImgHeightMD: n,
    emptyImgHeightSM: n * 0.875
  });
  return [mS(r)];
});
var pS = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const yf = /* @__PURE__ */ s.createElement(fS, null), Sf = /* @__PURE__ */ s.createElement(vS, null), zo = (e) => {
  var {
    className: t,
    rootClassName: n,
    prefixCls: r,
    image: a = yf,
    description: o,
    children: i,
    imageStyle: l,
    style: c
  } = e, u = pS(e, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle", "style"]);
  const {
    getPrefixCls: d,
    direction: f,
    empty: m
  } = s.useContext(Pt), g = d("empty", r), [b, p] = gS(g), [v] = yg("Empty"), h = typeof o < "u" ? o : v == null ? void 0 : v.description, y = typeof h == "string" ? h : "empty";
  let E = null;
  return typeof a == "string" ? E = /* @__PURE__ */ s.createElement("img", {
    alt: y,
    src: a
  }) : E = a, b(/* @__PURE__ */ s.createElement("div", Object.assign({
    className: Oe(p, g, m == null ? void 0 : m.className, {
      [`${g}-normal`]: a === Sf,
      [`${g}-rtl`]: f === "rtl"
    }, t, n),
    style: Object.assign(Object.assign({}, m == null ? void 0 : m.style), c)
  }, u), /* @__PURE__ */ s.createElement("div", {
    className: `${g}-image`,
    style: l
  }, E), h && /* @__PURE__ */ s.createElement("div", {
    className: `${g}-description`
  }, h), i && /* @__PURE__ */ s.createElement("div", {
    className: `${g}-footer`
  }, i)));
};
zo.PRESENTED_IMAGE_DEFAULT = yf;
zo.PRESENTED_IMAGE_SIMPLE = Sf;
process.env.NODE_ENV !== "production" && (zo.displayName = "Empty");
const sa = zo, hS = (e) => {
  const {
    componentName: t
  } = e, {
    getPrefixCls: n
  } = s.useContext(Pt), r = n("empty");
  switch (t) {
    case "Table":
    case "List":
      return /* @__PURE__ */ Re.createElement(sa, {
        image: sa.PRESENTED_IMAGE_SIMPLE
      });
    case "Select":
    case "TreeSelect":
    case "Cascader":
    case "Transfer":
    case "Mentions":
      return /* @__PURE__ */ Re.createElement(sa, {
        image: sa.PRESENTED_IMAGE_SIMPLE,
        className: `${r}-small`
      });
    default:
      return /* @__PURE__ */ Re.createElement(sa, null);
  }
}, bS = hS, yS = (e) => {
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
}, SS = (e) => {
  const {
    antCls: t,
    componentCls: n
  } = e, r = `${n}-item`, a = `&${t}-slide-up-enter${t}-slide-up-enter-active`, o = `&${t}-slide-up-appear${t}-slide-up-appear-active`, i = `&${t}-slide-up-leave${t}-slide-up-leave-active`, l = `${n}-dropdown-placement-`;
  return [
    {
      [`${n}-dropdown`]: Object.assign(Object.assign({}, nr(e)), {
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
          animationName: Gd
        },
        [`
          ${a}${l}topLeft,
          ${o}${l}topLeft,
          ${a}${l}topRight,
          ${o}${l}topRight
        `]: {
          animationName: Kd
        },
        [`${i}${l}bottomLeft`]: {
          animationName: qd
        },
        [`
          ${i}${l}topLeft,
          ${i}${l}topRight
        `]: {
          animationName: Yd
        },
        "&-hidden": {
          display: "none"
        },
        [`${r}`]: Object.assign(Object.assign({}, yS(e)), {
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
            }, ki),
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
    xc(e, "slide-up"),
    xc(e, "slide-down"),
    wc(e, "move-up"),
    wc(e, "move-down")
  ];
}, ES = SS, Ar = 2, Ef = (e) => {
  let {
    multipleSelectItemHeight: t,
    selectHeight: n,
    lineWidth: r
  } = e;
  const a = (n - t) / 2 - r, o = Math.ceil(a / 2);
  return [a, o];
};
function mi(e, t) {
  const {
    componentCls: n,
    iconCls: r
  } = e, a = `${n}-selection-overflow`, o = e.multipleSelectItemHeight, [i] = Ef(e), l = t ? `${n}-${t}` : "";
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
        padding: `${i - Ar}px ${Ar * 2}px`,
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
          margin: `${Ar}px 0`,
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
        marginTop: Ar,
        marginBottom: Ar,
        lineHeight: `${o - e.lineWidth * 2}px`,
        background: e.multipleItemBg,
        border: `${e.lineWidth}px ${e.lineType} ${e.multipleItemBorderColor}`,
        borderRadius: e.borderRadiusSM,
        cursor: "default",
        transition: `font-size ${e.motionDurationSlow}, line-height ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
        marginInlineEnd: Ar * 2,
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
        "&-remove": Object.assign(Object.assign({}, Po()), {
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
const CS = (e) => {
  const {
    componentCls: t
  } = e, n = $t(e, {
    selectHeight: e.controlHeightSM,
    multipleSelectItemHeight: e.controlHeightXS,
    borderRadius: e.borderRadiusSM,
    borderRadiusSM: e.borderRadiusXS
  }), r = $t(e, {
    fontSize: e.fontSizeLG,
    selectHeight: e.controlHeightLG,
    multipleSelectItemHeight: e.multipleItemHeightLG,
    borderRadius: e.borderRadiusLG,
    borderRadiusSM: e.borderRadius
  }), [, a] = Ef(e);
  return [
    mi(e),
    // ======================== Small ========================
    mi(n, "sm"),
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
    mi(r, "lg")
  ];
}, wS = CS;
function gi(e, t) {
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
      [`${n}-selector`]: Object.assign(Object.assign({}, nr(e, !0)), {
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
function xS(e) {
  const {
    componentCls: t
  } = e, n = e.controlPaddingHorizontalSM - e.lineWidth;
  return [
    gi(e),
    // ======================== Small ========================
    // Shared
    gi($t(e, {
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
    gi($t(e, {
      controlHeight: e.singleItemHeightLG,
      fontSize: e.fontSizeLG,
      borderRadius: e.borderRadiusLG
    }), "lg")
  ];
}
const OS = (e) => {
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
}, RS = (e) => {
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
}, $S = (e) => {
  const {
    antCls: t,
    componentCls: n,
    inputPaddingHorizontalBase: r,
    iconCls: a
  } = e;
  return {
    [n]: Object.assign(Object.assign({}, nr(e)), {
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      [`&:not(${n}-customize-input) ${n}-selector`]: Object.assign(Object.assign({}, OS(e)), RS(e)),
      // [`&:not(&-disabled):hover ${selectCls}-selector`]: {
      //   ...genHoverStyle(token),
      // },
      // ======================== Selection ========================
      [`${n}-selection-item`]: Object.assign(Object.assign({
        flex: 1,
        fontWeight: "normal",
        position: "relative",
        userSelect: "none"
      }, ki), {
        // https://github.com/ant-design/ant-design/issues/40421
        [`> ${t}-typography`]: {
          display: "inline"
        }
      }),
      // ======================= Placeholder =======================
      [`${n}-selection-placeholder`]: Object.assign(Object.assign({}, ki), {
        flex: 1,
        color: e.colorTextPlaceholder,
        pointerEvents: "none"
      }),
      // ========================== Arrow ==========================
      [`${n}-arrow`]: Object.assign(Object.assign({}, Po()), {
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
}, IS = (e) => {
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
    $S(e),
    // Single
    xS(e),
    // Multiple
    wS(e),
    // Dropdown
    ES(e),
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
    pi(t, $t(e, {
      borderHoverColor: e.colorPrimaryHover,
      borderActiveColor: e.colorPrimary,
      outlineColor: e.controlOutline
    })),
    pi(`${t}-status-error`, $t(e, {
      borderHoverColor: e.colorErrorHover,
      borderActiveColor: e.colorError,
      outlineColor: e.colorErrorOutline
    }), !0),
    pi(`${t}-status-warning`, $t(e, {
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
}, NS = Ln("Select", (e, t) => {
  let {
    rootPrefixCls: n
  } = t;
  const r = $t(e, {
    rootPrefixCls: n,
    inputPaddingHorizontalBase: e.paddingSM - 1,
    multipleSelectItemHeight: e.multipleItemHeight,
    selectHeight: e.controlHeight
  });
  return [IS(r)];
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
    controlHeightLG: m,
    controlHeightSM: g,
    colorBgContainerDisabled: b,
    colorTextDisabled: p
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
    singleItemHeightLG: m,
    multipleItemBg: f,
    multipleItemBorderColor: "transparent",
    multipleItemHeight: g,
    multipleItemHeightLG: r,
    multipleSelectorBgDisabled: b,
    multipleItemColorDisabled: p,
    multipleItemBorderColorDisabled: "transparent"
  };
}), _S = (e) => {
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
function PS(e, t) {
  return e || _S(t);
}
function TS(e, t) {
  return t !== void 0 ? t : e !== null;
}
var MS = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" };
const AS = MS;
var Cf = function(t, n) {
  return /* @__PURE__ */ s.createElement(xn, Ue({}, t, {
    ref: n,
    icon: AS
  }));
};
process.env.NODE_ENV !== "production" && (Cf.displayName = "CheckOutlined");
const FS = /* @__PURE__ */ s.forwardRef(Cf);
var DS = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" };
const jS = DS;
var wf = function(t, n) {
  return /* @__PURE__ */ s.createElement(xn, Ue({}, t, {
    ref: n,
    icon: jS
  }));
};
process.env.NODE_ENV !== "production" && (wf.displayName = "DownOutlined");
const xf = /* @__PURE__ */ s.forwardRef(wf);
var LS = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" };
const VS = LS;
var Of = function(t, n) {
  return /* @__PURE__ */ s.createElement(xn, Ue({}, t, {
    ref: n,
    icon: VS
  }));
};
process.env.NODE_ENV !== "production" && (Of.displayName = "SearchOutlined");
const Rf = /* @__PURE__ */ s.forwardRef(Of);
function zS(e) {
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
    componentName: m
  } = e;
  process.env.NODE_ENV !== "production" && Xn(m).deprecated(!n, "clearIcon", "allowClear={{ clearIcon: React.ReactNode }}");
  const g = n ?? /* @__PURE__ */ s.createElement(Hs, null), b = (y) => t === null && !l && !f ? null : /* @__PURE__ */ s.createElement(s.Fragment, null, u !== !1 && y, l && d);
  let p = null;
  if (t !== void 0)
    p = b(t);
  else if (o)
    p = b(/* @__PURE__ */ s.createElement(Od, {
      spin: !0
    }));
  else {
    const y = `${c}-suffix`;
    p = (E) => {
      let {
        open: C,
        showSearch: O
      } = E;
      return b(C && O ? /* @__PURE__ */ s.createElement(Rf, {
        className: y
      }) : /* @__PURE__ */ s.createElement(xf, {
        className: y
      }));
    };
  }
  let v = null;
  r !== void 0 ? v = r : i ? v = /* @__PURE__ */ s.createElement(FS, null) : v = null;
  let h = null;
  return a !== void 0 ? h = a : h = /* @__PURE__ */ s.createElement(ih, null), {
    clearIcon: g,
    suffixIcon: p,
    itemIcon: v,
    removeIcon: h
  };
}
var HS = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const $f = "SECRET_COMBOBOX_MODE_DO_NOT_USE", If = (e, t) => {
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
    listItemHeight: m = 24,
    size: g,
    disabled: b,
    notFoundContent: p,
    status: v,
    builtinPlacements: h,
    dropdownMatchSelectWidth: y,
    popupMatchSelectWidth: E,
    direction: C,
    style: O,
    allowClear: x
  } = e, S = HS(e, ["prefixCls", "bordered", "className", "rootClassName", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth", "direction", "style", "allowClear"]);
  const {
    getPopupContainer: R,
    getPrefixCls: _,
    renderEmpty: N,
    direction: F,
    virtual: A,
    popupMatchSelectWidth: M,
    popupOverflow: D,
    select: V
  } = s.useContext(Pt), P = _("select", r), I = _(), T = C ?? F, {
    compactSize: z,
    compactItemClassnames: L
  } = Ra(P, T), [H, W] = NS(P), G = s.useMemo(() => {
    const {
      mode: ge
    } = S;
    if (ge !== "combobox")
      return ge === $f ? "combobox" : ge;
  }, [S.mode]), U = G === "multiple" || G === "tags", ne = TS(S.suffixIcon, S.showArrow), se = (n = E ?? y) !== null && n !== void 0 ? n : M, {
    status: J,
    hasFeedback: X,
    isFormItemInput: ee,
    feedbackIcon: oe
  } = s.useContext(Kn), Ce = Vo(J, v);
  let be;
  p !== void 0 ? be = p : G === "combobox" ? be = null : be = (N == null ? void 0 : N("Select")) || /* @__PURE__ */ s.createElement(bS, {
    componentName: "Select"
  });
  const {
    suffixIcon: ue,
    itemIcon: q,
    removeIcon: $e,
    clearIcon: Ie
  } = zS(Object.assign(Object.assign({}, S), {
    multiple: U,
    hasFeedback: X,
    feedbackIcon: oe,
    showSuffixIcon: ne,
    prefixCls: P,
    showArrow: S.showArrow,
    componentName: "Select"
  })), _e = x === !0 ? {
    clearIcon: Ie
  } : x, fe = Xr(S, ["suffixIcon", "itemIcon"]), xe = Oe(c || u, {
    [`${P}-dropdown-${T}`]: T === "rtl"
  }, i, W), me = Cr((ge) => {
    var Ve;
    return (Ve = g ?? z) !== null && Ve !== void 0 ? Ve : ge;
  }), pe = s.useContext(Jr), je = b ?? pe, Ke = Oe({
    [`${P}-lg`]: me === "large",
    [`${P}-sm`]: me === "small",
    [`${P}-rtl`]: T === "rtl",
    [`${P}-borderless`]: !a,
    [`${P}-in-form-item`]: ee
  }, Gn(P, Ce, X), L, V == null ? void 0 : V.className, o, i, W), Le = s.useMemo(() => f !== void 0 ? f : T === "rtl" ? "bottomRight" : "bottomLeft", [f, T]), he = PS(h, D);
  if (process.env.NODE_ENV !== "production") {
    const ge = Xn("Select");
    ge.deprecated(!u, "dropdownClassName", "popupClassName"), ge.deprecated(y === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), process.env.NODE_ENV !== "production" && ge(!("showArrow" in S), "deprecated", "`showArrow` is deprecated which will be removed in next major version. It will be a default behavior, you can hide it by setting `suffixIcon` to null.");
  }
  return H(/* @__PURE__ */ s.createElement(Js, Object.assign({
    ref: t,
    virtual: A,
    showSearch: V == null ? void 0 : V.showSearch
  }, fe, {
    style: Object.assign(Object.assign({}, V == null ? void 0 : V.style), O),
    dropdownMatchSelectWidth: se,
    builtinPlacements: he,
    transitionName: Rh(I, "slide-up", S.transitionName),
    listHeight: d,
    listItemHeight: m,
    mode: G,
    prefixCls: P,
    placement: Le,
    direction: T,
    suffixIcon: ue,
    menuItemSelectedIcon: q,
    removeIcon: $e,
    allowClear: _e,
    notFoundContent: be,
    className: Ke,
    getPopupContainer: l || R,
    dropdownClassName: xe,
    disabled: je
  })));
};
process.env.NODE_ENV !== "production" && (If.displayName = "Select");
const wr = /* @__PURE__ */ s.forwardRef(If), BS = Xd(wr);
wr.SECRET_COMBOBOX_MODE_DO_NOT_USE = $f;
wr.Option = Qs;
wr.OptGroup = Xs;
wr._InternalPanelDoNotUseOrYouWillBeFired = BS;
process.env.NODE_ENV !== "production" && (wr.displayName = "Select");
const kt = wr, {
  Option: gs
} = kt;
function Bc(e) {
  return e && e.type && (e.type.isSelectOption || e.type.isSelectOptGroup);
}
const kS = (e, t) => {
  const {
    prefixCls: n,
    className: r,
    popupClassName: a,
    dropdownClassName: o,
    children: i,
    dataSource: l
  } = e, c = Dn(i);
  let u;
  c.length === 1 && co(c[0]) && !Bc(c[0]) && ([u] = c);
  const d = u ? () => u : void 0;
  let f;
  if (c.length && Bc(c[0]) ? f = i : f = l ? l.map((b) => {
    if (co(b))
      return b;
    switch (typeof b) {
      case "string":
        return /* @__PURE__ */ s.createElement(gs, {
          key: b,
          value: b
        }, b);
      case "object": {
        const {
          value: p
        } = b;
        return /* @__PURE__ */ s.createElement(gs, {
          key: p,
          value: p
        }, b.text);
      }
      default:
        return;
    }
  }) : [], process.env.NODE_ENV !== "production") {
    const b = Xn("AutoComplete");
    b.deprecated(!("dataSource" in e), "dataSource", "options"), process.env.NODE_ENV !== "production" && b(!u || !("size" in e), "usage", "You need to control style self instead of setting `size` when using customize input."), b.deprecated(!o, "dropdownClassName", "popupClassName");
  }
  const {
    getPrefixCls: m
  } = s.useContext(Pt), g = m("select", n);
  return /* @__PURE__ */ s.createElement(kt, Object.assign({
    ref: t,
    suffixIcon: null
  }, Xr(e, ["dataSource", "dropdownClassName"]), {
    prefixCls: g,
    popupClassName: a || o,
    className: Oe(`${g}-auto-complete`, r),
    mode: kt.SECRET_COMBOBOX_MODE_DO_NOT_USE,
    // Internal api
    getInputElement: d
  }), f);
}, Pa = /* @__PURE__ */ s.forwardRef(kS), WS = Xd(Pa);
Pa.Option = gs;
Pa._InternalPanelDoNotUseOrYouWillBeFired = WS;
process.env.NODE_ENV !== "production" && (Pa.displayName = "AutoComplete");
const US = Pa, Nf = (e) => ({
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
}), _f = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), ps = (e) => ({
  borderColor: e.activeBorderColor,
  boxShadow: e.activeShadow,
  outline: 0,
  backgroundColor: e.activeBg
}), Zs = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "&:hover": Object.assign({}, _f($t(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), Pf = (e) => {
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
}, Tf = (e) => ({
  padding: `${e.paddingBlockSM}px ${e.paddingInlineSM}px`,
  borderRadius: e.borderRadiusSM
}), Ho = (e, t) => {
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
      "&:focus, &:focus-within": Object.assign({}, ps($t(e, {
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
      "&:focus, &:focus-within": Object.assign({}, ps($t(e, {
        activeBorderColor: a,
        activeShadow: i
      }))),
      [`${n}-prefix, ${n}-suffix`]: {
        color: a
      }
    }
  };
}, Bo = (e) => Object.assign(Object.assign({
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
}, Nf(e.colorTextPlaceholder)), {
  "&:hover": Object.assign({}, _f(e)),
  "&:focus, &:focus-within": Object.assign({}, ps(e)),
  "&-disabled, &[disabled]": Object.assign({}, Zs(e)),
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
  "&-lg": Object.assign({}, Pf(e)),
  "&-sm": Object.assign({}, Tf(e)),
  // RTL
  "&-rtl": {
    direction: "rtl"
  },
  "&-textarea-rtl": {
    direction: "rtl"
  }
}), Mf = (e) => {
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
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, Pf(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, Tf(e)),
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
    }, sp()), {
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
}, GS = (e) => {
  const {
    componentCls: t,
    controlHeightSM: n,
    lineWidth: r
  } = e, a = 16, o = (n - r * 2 - a) / 2;
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, nr(e)), Bo(e)), Ho(e, t)), {
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
}, qS = (e) => {
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
}, KS = (e) => {
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
    [`${t}-affix-wrapper`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Bo(e)), {
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
    }), qS(e)), {
      // password
      [`${l}${t}-password-icon`]: {
        color: o,
        cursor: "pointer",
        transition: `all ${a}`,
        "&:hover": {
          color: i
        }
      }
    }), Ho(e, `${t}-affix-wrapper`))
  };
}, YS = (e) => {
  const {
    componentCls: t,
    colorError: n,
    colorWarning: r,
    borderRadiusLG: a,
    borderRadiusSM: o
  } = e;
  return {
    [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, nr(e)), Mf(e)), {
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
          [`${t}-group-addon`]: Object.assign({}, Zs(e))
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
}, XS = (e) => {
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
}, QS = (e) => {
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
function Af(e) {
  return $t(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const Ff = (e) => {
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
    colorFillAlter: m,
    colorPrimaryHover: g,
    colorPrimary: b,
    controlOutlineWidth: p,
    controlOutline: v,
    colorErrorOutline: h,
    colorWarningOutline: y
  } = e;
  return {
    paddingBlock: Math.max(Math.round((t - n * r) / 2 * 10) / 10 - a, 0),
    paddingBlockSM: Math.max(Math.round((o - n * r) / 2 * 10) / 10 - a, 0),
    paddingBlockLG: Math.ceil((i - l * c) / 2 * 10) / 10 - a,
    paddingInline: u - a,
    paddingInlineSM: d - a,
    paddingInlineLG: f - a,
    addonBg: m,
    activeBorderColor: b,
    hoverBorderColor: g,
    activeShadow: `0 0 0 ${p}px ${v}`,
    errorActiveShadow: `0 0 0 ${p}px ${h}`,
    warningActiveShadow: `0 0 0 ${p}px ${y}`,
    hoverBg: "",
    activeBg: ""
  };
}, el = Ln("Input", (e) => {
  const t = $t(e, Af(e));
  return [
    GS(t),
    QS(t),
    KS(t),
    YS(t),
    XS(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Do(t)
  ];
}, Ff), JS = /* @__PURE__ */ s.createContext({}), ZS = JS, e1 = (e) => {
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
}, t1 = (e) => {
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
}, n1 = (e, t) => {
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
}, hs = (e, t) => n1(e, t), r1 = (e, t, n) => ({
  [`@media (min-width: ${t}px)`]: Object.assign({}, hs(e, n))
});
Ln("Grid", (e) => [e1(e)]);
const a1 = Ln("Grid", (e) => {
  const t = $t(e, {
    gridColumns: 24
    // Row is divided into 24 parts in Grid
  }), n = {
    "-sm": t.screenSMMin,
    "-md": t.screenMDMin,
    "-lg": t.screenLGMin,
    "-xl": t.screenXLMin,
    "-xxl": t.screenXXLMin
  };
  return [t1(t), hs(t, ""), hs(t, "-xs"), Object.keys(n).map((r) => r1(t, n[r], r)).reduce((r, a) => Object.assign(Object.assign({}, r), a), {})];
});
var o1 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function i1(e) {
  return typeof e == "number" ? `${e} ${e} auto` : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? `0 0 ${e}` : e;
}
const s1 = ["xs", "sm", "md", "lg", "xl", "xxl"], Df = /* @__PURE__ */ s.forwardRef((e, t) => {
  const {
    getPrefixCls: n,
    direction: r
  } = s.useContext(Pt), {
    gutter: a,
    wrap: o
  } = s.useContext(ZS), {
    prefixCls: i,
    span: l,
    order: c,
    offset: u,
    push: d,
    pull: f,
    className: m,
    children: g,
    flex: b,
    style: p
  } = e, v = o1(e, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]), h = n("col", i), [y, E] = a1(h);
  let C = {};
  s1.forEach((S) => {
    let R = {};
    const _ = e[S];
    typeof _ == "number" ? R.span = _ : typeof _ == "object" && (R = _ || {}), delete v[S], C = Object.assign(Object.assign({}, C), {
      [`${h}-${S}-${R.span}`]: R.span !== void 0,
      [`${h}-${S}-order-${R.order}`]: R.order || R.order === 0,
      [`${h}-${S}-offset-${R.offset}`]: R.offset || R.offset === 0,
      [`${h}-${S}-push-${R.push}`]: R.push || R.push === 0,
      [`${h}-${S}-pull-${R.pull}`]: R.pull || R.pull === 0,
      [`${h}-${S}-flex-${R.flex}`]: R.flex || R.flex === "auto",
      [`${h}-rtl`]: r === "rtl"
    });
  });
  const O = Oe(h, {
    [`${h}-${l}`]: l !== void 0,
    [`${h}-order-${c}`]: c,
    [`${h}-offset-${u}`]: u,
    [`${h}-push-${d}`]: d,
    [`${h}-pull-${f}`]: f
  }, m, C, E), x = {};
  if (a && a[0] > 0) {
    const S = a[0] / 2;
    x.paddingLeft = S, x.paddingRight = S;
  }
  return b && (x.flex = i1(b), o === !1 && !x.minWidth && (x.minWidth = 0)), y(/* @__PURE__ */ s.createElement("div", Object.assign({}, v, {
    style: Object.assign(Object.assign({}, x), p),
    className: O,
    ref: t
  }), g));
});
process.env.NODE_ENV !== "production" && (Df.displayName = "Col");
const l1 = Df;
var c1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" } }] }, name: "up", theme: "outlined" };
const u1 = c1;
var jf = function(t, n) {
  return /* @__PURE__ */ s.createElement(xn, Ue({}, t, {
    ref: n,
    icon: u1
  }));
};
process.env.NODE_ENV !== "production" && (jf.displayName = "UpOutlined");
const d1 = /* @__PURE__ */ s.forwardRef(jf);
function bs() {
  return typeof BigInt == "function";
}
function Lf(e) {
  return !e && e !== 0 && !Number.isNaN(e) || !String(e).trim();
}
function gr(e) {
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
function tl(e) {
  var t = String(e);
  return !Number.isNaN(Number(t)) && t.includes("e");
}
function dr(e) {
  var t = String(e);
  if (tl(e)) {
    var n = Number(t.slice(t.indexOf("e-") + 2)), r = t.match(/\.(\d+)/);
    return r != null && r[1] && (n += r[1].length), n;
  }
  return t.includes(".") && nl(t) ? t.length - t.indexOf(".") - 1 : 0;
}
function ko(e) {
  var t = String(e);
  if (tl(e)) {
    if (e > Number.MAX_SAFE_INTEGER)
      return String(bs() ? BigInt(e).toString() : Number.MAX_SAFE_INTEGER);
    if (e < Number.MIN_SAFE_INTEGER)
      return String(bs() ? BigInt(e).toString() : Number.MIN_SAFE_INTEGER);
    t = e.toFixed(dr(t));
  }
  return gr(t).fullStr;
}
function nl(e) {
  return typeof e == "number" ? !Number.isNaN(e) : e ? (
    // Normal type: 11.28
    /^\s*-?\d+(\.\d+)?\s*$/.test(e) || // Pre-number: 1.
    /^\s*-?\d+\.\s*$/.test(e) || // Post-number: .1
    /^\s*-?\.\d+\s*$/.test(e)
  ) : !1;
}
var f1 = /* @__PURE__ */ function() {
  function e(t) {
    if (dn(this, e), j(this, "origin", ""), j(this, "negative", void 0), j(this, "integer", void 0), j(this, "decimal", void 0), j(this, "decimalLen", void 0), j(this, "empty", void 0), j(this, "nan", void 0), Lf(t)) {
      this.empty = !0;
      return;
    }
    if (this.origin = String(t), t === "-" || Number.isNaN(t)) {
      this.nan = !0;
      return;
    }
    var n = t;
    if (tl(n) && (n = Number(n)), n = typeof n == "string" ? n : ko(n), nl(n)) {
      var r = gr(n);
      this.negative = r.negative;
      var a = r.trimStr.split(".");
      this.integer = BigInt(a[0]);
      var o = a[1] || "0";
      this.decimal = BigInt(o), this.decimalLen = o.length;
    } else
      this.nan = !0;
  }
  return fn(e, [{
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
      var o = Math.max(this.getDecimalStr().length, n.getDecimalStr().length), i = this.alignDecimal(o), l = n.alignDecimal(o), c = r(i, l).toString(), u = a(o), d = gr(c), f = d.negativeStr, m = d.trimStr, g = "".concat(f).concat(m.padStart(u + 1, "0"));
      return new e("".concat(g.slice(0, -u), ".").concat(g.slice(-u)));
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
      return n ? this.isInvalidate() ? "" : gr("".concat(this.getMark()).concat(this.getIntegerStr(), ".").concat(this.getDecimalStr())).fullStr : this.origin;
    }
  }]), e;
}(), v1 = /* @__PURE__ */ function() {
  function e(t) {
    if (dn(this, e), j(this, "origin", ""), j(this, "number", void 0), j(this, "empty", void 0), Lf(t)) {
      this.empty = !0;
      return;
    }
    this.origin = String(t), this.number = Number(t);
  }
  return fn(e, [{
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
      var o = Math.max(dr(this.number), dr(r));
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
      var o = Math.max(dr(this.number), dr(r));
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
      return n ? this.isInvalidate() ? "" : ko(this.number) : this.origin;
    }
  }]), e;
}();
function Nn(e) {
  return bs() ? new f1(e) : new v1(e);
}
function eo(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (e === "")
    return "";
  var a = gr(e), o = a.negativeStr, i = a.integerStr, l = a.decimalStr, c = "".concat(t).concat(l), u = "".concat(o).concat(i);
  if (n >= 0) {
    var d = Number(l[n]);
    if (d >= 5 && !r) {
      var f = Nn(e).add("".concat(o, "0.").concat("0".repeat(n)).concat(10 - d));
      return eo(f.toString(), t, n, r);
    }
    return n === 0 ? u : "".concat(u).concat(t).concat(l.padEnd(n, "0").slice(0, n));
  }
  return c === ".0" ? u : "".concat(u).concat(c);
}
function Fr(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function hi(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function ga(e, t, n, r) {
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
function Vf(e, t) {
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
function ys(e) {
  return typeof e > "u" || e === null ? "" : String(e);
}
var rl = function(t) {
  var n, r, a = t.inputElement, o = t.prefixCls, i = t.prefix, l = t.suffix, c = t.addonBefore, u = t.addonAfter, d = t.className, f = t.style, m = t.disabled, g = t.readOnly, b = t.focused, p = t.triggerFocus, v = t.allowClear, h = t.value, y = t.handleReset, E = t.hidden, C = t.classes, O = t.classNames, x = t.dataAttrs, S = t.styles, R = t.components, _ = (R == null ? void 0 : R.affixWrapper) || "span", N = (R == null ? void 0 : R.groupWrapper) || "span", F = (R == null ? void 0 : R.wrapper) || "span", A = (R == null ? void 0 : R.groupAddon) || "span", M = s.useRef(null), D = function(se) {
    var J;
    (J = M.current) !== null && J !== void 0 && J.contains(se.target) && (p == null || p());
  }, V = function() {
    var se;
    if (!v)
      return null;
    var J = !m && !g && h, X = "".concat(o, "-clear-icon"), ee = Je(v) === "object" && v !== null && v !== void 0 && v.clearIcon ? v.clearIcon : "✖";
    return /* @__PURE__ */ Re.createElement("span", {
      onClick: y,
      onMouseDown: function(Ce) {
        return Ce.preventDefault();
      },
      className: Oe(X, (se = {}, j(se, "".concat(X, "-hidden"), !J), j(se, "".concat(X, "-has-suffix"), !!l), se)),
      role: "button",
      tabIndex: -1
    }, ee);
  }, P = /* @__PURE__ */ s.cloneElement(a, {
    value: h,
    hidden: E,
    className: Oe((n = a.props) === null || n === void 0 ? void 0 : n.className, !hi(t) && !Fr(t) && d) || null,
    style: k(k({}, (r = a.props) === null || r === void 0 ? void 0 : r.style), !hi(t) && !Fr(t) ? f : {})
  });
  if (hi(t)) {
    var I, T = "".concat(o, "-affix-wrapper"), z = Oe(T, (I = {}, j(I, "".concat(T, "-disabled"), m), j(I, "".concat(T, "-focused"), b), j(I, "".concat(T, "-readonly"), g), j(I, "".concat(T, "-input-with-clear-btn"), l && v && h), I), !Fr(t) && d, C == null ? void 0 : C.affixWrapper, O == null ? void 0 : O.affixWrapper), L = (l || v) && /* @__PURE__ */ Re.createElement("span", {
      className: Oe("".concat(o, "-suffix"), O == null ? void 0 : O.suffix),
      style: S == null ? void 0 : S.suffix
    }, V(), l);
    P = /* @__PURE__ */ Re.createElement(_, Ue({
      className: z,
      style: k(k({}, Fr(t) ? void 0 : f), S == null ? void 0 : S.affixWrapper),
      hidden: !Fr(t) && E,
      onClick: D
    }, x == null ? void 0 : x.affixWrapper, {
      ref: M
    }), i && /* @__PURE__ */ Re.createElement("span", {
      className: Oe("".concat(o, "-prefix"), O == null ? void 0 : O.prefix),
      style: S == null ? void 0 : S.prefix
    }, i), /* @__PURE__ */ s.cloneElement(a, {
      value: h,
      hidden: null
    }), L);
  }
  if (Fr(t)) {
    var H = "".concat(o, "-group"), W = "".concat(H, "-addon"), G = Oe("".concat(o, "-wrapper"), H, C == null ? void 0 : C.wrapper), U = Oe("".concat(o, "-group-wrapper"), d, C == null ? void 0 : C.group);
    return /* @__PURE__ */ Re.createElement(N, {
      className: U,
      style: f,
      hidden: E
    }, /* @__PURE__ */ Re.createElement(F, {
      className: G
    }, c && /* @__PURE__ */ Re.createElement(A, {
      className: W
    }, c), /* @__PURE__ */ s.cloneElement(P, {
      hidden: null
    }), u && /* @__PURE__ */ Re.createElement(A, {
      className: W
    }, u)));
  }
  return P;
}, m1 = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "type", "classes", "classNames", "styles"], g1 = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.autoComplete, r = e.onChange, a = e.onFocus, o = e.onBlur, i = e.onPressEnter, l = e.onKeyDown, c = e.prefixCls, u = c === void 0 ? "rc-input" : c, d = e.disabled, f = e.htmlSize, m = e.className, g = e.maxLength, b = e.suffix, p = e.showCount, v = e.type, h = v === void 0 ? "text" : v, y = e.classes, E = e.classNames, C = e.styles, O = wt(e, m1), x = br(e.defaultValue, {
    value: e.value
  }), S = Y(x, 2), R = S[0], _ = S[1], N = s.useState(!1), F = Y(N, 2), A = F[0], M = F[1], D = s.useRef(null), V = function(U) {
    D.current && Vf(D.current, U);
  };
  s.useImperativeHandle(t, function() {
    return {
      focus: V,
      blur: function() {
        var U;
        (U = D.current) === null || U === void 0 || U.blur();
      },
      setSelectionRange: function(U, ne, se) {
        var J;
        (J = D.current) === null || J === void 0 || J.setSelectionRange(U, ne, se);
      },
      select: function() {
        var U;
        (U = D.current) === null || U === void 0 || U.select();
      },
      input: D.current
    };
  }), s.useEffect(function() {
    M(function(G) {
      return G && d ? !1 : G;
    });
  }, [d]);
  var P = function(U) {
    e.value === void 0 && _(U.target.value), D.current && ga(D.current, U, r);
  }, I = function(U) {
    i && U.key === "Enter" && i(U), l == null || l(U);
  }, T = function(U) {
    M(!0), a == null || a(U);
  }, z = function(U) {
    M(!1), o == null || o(U);
  }, L = function(U) {
    _(""), V(), D.current && ga(D.current, U, r);
  }, H = function() {
    var U = Xr(e, [
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
    return /* @__PURE__ */ Re.createElement("input", Ue({
      autoComplete: n
    }, U, {
      onChange: P,
      onFocus: T,
      onBlur: z,
      onKeyDown: I,
      className: Oe(u, j({}, "".concat(u, "-disabled"), d), E == null ? void 0 : E.input),
      style: C == null ? void 0 : C.input,
      ref: D,
      size: f,
      type: h
    }));
  }, W = function() {
    var U = Number(g) > 0;
    if (b || p) {
      var ne = ys(R), se = De(ne).length, J = Je(p) === "object" ? p.formatter({
        value: ne,
        count: se,
        maxLength: g
      }) : "".concat(se).concat(U ? " / ".concat(g) : "");
      return /* @__PURE__ */ Re.createElement(Re.Fragment, null, !!p && /* @__PURE__ */ Re.createElement("span", {
        className: Oe("".concat(u, "-show-count-suffix"), j({}, "".concat(u, "-show-count-has-suffix"), !!b), E == null ? void 0 : E.count),
        style: k({}, C == null ? void 0 : C.count)
      }, J), b);
    }
    return null;
  };
  return /* @__PURE__ */ Re.createElement(rl, Ue({}, O, {
    prefixCls: u,
    className: m,
    inputElement: H(),
    handleReset: L,
    value: ys(R),
    focused: A,
    triggerFocus: V,
    suffix: W(),
    disabled: d,
    classes: y,
    classNames: E,
    styles: C
  }));
});
function p1(e, t) {
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
          var f = l[u - 1], m = o.indexOf(f, u - 1);
          m !== -1 && (d = m + 1);
        }
        e.setSelectionRange(d, d);
      } catch (g) {
        ot(!1, "Something warning of cursor restore. Please fire issue about this: ".concat(g.message));
      }
  }
  return [r, a];
}
var h1 = function() {
  var t = s.useState(!1), n = Y(t, 2), r = n[0], a = n[1];
  return xt(function() {
    a(Gs());
  }, []), r;
}, b1 = 200, y1 = 600;
function S1(e) {
  var t = e.prefixCls, n = e.upNode, r = e.downNode, a = e.upDisabled, o = e.downDisabled, i = e.onStep, l = s.useRef(), c = s.useRef([]), u = s.useRef();
  u.current = i;
  var d = function() {
    clearTimeout(l.current);
  }, f = function(E, C) {
    E.preventDefault(), d(), u.current(C);
    function O() {
      u.current(C), l.current = setTimeout(O, b1);
    }
    l.current = setTimeout(O, y1);
  };
  s.useEffect(function() {
    return function() {
      d(), c.current.forEach(function(y) {
        return Ct.cancel(y);
      });
    };
  }, []);
  var m = h1();
  if (m)
    return null;
  var g = "".concat(t, "-handler"), b = Oe(g, "".concat(g, "-up"), j({}, "".concat(g, "-up-disabled"), a)), p = Oe(g, "".concat(g, "-down"), j({}, "".concat(g, "-down-disabled"), o)), v = function() {
    return c.current.push(Ct(d));
  }, h = {
    unselectable: "on",
    role: "button",
    onMouseUp: v,
    onMouseLeave: v
  };
  return /* @__PURE__ */ s.createElement("div", {
    className: "".concat(g, "-wrap")
  }, /* @__PURE__ */ s.createElement("span", Ue({}, h, {
    onMouseDown: function(E) {
      f(E, !0);
    },
    "aria-label": "Increase Value",
    "aria-disabled": a,
    className: b
  }), n || /* @__PURE__ */ s.createElement("span", {
    unselectable: "on",
    className: "".concat(t, "-handler-up-inner")
  })), /* @__PURE__ */ s.createElement("span", Ue({}, h, {
    onMouseDown: function(E) {
      f(E, !1);
    },
    "aria-label": "Decrease Value",
    "aria-disabled": o,
    className: p
  }), r || /* @__PURE__ */ s.createElement("span", {
    unselectable: "on",
    className: "".concat(t, "-handler-down-inner")
  })));
}
function kc(e) {
  var t = typeof e == "number" ? ko(e) : gr(e).fullStr, n = t.includes(".");
  return n ? gr(t.replace(/(\d)\.(\d)/g, "$1$2.")).fullStr : e + "0";
}
const E1 = function() {
  var e = s.useRef(0), t = function() {
    Ct.cancel(e.current);
  };
  return s.useEffect(function() {
    return t;
  }, []), function(n) {
    t(), e.current = Ct(function() {
      n();
    });
  };
};
var C1 = ["prefixCls", "className", "style", "min", "max", "step", "defaultValue", "value", "disabled", "readOnly", "upHandler", "downHandler", "keyboard", "controls", "classNames", "stringMode", "parser", "formatter", "precision", "decimalSeparator", "onChange", "onInput", "onPressEnter", "onStep"], w1 = ["disabled", "style", "prefixCls", "value", "prefix", "suffix", "addonBefore", "addonAfter", "classes", "className", "classNames"], Wc = function(t, n) {
  return t || n.isEmpty() ? n.toString() : n.toNumber();
}, Uc = function(t) {
  var n = Nn(t);
  return n.isInvalidate() ? null : n;
}, x1 = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n, r = e.prefixCls, a = r === void 0 ? "rc-input-number" : r, o = e.className, i = e.style, l = e.min, c = e.max, u = e.step, d = u === void 0 ? 1 : u, f = e.defaultValue, m = e.value, g = e.disabled, b = e.readOnly, p = e.upHandler, v = e.downHandler, h = e.keyboard, y = e.controls, E = y === void 0 ? !0 : y, C = e.classNames, O = e.stringMode, x = e.parser, S = e.formatter, R = e.precision, _ = e.decimalSeparator, N = e.onChange, F = e.onInput, A = e.onPressEnter, M = e.onStep, D = wt(e, C1), V = "".concat(a, "-input"), P = s.useRef(null), I = s.useState(!1), T = Y(I, 2), z = T[0], L = T[1], H = s.useRef(!1), W = s.useRef(!1), G = s.useRef(!1), U = s.useState(function() {
    return Nn(m ?? f);
  }), ne = Y(U, 2), se = ne[0], J = ne[1];
  function X(ye) {
    m === void 0 && J(ye);
  }
  var ee = s.useCallback(function(ye, Se) {
    if (!Se)
      return R >= 0 ? R : Math.max(dr(ye), dr(d));
  }, [R, d]), oe = s.useCallback(function(ye) {
    var Se = String(ye);
    if (x)
      return x(Se);
    var Te = Se;
    return _ && (Te = Te.replace(_, ".")), Te.replace(/[^\w.-]+/g, "");
  }, [x, _]), Ce = s.useRef(""), be = s.useCallback(function(ye, Se) {
    if (S)
      return S(ye, {
        userTyping: Se,
        input: String(Ce.current)
      });
    var Te = typeof ye == "number" ? ko(ye) : ye;
    if (!Se) {
      var ie = ee(Te, Se);
      if (nl(Te) && (_ || ie >= 0)) {
        var we = _ || ".";
        Te = eo(Te, we, ie);
      }
    }
    return Te;
  }, [S, ee, _]), ue = s.useState(function() {
    var ye = f ?? m;
    return se.isInvalidate() && ["string", "number"].includes(Je(ye)) ? Number.isNaN(ye) ? "" : ye : be(se.toString(), !1);
  }), q = Y(ue, 2), $e = q[0], Ie = q[1];
  Ce.current = $e;
  function _e(ye, Se) {
    Ie(be(
      // Invalidate number is sometime passed by external control, we should let it go
      // Otherwise is controlled by internal interactive logic which check by userTyping
      // You can ref 'show limited value when input is not focused' test for more info.
      ye.isInvalidate() ? ye.toString(!1) : ye.toString(!Se),
      Se
    ));
  }
  var fe = s.useMemo(function() {
    return Uc(c);
  }, [c, R]), xe = s.useMemo(function() {
    return Uc(l);
  }, [l, R]), me = s.useMemo(function() {
    return !fe || !se || se.isInvalidate() ? !1 : fe.lessEquals(se);
  }, [fe, se]), pe = s.useMemo(function() {
    return !xe || !se || se.isInvalidate() ? !1 : se.lessEquals(xe);
  }, [xe, se]), je = p1(P.current, z), Ke = Y(je, 2), Le = Ke[0], he = Ke[1], ge = function(Se) {
    return fe && !Se.lessEquals(fe) ? fe : xe && !xe.lessEquals(Se) ? xe : null;
  }, Ve = function(Se) {
    return !ge(Se);
  }, tt = function(Se, Te) {
    var ie = Se, we = Ve(ie) || ie.isEmpty();
    if (!ie.isEmpty() && !Te && (ie = ge(ie) || ie, we = !0), !b && !g && we) {
      var Xe = ie.toString(), Qe = ee(Xe, Te);
      return Qe >= 0 && (ie = Nn(eo(Xe, ".", Qe)), Ve(ie) || (ie = Nn(eo(Xe, ".", Qe, !0)))), ie.equals(se) || (X(ie), N == null || N(ie.isEmpty() ? null : Wc(O, ie)), m === void 0 && _e(ie, Te)), ie;
    }
    return se;
  }, qe = E1(), st = function ye(Se) {
    if (Le(), Ce.current = Se, Ie(Se), !W.current) {
      var Te = oe(Se), ie = Nn(Te);
      ie.isNaN() || tt(ie, !0);
    }
    F == null || F(Se), qe(function() {
      var we = Se;
      x || (we = Se.replace(/。/g, ".")), we !== Se && ye(we);
    });
  }, ke = function() {
    W.current = !0;
  }, Ft = function() {
    W.current = !1, st(P.current.value);
  }, pt = function(Se) {
    st(Se.target.value);
  }, dt = function(Se) {
    var Te;
    if (!(Se && me || !Se && pe)) {
      H.current = !1;
      var ie = Nn(G.current ? kc(d) : d);
      Se || (ie = ie.negate());
      var we = (se || Nn(0)).add(ie.toString()), Xe = tt(we, !1);
      M == null || M(Wc(O, Xe), {
        offset: G.current ? kc(d) : d,
        type: Se ? "up" : "down"
      }), (Te = P.current) === null || Te === void 0 || Te.focus();
    }
  }, nt = function(Se) {
    var Te = Nn(oe($e)), ie = Te;
    Te.isNaN() ? ie = tt(se, Se) : ie = tt(Te, Se), m !== void 0 ? _e(se, !1) : ie.isNaN() || _e(ie, !1);
  }, yt = function() {
    H.current = !0;
  }, ut = function(Se) {
    var Te = Se.key, ie = Se.shiftKey;
    H.current = !0, G.current = ie, Te === "Enter" && (W.current || (H.current = !1), nt(!1), A == null || A(Se)), h !== !1 && !W.current && ["Up", "ArrowUp", "Down", "ArrowDown"].includes(Te) && (dt(Te === "Up" || Te === "ArrowUp"), Se.preventDefault());
  }, rt = function() {
    H.current = !1, G.current = !1;
  }, Ye = function() {
    nt(!1), L(!1), H.current = !1;
  };
  return da(function() {
    se.isInvalidate() || _e(se, !1);
  }, [R]), da(function() {
    var ye = Nn(m);
    J(ye);
    var Se = Nn(oe($e));
    (!ye.equals(Se) || !H.current || S) && _e(ye, H.current);
  }, [m]), da(function() {
    S && he();
  }, [$e]), /* @__PURE__ */ s.createElement("div", {
    className: Oe(a, C == null ? void 0 : C.input, o, (n = {}, j(n, "".concat(a, "-focused"), z), j(n, "".concat(a, "-disabled"), g), j(n, "".concat(a, "-readonly"), b), j(n, "".concat(a, "-not-a-number"), se.isNaN()), j(n, "".concat(a, "-out-of-range"), !se.isInvalidate() && !Ve(se)), n)),
    style: i,
    onFocus: function() {
      L(!0);
    },
    onBlur: Ye,
    onKeyDown: ut,
    onKeyUp: rt,
    onCompositionStart: ke,
    onCompositionEnd: Ft,
    onBeforeInput: yt
  }, E && /* @__PURE__ */ s.createElement(S1, {
    prefixCls: a,
    upNode: p,
    downNode: v,
    upDisabled: me,
    downDisabled: pe,
    onStep: dt
  }), /* @__PURE__ */ s.createElement("div", {
    className: "".concat(V, "-wrap")
  }, /* @__PURE__ */ s.createElement("input", Ue({
    autoComplete: "off",
    role: "spinbutton",
    "aria-valuemin": l,
    "aria-valuemax": c,
    "aria-valuenow": se.isInvalidate() ? null : se.toString(),
    step: d
  }, D, {
    ref: jn(P, t),
    className: V,
    value: $e,
    onChange: pt,
    disabled: g,
    readOnly: b
  }))));
}), zf = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e.disabled, r = e.style, a = e.prefixCls, o = e.value, i = e.prefix, l = e.suffix, c = e.addonBefore, u = e.addonAfter, d = e.classes, f = e.className, m = e.classNames, g = wt(e, w1), b = s.useRef(null), p = function(h) {
    b.current && Vf(b.current, h);
  };
  return /* @__PURE__ */ s.createElement(rl, {
    inputElement: /* @__PURE__ */ s.createElement(x1, Ue({
      prefixCls: a,
      disabled: n,
      classNames: m,
      ref: jn(b, t)
    }, g)),
    className: f,
    triggerFocus: p,
    prefixCls: a,
    value: o,
    disabled: n,
    style: r,
    prefix: i,
    suffix: l,
    addonAfter: u,
    addonBefore: c,
    classes: d,
    classNames: m,
    components: {
      affixWrapper: "div",
      groupWrapper: "div",
      wrapper: "div",
      groupAddon: "div"
    }
  });
});
zf.displayName = "InputNumber";
const Gc = (e, t) => {
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
}, O1 = (e) => {
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
    motionDurationMid: m,
    handleHoverColor: g,
    paddingInline: b,
    paddingBlock: p,
    handleBg: v,
    handleActiveBg: h,
    colorTextDisabled: y,
    borderRadiusSM: E,
    borderRadiusLG: C,
    controlWidth: O,
    handleVisible: x,
    handleBorderColor: S
  } = e;
  return [
    {
      [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, nr(e)), Bo(e)), Ho(e, t)), {
        display: "inline-block",
        width: O,
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
          borderRadius: C,
          [`input${t}-input`]: {
            height: l - 2 * n
          }
        },
        "&-sm": {
          padding: 0,
          borderRadius: E,
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
        "&-group": Object.assign(Object.assign(Object.assign({}, nr(e)), Mf(e)), {
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
                borderRadius: C,
                fontSize: e.fontSizeLG
              }
            },
            "&-sm": {
              [`${t}-group-addon`]: {
                borderRadius: E
              }
            },
            [`${t}-wrapper-disabled > ${t}-group-addon`]: Object.assign({}, Zs(e))
          }
        }),
        [`&-disabled ${t}-input`]: {
          cursor: "not-allowed"
        },
        [t]: {
          "&-input": Object.assign(Object.assign(Object.assign(Object.assign({}, nr(e)), {
            width: "100%",
            padding: `${p}px ${b}px`,
            textAlign: "start",
            backgroundColor: "transparent",
            border: 0,
            borderRadius: o,
            outline: 0,
            transition: `all ${m} linear`,
            appearance: "textfield",
            fontSize: "inherit"
          }), Nf(e.colorTextPlaceholder)), {
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
          background: v,
          borderStartStartRadius: 0,
          borderStartEndRadius: o,
          borderEndEndRadius: o,
          borderEndStartRadius: 0,
          opacity: x === !0 ? 1 : 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          transition: `opacity ${m} linear ${m}`,
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
          borderInlineStart: `${n}px ${r} ${S}`,
          transition: `all ${m} linear`,
          "&:active": {
            background: h
          },
          // Hover
          "&:hover": {
            height: "60%",
            [`
              ${t}-handler-up-inner,
              ${t}-handler-down-inner
            `]: {
              color: g
            }
          },
          "&-up-inner, &-down-inner": Object.assign(Object.assign({}, Po()), {
            color: f,
            transition: `all ${m} linear`,
            userSelect: "none"
          })
        },
        [`${t}-handler-up`]: {
          borderStartEndRadius: o
        },
        [`${t}-handler-down`]: {
          borderBlockStart: `${n}px ${r} ${S}`,
          borderEndEndRadius: o
        }
      }, Gc(e, "lg")), Gc(e, "sm")), {
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
          color: y
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
}, R1 = (e) => {
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
    [`${t}-affix-wrapper`]: Object.assign(Object.assign(Object.assign({}, Bo(e)), Ho(e, `${t}-affix-wrapper`)), {
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
}, $1 = Ln("InputNumber", (e) => {
  const t = $t(e, Af(e));
  return [
    O1(t),
    R1(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Do(t)
  ];
}, (e) => Object.assign(Object.assign({}, Ff(e)), {
  controlWidth: 90,
  handleWidth: e.controlHeightSM - e.lineWidth * 2,
  handleFontSize: e.fontSize / 2,
  handleVisible: "auto",
  handleActiveBg: e.colorFillAlter,
  handleBg: e.colorBgContainer,
  handleHoverColor: e.colorPrimary,
  handleBorderColor: e.colorBorder
}));
var I1 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Hf = /* @__PURE__ */ s.forwardRef((e, t) => {
  const {
    getPrefixCls: n,
    direction: r
  } = s.useContext(Pt), a = s.useRef(null);
  s.useImperativeHandle(t, () => a.current);
  const {
    className: o,
    rootClassName: i,
    size: l,
    disabled: c,
    prefixCls: u,
    addonBefore: d,
    addonAfter: f,
    prefix: m,
    bordered: g = !0,
    readOnly: b,
    status: p,
    controls: v
  } = e, h = I1(e, ["className", "rootClassName", "size", "disabled", "prefixCls", "addonBefore", "addonAfter", "prefix", "bordered", "readOnly", "status", "controls"]), y = n("input-number", u), [E, C] = $1(y), {
    compactSize: O,
    compactItemClassnames: x
  } = Ra(y, r);
  let S = /* @__PURE__ */ s.createElement(d1, {
    className: `${y}-handler-up-inner`
  }), R = /* @__PURE__ */ s.createElement(xf, {
    className: `${y}-handler-down-inner`
  });
  const _ = typeof v == "boolean" ? v : void 0;
  typeof v == "object" && (S = typeof v.upIcon > "u" ? S : /* @__PURE__ */ s.createElement("span", {
    className: `${y}-handler-up-inner`
  }, v.upIcon), R = typeof v.downIcon > "u" ? R : /* @__PURE__ */ s.createElement("span", {
    className: `${y}-handler-down-inner`
  }, v.downIcon));
  const {
    hasFeedback: N,
    status: F,
    isFormItemInput: A,
    feedbackIcon: M
  } = s.useContext(Kn), D = Vo(F, p), V = Cr((H) => {
    var W;
    return (W = l ?? O) !== null && W !== void 0 ? W : H;
  }), P = s.useContext(Jr), I = c ?? P, T = Oe({
    [`${y}-lg`]: V === "large",
    [`${y}-sm`]: V === "small",
    [`${y}-rtl`]: r === "rtl",
    [`${y}-borderless`]: !g,
    [`${y}-in-form-item`]: A
  }, Gn(y, D), C), z = `${y}-group`, L = /* @__PURE__ */ s.createElement(zf, Object.assign({
    ref: a,
    disabled: I,
    className: Oe(o, i, x),
    upHandler: S,
    downHandler: R,
    prefixCls: y,
    readOnly: b,
    controls: _,
    prefix: m,
    suffix: N && M,
    addonAfter: f && /* @__PURE__ */ s.createElement(vo, null, /* @__PURE__ */ s.createElement(po, {
      override: !0,
      status: !0
    }, f)),
    addonBefore: d && /* @__PURE__ */ s.createElement(vo, null, /* @__PURE__ */ s.createElement(po, {
      override: !0,
      status: !0
    }, d)),
    classNames: {
      input: T
    },
    classes: {
      affixWrapper: Oe(Gn(`${y}-affix-wrapper`, D, N), {
        [`${y}-affix-wrapper-sm`]: V === "small",
        [`${y}-affix-wrapper-lg`]: V === "large",
        [`${y}-affix-wrapper-rtl`]: r === "rtl",
        [`${y}-affix-wrapper-borderless`]: !g
      }, C),
      wrapper: Oe({
        [`${z}-rtl`]: r === "rtl",
        [`${y}-wrapper-disabled`]: I
      }, C),
      group: Oe({
        [`${y}-group-wrapper-sm`]: V === "small",
        [`${y}-group-wrapper-lg`]: V === "large",
        [`${y}-group-wrapper-rtl`]: r === "rtl"
      }, Gn(`${y}-group-wrapper`, D, N), C)
    }
  }, h));
  return E(L);
}), al = Hf, N1 = (e) => /* @__PURE__ */ s.createElement(rr, {
  theme: {
    components: {
      InputNumber: {
        handleVisible: !0
      }
    }
  }
}, /* @__PURE__ */ s.createElement(Hf, Object.assign({}, e)));
process.env.NODE_ENV !== "production" && (al.displayName = "InputNumber");
al._InternalPanelDoNotUseOrYouWillBeFired = N1;
const _1 = al, P1 = (e) => {
  const {
    getPrefixCls: t,
    direction: n
  } = s.useContext(Pt), {
    prefixCls: r,
    className: a
  } = e, o = t("input-group", r), i = t("input"), [l, c] = el(i), u = Oe(o, {
    [`${o}-lg`]: e.size === "large",
    [`${o}-sm`]: e.size === "small",
    [`${o}-compact`]: e.compact,
    [`${o}-rtl`]: n === "rtl"
  }, c, a), d = s.useContext(Kn), f = s.useMemo(() => Object.assign(Object.assign({}, d), {
    isFormItemInput: !1
  }), [d]);
  return process.env.NODE_ENV !== "production" && Xn("Input.Group").deprecated(!1, "Input.Group", "Space.Compact"), l(/* @__PURE__ */ s.createElement("span", {
    className: u,
    style: e.style,
    onMouseEnter: e.onMouseEnter,
    onMouseLeave: e.onMouseLeave,
    onFocus: e.onFocus,
    onBlur: e.onBlur
  }, /* @__PURE__ */ s.createElement(Kn.Provider, {
    value: f
  }, e.children)));
}, T1 = P1;
function Bf(e, t) {
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
function M1(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
var A1 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function F1(e, t) {
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
const D1 = /* @__PURE__ */ s.forwardRef((e, t) => {
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
    addonAfter: m,
    addonBefore: g,
    className: b,
    style: p,
    styles: v,
    rootClassName: h,
    onChange: y,
    classNames: E
  } = e, C = A1(e, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames"]), {
    getPrefixCls: O,
    direction: x,
    input: S
  } = Re.useContext(Pt), R = O("input", r), _ = s.useRef(null), [N, F] = el(R), {
    compactSize: A,
    compactItemClassnames: M
  } = Ra(R, x), D = Cr((ee) => {
    var oe;
    return (oe = i ?? A) !== null && oe !== void 0 ? oe : ee;
  }), V = Re.useContext(Jr), P = l ?? V, {
    status: I,
    hasFeedback: T,
    feedbackIcon: z
  } = s.useContext(Kn), L = Vo(I, o), H = M1(e) || !!T, W = s.useRef(H);
  if (process.env.NODE_ENV !== "production") {
    const ee = Xn("Input");
    s.useEffect(() => {
      var oe;
      H && !W.current && process.env.NODE_ENV !== "production" && ee(document.activeElement === ((oe = _.current) === null || oe === void 0 ? void 0 : oe.input), "usage", "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ"), W.current = H;
    }, [H]);
  }
  const G = Bf(_, !0), U = (ee) => {
    G(), c == null || c(ee);
  }, ne = (ee) => {
    G(), u == null || u(ee);
  }, se = (ee) => {
    G(), y == null || y(ee);
  }, J = (T || d) && /* @__PURE__ */ Re.createElement(Re.Fragment, null, d, T && z);
  let X;
  return typeof f == "object" && (f != null && f.clearIcon) ? X = f : f && (X = {
    clearIcon: /* @__PURE__ */ Re.createElement(Hs, null)
  }), N(/* @__PURE__ */ Re.createElement(g1, Object.assign({
    ref: jn(t, _),
    prefixCls: R,
    autoComplete: S == null ? void 0 : S.autoComplete
  }, C, {
    disabled: P,
    onBlur: U,
    onFocus: ne,
    style: Object.assign(Object.assign({}, S == null ? void 0 : S.style), p),
    styles: Object.assign(Object.assign({}, S == null ? void 0 : S.styles), v),
    suffix: J,
    allowClear: X,
    className: Oe(b, h, M, S == null ? void 0 : S.className),
    onChange: se,
    addonAfter: m && /* @__PURE__ */ Re.createElement(vo, null, /* @__PURE__ */ Re.createElement(po, {
      override: !0,
      status: !0
    }, m)),
    addonBefore: g && /* @__PURE__ */ Re.createElement(vo, null, /* @__PURE__ */ Re.createElement(po, {
      override: !0,
      status: !0
    }, g)),
    classNames: Object.assign(Object.assign(Object.assign({}, E), S == null ? void 0 : S.classNames), {
      input: Oe({
        [`${R}-sm`]: D === "small",
        [`${R}-lg`]: D === "large",
        [`${R}-rtl`]: x === "rtl",
        [`${R}-borderless`]: !a
      }, !H && Gn(R, L), E == null ? void 0 : E.input, (n = S == null ? void 0 : S.classNames) === null || n === void 0 ? void 0 : n.input, F)
    }),
    classes: {
      affixWrapper: Oe({
        [`${R}-affix-wrapper-sm`]: D === "small",
        [`${R}-affix-wrapper-lg`]: D === "large",
        [`${R}-affix-wrapper-rtl`]: x === "rtl",
        [`${R}-affix-wrapper-borderless`]: !a
      }, Gn(`${R}-affix-wrapper`, L, T), F),
      wrapper: Oe({
        [`${R}-group-rtl`]: x === "rtl"
      }, F),
      group: Oe({
        [`${R}-group-wrapper-sm`]: D === "small",
        [`${R}-group-wrapper-lg`]: D === "large",
        [`${R}-group-wrapper-rtl`]: x === "rtl",
        [`${R}-group-wrapper-disabled`]: P
      }, Gn(`${R}-group-wrapper`, L, T), F)
    }
  })));
}), ol = D1;
var j1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { tag: "path", attrs: { d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, name: "eye-invisible", theme: "outlined" };
const L1 = j1;
var kf = function(t, n) {
  return /* @__PURE__ */ s.createElement(xn, Ue({}, t, {
    ref: n,
    icon: L1
  }));
};
process.env.NODE_ENV !== "production" && (kf.displayName = "EyeInvisibleOutlined");
const V1 = /* @__PURE__ */ s.forwardRef(kf);
var z1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, name: "eye", theme: "outlined" };
const H1 = z1;
var Wf = function(t, n) {
  return /* @__PURE__ */ s.createElement(xn, Ue({}, t, {
    ref: n,
    icon: H1
  }));
};
process.env.NODE_ENV !== "production" && (Wf.displayName = "EyeOutlined");
const B1 = /* @__PURE__ */ s.forwardRef(Wf);
var k1 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const W1 = (e) => e ? /* @__PURE__ */ s.createElement(B1, null) : /* @__PURE__ */ s.createElement(V1, null), U1 = {
  click: "onClick",
  hover: "onMouseOver"
}, Uf = /* @__PURE__ */ s.forwardRef((e, t) => {
  const {
    visibilityToggle: n = !0
  } = e, r = typeof n == "object" && n.visible !== void 0, [a, o] = s.useState(() => r ? n.visible : !1), i = s.useRef(null);
  s.useEffect(() => {
    r && o(n.visible);
  }, [r, n]);
  const l = Bf(i), c = () => {
    const {
      disabled: O
    } = e;
    O || (a && l(), o((x) => {
      var S;
      const R = !x;
      return typeof n == "object" && ((S = n.onVisibleChange) === null || S === void 0 || S.call(n, R)), R;
    }));
  }, u = (O) => {
    const {
      action: x = "click",
      iconRender: S = W1
    } = e, R = U1[x] || "", _ = S(a), N = {
      [R]: c,
      className: `${O}-icon`,
      key: "passwordIcon",
      onMouseDown: (F) => {
        F.preventDefault();
      },
      onMouseUp: (F) => {
        F.preventDefault();
      }
    };
    return /* @__PURE__ */ s.cloneElement(/* @__PURE__ */ s.isValidElement(_) ? _ : /* @__PURE__ */ s.createElement("span", null, _), N);
  }, {
    className: d,
    prefixCls: f,
    inputPrefixCls: m,
    size: g
  } = e, b = k1(e, ["className", "prefixCls", "inputPrefixCls", "size"]), {
    getPrefixCls: p
  } = s.useContext(Pt), v = p("input", m), h = p("input-password", f), y = n && u(h), E = Oe(h, d, {
    [`${h}-${g}`]: !!g
  }), C = Object.assign(Object.assign({}, Xr(b, ["suffix", "iconRender", "visibilityToggle"])), {
    type: a ? "text" : "password",
    className: E,
    prefixCls: v,
    suffix: y
  });
  return g && (C.size = g), /* @__PURE__ */ s.createElement(ol, Object.assign({
    ref: jn(t, i)
  }, C));
});
process.env.NODE_ENV !== "production" && (Uf.displayName = "Password");
const G1 = Uf;
var q1 = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Gf = /* @__PURE__ */ s.forwardRef((e, t) => {
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
    onChange: m,
    onCompositionStart: g,
    onCompositionEnd: b
  } = e, p = q1(e, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange", "onCompositionStart", "onCompositionEnd"]), {
    getPrefixCls: v,
    direction: h
  } = s.useContext(Pt), y = s.useRef(!1), E = v("input-search", n), C = v("input", r), {
    compactSize: O
  } = Ra(E, h), x = Cr((L) => {
    var H;
    return (H = o ?? O) !== null && H !== void 0 ? H : L;
  }), S = s.useRef(null), R = (L) => {
    L && L.target && L.type === "click" && f && f(L.target.value, L, {
      source: "clear"
    }), m && m(L);
  }, _ = (L) => {
    var H;
    document.activeElement === ((H = S.current) === null || H === void 0 ? void 0 : H.input) && L.preventDefault();
  }, N = (L) => {
    var H, W;
    f && f((W = (H = S.current) === null || H === void 0 ? void 0 : H.input) === null || W === void 0 ? void 0 : W.value, L, {
      source: "input"
    });
  }, F = (L) => {
    y.current || u || N(L);
  }, A = typeof l == "boolean" ? /* @__PURE__ */ s.createElement(Rf, null) : null, M = `${E}-button`;
  let D;
  const V = l || {}, P = V.type && V.type.__ANT_BUTTON === !0;
  P || V.type === "button" ? D = uo(V, Object.assign({
    onMouseDown: _,
    onClick: (L) => {
      var H, W;
      (W = (H = V == null ? void 0 : V.props) === null || H === void 0 ? void 0 : H.onClick) === null || W === void 0 || W.call(H, L), N(L);
    },
    key: "enterButton"
  }, P ? {
    className: M,
    size: x
  } : {})) : D = /* @__PURE__ */ s.createElement(es, {
    className: M,
    type: l ? "primary" : void 0,
    size: x,
    disabled: d,
    key: "enterButton",
    onMouseDown: _,
    onClick: N,
    loading: u,
    icon: A
  }, l), c && (D = [D, uo(c, {
    key: "addonAfter"
  })]);
  const I = Oe(E, {
    [`${E}-rtl`]: h === "rtl",
    [`${E}-${x}`]: !!x,
    [`${E}-with-button`]: !!l
  }, a), T = (L) => {
    y.current = !0, g == null || g(L);
  }, z = (L) => {
    y.current = !1, b == null || b(L);
  };
  return /* @__PURE__ */ s.createElement(ol, Object.assign({
    ref: jn(S, t),
    onPressEnter: F
  }, p, {
    size: x,
    onCompositionStart: T,
    onCompositionEnd: z,
    prefixCls: C,
    addonAfter: D,
    suffix: i,
    onChange: R,
    className: I,
    disabled: d
  }));
});
process.env.NODE_ENV !== "production" && (Gf.displayName = "Search");
const K1 = Gf;
var Y1 = `
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
`, X1 = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"], bi = {}, Cn;
function Q1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (t && bi[n])
    return bi[n];
  var r = window.getComputedStyle(e), a = r.getPropertyValue("box-sizing") || r.getPropertyValue("-moz-box-sizing") || r.getPropertyValue("-webkit-box-sizing"), o = parseFloat(r.getPropertyValue("padding-bottom")) + parseFloat(r.getPropertyValue("padding-top")), i = parseFloat(r.getPropertyValue("border-bottom-width")) + parseFloat(r.getPropertyValue("border-top-width")), l = X1.map(function(u) {
    return "".concat(u, ":").concat(r.getPropertyValue(u));
  }).join(";"), c = {
    sizingStyle: l,
    paddingSize: o,
    borderSize: i,
    boxSizing: a
  };
  return t && n && (bi[n] = c), c;
}
function J1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  Cn || (Cn = document.createElement("textarea"), Cn.setAttribute("tab-index", "-1"), Cn.setAttribute("aria-hidden", "true"), document.body.appendChild(Cn)), e.getAttribute("wrap") ? Cn.setAttribute("wrap", e.getAttribute("wrap")) : Cn.removeAttribute("wrap");
  var a = Q1(e, t), o = a.paddingSize, i = a.borderSize, l = a.boxSizing, c = a.sizingStyle;
  Cn.setAttribute("style", "".concat(c, ";").concat(Y1)), Cn.value = e.value || e.placeholder || "";
  var u = void 0, d = void 0, f, m = Cn.scrollHeight;
  if (l === "border-box" ? m += i : l === "content-box" && (m -= o), n !== null || r !== null) {
    Cn.value = " ";
    var g = Cn.scrollHeight - o;
    n !== null && (u = g * n, l === "border-box" && (u = u + o + i), m = Math.max(u, m)), r !== null && (d = g * r, l === "border-box" && (d = d + o + i), f = m > d ? "" : "hidden", m = Math.min(d, m));
  }
  var b = {
    height: m,
    overflowY: f,
    resize: "none"
  };
  return u && (b.minHeight = u), d && (b.maxHeight = d), b;
}
var Z1 = ["prefixCls", "onPressEnter", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"], yi = 0, Si = 1, Ei = 2, eE = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var n = e, r = n.prefixCls;
  n.onPressEnter;
  var a = n.defaultValue, o = n.value, i = n.autoSize, l = n.onResize, c = n.className, u = n.style, d = n.disabled, f = n.onChange, m = n.onInternalAutoSize, g = wt(n, Z1), b = br(a, {
    value: o,
    postState: function(ne) {
      return ne ?? "";
    }
  }), p = Y(b, 2), v = p[0], h = p[1], y = function(ne) {
    h(ne.target.value), f == null || f(ne);
  }, E = s.useRef();
  s.useImperativeHandle(t, function() {
    return {
      textArea: E.current
    };
  });
  var C = s.useMemo(function() {
    return i && Je(i) === "object" ? [i.minRows, i.maxRows] : [];
  }, [i]), O = Y(C, 2), x = O[0], S = O[1], R = !!i, _ = function() {
    try {
      if (document.activeElement === E.current) {
        var ne = E.current, se = ne.selectionStart, J = ne.selectionEnd, X = ne.scrollTop;
        E.current.setSelectionRange(se, J), E.current.scrollTop = X;
      }
    } catch {
    }
  }, N = s.useState(Ei), F = Y(N, 2), A = F[0], M = F[1], D = s.useState(), V = Y(D, 2), P = V[0], I = V[1], T = function() {
    M(yi), process.env.NODE_ENV === "test" && (m == null || m());
  };
  xt(function() {
    R && T();
  }, [o, x, S, R]), xt(function() {
    if (A === yi)
      M(Si);
    else if (A === Si) {
      var U = J1(E.current, !1, x, S);
      M(Ei), I(U);
    } else
      _();
  }, [A]);
  var z = s.useRef(), L = function() {
    Ct.cancel(z.current);
  }, H = function(ne) {
    A === Ei && (l == null || l(ne), i && (L(), z.current = Ct(function() {
      T();
    })));
  };
  s.useEffect(function() {
    return L;
  }, []);
  var W = R ? P : null, G = k(k({}, u), W);
  return (A === yi || A === Si) && (G.overflowY = "hidden", G.overflowX = "hidden"), /* @__PURE__ */ s.createElement(Yn, {
    onResize: H,
    disabled: !(i || l)
  }, /* @__PURE__ */ s.createElement("textarea", Ue({}, g, {
    ref: E,
    style: G,
    className: Oe(r, c, j({}, "".concat(r, "-disabled"), d)),
    disabled: d,
    value: v,
    onChange: y
  })));
}), tE = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "classes", "showCount", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize"];
function qf(e, t) {
  return De(e || "").slice(0, t).join("");
}
function qc(e, t, n, r) {
  var a = n;
  return e ? a = qf(n, r) : De(t || "").length < n.length && De(n || "").length > r && (a = t), a;
}
var nE = /* @__PURE__ */ Re.forwardRef(function(e, t) {
  var n, r = e.defaultValue, a = e.value, o = e.onFocus, i = e.onBlur, l = e.onChange, c = e.allowClear, u = e.maxLength, d = e.onCompositionStart, f = e.onCompositionEnd, m = e.suffix, g = e.prefixCls, b = g === void 0 ? "rc-textarea" : g, p = e.classes, v = e.showCount, h = e.className, y = e.style, E = e.disabled, C = e.hidden, O = e.classNames, x = e.styles, S = e.onResize, R = wt(e, tE), _ = br(r, {
    value: a,
    defaultValue: r
  }), N = Y(_, 2), F = N[0], A = N[1], M = s.useRef(null), D = Re.useState(!1), V = Y(D, 2), P = V[0], I = V[1], T = Re.useState(!1), z = Y(T, 2), L = z[0], H = z[1], W = Re.useRef(), G = Re.useRef(0), U = Re.useState(null), ne = Y(U, 2), se = ne[0], J = ne[1], X = function() {
    var he;
    (he = M.current) === null || he === void 0 || he.textArea.focus();
  };
  s.useImperativeHandle(t, function() {
    return {
      resizableTextArea: M.current,
      focus: X,
      blur: function() {
        var he;
        (he = M.current) === null || he === void 0 || he.textArea.blur();
      }
    };
  }), s.useEffect(function() {
    I(function(Le) {
      return !E && Le;
    });
  }, [E]);
  var ee = Number(u) > 0, oe = function(he) {
    H(!0), W.current = F, G.current = he.currentTarget.selectionStart, d == null || d(he);
  }, Ce = function(he) {
    H(!1);
    var ge = he.currentTarget.value;
    if (ee) {
      var Ve, tt = G.current >= u + 1 || G.current === ((Ve = W.current) === null || Ve === void 0 ? void 0 : Ve.length);
      ge = qc(tt, W.current, ge, u);
    }
    ge !== F && (A(ge), ga(he.currentTarget, he, l, ge)), f == null || f(he);
  }, be = function(he) {
    var ge = he.target.value;
    if (!L && ee) {
      var Ve = he.target.selectionStart >= u + 1 || he.target.selectionStart === ge.length || !he.target.selectionStart;
      ge = qc(Ve, F, ge, u);
    }
    A(ge), ga(he.currentTarget, he, l, ge);
  }, ue = function(he) {
    var ge = R.onPressEnter, Ve = R.onKeyDown;
    he.key === "Enter" && ge && ge(he), Ve == null || Ve(he);
  }, q = function(he) {
    I(!0), o == null || o(he);
  }, $e = function(he) {
    I(!1), i == null || i(he);
  }, Ie = function(he) {
    var ge;
    A(""), X(), ga((ge = M.current) === null || ge === void 0 ? void 0 : ge.textArea, he, l);
  }, _e = ys(F);
  !L && ee && a == null && (_e = qf(_e, u));
  var fe = m, xe;
  if (v) {
    var me = De(_e).length;
    Je(v) === "object" ? xe = v.formatter({
      value: _e,
      count: me,
      maxLength: u
    }) : xe = "".concat(me).concat(ee ? " / ".concat(u) : ""), fe = /* @__PURE__ */ Re.createElement(Re.Fragment, null, fe, /* @__PURE__ */ Re.createElement("span", {
      className: Oe("".concat(b, "-data-count"), O == null ? void 0 : O.count),
      style: x == null ? void 0 : x.count
    }, xe));
  }
  var pe = function(he) {
    var ge;
    S == null || S(he), (ge = M.current) !== null && ge !== void 0 && ge.textArea.style.height && J(!0);
  }, je = !R.autoSize && !v && !c, Ke = /* @__PURE__ */ Re.createElement(rl, {
    value: _e,
    allowClear: c,
    handleReset: Ie,
    suffix: fe,
    prefixCls: b,
    classes: {
      affixWrapper: Oe(p == null ? void 0 : p.affixWrapper, (n = {}, j(n, "".concat(b, "-show-count"), v), j(n, "".concat(b, "-textarea-allow-clear"), c), n))
    },
    disabled: E,
    focused: P,
    className: h,
    style: k(k({}, y), se && !je ? {
      height: "auto"
    } : {}),
    dataAttrs: {
      affixWrapper: {
        "data-count": typeof xe == "string" ? xe : void 0
      }
    },
    hidden: C,
    inputElement: /* @__PURE__ */ Re.createElement(eE, Ue({}, R, {
      onKeyDown: ue,
      onChange: be,
      onFocus: q,
      onBlur: $e,
      onCompositionStart: oe,
      onCompositionEnd: Ce,
      className: O == null ? void 0 : O.textarea,
      style: k(k({}, x == null ? void 0 : x.textarea), {}, {
        resize: y == null ? void 0 : y.resize
      }),
      disabled: E,
      prefixCls: b,
      onResize: pe,
      ref: M
    }))
  });
  return Ke;
}), rE = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const aE = /* @__PURE__ */ s.forwardRef((e, t) => {
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
  } = e, m = rE(e, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "showCount", "classNames", "rootClassName", "className"]), {
    getPrefixCls: g,
    direction: b
  } = s.useContext(Pt), p = Cr(a), v = s.useContext(Jr), h = o ?? v, {
    status: y,
    hasFeedback: E,
    feedbackIcon: C
  } = s.useContext(Kn), O = Vo(y, i), x = s.useRef(null);
  s.useImperativeHandle(t, () => {
    var F;
    return {
      resizableTextArea: (F = x.current) === null || F === void 0 ? void 0 : F.resizableTextArea,
      focus: (A) => {
        var M, D;
        F1((D = (M = x.current) === null || M === void 0 ? void 0 : M.resizableTextArea) === null || D === void 0 ? void 0 : D.textArea, A);
      },
      blur: () => {
        var A;
        return (A = x.current) === null || A === void 0 ? void 0 : A.blur();
      }
    };
  });
  const S = g("input", n);
  let R;
  typeof l == "object" && (l != null && l.clearIcon) ? R = l : l && (R = {
    clearIcon: /* @__PURE__ */ s.createElement(Hs, null)
  });
  const [_, N] = el(S);
  return _(/* @__PURE__ */ s.createElement(nE, Object.assign({}, m, {
    disabled: h,
    allowClear: R,
    className: Oe(f, d),
    classes: {
      affixWrapper: Oe(`${S}-textarea-affix-wrapper`, {
        [`${S}-affix-wrapper-rtl`]: b === "rtl",
        [`${S}-affix-wrapper-borderless`]: !r,
        [`${S}-affix-wrapper-sm`]: p === "small",
        [`${S}-affix-wrapper-lg`]: p === "large",
        [`${S}-textarea-show-count`]: c
      }, Gn(`${S}-affix-wrapper`, O), N)
    },
    classNames: Object.assign(Object.assign({}, u), {
      textarea: Oe({
        [`${S}-borderless`]: !r,
        [`${S}-sm`]: p === "small",
        [`${S}-lg`]: p === "large"
      }, Gn(S, O), N, u == null ? void 0 : u.textarea)
    }),
    prefixCls: S,
    suffix: E && /* @__PURE__ */ s.createElement("span", {
      className: `${S}-textarea-suffix`
    }, C),
    showCount: c,
    ref: x
  })));
}), oE = aE, Zr = ol;
process.env.NODE_ENV !== "production" && (Zr.displayName = "Input");
Zr.Group = T1;
Zr.Search = K1;
Zr.TextArea = oE;
Zr.Password = G1;
const iE = Zr;
function Kc(e) {
  return ["small", "middle", "large"].includes(e);
}
function Yc(e) {
  return e ? typeof e == "number" && !Number.isNaN(e) : !1;
}
const Kf = /* @__PURE__ */ Re.createContext({
  latestIndex: 0
}), sE = Kf.Provider, lE = (e) => {
  let {
    className: t,
    index: n,
    children: r,
    split: a,
    style: o
  } = e;
  const {
    latestIndex: i
  } = s.useContext(Kf);
  return r == null ? null : /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement("div", {
    className: t,
    style: o
  }, r), n < i && a && /* @__PURE__ */ s.createElement("span", {
    className: `${t}-split`
  }, a));
}, cE = lE;
var uE = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Yf = /* @__PURE__ */ s.forwardRef((e, t) => {
  var n, r;
  const {
    getPrefixCls: a,
    space: o,
    direction: i
  } = s.useContext(Pt), {
    size: l = (o == null ? void 0 : o.size) || "small",
    align: c,
    className: u,
    rootClassName: d,
    children: f,
    direction: m = "horizontal",
    prefixCls: g,
    split: b,
    style: p,
    wrap: v = !1,
    classNames: h,
    styles: y
  } = e, E = uE(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]), [C, O] = Array.isArray(l) ? l : [l, l], x = Kc(O), S = Kc(C), R = Yc(O), _ = Yc(C), N = Dn(f, {
    keepEmpty: !0
  }), F = c === void 0 && m === "horizontal" ? "center" : c, A = a("space", g), [M, D] = Nd(A), V = Oe(A, o == null ? void 0 : o.className, D, `${A}-${m}`, {
    [`${A}-rtl`]: i === "rtl",
    [`${A}-align-${F}`]: F,
    [`${A}-gap-row-${O}`]: x,
    [`${A}-gap-col-${C}`]: S
  }, u, d), P = Oe(`${A}-item`, (n = h == null ? void 0 : h.item) !== null && n !== void 0 ? n : (r = o == null ? void 0 : o.classNames) === null || r === void 0 ? void 0 : r.item);
  let I = 0;
  const T = N.map((H, W) => {
    var G, U;
    H != null && (I = W);
    const ne = H && H.key || `${P}-${W}`;
    return /* @__PURE__ */ s.createElement(cE, {
      className: P,
      key: ne,
      index: W,
      split: b,
      style: (G = y == null ? void 0 : y.item) !== null && G !== void 0 ? G : (U = o == null ? void 0 : o.styles) === null || U === void 0 ? void 0 : U.item
    }, H);
  }), z = s.useMemo(() => ({
    latestIndex: I
  }), [I]);
  if (N.length === 0)
    return null;
  const L = {};
  return v && (L.flexWrap = "wrap"), !S && _ && (L.columnGap = C), !x && R && (L.rowGap = O), M(/* @__PURE__ */ s.createElement("div", Object.assign({
    ref: t,
    className: V,
    style: Object.assign(Object.assign(Object.assign({}, L), o == null ? void 0 : o.style), p)
  }, E), /* @__PURE__ */ s.createElement(sE, {
    value: z
  }, T)));
});
process.env.NODE_ENV !== "production" && (Yf.displayName = "Space");
const Xf = Yf;
Xf.Compact = Bh;
const Xc = Xf;
var dE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" } }, { tag: "path", attrs: { d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, name: "minus-square", theme: "outlined" };
const fE = dE;
var Qf = function(t, n) {
  return /* @__PURE__ */ s.createElement(xn, Ue({}, t, {
    ref: n,
    icon: fE
  }));
};
process.env.NODE_ENV !== "production" && (Qf.displayName = "MinusSquareOutlined");
const vE = /* @__PURE__ */ s.forwardRef(Qf);
var mE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" } }, { tag: "path", attrs: { d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, name: "plus-square", theme: "outlined" };
const gE = mE;
var Jf = function(t, n) {
  return /* @__PURE__ */ s.createElement(xn, Ue({}, t, {
    ref: n,
    icon: gE
  }));
};
process.env.NODE_ENV !== "production" && (Jf.displayName = "PlusSquareOutlined");
const pE = /* @__PURE__ */ s.forwardRef(Jf);
var hE = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" } }] }, name: "caret-down", theme: "outlined" };
const bE = hE;
var Zf = function(t, n) {
  return /* @__PURE__ */ s.createElement(xn, Ue({}, t, {
    ref: n,
    icon: bE
  }));
};
process.env.NODE_ENV !== "production" && (Zf.displayName = "CaretDownOutlined");
const yE = /* @__PURE__ */ s.forwardRef(Zf);
var Bt = /* @__PURE__ */ ((e) => (e.STRING = "string", e.NUMBER = "number", e.BOOLEAN = "boolean", e.OBJECT = "object", e.ARRAY = "array", e))(Bt || {});
const ev = {
  string: "",
  boolean: !0,
  number: 0,
  object: {},
  array: []
}, il = (e) => {
  var t;
  return (t = Object.prototype.toString.call(e).match(/\w+/g)) == null ? void 0 : t[1].toLowerCase();
}, tv = (e, t, n, r = !1, a = []) => {
  const o = e.shift(), i = Object.keys(t);
  if (e.length) {
    tv(e, t[i[o]], n, r);
    return;
  }
  r ? (delete t[i[o]], a[0] = { ...t, ...n }) : t[i[o]] = n;
}, Ci = (e, t, n, r = !1) => {
  const a = t.split("-").slice(1);
  return tv(a, n, e, r), n;
}, Wo = (e) => !!(e && typeof e == "object"), nv = (e) => Wo(e) ? il(e) === "array" ? `Array [${e.length}]` : `Object {${Object.keys(e).length}}` : null, yr = (e, t) => {
  var a, o, i;
  const n = t.shift() || "";
  let r = {};
  if (/\\d+\]/.test(n)) {
    const l = n.replace(/[\[\]]/g, "");
    r = yr((a = e == null ? void 0 : e.properties) == null ? void 0 : a[l], t);
  } else
    n ? r = yr(((o = e == null ? void 0 : e.properties) == null ? void 0 : o[n]) || ((i = e == null ? void 0 : e.properties) == null ? void 0 : i["*"]), t) : r = e;
  return r;
}, sl = (e, t, n) => {
  const r = yr(
    e,
    [...t.split("."), "*"].filter((o) => o != "")
  ), a = yr(
    e,
    [...t.split("."), n].filter((o) => o != "")
  );
  return r || a || {};
}, rv = (e, t) => {
  let n = e;
  return t.split(".").forEach((a) => {
    const o = /(.*)\[(\d+)\]$/.exec(a);
    if (o) {
      const i = o[1];
      n = n[i];
    } else
      n = n[a];
  }), n;
}, Kr = Re.createContext(null), SE = pE, Ss = (e) => {
  const { setEditObject: t, editObject: n, optionsMap: r, schema: a } = s.useContext(Kr), { uniqueKey: o, sourceData: i, parentPath: l } = e, c = yr(a, [...l.split("."), "*"]), u = Object.keys((c == null ? void 0 : c.properties) || {}).length > 0 || (c == null ? void 0 : c.type) == "object", d = Array.isArray(i), [f, m] = s.useState(""), [g, b] = s.useState({}), [p, v] = s.useState({}), h = (S, R) => {
    m(""), p[S] = R, g[S] = {}, b({
      ...g
    }), v({
      ...p
    });
  }, y = (S, R) => {
    g[S].key = R.target.value, b({ ...g });
  }, E = (S, R) => {
    g[S].value = R, b({ ...g });
  }, C = (S, R) => {
    g[S].type = R, g[S].value = ev[R], b({
      ...g
    });
  }, O = (S, R) => {
    const { key: _, value: N } = Rs(g[S]);
    if (Object.keys(R).some((A) => A == _)) {
      m("Key already exists");
      return;
    } else if (!d && (_ == null || _ === "")) {
      m("Key can not be empty");
      return;
    }
    const F = rv(n, l);
    if (u) {
      const A = {};
      Object.entries(c.properties ?? {}).forEach(([M, D]) => {
        if (D.default !== void 0)
          A[M] = D.default;
        else {
          const P = {
            string: "",
            array: [],
            object: {},
            number: 0,
            boolean: !1
          };
          A[M] = P[D.type];
        }
      }), F[_] = A;
    } else {
      const A = N === void 0 ? "" : N;
      d ? F.push(A) : F[_] = A;
    }
    t({ ...n }), h(S, !1);
  }, x = (S) => {
    var _;
    switch (u ? null : S) {
      case Bt.STRING:
        const N = (r == null ? void 0 : r[(_ = g[o]) == null ? void 0 : _.key]) ?? [];
        return /* @__PURE__ */ ve.jsx(
          US,
          {
            style: { width: 100 },
            size: "small",
            options: N,
            onChange: (F) => E(o, F),
            filterOption: (F, A) => `${A.value}`.toUpperCase().indexOf(F.toUpperCase()) !== -1
          }
        );
      case Bt.NUMBER:
        return /* @__PURE__ */ ve.jsx(_1, { size: "small", onBlur: (F) => E(o, +F.target.value) });
      case Bt.BOOLEAN:
        return /* @__PURE__ */ ve.jsxs(
          kt,
          {
            size: "small",
            defaultValue: !0,
            onChange: (F) => {
              E(o, F);
            },
            children: [
              /* @__PURE__ */ ve.jsx(kt.Option, { value: !0, label: "true", children: "true" }),
              /* @__PURE__ */ ve.jsx(kt.Option, { value: !1, label: "false", children: "false" })
            ]
          }
        );
      default:
        return null;
    }
  };
  return /* @__PURE__ */ ve.jsx("div", { className: "addItem", "data-path": l, children: p[o] ? /* @__PURE__ */ ve.jsxs(ve.Fragment, { children: [
    /* @__PURE__ */ ve.jsxs(Xc, { children: [
      !d && /* @__PURE__ */ ve.jsx("div", { children: /* @__PURE__ */ ve.jsx(iE, { size: "small", onChange: (S) => y(o, S) }) }),
      /* @__PURE__ */ ve.jsx("div", { children: /* @__PURE__ */ ve.jsx(
        kt,
        {
          size: "small",
          onChange: (S) => C(o, S),
          defaultValue: u ? Bt.OBJECT : Bt.STRING,
          children: u ? /* @__PURE__ */ ve.jsx(kt.Option, { value: Bt.OBJECT, children: Bt.OBJECT }, Bt.OBJECT) : Object.values(Bt).map((S) => /* @__PURE__ */ ve.jsx(kt.Option, { value: S, children: S }, S))
        }
      ) }),
      x(g[o].type || Bt.STRING),
      /* @__PURE__ */ ve.jsx("div", { children: /* @__PURE__ */ ve.jsxs(Xc, { children: [
        /* @__PURE__ */ ve.jsx(es, { size: "small", type: "primary", onClick: () => O(o, i), children: "Confirm" }),
        /* @__PURE__ */ ve.jsx(es, { size: "small", onClick: () => h(o, !1), children: "Cancel" })
      ] }) })
    ] }),
    !!f && /* @__PURE__ */ ve.jsx("div", { style: { color: "red", margin: "2px 0 0 2px" }, children: f })
  ] }) : /* @__PURE__ */ ve.jsx(l1, { span: 8, children: /* @__PURE__ */ ve.jsx(SE, { style: { color: "#1E88E5" }, onClick: () => h(o, !0) }) }) }, o);
}, Es = Ss;
try {
  Ss.displayName = "AddItem", Ss.__docgenInfo = { description: "", displayName: "AddItem", props: { uniqueKey: { defaultValue: null, description: "", name: "uniqueKey", required: !0, type: { name: "string" } }, sourceData: { defaultValue: null, description: "", name: "sourceData", required: !0, type: { name: "any" } }, deepLevel: { defaultValue: null, description: "", name: "deepLevel", required: !0, type: { name: "number" } }, parentPath: { defaultValue: null, description: "", name: "parentPath", required: !0, type: { name: "string" } } } };
} catch {
}
const EE = yE;
function yo(e) {
  const { fieldValue: t, uniqueKey: n } = e, { onChangeAllow: r, allowMap: a } = s.useContext(Kr);
  return Wo(t) ? /* @__PURE__ */ ve.jsx("span", { className: "caret", onClick: () => r(n), children: /* @__PURE__ */ ve.jsx(EE, { style: { display: "block" }, className: `collapse ${a[n] ? "up" : "down"}` }) }) : null;
}
try {
  yo.displayName = "CollapsePart", yo.__docgenInfo = { description: "", displayName: "CollapsePart", props: { uniqueKey: { defaultValue: null, description: "", name: "uniqueKey", required: !0, type: { name: "string" } }, fieldValue: { defaultValue: null, description: "", name: "fieldValue", required: !0, type: { name: "any" } } } };
} catch {
}
const Qc = vE;
function Yr(e) {
  var i;
  const { schema: t } = s.useContext(Kr);
  if ((i = yr(t, e.parentPath.split("."))) != null && i.fixed)
    return null;
  const n = sl(t, e.parentPath, e.fieldKey), r = Object.keys(n.properties || {}).length > 0, a = r || n.type !== void 0, o = r ? "object" : n.type;
  return /* @__PURE__ */ ve.jsx(Kr.Consumer, { children: ({ onChangeType: l, onClickDelete: c }) => /* @__PURE__ */ ve.jsxs("span", { className: "tools", "data-path": e.parentPath, "data-custom": e.custom, children: [
    /* @__PURE__ */ ve.jsx("span", { children: /* @__PURE__ */ ve.jsx(
      kt,
      {
        size: "small",
        onChange: (u) => l(u, e.uniqueKey),
        defaultValue: il(e.fieldValue),
        children: a ? /* @__PURE__ */ ve.jsx(kt.Option, { value: o, children: o }, o) : Object.values(Bt).map((u) => /* @__PURE__ */ ve.jsx(kt.Option, { value: u, children: u }, u))
      }
    ) }),
    n.mandatory ? /* @__PURE__ */ ve.jsx("span", { className: "iconSubtraction", children: /* @__PURE__ */ ve.jsx(Qc, { style: { color: "gray" } }) }) : /* @__PURE__ */ ve.jsx("span", { className: "iconSubtraction", children: /* @__PURE__ */ ve.jsx(Qc, { onClick: () => c(e.fieldKey, e.parentPath) }) })
  ] }) });
}
try {
  Yr.displayName = "ToolsView", Yr.__docgenInfo = { description: "", displayName: "ToolsView", props: { fieldValue: { defaultValue: null, description: "", name: "fieldValue", required: !0, type: { name: "any" } }, fieldKey: { defaultValue: null, description: "", name: "fieldKey", required: !0, type: { name: "string" } }, uniqueKey: { defaultValue: null, description: "", name: "uniqueKey", required: !0, type: { name: "string" } }, sourceData: { defaultValue: null, description: "", name: "sourceData", required: !0, type: { name: "any" } }, parentPath: { defaultValue: null, description: "", name: "parentPath", required: !0, type: { name: "string" } }, custom: { defaultValue: null, description: "", name: "custom", required: !1, type: { name: "string" } } } };
} catch {
}
function Cs(e) {
  const { allowMap: t } = s.useContext(Kr);
  return /* @__PURE__ */ ve.jsxs("div", { className: "arrayContent", children: [
    /* @__PURE__ */ ve.jsx("div", { style: { marginTop: "10px" }, children: e.fieldValue.map((n, r) => {
      const a = `${e.parentUniqueKey}-${r}`, o = Wo(n), i = `${e.parentPath}[${r}]`, l = /* @__PURE__ */ ve.jsxs(ve.Fragment, { children: [
        /* @__PURE__ */ ve.jsxs("span", { className: "jsonKey", children: [
          r + 1,
          "."
        ] }),
        /* @__PURE__ */ ve.jsx(yo, { uniqueKey: a, fieldValue: n }),
        o ? /* @__PURE__ */ ve.jsx("b", { className: "mt15", children: nv(n) }) : null,
        !o && /* @__PURE__ */ ve.jsx("span", { className: "jsonValue", children: e.getValue(
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
      return /* @__PURE__ */ ve.jsx("div", { className: "indexLine", "data-key": a, children: /* @__PURE__ */ ve.jsxs("div", { className: "lineData", "data-obj": o, children: [
        /* @__PURE__ */ ve.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center " }, children: [
          o ? /* @__PURE__ */ ve.jsx("div", { style: { display: "flex", alignItems: "center" }, children: l }) : l,
          o && /* @__PURE__ */ ve.jsx(
            Yr,
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
        !o && /* @__PURE__ */ ve.jsx(
          Yr,
          {
            uniqueKey: a,
            fieldValue: n,
            fieldKey: `${r}`,
            sourceData: e.fieldValue,
            parentPath: i,
            custom: "array"
          }
        ),
        o && t[a] && /* @__PURE__ */ ve.jsx("span", { className: "jsonValue", children: e.getValue(
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
    /* @__PURE__ */ ve.jsx("div", { children: /* @__PURE__ */ ve.jsx(
      Es,
      {
        uniqueKey: e.parentUniqueKey,
        deepLevel: e.deepLevel,
        sourceData: e.fieldValue,
        parentPath: `${e.parentPath}[${e.fieldValue.length}]`
      }
    ) })
  ] });
}
try {
  Cs.displayName = "ArrayView", Cs.__docgenInfo = { description: "", displayName: "ArrayView", props: { fieldValue: { defaultValue: null, description: "", name: "fieldValue", required: !0, type: { name: "any[]" } }, fieldKey: { defaultValue: null, description: "", name: "fieldKey", required: !0, type: { name: "string" } }, sourceData: { defaultValue: null, description: "", name: "sourceData", required: !0, type: { name: "any" } }, getValue: { defaultValue: null, description: "", name: "getValue", required: !0, type: { name: "any" } }, deepLevel: { defaultValue: null, description: "", name: "deepLevel", required: !0, type: { name: "number" } }, parentUniqueKey: { defaultValue: null, description: "", name: "parentUniqueKey", required: !0, type: { name: "string" } }, parentPath: { defaultValue: null, description: "", name: "parentPath", required: !0, type: { name: "string" } }, schema: { defaultValue: null, description: "", name: "schema", required: !0, type: { name: "any" } } } };
} catch {
}
const CE = 1, ws = ({
  sourceData: e,
  deepLevel: t,
  parentUniqueKey: n,
  parentPath: r,
  schema: a,
  onChangeKey: o,
  allowMap: i,
  getValue: l
}) => {
  var g;
  const c = {};
  Object.entries(i).forEach(([b, p]) => {
    new RegExp(n).test(b) && (c[b] = p);
  });
  const u = s.useRef(0);
  t = t ?? 1, n = n ?? `${t}`, r = r ?? "";
  const d = Object.keys(e), f = !!((g = yr(a, r.split("."))) != null && g.fixed);
  return s.useMemo(() => d.length ? /* @__PURE__ */ ve.jsxs("div", { className: "objectContent", style: { marginLeft: CE === t ? "0" : "15px" }, children: [
    d.map((b, p) => {
      const v = `${n}-${p}`, h = e[b], y = nv(h), E = Wo(h), C = sl(a, r, b), O = /^\$E-\d+\$_/.test(b);
      return /* @__PURE__ */ ve.jsxs("div", { className: "indexLine", "data-key": v, children: [
        /* @__PURE__ */ ve.jsxs("div", { className: "lineData", "data-obj": E, children: [
          /* @__PURE__ */ ve.jsxs("div", { children: [
            /* @__PURE__ */ ve.jsxs("div", { children: [
              /* @__PURE__ */ ve.jsx(yo, { uniqueKey: v, fieldValue: h }),
              /* @__PURE__ */ ve.jsx("span", { className: "jsonKey", children: f || C.mandatory ? /* @__PURE__ */ ve.jsx("span", { style: { margin: "5px", fontWeight: "bold" }, children: b }) : /* @__PURE__ */ ve.jsx(
                "input",
                {
                  ref: (x) => {
                    x && (x.value = b.replace(/^\$E-\d+\$_/, ""));
                  },
                  placeholder: b,
                  onChange: (x) => {
                    u.current && clearTimeout(u.current), u.current = +setTimeout(() => {
                      o(x, b, v, e, n);
                    }, 800);
                  },
                  "data-error": O
                }
              ) }),
              !!y && /* @__PURE__ */ ve.jsx("div", { style: { margin: "5px" }, children: y })
            ] }),
            !E && /* @__PURE__ */ ve.jsx("span", { className: "jsonValue", children: l(h, b, e, t, v, r, a, i) }),
            E && /* @__PURE__ */ ve.jsx(
              Yr,
              {
                uniqueKey: v,
                fieldValue: h,
                fieldKey: b,
                sourceData: e,
                parentPath: r,
                custom: "json"
              }
            )
          ] }),
          E && i[v] && /* @__PURE__ */ ve.jsx("span", { className: "jsonValue", children: l(h, b, e, t, v, r, a, i) }),
          !E && /* @__PURE__ */ ve.jsx(
            Yr,
            {
              uniqueKey: v,
              fieldValue: h,
              fieldKey: b,
              sourceData: e,
              parentPath: r,
              custom: "json"
            }
          )
        ] }),
        O && /* @__PURE__ */ ve.jsx("div", { style: { color: "red" }, children: "Duplicated key" })
      ] }, v);
    }),
    !f && /* @__PURE__ */ ve.jsx("div", { children: /* @__PURE__ */ ve.jsx(
      Es,
      {
        uniqueKey: n,
        deepLevel: t,
        sourceData: e,
        parentPath: r
      },
      n
    ) })
  ] }) : /* @__PURE__ */ ve.jsx("div", { style: { marginLeft: "20px" }, children: /* @__PURE__ */ ve.jsx(
    Es,
    {
      uniqueKey: "defaultKay",
      deepLevel: t,
      sourceData: e,
      parentPath: r
    }
  ) }), [JSON.stringify(e), JSON.stringify(c), f]);
}, Jc = ws;
try {
  ws.displayName = "RenderJsonConfig", ws.__docgenInfo = { description: "", displayName: "RenderJsonConfig", props: { sourceData: { defaultValue: null, description: "", name: "sourceData", required: !0, type: { name: "any" } }, deepLevel: { defaultValue: null, description: "", name: "deepLevel", required: !1, type: { name: "number" } }, parentUniqueKey: { defaultValue: null, description: "", name: "parentUniqueKey", required: !1, type: { name: "string" } }, parentPath: { defaultValue: null, description: "", name: "parentPath", required: !1, type: { name: "string" } }, schema: { defaultValue: null, description: "", name: "schema", required: !0, type: { name: "any" } }, onChangeKey: { defaultValue: null, description: "", name: "onChangeKey", required: !0, type: { name: "any" } }, allowMap: { defaultValue: null, description: "", name: "allowMap", required: !0, type: { name: "any" } }, getValue: { defaultValue: null, description: "", name: "getValue", required: !0, type: { name: "any" } } } };
} catch {
}
function xs(e) {
  const { editObject: t, setEditObject: n, optionsMap: r } = e, a = s.useRef(0), [o, i] = s.useState({}), l = JSON.stringify(t), c = (E) => {
    n({ ...E });
  }, u = s.useCallback(
    (E, C) => {
      const O = rv(t, C);
      Array.isArray(O) ? O.splice(+E, 1) : Reflect.deleteProperty(O, E), c(t);
    },
    [l]
  ), d = s.useCallback(
    (E, C) => {
      const O = Ci(ev[E], C, t);
      c(O);
    },
    [l]
  ), f = s.useCallback(
    (E, C, O, x, S) => {
      var M;
      const R = {}, _ = Object.keys(x);
      let N = !1;
      const F = +(((M = /.*-(\d+)$/.exec(O)) == null ? void 0 : M[1]) || -1);
      _.some((D, V) => D == E.target.value && V != F) && (N = !0, a.current++);
      for (const [D, V] of Object.entries(x))
        D === C ? R[(N ? `$E-${a.current}$_` : "") + E.target.value] = x[D] : R[D] = V;
      let A;
      /^1-\d+$/.test(O) ? A = R : (A = Ci(R, O, t, !0), A = Ci(R, S, A)), c(A);
    },
    [l]
  ), m = (E, C, O, x = 0, S = "") => {
    if (O[C] = E, x == 1)
      c(O);
    else {
      const R = [];
      S.split(".").forEach((_) => {
        /.*\[\d+\]/.test(_) ? R.push(_.replace(/\[\d*\]/, "")) : R.push(_);
      }), c(g(O, R));
    }
  }, g = (E, C) => {
    const O = [...C], x = O.pop(), S = Rs(t);
    let R = S;
    return O.forEach((_) => {
      R = R[_];
    }), R[x] = E, S;
  }, b = s.useRef(0), p = (E, C, O, x = 0, S = "") => {
    b.current && clearTimeout(b.current), b.current = +setTimeout(() => {
      m(E, C, O, x, S);
    }, 800);
  }, v = s.useCallback(
    (E, C, O, x, S, R, _, N) => {
      var M;
      const F = il(E), A = `${R ? R + "." : ""}${C}`;
      switch (F) {
        case Bt.ARRAY:
          return /* @__PURE__ */ ve.jsx(
            Cs,
            {
              fieldValue: E,
              fieldKey: C,
              sourceData: O,
              deepLevel: x,
              parentUniqueKey: S,
              getValue: v,
              parentPath: A,
              schema: _
            }
          );
        case Bt.OBJECT:
          return /* @__PURE__ */ ve.jsx("span", { children: /* @__PURE__ */ ve.jsx(
            Jc,
            {
              sourceData: E,
              schema: _,
              deepLevel: x + 1,
              parentUniqueKey: S,
              parentPath: A,
              onChangeKey: f,
              allowMap: N,
              getValue: v
            }
          ) });
        case Bt.STRING:
          const D = sl(_, R, C);
          return ((M = D.options) == null ? void 0 : M.length) > 0 ? /* @__PURE__ */ ve.jsx(
            kt,
            {
              size: "small",
              defaultValue: "string",
              onChange: (V) => {
                p(V, C, O, x, R);
              },
              children: D.options.map((V) => /* @__PURE__ */ ve.jsx(kt.Option, { value: V, label: "true", children: V }, V))
            }
          ) : /* @__PURE__ */ ve.jsx(
            "input",
            {
              ref: (V) => {
                V && (V.value = E);
              },
              style: { width: 100 },
              onChange: (V) => {
                p(V.currentTarget.value, C, O, x, R);
              }
            }
          );
        case Bt.NUMBER:
          return /* @__PURE__ */ ve.jsx(
            "input",
            {
              ref: (V) => {
                V && (V.value = E);
              },
              className: "inputNumber",
              type: "number",
              onChange: (V) => {
                p(+(V.target.value || 0), C, O, x, R);
              }
            }
          );
        case Bt.BOOLEAN:
          return /* @__PURE__ */ ve.jsxs(
            kt,
            {
              size: "small",
              defaultValue: !!E,
              onChange: (V) => {
                p(V, C, O, x, R);
              },
              children: [
                /* @__PURE__ */ ve.jsx(kt.Option, { value: !0, label: "true", children: "true" }),
                /* @__PURE__ */ ve.jsx(kt.Option, { value: !1, label: "false", children: "false" })
              ]
            }
          );
      }
      return null;
    },
    []
  ), h = s.useCallback(
    (E) => {
      o[E] = !o[E], i({ ...o });
    },
    [JSON.stringify(o)]
  ), y = s.useMemo(
    () => ({
      editObject: t,
      setEditObject: c,
      optionsMap: r,
      onChangeType: d,
      onClickDelete: u,
      onChangeAllow: h,
      allowMap: o,
      schema: e.schema
    }),
    [
      l,
      JSON.stringify(r),
      d,
      u,
      h,
      JSON.stringify(o),
      JSON.stringify(e.schema)
    ]
  );
  return /* @__PURE__ */ ve.jsx(Kr.Provider, { value: y, children: /* @__PURE__ */ ve.jsx(
    Jc,
    {
      sourceData: t,
      schema: e.schema,
      onChangeKey: f,
      allowMap: o,
      getValue: v
    }
  ) });
}
try {
  xs.displayName = "JsonView", xs.__docgenInfo = { description: "", displayName: "JsonView", props: { setEditObject: { defaultValue: null, description: "", name: "setEditObject", required: !0, type: { name: "any" } }, editObject: { defaultValue: null, description: "", name: "editObject", required: !0, type: { name: "Record<string, any>" } }, optionsMap: { defaultValue: null, description: "", name: "optionsMap", required: !1, type: { name: "Record<string, { value: string; label?: string; }[]>" } }, schema: { defaultValue: null, description: "", name: "schema", required: !0, type: { name: "any" } } } };
} catch {
}
const Os = ({ data: e, onChange: t, schema: n, optionsMap: r, width: a }) => /* @__PURE__ */ ve.jsx("div", { className: "jsonEditorContainer", style: { width: a ?? 500, marginBottom: "20px" }, children: /* @__PURE__ */ ve.jsx(
  xs,
  {
    //the cloneDeep is to ensure that an entirily new object is being used
    editObject: Rs(e),
    setEditObject: t,
    optionsMap: r,
    schema: n || {}
  }
) });
try {
  Os.displayName = "JsonEditor", Os.__docgenInfo = { description: "", displayName: "JsonEditor", props: { width: { defaultValue: null, description: "", name: "width", required: !1, type: { name: "string | number" } }, data: { defaultValue: null, description: "", name: "data", required: !0, type: { name: "Record<string, any>" } }, optionsMap: { defaultValue: null, description: "", name: "optionsMap", required: !1, type: { name: "Record<string, { value: string; label?: string; }[]>" } }, schema: { defaultValue: null, description: "", name: "schema", required: !1, type: { name: "any" } }, onChange: { defaultValue: null, description: "", name: "onChange", required: !0, type: { name: "(data: any) => void" } } } };
} catch {
}
const $E = {
  title: "Example/JsonEditor",
  component: Os,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
};
let Zc = {
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
const qa = {
  args: {
    width: "440px",
    data: Zc.data,
    schema: {},
    onChange(e) {
      Zc.data = e, console.log(e);
    }
  }
};
var eu, tu, nu;
qa.parameters = {
  ...qa.parameters,
  docs: {
    ...(eu = qa.parameters) == null ? void 0 : eu.docs,
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
      ...(nu = (tu = qa.parameters) == null ? void 0 : tu.docs) == null ? void 0 : nu.source
    }
  }
};
const IE = ["Primary"];
export {
  qa as Primary,
  IE as __namedExportsOrder,
  $E as default
};
//# sourceMappingURL=JsonEditor.stories-f034f392.js.map

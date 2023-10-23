import { g as q1 } from "./_commonjsHelpers-c5d32002.js";
function X1(ee, J) {
  for (var A = 0; A < J.length; A++) {
    const Ht = J[A];
    if (typeof Ht != "string" && !Array.isArray(Ht)) {
      for (const Ft in Ht)
        if (Ft !== "default" && !(Ft in ee)) {
          const qe = Object.getOwnPropertyDescriptor(Ht, Ft);
          qe && Object.defineProperty(ee, Ft, qe.get ? qe : {
            enumerable: !0,
            get: () => Ht[Ft]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(ee, Symbol.toStringTag, { value: "Module" }));
}
var l0 = { exports: {} }, ot = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var P1;
function V_() {
  if (P1)
    return ot;
  P1 = 1;
  var ee = Symbol.for("react.element"), J = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), Ht = Symbol.for("react.strict_mode"), Ft = Symbol.for("react.profiler"), qe = Symbol.for("react.provider"), E = Symbol.for("react.context"), hn = Symbol.for("react.forward_ref"), Oe = Symbol.for("react.suspense"), me = Symbol.for("react.memo"), jt = Symbol.for("react.lazy"), oe = Symbol.iterator;
  function ge(T) {
    return T === null || typeof T != "object" ? null : (T = oe && T[oe] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var ue = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Fe = Object.assign, vt = {};
  function nt(T, B, ae) {
    this.props = T, this.context = B, this.refs = vt, this.updater = ae || ue;
  }
  nt.prototype.isReactComponent = {}, nt.prototype.setState = function(T, B) {
    if (typeof T != "object" && typeof T != "function" && T != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, T, B, "setState");
  }, nt.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function Kn() {
  }
  Kn.prototype = nt.prototype;
  function Xt(T, B, ae) {
    this.props = T, this.context = B, this.refs = vt, this.updater = ae || ue;
  }
  var Be = Xt.prototype = new Kn();
  Be.constructor = Xt, Fe(Be, nt.prototype), Be.isPureReactComponent = !0;
  var rt = Array.isArray, Re = Object.prototype.hasOwnProperty, Xe = { current: null }, Ue = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Kt(T, B, ae) {
    var Ve, Me = {}, ft = null, Ke = null;
    if (B != null)
      for (Ve in B.ref !== void 0 && (Ke = B.ref), B.key !== void 0 && (ft = "" + B.key), B)
        Re.call(B, Ve) && !Ue.hasOwnProperty(Ve) && (Me[Ve] = B[Ve]);
    var dt = arguments.length - 2;
    if (dt === 1)
      Me.children = ae;
    else if (1 < dt) {
      for (var et = Array(dt), zt = 0; zt < dt; zt++)
        et[zt] = arguments[zt + 2];
      Me.children = et;
    }
    if (T && T.defaultProps)
      for (Ve in dt = T.defaultProps, dt)
        Me[Ve] === void 0 && (Me[Ve] = dt[Ve]);
    return { $$typeof: ee, type: T, key: ft, ref: Ke, props: Me, _owner: Xe.current };
  }
  function Dn(T, B) {
    return { $$typeof: ee, type: T.type, key: B, ref: T.ref, props: T.props, _owner: T._owner };
  }
  function Nt(T) {
    return typeof T == "object" && T !== null && T.$$typeof === ee;
  }
  function Et(T) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(ae) {
      return B[ae];
    });
  }
  var En = /\/+/g;
  function Ye(T, B) {
    return typeof T == "object" && T !== null && T.key != null ? Et("" + T.key) : B.toString(36);
  }
  function at(T, B, ae, Ve, Me) {
    var ft = typeof T;
    (ft === "undefined" || ft === "boolean") && (T = null);
    var Ke = !1;
    if (T === null)
      Ke = !0;
    else
      switch (ft) {
        case "string":
        case "number":
          Ke = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case ee:
            case J:
              Ke = !0;
          }
      }
    if (Ke)
      return Ke = T, Me = Me(Ke), T = Ve === "" ? "." + Ye(Ke, 0) : Ve, rt(Me) ? (ae = "", T != null && (ae = T.replace(En, "$&/") + "/"), at(Me, B, ae, "", function(zt) {
        return zt;
      })) : Me != null && (Nt(Me) && (Me = Dn(Me, ae + (!Me.key || Ke && Ke.key === Me.key ? "" : ("" + Me.key).replace(En, "$&/") + "/") + T)), B.push(Me)), 1;
    if (Ke = 0, Ve = Ve === "" ? "." : Ve + ":", rt(T))
      for (var dt = 0; dt < T.length; dt++) {
        ft = T[dt];
        var et = Ve + Ye(ft, dt);
        Ke += at(ft, B, ae, et, Me);
      }
    else if (et = ge(T), typeof et == "function")
      for (T = et.call(T), dt = 0; !(ft = T.next()).done; )
        ft = ft.value, et = Ve + Ye(ft, dt++), Ke += at(ft, B, ae, et, Me);
    else if (ft === "object")
      throw B = String(T), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    return Ke;
  }
  function Qt(T, B, ae) {
    if (T == null)
      return T;
    var Ve = [], Me = 0;
    return at(T, Ve, "", "", function(ft) {
      return B.call(ae, ft, Me++);
    }), Ve;
  }
  function gt(T) {
    if (T._status === -1) {
      var B = T._result;
      B = B(), B.then(function(ae) {
        (T._status === 0 || T._status === -1) && (T._status = 1, T._result = ae);
      }, function(ae) {
        (T._status === 0 || T._status === -1) && (T._status = 2, T._result = ae);
      }), T._status === -1 && (T._status = 0, T._result = B);
    }
    if (T._status === 1)
      return T._result.default;
    throw T._result;
  }
  var ve = { current: null }, G = { transition: null }, Ee = { ReactCurrentDispatcher: ve, ReactCurrentBatchConfig: G, ReactCurrentOwner: Xe };
  return ot.Children = { map: Qt, forEach: function(T, B, ae) {
    Qt(T, function() {
      B.apply(this, arguments);
    }, ae);
  }, count: function(T) {
    var B = 0;
    return Qt(T, function() {
      B++;
    }), B;
  }, toArray: function(T) {
    return Qt(T, function(B) {
      return B;
    }) || [];
  }, only: function(T) {
    if (!Nt(T))
      throw Error("React.Children.only expected to receive a single React element child.");
    return T;
  } }, ot.Component = nt, ot.Fragment = A, ot.Profiler = Ft, ot.PureComponent = Xt, ot.StrictMode = Ht, ot.Suspense = Oe, ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ee, ot.cloneElement = function(T, B, ae) {
    if (T == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
    var Ve = Fe({}, T.props), Me = T.key, ft = T.ref, Ke = T._owner;
    if (B != null) {
      if (B.ref !== void 0 && (ft = B.ref, Ke = Xe.current), B.key !== void 0 && (Me = "" + B.key), T.type && T.type.defaultProps)
        var dt = T.type.defaultProps;
      for (et in B)
        Re.call(B, et) && !Ue.hasOwnProperty(et) && (Ve[et] = B[et] === void 0 && dt !== void 0 ? dt[et] : B[et]);
    }
    var et = arguments.length - 2;
    if (et === 1)
      Ve.children = ae;
    else if (1 < et) {
      dt = Array(et);
      for (var zt = 0; zt < et; zt++)
        dt[zt] = arguments[zt + 2];
      Ve.children = dt;
    }
    return { $$typeof: ee, type: T.type, key: Me, ref: ft, props: Ve, _owner: Ke };
  }, ot.createContext = function(T) {
    return T = { $$typeof: E, _currentValue: T, _currentValue2: T, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, T.Provider = { $$typeof: qe, _context: T }, T.Consumer = T;
  }, ot.createElement = Kt, ot.createFactory = function(T) {
    var B = Kt.bind(null, T);
    return B.type = T, B;
  }, ot.createRef = function() {
    return { current: null };
  }, ot.forwardRef = function(T) {
    return { $$typeof: hn, render: T };
  }, ot.isValidElement = Nt, ot.lazy = function(T) {
    return { $$typeof: jt, _payload: { _status: -1, _result: T }, _init: gt };
  }, ot.memo = function(T, B) {
    return { $$typeof: me, type: T, compare: B === void 0 ? null : B };
  }, ot.startTransition = function(T) {
    var B = G.transition;
    G.transition = {};
    try {
      T();
    } finally {
      G.transition = B;
    }
  }, ot.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, ot.useCallback = function(T, B) {
    return ve.current.useCallback(T, B);
  }, ot.useContext = function(T) {
    return ve.current.useContext(T);
  }, ot.useDebugValue = function() {
  }, ot.useDeferredValue = function(T) {
    return ve.current.useDeferredValue(T);
  }, ot.useEffect = function(T, B) {
    return ve.current.useEffect(T, B);
  }, ot.useId = function() {
    return ve.current.useId();
  }, ot.useImperativeHandle = function(T, B, ae) {
    return ve.current.useImperativeHandle(T, B, ae);
  }, ot.useInsertionEffect = function(T, B) {
    return ve.current.useInsertionEffect(T, B);
  }, ot.useLayoutEffect = function(T, B) {
    return ve.current.useLayoutEffect(T, B);
  }, ot.useMemo = function(T, B) {
    return ve.current.useMemo(T, B);
  }, ot.useReducer = function(T, B, ae) {
    return ve.current.useReducer(T, B, ae);
  }, ot.useRef = function(T) {
    return ve.current.useRef(T);
  }, ot.useState = function(T) {
    return ve.current.useState(T);
  }, ot.useSyncExternalStore = function(T, B, ae) {
    return ve.current.useSyncExternalStore(T, B, ae);
  }, ot.useTransition = function() {
    return ve.current.useTransition();
  }, ot.version = "18.2.0", ot;
}
var Ip = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Ip.exports;
var $1;
function B_() {
  return $1 || ($1 = 1, function(ee, J) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = "18.2.0", Ht = Symbol.for("react.element"), Ft = Symbol.for("react.portal"), qe = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), hn = Symbol.for("react.profiler"), Oe = Symbol.for("react.provider"), me = Symbol.for("react.context"), jt = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), ge = Symbol.for("react.suspense_list"), ue = Symbol.for("react.memo"), Fe = Symbol.for("react.lazy"), vt = Symbol.for("react.offscreen"), nt = Symbol.iterator, Kn = "@@iterator";
      function Xt(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = nt && h[nt] || h[Kn];
        return typeof C == "function" ? C : null;
      }
      var Be = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, rt = {
        transition: null
      }, Re = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Xe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ue = {}, Kt = null;
      function Dn(h) {
        Kt = h;
      }
      Ue.setExtraStackFrame = function(h) {
        Kt = h;
      }, Ue.getCurrentStack = null, Ue.getStackAddendum = function() {
        var h = "";
        Kt && (h += Kt);
        var C = Ue.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Nt = !1, Et = !1, En = !1, Ye = !1, at = !1, Qt = {
        ReactCurrentDispatcher: Be,
        ReactCurrentBatchConfig: rt,
        ReactCurrentOwner: Xe
      };
      Qt.ReactDebugCurrentFrame = Ue, Qt.ReactCurrentActQueue = Re;
      function gt(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), U = 1; U < C; U++)
            M[U - 1] = arguments[U];
          G("warn", h, M);
        }
      }
      function ve(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), U = 1; U < C; U++)
            M[U - 1] = arguments[U];
          G("error", h, M);
        }
      }
      function G(h, C, M) {
        {
          var U = Qt.ReactDebugCurrentFrame, Q = U.getStackAddendum();
          Q !== "" && (C += "%s", M = M.concat([Q]));
          var _e = M.map(function(Z) {
            return String(Z);
          });
          _e.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, _e);
        }
      }
      var Ee = {};
      function T(h, C) {
        {
          var M = h.constructor, U = M && (M.displayName || M.name) || "ReactClass", Q = U + "." + C;
          if (Ee[Q])
            return;
          ve("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, U), Ee[Q] = !0;
        }
      }
      var B = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, M) {
          T(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, M, U) {
          T(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, M, U) {
          T(h, "setState");
        }
      }, ae = Object.assign, Ve = {};
      Object.freeze(Ve);
      function Me(h, C, M) {
        this.props = h, this.context = C, this.refs = Ve, this.updater = M || B;
      }
      Me.prototype.isReactComponent = {}, Me.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Me.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ft = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Ke = function(h, C) {
          Object.defineProperty(Me.prototype, h, {
            get: function() {
              gt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var dt in ft)
          ft.hasOwnProperty(dt) && Ke(dt, ft[dt]);
      }
      function et() {
      }
      et.prototype = Me.prototype;
      function zt(h, C, M) {
        this.props = h, this.context = C, this.refs = Ve, this.updater = M || B;
      }
      var ci = zt.prototype = new et();
      ci.constructor = zt, ae(ci, Me.prototype), ci.isPureReactComponent = !0;
      function Er() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var ba = Array.isArray;
      function cn(h) {
        return ba(h);
      }
      function Zn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, M = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return M;
        }
      }
      function Cr(h) {
        try {
          return Tr(h), !1;
        } catch {
          return !0;
        }
      }
      function Tr(h) {
        return "" + h;
      }
      function kn(h) {
        if (Cr(h))
          return ve("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Zn(h)), Tr(h);
      }
      function _a(h, C, M) {
        var U = h.displayName;
        if (U)
          return U;
        var Q = C.displayName || C.name || "";
        return Q !== "" ? M + "(" + Q + ")" : M;
      }
      function fi(h) {
        return h.displayName || "Context";
      }
      function Jn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && ve("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case qe:
            return "Fragment";
          case Ft:
            return "Portal";
          case hn:
            return "Profiler";
          case E:
            return "StrictMode";
          case oe:
            return "Suspense";
          case ge:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case me:
              var C = h;
              return fi(C) + ".Consumer";
            case Oe:
              var M = h;
              return fi(M._context) + ".Provider";
            case jt:
              return _a(h, h.render, "ForwardRef");
            case ue:
              var U = h.displayName || null;
              return U !== null ? U : Jn(h.type) || "Memo";
            case Fe: {
              var Q = h, _e = Q._payload, Z = Q._init;
              try {
                return Jn(Z(_e));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Rr = Object.prototype.hasOwnProperty, Ya = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, wr, Da, xr;
      xr = {};
      function ka(h) {
        if (Rr.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function Fn(h) {
        if (Rr.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Yr(h, C) {
        var M = function() {
          wr || (wr = !0, ve("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: M,
          configurable: !0
        });
      }
      function Ul(h, C) {
        var M = function() {
          Da || (Da = !0, ve("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: M,
          configurable: !0
        });
      }
      function Ia(h) {
        if (typeof h.ref == "string" && Xe.current && h.__self && Xe.current.stateNode !== h.__self) {
          var C = Jn(Xe.current.type);
          xr[C] || (ve('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), xr[C] = !0);
        }
      }
      var K = function(h, C, M, U, Q, _e, Z) {
        var xe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Ht,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: M,
          props: Z,
          // Record the component responsible for creating this element.
          _owner: _e
        };
        return xe._store = {}, Object.defineProperty(xe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(xe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: U
        }), Object.defineProperty(xe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Q
        }), Object.freeze && (Object.freeze(xe.props), Object.freeze(xe)), xe;
      };
      function Ce(h, C, M) {
        var U, Q = {}, _e = null, Z = null, xe = null, We = null;
        if (C != null) {
          ka(C) && (Z = C.ref, Ia(C)), Fn(C) && (kn(C.key), _e = "" + C.key), xe = C.__self === void 0 ? null : C.__self, We = C.__source === void 0 ? null : C.__source;
          for (U in C)
            Rr.call(C, U) && !Ya.hasOwnProperty(U) && (Q[U] = C[U]);
        }
        var ct = arguments.length - 2;
        if (ct === 1)
          Q.children = M;
        else if (ct > 1) {
          for (var kt = Array(ct), xt = 0; xt < ct; xt++)
            kt[xt] = arguments[xt + 2];
          Object.freeze && Object.freeze(kt), Q.children = kt;
        }
        if (h && h.defaultProps) {
          var Ot = h.defaultProps;
          for (U in Ot)
            Q[U] === void 0 && (Q[U] = Ot[U]);
        }
        if (_e || Z) {
          var At = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          _e && Yr(Q, At), Z && Ul(Q, At);
        }
        return K(h, _e, Z, xe, We, Xe.current, Q);
      }
      function Ie(h, C) {
        var M = K(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return M;
      }
      function wt(h, C, M) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var U, Q = ae({}, h.props), _e = h.key, Z = h.ref, xe = h._self, We = h._source, ct = h._owner;
        if (C != null) {
          ka(C) && (Z = C.ref, ct = Xe.current), Fn(C) && (kn(C.key), _e = "" + C.key);
          var kt;
          h.type && h.type.defaultProps && (kt = h.type.defaultProps);
          for (U in C)
            Rr.call(C, U) && !Ya.hasOwnProperty(U) && (C[U] === void 0 && kt !== void 0 ? Q[U] = kt[U] : Q[U] = C[U]);
        }
        var xt = arguments.length - 2;
        if (xt === 1)
          Q.children = M;
        else if (xt > 1) {
          for (var Ot = Array(xt), At = 0; At < xt; At++)
            Ot[At] = arguments[At + 2];
          Q.children = Ot;
        }
        return K(h.type, _e, Z, xe, We, ct, Q);
      }
      function bt(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Ht;
      }
      var Cn = ".", fn = ":";
      function br(h) {
        var C = /[=:]/g, M = {
          "=": "=0",
          ":": "=2"
        }, U = h.replace(C, function(Q) {
          return M[Q];
        });
        return "$" + U;
      }
      var Vt = !1, ra = /\/+/g;
      function Zt(h) {
        return h.replace(ra, "$&/");
      }
      function Ut(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (kn(h.key), br("" + h.key)) : C.toString(36);
      }
      function Al(h, C, M, U, Q) {
        var _e = typeof h;
        (_e === "undefined" || _e === "boolean") && (h = null);
        var Z = !1;
        if (h === null)
          Z = !0;
        else
          switch (_e) {
            case "string":
            case "number":
              Z = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Ht:
                case Ft:
                  Z = !0;
              }
          }
        if (Z) {
          var xe = h, We = Q(xe), ct = U === "" ? Cn + Ut(xe, 0) : U;
          if (cn(We)) {
            var kt = "";
            ct != null && (kt = Zt(ct) + "/"), Al(We, C, kt, "", function(jf) {
              return jf;
            });
          } else
            We != null && (bt(We) && (We.key && (!xe || xe.key !== We.key) && kn(We.key), We = Ie(
              We,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              M + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (We.key && (!xe || xe.key !== We.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Zt("" + We.key) + "/"
              ) : "") + ct
            )), C.push(We));
          return 1;
        }
        var xt, Ot, At = 0, tt = U === "" ? Cn : U + fn;
        if (cn(h))
          for (var hi = 0; hi < h.length; hi++)
            xt = h[hi], Ot = tt + Ut(xt, hi), At += Al(xt, C, M, Ot, Q);
        else {
          var Vu = Xt(h);
          if (typeof Vu == "function") {
            var Po = h;
            Vu === Po.entries && (Vt || gt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Vt = !0);
            for (var Ff = Vu.call(Po), Ua, $o = 0; !(Ua = Ff.next()).done; )
              xt = Ua.value, Ot = tt + Ut(xt, $o++), At += Al(xt, C, M, Ot, Q);
          } else if (_e === "object") {
            var Yo = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (Yo === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : Yo) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return At;
      }
      function di(h, C, M) {
        if (h == null)
          return h;
        var U = [], Q = 0;
        return Al(h, U, "", "", function(_e) {
          return C.call(M, _e, Q++);
        }), U;
      }
      function _u(h) {
        var C = 0;
        return di(h, function() {
          C++;
        }), C;
      }
      function Ps(h, C, M) {
        di(h, function() {
          C.apply(this, arguments);
        }, M);
      }
      function $s(h) {
        return di(h, function(C) {
          return C;
        }) || [];
      }
      function Du(h) {
        if (!bt(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function Uo(h) {
        var C = {
          $$typeof: me,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: Oe,
          _context: C
        };
        var M = !1, U = !1, Q = !1;
        {
          var _e = {
            $$typeof: me,
            _context: C
          };
          Object.defineProperties(_e, {
            Provider: {
              get: function() {
                return U || (U = !0, ve("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(Z) {
                C.Provider = Z;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(Z) {
                C._currentValue = Z;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(Z) {
                C._currentValue2 = Z;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(Z) {
                C._threadCount = Z;
              }
            },
            Consumer: {
              get: function() {
                return M || (M = !0, ve("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(Z) {
                Q || (gt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Z), Q = !0);
              }
            }
          }), C.Consumer = _e;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var Oa = -1, Pi = 0, Qa = 1, $i = 2;
      function Ir(h) {
        if (h._status === Oa) {
          var C = h._result, M = C();
          if (M.then(function(_e) {
            if (h._status === Pi || h._status === Oa) {
              var Z = h;
              Z._status = Qa, Z._result = _e;
            }
          }, function(_e) {
            if (h._status === Pi || h._status === Oa) {
              var Z = h;
              Z._status = $i, Z._result = _e;
            }
          }), h._status === Oa) {
            var U = h;
            U._status = Pi, U._result = M;
          }
        }
        if (h._status === Qa) {
          var Q = h._result;
          return Q === void 0 && ve(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Q), "default" in Q || ve(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Q), Q.default;
        } else
          throw h._result;
      }
      function La(h) {
        var C = {
          // We use these fields to store the result.
          _status: Oa,
          _result: h
        }, M = {
          $$typeof: Fe,
          _payload: C,
          _init: Ir
        };
        {
          var U, Q;
          Object.defineProperties(M, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return U;
              },
              set: function(_e) {
                ve("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), U = _e, Object.defineProperty(M, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Q;
              },
              set: function(_e) {
                ve("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Q = _e, Object.defineProperty(M, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return M;
      }
      function Yi(h) {
        h != null && h.$$typeof === ue ? ve("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? ve("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && ve("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && ve("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: jt,
          render: h
        };
        {
          var M;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return M;
            },
            set: function(U) {
              M = U, !h.name && !h.displayName && (h.displayName = U);
            }
          });
        }
        return C;
      }
      var Ii;
      Ii = Symbol.for("react.module.reference");
      function ku(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === qe || h === hn || at || h === E || h === oe || h === ge || Ye || h === vt || Nt || Et || En || typeof h == "object" && h !== null && (h.$$typeof === Fe || h.$$typeof === ue || h.$$typeof === Oe || h.$$typeof === me || h.$$typeof === jt || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === Ii || h.getModuleId !== void 0));
      }
      function Ao(h, C) {
        ku(h) || ve("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var M = {
          $$typeof: ue,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var U;
          Object.defineProperty(M, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return U;
            },
            set: function(Q) {
              U = Q, !h.name && !h.displayName && (h.displayName = Q);
            }
          });
        }
        return M;
      }
      function an() {
        var h = Be.current;
        return h === null && ve(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function aa(h) {
        var C = an();
        if (h._context !== void 0) {
          var M = h._context;
          M.Consumer === h ? ve("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : M.Provider === h && ve("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Hl(h) {
        var C = an();
        return C.useState(h);
      }
      function Qi(h, C, M) {
        var U = an();
        return U.useReducer(h, C, M);
      }
      function jn(h) {
        var C = an();
        return C.useRef(h);
      }
      function Ys(h, C) {
        var M = an();
        return M.useEffect(h, C);
      }
      function Is(h, C) {
        var M = an();
        return M.useInsertionEffect(h, C);
      }
      function Ho(h, C) {
        var M = an();
        return M.useLayoutEffect(h, C);
      }
      function Qs(h, C) {
        var M = an();
        return M.useCallback(h, C);
      }
      function zf(h, C) {
        var M = an();
        return M.useMemo(h, C);
      }
      function Uf(h, C, M) {
        var U = an();
        return U.useImperativeHandle(h, C, M);
      }
      function Wt(h, C) {
        {
          var M = an();
          return M.useDebugValue(h, C);
        }
      }
      function Af() {
        var h = an();
        return h.useTransition();
      }
      function Ma(h) {
        var C = an();
        return C.useDeferredValue(h);
      }
      function Qe() {
        var h = an();
        return h.useId();
      }
      function Wa(h, C, M) {
        var U = an();
        return U.useSyncExternalStore(h, C, M);
      }
      var Wi = 0, Ou, Gi, _r, Fo, ur, jo, Vo;
      function Ws() {
      }
      Ws.__reactDisabledLog = !0;
      function Lu() {
        {
          if (Wi === 0) {
            Ou = console.log, Gi = console.info, _r = console.warn, Fo = console.error, ur = console.group, jo = console.groupCollapsed, Vo = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Ws,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          Wi++;
        }
      }
      function qi() {
        {
          if (Wi--, Wi === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: ae({}, h, {
                value: Ou
              }),
              info: ae({}, h, {
                value: Gi
              }),
              warn: ae({}, h, {
                value: _r
              }),
              error: ae({}, h, {
                value: Fo
              }),
              group: ae({}, h, {
                value: ur
              }),
              groupCollapsed: ae({}, h, {
                value: jo
              }),
              groupEnd: ae({}, h, {
                value: Vo
              })
            });
          }
          Wi < 0 && ve("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Na = Qt.ReactCurrentDispatcher, or;
      function Xi(h, C, M) {
        {
          if (or === void 0)
            try {
              throw Error();
            } catch (Q) {
              var U = Q.stack.trim().match(/\n( *(at )?)/);
              or = U && U[1] || "";
            }
          return `
` + or + h;
        }
      }
      var Ki = !1, Zi;
      {
        var Mu = typeof WeakMap == "function" ? WeakMap : Map;
        Zi = new Mu();
      }
      function Nu(h, C) {
        if (!h || Ki)
          return "";
        {
          var M = Zi.get(h);
          if (M !== void 0)
            return M;
        }
        var U;
        Ki = !0;
        var Q = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var _e;
        _e = Na.current, Na.current = null, Lu();
        try {
          if (C) {
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
              } catch (tt) {
                U = tt;
              }
              Reflect.construct(h, [], Z);
            } else {
              try {
                Z.call();
              } catch (tt) {
                U = tt;
              }
              h.call(Z.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (tt) {
              U = tt;
            }
            h();
          }
        } catch (tt) {
          if (tt && U && typeof tt.stack == "string") {
            for (var xe = tt.stack.split(`
`), We = U.stack.split(`
`), ct = xe.length - 1, kt = We.length - 1; ct >= 1 && kt >= 0 && xe[ct] !== We[kt]; )
              kt--;
            for (; ct >= 1 && kt >= 0; ct--, kt--)
              if (xe[ct] !== We[kt]) {
                if (ct !== 1 || kt !== 1)
                  do
                    if (ct--, kt--, kt < 0 || xe[ct] !== We[kt]) {
                      var xt = `
` + xe[ct].replace(" at new ", " at ");
                      return h.displayName && xt.includes("<anonymous>") && (xt = xt.replace("<anonymous>", h.displayName)), typeof h == "function" && Zi.set(h, xt), xt;
                    }
                  while (ct >= 1 && kt >= 0);
                break;
              }
          }
        } finally {
          Ki = !1, Na.current = _e, qi(), Error.prepareStackTrace = Q;
        }
        var Ot = h ? h.displayName || h.name : "", At = Ot ? Xi(Ot) : "";
        return typeof h == "function" && Zi.set(h, At), At;
      }
      function pi(h, C, M) {
        return Nu(h, !1);
      }
      function Hf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Ga(h, C, M) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Nu(h, Hf(h));
        if (typeof h == "string")
          return Xi(h);
        switch (h) {
          case oe:
            return Xi("Suspense");
          case ge:
            return Xi("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case jt:
              return pi(h.render);
            case ue:
              return Ga(h.type, C, M);
            case Fe: {
              var U = h, Q = U._payload, _e = U._init;
              try {
                return Ga(_e(Q), C, M);
              } catch {
              }
            }
          }
        return "";
      }
      var ht = {}, zu = Qt.ReactDebugCurrentFrame;
      function Fl(h) {
        if (h) {
          var C = h._owner, M = Ga(h.type, h._source, C ? C.type : null);
          zu.setExtraStackFrame(M);
        } else
          zu.setExtraStackFrame(null);
      }
      function Uu(h, C, M, U, Q) {
        {
          var _e = Function.call.bind(Rr);
          for (var Z in h)
            if (_e(h, Z)) {
              var xe = void 0;
              try {
                if (typeof h[Z] != "function") {
                  var We = Error((U || "React class") + ": " + M + " type `" + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[Z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw We.name = "Invariant Violation", We;
                }
                xe = h[Z](C, Z, U, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ct) {
                xe = ct;
              }
              xe && !(xe instanceof Error) && (Fl(Q), ve("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", U || "React class", M, Z, typeof xe), Fl(null)), xe instanceof Error && !(xe.message in ht) && (ht[xe.message] = !0, Fl(Q), ve("Failed %s type: %s", M, xe.message), Fl(null));
            }
        }
      }
      function st(h) {
        if (h) {
          var C = h._owner, M = Ga(h.type, h._source, C ? C.type : null);
          Dn(M);
        } else
          Dn(null);
      }
      var Au;
      Au = !1;
      function Hu() {
        if (Xe.current) {
          var h = Jn(Xe.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Ae(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), M = h.lineNumber;
          return `

Check your code at ` + C + ":" + M + ".";
        }
        return "";
      }
      function jl(h) {
        return h != null ? Ae(h.__source) : "";
      }
      var Jt = {};
      function Dr(h) {
        var C = Hu();
        if (!C) {
          var M = typeof h == "string" ? h : h.displayName || h.name;
          M && (C = `

Check the top-level render call using <` + M + ">.");
        }
        return C;
      }
      function sr(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var M = Dr(C);
          if (!Jt[M]) {
            Jt[M] = !0;
            var U = "";
            h && h._owner && h._owner !== Xe.current && (U = " It was passed a child from " + Jn(h._owner.type) + "."), st(h), ve('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, U), st(null);
          }
        }
      }
      function Ji(h, C) {
        if (typeof h == "object") {
          if (cn(h))
            for (var M = 0; M < h.length; M++) {
              var U = h[M];
              bt(U) && sr(U, C);
            }
          else if (bt(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var Q = Xt(h);
            if (typeof Q == "function" && Q !== h.entries)
              for (var _e = Q.call(h), Z; !(Z = _e.next()).done; )
                bt(Z.value) && sr(Z.value, C);
          }
        }
      }
      function ln(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var M;
          if (typeof C == "function")
            M = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === jt || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ue))
            M = C.propTypes;
          else
            return;
          if (M) {
            var U = Jn(C);
            Uu(M, h.props, "prop", U, h);
          } else if (C.PropTypes !== void 0 && !Au) {
            Au = !0;
            var Q = Jn(C);
            ve("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Q || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && ve("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ct(h) {
        {
          for (var C = Object.keys(h.props), M = 0; M < C.length; M++) {
            var U = C[M];
            if (U !== "children" && U !== "key") {
              st(h), ve("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", U), st(null);
              break;
            }
          }
          h.ref !== null && (st(h), ve("Invalid attribute `ref` supplied to `React.Fragment`."), st(null));
        }
      }
      function Gs(h, C, M) {
        var U = ku(h);
        if (!U) {
          var Q = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (Q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _e = jl(C);
          _e ? Q += _e : Q += Hu();
          var Z;
          h === null ? Z = "null" : cn(h) ? Z = "array" : h !== void 0 && h.$$typeof === Ht ? (Z = "<" + (Jn(h.type) || "Unknown") + " />", Q = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof h, ve("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, Q);
        }
        var xe = Ce.apply(this, arguments);
        if (xe == null)
          return xe;
        if (U)
          for (var We = 2; We < arguments.length; We++)
            Ji(arguments[We], h);
        return h === qe ? Ct(xe) : ln(xe), xe;
      }
      var kr = !1;
      function On(h) {
        var C = Gs.bind(null, h);
        return C.type = h, kr || (kr = !0, gt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return gt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function qa(h, C, M) {
        for (var U = wt.apply(this, arguments), Q = 2; Q < arguments.length; Q++)
          Ji(arguments[Q], U.type);
        return ln(U), U;
      }
      function qs(h, C) {
        var M = rt.transition;
        rt.transition = {};
        var U = rt.transition;
        rt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (rt.transition = M, M === null && U._updatedFibers) {
            var Q = U._updatedFibers.size;
            Q > 10 && gt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), U._updatedFibers.clear();
          }
        }
      }
      var vi = !1, el = null;
      function Xs(h) {
        if (el === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), M = ee && ee[C];
            el = M.call(ee, "timers").setImmediate;
          } catch {
            el = function(Q) {
              vi === !1 && (vi = !0, typeof MessageChannel > "u" && ve("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var _e = new MessageChannel();
              _e.port1.onmessage = Q, _e.port2.postMessage(void 0);
            };
          }
        return el(h);
      }
      var ia = 0, tl = !1;
      function nl(h) {
        {
          var C = ia;
          ia++, Re.current === null && (Re.current = []);
          var M = Re.isBatchingLegacy, U;
          try {
            if (Re.isBatchingLegacy = !0, U = h(), !M && Re.didScheduleLegacyUpdate) {
              var Q = Re.current;
              Q !== null && (Re.didScheduleLegacyUpdate = !1, al(Q));
            }
          } catch (Ot) {
            throw la(C), Ot;
          } finally {
            Re.isBatchingLegacy = M;
          }
          if (U !== null && typeof U == "object" && typeof U.then == "function") {
            var _e = U, Z = !1, xe = {
              then: function(Ot, At) {
                Z = !0, _e.then(function(tt) {
                  la(C), ia === 0 ? Fu(tt, Ot, At) : Ot(tt);
                }, function(tt) {
                  la(C), At(tt);
                });
              }
            };
            return !tl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Z || (tl = !0, ve("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), xe;
          } else {
            var We = U;
            if (la(C), ia === 0) {
              var ct = Re.current;
              ct !== null && (al(ct), Re.current = null);
              var kt = {
                then: function(Ot, At) {
                  Re.current === null ? (Re.current = [], Fu(We, Ot, At)) : Ot(We);
                }
              };
              return kt;
            } else {
              var xt = {
                then: function(Ot, At) {
                  Ot(We);
                }
              };
              return xt;
            }
          }
        }
      }
      function la(h) {
        h !== ia - 1 && ve("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ia = h;
      }
      function Fu(h, C, M) {
        {
          var U = Re.current;
          if (U !== null)
            try {
              al(U), Xs(function() {
                U.length === 0 ? (Re.current = null, C(h)) : Fu(h, C, M);
              });
            } catch (Q) {
              M(Q);
            }
          else
            C(h);
        }
      }
      var rl = !1;
      function al(h) {
        if (!rl) {
          rl = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var M = h[C];
              do
                M = M(!0);
              while (M !== null);
            }
            h.length = 0;
          } catch (U) {
            throw h = h.slice(C + 1), U;
          } finally {
            rl = !1;
          }
        }
      }
      var Vl = Gs, ju = qa, Bo = On, za = {
        map: di,
        forEach: Ps,
        count: _u,
        toArray: $s,
        only: Du
      };
      J.Children = za, J.Component = Me, J.Fragment = qe, J.Profiler = hn, J.PureComponent = zt, J.StrictMode = E, J.Suspense = oe, J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qt, J.cloneElement = ju, J.createContext = Uo, J.createElement = Vl, J.createFactory = Bo, J.createRef = Er, J.forwardRef = Yi, J.isValidElement = bt, J.lazy = La, J.memo = Ao, J.startTransition = qs, J.unstable_act = nl, J.useCallback = Qs, J.useContext = aa, J.useDebugValue = Wt, J.useDeferredValue = Ma, J.useEffect = Ys, J.useId = Qe, J.useImperativeHandle = Uf, J.useInsertionEffect = Is, J.useLayoutEffect = Ho, J.useMemo = zf, J.useReducer = Qi, J.useRef = jn, J.useState = Hl, J.useSyncExternalStore = Wa, J.useTransition = Af, J.version = A, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Ip, Ip.exports)), Ip.exports;
}
process.env.NODE_ENV === "production" ? l0.exports = V_() : l0.exports = B_();
var Mm = l0.exports;
const P_ = /* @__PURE__ */ q1(Mm), Z_ = /* @__PURE__ */ X1({
  __proto__: null,
  default: P_
}, [Mm]);
var u0 = { exports: {} }, wa = {}, Lm = { exports: {} }, a0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Y1;
function $_() {
  return Y1 || (Y1 = 1, function(ee) {
    function J(G, Ee) {
      var T = G.length;
      G.push(Ee);
      e:
        for (; 0 < T; ) {
          var B = T - 1 >>> 1, ae = G[B];
          if (0 < Ft(ae, Ee))
            G[B] = Ee, G[T] = ae, T = B;
          else
            break e;
        }
    }
    function A(G) {
      return G.length === 0 ? null : G[0];
    }
    function Ht(G) {
      if (G.length === 0)
        return null;
      var Ee = G[0], T = G.pop();
      if (T !== Ee) {
        G[0] = T;
        e:
          for (var B = 0, ae = G.length, Ve = ae >>> 1; B < Ve; ) {
            var Me = 2 * (B + 1) - 1, ft = G[Me], Ke = Me + 1, dt = G[Ke];
            if (0 > Ft(ft, T))
              Ke < ae && 0 > Ft(dt, ft) ? (G[B] = dt, G[Ke] = T, B = Ke) : (G[B] = ft, G[Me] = T, B = Me);
            else if (Ke < ae && 0 > Ft(dt, T))
              G[B] = dt, G[Ke] = T, B = Ke;
            else
              break e;
          }
      }
      return Ee;
    }
    function Ft(G, Ee) {
      var T = G.sortIndex - Ee.sortIndex;
      return T !== 0 ? T : G.id - Ee.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var qe = performance;
      ee.unstable_now = function() {
        return qe.now();
      };
    } else {
      var E = Date, hn = E.now();
      ee.unstable_now = function() {
        return E.now() - hn;
      };
    }
    var Oe = [], me = [], jt = 1, oe = null, ge = 3, ue = !1, Fe = !1, vt = !1, nt = typeof setTimeout == "function" ? setTimeout : null, Kn = typeof clearTimeout == "function" ? clearTimeout : null, Xt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Be(G) {
      for (var Ee = A(me); Ee !== null; ) {
        if (Ee.callback === null)
          Ht(me);
        else if (Ee.startTime <= G)
          Ht(me), Ee.sortIndex = Ee.expirationTime, J(Oe, Ee);
        else
          break;
        Ee = A(me);
      }
    }
    function rt(G) {
      if (vt = !1, Be(G), !Fe)
        if (A(Oe) !== null)
          Fe = !0, gt(Re);
        else {
          var Ee = A(me);
          Ee !== null && ve(rt, Ee.startTime - G);
        }
    }
    function Re(G, Ee) {
      Fe = !1, vt && (vt = !1, Kn(Kt), Kt = -1), ue = !0;
      var T = ge;
      try {
        for (Be(Ee), oe = A(Oe); oe !== null && (!(oe.expirationTime > Ee) || G && !Et()); ) {
          var B = oe.callback;
          if (typeof B == "function") {
            oe.callback = null, ge = oe.priorityLevel;
            var ae = B(oe.expirationTime <= Ee);
            Ee = ee.unstable_now(), typeof ae == "function" ? oe.callback = ae : oe === A(Oe) && Ht(Oe), Be(Ee);
          } else
            Ht(Oe);
          oe = A(Oe);
        }
        if (oe !== null)
          var Ve = !0;
        else {
          var Me = A(me);
          Me !== null && ve(rt, Me.startTime - Ee), Ve = !1;
        }
        return Ve;
      } finally {
        oe = null, ge = T, ue = !1;
      }
    }
    var Xe = !1, Ue = null, Kt = -1, Dn = 5, Nt = -1;
    function Et() {
      return !(ee.unstable_now() - Nt < Dn);
    }
    function En() {
      if (Ue !== null) {
        var G = ee.unstable_now();
        Nt = G;
        var Ee = !0;
        try {
          Ee = Ue(!0, G);
        } finally {
          Ee ? Ye() : (Xe = !1, Ue = null);
        }
      } else
        Xe = !1;
    }
    var Ye;
    if (typeof Xt == "function")
      Ye = function() {
        Xt(En);
      };
    else if (typeof MessageChannel < "u") {
      var at = new MessageChannel(), Qt = at.port2;
      at.port1.onmessage = En, Ye = function() {
        Qt.postMessage(null);
      };
    } else
      Ye = function() {
        nt(En, 0);
      };
    function gt(G) {
      Ue = G, Xe || (Xe = !0, Ye());
    }
    function ve(G, Ee) {
      Kt = nt(function() {
        G(ee.unstable_now());
      }, Ee);
    }
    ee.unstable_IdlePriority = 5, ee.unstable_ImmediatePriority = 1, ee.unstable_LowPriority = 4, ee.unstable_NormalPriority = 3, ee.unstable_Profiling = null, ee.unstable_UserBlockingPriority = 2, ee.unstable_cancelCallback = function(G) {
      G.callback = null;
    }, ee.unstable_continueExecution = function() {
      Fe || ue || (Fe = !0, gt(Re));
    }, ee.unstable_forceFrameRate = function(G) {
      0 > G || 125 < G ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Dn = 0 < G ? Math.floor(1e3 / G) : 5;
    }, ee.unstable_getCurrentPriorityLevel = function() {
      return ge;
    }, ee.unstable_getFirstCallbackNode = function() {
      return A(Oe);
    }, ee.unstable_next = function(G) {
      switch (ge) {
        case 1:
        case 2:
        case 3:
          var Ee = 3;
          break;
        default:
          Ee = ge;
      }
      var T = ge;
      ge = Ee;
      try {
        return G();
      } finally {
        ge = T;
      }
    }, ee.unstable_pauseExecution = function() {
    }, ee.unstable_requestPaint = function() {
    }, ee.unstable_runWithPriority = function(G, Ee) {
      switch (G) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          G = 3;
      }
      var T = ge;
      ge = G;
      try {
        return Ee();
      } finally {
        ge = T;
      }
    }, ee.unstable_scheduleCallback = function(G, Ee, T) {
      var B = ee.unstable_now();
      switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? B + T : B) : T = B, G) {
        case 1:
          var ae = -1;
          break;
        case 2:
          ae = 250;
          break;
        case 5:
          ae = 1073741823;
          break;
        case 4:
          ae = 1e4;
          break;
        default:
          ae = 5e3;
      }
      return ae = T + ae, G = { id: jt++, callback: Ee, priorityLevel: G, startTime: T, expirationTime: ae, sortIndex: -1 }, T > B ? (G.sortIndex = T, J(me, G), A(Oe) === null && G === A(me) && (vt ? (Kn(Kt), Kt = -1) : vt = !0, ve(rt, T - B))) : (G.sortIndex = ae, J(Oe, G), Fe || ue || (Fe = !0, gt(Re))), G;
    }, ee.unstable_shouldYield = Et, ee.unstable_wrapCallback = function(G) {
      var Ee = ge;
      return function() {
        var T = ge;
        ge = Ee;
        try {
          return G.apply(this, arguments);
        } finally {
          ge = T;
        }
      };
    };
  }(a0)), a0;
}
var i0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I1;
function Y_() {
  return I1 || (I1 = 1, function(ee) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var J = !1, A = !1, Ht = 5;
      function Ft(K, Ce) {
        var Ie = K.length;
        K.push(Ce), hn(K, Ce, Ie);
      }
      function qe(K) {
        return K.length === 0 ? null : K[0];
      }
      function E(K) {
        if (K.length === 0)
          return null;
        var Ce = K[0], Ie = K.pop();
        return Ie !== Ce && (K[0] = Ie, Oe(K, Ie, 0)), Ce;
      }
      function hn(K, Ce, Ie) {
        for (var wt = Ie; wt > 0; ) {
          var bt = wt - 1 >>> 1, Cn = K[bt];
          if (me(Cn, Ce) > 0)
            K[bt] = Ce, K[wt] = Cn, wt = bt;
          else
            return;
        }
      }
      function Oe(K, Ce, Ie) {
        for (var wt = Ie, bt = K.length, Cn = bt >>> 1; wt < Cn; ) {
          var fn = (wt + 1) * 2 - 1, br = K[fn], Vt = fn + 1, ra = K[Vt];
          if (me(br, Ce) < 0)
            Vt < bt && me(ra, br) < 0 ? (K[wt] = ra, K[Vt] = Ce, wt = Vt) : (K[wt] = br, K[fn] = Ce, wt = fn);
          else if (Vt < bt && me(ra, Ce) < 0)
            K[wt] = ra, K[Vt] = Ce, wt = Vt;
          else
            return;
        }
      }
      function me(K, Ce) {
        var Ie = K.sortIndex - Ce.sortIndex;
        return Ie !== 0 ? Ie : K.id - Ce.id;
      }
      var jt = 1, oe = 2, ge = 3, ue = 4, Fe = 5;
      function vt(K, Ce) {
      }
      var nt = typeof performance == "object" && typeof performance.now == "function";
      if (nt) {
        var Kn = performance;
        ee.unstable_now = function() {
          return Kn.now();
        };
      } else {
        var Xt = Date, Be = Xt.now();
        ee.unstable_now = function() {
          return Xt.now() - Be;
        };
      }
      var rt = 1073741823, Re = -1, Xe = 250, Ue = 5e3, Kt = 1e4, Dn = rt, Nt = [], Et = [], En = 1, Ye = null, at = ge, Qt = !1, gt = !1, ve = !1, G = typeof setTimeout == "function" ? setTimeout : null, Ee = typeof clearTimeout == "function" ? clearTimeout : null, T = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function B(K) {
        for (var Ce = qe(Et); Ce !== null; ) {
          if (Ce.callback === null)
            E(Et);
          else if (Ce.startTime <= K)
            E(Et), Ce.sortIndex = Ce.expirationTime, Ft(Nt, Ce);
          else
            return;
          Ce = qe(Et);
        }
      }
      function ae(K) {
        if (ve = !1, B(K), !gt)
          if (qe(Nt) !== null)
            gt = !0, ka(Ve);
          else {
            var Ce = qe(Et);
            Ce !== null && Fn(ae, Ce.startTime - K);
          }
      }
      function Ve(K, Ce) {
        gt = !1, ve && (ve = !1, Yr()), Qt = !0;
        var Ie = at;
        try {
          var wt;
          if (!A)
            return Me(K, Ce);
        } finally {
          Ye = null, at = Ie, Qt = !1;
        }
      }
      function Me(K, Ce) {
        var Ie = Ce;
        for (B(Ie), Ye = qe(Nt); Ye !== null && !J && !(Ye.expirationTime > Ie && (!K || fi())); ) {
          var wt = Ye.callback;
          if (typeof wt == "function") {
            Ye.callback = null, at = Ye.priorityLevel;
            var bt = Ye.expirationTime <= Ie, Cn = wt(bt);
            Ie = ee.unstable_now(), typeof Cn == "function" ? Ye.callback = Cn : Ye === qe(Nt) && E(Nt), B(Ie);
          } else
            E(Nt);
          Ye = qe(Nt);
        }
        if (Ye !== null)
          return !0;
        var fn = qe(Et);
        return fn !== null && Fn(ae, fn.startTime - Ie), !1;
      }
      function ft(K, Ce) {
        switch (K) {
          case jt:
          case oe:
          case ge:
          case ue:
          case Fe:
            break;
          default:
            K = ge;
        }
        var Ie = at;
        at = K;
        try {
          return Ce();
        } finally {
          at = Ie;
        }
      }
      function Ke(K) {
        var Ce;
        switch (at) {
          case jt:
          case oe:
          case ge:
            Ce = ge;
            break;
          default:
            Ce = at;
            break;
        }
        var Ie = at;
        at = Ce;
        try {
          return K();
        } finally {
          at = Ie;
        }
      }
      function dt(K) {
        var Ce = at;
        return function() {
          var Ie = at;
          at = Ce;
          try {
            return K.apply(this, arguments);
          } finally {
            at = Ie;
          }
        };
      }
      function et(K, Ce, Ie) {
        var wt = ee.unstable_now(), bt;
        if (typeof Ie == "object" && Ie !== null) {
          var Cn = Ie.delay;
          typeof Cn == "number" && Cn > 0 ? bt = wt + Cn : bt = wt;
        } else
          bt = wt;
        var fn;
        switch (K) {
          case jt:
            fn = Re;
            break;
          case oe:
            fn = Xe;
            break;
          case Fe:
            fn = Dn;
            break;
          case ue:
            fn = Kt;
            break;
          case ge:
          default:
            fn = Ue;
            break;
        }
        var br = bt + fn, Vt = {
          id: En++,
          callback: Ce,
          priorityLevel: K,
          startTime: bt,
          expirationTime: br,
          sortIndex: -1
        };
        return bt > wt ? (Vt.sortIndex = bt, Ft(Et, Vt), qe(Nt) === null && Vt === qe(Et) && (ve ? Yr() : ve = !0, Fn(ae, bt - wt))) : (Vt.sortIndex = br, Ft(Nt, Vt), !gt && !Qt && (gt = !0, ka(Ve))), Vt;
      }
      function zt() {
      }
      function ci() {
        !gt && !Qt && (gt = !0, ka(Ve));
      }
      function Er() {
        return qe(Nt);
      }
      function ba(K) {
        K.callback = null;
      }
      function cn() {
        return at;
      }
      var Zn = !1, Cr = null, Tr = -1, kn = Ht, _a = -1;
      function fi() {
        var K = ee.unstable_now() - _a;
        return !(K < kn);
      }
      function Jn() {
      }
      function Rr(K) {
        if (K < 0 || K > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        K > 0 ? kn = Math.floor(1e3 / K) : kn = Ht;
      }
      var Ya = function() {
        if (Cr !== null) {
          var K = ee.unstable_now();
          _a = K;
          var Ce = !0, Ie = !0;
          try {
            Ie = Cr(Ce, K);
          } finally {
            Ie ? wr() : (Zn = !1, Cr = null);
          }
        } else
          Zn = !1;
      }, wr;
      if (typeof T == "function")
        wr = function() {
          T(Ya);
        };
      else if (typeof MessageChannel < "u") {
        var Da = new MessageChannel(), xr = Da.port2;
        Da.port1.onmessage = Ya, wr = function() {
          xr.postMessage(null);
        };
      } else
        wr = function() {
          G(Ya, 0);
        };
      function ka(K) {
        Cr = K, Zn || (Zn = !0, wr());
      }
      function Fn(K, Ce) {
        Tr = G(function() {
          K(ee.unstable_now());
        }, Ce);
      }
      function Yr() {
        Ee(Tr), Tr = -1;
      }
      var Ul = Jn, Ia = null;
      ee.unstable_IdlePriority = Fe, ee.unstable_ImmediatePriority = jt, ee.unstable_LowPriority = ue, ee.unstable_NormalPriority = ge, ee.unstable_Profiling = Ia, ee.unstable_UserBlockingPriority = oe, ee.unstable_cancelCallback = ba, ee.unstable_continueExecution = ci, ee.unstable_forceFrameRate = Rr, ee.unstable_getCurrentPriorityLevel = cn, ee.unstable_getFirstCallbackNode = Er, ee.unstable_next = Ke, ee.unstable_pauseExecution = zt, ee.unstable_requestPaint = Ul, ee.unstable_runWithPriority = ft, ee.unstable_scheduleCallback = et, ee.unstable_shouldYield = fi, ee.unstable_wrapCallback = dt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(i0)), i0;
}
var Q1;
function K1() {
  return Q1 || (Q1 = 1, process.env.NODE_ENV === "production" ? Lm.exports = $_() : Lm.exports = Y_()), Lm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W1;
function I_() {
  if (W1)
    return wa;
  W1 = 1;
  var ee = Mm, J = K1();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Ht = /* @__PURE__ */ new Set(), Ft = {};
  function qe(n, r) {
    E(n, r), E(n + "Capture", r);
  }
  function E(n, r) {
    for (Ft[n] = r, n = 0; n < r.length; n++)
      Ht.add(r[n]);
  }
  var hn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Oe = Object.prototype.hasOwnProperty, me = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, jt = {}, oe = {};
  function ge(n) {
    return Oe.call(oe, n) ? !0 : Oe.call(jt, n) ? !1 : me.test(n) ? oe[n] = !0 : (jt[n] = !0, !1);
  }
  function ue(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Fe(n, r, l, o) {
    if (r === null || typeof r > "u" || ue(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function vt(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var nt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    nt[n] = new vt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    nt[r] = new vt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    nt[n] = new vt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    nt[n] = new vt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    nt[n] = new vt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    nt[n] = new vt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    nt[n] = new vt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    nt[n] = new vt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    nt[n] = new vt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Kn = /[\-:]([a-z])/g;
  function Xt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Kn,
      Xt
    );
    nt[r] = new vt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Kn, Xt);
    nt[r] = new vt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Kn, Xt);
    nt[r] = new vt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    nt[n] = new vt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), nt.xlinkHref = new vt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    nt[n] = new vt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Be(n, r, l, o) {
    var c = nt.hasOwnProperty(r) ? nt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Fe(r, l, c, o) && (l = null), o || c === null ? ge(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var rt = ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Re = Symbol.for("react.element"), Xe = Symbol.for("react.portal"), Ue = Symbol.for("react.fragment"), Kt = Symbol.for("react.strict_mode"), Dn = Symbol.for("react.profiler"), Nt = Symbol.for("react.provider"), Et = Symbol.for("react.context"), En = Symbol.for("react.forward_ref"), Ye = Symbol.for("react.suspense"), at = Symbol.for("react.suspense_list"), Qt = Symbol.for("react.memo"), gt = Symbol.for("react.lazy"), ve = Symbol.for("react.offscreen"), G = Symbol.iterator;
  function Ee(n) {
    return n === null || typeof n != "object" ? null : (n = G && n[G] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var T = Object.assign, B;
  function ae(n) {
    if (B === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        B = r && r[1] || "";
      }
    return `
` + B + n;
  }
  var Ve = !1;
  function Me(n, r) {
    if (!n || Ve)
      return "";
    Ve = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (z) {
            var o = z;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (z) {
            o = z;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (z) {
          o = z;
        }
        n();
      }
    } catch (z) {
      if (z && o && typeof z.stack == "string") {
        for (var c = z.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, S = d.length - 1; 1 <= m && 0 <= S && c[m] !== d[S]; )
          S--;
        for (; 1 <= m && 0 <= S; m--, S--)
          if (c[m] !== d[S]) {
            if (m !== 1 || S !== 1)
              do
                if (m--, S--, 0 > S || c[m] !== d[S]) {
                  var R = `
` + c[m].replace(" at new ", " at ");
                  return n.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", n.displayName)), R;
                }
              while (1 <= m && 0 <= S);
            break;
          }
      }
    } finally {
      Ve = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? ae(n) : "";
  }
  function ft(n) {
    switch (n.tag) {
      case 5:
        return ae(n.type);
      case 16:
        return ae("Lazy");
      case 13:
        return ae("Suspense");
      case 19:
        return ae("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Me(n.type, !1), n;
      case 11:
        return n = Me(n.type.render, !1), n;
      case 1:
        return n = Me(n.type, !0), n;
      default:
        return "";
    }
  }
  function Ke(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Ue:
        return "Fragment";
      case Xe:
        return "Portal";
      case Dn:
        return "Profiler";
      case Kt:
        return "StrictMode";
      case Ye:
        return "Suspense";
      case at:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Et:
          return (n.displayName || "Context") + ".Consumer";
        case Nt:
          return (n._context.displayName || "Context") + ".Provider";
        case En:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Qt:
          return r = n.displayName || null, r !== null ? r : Ke(n.type) || "Memo";
        case gt:
          r = n._payload, n = n._init;
          try {
            return Ke(n(r));
          } catch {
          }
      }
    return null;
  }
  function dt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Ke(r);
      case 8:
        return r === Kt ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function et(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function zt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function ci(n) {
    var r = zt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Er(n) {
    n._valueTracker || (n._valueTracker = ci(n));
  }
  function ba(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = zt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function cn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Zn(n, r) {
    var l = r.checked;
    return T({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Cr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = et(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Tr(n, r) {
    r = r.checked, r != null && Be(n, "checked", r, !1);
  }
  function kn(n, r) {
    Tr(n, r);
    var l = et(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? fi(n, r.type, l) : r.hasOwnProperty("defaultValue") && fi(n, r.type, et(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function _a(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function fi(n, r, l) {
    (r !== "number" || cn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Jn = Array.isArray;
  function Rr(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + et(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Ya(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(A(91));
    return T({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function wr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(A(92));
        if (Jn(l)) {
          if (1 < l.length)
            throw Error(A(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: et(l) };
  }
  function Da(n, r) {
    var l = et(r.value), o = et(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function xr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function ka(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Fn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? ka(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Yr, Ul = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Yr = Yr || document.createElement("div"), Yr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Yr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function Ia(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var K = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ce = ["Webkit", "ms", "Moz", "O"];
  Object.keys(K).forEach(function(n) {
    Ce.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), K[r] = K[n];
    });
  });
  function Ie(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || K.hasOwnProperty(n) && K[n] ? ("" + r).trim() : r + "px";
  }
  function wt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = Ie(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var bt = T({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Cn(n, r) {
    if (r) {
      if (bt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(A(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(A(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(A(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(A(62));
    }
  }
  function fn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var br = null;
  function Vt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var ra = null, Zt = null, Ut = null;
  function Al(n) {
    if (n = ts(n)) {
      if (typeof ra != "function")
        throw Error(A(280));
      var r = n.stateNode;
      r && (r = Te(r), ra(n.stateNode, n.type, r));
    }
  }
  function di(n) {
    Zt ? Ut ? Ut.push(n) : Ut = [n] : Zt = n;
  }
  function _u() {
    if (Zt) {
      var n = Zt, r = Ut;
      if (Ut = Zt = null, Al(n), r)
        for (n = 0; n < r.length; n++)
          Al(r[n]);
    }
  }
  function Ps(n, r) {
    return n(r);
  }
  function $s() {
  }
  var Du = !1;
  function Uo(n, r, l) {
    if (Du)
      return n(r, l);
    Du = !0;
    try {
      return Ps(n, r, l);
    } finally {
      Du = !1, (Zt !== null || Ut !== null) && ($s(), _u());
    }
  }
  function Oa(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = Te(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(A(231, r, typeof l));
    return l;
  }
  var Pi = !1;
  if (hn)
    try {
      var Qa = {};
      Object.defineProperty(Qa, "passive", { get: function() {
        Pi = !0;
      } }), window.addEventListener("test", Qa, Qa), window.removeEventListener("test", Qa, Qa);
    } catch {
      Pi = !1;
    }
  function $i(n, r, l, o, c, d, m, S, R) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, z);
    } catch ($) {
      this.onError($);
    }
  }
  var Ir = !1, La = null, Yi = !1, Ii = null, ku = { onError: function(n) {
    Ir = !0, La = n;
  } };
  function Ao(n, r, l, o, c, d, m, S, R) {
    Ir = !1, La = null, $i.apply(ku, arguments);
  }
  function an(n, r, l, o, c, d, m, S, R) {
    if (Ao.apply(this, arguments), Ir) {
      if (Ir) {
        var z = La;
        Ir = !1, La = null;
      } else
        throw Error(A(198));
      Yi || (Yi = !0, Ii = z);
    }
  }
  function aa(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Hl(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Qi(n) {
    if (aa(n) !== n)
      throw Error(A(188));
  }
  function jn(n) {
    var r = n.alternate;
    if (!r) {
      if (r = aa(n), r === null)
        throw Error(A(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return Qi(c), n;
          if (d === o)
            return Qi(c), r;
          d = d.sibling;
        }
        throw Error(A(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var m = !1, S = c.child; S; ) {
          if (S === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (S === o) {
            m = !0, o = c, l = d;
            break;
          }
          S = S.sibling;
        }
        if (!m) {
          for (S = d.child; S; ) {
            if (S === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (S === o) {
              m = !0, o = d, l = c;
              break;
            }
            S = S.sibling;
          }
          if (!m)
            throw Error(A(189));
        }
      }
      if (l.alternate !== o)
        throw Error(A(190));
    }
    if (l.tag !== 3)
      throw Error(A(188));
    return l.stateNode.current === l ? n : r;
  }
  function Ys(n) {
    return n = jn(n), n !== null ? Is(n) : null;
  }
  function Is(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Is(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Ho = J.unstable_scheduleCallback, Qs = J.unstable_cancelCallback, zf = J.unstable_shouldYield, Uf = J.unstable_requestPaint, Wt = J.unstable_now, Af = J.unstable_getCurrentPriorityLevel, Ma = J.unstable_ImmediatePriority, Qe = J.unstable_UserBlockingPriority, Wa = J.unstable_NormalPriority, Wi = J.unstable_LowPriority, Ou = J.unstable_IdlePriority, Gi = null, _r = null;
  function Fo(n) {
    if (_r && typeof _r.onCommitFiberRoot == "function")
      try {
        _r.onCommitFiberRoot(Gi, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var ur = Math.clz32 ? Math.clz32 : Ws, jo = Math.log, Vo = Math.LN2;
  function Ws(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (jo(n) / Vo | 0) | 0;
  }
  var Lu = 64, qi = 4194304;
  function Na(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function or(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var S = m & ~c;
      S !== 0 ? o = Na(S) : (d &= m, d !== 0 && (o = Na(d)));
    } else
      m = l & ~c, m !== 0 ? o = Na(m) : d !== 0 && (o = Na(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - ur(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function Xi(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ki(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - ur(d), S = 1 << m, R = c[m];
      R === -1 ? (!(S & l) || S & o) && (c[m] = Xi(S, r)) : R <= r && (n.expiredLanes |= S), d &= ~S;
    }
  }
  function Zi(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Mu() {
    var n = Lu;
    return Lu <<= 1, !(Lu & 4194240) && (Lu = 64), n;
  }
  function Nu(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function pi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - ur(r), n[r] = l;
  }
  function Hf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - ur(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Ga(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - ur(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var ht = 0;
  function zu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Fl, Uu, st, Au, Hu, Ae = !1, jl = [], Jt = null, Dr = null, sr = null, Ji = /* @__PURE__ */ new Map(), ln = /* @__PURE__ */ new Map(), Ct = [], Gs = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function kr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Jt = null;
        break;
      case "dragenter":
      case "dragleave":
        Dr = null;
        break;
      case "mouseover":
      case "mouseout":
        sr = null;
        break;
      case "pointerover":
      case "pointerout":
        Ji.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ln.delete(r.pointerId);
    }
  }
  function On(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ts(r), r !== null && Uu(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function qa(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Jt = On(Jt, n, r, l, o, c), !0;
      case "dragenter":
        return Dr = On(Dr, n, r, l, o, c), !0;
      case "mouseover":
        return sr = On(sr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Ji.set(d, On(Ji.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, ln.set(d, On(ln.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function qs(n) {
    var r = oa(n.target);
    if (r !== null) {
      var l = aa(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Hl(l), r !== null) {
            n.blockedOn = r, Hu(n.priority, function() {
              st(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function vi(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = ju(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        br = o, l.target.dispatchEvent(o), br = null;
      } else
        return r = ts(l), r !== null && Uu(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function el(n, r, l) {
    vi(n) && l.delete(r);
  }
  function Xs() {
    Ae = !1, Jt !== null && vi(Jt) && (Jt = null), Dr !== null && vi(Dr) && (Dr = null), sr !== null && vi(sr) && (sr = null), Ji.forEach(el), ln.forEach(el);
  }
  function ia(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Ae || (Ae = !0, J.unstable_scheduleCallback(J.unstable_NormalPriority, Xs)));
  }
  function tl(n) {
    function r(c) {
      return ia(c, n);
    }
    if (0 < jl.length) {
      ia(jl[0], n);
      for (var l = 1; l < jl.length; l++) {
        var o = jl[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Jt !== null && ia(Jt, n), Dr !== null && ia(Dr, n), sr !== null && ia(sr, n), Ji.forEach(r), ln.forEach(r), l = 0; l < Ct.length; l++)
      o = Ct[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Ct.length && (l = Ct[0], l.blockedOn === null); )
      qs(l), l.blockedOn === null && Ct.shift();
  }
  var nl = rt.ReactCurrentBatchConfig, la = !0;
  function Fu(n, r, l, o) {
    var c = ht, d = nl.transition;
    nl.transition = null;
    try {
      ht = 1, al(n, r, l, o);
    } finally {
      ht = c, nl.transition = d;
    }
  }
  function rl(n, r, l, o) {
    var c = ht, d = nl.transition;
    nl.transition = null;
    try {
      ht = 4, al(n, r, l, o);
    } finally {
      ht = c, nl.transition = d;
    }
  }
  function al(n, r, l, o) {
    if (la) {
      var c = ju(n, r, l, o);
      if (c === null)
        ic(n, r, o, Vl, l), kr(n, o);
      else if (qa(c, n, r, l, o))
        o.stopPropagation();
      else if (kr(n, o), r & 4 && -1 < Gs.indexOf(n)) {
        for (; c !== null; ) {
          var d = ts(c);
          if (d !== null && Fl(d), d = ju(n, r, l, o), d === null && ic(n, r, o, Vl, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        ic(n, r, o, null, l);
    }
  }
  var Vl = null;
  function ju(n, r, l, o) {
    if (Vl = null, n = Vt(o), n = oa(n), n !== null)
      if (r = aa(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = Hl(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Vl = n, null;
  }
  function Bo(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Af()) {
          case Ma:
            return 1;
          case Qe:
            return 4;
          case Wa:
          case Wi:
            return 16;
          case Ou:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var za = null, h = null, C = null;
  function M() {
    if (C)
      return C;
    var n, r = h, l = r.length, o, c = "value" in za ? za.value : za.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++)
      ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function U(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Q() {
    return !0;
  }
  function _e() {
    return !1;
  }
  function Z(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var S in n)
        n.hasOwnProperty(S) && (l = n[S], this[S] = l ? l(d) : d[S]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Q : _e, this.isPropagationStopped = _e, this;
    }
    return T(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Q);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Q);
    }, persist: function() {
    }, isPersistent: Q }), r;
  }
  var xe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, We = Z(xe), ct = T({}, xe, { view: 0, detail: 0 }), kt = Z(ct), xt, Ot, At, tt = T({}, ct, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Pf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== At && (At && n.type === "mousemove" ? (xt = n.screenX - At.screenX, Ot = n.screenY - At.screenY) : Ot = xt = 0, At = n), xt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Ot;
  } }), hi = Z(tt), Vu = T({}, tt, { dataTransfer: 0 }), Po = Z(Vu), Ff = T({}, ct, { relatedTarget: 0 }), Ua = Z(Ff), $o = T({}, xe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Yo = Z($o), jf = T({}, xe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Nm = Z(jf), zm = T({}, xe, { data: 0 }), Vf = Z(zm), Bf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Qp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Wp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Gp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Wp[n]) ? !!r[n] : !1;
  }
  function Pf() {
    return Gp;
  }
  var mi = T({}, ct, { key: function(n) {
    if (n.key) {
      var r = Bf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = U(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Qp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Pf, charCode: function(n) {
    return n.type === "keypress" ? U(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? U(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Um = Z(mi), $f = T({}, tt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ks = Z($f), Yf = T({}, ct, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Pf }), Am = Z(Yf), Zs = T({}, xe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), qp = Z(Zs), Or = T({}, tt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), yi = Z(Or), mn = [9, 13, 27, 32], Aa = hn && "CompositionEvent" in window, Bl = null;
  hn && "documentMode" in document && (Bl = document.documentMode);
  var Js = hn && "TextEvent" in window && !Bl, Xp = hn && (!Aa || Bl && 8 < Bl && 11 >= Bl), Bu = String.fromCharCode(32), Kp = !1;
  function Zp(n, r) {
    switch (n) {
      case "keyup":
        return mn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ec(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Pu = !1;
  function Hm(n, r) {
    switch (n) {
      case "compositionend":
        return ec(r);
      case "keypress":
        return r.which !== 32 ? null : (Kp = !0, Bu);
      case "textInput":
        return n = r.data, n === Bu && Kp ? null : n;
      default:
        return null;
    }
  }
  function Fm(n, r) {
    if (Pu)
      return n === "compositionend" || !Aa && Zp(n, r) ? (n = M(), C = h = za = null, Pu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Xp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Jp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ev(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Jp[n.type] : r === "textarea";
  }
  function tv(n, r, l, o) {
    di(o), r = Zo(r, "onChange"), 0 < r.length && (l = new We("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Io = null, $u = null;
  function Yu(n) {
    ac(n, 0);
  }
  function Iu(n) {
    var r = Wu(n);
    if (ba(r))
      return n;
  }
  function nv(n, r) {
    if (n === "change")
      return r;
  }
  var If = !1;
  if (hn) {
    var Qf;
    if (hn) {
      var Wf = "oninput" in document;
      if (!Wf) {
        var rv = document.createElement("div");
        rv.setAttribute("oninput", "return;"), Wf = typeof rv.oninput == "function";
      }
      Qf = Wf;
    } else
      Qf = !1;
    If = Qf && (!document.documentMode || 9 < document.documentMode);
  }
  function av() {
    Io && (Io.detachEvent("onpropertychange", iv), $u = Io = null);
  }
  function iv(n) {
    if (n.propertyName === "value" && Iu($u)) {
      var r = [];
      tv(r, $u, n, Vt(n)), Uo(Yu, r);
    }
  }
  function jm(n, r, l) {
    n === "focusin" ? (av(), Io = r, $u = l, Io.attachEvent("onpropertychange", iv)) : n === "focusout" && av();
  }
  function Vm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Iu($u);
  }
  function Bm(n, r) {
    if (n === "click")
      return Iu(r);
  }
  function lv(n, r) {
    if (n === "input" || n === "change")
      return Iu(r);
  }
  function Pm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ua = typeof Object.is == "function" ? Object.is : Pm;
  function Qo(n, r) {
    if (ua(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!Oe.call(r, c) || !ua(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function uv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function ov(n, r) {
    var l = uv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = uv(l);
    }
  }
  function sv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? sv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function tc() {
    for (var n = window, r = cn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = cn(n.document);
    }
    return r;
  }
  function gi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function nc(n) {
    var r = tc(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && sv(l.ownerDocument.documentElement, l)) {
      if (o !== null && gi(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = ov(l, d);
          var m = ov(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var cv = hn && "documentMode" in document && 11 >= document.documentMode, Ha = null, Gf = null, Wo = null, qf = !1;
  function fv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    qf || Ha == null || Ha !== cn(o) || (o = Ha, "selectionStart" in o && gi(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Wo && Qo(Wo, o) || (Wo = o, o = Zo(Gf, "onSelect"), 0 < o.length && (r = new We("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Ha)));
  }
  function rc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Pl = { animationend: rc("Animation", "AnimationEnd"), animationiteration: rc("Animation", "AnimationIteration"), animationstart: rc("Animation", "AnimationStart"), transitionend: rc("Transition", "TransitionEnd") }, Xf = {}, Kf = {};
  hn && (Kf = document.createElement("div").style, "AnimationEvent" in window || (delete Pl.animationend.animation, delete Pl.animationiteration.animation, delete Pl.animationstart.animation), "TransitionEvent" in window || delete Pl.transitionend.transition);
  function Ln(n) {
    if (Xf[n])
      return Xf[n];
    if (!Pl[n])
      return n;
    var r = Pl[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Kf)
        return Xf[n] = r[l];
    return n;
  }
  var Zf = Ln("animationend"), dv = Ln("animationiteration"), pv = Ln("animationstart"), vv = Ln("transitionend"), hv = /* @__PURE__ */ new Map(), mv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Si(n, r) {
    hv.set(n, r), qe(r, [n]);
  }
  for (var Go = 0; Go < mv.length; Go++) {
    var $l = mv[Go], $m = $l.toLowerCase(), qo = $l[0].toUpperCase() + $l.slice(1);
    Si($m, "on" + qo);
  }
  Si(Zf, "onAnimationEnd"), Si(dv, "onAnimationIteration"), Si(pv, "onAnimationStart"), Si("dblclick", "onDoubleClick"), Si("focusin", "onFocus"), Si("focusout", "onBlur"), Si(vv, "onTransitionEnd"), E("onMouseEnter", ["mouseout", "mouseover"]), E("onMouseLeave", ["mouseout", "mouseover"]), E("onPointerEnter", ["pointerout", "pointerover"]), E("onPointerLeave", ["pointerout", "pointerover"]), qe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), qe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), qe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), qe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), qe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), qe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Xo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ym = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));
  function yv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, an(o, r, void 0, n), n.currentTarget = null;
  }
  function ac(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var m = o.length - 1; 0 <= m; m--) {
            var S = o[m], R = S.instance, z = S.currentTarget;
            if (S = S.listener, R !== d && c.isPropagationStopped())
              break e;
            yv(c, S, z), d = R;
          }
        else
          for (m = 0; m < o.length; m++) {
            if (S = o[m], R = S.instance, z = S.currentTarget, S = S.listener, R !== d && c.isPropagationStopped())
              break e;
            yv(c, S, z), d = R;
          }
      }
    }
    if (Yi)
      throw n = Ii, Yi = !1, Ii = null, n;
  }
  function Lt(n, r) {
    var l = r[id];
    l === void 0 && (l = r[id] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (gv(r, n, 2, !1), l.add(o));
  }
  function il(n, r, l) {
    var o = 0;
    r && (o |= 4), gv(l, n, o, r);
  }
  var Ei = "_reactListening" + Math.random().toString(36).slice(2);
  function Qu(n) {
    if (!n[Ei]) {
      n[Ei] = !0, Ht.forEach(function(l) {
        l !== "selectionchange" && (Ym.has(l) || il(l, !1, n), il(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ei] || (r[Ei] = !0, il("selectionchange", !1, r));
    }
  }
  function gv(n, r, l, o) {
    switch (Bo(r)) {
      case 1:
        var c = Fu;
        break;
      case 4:
        c = rl;
        break;
      default:
        c = al;
    }
    l = c.bind(null, r, l, n), c = void 0, !Pi || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function ic(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var m = o.tag;
          if (m === 3 || m === 4) {
            var S = o.stateNode.containerInfo;
            if (S === c || S.nodeType === 8 && S.parentNode === c)
              break;
            if (m === 4)
              for (m = o.return; m !== null; ) {
                var R = m.tag;
                if ((R === 3 || R === 4) && (R = m.stateNode.containerInfo, R === c || R.nodeType === 8 && R.parentNode === c))
                  return;
                m = m.return;
              }
            for (; S !== null; ) {
              if (m = oa(S), m === null)
                return;
              if (R = m.tag, R === 5 || R === 6) {
                o = d = m;
                continue e;
              }
              S = S.parentNode;
            }
          }
          o = o.return;
        }
    Uo(function() {
      var z = d, $ = Vt(l), Y = [];
      e: {
        var P = hv.get(n);
        if (P !== void 0) {
          var ne = We, ce = n;
          switch (n) {
            case "keypress":
              if (U(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              ne = Um;
              break;
            case "focusin":
              ce = "focus", ne = Ua;
              break;
            case "focusout":
              ce = "blur", ne = Ua;
              break;
            case "beforeblur":
            case "afterblur":
              ne = Ua;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ne = hi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ne = Po;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ne = Am;
              break;
            case Zf:
            case dv:
            case pv:
              ne = Yo;
              break;
            case vv:
              ne = qp;
              break;
            case "scroll":
              ne = kt;
              break;
            case "wheel":
              ne = yi;
              break;
            case "copy":
            case "cut":
            case "paste":
              ne = Nm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ne = Ks;
          }
          var pe = (r & 4) !== 0, pn = !pe && n === "scroll", _ = pe ? P !== null ? P + "Capture" : null : P;
          pe = [];
          for (var x = z, O; x !== null; ) {
            O = x;
            var W = O.stateNode;
            if (O.tag === 5 && W !== null && (O = W, _ !== null && (W = Oa(x, _), W != null && pe.push(Ko(x, W, O)))), pn)
              break;
            x = x.return;
          }
          0 < pe.length && (P = new ne(P, ce, null, l, $), Y.push({ event: P, listeners: pe }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (P = n === "mouseover" || n === "pointerover", ne = n === "mouseout" || n === "pointerout", P && l !== br && (ce = l.relatedTarget || l.fromElement) && (oa(ce) || ce[Ci]))
            break e;
          if ((ne || P) && (P = $.window === $ ? $ : (P = $.ownerDocument) ? P.defaultView || P.parentWindow : window, ne ? (ce = l.relatedTarget || l.toElement, ne = z, ce = ce ? oa(ce) : null, ce !== null && (pn = aa(ce), ce !== pn || ce.tag !== 5 && ce.tag !== 6) && (ce = null)) : (ne = null, ce = z), ne !== ce)) {
            if (pe = hi, W = "onMouseLeave", _ = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (pe = Ks, W = "onPointerLeave", _ = "onPointerEnter", x = "pointer"), pn = ne == null ? P : Wu(ne), O = ce == null ? P : Wu(ce), P = new pe(W, x + "leave", ne, l, $), P.target = pn, P.relatedTarget = O, W = null, oa($) === z && (pe = new pe(_, x + "enter", ce, l, $), pe.target = O, pe.relatedTarget = pn, W = pe), pn = W, ne && ce)
              t: {
                for (pe = ne, _ = ce, x = 0, O = pe; O; O = Yl(O))
                  x++;
                for (O = 0, W = _; W; W = Yl(W))
                  O++;
                for (; 0 < x - O; )
                  pe = Yl(pe), x--;
                for (; 0 < O - x; )
                  _ = Yl(_), O--;
                for (; x--; ) {
                  if (pe === _ || _ !== null && pe === _.alternate)
                    break t;
                  pe = Yl(pe), _ = Yl(_);
                }
                pe = null;
              }
            else
              pe = null;
            ne !== null && Jf(Y, P, ne, pe, !1), ce !== null && pn !== null && Jf(Y, pn, ce, pe, !0);
          }
        }
        e: {
          if (P = z ? Wu(z) : window, ne = P.nodeName && P.nodeName.toLowerCase(), ne === "select" || ne === "input" && P.type === "file")
            var he = nv;
          else if (ev(P))
            if (If)
              he = lv;
            else {
              he = Vm;
              var fe = jm;
            }
          else
            (ne = P.nodeName) && ne.toLowerCase() === "input" && (P.type === "checkbox" || P.type === "radio") && (he = Bm);
          if (he && (he = he(n, z))) {
            tv(Y, he, l, $);
            break e;
          }
          fe && fe(n, P, z), n === "focusout" && (fe = P._wrapperState) && fe.controlled && P.type === "number" && fi(P, "number", P.value);
        }
        switch (fe = z ? Wu(z) : window, n) {
          case "focusin":
            (ev(fe) || fe.contentEditable === "true") && (Ha = fe, Gf = z, Wo = null);
            break;
          case "focusout":
            Wo = Gf = Ha = null;
            break;
          case "mousedown":
            qf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            qf = !1, fv(Y, l, $);
            break;
          case "selectionchange":
            if (cv)
              break;
          case "keydown":
          case "keyup":
            fv(Y, l, $);
        }
        var Se;
        if (Aa)
          e: {
            switch (n) {
              case "compositionstart":
                var ze = "onCompositionStart";
                break e;
              case "compositionend":
                ze = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ze = "onCompositionUpdate";
                break e;
            }
            ze = void 0;
          }
        else
          Pu ? Zp(n, l) && (ze = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (ze = "onCompositionStart");
        ze && (Xp && l.locale !== "ko" && (Pu || ze !== "onCompositionStart" ? ze === "onCompositionEnd" && Pu && (Se = M()) : (za = $, h = "value" in za ? za.value : za.textContent, Pu = !0)), fe = Zo(z, ze), 0 < fe.length && (ze = new Vf(ze, n, null, l, $), Y.push({ event: ze, listeners: fe }), Se ? ze.data = Se : (Se = ec(l), Se !== null && (ze.data = Se)))), (Se = Js ? Hm(n, l) : Fm(n, l)) && (z = Zo(z, "onBeforeInput"), 0 < z.length && ($ = new Vf("onBeforeInput", "beforeinput", null, l, $), Y.push({ event: $, listeners: z }), $.data = Se));
      }
      ac(Y, r);
    });
  }
  function Ko(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function Zo(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Oa(n, l), d != null && o.unshift(Ko(n, d, c)), d = Oa(n, r), d != null && o.push(Ko(n, d, c))), n = n.return;
    }
    return o;
  }
  function Yl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Jf(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var S = l, R = S.alternate, z = S.stateNode;
      if (R !== null && R === o)
        break;
      S.tag === 5 && z !== null && (S = z, c ? (R = Oa(l, d), R != null && m.unshift(Ko(l, R, S))) : c || (R = Oa(l, d), R != null && m.push(Ko(l, R, S)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var ed = /\r\n?/g, Im = /\u0000|\uFFFD/g;
  function td(n) {
    return (typeof n == "string" ? n : "" + n).replace(ed, `
`).replace(Im, "");
  }
  function lc(n, r, l) {
    if (r = td(r), td(n) !== r && l)
      throw Error(A(425));
  }
  function uc() {
  }
  var nd = null, Il = null;
  function Jo(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Ql = typeof setTimeout == "function" ? setTimeout : void 0, Sv = typeof clearTimeout == "function" ? clearTimeout : void 0, rd = typeof Promise == "function" ? Promise : void 0, ad = typeof queueMicrotask == "function" ? queueMicrotask : typeof rd < "u" ? function(n) {
    return rd.resolve(null).then(n).catch(Qm);
  } : Ql;
  function Qm(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function ll(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), tl(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    tl(r);
  }
  function Fa(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function es(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var ul = Math.random().toString(36).slice(2), Xa = "__reactFiber$" + ul, Wl = "__reactProps$" + ul, Ci = "__reactContainer$" + ul, id = "__reactEvents$" + ul, Wm = "__reactListeners$" + ul, ld = "__reactHandles$" + ul;
  function oa(n) {
    var r = n[Xa];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Ci] || l[Xa]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = es(n); n !== null; ) {
            if (l = n[Xa])
              return l;
            n = es(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ts(n) {
    return n = n[Xa] || n[Ci], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Wu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(A(33));
  }
  function Te(n) {
    return n[Wl] || null;
  }
  var ol = [], Bt = -1;
  function Pe(n) {
    return { current: n };
  }
  function St(n) {
    0 > Bt || (n.current = ol[Bt], ol[Bt] = null, Bt--);
  }
  function Tt(n, r) {
    Bt++, ol[Bt] = n.current, n.current = r;
  }
  var Ka = {}, Ne = Pe(Ka), un = Pe(!1), Lr = Ka;
  function sa(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return Ka;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Gt(n) {
    return n = n.childContextTypes, n != null;
  }
  function ca() {
    St(un), St(Ne);
  }
  function sl(n, r, l) {
    if (Ne.current !== Ka)
      throw Error(A(168));
    Tt(Ne, r), Tt(un, l);
  }
  function ns(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(A(108, dt(n) || "Unknown", c));
    return T({}, l, o);
  }
  function oc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ka, Lr = Ne.current, Tt(Ne, n), Tt(un, un.current), !0;
  }
  function Ev(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(A(169));
    l ? (n = ns(n, r, Lr), o.__reactInternalMemoizedMergedChildContext = n, St(un), St(Ne), Tt(Ne, n)) : St(un), Tt(un, l);
  }
  var Qr = null, Mn = !1, rs = !1;
  function ud(n) {
    Qr === null ? Qr = [n] : Qr.push(n);
  }
  function od(n) {
    Mn = !0, ud(n);
  }
  function Mr() {
    if (!rs && Qr !== null) {
      rs = !0;
      var n = 0, r = ht;
      try {
        var l = Qr;
        for (ht = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Qr = null, Mn = !1;
      } catch (c) {
        throw Qr !== null && (Qr = Qr.slice(n + 1)), Ho(Ma, Mr), c;
      } finally {
        ht = r, rs = !1;
      }
    }
    return null;
  }
  var cl = [], Nr = 0, Gl = null, Gu = 0, zr = [], er = 0, fa = null, Vn = 1, Ti = "";
  function Wr(n, r) {
    cl[Nr++] = Gu, cl[Nr++] = Gl, Gl = n, Gu = r;
  }
  function sd(n, r, l) {
    zr[er++] = Vn, zr[er++] = Ti, zr[er++] = fa, fa = n;
    var o = Vn;
    n = Ti;
    var c = 32 - ur(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - ur(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Vn = 1 << 32 - ur(r) + c | l << c | o, Ti = d + n;
    } else
      Vn = 1 << d | l << c | o, Ti = n;
  }
  function sc(n) {
    n.return !== null && (Wr(n, 1), sd(n, 1, 0));
  }
  function cd(n) {
    for (; n === Gl; )
      Gl = cl[--Nr], cl[Nr] = null, Gu = cl[--Nr], cl[Nr] = null;
    for (; n === fa; )
      fa = zr[--er], zr[er] = null, Ti = zr[--er], zr[er] = null, Vn = zr[--er], zr[er] = null;
  }
  var Gr = null, Ur = null, Pt = !1, da = null;
  function fd(n, r) {
    var l = ga(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Cv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Gr = n, Ur = Fa(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Gr = n, Ur = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = fa !== null ? { id: Vn, overflow: Ti } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ga(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Gr = n, Ur = null, !0) : !1;
      default:
        return !1;
    }
  }
  function cc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function fc(n) {
    if (Pt) {
      var r = Ur;
      if (r) {
        var l = r;
        if (!Cv(n, r)) {
          if (cc(n))
            throw Error(A(418));
          r = Fa(l.nextSibling);
          var o = Gr;
          r && Cv(n, r) ? fd(o, l) : (n.flags = n.flags & -4097 | 2, Pt = !1, Gr = n);
        }
      } else {
        if (cc(n))
          throw Error(A(418));
        n.flags = n.flags & -4097 | 2, Pt = !1, Gr = n;
      }
    }
  }
  function Tv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Gr = n;
  }
  function dc(n) {
    if (n !== Gr)
      return !1;
    if (!Pt)
      return Tv(n), Pt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Jo(n.type, n.memoizedProps)), r && (r = Ur)) {
      if (cc(n))
        throw Rv(), Error(A(418));
      for (; r; )
        fd(n, r), r = Fa(r.nextSibling);
    }
    if (Tv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(A(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Ur = Fa(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Ur = null;
      }
    } else
      Ur = Gr ? Fa(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Rv() {
    for (var n = Ur; n; )
      n = Fa(n.nextSibling);
  }
  function en() {
    Ur = Gr = null, Pt = !1;
  }
  function dd(n) {
    da === null ? da = [n] : da.push(n);
  }
  var pc = rt.ReactCurrentBatchConfig;
  function qr(n, r) {
    if (n && n.defaultProps) {
      r = T({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var Za = Pe(null), vc = null, fl = null, pd = null;
  function vd() {
    pd = fl = vc = null;
  }
  function dl(n) {
    var r = Za.current;
    St(Za), n._currentValue = r;
  }
  function Nn(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function q(n, r) {
    vc = n, pd = fl = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (yn = !0), n.firstContext = null);
  }
  function dn(n) {
    var r = n._currentValue;
    if (pd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, fl === null) {
        if (vc === null)
          throw Error(A(308));
        fl = n, vc.dependencies = { lanes: 0, firstContext: n };
      } else
        fl = fl.next = n;
    return r;
  }
  var Bn = null;
  function hd(n) {
    Bn === null ? Bn = [n] : Bn.push(n);
  }
  function wv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, hd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ri(n, o);
  }
  function Ri(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var pl = !1;
  function md(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Tn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function wi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function vl(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, Ze & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Ri(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, hd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Ri(n, l);
  }
  function hc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Ga(n, l);
    }
  }
  function yd(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function hl(n, r, l, o) {
    var c = n.updateQueue;
    pl = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, S = c.shared.pending;
    if (S !== null) {
      c.shared.pending = null;
      var R = S, z = R.next;
      R.next = null, m === null ? d = z : m.next = z, m = R;
      var $ = n.alternate;
      $ !== null && ($ = $.updateQueue, S = $.lastBaseUpdate, S !== m && (S === null ? $.firstBaseUpdate = z : S.next = z, $.lastBaseUpdate = R));
    }
    if (d !== null) {
      var Y = c.baseState;
      m = 0, $ = z = R = null, S = d;
      do {
        var P = S.lane, ne = S.eventTime;
        if ((o & P) === P) {
          $ !== null && ($ = $.next = {
            eventTime: ne,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var ce = n, pe = S;
            switch (P = r, ne = l, pe.tag) {
              case 1:
                if (ce = pe.payload, typeof ce == "function") {
                  Y = ce.call(ne, Y, P);
                  break e;
                }
                Y = ce;
                break e;
              case 3:
                ce.flags = ce.flags & -65537 | 128;
              case 0:
                if (ce = pe.payload, P = typeof ce == "function" ? ce.call(ne, Y, P) : ce, P == null)
                  break e;
                Y = T({}, Y, P);
                break e;
              case 2:
                pl = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (n.flags |= 64, P = c.effects, P === null ? c.effects = [S] : P.push(S));
        } else
          ne = { eventTime: ne, lane: P, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, $ === null ? (z = $ = ne, R = Y) : $ = $.next = ne, m |= P;
        if (S = S.next, S === null) {
          if (S = c.shared.pending, S === null)
            break;
          P = S, S = P.next, P.next = null, c.lastBaseUpdate = P, c.shared.pending = null;
        }
      } while (1);
      if ($ === null && (R = Y), c.baseState = R, c.firstBaseUpdate = z, c.lastBaseUpdate = $, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Di |= m, n.lanes = m, n.memoizedState = Y;
    }
  }
  function ql(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(A(191, c));
          c.call(o);
        }
      }
  }
  var xv = new ee.Component().refs;
  function gd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : T({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var mc = { isMounted: function(n) {
    return (n = n._reactInternals) ? aa(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = ar(), c = gn(n), d = wi(o, c);
    d.payload = r, l != null && (d.callback = l), r = vl(n, d, c), r !== null && (ir(r, n, c, o), hc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = ar(), c = gn(n), d = wi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = vl(n, d, c), r !== null && (ir(r, n, c, o), hc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = ar(), o = gn(n), c = wi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = vl(n, c, o), r !== null && (ir(r, n, o, l), hc(r, n, o));
  } };
  function bv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Qo(l, o) || !Qo(c, d) : !0;
  }
  function _v(n, r, l) {
    var o = !1, c = Ka, d = r.contextType;
    return typeof d == "object" && d !== null ? d = dn(d) : (c = Gt(r) ? Lr : Ne.current, o = r.contextTypes, d = (o = o != null) ? sa(n, c) : Ka), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = mc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Dv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && mc.enqueueReplaceState(r, r.state, null);
  }
  function yc(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = xv, md(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = dn(d) : (d = Gt(r) ? Lr : Ne.current, c.context = sa(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (gd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && mc.enqueueReplaceState(c, c.state, null), hl(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function qu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(A(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(A(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var S = c.refs;
          S === xv && (S = c.refs = {}), m === null ? delete S[d] : S[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(A(284));
      if (!l._owner)
        throw Error(A(290, n));
    }
    return n;
  }
  function gc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(A(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function kv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Ov(n) {
    function r(_, x) {
      if (n) {
        var O = _.deletions;
        O === null ? (_.deletions = [x], _.flags |= 16) : O.push(x);
      }
    }
    function l(_, x) {
      if (!n)
        return null;
      for (; x !== null; )
        r(_, x), x = x.sibling;
      return null;
    }
    function o(_, x) {
      for (_ = /* @__PURE__ */ new Map(); x !== null; )
        x.key !== null ? _.set(x.key, x) : _.set(x.index, x), x = x.sibling;
      return _;
    }
    function c(_, x) {
      return _ = Rl(_, x), _.index = 0, _.sibling = null, _;
    }
    function d(_, x, O) {
      return _.index = O, n ? (O = _.alternate, O !== null ? (O = O.index, O < x ? (_.flags |= 2, x) : O) : (_.flags |= 2, x)) : (_.flags |= 1048576, x);
    }
    function m(_) {
      return n && _.alternate === null && (_.flags |= 2), _;
    }
    function S(_, x, O, W) {
      return x === null || x.tag !== 6 ? (x = Ts(O, _.mode, W), x.return = _, x) : (x = c(x, O), x.return = _, x);
    }
    function R(_, x, O, W) {
      var he = O.type;
      return he === Ue ? $(_, x, O.props.children, W, O.key) : x !== null && (x.elementType === he || typeof he == "object" && he !== null && he.$$typeof === gt && kv(he) === x.type) ? (W = c(x, O.props), W.ref = qu(_, x, O), W.return = _, W) : (W = Xc(O.type, O.key, O.props, null, _.mode, W), W.ref = qu(_, x, O), W.return = _, W);
    }
    function z(_, x, O, W) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== O.containerInfo || x.stateNode.implementation !== O.implementation ? (x = vu(O, _.mode, W), x.return = _, x) : (x = c(x, O.children || []), x.return = _, x);
    }
    function $(_, x, O, W, he) {
      return x === null || x.tag !== 7 ? (x = pu(O, _.mode, W, he), x.return = _, x) : (x = c(x, O), x.return = _, x);
    }
    function Y(_, x, O) {
      if (typeof x == "string" && x !== "" || typeof x == "number")
        return x = Ts("" + x, _.mode, O), x.return = _, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Re:
            return O = Xc(x.type, x.key, x.props, null, _.mode, O), O.ref = qu(_, null, x), O.return = _, O;
          case Xe:
            return x = vu(x, _.mode, O), x.return = _, x;
          case gt:
            var W = x._init;
            return Y(_, W(x._payload), O);
        }
        if (Jn(x) || Ee(x))
          return x = pu(x, _.mode, O, null), x.return = _, x;
        gc(_, x);
      }
      return null;
    }
    function P(_, x, O, W) {
      var he = x !== null ? x.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number")
        return he !== null ? null : S(_, x, "" + O, W);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case Re:
            return O.key === he ? R(_, x, O, W) : null;
          case Xe:
            return O.key === he ? z(_, x, O, W) : null;
          case gt:
            return he = O._init, P(
              _,
              x,
              he(O._payload),
              W
            );
        }
        if (Jn(O) || Ee(O))
          return he !== null ? null : $(_, x, O, W, null);
        gc(_, O);
      }
      return null;
    }
    function ne(_, x, O, W, he) {
      if (typeof W == "string" && W !== "" || typeof W == "number")
        return _ = _.get(O) || null, S(x, _, "" + W, he);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case Re:
            return _ = _.get(W.key === null ? O : W.key) || null, R(x, _, W, he);
          case Xe:
            return _ = _.get(W.key === null ? O : W.key) || null, z(x, _, W, he);
          case gt:
            var fe = W._init;
            return ne(_, x, O, fe(W._payload), he);
        }
        if (Jn(W) || Ee(W))
          return _ = _.get(O) || null, $(x, _, W, he, null);
        gc(x, W);
      }
      return null;
    }
    function ce(_, x, O, W) {
      for (var he = null, fe = null, Se = x, ze = x = 0, An = null; Se !== null && ze < O.length; ze++) {
        Se.index > ze ? (An = Se, Se = null) : An = Se.sibling;
        var pt = P(_, Se, O[ze], W);
        if (pt === null) {
          Se === null && (Se = An);
          break;
        }
        n && Se && pt.alternate === null && r(_, Se), x = d(pt, x, ze), fe === null ? he = pt : fe.sibling = pt, fe = pt, Se = An;
      }
      if (ze === O.length)
        return l(_, Se), Pt && Wr(_, ze), he;
      if (Se === null) {
        for (; ze < O.length; ze++)
          Se = Y(_, O[ze], W), Se !== null && (x = d(Se, x, ze), fe === null ? he = Se : fe.sibling = Se, fe = Se);
        return Pt && Wr(_, ze), he;
      }
      for (Se = o(_, Se); ze < O.length; ze++)
        An = ne(Se, _, ze, O[ze], W), An !== null && (n && An.alternate !== null && Se.delete(An.key === null ? ze : An.key), x = d(An, x, ze), fe === null ? he = An : fe.sibling = An, fe = An);
      return n && Se.forEach(function(wl) {
        return r(_, wl);
      }), Pt && Wr(_, ze), he;
    }
    function pe(_, x, O, W) {
      var he = Ee(O);
      if (typeof he != "function")
        throw Error(A(150));
      if (O = he.call(O), O == null)
        throw Error(A(151));
      for (var fe = he = null, Se = x, ze = x = 0, An = null, pt = O.next(); Se !== null && !pt.done; ze++, pt = O.next()) {
        Se.index > ze ? (An = Se, Se = null) : An = Se.sibling;
        var wl = P(_, Se, pt.value, W);
        if (wl === null) {
          Se === null && (Se = An);
          break;
        }
        n && Se && wl.alternate === null && r(_, Se), x = d(wl, x, ze), fe === null ? he = wl : fe.sibling = wl, fe = wl, Se = An;
      }
      if (pt.done)
        return l(
          _,
          Se
        ), Pt && Wr(_, ze), he;
      if (Se === null) {
        for (; !pt.done; ze++, pt = O.next())
          pt = Y(_, pt.value, W), pt !== null && (x = d(pt, x, ze), fe === null ? he = pt : fe.sibling = pt, fe = pt);
        return Pt && Wr(_, ze), he;
      }
      for (Se = o(_, Se); !pt.done; ze++, pt = O.next())
        pt = ne(Se, _, ze, pt.value, W), pt !== null && (n && pt.alternate !== null && Se.delete(pt.key === null ? ze : pt.key), x = d(pt, x, ze), fe === null ? he = pt : fe.sibling = pt, fe = pt);
      return n && Se.forEach(function(py) {
        return r(_, py);
      }), Pt && Wr(_, ze), he;
    }
    function pn(_, x, O, W) {
      if (typeof O == "object" && O !== null && O.type === Ue && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case Re:
            e: {
              for (var he = O.key, fe = x; fe !== null; ) {
                if (fe.key === he) {
                  if (he = O.type, he === Ue) {
                    if (fe.tag === 7) {
                      l(_, fe.sibling), x = c(fe, O.props.children), x.return = _, _ = x;
                      break e;
                    }
                  } else if (fe.elementType === he || typeof he == "object" && he !== null && he.$$typeof === gt && kv(he) === fe.type) {
                    l(_, fe.sibling), x = c(fe, O.props), x.ref = qu(_, fe, O), x.return = _, _ = x;
                    break e;
                  }
                  l(_, fe);
                  break;
                } else
                  r(_, fe);
                fe = fe.sibling;
              }
              O.type === Ue ? (x = pu(O.props.children, _.mode, W, O.key), x.return = _, _ = x) : (W = Xc(O.type, O.key, O.props, null, _.mode, W), W.ref = qu(_, x, O), W.return = _, _ = W);
            }
            return m(_);
          case Xe:
            e: {
              for (fe = O.key; x !== null; ) {
                if (x.key === fe)
                  if (x.tag === 4 && x.stateNode.containerInfo === O.containerInfo && x.stateNode.implementation === O.implementation) {
                    l(_, x.sibling), x = c(x, O.children || []), x.return = _, _ = x;
                    break e;
                  } else {
                    l(_, x);
                    break;
                  }
                else
                  r(_, x);
                x = x.sibling;
              }
              x = vu(O, _.mode, W), x.return = _, _ = x;
            }
            return m(_);
          case gt:
            return fe = O._init, pn(_, x, fe(O._payload), W);
        }
        if (Jn(O))
          return ce(_, x, O, W);
        if (Ee(O))
          return pe(_, x, O, W);
        gc(_, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" ? (O = "" + O, x !== null && x.tag === 6 ? (l(_, x.sibling), x = c(x, O), x.return = _, _ = x) : (l(_, x), x = Ts(O, _.mode, W), x.return = _, _ = x), m(_)) : l(_, x);
    }
    return pn;
  }
  var Xu = Ov(!0), Lv = Ov(!1), as = {}, ja = Pe(as), is = Pe(as), Ku = Pe(as);
  function Xl(n) {
    if (n === as)
      throw Error(A(174));
    return n;
  }
  function Sd(n, r) {
    switch (Tt(Ku, r), Tt(is, n), Tt(ja, as), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Fn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Fn(r, n);
    }
    St(ja), Tt(ja, r);
  }
  function ml() {
    St(ja), St(is), St(Ku);
  }
  function be(n) {
    Xl(Ku.current);
    var r = Xl(ja.current), l = Fn(r, n.type);
    r !== l && (Tt(is, n), Tt(ja, l));
  }
  function Ge(n) {
    is.current === n && (St(ja), St(is));
  }
  var De = Pe(0);
  function tn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var pa = [];
  function Sc() {
    for (var n = 0; n < pa.length; n++)
      pa[n]._workInProgressVersionPrimary = null;
    pa.length = 0;
  }
  var Ec = rt.ReactCurrentDispatcher, Ed = rt.ReactCurrentBatchConfig, Kl = 0, $t = null, j = null, it = null, ke = !1, Ja = !1, Xr = 0, Zl = 0;
  function Yt() {
    throw Error(A(321));
  }
  function Jl(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!ua(n[l], r[l]))
        return !1;
    return !0;
  }
  function yl(n, r, l, o, c, d) {
    if (Kl = d, $t = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ec.current = n === null || n.memoizedState === null ? qm : Xm, n = l(o, c), Ja) {
      d = 0;
      do {
        if (Ja = !1, Xr = 0, 25 <= d)
          throw Error(A(301));
        d += 1, it = j = null, r.updateQueue = null, Ec.current = Td, n = l(o, c);
      } while (Ja);
    }
    if (Ec.current = Ac, r = j !== null && j.next !== null, Kl = 0, it = j = $t = null, ke = !1, r)
      throw Error(A(300));
    return n;
  }
  function eu() {
    var n = Xr !== 0;
    return Xr = 0, n;
  }
  function va() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return it === null ? $t.memoizedState = it = n : it = it.next = n, it;
  }
  function Ar() {
    if (j === null) {
      var n = $t.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = j.next;
    var r = it === null ? $t.memoizedState : it.next;
    if (r !== null)
      it = r, j = n;
    else {
      if (n === null)
        throw Error(A(310));
      j = n, n = { memoizedState: j.memoizedState, baseState: j.baseState, baseQueue: j.baseQueue, queue: j.queue, next: null }, it === null ? $t.memoizedState = it = n : it = it.next = n;
    }
    return it;
  }
  function tu(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ls(n) {
    var r = Ar(), l = r.queue;
    if (l === null)
      throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = j, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var S = m = null, R = null, z = d;
      do {
        var $ = z.lane;
        if ((Kl & $) === $)
          R !== null && (R = R.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var Y = {
            lane: $,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          R === null ? (S = R = Y, m = o) : R = R.next = Y, $t.lanes |= $, Di |= $;
        }
        z = z.next;
      } while (z !== null && z !== d);
      R === null ? m = o : R.next = S, ua(o, r.memoizedState) || (yn = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = R, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, $t.lanes |= d, Di |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function us(n) {
    var r = Ar(), l = r.queue;
    if (l === null)
      throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ua(d, r.memoizedState) || (yn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Cc() {
  }
  function Tc(n, r) {
    var l = $t, o = Ar(), c = r(), d = !ua(o.memoizedState, c);
    if (d && (o.memoizedState = c, yn = !0), o = o.queue, os(xc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || it !== null && it.memoizedState.tag & 1) {
      if (l.flags |= 2048, nu(9, wc.bind(null, l, o, c, r), void 0, null), nn === null)
        throw Error(A(349));
      Kl & 30 || Rc(l, r, c);
    }
    return c;
  }
  function Rc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = $t.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, $t.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function wc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, bc(r) && _c(n);
  }
  function xc(n, r, l) {
    return l(function() {
      bc(r) && _c(n);
    });
  }
  function bc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ua(n, l);
    } catch {
      return !0;
    }
  }
  function _c(n) {
    var r = Ri(n, 1);
    r !== null && ir(r, n, 1, -1);
  }
  function Dc(n) {
    var r = va();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: tu, lastRenderedState: n }, r.queue = n, n = n.dispatch = Uc.bind(null, $t, n), [r.memoizedState, n];
  }
  function nu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = $t.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, $t.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function kc() {
    return Ar().memoizedState;
  }
  function ru(n, r, l, o) {
    var c = va();
    $t.flags |= n, c.memoizedState = nu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function xi(n, r, l, o) {
    var c = Ar();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (j !== null) {
      var m = j.memoizedState;
      if (d = m.destroy, o !== null && Jl(o, m.deps)) {
        c.memoizedState = nu(r, l, d, o);
        return;
      }
    }
    $t.flags |= n, c.memoizedState = nu(1 | r, l, d, o);
  }
  function Oc(n, r) {
    return ru(8390656, 8, n, r);
  }
  function os(n, r) {
    return xi(2048, 8, n, r);
  }
  function Lc(n, r) {
    return xi(4, 2, n, r);
  }
  function Mc(n, r) {
    return xi(4, 4, n, r);
  }
  function Cd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Zu(n, r, l) {
    return l = l != null ? l.concat([n]) : null, xi(4, 4, Cd.bind(null, r, n), l);
  }
  function Nc() {
  }
  function Ju(n, r) {
    var l = Ar();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Jl(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function gl(n, r) {
    var l = Ar();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Jl(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Hr(n, r, l) {
    return Kl & 21 ? (ua(l, r) || (l = Mu(), $t.lanes |= l, Di |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, yn = !0), n.memoizedState = l);
  }
  function Gm(n, r) {
    var l = ht;
    ht = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Ed.transition;
    Ed.transition = {};
    try {
      n(!1), r();
    } finally {
      ht = l, Ed.transition = o;
    }
  }
  function Mt() {
    return Ar().memoizedState;
  }
  function zc(n, r, l) {
    var o = gn(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, eo(n))
      ss(r, l);
    else if (l = wv(n, r, l, o), l !== null) {
      var c = ar();
      ir(l, n, o, c), Mv(l, r, o);
    }
  }
  function Uc(n, r, l) {
    var o = gn(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (eo(n))
      ss(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var m = r.lastRenderedState, S = d(m, l);
          if (c.hasEagerState = !0, c.eagerState = S, ua(S, m)) {
            var R = r.interleaved;
            R === null ? (c.next = c, hd(r)) : (c.next = R.next, R.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = wv(n, r, c, o), l !== null && (c = ar(), ir(l, n, o, c), Mv(l, r, o));
    }
  }
  function eo(n) {
    var r = n.alternate;
    return n === $t || r !== null && r === $t;
  }
  function ss(n, r) {
    Ja = ke = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Mv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Ga(n, l);
    }
  }
  var Ac = { readContext: dn, useCallback: Yt, useContext: Yt, useEffect: Yt, useImperativeHandle: Yt, useInsertionEffect: Yt, useLayoutEffect: Yt, useMemo: Yt, useReducer: Yt, useRef: Yt, useState: Yt, useDebugValue: Yt, useDeferredValue: Yt, useTransition: Yt, useMutableSource: Yt, useSyncExternalStore: Yt, useId: Yt, unstable_isNewReconciler: !1 }, qm = { readContext: dn, useCallback: function(n, r) {
    return va().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: dn, useEffect: Oc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, ru(
      4194308,
      4,
      Cd.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return ru(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return ru(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = va();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = va();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = zc.bind(null, $t, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = va();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Dc, useDebugValue: Nc, useDeferredValue: function(n) {
    return va().memoizedState = n;
  }, useTransition: function() {
    var n = Dc(!1), r = n[0];
    return n = Gm.bind(null, n[1]), va().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = $t, c = va();
    if (Pt) {
      if (l === void 0)
        throw Error(A(407));
      l = l();
    } else {
      if (l = r(), nn === null)
        throw Error(A(349));
      Kl & 30 || Rc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Oc(xc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, nu(9, wc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = va(), r = nn.identifierPrefix;
    if (Pt) {
      var l = Ti, o = Vn;
      l = (o & ~(1 << 32 - ur(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Xr++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = Zl++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Xm = {
    readContext: dn,
    useCallback: Ju,
    useContext: dn,
    useEffect: os,
    useImperativeHandle: Zu,
    useInsertionEffect: Lc,
    useLayoutEffect: Mc,
    useMemo: gl,
    useReducer: ls,
    useRef: kc,
    useState: function() {
      return ls(tu);
    },
    useDebugValue: Nc,
    useDeferredValue: function(n) {
      var r = Ar();
      return Hr(r, j.memoizedState, n);
    },
    useTransition: function() {
      var n = ls(tu)[0], r = Ar().memoizedState;
      return [n, r];
    },
    useMutableSource: Cc,
    useSyncExternalStore: Tc,
    useId: Mt,
    unstable_isNewReconciler: !1
  }, Td = { readContext: dn, useCallback: Ju, useContext: dn, useEffect: os, useImperativeHandle: Zu, useInsertionEffect: Lc, useLayoutEffect: Mc, useMemo: gl, useReducer: us, useRef: kc, useState: function() {
    return us(tu);
  }, useDebugValue: Nc, useDeferredValue: function(n) {
    var r = Ar();
    return j === null ? r.memoizedState = n : Hr(r, j.memoizedState, n);
  }, useTransition: function() {
    var n = us(tu)[0], r = Ar().memoizedState;
    return [n, r];
  }, useMutableSource: Cc, useSyncExternalStore: Tc, useId: Mt, unstable_isNewReconciler: !1 };
  function to(n, r) {
    try {
      var l = "", o = r;
      do
        l += ft(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function cs(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Hc(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Km = typeof WeakMap == "function" ? WeakMap : Map;
  function Nv(n, r, l) {
    l = wi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Yc || (Yc = !0, ou = o), Hc(n, r);
    }, l;
  }
  function fs(n, r, l) {
    l = wi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Hc(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Hc(n, r), typeof o != "function" && (ni === null ? ni = /* @__PURE__ */ new Set([this]) : ni.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function zv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Km();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = ay.bind(null, n, r, l), r.then(n, n));
  }
  function Rd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function wd(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = wi(-1, 1), r.tag = 2, vl(l, r, 1))), l.lanes |= 1), n);
  }
  var Zm = rt.ReactCurrentOwner, yn = !1;
  function Rn(n, r, l, o) {
    r.child = n === null ? Lv(r, null, l, o) : Xu(r, n.child, l, o);
  }
  function Sl(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return q(r, c), o = yl(n, r, l, o, d, c), l = eu(), n !== null && !yn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Pn(n, r, c)) : (Pt && l && sc(r), r.flags |= 1, Rn(n, r, o, c), r.child);
  }
  function Fc(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !$d(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Fr(n, r, d, o, c)) : (n = Xc(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Qo, l(m, o) && n.ref === r.ref)
        return Pn(n, r, c);
    }
    return r.flags |= 1, n = Rl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Fr(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Qo(d, o) && n.ref === r.ref)
        if (yn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (yn = !0);
        else
          return r.lanes = n.lanes, Pn(n, r, c);
    }
    return no(n, r, l, o, c);
  }
  function au(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Tt(oo, Kr), Kr |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Tt(oo, Kr), Kr |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Tt(oo, Kr), Kr |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Tt(oo, Kr), Kr |= o;
    return Rn(n, r, c, l), r.child;
  }
  function $e(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function no(n, r, l, o, c) {
    var d = Gt(l) ? Lr : Ne.current;
    return d = sa(r, d), q(r, c), l = yl(n, r, l, o, d, c), o = eu(), n !== null && !yn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Pn(n, r, c)) : (Pt && o && sc(r), r.flags |= 1, Rn(n, r, l, c), r.child);
  }
  function xd(n, r, l, o, c) {
    if (Gt(l)) {
      var d = !0;
      oc(r);
    } else
      d = !1;
    if (q(r, c), r.stateNode === null)
      tr(n, r), _v(r, l, o), yc(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, S = r.memoizedProps;
      m.props = S;
      var R = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = dn(z) : (z = Gt(l) ? Lr : Ne.current, z = sa(r, z));
      var $ = l.getDerivedStateFromProps, Y = typeof $ == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      Y || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (S !== o || R !== z) && Dv(r, m, o, z), pl = !1;
      var P = r.memoizedState;
      m.state = P, hl(r, o, m, c), R = r.memoizedState, S !== o || P !== R || un.current || pl ? (typeof $ == "function" && (gd(r, l, $, o), R = r.memoizedState), (S = pl || bv(r, l, S, o, P, R, z)) ? (Y || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = R), m.props = o, m.state = R, m.context = z, o = S) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Tn(n, r), S = r.memoizedProps, z = r.type === r.elementType ? S : qr(r.type, S), m.props = z, Y = r.pendingProps, P = m.context, R = l.contextType, typeof R == "object" && R !== null ? R = dn(R) : (R = Gt(l) ? Lr : Ne.current, R = sa(r, R));
      var ne = l.getDerivedStateFromProps;
      ($ = typeof ne == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (S !== Y || P !== R) && Dv(r, m, o, R), pl = !1, P = r.memoizedState, m.state = P, hl(r, o, m, c);
      var ce = r.memoizedState;
      S !== Y || P !== ce || un.current || pl ? (typeof ne == "function" && (gd(r, l, ne, o), ce = r.memoizedState), (z = pl || bv(r, l, z, o, P, ce, R) || !1) ? ($ || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ce, R), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ce, R)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || S === n.memoizedProps && P === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && P === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ce), m.props = o, m.state = ce, m.context = R, o = z) : (typeof m.componentDidUpdate != "function" || S === n.memoizedProps && P === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && P === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Uv(n, r, l, o, d, c);
  }
  function Uv(n, r, l, o, c, d) {
    $e(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m)
      return c && Ev(r, l, !1), Pn(n, r, d);
    o = r.stateNode, Zm.current = r;
    var S = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Xu(r, n.child, null, d), r.child = Xu(r, null, S, d)) : Rn(n, r, S, d), r.memoizedState = o.state, c && Ev(r, l, !0), r.child;
  }
  function Av(n) {
    var r = n.stateNode;
    r.pendingContext ? sl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && sl(n, r.context, !1), Sd(n, r.containerInfo);
  }
  function jc(n, r, l, o, c) {
    return en(), dd(c), r.flags |= 256, Rn(n, r, l, o), r.child;
  }
  var iu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function bd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function _d(n, r, l) {
    var o = r.pendingProps, c = De.current, d = !1, m = (r.flags & 128) !== 0, S;
    if ((S = m) || (S = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), S ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Tt(De, c & 1), n === null)
      return fc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Cs(m, o, 0, null), n = pu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = bd(l), r.memoizedState = iu, n) : Dd(r, m));
    if (c = n.memoizedState, c !== null && (S = c.dehydrated, S !== null))
      return Jm(n, r, m, o, S, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, S = c.sibling;
      var R = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = R, r.deletions = null) : (o = Rl(c, R), o.subtreeFlags = c.subtreeFlags & 14680064), S !== null ? d = Rl(S, d) : (d = pu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? bd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = iu, o;
    }
    return d = n.child, n = d.sibling, o = Rl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Dd(n, r) {
    return r = Cs({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ro(n, r, l, o) {
    return o !== null && dd(o), Xu(r, n.child, null, l), n = Dd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Jm(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = cs(Error(A(422))), ro(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Cs({ mode: "visible", children: o.children }, c, 0, null), d = pu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Xu(r, n.child, null, m), r.child.memoizedState = bd(m), r.memoizedState = iu, d);
    if (!(r.mode & 1))
      return ro(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var S = o.dgst;
      return o = S, d = Error(A(419)), o = cs(d, o, void 0), ro(n, r, m, o);
    }
    if (S = (m & n.childLanes) !== 0, yn || S) {
      if (o = nn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Ri(n, c), ir(o, n, c, -1));
      }
      return Vd(), o = cs(Error(A(421))), ro(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = iy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Ur = Fa(c.nextSibling), Gr = r, Pt = !0, da = null, n !== null && (zr[er++] = Vn, zr[er++] = Ti, zr[er++] = fa, Vn = n.id, Ti = n.overflow, fa = r), r = Dd(r, o.children), r.flags |= 4096, r);
  }
  function kd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Nn(n.return, r, l);
  }
  function Vc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Od(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Rn(n, r, o.children, l), o = De.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && kd(n, l, r);
            else if (n.tag === 19)
              kd(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (Tt(De, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && tn(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Vc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && tn(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          Vc(r, !0, l, null, d);
          break;
        case "together":
          Vc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function tr(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Pn(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Di |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(A(153));
    if (r.child !== null) {
      for (n = r.child, l = Rl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Rl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function bi(n, r, l) {
    switch (r.tag) {
      case 3:
        Av(r), en();
        break;
      case 5:
        be(r);
        break;
      case 1:
        Gt(r.type) && oc(r);
        break;
      case 4:
        Sd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Tt(Za, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Tt(De, De.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? _d(n, r, l) : (Tt(De, De.current & 1), n = Pn(n, r, l), n !== null ? n.sibling : null);
        Tt(De, De.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return Od(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Tt(De, De.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, au(n, r, l);
    }
    return Pn(n, r, l);
  }
  var ds, lu, ha, wn;
  ds = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, lu = function() {
  }, ha = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Xl(ja.current);
      var d = null;
      switch (l) {
        case "input":
          c = Zn(n, c), o = Zn(n, o), d = [];
          break;
        case "select":
          c = T({}, c, { value: void 0 }), o = T({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Ya(n, c), o = Ya(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = uc);
      }
      Cn(l, o);
      var m;
      l = null;
      for (z in c)
        if (!o.hasOwnProperty(z) && c.hasOwnProperty(z) && c[z] != null)
          if (z === "style") {
            var S = c[z];
            for (m in S)
              S.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
          } else
            z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (Ft.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var R = o[z];
        if (S = c != null ? c[z] : void 0, o.hasOwnProperty(z) && R !== S && (R != null || S != null))
          if (z === "style")
            if (S) {
              for (m in S)
                !S.hasOwnProperty(m) || R && R.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
              for (m in R)
                R.hasOwnProperty(m) && S[m] !== R[m] && (l || (l = {}), l[m] = R[m]);
            } else
              l || (d || (d = []), d.push(
                z,
                l
              )), l = R;
          else
            z === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, S = S ? S.__html : void 0, R != null && S !== R && (d = d || []).push(z, R)) : z === "children" ? typeof R != "string" && typeof R != "number" || (d = d || []).push(z, "" + R) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (Ft.hasOwnProperty(z) ? (R != null && z === "onScroll" && Lt("scroll", n), d || S === R || (d = [])) : (d = d || []).push(z, R));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
    }
  }, wn = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function ps(n, r) {
    if (!Pt)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function nr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function ey(n, r, l) {
    var o = r.pendingProps;
    switch (cd(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return nr(r), null;
      case 1:
        return Gt(r.type) && ca(), nr(r), null;
      case 3:
        return o = r.stateNode, ml(), St(un), St(Ne), Sc(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (dc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, da !== null && (Es(da), da = null))), lu(n, r), nr(r), null;
      case 5:
        Ge(r);
        var c = Xl(Ku.current);
        if (l = r.type, n !== null && r.stateNode != null)
          ha(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(A(166));
            return nr(r), null;
          }
          if (n = Xl(ja.current), dc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Xa] = r, o[Wl] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Lt("cancel", o), Lt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Lt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Xo.length; c++)
                  Lt(Xo[c], o);
                break;
              case "source":
                Lt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Lt(
                  "error",
                  o
                ), Lt("load", o);
                break;
              case "details":
                Lt("toggle", o);
                break;
              case "input":
                Cr(o, d), Lt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Lt("invalid", o);
                break;
              case "textarea":
                wr(o, d), Lt("invalid", o);
            }
            Cn(l, d), c = null;
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var S = d[m];
                m === "children" ? typeof S == "string" ? o.textContent !== S && (d.suppressHydrationWarning !== !0 && lc(o.textContent, S, n), c = ["children", S]) : typeof S == "number" && o.textContent !== "" + S && (d.suppressHydrationWarning !== !0 && lc(
                  o.textContent,
                  S,
                  n
                ), c = ["children", "" + S]) : Ft.hasOwnProperty(m) && S != null && m === "onScroll" && Lt("scroll", o);
              }
            switch (l) {
              case "input":
                Er(o), _a(o, d, !0);
                break;
              case "textarea":
                Er(o), xr(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = uc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = ka(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Xa] = r, n[Wl] = o, ds(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = fn(l, o), l) {
                case "dialog":
                  Lt("cancel", n), Lt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Lt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Xo.length; c++)
                    Lt(Xo[c], n);
                  c = o;
                  break;
                case "source":
                  Lt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Lt(
                    "error",
                    n
                  ), Lt("load", n), c = o;
                  break;
                case "details":
                  Lt("toggle", n), c = o;
                  break;
                case "input":
                  Cr(n, o), c = Zn(n, o), Lt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = T({}, o, { value: void 0 }), Lt("invalid", n);
                  break;
                case "textarea":
                  wr(n, o), c = Ya(n, o), Lt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Cn(l, c), S = c;
              for (d in S)
                if (S.hasOwnProperty(d)) {
                  var R = S[d];
                  d === "style" ? wt(n, R) : d === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, R != null && Ul(n, R)) : d === "children" ? typeof R == "string" ? (l !== "textarea" || R !== "") && Ia(n, R) : typeof R == "number" && Ia(n, "" + R) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ft.hasOwnProperty(d) ? R != null && d === "onScroll" && Lt("scroll", n) : R != null && Be(n, d, R, m));
                }
              switch (l) {
                case "input":
                  Er(n), _a(n, o, !1);
                  break;
                case "textarea":
                  Er(n), xr(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + et(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Rr(n, !!o.multiple, d, !1) : o.defaultValue != null && Rr(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = uc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return nr(r), null;
      case 6:
        if (n && r.stateNode != null)
          wn(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(A(166));
          if (l = Xl(Ku.current), Xl(ja.current), dc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Xa] = r, (d = o.nodeValue !== l) && (n = Gr, n !== null))
              switch (n.tag) {
                case 3:
                  lc(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && lc(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Xa] = r, r.stateNode = o;
        }
        return nr(r), null;
      case 13:
        if (St(De), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Pt && Ur !== null && r.mode & 1 && !(r.flags & 128))
            Rv(), en(), r.flags |= 98560, d = !1;
          else if (d = dc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(A(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(A(317));
              d[Xa] = r;
            } else
              en(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            nr(r), d = !1;
          } else
            da !== null && (Es(da), da = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || De.current & 1 ? bn === 0 && (bn = 3) : Vd())), r.updateQueue !== null && (r.flags |= 4), nr(r), null);
      case 4:
        return ml(), lu(n, r), n === null && Qu(r.stateNode.containerInfo), nr(r), null;
      case 10:
        return dl(r.type._context), nr(r), null;
      case 17:
        return Gt(r.type) && ca(), nr(r), null;
      case 19:
        if (St(De), d = r.memoizedState, d === null)
          return nr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null)
          if (o)
            ps(d, !1);
          else {
            if (bn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (m = tn(n), m !== null) {
                  for (r.flags |= 128, ps(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Tt(De, De.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && Wt() > co && (r.flags |= 128, o = !0, ps(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = tn(m), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), ps(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !Pt)
                return nr(r), null;
            } else
              2 * Wt() - d.renderingStartTime > co && l !== 1073741824 && (r.flags |= 128, o = !0, ps(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Wt(), r.sibling = null, l = De.current, Tt(De, o ? l & 1 | 2 : l & 1), r) : (nr(r), null);
      case 22:
      case 23:
        return jd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Kr & 1073741824 && (nr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : nr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, r.tag));
  }
  function Ld(n, r) {
    switch (cd(r), r.tag) {
      case 1:
        return Gt(r.type) && ca(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return ml(), St(un), St(Ne), Sc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Ge(r), null;
      case 13:
        if (St(De), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(A(340));
          en();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return St(De), null;
      case 4:
        return ml(), null;
      case 10:
        return dl(r.type._context), null;
      case 22:
      case 23:
        return jd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var vs = !1, xn = !1, Hv = typeof WeakSet == "function" ? WeakSet : Set, se = null;
  function ao(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          sn(n, r, o);
        }
      else
        l.current = null;
  }
  function hs(n, r, l) {
    try {
      l();
    } catch (o) {
      sn(n, r, o);
    }
  }
  var Fv = !1;
  function jv(n, r) {
    if (nd = la, n = tc(), gi(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var m = 0, S = -1, R = -1, z = 0, $ = 0, Y = n, P = null;
            t:
              for (; ; ) {
                for (var ne; Y !== l || c !== 0 && Y.nodeType !== 3 || (S = m + c), Y !== d || o !== 0 && Y.nodeType !== 3 || (R = m + o), Y.nodeType === 3 && (m += Y.nodeValue.length), (ne = Y.firstChild) !== null; )
                  P = Y, Y = ne;
                for (; ; ) {
                  if (Y === n)
                    break t;
                  if (P === l && ++z === c && (S = m), P === d && ++$ === o && (R = m), (ne = Y.nextSibling) !== null)
                    break;
                  Y = P, P = Y.parentNode;
                }
                Y = ne;
              }
            l = S === -1 || R === -1 ? null : { start: S, end: R };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (Il = { focusedElem: n, selectionRange: l }, la = !1, se = r; se !== null; )
      if (r = se, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, se = n;
      else
        for (; se !== null; ) {
          r = se;
          try {
            var ce = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ce !== null) {
                    var pe = ce.memoizedProps, pn = ce.memoizedState, _ = r.stateNode, x = _.getSnapshotBeforeUpdate(r.elementType === r.type ? pe : qr(r.type, pe), pn);
                    _.__reactInternalSnapshotBeforeUpdate = x;
                  }
                  break;
                case 3:
                  var O = r.stateNode.containerInfo;
                  O.nodeType === 1 ? O.textContent = "" : O.nodeType === 9 && O.documentElement && O.removeChild(O.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(A(163));
              }
          } catch (W) {
            sn(r, r.return, W);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, se = n;
            break;
          }
          se = r.return;
        }
    return ce = Fv, Fv = !1, ce;
  }
  function ms(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && hs(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function ys(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Md(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Nd(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Nd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Xa], delete r[Wl], delete r[id], delete r[Wm], delete r[ld])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Vv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Bc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Vv(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function io(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = uc));
    else if (o !== 4 && (n = n.child, n !== null))
      for (io(n, r, l), n = n.sibling; n !== null; )
        io(n, r, l), n = n.sibling;
  }
  function ei(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (ei(n, r, l), n = n.sibling; n !== null; )
        ei(n, r, l), n = n.sibling;
  }
  var qt = null, zn = !1;
  function ma(n, r, l) {
    for (l = l.child; l !== null; )
      lo(n, r, l), l = l.sibling;
  }
  function lo(n, r, l) {
    if (_r && typeof _r.onCommitFiberUnmount == "function")
      try {
        _r.onCommitFiberUnmount(Gi, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        xn || ao(l, r);
      case 6:
        var o = qt, c = zn;
        qt = null, ma(n, r, l), qt = o, zn = c, qt !== null && (zn ? (n = qt, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : qt.removeChild(l.stateNode));
        break;
      case 18:
        qt !== null && (zn ? (n = qt, l = l.stateNode, n.nodeType === 8 ? ll(n.parentNode, l) : n.nodeType === 1 && ll(n, l), tl(n)) : ll(qt, l.stateNode));
        break;
      case 4:
        o = qt, c = zn, qt = l.stateNode.containerInfo, zn = !0, ma(n, r, l), qt = o, zn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!xn && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && hs(l, r, m), c = c.next;
          } while (c !== o);
        }
        ma(n, r, l);
        break;
      case 1:
        if (!xn && (ao(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (S) {
            sn(l, r, S);
          }
        ma(n, r, l);
        break;
      case 21:
        ma(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (xn = (o = xn) || l.memoizedState !== null, ma(n, r, l), xn = o) : ma(n, r, l);
        break;
      default:
        ma(n, r, l);
    }
  }
  function _i(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Hv()), r.forEach(function(o) {
        var c = ly.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function Va(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, m = r, S = m;
          e:
            for (; S !== null; ) {
              switch (S.tag) {
                case 5:
                  qt = S.stateNode, zn = !1;
                  break e;
                case 3:
                  qt = S.stateNode.containerInfo, zn = !0;
                  break e;
                case 4:
                  qt = S.stateNode.containerInfo, zn = !0;
                  break e;
              }
              S = S.return;
            }
          if (qt === null)
            throw Error(A(160));
          lo(d, m, c), qt = null, zn = !1;
          var R = c.alternate;
          R !== null && (R.return = null), c.return = null;
        } catch (z) {
          sn(c, r, z);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Bv(r, n), r = r.sibling;
  }
  function Bv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Va(r, n), ti(n), o & 4) {
          try {
            ms(3, n, n.return), ys(3, n);
          } catch (pe) {
            sn(n, n.return, pe);
          }
          try {
            ms(5, n, n.return);
          } catch (pe) {
            sn(n, n.return, pe);
          }
        }
        break;
      case 1:
        Va(r, n), ti(n), o & 512 && l !== null && ao(l, l.return);
        break;
      case 5:
        if (Va(r, n), ti(n), o & 512 && l !== null && ao(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            Ia(c, "");
          } catch (pe) {
            sn(n, n.return, pe);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, S = n.type, R = n.updateQueue;
          if (n.updateQueue = null, R !== null)
            try {
              S === "input" && d.type === "radio" && d.name != null && Tr(c, d), fn(S, m);
              var z = fn(S, d);
              for (m = 0; m < R.length; m += 2) {
                var $ = R[m], Y = R[m + 1];
                $ === "style" ? wt(c, Y) : $ === "dangerouslySetInnerHTML" ? Ul(c, Y) : $ === "children" ? Ia(c, Y) : Be(c, $, Y, z);
              }
              switch (S) {
                case "input":
                  kn(c, d);
                  break;
                case "textarea":
                  Da(c, d);
                  break;
                case "select":
                  var P = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var ne = d.value;
                  ne != null ? Rr(c, !!d.multiple, ne, !1) : P !== !!d.multiple && (d.defaultValue != null ? Rr(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : Rr(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[Wl] = d;
            } catch (pe) {
              sn(n, n.return, pe);
            }
        }
        break;
      case 6:
        if (Va(r, n), ti(n), o & 4) {
          if (n.stateNode === null)
            throw Error(A(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (pe) {
            sn(n, n.return, pe);
          }
        }
        break;
      case 3:
        if (Va(r, n), ti(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            tl(r.containerInfo);
          } catch (pe) {
            sn(n, n.return, pe);
          }
        break;
      case 4:
        Va(r, n), ti(n);
        break;
      case 13:
        Va(r, n), ti(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Ad = Wt())), o & 4 && _i(n);
        break;
      case 22:
        if ($ = l !== null && l.memoizedState !== null, n.mode & 1 ? (xn = (z = xn) || $, Va(r, n), xn = z) : Va(r, n), ti(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !$ && n.mode & 1)
            for (se = n, $ = n.child; $ !== null; ) {
              for (Y = se = $; se !== null; ) {
                switch (P = se, ne = P.child, P.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ms(4, P, P.return);
                    break;
                  case 1:
                    ao(P, P.return);
                    var ce = P.stateNode;
                    if (typeof ce.componentWillUnmount == "function") {
                      o = P, l = P.return;
                      try {
                        r = o, ce.props = r.memoizedProps, ce.state = r.memoizedState, ce.componentWillUnmount();
                      } catch (pe) {
                        sn(o, l, pe);
                      }
                    }
                    break;
                  case 5:
                    ao(P, P.return);
                    break;
                  case 22:
                    if (P.memoizedState !== null) {
                      zd(Y);
                      continue;
                    }
                }
                ne !== null ? (ne.return = P, se = ne) : zd(Y);
              }
              $ = $.sibling;
            }
          e:
            for ($ = null, Y = n; ; ) {
              if (Y.tag === 5) {
                if ($ === null) {
                  $ = Y;
                  try {
                    c = Y.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (S = Y.stateNode, R = Y.memoizedProps.style, m = R != null && R.hasOwnProperty("display") ? R.display : null, S.style.display = Ie("display", m));
                  } catch (pe) {
                    sn(n, n.return, pe);
                  }
                }
              } else if (Y.tag === 6) {
                if ($ === null)
                  try {
                    Y.stateNode.nodeValue = z ? "" : Y.memoizedProps;
                  } catch (pe) {
                    sn(n, n.return, pe);
                  }
              } else if ((Y.tag !== 22 && Y.tag !== 23 || Y.memoizedState === null || Y === n) && Y.child !== null) {
                Y.child.return = Y, Y = Y.child;
                continue;
              }
              if (Y === n)
                break e;
              for (; Y.sibling === null; ) {
                if (Y.return === null || Y.return === n)
                  break e;
                $ === Y && ($ = null), Y = Y.return;
              }
              $ === Y && ($ = null), Y.sibling.return = Y.return, Y = Y.sibling;
            }
        }
        break;
      case 19:
        Va(r, n), ti(n), o & 4 && _i(n);
        break;
      case 21:
        break;
      default:
        Va(
          r,
          n
        ), ti(n);
    }
  }
  function ti(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Vv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(A(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (Ia(c, ""), o.flags &= -33);
            var d = Bc(n);
            ei(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, S = Bc(n);
            io(n, S, m);
            break;
          default:
            throw Error(A(161));
        }
      } catch (R) {
        sn(n, n.return, R);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Pv(n, r, l) {
    se = n, uo(n);
  }
  function uo(n, r, l) {
    for (var o = (n.mode & 1) !== 0; se !== null; ) {
      var c = se, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || vs;
        if (!m) {
          var S = c.alternate, R = S !== null && S.memoizedState !== null || xn;
          S = vs;
          var z = xn;
          if (vs = m, (xn = R) && !z)
            for (se = c; se !== null; )
              m = se, R = m.child, m.tag === 22 && m.memoizedState !== null ? Yv(c) : R !== null ? (R.return = m, se = R) : Yv(c);
          for (; d !== null; )
            se = d, uo(d), d = d.sibling;
          se = c, vs = S, xn = z;
        }
        $v(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, se = d) : $v(n);
    }
  }
  function $v(n) {
    for (; se !== null; ) {
      var r = se;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                xn || ys(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !xn)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : qr(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && ql(r, d, o);
                break;
              case 3:
                var m = r.updateQueue;
                if (m !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  ql(r, m, l);
                }
                break;
              case 5:
                var S = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = S;
                  var R = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      R.autoFocus && l.focus();
                      break;
                    case "img":
                      R.src && (l.src = R.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var z = r.alternate;
                  if (z !== null) {
                    var $ = z.memoizedState;
                    if ($ !== null) {
                      var Y = $.dehydrated;
                      Y !== null && tl(Y);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(A(163));
            }
          xn || r.flags & 512 && Md(r);
        } catch (P) {
          sn(r, r.return, P);
        }
      }
      if (r === n) {
        se = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, se = l;
        break;
      }
      se = r.return;
    }
  }
  function zd(n) {
    for (; se !== null; ) {
      var r = se;
      if (r === n) {
        se = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, se = l;
        break;
      }
      se = r.return;
    }
  }
  function Yv(n) {
    for (; se !== null; ) {
      var r = se;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              ys(4, r);
            } catch (R) {
              sn(r, l, R);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (R) {
                sn(r, c, R);
              }
            }
            var d = r.return;
            try {
              Md(r);
            } catch (R) {
              sn(r, d, R);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Md(r);
            } catch (R) {
              sn(r, m, R);
            }
        }
      } catch (R) {
        sn(r, r.return, R);
      }
      if (r === n) {
        se = null;
        break;
      }
      var S = r.sibling;
      if (S !== null) {
        S.return = r.return, se = S;
        break;
      }
      se = r.return;
    }
  }
  var Pc = Math.ceil, gs = rt.ReactCurrentDispatcher, Ud = rt.ReactCurrentOwner, rr = rt.ReactCurrentBatchConfig, Ze = 0, nn = null, on = null, Un = 0, Kr = 0, oo = Pe(0), bn = 0, Ss = null, Di = 0, $c = 0, so = 0, uu = null, cr = null, Ad = 0, co = 1 / 0, ki = null, Yc = !1, ou = null, ni = null, El = !1, Cl = null, Ic = 0, fo = 0, Qc = null, su = -1, cu = 0;
  function ar() {
    return Ze & 6 ? Wt() : su !== -1 ? su : su = Wt();
  }
  function gn(n) {
    return n.mode & 1 ? Ze & 2 && Un !== 0 ? Un & -Un : pc.transition !== null ? (cu === 0 && (cu = Mu()), cu) : (n = ht, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Bo(n.type)), n) : 1;
  }
  function ir(n, r, l, o) {
    if (50 < fo)
      throw fo = 0, Qc = null, Error(A(185));
    pi(n, l, o), (!(Ze & 2) || n !== nn) && (n === nn && (!(Ze & 2) && ($c |= l), bn === 4 && ya(n, Un)), lr(n, o), l === 1 && Ze === 0 && !(r.mode & 1) && (co = Wt() + 500, Mn && Mr()));
  }
  function lr(n, r) {
    var l = n.callbackNode;
    Ki(n, r);
    var o = or(n, n === nn ? Un : 0);
    if (o === 0)
      l !== null && Qs(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Qs(l), r === 1)
        n.tag === 0 ? od(Iv.bind(null, n)) : ud(Iv.bind(null, n)), ad(function() {
          !(Ze & 6) && Mr();
        }), l = null;
      else {
        switch (zu(o)) {
          case 1:
            l = Ma;
            break;
          case 4:
            l = Qe;
            break;
          case 16:
            l = Wa;
            break;
          case 536870912:
            l = Ou;
            break;
          default:
            l = Wa;
        }
        l = Pd(l, po.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function po(n, r) {
    if (su = -1, cu = 0, Ze & 6)
      throw Error(A(327));
    var l = n.callbackNode;
    if (ho() && n.callbackNode !== l)
      return null;
    var o = or(n, n === nn ? Un : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = Gc(n, o);
    else {
      r = o;
      var c = Ze;
      Ze |= 2;
      var d = Wc();
      (nn !== n || Un !== r) && (ki = null, co = Wt() + 500, fu(n, r));
      do
        try {
          ny();
          break;
        } catch (S) {
          Qv(n, S);
        }
      while (1);
      vd(), gs.current = d, Ze = c, on !== null ? r = 0 : (nn = null, Un = 0, r = bn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Zi(n), c !== 0 && (o = c, r = Hd(n, c))), r === 1)
        throw l = Ss, fu(n, 0), ya(n, o), lr(n, Wt()), l;
      if (r === 6)
        ya(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Fd(c) && (r = Gc(n, o), r === 2 && (d = Zi(n), d !== 0 && (o = d, r = Hd(n, d))), r === 1))
          throw l = Ss, fu(n, 0), ya(n, o), lr(n, Wt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            du(n, cr, ki);
            break;
          case 3:
            if (ya(n, o), (o & 130023424) === o && (r = Ad + 500 - Wt(), 10 < r)) {
              if (or(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                ar(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Ql(du.bind(null, n, cr, ki), r);
              break;
            }
            du(n, cr, ki);
            break;
          case 4:
            if (ya(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - ur(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Wt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Pc(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Ql(du.bind(null, n, cr, ki), o);
              break;
            }
            du(n, cr, ki);
            break;
          case 5:
            du(n, cr, ki);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return lr(n, Wt()), n.callbackNode === l ? po.bind(null, n) : null;
  }
  function Hd(n, r) {
    var l = uu;
    return n.current.memoizedState.isDehydrated && (fu(n, r).flags |= 256), n = Gc(n, r), n !== 2 && (r = cr, cr = l, r !== null && Es(r)), n;
  }
  function Es(n) {
    cr === null ? cr = n : cr.push.apply(cr, n);
  }
  function Fd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!ua(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ya(n, r) {
    for (r &= ~so, r &= ~$c, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - ur(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Iv(n) {
    if (Ze & 6)
      throw Error(A(327));
    ho();
    var r = or(n, 0);
    if (!(r & 1))
      return lr(n, Wt()), null;
    var l = Gc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Zi(n);
      o !== 0 && (r = o, l = Hd(n, o));
    }
    if (l === 1)
      throw l = Ss, fu(n, 0), ya(n, r), lr(n, Wt()), l;
    if (l === 6)
      throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, du(n, cr, ki), lr(n, Wt()), null;
  }
  function vo(n, r) {
    var l = Ze;
    Ze |= 1;
    try {
      return n(r);
    } finally {
      Ze = l, Ze === 0 && (co = Wt() + 500, Mn && Mr());
    }
  }
  function Tl(n) {
    Cl !== null && Cl.tag === 0 && !(Ze & 6) && ho();
    var r = Ze;
    Ze |= 1;
    var l = rr.transition, o = ht;
    try {
      if (rr.transition = null, ht = 1, n)
        return n();
    } finally {
      ht = o, rr.transition = l, Ze = r, !(Ze & 6) && Mr();
    }
  }
  function jd() {
    Kr = oo.current, St(oo);
  }
  function fu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Sv(l)), on !== null)
      for (l = on.return; l !== null; ) {
        var o = l;
        switch (cd(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && ca();
            break;
          case 3:
            ml(), St(un), St(Ne), Sc();
            break;
          case 5:
            Ge(o);
            break;
          case 4:
            ml();
            break;
          case 13:
            St(De);
            break;
          case 19:
            St(De);
            break;
          case 10:
            dl(o.type._context);
            break;
          case 22:
          case 23:
            jd();
        }
        l = l.return;
      }
    if (nn = n, on = n = Rl(n.current, null), Un = Kr = r, bn = 0, Ss = null, so = $c = Di = 0, cr = uu = null, Bn !== null) {
      for (r = 0; r < Bn.length; r++)
        if (l = Bn[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var m = d.next;
            d.next = c, o.next = m;
          }
          l.pending = o;
        }
      Bn = null;
    }
    return n;
  }
  function Qv(n, r) {
    do {
      var l = on;
      try {
        if (vd(), Ec.current = Ac, ke) {
          for (var o = $t.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          ke = !1;
        }
        if (Kl = 0, it = j = $t = null, Ja = !1, Xr = 0, Ud.current = null, l === null || l.return === null) {
          bn = 1, Ss = r, on = null;
          break;
        }
        e: {
          var d = n, m = l.return, S = l, R = r;
          if (r = Un, S.flags |= 32768, R !== null && typeof R == "object" && typeof R.then == "function") {
            var z = R, $ = S, Y = $.tag;
            if (!($.mode & 1) && (Y === 0 || Y === 11 || Y === 15)) {
              var P = $.alternate;
              P ? ($.updateQueue = P.updateQueue, $.memoizedState = P.memoizedState, $.lanes = P.lanes) : ($.updateQueue = null, $.memoizedState = null);
            }
            var ne = Rd(m);
            if (ne !== null) {
              ne.flags &= -257, wd(ne, m, S, d, r), ne.mode & 1 && zv(d, z, r), r = ne, R = z;
              var ce = r.updateQueue;
              if (ce === null) {
                var pe = /* @__PURE__ */ new Set();
                pe.add(R), r.updateQueue = pe;
              } else
                ce.add(R);
              break e;
            } else {
              if (!(r & 1)) {
                zv(d, z, r), Vd();
                break e;
              }
              R = Error(A(426));
            }
          } else if (Pt && S.mode & 1) {
            var pn = Rd(m);
            if (pn !== null) {
              !(pn.flags & 65536) && (pn.flags |= 256), wd(pn, m, S, d, r), dd(to(R, S));
              break e;
            }
          }
          d = R = to(R, S), bn !== 4 && (bn = 2), uu === null ? uu = [d] : uu.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var _ = Nv(d, R, r);
                yd(d, _);
                break e;
              case 1:
                S = R;
                var x = d.type, O = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || O !== null && typeof O.componentDidCatch == "function" && (ni === null || !ni.has(O)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var W = fs(d, S, r);
                  yd(d, W);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Bd(l);
      } catch (he) {
        r = he, on === l && l !== null && (on = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function Wc() {
    var n = gs.current;
    return gs.current = Ac, n === null ? Ac : n;
  }
  function Vd() {
    (bn === 0 || bn === 3 || bn === 2) && (bn = 4), nn === null || !(Di & 268435455) && !($c & 268435455) || ya(nn, Un);
  }
  function Gc(n, r) {
    var l = Ze;
    Ze |= 2;
    var o = Wc();
    (nn !== n || Un !== r) && (ki = null, fu(n, r));
    do
      try {
        ty();
        break;
      } catch (c) {
        Qv(n, c);
      }
    while (1);
    if (vd(), Ze = l, gs.current = o, on !== null)
      throw Error(A(261));
    return nn = null, Un = 0, bn;
  }
  function ty() {
    for (; on !== null; )
      Wv(on);
  }
  function ny() {
    for (; on !== null && !zf(); )
      Wv(on);
  }
  function Wv(n) {
    var r = qv(n.alternate, n, Kr);
    n.memoizedProps = n.pendingProps, r === null ? Bd(n) : on = r, Ud.current = null;
  }
  function Bd(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Ld(l, r), l !== null) {
          l.flags &= 32767, on = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          bn = 6, on = null;
          return;
        }
      } else if (l = ey(l, r, Kr), l !== null) {
        on = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        on = r;
        return;
      }
      on = r = n;
    } while (r !== null);
    bn === 0 && (bn = 5);
  }
  function du(n, r, l) {
    var o = ht, c = rr.transition;
    try {
      rr.transition = null, ht = 1, ry(n, r, l, o);
    } finally {
      rr.transition = c, ht = o;
    }
    return null;
  }
  function ry(n, r, l, o) {
    do
      ho();
    while (Cl !== null);
    if (Ze & 6)
      throw Error(A(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Hf(n, d), n === nn && (on = nn = null, Un = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || El || (El = !0, Pd(Wa, function() {
      return ho(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = rr.transition, rr.transition = null;
      var m = ht;
      ht = 1;
      var S = Ze;
      Ze |= 4, Ud.current = null, jv(n, l), Bv(l, n), nc(Il), la = !!nd, Il = nd = null, n.current = l, Pv(l), Uf(), Ze = S, ht = m, rr.transition = d;
    } else
      n.current = l;
    if (El && (El = !1, Cl = n, Ic = c), d = n.pendingLanes, d === 0 && (ni = null), Fo(l.stateNode), lr(n, Wt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Yc)
      throw Yc = !1, n = ou, ou = null, n;
    return Ic & 1 && n.tag !== 0 && ho(), d = n.pendingLanes, d & 1 ? n === Qc ? fo++ : (fo = 0, Qc = n) : fo = 0, Mr(), null;
  }
  function ho() {
    if (Cl !== null) {
      var n = zu(Ic), r = rr.transition, l = ht;
      try {
        if (rr.transition = null, ht = 16 > n ? 16 : n, Cl === null)
          var o = !1;
        else {
          if (n = Cl, Cl = null, Ic = 0, Ze & 6)
            throw Error(A(331));
          var c = Ze;
          for (Ze |= 4, se = n.current; se !== null; ) {
            var d = se, m = d.child;
            if (se.flags & 16) {
              var S = d.deletions;
              if (S !== null) {
                for (var R = 0; R < S.length; R++) {
                  var z = S[R];
                  for (se = z; se !== null; ) {
                    var $ = se;
                    switch ($.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ms(8, $, d);
                    }
                    var Y = $.child;
                    if (Y !== null)
                      Y.return = $, se = Y;
                    else
                      for (; se !== null; ) {
                        $ = se;
                        var P = $.sibling, ne = $.return;
                        if (Nd($), $ === z) {
                          se = null;
                          break;
                        }
                        if (P !== null) {
                          P.return = ne, se = P;
                          break;
                        }
                        se = ne;
                      }
                  }
                }
                var ce = d.alternate;
                if (ce !== null) {
                  var pe = ce.child;
                  if (pe !== null) {
                    ce.child = null;
                    do {
                      var pn = pe.sibling;
                      pe.sibling = null, pe = pn;
                    } while (pe !== null);
                  }
                }
                se = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null)
              m.return = d, se = m;
            else
              e:
                for (; se !== null; ) {
                  if (d = se, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ms(9, d, d.return);
                    }
                  var _ = d.sibling;
                  if (_ !== null) {
                    _.return = d.return, se = _;
                    break e;
                  }
                  se = d.return;
                }
          }
          var x = n.current;
          for (se = x; se !== null; ) {
            m = se;
            var O = m.child;
            if (m.subtreeFlags & 2064 && O !== null)
              O.return = m, se = O;
            else
              e:
                for (m = x; se !== null; ) {
                  if (S = se, S.flags & 2048)
                    try {
                      switch (S.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ys(9, S);
                      }
                    } catch (he) {
                      sn(S, S.return, he);
                    }
                  if (S === m) {
                    se = null;
                    break e;
                  }
                  var W = S.sibling;
                  if (W !== null) {
                    W.return = S.return, se = W;
                    break e;
                  }
                  se = S.return;
                }
          }
          if (Ze = c, Mr(), _r && typeof _r.onPostCommitFiberRoot == "function")
            try {
              _r.onPostCommitFiberRoot(Gi, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        ht = l, rr.transition = r;
      }
    }
    return !1;
  }
  function Gv(n, r, l) {
    r = to(l, r), r = Nv(n, r, 1), n = vl(n, r, 1), r = ar(), n !== null && (pi(n, 1, r), lr(n, r));
  }
  function sn(n, r, l) {
    if (n.tag === 3)
      Gv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Gv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (ni === null || !ni.has(o))) {
            n = to(l, n), n = fs(r, n, 1), r = vl(r, n, 1), n = ar(), r !== null && (pi(r, 1, n), lr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function ay(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = ar(), n.pingedLanes |= n.suspendedLanes & l, nn === n && (Un & l) === l && (bn === 4 || bn === 3 && (Un & 130023424) === Un && 500 > Wt() - Ad ? fu(n, 0) : so |= l), lr(n, r);
  }
  function qc(n, r) {
    r === 0 && (n.mode & 1 ? (r = qi, qi <<= 1, !(qi & 130023424) && (qi = 4194304)) : r = 1);
    var l = ar();
    n = Ri(n, r), n !== null && (pi(n, r, l), lr(n, l));
  }
  function iy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), qc(n, l);
  }
  function ly(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(A(314));
    }
    o !== null && o.delete(r), qc(n, l);
  }
  var qv;
  qv = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || un.current)
        yn = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return yn = !1, bi(n, r, l);
        yn = !!(n.flags & 131072);
      }
    else
      yn = !1, Pt && r.flags & 1048576 && sd(r, Gu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        tr(n, r), n = r.pendingProps;
        var c = sa(r, Ne.current);
        q(r, l), c = yl(null, r, o, n, c, l);
        var d = eu();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Gt(o) ? (d = !0, oc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, md(r), c.updater = mc, r.stateNode = c, c._reactInternals = r, yc(r, o, n, l), r = Uv(null, r, o, !0, d, l)) : (r.tag = 0, Pt && d && sc(r), Rn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (tr(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = oy(o), n = qr(o, n), c) {
            case 0:
              r = no(null, r, o, n, l);
              break e;
            case 1:
              r = xd(null, r, o, n, l);
              break e;
            case 11:
              r = Sl(null, r, o, n, l);
              break e;
            case 14:
              r = Fc(null, r, o, qr(o.type, n), l);
              break e;
          }
          throw Error(A(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), no(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), xd(n, r, o, c, l);
      case 3:
        e: {
          if (Av(r), n === null)
            throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Tn(n, r), hl(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = to(Error(A(423)), r), r = jc(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = to(Error(A(424)), r), r = jc(n, r, o, l, c);
              break e;
            } else
              for (Ur = Fa(r.stateNode.containerInfo.firstChild), Gr = r, Pt = !0, da = null, l = Lv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (en(), o === c) {
              r = Pn(n, r, l);
              break e;
            }
            Rn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return be(r), n === null && fc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, Jo(o, c) ? m = null : d !== null && Jo(o, d) && (r.flags |= 32), $e(n, r), Rn(n, r, m, l), r.child;
      case 6:
        return n === null && fc(r), null;
      case 13:
        return _d(n, r, l);
      case 4:
        return Sd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Xu(r, null, o, l) : Rn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), Sl(n, r, o, c, l);
      case 7:
        return Rn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Rn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Rn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Tt(Za, o._currentValue), o._currentValue = m, d !== null)
            if (ua(d.value, m)) {
              if (d.children === c.children && !un.current) {
                r = Pn(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var S = d.dependencies;
                if (S !== null) {
                  m = d.child;
                  for (var R = S.firstContext; R !== null; ) {
                    if (R.context === o) {
                      if (d.tag === 1) {
                        R = wi(-1, l & -l), R.tag = 2;
                        var z = d.updateQueue;
                        if (z !== null) {
                          z = z.shared;
                          var $ = z.pending;
                          $ === null ? R.next = R : (R.next = $.next, $.next = R), z.pending = R;
                        }
                      }
                      d.lanes |= l, R = d.alternate, R !== null && (R.lanes |= l), Nn(
                        d.return,
                        l,
                        r
                      ), S.lanes |= l;
                      break;
                    }
                    R = R.next;
                  }
                } else if (d.tag === 10)
                  m = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (m = d.return, m === null)
                    throw Error(A(341));
                  m.lanes |= l, S = m.alternate, S !== null && (S.lanes |= l), Nn(m, l, r), m = d.sibling;
                } else
                  m = d.child;
                if (m !== null)
                  m.return = d;
                else
                  for (m = d; m !== null; ) {
                    if (m === r) {
                      m = null;
                      break;
                    }
                    if (d = m.sibling, d !== null) {
                      d.return = m.return, m = d;
                      break;
                    }
                    m = m.return;
                  }
                d = m;
              }
          Rn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, q(r, l), c = dn(c), o = o(c), r.flags |= 1, Rn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = qr(o, r.pendingProps), c = qr(o.type, c), Fc(n, r, o, c, l);
      case 15:
        return Fr(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), tr(n, r), r.tag = 1, Gt(o) ? (n = !0, oc(r)) : n = !1, q(r, l), _v(r, o, c), yc(r, o, c, l), Uv(null, r, o, !0, n, l);
      case 19:
        return Od(n, r, l);
      case 22:
        return au(n, r, l);
    }
    throw Error(A(156, r.tag));
  };
  function Pd(n, r) {
    return Ho(n, r);
  }
  function uy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ga(n, r, l, o) {
    return new uy(n, r, l, o);
  }
  function $d(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function oy(n) {
    if (typeof n == "function")
      return $d(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === En)
        return 11;
      if (n === Qt)
        return 14;
    }
    return 2;
  }
  function Rl(n, r) {
    var l = n.alternate;
    return l === null ? (l = ga(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Xc(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function")
      $d(n) && (m = 1);
    else if (typeof n == "string")
      m = 5;
    else
      e:
        switch (n) {
          case Ue:
            return pu(l.children, c, d, r);
          case Kt:
            m = 8, c |= 8;
            break;
          case Dn:
            return n = ga(12, l, r, c | 2), n.elementType = Dn, n.lanes = d, n;
          case Ye:
            return n = ga(13, l, r, c), n.elementType = Ye, n.lanes = d, n;
          case at:
            return n = ga(19, l, r, c), n.elementType = at, n.lanes = d, n;
          case ve:
            return Cs(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Nt:
                  m = 10;
                  break e;
                case Et:
                  m = 9;
                  break e;
                case En:
                  m = 11;
                  break e;
                case Qt:
                  m = 14;
                  break e;
                case gt:
                  m = 16, o = null;
                  break e;
              }
            throw Error(A(130, n == null ? n : typeof n, ""));
        }
    return r = ga(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function pu(n, r, l, o) {
    return n = ga(7, n, o, r), n.lanes = l, n;
  }
  function Cs(n, r, l, o) {
    return n = ga(22, n, o, r), n.elementType = ve, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Ts(n, r, l) {
    return n = ga(6, n, null, r), n.lanes = l, n;
  }
  function vu(n, r, l) {
    return r = ga(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function sy(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Nu(0), this.expirationTimes = Nu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Nu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Kc(n, r, l, o, c, d, m, S, R) {
    return n = new sy(n, r, l, S, R), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = ga(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, md(d), n;
  }
  function Xv(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Xe, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Yd(n) {
    if (!n)
      return Ka;
    n = n._reactInternals;
    e: {
      if (aa(n) !== n || n.tag !== 1)
        throw Error(A(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Gt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(A(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Gt(l))
        return ns(n, l, r);
    }
    return r;
  }
  function Kv(n, r, l, o, c, d, m, S, R) {
    return n = Kc(l, o, !0, n, c, d, m, S, R), n.context = Yd(null), l = n.current, o = ar(), c = gn(l), d = wi(o, c), d.callback = r ?? null, vl(l, d, c), n.current.lanes = c, pi(n, c, o), lr(n, o), n;
  }
  function Rs(n, r, l, o) {
    var c = r.current, d = ar(), m = gn(c);
    return l = Yd(l), r.context === null ? r.context = l : r.pendingContext = l, r = wi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = vl(c, r, m), n !== null && (ir(n, c, m, d), hc(n, c, m)), m;
  }
  function Zc(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Zv(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Id(n, r) {
    Zv(n, r), (n = n.alternate) && Zv(n, r);
  }
  function Jv() {
    return null;
  }
  var Qd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Jc(n) {
    this._internalRoot = n;
  }
  Oi.prototype.render = Jc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(A(409));
    Rs(n, r, null, null);
  }, Oi.prototype.unmount = Jc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Tl(function() {
        Rs(null, n, null, null);
      }), r[Ci] = null;
    }
  };
  function Oi(n) {
    this._internalRoot = n;
  }
  Oi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Au();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Ct.length && r !== 0 && r < Ct[l].priority; l++)
        ;
      Ct.splice(l, 0, n), l === 0 && qs(n);
    }
  };
  function Wd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function ef(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function eh() {
  }
  function cy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var z = Zc(m);
          d.call(z);
        };
      }
      var m = Kv(r, o, n, 0, null, !1, !1, "", eh);
      return n._reactRootContainer = m, n[Ci] = m.current, Qu(n.nodeType === 8 ? n.parentNode : n), Tl(), m;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var S = o;
      o = function() {
        var z = Zc(R);
        S.call(z);
      };
    }
    var R = Kc(n, 0, !1, null, null, !1, !1, "", eh);
    return n._reactRootContainer = R, n[Ci] = R.current, Qu(n.nodeType === 8 ? n.parentNode : n), Tl(function() {
      Rs(r, R, l, o);
    }), R;
  }
  function tf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var S = c;
        c = function() {
          var R = Zc(m);
          S.call(R);
        };
      }
      Rs(r, m, n, c);
    } else
      m = cy(l, r, n, c, o);
    return Zc(m);
  }
  Fl = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Na(r.pendingLanes);
          l !== 0 && (Ga(r, l | 1), lr(r, Wt()), !(Ze & 6) && (co = Wt() + 500, Mr()));
        }
        break;
      case 13:
        Tl(function() {
          var o = Ri(n, 1);
          if (o !== null) {
            var c = ar();
            ir(o, n, 1, c);
          }
        }), Id(n, 1);
    }
  }, Uu = function(n) {
    if (n.tag === 13) {
      var r = Ri(n, 134217728);
      if (r !== null) {
        var l = ar();
        ir(r, n, 134217728, l);
      }
      Id(n, 134217728);
    }
  }, st = function(n) {
    if (n.tag === 13) {
      var r = gn(n), l = Ri(n, r);
      if (l !== null) {
        var o = ar();
        ir(l, n, r, o);
      }
      Id(n, r);
    }
  }, Au = function() {
    return ht;
  }, Hu = function(n, r) {
    var l = ht;
    try {
      return ht = n, r();
    } finally {
      ht = l;
    }
  }, ra = function(n, r, l) {
    switch (r) {
      case "input":
        if (kn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Te(o);
              if (!c)
                throw Error(A(90));
              ba(o), kn(o, c);
            }
          }
        }
        break;
      case "textarea":
        Da(n, l);
        break;
      case "select":
        r = l.value, r != null && Rr(n, !!l.multiple, r, !1);
    }
  }, Ps = vo, $s = Tl;
  var fy = { usingClientEntryPoint: !1, Events: [ts, Wu, Te, di, _u, vo] }, mo = { findFiberByHostInstance: oa, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, dy = { bundleType: mo.bundleType, version: mo.version, rendererPackageName: mo.rendererPackageName, rendererConfig: mo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: rt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ys(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: mo.findFiberByHostInstance || Jv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var nf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!nf.isDisabled && nf.supportsFiber)
      try {
        Gi = nf.inject(dy), _r = nf;
      } catch {
      }
  }
  return wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fy, wa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Wd(r))
      throw Error(A(200));
    return Xv(n, r, null, l);
  }, wa.createRoot = function(n, r) {
    if (!Wd(n))
      throw Error(A(299));
    var l = !1, o = "", c = Qd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Kc(n, 1, !1, null, null, l, !1, o, c), n[Ci] = r.current, Qu(n.nodeType === 8 ? n.parentNode : n), new Jc(r);
  }, wa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(A(188)) : (n = Object.keys(n).join(","), Error(A(268, n)));
    return n = Ys(r), n = n === null ? null : n.stateNode, n;
  }, wa.flushSync = function(n) {
    return Tl(n);
  }, wa.hydrate = function(n, r, l) {
    if (!ef(r))
      throw Error(A(200));
    return tf(null, n, r, !0, l);
  }, wa.hydrateRoot = function(n, r, l) {
    if (!Wd(n))
      throw Error(A(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Qd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Kv(r, null, n, 1, l ?? null, c, !1, d, m), n[Ci] = r.current, Qu(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Oi(r);
  }, wa.render = function(n, r, l) {
    if (!ef(r))
      throw Error(A(200));
    return tf(null, n, r, !1, l);
  }, wa.unmountComponentAtNode = function(n) {
    if (!ef(n))
      throw Error(A(40));
    return n._reactRootContainer ? (Tl(function() {
      tf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ci] = null;
      });
    }), !0) : !1;
  }, wa.unstable_batchedUpdates = vo, wa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!ef(l))
      throw Error(A(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(A(38));
    return tf(n, r, l, !1, o);
  }, wa.version = "18.2.0-next-9e3b772b8-20220608", wa;
}
var xa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G1;
function Q_() {
  return G1 || (G1 = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var ee = Mm, J = K1(), A = ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ht = !1;
    function Ft(e) {
      Ht = e;
    }
    function qe(e) {
      if (!Ht) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        hn("warn", e, a);
      }
    }
    function E(e) {
      if (!Ht) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        hn("error", e, a);
      }
    }
    function hn(e, t, a) {
      {
        var i = A.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Oe = 0, me = 1, jt = 2, oe = 3, ge = 4, ue = 5, Fe = 6, vt = 7, nt = 8, Kn = 9, Xt = 10, Be = 11, rt = 12, Re = 13, Xe = 14, Ue = 15, Kt = 16, Dn = 17, Nt = 18, Et = 19, En = 21, Ye = 22, at = 23, Qt = 24, gt = 25, ve = !0, G = !1, Ee = !1, T = !1, B = !1, ae = !0, Ve = !1, Me = !1, ft = !0, Ke = !0, dt = !0, et = /* @__PURE__ */ new Set(), zt = {}, ci = {};
    function Er(e, t) {
      ba(e, t), ba(e + "Capture", t);
    }
    function ba(e, t) {
      zt[e] && E("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), zt[e] = t;
      {
        var a = e.toLowerCase();
        ci[a] = e, e === "onDoubleClick" && (ci.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        et.add(t[i]);
    }
    var cn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Zn = Object.prototype.hasOwnProperty;
    function Cr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Tr(e) {
      try {
        return kn(e), !1;
      } catch {
        return !0;
      }
    }
    function kn(e) {
      return "" + e;
    }
    function _a(e, t) {
      if (Tr(e))
        return E("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cr(e)), kn(e);
    }
    function fi(e) {
      if (Tr(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cr(e)), kn(e);
    }
    function Jn(e, t) {
      if (Tr(e))
        return E("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cr(e)), kn(e);
    }
    function Rr(e, t) {
      if (Tr(e))
        return E("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cr(e)), kn(e);
    }
    function Ya(e) {
      if (Tr(e))
        return E("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Cr(e)), kn(e);
    }
    function wr(e) {
      if (Tr(e))
        return E("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Cr(e)), kn(e);
    }
    var Da = 0, xr = 1, ka = 2, Fn = 3, Yr = 4, Ul = 5, Ia = 6, K = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ce = K + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ie = new RegExp("^[" + K + "][" + Ce + "]*$"), wt = {}, bt = {};
    function Cn(e) {
      return Zn.call(bt, e) ? !0 : Zn.call(wt, e) ? !1 : Ie.test(e) ? (bt[e] = !0, !0) : (wt[e] = !0, E("Invalid attribute name: `%s`", e), !1);
    }
    function fn(e, t, a) {
      return t !== null ? t.type === Da : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function br(e, t, a, i) {
      if (a !== null && a.type === Da)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Vt(e, t, a, i) {
      if (t === null || typeof t > "u" || br(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Fn:
            return !t;
          case Yr:
            return t === !1;
          case Ul:
            return isNaN(t);
          case Ia:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function ra(e) {
      return Ut.hasOwnProperty(e) ? Ut[e] : null;
    }
    function Zt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === ka || t === Fn || t === Yr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Ut = {}, Al = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Al.forEach(function(e) {
      Ut[e] = new Zt(
        e,
        Da,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Ut[t] = new Zt(
        t,
        xr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Ut[e] = new Zt(
        e,
        ka,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Ut[e] = new Zt(
        e,
        ka,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Ut[e] = new Zt(
        e,
        Fn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ut[e] = new Zt(
        e,
        Fn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ut[e] = new Zt(
        e,
        Yr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ut[e] = new Zt(
        e,
        Ia,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Ut[e] = new Zt(
        e,
        Ul,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var di = /[\-\:]([a-z])/g, _u = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(di, _u);
      Ut[t] = new Zt(
        t,
        xr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(di, _u);
      Ut[t] = new Zt(
        t,
        xr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(di, _u);
      Ut[t] = new Zt(
        t,
        xr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Ut[e] = new Zt(
        e,
        xr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Ps = "xlinkHref";
    Ut[Ps] = new Zt(
      "xlinkHref",
      xr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Ut[e] = new Zt(
        e,
        xr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var $s = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Du = !1;
    function Uo(e) {
      !Du && $s.test(e) && (Du = !0, E("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Oa(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        _a(a, t), i.sanitizeURL && Uo("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Yr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Vt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Vt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Fn)
            return a;
          f = e.getAttribute(s);
        }
        return Vt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function Pi(e, t, a, i) {
      {
        if (!Cn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return _a(a, t), u === "" + a ? a : u;
      }
    }
    function Qa(e, t, a, i) {
      var u = ra(t);
      if (!fn(t, u, i)) {
        if (Vt(t, a, u, i) && (a = null), i || u === null) {
          if (Cn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (_a(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Fn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var b = u.type, w;
          b === Fn || b === Yr && a === !0 ? w = "" : (_a(a, y), w = "" + a, u.sanitizeURL && Uo(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var $i = Symbol.for("react.element"), Ir = Symbol.for("react.portal"), La = Symbol.for("react.fragment"), Yi = Symbol.for("react.strict_mode"), Ii = Symbol.for("react.profiler"), ku = Symbol.for("react.provider"), Ao = Symbol.for("react.context"), an = Symbol.for("react.forward_ref"), aa = Symbol.for("react.suspense"), Hl = Symbol.for("react.suspense_list"), Qi = Symbol.for("react.memo"), jn = Symbol.for("react.lazy"), Ys = Symbol.for("react.scope"), Is = Symbol.for("react.debug_trace_mode"), Ho = Symbol.for("react.offscreen"), Qs = Symbol.for("react.legacy_hidden"), zf = Symbol.for("react.cache"), Uf = Symbol.for("react.tracing_marker"), Wt = Symbol.iterator, Af = "@@iterator";
    function Ma(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Wt && e[Wt] || e[Af];
      return typeof t == "function" ? t : null;
    }
    var Qe = Object.assign, Wa = 0, Wi, Ou, Gi, _r, Fo, ur, jo;
    function Vo() {
    }
    Vo.__reactDisabledLog = !0;
    function Ws() {
      {
        if (Wa === 0) {
          Wi = console.log, Ou = console.info, Gi = console.warn, _r = console.error, Fo = console.group, ur = console.groupCollapsed, jo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Vo,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Wa++;
      }
    }
    function Lu() {
      {
        if (Wa--, Wa === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Qe({}, e, {
              value: Wi
            }),
            info: Qe({}, e, {
              value: Ou
            }),
            warn: Qe({}, e, {
              value: Gi
            }),
            error: Qe({}, e, {
              value: _r
            }),
            group: Qe({}, e, {
              value: Fo
            }),
            groupCollapsed: Qe({}, e, {
              value: ur
            }),
            groupEnd: Qe({}, e, {
              value: jo
            })
          });
        }
        Wa < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var qi = A.ReactCurrentDispatcher, Na;
    function or(e, t, a) {
      {
        if (Na === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Na = i && i[1] || "";
          }
        return `
` + Na + e;
      }
    }
    var Xi = !1, Ki;
    {
      var Zi = typeof WeakMap == "function" ? WeakMap : Map;
      Ki = new Zi();
    }
    function Mu(e, t) {
      if (!e || Xi)
        return "";
      {
        var a = Ki.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Xi = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = qi.current, qi.current = null, Ws();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (N) {
              i = N;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (N) {
              i = N;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            i = N;
          }
          e();
        }
      } catch (N) {
        if (N && i && typeof N.stack == "string") {
          for (var p = N.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var b = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && Ki.set(e, b), b;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Xi = !1, qi.current = s, Lu(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", L = w ? or(w) : "";
      return typeof e == "function" && Ki.set(e, L), L;
    }
    function Nu(e, t, a) {
      return Mu(e, !0);
    }
    function pi(e, t, a) {
      return Mu(e, !1);
    }
    function Hf(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ga(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Mu(e, Hf(e));
      if (typeof e == "string")
        return or(e);
      switch (e) {
        case aa:
          return or("Suspense");
        case Hl:
          return or("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case an:
            return pi(e.render);
          case Qi:
            return Ga(e.type, t, a);
          case jn: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Ga(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function ht(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ue:
          return or(e.type);
        case Kt:
          return or("Lazy");
        case Re:
          return or("Suspense");
        case Et:
          return or("SuspenseList");
        case Oe:
        case jt:
        case Ue:
          return pi(e.type);
        case Be:
          return pi(e.type.render);
        case me:
          return Nu(e.type);
        default:
          return "";
      }
    }
    function zu(e) {
      try {
        var t = "", a = e;
        do
          t += ht(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Fl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Uu(e) {
      return e.displayName || "Context";
    }
    function st(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case La:
          return "Fragment";
        case Ir:
          return "Portal";
        case Ii:
          return "Profiler";
        case Yi:
          return "StrictMode";
        case aa:
          return "Suspense";
        case Hl:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ao:
            var t = e;
            return Uu(t) + ".Consumer";
          case ku:
            var a = e;
            return Uu(a._context) + ".Provider";
          case an:
            return Fl(e, e.render, "ForwardRef");
          case Qi:
            var i = e.displayName || null;
            return i !== null ? i : st(e.type) || "Memo";
          case jn: {
            var u = e, s = u._payload, f = u._init;
            try {
              return st(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Au(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Hu(e) {
      return e.displayName || "Context";
    }
    function Ae(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Qt:
          return "Cache";
        case Kn:
          var i = a;
          return Hu(i) + ".Consumer";
        case Xt:
          var u = a;
          return Hu(u._context) + ".Provider";
        case Nt:
          return "DehydratedFragment";
        case Be:
          return Au(a, a.render, "ForwardRef");
        case vt:
          return "Fragment";
        case ue:
          return a;
        case ge:
          return "Portal";
        case oe:
          return "Root";
        case Fe:
          return "Text";
        case Kt:
          return st(a);
        case nt:
          return a === Yi ? "StrictMode" : "Mode";
        case Ye:
          return "Offscreen";
        case rt:
          return "Profiler";
        case En:
          return "Scope";
        case Re:
          return "Suspense";
        case Et:
          return "SuspenseList";
        case gt:
          return "TracingMarker";
        case me:
        case Oe:
        case Dn:
        case jt:
        case Xe:
        case Ue:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var jl = A.ReactDebugCurrentFrame, Jt = null, Dr = !1;
    function sr() {
      {
        if (Jt === null)
          return null;
        var e = Jt._debugOwner;
        if (e !== null && typeof e < "u")
          return Ae(e);
      }
      return null;
    }
    function Ji() {
      return Jt === null ? "" : zu(Jt);
    }
    function ln() {
      jl.getCurrentStack = null, Jt = null, Dr = !1;
    }
    function Ct(e) {
      jl.getCurrentStack = e === null ? null : Ji, Jt = e, Dr = !1;
    }
    function Gs() {
      return Jt;
    }
    function kr(e) {
      Dr = e;
    }
    function On(e) {
      return "" + e;
    }
    function qa(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return wr(e), e;
        default:
          return "";
      }
    }
    var qs = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function vi(e, t) {
      qs[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || E("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || E("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function el(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Xs(e) {
      return e._valueTracker;
    }
    function ia(e) {
      e._valueTracker = null;
    }
    function tl(e) {
      var t = "";
      return e && (el(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function nl(e) {
      var t = el(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      wr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            wr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            wr(p), i = "" + p;
          },
          stopTracking: function() {
            ia(e), delete e[t];
          }
        };
        return f;
      }
    }
    function la(e) {
      Xs(e) || (e._valueTracker = nl(e));
    }
    function Fu(e) {
      if (!e)
        return !1;
      var t = Xs(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = tl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function rl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var al = !1, Vl = !1, ju = !1, Bo = !1;
    function za(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = Qe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      vi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Vl && (E("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", sr() || "A component", t.type), Vl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !al && (E("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", sr() || "A component", t.type), al = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: qa(t.value != null ? t.value : i),
        controlled: za(t)
      };
    }
    function M(e, t) {
      var a = e, i = t.checked;
      i != null && Qa(a, "checked", i, !1);
    }
    function U(e, t) {
      var a = e;
      {
        var i = za(t);
        !a._wrapperState.controlled && i && !Bo && (E("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Bo = !0), a._wrapperState.controlled && !i && !ju && (E("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ju = !0);
      }
      M(e, t);
      var u = qa(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = On(u)) : a.value !== On(u) && (a.value = On(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? xe(a, t.type, u) : t.hasOwnProperty("defaultValue") && xe(a, t.type, qa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Q(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = On(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function _e(e, t) {
      var a = e;
      U(a, t), Z(a, t);
    }
    function Z(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        _a(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = yh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Fu(f), U(f, p);
          }
        }
      }
    }
    function xe(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || rl(e.ownerDocument) !== e) && (a == null ? e.defaultValue = On(e._wrapperState.initialValue) : e.defaultValue !== On(a) && (e.defaultValue = On(a)));
    }
    var We = !1, ct = !1, kt = !1;
    function xt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? ee.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || ct || (ct = !0, E("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (kt || (kt = !0, E("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !We && (E("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), We = !0);
    }
    function Ot(e, t) {
      t.value != null && e.setAttribute("value", On(qa(t.value)));
    }
    var At = Array.isArray;
    function tt(e) {
      return At(e);
    }
    var hi;
    hi = !1;
    function Vu() {
      var e = sr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Po = ["value", "defaultValue"];
    function Ff(e) {
      {
        vi("select", e);
        for (var t = 0; t < Po.length; t++) {
          var a = Po[t];
          if (e[a] != null) {
            var i = tt(e[a]);
            e.multiple && !i ? E("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Vu()) : !e.multiple && i && E("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Vu());
          }
        }
      }
    }
    function Ua(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = On(qa(a)), b = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          b === null && !u[w].disabled && (b = u[w]);
        }
        b !== null && (b.selected = !0);
      }
    }
    function $o(e, t) {
      return Qe({}, t, {
        value: void 0
      });
    }
    function Yo(e, t) {
      var a = e;
      Ff(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !hi && (E("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), hi = !0);
    }
    function jf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Ua(a, !!t.multiple, i, !1) : t.defaultValue != null && Ua(a, !!t.multiple, t.defaultValue, !0);
    }
    function Nm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Ua(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Ua(a, !!t.multiple, t.defaultValue, !0) : Ua(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function zm(e, t) {
      var a = e, i = t.value;
      i != null && Ua(a, !!t.multiple, i, !1);
    }
    var Vf = !1;
    function Bf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Qe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: On(a._wrapperState.initialValue)
      });
      return i;
    }
    function Qp(e, t) {
      var a = e;
      vi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Vf && (E("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", sr() || "A component"), Vf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          E("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (tt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: qa(i)
      };
    }
    function Wp(e, t) {
      var a = e, i = qa(t.value), u = qa(t.defaultValue);
      if (i != null) {
        var s = On(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = On(u));
    }
    function Gp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Pf(e, t) {
      Wp(e, t);
    }
    var mi = "http://www.w3.org/1999/xhtml", Um = "http://www.w3.org/1998/Math/MathML", $f = "http://www.w3.org/2000/svg";
    function Ks(e) {
      switch (e) {
        case "svg":
          return $f;
        case "math":
          return Um;
        default:
          return mi;
      }
    }
    function Yf(e, t) {
      return e == null || e === mi ? Ks(t) : e === $f && t === "foreignObject" ? mi : e;
    }
    var Am = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Zs, qp = Am(function(e, t) {
      if (e.namespaceURI === $f && !("innerHTML" in e)) {
        Zs = Zs || document.createElement("div"), Zs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Zs.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Or = 1, yi = 3, mn = 8, Aa = 9, Bl = 11, Js = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === yi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Xp = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Bu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Kp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Zp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Bu).forEach(function(e) {
      Zp.forEach(function(t) {
        Bu[Kp(t, e)] = Bu[e];
      });
    });
    function ec(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Bu.hasOwnProperty(e) && Bu[e]) ? t + "px" : (Rr(t, e), ("" + t).trim());
    }
    var Pu = /([A-Z])/g, Hm = /^ms-/;
    function Fm(e) {
      return e.replace(Pu, "-$1").toLowerCase().replace(Hm, "-ms-");
    }
    var Jp = function() {
    };
    {
      var ev = /^(?:webkit|moz|o)[A-Z]/, tv = /^-ms-/, Io = /-(.)/g, $u = /;\s*$/, Yu = {}, Iu = {}, nv = !1, If = !1, Qf = function(e) {
        return e.replace(Io, function(t, a) {
          return a.toUpperCase();
        });
      }, Wf = function(e) {
        Yu.hasOwnProperty(e) && Yu[e] || (Yu[e] = !0, E(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Qf(e.replace(tv, "ms-"))
        ));
      }, rv = function(e) {
        Yu.hasOwnProperty(e) && Yu[e] || (Yu[e] = !0, E("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, av = function(e, t) {
        Iu.hasOwnProperty(t) && Iu[t] || (Iu[t] = !0, E(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace($u, "")));
      }, iv = function(e, t) {
        nv || (nv = !0, E("`NaN` is an invalid value for the `%s` css style property.", e));
      }, jm = function(e, t) {
        If || (If = !0, E("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Jp = function(e, t) {
        e.indexOf("-") > -1 ? Wf(e) : ev.test(e) ? rv(e) : $u.test(t) && av(e, t), typeof t == "number" && (isNaN(t) ? iv(e, t) : isFinite(t) || jm(e, t));
      };
    }
    var Vm = Jp;
    function Bm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Fm(i)) + ":", t += ec(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function lv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Vm(i, t[i]);
          var s = ec(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Pm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ua(e) {
      var t = {};
      for (var a in e)
        for (var i = Xp[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Qo(e, t) {
      {
        if (!t)
          return;
        var a = ua(e), i = ua(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, E("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Pm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var uv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, ov = Qe({
      menuitem: !0
    }, uv), sv = "__html";
    function tc(e, t) {
      if (t) {
        if (ov[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(sv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && E("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function gi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var nc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, cv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ha = {}, Gf = new RegExp("^(aria)-[" + Ce + "]*$"), Wo = new RegExp("^(aria)[A-Z][" + Ce + "]*$");
    function qf(e, t) {
      {
        if (Zn.call(Ha, t) && Ha[t])
          return !0;
        if (Wo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = cv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return E("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ha[t] = !0, !0;
          if (t !== i)
            return E("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Ha[t] = !0, !0;
        }
        if (Gf.test(t)) {
          var u = t.toLowerCase(), s = cv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Ha[t] = !0, !1;
          if (t !== s)
            return E("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Ha[t] = !0, !0;
        }
      }
      return !0;
    }
    function fv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = qf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? E("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && E("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function rc(e, t) {
      gi(e, t) || fv(e, t);
    }
    var Pl = !1;
    function Xf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Pl && (Pl = !0, e === "select" && t.multiple ? E("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : E("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Kf = function() {
    };
    {
      var Ln = {}, Zf = /^on./, dv = /^on[^A-Z]/, pv = new RegExp("^(aria)-[" + Ce + "]*$"), vv = new RegExp("^(aria)[A-Z][" + Ce + "]*$");
      Kf = function(e, t, a, i) {
        if (Zn.call(Ln, t) && Ln[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return E("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Ln[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return E("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Ln[t] = !0, !0;
          if (Zf.test(t))
            return E("Unknown event handler property `%s`. It will be ignored.", t), Ln[t] = !0, !0;
        } else if (Zf.test(t))
          return dv.test(t) && E("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Ln[t] = !0, !0;
        if (pv.test(t) || vv.test(t))
          return !0;
        if (u === "innerhtml")
          return E("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Ln[t] = !0, !0;
        if (u === "aria")
          return E("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Ln[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return E("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Ln[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return E("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Ln[t] = !0, !0;
        var v = ra(t), y = v !== null && v.type === Da;
        if (nc.hasOwnProperty(u)) {
          var g = nc[u];
          if (g !== t)
            return E("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Ln[t] = !0, !0;
        } else if (!y && t !== u)
          return E("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Ln[t] = !0, !0;
        return typeof a == "boolean" && br(t, a, v, !1) ? (a ? E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Ln[t] = !0, !0) : y ? !0 : br(t, a, v, !1) ? (Ln[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Fn && (E("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Ln[t] = !0), !0);
      };
    }
    var hv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = Kf(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? E("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && E("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function mv(e, t, a) {
      gi(e, t) || hv(e, t, a);
    }
    var Si = 1, Go = 2, $l = 4, $m = Si | Go | $l, qo = null;
    function Xo(e) {
      qo !== null && E("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), qo = e;
    }
    function Ym() {
      qo === null && E("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), qo = null;
    }
    function yv(e) {
      return e === qo;
    }
    function ac(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === yi ? t.parentNode : t;
    }
    var Lt = null, il = null, Ei = null;
    function Qu(e) {
      var t = So(e);
      if (t) {
        if (typeof Lt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = yh(a);
          Lt(t.stateNode, t.type, i);
        }
      }
    }
    function gv(e) {
      Lt = e;
    }
    function ic(e) {
      il ? Ei ? Ei.push(e) : Ei = [e] : il = e;
    }
    function Ko() {
      return il !== null || Ei !== null;
    }
    function Zo() {
      if (il) {
        var e = il, t = Ei;
        if (il = null, Ei = null, Qu(e), t)
          for (var a = 0; a < t.length; a++)
            Qu(t[a]);
      }
    }
    var Yl = function(e, t) {
      return e(t);
    }, Jf = function() {
    }, ed = !1;
    function Im() {
      var e = Ko();
      e && (Jf(), Zo());
    }
    function td(e, t, a) {
      if (ed)
        return e(t, a);
      ed = !0;
      try {
        return Yl(e, t, a);
      } finally {
        ed = !1, Im();
      }
    }
    function lc(e, t, a) {
      Yl = e, Jf = a;
    }
    function uc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function nd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && uc(t));
        default:
          return !1;
      }
    }
    function Il(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = yh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (nd(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Jo = !1;
    if (cn)
      try {
        var Ql = {};
        Object.defineProperty(Ql, "passive", {
          get: function() {
            Jo = !0;
          }
        }), window.addEventListener("test", Ql, Ql), window.removeEventListener("test", Ql, Ql);
      } catch {
        Jo = !1;
      }
    function Sv(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var rd = Sv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var ad = document.createElement("react");
      rd = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), b = !1, w = !0, L = window.event, N = Object.getOwnPropertyDescriptor(window, "event");
        function H() {
          ad.removeEventListener(F, we, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = L);
        }
        var ie = Array.prototype.slice.call(arguments, 3);
        function we() {
          b = !0, H(), a.apply(i, ie), w = !1;
        }
        var ye, ut = !1, Je = !1;
        function D(k) {
          if (ye = k.error, ut = !0, ye === null && k.colno === 0 && k.lineno === 0 && (Je = !0), k.defaultPrevented && ye != null && typeof ye == "object")
            try {
              ye._suppressLogging = !0;
            } catch {
            }
        }
        var F = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), ad.addEventListener(F, we, !1), g.initEvent(F, !1, !1), ad.dispatchEvent(g), N && Object.defineProperty(window, "event", N), b && w && (ut ? Je && (ye = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ye = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ye)), window.removeEventListener("error", D), !b)
          return H(), Sv.apply(this, arguments);
      };
    }
    var Qm = rd, ll = !1, Fa = null, es = !1, ul = null, Xa = {
      onError: function(e) {
        ll = !0, Fa = e;
      }
    };
    function Wl(e, t, a, i, u, s, f, p, v) {
      ll = !1, Fa = null, Qm.apply(Xa, arguments);
    }
    function Ci(e, t, a, i, u, s, f, p, v) {
      if (Wl.apply(this, arguments), ll) {
        var y = ld();
        es || (es = !0, ul = y);
      }
    }
    function id() {
      if (es) {
        var e = ul;
        throw es = !1, ul = null, e;
      }
    }
    function Wm() {
      return ll;
    }
    function ld() {
      if (ll) {
        var e = Fa;
        return ll = !1, Fa = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function oa(e) {
      return e._reactInternals;
    }
    function ts(e) {
      return e._reactInternals !== void 0;
    }
    function Wu(e, t) {
      e._reactInternals = t;
    }
    var Te = (
      /*                      */
      0
    ), ol = (
      /*                */
      1
    ), Bt = (
      /*                    */
      2
    ), Pe = (
      /*                       */
      4
    ), St = (
      /*                */
      16
    ), Tt = (
      /*                 */
      32
    ), Ka = (
      /*                     */
      64
    ), Ne = (
      /*                   */
      128
    ), un = (
      /*            */
      256
    ), Lr = (
      /*                          */
      512
    ), sa = (
      /*                     */
      1024
    ), Gt = (
      /*                      */
      2048
    ), ca = (
      /*                    */
      4096
    ), sl = (
      /*                   */
      8192
    ), ns = (
      /*             */
      16384
    ), oc = Gt | Pe | Ka | Lr | sa | ns, Ev = (
      /*               */
      32767
    ), Qr = (
      /*                   */
      32768
    ), Mn = (
      /*                */
      65536
    ), rs = (
      /* */
      131072
    ), ud = (
      /*                       */
      1048576
    ), od = (
      /*                    */
      2097152
    ), Mr = (
      /*                 */
      4194304
    ), cl = (
      /*                */
      8388608
    ), Nr = (
      /*               */
      16777216
    ), Gl = (
      /*              */
      33554432
    ), Gu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Pe | sa | 0
    ), zr = Bt | Pe | St | Tt | Lr | ca | sl, er = Pe | Ka | Lr | sl, fa = Gt | St, Vn = Mr | cl | od, Ti = A.ReactCurrentOwner;
    function Wr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Bt | ca)) !== Te && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === oe ? a : null;
    }
    function sd(e) {
      if (e.tag === Re) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function sc(e) {
      return e.tag === oe ? e.stateNode.containerInfo : null;
    }
    function cd(e) {
      return Wr(e) === e;
    }
    function Gr(e) {
      {
        var t = Ti.current;
        if (t !== null && t.tag === me) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || E("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ae(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = oa(e);
      return u ? Wr(u) === u : !1;
    }
    function Ur(e) {
      if (Wr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Pt(e) {
      var t = e.alternate;
      if (!t) {
        var a = Wr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return Ur(s), e;
            if (v === u)
              return Ur(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== oe)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function da(e) {
      var t = Pt(e);
      return t !== null ? fd(t) : null;
    }
    function fd(e) {
      if (e.tag === ue || e.tag === Fe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = fd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Cv(e) {
      var t = Pt(e);
      return t !== null ? cc(t) : null;
    }
    function cc(e) {
      if (e.tag === ue || e.tag === Fe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ge) {
          var a = cc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var fc = J.unstable_scheduleCallback, Tv = J.unstable_cancelCallback, dc = J.unstable_shouldYield, Rv = J.unstable_requestPaint, en = J.unstable_now, dd = J.unstable_getCurrentPriorityLevel, pc = J.unstable_ImmediatePriority, qr = J.unstable_UserBlockingPriority, Za = J.unstable_NormalPriority, vc = J.unstable_LowPriority, fl = J.unstable_IdlePriority, pd = J.unstable_yieldValue, vd = J.unstable_setDisableYieldValue, dl = null, Nn = null, q = null, dn = !1, Bn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function hd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return E("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ft && (e = Qe({}, e, {
          getLaneLabelMap: vl,
          injectProfilingHooks: wi
        })), dl = t.inject(e), Nn = t;
      } catch (a) {
        E("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function wv(e, t) {
      if (Nn && typeof Nn.onScheduleFiberRoot == "function")
        try {
          Nn.onScheduleFiberRoot(dl, e, t);
        } catch (a) {
          dn || (dn = !0, E("React instrumentation encountered an error: %s", a));
        }
    }
    function Ri(e, t) {
      if (Nn && typeof Nn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ne) === Ne;
          if (Ke) {
            var i;
            switch (t) {
              case tr:
                i = pc;
                break;
              case Pn:
                i = qr;
                break;
              case bi:
                i = Za;
                break;
              case ds:
                i = fl;
                break;
              default:
                i = Za;
                break;
            }
            Nn.onCommitFiberRoot(dl, e, i, a);
          }
        } catch (u) {
          dn || (dn = !0, E("React instrumentation encountered an error: %s", u));
        }
    }
    function pl(e) {
      if (Nn && typeof Nn.onPostCommitFiberRoot == "function")
        try {
          Nn.onPostCommitFiberRoot(dl, e);
        } catch (t) {
          dn || (dn = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function md(e) {
      if (Nn && typeof Nn.onCommitFiberUnmount == "function")
        try {
          Nn.onCommitFiberUnmount(dl, e);
        } catch (t) {
          dn || (dn = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function Tn(e) {
      if (typeof pd == "function" && (vd(e), Ft(e)), Nn && typeof Nn.setStrictMode == "function")
        try {
          Nn.setStrictMode(dl, e);
        } catch (t) {
          dn || (dn = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function wi(e) {
      q = e;
    }
    function vl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < $t; a++) {
          var i = Gm(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function hc(e) {
      q !== null && typeof q.markCommitStarted == "function" && q.markCommitStarted(e);
    }
    function yd() {
      q !== null && typeof q.markCommitStopped == "function" && q.markCommitStopped();
    }
    function hl(e) {
      q !== null && typeof q.markComponentRenderStarted == "function" && q.markComponentRenderStarted(e);
    }
    function ql() {
      q !== null && typeof q.markComponentRenderStopped == "function" && q.markComponentRenderStopped();
    }
    function xv(e) {
      q !== null && typeof q.markComponentPassiveEffectMountStarted == "function" && q.markComponentPassiveEffectMountStarted(e);
    }
    function gd() {
      q !== null && typeof q.markComponentPassiveEffectMountStopped == "function" && q.markComponentPassiveEffectMountStopped();
    }
    function mc(e) {
      q !== null && typeof q.markComponentPassiveEffectUnmountStarted == "function" && q.markComponentPassiveEffectUnmountStarted(e);
    }
    function bv() {
      q !== null && typeof q.markComponentPassiveEffectUnmountStopped == "function" && q.markComponentPassiveEffectUnmountStopped();
    }
    function _v(e) {
      q !== null && typeof q.markComponentLayoutEffectMountStarted == "function" && q.markComponentLayoutEffectMountStarted(e);
    }
    function Dv() {
      q !== null && typeof q.markComponentLayoutEffectMountStopped == "function" && q.markComponentLayoutEffectMountStopped();
    }
    function yc(e) {
      q !== null && typeof q.markComponentLayoutEffectUnmountStarted == "function" && q.markComponentLayoutEffectUnmountStarted(e);
    }
    function qu() {
      q !== null && typeof q.markComponentLayoutEffectUnmountStopped == "function" && q.markComponentLayoutEffectUnmountStopped();
    }
    function gc(e, t, a) {
      q !== null && typeof q.markComponentErrored == "function" && q.markComponentErrored(e, t, a);
    }
    function kv(e, t, a) {
      q !== null && typeof q.markComponentSuspended == "function" && q.markComponentSuspended(e, t, a);
    }
    function Ov(e) {
      q !== null && typeof q.markLayoutEffectsStarted == "function" && q.markLayoutEffectsStarted(e);
    }
    function Xu() {
      q !== null && typeof q.markLayoutEffectsStopped == "function" && q.markLayoutEffectsStopped();
    }
    function Lv(e) {
      q !== null && typeof q.markPassiveEffectsStarted == "function" && q.markPassiveEffectsStarted(e);
    }
    function as() {
      q !== null && typeof q.markPassiveEffectsStopped == "function" && q.markPassiveEffectsStopped();
    }
    function ja(e) {
      q !== null && typeof q.markRenderStarted == "function" && q.markRenderStarted(e);
    }
    function is() {
      q !== null && typeof q.markRenderYielded == "function" && q.markRenderYielded();
    }
    function Ku() {
      q !== null && typeof q.markRenderStopped == "function" && q.markRenderStopped();
    }
    function Xl(e) {
      q !== null && typeof q.markRenderScheduled == "function" && q.markRenderScheduled(e);
    }
    function Sd(e, t) {
      q !== null && typeof q.markForceUpdateScheduled == "function" && q.markForceUpdateScheduled(e, t);
    }
    function ml(e, t) {
      q !== null && typeof q.markStateUpdateScheduled == "function" && q.markStateUpdateScheduled(e, t);
    }
    var be = (
      /*                         */
      0
    ), Ge = (
      /*                 */
      1
    ), De = (
      /*                    */
      2
    ), tn = (
      /*               */
      8
    ), pa = (
      /*              */
      16
    ), Sc = Math.clz32 ? Math.clz32 : Kl, Ec = Math.log, Ed = Math.LN2;
    function Kl(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Ec(t) / Ed | 0) | 0;
    }
    var $t = 31, j = (
      /*                        */
      0
    ), it = (
      /*                          */
      0
    ), ke = (
      /*                        */
      1
    ), Ja = (
      /*    */
      2
    ), Xr = (
      /*             */
      4
    ), Zl = (
      /*            */
      8
    ), Yt = (
      /*                     */
      16
    ), Jl = (
      /*                */
      32
    ), yl = (
      /*                       */
      4194240
    ), eu = (
      /*                        */
      64
    ), va = (
      /*                        */
      128
    ), Ar = (
      /*                        */
      256
    ), tu = (
      /*                        */
      512
    ), ls = (
      /*                        */
      1024
    ), us = (
      /*                        */
      2048
    ), Cc = (
      /*                        */
      4096
    ), Tc = (
      /*                        */
      8192
    ), Rc = (
      /*                        */
      16384
    ), wc = (
      /*                       */
      32768
    ), xc = (
      /*                       */
      65536
    ), bc = (
      /*                       */
      131072
    ), _c = (
      /*                       */
      262144
    ), Dc = (
      /*                       */
      524288
    ), nu = (
      /*                       */
      1048576
    ), kc = (
      /*                       */
      2097152
    ), ru = (
      /*                            */
      130023424
    ), xi = (
      /*                             */
      4194304
    ), Oc = (
      /*                             */
      8388608
    ), os = (
      /*                             */
      16777216
    ), Lc = (
      /*                             */
      33554432
    ), Mc = (
      /*                             */
      67108864
    ), Cd = xi, Zu = (
      /*          */
      134217728
    ), Nc = (
      /*                          */
      268435455
    ), Ju = (
      /*               */
      268435456
    ), gl = (
      /*                        */
      536870912
    ), Hr = (
      /*                   */
      1073741824
    );
    function Gm(e) {
      {
        if (e & ke)
          return "Sync";
        if (e & Ja)
          return "InputContinuousHydration";
        if (e & Xr)
          return "InputContinuous";
        if (e & Zl)
          return "DefaultHydration";
        if (e & Yt)
          return "Default";
        if (e & Jl)
          return "TransitionHydration";
        if (e & yl)
          return "Transition";
        if (e & ru)
          return "Retry";
        if (e & Zu)
          return "SelectiveHydration";
        if (e & Ju)
          return "IdleHydration";
        if (e & gl)
          return "Idle";
        if (e & Hr)
          return "Offscreen";
      }
    }
    var Mt = -1, zc = eu, Uc = xi;
    function eo(e) {
      switch (yn(e)) {
        case ke:
          return ke;
        case Ja:
          return Ja;
        case Xr:
          return Xr;
        case Zl:
          return Zl;
        case Yt:
          return Yt;
        case Jl:
          return Jl;
        case eu:
        case va:
        case Ar:
        case tu:
        case ls:
        case us:
        case Cc:
        case Tc:
        case Rc:
        case wc:
        case xc:
        case bc:
        case _c:
        case Dc:
        case nu:
        case kc:
          return e & yl;
        case xi:
        case Oc:
        case os:
        case Lc:
        case Mc:
          return e & ru;
        case Zu:
          return Zu;
        case Ju:
          return Ju;
        case gl:
          return gl;
        case Hr:
          return Hr;
        default:
          return E("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ss(e, t) {
      var a = e.pendingLanes;
      if (a === j)
        return j;
      var i = j, u = e.suspendedLanes, s = e.pingedLanes, f = a & Nc;
      if (f !== j) {
        var p = f & ~u;
        if (p !== j)
          i = eo(p);
        else {
          var v = f & s;
          v !== j && (i = eo(v));
        }
      } else {
        var y = a & ~u;
        y !== j ? i = eo(y) : s !== j && (i = eo(s));
      }
      if (i === j)
        return j;
      if (t !== j && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === j) {
        var g = yn(i), b = yn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= b || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === Yt && (b & yl) !== j
        )
          return t;
      }
      (i & Xr) !== j && (i |= a & Yt);
      var w = e.entangledLanes;
      if (w !== j)
        for (var L = e.entanglements, N = i & w; N > 0; ) {
          var H = Sl(N), ie = 1 << H;
          i |= L[H], N &= ~ie;
        }
      return i;
    }
    function Mv(e, t) {
      for (var a = e.eventTimes, i = Mt; t > 0; ) {
        var u = Sl(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Ac(e, t) {
      switch (e) {
        case ke:
        case Ja:
        case Xr:
          return t + 250;
        case Zl:
        case Yt:
        case Jl:
        case eu:
        case va:
        case Ar:
        case tu:
        case ls:
        case us:
        case Cc:
        case Tc:
        case Rc:
        case wc:
        case xc:
        case bc:
        case _c:
        case Dc:
        case nu:
        case kc:
          return t + 5e3;
        case xi:
        case Oc:
        case os:
        case Lc:
        case Mc:
          return Mt;
        case Zu:
        case Ju:
        case gl:
        case Hr:
          return Mt;
        default:
          return E("Should have found matching lanes. This is a bug in React."), Mt;
      }
    }
    function qm(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Sl(f), v = 1 << p, y = s[p];
        y === Mt ? ((v & i) === j || (v & u) !== j) && (s[p] = Ac(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Xm(e) {
      return eo(e.pendingLanes);
    }
    function Td(e) {
      var t = e.pendingLanes & ~Hr;
      return t !== j ? t : t & Hr ? Hr : j;
    }
    function to(e) {
      return (e & ke) !== j;
    }
    function cs(e) {
      return (e & Nc) !== j;
    }
    function Hc(e) {
      return (e & ru) === e;
    }
    function Km(e) {
      var t = ke | Xr | Yt;
      return (e & t) === j;
    }
    function Nv(e) {
      return (e & yl) === e;
    }
    function fs(e, t) {
      var a = Ja | Xr | Zl | Yt;
      return (t & a) !== j;
    }
    function zv(e, t) {
      return (t & e.expiredLanes) !== j;
    }
    function Rd(e) {
      return (e & yl) !== j;
    }
    function wd() {
      var e = zc;
      return zc <<= 1, (zc & yl) === j && (zc = eu), e;
    }
    function Zm() {
      var e = Uc;
      return Uc <<= 1, (Uc & ru) === j && (Uc = xi), e;
    }
    function yn(e) {
      return e & -e;
    }
    function Rn(e) {
      return yn(e);
    }
    function Sl(e) {
      return 31 - Sc(e);
    }
    function Fc(e) {
      return Sl(e);
    }
    function Fr(e, t) {
      return (e & t) !== j;
    }
    function au(e, t) {
      return (e & t) === t;
    }
    function $e(e, t) {
      return e | t;
    }
    function no(e, t) {
      return e & ~t;
    }
    function xd(e, t) {
      return e & t;
    }
    function Uv(e) {
      return e;
    }
    function Av(e, t) {
      return e !== it && e < t ? e : t;
    }
    function jc(e) {
      for (var t = [], a = 0; a < $t; a++)
        t.push(e);
      return t;
    }
    function iu(e, t, a) {
      e.pendingLanes |= t, t !== gl && (e.suspendedLanes = j, e.pingedLanes = j);
      var i = e.eventTimes, u = Fc(t);
      i[u] = a;
    }
    function bd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Sl(i), s = 1 << u;
        a[u] = Mt, i &= ~s;
      }
    }
    function _d(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Dd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = j, e.pingedLanes = j, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Sl(f), v = 1 << p;
        i[p] = j, u[p] = Mt, s[p] = Mt, f &= ~v;
      }
    }
    function ro(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Sl(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Jm(e, t) {
      var a = yn(t), i;
      switch (a) {
        case Xr:
          i = Ja;
          break;
        case Yt:
          i = Zl;
          break;
        case eu:
        case va:
        case Ar:
        case tu:
        case ls:
        case us:
        case Cc:
        case Tc:
        case Rc:
        case wc:
        case xc:
        case bc:
        case _c:
        case Dc:
        case nu:
        case kc:
        case xi:
        case Oc:
        case os:
        case Lc:
        case Mc:
          i = Jl;
          break;
        case gl:
          i = Ju;
          break;
        default:
          i = it;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== it ? it : i;
    }
    function kd(e, t, a) {
      if (Bn)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Fc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Vc(e, t) {
      if (Bn)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Fc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Od(e, t) {
      return null;
    }
    var tr = ke, Pn = Xr, bi = Yt, ds = gl, lu = it;
    function ha() {
      return lu;
    }
    function wn(e) {
      lu = e;
    }
    function ps(e, t) {
      var a = lu;
      try {
        return lu = e, t();
      } finally {
        lu = a;
      }
    }
    function nr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ey(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Ld(e, t) {
      return e !== 0 && e < t;
    }
    function vs(e) {
      var t = yn(e);
      return Ld(tr, t) ? Ld(Pn, t) ? cs(t) ? bi : ds : Pn : tr;
    }
    function xn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Hv;
    function se(e) {
      Hv = e;
    }
    function ao(e) {
      Hv(e);
    }
    var hs;
    function Fv(e) {
      hs = e;
    }
    var jv;
    function ms(e) {
      jv = e;
    }
    var ys;
    function Md(e) {
      ys = e;
    }
    var Nd;
    function Vv(e) {
      Nd = e;
    }
    var Bc = !1, io = [], ei = null, qt = null, zn = null, ma = /* @__PURE__ */ new Map(), lo = /* @__PURE__ */ new Map(), _i = [], Va = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Bv(e) {
      return Va.indexOf(e) > -1;
    }
    function ti(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Pv(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ei = null;
          break;
        case "dragenter":
        case "dragleave":
          qt = null;
          break;
        case "mouseover":
        case "mouseout":
          zn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          ma.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          lo.delete(i);
          break;
        }
      }
    }
    function uo(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ti(t, a, i, u, s);
        if (t !== null) {
          var p = So(t);
          p !== null && hs(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function $v(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return ei = uo(ei, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return qt = uo(qt, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return zn = uo(zn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return ma.set(y, uo(ma.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, b = g.pointerId;
          return lo.set(b, uo(lo.get(b) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function zd(e) {
      var t = bs(e.target);
      if (t !== null) {
        var a = Wr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Re) {
            var u = sd(a);
            if (u !== null) {
              e.blockedOn = u, Nd(e.priority, function() {
                jv(a);
              });
              return;
            }
          } else if (i === oe) {
            var s = a.stateNode;
            if (xn(s)) {
              e.blockedOn = sc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Yv(e) {
      for (var t = ys(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < _i.length && Ld(t, _i[i].priority); i++)
        ;
      _i.splice(i, 0, a), i === 0 && zd(a);
    }
    function Pc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = uu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Xo(s), u.target.dispatchEvent(s), Ym();
        } else {
          var f = So(i);
          return f !== null && hs(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function gs(e, t, a) {
      Pc(e) && a.delete(t);
    }
    function Ud() {
      Bc = !1, ei !== null && Pc(ei) && (ei = null), qt !== null && Pc(qt) && (qt = null), zn !== null && Pc(zn) && (zn = null), ma.forEach(gs), lo.forEach(gs);
    }
    function rr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Bc || (Bc = !0, J.unstable_scheduleCallback(J.unstable_NormalPriority, Ud)));
    }
    function Ze(e) {
      if (io.length > 0) {
        rr(io[0], e);
        for (var t = 1; t < io.length; t++) {
          var a = io[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ei !== null && rr(ei, e), qt !== null && rr(qt, e), zn !== null && rr(zn, e);
      var i = function(p) {
        return rr(p, e);
      };
      ma.forEach(i), lo.forEach(i);
      for (var u = 0; u < _i.length; u++) {
        var s = _i[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; _i.length > 0; ) {
        var f = _i[0];
        if (f.blockedOn !== null)
          break;
        zd(f), f.blockedOn === null && _i.shift();
      }
    }
    var nn = A.ReactCurrentBatchConfig, on = !0;
    function Un(e) {
      on = !!e;
    }
    function Kr() {
      return on;
    }
    function oo(e, t, a) {
      var i = cr(t), u;
      switch (i) {
        case tr:
          u = bn;
          break;
        case Pn:
          u = Ss;
          break;
        case bi:
        default:
          u = Di;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function bn(e, t, a, i) {
      var u = ha(), s = nn.transition;
      nn.transition = null;
      try {
        wn(tr), Di(e, t, a, i);
      } finally {
        wn(u), nn.transition = s;
      }
    }
    function Ss(e, t, a, i) {
      var u = ha(), s = nn.transition;
      nn.transition = null;
      try {
        wn(Pn), Di(e, t, a, i);
      } finally {
        wn(u), nn.transition = s;
      }
    }
    function Di(e, t, a, i) {
      on && $c(e, t, a, i);
    }
    function $c(e, t, a, i) {
      var u = uu(e, t, a, i);
      if (u === null) {
        Ey(e, t, i, so, a), Pv(e, i);
        return;
      }
      if ($v(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Pv(e, i), t & $l && Bv(e)) {
        for (; u !== null; ) {
          var s = So(u);
          s !== null && ao(s);
          var f = uu(e, t, a, i);
          if (f === null && Ey(e, t, i, so, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Ey(e, t, i, null, a);
    }
    var so = null;
    function uu(e, t, a, i) {
      so = null;
      var u = ac(i), s = bs(u);
      if (s !== null) {
        var f = Wr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Re) {
            var v = sd(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === oe) {
            var y = f.stateNode;
            if (xn(y))
              return sc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return so = s, null;
    }
    function cr(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return tr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Pn;
        case "message": {
          var t = dd();
          switch (t) {
            case pc:
              return tr;
            case qr:
              return Pn;
            case Za:
            case vc:
              return bi;
            case fl:
              return ds;
            default:
              return bi;
          }
        }
        default:
          return bi;
      }
    }
    function Ad(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function co(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function ki(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Yc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ou = null, ni = null, El = null;
    function Cl(e) {
      return ou = e, ni = Qc(), !0;
    }
    function Ic() {
      ou = null, ni = null, El = null;
    }
    function fo() {
      if (El)
        return El;
      var e, t = ni, a = t.length, i, u = Qc(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return El = u.slice(e, p), El;
    }
    function Qc() {
      return "value" in ou ? ou.value : ou.textContent;
    }
    function su(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function cu() {
      return !0;
    }
    function ar() {
      return !1;
    }
    function gn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = cu : this.isDefaultPrevented = ar, this.isPropagationStopped = ar, this;
      }
      return Qe(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = cu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = cu);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: cu
      }), t;
    }
    var ir = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, lr = gn(ir), po = Qe({}, ir, {
      view: 0,
      detail: 0
    }), Hd = gn(po), Es, Fd, ya;
    function Iv(e) {
      e !== ya && (ya && e.type === "mousemove" ? (Es = e.screenX - ya.screenX, Fd = e.screenY - ya.screenY) : (Es = 0, Fd = 0), ya = e);
    }
    var vo = Qe({}, po, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: qc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Iv(e), Es);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Fd;
      }
    }), Tl = gn(vo), jd = Qe({}, vo, {
      dataTransfer: 0
    }), fu = gn(jd), Qv = Qe({}, po, {
      relatedTarget: 0
    }), Wc = gn(Qv), Vd = Qe({}, ir, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Gc = gn(Vd), ty = Qe({}, ir, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), ny = gn(ty), Wv = Qe({}, ir, {
      data: 0
    }), Bd = gn(Wv), du = Bd, ry = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, ho = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Gv(e) {
      if (e.key) {
        var t = ry[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = su(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? ho[e.keyCode] || "Unidentified" : "";
    }
    var sn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function ay(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = sn[e];
      return i ? !!a[i] : !1;
    }
    function qc(e) {
      return ay;
    }
    var iy = Qe({}, po, {
      key: Gv,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: qc,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? su(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? su(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), ly = gn(iy), qv = Qe({}, vo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Pd = gn(qv), uy = Qe({}, po, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: qc
    }), ga = gn(uy), $d = Qe({}, ir, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), oy = gn($d), Rl = Qe({}, vo, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Xc = gn(Rl), pu = [9, 13, 27, 32], Cs = 229, Ts = cn && "CompositionEvent" in window, vu = null;
    cn && "documentMode" in document && (vu = document.documentMode);
    var sy = cn && "TextEvent" in window && !vu, Kc = cn && (!Ts || vu && vu > 8 && vu <= 11), Xv = 32, Yd = String.fromCharCode(Xv);
    function Kv() {
      Er("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Er("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Er("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Er("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Rs = !1;
    function Zc(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Zv(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Id(e, t) {
      return e === "keydown" && t.keyCode === Cs;
    }
    function Jv(e, t) {
      switch (e) {
        case "keyup":
          return pu.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Cs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Qd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Jc(e) {
      return e.locale === "ko";
    }
    var Oi = !1;
    function Wd(e, t, a, i, u) {
      var s, f;
      if (Ts ? s = Zv(t) : Oi ? Jv(t, i) && (s = "onCompositionEnd") : Id(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Kc && !Jc(i) && (!Oi && s === "onCompositionStart" ? Oi = Cl(u) : s === "onCompositionEnd" && Oi && (f = fo()));
      var p = ah(a, s);
      if (p.length > 0) {
        var v = new Bd(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Qd(i);
          y !== null && (v.data = y);
        }
      }
    }
    function ef(e, t) {
      switch (e) {
        case "compositionend":
          return Qd(t);
        case "keypress":
          var a = t.which;
          return a !== Xv ? null : (Rs = !0, Yd);
        case "textInput":
          var i = t.data;
          return i === Yd && Rs ? null : i;
        default:
          return null;
      }
    }
    function eh(e, t) {
      if (Oi) {
        if (e === "compositionend" || !Ts && Jv(e, t)) {
          var a = fo();
          return Ic(), Oi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Zc(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Kc && !Jc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function cy(e, t, a, i, u) {
      var s;
      if (sy ? s = ef(t, i) : s = eh(t, i), !s)
        return null;
      var f = ah(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new du("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function tf(e, t, a, i, u, s, f) {
      Wd(e, t, a, i, u), cy(e, t, a, i, u);
    }
    var fy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function mo(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!fy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function dy(e) {
      if (!cn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function nf() {
      Er("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      ic(i);
      var u = ah(t, "onChange");
      if (u.length > 0) {
        var s = new lr("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var r = null, l = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, l, e, ac(e)), td(d, t);
    }
    function d(e) {
      E0(e, 0);
    }
    function m(e) {
      var t = sf(e);
      if (Fu(t))
        return e;
    }
    function S(e, t) {
      if (e === "change")
        return t;
    }
    var R = !1;
    cn && (R = dy("input") && (!document.documentMode || document.documentMode > 9));
    function z(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", Y);
    }
    function $() {
      r && (r.detachEvent("onpropertychange", Y), r = null, l = null);
    }
    function Y(e) {
      e.propertyName === "value" && m(l) && c(e);
    }
    function P(e, t, a) {
      e === "focusin" ? ($(), z(t, a)) : e === "focusout" && $();
    }
    function ne(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(l);
    }
    function ce(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function pe(e, t) {
      if (e === "click")
        return m(t);
    }
    function pn(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function _(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || xe(e, "number", e.value);
    }
    function x(e, t, a, i, u, s, f) {
      var p = a ? sf(a) : window, v, y;
      if (o(p) ? v = S : mo(p) ? R ? v = pn : (v = ne, y = P) : ce(p) && (v = pe), v) {
        var g = v(t, a);
        if (g) {
          n(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && _(p);
    }
    function O() {
      ba("onMouseEnter", ["mouseout", "mouseover"]), ba("onMouseLeave", ["mouseout", "mouseover"]), ba("onPointerEnter", ["pointerout", "pointerover"]), ba("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function W(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !yv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (bs(y) || up(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var b = u.ownerDocument;
          b ? g = b.defaultView || b.parentWindow : g = window;
        }
        var w, L;
        if (v) {
          var N = i.relatedTarget || i.toElement;
          if (w = a, L = N ? bs(N) : null, L !== null) {
            var H = Wr(L);
            (L !== H || L.tag !== ue && L.tag !== Fe) && (L = null);
          }
        } else
          w = null, L = a;
        if (w !== L) {
          var ie = Tl, we = "onMouseLeave", ye = "onMouseEnter", ut = "mouse";
          (t === "pointerout" || t === "pointerover") && (ie = Pd, we = "onPointerLeave", ye = "onPointerEnter", ut = "pointer");
          var Je = w == null ? g : sf(w), D = L == null ? g : sf(L), F = new ie(we, ut + "leave", w, i, u);
          F.target = Je, F.relatedTarget = D;
          var k = null, I = bs(u);
          if (I === a) {
            var le = new ie(ye, ut + "enter", L, i, u);
            le.target = D, le.relatedTarget = Je, k = le;
          }
          ST(e, F, k, w, L);
        }
      }
    }
    function he(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var fe = typeof Object.is == "function" ? Object.is : he;
    function Se(e, t) {
      if (fe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Zn.call(t, s) || !fe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function ze(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function An(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function pt(e, t) {
      for (var a = ze(e), i = 0, u = 0; a; ) {
        if (a.nodeType === yi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = ze(An(a));
      }
    }
    function wl(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return py(e, u, s, f, p);
    }
    function py(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, b = null;
      e:
        for (; ; ) {
          for (var w = null; g === t && (a === 0 || g.nodeType === yi) && (f = s + a), g === i && (u === 0 || g.nodeType === yi) && (p = s + u), g.nodeType === yi && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
            b = g, g = w;
          for (; ; ) {
            if (g === e)
              break e;
            if (b === t && ++v === a && (f = s), b === i && ++y === u && (p = s), (w = g.nextSibling) !== null)
              break;
            g = b, b = g.parentNode;
          }
          g = w;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function eT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = pt(e, f), g = pt(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var b = a.createRange();
          b.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(b), u.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), u.addRange(b));
        }
      }
    }
    function o0(e) {
      return e && e.nodeType === yi;
    }
    function s0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : o0(e) ? !1 : o0(t) ? s0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function tT(e) {
      return e && e.ownerDocument && s0(e.ownerDocument.documentElement, e);
    }
    function nT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function c0() {
      for (var e = window, t = rl(); t instanceof e.HTMLIFrameElement; ) {
        if (nT(t))
          e = t.contentWindow;
        else
          return t;
        t = rl(e.document);
      }
      return t;
    }
    function vy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function rT() {
      var e = c0();
      return {
        focusedElem: e,
        selectionRange: vy(e) ? iT(e) : null
      };
    }
    function aT(e) {
      var t = c0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && tT(a)) {
        i !== null && vy(a) && lT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Or && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function iT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = wl(e), t || {
        start: 0,
        end: 0
      };
    }
    function lT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : eT(e, t);
    }
    var uT = cn && "documentMode" in document && document.documentMode <= 11;
    function oT() {
      Er("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var rf = null, hy = null, Gd = null, my = !1;
    function sT(e) {
      if ("selectionStart" in e && vy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function cT(e) {
      return e.window === e ? e.document : e.nodeType === Aa ? e : e.ownerDocument;
    }
    function f0(e, t, a) {
      var i = cT(a);
      if (!(my || rf == null || rf !== rl(i))) {
        var u = sT(rf);
        if (!Gd || !Se(Gd, u)) {
          Gd = u;
          var s = ah(hy, "onSelect");
          if (s.length > 0) {
            var f = new lr("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = rf;
          }
        }
      }
    }
    function fT(e, t, a, i, u, s, f) {
      var p = a ? sf(a) : window;
      switch (t) {
        case "focusin":
          (mo(p) || p.contentEditable === "true") && (rf = p, hy = a, Gd = null);
          break;
        case "focusout":
          rf = null, hy = null, Gd = null;
          break;
        case "mousedown":
          my = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          my = !1, f0(e, i, u);
          break;
        case "selectionchange":
          if (uT)
            break;
        case "keydown":
        case "keyup":
          f0(e, i, u);
      }
    }
    function th(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var af = {
      animationend: th("Animation", "AnimationEnd"),
      animationiteration: th("Animation", "AnimationIteration"),
      animationstart: th("Animation", "AnimationStart"),
      transitionend: th("Transition", "TransitionEnd")
    }, yy = {}, d0 = {};
    cn && (d0 = document.createElement("div").style, "AnimationEvent" in window || (delete af.animationend.animation, delete af.animationiteration.animation, delete af.animationstart.animation), "TransitionEvent" in window || delete af.transitionend.transition);
    function nh(e) {
      if (yy[e])
        return yy[e];
      if (!af[e])
        return e;
      var t = af[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in d0)
          return yy[e] = t[a];
      return e;
    }
    var p0 = nh("animationend"), v0 = nh("animationiteration"), h0 = nh("animationstart"), m0 = nh("transitionend"), y0 = /* @__PURE__ */ new Map(), g0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function yo(e, t) {
      y0.set(e, t), Er(t, [e]);
    }
    function dT() {
      for (var e = 0; e < g0.length; e++) {
        var t = g0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        yo(a, "on" + i);
      }
      yo(p0, "onAnimationEnd"), yo(v0, "onAnimationIteration"), yo(h0, "onAnimationStart"), yo("dblclick", "onDoubleClick"), yo("focusin", "onFocus"), yo("focusout", "onBlur"), yo(m0, "onTransitionEnd");
    }
    function pT(e, t, a, i, u, s, f) {
      var p = y0.get(t);
      if (p !== void 0) {
        var v = lr, y = t;
        switch (t) {
          case "keypress":
            if (su(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = ly;
            break;
          case "focusin":
            y = "focus", v = Wc;
            break;
          case "focusout":
            y = "blur", v = Wc;
            break;
          case "beforeblur":
          case "afterblur":
            v = Wc;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Tl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = fu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = ga;
            break;
          case p0:
          case v0:
          case h0:
            v = Gc;
            break;
          case m0:
            v = oy;
            break;
          case "scroll":
            v = Hd;
            break;
          case "wheel":
            v = Xc;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = ny;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Pd;
            break;
        }
        var g = (s & $l) !== 0;
        {
          var b = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = yT(a, p, i.type, g, b);
          if (w.length > 0) {
            var L = new v(p, y, null, i, u);
            e.push({
              event: L,
              listeners: w
            });
          }
        }
      }
    }
    dT(), O(), nf(), oT(), Kv();
    function vT(e, t, a, i, u, s, f) {
      pT(e, t, a, i, u, s);
      var p = (s & $m) === 0;
      p && (W(e, t, a, i, u), x(e, t, a, i, u), fT(e, t, a, i, u), tf(e, t, a, i, u));
    }
    var qd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], gy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(qd));
    function S0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ci(i, t, void 0, e), e.currentTarget = null;
    }
    function hT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          S0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], b = g.instance, w = g.currentTarget, L = g.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          S0(e, L, w), i = b;
        }
    }
    function E0(e, t) {
      for (var a = (t & $l) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        hT(s, f, a);
      }
      id();
    }
    function mT(e, t, a, i, u) {
      var s = ac(a), f = [];
      vT(f, e, i, a, s, t), E0(f, t);
    }
    function rn(e, t) {
      gy.has(e) || E('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = QR(t), u = ET(e, a);
      i.has(u) || (C0(t, e, Go, a), i.add(u));
    }
    function Sy(e, t, a) {
      gy.has(e) && !t && E('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= $l), C0(a, e, i, t);
    }
    var rh = "_reactListening" + Math.random().toString(36).slice(2);
    function Xd(e) {
      if (!e[rh]) {
        e[rh] = !0, et.forEach(function(a) {
          a !== "selectionchange" && (gy.has(a) || Sy(a, !1, e), Sy(a, !0, e));
        });
        var t = e.nodeType === Aa ? e : e.ownerDocument;
        t !== null && (t[rh] || (t[rh] = !0, Sy("selectionchange", !1, t)));
      }
    }
    function C0(e, t, a, i, u) {
      var s = oo(e, t, a), f = void 0;
      Jo && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? ki(e, t, s, f) : co(e, t, s) : f !== void 0 ? Yc(e, t, s, f) : Ad(e, t, s);
    }
    function T0(e, t) {
      return e === t || e.nodeType === mn && e.parentNode === t;
    }
    function Ey(e, t, a, i, u) {
      var s = i;
      if (!(t & Si) && !(t & Go)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === oe || v === ge) {
                var y = p.stateNode.containerInfo;
                if (T0(y, f))
                  break;
                if (v === ge)
                  for (var g = p.return; g !== null; ) {
                    var b = g.tag;
                    if (b === oe || b === ge) {
                      var w = g.stateNode.containerInfo;
                      if (T0(w, f))
                        return;
                    }
                    g = g.return;
                  }
                for (; y !== null; ) {
                  var L = bs(y);
                  if (L === null)
                    return;
                  var N = L.tag;
                  if (N === ue || N === Fe) {
                    p = s = L;
                    continue e;
                  }
                  y = y.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      td(function() {
        return mT(e, t, a, s);
      });
    }
    function Kd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function yT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, w = b.stateNode, L = b.tag;
        if (L === ue && w !== null && (g = w, p !== null)) {
          var N = Il(y, p);
          N != null && v.push(Kd(y, N, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function ah(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ue && f !== null) {
          var v = f, y = Il(u, a);
          y != null && i.unshift(Kd(u, y, v));
          var g = Il(u, t);
          g != null && i.push(Kd(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function lf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ue);
      return e || null;
    }
    function gT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = lf(s))
        u++;
      for (var f = 0, p = i; p; p = lf(p))
        f++;
      for (; u - f > 0; )
        a = lf(a), u--;
      for (; f - u > 0; )
        i = lf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = lf(a), i = lf(i);
      }
      return null;
    }
    function R0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === ue && g !== null) {
          var w = g;
          if (u) {
            var L = Il(p, s);
            L != null && f.unshift(Kd(p, L, w));
          } else if (!u) {
            var N = Il(p, s);
            N != null && f.push(Kd(p, N, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function ST(e, t, a, i, u) {
      var s = i && u ? gT(i, u) : null;
      i !== null && R0(e, t, i, s, !1), u !== null && a !== null && R0(e, a, u, s, !0);
    }
    function ET(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Sa = !1, Zd = "dangerouslySetInnerHTML", ih = "suppressContentEditableWarning", go = "suppressHydrationWarning", w0 = "autoFocus", ws = "children", xs = "style", lh = "__html", Cy, uh, Jd, x0, oh, b0, _0;
    Cy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, uh = function(e, t) {
      rc(e, t), Xf(e, t), mv(e, t, {
        registrationNameDependencies: zt,
        possibleRegistrationNames: ci
      });
    }, b0 = cn && !document.documentMode, Jd = function(e, t, a) {
      if (!Sa) {
        var i = sh(a), u = sh(t);
        u !== i && (Sa = !0, E("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, x0 = function(e) {
      if (!Sa) {
        Sa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), E("Extra attributes from the server: %s", t);
      }
    }, oh = function(e, t) {
      t === !1 ? E("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : E("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, _0 = function(e, t) {
      var a = e.namespaceURI === mi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var CT = /\r\n?/g, TT = /\u0000|\uFFFD/g;
    function sh(e) {
      Ya(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(CT, `
`).replace(TT, "");
    }
    function ch(e, t, a, i) {
      var u = sh(t), s = sh(e);
      if (s !== u && (i && (Sa || (Sa = !0, E('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && ve))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function D0(e) {
      return e.nodeType === Aa ? e : e.ownerDocument;
    }
    function RT() {
    }
    function fh(e) {
      e.onclick = RT;
    }
    function wT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === xs)
            f && Object.freeze(f), lv(t, f);
          else if (s === Zd) {
            var p = f ? f[lh] : void 0;
            p != null && qp(t, p);
          } else if (s === ws)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && Js(t, f);
            } else
              typeof f == "number" && Js(t, "" + f);
          else
            s === ih || s === go || s === w0 || (zt.hasOwnProperty(s) ? f != null && (typeof f != "function" && oh(s, f), s === "onScroll" && rn("scroll", t)) : f != null && Qa(t, s, f, u));
        }
    }
    function xT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === xs ? lv(e, f) : s === Zd ? qp(e, f) : s === ws ? Js(e, f) : Qa(e, s, f, i);
      }
    }
    function bT(e, t, a, i) {
      var u, s = D0(a), f, p = i;
      if (p === mi && (p = Ks(e)), p === mi) {
        if (u = gi(e, t), !u && e !== e.toLowerCase() && E("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === mi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Zn.call(Cy, e) && (Cy[e] = !0, E("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function _T(e, t) {
      return D0(t).createTextNode(e);
    }
    function DT(e, t, a, i) {
      var u = gi(t, a);
      uh(t, a);
      var s;
      switch (t) {
        case "dialog":
          rn("cancel", e), rn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          rn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < qd.length; f++)
            rn(qd[f], e);
          s = a;
          break;
        case "source":
          rn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          rn("error", e), rn("load", e), s = a;
          break;
        case "details":
          rn("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), rn("invalid", e);
          break;
        case "option":
          xt(e, a), s = a;
          break;
        case "select":
          Yo(e, a), s = $o(e, a), rn("invalid", e);
          break;
        case "textarea":
          Qp(e, a), s = Bf(e, a), rn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (tc(t, s), wT(t, e, i, s, u), t) {
        case "input":
          la(e), Q(e, a, !1);
          break;
        case "textarea":
          la(e), Gp(e);
          break;
        case "option":
          Ot(e, a);
          break;
        case "select":
          jf(e, a);
          break;
        default:
          typeof s.onClick == "function" && fh(e);
          break;
      }
    }
    function kT(e, t, a, i, u) {
      uh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = $o(e, a), p = $o(e, i), s = [];
          break;
        case "textarea":
          f = Bf(e, a), p = Bf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && fh(e);
          break;
      }
      tc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === xs) {
            var b = f[v];
            for (y in b)
              b.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else
            v === Zd || v === ws || v === ih || v === go || v === w0 || (zt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], L = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === L || w == null && L == null))
          if (v === xs)
            if (w && Object.freeze(w), L) {
              for (y in L)
                L.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && L[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === Zd) {
            var N = w ? w[lh] : void 0, H = L ? L[lh] : void 0;
            N != null && H !== N && (s = s || []).push(v, N);
          } else
            v === ws ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === ih || v === go || (zt.hasOwnProperty(v) ? (w != null && (typeof w != "function" && oh(v, w), v === "onScroll" && rn("scroll", e)), !s && L !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (Qo(g, p[xs]), (s = s || []).push(xs, g)), s;
    }
    function OT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && M(e, u);
      var s = gi(a, i), f = gi(a, u);
      switch (xT(e, t, s, f), a) {
        case "input":
          U(e, u);
          break;
        case "textarea":
          Wp(e, u);
          break;
        case "select":
          Nm(e, u);
          break;
      }
    }
    function LT(e) {
      {
        var t = e.toLowerCase();
        return nc.hasOwnProperty(t) && nc[t] || null;
      }
    }
    function MT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = gi(t, a), uh(t, a), t) {
        case "dialog":
          rn("cancel", e), rn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          rn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < qd.length; y++)
            rn(qd[y], e);
          break;
        case "source":
          rn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          rn("error", e), rn("load", e);
          break;
        case "details":
          rn("toggle", e);
          break;
        case "input":
          C(e, a), rn("invalid", e);
          break;
        case "option":
          xt(e, a);
          break;
        case "select":
          Yo(e, a), rn("invalid", e);
          break;
        case "textarea":
          Qp(e, a), rn("invalid", e);
          break;
      }
      tc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, b = 0; b < g.length; b++) {
          var w = g[b].name.toLowerCase();
          switch (w) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[b].name);
          }
        }
      }
      var L = null;
      for (var N in a)
        if (a.hasOwnProperty(N)) {
          var H = a[N];
          if (N === ws)
            typeof H == "string" ? e.textContent !== H && (a[go] !== !0 && ch(e.textContent, H, s, f), L = [ws, H]) : typeof H == "number" && e.textContent !== "" + H && (a[go] !== !0 && ch(e.textContent, H, s, f), L = [ws, "" + H]);
          else if (zt.hasOwnProperty(N))
            H != null && (typeof H != "function" && oh(N, H), N === "onScroll" && rn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ie = void 0, we = p && Ve ? null : ra(N);
            if (a[go] !== !0) {
              if (!(N === ih || N === go || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              N === "value" || N === "checked" || N === "selected")) {
                if (N === Zd) {
                  var ye = e.innerHTML, ut = H ? H[lh] : void 0;
                  if (ut != null) {
                    var Je = _0(e, ut);
                    Je !== ye && Jd(N, ye, Je);
                  }
                } else if (N === xs) {
                  if (v.delete(N), b0) {
                    var D = Bm(H);
                    ie = e.getAttribute("style"), D !== ie && Jd(N, ie, D);
                  }
                } else if (p && !Ve)
                  v.delete(N.toLowerCase()), ie = Pi(e, N, H), H !== ie && Jd(N, ie, H);
                else if (!fn(N, we, p) && !Vt(N, H, we, p)) {
                  var F = !1;
                  if (we !== null)
                    v.delete(we.attributeName), ie = Oa(e, N, H, we);
                  else {
                    var k = i;
                    if (k === mi && (k = Ks(t)), k === mi)
                      v.delete(N.toLowerCase());
                    else {
                      var I = LT(N);
                      I !== null && I !== N && (F = !0, v.delete(I)), v.delete(N);
                    }
                    ie = Pi(e, N, H);
                  }
                  var le = Ve;
                  !le && H !== ie && !F && Jd(N, ie, H);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[go] !== !0 && x0(v), t) {
        case "input":
          la(e), Q(e, a, !0);
          break;
        case "textarea":
          la(e), Gp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && fh(e);
          break;
      }
      return L;
    }
    function NT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Ty(e, t) {
      {
        if (Sa)
          return;
        Sa = !0, E("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ry(e, t) {
      {
        if (Sa)
          return;
        Sa = !0, E('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function wy(e, t, a) {
      {
        if (Sa)
          return;
        Sa = !0, E("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function xy(e, t) {
      {
        if (t === "" || Sa)
          return;
        Sa = !0, E('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function zT(e, t, a) {
      switch (t) {
        case "input":
          _e(e, a);
          return;
        case "textarea":
          Pf(e, a);
          return;
        case "select":
          zm(e, a);
          return;
      }
    }
    var ep = function() {
    }, tp = function() {
    };
    {
      var UT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], k0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], AT = k0.concat(["button"]), HT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], O0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      tp = function(e, t) {
        var a = Qe({}, e || O0), i = {
          tag: t
        };
        return k0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), AT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), UT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var FT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return HT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, jT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, L0 = {};
      ep = function(e, t, a) {
        a = a || O0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && E("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = FT(e, u) ? null : i, f = s ? null : jT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!L0[y]) {
            L0[y] = !0;
            var g = e, b = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", b = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), E("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, b, w);
            } else
              E("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var dh = "suppressHydrationWarning", ph = "$", vh = "/$", np = "$?", rp = "$!", VT = "style", by = null, _y = null;
    function BT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Aa:
        case Bl: {
          t = i === Aa ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Yf(null, "");
          break;
        }
        default: {
          var s = i === mn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Yf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = tp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function PT(e, t, a) {
      {
        var i = e, u = Yf(i.namespace, t), s = tp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function G_(e) {
      return e;
    }
    function $T(e) {
      by = Kr(), _y = rT();
      var t = null;
      return Un(!1), t;
    }
    function YT(e) {
      aT(_y), Un(by), by = null, _y = null;
    }
    function IT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ep(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = tp(f.ancestorInfo, e);
          ep(null, p, v);
        }
        s = f.namespace;
      }
      var y = bT(e, t, a, s);
      return lp(u, y), Uy(y, t), y;
    }
    function QT(e, t) {
      e.appendChild(t);
    }
    function WT(e, t, a, i, u) {
      switch (DT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function GT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = tp(f.ancestorInfo, t);
          ep(null, p, v);
        }
      }
      return kT(e, t, a, i);
    }
    function Dy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function qT(e, t, a, i) {
      {
        var u = a;
        ep(null, e, u.ancestorInfo);
      }
      var s = _T(e, t);
      return lp(i, s), s;
    }
    function XT() {
      var e = window.event;
      return e === void 0 ? bi : cr(e.type);
    }
    var ky = typeof setTimeout == "function" ? setTimeout : void 0, KT = typeof clearTimeout == "function" ? clearTimeout : void 0, Oy = -1, M0 = typeof Promise == "function" ? Promise : void 0, ZT = typeof queueMicrotask == "function" ? queueMicrotask : typeof M0 < "u" ? function(e) {
      return M0.resolve(null).then(e).catch(JT);
    } : ky;
    function JT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function eR(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function tR(e, t, a, i, u, s) {
      OT(e, t, a, i, u), Uy(e, u);
    }
    function N0(e) {
      Js(e, "");
    }
    function nR(e, t, a) {
      e.nodeValue = a;
    }
    function rR(e, t) {
      e.appendChild(t);
    }
    function aR(e, t) {
      var a;
      e.nodeType === mn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && fh(a);
    }
    function iR(e, t, a) {
      e.insertBefore(t, a);
    }
    function lR(e, t, a) {
      e.nodeType === mn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function uR(e, t) {
      e.removeChild(t);
    }
    function oR(e, t) {
      e.nodeType === mn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Ly(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === mn) {
          var s = u.data;
          if (s === vh)
            if (i === 0) {
              e.removeChild(u), Ze(t);
              return;
            } else
              i--;
          else
            (s === ph || s === np || s === rp) && i++;
        }
        a = u;
      } while (a);
      Ze(t);
    }
    function sR(e, t) {
      e.nodeType === mn ? Ly(e.parentNode, t) : e.nodeType === Or && Ly(e, t), Ze(e);
    }
    function cR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function fR(e) {
      e.nodeValue = "";
    }
    function dR(e, t) {
      e = e;
      var a = t[VT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = ec("display", i);
    }
    function pR(e, t) {
      e.nodeValue = t;
    }
    function vR(e) {
      e.nodeType === Or ? e.textContent = "" : e.nodeType === Aa && e.documentElement && e.removeChild(e.documentElement);
    }
    function hR(e, t, a) {
      return e.nodeType !== Or || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function mR(e, t) {
      return t === "" || e.nodeType !== yi ? null : e;
    }
    function yR(e) {
      return e.nodeType !== mn ? null : e;
    }
    function z0(e) {
      return e.data === np;
    }
    function My(e) {
      return e.data === rp;
    }
    function gR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function SR(e, t) {
      e._reactRetry = t;
    }
    function hh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Or || t === yi)
          break;
        if (t === mn) {
          var a = e.data;
          if (a === ph || a === rp || a === np)
            break;
          if (a === vh)
            return null;
        }
      }
      return e;
    }
    function ap(e) {
      return hh(e.nextSibling);
    }
    function ER(e) {
      return hh(e.firstChild);
    }
    function CR(e) {
      return hh(e.firstChild);
    }
    function TR(e) {
      return hh(e.nextSibling);
    }
    function RR(e, t, a, i, u, s, f) {
      lp(s, e), Uy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & Ge) !== be;
      return MT(e, t, a, p, i, y, f);
    }
    function wR(e, t, a, i) {
      return lp(a, e), a.mode & Ge, NT(e, t);
    }
    function xR(e, t) {
      lp(t, e);
    }
    function bR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === mn) {
          var i = t.data;
          if (i === vh) {
            if (a === 0)
              return ap(t);
            a--;
          } else
            (i === ph || i === rp || i === np) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function U0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === mn) {
          var i = t.data;
          if (i === ph || i === rp || i === np) {
            if (a === 0)
              return t;
            a--;
          } else
            i === vh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function _R(e) {
      Ze(e);
    }
    function DR(e) {
      Ze(e);
    }
    function kR(e) {
      return e !== "head" && e !== "body";
    }
    function OR(e, t, a, i) {
      var u = !0;
      ch(t.nodeValue, a, i, u);
    }
    function LR(e, t, a, i, u, s) {
      if (t[dh] !== !0) {
        var f = !0;
        ch(i.nodeValue, u, s, f);
      }
    }
    function MR(e, t) {
      t.nodeType === Or ? Ty(e, t) : t.nodeType === mn || Ry(e, t);
    }
    function NR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Or ? Ty(a, t) : t.nodeType === mn || Ry(a, t));
      }
    }
    function zR(e, t, a, i, u) {
      (u || t[dh] !== !0) && (i.nodeType === Or ? Ty(a, i) : i.nodeType === mn || Ry(a, i));
    }
    function UR(e, t, a) {
      wy(e, t);
    }
    function AR(e, t) {
      xy(e, t);
    }
    function HR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && wy(i, t);
      }
    }
    function FR(e, t) {
      {
        var a = e.parentNode;
        a !== null && xy(a, t);
      }
    }
    function jR(e, t, a, i, u, s) {
      (s || t[dh] !== !0) && wy(a, i);
    }
    function VR(e, t, a, i, u) {
      (u || t[dh] !== !0) && xy(a, i);
    }
    function BR(e) {
      E("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function PR(e) {
      Xd(e);
    }
    var uf = Math.random().toString(36).slice(2), of = "__reactFiber$" + uf, Ny = "__reactProps$" + uf, ip = "__reactContainer$" + uf, zy = "__reactEvents$" + uf, $R = "__reactListeners$" + uf, YR = "__reactHandles$" + uf;
    function IR(e) {
      delete e[of], delete e[Ny], delete e[zy], delete e[$R], delete e[YR];
    }
    function lp(e, t) {
      t[of] = e;
    }
    function mh(e, t) {
      t[ip] = e;
    }
    function A0(e) {
      e[ip] = null;
    }
    function up(e) {
      return !!e[ip];
    }
    function bs(e) {
      var t = e[of];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[ip] || a[of], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = U0(e); u !== null; ) {
              var s = u[of];
              if (s)
                return s;
              u = U0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function So(e) {
      var t = e[of] || e[ip];
      return t && (t.tag === ue || t.tag === Fe || t.tag === Re || t.tag === oe) ? t : null;
    }
    function sf(e) {
      if (e.tag === ue || e.tag === Fe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function yh(e) {
      return e[Ny] || null;
    }
    function Uy(e, t) {
      e[Ny] = t;
    }
    function QR(e) {
      var t = e[zy];
      return t === void 0 && (t = e[zy] = /* @__PURE__ */ new Set()), t;
    }
    var H0 = {}, F0 = A.ReactDebugCurrentFrame;
    function gh(e) {
      if (e) {
        var t = e._owner, a = Ga(e.type, e._source, t ? t.type : null);
        F0.setExtraStackFrame(a);
      } else
        F0.setExtraStackFrame(null);
    }
    function Li(e, t, a, i, u) {
      {
        var s = Function.call.bind(Zn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (gh(u), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), gh(null)), p instanceof Error && !(p.message in H0) && (H0[p.message] = !0, gh(u), E("Failed %s type: %s", a, p.message), gh(null));
          }
      }
    }
    var Ay = [], Sh;
    Sh = [];
    var hu = -1;
    function Eo(e) {
      return {
        current: e
      };
    }
    function jr(e, t) {
      if (hu < 0) {
        E("Unexpected pop.");
        return;
      }
      t !== Sh[hu] && E("Unexpected Fiber popped."), e.current = Ay[hu], Ay[hu] = null, Sh[hu] = null, hu--;
    }
    function Vr(e, t, a) {
      hu++, Ay[hu] = e.current, Sh[hu] = a, e.current = t;
    }
    var Hy;
    Hy = {};
    var Ba = {};
    Object.freeze(Ba);
    var mu = Eo(Ba), xl = Eo(!1), Fy = Ba;
    function cf(e, t, a) {
      return a && bl(t) ? Fy : mu.current;
    }
    function j0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function ff(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Ba;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ae(e) || "Unknown";
          Li(i, s, "context", p);
        }
        return u && j0(e, t, s), s;
      }
    }
    function Eh() {
      return xl.current;
    }
    function bl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ch(e) {
      jr(xl, e), jr(mu, e);
    }
    function jy(e) {
      jr(xl, e), jr(mu, e);
    }
    function V0(e, t, a) {
      {
        if (mu.current !== Ba)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Vr(mu, t, e), Vr(xl, a, e);
      }
    }
    function B0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ae(e) || "Unknown";
            Hy[s] || (Hy[s] = !0, E("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ae(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ae(e) || "Unknown";
          Li(u, f, "child context", v);
        }
        return Qe({}, a, f);
      }
    }
    function Th(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Ba;
        return Fy = mu.current, Vr(mu, a, e), Vr(xl, xl.current, e), !0;
      }
    }
    function P0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = B0(e, t, Fy);
          i.__reactInternalMemoizedMergedChildContext = u, jr(xl, e), jr(mu, e), Vr(mu, u, e), Vr(xl, a, e);
        } else
          jr(xl, e), Vr(xl, a, e);
      }
    }
    function WR(e) {
      {
        if (!cd(e) || e.tag !== me)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case oe:
              return t.stateNode.context;
            case me: {
              var a = t.type;
              if (bl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Co = 0, Rh = 1, yu = null, Vy = !1, By = !1;
    function $0(e) {
      yu === null ? yu = [e] : yu.push(e);
    }
    function GR(e) {
      Vy = !0, $0(e);
    }
    function Y0() {
      Vy && To();
    }
    function To() {
      if (!By && yu !== null) {
        By = !0;
        var e = 0, t = ha();
        try {
          var a = !0, i = yu;
          for (wn(tr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          yu = null, Vy = !1;
        } catch (s) {
          throw yu !== null && (yu = yu.slice(e + 1)), fc(pc, To), s;
        } finally {
          wn(t), By = !1;
        }
      }
      return null;
    }
    var df = [], pf = 0, wh = null, xh = 0, ri = [], ai = 0, _s = null, gu = 1, Su = "";
    function qR(e) {
      return ks(), (e.flags & ud) !== Te;
    }
    function XR(e) {
      return ks(), xh;
    }
    function KR() {
      var e = Su, t = gu, a = t & ~ZR(t);
      return a.toString(32) + e;
    }
    function Ds(e, t) {
      ks(), df[pf++] = xh, df[pf++] = wh, wh = e, xh = t;
    }
    function I0(e, t, a) {
      ks(), ri[ai++] = gu, ri[ai++] = Su, ri[ai++] = _s, _s = e;
      var i = gu, u = Su, s = bh(i) - 1, f = i & ~(1 << s), p = a + 1, v = bh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), w = f >> y, L = s - y, N = bh(t) + L, H = p << L, ie = H | w, we = b + u;
        gu = 1 << N | ie, Su = we;
      } else {
        var ye = p << s, ut = ye | f, Je = u;
        gu = 1 << v | ut, Su = Je;
      }
    }
    function Py(e) {
      ks();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ds(e, a), I0(e, a, i);
      }
    }
    function bh(e) {
      return 32 - Sc(e);
    }
    function ZR(e) {
      return 1 << bh(e) - 1;
    }
    function $y(e) {
      for (; e === wh; )
        wh = df[--pf], df[pf] = null, xh = df[--pf], df[pf] = null;
      for (; e === _s; )
        _s = ri[--ai], ri[ai] = null, Su = ri[--ai], ri[ai] = null, gu = ri[--ai], ri[ai] = null;
    }
    function JR() {
      return ks(), _s !== null ? {
        id: gu,
        overflow: Su
      } : null;
    }
    function ew(e, t) {
      ks(), ri[ai++] = gu, ri[ai++] = Su, ri[ai++] = _s, gu = t.id, Su = t.overflow, _s = e;
    }
    function ks() {
      dr() || E("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var fr = null, ii = null, Mi = !1, Os = !1, Ro = null;
    function tw() {
      Mi && E("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function Q0() {
      Os = !0;
    }
    function nw() {
      return Os;
    }
    function rw(e) {
      var t = e.stateNode.containerInfo;
      return ii = CR(t), fr = e, Mi = !0, Ro = null, Os = !1, !0;
    }
    function aw(e, t, a) {
      return ii = TR(t), fr = e, Mi = !0, Ro = null, Os = !1, a !== null && ew(e, a), !0;
    }
    function W0(e, t) {
      switch (e.tag) {
        case oe: {
          MR(e.stateNode.containerInfo, t);
          break;
        }
        case ue: {
          var a = (e.mode & Ge) !== be;
          zR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Re: {
          var i = e.memoizedState;
          i.dehydrated !== null && NR(i.dehydrated, t);
          break;
        }
      }
    }
    function G0(e, t) {
      W0(e, t);
      var a = u_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= St) : i.push(a);
    }
    function Yy(e, t) {
      {
        if (Os)
          return;
        switch (e.tag) {
          case oe: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ue:
                var i = t.type;
                t.pendingProps, UR(a, i);
                break;
              case Fe:
                var u = t.pendingProps;
                AR(a, u);
                break;
            }
            break;
          }
          case ue: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ue: {
                var v = t.type, y = t.pendingProps, g = (e.mode & Ge) !== be;
                jR(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case Fe: {
                var b = t.pendingProps, w = (e.mode & Ge) !== be;
                VR(
                  s,
                  f,
                  p,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
            }
            break;
          }
          case Re: {
            var L = e.memoizedState, N = L.dehydrated;
            if (N !== null)
              switch (t.tag) {
                case ue:
                  var H = t.type;
                  t.pendingProps, HR(N, H);
                  break;
                case Fe:
                  var ie = t.pendingProps;
                  FR(N, ie);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function q0(e, t) {
      t.flags = t.flags & ~ca | Bt, Yy(e, t);
    }
    function X0(e, t) {
      switch (e.tag) {
        case ue: {
          var a = e.type;
          e.pendingProps;
          var i = hR(t, a);
          return i !== null ? (e.stateNode = i, fr = e, ii = ER(i), !0) : !1;
        }
        case Fe: {
          var u = e.pendingProps, s = mR(t, u);
          return s !== null ? (e.stateNode = s, fr = e, ii = null, !0) : !1;
        }
        case Re: {
          var f = yR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: JR(),
              retryLane: Hr
            };
            e.memoizedState = p;
            var v = o_(f);
            return v.return = e, e.child = v, fr = e, ii = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Iy(e) {
      return (e.mode & Ge) !== be && (e.flags & Ne) === Te;
    }
    function Qy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Wy(e) {
      if (Mi) {
        var t = ii;
        if (!t) {
          Iy(e) && (Yy(fr, e), Qy()), q0(fr, e), Mi = !1, fr = e;
          return;
        }
        var a = t;
        if (!X0(e, t)) {
          Iy(e) && (Yy(fr, e), Qy()), t = ap(a);
          var i = fr;
          if (!t || !X0(e, t)) {
            q0(fr, e), Mi = !1, fr = e;
            return;
          }
          G0(i, a);
        }
      }
    }
    function iw(e, t, a) {
      var i = e.stateNode, u = !Os, s = RR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function lw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = wR(t, a, e);
      if (i) {
        var u = fr;
        if (u !== null)
          switch (u.tag) {
            case oe: {
              var s = u.stateNode.containerInfo, f = (u.mode & Ge) !== be;
              OR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ue: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & Ge) !== be;
              LR(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function uw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      xR(a, e);
    }
    function ow(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return bR(a);
    }
    function K0(e) {
      for (var t = e.return; t !== null && t.tag !== ue && t.tag !== oe && t.tag !== Re; )
        t = t.return;
      fr = t;
    }
    function _h(e) {
      if (e !== fr)
        return !1;
      if (!Mi)
        return K0(e), Mi = !0, !1;
      if (e.tag !== oe && (e.tag !== ue || kR(e.type) && !Dy(e.type, e.memoizedProps))) {
        var t = ii;
        if (t)
          if (Iy(e))
            Z0(e), Qy();
          else
            for (; t; )
              G0(e, t), t = ap(t);
      }
      return K0(e), e.tag === Re ? ii = ow(e) : ii = fr ? ap(e.stateNode) : null, !0;
    }
    function sw() {
      return Mi && ii !== null;
    }
    function Z0(e) {
      for (var t = ii; t; )
        W0(e, t), t = ap(t);
    }
    function vf() {
      fr = null, ii = null, Mi = !1, Os = !1;
    }
    function J0() {
      Ro !== null && (WC(Ro), Ro = null);
    }
    function dr() {
      return Mi;
    }
    function Gy(e) {
      Ro === null ? Ro = [e] : Ro.push(e);
    }
    var cw = A.ReactCurrentBatchConfig, fw = null;
    function dw() {
      return cw.transition;
    }
    var Ni = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var pw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & tn && (t = a), a = a.return;
        return t;
      }, Ls = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, op = [], sp = [], cp = [], fp = [], dp = [], pp = [], Ms = /* @__PURE__ */ new Set();
      Ni.recordUnsafeLifecycleWarnings = function(e, t) {
        Ms.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && op.push(e), e.mode & tn && typeof t.UNSAFE_componentWillMount == "function" && sp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && cp.push(e), e.mode & tn && typeof t.UNSAFE_componentWillReceiveProps == "function" && fp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & tn && typeof t.UNSAFE_componentWillUpdate == "function" && pp.push(e));
      }, Ni.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        op.length > 0 && (op.forEach(function(w) {
          e.add(Ae(w) || "Component"), Ms.add(w.type);
        }), op = []);
        var t = /* @__PURE__ */ new Set();
        sp.length > 0 && (sp.forEach(function(w) {
          t.add(Ae(w) || "Component"), Ms.add(w.type);
        }), sp = []);
        var a = /* @__PURE__ */ new Set();
        cp.length > 0 && (cp.forEach(function(w) {
          a.add(Ae(w) || "Component"), Ms.add(w.type);
        }), cp = []);
        var i = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(w) {
          i.add(Ae(w) || "Component"), Ms.add(w.type);
        }), fp = []);
        var u = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(w) {
          u.add(Ae(w) || "Component"), Ms.add(w.type);
        }), dp = []);
        var s = /* @__PURE__ */ new Set();
        if (pp.length > 0 && (pp.forEach(function(w) {
          s.add(Ae(w) || "Component"), Ms.add(w.type);
        }), pp = []), t.size > 0) {
          var f = Ls(t);
          E(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Ls(i);
          E(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Ls(s);
          E(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Ls(e);
          qe(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Ls(a);
          qe(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = Ls(u);
          qe(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var Dh = /* @__PURE__ */ new Map(), eE = /* @__PURE__ */ new Set();
      Ni.recordLegacyContextWarning = function(e, t) {
        var a = pw(e);
        if (a === null) {
          E("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!eE.has(e.type)) {
          var i = Dh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Dh.set(a, i)), i.push(e));
        }
      }, Ni.flushLegacyContextWarning = function() {
        Dh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ae(s) || "Component"), eE.add(s.type);
            });
            var u = Ls(i);
            try {
              Ct(a), E(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              ln();
            }
          }
        });
      }, Ni.discardPendingWarnings = function() {
        op = [], sp = [], cp = [], fp = [], dp = [], pp = [], Dh = /* @__PURE__ */ new Map();
      };
    }
    function zi(e, t) {
      if (e && e.defaultProps) {
        var a = Qe({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var qy = Eo(null), Xy;
    Xy = {};
    var kh = null, hf = null, Ky = null, Oh = !1;
    function Lh() {
      kh = null, hf = null, Ky = null, Oh = !1;
    }
    function tE() {
      Oh = !0;
    }
    function nE() {
      Oh = !1;
    }
    function rE(e, t, a) {
      Vr(qy, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Xy && E("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Xy;
    }
    function Zy(e, t) {
      var a = qy.current;
      jr(qy, t), e._currentValue = a;
    }
    function Jy(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (au(i.childLanes, t) ? u !== null && !au(u.childLanes, t) && (u.childLanes = $e(u.childLanes, t)) : (i.childLanes = $e(i.childLanes, t), u !== null && (u.childLanes = $e(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && E("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function vw(e, t, a) {
      hw(e, t, a);
    }
    function hw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === me) {
                var p = Rn(a), v = Eu(Mt, p);
                v.tag = Nh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = $e(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = $e(w.lanes, a)), Jy(i.return, a, e), s.lanes = $e(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Xt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Nt) {
          var L = i.return;
          if (L === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          L.lanes = $e(L.lanes, a);
          var N = L.alternate;
          N !== null && (N.lanes = $e(N.lanes, a)), Jy(L, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var H = u.sibling;
            if (H !== null) {
              H.return = u.return, u = H;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function mf(e, t) {
      kh = e, hf = null, Ky = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Fr(a.lanes, t) && _p(), a.firstContext = null);
      }
    }
    function Hn(e) {
      Oh && E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Ky !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (hf === null) {
          if (kh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          hf = a, kh.dependencies = {
            lanes: j,
            firstContext: a
          };
        } else
          hf = hf.next = a;
      }
      return t;
    }
    var Ns = null;
    function eg(e) {
      Ns === null ? Ns = [e] : Ns.push(e);
    }
    function mw() {
      if (Ns !== null) {
        for (var e = 0; e < Ns.length; e++) {
          var t = Ns[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Ns = null;
      }
    }
    function aE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, eg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Mh(e, i);
    }
    function yw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, eg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function gw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, eg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Mh(e, i);
    }
    function Ea(e, t) {
      return Mh(e, t);
    }
    var Sw = Mh;
    function Mh(e, t) {
      e.lanes = $e(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = $e(a.lanes, t)), a === null && (e.flags & (Bt | ca)) !== Te && i1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = $e(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = $e(a.childLanes, t) : (u.flags & (Bt | ca)) !== Te && i1(e), i = u, u = u.return;
      if (i.tag === oe) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var iE = 0, lE = 1, Nh = 2, tg = 3, zh = !1, ng, Uh;
    ng = !1, Uh = null;
    function rg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: j
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function uE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Eu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: iE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function wo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Uh === u && !ng && (E("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), ng = !0), Sb()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Sw(e, a);
      } else
        return gw(e, u, t, a);
    }
    function Ah(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Rd(a)) {
          var s = u.lanes;
          s = xd(s, e.pendingLanes);
          var f = $e(s, a);
          u.lanes = f, ro(e, f);
        }
      }
    }
    function ag(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Ew(e, t, a, i, u, s) {
      switch (a.tag) {
        case lE: {
          var f = a.payload;
          if (typeof f == "function") {
            tE();
            var p = f.call(s, i, u);
            {
              if (e.mode & tn) {
                Tn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Tn(!1);
                }
              }
              nE();
            }
            return p;
          }
          return f;
        }
        case tg:
          e.flags = e.flags & ~Mn | Ne;
        case iE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            tE(), y = v.call(s, i, u);
            {
              if (e.mode & tn) {
                Tn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Tn(!1);
                }
              }
              nE();
            }
          } else
            y = v;
          return y == null ? i : Qe({}, i, y);
        }
        case Nh:
          return zh = !0, i;
      }
      return i;
    }
    function Hh(e, t, a, i) {
      var u = e.updateQueue;
      zh = !1, Uh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var b = g.updateQueue, w = b.lastBaseUpdate;
          w !== f && (w === null ? b.firstBaseUpdate = y : w.next = y, b.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var L = u.baseState, N = j, H = null, ie = null, we = null, ye = s;
        do {
          var ut = ye.lane, Je = ye.eventTime;
          if (au(i, ut)) {
            if (we !== null) {
              var F = {
                eventTime: Je,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: it,
                tag: ye.tag,
                payload: ye.payload,
                callback: ye.callback,
                next: null
              };
              we = we.next = F;
            }
            L = Ew(e, u, ye, L, t, a);
            var k = ye.callback;
            if (k !== null && // If the update was already committed, we should not queue its
            // callback again.
            ye.lane !== it) {
              e.flags |= Ka;
              var I = u.effects;
              I === null ? u.effects = [ye] : I.push(ye);
            }
          } else {
            var D = {
              eventTime: Je,
              lane: ut,
              tag: ye.tag,
              payload: ye.payload,
              callback: ye.callback,
              next: null
            };
            we === null ? (ie = we = D, H = L) : we = we.next = D, N = $e(N, ut);
          }
          if (ye = ye.next, ye === null) {
            if (p = u.shared.pending, p === null)
              break;
            var le = p, te = le.next;
            le.next = null, ye = te, u.lastBaseUpdate = le, u.shared.pending = null;
          }
        } while (!0);
        we === null && (H = L), u.baseState = H, u.firstBaseUpdate = ie, u.lastBaseUpdate = we;
        var Le = u.shared.interleaved;
        if (Le !== null) {
          var je = Le;
          do
            N = $e(N, je.lane), je = je.next;
          while (je !== Le);
        } else
          s === null && (u.shared.lanes = j);
        jp(N), e.lanes = N, e.memoizedState = L;
      }
      Uh = null;
    }
    function Cw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function oE() {
      zh = !1;
    }
    function Fh() {
      return zh;
    }
    function sE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Cw(f, a));
        }
    }
    var ig = {}, cE = new ee.Component().refs, lg, ug, og, sg, cg, fE, jh, fg, dg, pg;
    {
      lg = /* @__PURE__ */ new Set(), ug = /* @__PURE__ */ new Set(), og = /* @__PURE__ */ new Set(), sg = /* @__PURE__ */ new Set(), fg = /* @__PURE__ */ new Set(), cg = /* @__PURE__ */ new Set(), dg = /* @__PURE__ */ new Set(), pg = /* @__PURE__ */ new Set();
      var dE = /* @__PURE__ */ new Set();
      jh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          dE.has(a) || (dE.add(a), E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, fE = function(e, t) {
        if (t === void 0) {
          var a = st(e) || "Component";
          cg.has(a) || (cg.add(a), E("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(ig, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(ig);
    }
    function vg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & tn) {
          Tn(!0);
          try {
            s = a(i, u);
          } finally {
            Tn(!1);
          }
        }
        fE(t, s);
      }
      var f = s == null ? u : Qe({}, u, s);
      if (e.memoizedState = f, e.lanes === j) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var hg = {
      isMounted: Gr,
      enqueueSetState: function(e, t, a) {
        var i = oa(e), u = ea(), s = Mo(i), f = Eu(u, s);
        f.payload = t, a != null && (jh(a, "setState"), f.callback = a);
        var p = wo(i, f, s);
        p !== null && (Xn(p, i, s, u), Ah(p, i, s)), ml(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = oa(e), u = ea(), s = Mo(i), f = Eu(u, s);
        f.tag = lE, f.payload = t, a != null && (jh(a, "replaceState"), f.callback = a);
        var p = wo(i, f, s);
        p !== null && (Xn(p, i, s, u), Ah(p, i, s)), ml(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = oa(e), i = ea(), u = Mo(a), s = Eu(i, u);
        s.tag = Nh, t != null && (jh(t, "forceUpdate"), s.callback = t);
        var f = wo(a, s, u);
        f !== null && (Xn(f, a, u, i), Ah(f, a, u)), Sd(a, u);
      }
    };
    function pE(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & tn) {
            Tn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Tn(!1);
            }
          }
          v === void 0 && E("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", st(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Se(a, i) || !Se(u, s) : !0;
    }
    function Tw(e, t, a) {
      var i = e.stateNode;
      {
        var u = st(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? E("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : E("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && E("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && E("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && E("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && E("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && E("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !dg.has(t) && (dg.add(t), E("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && E("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && E("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", st(t) || "A pure component"), typeof i.componentDidUnmount == "function" && E("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && E("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && E("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && E("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && E("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && E("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !og.has(t) && (og.add(t), E("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", st(t))), typeof i.getDerivedStateFromProps == "function" && E("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && E("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && E("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || tt(p)) && E("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && E("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function vE(e, t) {
      t.updater = hg, e.stateNode = t, Wu(t, e), t._reactInternalInstance = ig;
    }
    function hE(e, t, a) {
      var i = !1, u = Ba, s = Ba, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === Ao && f._context === void 0
        );
        if (!p && !pg.has(t)) {
          pg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === ku ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", E("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", st(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Hn(f);
      else {
        u = cf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? ff(e, u) : Ba;
      }
      var g = new t(a, s);
      if (e.mode & tn) {
        Tn(!0);
        try {
          g = new t(a, s);
        } finally {
          Tn(!1);
        }
      }
      var b = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      vE(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var w = st(t) || "Component";
          ug.has(w) || (ug.add(w), E("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var L = null, N = null, H = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? L = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (L = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? N = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (N = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? H = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (H = "UNSAFE_componentWillUpdate"), L !== null || N !== null || H !== null) {
            var ie = st(t) || "Component", we = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            sg.has(ie) || (sg.add(ie), E(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ie, we, L !== null ? `
  ` + L : "", N !== null ? `
  ` + N : "", H !== null ? `
  ` + H : ""));
          }
        }
      }
      return i && j0(e, u, s), g;
    }
    function Rw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (E("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ae(e) || "Component"), hg.enqueueReplaceState(t, t.state, null));
    }
    function mE(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ae(e) || "Component";
          lg.has(s) || (lg.add(s), E("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        hg.enqueueReplaceState(t, t.state, null);
      }
    }
    function mg(e, t, a, i) {
      Tw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = cE, rg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Hn(s);
      else {
        var f = cf(e, t, !0);
        u.context = ff(e, f);
      }
      {
        if (u.state === a) {
          var p = st(t) || "Component";
          fg.has(p) || (fg.add(p), E("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & tn && Ni.recordLegacyContextWarning(e, u), Ni.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (vg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Rw(e, u), Hh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Pe;
        y |= Mr, (e.mode & pa) !== be && (y |= Nr), e.flags |= y;
      }
    }
    function ww(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = Ba;
      if (typeof p == "object" && p !== null)
        v = Hn(p);
      else {
        var y = cf(e, t, !0);
        v = ff(e, y);
      }
      var g = t.getDerivedStateFromProps, b = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && mE(e, u, a, v), oE();
      var w = e.memoizedState, L = u.state = w;
      if (Hh(e, a, u, i), L = e.memoizedState, s === a && w === L && !Eh() && !Fh()) {
        if (typeof u.componentDidMount == "function") {
          var N = Pe;
          N |= Mr, (e.mode & pa) !== be && (N |= Nr), e.flags |= N;
        }
        return !1;
      }
      typeof g == "function" && (vg(e, t, g, a), L = e.memoizedState);
      var H = Fh() || pE(e, t, s, a, w, L, v);
      if (H) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ie = Pe;
          ie |= Mr, (e.mode & pa) !== be && (ie |= Nr), e.flags |= ie;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var we = Pe;
          we |= Mr, (e.mode & pa) !== be && (we |= Nr), e.flags |= we;
        }
        e.memoizedProps = a, e.memoizedState = L;
      }
      return u.props = a, u.state = L, u.context = v, H;
    }
    function xw(e, t, a, i, u) {
      var s = t.stateNode;
      uE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : zi(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, b = Ba;
      if (typeof g == "object" && g !== null)
        b = Hn(g);
      else {
        var w = cf(t, a, !0);
        b = ff(t, w);
      }
      var L = a.getDerivedStateFromProps, N = typeof L == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !N && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && mE(t, s, i, b), oE();
      var H = t.memoizedState, ie = s.state = H;
      if (Hh(t, i, s, u), ie = t.memoizedState, f === v && H === ie && !Eh() && !Fh() && !Ee)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Pe), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= sa), !1;
      typeof L == "function" && (vg(t, a, L, i), ie = t.memoizedState);
      var we = Fh() || pE(t, a, p, i, H, ie, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ee;
      return we ? (!N && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ie, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ie, b)), typeof s.componentDidUpdate == "function" && (t.flags |= Pe), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= sa)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Pe), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= sa), t.memoizedProps = i, t.memoizedState = ie), s.props = i, s.state = ie, s.context = b, we;
    }
    var yg, gg, Sg, Eg, Cg, yE = function(e, t) {
    };
    yg = !1, gg = !1, Sg = {}, Eg = {}, Cg = {}, yE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ae(t) || "Component";
        Eg[a] || (Eg[a] = !0, E('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function vp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & tn || Me) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Ae(e) || "Component";
          Sg[u] || (E('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), Sg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== me)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Jn(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(b) {
            var w = v.refs;
            w === cE && (w = v.refs = {}), b === null ? delete w[y] : w[y] = b;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Vh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Bh(e) {
      {
        var t = Ae(e) || "Component";
        if (Cg[t])
          return;
        Cg[t] = !0, E("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function gE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function SE(e) {
      function t(D, F) {
        if (e) {
          var k = D.deletions;
          k === null ? (D.deletions = [F], D.flags |= St) : k.push(F);
        }
      }
      function a(D, F) {
        if (!e)
          return null;
        for (var k = F; k !== null; )
          t(D, k), k = k.sibling;
        return null;
      }
      function i(D, F) {
        for (var k = /* @__PURE__ */ new Map(), I = F; I !== null; )
          I.key !== null ? k.set(I.key, I) : k.set(I.index, I), I = I.sibling;
        return k;
      }
      function u(D, F) {
        var k = Bs(D, F);
        return k.index = 0, k.sibling = null, k;
      }
      function s(D, F, k) {
        if (D.index = k, !e)
          return D.flags |= ud, F;
        var I = D.alternate;
        if (I !== null) {
          var le = I.index;
          return le < F ? (D.flags |= Bt, F) : le;
        } else
          return D.flags |= Bt, F;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= Bt), D;
      }
      function p(D, F, k, I) {
        if (F === null || F.tag !== Fe) {
          var le = GS(k, D.mode, I);
          return le.return = D, le;
        } else {
          var te = u(F, k);
          return te.return = D, te;
        }
      }
      function v(D, F, k, I) {
        var le = k.type;
        if (le === La)
          return g(D, F, k.props.children, I, k.key);
        if (F !== null && (F.elementType === le || // Keep this check inline so it only runs on the false path:
        s1(F, k) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof le == "object" && le !== null && le.$$typeof === jn && gE(le) === F.type)) {
          var te = u(F, k.props);
          return te.ref = vp(D, F, k), te.return = D, te._debugSource = k._source, te._debugOwner = k._owner, te;
        }
        var Le = WS(k, D.mode, I);
        return Le.ref = vp(D, F, k), Le.return = D, Le;
      }
      function y(D, F, k, I) {
        if (F === null || F.tag !== ge || F.stateNode.containerInfo !== k.containerInfo || F.stateNode.implementation !== k.implementation) {
          var le = qS(k, D.mode, I);
          return le.return = D, le;
        } else {
          var te = u(F, k.children || []);
          return te.return = D, te;
        }
      }
      function g(D, F, k, I, le) {
        if (F === null || F.tag !== vt) {
          var te = zo(k, D.mode, I, le);
          return te.return = D, te;
        } else {
          var Le = u(F, k);
          return Le.return = D, Le;
        }
      }
      function b(D, F, k) {
        if (typeof F == "string" && F !== "" || typeof F == "number") {
          var I = GS("" + F, D.mode, k);
          return I.return = D, I;
        }
        if (typeof F == "object" && F !== null) {
          switch (F.$$typeof) {
            case $i: {
              var le = WS(F, D.mode, k);
              return le.ref = vp(D, null, F), le.return = D, le;
            }
            case Ir: {
              var te = qS(F, D.mode, k);
              return te.return = D, te;
            }
            case jn: {
              var Le = F._payload, je = F._init;
              return b(D, je(Le), k);
            }
          }
          if (tt(F) || Ma(F)) {
            var Dt = zo(F, D.mode, k, null);
            return Dt.return = D, Dt;
          }
          Vh(D, F);
        }
        return typeof F == "function" && Bh(D), null;
      }
      function w(D, F, k, I) {
        var le = F !== null ? F.key : null;
        if (typeof k == "string" && k !== "" || typeof k == "number")
          return le !== null ? null : p(D, F, "" + k, I);
        if (typeof k == "object" && k !== null) {
          switch (k.$$typeof) {
            case $i:
              return k.key === le ? v(D, F, k, I) : null;
            case Ir:
              return k.key === le ? y(D, F, k, I) : null;
            case jn: {
              var te = k._payload, Le = k._init;
              return w(D, F, Le(te), I);
            }
          }
          if (tt(k) || Ma(k))
            return le !== null ? null : g(D, F, k, I, null);
          Vh(D, k);
        }
        return typeof k == "function" && Bh(D), null;
      }
      function L(D, F, k, I, le) {
        if (typeof I == "string" && I !== "" || typeof I == "number") {
          var te = D.get(k) || null;
          return p(F, te, "" + I, le);
        }
        if (typeof I == "object" && I !== null) {
          switch (I.$$typeof) {
            case $i: {
              var Le = D.get(I.key === null ? k : I.key) || null;
              return v(F, Le, I, le);
            }
            case Ir: {
              var je = D.get(I.key === null ? k : I.key) || null;
              return y(F, je, I, le);
            }
            case jn:
              var Dt = I._payload, mt = I._init;
              return L(D, F, k, mt(Dt), le);
          }
          if (tt(I) || Ma(I)) {
            var _n = D.get(k) || null;
            return g(F, _n, I, le, null);
          }
          Vh(F, I);
        }
        return typeof I == "function" && Bh(F), null;
      }
      function N(D, F, k) {
        {
          if (typeof D != "object" || D === null)
            return F;
          switch (D.$$typeof) {
            case $i:
            case Ir:
              yE(D, k);
              var I = D.key;
              if (typeof I != "string")
                break;
              if (F === null) {
                F = /* @__PURE__ */ new Set(), F.add(I);
                break;
              }
              if (!F.has(I)) {
                F.add(I);
                break;
              }
              E("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", I);
              break;
            case jn:
              var le = D._payload, te = D._init;
              N(te(le), F, k);
              break;
          }
        }
        return F;
      }
      function H(D, F, k, I) {
        for (var le = null, te = 0; te < k.length; te++) {
          var Le = k[te];
          le = N(Le, le, D);
        }
        for (var je = null, Dt = null, mt = F, _n = 0, yt = 0, Sn = null; mt !== null && yt < k.length; yt++) {
          mt.index > yt ? (Sn = mt, mt = null) : Sn = mt.sibling;
          var Pr = w(D, mt, k[yt], I);
          if (Pr === null) {
            mt === null && (mt = Sn);
            break;
          }
          e && mt && Pr.alternate === null && t(D, mt), _n = s(Pr, _n, yt), Dt === null ? je = Pr : Dt.sibling = Pr, Dt = Pr, mt = Sn;
        }
        if (yt === k.length) {
          if (a(D, mt), dr()) {
            var Sr = yt;
            Ds(D, Sr);
          }
          return je;
        }
        if (mt === null) {
          for (; yt < k.length; yt++) {
            var $a = b(D, k[yt], I);
            $a !== null && (_n = s($a, _n, yt), Dt === null ? je = $a : Dt.sibling = $a, Dt = $a);
          }
          if (dr()) {
            var ta = yt;
            Ds(D, ta);
          }
          return je;
        }
        for (var na = i(D, mt); yt < k.length; yt++) {
          var $r = L(na, D, yt, k[yt], I);
          $r !== null && (e && $r.alternate !== null && na.delete($r.key === null ? yt : $r.key), _n = s($r, _n, yt), Dt === null ? je = $r : Dt.sibling = $r, Dt = $r);
        }
        if (e && na.forEach(function(Nf) {
          return t(D, Nf);
        }), dr()) {
          var bu = yt;
          Ds(D, bu);
        }
        return je;
      }
      function ie(D, F, k, I) {
        var le = Ma(k);
        if (typeof le != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          k[Symbol.toStringTag] === "Generator" && (gg || E("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), gg = !0), k.entries === le && (yg || E("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), yg = !0);
          var te = le.call(k);
          if (te)
            for (var Le = null, je = te.next(); !je.done; je = te.next()) {
              var Dt = je.value;
              Le = N(Dt, Le, D);
            }
        }
        var mt = le.call(k);
        if (mt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var _n = null, yt = null, Sn = F, Pr = 0, Sr = 0, $a = null, ta = mt.next(); Sn !== null && !ta.done; Sr++, ta = mt.next()) {
          Sn.index > Sr ? ($a = Sn, Sn = null) : $a = Sn.sibling;
          var na = w(D, Sn, ta.value, I);
          if (na === null) {
            Sn === null && (Sn = $a);
            break;
          }
          e && Sn && na.alternate === null && t(D, Sn), Pr = s(na, Pr, Sr), yt === null ? _n = na : yt.sibling = na, yt = na, Sn = $a;
        }
        if (ta.done) {
          if (a(D, Sn), dr()) {
            var $r = Sr;
            Ds(D, $r);
          }
          return _n;
        }
        if (Sn === null) {
          for (; !ta.done; Sr++, ta = mt.next()) {
            var bu = b(D, ta.value, I);
            bu !== null && (Pr = s(bu, Pr, Sr), yt === null ? _n = bu : yt.sibling = bu, yt = bu);
          }
          if (dr()) {
            var Nf = Sr;
            Ds(D, Nf);
          }
          return _n;
        }
        for (var Yp = i(D, Sn); !ta.done; Sr++, ta = mt.next()) {
          var zl = L(Yp, D, Sr, ta.value, I);
          zl !== null && (e && zl.alternate !== null && Yp.delete(zl.key === null ? Sr : zl.key), Pr = s(zl, Pr, Sr), yt === null ? _n = zl : yt.sibling = zl, yt = zl);
        }
        if (e && Yp.forEach(function(j_) {
          return t(D, j_);
        }), dr()) {
          var F_ = Sr;
          Ds(D, F_);
        }
        return _n;
      }
      function we(D, F, k, I) {
        if (F !== null && F.tag === Fe) {
          a(D, F.sibling);
          var le = u(F, k);
          return le.return = D, le;
        }
        a(D, F);
        var te = GS(k, D.mode, I);
        return te.return = D, te;
      }
      function ye(D, F, k, I) {
        for (var le = k.key, te = F; te !== null; ) {
          if (te.key === le) {
            var Le = k.type;
            if (Le === La) {
              if (te.tag === vt) {
                a(D, te.sibling);
                var je = u(te, k.props.children);
                return je.return = D, je._debugSource = k._source, je._debugOwner = k._owner, je;
              }
            } else if (te.elementType === Le || // Keep this check inline so it only runs on the false path:
            s1(te, k) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Le == "object" && Le !== null && Le.$$typeof === jn && gE(Le) === te.type) {
              a(D, te.sibling);
              var Dt = u(te, k.props);
              return Dt.ref = vp(D, te, k), Dt.return = D, Dt._debugSource = k._source, Dt._debugOwner = k._owner, Dt;
            }
            a(D, te);
            break;
          } else
            t(D, te);
          te = te.sibling;
        }
        if (k.type === La) {
          var mt = zo(k.props.children, D.mode, I, k.key);
          return mt.return = D, mt;
        } else {
          var _n = WS(k, D.mode, I);
          return _n.ref = vp(D, F, k), _n.return = D, _n;
        }
      }
      function ut(D, F, k, I) {
        for (var le = k.key, te = F; te !== null; ) {
          if (te.key === le)
            if (te.tag === ge && te.stateNode.containerInfo === k.containerInfo && te.stateNode.implementation === k.implementation) {
              a(D, te.sibling);
              var Le = u(te, k.children || []);
              return Le.return = D, Le;
            } else {
              a(D, te);
              break;
            }
          else
            t(D, te);
          te = te.sibling;
        }
        var je = qS(k, D.mode, I);
        return je.return = D, je;
      }
      function Je(D, F, k, I) {
        var le = typeof k == "object" && k !== null && k.type === La && k.key === null;
        if (le && (k = k.props.children), typeof k == "object" && k !== null) {
          switch (k.$$typeof) {
            case $i:
              return f(ye(D, F, k, I));
            case Ir:
              return f(ut(D, F, k, I));
            case jn:
              var te = k._payload, Le = k._init;
              return Je(D, F, Le(te), I);
          }
          if (tt(k))
            return H(D, F, k, I);
          if (Ma(k))
            return ie(D, F, k, I);
          Vh(D, k);
        }
        return typeof k == "string" && k !== "" || typeof k == "number" ? f(we(D, F, "" + k, I)) : (typeof k == "function" && Bh(D), a(D, F));
      }
      return Je;
    }
    var yf = SE(!0), EE = SE(!1);
    function bw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Bs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Bs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function _w(e, t) {
      for (var a = e.child; a !== null; )
        n_(a, t), a = a.sibling;
    }
    var hp = {}, xo = Eo(hp), mp = Eo(hp), Ph = Eo(hp);
    function $h(e) {
      if (e === hp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function CE() {
      var e = $h(Ph.current);
      return e;
    }
    function Tg(e, t) {
      Vr(Ph, t, e), Vr(mp, e, e), Vr(xo, hp, e);
      var a = BT(t);
      jr(xo, e), Vr(xo, a, e);
    }
    function gf(e) {
      jr(xo, e), jr(mp, e), jr(Ph, e);
    }
    function Rg() {
      var e = $h(xo.current);
      return e;
    }
    function TE(e) {
      $h(Ph.current);
      var t = $h(xo.current), a = PT(t, e.type);
      t !== a && (Vr(mp, e, e), Vr(xo, a, e));
    }
    function wg(e) {
      mp.current === e && (jr(xo, e), jr(mp, e));
    }
    var Dw = 0, RE = 1, wE = 1, yp = 2, Ui = Eo(Dw);
    function xg(e, t) {
      return (e & t) !== 0;
    }
    function Sf(e) {
      return e & RE;
    }
    function bg(e, t) {
      return e & RE | t;
    }
    function kw(e, t) {
      return e | t;
    }
    function bo(e, t) {
      Vr(Ui, t, e);
    }
    function Ef(e) {
      jr(Ui, e);
    }
    function Ow(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Yh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Re) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || z0(i) || My(i))
              return t;
          }
        } else if (t.tag === Et && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ne) !== Te;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ca = (
      /*   */
      0
    ), $n = (
      /* */
      1
    ), _l = (
      /*  */
      2
    ), Yn = (
      /*    */
      4
    ), pr = (
      /*   */
      8
    ), _g = [];
    function Dg() {
      for (var e = 0; e < _g.length; e++) {
        var t = _g[e];
        t._workInProgressVersionPrimary = null;
      }
      _g.length = 0;
    }
    function Lw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var re = A.ReactCurrentDispatcher, gp = A.ReactCurrentBatchConfig, kg, Cf;
    kg = /* @__PURE__ */ new Set();
    var zs = j, _t = null, In = null, Qn = null, Ih = !1, Sp = !1, Ep = 0, Mw = 0, Nw = 25, V = null, li = null, _o = -1, Og = !1;
    function Rt() {
      {
        var e = V;
        li === null ? li = [e] : li.push(e);
      }
    }
    function X() {
      {
        var e = V;
        li !== null && (_o++, li[_o] !== e && zw(e));
      }
    }
    function Tf(e) {
      e != null && !tt(e) && E("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function zw(e) {
      {
        var t = Ae(_t);
        if (!kg.has(t) && (kg.add(t), li !== null)) {
          for (var a = "", i = 30, u = 0; u <= _o; u++) {
            for (var s = li[u], f = u === _o ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          E(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Br() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Lg(e, t) {
      if (Og)
        return !1;
      if (t === null)
        return E("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
      e.length !== t.length && E(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!fe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Rf(e, t, a, i, u, s) {
      zs = s, _t = t, li = e !== null ? e._debugHookTypes : null, _o = -1, Og = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = j, e !== null && e.memoizedState !== null ? re.current = QE : li !== null ? re.current = IE : re.current = YE;
      var f = a(i, u);
      if (Sp) {
        var p = 0;
        do {
          if (Sp = !1, Ep = 0, p >= Nw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Og = !1, In = null, Qn = null, t.updateQueue = null, _o = -1, re.current = WE, f = a(i, u);
        } while (Sp);
      }
      re.current = am, t._debugHookTypes = li;
      var v = In !== null && In.next !== null;
      if (zs = j, _t = null, In = null, Qn = null, V = null, li = null, _o = -1, e !== null && (e.flags & Vn) !== (t.flags & Vn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ge) !== be && E("Internal React error: Expected static flag was missing. Please notify the React team."), Ih = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function wf() {
      var e = Ep !== 0;
      return Ep = 0, e;
    }
    function xE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & pa) !== be ? t.flags &= ~(Gl | Nr | Gt | Pe) : t.flags &= ~(Gt | Pe), e.lanes = no(e.lanes, a);
    }
    function bE() {
      if (re.current = am, Ih) {
        for (var e = _t.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Ih = !1;
      }
      zs = j, _t = null, In = null, Qn = null, li = null, _o = -1, V = null, jE = !1, Sp = !1, Ep = 0;
    }
    function Dl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Qn === null ? _t.memoizedState = Qn = e : Qn = Qn.next = e, Qn;
    }
    function ui() {
      var e;
      if (In === null) {
        var t = _t.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = In.next;
      var a;
      if (Qn === null ? a = _t.memoizedState : a = Qn.next, a !== null)
        Qn = a, a = Qn.next, In = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        In = e;
        var i = {
          memoizedState: In.memoizedState,
          baseState: In.baseState,
          baseQueue: In.baseQueue,
          queue: In.queue,
          next: null
        };
        Qn === null ? _t.memoizedState = Qn = i : Qn = Qn.next = i;
      }
      return Qn;
    }
    function _E() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Mg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Ng(e, t, a) {
      var i = Dl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: j,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Fw.bind(null, _t, s);
      return [i.memoizedState, f];
    }
    function zg(e, t, a) {
      var i = ui(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = In, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && E("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, b = s.baseState, w = null, L = null, N = null, H = g;
        do {
          var ie = H.lane;
          if (au(zs, ie)) {
            if (N !== null) {
              var ye = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: it,
                action: H.action,
                hasEagerState: H.hasEagerState,
                eagerState: H.eagerState,
                next: null
              };
              N = N.next = ye;
            }
            if (H.hasEagerState)
              b = H.eagerState;
            else {
              var ut = H.action;
              b = e(b, ut);
            }
          } else {
            var we = {
              lane: ie,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            };
            N === null ? (L = N = we, w = b) : N = N.next = we, _t.lanes = $e(_t.lanes, ie), jp(ie);
          }
          H = H.next;
        } while (H !== null && H !== g);
        N === null ? w = b : N.next = L, fe(b, i.memoizedState) || _p(), i.memoizedState = b, i.baseState = w, i.baseQueue = N, u.lastRenderedState = b;
      }
      var Je = u.interleaved;
      if (Je !== null) {
        var D = Je;
        do {
          var F = D.lane;
          _t.lanes = $e(_t.lanes, F), jp(F), D = D.next;
        } while (D !== Je);
      } else
        f === null && (u.lanes = j);
      var k = u.dispatch;
      return [i.memoizedState, k];
    }
    function Ug(e, t, a) {
      var i = ui(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        fe(p, i.memoizedState) || _p(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function q_(e, t, a) {
    }
    function X_(e, t, a) {
    }
    function Ag(e, t, a) {
      var i = _t, u = Dl(), s, f = dr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Cf || s !== a() && (E("The result of getServerSnapshot should be cached to avoid an infinite loop"), Cf = !0);
      } else {
        if (s = t(), !Cf) {
          var p = t();
          fe(s, p) || (E("The result of getSnapshot should be cached to avoid an infinite loop"), Cf = !0);
        }
        var v = Tm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        fs(v, zs) || DE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, Xh(OE.bind(null, i, y, e), [e]), i.flags |= Gt, Cp($n | pr, kE.bind(null, i, y, s, t), void 0, null), s;
    }
    function Qh(e, t, a) {
      var i = _t, u = ui(), s = t();
      if (!Cf) {
        var f = t();
        fe(s, f) || (E("The result of getSnapshot should be cached to avoid an infinite loop"), Cf = !0);
      }
      var p = u.memoizedState, v = !fe(p, s);
      v && (u.memoizedState = s, _p());
      var y = u.queue;
      if (Rp(OE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Qn !== null && Qn.memoizedState.tag & $n) {
        i.flags |= Gt, Cp($n | pr, kE.bind(null, i, y, s, t), void 0, null);
        var g = Tm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        fs(g, zs) || DE(i, t, s);
      }
      return s;
    }
    function DE(e, t, a) {
      e.flags |= ns;
      var i = {
        getSnapshot: t,
        value: a
      }, u = _t.updateQueue;
      if (u === null)
        u = _E(), _t.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function kE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, LE(t) && ME(e);
    }
    function OE(e, t, a) {
      var i = function() {
        LE(t) && ME(e);
      };
      return a(i);
    }
    function LE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !fe(a, i);
      } catch {
        return !0;
      }
    }
    function ME(e) {
      var t = Ea(e, ke);
      t !== null && Xn(t, e, ke, Mt);
    }
    function Wh(e) {
      var t = Dl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: j,
        dispatch: null,
        lastRenderedReducer: Mg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = jw.bind(null, _t, a);
      return [t.memoizedState, i];
    }
    function Hg(e) {
      return zg(Mg);
    }
    function Fg(e) {
      return Ug(Mg);
    }
    function Cp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = _t.updateQueue;
      if (s === null)
        s = _E(), _t.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function jg(e) {
      var t = Dl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Gh(e) {
      var t = ui();
      return t.memoizedState;
    }
    function Tp(e, t, a, i) {
      var u = Dl(), s = i === void 0 ? null : i;
      _t.flags |= e, u.memoizedState = Cp($n | t, a, void 0, s);
    }
    function qh(e, t, a, i) {
      var u = ui(), s = i === void 0 ? null : i, f = void 0;
      if (In !== null) {
        var p = In.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Lg(s, v)) {
            u.memoizedState = Cp(t, a, f, s);
            return;
          }
        }
      }
      _t.flags |= e, u.memoizedState = Cp($n | t, a, f, s);
    }
    function Xh(e, t) {
      return (_t.mode & pa) !== be ? Tp(Gl | Gt | cl, pr, e, t) : Tp(Gt | cl, pr, e, t);
    }
    function Rp(e, t) {
      return qh(Gt, pr, e, t);
    }
    function Vg(e, t) {
      return Tp(Pe, _l, e, t);
    }
    function Kh(e, t) {
      return qh(Pe, _l, e, t);
    }
    function Bg(e, t) {
      var a = Pe;
      return a |= Mr, (_t.mode & pa) !== be && (a |= Nr), Tp(a, Yn, e, t);
    }
    function Zh(e, t) {
      return qh(Pe, Yn, e, t);
    }
    function NE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || E("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Pg(e, t, a) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Pe;
      return u |= Mr, (_t.mode & pa) !== be && (u |= Nr), Tp(u, Yn, NE.bind(null, t, e), i);
    }
    function Jh(e, t, a) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return qh(Pe, Yn, NE.bind(null, t, e), i);
    }
    function Uw(e, t) {
    }
    var em = Uw;
    function $g(e, t) {
      var a = Dl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function tm(e, t) {
      var a = ui(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Lg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Yg(e, t) {
      var a = Dl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function nm(e, t) {
      var a = ui(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Lg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Ig(e) {
      var t = Dl();
      return t.memoizedState = e, e;
    }
    function zE(e) {
      var t = ui(), a = In, i = a.memoizedState;
      return AE(t, i, e);
    }
    function UE(e) {
      var t = ui();
      if (In === null)
        return t.memoizedState = e, e;
      var a = In.memoizedState;
      return AE(t, a, e);
    }
    function AE(e, t, a) {
      var i = !Km(zs);
      if (i) {
        if (!fe(a, t)) {
          var u = wd();
          _t.lanes = $e(_t.lanes, u), jp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, _p()), e.memoizedState = a, a;
    }
    function Aw(e, t, a) {
      var i = ha();
      wn(nr(i, Pn)), e(!0);
      var u = gp.transition;
      gp.transition = {};
      var s = gp.transition;
      gp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (wn(i), gp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && qe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Qg() {
      var e = Wh(!1), t = e[0], a = e[1], i = Aw.bind(null, a), u = Dl();
      return u.memoizedState = i, [t, i];
    }
    function HE() {
      var e = Hg(), t = e[0], a = ui(), i = a.memoizedState;
      return [t, i];
    }
    function FE() {
      var e = Fg(), t = e[0], a = ui(), i = a.memoizedState;
      return [t, i];
    }
    var jE = !1;
    function Hw() {
      return jE;
    }
    function Wg() {
      var e = Dl(), t = Tm(), a = t.identifierPrefix, i;
      if (dr()) {
        var u = KR();
        i = ":" + a + "R" + u;
        var s = Ep++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Mw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function rm() {
      var e = ui(), t = e.memoizedState;
      return t;
    }
    function Fw(e, t, a) {
      typeof arguments[3] == "function" && E("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Mo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (VE(e))
        BE(t, u);
      else {
        var s = aE(e, t, u, i);
        if (s !== null) {
          var f = ea();
          Xn(s, e, i, f), PE(s, t, i);
        }
      }
      $E(e, i);
    }
    function jw(e, t, a) {
      typeof arguments[3] == "function" && E("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Mo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (VE(e))
        BE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === j && (s === null || s.lanes === j)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = re.current, re.current = Ai;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, fe(y, v)) {
                yw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              re.current = p;
            }
          }
        }
        var g = aE(e, t, u, i);
        if (g !== null) {
          var b = ea();
          Xn(g, e, i, b), PE(g, t, i);
        }
      }
      $E(e, i);
    }
    function VE(e) {
      var t = e.alternate;
      return e === _t || t !== null && t === _t;
    }
    function BE(e, t) {
      Sp = Ih = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function PE(e, t, a) {
      if (Rd(a)) {
        var i = t.lanes;
        i = xd(i, e.pendingLanes);
        var u = $e(i, a);
        t.lanes = u, ro(e, u);
      }
    }
    function $E(e, t, a) {
      ml(e, t);
    }
    var am = {
      readContext: Hn,
      useCallback: Br,
      useContext: Br,
      useEffect: Br,
      useImperativeHandle: Br,
      useInsertionEffect: Br,
      useLayoutEffect: Br,
      useMemo: Br,
      useReducer: Br,
      useRef: Br,
      useState: Br,
      useDebugValue: Br,
      useDeferredValue: Br,
      useTransition: Br,
      useMutableSource: Br,
      useSyncExternalStore: Br,
      useId: Br,
      unstable_isNewReconciler: G
    }, YE = null, IE = null, QE = null, WE = null, kl = null, Ai = null, im = null;
    {
      var Gg = function() {
        E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, He = function() {
        E("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      YE = {
        readContext: function(e) {
          return Hn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Rt(), Tf(t), $g(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Rt(), Hn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Rt(), Tf(t), Xh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Rt(), Tf(a), Pg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Rt(), Tf(t), Vg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Rt(), Tf(t), Bg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Rt(), Tf(t);
          var a = re.current;
          re.current = kl;
          try {
            return Yg(e, t);
          } finally {
            re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Rt();
          var i = re.current;
          re.current = kl;
          try {
            return Ng(e, t, a);
          } finally {
            re.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Rt(), jg(e);
        },
        useState: function(e) {
          V = "useState", Rt();
          var t = re.current;
          re.current = kl;
          try {
            return Wh(e);
          } finally {
            re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Rt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Rt(), Ig(e);
        },
        useTransition: function() {
          return V = "useTransition", Rt(), Qg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Rt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Rt(), Ag(e, t, a);
        },
        useId: function() {
          return V = "useId", Rt(), Wg();
        },
        unstable_isNewReconciler: G
      }, IE = {
        readContext: function(e) {
          return Hn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", X(), $g(e, t);
        },
        useContext: function(e) {
          return V = "useContext", X(), Hn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", X(), Xh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", X(), Pg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", X(), Vg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", X(), Bg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", X();
          var a = re.current;
          re.current = kl;
          try {
            return Yg(e, t);
          } finally {
            re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", X();
          var i = re.current;
          re.current = kl;
          try {
            return Ng(e, t, a);
          } finally {
            re.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", X(), jg(e);
        },
        useState: function(e) {
          V = "useState", X();
          var t = re.current;
          re.current = kl;
          try {
            return Wh(e);
          } finally {
            re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", X(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", X(), Ig(e);
        },
        useTransition: function() {
          return V = "useTransition", X(), Qg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", X(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", X(), Ag(e, t, a);
        },
        useId: function() {
          return V = "useId", X(), Wg();
        },
        unstable_isNewReconciler: G
      }, QE = {
        readContext: function(e) {
          return Hn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", X(), tm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", X(), Hn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", X(), Rp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", X(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", X(), Kh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", X(), Zh(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", X();
          var a = re.current;
          re.current = Ai;
          try {
            return nm(e, t);
          } finally {
            re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", X();
          var i = re.current;
          re.current = Ai;
          try {
            return zg(e, t, a);
          } finally {
            re.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", X(), Gh();
        },
        useState: function(e) {
          V = "useState", X();
          var t = re.current;
          re.current = Ai;
          try {
            return Hg(e);
          } finally {
            re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", X(), em();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", X(), zE(e);
        },
        useTransition: function() {
          return V = "useTransition", X(), HE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", X(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", X(), Qh(e, t);
        },
        useId: function() {
          return V = "useId", X(), rm();
        },
        unstable_isNewReconciler: G
      }, WE = {
        readContext: function(e) {
          return Hn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", X(), tm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", X(), Hn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", X(), Rp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", X(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", X(), Kh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", X(), Zh(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", X();
          var a = re.current;
          re.current = im;
          try {
            return nm(e, t);
          } finally {
            re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", X();
          var i = re.current;
          re.current = im;
          try {
            return Ug(e, t, a);
          } finally {
            re.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", X(), Gh();
        },
        useState: function(e) {
          V = "useState", X();
          var t = re.current;
          re.current = im;
          try {
            return Fg(e);
          } finally {
            re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", X(), em();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", X(), UE(e);
        },
        useTransition: function() {
          return V = "useTransition", X(), FE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", X(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", X(), Qh(e, t);
        },
        useId: function() {
          return V = "useId", X(), rm();
        },
        unstable_isNewReconciler: G
      }, kl = {
        readContext: function(e) {
          return Gg(), Hn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", He(), Rt(), $g(e, t);
        },
        useContext: function(e) {
          return V = "useContext", He(), Rt(), Hn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", He(), Rt(), Xh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", He(), Rt(), Pg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", He(), Rt(), Vg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", He(), Rt(), Bg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", He(), Rt();
          var a = re.current;
          re.current = kl;
          try {
            return Yg(e, t);
          } finally {
            re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", He(), Rt();
          var i = re.current;
          re.current = kl;
          try {
            return Ng(e, t, a);
          } finally {
            re.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", He(), Rt(), jg(e);
        },
        useState: function(e) {
          V = "useState", He(), Rt();
          var t = re.current;
          re.current = kl;
          try {
            return Wh(e);
          } finally {
            re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", He(), Rt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", He(), Rt(), Ig(e);
        },
        useTransition: function() {
          return V = "useTransition", He(), Rt(), Qg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", He(), Rt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", He(), Rt(), Ag(e, t, a);
        },
        useId: function() {
          return V = "useId", He(), Rt(), Wg();
        },
        unstable_isNewReconciler: G
      }, Ai = {
        readContext: function(e) {
          return Gg(), Hn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", He(), X(), tm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", He(), X(), Hn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", He(), X(), Rp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", He(), X(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", He(), X(), Kh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", He(), X(), Zh(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", He(), X();
          var a = re.current;
          re.current = Ai;
          try {
            return nm(e, t);
          } finally {
            re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", He(), X();
          var i = re.current;
          re.current = Ai;
          try {
            return zg(e, t, a);
          } finally {
            re.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", He(), X(), Gh();
        },
        useState: function(e) {
          V = "useState", He(), X();
          var t = re.current;
          re.current = Ai;
          try {
            return Hg(e);
          } finally {
            re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", He(), X(), em();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", He(), X(), zE(e);
        },
        useTransition: function() {
          return V = "useTransition", He(), X(), HE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", He(), X(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", He(), X(), Qh(e, t);
        },
        useId: function() {
          return V = "useId", He(), X(), rm();
        },
        unstable_isNewReconciler: G
      }, im = {
        readContext: function(e) {
          return Gg(), Hn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", He(), X(), tm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", He(), X(), Hn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", He(), X(), Rp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", He(), X(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", He(), X(), Kh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", He(), X(), Zh(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", He(), X();
          var a = re.current;
          re.current = Ai;
          try {
            return nm(e, t);
          } finally {
            re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", He(), X();
          var i = re.current;
          re.current = Ai;
          try {
            return Ug(e, t, a);
          } finally {
            re.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", He(), X(), Gh();
        },
        useState: function(e) {
          V = "useState", He(), X();
          var t = re.current;
          re.current = Ai;
          try {
            return Fg(e);
          } finally {
            re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", He(), X(), em();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", He(), X(), UE(e);
        },
        useTransition: function() {
          return V = "useTransition", He(), X(), FE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", He(), X(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", He(), X(), Qh(e, t);
        },
        useId: function() {
          return V = "useId", He(), X(), rm();
        },
        unstable_isNewReconciler: G
      };
    }
    var Do = J.unstable_now, GE = 0, lm = -1, wp = -1, um = -1, qg = !1, om = !1;
    function qE() {
      return qg;
    }
    function Vw() {
      om = !0;
    }
    function Bw() {
      qg = !1, om = !1;
    }
    function Pw() {
      qg = om, om = !1;
    }
    function XE() {
      return GE;
    }
    function KE() {
      GE = Do();
    }
    function Xg(e) {
      wp = Do(), e.actualStartTime < 0 && (e.actualStartTime = Do());
    }
    function ZE(e) {
      wp = -1;
    }
    function sm(e, t) {
      if (wp >= 0) {
        var a = Do() - wp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), wp = -1;
      }
    }
    function Ol(e) {
      if (lm >= 0) {
        var t = Do() - lm;
        lm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case oe:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case rt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Kg(e) {
      if (um >= 0) {
        var t = Do() - um;
        um = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case oe:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case rt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Ll() {
      lm = Do();
    }
    function Zg() {
      um = Do();
    }
    function Jg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Us(e, t) {
      return {
        value: e,
        source: t,
        stack: zu(t),
        digest: null
      };
    }
    function eS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function $w(e, t) {
      return !0;
    }
    function tS(e, t) {
      try {
        var a = $w(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === me)
            return;
          console.error(i);
        }
        var p = u ? Ae(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === oe)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ae(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var b = v + `
` + f + `

` + ("" + y);
        console.error(b);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var Yw = typeof WeakMap == "function" ? WeakMap : Map;
    function JE(e, t, a) {
      var i = Eu(Mt, a);
      i.tag = tg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Ab(u), tS(e, t);
      }, i;
    }
    function nS(e, t, a) {
      var i = Eu(Mt, a);
      i.tag = tg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          c1(e), tS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        c1(e), tS(e, t), typeof u != "function" && zb(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Fr(e.lanes, ke) || E("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ae(e) || "Unknown"));
      }), i;
    }
    function eC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Yw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Hb.bind(null, e, t, a);
        Bn && Vp(e, a), t.then(s, s);
      }
    }
    function Iw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function Qw(e, t) {
      var a = e.tag;
      if ((e.mode & Ge) === be && (a === Oe || a === Be || a === Ue)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function tC(e) {
      var t = e;
      do {
        if (t.tag === Re && Ow(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function nC(e, t, a, i, u) {
      if ((e.mode & Ge) === be) {
        if (e === t)
          e.flags |= Mn;
        else {
          if (e.flags |= Ne, a.flags |= rs, a.flags &= ~(oc | Qr), a.tag === me) {
            var s = a.alternate;
            if (s === null)
              a.tag = Dn;
            else {
              var f = Eu(Mt, ke);
              f.tag = Nh, wo(a, f, ke);
            }
          }
          a.lanes = $e(a.lanes, ke);
        }
        return e;
      }
      return e.flags |= Mn, e.lanes = u, e;
    }
    function Ww(e, t, a, i, u) {
      if (a.flags |= Qr, Bn && Vp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Qw(a), dr() && a.mode & Ge && Q0();
        var f = tC(t);
        if (f !== null) {
          f.flags &= ~un, nC(f, t, a, e, u), f.mode & Ge && eC(e, s, u), Iw(f, e, s);
          return;
        } else {
          if (!to(u)) {
            eC(e, s, u), US();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (dr() && a.mode & Ge) {
        Q0();
        var v = tC(t);
        if (v !== null) {
          (v.flags & Mn) === Te && (v.flags |= un), nC(v, t, a, e, u), Gy(Us(i, a));
          return;
        }
      }
      i = Us(i, a), bb(i);
      var y = t;
      do {
        switch (y.tag) {
          case oe: {
            var g = i;
            y.flags |= Mn;
            var b = Rn(u);
            y.lanes = $e(y.lanes, b);
            var w = JE(y, g, b);
            ag(y, w);
            return;
          }
          case me:
            var L = i, N = y.type, H = y.stateNode;
            if ((y.flags & Ne) === Te && (typeof N.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && !t1(H))) {
              y.flags |= Mn;
              var ie = Rn(u);
              y.lanes = $e(y.lanes, ie);
              var we = nS(y, L, ie);
              ag(y, we);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function Gw() {
      return null;
    }
    var xp = A.ReactCurrentOwner, Hi = !1, rS, bp, aS, iS, lS, As, uS, cm;
    rS = {}, bp = {}, aS = {}, iS = {}, lS = {}, As = !1, uS = {}, cm = {};
    function Zr(e, t, a, i) {
      e === null ? t.child = EE(t, null, a, i) : t.child = yf(t, e.child, a, i);
    }
    function qw(e, t, a, i) {
      t.child = yf(t, e.child, null, i), t.child = yf(t, null, a, i);
    }
    function rC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Li(
          s,
          i,
          // Resolved props
          "prop",
          st(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      mf(t, u), hl(t);
      {
        if (xp.current = t, kr(!0), v = Rf(e, t, f, i, p, u), y = wf(), t.mode & tn) {
          Tn(!0);
          try {
            v = Rf(e, t, f, i, p, u), y = wf();
          } finally {
            Tn(!1);
          }
        }
        kr(!1);
      }
      return ql(), e !== null && !Hi ? (xE(e, t, u), Cu(e, t, u)) : (dr() && y && Py(t), t.flags |= ol, Zr(e, t, v, u), t.child);
    }
    function aC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (e_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Mf(s), t.tag = Ue, t.type = f, cS(t, s), iC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && Li(
            p,
            i,
            // Resolved props
            "prop",
            st(s)
          );
        }
        var v = QS(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var y = a.type, g = y.propTypes;
        g && Li(
          g,
          i,
          // Resolved props
          "prop",
          st(y)
        );
      }
      var b = e.child, w = mS(e, u);
      if (!w) {
        var L = b.memoizedProps, N = a.compare;
        if (N = N !== null ? N : Se, N(L, i) && e.ref === t.ref)
          return Cu(e, t, u);
      }
      t.flags |= ol;
      var H = Bs(b, i);
      return H.ref = t.ref, H.return = t, t.child = H, H;
    }
    function iC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === jn) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Li(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            st(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (Se(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Hi = !1, t.pendingProps = i = g, mS(e, u))
            (e.flags & rs) !== Te && (Hi = !0);
          else
            return t.lanes = e.lanes, Cu(e, t, u);
      }
      return oS(e, t, a, i, u);
    }
    function lC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || T)
        if ((t.mode & Ge) === be) {
          var f = {
            baseLanes: j,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Rm(t, a);
        } else if (Fr(a, Hr)) {
          var b = {
            baseLanes: j,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = b;
          var w = s !== null ? s.baseLanes : a;
          Rm(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = $e(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Hr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Rm(t, v), null;
        }
      else {
        var L;
        s !== null ? (L = $e(s.baseLanes, a), t.memoizedState = null) : L = a, Rm(t, L);
      }
      return Zr(e, t, u, a), t.child;
    }
    function Xw(e, t, a) {
      var i = t.pendingProps;
      return Zr(e, t, i, a), t.child;
    }
    function Kw(e, t, a) {
      var i = t.pendingProps.children;
      return Zr(e, t, i, a), t.child;
    }
    function Zw(e, t, a) {
      {
        t.flags |= Pe;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Zr(e, t, s, a), t.child;
    }
    function uC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Lr, t.flags |= od);
    }
    function oS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Li(
          s,
          i,
          // Resolved props
          "prop",
          st(a)
        );
      }
      var f;
      {
        var p = cf(t, a, !0);
        f = ff(t, p);
      }
      var v, y;
      mf(t, u), hl(t);
      {
        if (xp.current = t, kr(!0), v = Rf(e, t, a, i, f, u), y = wf(), t.mode & tn) {
          Tn(!0);
          try {
            v = Rf(e, t, a, i, f, u), y = wf();
          } finally {
            Tn(!1);
          }
        }
        kr(!1);
      }
      return ql(), e !== null && !Hi ? (xE(e, t, u), Cu(e, t, u)) : (dr() && y && Py(t), t.flags |= ol, Zr(e, t, v, u), t.child);
    }
    function oC(e, t, a, i, u) {
      {
        switch (h_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Ne, t.flags |= Mn;
            var y = new Error("Simulated error coming from DevTools"), g = Rn(u);
            t.lanes = $e(t.lanes, g);
            var b = nS(t, Us(y, t), g);
            ag(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && Li(
            w,
            i,
            // Resolved props
            "prop",
            st(a)
          );
        }
      }
      var L;
      bl(a) ? (L = !0, Th(t)) : L = !1, mf(t, u);
      var N = t.stateNode, H;
      N === null ? (dm(e, t), hE(t, a, i), mg(t, a, i, u), H = !0) : e === null ? H = ww(t, a, i, u) : H = xw(e, t, a, i, u);
      var ie = sS(e, t, a, H, L, u);
      {
        var we = t.stateNode;
        H && we.props !== i && (As || E("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ae(t) || "a component"), As = !0);
      }
      return ie;
    }
    function sS(e, t, a, i, u, s) {
      uC(e, t);
      var f = (t.flags & Ne) !== Te;
      if (!i && !f)
        return u && P0(t, a, !1), Cu(e, t, s);
      var p = t.stateNode;
      xp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, ZE();
      else {
        hl(t);
        {
          if (kr(!0), v = p.render(), t.mode & tn) {
            Tn(!0);
            try {
              p.render();
            } finally {
              Tn(!1);
            }
          }
          kr(!1);
        }
        ql();
      }
      return t.flags |= ol, e !== null && f ? qw(e, t, v, s) : Zr(e, t, v, s), t.memoizedState = p.state, u && P0(t, a, !0), t.child;
    }
    function sC(e) {
      var t = e.stateNode;
      t.pendingContext ? V0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && V0(e, t.context, !1), Tg(e, t.containerInfo);
    }
    function Jw(e, t, a) {
      if (sC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      uE(e, t), Hh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & un) {
          var g = Us(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return cC(e, t, p, a, g);
        } else if (p !== s) {
          var b = Us(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return cC(e, t, p, a, b);
        } else {
          rw(t);
          var w = EE(t, null, p, a);
          t.child = w;
          for (var L = w; L; )
            L.flags = L.flags & ~Bt | ca, L = L.sibling;
        }
      } else {
        if (vf(), p === s)
          return Cu(e, t, a);
        Zr(e, t, p, a);
      }
      return t.child;
    }
    function cC(e, t, a, i, u) {
      return vf(), Gy(u), t.flags |= un, Zr(e, t, a, i), t.child;
    }
    function ex(e, t, a) {
      TE(t), e === null && Wy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Dy(i, u);
      return p ? f = null : s !== null && Dy(i, s) && (t.flags |= Tt), uC(e, t), Zr(e, t, f, a), t.child;
    }
    function tx(e, t) {
      return e === null && Wy(t), null;
    }
    function nx(e, t, a, i) {
      dm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = t_(v), g = zi(v, u), b;
      switch (y) {
        case Oe:
          return cS(t, v), t.type = v = Mf(v), b = oS(null, t, v, g, i), b;
        case me:
          return t.type = v = VS(v), b = oC(null, t, v, g, i), b;
        case Be:
          return t.type = v = BS(v), b = rC(null, t, v, g, i), b;
        case Xe: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && Li(
              w,
              g,
              // Resolved for outer only
              "prop",
              st(v)
            );
          }
          return b = aC(
            null,
            t,
            v,
            zi(v.type, g),
            // The inner type can have defaults too
            i
          ), b;
        }
      }
      var L = "";
      throw v !== null && typeof v == "object" && v.$$typeof === jn && (L = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + L));
    }
    function rx(e, t, a, i, u) {
      dm(e, t), t.tag = me;
      var s;
      return bl(a) ? (s = !0, Th(t)) : s = !1, mf(t, u), hE(t, a, i), mg(t, a, i, u), sS(null, t, a, !0, s, u);
    }
    function ax(e, t, a, i) {
      dm(e, t);
      var u = t.pendingProps, s;
      {
        var f = cf(t, a, !1);
        s = ff(t, f);
      }
      mf(t, i);
      var p, v;
      hl(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = st(a) || "Unknown";
          rS[y] || (E("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), rS[y] = !0);
        }
        t.mode & tn && Ni.recordLegacyContextWarning(t, null), kr(!0), xp.current = t, p = Rf(null, t, a, u, s, i), v = wf(), kr(!1);
      }
      if (ql(), t.flags |= ol, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = st(a) || "Unknown";
        bp[g] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), bp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var b = st(a) || "Unknown";
          bp[b] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), bp[b] = !0);
        }
        t.tag = me, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return bl(a) ? (w = !0, Th(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, rg(t), vE(t, p), mg(t, a, u, i), sS(null, t, a, !0, w, i);
      } else {
        if (t.tag = Oe, t.mode & tn) {
          Tn(!0);
          try {
            p = Rf(null, t, a, u, s, i), v = wf();
          } finally {
            Tn(!1);
          }
        }
        return dr() && v && Py(t), Zr(null, t, p, i), cS(t, a), t.child;
      }
    }
    function cS(e, t) {
      {
        if (t && t.childContextTypes && E("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = sr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), lS[u] || (lS[u] = !0, E("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = st(t) || "Unknown";
          iS[f] || (E("%s: Function components do not support getDerivedStateFromProps.", f), iS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = st(t) || "Unknown";
          aS[p] || (E("%s: Function components do not support contextType.", p), aS[p] = !0);
        }
      }
    }
    var fS = {
      dehydrated: null,
      treeContext: null,
      retryLane: it
    };
    function dS(e) {
      return {
        baseLanes: e,
        cachePool: Gw(),
        transitions: null
      };
    }
    function ix(e, t) {
      var a = null;
      return {
        baseLanes: $e(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function lx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return xg(e, yp);
    }
    function ux(e, t) {
      return no(e.childLanes, t);
    }
    function fC(e, t, a) {
      var i = t.pendingProps;
      m_(t) && (t.flags |= Ne);
      var u = Ui.current, s = !1, f = (t.flags & Ne) !== Te;
      if (f || lx(u, e) ? (s = !0, t.flags &= ~Ne) : (e === null || e.memoizedState !== null) && (u = kw(u, wE)), u = Sf(u), bo(t, u), e === null) {
        Wy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return dx(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = ox(t, y, g, a), w = t.child;
          return w.memoizedState = dS(a), t.memoizedState = fS, b;
        } else
          return pS(t, y);
      } else {
        var L = e.memoizedState;
        if (L !== null) {
          var N = L.dehydrated;
          if (N !== null)
            return px(e, t, f, i, N, L, a);
        }
        if (s) {
          var H = i.fallback, ie = i.children, we = cx(e, t, ie, H, a), ye = t.child, ut = e.child.memoizedState;
          return ye.memoizedState = ut === null ? dS(a) : ix(ut, a), ye.childLanes = ux(e, a), t.memoizedState = fS, we;
        } else {
          var Je = i.children, D = sx(e, t, Je, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function pS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = vS(u, i);
      return s.return = e, e.child = s, s;
    }
    function ox(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & Ge) === be && s !== null ? (p = s, p.childLanes = j, p.pendingProps = f, e.mode & De && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = zo(a, u, i, null)) : (p = vS(f, u), v = zo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function vS(e, t, a) {
      return d1(e, t, j, null);
    }
    function dC(e, t) {
      return Bs(e, t);
    }
    function sx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = dC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ge) === be && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= St) : p.push(s);
      }
      return t.child = f, f;
    }
    function cx(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Ge) === be && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = j, y.pendingProps = v, t.mode & De && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = dC(f, v), y.subtreeFlags = f.subtreeFlags & Vn;
      var b;
      return p !== null ? b = Bs(p, i) : (b = zo(i, s, u, null), b.flags |= Bt), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function fm(e, t, a, i) {
      i !== null && Gy(i), yf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = pS(t, s);
      return f.flags |= Bt, t.memoizedState = null, f;
    }
    function fx(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = vS(f, s), v = zo(i, s, u, null);
      return v.flags |= Bt, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Ge) !== be && yf(t, e.child, null, u), v;
    }
    function dx(e, t, a) {
      return (e.mode & Ge) === be ? (E("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ke) : My(t) ? e.lanes = Zl : e.lanes = Hr, null;
    }
    function px(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & un) {
          t.flags &= ~un;
          var D = eS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return fm(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ne, null;
          var F = i.children, k = i.fallback, I = fx(e, t, F, k, f), le = t.child;
          return le.memoizedState = dS(f), t.memoizedState = fS, I;
        }
      else {
        if (tw(), (t.mode & Ge) === be)
          return fm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (My(u)) {
          var p, v, y;
          {
            var g = gR(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = eS(b, p, y);
          return fm(e, t, f, w);
        }
        var L = Fr(f, e.childLanes);
        if (Hi || L) {
          var N = Tm();
          if (N !== null) {
            var H = Jm(N, f);
            if (H !== it && H !== s.retryLane) {
              s.retryLane = H;
              var ie = Mt;
              Ea(e, H), Xn(N, e, H, ie);
            }
          }
          US();
          var we = eS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return fm(e, t, f, we);
        } else if (z0(u)) {
          t.flags |= Ne, t.child = e.child;
          var ye = Fb.bind(null, e);
          return SR(u, ye), null;
        } else {
          aw(t, u, s.treeContext);
          var ut = i.children, Je = pS(t, ut);
          return Je.flags |= ca, Je;
        }
      }
    }
    function pC(e, t, a) {
      e.lanes = $e(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = $e(i.lanes, t)), Jy(e.return, t, a);
    }
    function vx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Re) {
          var u = i.memoizedState;
          u !== null && pC(i, a, e);
        } else if (i.tag === Et)
          pC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function hx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Yh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function mx(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !uS[e])
        if (uS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              E('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              E('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              E('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          E('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function yx(e, t) {
      e !== void 0 && !cm[e] && (e !== "collapsed" && e !== "hidden" ? (cm[e] = !0, E('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (cm[e] = !0, E('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function vC(e, t) {
      {
        var a = tt(e), i = !a && typeof Ma(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return E("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function gx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (tt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!vC(e[a], a))
              return;
        } else {
          var i = Ma(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!vC(s.value, f))
                  return;
                f++;
              }
          } else
            E('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function hS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function hC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      mx(u), yx(s, u), gx(f, u), Zr(e, t, f, a);
      var p = Ui.current, v = xg(p, yp);
      if (v)
        p = bg(p, yp), t.flags |= Ne;
      else {
        var y = e !== null && (e.flags & Ne) !== Te;
        y && vx(t, t.child, a), p = Sf(p);
      }
      if (bo(t, p), (t.mode & Ge) === be)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = hx(t.child), b;
            g === null ? (b = t.child, t.child = null) : (b = g.sibling, g.sibling = null), hS(
              t,
              !1,
              // isBackwards
              b,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, L = t.child;
            for (t.child = null; L !== null; ) {
              var N = L.alternate;
              if (N !== null && Yh(N) === null) {
                t.child = L;
                break;
              }
              var H = L.sibling;
              L.sibling = w, w = L, L = H;
            }
            hS(
              t,
              !0,
              // isBackwards
              w,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            hS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Sx(e, t, a) {
      Tg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = yf(t, null, i, a) : Zr(e, t, i, a), t.child;
    }
    var mC = !1;
    function Ex(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || mC || (mC = !0, E("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Li(v, s, "prop", "Context.Provider");
      }
      if (rE(t, u, p), f !== null) {
        var y = f.value;
        if (fe(y, p)) {
          if (f.children === s.children && !Eh())
            return Cu(e, t, a);
        } else
          vw(t, u, a);
      }
      var g = s.children;
      return Zr(e, t, g, a), t.child;
    }
    var yC = !1;
    function Cx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (yC || (yC = !0, E("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && E("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), mf(t, a);
      var f = Hn(i);
      hl(t);
      var p;
      return xp.current = t, kr(!0), p = s(f), kr(!1), ql(), t.flags |= ol, Zr(e, t, p, a), t.child;
    }
    function _p() {
      Hi = !0;
    }
    function dm(e, t) {
      (t.mode & Ge) === be && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Bt);
    }
    function Cu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), ZE(), jp(t.lanes), Fr(a, t.childLanes) ? (bw(e, t), t.child) : null;
    }
    function Tx(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= St) : s.push(e), a.flags |= Bt, a;
      }
    }
    function mS(e, t) {
      var a = e.lanes;
      return !!Fr(a, t);
    }
    function Rx(e, t, a) {
      switch (t.tag) {
        case oe:
          sC(t), t.stateNode, vf();
          break;
        case ue:
          TE(t);
          break;
        case me: {
          var i = t.type;
          bl(i) && Th(t);
          break;
        }
        case ge:
          Tg(t, t.stateNode.containerInfo);
          break;
        case Xt: {
          var u = t.memoizedProps.value, s = t.type._context;
          rE(t, s, u);
          break;
        }
        case rt:
          {
            var f = Fr(a, t.childLanes);
            f && (t.flags |= Pe);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Re: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return bo(t, Sf(Ui.current)), t.flags |= Ne, null;
            var y = t.child, g = y.childLanes;
            if (Fr(a, g))
              return fC(e, t, a);
            bo(t, Sf(Ui.current));
            var b = Cu(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            bo(t, Sf(Ui.current));
          break;
        }
        case Et: {
          var w = (e.flags & Ne) !== Te, L = Fr(a, t.childLanes);
          if (w) {
            if (L)
              return hC(e, t, a);
            t.flags |= Ne;
          }
          var N = t.memoizedState;
          if (N !== null && (N.rendering = null, N.tail = null, N.lastEffect = null), bo(t, Ui.current), L)
            break;
          return null;
        }
        case Ye:
        case at:
          return t.lanes = j, lC(e, t, a);
      }
      return Cu(e, t, a);
    }
    function gC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Tx(e, t, QS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Eh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Hi = !0;
        else {
          var s = mS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ne) === Te)
            return Hi = !1, Rx(e, t, a);
          (e.flags & rs) !== Te ? Hi = !0 : Hi = !1;
        }
      } else if (Hi = !1, dr() && qR(t)) {
        var f = t.index, p = XR();
        I0(t, p, f);
      }
      switch (t.lanes = j, t.tag) {
        case jt:
          return ax(e, t, t.type, a);
        case Kt: {
          var v = t.elementType;
          return nx(e, t, v, a);
        }
        case Oe: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : zi(y, g);
          return oS(e, t, y, b, a);
        }
        case me: {
          var w = t.type, L = t.pendingProps, N = t.elementType === w ? L : zi(w, L);
          return oC(e, t, w, N, a);
        }
        case oe:
          return Jw(e, t, a);
        case ue:
          return ex(e, t, a);
        case Fe:
          return tx(e, t);
        case Re:
          return fC(e, t, a);
        case ge:
          return Sx(e, t, a);
        case Be: {
          var H = t.type, ie = t.pendingProps, we = t.elementType === H ? ie : zi(H, ie);
          return rC(e, t, H, we, a);
        }
        case vt:
          return Xw(e, t, a);
        case nt:
          return Kw(e, t, a);
        case rt:
          return Zw(e, t, a);
        case Xt:
          return Ex(e, t, a);
        case Kn:
          return Cx(e, t, a);
        case Xe: {
          var ye = t.type, ut = t.pendingProps, Je = zi(ye, ut);
          if (t.type !== t.elementType) {
            var D = ye.propTypes;
            D && Li(
              D,
              Je,
              // Resolved for outer only
              "prop",
              st(ye)
            );
          }
          return Je = zi(ye.type, Je), aC(e, t, ye, Je, a);
        }
        case Ue:
          return iC(e, t, t.type, t.pendingProps, a);
        case Dn: {
          var F = t.type, k = t.pendingProps, I = t.elementType === F ? k : zi(F, k);
          return rx(e, t, F, I, a);
        }
        case Et:
          return hC(e, t, a);
        case En:
          break;
        case Ye:
          return lC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function xf(e) {
      e.flags |= Pe;
    }
    function SC(e) {
      e.flags |= Lr, e.flags |= od;
    }
    var EC, yS, CC, TC;
    EC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ue || u.tag === Fe)
          QT(e, u.stateNode);
        else if (u.tag !== ge) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, yS = function(e, t) {
    }, CC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Rg(), v = GT(f, a, s, i, u, p);
        t.updateQueue = v, v && xf(t);
      }
    }, TC = function(e, t, a, i) {
      a !== i && xf(t);
    };
    function Dp(e, t) {
      if (!dr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function vr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = j, i = Te;
      if (t) {
        if ((e.mode & De) !== be) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = $e(a, $e(y.lanes, y.childLanes)), i |= y.subtreeFlags & Vn, i |= y.flags & Vn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = $e(a, $e(g.lanes, g.childLanes)), i |= g.subtreeFlags & Vn, i |= g.flags & Vn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & De) !== be) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = $e(a, $e(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = $e(a, $e(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function wx(e, t, a) {
      if (sw() && (t.mode & Ge) !== be && (t.flags & Ne) === Te)
        return Z0(t), vf(), t.flags |= un | Qr | Mn, !1;
      var i = _h(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (uw(t), vr(t), (t.mode & De) !== be) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (vf(), (t.flags & Ne) === Te && (t.memoizedState = null), t.flags |= Pe, vr(t), (t.mode & De) !== be) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return J0(), !0;
    }
    function RC(e, t, a) {
      var i = t.pendingProps;
      switch ($y(t), t.tag) {
        case jt:
        case Kt:
        case Ue:
        case Oe:
        case Be:
        case vt:
        case nt:
        case rt:
        case Kn:
        case Xe:
          return vr(t), null;
        case me: {
          var u = t.type;
          return bl(u) && Ch(t), vr(t), null;
        }
        case oe: {
          var s = t.stateNode;
          if (gf(t), jy(t), Dg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = _h(t);
            if (f)
              xf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & un) !== Te) && (t.flags |= sa, J0());
            }
          }
          return yS(e, t), vr(t), null;
        }
        case ue: {
          wg(t);
          var v = CE(), y = t.type;
          if (e !== null && t.stateNode != null)
            CC(e, t, y, i, v), e.ref !== t.ref && SC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return vr(t), null;
            }
            var g = Rg(), b = _h(t);
            if (b)
              iw(t, v, g) && xf(t);
            else {
              var w = IT(y, i, v, g, t);
              EC(w, t, !1, !1), t.stateNode = w, WT(w, y, i, v) && xf(t);
            }
            t.ref !== null && SC(t);
          }
          return vr(t), null;
        }
        case Fe: {
          var L = i;
          if (e && t.stateNode != null) {
            var N = e.memoizedProps;
            TC(e, t, N, L);
          } else {
            if (typeof L != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var H = CE(), ie = Rg(), we = _h(t);
            we ? lw(t) && xf(t) : t.stateNode = qT(L, H, ie, t);
          }
          return vr(t), null;
        }
        case Re: {
          Ef(t);
          var ye = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var ut = wx(e, t, ye);
            if (!ut)
              return t.flags & Mn ? t : null;
          }
          if ((t.flags & Ne) !== Te)
            return t.lanes = a, (t.mode & De) !== be && Jg(t), t;
          var Je = ye !== null, D = e !== null && e.memoizedState !== null;
          if (Je !== D && Je) {
            var F = t.child;
            if (F.flags |= sl, (t.mode & Ge) !== be) {
              var k = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !B);
              k || xg(Ui.current, wE) ? xb() : US();
            }
          }
          var I = t.updateQueue;
          if (I !== null && (t.flags |= Pe), vr(t), (t.mode & De) !== be && Je) {
            var le = t.child;
            le !== null && (t.treeBaseDuration -= le.treeBaseDuration);
          }
          return null;
        }
        case ge:
          return gf(t), yS(e, t), e === null && PR(t.stateNode.containerInfo), vr(t), null;
        case Xt:
          var te = t.type._context;
          return Zy(te, t), vr(t), null;
        case Dn: {
          var Le = t.type;
          return bl(Le) && Ch(t), vr(t), null;
        }
        case Et: {
          Ef(t);
          var je = t.memoizedState;
          if (je === null)
            return vr(t), null;
          var Dt = (t.flags & Ne) !== Te, mt = je.rendering;
          if (mt === null)
            if (Dt)
              Dp(je, !1);
            else {
              var _n = _b() && (e === null || (e.flags & Ne) === Te);
              if (!_n)
                for (var yt = t.child; yt !== null; ) {
                  var Sn = Yh(yt);
                  if (Sn !== null) {
                    Dt = !0, t.flags |= Ne, Dp(je, !1);
                    var Pr = Sn.updateQueue;
                    return Pr !== null && (t.updateQueue = Pr, t.flags |= Pe), t.subtreeFlags = Te, _w(t, a), bo(t, bg(Ui.current, yp)), t.child;
                  }
                  yt = yt.sibling;
                }
              je.tail !== null && en() > YC() && (t.flags |= Ne, Dt = !0, Dp(je, !1), t.lanes = Cd);
            }
          else {
            if (!Dt) {
              var Sr = Yh(mt);
              if (Sr !== null) {
                t.flags |= Ne, Dt = !0;
                var $a = Sr.updateQueue;
                if ($a !== null && (t.updateQueue = $a, t.flags |= Pe), Dp(je, !0), je.tail === null && je.tailMode === "hidden" && !mt.alternate && !dr())
                  return vr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                en() * 2 - je.renderingStartTime > YC() && a !== Hr && (t.flags |= Ne, Dt = !0, Dp(je, !1), t.lanes = Cd);
            }
            if (je.isBackwards)
              mt.sibling = t.child, t.child = mt;
            else {
              var ta = je.last;
              ta !== null ? ta.sibling = mt : t.child = mt, je.last = mt;
            }
          }
          if (je.tail !== null) {
            var na = je.tail;
            je.rendering = na, je.tail = na.sibling, je.renderingStartTime = en(), na.sibling = null;
            var $r = Ui.current;
            return Dt ? $r = bg($r, yp) : $r = Sf($r), bo(t, $r), na;
          }
          return vr(t), null;
        }
        case En:
          break;
        case Ye:
        case at: {
          zS(t);
          var bu = t.memoizedState, Nf = bu !== null;
          if (e !== null) {
            var Yp = e.memoizedState, zl = Yp !== null;
            zl !== Nf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !T && (t.flags |= sl);
          }
          return !Nf || (t.mode & Ge) === be ? vr(t) : Fr(Nl, Hr) && (vr(t), t.subtreeFlags & (Bt | Pe) && (t.flags |= sl)), null;
        }
        case Qt:
          return null;
        case gt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function xx(e, t, a) {
      switch ($y(t), t.tag) {
        case me: {
          var i = t.type;
          bl(i) && Ch(t);
          var u = t.flags;
          return u & Mn ? (t.flags = u & ~Mn | Ne, (t.mode & De) !== be && Jg(t), t) : null;
        }
        case oe: {
          t.stateNode, gf(t), jy(t), Dg();
          var s = t.flags;
          return (s & Mn) !== Te && (s & Ne) === Te ? (t.flags = s & ~Mn | Ne, t) : null;
        }
        case ue:
          return wg(t), null;
        case Re: {
          Ef(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            vf();
          }
          var p = t.flags;
          return p & Mn ? (t.flags = p & ~Mn | Ne, (t.mode & De) !== be && Jg(t), t) : null;
        }
        case Et:
          return Ef(t), null;
        case ge:
          return gf(t), null;
        case Xt:
          var v = t.type._context;
          return Zy(v, t), null;
        case Ye:
        case at:
          return zS(t), null;
        case Qt:
          return null;
        default:
          return null;
      }
    }
    function wC(e, t, a) {
      switch ($y(t), t.tag) {
        case me: {
          var i = t.type.childContextTypes;
          i != null && Ch(t);
          break;
        }
        case oe: {
          t.stateNode, gf(t), jy(t), Dg();
          break;
        }
        case ue: {
          wg(t);
          break;
        }
        case ge:
          gf(t);
          break;
        case Re:
          Ef(t);
          break;
        case Et:
          Ef(t);
          break;
        case Xt:
          var u = t.type._context;
          Zy(u, t);
          break;
        case Ye:
        case at:
          zS(t);
          break;
      }
    }
    var xC = null;
    xC = /* @__PURE__ */ new Set();
    var pm = !1, hr = !1, bx = typeof WeakSet == "function" ? WeakSet : Set, de = null, bf = null, _f = null;
    function _x(e) {
      Wl(null, function() {
        throw e;
      }), ld();
    }
    var Dx = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & De)
        try {
          Ll(), t.componentWillUnmount();
        } finally {
          Ol(e);
        }
      else
        t.componentWillUnmount();
    };
    function bC(e, t) {
      try {
        ko(Yn, e);
      } catch (a) {
        It(e, t, a);
      }
    }
    function gS(e, t, a) {
      try {
        Dx(e, a);
      } catch (i) {
        It(e, t, i);
      }
    }
    function kx(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        It(e, t, i);
      }
    }
    function _C(e, t) {
      try {
        kC(e);
      } catch (a) {
        It(e, t, a);
      }
    }
    function Df(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ke && dt && e.mode & De)
              try {
                Ll(), i = a(null);
              } finally {
                Ol(e);
              }
            else
              i = a(null);
          } catch (u) {
            It(e, t, u);
          }
          typeof i == "function" && E("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ae(e));
        } else
          a.current = null;
    }
    function vm(e, t, a) {
      try {
        a();
      } catch (i) {
        It(e, t, i);
      }
    }
    var DC = !1;
    function Ox(e, t) {
      $T(e.containerInfo), de = t, Lx();
      var a = DC;
      return DC = !1, a;
    }
    function Lx() {
      for (; de !== null; ) {
        var e = de, t = e.child;
        (e.subtreeFlags & Gu) !== Te && t !== null ? (t.return = e, de = t) : Mx();
      }
    }
    function Mx() {
      for (; de !== null; ) {
        var e = de;
        Ct(e);
        try {
          Nx(e);
        } catch (a) {
          It(e, e.return, a);
        }
        ln();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, de = t;
          return;
        }
        de = e.return;
      }
    }
    function Nx(e) {
      var t = e.alternate, a = e.flags;
      if ((a & sa) !== Te) {
        switch (Ct(e), e.tag) {
          case Oe:
          case Be:
          case Ue:
            break;
          case me: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !As && (s.props !== e.memoizedProps && E("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ae(e) || "instance"), s.state !== e.memoizedState && E("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ae(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : zi(e.type, i), u);
              {
                var p = xC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), E("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ae(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case oe: {
            {
              var v = e.stateNode;
              vR(v.containerInfo);
            }
            break;
          }
          case ue:
          case Fe:
          case ge:
          case Dn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        ln();
      }
    }
    function Fi(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & pr) !== Ca ? mc(t) : (e & Yn) !== Ca && yc(t), (e & _l) !== Ca && Bp(!0), vm(t, a, p), (e & _l) !== Ca && Bp(!1), (e & pr) !== Ca ? bv() : (e & Yn) !== Ca && qu());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function ko(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & pr) !== Ca ? xv(t) : (e & Yn) !== Ca && _v(t);
            var f = s.create;
            (e & _l) !== Ca && Bp(!0), s.destroy = f(), (e & _l) !== Ca && Bp(!1), (e & pr) !== Ca ? gd() : (e & Yn) !== Ca && Dv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & Yn) !== Te ? v = "useLayoutEffect" : (s.tag & _l) !== Te ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, E("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function zx(e, t) {
      if ((t.flags & Pe) !== Te)
        switch (t.tag) {
          case rt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = XE(), p = t.alternate === null ? "mount" : "update";
            qE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case oe:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                  case rt:
                    var g = v.stateNode;
                    g.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function Ux(e, t, a, i) {
      if ((a.flags & er) !== Te)
        switch (a.tag) {
          case Oe:
          case Be:
          case Ue: {
            if (!hr)
              if (a.mode & De)
                try {
                  Ll(), ko(Yn | $n, a);
                } finally {
                  Ol(a);
                }
              else
                ko(Yn | $n, a);
            break;
          }
          case me: {
            var u = a.stateNode;
            if (a.flags & Pe && !hr)
              if (t === null)
                if (a.type === a.elementType && !As && (u.props !== a.memoizedProps && E("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ae(a) || "instance"), u.state !== a.memoizedState && E("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ae(a) || "instance")), a.mode & De)
                  try {
                    Ll(), u.componentDidMount();
                  } finally {
                    Ol(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : zi(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !As && (u.props !== a.memoizedProps && E("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ae(a) || "instance"), u.state !== a.memoizedState && E("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ae(a) || "instance")), a.mode & De)
                  try {
                    Ll(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Ol(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !As && (u.props !== a.memoizedProps && E("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ae(a) || "instance"), u.state !== a.memoizedState && E("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ae(a) || "instance")), sE(a, p, u));
            break;
          }
          case oe: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ue:
                    y = a.child.stateNode;
                    break;
                  case me:
                    y = a.child.stateNode;
                    break;
                }
              sE(a, v, y);
            }
            break;
          }
          case ue: {
            var g = a.stateNode;
            if (t === null && a.flags & Pe) {
              var b = a.type, w = a.memoizedProps;
              eR(g, b, w);
            }
            break;
          }
          case Fe:
            break;
          case ge:
            break;
          case rt: {
            {
              var L = a.memoizedProps, N = L.onCommit, H = L.onRender, ie = a.stateNode.effectDuration, we = XE(), ye = t === null ? "mount" : "update";
              qE() && (ye = "nested-update"), typeof H == "function" && H(a.memoizedProps.id, ye, a.actualDuration, a.treeBaseDuration, a.actualStartTime, we);
              {
                typeof N == "function" && N(a.memoizedProps.id, ye, ie, we), Mb(a);
                var ut = a.return;
                e:
                  for (; ut !== null; ) {
                    switch (ut.tag) {
                      case oe:
                        var Je = ut.stateNode;
                        Je.effectDuration += ie;
                        break e;
                      case rt:
                        var D = ut.stateNode;
                        D.effectDuration += ie;
                        break e;
                    }
                    ut = ut.return;
                  }
              }
            }
            break;
          }
          case Re: {
            $x(e, a);
            break;
          }
          case Et:
          case Dn:
          case En:
          case Ye:
          case at:
          case gt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      hr || a.flags & Lr && kC(a);
    }
    function Ax(e) {
      switch (e.tag) {
        case Oe:
        case Be:
        case Ue: {
          if (e.mode & De)
            try {
              Ll(), bC(e, e.return);
            } finally {
              Ol(e);
            }
          else
            bC(e, e.return);
          break;
        }
        case me: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && kx(e, e.return, t), _C(e, e.return);
          break;
        }
        case ue: {
          _C(e, e.return);
          break;
        }
      }
    }
    function Hx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ue) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? cR(u) : dR(i.stateNode, i.memoizedProps);
            } catch (f) {
              It(e, e.return, f);
            }
          }
        } else if (i.tag === Fe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? fR(s) : pR(s, i.memoizedProps);
            } catch (f) {
              It(e, e.return, f);
            }
        } else if (!((i.tag === Ye || i.tag === at) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function kC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ue:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & De)
            try {
              Ll(), u = t(i);
            } finally {
              Ol(e);
            }
          else
            u = t(i);
          typeof u == "function" && E("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ae(e));
        } else
          t.hasOwnProperty("current") || E("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ae(e)), t.current = i;
      }
    }
    function Fx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function OC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, OC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ue) {
          var a = e.stateNode;
          a !== null && IR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function jx(e) {
      for (var t = e.return; t !== null; ) {
        if (LC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function LC(e) {
      return e.tag === ue || e.tag === oe || e.tag === ge;
    }
    function MC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || LC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== ue && t.tag !== Fe && t.tag !== Nt; ) {
            if (t.flags & Bt || t.child === null || t.tag === ge)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Bt))
            return t.stateNode;
        }
    }
    function Vx(e) {
      var t = jx(e);
      switch (t.tag) {
        case ue: {
          var a = t.stateNode;
          t.flags & Tt && (N0(a), t.flags &= ~Tt);
          var i = MC(e);
          ES(e, i, a);
          break;
        }
        case oe:
        case ge: {
          var u = t.stateNode.containerInfo, s = MC(e);
          SS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function SS(e, t, a) {
      var i = e.tag, u = i === ue || i === Fe;
      if (u) {
        var s = e.stateNode;
        t ? lR(a, s, t) : aR(a, s);
      } else if (i !== ge) {
        var f = e.child;
        if (f !== null) {
          SS(f, t, a);
          for (var p = f.sibling; p !== null; )
            SS(p, t, a), p = p.sibling;
        }
      }
    }
    function ES(e, t, a) {
      var i = e.tag, u = i === ue || i === Fe;
      if (u) {
        var s = e.stateNode;
        t ? iR(a, s, t) : rR(a, s);
      } else if (i !== ge) {
        var f = e.child;
        if (f !== null) {
          ES(f, t, a);
          for (var p = f.sibling; p !== null; )
            ES(p, t, a), p = p.sibling;
        }
      }
    }
    var mr = null, ji = !1;
    function Bx(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case ue: {
                mr = i.stateNode, ji = !1;
                break e;
              }
              case oe: {
                mr = i.stateNode.containerInfo, ji = !0;
                break e;
              }
              case ge: {
                mr = i.stateNode.containerInfo, ji = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (mr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        NC(e, t, a), mr = null, ji = !1;
      }
      Fx(a);
    }
    function Oo(e, t, a) {
      for (var i = a.child; i !== null; )
        NC(e, t, i), i = i.sibling;
    }
    function NC(e, t, a) {
      switch (md(a), a.tag) {
        case ue:
          hr || Df(a, t);
        case Fe: {
          {
            var i = mr, u = ji;
            mr = null, Oo(e, t, a), mr = i, ji = u, mr !== null && (ji ? oR(mr, a.stateNode) : uR(mr, a.stateNode));
          }
          return;
        }
        case Nt: {
          mr !== null && (ji ? sR(mr, a.stateNode) : Ly(mr, a.stateNode));
          return;
        }
        case ge: {
          {
            var s = mr, f = ji;
            mr = a.stateNode.containerInfo, ji = !0, Oo(e, t, a), mr = s, ji = f;
          }
          return;
        }
        case Oe:
        case Be:
        case Xe:
        case Ue: {
          if (!hr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, w = b.destroy, L = b.tag;
                  w !== void 0 && ((L & _l) !== Ca ? vm(a, t, w) : (L & Yn) !== Ca && (yc(a), a.mode & De ? (Ll(), vm(a, t, w), Ol(a)) : vm(a, t, w), qu())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Oo(e, t, a);
          return;
        }
        case me: {
          if (!hr) {
            Df(a, t);
            var N = a.stateNode;
            typeof N.componentWillUnmount == "function" && gS(a, t, N);
          }
          Oo(e, t, a);
          return;
        }
        case En: {
          Oo(e, t, a);
          return;
        }
        case Ye: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ge
          ) {
            var H = hr;
            hr = H || a.memoizedState !== null, Oo(e, t, a), hr = H;
          } else
            Oo(e, t, a);
          break;
        }
        default: {
          Oo(e, t, a);
          return;
        }
      }
    }
    function Px(e) {
      e.memoizedState;
    }
    function $x(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && DR(s);
          }
        }
      }
    }
    function zC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new bx()), t.forEach(function(i) {
          var u = jb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Bn)
              if (bf !== null && _f !== null)
                Vp(_f, bf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Yx(e, t, a) {
      bf = a, _f = e, Ct(t), UC(t, e), Ct(t), bf = null, _f = null;
    }
    function Vi(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Bx(e, t, s);
          } catch (v) {
            It(s, t, v);
          }
        }
      var f = Gs();
      if (t.subtreeFlags & zr)
        for (var p = t.child; p !== null; )
          Ct(p), UC(p, e), p = p.sibling;
      Ct(f);
    }
    function UC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case Oe:
        case Be:
        case Xe:
        case Ue: {
          if (Vi(t, e), Ml(e), u & Pe) {
            try {
              Fi(_l | $n, e, e.return), ko(_l | $n, e);
            } catch (Le) {
              It(e, e.return, Le);
            }
            if (e.mode & De) {
              try {
                Ll(), Fi(Yn | $n, e, e.return);
              } catch (Le) {
                It(e, e.return, Le);
              }
              Ol(e);
            } else
              try {
                Fi(Yn | $n, e, e.return);
              } catch (Le) {
                It(e, e.return, Le);
              }
          }
          return;
        }
        case me: {
          Vi(t, e), Ml(e), u & Lr && i !== null && Df(i, i.return);
          return;
        }
        case ue: {
          Vi(t, e), Ml(e), u & Lr && i !== null && Df(i, i.return);
          {
            if (e.flags & Tt) {
              var s = e.stateNode;
              try {
                N0(s);
              } catch (Le) {
                It(e, e.return, Le);
              }
            }
            if (u & Pe) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    tR(f, g, y, v, p, e);
                  } catch (Le) {
                    It(e, e.return, Le);
                  }
              }
            }
          }
          return;
        }
        case Fe: {
          if (Vi(t, e), Ml(e), u & Pe) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, w = e.memoizedProps, L = i !== null ? i.memoizedProps : w;
            try {
              nR(b, L, w);
            } catch (Le) {
              It(e, e.return, Le);
            }
          }
          return;
        }
        case oe: {
          if (Vi(t, e), Ml(e), u & Pe && i !== null) {
            var N = i.memoizedState;
            if (N.isDehydrated)
              try {
                _R(t.containerInfo);
              } catch (Le) {
                It(e, e.return, Le);
              }
          }
          return;
        }
        case ge: {
          Vi(t, e), Ml(e);
          return;
        }
        case Re: {
          Vi(t, e), Ml(e);
          var H = e.child;
          if (H.flags & sl) {
            var ie = H.stateNode, we = H.memoizedState, ye = we !== null;
            if (ie.isHidden = ye, ye) {
              var ut = H.alternate !== null && H.alternate.memoizedState !== null;
              ut || wb();
            }
          }
          if (u & Pe) {
            try {
              Px(e);
            } catch (Le) {
              It(e, e.return, Le);
            }
            zC(e);
          }
          return;
        }
        case Ye: {
          var Je = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ge
          ) {
            var D = hr;
            hr = D || Je, Vi(t, e), hr = D;
          } else
            Vi(t, e);
          if (Ml(e), u & sl) {
            var F = e.stateNode, k = e.memoizedState, I = k !== null, le = e;
            if (F.isHidden = I, I && !Je && (le.mode & Ge) !== be) {
              de = le;
              for (var te = le.child; te !== null; )
                de = te, Qx(te), te = te.sibling;
            }
            Hx(le, I);
          }
          return;
        }
        case Et: {
          Vi(t, e), Ml(e), u & Pe && zC(e);
          return;
        }
        case En:
          return;
        default: {
          Vi(t, e), Ml(e);
          return;
        }
      }
    }
    function Ml(e) {
      var t = e.flags;
      if (t & Bt) {
        try {
          Vx(e);
        } catch (a) {
          It(e, e.return, a);
        }
        e.flags &= ~Bt;
      }
      t & ca && (e.flags &= ~ca);
    }
    function Ix(e, t, a) {
      bf = a, _f = t, de = e, AC(e, t, a), bf = null, _f = null;
    }
    function AC(e, t, a) {
      for (var i = (e.mode & Ge) !== be; de !== null; ) {
        var u = de, s = u.child;
        if (u.tag === Ye && i) {
          var f = u.memoizedState !== null, p = f || pm;
          if (p) {
            CS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || hr, b = pm, w = hr;
            pm = p, hr = g, hr && !w && (de = u, Wx(u));
            for (var L = s; L !== null; )
              de = L, AC(
                L,
                // New root; bubble back up to here and stop.
                t,
                a
              ), L = L.sibling;
            de = u, pm = b, hr = w, CS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & er) !== Te && s !== null ? (s.return = u, de = s) : CS(e, t, a);
      }
    }
    function CS(e, t, a) {
      for (; de !== null; ) {
        var i = de;
        if ((i.flags & er) !== Te) {
          var u = i.alternate;
          Ct(i);
          try {
            Ux(t, u, i, a);
          } catch (f) {
            It(i, i.return, f);
          }
          ln();
        }
        if (i === e) {
          de = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, de = s;
          return;
        }
        de = i.return;
      }
    }
    function Qx(e) {
      for (; de !== null; ) {
        var t = de, a = t.child;
        switch (t.tag) {
          case Oe:
          case Be:
          case Xe:
          case Ue: {
            if (t.mode & De)
              try {
                Ll(), Fi(Yn, t, t.return);
              } finally {
                Ol(t);
              }
            else
              Fi(Yn, t, t.return);
            break;
          }
          case me: {
            Df(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && gS(t, t.return, i);
            break;
          }
          case ue: {
            Df(t, t.return);
            break;
          }
          case Ye: {
            var u = t.memoizedState !== null;
            if (u) {
              HC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, de = a) : HC(e);
      }
    }
    function HC(e) {
      for (; de !== null; ) {
        var t = de;
        if (t === e) {
          de = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, de = a;
          return;
        }
        de = t.return;
      }
    }
    function Wx(e) {
      for (; de !== null; ) {
        var t = de, a = t.child;
        if (t.tag === Ye) {
          var i = t.memoizedState !== null;
          if (i) {
            FC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, de = a) : FC(e);
      }
    }
    function FC(e) {
      for (; de !== null; ) {
        var t = de;
        Ct(t);
        try {
          Ax(t);
        } catch (i) {
          It(t, t.return, i);
        }
        if (ln(), t === e) {
          de = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, de = a;
          return;
        }
        de = t.return;
      }
    }
    function Gx(e, t, a, i) {
      de = t, qx(t, e, a, i);
    }
    function qx(e, t, a, i) {
      for (; de !== null; ) {
        var u = de, s = u.child;
        (u.subtreeFlags & fa) !== Te && s !== null ? (s.return = u, de = s) : Xx(e, t, a, i);
      }
    }
    function Xx(e, t, a, i) {
      for (; de !== null; ) {
        var u = de;
        if ((u.flags & Gt) !== Te) {
          Ct(u);
          try {
            Kx(t, u, a, i);
          } catch (f) {
            It(u, u.return, f);
          }
          ln();
        }
        if (u === e) {
          de = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, de = s;
          return;
        }
        de = u.return;
      }
    }
    function Kx(e, t, a, i) {
      switch (t.tag) {
        case Oe:
        case Be:
        case Ue: {
          if (t.mode & De) {
            Zg();
            try {
              ko(pr | $n, t);
            } finally {
              Kg(t);
            }
          } else
            ko(pr | $n, t);
          break;
        }
      }
    }
    function Zx(e) {
      de = e, Jx();
    }
    function Jx() {
      for (; de !== null; ) {
        var e = de, t = e.child;
        if ((de.flags & St) !== Te) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              de = u, nb(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            de = e;
          }
        }
        (e.subtreeFlags & fa) !== Te && t !== null ? (t.return = e, de = t) : eb();
      }
    }
    function eb() {
      for (; de !== null; ) {
        var e = de;
        (e.flags & Gt) !== Te && (Ct(e), tb(e), ln());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, de = t;
          return;
        }
        de = e.return;
      }
    }
    function tb(e) {
      switch (e.tag) {
        case Oe:
        case Be:
        case Ue: {
          e.mode & De ? (Zg(), Fi(pr | $n, e, e.return), Kg(e)) : Fi(pr | $n, e, e.return);
          break;
        }
      }
    }
    function nb(e, t) {
      for (; de !== null; ) {
        var a = de;
        Ct(a), ab(a, t), ln();
        var i = a.child;
        i !== null ? (i.return = a, de = i) : rb(e);
      }
    }
    function rb(e) {
      for (; de !== null; ) {
        var t = de, a = t.sibling, i = t.return;
        if (OC(t), t === e) {
          de = null;
          return;
        }
        if (a !== null) {
          a.return = i, de = a;
          return;
        }
        de = i;
      }
    }
    function ab(e, t) {
      switch (e.tag) {
        case Oe:
        case Be:
        case Ue: {
          e.mode & De ? (Zg(), Fi(pr, e, t), Kg(e)) : Fi(pr, e, t);
          break;
        }
      }
    }
    function ib(e) {
      switch (e.tag) {
        case Oe:
        case Be:
        case Ue: {
          try {
            ko(Yn | $n, e);
          } catch (a) {
            It(e, e.return, a);
          }
          break;
        }
        case me: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            It(e, e.return, a);
          }
          break;
        }
      }
    }
    function lb(e) {
      switch (e.tag) {
        case Oe:
        case Be:
        case Ue: {
          try {
            ko(pr | $n, e);
          } catch (t) {
            It(e, e.return, t);
          }
          break;
        }
      }
    }
    function ub(e) {
      switch (e.tag) {
        case Oe:
        case Be:
        case Ue: {
          try {
            Fi(Yn | $n, e, e.return);
          } catch (a) {
            It(e, e.return, a);
          }
          break;
        }
        case me: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && gS(e, e.return, t);
          break;
        }
      }
    }
    function ob(e) {
      switch (e.tag) {
        case Oe:
        case Be:
        case Ue:
          try {
            Fi(pr | $n, e, e.return);
          } catch (t) {
            It(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var kp = Symbol.for;
      kp("selector.component"), kp("selector.has_pseudo_class"), kp("selector.role"), kp("selector.test_id"), kp("selector.text");
    }
    var sb = [];
    function cb() {
      sb.forEach(function(e) {
        return e();
      });
    }
    var fb = A.ReactCurrentActQueue;
    function db(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function jC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && fb.current !== null && E("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var pb = Math.ceil, TS = A.ReactCurrentDispatcher, RS = A.ReactCurrentOwner, yr = A.ReactCurrentBatchConfig, Bi = A.ReactCurrentActQueue, Wn = (
      /*             */
      0
    ), VC = (
      /*               */
      1
    ), gr = (
      /*                */
      2
    ), oi = (
      /*                */
      4
    ), Tu = 0, Op = 1, Hs = 2, hm = 3, Lp = 4, BC = 5, wS = 6, lt = Wn, Jr = null, vn = null, Gn = j, Nl = j, xS = Eo(j), qn = Tu, Mp = null, mm = j, Np = j, ym = j, zp = null, Ta = null, bS = 0, PC = 500, $C = 1 / 0, vb = 500, Ru = null;
    function Up() {
      $C = en() + vb;
    }
    function YC() {
      return $C;
    }
    var gm = !1, _S = null, kf = null, Fs = !1, Lo = null, Ap = j, DS = [], kS = null, hb = 50, Hp = 0, OS = null, LS = !1, Sm = !1, mb = 50, Of = 0, Em = null, Fp = Mt, Cm = j, IC = !1;
    function Tm() {
      return Jr;
    }
    function ea() {
      return (lt & (gr | oi)) !== Wn ? en() : (Fp !== Mt || (Fp = en()), Fp);
    }
    function Mo(e) {
      var t = e.mode;
      if ((t & Ge) === be)
        return ke;
      if ((lt & gr) !== Wn && Gn !== j)
        return Rn(Gn);
      var a = dw() !== fw;
      if (a) {
        if (yr.transition !== null) {
          var i = yr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Cm === it && (Cm = wd()), Cm;
      }
      var u = ha();
      if (u !== it)
        return u;
      var s = XT();
      return s;
    }
    function yb(e) {
      var t = e.mode;
      return (t & Ge) === be ? ke : Zm();
    }
    function Xn(e, t, a, i) {
      Bb(), IC && E("useInsertionEffect must not schedule updates."), LS && (Sm = !0), iu(e, a, i), (lt & gr) !== j && e === Jr ? Yb(t) : (Bn && kd(e, t, a), Ib(t), e === Jr && ((lt & gr) === Wn && (Np = $e(Np, a)), qn === Lp && No(e, Gn)), Ra(e, i), a === ke && lt === Wn && (t.mode & Ge) === be && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Bi.isBatchingLegacy && (Up(), Y0()));
    }
    function gb(e, t, a) {
      var i = e.current;
      i.lanes = t, iu(e, t, a), Ra(e, a);
    }
    function Sb(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (lt & gr) !== Wn
      );
    }
    function Ra(e, t) {
      var a = e.callbackNode;
      qm(e, t);
      var i = ss(e, e === Jr ? Gn : j);
      if (i === j) {
        a !== null && u1(a), e.callbackNode = null, e.callbackPriority = it;
        return;
      }
      var u = yn(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Bi.current !== null && a !== FS)) {
        a == null && s !== ke && E("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && u1(a);
      var f;
      if (u === ke)
        e.tag === Co ? (Bi.isBatchingLegacy !== null && (Bi.didScheduleLegacyUpdate = !0), GR(GC.bind(null, e))) : $0(GC.bind(null, e)), Bi.current !== null ? Bi.current.push(To) : ZT(function() {
          (lt & (gr | oi)) === Wn && To();
        }), f = null;
      else {
        var p;
        switch (vs(i)) {
          case tr:
            p = pc;
            break;
          case Pn:
            p = qr;
            break;
          case bi:
            p = Za;
            break;
          case ds:
            p = fl;
            break;
          default:
            p = Za;
            break;
        }
        f = jS(p, QC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function QC(e, t) {
      if (Bw(), Fp = Mt, Cm = j, (lt & (gr | oi)) !== Wn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = xu();
      if (i && e.callbackNode !== a)
        return null;
      var u = ss(e, e === Jr ? Gn : j);
      if (u === j)
        return null;
      var s = !fs(e, u) && !zv(e, u) && !t, f = s ? kb(e, u) : wm(e, u);
      if (f !== Tu) {
        if (f === Hs) {
          var p = Td(e);
          p !== j && (u = p, f = MS(e, p));
        }
        if (f === Op) {
          var v = Mp;
          throw js(e, j), No(e, u), Ra(e, en()), v;
        }
        if (f === wS)
          No(e, u);
        else {
          var y = !fs(e, u), g = e.current.alternate;
          if (y && !Cb(g)) {
            if (f = wm(e, u), f === Hs) {
              var b = Td(e);
              b !== j && (u = b, f = MS(e, b));
            }
            if (f === Op) {
              var w = Mp;
              throw js(e, j), No(e, u), Ra(e, en()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Eb(e, f, u);
        }
      }
      return Ra(e, en()), e.callbackNode === a ? QC.bind(null, e) : null;
    }
    function MS(e, t) {
      var a = zp;
      if (xn(e)) {
        var i = js(e, t);
        i.flags |= un, BR(e.containerInfo);
      }
      var u = wm(e, t);
      if (u !== Hs) {
        var s = Ta;
        Ta = a, s !== null && WC(s);
      }
      return u;
    }
    function WC(e) {
      Ta === null ? Ta = e : Ta.push.apply(Ta, e);
    }
    function Eb(e, t, a) {
      switch (t) {
        case Tu:
        case Op:
          throw new Error("Root did not complete. This is a bug in React.");
        case Hs: {
          Vs(e, Ta, Ru);
          break;
        }
        case hm: {
          if (No(e, a), Hc(a) && // do not delay if we're inside an act() scope
          !o1()) {
            var i = bS + PC - en();
            if (i > 10) {
              var u = ss(e, j);
              if (u !== j)
                break;
              var s = e.suspendedLanes;
              if (!au(s, a)) {
                ea(), _d(e, s);
                break;
              }
              e.timeoutHandle = ky(Vs.bind(null, e, Ta, Ru), i);
              break;
            }
          }
          Vs(e, Ta, Ru);
          break;
        }
        case Lp: {
          if (No(e, a), Nv(a))
            break;
          if (!o1()) {
            var f = Mv(e, a), p = f, v = en() - p, y = Vb(v) - v;
            if (y > 10) {
              e.timeoutHandle = ky(Vs.bind(null, e, Ta, Ru), y);
              break;
            }
          }
          Vs(e, Ta, Ru);
          break;
        }
        case BC: {
          Vs(e, Ta, Ru);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Cb(e) {
      for (var t = e; ; ) {
        if (t.flags & ns) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!fe(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & ns && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function No(e, t) {
      t = no(t, ym), t = no(t, Np), bd(e, t);
    }
    function GC(e) {
      if (Pw(), (lt & (gr | oi)) !== Wn)
        throw new Error("Should not already be working.");
      xu();
      var t = ss(e, j);
      if (!Fr(t, ke))
        return Ra(e, en()), null;
      var a = wm(e, t);
      if (e.tag !== Co && a === Hs) {
        var i = Td(e);
        i !== j && (t = i, a = MS(e, i));
      }
      if (a === Op) {
        var u = Mp;
        throw js(e, j), No(e, t), Ra(e, en()), u;
      }
      if (a === wS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Vs(e, Ta, Ru), Ra(e, en()), null;
    }
    function Tb(e, t) {
      t !== j && (ro(e, $e(t, ke)), Ra(e, en()), (lt & (gr | oi)) === Wn && (Up(), To()));
    }
    function NS(e, t) {
      var a = lt;
      lt |= VC;
      try {
        return e(t);
      } finally {
        lt = a, lt === Wn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Bi.isBatchingLegacy && (Up(), Y0());
      }
    }
    function Rb(e, t, a, i, u) {
      var s = ha(), f = yr.transition;
      try {
        return yr.transition = null, wn(tr), e(t, a, i, u);
      } finally {
        wn(s), yr.transition = f, lt === Wn && Up();
      }
    }
    function wu(e) {
      Lo !== null && Lo.tag === Co && (lt & (gr | oi)) === Wn && xu();
      var t = lt;
      lt |= VC;
      var a = yr.transition, i = ha();
      try {
        return yr.transition = null, wn(tr), e ? e() : void 0;
      } finally {
        wn(i), yr.transition = a, lt = t, (lt & (gr | oi)) === Wn && To();
      }
    }
    function qC() {
      return (lt & (gr | oi)) !== Wn;
    }
    function Rm(e, t) {
      Vr(xS, Nl, e), Nl = $e(Nl, t);
    }
    function zS(e) {
      Nl = xS.current, jr(xS, e);
    }
    function js(e, t) {
      e.finishedWork = null, e.finishedLanes = j;
      var a = e.timeoutHandle;
      if (a !== Oy && (e.timeoutHandle = Oy, KT(a)), vn !== null)
        for (var i = vn.return; i !== null; ) {
          var u = i.alternate;
          wC(u, i), i = i.return;
        }
      Jr = e;
      var s = Bs(e.current, null);
      return vn = s, Gn = Nl = t, qn = Tu, Mp = null, mm = j, Np = j, ym = j, zp = null, Ta = null, mw(), Ni.discardPendingWarnings(), s;
    }
    function XC(e, t) {
      do {
        var a = vn;
        try {
          if (Lh(), bE(), ln(), RS.current = null, a === null || a.return === null) {
            qn = Op, Mp = t, vn = null;
            return;
          }
          if (Ke && a.mode & De && sm(a, !0), ft)
            if (ql(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              kv(a, i, Gn);
            } else
              gc(a, t, Gn);
          Ww(e, a.return, a, t, Gn), e1(a);
        } catch (u) {
          t = u, vn === a && a !== null ? (a = a.return, vn = a) : a = vn;
          continue;
        }
        return;
      } while (!0);
    }
    function KC() {
      var e = TS.current;
      return TS.current = am, e === null ? am : e;
    }
    function ZC(e) {
      TS.current = e;
    }
    function wb() {
      bS = en();
    }
    function jp(e) {
      mm = $e(e, mm);
    }
    function xb() {
      qn === Tu && (qn = hm);
    }
    function US() {
      (qn === Tu || qn === hm || qn === Hs) && (qn = Lp), Jr !== null && (cs(mm) || cs(Np)) && No(Jr, Gn);
    }
    function bb(e) {
      qn !== Lp && (qn = Hs), zp === null ? zp = [e] : zp.push(e);
    }
    function _b() {
      return qn === Tu;
    }
    function wm(e, t) {
      var a = lt;
      lt |= gr;
      var i = KC();
      if (Jr !== e || Gn !== t) {
        if (Bn) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Vp(e, Gn), u.clear()), Vc(e, t);
        }
        Ru = Od(), js(e, t);
      }
      ja(t);
      do
        try {
          Db();
          break;
        } catch (s) {
          XC(e, s);
        }
      while (!0);
      if (Lh(), lt = a, ZC(i), vn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Ku(), Jr = null, Gn = j, qn;
    }
    function Db() {
      for (; vn !== null; )
        JC(vn);
    }
    function kb(e, t) {
      var a = lt;
      lt |= gr;
      var i = KC();
      if (Jr !== e || Gn !== t) {
        if (Bn) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Vp(e, Gn), u.clear()), Vc(e, t);
        }
        Ru = Od(), Up(), js(e, t);
      }
      ja(t);
      do
        try {
          Ob();
          break;
        } catch (s) {
          XC(e, s);
        }
      while (!0);
      return Lh(), ZC(i), lt = a, vn !== null ? (is(), Tu) : (Ku(), Jr = null, Gn = j, qn);
    }
    function Ob() {
      for (; vn !== null && !dc(); )
        JC(vn);
    }
    function JC(e) {
      var t = e.alternate;
      Ct(e);
      var a;
      (e.mode & De) !== be ? (Xg(e), a = AS(t, e, Nl), sm(e, !0)) : a = AS(t, e, Nl), ln(), e.memoizedProps = e.pendingProps, a === null ? e1(e) : vn = a, RS.current = null;
    }
    function e1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Qr) === Te) {
          Ct(t);
          var u = void 0;
          if ((t.mode & De) === be ? u = RC(a, t, Nl) : (Xg(t), u = RC(a, t, Nl), sm(t, !1)), ln(), u !== null) {
            vn = u;
            return;
          }
        } else {
          var s = xx(a, t);
          if (s !== null) {
            s.flags &= Ev, vn = s;
            return;
          }
          if ((t.mode & De) !== be) {
            sm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Qr, i.subtreeFlags = Te, i.deletions = null;
          else {
            qn = wS, vn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          vn = v;
          return;
        }
        t = i, vn = t;
      } while (t !== null);
      qn === Tu && (qn = BC);
    }
    function Vs(e, t, a) {
      var i = ha(), u = yr.transition;
      try {
        yr.transition = null, wn(tr), Lb(e, t, a, i);
      } finally {
        yr.transition = u, wn(i);
      }
      return null;
    }
    function Lb(e, t, a, i) {
      do
        xu();
      while (Lo !== null);
      if (Pb(), (lt & (gr | oi)) !== Wn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (hc(s), u === null)
        return yd(), null;
      if (s === j && E("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = j, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = it;
      var f = $e(u.lanes, u.childLanes);
      Dd(e, f), e === Jr && (Jr = null, vn = null, Gn = j), ((u.subtreeFlags & fa) !== Te || (u.flags & fa) !== Te) && (Fs || (Fs = !0, kS = a, jS(Za, function() {
        return xu(), null;
      })));
      var p = (u.subtreeFlags & (Gu | zr | er | fa)) !== Te, v = (u.flags & (Gu | zr | er | fa)) !== Te;
      if (p || v) {
        var y = yr.transition;
        yr.transition = null;
        var g = ha();
        wn(tr);
        var b = lt;
        lt |= oi, RS.current = null, Ox(e, u), KE(), Yx(e, u, s), YT(e.containerInfo), e.current = u, Ov(s), Ix(u, e, s), Xu(), Rv(), lt = b, wn(g), yr.transition = y;
      } else
        e.current = u, KE();
      var w = Fs;
      if (Fs ? (Fs = !1, Lo = e, Ap = s) : (Of = 0, Em = null), f = e.pendingLanes, f === j && (kf = null), w || a1(e.current, !1), Ri(u.stateNode, i), Bn && e.memoizedUpdaters.clear(), cb(), Ra(e, en()), t !== null)
        for (var L = e.onRecoverableError, N = 0; N < t.length; N++) {
          var H = t[N], ie = H.stack, we = H.digest;
          L(H.value, {
            componentStack: ie,
            digest: we
          });
        }
      if (gm) {
        gm = !1;
        var ye = _S;
        throw _S = null, ye;
      }
      return Fr(Ap, ke) && e.tag !== Co && xu(), f = e.pendingLanes, Fr(f, ke) ? (Vw(), e === OS ? Hp++ : (Hp = 0, OS = e)) : Hp = 0, To(), yd(), null;
    }
    function xu() {
      if (Lo !== null) {
        var e = vs(Ap), t = ey(bi, e), a = yr.transition, i = ha();
        try {
          return yr.transition = null, wn(t), Nb();
        } finally {
          wn(i), yr.transition = a;
        }
      }
      return !1;
    }
    function Mb(e) {
      DS.push(e), Fs || (Fs = !0, jS(Za, function() {
        return xu(), null;
      }));
    }
    function Nb() {
      if (Lo === null)
        return !1;
      var e = kS;
      kS = null;
      var t = Lo, a = Ap;
      if (Lo = null, Ap = j, (lt & (gr | oi)) !== Wn)
        throw new Error("Cannot flush passive effects while already rendering.");
      LS = !0, Sm = !1, Lv(a);
      var i = lt;
      lt |= oi, Zx(t.current), Gx(t, t.current, a, e);
      {
        var u = DS;
        DS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          zx(t, f);
        }
      }
      as(), a1(t.current, !0), lt = i, To(), Sm ? t === Em ? Of++ : (Of = 0, Em = t) : Of = 0, LS = !1, Sm = !1, pl(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function t1(e) {
      return kf !== null && kf.has(e);
    }
    function zb(e) {
      kf === null ? kf = /* @__PURE__ */ new Set([e]) : kf.add(e);
    }
    function Ub(e) {
      gm || (gm = !0, _S = e);
    }
    var Ab = Ub;
    function n1(e, t, a) {
      var i = Us(a, t), u = JE(e, i, ke), s = wo(e, u, ke), f = ea();
      s !== null && (iu(s, ke, f), Ra(s, f));
    }
    function It(e, t, a) {
      if (_x(a), Bp(!1), e.tag === oe) {
        n1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === oe) {
          n1(i, e, a);
          return;
        } else if (i.tag === me) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !t1(s)) {
            var f = Us(a, e), p = nS(i, f, ke), v = wo(i, p, ke), y = ea();
            v !== null && (iu(v, ke, y), Ra(v, y));
            return;
          }
        }
        i = i.return;
      }
      E(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Hb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = ea();
      _d(e, a), Qb(e), Jr === e && au(Gn, a) && (qn === Lp || qn === hm && Hc(Gn) && en() - bS < PC ? js(e, j) : ym = $e(ym, a)), Ra(e, u);
    }
    function r1(e, t) {
      t === it && (t = yb(e));
      var a = ea(), i = Ea(e, t);
      i !== null && (iu(i, t, a), Ra(i, a));
    }
    function Fb(e) {
      var t = e.memoizedState, a = it;
      t !== null && (a = t.retryLane), r1(e, a);
    }
    function jb(e, t) {
      var a = it, i;
      switch (e.tag) {
        case Re:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Et:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), r1(e, a);
    }
    function Vb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : pb(e / 1960) * 1960;
    }
    function Bb() {
      if (Hp > hb)
        throw Hp = 0, OS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Of > mb && (Of = 0, Em = null, E("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Pb() {
      Ni.flushLegacyContextWarning(), Ni.flushPendingUnsafeLifecycleWarnings();
    }
    function a1(e, t) {
      Ct(e), xm(e, Nr, ub), t && xm(e, Gl, ob), xm(e, Nr, ib), t && xm(e, Gl, lb), ln();
    }
    function xm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Te ? i = i.child : ((i.flags & t) !== Te && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var bm = null;
    function i1(e) {
      {
        if ((lt & gr) !== Wn || !(e.mode & Ge))
          return;
        var t = e.tag;
        if (t !== jt && t !== oe && t !== me && t !== Oe && t !== Be && t !== Xe && t !== Ue)
          return;
        var a = Ae(e) || "ReactComponent";
        if (bm !== null) {
          if (bm.has(a))
            return;
          bm.add(a);
        } else
          bm = /* @__PURE__ */ new Set([a]);
        var i = Jt;
        try {
          Ct(e), E("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Ct(e) : ln();
        }
      }
    }
    var AS;
    {
      var $b = null;
      AS = function(e, t, a) {
        var i = p1($b, t);
        try {
          return gC(e, t, a);
        } catch (s) {
          if (nw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Lh(), bE(), wC(e, t), p1(t, i), t.mode & De && Xg(t), Wl(null, gC, null, e, t, a), Wm()) {
            var u = ld();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var l1 = !1, HS;
    HS = /* @__PURE__ */ new Set();
    function Yb(e) {
      if (Dr && !Hw())
        switch (e.tag) {
          case Oe:
          case Be:
          case Ue: {
            var t = vn && Ae(vn) || "Unknown", a = t;
            if (!HS.has(a)) {
              HS.add(a);
              var i = Ae(e) || "Unknown";
              E("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case me: {
            l1 || (E("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), l1 = !0);
            break;
          }
        }
    }
    function Vp(e, t) {
      if (Bn) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          kd(e, i, t);
        });
      }
    }
    var FS = {};
    function jS(e, t) {
      {
        var a = Bi.current;
        return a !== null ? (a.push(t), FS) : fc(e, t);
      }
    }
    function u1(e) {
      if (e !== FS)
        return Tv(e);
    }
    function o1() {
      return Bi.current !== null;
    }
    function Ib(e) {
      {
        if (e.mode & Ge) {
          if (!jC())
            return;
        } else if (!db() || lt !== Wn || e.tag !== Oe && e.tag !== Be && e.tag !== Ue)
          return;
        if (Bi.current === null) {
          var t = Jt;
          try {
            Ct(e), E(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ae(e));
          } finally {
            t ? Ct(e) : ln();
          }
        }
      }
    }
    function Qb(e) {
      e.tag !== Co && jC() && Bi.current === null && E(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Bp(e) {
      IC = e;
    }
    var si = null, Lf = null, Wb = function(e) {
      si = e;
    };
    function Mf(e) {
      {
        if (si === null)
          return e;
        var t = si(e);
        return t === void 0 ? e : t.current;
      }
    }
    function VS(e) {
      return Mf(e);
    }
    function BS(e) {
      {
        if (si === null)
          return e;
        var t = si(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Mf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: an,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function s1(e, t) {
      {
        if (si === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case me: {
            typeof i == "function" && (u = !0);
            break;
          }
          case Oe: {
            (typeof i == "function" || s === jn) && (u = !0);
            break;
          }
          case Be: {
            (s === an || s === jn) && (u = !0);
            break;
          }
          case Xe:
          case Ue: {
            (s === Qi || s === jn) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = si(a);
          if (f !== void 0 && f === si(i))
            return !0;
        }
        return !1;
      }
    }
    function c1(e) {
      {
        if (si === null || typeof WeakSet != "function")
          return;
        Lf === null && (Lf = /* @__PURE__ */ new WeakSet()), Lf.add(e);
      }
    }
    var Gb = function(e, t) {
      {
        if (si === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        xu(), wu(function() {
          PS(e.current, i, a);
        });
      }
    }, qb = function(e, t) {
      {
        if (e.context !== Ba)
          return;
        xu(), wu(function() {
          Pp(t, e, null, null);
        });
      }
    };
    function PS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case Oe:
          case Ue:
          case me:
            v = p;
            break;
          case Be:
            v = p.render;
            break;
        }
        if (si === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var b = si(v);
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === me ? g = !0 : y = !0));
        }
        if (Lf !== null && (Lf.has(e) || i !== null && Lf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Ea(e, ke);
          w !== null && Xn(w, e, ke, Mt);
        }
        u !== null && !g && PS(u, t, a), s !== null && PS(s, t, a);
      }
    }
    var Xb = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return $S(e.current, i, a), a;
      }
    };
    function $S(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case Oe:
          case Ue:
          case me:
            p = f;
            break;
          case Be:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? Kb(e, a) : i !== null && $S(i, t, a), u !== null && $S(u, t, a);
      }
    }
    function Kb(e, t) {
      {
        var a = Zb(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ue:
              t.add(i.stateNode);
              return;
            case ge:
              t.add(i.stateNode.containerInfo);
              return;
            case oe:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function Zb(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ue)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var YS;
    {
      YS = !1;
      try {
        var f1 = Object.preventExtensions({});
      } catch {
        YS = !0;
      }
    }
    function Jb(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Te, this.subtreeFlags = Te, this.deletions = null, this.lanes = j, this.childLanes = j, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !YS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Pa = function(e, t, a, i) {
      return new Jb(e, t, a, i);
    };
    function IS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function e_(e) {
      return typeof e == "function" && !IS(e) && e.defaultProps === void 0;
    }
    function t_(e) {
      if (typeof e == "function")
        return IS(e) ? me : Oe;
      if (e != null) {
        var t = e.$$typeof;
        if (t === an)
          return Be;
        if (t === Qi)
          return Xe;
      }
      return jt;
    }
    function Bs(e, t) {
      var a = e.alternate;
      a === null ? (a = Pa(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Te, a.subtreeFlags = Te, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Vn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case jt:
        case Oe:
        case Ue:
          a.type = Mf(e.type);
          break;
        case me:
          a.type = VS(e.type);
          break;
        case Be:
          a.type = BS(e.type);
          break;
      }
      return a;
    }
    function n_(e, t) {
      e.flags &= Vn | Bt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = j, e.lanes = t, e.child = null, e.subtreeFlags = Te, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Te, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function r_(e, t, a) {
      var i;
      return e === Rh ? (i = Ge, t === !0 && (i |= tn, i |= pa)) : i = be, Bn && (i |= De), Pa(oe, null, null, i);
    }
    function QS(e, t, a, i, u, s) {
      var f = jt, p = e;
      if (typeof e == "function")
        IS(e) ? (f = me, p = VS(p)) : p = Mf(p);
      else if (typeof e == "string")
        f = ue;
      else
        e:
          switch (e) {
            case La:
              return zo(a.children, u, s, t);
            case Yi:
              f = nt, u |= tn, (u & Ge) !== be && (u |= pa);
              break;
            case Ii:
              return a_(a, u, s, t);
            case aa:
              return i_(a, u, s, t);
            case Hl:
              return l_(a, u, s, t);
            case Ho:
              return d1(a, u, s, t);
            case Qs:
            case Ys:
            case zf:
            case Uf:
            case Is:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ku:
                    f = Xt;
                    break e;
                  case Ao:
                    f = Kn;
                    break e;
                  case an:
                    f = Be, p = BS(p);
                    break e;
                  case Qi:
                    f = Xe;
                    break e;
                  case jn:
                    f = Kt, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var y = i ? Ae(i) : null;
                y && (v += `

Check the render method of \`` + y + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var g = Pa(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function WS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = QS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function zo(e, t, a, i) {
      var u = Pa(vt, e, i, t);
      return u.lanes = a, u;
    }
    function a_(e, t, a, i) {
      typeof e.id != "string" && E('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = Pa(rt, e, i, t | De);
      return u.elementType = Ii, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function i_(e, t, a, i) {
      var u = Pa(Re, e, i, t);
      return u.elementType = aa, u.lanes = a, u;
    }
    function l_(e, t, a, i) {
      var u = Pa(Et, e, i, t);
      return u.elementType = Hl, u.lanes = a, u;
    }
    function d1(e, t, a, i) {
      var u = Pa(Ye, e, i, t);
      u.elementType = Ho, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function GS(e, t, a) {
      var i = Pa(Fe, e, null, t);
      return i.lanes = a, i;
    }
    function u_() {
      var e = Pa(ue, null, null, be);
      return e.elementType = "DELETED", e;
    }
    function o_(e) {
      var t = Pa(Nt, null, null, be);
      return t.stateNode = e, t;
    }
    function qS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = Pa(ge, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function p1(e, t) {
      return e === null && (e = Pa(jt, null, null, be)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function s_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Oy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = it, this.eventTimes = jc(j), this.expirationTimes = jc(Mt), this.pendingLanes = j, this.suspendedLanes = j, this.pingedLanes = j, this.expiredLanes = j, this.mutableReadLanes = j, this.finishedLanes = j, this.entangledLanes = j, this.entanglements = jc(j), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < $t; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Rh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Co:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function v1(e, t, a, i, u, s, f, p, v, y) {
      var g = new s_(e, t, a, p, v), b = r_(t, s);
      g.current = b, b.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        b.memoizedState = w;
      }
      return rg(b), g;
    }
    var XS = "18.2.0";
    function c_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return fi(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Ir,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var KS, ZS;
    KS = !1, ZS = {};
    function h1(e) {
      if (!e)
        return Ba;
      var t = oa(e), a = WR(t);
      if (t.tag === me) {
        var i = t.type;
        if (bl(i))
          return B0(t, i, a);
      }
      return a;
    }
    function f_(e, t) {
      {
        var a = oa(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = da(a);
        if (u === null)
          return null;
        if (u.mode & tn) {
          var s = Ae(a) || "Component";
          if (!ZS[s]) {
            ZS[s] = !0;
            var f = Jt;
            try {
              Ct(u), a.mode & tn ? E("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : E("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Ct(f) : ln();
            }
          }
        }
        return u.stateNode;
      }
    }
    function m1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return v1(e, t, v, y, a, i, u, s, f);
    }
    function y1(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, b = v1(a, i, g, e, u, s, f, p, v);
      b.context = h1(null);
      var w = b.current, L = ea(), N = Mo(w), H = Eu(L, N);
      return H.callback = t ?? null, wo(w, H, N), gb(b, N, L), b;
    }
    function Pp(e, t, a, i) {
      wv(t, e);
      var u = t.current, s = ea(), f = Mo(u);
      Xl(f);
      var p = h1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Dr && Jt !== null && !KS && (KS = !0, E(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ae(Jt) || "Unknown"));
      var v = Eu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && E("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = wo(u, v, f);
      return y !== null && (Xn(y, u, f, s), Ah(y, u, f)), f;
    }
    function _m(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ue:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function d_(e) {
      switch (e.tag) {
        case oe: {
          var t = e.stateNode;
          if (xn(t)) {
            var a = Xm(t);
            Tb(t, a);
          }
          break;
        }
        case Re: {
          wu(function() {
            var u = Ea(e, ke);
            if (u !== null) {
              var s = ea();
              Xn(u, e, ke, s);
            }
          });
          var i = ke;
          JS(e, i);
          break;
        }
      }
    }
    function g1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Av(a.retryLane, t));
    }
    function JS(e, t) {
      g1(e, t);
      var a = e.alternate;
      a && g1(a, t);
    }
    function p_(e) {
      if (e.tag === Re) {
        var t = Zu, a = Ea(e, t);
        if (a !== null) {
          var i = ea();
          Xn(a, e, t, i);
        }
        JS(e, t);
      }
    }
    function v_(e) {
      if (e.tag === Re) {
        var t = Mo(e), a = Ea(e, t);
        if (a !== null) {
          var i = ea();
          Xn(a, e, t, i);
        }
        JS(e, t);
      }
    }
    function S1(e) {
      var t = Cv(e);
      return t === null ? null : t.stateNode;
    }
    var E1 = function(e) {
      return null;
    };
    function h_(e) {
      return E1(e);
    }
    var C1 = function(e) {
      return !1;
    };
    function m_(e) {
      return C1(e);
    }
    var T1 = null, R1 = null, w1 = null, x1 = null, b1 = null, _1 = null, D1 = null, k1 = null, O1 = null;
    {
      var L1 = function(e, t, a) {
        var i = t[a], u = tt(e) ? e.slice() : Qe({}, e);
        return a + 1 === t.length ? (tt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = L1(e[i], t, a + 1), u);
      }, M1 = function(e, t) {
        return L1(e, t, 0);
      }, N1 = function(e, t, a, i) {
        var u = t[i], s = tt(e) ? e.slice() : Qe({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], tt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = N1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, z1 = function(e, t, a) {
        if (t.length !== a.length) {
          qe("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              qe("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return N1(e, t, a, 0);
      }, U1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = tt(e) ? e.slice() : Qe({}, e);
        return s[u] = U1(e[u], t, a + 1, i), s;
      }, A1 = function(e, t, a) {
        return U1(e, t, 0, a);
      }, e0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      T1 = function(e, t, a, i) {
        var u = e0(e, t);
        if (u !== null) {
          var s = A1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Qe({}, e.memoizedProps);
          var f = Ea(e, ke);
          f !== null && Xn(f, e, ke, Mt);
        }
      }, R1 = function(e, t, a) {
        var i = e0(e, t);
        if (i !== null) {
          var u = M1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Qe({}, e.memoizedProps);
          var s = Ea(e, ke);
          s !== null && Xn(s, e, ke, Mt);
        }
      }, w1 = function(e, t, a, i) {
        var u = e0(e, t);
        if (u !== null) {
          var s = z1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Qe({}, e.memoizedProps);
          var f = Ea(e, ke);
          f !== null && Xn(f, e, ke, Mt);
        }
      }, x1 = function(e, t, a) {
        e.pendingProps = A1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ea(e, ke);
        i !== null && Xn(i, e, ke, Mt);
      }, b1 = function(e, t) {
        e.pendingProps = M1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ea(e, ke);
        a !== null && Xn(a, e, ke, Mt);
      }, _1 = function(e, t, a) {
        e.pendingProps = z1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ea(e, ke);
        i !== null && Xn(i, e, ke, Mt);
      }, D1 = function(e) {
        var t = Ea(e, ke);
        t !== null && Xn(t, e, ke, Mt);
      }, k1 = function(e) {
        E1 = e;
      }, O1 = function(e) {
        C1 = e;
      };
    }
    function y_(e) {
      var t = da(e);
      return t === null ? null : t.stateNode;
    }
    function g_(e) {
      return null;
    }
    function S_() {
      return Jt;
    }
    function E_(e) {
      var t = e.findFiberByHostInstance, a = A.ReactCurrentDispatcher;
      return hd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: T1,
        overrideHookStateDeletePath: R1,
        overrideHookStateRenamePath: w1,
        overrideProps: x1,
        overridePropsDeletePath: b1,
        overridePropsRenamePath: _1,
        setErrorHandler: k1,
        setSuspenseHandler: O1,
        scheduleUpdate: D1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: y_,
        findFiberByHostInstance: t || g_,
        // React Refresh
        findHostInstancesForRefresh: Xb,
        scheduleRefresh: Gb,
        scheduleRoot: qb,
        setRefreshHandler: Wb,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: S_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: XS
      });
    }
    var H1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function t0(e) {
      this._internalRoot = e;
    }
    Dm.prototype.render = t0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? E("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : km(arguments[1]) ? E("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && E("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== mn) {
          var i = S1(t.current);
          i && i.parentNode !== a && E("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Pp(e, t, null, null);
    }, Dm.prototype.unmount = t0.prototype.unmount = function() {
      typeof arguments[0] == "function" && E("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        qC() && E("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), wu(function() {
          Pp(null, e, null, null);
        }), A0(t);
      }
    };
    function C_(e, t) {
      if (!km(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      F1(e);
      var a = !1, i = !1, u = "", s = H1;
      t != null && (t.hydrate ? qe("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === $i && E(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = m1(e, Rh, null, a, i, u, s);
      mh(f.current, e);
      var p = e.nodeType === mn ? e.parentNode : e;
      return Xd(p), new t0(f);
    }
    function Dm(e) {
      this._internalRoot = e;
    }
    function T_(e) {
      e && Yv(e);
    }
    Dm.prototype.unstable_scheduleHydration = T_;
    function R_(e, t, a) {
      if (!km(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      F1(e), t === void 0 && E("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = H1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = y1(t, null, e, Rh, i, s, f, p, v);
      if (mh(y.current, e), Xd(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          Lw(y, b);
        }
      return new Dm(y);
    }
    function km(e) {
      return !!(e && (e.nodeType === Or || e.nodeType === Aa || e.nodeType === Bl || !ae));
    }
    function $p(e) {
      return !!(e && (e.nodeType === Or || e.nodeType === Aa || e.nodeType === Bl || e.nodeType === mn && e.nodeValue === " react-mount-point-unstable "));
    }
    function F1(e) {
      e.nodeType === Or && e.tagName && e.tagName.toUpperCase() === "BODY" && E("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), up(e) && (e._reactRootContainer ? E("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : E("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var w_ = A.ReactCurrentOwner, j1;
    j1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== mn) {
        var t = S1(e._reactRootContainer.current);
        t && t.parentNode !== e && E("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = n0(e), u = !!(i && So(i));
      u && !a && E("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Or && e.tagName && e.tagName.toUpperCase() === "BODY" && E("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function n0(e) {
      return e ? e.nodeType === Aa ? e.documentElement : e.firstChild : null;
    }
    function V1() {
    }
    function x_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = _m(f);
            s.call(w);
          };
        }
        var f = y1(
          t,
          i,
          e,
          Co,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          V1
        );
        e._reactRootContainer = f, mh(f.current, e);
        var p = e.nodeType === mn ? e.parentNode : e;
        return Xd(p), wu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = _m(g);
            y.call(w);
          };
        }
        var g = m1(
          e,
          Co,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          V1
        );
        e._reactRootContainer = g, mh(g.current, e);
        var b = e.nodeType === mn ? e.parentNode : e;
        return Xd(b), wu(function() {
          Pp(t, g, a, i);
        }), g;
      }
    }
    function b_(e, t) {
      e !== null && typeof e != "function" && E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Om(e, t, a, i, u) {
      j1(a), b_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = x_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = _m(f);
            p.call(v);
          };
        }
        Pp(t, f, e, u);
      }
      return _m(f);
    }
    function __(e) {
      {
        var t = w_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || E("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", st(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Or ? e : f_(e, "findDOMNode");
    }
    function D_(e, t, a) {
      if (E("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !$p(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = up(t) && t._reactRootContainer === void 0;
        i && E("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Om(null, e, t, !0, a);
    }
    function k_(e, t, a) {
      if (E("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !$p(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = up(t) && t._reactRootContainer === void 0;
        i && E("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Om(null, e, t, !1, a);
    }
    function O_(e, t, a, i) {
      if (E("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !$p(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ts(e))
        throw new Error("parentComponent must be a valid React Component");
      return Om(e, t, a, !1, i);
    }
    function L_(e) {
      if (!$p(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = up(e) && e._reactRootContainer === void 0;
        t && E("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = n0(e), i = a && !So(a);
          i && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return wu(function() {
          Om(null, null, e, !1, function() {
            e._reactRootContainer = null, A0(e);
          });
        }), !0;
      } else {
        {
          var u = n0(e), s = !!(u && So(u)), f = e.nodeType === Or && $p(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    se(d_), Fv(p_), ms(v_), Md(ha), Vv(ps), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && E("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), gv(zT), lc(NS, Rb, wu);
    function M_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!km(t))
        throw new Error("Target container is not a DOM element.");
      return c_(e, t, null, a);
    }
    function N_(e, t, a, i) {
      return O_(e, t, a, i);
    }
    var r0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [So, sf, yh, ic, Zo, NS]
    };
    function z_(e, t) {
      return r0.usingClientEntryPoint || E('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), C_(e, t);
    }
    function U_(e, t, a) {
      return r0.usingClientEntryPoint || E('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), R_(e, t, a);
    }
    function A_(e) {
      return qC() && E("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), wu(e);
    }
    var H_ = E_({
      findFiberByHostInstance: bs,
      bundleType: 1,
      version: XS,
      rendererPackageName: "react-dom"
    });
    if (!H_ && cn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var B1 = window.location.protocol;
      /^(https?|file):$/.test(B1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (B1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = r0, xa.createPortal = M_, xa.createRoot = z_, xa.findDOMNode = __, xa.flushSync = A_, xa.hydrate = D_, xa.hydrateRoot = U_, xa.render = k_, xa.unmountComponentAtNode = L_, xa.unstable_batchedUpdates = NS, xa.unstable_renderSubtreeIntoContainer = N_, xa.version = XS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), xa;
}
function Z1() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z1);
    } catch (ee) {
      console.error(ee);
    }
  }
}
process.env.NODE_ENV === "production" ? (Z1(), u0.exports = I_()) : u0.exports = Q_();
var J1 = u0.exports;
const W_ = /* @__PURE__ */ q1(J1), J_ = /* @__PURE__ */ X1({
  __proto__: null,
  default: W_
}, [J1]);
export {
  P_ as R,
  Z_ as a,
  J1 as b,
  W_ as c,
  J_ as d,
  Mm as r
};
//# sourceMappingURL=index-d373fa27.js.map

import { _ as ea, m as pl, b as ta } from "./DocsRenderer-NNNQARDV-492386ce.js";
var cl = ta({ "node_modules/prettier/parser-html.js"(Jr, Xr) {
  (function(Ae) {
    if (typeof Jr == "object" && typeof Xr == "object")
      Xr.exports = Ae();
    else if (typeof define == "function" && define.amd)
      define(Ae);
    else {
      var Yt = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : this || {};
      Yt.prettierPlugins = Yt.prettierPlugins || {}, Yt.prettierPlugins.html = Ae();
    }
  })(function() {
    var Ae = (ot, Ne) => () => (Ne || ot((Ne = { exports: {} }).exports, Ne), Ne.exports), Yt = Ae((ot, Ne) => {
      var Se = function(Oe) {
        return Oe && Oe.Math == Math && Oe;
      };
      Ne.exports = Se(typeof globalThis == "object" && globalThis) || Se(typeof window == "object" && window) || Se(typeof self == "object" && self) || Se(typeof global == "object" && global) || function() {
        return this;
      }() || Function("return this")();
    }), hr = Ae((ot, Ne) => {
      Ne.exports = function(Se) {
        try {
          return !!Se();
        } catch {
          return !0;
        }
      };
    }), br = Ae((ot, Ne) => {
      var Se = hr();
      Ne.exports = !Se(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }), Hr = Ae((ot, Ne) => {
      var Se = hr();
      Ne.exports = !Se(function() {
        var Oe = (function() {
        }).bind();
        return typeof Oe != "function" || Oe.hasOwnProperty("prototype");
      });
    }), gr = Ae((ot, Ne) => {
      var Se = Hr(), Oe = Function.prototype.call;
      Ne.exports = Se ? Oe.bind(Oe) : function() {
        return Oe.apply(Oe, arguments);
      };
    }), Dn = Ae((ot) => {
      var Ne = {}.propertyIsEnumerable, Se = Object.getOwnPropertyDescriptor, Oe = Se && !Ne.call({ 1: 2 }, 1);
      ot.f = Oe ? function(ee) {
        var V = Se(this, ee);
        return !!V && V.enumerable;
      } : Ne;
    }), Lr = Ae((ot, Ne) => {
      Ne.exports = function(Se, Oe) {
        return { enumerable: !(Se & 1), configurable: !(Se & 2), writable: !(Se & 4), value: Oe };
      };
    }), Dr = Ae((ot, Ne) => {
      var Se = Hr(), Oe = Function.prototype, ee = Oe.call, V = Se && Oe.bind.bind(ee, ee);
      Ne.exports = Se ? V : function(W) {
        return function() {
          return ee.apply(W, arguments);
        };
      };
    }), Br = Ae((ot, Ne) => {
      var Se = Dr(), Oe = Se({}.toString), ee = Se("".slice);
      Ne.exports = function(V) {
        return ee(Oe(V), 8, -1);
      };
    }), Zr = Ae((ot, Ne) => {
      var Se = Dr(), Oe = hr(), ee = Br(), V = Object, W = Se("".split);
      Ne.exports = Oe(function() {
        return !V("z").propertyIsEnumerable(0);
      }) ? function(Z) {
        return ee(Z) == "String" ? W(Z, "") : V(Z);
      } : V;
    }), nn = Ae((ot, Ne) => {
      Ne.exports = function(Se) {
        return Se == null;
      };
    }), qn = Ae((ot, Ne) => {
      var Se = nn(), Oe = TypeError;
      Ne.exports = function(ee) {
        if (Se(ee))
          throw Oe("Can't call method on " + ee);
        return ee;
      };
    }), dn = Ae((ot, Ne) => {
      var Se = Zr(), Oe = qn();
      Ne.exports = function(ee) {
        return Se(Oe(ee));
      };
    }), Vn = Ae((ot, Ne) => {
      var Se = typeof document == "object" && document.all, Oe = typeof Se > "u" && Se !== void 0;
      Ne.exports = { all: Se, IS_HTMLDDA: Oe };
    }), dr = Ae((ot, Ne) => {
      var Se = Vn(), Oe = Se.all;
      Ne.exports = Se.IS_HTMLDDA ? function(ee) {
        return typeof ee == "function" || ee === Oe;
      } : function(ee) {
        return typeof ee == "function";
      };
    }), Or = Ae((ot, Ne) => {
      var Se = dr(), Oe = Vn(), ee = Oe.all;
      Ne.exports = Oe.IS_HTMLDDA ? function(V) {
        return typeof V == "object" ? V !== null : Se(V) || V === ee;
      } : function(V) {
        return typeof V == "object" ? V !== null : Se(V);
      };
    }), un = Ae((ot, Ne) => {
      var Se = Yt(), Oe = dr(), ee = function(V) {
        return Oe(V) ? V : void 0;
      };
      Ne.exports = function(V, W) {
        return arguments.length < 2 ? ee(Se[V]) : Se[V] && Se[V][W];
      };
    }), Un = Ae((ot, Ne) => {
      var Se = Dr();
      Ne.exports = Se({}.isPrototypeOf);
    }), ii = Ae((ot, Ne) => {
      var Se = un();
      Ne.exports = Se("navigator", "userAgent") || "";
    }), si = Ae((ot, Ne) => {
      var Se = Yt(), Oe = ii(), ee = Se.process, V = Se.Deno, W = ee && ee.versions || V && V.version, Z = W && W.v8, Y, ne;
      Z && (Y = Z.split("."), ne = Y[0] > 0 && Y[0] < 4 ? 1 : +(Y[0] + Y[1])), !ne && Oe && (Y = Oe.match(/Edge\/(\d+)/), (!Y || Y[1] >= 74) && (Y = Oe.match(/Chrome\/(\d+)/), Y && (ne = +Y[1]))), Ne.exports = ne;
    }), Gn = Ae((ot, Ne) => {
      var Se = si(), Oe = hr();
      Ne.exports = !!Object.getOwnPropertySymbols && !Oe(function() {
        var ee = Symbol();
        return !String(ee) || !(Object(ee) instanceof Symbol) || !Symbol.sham && Se && Se < 41;
      });
    }), Jn = Ae((ot, Ne) => {
      var Se = Gn();
      Ne.exports = Se && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }), Xn = Ae((ot, Ne) => {
      var Se = un(), Oe = dr(), ee = Un(), V = Jn(), W = Object;
      Ne.exports = V ? function(Z) {
        return typeof Z == "symbol";
      } : function(Z) {
        var Y = Se("Symbol");
        return Oe(Y) && ee(Y.prototype, W(Z));
      };
    }), fn = Ae((ot, Ne) => {
      var Se = String;
      Ne.exports = function(Oe) {
        try {
          return Se(Oe);
        } catch {
          return "Object";
        }
      };
    }), sn = Ae((ot, Ne) => {
      var Se = dr(), Oe = fn(), ee = TypeError;
      Ne.exports = function(V) {
        if (Se(V))
          return V;
        throw ee(Oe(V) + " is not a function");
      };
    }), mn = Ae((ot, Ne) => {
      var Se = sn(), Oe = nn();
      Ne.exports = function(ee, V) {
        var W = ee[V];
        return Oe(W) ? void 0 : Se(W);
      };
    }), ai = Ae((ot, Ne) => {
      var Se = gr(), Oe = dr(), ee = Or(), V = TypeError;
      Ne.exports = function(W, Z) {
        var Y, ne;
        if (Z === "string" && Oe(Y = W.toString) && !ee(ne = Se(Y, W)) || Oe(Y = W.valueOf) && !ee(ne = Se(Y, W)) || Z !== "string" && Oe(Y = W.toString) && !ee(ne = Se(Y, W)))
          return ne;
        throw V("Can't convert object to primitive value");
      };
    }), oi = Ae((ot, Ne) => {
      Ne.exports = !1;
    }), hn = Ae((ot, Ne) => {
      var Se = Yt(), Oe = Object.defineProperty;
      Ne.exports = function(ee, V) {
        try {
          Oe(Se, ee, { value: V, configurable: !0, writable: !0 });
        } catch {
          Se[ee] = V;
        }
        return V;
      };
    }), gn = Ae((ot, Ne) => {
      var Se = Yt(), Oe = hn(), ee = "__core-js_shared__", V = Se[ee] || Oe(ee, {});
      Ne.exports = V;
    }), Wn = Ae((ot, Ne) => {
      var Se = oi(), Oe = gn();
      (Ne.exports = function(ee, V) {
        return Oe[ee] || (Oe[ee] = V !== void 0 ? V : {});
      })("versions", []).push({ version: "3.26.1", mode: Se ? "pure" : "global", copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE", source: "https://github.com/zloirock/core-js" });
    }), Sn = Ae((ot, Ne) => {
      var Se = qn(), Oe = Object;
      Ne.exports = function(ee) {
        return Oe(Se(ee));
      };
    }), kr = Ae((ot, Ne) => {
      var Se = Dr(), Oe = Sn(), ee = Se({}.hasOwnProperty);
      Ne.exports = Object.hasOwn || function(V, W) {
        return ee(Oe(V), W);
      };
    }), zn = Ae((ot, Ne) => {
      var Se = Dr(), Oe = 0, ee = Math.random(), V = Se(1 .toString);
      Ne.exports = function(W) {
        return "Symbol(" + (W === void 0 ? "" : W) + ")_" + V(++Oe + ee, 36);
      };
    }), $r = Ae((ot, Ne) => {
      var Se = Yt(), Oe = Wn(), ee = kr(), V = zn(), W = Gn(), Z = Jn(), Y = Oe("wks"), ne = Se.Symbol, Fe = ne && ne.for, je = Z ? ne : ne && ne.withoutSetter || V;
      Ne.exports = function(he) {
        if (!ee(Y, he) || !(W || typeof Y[he] == "string")) {
          var qe = "Symbol." + he;
          W && ee(ne, he) ? Y[he] = ne[he] : Z && Fe ? Y[he] = Fe(qe) : Y[he] = je(qe);
        }
        return Y[he];
      };
    }), li = Ae((ot, Ne) => {
      var Se = gr(), Oe = Or(), ee = Xn(), V = mn(), W = ai(), Z = $r(), Y = TypeError, ne = Z("toPrimitive");
      Ne.exports = function(Fe, je) {
        if (!Oe(Fe) || ee(Fe))
          return Fe;
        var he = V(Fe, ne), qe;
        if (he) {
          if (je === void 0 && (je = "default"), qe = Se(he, Fe, je), !Oe(qe) || ee(qe))
            return qe;
          throw Y("Can't convert object to primitive value");
        }
        return je === void 0 && (je = "number"), W(Fe, je);
      };
    }), yn = Ae((ot, Ne) => {
      var Se = li(), Oe = Xn();
      Ne.exports = function(ee) {
        var V = Se(ee, "string");
        return Oe(V) ? V : V + "";
      };
    }), pi = Ae((ot, Ne) => {
      var Se = Yt(), Oe = Or(), ee = Se.document, V = Oe(ee) && Oe(ee.createElement);
      Ne.exports = function(W) {
        return V ? ee.createElement(W) : {};
      };
    }), Hn = Ae((ot, Ne) => {
      var Se = br(), Oe = hr(), ee = pi();
      Ne.exports = !Se && !Oe(function() {
        return Object.defineProperty(ee("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }), Yn = Ae((ot) => {
      var Ne = br(), Se = gr(), Oe = Dn(), ee = Lr(), V = dn(), W = yn(), Z = kr(), Y = Hn(), ne = Object.getOwnPropertyDescriptor;
      ot.f = Ne ? ne : function(Fe, je) {
        if (Fe = V(Fe), je = W(je), Y)
          try {
            return ne(Fe, je);
          } catch {
          }
        if (Z(Fe, je))
          return ee(!Se(Oe.f, Fe, je), Fe[je]);
      };
    }), ci = Ae((ot, Ne) => {
      var Se = br(), Oe = hr();
      Ne.exports = Se && Oe(function() {
        return Object.defineProperty(function() {
        }, "prototype", { value: 42, writable: !1 }).prototype != 42;
      });
    }), Wr = Ae((ot, Ne) => {
      var Se = Or(), Oe = String, ee = TypeError;
      Ne.exports = function(V) {
        if (Se(V))
          return V;
        throw ee(Oe(V) + " is not an object");
      };
    }), en = Ae((ot) => {
      var Ne = br(), Se = Hn(), Oe = ci(), ee = Wr(), V = yn(), W = TypeError, Z = Object.defineProperty, Y = Object.getOwnPropertyDescriptor, ne = "enumerable", Fe = "configurable", je = "writable";
      ot.f = Ne ? Oe ? function(he, qe, et) {
        if (ee(he), qe = V(qe), ee(et), typeof he == "function" && qe === "prototype" && "value" in et && je in et && !et[je]) {
          var Ze = Y(he, qe);
          Ze && Ze[je] && (he[qe] = et.value, et = { configurable: Fe in et ? et[Fe] : Ze[Fe], enumerable: ne in et ? et[ne] : Ze[ne], writable: !1 });
        }
        return Z(he, qe, et);
      } : Z : function(he, qe, et) {
        if (ee(he), qe = V(qe), ee(et), Se)
          try {
            return Z(he, qe, et);
          } catch {
          }
        if ("get" in et || "set" in et)
          throw W("Accessors not supported");
        return "value" in et && (he[qe] = et.value), he;
      };
    }), Kn = Ae((ot, Ne) => {
      var Se = br(), Oe = en(), ee = Lr();
      Ne.exports = Se ? function(V, W, Z) {
        return Oe.f(V, W, ee(1, Z));
      } : function(V, W, Z) {
        return V[W] = Z, V;
      };
    }), Di = Ae((ot, Ne) => {
      var Se = br(), Oe = kr(), ee = Function.prototype, V = Se && Object.getOwnPropertyDescriptor, W = Oe(ee, "name"), Z = W && (function() {
      }).name === "something", Y = W && (!Se || Se && V(ee, "name").configurable);
      Ne.exports = { EXISTS: W, PROPER: Z, CONFIGURABLE: Y };
    }), Qn = Ae((ot, Ne) => {
      var Se = Dr(), Oe = dr(), ee = gn(), V = Se(Function.toString);
      Oe(ee.inspectSource) || (ee.inspectSource = function(W) {
        return V(W);
      }), Ne.exports = ee.inspectSource;
    }), di = Ae((ot, Ne) => {
      var Se = Yt(), Oe = dr(), ee = Se.WeakMap;
      Ne.exports = Oe(ee) && /native code/.test(String(ee));
    }), fi = Ae((ot, Ne) => {
      var Se = Wn(), Oe = zn(), ee = Se("keys");
      Ne.exports = function(V) {
        return ee[V] || (ee[V] = Oe(V));
      };
    }), Zn = Ae((ot, Ne) => {
      Ne.exports = {};
    }), mi = Ae((ot, Ne) => {
      var Se = di(), Oe = Yt(), ee = Or(), V = Kn(), W = kr(), Z = gn(), Y = fi(), ne = Zn(), Fe = "Object already initialized", je = Oe.TypeError, he = Oe.WeakMap, qe, et, Ze, nt = function(At) {
        return Ze(At) ? et(At) : qe(At, {});
      }, rt = function(At) {
        return function(Lt) {
          var qt;
          if (!ee(Lt) || (qt = et(Lt)).type !== At)
            throw je("Incompatible receiver, " + At + " required");
          return qt;
        };
      };
      Se || Z.state ? ($ = Z.state || (Z.state = new he()), $.get = $.get, $.has = $.has, $.set = $.set, qe = function(At, Lt) {
        if ($.has(At))
          throw je(Fe);
        return Lt.facade = At, $.set(At, Lt), Lt;
      }, et = function(At) {
        return $.get(At) || {};
      }, Ze = function(At) {
        return $.has(At);
      }) : (Ft = Y("state"), ne[Ft] = !0, qe = function(At, Lt) {
        if (W(At, Ft))
          throw je(Fe);
        return Lt.facade = At, V(At, Ft, Lt), Lt;
      }, et = function(At) {
        return W(At, Ft) ? At[Ft] : {};
      }, Ze = function(At) {
        return W(At, Ft);
      });
      var $, Ft;
      Ne.exports = { set: qe, get: et, has: Ze, enforce: nt, getterFor: rt };
    }), gu = Ae((ot, Ne) => {
      var Se = hr(), Oe = dr(), ee = kr(), V = br(), W = Di().CONFIGURABLE, Z = Qn(), Y = mi(), ne = Y.enforce, Fe = Y.get, je = Object.defineProperty, he = V && !Se(function() {
        return je(function() {
        }, "length", { value: 8 }).length !== 8;
      }), qe = String(String).split("String"), et = Ne.exports = function(Ze, nt, rt) {
        String(nt).slice(0, 7) === "Symbol(" && (nt = "[" + String(nt).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), rt && rt.getter && (nt = "get " + nt), rt && rt.setter && (nt = "set " + nt), (!ee(Ze, "name") || W && Ze.name !== nt) && (V ? je(Ze, "name", { value: nt, configurable: !0 }) : Ze.name = nt), he && rt && ee(rt, "arity") && Ze.length !== rt.arity && je(Ze, "length", { value: rt.arity });
        try {
          rt && ee(rt, "constructor") && rt.constructor ? V && je(Ze, "prototype", { writable: !1 }) : Ze.prototype && (Ze.prototype = void 0);
        } catch {
        }
        var $ = ne(Ze);
        return ee($, "source") || ($.source = qe.join(typeof nt == "string" ? nt : "")), Ze;
      };
      Function.prototype.toString = et(function() {
        return Oe(this) && Fe(this).source || Z(this);
      }, "toString");
    }), hi = Ae((ot, Ne) => {
      var Se = dr(), Oe = en(), ee = gu(), V = hn();
      Ne.exports = function(W, Z, Y, ne) {
        ne || (ne = {});
        var Fe = ne.enumerable, je = ne.name !== void 0 ? ne.name : Z;
        if (Se(Y) && ee(Y, je, ne), ne.global)
          Fe ? W[Z] = Y : V(Z, Y);
        else {
          try {
            ne.unsafe ? W[Z] && (Fe = !0) : delete W[Z];
          } catch {
          }
          Fe ? W[Z] = Y : Oe.f(W, Z, { value: Y, enumerable: !1, configurable: !ne.nonConfigurable, writable: !ne.nonWritable });
        }
        return W;
      };
    }), gi = Ae((ot, Ne) => {
      var Se = Math.ceil, Oe = Math.floor;
      Ne.exports = Math.trunc || function(ee) {
        var V = +ee;
        return (V > 0 ? Oe : Se)(V);
      };
    }), xn = Ae((ot, Ne) => {
      var Se = gi();
      Ne.exports = function(Oe) {
        var ee = +Oe;
        return ee !== ee || ee === 0 ? 0 : Se(ee);
      };
    }), yi = Ae((ot, Ne) => {
      var Se = xn(), Oe = Math.max, ee = Math.min;
      Ne.exports = function(V, W) {
        var Z = Se(V);
        return Z < 0 ? Oe(Z + W, 0) : ee(Z, W);
      };
    }), Ei = Ae((ot, Ne) => {
      var Se = xn(), Oe = Math.min;
      Ne.exports = function(ee) {
        return ee > 0 ? Oe(Se(ee), 9007199254740991) : 0;
      };
    }), tn = Ae((ot, Ne) => {
      var Se = Ei();
      Ne.exports = function(Oe) {
        return Se(Oe.length);
      };
    }), Ci = Ae((ot, Ne) => {
      var Se = dn(), Oe = yi(), ee = tn(), V = function(W) {
        return function(Z, Y, ne) {
          var Fe = Se(Z), je = ee(Fe), he = Oe(ne, je), qe;
          if (W && Y != Y) {
            for (; je > he; )
              if (qe = Fe[he++], qe != qe)
                return !0;
          } else
            for (; je > he; he++)
              if ((W || he in Fe) && Fe[he] === Y)
                return W || he || 0;
          return !W && -1;
        };
      };
      Ne.exports = { includes: V(!0), indexOf: V(!1) };
    }), Fi = Ae((ot, Ne) => {
      var Se = Dr(), Oe = kr(), ee = dn(), V = Ci().indexOf, W = Zn(), Z = Se([].push);
      Ne.exports = function(Y, ne) {
        var Fe = ee(Y), je = 0, he = [], qe;
        for (qe in Fe)
          !Oe(W, qe) && Oe(Fe, qe) && Z(he, qe);
        for (; ne.length > je; )
          Oe(Fe, qe = ne[je++]) && (~V(he, qe) || Z(he, qe));
        return he;
      };
    }), Ai = Ae((ot, Ne) => {
      Ne.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    }), vi = Ae((ot) => {
      var Ne = Fi(), Se = Ai(), Oe = Se.concat("length", "prototype");
      ot.f = Object.getOwnPropertyNames || function(ee) {
        return Ne(ee, Oe);
      };
    }), bi = Ae((ot) => {
      ot.f = Object.getOwnPropertySymbols;
    }), Si = Ae((ot, Ne) => {
      var Se = un(), Oe = Dr(), ee = vi(), V = bi(), W = Wr(), Z = Oe([].concat);
      Ne.exports = Se("Reflect", "ownKeys") || function(Y) {
        var ne = ee.f(W(Y)), Fe = V.f;
        return Fe ? Z(ne, Fe(Y)) : ne;
      };
    }), xi = Ae((ot, Ne) => {
      var Se = kr(), Oe = Si(), ee = Yn(), V = en();
      Ne.exports = function(W, Z, Y) {
        for (var ne = Oe(Z), Fe = V.f, je = ee.f, he = 0; he < ne.length; he++) {
          var qe = ne[he];
          !Se(W, qe) && !(Y && Se(Y, qe)) && Fe(W, qe, je(Z, qe));
        }
      };
    }), Ti = Ae((ot, Ne) => {
      var Se = hr(), Oe = dr(), ee = /#|\.prototype\./, V = function(Fe, je) {
        var he = Z[W(Fe)];
        return he == ne ? !0 : he == Y ? !1 : Oe(je) ? Se(je) : !!je;
      }, W = V.normalize = function(Fe) {
        return String(Fe).replace(ee, ".").toLowerCase();
      }, Z = V.data = {}, Y = V.NATIVE = "N", ne = V.POLYFILL = "P";
      Ne.exports = V;
    }), an = Ae((ot, Ne) => {
      var Se = Yt(), Oe = Yn().f, ee = Kn(), V = hi(), W = hn(), Z = xi(), Y = Ti();
      Ne.exports = function(ne, Fe) {
        var je = ne.target, he = ne.global, qe = ne.stat, et, Ze, nt, rt, $, Ft;
        if (he ? Ze = Se : qe ? Ze = Se[je] || W(je, {}) : Ze = (Se[je] || {}).prototype, Ze)
          for (nt in Fe) {
            if ($ = Fe[nt], ne.dontCallGetSet ? (Ft = Oe(Ze, nt), rt = Ft && Ft.value) : rt = Ze[nt], et = Y(he ? nt : je + (qe ? "." : "#") + nt, ne.forced), !et && rt !== void 0) {
              if (typeof $ == typeof rt)
                continue;
              Z($, rt);
            }
            (ne.sham || rt && rt.sham) && ee($, "sham", !0), V(Ze, nt, $, ne);
          }
      };
    }), yu = Ae(() => {
      var ot = an(), Ne = Yt();
      ot({ global: !0, forced: Ne.globalThis !== Ne }, { globalThis: Ne });
    }), Bi = Ae(() => {
      yu();
    }), Eu = Ae((ot, Ne) => {
      var Se = Br();
      Ne.exports = Array.isArray || function(Oe) {
        return Se(Oe) == "Array";
      };
    }), Cu = Ae((ot, Ne) => {
      var Se = TypeError, Oe = 9007199254740991;
      Ne.exports = function(ee) {
        if (ee > Oe)
          throw Se("Maximum allowed index exceeded");
        return ee;
      };
    }), Fu = Ae((ot, Ne) => {
      var Se = Br(), Oe = Dr();
      Ne.exports = function(ee) {
        if (Se(ee) === "Function")
          return Oe(ee);
      };
    }), Au = Ae((ot, Ne) => {
      var Se = Fu(), Oe = sn(), ee = Hr(), V = Se(Se.bind);
      Ne.exports = function(W, Z) {
        return Oe(W), Z === void 0 ? W : ee ? V(W, Z) : function() {
          return W.apply(Z, arguments);
        };
      };
    }), vu = Ae((ot, Ne) => {
      var Se = Eu(), Oe = tn(), ee = Cu(), V = Au(), W = function(Z, Y, ne, Fe, je, he, qe, et) {
        for (var Ze = je, nt = 0, rt = qe ? V(qe, et) : !1, $, Ft; nt < Fe; )
          nt in ne && ($ = rt ? rt(ne[nt], nt, Y) : ne[nt], he > 0 && Se($) ? (Ft = Oe($), Ze = W(Z, Y, $, Ft, Ze, he - 1) - 1) : (ee(Ze + 1), Z[Ze] = $), Ze++), nt++;
        return Ze;
      };
      Ne.exports = W;
    }), wi = Ae((ot, Ne) => {
      var Se = $r(), Oe = Se("toStringTag"), ee = {};
      ee[Oe] = "z", Ne.exports = String(ee) === "[object z]";
    }), bu = Ae((ot, Ne) => {
      var Se = wi(), Oe = dr(), ee = Br(), V = $r(), W = V("toStringTag"), Z = Object, Y = ee(function() {
        return arguments;
      }()) == "Arguments", ne = function(Fe, je) {
        try {
          return Fe[je];
        } catch {
        }
      };
      Ne.exports = Se ? ee : function(Fe) {
        var je, he, qe;
        return Fe === void 0 ? "Undefined" : Fe === null ? "Null" : typeof (he = ne(je = Z(Fe), W)) == "string" ? he : Y ? ee(je) : (qe = ee(je)) == "Object" && Oe(je.callee) ? "Arguments" : qe;
      };
    }), Su = Ae((ot, Ne) => {
      var Se = Dr(), Oe = hr(), ee = dr(), V = bu(), W = un(), Z = Qn(), Y = function() {
      }, ne = [], Fe = W("Reflect", "construct"), je = /^\s*(?:class|function)\b/, he = Se(je.exec), qe = !je.exec(Y), et = function(nt) {
        if (!ee(nt))
          return !1;
        try {
          return Fe(Y, ne, nt), !0;
        } catch {
          return !1;
        }
      }, Ze = function(nt) {
        if (!ee(nt))
          return !1;
        switch (V(nt)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return !1;
        }
        try {
          return qe || !!he(je, Z(nt));
        } catch {
          return !0;
        }
      };
      Ze.sham = !0, Ne.exports = !Fe || Oe(function() {
        var nt;
        return et(et.call) || !et(Object) || !et(function() {
          nt = !0;
        }) || nt;
      }) ? Ze : et;
    }), Ni = Ae((ot, Ne) => {
      var Se = Eu(), Oe = Su(), ee = Or(), V = $r(), W = V("species"), Z = Array;
      Ne.exports = function(Y) {
        var ne;
        return Se(Y) && (ne = Y.constructor, Oe(ne) && (ne === Z || Se(ne.prototype)) ? ne = void 0 : ee(ne) && (ne = ne[W], ne === null && (ne = void 0))), ne === void 0 ? Z : ne;
      };
    }), xu = Ae((ot, Ne) => {
      var Se = Ni();
      Ne.exports = function(Oe, ee) {
        return new (Se(Oe))(ee === 0 ? 0 : ee);
      };
    }), _i = Ae(() => {
      var ot = an(), Ne = vu(), Se = sn(), Oe = Sn(), ee = tn(), V = xu();
      ot({ target: "Array", proto: !0 }, { flatMap: function(W) {
        var Z = Oe(this), Y = ee(Z), ne;
        return Se(W), ne = V(Z, 0), ne.length = Ne(ne, Z, Z, Y, 0, 1, W, arguments.length > 1 ? arguments[1] : void 0), ne;
      } });
    }), eu = Ae((ot, Ne) => {
      Ne.exports = {};
    }), ki = Ae((ot, Ne) => {
      var Se = $r(), Oe = eu(), ee = Se("iterator"), V = Array.prototype;
      Ne.exports = function(W) {
        return W !== void 0 && (Oe.Array === W || V[ee] === W);
      };
    }), Tu = Ae((ot, Ne) => {
      var Se = bu(), Oe = mn(), ee = nn(), V = eu(), W = $r(), Z = W("iterator");
      Ne.exports = function(Y) {
        if (!ee(Y))
          return Oe(Y, Z) || Oe(Y, "@@iterator") || V[Se(Y)];
      };
    }), Pi = Ae((ot, Ne) => {
      var Se = gr(), Oe = sn(), ee = Wr(), V = fn(), W = Tu(), Z = TypeError;
      Ne.exports = function(Y, ne) {
        var Fe = arguments.length < 2 ? W(Y) : ne;
        if (Oe(Fe))
          return ee(Se(Fe, Y));
        throw Z(V(Y) + " is not iterable");
      };
    }), Ii = Ae((ot, Ne) => {
      var Se = gr(), Oe = Wr(), ee = mn();
      Ne.exports = function(V, W, Z) {
        var Y, ne;
        Oe(V);
        try {
          if (Y = ee(V, "return"), !Y) {
            if (W === "throw")
              throw Z;
            return Z;
          }
          Y = Se(Y, V);
        } catch (Fe) {
          ne = !0, Y = Fe;
        }
        if (W === "throw")
          throw Z;
        if (ne)
          throw Y;
        return Oe(Y), Z;
      };
    }), ji = Ae((ot, Ne) => {
      var Se = Au(), Oe = gr(), ee = Wr(), V = fn(), W = ki(), Z = tn(), Y = Un(), ne = Pi(), Fe = Tu(), je = Ii(), he = TypeError, qe = function(Ze, nt) {
        this.stopped = Ze, this.result = nt;
      }, et = qe.prototype;
      Ne.exports = function(Ze, nt, rt) {
        var $ = rt && rt.that, Ft = !!(rt && rt.AS_ENTRIES), At = !!(rt && rt.IS_RECORD), Lt = !!(rt && rt.IS_ITERATOR), qt = !!(rt && rt.INTERRUPTED), Zt = Se(nt, $), ue, yr, Pr, zr, fr, Rr, mr, rn = function(Fr) {
          return ue && je(ue, "normal", Fr), new qe(!0, Fr);
        }, wr = function(Fr) {
          return Ft ? (ee(Fr), qt ? Zt(Fr[0], Fr[1], rn) : Zt(Fr[0], Fr[1])) : qt ? Zt(Fr, rn) : Zt(Fr);
        };
        if (At)
          ue = Ze.iterator;
        else if (Lt)
          ue = Ze;
        else {
          if (yr = Fe(Ze), !yr)
            throw he(V(Ze) + " is not iterable");
          if (W(yr)) {
            for (Pr = 0, zr = Z(Ze); zr > Pr; Pr++)
              if (fr = wr(Ze[Pr]), fr && Y(et, fr))
                return fr;
            return new qe(!1);
          }
          ue = ne(Ze, yr);
        }
        for (Rr = At ? Ze.next : ue.next; !(mr = Oe(Rr, ue)).done; ) {
          try {
            fr = wr(mr.value);
          } catch (Fr) {
            je(ue, "throw", Fr);
          }
          if (typeof fr == "object" && fr && Y(et, fr))
            return fr;
        }
        return new qe(!1);
      };
    }), Li = Ae((ot, Ne) => {
      var Se = yn(), Oe = en(), ee = Lr();
      Ne.exports = function(V, W, Z) {
        var Y = Se(W);
        Y in V ? Oe.f(V, Y, ee(0, Z)) : V[Y] = Z;
      };
    }), Oi = Ae(() => {
      var ot = an(), Ne = ji(), Se = Li();
      ot({ target: "Object", stat: !0 }, { fromEntries: function(Oe) {
        var ee = {};
        return Ne(Oe, function(V, W) {
          Se(ee, V, W);
        }, { AS_ENTRIES: !0 }), ee;
      } });
    }), $i = Ae((ot, Ne) => {
      var Se = ["cliName", "cliCategory", "cliDescription"];
      function Oe(L, re) {
        if (L == null)
          return {};
        var ge = ee(L, re), Ee, Pe;
        if (Object.getOwnPropertySymbols) {
          var ie = Object.getOwnPropertySymbols(L);
          for (Pe = 0; Pe < ie.length; Pe++)
            Ee = ie[Pe], !(re.indexOf(Ee) >= 0) && Object.prototype.propertyIsEnumerable.call(L, Ee) && (ge[Ee] = L[Ee]);
        }
        return ge;
      }
      function ee(L, re) {
        if (L == null)
          return {};
        var ge = {}, Ee = Object.keys(L), Pe, ie;
        for (ie = 0; ie < Ee.length; ie++)
          Pe = Ee[ie], !(re.indexOf(Pe) >= 0) && (ge[Pe] = L[Pe]);
        return ge;
      }
      Bi(), _i(), Oi();
      var V = Object.create, W = Object.defineProperty, Z = Object.getOwnPropertyDescriptor, Y = Object.getOwnPropertyNames, ne = Object.getPrototypeOf, Fe = Object.prototype.hasOwnProperty, je = (L, re) => function() {
        return L && (re = (0, L[Y(L)[0]])(L = 0)), re;
      }, he = (L, re) => function() {
        return re || (0, L[Y(L)[0]])((re = { exports: {} }).exports, re), re.exports;
      }, qe = (L, re) => {
        for (var ge in re)
          W(L, ge, { get: re[ge], enumerable: !0 });
      }, et = (L, re, ge, Ee) => {
        if (re && typeof re == "object" || typeof re == "function")
          for (let Pe of Y(re))
            !Fe.call(L, Pe) && Pe !== ge && W(L, Pe, { get: () => re[Pe], enumerable: !(Ee = Z(re, Pe)) || Ee.enumerable });
        return L;
      }, Ze = (L, re, ge) => (ge = L != null ? V(ne(L)) : {}, et(re || !L || !L.__esModule ? W(ge, "default", { value: L, enumerable: !0 }) : ge, L)), nt = (L) => et(W({}, "__esModule", { value: !0 }), L), rt, $ = je({ "<define:process>"() {
        rt = { env: {}, argv: [] };
      } }), Ft = he({ "node_modules/angular-html-parser/lib/compiler/src/chars.js"(L) {
        $(), Object.defineProperty(L, "__esModule", { value: !0 }), L.$EOF = 0, L.$BSPACE = 8, L.$TAB = 9, L.$LF = 10, L.$VTAB = 11, L.$FF = 12, L.$CR = 13, L.$SPACE = 32, L.$BANG = 33, L.$DQ = 34, L.$HASH = 35, L.$$ = 36, L.$PERCENT = 37, L.$AMPERSAND = 38, L.$SQ = 39, L.$LPAREN = 40, L.$RPAREN = 41, L.$STAR = 42, L.$PLUS = 43, L.$COMMA = 44, L.$MINUS = 45, L.$PERIOD = 46, L.$SLASH = 47, L.$COLON = 58, L.$SEMICOLON = 59, L.$LT = 60, L.$EQ = 61, L.$GT = 62, L.$QUESTION = 63, L.$0 = 48, L.$7 = 55, L.$9 = 57, L.$A = 65, L.$E = 69, L.$F = 70, L.$X = 88, L.$Z = 90, L.$LBRACKET = 91, L.$BACKSLASH = 92, L.$RBRACKET = 93, L.$CARET = 94, L.$_ = 95, L.$a = 97, L.$b = 98, L.$e = 101, L.$f = 102, L.$n = 110, L.$r = 114, L.$t = 116, L.$u = 117, L.$v = 118, L.$x = 120, L.$z = 122, L.$LBRACE = 123, L.$BAR = 124, L.$RBRACE = 125, L.$NBSP = 160, L.$PIPE = 124, L.$TILDA = 126, L.$AT = 64, L.$BT = 96;
        function re(Ue) {
          return Ue >= L.$TAB && Ue <= L.$SPACE || Ue == L.$NBSP;
        }
        L.isWhitespace = re;
        function ge(Ue) {
          return L.$0 <= Ue && Ue <= L.$9;
        }
        L.isDigit = ge;
        function Ee(Ue) {
          return Ue >= L.$a && Ue <= L.$z || Ue >= L.$A && Ue <= L.$Z;
        }
        L.isAsciiLetter = Ee;
        function Pe(Ue) {
          return Ue >= L.$a && Ue <= L.$f || Ue >= L.$A && Ue <= L.$F || ge(Ue);
        }
        L.isAsciiHexDigit = Pe;
        function ie(Ue) {
          return Ue === L.$LF || Ue === L.$CR;
        }
        L.isNewLine = ie;
        function de(Ue) {
          return L.$0 <= Ue && Ue <= L.$7;
        }
        L.isOctalDigit = de;
      } }), At = he({ "node_modules/angular-html-parser/lib/compiler/src/aot/static_symbol.js"(L) {
        $(), Object.defineProperty(L, "__esModule", { value: !0 });
        var re = class {
          constructor(Ee, Pe, ie) {
            this.filePath = Ee, this.name = Pe, this.members = ie;
          }
          assertNoMembers() {
            if (this.members.length)
              throw new Error(`Illegal state: symbol without members expected, but got ${JSON.stringify(this)}.`);
          }
        };
        L.StaticSymbol = re;
        var ge = class {
          constructor() {
            this.cache = /* @__PURE__ */ new Map();
          }
          get(Ee, Pe, ie) {
            ie = ie || [];
            let de = ie.length ? `.${ie.join(".")}` : "", Ue = `"${Ee}".${Pe}${de}`, Ge = this.cache.get(Ue);
            return Ge || (Ge = new re(Ee, Pe, ie), this.cache.set(Ue, Ge)), Ge;
          }
        };
        L.StaticSymbolCache = ge;
      } }), Lt = he({ "node_modules/angular-html-parser/lib/compiler/src/util.js"(L) {
        $(), Object.defineProperty(L, "__esModule", { value: !0 });
        var re = /-+([a-z0-9])/g;
        function ge(le) {
          return le.replace(re, function() {
            for (var We = arguments.length, Me = new Array(We), at = 0; at < We; at++)
              Me[at] = arguments[at];
            return Me[1].toUpperCase();
          });
        }
        L.dashCaseToCamelCase = ge;
        function Ee(le, We) {
          return ie(le, ":", We);
        }
        L.splitAtColon = Ee;
        function Pe(le, We) {
          return ie(le, ".", We);
        }
        L.splitAtPeriod = Pe;
        function ie(le, We, Me) {
          let at = le.indexOf(We);
          return at == -1 ? Me : [le.slice(0, at).trim(), le.slice(at + 1).trim()];
        }
        function de(le, We, Me) {
          return Array.isArray(le) ? We.visitArray(le, Me) : ct(le) ? We.visitStringMap(le, Me) : le == null || typeof le == "string" || typeof le == "number" || typeof le == "boolean" ? We.visitPrimitive(le, Me) : We.visitOther(le, Me);
        }
        L.visitValue = de;
        function Ue(le) {
          return le != null;
        }
        L.isDefined = Ue;
        function Ge(le) {
          return le === void 0 ? null : le;
        }
        L.noUndefined = Ge;
        var gt = class {
          visitArray(le, We) {
            return le.map((Me) => de(Me, this, We));
          }
          visitStringMap(le, We) {
            let Me = {};
            return Object.keys(le).forEach((at) => {
              Me[at] = de(le[at], this, We);
            }), Me;
          }
          visitPrimitive(le, We) {
            return le;
          }
          visitOther(le, We) {
            return le;
          }
        };
        L.ValueTransformer = gt, L.SyncAsync = { assertSync: (le) => {
          if (st(le))
            throw new Error("Illegal state: value cannot be a promise");
          return le;
        }, then: (le, We) => st(le) ? le.then(We) : We(le), all: (le) => le.some(st) ? Promise.all(le) : le };
        function ce(le) {
          throw new Error(`Internal Error: ${le}`);
        }
        L.error = ce;
        function ve(le, We) {
          let Me = Error(le);
          return Me[Ve] = !0, We && (Me[He] = We), Me;
        }
        L.syntaxError = ve;
        var Ve = "ngSyntaxError", He = "ngParseErrors";
        function Je(le) {
          return le[Ve];
        }
        L.isSyntaxError = Je;
        function Qe(le) {
          return le[He] || [];
        }
        L.getParseErrors = Qe;
        function yt(le) {
          return le.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
        }
        L.escapeRegExp = yt;
        var _t = Object.getPrototypeOf({});
        function ct(le) {
          return typeof le == "object" && le !== null && Object.getPrototypeOf(le) === _t;
        }
        function kt(le) {
          let We = "";
          for (let Me = 0; Me < le.length; Me++) {
            let at = le.charCodeAt(Me);
            if (at >= 55296 && at <= 56319 && le.length > Me + 1) {
              let Jt = le.charCodeAt(Me + 1);
              Jt >= 56320 && Jt <= 57343 && (Me++, at = (at - 55296 << 10) + Jt - 56320 + 65536);
            }
            at <= 127 ? We += String.fromCharCode(at) : at <= 2047 ? We += String.fromCharCode(at >> 6 & 31 | 192, at & 63 | 128) : at <= 65535 ? We += String.fromCharCode(at >> 12 | 224, at >> 6 & 63 | 128, at & 63 | 128) : at <= 2097151 && (We += String.fromCharCode(at >> 18 & 7 | 240, at >> 12 & 63 | 128, at >> 6 & 63 | 128, at & 63 | 128));
          }
          return We;
        }
        L.utf8Encode = kt;
        function $t(le) {
          if (typeof le == "string")
            return le;
          if (le instanceof Array)
            return "[" + le.map($t).join(", ") + "]";
          if (le == null)
            return "" + le;
          if (le.overriddenName)
            return `${le.overriddenName}`;
          if (le.name)
            return `${le.name}`;
          if (!le.toString)
            return "object";
          let We = le.toString();
          if (We == null)
            return "" + We;
          let Me = We.indexOf(`
`);
          return Me === -1 ? We : We.substring(0, Me);
        }
        L.stringify = $t;
        function ir(le) {
          return typeof le == "function" && le.hasOwnProperty("__forward_ref__") ? le() : le;
        }
        L.resolveForwardRef = ir;
        function st(le) {
          return !!le && typeof le.then == "function";
        }
        L.isPromise = st;
        var Ot = class {
          constructor(le) {
            this.full = le;
            let We = le.split(".");
            this.major = We[0], this.minor = We[1], this.patch = We.slice(2).join(".");
          }
        };
        L.Version = Ot;
        var Vt = typeof window < "u" && window, Ut = typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self, rr = typeof globalThis < "u" && globalThis, z = rr || Vt || Ut;
        L.global = z;
      } }), qt = he({ "node_modules/angular-html-parser/lib/compiler/src/compile_metadata.js"(L) {
        $(), Object.defineProperty(L, "__esModule", { value: !0 });
        var re = At(), ge = Lt(), Ee = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
        function Pe(Me) {
          return Me.replace(/\W/g, "_");
        }
        L.sanitizeIdentifier = Pe;
        var ie = 0;
        function de(Me) {
          if (!Me || !Me.reference)
            return null;
          let at = Me.reference;
          if (at instanceof re.StaticSymbol)
            return at.name;
          if (at.__anonymousType)
            return at.__anonymousType;
          let Jt = ge.stringify(at);
          return Jt.indexOf("(") >= 0 ? (Jt = `anonymous_${ie++}`, at.__anonymousType = Jt) : Jt = Pe(Jt), Jt;
        }
        L.identifierName = de;
        function Ue(Me) {
          let at = Me.reference;
          return at instanceof re.StaticSymbol ? at.filePath : `./${ge.stringify(at)}`;
        }
        L.identifierModuleUrl = Ue;
        function Ge(Me, at) {
          return `View_${de({ reference: Me })}_${at}`;
        }
        L.viewClassName = Ge;
        function gt(Me) {
          return `RenderType_${de({ reference: Me })}`;
        }
        L.rendererTypeName = gt;
        function ce(Me) {
          return `HostView_${de({ reference: Me })}`;
        }
        L.hostViewClassName = ce;
        function ve(Me) {
          return `${de({ reference: Me })}NgFactory`;
        }
        L.componentFactoryName = ve;
        var Ve;
        (function(Me) {
          Me[Me.Pipe = 0] = "Pipe", Me[Me.Directive = 1] = "Directive", Me[Me.NgModule = 2] = "NgModule", Me[Me.Injectable = 3] = "Injectable";
        })(Ve = L.CompileSummaryKind || (L.CompileSummaryKind = {}));
        function He(Me) {
          return Me.value != null ? Pe(Me.value) : de(Me.identifier);
        }
        L.tokenName = He;
        function Je(Me) {
          return Me.identifier != null ? Me.identifier.reference : Me.value;
        }
        L.tokenReference = Je;
        var Qe = class {
          constructor() {
            let { moduleUrl: Me, styles: at, styleUrls: Jt } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.moduleUrl = Me || null, this.styles = st(at), this.styleUrls = st(Jt);
          }
        };
        L.CompileStylesheetMetadata = Qe;
        var yt = class {
          constructor(Me) {
            let { encapsulation: at, template: Jt, templateUrl: er, htmlAst: Ar, styles: Er, styleUrls: _r, externalStylesheets: xr, animations: Ir, ngContentSelectors: Mr, interpolation: or, isInline: lt, preserveWhitespaces: mt } = Me;
            if (this.encapsulation = at, this.template = Jt, this.templateUrl = er, this.htmlAst = Ar, this.styles = st(Er), this.styleUrls = st(_r), this.externalStylesheets = st(xr), this.animations = Ir ? Vt(Ir) : [], this.ngContentSelectors = Mr || [], or && or.length != 2)
              throw new Error("'interpolation' should have a start and an end symbol.");
            this.interpolation = or, this.isInline = lt, this.preserveWhitespaces = mt;
          }
          toSummary() {
            return { ngContentSelectors: this.ngContentSelectors, encapsulation: this.encapsulation, styles: this.styles, animations: this.animations };
          }
        };
        L.CompileTemplateMetadata = yt;
        var _t = class {
          static create(Me) {
            let { isHost: at, type: Jt, isComponent: er, selector: Ar, exportAs: Er, changeDetection: _r, inputs: xr, outputs: Ir, host: Mr, providers: or, viewProviders: lt, queries: mt, guards: St, viewQueries: xt, entryComponents: Kt, template: sr, componentViewType: lr, rendererType: Qt, componentFactory: Kr } = Me, Pn = {}, In = {}, Hu = {};
            Mr != null && Object.keys(Mr).forEach((vr) => {
              let Qr = Mr[vr], cn = vr.match(Ee);
              cn === null ? Hu[vr] = Qr : cn[1] != null ? In[cn[1]] = Qr : cn[2] != null && (Pn[cn[2]] = Qr);
            });
            let Yu = {};
            xr == null || xr.forEach((vr) => {
              let Qr = ge.splitAtColon(vr, [vr, vr]);
              Yu[Qr[0]] = Qr[1];
            });
            let Ku = {};
            return Ir == null || Ir.forEach((vr) => {
              let Qr = ge.splitAtColon(vr, [vr, vr]);
              Ku[Qr[0]] = Qr[1];
            }), new _t({ isHost: at, type: Jt, isComponent: !!er, selector: Ar, exportAs: Er, changeDetection: _r, inputs: Yu, outputs: Ku, hostListeners: Pn, hostProperties: In, hostAttributes: Hu, providers: or, viewProviders: lt, queries: mt, guards: St, viewQueries: xt, entryComponents: Kt, template: sr, componentViewType: lr, rendererType: Qt, componentFactory: Kr });
          }
          constructor(Me) {
            let { isHost: at, type: Jt, isComponent: er, selector: Ar, exportAs: Er, changeDetection: _r, inputs: xr, outputs: Ir, hostListeners: Mr, hostProperties: or, hostAttributes: lt, providers: mt, viewProviders: St, queries: xt, guards: Kt, viewQueries: sr, entryComponents: lr, template: Qt, componentViewType: Kr, rendererType: Pn, componentFactory: In } = Me;
            this.isHost = !!at, this.type = Jt, this.isComponent = er, this.selector = Ar, this.exportAs = Er, this.changeDetection = _r, this.inputs = xr, this.outputs = Ir, this.hostListeners = Mr, this.hostProperties = or, this.hostAttributes = lt, this.providers = st(mt), this.viewProviders = st(St), this.queries = st(xt), this.guards = Kt, this.viewQueries = st(sr), this.entryComponents = st(lr), this.template = Qt, this.componentViewType = Kr, this.rendererType = Pn, this.componentFactory = In;
          }
          toSummary() {
            return { summaryKind: Ve.Directive, type: this.type, isComponent: this.isComponent, selector: this.selector, exportAs: this.exportAs, inputs: this.inputs, outputs: this.outputs, hostListeners: this.hostListeners, hostProperties: this.hostProperties, hostAttributes: this.hostAttributes, providers: this.providers, viewProviders: this.viewProviders, queries: this.queries, guards: this.guards, viewQueries: this.viewQueries, entryComponents: this.entryComponents, changeDetection: this.changeDetection, template: this.template && this.template.toSummary(), componentViewType: this.componentViewType, rendererType: this.rendererType, componentFactory: this.componentFactory };
          }
        };
        L.CompileDirectiveMetadata = _t;
        var ct = class {
          constructor(Me) {
            let { type: at, name: Jt, pure: er } = Me;
            this.type = at, this.name = Jt, this.pure = !!er;
          }
          toSummary() {
            return { summaryKind: Ve.Pipe, type: this.type, name: this.name, pure: this.pure };
          }
        };
        L.CompilePipeMetadata = ct;
        var kt = class {
        };
        L.CompileShallowModuleMetadata = kt;
        var $t = class {
          constructor(Me) {
            let { type: at, providers: Jt, declaredDirectives: er, exportedDirectives: Ar, declaredPipes: Er, exportedPipes: _r, entryComponents: xr, bootstrapComponents: Ir, importedModules: Mr, exportedModules: or, schemas: lt, transitiveModule: mt, id: St } = Me;
            this.type = at || null, this.declaredDirectives = st(er), this.exportedDirectives = st(Ar), this.declaredPipes = st(Er), this.exportedPipes = st(_r), this.providers = st(Jt), this.entryComponents = st(xr), this.bootstrapComponents = st(Ir), this.importedModules = st(Mr), this.exportedModules = st(or), this.schemas = st(lt), this.id = St || null, this.transitiveModule = mt || null;
          }
          toSummary() {
            let Me = this.transitiveModule;
            return { summaryKind: Ve.NgModule, type: this.type, entryComponents: Me.entryComponents, providers: Me.providers, modules: Me.modules, exportedDirectives: Me.exportedDirectives, exportedPipes: Me.exportedPipes };
          }
        };
        L.CompileNgModuleMetadata = $t;
        var ir = class {
          constructor() {
            this.directivesSet = /* @__PURE__ */ new Set(), this.directives = [], this.exportedDirectivesSet = /* @__PURE__ */ new Set(), this.exportedDirectives = [], this.pipesSet = /* @__PURE__ */ new Set(), this.pipes = [], this.exportedPipesSet = /* @__PURE__ */ new Set(), this.exportedPipes = [], this.modulesSet = /* @__PURE__ */ new Set(), this.modules = [], this.entryComponentsSet = /* @__PURE__ */ new Set(), this.entryComponents = [], this.providers = [];
          }
          addProvider(Me, at) {
            this.providers.push({ provider: Me, module: at });
          }
          addDirective(Me) {
            this.directivesSet.has(Me.reference) || (this.directivesSet.add(Me.reference), this.directives.push(Me));
          }
          addExportedDirective(Me) {
            this.exportedDirectivesSet.has(Me.reference) || (this.exportedDirectivesSet.add(Me.reference), this.exportedDirectives.push(Me));
          }
          addPipe(Me) {
            this.pipesSet.has(Me.reference) || (this.pipesSet.add(Me.reference), this.pipes.push(Me));
          }
          addExportedPipe(Me) {
            this.exportedPipesSet.has(Me.reference) || (this.exportedPipesSet.add(Me.reference), this.exportedPipes.push(Me));
          }
          addModule(Me) {
            this.modulesSet.has(Me.reference) || (this.modulesSet.add(Me.reference), this.modules.push(Me));
          }
          addEntryComponent(Me) {
            this.entryComponentsSet.has(Me.componentType) || (this.entryComponentsSet.add(Me.componentType), this.entryComponents.push(Me));
          }
        };
        L.TransitiveCompileNgModuleMetadata = ir;
        function st(Me) {
          return Me || [];
        }
        var Ot = class {
          constructor(Me, at) {
            let { useClass: Jt, useValue: er, useExisting: Ar, useFactory: Er, deps: _r, multi: xr } = at;
            this.token = Me, this.useClass = Jt || null, this.useValue = er, this.useExisting = Ar, this.useFactory = Er || null, this.dependencies = _r || null, this.multi = !!xr;
          }
        };
        L.ProviderMeta = Ot;
        function Vt(Me) {
          return Me.reduce((at, Jt) => {
            let er = Array.isArray(Jt) ? Vt(Jt) : Jt;
            return at.concat(er);
          }, []);
        }
        L.flatten = Vt;
        function Ut(Me) {
          return Me.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
        }
        function rr(Me, at, Jt) {
          let er;
          return Jt.isInline ? at.type.reference instanceof re.StaticSymbol ? er = `${at.type.reference.filePath}.${at.type.reference.name}.html` : er = `${de(Me)}/${de(at.type)}.html` : er = Jt.templateUrl, at.type.reference instanceof re.StaticSymbol ? er : Ut(er);
        }
        L.templateSourceUrl = rr;
        function z(Me, at) {
          let Jt = Me.moduleUrl.split(/\/\\/g), er = Jt[Jt.length - 1];
          return Ut(`css/${at}${er}.ngstyle.js`);
        }
        L.sharedStylesheetJitUrl = z;
        function le(Me) {
          return Ut(`${de(Me.type)}/module.ngfactory.js`);
        }
        L.ngModuleJitUrl = le;
        function We(Me, at) {
          return Ut(`${de(Me)}/${de(at.type)}.ngfactory.js`);
        }
        L.templateJitUrl = We;
      } }), Zt = he({ "node_modules/angular-html-parser/lib/compiler/src/parse_util.js"(L) {
        $(), Object.defineProperty(L, "__esModule", { value: !0 });
        var re = Ft(), ge = qt(), Ee = class {
          constructor(ce, ve, Ve, He) {
            this.file = ce, this.offset = ve, this.line = Ve, this.col = He;
          }
          toString() {
            return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
          }
          moveBy(ce) {
            let ve = this.file.content, Ve = ve.length, He = this.offset, Je = this.line, Qe = this.col;
            for (; He > 0 && ce < 0; )
              if (He--, ce++, ve.charCodeAt(He) == re.$LF) {
                Je--;
                let yt = ve.substr(0, He - 1).lastIndexOf(String.fromCharCode(re.$LF));
                Qe = yt > 0 ? He - yt : He;
              } else
                Qe--;
            for (; He < Ve && ce > 0; ) {
              let yt = ve.charCodeAt(He);
              He++, ce--, yt == re.$LF ? (Je++, Qe = 0) : Qe++;
            }
            return new Ee(this.file, He, Je, Qe);
          }
          getContext(ce, ve) {
            let Ve = this.file.content, He = this.offset;
            if (He != null) {
              He > Ve.length - 1 && (He = Ve.length - 1);
              let Je = He, Qe = 0, yt = 0;
              for (; Qe < ce && He > 0 && (He--, Qe++, !(Ve[He] == `
` && ++yt == ve)); )
                ;
              for (Qe = 0, yt = 0; Qe < ce && Je < Ve.length - 1 && (Je++, Qe++, !(Ve[Je] == `
` && ++yt == ve)); )
                ;
              return { before: Ve.substring(He, this.offset), after: Ve.substring(this.offset, Je + 1) };
            }
            return null;
          }
        };
        L.ParseLocation = Ee;
        var Pe = class {
          constructor(ce, ve) {
            this.content = ce, this.url = ve;
          }
        };
        L.ParseSourceFile = Pe;
        var ie = class {
          constructor(ce, ve) {
            let Ve = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
            this.start = ce, this.end = ve, this.details = Ve;
          }
          toString() {
            return this.start.file.content.substring(this.start.offset, this.end.offset);
          }
        };
        L.ParseSourceSpan = ie, L.EMPTY_PARSE_LOCATION = new Ee(new Pe("", ""), 0, 0, 0), L.EMPTY_SOURCE_SPAN = new ie(L.EMPTY_PARSE_LOCATION, L.EMPTY_PARSE_LOCATION);
        var de;
        (function(ce) {
          ce[ce.WARNING = 0] = "WARNING", ce[ce.ERROR = 1] = "ERROR";
        })(de = L.ParseErrorLevel || (L.ParseErrorLevel = {}));
        var Ue = class {
          constructor(ce, ve) {
            let Ve = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : de.ERROR;
            this.span = ce, this.msg = ve, this.level = Ve;
          }
          contextualMessage() {
            let ce = this.span.start.getContext(100, 3);
            return ce ? `${this.msg} ("${ce.before}[${de[this.level]} ->]${ce.after}")` : this.msg;
          }
          toString() {
            let ce = this.span.details ? `, ${this.span.details}` : "";
            return `${this.contextualMessage()}: ${this.span.start}${ce}`;
          }
        };
        L.ParseError = Ue;
        function Ge(ce, ve) {
          let Ve = ge.identifierModuleUrl(ve), He = Ve != null ? `in ${ce} ${ge.identifierName(ve)} in ${Ve}` : `in ${ce} ${ge.identifierName(ve)}`, Je = new Pe("", He);
          return new ie(new Ee(Je, -1, -1, -1), new Ee(Je, -1, -1, -1));
        }
        L.typeSourceSpan = Ge;
        function gt(ce, ve, Ve) {
          let He = `in ${ce} ${ve} in ${Ve}`, Je = new Pe("", He);
          return new ie(new Ee(Je, -1, -1, -1), new Ee(Je, -1, -1, -1));
        }
        L.r3JitTypeSourceSpan = gt;
      } }), ue = he({ "src/utils/front-matter/parse.js"(L, re) {
        $();
        var ge = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
        function Ee(Pe) {
          let ie = Pe.match(ge);
          if (!ie)
            return { content: Pe };
          let { startDelimiter: de, language: Ue, value: Ge = "", endDelimiter: gt } = ie.groups, ce = Ue.trim() || "yaml";
          if (de === "+++" && (ce = "toml"), ce !== "yaml" && de !== gt)
            return { content: Pe };
          let [ve] = ie;
          return { frontMatter: { type: "front-matter", lang: ce, value: Ge, startDelimiter: de, endDelimiter: gt, raw: ve.replace(/\n$/, "") }, content: ve.replace(/[^\n]/g, " ") + Pe.slice(ve.length) };
        }
        re.exports = Ee;
      } }), yr = he({ "src/utils/get-last.js"(L, re) {
        $();
        var ge = (Ee) => Ee[Ee.length - 1];
        re.exports = ge;
      } }), Pr = he({ "src/common/parser-create-error.js"(L, re) {
        $();
        function ge(Ee, Pe) {
          let ie = new SyntaxError(Ee + " (" + Pe.start.line + ":" + Pe.start.column + ")");
          return ie.loc = Pe, ie;
        }
        re.exports = ge;
      } }), zr = {};
      qe(zr, { default: () => fr });
      function fr(L) {
        if (typeof L != "string")
          throw new TypeError("Expected a string");
        return L.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
      }
      var Rr = je({ "node_modules/escape-string-regexp/index.js"() {
        $();
      } }), mr = he({ "node_modules/semver/internal/debug.js"(L, re) {
        $();
        var ge = typeof rt == "object" && rt.env && rt.env.NODE_DEBUG && /\bsemver\b/i.test(rt.env.NODE_DEBUG) ? function() {
          for (var Ee = arguments.length, Pe = new Array(Ee), ie = 0; ie < Ee; ie++)
            Pe[ie] = arguments[ie];
          return console.error("SEMVER", ...Pe);
        } : () => {
        };
        re.exports = ge;
      } }), rn = he({ "node_modules/semver/internal/constants.js"(L, re) {
        $();
        var ge = "2.0.0", Ee = 256, Pe = Number.MAX_SAFE_INTEGER || 9007199254740991, ie = 16;
        re.exports = { SEMVER_SPEC_VERSION: ge, MAX_LENGTH: Ee, MAX_SAFE_INTEGER: Pe, MAX_SAFE_COMPONENT_LENGTH: ie };
      } }), wr = he({ "node_modules/semver/internal/re.js"(L, re) {
        $();
        var { MAX_SAFE_COMPONENT_LENGTH: ge } = rn(), Ee = mr();
        L = re.exports = {};
        var Pe = L.re = [], ie = L.src = [], de = L.t = {}, Ue = 0, Ge = (gt, ce, ve) => {
          let Ve = Ue++;
          Ee(gt, Ve, ce), de[gt] = Ve, ie[Ve] = ce, Pe[Ve] = new RegExp(ce, ve ? "g" : void 0);
        };
        Ge("NUMERICIDENTIFIER", "0|[1-9]\\d*"), Ge("NUMERICIDENTIFIERLOOSE", "[0-9]+"), Ge("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), Ge("MAINVERSION", `(${ie[de.NUMERICIDENTIFIER]})\\.(${ie[de.NUMERICIDENTIFIER]})\\.(${ie[de.NUMERICIDENTIFIER]})`), Ge("MAINVERSIONLOOSE", `(${ie[de.NUMERICIDENTIFIERLOOSE]})\\.(${ie[de.NUMERICIDENTIFIERLOOSE]})\\.(${ie[de.NUMERICIDENTIFIERLOOSE]})`), Ge("PRERELEASEIDENTIFIER", `(?:${ie[de.NUMERICIDENTIFIER]}|${ie[de.NONNUMERICIDENTIFIER]})`), Ge("PRERELEASEIDENTIFIERLOOSE", `(?:${ie[de.NUMERICIDENTIFIERLOOSE]}|${ie[de.NONNUMERICIDENTIFIER]})`), Ge("PRERELEASE", `(?:-(${ie[de.PRERELEASEIDENTIFIER]}(?:\\.${ie[de.PRERELEASEIDENTIFIER]})*))`), Ge("PRERELEASELOOSE", `(?:-?(${ie[de.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${ie[de.PRERELEASEIDENTIFIERLOOSE]})*))`), Ge("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), Ge("BUILD", `(?:\\+(${ie[de.BUILDIDENTIFIER]}(?:\\.${ie[de.BUILDIDENTIFIER]})*))`), Ge("FULLPLAIN", `v?${ie[de.MAINVERSION]}${ie[de.PRERELEASE]}?${ie[de.BUILD]}?`), Ge("FULL", `^${ie[de.FULLPLAIN]}$`), Ge("LOOSEPLAIN", `[v=\\s]*${ie[de.MAINVERSIONLOOSE]}${ie[de.PRERELEASELOOSE]}?${ie[de.BUILD]}?`), Ge("LOOSE", `^${ie[de.LOOSEPLAIN]}$`), Ge("GTLT", "((?:<|>)?=?)"), Ge("XRANGEIDENTIFIERLOOSE", `${ie[de.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), Ge("XRANGEIDENTIFIER", `${ie[de.NUMERICIDENTIFIER]}|x|X|\\*`), Ge("XRANGEPLAIN", `[v=\\s]*(${ie[de.XRANGEIDENTIFIER]})(?:\\.(${ie[de.XRANGEIDENTIFIER]})(?:\\.(${ie[de.XRANGEIDENTIFIER]})(?:${ie[de.PRERELEASE]})?${ie[de.BUILD]}?)?)?`), Ge("XRANGEPLAINLOOSE", `[v=\\s]*(${ie[de.XRANGEIDENTIFIERLOOSE]})(?:\\.(${ie[de.XRANGEIDENTIFIERLOOSE]})(?:\\.(${ie[de.XRANGEIDENTIFIERLOOSE]})(?:${ie[de.PRERELEASELOOSE]})?${ie[de.BUILD]}?)?)?`), Ge("XRANGE", `^${ie[de.GTLT]}\\s*${ie[de.XRANGEPLAIN]}$`), Ge("XRANGELOOSE", `^${ie[de.GTLT]}\\s*${ie[de.XRANGEPLAINLOOSE]}$`), Ge("COERCE", `(^|[^\\d])(\\d{1,${ge}})(?:\\.(\\d{1,${ge}}))?(?:\\.(\\d{1,${ge}}))?(?:$|[^\\d])`), Ge("COERCERTL", ie[de.COERCE], !0), Ge("LONETILDE", "(?:~>?)"), Ge("TILDETRIM", `(\\s*)${ie[de.LONETILDE]}\\s+`, !0), L.tildeTrimReplace = "$1~", Ge("TILDE", `^${ie[de.LONETILDE]}${ie[de.XRANGEPLAIN]}$`), Ge("TILDELOOSE", `^${ie[de.LONETILDE]}${ie[de.XRANGEPLAINLOOSE]}$`), Ge("LONECARET", "(?:\\^)"), Ge("CARETTRIM", `(\\s*)${ie[de.LONECARET]}\\s+`, !0), L.caretTrimReplace = "$1^", Ge("CARET", `^${ie[de.LONECARET]}${ie[de.XRANGEPLAIN]}$`), Ge("CARETLOOSE", `^${ie[de.LONECARET]}${ie[de.XRANGEPLAINLOOSE]}$`), Ge("COMPARATORLOOSE", `^${ie[de.GTLT]}\\s*(${ie[de.LOOSEPLAIN]})$|^$`), Ge("COMPARATOR", `^${ie[de.GTLT]}\\s*(${ie[de.FULLPLAIN]})$|^$`), Ge("COMPARATORTRIM", `(\\s*)${ie[de.GTLT]}\\s*(${ie[de.LOOSEPLAIN]}|${ie[de.XRANGEPLAIN]})`, !0), L.comparatorTrimReplace = "$1$2$3", Ge("HYPHENRANGE", `^\\s*(${ie[de.XRANGEPLAIN]})\\s+-\\s+(${ie[de.XRANGEPLAIN]})\\s*$`), Ge("HYPHENRANGELOOSE", `^\\s*(${ie[de.XRANGEPLAINLOOSE]})\\s+-\\s+(${ie[de.XRANGEPLAINLOOSE]})\\s*$`), Ge("STAR", "(<|>)?=?\\s*\\*"), Ge("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), Ge("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
      } }), Fr = he({ "node_modules/semver/internal/parse-options.js"(L, re) {
        $();
        var ge = ["includePrerelease", "loose", "rtl"], Ee = (Pe) => Pe ? typeof Pe != "object" ? { loose: !0 } : ge.filter((ie) => Pe[ie]).reduce((ie, de) => (ie[de] = !0, ie), {}) : {};
        re.exports = Ee;
      } }), Tn = he({ "node_modules/semver/internal/identifiers.js"(L, re) {
        $();
        var ge = /^[0-9]+$/, Ee = (ie, de) => {
          let Ue = ge.test(ie), Ge = ge.test(de);
          return Ue && Ge && (ie = +ie, de = +de), ie === de ? 0 : Ue && !Ge ? -1 : Ge && !Ue ? 1 : ie < de ? -1 : 1;
        }, Pe = (ie, de) => Ee(de, ie);
        re.exports = { compareIdentifiers: Ee, rcompareIdentifiers: Pe };
      } }), Bn = he({ "node_modules/semver/classes/semver.js"(L, re) {
        $();
        var ge = mr(), { MAX_LENGTH: Ee, MAX_SAFE_INTEGER: Pe } = rn(), { re: ie, t: de } = wr(), Ue = Fr(), { compareIdentifiers: Ge } = Tn(), gt = class {
          constructor(ce, ve) {
            if (ve = Ue(ve), ce instanceof gt) {
              if (ce.loose === !!ve.loose && ce.includePrerelease === !!ve.includePrerelease)
                return ce;
              ce = ce.version;
            } else if (typeof ce != "string")
              throw new TypeError(`Invalid Version: ${ce}`);
            if (ce.length > Ee)
              throw new TypeError(`version is longer than ${Ee} characters`);
            ge("SemVer", ce, ve), this.options = ve, this.loose = !!ve.loose, this.includePrerelease = !!ve.includePrerelease;
            let Ve = ce.trim().match(ve.loose ? ie[de.LOOSE] : ie[de.FULL]);
            if (!Ve)
              throw new TypeError(`Invalid Version: ${ce}`);
            if (this.raw = ce, this.major = +Ve[1], this.minor = +Ve[2], this.patch = +Ve[3], this.major > Pe || this.major < 0)
              throw new TypeError("Invalid major version");
            if (this.minor > Pe || this.minor < 0)
              throw new TypeError("Invalid minor version");
            if (this.patch > Pe || this.patch < 0)
              throw new TypeError("Invalid patch version");
            Ve[4] ? this.prerelease = Ve[4].split(".").map((He) => {
              if (/^[0-9]+$/.test(He)) {
                let Je = +He;
                if (Je >= 0 && Je < Pe)
                  return Je;
              }
              return He;
            }) : this.prerelease = [], this.build = Ve[5] ? Ve[5].split(".") : [], this.format();
          }
          format() {
            return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
          }
          toString() {
            return this.version;
          }
          compare(ce) {
            if (ge("SemVer.compare", this.version, this.options, ce), !(ce instanceof gt)) {
              if (typeof ce == "string" && ce === this.version)
                return 0;
              ce = new gt(ce, this.options);
            }
            return ce.version === this.version ? 0 : this.compareMain(ce) || this.comparePre(ce);
          }
          compareMain(ce) {
            return ce instanceof gt || (ce = new gt(ce, this.options)), Ge(this.major, ce.major) || Ge(this.minor, ce.minor) || Ge(this.patch, ce.patch);
          }
          comparePre(ce) {
            if (ce instanceof gt || (ce = new gt(ce, this.options)), this.prerelease.length && !ce.prerelease.length)
              return -1;
            if (!this.prerelease.length && ce.prerelease.length)
              return 1;
            if (!this.prerelease.length && !ce.prerelease.length)
              return 0;
            let ve = 0;
            do {
              let Ve = this.prerelease[ve], He = ce.prerelease[ve];
              if (ge("prerelease compare", ve, Ve, He), Ve === void 0 && He === void 0)
                return 0;
              if (He === void 0)
                return 1;
              if (Ve === void 0)
                return -1;
              if (Ve !== He)
                return Ge(Ve, He);
            } while (++ve);
          }
          compareBuild(ce) {
            ce instanceof gt || (ce = new gt(ce, this.options));
            let ve = 0;
            do {
              let Ve = this.build[ve], He = ce.build[ve];
              if (ge("prerelease compare", ve, Ve, He), Ve === void 0 && He === void 0)
                return 0;
              if (He === void 0)
                return 1;
              if (Ve === void 0)
                return -1;
              if (Ve !== He)
                return Ge(Ve, He);
            } while (++ve);
          }
          inc(ce, ve) {
            switch (ce) {
              case "premajor":
                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", ve);
                break;
              case "preminor":
                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", ve);
                break;
              case "prepatch":
                this.prerelease.length = 0, this.inc("patch", ve), this.inc("pre", ve);
                break;
              case "prerelease":
                this.prerelease.length === 0 && this.inc("patch", ve), this.inc("pre", ve);
                break;
              case "major":
                (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                break;
              case "minor":
                (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
                break;
              case "patch":
                this.prerelease.length === 0 && this.patch++, this.prerelease = [];
                break;
              case "pre":
                if (this.prerelease.length === 0)
                  this.prerelease = [0];
                else {
                  let Ve = this.prerelease.length;
                  for (; --Ve >= 0; )
                    typeof this.prerelease[Ve] == "number" && (this.prerelease[Ve]++, Ve = -2);
                  Ve === -1 && this.prerelease.push(0);
                }
                ve && (Ge(this.prerelease[0], ve) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = [ve, 0]) : this.prerelease = [ve, 0]);
                break;
              default:
                throw new Error(`invalid increment argument: ${ce}`);
            }
            return this.format(), this.raw = this.version, this;
          }
        };
        re.exports = gt;
      } }), on = he({ "node_modules/semver/functions/compare.js"(L, re) {
        $();
        var ge = Bn(), Ee = (Pe, ie, de) => new ge(Pe, de).compare(new ge(ie, de));
        re.exports = Ee;
      } }), Nr = he({ "node_modules/semver/functions/lt.js"(L, re) {
        $();
        var ge = on(), Ee = (Pe, ie, de) => ge(Pe, ie, de) < 0;
        re.exports = Ee;
      } }), Bu = he({ "node_modules/semver/functions/gte.js"(L, re) {
        $();
        var ge = on(), Ee = (Pe, ie, de) => ge(Pe, ie, de) >= 0;
        re.exports = Ee;
      } }), Ri = he({ "src/utils/arrayify.js"(L, re) {
        $(), re.exports = (ge, Ee) => Object.entries(ge).map((Pe) => {
          let [ie, de] = Pe;
          return Object.assign({ [Ee]: ie }, de);
        });
      } }), wu = he({ "package.json"(L, re) {
        re.exports = { version: "2.8.8" };
      } }), Mi = he({ "node_modules/outdent/lib/index.js"(L, re) {
        $(), Object.defineProperty(L, "__esModule", { value: !0 }), L.outdent = void 0;
        function ge() {
          for (var ct = [], kt = 0; kt < arguments.length; kt++)
            ct[kt] = arguments[kt];
        }
        function Ee() {
          return typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : Pe();
        }
        function Pe() {
          return { add: ge, delete: ge, get: ge, set: ge, has: function(ct) {
            return !1;
          } };
        }
        var ie = Object.prototype.hasOwnProperty, de = function(ct, kt) {
          return ie.call(ct, kt);
        };
        function Ue(ct, kt) {
          for (var $t in kt)
            de(kt, $t) && (ct[$t] = kt[$t]);
          return ct;
        }
        var Ge = /^[ \t]*(?:\r\n|\r|\n)/, gt = /(?:\r\n|\r|\n)[ \t]*$/, ce = /^(?:[\r\n]|$)/, ve = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, Ve = /^[ \t]*[\r\n][ \t\r\n]*$/;
        function He(ct, kt, $t) {
          var ir = 0, st = ct[0].match(ve);
          st && (ir = st[1].length);
          var Ot = "(\\r\\n|\\r|\\n).{0," + ir + "}", Vt = new RegExp(Ot, "g");
          kt && (ct = ct.slice(1));
          var Ut = $t.newline, rr = $t.trimLeadingNewline, z = $t.trimTrailingNewline, le = typeof Ut == "string", We = ct.length, Me = ct.map(function(at, Jt) {
            return at = at.replace(Vt, "$1"), Jt === 0 && rr && (at = at.replace(Ge, "")), Jt === We - 1 && z && (at = at.replace(gt, "")), le && (at = at.replace(/\r\n|\n|\r/g, function(er) {
              return Ut;
            })), at;
          });
          return Me;
        }
        function Je(ct, kt) {
          for (var $t = "", ir = 0, st = ct.length; ir < st; ir++)
            $t += ct[ir], ir < st - 1 && ($t += kt[ir]);
          return $t;
        }
        function Qe(ct) {
          return de(ct, "raw") && de(ct, "length");
        }
        function yt(ct) {
          var kt = Ee(), $t = Ee();
          function ir(Ot) {
            for (var Vt = [], Ut = 1; Ut < arguments.length; Ut++)
              Vt[Ut - 1] = arguments[Ut];
            if (Qe(Ot)) {
              var rr = Ot, z = (Vt[0] === ir || Vt[0] === _t) && Ve.test(rr[0]) && ce.test(rr[1]), le = z ? $t : kt, We = le.get(rr);
              if (We || (We = He(rr, z, ct), le.set(rr, We)), Vt.length === 0)
                return We[0];
              var Me = Je(We, z ? Vt.slice(1) : Vt);
              return Me;
            } else
              return yt(Ue(Ue({}, ct), Ot || {}));
          }
          var st = Ue(ir, { string: function(Ot) {
            return He([Ot], !1, ct)[0];
          } });
          return st;
        }
        var _t = yt({ trimLeadingNewline: !0, trimTrailingNewline: !0 });
        if (L.outdent = _t, L.default = _t, typeof re < "u")
          try {
            re.exports = _t, Object.defineProperty(_t, "__esModule", { value: !0 }), _t.default = _t, _t.outdent = _t;
          } catch {
          }
      } }), Nu = he({ "src/main/core-options.js"(L, re) {
        $();
        var { outdent: ge } = Mi(), Ee = "Config", Pe = "Editor", ie = "Format", de = "Other", Ue = "Output", Ge = "Global", gt = "Special", ce = { cursorOffset: { since: "1.4.0", category: gt, type: "int", default: -1, range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 }, description: ge`
      Print (to stderr) where a cursor at the given position would move to after formatting.
      This option cannot be used with --range-start and --range-end.
    `, cliCategory: Pe }, endOfLine: { since: "1.15.0", category: Ge, type: "choice", default: [{ since: "1.15.0", value: "auto" }, { since: "2.0.0", value: "lf" }], description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: ge`
          Maintain existing
          (mixed values within one file are normalised by looking at what's used after the first line)
        ` }] }, filepath: { since: "1.4.0", category: gt, type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: de, cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { since: "1.8.0", category: gt, type: "boolean", default: !1, description: "Insert @format pragma into file's first docblock comment.", cliCategory: de }, parser: { since: "0.0.10", category: Ge, type: "choice", default: [{ since: "0.0.10", value: "babylon" }, { since: "1.13.0", value: void 0 }], description: "Which parser to use.", exception: (ve) => typeof ve == "string" || typeof ve == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", since: "1.16.0", description: "JavaScript" }, { value: "babel-flow", since: "1.16.0", description: "Flow" }, { value: "babel-ts", since: "2.0.0", description: "TypeScript" }, { value: "typescript", since: "1.4.0", description: "TypeScript" }, { value: "acorn", since: "2.6.0", description: "JavaScript" }, { value: "espree", since: "2.2.0", description: "JavaScript" }, { value: "meriyah", since: "2.2.0", description: "JavaScript" }, { value: "css", since: "1.7.1", description: "CSS" }, { value: "less", since: "1.7.1", description: "Less" }, { value: "scss", since: "1.7.1", description: "SCSS" }, { value: "json", since: "1.5.0", description: "JSON" }, { value: "json5", since: "1.13.0", description: "JSON5" }, { value: "json-stringify", since: "1.13.0", description: "JSON.stringify" }, { value: "graphql", since: "1.5.0", description: "GraphQL" }, { value: "markdown", since: "1.8.0", description: "Markdown" }, { value: "mdx", since: "1.15.0", description: "MDX" }, { value: "vue", since: "1.10.0", description: "Vue" }, { value: "yaml", since: "1.14.0", description: "YAML" }, { value: "glimmer", since: "2.3.0", description: "Ember / Handlebars" }, { value: "html", since: "1.15.0", description: "HTML" }, { value: "angular", since: "1.15.0", description: "Angular" }, { value: "lwc", since: "1.17.0", description: "Lightning Web Components" }] }, plugins: { since: "1.10.0", type: "path", array: !0, default: [{ value: [] }], category: Ge, description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (ve) => typeof ve == "string" || typeof ve == "object", cliName: "plugin", cliCategory: Ee }, pluginSearchDirs: { since: "1.13.0", type: "path", array: !0, default: [{ value: [] }], category: Ge, description: ge`
      Custom directory that contains prettier plugins in node_modules subdirectory.
      Overrides default behavior when plugins are searched relatively to the location of Prettier.
      Multiple values are accepted.
    `, exception: (ve) => typeof ve == "string" || typeof ve == "object", cliName: "plugin-search-dir", cliCategory: Ee }, printWidth: { since: "0.0.0", category: Ge, type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, rangeEnd: { since: "1.4.0", category: gt, type: "int", default: Number.POSITIVE_INFINITY, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: ge`
      Format code ending at a given character offset (exclusive).
      The range will extend forwards to the end of the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: Pe }, rangeStart: { since: "1.4.0", category: gt, type: "int", default: 0, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: ge`
      Format code starting at a given character offset.
      The range will extend backwards to the start of the first line containing the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: Pe }, requirePragma: { since: "1.7.0", category: gt, type: "boolean", default: !1, description: ge`
      Require either '@prettier' or '@format' to be present in the file's first docblock comment
      in order for it to be formatted.
    `, cliCategory: de }, tabWidth: { type: "int", category: Ge, default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, useTabs: { since: "1.0.0", category: Ge, type: "boolean", default: !1, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { since: "2.1.0", category: Ge, type: "choice", default: [{ since: "2.1.0", value: "auto" }], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
        re.exports = { CATEGORY_CONFIG: Ee, CATEGORY_EDITOR: Pe, CATEGORY_FORMAT: ie, CATEGORY_OTHER: de, CATEGORY_OUTPUT: Ue, CATEGORY_GLOBAL: Ge, CATEGORY_SPECIAL: gt, options: ce };
      } }), En = he({ "src/main/support.js"(L, re) {
        $();
        var ge = { compare: on(), lt: Nr(), gte: Bu() }, Ee = Ri(), Pe = wu().version, ie = Nu().options;
        function de() {
          let { plugins: Ge = [], showUnreleased: gt = !1, showDeprecated: ce = !1, showInternal: ve = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, Ve = Pe.split("-", 1)[0], He = Ge.flatMap((ct) => ct.languages || []).filter(Qe), Je = Ee(Object.assign({}, ...Ge.map((ct) => {
            let { options: kt } = ct;
            return kt;
          }), ie), "name").filter((ct) => Qe(ct) && yt(ct)).sort((ct, kt) => ct.name === kt.name ? 0 : ct.name < kt.name ? -1 : 1).map(_t).map((ct) => {
            ct = Object.assign({}, ct), Array.isArray(ct.default) && (ct.default = ct.default.length === 1 ? ct.default[0].value : ct.default.filter(Qe).sort(($t, ir) => ge.compare(ir.since, $t.since))[0].value), Array.isArray(ct.choices) && (ct.choices = ct.choices.filter(($t) => Qe($t) && yt($t)), ct.name === "parser" && Ue(ct, He, Ge));
            let kt = Object.fromEntries(Ge.filter(($t) => $t.defaultOptions && $t.defaultOptions[ct.name] !== void 0).map(($t) => [$t.name, $t.defaultOptions[ct.name]]));
            return Object.assign(Object.assign({}, ct), {}, { pluginDefaults: kt });
          });
          return { languages: He, options: Je };
          function Qe(ct) {
            return gt || !("since" in ct) || ct.since && ge.gte(Ve, ct.since);
          }
          function yt(ct) {
            return ce || !("deprecated" in ct) || ct.deprecated && ge.lt(Ve, ct.deprecated);
          }
          function _t(ct) {
            return ve ? ct : Oe(ct, Se);
          }
        }
        function Ue(Ge, gt, ce) {
          let ve = new Set(Ge.choices.map((Ve) => Ve.value));
          for (let Ve of gt)
            if (Ve.parsers) {
              for (let He of Ve.parsers)
                if (!ve.has(He)) {
                  ve.add(He);
                  let Je = ce.find((yt) => yt.parsers && yt.parsers[He]), Qe = Ve.name;
                  Je && Je.name && (Qe += ` (plugin: ${Je.name})`), Ge.choices.push({ value: He, description: Qe });
                }
            }
        }
        re.exports = { getSupportInfo: de };
      } }), qi = he({ "src/utils/is-non-empty-array.js"(L, re) {
        $();
        function ge(Ee) {
          return Array.isArray(Ee) && Ee.length > 0;
        }
        re.exports = ge;
      } });
      function Vi() {
        let { onlyFirst: L = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, re = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(re, L ? void 0 : "g");
      }
      var wt = je({ "node_modules/strip-ansi/node_modules/ansi-regex/index.js"() {
        $();
      } });
      function _u(L) {
        if (typeof L != "string")
          throw new TypeError(`Expected a \`string\`, got \`${typeof L}\``);
        return L.replace(Vi(), "");
      }
      var Ui = je({ "node_modules/strip-ansi/index.js"() {
        $(), wt();
      } });
      function Gi(L) {
        return Number.isInteger(L) ? L >= 4352 && (L <= 4447 || L === 9001 || L === 9002 || 11904 <= L && L <= 12871 && L !== 12351 || 12880 <= L && L <= 19903 || 19968 <= L && L <= 42182 || 43360 <= L && L <= 43388 || 44032 <= L && L <= 55203 || 63744 <= L && L <= 64255 || 65040 <= L && L <= 65049 || 65072 <= L && L <= 65131 || 65281 <= L && L <= 65376 || 65504 <= L && L <= 65510 || 110592 <= L && L <= 110593 || 127488 <= L && L <= 127569 || 131072 <= L && L <= 262141) : !1;
      }
      var ku = je({ "node_modules/is-fullwidth-code-point/index.js"() {
        $();
      } }), Pu = he({ "node_modules/emoji-regex/index.js"(L, re) {
        $(), re.exports = function() {
          return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
        };
      } }), Iu = {};
      qe(Iu, { default: () => Ji });
      function Ji(L) {
        if (typeof L != "string" || L.length === 0 || (L = _u(L), L.length === 0))
          return 0;
        L = L.replace((0, ju.default)(), "  ");
        let re = 0;
        for (let ge = 0; ge < L.length; ge++) {
          let Ee = L.codePointAt(ge);
          Ee <= 31 || Ee >= 127 && Ee <= 159 || Ee >= 768 && Ee <= 879 || (Ee > 65535 && ge++, re += Gi(Ee) ? 2 : 1);
        }
        return re;
      }
      var ju, Xi = je({ "node_modules/string-width/index.js"() {
        $(), Ui(), ku(), ju = Ze(Pu());
      } }), tu = he({ "src/utils/get-string-width.js"(L, re) {
        $();
        var ge = (Xi(), nt(Iu)).default, Ee = /[^\x20-\x7F]/;
        function Pe(ie) {
          return ie ? Ee.test(ie) ? ge(ie) : ie.length : 0;
        }
        re.exports = Pe;
      } }), ru = he({ "src/utils/text/skip.js"(L, re) {
        $();
        function ge(Ue) {
          return (Ge, gt, ce) => {
            let ve = ce && ce.backwards;
            if (gt === !1)
              return !1;
            let { length: Ve } = Ge, He = gt;
            for (; He >= 0 && He < Ve; ) {
              let Je = Ge.charAt(He);
              if (Ue instanceof RegExp) {
                if (!Ue.test(Je))
                  return He;
              } else if (!Ue.includes(Je))
                return He;
              ve ? He-- : He++;
            }
            return He === -1 || He === Ve ? He : !1;
          };
        }
        var Ee = ge(/\s/), Pe = ge(" 	"), ie = ge(",; 	"), de = ge(/[^\n\r]/);
        re.exports = { skipWhitespace: Ee, skipSpaces: Pe, skipToLineEnd: ie, skipEverythingButNewLine: de };
      } }), Lu = he({ "src/utils/text/skip-inline-comment.js"(L, re) {
        $();
        function ge(Ee, Pe) {
          if (Pe === !1)
            return !1;
          if (Ee.charAt(Pe) === "/" && Ee.charAt(Pe + 1) === "*") {
            for (let ie = Pe + 2; ie < Ee.length; ++ie)
              if (Ee.charAt(ie) === "*" && Ee.charAt(ie + 1) === "/")
                return ie + 2;
          }
          return Pe;
        }
        re.exports = ge;
      } }), Ou = he({ "src/utils/text/skip-trailing-comment.js"(L, re) {
        $();
        var { skipEverythingButNewLine: ge } = ru();
        function Ee(Pe, ie) {
          return ie === !1 ? !1 : Pe.charAt(ie) === "/" && Pe.charAt(ie + 1) === "/" ? ge(Pe, ie) : ie;
        }
        re.exports = Ee;
      } }), $u = he({ "src/utils/text/skip-newline.js"(L, re) {
        $();
        function ge(Ee, Pe, ie) {
          let de = ie && ie.backwards;
          if (Pe === !1)
            return !1;
          let Ue = Ee.charAt(Pe);
          if (de) {
            if (Ee.charAt(Pe - 1) === "\r" && Ue === `
`)
              return Pe - 2;
            if (Ue === `
` || Ue === "\r" || Ue === "\u2028" || Ue === "\u2029")
              return Pe - 1;
          } else {
            if (Ue === "\r" && Ee.charAt(Pe + 1) === `
`)
              return Pe + 2;
            if (Ue === `
` || Ue === "\r" || Ue === "\u2028" || Ue === "\u2029")
              return Pe + 1;
          }
          return Pe;
        }
        re.exports = ge;
      } }), Wi = he({ "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js"(L, re) {
        $();
        var ge = Lu(), Ee = $u(), Pe = Ou(), { skipSpaces: ie } = ru();
        function de(Ue, Ge) {
          let gt = null, ce = Ge;
          for (; ce !== gt; )
            gt = ce, ce = ie(Ue, ce), ce = ge(Ue, ce), ce = Pe(Ue, ce), ce = Ee(Ue, ce);
          return ce;
        }
        re.exports = de;
      } }), nu = he({ "src/common/util.js"(L, re) {
        $();
        var { default: ge } = (Rr(), nt(zr)), Ee = yr(), { getSupportInfo: Pe } = En(), ie = qi(), de = tu(), { skipWhitespace: Ue, skipSpaces: Ge, skipToLineEnd: gt, skipEverythingButNewLine: ce } = ru(), ve = Lu(), Ve = Ou(), He = $u(), Je = Wi(), Qe = (lt) => lt[lt.length - 2];
        function yt(lt) {
          return (mt, St, xt) => {
            let Kt = xt && xt.backwards;
            if (St === !1)
              return !1;
            let { length: sr } = mt, lr = St;
            for (; lr >= 0 && lr < sr; ) {
              let Qt = mt.charAt(lr);
              if (lt instanceof RegExp) {
                if (!lt.test(Qt))
                  return lr;
              } else if (!lt.includes(Qt))
                return lr;
              Kt ? lr-- : lr++;
            }
            return lr === -1 || lr === sr ? lr : !1;
          };
        }
        function _t(lt, mt) {
          let St = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, xt = Ge(lt, St.backwards ? mt - 1 : mt, St), Kt = He(lt, xt, St);
          return xt !== Kt;
        }
        function ct(lt, mt, St) {
          for (let xt = mt; xt < St; ++xt)
            if (lt.charAt(xt) === `
`)
              return !0;
          return !1;
        }
        function kt(lt, mt, St) {
          let xt = St(mt) - 1;
          xt = Ge(lt, xt, { backwards: !0 }), xt = He(lt, xt, { backwards: !0 }), xt = Ge(lt, xt, { backwards: !0 });
          let Kt = He(lt, xt, { backwards: !0 });
          return xt !== Kt;
        }
        function $t(lt, mt) {
          let St = null, xt = mt;
          for (; xt !== St; )
            St = xt, xt = gt(lt, xt), xt = ve(lt, xt), xt = Ge(lt, xt);
          return xt = Ve(lt, xt), xt = He(lt, xt), xt !== !1 && _t(lt, xt);
        }
        function ir(lt, mt, St) {
          return $t(lt, St(mt));
        }
        function st(lt, mt, St) {
          return Je(lt, St(mt));
        }
        function Ot(lt, mt, St) {
          return lt.charAt(st(lt, mt, St));
        }
        function Vt(lt, mt) {
          let St = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return Ge(lt, St.backwards ? mt - 1 : mt, St) !== mt;
        }
        function Ut(lt, mt) {
          let St = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, xt = 0;
          for (let Kt = St; Kt < lt.length; ++Kt)
            lt[Kt] === "	" ? xt = xt + mt - xt % mt : xt++;
          return xt;
        }
        function rr(lt, mt) {
          let St = lt.lastIndexOf(`
`);
          return St === -1 ? 0 : Ut(lt.slice(St + 1).match(/^[\t ]*/)[0], mt);
        }
        function z(lt, mt) {
          let St = { quote: '"', regex: /"/g, escaped: "&quot;" }, xt = { quote: "'", regex: /'/g, escaped: "&apos;" }, Kt = mt === "'" ? xt : St, sr = Kt === xt ? St : xt, lr = Kt;
          if (lt.includes(Kt.quote) || lt.includes(sr.quote)) {
            let Qt = (lt.match(Kt.regex) || []).length, Kr = (lt.match(sr.regex) || []).length;
            lr = Qt > Kr ? sr : Kt;
          }
          return lr;
        }
        function le(lt, mt) {
          let St = lt.slice(1, -1), xt = mt.parser === "json" || mt.parser === "json5" && mt.quoteProps === "preserve" && !mt.singleQuote ? '"' : mt.__isInHtmlAttribute ? "'" : z(St, mt.singleQuote ? "'" : '"').quote;
          return We(St, xt, !(mt.parser === "css" || mt.parser === "less" || mt.parser === "scss" || mt.__embeddedInHtml));
        }
        function We(lt, mt, St) {
          let xt = mt === '"' ? "'" : '"', Kt = /\\(.)|(["'])/gs, sr = lt.replace(Kt, (lr, Qt, Kr) => Qt === xt ? Qt : Kr === mt ? "\\" + Kr : Kr || (St && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(Qt) ? Qt : "\\" + Qt));
          return mt + sr + mt;
        }
        function Me(lt) {
          return lt.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
        }
        function at(lt, mt) {
          let St = lt.match(new RegExp(`(${ge(mt)})+`, "g"));
          return St === null ? 0 : St.reduce((xt, Kt) => Math.max(xt, Kt.length / mt.length), 0);
        }
        function Jt(lt, mt) {
          let St = lt.match(new RegExp(`(${ge(mt)})+`, "g"));
          if (St === null)
            return 0;
          let xt = /* @__PURE__ */ new Map(), Kt = 0;
          for (let sr of St) {
            let lr = sr.length / mt.length;
            xt.set(lr, !0), lr > Kt && (Kt = lr);
          }
          for (let sr = 1; sr < Kt; sr++)
            if (!xt.get(sr))
              return sr;
          return Kt + 1;
        }
        function er(lt, mt) {
          (lt.comments || (lt.comments = [])).push(mt), mt.printed = !1, mt.nodeDescription = or(lt);
        }
        function Ar(lt, mt) {
          mt.leading = !0, mt.trailing = !1, er(lt, mt);
        }
        function Er(lt, mt, St) {
          mt.leading = !1, mt.trailing = !1, St && (mt.marker = St), er(lt, mt);
        }
        function _r(lt, mt) {
          mt.leading = !1, mt.trailing = !0, er(lt, mt);
        }
        function xr(lt, mt) {
          let { languages: St } = Pe({ plugins: mt.plugins }), xt = St.find((Kt) => {
            let { name: sr } = Kt;
            return sr.toLowerCase() === lt;
          }) || St.find((Kt) => {
            let { aliases: sr } = Kt;
            return Array.isArray(sr) && sr.includes(lt);
          }) || St.find((Kt) => {
            let { extensions: sr } = Kt;
            return Array.isArray(sr) && sr.includes(`.${lt}`);
          });
          return xt && xt.parsers[0];
        }
        function Ir(lt) {
          return lt && lt.type === "front-matter";
        }
        function Mr(lt) {
          let mt = /* @__PURE__ */ new WeakMap();
          return function(St) {
            return mt.has(St) || mt.set(St, Symbol(lt)), mt.get(St);
          };
        }
        function or(lt) {
          let mt = lt.type || lt.kind || "(unknown type)", St = String(lt.name || lt.id && (typeof lt.id == "object" ? lt.id.name : lt.id) || lt.key && (typeof lt.key == "object" ? lt.key.name : lt.key) || lt.value && (typeof lt.value == "object" ? "" : String(lt.value)) || lt.operator || "");
          return St.length > 20 && (St = St.slice(0, 19) + "…"), mt + (St ? " " + St : "");
        }
        re.exports = { inferParserByLanguage: xr, getStringWidth: de, getMaxContinuousCount: at, getMinNotPresentContinuousCount: Jt, getPenultimate: Qe, getLast: Ee, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: Je, getNextNonSpaceNonCommentCharacterIndex: st, getNextNonSpaceNonCommentCharacter: Ot, skip: yt, skipWhitespace: Ue, skipSpaces: Ge, skipToLineEnd: gt, skipEverythingButNewLine: ce, skipInlineComment: ve, skipTrailingComment: Ve, skipNewline: He, isNextLineEmptyAfterIndex: $t, isNextLineEmpty: ir, isPreviousLineEmpty: kt, hasNewline: _t, hasNewlineInRange: ct, hasSpaces: Vt, getAlignmentSize: Ut, getIndentSize: rr, getPreferredQuote: z, printString: le, printNumber: Me, makeString: We, addLeadingComment: Ar, addDanglingComment: Er, addTrailingComment: _r, isFrontMatterNode: Ir, isNonEmptyArray: ie, createGroupIdMapper: Mr };
      } }), uu = he({ "vendors/html-tag-names.json"(L, re) {
        re.exports = { htmlTagNames: ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"] };
      } }), Cn = he({ "src/language-html/utils/array-to-map.js"(L, re) {
        $();
        function ge(Ee) {
          let Pe = /* @__PURE__ */ Object.create(null);
          for (let ie of Ee)
            Pe[ie] = !0;
          return Pe;
        }
        re.exports = ge;
      } }), Ru = he({ "src/language-html/utils/html-tag-names.js"(L, re) {
        $();
        var { htmlTagNames: ge } = uu(), Ee = Cn(), Pe = Ee(ge);
        re.exports = Pe;
      } }), Mu = he({ "vendors/html-element-attributes.json"(L, re) {
        re.exports = { htmlElementAttributes: { "*": ["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "slot", "spellcheck", "style", "tabindex", "title", "translate"], a: ["charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "target", "type"], applet: ["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"], area: ["alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "target", "type"], audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"], base: ["href", "target"], basefont: ["color", "face", "size"], blockquote: ["cite"], body: ["alink", "background", "bgcolor", "link", "text", "vlink"], br: ["clear"], button: ["disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "type", "value"], canvas: ["height", "width"], caption: ["align"], col: ["align", "char", "charoff", "span", "valign", "width"], colgroup: ["align", "char", "charoff", "span", "valign", "width"], data: ["value"], del: ["cite", "datetime"], details: ["open"], dialog: ["open"], dir: ["compact"], div: ["align"], dl: ["compact"], embed: ["height", "src", "type", "width"], fieldset: ["disabled", "form", "name"], font: ["color", "face", "size"], form: ["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"], frame: ["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"], frameset: ["cols", "rows"], h1: ["align"], h2: ["align"], h3: ["align"], h4: ["align"], h5: ["align"], h6: ["align"], head: ["profile"], hr: ["align", "noshade", "size", "width"], html: ["manifest", "version"], iframe: ["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"], img: ["align", "alt", "border", "crossorigin", "decoding", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"], input: ["accept", "align", "alt", "autocomplete", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "type", "usemap", "value", "width"], ins: ["cite", "datetime"], isindex: ["prompt"], label: ["for", "form"], legend: ["align"], li: ["type", "value"], link: ["as", "charset", "color", "crossorigin", "disabled", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "referrerpolicy", "rel", "rev", "sizes", "target", "type"], map: ["name"], menu: ["compact"], meta: ["charset", "content", "http-equiv", "media", "name", "scheme"], meter: ["high", "low", "max", "min", "optimum", "value"], object: ["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "type", "typemustmatch", "usemap", "vspace", "width"], ol: ["compact", "reversed", "start", "type"], optgroup: ["disabled", "label"], option: ["disabled", "label", "selected", "value"], output: ["for", "form", "name"], p: ["align"], param: ["name", "type", "value", "valuetype"], pre: ["width"], progress: ["max", "value"], q: ["cite"], script: ["async", "charset", "crossorigin", "defer", "integrity", "language", "nomodule", "referrerpolicy", "src", "type"], select: ["autocomplete", "disabled", "form", "multiple", "name", "required", "size"], slot: ["name"], source: ["height", "media", "sizes", "src", "srcset", "type", "width"], style: ["media", "type"], table: ["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"], tbody: ["align", "char", "charoff", "valign"], td: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], textarea: ["autocomplete", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "wrap"], tfoot: ["align", "char", "charoff", "valign"], th: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], thead: ["align", "char", "charoff", "valign"], time: ["datetime"], tr: ["align", "bgcolor", "char", "charoff", "valign"], track: ["default", "kind", "label", "src", "srclang"], ul: ["compact", "type"], video: ["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"] } };
      } }), qu = he({ "src/language-html/utils/map-object.js"(L, re) {
        $();
        function ge(Ee, Pe) {
          let ie = /* @__PURE__ */ Object.create(null);
          for (let [de, Ue] of Object.entries(Ee))
            ie[de] = Pe(Ue, de);
          return ie;
        }
        re.exports = ge;
      } }), zi = he({ "src/language-html/utils/html-elements-attributes.js"(L, re) {
        $();
        var { htmlElementAttributes: ge } = Mu(), Ee = qu(), Pe = Cn(), ie = Ee(ge, Pe);
        re.exports = ie;
      } }), Gt = he({ "src/language-html/utils/is-unknown-namespace.js"(L, re) {
        $();
        function ge(Ee) {
          return Ee.type === "element" && !Ee.hasExplicitNamespace && !["html", "svg"].includes(Ee.namespace);
        }
        re.exports = ge;
      } }), Vu = he({ "src/language-html/pragma.js"(L, re) {
        $();
        function ge(Pe) {
          return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(Pe);
        }
        function Ee(Pe) {
          return `<!-- @format -->

` + Pe.replace(/^\s*\n/, "");
        }
        re.exports = { hasPragma: ge, insertPragma: Ee };
      } }), Uu = he({ "src/language-html/ast.js"(L, re) {
        $();
        var ge = { attrs: !0, children: !0 }, Ee = /* @__PURE__ */ new Set(["parent"]), Pe = class {
          constructor() {
            let de = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            for (let Ue of /* @__PURE__ */ new Set([...Ee, ...Object.keys(de)]))
              this.setProperty(Ue, de[Ue]);
          }
          setProperty(de, Ue) {
            if (this[de] !== Ue) {
              if (de in ge && (Ue = Ue.map((Ge) => this.createChild(Ge))), !Ee.has(de)) {
                this[de] = Ue;
                return;
              }
              Object.defineProperty(this, de, { value: Ue, enumerable: !1, configurable: !0 });
            }
          }
          map(de) {
            let Ue;
            for (let Ge in ge) {
              let gt = this[Ge];
              if (gt) {
                let ce = ie(gt, (ve) => ve.map(de));
                Ue !== gt && (Ue || (Ue = new Pe({ parent: this.parent })), Ue.setProperty(Ge, ce));
              }
            }
            if (Ue)
              for (let Ge in this)
                Ge in ge || (Ue[Ge] = this[Ge]);
            return de(Ue || this);
          }
          walk(de) {
            for (let Ue in ge) {
              let Ge = this[Ue];
              if (Ge)
                for (let gt = 0; gt < Ge.length; gt++)
                  Ge[gt].walk(de);
            }
            de(this);
          }
          createChild(de) {
            let Ue = de instanceof Pe ? de.clone() : new Pe(de);
            return Ue.setProperty("parent", this), Ue;
          }
          insertChildBefore(de, Ue) {
            this.children.splice(this.children.indexOf(de), 0, this.createChild(Ue));
          }
          removeChild(de) {
            this.children.splice(this.children.indexOf(de), 1);
          }
          replaceChild(de, Ue) {
            this.children[this.children.indexOf(de)] = this.createChild(Ue);
          }
          clone() {
            return new Pe(this);
          }
          get firstChild() {
            var de;
            return (de = this.children) === null || de === void 0 ? void 0 : de[0];
          }
          get lastChild() {
            var de;
            return (de = this.children) === null || de === void 0 ? void 0 : de[this.children.length - 1];
          }
          get prev() {
            var de;
            return (de = this.parent) === null || de === void 0 ? void 0 : de.children[this.parent.children.indexOf(this) - 1];
          }
          get next() {
            var de;
            return (de = this.parent) === null || de === void 0 ? void 0 : de.children[this.parent.children.indexOf(this) + 1];
          }
          get rawName() {
            return this.hasExplicitNamespace ? this.fullName : this.name;
          }
          get fullName() {
            return this.namespace ? this.namespace + ":" + this.name : this.name;
          }
          get attrMap() {
            return Object.fromEntries(this.attrs.map((de) => [de.fullName, de.value]));
          }
        };
        function ie(de, Ue) {
          let Ge = de.map(Ue);
          return Ge.some((gt, ce) => gt !== de[ce]) ? Ge : de;
        }
        re.exports = { Node: Pe };
      } }), wn = he({ "src/language-html/conditional-comment.js"(L, re) {
        $();
        var { ParseSourceSpan: ge } = Zt(), Ee = [{ regex: /^(\[if([^\]]*)]>)(.*?)<!\s*\[endif]$/s, parse: ie }, { regex: /^\[if([^\]]*)]><!$/, parse: de }, { regex: /^<!\s*\[endif]$/, parse: Ue }];
        function Pe(Ge, gt) {
          if (Ge.value)
            for (let { regex: ce, parse: ve } of Ee) {
              let Ve = Ge.value.match(ce);
              if (Ve)
                return ve(Ge, gt, Ve);
            }
          return null;
        }
        function ie(Ge, gt, ce) {
          let [, ve, Ve, He] = ce, Je = 4 + ve.length, Qe = Ge.sourceSpan.start.moveBy(Je), yt = Qe.moveBy(He.length), [_t, ct] = (() => {
            try {
              return [!0, gt(He, Qe).children];
            } catch {
              return [!1, [{ type: "text", value: He, sourceSpan: new ge(Qe, yt) }]];
            }
          })();
          return { type: "ieConditionalComment", complete: _t, children: ct, condition: Ve.trim().replace(/\s+/g, " "), sourceSpan: Ge.sourceSpan, startSourceSpan: new ge(Ge.sourceSpan.start, Qe), endSourceSpan: new ge(yt, Ge.sourceSpan.end) };
        }
        function de(Ge, gt, ce) {
          let [, ve] = ce;
          return { type: "ieConditionalStartComment", condition: ve.trim().replace(/\s+/g, " "), sourceSpan: Ge.sourceSpan };
        }
        function Ue(Ge) {
          return { type: "ieConditionalEndComment", sourceSpan: Ge.sourceSpan };
        }
        re.exports = { parseIeConditionalComment: Pe };
      } }), iu = he({ "src/language-html/loc.js"(L, re) {
        $();
        function ge(Pe) {
          return Pe.sourceSpan.start.offset;
        }
        function Ee(Pe) {
          return Pe.sourceSpan.end.offset;
        }
        re.exports = { locStart: ge, locEnd: Ee };
      } }), ln = he({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/tags.js"(L) {
        $(), Object.defineProperty(L, "__esModule", { value: !0 }), function(Ue) {
          Ue[Ue.RAW_TEXT = 0] = "RAW_TEXT", Ue[Ue.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", Ue[Ue.PARSABLE_DATA = 2] = "PARSABLE_DATA";
        }(L.TagContentType || (L.TagContentType = {}));
        function re(Ue) {
          if (Ue[0] != ":")
            return [null, Ue];
          let Ge = Ue.indexOf(":", 1);
          if (Ge == -1)
            throw new Error(`Unsupported format "${Ue}" expecting ":namespace:name"`);
          return [Ue.slice(1, Ge), Ue.slice(Ge + 1)];
        }
        L.splitNsName = re;
        function ge(Ue) {
          return re(Ue)[1] === "ng-container";
        }
        L.isNgContainer = ge;
        function Ee(Ue) {
          return re(Ue)[1] === "ng-content";
        }
        L.isNgContent = Ee;
        function Pe(Ue) {
          return re(Ue)[1] === "ng-template";
        }
        L.isNgTemplate = Pe;
        function ie(Ue) {
          return Ue === null ? null : re(Ue)[0];
        }
        L.getNsPrefix = ie;
        function de(Ue, Ge) {
          return Ue ? `:${Ue}:${Ge}` : Ge;
        }
        L.mergeNsAndName = de, L.NAMED_ENTITIES = { Aacute: "Á", aacute: "á", Abreve: "Ă", abreve: "ă", ac: "∾", acd: "∿", acE: "∾̳", Acirc: "Â", acirc: "â", acute: "´", Acy: "А", acy: "а", AElig: "Æ", aelig: "æ", af: "⁡", Afr: "𝔄", afr: "𝔞", Agrave: "À", agrave: "à", alefsym: "ℵ", aleph: "ℵ", Alpha: "Α", alpha: "α", Amacr: "Ā", amacr: "ā", amalg: "⨿", AMP: "&", amp: "&", And: "⩓", and: "∧", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsd: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", Aogon: "Ą", aogon: "ą", Aopf: "𝔸", aopf: "𝕒", ap: "≈", apacir: "⩯", apE: "⩰", ape: "≊", apid: "≋", apos: "'", ApplyFunction: "⁡", approx: "≈", approxeq: "≊", Aring: "Å", aring: "å", Ascr: "𝒜", ascr: "𝒶", Assign: "≔", ast: "*", asymp: "≈", asympeq: "≍", Atilde: "Ã", atilde: "ã", Auml: "Ä", auml: "ä", awconint: "∳", awint: "⨑", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", Backslash: "∖", Barv: "⫧", barvee: "⊽", Barwed: "⌆", barwed: "⌅", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", Bcy: "Б", bcy: "б", bdquo: "„", becaus: "∵", Because: "∵", because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", Bernoullis: "ℬ", Beta: "Β", beta: "β", beth: "ℶ", between: "≬", Bfr: "𝔅", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bNot: "⫭", bnot: "⌐", Bopf: "𝔹", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxbox: "⧉", boxDL: "╗", boxDl: "╖", boxdL: "╕", boxdl: "┐", boxDR: "╔", boxDr: "╓", boxdR: "╒", boxdr: "┌", boxH: "═", boxh: "─", boxHD: "╦", boxHd: "╤", boxhD: "╥", boxhd: "┬", boxHU: "╩", boxHu: "╧", boxhU: "╨", boxhu: "┴", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxUL: "╝", boxUl: "╜", boxuL: "╛", boxul: "┘", boxUR: "╚", boxUr: "╙", boxuR: "╘", boxur: "└", boxV: "║", boxv: "│", boxVH: "╬", boxVh: "╫", boxvH: "╪", boxvh: "┼", boxVL: "╣", boxVl: "╢", boxvL: "╡", boxvl: "┤", boxVR: "╠", boxVr: "╟", boxvR: "╞", boxvr: "├", bprime: "‵", Breve: "˘", breve: "˘", brvbar: "¦", Bscr: "ℬ", bscr: "𝒷", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", Bumpeq: "≎", bumpeq: "≏", Cacute: "Ć", cacute: "ć", Cap: "⋒", cap: "∩", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", CapitalDifferentialD: "ⅅ", caps: "∩︀", caret: "⁁", caron: "ˇ", Cayleys: "ℭ", ccaps: "⩍", Ccaron: "Č", ccaron: "č", Ccedil: "Ç", ccedil: "ç", Ccirc: "Ĉ", ccirc: "ĉ", Cconint: "∰", ccups: "⩌", ccupssm: "⩐", Cdot: "Ċ", cdot: "ċ", cedil: "¸", Cedilla: "¸", cemptyv: "⦲", cent: "¢", CenterDot: "·", centerdot: "·", Cfr: "ℭ", cfr: "𝔠", CHcy: "Ч", chcy: "ч", check: "✓", checkmark: "✓", Chi: "Χ", chi: "χ", cir: "○", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", CircleDot: "⊙", circledR: "®", circledS: "Ⓢ", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", cirE: "⧃", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", clubs: "♣", clubsuit: "♣", Colon: "∷", colon: ":", Colone: "⩴", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", Congruent: "≡", Conint: "∯", conint: "∮", ContourIntegral: "∮", Copf: "ℂ", copf: "𝕔", coprod: "∐", Coproduct: "∐", COPY: "©", copy: "©", copysr: "℗", CounterClockwiseContourIntegral: "∳", crarr: "↵", Cross: "⨯", cross: "✗", Cscr: "𝒞", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", Cup: "⋓", cup: "∪", cupbrcap: "⩈", CupCap: "≍", cupcap: "⩆", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", Dagger: "‡", dagger: "†", daleth: "ℸ", Darr: "↡", dArr: "⇓", darr: "↓", dash: "‐", Dashv: "⫤", dashv: "⊣", dbkarow: "⤏", dblac: "˝", Dcaron: "Ď", dcaron: "ď", Dcy: "Д", dcy: "д", DD: "ⅅ", dd: "ⅆ", ddagger: "‡", ddarr: "⇊", DDotrahd: "⤑", ddotseq: "⩷", deg: "°", Del: "∇", Delta: "Δ", delta: "δ", demptyv: "⦱", dfisht: "⥿", Dfr: "𝔇", dfr: "𝔡", dHar: "⥥", dharl: "⇃", dharr: "⇂", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", diam: "⋄", Diamond: "⋄", diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", DifferentialD: "ⅆ", digamma: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", DJcy: "Ђ", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", Dopf: "𝔻", dopf: "𝕕", Dot: "¨", dot: "˙", DotDot: "⃜", doteq: "≐", doteqdot: "≑", DotEqual: "≐", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrow: "↓", Downarrow: "⇓", downarrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", DownBreve: "̑", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", DownTeeArrow: "↧", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", Dscr: "𝒟", dscr: "𝒹", DScy: "Ѕ", dscy: "ѕ", dsol: "⧶", Dstrok: "Đ", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", DZcy: "Џ", dzcy: "џ", dzigrarr: "⟿", Eacute: "É", eacute: "é", easter: "⩮", Ecaron: "Ě", ecaron: "ě", ecir: "≖", Ecirc: "Ê", ecirc: "ê", ecolon: "≕", Ecy: "Э", ecy: "э", eDDot: "⩷", Edot: "Ė", eDot: "≑", edot: "ė", ee: "ⅇ", efDot: "≒", Efr: "𝔈", efr: "𝔢", eg: "⪚", Egrave: "È", egrave: "è", egs: "⪖", egsdot: "⪘", el: "⪙", Element: "∈", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", Emacr: "Ē", emacr: "ē", empty: "∅", emptyset: "∅", EmptySmallSquare: "◻", emptyv: "∅", EmptyVerySmallSquare: "▫", emsp: " ", emsp13: " ", emsp14: " ", ENG: "Ŋ", eng: "ŋ", ensp: " ", Eogon: "Ę", eogon: "ę", Eopf: "𝔼", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", Epsilon: "Ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", Equal: "⩵", equals: "=", EqualTilde: "≂", equest: "≟", Equilibrium: "⇌", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erarr: "⥱", erDot: "≓", Escr: "ℰ", escr: "ℯ", esdot: "≐", Esim: "⩳", esim: "≂", Eta: "Η", eta: "η", ETH: "Ð", eth: "ð", Euml: "Ë", euml: "ë", euro: "€", excl: "!", exist: "∃", Exists: "∃", expectation: "ℰ", ExponentialE: "ⅇ", exponentiale: "ⅇ", fallingdotseq: "≒", Fcy: "Ф", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", Ffr: "𝔉", ffr: "𝔣", filig: "ﬁ", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", Fopf: "𝔽", fopf: "𝕗", ForAll: "∀", forall: "∀", fork: "⋔", forkv: "⫙", Fouriertrf: "ℱ", fpartint: "⨍", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", Fscr: "ℱ", fscr: "𝒻", gacute: "ǵ", Gamma: "Γ", gamma: "γ", Gammad: "Ϝ", gammad: "ϝ", gap: "⪆", Gbreve: "Ğ", gbreve: "ğ", Gcedil: "Ģ", Gcirc: "Ĝ", gcirc: "ĝ", Gcy: "Г", gcy: "г", Gdot: "Ġ", gdot: "ġ", gE: "≧", ge: "≥", gEl: "⪌", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", ges: "⩾", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", Gfr: "𝔊", gfr: "𝔤", Gg: "⋙", gg: "≫", ggg: "⋙", gimel: "ℷ", GJcy: "Ѓ", gjcy: "ѓ", gl: "≷", gla: "⪥", glE: "⪒", glj: "⪤", gnap: "⪊", gnapprox: "⪊", gnE: "≩", gne: "⪈", gneq: "⪈", gneqq: "≩", gnsim: "⋧", Gopf: "𝔾", gopf: "𝕘", grave: "`", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", GT: ">", Gt: "≫", gt: ">", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", Hacek: "ˇ", hairsp: " ", half: "½", hamilt: "ℋ", HARDcy: "Ъ", hardcy: "ъ", hArr: "⇔", harr: "↔", harrcir: "⥈", harrw: "↭", Hat: "^", hbar: "ℏ", Hcirc: "Ĥ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", Hfr: "ℌ", hfr: "𝔥", HilbertSpace: "ℋ", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", Hopf: "ℍ", hopf: "𝕙", horbar: "―", HorizontalLine: "─", Hscr: "ℋ", hscr: "𝒽", hslash: "ℏ", Hstrok: "Ħ", hstrok: "ħ", HumpDownHump: "≎", HumpEqual: "≏", hybull: "⁃", hyphen: "‐", Iacute: "Í", iacute: "í", ic: "⁣", Icirc: "Î", icirc: "î", Icy: "И", icy: "и", Idot: "İ", IEcy: "Е", iecy: "е", iexcl: "¡", iff: "⇔", Ifr: "ℑ", ifr: "𝔦", Igrave: "Ì", igrave: "ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", IJlig: "Ĳ", ijlig: "ĳ", Im: "ℑ", Imacr: "Ī", imacr: "ī", image: "ℑ", ImaginaryI: "ⅈ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", imof: "⊷", imped: "Ƶ", Implies: "⇒", in: "∈", incare: "℅", infin: "∞", infintie: "⧝", inodot: "ı", Int: "∬", int: "∫", intcal: "⊺", integers: "ℤ", Integral: "∫", intercal: "⊺", Intersection: "⋂", intlarhk: "⨗", intprod: "⨼", InvisibleComma: "⁣", InvisibleTimes: "⁢", IOcy: "Ё", iocy: "ё", Iogon: "Į", iogon: "į", Iopf: "𝕀", iopf: "𝕚", Iota: "Ι", iota: "ι", iprod: "⨼", iquest: "¿", Iscr: "ℐ", iscr: "𝒾", isin: "∈", isindot: "⋵", isinE: "⋹", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", Itilde: "Ĩ", itilde: "ĩ", Iukcy: "І", iukcy: "і", Iuml: "Ï", iuml: "ï", Jcirc: "Ĵ", jcirc: "ĵ", Jcy: "Й", jcy: "й", Jfr: "𝔍", jfr: "𝔧", jmath: "ȷ", Jopf: "𝕁", jopf: "𝕛", Jscr: "𝒥", jscr: "𝒿", Jsercy: "Ј", jsercy: "ј", Jukcy: "Є", jukcy: "є", Kappa: "Κ", kappa: "κ", kappav: "ϰ", Kcedil: "Ķ", kcedil: "ķ", Kcy: "К", kcy: "к", Kfr: "𝔎", kfr: "𝔨", kgreen: "ĸ", KHcy: "Х", khcy: "х", KJcy: "Ќ", kjcy: "ќ", Kopf: "𝕂", kopf: "𝕜", Kscr: "𝒦", kscr: "𝓀", lAarr: "⇚", Lacute: "Ĺ", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", Lambda: "Λ", lambda: "λ", Lang: "⟪", lang: "⟨", langd: "⦑", langle: "⟨", lap: "⪅", Laplacetrf: "ℒ", laquo: "«", Larr: "↞", lArr: "⇐", larr: "←", larrb: "⇤", larrbfs: "⤟", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", lat: "⪫", lAtail: "⤛", latail: "⤙", late: "⪭", lates: "⪭︀", lBarr: "⤎", lbarr: "⤌", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", Lcaron: "Ľ", lcaron: "ľ", Lcedil: "Ļ", lcedil: "ļ", lceil: "⌈", lcub: "{", Lcy: "Л", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", lE: "≦", le: "≤", LeftAngleBracket: "⟨", LeftArrow: "←", Leftarrow: "⇐", leftarrow: "←", LeftArrowBar: "⇤", LeftArrowRightArrow: "⇆", leftarrowtail: "↢", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", LeftRightArrow: "↔", Leftrightarrow: "⇔", leftrightarrow: "↔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", LeftRightVector: "⥎", LeftTee: "⊣", LeftTeeArrow: "↤", LeftTeeVector: "⥚", leftthreetimes: "⋋", LeftTriangle: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", LeftVectorBar: "⥒", lEg: "⪋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", les: "⩽", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", lessgtr: "≶", LessLess: "⪡", lesssim: "≲", LessSlantEqual: "⩽", LessTilde: "≲", lfisht: "⥼", lfloor: "⌊", Lfr: "𝔏", lfr: "𝔩", lg: "≶", lgE: "⪑", lHar: "⥢", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", LJcy: "Љ", ljcy: "љ", Ll: "⋘", ll: "≪", llarr: "⇇", llcorner: "⌞", Lleftarrow: "⇚", llhard: "⥫", lltri: "◺", Lmidot: "Ŀ", lmidot: "ŀ", lmoust: "⎰", lmoustache: "⎰", lnap: "⪉", lnapprox: "⪉", lnE: "≨", lne: "⪇", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", LongLeftArrow: "⟵", Longleftarrow: "⟸", longleftarrow: "⟵", LongLeftRightArrow: "⟷", Longleftrightarrow: "⟺", longleftrightarrow: "⟷", longmapsto: "⟼", LongRightArrow: "⟶", Longrightarrow: "⟹", longrightarrow: "⟶", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", Lopf: "𝕃", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", LowerLeftArrow: "↙", LowerRightArrow: "↘", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", Lscr: "ℒ", lscr: "𝓁", Lsh: "↰", lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", Lstrok: "Ł", lstrok: "ł", LT: "<", Lt: "≪", lt: "<", ltcc: "⪦", ltcir: "⩹", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltri: "◃", ltrie: "⊴", ltrif: "◂", ltrPar: "⦖", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", macr: "¯", male: "♂", malt: "✠", maltese: "✠", Map: "⤅", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", Mcy: "М", mcy: "м", mdash: "—", mDDot: "∺", measuredangle: "∡", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", mfr: "𝔪", mho: "℧", micro: "µ", mid: "∣", midast: "*", midcir: "⫰", middot: "·", minus: "−", minusb: "⊟", minusd: "∸", minusdu: "⨪", MinusPlus: "∓", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", Mopf: "𝕄", mopf: "𝕞", mp: "∓", Mscr: "ℳ", mscr: "𝓂", mstpos: "∾", Mu: "Μ", mu: "μ", multimap: "⊸", mumap: "⊸", nabla: "∇", Nacute: "Ń", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natur: "♮", natural: "♮", naturals: "ℕ", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", Ncaron: "Ň", ncaron: "ň", Ncedil: "Ņ", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", Ncy: "Н", ncy: "н", ndash: "–", ne: "≠", nearhk: "⤤", neArr: "⇗", nearr: "↗", nearrow: "↗", nedot: "≐̸", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", nequiv: "≢", nesear: "⤨", nesim: "≂̸", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: `
`, nexist: "∄", nexists: "∄", Nfr: "𝔑", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", nGg: "⋙̸", ngsim: "≵", nGt: "≫⃒", ngt: "≯", ngtr: "≯", nGtv: "≫̸", nhArr: "⇎", nharr: "↮", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", NJcy: "Њ", njcy: "њ", nlArr: "⇍", nlarr: "↚", nldr: "‥", nlE: "≦̸", nle: "≰", nLeftarrow: "⇍", nleftarrow: "↚", nLeftrightarrow: "⇎", nleftrightarrow: "↮", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nLl: "⋘̸", nlsim: "≴", nLt: "≪⃒", nlt: "≮", nltri: "⋪", nltrie: "⋬", nLtv: "≪̸", nmid: "∤", NoBreak: "⁠", NonBreakingSpace: " ", Nopf: "ℕ", nopf: "𝕟", Not: "⫬", not: "¬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", notin: "∉", notindot: "⋵̸", notinE: "⋹̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", NotLeftTriangle: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangle: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", npar: "∦", nparallel: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", npre: "⪯̸", nprec: "⊀", npreceq: "⪯̸", nrArr: "⇏", nrarr: "↛", nrarrc: "⤳̸", nrarrw: "↝̸", nRightarrow: "⇏", nrightarrow: "↛", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", Nscr: "𝒩", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", Ntilde: "Ñ", ntilde: "ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", Nu: "Ν", nu: "ν", num: "#", numero: "№", numsp: " ", nvap: "≍⃒", nVDash: "⊯", nVdash: "⊮", nvDash: "⊭", nvdash: "⊬", nvge: "≥⃒", nvgt: ">⃒", nvHarr: "⤄", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwarhk: "⤣", nwArr: "⇖", nwarr: "↖", nwarrow: "↖", nwnear: "⤧", Oacute: "Ó", oacute: "ó", oast: "⊛", ocir: "⊚", Ocirc: "Ô", ocirc: "ô", Ocy: "О", ocy: "о", odash: "⊝", Odblac: "Ő", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", OElig: "Œ", oelig: "œ", ofcir: "⦿", Ofr: "𝔒", ofr: "𝔬", ogon: "˛", Ograve: "Ò", ograve: "ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", Omacr: "Ō", omacr: "ō", Omega: "Ω", omega: "ω", Omicron: "Ο", omicron: "ο", omid: "⦶", ominus: "⊖", Oopf: "𝕆", oopf: "𝕠", opar: "⦷", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", operp: "⦹", oplus: "⊕", Or: "⩔", or: "∨", orarr: "↻", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oS: "Ⓢ", Oscr: "𝒪", oscr: "ℴ", Oslash: "Ø", oslash: "ø", osol: "⊘", Otilde: "Õ", otilde: "õ", Otimes: "⨷", otimes: "⊗", otimesas: "⨶", Ouml: "Ö", ouml: "ö", ovbar: "⌽", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", par: "∥", para: "¶", parallel: "∥", parsim: "⫳", parsl: "⫽", part: "∂", PartialD: "∂", Pcy: "П", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", Pfr: "𝔓", pfr: "𝔭", Phi: "Φ", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", Pi: "Π", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plus: "+", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plusdo: "∔", plusdu: "⨥", pluse: "⩲", PlusMinus: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", Poincareplane: "ℌ", pointint: "⨕", Popf: "ℙ", popf: "𝕡", pound: "£", Pr: "⪻", pr: "≺", prap: "⪷", prcue: "≼", prE: "⪳", pre: "⪯", prec: "≺", precapprox: "⪷", preccurlyeq: "≼", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", precsim: "≾", Prime: "″", prime: "′", primes: "ℙ", prnap: "⪹", prnE: "⪵", prnsim: "⋨", prod: "∏", Product: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", Proportion: "∷", Proportional: "∝", propto: "∝", prsim: "≾", prurel: "⊰", Pscr: "𝒫", pscr: "𝓅", Psi: "Ψ", psi: "ψ", puncsp: " ", Qfr: "𝔔", qfr: "𝔮", qint: "⨌", Qopf: "ℚ", qopf: "𝕢", qprime: "⁗", Qscr: "𝒬", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", QUOT: '"', quot: '"', rAarr: "⇛", race: "∽̱", Racute: "Ŕ", racute: "ŕ", radic: "√", raemptyv: "⦳", Rang: "⟫", rang: "⟩", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "»", Rarr: "↠", rArr: "⇒", rarr: "→", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", Rarrtl: "⤖", rarrtl: "↣", rarrw: "↝", rAtail: "⤜", ratail: "⤚", ratio: "∶", rationals: "ℚ", RBarr: "⤐", rBarr: "⤏", rbarr: "⤍", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", Rcaron: "Ř", rcaron: "ř", Rcedil: "Ŗ", rcedil: "ŗ", rceil: "⌉", rcub: "}", Rcy: "Р", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", Re: "ℜ", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", rect: "▭", REG: "®", reg: "®", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", rfisht: "⥽", rfloor: "⌋", Rfr: "ℜ", rfr: "𝔯", rHar: "⥤", rhard: "⇁", rharu: "⇀", rharul: "⥬", Rho: "Ρ", rho: "ρ", rhov: "ϱ", RightAngleBracket: "⟩", RightArrow: "→", Rightarrow: "⇒", rightarrow: "→", RightArrowBar: "⇥", RightArrowLeftArrow: "⇄", rightarrowtail: "↣", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", RightTee: "⊢", RightTeeArrow: "↦", RightTeeVector: "⥛", rightthreetimes: "⋌", RightTriangle: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", RightVectorBar: "⥓", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", Ropf: "ℝ", ropf: "𝕣", roplus: "⨮", rotimes: "⨵", RoundImplies: "⥰", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", Rrightarrow: "⇛", rsaquo: "›", Rscr: "ℛ", rscr: "𝓇", Rsh: "↱", rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", RuleDelayed: "⧴", ruluhar: "⥨", rx: "℞", Sacute: "Ś", sacute: "ś", sbquo: "‚", Sc: "⪼", sc: "≻", scap: "⪸", Scaron: "Š", scaron: "š", sccue: "≽", scE: "⪴", sce: "⪰", Scedil: "Ş", scedil: "ş", Scirc: "Ŝ", scirc: "ŝ", scnap: "⪺", scnE: "⪶", scnsim: "⋩", scpolint: "⨓", scsim: "≿", Scy: "С", scy: "с", sdot: "⋅", sdotb: "⊡", sdote: "⩦", searhk: "⤥", seArr: "⇘", searr: "↘", searrow: "↘", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", Sfr: "𝔖", sfr: "𝔰", sfrown: "⌢", sharp: "♯", SHCHcy: "Щ", shchcy: "щ", SHcy: "Ш", shcy: "ш", ShortDownArrow: "↓", ShortLeftArrow: "←", shortmid: "∣", shortparallel: "∥", ShortRightArrow: "→", ShortUpArrow: "↑", shy: "­", Sigma: "Σ", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", SmallCircle: "∘", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", SOFTcy: "Ь", softcy: "ь", sol: "/", solb: "⧄", solbar: "⌿", Sopf: "𝕊", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", Sqrt: "√", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", squ: "□", Square: "□", square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", squarf: "▪", squf: "▪", srarr: "→", Sscr: "𝒮", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", Star: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", Sub: "⋐", sub: "⊂", subdot: "⪽", subE: "⫅", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", Subset: "⋐", subset: "⊂", subseteq: "⊆", subseteqq: "⫅", SubsetEqual: "⊆", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succ: "≻", succapprox: "⪸", succcurlyeq: "≽", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", SuchThat: "∋", Sum: "∑", sum: "∑", sung: "♪", Sup: "⋑", sup: "⊃", sup1: "¹", sup2: "²", sup3: "³", supdot: "⪾", supdsub: "⫘", supE: "⫆", supe: "⊇", supedot: "⫄", Superset: "⊃", SupersetEqual: "⊇", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", Supset: "⋑", supset: "⊃", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swarhk: "⤦", swArr: "⇙", swarr: "↙", swarrow: "↙", swnwar: "⤪", szlig: "ß", Tab: "	", target: "⌖", Tau: "Τ", tau: "τ", tbrk: "⎴", Tcaron: "Ť", tcaron: "ť", Tcedil: "Ţ", tcedil: "ţ", Tcy: "Т", tcy: "т", tdot: "⃛", telrec: "⌕", Tfr: "𝔗", tfr: "𝔱", there4: "∴", Therefore: "∴", therefore: "∴", Theta: "Θ", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", ThickSpace: "  ", thinsp: " ", ThinSpace: " ", thkap: "≈", thksim: "∼", THORN: "Þ", thorn: "þ", Tilde: "∼", tilde: "˜", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", times: "×", timesb: "⊠", timesbar: "⨱", timesd: "⨰", tint: "∭", toea: "⤨", top: "⊤", topbot: "⌶", topcir: "⫱", Topf: "𝕋", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", TRADE: "™", trade: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", TripleDot: "⃛", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", Tscr: "𝒯", tscr: "𝓉", TScy: "Ц", tscy: "ц", TSHcy: "Ћ", tshcy: "ћ", Tstrok: "Ŧ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", Uacute: "Ú", uacute: "ú", Uarr: "↟", uArr: "⇑", uarr: "↑", Uarrocir: "⥉", Ubrcy: "Ў", ubrcy: "ў", Ubreve: "Ŭ", ubreve: "ŭ", Ucirc: "Û", ucirc: "û", Ucy: "У", ucy: "у", udarr: "⇅", Udblac: "Ű", udblac: "ű", udhar: "⥮", ufisht: "⥾", Ufr: "𝔘", ufr: "𝔲", Ugrave: "Ù", ugrave: "ù", uHar: "⥣", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", Umacr: "Ū", umacr: "ū", uml: "¨", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", uogon: "ų", Uopf: "𝕌", uopf: "𝕦", UpArrow: "↑", Uparrow: "⇑", uparrow: "↑", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", UpDownArrow: "↕", Updownarrow: "⇕", updownarrow: "↕", UpEquilibrium: "⥮", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", UpperLeftArrow: "↖", UpperRightArrow: "↗", Upsi: "ϒ", upsi: "υ", upsih: "ϒ", Upsilon: "Υ", upsilon: "υ", UpTee: "⊥", UpTeeArrow: "↥", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", Uring: "Ů", uring: "ů", urtri: "◹", Uscr: "𝒰", uscr: "𝓊", utdot: "⋰", Utilde: "Ũ", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", Uuml: "Ü", uuml: "ü", uwangle: "⦧", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", vArr: "⇕", varr: "↕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", Vbar: "⫫", vBar: "⫨", vBarv: "⫩", Vcy: "В", vcy: "в", VDash: "⊫", Vdash: "⊩", vDash: "⊨", vdash: "⊢", Vdashl: "⫦", Vee: "⋁", vee: "∨", veebar: "⊻", veeeq: "≚", vellip: "⋮", Verbar: "‖", verbar: "|", Vert: "‖", vert: "|", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", Vopf: "𝕍", vopf: "𝕧", vprop: "∝", vrtri: "⊳", Vscr: "𝒱", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", Vvdash: "⊪", vzigzag: "⦚", Wcirc: "Ŵ", wcirc: "ŵ", wedbar: "⩟", Wedge: "⋀", wedge: "∧", wedgeq: "≙", weierp: "℘", Wfr: "𝔚", wfr: "𝔴", Wopf: "𝕎", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", Wscr: "𝒲", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", Xfr: "𝔛", xfr: "𝔵", xhArr: "⟺", xharr: "⟷", Xi: "Ξ", xi: "ξ", xlArr: "⟸", xlarr: "⟵", xmap: "⟼", xnis: "⋻", xodot: "⨀", Xopf: "𝕏", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrArr: "⟹", xrarr: "⟶", Xscr: "𝒳", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", Yacute: "Ý", yacute: "ý", YAcy: "Я", yacy: "я", Ycirc: "Ŷ", ycirc: "ŷ", Ycy: "Ы", ycy: "ы", yen: "¥", Yfr: "𝔜", yfr: "𝔶", YIcy: "Ї", yicy: "ї", Yopf: "𝕐", yopf: "𝕪", Yscr: "𝒴", yscr: "𝓎", YUcy: "Ю", yucy: "ю", Yuml: "Ÿ", yuml: "ÿ", Zacute: "Ź", zacute: "ź", Zcaron: "Ž", zcaron: "ž", Zcy: "З", zcy: "з", Zdot: "Ż", zdot: "ż", zeetrf: "ℨ", ZeroWidthSpace: "​", Zeta: "Ζ", zeta: "ζ", Zfr: "ℨ", zfr: "𝔷", ZHcy: "Ж", zhcy: "ж", zigrarr: "⇝", Zopf: "ℤ", zopf: "𝕫", Zscr: "𝒵", zscr: "𝓏", zwj: "‍", zwnj: "‌" }, L.NGSP_UNICODE = "", L.NAMED_ENTITIES.ngsp = L.NGSP_UNICODE;
      } }), su = he({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/html_tags.js"(L) {
        $(), Object.defineProperty(L, "__esModule", { value: !0 });
        var re = ln(), ge = class {
          constructor() {
            let { closedByChildren: de, implicitNamespacePrefix: Ue, contentType: Ge = re.TagContentType.PARSABLE_DATA, closedByParent: gt = !1, isVoid: ce = !1, ignoreFirstLf: ve = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.closedByChildren = {}, this.closedByParent = !1, this.canSelfClose = !1, de && de.length > 0 && de.forEach((Ve) => this.closedByChildren[Ve] = !0), this.isVoid = ce, this.closedByParent = gt || ce, this.implicitNamespacePrefix = Ue || null, this.contentType = Ge, this.ignoreFirstLf = ve;
          }
          isClosedByChild(de) {
            return this.isVoid || de.toLowerCase() in this.closedByChildren;
          }
        };
        L.HtmlTagDefinition = ge;
        var Ee, Pe;
        function ie(de) {
          return Pe || (Ee = new ge(), Pe = { base: new ge({ isVoid: !0 }), meta: new ge({ isVoid: !0 }), area: new ge({ isVoid: !0 }), embed: new ge({ isVoid: !0 }), link: new ge({ isVoid: !0 }), img: new ge({ isVoid: !0 }), input: new ge({ isVoid: !0 }), param: new ge({ isVoid: !0 }), hr: new ge({ isVoid: !0 }), br: new ge({ isVoid: !0 }), source: new ge({ isVoid: !0 }), track: new ge({ isVoid: !0 }), wbr: new ge({ isVoid: !0 }), p: new ge({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: !0 }), thead: new ge({ closedByChildren: ["tbody", "tfoot"] }), tbody: new ge({ closedByChildren: ["tbody", "tfoot"], closedByParent: !0 }), tfoot: new ge({ closedByChildren: ["tbody"], closedByParent: !0 }), tr: new ge({ closedByChildren: ["tr"], closedByParent: !0 }), td: new ge({ closedByChildren: ["td", "th"], closedByParent: !0 }), th: new ge({ closedByChildren: ["td", "th"], closedByParent: !0 }), col: new ge({ isVoid: !0 }), svg: new ge({ implicitNamespacePrefix: "svg" }), math: new ge({ implicitNamespacePrefix: "math" }), li: new ge({ closedByChildren: ["li"], closedByParent: !0 }), dt: new ge({ closedByChildren: ["dt", "dd"] }), dd: new ge({ closedByChildren: ["dt", "dd"], closedByParent: !0 }), rb: new ge({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }), rt: new ge({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }), rtc: new ge({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: !0 }), rp: new ge({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }), optgroup: new ge({ closedByChildren: ["optgroup"], closedByParent: !0 }), option: new ge({ closedByChildren: ["option", "optgroup"], closedByParent: !0 }), pre: new ge({ ignoreFirstLf: !0 }), listing: new ge({ ignoreFirstLf: !0 }), style: new ge({ contentType: re.TagContentType.RAW_TEXT }), script: new ge({ contentType: re.TagContentType.RAW_TEXT }), title: new ge({ contentType: re.TagContentType.ESCAPABLE_RAW_TEXT }), textarea: new ge({ contentType: re.TagContentType.ESCAPABLE_RAW_TEXT, ignoreFirstLf: !0 }) }), Pe[de] || Ee;
        }
        L.getHtmlTagDefinition = ie;
      } }), Gu = he({ "node_modules/angular-html-parser/lib/compiler/src/ast_path.js"(L) {
        $(), Object.defineProperty(L, "__esModule", { value: !0 });
        var re = class {
          constructor(ge) {
            let Ee = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
            this.path = ge, this.position = Ee;
          }
          get empty() {
            return !this.path || !this.path.length;
          }
          get head() {
            return this.path[0];
          }
          get tail() {
            return this.path[this.path.length - 1];
          }
          parentOf(ge) {
            return ge && this.path[this.path.indexOf(ge) - 1];
          }
          childOf(ge) {
            return this.path[this.path.indexOf(ge) + 1];
          }
          first(ge) {
            for (let Ee = this.path.length - 1; Ee >= 0; Ee--) {
              let Pe = this.path[Ee];
              if (Pe instanceof ge)
                return Pe;
            }
          }
          push(ge) {
            this.path.push(ge);
          }
          pop() {
            return this.path.pop();
          }
        };
        L.AstPath = re;
      } }), au = he({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/ast.js"(L) {
        $(), Object.defineProperty(L, "__esModule", { value: !0 });
        var re = Gu(), ge = class {
          constructor(Je, Qe, yt) {
            this.value = Je, this.sourceSpan = Qe, this.i18n = yt, this.type = "text";
          }
          visit(Je, Qe) {
            return Je.visitText(this, Qe);
          }
        };
        L.Text = ge;
        var Ee = class {
          constructor(Je, Qe) {
            this.value = Je, this.sourceSpan = Qe, this.type = "cdata";
          }
          visit(Je, Qe) {
            return Je.visitCdata(this, Qe);
          }
        };
        L.CDATA = Ee;
        var Pe = class {
          constructor(Je, Qe, yt, _t, ct, kt) {
            this.switchValue = Je, this.type = Qe, this.cases = yt, this.sourceSpan = _t, this.switchValueSourceSpan = ct, this.i18n = kt;
          }
          visit(Je, Qe) {
            return Je.visitExpansion(this, Qe);
          }
        };
        L.Expansion = Pe;
        var ie = class {
          constructor(Je, Qe, yt, _t, ct) {
            this.value = Je, this.expression = Qe, this.sourceSpan = yt, this.valueSourceSpan = _t, this.expSourceSpan = ct;
          }
          visit(Je, Qe) {
            return Je.visitExpansionCase(this, Qe);
          }
        };
        L.ExpansionCase = ie;
        var de = class {
          constructor(Je, Qe, yt) {
            let _t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, ct = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, kt = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null;
            this.name = Je, this.value = Qe, this.sourceSpan = yt, this.valueSpan = _t, this.nameSpan = ct, this.i18n = kt, this.type = "attribute";
          }
          visit(Je, Qe) {
            return Je.visitAttribute(this, Qe);
          }
        };
        L.Attribute = de;
        var Ue = class {
          constructor(Je, Qe, yt, _t) {
            let ct = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, kt = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, $t = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, ir = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null;
            this.name = Je, this.attrs = Qe, this.children = yt, this.sourceSpan = _t, this.startSourceSpan = ct, this.endSourceSpan = kt, this.nameSpan = $t, this.i18n = ir, this.type = "element";
          }
          visit(Je, Qe) {
            return Je.visitElement(this, Qe);
          }
        };
        L.Element = Ue;
        var Ge = class {
          constructor(Je, Qe) {
            this.value = Je, this.sourceSpan = Qe, this.type = "comment";
          }
          visit(Je, Qe) {
            return Je.visitComment(this, Qe);
          }
        };
        L.Comment = Ge;
        var gt = class {
          constructor(Je, Qe) {
            this.value = Je, this.sourceSpan = Qe, this.type = "docType";
          }
          visit(Je, Qe) {
            return Je.visitDocType(this, Qe);
          }
        };
        L.DocType = gt;
        function ce(Je, Qe) {
          let yt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, _t = [], ct = Je.visit ? (kt) => Je.visit(kt, yt) || kt.visit(Je, yt) : (kt) => kt.visit(Je, yt);
          return Qe.forEach((kt) => {
            let $t = ct(kt);
            $t && _t.push($t);
          }), _t;
        }
        L.visitAll = ce;
        var ve = class {
          constructor() {
          }
          visitElement(Je, Qe) {
            this.visitChildren(Qe, (yt) => {
              yt(Je.attrs), yt(Je.children);
            });
          }
          visitAttribute(Je, Qe) {
          }
          visitText(Je, Qe) {
          }
          visitCdata(Je, Qe) {
          }
          visitComment(Je, Qe) {
          }
          visitDocType(Je, Qe) {
          }
          visitExpansion(Je, Qe) {
            return this.visitChildren(Qe, (yt) => {
              yt(Je.cases);
            });
          }
          visitExpansionCase(Je, Qe) {
          }
          visitChildren(Je, Qe) {
            let yt = [], _t = this;
            function ct(kt) {
              kt && yt.push(ce(_t, kt, Je));
            }
            return Qe(ct), Array.prototype.concat.apply([], yt);
          }
        };
        L.RecursiveVisitor = ve;
        function Ve(Je) {
          let Qe = Je.sourceSpan.start.offset, yt = Je.sourceSpan.end.offset;
          return Je instanceof Ue && (Je.endSourceSpan ? yt = Je.endSourceSpan.end.offset : Je.children && Je.children.length && (yt = Ve(Je.children[Je.children.length - 1]).end)), { start: Qe, end: yt };
        }
        function He(Je, Qe) {
          let yt = [], _t = new class extends ve {
            visit(ct, kt) {
              let $t = Ve(ct);
              if ($t.start <= Qe && Qe < $t.end)
                yt.push(ct);
              else
                return !0;
            }
          }();
          return ce(_t, Je), new re.AstPath(yt, Qe);
        }
        L.findNode = He;
      } }), Ju = he({ "node_modules/angular-html-parser/lib/compiler/src/assertions.js"(L) {
        $(), Object.defineProperty(L, "__esModule", { value: !0 });
        function re(Pe, ie) {
          if (ie != null) {
            if (!Array.isArray(ie))
              throw new Error(`Expected '${Pe}' to be an array of strings.`);
            for (let de = 0; de < ie.length; de += 1)
              if (typeof ie[de] != "string")
                throw new Error(`Expected '${Pe}' to be an array of strings.`);
          }
        }
        L.assertArrayOfStrings = re;
        var ge = [/^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
        function Ee(Pe, ie) {
          if (ie != null && !(Array.isArray(ie) && ie.length == 2))
            throw new Error(`Expected '${Pe}' to be an array, [start, end].`);
          if (ie != null) {
            let de = ie[0], Ue = ie[1];
            ge.forEach((Ge) => {
              if (Ge.test(de) || Ge.test(Ue))
                throw new Error(`['${de}', '${Ue}'] contains unusable interpolation symbol.`);
            });
          }
        }
        L.assertInterpolationSymbols = Ee;
      } }), Xu = he({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/interpolation_config.js"(L) {
        $(), Object.defineProperty(L, "__esModule", { value: !0 });
        var re = Ju(), ge = class {
          constructor(Ee, Pe) {
            this.start = Ee, this.end = Pe;
          }
          static fromArray(Ee) {
            return Ee ? (re.assertInterpolationSymbols("interpolation", Ee), new ge(Ee[0], Ee[1])) : L.DEFAULT_INTERPOLATION_CONFIG;
          }
        };
        L.InterpolationConfig = ge, L.DEFAULT_INTERPOLATION_CONFIG = new ge("{{", "}}");
      } }), ou = he({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/lexer.js"(L) {
        $(), Object.defineProperty(L, "__esModule", { value: !0 });
        var re = Ft(), ge = Zt(), Ee = Xu(), Pe = ln(), ie;
        (function(z) {
          z[z.TAG_OPEN_START = 0] = "TAG_OPEN_START", z[z.TAG_OPEN_END = 1] = "TAG_OPEN_END", z[z.TAG_OPEN_END_VOID = 2] = "TAG_OPEN_END_VOID", z[z.TAG_CLOSE = 3] = "TAG_CLOSE", z[z.TEXT = 4] = "TEXT", z[z.ESCAPABLE_RAW_TEXT = 5] = "ESCAPABLE_RAW_TEXT", z[z.RAW_TEXT = 6] = "RAW_TEXT", z[z.COMMENT_START = 7] = "COMMENT_START", z[z.COMMENT_END = 8] = "COMMENT_END", z[z.CDATA_START = 9] = "CDATA_START", z[z.CDATA_END = 10] = "CDATA_END", z[z.ATTR_NAME = 11] = "ATTR_NAME", z[z.ATTR_QUOTE = 12] = "ATTR_QUOTE", z[z.ATTR_VALUE = 13] = "ATTR_VALUE", z[z.DOC_TYPE_START = 14] = "DOC_TYPE_START", z[z.DOC_TYPE_END = 15] = "DOC_TYPE_END", z[z.EXPANSION_FORM_START = 16] = "EXPANSION_FORM_START", z[z.EXPANSION_CASE_VALUE = 17] = "EXPANSION_CASE_VALUE", z[z.EXPANSION_CASE_EXP_START = 18] = "EXPANSION_CASE_EXP_START", z[z.EXPANSION_CASE_EXP_END = 19] = "EXPANSION_CASE_EXP_END", z[z.EXPANSION_FORM_END = 20] = "EXPANSION_FORM_END", z[z.EOF = 21] = "EOF";
        })(ie = L.TokenType || (L.TokenType = {}));
        var de = class {
          constructor(z, le, We) {
            this.type = z, this.parts = le, this.sourceSpan = We;
          }
        };
        L.Token = de;
        var Ue = class extends ge.ParseError {
          constructor(z, le, We) {
            super(We, z), this.tokenType = le;
          }
        };
        L.TokenError = Ue;
        var Ge = class {
          constructor(z, le) {
            this.tokens = z, this.errors = le;
          }
        };
        L.TokenizeResult = Ge;
        function gt(z, le, We) {
          let Me = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          return new Je(new ge.ParseSourceFile(z, le), We, Me).tokenize();
        }
        L.tokenize = gt;
        var ce = /\r\n?/g;
        function ve(z) {
          return `Unexpected character "${z === re.$EOF ? "EOF" : String.fromCharCode(z)}"`;
        }
        function Ve(z) {
          return `Unknown entity "${z}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
        }
        var He = class {
          constructor(z) {
            this.error = z;
          }
        }, Je = class {
          constructor(z, le, We) {
            this._getTagContentType = le, this._currentTokenStart = null, this._currentTokenType = null, this._expansionCaseStack = [], this._inInterpolation = !1, this._fullNameStack = [], this.tokens = [], this.errors = [], this._tokenizeIcu = We.tokenizeExpansionForms || !1, this._interpolationConfig = We.interpolationConfig || Ee.DEFAULT_INTERPOLATION_CONFIG, this._leadingTriviaCodePoints = We.leadingTriviaChars && We.leadingTriviaChars.map((at) => at.codePointAt(0) || 0), this._canSelfClose = We.canSelfClose || !1, this._allowHtmComponentClosingTags = We.allowHtmComponentClosingTags || !1;
            let Me = We.range || { endPos: z.content.length, startPos: 0, startLine: 0, startCol: 0 };
            this._cursor = We.escapedString ? new Ut(z, Me) : new Vt(z, Me);
            try {
              this._cursor.init();
            } catch (at) {
              this.handleError(at);
            }
          }
          _processCarriageReturns(z) {
            return z.replace(ce, `
`);
          }
          tokenize() {
            for (; this._cursor.peek() !== re.$EOF; ) {
              let z = this._cursor.clone();
              try {
                if (this._attemptCharCode(re.$LT))
                  if (this._attemptCharCode(re.$BANG))
                    this._attemptStr("[CDATA[") ? this._consumeCdata(z) : this._attemptStr("--") ? this._consumeComment(z) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(z) : this._consumeBogusComment(z);
                  else if (this._attemptCharCode(re.$SLASH))
                    this._consumeTagClose(z);
                  else {
                    let le = this._cursor.clone();
                    this._attemptCharCode(re.$QUESTION) ? (this._cursor = le, this._consumeBogusComment(z)) : this._consumeTagOpen(z);
                  }
                else
                  this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeText();
              } catch (le) {
                this.handleError(le);
              }
            }
            return this._beginToken(ie.EOF), this._endToken([]), new Ge(Ot(this.tokens), this.errors);
          }
          _tokenizeExpansionForm() {
            if (this.isExpansionFormStart())
              return this._consumeExpansionFormStart(), !0;
            if ($t(this._cursor.peek()) && this._isInExpansionForm())
              return this._consumeExpansionCaseStart(), !0;
            if (this._cursor.peek() === re.$RBRACE) {
              if (this._isInExpansionCase())
                return this._consumeExpansionCaseEnd(), !0;
              if (this._isInExpansionForm())
                return this._consumeExpansionFormEnd(), !0;
            }
            return !1;
          }
          _beginToken(z) {
            let le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._cursor.clone();
            this._currentTokenStart = le, this._currentTokenType = z;
          }
          _endToken(z) {
            let le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._cursor.clone();
            if (this._currentTokenStart === null)
              throw new Ue("Programming error - attempted to end a token when there was no start to the token", this._currentTokenType, this._cursor.getSpan(le));
            if (this._currentTokenType === null)
              throw new Ue("Programming error - attempted to end a token which has no token type", null, this._cursor.getSpan(this._currentTokenStart));
            let We = new de(this._currentTokenType, z, this._cursor.getSpan(this._currentTokenStart, this._leadingTriviaCodePoints));
            return this.tokens.push(We), this._currentTokenStart = null, this._currentTokenType = null, We;
          }
          _createError(z, le) {
            this._isInExpansionForm() && (z += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
            let We = new Ue(z, this._currentTokenType, le);
            return this._currentTokenStart = null, this._currentTokenType = null, new He(We);
          }
          handleError(z) {
            if (z instanceof rr && (z = this._createError(z.msg, this._cursor.getSpan(z.cursor))), z instanceof He)
              this.errors.push(z.error);
            else
              throw z;
          }
          _attemptCharCode(z) {
            return this._cursor.peek() === z ? (this._cursor.advance(), !0) : !1;
          }
          _attemptCharCodeCaseInsensitive(z) {
            return ir(this._cursor.peek(), z) ? (this._cursor.advance(), !0) : !1;
          }
          _requireCharCode(z) {
            let le = this._cursor.clone();
            if (!this._attemptCharCode(z))
              throw this._createError(ve(this._cursor.peek()), this._cursor.getSpan(le));
          }
          _attemptStr(z) {
            let le = z.length;
            if (this._cursor.charsLeft() < le)
              return !1;
            let We = this._cursor.clone();
            for (let Me = 0; Me < le; Me++)
              if (!this._attemptCharCode(z.charCodeAt(Me)))
                return this._cursor = We, !1;
            return !0;
          }
          _attemptStrCaseInsensitive(z) {
            for (let le = 0; le < z.length; le++)
              if (!this._attemptCharCodeCaseInsensitive(z.charCodeAt(le)))
                return !1;
            return !0;
          }
          _requireStr(z) {
            let le = this._cursor.clone();
            if (!this._attemptStr(z))
              throw this._createError(ve(this._cursor.peek()), this._cursor.getSpan(le));
          }
          _requireStrCaseInsensitive(z) {
            let le = this._cursor.clone();
            if (!this._attemptStrCaseInsensitive(z))
              throw this._createError(ve(this._cursor.peek()), this._cursor.getSpan(le));
          }
          _attemptCharCodeUntilFn(z) {
            for (; !z(this._cursor.peek()); )
              this._cursor.advance();
          }
          _requireCharCodeUntilFn(z, le) {
            let We = this._cursor.clone();
            if (this._attemptCharCodeUntilFn(z), this._cursor.clone().diff(We) < le)
              throw this._createError(ve(this._cursor.peek()), this._cursor.getSpan(We));
          }
          _attemptUntilChar(z) {
            for (; this._cursor.peek() !== z; )
              this._cursor.advance();
          }
          _readChar(z) {
            if (z && this._cursor.peek() === re.$AMPERSAND)
              return this._decodeEntity();
            {
              let le = String.fromCodePoint(this._cursor.peek());
              return this._cursor.advance(), le;
            }
          }
          _decodeEntity() {
            let z = this._cursor.clone();
            if (this._cursor.advance(), this._attemptCharCode(re.$HASH)) {
              let le = this._attemptCharCode(re.$x) || this._attemptCharCode(re.$X), We = this._cursor.clone();
              if (this._attemptCharCodeUntilFn(ct), this._cursor.peek() != re.$SEMICOLON)
                throw this._createError(ve(this._cursor.peek()), this._cursor.getSpan());
              let Me = this._cursor.getChars(We);
              this._cursor.advance();
              try {
                let at = parseInt(Me, le ? 16 : 10);
                return String.fromCharCode(at);
              } catch {
                throw this._createError(Ve(this._cursor.getChars(z)), this._cursor.getSpan());
              }
            } else {
              let le = this._cursor.clone();
              if (this._attemptCharCodeUntilFn(kt), this._cursor.peek() != re.$SEMICOLON)
                return this._cursor = le, "&";
              let We = this._cursor.getChars(le);
              this._cursor.advance();
              let Me = Pe.NAMED_ENTITIES[We];
              if (!Me)
                throw this._createError(Ve(We), this._cursor.getSpan(z));
              return Me;
            }
          }
          _consumeRawText(z, le) {
            this._beginToken(z ? ie.ESCAPABLE_RAW_TEXT : ie.RAW_TEXT);
            let We = [];
            for (; ; ) {
              let Me = this._cursor.clone(), at = le();
              if (this._cursor = Me, at)
                break;
              We.push(this._readChar(z));
            }
            return this._endToken([this._processCarriageReturns(We.join(""))]);
          }
          _consumeComment(z) {
            this._beginToken(ie.COMMENT_START, z), this._endToken([]), this._consumeRawText(!1, () => this._attemptStr("-->")), this._beginToken(ie.COMMENT_END), this._requireStr("-->"), this._endToken([]);
          }
          _consumeBogusComment(z) {
            this._beginToken(ie.COMMENT_START, z), this._endToken([]), this._consumeRawText(!1, () => this._cursor.peek() === re.$GT), this._beginToken(ie.COMMENT_END), this._cursor.advance(), this._endToken([]);
          }
          _consumeCdata(z) {
            this._beginToken(ie.CDATA_START, z), this._endToken([]), this._consumeRawText(!1, () => this._attemptStr("]]>")), this._beginToken(ie.CDATA_END), this._requireStr("]]>"), this._endToken([]);
          }
          _consumeDocType(z) {
            this._beginToken(ie.DOC_TYPE_START, z), this._endToken([]), this._consumeRawText(!1, () => this._cursor.peek() === re.$GT), this._beginToken(ie.DOC_TYPE_END), this._cursor.advance(), this._endToken([]);
          }
          _consumePrefixAndName() {
            let z = this._cursor.clone(), le = "";
            for (; this._cursor.peek() !== re.$COLON && !_t(this._cursor.peek()); )
              this._cursor.advance();
            let We;
            this._cursor.peek() === re.$COLON ? (le = this._cursor.getChars(z), this._cursor.advance(), We = this._cursor.clone()) : We = z, this._requireCharCodeUntilFn(yt, le === "" ? 0 : 1);
            let Me = this._cursor.getChars(We);
            return [le, Me];
          }
          _consumeTagOpen(z) {
            let le, We, Me, at = this.tokens.length, Jt = this._cursor.clone(), er = [];
            try {
              if (!re.isAsciiLetter(this._cursor.peek()))
                throw this._createError(ve(this._cursor.peek()), this._cursor.getSpan(z));
              for (Me = this._consumeTagOpenStart(z), We = Me.parts[0], le = Me.parts[1], this._attemptCharCodeUntilFn(Qe); this._cursor.peek() !== re.$SLASH && this._cursor.peek() !== re.$GT; ) {
                let [Er, _r] = this._consumeAttributeName();
                if (this._attemptCharCodeUntilFn(Qe), this._attemptCharCode(re.$EQ)) {
                  this._attemptCharCodeUntilFn(Qe);
                  let xr = this._consumeAttributeValue();
                  er.push({ prefix: Er, name: _r, value: xr });
                } else
                  er.push({ prefix: Er, name: _r });
                this._attemptCharCodeUntilFn(Qe);
              }
              this._consumeTagOpenEnd();
            } catch (Er) {
              if (Er instanceof He) {
                this._cursor = Jt, Me && (this.tokens.length = at), this._beginToken(ie.TEXT, z), this._endToken(["<"]);
                return;
              }
              throw Er;
            }
            if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === ie.TAG_OPEN_END_VOID)
              return;
            let Ar = this._getTagContentType(le, We, this._fullNameStack.length > 0, er);
            this._handleFullNameStackForTagOpen(We, le), Ar === Pe.TagContentType.RAW_TEXT ? this._consumeRawTextWithTagClose(We, le, !1) : Ar === Pe.TagContentType.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(We, le, !0);
          }
          _consumeRawTextWithTagClose(z, le, We) {
            this._consumeRawText(We, () => !this._attemptCharCode(re.$LT) || !this._attemptCharCode(re.$SLASH) || (this._attemptCharCodeUntilFn(Qe), !this._attemptStrCaseInsensitive(z ? `${z}:${le}` : le)) ? !1 : (this._attemptCharCodeUntilFn(Qe), this._attemptCharCode(re.$GT))), this._beginToken(ie.TAG_CLOSE), this._requireCharCodeUntilFn((Me) => Me === re.$GT, 3), this._cursor.advance(), this._endToken([z, le]), this._handleFullNameStackForTagClose(z, le);
          }
          _consumeTagOpenStart(z) {
            this._beginToken(ie.TAG_OPEN_START, z);
            let le = this._consumePrefixAndName();
            return this._endToken(le);
          }
          _consumeAttributeName() {
            let z = this._cursor.peek();
            if (z === re.$SQ || z === re.$DQ)
              throw this._createError(ve(z), this._cursor.getSpan());
            this._beginToken(ie.ATTR_NAME);
            let le = this._consumePrefixAndName();
            return this._endToken(le), le;
          }
          _consumeAttributeValue() {
            let z;
            if (this._cursor.peek() === re.$SQ || this._cursor.peek() === re.$DQ) {
              this._beginToken(ie.ATTR_QUOTE);
              let le = this._cursor.peek();
              this._cursor.advance(), this._endToken([String.fromCodePoint(le)]), this._beginToken(ie.ATTR_VALUE);
              let We = [];
              for (; this._cursor.peek() !== le; )
                We.push(this._readChar(!0));
              z = this._processCarriageReturns(We.join("")), this._endToken([z]), this._beginToken(ie.ATTR_QUOTE), this._cursor.advance(), this._endToken([String.fromCodePoint(le)]);
            } else {
              this._beginToken(ie.ATTR_VALUE);
              let le = this._cursor.clone();
              this._requireCharCodeUntilFn(yt, 1), z = this._processCarriageReturns(this._cursor.getChars(le)), this._endToken([z]);
            }
            return z;
          }
          _consumeTagOpenEnd() {
            let z = this._attemptCharCode(re.$SLASH) ? ie.TAG_OPEN_END_VOID : ie.TAG_OPEN_END;
            this._beginToken(z), this._requireCharCode(re.$GT), this._endToken([]);
          }
          _consumeTagClose(z) {
            if (this._beginToken(ie.TAG_CLOSE, z), this._attemptCharCodeUntilFn(Qe), this._allowHtmComponentClosingTags && this._attemptCharCode(re.$SLASH))
              this._attemptCharCodeUntilFn(Qe), this._requireCharCode(re.$GT), this._endToken([]);
            else {
              let [le, We] = this._consumePrefixAndName();
              this._attemptCharCodeUntilFn(Qe), this._requireCharCode(re.$GT), this._endToken([le, We]), this._handleFullNameStackForTagClose(le, We);
            }
          }
          _consumeExpansionFormStart() {
            this._beginToken(ie.EXPANSION_FORM_START), this._requireCharCode(re.$LBRACE), this._endToken([]), this._expansionCaseStack.push(ie.EXPANSION_FORM_START), this._beginToken(ie.RAW_TEXT);
            let z = this._readUntil(re.$COMMA);
            this._endToken([z]), this._requireCharCode(re.$COMMA), this._attemptCharCodeUntilFn(Qe), this._beginToken(ie.RAW_TEXT);
            let le = this._readUntil(re.$COMMA);
            this._endToken([le]), this._requireCharCode(re.$COMMA), this._attemptCharCodeUntilFn(Qe);
          }
          _consumeExpansionCaseStart() {
            this._beginToken(ie.EXPANSION_CASE_VALUE);
            let z = this._readUntil(re.$LBRACE).trim();
            this._endToken([z]), this._attemptCharCodeUntilFn(Qe), this._beginToken(ie.EXPANSION_CASE_EXP_START), this._requireCharCode(re.$LBRACE), this._endToken([]), this._attemptCharCodeUntilFn(Qe), this._expansionCaseStack.push(ie.EXPANSION_CASE_EXP_START);
          }
          _consumeExpansionCaseEnd() {
            this._beginToken(ie.EXPANSION_CASE_EXP_END), this._requireCharCode(re.$RBRACE), this._endToken([]), this._attemptCharCodeUntilFn(Qe), this._expansionCaseStack.pop();
          }
          _consumeExpansionFormEnd() {
            this._beginToken(ie.EXPANSION_FORM_END), this._requireCharCode(re.$RBRACE), this._endToken([]), this._expansionCaseStack.pop();
          }
          _consumeText() {
            let z = this._cursor.clone();
            this._beginToken(ie.TEXT, z);
            let le = [];
            do
              this._interpolationConfig && this._attemptStr(this._interpolationConfig.start) ? (le.push(this._interpolationConfig.start), this._inInterpolation = !0) : this._interpolationConfig && this._inInterpolation && this._attemptStr(this._interpolationConfig.end) ? (le.push(this._interpolationConfig.end), this._inInterpolation = !1) : le.push(this._readChar(!0));
            while (!this._isTextEnd());
            this._endToken([this._processCarriageReturns(le.join(""))]);
          }
          _isTextEnd() {
            return !!(this._cursor.peek() === re.$LT || this._cursor.peek() === re.$EOF || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === re.$RBRACE && this._isInExpansionCase()));
          }
          _readUntil(z) {
            let le = this._cursor.clone();
            return this._attemptUntilChar(z), this._cursor.getChars(le);
          }
          _isInExpansionCase() {
            return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === ie.EXPANSION_CASE_EXP_START;
          }
          _isInExpansionForm() {
            return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === ie.EXPANSION_FORM_START;
          }
          isExpansionFormStart() {
            if (this._cursor.peek() !== re.$LBRACE)
              return !1;
            if (this._interpolationConfig) {
              let z = this._cursor.clone(), le = this._attemptStr(this._interpolationConfig.start);
              return this._cursor = z, !le;
            }
            return !0;
          }
          _handleFullNameStackForTagOpen(z, le) {
            let We = Pe.mergeNsAndName(z, le);
            (this._fullNameStack.length === 0 || this._fullNameStack[this._fullNameStack.length - 1] === We) && this._fullNameStack.push(We);
          }
          _handleFullNameStackForTagClose(z, le) {
            let We = Pe.mergeNsAndName(z, le);
            this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === We && this._fullNameStack.pop();
          }
        };
        function Qe(z) {
          return !re.isWhitespace(z) || z === re.$EOF;
        }
        function yt(z) {
          return re.isWhitespace(z) || z === re.$GT || z === re.$SLASH || z === re.$SQ || z === re.$DQ || z === re.$EQ;
        }
        function _t(z) {
          return (z < re.$a || re.$z < z) && (z < re.$A || re.$Z < z) && (z < re.$0 || z > re.$9);
        }
        function ct(z) {
          return z == re.$SEMICOLON || z == re.$EOF || !re.isAsciiHexDigit(z);
        }
        function kt(z) {
          return z == re.$SEMICOLON || z == re.$EOF || !re.isAsciiLetter(z);
        }
        function $t(z) {
          return z === re.$EQ || re.isAsciiLetter(z) || re.isDigit(z);
        }
        function ir(z, le) {
          return st(z) == st(le);
        }
        function st(z) {
          return z >= re.$a && z <= re.$z ? z - re.$a + re.$A : z;
        }
        function Ot(z) {
          let le = [], We;
          for (let Me = 0; Me < z.length; Me++) {
            let at = z[Me];
            We && We.type == ie.TEXT && at.type == ie.TEXT ? (We.parts[0] += at.parts[0], We.sourceSpan.end = at.sourceSpan.end) : (We = at, le.push(We));
          }
          return le;
        }
        var Vt = class {
          constructor(z, le) {
            if (z instanceof Vt)
              this.file = z.file, this.input = z.input, this.end = z.end, this.state = Object.assign({}, z.state);
            else {
              if (!le)
                throw new Error("Programming error: the range argument must be provided with a file argument.");
              this.file = z, this.input = z.content, this.end = le.endPos, this.state = { peek: -1, offset: le.startPos, line: le.startLine, column: le.startCol };
            }
          }
          clone() {
            return new Vt(this);
          }
          peek() {
            return this.state.peek;
          }
          charsLeft() {
            return this.end - this.state.offset;
          }
          diff(z) {
            return this.state.offset - z.state.offset;
          }
          advance() {
            this.advanceState(this.state);
          }
          init() {
            this.updatePeek(this.state);
          }
          getSpan(z, le) {
            if (z = z || this, le)
              for (z = z.clone(); this.diff(z) > 0 && le.indexOf(z.peek()) !== -1; )
                z.advance();
            return new ge.ParseSourceSpan(new ge.ParseLocation(z.file, z.state.offset, z.state.line, z.state.column), new ge.ParseLocation(this.file, this.state.offset, this.state.line, this.state.column));
          }
          getChars(z) {
            return this.input.substring(z.state.offset, this.state.offset);
          }
          charAt(z) {
            return this.input.charCodeAt(z);
          }
          advanceState(z) {
            if (z.offset >= this.end)
              throw this.state = z, new rr('Unexpected character "EOF"', this);
            let le = this.charAt(z.offset);
            le === re.$LF ? (z.line++, z.column = 0) : re.isNewLine(le) || z.column++, z.offset++, this.updatePeek(z);
          }
          updatePeek(z) {
            z.peek = z.offset >= this.end ? re.$EOF : this.charAt(z.offset);
          }
        }, Ut = class extends Vt {
          constructor(z, le) {
            z instanceof Ut ? (super(z), this.internalState = Object.assign({}, z.internalState)) : (super(z, le), this.internalState = this.state);
          }
          advance() {
            this.state = this.internalState, super.advance(), this.processEscapeSequence();
          }
          init() {
            super.init(), this.processEscapeSequence();
          }
          clone() {
            return new Ut(this);
          }
          getChars(z) {
            let le = z.clone(), We = "";
            for (; le.internalState.offset < this.internalState.offset; )
              We += String.fromCodePoint(le.peek()), le.advance();
            return We;
          }
          processEscapeSequence() {
            let z = () => this.internalState.peek;
            if (z() === re.$BACKSLASH)
              if (this.internalState = Object.assign({}, this.state), this.advanceState(this.internalState), z() === re.$n)
                this.state.peek = re.$LF;
              else if (z() === re.$r)
                this.state.peek = re.$CR;
              else if (z() === re.$v)
                this.state.peek = re.$VTAB;
              else if (z() === re.$t)
                this.state.peek = re.$TAB;
              else if (z() === re.$b)
                this.state.peek = re.$BSPACE;
              else if (z() === re.$f)
                this.state.peek = re.$FF;
              else if (z() === re.$u)
                if (this.advanceState(this.internalState), z() === re.$LBRACE) {
                  this.advanceState(this.internalState);
                  let le = this.clone(), We = 0;
                  for (; z() !== re.$RBRACE; )
                    this.advanceState(this.internalState), We++;
                  this.state.peek = this.decodeHexDigits(le, We);
                } else {
                  let le = this.clone();
                  this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(le, 4);
                }
              else if (z() === re.$x) {
                this.advanceState(this.internalState);
                let le = this.clone();
                this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(le, 2);
              } else if (re.isOctalDigit(z())) {
                let le = "", We = 0, Me = this.clone();
                for (; re.isOctalDigit(z()) && We < 3; )
                  Me = this.clone(), le += String.fromCodePoint(z()), this.advanceState(this.internalState), We++;
                this.state.peek = parseInt(le, 8), this.internalState = Me.internalState;
              } else
                re.isNewLine(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
          }
          decodeHexDigits(z, le) {
            let We = this.input.substr(z.internalState.offset, le), Me = parseInt(We, 16);
            if (isNaN(Me))
              throw z.state = z.internalState, new rr("Invalid hexadecimal escape sequence", z);
            return Me;
          }
        }, rr = class {
          constructor(z, le) {
            this.msg = z, this.cursor = le;
          }
        };
        L.CursorError = rr;
      } }), lu = he({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/parser.js"(L) {
        $(), Object.defineProperty(L, "__esModule", { value: !0 });
        var re = Zt(), ge = au(), Ee = ou(), Pe = ln(), ie = class extends re.ParseError {
          constructor(ce, ve, Ve) {
            super(ve, Ve), this.elementName = ce;
          }
          static create(ce, ve, Ve) {
            return new ie(ce, ve, Ve);
          }
        };
        L.TreeError = ie;
        var de = class {
          constructor(ce, ve) {
            this.rootNodes = ce, this.errors = ve;
          }
        };
        L.ParseTreeResult = de;
        var Ue = class {
          constructor(ce) {
            this.getTagDefinition = ce;
          }
          parse(ce, ve, Ve) {
            let He = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, Je = arguments.length > 4 ? arguments[4] : void 0, Qe = (Vt) => function(Ut) {
              for (var rr = arguments.length, z = new Array(rr > 1 ? rr - 1 : 0), le = 1; le < rr; le++)
                z[le - 1] = arguments[le];
              return Vt(Ut.toLowerCase(), ...z);
            }, yt = He ? this.getTagDefinition : Qe(this.getTagDefinition), _t = (Vt) => yt(Vt).contentType, ct = He ? Je : Qe(Je), kt = Je ? (Vt, Ut, rr, z) => {
              let le = ct(Vt, Ut, rr, z);
              return le !== void 0 ? le : _t(Vt);
            } : _t, $t = Ee.tokenize(ce, ve, kt, Ve), ir = Ve && Ve.canSelfClose || !1, st = Ve && Ve.allowHtmComponentClosingTags || !1, Ot = new Ge($t.tokens, yt, ir, st, He).build();
            return new de(Ot.rootNodes, $t.errors.concat(Ot.errors));
          }
        };
        L.Parser = Ue;
        var Ge = class {
          constructor(ce, ve, Ve, He, Je) {
            this.tokens = ce, this.getTagDefinition = ve, this.canSelfClose = Ve, this.allowHtmComponentClosingTags = He, this.isTagNameCaseSensitive = Je, this._index = -1, this._rootNodes = [], this._errors = [], this._elementStack = [], this._advance();
          }
          build() {
            for (; this._peek.type !== Ee.TokenType.EOF; )
              this._peek.type === Ee.TokenType.TAG_OPEN_START ? this._consumeStartTag(this._advance()) : this._peek.type === Ee.TokenType.TAG_CLOSE ? (this._closeVoidElement(), this._consumeEndTag(this._advance())) : this._peek.type === Ee.TokenType.CDATA_START ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === Ee.TokenType.COMMENT_START ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === Ee.TokenType.TEXT || this._peek.type === Ee.TokenType.RAW_TEXT || this._peek.type === Ee.TokenType.ESCAPABLE_RAW_TEXT ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === Ee.TokenType.EXPANSION_FORM_START ? this._consumeExpansion(this._advance()) : this._peek.type === Ee.TokenType.DOC_TYPE_START ? this._consumeDocType(this._advance()) : this._advance();
            return new de(this._rootNodes, this._errors);
          }
          _advance() {
            let ce = this._peek;
            return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], ce;
          }
          _advanceIf(ce) {
            return this._peek.type === ce ? this._advance() : null;
          }
          _consumeCdata(ce) {
            let ve = this._advance(), Ve = this._getText(ve), He = this._advanceIf(Ee.TokenType.CDATA_END);
            this._addToParent(new ge.CDATA(Ve, new re.ParseSourceSpan(ce.sourceSpan.start, (He || ve).sourceSpan.end)));
          }
          _consumeComment(ce) {
            let ve = this._advanceIf(Ee.TokenType.RAW_TEXT), Ve = this._advanceIf(Ee.TokenType.COMMENT_END), He = ve != null ? ve.parts[0].trim() : null, Je = new re.ParseSourceSpan(ce.sourceSpan.start, (Ve || ve || ce).sourceSpan.end);
            this._addToParent(new ge.Comment(He, Je));
          }
          _consumeDocType(ce) {
            let ve = this._advanceIf(Ee.TokenType.RAW_TEXT), Ve = this._advanceIf(Ee.TokenType.DOC_TYPE_END), He = ve != null ? ve.parts[0].trim() : null, Je = new re.ParseSourceSpan(ce.sourceSpan.start, (Ve || ve || ce).sourceSpan.end);
            this._addToParent(new ge.DocType(He, Je));
          }
          _consumeExpansion(ce) {
            let ve = this._advance(), Ve = this._advance(), He = [];
            for (; this._peek.type === Ee.TokenType.EXPANSION_CASE_VALUE; ) {
              let Qe = this._parseExpansionCase();
              if (!Qe)
                return;
              He.push(Qe);
            }
            if (this._peek.type !== Ee.TokenType.EXPANSION_FORM_END) {
              this._errors.push(ie.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
              return;
            }
            let Je = new re.ParseSourceSpan(ce.sourceSpan.start, this._peek.sourceSpan.end);
            this._addToParent(new ge.Expansion(ve.parts[0], Ve.parts[0], He, Je, ve.sourceSpan)), this._advance();
          }
          _parseExpansionCase() {
            let ce = this._advance();
            if (this._peek.type !== Ee.TokenType.EXPANSION_CASE_EXP_START)
              return this._errors.push(ie.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
            let ve = this._advance(), Ve = this._collectExpansionExpTokens(ve);
            if (!Ve)
              return null;
            let He = this._advance();
            Ve.push(new Ee.Token(Ee.TokenType.EOF, [], He.sourceSpan));
            let Je = new Ge(Ve, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive).build();
            if (Je.errors.length > 0)
              return this._errors = this._errors.concat(Je.errors), null;
            let Qe = new re.ParseSourceSpan(ce.sourceSpan.start, He.sourceSpan.end), yt = new re.ParseSourceSpan(ve.sourceSpan.start, He.sourceSpan.end);
            return new ge.ExpansionCase(ce.parts[0], Je.rootNodes, Qe, ce.sourceSpan, yt);
          }
          _collectExpansionExpTokens(ce) {
            let ve = [], Ve = [Ee.TokenType.EXPANSION_CASE_EXP_START];
            for (; ; ) {
              if ((this._peek.type === Ee.TokenType.EXPANSION_FORM_START || this._peek.type === Ee.TokenType.EXPANSION_CASE_EXP_START) && Ve.push(this._peek.type), this._peek.type === Ee.TokenType.EXPANSION_CASE_EXP_END)
                if (gt(Ve, Ee.TokenType.EXPANSION_CASE_EXP_START)) {
                  if (Ve.pop(), Ve.length == 0)
                    return ve;
                } else
                  return this._errors.push(ie.create(null, ce.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
              if (this._peek.type === Ee.TokenType.EXPANSION_FORM_END)
                if (gt(Ve, Ee.TokenType.EXPANSION_FORM_START))
                  Ve.pop();
                else
                  return this._errors.push(ie.create(null, ce.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
              if (this._peek.type === Ee.TokenType.EOF)
                return this._errors.push(ie.create(null, ce.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
              ve.push(this._advance());
            }
          }
          _getText(ce) {
            let ve = ce.parts[0];
            if (ve.length > 0 && ve[0] == `
`) {
              let Ve = this._getParentElement();
              Ve != null && Ve.children.length == 0 && this.getTagDefinition(Ve.name).ignoreFirstLf && (ve = ve.substring(1));
            }
            return ve;
          }
          _consumeText(ce) {
            let ve = this._getText(ce);
            ve.length > 0 && this._addToParent(new ge.Text(ve, ce.sourceSpan));
          }
          _closeVoidElement() {
            let ce = this._getParentElement();
            ce && this.getTagDefinition(ce.name).isVoid && this._elementStack.pop();
          }
          _consumeStartTag(ce) {
            let ve = ce.parts[0], Ve = ce.parts[1], He = [];
            for (; this._peek.type === Ee.TokenType.ATTR_NAME; )
              He.push(this._consumeAttr(this._advance()));
            let Je = this._getElementFullName(ve, Ve, this._getParentElement()), Qe = !1;
            if (this._peek.type === Ee.TokenType.TAG_OPEN_END_VOID) {
              this._advance(), Qe = !0;
              let $t = this.getTagDefinition(Je);
              this.canSelfClose || $t.canSelfClose || Pe.getNsPrefix(Je) !== null || $t.isVoid || this._errors.push(ie.create(Je, ce.sourceSpan, `Only void and foreign elements can be self closed "${ce.parts[1]}"`));
            } else
              this._peek.type === Ee.TokenType.TAG_OPEN_END && (this._advance(), Qe = !1);
            let yt = this._peek.sourceSpan.start, _t = new re.ParseSourceSpan(ce.sourceSpan.start, yt), ct = new re.ParseSourceSpan(ce.sourceSpan.start.moveBy(1), ce.sourceSpan.end), kt = new ge.Element(Je, He, [], _t, _t, void 0, ct);
            this._pushElement(kt), Qe && (this._popElement(Je), kt.endSourceSpan = _t);
          }
          _pushElement(ce) {
            let ve = this._getParentElement();
            ve && this.getTagDefinition(ve.name).isClosedByChild(ce.name) && this._elementStack.pop(), this._addToParent(ce), this._elementStack.push(ce);
          }
          _consumeEndTag(ce) {
            let ve = this.allowHtmComponentClosingTags && ce.parts.length === 0 ? null : this._getElementFullName(ce.parts[0], ce.parts[1], this._getParentElement());
            if (this._getParentElement() && (this._getParentElement().endSourceSpan = ce.sourceSpan), ve && this.getTagDefinition(ve).isVoid)
              this._errors.push(ie.create(ve, ce.sourceSpan, `Void elements do not have end tags "${ce.parts[1]}"`));
            else if (!this._popElement(ve)) {
              let Ve = `Unexpected closing tag "${ve}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
              this._errors.push(ie.create(ve, ce.sourceSpan, Ve));
            }
          }
          _popElement(ce) {
            for (let ve = this._elementStack.length - 1; ve >= 0; ve--) {
              let Ve = this._elementStack[ve];
              if (!ce || (Pe.getNsPrefix(Ve.name) ? Ve.name == ce : Ve.name.toLowerCase() == ce.toLowerCase()))
                return this._elementStack.splice(ve, this._elementStack.length - ve), !0;
              if (!this.getTagDefinition(Ve.name).closedByParent)
                return !1;
            }
            return !1;
          }
          _consumeAttr(ce) {
            let ve = Pe.mergeNsAndName(ce.parts[0], ce.parts[1]), Ve = ce.sourceSpan.end, He = "", Je, Qe;
            if (this._peek.type === Ee.TokenType.ATTR_QUOTE && (Qe = this._advance().sourceSpan.start), this._peek.type === Ee.TokenType.ATTR_VALUE) {
              let yt = this._advance();
              He = yt.parts[0], Ve = yt.sourceSpan.end, Je = yt.sourceSpan;
            }
            return this._peek.type === Ee.TokenType.ATTR_QUOTE && (Ve = this._advance().sourceSpan.end, Je = new re.ParseSourceSpan(Qe, Ve)), new ge.Attribute(ve, He, new re.ParseSourceSpan(ce.sourceSpan.start, Ve), Je, ce.sourceSpan);
          }
          _getParentElement() {
            return this._elementStack.length > 0 ? this._elementStack[this._elementStack.length - 1] : null;
          }
          _getParentElementSkippingContainers() {
            let ce = null;
            for (let ve = this._elementStack.length - 1; ve >= 0; ve--) {
              if (!Pe.isNgContainer(this._elementStack[ve].name))
                return { parent: this._elementStack[ve], container: ce };
              ce = this._elementStack[ve];
            }
            return { parent: null, container: ce };
          }
          _addToParent(ce) {
            let ve = this._getParentElement();
            ve != null ? ve.children.push(ce) : this._rootNodes.push(ce);
          }
          _insertBeforeContainer(ce, ve, Ve) {
            if (!ve)
              this._addToParent(Ve), this._elementStack.push(Ve);
            else {
              if (ce) {
                let He = ce.children.indexOf(ve);
                ce.children[He] = Ve;
              } else
                this._rootNodes.push(Ve);
              Ve.children.push(ve), this._elementStack.splice(this._elementStack.indexOf(ve), 0, Ve);
            }
          }
          _getElementFullName(ce, ve, Ve) {
            return ce === "" && (ce = this.getTagDefinition(ve).implicitNamespacePrefix || "", ce === "" && Ve != null && (ce = Pe.getNsPrefix(Ve.name))), Pe.mergeNsAndName(ce, ve);
          }
        };
        function gt(ce, ve) {
          return ce.length > 0 && ce[ce.length - 1] === ve;
        }
      } }), Nn = he({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/html_parser.js"(L) {
        $(), Object.defineProperty(L, "__esModule", { value: !0 });
        var re = su(), ge = lu(), Ee = lu();
        L.ParseTreeResult = Ee.ParseTreeResult, L.TreeError = Ee.TreeError;
        var Pe = class extends ge.Parser {
          constructor() {
            super(re.getHtmlTagDefinition);
          }
          parse(ie, de, Ue) {
            let Ge = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, gt = arguments.length > 4 ? arguments[4] : void 0;
            return super.parse(ie, de, Ue, Ge, gt);
          }
        };
        L.HtmlParser = Pe;
      } }), _n = he({ "node_modules/angular-html-parser/lib/angular-html-parser/src/index.js"(L) {
        $(), Object.defineProperty(L, "__esModule", { value: !0 });
        var re = Nn(), ge = ln();
        L.TagContentType = ge.TagContentType;
        var Ee = null, Pe = () => (Ee || (Ee = new re.HtmlParser()), Ee);
        function ie(de) {
          let Ue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { canSelfClose: Ge = !1, allowHtmComponentClosingTags: gt = !1, isTagNameCaseSensitive: ce = !1, getTagContentType: ve } = Ue;
          return Pe().parse(de, "angular-html-parser", { tokenizeExpansionForms: !1, interpolationConfig: void 0, canSelfClose: Ge, allowHtmComponentClosingTags: gt }, ce, ve);
        }
        L.parse = ie;
      } });
      $();
      var { ParseSourceSpan: pn, ParseLocation: pu, ParseSourceFile: Wu } = Zt(), Hi = ue(), Yi = yr(), Fn = Pr(), { inferParserByLanguage: Yr } = nu(), Ki = Ru(), cu = zi(), zu = Gt(), { hasPragma: Qi } = Vu(), { Node: Zi } = Uu(), { parseIeConditionalComment: es } = wn(), { locStart: ts, locEnd: rs } = iu();
      function ns(L, re, ge) {
        let { canSelfClose: Ee, normalizeTagName: Pe, normalizeAttributeName: ie, allowHtmComponentClosingTags: de, isTagNameCaseSensitive: Ue, getTagContentType: Ge } = re, gt = _n(), { RecursiveVisitor: ce, visitAll: ve } = au(), { ParseSourceSpan: Ve } = Zt(), { getHtmlTagDefinition: He } = su(), { rootNodes: Je, errors: Qe } = gt.parse(L, { canSelfClose: Ee, allowHtmComponentClosingTags: de, isTagNameCaseSensitive: Ue, getTagContentType: Ge });
        if (ge.parser === "vue")
          if (Je.some((st) => st.type === "docType" && st.value === "html" || st.type === "element" && st.name.toLowerCase() === "html")) {
            Ee = !0, Pe = !0, ie = !0, de = !0, Ue = !1;
            let st = gt.parse(L, { canSelfClose: Ee, allowHtmComponentClosingTags: de, isTagNameCaseSensitive: Ue });
            Je = st.rootNodes, Qe = st.errors;
          } else {
            let st = (Ot) => {
              if (!Ot || Ot.type !== "element" || Ot.name !== "template")
                return !1;
              let Vt = Ot.attrs.find((rr) => rr.name === "lang"), Ut = Vt && Vt.value;
              return !Ut || Yr(Ut, ge) === "html";
            };
            if (Je.some(st)) {
              let Ot, Vt = () => gt.parse(L, { canSelfClose: Ee, allowHtmComponentClosingTags: de, isTagNameCaseSensitive: Ue }), Ut = () => Ot || (Ot = Vt()), rr = (z) => Ut().rootNodes.find((le) => {
                let { startSourceSpan: We } = le;
                return We && We.start.offset === z.startSourceSpan.start.offset;
              });
              for (let z = 0; z < Je.length; z++) {
                let le = Je[z], { endSourceSpan: We, startSourceSpan: Me } = le;
                if (We === null)
                  Qe = Ut().errors, Je[z] = rr(le) || le;
                else if (st(le)) {
                  let at = Ut(), Jt = Me.end.offset, er = We.start.offset;
                  for (let Ar of at.errors) {
                    let { offset: Er } = Ar.span.start;
                    if (Jt < Er && Er < er) {
                      Qe = [Ar];
                      break;
                    }
                  }
                  Je[z] = rr(le) || le;
                }
              }
            }
          }
        if (Qe.length > 0) {
          let { msg: st, span: { start: Ot, end: Vt } } = Qe[0];
          throw Fn(st, { start: { line: Ot.line + 1, column: Ot.col + 1 }, end: { line: Vt.line + 1, column: Vt.col + 1 } });
        }
        let yt = (st) => {
          let Ot = st.name.startsWith(":") ? st.name.slice(1).split(":")[0] : null, Vt = st.nameSpan.toString(), Ut = Ot !== null && Vt.startsWith(`${Ot}:`), rr = Ut ? Vt.slice(Ot.length + 1) : Vt;
          st.name = rr, st.namespace = Ot, st.hasExplicitNamespace = Ut;
        }, _t = (st) => {
          switch (st.type) {
            case "element":
              yt(st);
              for (let Ot of st.attrs)
                yt(Ot), Ot.valueSpan ? (Ot.value = Ot.valueSpan.toString(), /["']/.test(Ot.value[0]) && (Ot.value = Ot.value.slice(1, -1))) : Ot.value = null;
              break;
            case "comment":
              st.value = st.sourceSpan.toString().slice(4, -3);
              break;
            case "text":
              st.value = st.sourceSpan.toString();
              break;
          }
        }, ct = (st, Ot) => {
          let Vt = st.toLowerCase();
          return Ot(Vt) ? Vt : st;
        }, kt = (st) => {
          if (st.type === "element" && (Pe && (!st.namespace || st.namespace === st.tagDefinition.implicitNamespacePrefix || zu(st)) && (st.name = ct(st.name, (Ot) => Ot in Ki)), ie)) {
            let Ot = cu[st.name] || /* @__PURE__ */ Object.create(null);
            for (let Vt of st.attrs)
              Vt.namespace || (Vt.name = ct(Vt.name, (Ut) => st.name in cu && (Ut in cu["*"] || Ut in Ot)));
          }
        }, $t = (st) => {
          st.sourceSpan && st.endSourceSpan && (st.sourceSpan = new Ve(st.sourceSpan.start, st.endSourceSpan.end));
        }, ir = (st) => {
          if (st.type === "element") {
            let Ot = He(Ue ? st.name : st.name.toLowerCase());
            !st.namespace || st.namespace === Ot.implicitNamespacePrefix || zu(st) ? st.tagDefinition = Ot : st.tagDefinition = He("");
          }
        };
        return ve(new class extends ce {
          visit(st) {
            _t(st), ir(st), kt(st), $t(st);
          }
        }(), Je), Je;
      }
      function kn(L, re, ge) {
        let Ee = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, { frontMatter: Pe, content: ie } = Ee ? Hi(L) : { frontMatter: null, content: L }, de = new Wu(L, re.filepath), Ue = new pu(de, 0, 0, 0), Ge = Ue.moveBy(L.length), gt = { type: "root", sourceSpan: new pn(Ue, Ge), children: ns(ie, ge, re) };
        if (Pe) {
          let Ve = new pu(de, 0, 0, 0), He = Ve.moveBy(Pe.raw.length);
          Pe.sourceSpan = new pn(Ve, He), gt.children.unshift(Pe);
        }
        let ce = new Zi(gt), ve = (Ve, He) => {
          let { offset: Je } = He, Qe = L.slice(0, Je).replace(/[^\n\r]/g, " "), yt = kn(Qe + Ve, re, ge, !1);
          yt.sourceSpan = new pn(He, Yi(yt.children).sourceSpan.end);
          let _t = yt.children[0];
          return _t.length === Je ? yt.children.shift() : (_t.sourceSpan = new pn(_t.sourceSpan.start.moveBy(Je), _t.sourceSpan.end), _t.value = _t.value.slice(Je)), yt;
        };
        return ce.walk((Ve) => {
          if (Ve.type === "comment") {
            let He = es(Ve, ve);
            He && Ve.parent.replaceChild(Ve, He);
          }
        }), ce;
      }
      function An() {
        let { name: L, canSelfClose: re = !1, normalizeTagName: ge = !1, normalizeAttributeName: Ee = !1, allowHtmComponentClosingTags: Pe = !1, isTagNameCaseSensitive: ie = !1, getTagContentType: de } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return { parse: (Ue, Ge, gt) => kn(Ue, Object.assign({ parser: L }, gt), { canSelfClose: re, normalizeTagName: ge, normalizeAttributeName: Ee, allowHtmComponentClosingTags: Pe, isTagNameCaseSensitive: ie, getTagContentType: de }), hasPragma: Qi, astFormat: "html", locStart: ts, locEnd: rs };
      }
      Ne.exports = { parsers: { html: An({ name: "html", canSelfClose: !0, normalizeTagName: !0, normalizeAttributeName: !0, allowHtmComponentClosingTags: !0 }), angular: An({ name: "angular", canSelfClose: !0 }), vue: An({ name: "vue", canSelfClose: !0, isTagNameCaseSensitive: !0, getTagContentType: (L, re, ge, Ee) => {
        if (L.toLowerCase() !== "html" && !ge && (L !== "template" || Ee.some((Pe) => {
          let { name: ie, value: de } = Pe;
          return ie === "lang" && de !== "html" && de !== "" && de !== void 0;
        })))
          return _n().TagContentType.RAW_TEXT;
      } }), lwc: An({ name: "lwc" }) } };
    });
    return $i();
  });
} }), Dl = ta({ "node_modules/prettier/standalone.js"(Jr, Xr) {
  (function(Ae) {
    if (typeof Jr == "object" && typeof Xr == "object")
      Xr.exports = Ae();
    else if (typeof define == "function" && define.amd)
      define(Ae);
    else {
      var Yt = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : this || {};
      Yt.prettier = Ae();
    }
  })(function() {
    var Ae = (ee, V) => () => (V || ee((V = { exports: {} }).exports, V), V.exports), Yt = Ae((ee, V) => {
      var W = function(Z) {
        return Z && Z.Math == Math && Z;
      };
      V.exports = W(typeof globalThis == "object" && globalThis) || W(typeof window == "object" && window) || W(typeof self == "object" && self) || W(typeof global == "object" && global) || function() {
        return this;
      }() || Function("return this")();
    }), hr = Ae((ee, V) => {
      V.exports = function(W) {
        try {
          return !!W();
        } catch {
          return !0;
        }
      };
    }), br = Ae((ee, V) => {
      var W = hr();
      V.exports = !W(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }), Hr = Ae((ee, V) => {
      var W = hr();
      V.exports = !W(function() {
        var Z = (function() {
        }).bind();
        return typeof Z != "function" || Z.hasOwnProperty("prototype");
      });
    }), gr = Ae((ee, V) => {
      var W = Hr(), Z = Function.prototype.call;
      V.exports = W ? Z.bind(Z) : function() {
        return Z.apply(Z, arguments);
      };
    }), Dn = Ae((ee) => {
      var V = {}.propertyIsEnumerable, W = Object.getOwnPropertyDescriptor, Z = W && !V.call({ 1: 2 }, 1);
      ee.f = Z ? function(Y) {
        var ne = W(this, Y);
        return !!ne && ne.enumerable;
      } : V;
    }), Lr = Ae((ee, V) => {
      V.exports = function(W, Z) {
        return { enumerable: !(W & 1), configurable: !(W & 2), writable: !(W & 4), value: Z };
      };
    }), Dr = Ae((ee, V) => {
      var W = Hr(), Z = Function.prototype, Y = Z.call, ne = W && Z.bind.bind(Y, Y);
      V.exports = W ? ne : function(Fe) {
        return function() {
          return Y.apply(Fe, arguments);
        };
      };
    }), Br = Ae((ee, V) => {
      var W = Dr(), Z = W({}.toString), Y = W("".slice);
      V.exports = function(ne) {
        return Y(Z(ne), 8, -1);
      };
    }), Zr = Ae((ee, V) => {
      var W = Dr(), Z = hr(), Y = Br(), ne = Object, Fe = W("".split);
      V.exports = Z(function() {
        return !ne("z").propertyIsEnumerable(0);
      }) ? function(je) {
        return Y(je) == "String" ? Fe(je, "") : ne(je);
      } : ne;
    }), nn = Ae((ee, V) => {
      V.exports = function(W) {
        return W == null;
      };
    }), qn = Ae((ee, V) => {
      var W = nn(), Z = TypeError;
      V.exports = function(Y) {
        if (W(Y))
          throw Z("Can't call method on " + Y);
        return Y;
      };
    }), dn = Ae((ee, V) => {
      var W = Zr(), Z = qn();
      V.exports = function(Y) {
        return W(Z(Y));
      };
    }), Vn = Ae((ee, V) => {
      var W = typeof document == "object" && document.all, Z = typeof W > "u" && W !== void 0;
      V.exports = { all: W, IS_HTMLDDA: Z };
    }), dr = Ae((ee, V) => {
      var W = Vn(), Z = W.all;
      V.exports = W.IS_HTMLDDA ? function(Y) {
        return typeof Y == "function" || Y === Z;
      } : function(Y) {
        return typeof Y == "function";
      };
    }), Or = Ae((ee, V) => {
      var W = dr(), Z = Vn(), Y = Z.all;
      V.exports = Z.IS_HTMLDDA ? function(ne) {
        return typeof ne == "object" ? ne !== null : W(ne) || ne === Y;
      } : function(ne) {
        return typeof ne == "object" ? ne !== null : W(ne);
      };
    }), un = Ae((ee, V) => {
      var W = Yt(), Z = dr(), Y = function(ne) {
        return Z(ne) ? ne : void 0;
      };
      V.exports = function(ne, Fe) {
        return arguments.length < 2 ? Y(W[ne]) : W[ne] && W[ne][Fe];
      };
    }), Un = Ae((ee, V) => {
      var W = Dr();
      V.exports = W({}.isPrototypeOf);
    }), ii = Ae((ee, V) => {
      var W = un();
      V.exports = W("navigator", "userAgent") || "";
    }), si = Ae((ee, V) => {
      var W = Yt(), Z = ii(), Y = W.process, ne = W.Deno, Fe = Y && Y.versions || ne && ne.version, je = Fe && Fe.v8, he, qe;
      je && (he = je.split("."), qe = he[0] > 0 && he[0] < 4 ? 1 : +(he[0] + he[1])), !qe && Z && (he = Z.match(/Edge\/(\d+)/), (!he || he[1] >= 74) && (he = Z.match(/Chrome\/(\d+)/), he && (qe = +he[1]))), V.exports = qe;
    }), Gn = Ae((ee, V) => {
      var W = si(), Z = hr();
      V.exports = !!Object.getOwnPropertySymbols && !Z(function() {
        var Y = Symbol();
        return !String(Y) || !(Object(Y) instanceof Symbol) || !Symbol.sham && W && W < 41;
      });
    }), Jn = Ae((ee, V) => {
      var W = Gn();
      V.exports = W && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }), Xn = Ae((ee, V) => {
      var W = un(), Z = dr(), Y = Un(), ne = Jn(), Fe = Object;
      V.exports = ne ? function(je) {
        return typeof je == "symbol";
      } : function(je) {
        var he = W("Symbol");
        return Z(he) && Y(he.prototype, Fe(je));
      };
    }), fn = Ae((ee, V) => {
      var W = String;
      V.exports = function(Z) {
        try {
          return W(Z);
        } catch {
          return "Object";
        }
      };
    }), sn = Ae((ee, V) => {
      var W = dr(), Z = fn(), Y = TypeError;
      V.exports = function(ne) {
        if (W(ne))
          return ne;
        throw Y(Z(ne) + " is not a function");
      };
    }), mn = Ae((ee, V) => {
      var W = sn(), Z = nn();
      V.exports = function(Y, ne) {
        var Fe = Y[ne];
        return Z(Fe) ? void 0 : W(Fe);
      };
    }), ai = Ae((ee, V) => {
      var W = gr(), Z = dr(), Y = Or(), ne = TypeError;
      V.exports = function(Fe, je) {
        var he, qe;
        if (je === "string" && Z(he = Fe.toString) && !Y(qe = W(he, Fe)) || Z(he = Fe.valueOf) && !Y(qe = W(he, Fe)) || je !== "string" && Z(he = Fe.toString) && !Y(qe = W(he, Fe)))
          return qe;
        throw ne("Can't convert object to primitive value");
      };
    }), oi = Ae((ee, V) => {
      V.exports = !1;
    }), hn = Ae((ee, V) => {
      var W = Yt(), Z = Object.defineProperty;
      V.exports = function(Y, ne) {
        try {
          Z(W, Y, { value: ne, configurable: !0, writable: !0 });
        } catch {
          W[Y] = ne;
        }
        return ne;
      };
    }), gn = Ae((ee, V) => {
      var W = Yt(), Z = hn(), Y = "__core-js_shared__", ne = W[Y] || Z(Y, {});
      V.exports = ne;
    }), Wn = Ae((ee, V) => {
      var W = oi(), Z = gn();
      (V.exports = function(Y, ne) {
        return Z[Y] || (Z[Y] = ne !== void 0 ? ne : {});
      })("versions", []).push({ version: "3.26.1", mode: W ? "pure" : "global", copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE", source: "https://github.com/zloirock/core-js" });
    }), Sn = Ae((ee, V) => {
      var W = qn(), Z = Object;
      V.exports = function(Y) {
        return Z(W(Y));
      };
    }), kr = Ae((ee, V) => {
      var W = Dr(), Z = Sn(), Y = W({}.hasOwnProperty);
      V.exports = Object.hasOwn || function(ne, Fe) {
        return Y(Z(ne), Fe);
      };
    }), zn = Ae((ee, V) => {
      var W = Dr(), Z = 0, Y = Math.random(), ne = W(1 .toString);
      V.exports = function(Fe) {
        return "Symbol(" + (Fe === void 0 ? "" : Fe) + ")_" + ne(++Z + Y, 36);
      };
    }), $r = Ae((ee, V) => {
      var W = Yt(), Z = Wn(), Y = kr(), ne = zn(), Fe = Gn(), je = Jn(), he = Z("wks"), qe = W.Symbol, et = qe && qe.for, Ze = je ? qe : qe && qe.withoutSetter || ne;
      V.exports = function(nt) {
        if (!Y(he, nt) || !(Fe || typeof he[nt] == "string")) {
          var rt = "Symbol." + nt;
          Fe && Y(qe, nt) ? he[nt] = qe[nt] : je && et ? he[nt] = et(rt) : he[nt] = Ze(rt);
        }
        return he[nt];
      };
    }), li = Ae((ee, V) => {
      var W = gr(), Z = Or(), Y = Xn(), ne = mn(), Fe = ai(), je = $r(), he = TypeError, qe = je("toPrimitive");
      V.exports = function(et, Ze) {
        if (!Z(et) || Y(et))
          return et;
        var nt = ne(et, qe), rt;
        if (nt) {
          if (Ze === void 0 && (Ze = "default"), rt = W(nt, et, Ze), !Z(rt) || Y(rt))
            return rt;
          throw he("Can't convert object to primitive value");
        }
        return Ze === void 0 && (Ze = "number"), Fe(et, Ze);
      };
    }), yn = Ae((ee, V) => {
      var W = li(), Z = Xn();
      V.exports = function(Y) {
        var ne = W(Y, "string");
        return Z(ne) ? ne : ne + "";
      };
    }), pi = Ae((ee, V) => {
      var W = Yt(), Z = Or(), Y = W.document, ne = Z(Y) && Z(Y.createElement);
      V.exports = function(Fe) {
        return ne ? Y.createElement(Fe) : {};
      };
    }), Hn = Ae((ee, V) => {
      var W = br(), Z = hr(), Y = pi();
      V.exports = !W && !Z(function() {
        return Object.defineProperty(Y("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }), Yn = Ae((ee) => {
      var V = br(), W = gr(), Z = Dn(), Y = Lr(), ne = dn(), Fe = yn(), je = kr(), he = Hn(), qe = Object.getOwnPropertyDescriptor;
      ee.f = V ? qe : function(et, Ze) {
        if (et = ne(et), Ze = Fe(Ze), he)
          try {
            return qe(et, Ze);
          } catch {
          }
        if (je(et, Ze))
          return Y(!W(Z.f, et, Ze), et[Ze]);
      };
    }), ci = Ae((ee, V) => {
      var W = br(), Z = hr();
      V.exports = W && Z(function() {
        return Object.defineProperty(function() {
        }, "prototype", { value: 42, writable: !1 }).prototype != 42;
      });
    }), Wr = Ae((ee, V) => {
      var W = Or(), Z = String, Y = TypeError;
      V.exports = function(ne) {
        if (W(ne))
          return ne;
        throw Y(Z(ne) + " is not an object");
      };
    }), en = Ae((ee) => {
      var V = br(), W = Hn(), Z = ci(), Y = Wr(), ne = yn(), Fe = TypeError, je = Object.defineProperty, he = Object.getOwnPropertyDescriptor, qe = "enumerable", et = "configurable", Ze = "writable";
      ee.f = V ? Z ? function(nt, rt, $) {
        if (Y(nt), rt = ne(rt), Y($), typeof nt == "function" && rt === "prototype" && "value" in $ && Ze in $ && !$[Ze]) {
          var Ft = he(nt, rt);
          Ft && Ft[Ze] && (nt[rt] = $.value, $ = { configurable: et in $ ? $[et] : Ft[et], enumerable: qe in $ ? $[qe] : Ft[qe], writable: !1 });
        }
        return je(nt, rt, $);
      } : je : function(nt, rt, $) {
        if (Y(nt), rt = ne(rt), Y($), W)
          try {
            return je(nt, rt, $);
          } catch {
          }
        if ("get" in $ || "set" in $)
          throw Fe("Accessors not supported");
        return "value" in $ && (nt[rt] = $.value), nt;
      };
    }), Kn = Ae((ee, V) => {
      var W = br(), Z = en(), Y = Lr();
      V.exports = W ? function(ne, Fe, je) {
        return Z.f(ne, Fe, Y(1, je));
      } : function(ne, Fe, je) {
        return ne[Fe] = je, ne;
      };
    }), Di = Ae((ee, V) => {
      var W = br(), Z = kr(), Y = Function.prototype, ne = W && Object.getOwnPropertyDescriptor, Fe = Z(Y, "name"), je = Fe && (function() {
      }).name === "something", he = Fe && (!W || W && ne(Y, "name").configurable);
      V.exports = { EXISTS: Fe, PROPER: je, CONFIGURABLE: he };
    }), Qn = Ae((ee, V) => {
      var W = Dr(), Z = dr(), Y = gn(), ne = W(Function.toString);
      Z(Y.inspectSource) || (Y.inspectSource = function(Fe) {
        return ne(Fe);
      }), V.exports = Y.inspectSource;
    }), di = Ae((ee, V) => {
      var W = Yt(), Z = dr(), Y = W.WeakMap;
      V.exports = Z(Y) && /native code/.test(String(Y));
    }), fi = Ae((ee, V) => {
      var W = Wn(), Z = zn(), Y = W("keys");
      V.exports = function(ne) {
        return Y[ne] || (Y[ne] = Z(ne));
      };
    }), Zn = Ae((ee, V) => {
      V.exports = {};
    }), mi = Ae((ee, V) => {
      var W = di(), Z = Yt(), Y = Or(), ne = Kn(), Fe = kr(), je = gn(), he = fi(), qe = Zn(), et = "Object already initialized", Ze = Z.TypeError, nt = Z.WeakMap, rt, $, Ft, At = function(ue) {
        return Ft(ue) ? $(ue) : rt(ue, {});
      }, Lt = function(ue) {
        return function(yr) {
          var Pr;
          if (!Y(yr) || (Pr = $(yr)).type !== ue)
            throw Ze("Incompatible receiver, " + ue + " required");
          return Pr;
        };
      };
      W || je.state ? (qt = je.state || (je.state = new nt()), qt.get = qt.get, qt.has = qt.has, qt.set = qt.set, rt = function(ue, yr) {
        if (qt.has(ue))
          throw Ze(et);
        return yr.facade = ue, qt.set(ue, yr), yr;
      }, $ = function(ue) {
        return qt.get(ue) || {};
      }, Ft = function(ue) {
        return qt.has(ue);
      }) : (Zt = he("state"), qe[Zt] = !0, rt = function(ue, yr) {
        if (Fe(ue, Zt))
          throw Ze(et);
        return yr.facade = ue, ne(ue, Zt, yr), yr;
      }, $ = function(ue) {
        return Fe(ue, Zt) ? ue[Zt] : {};
      }, Ft = function(ue) {
        return Fe(ue, Zt);
      });
      var qt, Zt;
      V.exports = { set: rt, get: $, has: Ft, enforce: At, getterFor: Lt };
    }), gu = Ae((ee, V) => {
      var W = hr(), Z = dr(), Y = kr(), ne = br(), Fe = Di().CONFIGURABLE, je = Qn(), he = mi(), qe = he.enforce, et = he.get, Ze = Object.defineProperty, nt = ne && !W(function() {
        return Ze(function() {
        }, "length", { value: 8 }).length !== 8;
      }), rt = String(String).split("String"), $ = V.exports = function(Ft, At, Lt) {
        String(At).slice(0, 7) === "Symbol(" && (At = "[" + String(At).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), Lt && Lt.getter && (At = "get " + At), Lt && Lt.setter && (At = "set " + At), (!Y(Ft, "name") || Fe && Ft.name !== At) && (ne ? Ze(Ft, "name", { value: At, configurable: !0 }) : Ft.name = At), nt && Lt && Y(Lt, "arity") && Ft.length !== Lt.arity && Ze(Ft, "length", { value: Lt.arity });
        try {
          Lt && Y(Lt, "constructor") && Lt.constructor ? ne && Ze(Ft, "prototype", { writable: !1 }) : Ft.prototype && (Ft.prototype = void 0);
        } catch {
        }
        var qt = qe(Ft);
        return Y(qt, "source") || (qt.source = rt.join(typeof At == "string" ? At : "")), Ft;
      };
      Function.prototype.toString = $(function() {
        return Z(this) && et(this).source || je(this);
      }, "toString");
    }), hi = Ae((ee, V) => {
      var W = dr(), Z = en(), Y = gu(), ne = hn();
      V.exports = function(Fe, je, he, qe) {
        qe || (qe = {});
        var et = qe.enumerable, Ze = qe.name !== void 0 ? qe.name : je;
        if (W(he) && Y(he, Ze, qe), qe.global)
          et ? Fe[je] = he : ne(je, he);
        else {
          try {
            qe.unsafe ? Fe[je] && (et = !0) : delete Fe[je];
          } catch {
          }
          et ? Fe[je] = he : Z.f(Fe, je, { value: he, enumerable: !1, configurable: !qe.nonConfigurable, writable: !qe.nonWritable });
        }
        return Fe;
      };
    }), gi = Ae((ee, V) => {
      var W = Math.ceil, Z = Math.floor;
      V.exports = Math.trunc || function(Y) {
        var ne = +Y;
        return (ne > 0 ? Z : W)(ne);
      };
    }), xn = Ae((ee, V) => {
      var W = gi();
      V.exports = function(Z) {
        var Y = +Z;
        return Y !== Y || Y === 0 ? 0 : W(Y);
      };
    }), yi = Ae((ee, V) => {
      var W = xn(), Z = Math.max, Y = Math.min;
      V.exports = function(ne, Fe) {
        var je = W(ne);
        return je < 0 ? Z(je + Fe, 0) : Y(je, Fe);
      };
    }), Ei = Ae((ee, V) => {
      var W = xn(), Z = Math.min;
      V.exports = function(Y) {
        return Y > 0 ? Z(W(Y), 9007199254740991) : 0;
      };
    }), tn = Ae((ee, V) => {
      var W = Ei();
      V.exports = function(Z) {
        return W(Z.length);
      };
    }), Ci = Ae((ee, V) => {
      var W = dn(), Z = yi(), Y = tn(), ne = function(Fe) {
        return function(je, he, qe) {
          var et = W(je), Ze = Y(et), nt = Z(qe, Ze), rt;
          if (Fe && he != he) {
            for (; Ze > nt; )
              if (rt = et[nt++], rt != rt)
                return !0;
          } else
            for (; Ze > nt; nt++)
              if ((Fe || nt in et) && et[nt] === he)
                return Fe || nt || 0;
          return !Fe && -1;
        };
      };
      V.exports = { includes: ne(!0), indexOf: ne(!1) };
    }), Fi = Ae((ee, V) => {
      var W = Dr(), Z = kr(), Y = dn(), ne = Ci().indexOf, Fe = Zn(), je = W([].push);
      V.exports = function(he, qe) {
        var et = Y(he), Ze = 0, nt = [], rt;
        for (rt in et)
          !Z(Fe, rt) && Z(et, rt) && je(nt, rt);
        for (; qe.length > Ze; )
          Z(et, rt = qe[Ze++]) && (~ne(nt, rt) || je(nt, rt));
        return nt;
      };
    }), Ai = Ae((ee, V) => {
      V.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    }), vi = Ae((ee) => {
      var V = Fi(), W = Ai(), Z = W.concat("length", "prototype");
      ee.f = Object.getOwnPropertyNames || function(Y) {
        return V(Y, Z);
      };
    }), bi = Ae((ee) => {
      ee.f = Object.getOwnPropertySymbols;
    }), Si = Ae((ee, V) => {
      var W = un(), Z = Dr(), Y = vi(), ne = bi(), Fe = Wr(), je = Z([].concat);
      V.exports = W("Reflect", "ownKeys") || function(he) {
        var qe = Y.f(Fe(he)), et = ne.f;
        return et ? je(qe, et(he)) : qe;
      };
    }), xi = Ae((ee, V) => {
      var W = kr(), Z = Si(), Y = Yn(), ne = en();
      V.exports = function(Fe, je, he) {
        for (var qe = Z(je), et = ne.f, Ze = Y.f, nt = 0; nt < qe.length; nt++) {
          var rt = qe[nt];
          !W(Fe, rt) && !(he && W(he, rt)) && et(Fe, rt, Ze(je, rt));
        }
      };
    }), Ti = Ae((ee, V) => {
      var W = hr(), Z = dr(), Y = /#|\.prototype\./, ne = function(et, Ze) {
        var nt = je[Fe(et)];
        return nt == qe ? !0 : nt == he ? !1 : Z(Ze) ? W(Ze) : !!Ze;
      }, Fe = ne.normalize = function(et) {
        return String(et).replace(Y, ".").toLowerCase();
      }, je = ne.data = {}, he = ne.NATIVE = "N", qe = ne.POLYFILL = "P";
      V.exports = ne;
    }), an = Ae((ee, V) => {
      var W = Yt(), Z = Yn().f, Y = Kn(), ne = hi(), Fe = hn(), je = xi(), he = Ti();
      V.exports = function(qe, et) {
        var Ze = qe.target, nt = qe.global, rt = qe.stat, $, Ft, At, Lt, qt, Zt;
        if (nt ? Ft = W : rt ? Ft = W[Ze] || Fe(Ze, {}) : Ft = (W[Ze] || {}).prototype, Ft)
          for (At in et) {
            if (qt = et[At], qe.dontCallGetSet ? (Zt = Z(Ft, At), Lt = Zt && Zt.value) : Lt = Ft[At], $ = he(nt ? At : Ze + (rt ? "." : "#") + At, qe.forced), !$ && Lt !== void 0) {
              if (typeof qt == typeof Lt)
                continue;
              je(qt, Lt);
            }
            (qe.sham || Lt && Lt.sham) && Y(qt, "sham", !0), ne(Ft, At, qt, qe);
          }
      };
    }), yu = Ae((ee, V) => {
      var W = Br();
      V.exports = Array.isArray || function(Z) {
        return W(Z) == "Array";
      };
    }), Bi = Ae((ee, V) => {
      var W = TypeError, Z = 9007199254740991;
      V.exports = function(Y) {
        if (Y > Z)
          throw W("Maximum allowed index exceeded");
        return Y;
      };
    }), Eu = Ae((ee, V) => {
      var W = Br(), Z = Dr();
      V.exports = function(Y) {
        if (W(Y) === "Function")
          return Z(Y);
      };
    }), Cu = Ae((ee, V) => {
      var W = Eu(), Z = sn(), Y = Hr(), ne = W(W.bind);
      V.exports = function(Fe, je) {
        return Z(Fe), je === void 0 ? Fe : Y ? ne(Fe, je) : function() {
          return Fe.apply(je, arguments);
        };
      };
    }), Fu = Ae((ee, V) => {
      var W = yu(), Z = tn(), Y = Bi(), ne = Cu(), Fe = function(je, he, qe, et, Ze, nt, rt, $) {
        for (var Ft = Ze, At = 0, Lt = rt ? ne(rt, $) : !1, qt, Zt; At < et; )
          At in qe && (qt = Lt ? Lt(qe[At], At, he) : qe[At], nt > 0 && W(qt) ? (Zt = Z(qt), Ft = Fe(je, he, qt, Zt, Ft, nt - 1) - 1) : (Y(Ft + 1), je[Ft] = qt), Ft++), At++;
        return Ft;
      };
      V.exports = Fe;
    }), Au = Ae((ee, V) => {
      var W = $r(), Z = W("toStringTag"), Y = {};
      Y[Z] = "z", V.exports = String(Y) === "[object z]";
    }), vu = Ae((ee, V) => {
      var W = Au(), Z = dr(), Y = Br(), ne = $r(), Fe = ne("toStringTag"), je = Object, he = Y(function() {
        return arguments;
      }()) == "Arguments", qe = function(et, Ze) {
        try {
          return et[Ze];
        } catch {
        }
      };
      V.exports = W ? Y : function(et) {
        var Ze, nt, rt;
        return et === void 0 ? "Undefined" : et === null ? "Null" : typeof (nt = qe(Ze = je(et), Fe)) == "string" ? nt : he ? Y(Ze) : (rt = Y(Ze)) == "Object" && Z(Ze.callee) ? "Arguments" : rt;
      };
    }), wi = Ae((ee, V) => {
      var W = Dr(), Z = hr(), Y = dr(), ne = vu(), Fe = un(), je = Qn(), he = function() {
      }, qe = [], et = Fe("Reflect", "construct"), Ze = /^\s*(?:class|function)\b/, nt = W(Ze.exec), rt = !Ze.exec(he), $ = function(At) {
        if (!Y(At))
          return !1;
        try {
          return et(he, qe, At), !0;
        } catch {
          return !1;
        }
      }, Ft = function(At) {
        if (!Y(At))
          return !1;
        switch (ne(At)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return !1;
        }
        try {
          return rt || !!nt(Ze, je(At));
        } catch {
          return !0;
        }
      };
      Ft.sham = !0, V.exports = !et || Z(function() {
        var At;
        return $($.call) || !$(Object) || !$(function() {
          At = !0;
        }) || At;
      }) ? Ft : $;
    }), bu = Ae((ee, V) => {
      var W = yu(), Z = wi(), Y = Or(), ne = $r(), Fe = ne("species"), je = Array;
      V.exports = function(he) {
        var qe;
        return W(he) && (qe = he.constructor, Z(qe) && (qe === je || W(qe.prototype)) ? qe = void 0 : Y(qe) && (qe = qe[Fe], qe === null && (qe = void 0))), qe === void 0 ? je : qe;
      };
    }), Su = Ae((ee, V) => {
      var W = bu();
      V.exports = function(Z, Y) {
        return new (W(Z))(Y === 0 ? 0 : Y);
      };
    }), Ni = Ae(() => {
      var ee = an(), V = Fu(), W = sn(), Z = Sn(), Y = tn(), ne = Su();
      ee({ target: "Array", proto: !0 }, { flatMap: function(Fe) {
        var je = Z(this), he = Y(je), qe;
        return W(Fe), qe = ne(je, 0), qe.length = V(qe, je, je, he, 0, 1, Fe, arguments.length > 1 ? arguments[1] : void 0), qe;
      } });
    }), xu = Ae((ee, V) => {
      V.exports = {};
    }), _i = Ae((ee, V) => {
      var W = $r(), Z = xu(), Y = W("iterator"), ne = Array.prototype;
      V.exports = function(Fe) {
        return Fe !== void 0 && (Z.Array === Fe || ne[Y] === Fe);
      };
    }), eu = Ae((ee, V) => {
      var W = vu(), Z = mn(), Y = nn(), ne = xu(), Fe = $r(), je = Fe("iterator");
      V.exports = function(he) {
        if (!Y(he))
          return Z(he, je) || Z(he, "@@iterator") || ne[W(he)];
      };
    }), ki = Ae((ee, V) => {
      var W = gr(), Z = sn(), Y = Wr(), ne = fn(), Fe = eu(), je = TypeError;
      V.exports = function(he, qe) {
        var et = arguments.length < 2 ? Fe(he) : qe;
        if (Z(et))
          return Y(W(et, he));
        throw je(ne(he) + " is not iterable");
      };
    }), Tu = Ae((ee, V) => {
      var W = gr(), Z = Wr(), Y = mn();
      V.exports = function(ne, Fe, je) {
        var he, qe;
        Z(ne);
        try {
          if (he = Y(ne, "return"), !he) {
            if (Fe === "throw")
              throw je;
            return je;
          }
          he = W(he, ne);
        } catch (et) {
          qe = !0, he = et;
        }
        if (Fe === "throw")
          throw je;
        if (qe)
          throw he;
        return Z(he), je;
      };
    }), Pi = Ae((ee, V) => {
      var W = Cu(), Z = gr(), Y = Wr(), ne = fn(), Fe = _i(), je = tn(), he = Un(), qe = ki(), et = eu(), Ze = Tu(), nt = TypeError, rt = function(Ft, At) {
        this.stopped = Ft, this.result = At;
      }, $ = rt.prototype;
      V.exports = function(Ft, At, Lt) {
        var qt = Lt && Lt.that, Zt = !!(Lt && Lt.AS_ENTRIES), ue = !!(Lt && Lt.IS_RECORD), yr = !!(Lt && Lt.IS_ITERATOR), Pr = !!(Lt && Lt.INTERRUPTED), zr = W(At, qt), fr, Rr, mr, rn, wr, Fr, Tn, Bn = function(Nr) {
          return fr && Ze(fr, "normal", Nr), new rt(!0, Nr);
        }, on = function(Nr) {
          return Zt ? (Y(Nr), Pr ? zr(Nr[0], Nr[1], Bn) : zr(Nr[0], Nr[1])) : Pr ? zr(Nr, Bn) : zr(Nr);
        };
        if (ue)
          fr = Ft.iterator;
        else if (yr)
          fr = Ft;
        else {
          if (Rr = et(Ft), !Rr)
            throw nt(ne(Ft) + " is not iterable");
          if (Fe(Rr)) {
            for (mr = 0, rn = je(Ft); rn > mr; mr++)
              if (wr = on(Ft[mr]), wr && he($, wr))
                return wr;
            return new rt(!1);
          }
          fr = qe(Ft, Rr);
        }
        for (Fr = ue ? Ft.next : fr.next; !(Tn = Z(Fr, fr)).done; ) {
          try {
            wr = on(Tn.value);
          } catch (Nr) {
            Ze(fr, "throw", Nr);
          }
          if (typeof wr == "object" && wr && he($, wr))
            return wr;
        }
        return new rt(!1);
      };
    }), Ii = Ae((ee, V) => {
      var W = yn(), Z = en(), Y = Lr();
      V.exports = function(ne, Fe, je) {
        var he = W(Fe);
        he in ne ? Z.f(ne, he, Y(0, je)) : ne[he] = je;
      };
    }), ji = Ae(() => {
      var ee = an(), V = Pi(), W = Ii();
      ee({ target: "Object", stat: !0 }, { fromEntries: function(Z) {
        var Y = {};
        return V(Z, function(ne, Fe) {
          W(Y, ne, Fe);
        }, { AS_ENTRIES: !0 }), Y;
      } });
    }), Li = Ae((ee, V) => {
      var W = gu(), Z = en();
      V.exports = function(Y, ne, Fe) {
        return Fe.get && W(Fe.get, ne, { getter: !0 }), Fe.set && W(Fe.set, ne, { setter: !0 }), Z.f(Y, ne, Fe);
      };
    }), Oi = Ae((ee, V) => {
      var W = Wr();
      V.exports = function() {
        var Z = W(this), Y = "";
        return Z.hasIndices && (Y += "d"), Z.global && (Y += "g"), Z.ignoreCase && (Y += "i"), Z.multiline && (Y += "m"), Z.dotAll && (Y += "s"), Z.unicode && (Y += "u"), Z.unicodeSets && (Y += "v"), Z.sticky && (Y += "y"), Y;
      };
    }), $i = Ae(() => {
      var ee = Yt(), V = br(), W = Li(), Z = Oi(), Y = hr(), ne = ee.RegExp, Fe = ne.prototype, je = V && Y(function() {
        var he = !0;
        try {
          ne(".", "d");
        } catch {
          he = !1;
        }
        var qe = {}, et = "", Ze = he ? "dgimsy" : "gimsy", nt = function(At, Lt) {
          Object.defineProperty(qe, At, { get: function() {
            return et += Lt, !0;
          } });
        }, rt = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
        he && (rt.hasIndices = "d");
        for (var $ in rt)
          nt($, rt[$]);
        var Ft = Object.getOwnPropertyDescriptor(Fe, "flags").get.call(qe);
        return Ft !== Ze || et !== Ze;
      });
      je && W(Fe, "flags", { configurable: !0, get: Z });
    }), ot = Ae(() => {
      var ee = an(), V = Yt();
      ee({ global: !0, forced: V.globalThis !== V }, { globalThis: V });
    }), Ne = Ae(() => {
      ot();
    }), Se = Ae(() => {
      var ee = an(), V = Fu(), W = Sn(), Z = tn(), Y = xn(), ne = Su();
      ee({ target: "Array", proto: !0 }, { flat: function() {
        var Fe = arguments.length ? arguments[0] : void 0, je = W(this), he = Z(je), qe = ne(je, 0);
        return qe.length = V(qe, je, je, he, 0, Fe === void 0 ? 1 : Y(Fe)), qe;
      } });
    }), Oe = Ae((ee, V) => {
      var W = ["cliName", "cliCategory", "cliDescription"], Z = ["_"], Y = ["languageId"];
      function ne(u, l) {
        if (u == null)
          return {};
        var t = Fe(u, l), a, s;
        if (Object.getOwnPropertySymbols) {
          var e = Object.getOwnPropertySymbols(u);
          for (s = 0; s < e.length; s++)
            a = e[s], !(l.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(u, a) && (t[a] = u[a]);
        }
        return t;
      }
      function Fe(u, l) {
        if (u == null)
          return {};
        var t = {}, a = Object.keys(u), s, e;
        for (e = 0; e < a.length; e++)
          s = a[e], !(l.indexOf(s) >= 0) && (t[s] = u[s]);
        return t;
      }
      Ni(), ji(), $i(), Ne(), Se();
      var je = Object.create, he = Object.defineProperty, qe = Object.getOwnPropertyDescriptor, et = Object.getOwnPropertyNames, Ze = Object.getPrototypeOf, nt = Object.prototype.hasOwnProperty, rt = (u, l) => function() {
        return u && (l = (0, u[et(u)[0]])(u = 0)), l;
      }, $ = (u, l) => function() {
        return l || (0, u[et(u)[0]])((l = { exports: {} }).exports, l), l.exports;
      }, Ft = (u, l) => {
        for (var t in l)
          he(u, t, { get: l[t], enumerable: !0 });
      }, At = (u, l, t, a) => {
        if (l && typeof l == "object" || typeof l == "function")
          for (let s of et(l))
            !nt.call(u, s) && s !== t && he(u, s, { get: () => l[s], enumerable: !(a = qe(l, s)) || a.enumerable });
        return u;
      }, Lt = (u, l, t) => (t = u != null ? je(Ze(u)) : {}, At(l || !u || !u.__esModule ? he(t, "default", { value: u, enumerable: !0 }) : t, u)), qt = (u) => At(he({}, "__esModule", { value: !0 }), u), Zt, ue = rt({ "<define:process>"() {
        Zt = { env: {}, argv: [] };
      } }), yr = $({ "package.json"(u, l) {
        l.exports = { version: "2.8.8" };
      } }), Pr = $({ "node_modules/diff/lib/diff/base.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 }), u.default = l;
        function l() {
        }
        l.prototype = { diff: function(s, e) {
          var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = r.callback;
          typeof r == "function" && (n = r, r = {}), this.options = r;
          var o = this;
          function c(A) {
            return n ? (setTimeout(function() {
              n(void 0, A);
            }, 0), !0) : A;
          }
          s = this.castInput(s), e = this.castInput(e), s = this.removeEmpty(this.tokenize(s)), e = this.removeEmpty(this.tokenize(e));
          var y = e.length, m = s.length, g = 1, p = y + m, D = [{ newPos: -1, components: [] }], C = this.extractCommon(D[0], e, s, 0);
          if (D[0].newPos + 1 >= y && C + 1 >= m)
            return c([{ value: this.join(e), count: e.length }]);
          function w() {
            for (var A = -1 * g; A <= g; A += 2) {
              var N = void 0, x = D[A - 1], P = D[A + 1], _ = (P ? P.newPos : 0) - A;
              x && (D[A - 1] = void 0);
              var J = x && x.newPos + 1 < y, d = P && 0 <= _ && _ < m;
              if (!J && !d) {
                D[A] = void 0;
                continue;
              }
              if (!J || d && x.newPos < P.newPos ? (N = a(P), o.pushComponent(N.components, void 0, !0)) : (N = x, N.newPos++, o.pushComponent(N.components, !0, void 0)), _ = o.extractCommon(N, e, s, A), N.newPos + 1 >= y && _ + 1 >= m)
                return c(t(o, N.components, e, s, o.useLongestToken));
              D[A] = N;
            }
            g++;
          }
          if (n)
            (function A() {
              setTimeout(function() {
                if (g > p)
                  return n();
                w() || A();
              }, 0);
            })();
          else
            for (; g <= p; ) {
              var k = w();
              if (k)
                return k;
            }
        }, pushComponent: function(s, e, r) {
          var n = s[s.length - 1];
          n && n.added === e && n.removed === r ? s[s.length - 1] = { count: n.count + 1, added: e, removed: r } : s.push({ count: 1, added: e, removed: r });
        }, extractCommon: function(s, e, r, n) {
          for (var o = e.length, c = r.length, y = s.newPos, m = y - n, g = 0; y + 1 < o && m + 1 < c && this.equals(e[y + 1], r[m + 1]); )
            y++, m++, g++;
          return g && s.components.push({ count: g }), s.newPos = y, m;
        }, equals: function(s, e) {
          return this.options.comparator ? this.options.comparator(s, e) : s === e || this.options.ignoreCase && s.toLowerCase() === e.toLowerCase();
        }, removeEmpty: function(s) {
          for (var e = [], r = 0; r < s.length; r++)
            s[r] && e.push(s[r]);
          return e;
        }, castInput: function(s) {
          return s;
        }, tokenize: function(s) {
          return s.split("");
        }, join: function(s) {
          return s.join("");
        } };
        function t(s, e, r, n, o) {
          for (var c = 0, y = e.length, m = 0, g = 0; c < y; c++) {
            var p = e[c];
            if (p.removed) {
              if (p.value = s.join(n.slice(g, g + p.count)), g += p.count, c && e[c - 1].added) {
                var D = e[c - 1];
                e[c - 1] = e[c], e[c] = D;
              }
            } else {
              if (!p.added && o) {
                var C = r.slice(m, m + p.count);
                C = C.map(function(k, A) {
                  var N = n[g + A];
                  return N.length > k.length ? N : k;
                }), p.value = s.join(C);
              } else
                p.value = s.join(r.slice(m, m + p.count));
              m += p.count, p.added || (g += p.count);
            }
          }
          var w = e[y - 1];
          return y > 1 && typeof w.value == "string" && (w.added || w.removed) && s.equals("", w.value) && (e[y - 2].value += w.value, e.pop()), e;
        }
        function a(s) {
          return { newPos: s.newPos, components: s.components.slice(0) };
        }
      } }), zr = $({ "node_modules/diff/lib/diff/array.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 }), u.diffArrays = s, u.arrayDiff = void 0;
        var l = t(Pr());
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var a = new l.default();
        u.arrayDiff = a, a.tokenize = function(e) {
          return e.slice();
        }, a.join = a.removeEmpty = function(e) {
          return e;
        };
        function s(e, r, n) {
          return a.diff(e, r, n);
        }
      } }), fr = $({ "src/document/doc-builders.js"(u, l) {
        ue();
        function t(F) {
          return { type: "concat", parts: F };
        }
        function a(F) {
          return { type: "indent", contents: F };
        }
        function s(F, i) {
          return { type: "align", contents: i, n: F };
        }
        function e(F) {
          let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return { type: "group", id: i.id, contents: F, break: !!i.shouldBreak, expandedStates: i.expandedStates };
        }
        function r(F) {
          return s(Number.NEGATIVE_INFINITY, F);
        }
        function n(F) {
          return s({ type: "root" }, F);
        }
        function o(F) {
          return s(-1, F);
        }
        function c(F, i) {
          return e(F[0], Object.assign(Object.assign({}, i), {}, { expandedStates: F }));
        }
        function y(F) {
          return { type: "fill", parts: F };
        }
        function m(F, i) {
          let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return { type: "if-break", breakContents: F, flatContents: i, groupId: h.groupId };
        }
        function g(F, i) {
          return { type: "indent-if-break", contents: F, groupId: i.groupId, negate: i.negate };
        }
        function p(F) {
          return { type: "line-suffix", contents: F };
        }
        var D = { type: "line-suffix-boundary" }, C = { type: "break-parent" }, w = { type: "trim" }, k = { type: "line", hard: !0 }, A = { type: "line", hard: !0, literal: !0 }, N = { type: "line" }, x = { type: "line", soft: !0 }, P = t([k, C]), _ = t([A, C]), J = { type: "cursor", placeholder: Symbol("cursor") };
        function d(F, i) {
          let h = [];
          for (let E = 0; E < i.length; E++)
            E !== 0 && h.push(F), h.push(i[E]);
          return t(h);
        }
        function T(F, i, h) {
          let E = F;
          if (i > 0) {
            for (let b = 0; b < Math.floor(i / h); ++b)
              E = a(E);
            E = s(i % h, E), E = s(Number.NEGATIVE_INFINITY, E);
          }
          return E;
        }
        function f(F, i) {
          return { type: "label", label: F, contents: i };
        }
        l.exports = { concat: t, join: d, line: N, softline: x, hardline: P, literalline: _, group: e, conditionalGroup: c, fill: y, lineSuffix: p, lineSuffixBoundary: D, cursor: J, breakParent: C, ifBreak: m, trim: w, indent: a, indentIfBreak: g, align: s, addAlignmentToDoc: T, markAsRoot: n, dedentToRoot: r, dedent: o, hardlineWithoutBreakParent: k, literallineWithoutBreakParent: A, label: f };
      } }), Rr = $({ "src/common/end-of-line.js"(u, l) {
        ue();
        function t(r) {
          let n = r.indexOf("\r");
          return n >= 0 ? r.charAt(n + 1) === `
` ? "crlf" : "cr" : "lf";
        }
        function a(r) {
          switch (r) {
            case "cr":
              return "\r";
            case "crlf":
              return `\r
`;
            default:
              return `
`;
          }
        }
        function s(r, n) {
          let o;
          switch (n) {
            case `
`:
              o = /\n/g;
              break;
            case "\r":
              o = /\r/g;
              break;
            case `\r
`:
              o = /\r\n/g;
              break;
            default:
              throw new Error(`Unexpected "eol" ${JSON.stringify(n)}.`);
          }
          let c = r.match(o);
          return c ? c.length : 0;
        }
        function e(r) {
          return r.replace(/\r\n?/g, `
`);
        }
        l.exports = { guessEndOfLine: t, convertEndOfLineToChars: a, countEndOfLineChars: s, normalizeEndOfLine: e };
      } }), mr = $({ "src/utils/get-last.js"(u, l) {
        ue();
        var t = (a) => a[a.length - 1];
        l.exports = t;
      } });
      function rn() {
        let { onlyFirst: u = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(l, u ? void 0 : "g");
      }
      var wr = rt({ "node_modules/strip-ansi/node_modules/ansi-regex/index.js"() {
        ue();
      } });
      function Fr(u) {
        if (typeof u != "string")
          throw new TypeError(`Expected a \`string\`, got \`${typeof u}\``);
        return u.replace(rn(), "");
      }
      var Tn = rt({ "node_modules/strip-ansi/index.js"() {
        ue(), wr();
      } });
      function Bn(u) {
        return Number.isInteger(u) ? u >= 4352 && (u <= 4447 || u === 9001 || u === 9002 || 11904 <= u && u <= 12871 && u !== 12351 || 12880 <= u && u <= 19903 || 19968 <= u && u <= 42182 || 43360 <= u && u <= 43388 || 44032 <= u && u <= 55203 || 63744 <= u && u <= 64255 || 65040 <= u && u <= 65049 || 65072 <= u && u <= 65131 || 65281 <= u && u <= 65376 || 65504 <= u && u <= 65510 || 110592 <= u && u <= 110593 || 127488 <= u && u <= 127569 || 131072 <= u && u <= 262141) : !1;
      }
      var on = rt({ "node_modules/is-fullwidth-code-point/index.js"() {
        ue();
      } }), Nr = $({ "node_modules/emoji-regex/index.js"(u, l) {
        ue(), l.exports = function() {
          return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
        };
      } }), Bu = {};
      Ft(Bu, { default: () => Ri });
      function Ri(u) {
        if (typeof u != "string" || u.length === 0 || (u = Fr(u), u.length === 0))
          return 0;
        u = u.replace((0, wu.default)(), "  ");
        let l = 0;
        for (let t = 0; t < u.length; t++) {
          let a = u.codePointAt(t);
          a <= 31 || a >= 127 && a <= 159 || a >= 768 && a <= 879 || (a > 65535 && t++, l += Bn(a) ? 2 : 1);
        }
        return l;
      }
      var wu, Mi = rt({ "node_modules/string-width/index.js"() {
        ue(), Tn(), on(), wu = Lt(Nr());
      } }), Nu = $({ "src/utils/get-string-width.js"(u, l) {
        ue();
        var t = (Mi(), qt(Bu)).default, a = /[^\x20-\x7F]/;
        function s(e) {
          return e ? a.test(e) ? t(e) : e.length : 0;
        }
        l.exports = s;
      } }), En = $({ "src/document/doc-utils.js"(u, l) {
        ue();
        var t = mr(), { literalline: a, join: s } = fr(), e = (i) => Array.isArray(i) || i && i.type === "concat", r = (i) => {
          if (Array.isArray(i))
            return i;
          if (i.type !== "concat" && i.type !== "fill")
            throw new Error("Expect doc type to be `concat` or `fill`.");
          return i.parts;
        }, n = {};
        function o(i, h, E, b) {
          let S = [i];
          for (; S.length > 0; ) {
            let B = S.pop();
            if (B === n) {
              E(S.pop());
              continue;
            }
            if (E && S.push(B, n), !h || h(B) !== !1)
              if (e(B) || B.type === "fill") {
                let I = r(B);
                for (let q = I.length, G = q - 1; G >= 0; --G)
                  S.push(I[G]);
              } else if (B.type === "if-break")
                B.flatContents && S.push(B.flatContents), B.breakContents && S.push(B.breakContents);
              else if (B.type === "group" && B.expandedStates)
                if (b)
                  for (let I = B.expandedStates.length, q = I - 1; q >= 0; --q)
                    S.push(B.expandedStates[q]);
                else
                  S.push(B.contents);
              else
                B.contents && S.push(B.contents);
          }
        }
        function c(i, h) {
          let E = /* @__PURE__ */ new Map();
          return b(i);
          function b(B) {
            if (E.has(B))
              return E.get(B);
            let I = S(B);
            return E.set(B, I), I;
          }
          function S(B) {
            if (Array.isArray(B))
              return h(B.map(b));
            if (B.type === "concat" || B.type === "fill") {
              let I = B.parts.map(b);
              return h(Object.assign(Object.assign({}, B), {}, { parts: I }));
            }
            if (B.type === "if-break") {
              let I = B.breakContents && b(B.breakContents), q = B.flatContents && b(B.flatContents);
              return h(Object.assign(Object.assign({}, B), {}, { breakContents: I, flatContents: q }));
            }
            if (B.type === "group" && B.expandedStates) {
              let I = B.expandedStates.map(b), q = I[0];
              return h(Object.assign(Object.assign({}, B), {}, { contents: q, expandedStates: I }));
            }
            if (B.contents) {
              let I = b(B.contents);
              return h(Object.assign(Object.assign({}, B), {}, { contents: I }));
            }
            return h(B);
          }
        }
        function y(i, h, E) {
          let b = E, S = !1;
          function B(I) {
            let q = h(I);
            if (q !== void 0 && (S = !0, b = q), S)
              return !1;
          }
          return o(i, B), b;
        }
        function m(i) {
          if (i.type === "group" && i.break || i.type === "line" && i.hard || i.type === "break-parent")
            return !0;
        }
        function g(i) {
          return y(i, m, !1);
        }
        function p(i) {
          if (i.length > 0) {
            let h = t(i);
            !h.expandedStates && !h.break && (h.break = "propagated");
          }
          return null;
        }
        function D(i) {
          let h = /* @__PURE__ */ new Set(), E = [];
          function b(B) {
            if (B.type === "break-parent" && p(E), B.type === "group") {
              if (E.push(B), h.has(B))
                return !1;
              h.add(B);
            }
          }
          function S(B) {
            B.type === "group" && E.pop().break && p(E);
          }
          o(i, b, S, !0);
        }
        function C(i) {
          return i.type === "line" && !i.hard ? i.soft ? "" : " " : i.type === "if-break" ? i.flatContents || "" : i;
        }
        function w(i) {
          return c(i, C);
        }
        var k = (i, h) => i && i.type === "line" && i.hard && h && h.type === "break-parent";
        function A(i) {
          if (!i)
            return i;
          if (e(i) || i.type === "fill") {
            let h = r(i);
            for (; h.length > 1 && k(...h.slice(-2)); )
              h.length -= 2;
            if (h.length > 0) {
              let E = A(t(h));
              h[h.length - 1] = E;
            }
            return Array.isArray(i) ? h : Object.assign(Object.assign({}, i), {}, { parts: h });
          }
          switch (i.type) {
            case "align":
            case "indent":
            case "indent-if-break":
            case "group":
            case "line-suffix":
            case "label": {
              let h = A(i.contents);
              return Object.assign(Object.assign({}, i), {}, { contents: h });
            }
            case "if-break": {
              let h = A(i.breakContents), E = A(i.flatContents);
              return Object.assign(Object.assign({}, i), {}, { breakContents: h, flatContents: E });
            }
          }
          return i;
        }
        function N(i) {
          return A(P(i));
        }
        function x(i) {
          switch (i.type) {
            case "fill":
              if (i.parts.every((E) => E === ""))
                return "";
              break;
            case "group":
              if (!i.contents && !i.id && !i.break && !i.expandedStates)
                return "";
              if (i.contents.type === "group" && i.contents.id === i.id && i.contents.break === i.break && i.contents.expandedStates === i.expandedStates)
                return i.contents;
              break;
            case "align":
            case "indent":
            case "indent-if-break":
            case "line-suffix":
              if (!i.contents)
                return "";
              break;
            case "if-break":
              if (!i.flatContents && !i.breakContents)
                return "";
              break;
          }
          if (!e(i))
            return i;
          let h = [];
          for (let E of r(i)) {
            if (!E)
              continue;
            let [b, ...S] = e(E) ? r(E) : [E];
            typeof b == "string" && typeof t(h) == "string" ? h[h.length - 1] += b : h.push(b), h.push(...S);
          }
          return h.length === 0 ? "" : h.length === 1 ? h[0] : Array.isArray(i) ? h : Object.assign(Object.assign({}, i), {}, { parts: h });
        }
        function P(i) {
          return c(i, (h) => x(h));
        }
        function _(i) {
          let h = [], E = i.filter(Boolean);
          for (; E.length > 0; ) {
            let b = E.shift();
            if (b) {
              if (e(b)) {
                E.unshift(...r(b));
                continue;
              }
              if (h.length > 0 && typeof t(h) == "string" && typeof b == "string") {
                h[h.length - 1] += b;
                continue;
              }
              h.push(b);
            }
          }
          return h;
        }
        function J(i) {
          return c(i, (h) => Array.isArray(h) ? _(h) : h.parts ? Object.assign(Object.assign({}, h), {}, { parts: _(h.parts) }) : h);
        }
        function d(i) {
          return c(i, (h) => typeof h == "string" && h.includes(`
`) ? T(h) : h);
        }
        function T(i) {
          let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a;
          return s(h, i.split(`
`)).parts;
        }
        function f(i) {
          if (i.type === "line")
            return !0;
        }
        function F(i) {
          return y(i, f, !1);
        }
        l.exports = { isConcat: e, getDocParts: r, willBreak: g, traverseDoc: o, findInDoc: y, mapDoc: c, propagateBreaks: D, removeLines: w, stripTrailingHardline: N, normalizeParts: _, normalizeDoc: J, cleanDoc: P, replaceTextEndOfLine: T, replaceEndOfLine: d, canBreak: F };
      } }), qi = $({ "src/document/doc-printer.js"(u, l) {
        ue();
        var { convertEndOfLineToChars: t } = Rr(), a = mr(), s = Nu(), { fill: e, cursor: r, indent: n } = fr(), { isConcat: o, getDocParts: c } = En(), y, m = 1, g = 2;
        function p() {
          return { value: "", length: 0, queue: [] };
        }
        function D(x, P) {
          return w(x, { type: "indent" }, P);
        }
        function C(x, P, _) {
          return P === Number.NEGATIVE_INFINITY ? x.root || p() : P < 0 ? w(x, { type: "dedent" }, _) : P ? P.type === "root" ? Object.assign(Object.assign({}, x), {}, { root: x }) : w(x, { type: typeof P == "string" ? "stringAlign" : "numberAlign", n: P }, _) : x;
        }
        function w(x, P, _) {
          let J = P.type === "dedent" ? x.queue.slice(0, -1) : [...x.queue, P], d = "", T = 0, f = 0, F = 0;
          for (let I of J)
            switch (I.type) {
              case "indent":
                E(), _.useTabs ? i(1) : h(_.tabWidth);
                break;
              case "stringAlign":
                E(), d += I.n, T += I.n.length;
                break;
              case "numberAlign":
                f += 1, F += I.n;
                break;
              default:
                throw new Error(`Unexpected type '${I.type}'`);
            }
          return S(), Object.assign(Object.assign({}, x), {}, { value: d, length: T, queue: J });
          function i(I) {
            d += "	".repeat(I), T += _.tabWidth * I;
          }
          function h(I) {
            d += " ".repeat(I), T += I;
          }
          function E() {
            _.useTabs ? b() : S();
          }
          function b() {
            f > 0 && i(f), B();
          }
          function S() {
            F > 0 && h(F), B();
          }
          function B() {
            f = 0, F = 0;
          }
        }
        function k(x) {
          if (x.length === 0)
            return 0;
          let P = 0;
          for (; x.length > 0 && typeof a(x) == "string" && /^[\t ]*$/.test(a(x)); )
            P += x.pop().length;
          if (x.length > 0 && typeof a(x) == "string") {
            let _ = a(x).replace(/[\t ]*$/, "");
            P += a(x).length - _.length, x[x.length - 1] = _;
          }
          return P;
        }
        function A(x, P, _, J, d) {
          let T = P.length, f = [x], F = [];
          for (; _ >= 0; ) {
            if (f.length === 0) {
              if (T === 0)
                return !0;
              f.push(P[--T]);
              continue;
            }
            let { mode: i, doc: h } = f.pop();
            if (typeof h == "string")
              F.push(h), _ -= s(h);
            else if (o(h) || h.type === "fill") {
              let E = c(h);
              for (let b = E.length - 1; b >= 0; b--)
                f.push({ mode: i, doc: E[b] });
            } else
              switch (h.type) {
                case "indent":
                case "align":
                case "indent-if-break":
                case "label":
                  f.push({ mode: i, doc: h.contents });
                  break;
                case "trim":
                  _ += k(F);
                  break;
                case "group": {
                  if (d && h.break)
                    return !1;
                  let E = h.break ? m : i, b = h.expandedStates && E === m ? a(h.expandedStates) : h.contents;
                  f.push({ mode: E, doc: b });
                  break;
                }
                case "if-break": {
                  let E = (h.groupId ? y[h.groupId] || g : i) === m ? h.breakContents : h.flatContents;
                  E && f.push({ mode: i, doc: E });
                  break;
                }
                case "line":
                  if (i === m || h.hard)
                    return !0;
                  h.soft || (F.push(" "), _--);
                  break;
                case "line-suffix":
                  J = !0;
                  break;
                case "line-suffix-boundary":
                  if (J)
                    return !1;
                  break;
              }
          }
          return !1;
        }
        function N(x, P) {
          y = {};
          let _ = P.printWidth, J = t(P.endOfLine), d = 0, T = [{ ind: p(), mode: m, doc: x }], f = [], F = !1, i = [];
          for (; T.length > 0; ) {
            let { ind: E, mode: b, doc: S } = T.pop();
            if (typeof S == "string") {
              let B = J !== `
` ? S.replace(/\n/g, J) : S;
              f.push(B), d += s(B);
            } else if (o(S)) {
              let B = c(S);
              for (let I = B.length - 1; I >= 0; I--)
                T.push({ ind: E, mode: b, doc: B[I] });
            } else
              switch (S.type) {
                case "cursor":
                  f.push(r.placeholder);
                  break;
                case "indent":
                  T.push({ ind: D(E, P), mode: b, doc: S.contents });
                  break;
                case "align":
                  T.push({ ind: C(E, S.n, P), mode: b, doc: S.contents });
                  break;
                case "trim":
                  d -= k(f);
                  break;
                case "group":
                  switch (b) {
                    case g:
                      if (!F) {
                        T.push({ ind: E, mode: S.break ? m : g, doc: S.contents });
                        break;
                      }
                    case m: {
                      F = !1;
                      let B = { ind: E, mode: g, doc: S.contents }, I = _ - d, q = i.length > 0;
                      if (!S.break && A(B, T, I, q))
                        T.push(B);
                      else if (S.expandedStates) {
                        let G = a(S.expandedStates);
                        if (S.break) {
                          T.push({ ind: E, mode: m, doc: G });
                          break;
                        } else
                          for (let M = 1; M < S.expandedStates.length + 1; M++)
                            if (M >= S.expandedStates.length) {
                              T.push({ ind: E, mode: m, doc: G });
                              break;
                            } else {
                              let te = S.expandedStates[M], j = { ind: E, mode: g, doc: te };
                              if (A(j, T, I, q)) {
                                T.push(j);
                                break;
                              }
                            }
                      } else
                        T.push({ ind: E, mode: m, doc: S.contents });
                      break;
                    }
                  }
                  S.id && (y[S.id] = a(T).mode);
                  break;
                case "fill": {
                  let B = _ - d, { parts: I } = S;
                  if (I.length === 0)
                    break;
                  let [q, G] = I, M = { ind: E, mode: g, doc: q }, te = { ind: E, mode: m, doc: q }, j = A(M, [], B, i.length > 0, !0);
                  if (I.length === 1) {
                    j ? T.push(M) : T.push(te);
                    break;
                  }
                  let De = { ind: E, mode: g, doc: G }, U = { ind: E, mode: m, doc: G };
                  if (I.length === 2) {
                    j ? T.push(De, M) : T.push(U, te);
                    break;
                  }
                  I.splice(0, 2);
                  let R = { ind: E, mode: b, doc: e(I) }, pe = I[0];
                  A({ ind: E, mode: g, doc: [q, G, pe] }, [], B, i.length > 0, !0) ? T.push(R, De, M) : j ? T.push(R, U, M) : T.push(R, U, te);
                  break;
                }
                case "if-break":
                case "indent-if-break": {
                  let B = S.groupId ? y[S.groupId] : b;
                  if (B === m) {
                    let I = S.type === "if-break" ? S.breakContents : S.negate ? S.contents : n(S.contents);
                    I && T.push({ ind: E, mode: b, doc: I });
                  }
                  if (B === g) {
                    let I = S.type === "if-break" ? S.flatContents : S.negate ? n(S.contents) : S.contents;
                    I && T.push({ ind: E, mode: b, doc: I });
                  }
                  break;
                }
                case "line-suffix":
                  i.push({ ind: E, mode: b, doc: S.contents });
                  break;
                case "line-suffix-boundary":
                  i.length > 0 && T.push({ ind: E, mode: b, doc: { type: "line", hard: !0 } });
                  break;
                case "line":
                  switch (b) {
                    case g:
                      if (S.hard)
                        F = !0;
                      else {
                        S.soft || (f.push(" "), d += 1);
                        break;
                      }
                    case m:
                      if (i.length > 0) {
                        T.push({ ind: E, mode: b, doc: S }, ...i.reverse()), i.length = 0;
                        break;
                      }
                      S.literal ? E.root ? (f.push(J, E.root.value), d = E.root.length) : (f.push(J), d = 0) : (d -= k(f), f.push(J + E.value), d = E.length);
                      break;
                  }
                  break;
                case "label":
                  T.push({ ind: E, mode: b, doc: S.contents });
                  break;
              }
            T.length === 0 && i.length > 0 && (T.push(...i.reverse()), i.length = 0);
          }
          let h = f.indexOf(r.placeholder);
          if (h !== -1) {
            let E = f.indexOf(r.placeholder, h + 1), b = f.slice(0, h).join(""), S = f.slice(h + 1, E).join(""), B = f.slice(E + 1).join("");
            return { formatted: b + S + B, cursorNodeStart: b.length, cursorNodeText: S };
          }
          return { formatted: f.join("") };
        }
        l.exports = { printDocToString: N };
      } }), Vi = $({ "src/document/doc-debug.js"(u, l) {
        ue();
        var { isConcat: t, getDocParts: a } = En();
        function s(r) {
          if (!r)
            return "";
          if (t(r)) {
            let n = [];
            for (let o of a(r))
              if (t(o))
                n.push(...s(o).parts);
              else {
                let c = s(o);
                c !== "" && n.push(c);
              }
            return { type: "concat", parts: n };
          }
          return r.type === "if-break" ? Object.assign(Object.assign({}, r), {}, { breakContents: s(r.breakContents), flatContents: s(r.flatContents) }) : r.type === "group" ? Object.assign(Object.assign({}, r), {}, { contents: s(r.contents), expandedStates: r.expandedStates && r.expandedStates.map(s) }) : r.type === "fill" ? { type: "fill", parts: r.parts.map(s) } : r.contents ? Object.assign(Object.assign({}, r), {}, { contents: s(r.contents) }) : r;
        }
        function e(r) {
          let n = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Set();
          return c(s(r));
          function c(m, g, p) {
            if (typeof m == "string")
              return JSON.stringify(m);
            if (t(m)) {
              let D = a(m).map(c).filter(Boolean);
              return D.length === 1 ? D[0] : `[${D.join(", ")}]`;
            }
            if (m.type === "line") {
              let D = Array.isArray(p) && p[g + 1] && p[g + 1].type === "break-parent";
              return m.literal ? D ? "literalline" : "literallineWithoutBreakParent" : m.hard ? D ? "hardline" : "hardlineWithoutBreakParent" : m.soft ? "softline" : "line";
            }
            if (m.type === "break-parent")
              return Array.isArray(p) && p[g - 1] && p[g - 1].type === "line" && p[g - 1].hard ? void 0 : "breakParent";
            if (m.type === "trim")
              return "trim";
            if (m.type === "indent")
              return "indent(" + c(m.contents) + ")";
            if (m.type === "align")
              return m.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + c(m.contents) + ")" : m.n < 0 ? "dedent(" + c(m.contents) + ")" : m.n.type === "root" ? "markAsRoot(" + c(m.contents) + ")" : "align(" + JSON.stringify(m.n) + ", " + c(m.contents) + ")";
            if (m.type === "if-break")
              return "ifBreak(" + c(m.breakContents) + (m.flatContents ? ", " + c(m.flatContents) : "") + (m.groupId ? (m.flatContents ? "" : ', ""') + `, { groupId: ${y(m.groupId)} }` : "") + ")";
            if (m.type === "indent-if-break") {
              let D = [];
              m.negate && D.push("negate: true"), m.groupId && D.push(`groupId: ${y(m.groupId)}`);
              let C = D.length > 0 ? `, { ${D.join(", ")} }` : "";
              return `indentIfBreak(${c(m.contents)}${C})`;
            }
            if (m.type === "group") {
              let D = [];
              m.break && m.break !== "propagated" && D.push("shouldBreak: true"), m.id && D.push(`id: ${y(m.id)}`);
              let C = D.length > 0 ? `, { ${D.join(", ")} }` : "";
              return m.expandedStates ? `conditionalGroup([${m.expandedStates.map((w) => c(w)).join(",")}]${C})` : `group(${c(m.contents)}${C})`;
            }
            if (m.type === "fill")
              return `fill([${m.parts.map((D) => c(D)).join(", ")}])`;
            if (m.type === "line-suffix")
              return "lineSuffix(" + c(m.contents) + ")";
            if (m.type === "line-suffix-boundary")
              return "lineSuffixBoundary";
            if (m.type === "label")
              return `label(${JSON.stringify(m.label)}, ${c(m.contents)})`;
            throw new Error("Unknown doc type " + m.type);
          }
          function y(m) {
            if (typeof m != "symbol")
              return JSON.stringify(String(m));
            if (m in n)
              return n[m];
            let g = String(m).slice(7, -1) || "symbol";
            for (let p = 0; ; p++) {
              let D = g + (p > 0 ? ` #${p}` : "");
              if (!o.has(D))
                return o.add(D), n[m] = `Symbol.for(${JSON.stringify(D)})`;
            }
          }
        }
        l.exports = { printDocToDebug: e };
      } }), wt = $({ "src/document/index.js"(u, l) {
        ue(), l.exports = { builders: fr(), printer: qi(), utils: En(), debug: Vi() };
      } }), _u = {};
      Ft(_u, { default: () => Ui });
      function Ui(u) {
        if (typeof u != "string")
          throw new TypeError("Expected a string");
        return u.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
      }
      var Gi = rt({ "node_modules/escape-string-regexp/index.js"() {
        ue();
      } }), ku = $({ "node_modules/semver/internal/debug.js"(u, l) {
        ue();
        var t = typeof Zt == "object" && Zt.env && Zt.env.NODE_DEBUG && /\bsemver\b/i.test(Zt.env.NODE_DEBUG) ? function() {
          for (var a = arguments.length, s = new Array(a), e = 0; e < a; e++)
            s[e] = arguments[e];
          return console.error("SEMVER", ...s);
        } : () => {
        };
        l.exports = t;
      } }), Pu = $({ "node_modules/semver/internal/constants.js"(u, l) {
        ue();
        var t = "2.0.0", a = 256, s = Number.MAX_SAFE_INTEGER || 9007199254740991, e = 16;
        l.exports = { SEMVER_SPEC_VERSION: t, MAX_LENGTH: a, MAX_SAFE_INTEGER: s, MAX_SAFE_COMPONENT_LENGTH: e };
      } }), Iu = $({ "node_modules/semver/internal/re.js"(u, l) {
        ue();
        var { MAX_SAFE_COMPONENT_LENGTH: t } = Pu(), a = ku();
        u = l.exports = {};
        var s = u.re = [], e = u.src = [], r = u.t = {}, n = 0, o = (c, y, m) => {
          let g = n++;
          a(c, g, y), r[c] = g, e[g] = y, s[g] = new RegExp(y, m ? "g" : void 0);
        };
        o("NUMERICIDENTIFIER", "0|[1-9]\\d*"), o("NUMERICIDENTIFIERLOOSE", "[0-9]+"), o("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), o("MAINVERSION", `(${e[r.NUMERICIDENTIFIER]})\\.(${e[r.NUMERICIDENTIFIER]})\\.(${e[r.NUMERICIDENTIFIER]})`), o("MAINVERSIONLOOSE", `(${e[r.NUMERICIDENTIFIERLOOSE]})\\.(${e[r.NUMERICIDENTIFIERLOOSE]})\\.(${e[r.NUMERICIDENTIFIERLOOSE]})`), o("PRERELEASEIDENTIFIER", `(?:${e[r.NUMERICIDENTIFIER]}|${e[r.NONNUMERICIDENTIFIER]})`), o("PRERELEASEIDENTIFIERLOOSE", `(?:${e[r.NUMERICIDENTIFIERLOOSE]}|${e[r.NONNUMERICIDENTIFIER]})`), o("PRERELEASE", `(?:-(${e[r.PRERELEASEIDENTIFIER]}(?:\\.${e[r.PRERELEASEIDENTIFIER]})*))`), o("PRERELEASELOOSE", `(?:-?(${e[r.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${e[r.PRERELEASEIDENTIFIERLOOSE]})*))`), o("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), o("BUILD", `(?:\\+(${e[r.BUILDIDENTIFIER]}(?:\\.${e[r.BUILDIDENTIFIER]})*))`), o("FULLPLAIN", `v?${e[r.MAINVERSION]}${e[r.PRERELEASE]}?${e[r.BUILD]}?`), o("FULL", `^${e[r.FULLPLAIN]}$`), o("LOOSEPLAIN", `[v=\\s]*${e[r.MAINVERSIONLOOSE]}${e[r.PRERELEASELOOSE]}?${e[r.BUILD]}?`), o("LOOSE", `^${e[r.LOOSEPLAIN]}$`), o("GTLT", "((?:<|>)?=?)"), o("XRANGEIDENTIFIERLOOSE", `${e[r.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), o("XRANGEIDENTIFIER", `${e[r.NUMERICIDENTIFIER]}|x|X|\\*`), o("XRANGEPLAIN", `[v=\\s]*(${e[r.XRANGEIDENTIFIER]})(?:\\.(${e[r.XRANGEIDENTIFIER]})(?:\\.(${e[r.XRANGEIDENTIFIER]})(?:${e[r.PRERELEASE]})?${e[r.BUILD]}?)?)?`), o("XRANGEPLAINLOOSE", `[v=\\s]*(${e[r.XRANGEIDENTIFIERLOOSE]})(?:\\.(${e[r.XRANGEIDENTIFIERLOOSE]})(?:\\.(${e[r.XRANGEIDENTIFIERLOOSE]})(?:${e[r.PRERELEASELOOSE]})?${e[r.BUILD]}?)?)?`), o("XRANGE", `^${e[r.GTLT]}\\s*${e[r.XRANGEPLAIN]}$`), o("XRANGELOOSE", `^${e[r.GTLT]}\\s*${e[r.XRANGEPLAINLOOSE]}$`), o("COERCE", `(^|[^\\d])(\\d{1,${t}})(?:\\.(\\d{1,${t}}))?(?:\\.(\\d{1,${t}}))?(?:$|[^\\d])`), o("COERCERTL", e[r.COERCE], !0), o("LONETILDE", "(?:~>?)"), o("TILDETRIM", `(\\s*)${e[r.LONETILDE]}\\s+`, !0), u.tildeTrimReplace = "$1~", o("TILDE", `^${e[r.LONETILDE]}${e[r.XRANGEPLAIN]}$`), o("TILDELOOSE", `^${e[r.LONETILDE]}${e[r.XRANGEPLAINLOOSE]}$`), o("LONECARET", "(?:\\^)"), o("CARETTRIM", `(\\s*)${e[r.LONECARET]}\\s+`, !0), u.caretTrimReplace = "$1^", o("CARET", `^${e[r.LONECARET]}${e[r.XRANGEPLAIN]}$`), o("CARETLOOSE", `^${e[r.LONECARET]}${e[r.XRANGEPLAINLOOSE]}$`), o("COMPARATORLOOSE", `^${e[r.GTLT]}\\s*(${e[r.LOOSEPLAIN]})$|^$`), o("COMPARATOR", `^${e[r.GTLT]}\\s*(${e[r.FULLPLAIN]})$|^$`), o("COMPARATORTRIM", `(\\s*)${e[r.GTLT]}\\s*(${e[r.LOOSEPLAIN]}|${e[r.XRANGEPLAIN]})`, !0), u.comparatorTrimReplace = "$1$2$3", o("HYPHENRANGE", `^\\s*(${e[r.XRANGEPLAIN]})\\s+-\\s+(${e[r.XRANGEPLAIN]})\\s*$`), o("HYPHENRANGELOOSE", `^\\s*(${e[r.XRANGEPLAINLOOSE]})\\s+-\\s+(${e[r.XRANGEPLAINLOOSE]})\\s*$`), o("STAR", "(<|>)?=?\\s*\\*"), o("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), o("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
      } }), Ji = $({ "node_modules/semver/internal/parse-options.js"(u, l) {
        ue();
        var t = ["includePrerelease", "loose", "rtl"], a = (s) => s ? typeof s != "object" ? { loose: !0 } : t.filter((e) => s[e]).reduce((e, r) => (e[r] = !0, e), {}) : {};
        l.exports = a;
      } }), ju = $({ "node_modules/semver/internal/identifiers.js"(u, l) {
        ue();
        var t = /^[0-9]+$/, a = (e, r) => {
          let n = t.test(e), o = t.test(r);
          return n && o && (e = +e, r = +r), e === r ? 0 : n && !o ? -1 : o && !n ? 1 : e < r ? -1 : 1;
        }, s = (e, r) => a(r, e);
        l.exports = { compareIdentifiers: a, rcompareIdentifiers: s };
      } }), Xi = $({ "node_modules/semver/classes/semver.js"(u, l) {
        ue();
        var t = ku(), { MAX_LENGTH: a, MAX_SAFE_INTEGER: s } = Pu(), { re: e, t: r } = Iu(), n = Ji(), { compareIdentifiers: o } = ju(), c = class {
          constructor(y, m) {
            if (m = n(m), y instanceof c) {
              if (y.loose === !!m.loose && y.includePrerelease === !!m.includePrerelease)
                return y;
              y = y.version;
            } else if (typeof y != "string")
              throw new TypeError(`Invalid Version: ${y}`);
            if (y.length > a)
              throw new TypeError(`version is longer than ${a} characters`);
            t("SemVer", y, m), this.options = m, this.loose = !!m.loose, this.includePrerelease = !!m.includePrerelease;
            let g = y.trim().match(m.loose ? e[r.LOOSE] : e[r.FULL]);
            if (!g)
              throw new TypeError(`Invalid Version: ${y}`);
            if (this.raw = y, this.major = +g[1], this.minor = +g[2], this.patch = +g[3], this.major > s || this.major < 0)
              throw new TypeError("Invalid major version");
            if (this.minor > s || this.minor < 0)
              throw new TypeError("Invalid minor version");
            if (this.patch > s || this.patch < 0)
              throw new TypeError("Invalid patch version");
            g[4] ? this.prerelease = g[4].split(".").map((p) => {
              if (/^[0-9]+$/.test(p)) {
                let D = +p;
                if (D >= 0 && D < s)
                  return D;
              }
              return p;
            }) : this.prerelease = [], this.build = g[5] ? g[5].split(".") : [], this.format();
          }
          format() {
            return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
          }
          toString() {
            return this.version;
          }
          compare(y) {
            if (t("SemVer.compare", this.version, this.options, y), !(y instanceof c)) {
              if (typeof y == "string" && y === this.version)
                return 0;
              y = new c(y, this.options);
            }
            return y.version === this.version ? 0 : this.compareMain(y) || this.comparePre(y);
          }
          compareMain(y) {
            return y instanceof c || (y = new c(y, this.options)), o(this.major, y.major) || o(this.minor, y.minor) || o(this.patch, y.patch);
          }
          comparePre(y) {
            if (y instanceof c || (y = new c(y, this.options)), this.prerelease.length && !y.prerelease.length)
              return -1;
            if (!this.prerelease.length && y.prerelease.length)
              return 1;
            if (!this.prerelease.length && !y.prerelease.length)
              return 0;
            let m = 0;
            do {
              let g = this.prerelease[m], p = y.prerelease[m];
              if (t("prerelease compare", m, g, p), g === void 0 && p === void 0)
                return 0;
              if (p === void 0)
                return 1;
              if (g === void 0)
                return -1;
              if (g !== p)
                return o(g, p);
            } while (++m);
          }
          compareBuild(y) {
            y instanceof c || (y = new c(y, this.options));
            let m = 0;
            do {
              let g = this.build[m], p = y.build[m];
              if (t("prerelease compare", m, g, p), g === void 0 && p === void 0)
                return 0;
              if (p === void 0)
                return 1;
              if (g === void 0)
                return -1;
              if (g !== p)
                return o(g, p);
            } while (++m);
          }
          inc(y, m) {
            switch (y) {
              case "premajor":
                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", m);
                break;
              case "preminor":
                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", m);
                break;
              case "prepatch":
                this.prerelease.length = 0, this.inc("patch", m), this.inc("pre", m);
                break;
              case "prerelease":
                this.prerelease.length === 0 && this.inc("patch", m), this.inc("pre", m);
                break;
              case "major":
                (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                break;
              case "minor":
                (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
                break;
              case "patch":
                this.prerelease.length === 0 && this.patch++, this.prerelease = [];
                break;
              case "pre":
                if (this.prerelease.length === 0)
                  this.prerelease = [0];
                else {
                  let g = this.prerelease.length;
                  for (; --g >= 0; )
                    typeof this.prerelease[g] == "number" && (this.prerelease[g]++, g = -2);
                  g === -1 && this.prerelease.push(0);
                }
                m && (o(this.prerelease[0], m) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = [m, 0]) : this.prerelease = [m, 0]);
                break;
              default:
                throw new Error(`invalid increment argument: ${y}`);
            }
            return this.format(), this.raw = this.version, this;
          }
        };
        l.exports = c;
      } }), tu = $({ "node_modules/semver/functions/compare.js"(u, l) {
        ue();
        var t = Xi(), a = (s, e, r) => new t(s, r).compare(new t(e, r));
        l.exports = a;
      } }), ru = $({ "node_modules/semver/functions/lt.js"(u, l) {
        ue();
        var t = tu(), a = (s, e, r) => t(s, e, r) < 0;
        l.exports = a;
      } }), Lu = $({ "node_modules/semver/functions/gte.js"(u, l) {
        ue();
        var t = tu(), a = (s, e, r) => t(s, e, r) >= 0;
        l.exports = a;
      } }), Ou = $({ "src/utils/arrayify.js"(u, l) {
        ue(), l.exports = (t, a) => Object.entries(t).map((s) => {
          let [e, r] = s;
          return Object.assign({ [a]: e }, r);
        });
      } }), $u = $({ "node_modules/outdent/lib/index.js"(u, l) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 }), u.outdent = void 0;
        function t() {
          for (var A = [], N = 0; N < arguments.length; N++)
            A[N] = arguments[N];
        }
        function a() {
          return typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : s();
        }
        function s() {
          return { add: t, delete: t, get: t, set: t, has: function(A) {
            return !1;
          } };
        }
        var e = Object.prototype.hasOwnProperty, r = function(A, N) {
          return e.call(A, N);
        };
        function n(A, N) {
          for (var x in N)
            r(N, x) && (A[x] = N[x]);
          return A;
        }
        var o = /^[ \t]*(?:\r\n|\r|\n)/, c = /(?:\r\n|\r|\n)[ \t]*$/, y = /^(?:[\r\n]|$)/, m = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, g = /^[ \t]*[\r\n][ \t\r\n]*$/;
        function p(A, N, x) {
          var P = 0, _ = A[0].match(m);
          _ && (P = _[1].length);
          var J = "(\\r\\n|\\r|\\n).{0," + P + "}", d = new RegExp(J, "g");
          N && (A = A.slice(1));
          var T = x.newline, f = x.trimLeadingNewline, F = x.trimTrailingNewline, i = typeof T == "string", h = A.length, E = A.map(function(b, S) {
            return b = b.replace(d, "$1"), S === 0 && f && (b = b.replace(o, "")), S === h - 1 && F && (b = b.replace(c, "")), i && (b = b.replace(/\r\n|\n|\r/g, function(B) {
              return T;
            })), b;
          });
          return E;
        }
        function D(A, N) {
          for (var x = "", P = 0, _ = A.length; P < _; P++)
            x += A[P], P < _ - 1 && (x += N[P]);
          return x;
        }
        function C(A) {
          return r(A, "raw") && r(A, "length");
        }
        function w(A) {
          var N = a(), x = a();
          function P(J) {
            for (var d = [], T = 1; T < arguments.length; T++)
              d[T - 1] = arguments[T];
            if (C(J)) {
              var f = J, F = (d[0] === P || d[0] === k) && g.test(f[0]) && y.test(f[1]), i = F ? x : N, h = i.get(f);
              if (h || (h = p(f, F, A), i.set(f, h)), d.length === 0)
                return h[0];
              var E = D(h, F ? d.slice(1) : d);
              return E;
            } else
              return w(n(n({}, A), J || {}));
          }
          var _ = n(P, { string: function(J) {
            return p([J], !1, A)[0];
          } });
          return _;
        }
        var k = w({ trimLeadingNewline: !0, trimTrailingNewline: !0 });
        if (u.outdent = k, u.default = k, typeof l < "u")
          try {
            l.exports = k, Object.defineProperty(k, "__esModule", { value: !0 }), k.default = k, k.outdent = k;
          } catch {
          }
      } }), Wi = $({ "src/main/core-options.js"(u, l) {
        ue();
        var { outdent: t } = $u(), a = "Config", s = "Editor", e = "Format", r = "Other", n = "Output", o = "Global", c = "Special", y = { cursorOffset: { since: "1.4.0", category: c, type: "int", default: -1, range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 }, description: t`
      Print (to stderr) where a cursor at the given position would move to after formatting.
      This option cannot be used with --range-start and --range-end.
    `, cliCategory: s }, endOfLine: { since: "1.15.0", category: o, type: "choice", default: [{ since: "1.15.0", value: "auto" }, { since: "2.0.0", value: "lf" }], description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: t`
          Maintain existing
          (mixed values within one file are normalised by looking at what's used after the first line)
        ` }] }, filepath: { since: "1.4.0", category: c, type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: r, cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { since: "1.8.0", category: c, type: "boolean", default: !1, description: "Insert @format pragma into file's first docblock comment.", cliCategory: r }, parser: { since: "0.0.10", category: o, type: "choice", default: [{ since: "0.0.10", value: "babylon" }, { since: "1.13.0", value: void 0 }], description: "Which parser to use.", exception: (m) => typeof m == "string" || typeof m == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", since: "1.16.0", description: "JavaScript" }, { value: "babel-flow", since: "1.16.0", description: "Flow" }, { value: "babel-ts", since: "2.0.0", description: "TypeScript" }, { value: "typescript", since: "1.4.0", description: "TypeScript" }, { value: "acorn", since: "2.6.0", description: "JavaScript" }, { value: "espree", since: "2.2.0", description: "JavaScript" }, { value: "meriyah", since: "2.2.0", description: "JavaScript" }, { value: "css", since: "1.7.1", description: "CSS" }, { value: "less", since: "1.7.1", description: "Less" }, { value: "scss", since: "1.7.1", description: "SCSS" }, { value: "json", since: "1.5.0", description: "JSON" }, { value: "json5", since: "1.13.0", description: "JSON5" }, { value: "json-stringify", since: "1.13.0", description: "JSON.stringify" }, { value: "graphql", since: "1.5.0", description: "GraphQL" }, { value: "markdown", since: "1.8.0", description: "Markdown" }, { value: "mdx", since: "1.15.0", description: "MDX" }, { value: "vue", since: "1.10.0", description: "Vue" }, { value: "yaml", since: "1.14.0", description: "YAML" }, { value: "glimmer", since: "2.3.0", description: "Ember / Handlebars" }, { value: "html", since: "1.15.0", description: "HTML" }, { value: "angular", since: "1.15.0", description: "Angular" }, { value: "lwc", since: "1.17.0", description: "Lightning Web Components" }] }, plugins: { since: "1.10.0", type: "path", array: !0, default: [{ value: [] }], category: o, description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (m) => typeof m == "string" || typeof m == "object", cliName: "plugin", cliCategory: a }, pluginSearchDirs: { since: "1.13.0", type: "path", array: !0, default: [{ value: [] }], category: o, description: t`
      Custom directory that contains prettier plugins in node_modules subdirectory.
      Overrides default behavior when plugins are searched relatively to the location of Prettier.
      Multiple values are accepted.
    `, exception: (m) => typeof m == "string" || typeof m == "object", cliName: "plugin-search-dir", cliCategory: a }, printWidth: { since: "0.0.0", category: o, type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, rangeEnd: { since: "1.4.0", category: c, type: "int", default: Number.POSITIVE_INFINITY, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: t`
      Format code ending at a given character offset (exclusive).
      The range will extend forwards to the end of the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: s }, rangeStart: { since: "1.4.0", category: c, type: "int", default: 0, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: t`
      Format code starting at a given character offset.
      The range will extend backwards to the start of the first line containing the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: s }, requirePragma: { since: "1.7.0", category: c, type: "boolean", default: !1, description: t`
      Require either '@prettier' or '@format' to be present in the file's first docblock comment
      in order for it to be formatted.
    `, cliCategory: r }, tabWidth: { type: "int", category: o, default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, useTabs: { since: "1.0.0", category: o, type: "boolean", default: !1, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { since: "2.1.0", category: o, type: "choice", default: [{ since: "2.1.0", value: "auto" }], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
        l.exports = { CATEGORY_CONFIG: a, CATEGORY_EDITOR: s, CATEGORY_FORMAT: e, CATEGORY_OTHER: r, CATEGORY_OUTPUT: n, CATEGORY_GLOBAL: o, CATEGORY_SPECIAL: c, options: y };
      } }), nu = $({ "src/main/support.js"(u, l) {
        ue();
        var t = { compare: tu(), lt: ru(), gte: Lu() }, a = Ou(), s = yr().version, e = Wi().options;
        function r() {
          let { plugins: o = [], showUnreleased: c = !1, showDeprecated: y = !1, showInternal: m = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, g = s.split("-", 1)[0], p = o.flatMap((A) => A.languages || []).filter(C), D = a(Object.assign({}, ...o.map((A) => {
            let { options: N } = A;
            return N;
          }), e), "name").filter((A) => C(A) && w(A)).sort((A, N) => A.name === N.name ? 0 : A.name < N.name ? -1 : 1).map(k).map((A) => {
            A = Object.assign({}, A), Array.isArray(A.default) && (A.default = A.default.length === 1 ? A.default[0].value : A.default.filter(C).sort((x, P) => t.compare(P.since, x.since))[0].value), Array.isArray(A.choices) && (A.choices = A.choices.filter((x) => C(x) && w(x)), A.name === "parser" && n(A, p, o));
            let N = Object.fromEntries(o.filter((x) => x.defaultOptions && x.defaultOptions[A.name] !== void 0).map((x) => [x.name, x.defaultOptions[A.name]]));
            return Object.assign(Object.assign({}, A), {}, { pluginDefaults: N });
          });
          return { languages: p, options: D };
          function C(A) {
            return c || !("since" in A) || A.since && t.gte(g, A.since);
          }
          function w(A) {
            return y || !("deprecated" in A) || A.deprecated && t.lt(g, A.deprecated);
          }
          function k(A) {
            return m ? A : ne(A, W);
          }
        }
        function n(o, c, y) {
          let m = new Set(o.choices.map((g) => g.value));
          for (let g of c)
            if (g.parsers) {
              for (let p of g.parsers)
                if (!m.has(p)) {
                  m.add(p);
                  let D = y.find((w) => w.parsers && w.parsers[p]), C = g.name;
                  D && D.name && (C += ` (plugin: ${D.name})`), o.choices.push({ value: p, description: C });
                }
            }
        }
        l.exports = { getSupportInfo: r };
      } }), uu = $({ "src/utils/is-non-empty-array.js"(u, l) {
        ue();
        function t(a) {
          return Array.isArray(a) && a.length > 0;
        }
        l.exports = t;
      } }), Cn = $({ "src/utils/text/skip.js"(u, l) {
        ue();
        function t(n) {
          return (o, c, y) => {
            let m = y && y.backwards;
            if (c === !1)
              return !1;
            let { length: g } = o, p = c;
            for (; p >= 0 && p < g; ) {
              let D = o.charAt(p);
              if (n instanceof RegExp) {
                if (!n.test(D))
                  return p;
              } else if (!n.includes(D))
                return p;
              m ? p-- : p++;
            }
            return p === -1 || p === g ? p : !1;
          };
        }
        var a = t(/\s/), s = t(" 	"), e = t(",; 	"), r = t(/[^\n\r]/);
        l.exports = { skipWhitespace: a, skipSpaces: s, skipToLineEnd: e, skipEverythingButNewLine: r };
      } }), Ru = $({ "src/utils/text/skip-inline-comment.js"(u, l) {
        ue();
        function t(a, s) {
          if (s === !1)
            return !1;
          if (a.charAt(s) === "/" && a.charAt(s + 1) === "*") {
            for (let e = s + 2; e < a.length; ++e)
              if (a.charAt(e) === "*" && a.charAt(e + 1) === "/")
                return e + 2;
          }
          return s;
        }
        l.exports = t;
      } }), Mu = $({ "src/utils/text/skip-trailing-comment.js"(u, l) {
        ue();
        var { skipEverythingButNewLine: t } = Cn();
        function a(s, e) {
          return e === !1 ? !1 : s.charAt(e) === "/" && s.charAt(e + 1) === "/" ? t(s, e) : e;
        }
        l.exports = a;
      } }), qu = $({ "src/utils/text/skip-newline.js"(u, l) {
        ue();
        function t(a, s, e) {
          let r = e && e.backwards;
          if (s === !1)
            return !1;
          let n = a.charAt(s);
          if (r) {
            if (a.charAt(s - 1) === "\r" && n === `
`)
              return s - 2;
            if (n === `
` || n === "\r" || n === "\u2028" || n === "\u2029")
              return s - 1;
          } else {
            if (n === "\r" && a.charAt(s + 1) === `
`)
              return s + 2;
            if (n === `
` || n === "\r" || n === "\u2028" || n === "\u2029")
              return s + 1;
          }
          return s;
        }
        l.exports = t;
      } }), zi = $({ "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js"(u, l) {
        ue();
        var t = Ru(), a = qu(), s = Mu(), { skipSpaces: e } = Cn();
        function r(n, o) {
          let c = null, y = o;
          for (; y !== c; )
            c = y, y = e(n, y), y = t(n, y), y = s(n, y), y = a(n, y);
          return y;
        }
        l.exports = r;
      } }), Gt = $({ "src/common/util.js"(u, l) {
        ue();
        var { default: t } = (Gi(), qt(_u)), a = mr(), { getSupportInfo: s } = nu(), e = uu(), r = Nu(), { skipWhitespace: n, skipSpaces: o, skipToLineEnd: c, skipEverythingButNewLine: y } = Cn(), m = Ru(), g = Mu(), p = qu(), D = zi(), C = (U) => U[U.length - 2];
        function w(U) {
          return (R, pe, be) => {
            let fe = be && be.backwards;
            if (pe === !1)
              return !1;
            let { length: Ie } = R, X = pe;
            for (; X >= 0 && X < Ie; ) {
              let se = R.charAt(X);
              if (U instanceof RegExp) {
                if (!U.test(se))
                  return X;
              } else if (!U.includes(se))
                return X;
              fe ? X-- : X++;
            }
            return X === -1 || X === Ie ? X : !1;
          };
        }
        function k(U, R) {
          let pe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, be = o(U, pe.backwards ? R - 1 : R, pe), fe = p(U, be, pe);
          return be !== fe;
        }
        function A(U, R, pe) {
          for (let be = R; be < pe; ++be)
            if (U.charAt(be) === `
`)
              return !0;
          return !1;
        }
        function N(U, R, pe) {
          let be = pe(R) - 1;
          be = o(U, be, { backwards: !0 }), be = p(U, be, { backwards: !0 }), be = o(U, be, { backwards: !0 });
          let fe = p(U, be, { backwards: !0 });
          return be !== fe;
        }
        function x(U, R) {
          let pe = null, be = R;
          for (; be !== pe; )
            pe = be, be = c(U, be), be = m(U, be), be = o(U, be);
          return be = g(U, be), be = p(U, be), be !== !1 && k(U, be);
        }
        function P(U, R, pe) {
          return x(U, pe(R));
        }
        function _(U, R, pe) {
          return D(U, pe(R));
        }
        function J(U, R, pe) {
          return U.charAt(_(U, R, pe));
        }
        function d(U, R) {
          let pe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return o(U, pe.backwards ? R - 1 : R, pe) !== R;
        }
        function T(U, R) {
          let pe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, be = 0;
          for (let fe = pe; fe < U.length; ++fe)
            U[fe] === "	" ? be = be + R - be % R : be++;
          return be;
        }
        function f(U, R) {
          let pe = U.lastIndexOf(`
`);
          return pe === -1 ? 0 : T(U.slice(pe + 1).match(/^[\t ]*/)[0], R);
        }
        function F(U, R) {
          let pe = { quote: '"', regex: /"/g, escaped: "&quot;" }, be = { quote: "'", regex: /'/g, escaped: "&apos;" }, fe = R === "'" ? be : pe, Ie = fe === be ? pe : be, X = fe;
          if (U.includes(fe.quote) || U.includes(Ie.quote)) {
            let se = (U.match(fe.regex) || []).length, we = (U.match(Ie.regex) || []).length;
            X = se > we ? Ie : fe;
          }
          return X;
        }
        function i(U, R) {
          let pe = U.slice(1, -1), be = R.parser === "json" || R.parser === "json5" && R.quoteProps === "preserve" && !R.singleQuote ? '"' : R.__isInHtmlAttribute ? "'" : F(pe, R.singleQuote ? "'" : '"').quote;
          return h(pe, be, !(R.parser === "css" || R.parser === "less" || R.parser === "scss" || R.__embeddedInHtml));
        }
        function h(U, R, pe) {
          let be = R === '"' ? "'" : '"', fe = /\\(.)|(["'])/gs, Ie = U.replace(fe, (X, se, we) => se === be ? se : we === R ? "\\" + we : we || (pe && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(se) ? se : "\\" + se));
          return R + Ie + R;
        }
        function E(U) {
          return U.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
        }
        function b(U, R) {
          let pe = U.match(new RegExp(`(${t(R)})+`, "g"));
          return pe === null ? 0 : pe.reduce((be, fe) => Math.max(be, fe.length / R.length), 0);
        }
        function S(U, R) {
          let pe = U.match(new RegExp(`(${t(R)})+`, "g"));
          if (pe === null)
            return 0;
          let be = /* @__PURE__ */ new Map(), fe = 0;
          for (let Ie of pe) {
            let X = Ie.length / R.length;
            be.set(X, !0), X > fe && (fe = X);
          }
          for (let Ie = 1; Ie < fe; Ie++)
            if (!be.get(Ie))
              return Ie;
          return fe + 1;
        }
        function B(U, R) {
          (U.comments || (U.comments = [])).push(R), R.printed = !1, R.nodeDescription = De(U);
        }
        function I(U, R) {
          R.leading = !0, R.trailing = !1, B(U, R);
        }
        function q(U, R, pe) {
          R.leading = !1, R.trailing = !1, pe && (R.marker = pe), B(U, R);
        }
        function G(U, R) {
          R.leading = !1, R.trailing = !0, B(U, R);
        }
        function M(U, R) {
          let { languages: pe } = s({ plugins: R.plugins }), be = pe.find((fe) => {
            let { name: Ie } = fe;
            return Ie.toLowerCase() === U;
          }) || pe.find((fe) => {
            let { aliases: Ie } = fe;
            return Array.isArray(Ie) && Ie.includes(U);
          }) || pe.find((fe) => {
            let { extensions: Ie } = fe;
            return Array.isArray(Ie) && Ie.includes(`.${U}`);
          });
          return be && be.parsers[0];
        }
        function te(U) {
          return U && U.type === "front-matter";
        }
        function j(U) {
          let R = /* @__PURE__ */ new WeakMap();
          return function(pe) {
            return R.has(pe) || R.set(pe, Symbol(U)), R.get(pe);
          };
        }
        function De(U) {
          let R = U.type || U.kind || "(unknown type)", pe = String(U.name || U.id && (typeof U.id == "object" ? U.id.name : U.id) || U.key && (typeof U.key == "object" ? U.key.name : U.key) || U.value && (typeof U.value == "object" ? "" : String(U.value)) || U.operator || "");
          return pe.length > 20 && (pe = pe.slice(0, 19) + "…"), R + (pe ? " " + pe : "");
        }
        l.exports = { inferParserByLanguage: M, getStringWidth: r, getMaxContinuousCount: b, getMinNotPresentContinuousCount: S, getPenultimate: C, getLast: a, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: D, getNextNonSpaceNonCommentCharacterIndex: _, getNextNonSpaceNonCommentCharacter: J, skip: w, skipWhitespace: n, skipSpaces: o, skipToLineEnd: c, skipEverythingButNewLine: y, skipInlineComment: m, skipTrailingComment: g, skipNewline: p, isNextLineEmptyAfterIndex: x, isNextLineEmpty: P, isPreviousLineEmpty: N, hasNewline: k, hasNewlineInRange: A, hasSpaces: d, getAlignmentSize: T, getIndentSize: f, getPreferredQuote: F, printString: i, printNumber: E, makeString: h, addLeadingComment: I, addDanglingComment: q, addTrailingComment: G, isFrontMatterNode: te, isNonEmptyArray: e, createGroupIdMapper: j };
      } }), Vu = {};
      Ft(Vu, { basename: () => Ju, default: () => pu, delimiter: () => pn, dirname: () => au, extname: () => Xu, isAbsolute: () => ln, join: () => su, normalize: () => iu, relative: () => Gu, resolve: () => wn, sep: () => _n });
      function Uu(u, l) {
        for (var t = 0, a = u.length - 1; a >= 0; a--) {
          var s = u[a];
          s === "." ? u.splice(a, 1) : s === ".." ? (u.splice(a, 1), t++) : t && (u.splice(a, 1), t--);
        }
        if (l)
          for (; t--; t)
            u.unshift("..");
        return u;
      }
      function wn() {
        for (var u = "", l = !1, t = arguments.length - 1; t >= -1 && !l; t--) {
          var a = t >= 0 ? arguments[t] : "/";
          if (typeof a != "string")
            throw new TypeError("Arguments to path.resolve must be strings");
          a && (u = a + "/" + u, l = a.charAt(0) === "/");
        }
        return u = Uu(ou(u.split("/"), function(s) {
          return !!s;
        }), !l).join("/"), (l ? "/" : "") + u || ".";
      }
      function iu(u) {
        var l = ln(u), t = Wu(u, -1) === "/";
        return u = Uu(ou(u.split("/"), function(a) {
          return !!a;
        }), !l).join("/"), !u && !l && (u = "."), u && t && (u += "/"), (l ? "/" : "") + u;
      }
      function ln(u) {
        return u.charAt(0) === "/";
      }
      function su() {
        var u = Array.prototype.slice.call(arguments, 0);
        return iu(ou(u, function(l, t) {
          if (typeof l != "string")
            throw new TypeError("Arguments to path.join must be strings");
          return l;
        }).join("/"));
      }
      function Gu(u, l) {
        u = wn(u).substr(1), l = wn(l).substr(1);
        function t(c) {
          for (var y = 0; y < c.length && c[y] === ""; y++)
            ;
          for (var m = c.length - 1; m >= 0 && c[m] === ""; m--)
            ;
          return y > m ? [] : c.slice(y, m - y + 1);
        }
        for (var a = t(u.split("/")), s = t(l.split("/")), e = Math.min(a.length, s.length), r = e, n = 0; n < e; n++)
          if (a[n] !== s[n]) {
            r = n;
            break;
          }
        for (var o = [], n = r; n < a.length; n++)
          o.push("..");
        return o = o.concat(s.slice(r)), o.join("/");
      }
      function au(u) {
        var l = Nn(u), t = l[0], a = l[1];
        return !t && !a ? "." : (a && (a = a.substr(0, a.length - 1)), t + a);
      }
      function Ju(u, l) {
        var t = Nn(u)[2];
        return l && t.substr(-1 * l.length) === l && (t = t.substr(0, t.length - l.length)), t;
      }
      function Xu(u) {
        return Nn(u)[3];
      }
      function ou(u, l) {
        if (u.filter)
          return u.filter(l);
        for (var t = [], a = 0; a < u.length; a++)
          l(u[a], a, u) && t.push(u[a]);
        return t;
      }
      var lu, Nn, _n, pn, pu, Wu, Hi = rt({ "node-modules-polyfills:path"() {
        ue(), lu = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, Nn = function(u) {
          return lu.exec(u).slice(1);
        }, _n = "/", pn = ":", pu = { extname: Xu, basename: Ju, dirname: au, sep: _n, delimiter: pn, relative: Gu, join: su, isAbsolute: ln, normalize: iu, resolve: wn }, Wu = "ab".substr(-1) === "b" ? function(u, l, t) {
          return u.substr(l, t);
        } : function(u, l, t) {
          return l < 0 && (l = u.length + l), u.substr(l, t);
        };
      } }), Yi = $({ "node-modules-polyfills-commonjs:path"(u, l) {
        ue();
        var t = (Hi(), qt(Vu));
        if (t && t.default) {
          l.exports = t.default;
          for (let a in t)
            l.exports[a] = t[a];
        } else
          t && (l.exports = t);
      } }), Fn = $({ "src/common/errors.js"(u, l) {
        ue();
        var t = class extends Error {
        }, a = class extends Error {
        }, s = class extends Error {
        }, e = class extends Error {
        };
        l.exports = { ConfigError: t, DebugError: a, UndefinedParserError: s, ArgExpansionBailout: e };
      } }), Yr = {};
      Ft(Yr, { __assign: () => Ve, __asyncDelegator: () => Pe, __asyncGenerator: () => Ee, __asyncValues: () => ie, __await: () => ge, __awaiter: () => es, __classPrivateFieldGet: () => gt, __classPrivateFieldSet: () => ce, __createBinding: () => rs, __decorate: () => zu, __exportStar: () => ns, __extends: () => Ki, __generator: () => ts, __importDefault: () => Ge, __importStar: () => Ue, __makeTemplateObject: () => de, __metadata: () => Zi, __param: () => Qi, __read: () => An, __rest: () => cu, __spread: () => L, __spreadArrays: () => re, __values: () => kn });
      function Ki(u, l) {
        ve(u, l);
        function t() {
          this.constructor = u;
        }
        u.prototype = l === null ? Object.create(l) : (t.prototype = l.prototype, new t());
      }
      function cu(u, l) {
        var t = {};
        for (var a in u)
          Object.prototype.hasOwnProperty.call(u, a) && l.indexOf(a) < 0 && (t[a] = u[a]);
        if (u != null && typeof Object.getOwnPropertySymbols == "function")
          for (var s = 0, a = Object.getOwnPropertySymbols(u); s < a.length; s++)
            l.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(u, a[s]) && (t[a[s]] = u[a[s]]);
        return t;
      }
      function zu(u, l, t, a) {
        var s = arguments.length, e = s < 3 ? l : a === null ? a = Object.getOwnPropertyDescriptor(l, t) : a, r;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          e = Reflect.decorate(u, l, t, a);
        else
          for (var n = u.length - 1; n >= 0; n--)
            (r = u[n]) && (e = (s < 3 ? r(e) : s > 3 ? r(l, t, e) : r(l, t)) || e);
        return s > 3 && e && Object.defineProperty(l, t, e), e;
      }
      function Qi(u, l) {
        return function(t, a) {
          l(t, a, u);
        };
      }
      function Zi(u, l) {
        if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
          return Reflect.metadata(u, l);
      }
      function es(u, l, t, a) {
        function s(e) {
          return e instanceof t ? e : new t(function(r) {
            r(e);
          });
        }
        return new (t || (t = Promise))(function(e, r) {
          function n(y) {
            try {
              c(a.next(y));
            } catch (m) {
              r(m);
            }
          }
          function o(y) {
            try {
              c(a.throw(y));
            } catch (m) {
              r(m);
            }
          }
          function c(y) {
            y.done ? e(y.value) : s(y.value).then(n, o);
          }
          c((a = a.apply(u, l || [])).next());
        });
      }
      function ts(u, l) {
        var t = { label: 0, sent: function() {
          if (e[0] & 1)
            throw e[1];
          return e[1];
        }, trys: [], ops: [] }, a, s, e, r;
        return r = { next: n(0), throw: n(1), return: n(2) }, typeof Symbol == "function" && (r[Symbol.iterator] = function() {
          return this;
        }), r;
        function n(c) {
          return function(y) {
            return o([c, y]);
          };
        }
        function o(c) {
          if (a)
            throw new TypeError("Generator is already executing.");
          for (; t; )
            try {
              if (a = 1, s && (e = c[0] & 2 ? s.return : c[0] ? s.throw || ((e = s.return) && e.call(s), 0) : s.next) && !(e = e.call(s, c[1])).done)
                return e;
              switch (s = 0, e && (c = [c[0] & 2, e.value]), c[0]) {
                case 0:
                case 1:
                  e = c;
                  break;
                case 4:
                  return t.label++, { value: c[1], done: !1 };
                case 5:
                  t.label++, s = c[1], c = [0];
                  continue;
                case 7:
                  c = t.ops.pop(), t.trys.pop();
                  continue;
                default:
                  if (e = t.trys, !(e = e.length > 0 && e[e.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                    t = 0;
                    continue;
                  }
                  if (c[0] === 3 && (!e || c[1] > e[0] && c[1] < e[3])) {
                    t.label = c[1];
                    break;
                  }
                  if (c[0] === 6 && t.label < e[1]) {
                    t.label = e[1], e = c;
                    break;
                  }
                  if (e && t.label < e[2]) {
                    t.label = e[2], t.ops.push(c);
                    break;
                  }
                  e[2] && t.ops.pop(), t.trys.pop();
                  continue;
              }
              c = l.call(u, t);
            } catch (y) {
              c = [6, y], s = 0;
            } finally {
              a = e = 0;
            }
          if (c[0] & 5)
            throw c[1];
          return { value: c[0] ? c[1] : void 0, done: !0 };
        }
      }
      function rs(u, l, t, a) {
        a === void 0 && (a = t), u[a] = l[t];
      }
      function ns(u, l) {
        for (var t in u)
          t !== "default" && !l.hasOwnProperty(t) && (l[t] = u[t]);
      }
      function kn(u) {
        var l = typeof Symbol == "function" && Symbol.iterator, t = l && u[l], a = 0;
        if (t)
          return t.call(u);
        if (u && typeof u.length == "number")
          return { next: function() {
            return u && a >= u.length && (u = void 0), { value: u && u[a++], done: !u };
          } };
        throw new TypeError(l ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function An(u, l) {
        var t = typeof Symbol == "function" && u[Symbol.iterator];
        if (!t)
          return u;
        var a = t.call(u), s, e = [], r;
        try {
          for (; (l === void 0 || l-- > 0) && !(s = a.next()).done; )
            e.push(s.value);
        } catch (n) {
          r = { error: n };
        } finally {
          try {
            s && !s.done && (t = a.return) && t.call(a);
          } finally {
            if (r)
              throw r.error;
          }
        }
        return e;
      }
      function L() {
        for (var u = [], l = 0; l < arguments.length; l++)
          u = u.concat(An(arguments[l]));
        return u;
      }
      function re() {
        for (var u = 0, l = 0, t = arguments.length; l < t; l++)
          u += arguments[l].length;
        for (var a = Array(u), s = 0, l = 0; l < t; l++)
          for (var e = arguments[l], r = 0, n = e.length; r < n; r++, s++)
            a[s] = e[r];
        return a;
      }
      function ge(u) {
        return this instanceof ge ? (this.v = u, this) : new ge(u);
      }
      function Ee(u, l, t) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var a = t.apply(u, l || []), s, e = [];
        return s = {}, r("next"), r("throw"), r("return"), s[Symbol.asyncIterator] = function() {
          return this;
        }, s;
        function r(g) {
          a[g] && (s[g] = function(p) {
            return new Promise(function(D, C) {
              e.push([g, p, D, C]) > 1 || n(g, p);
            });
          });
        }
        function n(g, p) {
          try {
            o(a[g](p));
          } catch (D) {
            m(e[0][3], D);
          }
        }
        function o(g) {
          g.value instanceof ge ? Promise.resolve(g.value.v).then(c, y) : m(e[0][2], g);
        }
        function c(g) {
          n("next", g);
        }
        function y(g) {
          n("throw", g);
        }
        function m(g, p) {
          g(p), e.shift(), e.length && n(e[0][0], e[0][1]);
        }
      }
      function Pe(u) {
        var l, t;
        return l = {}, a("next"), a("throw", function(s) {
          throw s;
        }), a("return"), l[Symbol.iterator] = function() {
          return this;
        }, l;
        function a(s, e) {
          l[s] = u[s] ? function(r) {
            return (t = !t) ? { value: ge(u[s](r)), done: s === "return" } : e ? e(r) : r;
          } : e;
        }
      }
      function ie(u) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var l = u[Symbol.asyncIterator], t;
        return l ? l.call(u) : (u = typeof kn == "function" ? kn(u) : u[Symbol.iterator](), t = {}, a("next"), a("throw"), a("return"), t[Symbol.asyncIterator] = function() {
          return this;
        }, t);
        function a(e) {
          t[e] = u[e] && function(r) {
            return new Promise(function(n, o) {
              r = u[e](r), s(n, o, r.done, r.value);
            });
          };
        }
        function s(e, r, n, o) {
          Promise.resolve(o).then(function(c) {
            e({ value: c, done: n });
          }, r);
        }
      }
      function de(u, l) {
        return Object.defineProperty ? Object.defineProperty(u, "raw", { value: l }) : u.raw = l, u;
      }
      function Ue(u) {
        if (u && u.__esModule)
          return u;
        var l = {};
        if (u != null)
          for (var t in u)
            Object.hasOwnProperty.call(u, t) && (l[t] = u[t]);
        return l.default = u, l;
      }
      function Ge(u) {
        return u && u.__esModule ? u : { default: u };
      }
      function gt(u, l) {
        if (!l.has(u))
          throw new TypeError("attempted to get private field on non-instance");
        return l.get(u);
      }
      function ce(u, l, t) {
        if (!l.has(u))
          throw new TypeError("attempted to set private field on non-instance");
        return l.set(u, t), t;
      }
      var ve, Ve, He = rt({ "node_modules/tslib/tslib.es6.js"() {
        ue(), ve = function(u, l) {
          return ve = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, a) {
            t.__proto__ = a;
          } || function(t, a) {
            for (var s in a)
              a.hasOwnProperty(s) && (t[s] = a[s]);
          }, ve(u, l);
        }, Ve = function() {
          return Ve = Object.assign || function(u) {
            for (var l, t = 1, a = arguments.length; t < a; t++) {
              l = arguments[t];
              for (var s in l)
                Object.prototype.hasOwnProperty.call(l, s) && (u[s] = l[s]);
            }
            return u;
          }, Ve.apply(this, arguments);
        };
      } }), Je = $({ "node_modules/vnopts/lib/descriptors/api.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 }), u.apiDescriptor = { key: (l) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(l) ? l : JSON.stringify(l), value(l) {
          if (l === null || typeof l != "object")
            return JSON.stringify(l);
          if (Array.isArray(l))
            return `[${l.map((a) => u.apiDescriptor.value(a)).join(", ")}]`;
          let t = Object.keys(l);
          return t.length === 0 ? "{}" : `{ ${t.map((a) => `${u.apiDescriptor.key(a)}: ${u.apiDescriptor.value(l[a])}`).join(", ")} }`;
        }, pair: (l) => {
          let { key: t, value: a } = l;
          return u.apiDescriptor.value({ [t]: a });
        } };
      } }), Qe = $({ "node_modules/vnopts/lib/descriptors/index.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = (He(), qt(Yr));
        l.__exportStar(Je(), u);
      } }), yt = $({ "scripts/build/shims/chalk.cjs"(u, l) {
        ue();
        var t = (a) => a;
        t.grey = t, t.red = t, t.bold = t, t.yellow = t, t.blue = t, t.default = t, l.exports = t;
      } }), _t = $({ "node_modules/vnopts/lib/handlers/deprecated/common.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = yt();
        u.commonDeprecatedHandler = (t, a, s) => {
          let { descriptor: e } = s, r = [`${l.default.yellow(typeof t == "string" ? e.key(t) : e.pair(t))} is deprecated`];
          return a && r.push(`we now treat it as ${l.default.blue(typeof a == "string" ? e.key(a) : e.pair(a))}`), r.join("; ") + ".";
        };
      } }), ct = $({ "node_modules/vnopts/lib/handlers/deprecated/index.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = (He(), qt(Yr));
        l.__exportStar(_t(), u);
      } }), kt = $({ "node_modules/vnopts/lib/handlers/invalid/common.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = yt();
        u.commonInvalidHandler = (t, a, s) => [`Invalid ${l.default.red(s.descriptor.key(t))} value.`, `Expected ${l.default.blue(s.schemas[t].expected(s))},`, `but received ${l.default.red(s.descriptor.value(a))}.`].join(" ");
      } }), $t = $({ "node_modules/vnopts/lib/handlers/invalid/index.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = (He(), qt(Yr));
        l.__exportStar(kt(), u);
      } }), ir = $({ "node_modules/vnopts/node_modules/leven/index.js"(u, l) {
        ue();
        var t = [], a = [];
        l.exports = function(s, e) {
          if (s === e)
            return 0;
          var r = s;
          s.length > e.length && (s = e, e = r);
          var n = s.length, o = e.length;
          if (n === 0)
            return o;
          if (o === 0)
            return n;
          for (; n > 0 && s.charCodeAt(~-n) === e.charCodeAt(~-o); )
            n--, o--;
          if (n === 0)
            return o;
          for (var c = 0; c < n && s.charCodeAt(c) === e.charCodeAt(c); )
            c++;
          if (n -= c, o -= c, n === 0)
            return o;
          for (var y, m, g, p, D = 0, C = 0; D < n; )
            a[c + D] = s.charCodeAt(c + D), t[D] = ++D;
          for (; C < o; )
            for (y = e.charCodeAt(c + C), g = C++, m = C, D = 0; D < n; D++)
              p = y === a[c + D] ? g : g + 1, g = t[D], m = t[D] = g > m ? p > m ? m + 1 : p : p > g ? g + 1 : p;
          return m;
        };
      } }), st = $({ "node_modules/vnopts/lib/handlers/unknown/leven.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = yt(), t = ir();
        u.levenUnknownHandler = (a, s, e) => {
          let { descriptor: r, logger: n, schemas: o } = e, c = [`Ignored unknown option ${l.default.yellow(r.pair({ key: a, value: s }))}.`], y = Object.keys(o).sort().find((m) => t(a, m) < 3);
          y && c.push(`Did you mean ${l.default.blue(r.key(y))}?`), n.warn(c.join(" "));
        };
      } }), Ot = $({ "node_modules/vnopts/lib/handlers/unknown/index.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = (He(), qt(Yr));
        l.__exportStar(st(), u);
      } }), Vt = $({ "node_modules/vnopts/lib/handlers/index.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = (He(), qt(Yr));
        l.__exportStar(ct(), u), l.__exportStar($t(), u), l.__exportStar(Ot(), u);
      } }), Ut = $({ "node_modules/vnopts/lib/schema.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
        function t(e, r) {
          let n = new e(r), o = Object.create(n);
          for (let c of l)
            c in r && (o[c] = s(r[c], n, a.prototype[c].length));
          return o;
        }
        u.createSchema = t;
        var a = class {
          constructor(e) {
            this.name = e.name;
          }
          static create(e) {
            return t(this, e);
          }
          default(e) {
          }
          expected(e) {
            return "nothing";
          }
          validate(e, r) {
            return !1;
          }
          deprecated(e, r) {
            return !1;
          }
          forward(e, r) {
          }
          redirect(e, r) {
          }
          overlap(e, r, n) {
            return e;
          }
          preprocess(e, r) {
            return e;
          }
          postprocess(e, r) {
            return e;
          }
        };
        u.Schema = a;
        function s(e, r, n) {
          return typeof e == "function" ? function() {
            for (var o = arguments.length, c = new Array(o), y = 0; y < o; y++)
              c[y] = arguments[y];
            return e(...c.slice(0, n - 1), r, ...c.slice(n - 1));
          } : () => e;
        }
      } }), rr = $({ "node_modules/vnopts/lib/schemas/alias.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = Ut(), t = class extends l.Schema {
          constructor(a) {
            super(a), this._sourceName = a.sourceName;
          }
          expected(a) {
            return a.schemas[this._sourceName].expected(a);
          }
          validate(a, s) {
            return s.schemas[this._sourceName].validate(a, s);
          }
          redirect(a, s) {
            return this._sourceName;
          }
        };
        u.AliasSchema = t;
      } }), z = $({ "node_modules/vnopts/lib/schemas/any.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = Ut(), t = class extends l.Schema {
          expected() {
            return "anything";
          }
          validate() {
            return !0;
          }
        };
        u.AnySchema = t;
      } }), le = $({ "node_modules/vnopts/lib/schemas/array.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = (He(), qt(Yr)), t = Ut(), a = class extends t.Schema {
          constructor(e) {
            var { valueSchema: r, name: n = r.name } = e, o = l.__rest(e, ["valueSchema", "name"]);
            super(Object.assign({}, o, { name: n })), this._valueSchema = r;
          }
          expected(e) {
            return `an array of ${this._valueSchema.expected(e)}`;
          }
          validate(e, r) {
            if (!Array.isArray(e))
              return !1;
            let n = [];
            for (let o of e) {
              let c = r.normalizeValidateResult(this._valueSchema.validate(o, r), o);
              c !== !0 && n.push(c.value);
            }
            return n.length === 0 ? !0 : { value: n };
          }
          deprecated(e, r) {
            let n = [];
            for (let o of e) {
              let c = r.normalizeDeprecatedResult(this._valueSchema.deprecated(o, r), o);
              c !== !1 && n.push(...c.map((y) => {
                let { value: m } = y;
                return { value: [m] };
              }));
            }
            return n;
          }
          forward(e, r) {
            let n = [];
            for (let o of e) {
              let c = r.normalizeForwardResult(this._valueSchema.forward(o, r), o);
              n.push(...c.map(s));
            }
            return n;
          }
          redirect(e, r) {
            let n = [], o = [];
            for (let c of e) {
              let y = r.normalizeRedirectResult(this._valueSchema.redirect(c, r), c);
              "remain" in y && n.push(y.remain), o.push(...y.redirect.map(s));
            }
            return n.length === 0 ? { redirect: o } : { redirect: o, remain: n };
          }
          overlap(e, r) {
            return e.concat(r);
          }
        };
        u.ArraySchema = a;
        function s(e) {
          let { from: r, to: n } = e;
          return { from: [r], to: n };
        }
      } }), We = $({ "node_modules/vnopts/lib/schemas/boolean.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = Ut(), t = class extends l.Schema {
          expected() {
            return "true or false";
          }
          validate(a) {
            return typeof a == "boolean";
          }
        };
        u.BooleanSchema = t;
      } }), Me = $({ "node_modules/vnopts/lib/utils.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        function l(p, D) {
          let C = /* @__PURE__ */ Object.create(null);
          for (let w of p) {
            let k = w[D];
            if (C[k])
              throw new Error(`Duplicate ${D} ${JSON.stringify(k)}`);
            C[k] = w;
          }
          return C;
        }
        u.recordFromArray = l;
        function t(p, D) {
          let C = /* @__PURE__ */ new Map();
          for (let w of p) {
            let k = w[D];
            if (C.has(k))
              throw new Error(`Duplicate ${D} ${JSON.stringify(k)}`);
            C.set(k, w);
          }
          return C;
        }
        u.mapFromArray = t;
        function a() {
          let p = /* @__PURE__ */ Object.create(null);
          return (D) => {
            let C = JSON.stringify(D);
            return p[C] ? !0 : (p[C] = !0, !1);
          };
        }
        u.createAutoChecklist = a;
        function s(p, D) {
          let C = [], w = [];
          for (let k of p)
            D(k) ? C.push(k) : w.push(k);
          return [C, w];
        }
        u.partition = s;
        function e(p) {
          return p === Math.floor(p);
        }
        u.isInt = e;
        function r(p, D) {
          if (p === D)
            return 0;
          let C = typeof p, w = typeof D, k = ["undefined", "object", "boolean", "number", "string"];
          return C !== w ? k.indexOf(C) - k.indexOf(w) : C !== "string" ? Number(p) - Number(D) : p.localeCompare(D);
        }
        u.comparePrimitive = r;
        function n(p) {
          return p === void 0 ? {} : p;
        }
        u.normalizeDefaultResult = n;
        function o(p, D) {
          return p === !0 ? !0 : p === !1 ? { value: D } : p;
        }
        u.normalizeValidateResult = o;
        function c(p, D) {
          let C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return p === !1 ? !1 : p === !0 ? C ? !0 : [{ value: D }] : "value" in p ? [p] : p.length === 0 ? !1 : p;
        }
        u.normalizeDeprecatedResult = c;
        function y(p, D) {
          return typeof p == "string" || "key" in p ? { from: D, to: p } : "from" in p ? { from: p.from, to: p.to } : { from: D, to: p.to };
        }
        u.normalizeTransferResult = y;
        function m(p, D) {
          return p === void 0 ? [] : Array.isArray(p) ? p.map((C) => y(C, D)) : [y(p, D)];
        }
        u.normalizeForwardResult = m;
        function g(p, D) {
          let C = m(typeof p == "object" && "redirect" in p ? p.redirect : p, D);
          return C.length === 0 ? { remain: D, redirect: C } : typeof p == "object" && "remain" in p ? { remain: p.remain, redirect: C } : { redirect: C };
        }
        u.normalizeRedirectResult = g;
      } }), at = $({ "node_modules/vnopts/lib/schemas/choice.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = Ut(), t = Me(), a = class extends l.Schema {
          constructor(s) {
            super(s), this._choices = t.mapFromArray(s.choices.map((e) => e && typeof e == "object" ? e : { value: e }), "value");
          }
          expected(s) {
            let { descriptor: e } = s, r = Array.from(this._choices.keys()).map((c) => this._choices.get(c)).filter((c) => !c.deprecated).map((c) => c.value).sort(t.comparePrimitive).map(e.value), n = r.slice(0, -2), o = r.slice(-2);
            return n.concat(o.join(" or ")).join(", ");
          }
          validate(s) {
            return this._choices.has(s);
          }
          deprecated(s) {
            let e = this._choices.get(s);
            return e && e.deprecated ? { value: s } : !1;
          }
          forward(s) {
            let e = this._choices.get(s);
            return e ? e.forward : void 0;
          }
          redirect(s) {
            let e = this._choices.get(s);
            return e ? e.redirect : void 0;
          }
        };
        u.ChoiceSchema = a;
      } }), Jt = $({ "node_modules/vnopts/lib/schemas/number.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = Ut(), t = class extends l.Schema {
          expected() {
            return "a number";
          }
          validate(a, s) {
            return typeof a == "number";
          }
        };
        u.NumberSchema = t;
      } }), er = $({ "node_modules/vnopts/lib/schemas/integer.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = Me(), t = Jt(), a = class extends t.NumberSchema {
          expected() {
            return "an integer";
          }
          validate(s, e) {
            return e.normalizeValidateResult(super.validate(s, e), s) === !0 && l.isInt(s);
          }
        };
        u.IntegerSchema = a;
      } }), Ar = $({ "node_modules/vnopts/lib/schemas/string.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = Ut(), t = class extends l.Schema {
          expected() {
            return "a string";
          }
          validate(a) {
            return typeof a == "string";
          }
        };
        u.StringSchema = t;
      } }), Er = $({ "node_modules/vnopts/lib/schemas/index.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = (He(), qt(Yr));
        l.__exportStar(rr(), u), l.__exportStar(z(), u), l.__exportStar(le(), u), l.__exportStar(We(), u), l.__exportStar(at(), u), l.__exportStar(er(), u), l.__exportStar(Jt(), u), l.__exportStar(Ar(), u);
      } }), _r = $({ "node_modules/vnopts/lib/defaults.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = Je(), t = _t(), a = $t(), s = st();
        u.defaultDescriptor = l.apiDescriptor, u.defaultUnknownHandler = s.levenUnknownHandler, u.defaultInvalidHandler = a.commonInvalidHandler, u.defaultDeprecatedHandler = t.commonDeprecatedHandler;
      } }), xr = $({ "node_modules/vnopts/lib/normalize.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = _r(), t = Me();
        u.normalize = (s, e, r) => new a(e, r).normalize(s);
        var a = class {
          constructor(s, e) {
            let { logger: r = console, descriptor: n = l.defaultDescriptor, unknown: o = l.defaultUnknownHandler, invalid: c = l.defaultInvalidHandler, deprecated: y = l.defaultDeprecatedHandler } = e || {};
            this._utils = { descriptor: n, logger: r || { warn: () => {
            } }, schemas: t.recordFromArray(s, "name"), normalizeDefaultResult: t.normalizeDefaultResult, normalizeDeprecatedResult: t.normalizeDeprecatedResult, normalizeForwardResult: t.normalizeForwardResult, normalizeRedirectResult: t.normalizeRedirectResult, normalizeValidateResult: t.normalizeValidateResult }, this._unknownHandler = o, this._invalidHandler = c, this._deprecatedHandler = y, this.cleanHistory();
          }
          cleanHistory() {
            this._hasDeprecationWarned = t.createAutoChecklist();
          }
          normalize(s) {
            let e = {}, r = [s], n = () => {
              for (; r.length !== 0; ) {
                let o = r.shift(), c = this._applyNormalization(o, e);
                r.push(...c);
              }
            };
            n();
            for (let o of Object.keys(this._utils.schemas)) {
              let c = this._utils.schemas[o];
              if (!(o in e)) {
                let y = t.normalizeDefaultResult(c.default(this._utils));
                "value" in y && r.push({ [o]: y.value });
              }
            }
            n();
            for (let o of Object.keys(this._utils.schemas)) {
              let c = this._utils.schemas[o];
              o in e && (e[o] = c.postprocess(e[o], this._utils));
            }
            return e;
          }
          _applyNormalization(s, e) {
            let r = [], [n, o] = t.partition(Object.keys(s), (c) => c in this._utils.schemas);
            for (let c of n) {
              let y = this._utils.schemas[c], m = y.preprocess(s[c], this._utils), g = t.normalizeValidateResult(y.validate(m, this._utils), m);
              if (g !== !0) {
                let { value: w } = g, k = this._invalidHandler(c, w, this._utils);
                throw typeof k == "string" ? new Error(k) : k;
              }
              let p = (w) => {
                let { from: k, to: A } = w;
                r.push(typeof A == "string" ? { [A]: k } : { [A.key]: A.value });
              }, D = (w) => {
                let { value: k, redirectTo: A } = w, N = t.normalizeDeprecatedResult(y.deprecated(k, this._utils), m, !0);
                if (N !== !1)
                  if (N === !0)
                    this._hasDeprecationWarned(c) || this._utils.logger.warn(this._deprecatedHandler(c, A, this._utils));
                  else
                    for (let { value: x } of N) {
                      let P = { key: c, value: x };
                      if (!this._hasDeprecationWarned(P)) {
                        let _ = typeof A == "string" ? { key: A, value: x } : A;
                        this._utils.logger.warn(this._deprecatedHandler(P, _, this._utils));
                      }
                    }
              };
              t.normalizeForwardResult(y.forward(m, this._utils), m).forEach(p);
              let C = t.normalizeRedirectResult(y.redirect(m, this._utils), m);
              if (C.redirect.forEach(p), "remain" in C) {
                let w = C.remain;
                e[c] = c in e ? y.overlap(e[c], w, this._utils) : w, D({ value: w });
              }
              for (let { from: w, to: k } of C.redirect)
                D({ value: w, redirectTo: k });
            }
            for (let c of o) {
              let y = s[c], m = this._unknownHandler(c, y, this._utils);
              if (m)
                for (let g of Object.keys(m)) {
                  let p = { [g]: m[g] };
                  g in this._utils.schemas ? r.push(p) : Object.assign(e, p);
                }
            }
            return r;
          }
        };
        u.Normalizer = a;
      } }), Ir = $({ "node_modules/vnopts/lib/index.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = (He(), qt(Yr));
        l.__exportStar(Qe(), u), l.__exportStar(Vt(), u), l.__exportStar(Er(), u), l.__exportStar(xr(), u), l.__exportStar(Ut(), u);
      } }), Mr = $({ "src/main/options-normalizer.js"(u, l) {
        ue();
        var t = Ir(), a = mr(), s = { key: (g) => g.length === 1 ? `-${g}` : `--${g}`, value: (g) => t.apiDescriptor.value(g), pair: (g) => {
          let { key: p, value: D } = g;
          return D === !1 ? `--no-${p}` : D === !0 ? s.key(p) : D === "" ? `${s.key(p)} without an argument` : `${s.key(p)}=${D}`;
        } }, e = (g) => {
          let { colorsModule: p, levenshteinDistance: D } = g;
          return class extends t.ChoiceSchema {
            constructor(C) {
              let { name: w, flags: k } = C;
              super({ name: w, choices: k }), this._flags = [...k].sort();
            }
            preprocess(C, w) {
              if (typeof C == "string" && C.length > 0 && !this._flags.includes(C)) {
                let k = this._flags.find((A) => D(A, C) < 3);
                if (k)
                  return w.logger.warn([`Unknown flag ${p.yellow(w.descriptor.value(C))},`, `did you mean ${p.blue(w.descriptor.value(k))}?`].join(" ")), k;
              }
              return C;
            }
            expected() {
              return "a flag";
            }
          };
        }, r;
        function n(g, p) {
          let { logger: D = !1, isCLI: C = !1, passThrough: w = !1, colorsModule: k = null, levenshteinDistance: A = null } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, N = w ? Array.isArray(w) ? (T, f) => w.includes(T) ? { [T]: f } : void 0 : (T, f) => ({ [T]: f }) : (T, f, F) => {
            let i = F.schemas, h = ne(i, Z);
            return t.levenUnknownHandler(T, f, Object.assign(Object.assign({}, F), {}, { schemas: h }));
          }, x = C ? s : t.apiDescriptor, P = o(p, { isCLI: C, colorsModule: k, levenshteinDistance: A }), _ = new t.Normalizer(P, { logger: D, unknown: N, descriptor: x }), J = D !== !1;
          J && r && (_._hasDeprecationWarned = r);
          let d = _.normalize(g);
          return J && (r = _._hasDeprecationWarned), C && d["plugin-search"] === !1 && (d["plugin-search-dir"] = !1), d;
        }
        function o(g, p) {
          let { isCLI: D, colorsModule: C, levenshteinDistance: w } = p, k = [];
          D && k.push(t.AnySchema.create({ name: "_" }));
          for (let A of g)
            k.push(c(A, { isCLI: D, optionInfos: g, colorsModule: C, levenshteinDistance: w })), A.alias && D && k.push(t.AliasSchema.create({ name: A.alias, sourceName: A.name }));
          return k;
        }
        function c(g, p) {
          let { isCLI: D, optionInfos: C, colorsModule: w, levenshteinDistance: k } = p, { name: A } = g;
          if (A === "plugin-search-dir" || A === "pluginSearchDirs")
            return t.AnySchema.create({ name: A, preprocess(_) {
              return _ === !1 || (_ = Array.isArray(_) ? _ : [_]), _;
            }, validate(_) {
              return _ === !1 ? !0 : _.every((J) => typeof J == "string");
            }, expected() {
              return "false or paths to plugin search dir";
            } });
          let N = { name: A }, x, P = {};
          switch (g.type) {
            case "int":
              x = t.IntegerSchema, D && (N.preprocess = Number);
              break;
            case "string":
              x = t.StringSchema;
              break;
            case "choice":
              x = t.ChoiceSchema, N.choices = g.choices.map((_) => typeof _ == "object" && _.redirect ? Object.assign(Object.assign({}, _), {}, { redirect: { to: { key: g.name, value: _.redirect } } }) : _);
              break;
            case "boolean":
              x = t.BooleanSchema;
              break;
            case "flag":
              x = e({ colorsModule: w, levenshteinDistance: k }), N.flags = C.flatMap((_) => [_.alias, _.description && _.name, _.oppositeDescription && `no-${_.name}`].filter(Boolean));
              break;
            case "path":
              x = t.StringSchema;
              break;
            default:
              throw new Error(`Unexpected type ${g.type}`);
          }
          if (g.exception ? N.validate = (_, J, d) => g.exception(_) || J.validate(_, d) : N.validate = (_, J, d) => _ === void 0 || J.validate(_, d), g.redirect && (P.redirect = (_) => _ ? { to: { key: g.redirect.option, value: g.redirect.value } } : void 0), g.deprecated && (P.deprecated = !0), D && !g.array) {
            let _ = N.preprocess || ((J) => J);
            N.preprocess = (J, d, T) => d.preprocess(_(Array.isArray(J) ? a(J) : J), T);
          }
          return g.array ? t.ArraySchema.create(Object.assign(Object.assign(Object.assign({}, D ? { preprocess: (_) => Array.isArray(_) ? _ : [_] } : {}), P), {}, { valueSchema: x.create(N) })) : x.create(Object.assign(Object.assign({}, N), P));
        }
        function y(g, p, D) {
          return n(g, p, D);
        }
        function m(g, p, D) {
          return n(g, p, Object.assign({ isCLI: !0 }, D));
        }
        l.exports = { normalizeApiOptions: y, normalizeCliOptions: m };
      } }), or = $({ "src/language-js/loc.js"(u, l) {
        ue();
        var t = uu();
        function a(o) {
          var c, y;
          let m = o.range ? o.range[0] : o.start, g = (c = (y = o.declaration) === null || y === void 0 ? void 0 : y.decorators) !== null && c !== void 0 ? c : o.decorators;
          return t(g) ? Math.min(a(g[0]), m) : m;
        }
        function s(o) {
          return o.range ? o.range[1] : o.end;
        }
        function e(o, c) {
          let y = a(o);
          return Number.isInteger(y) && y === a(c);
        }
        function r(o, c) {
          let y = s(o);
          return Number.isInteger(y) && y === s(c);
        }
        function n(o, c) {
          return e(o, c) && r(o, c);
        }
        l.exports = { locStart: a, locEnd: s, hasSameLocStart: e, hasSameLoc: n };
      } }), lt = $({ "src/main/load-parser.js"(u, l) {
        ue(), l.exports = () => {
        };
      } }), mt = $({ "scripts/build/shims/babel-highlight.cjs"(u, l) {
        ue();
        var t = yt(), a = { shouldHighlight: () => !1, getChalk: () => t };
        l.exports = a;
      } }), St = $({ "node_modules/@babel/code-frame/lib/index.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 }), u.codeFrameColumns = r, u.default = n;
        var l = mt(), t = !1;
        function a(o) {
          return { gutter: o.grey, marker: o.red.bold, message: o.red.bold };
        }
        var s = /\r\n|[\n\r\u2028\u2029]/;
        function e(o, c, y) {
          let m = Object.assign({ column: 0, line: -1 }, o.start), g = Object.assign({}, m, o.end), { linesAbove: p = 2, linesBelow: D = 3 } = y || {}, C = m.line, w = m.column, k = g.line, A = g.column, N = Math.max(C - (p + 1), 0), x = Math.min(c.length, k + D);
          C === -1 && (N = 0), k === -1 && (x = c.length);
          let P = k - C, _ = {};
          if (P)
            for (let J = 0; J <= P; J++) {
              let d = J + C;
              if (!w)
                _[d] = !0;
              else if (J === 0) {
                let T = c[d - 1].length;
                _[d] = [w, T - w + 1];
              } else if (J === P)
                _[d] = [0, A];
              else {
                let T = c[d - J].length;
                _[d] = [0, T];
              }
            }
          else
            w === A ? w ? _[C] = [w, 0] : _[C] = !0 : _[C] = [w, A - w];
          return { start: N, end: x, markerLines: _ };
        }
        function r(o, c) {
          let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, m = (y.highlightCode || y.forceColor) && (0, l.shouldHighlight)(y), g = (0, l.getChalk)(y), p = a(g), D = (_, J) => m ? _(J) : J, C = o.split(s), { start: w, end: k, markerLines: A } = e(c, C, y), N = c.start && typeof c.start.column == "number", x = String(k).length, P = (m ? (0, l.default)(o, y) : o).split(s, k).slice(w, k).map((_, J) => {
            let d = w + 1 + J, T = ` ${` ${d}`.slice(-x)} |`, f = A[d], F = !A[d + 1];
            if (f) {
              let i = "";
              if (Array.isArray(f)) {
                let h = _.slice(0, Math.max(f[0] - 1, 0)).replace(/[^\t]/g, " "), E = f[1] || 1;
                i = [`
 `, D(p.gutter, T.replace(/\d/g, " ")), " ", h, D(p.marker, "^").repeat(E)].join(""), F && y.message && (i += " " + D(p.message, y.message));
              }
              return [D(p.marker, ">"), D(p.gutter, T), _.length > 0 ? ` ${_}` : "", i].join("");
            } else
              return ` ${D(p.gutter, T)}${_.length > 0 ? ` ${_}` : ""}`;
          }).join(`
`);
          return y.message && !N && (P = `${" ".repeat(x + 1)}${y.message}
${P}`), m ? g.reset(P) : P;
        }
        function n(o, c, y) {
          let m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          if (!t) {
            t = !0;
            let g = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
            if (Zt.emitWarning)
              Zt.emitWarning(g, "DeprecationWarning");
            else {
              let p = new Error(g);
              p.name = "DeprecationWarning", console.warn(new Error(g));
            }
          }
          return y = Math.max(y, 0), r(o, { start: { column: y, line: c } }, m);
        }
      } }), xt = $({ "src/main/parser.js"(u, l) {
        ue();
        var { ConfigError: t } = Fn(), a = or();
        lt();
        var { locStart: s, locEnd: e } = a, r = Object.getOwnPropertyNames, n = Object.getOwnPropertyDescriptor;
        function o(m) {
          let g = {};
          for (let p of m.plugins)
            if (p.parsers)
              for (let D of r(p.parsers))
                Object.defineProperty(g, D, n(p.parsers, D));
          return g;
        }
        function c(m) {
          let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : o(m);
          if (typeof m.parser == "function")
            return { parse: m.parser, astFormat: "estree", locStart: s, locEnd: e };
          if (typeof m.parser == "string") {
            if (Object.prototype.hasOwnProperty.call(g, m.parser))
              return g[m.parser];
            throw new t(`Couldn't resolve parser "${m.parser}". Parsers must be explicitly added to the standalone bundle.`);
          }
        }
        function y(m, g) {
          let p = o(g), D = Object.defineProperties({}, Object.fromEntries(Object.keys(p).map((w) => [w, { enumerable: !0, get() {
            return p[w].parse;
          } }]))), C = c(g, p);
          try {
            return C.preprocess && (m = C.preprocess(m, g)), { text: m, ast: C.parse(m, D, g) };
          } catch (w) {
            let { loc: k } = w;
            if (k) {
              let { codeFrameColumns: A } = St();
              throw w.codeFrame = A(m, k, { highlightCode: !0 }), w.message += `
` + w.codeFrame, w;
            }
            throw w;
          }
        }
        l.exports = { parse: y, resolveParser: c };
      } }), Kt = $({ "src/main/options.js"(u, l) {
        ue();
        var t = Yi(), { UndefinedParserError: a } = Fn(), { getSupportInfo: s } = nu(), e = Mr(), { resolveParser: r } = xt(), n = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };
        function o(m) {
          let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = Object.assign({}, m), D = s({ plugins: m.plugins, showUnreleased: !0, showDeprecated: !0 }).options, C = Object.assign(Object.assign({}, n), Object.fromEntries(D.filter((x) => x.default !== void 0).map((x) => [x.name, x.default])));
          if (!p.parser) {
            if (!p.filepath)
              (g.logger || console).warn("No parser and no filepath given, using 'babel' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred."), p.parser = "babel";
            else if (p.parser = y(p.filepath, p.plugins), !p.parser)
              throw new a(`No parser could be inferred for file: ${p.filepath}`);
          }
          let w = r(e.normalizeApiOptions(p, [D.find((x) => x.name === "parser")], { passThrough: !0, logger: !1 }));
          p.astFormat = w.astFormat, p.locEnd = w.locEnd, p.locStart = w.locStart;
          let k = c(p);
          p.printer = k.printers[p.astFormat];
          let A = Object.fromEntries(D.filter((x) => x.pluginDefaults && x.pluginDefaults[k.name] !== void 0).map((x) => [x.name, x.pluginDefaults[k.name]])), N = Object.assign(Object.assign({}, C), A);
          for (let [x, P] of Object.entries(N))
            (p[x] === null || p[x] === void 0) && (p[x] = P);
          return p.parser === "json" && (p.trailingComma = "none"), e.normalizeApiOptions(p, D, Object.assign({ passThrough: Object.keys(n) }, g));
        }
        function c(m) {
          let { astFormat: g } = m;
          if (!g)
            throw new Error("getPlugin() requires astFormat to be set");
          let p = m.plugins.find((D) => D.printers && D.printers[g]);
          if (!p)
            throw new Error(`Couldn't find plugin for AST format "${g}"`);
          return p;
        }
        function y(m, g) {
          let p = t.basename(m).toLowerCase(), D = s({ plugins: g }).languages.filter((C) => C.since !== null).find((C) => C.extensions && C.extensions.some((w) => p.endsWith(w)) || C.filenames && C.filenames.some((w) => w.toLowerCase() === p));
          return D && D.parsers[0];
        }
        l.exports = { normalize: o, hiddenDefaults: n, inferParser: y };
      } }), sr = $({ "src/main/massage-ast.js"(u, l) {
        ue();
        function t(a, s, e) {
          if (Array.isArray(a))
            return a.map((c) => t(c, s, e)).filter(Boolean);
          if (!a || typeof a != "object")
            return a;
          let r = s.printer.massageAstNode, n;
          r && r.ignoredProperties ? n = r.ignoredProperties : n = /* @__PURE__ */ new Set();
          let o = {};
          for (let [c, y] of Object.entries(a))
            !n.has(c) && typeof y != "function" && (o[c] = t(y, s, a));
          if (r) {
            let c = r(a, o, e);
            if (c === null)
              return;
            if (c)
              return c;
          }
          return o;
        }
        l.exports = t;
      } }), lr = $({ "scripts/build/shims/assert.cjs"(u, l) {
        ue();
        var t = () => {
        };
        t.ok = t, t.strictEqual = t, l.exports = t;
      } }), Qt = $({ "src/main/comments.js"(u, l) {
        ue();
        var t = lr(), { builders: { line: a, hardline: s, breakParent: e, indent: r, lineSuffix: n, join: o, cursor: c } } = wt(), { hasNewline: y, skipNewline: m, skipSpaces: g, isPreviousLineEmpty: p, addLeadingComment: D, addDanglingComment: C, addTrailingComment: w } = Gt(), k = /* @__PURE__ */ new WeakMap();
        function A(I, q, G) {
          if (!I)
            return;
          let { printer: M, locStart: te, locEnd: j } = q;
          if (G) {
            if (M.canAttachComment && M.canAttachComment(I)) {
              let U;
              for (U = G.length - 1; U >= 0 && !(te(G[U]) <= te(I) && j(G[U]) <= j(I)); --U)
                ;
              G.splice(U + 1, 0, I);
              return;
            }
          } else if (k.has(I))
            return k.get(I);
          let De = M.getCommentChildNodes && M.getCommentChildNodes(I, q) || typeof I == "object" && Object.entries(I).filter((U) => {
            let [R] = U;
            return R !== "enclosingNode" && R !== "precedingNode" && R !== "followingNode" && R !== "tokens" && R !== "comments" && R !== "parent";
          }).map((U) => {
            let [, R] = U;
            return R;
          });
          if (De) {
            G || (G = [], k.set(I, G));
            for (let U of De)
              A(U, q, G);
            return G;
          }
        }
        function N(I, q, G, M) {
          let { locStart: te, locEnd: j } = G, De = te(q), U = j(q), R = A(I, G), pe, be, fe = 0, Ie = R.length;
          for (; fe < Ie; ) {
            let X = fe + Ie >> 1, se = R[X], we = te(se), _e = j(se);
            if (we <= De && U <= _e)
              return N(se, q, G, se);
            if (_e <= De) {
              pe = se, fe = X + 1;
              continue;
            }
            if (U <= we) {
              be = se, Ie = X;
              continue;
            }
            throw new Error("Comment location overlaps with node location");
          }
          if (M && M.type === "TemplateLiteral") {
            let { quasis: X } = M, se = F(X, q, G);
            pe && F(X, pe, G) !== se && (pe = null), be && F(X, be, G) !== se && (be = null);
          }
          return { enclosingNode: M, precedingNode: pe, followingNode: be };
        }
        var x = () => !1;
        function P(I, q, G, M) {
          if (!Array.isArray(I))
            return;
          let te = [], { locStart: j, locEnd: De, printer: { handleComments: U = {} } } = M, { avoidAstMutation: R, ownLine: pe = x, endOfLine: be = x, remaining: fe = x } = U, Ie = I.map((X, se) => Object.assign(Object.assign({}, N(q, X, M)), {}, { comment: X, text: G, options: M, ast: q, isLastComment: I.length - 1 === se }));
          for (let [X, se] of Ie.entries()) {
            let { comment: we, precedingNode: _e, enclosingNode: it, followingNode: ae, text: Q, options: me, ast: Ce, isLastComment: Re } = se;
            if (me.parser === "json" || me.parser === "json5" || me.parser === "__js_expression" || me.parser === "__vue_expression" || me.parser === "__vue_ts_expression") {
              if (j(we) - j(Ce) <= 0) {
                D(Ce, we);
                continue;
              }
              if (De(we) - De(Ce) >= 0) {
                w(Ce, we);
                continue;
              }
            }
            let Xe;
            if (R ? Xe = [se] : (we.enclosingNode = it, we.precedingNode = _e, we.followingNode = ae, Xe = [we, Q, me, Ce, Re]), J(Q, me, Ie, X))
              we.placement = "ownLine", pe(...Xe) || (ae ? D(ae, we) : _e ? w(_e, we) : C(it || Ce, we));
            else if (d(Q, me, Ie, X))
              we.placement = "endOfLine", be(...Xe) || (_e ? w(_e, we) : ae ? D(ae, we) : C(it || Ce, we));
            else if (we.placement = "remaining", !fe(...Xe))
              if (_e && ae) {
                let Ye = te.length;
                Ye > 0 && te[Ye - 1].followingNode !== ae && T(te, Q, me), te.push(se);
              } else
                _e ? w(_e, we) : ae ? D(ae, we) : C(it || Ce, we);
          }
          if (T(te, G, M), !R)
            for (let X of I)
              delete X.precedingNode, delete X.enclosingNode, delete X.followingNode;
        }
        var _ = (I) => !/[\S\n\u2028\u2029]/.test(I);
        function J(I, q, G, M) {
          let { comment: te, precedingNode: j } = G[M], { locStart: De, locEnd: U } = q, R = De(te);
          if (j)
            for (let pe = M - 1; pe >= 0; pe--) {
              let { comment: be, precedingNode: fe } = G[pe];
              if (fe !== j || !_(I.slice(U(be), R)))
                break;
              R = De(be);
            }
          return y(I, R, { backwards: !0 });
        }
        function d(I, q, G, M) {
          let { comment: te, followingNode: j } = G[M], { locStart: De, locEnd: U } = q, R = U(te);
          if (j)
            for (let pe = M + 1; pe < G.length; pe++) {
              let { comment: be, followingNode: fe } = G[pe];
              if (fe !== j || !_(I.slice(R, De(be))))
                break;
              R = U(be);
            }
          return y(I, R);
        }
        function T(I, q, G) {
          let M = I.length;
          if (M === 0)
            return;
          let { precedingNode: te, followingNode: j, enclosingNode: De } = I[0], U = G.printer.getGapRegex && G.printer.getGapRegex(De) || /^[\s(]*$/, R = G.locStart(j), pe;
          for (pe = M; pe > 0; --pe) {
            let { comment: be, precedingNode: fe, followingNode: Ie } = I[pe - 1];
            t.strictEqual(fe, te), t.strictEqual(Ie, j);
            let X = q.slice(G.locEnd(be), R);
            if (U.test(X))
              R = G.locStart(be);
            else
              break;
          }
          for (let [be, { comment: fe }] of I.entries())
            be < pe ? w(te, fe) : D(j, fe);
          for (let be of [te, j])
            be.comments && be.comments.length > 1 && be.comments.sort((fe, Ie) => G.locStart(fe) - G.locStart(Ie));
          I.length = 0;
        }
        function f(I, q) {
          let G = I.getValue();
          return G.printed = !0, q.printer.printComment(I, q);
        }
        function F(I, q, G) {
          let M = G.locStart(q) - 1;
          for (let te = 1; te < I.length; ++te)
            if (M < G.locStart(I[te]))
              return te - 1;
          return 0;
        }
        function i(I, q) {
          let G = I.getValue(), M = [f(I, q)], { printer: te, originalText: j, locStart: De, locEnd: U } = q;
          if (te.isBlockComment && te.isBlockComment(G)) {
            let pe = y(j, U(G)) ? y(j, De(G), { backwards: !0 }) ? s : a : " ";
            M.push(pe);
          } else
            M.push(s);
          let R = m(j, g(j, U(G)));
          return R !== !1 && y(j, R) && M.push(s), M;
        }
        function h(I, q) {
          let G = I.getValue(), M = f(I, q), { printer: te, originalText: j, locStart: De } = q, U = te.isBlockComment && te.isBlockComment(G);
          if (y(j, De(G), { backwards: !0 })) {
            let pe = p(j, G, De);
            return n([s, pe ? s : "", M]);
          }
          let R = [" ", M];
          return U || (R = [n(R), e]), R;
        }
        function E(I, q, G, M) {
          let te = [], j = I.getValue();
          return !j || !j.comments || (I.each(() => {
            let De = I.getValue();
            !De.leading && !De.trailing && (!M || M(De)) && te.push(f(I, q));
          }, "comments"), te.length === 0) ? "" : G ? o(s, te) : r([s, o(s, te)]);
        }
        function b(I, q, G) {
          let M = I.getValue();
          if (!M)
            return {};
          let te = M.comments || [];
          G && (te = te.filter((R) => !G.has(R)));
          let j = M === q.cursorNode;
          if (te.length === 0) {
            let R = j ? c : "";
            return { leading: R, trailing: R };
          }
          let De = [], U = [];
          return I.each(() => {
            let R = I.getValue();
            if (G && G.has(R))
              return;
            let { leading: pe, trailing: be } = R;
            pe ? De.push(i(I, q)) : be && U.push(h(I, q));
          }, "comments"), j && (De.unshift(c), U.push(c)), { leading: De, trailing: U };
        }
        function S(I, q, G, M) {
          let { leading: te, trailing: j } = b(I, G, M);
          return !te && !j ? q : [te, q, j];
        }
        function B(I) {
          if (I)
            for (let q of I) {
              if (!q.printed)
                throw new Error('Comment "' + q.value.trim() + '" was not printed. Please report this error!');
              delete q.printed;
            }
        }
        l.exports = { attach: P, printComments: S, printCommentsSeparately: b, printDanglingComments: E, getSortedChildNodes: A, ensureAllCommentsPrinted: B };
      } }), Kr = $({ "src/common/ast-path.js"(u, l) {
        ue();
        var t = mr();
        function a(r, n) {
          let o = s(r.stack, n);
          return o === -1 ? null : r.stack[o];
        }
        function s(r, n) {
          for (let o = r.length - 1; o >= 0; o -= 2) {
            let c = r[o];
            if (c && !Array.isArray(c) && --n < 0)
              return o;
          }
          return -1;
        }
        var e = class {
          constructor(r) {
            this.stack = [r];
          }
          getName() {
            let { stack: r } = this, { length: n } = r;
            return n > 1 ? r[n - 2] : null;
          }
          getValue() {
            return t(this.stack);
          }
          getNode() {
            let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            return a(this, r);
          }
          getParentNode() {
            let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            return a(this, r + 1);
          }
          call(r) {
            let { stack: n } = this, { length: o } = n, c = t(n);
            for (var y = arguments.length, m = new Array(y > 1 ? y - 1 : 0), g = 1; g < y; g++)
              m[g - 1] = arguments[g];
            for (let D of m)
              c = c[D], n.push(D, c);
            let p = r(this);
            return n.length = o, p;
          }
          callParent(r) {
            let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, o = s(this.stack, n + 1), c = this.stack.splice(o + 1), y = r(this);
            return this.stack.push(...c), y;
          }
          each(r) {
            let { stack: n } = this, { length: o } = n, c = t(n);
            for (var y = arguments.length, m = new Array(y > 1 ? y - 1 : 0), g = 1; g < y; g++)
              m[g - 1] = arguments[g];
            for (let p of m)
              c = c[p], n.push(p, c);
            for (let p = 0; p < c.length; ++p)
              n.push(p, c[p]), r(this, p, c), n.length -= 2;
            n.length = o;
          }
          map(r) {
            let n = [];
            for (var o = arguments.length, c = new Array(o > 1 ? o - 1 : 0), y = 1; y < o; y++)
              c[y - 1] = arguments[y];
            return this.each((m, g, p) => {
              n[g] = r(m, g, p);
            }, ...c), n;
          }
          try(r) {
            let { stack: n } = this, o = [...n];
            try {
              return r();
            } finally {
              n.length = 0, n.push(...o);
            }
          }
          match() {
            let r = this.stack.length - 1, n = null, o = this.stack[r--];
            for (var c = arguments.length, y = new Array(c), m = 0; m < c; m++)
              y[m] = arguments[m];
            for (let g of y) {
              if (o === void 0)
                return !1;
              let p = null;
              if (typeof n == "number" && (p = n, n = this.stack[r--], o = this.stack[r--]), g && !g(o, n, p))
                return !1;
              n = this.stack[r--], o = this.stack[r--];
            }
            return !0;
          }
          findAncestor(r) {
            let n = this.stack.length - 1, o = null, c = this.stack[n--];
            for (; c; ) {
              let y = null;
              if (typeof o == "number" && (y = o, o = this.stack[n--], c = this.stack[n--]), o !== null && r(c, o, y))
                return c;
              o = this.stack[n--], c = this.stack[n--];
            }
          }
        };
        l.exports = e;
      } }), Pn = $({ "src/main/multiparser.js"(u, l) {
        ue();
        var { utils: { stripTrailingHardline: t } } = wt(), { normalize: a } = Kt(), s = Qt();
        function e(n, o, c, y) {
          if (c.printer.embed && c.embeddedLanguageFormatting === "auto")
            return c.printer.embed(n, o, (m, g, p) => r(m, g, c, y, p), c);
        }
        function r(n, o, c, y) {
          let { stripTrailingHardline: m = !1 } = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {}, g = a(Object.assign(Object.assign(Object.assign({}, c), o), {}, { parentParser: c.parser, originalText: n }), { passThrough: !0 }), p = xt().parse(n, g), { ast: D } = p;
          n = p.text;
          let C = D.comments;
          delete D.comments, s.attach(C, D, n, g), g[Symbol.for("comments")] = C || [], g[Symbol.for("tokens")] = D.tokens || [];
          let w = y(D, g);
          return s.ensureAllCommentsPrinted(C), m ? typeof w == "string" ? w.replace(/(?:\r?\n)*$/, "") : t(w) : w;
        }
        l.exports = { printSubtree: e };
      } }), In = $({ "src/main/ast-to-doc.js"(u, l) {
        ue();
        var t = Kr(), { builders: { hardline: a, addAlignmentToDoc: s }, utils: { propagateBreaks: e } } = wt(), { printComments: r } = Qt(), n = Pn();
        function o(m, g) {
          let p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, { printer: D } = g;
          D.preprocess && (m = D.preprocess(m, g));
          let C = /* @__PURE__ */ new Map(), w = new t(m), k = A();
          return p > 0 && (k = s([a, k], p, g.tabWidth)), e(k), k;
          function A(x, P) {
            return x === void 0 || x === w ? N(P) : Array.isArray(x) ? w.call(() => N(P), ...x) : w.call(() => N(P), x);
          }
          function N(x) {
            let P = w.getValue(), _ = P && typeof P == "object" && x === void 0;
            if (_ && C.has(P))
              return C.get(P);
            let J = y(w, g, A, x);
            return _ && C.set(P, J), J;
          }
        }
        function c(m, g) {
          let { originalText: p, [Symbol.for("comments")]: D, locStart: C, locEnd: w } = g, k = C(m), A = w(m), N = /* @__PURE__ */ new Set();
          for (let x of D)
            C(x) >= k && w(x) <= A && (x.printed = !0, N.add(x));
          return { doc: p.slice(k, A), printedComments: N };
        }
        function y(m, g, p, D) {
          let C = m.getValue(), { printer: w } = g, k, A;
          if (w.hasPrettierIgnore && w.hasPrettierIgnore(m))
            ({ doc: k, printedComments: A } = c(C, g));
          else {
            if (C)
              try {
                k = n.printSubtree(m, p, g, o);
              } catch (N) {
                if (globalThis.PRETTIER_DEBUG)
                  throw N;
              }
            k || (k = w.print(m, g, p, D));
          }
          return (!w.willPrintOwnComments || !w.willPrintOwnComments(m, g)) && (k = r(m, k, g, A)), k;
        }
        l.exports = o;
      } }), Hu = $({ "src/main/range-util.js"(u, l) {
        ue();
        var t = lr(), a = Qt(), s = (D) => {
          let { parser: C } = D;
          return C === "json" || C === "json5" || C === "json-stringify";
        };
        function e(D, C) {
          let w = [D.node, ...D.parentNodes], k = /* @__PURE__ */ new Set([C.node, ...C.parentNodes]);
          return w.find((A) => y.has(A.type) && k.has(A));
        }
        function r(D) {
          let C = D.length - 1;
          for (; ; ) {
            let w = D[C];
            if (w && (w.type === "Program" || w.type === "File"))
              C--;
            else
              break;
          }
          return D.slice(0, C + 1);
        }
        function n(D, C, w) {
          let { locStart: k, locEnd: A } = w, N = D.node, x = C.node;
          if (N === x)
            return { startNode: N, endNode: x };
          let P = k(D.node);
          for (let J of r(C.parentNodes))
            if (k(J) >= P)
              x = J;
            else
              break;
          let _ = A(C.node);
          for (let J of r(D.parentNodes)) {
            if (A(J) <= _)
              N = J;
            else
              break;
            if (N === x)
              break;
          }
          return { startNode: N, endNode: x };
        }
        function o(D, C, w, k) {
          let A = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], N = arguments.length > 5 ? arguments[5] : void 0, { locStart: x, locEnd: P } = w, _ = x(D), J = P(D);
          if (!(C > J || C < _ || N === "rangeEnd" && C === _ || N === "rangeStart" && C === J)) {
            for (let d of a.getSortedChildNodes(D, w)) {
              let T = o(d, C, w, k, [D, ...A], N);
              if (T)
                return T;
            }
            if (!k || k(D, A[0]))
              return { node: D, parentNodes: A };
          }
        }
        function c(D, C) {
          return C !== "DeclareExportDeclaration" && D !== "TypeParameterDeclaration" && (D === "Directive" || D === "TypeAlias" || D === "TSExportAssignment" || D.startsWith("Declare") || D.startsWith("TSDeclare") || D.endsWith("Statement") || D.endsWith("Declaration"));
        }
        var y = /* @__PURE__ */ new Set(["ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]), m = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
        function g(D, C, w) {
          if (!C)
            return !1;
          switch (D.parser) {
            case "flow":
            case "babel":
            case "babel-flow":
            case "babel-ts":
            case "typescript":
            case "acorn":
            case "espree":
            case "meriyah":
            case "__babel_estree":
              return c(C.type, w && w.type);
            case "json":
            case "json5":
            case "json-stringify":
              return y.has(C.type);
            case "graphql":
              return m.has(C.kind);
            case "vue":
              return C.tag !== "root";
          }
          return !1;
        }
        function p(D, C, w) {
          let { rangeStart: k, rangeEnd: A, locStart: N, locEnd: x } = C;
          t.ok(A > k);
          let P = D.slice(k, A).search(/\S/), _ = P === -1;
          if (!_)
            for (k += P; A > k && !/\S/.test(D[A - 1]); --A)
              ;
          let J = o(w, k, C, (F, i) => g(C, F, i), [], "rangeStart"), d = _ ? J : o(w, A, C, (F) => g(C, F), [], "rangeEnd");
          if (!J || !d)
            return { rangeStart: 0, rangeEnd: 0 };
          let T, f;
          if (s(C)) {
            let F = e(J, d);
            T = F, f = F;
          } else
            ({ startNode: T, endNode: f } = n(J, d, C));
          return { rangeStart: Math.min(N(T), N(f)), rangeEnd: Math.max(x(T), x(f)) };
        }
        l.exports = { calculateRange: p, findNodeAtOffset: o };
      } }), Yu = $({ "src/main/core.js"(u, l) {
        ue();
        var { diffArrays: t } = zr(), { printer: { printDocToString: a }, debug: { printDocToDebug: s } } = wt(), { getAlignmentSize: e } = Gt(), { guessEndOfLine: r, convertEndOfLineToChars: n, countEndOfLineChars: o, normalizeEndOfLine: c } = Rr(), y = Kt().normalize, m = sr(), g = Qt(), p = xt(), D = In(), C = Hu(), w = "\uFEFF", k = Symbol("cursor");
        function A(f, F, i) {
          let h = F.comments;
          return h && (delete F.comments, g.attach(h, F, f, i)), i[Symbol.for("comments")] = h || [], i[Symbol.for("tokens")] = F.tokens || [], i.originalText = f, h;
        }
        function N(f, F) {
          let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
          if (!f || f.trim().length === 0)
            return { formatted: "", cursorOffset: -1, comments: [] };
          let { ast: h, text: E } = p.parse(f, F);
          if (F.cursorOffset >= 0) {
            let I = C.findNodeAtOffset(h, F.cursorOffset, F);
            I && I.node && (F.cursorNode = I.node);
          }
          let b = A(E, h, F), S = D(h, F, i), B = a(S, F);
          if (g.ensureAllCommentsPrinted(b), i > 0) {
            let I = B.formatted.trim();
            B.cursorNodeStart !== void 0 && (B.cursorNodeStart -= B.formatted.indexOf(I)), B.formatted = I + n(F.endOfLine);
          }
          if (F.cursorOffset >= 0) {
            let I, q, G, M, te;
            if (F.cursorNode && B.cursorNodeText ? (I = F.locStart(F.cursorNode), q = E.slice(I, F.locEnd(F.cursorNode)), G = F.cursorOffset - I, M = B.cursorNodeStart, te = B.cursorNodeText) : (I = 0, q = E, G = F.cursorOffset, M = 0, te = B.formatted), q === te)
              return { formatted: B.formatted, cursorOffset: M + G, comments: b };
            let j = [...q];
            j.splice(G, 0, k);
            let De = [...te], U = t(j, De), R = M;
            for (let pe of U)
              if (pe.removed) {
                if (pe.value.includes(k))
                  break;
              } else
                R += pe.count;
            return { formatted: B.formatted, cursorOffset: R, comments: b };
          }
          return { formatted: B.formatted, cursorOffset: -1, comments: b };
        }
        function x(f, F) {
          let { ast: i, text: h } = p.parse(f, F), { rangeStart: E, rangeEnd: b } = C.calculateRange(h, F, i), S = h.slice(E, b), B = Math.min(E, h.lastIndexOf(`
`, E) + 1), I = h.slice(B, E).match(/^\s*/)[0], q = e(I, F.tabWidth), G = N(S, Object.assign(Object.assign({}, F), {}, { rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: F.cursorOffset > E && F.cursorOffset <= b ? F.cursorOffset - E : -1, endOfLine: "lf" }), q), M = G.formatted.trimEnd(), { cursorOffset: te } = F;
          te > b ? te += M.length - S.length : G.cursorOffset >= 0 && (te = G.cursorOffset + E);
          let j = h.slice(0, E) + M + h.slice(b);
          if (F.endOfLine !== "lf") {
            let De = n(F.endOfLine);
            te >= 0 && De === `\r
` && (te += o(j.slice(0, te), `
`)), j = j.replace(/\n/g, De);
          }
          return { formatted: j, cursorOffset: te, comments: G.comments };
        }
        function P(f, F, i) {
          return typeof F != "number" || Number.isNaN(F) || F < 0 || F > f.length ? i : F;
        }
        function _(f, F) {
          let { cursorOffset: i, rangeStart: h, rangeEnd: E } = F;
          return i = P(f, i, -1), h = P(f, h, 0), E = P(f, E, f.length), Object.assign(Object.assign({}, F), {}, { cursorOffset: i, rangeStart: h, rangeEnd: E });
        }
        function J(f, F) {
          let { cursorOffset: i, rangeStart: h, rangeEnd: E, endOfLine: b } = _(f, F), S = f.charAt(0) === w;
          if (S && (f = f.slice(1), i--, h--, E--), b === "auto" && (b = r(f)), f.includes("\r")) {
            let B = (I) => o(f.slice(0, Math.max(I, 0)), `\r
`);
            i -= B(i), h -= B(h), E -= B(E), f = c(f);
          }
          return { hasBOM: S, text: f, options: _(f, Object.assign(Object.assign({}, F), {}, { cursorOffset: i, rangeStart: h, rangeEnd: E, endOfLine: b })) };
        }
        function d(f, F) {
          let i = p.resolveParser(F);
          return !i.hasPragma || i.hasPragma(f);
        }
        function T(f, F) {
          let { hasBOM: i, text: h, options: E } = J(f, y(F));
          if (E.rangeStart >= E.rangeEnd && h !== "" || E.requirePragma && !d(h, E))
            return { formatted: f, cursorOffset: F.cursorOffset, comments: [] };
          let b;
          return E.rangeStart > 0 || E.rangeEnd < h.length ? b = x(h, E) : (!E.requirePragma && E.insertPragma && E.printer.insertPragma && !d(h, E) && (h = E.printer.insertPragma(h)), b = N(h, E)), i && (b.formatted = w + b.formatted, b.cursorOffset >= 0 && b.cursorOffset++), b;
        }
        l.exports = { formatWithCursor: T, parse(f, F, i) {
          let { text: h, options: E } = J(f, y(F)), b = p.parse(h, E);
          return i && (b.ast = m(b.ast, E)), b;
        }, formatAST(f, F) {
          F = y(F);
          let i = D(f, F);
          return a(i, F);
        }, formatDoc(f, F) {
          return T(s(f), Object.assign(Object.assign({}, F), {}, { parser: "__js_expression" })).formatted;
        }, printToDoc(f, F) {
          F = y(F);
          let { ast: i, text: h } = p.parse(f, F);
          return A(h, i, F), D(i, F);
        }, printDocToString(f, F) {
          return a(f, y(F));
        } };
      } }), Ku = $({ "src/common/util-shared.js"(u, l) {
        ue();
        var { getMaxContinuousCount: t, getStringWidth: a, getAlignmentSize: s, getIndentSize: e, skip: r, skipWhitespace: n, skipSpaces: o, skipNewline: c, skipToLineEnd: y, skipEverythingButNewLine: m, skipInlineComment: g, skipTrailingComment: p, hasNewline: D, hasNewlineInRange: C, hasSpaces: w, isNextLineEmpty: k, isNextLineEmptyAfterIndex: A, isPreviousLineEmpty: N, getNextNonSpaceNonCommentCharacterIndex: x, makeString: P, addLeadingComment: _, addDanglingComment: J, addTrailingComment: d } = Gt();
        l.exports = { getMaxContinuousCount: t, getStringWidth: a, getAlignmentSize: s, getIndentSize: e, skip: r, skipWhitespace: n, skipSpaces: o, skipNewline: c, skipToLineEnd: y, skipEverythingButNewLine: m, skipInlineComment: g, skipTrailingComment: p, hasNewline: D, hasNewlineInRange: C, hasSpaces: w, isNextLineEmpty: k, isNextLineEmptyAfterIndex: A, isPreviousLineEmpty: N, getNextNonSpaceNonCommentCharacterIndex: x, makeString: P, addLeadingComment: _, addDanglingComment: J, addTrailingComment: d };
      } }), vr = $({ "src/utils/create-language.js"(u, l) {
        ue(), l.exports = function(t, a) {
          let { languageId: s } = t, e = ne(t, Y);
          return Object.assign(Object.assign({ linguistLanguageId: s }, e), a(t));
        };
      } }), Qr = $({ "node_modules/esutils/lib/ast.js"(u, l) {
        ue(), function() {
          function t(o) {
            if (o == null)
              return !1;
            switch (o.type) {
              case "ArrayExpression":
              case "AssignmentExpression":
              case "BinaryExpression":
              case "CallExpression":
              case "ConditionalExpression":
              case "FunctionExpression":
              case "Identifier":
              case "Literal":
              case "LogicalExpression":
              case "MemberExpression":
              case "NewExpression":
              case "ObjectExpression":
              case "SequenceExpression":
              case "ThisExpression":
              case "UnaryExpression":
              case "UpdateExpression":
                return !0;
            }
            return !1;
          }
          function a(o) {
            if (o == null)
              return !1;
            switch (o.type) {
              case "DoWhileStatement":
              case "ForInStatement":
              case "ForStatement":
              case "WhileStatement":
                return !0;
            }
            return !1;
          }
          function s(o) {
            if (o == null)
              return !1;
            switch (o.type) {
              case "BlockStatement":
              case "BreakStatement":
              case "ContinueStatement":
              case "DebuggerStatement":
              case "DoWhileStatement":
              case "EmptyStatement":
              case "ExpressionStatement":
              case "ForInStatement":
              case "ForStatement":
              case "IfStatement":
              case "LabeledStatement":
              case "ReturnStatement":
              case "SwitchStatement":
              case "ThrowStatement":
              case "TryStatement":
              case "VariableDeclaration":
              case "WhileStatement":
              case "WithStatement":
                return !0;
            }
            return !1;
          }
          function e(o) {
            return s(o) || o != null && o.type === "FunctionDeclaration";
          }
          function r(o) {
            switch (o.type) {
              case "IfStatement":
                return o.alternate != null ? o.alternate : o.consequent;
              case "LabeledStatement":
              case "ForStatement":
              case "ForInStatement":
              case "WhileStatement":
              case "WithStatement":
                return o.body;
            }
            return null;
          }
          function n(o) {
            var c;
            if (o.type !== "IfStatement" || o.alternate == null)
              return !1;
            c = o.consequent;
            do {
              if (c.type === "IfStatement" && c.alternate == null)
                return !0;
              c = r(c);
            } while (c);
            return !1;
          }
          l.exports = { isExpression: t, isStatement: s, isIterationStatement: a, isSourceElement: e, isProblematicIfStatement: n, trailingStatement: r };
        }();
      } }), cn = $({ "node_modules/esutils/lib/code.js"(u, l) {
        ue(), function() {
          var t, a, s, e, r, n;
          a = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/, NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/ }, t = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/ };
          function o(A) {
            return 48 <= A && A <= 57;
          }
          function c(A) {
            return 48 <= A && A <= 57 || 97 <= A && A <= 102 || 65 <= A && A <= 70;
          }
          function y(A) {
            return A >= 48 && A <= 55;
          }
          s = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279];
          function m(A) {
            return A === 32 || A === 9 || A === 11 || A === 12 || A === 160 || A >= 5760 && s.indexOf(A) >= 0;
          }
          function g(A) {
            return A === 10 || A === 13 || A === 8232 || A === 8233;
          }
          function p(A) {
            if (A <= 65535)
              return String.fromCharCode(A);
            var N = String.fromCharCode(Math.floor((A - 65536) / 1024) + 55296), x = String.fromCharCode((A - 65536) % 1024 + 56320);
            return N + x;
          }
          for (e = new Array(128), n = 0; n < 128; ++n)
            e[n] = n >= 97 && n <= 122 || n >= 65 && n <= 90 || n === 36 || n === 95;
          for (r = new Array(128), n = 0; n < 128; ++n)
            r[n] = n >= 97 && n <= 122 || n >= 65 && n <= 90 || n >= 48 && n <= 57 || n === 36 || n === 95;
          function D(A) {
            return A < 128 ? e[A] : a.NonAsciiIdentifierStart.test(p(A));
          }
          function C(A) {
            return A < 128 ? r[A] : a.NonAsciiIdentifierPart.test(p(A));
          }
          function w(A) {
            return A < 128 ? e[A] : t.NonAsciiIdentifierStart.test(p(A));
          }
          function k(A) {
            return A < 128 ? r[A] : t.NonAsciiIdentifierPart.test(p(A));
          }
          l.exports = { isDecimalDigit: o, isHexDigit: c, isOctalDigit: y, isWhiteSpace: m, isLineTerminator: g, isIdentifierStartES5: D, isIdentifierPartES5: C, isIdentifierStartES6: w, isIdentifierPartES6: k };
        }();
      } }), ra = $({ "node_modules/esutils/lib/keyword.js"(u, l) {
        ue(), function() {
          var t = cn();
          function a(D) {
            switch (D) {
              case "implements":
              case "interface":
              case "package":
              case "private":
              case "protected":
              case "public":
              case "static":
              case "let":
                return !0;
              default:
                return !1;
            }
          }
          function s(D, C) {
            return !C && D === "yield" ? !1 : e(D, C);
          }
          function e(D, C) {
            if (C && a(D))
              return !0;
            switch (D.length) {
              case 2:
                return D === "if" || D === "in" || D === "do";
              case 3:
                return D === "var" || D === "for" || D === "new" || D === "try";
              case 4:
                return D === "this" || D === "else" || D === "case" || D === "void" || D === "with" || D === "enum";
              case 5:
                return D === "while" || D === "break" || D === "catch" || D === "throw" || D === "const" || D === "yield" || D === "class" || D === "super";
              case 6:
                return D === "return" || D === "typeof" || D === "delete" || D === "switch" || D === "export" || D === "import";
              case 7:
                return D === "default" || D === "finally" || D === "extends";
              case 8:
                return D === "function" || D === "continue" || D === "debugger";
              case 10:
                return D === "instanceof";
              default:
                return !1;
            }
          }
          function r(D, C) {
            return D === "null" || D === "true" || D === "false" || s(D, C);
          }
          function n(D, C) {
            return D === "null" || D === "true" || D === "false" || e(D, C);
          }
          function o(D) {
            return D === "eval" || D === "arguments";
          }
          function c(D) {
            var C, w, k;
            if (D.length === 0 || (k = D.charCodeAt(0), !t.isIdentifierStartES5(k)))
              return !1;
            for (C = 1, w = D.length; C < w; ++C)
              if (k = D.charCodeAt(C), !t.isIdentifierPartES5(k))
                return !1;
            return !0;
          }
          function y(D, C) {
            return (D - 55296) * 1024 + (C - 56320) + 65536;
          }
          function m(D) {
            var C, w, k, A, N;
            if (D.length === 0)
              return !1;
            for (N = t.isIdentifierStartES6, C = 0, w = D.length; C < w; ++C) {
              if (k = D.charCodeAt(C), 55296 <= k && k <= 56319) {
                if (++C, C >= w || (A = D.charCodeAt(C), !(56320 <= A && A <= 57343)))
                  return !1;
                k = y(k, A);
              }
              if (!N(k))
                return !1;
              N = t.isIdentifierPartES6;
            }
            return !0;
          }
          function g(D, C) {
            return c(D) && !r(D, C);
          }
          function p(D, C) {
            return m(D) && !n(D, C);
          }
          l.exports = { isKeywordES5: s, isKeywordES6: e, isReservedWordES5: r, isReservedWordES6: n, isRestrictedWord: o, isIdentifierNameES5: c, isIdentifierNameES6: m, isIdentifierES5: g, isIdentifierES6: p };
        }();
      } }), na = $({ "node_modules/esutils/lib/utils.js"(u) {
        ue(), function() {
          u.ast = Qr(), u.code = cn(), u.keyword = ra();
        }();
      } }), vn = $({ "src/language-js/utils/is-block-comment.js"(u, l) {
        ue();
        var t = /* @__PURE__ */ new Set(["Block", "CommentBlock", "MultiLine"]), a = (s) => t.has(s == null ? void 0 : s.type);
        l.exports = a;
      } }), ua = $({ "src/language-js/utils/is-node-matches.js"(u, l) {
        ue();
        function t(s, e) {
          let r = e.split(".");
          for (let n = r.length - 1; n >= 0; n--) {
            let o = r[n];
            if (n === 0)
              return s.type === "Identifier" && s.name === o;
            if (s.type !== "MemberExpression" || s.optional || s.computed || s.property.type !== "Identifier" || s.property.name !== o)
              return !1;
            s = s.object;
          }
        }
        function a(s, e) {
          return e.some((r) => t(s, r));
        }
        l.exports = a;
      } }), ur = $({ "src/language-js/utils/index.js"(u, l) {
        ue();
        var t = na().keyword.isIdentifierNameES5, { getLast: a, hasNewline: s, skipWhitespace: e, isNonEmptyArray: r, isNextLineEmptyAfterIndex: n, getStringWidth: o } = Gt(), { locStart: c, locEnd: y, hasSameLocStart: m } = or(), g = vn(), p = ua(), D = "(?:(?=.)\\s)", C = new RegExp(`^${D}*:`), w = new RegExp(`^${D}*::`);
        function k(O) {
          var $e, vt;
          return (($e = O.extra) === null || $e === void 0 ? void 0 : $e.parenthesized) && g((vt = O.trailingComments) === null || vt === void 0 ? void 0 : vt[0]) && C.test(O.trailingComments[0].value);
        }
        function A(O) {
          let $e = O == null ? void 0 : O[0];
          return g($e) && w.test($e.value);
        }
        function N(O, $e) {
          if (!O || typeof O != "object")
            return !1;
          if (Array.isArray(O))
            return O.some((zt) => N(zt, $e));
          let vt = $e(O);
          return typeof vt == "boolean" ? vt : Object.values(O).some((zt) => N(zt, $e));
        }
        function x(O) {
          return O.type === "AssignmentExpression" || O.type === "BinaryExpression" || O.type === "LogicalExpression" || O.type === "NGPipeExpression" || O.type === "ConditionalExpression" || we(O) || _e(O) || O.type === "SequenceExpression" || O.type === "TaggedTemplateExpression" || O.type === "BindExpression" || O.type === "UpdateExpression" && !O.prefix || Ur(O) || O.type === "TSNonNullExpression";
        }
        function P(O) {
          var $e, vt, zt, Ht, jr, cr;
          return O.expressions ? O.expressions[0] : ($e = (vt = (zt = (Ht = (jr = (cr = O.left) !== null && cr !== void 0 ? cr : O.test) !== null && jr !== void 0 ? jr : O.callee) !== null && Ht !== void 0 ? Ht : O.object) !== null && zt !== void 0 ? zt : O.tag) !== null && vt !== void 0 ? vt : O.argument) !== null && $e !== void 0 ? $e : O.expression;
        }
        function _(O, $e) {
          if ($e.expressions)
            return ["expressions", 0];
          if ($e.left)
            return ["left"];
          if ($e.test)
            return ["test"];
          if ($e.object)
            return ["object"];
          if ($e.callee)
            return ["callee"];
          if ($e.tag)
            return ["tag"];
          if ($e.argument)
            return ["argument"];
          if ($e.expression)
            return ["expression"];
          throw new Error("Unexpected node has no left side.");
        }
        function J(O) {
          return O = new Set(O), ($e) => O.has($e == null ? void 0 : $e.type);
        }
        var d = J(["Line", "CommentLine", "SingleLine", "HashbangComment", "HTMLOpen", "HTMLClose"]), T = J(["ExportDefaultDeclaration", "ExportDefaultSpecifier", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration"]);
        function f(O) {
          let $e = O.getParentNode();
          return O.getName() === "declaration" && T($e) ? $e : null;
        }
        var F = J(["BooleanLiteral", "DirectiveLiteral", "Literal", "NullLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "RegExpLiteral", "StringLiteral", "TemplateLiteral", "TSTypeLiteral", "JSXText"]);
        function i(O) {
          return O.type === "NumericLiteral" || O.type === "Literal" && typeof O.value == "number";
        }
        function h(O) {
          return O.type === "UnaryExpression" && (O.operator === "+" || O.operator === "-") && i(O.argument);
        }
        function E(O) {
          return O.type === "StringLiteral" || O.type === "Literal" && typeof O.value == "string";
        }
        var b = J(["ObjectTypeAnnotation", "TSTypeLiteral", "TSMappedType"]), S = J(["FunctionExpression", "ArrowFunctionExpression"]);
        function B(O) {
          return O.type === "FunctionExpression" || O.type === "ArrowFunctionExpression" && O.body.type === "BlockStatement";
        }
        function I(O) {
          return we(O) && O.callee.type === "Identifier" && ["async", "inject", "fakeAsync", "waitForAsync"].includes(O.callee.name);
        }
        var q = J(["JSXElement", "JSXFragment"]);
        function G(O, $e) {
          if (O.parentParser !== "markdown" && O.parentParser !== "mdx")
            return !1;
          let vt = $e.getNode();
          if (!vt.expression || !q(vt.expression))
            return !1;
          let zt = $e.getParentNode();
          return zt.type === "Program" && zt.body.length === 1;
        }
        function M(O) {
          return O.kind === "get" || O.kind === "set";
        }
        function te(O) {
          return M(O) || m(O, O.value);
        }
        function j(O) {
          return (O.type === "ObjectTypeProperty" || O.type === "ObjectTypeInternalSlot") && O.value.type === "FunctionTypeAnnotation" && !O.static && !te(O);
        }
        function De(O) {
          return (O.type === "TypeAnnotation" || O.type === "TSTypeAnnotation") && O.typeAnnotation.type === "FunctionTypeAnnotation" && !O.static && !m(O, O.typeAnnotation);
        }
        var U = J(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]);
        function R(O) {
          return _e(O) || O.type === "BindExpression" && !!O.object;
        }
        var pe = /* @__PURE__ */ new Set(["AnyTypeAnnotation", "TSAnyKeyword", "NullLiteralTypeAnnotation", "TSNullKeyword", "ThisTypeAnnotation", "TSThisType", "NumberTypeAnnotation", "TSNumberKeyword", "VoidTypeAnnotation", "TSVoidKeyword", "BooleanTypeAnnotation", "TSBooleanKeyword", "BigIntTypeAnnotation", "TSBigIntKeyword", "SymbolTypeAnnotation", "TSSymbolKeyword", "StringTypeAnnotation", "TSStringKeyword", "BooleanLiteralTypeAnnotation", "StringLiteralTypeAnnotation", "BigIntLiteralTypeAnnotation", "NumberLiteralTypeAnnotation", "TSLiteralType", "TSTemplateLiteralType", "EmptyTypeAnnotation", "MixedTypeAnnotation", "TSNeverKeyword", "TSObjectKeyword", "TSUndefinedKeyword", "TSUnknownKeyword"]);
        function be(O) {
          return O ? !!((O.type === "GenericTypeAnnotation" || O.type === "TSTypeReference") && !O.typeParameters || pe.has(O.type)) : !1;
        }
        function fe(O) {
          let $e = /^(?:before|after)(?:Each|All)$/;
          return O.callee.type === "Identifier" && $e.test(O.callee.name) && O.arguments.length === 1;
        }
        var Ie = ["it", "it.only", "it.skip", "describe", "describe.only", "describe.skip", "test", "test.only", "test.skip", "test.step", "test.describe", "test.describe.only", "test.describe.parallel", "test.describe.parallel.only", "test.describe.serial", "test.describe.serial.only", "skip", "xit", "xdescribe", "xtest", "fit", "fdescribe", "ftest"];
        function X(O) {
          return p(O, Ie);
        }
        function se(O, $e) {
          if (O.type !== "CallExpression")
            return !1;
          if (O.arguments.length === 1) {
            if (I(O) && $e && se($e))
              return S(O.arguments[0]);
            if (fe(O))
              return I(O.arguments[0]);
          } else if ((O.arguments.length === 2 || O.arguments.length === 3) && (O.arguments[0].type === "TemplateLiteral" || E(O.arguments[0])) && X(O.callee))
            return O.arguments[2] && !i(O.arguments[2]) ? !1 : (O.arguments.length === 2 ? S(O.arguments[1]) : B(O.arguments[1]) && Ke(O.arguments[1]).length <= 1) || I(O.arguments[1]);
          return !1;
        }
        var we = J(["CallExpression", "OptionalCallExpression"]), _e = J(["MemberExpression", "OptionalMemberExpression"]);
        function it(O) {
          let $e = "expressions";
          O.type === "TSTemplateLiteralType" && ($e = "types");
          let vt = O[$e];
          return vt.length === 0 ? !1 : vt.every((zt) => {
            if (Bt(zt))
              return !1;
            if (zt.type === "Identifier" || zt.type === "ThisExpression")
              return !0;
            if (_e(zt)) {
              let Ht = zt;
              for (; _e(Ht); )
                if (Ht.property.type !== "Identifier" && Ht.property.type !== "Literal" && Ht.property.type !== "StringLiteral" && Ht.property.type !== "NumericLiteral" || (Ht = Ht.object, Bt(Ht)))
                  return !1;
              return Ht.type === "Identifier" || Ht.type === "ThisExpression";
            }
            return !1;
          });
        }
        function ae(O, $e) {
          return O === "+" || O === "-" ? O + $e : $e;
        }
        function Q(O, $e) {
          let vt = c($e), zt = e(O, y($e));
          return zt !== !1 && O.slice(vt, vt + 2) === "/*" && O.slice(zt, zt + 2) === "*/";
        }
        function me(O, $e) {
          return q($e) ? jt($e) : Bt($e, ft.Leading, (vt) => s(O, y(vt)));
        }
        function Ce(O, $e) {
          return $e.parser !== "json" && E(O.key) && xe(O.key).slice(1, -1) === O.key.value && (t(O.key.value) && !($e.parser === "babel-ts" && O.type === "ClassProperty" || $e.parser === "typescript" && O.type === "PropertyDefinition") || Re(O.key.value) && String(Number(O.key.value)) === O.key.value && ($e.parser === "babel" || $e.parser === "acorn" || $e.parser === "espree" || $e.parser === "meriyah" || $e.parser === "__babel_estree"));
        }
        function Re(O) {
          return /^(?:\d+|\d+\.\d+)$/.test(O);
        }
        function Xe(O, $e) {
          let vt = /^[fx]?(?:describe|it|test)$/;
          return $e.type === "TaggedTemplateExpression" && $e.quasi === O && $e.tag.type === "MemberExpression" && $e.tag.property.type === "Identifier" && $e.tag.property.name === "each" && ($e.tag.object.type === "Identifier" && vt.test($e.tag.object.name) || $e.tag.object.type === "MemberExpression" && $e.tag.object.property.type === "Identifier" && ($e.tag.object.property.name === "only" || $e.tag.object.property.name === "skip") && $e.tag.object.object.type === "Identifier" && vt.test($e.tag.object.object.name));
        }
        function Ye(O) {
          return O.quasis.some(($e) => $e.value.raw.includes(`
`));
        }
        function Ct(O, $e) {
          return (O.type === "TemplateLiteral" && Ye(O) || O.type === "TaggedTemplateExpression" && Ye(O.quasi)) && !s($e, c(O), { backwards: !0 });
        }
        function Rt(O) {
          if (!Bt(O))
            return !1;
          let $e = a(Te(O, ft.Dangling));
          return $e && !g($e);
        }
        function It(O) {
          if (O.length <= 1)
            return !1;
          let $e = 0;
          for (let vt of O)
            if (S(vt)) {
              if ($e += 1, $e > 1)
                return !0;
            } else if (we(vt)) {
              for (let zt of vt.arguments)
                if (S(zt))
                  return !0;
            }
          return !1;
        }
        function Et(O) {
          let $e = O.getValue(), vt = O.getParentNode();
          return we($e) && we(vt) && vt.callee === $e && $e.arguments.length > vt.arguments.length && vt.arguments.length > 0;
        }
        function bt(O, $e) {
          if ($e >= 2)
            return !1;
          let vt = (cr) => bt(cr, $e + 1), zt = O.type === "Literal" && "regex" in O && O.regex.pattern || O.type === "RegExpLiteral" && O.pattern;
          if (zt && o(zt) > 5)
            return !1;
          if (O.type === "Literal" || O.type === "BigIntLiteral" || O.type === "DecimalLiteral" || O.type === "BooleanLiteral" || O.type === "NullLiteral" || O.type === "NumericLiteral" || O.type === "RegExpLiteral" || O.type === "StringLiteral" || O.type === "Identifier" || O.type === "ThisExpression" || O.type === "Super" || O.type === "PrivateName" || O.type === "PrivateIdentifier" || O.type === "ArgumentPlaceholder" || O.type === "Import")
            return !0;
          if (O.type === "TemplateLiteral")
            return O.quasis.every((cr) => !cr.value.raw.includes(`
`)) && O.expressions.every(vt);
          if (O.type === "ObjectExpression")
            return O.properties.every((cr) => !cr.computed && (cr.shorthand || cr.value && vt(cr.value)));
          if (O.type === "ArrayExpression")
            return O.elements.every((cr) => cr === null || vt(cr));
          if (Sr(O))
            return (O.type === "ImportExpression" || bt(O.callee, $e)) && ar(O).every(vt);
          if (_e(O))
            return bt(O.object, $e) && bt(O.property, $e);
          let Ht = { "!": !0, "-": !0, "+": !0, "~": !0 };
          if (O.type === "UnaryExpression" && Ht[O.operator])
            return bt(O.argument, $e);
          let jr = { "++": !0, "--": !0 };
          return O.type === "UpdateExpression" && jr[O.operator] ? bt(O.argument, $e) : O.type === "TSNonNullExpression" ? bt(O.expression, $e) : !1;
        }
        function xe(O) {
          var $e, vt;
          return ($e = (vt = O.extra) === null || vt === void 0 ? void 0 : vt.raw) !== null && $e !== void 0 ? $e : O.raw;
        }
        function H(O) {
          return O;
        }
        function ke(O) {
          return O.filepath && /\.tsx$/i.test(O.filepath);
        }
        function oe(O) {
          let $e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "es5";
          return O.trailingComma === "es5" && $e === "es5" || O.trailingComma === "all" && ($e === "all" || $e === "es5");
        }
        function Be(O, $e) {
          switch (O.type) {
            case "BinaryExpression":
            case "LogicalExpression":
            case "AssignmentExpression":
            case "NGPipeExpression":
              return Be(O.left, $e);
            case "MemberExpression":
            case "OptionalMemberExpression":
              return Be(O.object, $e);
            case "TaggedTemplateExpression":
              return O.tag.type === "FunctionExpression" ? !1 : Be(O.tag, $e);
            case "CallExpression":
            case "OptionalCallExpression":
              return O.callee.type === "FunctionExpression" ? !1 : Be(O.callee, $e);
            case "ConditionalExpression":
              return Be(O.test, $e);
            case "UpdateExpression":
              return !O.prefix && Be(O.argument, $e);
            case "BindExpression":
              return O.object && Be(O.object, $e);
            case "SequenceExpression":
              return Be(O.expressions[0], $e);
            case "TSSatisfiesExpression":
            case "TSAsExpression":
            case "TSNonNullExpression":
              return Be(O.expression, $e);
            default:
              return $e(O);
          }
        }
        var pt = { "==": !0, "!=": !0, "===": !0, "!==": !0 }, ut = { "*": !0, "/": !0, "%": !0 }, Le = { ">>": !0, ">>>": !0, "<<": !0 };
        function v(O, $e) {
          return !(ye($e) !== ye(O) || O === "**" || pt[O] && pt[$e] || $e === "%" && ut[O] || O === "%" && ut[$e] || $e !== O && ut[$e] && ut[O] || Le[O] && Le[$e]);
        }
        var K = new Map([["|>"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].flatMap((O, $e) => O.map((vt) => [vt, $e])));
        function ye(O) {
          return K.get(O);
        }
        function ze(O) {
          return !!Le[O] || O === "|" || O === "^" || O === "&";
        }
        function tt(O) {
          var $e;
          if (O.rest)
            return !0;
          let vt = Ke(O);
          return (($e = a(vt)) === null || $e === void 0 ? void 0 : $e.type) === "RestElement";
        }
        var ht = /* @__PURE__ */ new WeakMap();
        function Ke(O) {
          if (ht.has(O))
            return ht.get(O);
          let $e = [];
          return O.this && $e.push(O.this), Array.isArray(O.parameters) ? $e.push(...O.parameters) : Array.isArray(O.params) && $e.push(...O.params), O.rest && $e.push(O.rest), ht.set(O, $e), $e;
        }
        function pr(O, $e) {
          let vt = O.getValue(), zt = 0, Ht = (jr) => $e(jr, zt++);
          vt.this && O.call(Ht, "this"), Array.isArray(vt.parameters) ? O.each(Ht, "parameters") : Array.isArray(vt.params) && O.each(Ht, "params"), vt.rest && O.call(Ht, "rest");
        }
        var dt = /* @__PURE__ */ new WeakMap();
        function ar(O) {
          if (dt.has(O))
            return dt.get(O);
          let $e = O.arguments;
          return O.type === "ImportExpression" && ($e = [O.source], O.attributes && $e.push(O.attributes)), dt.set(O, $e), $e;
        }
        function Dt(O, $e) {
          let vt = O.getValue();
          vt.type === "ImportExpression" ? (O.call((zt) => $e(zt, 0), "source"), vt.attributes && O.call((zt) => $e(zt, 1), "attributes")) : O.each($e, "arguments");
        }
        function Tt(O) {
          return O.value.trim() === "prettier-ignore" && !O.unignore;
        }
        function jt(O) {
          return O && (O.prettierIgnore || Bt(O, ft.PrettierIgnore));
        }
        function tr(O) {
          let $e = O.getValue();
          return jt($e);
        }
        var ft = { Leading: 2, Trailing: 4, Dangling: 8, Block: 16, Line: 32, PrettierIgnore: 64, First: 128, Last: 256 }, Pt = (O, $e) => {
          if (typeof O == "function" && ($e = O, O = 0), O || $e)
            return (vt, zt, Ht) => !(O & ft.Leading && !vt.leading || O & ft.Trailing && !vt.trailing || O & ft.Dangling && (vt.leading || vt.trailing) || O & ft.Block && !g(vt) || O & ft.Line && !d(vt) || O & ft.First && zt !== 0 || O & ft.Last && zt !== Ht.length - 1 || O & ft.PrettierIgnore && !Tt(vt) || $e && !$e(vt));
        };
        function Bt(O, $e, vt) {
          if (!r(O == null ? void 0 : O.comments))
            return !1;
          let zt = Pt($e, vt);
          return zt ? O.comments.some(zt) : !0;
        }
        function Te(O, $e, vt) {
          if (!Array.isArray(O == null ? void 0 : O.comments))
            return [];
          let zt = Pt($e, vt);
          return zt ? O.comments.filter(zt) : O.comments;
        }
        var Vr = (O, $e) => {
          let { originalText: vt } = $e;
          return n(vt, y(O));
        };
        function Sr(O) {
          return we(O) || O.type === "NewExpression" || O.type === "ImportExpression";
        }
        function Xt(O) {
          return O && (O.type === "ObjectProperty" || O.type === "Property" && !O.method && O.kind === "init");
        }
        function Wt(O) {
          return !!O.__isUsingHackPipeline;
        }
        var nr = Symbol("ifWithoutBlockAndSameLineComment");
        function Ur(O) {
          return O.type === "TSAsExpression" || O.type === "TSSatisfiesExpression";
        }
        l.exports = { getFunctionParameters: Ke, iterateFunctionParametersPath: pr, getCallArguments: ar, iterateCallArgumentsPath: Dt, hasRestParameter: tt, getLeftSide: P, getLeftSidePathName: _, getParentExportDeclaration: f, getTypeScriptMappedTypeModifier: ae, hasFlowAnnotationComment: A, hasFlowShorthandAnnotationComment: k, hasLeadingOwnLineComment: me, hasNakedLeftSide: x, hasNode: N, hasIgnoreComment: tr, hasNodeIgnoreComment: jt, identity: H, isBinaryish: U, isCallLikeExpression: Sr, isEnabledHackPipeline: Wt, isLineComment: d, isPrettierIgnoreComment: Tt, isCallExpression: we, isMemberExpression: _e, isExportDeclaration: T, isFlowAnnotationComment: Q, isFunctionCompositionArgs: It, isFunctionNotation: te, isFunctionOrArrowExpression: S, isGetterOrSetter: M, isJestEachTemplateLiteral: Xe, isJsxNode: q, isLiteral: F, isLongCurriedCallExpression: Et, isSimpleCallArgument: bt, isMemberish: R, isNumericLiteral: i, isSignedNumericLiteral: h, isObjectProperty: Xt, isObjectType: b, isObjectTypePropertyAFunction: j, isSimpleType: be, isSimpleNumber: Re, isSimpleTemplateLiteral: it, isStringLiteral: E, isStringPropSafeToUnquote: Ce, isTemplateOnItsOwnLine: Ct, isTestCall: se, isTheOnlyJsxElementInMarkdown: G, isTSXFile: ke, isTypeAnnotationAFunction: De, isNextLineEmpty: Vr, needsHardlineAfterDanglingComment: Rt, rawText: xe, shouldPrintComma: oe, isBitwiseOperator: ze, shouldFlatten: v, startsWithNoLookaheadToken: Be, getPrecedence: ye, hasComment: Bt, getComments: Te, CommentCheckFlags: ft, markerForIfWithoutBlockAndSameLineComment: nr, isTSTypeExpression: Ur };
      } }), jn = $({ "src/language-js/print/template-literal.js"(u, l) {
        ue();
        var t = mr(), { getStringWidth: a, getIndentSize: s } = Gt(), { builders: { join: e, hardline: r, softline: n, group: o, indent: c, align: y, lineSuffixBoundary: m, addAlignmentToDoc: g }, printer: { printDocToString: p }, utils: { mapDoc: D } } = wt(), { isBinaryish: C, isJestEachTemplateLiteral: w, isSimpleTemplateLiteral: k, hasComment: A, isMemberExpression: N, isTSTypeExpression: x } = ur();
        function P(F, i, h) {
          let E = F.getValue();
          if (E.type === "TemplateLiteral" && w(E, F.getParentNode())) {
            let q = _(F, h, i);
            if (q)
              return q;
          }
          let b = "expressions";
          E.type === "TSTemplateLiteralType" && (b = "types");
          let S = [], B = F.map(i, b), I = k(E);
          return I && (B = B.map((q) => p(q, Object.assign(Object.assign({}, h), {}, { printWidth: Number.POSITIVE_INFINITY })).formatted)), S.push(m, "`"), F.each((q) => {
            let G = q.getName();
            if (S.push(i()), G < B.length) {
              let { tabWidth: M } = h, te = q.getValue(), j = s(te.value.raw, M), De = B[G];
              if (!I) {
                let R = E[b][G];
                (A(R) || N(R) || R.type === "ConditionalExpression" || R.type === "SequenceExpression" || x(R) || C(R)) && (De = [c([n, De]), n]);
              }
              let U = j === 0 && te.value.raw.endsWith(`
`) ? y(Number.NEGATIVE_INFINITY, De) : g(De, j, M);
              S.push(o(["${", U, m, "}"]));
            }
          }, "quasis"), S.push("`"), S;
        }
        function _(F, i, h) {
          let E = F.getNode(), b = E.quasis[0].value.raw.trim().split(/\s*\|\s*/);
          if (b.length > 1 || b.some((S) => S.length > 0)) {
            i.__inJestEach = !0;
            let S = F.map(h, "expressions");
            i.__inJestEach = !1;
            let B = [], I = S.map((j) => "${" + p(j, Object.assign(Object.assign({}, i), {}, { printWidth: Number.POSITIVE_INFINITY, endOfLine: "lf" })).formatted + "}"), q = [{ hasLineBreak: !1, cells: [] }];
            for (let j = 1; j < E.quasis.length; j++) {
              let De = t(q), U = I[j - 1];
              De.cells.push(U), U.includes(`
`) && (De.hasLineBreak = !0), E.quasis[j].value.raw.includes(`
`) && q.push({ hasLineBreak: !1, cells: [] });
            }
            let G = Math.max(b.length, ...q.map((j) => j.cells.length)), M = Array.from({ length: G }).fill(0), te = [{ cells: b }, ...q.filter((j) => j.cells.length > 0)];
            for (let { cells: j } of te.filter((De) => !De.hasLineBreak))
              for (let [De, U] of j.entries())
                M[De] = Math.max(M[De], a(U));
            return B.push(m, "`", c([r, e(r, te.map((j) => e(" | ", j.cells.map((De, U) => j.hasLineBreak ? De : De + " ".repeat(M[U] - a(De))))))]), r, "`"), B;
          }
        }
        function J(F, i) {
          let h = F.getValue(), E = i();
          return A(h) && (E = o([c([n, E]), n])), ["${", E, m, "}"];
        }
        function d(F, i) {
          return F.map((h) => J(h, i), "expressions");
        }
        function T(F, i) {
          return D(F, (h) => typeof h == "string" ? i ? h.replace(/(\\*)`/g, "$1$1\\`") : f(h) : h);
        }
        function f(F) {
          return F.replace(/([\\`]|\${)/g, "\\$1");
        }
        l.exports = { printTemplateLiteral: P, printTemplateExpressions: d, escapeTemplateCharacters: T, uncookTemplateElementValue: f };
      } }), ia = $({ "src/language-js/embed/markdown.js"(u, l) {
        ue();
        var { builders: { indent: t, softline: a, literalline: s, dedentToRoot: e } } = wt(), { escapeTemplateCharacters: r } = jn();
        function n(c, y, m) {
          let g = c.getValue().quasis[0].value.raw.replace(/((?:\\\\)*)\\`/g, (w, k) => "\\".repeat(k.length / 2) + "`"), p = o(g), D = p !== "";
          D && (g = g.replace(new RegExp(`^${p}`, "gm"), ""));
          let C = r(m(g, { parser: "markdown", __inJsTemplate: !0 }, { stripTrailingHardline: !0 }), !0);
          return ["`", D ? t([a, C]) : [s, e(C)], a, "`"];
        }
        function o(c) {
          let y = c.match(/^([^\S\n]*)\S/m);
          return y === null ? "" : y[1];
        }
        l.exports = n;
      } }), sa = $({ "src/language-js/embed/css.js"(u, l) {
        ue();
        var { isNonEmptyArray: t } = Gt(), { builders: { indent: a, hardline: s, softline: e }, utils: { mapDoc: r, replaceEndOfLine: n, cleanDoc: o } } = wt(), { printTemplateExpressions: c } = jn();
        function y(p, D, C) {
          let w = p.getValue(), k = w.quasis.map((_) => _.value.raw), A = 0, N = k.reduce((_, J, d) => d === 0 ? J : _ + "@prettier-placeholder-" + A++ + "-id" + J, ""), x = C(N, { parser: "scss" }, { stripTrailingHardline: !0 }), P = c(p, D);
          return m(x, w, P);
        }
        function m(p, D, C) {
          if (D.quasis.length === 1 && !D.quasis[0].value.raw.trim())
            return "``";
          let w = g(p, C);
          if (!w)
            throw new Error("Couldn't insert all the expressions");
          return ["`", a([s, w]), e, "`"];
        }
        function g(p, D) {
          if (!t(D))
            return p;
          let C = 0, w = r(o(p), (k) => typeof k != "string" || !k.includes("@prettier-placeholder") ? k : k.split(/@prettier-placeholder-(\d+)-id/).map((A, N) => N % 2 === 0 ? n(A) : (C++, D[A])));
          return D.length === C ? w : null;
        }
        l.exports = y;
      } }), aa = $({ "src/language-js/embed/graphql.js"(u, l) {
        ue();
        var { builders: { indent: t, join: a, hardline: s } } = wt(), { escapeTemplateCharacters: e, printTemplateExpressions: r } = jn();
        function n(c, y, m) {
          let g = c.getValue(), p = g.quasis.length;
          if (p === 1 && g.quasis[0].value.raw.trim() === "")
            return "``";
          let D = r(c, y), C = [];
          for (let w = 0; w < p; w++) {
            let k = g.quasis[w], A = w === 0, N = w === p - 1, x = k.value.cooked, P = x.split(`
`), _ = P.length, J = D[w], d = _ > 2 && P[0].trim() === "" && P[1].trim() === "", T = _ > 2 && P[_ - 1].trim() === "" && P[_ - 2].trim() === "", f = P.every((i) => /^\s*(?:#[^\n\r]*)?$/.test(i));
            if (!N && /#[^\n\r]*$/.test(P[_ - 1]))
              return null;
            let F = null;
            f ? F = o(P) : F = m(x, { parser: "graphql" }, { stripTrailingHardline: !0 }), F ? (F = e(F, !1), !A && d && C.push(""), C.push(F), !N && T && C.push("")) : !A && !N && d && C.push(""), J && C.push(J);
          }
          return ["`", t([s, a(s, C)]), s, "`"];
        }
        function o(c) {
          let y = [], m = !1, g = c.map((p) => p.trim());
          for (let [p, D] of g.entries())
            D !== "" && (g[p - 1] === "" && m ? y.push([s, D]) : y.push(D), m = !0);
          return y.length === 0 ? null : a(s, y);
        }
        l.exports = n;
      } }), oa = $({ "src/language-js/embed/html.js"(u, l) {
        ue();
        var { builders: { indent: t, line: a, hardline: s, group: e }, utils: { mapDoc: r } } = wt(), { printTemplateExpressions: n, uncookTemplateElementValue: o } = jn(), c = 0;
        function y(m, g, p, D, C) {
          let { parser: w } = C, k = m.getValue(), A = c;
          c = c + 1 >>> 0;
          let N = (h) => `PRETTIER_HTML_PLACEHOLDER_${h}_${A}_IN_JS`, x = k.quasis.map((h, E, b) => E === b.length - 1 ? h.value.cooked : h.value.cooked + N(E)).join(""), P = n(m, g);
          if (P.length === 0 && x.trim().length === 0)
            return "``";
          let _ = new RegExp(N("(\\d+)"), "g"), J = 0, d = p(x, { parser: w, __onHtmlRoot(h) {
            J = h.children.length;
          } }, { stripTrailingHardline: !0 }), T = r(d, (h) => {
            if (typeof h != "string")
              return h;
            let E = [], b = h.split(_);
            for (let S = 0; S < b.length; S++) {
              let B = b[S];
              if (S % 2 === 0) {
                B && (B = o(B), D.__embeddedInHtml && (B = B.replace(/<\/(script)\b/gi, "<\\/$1")), E.push(B));
                continue;
              }
              let I = Number(B);
              E.push(P[I]);
            }
            return E;
          }), f = /^\s/.test(x) ? " " : "", F = /\s$/.test(x) ? " " : "", i = D.htmlWhitespaceSensitivity === "ignore" ? s : f && F ? a : null;
          return e(i ? ["`", t([i, e(T)]), i, "`"] : ["`", f, J > 1 ? t(e(T)) : e(T), F, "`"]);
        }
        l.exports = y;
      } }), la = $({ "src/language-js/embed.js"(u, l) {
        ue();
        var { hasComment: t, CommentCheckFlags: a, isObjectProperty: s } = ur(), e = ia(), r = sa(), n = aa(), o = oa();
        function c(d) {
          if (g(d) || w(d) || k(d) || p(d))
            return "css";
          if (x(d))
            return "graphql";
          if (_(d))
            return "html";
          if (D(d))
            return "angular";
          if (m(d))
            return "markdown";
        }
        function y(d, T, f, F) {
          let i = d.getValue();
          if (i.type !== "TemplateLiteral" || J(i))
            return;
          let h = c(d);
          if (h) {
            if (h === "markdown")
              return e(d, T, f);
            if (h === "css")
              return r(d, T, f);
            if (h === "graphql")
              return n(d, T, f);
            if (h === "html" || h === "angular")
              return o(d, T, f, F, { parser: h });
          }
        }
        function m(d) {
          let T = d.getValue(), f = d.getParentNode();
          return f && f.type === "TaggedTemplateExpression" && T.quasis.length === 1 && f.tag.type === "Identifier" && (f.tag.name === "md" || f.tag.name === "markdown");
        }
        function g(d) {
          let T = d.getValue(), f = d.getParentNode(), F = d.getParentNode(1);
          return F && T.quasis && f.type === "JSXExpressionContainer" && F.type === "JSXElement" && F.openingElement.name.name === "style" && F.openingElement.attributes.some((i) => i.name.name === "jsx") || f && f.type === "TaggedTemplateExpression" && f.tag.type === "Identifier" && f.tag.name === "css" || f && f.type === "TaggedTemplateExpression" && f.tag.type === "MemberExpression" && f.tag.object.name === "css" && (f.tag.property.name === "global" || f.tag.property.name === "resolve");
        }
        function p(d) {
          return d.match((T) => T.type === "TemplateLiteral", (T, f) => T.type === "ArrayExpression" && f === "elements", (T, f) => s(T) && T.key.type === "Identifier" && T.key.name === "styles" && f === "value", ...C);
        }
        function D(d) {
          return d.match((T) => T.type === "TemplateLiteral", (T, f) => s(T) && T.key.type === "Identifier" && T.key.name === "template" && f === "value", ...C);
        }
        var C = [(d, T) => d.type === "ObjectExpression" && T === "properties", (d, T) => d.type === "CallExpression" && d.callee.type === "Identifier" && d.callee.name === "Component" && T === "arguments", (d, T) => d.type === "Decorator" && T === "expression"];
        function w(d) {
          let T = d.getParentNode();
          if (!T || T.type !== "TaggedTemplateExpression")
            return !1;
          let f = T.tag.type === "ParenthesizedExpression" ? T.tag.expression : T.tag;
          switch (f.type) {
            case "MemberExpression":
              return A(f.object) || N(f);
            case "CallExpression":
              return A(f.callee) || f.callee.type === "MemberExpression" && (f.callee.object.type === "MemberExpression" && (A(f.callee.object.object) || N(f.callee.object)) || f.callee.object.type === "CallExpression" && A(f.callee.object.callee));
            case "Identifier":
              return f.name === "css";
            default:
              return !1;
          }
        }
        function k(d) {
          let T = d.getParentNode(), f = d.getParentNode(1);
          return f && T.type === "JSXExpressionContainer" && f.type === "JSXAttribute" && f.name.type === "JSXIdentifier" && f.name.name === "css";
        }
        function A(d) {
          return d.type === "Identifier" && d.name === "styled";
        }
        function N(d) {
          return /^[A-Z]/.test(d.object.name) && d.property.name === "extend";
        }
        function x(d) {
          let T = d.getValue(), f = d.getParentNode();
          return P(T, "GraphQL") || f && (f.type === "TaggedTemplateExpression" && (f.tag.type === "MemberExpression" && f.tag.object.name === "graphql" && f.tag.property.name === "experimental" || f.tag.type === "Identifier" && (f.tag.name === "gql" || f.tag.name === "graphql")) || f.type === "CallExpression" && f.callee.type === "Identifier" && f.callee.name === "graphql");
        }
        function P(d, T) {
          return t(d, a.Block | a.Leading, (f) => {
            let { value: F } = f;
            return F === ` ${T} `;
          });
        }
        function _(d) {
          return P(d.getValue(), "HTML") || d.match((T) => T.type === "TemplateLiteral", (T, f) => T.type === "TaggedTemplateExpression" && T.tag.type === "Identifier" && T.tag.name === "html" && f === "quasi");
        }
        function J(d) {
          let { quasis: T } = d;
          return T.some((f) => {
            let { value: { cooked: F } } = f;
            return F === null;
          });
        }
        l.exports = y;
      } }), pa = $({ "src/language-js/clean.js"(u, l) {
        ue();
        var t = vn(), a = /* @__PURE__ */ new Set(["range", "raw", "comments", "leadingComments", "trailingComments", "innerComments", "extra", "start", "end", "loc", "flags", "errors", "tokens"]), s = (r) => {
          for (let n of r.quasis)
            delete n.value;
        };
        function e(r, n, o) {
          if (r.type === "Program" && delete n.sourceType, (r.type === "BigIntLiteral" || r.type === "BigIntLiteralTypeAnnotation") && n.value && (n.value = n.value.toLowerCase()), (r.type === "BigIntLiteral" || r.type === "Literal") && n.bigint && (n.bigint = n.bigint.toLowerCase()), r.type === "DecimalLiteral" && (n.value = Number(n.value)), r.type === "Literal" && n.decimal && (n.decimal = Number(n.decimal)), r.type === "EmptyStatement" || r.type === "JSXText" || r.type === "JSXExpressionContainer" && (r.expression.type === "Literal" || r.expression.type === "StringLiteral") && r.expression.value === " ")
            return null;
          if ((r.type === "Property" || r.type === "ObjectProperty" || r.type === "MethodDefinition" || r.type === "ClassProperty" || r.type === "ClassMethod" || r.type === "PropertyDefinition" || r.type === "TSDeclareMethod" || r.type === "TSPropertySignature" || r.type === "ObjectTypeProperty") && typeof r.key == "object" && r.key && (r.key.type === "Literal" || r.key.type === "NumericLiteral" || r.key.type === "StringLiteral" || r.key.type === "Identifier") && delete n.key, r.type === "JSXElement" && r.openingElement.name.name === "style" && r.openingElement.attributes.some((m) => m.name.name === "jsx"))
            for (let { type: m, expression: g } of n.children)
              m === "JSXExpressionContainer" && g.type === "TemplateLiteral" && s(g);
          r.type === "JSXAttribute" && r.name.name === "css" && r.value.type === "JSXExpressionContainer" && r.value.expression.type === "TemplateLiteral" && s(n.value.expression), r.type === "JSXAttribute" && r.value && r.value.type === "Literal" && /["']|&quot;|&apos;/.test(r.value.value) && (n.value.value = n.value.value.replace(/["']|&quot;|&apos;/g, '"'));
          let c = r.expression || r.callee;
          if (r.type === "Decorator" && c.type === "CallExpression" && c.callee.name === "Component" && c.arguments.length === 1) {
            let m = r.expression.arguments[0].properties;
            for (let [g, p] of n.expression.arguments[0].properties.entries())
              switch (m[g].key.name) {
                case "styles":
                  p.value.type === "ArrayExpression" && s(p.value.elements[0]);
                  break;
                case "template":
                  p.value.type === "TemplateLiteral" && s(p.value);
                  break;
              }
          }
          if (r.type === "TaggedTemplateExpression" && (r.tag.type === "MemberExpression" || r.tag.type === "Identifier" && (r.tag.name === "gql" || r.tag.name === "graphql" || r.tag.name === "css" || r.tag.name === "md" || r.tag.name === "markdown" || r.tag.name === "html") || r.tag.type === "CallExpression") && s(n.quasi), r.type === "TemplateLiteral") {
            var y;
            (!((y = r.leadingComments) === null || y === void 0) && y.some((m) => t(m) && ["GraphQL", "HTML"].some((g) => m.value === ` ${g} `)) || o.type === "CallExpression" && o.callee.name === "graphql" || !r.leadingComments) && s(n);
          }
          if (r.type === "InterpreterDirective" && (n.value = n.value.trimEnd()), (r.type === "TSIntersectionType" || r.type === "TSUnionType") && r.types.length === 1)
            return n.types[0];
        }
        e.ignoredProperties = a, l.exports = e;
      } }), Es = {};
      Ft(Es, { EOL: () => ss, arch: () => ca, cpus: () => xs, default: () => _s, endianness: () => Cs, freemem: () => bs, getNetworkInterfaces: () => Ns, hostname: () => Fs, loadavg: () => As, networkInterfaces: () => ws, platform: () => Da, release: () => Bs, tmpDir: () => us, tmpdir: () => is, totalmem: () => Ss, type: () => Ts, uptime: () => vs });
      function Cs() {
        if (typeof Qu > "u") {
          var u = new ArrayBuffer(2), l = new Uint8Array(u), t = new Uint16Array(u);
          if (l[0] = 1, l[1] = 2, t[0] === 258)
            Qu = "BE";
          else if (t[0] === 513)
            Qu = "LE";
          else
            throw new Error("unable to figure out endianess");
        }
        return Qu;
      }
      function Fs() {
        return typeof globalThis.location < "u" ? globalThis.location.hostname : "";
      }
      function As() {
        return [];
      }
      function vs() {
        return 0;
      }
      function bs() {
        return Number.MAX_VALUE;
      }
      function Ss() {
        return Number.MAX_VALUE;
      }
      function xs() {
        return [];
      }
      function Ts() {
        return "Browser";
      }
      function Bs() {
        return typeof globalThis.navigator < "u" ? globalThis.navigator.appVersion : "";
      }
      function ws() {
      }
      function Ns() {
      }
      function ca() {
        return "javascript";
      }
      function Da() {
        return "browser";
      }
      function us() {
        return "/tmp";
      }
      var Qu, is, ss, _s, da = rt({ "node-modules-polyfills:os"() {
        ue(), is = us, ss = `
`, _s = { EOL: ss, tmpdir: is, tmpDir: us, networkInterfaces: ws, getNetworkInterfaces: Ns, release: Bs, type: Ts, cpus: xs, totalmem: Ss, freemem: bs, uptime: vs, loadavg: As, hostname: Fs, endianness: Cs };
      } }), fa = $({ "node-modules-polyfills-commonjs:os"(u, l) {
        ue();
        var t = (da(), qt(Es));
        if (t && t.default) {
          l.exports = t.default;
          for (let a in t)
            l.exports[a] = t[a];
        } else
          t && (l.exports = t);
      } }), ma = $({ "node_modules/detect-newline/index.js"(u, l) {
        ue();
        var t = (a) => {
          if (typeof a != "string")
            throw new TypeError("Expected a string");
          let s = a.match(/(?:\r?\n)/g) || [];
          if (s.length === 0)
            return;
          let e = s.filter((n) => n === `\r
`).length, r = s.length - e;
          return e > r ? `\r
` : `
`;
        };
        l.exports = t, l.exports.graceful = (a) => typeof a == "string" && t(a) || `
`;
      } }), ha = $({ "node_modules/jest-docblock/build/index.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 }), u.extract = p, u.parse = C, u.parseWithComments = w, u.print = k, u.strip = D;
        function l() {
          let N = fa();
          return l = function() {
            return N;
          }, N;
        }
        function t() {
          let N = a(ma());
          return t = function() {
            return N;
          }, N;
        }
        function a(N) {
          return N && N.__esModule ? N : { default: N };
        }
        var s = /\*\/$/, e = /^\/\*\*?/, r = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, n = /(^|\s+)\/\/([^\r\n]*)/g, o = /^(\r?\n)+/, c = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g, y = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g, m = /(\r?\n|^) *\* ?/g, g = [];
        function p(N) {
          let x = N.match(r);
          return x ? x[0].trimLeft() : "";
        }
        function D(N) {
          let x = N.match(r);
          return x && x[0] ? N.substring(x[0].length) : N;
        }
        function C(N) {
          return w(N).pragmas;
        }
        function w(N) {
          let x = (0, t().default)(N) || l().EOL;
          N = N.replace(e, "").replace(s, "").replace(m, "$1");
          let P = "";
          for (; P !== N; )
            P = N, N = N.replace(c, `${x}$1 $2${x}`);
          N = N.replace(o, "").trimRight();
          let _ = /* @__PURE__ */ Object.create(null), J = N.replace(y, "").replace(o, "").trimRight(), d;
          for (; d = y.exec(N); ) {
            let T = d[2].replace(n, "");
            typeof _[d[1]] == "string" || Array.isArray(_[d[1]]) ? _[d[1]] = g.concat(_[d[1]], T) : _[d[1]] = T;
          }
          return { comments: J, pragmas: _ };
        }
        function k(N) {
          let { comments: x = "", pragmas: P = {} } = N, _ = (0, t().default)(x) || l().EOL, J = "/**", d = " *", T = " */", f = Object.keys(P), F = f.map((h) => A(h, P[h])).reduce((h, E) => h.concat(E), []).map((h) => `${d} ${h}${_}`).join("");
          if (!x) {
            if (f.length === 0)
              return "";
            if (f.length === 1 && !Array.isArray(P[f[0]])) {
              let h = P[f[0]];
              return `${J} ${A(f[0], h)[0]}${T}`;
            }
          }
          let i = x.split(_).map((h) => `${d} ${h}`).join(_) + _;
          return J + _ + (x ? i : "") + (x && f.length ? d + _ : "") + F + T;
        }
        function A(N, x) {
          return g.concat(x).map((P) => `@${N} ${P}`.trim());
        }
      } }), ga = $({ "src/language-js/utils/get-shebang.js"(u, l) {
        ue();
        function t(a) {
          if (!a.startsWith("#!"))
            return "";
          let s = a.indexOf(`
`);
          return s === -1 ? a : a.slice(0, s);
        }
        l.exports = t;
      } }), ks = $({ "src/language-js/pragma.js"(u, l) {
        ue();
        var { parseWithComments: t, strip: a, extract: s, print: e } = ha(), { normalizeEndOfLine: r } = Rr(), n = ga();
        function o(m) {
          let g = n(m);
          g && (m = m.slice(g.length + 1));
          let p = s(m), { pragmas: D, comments: C } = t(p);
          return { shebang: g, text: m, pragmas: D, comments: C };
        }
        function c(m) {
          let g = Object.keys(o(m).pragmas);
          return g.includes("prettier") || g.includes("format");
        }
        function y(m) {
          let { shebang: g, text: p, pragmas: D, comments: C } = o(m), w = a(p), k = e({ pragmas: Object.assign({ format: "" }, D), comments: C.trimStart() });
          return (g ? `${g}
` : "") + r(k) + (w.startsWith(`
`) ? `
` : `

`) + w;
        }
        l.exports = { hasPragma: c, insertPragma: y };
      } }), ya = $({ "src/language-js/utils/is-type-cast-comment.js"(u, l) {
        ue();
        var t = vn();
        function a(s) {
          return t(s) && s.value[0] === "*" && /@(?:type|satisfies)\b/.test(s.value);
        }
        l.exports = a;
      } }), Ps = $({ "src/language-js/comments.js"(u, l) {
        ue();
        var { getLast: t, hasNewline: a, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: s, getNextNonSpaceNonCommentCharacter: e, hasNewlineInRange: r, addLeadingComment: n, addTrailingComment: o, addDanglingComment: c, getNextNonSpaceNonCommentCharacterIndex: y, isNonEmptyArray: m } = Gt(), { getFunctionParameters: g, isPrettierIgnoreComment: p, isJsxNode: D, hasFlowShorthandAnnotationComment: C, hasFlowAnnotationComment: w, hasIgnoreComment: k, isCallLikeExpression: A, getCallArguments: N, isCallExpression: x, isMemberExpression: P, isObjectProperty: _, isLineComment: J, getComments: d, CommentCheckFlags: T, markerForIfWithoutBlockAndSameLineComment: f } = ur(), { locStart: F, locEnd: i } = or(), h = vn(), E = ya();
        function b(Le) {
          return [H, it, De, M, te, j, be, Ye, Ce, Xe, Ct, Rt, Ie, ae, Q].some((v) => v(Le));
        }
        function S(Le) {
          return [G, it, U, Ct, M, te, j, be, ae, me, Re, Xe, bt, Q, oe].some((v) => v(Le));
        }
        function B(Le) {
          return [H, M, te, R, _e, Ie, Xe, we, se, ke, Q, xe].some((v) => v(Le));
        }
        function I(Le, v) {
          let K = (Le.body || Le.properties).find((ye) => {
            let { type: ze } = ye;
            return ze !== "EmptyStatement";
          });
          K ? n(K, v) : c(Le, v);
        }
        function q(Le, v) {
          Le.type === "BlockStatement" ? I(Le, v) : n(Le, v);
        }
        function G(Le) {
          let { comment: v, followingNode: K } = Le;
          return K && E(v) ? (n(K, v), !0) : !1;
        }
        function M(Le) {
          let { comment: v, precedingNode: K, enclosingNode: ye, followingNode: ze, text: tt } = Le;
          if ((ye == null ? void 0 : ye.type) !== "IfStatement" || !ze)
            return !1;
          if (e(tt, v, i) === ")")
            return o(K, v), !0;
          if (K === ye.consequent && ze === ye.alternate) {
            if (K.type === "BlockStatement")
              o(K, v);
            else {
              let ht = v.type === "SingleLine" || v.loc.start.line === v.loc.end.line, Ke = v.loc.start.line === K.loc.start.line;
              ht && Ke ? c(K, v, f) : c(ye, v);
            }
            return !0;
          }
          return ze.type === "BlockStatement" ? (I(ze, v), !0) : ze.type === "IfStatement" ? (q(ze.consequent, v), !0) : ye.consequent === ze ? (n(ze, v), !0) : !1;
        }
        function te(Le) {
          let { comment: v, precedingNode: K, enclosingNode: ye, followingNode: ze, text: tt } = Le;
          return (ye == null ? void 0 : ye.type) !== "WhileStatement" || !ze ? !1 : e(tt, v, i) === ")" ? (o(K, v), !0) : ze.type === "BlockStatement" ? (I(ze, v), !0) : ye.body === ze ? (n(ze, v), !0) : !1;
        }
        function j(Le) {
          let { comment: v, precedingNode: K, enclosingNode: ye, followingNode: ze } = Le;
          return (ye == null ? void 0 : ye.type) !== "TryStatement" && (ye == null ? void 0 : ye.type) !== "CatchClause" || !ze ? !1 : ye.type === "CatchClause" && K ? (o(K, v), !0) : ze.type === "BlockStatement" ? (I(ze, v), !0) : ze.type === "TryStatement" ? (q(ze.finalizer, v), !0) : ze.type === "CatchClause" ? (q(ze.body, v), !0) : !1;
        }
        function De(Le) {
          let { comment: v, enclosingNode: K, followingNode: ye } = Le;
          return P(K) && (ye == null ? void 0 : ye.type) === "Identifier" ? (n(K, v), !0) : !1;
        }
        function U(Le) {
          let { comment: v, precedingNode: K, enclosingNode: ye, followingNode: ze, text: tt } = Le, ht = K && !r(tt, i(K), F(v));
          return (!K || !ht) && ((ye == null ? void 0 : ye.type) === "ConditionalExpression" || (ye == null ? void 0 : ye.type) === "TSConditionalType") && ze ? (n(ze, v), !0) : !1;
        }
        function R(Le) {
          let { comment: v, precedingNode: K, enclosingNode: ye } = Le;
          return _(ye) && ye.shorthand && ye.key === K && ye.value.type === "AssignmentPattern" ? (o(ye.value.left, v), !0) : !1;
        }
        var pe = /* @__PURE__ */ new Set(["ClassDeclaration", "ClassExpression", "DeclareClass", "DeclareInterface", "InterfaceDeclaration", "TSInterfaceDeclaration"]);
        function be(Le) {
          let { comment: v, precedingNode: K, enclosingNode: ye, followingNode: ze } = Le;
          if (pe.has(ye == null ? void 0 : ye.type)) {
            if (m(ye.decorators) && !(ze && ze.type === "Decorator"))
              return o(t(ye.decorators), v), !0;
            if (ye.body && ze === ye.body)
              return I(ye.body, v), !0;
            if (ze) {
              if (ye.superClass && ze === ye.superClass && K && (K === ye.id || K === ye.typeParameters))
                return o(K, v), !0;
              for (let tt of ["implements", "extends", "mixins"])
                if (ye[tt] && ze === ye[tt][0])
                  return K && (K === ye.id || K === ye.typeParameters || K === ye.superClass) ? o(K, v) : c(ye, v, tt), !0;
            }
          }
          return !1;
        }
        var fe = /* @__PURE__ */ new Set(["ClassMethod", "ClassProperty", "PropertyDefinition", "TSAbstractPropertyDefinition", "TSAbstractMethodDefinition", "TSDeclareMethod", "MethodDefinition", "ClassAccessorProperty", "AccessorProperty", "TSAbstractAccessorProperty"]);
        function Ie(Le) {
          let { comment: v, precedingNode: K, enclosingNode: ye, text: ze } = Le;
          return ye && K && e(ze, v, i) === "(" && (ye.type === "Property" || ye.type === "TSDeclareMethod" || ye.type === "TSAbstractMethodDefinition") && K.type === "Identifier" && ye.key === K && e(ze, K, i) !== ":" || (K == null ? void 0 : K.type) === "Decorator" && fe.has(ye == null ? void 0 : ye.type) ? (o(K, v), !0) : !1;
        }
        var X = /* @__PURE__ */ new Set(["FunctionDeclaration", "FunctionExpression", "ClassMethod", "MethodDefinition", "ObjectMethod"]);
        function se(Le) {
          let { comment: v, precedingNode: K, enclosingNode: ye, text: ze } = Le;
          return e(ze, v, i) !== "(" ? !1 : K && X.has(ye == null ? void 0 : ye.type) ? (o(K, v), !0) : !1;
        }
        function we(Le) {
          let { comment: v, enclosingNode: K, text: ye } = Le;
          if ((K == null ? void 0 : K.type) !== "ArrowFunctionExpression")
            return !1;
          let ze = y(ye, v, i);
          return ze !== !1 && ye.slice(ze, ze + 2) === "=>" ? (c(K, v), !0) : !1;
        }
        function _e(Le) {
          let { comment: v, enclosingNode: K, text: ye } = Le;
          return e(ye, v, i) !== ")" ? !1 : K && (Be(K) && g(K).length === 0 || A(K) && N(K).length === 0) ? (c(K, v), !0) : ((K == null ? void 0 : K.type) === "MethodDefinition" || (K == null ? void 0 : K.type) === "TSAbstractMethodDefinition") && g(K.value).length === 0 ? (c(K.value, v), !0) : !1;
        }
        function it(Le) {
          let { comment: v, precedingNode: K, enclosingNode: ye, followingNode: ze, text: tt } = Le;
          if ((K == null ? void 0 : K.type) === "FunctionTypeParam" && (ye == null ? void 0 : ye.type) === "FunctionTypeAnnotation" && (ze == null ? void 0 : ze.type) !== "FunctionTypeParam" || ((K == null ? void 0 : K.type) === "Identifier" || (K == null ? void 0 : K.type) === "AssignmentPattern") && ye && Be(ye) && e(tt, v, i) === ")")
            return o(K, v), !0;
          if ((ye == null ? void 0 : ye.type) === "FunctionDeclaration" && (ze == null ? void 0 : ze.type) === "BlockStatement") {
            let ht = (() => {
              let Ke = g(ye);
              if (Ke.length > 0)
                return s(tt, i(t(Ke)));
              let pr = s(tt, i(ye.id));
              return pr !== !1 && s(tt, pr + 1);
            })();
            if (F(v) > ht)
              return I(ze, v), !0;
          }
          return !1;
        }
        function ae(Le) {
          let { comment: v, enclosingNode: K } = Le;
          return (K == null ? void 0 : K.type) === "LabeledStatement" ? (n(K, v), !0) : !1;
        }
        function Q(Le) {
          let { comment: v, enclosingNode: K } = Le;
          return ((K == null ? void 0 : K.type) === "ContinueStatement" || (K == null ? void 0 : K.type) === "BreakStatement") && !K.label ? (o(K, v), !0) : !1;
        }
        function me(Le) {
          let { comment: v, precedingNode: K, enclosingNode: ye } = Le;
          return x(ye) && K && ye.callee === K && ye.arguments.length > 0 ? (n(ye.arguments[0], v), !0) : !1;
        }
        function Ce(Le) {
          let { comment: v, precedingNode: K, enclosingNode: ye, followingNode: ze } = Le;
          return (ye == null ? void 0 : ye.type) === "UnionTypeAnnotation" || (ye == null ? void 0 : ye.type) === "TSUnionType" ? (p(v) && (ze.prettierIgnore = !0, v.unignore = !0), K ? (o(K, v), !0) : !1) : (((ze == null ? void 0 : ze.type) === "UnionTypeAnnotation" || (ze == null ? void 0 : ze.type) === "TSUnionType") && p(v) && (ze.types[0].prettierIgnore = !0, v.unignore = !0), !1);
        }
        function Re(Le) {
          let { comment: v, enclosingNode: K } = Le;
          return _(K) ? (n(K, v), !0) : !1;
        }
        function Xe(Le) {
          let { comment: v, enclosingNode: K, followingNode: ye, ast: ze, isLastComment: tt } = Le;
          return ze && ze.body && ze.body.length === 0 ? (tt ? c(ze, v) : n(ze, v), !0) : (K == null ? void 0 : K.type) === "Program" && (K == null ? void 0 : K.body.length) === 0 && !m(K.directives) ? (tt ? c(K, v) : n(K, v), !0) : (ye == null ? void 0 : ye.type) === "Program" && (ye == null ? void 0 : ye.body.length) === 0 && (K == null ? void 0 : K.type) === "ModuleExpression" ? (c(ye, v), !0) : !1;
        }
        function Ye(Le) {
          let { comment: v, enclosingNode: K } = Le;
          return (K == null ? void 0 : K.type) === "ForInStatement" || (K == null ? void 0 : K.type) === "ForOfStatement" ? (n(K, v), !0) : !1;
        }
        function Ct(Le) {
          let { comment: v, precedingNode: K, enclosingNode: ye, text: ze } = Le;
          if ((ye == null ? void 0 : ye.type) === "ImportSpecifier" || (ye == null ? void 0 : ye.type) === "ExportSpecifier")
            return n(ye, v), !0;
          let tt = (K == null ? void 0 : K.type) === "ImportSpecifier" && (ye == null ? void 0 : ye.type) === "ImportDeclaration", ht = (K == null ? void 0 : K.type) === "ExportSpecifier" && (ye == null ? void 0 : ye.type) === "ExportNamedDeclaration";
          return (tt || ht) && a(ze, i(v)) ? (o(K, v), !0) : !1;
        }
        function Rt(Le) {
          let { comment: v, enclosingNode: K } = Le;
          return (K == null ? void 0 : K.type) === "AssignmentPattern" ? (n(K, v), !0) : !1;
        }
        var It = /* @__PURE__ */ new Set(["VariableDeclarator", "AssignmentExpression", "TypeAlias", "TSTypeAliasDeclaration"]), Et = /* @__PURE__ */ new Set(["ObjectExpression", "ArrayExpression", "TemplateLiteral", "TaggedTemplateExpression", "ObjectTypeAnnotation", "TSTypeLiteral"]);
        function bt(Le) {
          let { comment: v, enclosingNode: K, followingNode: ye } = Le;
          return It.has(K == null ? void 0 : K.type) && ye && (Et.has(ye.type) || h(v)) ? (n(ye, v), !0) : !1;
        }
        function xe(Le) {
          let { comment: v, enclosingNode: K, followingNode: ye, text: ze } = Le;
          return !ye && ((K == null ? void 0 : K.type) === "TSMethodSignature" || (K == null ? void 0 : K.type) === "TSDeclareFunction" || (K == null ? void 0 : K.type) === "TSAbstractMethodDefinition") && e(ze, v, i) === ";" ? (o(K, v), !0) : !1;
        }
        function H(Le) {
          let { comment: v, enclosingNode: K, followingNode: ye } = Le;
          if (p(v) && (K == null ? void 0 : K.type) === "TSMappedType" && (ye == null ? void 0 : ye.type) === "TSTypeParameter" && ye.constraint)
            return K.prettierIgnore = !0, v.unignore = !0, !0;
        }
        function ke(Le) {
          let { comment: v, precedingNode: K, enclosingNode: ye, followingNode: ze } = Le;
          return (ye == null ? void 0 : ye.type) !== "TSMappedType" ? !1 : (ze == null ? void 0 : ze.type) === "TSTypeParameter" && ze.name ? (n(ze.name, v), !0) : (K == null ? void 0 : K.type) === "TSTypeParameter" && K.constraint ? (o(K.constraint, v), !0) : !1;
        }
        function oe(Le) {
          let { comment: v, enclosingNode: K, followingNode: ye } = Le;
          return !K || K.type !== "SwitchCase" || K.test || !ye || ye !== K.consequent[0] ? !1 : (ye.type === "BlockStatement" && J(v) ? I(ye, v) : c(K, v), !0);
        }
        function Be(Le) {
          return Le.type === "ArrowFunctionExpression" || Le.type === "FunctionExpression" || Le.type === "FunctionDeclaration" || Le.type === "ObjectMethod" || Le.type === "ClassMethod" || Le.type === "TSDeclareFunction" || Le.type === "TSCallSignatureDeclaration" || Le.type === "TSConstructSignatureDeclaration" || Le.type === "TSMethodSignature" || Le.type === "TSConstructorType" || Le.type === "TSFunctionType" || Le.type === "TSDeclareMethod";
        }
        function pt(Le, v) {
          if ((v.parser === "typescript" || v.parser === "flow" || v.parser === "acorn" || v.parser === "espree" || v.parser === "meriyah" || v.parser === "__babel_estree") && Le.type === "MethodDefinition" && Le.value && Le.value.type === "FunctionExpression" && g(Le.value).length === 0 && !Le.value.returnType && !m(Le.value.typeParameters) && Le.value.body)
            return [...Le.decorators || [], Le.key, Le.value.body];
        }
        function ut(Le) {
          let v = Le.getValue(), K = Le.getParentNode(), ye = (ze) => w(d(ze, T.Leading)) || w(d(ze, T.Trailing));
          return (v && (D(v) || C(v) || x(K) && ye(v)) || K && (K.type === "JSXSpreadAttribute" || K.type === "JSXSpreadChild" || K.type === "UnionTypeAnnotation" || K.type === "TSUnionType" || (K.type === "ClassDeclaration" || K.type === "ClassExpression") && K.superClass === v)) && (!k(Le) || K.type === "UnionTypeAnnotation" || K.type === "TSUnionType");
        }
        l.exports = { handleOwnLineComment: b, handleEndOfLineComment: S, handleRemainingComment: B, getCommentChildNodes: pt, willPrintOwnComments: ut };
      } }), Ln = $({ "src/language-js/needs-parens.js"(u, l) {
        ue();
        var t = mr(), a = uu(), { getFunctionParameters: s, getLeftSidePathName: e, hasFlowShorthandAnnotationComment: r, hasNakedLeftSide: n, hasNode: o, isBitwiseOperator: c, startsWithNoLookaheadToken: y, shouldFlatten: m, getPrecedence: g, isCallExpression: p, isMemberExpression: D, isObjectProperty: C, isTSTypeExpression: w } = ur();
        function k(d, T) {
          let f = d.getParentNode();
          if (!f)
            return !1;
          let F = d.getName(), i = d.getNode();
          if (T.__isInHtmlInterpolation && !T.bracketSpacing && P(i) && _(d))
            return !0;
          if (A(i))
            return !1;
          if (T.parser !== "flow" && r(d.getValue()))
            return !0;
          if (i.type === "Identifier") {
            if (i.extra && i.extra.parenthesized && /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(i.name) || F === "left" && (i.name === "async" && !f.await || i.name === "let") && f.type === "ForOfStatement")
              return !0;
            if (i.name === "let") {
              var h;
              let b = (h = d.findAncestor((S) => S.type === "ForOfStatement")) === null || h === void 0 ? void 0 : h.left;
              if (b && y(b, (S) => S === i))
                return !0;
            }
            if (F === "object" && i.name === "let" && f.type === "MemberExpression" && f.computed && !f.optional) {
              let b = d.findAncestor((B) => B.type === "ExpressionStatement" || B.type === "ForStatement" || B.type === "ForInStatement"), S = b ? b.type === "ExpressionStatement" ? b.expression : b.type === "ForStatement" ? b.init : b.left : void 0;
              if (S && y(S, (B) => B === i))
                return !0;
            }
            return !1;
          }
          if (i.type === "ObjectExpression" || i.type === "FunctionExpression" || i.type === "ClassExpression" || i.type === "DoExpression") {
            var E;
            let b = (E = d.findAncestor((S) => S.type === "ExpressionStatement")) === null || E === void 0 ? void 0 : E.expression;
            if (b && y(b, (S) => S === i))
              return !0;
          }
          switch (f.type) {
            case "ParenthesizedExpression":
              return !1;
            case "ClassDeclaration":
            case "ClassExpression": {
              if (F === "superClass" && (i.type === "ArrowFunctionExpression" || i.type === "AssignmentExpression" || i.type === "AwaitExpression" || i.type === "BinaryExpression" || i.type === "ConditionalExpression" || i.type === "LogicalExpression" || i.type === "NewExpression" || i.type === "ObjectExpression" || i.type === "SequenceExpression" || i.type === "TaggedTemplateExpression" || i.type === "UnaryExpression" || i.type === "UpdateExpression" || i.type === "YieldExpression" || i.type === "TSNonNullExpression"))
                return !0;
              break;
            }
            case "ExportDefaultDeclaration":
              return J(d, T) || i.type === "SequenceExpression";
            case "Decorator": {
              if (F === "expression") {
                if (D(i) && i.computed)
                  return !0;
                let b = !1, S = !1, B = i;
                for (; B; )
                  switch (B.type) {
                    case "MemberExpression":
                      S = !0, B = B.object;
                      break;
                    case "CallExpression":
                      if (S || b)
                        return T.parser !== "typescript";
                      b = !0, B = B.callee;
                      break;
                    case "Identifier":
                      return !1;
                    case "TaggedTemplateExpression":
                      return T.parser !== "typescript";
                    default:
                      return !0;
                  }
                return !0;
              }
              break;
            }
            case "ArrowFunctionExpression": {
              if (F === "body" && i.type !== "SequenceExpression" && y(i, (b) => b.type === "ObjectExpression"))
                return !0;
              break;
            }
          }
          switch (i.type) {
            case "UpdateExpression":
              if (f.type === "UnaryExpression")
                return i.prefix && (i.operator === "++" && f.operator === "+" || i.operator === "--" && f.operator === "-");
            case "UnaryExpression":
              switch (f.type) {
                case "UnaryExpression":
                  return i.operator === f.operator && (i.operator === "+" || i.operator === "-");
                case "BindExpression":
                  return !0;
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return F === "object";
                case "TaggedTemplateExpression":
                  return !0;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return F === "callee";
                case "BinaryExpression":
                  return F === "left" && f.operator === "**";
                case "TSNonNullExpression":
                  return !0;
                default:
                  return !1;
              }
            case "BinaryExpression": {
              if (f.type === "UpdateExpression" || i.operator === "in" && N(d))
                return !0;
              if (i.operator === "|>" && i.extra && i.extra.parenthesized) {
                let b = d.getParentNode(1);
                if (b.type === "BinaryExpression" && b.operator === "|>")
                  return !0;
              }
            }
            case "TSTypeAssertion":
            case "TSAsExpression":
            case "TSSatisfiesExpression":
            case "LogicalExpression":
              switch (f.type) {
                case "TSSatisfiesExpression":
                case "TSAsExpression":
                  return !w(i);
                case "ConditionalExpression":
                  return w(i);
                case "CallExpression":
                case "NewExpression":
                case "OptionalCallExpression":
                  return F === "callee";
                case "ClassExpression":
                case "ClassDeclaration":
                  return F === "superClass";
                case "TSTypeAssertion":
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "JSXSpreadAttribute":
                case "SpreadElement":
                case "SpreadProperty":
                case "BindExpression":
                case "AwaitExpression":
                case "TSNonNullExpression":
                case "UpdateExpression":
                  return !0;
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return F === "object";
                case "AssignmentExpression":
                case "AssignmentPattern":
                  return F === "left" && (i.type === "TSTypeAssertion" || w(i));
                case "LogicalExpression":
                  if (i.type === "LogicalExpression")
                    return f.operator !== i.operator;
                case "BinaryExpression": {
                  let { operator: b, type: S } = i;
                  if (!b && S !== "TSTypeAssertion")
                    return !0;
                  let B = g(b), I = f.operator, q = g(I);
                  return q > B || F === "right" && q === B || q === B && !m(I, b) ? !0 : q < B && b === "%" ? I === "+" || I === "-" : !!c(I);
                }
                default:
                  return !1;
              }
            case "SequenceExpression":
              switch (f.type) {
                case "ReturnStatement":
                  return !1;
                case "ForStatement":
                  return !1;
                case "ExpressionStatement":
                  return F !== "expression";
                case "ArrowFunctionExpression":
                  return F !== "body";
                default:
                  return !0;
              }
            case "YieldExpression":
              if (f.type === "UnaryExpression" || f.type === "AwaitExpression" || w(f) || f.type === "TSNonNullExpression")
                return !0;
            case "AwaitExpression":
              switch (f.type) {
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "LogicalExpression":
                case "SpreadElement":
                case "SpreadProperty":
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression":
                case "BindExpression":
                  return !0;
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return F === "object";
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return F === "callee";
                case "ConditionalExpression":
                  return F === "test";
                case "BinaryExpression":
                  return !(!i.argument && f.operator === "|>");
                default:
                  return !1;
              }
            case "TSConditionalType":
            case "TSFunctionType":
            case "TSConstructorType":
              if (F === "extendsType" && f.type === "TSConditionalType") {
                if (i.type === "TSConditionalType")
                  return !0;
                let { typeAnnotation: b } = i.returnType || i.typeAnnotation;
                if (b.type === "TSTypePredicate" && b.typeAnnotation && (b = b.typeAnnotation.typeAnnotation), b.type === "TSInferType" && b.typeParameter.constraint)
                  return !0;
              }
              if (F === "checkType" && f.type === "TSConditionalType")
                return !0;
            case "TSUnionType":
            case "TSIntersectionType":
              if ((f.type === "TSUnionType" || f.type === "TSIntersectionType") && f.types.length > 1 && (!i.types || i.types.length > 1))
                return !0;
            case "TSInferType":
              if (i.type === "TSInferType" && f.type === "TSRestType")
                return !1;
            case "TSTypeOperator":
              return f.type === "TSArrayType" || f.type === "TSOptionalType" || f.type === "TSRestType" || F === "objectType" && f.type === "TSIndexedAccessType" || f.type === "TSTypeOperator" || f.type === "TSTypeAnnotation" && d.getParentNode(1).type.startsWith("TSJSDoc");
            case "TSTypeQuery":
              return F === "objectType" && f.type === "TSIndexedAccessType" || F === "elementType" && f.type === "TSArrayType";
            case "TypeofTypeAnnotation":
              return F === "objectType" && (f.type === "IndexedAccessType" || f.type === "OptionalIndexedAccessType") || F === "elementType" && f.type === "ArrayTypeAnnotation";
            case "ArrayTypeAnnotation":
              return f.type === "NullableTypeAnnotation";
            case "IntersectionTypeAnnotation":
            case "UnionTypeAnnotation":
              return f.type === "ArrayTypeAnnotation" || f.type === "NullableTypeAnnotation" || f.type === "IntersectionTypeAnnotation" || f.type === "UnionTypeAnnotation" || F === "objectType" && (f.type === "IndexedAccessType" || f.type === "OptionalIndexedAccessType");
            case "NullableTypeAnnotation":
              return f.type === "ArrayTypeAnnotation" || F === "objectType" && (f.type === "IndexedAccessType" || f.type === "OptionalIndexedAccessType");
            case "FunctionTypeAnnotation": {
              let b = f.type === "NullableTypeAnnotation" ? d.getParentNode(1) : f;
              return b.type === "UnionTypeAnnotation" || b.type === "IntersectionTypeAnnotation" || b.type === "ArrayTypeAnnotation" || F === "objectType" && (b.type === "IndexedAccessType" || b.type === "OptionalIndexedAccessType") || b.type === "NullableTypeAnnotation" || f.type === "FunctionTypeParam" && f.name === null && s(i).some((S) => S.typeAnnotation && S.typeAnnotation.type === "NullableTypeAnnotation");
            }
            case "OptionalIndexedAccessType":
              return F === "objectType" && f.type === "IndexedAccessType";
            case "StringLiteral":
            case "NumericLiteral":
            case "Literal":
              if (typeof i.value == "string" && f.type === "ExpressionStatement" && !f.directive) {
                let b = d.getParentNode(1);
                return b.type === "Program" || b.type === "BlockStatement";
              }
              return F === "object" && f.type === "MemberExpression" && typeof i.value == "number";
            case "AssignmentExpression": {
              let b = d.getParentNode(1);
              return F === "body" && f.type === "ArrowFunctionExpression" ? !0 : F === "key" && (f.type === "ClassProperty" || f.type === "PropertyDefinition") && f.computed || (F === "init" || F === "update") && f.type === "ForStatement" ? !1 : f.type === "ExpressionStatement" ? i.left.type === "ObjectPattern" : !(F === "key" && f.type === "TSPropertySignature" || f.type === "AssignmentExpression" || f.type === "SequenceExpression" && b && b.type === "ForStatement" && (b.init === f || b.update === f) || F === "value" && f.type === "Property" && b && b.type === "ObjectPattern" && b.properties.includes(f) || f.type === "NGChainedExpression");
            }
            case "ConditionalExpression":
              switch (f.type) {
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "SpreadElement":
                case "SpreadProperty":
                case "BinaryExpression":
                case "LogicalExpression":
                case "NGPipeExpression":
                case "ExportDefaultDeclaration":
                case "AwaitExpression":
                case "JSXSpreadAttribute":
                case "TSTypeAssertion":
                case "TypeCastExpression":
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression":
                  return !0;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return F === "callee";
                case "ConditionalExpression":
                  return F === "test";
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return F === "object";
                default:
                  return !1;
              }
            case "FunctionExpression":
              switch (f.type) {
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return F === "callee";
                case "TaggedTemplateExpression":
                  return !0;
                default:
                  return !1;
              }
            case "ArrowFunctionExpression":
              switch (f.type) {
                case "BinaryExpression":
                  return f.operator !== "|>" || i.extra && i.extra.parenthesized;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return F === "callee";
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return F === "object";
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression":
                case "BindExpression":
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "LogicalExpression":
                case "AwaitExpression":
                case "TSTypeAssertion":
                  return !0;
                case "ConditionalExpression":
                  return F === "test";
                default:
                  return !1;
              }
            case "ClassExpression":
              if (a(i.decorators))
                return !0;
              switch (f.type) {
                case "NewExpression":
                  return F === "callee";
                default:
                  return !1;
              }
            case "OptionalMemberExpression":
            case "OptionalCallExpression": {
              let b = d.getParentNode(1);
              if (F === "object" && f.type === "MemberExpression" || F === "callee" && (f.type === "CallExpression" || f.type === "NewExpression") || f.type === "TSNonNullExpression" && b.type === "MemberExpression" && b.object === f)
                return !0;
            }
            case "CallExpression":
            case "MemberExpression":
            case "TaggedTemplateExpression":
            case "TSNonNullExpression":
              if (F === "callee" && (f.type === "BindExpression" || f.type === "NewExpression")) {
                let b = i;
                for (; b; )
                  switch (b.type) {
                    case "CallExpression":
                    case "OptionalCallExpression":
                      return !0;
                    case "MemberExpression":
                    case "OptionalMemberExpression":
                    case "BindExpression":
                      b = b.object;
                      break;
                    case "TaggedTemplateExpression":
                      b = b.tag;
                      break;
                    case "TSNonNullExpression":
                      b = b.expression;
                      break;
                    default:
                      return !1;
                  }
              }
              return !1;
            case "BindExpression":
              return F === "callee" && (f.type === "BindExpression" || f.type === "NewExpression") || F === "object" && D(f);
            case "NGPipeExpression":
              return !(f.type === "NGRoot" || f.type === "NGMicrosyntaxExpression" || f.type === "ObjectProperty" && !(i.extra && i.extra.parenthesized) || f.type === "ArrayExpression" || p(f) && f.arguments[F] === i || F === "right" && f.type === "NGPipeExpression" || F === "property" && f.type === "MemberExpression" || f.type === "AssignmentExpression");
            case "JSXFragment":
            case "JSXElement":
              return F === "callee" || F === "left" && f.type === "BinaryExpression" && f.operator === "<" || f.type !== "ArrayExpression" && f.type !== "ArrowFunctionExpression" && f.type !== "AssignmentExpression" && f.type !== "AssignmentPattern" && f.type !== "BinaryExpression" && f.type !== "NewExpression" && f.type !== "ConditionalExpression" && f.type !== "ExpressionStatement" && f.type !== "JsExpressionRoot" && f.type !== "JSXAttribute" && f.type !== "JSXElement" && f.type !== "JSXExpressionContainer" && f.type !== "JSXFragment" && f.type !== "LogicalExpression" && !p(f) && !C(f) && f.type !== "ReturnStatement" && f.type !== "ThrowStatement" && f.type !== "TypeCastExpression" && f.type !== "VariableDeclarator" && f.type !== "YieldExpression";
            case "TypeAnnotation":
              return F === "returnType" && f.type === "ArrowFunctionExpression" && x(i);
          }
          return !1;
        }
        function A(d) {
          return d.type === "BlockStatement" || d.type === "BreakStatement" || d.type === "ClassBody" || d.type === "ClassDeclaration" || d.type === "ClassMethod" || d.type === "ClassProperty" || d.type === "PropertyDefinition" || d.type === "ClassPrivateProperty" || d.type === "ContinueStatement" || d.type === "DebuggerStatement" || d.type === "DeclareClass" || d.type === "DeclareExportAllDeclaration" || d.type === "DeclareExportDeclaration" || d.type === "DeclareFunction" || d.type === "DeclareInterface" || d.type === "DeclareModule" || d.type === "DeclareModuleExports" || d.type === "DeclareVariable" || d.type === "DoWhileStatement" || d.type === "EnumDeclaration" || d.type === "ExportAllDeclaration" || d.type === "ExportDefaultDeclaration" || d.type === "ExportNamedDeclaration" || d.type === "ExpressionStatement" || d.type === "ForInStatement" || d.type === "ForOfStatement" || d.type === "ForStatement" || d.type === "FunctionDeclaration" || d.type === "IfStatement" || d.type === "ImportDeclaration" || d.type === "InterfaceDeclaration" || d.type === "LabeledStatement" || d.type === "MethodDefinition" || d.type === "ReturnStatement" || d.type === "SwitchStatement" || d.type === "ThrowStatement" || d.type === "TryStatement" || d.type === "TSDeclareFunction" || d.type === "TSEnumDeclaration" || d.type === "TSImportEqualsDeclaration" || d.type === "TSInterfaceDeclaration" || d.type === "TSModuleDeclaration" || d.type === "TSNamespaceExportDeclaration" || d.type === "TypeAlias" || d.type === "VariableDeclaration" || d.type === "WhileStatement" || d.type === "WithStatement";
        }
        function N(d) {
          let T = 0, f = d.getValue();
          for (; f; ) {
            let F = d.getParentNode(T++);
            if (F && F.type === "ForStatement" && F.init === f)
              return !0;
            f = F;
          }
          return !1;
        }
        function x(d) {
          return o(d, (T) => T.type === "ObjectTypeAnnotation" && o(T, (f) => f.type === "FunctionTypeAnnotation" || void 0) || void 0);
        }
        function P(d) {
          switch (d.type) {
            case "ObjectExpression":
              return !0;
            default:
              return !1;
          }
        }
        function _(d) {
          let T = d.getValue(), f = d.getParentNode(), F = d.getName();
          switch (f.type) {
            case "NGPipeExpression":
              if (typeof F == "number" && f.arguments[F] === T && f.arguments.length - 1 === F)
                return d.callParent(_);
              break;
            case "ObjectProperty":
              if (F === "value") {
                let i = d.getParentNode(1);
                return t(i.properties) === f;
              }
              break;
            case "BinaryExpression":
            case "LogicalExpression":
              if (F === "right")
                return d.callParent(_);
              break;
            case "ConditionalExpression":
              if (F === "alternate")
                return d.callParent(_);
              break;
            case "UnaryExpression":
              if (f.prefix)
                return d.callParent(_);
              break;
          }
          return !1;
        }
        function J(d, T) {
          let f = d.getValue(), F = d.getParentNode();
          return f.type === "FunctionExpression" || f.type === "ClassExpression" ? F.type === "ExportDefaultDeclaration" || !k(d, T) : !n(f) || F.type !== "ExportDefaultDeclaration" && k(d, T) ? !1 : d.call((i) => J(i, T), ...e(d, f));
        }
        l.exports = k;
      } }), Is = $({ "src/language-js/print-preprocess.js"(u, l) {
        ue();
        function t(a, s) {
          switch (s.parser) {
            case "json":
            case "json5":
            case "json-stringify":
            case "__js_expression":
            case "__vue_expression":
            case "__vue_ts_expression":
              return Object.assign(Object.assign({}, a), {}, { type: s.parser.startsWith("__") ? "JsExpressionRoot" : "JsonRoot", node: a, comments: [], rootMarker: s.rootMarker });
            default:
              return a;
          }
        }
        l.exports = t;
      } }), Ea = $({ "src/language-js/print/html-binding.js"(u, l) {
        ue();
        var { builders: { join: t, line: a, group: s, softline: e, indent: r } } = wt();
        function n(c, y, m) {
          let g = c.getValue();
          if (y.__onHtmlBindingRoot && c.getName() === null && y.__onHtmlBindingRoot(g, y), g.type === "File") {
            if (y.__isVueForBindingLeft)
              return c.call((p) => {
                let D = t([",", a], p.map(m, "params")), { params: C } = p.getValue();
                return C.length === 1 ? D : ["(", r([e, s(D)]), e, ")"];
              }, "program", "body", 0);
            if (y.__isVueBindings)
              return c.call((p) => t([",", a], p.map(m, "params")), "program", "body", 0);
          }
        }
        function o(c) {
          switch (c.type) {
            case "MemberExpression":
              switch (c.property.type) {
                case "Identifier":
                case "NumericLiteral":
                case "StringLiteral":
                  return o(c.object);
              }
              return !1;
            case "Identifier":
              return !0;
            default:
              return !1;
          }
        }
        l.exports = { isVueEventBindingExpression: o, printHtmlBinding: n };
      } }), as = $({ "src/language-js/print/binaryish.js"(u, l) {
        ue();
        var { printComments: t } = Qt(), { getLast: a } = Gt(), { builders: { join: s, line: e, softline: r, group: n, indent: o, align: c, indentIfBreak: y }, utils: { cleanDoc: m, getDocParts: g, isConcat: p } } = wt(), { hasLeadingOwnLineComment: D, isBinaryish: C, isJsxNode: w, shouldFlatten: k, hasComment: A, CommentCheckFlags: N, isCallExpression: x, isMemberExpression: P, isObjectProperty: _, isEnabledHackPipeline: J } = ur(), d = 0;
        function T(i, h, E) {
          let b = i.getValue(), S = i.getParentNode(), B = i.getParentNode(1), I = b !== S.body && (S.type === "IfStatement" || S.type === "WhileStatement" || S.type === "SwitchStatement" || S.type === "DoWhileStatement"), q = J(h) && b.operator === "|>", G = f(i, E, h, !1, I);
          if (I)
            return G;
          if (q)
            return n(G);
          if (x(S) && S.callee === b || S.type === "UnaryExpression" || P(S) && !S.computed)
            return n([o([r, ...G]), r]);
          let M = S.type === "ReturnStatement" || S.type === "ThrowStatement" || S.type === "JSXExpressionContainer" && B.type === "JSXAttribute" || b.operator !== "|" && S.type === "JsExpressionRoot" || b.type !== "NGPipeExpression" && (S.type === "NGRoot" && h.parser === "__ng_binding" || S.type === "NGMicrosyntaxExpression" && B.type === "NGMicrosyntax" && B.body.length === 1) || b === S.body && S.type === "ArrowFunctionExpression" || b !== S.body && S.type === "ForStatement" || S.type === "ConditionalExpression" && B.type !== "ReturnStatement" && B.type !== "ThrowStatement" && !x(B) || S.type === "TemplateLiteral", te = S.type === "AssignmentExpression" || S.type === "VariableDeclarator" || S.type === "ClassProperty" || S.type === "PropertyDefinition" || S.type === "TSAbstractPropertyDefinition" || S.type === "ClassPrivateProperty" || _(S), j = C(b.left) && k(b.operator, b.left.operator);
          if (M || F(b) && !j || !F(b) && te)
            return n(G);
          if (G.length === 0)
            return "";
          let De = w(b.right), U = G.findIndex((X) => typeof X != "string" && !Array.isArray(X) && X.type === "group"), R = G.slice(0, U === -1 ? 1 : U + 1), pe = G.slice(R.length, De ? -1 : void 0), be = Symbol("logicalChain-" + ++d), fe = n([...R, o(pe)], { id: be });
          if (!De)
            return fe;
          let Ie = a(G);
          return n([fe, y(Ie, { groupId: be })]);
        }
        function f(i, h, E, b, S) {
          let B = i.getValue();
          if (!C(B))
            return [n(h())];
          let I = [];
          k(B.operator, B.left.operator) ? I = i.call((pe) => f(pe, h, E, !0, S), "left") : I.push(n(h("left")));
          let q = F(B), G = (B.operator === "|>" || B.type === "NGPipeExpression" || B.operator === "|" && E.parser === "__vue_expression") && !D(E.originalText, B.right), M = B.type === "NGPipeExpression" ? "|" : B.operator, te = B.type === "NGPipeExpression" && B.arguments.length > 0 ? n(o([e, ": ", s([e, ": "], i.map(h, "arguments").map((pe) => c(2, n(pe))))])) : "", j;
          if (q)
            j = [M, " ", h("right"), te];
          else {
            let pe = J(E) && M === "|>" ? i.call((be) => f(be, h, E, !0, S), "right") : h("right");
            j = [G ? e : "", M, G ? " " : e, pe, te];
          }
          let De = i.getParentNode(), U = A(B.left, N.Trailing | N.Line), R = U || !(S && B.type === "LogicalExpression") && De.type !== B.type && B.left.type !== B.type && B.right.type !== B.type;
          if (I.push(G ? "" : " ", R ? n(j, { shouldBreak: U }) : j), b && A(B)) {
            let pe = m(t(i, I, E));
            return p(pe) || pe.type === "fill" ? g(pe) : [pe];
          }
          return I;
        }
        function F(i) {
          return i.type !== "LogicalExpression" ? !1 : !!(i.right.type === "ObjectExpression" && i.right.properties.length > 0 || i.right.type === "ArrayExpression" && i.right.elements.length > 0 || w(i.right));
        }
        l.exports = { printBinaryishExpression: T, shouldInlineLogicalExpression: F };
      } }), Ca = $({ "src/language-js/print/angular.js"(u, l) {
        ue();
        var { builders: { join: t, line: a, group: s } } = wt(), { hasNode: e, hasComment: r, getComments: n } = ur(), { printBinaryishExpression: o } = as();
        function c(g, p, D) {
          let C = g.getValue();
          if (C.type.startsWith("NG"))
            switch (C.type) {
              case "NGRoot":
                return [D("node"), r(C.node) ? " //" + n(C.node)[0].value.trimEnd() : ""];
              case "NGPipeExpression":
                return o(g, p, D);
              case "NGChainedExpression":
                return s(t([";", a], g.map((w) => m(w) ? D() : ["(", D(), ")"], "expressions")));
              case "NGEmptyExpression":
                return "";
              case "NGQuotedExpression":
                return [C.prefix, ": ", C.value.trim()];
              case "NGMicrosyntax":
                return g.map((w, k) => [k === 0 ? "" : y(w.getValue(), k, C) ? " " : [";", a], D()], "body");
              case "NGMicrosyntaxKey":
                return /^[$_a-z][\w$]*(?:-[$_a-z][\w$])*$/i.test(C.name) ? C.name : JSON.stringify(C.name);
              case "NGMicrosyntaxExpression":
                return [D("expression"), C.alias === null ? "" : [" as ", D("alias")]];
              case "NGMicrosyntaxKeyedExpression": {
                let w = g.getName(), k = g.getParentNode(), A = y(C, w, k) || (w === 1 && (C.key.name === "then" || C.key.name === "else") || w === 2 && C.key.name === "else" && k.body[w - 1].type === "NGMicrosyntaxKeyedExpression" && k.body[w - 1].key.name === "then") && k.body[0].type === "NGMicrosyntaxExpression";
                return [D("key"), A ? " " : ": ", D("expression")];
              }
              case "NGMicrosyntaxLet":
                return ["let ", D("key"), C.value === null ? "" : [" = ", D("value")]];
              case "NGMicrosyntaxAs":
                return [D("key"), " as ", D("alias")];
              default:
                throw new Error(`Unknown Angular node type: ${JSON.stringify(C.type)}.`);
            }
        }
        function y(g, p, D) {
          return g.type === "NGMicrosyntaxKeyedExpression" && g.key.name === "of" && p === 1 && D.body[0].type === "NGMicrosyntaxLet" && D.body[0].value === null;
        }
        function m(g) {
          return e(g.getValue(), (p) => {
            switch (p.type) {
              case void 0:
                return !1;
              case "CallExpression":
              case "OptionalCallExpression":
              case "AssignmentExpression":
                return !0;
            }
          });
        }
        l.exports = { printAngular: c };
      } }), Fa = $({ "src/language-js/print/jsx.js"(u, l) {
        ue();
        var { printComments: t, printDanglingComments: a, printCommentsSeparately: s } = Qt(), { builders: { line: e, hardline: r, softline: n, group: o, indent: c, conditionalGroup: y, fill: m, ifBreak: g, lineSuffixBoundary: p, join: D }, utils: { willBreak: C } } = wt(), { getLast: w, getPreferredQuote: k } = Gt(), { isJsxNode: A, rawText: N, isCallExpression: x, isStringLiteral: P, isBinaryish: _, hasComment: J, CommentCheckFlags: d, hasNodeIgnoreComment: T } = ur(), f = Ln(), { willPrintOwnComments: F } = Ps(), i = (Q) => Q === "" || Q === e || Q === r || Q === n;
        function h(Q, me, Ce) {
          let Re = Q.getValue();
          if (Re.type === "JSXElement" && we(Re))
            return [Ce("openingElement"), Ce("closingElement")];
          let Xe = Re.type === "JSXElement" ? Ce("openingElement") : Ce("openingFragment"), Ye = Re.type === "JSXElement" ? Ce("closingElement") : Ce("closingFragment");
          if (Re.children.length === 1 && Re.children[0].type === "JSXExpressionContainer" && (Re.children[0].expression.type === "TemplateLiteral" || Re.children[0].expression.type === "TaggedTemplateExpression"))
            return [Xe, ...Q.map(Ce, "children"), Ye];
          Re.children = Re.children.map((v) => it(v) ? { type: "JSXText", value: " ", raw: " " } : v);
          let Ct = Re.children.some(A), Rt = Re.children.filter((v) => v.type === "JSXExpressionContainer").length > 1, It = Re.type === "JSXElement" && Re.openingElement.attributes.length > 1, Et = C(Xe) || Ct || It || Rt, bt = Q.getParentNode().rootMarker === "mdx", xe = me.singleQuote ? "{' '}" : '{" "}', H = bt ? " " : g([xe, n], " "), ke = Re.openingElement && Re.openingElement.name && Re.openingElement.name.name === "fbt", oe = E(Q, me, Ce, H, ke), Be = Re.children.some((v) => _e(v));
          for (let v = oe.length - 2; v >= 0; v--) {
            let K = oe[v] === "" && oe[v + 1] === "", ye = oe[v] === r && oe[v + 1] === "" && oe[v + 2] === r, ze = (oe[v] === n || oe[v] === r) && oe[v + 1] === "" && oe[v + 2] === H, tt = oe[v] === H && oe[v + 1] === "" && (oe[v + 2] === n || oe[v + 2] === r), ht = oe[v] === H && oe[v + 1] === "" && oe[v + 2] === H, Ke = oe[v] === n && oe[v + 1] === "" && oe[v + 2] === r || oe[v] === r && oe[v + 1] === "" && oe[v + 2] === n;
            ye && Be || K || ze || ht || Ke ? oe.splice(v, 2) : tt && oe.splice(v + 1, 2);
          }
          for (; oe.length > 0 && i(w(oe)); )
            oe.pop();
          for (; oe.length > 1 && i(oe[0]) && i(oe[1]); )
            oe.shift(), oe.shift();
          let pt = [];
          for (let [v, K] of oe.entries()) {
            if (K === H) {
              if (v === 1 && oe[v - 1] === "") {
                if (oe.length === 2) {
                  pt.push(xe);
                  continue;
                }
                pt.push([xe, r]);
                continue;
              } else if (v === oe.length - 1) {
                pt.push(xe);
                continue;
              } else if (oe[v - 1] === "" && oe[v - 2] === r) {
                pt.push(xe);
                continue;
              }
            }
            pt.push(K), C(K) && (Et = !0);
          }
          let ut = Be ? m(pt) : o(pt, { shouldBreak: !0 });
          if (bt)
            return ut;
          let Le = o([Xe, c([r, ut]), r, Ye]);
          return Et ? Le : y([o([Xe, ...oe, Ye]), Le]);
        }
        function E(Q, me, Ce, Re, Xe) {
          let Ye = [];
          return Q.each((Ct, Rt, It) => {
            let Et = Ct.getValue();
            if (Et.type === "JSXText") {
              let bt = N(Et);
              if (_e(Et)) {
                let xe = bt.split(Ie);
                if (xe[0] === "") {
                  if (Ye.push(""), xe.shift(), /\n/.test(xe[0])) {
                    let ke = It[Rt + 1];
                    Ye.push(S(Xe, xe[1], Et, ke));
                  } else
                    Ye.push(Re);
                  xe.shift();
                }
                let H;
                if (w(xe) === "" && (xe.pop(), H = xe.pop()), xe.length === 0)
                  return;
                for (let [ke, oe] of xe.entries())
                  ke % 2 === 1 ? Ye.push(e) : Ye.push(oe);
                if (H !== void 0)
                  if (/\n/.test(H)) {
                    let ke = It[Rt + 1];
                    Ye.push(S(Xe, w(Ye), Et, ke));
                  } else
                    Ye.push(Re);
                else {
                  let ke = It[Rt + 1];
                  Ye.push(b(Xe, w(Ye), Et, ke));
                }
              } else
                /\n/.test(bt) ? bt.match(/\n/g).length > 1 && Ye.push("", r) : Ye.push("", Re);
            } else {
              let bt = Ce();
              Ye.push(bt);
              let xe = It[Rt + 1];
              if (xe && _e(xe)) {
                let H = se(N(xe)).split(Ie)[0];
                Ye.push(b(Xe, H, Et, xe));
              } else
                Ye.push(r);
            }
          }, "children"), Ye;
        }
        function b(Q, me, Ce, Re) {
          return Q ? "" : Ce.type === "JSXElement" && !Ce.closingElement || Re && Re.type === "JSXElement" && !Re.closingElement ? me.length === 1 ? n : r : n;
        }
        function S(Q, me, Ce, Re) {
          return Q ? r : me.length === 1 ? Ce.type === "JSXElement" && !Ce.closingElement || Re && Re.type === "JSXElement" && !Re.closingElement ? r : n : r;
        }
        function B(Q, me, Ce) {
          let Re = Q.getParentNode();
          if (!Re || { ArrayExpression: !0, JSXAttribute: !0, JSXElement: !0, JSXExpressionContainer: !0, JSXFragment: !0, ExpressionStatement: !0, CallExpression: !0, OptionalCallExpression: !0, ConditionalExpression: !0, JsExpressionRoot: !0 }[Re.type])
            return me;
          let Xe = Q.match(void 0, (Ct) => Ct.type === "ArrowFunctionExpression", x, (Ct) => Ct.type === "JSXExpressionContainer"), Ye = f(Q, Ce);
          return o([Ye ? "" : g("("), c([n, me]), n, Ye ? "" : g(")")], { shouldBreak: Xe });
        }
        function I(Q, me, Ce) {
          let Re = Q.getValue(), Xe = [];
          if (Xe.push(Ce("name")), Re.value) {
            let Ye;
            if (P(Re.value)) {
              let Ct = N(Re.value).slice(1, -1).replace(/&apos;/g, "'").replace(/&quot;/g, '"'), { escaped: Rt, quote: It, regex: Et } = k(Ct, me.jsxSingleQuote ? "'" : '"');
              Ct = Ct.replace(Et, Rt);
              let { leading: bt, trailing: xe } = Q.call(() => s(Q, me), "value");
              Ye = [bt, It, Ct, It, xe];
            } else
              Ye = Ce("value");
            Xe.push("=", Ye);
          }
          return Xe;
        }
        function q(Q, me, Ce) {
          let Re = Q.getValue(), Xe = (Ye, Ct) => Ye.type === "JSXEmptyExpression" || !J(Ye) && (Ye.type === "ArrayExpression" || Ye.type === "ObjectExpression" || Ye.type === "ArrowFunctionExpression" || Ye.type === "AwaitExpression" && (Xe(Ye.argument, Ye) || Ye.argument.type === "JSXElement") || x(Ye) || Ye.type === "FunctionExpression" || Ye.type === "TemplateLiteral" || Ye.type === "TaggedTemplateExpression" || Ye.type === "DoExpression" || A(Ct) && (Ye.type === "ConditionalExpression" || _(Ye)));
          return Xe(Re.expression, Q.getParentNode(0)) ? o(["{", Ce("expression"), p, "}"]) : o(["{", c([n, Ce("expression")]), n, p, "}"]);
        }
        function G(Q, me, Ce) {
          let Re = Q.getValue(), Xe = Re.name && J(Re.name) || Re.typeParameters && J(Re.typeParameters);
          if (Re.selfClosing && Re.attributes.length === 0 && !Xe)
            return ["<", Ce("name"), Ce("typeParameters"), " />"];
          if (Re.attributes && Re.attributes.length === 1 && Re.attributes[0].value && P(Re.attributes[0].value) && !Re.attributes[0].value.value.includes(`
`) && !Xe && !J(Re.attributes[0]))
            return o(["<", Ce("name"), Ce("typeParameters"), " ", ...Q.map(Ce, "attributes"), Re.selfClosing ? " />" : ">"]);
          let Ye = Re.attributes && Re.attributes.some((Rt) => Rt.value && P(Rt.value) && Rt.value.value.includes(`
`)), Ct = me.singleAttributePerLine && Re.attributes.length > 1 ? r : e;
          return o(["<", Ce("name"), Ce("typeParameters"), c(Q.map(() => [Ct, Ce()], "attributes")), ...M(Re, me, Xe)], { shouldBreak: Ye });
        }
        function M(Q, me, Ce) {
          return Q.selfClosing ? [e, "/>"] : te(Q, me, Ce) ? [">"] : [n, ">"];
        }
        function te(Q, me, Ce) {
          let Re = Q.attributes.length > 0 && J(w(Q.attributes), d.Trailing);
          return Q.attributes.length === 0 && !Ce || (me.bracketSameLine || me.jsxBracketSameLine) && (!Ce || Q.attributes.length > 0) && !Re;
        }
        function j(Q, me, Ce) {
          let Re = Q.getValue(), Xe = [];
          Xe.push("</");
          let Ye = Ce("name");
          return J(Re.name, d.Leading | d.Line) ? Xe.push(c([r, Ye]), r) : J(Re.name, d.Leading | d.Block) ? Xe.push(" ", Ye) : Xe.push(Ye), Xe.push(">"), Xe;
        }
        function De(Q, me) {
          let Ce = Q.getValue(), Re = J(Ce), Xe = J(Ce, d.Line), Ye = Ce.type === "JSXOpeningFragment";
          return [Ye ? "<" : "</", c([Xe ? r : Re && !Ye ? " " : "", a(Q, me, !0)]), Xe ? r : "", ">"];
        }
        function U(Q, me, Ce) {
          let Re = t(Q, h(Q, me, Ce), me);
          return B(Q, Re, me);
        }
        function R(Q, me) {
          let Ce = Q.getValue(), Re = J(Ce, d.Line);
          return [a(Q, me, !Re), Re ? r : ""];
        }
        function pe(Q, me, Ce) {
          let Re = Q.getValue();
          return ["{", Q.call((Xe) => {
            let Ye = ["...", Ce()], Ct = Xe.getValue();
            return !J(Ct) || !F(Xe) ? Ye : [c([n, t(Xe, Ye, me)]), n];
          }, Re.type === "JSXSpreadAttribute" ? "argument" : "expression"), "}"];
        }
        function be(Q, me, Ce) {
          let Re = Q.getValue();
          if (Re.type.startsWith("JSX"))
            switch (Re.type) {
              case "JSXAttribute":
                return I(Q, me, Ce);
              case "JSXIdentifier":
                return String(Re.name);
              case "JSXNamespacedName":
                return D(":", [Ce("namespace"), Ce("name")]);
              case "JSXMemberExpression":
                return D(".", [Ce("object"), Ce("property")]);
              case "JSXSpreadAttribute":
                return pe(Q, me, Ce);
              case "JSXSpreadChild":
                return pe(Q, me, Ce);
              case "JSXExpressionContainer":
                return q(Q, me, Ce);
              case "JSXFragment":
              case "JSXElement":
                return U(Q, me, Ce);
              case "JSXOpeningElement":
                return G(Q, me, Ce);
              case "JSXClosingElement":
                return j(Q, me, Ce);
              case "JSXOpeningFragment":
              case "JSXClosingFragment":
                return De(Q, me);
              case "JSXEmptyExpression":
                return R(Q, me);
              case "JSXText":
                throw new Error("JSXText should be handled by JSXElement");
              default:
                throw new Error(`Unknown JSX node type: ${JSON.stringify(Re.type)}.`);
            }
        }
        var fe = ` 
\r	`, Ie = new RegExp("([" + fe + "]+)"), X = new RegExp("[^" + fe + "]"), se = (Q) => Q.replace(new RegExp("(?:^" + Ie.source + "|" + Ie.source + "$)"), "");
        function we(Q) {
          if (Q.children.length === 0)
            return !0;
          if (Q.children.length > 1)
            return !1;
          let me = Q.children[0];
          return me.type === "JSXText" && !_e(me);
        }
        function _e(Q) {
          return Q.type === "JSXText" && (X.test(N(Q)) || !/\n/.test(N(Q)));
        }
        function it(Q) {
          return Q.type === "JSXExpressionContainer" && P(Q.expression) && Q.expression.value === " " && !J(Q.expression);
        }
        function ae(Q) {
          let me = Q.getValue(), Ce = Q.getParentNode();
          if (!Ce || !me || !A(me) || !A(Ce))
            return !1;
          let Re = Ce.children.indexOf(me), Xe = null;
          for (let Ye = Re; Ye > 0; Ye--) {
            let Ct = Ce.children[Ye - 1];
            if (!(Ct.type === "JSXText" && !_e(Ct))) {
              Xe = Ct;
              break;
            }
          }
          return Xe && Xe.type === "JSXExpressionContainer" && Xe.expression.type === "JSXEmptyExpression" && T(Xe.expression);
        }
        l.exports = { hasJsxIgnoreComment: ae, printJsx: be };
      } }), qr = $({ "src/language-js/print/misc.js"(u, l) {
        ue();
        var { isNonEmptyArray: t } = Gt(), { builders: { indent: a, join: s, line: e } } = wt(), { isFlowAnnotationComment: r } = ur();
        function n(w) {
          let k = w.getValue();
          return !k.optional || k.type === "Identifier" && k === w.getParentNode().key ? "" : k.type === "OptionalCallExpression" || k.type === "OptionalMemberExpression" && k.computed ? "?." : "?";
        }
        function o(w) {
          return w.getValue().definite || w.match(void 0, (k, A) => A === "id" && k.type === "VariableDeclarator" && k.definite) ? "!" : "";
        }
        function c(w, k, A) {
          let N = w.getValue();
          return N.typeArguments ? A("typeArguments") : N.typeParameters ? A("typeParameters") : "";
        }
        function y(w, k, A) {
          let N = w.getValue();
          if (!N.typeAnnotation)
            return "";
          let x = w.getParentNode(), P = x.type === "DeclareFunction" && x.id === N;
          return r(k.originalText, N.typeAnnotation) ? [" /*: ", A("typeAnnotation"), " */"] : [P ? "" : ": ", A("typeAnnotation")];
        }
        function m(w, k, A) {
          return ["::", A("callee")];
        }
        function g(w, k, A) {
          let N = w.getValue();
          return t(N.modifiers) ? [s(" ", w.map(A, "modifiers")), " "] : "";
        }
        function p(w, k, A) {
          return w.type === "EmptyStatement" ? ";" : w.type === "BlockStatement" || A ? [" ", k] : a([e, k]);
        }
        function D(w, k, A) {
          return ["...", A("argument"), y(w, k, A)];
        }
        function C(w, k) {
          let A = w.slice(1, -1);
          if (A.includes('"') || A.includes("'"))
            return w;
          let N = k.singleQuote ? "'" : '"';
          return N + A + N;
        }
        l.exports = { printOptionalToken: n, printDefiniteToken: o, printFunctionTypeParameters: c, printBindExpressionCallee: m, printTypeScriptModifiers: g, printTypeAnnotation: y, printRestSpread: D, adjustClause: p, printDirective: C };
      } }), Du = $({ "src/language-js/print/array.js"(u, l) {
        ue();
        var { printDanglingComments: t } = Qt(), { builders: { line: a, softline: s, hardline: e, group: r, indent: n, ifBreak: o, fill: c } } = wt(), { getLast: y, hasNewline: m } = Gt(), { shouldPrintComma: g, hasComment: p, CommentCheckFlags: D, isNextLineEmpty: C, isNumericLiteral: w, isSignedNumericLiteral: k } = ur(), { locStart: A } = or(), { printOptionalToken: N, printTypeAnnotation: x } = qr();
        function P(T, f, F) {
          let i = T.getValue(), h = [], E = i.type === "TupleExpression" ? "#[" : "[", b = "]";
          if (i.elements.length === 0)
            p(i, D.Dangling) ? h.push(r([E, t(T, f), s, b])) : h.push(E, b);
          else {
            let S = y(i.elements), B = !(S && S.type === "RestElement"), I = S === null, q = Symbol("array"), G = !f.__inJestEach && i.elements.length > 1 && i.elements.every((j, De, U) => {
              let R = j && j.type;
              if (R !== "ArrayExpression" && R !== "ObjectExpression")
                return !1;
              let pe = U[De + 1];
              if (pe && R !== pe.type)
                return !1;
              let be = R === "ArrayExpression" ? "elements" : "properties";
              return j[be] && j[be].length > 1;
            }), M = _(i, f), te = B ? I ? "," : g(f) ? M ? o(",", "", { groupId: q }) : o(",") : "" : "";
            h.push(r([E, n([s, M ? d(T, f, F, te) : [J(T, f, "elements", F), te], t(T, f, !0)]), s, b], { shouldBreak: G, id: q }));
          }
          return h.push(N(T), x(T, f, F)), h;
        }
        function _(T, f) {
          return T.elements.length > 1 && T.elements.every((F) => F && (w(F) || k(F) && !p(F.argument)) && !p(F, D.Trailing | D.Line, (i) => !m(f.originalText, A(i), { backwards: !0 })));
        }
        function J(T, f, F, i) {
          let h = [], E = [];
          return T.each((b) => {
            h.push(E, r(i())), E = [",", a], b.getValue() && C(b.getValue(), f) && E.push(s);
          }, F), h;
        }
        function d(T, f, F, i) {
          let h = [];
          return T.each((E, b, S) => {
            let B = b === S.length - 1;
            h.push([F(), B ? i : ","]), B || h.push(C(E.getValue(), f) ? [e, e] : p(S[b + 1], D.Leading | D.Line) ? e : a);
          }, "elements"), c(h);
        }
        l.exports = { printArray: P, printArrayItems: J, isConciselyPrintedArray: _ };
      } }), js = $({ "src/language-js/print/call-arguments.js"(u, l) {
        ue();
        var { printDanglingComments: t } = Qt(), { getLast: a, getPenultimate: s } = Gt(), { getFunctionParameters: e, hasComment: r, CommentCheckFlags: n, isFunctionCompositionArgs: o, isJsxNode: c, isLongCurriedCallExpression: y, shouldPrintComma: m, getCallArguments: g, iterateCallArgumentsPath: p, isNextLineEmpty: D, isCallExpression: C, isStringLiteral: w, isObjectProperty: k, isTSTypeExpression: A } = ur(), { builders: { line: N, hardline: x, softline: P, group: _, indent: J, conditionalGroup: d, ifBreak: T, breakParent: f }, utils: { willBreak: F } } = wt(), { ArgExpansionBailout: i } = Fn(), { isConciselyPrintedArray: h } = Du();
        function E(M, te, j) {
          let De = M.getValue(), U = De.type === "ImportExpression", R = g(De);
          if (R.length === 0)
            return ["(", t(M, te, !0), ")"];
          if (I(R))
            return ["(", j(["arguments", 0]), ", ", j(["arguments", 1]), ")"];
          let pe = !1, be = !1, fe = R.length - 1, Ie = [];
          p(M, (ae, Q) => {
            let me = ae.getNode(), Ce = [j()];
            Q === fe || (D(me, te) ? (Q === 0 && (be = !0), pe = !0, Ce.push(",", x, x)) : Ce.push(",", N)), Ie.push(Ce);
          });
          let X = !(U || De.callee && De.callee.type === "Import") && m(te, "all") ? "," : "";
          function se() {
            return _(["(", J([N, ...Ie]), X, N, ")"], { shouldBreak: !0 });
          }
          if (pe || M.getParentNode().type !== "Decorator" && o(R))
            return se();
          let we = B(R), _e = S(R, te);
          if (we || _e) {
            if (we ? Ie.slice(1).some(F) : Ie.slice(0, -1).some(F))
              return se();
            let ae = [];
            try {
              M.try(() => {
                p(M, (Q, me) => {
                  we && me === 0 && (ae = [[j([], { expandFirstArg: !0 }), Ie.length > 1 ? "," : "", be ? x : N, be ? x : ""], ...Ie.slice(1)]), _e && me === fe && (ae = [...Ie.slice(0, -1), j([], { expandLastArg: !0 })]);
                });
              });
            } catch (Q) {
              if (Q instanceof i)
                return se();
              throw Q;
            }
            return [Ie.some(F) ? f : "", d([["(", ...ae, ")"], we ? ["(", _(ae[0], { shouldBreak: !0 }), ...ae.slice(1), ")"] : ["(", ...Ie.slice(0, -1), _(a(ae), { shouldBreak: !0 }), ")"], se()])];
          }
          let it = ["(", J([P, ...Ie]), T(X), P, ")"];
          return y(M) ? it : _(it, { shouldBreak: Ie.some(F) || pe });
        }
        function b(M) {
          let te = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return M.type === "ObjectExpression" && (M.properties.length > 0 || r(M)) || M.type === "ArrayExpression" && (M.elements.length > 0 || r(M)) || M.type === "TSTypeAssertion" && b(M.expression) || A(M) && b(M.expression) || M.type === "FunctionExpression" || M.type === "ArrowFunctionExpression" && (!M.returnType || !M.returnType.typeAnnotation || M.returnType.typeAnnotation.type !== "TSTypeReference" || q(M.body)) && (M.body.type === "BlockStatement" || M.body.type === "ArrowFunctionExpression" && b(M.body, !0) || M.body.type === "ObjectExpression" || M.body.type === "ArrayExpression" || !te && (C(M.body) || M.body.type === "ConditionalExpression") || c(M.body)) || M.type === "DoExpression" || M.type === "ModuleExpression";
        }
        function S(M, te) {
          let j = a(M), De = s(M);
          return !r(j, n.Leading) && !r(j, n.Trailing) && b(j) && (!De || De.type !== j.type) && (M.length !== 2 || De.type !== "ArrowFunctionExpression" || j.type !== "ArrayExpression") && !(M.length > 1 && j.type === "ArrayExpression" && h(j, te));
        }
        function B(M) {
          if (M.length !== 2)
            return !1;
          let [te, j] = M;
          return te.type === "ModuleExpression" && G(j) ? !0 : !r(te) && (te.type === "FunctionExpression" || te.type === "ArrowFunctionExpression" && te.body.type === "BlockStatement") && j.type !== "FunctionExpression" && j.type !== "ArrowFunctionExpression" && j.type !== "ConditionalExpression" && !b(j);
        }
        function I(M) {
          return M.length === 2 && M[0].type === "ArrowFunctionExpression" && e(M[0]).length === 0 && M[0].body.type === "BlockStatement" && M[1].type === "ArrayExpression" && !M.some((te) => r(te));
        }
        function q(M) {
          return M.type === "BlockStatement" && (M.body.some((te) => te.type !== "EmptyStatement") || r(M, n.Dangling));
        }
        function G(M) {
          return M.type === "ObjectExpression" && M.properties.length === 1 && k(M.properties[0]) && M.properties[0].key.type === "Identifier" && M.properties[0].key.name === "type" && w(M.properties[0].value) && M.properties[0].value.value === "module";
        }
        l.exports = E;
      } }), Ls = $({ "src/language-js/print/member.js"(u, l) {
        ue();
        var { builders: { softline: t, group: a, indent: s, label: e } } = wt(), { isNumericLiteral: r, isMemberExpression: n, isCallExpression: o } = ur(), { printOptionalToken: c } = qr();
        function y(g, p, D) {
          let C = g.getValue(), w = g.getParentNode(), k, A = 0;
          do
            k = g.getParentNode(A), A++;
          while (k && (n(k) || k.type === "TSNonNullExpression"));
          let N = D("object"), x = m(g, p, D), P = k && (k.type === "NewExpression" || k.type === "BindExpression" || k.type === "AssignmentExpression" && k.left.type !== "Identifier") || C.computed || C.object.type === "Identifier" && C.property.type === "Identifier" && !n(w) || (w.type === "AssignmentExpression" || w.type === "VariableDeclarator") && (o(C.object) && C.object.arguments.length > 0 || C.object.type === "TSNonNullExpression" && o(C.object.expression) && C.object.expression.arguments.length > 0 || N.label === "member-chain");
          return e(N.label === "member-chain" ? "member-chain" : "member", [N, P ? x : a(s([t, x]))]);
        }
        function m(g, p, D) {
          let C = D("property"), w = g.getValue(), k = c(g);
          return w.computed ? !w.property || r(w.property) ? [k, "[", C, "]"] : a([k, "[", s([t, C]), t, "]"]) : [k, ".", C];
        }
        l.exports = { printMemberExpression: y, printMemberLookup: m };
      } }), Aa = $({ "src/language-js/print/member-chain.js"(u, l) {
        ue();
        var { printComments: t } = Qt(), { getLast: a, isNextLineEmptyAfterIndex: s, getNextNonSpaceNonCommentCharacterIndex: e } = Gt(), r = Ln(), { isCallExpression: n, isMemberExpression: o, isFunctionOrArrowExpression: c, isLongCurriedCallExpression: y, isMemberish: m, isNumericLiteral: g, isSimpleCallArgument: p, hasComment: D, CommentCheckFlags: C, isNextLineEmpty: w } = ur(), { locEnd: k } = or(), { builders: { join: A, hardline: N, group: x, indent: P, conditionalGroup: _, breakParent: J, label: d }, utils: { willBreak: T } } = wt(), f = js(), { printMemberLookup: F } = Ls(), { printOptionalToken: i, printFunctionTypeParameters: h, printBindExpressionCallee: E } = qr();
        function b(S, B, I) {
          let q = S.getParentNode(), G = !q || q.type === "ExpressionStatement", M = [];
          function te(Et) {
            let { originalText: bt } = B, xe = e(bt, Et, k);
            return bt.charAt(xe) === ")" ? xe !== !1 && s(bt, xe + 1) : w(Et, B);
          }
          function j(Et) {
            let bt = Et.getValue();
            n(bt) && (m(bt.callee) || n(bt.callee)) ? (M.unshift({ node: bt, printed: [t(Et, [i(Et), h(Et, B, I), f(Et, B, I)], B), te(bt) ? N : ""] }), Et.call((xe) => j(xe), "callee")) : m(bt) ? (M.unshift({ node: bt, needsParens: r(Et, B), printed: t(Et, o(bt) ? F(Et, B, I) : E(Et, B, I), B) }), Et.call((xe) => j(xe), "object")) : bt.type === "TSNonNullExpression" ? (M.unshift({ node: bt, printed: t(Et, "!", B) }), Et.call((xe) => j(xe), "expression")) : M.unshift({ node: bt, printed: I() });
          }
          let De = S.getValue();
          M.unshift({ node: De, printed: [i(S), h(S, B, I), f(S, B, I)] }), De.callee && S.call((Et) => j(Et), "callee");
          let U = [], R = [M[0]], pe = 1;
          for (; pe < M.length && (M[pe].node.type === "TSNonNullExpression" || n(M[pe].node) || o(M[pe].node) && M[pe].node.computed && g(M[pe].node.property)); ++pe)
            R.push(M[pe]);
          if (!n(M[0].node))
            for (; pe + 1 < M.length && m(M[pe].node) && m(M[pe + 1].node); ++pe)
              R.push(M[pe]);
          U.push(R), R = [];
          let be = !1;
          for (; pe < M.length; ++pe) {
            if (be && m(M[pe].node)) {
              if (M[pe].node.computed && g(M[pe].node.property)) {
                R.push(M[pe]);
                continue;
              }
              U.push(R), R = [], be = !1;
            }
            (n(M[pe].node) || M[pe].node.type === "ImportExpression") && (be = !0), R.push(M[pe]), D(M[pe].node, C.Trailing) && (U.push(R), R = [], be = !1);
          }
          R.length > 0 && U.push(R);
          function fe(Et) {
            return /^[A-Z]|^[$_]+$/.test(Et);
          }
          function Ie(Et) {
            return Et.length <= B.tabWidth;
          }
          function X(Et) {
            let bt = Et[1].length > 0 && Et[1][0].node.computed;
            if (Et[0].length === 1) {
              let H = Et[0][0].node;
              return H.type === "ThisExpression" || H.type === "Identifier" && (fe(H.name) || G && Ie(H.name) || bt);
            }
            let xe = a(Et[0]).node;
            return o(xe) && xe.property.type === "Identifier" && (fe(xe.property.name) || bt);
          }
          let se = U.length >= 2 && !D(U[1][0].node) && X(U);
          function we(Et) {
            let bt = Et.map((xe) => xe.printed);
            return Et.length > 0 && a(Et).needsParens ? ["(", ...bt, ")"] : bt;
          }
          function _e(Et) {
            return Et.length === 0 ? "" : P(x([N, A(N, Et.map(we))]));
          }
          let it = U.map(we), ae = it, Q = se ? 3 : 2, me = U.flat(), Ce = me.slice(1, -1).some((Et) => D(Et.node, C.Leading)) || me.slice(0, -1).some((Et) => D(Et.node, C.Trailing)) || U[Q] && D(U[Q][0].node, C.Leading);
          if (U.length <= Q && !Ce)
            return y(S) ? ae : x(ae);
          let Re = a(U[se ? 1 : 0]).node, Xe = !n(Re) && te(Re), Ye = [we(U[0]), se ? U.slice(1, 2).map(we) : "", Xe ? N : "", _e(U.slice(se ? 2 : 1))], Ct = M.map((Et) => {
            let { node: bt } = Et;
            return bt;
          }).filter(n);
          function Rt() {
            let Et = a(a(U)).node, bt = a(it);
            return n(Et) && T(bt) && Ct.slice(0, -1).some((xe) => xe.arguments.some(c));
          }
          let It;
          return Ce || Ct.length > 2 && Ct.some((Et) => !Et.arguments.every((bt) => p(bt, 0))) || it.slice(0, -1).some(T) || Rt() ? It = x(Ye) : It = [T(ae) || Xe ? J : "", _([ae, Ye])], d("member-chain", It);
        }
        l.exports = b;
      } }), Os = $({ "src/language-js/print/call-expression.js"(u, l) {
        ue();
        var { builders: { join: t, group: a } } = wt(), s = Ln(), { getCallArguments: e, hasFlowAnnotationComment: r, isCallExpression: n, isMemberish: o, isStringLiteral: c, isTemplateOnItsOwnLine: y, isTestCall: m, iterateCallArgumentsPath: g } = ur(), p = Aa(), D = js(), { printOptionalToken: C, printFunctionTypeParameters: w } = qr();
        function k(N, x, P) {
          let _ = N.getValue(), J = N.getParentNode(), d = _.type === "NewExpression", T = _.type === "ImportExpression", f = C(N), F = e(_);
          if (F.length > 0 && (!T && !d && A(_, J) || F.length === 1 && y(F[0], x.originalText) || !d && m(_, J))) {
            let E = [];
            return g(N, () => {
              E.push(P());
            }), [d ? "new " : "", P("callee"), f, w(N, x, P), "(", t(", ", E), ")"];
          }
          let i = (x.parser === "babel" || x.parser === "babel-flow") && _.callee && _.callee.type === "Identifier" && r(_.callee.trailingComments);
          if (i && (_.callee.trailingComments[0].printed = !0), !T && !d && o(_.callee) && !N.call((E) => s(E, x), "callee"))
            return p(N, x, P);
          let h = [d ? "new " : "", T ? "import" : P("callee"), f, i ? `/*:: ${_.callee.trailingComments[0].value.slice(2).trim()} */` : "", w(N, x, P), D(N, x, P)];
          return T || n(_.callee) ? a(h) : h;
        }
        function A(N, x) {
          if (N.callee.type !== "Identifier")
            return !1;
          if (N.callee.name === "require")
            return !0;
          if (N.callee.name === "define") {
            let P = e(N);
            return x.type === "ExpressionStatement" && (P.length === 1 || P.length === 2 && P[0].type === "ArrayExpression" || P.length === 3 && c(P[0]) && P[1].type === "ArrayExpression");
          }
          return !1;
        }
        l.exports = { printCallExpression: k };
      } }), du = $({ "src/language-js/print/assignment.js"(u, l) {
        ue();
        var { isNonEmptyArray: t, getStringWidth: a } = Gt(), { builders: { line: s, group: e, indent: r, indentIfBreak: n, lineSuffixBoundary: o }, utils: { cleanDoc: c, willBreak: y, canBreak: m } } = wt(), { hasLeadingOwnLineComment: g, isBinaryish: p, isStringLiteral: D, isLiteral: C, isNumericLiteral: w, isCallExpression: k, isMemberExpression: A, getCallArguments: N, rawText: x, hasComment: P, isSignedNumericLiteral: _, isObjectProperty: J } = ur(), { shouldInlineLogicalExpression: d } = as(), { printCallExpression: T } = Os();
        function f(X, se, we, _e, it, ae) {
          let Q = h(X, se, we, _e, ae), me = we(ae, { assignmentLayout: Q });
          switch (Q) {
            case "break-after-operator":
              return e([e(_e), it, e(r([s, me]))]);
            case "never-break-after-operator":
              return e([e(_e), it, " ", me]);
            case "fluid": {
              let Ce = Symbol("assignment");
              return e([e(_e), it, e(r(s), { id: Ce }), o, n(me, { groupId: Ce })]);
            }
            case "break-lhs":
              return e([_e, it, " ", e(me)]);
            case "chain":
              return [e(_e), it, s, me];
            case "chain-tail":
              return [e(_e), it, r([s, me])];
            case "chain-tail-arrow-chain":
              return [e(_e), it, me];
            case "only-left":
              return _e;
          }
        }
        function F(X, se, we) {
          let _e = X.getValue();
          return f(X, se, we, we("left"), [" ", _e.operator], "right");
        }
        function i(X, se, we) {
          return f(X, se, we, we("id"), " =", "init");
        }
        function h(X, se, we, _e, it) {
          let ae = X.getValue(), Q = ae[it];
          if (!Q)
            return "only-left";
          let me = !S(Q);
          if (X.match(S, B, (Re) => !me || Re.type !== "ExpressionStatement" && Re.type !== "VariableDeclaration"))
            return me ? Q.type === "ArrowFunctionExpression" && Q.body.type === "ArrowFunctionExpression" ? "chain-tail-arrow-chain" : "chain-tail" : "chain";
          if (!me && S(Q.right) || g(se.originalText, Q))
            return "break-after-operator";
          if (Q.type === "CallExpression" && Q.callee.name === "require" || se.parser === "json5" || se.parser === "json")
            return "never-break-after-operator";
          if (b(ae) || I(ae) || M(ae) || te(ae) && m(_e))
            return "break-lhs";
          let Ce = be(ae, _e, se);
          return X.call(() => E(X, se, we, Ce), it) ? "break-after-operator" : Ce || Q.type === "TemplateLiteral" || Q.type === "TaggedTemplateExpression" || Q.type === "BooleanLiteral" || w(Q) || Q.type === "ClassExpression" ? "never-break-after-operator" : "fluid";
        }
        function E(X, se, we, _e) {
          let it = X.getValue();
          if (p(it) && !d(it))
            return !0;
          switch (it.type) {
            case "StringLiteralTypeAnnotation":
            case "SequenceExpression":
              return !0;
            case "ConditionalExpression": {
              let { test: me } = it;
              return p(me) && !d(me);
            }
            case "ClassExpression":
              return t(it.decorators);
          }
          if (_e)
            return !1;
          let ae = it, Q = [];
          for (; ; )
            if (ae.type === "UnaryExpression")
              ae = ae.argument, Q.push("argument");
            else if (ae.type === "TSNonNullExpression")
              ae = ae.expression, Q.push("expression");
            else
              break;
          return !!(D(ae) || X.call(() => U(X, se, we), ...Q));
        }
        function b(X) {
          if (B(X)) {
            let se = X.left || X.id;
            return se.type === "ObjectPattern" && se.properties.length > 2 && se.properties.some((we) => J(we) && (!we.shorthand || we.value && we.value.type === "AssignmentPattern"));
          }
          return !1;
        }
        function S(X) {
          return X.type === "AssignmentExpression";
        }
        function B(X) {
          return S(X) || X.type === "VariableDeclarator";
        }
        function I(X) {
          let se = q(X);
          if (t(se)) {
            let we = X.type === "TSTypeAliasDeclaration" ? "constraint" : "bound";
            if (se.length > 1 && se.some((_e) => _e[we] || _e.default))
              return !0;
          }
          return !1;
        }
        function q(X) {
          return G(X) && X.typeParameters && X.typeParameters.params ? X.typeParameters.params : null;
        }
        function G(X) {
          return X.type === "TSTypeAliasDeclaration" || X.type === "TypeAlias";
        }
        function M(X) {
          if (X.type !== "VariableDeclarator")
            return !1;
          let { typeAnnotation: se } = X.id;
          if (!se || !se.typeAnnotation)
            return !1;
          let we = j(se.typeAnnotation);
          return t(we) && we.length > 1 && we.some((_e) => t(j(_e)) || _e.type === "TSConditionalType");
        }
        function te(X) {
          return X.type === "VariableDeclarator" && X.init && X.init.type === "ArrowFunctionExpression";
        }
        function j(X) {
          return De(X) && X.typeParameters && X.typeParameters.params ? X.typeParameters.params : null;
        }
        function De(X) {
          return X.type === "TSTypeReference" || X.type === "GenericTypeAnnotation";
        }
        function U(X, se, we) {
          let _e = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, it = X.getValue(), ae = () => U(X, se, we, !0);
          if (it.type === "TSNonNullExpression")
            return X.call(ae, "expression");
          if (k(it)) {
            if (T(X, se, we).label === "member-chain")
              return !1;
            let Q = N(it);
            return !(Q.length === 0 || Q.length === 1 && pe(Q[0], se)) || fe(it, we) ? !1 : X.call(ae, "callee");
          }
          return A(it) ? X.call(ae, "object") : _e && (it.type === "Identifier" || it.type === "ThisExpression");
        }
        var R = 0.25;
        function pe(X, se) {
          let { printWidth: we } = se;
          if (P(X))
            return !1;
          let _e = we * R;
          if (X.type === "ThisExpression" || X.type === "Identifier" && X.name.length <= _e || _(X) && !P(X.argument))
            return !0;
          let it = X.type === "Literal" && "regex" in X && X.regex.pattern || X.type === "RegExpLiteral" && X.pattern;
          return it ? it.length <= _e : D(X) ? x(X).length <= _e : X.type === "TemplateLiteral" ? X.expressions.length === 0 && X.quasis[0].value.raw.length <= _e && !X.quasis[0].value.raw.includes(`
`) : C(X);
        }
        function be(X, se, we) {
          if (!J(X))
            return !1;
          se = c(se);
          let _e = 3;
          return typeof se == "string" && a(se) < we.tabWidth + _e;
        }
        function fe(X, se) {
          let we = Ie(X);
          if (t(we)) {
            if (we.length > 1)
              return !0;
            if (we.length === 1) {
              let it = we[0];
              if (it.type === "TSUnionType" || it.type === "UnionTypeAnnotation" || it.type === "TSIntersectionType" || it.type === "IntersectionTypeAnnotation" || it.type === "TSTypeLiteral" || it.type === "ObjectTypeAnnotation")
                return !0;
            }
            let _e = X.typeParameters ? "typeParameters" : "typeArguments";
            if (y(se(_e)))
              return !0;
          }
          return !1;
        }
        function Ie(X) {
          return X.typeParameters && X.typeParameters.params || X.typeArguments && X.typeArguments.params;
        }
        l.exports = { printVariableDeclarator: i, printAssignmentExpression: F, printAssignment: f, isArrowFunctionVariableDeclarator: te };
      } }), Zu = $({ "src/language-js/print/function-parameters.js"(u, l) {
        ue();
        var { getNextNonSpaceNonCommentCharacter: t } = Gt(), { printDanglingComments: a } = Qt(), { builders: { line: s, hardline: e, softline: r, group: n, indent: o, ifBreak: c }, utils: { removeLines: y, willBreak: m } } = wt(), { getFunctionParameters: g, iterateFunctionParametersPath: p, isSimpleType: D, isTestCall: C, isTypeAnnotationAFunction: w, isObjectType: k, isObjectTypePropertyAFunction: A, hasRestParameter: N, shouldPrintComma: x, hasComment: P, isNextLineEmpty: _ } = ur(), { locEnd: J } = or(), { ArgExpansionBailout: d } = Fn(), { printFunctionTypeParameters: T } = qr();
        function f(E, b, S, B, I) {
          let q = E.getValue(), G = g(q), M = I ? T(E, S, b) : "";
          if (G.length === 0)
            return [M, "(", a(E, S, !0, (pe) => t(S.originalText, pe, J) === ")"), ")"];
          let te = E.getParentNode(), j = C(te), De = F(q), U = [];
          if (p(E, (pe, be) => {
            let fe = be === G.length - 1;
            fe && q.rest && U.push("..."), U.push(b()), !fe && (U.push(","), j || De ? U.push(" ") : _(G[be], S) ? U.push(e, e) : U.push(s));
          }), B) {
            if (m(M) || m(U))
              throw new d();
            return n([y(M), "(", y(U), ")"]);
          }
          let R = G.every((pe) => !pe.decorators);
          return De && R ? [M, "(", ...U, ")"] : j ? [M, "(", ...U, ")"] : (A(te) || w(te) || te.type === "TypeAlias" || te.type === "UnionTypeAnnotation" || te.type === "TSUnionType" || te.type === "IntersectionTypeAnnotation" || te.type === "FunctionTypeAnnotation" && te.returnType === q) && G.length === 1 && G[0].name === null && q.this !== G[0] && G[0].typeAnnotation && q.typeParameters === null && D(G[0].typeAnnotation) && !q.rest ? S.arrowParens === "always" ? ["(", ...U, ")"] : U : [M, "(", o([r, ...U]), c(!N(q) && x(S, "all") ? "," : ""), r, ")"];
        }
        function F(E) {
          if (!E)
            return !1;
          let b = g(E);
          if (b.length !== 1)
            return !1;
          let [S] = b;
          return !P(S) && (S.type === "ObjectPattern" || S.type === "ArrayPattern" || S.type === "Identifier" && S.typeAnnotation && (S.typeAnnotation.type === "TypeAnnotation" || S.typeAnnotation.type === "TSTypeAnnotation") && k(S.typeAnnotation.typeAnnotation) || S.type === "FunctionTypeParam" && k(S.typeAnnotation) || S.type === "AssignmentPattern" && (S.left.type === "ObjectPattern" || S.left.type === "ArrayPattern") && (S.right.type === "Identifier" || S.right.type === "ObjectExpression" && S.right.properties.length === 0 || S.right.type === "ArrayExpression" && S.right.elements.length === 0));
        }
        function i(E) {
          let b;
          return E.returnType ? (b = E.returnType, b.typeAnnotation && (b = b.typeAnnotation)) : E.typeAnnotation && (b = E.typeAnnotation), b;
        }
        function h(E, b) {
          let S = i(E);
          if (!S)
            return !1;
          let B = E.typeParameters && E.typeParameters.params;
          if (B) {
            if (B.length > 1)
              return !1;
            if (B.length === 1) {
              let I = B[0];
              if (I.constraint || I.default)
                return !1;
            }
          }
          return g(E).length === 1 && (k(S) || m(b));
        }
        l.exports = { printFunctionParameters: f, shouldHugFunctionParameters: F, shouldGroupFunctionParameters: h };
      } }), ei = $({ "src/language-js/print/type-annotation.js"(u, l) {
        ue();
        var { printComments: t, printDanglingComments: a } = Qt(), { isNonEmptyArray: s } = Gt(), { builders: { group: e, join: r, line: n, softline: o, indent: c, align: y, ifBreak: m } } = wt(), g = Ln(), { locStart: p } = or(), { isSimpleType: D, isObjectType: C, hasLeadingOwnLineComment: w, isObjectTypePropertyAFunction: k, shouldPrintComma: A } = ur(), { printAssignment: N } = du(), { printFunctionParameters: x, shouldGroupFunctionParameters: P } = Zu(), { printArrayItems: _ } = Du();
        function J(S) {
          if (D(S) || C(S))
            return !0;
          if (S.type === "UnionTypeAnnotation" || S.type === "TSUnionType") {
            let B = S.types.filter((q) => q.type === "VoidTypeAnnotation" || q.type === "TSVoidKeyword" || q.type === "NullLiteralTypeAnnotation" || q.type === "TSNullKeyword").length, I = S.types.some((q) => q.type === "ObjectTypeAnnotation" || q.type === "TSTypeLiteral" || q.type === "GenericTypeAnnotation" || q.type === "TSTypeReference");
            if (S.types.length - 1 === B && I)
              return !0;
          }
          return !1;
        }
        function d(S, B, I) {
          let q = B.semi ? ";" : "", G = S.getValue(), M = [];
          return M.push("opaque type ", I("id"), I("typeParameters")), G.supertype && M.push(": ", I("supertype")), G.impltype && M.push(" = ", I("impltype")), M.push(q), M;
        }
        function T(S, B, I) {
          let q = B.semi ? ";" : "", G = S.getValue(), M = [];
          G.declare && M.push("declare "), M.push("type ", I("id"), I("typeParameters"));
          let te = G.type === "TSTypeAliasDeclaration" ? "typeAnnotation" : "right";
          return [N(S, B, I, M, " =", te), q];
        }
        function f(S, B, I) {
          let q = S.getValue(), G = S.map(I, "types"), M = [], te = !1;
          for (let j = 0; j < G.length; ++j)
            j === 0 ? M.push(G[j]) : C(q.types[j - 1]) && C(q.types[j]) ? M.push([" & ", te ? c(G[j]) : G[j]]) : !C(q.types[j - 1]) && !C(q.types[j]) ? M.push(c([" &", n, G[j]])) : (j > 1 && (te = !0), M.push(" & ", j > 1 ? c(G[j]) : G[j]));
          return e(M);
        }
        function F(S, B, I) {
          let q = S.getValue(), G = S.getParentNode(), M = G.type !== "TypeParameterInstantiation" && G.type !== "TSTypeParameterInstantiation" && G.type !== "GenericTypeAnnotation" && G.type !== "TSTypeReference" && G.type !== "TSTypeAssertion" && G.type !== "TupleTypeAnnotation" && G.type !== "TSTupleType" && !(G.type === "FunctionTypeParam" && !G.name && S.getParentNode(1).this !== G) && !((G.type === "TypeAlias" || G.type === "VariableDeclarator" || G.type === "TSTypeAliasDeclaration") && w(B.originalText, q)), te = J(q), j = S.map((R) => {
            let pe = I();
            return te || (pe = y(2, pe)), t(R, pe, B);
          }, "types");
          if (te)
            return r(" | ", j);
          let De = M && !w(B.originalText, q), U = [m([De ? n : "", "| "]), r([n, "| "], j)];
          return g(S, B) ? e([c(U), o]) : G.type === "TupleTypeAnnotation" && G.types.length > 1 || G.type === "TSTupleType" && G.elementTypes.length > 1 ? e([c([m(["(", o]), U]), o, m(")")]) : e(M ? c(U) : U);
        }
        function i(S, B, I) {
          let q = S.getValue(), G = [], M = S.getParentNode(0), te = S.getParentNode(1), j = S.getParentNode(2), De = q.type === "TSFunctionType" || !((M.type === "ObjectTypeProperty" || M.type === "ObjectTypeInternalSlot") && !M.variance && !M.optional && p(M) === p(q) || M.type === "ObjectTypeCallProperty" || j && j.type === "DeclareFunction"), U = De && (M.type === "TypeAnnotation" || M.type === "TSTypeAnnotation"), R = U && De && (M.type === "TypeAnnotation" || M.type === "TSTypeAnnotation") && te.type === "ArrowFunctionExpression";
          k(M) && (De = !0, U = !0), R && G.push("(");
          let pe = x(S, I, B, !1, !0), be = q.returnType || q.predicate || q.typeAnnotation ? [De ? " => " : ": ", I("returnType"), I("predicate"), I("typeAnnotation")] : "", fe = P(q, be);
          return G.push(fe ? e(pe) : pe), be && G.push(be), R && G.push(")"), e(G);
        }
        function h(S, B, I) {
          let q = S.getValue(), G = q.type === "TSTupleType" ? "elementTypes" : "types", M = q[G], te = s(M), j = te ? o : "";
          return e(["[", c([j, _(S, B, G, I)]), m(te && A(B, "all") ? "," : ""), a(S, B, !0), j, "]"]);
        }
        function E(S, B, I) {
          let q = S.getValue(), G = q.type === "OptionalIndexedAccessType" && q.optional ? "?.[" : "[";
          return [I("objectType"), G, I("indexType"), "]"];
        }
        function b(S, B, I) {
          let q = S.getValue();
          return [q.postfix ? "" : I, B("typeAnnotation"), q.postfix ? I : ""];
        }
        l.exports = { printOpaqueType: d, printTypeAlias: T, printIntersectionType: f, printUnionType: F, printFunctionType: i, printTupleType: h, printIndexedAccessType: E, shouldHugType: J, printJSDocType: b };
      } }), ti = $({ "src/language-js/print/type-parameters.js"(u, l) {
        ue();
        var { printDanglingComments: t } = Qt(), { builders: { join: a, line: s, hardline: e, softline: r, group: n, indent: o, ifBreak: c } } = wt(), { isTestCall: y, hasComment: m, CommentCheckFlags: g, isTSXFile: p, shouldPrintComma: D, getFunctionParameters: C, isObjectType: w, getTypeScriptMappedTypeModifier: k } = ur(), { createGroupIdMapper: A } = Gt(), { shouldHugType: N } = ei(), { isArrowFunctionVariableDeclarator: x } = du(), P = A("typeParameters");
        function _(T, f, F, i) {
          let h = T.getValue();
          if (!h[i])
            return "";
          if (!Array.isArray(h[i]))
            return F(i);
          let E = T.getNode(2), b = E && y(E), S = T.match((I) => !(I[i].length === 1 && w(I[i][0])), void 0, (I, q) => q === "typeAnnotation", (I) => I.type === "Identifier", x);
          if (h[i].length === 0 || !S && (b || h[i].length === 1 && (h[i][0].type === "NullableTypeAnnotation" || N(h[i][0]))))
            return ["<", a(", ", T.map(F, i)), J(T, f), ">"];
          let B = h.type === "TSTypeParameterInstantiation" ? "" : C(h).length === 1 && p(f) && !h[i][0].constraint && T.getParentNode().type === "ArrowFunctionExpression" ? "," : D(f, "all") ? c(",") : "";
          return n(["<", o([r, a([",", s], T.map(F, i))]), B, r, ">"], { id: P(h) });
        }
        function J(T, f) {
          let F = T.getValue();
          if (!m(F, g.Dangling))
            return "";
          let i = !m(F, g.Line), h = t(T, f, i);
          return i ? h : [h, e];
        }
        function d(T, f, F) {
          let i = T.getValue(), h = [i.type === "TSTypeParameter" && i.const ? "const " : ""], E = T.getParentNode();
          return E.type === "TSMappedType" ? (E.readonly && h.push(k(E.readonly, "readonly"), " "), h.push("[", F("name")), i.constraint && h.push(" in ", F("constraint")), E.nameType && h.push(" as ", T.callParent(() => F("nameType"))), h.push("]"), h) : (i.variance && h.push(F("variance")), i.in && h.push("in "), i.out && h.push("out "), h.push(F("name")), i.bound && h.push(": ", F("bound")), i.constraint && h.push(" extends ", F("constraint")), i.default && h.push(" = ", F("default")), h);
        }
        l.exports = { printTypeParameter: d, printTypeParameters: _, getTypeParametersGroupId: P };
      } }), fu = $({ "src/language-js/print/property.js"(u, l) {
        ue();
        var { printComments: t } = Qt(), { printString: a, printNumber: s } = Gt(), { isNumericLiteral: e, isSimpleNumber: r, isStringLiteral: n, isStringPropSafeToUnquote: o, rawText: c } = ur(), { printAssignment: y } = du(), m = /* @__PURE__ */ new WeakMap();
        function g(D, C, w) {
          let k = D.getNode();
          if (k.computed)
            return ["[", w("key"), "]"];
          let A = D.getParentNode(), { key: N } = k;
          if (C.quoteProps === "consistent" && !m.has(A)) {
            let x = (A.properties || A.body || A.members).some((P) => !P.computed && P.key && n(P.key) && !o(P, C));
            m.set(A, x);
          }
          if ((N.type === "Identifier" || e(N) && r(s(c(N))) && String(N.value) === s(c(N)) && !(C.parser === "typescript" || C.parser === "babel-ts")) && (C.parser === "json" || C.quoteProps === "consistent" && m.get(A))) {
            let x = a(JSON.stringify(N.type === "Identifier" ? N.name : N.value.toString()), C);
            return D.call((P) => t(P, x, C), "key");
          }
          return o(k, C) && (C.quoteProps === "as-needed" || C.quoteProps === "consistent" && !m.get(A)) ? D.call((x) => t(x, /^\d/.test(N.value) ? s(N.value) : N.value, C), "key") : w("key");
        }
        function p(D, C, w) {
          return D.getValue().shorthand ? w("value") : y(D, C, w, g(D, C, w), ":", "value");
        }
        l.exports = { printProperty: p, printPropertyKey: g };
      } }), ri = $({ "src/language-js/print/function.js"(u, l) {
        ue();
        var t = lr(), { printDanglingComments: a, printCommentsSeparately: s } = Qt(), e = mr(), { getNextNonSpaceNonCommentCharacterIndex: r } = Gt(), { builders: { line: n, softline: o, group: c, indent: y, ifBreak: m, hardline: g, join: p, indentIfBreak: D }, utils: { removeLines: C, willBreak: w } } = wt(), { ArgExpansionBailout: k } = Fn(), { getFunctionParameters: A, hasLeadingOwnLineComment: N, isFlowAnnotationComment: x, isJsxNode: P, isTemplateOnItsOwnLine: _, shouldPrintComma: J, startsWithNoLookaheadToken: d, isBinaryish: T, isLineComment: f, hasComment: F, getComments: i, CommentCheckFlags: h, isCallLikeExpression: E, isCallExpression: b, getCallArguments: S, hasNakedLeftSide: B, getLeftSide: I } = ur(), { locEnd: q } = or(), { printFunctionParameters: G, shouldGroupFunctionParameters: M } = Zu(), { printPropertyKey: te } = fu(), { printFunctionTypeParameters: j } = qr();
        function De(Q, me, Ce, Re) {
          let Xe = Q.getValue(), Ye = !1;
          if ((Xe.type === "FunctionDeclaration" || Xe.type === "FunctionExpression") && Re && Re.expandLastArg) {
            let bt = Q.getParentNode();
            b(bt) && S(bt).length > 1 && (Ye = !0);
          }
          let Ct = [];
          Xe.type === "TSDeclareFunction" && Xe.declare && Ct.push("declare "), Xe.async && Ct.push("async "), Xe.generator ? Ct.push("function* ") : Ct.push("function "), Xe.id && Ct.push(me("id"));
          let Rt = G(Q, me, Ce, Ye), It = se(Q, me, Ce), Et = M(Xe, It);
          return Ct.push(j(Q, Ce, me), c([Et ? c(Rt) : Rt, It]), Xe.body ? " " : "", me("body")), Ce.semi && (Xe.declare || !Xe.body) && Ct.push(";"), Ct;
        }
        function U(Q, me, Ce) {
          let Re = Q.getNode(), { kind: Xe } = Re, Ye = Re.value || Re, Ct = [];
          return !Xe || Xe === "init" || Xe === "method" || Xe === "constructor" ? Ye.async && Ct.push("async ") : (t.ok(Xe === "get" || Xe === "set"), Ct.push(Xe, " ")), Ye.generator && Ct.push("*"), Ct.push(te(Q, me, Ce), Re.optional || Re.key.optional ? "?" : ""), Re === Ye ? Ct.push(R(Q, me, Ce)) : Ye.type === "FunctionExpression" ? Ct.push(Q.call((Rt) => R(Rt, me, Ce), "value")) : Ct.push(Ce("value")), Ct;
        }
        function R(Q, me, Ce) {
          let Re = Q.getNode(), Xe = G(Q, Ce, me), Ye = se(Q, Ce, me), Ct = M(Re, Ye), Rt = [j(Q, me, Ce), c([Ct ? c(Xe) : Xe, Ye])];
          return Re.body ? Rt.push(" ", Ce("body")) : Rt.push(me.semi ? ";" : ""), Rt;
        }
        function pe(Q, me, Ce, Re) {
          let Xe = Q.getValue(), Ye = [];
          if (Xe.async && Ye.push("async "), X(Q, me))
            Ye.push(Ce(["params", 0]));
          else {
            let Rt = Re && (Re.expandLastArg || Re.expandFirstArg), It = se(Q, Ce, me);
            if (Rt) {
              if (w(It))
                throw new k();
              It = c(C(It));
            }
            Ye.push(c([G(Q, Ce, me, Rt, !0), It]));
          }
          let Ct = a(Q, me, !0, (Rt) => {
            let It = r(me.originalText, Rt, q);
            return It !== !1 && me.originalText.slice(It, It + 2) === "=>";
          });
          return Ct && Ye.push(" ", Ct), Ye;
        }
        function be(Q, me, Ce, Re, Xe, Ye) {
          let Ct = Q.getName(), Rt = Q.getParentNode(), It = E(Rt) && Ct === "callee", Et = !!(me && me.assignmentLayout), bt = Ye.body.type !== "BlockStatement" && Ye.body.type !== "ObjectExpression" && Ye.body.type !== "SequenceExpression", xe = It && bt || me && me.assignmentLayout === "chain-tail-arrow-chain", H = Symbol("arrow-chain");
          return Ye.body.type === "SequenceExpression" && (Xe = c(["(", y([o, Xe]), o, ")"])), c([c(y([It || Et ? o : "", c(p([" =>", n], Ce), { shouldBreak: Re })]), { id: H, shouldBreak: xe }), " =>", D(bt ? y([n, Xe]) : [" ", Xe], { groupId: H }), It ? m(o, "", { groupId: H }) : ""]);
        }
        function fe(Q, me, Ce, Re) {
          let Xe = Q.getValue(), Ye = [], Ct = [], Rt = !1;
          if (function H() {
            let ke = pe(Q, me, Ce, Re);
            if (Ye.length === 0)
              Ye.push(ke);
            else {
              let { leading: oe, trailing: Be } = s(Q, me);
              Ye.push([oe, ke]), Ct.unshift(Be);
            }
            Rt = Rt || Xe.returnType && A(Xe).length > 0 || Xe.typeParameters || A(Xe).some((oe) => oe.type !== "Identifier"), Xe.body.type !== "ArrowFunctionExpression" || Re && Re.expandLastArg ? Ct.unshift(Ce("body", Re)) : (Xe = Xe.body, Q.call(H, "body"));
          }(), Ye.length > 1)
            return be(Q, Re, Ye, Rt, Ct, Xe);
          let It = Ye;
          if (It.push(" =>"), !N(me.originalText, Xe.body) && (Xe.body.type === "ArrayExpression" || Xe.body.type === "ObjectExpression" || Xe.body.type === "BlockStatement" || P(Xe.body) || _(Xe.body, me.originalText) || Xe.body.type === "ArrowFunctionExpression" || Xe.body.type === "DoExpression"))
            return c([...It, " ", Ct]);
          if (Xe.body.type === "SequenceExpression")
            return c([...It, c([" (", y([o, Ct]), o, ")"])]);
          let Et = (Re && Re.expandLastArg || Q.getParentNode().type === "JSXExpressionContainer") && !F(Xe), bt = Re && Re.expandLastArg && J(me, "all"), xe = Xe.body.type === "ConditionalExpression" && !d(Xe.body, (H) => H.type === "ObjectExpression");
          return c([...It, c([y([n, xe ? m("", "(") : "", Ct, xe ? m("", ")") : ""]), Et ? [m(bt ? "," : ""), o] : ""])]);
        }
        function Ie(Q) {
          let me = A(Q);
          return me.length === 1 && !Q.typeParameters && !F(Q, h.Dangling) && me[0].type === "Identifier" && !me[0].typeAnnotation && !F(me[0]) && !me[0].optional && !Q.predicate && !Q.returnType;
        }
        function X(Q, me) {
          if (me.arrowParens === "always")
            return !1;
          if (me.arrowParens === "avoid") {
            let Ce = Q.getValue();
            return Ie(Ce);
          }
          return !1;
        }
        function se(Q, me, Ce) {
          let Re = Q.getValue(), Xe = me("returnType");
          if (Re.returnType && x(Ce.originalText, Re.returnType))
            return [" /*: ", Xe, " */"];
          let Ye = [Xe];
          return Re.returnType && Re.returnType.typeAnnotation && Ye.unshift(": "), Re.predicate && Ye.push(Re.returnType ? " " : ": ", me("predicate")), Ye;
        }
        function we(Q, me, Ce) {
          let Re = Q.getValue(), Xe = me.semi ? ";" : "", Ye = [];
          Re.argument && (ae(me, Re.argument) ? Ye.push([" (", y([g, Ce("argument")]), g, ")"]) : T(Re.argument) || Re.argument.type === "SequenceExpression" ? Ye.push(c([m(" (", " "), y([o, Ce("argument")]), o, m(")")])) : Ye.push(" ", Ce("argument")));
          let Ct = i(Re), Rt = e(Ct), It = Rt && f(Rt);
          return It && Ye.push(Xe), F(Re, h.Dangling) && Ye.push(" ", a(Q, me, !0)), It || Ye.push(Xe), Ye;
        }
        function _e(Q, me, Ce) {
          return ["return", we(Q, me, Ce)];
        }
        function it(Q, me, Ce) {
          return ["throw", we(Q, me, Ce)];
        }
        function ae(Q, me) {
          if (N(Q.originalText, me))
            return !0;
          if (B(me)) {
            let Ce = me, Re;
            for (; Re = I(Ce); )
              if (Ce = Re, N(Q.originalText, Ce))
                return !0;
          }
          return !1;
        }
        l.exports = { printFunction: De, printArrowFunction: fe, printMethod: U, printReturnStatement: _e, printThrowStatement: it, printMethodInternal: R, shouldPrintParamsWithoutParens: X };
      } }), os = $({ "src/language-js/print/decorators.js"(u, l) {
        ue();
        var { isNonEmptyArray: t, hasNewline: a } = Gt(), { builders: { line: s, hardline: e, join: r, breakParent: n, group: o } } = wt(), { locStart: c, locEnd: y } = or(), { getParentExportDeclaration: m } = ur();
        function g(k, A, N) {
          let x = k.getValue();
          return o([r(s, k.map(N, "decorators")), C(x, A) ? e : s]);
        }
        function p(k, A, N) {
          return [r(e, k.map(N, "declaration", "decorators")), e];
        }
        function D(k, A, N) {
          let x = k.getValue(), { decorators: P } = x;
          if (!t(P) || w(k.getParentNode()))
            return;
          let _ = x.type === "ClassExpression" || x.type === "ClassDeclaration" || C(x, A);
          return [m(k) ? e : _ ? n : "", r(s, k.map(N, "decorators")), s];
        }
        function C(k, A) {
          return k.decorators.some((N) => a(A.originalText, y(N)));
        }
        function w(k) {
          if (k.type !== "ExportDefaultDeclaration" && k.type !== "ExportNamedDeclaration" && k.type !== "DeclareExportDeclaration")
            return !1;
          let A = k.declaration && k.declaration.decorators;
          return t(A) && c(k) === c(A[0]);
        }
        l.exports = { printDecorators: D, printClassMemberDecorators: g, printDecoratorsBeforeExport: p, hasDecoratorsBeforeExport: w };
      } }), mu = $({ "src/language-js/print/class.js"(u, l) {
        ue();
        var { isNonEmptyArray: t, createGroupIdMapper: a } = Gt(), { printComments: s, printDanglingComments: e } = Qt(), { builders: { join: r, line: n, hardline: o, softline: c, group: y, indent: m, ifBreak: g } } = wt(), { hasComment: p, CommentCheckFlags: D } = ur(), { getTypeParametersGroupId: C } = ti(), { printMethod: w } = ri(), { printOptionalToken: k, printTypeAnnotation: A, printDefiniteToken: N } = qr(), { printPropertyKey: x } = fu(), { printAssignment: P } = du(), { printClassMemberDecorators: _ } = os();
        function J(S, B, I) {
          let q = S.getValue(), G = [];
          q.declare && G.push("declare "), q.abstract && G.push("abstract "), G.push("class");
          let M = q.id && p(q.id, D.Trailing) || q.typeParameters && p(q.typeParameters, D.Trailing) || q.superClass && p(q.superClass) || t(q.extends) || t(q.mixins) || t(q.implements), te = [], j = [];
          if (q.id && te.push(" ", I("id")), te.push(I("typeParameters")), q.superClass) {
            let De = [h(S, B, I), I("superTypeParameters")], U = S.call((R) => ["extends ", s(R, De, B)], "superClass");
            M ? j.push(n, y(U)) : j.push(" ", U);
          } else
            j.push(i(S, B, I, "extends"));
          if (j.push(i(S, B, I, "mixins"), i(S, B, I, "implements")), M) {
            let De;
            F(q) ? De = [...te, m(j)] : De = m([...te, j]), G.push(y(De, { id: d(q) }));
          } else
            G.push(...te, ...j);
          return G.push(" ", I("body")), G;
        }
        var d = a("heritageGroup");
        function T(S) {
          return g(o, "", { groupId: d(S) });
        }
        function f(S) {
          return ["superClass", "extends", "mixins", "implements"].filter((B) => !!S[B]).length > 1;
        }
        function F(S) {
          return S.typeParameters && !p(S.typeParameters, D.Trailing | D.Line) && !f(S);
        }
        function i(S, B, I, q) {
          let G = S.getValue();
          if (!t(G[q]))
            return "";
          let M = e(S, B, !0, (te) => {
            let { marker: j } = te;
            return j === q;
          });
          return [F(G) ? g(" ", n, { groupId: C(G.typeParameters) }) : n, M, M && o, q, y(m([n, r([",", n], S.map(I, q))]))];
        }
        function h(S, B, I) {
          let q = I("superClass");
          return S.getParentNode().type === "AssignmentExpression" ? y(g(["(", m([c, q]), c, ")"], q)) : q;
        }
        function E(S, B, I) {
          let q = S.getValue(), G = [];
          return t(q.decorators) && G.push(_(S, B, I)), q.accessibility && G.push(q.accessibility + " "), q.readonly && G.push("readonly "), q.declare && G.push("declare "), q.static && G.push("static "), (q.type === "TSAbstractMethodDefinition" || q.abstract) && G.push("abstract "), q.override && G.push("override "), G.push(w(S, B, I)), G;
        }
        function b(S, B, I) {
          let q = S.getValue(), G = [], M = B.semi ? ";" : "";
          return t(q.decorators) && G.push(_(S, B, I)), q.accessibility && G.push(q.accessibility + " "), q.declare && G.push("declare "), q.static && G.push("static "), (q.type === "TSAbstractPropertyDefinition" || q.type === "TSAbstractAccessorProperty" || q.abstract) && G.push("abstract "), q.override && G.push("override "), q.readonly && G.push("readonly "), q.variance && G.push(I("variance")), (q.type === "ClassAccessorProperty" || q.type === "AccessorProperty" || q.type === "TSAbstractAccessorProperty") && G.push("accessor "), G.push(x(S, B, I), k(S), N(S), A(S, B, I)), [P(S, B, I, G, " =", "value"), M];
        }
        l.exports = { printClass: J, printClassMethod: E, printClassProperty: b, printHardlineAfterHeritage: T };
      } }), $s = $({ "src/language-js/print/interface.js"(u, l) {
        ue();
        var { isNonEmptyArray: t } = Gt(), { builders: { join: a, line: s, group: e, indent: r, ifBreak: n } } = wt(), { hasComment: o, identity: c, CommentCheckFlags: y } = ur(), { getTypeParametersGroupId: m } = ti(), { printTypeScriptModifiers: g } = qr();
        function p(D, C, w) {
          let k = D.getValue(), A = [];
          k.declare && A.push("declare "), k.type === "TSInterfaceDeclaration" && A.push(k.abstract ? "abstract " : "", g(D, C, w)), A.push("interface");
          let N = [], x = [];
          k.type !== "InterfaceTypeAnnotation" && N.push(" ", w("id"), w("typeParameters"));
          let P = k.typeParameters && !o(k.typeParameters, y.Trailing | y.Line);
          return t(k.extends) && x.push(P ? n(" ", s, { groupId: m(k.typeParameters) }) : s, "extends ", (k.extends.length === 1 ? c : r)(a([",", s], D.map(w, "extends")))), k.id && o(k.id, y.Trailing) || t(k.extends) ? P ? A.push(e([...N, r(x)])) : A.push(e(r([...N, ...x]))) : A.push(...N, ...x), A.push(" ", w("body")), e(A);
        }
        l.exports = { printInterface: p };
      } }), Rs = $({ "src/language-js/print/module.js"(u, l) {
        ue();
        var { isNonEmptyArray: t } = Gt(), { builders: { softline: a, group: s, indent: e, join: r, line: n, ifBreak: o, hardline: c } } = wt(), { printDanglingComments: y } = Qt(), { hasComment: m, CommentCheckFlags: g, shouldPrintComma: p, needsHardlineAfterDanglingComment: D, isStringLiteral: C, rawText: w } = ur(), { locStart: k, hasSameLoc: A } = or(), { hasDecoratorsBeforeExport: N, printDecoratorsBeforeExport: x } = os();
        function P(b, S, B) {
          let I = b.getValue(), q = S.semi ? ";" : "", G = [], { importKind: M } = I;
          return G.push("import"), M && M !== "value" && G.push(" ", M), G.push(f(b, S, B), T(b, S, B), i(b, S, B), q), G;
        }
        function _(b, S, B) {
          let I = b.getValue(), q = [];
          N(I) && q.push(x(b, S, B));
          let { type: G, exportKind: M, declaration: te } = I;
          return q.push("export"), (I.default || G === "ExportDefaultDeclaration") && q.push(" default"), m(I, g.Dangling) && (q.push(" ", y(b, S, !0)), D(I) && q.push(c)), te ? q.push(" ", B("declaration")) : q.push(M === "type" ? " type" : "", f(b, S, B), T(b, S, B), i(b, S, B)), d(I, S) && q.push(";"), q;
        }
        function J(b, S, B) {
          let I = b.getValue(), q = S.semi ? ";" : "", G = [], { exportKind: M, exported: te } = I;
          return G.push("export"), M === "type" && G.push(" type"), G.push(" *"), te && G.push(" as ", B("exported")), G.push(T(b, S, B), i(b, S, B), q), G;
        }
        function d(b, S) {
          if (!S.semi)
            return !1;
          let { type: B, declaration: I } = b, q = b.default || B === "ExportDefaultDeclaration";
          if (!I)
            return !0;
          let { type: G } = I;
          return !!(q && G !== "ClassDeclaration" && G !== "FunctionDeclaration" && G !== "TSInterfaceDeclaration" && G !== "DeclareClass" && G !== "DeclareFunction" && G !== "TSDeclareFunction" && G !== "EnumDeclaration");
        }
        function T(b, S, B) {
          let I = b.getValue();
          if (!I.source)
            return "";
          let q = [];
          return F(I, S) || q.push(" from"), q.push(" ", B("source")), q;
        }
        function f(b, S, B) {
          let I = b.getValue();
          if (F(I, S))
            return "";
          let q = [" "];
          if (t(I.specifiers)) {
            let G = [], M = [];
            b.each(() => {
              let te = b.getValue().type;
              if (te === "ExportNamespaceSpecifier" || te === "ExportDefaultSpecifier" || te === "ImportNamespaceSpecifier" || te === "ImportDefaultSpecifier")
                G.push(B());
              else if (te === "ExportSpecifier" || te === "ImportSpecifier")
                M.push(B());
              else
                throw new Error(`Unknown specifier type ${JSON.stringify(te)}`);
            }, "specifiers"), q.push(r(", ", G)), M.length > 0 && (G.length > 0 && q.push(", "), M.length > 1 || G.length > 0 || I.specifiers.some((te) => m(te)) ? q.push(s(["{", e([S.bracketSpacing ? n : a, r([",", n], M)]), o(p(S) ? "," : ""), S.bracketSpacing ? n : a, "}"])) : q.push(["{", S.bracketSpacing ? " " : "", ...M, S.bracketSpacing ? " " : "", "}"]));
          } else
            q.push("{}");
          return q;
        }
        function F(b, S) {
          let { type: B, importKind: I, source: q, specifiers: G } = b;
          return B !== "ImportDeclaration" || t(G) || I === "type" ? !1 : !/{\s*}/.test(S.originalText.slice(k(b), k(q)));
        }
        function i(b, S, B) {
          let I = b.getNode();
          return t(I.assertions) ? [" assert {", S.bracketSpacing ? " " : "", r(", ", b.map(B, "assertions")), S.bracketSpacing ? " " : "", "}"] : "";
        }
        function h(b, S, B) {
          let I = b.getNode(), { type: q } = I, G = [], M = q === "ImportSpecifier" ? I.importKind : I.exportKind;
          M && M !== "value" && G.push(M, " ");
          let te = q.startsWith("Import"), j = te ? "imported" : "local", De = te ? "local" : "exported", U = I[j], R = I[De], pe = "", be = "";
          return q === "ExportNamespaceSpecifier" || q === "ImportNamespaceSpecifier" ? pe = "*" : U && (pe = B(j)), R && !E(I) && (be = B(De)), G.push(pe, pe && be ? " as " : "", be), G;
        }
        function E(b) {
          if (b.type !== "ImportSpecifier" && b.type !== "ExportSpecifier")
            return !1;
          let { local: S, [b.type === "ImportSpecifier" ? "imported" : "exported"]: B } = b;
          if (S.type !== B.type || !A(S, B))
            return !1;
          if (C(S))
            return S.value === B.value && w(S) === w(B);
          switch (S.type) {
            case "Identifier":
              return S.name === B.name;
            default:
              return !1;
          }
        }
        l.exports = { printImportDeclaration: P, printExportDeclaration: _, printExportAllDeclaration: J, printModuleSpecifier: h };
      } }), ls = $({ "src/language-js/print/object.js"(u, l) {
        ue();
        var { printDanglingComments: t } = Qt(), { builders: { line: a, softline: s, group: e, indent: r, ifBreak: n, hardline: o } } = wt(), { getLast: c, hasNewlineInRange: y, hasNewline: m, isNonEmptyArray: g } = Gt(), { shouldPrintComma: p, hasComment: D, getComments: C, CommentCheckFlags: w, isNextLineEmpty: k } = ur(), { locStart: A, locEnd: N } = or(), { printOptionalToken: x, printTypeAnnotation: P } = qr(), { shouldHugFunctionParameters: _ } = Zu(), { shouldHugType: J } = ei(), { printHardlineAfterHeritage: d } = mu();
        function T(f, F, i) {
          let h = F.semi ? ";" : "", E = f.getValue(), b;
          E.type === "TSTypeLiteral" ? b = "members" : E.type === "TSInterfaceBody" ? b = "body" : b = "properties";
          let S = E.type === "ObjectTypeAnnotation", B = [b];
          S && B.push("indexers", "callProperties", "internalSlots");
          let I = B.map((X) => E[X][0]).sort((X, se) => A(X) - A(se))[0], q = f.getParentNode(0), G = S && q && (q.type === "InterfaceDeclaration" || q.type === "DeclareInterface" || q.type === "DeclareClass") && f.getName() === "body", M = E.type === "TSInterfaceBody" || G || E.type === "ObjectPattern" && q.type !== "FunctionDeclaration" && q.type !== "FunctionExpression" && q.type !== "ArrowFunctionExpression" && q.type !== "ObjectMethod" && q.type !== "ClassMethod" && q.type !== "ClassPrivateMethod" && q.type !== "AssignmentPattern" && q.type !== "CatchClause" && E.properties.some((X) => X.value && (X.value.type === "ObjectPattern" || X.value.type === "ArrayPattern")) || E.type !== "ObjectPattern" && I && y(F.originalText, A(E), A(I)), te = G ? ";" : E.type === "TSInterfaceBody" || E.type === "TSTypeLiteral" ? n(h, ";") : ",", j = E.type === "RecordExpression" ? "#{" : E.exact ? "{|" : "{", De = E.exact ? "|}" : "}", U = [];
          for (let X of B)
            f.each((se) => {
              let we = se.getValue();
              U.push({ node: we, printed: i(), loc: A(we) });
            }, X);
          B.length > 1 && U.sort((X, se) => X.loc - se.loc);
          let R = [], pe = U.map((X) => {
            let se = [...R, e(X.printed)];
            return R = [te, a], (X.node.type === "TSPropertySignature" || X.node.type === "TSMethodSignature" || X.node.type === "TSConstructSignatureDeclaration") && D(X.node, w.PrettierIgnore) && R.shift(), k(X.node, F) && R.push(o), se;
          });
          if (E.inexact) {
            let X;
            if (D(E, w.Dangling)) {
              let se = D(E, w.Line);
              X = [t(f, F, !0), se || m(F.originalText, N(c(C(E)))) ? o : a, "..."];
            } else
              X = ["..."];
            pe.push([...R, ...X]);
          }
          let be = c(E[b]), fe = !(E.inexact || be && be.type === "RestElement" || be && (be.type === "TSPropertySignature" || be.type === "TSCallSignatureDeclaration" || be.type === "TSMethodSignature" || be.type === "TSConstructSignatureDeclaration") && D(be, w.PrettierIgnore)), Ie;
          if (pe.length === 0) {
            if (!D(E, w.Dangling))
              return [j, De, P(f, F, i)];
            Ie = e([j, t(f, F), s, De, x(f), P(f, F, i)]);
          } else
            Ie = [G && g(E.properties) ? d(q) : "", j, r([F.bracketSpacing ? a : s, ...pe]), n(fe && (te !== "," || p(F)) ? te : ""), F.bracketSpacing ? a : s, De, x(f), P(f, F, i)];
          return f.match((X) => X.type === "ObjectPattern" && !X.decorators, (X, se, we) => _(X) && (se === "params" || se === "parameters" || se === "this" || se === "rest") && we === 0) || f.match(J, (X, se) => se === "typeAnnotation", (X, se) => se === "typeAnnotation", (X, se, we) => _(X) && (se === "params" || se === "parameters" || se === "this" || se === "rest") && we === 0) || !M && f.match((X) => X.type === "ObjectPattern", (X) => X.type === "AssignmentExpression" || X.type === "VariableDeclarator") ? Ie : e(Ie, { shouldBreak: M });
        }
        l.exports = { printObject: T };
      } }), va = $({ "src/language-js/print/flow.js"(u, l) {
        ue();
        var t = lr(), { printDanglingComments: a } = Qt(), { printString: s, printNumber: e } = Gt(), { builders: { hardline: r, softline: n, group: o, indent: c } } = wt(), { getParentExportDeclaration: y, isFunctionNotation: m, isGetterOrSetter: g, rawText: p, shouldPrintComma: D } = ur(), { locStart: C, locEnd: w } = or(), { replaceTextEndOfLine: k } = En(), { printClass: A } = mu(), { printOpaqueType: N, printTypeAlias: x, printIntersectionType: P, printUnionType: _, printFunctionType: J, printTupleType: d, printIndexedAccessType: T } = ei(), { printInterface: f } = $s(), { printTypeParameter: F, printTypeParameters: i } = ti(), { printExportDeclaration: h, printExportAllDeclaration: E } = Rs(), { printArrayItems: b } = Du(), { printObject: S } = ls(), { printPropertyKey: B } = fu(), { printOptionalToken: I, printTypeAnnotation: q, printRestSpread: G } = qr();
        function M(j, De, U) {
          let R = j.getValue(), pe = De.semi ? ";" : "", be = [];
          switch (R.type) {
            case "DeclareClass":
              return te(j, A(j, De, U));
            case "DeclareFunction":
              return te(j, ["function ", U("id"), R.predicate ? " " : "", U("predicate"), pe]);
            case "DeclareModule":
              return te(j, ["module ", U("id"), " ", U("body")]);
            case "DeclareModuleExports":
              return te(j, ["module.exports", ": ", U("typeAnnotation"), pe]);
            case "DeclareVariable":
              return te(j, ["var ", U("id"), pe]);
            case "DeclareOpaqueType":
              return te(j, N(j, De, U));
            case "DeclareInterface":
              return te(j, f(j, De, U));
            case "DeclareTypeAlias":
              return te(j, x(j, De, U));
            case "DeclareExportDeclaration":
              return te(j, h(j, De, U));
            case "DeclareExportAllDeclaration":
              return te(j, E(j, De, U));
            case "OpaqueType":
              return N(j, De, U);
            case "TypeAlias":
              return x(j, De, U);
            case "IntersectionTypeAnnotation":
              return P(j, De, U);
            case "UnionTypeAnnotation":
              return _(j, De, U);
            case "FunctionTypeAnnotation":
              return J(j, De, U);
            case "TupleTypeAnnotation":
              return d(j, De, U);
            case "GenericTypeAnnotation":
              return [U("id"), i(j, De, U, "typeParameters")];
            case "IndexedAccessType":
            case "OptionalIndexedAccessType":
              return T(j, De, U);
            case "TypeAnnotation":
              return U("typeAnnotation");
            case "TypeParameter":
              return F(j, De, U);
            case "TypeofTypeAnnotation":
              return ["typeof ", U("argument")];
            case "ExistsTypeAnnotation":
              return "*";
            case "EmptyTypeAnnotation":
              return "empty";
            case "MixedTypeAnnotation":
              return "mixed";
            case "ArrayTypeAnnotation":
              return [U("elementType"), "[]"];
            case "BooleanLiteralTypeAnnotation":
              return String(R.value);
            case "EnumDeclaration":
              return ["enum ", U("id"), " ", U("body")];
            case "EnumBooleanBody":
            case "EnumNumberBody":
            case "EnumStringBody":
            case "EnumSymbolBody": {
              if (R.type === "EnumSymbolBody" || R.explicitType) {
                let fe = null;
                switch (R.type) {
                  case "EnumBooleanBody":
                    fe = "boolean";
                    break;
                  case "EnumNumberBody":
                    fe = "number";
                    break;
                  case "EnumStringBody":
                    fe = "string";
                    break;
                  case "EnumSymbolBody":
                    fe = "symbol";
                    break;
                }
                be.push("of ", fe, " ");
              }
              if (R.members.length === 0 && !R.hasUnknownMembers)
                be.push(o(["{", a(j, De), n, "}"]));
              else {
                let fe = R.members.length > 0 ? [r, b(j, De, "members", U), R.hasUnknownMembers || D(De) ? "," : ""] : [];
                be.push(o(["{", c([...fe, ...R.hasUnknownMembers ? [r, "..."] : []]), a(j, De, !0), r, "}"]));
              }
              return be;
            }
            case "EnumBooleanMember":
            case "EnumNumberMember":
            case "EnumStringMember":
              return [U("id"), " = ", typeof R.init == "object" ? U("init") : String(R.init)];
            case "EnumDefaultedMember":
              return U("id");
            case "FunctionTypeParam": {
              let fe = R.name ? U("name") : j.getParentNode().this === R ? "this" : "";
              return [fe, I(j), fe ? ": " : "", U("typeAnnotation")];
            }
            case "InterfaceDeclaration":
            case "InterfaceTypeAnnotation":
              return f(j, De, U);
            case "ClassImplements":
            case "InterfaceExtends":
              return [U("id"), U("typeParameters")];
            case "NullableTypeAnnotation":
              return ["?", U("typeAnnotation")];
            case "Variance": {
              let { kind: fe } = R;
              return t.ok(fe === "plus" || fe === "minus"), fe === "plus" ? "+" : "-";
            }
            case "ObjectTypeCallProperty":
              return R.static && be.push("static "), be.push(U("value")), be;
            case "ObjectTypeIndexer":
              return [R.static ? "static " : "", R.variance ? U("variance") : "", "[", U("id"), R.id ? ": " : "", U("key"), "]: ", U("value")];
            case "ObjectTypeProperty": {
              let fe = "";
              return R.proto ? fe = "proto " : R.static && (fe = "static "), [fe, g(R) ? R.kind + " " : "", R.variance ? U("variance") : "", B(j, De, U), I(j), m(R) ? "" : ": ", U("value")];
            }
            case "ObjectTypeAnnotation":
              return S(j, De, U);
            case "ObjectTypeInternalSlot":
              return [R.static ? "static " : "", "[[", U("id"), "]]", I(j), R.method ? "" : ": ", U("value")];
            case "ObjectTypeSpreadProperty":
              return G(j, De, U);
            case "QualifiedTypeofIdentifier":
            case "QualifiedTypeIdentifier":
              return [U("qualification"), ".", U("id")];
            case "StringLiteralTypeAnnotation":
              return k(s(p(R), De));
            case "NumberLiteralTypeAnnotation":
              t.strictEqual(typeof R.value, "number");
            case "BigIntLiteralTypeAnnotation":
              return R.extra ? e(R.extra.raw) : e(R.raw);
            case "TypeCastExpression":
              return ["(", U("expression"), q(j, De, U), ")"];
            case "TypeParameterDeclaration":
            case "TypeParameterInstantiation": {
              let fe = i(j, De, U, "params");
              if (De.parser === "flow") {
                let Ie = C(R), X = w(R), se = De.originalText.lastIndexOf("/*", Ie), we = De.originalText.indexOf("*/", X);
                if (se !== -1 && we !== -1) {
                  let _e = De.originalText.slice(se + 2, we).trim();
                  if (_e.startsWith("::") && !_e.includes("/*") && !_e.includes("*/"))
                    return ["/*:: ", fe, " */"];
                }
              }
              return fe;
            }
            case "InferredPredicate":
              return "%checks";
            case "DeclaredPredicate":
              return ["%checks(", U("value"), ")"];
            case "AnyTypeAnnotation":
              return "any";
            case "BooleanTypeAnnotation":
              return "boolean";
            case "BigIntTypeAnnotation":
              return "bigint";
            case "NullLiteralTypeAnnotation":
              return "null";
            case "NumberTypeAnnotation":
              return "number";
            case "SymbolTypeAnnotation":
              return "symbol";
            case "StringTypeAnnotation":
              return "string";
            case "VoidTypeAnnotation":
              return "void";
            case "ThisTypeAnnotation":
              return "this";
            case "Node":
            case "Printable":
            case "SourceLocation":
            case "Position":
            case "Statement":
            case "Function":
            case "Pattern":
            case "Expression":
            case "Declaration":
            case "Specifier":
            case "NamedSpecifier":
            case "Comment":
            case "MemberTypeAnnotation":
            case "Type":
              throw new Error("unprintable type: " + JSON.stringify(R.type));
          }
        }
        function te(j, De) {
          let U = y(j);
          return U ? (t.strictEqual(U.type, "DeclareExportDeclaration"), De) : ["declare ", De];
        }
        l.exports = { printFlow: M };
      } }), ba = $({ "src/language-js/utils/is-ts-keyword-type.js"(u, l) {
        ue();
        function t(a) {
          let { type: s } = a;
          return s.startsWith("TS") && s.endsWith("Keyword");
        }
        l.exports = t;
      } }), Ms = $({ "src/language-js/print/ternary.js"(u, l) {
        ue();
        var { hasNewlineInRange: t } = Gt(), { isJsxNode: a, getComments: s, isCallExpression: e, isMemberExpression: r, isTSTypeExpression: n } = ur(), { locStart: o, locEnd: c } = or(), y = vn(), { builders: { line: m, softline: g, group: p, indent: D, align: C, ifBreak: w, dedent: k, breakParent: A } } = wt();
        function N(d) {
          let T = [d];
          for (let f = 0; f < T.length; f++) {
            let F = T[f];
            for (let i of ["test", "consequent", "alternate"]) {
              let h = F[i];
              if (a(h))
                return !0;
              h.type === "ConditionalExpression" && T.push(h);
            }
          }
          return !1;
        }
        function x(d, T, f) {
          let F = d.getValue(), i = F.type === "ConditionalExpression", h = i ? "alternate" : "falseType", E = d.getParentNode(), b = i ? f("test") : [f("checkType"), " ", "extends", " ", f("extendsType")];
          return E.type === F.type && E[h] === F ? C(2, b) : b;
        }
        var P = /* @__PURE__ */ new Map([["AssignmentExpression", "right"], ["VariableDeclarator", "init"], ["ReturnStatement", "argument"], ["ThrowStatement", "argument"], ["UnaryExpression", "argument"], ["YieldExpression", "argument"]]);
        function _(d) {
          let T = d.getValue();
          if (T.type !== "ConditionalExpression")
            return !1;
          let f, F = T;
          for (let i = 0; !f; i++) {
            let h = d.getParentNode(i);
            if (e(h) && h.callee === F || r(h) && h.object === F || h.type === "TSNonNullExpression" && h.expression === F) {
              F = h;
              continue;
            }
            h.type === "NewExpression" && h.callee === F || n(h) && h.expression === F ? (f = d.getParentNode(i + 1), F = h) : f = h;
          }
          return F === T ? !1 : f[P.get(f.type)] === F;
        }
        function J(d, T, f) {
          let F = d.getValue(), i = F.type === "ConditionalExpression", h = i ? "consequent" : "trueType", E = i ? "alternate" : "falseType", b = i ? ["test"] : ["checkType", "extendsType"], S = F[h], B = F[E], I = [], q = !1, G = d.getParentNode(), M = G.type === F.type && b.some((we) => G[we] === F), te = G.type === F.type && !M, j, De, U = 0;
          do
            De = j || F, j = d.getParentNode(U), U++;
          while (j && j.type === F.type && b.every((we) => j[we] !== De));
          let R = j || G, pe = De;
          if (i && (a(F[b[0]]) || a(S) || a(B) || N(pe))) {
            q = !0, te = !0;
            let we = (it) => [w("("), D([g, it]), g, w(")")], _e = (it) => it.type === "NullLiteral" || it.type === "Literal" && it.value === null || it.type === "Identifier" && it.name === "undefined";
            I.push(" ? ", _e(S) ? f(h) : we(f(h)), " : ", B.type === F.type || _e(B) ? f(E) : we(f(E)));
          } else {
            let we = [m, "? ", S.type === F.type ? w("", "(") : "", C(2, f(h)), S.type === F.type ? w("", ")") : "", m, ": ", B.type === F.type ? f(E) : C(2, f(E))];
            I.push(G.type !== F.type || G[E] === F || M ? we : T.useTabs ? k(D(we)) : C(Math.max(0, T.tabWidth - 2), we));
          }
          let be = [...b.map((we) => s(F[we])), s(S), s(B)].flat().some((we) => y(we) && t(T.originalText, o(we), c(we))), fe = (we) => G === R ? p(we, { shouldBreak: be }) : be ? [we, A] : we, Ie = !q && (r(G) || G.type === "NGPipeExpression" && G.left === F) && !G.computed, X = _(d), se = fe([x(d, T, f), te ? I : D(I), i && Ie && !X ? g : ""]);
          return M || X ? p([D([g, se]), g]) : se;
        }
        l.exports = { printTernary: J };
      } }), qs = $({ "src/language-js/print/statement.js"(u, l) {
        ue();
        var { builders: { hardline: t } } = wt(), a = Ln(), { getLeftSidePathName: s, hasNakedLeftSide: e, isJsxNode: r, isTheOnlyJsxElementInMarkdown: n, hasComment: o, CommentCheckFlags: c, isNextLineEmpty: y } = ur(), { shouldPrintParamsWithoutParens: m } = ri();
        function g(x, P, _, J) {
          let d = x.getValue(), T = [], f = d.type === "ClassBody", F = p(d[J]);
          return x.each((i, h, E) => {
            let b = i.getValue();
            if (b.type === "EmptyStatement")
              return;
            let S = _();
            !P.semi && !f && !n(P, i) && D(i, P) ? o(b, c.Leading) ? T.push(_([], { needsSemi: !0 })) : T.push(";", S) : T.push(S), !P.semi && f && A(b) && N(b, E[h + 1]) && T.push(";"), b !== F && (T.push(t), y(b, P) && T.push(t));
          }, J), T;
        }
        function p(x) {
          for (let P = x.length - 1; P >= 0; P--) {
            let _ = x[P];
            if (_.type !== "EmptyStatement")
              return _;
          }
        }
        function D(x, P) {
          return x.getNode().type !== "ExpressionStatement" ? !1 : x.call((_) => C(_, P), "expression");
        }
        function C(x, P) {
          let _ = x.getValue();
          switch (_.type) {
            case "ParenthesizedExpression":
            case "TypeCastExpression":
            case "ArrayExpression":
            case "ArrayPattern":
            case "TemplateLiteral":
            case "TemplateElement":
            case "RegExpLiteral":
              return !0;
            case "ArrowFunctionExpression": {
              if (!m(x, P))
                return !0;
              break;
            }
            case "UnaryExpression": {
              let { prefix: J, operator: d } = _;
              if (J && (d === "+" || d === "-"))
                return !0;
              break;
            }
            case "BindExpression": {
              if (!_.object)
                return !0;
              break;
            }
            case "Literal": {
              if (_.regex)
                return !0;
              break;
            }
            default:
              if (r(_))
                return !0;
          }
          return a(x, P) ? !0 : e(_) ? x.call((J) => C(J, P), ...s(x, _)) : !1;
        }
        function w(x, P, _) {
          return g(x, P, _, "body");
        }
        function k(x, P, _) {
          return g(x, P, _, "consequent");
        }
        var A = (x) => {
          let { type: P } = x;
          return P === "ClassProperty" || P === "PropertyDefinition" || P === "ClassPrivateProperty" || P === "ClassAccessorProperty" || P === "AccessorProperty" || P === "TSAbstractPropertyDefinition" || P === "TSAbstractAccessorProperty";
        };
        function N(x, P) {
          let { type: _, name: J } = x.key;
          if (!x.computed && _ === "Identifier" && (J === "static" || J === "get" || J === "set" || J === "accessor") && !x.value && !x.typeAnnotation)
            return !0;
          if (!P || P.static || P.accessibility)
            return !1;
          if (!P.computed) {
            let d = P.key && P.key.name;
            if (d === "in" || d === "instanceof")
              return !0;
          }
          if (A(P) && P.variance && !P.static && !P.declare)
            return !0;
          switch (P.type) {
            case "ClassProperty":
            case "PropertyDefinition":
            case "TSAbstractPropertyDefinition":
              return P.computed;
            case "MethodDefinition":
            case "TSAbstractMethodDefinition":
            case "ClassMethod":
            case "ClassPrivateMethod": {
              if ((P.value ? P.value.async : P.async) || P.kind === "get" || P.kind === "set")
                return !1;
              let d = P.value ? P.value.generator : P.generator;
              return !!(P.computed || d);
            }
            case "TSIndexSignature":
              return !0;
          }
          return !1;
        }
        l.exports = { printBody: w, printSwitchCaseConsequent: k };
      } }), Vs = $({ "src/language-js/print/block.js"(u, l) {
        ue();
        var { printDanglingComments: t } = Qt(), { isNonEmptyArray: a } = Gt(), { builders: { hardline: s, indent: e } } = wt(), { hasComment: r, CommentCheckFlags: n, isNextLineEmpty: o } = ur(), { printHardlineAfterHeritage: c } = mu(), { printBody: y } = qs();
        function m(p, D, C) {
          let w = p.getValue(), k = [];
          if (w.type === "StaticBlock" && k.push("static "), w.type === "ClassBody" && a(w.body)) {
            let N = p.getParentNode();
            k.push(c(N));
          }
          k.push("{");
          let A = g(p, D, C);
          if (A)
            k.push(e([s, A]), s);
          else {
            let N = p.getParentNode(), x = p.getParentNode(1);
            N.type === "ArrowFunctionExpression" || N.type === "FunctionExpression" || N.type === "FunctionDeclaration" || N.type === "ObjectMethod" || N.type === "ClassMethod" || N.type === "ClassPrivateMethod" || N.type === "ForStatement" || N.type === "WhileStatement" || N.type === "DoWhileStatement" || N.type === "DoExpression" || N.type === "CatchClause" && !x.finalizer || N.type === "TSModuleDeclaration" || N.type === "TSDeclareFunction" || w.type === "StaticBlock" || w.type === "ClassBody" || k.push(s);
          }
          return k.push("}"), k;
        }
        function g(p, D, C) {
          let w = p.getValue(), k = a(w.directives), A = w.body.some((P) => P.type !== "EmptyStatement"), N = r(w, n.Dangling);
          if (!k && !A && !N)
            return "";
          let x = [];
          if (k && p.each((P, _, J) => {
            x.push(C()), (_ < J.length - 1 || A || N) && (x.push(s), o(P.getValue(), D) && x.push(s));
          }, "directives"), A && x.push(y(p, D, C)), N && x.push(t(p, D, !0)), w.type === "Program") {
            let P = p.getParentNode();
            (!P || P.type !== "ModuleExpression") && x.push(s);
          }
          return x;
        }
        l.exports = { printBlock: m, printBlockBody: g };
      } }), Sa = $({ "src/language-js/print/typescript.js"(u, l) {
        ue();
        var { printDanglingComments: t } = Qt(), { hasNewlineInRange: a } = Gt(), { builders: { join: s, line: e, hardline: r, softline: n, group: o, indent: c, conditionalGroup: y, ifBreak: m } } = wt(), { isStringLiteral: g, getTypeScriptMappedTypeModifier: p, shouldPrintComma: D, isCallExpression: C, isMemberExpression: w } = ur(), k = ba(), { locStart: A, locEnd: N } = or(), { printOptionalToken: x, printTypeScriptModifiers: P } = qr(), { printTernary: _ } = Ms(), { printFunctionParameters: J, shouldGroupFunctionParameters: d } = Zu(), { printTemplateLiteral: T } = jn(), { printArrayItems: f } = Du(), { printObject: F } = ls(), { printClassProperty: i, printClassMethod: h } = mu(), { printTypeParameter: E, printTypeParameters: b } = ti(), { printPropertyKey: S } = fu(), { printFunction: B, printMethodInternal: I } = ri(), { printInterface: q } = $s(), { printBlock: G } = Vs(), { printTypeAlias: M, printIntersectionType: te, printUnionType: j, printFunctionType: De, printTupleType: U, printIndexedAccessType: R, printJSDocType: pe } = ei();
        function be(fe, Ie, X) {
          let se = fe.getValue();
          if (!se.type.startsWith("TS"))
            return;
          if (k(se))
            return se.type.slice(2, -7).toLowerCase();
          let we = Ie.semi ? ";" : "", _e = [];
          switch (se.type) {
            case "TSThisType":
              return "this";
            case "TSTypeAssertion": {
              let it = !(se.expression.type === "ArrayExpression" || se.expression.type === "ObjectExpression"), ae = o(["<", c([n, X("typeAnnotation")]), n, ">"]), Q = [m("("), c([n, X("expression")]), n, m(")")];
              return it ? y([[ae, X("expression")], [ae, o(Q, { shouldBreak: !0 })], [ae, X("expression")]]) : o([ae, X("expression")]);
            }
            case "TSDeclareFunction":
              return B(fe, X, Ie);
            case "TSExportAssignment":
              return ["export = ", X("expression"), we];
            case "TSModuleBlock":
              return G(fe, Ie, X);
            case "TSInterfaceBody":
            case "TSTypeLiteral":
              return F(fe, Ie, X);
            case "TSTypeAliasDeclaration":
              return M(fe, Ie, X);
            case "TSQualifiedName":
              return s(".", [X("left"), X("right")]);
            case "TSAbstractMethodDefinition":
            case "TSDeclareMethod":
              return h(fe, Ie, X);
            case "TSAbstractAccessorProperty":
            case "TSAbstractPropertyDefinition":
              return i(fe, Ie, X);
            case "TSInterfaceHeritage":
            case "TSExpressionWithTypeArguments":
              return _e.push(X("expression")), se.typeParameters && _e.push(X("typeParameters")), _e;
            case "TSTemplateLiteralType":
              return T(fe, X, Ie);
            case "TSNamedTupleMember":
              return [X("label"), se.optional ? "?" : "", ": ", X("elementType")];
            case "TSRestType":
              return ["...", X("typeAnnotation")];
            case "TSOptionalType":
              return [X("typeAnnotation"), "?"];
            case "TSInterfaceDeclaration":
              return q(fe, Ie, X);
            case "TSClassImplements":
              return [X("expression"), X("typeParameters")];
            case "TSTypeParameterDeclaration":
            case "TSTypeParameterInstantiation":
              return b(fe, Ie, X, "params");
            case "TSTypeParameter":
              return E(fe, Ie, X);
            case "TSSatisfiesExpression":
            case "TSAsExpression": {
              let it = se.type === "TSAsExpression" ? "as" : "satisfies";
              _e.push(X("expression"), ` ${it} `, X("typeAnnotation"));
              let ae = fe.getParentNode();
              return C(ae) && ae.callee === se || w(ae) && ae.object === se ? o([c([n, ..._e]), n]) : _e;
            }
            case "TSArrayType":
              return [X("elementType"), "[]"];
            case "TSPropertySignature":
              return se.readonly && _e.push("readonly "), _e.push(S(fe, Ie, X), x(fe)), se.typeAnnotation && _e.push(": ", X("typeAnnotation")), se.initializer && _e.push(" = ", X("initializer")), _e;
            case "TSParameterProperty":
              return se.accessibility && _e.push(se.accessibility + " "), se.export && _e.push("export "), se.static && _e.push("static "), se.override && _e.push("override "), se.readonly && _e.push("readonly "), _e.push(X("parameter")), _e;
            case "TSTypeQuery":
              return ["typeof ", X("exprName"), X("typeParameters")];
            case "TSIndexSignature": {
              let it = fe.getParentNode(), ae = se.parameters.length > 1 ? m(D(Ie) ? "," : "") : "", Q = o([c([n, s([", ", n], fe.map(X, "parameters"))]), ae, n]);
              return [se.export ? "export " : "", se.accessibility ? [se.accessibility, " "] : "", se.static ? "static " : "", se.readonly ? "readonly " : "", se.declare ? "declare " : "", "[", se.parameters ? Q : "", se.typeAnnotation ? "]: " : "]", se.typeAnnotation ? X("typeAnnotation") : "", it.type === "ClassBody" ? we : ""];
            }
            case "TSTypePredicate":
              return [se.asserts ? "asserts " : "", X("parameterName"), se.typeAnnotation ? [" is ", X("typeAnnotation")] : ""];
            case "TSNonNullExpression":
              return [X("expression"), "!"];
            case "TSImportType":
              return [se.isTypeOf ? "typeof " : "", "import(", X(se.parameter ? "parameter" : "argument"), ")", se.qualifier ? [".", X("qualifier")] : "", b(fe, Ie, X, "typeParameters")];
            case "TSLiteralType":
              return X("literal");
            case "TSIndexedAccessType":
              return R(fe, Ie, X);
            case "TSConstructSignatureDeclaration":
            case "TSCallSignatureDeclaration":
            case "TSConstructorType": {
              if (se.type === "TSConstructorType" && se.abstract && _e.push("abstract "), se.type !== "TSCallSignatureDeclaration" && _e.push("new "), _e.push(o(J(fe, X, Ie, !1, !0))), se.returnType || se.typeAnnotation) {
                let it = se.type === "TSConstructorType";
                _e.push(it ? " => " : ": ", X("returnType"), X("typeAnnotation"));
              }
              return _e;
            }
            case "TSTypeOperator":
              return [se.operator, " ", X("typeAnnotation")];
            case "TSMappedType": {
              let it = a(Ie.originalText, A(se), N(se));
              return o(["{", c([Ie.bracketSpacing ? e : n, X("typeParameter"), se.optional ? p(se.optional, "?") : "", se.typeAnnotation ? ": " : "", X("typeAnnotation"), m(we)]), t(fe, Ie, !0), Ie.bracketSpacing ? e : n, "}"], { shouldBreak: it });
            }
            case "TSMethodSignature": {
              let it = se.kind && se.kind !== "method" ? `${se.kind} ` : "";
              _e.push(se.accessibility ? [se.accessibility, " "] : "", it, se.export ? "export " : "", se.static ? "static " : "", se.readonly ? "readonly " : "", se.abstract ? "abstract " : "", se.declare ? "declare " : "", se.computed ? "[" : "", X("key"), se.computed ? "]" : "", x(fe));
              let ae = J(fe, X, Ie, !1, !0), Q = se.returnType ? "returnType" : "typeAnnotation", me = se[Q], Ce = me ? X(Q) : "", Re = d(se, Ce);
              return _e.push(Re ? o(ae) : ae), me && _e.push(": ", o(Ce)), o(_e);
            }
            case "TSNamespaceExportDeclaration":
              return _e.push("export as namespace ", X("id")), Ie.semi && _e.push(";"), o(_e);
            case "TSEnumDeclaration":
              return se.declare && _e.push("declare "), se.modifiers && _e.push(P(fe, Ie, X)), se.const && _e.push("const "), _e.push("enum ", X("id"), " "), se.members.length === 0 ? _e.push(o(["{", t(fe, Ie), n, "}"])) : _e.push(o(["{", c([r, f(fe, Ie, "members", X), D(Ie, "es5") ? "," : ""]), t(fe, Ie, !0), r, "}"])), _e;
            case "TSEnumMember":
              return se.computed ? _e.push("[", X("id"), "]") : _e.push(X("id")), se.initializer && _e.push(" = ", X("initializer")), _e;
            case "TSImportEqualsDeclaration":
              return se.isExport && _e.push("export "), _e.push("import "), se.importKind && se.importKind !== "value" && _e.push(se.importKind, " "), _e.push(X("id"), " = ", X("moduleReference")), Ie.semi && _e.push(";"), o(_e);
            case "TSExternalModuleReference":
              return ["require(", X("expression"), ")"];
            case "TSModuleDeclaration": {
              let it = fe.getParentNode(), ae = g(se.id), Q = it.type === "TSModuleDeclaration", me = se.body && se.body.type === "TSModuleDeclaration";
              if (Q)
                _e.push(".");
              else {
                se.declare && _e.push("declare "), _e.push(P(fe, Ie, X));
                let Ce = Ie.originalText.slice(A(se), A(se.id));
                se.id.type === "Identifier" && se.id.name === "global" && !/namespace|module/.test(Ce) || _e.push(ae || /(?:^|\s)module(?:\s|$)/.test(Ce) ? "module " : "namespace ");
              }
              return _e.push(X("id")), me ? _e.push(X("body")) : se.body ? _e.push(" ", o(X("body"))) : _e.push(we), _e;
            }
            case "TSConditionalType":
              return _(fe, Ie, X);
            case "TSInferType":
              return ["infer", " ", X("typeParameter")];
            case "TSIntersectionType":
              return te(fe, Ie, X);
            case "TSUnionType":
              return j(fe, Ie, X);
            case "TSFunctionType":
              return De(fe, Ie, X);
            case "TSTupleType":
              return U(fe, Ie, X);
            case "TSTypeReference":
              return [X("typeName"), b(fe, Ie, X, "typeParameters")];
            case "TSTypeAnnotation":
              return X("typeAnnotation");
            case "TSEmptyBodyFunctionExpression":
              return I(fe, Ie, X);
            case "TSJSDocAllType":
              return "*";
            case "TSJSDocUnknownType":
              return "?";
            case "TSJSDocNullableType":
              return pe(fe, X, "?");
            case "TSJSDocNonNullableType":
              return pe(fe, X, "!");
            case "TSInstantiationExpression":
              return [X("expression"), X("typeParameters")];
            default:
              throw new Error(`Unknown TypeScript node type: ${JSON.stringify(se.type)}.`);
          }
        }
        l.exports = { printTypescript: be };
      } }), xa = $({ "src/language-js/print/comment.js"(u, l) {
        ue();
        var { hasNewline: t } = Gt(), { builders: { join: a, hardline: s }, utils: { replaceTextEndOfLine: e } } = wt(), { isLineComment: r } = ur(), { locStart: n, locEnd: o } = or(), c = vn();
        function y(p, D) {
          let C = p.getValue();
          if (r(C))
            return D.originalText.slice(n(C), o(C)).trimEnd();
          if (c(C)) {
            if (m(C)) {
              let A = g(C);
              return C.trailing && !t(D.originalText, n(C), { backwards: !0 }) ? [s, A] : A;
            }
            let w = o(C), k = D.originalText.slice(w - 3, w) === "*-/";
            return ["/*", e(C.value), k ? "*-/" : "*/"];
          }
          throw new Error("Not a comment: " + JSON.stringify(C));
        }
        function m(p) {
          let D = `*${p.value}*`.split(`
`);
          return D.length > 1 && D.every((C) => C.trim()[0] === "*");
        }
        function g(p) {
          let D = p.value.split(`
`);
          return ["/*", a(s, D.map((C, w) => w === 0 ? C.trimEnd() : " " + (w < D.length - 1 ? C.trim() : C.trimStart()))), "*/"];
        }
        l.exports = { printComment: y };
      } }), Ta = $({ "src/language-js/print/literal.js"(u, l) {
        ue();
        var { printString: t, printNumber: a } = Gt(), { replaceTextEndOfLine: s } = En(), { printDirective: e } = qr();
        function r(y, m) {
          let g = y.getNode();
          switch (g.type) {
            case "RegExpLiteral":
              return c(g);
            case "BigIntLiteral":
              return o(g.bigint || g.extra.raw);
            case "NumericLiteral":
              return a(g.extra.raw);
            case "StringLiteral":
              return s(t(g.extra.raw, m));
            case "NullLiteral":
              return "null";
            case "BooleanLiteral":
              return String(g.value);
            case "DecimalLiteral":
              return a(g.value) + "m";
            case "Literal": {
              if (g.regex)
                return c(g.regex);
              if (g.bigint)
                return o(g.raw);
              if (g.decimal)
                return a(g.decimal) + "m";
              let { value: p } = g;
              return typeof p == "number" ? a(g.raw) : typeof p == "string" ? n(y) ? e(g.raw, m) : s(t(g.raw, m)) : String(p);
            }
          }
        }
        function n(y) {
          if (y.getName() !== "expression")
            return;
          let m = y.getParentNode();
          return m.type === "ExpressionStatement" && m.directive;
        }
        function o(y) {
          return y.toLowerCase();
        }
        function c(y) {
          let { pattern: m, flags: g } = y;
          return g = [...g].sort().join(""), `/${m}/${g}`;
        }
        l.exports = { printLiteral: r };
      } }), Ba = $({ "src/language-js/printer-estree.js"(u, l) {
        ue();
        var { printDanglingComments: t } = Qt(), { hasNewline: a } = Gt(), { builders: { join: s, line: e, hardline: r, softline: n, group: o, indent: c }, utils: { replaceTextEndOfLine: y } } = wt(), m = la(), g = pa(), { insertPragma: p } = ks(), D = Ps(), C = Ln(), w = Is(), { hasFlowShorthandAnnotationComment: k, hasComment: A, CommentCheckFlags: N, isTheOnlyJsxElementInMarkdown: x, isLineComment: P, isNextLineEmpty: _, needsHardlineAfterDanglingComment: J, hasIgnoreComment: d, isCallExpression: T, isMemberExpression: f, markerForIfWithoutBlockAndSameLineComment: F } = ur(), { locStart: i, locEnd: h } = or(), E = vn(), { printHtmlBinding: b, isVueEventBindingExpression: S } = Ea(), { printAngular: B } = Ca(), { printJsx: I, hasJsxIgnoreComment: q } = Fa(), { printFlow: G } = va(), { printTypescript: M } = Sa(), { printOptionalToken: te, printBindExpressionCallee: j, printTypeAnnotation: De, adjustClause: U, printRestSpread: R, printDefiniteToken: pe, printDirective: be } = qr(), { printImportDeclaration: fe, printExportDeclaration: Ie, printExportAllDeclaration: X, printModuleSpecifier: se } = Rs(), { printTernary: we } = Ms(), { printTemplateLiteral: _e } = jn(), { printArray: it } = Du(), { printObject: ae } = ls(), { printClass: Q, printClassMethod: me, printClassProperty: Ce } = mu(), { printProperty: Re } = fu(), { printFunction: Xe, printArrowFunction: Ye, printMethod: Ct, printReturnStatement: Rt, printThrowStatement: It } = ri(), { printCallExpression: Et } = Os(), { printVariableDeclarator: bt, printAssignmentExpression: xe } = du(), { printBinaryishExpression: H } = as(), { printSwitchCaseConsequent: ke } = qs(), { printMemberExpression: oe } = Ls(), { printBlock: Be, printBlockBody: pt } = Vs(), { printComment: ut } = xa(), { printLiteral: Le } = Ta(), { printDecorators: v } = os();
        function K(tt, ht, Ke, pr) {
          let dt = ye(tt, ht, Ke, pr);
          if (!dt)
            return "";
          let ar = tt.getValue(), { type: Dt } = ar;
          if (Dt === "ClassMethod" || Dt === "ClassPrivateMethod" || Dt === "ClassProperty" || Dt === "ClassAccessorProperty" || Dt === "AccessorProperty" || Dt === "TSAbstractAccessorProperty" || Dt === "PropertyDefinition" || Dt === "TSAbstractPropertyDefinition" || Dt === "ClassPrivateProperty" || Dt === "MethodDefinition" || Dt === "TSAbstractMethodDefinition" || Dt === "TSDeclareMethod")
            return dt;
          let Tt = [dt], jt = v(tt, ht, Ke), tr = ar.type === "ClassExpression" && jt;
          if (jt && (Tt = [...jt, dt], !tr))
            return o(Tt);
          if (!C(tt, ht))
            return pr && pr.needsSemi && Tt.unshift(";"), Tt.length === 1 && Tt[0] === dt ? dt : Tt;
          if (tr && (Tt = [c([e, ...Tt])]), Tt.unshift("("), pr && pr.needsSemi && Tt.unshift(";"), k(ar)) {
            let [ft] = ar.trailingComments;
            Tt.push(" /*", ft.value.trimStart(), "*/"), ft.printed = !0;
          }
          return tr && Tt.push(e), Tt.push(")"), Tt;
        }
        function ye(tt, ht, Ke, pr) {
          let dt = tt.getValue(), ar = ht.semi ? ";" : "";
          if (!dt)
            return "";
          if (typeof dt == "string")
            return dt;
          for (let Tt of [Le, b, B, I, G, M]) {
            let jt = Tt(tt, ht, Ke);
            if (typeof jt < "u")
              return jt;
          }
          let Dt = [];
          switch (dt.type) {
            case "JsExpressionRoot":
              return Ke("node");
            case "JsonRoot":
              return [Ke("node"), r];
            case "File":
              return dt.program && dt.program.interpreter && Dt.push(Ke(["program", "interpreter"])), Dt.push(Ke("program")), Dt;
            case "Program":
              return pt(tt, ht, Ke);
            case "EmptyStatement":
              return "";
            case "ExpressionStatement": {
              if (ht.parser === "__vue_event_binding" || ht.parser === "__vue_ts_event_binding") {
                let jt = tt.getParentNode();
                if (jt.type === "Program" && jt.body.length === 1 && jt.body[0] === dt)
                  return [Ke("expression"), S(dt.expression) ? ";" : ""];
              }
              let Tt = t(tt, ht, !0, (jt) => {
                let { marker: tr } = jt;
                return tr === F;
              });
              return [Ke("expression"), x(ht, tt) ? "" : ar, Tt ? [" ", Tt] : ""];
            }
            case "ParenthesizedExpression":
              return !A(dt.expression) && (dt.expression.type === "ObjectExpression" || dt.expression.type === "ArrayExpression") ? ["(", Ke("expression"), ")"] : o(["(", c([n, Ke("expression")]), n, ")"]);
            case "AssignmentExpression":
              return xe(tt, ht, Ke);
            case "VariableDeclarator":
              return bt(tt, ht, Ke);
            case "BinaryExpression":
            case "LogicalExpression":
              return H(tt, ht, Ke);
            case "AssignmentPattern":
              return [Ke("left"), " = ", Ke("right")];
            case "OptionalMemberExpression":
            case "MemberExpression":
              return oe(tt, ht, Ke);
            case "MetaProperty":
              return [Ke("meta"), ".", Ke("property")];
            case "BindExpression":
              return dt.object && Dt.push(Ke("object")), Dt.push(o(c([n, j(tt, ht, Ke)]))), Dt;
            case "Identifier":
              return [dt.name, te(tt), pe(tt), De(tt, ht, Ke)];
            case "V8IntrinsicIdentifier":
              return ["%", dt.name];
            case "SpreadElement":
            case "SpreadElementPattern":
            case "SpreadProperty":
            case "SpreadPropertyPattern":
            case "RestElement":
              return R(tt, ht, Ke);
            case "FunctionDeclaration":
            case "FunctionExpression":
              return Xe(tt, Ke, ht, pr);
            case "ArrowFunctionExpression":
              return Ye(tt, ht, Ke, pr);
            case "YieldExpression":
              return Dt.push("yield"), dt.delegate && Dt.push("*"), dt.argument && Dt.push(" ", Ke("argument")), Dt;
            case "AwaitExpression": {
              if (Dt.push("await"), dt.argument) {
                Dt.push(" ", Ke("argument"));
                let Tt = tt.getParentNode();
                if (T(Tt) && Tt.callee === dt || f(Tt) && Tt.object === dt) {
                  Dt = [c([n, ...Dt]), n];
                  let jt = tt.findAncestor((tr) => tr.type === "AwaitExpression" || tr.type === "BlockStatement");
                  if (!jt || jt.type !== "AwaitExpression")
                    return o(Dt);
                }
              }
              return Dt;
            }
            case "ExportDefaultDeclaration":
            case "ExportNamedDeclaration":
              return Ie(tt, ht, Ke);
            case "ExportAllDeclaration":
              return X(tt, ht, Ke);
            case "ImportDeclaration":
              return fe(tt, ht, Ke);
            case "ImportSpecifier":
            case "ExportSpecifier":
            case "ImportNamespaceSpecifier":
            case "ExportNamespaceSpecifier":
            case "ImportDefaultSpecifier":
            case "ExportDefaultSpecifier":
              return se(tt, ht, Ke);
            case "ImportAttribute":
              return [Ke("key"), ": ", Ke("value")];
            case "Import":
              return "import";
            case "BlockStatement":
            case "StaticBlock":
            case "ClassBody":
              return Be(tt, ht, Ke);
            case "ThrowStatement":
              return It(tt, ht, Ke);
            case "ReturnStatement":
              return Rt(tt, ht, Ke);
            case "NewExpression":
            case "ImportExpression":
            case "OptionalCallExpression":
            case "CallExpression":
              return Et(tt, ht, Ke);
            case "ObjectExpression":
            case "ObjectPattern":
            case "RecordExpression":
              return ae(tt, ht, Ke);
            case "ObjectProperty":
            case "Property":
              return dt.method || dt.kind === "get" || dt.kind === "set" ? Ct(tt, ht, Ke) : Re(tt, ht, Ke);
            case "ObjectMethod":
              return Ct(tt, ht, Ke);
            case "Decorator":
              return ["@", Ke("expression")];
            case "ArrayExpression":
            case "ArrayPattern":
            case "TupleExpression":
              return it(tt, ht, Ke);
            case "SequenceExpression": {
              let Tt = tt.getParentNode(0);
              if (Tt.type === "ExpressionStatement" || Tt.type === "ForStatement") {
                let jt = [];
                return tt.each((tr, ft) => {
                  ft === 0 ? jt.push(Ke()) : jt.push(",", c([e, Ke()]));
                }, "expressions"), o(jt);
              }
              return o(s([",", e], tt.map(Ke, "expressions")));
            }
            case "ThisExpression":
              return "this";
            case "Super":
              return "super";
            case "Directive":
              return [Ke("value"), ar];
            case "DirectiveLiteral":
              return be(dt.extra.raw, ht);
            case "UnaryExpression":
              return Dt.push(dt.operator), /[a-z]$/.test(dt.operator) && Dt.push(" "), A(dt.argument) ? Dt.push(o(["(", c([n, Ke("argument")]), n, ")"])) : Dt.push(Ke("argument")), Dt;
            case "UpdateExpression":
              return Dt.push(Ke("argument"), dt.operator), dt.prefix && Dt.reverse(), Dt;
            case "ConditionalExpression":
              return we(tt, ht, Ke);
            case "VariableDeclaration": {
              let Tt = tt.map(Ke, "declarations"), jt = tt.getParentNode(), tr = jt.type === "ForStatement" || jt.type === "ForInStatement" || jt.type === "ForOfStatement", ft = dt.declarations.some((Bt) => Bt.init), Pt;
              return Tt.length === 1 && !A(dt.declarations[0]) ? Pt = Tt[0] : Tt.length > 0 && (Pt = c(Tt[0])), Dt = [dt.declare ? "declare " : "", dt.kind, Pt ? [" ", Pt] : "", c(Tt.slice(1).map((Bt) => [",", ft && !tr ? r : e, Bt]))], tr && jt.body !== dt || Dt.push(ar), o(Dt);
            }
            case "WithStatement":
              return o(["with (", Ke("object"), ")", U(dt.body, Ke("body"))]);
            case "IfStatement": {
              let Tt = U(dt.consequent, Ke("consequent")), jt = o(["if (", o([c([n, Ke("test")]), n]), ")", Tt]);
              if (Dt.push(jt), dt.alternate) {
                let tr = A(dt.consequent, N.Trailing | N.Line) || J(dt), ft = dt.consequent.type === "BlockStatement" && !tr;
                Dt.push(ft ? " " : r), A(dt, N.Dangling) && Dt.push(t(tt, ht, !0), tr ? r : " "), Dt.push("else", o(U(dt.alternate, Ke("alternate"), dt.alternate.type === "IfStatement")));
              }
              return Dt;
            }
            case "ForStatement": {
              let Tt = U(dt.body, Ke("body")), jt = t(tt, ht, !0), tr = jt ? [jt, n] : "";
              return !dt.init && !dt.test && !dt.update ? [tr, o(["for (;;)", Tt])] : [tr, o(["for (", o([c([n, Ke("init"), ";", e, Ke("test"), ";", e, Ke("update")]), n]), ")", Tt])];
            }
            case "WhileStatement":
              return o(["while (", o([c([n, Ke("test")]), n]), ")", U(dt.body, Ke("body"))]);
            case "ForInStatement":
              return o(["for (", Ke("left"), " in ", Ke("right"), ")", U(dt.body, Ke("body"))]);
            case "ForOfStatement":
              return o(["for", dt.await ? " await" : "", " (", Ke("left"), " of ", Ke("right"), ")", U(dt.body, Ke("body"))]);
            case "DoWhileStatement": {
              let Tt = U(dt.body, Ke("body"));
              return Dt = [o(["do", Tt])], dt.body.type === "BlockStatement" ? Dt.push(" ") : Dt.push(r), Dt.push("while (", o([c([n, Ke("test")]), n]), ")", ar), Dt;
            }
            case "DoExpression":
              return [dt.async ? "async " : "", "do ", Ke("body")];
            case "BreakStatement":
              return Dt.push("break"), dt.label && Dt.push(" ", Ke("label")), Dt.push(ar), Dt;
            case "ContinueStatement":
              return Dt.push("continue"), dt.label && Dt.push(" ", Ke("label")), Dt.push(ar), Dt;
            case "LabeledStatement":
              return dt.body.type === "EmptyStatement" ? [Ke("label"), ":;"] : [Ke("label"), ": ", Ke("body")];
            case "TryStatement":
              return ["try ", Ke("block"), dt.handler ? [" ", Ke("handler")] : "", dt.finalizer ? [" finally ", Ke("finalizer")] : ""];
            case "CatchClause":
              if (dt.param) {
                let Tt = A(dt.param, (tr) => !E(tr) || tr.leading && a(ht.originalText, h(tr)) || tr.trailing && a(ht.originalText, i(tr), { backwards: !0 })), jt = Ke("param");
                return ["catch ", Tt ? ["(", c([n, jt]), n, ") "] : ["(", jt, ") "], Ke("body")];
              }
              return ["catch ", Ke("body")];
            case "SwitchStatement":
              return [o(["switch (", c([n, Ke("discriminant")]), n, ")"]), " {", dt.cases.length > 0 ? c([r, s(r, tt.map((Tt, jt, tr) => {
                let ft = Tt.getValue();
                return [Ke(), jt !== tr.length - 1 && _(ft, ht) ? r : ""];
              }, "cases"))]) : "", r, "}"];
            case "SwitchCase": {
              dt.test ? Dt.push("case ", Ke("test"), ":") : Dt.push("default:"), A(dt, N.Dangling) && Dt.push(" ", t(tt, ht, !0));
              let Tt = dt.consequent.filter((jt) => jt.type !== "EmptyStatement");
              if (Tt.length > 0) {
                let jt = ke(tt, ht, Ke);
                Dt.push(Tt.length === 1 && Tt[0].type === "BlockStatement" ? [" ", jt] : c([r, jt]));
              }
              return Dt;
            }
            case "DebuggerStatement":
              return ["debugger", ar];
            case "ClassDeclaration":
            case "ClassExpression":
              return Q(tt, ht, Ke);
            case "ClassMethod":
            case "ClassPrivateMethod":
            case "MethodDefinition":
              return me(tt, ht, Ke);
            case "ClassProperty":
            case "PropertyDefinition":
            case "ClassPrivateProperty":
            case "ClassAccessorProperty":
            case "AccessorProperty":
              return Ce(tt, ht, Ke);
            case "TemplateElement":
              return y(dt.value.raw);
            case "TemplateLiteral":
              return _e(tt, Ke, ht);
            case "TaggedTemplateExpression":
              return [Ke("tag"), Ke("typeParameters"), Ke("quasi")];
            case "PrivateIdentifier":
              return ["#", Ke("name")];
            case "PrivateName":
              return ["#", Ke("id")];
            case "InterpreterDirective":
              return Dt.push("#!", dt.value, r), _(dt, ht) && Dt.push(r), Dt;
            case "TopicReference":
              return "%";
            case "ArgumentPlaceholder":
              return "?";
            case "ModuleExpression": {
              Dt.push("module {");
              let Tt = Ke("body");
              return Tt && Dt.push(c([r, Tt]), r), Dt.push("}"), Dt;
            }
            default:
              throw new Error("unknown type: " + JSON.stringify(dt.type));
          }
        }
        function ze(tt) {
          return tt.type && !E(tt) && !P(tt) && tt.type !== "EmptyStatement" && tt.type !== "TemplateElement" && tt.type !== "Import" && tt.type !== "TSEmptyBodyFunctionExpression";
        }
        l.exports = { preprocess: w, print: K, embed: m, insertPragma: p, massageAstNode: g, hasPrettierIgnore(tt) {
          return d(tt) || q(tt);
        }, willPrintOwnComments: D.willPrintOwnComments, canAttachComment: ze, printComment: ut, isBlockComment: E, handleComments: { avoidAstMutation: !0, ownLine: D.handleOwnLineComment, endOfLine: D.handleEndOfLineComment, remaining: D.handleRemainingComment }, getCommentChildNodes: D.getCommentChildNodes };
      } }), wa = $({ "src/language-js/printer-estree-json.js"(u, l) {
        ue();
        var { builders: { hardline: t, indent: a, join: s } } = wt(), e = Is();
        function r(y, m, g) {
          let p = y.getValue();
          switch (p.type) {
            case "JsonRoot":
              return [g("node"), t];
            case "ArrayExpression": {
              if (p.elements.length === 0)
                return "[]";
              let D = y.map(() => y.getValue() === null ? "null" : g(), "elements");
              return ["[", a([t, s([",", t], D)]), t, "]"];
            }
            case "ObjectExpression":
              return p.properties.length === 0 ? "{}" : ["{", a([t, s([",", t], y.map(g, "properties"))]), t, "}"];
            case "ObjectProperty":
              return [g("key"), ": ", g("value")];
            case "UnaryExpression":
              return [p.operator === "+" ? "" : p.operator, g("argument")];
            case "NullLiteral":
              return "null";
            case "BooleanLiteral":
              return p.value ? "true" : "false";
            case "StringLiteral":
              return JSON.stringify(p.value);
            case "NumericLiteral":
              return n(y) ? JSON.stringify(String(p.value)) : JSON.stringify(p.value);
            case "Identifier":
              return n(y) ? JSON.stringify(p.name) : p.name;
            case "TemplateLiteral":
              return g(["quasis", 0]);
            case "TemplateElement":
              return JSON.stringify(p.value.cooked);
            default:
              throw new Error("unknown type: " + JSON.stringify(p.type));
          }
        }
        function n(y) {
          return y.getName() === "key" && y.getParentNode().type === "ObjectProperty";
        }
        var o = /* @__PURE__ */ new Set(["start", "end", "extra", "loc", "comments", "leadingComments", "trailingComments", "innerComments", "errors", "range", "tokens"]);
        function c(y, m) {
          let { type: g } = y;
          if (g === "ObjectProperty") {
            let { key: p } = y;
            p.type === "Identifier" ? m.key = { type: "StringLiteral", value: p.name } : p.type === "NumericLiteral" && (m.key = { type: "StringLiteral", value: String(p.value) });
            return;
          }
          if (g === "UnaryExpression" && y.operator === "+")
            return m.argument;
          if (g === "ArrayExpression") {
            for (let [p, D] of y.elements.entries())
              D === null && m.elements.splice(p, 0, { type: "NullLiteral" });
            return;
          }
          if (g === "TemplateLiteral")
            return { type: "StringLiteral", value: y.quasis[0].value.cooked };
        }
        c.ignoredProperties = o, l.exports = { preprocess: e, print: r, massageAstNode: c };
      } }), On = $({ "src/common/common-options.js"(u, l) {
        ue();
        var t = "Common";
        l.exports = { bracketSpacing: { since: "0.0.0", category: t, type: "boolean", default: !0, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, singleQuote: { since: "0.0.0", category: t, type: "boolean", default: !1, description: "Use single quotes instead of double quotes." }, proseWrap: { since: "1.8.2", category: t, type: "choice", default: [{ since: "1.8.2", value: !0 }, { since: "1.9.0", value: "preserve" }], description: "How to wrap prose.", choices: [{ since: "1.9.0", value: "always", description: "Wrap prose if it exceeds the print width." }, { since: "1.9.0", value: "never", description: "Do not wrap prose." }, { since: "1.9.0", value: "preserve", description: "Wrap prose as-is." }] }, bracketSameLine: { since: "2.4.0", category: t, type: "boolean", default: !1, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { since: "2.6.0", category: t, type: "boolean", default: !1, description: "Enforce single attribute per line in HTML, Vue and JSX." } };
      } }), Na = $({ "src/language-js/options.js"(u, l) {
        ue();
        var t = On(), a = "JavaScript";
        l.exports = { arrowParens: { since: "1.9.0", category: a, type: "choice", default: [{ since: "1.9.0", value: "avoid" }, { since: "2.0.0", value: "always" }], description: "Include parentheses around a sole arrow function parameter.", choices: [{ value: "always", description: "Always include parens. Example: `(x) => x`" }, { value: "avoid", description: "Omit parens when possible. Example: `x => x`" }] }, bracketSameLine: t.bracketSameLine, bracketSpacing: t.bracketSpacing, jsxBracketSameLine: { since: "0.17.0", category: a, type: "boolean", description: "Put > on the last line instead of at a new line.", deprecated: "2.4.0" }, semi: { since: "1.0.0", category: a, type: "boolean", default: !0, description: "Print semicolons.", oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them." }, singleQuote: t.singleQuote, jsxSingleQuote: { since: "1.15.0", category: a, type: "boolean", default: !1, description: "Use single quotes in JSX." }, quoteProps: { since: "1.17.0", category: a, type: "choice", default: "as-needed", description: "Change when properties in objects are quoted.", choices: [{ value: "as-needed", description: "Only add quotes around object properties where required." }, { value: "consistent", description: "If at least one property in an object requires quotes, quote all properties." }, { value: "preserve", description: "Respect the input use of quotes in object properties." }] }, trailingComma: { since: "0.0.0", category: a, type: "choice", default: [{ since: "0.0.0", value: !1 }, { since: "0.19.0", value: "none" }, { since: "2.0.0", value: "es5" }], description: "Print trailing commas wherever possible when multi-line.", choices: [{ value: "es5", description: "Trailing commas where valid in ES5 (objects, arrays, etc.)" }, { value: "none", description: "No trailing commas." }, { value: "all", description: "Trailing commas wherever possible (including function arguments)." }] }, singleAttributePerLine: t.singleAttributePerLine };
      } }), _a = $({ "src/language-js/parse/parsers.js"() {
        ue();
      } }), ps = $({ "node_modules/linguist-languages/data/JavaScript.json"(u, l) {
        l.exports = { name: "JavaScript", type: "programming", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", color: "#f1e05a", aliases: ["js", "node"], extensions: [".js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".javascript", ".jsb", ".jscad", ".jsfl", ".jslib", ".jsm", ".jspre", ".jss", ".jsx", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib"], filenames: ["Jakefile"], interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell"], languageId: 183 };
      } }), ka = $({ "node_modules/linguist-languages/data/TypeScript.json"(u, l) {
        l.exports = { name: "TypeScript", type: "programming", color: "#3178c6", aliases: ["ts"], interpreters: ["deno", "ts-node"], extensions: [".ts", ".cts", ".mts"], tmScope: "source.ts", aceMode: "typescript", codemirrorMode: "javascript", codemirrorMimeType: "application/typescript", languageId: 378 };
      } }), Pa = $({ "node_modules/linguist-languages/data/TSX.json"(u, l) {
        l.exports = { name: "TSX", type: "programming", color: "#3178c6", group: "TypeScript", extensions: [".tsx"], tmScope: "source.tsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", languageId: 94901924 };
      } }), Us = $({ "node_modules/linguist-languages/data/JSON.json"(u, l) {
        l.exports = { name: "JSON", type: "data", color: "#292929", tmScope: "source.json", aceMode: "json", codemirrorMode: "javascript", codemirrorMimeType: "application/json", aliases: ["geojson", "jsonl", "topojson"], extensions: [".json", ".4DForm", ".4DProject", ".avsc", ".geojson", ".gltf", ".har", ".ice", ".JSON-tmLanguage", ".jsonl", ".mcmeta", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest", ".yy", ".yyp"], filenames: [".arcconfig", ".auto-changelog", ".c8rc", ".htmlhintrc", ".imgbotconfig", ".nycrc", ".tern-config", ".tern-project", ".watchmanconfig", "Pipfile.lock", "composer.lock", "mcmod.info"], languageId: 174 };
      } }), Ia = $({ "node_modules/linguist-languages/data/JSON with Comments.json"(u, l) {
        l.exports = { name: "JSON with Comments", type: "data", color: "#292929", group: "JSON", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", aliases: ["jsonc"], extensions: [".jsonc", ".code-snippets", ".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"], filenames: [".babelrc", ".devcontainer.json", ".eslintrc.json", ".jscsrc", ".jshintrc", ".jslintrc", "api-extractor.json", "devcontainer.json", "jsconfig.json", "language-configuration.json", "tsconfig.json", "tslint.json"], languageId: 423 };
      } }), ja = $({ "node_modules/linguist-languages/data/JSON5.json"(u, l) {
        l.exports = { name: "JSON5", type: "data", color: "#267CB9", extensions: [".json5"], tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "application/json", languageId: 175 };
      } }), La = $({ "src/language-js/index.js"(u, l) {
        ue();
        var t = vr(), a = Ba(), s = wa(), e = Na(), r = _a(), n = [t(ps(), (c) => ({ since: "0.0.0", parsers: ["babel", "acorn", "espree", "meriyah", "babel-flow", "babel-ts", "flow", "typescript"], vscodeLanguageIds: ["javascript", "mongo"], interpreters: [...c.interpreters, "zx"], extensions: [...c.extensions.filter((y) => y !== ".jsx"), ".wxs"] })), t(ps(), () => ({ name: "Flow", since: "0.0.0", parsers: ["flow", "babel-flow"], vscodeLanguageIds: ["javascript"], aliases: [], filenames: [], extensions: [".js.flow"] })), t(ps(), () => ({ name: "JSX", since: "0.0.0", parsers: ["babel", "babel-flow", "babel-ts", "flow", "typescript", "espree", "meriyah"], vscodeLanguageIds: ["javascriptreact"], aliases: void 0, filenames: void 0, extensions: [".jsx"], group: "JavaScript", interpreters: void 0, tmScope: "source.js.jsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", color: void 0 })), t(ka(), () => ({ since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescript"] })), t(Pa(), () => ({ since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescriptreact"] })), t(Us(), () => ({ name: "JSON.stringify", since: "1.13.0", parsers: ["json-stringify"], vscodeLanguageIds: ["json"], extensions: [".importmap"], filenames: ["package.json", "package-lock.json", "composer.json"] })), t(Us(), (c) => ({ since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["json"], extensions: c.extensions.filter((y) => y !== ".jsonl") })), t(Ia(), (c) => ({ since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["jsonc"], filenames: [...c.filenames, ".eslintrc", ".swcrc"] })), t(ja(), () => ({ since: "1.13.0", parsers: ["json5"], vscodeLanguageIds: ["json5"] }))], o = { estree: a, "estree-json": s };
        l.exports = { languages: n, options: e, printers: o, parsers: r };
      } }), Oa = $({ "src/language-css/clean.js"(u, l) {
        ue();
        var { isFrontMatterNode: t } = Gt(), a = mr(), s = /* @__PURE__ */ new Set(["raw", "raws", "sourceIndex", "source", "before", "after", "trailingComma"]);
        function e(n, o, c) {
          if (t(n) && n.lang === "yaml" && delete o.value, n.type === "css-comment" && c.type === "css-root" && c.nodes.length > 0 && ((c.nodes[0] === n || t(c.nodes[0]) && c.nodes[1] === n) && (delete o.text, /^\*\s*@(?:format|prettier)\s*$/.test(n.text)) || c.type === "css-root" && a(c.nodes) === n))
            return null;
          if (n.type === "value-root" && delete o.text, (n.type === "media-query" || n.type === "media-query-list" || n.type === "media-feature-expression") && delete o.value, n.type === "css-rule" && delete o.params, n.type === "selector-combinator" && (o.value = o.value.replace(/\s+/g, " ")), n.type === "media-feature" && (o.value = o.value.replace(/ /g, "")), (n.type === "value-word" && (n.isColor && n.isHex || ["initial", "inherit", "unset", "revert"].includes(o.value.replace().toLowerCase())) || n.type === "media-feature" || n.type === "selector-root-invalid" || n.type === "selector-pseudo") && (o.value = o.value.toLowerCase()), n.type === "css-decl" && (o.prop = o.prop.toLowerCase()), (n.type === "css-atrule" || n.type === "css-import") && (o.name = o.name.toLowerCase()), n.type === "value-number" && (o.unit = o.unit.toLowerCase()), (n.type === "media-feature" || n.type === "media-keyword" || n.type === "media-type" || n.type === "media-unknown" || n.type === "media-url" || n.type === "media-value" || n.type === "selector-attribute" || n.type === "selector-string" || n.type === "selector-class" || n.type === "selector-combinator" || n.type === "value-string") && o.value && (o.value = r(o.value)), n.type === "selector-attribute" && (o.attribute = o.attribute.trim(), o.namespace && typeof o.namespace == "string" && (o.namespace = o.namespace.trim(), o.namespace.length === 0 && (o.namespace = !0)), o.value && (o.value = o.value.trim().replace(/^["']|["']$/g, ""), delete o.quoted)), (n.type === "media-value" || n.type === "media-type" || n.type === "value-number" || n.type === "selector-root-invalid" || n.type === "selector-class" || n.type === "selector-combinator" || n.type === "selector-tag") && o.value && (o.value = o.value.replace(/([\d+.Ee-]+)([A-Za-z]*)/g, (y, m, g) => {
            let p = Number(m);
            return Number.isNaN(p) ? y : p + g.toLowerCase();
          })), n.type === "selector-tag") {
            let y = n.value.toLowerCase();
            ["from", "to"].includes(y) && (o.value = y);
          }
          if (n.type === "css-atrule" && n.name.toLowerCase() === "supports" && delete o.value, n.type === "selector-unknown" && delete o.value, n.type === "value-comma_group") {
            let y = n.groups.findIndex((m) => m.type === "value-number" && m.unit === "...");
            y !== -1 && (o.groups[y].unit = "", o.groups.splice(y + 1, 0, { type: "value-word", value: "...", isColor: !1, isHex: !1 }));
          }
          if (n.type === "value-comma_group" && n.groups.some((y) => y.type === "value-atword" && y.value.endsWith("[") || y.type === "value-word" && y.value.startsWith("]")))
            return { type: "value-atword", value: n.groups.map((y) => y.value).join(""), group: { open: null, close: null, groups: [], type: "value-paren_group" } };
        }
        e.ignoredProperties = s;
        function r(n) {
          return n.replace(/'/g, '"').replace(/\\([^\dA-Fa-f])/g, "$1");
        }
        l.exports = e;
      } }), cs = $({ "src/utils/front-matter/print.js"(u, l) {
        ue();
        var { builders: { hardline: t, markAsRoot: a } } = wt();
        function s(e, r) {
          if (e.lang === "yaml") {
            let n = e.value.trim(), o = n ? r(n, { parser: "yaml" }, { stripTrailingHardline: !0 }) : "";
            return a([e.startDelimiter, t, o, o ? t : "", e.endDelimiter]);
          }
        }
        l.exports = s;
      } }), $a = $({ "src/language-css/embed.js"(u, l) {
        ue();
        var { builders: { hardline: t } } = wt(), a = cs();
        function s(e, r, n) {
          let o = e.getValue();
          if (o.type === "front-matter") {
            let c = a(o, n);
            return c ? [c, t] : "";
          }
        }
        l.exports = s;
      } }), Gs = $({ "src/utils/front-matter/parse.js"(u, l) {
        ue();
        var t = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
        function a(s) {
          let e = s.match(t);
          if (!e)
            return { content: s };
          let { startDelimiter: r, language: n, value: o = "", endDelimiter: c } = e.groups, y = n.trim() || "yaml";
          if (r === "+++" && (y = "toml"), y !== "yaml" && r !== c)
            return { content: s };
          let [m] = e;
          return { frontMatter: { type: "front-matter", lang: y, value: o, startDelimiter: r, endDelimiter: c, raw: m.replace(/\n$/, "") }, content: m.replace(/[^\n]/g, " ") + s.slice(m.length) };
        }
        l.exports = a;
      } }), Ra = $({ "src/language-css/pragma.js"(u, l) {
        ue();
        var t = ks(), a = Gs();
        function s(r) {
          return t.hasPragma(a(r).content);
        }
        function e(r) {
          let { frontMatter: n, content: o } = a(r);
          return (n ? n.raw + `

` : "") + t.insertPragma(o);
        }
        l.exports = { hasPragma: s, insertPragma: e };
      } }), Ma = $({ "src/language-css/utils/index.js"(u, l) {
        ue();
        var t = /* @__PURE__ */ new Set(["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"]);
        function a(ae, Q) {
          let me = Array.isArray(Q) ? Q : [Q], Ce = -1, Re;
          for (; Re = ae.getParentNode(++Ce); )
            if (me.includes(Re.type))
              return Ce;
          return -1;
        }
        function s(ae, Q) {
          let me = a(ae, Q);
          return me === -1 ? null : ae.getParentNode(me);
        }
        function e(ae) {
          var Q;
          let me = s(ae, "css-decl");
          return me == null || (Q = me.prop) === null || Q === void 0 ? void 0 : Q.toLowerCase();
        }
        var r = /* @__PURE__ */ new Set(["initial", "inherit", "unset", "revert"]);
        function n(ae) {
          return r.has(ae.toLowerCase());
        }
        function o(ae, Q) {
          let me = s(ae, "css-atrule");
          return (me == null ? void 0 : me.name) && me.name.toLowerCase().endsWith("keyframes") && ["from", "to"].includes(Q.toLowerCase());
        }
        function c(ae) {
          return ae.includes("$") || ae.includes("@") || ae.includes("#") || ae.startsWith("%") || ae.startsWith("--") || ae.startsWith(":--") || ae.includes("(") && ae.includes(")") ? ae : ae.toLowerCase();
        }
        function y(ae, Q) {
          var me;
          let Ce = s(ae, "value-func");
          return (Ce == null || (me = Ce.value) === null || me === void 0 ? void 0 : me.toLowerCase()) === Q;
        }
        function m(ae) {
          var Q;
          let me = s(ae, "css-rule"), Ce = me == null || (Q = me.raws) === null || Q === void 0 ? void 0 : Q.selector;
          return Ce && (Ce.startsWith(":import") || Ce.startsWith(":export"));
        }
        function g(ae, Q) {
          let me = Array.isArray(Q) ? Q : [Q], Ce = s(ae, "css-atrule");
          return Ce && me.includes(Ce.name.toLowerCase());
        }
        function p(ae) {
          let Q = ae.getValue(), me = s(ae, "css-atrule");
          return (me == null ? void 0 : me.name) === "import" && Q.groups[0].value === "url" && Q.groups.length === 2;
        }
        function D(ae) {
          return ae.type === "value-func" && ae.value.toLowerCase() === "url";
        }
        function C(ae, Q) {
          var me;
          let Ce = (me = ae.getParentNode()) === null || me === void 0 ? void 0 : me.nodes;
          return Ce && Ce.indexOf(Q) === Ce.length - 1;
        }
        function w(ae) {
          let { selector: Q } = ae;
          return Q ? typeof Q == "string" && /^@.+:.*$/.test(Q) || Q.value && /^@.+:.*$/.test(Q.value) : !1;
        }
        function k(ae) {
          return ae.type === "value-word" && ["from", "through", "end"].includes(ae.value);
        }
        function A(ae) {
          return ae.type === "value-word" && ["and", "or", "not"].includes(ae.value);
        }
        function N(ae) {
          return ae.type === "value-word" && ae.value === "in";
        }
        function x(ae) {
          return ae.type === "value-operator" && ae.value === "*";
        }
        function P(ae) {
          return ae.type === "value-operator" && ae.value === "/";
        }
        function _(ae) {
          return ae.type === "value-operator" && ae.value === "+";
        }
        function J(ae) {
          return ae.type === "value-operator" && ae.value === "-";
        }
        function d(ae) {
          return ae.type === "value-operator" && ae.value === "%";
        }
        function T(ae) {
          return x(ae) || P(ae) || _(ae) || J(ae) || d(ae);
        }
        function f(ae) {
          return ae.type === "value-word" && ["==", "!="].includes(ae.value);
        }
        function F(ae) {
          return ae.type === "value-word" && ["<", ">", "<=", ">="].includes(ae.value);
        }
        function i(ae) {
          return ae.type === "css-atrule" && ["if", "else", "for", "each", "while"].includes(ae.name);
        }
        function h(ae) {
          var Q;
          return ((Q = ae.raws) === null || Q === void 0 ? void 0 : Q.params) && /^\(\s*\)$/.test(ae.raws.params);
        }
        function E(ae) {
          return ae.name.startsWith("prettier-placeholder");
        }
        function b(ae) {
          return ae.prop.startsWith("@prettier-placeholder");
        }
        function S(ae, Q) {
          return ae.value === "$$" && ae.type === "value-func" && (Q == null ? void 0 : Q.type) === "value-word" && !Q.raws.before;
        }
        function B(ae) {
          var Q, me;
          return ((Q = ae.value) === null || Q === void 0 ? void 0 : Q.type) === "value-root" && ((me = ae.value.group) === null || me === void 0 ? void 0 : me.type) === "value-value" && ae.prop.toLowerCase() === "composes";
        }
        function I(ae) {
          var Q, me, Ce;
          return ((Q = ae.value) === null || Q === void 0 || (me = Q.group) === null || me === void 0 || (Ce = me.group) === null || Ce === void 0 ? void 0 : Ce.type) === "value-paren_group" && ae.value.group.group.open !== null && ae.value.group.group.close !== null;
        }
        function q(ae) {
          var Q;
          return ((Q = ae.raws) === null || Q === void 0 ? void 0 : Q.before) === "";
        }
        function G(ae) {
          var Q, me;
          return ae.type === "value-comma_group" && ((Q = ae.groups) === null || Q === void 0 || (me = Q[1]) === null || me === void 0 ? void 0 : me.type) === "value-colon";
        }
        function M(ae) {
          var Q;
          return ae.type === "value-paren_group" && ((Q = ae.groups) === null || Q === void 0 ? void 0 : Q[0]) && G(ae.groups[0]);
        }
        function te(ae) {
          var Q;
          let me = ae.getValue();
          if (me.groups.length === 0)
            return !1;
          let Ce = ae.getParentNode(1);
          if (!M(me) && !(Ce && M(Ce)))
            return !1;
          let Re = s(ae, "css-decl");
          return !!(Re != null && (Q = Re.prop) !== null && Q !== void 0 && Q.startsWith("$") || M(Ce) || Ce.type === "value-func");
        }
        function j(ae) {
          return ae.type === "value-comment" && ae.inline;
        }
        function De(ae) {
          return ae.type === "value-word" && ae.value === "#";
        }
        function U(ae) {
          return ae.type === "value-word" && ae.value === "{";
        }
        function R(ae) {
          return ae.type === "value-word" && ae.value === "}";
        }
        function pe(ae) {
          return ["value-word", "value-atword"].includes(ae.type);
        }
        function be(ae) {
          return (ae == null ? void 0 : ae.type) === "value-colon";
        }
        function fe(ae, Q) {
          if (!G(Q))
            return !1;
          let { groups: me } = Q, Ce = me.indexOf(ae);
          return Ce === -1 ? !1 : be(me[Ce + 1]);
        }
        function Ie(ae) {
          return ae.value && ["not", "and", "or"].includes(ae.value.toLowerCase());
        }
        function X(ae) {
          return ae.type !== "value-func" ? !1 : t.has(ae.value.toLowerCase());
        }
        function se(ae) {
          return /\/\//.test(ae.split(/[\n\r]/).pop());
        }
        function we(ae) {
          return (ae == null ? void 0 : ae.type) === "value-atword" && ae.value.startsWith("prettier-placeholder-");
        }
        function _e(ae, Q) {
          var me, Ce;
          if (((me = ae.open) === null || me === void 0 ? void 0 : me.value) !== "(" || ((Ce = ae.close) === null || Ce === void 0 ? void 0 : Ce.value) !== ")" || ae.groups.some((Re) => Re.type !== "value-comma_group"))
            return !1;
          if (Q.type === "value-comma_group") {
            let Re = Q.groups.indexOf(ae) - 1, Xe = Q.groups[Re];
            if ((Xe == null ? void 0 : Xe.type) === "value-word" && Xe.value === "with")
              return !0;
          }
          return !1;
        }
        function it(ae) {
          var Q, me;
          return ae.type === "value-paren_group" && ((Q = ae.open) === null || Q === void 0 ? void 0 : Q.value) === "(" && ((me = ae.close) === null || me === void 0 ? void 0 : me.value) === ")";
        }
        l.exports = { getAncestorCounter: a, getAncestorNode: s, getPropOfDeclNode: e, maybeToLowerCase: c, insideValueFunctionNode: y, insideICSSRuleNode: m, insideAtRuleNode: g, insideURLFunctionInImportAtRuleNode: p, isKeyframeAtRuleKeywords: o, isWideKeywords: n, isLastNode: C, isSCSSControlDirectiveNode: i, isDetachedRulesetDeclarationNode: w, isRelationalOperatorNode: F, isEqualityOperatorNode: f, isMultiplicationNode: x, isDivisionNode: P, isAdditionNode: _, isSubtractionNode: J, isModuloNode: d, isMathOperatorNode: T, isEachKeywordNode: N, isForKeywordNode: k, isURLFunctionNode: D, isIfElseKeywordNode: A, hasComposesNode: B, hasParensAroundNode: I, hasEmptyRawBefore: q, isDetachedRulesetCallNode: h, isTemplatePlaceholderNode: E, isTemplatePropNode: b, isPostcssSimpleVarNode: S, isKeyValuePairNode: G, isKeyValuePairInParenGroupNode: M, isKeyInValuePairNode: fe, isSCSSMapItemNode: te, isInlineValueCommentNode: j, isHashNode: De, isLeftCurlyBraceNode: U, isRightCurlyBraceNode: R, isWordNode: pe, isColonNode: be, isMediaAndSupportsKeywords: Ie, isColorAdjusterFuncNode: X, lastLineHasInlineComment: se, isAtWordPlaceholderNode: we, isConfigurationNode: _e, isParenGroupNode: it };
      } }), qa = $({ "src/utils/line-column-to-index.js"(u, l) {
        ue(), l.exports = function(t, a) {
          let s = 0;
          for (let e = 0; e < t.line - 1; ++e)
            s = a.indexOf(`
`, s) + 1;
          return s + t.column;
        };
      } }), Va = $({ "src/language-css/loc.js"(u, l) {
        ue();
        var { skipEverythingButNewLine: t } = Cn(), a = mr(), s = qa();
        function e(p, D) {
          return typeof p.sourceIndex == "number" ? p.sourceIndex : p.source ? s(p.source.start, D) - 1 : null;
        }
        function r(p, D) {
          if (p.type === "css-comment" && p.inline)
            return t(D, p.source.startOffset);
          let C = p.nodes && a(p.nodes);
          return C && p.source && !p.source.end && (p = C), p.source && p.source.end ? s(p.source.end, D) : null;
        }
        function n(p, D) {
          p.source && (p.source.startOffset = e(p, D), p.source.endOffset = r(p, D));
          for (let C in p) {
            let w = p[C];
            C === "source" || !w || typeof w != "object" || (w.type === "value-root" || w.type === "value-unknown" ? o(w, c(p), w.text || w.value) : n(w, D));
          }
        }
        function o(p, D, C) {
          p.source && (p.source.startOffset = e(p, C) + D, p.source.endOffset = r(p, C) + D);
          for (let w in p) {
            let k = p[w];
            w === "source" || !k || typeof k != "object" || o(k, D, C);
          }
        }
        function c(p) {
          let D = p.source.startOffset;
          return typeof p.prop == "string" && (D += p.prop.length), p.type === "css-atrule" && typeof p.name == "string" && (D += 1 + p.name.length + p.raws.afterName.match(/^\s*:?\s*/)[0].length), p.type !== "css-atrule" && p.raws && typeof p.raws.between == "string" && (D += p.raws.between.length), D;
        }
        function y(p) {
          let D = "initial", C = "initial", w, k = !1, A = [];
          for (let N = 0; N < p.length; N++) {
            let x = p[N];
            switch (D) {
              case "initial":
                if (x === "'") {
                  D = "single-quotes";
                  continue;
                }
                if (x === '"') {
                  D = "double-quotes";
                  continue;
                }
                if ((x === "u" || x === "U") && p.slice(N, N + 4).toLowerCase() === "url(") {
                  D = "url", N += 3;
                  continue;
                }
                if (x === "*" && p[N - 1] === "/") {
                  D = "comment-block";
                  continue;
                }
                if (x === "/" && p[N - 1] === "/") {
                  D = "comment-inline", w = N - 1;
                  continue;
                }
                continue;
              case "single-quotes":
                if (x === "'" && p[N - 1] !== "\\" && (D = C, C = "initial"), x === `
` || x === "\r")
                  return p;
                continue;
              case "double-quotes":
                if (x === '"' && p[N - 1] !== "\\" && (D = C, C = "initial"), x === `
` || x === "\r")
                  return p;
                continue;
              case "url":
                if (x === ")" && (D = "initial"), x === `
` || x === "\r")
                  return p;
                if (x === "'") {
                  D = "single-quotes", C = "url";
                  continue;
                }
                if (x === '"') {
                  D = "double-quotes", C = "url";
                  continue;
                }
                continue;
              case "comment-block":
                x === "/" && p[N - 1] === "*" && (D = "initial");
                continue;
              case "comment-inline":
                (x === '"' || x === "'" || x === "*") && (k = !0), (x === `
` || x === "\r") && (k && A.push([w, N]), D = "initial", k = !1);
                continue;
            }
          }
          for (let [N, x] of A)
            p = p.slice(0, N) + p.slice(N, x).replace(/["'*]/g, " ") + p.slice(x);
          return p;
        }
        function m(p) {
          return p.source.startOffset;
        }
        function g(p) {
          return p.source.endOffset;
        }
        l.exports = { locStart: m, locEnd: g, calculateLoc: n, replaceQuotesInInlineComments: y };
      } }), Ua = $({ "src/language-css/utils/is-less-parser.js"(u, l) {
        ue();
        function t(a) {
          return a.parser === "css" || a.parser === "less";
        }
        l.exports = t;
      } }), Ga = $({ "src/language-css/utils/is-scss.js"(u, l) {
        ue();
        function t(a, s) {
          return a === "less" || a === "scss" ? a === "scss" : /(?:\w\s*:\s*[^:}]+|#){|@import[^\n]+(?:url|,)/.test(s);
        }
        l.exports = t;
      } }), Ja = $({ "src/language-css/utils/css-units.evaluate.js"(u, l) {
        l.exports = { em: "em", rem: "rem", ex: "ex", rex: "rex", cap: "cap", rcap: "rcap", ch: "ch", rch: "rch", ic: "ic", ric: "ric", lh: "lh", rlh: "rlh", vw: "vw", svw: "svw", lvw: "lvw", dvw: "dvw", vh: "vh", svh: "svh", lvh: "lvh", dvh: "dvh", vi: "vi", svi: "svi", lvi: "lvi", dvi: "dvi", vb: "vb", svb: "svb", lvb: "lvb", dvb: "dvb", vmin: "vmin", svmin: "svmin", lvmin: "lvmin", dvmin: "dvmin", vmax: "vmax", svmax: "svmax", lvmax: "lvmax", dvmax: "dvmax", cm: "cm", mm: "mm", q: "Q", in: "in", pt: "pt", pc: "pc", px: "px", deg: "deg", grad: "grad", rad: "rad", turn: "turn", s: "s", ms: "ms", hz: "Hz", khz: "kHz", dpi: "dpi", dpcm: "dpcm", dppx: "dppx", x: "x" };
      } }), Xa = $({ "src/language-css/utils/print-unit.js"(u, l) {
        ue();
        var t = Ja();
        function a(s) {
          let e = s.toLowerCase();
          return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : s;
        }
        l.exports = a;
      } }), Wa = $({ "src/language-css/printer-postcss.js"(u, l) {
        ue();
        var t = mr(), { printNumber: a, printString: s, hasNewline: e, isFrontMatterNode: r, isNextLineEmpty: n, isNonEmptyArray: o } = Gt(), { builders: { join: c, line: y, hardline: m, softline: g, group: p, fill: D, indent: C, dedent: w, ifBreak: k, breakParent: A }, utils: { removeLines: N, getDocParts: x } } = wt(), P = Oa(), _ = $a(), { insertPragma: J } = Ra(), { getAncestorNode: d, getPropOfDeclNode: T, maybeToLowerCase: f, insideValueFunctionNode: F, insideICSSRuleNode: i, insideAtRuleNode: h, insideURLFunctionInImportAtRuleNode: E, isKeyframeAtRuleKeywords: b, isWideKeywords: S, isLastNode: B, isSCSSControlDirectiveNode: I, isDetachedRulesetDeclarationNode: q, isRelationalOperatorNode: G, isEqualityOperatorNode: M, isMultiplicationNode: te, isDivisionNode: j, isAdditionNode: De, isSubtractionNode: U, isMathOperatorNode: R, isEachKeywordNode: pe, isForKeywordNode: be, isURLFunctionNode: fe, isIfElseKeywordNode: Ie, hasComposesNode: X, hasParensAroundNode: se, hasEmptyRawBefore: we, isKeyValuePairNode: _e, isKeyInValuePairNode: it, isDetachedRulesetCallNode: ae, isTemplatePlaceholderNode: Q, isTemplatePropNode: me, isPostcssSimpleVarNode: Ce, isSCSSMapItemNode: Re, isInlineValueCommentNode: Xe, isHashNode: Ye, isLeftCurlyBraceNode: Ct, isRightCurlyBraceNode: Rt, isWordNode: It, isColonNode: Et, isMediaAndSupportsKeywords: bt, isColorAdjusterFuncNode: xe, lastLineHasInlineComment: H, isAtWordPlaceholderNode: ke, isConfigurationNode: oe, isParenGroupNode: Be } = Ma(), { locStart: pt, locEnd: ut } = Va(), Le = Ua(), v = Ga(), K = Xa();
        function ye(ft) {
          return ft.trailingComma === "es5" || ft.trailingComma === "all";
        }
        function ze(ft, Pt, Bt) {
          let Te = ft.getValue();
          if (!Te)
            return "";
          if (typeof Te == "string")
            return Te;
          switch (Te.type) {
            case "front-matter":
              return [Te.raw, m];
            case "css-root": {
              let Xt = tt(ft, Pt, Bt), Wt = Te.raws.after.trim();
              return Wt.startsWith(";") && (Wt = Wt.slice(1).trim()), [Xt, Wt ? ` ${Wt}` : "", x(Xt).length > 0 ? m : ""];
            }
            case "css-comment": {
              let Xt = Te.inline || Te.raws.inline, Wt = Pt.originalText.slice(pt(Te), ut(Te));
              return Xt ? Wt.trimEnd() : Wt;
            }
            case "css-rule":
              return [Bt("selector"), Te.important ? " !important" : "", Te.nodes ? [Te.selector && Te.selector.type === "selector-unknown" && H(Te.selector.value) ? y : " ", "{", Te.nodes.length > 0 ? C([m, tt(ft, Pt, Bt)]) : "", m, "}", q(Te) ? ";" : ""] : ";"];
            case "css-decl": {
              let Xt = ft.getParentNode(), { between: Wt } = Te.raws, nr = Wt.trim(), Ur = nr === ":", O = X(Te) ? N(Bt("value")) : Bt("value");
              return !Ur && H(nr) && (O = C([m, w(O)])), [Te.raws.before.replace(/[\s;]/g, ""), Xt.type === "css-atrule" && Xt.variable || i(ft) ? Te.prop : f(Te.prop), nr.startsWith("//") ? " " : "", nr, Te.extend ? "" : " ", Le(Pt) && Te.extend && Te.selector ? ["extend(", Bt("selector"), ")"] : "", O, Te.raws.important ? Te.raws.important.replace(/\s*!\s*important/i, " !important") : Te.important ? " !important" : "", Te.raws.scssDefault ? Te.raws.scssDefault.replace(/\s*!default/i, " !default") : Te.scssDefault ? " !default" : "", Te.raws.scssGlobal ? Te.raws.scssGlobal.replace(/\s*!global/i, " !global") : Te.scssGlobal ? " !global" : "", Te.nodes ? [" {", C([g, tt(ft, Pt, Bt)]), g, "}"] : me(Te) && !Xt.raws.semicolon && Pt.originalText[ut(Te) - 1] !== ";" ? "" : Pt.__isHTMLStyleAttribute && B(ft, Te) ? k(";") : ";"];
            }
            case "css-atrule": {
              let Xt = ft.getParentNode(), Wt = Q(Te) && !Xt.raws.semicolon && Pt.originalText[ut(Te) - 1] !== ";";
              if (Le(Pt)) {
                if (Te.mixin)
                  return [Bt("selector"), Te.important ? " !important" : "", Wt ? "" : ";"];
                if (Te.function)
                  return [Te.name, Bt("params"), Wt ? "" : ";"];
                if (Te.variable)
                  return ["@", Te.name, ": ", Te.value ? Bt("value") : "", Te.raws.between.trim() ? Te.raws.between.trim() + " " : "", Te.nodes ? ["{", C([Te.nodes.length > 0 ? g : "", tt(ft, Pt, Bt)]), g, "}"] : "", Wt ? "" : ";"];
              }
              return ["@", ae(Te) || Te.name.endsWith(":") ? Te.name : f(Te.name), Te.params ? [ae(Te) ? "" : Q(Te) ? Te.raws.afterName === "" ? "" : Te.name.endsWith(":") ? " " : /^\s*\n\s*\n/.test(Te.raws.afterName) ? [m, m] : /^\s*\n/.test(Te.raws.afterName) ? m : " " : " ", Bt("params")] : "", Te.selector ? C([" ", Bt("selector")]) : "", Te.value ? p([" ", Bt("value"), I(Te) ? se(Te) ? " " : y : ""]) : Te.name === "else" ? " " : "", Te.nodes ? [I(Te) ? "" : Te.selector && !Te.selector.nodes && typeof Te.selector.value == "string" && H(Te.selector.value) || !Te.selector && typeof Te.params == "string" && H(Te.params) ? y : " ", "{", C([Te.nodes.length > 0 ? g : "", tt(ft, Pt, Bt)]), g, "}"] : Wt ? "" : ";"];
            }
            case "media-query-list": {
              let Xt = [];
              return ft.each((Wt) => {
                let nr = Wt.getValue();
                nr.type === "media-query" && nr.value === "" || Xt.push(Bt());
              }, "nodes"), p(C(c(y, Xt)));
            }
            case "media-query":
              return [c(" ", ft.map(Bt, "nodes")), B(ft, Te) ? "" : ","];
            case "media-type":
              return jt(Dt(Te.value, Pt));
            case "media-feature-expression":
              return Te.nodes ? ["(", ...ft.map(Bt, "nodes"), ")"] : Te.value;
            case "media-feature":
              return f(Dt(Te.value.replace(/ +/g, " "), Pt));
            case "media-colon":
              return [Te.value, " "];
            case "media-value":
              return jt(Dt(Te.value, Pt));
            case "media-keyword":
              return Dt(Te.value, Pt);
            case "media-url":
              return Dt(Te.value.replace(/^url\(\s+/gi, "url(").replace(/\s+\)$/g, ")"), Pt);
            case "media-unknown":
              return Te.value;
            case "selector-root":
              return p([h(ft, "custom-selector") ? [d(ft, "css-atrule").customSelector, y] : "", c([",", h(ft, ["extend", "custom-selector", "nest"]) ? y : m], ft.map(Bt, "nodes"))]);
            case "selector-selector":
              return p(C(ft.map(Bt, "nodes")));
            case "selector-comment":
              return Te.value;
            case "selector-string":
              return Dt(Te.value, Pt);
            case "selector-tag": {
              let Xt = ft.getParentNode(), Wt = Xt && Xt.nodes.indexOf(Te), nr = Wt && Xt.nodes[Wt - 1];
              return [Te.namespace ? [Te.namespace === !0 ? "" : Te.namespace.trim(), "|"] : "", nr.type === "selector-nesting" ? Te.value : jt(b(ft, Te.value) ? Te.value.toLowerCase() : Te.value)];
            }
            case "selector-id":
              return ["#", Te.value];
            case "selector-class":
              return [".", jt(Dt(Te.value, Pt))];
            case "selector-attribute": {
              var Vr;
              return ["[", Te.namespace ? [Te.namespace === !0 ? "" : Te.namespace.trim(), "|"] : "", Te.attribute.trim(), (Vr = Te.operator) !== null && Vr !== void 0 ? Vr : "", Te.value ? Tt(Dt(Te.value.trim(), Pt), Pt) : "", Te.insensitive ? " i" : "", "]"];
            }
            case "selector-combinator": {
              if (Te.value === "+" || Te.value === ">" || Te.value === "~" || Te.value === ">>>") {
                let nr = ft.getParentNode();
                return [nr.type === "selector-selector" && nr.nodes[0] === Te ? "" : y, Te.value, B(ft, Te) ? "" : " "];
              }
              let Xt = Te.value.trim().startsWith("(") ? y : "", Wt = jt(Dt(Te.value.trim(), Pt)) || y;
              return [Xt, Wt];
            }
            case "selector-universal":
              return [Te.namespace ? [Te.namespace === !0 ? "" : Te.namespace.trim(), "|"] : "", Te.value];
            case "selector-pseudo":
              return [f(Te.value), o(Te.nodes) ? p(["(", C([g, c([",", y], ft.map(Bt, "nodes"))]), g, ")"]) : ""];
            case "selector-nesting":
              return Te.value;
            case "selector-unknown": {
              let Xt = d(ft, "css-rule");
              if (Xt && Xt.isSCSSNesterProperty)
                return jt(Dt(f(Te.value), Pt));
              let Wt = ft.getParentNode();
              if (Wt.raws && Wt.raws.selector) {
                let Ur = pt(Wt), O = Ur + Wt.raws.selector.length;
                return Pt.originalText.slice(Ur, O).trim();
              }
              let nr = ft.getParentNode(1);
              if (Wt.type === "value-paren_group" && nr && nr.type === "value-func" && nr.value === "selector") {
                let Ur = ut(Wt.open) + 1, O = pt(Wt.close), $e = Pt.originalText.slice(Ur, O).trim();
                return H($e) ? [A, $e] : $e;
              }
              return Te.value;
            }
            case "value-value":
            case "value-root":
              return Bt("group");
            case "value-comment":
              return Pt.originalText.slice(pt(Te), ut(Te));
            case "value-comma_group": {
              let Xt = ft.getParentNode(), Wt = ft.getParentNode(1), nr = T(ft), Ur = nr && Xt.type === "value-value" && (nr === "grid" || nr.startsWith("grid-template")), O = d(ft, "css-atrule"), $e = O && I(O), vt = Te.groups.some((Gr) => Xe(Gr)), zt = ft.map(Bt, "groups"), Ht = [], jr = F(ft, "url"), cr = !1, Tr = !1;
              for (let Gr = 0; Gr < Te.groups.length; ++Gr) {
                var Sr;
                Ht.push(zt[Gr]);
                let Cr = Te.groups[Gr - 1], Nt = Te.groups[Gr], Mt = Te.groups[Gr + 1], ui = Te.groups[Gr + 2];
                if (jr) {
                  (Mt && De(Mt) || De(Nt)) && Ht.push(" ");
                  continue;
                }
                if (h(ft, "forward") && Nt.type === "value-word" && Nt.value && Cr !== void 0 && Cr.type === "value-word" && Cr.value === "as" && Mt.type === "value-operator" && Mt.value === "*" || !Mt || Nt.type === "value-word" && Nt.value.endsWith("-") && ke(Mt))
                  continue;
                if (Nt.type === "value-string" && Nt.quoted) {
                  let gs = Nt.value.lastIndexOf("#{"), ys = Nt.value.lastIndexOf("}");
                  gs !== -1 && ys !== -1 ? cr = gs > ys : gs !== -1 ? cr = !0 : ys !== -1 && (cr = !1);
                }
                if (cr || Et(Nt) || Et(Mt) || Nt.type === "value-atword" && (Nt.value === "" || Nt.value.endsWith("[")) || Mt.type === "value-word" && Mt.value.startsWith("]") || Nt.value === "~" || Nt.value && Nt.value.includes("\\") && Mt && Mt.type !== "value-comment" || Cr && Cr.value && Cr.value.indexOf("\\") === Cr.value.length - 1 && Nt.type === "value-operator" && Nt.value === "/" || Nt.value === "\\" || Ce(Nt, Mt) || Ye(Nt) || Ct(Nt) || Rt(Mt) || Ct(Mt) && we(Mt) || Rt(Nt) && we(Mt) || Nt.value === "--" && Ye(Mt))
                  continue;
                let hs = R(Nt), Ks = R(Mt);
                if ((hs && Ye(Mt) || Ks && Rt(Nt)) && we(Mt) || !Cr && j(Nt) || F(ft, "calc") && (De(Nt) || De(Mt) || U(Nt) || U(Mt)) && we(Mt))
                  continue;
                let ll = (De(Nt) || U(Nt)) && Gr === 0 && (Mt.type === "value-number" || Mt.isHex) && Wt && xe(Wt) && !we(Mt), Qs = ui && ui.type === "value-func" || ui && It(ui) || Nt.type === "value-func" || It(Nt), Zs = Mt.type === "value-func" || It(Mt) || Cr && Cr.type === "value-func" || Cr && It(Cr);
                if (!(!(te(Mt) || te(Nt)) && !F(ft, "calc") && !ll && (j(Mt) && !Qs || j(Nt) && !Zs || De(Mt) && !Qs || De(Nt) && !Zs || U(Mt) || U(Nt)) && (we(Mt) || hs && (!Cr || Cr && R(Cr)))) && !((Pt.parser === "scss" || Pt.parser === "less") && hs && Nt.value === "-" && Be(Mt) && ut(Nt) === pt(Mt.open) && Mt.open.value === "(")) {
                  if (Xe(Nt)) {
                    if (Xt.type === "value-paren_group") {
                      Ht.push(w(m));
                      continue;
                    }
                    Ht.push(m);
                    continue;
                  }
                  if ($e && (M(Mt) || G(Mt) || Ie(Mt) || pe(Nt) || be(Nt))) {
                    Ht.push(" ");
                    continue;
                  }
                  if (O && O.name.toLowerCase() === "namespace") {
                    Ht.push(" ");
                    continue;
                  }
                  if (Ur) {
                    Nt.source && Mt.source && Nt.source.start.line !== Mt.source.start.line ? (Ht.push(m), Tr = !0) : Ht.push(" ");
                    continue;
                  }
                  if (Ks) {
                    Ht.push(" ");
                    continue;
                  }
                  if (!(Mt && Mt.value === "...") && !(ke(Nt) && ke(Mt) && ut(Nt) === pt(Mt))) {
                    if (ke(Nt) && Be(Mt) && ut(Nt) === pt(Mt.open)) {
                      Ht.push(g);
                      continue;
                    }
                    if (Nt.value === "with" && Be(Mt)) {
                      Ht.push(" ");
                      continue;
                    }
                    (Sr = Nt.value) !== null && Sr !== void 0 && Sr.endsWith("#") && Mt.value === "{" && Be(Mt.group) || Ht.push(y);
                  }
                }
              }
              return vt && Ht.push(A), Tr && Ht.unshift(m), $e ? p(C(Ht)) : E(ft) ? p(D(Ht)) : p(C(D(Ht)));
            }
            case "value-paren_group": {
              let Xt = ft.getParentNode();
              if (Xt && fe(Xt) && (Te.groups.length === 1 || Te.groups.length > 0 && Te.groups[0].type === "value-comma_group" && Te.groups[0].groups.length > 0 && Te.groups[0].groups[0].type === "value-word" && Te.groups[0].groups[0].value.startsWith("data:")))
                return [Te.open ? Bt("open") : "", c(",", ft.map(Bt, "groups")), Te.close ? Bt("close") : ""];
              if (!Te.open) {
                let jr = ft.map(Bt, "groups"), cr = [];
                for (let Tr = 0; Tr < jr.length; Tr++)
                  Tr !== 0 && cr.push([",", y]), cr.push(jr[Tr]);
                return p(C(D(cr)));
              }
              let Wt = Re(ft), nr = t(Te.groups), Ur = nr && nr.type === "value-comment", O = it(Te, Xt), $e = oe(Te, Xt), vt = $e || Wt && !O, zt = $e || O, Ht = p([Te.open ? Bt("open") : "", C([g, c([y], ft.map((jr, cr) => {
                let Tr = jr.getValue(), Gr = cr === Te.groups.length - 1, Cr = [Bt(), Gr ? "" : ","];
                if (_e(Tr) && Tr.type === "value-comma_group" && Tr.groups && Tr.groups[0].type !== "value-paren_group" && Tr.groups[2] && Tr.groups[2].type === "value-paren_group") {
                  let Nt = x(Cr[0].contents.contents);
                  Nt[1] = p(Nt[1]), Cr = [p(w(Cr))];
                }
                if (!Gr && Tr.type === "value-comma_group" && o(Tr.groups)) {
                  let Nt = t(Tr.groups);
                  !Nt.source && Nt.close && (Nt = Nt.close), Nt.source && n(Pt.originalText, Nt, ut) && Cr.push(m);
                }
                return Cr;
              }, "groups"))]), k(!Ur && v(Pt.parser, Pt.originalText) && Wt && ye(Pt) ? "," : ""), g, Te.close ? Bt("close") : ""], { shouldBreak: vt });
              return zt ? w(Ht) : Ht;
            }
            case "value-func":
              return [Te.value, h(ft, "supports") && bt(Te) ? " " : "", Bt("group")];
            case "value-paren":
              return Te.value;
            case "value-number":
              return [tr(Te.value), K(Te.unit)];
            case "value-operator":
              return Te.value;
            case "value-word":
              return Te.isColor && Te.isHex || S(Te.value) ? Te.value.toLowerCase() : Te.value;
            case "value-colon": {
              let Xt = ft.getParentNode(), Wt = Xt && Xt.groups.indexOf(Te), nr = Wt && Xt.groups[Wt - 1];
              return [Te.value, nr && typeof nr.value == "string" && t(nr.value) === "\\" || F(ft, "url") ? "" : y];
            }
            case "value-comma":
              return [Te.value, " "];
            case "value-string":
              return s(Te.raws.quote + Te.value + Te.raws.quote, Pt);
            case "value-atword":
              return ["@", Te.value];
            case "value-unicode-range":
              return Te.value;
            case "value-unknown":
              return Te.value;
            default:
              throw new Error(`Unknown postcss type ${JSON.stringify(Te.type)}`);
          }
        }
        function tt(ft, Pt, Bt) {
          let Te = [];
          return ft.each((Vr, Sr, Xt) => {
            let Wt = Xt[Sr - 1];
            if (Wt && Wt.type === "css-comment" && Wt.text.trim() === "prettier-ignore") {
              let nr = Vr.getValue();
              Te.push(Pt.originalText.slice(pt(nr), ut(nr)));
            } else
              Te.push(Bt());
            Sr !== Xt.length - 1 && (Xt[Sr + 1].type === "css-comment" && !e(Pt.originalText, pt(Xt[Sr + 1]), { backwards: !0 }) && !r(Xt[Sr]) || Xt[Sr + 1].type === "css-atrule" && Xt[Sr + 1].name === "else" && Xt[Sr].type !== "css-comment" ? Te.push(" ") : (Te.push(Pt.__isHTMLStyleAttribute ? y : m), n(Pt.originalText, Vr.getValue(), ut) && !r(Xt[Sr]) && Te.push(m)));
          }, "nodes"), Te;
        }
        var ht = /(["'])(?:(?!\1)[^\\]|\\.)*\1/gs, Ke = /(?:\d*\.\d+|\d+\.?)(?:[Ee][+-]?\d+)?/g, pr = /[A-Za-z]+/g, dt = /[$@]?[A-Z_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/g, ar = new RegExp(ht.source + `|(${dt.source})?(${Ke.source})(${pr.source})?`, "g");
        function Dt(ft, Pt) {
          return ft.replace(ht, (Bt) => s(Bt, Pt));
        }
        function Tt(ft, Pt) {
          let Bt = Pt.singleQuote ? "'" : '"';
          return ft.includes('"') || ft.includes("'") ? ft : Bt + ft + Bt;
        }
        function jt(ft) {
          return ft.replace(ar, (Pt, Bt, Te, Vr, Sr) => !Te && Vr ? tr(Vr) + f(Sr || "") : Pt);
        }
        function tr(ft) {
          return a(ft).replace(/\.0(?=$|e)/, "");
        }
        l.exports = { print: ze, embed: _, insertPragma: J, massageAstNode: P };
      } }), za = $({ "src/language-css/options.js"(u, l) {
        ue();
        var t = On();
        l.exports = { singleQuote: t.singleQuote };
      } }), Ha = $({ "src/language-css/parsers.js"() {
        ue();
      } }), Ya = $({ "node_modules/linguist-languages/data/CSS.json"(u, l) {
        l.exports = { name: "CSS", type: "markup", tmScope: "source.css", aceMode: "css", codemirrorMode: "css", codemirrorMimeType: "text/css", color: "#563d7c", extensions: [".css"], languageId: 50 };
      } }), Ka = $({ "node_modules/linguist-languages/data/PostCSS.json"(u, l) {
        l.exports = { name: "PostCSS", type: "markup", color: "#dc3a0c", tmScope: "source.postcss", group: "CSS", extensions: [".pcss", ".postcss"], aceMode: "text", languageId: 262764437 };
      } }), Qa = $({ "node_modules/linguist-languages/data/Less.json"(u, l) {
        l.exports = { name: "Less", type: "markup", color: "#1d365d", aliases: ["less-css"], extensions: [".less"], tmScope: "source.css.less", aceMode: "less", codemirrorMode: "css", codemirrorMimeType: "text/css", languageId: 198 };
      } }), Za = $({ "node_modules/linguist-languages/data/SCSS.json"(u, l) {
        l.exports = { name: "SCSS", type: "markup", color: "#c6538c", tmScope: "source.css.scss", aceMode: "scss", codemirrorMode: "css", codemirrorMimeType: "text/x-scss", extensions: [".scss"], languageId: 329 };
      } }), eo = $({ "src/language-css/index.js"(u, l) {
        ue();
        var t = vr(), a = Wa(), s = za(), e = Ha(), r = [t(Ya(), (o) => ({ since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["css"], extensions: [...o.extensions, ".wxss"] })), t(Ka(), () => ({ since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["postcss"] })), t(Qa(), () => ({ since: "1.4.0", parsers: ["less"], vscodeLanguageIds: ["less"] })), t(Za(), () => ({ since: "1.4.0", parsers: ["scss"], vscodeLanguageIds: ["scss"] }))], n = { postcss: a };
        l.exports = { languages: r, options: s, printers: n, parsers: e };
      } }), to = $({ "src/language-handlebars/loc.js"(u, l) {
        ue();
        function t(s) {
          return s.loc.start.offset;
        }
        function a(s) {
          return s.loc.end.offset;
        }
        l.exports = { locStart: t, locEnd: a };
      } }), ro = $({ "src/language-handlebars/clean.js"(u, l) {
        ue();
        function t(a, s) {
          if (a.type === "TextNode") {
            let e = a.chars.trim();
            if (!e)
              return null;
            s.chars = e.replace(/[\t\n\f\r ]+/g, " ");
          }
          a.type === "AttrNode" && a.name.toLowerCase() === "class" && delete s.value;
        }
        t.ignoredProperties = /* @__PURE__ */ new Set(["loc", "selfClosing"]), l.exports = t;
      } }), no = $({ "src/language-handlebars/html-void-elements.evaluate.js"(u, l) {
        l.exports = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"];
      } }), uo = $({ "src/language-handlebars/utils.js"(u, l) {
        ue();
        var t = mr(), a = no();
        function s(x) {
          let P = x.getValue(), _ = x.getParentNode(0);
          return !!(g(x, ["ElementNode"]) && t(_.children) === P || g(x, ["Block"]) && t(_.body) === P);
        }
        function e(x) {
          return x.toUpperCase() === x;
        }
        function r(x) {
          return m(x, ["ElementNode"]) && typeof x.tag == "string" && !x.tag.startsWith(":") && (e(x.tag[0]) || x.tag.includes("."));
        }
        var n = new Set(a);
        function o(x) {
          return n.has(x.toLowerCase()) && !e(x[0]);
        }
        function c(x) {
          return x.selfClosing === !0 || o(x.tag) || r(x) && x.children.every((P) => y(P));
        }
        function y(x) {
          return m(x, ["TextNode"]) && !/\S/.test(x.chars);
        }
        function m(x, P) {
          return x && P.includes(x.type);
        }
        function g(x, P) {
          let _ = x.getParentNode(0);
          return m(_, P);
        }
        function p(x, P) {
          let _ = w(x);
          return m(_, P);
        }
        function D(x, P) {
          let _ = k(x);
          return m(_, P);
        }
        function C(x, P) {
          var _, J, d, T;
          let f = x.getValue(), F = (_ = x.getParentNode(0)) !== null && _ !== void 0 ? _ : {}, i = (J = (d = (T = F.children) !== null && T !== void 0 ? T : F.body) !== null && d !== void 0 ? d : F.parts) !== null && J !== void 0 ? J : [], h = i.indexOf(f);
          return h !== -1 && i[h + P];
        }
        function w(x) {
          let P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
          return C(x, -P);
        }
        function k(x) {
          return C(x, 1);
        }
        function A(x) {
          return m(x, ["MustacheCommentStatement"]) && typeof x.value == "string" && x.value.trim() === "prettier-ignore";
        }
        function N(x) {
          let P = x.getValue(), _ = w(x, 2);
          return A(P) || A(_);
        }
        l.exports = { getNextNode: k, getPreviousNode: w, hasPrettierIgnore: N, isLastNodeOfSiblings: s, isNextNodeOfSomeType: D, isNodeOfSomeType: m, isParentOfSomeType: g, isPreviousNodeOfSomeType: p, isVoid: c, isWhitespaceNode: y };
      } }), io = $({ "src/language-handlebars/printer-glimmer.js"(u, l) {
        ue();
        var { builders: { dedent: t, fill: a, group: s, hardline: e, ifBreak: r, indent: n, join: o, line: c, softline: y }, utils: { getDocParts: m, replaceTextEndOfLine: g } } = wt(), { getPreferredQuote: p, isNonEmptyArray: D } = Gt(), { locStart: C, locEnd: w } = to(), k = ro(), { getNextNode: A, getPreviousNode: N, hasPrettierIgnore: x, isLastNodeOfSiblings: P, isNextNodeOfSomeType: _, isNodeOfSomeType: J, isParentOfSomeType: d, isPreviousNodeOfSomeType: T, isVoid: f, isWhitespaceNode: F } = uo(), i = 2;
        function h(H, ke, oe) {
          let Be = H.getValue();
          if (!Be)
            return "";
          if (x(H))
            return ke.originalText.slice(C(Be), w(Be));
          let pt = ke.singleQuote ? "'" : '"';
          switch (Be.type) {
            case "Block":
            case "Program":
            case "Template":
              return s(H.map(oe, "body"));
            case "ElementNode": {
              let ut = s(b(H, oe)), Le = ke.htmlWhitespaceSensitivity === "ignore" && _(H, ["ElementNode"]) ? y : "";
              if (f(Be))
                return [ut, Le];
              let v = ["</", Be.tag, ">"];
              return Be.children.length === 0 ? [ut, n(v), Le] : ke.htmlWhitespaceSensitivity === "ignore" ? [ut, n(S(H, ke, oe)), e, n(v), Le] : [ut, n(s(S(H, ke, oe))), n(v), Le];
            }
            case "BlockStatement": {
              let ut = H.getParentNode(1);
              return ut && ut.inverse && ut.inverse.body.length === 1 && ut.inverse.body[0] === Be && ut.inverse.body[0].path.parts[0] === ut.path.parts[0] ? [be(H, oe, ut.inverse.body[0].path.parts[0]), we(H, oe, ke), _e(H, oe, ke)] : [R(H, oe), s([we(H, oe, ke), _e(H, oe, ke), fe(H, oe, ke)])];
            }
            case "ElementModifierStatement":
              return s(["{{", It(H, oe), "}}"]);
            case "MustacheStatement":
              return s([I(Be), It(H, oe), q(Be)]);
            case "SubExpression":
              return s(["(", Rt(H, oe), y, ")"]);
            case "AttrNode": {
              let ut = Be.value.type === "TextNode";
              if (ut && Be.value.chars === "" && C(Be.value) === w(Be.value))
                return Be.name;
              let Le = ut ? p(Be.value.chars, pt).quote : Be.value.type === "ConcatStatement" ? p(Be.value.parts.filter((K) => K.type === "TextNode").map((K) => K.chars).join(""), pt).quote : "", v = oe("value");
              return [Be.name, "=", Le, Be.name === "class" && Le ? s(n(v)) : v, Le];
            }
            case "ConcatStatement":
              return H.map(oe, "parts");
            case "Hash":
              return o(c, H.map(oe, "pairs"));
            case "HashPair":
              return [Be.key, "=", oe("value")];
            case "TextNode": {
              let ut = Be.chars.replace(/{{/g, "\\{{"), Le = Q(H);
              if (Le) {
                if (Le === "class") {
                  let dt = ut.trim().split(/\s+/).join(" "), ar = !1, Dt = !1;
                  return d(H, ["ConcatStatement"]) && (T(H, ["MustacheStatement"]) && /^\s/.test(ut) && (ar = !0), _(H, ["MustacheStatement"]) && /\s$/.test(ut) && dt !== "" && (Dt = !0)), [ar ? c : "", dt, Dt ? c : ""];
                }
                return g(ut);
              }
              let v = /^[\t\n\f\r ]*$/.test(ut), K = !N(H), ye = !A(H);
              if (ke.htmlWhitespaceSensitivity !== "ignore") {
                let dt = /^[\t\n\f\r ]*/, ar = /[\t\n\f\r ]*$/, Dt = ye && d(H, ["Template"]), Tt = K && d(H, ["Template"]);
                if (v) {
                  if (Tt || Dt)
                    return "";
                  let Bt = [c], Te = me(ut);
                  return Te && (Bt = Xe(Te)), P(H) && (Bt = Bt.map((Vr) => t(Vr))), Bt;
                }
                let [jt] = ut.match(dt), [tr] = ut.match(ar), ft = [];
                if (jt) {
                  ft = [c];
                  let Bt = me(jt);
                  Bt && (ft = Xe(Bt)), ut = ut.replace(dt, "");
                }
                let Pt = [];
                if (tr) {
                  if (!Dt) {
                    Pt = [c];
                    let Bt = me(tr);
                    Bt && (Pt = Xe(Bt)), P(H) && (Pt = Pt.map((Te) => t(Te)));
                  }
                  ut = ut.replace(ar, "");
                }
                return [...ft, a(it(ut)), ...Pt];
              }
              let ze = me(ut), tt = Ce(ut), ht = Re(ut);
              if ((K || ye) && v && d(H, ["Block", "ElementNode", "Template"]))
                return "";
              v && ze ? (tt = Math.min(ze, i), ht = 0) : (_(H, ["BlockStatement", "ElementNode"]) && (ht = Math.max(ht, 1)), T(H, ["BlockStatement", "ElementNode"]) && (tt = Math.max(tt, 1)));
              let Ke = "", pr = "";
              return ht === 0 && _(H, ["MustacheStatement"]) && (pr = " "), tt === 0 && T(H, ["MustacheStatement"]) && (Ke = " "), K && (tt = 0, Ke = ""), ye && (ht = 0, pr = ""), ut = ut.replace(/^[\t\n\f\r ]+/g, Ke).replace(/[\t\n\f\r ]+$/, pr), [...Xe(tt), a(it(ut)), ...Xe(ht)];
            }
            case "MustacheCommentStatement": {
              let ut = C(Be), Le = w(Be), v = ke.originalText.charAt(ut + 2) === "~", K = ke.originalText.charAt(Le - 3) === "~", ye = Be.value.includes("}}") ? "--" : "";
              return ["{{", v ? "~" : "", "!", ye, Be.value, ye, K ? "~" : "", "}}"];
            }
            case "PathExpression":
              return Be.original;
            case "BooleanLiteral":
              return String(Be.value);
            case "CommentStatement":
              return ["<!--", Be.value, "-->"];
            case "StringLiteral": {
              if (Ct(H)) {
                let ut = ke.singleQuote ? '"' : "'";
                return Ye(Be.value, ut);
              }
              return Ye(Be.value, pt);
            }
            case "NumberLiteral":
              return String(Be.value);
            case "UndefinedLiteral":
              return "undefined";
            case "NullLiteral":
              return "null";
            default:
              throw new Error("unknown glimmer type: " + JSON.stringify(Be.type));
          }
        }
        function E(H, ke) {
          return C(H) - C(ke);
        }
        function b(H, ke) {
          let oe = H.getValue(), Be = ["attributes", "modifiers", "comments"].filter((ut) => D(oe[ut])), pt = Be.flatMap((ut) => oe[ut]).sort(E);
          for (let ut of Be)
            H.each((Le) => {
              let v = pt.indexOf(Le.getValue());
              pt.splice(v, 1, [c, ke()]);
            }, ut);
          return D(oe.blockParams) && pt.push(c, xe(oe)), ["<", oe.tag, n(pt), B(oe)];
        }
        function S(H, ke, oe) {
          let Be = H.getValue().children.every((pt) => F(pt));
          return ke.htmlWhitespaceSensitivity === "ignore" && Be ? "" : H.map((pt, ut) => {
            let Le = oe();
            return ut === 0 && ke.htmlWhitespaceSensitivity === "ignore" ? [y, Le] : Le;
          }, "children");
        }
        function B(H) {
          return f(H) ? r([y, "/>"], [" />", y]) : r([y, ">"], ">");
        }
        function I(H) {
          let ke = H.escaped === !1 ? "{{{" : "{{", oe = H.strip && H.strip.open ? "~" : "";
          return [ke, oe];
        }
        function q(H) {
          let ke = H.escaped === !1 ? "}}}" : "}}";
          return [H.strip && H.strip.close ? "~" : "", ke];
        }
        function G(H) {
          let ke = I(H), oe = H.openStrip.open ? "~" : "";
          return [ke, oe, "#"];
        }
        function M(H) {
          let ke = q(H);
          return [H.openStrip.close ? "~" : "", ke];
        }
        function te(H) {
          let ke = I(H), oe = H.closeStrip.open ? "~" : "";
          return [ke, oe, "/"];
        }
        function j(H) {
          let ke = q(H);
          return [H.closeStrip.close ? "~" : "", ke];
        }
        function De(H) {
          let ke = I(H), oe = H.inverseStrip.open ? "~" : "";
          return [ke, oe];
        }
        function U(H) {
          let ke = q(H);
          return [H.inverseStrip.close ? "~" : "", ke];
        }
        function R(H, ke) {
          let oe = H.getValue(), Be = [], pt = bt(H, ke);
          return pt && Be.push(s(pt)), D(oe.program.blockParams) && Be.push(xe(oe.program)), s([G(oe), Et(H, ke), Be.length > 0 ? n([c, o(c, Be)]) : "", y, M(oe)]);
        }
        function pe(H, ke) {
          return [ke.htmlWhitespaceSensitivity === "ignore" ? e : "", De(H), "else", U(H)];
        }
        function be(H, ke, oe) {
          let Be = H.getValue(), pt = H.getParentNode(1);
          return s([De(pt), ["else", " ", oe], n([c, s(bt(H, ke)), ...D(Be.program.blockParams) ? [c, xe(Be.program)] : []]), y, U(pt)]);
        }
        function fe(H, ke, oe) {
          let Be = H.getValue();
          return oe.htmlWhitespaceSensitivity === "ignore" ? [Ie(Be) ? y : e, te(Be), ke("path"), j(Be)] : [te(Be), ke("path"), j(Be)];
        }
        function Ie(H) {
          return J(H, ["BlockStatement"]) && H.program.body.every((ke) => F(ke));
        }
        function X(H) {
          return se(H) && H.inverse.body.length === 1 && J(H.inverse.body[0], ["BlockStatement"]) && H.inverse.body[0].path.parts[0] === H.path.parts[0];
        }
        function se(H) {
          return J(H, ["BlockStatement"]) && H.inverse;
        }
        function we(H, ke, oe) {
          let Be = H.getValue();
          if (Ie(Be))
            return "";
          let pt = ke("program");
          return oe.htmlWhitespaceSensitivity === "ignore" ? n([e, pt]) : n(pt);
        }
        function _e(H, ke, oe) {
          let Be = H.getValue(), pt = ke("inverse"), ut = oe.htmlWhitespaceSensitivity === "ignore" ? [e, pt] : pt;
          return X(Be) ? ut : se(Be) ? [pe(Be, oe), n(ut)] : "";
        }
        function it(H) {
          return m(o(c, ae(H)));
        }
        function ae(H) {
          return H.split(/[\t\n\f\r ]+/);
        }
        function Q(H) {
          for (let ke = 0; ke < 2; ke++) {
            let oe = H.getParentNode(ke);
            if (oe && oe.type === "AttrNode")
              return oe.name.toLowerCase();
          }
        }
        function me(H) {
          return H = typeof H == "string" ? H : "", H.split(`
`).length - 1;
        }
        function Ce(H) {
          H = typeof H == "string" ? H : "";
          let ke = (H.match(/^([^\S\n\r]*[\n\r])+/g) || [])[0] || "";
          return me(ke);
        }
        function Re(H) {
          H = typeof H == "string" ? H : "";
          let ke = (H.match(/([\n\r][^\S\n\r]*)+$/g) || [])[0] || "";
          return me(ke);
        }
        function Xe() {
          let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          return Array.from({ length: Math.min(H, i) }).fill(e);
        }
        function Ye(H, ke) {
          let { quote: oe, regex: Be } = p(H, ke);
          return [oe, H.replace(Be, `\\${oe}`), oe];
        }
        function Ct(H) {
          let ke = 0, oe = H.getParentNode(ke);
          for (; oe && J(oe, ["SubExpression"]); )
            ke++, oe = H.getParentNode(ke);
          return !!(oe && J(H.getParentNode(ke + 1), ["ConcatStatement"]) && J(H.getParentNode(ke + 2), ["AttrNode"]));
        }
        function Rt(H, ke) {
          let oe = Et(H, ke), Be = bt(H, ke);
          return Be ? n([oe, c, s(Be)]) : oe;
        }
        function It(H, ke) {
          let oe = Et(H, ke), Be = bt(H, ke);
          return Be ? [n([oe, c, Be]), y] : oe;
        }
        function Et(H, ke) {
          return ke("path");
        }
        function bt(H, ke) {
          let oe = H.getValue(), Be = [];
          if (oe.params.length > 0) {
            let pt = H.map(ke, "params");
            Be.push(...pt);
          }
          if (oe.hash && oe.hash.pairs.length > 0) {
            let pt = ke("hash");
            Be.push(pt);
          }
          return Be.length === 0 ? "" : o(c, Be);
        }
        function xe(H) {
          return ["as |", H.blockParams.join(" "), "|"];
        }
        l.exports = { print: h, massageAstNode: k };
      } }), so = $({ "src/language-handlebars/parsers.js"() {
        ue();
      } }), ao = $({ "node_modules/linguist-languages/data/Handlebars.json"(u, l) {
        l.exports = { name: "Handlebars", type: "markup", color: "#f7931e", aliases: ["hbs", "htmlbars"], extensions: [".handlebars", ".hbs"], tmScope: "text.html.handlebars", aceMode: "handlebars", languageId: 155 };
      } }), oo = $({ "src/language-handlebars/index.js"(u, l) {
        ue();
        var t = vr(), a = io(), s = so(), e = [t(ao(), () => ({ since: "2.3.0", parsers: ["glimmer"], vscodeLanguageIds: ["handlebars"] }))], r = { glimmer: a };
        l.exports = { languages: e, printers: r, parsers: s };
      } }), lo = $({ "src/language-graphql/pragma.js"(u, l) {
        ue();
        function t(s) {
          return /^\s*#[^\S\n]*@(?:format|prettier)\s*(?:\n|$)/.test(s);
        }
        function a(s) {
          return `# @format

` + s;
        }
        l.exports = { hasPragma: t, insertPragma: a };
      } }), po = $({ "src/language-graphql/loc.js"(u, l) {
        ue();
        function t(s) {
          return typeof s.start == "number" ? s.start : s.loc && s.loc.start;
        }
        function a(s) {
          return typeof s.end == "number" ? s.end : s.loc && s.loc.end;
        }
        l.exports = { locStart: t, locEnd: a };
      } }), co = $({ "src/language-graphql/printer-graphql.js"(u, l) {
        ue();
        var { builders: { join: t, hardline: a, line: s, softline: e, group: r, indent: n, ifBreak: o } } = wt(), { isNextLineEmpty: c, isNonEmptyArray: y } = Gt(), { insertPragma: m } = lo(), { locStart: g, locEnd: p } = po();
        function D(_, J, d) {
          let T = _.getValue();
          if (!T)
            return "";
          if (typeof T == "string")
            return T;
          switch (T.kind) {
            case "Document": {
              let f = [];
              return _.each((F, i, h) => {
                f.push(d()), i !== h.length - 1 && (f.push(a), c(J.originalText, F.getValue(), p) && f.push(a));
              }, "definitions"), [...f, a];
            }
            case "OperationDefinition": {
              let f = J.originalText[g(T)] !== "{", F = !!T.name;
              return [f ? T.operation : "", f && F ? [" ", d("name")] : "", f && !F && y(T.variableDefinitions) ? " " : "", y(T.variableDefinitions) ? r(["(", n([e, t([o("", ", "), e], _.map(d, "variableDefinitions"))]), e, ")"]) : "", C(_, d, T), T.selectionSet ? !f && !F ? "" : " " : "", d("selectionSet")];
            }
            case "FragmentDefinition":
              return ["fragment ", d("name"), y(T.variableDefinitions) ? r(["(", n([e, t([o("", ", "), e], _.map(d, "variableDefinitions"))]), e, ")"]) : "", " on ", d("typeCondition"), C(_, d, T), " ", d("selectionSet")];
            case "SelectionSet":
              return ["{", n([a, t(a, w(_, J, d, "selections"))]), a, "}"];
            case "Field":
              return r([T.alias ? [d("alias"), ": "] : "", d("name"), T.arguments.length > 0 ? r(["(", n([e, t([o("", ", "), e], w(_, J, d, "arguments"))]), e, ")"]) : "", C(_, d, T), T.selectionSet ? " " : "", d("selectionSet")]);
            case "Name":
              return T.value;
            case "StringValue": {
              if (T.block) {
                let f = T.value.replace(/"""/g, "\\$&").split(`
`);
                return f.length === 1 && (f[0] = f[0].trim()), f.every((F) => F === "") && (f.length = 0), t(a, ['"""', ...f, '"""']);
              }
              return ['"', T.value.replace(/["\\]/g, "\\$&").replace(/\n/g, "\\n"), '"'];
            }
            case "IntValue":
            case "FloatValue":
            case "EnumValue":
              return T.value;
            case "BooleanValue":
              return T.value ? "true" : "false";
            case "NullValue":
              return "null";
            case "Variable":
              return ["$", d("name")];
            case "ListValue":
              return r(["[", n([e, t([o("", ", "), e], _.map(d, "values"))]), e, "]"]);
            case "ObjectValue":
              return r(["{", J.bracketSpacing && T.fields.length > 0 ? " " : "", n([e, t([o("", ", "), e], _.map(d, "fields"))]), e, o("", J.bracketSpacing && T.fields.length > 0 ? " " : ""), "}"]);
            case "ObjectField":
            case "Argument":
              return [d("name"), ": ", d("value")];
            case "Directive":
              return ["@", d("name"), T.arguments.length > 0 ? r(["(", n([e, t([o("", ", "), e], w(_, J, d, "arguments"))]), e, ")"]) : ""];
            case "NamedType":
              return d("name");
            case "VariableDefinition":
              return [d("variable"), ": ", d("type"), T.defaultValue ? [" = ", d("defaultValue")] : "", C(_, d, T)];
            case "ObjectTypeExtension":
            case "ObjectTypeDefinition":
              return [d("description"), T.description ? a : "", T.kind === "ObjectTypeExtension" ? "extend " : "", "type ", d("name"), T.interfaces.length > 0 ? [" implements ", ...N(_, J, d)] : "", C(_, d, T), T.fields.length > 0 ? [" {", n([a, t(a, w(_, J, d, "fields"))]), a, "}"] : ""];
            case "FieldDefinition":
              return [d("description"), T.description ? a : "", d("name"), T.arguments.length > 0 ? r(["(", n([e, t([o("", ", "), e], w(_, J, d, "arguments"))]), e, ")"]) : "", ": ", d("type"), C(_, d, T)];
            case "DirectiveDefinition":
              return [d("description"), T.description ? a : "", "directive ", "@", d("name"), T.arguments.length > 0 ? r(["(", n([e, t([o("", ", "), e], w(_, J, d, "arguments"))]), e, ")"]) : "", T.repeatable ? " repeatable" : "", " on ", t(" | ", _.map(d, "locations"))];
            case "EnumTypeExtension":
            case "EnumTypeDefinition":
              return [d("description"), T.description ? a : "", T.kind === "EnumTypeExtension" ? "extend " : "", "enum ", d("name"), C(_, d, T), T.values.length > 0 ? [" {", n([a, t(a, w(_, J, d, "values"))]), a, "}"] : ""];
            case "EnumValueDefinition":
              return [d("description"), T.description ? a : "", d("name"), C(_, d, T)];
            case "InputValueDefinition":
              return [d("description"), T.description ? T.description.block ? a : s : "", d("name"), ": ", d("type"), T.defaultValue ? [" = ", d("defaultValue")] : "", C(_, d, T)];
            case "InputObjectTypeExtension":
            case "InputObjectTypeDefinition":
              return [d("description"), T.description ? a : "", T.kind === "InputObjectTypeExtension" ? "extend " : "", "input ", d("name"), C(_, d, T), T.fields.length > 0 ? [" {", n([a, t(a, w(_, J, d, "fields"))]), a, "}"] : ""];
            case "SchemaExtension":
              return ["extend schema", C(_, d, T), ...T.operationTypes.length > 0 ? [" {", n([a, t(a, w(_, J, d, "operationTypes"))]), a, "}"] : []];
            case "SchemaDefinition":
              return [d("description"), T.description ? a : "", "schema", C(_, d, T), " {", T.operationTypes.length > 0 ? n([a, t(a, w(_, J, d, "operationTypes"))]) : "", a, "}"];
            case "OperationTypeDefinition":
              return [d("operation"), ": ", d("type")];
            case "InterfaceTypeExtension":
            case "InterfaceTypeDefinition":
              return [d("description"), T.description ? a : "", T.kind === "InterfaceTypeExtension" ? "extend " : "", "interface ", d("name"), T.interfaces.length > 0 ? [" implements ", ...N(_, J, d)] : "", C(_, d, T), T.fields.length > 0 ? [" {", n([a, t(a, w(_, J, d, "fields"))]), a, "}"] : ""];
            case "FragmentSpread":
              return ["...", d("name"), C(_, d, T)];
            case "InlineFragment":
              return ["...", T.typeCondition ? [" on ", d("typeCondition")] : "", C(_, d, T), " ", d("selectionSet")];
            case "UnionTypeExtension":
            case "UnionTypeDefinition":
              return r([d("description"), T.description ? a : "", r([T.kind === "UnionTypeExtension" ? "extend " : "", "union ", d("name"), C(_, d, T), T.types.length > 0 ? [" =", o("", " "), n([o([s, "  "]), t([s, "| "], _.map(d, "types"))])] : ""])]);
            case "ScalarTypeExtension":
            case "ScalarTypeDefinition":
              return [d("description"), T.description ? a : "", T.kind === "ScalarTypeExtension" ? "extend " : "", "scalar ", d("name"), C(_, d, T)];
            case "NonNullType":
              return [d("type"), "!"];
            case "ListType":
              return ["[", d("type"), "]"];
            default:
              throw new Error("unknown graphql type: " + JSON.stringify(T.kind));
          }
        }
        function C(_, J, d) {
          if (d.directives.length === 0)
            return "";
          let T = t(s, _.map(J, "directives"));
          return d.kind === "FragmentDefinition" || d.kind === "OperationDefinition" ? r([s, T]) : [" ", r(n([e, T]))];
        }
        function w(_, J, d, T) {
          return _.map((f, F, i) => {
            let h = d();
            return F < i.length - 1 && c(J.originalText, f.getValue(), p) ? [h, a] : h;
          }, T);
        }
        function k(_) {
          return _.kind && _.kind !== "Comment";
        }
        function A(_) {
          let J = _.getValue();
          if (J.kind === "Comment")
            return "#" + J.value.trimEnd();
          throw new Error("Not a comment: " + JSON.stringify(J));
        }
        function N(_, J, d) {
          let T = _.getNode(), f = [], { interfaces: F } = T, i = _.map((h) => d(h), "interfaces");
          for (let h = 0; h < F.length; h++) {
            let E = F[h];
            f.push(i[h]);
            let b = F[h + 1];
            if (b) {
              let S = J.originalText.slice(E.loc.end, b.loc.start), B = S.includes("#"), I = S.replace(/#.*/g, "").trim();
              f.push(I === "," ? "," : " &", B ? s : " ");
            }
          }
          return f;
        }
        function x(_, J) {
          _.kind === "StringValue" && _.block && !_.value.includes(`
`) && (J.value = J.value.trim());
        }
        x.ignoredProperties = /* @__PURE__ */ new Set(["loc", "comments"]);
        function P(_) {
          var J;
          let d = _.getValue();
          return d == null || (J = d.comments) === null || J === void 0 ? void 0 : J.some((T) => T.value.trim() === "prettier-ignore");
        }
        l.exports = { print: D, massageAstNode: x, hasPrettierIgnore: P, insertPragma: m, printComment: A, canAttachComment: k };
      } }), Do = $({ "src/language-graphql/options.js"(u, l) {
        ue();
        var t = On();
        l.exports = { bracketSpacing: t.bracketSpacing };
      } }), fo = $({ "src/language-graphql/parsers.js"() {
        ue();
      } }), mo = $({ "node_modules/linguist-languages/data/GraphQL.json"(u, l) {
        l.exports = { name: "GraphQL", type: "data", color: "#e10098", extensions: [".graphql", ".gql", ".graphqls"], tmScope: "source.graphql", aceMode: "text", languageId: 139 };
      } }), ho = $({ "src/language-graphql/index.js"(u, l) {
        ue();
        var t = vr(), a = co(), s = Do(), e = fo(), r = [t(mo(), () => ({ since: "1.5.0", parsers: ["graphql"], vscodeLanguageIds: ["graphql"] }))], n = { graphql: a };
        l.exports = { languages: r, options: s, printers: n, parsers: e };
      } }), Js = $({ "node_modules/collapse-white-space/index.js"(u, l) {
        ue(), l.exports = t;
        function t(a) {
          return String(a).replace(/\s+/g, " ");
        }
      } }), Xs = $({ "src/language-markdown/loc.js"(u, l) {
        ue();
        function t(s) {
          return s.position.start.offset;
        }
        function a(s) {
          return s.position.end.offset;
        }
        l.exports = { locStart: t, locEnd: a };
      } }), go = $({ "src/language-markdown/constants.evaluate.js"(u, l) {
        l.exports = { cjkPattern: "(?:[\\u02ea-\\u02eb\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u2ff0-\\u303f\\u3041-\\u3096\\u3099-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312f\\u3131-\\u318e\\u3190-\\u3191\\u3196-\\u31ba\\u31c0-\\u31e3\\u31f0-\\u321e\\u322a-\\u3247\\u3260-\\u327e\\u328a-\\u32b0\\u32c0-\\u32cb\\u32d0-\\u3370\\u337b-\\u337f\\u33e0-\\u33fe\\u3400-\\u4db5\\u4e00-\\u9fef\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\\ud840-\\ud868\\ud86a-\\ud86c\\ud86f-\\ud872\\ud874-\\ud879][\\udc00-\\udfff]|\\ud82c[\\udc00-\\udd1e\\udd50-\\udd52\\udd64-\\udd67]|\\ud83c[\\ude00\\ude50-\\ude51]|\\ud869[\\udc00-\\uded6\\udf00-\\udfff]|\\ud86d[\\udc00-\\udf34\\udf40-\\udfff]|\\ud86e[\\udc00-\\udc1d\\udc20-\\udfff]|\\ud873[\\udc00-\\udea1\\udeb0-\\udfff]|\\ud87a[\\udc00-\\udfe0]|\\ud87e[\\udc00-\\ude1d])(?:[\\ufe00-\\ufe0f]|\\udb40[\\udd00-\\uddef])?", kPattern: "[\\u1100-\\u11ff\\u3001-\\u3003\\u3008-\\u3011\\u3013-\\u301f\\u302e-\\u3030\\u3037\\u30fb\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\ufe45-\\ufe46\\uff61-\\uff65\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]", punctuationPattern: "[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0a76\\u0af0\\u0c77\\u0c84\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e4f\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\\ud800[\\udd00-\\udd02\\udf9f\\udfd0]|\\ud801[\\udd6f]|\\ud802[\\udc57\\udd1f\\udd3f\\ude50-\\ude58\\ude7f\\udef0-\\udef6\\udf39-\\udf3f\\udf99-\\udf9c]|\\ud803[\\udf55-\\udf59]|\\ud804[\\udc47-\\udc4d\\udcbb-\\udcbc\\udcbe-\\udcc1\\udd40-\\udd43\\udd74-\\udd75\\uddc5-\\uddc8\\uddcd\\udddb\\udddd-\\udddf\\ude38-\\ude3d\\udea9]|\\ud805[\\udc4b-\\udc4f\\udc5b\\udc5d\\udcc6\\uddc1-\\uddd7\\ude41-\\ude43\\ude60-\\ude6c\\udf3c-\\udf3e]|\\ud806[\\udc3b\\udde2\\ude3f-\\ude46\\ude9a-\\ude9c\\ude9e-\\udea2]|\\ud807[\\udc41-\\udc45\\udc70-\\udc71\\udef7-\\udef8\\udfff]|\\ud809[\\udc70-\\udc74]|\\ud81a[\\ude6e-\\ude6f\\udef5\\udf37-\\udf3b\\udf44]|\\ud81b[\\ude97-\\ude9a\\udfe2]|\\ud82f[\\udc9f]|\\ud836[\\ude87-\\ude8b]|\\ud83a[\\udd5e-\\udd5f]" };
      } }), Ds = $({ "src/language-markdown/utils.js"(u, l) {
        ue();
        var { getLast: t } = Gt(), { locStart: a, locEnd: s } = Xs(), { cjkPattern: e, kPattern: r, punctuationPattern: n } = go(), o = ["liquidNode", "inlineCode", "emphasis", "esComment", "strong", "delete", "wikiLink", "link", "linkReference", "image", "imageReference", "footnote", "footnoteReference", "sentence", "whitespace", "word", "break", "inlineMath"], c = [...o, "tableCell", "paragraph", "heading"], y = new RegExp(r), m = new RegExp(n);
        function g(A, N) {
          let x = "non-cjk", P = "cj-letter", _ = "k-letter", J = "cjk-punctuation", d = [], T = (N.proseWrap === "preserve" ? A : A.replace(new RegExp(`(${e})
(${e})`, "g"), "$1$2")).split(/([\t\n ]+)/);
          for (let [F, i] of T.entries()) {
            if (F % 2 === 1) {
              d.push({ type: "whitespace", value: /\n/.test(i) ? `
` : " " });
              continue;
            }
            if ((F === 0 || F === T.length - 1) && i === "")
              continue;
            let h = i.split(new RegExp(`(${e})`));
            for (let [E, b] of h.entries())
              if (!((E === 0 || E === h.length - 1) && b === "")) {
                if (E % 2 === 0) {
                  b !== "" && f({ type: "word", value: b, kind: x, hasLeadingPunctuation: m.test(b[0]), hasTrailingPunctuation: m.test(t(b)) });
                  continue;
                }
                f(m.test(b) ? { type: "word", value: b, kind: J, hasLeadingPunctuation: !0, hasTrailingPunctuation: !0 } : { type: "word", value: b, kind: y.test(b) ? _ : P, hasLeadingPunctuation: !1, hasTrailingPunctuation: !1 });
              }
          }
          return d;
          function f(F) {
            let i = t(d);
            i && i.type === "word" && (i.kind === x && F.kind === P && !i.hasTrailingPunctuation || i.kind === P && F.kind === x && !F.hasLeadingPunctuation ? d.push({ type: "whitespace", value: " " }) : !h(x, J) && ![i.value, F.value].some((E) => /\u3000/.test(E)) && d.push({ type: "whitespace", value: "" })), d.push(F);
            function h(E, b) {
              return i.kind === E && F.kind === b || i.kind === b && F.kind === E;
            }
          }
        }
        function p(A, N) {
          let [, x, P, _] = N.slice(A.position.start.offset, A.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/);
          return { numberText: x, marker: P, leadingSpaces: _ };
        }
        function D(A, N) {
          if (!A.ordered || A.children.length < 2)
            return !1;
          let x = Number(p(A.children[0], N.originalText).numberText), P = Number(p(A.children[1], N.originalText).numberText);
          if (x === 0 && A.children.length > 2) {
            let _ = Number(p(A.children[2], N.originalText).numberText);
            return P === 1 && _ === 1;
          }
          return P === 1;
        }
        function C(A, N) {
          let { value: x } = A;
          return A.position.end.offset === N.length && x.endsWith(`
`) && N.endsWith(`
`) ? x.slice(0, -1) : x;
        }
        function w(A, N) {
          return function x(P, _, J) {
            let d = Object.assign({}, N(P, _, J));
            return d.children && (d.children = d.children.map((T, f) => x(T, f, [d, ...J]))), d;
          }(A, null, []);
        }
        function k(A) {
          if ((A == null ? void 0 : A.type) !== "link" || A.children.length !== 1)
            return !1;
          let [N] = A.children;
          return a(A) === a(N) && s(A) === s(N);
        }
        l.exports = { mapAst: w, splitText: g, punctuationPattern: n, getFencedCodeBlockValue: C, getOrderedListItemInfo: p, hasGitDiffFriendlyOrderedList: D, INLINE_NODE_TYPES: o, INLINE_NODE_WRAPPER_TYPES: c, isAutolink: k };
      } }), yo = $({ "src/language-markdown/embed.js"(u, l) {
        ue();
        var { inferParserByLanguage: t, getMaxContinuousCount: a } = Gt(), { builders: { hardline: s, markAsRoot: e }, utils: { replaceEndOfLine: r } } = wt(), n = cs(), { getFencedCodeBlockValue: o } = Ds();
        function c(y, m, g, p) {
          let D = y.getValue();
          if (D.type === "code" && D.lang !== null) {
            let C = t(D.lang, p);
            if (C) {
              let w = p.__inJsTemplate ? "~" : "`", k = w.repeat(Math.max(3, a(D.value, w) + 1)), A = { parser: C };
              D.lang === "tsx" && (A.filepath = "dummy.tsx");
              let N = g(o(D, p.originalText), A, { stripTrailingHardline: !0 });
              return e([k, D.lang, D.meta ? " " + D.meta : "", s, r(N), s, k]);
            }
          }
          switch (D.type) {
            case "front-matter":
              return n(D, g);
            case "importExport":
              return [g(D.value, { parser: "babel" }, { stripTrailingHardline: !0 }), s];
            case "jsx":
              return g(`<$>${D.value}</$>`, { parser: "__js_expression", rootMarker: "mdx" }, { stripTrailingHardline: !0 });
          }
          return null;
        }
        l.exports = c;
      } }), Ws = $({ "src/language-markdown/pragma.js"(u, l) {
        ue();
        var t = Gs(), a = ["format", "prettier"];
        function s(e) {
          let r = `@(${a.join("|")})`, n = new RegExp([`<!--\\s*${r}\\s*-->`, `{\\s*\\/\\*\\s*${r}\\s*\\*\\/\\s*}`, `<!--.*\r?
[\\s\\S]*(^|
)[^\\S
]*${r}[^\\S
]*($|
)[\\s\\S]*
.*-->`].join("|"), "m"), o = e.match(n);
          return (o == null ? void 0 : o.index) === 0;
        }
        l.exports = { startWithPragma: s, hasPragma: (e) => s(t(e).content.trimStart()), insertPragma: (e) => {
          let r = t(e), n = `<!-- @${a[0]} -->`;
          return r.frontMatter ? `${r.frontMatter.raw}

${n}

${r.content}` : `${n}

${r.content}`;
        } };
      } }), Eo = $({ "src/language-markdown/print-preprocess.js"(u, l) {
        ue();
        var t = mr(), { getOrderedListItemInfo: a, mapAst: s, splitText: e } = Ds(), r = /^.$/su;
        function n(k, A) {
          return k = y(k, A), k = p(k), k = c(k, A), k = C(k, A), k = w(k, A), k = D(k, A), k = o(k), k = m(k), k;
        }
        function o(k) {
          return s(k, (A) => A.type !== "import" && A.type !== "export" ? A : Object.assign(Object.assign({}, A), {}, { type: "importExport" }));
        }
        function c(k, A) {
          return s(k, (N) => N.type !== "inlineCode" || A.proseWrap === "preserve" ? N : Object.assign(Object.assign({}, N), {}, { value: N.value.replace(/\s+/g, " ") }));
        }
        function y(k, A) {
          return s(k, (N) => N.type !== "text" || N.value === "*" || N.value === "_" || !r.test(N.value) || N.position.end.offset - N.position.start.offset === N.value.length ? N : Object.assign(Object.assign({}, N), {}, { value: A.originalText.slice(N.position.start.offset, N.position.end.offset) }));
        }
        function m(k) {
          return g(k, (A, N) => A.type === "importExport" && N.type === "importExport", (A, N) => ({ type: "importExport", value: A.value + `

` + N.value, position: { start: A.position.start, end: N.position.end } }));
        }
        function g(k, A, N) {
          return s(k, (x) => {
            if (!x.children)
              return x;
            let P = x.children.reduce((_, J) => {
              let d = t(_);
              return d && A(d, J) ? _.splice(-1, 1, N(d, J)) : _.push(J), _;
            }, []);
            return Object.assign(Object.assign({}, x), {}, { children: P });
          });
        }
        function p(k) {
          return g(k, (A, N) => A.type === "text" && N.type === "text", (A, N) => ({ type: "text", value: A.value + N.value, position: { start: A.position.start, end: N.position.end } }));
        }
        function D(k, A) {
          return s(k, (N, x, P) => {
            let [_] = P;
            if (N.type !== "text")
              return N;
            let { value: J } = N;
            return _.type === "paragraph" && (x === 0 && (J = J.trimStart()), x === _.children.length - 1 && (J = J.trimEnd())), { type: "sentence", position: N.position, children: e(J, A) };
          });
        }
        function C(k, A) {
          return s(k, (N, x, P) => {
            if (N.type === "code") {
              let _ = /^\n?(?: {4,}|\t)/.test(A.originalText.slice(N.position.start.offset, N.position.end.offset));
              if (N.isIndented = _, _)
                for (let J = 0; J < P.length; J++) {
                  let d = P[J];
                  if (d.hasIndentedCodeblock)
                    break;
                  d.type === "list" && (d.hasIndentedCodeblock = !0);
                }
            }
            return N;
          });
        }
        function w(k, A) {
          return s(k, (P, _, J) => {
            if (P.type === "list" && P.children.length > 0) {
              for (let d = 0; d < J.length; d++) {
                let T = J[d];
                if (T.type === "list" && !T.isAligned)
                  return P.isAligned = !1, P;
              }
              P.isAligned = x(P);
            }
            return P;
          });
          function N(P) {
            return P.children.length === 0 ? -1 : P.children[0].position.start.column - 1;
          }
          function x(P) {
            if (!P.ordered)
              return !0;
            let [_, J] = P.children;
            if (a(_, A.originalText).leadingSpaces.length > 1)
              return !0;
            let d = N(_);
            if (d === -1)
              return !1;
            if (P.children.length === 1)
              return d % A.tabWidth === 0;
            let T = N(J);
            return d !== T ? !1 : d % A.tabWidth === 0 ? !0 : a(J, A.originalText).leadingSpaces.length > 1;
          }
        }
        l.exports = n;
      } }), Co = $({ "src/language-markdown/clean.js"(u, l) {
        ue();
        var t = Js(), { isFrontMatterNode: a } = Gt(), { startWithPragma: s } = Ws(), e = /* @__PURE__ */ new Set(["position", "raw"]);
        function r(n, o, c) {
          if ((n.type === "front-matter" || n.type === "code" || n.type === "yaml" || n.type === "import" || n.type === "export" || n.type === "jsx") && delete o.value, n.type === "list" && delete o.isAligned, (n.type === "list" || n.type === "listItem") && (delete o.spread, delete o.loose), n.type === "text" || (n.type === "inlineCode" && (o.value = n.value.replace(/[\t\n ]+/g, " ")), n.type === "wikiLink" && (o.value = n.value.trim().replace(/[\t\n]+/g, " ")), (n.type === "definition" || n.type === "linkReference" || n.type === "imageReference") && (o.label = t(n.label)), (n.type === "definition" || n.type === "link" || n.type === "image") && n.title && (o.title = n.title.replace(/\\(["')])/g, "$1")), c && c.type === "root" && c.children.length > 0 && (c.children[0] === n || a(c.children[0]) && c.children[1] === n) && n.type === "html" && s(n.value)))
            return null;
        }
        r.ignoredProperties = e, l.exports = r;
      } }), Fo = $({ "src/language-markdown/printer-markdown.js"(u, l) {
        ue();
        var t = Js(), { getLast: a, getMinNotPresentContinuousCount: s, getMaxContinuousCount: e, getStringWidth: r, isNonEmptyArray: n } = Gt(), { builders: { breakParent: o, join: c, line: y, literalline: m, markAsRoot: g, hardline: p, softline: D, ifBreak: C, fill: w, align: k, indent: A, group: N, hardlineWithoutBreakParent: x }, utils: { normalizeDoc: P, replaceTextEndOfLine: _ }, printer: { printDocToString: J } } = wt(), d = yo(), { insertPragma: T } = Ws(), { locStart: f, locEnd: F } = Xs(), i = Eo(), h = Co(), { getFencedCodeBlockValue: E, hasGitDiffFriendlyOrderedList: b, splitText: S, punctuationPattern: B, INLINE_NODE_TYPES: I, INLINE_NODE_WRAPPER_TYPES: q, isAutolink: G } = Ds(), M = /* @__PURE__ */ new Set(["importExport"]), te = ["heading", "tableCell", "link", "wikiLink"], j = /* @__PURE__ */ new Set(["listItem", "definition", "footnoteDefinition"]);
        function De(xe, H, ke) {
          let oe = xe.getValue();
          if (Xe(xe))
            return S(H.originalText.slice(oe.position.start.offset, oe.position.end.offset), H).map((Be) => Be.type === "word" ? Be.value : Be.value === "" ? "" : X(xe, Be.value, H));
          switch (oe.type) {
            case "front-matter":
              return H.originalText.slice(oe.position.start.offset, oe.position.end.offset);
            case "root":
              return oe.children.length === 0 ? "" : [P(we(xe, H, ke)), M.has(ae(oe).type) ? "" : p];
            case "paragraph":
              return _e(xe, H, ke, { postprocessor: w });
            case "sentence":
              return _e(xe, H, ke);
            case "word": {
              let Be = oe.value.replace(/\*/g, "\\$&").replace(new RegExp([`(^|${B})(_+)`, `(_+)(${B}|$)`].join("|"), "g"), (Le, v, K, ye, ze) => (K ? `${v}${K}` : `${ye}${ze}`).replace(/_/g, "\\_")), pt = (Le, v, K) => Le.type === "sentence" && K === 0, ut = (Le, v, K) => G(Le.children[K - 1]);
              return Be !== oe.value && (xe.match(void 0, pt, ut) || xe.match(void 0, pt, (Le, v, K) => Le.type === "emphasis" && K === 0, ut)) && (Be = Be.replace(/^(\\?[*_])+/, (Le) => Le.replace(/\\/g, ""))), Be;
            }
            case "whitespace": {
              let Be = xe.getParentNode(), pt = Be.children.indexOf(oe), ut = Be.children[pt + 1], Le = ut && /^>|^(?:[*+-]|#{1,6}|\d+[).])$/.test(ut.value) ? "never" : H.proseWrap;
              return X(xe, oe.value, { proseWrap: Le });
            }
            case "emphasis": {
              let Be;
              if (G(oe.children[0]))
                Be = H.originalText[oe.position.start.offset];
              else {
                let pt = xe.getParentNode(), ut = pt.children.indexOf(oe), Le = pt.children[ut - 1], v = pt.children[ut + 1];
                Be = Le && Le.type === "sentence" && Le.children.length > 0 && a(Le.children).type === "word" && !a(Le.children).hasTrailingPunctuation || v && v.type === "sentence" && v.children.length > 0 && v.children[0].type === "word" && !v.children[0].hasLeadingPunctuation || Ie(xe, "emphasis") ? "*" : "_";
              }
              return [Be, _e(xe, H, ke), Be];
            }
            case "strong":
              return ["**", _e(xe, H, ke), "**"];
            case "delete":
              return ["~~", _e(xe, H, ke), "~~"];
            case "inlineCode": {
              let Be = s(oe.value, "`"), pt = "`".repeat(Be || 1), ut = Be && !/^\s/.test(oe.value) ? " " : "";
              return [pt, ut, oe.value, ut, pt];
            }
            case "wikiLink": {
              let Be = "";
              return H.proseWrap === "preserve" ? Be = oe.value : Be = oe.value.replace(/[\t\n]+/g, " "), ["[[", Be, "]]"];
            }
            case "link":
              switch (H.originalText[oe.position.start.offset]) {
                case "<": {
                  let Be = "mailto:";
                  return ["<", oe.url.startsWith(Be) && H.originalText.slice(oe.position.start.offset + 1, oe.position.start.offset + 1 + Be.length) !== Be ? oe.url.slice(Be.length) : oe.url, ">"];
                }
                case "[":
                  return ["[", _e(xe, H, ke), "](", Ye(oe.url, ")"), Ct(oe.title, H), ")"];
                default:
                  return H.originalText.slice(oe.position.start.offset, oe.position.end.offset);
              }
            case "image":
              return ["![", oe.alt || "", "](", Ye(oe.url, ")"), Ct(oe.title, H), ")"];
            case "blockquote":
              return ["> ", k("> ", _e(xe, H, ke))];
            case "heading":
              return ["#".repeat(oe.depth) + " ", _e(xe, H, ke)];
            case "code": {
              if (oe.isIndented) {
                let ut = " ".repeat(4);
                return k(ut, [ut, ..._(oe.value, p)]);
              }
              let Be = H.__inJsTemplate ? "~" : "`", pt = Be.repeat(Math.max(3, e(oe.value, Be) + 1));
              return [pt, oe.lang || "", oe.meta ? " " + oe.meta : "", p, ..._(E(oe, H.originalText), p), p, pt];
            }
            case "html": {
              let Be = xe.getParentNode(), pt = Be.type === "root" && a(Be.children) === oe ? oe.value.trimEnd() : oe.value, ut = /^<!--.*-->$/s.test(pt);
              return _(pt, ut ? p : g(m));
            }
            case "list": {
              let Be = pe(oe, xe.getParentNode()), pt = b(oe, H);
              return _e(xe, H, ke, { processor: (ut, Le) => {
                let v = ye(), K = ut.getValue();
                if (K.children.length === 2 && K.children[1].type === "html" && K.children[0].position.start.column !== K.children[1].position.start.column)
                  return [v, U(ut, H, ke, v)];
                return [v, k(" ".repeat(v.length), U(ut, H, ke, v))];
                function ye() {
                  let ze = oe.ordered ? (Le === 0 ? oe.start : pt ? 1 : oe.start + Le) + (Be % 2 === 0 ? ". " : ") ") : Be % 2 === 0 ? "- " : "* ";
                  return oe.isAligned || oe.hasIndentedCodeblock ? R(ze, H) : ze;
                }
              } });
            }
            case "thematicBreak": {
              let Be = fe(xe, "list");
              return Be === -1 ? "---" : pe(xe.getParentNode(Be), xe.getParentNode(Be + 1)) % 2 === 0 ? "***" : "---";
            }
            case "linkReference":
              return ["[", _e(xe, H, ke), "]", oe.referenceType === "full" ? Et(oe) : oe.referenceType === "collapsed" ? "[]" : ""];
            case "imageReference":
              switch (oe.referenceType) {
                case "full":
                  return ["![", oe.alt || "", "]", Et(oe)];
                default:
                  return ["![", oe.alt, "]", oe.referenceType === "collapsed" ? "[]" : ""];
              }
            case "definition": {
              let Be = H.proseWrap === "always" ? y : " ";
              return N([Et(oe), ":", A([Be, Ye(oe.url), oe.title === null ? "" : [Be, Ct(oe.title, H, !1)]])]);
            }
            case "footnote":
              return ["[^", _e(xe, H, ke), "]"];
            case "footnoteReference":
              return bt(oe);
            case "footnoteDefinition": {
              let Be = xe.getParentNode().children[xe.getName() + 1], pt = oe.children.length === 1 && oe.children[0].type === "paragraph" && (H.proseWrap === "never" || H.proseWrap === "preserve" && oe.children[0].position.start.line === oe.children[0].position.end.line);
              return [bt(oe), ": ", pt ? _e(xe, H, ke) : N([k(" ".repeat(4), _e(xe, H, ke, { processor: (ut, Le) => Le === 0 ? N([D, ke()]) : ke() })), Be && Be.type === "footnoteDefinition" ? D : ""])];
            }
            case "table":
              return se(xe, H, ke);
            case "tableCell":
              return _e(xe, H, ke);
            case "break":
              return /\s/.test(H.originalText[oe.position.start.offset]) ? ["  ", g(m)] : ["\\", p];
            case "liquidNode":
              return _(oe.value, p);
            case "importExport":
              return [oe.value, p];
            case "esComment":
              return ["{/* ", oe.value, " */}"];
            case "jsx":
              return oe.value;
            case "math":
              return ["$$", p, oe.value ? [..._(oe.value, p), p] : "", "$$"];
            case "inlineMath":
              return H.originalText.slice(f(oe), F(oe));
            case "tableRow":
            case "listItem":
            default:
              throw new Error(`Unknown markdown type ${JSON.stringify(oe.type)}`);
          }
        }
        function U(xe, H, ke, oe) {
          let Be = xe.getValue(), pt = Be.checked === null ? "" : Be.checked ? "[x] " : "[ ] ";
          return [pt, _e(xe, H, ke, { processor: (ut, Le) => {
            if (Le === 0 && ut.getValue().type !== "list")
              return k(" ".repeat(pt.length), ke());
            let v = " ".repeat(Rt(H.tabWidth - oe.length, 0, 3));
            return [v, k(v, ke())];
          } })];
        }
        function R(xe, H) {
          let ke = oe();
          return xe + " ".repeat(ke >= 4 ? 0 : ke);
          function oe() {
            let Be = xe.length % H.tabWidth;
            return Be === 0 ? 0 : H.tabWidth - Be;
          }
        }
        function pe(xe, H) {
          return be(xe, H, (ke) => ke.ordered === xe.ordered);
        }
        function be(xe, H, ke) {
          let oe = -1;
          for (let Be of H.children)
            if (Be.type === xe.type && ke(Be) ? oe++ : oe = -1, Be === xe)
              return oe;
        }
        function fe(xe, H) {
          let ke = Array.isArray(H) ? H : [H], oe = -1, Be;
          for (; Be = xe.getParentNode(++oe); )
            if (ke.includes(Be.type))
              return oe;
          return -1;
        }
        function Ie(xe, H) {
          let ke = fe(xe, H);
          return ke === -1 ? null : xe.getParentNode(ke);
        }
        function X(xe, H, ke) {
          if (ke.proseWrap === "preserve" && H === `
`)
            return p;
          let oe = ke.proseWrap === "always" && !Ie(xe, te);
          return H !== "" ? oe ? y : " " : oe ? D : "";
        }
        function se(xe, H, ke) {
          let oe = xe.getValue(), Be = [], pt = xe.map((ze) => ze.map((tt, ht) => {
            let Ke = J(ke(), H).formatted, pr = r(Ke);
            return Be[ht] = Math.max(Be[ht] || 3, pr), { text: Ke, width: pr };
          }, "children"), "children"), ut = v(!1);
          if (H.proseWrap !== "never")
            return [o, ut];
          let Le = v(!0);
          return [o, N(C(Le, ut))];
          function v(ze) {
            let tt = [ye(pt[0], ze), K(ze)];
            return pt.length > 1 && tt.push(c(x, pt.slice(1).map((ht) => ye(ht, ze)))), c(x, tt);
          }
          function K(ze) {
            return `| ${Be.map((tt, ht) => {
              let Ke = oe.align[ht], pr = Ke === "center" || Ke === "left" ? ":" : "-", dt = Ke === "center" || Ke === "right" ? ":" : "-", ar = ze ? "-" : "-".repeat(tt - 2);
              return `${pr}${ar}${dt}`;
            }).join(" | ")} |`;
          }
          function ye(ze, tt) {
            return `| ${ze.map((ht, Ke) => {
              let { text: pr, width: dt } = ht;
              if (tt)
                return pr;
              let ar = Be[Ke] - dt, Dt = oe.align[Ke], Tt = 0;
              Dt === "right" ? Tt = ar : Dt === "center" && (Tt = Math.floor(ar / 2));
              let jt = ar - Tt;
              return `${" ".repeat(Tt)}${pr}${" ".repeat(jt)}`;
            }).join(" | ")} |`;
          }
        }
        function we(xe, H, ke) {
          let oe = [], Be = null, { children: pt } = xe.getValue();
          for (let [ut, Le] of pt.entries())
            switch (Q(Le)) {
              case "start":
                Be === null && (Be = { index: ut, offset: Le.position.end.offset });
                break;
              case "end":
                Be !== null && (oe.push({ start: Be, end: { index: ut, offset: Le.position.start.offset } }), Be = null);
                break;
            }
          return _e(xe, H, ke, { processor: (ut, Le) => {
            if (oe.length > 0) {
              let v = oe[0];
              if (Le === v.start.index)
                return [it(pt[v.start.index]), H.originalText.slice(v.start.offset, v.end.offset), it(pt[v.end.index])];
              if (v.start.index < Le && Le < v.end.index)
                return !1;
              if (Le === v.end.index)
                return oe.shift(), !1;
            }
            return ke();
          } });
        }
        function _e(xe, H, ke) {
          let oe = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, { postprocessor: Be } = oe, pt = oe.processor || (() => ke()), ut = xe.getValue(), Le = [], v;
          return xe.each((K, ye) => {
            let ze = K.getValue(), tt = pt(K, ye);
            if (tt !== !1) {
              let ht = { parts: Le, prevNode: v, parentNode: ut, options: H };
              me(ze, ht) && (Le.push(p), v && M.has(v.type) || (Ce(ze, ht) || Re(ze, ht)) && Le.push(p), Re(ze, ht) && Le.push(p)), Le.push(tt), v = ze;
            }
          }, "children"), Be ? Be(Le) : Le;
        }
        function it(xe) {
          if (xe.type === "html")
            return xe.value;
          if (xe.type === "paragraph" && Array.isArray(xe.children) && xe.children.length === 1 && xe.children[0].type === "esComment")
            return ["{/* ", xe.children[0].value, " */}"];
        }
        function ae(xe) {
          let H = xe;
          for (; n(H.children); )
            H = a(H.children);
          return H;
        }
        function Q(xe) {
          let H;
          if (xe.type === "html")
            H = xe.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/);
          else {
            let ke;
            xe.type === "esComment" ? ke = xe : xe.type === "paragraph" && xe.children.length === 1 && xe.children[0].type === "esComment" && (ke = xe.children[0]), ke && (H = ke.value.match(/^prettier-ignore(?:-(start|end))?$/));
          }
          return H ? H[1] || "next" : !1;
        }
        function me(xe, H) {
          let ke = H.parts.length === 0, oe = I.includes(xe.type), Be = xe.type === "html" && q.includes(H.parentNode.type);
          return !ke && !oe && !Be;
        }
        function Ce(xe, H) {
          var ke, oe, Be;
          let pt = (H.prevNode && H.prevNode.type) === xe.type && j.has(xe.type), ut = H.parentNode.type === "listItem" && !H.parentNode.loose, Le = ((ke = H.prevNode) === null || ke === void 0 ? void 0 : ke.type) === "listItem" && H.prevNode.loose, v = Q(H.prevNode) === "next", K = xe.type === "html" && ((oe = H.prevNode) === null || oe === void 0 ? void 0 : oe.type) === "html" && H.prevNode.position.end.line + 1 === xe.position.start.line, ye = xe.type === "html" && H.parentNode.type === "listItem" && ((Be = H.prevNode) === null || Be === void 0 ? void 0 : Be.type) === "paragraph" && H.prevNode.position.end.line + 1 === xe.position.start.line;
          return Le || !(pt || ut || v || K || ye);
        }
        function Re(xe, H) {
          let ke = H.prevNode && H.prevNode.type === "list", oe = xe.type === "code" && xe.isIndented;
          return ke && oe;
        }
        function Xe(xe) {
          let H = Ie(xe, ["linkReference", "imageReference"]);
          return H && (H.type !== "linkReference" || H.referenceType !== "full");
        }
        function Ye(xe) {
          let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], ke = [" ", ...Array.isArray(H) ? H : [H]];
          return new RegExp(ke.map((oe) => `\\${oe}`).join("|")).test(xe) ? `<${xe}>` : xe;
        }
        function Ct(xe, H) {
          let ke = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
          if (!xe)
            return "";
          if (ke)
            return " " + Ct(xe, H, !1);
          if (xe = xe.replace(/\\(["')])/g, "$1"), xe.includes('"') && xe.includes("'") && !xe.includes(")"))
            return `(${xe})`;
          let oe = xe.split("'").length - 1, Be = xe.split('"').length - 1, pt = oe > Be ? '"' : Be > oe || H.singleQuote ? "'" : '"';
          return xe = xe.replace(/\\/, "\\\\"), xe = xe.replace(new RegExp(`(${pt})`, "g"), "\\$1"), `${pt}${xe}${pt}`;
        }
        function Rt(xe, H, ke) {
          return xe < H ? H : xe > ke ? ke : xe;
        }
        function It(xe) {
          let H = Number(xe.getName());
          if (H === 0)
            return !1;
          let ke = xe.getParentNode().children[H - 1];
          return Q(ke) === "next";
        }
        function Et(xe) {
          return `[${t(xe.label)}]`;
        }
        function bt(xe) {
          return `[^${xe.label}]`;
        }
        l.exports = { preprocess: i, print: De, embed: d, massageAstNode: h, hasPrettierIgnore: It, insertPragma: T };
      } }), Ao = $({ "src/language-markdown/options.js"(u, l) {
        ue();
        var t = On();
        l.exports = { proseWrap: t.proseWrap, singleQuote: t.singleQuote };
      } }), vo = $({ "src/language-markdown/parsers.js"() {
        ue();
      } }), zs = $({ "node_modules/linguist-languages/data/Markdown.json"(u, l) {
        l.exports = { name: "Markdown", type: "prose", color: "#083fa1", aliases: ["pandoc"], aceMode: "markdown", codemirrorMode: "gfm", codemirrorMimeType: "text/x-gfm", wrap: !0, extensions: [".md", ".livemd", ".markdown", ".mdown", ".mdwn", ".mdx", ".mkd", ".mkdn", ".mkdown", ".ronn", ".scd", ".workbook"], filenames: ["contents.lr"], tmScope: "source.gfm", languageId: 222 };
      } }), bo = $({ "src/language-markdown/index.js"(u, l) {
        ue();
        var t = vr(), a = Fo(), s = Ao(), e = vo(), r = [t(zs(), (o) => ({ since: "1.8.0", parsers: ["markdown"], vscodeLanguageIds: ["markdown"], filenames: [...o.filenames, "README"], extensions: o.extensions.filter((c) => c !== ".mdx") })), t(zs(), () => ({ name: "MDX", since: "1.15.0", parsers: ["mdx"], vscodeLanguageIds: ["mdx"], filenames: [], extensions: [".mdx"] }))], n = { mdast: a };
        l.exports = { languages: r, options: s, printers: n, parsers: e };
      } }), So = $({ "src/language-html/clean.js"(u, l) {
        ue();
        var { isFrontMatterNode: t } = Gt(), a = /* @__PURE__ */ new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan"]);
        function s(e, r) {
          if (e.type === "text" || e.type === "comment" || t(e) || e.type === "yaml" || e.type === "toml")
            return null;
          e.type === "attribute" && delete r.value, e.type === "docType" && delete r.value;
        }
        s.ignoredProperties = a, l.exports = s;
      } }), xo = $({ "src/language-html/constants.evaluate.js"(u, l) {
        l.exports = { CSS_DISPLAY_TAGS: { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", source: "block", style: "none", template: "inline", track: "block", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", fieldset: "block", button: "inline-block", details: "block", summary: "block", dialog: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", select: "inline-block", option: "block", optgroup: "block" }, CSS_DISPLAY_DEFAULT: "inline", CSS_WHITE_SPACE_TAGS: { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" }, CSS_WHITE_SPACE_DEFAULT: "normal" };
      } }), To = $({ "src/language-html/utils/is-unknown-namespace.js"(u, l) {
        ue();
        function t(a) {
          return a.type === "element" && !a.hasExplicitNamespace && !["html", "svg"].includes(a.namespace);
        }
        l.exports = t;
      } }), $n = $({ "src/language-html/utils/index.js"(u, l) {
        ue();
        var { inferParserByLanguage: t, isFrontMatterNode: a } = Gt(), { builders: { line: s, hardline: e, join: r }, utils: { getDocParts: n, replaceTextEndOfLine: o } } = wt(), { CSS_DISPLAY_TAGS: c, CSS_DISPLAY_DEFAULT: y, CSS_WHITE_SPACE_TAGS: m, CSS_WHITE_SPACE_DEFAULT: g } = xo(), p = To(), D = /* @__PURE__ */ new Set(["	", `
`, "\f", "\r", " "]), C = (v) => v.replace(/^[\t\n\f\r ]+/, ""), w = (v) => v.replace(/[\t\n\f\r ]+$/, ""), k = (v) => C(w(v)), A = (v) => v.replace(/^[\t\f\r ]*\n/g, ""), N = (v) => A(w(v)), x = (v) => v.split(/[\t\n\f\r ]+/), P = (v) => v.match(/^[\t\n\f\r ]*/)[0], _ = (v) => {
          let [, K, ye, ze] = v.match(/^([\t\n\f\r ]*)(.*?)([\t\n\f\r ]*)$/s);
          return { leadingWhitespace: K, trailingWhitespace: ze, text: ye };
        }, J = (v) => /[\t\n\f\r ]/.test(v);
        function d(v, K) {
          return !!(v.type === "ieConditionalComment" && v.lastChild && !v.lastChild.isSelfClosing && !v.lastChild.endSourceSpan || v.type === "ieConditionalComment" && !v.complete || Ce(v) && v.children.some((ye) => ye.type !== "text" && ye.type !== "interpolation") || oe(v, K) && !i(v) && v.type !== "interpolation");
        }
        function T(v) {
          return v.type === "attribute" || !v.parent || !v.prev ? !1 : f(v.prev);
        }
        function f(v) {
          return v.type === "comment" && v.value.trim() === "prettier-ignore";
        }
        function F(v) {
          return v.type === "text" || v.type === "comment";
        }
        function i(v) {
          return v.type === "element" && (v.fullName === "script" || v.fullName === "style" || v.fullName === "svg:style" || p(v) && (v.name === "script" || v.name === "style"));
        }
        function h(v) {
          return v.children && !i(v);
        }
        function E(v) {
          return i(v) || v.type === "interpolation" || b(v);
        }
        function b(v) {
          return Ct(v).startsWith("pre");
        }
        function S(v, K) {
          let ye = ze();
          if (ye && !v.prev && v.parent && v.parent.tagDefinition && v.parent.tagDefinition.ignoreFirstLf)
            return v.type === "interpolation";
          return ye;
          function ze() {
            return a(v) ? !1 : (v.type === "text" || v.type === "interpolation") && v.prev && (v.prev.type === "text" || v.prev.type === "interpolation") ? !0 : !v.parent || v.parent.cssDisplay === "none" ? !1 : Ce(v.parent) ? !0 : !(!v.prev && (v.parent.type === "root" || Ce(v) && v.parent || i(v.parent) || H(v.parent, K) || !_e(v.parent.cssDisplay)) || v.prev && !Q(v.prev.cssDisplay));
          }
        }
        function B(v, K) {
          return a(v) ? !1 : (v.type === "text" || v.type === "interpolation") && v.next && (v.next.type === "text" || v.next.type === "interpolation") ? !0 : !v.parent || v.parent.cssDisplay === "none" ? !1 : Ce(v.parent) ? !0 : !(!v.next && (v.parent.type === "root" || Ce(v) && v.parent || i(v.parent) || H(v.parent, K) || !it(v.parent.cssDisplay)) || v.next && !ae(v.next.cssDisplay));
        }
        function I(v) {
          return me(v.cssDisplay) && !i(v);
        }
        function q(v) {
          return a(v) || v.next && v.sourceSpan.end && v.sourceSpan.end.line + 1 < v.next.sourceSpan.start.line;
        }
        function G(v) {
          return M(v) || v.type === "element" && v.children.length > 0 && (["body", "script", "style"].includes(v.name) || v.children.some((K) => fe(K))) || v.firstChild && v.firstChild === v.lastChild && v.firstChild.type !== "text" && U(v.firstChild) && (!v.lastChild.isTrailingSpaceSensitive || R(v.lastChild));
        }
        function M(v) {
          return v.type === "element" && v.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(v.name) || v.cssDisplay.startsWith("table") && v.cssDisplay !== "table-cell");
        }
        function te(v) {
          return pe(v) || v.prev && j(v.prev) || De(v);
        }
        function j(v) {
          return pe(v) || v.type === "element" && v.fullName === "br" || De(v);
        }
        function De(v) {
          return U(v) && R(v);
        }
        function U(v) {
          return v.hasLeadingSpaces && (v.prev ? v.prev.sourceSpan.end.line < v.sourceSpan.start.line : v.parent.type === "root" || v.parent.startSourceSpan.end.line < v.sourceSpan.start.line);
        }
        function R(v) {
          return v.hasTrailingSpaces && (v.next ? v.next.sourceSpan.start.line > v.sourceSpan.end.line : v.parent.type === "root" || v.parent.endSourceSpan && v.parent.endSourceSpan.start.line > v.sourceSpan.end.line);
        }
        function pe(v) {
          switch (v.type) {
            case "ieConditionalComment":
            case "comment":
            case "directive":
              return !0;
            case "element":
              return ["script", "select"].includes(v.name);
          }
          return !1;
        }
        function be(v) {
          return v.lastChild ? be(v.lastChild) : v;
        }
        function fe(v) {
          return v.children && v.children.some((K) => K.type !== "text");
        }
        function Ie(v) {
          let { type: K, lang: ye } = v.attrMap;
          if (K === "module" || K === "text/javascript" || K === "text/babel" || K === "application/javascript" || ye === "jsx")
            return "babel";
          if (K === "application/x-typescript" || ye === "ts" || ye === "tsx")
            return "typescript";
          if (K === "text/markdown")
            return "markdown";
          if (K === "text/html")
            return "html";
          if (K && (K.endsWith("json") || K.endsWith("importmap")) || K === "speculationrules")
            return "json";
          if (K === "text/x-handlebars-template")
            return "glimmer";
        }
        function X(v, K) {
          let { lang: ye } = v.attrMap;
          if (!ye || ye === "postcss" || ye === "css")
            return "css";
          if (ye === "scss")
            return "scss";
          if (ye === "less")
            return "less";
          if (ye === "stylus")
            return t("stylus", K);
        }
        function se(v, K) {
          if (v.name === "script" && !v.attrMap.src)
            return !v.attrMap.lang && !v.attrMap.type ? "babel" : Ie(v);
          if (v.name === "style")
            return X(v, K);
          if (K && oe(v, K))
            return Ie(v) || !("src" in v.attrMap) && t(v.attrMap.lang, K);
        }
        function we(v) {
          return v === "block" || v === "list-item" || v.startsWith("table");
        }
        function _e(v) {
          return !we(v) && v !== "inline-block";
        }
        function it(v) {
          return !we(v) && v !== "inline-block";
        }
        function ae(v) {
          return !we(v);
        }
        function Q(v) {
          return !we(v);
        }
        function me(v) {
          return !we(v) && v !== "inline-block";
        }
        function Ce(v) {
          return Ct(v).startsWith("pre");
        }
        function Re(v, K) {
          let ye = 0;
          for (let ze = v.stack.length - 1; ze >= 0; ze--) {
            let tt = v.stack[ze];
            tt && typeof tt == "object" && !Array.isArray(tt) && K(tt) && ye++;
          }
          return ye;
        }
        function Xe(v, K) {
          let ye = v;
          for (; ye; ) {
            if (K(ye))
              return !0;
            ye = ye.parent;
          }
          return !1;
        }
        function Ye(v, K) {
          if (v.prev && v.prev.type === "comment") {
            let ze = v.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
            if (ze)
              return ze[1];
          }
          let ye = !1;
          if (v.type === "element" && v.namespace === "svg")
            if (Xe(v, (ze) => ze.fullName === "svg:foreignObject"))
              ye = !0;
            else
              return v.name === "svg" ? "inline-block" : "block";
          switch (K.htmlWhitespaceSensitivity) {
            case "strict":
              return "inline";
            case "ignore":
              return "block";
            default:
              return K.parser === "vue" && v.parent && v.parent.type === "root" ? "block" : v.type === "element" && (!v.namespace || ye || p(v)) && c[v.name] || y;
          }
        }
        function Ct(v) {
          return v.type === "element" && (!v.namespace || p(v)) && m[v.name] || g;
        }
        function Rt(v) {
          let K = Number.POSITIVE_INFINITY;
          for (let ye of v.split(`
`)) {
            if (ye.length === 0)
              continue;
            if (!D.has(ye[0]))
              return 0;
            let ze = P(ye).length;
            ye.length !== ze && ze < K && (K = ze);
          }
          return K === Number.POSITIVE_INFINITY ? 0 : K;
        }
        function It(v) {
          let K = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rt(v);
          return K === 0 ? v : v.split(`
`).map((ye) => ye.slice(K)).join(`
`);
        }
        function Et(v, K) {
          let ye = 0;
          for (let ze = 0; ze < v.length; ze++)
            v[ze] === K && ye++;
          return ye;
        }
        function bt(v) {
          return v.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
        }
        var xe = /* @__PURE__ */ new Set(["template", "style", "script"]);
        function H(v, K) {
          return ke(v, K) && !xe.has(v.fullName);
        }
        function ke(v, K) {
          return K.parser === "vue" && v.type === "element" && v.parent.type === "root" && v.fullName.toLowerCase() !== "html";
        }
        function oe(v, K) {
          return ke(v, K) && (H(v, K) || v.attrMap.lang && v.attrMap.lang !== "html");
        }
        function Be(v) {
          let K = v.fullName;
          return K.charAt(0) === "#" || K === "slot-scope" || K === "v-slot" || K.startsWith("v-slot:");
        }
        function pt(v, K) {
          let ye = v.parent;
          if (!ke(ye, K))
            return !1;
          let ze = ye.fullName, tt = v.fullName;
          return ze === "script" && tt === "setup" || ze === "style" && tt === "vars";
        }
        function ut(v) {
          let K = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : v.value;
          return v.parent.isWhitespaceSensitive ? v.parent.isIndentationSensitive ? o(K) : o(It(N(K)), e) : n(r(s, x(K)));
        }
        function Le(v, K) {
          return ke(v, K) && v.name === "script";
        }
        l.exports = { htmlTrim: k, htmlTrimPreserveIndentation: N, hasHtmlWhitespace: J, getLeadingAndTrailingHtmlWhitespace: _, canHaveInterpolation: h, countChars: Et, countParents: Re, dedentString: It, forceBreakChildren: M, forceBreakContent: G, forceNextEmptyLine: q, getLastDescendant: be, getNodeCssStyleDisplay: Ye, getNodeCssStyleWhiteSpace: Ct, hasPrettierIgnore: T, inferScriptParser: se, isVueCustomBlock: H, isVueNonHtmlBlock: oe, isVueScriptTag: Le, isVueSlotAttribute: Be, isVueSfcBindingsAttribute: pt, isVueSfcBlock: ke, isDanglingSpaceSensitiveNode: I, isIndentationSensitiveNode: b, isLeadingSpaceSensitiveNode: S, isPreLikeNode: Ce, isScriptLikeTag: i, isTextLikeNode: F, isTrailingSpaceSensitiveNode: B, isWhitespaceSensitiveNode: E, isUnknownNamespace: p, preferHardlineAsLeadingSpaces: te, preferHardlineAsTrailingSpaces: j, shouldPreserveContent: d, unescapeQuoteEntities: bt, getTextValueParts: ut };
      } }), Bo = $({ "node_modules/angular-html-parser/lib/compiler/src/chars.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 }), u.$EOF = 0, u.$BSPACE = 8, u.$TAB = 9, u.$LF = 10, u.$VTAB = 11, u.$FF = 12, u.$CR = 13, u.$SPACE = 32, u.$BANG = 33, u.$DQ = 34, u.$HASH = 35, u.$$ = 36, u.$PERCENT = 37, u.$AMPERSAND = 38, u.$SQ = 39, u.$LPAREN = 40, u.$RPAREN = 41, u.$STAR = 42, u.$PLUS = 43, u.$COMMA = 44, u.$MINUS = 45, u.$PERIOD = 46, u.$SLASH = 47, u.$COLON = 58, u.$SEMICOLON = 59, u.$LT = 60, u.$EQ = 61, u.$GT = 62, u.$QUESTION = 63, u.$0 = 48, u.$7 = 55, u.$9 = 57, u.$A = 65, u.$E = 69, u.$F = 70, u.$X = 88, u.$Z = 90, u.$LBRACKET = 91, u.$BACKSLASH = 92, u.$RBRACKET = 93, u.$CARET = 94, u.$_ = 95, u.$a = 97, u.$b = 98, u.$e = 101, u.$f = 102, u.$n = 110, u.$r = 114, u.$t = 116, u.$u = 117, u.$v = 118, u.$x = 120, u.$z = 122, u.$LBRACE = 123, u.$BAR = 124, u.$RBRACE = 125, u.$NBSP = 160, u.$PIPE = 124, u.$TILDA = 126, u.$AT = 64, u.$BT = 96;
        function l(n) {
          return n >= u.$TAB && n <= u.$SPACE || n == u.$NBSP;
        }
        u.isWhitespace = l;
        function t(n) {
          return u.$0 <= n && n <= u.$9;
        }
        u.isDigit = t;
        function a(n) {
          return n >= u.$a && n <= u.$z || n >= u.$A && n <= u.$Z;
        }
        u.isAsciiLetter = a;
        function s(n) {
          return n >= u.$a && n <= u.$f || n >= u.$A && n <= u.$F || t(n);
        }
        u.isAsciiHexDigit = s;
        function e(n) {
          return n === u.$LF || n === u.$CR;
        }
        u.isNewLine = e;
        function r(n) {
          return u.$0 <= n && n <= u.$7;
        }
        u.isOctalDigit = r;
      } }), wo = $({ "node_modules/angular-html-parser/lib/compiler/src/aot/static_symbol.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = class {
          constructor(a, s, e) {
            this.filePath = a, this.name = s, this.members = e;
          }
          assertNoMembers() {
            if (this.members.length)
              throw new Error(`Illegal state: symbol without members expected, but got ${JSON.stringify(this)}.`);
          }
        };
        u.StaticSymbol = l;
        var t = class {
          constructor() {
            this.cache = /* @__PURE__ */ new Map();
          }
          get(a, s, e) {
            e = e || [];
            let r = e.length ? `.${e.join(".")}` : "", n = `"${a}".${s}${r}`, o = this.cache.get(n);
            return o || (o = new l(a, s, e), this.cache.set(n, o)), o;
          }
        };
        u.StaticSymbolCache = t;
      } }), No = $({ "node_modules/angular-html-parser/lib/compiler/src/util.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = /-+([a-z0-9])/g;
        function t(i) {
          return i.replace(l, function() {
            for (var h = arguments.length, E = new Array(h), b = 0; b < h; b++)
              E[b] = arguments[b];
            return E[1].toUpperCase();
          });
        }
        u.dashCaseToCamelCase = t;
        function a(i, h) {
          return e(i, ":", h);
        }
        u.splitAtColon = a;
        function s(i, h) {
          return e(i, ".", h);
        }
        u.splitAtPeriod = s;
        function e(i, h, E) {
          let b = i.indexOf(h);
          return b == -1 ? E : [i.slice(0, b).trim(), i.slice(b + 1).trim()];
        }
        function r(i, h, E) {
          return Array.isArray(i) ? h.visitArray(i, E) : A(i) ? h.visitStringMap(i, E) : i == null || typeof i == "string" || typeof i == "number" || typeof i == "boolean" ? h.visitPrimitive(i, E) : h.visitOther(i, E);
        }
        u.visitValue = r;
        function n(i) {
          return i != null;
        }
        u.isDefined = n;
        function o(i) {
          return i === void 0 ? null : i;
        }
        u.noUndefined = o;
        var c = class {
          visitArray(i, h) {
            return i.map((E) => r(E, this, h));
          }
          visitStringMap(i, h) {
            let E = {};
            return Object.keys(i).forEach((b) => {
              E[b] = r(i[b], this, h);
            }), E;
          }
          visitPrimitive(i, h) {
            return i;
          }
          visitOther(i, h) {
            return i;
          }
        };
        u.ValueTransformer = c, u.SyncAsync = { assertSync: (i) => {
          if (_(i))
            throw new Error("Illegal state: value cannot be a promise");
          return i;
        }, then: (i, h) => _(i) ? i.then(h) : h(i), all: (i) => i.some(_) ? Promise.all(i) : i };
        function y(i) {
          throw new Error(`Internal Error: ${i}`);
        }
        u.error = y;
        function m(i, h) {
          let E = Error(i);
          return E[g] = !0, h && (E[p] = h), E;
        }
        u.syntaxError = m;
        var g = "ngSyntaxError", p = "ngParseErrors";
        function D(i) {
          return i[g];
        }
        u.isSyntaxError = D;
        function C(i) {
          return i[p] || [];
        }
        u.getParseErrors = C;
        function w(i) {
          return i.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
        }
        u.escapeRegExp = w;
        var k = Object.getPrototypeOf({});
        function A(i) {
          return typeof i == "object" && i !== null && Object.getPrototypeOf(i) === k;
        }
        function N(i) {
          let h = "";
          for (let E = 0; E < i.length; E++) {
            let b = i.charCodeAt(E);
            if (b >= 55296 && b <= 56319 && i.length > E + 1) {
              let S = i.charCodeAt(E + 1);
              S >= 56320 && S <= 57343 && (E++, b = (b - 55296 << 10) + S - 56320 + 65536);
            }
            b <= 127 ? h += String.fromCharCode(b) : b <= 2047 ? h += String.fromCharCode(b >> 6 & 31 | 192, b & 63 | 128) : b <= 65535 ? h += String.fromCharCode(b >> 12 | 224, b >> 6 & 63 | 128, b & 63 | 128) : b <= 2097151 && (h += String.fromCharCode(b >> 18 & 7 | 240, b >> 12 & 63 | 128, b >> 6 & 63 | 128, b & 63 | 128));
          }
          return h;
        }
        u.utf8Encode = N;
        function x(i) {
          if (typeof i == "string")
            return i;
          if (i instanceof Array)
            return "[" + i.map(x).join(", ") + "]";
          if (i == null)
            return "" + i;
          if (i.overriddenName)
            return `${i.overriddenName}`;
          if (i.name)
            return `${i.name}`;
          if (!i.toString)
            return "object";
          let h = i.toString();
          if (h == null)
            return "" + h;
          let E = h.indexOf(`
`);
          return E === -1 ? h : h.substring(0, E);
        }
        u.stringify = x;
        function P(i) {
          return typeof i == "function" && i.hasOwnProperty("__forward_ref__") ? i() : i;
        }
        u.resolveForwardRef = P;
        function _(i) {
          return !!i && typeof i.then == "function";
        }
        u.isPromise = _;
        var J = class {
          constructor(i) {
            this.full = i;
            let h = i.split(".");
            this.major = h[0], this.minor = h[1], this.patch = h.slice(2).join(".");
          }
        };
        u.Version = J;
        var d = typeof window < "u" && window, T = typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self, f = typeof globalThis < "u" && globalThis, F = f || d || T;
        u.global = F;
      } }), _o = $({ "node_modules/angular-html-parser/lib/compiler/src/compile_metadata.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = wo(), t = No(), a = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
        function s(E) {
          return E.replace(/\W/g, "_");
        }
        u.sanitizeIdentifier = s;
        var e = 0;
        function r(E) {
          if (!E || !E.reference)
            return null;
          let b = E.reference;
          if (b instanceof l.StaticSymbol)
            return b.name;
          if (b.__anonymousType)
            return b.__anonymousType;
          let S = t.stringify(b);
          return S.indexOf("(") >= 0 ? (S = `anonymous_${e++}`, b.__anonymousType = S) : S = s(S), S;
        }
        u.identifierName = r;
        function n(E) {
          let b = E.reference;
          return b instanceof l.StaticSymbol ? b.filePath : `./${t.stringify(b)}`;
        }
        u.identifierModuleUrl = n;
        function o(E, b) {
          return `View_${r({ reference: E })}_${b}`;
        }
        u.viewClassName = o;
        function c(E) {
          return `RenderType_${r({ reference: E })}`;
        }
        u.rendererTypeName = c;
        function y(E) {
          return `HostView_${r({ reference: E })}`;
        }
        u.hostViewClassName = y;
        function m(E) {
          return `${r({ reference: E })}NgFactory`;
        }
        u.componentFactoryName = m;
        var g;
        (function(E) {
          E[E.Pipe = 0] = "Pipe", E[E.Directive = 1] = "Directive", E[E.NgModule = 2] = "NgModule", E[E.Injectable = 3] = "Injectable";
        })(g = u.CompileSummaryKind || (u.CompileSummaryKind = {}));
        function p(E) {
          return E.value != null ? s(E.value) : r(E.identifier);
        }
        u.tokenName = p;
        function D(E) {
          return E.identifier != null ? E.identifier.reference : E.value;
        }
        u.tokenReference = D;
        var C = class {
          constructor() {
            let { moduleUrl: E, styles: b, styleUrls: S } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.moduleUrl = E || null, this.styles = _(b), this.styleUrls = _(S);
          }
        };
        u.CompileStylesheetMetadata = C;
        var w = class {
          constructor(E) {
            let { encapsulation: b, template: S, templateUrl: B, htmlAst: I, styles: q, styleUrls: G, externalStylesheets: M, animations: te, ngContentSelectors: j, interpolation: De, isInline: U, preserveWhitespaces: R } = E;
            if (this.encapsulation = b, this.template = S, this.templateUrl = B, this.htmlAst = I, this.styles = _(q), this.styleUrls = _(G), this.externalStylesheets = _(M), this.animations = te ? d(te) : [], this.ngContentSelectors = j || [], De && De.length != 2)
              throw new Error("'interpolation' should have a start and an end symbol.");
            this.interpolation = De, this.isInline = U, this.preserveWhitespaces = R;
          }
          toSummary() {
            return { ngContentSelectors: this.ngContentSelectors, encapsulation: this.encapsulation, styles: this.styles, animations: this.animations };
          }
        };
        u.CompileTemplateMetadata = w;
        var k = class {
          static create(E) {
            let { isHost: b, type: S, isComponent: B, selector: I, exportAs: q, changeDetection: G, inputs: M, outputs: te, host: j, providers: De, viewProviders: U, queries: R, guards: pe, viewQueries: be, entryComponents: fe, template: Ie, componentViewType: X, rendererType: se, componentFactory: we } = E, _e = {}, it = {}, ae = {};
            j != null && Object.keys(j).forEach((Ce) => {
              let Re = j[Ce], Xe = Ce.match(a);
              Xe === null ? ae[Ce] = Re : Xe[1] != null ? it[Xe[1]] = Re : Xe[2] != null && (_e[Xe[2]] = Re);
            });
            let Q = {};
            M == null || M.forEach((Ce) => {
              let Re = t.splitAtColon(Ce, [Ce, Ce]);
              Q[Re[0]] = Re[1];
            });
            let me = {};
            return te == null || te.forEach((Ce) => {
              let Re = t.splitAtColon(Ce, [Ce, Ce]);
              me[Re[0]] = Re[1];
            }), new k({ isHost: b, type: S, isComponent: !!B, selector: I, exportAs: q, changeDetection: G, inputs: Q, outputs: me, hostListeners: _e, hostProperties: it, hostAttributes: ae, providers: De, viewProviders: U, queries: R, guards: pe, viewQueries: be, entryComponents: fe, template: Ie, componentViewType: X, rendererType: se, componentFactory: we });
          }
          constructor(E) {
            let { isHost: b, type: S, isComponent: B, selector: I, exportAs: q, changeDetection: G, inputs: M, outputs: te, hostListeners: j, hostProperties: De, hostAttributes: U, providers: R, viewProviders: pe, queries: be, guards: fe, viewQueries: Ie, entryComponents: X, template: se, componentViewType: we, rendererType: _e, componentFactory: it } = E;
            this.isHost = !!b, this.type = S, this.isComponent = B, this.selector = I, this.exportAs = q, this.changeDetection = G, this.inputs = M, this.outputs = te, this.hostListeners = j, this.hostProperties = De, this.hostAttributes = U, this.providers = _(R), this.viewProviders = _(pe), this.queries = _(be), this.guards = fe, this.viewQueries = _(Ie), this.entryComponents = _(X), this.template = se, this.componentViewType = we, this.rendererType = _e, this.componentFactory = it;
          }
          toSummary() {
            return { summaryKind: g.Directive, type: this.type, isComponent: this.isComponent, selector: this.selector, exportAs: this.exportAs, inputs: this.inputs, outputs: this.outputs, hostListeners: this.hostListeners, hostProperties: this.hostProperties, hostAttributes: this.hostAttributes, providers: this.providers, viewProviders: this.viewProviders, queries: this.queries, guards: this.guards, viewQueries: this.viewQueries, entryComponents: this.entryComponents, changeDetection: this.changeDetection, template: this.template && this.template.toSummary(), componentViewType: this.componentViewType, rendererType: this.rendererType, componentFactory: this.componentFactory };
          }
        };
        u.CompileDirectiveMetadata = k;
        var A = class {
          constructor(E) {
            let { type: b, name: S, pure: B } = E;
            this.type = b, this.name = S, this.pure = !!B;
          }
          toSummary() {
            return { summaryKind: g.Pipe, type: this.type, name: this.name, pure: this.pure };
          }
        };
        u.CompilePipeMetadata = A;
        var N = class {
        };
        u.CompileShallowModuleMetadata = N;
        var x = class {
          constructor(E) {
            let { type: b, providers: S, declaredDirectives: B, exportedDirectives: I, declaredPipes: q, exportedPipes: G, entryComponents: M, bootstrapComponents: te, importedModules: j, exportedModules: De, schemas: U, transitiveModule: R, id: pe } = E;
            this.type = b || null, this.declaredDirectives = _(B), this.exportedDirectives = _(I), this.declaredPipes = _(q), this.exportedPipes = _(G), this.providers = _(S), this.entryComponents = _(M), this.bootstrapComponents = _(te), this.importedModules = _(j), this.exportedModules = _(De), this.schemas = _(U), this.id = pe || null, this.transitiveModule = R || null;
          }
          toSummary() {
            let E = this.transitiveModule;
            return { summaryKind: g.NgModule, type: this.type, entryComponents: E.entryComponents, providers: E.providers, modules: E.modules, exportedDirectives: E.exportedDirectives, exportedPipes: E.exportedPipes };
          }
        };
        u.CompileNgModuleMetadata = x;
        var P = class {
          constructor() {
            this.directivesSet = /* @__PURE__ */ new Set(), this.directives = [], this.exportedDirectivesSet = /* @__PURE__ */ new Set(), this.exportedDirectives = [], this.pipesSet = /* @__PURE__ */ new Set(), this.pipes = [], this.exportedPipesSet = /* @__PURE__ */ new Set(), this.exportedPipes = [], this.modulesSet = /* @__PURE__ */ new Set(), this.modules = [], this.entryComponentsSet = /* @__PURE__ */ new Set(), this.entryComponents = [], this.providers = [];
          }
          addProvider(E, b) {
            this.providers.push({ provider: E, module: b });
          }
          addDirective(E) {
            this.directivesSet.has(E.reference) || (this.directivesSet.add(E.reference), this.directives.push(E));
          }
          addExportedDirective(E) {
            this.exportedDirectivesSet.has(E.reference) || (this.exportedDirectivesSet.add(E.reference), this.exportedDirectives.push(E));
          }
          addPipe(E) {
            this.pipesSet.has(E.reference) || (this.pipesSet.add(E.reference), this.pipes.push(E));
          }
          addExportedPipe(E) {
            this.exportedPipesSet.has(E.reference) || (this.exportedPipesSet.add(E.reference), this.exportedPipes.push(E));
          }
          addModule(E) {
            this.modulesSet.has(E.reference) || (this.modulesSet.add(E.reference), this.modules.push(E));
          }
          addEntryComponent(E) {
            this.entryComponentsSet.has(E.componentType) || (this.entryComponentsSet.add(E.componentType), this.entryComponents.push(E));
          }
        };
        u.TransitiveCompileNgModuleMetadata = P;
        function _(E) {
          return E || [];
        }
        var J = class {
          constructor(E, b) {
            let { useClass: S, useValue: B, useExisting: I, useFactory: q, deps: G, multi: M } = b;
            this.token = E, this.useClass = S || null, this.useValue = B, this.useExisting = I, this.useFactory = q || null, this.dependencies = G || null, this.multi = !!M;
          }
        };
        u.ProviderMeta = J;
        function d(E) {
          return E.reduce((b, S) => {
            let B = Array.isArray(S) ? d(S) : S;
            return b.concat(B);
          }, []);
        }
        u.flatten = d;
        function T(E) {
          return E.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
        }
        function f(E, b, S) {
          let B;
          return S.isInline ? b.type.reference instanceof l.StaticSymbol ? B = `${b.type.reference.filePath}.${b.type.reference.name}.html` : B = `${r(E)}/${r(b.type)}.html` : B = S.templateUrl, b.type.reference instanceof l.StaticSymbol ? B : T(B);
        }
        u.templateSourceUrl = f;
        function F(E, b) {
          let S = E.moduleUrl.split(/\/\\/g), B = S[S.length - 1];
          return T(`css/${b}${B}.ngstyle.js`);
        }
        u.sharedStylesheetJitUrl = F;
        function i(E) {
          return T(`${r(E.type)}/module.ngfactory.js`);
        }
        u.ngModuleJitUrl = i;
        function h(E, b) {
          return T(`${r(E)}/${r(b.type)}.ngfactory.js`);
        }
        u.templateJitUrl = h;
      } }), ko = $({ "node_modules/angular-html-parser/lib/compiler/src/parse_util.js"(u) {
        ue(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = Bo(), t = _o(), a = class {
          constructor(y, m, g, p) {
            this.file = y, this.offset = m, this.line = g, this.col = p;
          }
          toString() {
            return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
          }
          moveBy(y) {
            let m = this.file.content, g = m.length, p = this.offset, D = this.line, C = this.col;
            for (; p > 0 && y < 0; )
              if (p--, y++, m.charCodeAt(p) == l.$LF) {
                D--;
                let w = m.substr(0, p - 1).lastIndexOf(String.fromCharCode(l.$LF));
                C = w > 0 ? p - w : p;
              } else
                C--;
            for (; p < g && y > 0; ) {
              let w = m.charCodeAt(p);
              p++, y--, w == l.$LF ? (D++, C = 0) : C++;
            }
            return new a(this.file, p, D, C);
          }
          getContext(y, m) {
            let g = this.file.content, p = this.offset;
            if (p != null) {
              p > g.length - 1 && (p = g.length - 1);
              let D = p, C = 0, w = 0;
              for (; C < y && p > 0 && (p--, C++, !(g[p] == `
` && ++w == m)); )
                ;
              for (C = 0, w = 0; C < y && D < g.length - 1 && (D++, C++, !(g[D] == `
` && ++w == m)); )
                ;
              return { before: g.substring(p, this.offset), after: g.substring(this.offset, D + 1) };
            }
            return null;
          }
        };
        u.ParseLocation = a;
        var s = class {
          constructor(y, m) {
            this.content = y, this.url = m;
          }
        };
        u.ParseSourceFile = s;
        var e = class {
          constructor(y, m) {
            let g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
            this.start = y, this.end = m, this.details = g;
          }
          toString() {
            return this.start.file.content.substring(this.start.offset, this.end.offset);
          }
        };
        u.ParseSourceSpan = e, u.EMPTY_PARSE_LOCATION = new a(new s("", ""), 0, 0, 0), u.EMPTY_SOURCE_SPAN = new e(u.EMPTY_PARSE_LOCATION, u.EMPTY_PARSE_LOCATION);
        var r;
        (function(y) {
          y[y.WARNING = 0] = "WARNING", y[y.ERROR = 1] = "ERROR";
        })(r = u.ParseErrorLevel || (u.ParseErrorLevel = {}));
        var n = class {
          constructor(y, m) {
            let g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : r.ERROR;
            this.span = y, this.msg = m, this.level = g;
          }
          contextualMessage() {
            let y = this.span.start.getContext(100, 3);
            return y ? `${this.msg} ("${y.before}[${r[this.level]} ->]${y.after}")` : this.msg;
          }
          toString() {
            let y = this.span.details ? `, ${this.span.details}` : "";
            return `${this.contextualMessage()}: ${this.span.start}${y}`;
          }
        };
        u.ParseError = n;
        function o(y, m) {
          let g = t.identifierModuleUrl(m), p = g != null ? `in ${y} ${t.identifierName(m)} in ${g}` : `in ${y} ${t.identifierName(m)}`, D = new s("", p);
          return new e(new a(D, -1, -1, -1), new a(D, -1, -1, -1));
        }
        u.typeSourceSpan = o;
        function c(y, m, g) {
          let p = `in ${y} ${m} in ${g}`, D = new s("", p);
          return new e(new a(D, -1, -1, -1), new a(D, -1, -1, -1));
        }
        u.r3JitTypeSourceSpan = c;
      } }), Po = $({ "src/language-html/print-preprocess.js"(u, l) {
        ue();
        var { ParseSourceSpan: t } = ko(), { htmlTrim: a, getLeadingAndTrailingHtmlWhitespace: s, hasHtmlWhitespace: e, canHaveInterpolation: r, getNodeCssStyleDisplay: n, isDanglingSpaceSensitiveNode: o, isIndentationSensitiveNode: c, isLeadingSpaceSensitiveNode: y, isTrailingSpaceSensitiveNode: m, isWhitespaceSensitiveNode: g, isVueScriptTag: p } = $n(), D = [w, k, N, P, _, T, J, d, f, x, F];
        function C(i, h) {
          for (let E of D)
            E(i, h);
          return i;
        }
        function w(i) {
          i.walk((h) => {
            if (h.type === "element" && h.tagDefinition.ignoreFirstLf && h.children.length > 0 && h.children[0].type === "text" && h.children[0].value[0] === `
`) {
              let E = h.children[0];
              E.value.length === 1 ? h.removeChild(E) : E.value = E.value.slice(1);
            }
          });
        }
        function k(i) {
          let h = (E) => E.type === "element" && E.prev && E.prev.type === "ieConditionalStartComment" && E.prev.sourceSpan.end.offset === E.startSourceSpan.start.offset && E.firstChild && E.firstChild.type === "ieConditionalEndComment" && E.firstChild.sourceSpan.start.offset === E.startSourceSpan.end.offset;
          i.walk((E) => {
            if (E.children)
              for (let b = 0; b < E.children.length; b++) {
                let S = E.children[b];
                if (!h(S))
                  continue;
                let B = S.prev, I = S.firstChild;
                E.removeChild(B), b--;
                let q = new t(B.sourceSpan.start, I.sourceSpan.end), G = new t(q.start, S.sourceSpan.end);
                S.condition = B.condition, S.sourceSpan = G, S.startSourceSpan = q, S.removeChild(I);
              }
          });
        }
        function A(i, h, E) {
          i.walk((b) => {
            if (b.children)
              for (let S = 0; S < b.children.length; S++) {
                let B = b.children[S];
                if (B.type !== "text" && !h(B))
                  continue;
                B.type !== "text" && (B.type = "text", B.value = E(B));
                let I = B.prev;
                !I || I.type !== "text" || (I.value += B.value, I.sourceSpan = new t(I.sourceSpan.start, B.sourceSpan.end), b.removeChild(B), S--);
              }
          });
        }
        function N(i) {
          return A(i, (h) => h.type === "cdata", (h) => `<![CDATA[${h.value}]]>`);
        }
        function x(i) {
          let h = (E) => E.type === "element" && E.attrs.length === 0 && E.children.length === 1 && E.firstChild.type === "text" && !e(E.children[0].value) && !E.firstChild.hasLeadingSpaces && !E.firstChild.hasTrailingSpaces && E.isLeadingSpaceSensitive && !E.hasLeadingSpaces && E.isTrailingSpaceSensitive && !E.hasTrailingSpaces && E.prev && E.prev.type === "text" && E.next && E.next.type === "text";
          i.walk((E) => {
            if (E.children)
              for (let b = 0; b < E.children.length; b++) {
                let S = E.children[b];
                if (!h(S))
                  continue;
                let B = S.prev, I = S.next;
                B.value += `<${S.rawName}>` + S.firstChild.value + `</${S.rawName}>` + I.value, B.sourceSpan = new t(B.sourceSpan.start, I.sourceSpan.end), B.isTrailingSpaceSensitive = I.isTrailingSpaceSensitive, B.hasTrailingSpaces = I.hasTrailingSpaces, E.removeChild(S), b--, E.removeChild(I);
              }
          });
        }
        function P(i, h) {
          if (h.parser === "html")
            return;
          let E = /{{(.+?)}}/s;
          i.walk((b) => {
            if (r(b))
              for (let S of b.children) {
                if (S.type !== "text")
                  continue;
                let B = S.sourceSpan.start, I = null, q = S.value.split(E);
                for (let G = 0; G < q.length; G++, B = I) {
                  let M = q[G];
                  if (G % 2 === 0) {
                    I = B.moveBy(M.length), M.length > 0 && b.insertChildBefore(S, { type: "text", value: M, sourceSpan: new t(B, I) });
                    continue;
                  }
                  I = B.moveBy(M.length + 4), b.insertChildBefore(S, { type: "interpolation", sourceSpan: new t(B, I), children: M.length === 0 ? [] : [{ type: "text", value: M, sourceSpan: new t(B.moveBy(2), I.moveBy(-2)) }] });
                }
                b.removeChild(S);
              }
          });
        }
        function _(i) {
          i.walk((h) => {
            if (!h.children)
              return;
            if (h.children.length === 0 || h.children.length === 1 && h.children[0].type === "text" && a(h.children[0].value).length === 0) {
              h.hasDanglingSpaces = h.children.length > 0, h.children = [];
              return;
            }
            let E = g(h), b = c(h);
            if (!E)
              for (let S = 0; S < h.children.length; S++) {
                let B = h.children[S];
                if (B.type !== "text")
                  continue;
                let { leadingWhitespace: I, text: q, trailingWhitespace: G } = s(B.value), M = B.prev, te = B.next;
                q ? (B.value = q, B.sourceSpan = new t(B.sourceSpan.start.moveBy(I.length), B.sourceSpan.end.moveBy(-G.length)), I && (M && (M.hasTrailingSpaces = !0), B.hasLeadingSpaces = !0), G && (B.hasTrailingSpaces = !0, te && (te.hasLeadingSpaces = !0))) : (h.removeChild(B), S--, (I || G) && (M && (M.hasTrailingSpaces = !0), te && (te.hasLeadingSpaces = !0)));
              }
            h.isWhitespaceSensitive = E, h.isIndentationSensitive = b;
          });
        }
        function J(i) {
          i.walk((h) => {
            h.isSelfClosing = !h.children || h.type === "element" && (h.tagDefinition.isVoid || h.startSourceSpan === h.endSourceSpan);
          });
        }
        function d(i, h) {
          i.walk((E) => {
            E.type === "element" && (E.hasHtmComponentClosingTag = E.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(h.originalText.slice(E.endSourceSpan.start.offset, E.endSourceSpan.end.offset)));
          });
        }
        function T(i, h) {
          i.walk((E) => {
            E.cssDisplay = n(E, h);
          });
        }
        function f(i, h) {
          i.walk((E) => {
            let { children: b } = E;
            if (b) {
              if (b.length === 0) {
                E.isDanglingSpaceSensitive = o(E);
                return;
              }
              for (let S of b)
                S.isLeadingSpaceSensitive = y(S, h), S.isTrailingSpaceSensitive = m(S, h);
              for (let S = 0; S < b.length; S++) {
                let B = b[S];
                B.isLeadingSpaceSensitive = (S === 0 || B.prev.isTrailingSpaceSensitive) && B.isLeadingSpaceSensitive, B.isTrailingSpaceSensitive = (S === b.length - 1 || B.next.isLeadingSpaceSensitive) && B.isTrailingSpaceSensitive;
              }
            }
          });
        }
        function F(i, h) {
          if (h.parser === "vue") {
            let E = i.children.find((S) => p(S, h));
            if (!E)
              return;
            let { lang: b } = E.attrMap;
            (b === "ts" || b === "typescript") && (h.__should_parse_vue_template_with_ts = !0);
          }
        }
        l.exports = C;
      } }), Io = $({ "src/language-html/pragma.js"(u, l) {
        ue();
        function t(s) {
          return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(s);
        }
        function a(s) {
          return `<!-- @format -->

` + s.replace(/^\s*\n/, "");
        }
        l.exports = { hasPragma: t, insertPragma: a };
      } }), ds = $({ "src/language-html/loc.js"(u, l) {
        ue();
        function t(s) {
          return s.sourceSpan.start.offset;
        }
        function a(s) {
          return s.sourceSpan.end.offset;
        }
        l.exports = { locStart: t, locEnd: a };
      } }), hu = $({ "src/language-html/print/tag.js"(u, l) {
        ue();
        var t = lr(), { isNonEmptyArray: a } = Gt(), { builders: { indent: s, join: e, line: r, softline: n, hardline: o }, utils: { replaceTextEndOfLine: c } } = wt(), { locStart: y, locEnd: m } = ds(), { isTextLikeNode: g, getLastDescendant: p, isPreLikeNode: D, hasPrettierIgnore: C, shouldPreserveContent: w, isVueSfcBlock: k } = $n();
        function A(j, De) {
          return [j.isSelfClosing ? "" : N(j, De), x(j, De)];
        }
        function N(j, De) {
          return j.lastChild && i(j.lastChild) ? "" : [P(j, De), J(j, De)];
        }
        function x(j, De) {
          return (j.next ? f(j.next) : F(j.parent)) ? "" : [d(j, De), _(j, De)];
        }
        function P(j, De) {
          return F(j) ? d(j.lastChild, De) : "";
        }
        function _(j, De) {
          return i(j) ? J(j.parent, De) : h(j) ? M(j.next) : "";
        }
        function J(j, De) {
          if (t(!j.isSelfClosing), T(j, De))
            return "";
          switch (j.type) {
            case "ieConditionalComment":
              return "<!";
            case "element":
              if (j.hasHtmComponentClosingTag)
                return "<//";
            default:
              return `</${j.rawName}`;
          }
        }
        function d(j, De) {
          if (T(j, De))
            return "";
          switch (j.type) {
            case "ieConditionalComment":
            case "ieConditionalEndComment":
              return "[endif]-->";
            case "ieConditionalStartComment":
              return "]><!-->";
            case "interpolation":
              return "}}";
            case "element":
              if (j.isSelfClosing)
                return "/>";
            default:
              return ">";
          }
        }
        function T(j, De) {
          return !j.isSelfClosing && !j.endSourceSpan && (C(j) || w(j.parent, De));
        }
        function f(j) {
          return j.prev && j.prev.type !== "docType" && !g(j.prev) && j.isLeadingSpaceSensitive && !j.hasLeadingSpaces;
        }
        function F(j) {
          return j.lastChild && j.lastChild.isTrailingSpaceSensitive && !j.lastChild.hasTrailingSpaces && !g(p(j.lastChild)) && !D(j);
        }
        function i(j) {
          return !j.next && !j.hasTrailingSpaces && j.isTrailingSpaceSensitive && g(p(j));
        }
        function h(j) {
          return j.next && !g(j.next) && g(j) && j.isTrailingSpaceSensitive && !j.hasTrailingSpaces;
        }
        function E(j) {
          let De = j.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/s);
          return De ? De[1] ? De[1].split(/\s+/) : !0 : !1;
        }
        function b(j) {
          return !j.prev && j.isLeadingSpaceSensitive && !j.hasLeadingSpaces;
        }
        function S(j, De, U) {
          let R = j.getValue();
          if (!a(R.attrs))
            return R.isSelfClosing ? " " : "";
          let pe = R.prev && R.prev.type === "comment" && E(R.prev.value), be = typeof pe == "boolean" ? () => pe : Array.isArray(pe) ? (we) => pe.includes(we.rawName) : () => !1, fe = j.map((we) => {
            let _e = we.getValue();
            return be(_e) ? c(De.originalText.slice(y(_e), m(_e))) : U();
          }, "attrs"), Ie = R.type === "element" && R.fullName === "script" && R.attrs.length === 1 && R.attrs[0].fullName === "src" && R.children.length === 0, X = De.singleAttributePerLine && R.attrs.length > 1 && !k(R, De) ? o : r, se = [s([Ie ? " " : r, e(X, fe)])];
          return R.firstChild && b(R.firstChild) || R.isSelfClosing && F(R.parent) || Ie ? se.push(R.isSelfClosing ? " " : "") : se.push(De.bracketSameLine ? R.isSelfClosing ? " " : "" : R.isSelfClosing ? r : n), se;
        }
        function B(j) {
          return j.firstChild && b(j.firstChild) ? "" : te(j);
        }
        function I(j, De, U) {
          let R = j.getValue();
          return [q(R, De), S(j, De, U), R.isSelfClosing ? "" : B(R)];
        }
        function q(j, De) {
          return j.prev && h(j.prev) ? "" : [G(j, De), M(j)];
        }
        function G(j, De) {
          return b(j) ? te(j.parent) : f(j) ? d(j.prev, De) : "";
        }
        function M(j) {
          switch (j.type) {
            case "ieConditionalComment":
            case "ieConditionalStartComment":
              return `<!--[if ${j.condition}`;
            case "ieConditionalEndComment":
              return "<!--<!";
            case "interpolation":
              return "{{";
            case "docType":
              return "<!DOCTYPE";
            case "element":
              if (j.condition)
                return `<!--[if ${j.condition}]><!--><${j.rawName}`;
            default:
              return `<${j.rawName}`;
          }
        }
        function te(j) {
          switch (t(!j.isSelfClosing), j.type) {
            case "ieConditionalComment":
              return "]>";
            case "element":
              if (j.condition)
                return "><!--<![endif]-->";
            default:
              return ">";
          }
        }
        l.exports = { printClosingTag: A, printClosingTagStart: N, printClosingTagStartMarker: J, printClosingTagEndMarker: d, printClosingTagSuffix: _, printClosingTagEnd: x, needsToBorrowLastChildClosingTagEndMarker: F, needsToBorrowParentClosingTagStartMarker: i, needsToBorrowPrevClosingTagEndMarker: f, printOpeningTag: I, printOpeningTagStart: q, printOpeningTagPrefix: G, printOpeningTagStartMarker: M, printOpeningTagEndMarker: te, needsToBorrowNextOpeningTagStartMarker: h, needsToBorrowParentOpeningTagEndMarker: b };
      } }), jo = $({ "node_modules/parse-srcset/src/parse-srcset.js"(u, l) {
        ue(), function(t, a) {
          typeof define == "function" && define.amd ? define([], a) : typeof l == "object" && l.exports ? l.exports = a() : t.parseSrcset = a();
        }(u, function() {
          return function(t, a) {
            var s = a && a.logger || console;
            function e(J) {
              return J === " " || J === "	" || J === `
` || J === "\f" || J === "\r";
            }
            function r(J) {
              var d, T = J.exec(t.substring(N));
              if (T)
                return d = T[0], N += d.length, d;
            }
            for (var n = t.length, o = /^[ \t\n\r\u000c]+/, c = /^[, \t\n\r\u000c]+/, y = /^[^ \t\n\r\u000c]+/, m = /[,]+$/, g = /^\d+$/, p = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, D, C, w, k, A, N = 0, x = []; ; ) {
              if (r(c), N >= n)
                return x;
              D = r(y), C = [], D.slice(-1) === "," ? (D = D.replace(m, ""), _()) : P();
            }
            function P() {
              for (r(o), w = "", k = "in descriptor"; ; ) {
                if (A = t.charAt(N), k === "in descriptor")
                  if (e(A))
                    w && (C.push(w), w = "", k = "after descriptor");
                  else if (A === ",") {
                    N += 1, w && C.push(w), _();
                    return;
                  } else if (A === "(")
                    w = w + A, k = "in parens";
                  else if (A === "") {
                    w && C.push(w), _();
                    return;
                  } else
                    w = w + A;
                else if (k === "in parens")
                  if (A === ")")
                    w = w + A, k = "in descriptor";
                  else if (A === "") {
                    C.push(w), _();
                    return;
                  } else
                    w = w + A;
                else if (k === "after descriptor" && !e(A))
                  if (A === "") {
                    _();
                    return;
                  } else
                    k = "in descriptor", N -= 1;
                N += 1;
              }
            }
            function _() {
              var J = !1, d, T, f, F, i = {}, h, E, b, S, B;
              for (F = 0; F < C.length; F++)
                h = C[F], E = h[h.length - 1], b = h.substring(0, h.length - 1), S = parseInt(b, 10), B = parseFloat(b), g.test(b) && E === "w" ? ((d || T) && (J = !0), S === 0 ? J = !0 : d = S) : p.test(b) && E === "x" ? ((d || T || f) && (J = !0), B < 0 ? J = !0 : T = B) : g.test(b) && E === "h" ? ((f || T) && (J = !0), S === 0 ? J = !0 : f = S) : J = !0;
              J ? s && s.error && s.error("Invalid srcset descriptor found in '" + t + "' at '" + h + "'.") : (i.url = D, d && (i.w = d), T && (i.d = T), f && (i.h = f), x.push(i));
            }
          };
        });
      } }), Lo = $({ "src/language-html/syntax-attribute.js"(u, l) {
        ue();
        var t = jo(), { builders: { ifBreak: a, join: s, line: e } } = wt();
        function r(o) {
          let c = t(o, { logger: { error(P) {
            throw new Error(P);
          } } }), y = c.some((P) => {
            let { w: _ } = P;
            return _;
          }), m = c.some((P) => {
            let { h: _ } = P;
            return _;
          }), g = c.some((P) => {
            let { d: _ } = P;
            return _;
          });
          if (y + m + g > 1)
            throw new Error("Mixed descriptor in srcset is not supported");
          let p = y ? "w" : m ? "h" : "d", D = y ? "w" : m ? "h" : "x", C = (P) => Math.max(...P), w = c.map((P) => P.url), k = C(w.map((P) => P.length)), A = c.map((P) => P[p]).map((P) => P ? P.toString() : ""), N = A.map((P) => {
            let _ = P.indexOf(".");
            return _ === -1 ? P.length : _;
          }), x = C(N);
          return s([",", e], w.map((P, _) => {
            let J = [P], d = A[_];
            if (d) {
              let T = k - P.length + 1, f = x - N[_], F = " ".repeat(T + f);
              J.push(a(F, " "), d + D);
            }
            return J;
          }));
        }
        function n(o) {
          return o.trim().split(/\s+/).join(" ");
        }
        l.exports = { printImgSrcset: r, printClassNames: n };
      } }), Oo = $({ "src/language-html/syntax-vue.js"(u, l) {
        ue();
        var { builders: { group: t } } = wt();
        function a(n, o) {
          let { left: c, operator: y, right: m } = s(n);
          return [t(o(`function _(${c}) {}`, { parser: "babel", __isVueForBindingLeft: !0 })), " ", y, " ", o(m, { parser: "__js_expression" }, { stripTrailingHardline: !0 })];
        }
        function s(n) {
          let o = /(.*?)\s+(in|of)\s+(.*)/s, c = /,([^,\]}]*)(?:,([^,\]}]*))?$/, y = /^\(|\)$/g, m = n.match(o);
          if (!m)
            return;
          let g = {};
          if (g.for = m[3].trim(), !g.for)
            return;
          let p = m[1].trim().replace(y, ""), D = p.match(c);
          D ? (g.alias = p.replace(c, ""), g.iterator1 = D[1].trim(), D[2] && (g.iterator2 = D[2].trim())) : g.alias = p;
          let C = [g.alias, g.iterator1, g.iterator2];
          if (!C.some((w, k) => !w && (k === 0 || C.slice(k + 1).some(Boolean))))
            return { left: C.filter(Boolean).join(","), operator: m[2], right: g.for };
        }
        function e(n, o) {
          return o(`function _(${n}) {}`, { parser: "babel", __isVueBindings: !0 });
        }
        function r(n) {
          let o = /^(?:[\w$]+|\([^)]*\))\s*=>|^function\s*\(/, c = /^[$A-Z_a-z][\w$]*(?:\.[$A-Z_a-z][\w$]*|\['[^']*']|\["[^"]*"]|\[\d+]|\[[$A-Z_a-z][\w$]*])*$/, y = n.trim();
          return o.test(y) || c.test(y);
        }
        l.exports = { isVueEventBindingExpression: r, printVueFor: a, printVueBindings: e };
      } }), Hs = $({ "src/language-html/get-node-content.js"(u, l) {
        ue();
        var { needsToBorrowParentClosingTagStartMarker: t, printClosingTagStartMarker: a, needsToBorrowLastChildClosingTagEndMarker: s, printClosingTagEndMarker: e, needsToBorrowParentOpeningTagEndMarker: r, printOpeningTagEndMarker: n } = hu();
        function o(c, y) {
          let m = c.startSourceSpan.end.offset;
          c.firstChild && r(c.firstChild) && (m -= n(c).length);
          let g = c.endSourceSpan.start.offset;
          return c.lastChild && t(c.lastChild) ? g += a(c, y).length : s(c) && (g -= e(c.lastChild, y).length), y.originalText.slice(m, g);
        }
        l.exports = o;
      } }), $o = $({ "src/language-html/embed.js"(u, l) {
        ue();
        var { builders: { breakParent: t, group: a, hardline: s, indent: e, line: r, fill: n, softline: o }, utils: { mapDoc: c, replaceTextEndOfLine: y } } = wt(), m = cs(), { printClosingTag: g, printClosingTagSuffix: p, needsToBorrowPrevClosingTagEndMarker: D, printOpeningTagPrefix: C, printOpeningTag: w } = hu(), { printImgSrcset: k, printClassNames: A } = Lo(), { printVueFor: N, printVueBindings: x, isVueEventBindingExpression: P } = Oo(), { isScriptLikeTag: _, isVueNonHtmlBlock: J, inferScriptParser: d, htmlTrimPreserveIndentation: T, dedentString: f, unescapeQuoteEntities: F, isVueSlotAttribute: i, isVueSfcBindingsAttribute: h, getTextValueParts: E } = $n(), b = Hs();
        function S(I, q, G) {
          let M = (fe) => new RegExp(fe.join("|")).test(I.fullName), te = () => F(I.value), j = !1, De = (fe, Ie) => {
            let X = fe.type === "NGRoot" ? fe.node.type === "NGMicrosyntax" && fe.node.body.length === 1 && fe.node.body[0].type === "NGMicrosyntaxExpression" ? fe.node.body[0].expression : fe.node : fe.type === "JsExpressionRoot" ? fe.node : fe;
            X && (X.type === "ObjectExpression" || X.type === "ArrayExpression" || Ie.parser === "__vue_expression" && (X.type === "TemplateLiteral" || X.type === "StringLiteral")) && (j = !0);
          }, U = (fe) => a(fe), R = function(fe) {
            let Ie = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
            return a([e([o, fe]), Ie ? o : ""]);
          }, pe = (fe) => j ? U(fe) : R(fe), be = (fe, Ie) => q(fe, Object.assign({ __onHtmlBindingRoot: De, __embeddedInHtml: !0 }, Ie));
          if (I.fullName === "srcset" && (I.parent.fullName === "img" || I.parent.fullName === "source"))
            return R(k(te()));
          if (I.fullName === "class" && !G.parentParser) {
            let fe = te();
            if (!fe.includes("{{"))
              return A(fe);
          }
          if (I.fullName === "style" && !G.parentParser) {
            let fe = te();
            if (!fe.includes("{{"))
              return R(be(fe, { parser: "css", __isHTMLStyleAttribute: !0 }));
          }
          if (G.parser === "vue") {
            if (I.fullName === "v-for")
              return N(te(), be);
            if (i(I) || h(I, G))
              return x(te(), be);
            let fe = ["^@", "^v-on:"], Ie = ["^:", "^v-bind:"], X = ["^v-"];
            if (M(fe)) {
              let se = te(), we = P(se) ? "__js_expression" : G.__should_parse_vue_template_with_ts ? "__vue_ts_event_binding" : "__vue_event_binding";
              return pe(be(se, { parser: we }));
            }
            if (M(Ie))
              return pe(be(te(), { parser: "__vue_expression" }));
            if (M(X))
              return pe(be(te(), { parser: "__js_expression" }));
          }
          if (G.parser === "angular") {
            let fe = (ae, Q) => be(ae, Object.assign(Object.assign({}, Q), {}, { trailingComma: "none" })), Ie = ["^\\*"], X = ["^\\(.+\\)$", "^on-"], se = ["^\\[.+\\]$", "^bind(on)?-", "^ng-(if|show|hide|class|style)$"], we = ["^i18n(-.+)?$"];
            if (M(X))
              return pe(fe(te(), { parser: "__ng_action" }));
            if (M(se))
              return pe(fe(te(), { parser: "__ng_binding" }));
            if (M(we)) {
              let ae = te().trim();
              return R(n(E(I, ae)), !ae.includes("@@"));
            }
            if (M(Ie))
              return pe(fe(te(), { parser: "__ng_directive" }));
            let _e = /{{(.+?)}}/s, it = te();
            if (_e.test(it)) {
              let ae = [];
              for (let [Q, me] of it.split(_e).entries())
                if (Q % 2 === 0)
                  ae.push(y(me));
                else
                  try {
                    ae.push(a(["{{", e([r, fe(me, { parser: "__ng_interpolation", __isInHtmlInterpolation: !0 })]), r, "}}"]));
                  } catch {
                    ae.push("{{", y(me), "}}");
                  }
              return a(ae);
            }
          }
          return null;
        }
        function B(I, q, G, M) {
          let te = I.getValue();
          switch (te.type) {
            case "element": {
              if (_(te) || te.type === "interpolation")
                return;
              if (!te.isSelfClosing && J(te, M)) {
                let j = d(te, M);
                if (!j)
                  return;
                let De = b(te, M), U = /^\s*$/.test(De), R = "";
                return U || (R = G(T(De), { parser: j, __embeddedInHtml: !0 }, { stripTrailingHardline: !0 }), U = R === ""), [C(te, M), a(w(I, M, q)), U ? "" : s, R, U ? "" : s, g(te, M), p(te, M)];
              }
              break;
            }
            case "text": {
              if (_(te.parent)) {
                let j = d(te.parent, M);
                if (j) {
                  let De = j === "markdown" ? f(te.value.replace(/^[^\S\n]*\n/, "")) : te.value, U = { parser: j, __embeddedInHtml: !0 };
                  if (M.parser === "html" && j === "babel") {
                    let R = "script", { attrMap: pe } = te.parent;
                    pe && (pe.type === "module" || pe.type === "text/babel" && pe["data-type"] === "module") && (R = "module"), U.__babelSourceType = R;
                  }
                  return [t, C(te, M), G(De, U, { stripTrailingHardline: !0 }), p(te, M)];
                }
              } else if (te.parent.type === "interpolation") {
                let j = { __isInHtmlInterpolation: !0, __embeddedInHtml: !0 };
                return M.parser === "angular" ? (j.parser = "__ng_interpolation", j.trailingComma = "none") : M.parser === "vue" ? j.parser = M.__should_parse_vue_template_with_ts ? "__vue_ts_expression" : "__vue_expression" : j.parser = "__js_expression", [e([r, G(te.value, j, { stripTrailingHardline: !0 })]), te.parent.next && D(te.parent.next) ? " " : r];
              }
              break;
            }
            case "attribute": {
              if (!te.value)
                break;
              if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(M.originalText.slice(te.valueSpan.start.offset, te.valueSpan.end.offset)))
                return [te.rawName, "=", te.value];
              if (M.parser === "lwc" && /^{.*}$/s.test(M.originalText.slice(te.valueSpan.start.offset, te.valueSpan.end.offset)))
                return [te.rawName, "=", te.value];
              let j = S(te, (De, U) => G(De, Object.assign({ __isInHtmlAttribute: !0, __embeddedInHtml: !0 }, U), { stripTrailingHardline: !0 }), M);
              if (j)
                return [te.rawName, '="', a(c(j, (De) => typeof De == "string" ? De.replace(/"/g, "&quot;") : De)), '"'];
              break;
            }
            case "front-matter":
              return m(te, G);
          }
        }
        l.exports = B;
      } }), Ys = $({ "src/language-html/print/children.js"(u, l) {
        ue();
        var { builders: { breakParent: t, group: a, ifBreak: s, line: e, softline: r, hardline: n }, utils: { replaceTextEndOfLine: o } } = wt(), { locStart: c, locEnd: y } = ds(), { forceBreakChildren: m, forceNextEmptyLine: g, isTextLikeNode: p, hasPrettierIgnore: D, preferHardlineAsLeadingSpaces: C } = $n(), { printOpeningTagPrefix: w, needsToBorrowNextOpeningTagStartMarker: k, printOpeningTagStartMarker: A, needsToBorrowPrevClosingTagEndMarker: N, printClosingTagEndMarker: x, printClosingTagSuffix: P, needsToBorrowParentClosingTagStartMarker: _ } = hu();
        function J(f, F, i) {
          let h = f.getValue();
          return D(h) ? [w(h, F), ...o(F.originalText.slice(c(h) + (h.prev && k(h.prev) ? A(h).length : 0), y(h) - (h.next && N(h.next) ? x(h, F).length : 0))), P(h, F)] : i();
        }
        function d(f, F) {
          return p(f) && p(F) ? f.isTrailingSpaceSensitive ? f.hasTrailingSpaces ? C(F) ? n : e : "" : C(F) ? n : r : k(f) && (D(F) || F.firstChild || F.isSelfClosing || F.type === "element" && F.attrs.length > 0) || f.type === "element" && f.isSelfClosing && N(F) ? "" : !F.isLeadingSpaceSensitive || C(F) || N(F) && f.lastChild && _(f.lastChild) && f.lastChild.lastChild && _(f.lastChild.lastChild) ? n : F.hasLeadingSpaces ? e : r;
        }
        function T(f, F, i) {
          let h = f.getValue();
          if (m(h))
            return [t, ...f.map((b) => {
              let S = b.getValue(), B = S.prev ? d(S.prev, S) : "";
              return [B ? [B, g(S.prev) ? n : ""] : "", J(b, F, i)];
            }, "children")];
          let E = h.children.map(() => Symbol(""));
          return f.map((b, S) => {
            let B = b.getValue();
            if (p(B)) {
              if (B.prev && p(B.prev)) {
                let De = d(B.prev, B);
                if (De)
                  return g(B.prev) ? [n, n, J(b, F, i)] : [De, J(b, F, i)];
              }
              return J(b, F, i);
            }
            let I = [], q = [], G = [], M = [], te = B.prev ? d(B.prev, B) : "", j = B.next ? d(B, B.next) : "";
            return te && (g(B.prev) ? I.push(n, n) : te === n ? I.push(n) : p(B.prev) ? q.push(te) : q.push(s("", r, { groupId: E[S - 1] }))), j && (g(B) ? p(B.next) && M.push(n, n) : j === n ? p(B.next) && M.push(n) : G.push(j)), [...I, a([...q, a([J(b, F, i), ...G], { id: E[S] })]), ...M];
          }, "children");
        }
        l.exports = { printChildren: T };
      } }), Ro = $({ "src/language-html/print/element.js"(u, l) {
        ue();
        var { builders: { breakParent: t, dedentToRoot: a, group: s, ifBreak: e, indentIfBreak: r, indent: n, line: o, softline: c }, utils: { replaceTextEndOfLine: y } } = wt(), m = Hs(), { shouldPreserveContent: g, isScriptLikeTag: p, isVueCustomBlock: D, countParents: C, forceBreakContent: w } = $n(), { printOpeningTagPrefix: k, printOpeningTag: A, printClosingTagSuffix: N, printClosingTag: x, needsToBorrowPrevClosingTagEndMarker: P, needsToBorrowLastChildClosingTagEndMarker: _ } = hu(), { printChildren: J } = Ys();
        function d(T, f, F) {
          let i = T.getValue();
          if (g(i, f))
            return [k(i, f), s(A(T, f, F)), ...y(m(i, f)), ...x(i, f), N(i, f)];
          let h = i.children.length === 1 && i.firstChild.type === "interpolation" && i.firstChild.isLeadingSpaceSensitive && !i.firstChild.hasLeadingSpaces && i.lastChild.isTrailingSpaceSensitive && !i.lastChild.hasTrailingSpaces, E = Symbol("element-attr-group-id"), b = (q) => s([s(A(T, f, F), { id: E }), q, x(i, f)]), S = (q) => h ? r(q, { groupId: E }) : (p(i) || D(i, f)) && i.parent.type === "root" && f.parser === "vue" && !f.vueIndentScriptAndStyle ? q : n(q), B = () => h ? e(c, "", { groupId: E }) : i.firstChild.hasLeadingSpaces && i.firstChild.isLeadingSpaceSensitive ? o : i.firstChild.type === "text" && i.isWhitespaceSensitive && i.isIndentationSensitive ? a(c) : c, I = () => (i.next ? P(i.next) : _(i.parent)) ? i.lastChild.hasTrailingSpaces && i.lastChild.isTrailingSpaceSensitive ? " " : "" : h ? e(c, "", { groupId: E }) : i.lastChild.hasTrailingSpaces && i.lastChild.isTrailingSpaceSensitive ? o : (i.lastChild.type === "comment" || i.lastChild.type === "text" && i.isWhitespaceSensitive && i.isIndentationSensitive) && new RegExp(`\\n[\\t ]{${f.tabWidth * C(T, (q) => q.parent && q.parent.type !== "root")}}$`).test(i.lastChild.value) ? "" : c;
          return i.children.length === 0 ? b(i.hasDanglingSpaces && i.isDanglingSpaceSensitive ? o : "") : b([w(i) ? t : "", S([B(), J(T, f, F)]), I()]);
        }
        l.exports = { printElement: d };
      } }), Mo = $({ "src/language-html/printer-html.js"(u, l) {
        ue();
        var { builders: { fill: t, group: a, hardline: s, literalline: e }, utils: { cleanDoc: r, getDocParts: n, isConcat: o, replaceTextEndOfLine: c } } = wt(), y = So(), { countChars: m, unescapeQuoteEntities: g, getTextValueParts: p } = $n(), D = Po(), { insertPragma: C } = Io(), { locStart: w, locEnd: k } = ds(), A = $o(), { printClosingTagSuffix: N, printClosingTagEnd: x, printOpeningTagPrefix: P, printOpeningTagStart: _ } = hu(), { printElement: J } = Ro(), { printChildren: d } = Ys();
        function T(f, F, i) {
          let h = f.getValue();
          switch (h.type) {
            case "front-matter":
              return c(h.raw);
            case "root":
              return F.__onHtmlRoot && F.__onHtmlRoot(h), [a(d(f, F, i)), s];
            case "element":
            case "ieConditionalComment":
              return J(f, F, i);
            case "ieConditionalStartComment":
            case "ieConditionalEndComment":
              return [_(h), x(h)];
            case "interpolation":
              return [_(h, F), ...f.map(i, "children"), x(h, F)];
            case "text": {
              if (h.parent.type === "interpolation") {
                let b = /\n[^\S\n]*$/, S = b.test(h.value), B = S ? h.value.replace(b, "") : h.value;
                return [...c(B), S ? s : ""];
              }
              let E = r([P(h, F), ...p(h), N(h, F)]);
              return o(E) || E.type === "fill" ? t(n(E)) : E;
            }
            case "docType":
              return [a([_(h, F), " ", h.value.replace(/^html\b/i, "html").replace(/\s+/g, " ")]), x(h, F)];
            case "comment":
              return [P(h, F), ...c(F.originalText.slice(w(h), k(h)), e), N(h, F)];
            case "attribute": {
              if (h.value === null)
                return h.rawName;
              let E = g(h.value), b = m(E, "'"), S = m(E, '"'), B = b < S ? "'" : '"';
              return [h.rawName, "=", B, ...c(B === '"' ? E.replace(/"/g, "&quot;") : E.replace(/'/g, "&apos;")), B];
            }
            default:
              throw new Error(`Unexpected node type ${h.type}`);
          }
        }
        l.exports = { preprocess: D, print: T, insertPragma: C, massageAstNode: y, embed: A };
      } }), qo = $({ "src/language-html/options.js"(u, l) {
        ue();
        var t = On(), a = "HTML";
        l.exports = { bracketSameLine: t.bracketSameLine, htmlWhitespaceSensitivity: { since: "1.15.0", category: a, type: "choice", default: "css", description: "How to handle whitespaces in HTML.", choices: [{ value: "css", description: "Respect the default value of CSS display property." }, { value: "strict", description: "Whitespaces are considered sensitive." }, { value: "ignore", description: "Whitespaces are considered insensitive." }] }, singleAttributePerLine: t.singleAttributePerLine, vueIndentScriptAndStyle: { since: "1.19.0", category: a, type: "boolean", default: !1, description: "Indent script and style tags in Vue files." } };
      } }), Vo = $({ "src/language-html/parsers.js"() {
        ue();
      } }), fs = $({ "node_modules/linguist-languages/data/HTML.json"(u, l) {
        l.exports = { name: "HTML", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml"], languageId: 146 };
      } }), Uo = $({ "node_modules/linguist-languages/data/Vue.json"(u, l) {
        l.exports = { name: "Vue", type: "markup", color: "#41b883", extensions: [".vue"], tmScope: "text.html.vue", aceMode: "html", languageId: 391 };
      } }), Go = $({ "src/language-html/index.js"(u, l) {
        ue();
        var t = vr(), a = Mo(), s = qo(), e = Vo(), r = [t(fs(), () => ({ name: "Angular", since: "1.15.0", parsers: ["angular"], vscodeLanguageIds: ["html"], extensions: [".component.html"], filenames: [] })), t(fs(), (o) => ({ since: "1.15.0", parsers: ["html"], vscodeLanguageIds: ["html"], extensions: [...o.extensions, ".mjml"] })), t(fs(), () => ({ name: "Lightning Web Components", since: "1.17.0", parsers: ["lwc"], vscodeLanguageIds: ["html"], extensions: [], filenames: [] })), t(Uo(), () => ({ since: "1.10.0", parsers: ["vue"], vscodeLanguageIds: ["vue"] }))], n = { html: a };
        l.exports = { languages: r, printers: n, options: s, parsers: e };
      } }), Jo = $({ "src/language-yaml/pragma.js"(u, l) {
        ue();
        function t(e) {
          return /^\s*@(?:prettier|format)\s*$/.test(e);
        }
        function a(e) {
          return /^\s*#[^\S\n]*@(?:prettier|format)\s*?(?:\n|$)/.test(e);
        }
        function s(e) {
          return `# @format

${e}`;
        }
        l.exports = { isPragma: t, hasPragma: a, insertPragma: s };
      } }), Xo = $({ "src/language-yaml/loc.js"(u, l) {
        ue();
        function t(s) {
          return s.position.start.offset;
        }
        function a(s) {
          return s.position.end.offset;
        }
        l.exports = { locStart: t, locEnd: a };
      } }), Wo = $({ "src/language-yaml/embed.js"(u, l) {
        ue();
        function t(a, s, e, r) {
          if (a.getValue().type === "root" && r.filepath && /(?:[/\\]|^)\.(?:prettier|stylelint|lintstaged)rc$/.test(r.filepath))
            return e(r.originalText, Object.assign(Object.assign({}, r), {}, { parser: "json" }));
        }
        l.exports = t;
      } }), Rn = $({ "src/language-yaml/utils.js"(u, l) {
        ue();
        var { getLast: t, isNonEmptyArray: a } = Gt();
        function s(d, T) {
          let f = 0, F = d.stack.length - 1;
          for (let i = 0; i < F; i++) {
            let h = d.stack[i];
            e(h) && T(h) && f++;
          }
          return f;
        }
        function e(d, T) {
          return d && typeof d.type == "string" && (!T || T.includes(d.type));
        }
        function r(d, T, f) {
          return T("children" in d ? Object.assign(Object.assign({}, d), {}, { children: d.children.map((F) => r(F, T, d)) }) : d, f);
        }
        function n(d, T, f) {
          Object.defineProperty(d, T, { get: f, enumerable: !1 });
        }
        function o(d, T) {
          let f = 0, F = T.length;
          for (let i = d.position.end.offset - 1; i < F; i++) {
            let h = T[i];
            if (h === `
` && f++, f === 1 && /\S/.test(h))
              return !1;
            if (f === 2)
              return !0;
          }
          return !1;
        }
        function c(d) {
          switch (d.getValue().type) {
            case "tag":
            case "anchor":
            case "comment":
              return !1;
          }
          let T = d.stack.length;
          for (let f = 1; f < T; f++) {
            let F = d.stack[f], i = d.stack[f - 1];
            if (Array.isArray(i) && typeof F == "number" && F !== i.length - 1)
              return !1;
          }
          return !0;
        }
        function y(d) {
          return a(d.children) ? y(t(d.children)) : d;
        }
        function m(d) {
          return d.value.trim() === "prettier-ignore";
        }
        function g(d) {
          let T = d.getValue();
          if (T.type === "documentBody") {
            let f = d.getParentNode();
            return N(f.head) && m(t(f.head.endComments));
          }
          return C(T) && m(t(T.leadingComments));
        }
        function p(d) {
          return !a(d.children) && !D(d);
        }
        function D(d) {
          return C(d) || w(d) || k(d) || A(d) || N(d);
        }
        function C(d) {
          return a(d == null ? void 0 : d.leadingComments);
        }
        function w(d) {
          return a(d == null ? void 0 : d.middleComments);
        }
        function k(d) {
          return d == null ? void 0 : d.indicatorComment;
        }
        function A(d) {
          return d == null ? void 0 : d.trailingComment;
        }
        function N(d) {
          return a(d == null ? void 0 : d.endComments);
        }
        function x(d) {
          let T = [], f;
          for (let F of d.split(/( +)/))
            F !== " " ? f === " " ? T.push(F) : T.push((T.pop() || "") + F) : f === void 0 && T.unshift(""), f = F;
          return f === " " && T.push((T.pop() || "") + " "), T[0] === "" && (T.shift(), T.unshift(" " + (T.shift() || ""))), T;
        }
        function P(d, T, f) {
          let F = T.split(`
`).map((i, h, E) => h === 0 && h === E.length - 1 ? i : h !== 0 && h !== E.length - 1 ? i.trim() : h === 0 ? i.trimEnd() : i.trimStart());
          return f.proseWrap === "preserve" ? F.map((i) => i.length === 0 ? [] : [i]) : F.map((i) => i.length === 0 ? [] : x(i)).reduce((i, h, E) => E !== 0 && F[E - 1].length > 0 && h.length > 0 && !(d === "quoteDouble" && t(t(i)).endsWith("\\")) ? [...i.slice(0, -1), [...t(i), ...h]] : [...i, h], []).map((i) => f.proseWrap === "never" ? [i.join(" ")] : i);
        }
        function _(d, T) {
          let { parentIndent: f, isLastDescendant: F, options: i } = T, h = d.position.start.line === d.position.end.line ? "" : i.originalText.slice(d.position.start.offset, d.position.end.offset).match(/^[^\n]*\n(.*)$/s)[1], E;
          if (d.indent === null) {
            let B = h.match(/^(?<leadingSpace> *)[^\n\r ]/m);
            E = B ? B.groups.leadingSpace.length : Number.POSITIVE_INFINITY;
          } else
            E = d.indent - 1 + f;
          let b = h.split(`
`).map((B) => B.slice(E));
          if (i.proseWrap === "preserve" || d.type === "blockLiteral")
            return S(b.map((B) => B.length === 0 ? [] : [B]));
          return S(b.map((B) => B.length === 0 ? [] : x(B)).reduce((B, I, q) => q !== 0 && b[q - 1].length > 0 && I.length > 0 && !/^\s/.test(I[0]) && !/^\s|\s$/.test(t(B)) ? [...B.slice(0, -1), [...t(B), ...I]] : [...B, I], []).map((B) => B.reduce((I, q) => I.length > 0 && /\s$/.test(t(I)) ? [...I.slice(0, -1), t(I) + " " + q] : [...I, q], [])).map((B) => i.proseWrap === "never" ? [B.join(" ")] : B));
          function S(B) {
            if (d.chomping === "keep")
              return t(B).length === 0 ? B.slice(0, -1) : B;
            let I = 0;
            for (let q = B.length - 1; q >= 0 && B[q].length === 0; q--)
              I++;
            return I === 0 ? B : I >= 2 && !F ? B.slice(0, -(I - 1)) : B.slice(0, -I);
          }
        }
        function J(d) {
          if (!d)
            return !0;
          switch (d.type) {
            case "plain":
            case "quoteDouble":
            case "quoteSingle":
            case "alias":
            case "flowMapping":
            case "flowSequence":
              return !0;
            default:
              return !1;
          }
        }
        l.exports = { getLast: t, getAncestorCount: s, isNode: e, isEmptyNode: p, isInlineNode: J, mapNode: r, defineShortcut: n, isNextLineEmpty: o, isLastDescendantNode: c, getBlockValueLineContents: _, getFlowScalarLineContents: P, getLastDescendantNode: y, hasPrettierIgnore: g, hasLeadingComments: C, hasMiddleComments: w, hasIndicatorComment: k, hasTrailingComment: A, hasEndComments: N };
      } }), zo = $({ "src/language-yaml/print-preprocess.js"(u, l) {
        ue();
        var { defineShortcut: t, mapNode: a } = Rn();
        function s(r) {
          return a(r, e);
        }
        function e(r) {
          switch (r.type) {
            case "document":
              t(r, "head", () => r.children[0]), t(r, "body", () => r.children[1]);
              break;
            case "documentBody":
            case "sequenceItem":
            case "flowSequenceItem":
            case "mappingKey":
            case "mappingValue":
              t(r, "content", () => r.children[0]);
              break;
            case "mappingItem":
            case "flowMappingItem":
              t(r, "key", () => r.children[0]), t(r, "value", () => r.children[1]);
              break;
          }
          return r;
        }
        l.exports = s;
      } }), ni = $({ "src/language-yaml/print/misc.js"(u, l) {
        ue();
        var { builders: { softline: t, align: a } } = wt(), { hasEndComments: s, isNextLineEmpty: e, isNode: r } = Rn(), n = /* @__PURE__ */ new WeakMap();
        function o(m, g) {
          let p = m.getValue(), D = m.stack[0], C;
          return n.has(D) ? C = n.get(D) : (C = /* @__PURE__ */ new Set(), n.set(D, C)), !C.has(p.position.end.line) && (C.add(p.position.end.line), e(p, g) && !c(m.getParentNode())) ? t : "";
        }
        function c(m) {
          return s(m) && !r(m, ["documentHead", "documentBody", "flowMapping", "flowSequence"]);
        }
        function y(m, g) {
          return a(" ".repeat(m), g);
        }
        l.exports = { alignWithSpaces: y, shouldPrintEndComments: c, printNextEmptyLine: o };
      } }), Ho = $({ "src/language-yaml/print/flow-mapping-sequence.js"(u, l) {
        ue();
        var { builders: { ifBreak: t, line: a, softline: s, hardline: e, join: r } } = wt(), { isEmptyNode: n, getLast: o, hasEndComments: c } = Rn(), { printNextEmptyLine: y, alignWithSpaces: m } = ni();
        function g(D, C, w) {
          let k = D.getValue(), A = k.type === "flowMapping", N = A ? "{" : "[", x = A ? "}" : "]", P = s;
          A && k.children.length > 0 && w.bracketSpacing && (P = a);
          let _ = o(k.children), J = _ && _.type === "flowMappingItem" && n(_.key) && n(_.value);
          return [N, m(w.tabWidth, [P, p(D, C, w), w.trailingComma === "none" ? "" : t(","), c(k) ? [e, r(e, D.map(C, "endComments"))] : ""]), J ? "" : P, x];
        }
        function p(D, C, w) {
          let k = D.getValue();
          return D.map((A, N) => [C(), N === k.children.length - 1 ? "" : [",", a, k.children[N].position.start.line !== k.children[N + 1].position.start.line ? y(A, w.originalText) : ""]], "children");
        }
        l.exports = { printFlowMapping: g, printFlowSequence: g };
      } }), Yo = $({ "src/language-yaml/print/mapping-item.js"(u, l) {
        ue();
        var { builders: { conditionalGroup: t, group: a, hardline: s, ifBreak: e, join: r, line: n } } = wt(), { hasLeadingComments: o, hasMiddleComments: c, hasTrailingComment: y, hasEndComments: m, isNode: g, isEmptyNode: p, isInlineNode: D } = Rn(), { alignWithSpaces: C } = ni();
        function w(x, P, _, J, d) {
          let { key: T, value: f } = x, F = p(T), i = p(f);
          if (F && i)
            return ": ";
          let h = J("key"), E = A(x) ? " " : "";
          if (i)
            return x.type === "flowMappingItem" && P.type === "flowMapping" ? h : x.type === "mappingItem" && k(T.content, d) && !y(T.content) && (!P.tag || P.tag.value !== "tag:yaml.org,2002:set") ? [h, E, ":"] : ["? ", C(2, h)];
          let b = J("value");
          if (F)
            return [": ", C(2, b)];
          if (o(f) || !D(T.content))
            return ["? ", C(2, h), s, r("", _.map(J, "value", "leadingComments").map((M) => [M, s])), ": ", C(2, b)];
          if (N(T.content) && !o(T.content) && !c(T.content) && !y(T.content) && !m(T) && !o(f.content) && !c(f.content) && !m(f) && k(f.content, d))
            return [h, E, ": ", b];
          let S = Symbol("mappingKey"), B = a([e("? "), a(C(2, h), { id: S })]), I = [s, ": ", C(2, b)], q = [E, ":"];
          o(f.content) || m(f) && f.content && !g(f.content, ["mapping", "sequence"]) || P.type === "mapping" && y(T.content) && D(f.content) || g(f.content, ["mapping", "sequence"]) && f.content.tag === null && f.content.anchor === null ? q.push(s) : f.content && q.push(n), q.push(b);
          let G = C(d.tabWidth, q);
          return k(T.content, d) && !o(T.content) && !c(T.content) && !m(T) ? t([[h, G]]) : t([[B, e(I, G, { groupId: S })]]);
        }
        function k(x, P) {
          if (!x)
            return !0;
          switch (x.type) {
            case "plain":
            case "quoteSingle":
            case "quoteDouble":
              break;
            case "alias":
              return !0;
            default:
              return !1;
          }
          if (P.proseWrap === "preserve")
            return x.position.start.line === x.position.end.line;
          if (/\\$/m.test(P.originalText.slice(x.position.start.offset, x.position.end.offset)))
            return !1;
          switch (P.proseWrap) {
            case "never":
              return !x.value.includes(`
`);
            case "always":
              return !/[\n ]/.test(x.value);
            default:
              return !1;
          }
        }
        function A(x) {
          return x.key.content && x.key.content.type === "alias";
        }
        function N(x) {
          if (!x)
            return !0;
          switch (x.type) {
            case "plain":
            case "quoteDouble":
            case "quoteSingle":
              return x.position.start.line === x.position.end.line;
            case "alias":
              return !0;
            default:
              return !1;
          }
        }
        l.exports = w;
      } }), Ko = $({ "src/language-yaml/print/block.js"(u, l) {
        ue();
        var { builders: { dedent: t, dedentToRoot: a, fill: s, hardline: e, join: r, line: n, literalline: o, markAsRoot: c }, utils: { getDocParts: y } } = wt(), { getAncestorCount: m, getBlockValueLineContents: g, hasIndicatorComment: p, isLastDescendantNode: D, isNode: C } = Rn(), { alignWithSpaces: w } = ni();
        function k(A, N, x) {
          let P = A.getValue(), _ = m(A, (F) => C(F, ["sequence", "mapping"])), J = D(A), d = [P.type === "blockFolded" ? ">" : "|"];
          P.indent !== null && d.push(P.indent.toString()), P.chomping !== "clip" && d.push(P.chomping === "keep" ? "+" : "-"), p(P) && d.push(" ", N("indicatorComment"));
          let T = g(P, { parentIndent: _, isLastDescendant: J, options: x }), f = [];
          for (let [F, i] of T.entries())
            F === 0 && f.push(e), f.push(s(y(r(n, i)))), F !== T.length - 1 ? f.push(i.length === 0 ? e : c(o)) : P.chomping === "keep" && J && f.push(a(i.length === 0 ? e : o));
          return P.indent === null ? d.push(t(w(x.tabWidth, f))) : d.push(a(w(P.indent - 1 + _, f))), d;
        }
        l.exports = k;
      } }), Qo = $({ "src/language-yaml/printer-yaml.js"(u, l) {
        ue();
        var { builders: { breakParent: t, fill: a, group: s, hardline: e, join: r, line: n, lineSuffix: o, literalline: c }, utils: { getDocParts: y, replaceTextEndOfLine: m } } = wt(), { isPreviousLineEmpty: g } = Gt(), { insertPragma: p, isPragma: D } = Jo(), { locStart: C } = Xo(), w = Wo(), { getFlowScalarLineContents: k, getLastDescendantNode: A, hasLeadingComments: N, hasMiddleComments: x, hasTrailingComment: P, hasEndComments: _, hasPrettierIgnore: J, isLastDescendantNode: d, isNode: T, isInlineNode: f } = Rn(), F = zo(), { alignWithSpaces: i, printNextEmptyLine: h, shouldPrintEndComments: E } = ni(), { printFlowMapping: b, printFlowSequence: S } = Ho(), B = Yo(), I = Ko();
        function q(R, pe, be) {
          let fe = R.getValue(), Ie = [];
          fe.type !== "mappingValue" && N(fe) && Ie.push([r(e, R.map(be, "leadingComments")), e]);
          let { tag: X, anchor: se } = fe;
          X && Ie.push(be("tag")), X && se && Ie.push(" "), se && Ie.push(be("anchor"));
          let we = "";
          T(fe, ["mapping", "sequence", "comment", "directive", "mappingItem", "sequenceItem"]) && !d(R) && (we = h(R, pe.originalText)), (X || se) && (T(fe, ["sequence", "mapping"]) && !x(fe) ? Ie.push(e) : Ie.push(" ")), x(fe) && Ie.push([fe.middleComments.length === 1 ? "" : e, r(e, R.map(be, "middleComments")), e]);
          let _e = R.getParentNode();
          return J(R) ? Ie.push(m(pe.originalText.slice(fe.position.start.offset, fe.position.end.offset).trimEnd(), c)) : Ie.push(s(G(fe, _e, R, pe, be))), P(fe) && !T(fe, ["document", "documentHead"]) && Ie.push(o([fe.type === "mappingValue" && !fe.content ? "" : " ", _e.type === "mappingKey" && R.getParentNode(2).type === "mapping" && f(fe) ? "" : t, be("trailingComment")])), E(fe) && Ie.push(i(fe.type === "sequenceItem" ? 2 : 0, [e, r(e, R.map((it) => [g(pe.originalText, it.getValue(), C) ? e : "", be()], "endComments"))])), Ie.push(we), Ie;
        }
        function G(R, pe, be, fe, Ie) {
          switch (R.type) {
            case "root": {
              let { children: X } = R, se = [];
              be.each((_e, it) => {
                let ae = X[it], Q = X[it + 1];
                it !== 0 && se.push(e), se.push(Ie()), te(ae, Q) ? (se.push(e, "..."), P(ae) && se.push(" ", Ie("trailingComment"))) : Q && !P(Q.head) && se.push(e, "---");
              }, "children");
              let we = A(R);
              return (!T(we, ["blockLiteral", "blockFolded"]) || we.chomping !== "keep") && se.push(e), se;
            }
            case "document": {
              let X = pe.children[be.getName() + 1], se = [];
              return j(R, X, pe, fe) === "head" && ((R.head.children.length > 0 || R.head.endComments.length > 0) && se.push(Ie("head")), P(R.head) ? se.push(["---", " ", Ie(["head", "trailingComment"])]) : se.push("---")), M(R) && se.push(Ie("body")), r(e, se);
            }
            case "documentHead":
              return r(e, [...be.map(Ie, "children"), ...be.map(Ie, "endComments")]);
            case "documentBody": {
              let { children: X, endComments: se } = R, we = "";
              if (X.length > 0 && se.length > 0) {
                let _e = A(R);
                T(_e, ["blockFolded", "blockLiteral"]) ? _e.chomping !== "keep" && (we = [e, e]) : we = e;
              }
              return [r(e, be.map(Ie, "children")), we, r(e, be.map(Ie, "endComments"))];
            }
            case "directive":
              return ["%", r(" ", [R.name, ...R.parameters])];
            case "comment":
              return ["#", R.value];
            case "alias":
              return ["*", R.value];
            case "tag":
              return fe.originalText.slice(R.position.start.offset, R.position.end.offset);
            case "anchor":
              return ["&", R.value];
            case "plain":
              return De(R.type, fe.originalText.slice(R.position.start.offset, R.position.end.offset), fe);
            case "quoteDouble":
            case "quoteSingle": {
              let X = "'", se = '"', we = fe.originalText.slice(R.position.start.offset + 1, R.position.end.offset - 1);
              if (R.type === "quoteSingle" && we.includes("\\") || R.type === "quoteDouble" && /\\[^"]/.test(we)) {
                let it = R.type === "quoteDouble" ? se : X;
                return [it, De(R.type, we, fe), it];
              }
              if (we.includes(se))
                return [X, De(R.type, R.type === "quoteDouble" ? we.replace(/\\"/g, se).replace(/'/g, X.repeat(2)) : we, fe), X];
              if (we.includes(X))
                return [se, De(R.type, R.type === "quoteSingle" ? we.replace(/''/g, X) : we, fe), se];
              let _e = fe.singleQuote ? X : se;
              return [_e, De(R.type, we, fe), _e];
            }
            case "blockFolded":
            case "blockLiteral":
              return I(be, Ie, fe);
            case "mapping":
            case "sequence":
              return r(e, be.map(Ie, "children"));
            case "sequenceItem":
              return ["- ", i(2, R.content ? Ie("content") : "")];
            case "mappingKey":
            case "mappingValue":
              return R.content ? Ie("content") : "";
            case "mappingItem":
            case "flowMappingItem":
              return B(R, pe, be, Ie, fe);
            case "flowMapping":
              return b(be, Ie, fe);
            case "flowSequence":
              return S(be, Ie, fe);
            case "flowSequenceItem":
              return Ie("content");
            default:
              throw new Error(`Unexpected node type ${R.type}`);
          }
        }
        function M(R) {
          return R.body.children.length > 0 || _(R.body);
        }
        function te(R, pe) {
          return P(R) || pe && (pe.head.children.length > 0 || _(pe.head));
        }
        function j(R, pe, be, fe) {
          return be.children[0] === R && /---(?:\s|$)/.test(fe.originalText.slice(C(R), C(R) + 4)) || R.head.children.length > 0 || _(R.head) || P(R.head) ? "head" : te(R, pe) ? !1 : pe ? "root" : !1;
        }
        function De(R, pe, be) {
          let fe = k(R, pe, be);
          return r(e, fe.map((Ie) => a(y(r(n, Ie)))));
        }
        function U(R, pe) {
          if (T(pe))
            switch (delete pe.position, pe.type) {
              case "comment":
                if (D(pe.value))
                  return null;
                break;
              case "quoteDouble":
              case "quoteSingle":
                pe.type = "quote";
                break;
            }
        }
        l.exports = { preprocess: F, embed: w, print: q, massageAstNode: U, insertPragma: p };
      } }), Zo = $({ "src/language-yaml/options.js"(u, l) {
        ue();
        var t = On();
        l.exports = { bracketSpacing: t.bracketSpacing, singleQuote: t.singleQuote, proseWrap: t.proseWrap };
      } }), el = $({ "src/language-yaml/parsers.js"() {
        ue();
      } }), tl = $({ "node_modules/linguist-languages/data/YAML.json"(u, l) {
        l.exports = { name: "YAML", type: "data", color: "#cb171e", tmScope: "source.yaml", aliases: ["yml"], extensions: [".yml", ".mir", ".reek", ".rviz", ".sublime-syntax", ".syntax", ".yaml", ".yaml-tmlanguage", ".yaml.sed", ".yml.mysql"], filenames: [".clang-format", ".clang-tidy", ".gemrc", "CITATION.cff", "glide.lock", "yarn.lock"], aceMode: "yaml", codemirrorMode: "yaml", codemirrorMimeType: "text/x-yaml", languageId: 407 };
      } }), rl = $({ "src/language-yaml/index.js"(u, l) {
        ue();
        var t = vr(), a = Qo(), s = Zo(), e = el(), r = [t(tl(), (n) => ({ since: "1.14.0", parsers: ["yaml"], vscodeLanguageIds: ["yaml", "ansible", "home-assistant"], filenames: [...n.filenames.filter((o) => o !== "yarn.lock"), ".prettierrc", ".stylelintrc", ".lintstagedrc"] }))];
        l.exports = { languages: r, printers: { yaml: a }, options: s, parsers: e };
      } }), nl = $({ "src/languages.js"(u, l) {
        ue(), l.exports = [La(), eo(), oo(), ho(), bo(), Go(), rl()];
      } });
      ue();
      var { version: ul } = yr(), Mn = Yu(), { getSupportInfo: il } = nu(), sl = Ku(), al = nl(), ol = wt();
      function bn(u) {
        let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        return function() {
          for (var t = arguments.length, a = new Array(t), s = 0; s < t; s++)
            a[s] = arguments[s];
          let e = a[l] || {}, r = e.plugins || [];
          return a[l] = Object.assign(Object.assign({}, e), {}, { plugins: [...al, ...Array.isArray(r) ? r : Object.values(r)] }), u(...a);
        };
      }
      var ms = bn(Mn.formatWithCursor);
      V.exports = { formatWithCursor: ms, format(u, l) {
        return ms(u, l).formatted;
      }, check(u, l) {
        let { formatted: t } = ms(u, l);
        return t === u;
      }, doc: ol, getSupportInfo: bn(il, 0), version: ul, util: sl, __debug: { parse: bn(Mn.parse), formatAST: bn(Mn.formatAST), formatDoc: bn(Mn.formatDoc), printToDoc: bn(Mn.printToDoc), printDocToString: bn(Mn.printDocToString) } };
    });
    return Oe();
  });
} }), dl = ea(cl()), fl = ea(Dl());
function ml(Jr) {
  for (var Xr = [], Ae = 1; Ae < arguments.length; Ae++)
    Xr[Ae - 1] = arguments[Ae];
  var Yt = Array.from(typeof Jr == "string" ? [Jr] : Jr);
  Yt[Yt.length - 1] = Yt[Yt.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var hr = Yt.reduce(function(gr, Dn) {
    var Lr = Dn.match(/\n([\t ]+|(?!\s).)/g);
    return Lr ? gr.concat(Lr.map(function(Dr) {
      var Br, Zr;
      return (Zr = (Br = Dr.match(/[\t ]/g)) === null || Br === void 0 ? void 0 : Br.length) !== null && Zr !== void 0 ? Zr : 0;
    })) : gr;
  }, []);
  if (hr.length) {
    var br = new RegExp(`
[	 ]{` + Math.min.apply(Math, hr) + "}", "g");
    Yt = Yt.map(function(gr) {
      return gr.replace(br, `
`);
    });
  }
  Yt[0] = Yt[0].replace(/^\r?\n/, "");
  var Hr = Yt[0];
  return Xr.forEach(function(gr, Dn) {
    var Lr = Hr.match(/(?:^|\n)( *)$/), Dr = Lr ? Lr[1] : "", Br = gr;
    typeof gr == "string" && gr.includes(`
`) && (Br = String(gr).split(`
`).map(function(Zr, nn) {
      return nn === 0 ? Zr : "" + Dr + Zr;
    }).join(`
`)), Hr += Br + Yt[Dn + 1];
  }), Hr;
}
var gl = pl(2)((Jr, Xr) => Jr === !1 ? Xr : Jr === "dedent" || Jr === !0 ? ml(Xr) : fl.default.format(Xr, { parser: Jr, plugins: [dl.default], htmlWhitespaceSensitivity: "ignore" }).trim());
export {
  gl as formatter
};
//# sourceMappingURL=formatter-SWP5E3XI-2a93cf4c.js.map

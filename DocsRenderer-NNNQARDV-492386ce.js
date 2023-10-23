import { r as b, a as _l, R as o, b as fs, c as B0 } from "./index-d373fa27.js";
import { s as ms, t as I0, v as gs, w as P0, i as Sn, x as j0, y as N0, z as H0, d as hs, A as bs, B as Z0, C as ys, D as V0, E as z0, F as q0, G as U0, H as W0, I as G0, J as vs, K as Y0, L as K0, M as Es, _ as X0, N as J0, O as Q0, P as ho, e as xs, Q as ws, R as As, U as ed, V as td, W as rd, f as nd, S as Tl, X as Ba, l as na, r as ad, u as od } from "./_getPrototype-e4d945f6.js";
import { g as Cn, c as aa } from "./_commonjsHelpers-c5d32002.js";
import { L as Ss, v as ld } from "./index-d79fba58.js";
import { _ as bo, a as id, b as sd, c as ud, d as kn } from "./assertThisInitialized-16f5f00e.js";
import { d as xe } from "./index-398c73a4.js";
var He = (e) => `control-${e.replace(/\s+/g, "-")}`, _n = (e) => `set-${e.replace(/\s+/g, "-")}`;
const { global: cd } = __STORYBOOK_MODULE_GLOBAL__, { logger: dd } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var pd = Object.create, Cs = Object.defineProperty, fd = Object.getOwnPropertyDescriptor, ks = Object.getOwnPropertyNames, md = Object.getPrototypeOf, gd = Object.prototype.hasOwnProperty, yo = (e, t) => function() {
  return t || (0, e[ks(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, hd = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let a of ks(t))
      !gd.call(e, a) && a !== r && Cs(e, a, { get: () => t[a], enumerable: !(n = fd(t, a)) || n.enumerable });
  return e;
}, _s = (e, t, r) => (r = e != null ? pd(md(e)) : {}, hd(t || !e || !e.__esModule ? Cs(r, "default", { value: e, enumerable: !0 }) : r, e));
function xt() {
  return xt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xt.apply(this, arguments);
}
function bd(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ar(e, t) {
  return Ar = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Ar(e, t);
}
function yd(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ar(e, t);
}
function Ia(e) {
  return Ia = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Ia(e);
}
function vd(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Ed() {
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
function rn(e, t, r) {
  return Ed() ? rn = Reflect.construct.bind() : rn = function(n, a, l) {
    var i = [null];
    i.push.apply(i, a);
    var u = Function.bind.apply(n, i), s = new u();
    return l && Ar(s, l.prototype), s;
  }, rn.apply(null, arguments);
}
function Pa(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Pa = function(r) {
    if (r === null || !vd(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, n);
    }
    function n() {
      return rn(r, arguments, Ia(this).constructor);
    }
    return n.prototype = Object.create(r.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), Ar(n, r);
  }, Pa(e);
}
var xd = { 1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`, 2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`, 3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`, 4: `Couldn't generate valid rgb string from %s, it returned %s.

`, 5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`, 6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`, 7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`, 8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`, 9: `Please provide a number of steps to the modularScale helper.

`, 10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`, 11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`, 12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`, 13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`, 14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`, 15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`, 16: `You must provide a template to this method.

`, 17: `You passed an unsupported selector state to this method.

`, 18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`, 19: `fromSize and toSize must be provided as stringified numbers with the same units.

`, 20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`, 21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n", 22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n", 23: `fontFace expects a name of a font-family.

`, 24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`, 25: `fontFace expects localFonts to be an array.

`, 26: `fontFace expects fileFormats to be an array.

`, 27: `radialGradient requries at least 2 color-stops to properly render.

`, 28: `Please supply a filename to retinaImage() as the first argument.

`, 29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`, 30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n", 31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`, 32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`, 33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`, 34: `borderRadius expects a radius value as a string or number as the second argument.

`, 35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`, 36: `Property must be a string value.

`, 37: `Syntax Error at %s.

`, 38: `Formula contains a function that needs parentheses at %s.

`, 39: `Formula is missing closing parenthesis at %s.

`, 40: `Formula has too many closing parentheses at %s.

`, 41: `All values in a formula must have the same unit or be unitless.

`, 42: `Please provide a number of steps to the modularScale helper.

`, 43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`, 44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`, 45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`, 46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`, 47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`, 48: `fromSize and toSize must be provided as stringified numbers with the same units.

`, 49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`, 50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`, 51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`, 52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`, 53: `fontFace expects localFonts to be an array.

`, 54: `fontFace expects fileFormats to be an array.

`, 55: `fontFace expects a name of a font-family.

`, 56: `linearGradient requries at least 2 color-stops to properly render.

`, 57: `radialGradient requries at least 2 color-stops to properly render.

`, 58: `Please supply a filename to retinaImage() as the first argument.

`, 59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`, 60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n", 61: `Property must be a string value.

`, 62: `borderRadius expects a radius value as a string or number as the second argument.

`, 63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`, 64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`, 65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`, 66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`, 67: `You must provide a template to this method.

`, 68: `You passed an unsupported selector state to this method.

`, 69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`, 70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`, 71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`, 72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`, 73: `Please provide a valid CSS variable.

`, 74: `CSS variable not found and no default was provided.

`, 75: `important requires a valid style object, got a %s instead.

`, 76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`, 77: `remToPx expects a value in "rem" but you provided it in "%s".

`, 78: `base must be set in "px" or "%" but you set it in "%s".
` };
function wd() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], a = [], l;
  for (l = 1; l < t.length; l += 1)
    a.push(t[l]);
  return a.forEach(function(i) {
    n = n.replace(/%[a-z]/, i);
  }), n;
}
var et = function(e) {
  yd(t, e);
  function t(r) {
    for (var n, a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++)
      l[i - 1] = arguments[i];
    return n = e.call(this, wd.apply(void 0, [xd[r]].concat(l))) || this, bd(n);
  }
  return t;
}(Pa(Error));
function oa(e) {
  return Math.round(e * 255);
}
function Ad(e, t, r) {
  return oa(e) + "," + oa(t) + "," + oa(r);
}
function Sr(e, t, r, n) {
  if (n === void 0 && (n = Ad), t === 0)
    return n(r, r, r);
  var a = (e % 360 + 360) % 360 / 60, l = (1 - Math.abs(2 * r - 1)) * t, i = l * (1 - Math.abs(a % 2 - 1)), u = 0, s = 0, c = 0;
  a >= 0 && a < 1 ? (u = l, s = i) : a >= 1 && a < 2 ? (u = i, s = l) : a >= 2 && a < 3 ? (s = l, c = i) : a >= 3 && a < 4 ? (s = i, c = l) : a >= 4 && a < 5 ? (u = i, c = l) : a >= 5 && a < 6 && (u = l, c = i);
  var d = r - l / 2, m = u + d, f = s + d, p = c + d;
  return n(m, f, p);
}
var Ol = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "639", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };
function Sd(e) {
  if (typeof e != "string")
    return e;
  var t = e.toLowerCase();
  return Ol[t] ? "#" + Ol[t] : e;
}
var Cd = /^#[a-fA-F0-9]{6}$/, kd = /^#[a-fA-F0-9]{8}$/, _d = /^#[a-fA-F0-9]{3}$/, Td = /^#[a-fA-F0-9]{4}$/, la = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, Od = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, Rd = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, Fd = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Tn(e) {
  if (typeof e != "string")
    throw new et(3);
  var t = Sd(e);
  if (t.match(Cd))
    return { red: parseInt("" + t[1] + t[2], 16), green: parseInt("" + t[3] + t[4], 16), blue: parseInt("" + t[5] + t[6], 16) };
  if (t.match(kd)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return { red: parseInt("" + t[1] + t[2], 16), green: parseInt("" + t[3] + t[4], 16), blue: parseInt("" + t[5] + t[6], 16), alpha: r };
  }
  if (t.match(_d))
    return { red: parseInt("" + t[1] + t[1], 16), green: parseInt("" + t[2] + t[2], 16), blue: parseInt("" + t[3] + t[3], 16) };
  if (t.match(Td)) {
    var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return { red: parseInt("" + t[1] + t[1], 16), green: parseInt("" + t[2] + t[2], 16), blue: parseInt("" + t[3] + t[3], 16), alpha: n };
  }
  var a = la.exec(t);
  if (a)
    return { red: parseInt("" + a[1], 10), green: parseInt("" + a[2], 10), blue: parseInt("" + a[3], 10) };
  var l = Od.exec(t.substring(0, 50));
  if (l)
    return { red: parseInt("" + l[1], 10), green: parseInt("" + l[2], 10), blue: parseInt("" + l[3], 10), alpha: parseFloat("" + l[4]) > 1 ? parseFloat("" + l[4]) / 100 : parseFloat("" + l[4]) };
  var i = Rd.exec(t);
  if (i) {
    var u = parseInt("" + i[1], 10), s = parseInt("" + i[2], 10) / 100, c = parseInt("" + i[3], 10) / 100, d = "rgb(" + Sr(u, s, c) + ")", m = la.exec(d);
    if (!m)
      throw new et(4, t, d);
    return { red: parseInt("" + m[1], 10), green: parseInt("" + m[2], 10), blue: parseInt("" + m[3], 10) };
  }
  var f = Fd.exec(t.substring(0, 50));
  if (f) {
    var p = parseInt("" + f[1], 10), h = parseInt("" + f[2], 10) / 100, g = parseInt("" + f[3], 10) / 100, x = "rgb(" + Sr(p, h, g) + ")", y = la.exec(x);
    if (!y)
      throw new et(4, t, x);
    return { red: parseInt("" + y[1], 10), green: parseInt("" + y[2], 10), blue: parseInt("" + y[3], 10), alpha: parseFloat("" + f[4]) > 1 ? parseFloat("" + f[4]) / 100 : parseFloat("" + f[4]) };
  }
  throw new et(5);
}
function $d(e) {
  var t = e.red / 255, r = e.green / 255, n = e.blue / 255, a = Math.max(t, r, n), l = Math.min(t, r, n), i = (a + l) / 2;
  if (a === l)
    return e.alpha !== void 0 ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha } : { hue: 0, saturation: 0, lightness: i };
  var u, s = a - l, c = i > 0.5 ? s / (2 - a - l) : s / (a + l);
  switch (a) {
    case t:
      u = (r - n) / s + (r < n ? 6 : 0);
      break;
    case r:
      u = (n - t) / s + 2;
      break;
    default:
      u = (t - r) / s + 4;
      break;
  }
  return u *= 60, e.alpha !== void 0 ? { hue: u, saturation: c, lightness: i, alpha: e.alpha } : { hue: u, saturation: c, lightness: i };
}
function Ts(e) {
  return $d(Tn(e));
}
var Dd = function(e) {
  return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? "#" + e[1] + e[3] + e[5] : e;
}, ja = Dd;
function Tt(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function ia(e) {
  return Tt(Math.round(e * 255));
}
function Ld(e, t, r) {
  return ja("#" + ia(e) + ia(t) + ia(r));
}
function gn(e, t, r) {
  return Sr(e, t, r, Ld);
}
function Md(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return gn(e, t, r);
  if (typeof e == "object" && t === void 0 && r === void 0)
    return gn(e.hue, e.saturation, e.lightness);
  throw new et(1);
}
function Bd(e, t, r, n) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
    return n >= 1 ? gn(e, t, r) : "rgba(" + Sr(e, t, r) + "," + n + ")";
  if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1 ? gn(e.hue, e.saturation, e.lightness) : "rgba(" + Sr(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new et(2);
}
function Na(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return ja("#" + Tt(e) + Tt(t) + Tt(r));
  if (typeof e == "object" && t === void 0 && r === void 0)
    return ja("#" + Tt(e.red) + Tt(e.green) + Tt(e.blue));
  throw new et(6);
}
function Cr(e, t, r, n) {
  if (typeof e == "string" && typeof t == "number") {
    var a = Tn(e);
    return "rgba(" + a.red + "," + a.green + "," + a.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
      return n >= 1 ? Na(e, t, r) : "rgba(" + e + "," + t + "," + r + "," + n + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1 ? Na(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new et(7);
}
var Id = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, Pd = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && typeof e.alpha == "number";
}, jd = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, Nd = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && typeof e.alpha == "number";
};
function Os(e) {
  if (typeof e != "object")
    throw new et(8);
  if (Pd(e))
    return Cr(e);
  if (Id(e))
    return Na(e);
  if (Nd(e))
    return Bd(e);
  if (jd(e))
    return Md(e);
  throw new et(8);
}
function Rs(e, t, r) {
  return function() {
    var n = r.concat(Array.prototype.slice.call(arguments));
    return n.length >= t ? e.apply(this, n) : Rs(e, t, n);
  };
}
function On(e) {
  return Rs(e, e.length, []);
}
function Rn(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function Hd(e, t) {
  if (t === "transparent")
    return t;
  var r = Ts(t);
  return Os(xt({}, r, { lightness: Rn(0, 1, r.lightness - parseFloat(e)) }));
}
var Zd = On(Hd), Vd = Zd;
function zd(e, t) {
  if (t === "transparent")
    return t;
  var r = Ts(t);
  return Os(xt({}, r, { lightness: Rn(0, 1, r.lightness + parseFloat(e)) }));
}
var qd = On(zd), Ud = qd;
function Wd(e, t) {
  if (t === "transparent")
    return t;
  var r = Tn(t), n = typeof r.alpha == "number" ? r.alpha : 1, a = xt({}, r, { alpha: Rn(0, 1, (n * 100 + parseFloat(e) * 100) / 100) });
  return Cr(a);
}
var Gd = On(Wd), Yd = Gd;
function Kd(e, t) {
  if (t === "transparent")
    return t;
  var r = Tn(t), n = typeof r.alpha == "number" ? r.alpha : 1, a = xt({}, r, { alpha: Rn(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100) });
  return Cr(a);
}
var Xd = On(Kd), Jd = Xd, N = { primary: "#FF4785", secondary: "#029CFD", tertiary: "#FAFBFC", ancillary: "#22a699", orange: "#FC521F", gold: "#FFAE00", green: "#66BF3C", seafoam: "#37D5D3", purple: "#6F2CAC", ultraviolet: "#2A0481", lightest: "#FFFFFF", lighter: "#F7FAFC", light: "#EEF3F6", mediumlight: "#ECF4F9", medium: "#D9E8F2", mediumdark: "#73828C", dark: "#5C6870", darker: "#454E54", darkest: "#2E3438", border: "hsla(203, 50%, 30%, 0.15)", positive: "#66BF3C", negative: "#FF4400", warning: "#E69D00", critical: "#FFFFFF", defaultText: "#2E3438", inverseText: "#FFFFFF", positiveText: "#448028", negativeText: "#D43900", warningText: "#A15C20" }, vt = { app: "#F6F9FC", bar: N.lightest, content: N.lightest, gridCellSize: 10, hoverable: Jd(0.9, N.secondary), positive: "#E1FFD4", negative: "#FEDED2", warning: "#FFF5CF", critical: "#FF4400" }, tt = { fonts: { base: ['"Nunito Sans"', "-apple-system", '".SFNSText-Regular"', '"San Francisco"', "BlinkMacSystemFont", '"Segoe UI"', '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"].join(", "), mono: ["ui-monospace", "Menlo", "Monaco", '"Roboto Mono"', '"Oxygen Mono"', '"Ubuntu Monospace"', '"Source Code Pro"', '"Droid Sans Mono"', '"Courier New"', "monospace"].join(", ") }, weight: { regular: 400, bold: 700 }, size: { s1: 12, s2: 14, s3: 16, m1: 20, m2: 24, m3: 28, l1: 32, l2: 40, l3: 48, code: 90 } }, Qd = { base: "light", colorPrimary: "#FF4785", colorSecondary: "#029CFD", appBg: vt.app, appContentBg: N.lightest, appBorderColor: N.border, appBorderRadius: 4, fontBase: tt.fonts.base, fontCode: tt.fonts.mono, textColor: N.darkest, textInverseColor: N.lightest, textMutedColor: N.mediumdark, barTextColor: N.mediumdark, barHoverColor: N.secondary, barSelectedColor: N.secondary, barBg: N.lightest, buttonBg: vt.app, buttonBorder: N.medium, booleanBg: N.mediumlight, booleanSelectedBg: N.lightest, inputBg: N.lightest, inputBorder: N.border, inputTextColor: N.darkest, inputBorderRadius: 4 }, hn = Qd, e1 = { base: "dark", colorPrimary: "#FF4785", colorSecondary: "#029CFD", appBg: "#222425", appContentBg: "#1B1C1D", appBorderColor: "rgba(255,255,255,.1)", appBorderRadius: 4, fontBase: tt.fonts.base, fontCode: tt.fonts.mono, textColor: "#C9CDCF", textInverseColor: "#222425", textMutedColor: "#798186", barTextColor: "#798186", barHoverColor: N.secondary, barSelectedColor: N.secondary, barBg: "#292C2E", buttonBg: "#222425", buttonBorder: "rgba(255,255,255,.1)", booleanBg: "#222425", booleanSelectedBg: "#2E3438", inputBg: "#1B1C1D", inputBorder: "rgba(255,255,255,.1)", inputTextColor: N.lightest, inputBorderRadius: 4 }, t1 = e1, { window: sa } = cd, r1 = (e) => ({ color: e }), n1 = (e) => typeof e != "string" ? (dd.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`), !1) : !0, a1 = (e) => !/(gradient|var|calc)/.test(e), o1 = (e, t) => e === "darken" ? Cr(`${Vd(1, t)}`, 0.95) : e === "lighten" ? Cr(`${Ud(1, t)}`, 0.95) : t, l1 = (e) => (t) => {
  if (!n1(t) || !a1(t))
    return t;
  try {
    return o1(e, t);
  } catch {
    return t;
  }
}, Er = l1("lighten"), Fs = () => !sa || !sa.matchMedia ? "light" : sa.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light", Ha = { light: hn, dark: t1, normal: hn };
Fs();
var i1 = function(t) {
  return t();
}, $s = _l["useInsertionEffect"] ? _l["useInsertionEffect"] : !1, vo = $s || i1, Rl = $s || b.useLayoutEffect;
function Wr(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Ds = { exports: {} };
(function(e, t) {
  (function(r) {
    e.exports = r();
  })(function() {
    return function r(n, a, l) {
      function i(c, d) {
        if (!a[c]) {
          if (!n[c]) {
            var m = typeof Wr == "function" && Wr;
            if (!d && m)
              return m(c, !0);
            if (u)
              return u(c, !0);
            var f = new Error("Cannot find module '" + c + "'");
            throw f.code = "MODULE_NOT_FOUND", f;
          }
          var p = a[c] = { exports: {} };
          n[c][0].call(p.exports, function(h) {
            var g = n[c][1][h];
            return i(g || h);
          }, p, p.exports, r, n, a, l);
        }
        return a[c].exports;
      }
      for (var u = typeof Wr == "function" && Wr, s = 0; s < l.length; s++)
        i(l[s]);
      return i;
    }({ 1: [function(r, n, a) {
      n.exports = function(l) {
        if (typeof Map != "function" || l) {
          var i = r("./similar");
          return new i();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(r, n, a) {
      function l() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      l.prototype.get = function(i) {
        var u;
        if (this.lastItem && this.isEqual(this.lastItem.key, i))
          return this.lastItem.val;
        if (u = this.indexOf(i), u >= 0)
          return this.lastItem = this.list[u], this.list[u].val;
      }, l.prototype.set = function(i, u) {
        var s;
        return this.lastItem && this.isEqual(this.lastItem.key, i) ? (this.lastItem.val = u, this) : (s = this.indexOf(i), s >= 0 ? (this.lastItem = this.list[s], this.list[s].val = u, this) : (this.lastItem = { key: i, val: u }, this.list.push(this.lastItem), this.size++, this));
      }, l.prototype.delete = function(i) {
        var u;
        if (this.lastItem && this.isEqual(this.lastItem.key, i) && (this.lastItem = void 0), u = this.indexOf(i), u >= 0)
          return this.size--, this.list.splice(u, 1)[0];
      }, l.prototype.has = function(i) {
        var u;
        return this.lastItem && this.isEqual(this.lastItem.key, i) ? !0 : (u = this.indexOf(i), u >= 0 ? (this.lastItem = this.list[u], !0) : !1);
      }, l.prototype.forEach = function(i, u) {
        var s;
        for (s = 0; s < this.size; s++)
          i.call(u || this, this.list[s].val, this.list[s].key, this);
      }, l.prototype.indexOf = function(i) {
        var u;
        for (u = 0; u < this.size; u++)
          if (this.isEqual(this.list[u].key, i))
            return u;
        return -1;
      }, l.prototype.isEqual = function(i, u) {
        return i === u || i !== i && u !== u;
      }, n.exports = l;
    }, {}], 3: [function(r, n, a) {
      var l = r("map-or-similar");
      n.exports = function(c) {
        var d = new l(!1), m = [];
        return function(f) {
          var p = function() {
            var h = d, g, x, y = arguments.length - 1, w = Array(y + 1), v = !0, E;
            if ((p.numArgs || p.numArgs === 0) && p.numArgs !== y + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (E = 0; E < y; E++) {
              if (w[E] = {
                cacheItem: h,
                arg: arguments[E]
              }, h.has(arguments[E])) {
                h = h.get(arguments[E]);
                continue;
              }
              v = !1, g = new l(!1), h.set(arguments[E], g), h = g;
            }
            return v && (h.has(arguments[y]) ? x = h.get(arguments[y]) : v = !1), v || (x = f.apply(null, arguments), h.set(arguments[y], x)), c > 0 && (w[y] = {
              cacheItem: h,
              arg: arguments[y]
            }, v ? i(m, w) : m.push(w), m.length > c && u(m.shift())), p.wasMemoized = v, p.numArgs = y + 1, x;
          };
          return p.limit = c, p.wasMemoized = !1, p.cache = d, p.lru = m, p;
        };
      };
      function i(c, d) {
        var m = c.length, f = d.length, p, h, g;
        for (h = 0; h < m; h++) {
          for (p = !0, g = 0; g < f; g++)
            if (!s(c[h][g].arg, d[g].arg)) {
              p = !1;
              break;
            }
          if (p)
            break;
        }
        c.push(c.splice(h, 1)[0]);
      }
      function u(c) {
        var d = c.length, m = c[d - 1], f, p;
        for (m.cacheItem.delete(m.arg), p = d - 2; p >= 0 && (m = c[p], f = m.cacheItem.get(m.arg), !f || !f.size); p--)
          m.cacheItem.delete(m.arg);
      }
      function s(c, d) {
        return c === d || c !== c && d !== d;
      }
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
})(Ds);
var s1 = Ds.exports;
const Nt = /* @__PURE__ */ Cn(s1), { logger: u1 } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var c1 = yo({ "../../node_modules/react-is/cjs/react-is.development.js"(e) {
  (function() {
    var t = typeof Symbol == "function" && Symbol.for, r = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, a = t ? Symbol.for("react.fragment") : 60107, l = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, u = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, c = t ? Symbol.for("react.async_mode") : 60111, d = t ? Symbol.for("react.concurrent_mode") : 60111, m = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, h = t ? Symbol.for("react.memo") : 60115, g = t ? Symbol.for("react.lazy") : 60116, x = t ? Symbol.for("react.block") : 60121, y = t ? Symbol.for("react.fundamental") : 60117, w = t ? Symbol.for("react.responder") : 60118, v = t ? Symbol.for("react.scope") : 60119;
    function E(M) {
      return typeof M == "string" || typeof M == "function" || M === a || M === d || M === i || M === l || M === f || M === p || typeof M == "object" && M !== null && (M.$$typeof === g || M.$$typeof === h || M.$$typeof === u || M.$$typeof === s || M.$$typeof === m || M.$$typeof === y || M.$$typeof === w || M.$$typeof === v || M.$$typeof === x);
    }
    function A(M) {
      if (typeof M == "object" && M !== null) {
        var Pe = M.$$typeof;
        switch (Pe) {
          case r:
            var Ve = M.type;
            switch (Ve) {
              case c:
              case d:
              case a:
              case i:
              case l:
              case f:
                return Ve;
              default:
                var St = Ve && Ve.$$typeof;
                switch (St) {
                  case s:
                  case m:
                  case g:
                  case h:
                  case u:
                    return St;
                  default:
                    return Pe;
                }
            }
          case n:
            return Pe;
        }
      }
    }
    var S = c, k = d, C = s, T = u, O = r, R = m, $ = a, F = g, P = h, D = n, L = i, j = l, V = f, B = !1;
    function H(M) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), X(M) || A(M) === c;
    }
    function X(M) {
      return A(M) === d;
    }
    function ne(M) {
      return A(M) === s;
    }
    function K(M) {
      return A(M) === u;
    }
    function J(M) {
      return typeof M == "object" && M !== null && M.$$typeof === r;
    }
    function I(M) {
      return A(M) === m;
    }
    function z(M) {
      return A(M) === a;
    }
    function W(M) {
      return A(M) === g;
    }
    function se(M) {
      return A(M) === h;
    }
    function be(M) {
      return A(M) === n;
    }
    function it(M) {
      return A(M) === i;
    }
    function Re(M) {
      return A(M) === l;
    }
    function Ze(M) {
      return A(M) === f;
    }
    e.AsyncMode = S, e.ConcurrentMode = k, e.ContextConsumer = C, e.ContextProvider = T, e.Element = O, e.ForwardRef = R, e.Fragment = $, e.Lazy = F, e.Memo = P, e.Portal = D, e.Profiler = L, e.StrictMode = j, e.Suspense = V, e.isAsyncMode = H, e.isConcurrentMode = X, e.isContextConsumer = ne, e.isContextProvider = K, e.isElement = J, e.isForwardRef = I, e.isFragment = z, e.isLazy = W, e.isMemo = se, e.isPortal = be, e.isProfiler = it, e.isStrictMode = Re, e.isSuspense = Ze, e.isValidElementType = E, e.typeOf = A;
  })();
} }), d1 = yo({ "../../node_modules/react-is/index.js"(e, t) {
  t.exports = c1();
} }), Ls = yo({ "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
  var r = d1(), n = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, a = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, l = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, i = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, u = {};
  u[r.ForwardRef] = l, u[r.Memo] = i;
  function s(x) {
    return r.isMemo(x) ? i : u[x.$$typeof] || n;
  }
  var c = Object.defineProperty, d = Object.getOwnPropertyNames, m = Object.getOwnPropertySymbols, f = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, h = Object.prototype;
  function g(x, y, w) {
    if (typeof y != "string") {
      if (h) {
        var v = p(y);
        v && v !== h && g(x, v, w);
      }
      var E = d(y);
      m && (E = E.concat(m(y)));
      for (var A = s(x), S = s(y), k = 0; k < E.length; ++k) {
        var C = E[k];
        if (!a[C] && !(w && w[C]) && !(S && S[C]) && !(A && A[C])) {
          var T = f(y, C);
          try {
            c(x, C, T);
          } catch {
          }
        }
      }
    }
    return x;
  }
  t.exports = g;
} });
function Ms(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var p1 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Eo = Ms(function(e) {
  return p1.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
});
function f1(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function m1(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var g1 = function() {
  function e(r) {
    var n = this;
    this._insertTag = function(a) {
      var l;
      n.tags.length === 0 ? n.insertionPoint ? l = n.insertionPoint.nextSibling : n.prepend ? l = n.container.firstChild : l = n.before : l = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(a, l), n.tags.push(a);
    }, this.isSpeedy = r.speedy === void 0 ? !1 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(m1(this));
    var n = this.tags[this.tags.length - 1], a = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105;
    if (a && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + r + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !a, this.isSpeedy) {
      var l = f1(n);
      try {
        l.insertRule(r, l.cssRules.length);
      } catch (i) {
        /:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(r) || console.error('There was a problem inserting the following rule: "' + r + '"', i);
      }
    } else
      n.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      return r.parentNode && r.parentNode.removeChild(r);
    }), this.tags = [], this.ctr = 0, this._alreadyInsertedOrderInsensitiveRule = !1;
  }, e;
}(), he = "-ms-", bn = "-moz-", G = "-webkit-", xo = "comm", wo = "rule", Ao = "decl", h1 = "@import", Bs = "@keyframes", b1 = "@layer", y1 = Math.abs, Fn = String.fromCharCode, v1 = Object.assign;
function E1(e, t) {
  return de(e, 0) ^ 45 ? (((t << 2 ^ de(e, 0)) << 2 ^ de(e, 1)) << 2 ^ de(e, 2)) << 2 ^ de(e, 3) : 0;
}
function Is(e) {
  return e.trim();
}
function x1(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Y(e, t, r) {
  return e.replace(t, r);
}
function Za(e, t) {
  return e.indexOf(t);
}
function de(e, t) {
  return e.charCodeAt(t) | 0;
}
function kr(e, t, r) {
  return e.slice(t, r);
}
function Xe(e) {
  return e.length;
}
function So(e) {
  return e.length;
}
function Gr(e, t) {
  return t.push(e), e;
}
function w1(e, t) {
  return e.map(t).join("");
}
var $n = 1, Xt = 1, Ps = 0, Se = 0, oe = 0, lr = "";
function Dn(e, t, r, n, a, l, i) {
  return { value: e, root: t, parent: r, type: n, props: a, children: l, line: $n, column: Xt, length: i, return: "" };
}
function gr(e, t) {
  return v1(Dn("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function A1() {
  return oe;
}
function S1() {
  return oe = Se > 0 ? de(lr, --Se) : 0, Xt--, oe === 10 && (Xt = 1, $n--), oe;
}
function Ce() {
  return oe = Se < Ps ? de(lr, Se++) : 0, Xt++, oe === 10 && (Xt = 1, $n++), oe;
}
function at() {
  return de(lr, Se);
}
function nn() {
  return Se;
}
function Ir(e, t) {
  return kr(lr, e, t);
}
function _r(e) {
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
function js(e) {
  return $n = Xt = 1, Ps = Xe(lr = e), Se = 0, [];
}
function Ns(e) {
  return lr = "", e;
}
function an(e) {
  return Is(Ir(Se - 1, Va(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function C1(e) {
  for (; (oe = at()) && oe < 33; )
    Ce();
  return _r(e) > 2 || _r(oe) > 3 ? "" : " ";
}
function k1(e, t) {
  for (; --t && Ce() && !(oe < 48 || oe > 102 || oe > 57 && oe < 65 || oe > 70 && oe < 97); )
    ;
  return Ir(e, nn() + (t < 6 && at() == 32 && Ce() == 32));
}
function Va(e) {
  for (; Ce(); )
    switch (oe) {
      case e:
        return Se;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Va(oe);
        break;
      case 40:
        e === 41 && Va(e);
        break;
      case 92:
        Ce();
        break;
    }
  return Se;
}
function _1(e, t) {
  for (; Ce() && e + oe !== 47 + 10 && !(e + oe === 42 + 42 && at() === 47); )
    ;
  return "/*" + Ir(t, Se - 1) + "*" + Fn(e === 47 ? e : Ce());
}
function T1(e) {
  for (; !_r(at()); )
    Ce();
  return Ir(e, Se);
}
function O1(e) {
  return Ns(on("", null, null, null, [""], e = js(e), 0, [0], e));
}
function on(e, t, r, n, a, l, i, u, s) {
  for (var c = 0, d = 0, m = i, f = 0, p = 0, h = 0, g = 1, x = 1, y = 1, w = 0, v = "", E = a, A = l, S = n, k = v; x; )
    switch (h = w, w = Ce()) {
      case 40:
        if (h != 108 && de(k, m - 1) == 58) {
          Za(k += Y(an(w), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += an(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += C1(h);
        break;
      case 92:
        k += k1(nn() - 1, 7);
        continue;
      case 47:
        switch (at()) {
          case 42:
          case 47:
            Gr(R1(_1(Ce(), nn()), t, r), s);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * g:
        u[c++] = Xe(k) * y;
      case 125 * g:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            x = 0;
          case 59 + d:
            y == -1 && (k = Y(k, /\f/g, "")), p > 0 && Xe(k) - m && Gr(p > 32 ? $l(k + ";", n, r, m - 1) : $l(Y(k, " ", "") + ";", n, r, m - 2), s);
            break;
          case 59:
            k += ";";
          default:
            if (Gr(S = Fl(k, t, r, c, d, a, u, v, E = [], A = [], m), l), w === 123)
              if (d === 0)
                on(k, t, S, S, E, l, m, u, A);
              else
                switch (f === 99 && de(k, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    on(e, S, S, n && Gr(Fl(e, S, S, 0, 0, a, u, v, a, E = [], m), A), a, A, m, u, n ? E : A);
                    break;
                  default:
                    on(k, S, S, S, [""], A, 0, u, A);
                }
        }
        c = d = p = 0, g = y = 1, v = k = "", m = i;
        break;
      case 58:
        m = 1 + Xe(k), p = h;
      default:
        if (g < 1) {
          if (w == 123)
            --g;
          else if (w == 125 && g++ == 0 && S1() == 125)
            continue;
        }
        switch (k += Fn(w), w * g) {
          case 38:
            y = d > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            u[c++] = (Xe(k) - 1) * y, y = 1;
            break;
          case 64:
            at() === 45 && (k += an(Ce())), f = at(), d = m = Xe(v = k += T1(nn())), w++;
            break;
          case 45:
            h === 45 && Xe(k) == 2 && (g = 0);
        }
    }
  return l;
}
function Fl(e, t, r, n, a, l, i, u, s, c, d) {
  for (var m = a - 1, f = a === 0 ? l : [""], p = So(f), h = 0, g = 0, x = 0; h < n; ++h)
    for (var y = 0, w = kr(e, m + 1, m = y1(g = i[h])), v = e; y < p; ++y)
      (v = Is(g > 0 ? f[y] + " " + w : Y(w, /&\f/g, f[y]))) && (s[x++] = v);
  return Dn(e, t, r, a === 0 ? wo : u, s, c, d);
}
function R1(e, t, r) {
  return Dn(e, t, r, xo, Fn(A1()), kr(e, 2, -2), 0);
}
function $l(e, t, r, n) {
  return Dn(e, t, r, Ao, kr(e, 0, n), kr(e, n + 1, -1), n);
}
function Kt(e, t) {
  for (var r = "", n = So(e), a = 0; a < n; a++)
    r += t(e[a], a, e, t) || "";
  return r;
}
function F1(e, t, r, n) {
  switch (e.type) {
    case b1:
      if (e.children.length)
        break;
    case h1:
    case Ao:
      return e.return = e.return || e.value;
    case xo:
      return "";
    case Bs:
      return e.return = e.value + "{" + Kt(e.children, n) + "}";
    case wo:
      e.value = e.props.join(",");
  }
  return Xe(r = Kt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function $1(e) {
  var t = So(e);
  return function(r, n, a, l) {
    for (var i = "", u = 0; u < t; u++)
      i += e[u](r, n, a, l) || "";
    return i;
  };
}
var Dl = function(e) {
  var t = /* @__PURE__ */ new WeakMap();
  return function(r) {
    if (t.has(r))
      return t.get(r);
    var n = e(r);
    return t.set(r, n), n;
  };
}, D1 = function(e, t, r) {
  for (var n = 0, a = 0; n = a, a = at(), n === 38 && a === 12 && (t[r] = 1), !_r(a); )
    Ce();
  return Ir(e, Se);
}, L1 = function(e, t) {
  var r = -1, n = 44;
  do
    switch (_r(n)) {
      case 0:
        n === 38 && at() === 12 && (t[r] = 1), e[r] += D1(Se - 1, t, r);
        break;
      case 2:
        e[r] += an(n);
        break;
      case 4:
        if (n === 44) {
          e[++r] = at() === 58 ? "&\f" : "", t[r] = e[r].length;
          break;
        }
      default:
        e[r] += Fn(n);
    }
  while (n = Ce());
  return e;
}, M1 = function(e, t) {
  return Ns(L1(js(e), t));
}, Ll = /* @__PURE__ */ new WeakMap(), B1 = function(e) {
  if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
    for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Ll.get(r)) && !n) {
      Ll.set(e, !0);
      for (var a = [], l = M1(t, a), i = r.props, u = 0, s = 0; u < l.length; u++)
        for (var c = 0; c < i.length; c++, s++)
          e.props[s] = a[u] ? l[u].replace(/&\f/g, i[c]) : i[c] + " " + l[u];
    }
  }
}, I1 = function(e) {
  if (e.type === "decl") {
    var t = e.value;
    t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
  }
}, P1 = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", j1 = function(e) {
  return e.type === "comm" && e.children.indexOf(P1) > -1;
}, N1 = function(e) {
  return function(t, r, n) {
    if (!(t.type !== "rule" || e.compat)) {
      var a = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (a) {
        for (var l = !!t.parent, i = l ? t.parent.children : n, u = i.length - 1; u >= 0; u--) {
          var s = i[u];
          if (s.line < t.line)
            break;
          if (s.column < t.column) {
            if (j1(s))
              return;
            break;
          }
        }
        a.forEach(function(c) {
          console.error('The pseudo class "' + c + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + c.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Hs = function(e) {
  return e.type.charCodeAt(1) === 105 && e.type.charCodeAt(0) === 64;
}, H1 = function(e, t) {
  for (var r = e - 1; r >= 0; r--)
    if (!Hs(t[r]))
      return !0;
  return !1;
}, Ml = function(e) {
  e.type = "", e.value = "", e.return = "", e.children = "", e.props = "";
}, Z1 = function(e, t, r) {
  Hs(e) && (e.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Ml(e)) : H1(t, r) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Ml(e)));
};
function Zs(e, t) {
  switch (E1(e, t)) {
    case 5103:
      return G + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return G + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return G + e + bn + e + he + e + e;
    case 6828:
    case 4268:
      return G + e + he + e + e;
    case 6165:
      return G + e + he + "flex-" + e + e;
    case 5187:
      return G + e + Y(e, /(\w+).+(:[^]+)/, G + "box-$1$2" + he + "flex-$1$2") + e;
    case 5443:
      return G + e + he + "flex-item-" + Y(e, /flex-|-self/, "") + e;
    case 4675:
      return G + e + he + "flex-line-pack" + Y(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return G + e + he + Y(e, "shrink", "negative") + e;
    case 5292:
      return G + e + he + Y(e, "basis", "preferred-size") + e;
    case 6060:
      return G + "box-" + Y(e, "-grow", "") + G + e + he + Y(e, "grow", "positive") + e;
    case 4554:
      return G + Y(e, /([^-])(transform)/g, "$1" + G + "$2") + e;
    case 6187:
      return Y(Y(Y(e, /(zoom-|grab)/, G + "$1"), /(image-set)/, G + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Y(e, /(image-set\([^]*)/, G + "$1$`$1");
    case 4968:
      return Y(Y(e, /(.+:)(flex-)?(.*)/, G + "box-pack:$3" + he + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + G + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Y(e, /(.+)-inline(.+)/, G + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Xe(e) - 1 - t > 6)
        switch (de(e, t + 1)) {
          case 109:
            if (de(e, t + 4) !== 45)
              break;
          case 102:
            return Y(e, /(.+:)(.+)-([^]+)/, "$1" + G + "$2-$3$1" + bn + (de(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Za(e, "stretch") ? Zs(Y(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (de(e, t + 1) !== 115)
        break;
    case 6444:
      switch (de(e, Xe(e) - 3 - (~Za(e, "!important") && 10))) {
        case 107:
          return Y(e, ":", ":" + G) + e;
        case 101:
          return Y(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + G + (de(e, 14) === 45 ? "inline-" : "") + "box$3$1" + G + "$2$3$1" + he + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (de(e, t + 11)) {
        case 114:
          return G + e + he + Y(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return G + e + he + Y(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return G + e + he + Y(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return G + e + he + e + e;
  }
  return e;
}
var V1 = function(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Ao:
        e.return = Zs(e.value, e.length);
        break;
      case Bs:
        return Kt([gr(e, { value: Y(e.value, "@", "@" + G) })], n);
      case wo:
        if (e.length)
          return w1(e.props, function(a) {
            switch (x1(a, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Kt([gr(e, { props: [Y(a, /:(read-\w+)/, ":" + bn + "$1")] })], n);
              case "::placeholder":
                return Kt([gr(e, { props: [Y(a, /:(plac\w+)/, ":" + G + "input-$1")] }), gr(e, { props: [Y(a, /:(plac\w+)/, ":" + bn + "$1")] }), gr(e, { props: [Y(a, /:(plac\w+)/, he + "input-$1")] })], n);
            }
            return "";
          });
    }
}, z1 = [V1], q1 = function(e) {
  var t = e.key;
  if (!t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(h) {
      var g = h.getAttribute("data-emotion");
      g.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
    });
  }
  var n = e.stylisPlugins || z1;
  if (/[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var a = {}, l, i = [];
  l = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function(h) {
    for (var g = h.getAttribute("data-emotion").split(" "), x = 1; x < g.length; x++)
      a[g[x]] = !0;
    i.push(h);
  });
  var u, s = [B1, I1];
  s.push(N1({ get compat() {
    return p.compat;
  } }), Z1);
  {
    var c, d = [F1, function(h) {
      h.root || (h.return ? c.insert(h.return) : h.value && h.type !== xo && c.insert(h.value + "{}"));
    }], m = $1(s.concat(n, d)), f = function(h) {
      return Kt(O1(h), m);
    };
    u = function(h, g, x, y) {
      c = x, g.map !== void 0 && (c = { insert: function(w) {
        x.insert(w + g.map);
      } }), f(h ? h + "{" + g.styles + "}" : g.styles), y && (p.inserted[g.name] = !0);
    };
  }
  var p = { key: t, sheet: new g1({ key: t, container: l, nonce: e.nonce, speedy: e.speedy, prepend: e.prepend, insertionPoint: e.insertionPoint }), nonce: e.nonce, inserted: a, registered: {}, insert: u };
  return p.sheet.hydrate(i), p;
};
_s(Ls());
var U1 = !0;
function Co(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(a) {
    e[a] !== void 0 ? t.push(e[a] + ";") : n += a + " ";
  }), n;
}
var Ln = function(e, t, r) {
  var n = e.key + "-" + t.name;
  (r === !1 || U1 === !1) && e.registered[n] === void 0 && (e.registered[n] = t.styles);
}, Mn = function(e, t, r) {
  Ln(e, t, r);
  var n = e.key + "-" + t.name;
  if (e.inserted[t.name] === void 0) {
    var a = t;
    do
      e.insert(t === a ? "." + n : "", a, e.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function W1(e) {
  for (var t = 0, r, n = 0, a = e.length; a >= 4; ++n, a -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= r >>> 24, t = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var G1 = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, Bl = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Y1 = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", K1 = /[A-Z]|^ms/g, Vs = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ko = function(e) {
  return e.charCodeAt(1) === 45;
}, Il = function(e) {
  return e != null && typeof e != "boolean";
}, ua = Ms(function(e) {
  return ko(e) ? e : e.replace(K1, "-$&").toLowerCase();
}), yn = function(e, t) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(Vs, function(r, n, a) {
          return Je = { name: n, styles: a, next: Je }, n;
        });
  }
  return G1[e] !== 1 && !ko(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
Pl = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, jl = ["normal", "none", "initial", "inherit", "unset"], Nl = yn, Hl = /^-ms-/, Zl = /-(.)/g, ca = {}, yn = function(e, t) {
  if (e === "content" && (typeof t != "string" || jl.indexOf(t) === -1 && !Pl.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
    throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
  var r = Nl(e, t);
  return r !== "" && !ko(e) && e.indexOf("-") !== -1 && ca[e] === void 0 && (ca[e] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + e.replace(Hl, "ms-").replace(Zl, function(n, a) {
    return a.toUpperCase();
  }) + "?")), r;
};
var Pl, jl, Nl, Hl, Zl, ca, zs = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Tr(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(zs);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return Je = { name: r.name, styles: r.styles, next: Je }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            Je = { name: n.name, styles: n.styles, next: Je }, n = n.next;
        var a = r.styles + ";";
        return r.map !== void 0 && (a += r.map), a;
      }
      return X1(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = Je, i = r(e);
        return Je = l, Tr(e, t, i);
      } else
        console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      var u = [], s = r.replace(Vs, function(d, m, f) {
        var p = "animation" + u.length;
        return u.push("const " + p + " = keyframes`" + f.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + p + "}";
      });
      u.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(u, ["`" + s + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + s + "`"));
      break;
  }
  if (t == null)
    return r;
  var c = t[r];
  return c !== void 0 ? c : r;
}
function X1(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var a = 0; a < r.length; a++)
      n += Tr(e, t, r[a]) + ";";
  else
    for (var l in r) {
      var i = r[l];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? n += l + "{" + t[i] + "}" : Il(i) && (n += ua(l) + ":" + yn(l, i) + ";");
      else {
        if (l === "NO_COMPONENT_SELECTOR")
          throw new Error(zs);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var u = 0; u < i.length; u++)
            Il(i[u]) && (n += ua(l) + ":" + yn(l, i[u]) + ";");
        else {
          var s = Tr(e, t, i);
          switch (l) {
            case "animation":
            case "animationName": {
              n += ua(l) + ":" + s + ";";
              break;
            }
            default:
              l === "undefined" && console.error(Y1), n += l + "{" + s + "}";
          }
        }
      }
    }
  return n;
}
var Vl = /label:\s*([^\s;\n{]+)\s*(;|$)/g, qs;
qs = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
var Je, Jt = function(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, a = "";
  Je = void 0;
  var l = e[0];
  l == null || l.raw === void 0 ? (n = !1, a += Tr(r, t, l)) : (l[0] === void 0 && console.error(Bl), a += l[0]);
  for (var i = 1; i < e.length; i++)
    a += Tr(r, t, e[i]), n && (l[i] === void 0 && console.error(Bl), a += l[i]);
  var u;
  a = a.replace(qs, function(m) {
    return u = m, "";
  }), Vl.lastIndex = 0;
  for (var s = "", c; (c = Vl.exec(a)) !== null; )
    s += "-" + c[1];
  var d = W1(a) + s;
  return { name: d, styles: a, map: u, next: Je, toString: function() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
  } };
}, J1 = {}.hasOwnProperty, _o = b.createContext(typeof HTMLElement < "u" ? q1({ key: "css" }) : null);
_o.displayName = "EmotionCacheContext";
_o.Provider;
var Bn = function(e) {
  return b.forwardRef(function(t, r) {
    var n = b.useContext(_o);
    return e(t, n, r);
  });
}, wt = b.createContext({});
wt.displayName = "EmotionThemeContext";
var Q1 = function() {
  return b.useContext(wt);
}, ep = function(e, t) {
  if (typeof t == "function") {
    var r = t(e);
    if (r == null || typeof r != "object" || Array.isArray(r))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return r;
  }
  if (t == null || typeof t != "object" || Array.isArray(t))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return xt({}, e, t);
}, tp = Dl(function(e) {
  return Dl(function(t) {
    return ep(e, t);
  });
}), Us = function(e) {
  var t = b.useContext(wt);
  return e.theme !== t && (t = tp(t)(e.theme)), b.createElement(wt.Provider, { value: t }, e.children);
}, zl = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ql = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", rp = function(e) {
  var t = e.cache, r = e.serialized, n = e.isStringTag;
  return Ln(t, r, n), vo(function() {
    return Mn(t, r, n);
  }), null;
}, np = Bn(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var a = e[zl], l = [n], i = "";
  typeof e.className == "string" ? i = Co(t.registered, l, e.className) : e.className != null && (i = e.className + " ");
  var u = Jt(l, void 0, b.useContext(wt));
  if (u.name.indexOf("-") === -1) {
    var s = e[ql];
    s && (u = Jt([u, "label:" + s + ";"]));
  }
  i += t.key + "-" + u.name;
  var c = {};
  for (var d in e)
    J1.call(e, d) && d !== "css" && d !== zl && d !== ql && (c[d] = e[d]);
  return c.ref = r, c.className = i, b.createElement(b.Fragment, null, b.createElement(rp, { cache: t, serialized: u, isStringTag: typeof a == "string" }), b.createElement(a, c));
});
np.displayName = "EmotionCssPropInternal";
_s(Ls());
var ap = { name: "@emotion/react", version: "11.11.1", main: "dist/emotion-react.cjs.js", module: "dist/emotion-react.esm.js", browser: { "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js" }, exports: { ".": { module: { worker: "./dist/emotion-react.worker.esm.js", browser: "./dist/emotion-react.browser.esm.js", default: "./dist/emotion-react.esm.js" }, import: "./dist/emotion-react.cjs.mjs", default: "./dist/emotion-react.cjs.js" }, "./jsx-runtime": { module: { worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js", browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js", default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js" }, import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs", default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js" }, "./_isolated-hnrs": { module: { worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js", browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js", default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js" }, import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs", default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js" }, "./jsx-dev-runtime": { module: { worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js", browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js", default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js" }, import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs", default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js" }, "./package.json": "./package.json", "./types/css-prop": "./types/css-prop.d.ts", "./macro": { types: { import: "./macro.d.mts", default: "./macro.d.ts" }, default: "./macro.js" } }, types: "types/index.d.ts", files: ["src", "dist", "jsx-runtime", "jsx-dev-runtime", "_isolated-hnrs", "types/*.d.ts", "macro.*"], sideEffects: !1, author: "Emotion Contributors", license: "MIT", scripts: { "test:typescript": "dtslint types" }, dependencies: { "@babel/runtime": "^7.18.3", "@emotion/babel-plugin": "^11.11.0", "@emotion/cache": "^11.11.0", "@emotion/serialize": "^1.1.2", "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1", "@emotion/utils": "^1.2.1", "@emotion/weak-memoize": "^0.3.1", "hoist-non-react-statics": "^3.3.1" }, peerDependencies: { react: ">=16.8.0" }, peerDependenciesMeta: { "@types/react": { optional: !0 } }, devDependencies: { "@definitelytyped/dtslint": "0.0.112", "@emotion/css": "11.11.0", "@emotion/css-prettifier": "1.1.3", "@emotion/server": "11.11.0", "@emotion/styled": "11.11.0", "html-tag-names": "^1.1.2", react: "16.14.0", "svg-tag-names": "^1.1.1", typescript: "^4.5.5" }, repository: "https://github.com/emotion-js/emotion/tree/main/packages/react", publishConfig: { access: "public" }, "umd:main": "dist/emotion-react.umd.min.js", preconstruct: { entrypoints: ["./index.js", "./jsx-runtime.js", "./jsx-dev-runtime.js", "./_isolated-hnrs.js"], umdName: "emotionReact", exports: { envConditions: ["browser", "worker"], extra: { "./types/css-prop": "./types/css-prop.d.ts", "./macro": { types: { import: "./macro.d.mts", default: "./macro.d.ts" }, default: "./macro.js" } } } } }, Ul = !1, op = Bn(function(e, t) {
  !Ul && (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Ul = !0);
  var r = e.styles, n = Jt([r], void 0, b.useContext(wt)), a = b.useRef();
  return Rl(function() {
    var l = t.key + "-global", i = new t.sheet.constructor({ key: l, nonce: t.sheet.nonce, container: t.sheet.container, speedy: t.sheet.isSpeedy }), u = !1, s = document.querySelector('style[data-emotion="' + l + " " + n.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), s !== null && (u = !0, s.setAttribute("data-emotion", l), i.hydrate([s])), a.current = [i, u], function() {
      i.flush();
    };
  }, [t]), Rl(function() {
    var l = a.current, i = l[0], u = l[1];
    if (u) {
      l[1] = !1;
      return;
    }
    if (n.next !== void 0 && Mn(t, n.next, !0), i.tags.length) {
      var s = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = s, i.flush();
    }
    t.insert("", n, i, !1);
  }, [t, n.name]), null;
});
op.displayName = "EmotionGlobal";
function To() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Jt(t);
}
var ir = function() {
  var e = To.apply(void 0, arguments), t = "animation-" + e.name;
  return { name: t, styles: "@keyframes " + t + "{" + e.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}, lp = function e(t) {
  for (var r = t.length, n = 0, a = ""; n < r; n++) {
    var l = t[n];
    if (l != null) {
      var i = void 0;
      switch (typeof l) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(l))
            i = e(l);
          else {
            l.styles !== void 0 && l.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), i = "";
            for (var u in l)
              l[u] && u && (i && (i += " "), i += u);
          }
          break;
        }
        default:
          i = l;
      }
      i && (a && (a += " "), a += i);
    }
  }
  return a;
};
function ip(e, t, r) {
  var n = [], a = Co(e, n, r);
  return n.length < 2 ? r : a + t(n);
}
var sp = function(e) {
  var t = e.cache, r = e.serializedArr;
  return vo(function() {
    for (var n = 0; n < r.length; n++)
      Mn(t, r[n], !1);
  }), null;
}, up = Bn(function(e, t) {
  var r = !1, n = [], a = function() {
    if (r)
      throw new Error("css can only be used during render");
    for (var s = arguments.length, c = new Array(s), d = 0; d < s; d++)
      c[d] = arguments[d];
    var m = Jt(c, t.registered);
    return n.push(m), Ln(t, m, !1), t.key + "-" + m.name;
  }, l = function() {
    if (r)
      throw new Error("cx can only be used during render");
    for (var s = arguments.length, c = new Array(s), d = 0; d < s; d++)
      c[d] = arguments[d];
    return ip(t.registered, a, lp(c));
  }, i = { css: a, cx: l, theme: b.useContext(wt) }, u = e.children(i);
  return r = !0, b.createElement(b.Fragment, null, b.createElement(sp, { cache: t, serializedArr: n }), u);
});
up.displayName = "EmotionClassNames";
da = !0, Wl = typeof jest < "u" || typeof vi < "u", da && !Wl && (pa = typeof globalThis < "u" ? globalThis : da ? window : global, fa = "__EMOTION_REACT_" + ap.version.split(".")[0] + "__", pa[fa] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), pa[fa] = !0);
var da, Wl, pa, fa, cp = Eo, dp = function(e) {
  return e !== "theme";
}, Gl = function(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96 ? cp : dp;
}, Yl = function(e, t, r) {
  var n;
  if (t) {
    var a = t.shouldForwardProp;
    n = e.__emotion_forwardProp && a ? function(l) {
      return e.__emotion_forwardProp(l) && a(l);
    } : a;
  }
  return typeof n != "function" && r && (n = e.__emotion_forwardProp), n;
}, Kl = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, pp = function(e) {
  var t = e.cache, r = e.serialized, n = e.isStringTag;
  return Ln(t, r, n), vo(function() {
    return Mn(t, r, n);
  }), null;
}, fp = function e(t, r) {
  if (t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, a = n && t.__emotion_base || t, l, i;
  r !== void 0 && (l = r.label, i = r.target);
  var u = Yl(t, r, n), s = u || Gl(a), c = !s("as");
  return function() {
    var d = arguments, m = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (l !== void 0 && m.push("label:" + l + ";"), d[0] == null || d[0].raw === void 0)
      m.push.apply(m, d);
    else {
      d[0][0] === void 0 && console.error(Kl), m.push(d[0][0]);
      for (var f = d.length, p = 1; p < f; p++)
        d[0][p] === void 0 && console.error(Kl), m.push(d[p], d[0][p]);
    }
    var h = Bn(function(g, x, y) {
      var w = c && g.as || a, v = "", E = [], A = g;
      if (g.theme == null) {
        A = {};
        for (var S in g)
          A[S] = g[S];
        A.theme = b.useContext(wt);
      }
      typeof g.className == "string" ? v = Co(x.registered, E, g.className) : g.className != null && (v = g.className + " ");
      var k = Jt(m.concat(E), x.registered, A);
      v += x.key + "-" + k.name, i !== void 0 && (v += " " + i);
      var C = c && u === void 0 ? Gl(w) : s, T = {};
      for (var O in g)
        c && O === "as" || C(O) && (T[O] = g[O]);
      return T.className = v, T.ref = y, b.createElement(b.Fragment, null, b.createElement(pp, { cache: x, serialized: k, isStringTag: typeof w == "string" }), b.createElement(w, T));
    });
    return h.displayName = l !== void 0 ? l : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", h.defaultProps = t.defaultProps, h.__emotion_real = h, h.__emotion_base = a, h.__emotion_styles = m, h.__emotion_forwardProp = u, Object.defineProperty(h, "toString", { value: function() {
      return i === void 0 ? "NO_COMPONENT_SELECTOR" : "." + i;
    } }), h.withComponent = function(g, x) {
      return e(g, xt({}, r, x, { shouldForwardProp: Yl(h, x, !0) })).apply(void 0, m);
    }, h;
  };
}, mp = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], _ = fp.bind();
mp.forEach(function(e) {
  _[e] = _(e);
});
var gp = Nt(1)(({ typography: e }) => ({ body: { fontFamily: e.fonts.base, fontSize: e.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }, "*": { boxSizing: "border-box" }, "h1, h2, h3, h4, h5, h6": { fontWeight: e.weight.regular, margin: 0, padding: 0 }, "button, input, textarea, select": { fontFamily: "inherit", fontSize: "inherit", boxSizing: "border-box" }, sub: { fontSize: "0.8em", bottom: "-0.2em" }, sup: { fontSize: "0.8em", top: "-0.2em" }, "b, strong": { fontWeight: e.weight.bold }, hr: { border: "none", borderTop: "1px solid silver", clear: "both", marginBottom: "1.25rem" }, code: { fontFamily: e.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", display: "inline-block", paddingLeft: 2, paddingRight: 2, verticalAlign: "baseline", color: "inherit" }, pre: { fontFamily: e.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0" } }));
Nt(1)(({ color: e, background: t, typography: r }) => {
  let n = gp({ typography: r });
  return { ...n, body: { ...n.body, color: e.defaultText, background: t.app, overflow: "hidden" }, hr: { ...n.hr, borderTop: `1px solid ${e.border}` } };
});
var hp = { rubber: "cubic-bezier(0.175, 0.885, 0.335, 1.05)" }, bp = ir`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`, Ws = ir`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`, yp = ir`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`, vp = ir`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`, Ep = To`
  animation: ${Ws} 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`, xp = To`
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }
`, wp = { rotate360: bp, glow: Ws, float: yp, jiggle: vp, inlineGlow: Ep, hoverable: xp }, Ap = { BASE_FONT_FAMILY: "Menlo, monospace", BASE_FONT_SIZE: "11px", BASE_LINE_HEIGHT: 1.2, BASE_BACKGROUND_COLOR: "rgb(36, 36, 36)", BASE_COLOR: "rgb(213, 213, 213)", OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10, OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5, OBJECT_NAME_COLOR: "rgb(227, 110, 236)", OBJECT_VALUE_NULL_COLOR: "rgb(127, 127, 127)", OBJECT_VALUE_UNDEFINED_COLOR: "rgb(127, 127, 127)", OBJECT_VALUE_REGEXP_COLOR: "rgb(233, 63, 59)", OBJECT_VALUE_STRING_COLOR: "rgb(233, 63, 59)", OBJECT_VALUE_SYMBOL_COLOR: "rgb(233, 63, 59)", OBJECT_VALUE_NUMBER_COLOR: "hsl(252, 100%, 75%)", OBJECT_VALUE_BOOLEAN_COLOR: "hsl(252, 100%, 75%)", OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(85, 106, 242)", HTML_TAG_COLOR: "rgb(93, 176, 215)", HTML_TAGNAME_COLOR: "rgb(93, 176, 215)", HTML_TAGNAME_TEXT_TRANSFORM: "lowercase", HTML_ATTRIBUTE_NAME_COLOR: "rgb(155, 187, 220)", HTML_ATTRIBUTE_VALUE_COLOR: "rgb(242, 151, 102)", HTML_COMMENT_COLOR: "rgb(137, 137, 137)", HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)", ARROW_COLOR: "rgb(145, 145, 145)", ARROW_MARGIN_RIGHT: 3, ARROW_FONT_SIZE: 12, ARROW_ANIMATION_DURATION: "0", TREENODE_FONT_FAMILY: "Menlo, monospace", TREENODE_FONT_SIZE: "11px", TREENODE_LINE_HEIGHT: 1.2, TREENODE_PADDING_LEFT: 12, TABLE_BORDER_COLOR: "rgb(85, 85, 85)", TABLE_TH_BACKGROUND_COLOR: "rgb(44, 44, 44)", TABLE_TH_HOVER_COLOR: "rgb(48, 48, 48)", TABLE_SORT_ICON_COLOR: "black", TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))", TABLE_DATA_BACKGROUND_SIZE: "128px 32px" }, Sp = { BASE_FONT_FAMILY: "Menlo, monospace", BASE_FONT_SIZE: "11px", BASE_LINE_HEIGHT: 1.2, BASE_BACKGROUND_COLOR: "white", BASE_COLOR: "black", OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10, OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5, OBJECT_NAME_COLOR: "rgb(136, 19, 145)", OBJECT_VALUE_NULL_COLOR: "rgb(128, 128, 128)", OBJECT_VALUE_UNDEFINED_COLOR: "rgb(128, 128, 128)", OBJECT_VALUE_REGEXP_COLOR: "rgb(196, 26, 22)", OBJECT_VALUE_STRING_COLOR: "rgb(196, 26, 22)", OBJECT_VALUE_SYMBOL_COLOR: "rgb(196, 26, 22)", OBJECT_VALUE_NUMBER_COLOR: "rgb(28, 0, 207)", OBJECT_VALUE_BOOLEAN_COLOR: "rgb(28, 0, 207)", OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(13, 34, 170)", HTML_TAG_COLOR: "rgb(168, 148, 166)", HTML_TAGNAME_COLOR: "rgb(136, 18, 128)", HTML_TAGNAME_TEXT_TRANSFORM: "lowercase", HTML_ATTRIBUTE_NAME_COLOR: "rgb(153, 69, 0)", HTML_ATTRIBUTE_VALUE_COLOR: "rgb(26, 26, 166)", HTML_COMMENT_COLOR: "rgb(35, 110, 37)", HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)", ARROW_COLOR: "#6e6e6e", ARROW_MARGIN_RIGHT: 3, ARROW_FONT_SIZE: 12, ARROW_ANIMATION_DURATION: "0", TREENODE_FONT_FAMILY: "Menlo, monospace", TREENODE_FONT_SIZE: "11px", TREENODE_LINE_HEIGHT: 1.2, TREENODE_PADDING_LEFT: 12, TABLE_BORDER_COLOR: "#aaa", TABLE_TH_BACKGROUND_COLOR: "#eee", TABLE_TH_HOVER_COLOR: "hsla(0, 0%, 90%, 1)", TABLE_SORT_ICON_COLOR: "#6e6e6e", TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))", TABLE_DATA_BACKGROUND_SIZE: "128px 32px" }, Cp = (e) => Object.entries(e).reduce((t, [r, n]) => ({ ...t, [r]: r1(n) }), {}), kp = ({ colors: e, mono: t }) => {
  let r = Cp(e);
  return { token: { fontFamily: t, WebkitFontSmoothing: "antialiased", "&.tag": r.red3, "&.comment": { ...r.green1, fontStyle: "italic" }, "&.prolog": { ...r.green1, fontStyle: "italic" }, "&.doctype": { ...r.green1, fontStyle: "italic" }, "&.cdata": { ...r.green1, fontStyle: "italic" }, "&.string": r.red1, "&.url": r.cyan1, "&.symbol": r.cyan1, "&.number": r.cyan1, "&.boolean": r.cyan1, "&.variable": r.cyan1, "&.constant": r.cyan1, "&.inserted": r.cyan1, "&.atrule": r.blue1, "&.keyword": r.blue1, "&.attr-value": r.blue1, "&.punctuation": r.gray1, "&.operator": r.gray1, "&.function": r.gray1, "&.deleted": r.red2, "&.important": { fontWeight: "bold" }, "&.bold": { fontWeight: "bold" }, "&.italic": { fontStyle: "italic" }, "&.class-name": r.cyan2, "&.selector": r.red3, "&.attr-name": r.red4, "&.property": r.red4, "&.regex": r.red4, "&.entity": r.red4, "&.directive.tag .tag": { background: "#ffff00", ...r.gray1 } }, "language-json .token.boolean": r.blue1, "language-json .token.number": r.blue1, "language-json .token.property": r.cyan2, namespace: { opacity: 0.7 } };
}, _p = { green1: "#008000", red1: "#A31515", red2: "#9a050f", red3: "#800000", red4: "#ff0000", gray1: "#393A34", cyan1: "#36acaa", cyan2: "#2B91AF", blue1: "#0000ff", blue2: "#00009f" }, Tp = { green1: "#7C7C7C", red1: "#92C379", red2: "#9a050f", red3: "#A8FF60", red4: "#96CBFE", gray1: "#EDEDED", cyan1: "#C6C5FE", cyan2: "#FFFFB6", blue1: "#B474DD", blue2: "#00009f" }, Op = (e) => ({ primary: e.colorPrimary, secondary: e.colorSecondary, tertiary: N.tertiary, ancillary: N.ancillary, orange: N.orange, gold: N.gold, green: N.green, seafoam: N.seafoam, purple: N.purple, ultraviolet: N.ultraviolet, lightest: N.lightest, lighter: N.lighter, light: N.light, mediumlight: N.mediumlight, medium: N.medium, mediumdark: N.mediumdark, dark: N.dark, darker: N.darker, darkest: N.darkest, border: N.border, positive: N.positive, negative: N.negative, warning: N.warning, critical: N.critical, defaultText: e.textColor || N.darkest, inverseText: e.textInverseColor || N.lightest, positiveText: N.positiveText, negativeText: N.negativeText, warningText: N.warningText }), za = (e = Ha[Fs()]) => {
  let { base: t, colorPrimary: r, colorSecondary: n, appBg: a, appContentBg: l, appBorderColor: i, appBorderRadius: u, fontBase: s, fontCode: c, textColor: d, textInverseColor: m, barTextColor: f, barHoverColor: p, barSelectedColor: h, barBg: g, buttonBg: x, buttonBorder: y, booleanBg: w, booleanSelectedBg: v, inputBg: E, inputBorder: A, inputTextColor: S, inputBorderRadius: k, brandTitle: C, brandUrl: T, brandImage: O, brandTarget: R, gridCellSize: $, ...F } = e;
  return { ...F, base: t, color: Op(e), background: { app: a, bar: g, content: l, gridCellSize: $ || vt.gridCellSize, hoverable: vt.hoverable, positive: vt.positive, negative: vt.negative, warning: vt.warning, critical: vt.critical }, typography: { fonts: { base: s, mono: c }, weight: tt.weight, size: tt.size }, animation: wp, easing: hp, input: { background: E, border: A, borderRadius: k, color: S }, button: { background: x || E, border: y || A }, boolean: { background: w || A, selectedBackground: v || E }, layoutMargin: 10, appBorderColor: i, appBorderRadius: u, barTextColor: f, barHoverColor: p || n, barSelectedColor: h || n, barBg: g, brand: { title: C, url: T, image: O || (C ? null : void 0), target: R }, code: kp({ colors: t === "light" ? _p : Tp, mono: c }), addonActionsTheme: { ...t === "light" ? Sp : Ap, BASE_FONT_FAMILY: c, BASE_FONT_SIZE: tt.size.s2 - 1, BASE_LINE_HEIGHT: "18px", BASE_BACKGROUND_COLOR: "transparent", BASE_COLOR: d, ARROW_COLOR: Yd(0.2, i), ARROW_MARGIN_RIGHT: 4, ARROW_FONT_SIZE: 8, TREENODE_FONT_FAMILY: c, TREENODE_FONT_SIZE: tt.size.s2 - 1, TREENODE_LINE_HEIGHT: "18px", TREENODE_PADDING_LEFT: 12 } };
}, Rp = (e) => Object.keys(e).length === 0, ma = (e) => e != null && typeof e == "object", Fp = (e, ...t) => Object.prototype.hasOwnProperty.call(e, ...t), $p = () => /* @__PURE__ */ Object.create(null), Gs = (e, t) => e === t || !ma(e) || !ma(t) ? {} : Object.keys(e).reduce((r, n) => {
  if (Fp(t, n)) {
    let a = Gs(e[n], t[n]);
    return ma(a) && Rp(a) || (r[n] = a), r;
  }
  return r[n] = void 0, r;
}, $p()), Dp = Gs;
function Lp(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var n = Array.from(typeof e == "string" ? [e] : e);
  n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var a = n.reduce(function(u, s) {
    var c = s.match(/\n([\t ]+|(?!\s).)/g);
    return c ? u.concat(c.map(function(d) {
      var m, f;
      return (f = (m = d.match(/[\t ]/g)) === null || m === void 0 ? void 0 : m.length) !== null && f !== void 0 ? f : 0;
    })) : u;
  }, []);
  if (a.length) {
    var l = new RegExp(`
[	 ]{` + Math.min.apply(Math, a) + "}", "g");
    n = n.map(function(u) {
      return u.replace(l, `
`);
    });
  }
  n[0] = n[0].replace(/^\r?\n/, "");
  var i = n[0];
  return t.forEach(function(u, s) {
    var c = i.match(/(?:^|\n)( *)$/), d = c ? c[1] : "", m = u;
    typeof u == "string" && u.includes(`
`) && (m = String(u).split(`
`).map(function(f, p) {
      return p === 0 ? f : "" + d + f;
    }).join(`
`)), i += m + n[s + 1];
  }), i;
}
var Mp = (e) => {
  if (!e)
    return za(hn);
  let t = Dp(hn, e);
  return Object.keys(t).length && u1.warn(Lp`
          Your theme is missing properties, you should update your theme!

          theme-data missing:
        `, t), za(e);
}, qa = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */";
function U() {
  return U = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, U.apply(this, arguments);
}
function Oo(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, l;
  for (l = 0; l < n.length; l++)
    a = n[l], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var Bp = Object.create, Ys = Object.defineProperty, Ip = Object.getOwnPropertyDescriptor, Ks = Object.getOwnPropertyNames, Pp = Object.getPrototypeOf, jp = Object.prototype.hasOwnProperty, Z = (e, t) => function() {
  return t || (0, e[Ks(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, Np = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let a of Ks(t))
      !jp.call(e, a) && a !== r && Ys(e, a, { get: () => t[a], enumerable: !(n = Ip(t, a)) || n.enumerable });
  return e;
}, _e = (e, t, r) => (r = e != null ? Bp(Pp(e)) : {}, Np(t || !e || !e.__esModule ? Ys(r, "default", { value: e, enumerable: !0 }) : r, e)), Hp = Z({ "../../node_modules/refractor/lang/markdown.js"(e, t) {
  t.exports = r, r.displayName = "markdown", r.aliases = ["md"];
  function r(n) {
    (function(a) {
      var l = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
      function i(h) {
        return h = h.replace(/<inner>/g, function() {
          return l;
        }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + h + ")");
      }
      var u = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, s = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
        return u;
      }), c = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
      a.languages.markdown = a.languages.extend("markup", {}), a.languages.insertBefore("markdown", "prolog", { "front-matter-block": { pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/, lookbehind: !0, greedy: !0, inside: { punctuation: /^---|---$/, "front-matter": { pattern: /\S+(?:\s+\S+)*/, alias: ["yaml", "language-yaml"], inside: a.languages.yaml } } }, blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" }, table: { pattern: RegExp("^" + s + c + "(?:" + s + ")*", "m"), inside: { "table-data-rows": { pattern: RegExp("^(" + s + c + ")(?:" + s + ")*$"), lookbehind: !0, inside: { "table-data": { pattern: RegExp(u), inside: a.languages.markdown }, punctuation: /\|/ } }, "table-line": { pattern: RegExp("^(" + s + ")" + c + "$"), lookbehind: !0, inside: { punctuation: /\||:?-{3,}:?/ } }, "table-header-row": { pattern: RegExp("^" + s + "$"), inside: { "table-header": { pattern: RegExp(u), alias: "important", inside: a.languages.markdown }, punctuation: /\|/ } } } }, code: [{ pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/, lookbehind: !0, alias: "keyword" }, { pattern: /^```[\s\S]*?^```$/m, greedy: !0, inside: { "code-block": { pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: !0 }, "code-language": { pattern: /^(```).+/, lookbehind: !0 }, punctuation: /```/ } }], title: [{ pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m, alias: "important", inside: { punctuation: /==+$|--+$/ } }, { pattern: /(^\s*)#.+/m, lookbehind: !0, alias: "important", inside: { punctuation: /^#+|#+$/ } }], hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: "punctuation" }, list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: "punctuation" }, "url-reference": { pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/, inside: { variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 }, string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/, punctuation: /^[\[\]!:]|[<>]/ }, alias: "url" }, bold: { pattern: i(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {} }, punctuation: /\*\*|__/ } }, italic: { pattern: i(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} }, punctuation: /[*_]/ } }, strike: { pattern: i(/(~~?)(?:(?!~)<inner>)+\2/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {} }, punctuation: /~~?/ } }, "code-snippet": { pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/, lookbehind: !0, greedy: !0, alias: ["code", "keyword"] }, url: { pattern: i(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source), lookbehind: !0, greedy: !0, inside: { operator: /^!/, content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} }, variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 }, url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 }, string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: !0 } } } }), ["url", "bold", "italic", "strike"].forEach(function(h) {
        ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(g) {
          h !== g && (a.languages.markdown[h].inside.content.inside[g] = a.languages.markdown[g]);
        });
      }), a.hooks.add("after-tokenize", function(h) {
        if (h.language !== "markdown" && h.language !== "md")
          return;
        function g(x) {
          if (!(!x || typeof x == "string"))
            for (var y = 0, w = x.length; y < w; y++) {
              var v = x[y];
              if (v.type !== "code") {
                g(v.content);
                continue;
              }
              var E = v.content[1], A = v.content[3];
              if (E && A && E.type === "code-language" && A.type === "code-block" && typeof E.content == "string") {
                var S = E.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
                S = (/[a-z][\w-]*/i.exec(S) || [""])[0].toLowerCase();
                var k = "language-" + S;
                A.alias ? typeof A.alias == "string" ? A.alias = [A.alias, k] : A.alias.push(k) : A.alias = [k];
              }
            }
        }
        g(h.tokens);
      }), a.hooks.add("wrap", function(h) {
        if (h.type === "code-block") {
          for (var g = "", x = 0, y = h.classes.length; x < y; x++) {
            var w = h.classes[x], v = /language-(.+)/.exec(w);
            if (v) {
              g = v[1];
              break;
            }
          }
          var E = a.languages[g];
          if (E)
            h.content = a.highlight(p(h.content.value), E, g);
          else if (g && g !== "none" && a.plugins.autoloader) {
            var A = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
            h.attributes.id = A, a.plugins.autoloader.loadLanguages(g, function() {
              var S = document.getElementById(A);
              S && (S.innerHTML = a.highlight(S.textContent, a.languages[g], g));
            });
          }
        }
      });
      var d = RegExp(a.languages.markup.tag.pattern.source, "gi"), m = { amp: "&", lt: "<", gt: ">", quot: '"' }, f = String.fromCodePoint || String.fromCharCode;
      function p(h) {
        var g = h.replace(d, "");
        return g = g.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(x, y) {
          if (y = y.toLowerCase(), y[0] === "#") {
            var w;
            return y[1] === "x" ? w = parseInt(y.slice(2), 16) : w = Number(y.slice(1)), f(w);
          } else {
            var v = m[y];
            return v || x;
          }
        }), g;
      }
      a.languages.md = a.languages.markdown;
    })(n);
  }
} }), Zp = Z({ "../../node_modules/refractor/lang/yaml.js"(e, t) {
  t.exports = r, r.displayName = "yaml", r.aliases = ["yml"];
  function r(n) {
    (function(a) {
      var l = /[*&][^\s[\]{},]+/, i = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, u = "(?:" + i.source + "(?:[ 	]+" + l.source + ")?|" + l.source + "(?:[ 	]+" + i.source + ")?)", s = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
        return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
      }), c = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
      function d(m, f) {
        f = (f || "").replace(/m/g, "") + "m";
        var p = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
          return u;
        }).replace(/<<value>>/g, function() {
          return m;
        });
        return RegExp(p, f);
      }
      a.languages.yaml = { scalar: { pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
        return u;
      })), lookbehind: !0, alias: "string" }, comment: /#.*/, key: { pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
        return u;
      }).replace(/<<key>>/g, function() {
        return "(?:" + s + "|" + c + ")";
      })), lookbehind: !0, greedy: !0, alias: "atrule" }, directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: "important" }, datetime: { pattern: d(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source), lookbehind: !0, alias: "number" }, boolean: { pattern: d(/false|true/.source, "i"), lookbehind: !0, alias: "important" }, null: { pattern: d(/null|~/.source, "i"), lookbehind: !0, alias: "important" }, string: { pattern: d(c), lookbehind: !0, greedy: !0 }, number: { pattern: d(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"), lookbehind: !0 }, tag: i, important: l, punctuation: /---|[:[\]{}\-,|>?]|\.\.\./ }, a.languages.yml = a.languages.yaml;
    })(n);
  }
} }), Xs = Z({ "../../node_modules/refractor/lang/typescript.js"(e, t) {
  t.exports = r, r.displayName = "typescript", r.aliases = ["ts"];
  function r(n) {
    (function(a) {
      a.languages.typescript = a.languages.extend("javascript", { "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: !0, greedy: !0, inside: null }, builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/ }), a.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete a.languages.typescript.parameter, delete a.languages.typescript["literal-property"];
      var l = a.languages.extend("typescript", {});
      delete l["class-name"], a.languages.typescript["class-name"].inside = l, a.languages.insertBefore("typescript", "function", { decorator: { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ } }, "generic-function": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: !0, inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: l } } } }), a.languages.ts = a.languages.typescript;
    })(n);
  }
} }), Js = Z({ "../../node_modules/refractor/lang/jsx.js"(e, t) {
  t.exports = r, r.displayName = "jsx", r.aliases = [];
  function r(n) {
    (function(a) {
      var l = a.util.clone(a.languages.javascript), i = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, u = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, s = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
      function c(f, p) {
        return f = f.replace(/<S>/g, function() {
          return i;
        }).replace(/<BRACES>/g, function() {
          return u;
        }).replace(/<SPREAD>/g, function() {
          return s;
        }), RegExp(f, p);
      }
      s = c(s).source, a.languages.jsx = a.languages.extend("markup", l), a.languages.jsx.tag.pattern = c(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), a.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, a.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, a.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, a.languages.jsx.tag.inside.comment = l.comment, a.languages.insertBefore("inside", "attr-name", { spread: { pattern: c(/<SPREAD>/.source), inside: a.languages.jsx } }, a.languages.jsx.tag), a.languages.insertBefore("inside", "special-attr", { script: { pattern: c(/=<BRACES>/.source), alias: "language-javascript", inside: { "script-punctuation": { pattern: /^=(?=\{)/, alias: "punctuation" }, rest: a.languages.jsx } } }, a.languages.jsx.tag);
      var d = function(f) {
        return f ? typeof f == "string" ? f : typeof f.content == "string" ? f.content : f.content.map(d).join("") : "";
      }, m = function(f) {
        for (var p = [], h = 0; h < f.length; h++) {
          var g = f[h], x = !1;
          if (typeof g != "string" && (g.type === "tag" && g.content[0] && g.content[0].type === "tag" ? g.content[0].content[0].content === "</" ? p.length > 0 && p[p.length - 1].tagName === d(g.content[0].content[1]) && p.pop() : g.content[g.content.length - 1].content === "/>" || p.push({ tagName: d(g.content[0].content[1]), openedBraces: 0 }) : p.length > 0 && g.type === "punctuation" && g.content === "{" ? p[p.length - 1].openedBraces++ : p.length > 0 && p[p.length - 1].openedBraces > 0 && g.type === "punctuation" && g.content === "}" ? p[p.length - 1].openedBraces-- : x = !0), (x || typeof g == "string") && p.length > 0 && p[p.length - 1].openedBraces === 0) {
            var y = d(g);
            h < f.length - 1 && (typeof f[h + 1] == "string" || f[h + 1].type === "plain-text") && (y += d(f[h + 1]), f.splice(h + 1, 1)), h > 0 && (typeof f[h - 1] == "string" || f[h - 1].type === "plain-text") && (y = d(f[h - 1]) + y, f.splice(h - 1, 1), h--), f[h] = new a.Token("plain-text", y, null, y);
          }
          g.content && typeof g.content != "string" && m(g.content);
        }
      };
      a.hooks.add("after-tokenize", function(f) {
        f.language !== "jsx" && f.language !== "tsx" || m(f.tokens);
      });
    })(n);
  }
} }), Vp = Z({ "../../node_modules/refractor/lang/tsx.js"(e, t) {
  var r = Js(), n = Xs();
  t.exports = a, a.displayName = "tsx", a.aliases = [];
  function a(l) {
    l.register(r), l.register(n), function(i) {
      var u = i.util.clone(i.languages.typescript);
      i.languages.tsx = i.languages.extend("jsx", u), delete i.languages.tsx.parameter, delete i.languages.tsx["literal-property"];
      var s = i.languages.tsx.tag;
      s.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + s.pattern.source + ")", s.pattern.flags), s.lookbehind = !0;
    }(l);
  }
} }), zp = Z({ "../../node_modules/refractor/lang/clike.js"(e, t) {
  t.exports = r, r.displayName = "clike", r.aliases = [];
  function r(n) {
    n.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ };
  }
} }), qp = Z({ "../../node_modules/refractor/lang/javascript.js"(e, t) {
  t.exports = r, r.displayName = "javascript", r.aliases = ["js"];
  function r(n) {
    n.languages.javascript = n.languages.extend("clike", { "class-name": [n.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: { pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source), lookbehind: !0 }, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), n.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, n.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/, lookbehind: !0, greedy: !0, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: "language-regex", inside: n.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: !0, inside: n.languages.javascript }, { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: !0, inside: n.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: !0, inside: n.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: !0, inside: n.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), n.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: !0, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: n.languages.javascript } }, string: /[\s\S]+/ } }, "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: !0, greedy: !0, alias: "property" } }), n.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: !0, alias: "property" } }), n.languages.markup && (n.languages.markup.tag.addInlined("script", "javascript"), n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), n.languages.js = n.languages.javascript;
  }
} }), Qs = Z({ "../../node_modules/refractor/lang/css.js"(e, t) {
  t.exports = r, r.displayName = "css", r.aliases = [];
  function r(n) {
    (function(a) {
      var l = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      a.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/, inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: !0, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 } } }, url: { pattern: RegExp("\\burl\\((?:" + l.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"), greedy: !0, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + l.source + "$"), alias: "url" } } }, selector: { pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + l.source + ")*(?=\\s*\\{)"), lookbehind: !0 }, string: { pattern: l, greedy: !0 }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: !0 }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 }, punctuation: /[(){};:,]/ }, a.languages.css.atrule.inside.rest = a.languages.css;
      var i = a.languages.markup;
      i && (i.tag.addInlined("style", "css"), i.tag.addAttribute("style", "css"));
    })(n);
  }
} }), eu = Z({ "../../node_modules/refractor/lang/markup.js"(e, t) {
  t.exports = r, r.displayName = "markup", r.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"];
  function r(n) {
    n.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: !0, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, n.languages.markup.tag.inside["attr-value"].inside.entity = n.languages.markup.entity, n.languages.markup.doctype.inside["internal-subset"].inside = n.languages.markup, n.hooks.add("wrap", function(a) {
      a.type === "entity" && (a.attributes.title = a.content.value.replace(/&amp;/, "&"));
    }), Object.defineProperty(n.languages.markup.tag, "addInlined", { value: function(a, l) {
      var i = {};
      i["language-" + l] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: n.languages[l] }, i.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var u = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: i } };
      u["language-" + l] = { pattern: /[\s\S]+/, inside: n.languages[l] };
      var s = {};
      s[a] = { pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
        return a;
      }), "i"), lookbehind: !0, greedy: !0, inside: u }, n.languages.insertBefore("markup", "cdata", s);
    } }), Object.defineProperty(n.languages.markup.tag, "addAttribute", { value: function(a, l) {
      n.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(/(^|["'\s])/.source + "(?:" + a + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"), lookbehind: !0, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: !0, alias: [l, "language-" + l], inside: n.languages[l] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
    } }), n.languages.html = n.languages.markup, n.languages.mathml = n.languages.markup, n.languages.svg = n.languages.markup, n.languages.xml = n.languages.extend("markup", {}), n.languages.ssml = n.languages.xml, n.languages.atom = n.languages.xml, n.languages.rss = n.languages.xml;
  }
} }), Up = Z({ "../../node_modules/xtend/immutable.js"(e, t) {
  t.exports = n;
  var r = Object.prototype.hasOwnProperty;
  function n() {
    for (var a = {}, l = 0; l < arguments.length; l++) {
      var i = arguments[l];
      for (var u in i)
        r.call(i, u) && (a[u] = i[u]);
    }
    return a;
  }
} }), tu = Z({ "../../node_modules/property-information/lib/util/schema.js"(e, t) {
  t.exports = n;
  var r = n.prototype;
  r.space = null, r.normal = {}, r.property = {};
  function n(a, l, i) {
    this.property = a, this.normal = l, i && (this.space = i);
  }
} }), Wp = Z({ "../../node_modules/property-information/lib/util/merge.js"(e, t) {
  var r = Up(), n = tu();
  t.exports = a;
  function a(l) {
    for (var i = l.length, u = [], s = [], c = -1, d, m; ++c < i; )
      d = l[c], u.push(d.property), s.push(d.normal), m = d.space;
    return new n(r.apply(null, u), r.apply(null, s), m);
  }
} }), Ro = Z({ "../../node_modules/property-information/normalize.js"(e, t) {
  t.exports = r;
  function r(n) {
    return n.toLowerCase();
  }
} }), ru = Z({ "../../node_modules/property-information/lib/util/info.js"(e, t) {
  t.exports = n;
  var r = n.prototype;
  r.space = null, r.attribute = null, r.property = null, r.boolean = !1, r.booleanish = !1, r.overloadedBoolean = !1, r.number = !1, r.commaSeparated = !1, r.spaceSeparated = !1, r.commaOrSpaceSeparated = !1, r.mustUseProperty = !1, r.defined = !1;
  function n(a, l) {
    this.property = a, this.attribute = l;
  }
} }), Fo = Z({ "../../node_modules/property-information/lib/util/types.js"(e) {
  var t = 0;
  e.boolean = r(), e.booleanish = r(), e.overloadedBoolean = r(), e.number = r(), e.spaceSeparated = r(), e.commaSeparated = r(), e.commaOrSpaceSeparated = r();
  function r() {
    return Math.pow(2, ++t);
  }
} }), nu = Z({ "../../node_modules/property-information/lib/util/defined-info.js"(e, t) {
  var r = ru(), n = Fo();
  t.exports = i, i.prototype = new r(), i.prototype.defined = !0;
  var a = ["boolean", "booleanish", "overloadedBoolean", "number", "commaSeparated", "spaceSeparated", "commaOrSpaceSeparated"], l = a.length;
  function i(s, c, d, m) {
    var f = -1, p;
    for (u(this, "space", m), r.call(this, s, c); ++f < l; )
      p = a[f], u(this, p, (d & n[p]) === n[p]);
  }
  function u(s, c, d) {
    d && (s[c] = d);
  }
} }), Pr = Z({ "../../node_modules/property-information/lib/util/create.js"(e, t) {
  var r = Ro(), n = tu(), a = nu();
  t.exports = l;
  function l(i) {
    var u = i.space, s = i.mustUseProperty || [], c = i.attributes || {}, d = i.properties, m = i.transform, f = {}, p = {}, h, g;
    for (h in d)
      g = new a(h, m(c, h), d[h], u), s.indexOf(h) !== -1 && (g.mustUseProperty = !0), f[h] = g, p[r(h)] = h, p[r(g.attribute)] = h;
    return new n(f, p, u);
  }
} }), Gp = Z({ "../../node_modules/property-information/lib/xlink.js"(e, t) {
  var r = Pr();
  t.exports = r({ space: "xlink", transform: n, properties: { xLinkActuate: null, xLinkArcRole: null, xLinkHref: null, xLinkRole: null, xLinkShow: null, xLinkTitle: null, xLinkType: null } });
  function n(a, l) {
    return "xlink:" + l.slice(5).toLowerCase();
  }
} }), Yp = Z({ "../../node_modules/property-information/lib/xml.js"(e, t) {
  var r = Pr();
  t.exports = r({ space: "xml", transform: n, properties: { xmlLang: null, xmlBase: null, xmlSpace: null } });
  function n(a, l) {
    return "xml:" + l.slice(3).toLowerCase();
  }
} }), Kp = Z({ "../../node_modules/property-information/lib/util/case-sensitive-transform.js"(e, t) {
  t.exports = r;
  function r(n, a) {
    return a in n ? n[a] : a;
  }
} }), au = Z({ "../../node_modules/property-information/lib/util/case-insensitive-transform.js"(e, t) {
  var r = Kp();
  t.exports = n;
  function n(a, l) {
    return r(a, l.toLowerCase());
  }
} }), Xp = Z({ "../../node_modules/property-information/lib/xmlns.js"(e, t) {
  var r = Pr(), n = au();
  t.exports = r({ space: "xmlns", attributes: { xmlnsxlink: "xmlns:xlink" }, transform: n, properties: { xmlns: null, xmlnsXLink: null } });
} }), Jp = Z({ "../../node_modules/property-information/lib/aria.js"(e, t) {
  var r = Fo(), n = Pr(), a = r.booleanish, l = r.number, i = r.spaceSeparated;
  t.exports = n({ transform: u, properties: { ariaActiveDescendant: null, ariaAtomic: a, ariaAutoComplete: null, ariaBusy: a, ariaChecked: a, ariaColCount: l, ariaColIndex: l, ariaColSpan: l, ariaControls: i, ariaCurrent: null, ariaDescribedBy: i, ariaDetails: null, ariaDisabled: a, ariaDropEffect: i, ariaErrorMessage: null, ariaExpanded: a, ariaFlowTo: i, ariaGrabbed: a, ariaHasPopup: null, ariaHidden: a, ariaInvalid: null, ariaKeyShortcuts: null, ariaLabel: null, ariaLabelledBy: i, ariaLevel: l, ariaLive: null, ariaModal: a, ariaMultiLine: a, ariaMultiSelectable: a, ariaOrientation: null, ariaOwns: i, ariaPlaceholder: null, ariaPosInSet: l, ariaPressed: a, ariaReadOnly: a, ariaRelevant: null, ariaRequired: a, ariaRoleDescription: i, ariaRowCount: l, ariaRowIndex: l, ariaRowSpan: l, ariaSelected: a, ariaSetSize: l, ariaSort: null, ariaValueMax: l, ariaValueMin: l, ariaValueNow: l, ariaValueText: null, role: null } });
  function u(s, c) {
    return c === "role" ? c : "aria-" + c.slice(4).toLowerCase();
  }
} }), Qp = Z({ "../../node_modules/property-information/lib/html.js"(e, t) {
  var r = Fo(), n = Pr(), a = au(), l = r.boolean, i = r.overloadedBoolean, u = r.booleanish, s = r.number, c = r.spaceSeparated, d = r.commaSeparated;
  t.exports = n({ space: "html", attributes: { acceptcharset: "accept-charset", classname: "class", htmlfor: "for", httpequiv: "http-equiv" }, transform: a, mustUseProperty: ["checked", "multiple", "muted", "selected"], properties: { abbr: null, accept: d, acceptCharset: c, accessKey: c, action: null, allow: null, allowFullScreen: l, allowPaymentRequest: l, allowUserMedia: l, alt: null, as: null, async: l, autoCapitalize: null, autoComplete: c, autoFocus: l, autoPlay: l, capture: l, charSet: null, checked: l, cite: null, className: c, cols: s, colSpan: null, content: null, contentEditable: u, controls: l, controlsList: c, coords: s | d, crossOrigin: null, data: null, dateTime: null, decoding: null, default: l, defer: l, dir: null, dirName: null, disabled: l, download: i, draggable: u, encType: null, enterKeyHint: null, form: null, formAction: null, formEncType: null, formMethod: null, formNoValidate: l, formTarget: null, headers: c, height: s, hidden: l, high: s, href: null, hrefLang: null, htmlFor: c, httpEquiv: c, id: null, imageSizes: null, imageSrcSet: d, inputMode: null, integrity: null, is: null, isMap: l, itemId: null, itemProp: c, itemRef: c, itemScope: l, itemType: c, kind: null, label: null, lang: null, language: null, list: null, loading: null, loop: l, low: s, manifest: null, max: null, maxLength: s, media: null, method: null, min: null, minLength: s, multiple: l, muted: l, name: null, nonce: null, noModule: l, noValidate: l, onAbort: null, onAfterPrint: null, onAuxClick: null, onBeforePrint: null, onBeforeUnload: null, onBlur: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onContextMenu: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnded: null, onError: null, onFocus: null, onFormData: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLanguageChange: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadEnd: null, onLoadStart: null, onMessage: null, onMessageError: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRejectionHandled: null, onReset: null, onResize: null, onScroll: null, onSecurityPolicyViolation: null, onSeeked: null, onSeeking: null, onSelect: null, onSlotChange: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnhandledRejection: null, onUnload: null, onVolumeChange: null, onWaiting: null, onWheel: null, open: l, optimum: s, pattern: null, ping: c, placeholder: null, playsInline: l, poster: null, preload: null, readOnly: l, referrerPolicy: null, rel: c, required: l, reversed: l, rows: s, rowSpan: s, sandbox: c, scope: null, scoped: l, seamless: l, selected: l, shape: null, size: s, sizes: null, slot: null, span: s, spellCheck: u, src: null, srcDoc: null, srcLang: null, srcSet: d, start: s, step: null, style: null, tabIndex: s, target: null, title: null, translate: null, type: null, typeMustMatch: l, useMap: null, value: u, width: s, wrap: null, align: null, aLink: null, archive: c, axis: null, background: null, bgColor: null, border: s, borderColor: null, bottomMargin: s, cellPadding: null, cellSpacing: null, char: null, charOff: null, classId: null, clear: null, code: null, codeBase: null, codeType: null, color: null, compact: l, declare: l, event: null, face: null, frame: null, frameBorder: null, hSpace: s, leftMargin: s, link: null, longDesc: null, lowSrc: null, marginHeight: s, marginWidth: s, noResize: l, noHref: l, noShade: l, noWrap: l, object: null, profile: null, prompt: null, rev: null, rightMargin: s, rules: null, scheme: null, scrolling: u, standby: null, summary: null, text: null, topMargin: s, valueType: null, version: null, vAlign: null, vLink: null, vSpace: s, allowTransparency: null, autoCorrect: null, autoSave: null, disablePictureInPicture: l, disableRemotePlayback: l, prefix: null, property: null, results: s, security: null, unselectable: null } });
} }), e5 = Z({ "../../node_modules/property-information/html.js"(e, t) {
  var r = Wp(), n = Gp(), a = Yp(), l = Xp(), i = Jp(), u = Qp();
  t.exports = r([a, n, l, i, u]);
} }), t5 = Z({ "../../node_modules/property-information/find.js"(e, t) {
  var r = Ro(), n = nu(), a = ru(), l = "data";
  t.exports = c;
  var i = /^data[-\w.:]+$/i, u = /-[a-z]/g, s = /[A-Z]/g;
  function c(h, g) {
    var x = r(g), y = g, w = a;
    return x in h.normal ? h.property[h.normal[x]] : (x.length > 4 && x.slice(0, 4) === l && i.test(g) && (g.charAt(4) === "-" ? y = d(g) : g = m(g), w = n), new w(y, g));
  }
  function d(h) {
    var g = h.slice(5).replace(u, p);
    return l + g.charAt(0).toUpperCase() + g.slice(1);
  }
  function m(h) {
    var g = h.slice(4);
    return u.test(g) ? h : (g = g.replace(s, f), g.charAt(0) !== "-" && (g = "-" + g), l + g);
  }
  function f(h) {
    return "-" + h.toLowerCase();
  }
  function p(h) {
    return h.charAt(1).toUpperCase();
  }
} }), r5 = Z({ "../../node_modules/hast-util-parse-selector/index.js"(e, t) {
  t.exports = n;
  var r = /[#.]/g;
  function n(a, l) {
    for (var i = a || "", u = l || "div", s = {}, c = 0, d, m, f; c < i.length; )
      r.lastIndex = c, f = r.exec(i), d = i.slice(c, f ? f.index : i.length), d && (m ? m === "#" ? s.id = d : s.className ? s.className.push(d) : s.className = [d] : u = d, c += d.length), f && (m = f[0], c++);
    return { type: "element", tagName: u, properties: s, children: [] };
  }
} }), n5 = Z({ "../../node_modules/space-separated-tokens/index.js"(e) {
  e.parse = a, e.stringify = l;
  var t = "", r = " ", n = /[ \t\n\r\f]+/g;
  function a(i) {
    var u = String(i || t).trim();
    return u === t ? [] : u.split(n);
  }
  function l(i) {
    return i.join(r).trim();
  }
} }), a5 = Z({ "../../node_modules/comma-separated-tokens/index.js"(e) {
  e.parse = a, e.stringify = l;
  var t = ",", r = " ", n = "";
  function a(i) {
    for (var u = [], s = String(i || n), c = s.indexOf(t), d = 0, m = !1, f; !m; )
      c === -1 && (c = s.length, m = !0), f = s.slice(d, c).trim(), (f || !m) && u.push(f), d = c + 1, c = s.indexOf(t, d);
    return u;
  }
  function l(i, u) {
    var s = u || {}, c = s.padLeft === !1 ? n : r, d = s.padRight ? r : n;
    return i[i.length - 1] === n && (i = i.concat(n)), i.join(d + t + c).trim();
  }
} }), o5 = Z({ "../../node_modules/hastscript/factory.js"(e, t) {
  var r = t5(), n = Ro(), a = r5(), l = n5().parse, i = a5().parse;
  t.exports = s;
  var u = {}.hasOwnProperty;
  function s(x, y, w) {
    var v = w ? g(w) : null;
    return E;
    function E(S, k) {
      var C = a(S, y), T = Array.prototype.slice.call(arguments, 2), O = C.tagName.toLowerCase(), R;
      if (C.tagName = v && u.call(v, O) ? v[O] : O, k && c(k, C) && (T.unshift(k), k = null), k)
        for (R in k)
          A(C.properties, R, k[R]);
      return m(C.children, T), C.tagName === "template" && (C.content = { type: "root", children: C.children }, C.children = []), C;
    }
    function A(S, k, C) {
      var T, O, R;
      C == null || C !== C || (T = r(x, k), O = T.property, R = C, typeof R == "string" && (T.spaceSeparated ? R = l(R) : T.commaSeparated ? R = i(R) : T.commaOrSpaceSeparated && (R = l(i(R).join(" ")))), O === "style" && typeof C != "string" && (R = h(R)), O === "className" && S.className && (R = S.className.concat(R)), S[O] = f(T, O, R));
    }
  }
  function c(x, y) {
    return typeof x == "string" || "length" in x || d(y.tagName, x);
  }
  function d(x, y) {
    var w = y.type;
    return x === "input" || !w || typeof w != "string" ? !1 : typeof y.children == "object" && "length" in y.children ? !0 : (w = w.toLowerCase(), x === "button" ? w !== "menu" && w !== "submit" && w !== "reset" && w !== "button" : "value" in y);
  }
  function m(x, y) {
    var w, v;
    if (typeof y == "string" || typeof y == "number") {
      x.push({ type: "text", value: String(y) });
      return;
    }
    if (typeof y == "object" && "length" in y) {
      for (w = -1, v = y.length; ++w < v; )
        m(x, y[w]);
      return;
    }
    if (typeof y != "object" || !("type" in y))
      throw new Error("Expected node, nodes, or string, got `" + y + "`");
    x.push(y);
  }
  function f(x, y, w) {
    var v, E, A;
    if (typeof w != "object" || !("length" in w))
      return p(x, y, w);
    for (E = w.length, v = -1, A = []; ++v < E; )
      A[v] = p(x, y, w[v]);
    return A;
  }
  function p(x, y, w) {
    var v = w;
    return x.number || x.positiveNumber ? !isNaN(v) && v !== "" && (v = Number(v)) : (x.boolean || x.overloadedBoolean) && typeof v == "string" && (v === "" || n(w) === n(y)) && (v = !0), v;
  }
  function h(x) {
    var y = [], w;
    for (w in x)
      y.push([w, x[w]].join(": "));
    return y.join("; ");
  }
  function g(x) {
    for (var y = x.length, w = -1, v = {}, E; ++w < y; )
      E = x[w], v[E.toLowerCase()] = E;
    return v;
  }
} }), l5 = Z({ "../../node_modules/hastscript/html.js"(e, t) {
  var r = e5(), n = o5(), a = n(r, "div");
  a.displayName = "html", t.exports = a;
} }), i5 = Z({ "../../node_modules/hastscript/index.js"(e, t) {
  t.exports = l5();
} }), s5 = Z({ "../../node_modules/parse-entities/node_modules/character-entities-legacy/index.json"(e, t) {
  t.exports = { AElig: "Æ", AMP: "&", Aacute: "Á", Acirc: "Â", Agrave: "À", Aring: "Å", Atilde: "Ã", Auml: "Ä", COPY: "©", Ccedil: "Ç", ETH: "Ð", Eacute: "É", Ecirc: "Ê", Egrave: "È", Euml: "Ë", GT: ">", Iacute: "Í", Icirc: "Î", Igrave: "Ì", Iuml: "Ï", LT: "<", Ntilde: "Ñ", Oacute: "Ó", Ocirc: "Ô", Ograve: "Ò", Oslash: "Ø", Otilde: "Õ", Ouml: "Ö", QUOT: '"', REG: "®", THORN: "Þ", Uacute: "Ú", Ucirc: "Û", Ugrave: "Ù", Uuml: "Ü", Yacute: "Ý", aacute: "á", acirc: "â", acute: "´", aelig: "æ", agrave: "à", amp: "&", aring: "å", atilde: "ã", auml: "ä", brvbar: "¦", ccedil: "ç", cedil: "¸", cent: "¢", copy: "©", curren: "¤", deg: "°", divide: "÷", eacute: "é", ecirc: "ê", egrave: "è", eth: "ð", euml: "ë", frac12: "½", frac14: "¼", frac34: "¾", gt: ">", iacute: "í", icirc: "î", iexcl: "¡", igrave: "ì", iquest: "¿", iuml: "ï", laquo: "«", lt: "<", macr: "¯", micro: "µ", middot: "·", nbsp: " ", not: "¬", ntilde: "ñ", oacute: "ó", ocirc: "ô", ograve: "ò", ordf: "ª", ordm: "º", oslash: "ø", otilde: "õ", ouml: "ö", para: "¶", plusmn: "±", pound: "£", quot: '"', raquo: "»", reg: "®", sect: "§", shy: "­", sup1: "¹", sup2: "²", sup3: "³", szlig: "ß", thorn: "þ", times: "×", uacute: "ú", ucirc: "û", ugrave: "ù", uml: "¨", uuml: "ü", yacute: "ý", yen: "¥", yuml: "ÿ" };
} }), u5 = Z({ "../../node_modules/character-reference-invalid/index.json"(e, t) {
  t.exports = { 0: "�", 128: "€", 130: "‚", 131: "ƒ", 132: "„", 133: "…", 134: "†", 135: "‡", 136: "ˆ", 137: "‰", 138: "Š", 139: "‹", 140: "Œ", 142: "Ž", 145: "‘", 146: "’", 147: "“", 148: "”", 149: "•", 150: "–", 151: "—", 152: "˜", 153: "™", 154: "š", 155: "›", 156: "œ", 158: "ž", 159: "Ÿ" };
} }), ou = Z({ "../../node_modules/is-decimal/index.js"(e, t) {
  t.exports = r;
  function r(n) {
    var a = typeof n == "string" ? n.charCodeAt(0) : n;
    return a >= 48 && a <= 57;
  }
} }), c5 = Z({ "../../node_modules/is-hexadecimal/index.js"(e, t) {
  t.exports = r;
  function r(n) {
    var a = typeof n == "string" ? n.charCodeAt(0) : n;
    return a >= 97 && a <= 102 || a >= 65 && a <= 70 || a >= 48 && a <= 57;
  }
} }), d5 = Z({ "../../node_modules/is-alphabetical/index.js"(e, t) {
  t.exports = r;
  function r(n) {
    var a = typeof n == "string" ? n.charCodeAt(0) : n;
    return a >= 97 && a <= 122 || a >= 65 && a <= 90;
  }
} }), p5 = Z({ "../../node_modules/is-alphanumerical/index.js"(e, t) {
  var r = d5(), n = ou();
  t.exports = a;
  function a(l) {
    return r(l) || n(l);
  }
} }), f5 = Z({ "../../node_modules/parse-entities/node_modules/character-entities/index.json"(e, t) {
  t.exports = { AEli: "Æ", AElig: "Æ", AM: "&", AMP: "&", Aacut: "Á", Aacute: "Á", Abreve: "Ă", Acir: "Â", Acirc: "Â", Acy: "А", Afr: "𝔄", Agrav: "À", Agrave: "À", Alpha: "Α", Amacr: "Ā", And: "⩓", Aogon: "Ą", Aopf: "𝔸", ApplyFunction: "⁡", Arin: "Å", Aring: "Å", Ascr: "𝒜", Assign: "≔", Atild: "Ã", Atilde: "Ã", Aum: "Ä", Auml: "Ä", Backslash: "∖", Barv: "⫧", Barwed: "⌆", Bcy: "Б", Because: "∵", Bernoullis: "ℬ", Beta: "Β", Bfr: "𝔅", Bopf: "𝔹", Breve: "˘", Bscr: "ℬ", Bumpeq: "≎", CHcy: "Ч", COP: "©", COPY: "©", Cacute: "Ć", Cap: "⋒", CapitalDifferentialD: "ⅅ", Cayleys: "ℭ", Ccaron: "Č", Ccedi: "Ç", Ccedil: "Ç", Ccirc: "Ĉ", Cconint: "∰", Cdot: "Ċ", Cedilla: "¸", CenterDot: "·", Cfr: "ℭ", Chi: "Χ", CircleDot: "⊙", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", Colon: "∷", Colone: "⩴", Congruent: "≡", Conint: "∯", ContourIntegral: "∮", Copf: "ℂ", Coproduct: "∐", CounterClockwiseContourIntegral: "∳", Cross: "⨯", Cscr: "𝒞", Cup: "⋓", CupCap: "≍", DD: "ⅅ", DDotrahd: "⤑", DJcy: "Ђ", DScy: "Ѕ", DZcy: "Џ", Dagger: "‡", Darr: "↡", Dashv: "⫤", Dcaron: "Ď", Dcy: "Д", Del: "∇", Delta: "Δ", Dfr: "𝔇", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", Diamond: "⋄", DifferentialD: "ⅆ", Dopf: "𝔻", Dot: "¨", DotDot: "⃜", DotEqual: "≐", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", DownBreve: "̑", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", DownTeeArrow: "↧", Downarrow: "⇓", Dscr: "𝒟", Dstrok: "Đ", ENG: "Ŋ", ET: "Ð", ETH: "Ð", Eacut: "É", Eacute: "É", Ecaron: "Ě", Ecir: "Ê", Ecirc: "Ê", Ecy: "Э", Edot: "Ė", Efr: "𝔈", Egrav: "È", Egrave: "È", Element: "∈", Emacr: "Ē", EmptySmallSquare: "◻", EmptyVerySmallSquare: "▫", Eogon: "Ę", Eopf: "𝔼", Epsilon: "Ε", Equal: "⩵", EqualTilde: "≂", Equilibrium: "⇌", Escr: "ℰ", Esim: "⩳", Eta: "Η", Eum: "Ë", Euml: "Ë", Exists: "∃", ExponentialE: "ⅇ", Fcy: "Ф", Ffr: "𝔉", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", Fopf: "𝔽", ForAll: "∀", Fouriertrf: "ℱ", Fscr: "ℱ", GJcy: "Ѓ", G: ">", GT: ">", Gamma: "Γ", Gammad: "Ϝ", Gbreve: "Ğ", Gcedil: "Ģ", Gcirc: "Ĝ", Gcy: "Г", Gdot: "Ġ", Gfr: "𝔊", Gg: "⋙", Gopf: "𝔾", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", Gt: "≫", HARDcy: "Ъ", Hacek: "ˇ", Hat: "^", Hcirc: "Ĥ", Hfr: "ℌ", HilbertSpace: "ℋ", Hopf: "ℍ", HorizontalLine: "─", Hscr: "ℋ", Hstrok: "Ħ", HumpDownHump: "≎", HumpEqual: "≏", IEcy: "Е", IJlig: "Ĳ", IOcy: "Ё", Iacut: "Í", Iacute: "Í", Icir: "Î", Icirc: "Î", Icy: "И", Idot: "İ", Ifr: "ℑ", Igrav: "Ì", Igrave: "Ì", Im: "ℑ", Imacr: "Ī", ImaginaryI: "ⅈ", Implies: "⇒", Int: "∬", Integral: "∫", Intersection: "⋂", InvisibleComma: "⁣", InvisibleTimes: "⁢", Iogon: "Į", Iopf: "𝕀", Iota: "Ι", Iscr: "ℐ", Itilde: "Ĩ", Iukcy: "І", Ium: "Ï", Iuml: "Ï", Jcirc: "Ĵ", Jcy: "Й", Jfr: "𝔍", Jopf: "𝕁", Jscr: "𝒥", Jsercy: "Ј", Jukcy: "Є", KHcy: "Х", KJcy: "Ќ", Kappa: "Κ", Kcedil: "Ķ", Kcy: "К", Kfr: "𝔎", Kopf: "𝕂", Kscr: "𝒦", LJcy: "Љ", L: "<", LT: "<", Lacute: "Ĺ", Lambda: "Λ", Lang: "⟪", Laplacetrf: "ℒ", Larr: "↞", Lcaron: "Ľ", Lcedil: "Ļ", Lcy: "Л", LeftAngleBracket: "⟨", LeftArrow: "←", LeftArrowBar: "⇤", LeftArrowRightArrow: "⇆", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", LeftRightArrow: "↔", LeftRightVector: "⥎", LeftTee: "⊣", LeftTeeArrow: "↤", LeftTeeVector: "⥚", LeftTriangle: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", LeftVectorBar: "⥒", Leftarrow: "⇐", Leftrightarrow: "⇔", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", LessLess: "⪡", LessSlantEqual: "⩽", LessTilde: "≲", Lfr: "𝔏", Ll: "⋘", Lleftarrow: "⇚", Lmidot: "Ŀ", LongLeftArrow: "⟵", LongLeftRightArrow: "⟷", LongRightArrow: "⟶", Longleftarrow: "⟸", Longleftrightarrow: "⟺", Longrightarrow: "⟹", Lopf: "𝕃", LowerLeftArrow: "↙", LowerRightArrow: "↘", Lscr: "ℒ", Lsh: "↰", Lstrok: "Ł", Lt: "≪", Map: "⤅", Mcy: "М", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", MinusPlus: "∓", Mopf: "𝕄", Mscr: "ℳ", Mu: "Μ", NJcy: "Њ", Nacute: "Ń", Ncaron: "Ň", Ncedil: "Ņ", Ncy: "Н", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: `
`, Nfr: "𝔑", NoBreak: "⁠", NonBreakingSpace: " ", Nopf: "ℕ", Not: "⫬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", NotLeftTriangle: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangle: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", Nscr: "𝒩", Ntild: "Ñ", Ntilde: "Ñ", Nu: "Ν", OElig: "Œ", Oacut: "Ó", Oacute: "Ó", Ocir: "Ô", Ocirc: "Ô", Ocy: "О", Odblac: "Ő", Ofr: "𝔒", Ograv: "Ò", Ograve: "Ò", Omacr: "Ō", Omega: "Ω", Omicron: "Ο", Oopf: "𝕆", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", Or: "⩔", Oscr: "𝒪", Oslas: "Ø", Oslash: "Ø", Otild: "Õ", Otilde: "Õ", Otimes: "⨷", Oum: "Ö", Ouml: "Ö", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", PartialD: "∂", Pcy: "П", Pfr: "𝔓", Phi: "Φ", Pi: "Π", PlusMinus: "±", Poincareplane: "ℌ", Popf: "ℙ", Pr: "⪻", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", Prime: "″", Product: "∏", Proportion: "∷", Proportional: "∝", Pscr: "𝒫", Psi: "Ψ", QUO: '"', QUOT: '"', Qfr: "𝔔", Qopf: "ℚ", Qscr: "𝒬", RBarr: "⤐", RE: "®", REG: "®", Racute: "Ŕ", Rang: "⟫", Rarr: "↠", Rarrtl: "⤖", Rcaron: "Ř", Rcedil: "Ŗ", Rcy: "Р", Re: "ℜ", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", Rfr: "ℜ", Rho: "Ρ", RightAngleBracket: "⟩", RightArrow: "→", RightArrowBar: "⇥", RightArrowLeftArrow: "⇄", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", RightTee: "⊢", RightTeeArrow: "↦", RightTeeVector: "⥛", RightTriangle: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", RightVectorBar: "⥓", Rightarrow: "⇒", Ropf: "ℝ", RoundImplies: "⥰", Rrightarrow: "⇛", Rscr: "ℛ", Rsh: "↱", RuleDelayed: "⧴", SHCHcy: "Щ", SHcy: "Ш", SOFTcy: "Ь", Sacute: "Ś", Sc: "⪼", Scaron: "Š", Scedil: "Ş", Scirc: "Ŝ", Scy: "С", Sfr: "𝔖", ShortDownArrow: "↓", ShortLeftArrow: "←", ShortRightArrow: "→", ShortUpArrow: "↑", Sigma: "Σ", SmallCircle: "∘", Sopf: "𝕊", Sqrt: "√", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", Sscr: "𝒮", Star: "⋆", Sub: "⋐", Subset: "⋐", SubsetEqual: "⊆", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", SuchThat: "∋", Sum: "∑", Sup: "⋑", Superset: "⊃", SupersetEqual: "⊇", Supset: "⋑", THOR: "Þ", THORN: "Þ", TRADE: "™", TSHcy: "Ћ", TScy: "Ц", Tab: "	", Tau: "Τ", Tcaron: "Ť", Tcedil: "Ţ", Tcy: "Т", Tfr: "𝔗", Therefore: "∴", Theta: "Θ", ThickSpace: "  ", ThinSpace: " ", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", Topf: "𝕋", TripleDot: "⃛", Tscr: "𝒯", Tstrok: "Ŧ", Uacut: "Ú", Uacute: "Ú", Uarr: "↟", Uarrocir: "⥉", Ubrcy: "Ў", Ubreve: "Ŭ", Ucir: "Û", Ucirc: "Û", Ucy: "У", Udblac: "Ű", Ufr: "𝔘", Ugrav: "Ù", Ugrave: "Ù", Umacr: "Ū", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", Uopf: "𝕌", UpArrow: "↑", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", UpDownArrow: "↕", UpEquilibrium: "⥮", UpTee: "⊥", UpTeeArrow: "↥", Uparrow: "⇑", Updownarrow: "⇕", UpperLeftArrow: "↖", UpperRightArrow: "↗", Upsi: "ϒ", Upsilon: "Υ", Uring: "Ů", Uscr: "𝒰", Utilde: "Ũ", Uum: "Ü", Uuml: "Ü", VDash: "⊫", Vbar: "⫫", Vcy: "В", Vdash: "⊩", Vdashl: "⫦", Vee: "⋁", Verbar: "‖", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", Vopf: "𝕍", Vscr: "𝒱", Vvdash: "⊪", Wcirc: "Ŵ", Wedge: "⋀", Wfr: "𝔚", Wopf: "𝕎", Wscr: "𝒲", Xfr: "𝔛", Xi: "Ξ", Xopf: "𝕏", Xscr: "𝒳", YAcy: "Я", YIcy: "Ї", YUcy: "Ю", Yacut: "Ý", Yacute: "Ý", Ycirc: "Ŷ", Ycy: "Ы", Yfr: "𝔜", Yopf: "𝕐", Yscr: "𝒴", Yuml: "Ÿ", ZHcy: "Ж", Zacute: "Ź", Zcaron: "Ž", Zcy: "З", Zdot: "Ż", ZeroWidthSpace: "​", Zeta: "Ζ", Zfr: "ℨ", Zopf: "ℤ", Zscr: "𝒵", aacut: "á", aacute: "á", abreve: "ă", ac: "∾", acE: "∾̳", acd: "∿", acir: "â", acirc: "â", acut: "´", acute: "´", acy: "а", aeli: "æ", aelig: "æ", af: "⁡", afr: "𝔞", agrav: "à", agrave: "à", alefsym: "ℵ", aleph: "ℵ", alpha: "α", amacr: "ā", amalg: "⨿", am: "&", amp: "&", and: "∧", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsd: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", aogon: "ą", aopf: "𝕒", ap: "≈", apE: "⩰", apacir: "⩯", ape: "≊", apid: "≋", apos: "'", approx: "≈", approxeq: "≊", arin: "å", aring: "å", ascr: "𝒶", ast: "*", asymp: "≈", asympeq: "≍", atild: "ã", atilde: "ã", aum: "ä", auml: "ä", awconint: "∳", awint: "⨑", bNot: "⫭", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", barvee: "⊽", barwed: "⌅", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", bcy: "б", bdquo: "„", becaus: "∵", because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", beta: "β", beth: "ℶ", between: "≬", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bnot: "⌐", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxDL: "╗", boxDR: "╔", boxDl: "╖", boxDr: "╓", boxH: "═", boxHD: "╦", boxHU: "╩", boxHd: "╤", boxHu: "╧", boxUL: "╝", boxUR: "╚", boxUl: "╜", boxUr: "╙", boxV: "║", boxVH: "╬", boxVL: "╣", boxVR: "╠", boxVh: "╫", boxVl: "╢", boxVr: "╟", boxbox: "⧉", boxdL: "╕", boxdR: "╒", boxdl: "┐", boxdr: "┌", boxh: "─", boxhD: "╥", boxhU: "╨", boxhd: "┬", boxhu: "┴", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxuL: "╛", boxuR: "╘", boxul: "┘", boxur: "└", boxv: "│", boxvH: "╪", boxvL: "╡", boxvR: "╞", boxvh: "┼", boxvl: "┤", boxvr: "├", bprime: "‵", breve: "˘", brvba: "¦", brvbar: "¦", bscr: "𝒷", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", bumpeq: "≏", cacute: "ć", cap: "∩", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", caps: "∩︀", caret: "⁁", caron: "ˇ", ccaps: "⩍", ccaron: "č", ccedi: "ç", ccedil: "ç", ccirc: "ĉ", ccups: "⩌", ccupssm: "⩐", cdot: "ċ", cedi: "¸", cedil: "¸", cemptyv: "⦲", cen: "¢", cent: "¢", centerdot: "·", cfr: "𝔠", chcy: "ч", check: "✓", checkmark: "✓", chi: "χ", cir: "○", cirE: "⧃", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledR: "®", circledS: "Ⓢ", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", clubs: "♣", clubsuit: "♣", colon: ":", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", conint: "∮", copf: "𝕔", coprod: "∐", cop: "©", copy: "©", copysr: "℗", crarr: "↵", cross: "✗", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cup: "∪", cupbrcap: "⩈", cupcap: "⩆", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curre: "¤", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dArr: "⇓", dHar: "⥥", dagger: "†", daleth: "ℸ", darr: "↓", dash: "‐", dashv: "⊣", dbkarow: "⤏", dblac: "˝", dcaron: "ď", dcy: "д", dd: "ⅆ", ddagger: "‡", ddarr: "⇊", ddotseq: "⩷", de: "°", deg: "°", delta: "δ", demptyv: "⦱", dfisht: "⥿", dfr: "𝔡", dharl: "⇃", dharr: "⇂", diam: "⋄", diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", digamma: "ϝ", disin: "⋲", div: "÷", divid: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", dopf: "𝕕", dot: "˙", doteq: "≐", doteqdot: "≑", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", downarrow: "↓", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", dscr: "𝒹", dscy: "ѕ", dsol: "⧶", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", dzcy: "џ", dzigrarr: "⟿", eDDot: "⩷", eDot: "≑", eacut: "é", eacute: "é", easter: "⩮", ecaron: "ě", ecir: "ê", ecirc: "ê", ecolon: "≕", ecy: "э", edot: "ė", ee: "ⅇ", efDot: "≒", efr: "𝔢", eg: "⪚", egrav: "è", egrave: "è", egs: "⪖", egsdot: "⪘", el: "⪙", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", emacr: "ē", empty: "∅", emptyset: "∅", emptyv: "∅", emsp13: " ", emsp14: " ", emsp: " ", eng: "ŋ", ensp: " ", eogon: "ę", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", equals: "=", equest: "≟", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erDot: "≓", erarr: "⥱", escr: "ℯ", esdot: "≐", esim: "≂", eta: "η", et: "ð", eth: "ð", eum: "ë", euml: "ë", euro: "€", excl: "!", exist: "∃", expectation: "ℰ", exponentiale: "ⅇ", fallingdotseq: "≒", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", ffr: "𝔣", filig: "ﬁ", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", fopf: "𝕗", forall: "∀", fork: "⋔", forkv: "⫙", fpartint: "⨍", frac1: "¼", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac3: "¾", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", gE: "≧", gEl: "⪌", gacute: "ǵ", gamma: "γ", gammad: "ϝ", gap: "⪆", gbreve: "ğ", gcirc: "ĝ", gcy: "г", gdot: "ġ", ge: "≥", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", ges: "⩾", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", gfr: "𝔤", gg: "≫", ggg: "⋙", gimel: "ℷ", gjcy: "ѓ", gl: "≷", glE: "⪒", gla: "⪥", glj: "⪤", gnE: "≩", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gneq: "⪈", gneqq: "≩", gnsim: "⋧", gopf: "𝕘", grave: "`", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", g: ">", gt: ">", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", hArr: "⇔", hairsp: " ", half: "½", hamilt: "ℋ", hardcy: "ъ", harr: "↔", harrcir: "⥈", harrw: "↭", hbar: "ℏ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", horbar: "―", hscr: "𝒽", hslash: "ℏ", hstrok: "ħ", hybull: "⁃", hyphen: "‐", iacut: "í", iacute: "í", ic: "⁣", icir: "î", icirc: "î", icy: "и", iecy: "е", iexc: "¡", iexcl: "¡", iff: "⇔", ifr: "𝔦", igrav: "ì", igrave: "ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", ijlig: "ĳ", imacr: "ī", image: "ℑ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", imof: "⊷", imped: "Ƶ", in: "∈", incare: "℅", infin: "∞", infintie: "⧝", inodot: "ı", int: "∫", intcal: "⊺", integers: "ℤ", intercal: "⊺", intlarhk: "⨗", intprod: "⨼", iocy: "ё", iogon: "į", iopf: "𝕚", iota: "ι", iprod: "⨼", iques: "¿", iquest: "¿", iscr: "𝒾", isin: "∈", isinE: "⋹", isindot: "⋵", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", itilde: "ĩ", iukcy: "і", ium: "ï", iuml: "ï", jcirc: "ĵ", jcy: "й", jfr: "𝔧", jmath: "ȷ", jopf: "𝕛", jscr: "𝒿", jsercy: "ј", jukcy: "є", kappa: "κ", kappav: "ϰ", kcedil: "ķ", kcy: "к", kfr: "𝔨", kgreen: "ĸ", khcy: "х", kjcy: "ќ", kopf: "𝕜", kscr: "𝓀", lAarr: "⇚", lArr: "⇐", lAtail: "⤛", lBarr: "⤎", lE: "≦", lEg: "⪋", lHar: "⥢", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", lambda: "λ", lang: "⟨", langd: "⦑", langle: "⟨", lap: "⪅", laqu: "«", laquo: "«", larr: "←", larrb: "⇤", larrbfs: "⤟", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", lat: "⪫", latail: "⤙", late: "⪭", lates: "⪭︀", lbarr: "⤌", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", lcaron: "ľ", lcedil: "ļ", lceil: "⌈", lcub: "{", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", leftarrow: "←", leftarrowtail: "↢", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", leftthreetimes: "⋋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", les: "⩽", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", lessgtr: "≶", lesssim: "≲", lfisht: "⥼", lfloor: "⌊", lfr: "𝔩", lg: "≶", lgE: "⪑", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", ljcy: "љ", ll: "≪", llarr: "⇇", llcorner: "⌞", llhard: "⥫", lltri: "◺", lmidot: "ŀ", lmoust: "⎰", lmoustache: "⎰", lnE: "≨", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", longleftrightarrow: "⟷", longmapsto: "⟼", longrightarrow: "⟶", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", lstrok: "ł", l: "<", lt: "<", ltcc: "⪦", ltcir: "⩹", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltrPar: "⦖", ltri: "◃", ltrie: "⊴", ltrif: "◂", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", mDDot: "∺", mac: "¯", macr: "¯", male: "♂", malt: "✠", maltese: "✠", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", mcy: "м", mdash: "—", measuredangle: "∡", mfr: "𝔪", mho: "℧", micr: "µ", micro: "µ", mid: "∣", midast: "*", midcir: "⫰", middo: "·", middot: "·", minus: "−", minusb: "⊟", minusd: "∸", minusdu: "⨪", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", mopf: "𝕞", mp: "∓", mscr: "𝓂", mstpos: "∾", mu: "μ", multimap: "⊸", mumap: "⊸", nGg: "⋙̸", nGt: "≫⃒", nGtv: "≫̸", nLeftarrow: "⇍", nLeftrightarrow: "⇎", nLl: "⋘̸", nLt: "≪⃒", nLtv: "≪̸", nRightarrow: "⇏", nVDash: "⊯", nVdash: "⊮", nabla: "∇", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natur: "♮", natural: "♮", naturals: "ℕ", nbs: " ", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", ncaron: "ň", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", ncy: "н", ndash: "–", ne: "≠", neArr: "⇗", nearhk: "⤤", nearr: "↗", nearrow: "↗", nedot: "≐̸", nequiv: "≢", nesear: "⤨", nesim: "≂̸", nexist: "∄", nexists: "∄", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", ngsim: "≵", ngt: "≯", ngtr: "≯", nhArr: "⇎", nharr: "↮", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", njcy: "њ", nlArr: "⇍", nlE: "≦̸", nlarr: "↚", nldr: "‥", nle: "≰", nleftarrow: "↚", nleftrightarrow: "↮", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nlsim: "≴", nlt: "≮", nltri: "⋪", nltrie: "⋬", nmid: "∤", nopf: "𝕟", no: "¬", not: "¬", notin: "∉", notinE: "⋹̸", notindot: "⋵̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", npar: "∦", nparallel: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", npre: "⪯̸", nprec: "⊀", npreceq: "⪯̸", nrArr: "⇏", nrarr: "↛", nrarrc: "⤳̸", nrarrw: "↝̸", nrightarrow: "↛", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", ntild: "ñ", ntilde: "ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", nu: "ν", num: "#", numero: "№", numsp: " ", nvDash: "⊭", nvHarr: "⤄", nvap: "≍⃒", nvdash: "⊬", nvge: "≥⃒", nvgt: ">⃒", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwArr: "⇖", nwarhk: "⤣", nwarr: "↖", nwarrow: "↖", nwnear: "⤧", oS: "Ⓢ", oacut: "ó", oacute: "ó", oast: "⊛", ocir: "ô", ocirc: "ô", ocy: "о", odash: "⊝", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", oelig: "œ", ofcir: "⦿", ofr: "𝔬", ogon: "˛", ograv: "ò", ograve: "ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", omacr: "ō", omega: "ω", omicron: "ο", omid: "⦶", ominus: "⊖", oopf: "𝕠", opar: "⦷", operp: "⦹", oplus: "⊕", or: "∨", orarr: "↻", ord: "º", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oscr: "ℴ", oslas: "ø", oslash: "ø", osol: "⊘", otild: "õ", otilde: "õ", otimes: "⊗", otimesas: "⨶", oum: "ö", ouml: "ö", ovbar: "⌽", par: "¶", para: "¶", parallel: "∥", parsim: "⫳", parsl: "⫽", part: "∂", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", pfr: "𝔭", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plus: "+", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plusdo: "∔", plusdu: "⨥", pluse: "⩲", plusm: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", pointint: "⨕", popf: "𝕡", poun: "£", pound: "£", pr: "≺", prE: "⪳", prap: "⪷", prcue: "≼", pre: "⪯", prec: "≺", precapprox: "⪷", preccurlyeq: "≼", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", precsim: "≾", prime: "′", primes: "ℙ", prnE: "⪵", prnap: "⪹", prnsim: "⋨", prod: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", propto: "∝", prsim: "≾", prurel: "⊰", pscr: "𝓅", psi: "ψ", puncsp: " ", qfr: "𝔮", qint: "⨌", qopf: "𝕢", qprime: "⁗", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quo: '"', quot: '"', rAarr: "⇛", rArr: "⇒", rAtail: "⤜", rBarr: "⤏", rHar: "⥤", race: "∽̱", racute: "ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", rangd: "⦒", range: "⦥", rangle: "⟩", raqu: "»", raquo: "»", rarr: "→", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", rarrtl: "↣", rarrw: "↝", ratail: "⤚", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", rcaron: "ř", rcedil: "ŗ", rceil: "⌉", rcub: "}", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", rect: "▭", re: "®", reg: "®", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", rhard: "⇁", rharu: "⇀", rharul: "⥬", rho: "ρ", rhov: "ϱ", rightarrow: "→", rightarrowtail: "↣", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", rightthreetimes: "⋌", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", roplus: "⨮", rotimes: "⨵", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", rsaquo: "›", rscr: "𝓇", rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", ruluhar: "⥨", rx: "℞", sacute: "ś", sbquo: "‚", sc: "≻", scE: "⪴", scap: "⪸", scaron: "š", sccue: "≽", sce: "⪰", scedil: "ş", scirc: "ŝ", scnE: "⪶", scnap: "⪺", scnsim: "⋩", scpolint: "⨓", scsim: "≿", scy: "с", sdot: "⋅", sdotb: "⊡", sdote: "⩦", seArr: "⇘", searhk: "⤥", searr: "↘", searrow: "↘", sec: "§", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", sfr: "𝔰", sfrown: "⌢", sharp: "♯", shchcy: "щ", shcy: "ш", shortmid: "∣", shortparallel: "∥", sh: "­", shy: "­", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", softcy: "ь", sol: "/", solb: "⧄", solbar: "⌿", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", squ: "□", square: "□", squarf: "▪", squf: "▪", srarr: "→", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", subE: "⫅", subdot: "⪽", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", subset: "⊂", subseteq: "⊆", subseteqq: "⫅", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succ: "≻", succapprox: "⪸", succcurlyeq: "≽", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", sum: "∑", sung: "♪", sup: "⊃", sup1: "¹", sup2: "²", sup3: "³", supE: "⫆", supdot: "⪾", supdsub: "⫘", supe: "⊇", supedot: "⫄", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", supset: "⊃", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swArr: "⇙", swarhk: "⤦", swarr: "↙", swarrow: "↙", swnwar: "⤪", szli: "ß", szlig: "ß", target: "⌖", tau: "τ", tbrk: "⎴", tcaron: "ť", tcedil: "ţ", tcy: "т", tdot: "⃛", telrec: "⌕", tfr: "𝔱", there4: "∴", therefore: "∴", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", thinsp: " ", thkap: "≈", thksim: "∼", thor: "þ", thorn: "þ", tilde: "˜", time: "×", times: "×", timesb: "⊠", timesbar: "⨱", timesd: "⨰", tint: "∭", toea: "⤨", top: "⊤", topbot: "⌶", topcir: "⫱", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", tscr: "𝓉", tscy: "ц", tshcy: "ћ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", uArr: "⇑", uHar: "⥣", uacut: "ú", uacute: "ú", uarr: "↑", ubrcy: "ў", ubreve: "ŭ", ucir: "û", ucirc: "û", ucy: "у", udarr: "⇅", udblac: "ű", udhar: "⥮", ufisht: "⥾", ufr: "𝔲", ugrav: "ù", ugrave: "ù", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", umacr: "ū", um: "¨", uml: "¨", uogon: "ų", uopf: "𝕦", uparrow: "↑", updownarrow: "↕", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", upsi: "υ", upsih: "ϒ", upsilon: "υ", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", uring: "ů", urtri: "◹", uscr: "𝓊", utdot: "⋰", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", uum: "ü", uuml: "ü", uwangle: "⦧", vArr: "⇕", vBar: "⫨", vBarv: "⫩", vDash: "⊨", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vcy: "в", vdash: "⊢", vee: "∨", veebar: "⊻", veeeq: "≚", vellip: "⋮", verbar: "|", vert: "|", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", vopf: "𝕧", vprop: "∝", vrtri: "⊳", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", vzigzag: "⦚", wcirc: "ŵ", wedbar: "⩟", wedge: "∧", wedgeq: "≙", weierp: "℘", wfr: "𝔴", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", xfr: "𝔵", xhArr: "⟺", xharr: "⟷", xi: "ξ", xlArr: "⟸", xlarr: "⟵", xmap: "⟼", xnis: "⋻", xodot: "⨀", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrArr: "⟹", xrarr: "⟶", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", yacut: "ý", yacute: "ý", yacy: "я", ycirc: "ŷ", ycy: "ы", ye: "¥", yen: "¥", yfr: "𝔶", yicy: "ї", yopf: "𝕪", yscr: "𝓎", yucy: "ю", yum: "ÿ", yuml: "ÿ", zacute: "ź", zcaron: "ž", zcy: "з", zdot: "ż", zeetrf: "ℨ", zeta: "ζ", zfr: "𝔷", zhcy: "ж", zigrarr: "⇝", zopf: "𝕫", zscr: "𝓏", zwj: "‍", zwnj: "‌" };
} }), m5 = Z({ "../../node_modules/parse-entities/decode-entity.js"(e, t) {
  var r = f5();
  t.exports = a;
  var n = {}.hasOwnProperty;
  function a(l) {
    return n.call(r, l) ? r[l] : !1;
  }
} }), g5 = Z({ "../../node_modules/parse-entities/index.js"(e, t) {
  var r = s5(), n = u5(), a = ou(), l = c5(), i = p5(), u = m5();
  t.exports = X;
  var s = {}.hasOwnProperty, c = String.fromCharCode, d = Function.prototype, m = { warning: null, reference: null, text: null, warningContext: null, referenceContext: null, textContext: null, position: {}, additional: null, attribute: !1, nonTerminated: !0 }, f = 9, p = 10, h = 12, g = 32, x = 38, y = 59, w = 60, v = 61, E = 35, A = 88, S = 120, k = 65533, C = "named", T = "hexadecimal", O = "decimal", R = {};
  R[T] = 16, R[O] = 10;
  var $ = {};
  $[C] = i, $[O] = a, $[T] = l;
  var F = 1, P = 2, D = 3, L = 4, j = 5, V = 6, B = 7, H = {};
  H[F] = "Named character references must be terminated by a semicolon", H[P] = "Numeric character references must be terminated by a semicolon", H[D] = "Named character references cannot be empty", H[L] = "Numeric character references cannot be empty", H[j] = "Named character references must be known", H[V] = "Numeric character references cannot be disallowed", H[B] = "Numeric character references cannot be outside the permissible Unicode range";
  function X(I, z) {
    var W = {}, se, be;
    z || (z = {});
    for (be in m)
      se = z[be], W[be] = se ?? m[be];
    return (W.position.indent || W.position.start) && (W.indent = W.position.indent || [], W.position = W.position.start), ne(I, W);
  }
  function ne(I, z) {
    var W = z.additional, se = z.nonTerminated, be = z.text, it = z.reference, Re = z.warning, Ze = z.textContext, M = z.referenceContext, Pe = z.warningContext, Ve = z.position, St = z.indent || [], Vt = I.length, ze = 0, zr = -1, ye = Ve.column || 1, Ct = Ve.line || 1, qe = "", zt = [], Ue, qt, We, fe, je, ue, ae, Ge, qr, ta, kt, pr, _t, st, Al, fr, Ur, Ye, ce;
    for (typeof W == "string" && (W = W.charCodeAt(0)), fr = mr(), Ge = Re ? M0 : d, ze--, Vt++; ++ze < Vt; )
      if (je === p && (ye = St[zr] || 1), je = I.charCodeAt(ze), je === x) {
        if (ae = I.charCodeAt(ze + 1), ae === f || ae === p || ae === h || ae === g || ae === x || ae === w || ae !== ae || W && ae === W) {
          qe += c(je), ye++;
          continue;
        }
        for (_t = ze + 1, pr = _t, ce = _t, ae === E ? (ce = ++pr, ae = I.charCodeAt(ce), ae === A || ae === S ? (st = T, ce = ++pr) : st = O) : st = C, Ue = "", kt = "", fe = "", Al = $[st], ce--; ++ce < Vt && (ae = I.charCodeAt(ce), !!Al(ae)); )
          fe += c(ae), st === C && s.call(r, fe) && (Ue = fe, kt = r[fe]);
        We = I.charCodeAt(ce) === y, We && (ce++, qt = st === C ? u(fe) : !1, qt && (Ue = fe, kt = qt)), Ye = 1 + ce - _t, !We && !se || (fe ? st === C ? (We && !kt ? Ge(j, 1) : (Ue !== fe && (ce = pr + Ue.length, Ye = 1 + ce - pr, We = !1), We || (qr = Ue ? F : D, z.attribute ? (ae = I.charCodeAt(ce), ae === v ? (Ge(qr, Ye), kt = null) : i(ae) ? kt = null : Ge(qr, Ye)) : Ge(qr, Ye))), ue = kt) : (We || Ge(P, Ye), ue = parseInt(fe, R[st]), K(ue) ? (Ge(B, Ye), ue = c(k)) : ue in n ? (Ge(V, Ye), ue = n[ue]) : (ta = "", J(ue) && Ge(V, Ye), ue > 65535 && (ue -= 65536, ta += c(ue >>> 10 | 55296), ue = 56320 | ue & 1023), ue = ta + c(ue))) : st !== C && Ge(L, Ye)), ue ? (Sl(), fr = mr(), ze = ce - 1, ye += ce - _t + 1, zt.push(ue), Ur = mr(), Ur.offset++, it && it.call(M, ue, { start: fr, end: Ur }, I.slice(_t - 1, ce)), fr = Ur) : (fe = I.slice(_t - 1, ce), qe += fe, ye += fe.length, ze = ce - 1);
      } else
        je === 10 && (Ct++, zr++, ye = 0), je === je ? (qe += c(je), ye++) : Sl();
    return zt.join("");
    function mr() {
      return { line: Ct, column: ye, offset: ze + (Ve.offset || 0) };
    }
    function M0(Cl, kl) {
      var ra = mr();
      ra.column += kl, ra.offset += kl, Re.call(Pe, H[Cl], ra, Cl);
    }
    function Sl() {
      qe && (zt.push(qe), be && be.call(Ze, qe, { start: fr, end: mr() }), qe = "");
    }
  }
  function K(I) {
    return I >= 55296 && I <= 57343 || I > 1114111;
  }
  function J(I) {
    return I >= 1 && I <= 8 || I === 11 || I >= 13 && I <= 31 || I >= 127 && I <= 159 || I >= 64976 && I <= 65007 || (I & 65535) === 65535 || (I & 65535) === 65534;
  }
} }), h5 = Z({ "../../node_modules/refractor/node_modules/prismjs/components/prism-core.js"(e, t) {
  var r = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {}, n = function(a) {
    var l = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, i = 0, u = {}, s = { manual: a.Prism && a.Prism.manual, disableWorkerMessageHandler: a.Prism && a.Prism.disableWorkerMessageHandler, util: { encode: function v(E) {
      return E instanceof c ? new c(E.type, v(E.content), E.alias) : Array.isArray(E) ? E.map(v) : E.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(v) {
      return Object.prototype.toString.call(v).slice(8, -1);
    }, objId: function(v) {
      return v.__id || Object.defineProperty(v, "__id", { value: ++i }), v.__id;
    }, clone: function v(E, A) {
      A = A || {};
      var S, k;
      switch (s.util.type(E)) {
        case "Object":
          if (k = s.util.objId(E), A[k])
            return A[k];
          S = {}, A[k] = S;
          for (var C in E)
            E.hasOwnProperty(C) && (S[C] = v(E[C], A));
          return S;
        case "Array":
          return k = s.util.objId(E), A[k] ? A[k] : (S = [], A[k] = S, E.forEach(function(T, O) {
            S[O] = v(T, A);
          }), S);
        default:
          return E;
      }
    }, getLanguage: function(v) {
      for (; v; ) {
        var E = l.exec(v.className);
        if (E)
          return E[1].toLowerCase();
        v = v.parentElement;
      }
      return "none";
    }, setLanguage: function(v, E) {
      v.className = v.className.replace(RegExp(l, "gi"), ""), v.classList.add("language-" + E);
    }, currentScript: function() {
      if (typeof document > "u")
        return null;
      if ("currentScript" in document && 1 < 2)
        return document.currentScript;
      try {
        throw new Error();
      } catch (S) {
        var v = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(S.stack) || [])[1];
        if (v) {
          var E = document.getElementsByTagName("script");
          for (var A in E)
            if (E[A].src == v)
              return E[A];
        }
        return null;
      }
    }, isActive: function(v, E, A) {
      for (var S = "no-" + E; v; ) {
        var k = v.classList;
        if (k.contains(E))
          return !0;
        if (k.contains(S))
          return !1;
        v = v.parentElement;
      }
      return !!A;
    } }, languages: { plain: u, plaintext: u, text: u, txt: u, extend: function(v, E) {
      var A = s.util.clone(s.languages[v]);
      for (var S in E)
        A[S] = E[S];
      return A;
    }, insertBefore: function(v, E, A, S) {
      S = S || s.languages;
      var k = S[v], C = {};
      for (var T in k)
        if (k.hasOwnProperty(T)) {
          if (T == E)
            for (var O in A)
              A.hasOwnProperty(O) && (C[O] = A[O]);
          A.hasOwnProperty(T) || (C[T] = k[T]);
        }
      var R = S[v];
      return S[v] = C, s.languages.DFS(s.languages, function($, F) {
        F === R && $ != v && (this[$] = C);
      }), C;
    }, DFS: function v(E, A, S, k) {
      k = k || {};
      var C = s.util.objId;
      for (var T in E)
        if (E.hasOwnProperty(T)) {
          A.call(E, T, E[T], S || T);
          var O = E[T], R = s.util.type(O);
          R === "Object" && !k[C(O)] ? (k[C(O)] = !0, v(O, A, null, k)) : R === "Array" && !k[C(O)] && (k[C(O)] = !0, v(O, A, T, k));
        }
    } }, plugins: {}, highlightAll: function(v, E) {
      s.highlightAllUnder(document, v, E);
    }, highlightAllUnder: function(v, E, A) {
      var S = { callback: A, container: v, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
      s.hooks.run("before-highlightall", S), S.elements = Array.prototype.slice.apply(S.container.querySelectorAll(S.selector)), s.hooks.run("before-all-elements-highlight", S);
      for (var k = 0, C; C = S.elements[k++]; )
        s.highlightElement(C, E === !0, S.callback);
    }, highlightElement: function(v, E, A) {
      var S = s.util.getLanguage(v), k = s.languages[S];
      s.util.setLanguage(v, S);
      var C = v.parentElement;
      C && C.nodeName.toLowerCase() === "pre" && s.util.setLanguage(C, S);
      var T = v.textContent, O = { element: v, language: S, grammar: k, code: T };
      function R(F) {
        O.highlightedCode = F, s.hooks.run("before-insert", O), O.element.innerHTML = O.highlightedCode, s.hooks.run("after-highlight", O), s.hooks.run("complete", O), A && A.call(O.element);
      }
      if (s.hooks.run("before-sanity-check", O), C = O.element.parentElement, C && C.nodeName.toLowerCase() === "pre" && !C.hasAttribute("tabindex") && C.setAttribute("tabindex", "0"), !O.code) {
        s.hooks.run("complete", O), A && A.call(O.element);
        return;
      }
      if (s.hooks.run("before-highlight", O), !O.grammar) {
        R(s.util.encode(O.code));
        return;
      }
      if (E && a.Worker) {
        var $ = new Worker(s.filename);
        $.onmessage = function(F) {
          R(F.data);
        }, $.postMessage(JSON.stringify({ language: O.language, code: O.code, immediateClose: !0 }));
      } else
        R(s.highlight(O.code, O.grammar, O.language));
    }, highlight: function(v, E, A) {
      var S = { code: v, grammar: E, language: A };
      if (s.hooks.run("before-tokenize", S), !S.grammar)
        throw new Error('The language "' + S.language + '" has no grammar.');
      return S.tokens = s.tokenize(S.code, S.grammar), s.hooks.run("after-tokenize", S), c.stringify(s.util.encode(S.tokens), S.language);
    }, tokenize: function(v, E) {
      var A = E.rest;
      if (A) {
        for (var S in A)
          E[S] = A[S];
        delete E.rest;
      }
      var k = new f();
      return p(k, k.head, v), m(v, k, E, k.head, 0), g(k);
    }, hooks: { all: {}, add: function(v, E) {
      var A = s.hooks.all;
      A[v] = A[v] || [], A[v].push(E);
    }, run: function(v, E) {
      var A = s.hooks.all[v];
      if (!(!A || !A.length))
        for (var S = 0, k; k = A[S++]; )
          k(E);
    } }, Token: c };
    a.Prism = s;
    function c(v, E, A, S) {
      this.type = v, this.content = E, this.alias = A, this.length = (S || "").length | 0;
    }
    c.stringify = function v(E, A) {
      if (typeof E == "string")
        return E;
      if (Array.isArray(E)) {
        var S = "";
        return E.forEach(function(R) {
          S += v(R, A);
        }), S;
      }
      var k = { type: E.type, content: v(E.content, A), tag: "span", classes: ["token", E.type], attributes: {}, language: A }, C = E.alias;
      C && (Array.isArray(C) ? Array.prototype.push.apply(k.classes, C) : k.classes.push(C)), s.hooks.run("wrap", k);
      var T = "";
      for (var O in k.attributes)
        T += " " + O + '="' + (k.attributes[O] || "").replace(/"/g, "&quot;") + '"';
      return "<" + k.tag + ' class="' + k.classes.join(" ") + '"' + T + ">" + k.content + "</" + k.tag + ">";
    };
    function d(v, E, A, S) {
      v.lastIndex = E;
      var k = v.exec(A);
      if (k && S && k[1]) {
        var C = k[1].length;
        k.index += C, k[0] = k[0].slice(C);
      }
      return k;
    }
    function m(v, E, A, S, k, C) {
      for (var T in A)
        if (!(!A.hasOwnProperty(T) || !A[T])) {
          var O = A[T];
          O = Array.isArray(O) ? O : [O];
          for (var R = 0; R < O.length; ++R) {
            if (C && C.cause == T + "," + R)
              return;
            var $ = O[R], F = $.inside, P = !!$.lookbehind, D = !!$.greedy, L = $.alias;
            if (D && !$.pattern.global) {
              var j = $.pattern.toString().match(/[imsuy]*$/)[0];
              $.pattern = RegExp($.pattern.source, j + "g");
            }
            for (var V = $.pattern || $, B = S.next, H = k; B !== E.tail && !(C && H >= C.reach); H += B.value.length, B = B.next) {
              var X = B.value;
              if (E.length > v.length)
                return;
              if (!(X instanceof c)) {
                var ne = 1, K;
                if (D) {
                  if (K = d(V, H, v, P), !K || K.index >= v.length)
                    break;
                  var W = K.index, J = K.index + K[0].length, I = H;
                  for (I += B.value.length; W >= I; )
                    B = B.next, I += B.value.length;
                  if (I -= B.value.length, H = I, B.value instanceof c)
                    continue;
                  for (var z = B; z !== E.tail && (I < J || typeof z.value == "string"); z = z.next)
                    ne++, I += z.value.length;
                  ne--, X = v.slice(H, I), K.index -= H;
                } else if (K = d(V, 0, X, P), !K)
                  continue;
                var W = K.index, se = K[0], be = X.slice(0, W), it = X.slice(W + se.length), Re = H + X.length;
                C && Re > C.reach && (C.reach = Re);
                var Ze = B.prev;
                be && (Ze = p(E, Ze, be), H += be.length), h(E, Ze, ne);
                var M = new c(T, F ? s.tokenize(se, F) : se, L, se);
                if (B = p(E, Ze, M), it && p(E, B, it), ne > 1) {
                  var Pe = { cause: T + "," + R, reach: Re };
                  m(v, E, A, B.prev, H, Pe), C && Pe.reach > C.reach && (C.reach = Pe.reach);
                }
              }
            }
          }
        }
    }
    function f() {
      var v = { value: null, prev: null, next: null }, E = { value: null, prev: v, next: null };
      v.next = E, this.head = v, this.tail = E, this.length = 0;
    }
    function p(v, E, A) {
      var S = E.next, k = { value: A, prev: E, next: S };
      return E.next = k, S.prev = k, v.length++, k;
    }
    function h(v, E, A) {
      for (var S = E.next, k = 0; k < A && S !== v.tail; k++)
        S = S.next;
      E.next = S, S.prev = E, v.length -= k;
    }
    function g(v) {
      for (var E = [], A = v.head.next; A !== v.tail; )
        E.push(A.value), A = A.next;
      return E;
    }
    if (!a.document)
      return a.addEventListener && (s.disableWorkerMessageHandler || a.addEventListener("message", function(v) {
        var E = JSON.parse(v.data), A = E.language, S = E.code, k = E.immediateClose;
        a.postMessage(s.highlight(S, s.languages[A], A)), k && a.close();
      }, !1)), s;
    var x = s.util.currentScript();
    x && (s.filename = x.src, x.hasAttribute("data-manual") && (s.manual = !0));
    function y() {
      s.manual || s.highlightAll();
    }
    if (!s.manual) {
      var w = document.readyState;
      w === "loading" || w === "interactive" && x && x.defer ? document.addEventListener("DOMContentLoaded", y) : window.requestAnimationFrame ? window.requestAnimationFrame(y) : window.setTimeout(y, 16);
    }
    return s;
  }(r);
  typeof t < "u" && t.exports && (t.exports = n), typeof global < "u" && (global.Prism = n);
} }), b5 = Z({ "../../node_modules/refractor/core.js"(e, t) {
  var r = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, n = k();
  r.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
  var a = i5(), l = g5(), i = h5(), u = eu(), s = Qs(), c = zp(), d = qp();
  n();
  var m = {}.hasOwnProperty;
  function f() {
  }
  f.prototype = i;
  var p = new f();
  t.exports = p, p.highlight = x, p.register = h, p.alias = g, p.registered = y, p.listLanguages = w, h(u), h(s), h(c), h(d), p.util.encode = A, p.Token.stringify = v;
  function h(C) {
    if (typeof C != "function" || !C.displayName)
      throw new Error("Expected `function` for `grammar`, got `" + C + "`");
    p.languages[C.displayName] === void 0 && C(p);
  }
  function g(C, T) {
    var O = p.languages, R = C, $, F, P, D;
    T && (R = {}, R[C] = T);
    for ($ in R)
      for (F = R[$], F = typeof F == "string" ? [F] : F, P = F.length, D = -1; ++D < P; )
        O[F[D]] = O[$];
  }
  function x(C, T) {
    var O = i.highlight, R;
    if (typeof C != "string")
      throw new Error("Expected `string` for `value`, got `" + C + "`");
    if (p.util.type(T) === "Object")
      R = T, T = null;
    else {
      if (typeof T != "string")
        throw new Error("Expected `string` for `name`, got `" + T + "`");
      if (m.call(p.languages, T))
        R = p.languages[T];
      else
        throw new Error("Unknown language: `" + T + "` is not registered");
    }
    return O.call(this, C, R, T);
  }
  function y(C) {
    if (typeof C != "string")
      throw new Error("Expected `string` for `language`, got `" + C + "`");
    return m.call(p.languages, C);
  }
  function w() {
    var C = p.languages, T = [], O;
    for (O in C)
      m.call(C, O) && typeof C[O] == "object" && T.push(O);
    return T;
  }
  function v(C, T, O) {
    var R;
    return typeof C == "string" ? { type: "text", value: C } : p.util.type(C) === "Array" ? E(C, T) : (R = { type: C.type, content: p.Token.stringify(C.content, T, O), tag: "span", classes: ["token", C.type], attributes: {}, language: T, parent: O }, C.alias && (R.classes = R.classes.concat(C.alias)), p.hooks.run("wrap", R), a(R.tag + "." + R.classes.join("."), S(R.attributes), R.content));
  }
  function E(C, T) {
    for (var O = [], R = C.length, $ = -1, F; ++$ < R; )
      F = C[$], F !== "" && F !== null && F !== void 0 && O.push(F);
    for ($ = -1, R = O.length; ++$ < R; )
      F = O[$], O[$] = p.Token.stringify(F, T, O);
    return O;
  }
  function A(C) {
    return C;
  }
  function S(C) {
    var T;
    for (T in C)
      C[T] = l(C[T]);
    return C;
  }
  function k() {
    var C = "Prism" in r, T = C ? r.Prism : void 0;
    return O;
    function O() {
      C ? r.Prism = T : delete r.Prism, C = void 0, T = void 0;
    }
  }
} }), y5 = Z({ "../../node_modules/refractor/lang/bash.js"(e, t) {
  t.exports = r, r.displayName = "bash", r.aliases = ["shell"];
  function r(n) {
    (function(a) {
      var l = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", i = { pattern: /(^(["']?)\w+\2)[ \t]+\S.*/, lookbehind: !0, alias: "punctuation", inside: null }, u = { bash: i, environment: { pattern: RegExp("\\$" + l), alias: "constant" }, variable: [{ pattern: /\$?\(\([\s\S]+?\)\)/, greedy: !0, inside: { variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 }, /^\$\(\(/], number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/, operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/, punctuation: /\(\(?|\)\)?|,|;/ } }, { pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/, greedy: !0, inside: { variable: /^\$\(|^`|\)$|`$/ } }, { pattern: /\$\{[^}]+\}/, greedy: !0, inside: { operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/, punctuation: /[\[\]]/, environment: { pattern: RegExp("(\\{)" + l), lookbehind: !0, alias: "constant" } } }, /\$(?:\w+|[#?*!@$])/], entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/ };
      a.languages.bash = { shebang: { pattern: /^#!\s*\/.*/, alias: "important" }, comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 }, "function-name": [{ pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/, lookbehind: !0, alias: "function" }, { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" }], "for-or-select": { pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/, alias: "variable", lookbehind: !0 }, "assign-left": { pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/, inside: { environment: { pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + l), lookbehind: !0, alias: "constant" } }, alias: "variable", lookbehind: !0 }, string: [{ pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/, lookbehind: !0, greedy: !0, inside: u }, { pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/, lookbehind: !0, greedy: !0, inside: { bash: i } }, { pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/, lookbehind: !0, greedy: !0, inside: u }, { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 }, { pattern: /\$'(?:[^'\\]|\\[\s\S])*'/, greedy: !0, inside: { entity: u.entity } }], environment: { pattern: RegExp("\\$?" + l), alias: "constant" }, variable: u.variable, function: { pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/, lookbehind: !0 }, keyword: { pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/, lookbehind: !0 }, builtin: { pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/, lookbehind: !0, alias: "class-name" }, boolean: { pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/, lookbehind: !0 }, "file-descriptor": { pattern: /\B&\d\b/, alias: "important" }, operator: { pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/, inside: { "file-descriptor": { pattern: /^\d/, alias: "important" } } }, punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/, number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 } }, i.inside = a.languages.bash;
      for (var s = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], c = u.variable[1].inside, d = 0; d < s.length; d++)
        c[s[d]] = a.languages.bash[s[d]];
      a.languages.shell = a.languages.bash;
    })(n);
  }
} }), v5 = Z({ "../../node_modules/refractor/lang/js-extras.js"(e, t) {
  t.exports = r, r.displayName = "jsExtras", r.aliases = [];
  function r(n) {
    (function(a) {
      a.languages.insertBefore("javascript", "function-variable", { "method-variable": { pattern: RegExp("(\\.\\s*)" + a.languages.javascript["function-variable"].pattern.source), lookbehind: !0, alias: ["function-variable", "method", "function", "property-access"] } }), a.languages.insertBefore("javascript", "function", { method: { pattern: RegExp("(\\.\\s*)" + a.languages.javascript.function.source), lookbehind: !0, alias: ["function", "property-access"] } }), a.languages.insertBefore("javascript", "constant", { "known-class-name": [{ pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/, alias: "class-name" }, { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" }] });
      function l(m, f) {
        return RegExp(m.replace(/<ID>/g, function() {
          return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
        }), f);
      }
      a.languages.insertBefore("javascript", "keyword", { imports: { pattern: l(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source), lookbehind: !0, inside: a.languages.javascript }, exports: { pattern: l(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source), lookbehind: !0, inside: a.languages.javascript } }), a.languages.javascript.keyword.unshift({ pattern: /\b(?:as|default|export|from|import)\b/, alias: "module" }, { pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/, alias: "control-flow" }, { pattern: /\bnull\b/, alias: ["null", "nil"] }, { pattern: /\bundefined\b/, alias: "nil" }), a.languages.insertBefore("javascript", "operator", { spread: { pattern: /\.{3}/, alias: "operator" }, arrow: { pattern: /=>/, alias: "operator" } }), a.languages.insertBefore("javascript", "punctuation", { "property-access": { pattern: l(/(\.\s*)#?<ID>/.source), lookbehind: !0 }, "maybe-class-name": { pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/, lookbehind: !0 }, dom: { pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/, alias: "variable" }, console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" } });
      for (var i = ["function", "function-variable", "method", "method-variable", "property-access"], u = 0; u < i.length; u++) {
        var s = i[u], c = a.languages.javascript[s];
        a.util.type(c) === "RegExp" && (c = a.languages.javascript[s] = { pattern: c });
        var d = c.inside || {};
        c.inside = d, d["maybe-class-name"] = /^[A-Z][\s\S]*/;
      }
    })(n);
  }
} }), E5 = Z({ "../../node_modules/refractor/lang/json.js"(e, t) {
  t.exports = r, r.displayName = "json", r.aliases = ["webmanifest"];
  function r(n) {
    n.languages.json = { property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 }, string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 }, comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:false|true)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } }, n.languages.webmanifest = n.languages.json;
  }
} }), x5 = Z({ "../../node_modules/refractor/lang/graphql.js"(e, t) {
  t.exports = r, r.displayName = "graphql", r.aliases = [];
  function r(n) {
    n.languages.graphql = { comment: /#.*/, description: { pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i, greedy: !0, alias: "string", inside: { "language-markdown": { pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/, lookbehind: !0, inside: n.languages.markdown } } }, string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: !0 }, number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, boolean: /\b(?:false|true)\b/, variable: /\$[a-z_]\w*/i, directive: { pattern: /@[a-z_]\w*/i, alias: "function" }, "attr-name": { pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: !0 }, "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" }, scalar: /\b(?:Boolean|Float|ID|Int|String)\b/, constant: /\b[A-Z][A-Z_\d]*\b/, "class-name": { pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/, lookbehind: !0 }, fragment: { pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, "definition-mutation": { pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, "definition-query": { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/, operator: /[!=|&]|\.{3}/, "property-query": /\w+(?=\s*\()/, object: /\w+(?=\s*\{)/, punctuation: /[!(){}\[\]:=,]/, property: /\w+/ }, n.hooks.add("after-tokenize", function(a) {
      if (a.language !== "graphql")
        return;
      var l = a.tokens.filter(function(w) {
        return typeof w != "string" && w.type !== "comment" && w.type !== "scalar";
      }), i = 0;
      function u(w) {
        return l[i + w];
      }
      function s(w, v) {
        v = v || 0;
        for (var E = 0; E < w.length; E++) {
          var A = u(E + v);
          if (!A || A.type !== w[E])
            return !1;
        }
        return !0;
      }
      function c(w, v) {
        for (var E = 1, A = i; A < l.length; A++) {
          var S = l[A], k = S.content;
          if (S.type === "punctuation" && typeof k == "string") {
            if (w.test(k))
              E++;
            else if (v.test(k) && (E--, E === 0))
              return A;
          }
        }
        return -1;
      }
      function d(w, v) {
        var E = w.alias;
        E ? Array.isArray(E) || (w.alias = E = [E]) : w.alias = E = [], E.push(v);
      }
      for (; i < l.length; ) {
        var m = l[i++];
        if (m.type === "keyword" && m.content === "mutation") {
          var f = [];
          if (s(["definition-mutation", "punctuation"]) && u(1).content === "(") {
            i += 2;
            var p = c(/^\($/, /^\)$/);
            if (p === -1)
              continue;
            for (; i < p; i++) {
              var h = u(0);
              h.type === "variable" && (d(h, "variable-input"), f.push(h.content));
            }
            i = p + 1;
          }
          if (s(["punctuation", "property-query"]) && u(0).content === "{" && (i++, d(u(0), "property-mutation"), f.length > 0)) {
            var g = c(/^\{$/, /^\}$/);
            if (g === -1)
              continue;
            for (var x = i; x < g; x++) {
              var y = l[x];
              y.type === "variable" && f.indexOf(y.content) >= 0 && d(y, "variable-input");
            }
          }
        }
      }
    });
  }
} });
const { logger: w5 } = __STORYBOOK_MODULE_CLIENT_LOGGER__, { global: A5 } = __STORYBOOK_MODULE_GLOBAL__;
var S5 = _e(Js()), C5 = S5.default, k5 = _e(y5()), _5 = k5.default, T5 = _e(Qs()), O5 = T5.default, R5 = _e(v5()), F5 = R5.default, $5 = _e(E5()), D5 = $5.default, L5 = _e(x5()), M5 = L5.default, B5 = _e(eu()), I5 = B5.default, P5 = _e(Hp()), j5 = P5.default, N5 = _e(Zp()), H5 = N5.default, Z5 = _e(Vp()), V5 = Z5.default, z5 = _e(Xs()), q5 = z5.default;
function U5(e, t) {
  if (e == null)
    return {};
  var r = Oo(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (a = 0; a < l.length; a++)
      n = l[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Ua(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function W5(e) {
  if (Array.isArray(e))
    return Ua(e);
}
function G5(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Y5(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ua(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ua(e, t);
  }
}
function K5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function X5(e) {
  return W5(e) || G5(e) || Y5(e) || K5();
}
function Or(e) {
  "@babel/helpers - typeof";
  return Or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Or(e);
}
function J5(e, t) {
  if (Or(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Or(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Q5(e) {
  var t = J5(e, "string");
  return Or(t) === "symbol" ? t : String(t);
}
function lu(e, t, r) {
  return t = Q5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Xl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xl(Object(r), !0).forEach(function(n) {
      lu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function e2(e) {
  var t = e.length;
  if (t === 0 || t === 1)
    return e;
  if (t === 2)
    return [e[0], e[1], "".concat(e[0], ".").concat(e[1]), "".concat(e[1], ".").concat(e[0])];
  if (t === 3)
    return [e[0], e[1], e[2], "".concat(e[0], ".").concat(e[1]), "".concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[0]), "".concat(e[1], ".").concat(e[2]), "".concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[1]), "".concat(e[0], ".").concat(e[1], ".").concat(e[2]), "".concat(e[0], ".").concat(e[2], ".").concat(e[1]), "".concat(e[1], ".").concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[0], ".").concat(e[1]), "".concat(e[2], ".").concat(e[1], ".").concat(e[0])];
  if (t >= 4)
    return [e[0], e[1], e[2], e[3], "".concat(e[0], ".").concat(e[1]), "".concat(e[0], ".").concat(e[2]), "".concat(e[0], ".").concat(e[3]), "".concat(e[1], ".").concat(e[0]), "".concat(e[1], ".").concat(e[2]), "".concat(e[1], ".").concat(e[3]), "".concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[1]), "".concat(e[2], ".").concat(e[3]), "".concat(e[3], ".").concat(e[0]), "".concat(e[3], ".").concat(e[1]), "".concat(e[3], ".").concat(e[2]), "".concat(e[0], ".").concat(e[1], ".").concat(e[2]), "".concat(e[0], ".").concat(e[1], ".").concat(e[3]), "".concat(e[0], ".").concat(e[2], ".").concat(e[1]), "".concat(e[0], ".").concat(e[2], ".").concat(e[3]), "".concat(e[0], ".").concat(e[3], ".").concat(e[1]), "".concat(e[0], ".").concat(e[3], ".").concat(e[2]), "".concat(e[1], ".").concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[0], ".").concat(e[3]), "".concat(e[1], ".").concat(e[2], ".").concat(e[0]), "".concat(e[1], ".").concat(e[2], ".").concat(e[3]), "".concat(e[1], ".").concat(e[3], ".").concat(e[0]), "".concat(e[1], ".").concat(e[3], ".").concat(e[2]), "".concat(e[2], ".").concat(e[0], ".").concat(e[1]), "".concat(e[2], ".").concat(e[0], ".").concat(e[3]), "".concat(e[2], ".").concat(e[1], ".").concat(e[0]), "".concat(e[2], ".").concat(e[1], ".").concat(e[3]), "".concat(e[2], ".").concat(e[3], ".").concat(e[0]), "".concat(e[2], ".").concat(e[3], ".").concat(e[1]), "".concat(e[3], ".").concat(e[0], ".").concat(e[1]), "".concat(e[3], ".").concat(e[0], ".").concat(e[2]), "".concat(e[3], ".").concat(e[1], ".").concat(e[0]), "".concat(e[3], ".").concat(e[1], ".").concat(e[2]), "".concat(e[3], ".").concat(e[2], ".").concat(e[0]), "".concat(e[3], ".").concat(e[2], ".").concat(e[1]), "".concat(e[0], ".").concat(e[1], ".").concat(e[2], ".").concat(e[3]), "".concat(e[0], ".").concat(e[1], ".").concat(e[3], ".").concat(e[2]), "".concat(e[0], ".").concat(e[2], ".").concat(e[1], ".").concat(e[3]), "".concat(e[0], ".").concat(e[2], ".").concat(e[3], ".").concat(e[1]), "".concat(e[0], ".").concat(e[3], ".").concat(e[1], ".").concat(e[2]), "".concat(e[0], ".").concat(e[3], ".").concat(e[2], ".").concat(e[1]), "".concat(e[1], ".").concat(e[0], ".").concat(e[2], ".").concat(e[3]), "".concat(e[1], ".").concat(e[0], ".").concat(e[3], ".").concat(e[2]), "".concat(e[1], ".").concat(e[2], ".").concat(e[0], ".").concat(e[3]), "".concat(e[1], ".").concat(e[2], ".").concat(e[3], ".").concat(e[0]), "".concat(e[1], ".").concat(e[3], ".").concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[3], ".").concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[0], ".").concat(e[1], ".").concat(e[3]), "".concat(e[2], ".").concat(e[0], ".").concat(e[3], ".").concat(e[1]), "".concat(e[2], ".").concat(e[1], ".").concat(e[0], ".").concat(e[3]), "".concat(e[2], ".").concat(e[1], ".").concat(e[3], ".").concat(e[0]), "".concat(e[2], ".").concat(e[3], ".").concat(e[0], ".").concat(e[1]), "".concat(e[2], ".").concat(e[3], ".").concat(e[1], ".").concat(e[0]), "".concat(e[3], ".").concat(e[0], ".").concat(e[1], ".").concat(e[2]), "".concat(e[3], ".").concat(e[0], ".").concat(e[2], ".").concat(e[1]), "".concat(e[3], ".").concat(e[1], ".").concat(e[0], ".").concat(e[2]), "".concat(e[3], ".").concat(e[1], ".").concat(e[2], ".").concat(e[0]), "".concat(e[3], ".").concat(e[2], ".").concat(e[0], ".").concat(e[1]), "".concat(e[3], ".").concat(e[2], ".").concat(e[1], ".").concat(e[0])];
}
var ga = {};
function t2(e) {
  if (e.length === 0 || e.length === 1)
    return e;
  var t = e.join(".");
  return ga[t] || (ga[t] = e2(e)), ga[t];
}
function r2(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, n = e.filter(function(l) {
    return l !== "token";
  }), a = t2(n);
  return a.reduce(function(l, i) {
    return Gt(Gt({}, l), r[i]);
  }, t);
}
function Jl(e) {
  return e.join(" ");
}
function n2(e, t) {
  var r = 0;
  return function(n) {
    return r += 1, n.map(function(a, l) {
      return $o({ node: a, stylesheet: e, useInlineStyles: t, key: "code-segment-".concat(r, "-").concat(l) });
    });
  };
}
function $o(e) {
  var t = e.node, r = e.stylesheet, n = e.style, a = n === void 0 ? {} : n, l = e.useInlineStyles, i = e.key, u = t.properties, s = t.type, c = t.tagName, d = t.value;
  if (s === "text")
    return d;
  if (c) {
    var m = n2(r, l), f;
    if (!l)
      f = Gt(Gt({}, u), {}, { className: Jl(u.className) });
    else {
      var p = Object.keys(r).reduce(function(y, w) {
        return w.split(".").forEach(function(v) {
          y.includes(v) || y.push(v);
        }), y;
      }, []), h = u.className && u.className.includes("token") ? ["token"] : [], g = u.className && h.concat(u.className.filter(function(y) {
        return !p.includes(y);
      }));
      f = Gt(Gt({}, u), {}, { className: Jl(g) || void 0, style: r2(u.className, Object.assign({}, u.style, a), r) });
    }
    var x = m(t.children);
    return o.createElement(c, U({ key: i }, f), x);
  }
}
var a2 = function(e, t) {
  var r = e.listLanguages();
  return r.indexOf(t) !== -1;
}, o2 = ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"];
function Ql(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ql(Object(r), !0).forEach(function(n) {
      lu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ql(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var l2 = /\n/g;
function i2(e) {
  return e.match(l2);
}
function s2(e) {
  var t = e.lines, r = e.startingLineNumber, n = e.style;
  return t.map(function(a, l) {
    var i = l + r;
    return o.createElement("span", { key: "line-".concat(l), className: "react-syntax-highlighter-line-number", style: typeof n == "function" ? n(i) : n }, "".concat(i, `
`));
  });
}
function u2(e) {
  var t = e.codeString, r = e.codeStyle, n = e.containerStyle, a = n === void 0 ? { float: "left", paddingRight: "10px" } : n, l = e.numberStyle, i = l === void 0 ? {} : l, u = e.startingLineNumber;
  return o.createElement("code", { style: Object.assign({}, r, a) }, s2({ lines: t.replace(/\n$/, "").split(`
`), style: i, startingLineNumber: u }));
}
function c2(e) {
  return "".concat(e.toString().length, ".25em");
}
function iu(e, t) {
  return { type: "element", tagName: "span", properties: { key: "line-number--".concat(e), className: ["comment", "linenumber", "react-syntax-highlighter-line-number"], style: t }, children: [{ type: "text", value: e }] };
}
function su(e, t, r) {
  var n = { display: "inline-block", minWidth: c2(r), paddingRight: "1em", textAlign: "right", userSelect: "none" }, a = typeof e == "function" ? e(t) : e, l = Qe(Qe({}, n), a);
  return l;
}
function ln(e) {
  var t = e.children, r = e.lineNumber, n = e.lineNumberStyle, a = e.largestLineNumber, l = e.showInlineLineNumbers, i = e.lineProps, u = i === void 0 ? {} : i, s = e.className, c = s === void 0 ? [] : s, d = e.showLineNumbers, m = e.wrapLongLines, f = typeof u == "function" ? u(r) : u;
  if (f.className = c, r && l) {
    var p = su(n, r, a);
    t.unshift(iu(r, p));
  }
  return m & d && (f.style = Qe(Qe({}, f.style), {}, { display: "flex" })), { type: "element", tagName: "span", properties: f, children: t };
}
function uu(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], n = 0; n < e.length; n++) {
    var a = e[n];
    if (a.type === "text")
      r.push(ln({ children: [a], className: X5(new Set(t)) }));
    else if (a.children) {
      var l = t.concat(a.properties.className);
      uu(a.children, l).forEach(function(i) {
        return r.push(i);
      });
    }
  }
  return r;
}
function d2(e, t, r, n, a, l, i, u, s) {
  var c, d = uu(e.value), m = [], f = -1, p = 0;
  function h(A, S) {
    var k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return ln({ children: A, lineNumber: S, lineNumberStyle: u, largestLineNumber: i, showInlineLineNumbers: a, lineProps: r, className: k, showLineNumbers: n, wrapLongLines: s });
  }
  function g(A, S) {
    if (n && S && a) {
      var k = su(u, S, i);
      A.unshift(iu(S, k));
    }
    return A;
  }
  function x(A, S) {
    var k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return t || k.length > 0 ? h(A, S, k) : g(A, S);
  }
  for (var y = function() {
    var A = d[p], S = A.children[0].value, k = i2(S);
    if (k) {
      var C = S.split(`
`);
      C.forEach(function(T, O) {
        var R = n && m.length + l, $ = { type: "text", value: "".concat(T, `
`) };
        if (O === 0) {
          var F = d.slice(f + 1, p).concat(ln({ children: [$], className: A.properties.className })), P = x(F, R);
          m.push(P);
        } else if (O === C.length - 1) {
          var D = d[p + 1] && d[p + 1].children && d[p + 1].children[0], L = { type: "text", value: "".concat(T) };
          if (D) {
            var j = ln({ children: [L], className: A.properties.className });
            d.splice(p + 1, 0, j);
          } else {
            var V = [L], B = x(V, R, A.properties.className);
            m.push(B);
          }
        } else {
          var H = [$], X = x(H, R, A.properties.className);
          m.push(X);
        }
      }), f = p;
    }
    p++;
  }; p < d.length; )
    y();
  if (f !== d.length - 1) {
    var w = d.slice(f + 1, d.length);
    if (w && w.length) {
      var v = n && m.length + l, E = x(w, v);
      m.push(E);
    }
  }
  return t ? m : (c = []).concat.apply(c, m);
}
function p2(e) {
  var t = e.rows, r = e.stylesheet, n = e.useInlineStyles;
  return t.map(function(a, l) {
    return $o({ node: a, stylesheet: r, useInlineStyles: n, key: "code-segement".concat(l) });
  });
}
function cu(e) {
  return e && typeof e.highlightAuto < "u";
}
function f2(e) {
  var t = e.astGenerator, r = e.language, n = e.code, a = e.defaultCodeValue;
  if (cu(t)) {
    var l = a2(t, r);
    return r === "text" ? { value: a, language: "text" } : l ? t.highlight(r, n) : t.highlightAuto(n);
  }
  try {
    return r && r !== "text" ? { value: t.highlight(n, r) } : { value: a };
  } catch {
    return { value: a };
  }
}
function m2(e, t) {
  return function(r) {
    var n = r.language, a = r.children, l = r.style, i = l === void 0 ? t : l, u = r.customStyle, s = u === void 0 ? {} : u, c = r.codeTagProps, d = c === void 0 ? { className: n ? "language-".concat(n) : void 0, style: Qe(Qe({}, i['code[class*="language-"]']), i['code[class*="language-'.concat(n, '"]')]) } : c, m = r.useInlineStyles, f = m === void 0 ? !0 : m, p = r.showLineNumbers, h = p === void 0 ? !1 : p, g = r.showInlineLineNumbers, x = g === void 0 ? !0 : g, y = r.startingLineNumber, w = y === void 0 ? 1 : y, v = r.lineNumberContainerStyle, E = r.lineNumberStyle, A = E === void 0 ? {} : E, S = r.wrapLines, k = r.wrapLongLines, C = k === void 0 ? !1 : k, T = r.lineProps, O = T === void 0 ? {} : T, R = r.renderer, $ = r.PreTag, F = $ === void 0 ? "pre" : $, P = r.CodeTag, D = P === void 0 ? "code" : P, L = r.code, j = L === void 0 ? (Array.isArray(a) ? a[0] : a) || "" : L, V = r.astGenerator, B = U5(r, o2);
    V = V || e;
    var H = h ? o.createElement(u2, { containerStyle: v, codeStyle: d.style || {}, numberStyle: A, startingLineNumber: w, codeString: j }) : null, X = i.hljs || i['pre[class*="language-"]'] || { backgroundColor: "#fff" }, ne = cu(V) ? "hljs" : "prismjs", K = f ? Object.assign({}, B, { style: Object.assign({}, X, s) }) : Object.assign({}, B, { className: B.className ? "".concat(ne, " ").concat(B.className) : ne, style: Object.assign({}, s) });
    if (C ? d.style = Qe(Qe({}, d.style), {}, { whiteSpace: "pre-wrap" }) : d.style = Qe(Qe({}, d.style), {}, { whiteSpace: "pre" }), !V)
      return o.createElement(F, K, H, o.createElement(D, d, j));
    (S === void 0 && R || C) && (S = !0), R = R || p2;
    var J = [{ type: "text", value: j }], I = f2({ astGenerator: V, language: n, code: j, defaultCodeValue: J });
    I.language === null && (I.value = J);
    var z = I.value.length + w, W = d2(I, S, O, h, x, w, z, A, C);
    return o.createElement(F, K, o.createElement(D, d, !x && H, R({ rows: W, stylesheet: i, useInlineStyles: f })));
  };
}
var Do = _e(b5()), Lo = m2(Do.default, {});
Lo.registerLanguage = function(e, t) {
  return Do.default.register(t);
};
Lo.alias = function(e, t) {
  return Do.default.alias(e, t);
};
var Te = Lo, g2 = _.div(({ theme: e }) => ({ position: "absolute", bottom: 0, right: 0, maxWidth: "100%", display: "flex", background: e.background.content, zIndex: 1 })), du = _.button(({ theme: e }) => ({ margin: 0, border: "0 none", padding: "4px 10px", cursor: "pointer", display: "flex", alignItems: "center", color: e.color.defaultText, background: e.background.content, fontSize: 12, lineHeight: "16px", fontFamily: e.typography.fonts.base, fontWeight: e.typography.weight.bold, borderTop: `1px solid ${e.appBorderColor}`, borderLeft: `1px solid ${e.appBorderColor}`, marginLeft: -1, borderRadius: "4px 0 0 0", "&:not(:last-child)": { borderRight: `1px solid ${e.appBorderColor}` }, "& + *": { borderLeft: `1px solid ${e.appBorderColor}`, borderRadius: 0 }, "&:focus": { boxShadow: `${e.color.secondary} 0 -3px 0 0 inset`, outline: "0 none" } }), ({ disabled: e }) => e && { cursor: "not-allowed", opacity: 0.5 });
du.displayName = "ActionButton";
var Mo = ({ actionItems: e, ...t }) => o.createElement(g2, { ...t }, e.map(({ title: r, className: n, onClick: a, disabled: l }, i) => o.createElement(du, { key: i, className: n, onClick: a, disabled: l }, r)));
function h2(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function pu(...e) {
  return (t) => e.forEach((r) => h2(r, t));
}
function Ht(...e) {
  return b.useCallback(pu(...e), e);
}
var fu = b.forwardRef((e, t) => {
  let { children: r, ...n } = e, a = b.Children.toArray(r), l = a.find(y2);
  if (l) {
    let i = l.props.children, u = a.map((s) => s === l ? b.Children.count(i) > 1 ? b.Children.only(null) : b.isValidElement(i) ? i.props.children : null : s);
    return b.createElement(Wa, U({}, n, { ref: t }), b.isValidElement(i) ? b.cloneElement(i, void 0, u) : null);
  }
  return b.createElement(Wa, U({}, n, { ref: t }), r);
});
fu.displayName = "Slot";
var Wa = b.forwardRef((e, t) => {
  let { children: r, ...n } = e;
  return b.isValidElement(r) ? b.cloneElement(r, { ...v2(n, r.props), ref: t ? pu(t, r.ref) : r.ref }) : b.Children.count(r) > 1 ? b.Children.only(null) : null;
});
Wa.displayName = "SlotClone";
var b2 = ({ children: e }) => b.createElement(b.Fragment, null, e);
function y2(e) {
  return b.isValidElement(e) && e.type === b2;
}
function v2(e, t) {
  let r = { ...t };
  for (let n in t) {
    let a = e[n], l = t[n];
    /^on[A-Z]/.test(n) ? a && l ? r[n] = (...i) => {
      l(...i), a(...i);
    } : a && (r[n] = a) : n === "style" ? r[n] = { ...a, ...l } : n === "className" && (r[n] = [a, l].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
var E2 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"], jr = E2.reduce((e, t) => {
  let r = b.forwardRef((n, a) => {
    let { asChild: l, ...i } = n, u = l ? fu : t;
    return b.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), b.createElement(u, U({}, i, { ref: a }));
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), Ga = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {
};
function x2(e, t) {
  return b.useReducer((r, n) => t[r][n] ?? r, e);
}
var Nr = (e) => {
  let { present: t, children: r } = e, n = w2(t), a = typeof r == "function" ? r({ present: n.isPresent }) : b.Children.only(r), l = Ht(n.ref, a.ref);
  return typeof r == "function" || n.isPresent ? b.cloneElement(a, { ref: l }) : null;
};
Nr.displayName = "Presence";
function w2(e) {
  let [t, r] = b.useState(), n = b.useRef({}), a = b.useRef(e), l = b.useRef("none"), i = e ? "mounted" : "unmounted", [u, s] = x2(i, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return b.useEffect(() => {
    let c = Yr(n.current);
    l.current = u === "mounted" ? c : "none";
  }, [u]), Ga(() => {
    let c = n.current, d = a.current;
    if (d !== e) {
      let m = l.current, f = Yr(c);
      e ? s("MOUNT") : f === "none" || (c == null ? void 0 : c.display) === "none" ? s("UNMOUNT") : s(d && m !== f ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [e, s]), Ga(() => {
    if (t) {
      let c = (m) => {
        let f = Yr(n.current).includes(m.animationName);
        m.target === t && f && fs.flushSync(() => s("ANIMATION_END"));
      }, d = (m) => {
        m.target === t && (l.current = Yr(n.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", c), t.addEventListener("animationend", c), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", c), t.removeEventListener("animationend", c);
      };
    } else
      s("ANIMATION_END");
  }, [t, s]), { isPresent: ["mounted", "unmountSuspended"].includes(u), ref: b.useCallback((c) => {
    c && (n.current = getComputedStyle(c)), r(c);
  }, []) };
}
function Yr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function A2(e, t = []) {
  let r = [];
  function n(l, i) {
    let u = b.createContext(i), s = r.length;
    r = [...r, i];
    function c(m) {
      let { scope: f, children: p, ...h } = m, g = (f == null ? void 0 : f[e][s]) || u, x = b.useMemo(() => h, Object.values(h));
      return b.createElement(g.Provider, { value: x }, p);
    }
    function d(m, f) {
      let p = (f == null ? void 0 : f[e][s]) || u, h = b.useContext(p);
      if (h)
        return h;
      if (i !== void 0)
        return i;
      throw new Error(`\`${m}\` must be used within \`${l}\``);
    }
    return c.displayName = l + "Provider", [c, d];
  }
  let a = () => {
    let l = r.map((i) => b.createContext(i));
    return function(i) {
      let u = (i == null ? void 0 : i[e]) || l;
      return b.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: u } }), [i, u]);
    };
  };
  return a.scopeName = e, [n, S2(a, ...t)];
}
function S2(...e) {
  let t = e[0];
  if (e.length === 1)
    return t;
  let r = () => {
    let n = e.map((a) => ({ useScope: a(), scopeName: a.scopeName }));
    return function(a) {
      let l = n.reduce((i, { useScope: u, scopeName: s }) => {
        let c = u(a)[`__scope${s}`];
        return { ...i, ...c };
      }, {});
      return b.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function $t(e) {
  let t = b.useRef(e);
  return b.useEffect(() => {
    t.current = e;
  }), b.useMemo(() => (...r) => {
    var n;
    return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...r);
  }, []);
}
var C2 = b.createContext(void 0);
function k2(e) {
  let t = b.useContext(C2);
  return e || t || "ltr";
}
function _2(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function Lt(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(n) {
    if (e == null || e(n), r === !1 || !n.defaultPrevented)
      return t == null ? void 0 : t(n);
  };
}
function T2(e, t) {
  return b.useReducer((r, n) => t[r][n] ?? r, e);
}
var mu = "ScrollArea", [gu, mw] = A2(mu), [O2, Be] = gu(mu), R2 = b.forwardRef((e, t) => {
  let { __scopeScrollArea: r, type: n = "hover", dir: a, scrollHideDelay: l = 600, ...i } = e, [u, s] = b.useState(null), [c, d] = b.useState(null), [m, f] = b.useState(null), [p, h] = b.useState(null), [g, x] = b.useState(null), [y, w] = b.useState(0), [v, E] = b.useState(0), [A, S] = b.useState(!1), [k, C] = b.useState(!1), T = Ht(t, (R) => s(R)), O = k2(a);
  return b.createElement(O2, { scope: r, type: n, dir: O, scrollHideDelay: l, scrollArea: u, viewport: c, onViewportChange: d, content: m, onContentChange: f, scrollbarX: p, onScrollbarXChange: h, scrollbarXEnabled: A, onScrollbarXEnabledChange: S, scrollbarY: g, onScrollbarYChange: x, scrollbarYEnabled: k, onScrollbarYEnabledChange: C, onCornerWidthChange: w, onCornerHeightChange: E }, b.createElement(jr.div, U({ dir: O }, i, { ref: T, style: { position: "relative", "--radix-scroll-area-corner-width": y + "px", "--radix-scroll-area-corner-height": v + "px", ...e.style } })));
}), F2 = "ScrollAreaViewport", $2 = b.forwardRef((e, t) => {
  let { __scopeScrollArea: r, children: n, ...a } = e, l = Be(F2, r), i = b.useRef(null), u = Ht(t, i, l.onViewportChange);
  return b.createElement(b.Fragment, null, b.createElement("style", { dangerouslySetInnerHTML: { __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}" } }), b.createElement(jr.div, U({ "data-radix-scroll-area-viewport": "" }, a, { ref: u, style: { overflowX: l.scrollbarXEnabled ? "scroll" : "hidden", overflowY: l.scrollbarYEnabled ? "scroll" : "hidden", ...e.style } }), b.createElement("div", { ref: l.onContentChange, style: { minWidth: "100%", display: "table" } }, n)));
}), ft = "ScrollAreaScrollbar", D2 = b.forwardRef((e, t) => {
  let { forceMount: r, ...n } = e, a = Be(ft, e.__scopeScrollArea), { onScrollbarXEnabledChange: l, onScrollbarYEnabledChange: i } = a, u = e.orientation === "horizontal";
  return b.useEffect(() => (u ? l(!0) : i(!0), () => {
    u ? l(!1) : i(!1);
  }), [u, l, i]), a.type === "hover" ? b.createElement(L2, U({}, n, { ref: t, forceMount: r })) : a.type === "scroll" ? b.createElement(M2, U({}, n, { ref: t, forceMount: r })) : a.type === "auto" ? b.createElement(hu, U({}, n, { ref: t, forceMount: r })) : a.type === "always" ? b.createElement(Bo, U({}, n, { ref: t })) : null;
}), L2 = b.forwardRef((e, t) => {
  let { forceMount: r, ...n } = e, a = Be(ft, e.__scopeScrollArea), [l, i] = b.useState(!1);
  return b.useEffect(() => {
    let u = a.scrollArea, s = 0;
    if (u) {
      let c = () => {
        window.clearTimeout(s), i(!0);
      }, d = () => {
        s = window.setTimeout(() => i(!1), a.scrollHideDelay);
      };
      return u.addEventListener("pointerenter", c), u.addEventListener("pointerleave", d), () => {
        window.clearTimeout(s), u.removeEventListener("pointerenter", c), u.removeEventListener("pointerleave", d);
      };
    }
  }, [a.scrollArea, a.scrollHideDelay]), b.createElement(Nr, { present: r || l }, b.createElement(hu, U({ "data-state": l ? "visible" : "hidden" }, n, { ref: t })));
}), M2 = b.forwardRef((e, t) => {
  let { forceMount: r, ...n } = e, a = Be(ft, e.__scopeScrollArea), l = e.orientation === "horizontal", i = Pn(() => s("SCROLL_END"), 100), [u, s] = T2("hidden", { hidden: { SCROLL: "scrolling" }, scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" }, interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" }, idle: { HIDE: "hidden", SCROLL: "scrolling", POINTER_ENTER: "interacting" } });
  return b.useEffect(() => {
    if (u === "idle") {
      let c = window.setTimeout(() => s("HIDE"), a.scrollHideDelay);
      return () => window.clearTimeout(c);
    }
  }, [u, a.scrollHideDelay, s]), b.useEffect(() => {
    let c = a.viewport, d = l ? "scrollLeft" : "scrollTop";
    if (c) {
      let m = c[d], f = () => {
        let p = c[d];
        m !== p && (s("SCROLL"), i()), m = p;
      };
      return c.addEventListener("scroll", f), () => c.removeEventListener("scroll", f);
    }
  }, [a.viewport, l, s, i]), b.createElement(Nr, { present: r || u !== "hidden" }, b.createElement(Bo, U({ "data-state": u === "hidden" ? "hidden" : "visible" }, n, { ref: t, onPointerEnter: Lt(e.onPointerEnter, () => s("POINTER_ENTER")), onPointerLeave: Lt(e.onPointerLeave, () => s("POINTER_LEAVE")) })));
}), hu = b.forwardRef((e, t) => {
  let r = Be(ft, e.__scopeScrollArea), { forceMount: n, ...a } = e, [l, i] = b.useState(!1), u = e.orientation === "horizontal", s = Pn(() => {
    if (r.viewport) {
      let c = r.viewport.offsetWidth < r.viewport.scrollWidth, d = r.viewport.offsetHeight < r.viewport.scrollHeight;
      i(u ? c : d);
    }
  }, 10);
  return Qt(r.viewport, s), Qt(r.content, s), b.createElement(Nr, { present: n || l }, b.createElement(Bo, U({ "data-state": l ? "visible" : "hidden" }, a, { ref: t })));
}), Bo = b.forwardRef((e, t) => {
  let { orientation: r = "vertical", ...n } = e, a = Be(ft, e.__scopeScrollArea), l = b.useRef(null), i = b.useRef(0), [u, s] = b.useState({ content: 0, viewport: 0, scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 } }), c = Eu(u.viewport, u.content), d = { ...n, sizes: u, onSizesChange: s, hasThumb: c > 0 && c < 1, onThumbChange: (f) => l.current = f, onThumbPointerUp: () => i.current = 0, onThumbPointerDown: (f) => i.current = f };
  function m(f, p) {
    return V2(f, i.current, u, p);
  }
  return r === "horizontal" ? b.createElement(B2, U({}, d, { ref: t, onThumbPositionChange: () => {
    if (a.viewport && l.current) {
      let f = a.viewport.scrollLeft, p = ei(f, u, a.dir);
      l.current.style.transform = `translate3d(${p}px, 0, 0)`;
    }
  }, onWheelScroll: (f) => {
    a.viewport && (a.viewport.scrollLeft = f);
  }, onDragScroll: (f) => {
    a.viewport && (a.viewport.scrollLeft = m(f, a.dir));
  } })) : r === "vertical" ? b.createElement(I2, U({}, d, { ref: t, onThumbPositionChange: () => {
    if (a.viewport && l.current) {
      let f = a.viewport.scrollTop, p = ei(f, u);
      l.current.style.transform = `translate3d(0, ${p}px, 0)`;
    }
  }, onWheelScroll: (f) => {
    a.viewport && (a.viewport.scrollTop = f);
  }, onDragScroll: (f) => {
    a.viewport && (a.viewport.scrollTop = m(f));
  } })) : null;
}), B2 = b.forwardRef((e, t) => {
  let { sizes: r, onSizesChange: n, ...a } = e, l = Be(ft, e.__scopeScrollArea), [i, u] = b.useState(), s = b.useRef(null), c = Ht(t, s, l.onScrollbarXChange);
  return b.useEffect(() => {
    s.current && u(getComputedStyle(s.current));
  }, [s]), b.createElement(yu, U({ "data-orientation": "horizontal" }, a, { ref: c, sizes: r, style: { bottom: 0, left: l.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0, right: l.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0, "--radix-scroll-area-thumb-width": In(r) + "px", ...e.style }, onThumbPointerDown: (d) => e.onThumbPointerDown(d.x), onDragScroll: (d) => e.onDragScroll(d.x), onWheelScroll: (d, m) => {
    if (l.viewport) {
      let f = l.viewport.scrollLeft + d.deltaX;
      e.onWheelScroll(f), wu(f, m) && d.preventDefault();
    }
  }, onResize: () => {
    s.current && l.viewport && i && n({ content: l.viewport.scrollWidth, viewport: l.viewport.offsetWidth, scrollbar: { size: s.current.clientWidth, paddingStart: vn(i.paddingLeft), paddingEnd: vn(i.paddingRight) } });
  } }));
}), I2 = b.forwardRef((e, t) => {
  let { sizes: r, onSizesChange: n, ...a } = e, l = Be(ft, e.__scopeScrollArea), [i, u] = b.useState(), s = b.useRef(null), c = Ht(t, s, l.onScrollbarYChange);
  return b.useEffect(() => {
    s.current && u(getComputedStyle(s.current));
  }, [s]), b.createElement(yu, U({ "data-orientation": "vertical" }, a, { ref: c, sizes: r, style: { top: 0, right: l.dir === "ltr" ? 0 : void 0, left: l.dir === "rtl" ? 0 : void 0, bottom: "var(--radix-scroll-area-corner-height)", "--radix-scroll-area-thumb-height": In(r) + "px", ...e.style }, onThumbPointerDown: (d) => e.onThumbPointerDown(d.y), onDragScroll: (d) => e.onDragScroll(d.y), onWheelScroll: (d, m) => {
    if (l.viewport) {
      let f = l.viewport.scrollTop + d.deltaY;
      e.onWheelScroll(f), wu(f, m) && d.preventDefault();
    }
  }, onResize: () => {
    s.current && l.viewport && i && n({ content: l.viewport.scrollHeight, viewport: l.viewport.offsetHeight, scrollbar: { size: s.current.clientHeight, paddingStart: vn(i.paddingTop), paddingEnd: vn(i.paddingBottom) } });
  } }));
}), [P2, bu] = gu(ft), yu = b.forwardRef((e, t) => {
  let { __scopeScrollArea: r, sizes: n, hasThumb: a, onThumbChange: l, onThumbPointerUp: i, onThumbPointerDown: u, onThumbPositionChange: s, onDragScroll: c, onWheelScroll: d, onResize: m, ...f } = e, p = Be(ft, r), [h, g] = b.useState(null), x = Ht(t, (T) => g(T)), y = b.useRef(null), w = b.useRef(""), v = p.viewport, E = n.content - n.viewport, A = $t(d), S = $t(s), k = Pn(m, 10);
  function C(T) {
    if (y.current) {
      let O = T.clientX - y.current.left, R = T.clientY - y.current.top;
      c({ x: O, y: R });
    }
  }
  return b.useEffect(() => {
    let T = (O) => {
      let R = O.target;
      h != null && h.contains(R) && A(O, E);
    };
    return document.addEventListener("wheel", T, { passive: !1 }), () => document.removeEventListener("wheel", T, { passive: !1 });
  }, [v, h, E, A]), b.useEffect(S, [n, S]), Qt(h, k), Qt(p.content, k), b.createElement(P2, { scope: r, scrollbar: h, hasThumb: a, onThumbChange: $t(l), onThumbPointerUp: $t(i), onThumbPositionChange: S, onThumbPointerDown: $t(u) }, b.createElement(jr.div, U({}, f, { ref: x, style: { position: "absolute", ...f.style }, onPointerDown: Lt(e.onPointerDown, (T) => {
    T.button === 0 && (T.target.setPointerCapture(T.pointerId), y.current = h.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), C(T));
  }), onPointerMove: Lt(e.onPointerMove, C), onPointerUp: Lt(e.onPointerUp, (T) => {
    let O = T.target;
    O.hasPointerCapture(T.pointerId) && O.releasePointerCapture(T.pointerId), document.body.style.webkitUserSelect = w.current, p.viewport && (p.viewport.style.scrollBehavior = ""), y.current = null;
  }) })));
}), Ya = "ScrollAreaThumb", j2 = b.forwardRef((e, t) => {
  let { forceMount: r, ...n } = e, a = bu(Ya, e.__scopeScrollArea);
  return b.createElement(Nr, { present: r || a.hasThumb }, b.createElement(N2, U({ ref: t }, n)));
}), N2 = b.forwardRef((e, t) => {
  let { __scopeScrollArea: r, style: n, ...a } = e, l = Be(Ya, r), i = bu(Ya, r), { onThumbPositionChange: u } = i, s = Ht(t, (m) => i.onThumbChange(m)), c = b.useRef(), d = Pn(() => {
    c.current && (c.current(), c.current = void 0);
  }, 100);
  return b.useEffect(() => {
    let m = l.viewport;
    if (m) {
      let f = () => {
        if (d(), !c.current) {
          let p = z2(m, u);
          c.current = p, u();
        }
      };
      return u(), m.addEventListener("scroll", f), () => m.removeEventListener("scroll", f);
    }
  }, [l.viewport, d, u]), b.createElement(jr.div, U({ "data-state": i.hasThumb ? "visible" : "hidden" }, a, { ref: s, style: { width: "var(--radix-scroll-area-thumb-width)", height: "var(--radix-scroll-area-thumb-height)", ...n }, onPointerDownCapture: Lt(e.onPointerDownCapture, (m) => {
    let f = m.target.getBoundingClientRect(), p = m.clientX - f.left, h = m.clientY - f.top;
    i.onThumbPointerDown({ x: p, y: h });
  }), onPointerUp: Lt(e.onPointerUp, i.onThumbPointerUp) }));
}), vu = "ScrollAreaCorner", H2 = b.forwardRef((e, t) => {
  let r = Be(vu, e.__scopeScrollArea), n = !!(r.scrollbarX && r.scrollbarY);
  return r.type !== "scroll" && n ? b.createElement(Z2, U({}, e, { ref: t })) : null;
}), Z2 = b.forwardRef((e, t) => {
  let { __scopeScrollArea: r, ...n } = e, a = Be(vu, r), [l, i] = b.useState(0), [u, s] = b.useState(0), c = !!(l && u);
  return Qt(a.scrollbarX, () => {
    var d;
    let m = ((d = a.scrollbarX) === null || d === void 0 ? void 0 : d.offsetHeight) || 0;
    a.onCornerHeightChange(m), s(m);
  }), Qt(a.scrollbarY, () => {
    var d;
    let m = ((d = a.scrollbarY) === null || d === void 0 ? void 0 : d.offsetWidth) || 0;
    a.onCornerWidthChange(m), i(m);
  }), c ? b.createElement(jr.div, U({}, n, { ref: t, style: { width: l, height: u, position: "absolute", right: a.dir === "ltr" ? 0 : void 0, left: a.dir === "rtl" ? 0 : void 0, bottom: 0, ...e.style } })) : null;
});
function vn(e) {
  return e ? parseInt(e, 10) : 0;
}
function Eu(e, t) {
  let r = e / t;
  return isNaN(r) ? 0 : r;
}
function In(e) {
  let t = Eu(e.viewport, e.content), r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, n = (e.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function V2(e, t, r, n = "ltr") {
  let a = In(r), l = a / 2, i = t || l, u = a - i, s = r.scrollbar.paddingStart + i, c = r.scrollbar.size - r.scrollbar.paddingEnd - u, d = r.content - r.viewport, m = n === "ltr" ? [0, d] : [d * -1, 0];
  return xu([s, c], m)(e);
}
function ei(e, t, r = "ltr") {
  let n = In(t), a = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, l = t.scrollbar.size - a, i = t.content - t.viewport, u = l - n, s = r === "ltr" ? [0, i] : [i * -1, 0], c = _2(e, s);
  return xu([0, i], [0, u])(c);
}
function xu(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    let n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function wu(e, t) {
  return e > 0 && e < t;
}
var z2 = (e, t = () => {
}) => {
  let r = { left: e.scrollLeft, top: e.scrollTop }, n = 0;
  return function a() {
    let l = { left: e.scrollLeft, top: e.scrollTop }, i = r.left !== l.left, u = r.top !== l.top;
    (i || u) && t(), r = l, n = window.requestAnimationFrame(a);
  }(), () => window.cancelAnimationFrame(n);
};
function Pn(e, t) {
  let r = $t(e), n = b.useRef(0);
  return b.useEffect(() => () => window.clearTimeout(n.current), []), b.useCallback(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(r, t);
  }, [r, t]);
}
function Qt(e, t) {
  let r = $t(t);
  Ga(() => {
    let n = 0;
    if (e) {
      let a = new ResizeObserver(() => {
        cancelAnimationFrame(n), n = window.requestAnimationFrame(r);
      });
      return a.observe(e), () => {
        window.cancelAnimationFrame(n), a.unobserve(e);
      };
    }
  }, [e, r]);
}
var q2 = R2, U2 = $2, W2 = D2, G2 = j2, Y2 = H2, K2 = _(q2)(({ scrollbarsize: e, offset: t }) => ({ width: "100%", height: "100%", overflow: "hidden", "--scrollbar-size": `${e + t}px`, "--radix-scroll-area-thumb-width": `${e}px` })), X2 = _(U2)({ width: "100%", height: "100%" }), ti = _(W2)(({ offset: e, horizontal: t, vertical: r }) => ({ display: "flex", userSelect: "none", touchAction: "none", background: "transparent", transition: "all 0.2s ease-out", borderRadius: "var(--scrollbar-size)", '&[data-orientation="vertical"]': { width: "var(--scrollbar-size)", paddingRight: e, marginTop: e, marginBottom: t === "true" && r === "true" ? 0 : e }, '&[data-orientation="horizontal"]': { flexDirection: "column", height: "var(--scrollbar-size)", paddingBottom: e, marginLeft: e, marginRight: t === "true" && r === "true" ? 0 : e } })), ri = _(G2)(({ theme: e }) => ({ flex: 1, background: e.textMutedColor, opacity: 0.5, borderRadius: "var(--scrollbar-size)", position: "relative", transition: "opacity 0.2s ease-out", "&:hover": { opacity: 0.8 }, "::before": { content: '""', position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "100%", height: "100%", minWidth: 44, minHeight: 44 } })), Io = ({ children: e, horizontal: t = !1, vertical: r = !1, offset: n = 2, scrollbarSize: a = 6, className: l }) => o.createElement(K2, { scrollbarsize: a, offset: n, className: l }, o.createElement(X2, null, e), t && o.createElement(ti, { orientation: "horizontal", offset: n, horizontal: t.toString(), vertical: r.toString() }, o.createElement(ri, null)), r && o.createElement(ti, { orientation: "vertical", offset: n, horizontal: t.toString(), vertical: r.toString() }, o.createElement(ri, null)), t && r && o.createElement(Y2, null)), { navigator: Kr, document: hr, window: J2 } = A5;
Te.registerLanguage("jsextra", F5);
Te.registerLanguage("jsx", C5);
Te.registerLanguage("json", D5);
Te.registerLanguage("yml", H5);
Te.registerLanguage("md", j5);
Te.registerLanguage("bash", _5);
Te.registerLanguage("css", O5);
Te.registerLanguage("html", I5);
Te.registerLanguage("tsx", V5);
Te.registerLanguage("typescript", q5);
Te.registerLanguage("graphql", M5);
var Q2 = Nt(2)((e) => Object.entries(e.code || {}).reduce((t, [r, n]) => ({ ...t, [`* .${r}`]: n }), {})), ef = Au();
function Au() {
  return Kr != null && Kr.clipboard ? (e) => Kr.clipboard.writeText(e) : async (e) => {
    let t = hr.createElement("TEXTAREA"), r = hr.activeElement;
    t.value = e, hr.body.appendChild(t), t.select(), hr.execCommand("copy"), hr.body.removeChild(t), r.focus();
  };
}
var tf = _.div(({ theme: e }) => ({ position: "relative", overflow: "hidden", color: e.color.defaultText }), ({ theme: e, bordered: t }) => t ? { border: `1px solid ${e.appBorderColor}`, borderRadius: e.borderRadius, background: e.background.content } : {}, ({ showLineNumbers: e }) => e ? { ".react-syntax-highlighter-line-number::before": { content: "attr(data-line-number)" } } : {}), rf = ({ children: e, className: t }) => o.createElement(Io, { horizontal: !0, vertical: !0, className: t }, e), nf = _(rf)({ position: "relative" }, ({ theme: e }) => Q2(e)), af = _.pre(({ theme: e, padded: t }) => ({ display: "flex", justifyContent: "flex-start", margin: 0, padding: t ? e.layoutMargin : 0 })), of = _.div(({ theme: e }) => ({ flex: 1, paddingLeft: 2, paddingRight: e.layoutMargin, opacity: 1 })), Su = (e) => {
  let t = [...e.children], r = t[0], n = r.children[0].value, a = { ...r, children: [], properties: { ...r.properties, "data-line-number": n, style: { ...r.properties.style, userSelect: "auto" } } };
  return t[0] = a, { ...e, children: t };
}, lf = ({ rows: e, stylesheet: t, useInlineStyles: r }) => e.map((n, a) => $o({ node: Su(n), stylesheet: t, useInlineStyles: r, key: `code-segement${a}` })), sf = (e, t) => t ? e ? ({ rows: r, ...n }) => e({ rows: r.map((a) => Su(a)), ...n }) : lf : e, Po = ({ children: e, language: t = "jsx", copyable: r = !1, bordered: n = !1, padded: a = !1, format: l = !0, formatter: i = null, className: u = null, showLineNumbers: s = !1, ...c }) => {
  if (typeof e != "string" || !e.trim())
    return null;
  let d = i ? i(l, e) : e.trim(), [m, f] = b.useState(!1), p = b.useCallback((g) => {
    g.preventDefault(), ef(d).then(() => {
      f(!0), J2.setTimeout(() => f(!1), 1500);
    }).catch(w5.error);
  }, [d]), h = sf(c.renderer, s);
  return o.createElement(tf, { bordered: n, padded: a, showLineNumbers: s, className: u }, o.createElement(nf, null, o.createElement(Te, { padded: a || n, language: t, showLineNumbers: s, showInlineLineNumbers: s, useInlineStyles: !1, PreTag: af, CodeTag: of, lineNumberContainerStyle: {}, ...c, renderer: h }, d)), r ? o.createElement(Mo, { actionItems: [{ title: m ? "Copied" : "Copy", onClick: p }] }) : null);
};
Po.registerLanguage = (...e) => Te.registerLanguage(...e);
var gw = Po;
const { global: uf } = __STORYBOOK_MODULE_GLOBAL__;
var cf = Z({ "../../node_modules/react-fast-compare/index.js"(e, t) {
  var r = typeof Element < "u", n = typeof Map == "function", a = typeof Set == "function", l = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function i(u, s) {
    if (u === s)
      return !0;
    if (u && s && typeof u == "object" && typeof s == "object") {
      if (u.constructor !== s.constructor)
        return !1;
      var c, d, m;
      if (Array.isArray(u)) {
        if (c = u.length, c != s.length)
          return !1;
        for (d = c; d-- !== 0; )
          if (!i(u[d], s[d]))
            return !1;
        return !0;
      }
      var f;
      if (n && u instanceof Map && s instanceof Map) {
        if (u.size !== s.size)
          return !1;
        for (f = u.entries(); !(d = f.next()).done; )
          if (!s.has(d.value[0]))
            return !1;
        for (f = u.entries(); !(d = f.next()).done; )
          if (!i(d.value[1], s.get(d.value[0])))
            return !1;
        return !0;
      }
      if (a && u instanceof Set && s instanceof Set) {
        if (u.size !== s.size)
          return !1;
        for (f = u.entries(); !(d = f.next()).done; )
          if (!s.has(d.value[0]))
            return !1;
        return !0;
      }
      if (l && ArrayBuffer.isView(u) && ArrayBuffer.isView(s)) {
        if (c = u.length, c != s.length)
          return !1;
        for (d = c; d-- !== 0; )
          if (u[d] !== s[d])
            return !1;
        return !0;
      }
      if (u.constructor === RegExp)
        return u.source === s.source && u.flags === s.flags;
      if (u.valueOf !== Object.prototype.valueOf && typeof u.valueOf == "function" && typeof s.valueOf == "function")
        return u.valueOf() === s.valueOf();
      if (u.toString !== Object.prototype.toString && typeof u.toString == "function" && typeof s.toString == "function")
        return u.toString() === s.toString();
      if (m = Object.keys(u), c = m.length, c !== Object.keys(s).length)
        return !1;
      for (d = c; d-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(s, m[d]))
          return !1;
      if (r && u instanceof Element)
        return !1;
      for (d = c; d-- !== 0; )
        if (!((m[d] === "_owner" || m[d] === "__v" || m[d] === "__o") && u.$$typeof) && !i(u[m[d]], s[m[d]]))
          return !1;
      return !0;
    }
    return u !== u && s !== s;
  }
  t.exports = function(u, s) {
    try {
      return i(u, s);
    } catch (c) {
      if ((c.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), !1;
      throw c;
    }
  };
} }), ni = function(e) {
  return e.reduce(function(t, r) {
    var n = r[0], a = r[1];
    return t[n] = a, t;
  }, {});
}, ai = typeof window < "u" && window.document && window.document.createElement ? b.useLayoutEffect : b.useEffect, we = "top", Le = "bottom", Me = "right", Ae = "left", jn = "auto", Hr = [we, Le, Me, Ae], er = "start", Rr = "end", df = "clippingParents", Cu = "viewport", br = "popper", pf = "reference", oi = Hr.reduce(function(e, t) {
  return e.concat([t + "-" + er, t + "-" + Rr]);
}, []), ku = [].concat(Hr, [jn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + er, t + "-" + Rr]);
}, []), ff = "beforeRead", mf = "read", gf = "afterRead", hf = "beforeMain", bf = "main", yf = "afterMain", vf = "beforeWrite", Ef = "write", xf = "afterWrite", wf = [ff, mf, gf, hf, bf, yf, vf, Ef, xf];
function lt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ke(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function jt(e) {
  var t = ke(e).Element;
  return e instanceof t || e instanceof Element;
}
function De(e) {
  var t = ke(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function jo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ke(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Af(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, a = t.attributes[r] || {}, l = t.elements[r];
    !De(l) || !lt(l) || (Object.assign(l.style, n), Object.keys(a).forEach(function(i) {
      var u = a[i];
      u === !1 ? l.removeAttribute(i) : l.setAttribute(i, u === !0 ? "" : u);
    }));
  });
}
function Sf(e) {
  var t = e.state, r = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var a = t.elements[n], l = t.attributes[n] || {}, i = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), u = i.reduce(function(s, c) {
        return s[c] = "", s;
      }, {});
      !De(a) || !lt(a) || (Object.assign(a.style, u), Object.keys(l).forEach(function(s) {
        a.removeAttribute(s);
      }));
    });
  };
}
var Cf = { name: "applyStyles", enabled: !0, phase: "write", fn: Af, effect: Sf, requires: ["computeStyles"] };
function ot(e) {
  return e.split("-")[0];
}
var Mt = Math.max, En = Math.min, tr = Math.round;
function Ka() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function _u() {
  return !/^((?!chrome|android).)*safari/i.test(Ka());
}
function rr(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), a = 1, l = 1;
  t && De(e) && (a = e.offsetWidth > 0 && tr(n.width) / e.offsetWidth || 1, l = e.offsetHeight > 0 && tr(n.height) / e.offsetHeight || 1);
  var i = jt(e) ? ke(e) : window, u = i.visualViewport, s = !_u() && r, c = (n.left + (s && u ? u.offsetLeft : 0)) / a, d = (n.top + (s && u ? u.offsetTop : 0)) / l, m = n.width / a, f = n.height / l;
  return { width: m, height: f, top: d, right: c + m, bottom: d + f, left: c, x: c, y: d };
}
function No(e) {
  var t = rr(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), { x: e.offsetLeft, y: e.offsetTop, width: r, height: n };
}
function Tu(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && jo(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function pt(e) {
  return ke(e).getComputedStyle(e);
}
function kf(e) {
  return ["table", "td", "th"].indexOf(lt(e)) >= 0;
}
function At(e) {
  return ((jt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Nn(e) {
  return lt(e) === "html" ? e : e.assignedSlot || e.parentNode || (jo(e) ? e.host : null) || At(e);
}
function li(e) {
  return !De(e) || pt(e).position === "fixed" ? null : e.offsetParent;
}
function _f(e) {
  var t = /firefox/i.test(Ka()), r = /Trident/i.test(Ka());
  if (r && De(e)) {
    var n = pt(e);
    if (n.position === "fixed")
      return null;
  }
  var a = Nn(e);
  for (jo(a) && (a = a.host); De(a) && ["html", "body"].indexOf(lt(a)) < 0; ) {
    var l = pt(a);
    if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function Zr(e) {
  for (var t = ke(e), r = li(e); r && kf(r) && pt(r).position === "static"; )
    r = li(r);
  return r && (lt(r) === "html" || lt(r) === "body" && pt(r).position === "static") ? t : r || _f(e) || t;
}
function Ho(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function xr(e, t, r) {
  return Mt(e, En(t, r));
}
function Tf(e, t, r) {
  var n = xr(e, t, r);
  return n > r ? r : n;
}
function Ou() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Ru(e) {
  return Object.assign({}, Ou(), e);
}
function Fu(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var Of = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Ru(typeof e != "number" ? e : Fu(e, Hr));
};
function Rf(e) {
  var t, r = e.state, n = e.name, a = e.options, l = r.elements.arrow, i = r.modifiersData.popperOffsets, u = ot(r.placement), s = Ho(u), c = [Ae, Me].indexOf(u) >= 0, d = c ? "height" : "width";
  if (!(!l || !i)) {
    var m = Of(a.padding, r), f = No(l), p = s === "y" ? we : Ae, h = s === "y" ? Le : Me, g = r.rects.reference[d] + r.rects.reference[s] - i[s] - r.rects.popper[d], x = i[s] - r.rects.reference[s], y = Zr(l), w = y ? s === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, v = g / 2 - x / 2, E = m[p], A = w - f[d] - m[h], S = w / 2 - f[d] / 2 + v, k = xr(E, S, A), C = s;
    r.modifiersData[n] = (t = {}, t[C] = k, t.centerOffset = k - S, t);
  }
}
function Ff(e) {
  var t = e.state, r = e.options, n = r.element, a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || Tu(t.elements.popper, a) && (t.elements.arrow = a));
}
var $f = { name: "arrow", enabled: !0, phase: "main", fn: Rf, effect: Ff, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function nr(e) {
  return e.split("-")[1];
}
var Df = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Lf(e, t) {
  var r = e.x, n = e.y, a = t.devicePixelRatio || 1;
  return { x: tr(r * a) / a || 0, y: tr(n * a) / a || 0 };
}
function ii(e) {
  var t, r = e.popper, n = e.popperRect, a = e.placement, l = e.variation, i = e.offsets, u = e.position, s = e.gpuAcceleration, c = e.adaptive, d = e.roundOffsets, m = e.isFixed, f = i.x, p = f === void 0 ? 0 : f, h = i.y, g = h === void 0 ? 0 : h, x = typeof d == "function" ? d({ x: p, y: g }) : { x: p, y: g };
  p = x.x, g = x.y;
  var y = i.hasOwnProperty("x"), w = i.hasOwnProperty("y"), v = Ae, E = we, A = window;
  if (c) {
    var S = Zr(r), k = "clientHeight", C = "clientWidth";
    if (S === ke(r) && (S = At(r), pt(S).position !== "static" && u === "absolute" && (k = "scrollHeight", C = "scrollWidth")), S = S, a === we || (a === Ae || a === Me) && l === Rr) {
      E = Le;
      var T = m && S === A && A.visualViewport ? A.visualViewport.height : S[k];
      g -= T - n.height, g *= s ? 1 : -1;
    }
    if (a === Ae || (a === we || a === Le) && l === Rr) {
      v = Me;
      var O = m && S === A && A.visualViewport ? A.visualViewport.width : S[C];
      p -= O - n.width, p *= s ? 1 : -1;
    }
  }
  var R = Object.assign({ position: u }, c && Df), $ = d === !0 ? Lf({ x: p, y: g }, ke(r)) : { x: p, y: g };
  if (p = $.x, g = $.y, s) {
    var F;
    return Object.assign({}, R, (F = {}, F[E] = w ? "0" : "", F[v] = y ? "0" : "", F.transform = (A.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + g + "px)" : "translate3d(" + p + "px, " + g + "px, 0)", F));
  }
  return Object.assign({}, R, (t = {}, t[E] = w ? g + "px" : "", t[v] = y ? p + "px" : "", t.transform = "", t));
}
function Mf(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, a = n === void 0 ? !0 : n, l = r.adaptive, i = l === void 0 ? !0 : l, u = r.roundOffsets, s = u === void 0 ? !0 : u, c = { placement: ot(t.placement), variation: nr(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: a, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ii(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: i, roundOffsets: s })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ii(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: s })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Bf = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Mf, data: {} }, Xr = { passive: !0 };
function If(e) {
  var t = e.state, r = e.instance, n = e.options, a = n.scroll, l = a === void 0 ? !0 : a, i = n.resize, u = i === void 0 ? !0 : i, s = ke(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return l && c.forEach(function(d) {
    d.addEventListener("scroll", r.update, Xr);
  }), u && s.addEventListener("resize", r.update, Xr), function() {
    l && c.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Xr);
    }), u && s.removeEventListener("resize", r.update, Xr);
  };
}
var Pf = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: If, data: {} }, jf = { left: "right", right: "left", bottom: "top", top: "bottom" };
function sn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return jf[t];
  });
}
var Nf = { start: "end", end: "start" };
function si(e) {
  return e.replace(/start|end/g, function(t) {
    return Nf[t];
  });
}
function Zo(e) {
  var t = ke(e), r = t.pageXOffset, n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Vo(e) {
  return rr(At(e)).left + Zo(e).scrollLeft;
}
function Hf(e, t) {
  var r = ke(e), n = At(e), a = r.visualViewport, l = n.clientWidth, i = n.clientHeight, u = 0, s = 0;
  if (a) {
    l = a.width, i = a.height;
    var c = _u();
    (c || !c && t === "fixed") && (u = a.offsetLeft, s = a.offsetTop);
  }
  return { width: l, height: i, x: u + Vo(e), y: s };
}
function Zf(e) {
  var t, r = At(e), n = Zo(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, l = Mt(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), i = Mt(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), u = -n.scrollLeft + Vo(e), s = -n.scrollTop;
  return pt(a || r).direction === "rtl" && (u += Mt(r.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: i, x: u, y: s };
}
function zo(e) {
  var t = pt(e), r = t.overflow, n = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function $u(e) {
  return ["html", "body", "#document"].indexOf(lt(e)) >= 0 ? e.ownerDocument.body : De(e) && zo(e) ? e : $u(Nn(e));
}
function wr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = $u(e), a = n === ((r = e.ownerDocument) == null ? void 0 : r.body), l = ke(n), i = a ? [l].concat(l.visualViewport || [], zo(n) ? n : []) : n, u = t.concat(i);
  return a ? u : u.concat(wr(Nn(i)));
}
function Xa(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Vf(e, t) {
  var r = rr(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function ui(e, t, r) {
  return t === Cu ? Xa(Hf(e, r)) : jt(t) ? Vf(t, r) : Xa(Zf(At(e)));
}
function zf(e) {
  var t = wr(Nn(e)), r = ["absolute", "fixed"].indexOf(pt(e).position) >= 0, n = r && De(e) ? Zr(e) : e;
  return jt(n) ? t.filter(function(a) {
    return jt(a) && Tu(a, n) && lt(a) !== "body";
  }) : [];
}
function qf(e, t, r, n) {
  var a = t === "clippingParents" ? zf(e) : [].concat(t), l = [].concat(a, [r]), i = l[0], u = l.reduce(function(s, c) {
    var d = ui(e, c, n);
    return s.top = Mt(d.top, s.top), s.right = En(d.right, s.right), s.bottom = En(d.bottom, s.bottom), s.left = Mt(d.left, s.left), s;
  }, ui(e, i, n));
  return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u;
}
function Du(e) {
  var t = e.reference, r = e.element, n = e.placement, a = n ? ot(n) : null, l = n ? nr(n) : null, i = t.x + t.width / 2 - r.width / 2, u = t.y + t.height / 2 - r.height / 2, s;
  switch (a) {
    case we:
      s = { x: i, y: t.y - r.height };
      break;
    case Le:
      s = { x: i, y: t.y + t.height };
      break;
    case Me:
      s = { x: t.x + t.width, y: u };
      break;
    case Ae:
      s = { x: t.x - r.width, y: u };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var c = a ? Ho(a) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (l) {
      case er:
        s[c] = s[c] - (t[d] / 2 - r[d] / 2);
        break;
      case Rr:
        s[c] = s[c] + (t[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function Fr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, a = n === void 0 ? e.placement : n, l = r.strategy, i = l === void 0 ? e.strategy : l, u = r.boundary, s = u === void 0 ? df : u, c = r.rootBoundary, d = c === void 0 ? Cu : c, m = r.elementContext, f = m === void 0 ? br : m, p = r.altBoundary, h = p === void 0 ? !1 : p, g = r.padding, x = g === void 0 ? 0 : g, y = Ru(typeof x != "number" ? x : Fu(x, Hr)), w = f === br ? pf : br, v = e.rects.popper, E = e.elements[h ? w : f], A = qf(jt(E) ? E : E.contextElement || At(e.elements.popper), s, d, i), S = rr(e.elements.reference), k = Du({ reference: S, element: v, strategy: "absolute", placement: a }), C = Xa(Object.assign({}, v, k)), T = f === br ? C : S, O = { top: A.top - T.top + y.top, bottom: T.bottom - A.bottom + y.bottom, left: A.left - T.left + y.left, right: T.right - A.right + y.right }, R = e.modifiersData.offset;
  if (f === br && R) {
    var $ = R[a];
    Object.keys(O).forEach(function(F) {
      var P = [Me, Le].indexOf(F) >= 0 ? 1 : -1, D = [we, Le].indexOf(F) >= 0 ? "y" : "x";
      O[F] += $[D] * P;
    });
  }
  return O;
}
function Uf(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, a = r.boundary, l = r.rootBoundary, i = r.padding, u = r.flipVariations, s = r.allowedAutoPlacements, c = s === void 0 ? ku : s, d = nr(n), m = d ? u ? oi : oi.filter(function(h) {
    return nr(h) === d;
  }) : Hr, f = m.filter(function(h) {
    return c.indexOf(h) >= 0;
  });
  f.length === 0 && (f = m);
  var p = f.reduce(function(h, g) {
    return h[g] = Fr(e, { placement: g, boundary: a, rootBoundary: l, padding: i })[ot(g)], h;
  }, {});
  return Object.keys(p).sort(function(h, g) {
    return p[h] - p[g];
  });
}
function Wf(e) {
  if (ot(e) === jn)
    return [];
  var t = sn(e);
  return [si(e), t, si(t)];
}
function Gf(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var a = r.mainAxis, l = a === void 0 ? !0 : a, i = r.altAxis, u = i === void 0 ? !0 : i, s = r.fallbackPlacements, c = r.padding, d = r.boundary, m = r.rootBoundary, f = r.altBoundary, p = r.flipVariations, h = p === void 0 ? !0 : p, g = r.allowedAutoPlacements, x = t.options.placement, y = ot(x), w = y === x, v = s || (w || !h ? [sn(x)] : Wf(x)), E = [x].concat(v).reduce(function(J, I) {
      return J.concat(ot(I) === jn ? Uf(t, { placement: I, boundary: d, rootBoundary: m, padding: c, flipVariations: h, allowedAutoPlacements: g }) : I);
    }, []), A = t.rects.reference, S = t.rects.popper, k = /* @__PURE__ */ new Map(), C = !0, T = E[0], O = 0; O < E.length; O++) {
      var R = E[O], $ = ot(R), F = nr(R) === er, P = [we, Le].indexOf($) >= 0, D = P ? "width" : "height", L = Fr(t, { placement: R, boundary: d, rootBoundary: m, altBoundary: f, padding: c }), j = P ? F ? Me : Ae : F ? Le : we;
      A[D] > S[D] && (j = sn(j));
      var V = sn(j), B = [];
      if (l && B.push(L[$] <= 0), u && B.push(L[j] <= 0, L[V] <= 0), B.every(function(J) {
        return J;
      })) {
        T = R, C = !1;
        break;
      }
      k.set(R, B);
    }
    if (C)
      for (var H = h ? 3 : 1, X = function(J) {
        var I = E.find(function(z) {
          var W = k.get(z);
          if (W)
            return W.slice(0, J).every(function(se) {
              return se;
            });
        });
        if (I)
          return T = I, "break";
      }, ne = H; ne > 0; ne--) {
        var K = X(ne);
        if (K === "break")
          break;
      }
    t.placement !== T && (t.modifiersData[n]._skip = !0, t.placement = T, t.reset = !0);
  }
}
var Yf = { name: "flip", enabled: !0, phase: "main", fn: Gf, requiresIfExists: ["offset"], data: { _skip: !1 } };
function ci(e, t, r) {
  return r === void 0 && (r = { x: 0, y: 0 }), { top: e.top - t.height - r.y, right: e.right - t.width + r.x, bottom: e.bottom - t.height + r.y, left: e.left - t.width - r.x };
}
function di(e) {
  return [we, Me, Le, Ae].some(function(t) {
    return e[t] >= 0;
  });
}
function Kf(e) {
  var t = e.state, r = e.name, n = t.rects.reference, a = t.rects.popper, l = t.modifiersData.preventOverflow, i = Fr(t, { elementContext: "reference" }), u = Fr(t, { altBoundary: !0 }), s = ci(i, n), c = ci(u, a, l), d = di(s), m = di(c);
  t.modifiersData[r] = { referenceClippingOffsets: s, popperEscapeOffsets: c, isReferenceHidden: d, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": m });
}
var Xf = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Kf };
function Jf(e, t, r) {
  var n = ot(e), a = [Ae, we].indexOf(n) >= 0 ? -1 : 1, l = typeof r == "function" ? r(Object.assign({}, t, { placement: e })) : r, i = l[0], u = l[1];
  return i = i || 0, u = (u || 0) * a, [Ae, Me].indexOf(n) >= 0 ? { x: u, y: i } : { x: i, y: u };
}
function Qf(e) {
  var t = e.state, r = e.options, n = e.name, a = r.offset, l = a === void 0 ? [0, 0] : a, i = ku.reduce(function(d, m) {
    return d[m] = Jf(m, t.rects, l), d;
  }, {}), u = i[t.placement], s = u.x, c = u.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = i;
}
var em = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Qf };
function tm(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Du({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var rm = { name: "popperOffsets", enabled: !0, phase: "read", fn: tm, data: {} };
function nm(e) {
  return e === "x" ? "y" : "x";
}
function am(e) {
  var t = e.state, r = e.options, n = e.name, a = r.mainAxis, l = a === void 0 ? !0 : a, i = r.altAxis, u = i === void 0 ? !1 : i, s = r.boundary, c = r.rootBoundary, d = r.altBoundary, m = r.padding, f = r.tether, p = f === void 0 ? !0 : f, h = r.tetherOffset, g = h === void 0 ? 0 : h, x = Fr(t, { boundary: s, rootBoundary: c, padding: m, altBoundary: d }), y = ot(t.placement), w = nr(t.placement), v = !w, E = Ho(y), A = nm(E), S = t.modifiersData.popperOffsets, k = t.rects.reference, C = t.rects.popper, T = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, O = typeof T == "number" ? { mainAxis: T, altAxis: T } : Object.assign({ mainAxis: 0, altAxis: 0 }, T), R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, $ = { x: 0, y: 0 };
  if (S) {
    if (l) {
      var F, P = E === "y" ? we : Ae, D = E === "y" ? Le : Me, L = E === "y" ? "height" : "width", j = S[E], V = j + x[P], B = j - x[D], H = p ? -C[L] / 2 : 0, X = w === er ? k[L] : C[L], ne = w === er ? -C[L] : -k[L], K = t.elements.arrow, J = p && K ? No(K) : { width: 0, height: 0 }, I = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ou(), z = I[P], W = I[D], se = xr(0, k[L], J[L]), be = v ? k[L] / 2 - H - se - z - O.mainAxis : X - se - z - O.mainAxis, it = v ? -k[L] / 2 + H + se + W + O.mainAxis : ne + se + W + O.mainAxis, Re = t.elements.arrow && Zr(t.elements.arrow), Ze = Re ? E === "y" ? Re.clientTop || 0 : Re.clientLeft || 0 : 0, M = (F = R == null ? void 0 : R[E]) != null ? F : 0, Pe = j + be - M - Ze, Ve = j + it - M, St = xr(p ? En(V, Pe) : V, j, p ? Mt(B, Ve) : B);
      S[E] = St, $[E] = St - j;
    }
    if (u) {
      var Vt, ze = E === "x" ? we : Ae, zr = E === "x" ? Le : Me, ye = S[A], Ct = A === "y" ? "height" : "width", qe = ye + x[ze], zt = ye - x[zr], Ue = [we, Ae].indexOf(y) !== -1, qt = (Vt = R == null ? void 0 : R[A]) != null ? Vt : 0, We = Ue ? qe : ye - k[Ct] - C[Ct] - qt + O.altAxis, fe = Ue ? ye + k[Ct] + C[Ct] - qt - O.altAxis : zt, je = p && Ue ? Tf(We, ye, fe) : xr(p ? We : qe, ye, p ? fe : zt);
      S[A] = je, $[A] = je - ye;
    }
    t.modifiersData[n] = $;
  }
}
var om = { name: "preventOverflow", enabled: !0, phase: "main", fn: am, requiresIfExists: ["offset"] };
function lm(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function im(e) {
  return e === ke(e) || !De(e) ? Zo(e) : lm(e);
}
function sm(e) {
  var t = e.getBoundingClientRect(), r = tr(t.width) / e.offsetWidth || 1, n = tr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function um(e, t, r) {
  r === void 0 && (r = !1);
  var n = De(t), a = De(t) && sm(t), l = At(t), i = rr(e, a, r), u = { scrollLeft: 0, scrollTop: 0 }, s = { x: 0, y: 0 };
  return (n || !n && !r) && ((lt(t) !== "body" || zo(l)) && (u = im(t)), De(t) ? (s = rr(t, !0), s.x += t.clientLeft, s.y += t.clientTop) : l && (s.x = Vo(l))), { x: i.left + u.scrollLeft - s.x, y: i.top + u.scrollTop - s.y, width: i.width, height: i.height };
}
function cm(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(l) {
    t.set(l.name, l);
  });
  function a(l) {
    r.add(l.name);
    var i = [].concat(l.requires || [], l.requiresIfExists || []);
    i.forEach(function(u) {
      if (!r.has(u)) {
        var s = t.get(u);
        s && a(s);
      }
    }), n.push(l);
  }
  return e.forEach(function(l) {
    r.has(l.name) || a(l);
  }), n;
}
function dm(e) {
  var t = cm(e);
  return wf.reduce(function(r, n) {
    return r.concat(t.filter(function(a) {
      return a.phase === n;
    }));
  }, []);
}
function pm(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function fm(e) {
  var t = e.reduce(function(r, n) {
    var a = r[n.name];
    return r[n.name] = a ? Object.assign({}, a, n, { options: Object.assign({}, a.options, n.options), data: Object.assign({}, a.data, n.data) }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var pi = { placement: "bottom", modifiers: [], strategy: "absolute" };
function fi() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function mm(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, a = t.defaultOptions, l = a === void 0 ? pi : a;
  return function(i, u, s) {
    s === void 0 && (s = l);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, pi, l), modifiersData: {}, elements: { reference: i, popper: u }, attributes: {}, styles: {} }, d = [], m = !1, f = { state: c, setOptions: function(g) {
      var x = typeof g == "function" ? g(c.options) : g;
      h(), c.options = Object.assign({}, l, c.options, x), c.scrollParents = { reference: jt(i) ? wr(i) : i.contextElement ? wr(i.contextElement) : [], popper: wr(u) };
      var y = dm(fm([].concat(n, c.options.modifiers)));
      return c.orderedModifiers = y.filter(function(w) {
        return w.enabled;
      }), p(), f.update();
    }, forceUpdate: function() {
      if (!m) {
        var g = c.elements, x = g.reference, y = g.popper;
        if (fi(x, y)) {
          c.rects = { reference: um(x, Zr(y), c.options.strategy === "fixed"), popper: No(y) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(C) {
            return c.modifiersData[C.name] = Object.assign({}, C.data);
          });
          for (var w = 0; w < c.orderedModifiers.length; w++) {
            if (c.reset === !0) {
              c.reset = !1, w = -1;
              continue;
            }
            var v = c.orderedModifiers[w], E = v.fn, A = v.options, S = A === void 0 ? {} : A, k = v.name;
            typeof E == "function" && (c = E({ state: c, options: S, name: k, instance: f }) || c);
          }
        }
      }
    }, update: pm(function() {
      return new Promise(function(g) {
        f.forceUpdate(), g(c);
      });
    }), destroy: function() {
      h(), m = !0;
    } };
    if (!fi(i, u))
      return f;
    f.setOptions(s).then(function(g) {
      !m && s.onFirstUpdate && s.onFirstUpdate(g);
    });
    function p() {
      c.orderedModifiers.forEach(function(g) {
        var x = g.name, y = g.options, w = y === void 0 ? {} : y, v = g.effect;
        if (typeof v == "function") {
          var E = v({ state: c, name: x, instance: f, options: w }), A = function() {
          };
          d.push(E || A);
        }
      });
    }
    function h() {
      d.forEach(function(g) {
        return g();
      }), d = [];
    }
    return f;
  };
}
var gm = [Pf, rm, Bf, Cf, em, Yf, om, $f, Xf], hm = mm({ defaultModifiers: gm }), bm = _e(cf()), ym = [], vm = function(e, t, r) {
  r === void 0 && (r = {});
  var n = b.useRef(null), a = { onFirstUpdate: r.onFirstUpdate, placement: r.placement || "bottom", strategy: r.strategy || "absolute", modifiers: r.modifiers || ym }, l = b.useState({ styles: { popper: { position: a.strategy, left: "0", top: "0" }, arrow: { position: "absolute" } }, attributes: {} }), i = l[0], u = l[1], s = b.useMemo(function() {
    return { name: "updateState", enabled: !0, phase: "write", fn: function(m) {
      var f = m.state, p = Object.keys(f.elements);
      fs.flushSync(function() {
        u({ styles: ni(p.map(function(h) {
          return [h, f.styles[h] || {}];
        })), attributes: ni(p.map(function(h) {
          return [h, f.attributes[h]];
        })) });
      });
    }, requires: ["computeStyles"] };
  }, []), c = b.useMemo(function() {
    var m = { onFirstUpdate: a.onFirstUpdate, placement: a.placement, strategy: a.strategy, modifiers: [].concat(a.modifiers, [s, { name: "applyStyles", enabled: !1 }]) };
    return (0, bm.default)(n.current, m) ? n.current || m : (n.current = m, m);
  }, [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, s]), d = b.useRef();
  return ai(function() {
    d.current && d.current.setOptions(c);
  }, [c]), ai(function() {
    if (!(e == null || t == null)) {
      var m = r.createPopper || hm, f = m(e, t, c);
      return d.current = f, function() {
        f.destroy(), d.current = null;
      };
    }
  }, [e, t, r.createPopper]), { state: d.current ? d.current.state : null, styles: i.styles, attributes: i.attributes, update: d.current ? d.current.update : null, forceUpdate: d.current ? d.current.forceUpdate : null };
};
function Lu(e) {
  var t = b.useRef(e);
  return t.current = e, b.useCallback(function() {
    return t.current;
  }, []);
}
var Em = function() {
};
function xm(e) {
  var t = e.initial, r = e.value, n = e.onChange, a = n === void 0 ? Em : n;
  if (t === void 0 && r === void 0)
    throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');
  var l = b.useState(t), i = l[0], u = l[1], s = Lu(i), c = b.useCallback(function(m) {
    var f = s(), p = typeof m == "function" ? m(f) : m;
    typeof p.persist == "function" && p.persist(), u(p), typeof a == "function" && a(p);
  }, [s, a]), d = r !== void 0;
  return [d ? r : i, d ? a : c];
}
function Mu(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), function() {
    return { width: 0, height: 0, top: t, right: e, bottom: t, left: e, x: 0, y: 0, toJSON: function() {
      return null;
    } };
  };
}
var wm = ["styles", "attributes"], mi = { getBoundingClientRect: Mu() }, gi = { closeOnOutsideClick: !0, closeOnTriggerHidden: !1, defaultVisible: !1, delayHide: 0, delayShow: 0, followCursor: !1, interactive: !1, mutationObserverOptions: { attributes: !0, childList: !0, subtree: !0 }, offset: [0, 6], trigger: "hover" };
function Am(e, t) {
  var r, n, a;
  e === void 0 && (e = {}), t === void 0 && (t = {});
  var l = Object.keys(gi).reduce(function(D, L) {
    var j;
    return U({}, D, (j = {}, j[L] = D[L] !== void 0 ? D[L] : gi[L], j));
  }, e), i = b.useMemo(function() {
    return [{ name: "offset", options: { offset: l.offset } }];
  }, Array.isArray(l.offset) ? l.offset : []), u = U({}, t, { placement: t.placement || l.placement, modifiers: t.modifiers || i }), s = b.useState(null), c = s[0], d = s[1], m = b.useState(null), f = m[0], p = m[1], h = xm({ initial: l.defaultVisible, value: l.visible, onChange: l.onVisibleChange }), g = h[0], x = h[1], y = b.useRef();
  b.useEffect(function() {
    return function() {
      return clearTimeout(y.current);
    };
  }, []);
  var w = vm(l.followCursor ? mi : c, f, u), v = w.styles, E = w.attributes, A = Oo(w, wm), S = A.update, k = Lu({ visible: g, triggerRef: c, tooltipRef: f, finalConfig: l }), C = b.useCallback(function(D) {
    return Array.isArray(l.trigger) ? l.trigger.includes(D) : l.trigger === D;
  }, Array.isArray(l.trigger) ? l.trigger : [l.trigger]), T = b.useCallback(function() {
    clearTimeout(y.current), y.current = window.setTimeout(function() {
      return x(!1);
    }, l.delayHide);
  }, [l.delayHide, x]), O = b.useCallback(function() {
    clearTimeout(y.current), y.current = window.setTimeout(function() {
      return x(!0);
    }, l.delayShow);
  }, [l.delayShow, x]), R = b.useCallback(function() {
    k().visible ? T() : O();
  }, [k, T, O]);
  b.useEffect(function() {
    if (k().finalConfig.closeOnOutsideClick) {
      var D = function(L) {
        var j, V = k(), B = V.tooltipRef, H = V.triggerRef, X = (L.composedPath == null || (j = L.composedPath()) == null ? void 0 : j[0]) || L.target;
        X instanceof Node && B != null && H != null && !B.contains(X) && !H.contains(X) && T();
      };
      return document.addEventListener("mousedown", D), function() {
        return document.removeEventListener("mousedown", D);
      };
    }
  }, [k, T]), b.useEffect(function() {
    if (!(c == null || !C("click")))
      return c.addEventListener("click", R), function() {
        return c.removeEventListener("click", R);
      };
  }, [c, C, R]), b.useEffect(function() {
    if (!(c == null || !C("double-click")))
      return c.addEventListener("dblclick", R), function() {
        return c.removeEventListener("dblclick", R);
      };
  }, [c, C, R]), b.useEffect(function() {
    if (!(c == null || !C("right-click"))) {
      var D = function(L) {
        L.preventDefault(), R();
      };
      return c.addEventListener("contextmenu", D), function() {
        return c.removeEventListener("contextmenu", D);
      };
    }
  }, [c, C, R]), b.useEffect(function() {
    if (!(c == null || !C("focus")))
      return c.addEventListener("focus", O), c.addEventListener("blur", T), function() {
        c.removeEventListener("focus", O), c.removeEventListener("blur", T);
      };
  }, [c, C, O, T]), b.useEffect(function() {
    if (!(c == null || !C("hover")))
      return c.addEventListener("mouseenter", O), c.addEventListener("mouseleave", T), function() {
        c.removeEventListener("mouseenter", O), c.removeEventListener("mouseleave", T);
      };
  }, [c, C, O, T]), b.useEffect(function() {
    if (!(f == null || !C("hover") || !k().finalConfig.interactive))
      return f.addEventListener("mouseenter", O), f.addEventListener("mouseleave", T), function() {
        f.removeEventListener("mouseenter", O), f.removeEventListener("mouseleave", T);
      };
  }, [f, C, O, T, k]);
  var $ = A == null || (r = A.state) == null || (n = r.modifiersData) == null || (a = n.hide) == null ? void 0 : a.isReferenceHidden;
  b.useEffect(function() {
    l.closeOnTriggerHidden && $ && T();
  }, [l.closeOnTriggerHidden, T, $]), b.useEffect(function() {
    if (!l.followCursor || c == null)
      return;
    function D(L) {
      var j = L.clientX, V = L.clientY;
      mi.getBoundingClientRect = Mu(j, V), S == null || S();
    }
    return c.addEventListener("mousemove", D), function() {
      return c.removeEventListener("mousemove", D);
    };
  }, [l.followCursor, c, S]), b.useEffect(function() {
    if (!(f == null || S == null || l.mutationObserverOptions == null)) {
      var D = new MutationObserver(S);
      return D.observe(f, l.mutationObserverOptions), function() {
        return D.disconnect();
      };
    }
  }, [l.mutationObserverOptions, f, S]);
  var F = function(D) {
    return D === void 0 && (D = {}), U({}, D, { style: U({}, D.style, v.popper) }, E.popper, { "data-popper-interactive": l.interactive });
  }, P = function(D) {
    return D === void 0 && (D = {}), U({}, D, E.arrow, { style: U({}, D.style, v.arrow), "data-popper-arrow": !0 });
  };
  return U({ getArrowProps: P, getTooltipProps: F, setTooltipRef: p, setTriggerRef: d, tooltipRef: f, triggerRef: c, visible: g }, A);
}
var Fe = Nt(1e3)((e, t, r, n = 0) => t.split("-")[0] === e ? r : n), gt = 8, Sm = _.div({ position: "absolute", borderStyle: "solid" }, ({ placement: e }) => {
  let t = 0, r = 0;
  switch (!0) {
    case (e.startsWith("left") || e.startsWith("right")): {
      r = 8;
      break;
    }
    case (e.startsWith("top") || e.startsWith("bottom")): {
      t = 8;
      break;
    }
  }
  return { transform: `translate3d(${t}px, ${r}px, 0px)` };
}, ({ theme: e, color: t, placement: r }) => ({ bottom: `${Fe("top", r, `${gt * -1}px`, "auto")}`, top: `${Fe("bottom", r, `${gt * -1}px`, "auto")}`, right: `${Fe("left", r, `${gt * -1}px`, "auto")}`, left: `${Fe("right", r, `${gt * -1}px`, "auto")}`, borderBottomWidth: `${Fe("top", r, "0", gt)}px`, borderTopWidth: `${Fe("bottom", r, "0", gt)}px`, borderRightWidth: `${Fe("left", r, "0", gt)}px`, borderLeftWidth: `${Fe("right", r, "0", gt)}px`, borderTopColor: Fe("top", r, e.color[t] || t || e.base === "light" ? Er(e.background.app) : e.background.app, "transparent"), borderBottomColor: Fe("bottom", r, e.color[t] || t || e.base === "light" ? Er(e.background.app) : e.background.app, "transparent"), borderLeftColor: Fe("left", r, e.color[t] || t || e.base === "light" ? Er(e.background.app) : e.background.app, "transparent"), borderRightColor: Fe("right", r, e.color[t] || t || e.base === "light" ? Er(e.background.app) : e.background.app, "transparent") })), Cm = _.div(({ hidden: e }) => ({ display: e ? "none" : "inline-block", zIndex: 2147483647 }), ({ theme: e, color: t, hasChrome: r }) => r ? { background: e.color[t] || t || e.base === "light" ? Er(e.background.app) : e.background.app, filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `, borderRadius: e.appBorderRadius, fontSize: e.typography.size.s1 } : {}), qo = o.forwardRef(({ placement: e, hasChrome: t, children: r, arrowProps: n, tooltipRef: a, color: l, withArrows: i, ...u }, s) => o.createElement(Cm, { "data-testid": "tooltip", hasChrome: t, ref: s, ...u, color: l }, t && i && o.createElement(Sm, { placement: e, ...n, color: l }), r));
qo.displayName = "Tooltip";
qo.defaultProps = { color: void 0, tooltipRef: void 0, hasChrome: !0, placement: "top", arrowProps: {} };
var { document: un } = uf, km = _.div`
  display: inline-block;
  cursor: ${(e) => e.trigger === "hover" || e.trigger.includes("hover") ? "default" : "pointer"};
`, _m = _.g`
  cursor: ${(e) => e.trigger === "hover" || e.trigger.includes("hover") ? "default" : "pointer"};
`, Bu = ({ svg: e, trigger: t, closeOnOutsideClick: r, placement: n, hasChrome: a, withArrows: l, offset: i, tooltip: u, children: s, closeOnTriggerHidden: c, mutationObserverOptions: d, closeOnClick: m, tooltipShown: f, onVisibilityChange: p, defaultVisible: h, delayHide: g, visible: x, interactive: y, delayShow: w, modifiers: v, strategy: E, followCursor: A, onVisibleChange: S, ...k }) => {
  let C = e ? _m : km, { getArrowProps: T, getTooltipProps: O, setTooltipRef: R, setTriggerRef: $, visible: F, state: P } = Am({ trigger: t, placement: n, defaultVisible: h ?? f, delayHide: g, interactive: y, closeOnOutsideClick: r ?? m, closeOnTriggerHidden: c, onVisibleChange: (L) => {
    p == null || p(L), S == null || S(L);
  }, delayShow: w, followCursor: A, mutationObserverOptions: d, visible: x, offset: i }, { modifiers: v, strategy: E }), D = o.createElement(qo, { placement: P == null ? void 0 : P.placement, ref: R, hasChrome: a, arrowProps: T(), withArrows: l, ...O() }, typeof u == "function" ? u({ onHide: () => S(!1) }) : u);
  return o.createElement(o.Fragment, null, o.createElement(C, { trigger: t, ref: $, ...k }, s), F && B0.createPortal(D, un.body));
};
Bu.defaultProps = { svg: !1, trigger: "click", closeOnOutsideClick: !1, placement: "top", modifiers: [{ name: "preventOverflow", options: { padding: 8 } }, { name: "offset", options: { offset: [8, 8] } }, { name: "arrow", options: { padding: 8 } }], hasChrome: !0, defaultVisible: !1 };
var Tm = ({ startOpen: e = !1, onVisibleChange: t, ...r }) => {
  let [n, a] = b.useState(e), l = b.useCallback((i) => {
    t && t(i) === !1 || a(i);
  }, [t]);
  return b.useEffect(() => {
    let i = () => l(!1);
    un.addEventListener("keydown", i, !1);
    let u = Array.from(un.getElementsByTagName("iframe")), s = [];
    return u.forEach((c) => {
      let d = () => {
        try {
          c.contentWindow.document && (c.contentWindow.document.addEventListener("click", i), s.push(() => {
            try {
              c.contentWindow.document.removeEventListener("click", i);
            } catch {
            }
          }));
        } catch {
        }
      };
      d(), c.addEventListener("load", d), s.push(() => {
        c.removeEventListener("load", d);
      });
    }), () => {
      un.removeEventListener("keydown", i), s.forEach((c) => {
        c();
      });
    };
  }), o.createElement(Bu, { ...r, visible: n, onVisibleChange: l });
};
function Om(e, t) {
  var r = b.useRef(null), n = b.useRef(null);
  n.current = t;
  var a = b.useRef(null);
  b.useEffect(function() {
    l();
  });
  var l = b.useCallback(function() {
    var i = a.current, u = n.current, s = i || (u ? u instanceof Element ? u : u.current : null);
    r.current && r.current.element === s && r.current.subscriber === e || (r.current && r.current.cleanup && r.current.cleanup(), r.current = {
      element: s,
      subscriber: e,
      // Only calling the subscriber, if there's an actual element to report.
      // Setting cleanup to undefined unless a subscriber returns one, as an existing cleanup function would've been just called.
      cleanup: s ? e(s) : void 0
    });
  }, [e]);
  return b.useEffect(function() {
    return function() {
      r.current && r.current.cleanup && (r.current.cleanup(), r.current = null);
    };
  }, []), b.useCallback(function(i) {
    a.current = i, l();
  }, [l]);
}
function hi(e, t, r) {
  return e[t] ? e[t][0] ? e[t][0][r] : (
    // TS complains about this, because the RO entry type follows the spec and does not reflect Firefox's current
    // behaviour of returning objects instead of arrays for `borderBoxSize` and `contentBoxSize`.
    // @ts-ignore
    e[t][r]
  ) : t === "contentBoxSize" ? e.contentRect[r === "inlineSize" ? "width" : "height"] : void 0;
}
function Iu(e) {
  e === void 0 && (e = {});
  var t = e.onResize, r = b.useRef(void 0);
  r.current = t;
  var n = e.round || Math.round, a = b.useRef(), l = b.useState({
    width: void 0,
    height: void 0
  }), i = l[0], u = l[1], s = b.useRef(!1);
  b.useEffect(function() {
    return s.current = !1, function() {
      s.current = !0;
    };
  }, []);
  var c = b.useRef({
    width: void 0,
    height: void 0
  }), d = Om(b.useCallback(function(m) {
    return (!a.current || a.current.box !== e.box || a.current.round !== n) && (a.current = {
      box: e.box,
      round: n,
      instance: new ResizeObserver(function(f) {
        var p = f[0], h = e.box === "border-box" ? "borderBoxSize" : e.box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", g = hi(p, h, "inlineSize"), x = hi(p, h, "blockSize"), y = g ? n(g) : void 0, w = x ? n(x) : void 0;
        if (c.current.width !== y || c.current.height !== w) {
          var v = {
            width: y,
            height: w
          };
          c.current.width = y, c.current.height = w, r.current ? r.current(v) : s.current || u(v);
        }
      })
    }), a.current.instance.observe(m, {
      box: e.box
    }), function() {
      a.current && a.current.instance.unobserve(m);
    };
  }, [e.box, n]), e.ref);
  return b.useMemo(function() {
    return {
      ref: d,
      width: i.width,
      height: i.height
    };
  }, [d, i.width, i.height]);
}
const { global: Rm } = __STORYBOOK_MODULE_GLOBAL__;
var ee = ({ ...e }, t) => {
  let r = [e.class, e.className];
  return delete e.class, e.className = ["sbdocs", `sbdocs-${t}`, ...r].filter(Boolean).join(" "), e;
};
function Fm(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function $r(e, t) {
  return $r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, $r(e, t);
}
function $m(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, $r(e, t);
}
function Ja(e) {
  return Ja = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Ja(e);
}
function Dm(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Lm() {
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
function cn(e, t, r) {
  return Lm() ? cn = Reflect.construct.bind() : cn = function(n, a, l) {
    var i = [null];
    i.push.apply(i, a);
    var u = Function.bind.apply(n, i), s = new u();
    return l && $r(s, l.prototype), s;
  }, cn.apply(null, arguments);
}
function Qa(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Qa = function(r) {
    if (r === null || !Dm(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, n);
    }
    function n() {
      return cn(r, arguments, Ja(this).constructor);
    }
    return n.prototype = Object.create(r.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), $r(n, r);
  }, Qa(e);
}
var Mm = { 1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`, 2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`, 3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`, 4: `Couldn't generate valid rgb string from %s, it returned %s.

`, 5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`, 6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`, 7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`, 8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`, 9: `Please provide a number of steps to the modularScale helper.

`, 10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`, 11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`, 12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`, 13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`, 14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`, 15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`, 16: `You must provide a template to this method.

`, 17: `You passed an unsupported selector state to this method.

`, 18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`, 19: `fromSize and toSize must be provided as stringified numbers with the same units.

`, 20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`, 21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n", 22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n", 23: `fontFace expects a name of a font-family.

`, 24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`, 25: `fontFace expects localFonts to be an array.

`, 26: `fontFace expects fileFormats to be an array.

`, 27: `radialGradient requries at least 2 color-stops to properly render.

`, 28: `Please supply a filename to retinaImage() as the first argument.

`, 29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`, 30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n", 31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`, 32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`, 33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`, 34: `borderRadius expects a radius value as a string or number as the second argument.

`, 35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`, 36: `Property must be a string value.

`, 37: `Syntax Error at %s.

`, 38: `Formula contains a function that needs parentheses at %s.

`, 39: `Formula is missing closing parenthesis at %s.

`, 40: `Formula has too many closing parentheses at %s.

`, 41: `All values in a formula must have the same unit or be unitless.

`, 42: `Please provide a number of steps to the modularScale helper.

`, 43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`, 44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`, 45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`, 46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`, 47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`, 48: `fromSize and toSize must be provided as stringified numbers with the same units.

`, 49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`, 50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`, 51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`, 52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`, 53: `fontFace expects localFonts to be an array.

`, 54: `fontFace expects fileFormats to be an array.

`, 55: `fontFace expects a name of a font-family.

`, 56: `linearGradient requries at least 2 color-stops to properly render.

`, 57: `radialGradient requries at least 2 color-stops to properly render.

`, 58: `Please supply a filename to retinaImage() as the first argument.

`, 59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`, 60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n", 61: `Property must be a string value.

`, 62: `borderRadius expects a radius value as a string or number as the second argument.

`, 63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`, 64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`, 65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`, 66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`, 67: `You must provide a template to this method.

`, 68: `You passed an unsupported selector state to this method.

`, 69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`, 70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`, 71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`, 72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`, 73: `Please provide a valid CSS variable.

`, 74: `CSS variable not found and no default was provided.

`, 75: `important requires a valid style object, got a %s instead.

`, 76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`, 77: `remToPx expects a value in "rem" but you provided it in "%s".

`, 78: `base must be set in "px" or "%" but you set it in "%s".
` };
function Bm() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], a = [], l;
  for (l = 1; l < t.length; l += 1)
    a.push(t[l]);
  return a.forEach(function(i) {
    n = n.replace(/%[a-z]/, i);
  }), n;
}
var rt = function(e) {
  $m(t, e);
  function t(r) {
    var n;
    if (process.env.NODE_ENV === "production")
      n = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + r + " for more information.") || this;
    else {
      for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++)
        l[i - 1] = arguments[i];
      n = e.call(this, Bm.apply(void 0, [Mm[r]].concat(l))) || this;
    }
    return Fm(n);
  }
  return t;
}(Qa(Error));
function ha(e) {
  return Math.round(e * 255);
}
function Im(e, t, r) {
  return ha(e) + "," + ha(t) + "," + ha(r);
}
function Dr(e, t, r, n) {
  if (n === void 0 && (n = Im), t === 0)
    return n(r, r, r);
  var a = (e % 360 + 360) % 360 / 60, l = (1 - Math.abs(2 * r - 1)) * t, i = l * (1 - Math.abs(a % 2 - 1)), u = 0, s = 0, c = 0;
  a >= 0 && a < 1 ? (u = l, s = i) : a >= 1 && a < 2 ? (u = i, s = l) : a >= 2 && a < 3 ? (s = l, c = i) : a >= 3 && a < 4 ? (s = i, c = l) : a >= 4 && a < 5 ? (u = i, c = l) : a >= 5 && a < 6 && (u = l, c = i);
  var d = r - l / 2, m = u + d, f = s + d, p = c + d;
  return n(m, f, p);
}
var bi = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "639", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };
function Pm(e) {
  if (typeof e != "string")
    return e;
  var t = e.toLowerCase();
  return bi[t] ? "#" + bi[t] : e;
}
var jm = /^#[a-fA-F0-9]{6}$/, Nm = /^#[a-fA-F0-9]{8}$/, Hm = /^#[a-fA-F0-9]{3}$/, Zm = /^#[a-fA-F0-9]{4}$/, ba = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, Vm = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, zm = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, qm = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Uo(e) {
  if (typeof e != "string")
    throw new rt(3);
  var t = Pm(e);
  if (t.match(jm))
    return { red: parseInt("" + t[1] + t[2], 16), green: parseInt("" + t[3] + t[4], 16), blue: parseInt("" + t[5] + t[6], 16) };
  if (t.match(Nm)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return { red: parseInt("" + t[1] + t[2], 16), green: parseInt("" + t[3] + t[4], 16), blue: parseInt("" + t[5] + t[6], 16), alpha: r };
  }
  if (t.match(Hm))
    return { red: parseInt("" + t[1] + t[1], 16), green: parseInt("" + t[2] + t[2], 16), blue: parseInt("" + t[3] + t[3], 16) };
  if (t.match(Zm)) {
    var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return { red: parseInt("" + t[1] + t[1], 16), green: parseInt("" + t[2] + t[2], 16), blue: parseInt("" + t[3] + t[3], 16), alpha: n };
  }
  var a = ba.exec(t);
  if (a)
    return { red: parseInt("" + a[1], 10), green: parseInt("" + a[2], 10), blue: parseInt("" + a[3], 10) };
  var l = Vm.exec(t.substring(0, 50));
  if (l)
    return { red: parseInt("" + l[1], 10), green: parseInt("" + l[2], 10), blue: parseInt("" + l[3], 10), alpha: parseFloat("" + l[4]) > 1 ? parseFloat("" + l[4]) / 100 : parseFloat("" + l[4]) };
  var i = zm.exec(t);
  if (i) {
    var u = parseInt("" + i[1], 10), s = parseInt("" + i[2], 10) / 100, c = parseInt("" + i[3], 10) / 100, d = "rgb(" + Dr(u, s, c) + ")", m = ba.exec(d);
    if (!m)
      throw new rt(4, t, d);
    return { red: parseInt("" + m[1], 10), green: parseInt("" + m[2], 10), blue: parseInt("" + m[3], 10) };
  }
  var f = qm.exec(t.substring(0, 50));
  if (f) {
    var p = parseInt("" + f[1], 10), h = parseInt("" + f[2], 10) / 100, g = parseInt("" + f[3], 10) / 100, x = "rgb(" + Dr(p, h, g) + ")", y = ba.exec(x);
    if (!y)
      throw new rt(4, t, x);
    return { red: parseInt("" + y[1], 10), green: parseInt("" + y[2], 10), blue: parseInt("" + y[3], 10), alpha: parseFloat("" + f[4]) > 1 ? parseFloat("" + f[4]) / 100 : parseFloat("" + f[4]) };
  }
  throw new rt(5);
}
function Um(e) {
  var t = e.red / 255, r = e.green / 255, n = e.blue / 255, a = Math.max(t, r, n), l = Math.min(t, r, n), i = (a + l) / 2;
  if (a === l)
    return e.alpha !== void 0 ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha } : { hue: 0, saturation: 0, lightness: i };
  var u, s = a - l, c = i > 0.5 ? s / (2 - a - l) : s / (a + l);
  switch (a) {
    case t:
      u = (r - n) / s + (r < n ? 6 : 0);
      break;
    case r:
      u = (n - t) / s + 2;
      break;
    default:
      u = (t - r) / s + 4;
      break;
  }
  return u *= 60, e.alpha !== void 0 ? { hue: u, saturation: c, lightness: i, alpha: e.alpha } : { hue: u, saturation: c, lightness: i };
}
function Pu(e) {
  return Um(Uo(e));
}
var Wm = function(e) {
  return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? "#" + e[1] + e[3] + e[5] : e;
}, eo = Wm;
function Ot(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function ya(e) {
  return Ot(Math.round(e * 255));
}
function Gm(e, t, r) {
  return eo("#" + ya(e) + ya(t) + ya(r));
}
function xn(e, t, r) {
  return Dr(e, t, r, Gm);
}
function Ym(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return xn(e, t, r);
  if (typeof e == "object" && t === void 0 && r === void 0)
    return xn(e.hue, e.saturation, e.lightness);
  throw new rt(1);
}
function Km(e, t, r, n) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
    return n >= 1 ? xn(e, t, r) : "rgba(" + Dr(e, t, r) + "," + n + ")";
  if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1 ? xn(e.hue, e.saturation, e.lightness) : "rgba(" + Dr(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new rt(2);
}
function to(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return eo("#" + Ot(e) + Ot(t) + Ot(r));
  if (typeof e == "object" && t === void 0 && r === void 0)
    return eo("#" + Ot(e.red) + Ot(e.green) + Ot(e.blue));
  throw new rt(6);
}
function ct(e, t, r, n) {
  if (typeof e == "string" && typeof t == "number") {
    var a = Uo(e);
    return "rgba(" + a.red + "," + a.green + "," + a.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
      return n >= 1 ? to(e, t, r) : "rgba(" + e + "," + t + "," + r + "," + n + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1 ? to(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new rt(7);
}
var Xm = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, Jm = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && typeof e.alpha == "number";
}, Qm = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, eg = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && typeof e.alpha == "number";
};
function ju(e) {
  if (typeof e != "object")
    throw new rt(8);
  if (Jm(e))
    return ct(e);
  if (Xm(e))
    return to(e);
  if (eg(e))
    return Km(e);
  if (Qm(e))
    return Ym(e);
  throw new rt(8);
}
function Nu(e, t, r) {
  return function() {
    var n = r.concat(Array.prototype.slice.call(arguments));
    return n.length >= t ? e.apply(this, n) : Nu(e, t, n);
  };
}
function Wo(e) {
  return Nu(e, e.length, []);
}
function Go(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function tg(e, t) {
  if (t === "transparent")
    return t;
  var r = Pu(t);
  return ju(U({}, r, { lightness: Go(0, 1, r.lightness - parseFloat(e)) }));
}
var rg = Wo(tg), Yt = rg;
function ng(e, t) {
  if (t === "transparent")
    return t;
  var r = Pu(t);
  return ju(U({}, r, { lightness: Go(0, 1, r.lightness + parseFloat(e)) }));
}
var ag = Wo(ng), og = ag;
function lg(e, t) {
  if (t === "transparent")
    return t;
  var r = Uo(t), n = typeof r.alpha == "number" ? r.alpha : 1, a = U({}, r, { alpha: Go(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100) });
  return ct(a);
}
var ig = Wo(lg), Ee = ig, sr = ({ theme: e }) => ({ margin: "20px 0 8px", padding: 0, cursor: "text", position: "relative", color: e.color.defaultText, "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& tt, & code": { fontSize: "inherit" } }), mt = ({ theme: e }) => ({ lineHeight: 1, margin: "0 2px", padding: "3px 5px", whiteSpace: "nowrap", borderRadius: 3, fontSize: e.typography.size.s2 - 1, border: e.base === "light" ? `1px solid ${e.color.mediumlight}` : `1px solid ${e.color.darker}`, color: e.base === "light" ? Ee(0.1, e.color.defaultText) : Ee(0.3, e.color.defaultText), backgroundColor: e.base === "light" ? e.color.lighter : e.color.border }), re = ({ theme: e }) => ({ fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }), Zt = { margin: "16px 0" }, sg = ({ href: e, children: t, ...r }) => {
  let n = /^\//.test(e), a = /^#.*/.test(e), l = n ? `./?path=${e}` : e;
  return o.createElement("a", { href: l, target: a ? "_self" : "_top", ...r }, t);
}, Hu = _(sg)(re, ({ theme: e }) => ({ fontSize: "inherit", lineHeight: "24px", color: e.color.secondary, textDecoration: "none", "&.absent": { color: "#cc0000" }, "&.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 } })), Zu = _.blockquote(re, Zt, ({ theme: e }) => ({ borderLeft: `4px solid ${e.color.medium}`, padding: "0 15px", color: e.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } })), ug = (e) => typeof e == "string", cg = /[\n\r]/g, dg = _.code(({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", display: "inline-block", paddingLeft: 2, paddingRight: 2, verticalAlign: "baseline", color: "inherit" }), mt), pg = _(Po)(({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, fontSize: `${e.typography.size.s2 - 1}px`, lineHeight: "19px", margin: "25px 0 40px", borderRadius: e.appBorderRadius, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", "pre.prismjs": { padding: 20, background: "inherit" } })), Yo = ({ className: e, children: t, ...r }) => {
  let n = (e || "").match(/lang-(\S+)/), a = b.Children.toArray(t);
  return a.filter(ug).some((l) => l.match(cg)) ? o.createElement(pg, { bordered: !0, copyable: !0, language: (n == null ? void 0 : n[1]) ?? "plaintext", format: !1, ...r }, t) : o.createElement(dg, { ...r, className: e }, a);
}, Vu = _.div(re), zu = _.dl(re, { ...Zt, padding: 0, "& dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", padding: 0, margin: "16px 0 4px" }, "& dt:first-of-type": { padding: 0 }, "& dt > :first-of-type": { marginTop: 0 }, "& dt > :last-child": { marginBottom: 0 }, "& dd": { margin: "0 0 16px", padding: "0 15px" }, "& dd > :first-of-type": { marginTop: 0 }, "& dd > :last-child": { marginBottom: 0 } }), qu = _.h1(re, sr, ({ theme: e }) => ({ fontSize: `${e.typography.size.l1}px`, fontWeight: e.typography.weight.bold })), Ko = _.h2(re, sr, ({ theme: e }) => ({ fontSize: `${e.typography.size.m2}px`, paddingBottom: 4, borderBottom: `1px solid ${e.appBorderColor}` })), Xo = _.h3(re, sr, ({ theme: e }) => ({ fontSize: `${e.typography.size.m1}px` })), Uu = _.h4(re, sr, ({ theme: e }) => ({ fontSize: `${e.typography.size.s3}px` })), Wu = _.h5(re, sr, ({ theme: e }) => ({ fontSize: `${e.typography.size.s2}px` })), Gu = _.h6(re, sr, ({ theme: e }) => ({ fontSize: `${e.typography.size.s2}px`, color: e.color.dark })), Yu = _.hr(({ theme: e }) => ({ border: "0 none", borderTop: `1px solid ${e.appBorderColor}`, height: 4, padding: 0 })), Ku = _.img({ maxWidth: "100%" }), Xu = _.li(re, ({ theme: e }) => ({ fontSize: e.typography.size.s2, color: e.color.defaultText, lineHeight: "24px", "& + li": { marginTop: ".25em" }, "& ul, & ol": { marginTop: ".25em", marginBottom: 0 }, "& code": mt({ theme: e }) })), fg = { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, Ju = _.ol(re, Zt, { ...fg, listStyle: "decimal" }), Qu = _.p(re, Zt, ({ theme: e }) => ({ fontSize: e.typography.size.s2, lineHeight: "24px", color: e.color.defaultText, "& code": mt({ theme: e }) })), ec = _.pre(re, Zt, ({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0", "&:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "& pre, &.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px", code: { color: "inherit", fontSize: "inherit" } }, "& code": { whiteSpace: "pre" }, "& code, & tt": { border: "none" } })), tc = _.span(re, ({ theme: e }) => ({ "&.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${e.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: e.color.darkest, display: "block", padding: "5px 0 0" } }, "&.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "&.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "&.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "&.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } } })), rc = _.table(re, Zt, ({ theme: e }) => ({ fontSize: e.typography.size.s2, lineHeight: "24px", padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${e.appBorderColor}`, backgroundColor: e.appContentBg, margin: 0, padding: 0 }, "& tr:nth-of-type(2n)": { backgroundColor: e.base === "dark" ? e.color.darker : e.color.lighter }, "& tr th": { fontWeight: "bold", color: e.color.defaultText, border: `1px solid ${e.appBorderColor}`, margin: 0, padding: "6px 13px" }, "& tr td": { border: `1px solid ${e.appBorderColor}`, color: e.color.defaultText, margin: 0, padding: "6px 13px" }, "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 }, "& tr th :last-child, & tr td :last-child": { marginBottom: 0 } })), nc = _.title(mt), mg = { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, ac = _.ul(re, Zt, { ...mg, listStyle: "disc" }), Jo = _.div(re), oc = { h1: (e) => o.createElement(qu, { ...ee(e, "h1") }), h2: (e) => o.createElement(Ko, { ...ee(e, "h2") }), h3: (e) => o.createElement(Xo, { ...ee(e, "h3") }), h4: (e) => o.createElement(Uu, { ...ee(e, "h4") }), h5: (e) => o.createElement(Wu, { ...ee(e, "h5") }), h6: (e) => o.createElement(Gu, { ...ee(e, "h6") }), pre: (e) => o.createElement(ec, { ...ee(e, "pre") }), a: (e) => o.createElement(Hu, { ...ee(e, "a") }), hr: (e) => o.createElement(Yu, { ...ee(e, "hr") }), dl: (e) => o.createElement(zu, { ...ee(e, "dl") }), blockquote: (e) => o.createElement(Zu, { ...ee(e, "blockquote") }), table: (e) => o.createElement(rc, { ...ee(e, "table") }), img: (e) => o.createElement(Ku, { ...ee(e, "img") }), div: (e) => o.createElement(Vu, { ...ee(e, "div") }), span: (e) => o.createElement(tc, { ...ee(e, "span") }), li: (e) => o.createElement(Xu, { ...ee(e, "li") }), ul: (e) => o.createElement(ac, { ...ee(e, "ul") }), ol: (e) => o.createElement(Ju, { ...ee(e, "ol") }), p: (e) => o.createElement(Qu, { ...ee(e, "p") }), code: (e) => o.createElement(Yo, { ...ee(e, "code") }), tt: (e) => o.createElement(nc, { ...ee(e, "tt") }), resetwrapper: (e) => o.createElement(Jo, { ...ee(e, "resetwrapper") }) };
_.div(({ theme: e }) => ({ display: "inline-block", fontSize: 11, lineHeight: "12px", alignSelf: "center", padding: "4px 12px", borderRadius: "3em", fontWeight: e.typography.weight.bold }), { svg: { height: 12, width: 12, marginRight: 4, marginTop: -2, path: { fill: "currentColor" } } }, ({ theme: e, status: t }) => {
  switch (t) {
    case "critical":
      return { color: e.color.critical, background: e.background.critical };
    case "negative":
      return { color: e.color.negativeText, background: e.background.negative, boxShadow: e.base === "light" ? `inset 0 0 0 1px ${Ee(0.9, e.color.negativeText)}` : "none" };
    case "warning":
      return { color: e.color.warningText, background: e.background.warning, boxShadow: e.base === "light" ? `inset 0 0 0 1px ${Ee(0.9, e.color.warningText)}` : "none" };
    case "neutral":
      return { color: e.color.dark, background: e.color.mediumlight, boxShadow: e.base === "light" ? `inset 0 0 0 1px ${Ee(0.9, e.color.dark)}` : "none" };
    case "positive":
      return { color: e.color.positiveText, background: e.background.positive, boxShadow: e.base === "light" ? `inset 0 0 0 1px ${Ee(0.9, e.color.positiveText)}` : "none" };
    default:
      return {};
  }
});
var Lr = { user: o.createElement(o.Fragment, null, o.createElement("path", { d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0ZM2.67 11.15c.7-1 2.6-1.81 3.2-1.9.22-.04.23-.66.23-.66s-.67-.66-.81-1.55c-.4 0-.63-.94-.24-1.27l-.02-.13c-.06-.6-.28-2.6 1.97-2.6s2.03 2 1.97 2.6l-.02.13c.4.33.15 1.27-.24 1.27-.14.89-.8 1.55-.8 1.55s0 .62.22.66c.6.09 2.5.9 3.2 1.9a6 6 0 1 0-8.66 0Z" })), useralt: o.createElement(o.Fragment, null, o.createElement("path", { d: "M7.27 13.16a11.39 11.39 0 0 0 5.18-1.23v-.25c0-1.57-3.24-3-4.1-3.13-.27-.05-.28-.79-.28-.79s.8-.78.96-1.83c.47 0 .75-1.12.29-1.52.02-.41.6-3.25-2.32-3.25S4.65 4 4.67 4.41c-.46.4-.17 1.52.29 1.52.17 1.05.96 1.83.96 1.83s0 .74-.27.79c-.86.13-4.04 1.53-4.1 3.08a11.44 11.44 0 0 0 5.72 1.53Z" })), useradd: o.createElement(o.Fragment, null, o.createElement("path", { d: "M1.18 11.9c-.4-.17-.8-.36-1.18-.58.06-1.44 3.02-2.74 3.82-2.87.25-.04.26-.73.26-.73s-.74-.73-.9-1.7c-.43 0-.7-1.05-.27-1.42l-.01-.14c-.07-.67-.31-2.88 2.18-2.88 2.48 0 2.24 2.2 2.17 2.88l-.01.14c.43.37.16 1.41-.27 1.41-.16.98-.9 1.71-.9 1.71s.01.69.26.73c.8.13 3.82 1.46 3.82 2.91v.24a10.63 10.63 0 0 1-8.97.3ZM11.5 2.16c.28 0 .5.22.5.5v1.5h1.5a.5.5 0 0 1 0 1H12v1.5a.5.5 0 0 1-1 0v-1.5H9.5a.5.5 0 1 1 0-1H11v-1.5c0-.28.22-.5.5-.5Z" })), users: o.createElement(o.Fragment, null, o.createElement("path", { d: "M9.21 11.62A10.59 10.59 0 0 1 0 11.07c.06-1.35 2.93-2.58 3.7-2.7.25-.03.26-.68.26-.68s-.72-.69-.87-1.6c-.42 0-.68-.99-.26-1.33 0-.03 0-.08-.02-.14-.07-.63-.3-2.71 2.12-2.71 2.41 0 2.18 2.08 2.11 2.71l-.01.14c.42.34.16 1.32-.26 1.32-.16.92-.87 1.6-.87 1.6s0 .66.25.7c.78.11 3.7 1.36 3.7 2.73v.22l-.64.3Z" }), o.createElement("path", { d: "M8.81 8.42a9.64 9.64 0 0 0-.74-.4 5.2 5.2 0 0 1 1.7-.76c.17-.02.17-.47.17-.47s-.49-.47-.6-1.1c-.28 0-.46-.68-.17-.91l-.01-.1c-.05-.43-.2-1.86 1.45-1.86 1.66 0 1.5 1.43 1.45 1.86v.1c.28.23.1.9-.18.9-.11.64-.6 1.11-.6 1.11s0 .45.17.47c.54.08 2.55.94 2.55 1.89v.62a10.6 10.6 0 0 1-3.3.56 2.97 2.97 0 0 0-.58-.88c-.37-.41-.85-.76-1.31-1.03Z" })), profile: o.createElement(o.Fragment, null, o.createElement("path", { d: "M9.1 7.35a5.06 5.06 0 0 1-4.52-.28C4.6 6.4 6.02 5.77 6.4 5.7c.12-.02.12-.35.12-.35s-.35-.34-.43-.81c-.2 0-.33-.5-.12-.67l-.01-.07C5.93 3.48 5.81 2.42 7 2.42S8.07 3.48 8.04 3.8v.07c.2.17.07.67-.13.67-.08.47-.43.81-.43.81s0 .33.12.35c.38.06 1.82.7 1.82 1.4v.1c-.1.06-.2.1-.31.15Zm-5.35 3.9c0-.14.11-.25.25-.25h6a.25.25 0 1 1 0 .5H4a.25.25 0 0 1-.25-.25ZM4 9a.25.25 0 0 0 0 .5h6a.25.25 0 1 0 0-.5H4Z" }), o.createElement("path", { fillRule: "evenodd", d: "M1 .5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V.5ZM2 13V1h10v12H2Z" })), facehappy: o.createElement(o.Fragment, null, o.createElement("path", { d: "M3.97 8.75a.5.5 0 0 0-.87.5 4.5 4.5 0 0 0 7.8 0 .5.5 0 1 0-.87-.5 3.5 3.5 0 0 1-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), o.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), faceneutral: o.createElement(o.Fragment, null, o.createElement("path", { d: "M4.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), o.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), facesad: o.createElement(o.Fragment, null, o.createElement("path", { d: "M3.97 10.25a.5.5 0 0 1-.87-.5 4.5 4.5 0 0 1 7.8 0 .5.5 0 1 1-.87.5 3.5 3.5 0 0 0-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), o.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), accessibility: o.createElement(o.Fragment, null, o.createElement("path", { d: "M3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z" }), o.createElement("path", { d: "M7 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), o.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), accessibilityalt: o.createElement(o.Fragment, null, o.createElement("path", { d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM8 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z" })), arrowup: o.createElement(o.Fragment, null, o.createElement("path", { d: "m7.35 2.9 5.5 5.5a.5.5 0 0 1-.7.7L7 3.96 1.85 9.1a.5.5 0 1 1-.7-.7l5.5-5.5c.2-.2.5-.2.7 0Z" })), arrowdown: o.createElement(o.Fragment, null, o.createElement("path", { d: "m1.15 5.6 5.5 5.5c.2.2.5.2.7 0l5.5-5.5a.5.5 0 0 0-.7-.7L7 10.04 1.85 4.9a.5.5 0 1 0-.7.7Z" })), arrowleft: o.createElement(o.Fragment, null, o.createElement("path", { d: "M2.76 7.1c.02.09.06.18.14.25l5.5 5.5a.5.5 0 0 0 .7-.7L3.96 7 9.1 1.85a.5.5 0 1 0-.7-.7l-5.5 5.5a.5.5 0 0 0-.14.45Z" })), arrowright: o.createElement(o.Fragment, null, o.createElement("path", { d: "m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z" })), arrowupalt: o.createElement(o.Fragment, null, o.createElement("path", { d: "M11.85 4.65 7.35.15a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 1 0 .7.7L6.5 1.71V13.5a.5.5 0 0 0 1 0V1.7l3.65 3.65a.5.5 0 0 0 .7-.7Z" })), arrowdownalt: o.createElement(o.Fragment, null, o.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0v11.8L2.85 8.64a.5.5 0 1 0-.7.7l4.5 4.5A.5.5 0 0 0 7 14a.5.5 0 0 0 .35-.15l4.5-4.5a.5.5 0 0 0-.7-.7L7.5 12.29V.5Z" })), arrowleftalt: o.createElement(o.Fragment, null, o.createElement("path", { d: "M5.35 2.15c.2.2.2.5 0 .7L1.71 6.5H13.5a.5.5 0 0 1 0 1H1.7l3.65 3.65a.5.5 0 0 1-.7.7l-4.5-4.5a.5.5 0 0 1 0-.7l4.5-4.5c.2-.2.5-.2.7 0Z" })), arrowrightalt: o.createElement(o.Fragment, null, o.createElement("path", { d: "M8.65 2.15c.2-.2.5-.2.7 0l4.5 4.5c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7-.7l3.64-3.65H.5a.5.5 0 0 1 0-1h11.8L8.64 2.85a.5.5 0 0 1 0-.7Z" })), expandalt: o.createElement(o.Fragment, null, o.createElement("path", { d: "m7.35.15 4 4a.5.5 0 0 1-.7.7L7 1.21 3.35 4.85a.5.5 0 1 1-.7-.7l4-4c.2-.2.5-.2.7 0ZM11.35 9.15c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 1 1 .7-.7L7 12.79l3.65-3.64c.2-.2.5-.2.7 0Z" })), collapse: o.createElement(o.Fragment, null, o.createElement("path", { d: "M3.354.146a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L7 3.793 3.354.146Zm3.292 9a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L7 10.207l-3.646 3.647a.5.5 0 0 1-.708-.708l4-4Z" })), expand: o.createElement(o.Fragment, null, o.createElement("path", { d: "M1.5 1h2a.5.5 0 0 1 0 1h-.8l3.15 3.15a.5.5 0 1 1-.7.7L2 2.71v.79a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-.8L8.85 5.86a.5.5 0 1 1-.7-.7L11.29 2h-.79a.5.5 0 0 1-.5-.5ZM12.5 10c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8L8.14 8.85a.5.5 0 1 1 .7-.7L12 11.29v-.79c0-.28.22-.5.5-.5ZM2 11.3v-.8a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-.8l3.15-3.15a.5.5 0 1 0-.7-.7L2 11.29Z" })), unfold: o.createElement(o.Fragment, null, o.createElement("path", { d: "m6.65.15-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64V5a.5.5 0 0 0 1 0V1.7l.65.65a.5.5 0 1 0 .7-.7L7.35.15a.5.5 0 0 0-.7 0Z" }), o.createElement("path", { d: "M1.3 4.04a.5.5 0 0 0-.16.82L3.3 7 1.15 9.15a.5.5 0 0 0 .35.85h3a.5.5 0 0 0 0-1H2.7l1.5-1.5h5.6l2.35 2.35a.5.5 0 0 0 .7-.7L10.71 7l2.14-2.15.11-.54-.1.54A.5.5 0 0 0 13 4.5a.5.5 0 0 0-.14-.35.5.5 0 0 0-.36-.15h-3a.5.5 0 0 0 0 1h1.8L9.8 6.5H4.2L2.7 5h1.8a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.2.04Z" }), o.createElement("path", { d: "M7 8.5c.28 0 .5.22.5.5v3.3l.65-.65a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V9c0-.28.22-.5.5-.5ZM9 9.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" })), transfer: o.createElement(o.Fragment, null, o.createElement("path", { d: "M10.65 2.65c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H1.5a.5.5 0 0 1 0-1h9.8l-.65-.65a.5.5 0 0 1 0-.7ZM3.35 8.35 2.71 9h9.79a.5.5 0 0 1 0 1H2.7l.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7Z" })), redirect: o.createElement(o.Fragment, null, o.createElement("path", { d: "M1.5 1c.28 0 .5.22.5.5V10a2 2 0 0 0 4 0V4a3 3 0 0 1 6 0v7.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L11 11.79V4a2 2 0 1 0-4 0v6a3 3 0 0 1-6 0V1.5c0-.28.22-.5.5-.5Z" })), undo: o.createElement(o.Fragment, null, o.createElement("path", { d: "M1.15 3.85a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7L2.71 3H9a4 4 0 0 1 0 8H3a.5.5 0 0 1 0-1h6a3 3 0 1 0 0-6H2.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2Z" })), reply: o.createElement(o.Fragment, null, o.createElement("path", { d: "M4.35 2.15c.2.2.2.5 0 .7L1.71 5.5H9.5A4.5 4.5 0 0 1 14 10v1.5a.5.5 0 0 1-1 0V10a3.5 3.5 0 0 0-3.5-3.5H1.7l2.65 2.65a.5.5 0 1 1-.7.7l-3.5-3.5a.5.5 0 0 1 0-.7l3.5-3.5c.2-.2.5-.2.7 0Z" })), sync: o.createElement(o.Fragment, null, o.createElement("path", { d: "M5.5 1A.5.5 0 0 0 5 .5H2a.5.5 0 0 0 0 1h1.53a6.5 6.5 0 0 0 2.39 11.91.5.5 0 1 0 .16-.99A5.5 5.5 0 0 1 4.5 2.1V4a.5.5 0 0 0 1 0V1ZM7.5 1a.5.5 0 0 1 .58-.41 6.5 6.5 0 0 1 2.39 11.91H12a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.9A5.5 5.5 0 0 0 7.92 1.58.5.5 0 0 1 7.5 1Z" })), upload: o.createElement(o.Fragment, null, o.createElement("path", { d: "M8.65 5.85 7.5 4.71v5.79a.5.5 0 0 1-1 0V4.7L5.35 5.86a.5.5 0 1 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7Z" }), o.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), download: o.createElement(o.Fragment, null, o.createElement("path", { d: "M5.35 8.15 6.5 9.29V3.5a.5.5 0 0 1 1 0v5.8l1.15-1.15a.5.5 0 1 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7Z" }), o.createElement("path", { fillRule: "evenodd", d: "M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm1 0a6 6 0 1 1 12 0A6 6 0 0 1 1 7Z" })), back: o.createElement(o.Fragment, null, o.createElement("path", { d: "M5.85 5.35 4.71 6.5h5.79a.5.5 0 0 1 0 1H4.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7Z" }), o.createElement("path", { fillRule: "evenodd", d: "M7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0Zm0 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Z" })), proceed: o.createElement(o.Fragment, null, o.createElement("path", { d: "M3.5 6.5h5.8L8.14 5.35a.5.5 0 1 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 1 1-.7-.7L9.29 7.5H3.5a.5.5 0 0 1 0-1Z" }), o.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14Zm0-1A6 6 0 1 1 7 1a6 6 0 0 1 0 12Z" })), refresh: o.createElement(o.Fragment, null, o.createElement("path", { d: "M7.1.5H7a6.5 6.5 0 1 0 6.41 7.58.5.5 0 1 0-.99-.16A5.47 5.47 0 0 1 7 12.5a5.5 5.5 0 0 1 0-11 5.5 5.5 0 0 1 4.9 3H10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-1 0v1.53A6.5 6.5 0 0 0 7.1.5Z" })), globe: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 0 0 7a7 7 0 0 0 14 0Zm-6.53 5.74c-.24.23-.4.26-.47.26-.08 0-.23-.03-.47-.26-.23-.24-.5-.62-.73-1.18A11.57 11.57 0 0 1 5 7.5h4a11.57 11.57 0 0 1-.8 4.06c-.24.56-.5.94-.73 1.18ZM8.99 6.5H5.01c.05-1.62.35-3.04.79-4.06.24-.56.5-.94.73-1.18.24-.23.4-.26.47-.26.08 0 .23.03.47.26.23.24.5.62.73 1.18.44 1.02.74 2.44.8 4.06Zm1 1c-.06 2.18-.56 4.08-1.28 5.25a6 6 0 0 0 4.27-5.25H9.99Zm2.99-1H9.99c-.06-2.18-.56-4.08-1.28-5.25a6 6 0 0 1 4.27 5.25ZM4 6.5c.06-2.18.56-4.08 1.28-5.25A6 6 0 0 0 1.02 6.5h2.99Zm-2.99 1a6 6 0 0 0 4.27 5.25c-.72-1.17-1.22-3.07-1.28-5.25H1.02Z" })), compass: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M10.09 3.4 5.95 5.8a.37.37 0 0 0-.11.09.38.38 0 0 0-.04.05l-2.4 4.15a.37.37 0 0 0 0 .38c.1.18.33.24.5.14l4.15-2.4a.37.37 0 0 0 .15-.15l2.4-4.15a.37.37 0 0 0-.03-.44.37.37 0 0 0-.48-.07ZM4.75 9.25 7.6 7.6 6.4 6.4 4.75 9.25Z" }), o.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), location: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm6.5 3.5v2.48A6 6 0 0 1 1.02 7.5H3.5a.5.5 0 0 0 0-1H1.02A6 6 0 0 1 6.5 1.02V3.5a.5.5 0 0 0 1 0V1.02a6 6 0 0 1 5.48 5.48H10.5a.5.5 0 0 0 0 1h2.48a6 6 0 0 1-5.48 5.48V10.5a.5.5 0 0 0-1 0Z" })), pin: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }), o.createElement("path", { fillRule: "evenodd", d: "M12 5A5 5 0 0 0 2 5c0 2.63 2.27 6.15 4.65 8.64.2.2.5.2.7 0C9.73 11.15 12 7.64 12 5ZM7 1a4 4 0 0 1 4 4c0 1.06-.47 2.42-1.3 3.88A21.23 21.23 0 0 1 7 12.55c-1-1.1-1.97-2.39-2.7-3.67A8.46 8.46 0 0 1 3 5a4 4 0 0 1 4-4Z" })), time: o.createElement(o.Fragment, null, o.createElement("path", { d: "M7 2c.28 0 .5.22.5.5v4H10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5V2.5c0-.28.22-.5.5-.5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), dashboard: o.createElement(o.Fragment, null, o.createElement("path", { d: "M9.8 4.1a.5.5 0 0 1 .1.7L7.92 7.58A1 1 0 1 1 7.1 7l2-2.8a.5.5 0 0 1 .7-.12Z" }), o.createElement("path", { fillRule: "evenodd", d: "M2.07 12.97a7 7 0 1 1 9.86 0 12.96 12.96 0 0 0-9.86 0Zm9.58-1.18a6 6 0 1 0-9.3 0 13.98 13.98 0 0 1 9.3 0Z" })), timer: o.createElement(o.Fragment, null, o.createElement("path", { d: "M7.5 4.5a.5.5 0 0 0-1 0v2.63a1 1 0 1 0 1 0V4.5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M5.5.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.5v1.02c1.28.1 2.45.61 3.37 1.4l.78-.77a.5.5 0 0 1 .7.7l-.77.78a6 6 0 1 1-5.08-2.1V1H6a.5.5 0 0 1-.5-.5ZM7 3a5 5 0 1 0 0 10A5 5 0 0 0 7 3Z" })), home: o.createElement(o.Fragment, null, o.createElement("path", { d: "m7.35 1.15 5.5 5.5a.5.5 0 0 1-.7.7L12 7.21v5.29a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V9H6v3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V7.2l-.15.15a.5.5 0 1 1-.7-.7l1-1 4.5-4.5c.2-.2.5-.2.7 0ZM3 6.2V12h2V8.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V12h2V6.2l-4-4-4 4Z" })), admin: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M1.21 4.1a.5.5 0 0 1 .06-.04l5.48-3a.5.5 0 0 1 .5 0l5.48 3a.5.5 0 0 1 .27.39.5.5 0 0 1-.51.55H1.51a.5.5 0 0 1-.3-.9ZM3.46 4h7.08L7 2.07 3.46 4Z" }), o.createElement("path", { d: "M4 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM11 6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V6ZM5.75 5.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM8.75 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM1.5 12.5c0-.27.22-.5.5-.5h10a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5Z" })), info: o.createElement(o.Fragment, null, o.createElement("path", { d: "M7 5.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM7 4.5A.75.75 0 1 0 7 3a.75.75 0 0 0 0 1.5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), question: o.createElement(o.Fragment, null, o.createElement("path", { d: "M5.25 5.25A1.75 1.75 0 1 1 7 7a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 1 0V7.95a2.75 2.75 0 1 0-3.25-2.7.5.5 0 0 0 1 0ZM7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), support: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-3.52 4.9a5.97 5.97 0 0 1-6.96 0l1.45-1.45a3.98 3.98 0 0 0 4.06 0l1.45 1.44Zm-.03-2.87 1.44 1.45a5.97 5.97 0 0 0 0-6.96l-1.44 1.45a3.98 3.98 0 0 1 0 4.06ZM9.03 3.55l1.45-1.44a5.97 5.97 0 0 0-6.96 0l1.45 1.44a3.98 3.98 0 0 1 4.06 0ZM3.55 4.97 2.11 3.52a5.97 5.97 0 0 0 0 6.96l1.44-1.45a3.98 3.98 0 0 1 0-4.06ZM10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" })), alert: o.createElement(o.Fragment, null, o.createElement("path", { d: "M7 4.5c.28 0 .5.22.5.5v3.5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM7.75 10.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" }), o.createElement("path", { fillRule: "evenodd", d: "M7.2 1.04a.5.5 0 0 1 .24.21l6.49 11a.5.5 0 0 1-.44.75H.51a.5.5 0 0 1-.5-.45.5.5 0 0 1 .06-.31l6.5-10.99a.5.5 0 0 1 .64-.2ZM7 2.48 1.38 12h11.24L7 2.48Z" })), email: o.createElement(o.Fragment, null, o.createElement("path", { d: "M0 2.5c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-9Zm1 1.02V11h12V3.52L7.31 7.89a.5.5 0 0 1-.52.07.5.5 0 0 1-.1-.07L1 3.52ZM12.03 3H1.97L7 6.87 12.03 3Z" })), phone: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "m7.76 8.13-.05.05a.2.2 0 0 1-.28.03A6.76 6.76 0 0 1 5.8 6.56a.21.21 0 0 1 .04-.27l.05-.05c.23-.2.54-.47.71-.96.17-.47-.02-1.04-.66-1.94-.26-.38-.72-.96-1.22-1.46-.68-.69-1.2-1-1.65-1a.98.98 0 0 0-.51.13A3.23 3.23 0 0 0 .9 3.42c-.13 1.1.26 2.37 1.17 3.78a16.68 16.68 0 0 0 4.55 4.6 6.57 6.57 0 0 0 3.53 1.32A3.2 3.2 0 0 0 13 11.46c.14-.24.24-.64-.07-1.18a7.8 7.8 0 0 0-1.73-1.8c-.64-.5-1.52-1.12-2.13-1.12a.97.97 0 0 0-.34.06c-.47.17-.74.46-.95.69l-.02.02Zm4.32 2.68a6.8 6.8 0 0 0-1.48-1.54h-.02c-.3-.25-.64-.49-.95-.67a2.7 2.7 0 0 0-.56-.24h-.01c-.23.09-.34.21-.56.45l-.02.02-.04.04a1.2 1.2 0 0 1-1.6.15 7.76 7.76 0 0 1-1.86-1.89l-.01-.01-.02-.02a1.21 1.21 0 0 1 .2-1.53l.06-.06.02-.02c.22-.2.35-.31.43-.53v-.02c0-.02 0-.06-.03-.14a3.7 3.7 0 0 0-.5-.88h-.01V3.9c-.23-.33-.65-.87-1.1-1.32H4c-.31-.32-.55-.5-.72-.6a.6.6 0 0 0-.22-.1h-.03a2.23 2.23 0 0 0-1.15 1.66c-.09.78.18 1.8 1.02 3.1a15.68 15.68 0 0 0 4.27 4.33l.02.01.02.02a5.57 5.57 0 0 0 2.97 1.11 2.2 2.2 0 0 0 1.93-1.14h.01v-.05a.57.57 0 0 0-.05-.12Z" })), link: o.createElement(o.Fragment, null, o.createElement("path", { d: "M11.84 2.16a2.25 2.25 0 0 0-3.18 0l-2.5 2.5c-.88.88-.88 2.3 0 3.18a.5.5 0 0 1-.7.7 3.25 3.25 0 0 1 0-4.59l2.5-2.5a3.25 3.25 0 0 1 4.59 4.6L10.48 8.1c.04-.44.01-.89-.09-1.32l1.45-1.45c.88-.88.88-2.3 0-3.18Z" }), o.createElement("path", { d: "M3.6 7.2c-.1-.42-.12-.87-.08-1.31L1.45 7.95a3.25 3.25 0 1 0 4.6 4.6l2.5-2.5a3.25 3.25 0 0 0 0-4.6.5.5 0 0 0-.7.7c.87.89.87 2.31 0 3.2l-2.5 2.5a2.25 2.25 0 1 1-3.2-3.2l1.46-1.44Z" })), unlink: o.createElement(o.Fragment, null, o.createElement("path", { d: "m1.45 7.95 1.3-1.3.71.7-1.3 1.3a2.25 2.25 0 1 0 3.18 3.2l1.3-1.31.71.7-1.3 1.3a3.25 3.25 0 0 1-4.6-4.59ZM12.55 6.05l-1.3 1.3-.71-.7 1.3-1.3a2.25 2.25 0 1 0-3.18-3.2l-1.3 1.31-.71-.7 1.3-1.3a3.25 3.25 0 0 1 4.6 4.59ZM1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z" })), bell: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M8 1.11a1 1 0 1 0-1.99 0A4.5 4.5 0 0 0 2.5 5.5v3.88l-.94 1.89a.5.5 0 0 0-.06.3.5.5 0 0 0 .51.43h3.58a1.5 1.5 0 1 0 2.82 0H12a.5.5 0 0 0 .45-.73l-.94-1.89V5.5A4.5 4.5 0 0 0 8 1.11ZM2.8 11h8.4l-.5-1H3.3l-.5 1Zm7.7-2V5.5a3.5 3.5 0 1 0-7 0V9h7Zm-4 3.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z" })), rss: o.createElement(o.Fragment, null, o.createElement("path", { d: "M1.5.5c0-.28.22-.5.5-.5a12 12 0 0 1 12 12 .5.5 0 0 1-1 0A11 11 0 0 0 2 1a.5.5 0 0 1-.5-.5Z" }), o.createElement("path", { d: "M1.5 4.5c0-.28.22-.5.5-.5a8 8 0 0 1 8 8 .5.5 0 0 1-1 0 7 7 0 0 0-7-7 .5.5 0 0 1-.5-.5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" })), sharealt: o.createElement(o.Fragment, null, o.createElement("path", { d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7.5a.5.5 0 0 0-1 0V12H2V2h4.5a.5.5 0 0 0 0-1H2Z" }), o.createElement("path", { d: "M7.35 7.36 12 2.7v1.8a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 1 0 0 1h1.8L6.64 6.64a.5.5 0 1 0 .7.7Z" })), share: o.createElement(o.Fragment, null, o.createElement("path", { d: "M6.65.15c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7L7.5 1.72v6.8a.5.5 0 0 1-1 0V1.7L5.35 2.86a.5.5 0 1 1-.7-.71l2-2Z" }), o.createElement("path", { d: "M2 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9.5a.5.5 0 1 0 0 1H12v7H2V5h2.5a.5.5 0 0 0 0-1H2Z" })), circlehollow: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm0 1A7 7 0 1 0 7 0a7 7 0 0 0 0 14Z" })), circle: o.createElement("path", { d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Z" }), bookmarkhollow: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5ZM4 12.41l2.66-2.28a.45.45 0 0 1 .38-.13c.1.01.2.05.29.12l2.67 2.3V1H4v11.41Z" })), bookmark: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5Z" })), hearthollow: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59ZM1.2 3.53A2.2 2.2 0 0 1 2.57 2.2M1.2 3.53c-.13.33-.2.72-.2 1.18 0 .22.03.45.1.68a3.97 3.97 0 0 0 .79 1.46c.19.23.38.45.59.65l4.51 4.36 4.52-4.35c.2-.2.4-.4.59-.65.18-.23.34-.47.49-.73.13-.23.23-.48.3-.73.08-.23.11-.46.11-.7 0-.45-.07-.84-.2-1.18-.12-.33-.3-.6-.51-.8v-.01c-.22-.2-.5-.38-.85-.51-.34-.13-.75-.2-1.24-.2-.2 0-.4.03-.6.09a4.95 4.95 0 0 0-1.9 1.22l-.68.67-.7-.65a9.97 9.97 0 0 0-.62-.53c-.2-.16-.42-.3-.63-.42h-.01c-.21-.12-.43-.22-.66-.29C4.2 2.03 4 2 3.77 2c-.48 0-.88.07-1.21.2" })), heart: o.createElement(o.Fragment, null, o.createElement("path", { d: "M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59Z" })), starhollow: o.createElement(o.Fragment, null, o.createElement("path", { d: "M6.32.78a.75.75 0 0 1 1.36 0l1.63 3.54 3.87.46c.63.07.89.86.42 1.3l-2.86 2.64.76 3.81a.75.75 0 0 1-1.1.8L7 11.43l-3.4 1.9a.75.75 0 0 1-1.1-.8l.76-3.81L.4 6.07a.75.75 0 0 1 .42-1.3l3.87-.45L6.32.78ZM7 1.7 5.54 4.86c-.11.24-.34.4-.6.43l-3.46.42 2.56 2.37c.2.17.28.44.23.7l-.68 3.42 3.04-1.7c.23-.14.5-.14.74 0l3.04 1.7-.68-3.43a.75.75 0 0 1 .23-.7l2.56-2.36-3.47-.42a.75.75 0 0 1-.59-.43L7 1.7Z" })), star: o.createElement(o.Fragment, null, o.createElement("path", { d: "M7.68.78a.75.75 0 0 0-1.36 0L4.69 4.32l-3.87.46a.75.75 0 0 0-.42 1.3l2.86 2.64-.76 3.81a.75.75 0 0 0 1.1.8l3.4-1.9 3.4 1.9a.75.75 0 0 0 1.1-.8l-.76-3.81 2.86-2.65a.75.75 0 0 0-.42-1.3L9.3 4.33 7.68.78Z" })), certificate: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M10 7.85A4.49 4.49 0 0 0 7 0a4.5 4.5 0 0 0-3 7.85V13a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.15L7 11.21l2.15 2.14A.5.5 0 0 0 10 13V7.85ZM7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.35 2.15c.2-.2.5-.2.7 0L9 11.79V8.53a4.48 4.48 0 0 1-4 0v3.26l1.65-1.64Z" })), verified: o.createElement(o.Fragment, null, o.createElement("path", { d: "M6.56 13.12a1 1 0 0 1 .88 0l.98.49a1 1 0 0 0 1.31-.43l.52-.97a1 1 0 0 1 .7-.51l1.08-.2a1 1 0 0 0 .81-1.1l-.15-1.1a1 1 0 0 1 .27-.82l.76-.8a1 1 0 0 0 0-1.37l-.76-.79a1 1 0 0 1-.27-.83l.15-1.08a1 1 0 0 0-.8-1.12l-1.09-.19a1 1 0 0 1-.7-.5L9.73.81A1 1 0 0 0 8.43.4l-1 .49a1 1 0 0 1-.87 0L5.58.39a1 1 0 0 0-1.31.43l-.52.97a1 1 0 0 1-.7.51l-1.08.2a1 1 0 0 0-.81 1.1l.15 1.1a1 1 0 0 1-.27.82l-.76.8a1 1 0 0 0 0 1.37l.76.79a1 1 0 0 1 .27.83l-.15 1.08a1 1 0 0 0 .8 1.12l1.09.19a1 1 0 0 1 .7.5l.52.98a1 1 0 0 0 1.3.43l1-.49Zm4.3-8.47c.19.2.19.5 0 .7l-4.5 4.5a.5.5 0 0 1-.71 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z" })), thumbsup: o.createElement(o.Fragment, null, o.createElement("path", { d: "M11 12.02c-.4.37-.91.56-1.56.56h-.88a5.5 5.5 0 0 1-1.3-.16c-.42-.1-.91-.25-1.47-.45-.3-.12-.63-.21-.95-.27H2.88a.84.84 0 0 1-.62-.26.84.84 0 0 1-.26-.61V6.45c0-.24.09-.45.26-.62a.84.84 0 0 1 .62-.25h1.87c.16-.11.47-.47.93-1.06.27-.35.51-.64.74-.88.1-.11.19-.3.24-.58.05-.28.12-.57.2-.87.1-.3.24-.55.43-.74a.87.87 0 0 1 .62-.25c.38 0 .72.07 1.03.22.3.15.54.38.7.7a2.94 2.94 0 0 1 .21 1.58 3 3 0 0 1-.3 1h1.2c.47 0 .88.17 1.23.52s.52.8.52 1.22c0 .29-.04.66-.34 1.12.05.15.07.3.07.47 0 .35-.09.68-.26.98.07.54-.07 1.08-.4 1.51a1.9 1.9 0 0 1-.57 1.5Zm.47-5.33a.96.96 0 0 0 .03-.25.74.74 0 0 0-.23-.51.68.68 0 0 0-.52-.23H7.93l.73-1.45a2 2 0 0 0 .21-.87c0-.44-.07-.7-.13-.82a.53.53 0 0 0-.24-.24 1.3 1.3 0 0 0-.54-.12.99.99 0 0 0-.14.28c-.08.27-.13.52-.18.76-.06.38-.2.77-.48 1.07v.01l-.02.01c-.2.2-.4.46-.67.8l-.61.76c-.15.17-.35.38-.54.51l-.26.18H5v4.13h.02c.38.08.76.18 1.12.32.53.2.98.33 1.35.42.36.09.71.13 1.07.13h.88c.43 0 .68-.11.87-.29a.9.9 0 0 0 .26-.7l-.02-.37.22-.3c.17-.23.25-.5.2-.78l-.04-.33.17-.3a.97.97 0 0 0 .13-.48c0-.09 0-.13-.02-.15l-.15-.46.26-.4c.1-.15.13-.25.15-.33ZM3.5 10.8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" })), shield: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M11.76 2.08a.5.5 0 0 1 .24.42v6a.5.5 0 0 1-.17.38l-4.5 3.99a.5.5 0 0 1-.67 0l-4.49-4A.5.5 0 0 1 2 8.5V2.5c0-.18.1-.34.24-.42l.01-.02a2.5 2.5 0 0 1 .3-.16c.22-.1.52-.24.92-.37C4.27 1.26 5.44 1 7 1c1.56 0 2.73.26 3.53.53a6.97 6.97 0 0 1 1.22.53l.01.02ZM3 2.79v5.49l1.07.94 6.59-6.58-.44-.17C9.52 2.24 8.44 2 7 2c-1.44 0-2.52.24-3.22.47-.35.12-.6.24-.78.32Zm4 9.04L4.82 9.9 11 3.71v4.57l-4 3.55Z" })), basket: o.createElement(o.Fragment, null, o.createElement("path", { d: "M10.35 2.85a.5.5 0 1 0-.7-.7l-3 3a.5.5 0 1 0 .7.7l3-3Z" }), o.createElement("path", { d: "M2.09 6H4.5a.5.5 0 0 0 0-1H1.8a.75.75 0 0 0-.74.87l.8 4.88A1.5 1.5 0 0 0 3.36 12h7.3a1.5 1.5 0 0 0 1.48-1.25l.81-4.88A.75.75 0 0 0 12.2 5H10a.5.5 0 0 0 0 1h1.91l-.76 4.58a.5.5 0 0 1-.5.42h-7.3a.5.5 0 0 1-.5-.42L2.1 6Z" }), o.createElement("path", { d: "M4.5 7c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 7.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM6.5 9.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0Z" })), beaker: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M4.5 2h.75v3.87l-3.03 5.26c-.48.83.12 1.87 1.08 1.87h7.4c.96 0 1.57-1.04 1.08-1.87L8.75 5.87V2h.75a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1Zm1.75 4V2h1.5v4.13l.07.12 1 1.75H5.18l1.01-1.75.07-.12V6ZM4.6 9l-1.52 2.63c-.1.16.03.37.22.37h7.4c.2 0 .31-.2.22-.37L9.4 9H4.6Z" })), hourglass: o.createElement(o.Fragment, null, o.createElement("path", { d: "M7.5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" }), o.createElement("path", { fillRule: "evenodd", d: "M3.5 1a.5.5 0 0 0-.5.5c0 1.06.14 1.9.68 2.97.34.7.86 1.5 1.6 2.53a16.53 16.53 0 0 0-1.8 2.96A6 6 0 0 0 3 12.49v.01a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 6 6 0 0 0-.48-2.54c-.34-.8-.9-1.71-1.8-2.96a19.78 19.78 0 0 0 1.6-2.53c.54-1.08.68-1.9.68-2.97a.5.5 0 0 0-.5-.5h-7Zm6.49 11a4.68 4.68 0 0 0-.39-1.65c-.27-.65-.73-1.4-1.5-2.5a133 133 0 0 1-.75 1 .5.5 0 0 1-.56.1.5.5 0 0 1-.2-.16l-.7-.94a14.36 14.36 0 0 0-1.5 2.5A4.68 4.68 0 0 0 4.02 12H10ZM6.3 6.72l.7.94a90.06 90.06 0 0 0 .7-.96c.49-.67.87-1.22 1.17-1.7H5.13A32.67 32.67 0 0 0 6.3 6.72ZM4.56 4h4.88c.36-.73.5-1.31.55-2H4c.04.69.19 1.27.55 2Z" })), flag: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M11.5 1h-9a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0V8h8.5a.5.5 0 0 0 .35-.85L9.21 4.5l2.64-2.65A.5.5 0 0 0 11.5 1ZM8.15 4.15 10.29 2H3v5h7.3L8.14 4.85a.5.5 0 0 1 0-.7Z" })), cloudhollow: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M10 7V6a3 3 0 0 0-5.9-.74l-.18.68-.7.07A2.5 2.5 0 0 0 3.5 11h3.19l.07-.01h.08L7 11h4a2 2 0 1 0 0-4h-1ZM3.12 5.02A3.5 3.5 0 0 0 3.5 12H11a3 3 0 1 0 0-6 4 4 0 0 0-7.88-.98Z" })), cloud: o.createElement("path", { d: "M7 2a4 4 0 0 1 4 4 3 3 0 1 1 0 6H3.5a3.5 3.5 0 0 1-.38-6.98A4 4 0 0 1 7 2Z" }), edit: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "m13.85 2.15-2-2a.5.5 0 0 0-.7 0l-1.5 1.5-9 9a.5.5 0 0 0-.14.26L0 13.39a.5.5 0 0 0 .14.46.5.5 0 0 0 .46.14l2.48-.5a.5.5 0 0 0 .27-.14l9-9 1.5-1.5a.5.5 0 0 0 0-.7ZM12 3.29l.8-.79-1.3-1.3-.8.8L12 3.3Zm-2-.58L1.7 11 3 12.3 11.3 4 10 2.7ZM1.14 12.86l.17-.85.68.68-.85.17Z" })), cog: o.createElement(o.Fragment, null, o.createElement("path", { d: "M5.59 5.59a2 2 0 0 1 3.27 2.14.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 1 0-.36-.94A2 2 0 0 1 5.6 5.6Z", fill: "#333" }), o.createElement("path", { fillRule: "evenodd", d: "M.94 6.53c.13.12.19.3.18.46 0 .17-.05.34-.18.47L0 8.39c.19.94.55 1.81 1.07 2.58h1.32c.18 0 .34.07.46.2.12.11.2.27.2.45v1.32c.76.51 1.62.88 2.55 1.06l.94-.94a.63.63 0 0 1 .45-.19h.03c.16 0 .33.07.45.19l.94.94a7.1 7.1 0 0 0 2.55-1.06v-1.33c0-.18.07-.35.2-.46.11-.12.27-.2.45-.2h1.33A7.1 7.1 0 0 0 14 8.4l-.95-.94a.64.64 0 0 1-.18-.47c0-.17.06-.34.18-.46l.95-.95a7.1 7.1 0 0 0-1.05-2.52h-1.34a.63.63 0 0 1-.46-.2.64.64 0 0 1-.2-.46V1.06A7.1 7.1 0 0 0 8.42 0l-.94.94a.63.63 0 0 1-.45.19H7a.63.63 0 0 1-.45-.19L5.6 0a7.1 7.1 0 0 0-2.56 1.06v1.33c0 .18-.07.34-.2.46a.63.63 0 0 1-.45.2H1.06A7.1 7.1 0 0 0 0 5.59l.94.94Zm.7 1.63c.33-.32.49-.75.48-1.17 0-.42-.15-.85-.47-1.17l-.54-.54c.12-.43.3-.85.51-1.23h.77c.46 0 .87-.2 1.17-.5.3-.29.48-.7.48-1.16v-.77c.4-.22.81-.39 1.25-.52l.54.55c.33.32.75.48 1.16.48h.03c.42 0 .84-.16 1.16-.48l.54-.54c.44.12.85.3 1.24.5v.8c0 .45.19.87.49 1.16.3.3.7.5 1.16.5h.78c.2.37.38.78.5 1.2l-.54.55c-.33.32-.49.75-.48 1.17 0 .42.15.85.48 1.17l.55.55c-.13.44-.3.85-.52 1.24h-.77c-.45 0-.87.2-1.16.5-.3.29-.5.7-.5 1.16v.77c-.38.21-.8.39-1.23.51l-.54-.54a1.64 1.64 0 0 0-1.16-.48H7c-.41 0-.83.16-1.16.48l-.54.55a6.1 6.1 0 0 1-1.25-.52v-.76c0-.45-.19-.87-.48-1.16-.3-.3-.71-.5-1.17-.5h-.76a6.1 6.1 0 0 1-.53-1.25l.55-.55Z" })), nut: o.createElement(o.Fragment, null, o.createElement("path", { d: "M5.59 8.41a2 2 0 1 1 3.27-.68.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 0 0-.36-.94 2 2 0 0 1-2.14-.45Z" }), o.createElement("path", { fillRule: "evenodd", d: "M6.5.29a1 1 0 0 1 1 0l5.06 2.92c.31.18.5.51.5.87v5.84a1 1 0 0 1-.5.87L7.5 13.7a1 1 0 0 1-1 0L1.44 10.8a1 1 0 0 1-.5-.87V4.08a1 1 0 0 1 .5-.87L6.5.3Zm.5.86 5.06 2.93v5.84L7 12.85 1.94 9.92V4.08L7 1.15Z" })), wrench: o.createElement(o.Fragment, null, o.createElement("path", { d: "M10.5 1c.44 0 .56.52.25.83l-.8.81c-.2.2-.2.52 0 .72l.69.7c.2.2.52.2.72 0l.8-.81c.32-.31.84-.2.84.25a2.5 2.5 0 0 1-3.41 2.33L2.7 12.7a1 1 0 0 1-1.42-1.42l6.88-6.88A2.5 2.5 0 0 1 10.5 1ZM2 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" })), ellipsis: o.createElement(o.Fragment, null, o.createElement("path", { d: "M4 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" })), check: o.createElement(o.Fragment, null, o.createElement("path", { d: "M13.85 3.35a.5.5 0 0 0-.7-.7L5 10.79.85 6.65a.5.5 0 1 0-.7.7l4.5 4.5c.2.2.5.2.7 0l8.5-8.5Z" })), form: o.createElement(o.Fragment, null, o.createElement("path", { d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.4a.5.5 0 0 0-1 0V12H2V2h7.5a.5.5 0 0 0 0-1H2Z" }), o.createElement("path", { d: "m6.35 9.86 7.5-7.5a.5.5 0 0 0-.7-.71L6 8.8 3.85 6.65a.5.5 0 1 0-.7.7l2.5 2.5c.2.2.5.2.7 0Z" })), batchdeny: o.createElement(o.Fragment, null, o.createElement("path", { d: "M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.646.646a.5.5 0 0 1 0 .708L5.207 7l3.647 3.646a.5.5 0 0 1-.708.708L4.5 7.707.854 11.354a.5.5 0 0 1-.708-.708L3.793 7 .146 3.354a.5.5 0 1 1 .708-.708L4.5 6.293l3.646-3.647a.5.5 0 0 1 .708 0ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z" })), batchaccept: o.createElement(o.Fragment, null, o.createElement("path", { d: "M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.2.6a.5.5 0 0 1 .1.7l-5.995 7.993a.505.505 0 0 1-.37.206.5.5 0 0 1-.395-.152L.146 8.854a.5.5 0 1 1 .708-.708l2.092 2.093L8.6 2.7a.5.5 0 0 1 .7-.1ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z" })), controls: o.createElement(o.Fragment, null, o.createElement("path", { d: "M10.5 1c.28 0 .5.22.5.5V2h1.5a.5.5 0 0 1 0 1H11v.5a.5.5 0 0 1-1 0V3H1.5a.5.5 0 0 1 0-1H10v-.5c0-.28.22-.5.5-.5ZM1.5 11a.5.5 0 0 0 0 1H10v.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H11v-.5a.5.5 0 0 0-1 0v.5H1.5ZM1 7c0-.28.22-.5.5-.5H3V6a.5.5 0 0 1 1 0v.5h8.5a.5.5 0 0 1 0 1H4V8a.5.5 0 0 1-1 0v-.5H1.5A.5.5 0 0 1 1 7Z" })), plus: o.createElement(o.Fragment, null, o.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0v6h-6a.5.5 0 0 0 0 1h6v6a.5.5 0 0 0 1 0v-6h6a.5.5 0 0 0 0-1h-6v-6Z" })), closeAlt: o.createElement(o.Fragment, null, o.createElement("path", { d: "M2.03.97A.75.75 0 0 0 .97 2.03L5.94 7 .97 11.97a.75.75 0 1 0 1.06 1.06L7 8.06l4.97 4.97a.75.75 0 1 0 1.06-1.06L8.06 7l4.97-4.97A.75.75 0 0 0 11.97.97L7 5.94 2.03.97Z" })), cross: o.createElement(o.Fragment, null, o.createElement("path", { d: "M1.85 1.15a.5.5 0 1 0-.7.7L6.29 7l-5.14 5.15a.5.5 0 0 0 .7.7L7 7.71l5.15 5.14a.5.5 0 0 0 .7-.7L7.71 7l5.14-5.15a.5.5 0 0 0-.7-.7L7 6.29 1.85 1.15Z" })), trash: o.createElement(o.Fragment, null, o.createElement("path", { d: "M5.5 4.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM9 5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M4.5.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V2h3a.5.5 0 0 1 0 1H12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3h-.5a.5.5 0 0 1 0-1h3V.5ZM3 3v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3H3Zm2.5-2h3v1h-3V1Z" })), pinalt: o.createElement(o.Fragment, null, o.createElement("path", { d: "M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5 5H3.66A4 4 0 0 0 .83 6.17l-.48.48a.5.5 0 0 0 0 .7l2.8 2.8-3 3a.5.5 0 0 0 .7.7l3-3 2.8 2.8c.2.2.5.2.7 0l.48-.48A4 4 0 0 0 9 10.34V9l2-2c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM11 5.59l-3 3v1.75a3 3 0 0 1-.88 2.12L7 12.6 1.41 7l.13-.12A3 3 0 0 1 3.66 6H5.4l3-3-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6Z" })), unpin: o.createElement(o.Fragment, null, o.createElement("path", { d: "M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5.7 4.3l.71.7 2-2-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6l-2 2 .7.7L11 7c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM.83 6.17A4 4 0 0 1 3.59 5l1 1h-.93a3 3 0 0 0-2.12.88L1.4 7 7 12.59l.12-.13A3 3 0 0 0 8 10.34v-.93l1 1a4 4 0 0 1-1.17 2.76l-.48.48a.5.5 0 0 1-.7 0l-2.8-2.8-3 3a.5.5 0 0 1-.7-.7l3-3-2.8-2.8a.5.5 0 0 1 0-.7l.48-.48Zm1.02-5.02a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z" })), add: o.createElement(o.Fragment, null, o.createElement("path", { d: "M7 3c.28 0 .5.22.5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3c0-.28.22-.5.5-.5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), subtract: o.createElement(o.Fragment, null, o.createElement("path", { d: "M3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z" }), o.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), close: o.createElement(o.Fragment, null, o.createElement("path", { d: "M9.85 4.15c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z" }), o.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), delete: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0a6 6 0 0 1-9.87 4.58l8.45-8.45A5.98 5.98 0 0 1 13 7ZM2.42 10.87l8.45-8.45a6 6 0 0 0-8.46 8.46Z" })), passed: o.createElement(o.Fragment, null, o.createElement("path", { d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm3.85-9.35c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z" })), changed: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z" })), failed: o.createElement(o.Fragment, null, o.createElement("path", { d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm2.85-9.85c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z" })), clear: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M5 2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-1.41-.59l-3-3a2 2 0 0 1 0-2.82l3-3A2 2 0 0 1 5 2Zm1.15 3.15c.2-.2.5-.2.7 0L8 6.29l1.15-1.14a.5.5 0 1 1 .7.7L8.71 7l1.14 1.15a.5.5 0 0 1-.7.7L8 7.71 6.85 8.85a.5.5 0 1 1-.7-.7L7.29 7 6.15 5.85a.5.5 0 0 1 0-.7Z" })), comment: o.createElement(o.Fragment, null, o.createElement("path", { d: "M3.5 5a.5.5 0 1 0 0 1h7a.5.5 0 0 0 0-1h-7ZM3 8.5c0-.27.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M12.5 12H5.7l-1.85 1.86a.5.5 0 0 1-.35.14.5.5 0 0 1-.5-.5V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5ZM2 11V3h10v8H2Z" })), commentadd: o.createElement(o.Fragment, null, o.createElement("path", { d: "M7.5 5a.5.5 0 1 0-1 0v1.5H5a.5.5 0 1 0 0 1h1.5V9a.5.5 0 0 0 1 0V7.5H9a.5.5 0 0 0 0-1H7.5V5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z" })), requestchange: o.createElement(o.Fragment, null, o.createElement("path", { d: "M9.85 6.65c.2.2.2.51 0 .7l-2 2a.5.5 0 1 1-.7-.7L8.3 7.5H4.5a.5.5 0 0 1 0-1h3.79L7.15 5.36a.5.5 0 1 1 .7-.71l2 2Z" }), o.createElement("path", { fillRule: "evenodd", d: "M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z" })), comments: o.createElement(o.Fragment, null, o.createElement("path", { d: "M8.5 7a.5.5 0 0 0 0-1h-5a.5.5 0 1 0 0 1h5ZM9 8.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5c.28 0 .5.23.5.5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M12 11.5V10h1.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5H2v1.5a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.14L4.71 12h6.79a.5.5 0 0 0 .5-.5ZM3 3V2h10v7h-1V3.5a.5.5 0 0 0-.5-.5H3Zm-2 8V4h10v7H1Z" })), lock: o.createElement(o.Fragment, null, o.createElement("path", { d: "M8 8a1 1 0 0 1-.5.87v1.63a.5.5 0 0 1-1 0V8.87A1 1 0 1 1 8 8Z" }), o.createElement("path", { fillRule: "evenodd", d: "M3 4a4 4 0 1 1 8 0v1h1.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4Zm7 1V4a3 3 0 1 0-6 0v1h6Zm2 1H2v7h10V6Z" })), unlock: o.createElement(o.Fragment, null, o.createElement("path", { d: "M6.5 8.87a1 1 0 1 1 1 0v1.63a.5.5 0 0 1-1 0V8.87Z" }), o.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 1a3 3 0 0 0-3 3v1h8.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4a4 4 0 0 1 7.76-1.38.5.5 0 0 1-.94.34A3 3 0 0 0 7 1ZM2 6h10v7H2V6Z" })), key: o.createElement(o.Fragment, null, o.createElement("path", { d: "M11 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }), o.createElement("path", { fillRule: "evenodd", d: "M7.5 8.53v.97a.5.5 0 0 1-.5.5H5.5v1.5a.5.5 0 0 1-.5.5H3.5v1.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .15-.36l5.12-5.11a4.5 4.5 0 1 1 2.23 2.5ZM6 4.5a3.5 3.5 0 1 1 1.5 2.87c-.29-.2-1-.37-1 .48V9H5a.5.5 0 0 0-.5.5V11H3a.5.5 0 0 0-.5.5V13H1v-1.3l5.2-5.19c.15-.16.18-.4.1-.6A3.47 3.47 0 0 1 6 4.5Z" })), outbox: o.createElement(o.Fragment, null, o.createElement("path", { d: "M7.35.15a.5.5 0 0 0-.7 0l-2 2a.5.5 0 1 0 .7.7L6.5 1.72v6.8a.5.5 0 0 0 1 0V1.7l1.15 1.15a.5.5 0 1 0 .7-.71l-2-2Z" }), o.createElement("path", { d: "M2 7.5a.5.5 0 1 0-1 0v5c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-1 0V12H2V7.5Z" })), credit: o.createElement(o.Fragment, null, o.createElement("path", { d: "M2.5 8a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1h-3Z" }), o.createElement("path", { fillRule: "evenodd", d: "M0 11.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v9ZM1 3v1h12V3H1Zm0 8h12V6H1v5Z" })), button: o.createElement(o.Fragment, null, o.createElement("path", { d: "M1 3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3.5a.5.5 0 1 0 0-1H1V4h12v5h-1a.5.5 0 0 0 0 1h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Z" }), o.createElement("path", { d: "M6.45 7a.5.5 0 0 1 .3.08l3.48 2.02a.5.5 0 0 1 0 .87l-1.08.62.75 1.3a.75.75 0 0 1-1.3.75l-.75-1.3-1.07.62a.5.5 0 0 1-.67-.13.5.5 0 0 1-.1-.3L6 7.5a.5.5 0 0 1 .45-.5Z" })), type: o.createElement(o.Fragment, null, o.createElement("path", { d: "M4 1.5c0-.27.22-.5.5-.5h5a.5.5 0 1 1 0 1h-2v10h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2V2h-2a.5.5 0 0 1-.5-.5Z" }), o.createElement("path", { d: "M0 4.5c0-.27.22-.5.5-.5h4a.5.5 0 1 1 0 1H1v4h3.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-5ZM9.5 4a.5.5 0 1 0 0 1H13v4H9.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-4Z" })), pointerdefault: o.createElement(o.Fragment, null, o.createElement("path", { d: "M5.94 12.46c.11 0 .2-.06.25-.15l1.58-3.16 2.54 2.54c.04.05.1.07.19.07a.3.3 0 0 0 .2-.07l.8-.8a.27.27 0 0 0 0-.38L8.9 7.9l3.4-1.7c.06-.03.1-.07.12-.11a.22.22 0 0 0 .04-.14.33.33 0 0 0-.06-.16.17.17 0 0 0-.09-.07h-.02L1.91 1.55a.27.27 0 0 0-.35.36l4.15 10.37c.04.09.12.16.23.17Zm-.03 1h-.02a1.28 1.28 0 0 1-1.1-.8L.62 2.29A1.27 1.27 0 0 1 2.3.63l10.35 4.15c.52.18.79.65.81 1.11.04.53-.27.98-.7 1.2l-2.17 1.08L12.2 9.8c.5.5.5 1.3 0 1.8l-.8.8v.01c-.5.46-1.3.48-1.8-.01l-1.56-1.56-.95 1.92c-.23.45-.68.7-1.15.7h-.03Z" })), pointerhand: o.createElement(o.Fragment, null, o.createElement("path", { d: "M11.87 6v-.02c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v1.41c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47V5.17a.6.6 0 0 0 0-.05c-.02-.27-.23-.5-.47-.5a.5.5 0 0 0-.52.5v1.65l-.01.1a.49.49 0 0 1-.46.37.48.48 0 0 1-.47-.47V4.62a.6.6 0 0 0 0-.05c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v2.2c0 .25-.22.47-.47.47a.49.49 0 0 1-.47-.47V1.75c-.02-.27-.22-.5-.47-.5a.5.5 0 0 0-.52.5v6.78c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47v-.26a.78.78 0 0 0-.06-.31.65.65 0 0 0-.16-.22l-.2-.19A6.37 6.37 0 0 0 3.06 7h-.02c-.43-.34-.62-.25-.69-.2-.26.14-.29.5-.13.74l1.73 2.6v.01h-.01l-.04.02.05-.02s1.21 2.6 3.57 2.6c3.54 0 4.2-1.9 4.31-4.42.04-.6.04-1.19.03-1.78V6Zm.97 2.38c-.06 1.29-.26 2.67-1.08 3.72-.88 1.12-2.29 1.65-4.23 1.65a4.64 4.64 0 0 1-3.4-1.62 6.96 6.96 0 0 1-1.05-1.5v-.02L1.4 8.1A1.6 1.6 0 0 1 1.15 7c.05-.38.26-.8.69-1.04.2-.13.48-.23.85-.19.36.05.68.22.98.45.14.1.27.22.4.33v-4.8A1.5 1.5 0 0 1 5.63.25c.93.04 1.43.86 1.43 1.55v1.33c.17-.05.35-.07.53-.06h.02c.5.04.91.33 1.15.71a1.5 1.5 0 0 1 .74-.16c.66.03 1.12.46 1.32.97a1.5 1.5 0 0 1 .64-.1h.02c.85.06 1.39.8 1.39 1.55v.48c0 .6 0 1.24-.03 1.86Z" })), browser: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5H.5Zm.5-1V4h12v8H1Zm1-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" })), tablet: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M3.5 0C2.67 0 2 .68 2 1.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11c0-.82-.67-1.5-1.5-1.5h-7Zm0 1h7c.28 0 .5.23.5.5V11H3V1.5c0-.27.22-.5.5-.5ZM6 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H6Z" })), mobile: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M3 1.5C3 .68 3.67 0 4.5 0h5c.83 0 1.5.68 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 3 12.5v-11ZM4 12V2h6v10H4Z" })), watch: o.createElement(o.Fragment, null, o.createElement("path", { key: "watch", fillRule: "evenodd", d: "M4 .5c0-.27.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 4 .5ZM9.5 3h-5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Zm-5-1C3.67 2 3 2.68 3 3.5v7c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-7c0-.82-.67-1.5-1.5-1.5h-5ZM7 4c.28 0 .5.23.5.5v2h1a.5.5 0 1 1 0 1H7a.5.5 0 0 1-.5-.5V4.5c0-.27.22-.5.5-.5Zm-2.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z" })), sidebar: o.createElement(o.Fragment, null, o.createElement("path", { d: "M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2ZM6 2h6v10H6V2Z" })), sidebaralt: o.createElement(o.Fragment, null, o.createElement("path", { d: "M9.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM10 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h6v10H2ZM9 2h3v10H9V2Z" })), sidebaralttoggle: o.createElement(o.Fragment, null, o.createElement("path", { d: "M11.5 4.5A.5.5 0 0 0 11 4h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5ZM11 6a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1Zm.5 2.5A.5.5 0 0 0 11 8h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11ZM9 12h3V2H9v10Zm-1 0H2V2h6v4.5H5.2l.66-.65a.5.5 0 1 0-.71-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 1 0 .7-.7l-.64-.65H8V12Z" })), sidebartoggle: o.createElement(o.Fragment, null, o.createElement("path", { d: "M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2Zm4 0V7.5h2.8l-.65.65a.5.5 0 1 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 1 0-.7.7l.64.65H6V2h6v10H6Z" })), bottombar: o.createElement(o.Fragment, null, o.createElement("path", { d: "M3 10.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 8V2h10v6H2Zm10 1v3H2V9h10Z" })), bottombartoggle: o.createElement(o.Fragment, null, o.createElement("path", { d: "M3.5 10a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z" }), o.createElement("path", { fillRule: "evenodd", d: "M1 12.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5Zm1-.5V9h10v3H2Zm4.5-4H2V2h10v6H7.5V5.21l.65.65a.5.5 0 1 0 .7-.71l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64v2.8Z" })), cpu: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M5 5.5c0-.27.22-.5.5-.5h3c.28 0 .5.23.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3ZM6 8V6h2v2H6Z" }), o.createElement("path", { fillRule: "evenodd", d: "M5.5 0c.28 0 .5.23.5.5V2h2V.5a.5.5 0 0 1 1 0V2h2.5c.28 0 .5.23.5.5V5h1.5a.5.5 0 0 1 0 1H12v2h1.5a.5.5 0 0 1 0 1H12v2.5a.5.5 0 0 1-.5.5H9v1.5a.5.5 0 0 1-1 0V12H6v1.5a.5.5 0 0 1-1 0V12H2.5a.5.5 0 0 1-.5-.5V9H.5a.5.5 0 0 1 0-1H2V6H.5a.5.5 0 0 1 0-1H2V2.5c0-.27.22-.5.5-.5H5V.5c0-.27.22-.5.5-.5ZM11 3H3v8h8V3Z" })), database: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M12 3c0-1.1-2.24-2-5-2s-5 .9-5 2v8c0 .43.26.75.54.98.3.23.68.41 1.12.55.88.3 2.06.47 3.34.47 1.28 0 2.46-.17 3.34-.46.44-.15.83-.33 1.12-.56.28-.23.54-.55.54-.98V3Zm-1.03 0a2.45 2.45 0 0 0-.8-.49A8.88 8.88 0 0 0 7 2c-1.29 0-2.4.21-3.16.51a2.45 2.45 0 0 0-.81.49l.05.05c.13.13.37.28.76.44C4.6 3.79 5.7 4 7 4s2.4-.21 3.16-.51a2.45 2.45 0 0 0 .81-.49ZM11 5.75V4.2A8.9 8.9 0 0 1 7 5a8.98 8.98 0 0 1-4-.8v1.55l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 6.75a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03v-.01ZM3 7.01c.2.1.42.2.66.28.88.29 2.06.46 3.34.46 1.28 0 2.46-.17 3.34-.46.24-.08.46-.17.66-.28V8.5l-.02.04a.62.62 0 0 1-.14.15c-.17.13-.44.27-.82.4A10 10 0 0 1 7 9.5a10 10 0 0 1-3.02-.41 2.76 2.76 0 0 1-.82-.4.62.62 0 0 1-.14-.15.15.15 0 0 1-.02-.03V7Zm0 2.75V11l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 12a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03V9.76c-.2.1-.42.2-.66.28-.88.29-2.06.46-3.34.46-1.28 0-2.46-.17-3.34-.46A4.77 4.77 0 0 1 3 9.76Z" })), memory: o.createElement(o.Fragment, null, o.createElement("path", { d: "M5 3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0V3Zm2-.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0V3c0-.28.22-.5.5-.5Zm3 2a.5.5 0 1 0-1 0V6a.5.5 0 0 0 1 0V4.5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M12 3.54a.5.5 0 0 0-.15-.39l-3-3a.5.5 0 0 0-.38-.14H2.5a.5.5 0 0 0-.5.5v13c0 .27.22.5.5.5h9a.5.5 0 0 0 .5-.5V3.53ZM3 1h5.3L11 3.71v5.3H3V1Zm0 9v3h8v-3H3Z" })), structure: o.createElement(o.Fragment, null, o.createElement("path", { d: "M8.16 3.45a1.5 1.5 0 1 0-2.33 0l-4.02 6.58A1.5 1.5 0 1 0 2.91 12h8.18a1.5 1.5 0 1 0 1.1-1.97L8.16 3.45Zm-1.47.52a1.5 1.5 0 0 0 .62 0l4.03 6.58c-.11.14-.2.29-.25.45H2.9a1.5 1.5 0 0 0-.25-.45L6.7 3.97Z" })), box: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "m7.21.05 6.49 2.99a.5.5 0 0 1 .3.47v6.98a.5.5 0 0 1-.3.47l-6.47 2.98a.5.5 0 0 1-.46 0L.3 10.96a.5.5 0 0 1-.3-.47V3.5a.5.5 0 0 1 .3-.47L6.79.05a.5.5 0 0 1 .43 0ZM1 4.28v5.9l5.5 2.54v-5.9L1 4.28Zm6.5 8.44 5.5-2.54v-5.9L7.5 6.82v5.9Zm4.8-9.22L7 5.95 1.7 3.5 7 1.05l5.3 2.45Z" })), power: o.createElement(o.Fragment, null, o.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6Z" }), o.createElement("path", { d: "M4.27 2.8a.5.5 0 0 0-.54-.83 6 6 0 1 0 6.54 0 .5.5 0 0 0-.54.84 5 5 0 1 1-5.46 0Z" })), photo: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M6.25 4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" }), o.createElement("path", { fillRule: "evenodd", d: "M13 1.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5ZM2 9.3V2h10v5.3L9.85 5.15a.5.5 0 0 0-.7 0L6.5 7.8 5.35 6.65a.5.5 0 0 0-.7 0L2 9.3Zm7.5-3.1L12 8.7V12H2v-1.3l3-3 3.15 3.15a.5.5 0 0 0 .7-.71L7.21 8.5 9.5 6.21Z" })), component: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M3.5 1A2.5 2.5 0 0 0 1 3.5v7A2.5 2.5 0 0 0 3.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 10.5 1h-7ZM12 6.5H7.5V2h3c.83 0 1.5.68 1.5 1.5v3Zm0 1v3c0 .83-.67 1.5-1.5 1.5h-3V7.5H12ZM6.5 12V7.5H2v3c0 .83.67 1.5 1.5 1.5h3ZM2 6.5h4.5V2h-3C2.67 2 2 2.68 2 3.5v3Z" })), grid: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.27.22-.5.5-.5H6c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H1.5A.5.5 0 0 1 1 6V1.5Zm1 4V2h3.5v3.5H2Zm5.5-4c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V1.5Zm1 4V2H12v3.5H8.5Zm-7 2A.5.5 0 0 0 1 8v4.5c0 .28.22.5.5.5H6a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H1.5Zm.5 1V12h3.5V8.5H2ZM7.5 8c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5v4.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8Zm1 4V8.5H12V12H8.5Z" })), outline: o.createElement(o.Fragment, null, o.createElement("path", { d: "M2 2v2H1V1.5c0-.27.22-.5.5-.5H4v1H2ZM1 9V5h1v4H1Zm0 1v2.5c0 .28.22.5.5.5H4v-1H2v-2H1Zm9 3h2.5a.5.5 0 0 0 .5-.5V10h-1v2h-2v1Zm2-9h1V1.5a.5.5 0 0 0-.5-.5H10v1h2v2Zm-3 8v1H5v-1h4ZM9 1v1H5V1h4Zm4 8h-1V5h1v4ZM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" })), photodrag: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M8.25 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" }), o.createElement("path", { fillRule: "evenodd", d: "M14 7V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5V6h1V4h2v6.5c0 .28.22.5.5.5H10v2H8v1h2.5a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V7ZM4 1v5.8l1.65-1.65c.2-.2.5-.2.7 0L7.5 6.3l2.65-2.65c.2-.2.5-.2.7 0L13 5.8V1H4Zm9 6.21-2.5-2.5-2.3 2.3 1.15 1.14a.5.5 0 1 1-.7.7L6 6.22l-2 2v1.8h9V7.2Z" }), o.createElement("path", { d: "M0 10V7h1v3H0Zm0 3.5V11h1v2h2v1H.5a.5.5 0 0 1-.5-.5Zm7 .5H4v-1h3v1Z" })), search: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" })), zoom: o.createElement(o.Fragment, null, o.createElement("path", { d: "M6 3.5c.28 0 .5.22.5.5v1.5H8a.5.5 0 0 1 0 1H6.5V8a.5.5 0 0 1-1 0V6.5H4a.5.5 0 0 1 0-1h1.5V4c0-.28.22-.5.5-.5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" })), zoomout: o.createElement(o.Fragment, null, o.createElement("path", { d: "M4 5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H4Z" }), o.createElement("path", { fillRule: "evenodd", d: "M6 11.5c1.35 0 2.59-.49 3.54-1.3.03.06.06.11.1.15l3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1A5.5 5.5 0 1 0 6 11.5Zm0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" })), zoomreset: o.createElement(o.Fragment, null, o.createElement("path", { d: "M1.5 2.84V1.5a.5.5 0 0 0-1 0V4c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1H2.26a4.5 4.5 0 1 1-.5 4.02.5.5 0 1 0-.94.33 5.5 5.5 0 0 0 8.72 2.36l.1.14 3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1 5.5 5.5 0 1 0-8.7-6.7Z" })), eye: o.createElement(o.Fragment, null, o.createElement("path", { d: "M7 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }), o.createElement("path", { fillRule: "evenodd", d: "m14 7-.2.3c-.13.16-3.06 4.2-6.8 4.2C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3C.34 6.55 3.27 2.5 7 2.5c3.74 0 6.67 4.04 6.8 4.2l.2.3ZM2.9 5.3A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8 1.52 0 2.96-.83 4.1-1.8A13 13 0 0 0 12.76 7a13 13 0 0 0-1.66-1.7C9.96 4.33 8.52 3.5 7 3.5c-1.52 0-2.96.83-4.1 1.8Z" })), eyeclose: o.createElement(o.Fragment, null, o.createElement("path", { d: "M1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11ZM11.1 8.7c-.17.15-.36.3-.55.44l.72.71a13.25 13.25 0 0 0 2.52-2.56L14 7l-.2-.3c-.13-.16-3.06-4.2-6.8-4.2-.89 0-1.73.23-2.5.58l.76.76A4.86 4.86 0 0 1 7 3.5c1.52 0 2.96.83 4.1 1.8A13 13 0 0 1 12.76 7a13 13 0 0 1-1.66 1.7ZM.2 6.7c.08-.09 1.04-1.41 2.53-2.55l.72.71c-.2.14-.38.3-.55.44A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8.6 0 1.18-.13 1.74-.34l.77.76c-.78.35-1.62.58-2.51.58C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3Z" }), o.createElement("path", { d: "M4.5 7c0-.32.06-.63.17-.91l3.24 3.24A2.5 2.5 0 0 1 4.5 7Zm4.83.91L6.09 4.67a2.5 2.5 0 0 1 3.24 3.24Z" })), lightning: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .28.09.5.5 0 0 0 .35-.14L11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L2.52 6.6Zm7.72.63-3.07-.8 1.85-4.14-5.2 4.51 2.94.77-1.27 4.28 4.75-4.62Zm-5.73 6.2.04.02Z" })), lightningoff: o.createElement(o.Fragment, null, o.createElement("path", { d: "M10.14 8.72 11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L5.46 4.05l.71.7L9.02 2.3 7.38 5.97l.7.7 2.16.56-.8.79.7.7ZM2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .63-.05l3.84-3.74-.7-.7-2.51 2.43 1.13-3.81-.68-.69L3.8 6.8l.85-.73-.71-.7L2.52 6.6Zm-.67-5.45a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z" })), contrast: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M3 3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h10a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3Zm1 1v2.3L6.3 4H4ZM3 4v6.5a.5.5 0 0 0 .5.5H10v2H1V4h2Zm1-1h6.5a.5.5 0 0 1 .5.5V10h2V1H4v2Zm6 7V7.71l-2.3 2.3H10Zm0-3.7V4.7L4.7 10h1.6L10 6.3ZM9.3 4H7.7L4 7.71V9.3L9.3 4Z" })), switchalt: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M3 3V.5c0-.27.22-.5.5-.5h10c.28 0 .5.23.5.5v10a.5.5 0 0 1-.5.5H11v2.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-10c0-.27.22-.5.5-.5H3Zm1 0V1h9v9h-2V3.5a.5.5 0 0 0-.5-.5H4Zm6 8v2H1V4h2v6.5c0 .28.22.5.5.5H10Zm0-1H4V4h6v6Z" })), mirror: o.createElement(o.Fragment, null, o.createElement("path", { d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12h10V2L2 12Z" })), grow: o.createElement(o.Fragment, null, o.createElement("path", { d: "M1.5 1a.5.5 0 1 0 0 1H12v10.5a.5.5 0 0 0 1 0V2a1 1 0 0 0-1-1H1.5Z" }), o.createElement("path", { d: "M1 3.5c0-.27.22-.5.5-.5H10a1 1 0 0 1 1 1v8.5a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1-.5-.5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M1.5 5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7ZM2 6v6h6V6H2Z" })), paintbrush: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M11.8535.1464a.5.5 0 0 0-.7071 0L2.9827 8.3102a2.2396 2.2396 0 0 0-1.0737.599C.6772 10.141.2402 11.903.0852 12.9978 0 13.5998 0 14.0002 0 14.0002s.4004 0 1.0023-.0853c1.095-.155 2.8569-.5919 4.0887-1.8237.307-.307.5067-.6806.5992-1.0743l8.1633-8.1633a.5.5 0 0 0 0-.7071l-2-2Zm-6.253 9.546L6.543 8.75l-1.293-1.2929-.9424.9424a2.242 2.242 0 0 1 .7835.5097c.23.2302.4.4977.5095.7831ZM7.25 8.0428 12.7929 2.5 11.5 1.2071 5.957 6.75 7.25 8.0429ZM4.3839 9.6163c.4881.4882.4881 1.2796 0 1.7678-.7665.7664-1.832 1.1845-2.7791 1.403a8.6972 8.6972 0 0 1-.49.0982 8.7151 8.7151 0 0 1 .0982-.4899c.2186-.9471.6367-2.0126 1.403-2.779.4882-.4882 1.2797-.4882 1.7679 0Z" })), ruler: o.createElement(o.Fragment, null, o.createElement("path", { d: "M1.5 1c.28 0 .5.23.5.5V2h10v-.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V3H2v.5a.5.5 0 0 1-1 0v-2c0-.27.22-.5.5-.5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M1.5 6a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-11ZM2 7v5h10V7h-1v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H7.5v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H4v2.5a.5.5 0 0 1-1 0V7H2Z" })), stop: o.createElement(o.Fragment, null, o.createElement("path", { d: "M4.5 4a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), camera: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" }), o.createElement("path", { fillRule: "evenodd", d: "M2.5 1a.5.5 0 0 0-.5.5V2H.5a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H6v-.5a.5.5 0 0 0-.5-.5h-3ZM1 3v8h12V3H1Z" })), video: o.createElement(o.Fragment, null, o.createElement("path", { d: "M2.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" }), o.createElement("path", { fillRule: "evenodd", d: "M0 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v.5l3.19-2.4a.5.5 0 0 1 .81.4v9a.5.5 0 0 1-.8.4L10 9.5v.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 0v1.5a.5.5 0 0 0 .8.4L13 3.5v7L9.8 8.1a.5.5 0 0 0-.8.4V10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z" })), speaker: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M1 4.50004V9.50004C1 9.77618 1.22386 10 1.5 10H4L7.17075 12.7744C7.49404 13.0573 8 12.8277 8 12.3982V1.60192C8 1.17235 7.49404 0.942757 7.17075 1.22564L4 4.00004H1.5C1.22386 4.00004 1 4.2239 1 4.50004ZM4 9.00004V5.00004H2V9.00004H4ZM4.99804 9.54456C4.99934 9.52989 5 9.51505 5 9.50004V4.50004C5 4.48504 4.99934 4.47019 4.99804 4.45552L7 2.70381V11.2963L4.99804 9.54456Z" }), o.createElement("path", { d: "M10.1498 1.75202C9.88637 1.66927 9.60572 1.81577 9.52297 2.07922C9.44023 2.34267 9.58672 2.62332 9.85017 2.70607C11.6763 3.27963 13 4.98596 13 7.00014C13 9.01433 11.6763 10.7207 9.85017 11.2942C9.58672 11.377 9.44023 11.6576 9.52297 11.9211C9.60572 12.1845 9.88637 12.331 10.1498 12.2483C12.3808 11.5476 14 9.4636 14 7.00014C14 4.53669 12.3808 2.45272 10.1498 1.75202Z" }), o.createElement("path", { d: "M10.2504 3.96861C10.0113 3.83033 9.70547 3.91201 9.5672 4.15105C9.42893 4.39008 9.51061 4.69594 9.74964 4.83421C10.4982 5.26723 11 6.07534 11 7.00006C11 7.92479 10.4982 8.7329 9.74964 9.16591C9.51061 9.30418 9.42893 9.61005 9.5672 9.84908C9.70547 10.0881 10.0113 10.1698 10.2504 10.0315C11.2952 9.42711 12 8.29619 12 7.00006C12 5.70394 11.2952 4.57302 10.2504 3.96861Z" })), play: o.createElement(o.Fragment, null, o.createElement("path", { d: "m12.81 7.43-9.05 5.6A.5.5 0 0 1 3 12.6V1.4c0-.4.43-.63.76-.43l9.05 5.6a.5.5 0 0 1 0 .86Z" })), playback: o.createElement(o.Fragment, null, o.createElement("path", { d: "M11.24 12.04 3.7 7.42a.5.5 0 0 1-.2-.23v4.05a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0V6.8a.5.5 0 0 1 .2-.23l7.54-4.6a.5.5 0 0 1 .76.42v9.22a.5.5 0 0 1-.76.43Z" })), playnext: o.createElement(o.Fragment, null, o.createElement("path", { d: "m2.76 12.04 7.54-4.61a.5.5 0 0 0 .2-.23v4.05a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0V6.8a.5.5 0 0 0-.2-.23l-7.54-4.6a.5.5 0 0 0-.76.42v9.22c0 .39.43.63.76.43Z" })), rewind: o.createElement(o.Fragment, null, o.createElement("path", { d: "M9 2.42v2.32L13.23 2a.5.5 0 0 1 .77.42v9.16a.5.5 0 0 1-.77.42L9 9.26v2.32a.5.5 0 0 1-.77.42L1.5 7.65v3.6a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0v3.6L8.23 2a.5.5 0 0 1 .77.42Z" })), fastforward: o.createElement(o.Fragment, null, o.createElement("path", { d: "M5 2.42v2.32L.77 2a.5.5 0 0 0-.77.42v9.16c0 .4.44.64.77.42L5 9.26v2.32c0 .4.44.64.77.42l6.73-4.35v3.6a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0v3.6L5.77 2a.5.5 0 0 0-.77.42Z" })), stopalt: o.createElement(o.Fragment, null, o.createElement("path", { d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11Z" })), sidebyside: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12V2h5v10H2Z" })), stacked: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M12.5 1c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11ZM2 2h10v5H2V2Z" })), sun: o.createElement(o.Fragment, null, o.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0V2a.5.5 0 0 0 1 0V.5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" }), o.createElement("path", { d: "M7 11.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-1 0V12c0-.28.22-.5.5-.5ZM11.5 7c0-.28.22-.5.5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5ZM.5 6.5a.5.5 0 0 0 0 1H2a.5.5 0 0 0 0-1H.5ZM3.82 10.18c.2.2.2.51 0 .7l-1.06 1.07a.5.5 0 1 1-.71-.7l1.06-1.07c.2-.2.51-.2.7 0ZM11.95 2.76a.5.5 0 1 0-.7-.71l-1.07 1.06a.5.5 0 1 0 .7.7l1.07-1.05ZM10.18 10.18c.2-.2.51-.2.7 0l1.07 1.06a.5.5 0 1 1-.7.71l-1.07-1.06a.5.5 0 0 1 0-.7ZM2.76 2.05a.5.5 0 1 0-.71.7l1.06 1.07a.5.5 0 0 0 .7-.7L2.77 2.04Z" })), moon: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M7.78.04a7.03 7.03 0 0 0-4.28.9 7 7 0 1 0 9.87 8.96c.1-.21-.14-.41-.36-.32a4.98 4.98 0 0 1-2 .42A5 5 0 0 1 8.53.65c.2-.12.19-.44-.04-.49a7.04 7.04 0 0 0-.72-.12Zm-1.27.98a6 6 0 0 0 4.98 9.96 6 6 0 1 1-4.98-9.96Z" })), book: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M13 2a2 2 0 0 0-2-2H1.5a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5H11a2 2 0 0 0 2-2V2ZM3 13h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H7v6a.5.5 0 0 1-.86.36L5.5 6.7l-.65.65A.5.5 0 0 1 4 7V1H3v12ZM5 1v4.8l.15-.15a.5.5 0 0 1 .74.04l.11.1V1H5Z" })), document: o.createElement(o.Fragment, null, o.createElement("path", { d: "M4 5.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM4.5 7.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM4 10.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M1.5 0a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5V3.2a.5.5 0 0 0-.15-.35l-2.7-2.7A.5.5 0 0 0 9.79 0H1.5ZM2 1h7.5v2c0 .28.22.5.5.5h2V13H2V1Z" })), copy: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M11.75.07A.5.5 0 0 0 11.5 0h-6a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5V11h4.5a.5.5 0 0 0 .5-.5V2.51a.5.5 0 0 0-.15-.36l-2-2a.5.5 0 0 0-.1-.08ZM9 10h4V3h-1.5a.5.5 0 0 1-.5-.5V1H6v2h.5a.5.5 0 0 1 .36.15l1.99 2c.1.09.15.21.15.35v4.51ZM1 4v9h7V6H6.5a.5.5 0 0 1-.5-.5V4H1Z" })), category: o.createElement(o.Fragment, null, o.createElement("path", { d: "M3 1.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-1 2c0-.27.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M1 5.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-7ZM2 12V6h10v6H2Z" })), folder: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M6.59 3.5 5.09 2H1v9h12V3.5H6.59Zm.41-1L5.8 1.3a1 1 0 0 0-.71-.3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H7Z" })), print: o.createElement(o.Fragment, null, o.createElement("path", { d: "M4.5 8a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M2 1.5c0-.27.22-.5.5-.5h8a.5.5 0 0 1 .36.15l.99 1c.1.09.15.21.15.35v1.51h1.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5H12v2.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10H.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5H2V1.5ZM13 9h-1V6.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V9H1V5h12v4Zm-2-6v1H3V2h7v.5c0 .28.22.5.5.5h.5Zm-8 9h8V7H3v5Z" })), graphline: o.createElement(o.Fragment, null, o.createElement("path", { d: "M5.15 6.15c.2-.2.5-.2.7 0L7 7.3l2.15-2.15c.2-.2.5-.2.7 0l1 1a.5.5 0 0 1-.7.7l-.65-.64-2.15 2.15a.5.5 0 0 1-.7 0L5.5 7.2 3.85 8.86a.5.5 0 1 1-.7-.71l2-2Z" }), o.createElement("path", { fillRule: "evenodd", d: "M1.5 1a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-11ZM2 2v10h10V2H2Z" })), calendar: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M3.5 0c.28 0 .5.22.5.5V1h6V.5a.5.5 0 0 1 1 0V1h1.5c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.28.22-.5.5-.5H3V.5c0-.28.22-.5.5-.5ZM2 4v2.3h3V4H2Zm0 5.2V6.8h3v2.4H2Zm0 .5V12h3V9.7H2Zm3.5 0V12h3V9.7h-3Zm3.5 0V12h3V9.7H9Zm3-.5H9V6.8h3v2.4Zm-3.5 0h-3V6.8h3v2.4ZM9 4v2.3h3V4H9ZM5.5 6.3h3V4h-3v2.3Z" })), graphbar: o.createElement(o.Fragment, null, o.createElement("path", { d: "M12 2.5a.5.5 0 0 0-1 0v10a.5.5 0 0 0 1 0v-10Zm-3 2a.5.5 0 0 0-1 0v8a.5.5 0 0 0 1 0v-8ZM5.5 7c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM3 10.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Z" })), menu: o.createElement(o.Fragment, null, o.createElement("path", { d: "M13 2a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h12Zm-3 3a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h9Zm1.5 3.5A.5.5 0 0 0 11 8H1a.5.5 0 0 0 0 1h10a.5.5 0 0 0 .5-.5Zm-4 2.5a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h6.5Z" })), menualt: o.createElement(o.Fragment, null, o.createElement("path", { d: "M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm3 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H4ZM2.5 8.5c0-.28.22-.5.5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5Zm4 2.5a.5.5 0 0 0 0 1H13a.5.5 0 0 0 0-1H6.5Z" })), filter: o.createElement(o.Fragment, null, o.createElement("path", { d: "M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm2 3a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H3Zm1.5 3.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Zm2 2.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z" })), docchart: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M1 1.5C1 1.22386 1.22386 1 1.5 1H12.5C12.7761 1 13 1.22386 13 1.5V12.5C13 12.7761 12.7761 13 12.5 13H1.5C1.22386 13 1 12.7761 1 12.5V1.5ZM2 4V6.2998H5V4H2ZM2 9.2002V6.7998H5V9.2002H2ZM2 9.7002V12H5V9.7002H2ZM5.5 9.7002V12H8.5V9.7002H5.5ZM9 9.7002V12H12V9.7002H9ZM12 9.2002H9V6.7998H12V9.2002ZM8.5 9.2002H5.5V6.7998H8.5V9.2002ZM9 6.2998H12V4H9V6.2998ZM5.5 6.2998H8.5V4H5.5V6.2998Z" })), doclist: o.createElement(o.Fragment, null, o.createElement("path", { d: "M3.5 6.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5ZM4 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H4Z" }), o.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 4v8h10V4H2Z" })), markup: o.createElement(o.Fragment, null, o.createElement("path", { d: "M8.98 1.63a.5.5 0 0 0-.96-.26l-3 11a.5.5 0 1 0 .96.26l3-11ZM3.32 3.62a.5.5 0 0 1 .06.7L1.15 7l2.23 2.68a.5.5 0 1 1-.76.64l-2.5-3a.5.5 0 0 1 0-.64l2.5-3a.5.5 0 0 1 .7-.06Zm7.36 0a.5.5 0 0 0-.06.7L12.85 7l-2.23 2.68a.5.5 0 0 0 .76.64l2.5-3a.5.5 0 0 0 0-.64l-2.5-3a.5.5 0 0 0-.7-.06Z" })), bold: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M3 2v1.5h1v7H3V12h5a3 3 0 0 0 1.8-5.4A2.74 2.74 0 0 0 8 2H3Zm5 5.5H5.5v3H8a1.5 1.5 0 1 0 0-3Zm-.25-4H5.5V6h2.25a1.25 1.25 0 1 0 0-2.5Z" })), italic: o.createElement("path", { d: "M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2Z" }), paperclip: o.createElement(o.Fragment, null, o.createElement("path", { d: "M10.55 2.27a1.5 1.5 0 0 0-2.12 0L2.78 7.92a2.5 2.5 0 0 0 3.53 3.54l3.54-3.54a.5.5 0 1 1 .7.71l-3.53 3.54a3.5 3.5 0 0 1-4.96-4.94v-.01l5.66-5.66h.01a2.5 2.5 0 0 1 3.53 3.53L5.6 10.76a1.5 1.5 0 0 1-2.12-2.12L7.02 5.1a.5.5 0 1 1 .7.7L4.2 9.34a.5.5 0 0 0 .7.7l5.66-5.65a1.5 1.5 0 0 0 0-2.12Z" })), listordered: o.createElement(o.Fragment, null, o.createElement("path", { d: "M5 2.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm.5 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm-3-9H1v1h1v3h1V2.5a.5.5 0 0 0-.5-.5ZM3 8.5v1a.5.5 0 0 1-1 0V9h-.5a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm-1 2a.5.5 0 0 0-1 0V12h2v-1H2v-.5Z" })), listunordered: o.createElement(o.Fragment, null, o.createElement("path", { d: "M2.75 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.5 2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0 9a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM2 12.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm-3 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" })), paragraph: o.createElement(o.Fragment, null, o.createElement("path", { d: "M6 7a3 3 0 1 1 0-6h5.5a.5.5 0 0 1 0 1H10v10.5a.5.5 0 0 1-1 0V2H7v10.5a.5.5 0 0 1-1 0V7Z" })), markdown: o.createElement(o.Fragment, null, o.createElement("path", { d: "M2 4.5h1.5L5 6.38 6.5 4.5H8v5H6.5V7L5 8.88 3.5 7v2.5H2v-5Zm7.75 0h1.5V7h1.25l-2 2.5-2-2.5h1.25V4.5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M.5 2a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5ZM1 3v8h12V3H1Z" })), repository: o.createElement(o.Fragment, null, o.createElement("path", { d: "M5 2.5C5 2.77614 4.77614 3 4.5 3C4.22386 3 4 2.77614 4 2.5C4 2.22386 4.22386 2 4.5 2C4.77614 2 5 2.22386 5 2.5Z" }), o.createElement("path", { d: "M4.5 5C4.77614 5 5 4.77614 5 4.5C5 4.22386 4.77614 4 4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5Z" }), o.createElement("path", { d: "M5 6.5C5 6.77614 4.77614 7 4.5 7C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6C4.77614 6 5 6.22386 5 6.5Z" }), o.createElement("path", { fillRule: "evenodd", d: "M11 0C12.1046 0 13 0.895431 13 2V12C13 13.1046 12.1046 14 11 14H1.5C1.22386 14 1 13.7761 1 13.5V0.5C1 0.223857 1.22386 0 1.5 0H11ZM11 1H3V13H11C11.5523 13 12 12.5523 12 12V2C12 1.44772 11.5523 1 11 1Z" })), commit: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M3.03 7.5a4 4 0 0 0 7.94 0h2.53a.5.5 0 0 0 0-1h-2.53a4 4 0 0 0-7.94 0H.5a.5.5 0 0 0 0 1h2.53ZM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" })), branch: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M6 2.5c0 .65-.42 1.2-1 1.41v4.06A3.36 3.36 0 0 1 7.5 7a2.7 2.7 0 0 0 1.81-.56c.22-.18.38-.4.48-.62a1.5 1.5 0 1 1 1.03.15c-.16.42-.43.87-.86 1.24-.57.47-1.37.79-2.46.79-1.04 0-1.64.42-2 .92-.26.37-.4.8-.47 1.18A1.5 1.5 0 1 1 4 10.09V3.9a1.5 1.5 0 1 1 2-1.4Zm-2 9a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1-9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" })), pullrequest: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M8.35 1.35 7.71 2h.79A2.5 2.5 0 0 1 11 4.5v5.59a1.5 1.5 0 1 1-1 0V4.5C10 3.67 9.33 3 8.5 3h-.8l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7ZM11 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4 3.91a1.5 1.5 0 1 0-1 0v6.18a1.5 1.5 0 1 0 1 0V3.9ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" })), merge: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M4.1 3.87a1.5 1.5 0 1 0-1.1.04v6.18a1.5 1.5 0 1 0 1 0V6.4c.26.4.57.77.93 1.08A6.57 6.57 0 0 0 9.08 9a1.5 1.5 0 1 0 0-1 5.57 5.57 0 0 1-3.5-1.25 4.74 4.74 0 0 1-1.47-2.87ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM4 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm7 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" })), apple: o.createElement(o.Fragment, null, o.createElement("path", { d: "M11.03 8.1a3.05 3.05 0 0 1-.2-1.74 2.7 2.7 0 0 1 1.4-1.94 3.13 3.13 0 0 0-2.35-1.4c-.84-.08-2.01.56-2.65.57h-.02c-.63 0-1.81-.65-2.64-.57-.42.04-1.75.32-2.55 1.6-.28.44-.5 1.01-.58 1.74a6.36 6.36 0 0 0 .02 1.74 7.5 7.5 0 0 0 1.35 3.33c.7 1.01 1.51 1.6 1.97 1.6.93.02 1.74-.6 2.41-.6l.02.01h.04c.67-.02 1.48.61 2.42.6.45-.02 1.26-.6 1.97-1.6a7.95 7.95 0 0 0 .97-1.86 2.6 2.6 0 0 1-1.58-1.48ZM8.86 2.13c.72-.85.7-2.07.63-2.12-.07-.06-1.25.16-1.99.98a2.78 2.78 0 0 0-.62 2.13c.06.05 1.27-.14 1.98-.99Z" })), linux: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M7 0a3 3 0 0 1 3 3v1.24c.13.13.25.27.36.42l.52.43.2.15c.32.26.7.59 1.09.97A6.28 6.28 0 0 1 14 9.54a.5.5 0 0 1-.35.44c-.31.1-.8.18-1.34.13-.33-.03-.7-.12-1.05-.3-.04.17-.1.34-.17.51a2 2 0 1 1-2.89 2.56 5.5 5.5 0 0 1-2.4 0 2 2 0 1 1-2.9-2.56 5.56 5.56 0 0 1-.16-.51c-.35.18-.72.27-1.05.3a3.4 3.4 0 0 1-1.34-.13.5.5 0 0 1-.35-.44l.01-.14a6.28 6.28 0 0 1 1.82-3.2 13.42 13.42 0 0 1 1.3-1.11c.22-.19.4-.32.5-.43.12-.15.24-.29.37-.42V3a3 3 0 0 1 3-3Zm1 11.9a2 2 0 0 1 2.14-1.9 5.5 5.5 0 0 0 .36-2c0-.51-.1-1.07-.3-1.6l-.03-.02a4.4 4.4 0 0 0-.86-.42 6.71 6.71 0 0 0-1-.31l-.86.64c-.27.2-.63.2-.9 0l-.85-.64a6.72 6.72 0 0 0-1.87.73l-.03.02A4.6 4.6 0 0 0 3.5 8c0 .68.11 1.39.36 2H4a2 2 0 0 1 2 1.9 4.49 4.49 0 0 0 2 0ZM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.1 4.3a1.5 1.5 0 0 1 1.8 0l.27.2L7 5.38 5.83 4.5l.27-.2ZM8.5 2c.28 0 .5.22.5.5V3a.5.5 0 0 1-1 0v-.5c0-.28.22-.5.5-.5ZM6 2.5a.5.5 0 0 0-1 0V3a.5.5 0 0 0 1 0v-.5Z" })), ubuntu: o.createElement(o.Fragment, null, o.createElement("path", { d: "M12.26 2.07c0 1.14-.89 2.06-1.99 2.06s-1.99-.92-1.99-2.06c0-1.14.9-2.07 2-2.07s1.98.93 1.98 2.07ZM3.98 6.6c0 1.14-.9 2.07-2 2.07C.9 8.67 0 7.74 0 6.6c0-1.14.9-2.07 1.99-2.07 1.1 0 1.99.93 1.99 2.07ZM6.47 11.92a4.76 4.76 0 0 1-3.3-2.62c-.53.25-1.12.33-1.7.22a6.72 6.72 0 0 0 1.84 2.63 6.38 6.38 0 0 0 4.24 1.58c-.37-.5-.57-1.1-.59-1.73a4.77 4.77 0 0 1-.49-.08ZM11.81 11.93c0 1.14-.89 2.07-1.99 2.07s-1.98-.93-1.98-2.07c0-1.14.89-2.06 1.98-2.06 1.1 0 2 .92 2 2.06ZM12.6 11.17a6.93 6.93 0 0 0 .32-7.93A2.95 2.95 0 0 1 11.8 4.6a5.23 5.23 0 0 1-.16 5.03c.47.4.8.94.95 1.54ZM1.99 3.63h-.15A6.48 6.48 0 0 1 8 .24a3.07 3.07 0 0 0-.6 1.68 4.7 4.7 0 0 0-3.9 2.17c-.46-.3-.98-.45-1.51-.45Z" })), windows: o.createElement(o.Fragment, null, o.createElement("path", { d: "M6.5 1H1v5.5h5.5V1ZM13 1H7.5v5.5H13V1ZM7.5 7.5H13V13H7.5V7.5ZM6.5 7.5H1V13h5.5V7.5Z" })), storybook: o.createElement(o.Fragment, null, o.createElement("path", { d: "M2.04.62a.7.7 0 0 0-.66.72l.44 11.56c.01.37.3.66.67.68l9.4.42h.02a.7.7 0 0 0 .7-.7V.66a.7.7 0 0 0-.74-.66l-.77.05.05 1.62a.1.1 0 0 1-.17.08l-.52-.4-.61.46a.1.1 0 0 1-.17-.09L9.75.13l-7.7.49Zm8 4.74c-.24.2-2.09.33-2.09.05.04-1.04-.43-1.09-.69-1.09-.24 0-.66.08-.66.64 0 .57.6.89 1.32 1.27 1.02.53 2.24 1.18 2.24 2.82 0 1.57-1.27 2.43-2.9 2.43-1.67 0-3.14-.68-2.97-3.03.06-.27 2.2-.2 2.2 0-.03.97.19 1.26.75 1.26.43 0 .62-.24.62-.64 0-.6-.63-.95-1.36-1.36-.99-.56-2.15-1.2-2.15-2.7 0-1.5 1.03-2.5 2.86-2.5 1.83 0 2.84.99 2.84 2.85Z" })), azuredevops: o.createElement(o.Fragment, null, o.createElement("path", { d: "m0 5.18 1.31-1.73 4.9-2V.01l4.3 3.15-8.78 1.7v4.8L0 9.16V5.18Zm14-2.6v8.55l-3.36 2.86-5.42-1.79V14L1.73 9.66l8.78 1.05V3.16L14 2.58Z" })), bitbucket: o.createElement(o.Fragment, null, o.createElement("path", { d: "M1 1.52A.41.41 0 0 0 .59 2l1.74 10.6c.05.26.28.46.55.46h8.37c.2 0 .38-.14.42-.34l1.01-6.25H8.81l-.46 2.71H5.68L4.95 5.4h7.91L13.4 2a.41.41 0 0 0-.41-.48H1Z" })), chrome: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M13.02 3.43a.11.11 0 0 1-.1.17H7a3.4 3.4 0 0 0-3.3 2.55.11.11 0 0 1-.21.03L1.52 2.76a.11.11 0 0 1 0-.12 6.97 6.97 0 0 1 9-1.7c1.03.6 1.9 1.47 2.5 2.5ZM7 9.62a2.62 2.62 0 1 1 0-5.24 2.62 2.62 0 0 1 0 5.24Zm1.03.7a.11.11 0 0 0-.12-.04 3.4 3.4 0 0 1-4-1.84L1.1 3.57a.11.11 0 0 0-.2 0 7 7 0 0 0 5.07 10.35c.04 0 .08-.02.1-.05l1.97-3.42a.11.11 0 0 0 0-.13Zm1.43-5.95h3.95c.05 0 .1.03.1.07a6.97 6.97 0 0 1-1.53 7.48A6.96 6.96 0 0 1 7.08 14a.11.11 0 0 1-.1-.17l2.81-4.88h.01a3.38 3.38 0 0 0-.42-4.38.11.11 0 0 1 .08-.2Z" })), chromatic: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M0 7a7 7 0 1 0 14 0A7 7 0 0 0 0 7Zm5.22-3.87a1.97 1.97 0 0 1 3.75.83v1.29L5.61 3.32a2.49 2.49 0 0 0-.4-.19ZM8.7 5.71 5.35 3.78a1.97 1.97 0 0 0-2.6 2.83c.12-.1.24-.18.37-.26l1.51-.87a.27.27 0 0 1 .27 0L7 6.69l1.7-.98Zm-.32 4.97-1.52-.87a.27.27 0 0 1-.13-.23V7.15l-1.7-.97v3.86a1.97 1.97 0 0 0 3.75.83 2.5 2.5 0 0 1-.4-.19Zm.26-.46a1.97 1.97 0 0 0 2.6-2.83c-.11.1-.23.18-.36.26L7.53 9.58l1.11.64Zm-4.1.26h-.17a1.97 1.97 0 0 1-1.9-2.47 2 2 0 0 1 .92-1.2l1.11-.63v3.86c0 .14.01.29.04.44Zm6.79-5.98a1.97 1.97 0 0 0-1.87-.97c.03.14.04.29.04.43v1.75c0 .1-.05.19-.14.23l-2.1 1.22V9.1l3.35-1.93a1.97 1.97 0 0 0 .72-2.68Z" })), componentdriven: o.createElement(o.Fragment, null, o.createElement("path", { d: "M10.85 2.18 8.87.2a.69.69 0 0 0-.97 0L3.09 5.01a.69.69 0 0 0 0 .97l2.46 2.46-2.4 2.4a.69.69 0 0 0 0 .98l1.98 1.98c.27.27.7.27.97 0l4.8-4.81a.69.69 0 0 0 0-.97L8.45 5.56l2.4-2.4a.69.69 0 0 0 0-.98Z" })), discord: o.createElement(o.Fragment, null, o.createElement("path", { d: "M11.85 2.88C10.95 2.48 10 2.18 9 2a7.05 7.05 0 0 0-.4.75 10.66 10.66 0 0 0-3.2 0c-.1-.23-.24-.5-.36-.73A.04.04 0 0 0 4.99 2a11.51 11.51 0 0 0-2.86.9 11.82 11.82 0 0 0-2.05 8 11.6 11.6 0 0 0 3.5 1.77c.01 0 .03 0 .04-.02.27-.36.51-.75.72-1.16a.04.04 0 0 0-.03-.06 7.66 7.66 0 0 1-1.09-.52.04.04 0 0 1 0-.08 5.96 5.96 0 0 0 .26-.17 8.28 8.28 0 0 0 7.08 0l.22.17c.02.02.02.06 0 .08-.36.2-.72.37-1.1.52a.04.04 0 0 0-.02.06c.2.4.45.8.71 1.16.01.02.03.02.05.02a11.57 11.57 0 0 0 3.52-1.8 11.74 11.74 0 0 0-2.09-7.99Zm-7.17 6.4c-.7 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.56 1.42-1.26 1.42Zm4.65 0c-.69 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.55 1.42-1.26 1.42Z" })), facebook: o.createElement(o.Fragment, null, o.createElement("path", { d: "M7.4 14H5.06V7H3.5V4.59h1.56V3.17C5.06 1.2 5.53 0 7.6 0h1.72v2.41H8.25c-.8 0-.85.34-.85.97v1.2h1.93L9.11 7H7.4l-.01 7Z" })), figma: o.createElement(o.Fragment, null, o.createElement("path", { fillRule: "evenodd", d: "M9.2 0H4.8a2.6 2.6 0 0 0-1.4 4.8 2.6 2.6 0 0 0 0 4.4 2.6 2.6 0 1 0 4 2.2V8.89a2.6 2.6 0 1 0 3.2-4.09A2.6 2.6 0 0 0 9.2 0ZM7.4 7A1.8 1.8 0 1 0 11 7a1.8 1.8 0 0 0-3.6 0Zm-.8 2.6H4.8a1.8 1.8 0 1 0 1.8 1.8V9.6ZM4.8 4.4h1.8V.8H4.8a1.8 1.8 0 0 0 0 3.59Zm0 .8a1.8 1.8 0 0 0 0 3.6h1.8V5.2H4.8Zm4.4-.8H7.4V.8h1.8a1.8 1.8 0 1 1 0 3.59Z" })), gdrive: o.createElement(o.Fragment, null, o.createElement("path", { d: "M6.37 8.77 4.33 12.3h6.75l2.04-3.54H6.38Zm6.18-1-3.5-6.08h-4.1l3.51 6.08h4.09ZM4.38 2.7.88 8.77l2.04 3.54 3.5-6.07L4.38 2.7Z" })), github: o.createElement(o.Fragment, null, o.createElement("path", { d: "M7 0a7 7 0 0 0-2.21 13.64c.35.06.48-.15.48-.33L5.26 12c-1.76.32-2.21-.43-2.35-.83-.08-.2-.43-.82-.72-.99-.25-.13-.6-.45-.01-.46.55 0 .94.5 1.07.72.63 1.06 1.64.76 2.04.58.07-.46.25-.77.45-.94-1.56-.18-3.19-.78-3.19-3.46 0-.76.28-1.39.72-1.88-.07-.17-.31-.9.07-1.85 0 0 .59-.19 1.93.71a6.5 6.5 0 0 1 3.5 0c1.34-.9 1.92-.71 1.92-.71.39.96.14 1.68.07 1.85.45.5.72 1.11.72 1.88 0 2.69-1.64 3.28-3.2 3.46.26.22.48.64.48 1.3l-.01 1.92c0 .18.13.4.48.33A7.01 7.01 0 0 0 7 0Z" })), gitlab: o.createElement(o.Fragment, null, o.createElement("path", { d: "M4.53 5.58H1.07l1.49-4.55a.26.26 0 0 1 .48 0l1.49 4.55ZM7 13.15 1.07 5.58l-.75 2.3a.5.5 0 0 0 .18.57l6.5 4.7Zm0 0 6.5-4.7a.5.5 0 0 0 .18-.57l-.75-2.3L7 13.15l2.47-7.57H4.53L7 13.15Zm2.47-7.57h3.46l-1.49-4.55a.26.26 0 0 0-.48 0L9.47 5.58Z" })), google: o.createElement(o.Fragment, null, o.createElement("path", { d: "M10.92 1.1H7.26c-1.64 0-3.19 1.24-3.19 2.68 0 1.47 1.12 2.66 2.8 2.66l.33-.01c-.1.2-.18.44-.18.68 0 .41.22.75.5 1.02h-.64c-2.03 0-3.6 1.3-3.6 2.64 0 1.32 1.72 2.15 3.75 2.15 2.32 0 3.6-1.31 3.6-2.64 0-1.06-.31-1.7-1.28-2.38-.33-.23-.96-.8-.96-1.14 0-.39.1-.58.7-1.04a2.46 2.46 0 0 0 1.03-1.92c0-.92-.4-1.82-1.18-2.11h1.17l.81-.6ZM9.6 10.04c.03.13.05.25.05.38 0 1.07-.7 1.9-2.67 1.9-1.4 0-2.42-.88-2.42-1.95 0-1.05 1.26-1.92 2.66-1.9a3 3 0 0 1 .92.14c.76.53 1.3.83 1.46 1.43ZM7.34 6.07c-.94-.03-1.84-1.06-2-2.3-.17-1.24.47-2.19 1.41-2.16.94.03 1.84 1.03 2 2.26.17 1.24-.47 2.23-1.41 2.2Z" })), graphql: o.createElement(o.Fragment, null, o.createElement("path", { d: "M7.87 11.6a1.17 1.17 0 0 0-1.7-.02l-2.71-1.56.01-.04h7.07l.02.07-2.69 1.56Zm-1.7-9.18.03.03-3.54 6.12h-.04V5.43a1.17 1.17 0 0 0 .84-1.46l2.7-1.56Zm4.38 1.56a1.17 1.17 0 0 0 .84 1.46v3.12l-.04.01-3.54-6.12c.02 0 .03-.02.04-.03l2.7 1.56ZM3.47 9.42a1.17 1.17 0 0 0-.32-.57l3.53-6.12a1.17 1.17 0 0 0 .65 0l3.54 6.12a1.17 1.17 0 0 0-.33.57H3.47Zm8.8-.74c-.1-.05-.21-.1-.32-.12V5.44a1.17 1.17 0 1 0-1.12-1.94l-2.7-1.56a1.17 1.17 0 1 0-2.24 0L3.19 3.5a1.17 1.17 0 1 0-1.13 1.94v3.12a1.17 1.17 0 1 0 1.12 1.94l2.7 1.56a1.17 1.17 0 1 0 2.24-.03l2.69-1.55a1.17 1.17 0 1 0 1.45-1.8Z" })), medium: o.createElement(o.Fragment, null, o.createElement("path", { d: "M0 0v14h14V0H0Zm11.63 3.32-.75.72a.22.22 0 0 0-.08.2v5.33c0 .07.03.14.08.18l.73.72v.16H7.92v-.16l.76-.74c.08-.07.08-.1.08-.21V5.24l-2.11 5.37h-.29L3.9 5.24v3.67c0 .13.05.25.14.34l.99 1.2v.16h-2.8v-.16l.98-1.2a.48.48 0 0 0 .13-.41V4.65c0-.11-.04-.2-.12-.27l-.88-1.06v-.16h2.73l2.1 4.62 1.86-4.62h2.6v.16Z" })), redux: o.createElement(o.Fragment, null, o.createElement("path", { d: "M4.06 9.69c.02.49.42.88.91.88H5a.91.91 0 0 0-.03-1.83h-.03c-.03 0-.08 0-.11.02a5.97 5.97 0 0 1-.85-3.62c.06-.98.39-1.82.96-2.52.47-.6 1.39-.9 2-.92 1.73-.03 2.47 2.12 2.51 2.99.22.04.57.16.82.24-.2-2.64-1.83-4-3.4-4-1.46 0-2.81 1.05-3.35 2.61a6.67 6.67 0 0 0 .65 5.68.74.74 0 0 0-.11.47Zm8.28-2.3a6.62 6.62 0 0 0-5.15-2.25h-.26a.9.9 0 0 0-.8-.49H6.1a.91.91 0 0 0 .03 1.83h.03a.92.92 0 0 0 .8-.56h.3c1.23 0 2.4.36 3.47 1.06.81.54 1.4 1.24 1.72 2.09.28.68.26 1.35-.03 1.92a2.4 2.4 0 0 1-2.23 1.34c-.65 0-1.27-.2-1.6-.34-.18.16-.5.42-.73.58.7.33 1.41.5 2.1.5 1.56 0 2.72-.85 3.16-1.72.47-.94.44-2.57-.78-3.96ZM4.9 12.9a4 4 0 0 1-.98.11c-1.2 0-2.3-.5-2.84-1.32C.38 10.6.13 8.3 2.5 6.58c.05.26.15.62.22.83-.31.23-.8.68-1.11 1.3a2.4 2.4 0 0 0 .13 2.53c.36.54.93.86 1.66.96.9.11 1.8-.05 2.66-.5a5.83 5.83 0 0 0 2.67-2.56.91.91 0 0 1 .62-1.55h.03a.92.92 0 0 1 .1 1.82 6.26 6.26 0 0 1-4.56 3.49Z" })), twitter: o.createElement(o.Fragment, null, o.createElement("path", { d: "M14 2.55c-.51.23-1.07.39-1.65.46.6-.36 1.05-.94 1.26-1.63-.55.34-1.17.58-1.82.72a2.84 2.84 0 0 0-2.1-.93 2.9 2.9 0 0 0-2.8 3.61 8.09 8.09 0 0 1-5.9-3.07 2.99 2.99 0 0 0 .88 3.93 2.8 2.8 0 0 1-1.3-.37v.04c0 1.42 1 2.61 2.3 2.89a2.82 2.82 0 0 1-1.3.05 2.89 2.89 0 0 0 2.7 2.04A5.67 5.67 0 0 1 0 11.51a7.98 7.98 0 0 0 4.4 1.32c5.29 0 8.17-4.48 8.17-8.38v-.38A5.93 5.93 0 0 0 14 2.55Z" })), youtube: o.createElement(o.Fragment, null, o.createElement("path", { d: "M13.99 8.17V5.83a14.95 14.95 0 0 0-.23-2.22c-.09-.38-.27-.7-.55-.96s-.6-.41-.97-.45A51.3 51.3 0 0 0 7 2c-2.34 0-4.09.07-5.24.2A1.78 1.78 0 0 0 .25 3.61 15.26 15.26 0 0 0 0 7v1.16a15.24 15.24 0 0 0 .24 2.22c.09.38.27.7.55.96.27.26.6.41.97.45 1.15.13 2.9.2 5.24.2 2.34 0 4.08-.06 5.24-.2.37-.04.7-.19.97-.45s.45-.58.54-.96a15.26 15.26 0 0 0 .24-2.22Zm-4.23-1.6c.16.1.24.24.24.43 0 .2-.08.33-.24.42l-4 2.5a.44.44 0 0 1-.26.08.54.54 0 0 1-.24-.06A.46.46 0 0 1 5 9.5v-5c0-.2.08-.34.26-.44.17-.1.34-.09.5.02l4 2.5Z" })), vscode: o.createElement(o.Fragment, null, o.createElement("path", { d: "M10.24.04c.13 0 .26.03.38.09L13.5 1.5a.87.87 0 0 1 .5.8v.03-.01 9.39c0 .33-.2.63-.5.78l-2.88 1.38a.87.87 0 0 1-1-.17l-5.5-5.03-2.4 1.83a.58.58 0 0 1-.75-.04l-.77-.7a.58.58 0 0 1 0-.86L2.27 7 .2 5.1a.58.58 0 0 1 0-.86l.77-.7c.21-.2.52-.2.75-.04l2.4 1.83L9.63.3a.87.87 0 0 1 .61-.26Zm.26 3.78L6.32 7l4.18 3.18V3.82Z" })) }, lc = _.svg`
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
  fill: currentColor;

  path {
    fill: currentColor;
  }
`, ve = ({ icon: e, useSymbol: t, ...r }) => o.createElement(lc, { viewBox: "0 0 14 14", width: "14px", height: "14px", ...r }, t ? o.createElement("use", { xlinkHref: `#icon--${e}` }) : Lr[e]);
b.memo(function({ icons: e = Object.keys(Lr) }) {
  return o.createElement(lc, { viewBox: "0 0 14 14", style: { position: "absolute", width: 0, height: 0 }, "data-chromatic": "ignore" }, e.map((t) => o.createElement("symbol", { id: `icon--${t}`, key: t }, Lr[t])));
});
var gg = 0, hg = (e) => e.button === gg && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey, bg = (e, t) => {
  hg(e) && (e.preventDefault(), t(e));
}, yg = _.span(({ withArrow: e }) => e ? { "> svg:last-of-type": { height: "0.7em", width: "0.7em", marginRight: 0, marginLeft: "0.25em", bottom: "auto", verticalAlign: "inherit" } } : {}, ({ containsIcon: e }) => e ? { svg: { height: "1em", width: "1em", verticalAlign: "middle", position: "relative", bottom: 0, marginRight: 0 } } : {}), vg = _.a(({ theme: e }) => ({ display: "inline-block", transition: "all 150ms ease-out", textDecoration: "none", color: e.color.secondary, "&:hover, &:focus": { cursor: "pointer", color: Yt(0.07, e.color.secondary), "svg path:not([fill])": { fill: Yt(0.07, e.color.secondary) } }, "&:active": { color: Yt(0.1, e.color.secondary), "svg path:not([fill])": { fill: Yt(0.1, e.color.secondary) } }, svg: { display: "inline-block", height: "1em", width: "1em", verticalAlign: "text-top", position: "relative", bottom: "-0.125em", marginRight: "0.4em", "& path": { fill: e.color.secondary } } }), ({ theme: e, secondary: t, tertiary: r }) => {
  let n;
  return t && (n = [e.textMutedColor, e.color.dark, e.color.darker]), r && (n = [e.color.dark, e.color.darkest, e.textMutedColor]), n ? { color: n[0], "svg path:not([fill])": { fill: n[0] }, "&:hover": { color: n[1], "svg path:not([fill])": { fill: n[1] } }, "&:active": { color: n[2], "svg path:not([fill])": { fill: n[2] } } } : {};
}, ({ nochrome: e }) => e ? { color: "inherit", "&:hover, &:active": { color: "inherit", textDecoration: "underline" } } : {}, ({ theme: e, inverse: t }) => t ? { color: e.color.lightest, ":not([fill])": { fill: e.color.lightest }, "&:hover": { color: e.color.lighter, "svg path:not([fill])": { fill: e.color.lighter } }, "&:active": { color: e.color.light, "svg path:not([fill])": { fill: e.color.light } } } : {}, ({ isButton: e }) => e ? { border: 0, borderRadius: 0, background: "none", padding: 0, fontSize: "inherit" } : {}), Bt = ({ cancel: e, children: t, onClick: r, withArrow: n, containsIcon: a, className: l, ...i }) => o.createElement(vg, { ...i, onClick: r && e ? (u) => bg(u, r) : r, className: l }, o.createElement(yg, { withArrow: n, containsIcon: a }, t, n && o.createElement(ve, { icon: "arrowright" })));
Bt.defaultProps = { cancel: !0, className: void 0, style: void 0, onClick: void 0, withArrow: !1, containsIcon: !1 };
_.div(({ theme: e }) => ({ fontSize: `${e.typography.size.s2}px`, lineHeight: "1.6", h1: { fontSize: `${e.typography.size.l1}px`, fontWeight: e.typography.weight.bold }, h2: { fontSize: `${e.typography.size.m2}px`, borderBottom: `1px solid ${e.appBorderColor}` }, h3: { fontSize: `${e.typography.size.m1}px` }, h4: { fontSize: `${e.typography.size.s3}px` }, h5: { fontSize: `${e.typography.size.s2}px` }, h6: { fontSize: `${e.typography.size.s2}px`, color: e.color.dark }, "pre:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "pre pre, pre.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px" }, "pre pre code, pre.prismjs code": { color: "inherit", fontSize: "inherit" }, "pre code": { margin: 0, padding: 0, whiteSpace: "pre", border: "none", background: "transparent" }, "pre code, pre tt": { backgroundColor: "transparent", border: "none" }, "body > *:first-of-type": { marginTop: "0 !important" }, "body > *:last-child": { marginBottom: "0 !important" }, a: { color: e.color.secondary, textDecoration: "none" }, "a.absent": { color: "#cc0000" }, "a.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 }, "h1, h2, h3, h4, h5, h6": { margin: "20px 0 10px", padding: 0, cursor: "text", position: "relative", "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& tt, & code": { fontSize: "inherit" } }, "h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 }, "p, blockquote, ul, ol, dl, li, table, pre": { margin: "15px 0" }, hr: { border: "0 none", borderTop: `1px solid ${e.appBorderColor}`, height: 4, padding: 0 }, "body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type": { marginTop: 0, paddingTop: 0 }, "body > h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 }, "a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6": { marginTop: 0, paddingTop: 0 }, "h1 p, h2 p, h3 p, h4 p, h5 p, h6 p": { marginTop: 0 }, "li p.first": { display: "inline-block" }, "ul, ol": { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, dl: { padding: 0 }, "dl dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", margin: "0 0 15px", padding: "0 15px", "&:first-of-type": { padding: 0 }, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, blockquote: { borderLeft: `4px solid ${e.color.medium}`, padding: "0 15px", color: e.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, table: { padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${e.appBorderColor}`, backgroundColor: "white", margin: 0, padding: 0, "& th": { fontWeight: "bold", border: `1px solid ${e.appBorderColor}`, textAlign: "left", margin: 0, padding: "6px 13px" }, "& td": { border: `1px solid ${e.appBorderColor}`, textAlign: "left", margin: 0, padding: "6px 13px" }, "&:nth-of-type(2n)": { backgroundColor: e.color.lighter }, "& th :first-of-type, & td :first-of-type": { marginTop: 0 }, "& th :last-child, & td :last-child": { marginBottom: 0 } } }, img: { maxWidth: "100%" }, "span.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${e.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: e.color.darkest, display: "block", padding: "5px 0 0" } }, "span.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "span.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "span.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "span.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } }, "code, tt": { margin: "0 2px", padding: "0 5px", whiteSpace: "nowrap", border: `1px solid ${e.color.mediumlight}`, backgroundColor: e.color.lighter, borderRadius: 3, color: e.base === "dark" && e.color.darkest } }));
var It = [], ar = null, Eg = b.lazy(async () => {
  let { SyntaxHighlighter: e } = await import("./syntaxhighlighter-NMPM6SWI-9ad86107.js");
  return It.length > 0 && (It.forEach((t) => {
    e.registerLanguage(...t);
  }), It = []), ar === null && (ar = e), { default: (t) => o.createElement(e, { ...t }) };
}), xg = b.lazy(async () => {
  let [{ SyntaxHighlighter: e }, { formatter: t }] = await Promise.all([import("./syntaxhighlighter-NMPM6SWI-9ad86107.js"), import("./formatter-SWP5E3XI-2a93cf4c.js")]);
  return It.length > 0 && (It.forEach((r) => {
    e.registerLanguage(...r);
  }), It = []), ar === null && (ar = e), { default: (r) => o.createElement(e, { ...r, formatter: t }) };
}), Hn = (e) => o.createElement(b.Suspense, { fallback: o.createElement("div", null) }, e.format !== !1 ? o.createElement(xg, { ...e }) : o.createElement(Eg, { ...e }));
Hn.registerLanguage = (...e) => {
  if (ar !== null) {
    ar.registerLanguage(...e);
    return;
  }
  It.push(e);
};
_.div(({ theme: e, col: t, row: r = 1 }) => t ? { display: "inline-block", verticalAlign: "inherit", "& > *": { marginLeft: t * e.layoutMargin, verticalAlign: "inherit" }, [`& > *:first-child${qa}`]: { marginLeft: 0 } } : { "& > *": { marginTop: r * e.layoutMargin }, [`& > *:first-child${qa}`]: { marginTop: 0 } }, ({ theme: e, outer: t, col: r, row: n }) => {
  switch (!0) {
    case !!(t && r):
      return { marginLeft: t * e.layoutMargin, marginRight: t * e.layoutMargin };
    case !!(t && n):
      return { marginTop: t * e.layoutMargin, marginBottom: t * e.layoutMargin };
    default:
      return {};
  }
});
var wg = _.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold })), Ag = _.div(), Sg = _.div(({ theme: e }) => ({ padding: 30, textAlign: "center", color: e.color.defaultText, fontSize: e.typography.size.s2 - 1 })), ic = ({ children: e, ...t }) => {
  let [r, n] = b.Children.toArray(e);
  return o.createElement(Sg, { ...t }, o.createElement(wg, null, r), n && o.createElement(Ag, null, n));
}, Cg = _.div(({ scale: e = 1, elementHeight: t }) => ({ height: t || "auto", transformOrigin: "top left", transform: `scale(${1 / e})` }));
function kg({ scale: e, children: t }) {
  let r = b.useRef(null), [n, a] = b.useState(0), l = b.useCallback(({ height: i }) => {
    i && a(i / e);
  }, [e]);
  return b.useEffect(() => {
    r.current && a(r.current.getBoundingClientRect().height);
  }, [e]), Iu({ ref: r, onResize: l }), o.createElement(Cg, { scale: e, elementHeight: n }, o.createElement("div", { ref: r, className: "innerZoomElementWrapper" }, t));
}
var _g = class extends b.Component {
  constructor() {
    super(...arguments), this.iframe = null;
  }
  componentDidMount() {
    let { iFrameRef: e } = this.props;
    this.iframe = e.current;
  }
  shouldComponentUpdate(e) {
    let { scale: t, active: r } = this.props;
    return t !== e.scale && this.setIframeInnerZoom(e.scale), r !== e.active && this.iframe.setAttribute("data-is-storybook", e.active ? "true" : "false"), e.children.props.src !== this.props.children.props.src;
  }
  setIframeInnerZoom(e) {
    try {
      Object.assign(this.iframe.contentDocument.body.style, { width: `${e * 100}%`, height: `${e * 100}%`, transform: `scale(${1 / e})`, transformOrigin: "top left" });
    } catch {
      this.setIframeZoom(e);
    }
  }
  setIframeZoom(e) {
    Object.assign(this.iframe.style, { width: `${e * 100}%`, height: `${e * 100}%`, transform: `scale(${1 / e})`, transformOrigin: "top left" });
  }
  render() {
    let { children: e } = this.props;
    return o.createElement(o.Fragment, null, e);
  }
}, sc = { Element: kg, IFrame: _g }, { document: Tg } = Rm, Og = _.strong(({ theme: e }) => ({ color: e.color.orange })), Rg = _.strong(({ theme: e }) => ({ color: e.color.ancillary, textDecoration: "underline" })), yi = _.em(({ theme: e }) => ({ color: e.textMutedColor })), Fg = /(Error): (.*)\n/, $g = /at (?:(.*) )?\(?(.+)\)?/, Dg = /([^@]+)?(?:\/<)?@(.+)?/, Lg = /([^@]+)?@(.+)?/, uc = ({ error: e }) => {
  if (!e)
    return o.createElement(b.Fragment, null, "This error has no stack or message");
  if (!e.stack)
    return o.createElement(b.Fragment, null, e.message || "This error has no stack or message");
  let t = e.stack.toString();
  t && e.message && !t.includes(e.message) && (t = `Error: ${e.message}

${t}`);
  let r = t.match(Fg);
  if (!r)
    return o.createElement(b.Fragment, null, t);
  let [, n, a] = r, l = t.split(/\n/).slice(1), [, ...i] = l.map((u) => {
    let s = u.match($g) || u.match(Dg) || u.match(Lg);
    return s ? { name: (s[1] || "").replace("/<", ""), location: s[2].replace(Tg.location.origin, "") } : null;
  }).filter(Boolean);
  return o.createElement(b.Fragment, null, o.createElement("span", null, n), ": ", o.createElement(Og, null, a), o.createElement("br", null), i.map((u, s) => u.name ? o.createElement(b.Fragment, { key: s }, "  ", "at ", o.createElement(Rg, null, u.name), " (", o.createElement(yi, null, u.location), ")", o.createElement("br", null)) : o.createElement(b.Fragment, { key: s }, "  ", "at ", o.createElement(yi, null, u.location), o.createElement("br", null))));
}, cc = _.button(({ small: e, theme: t }) => ({ border: 0, borderRadius: "3em", cursor: "pointer", display: "inline-block", overflow: "hidden", padding: e ? "8px 16px" : "13px 20px", position: "relative", textAlign: "center", textDecoration: "none", transitionProperty: "background, box-shadow", transitionDuration: "150ms", transitionTimingFunction: "ease-out", verticalAlign: "top", whiteSpace: "nowrap", userSelect: "none", opacity: 1, margin: 0, background: "transparent", fontSize: `${e ? t.typography.size.s1 : t.typography.size.s2 - 1}px`, fontWeight: t.typography.weight.bold, lineHeight: "1", svg: { display: "inline-block", height: e ? 12 : 14, width: e ? 12 : 14, verticalAlign: "top", marginRight: e ? 4 : 6, marginTop: e ? 0 : -1, marginBottom: e ? 0 : -1, pointerEvents: "none", path: { fill: "currentColor" } } }), ({ disabled: e }) => e ? { cursor: "not-allowed !important", opacity: 0.5, "&:hover": { transform: "none" } } : {}, ({ containsIcon: e, small: t }) => e ? { svg: { display: "block", margin: 0 }, ...t ? { padding: 10 } : { padding: 13 } } : {}, ({ theme: e, primary: t, secondary: r, gray: n }) => {
  let a;
  return n ? a = e.color.mediumlight : r ? a = e.color.secondary : t && (a = e.color.primary), a ? { background: a, color: n ? e.color.darkest : e.color.lightest, "&:hover": { background: Yt(0.05, a) }, "&:active": { boxShadow: "rgba(0, 0, 0, 0.1) 0 0 0 3em inset" }, "&:focus": { boxShadow: `${ct(a, 1)} 0 1px 9px 2px`, outline: "none" }, "&:focus:hover": { boxShadow: `${ct(a, 0.2)} 0 8px 18px 0px` } } : {};
}, ({ theme: e, tertiary: t, inForm: r, small: n }) => t ? { background: e.button.background, color: e.input.color, boxShadow: `${e.button.border} 0 0 0 1px inset`, borderRadius: e.input.borderRadius, ...r && n ? { padding: "10px 16px" } : {}, "&:hover": { background: e.base === "light" ? Yt(0.02, e.button.background) : og(0.03, e.button.background), ...r ? {} : { boxShadow: "rgba(0,0,0,.2) 0 2px 6px 0, rgba(0,0,0,.1) 0 0 0 1px inset" } }, "&:active": { background: e.button.background }, "&:focus": { boxShadow: `${ct(e.color.secondary, 1)} 0 0 0 1px inset`, outline: "none" } } : {}, ({ theme: e, outline: t }) => t ? { boxShadow: `${Ee(0.8, e.color.defaultText)} 0 0 0 1px inset`, color: Ee(0.3, e.color.defaultText), background: "transparent", "&:hover, &:focus": { boxShadow: `${Ee(0.5, e.color.defaultText)} 0 0 0 1px inset`, outline: "none" }, "&:active": { boxShadow: `${Ee(0.5, e.color.defaultText)} 0 0 0 2px inset`, color: Ee(0, e.color.defaultText) } } : {}, ({ theme: e, outline: t, primary: r }) => {
  let n = e.color.primary;
  return t && r ? { boxShadow: `${n} 0 0 0 1px inset`, color: n, "svg path:not([fill])": { fill: n }, "&:hover": { boxShadow: `${n} 0 0 0 1px inset`, background: "transparent" }, "&:active": { background: n, boxShadow: `${n} 0 0 0 1px inset`, color: e.color.tertiary }, "&:focus": { boxShadow: `${n} 0 0 0 1px inset, ${ct(n, 0.4)} 0 1px 9px 2px`, outline: "none" }, "&:focus:hover": { boxShadow: `${n} 0 0 0 1px inset, ${ct(n, 0.2)} 0 8px 18px 0px` } } : {};
}, ({ theme: e, outline: t, primary: r, secondary: n }) => {
  let a;
  return n ? a = e.color.secondary : r && (a = e.color.primary), t && a ? { boxShadow: `${a} 0 0 0 1px inset`, color: a, "svg path:not([fill])": { fill: a }, "&:hover": { boxShadow: `${a} 0 0 0 1px inset`, background: "transparent" }, "&:active": { background: a, boxShadow: `${a} 0 0 0 1px inset`, color: e.color.tertiary }, "&:focus": { boxShadow: `${a} 0 0 0 1px inset, ${ct(a, 0.4)} 0 1px 9px 2px`, outline: "none" }, "&:focus:hover": { boxShadow: `${a} 0 0 0 1px inset, ${ct(a, 0.2)} 0 8px 18px 0px` } } : {};
}), Mg = cc.withComponent("a"), dc = Object.assign(b.forwardRef(function({ isLink: e, children: t, ...r }, n) {
  return e ? o.createElement(Mg, { ...r, ref: n }, t) : o.createElement(cc, { ...r, ref: n }, t);
}), { defaultProps: { isLink: !1 } }), Bg = _.label(({ theme: e }) => ({ display: "flex", borderBottom: `1px solid ${e.appBorderColor}`, margin: "0 15px", padding: "8px 0", "&:last-child": { marginBottom: "3rem" } })), Ig = _.span(({ theme: e }) => ({ minWidth: 100, fontWeight: e.typography.weight.bold, marginRight: 15, display: "flex", justifyContent: "flex-start", alignItems: "center", lineHeight: "16px" })), pc = ({ label: e, children: t, ...r }) => o.createElement(Bg, { ...r }, e ? o.createElement(Ig, null, o.createElement("span", null, e)) : null, t);
pc.defaultProps = { label: void 0 };
var Ei = function(e, t) {
  if (typeof e == "function") {
    e(t);
    return;
  }
  e.current = t;
}, Pg = function(e, t) {
  var r = b.useRef();
  return b.useCallback(function(n) {
    e.current = n, r.current && Ei(r.current, null), r.current = t, t && Ei(t, n);
  }, [t]);
}, jg = Pg, Ng = function() {
}, Hg = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], Zg = function(e, t) {
  e.cacheMeasurements, e.maxRows, e.minRows;
  var r = e.onChange, n = r === void 0 ? Ng : r;
  e.onHeightChange;
  var a = Oo(e, Hg);
  a.value;
  var l = b.useRef(null), i = jg(l, t);
  return b.useRef(0), b.useRef(), b.createElement("textarea", U({}, a, { onChange: n, ref: i }));
}, Vg = b.forwardRef(Zg), zg = { appearance: "none", border: "0 none", boxSizing: "inherit", display: " block", margin: " 0", background: "transparent", padding: 0, fontSize: "inherit", position: "relative" }, Qo = ({ theme: e }) => ({ ...zg, transition: "box-shadow 200ms ease-out, opacity 200ms ease-out", color: e.input.color || "inherit", background: e.input.background, boxShadow: `${e.input.border} 0 0 0 1px inset`, borderRadius: e.input.borderRadius, fontSize: e.typography.size.s2 - 1, lineHeight: "20px", padding: "6px 10px", boxSizing: "border-box", height: 32, '&[type="file"]': { height: "auto" }, "&:focus": { boxShadow: `${e.color.secondary} 0 0 0 1px inset`, outline: "none" }, "&[disabled]": { cursor: "not-allowed", opacity: 0.5 }, "&:-webkit-autofill": { WebkitBoxShadow: `0 0 0 3em ${e.color.lightest} inset` }, "&::placeholder": { color: e.textMutedColor, opacity: 1 } }), Zn = ({ size: e }) => {
  switch (e) {
    case "100%":
      return { width: "100%" };
    case "flex":
      return { flex: 1 };
    case "auto":
    default:
      return { display: "inline" };
  }
}, fc = ({ align: e }) => {
  switch (e) {
    case "end":
      return { textAlign: "right" };
    case "center":
      return { textAlign: "center" };
    case "start":
    default:
      return { textAlign: "left" };
  }
}, Vn = ({ valid: e, theme: t }) => {
  switch (e) {
    case "valid":
      return { boxShadow: `${t.color.positive} 0 0 0 1px inset !important` };
    case "error":
      return { boxShadow: `${t.color.negative} 0 0 0 1px inset !important` };
    case "warn":
      return { boxShadow: `${t.color.warning} 0 0 0 1px inset` };
    case void 0:
    case null:
    default:
      return {};
  }
}, qg = Object.assign(_(b.forwardRef(function({ size: e, valid: t, align: r, ...n }, a) {
  return o.createElement("input", { ...n, ref: a });
}))(Qo, Zn, fc, Vn, { minHeight: 32 }), { displayName: "Input" }), Ug = Object.assign(_(b.forwardRef(function({ size: e, valid: t, align: r, ...n }, a) {
  return o.createElement("select", { ...n, ref: a });
}))(Qo, Zn, Vn, { height: 32, userSelect: "none", paddingRight: 20, appearance: "menulist" }), { displayName: "Select" }), Wg = Object.assign(_(b.forwardRef(function({ size: e, valid: t, align: r, ...n }, a) {
  return o.createElement(Vg, { ...n, ref: a });
}))(Qo, Zn, fc, Vn, ({ height: e = 400 }) => ({ overflow: "visible", maxHeight: e })), { displayName: "Textarea" }), Gg = _(b.forwardRef(function({ size: e, valid: t, align: r, ...n }, a) {
  return o.createElement(dc, { ...n, ref: a });
}))(Zn, Vn, { userSelect: "none", overflow: "visible", zIndex: 2, "&:hover": { transform: "none" } }), Yg = Object.assign(b.forwardRef(function(e, t) {
  return o.createElement(Gg, { ...e, tertiary: !0, small: !0, inForm: !0, ref: t });
}), { displayName: "Button" }), Ne = Object.assign(_.form({ boxSizing: "border-box", width: "100%" }), { Field: pc, Input: qg, Select: Ug, Textarea: Wg, Button: Yg }), Kg = b.lazy(() => import("./WithTooltip-4HIR6TLV-b7b55079.js").then((e) => ({ default: e.WithTooltip }))), Xg = (e) => o.createElement(b.Suspense, { fallback: o.createElement("div", null) }, o.createElement(Kg, { ...e })), Jg = b.lazy(() => import("./WithTooltip-4HIR6TLV-b7b55079.js").then((e) => ({ default: e.WithTooltipPure }))), mc = (e) => o.createElement(b.Suspense, { fallback: o.createElement("div", null) }, o.createElement(Jg, { ...e }));
_.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold }));
_.span();
_.div(({ theme: e }) => ({ marginTop: 8, textAlign: "center", "> *": { margin: "0 8px", fontWeight: e.typography.weight.bold } }));
_.div(({ theme: e }) => ({ color: e.color.defaultText, lineHeight: "18px" }));
_.div({ padding: 15, width: 280, boxSizing: "border-box" });
var Qg = _.div(({ theme: e }) => ({ padding: "2px 6px", lineHeight: "16px", fontSize: 10, fontWeight: e.typography.weight.bold, color: e.color.lightest, boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)", borderRadius: 4, whiteSpace: "nowrap", pointerEvents: "none", zIndex: -1, background: e.base === "light" ? "rgba(60, 60, 60, 0.9)" : "rgba(0, 0, 0, 0.95)", margin: 6 })), eh = ({ note: e, ...t }) => o.createElement(Qg, { ...t }, e), th = _(({ active: e, loading: t, disabled: r, ...n }) => o.createElement("span", { ...n }))(({ theme: e }) => ({ color: e.color.defaultText, fontWeight: e.typography.weight.regular }), ({ active: e, theme: t }) => e ? { color: t.color.secondary, fontWeight: t.typography.weight.bold } : {}, ({ loading: e, theme: t }) => e ? { display: "inline-block", flex: "none", ...t.animation.inlineGlow } : {}, ({ disabled: e, theme: t }) => e ? { color: Ee(0.7, t.color.defaultText) } : {}), rh = _.span({ display: "flex", "& svg": { height: 12, width: 12, margin: "3px 0", verticalAlign: "top" }, "& path": { fill: "inherit" } }), nh = _.span({ flex: 1, textAlign: "left", display: "flex", flexDirection: "column" }, ({ isIndented: e }) => e ? { marginLeft: 24 } : {}), ah = _.span(({ theme: e }) => ({ fontSize: "11px", lineHeight: "14px" }), ({ active: e, theme: t }) => e ? { color: t.color.secondary } : {}, ({ theme: e, disabled: t }) => t ? { color: e.textMutedColor } : {}), xi = _.span(({ active: e, theme: t }) => e ? { "& svg": { opacity: 1 }, "& svg path:not([fill])": { fill: t.color.secondary } } : {}, () => ({ display: "flex", maxWidth: 14 })), oh = _.a(({ theme: e }) => ({ fontSize: e.typography.size.s1, transition: "all 150ms ease-out", color: e.color.dark, textDecoration: "none", cursor: "pointer", justifyContent: "space-between", lineHeight: "18px", padding: "7px 10px", display: "flex", alignItems: "center", "& > * + *": { paddingLeft: 10 }, "&:hover": { background: e.background.hoverable }, "&:hover svg": { opacity: 1 } }), ({ disabled: e }) => e ? { cursor: "not-allowed" } : {}), lh = Nt(100)((e, t, r) => {
  let n = {};
  return e && Object.assign(n, { onClick: e }), t && Object.assign(n, { href: t }), r && t && Object.assign(n, { to: t, as: r }), n;
}), gc = ({ loading: e, left: t, title: r, center: n, right: a, icon: l, active: i, disabled: u, isIndented: s, href: c, onClick: d, LinkWrapper: m, ...f }) => {
  let p = lh(d, c, m), h = { active: i, disabled: u }, g = typeof l == "string" && Lr[l];
  return o.createElement(oh, { ...h, ...f, ...p }, l ? o.createElement(xi, { ...h }, g ? o.createElement(ve, { icon: l }) : l) : t && o.createElement(xi, { ...h }, t), r || n ? o.createElement(nh, { isIndented: !t && !l && s }, r && o.createElement(th, { ...h, loading: e }, r), n && o.createElement(ah, { ...h }, n)) : null, a && o.createElement(rh, { ...h }, a));
};
gc.defaultProps = { loading: !1, left: null, title: o.createElement("span", null, "Loading state"), center: null, right: null, active: !1, disabled: !1, href: null, LinkWrapper: null, onClick: null };
var el = gc, ih = _.div({ minWidth: 180, overflow: "hidden", overflowY: "auto", maxHeight: 15.5 * 32 }, ({ theme: e }) => ({ borderRadius: e.appBorderRadius })), sh = (e) => {
  let { LinkWrapper: t, onClick: r, id: n, isIndented: a, ...l } = e, { title: i, href: u, active: s } = l, c = b.useCallback((m) => {
    r(m, l);
  }, [r]), d = !!r;
  return o.createElement(el, { title: i, active: s, href: u, id: `list-item-${n}`, LinkWrapper: t, isIndented: a, ...l, ...d ? { onClick: c } : {} });
}, tl = ({ links: e, LinkWrapper: t }) => {
  let r = e.some((n) => n.left || n.icon);
  return o.createElement(ih, null, e.map(({ isGatsby: n, ...a }) => o.createElement(sh, { key: a.id, LinkWrapper: n ? t : null, isIndented: r, ...a })));
};
tl.defaultProps = { LinkWrapper: el.defaultProps.LinkWrapper };
var rl = o.forwardRef(({ children: e, ...t }, r) => t.href != null ? o.createElement("a", { ref: r, ...t }, e) : o.createElement("button", { ref: r, type: "button", ...t }, e));
rl.displayName = "ButtonOrLink";
var Vr = _(rl, { shouldForwardProp: Eo })({ whiteSpace: "normal", display: "inline-flex", overflow: "hidden", verticalAlign: "top", justifyContent: "center", alignItems: "center", textAlign: "center", textDecoration: "none", "&:empty": { display: "none" } }, ({ theme: e }) => ({ padding: "0 15px", transition: "color 0.2s linear, border-bottom-color 0.2s linear", height: 40, lineHeight: "12px", cursor: "pointer", background: "transparent", border: "0 solid transparent", borderTop: "3px solid transparent", borderBottom: "3px solid transparent", fontWeight: "bold", fontSize: 13, "&:focus": { outline: "0 none", borderBottomColor: e.color.secondary } }), ({ active: e, textColor: t, theme: r }) => e ? { color: t || r.barSelectedColor, borderBottomColor: r.barSelectedColor } : { color: t || r.barTextColor, borderBottomColor: "transparent" });
Vr.displayName = "TabButton";
var Pt = _(rl, { shouldForwardProp: Eo })(() => ({ alignItems: "center", background: "transparent", border: "none", borderRadius: 4, color: "inherit", cursor: "pointer", display: "inline-flex", fontSize: 13, fontWeight: "bold", height: 28, justifyContent: "center", marginTop: 6, padding: "8px 7px", "& > svg": { width: 14 } }), ({ active: e, theme: t }) => e ? { backgroundColor: t.background.hoverable, color: t.barSelectedColor } : {}, ({ disabled: e, theme: t }) => e ? { opacity: 0.5, cursor: "not-allowed" } : { "&:hover, &:focus-visible": { background: Ee(0.88, t.color.secondary), color: t.barHoverColor }, "&:focus-visible": { outline: jn }, "&:focus:not(:focus-visible)": { outline: "none" } });
Pt.displayName = "IconButton";
var uh = _.div(({ theme: e }) => ({ width: 14, height: 14, backgroundColor: e.appBorderColor, animation: `${e.animation.glow} 1.5s ease-in-out infinite` })), ch = _.div(() => ({ marginTop: 6, padding: 7, height: 28 })), hc = () => o.createElement(ch, null, o.createElement(uh, null)), ro = _.div({ display: "flex", whiteSpace: "nowrap", flexBasis: "auto", marginLeft: 3, marginRight: 3 }, ({ scrollable: e }) => e ? { flexShrink: 0 } : {}, ({ left: e }) => e ? { "& > *": { marginLeft: 4 } } : {}, ({ right: e }) => e ? { marginLeft: 30, "& > *": { marginRight: 4 } } : {});
ro.displayName = "Side";
var dh = ({ children: e, className: t, scrollable: r }) => r ? o.createElement(Io, { vertical: !1, className: t }, e) : o.createElement("div", { className: t }, e), nl = _(dh)(({ theme: e, scrollable: t = !0 }) => ({ color: e.barTextColor, width: "100%", height: 40, flexShrink: 0, overflow: t ? "auto" : "hidden", overflowY: "hidden" }), ({ theme: e, border: t = !1 }) => t ? { boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`, background: e.barBg } : {});
nl.displayName = "Bar";
var ph = _.div(({ bgColor: e }) => ({ display: "flex", justifyContent: "space-between", position: "relative", flexWrap: "nowrap", flexShrink: 0, height: 40, backgroundColor: e || "" })), zn = ({ children: e, backgroundColor: t, ...r }) => {
  let [n, a] = b.Children.toArray(e);
  return o.createElement(nl, { ...r }, o.createElement(ph, { bgColor: t }, o.createElement(ro, { scrollable: r.scrollable, left: !0 }, n), a ? o.createElement(ro, { right: !0 }, a) : null));
};
zn.displayName = "FlexBar";
var fh = _.div(({ active: e }) => e ? { display: "block" } : { display: "none" }), wi = (e) => b.Children.toArray(e).map(({ props: { title: t, id: r, color: n, children: a } }) => {
  let l = Array.isArray(a) ? a[0] : a;
  return { title: t, id: r, ...n ? { color: n } : {}, render: typeof l == "function" ? l : ({ active: i }) => o.createElement(fh, { active: i, role: "tabpanel" }, l) };
}), mh = _.span(({ theme: e, isActive: t }) => ({ display: "inline-block", width: 0, height: 0, marginLeft: 8, color: t ? e.color.secondary : e.color.mediumdark, borderRight: "3px solid transparent", borderLeft: "3px solid transparent", borderTop: "3px solid", transition: "transform .1s ease-out" })), gh = _(Vr)(({ active: e, theme: t, preActive: r }) => `
    color: ${r || e ? t.color.secondary : t.color.mediumdark};
    &:hover {
      color: ${t.color.secondary};
      .addon-collapsible-icon {
        color: ${t.color.secondary};
      }
    }
  `);
function hh(e) {
  let t = b.useRef(), r = b.useRef(), n = b.useRef(/* @__PURE__ */ new Map()), { width: a = 1 } = Iu({ ref: t }), [l, i] = b.useState(e), [u, s] = b.useState([]), c = b.useRef(e), d = b.useCallback(({ menuName: f, actions: p }) => {
    let h = u.some(({ active: y }) => y), [g, x] = b.useState(!1);
    return o.createElement(o.Fragment, null, o.createElement(Tm, { interactive: !0, visible: g, onVisibleChange: x, placement: "bottom", delayHide: 100, tooltip: o.createElement(tl, { links: u.map(({ title: y, id: w, color: v, active: E }) => ({ id: w, title: y, color: v, active: E, onClick: (A) => {
      A.preventDefault(), p.onSelect(w);
    } })) }) }, o.createElement(gh, { ref: r, active: h, preActive: g, style: { visibility: u.length ? "visible" : "hidden" }, "aria-hidden": !u.length, className: "tabbutton", type: "button", role: "tab" }, f, o.createElement(mh, { className: "addon-collapsible-icon", isActive: h || g }))), u.map(({ title: y, id: w, color: v }, E) => {
      let A = `index-${E}`;
      return o.createElement(Vr, { id: `tabbutton-${Ss(w) ?? A}`, style: { visibility: "hidden" }, "aria-hidden": !0, tabIndex: -1, ref: (S) => {
        n.current.set(w, S);
      }, className: "tabbutton", type: "button", key: w, textColor: v, role: "tab" }, y);
    }));
  }, [u]), m = b.useCallback(() => {
    if (!t.current || !r.current)
      return;
    let { x: f, width: p } = t.current.getBoundingClientRect(), { width: h } = r.current.getBoundingClientRect(), g = u.length ? f + p - h : f + p, x = [], y = 0, w = e.filter((v) => {
      let { id: E } = v, A = n.current.get(E), { width: S = 0 } = (A == null ? void 0 : A.getBoundingClientRect()) || {}, k = f + y + S > g;
      return (!k || !A) && x.push(v), y += S, k;
    });
    (x.length !== l.length || c.current !== e) && (i(x), s(w), c.current = e);
  }, [u.length, e, l]);
  return b.useLayoutEffect(m, [m, a]), { tabRefs: n, addonsRef: r, tabBarRef: t, visibleList: l, invisibleList: u, AddonTab: d };
}
var bh = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */", yh = _.div(({ theme: e, bordered: t }) => t ? { backgroundClip: "padding-box", border: `1px solid ${e.appBorderColor}`, borderRadius: e.appBorderRadius, overflow: "hidden", boxSizing: "border-box" } : {}, ({ absolute: e }) => e ? { width: "100%", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" } : { display: "block" }), al = _.div({ overflow: "hidden", "&:first-of-type": { marginLeft: -3 }, whiteSpace: "nowrap", flexGrow: 1 });
al.displayName = "TabBar";
var vh = _.div({ display: "block", position: "relative" }, ({ theme: e }) => ({ fontSize: e.typography.size.s2 - 1, background: e.background.content }), ({ bordered: e, theme: t }) => e ? { borderRadius: `0 0 ${t.appBorderRadius - 1}px ${t.appBorderRadius - 1}px` } : {}, ({ absolute: e, bordered: t }) => e ? { height: `calc(100% - ${t ? 42 : 40}px)`, position: "absolute", left: 0 + (t ? 1 : 0), right: 0 + (t ? 1 : 0), bottom: 0 + (t ? 1 : 0), top: 40 + (t ? 1 : 0), overflow: "auto", [`& > *:first-child${bh}`]: { position: "absolute", left: 0 + (t ? 1 : 0), right: 0 + (t ? 1 : 0), bottom: 0 + (t ? 1 : 0), top: 0 + (t ? 1 : 0), height: `calc(100% - ${t ? 2 : 0}px)`, overflow: "auto" } } : {}), qn = b.memo(({ children: e, selected: t, actions: r, absolute: n, bordered: a, tools: l, backgroundColor: i, id: u, menuName: s }) => {
  let c = wi(e).map((g) => g.id), d = b.useMemo(() => wi(e).map((g, x) => ({ ...g, active: t ? g.id === t : x === 0 })), [t, ...c]), { visibleList: m, tabBarRef: f, tabRefs: p, AddonTab: h } = hh(d);
  return d.length ? o.createElement(yh, { absolute: n, bordered: a, id: u }, o.createElement(zn, { scrollable: !1, border: !0, backgroundColor: i }, o.createElement(al, { style: { whiteSpace: "normal" }, ref: f, role: "tablist" }, m.map(({ title: g, id: x, active: y, color: w }, v) => {
    let E = `index-${v}`;
    return o.createElement(Vr, { id: `tabbutton-${Ss(x) ?? E}`, ref: (A) => {
      p.current.set(x, A);
    }, className: `tabbutton ${y ? "tabbutton-active" : ""}`, type: "button", key: x, active: y, textColor: w, onClick: (A) => {
      A.preventDefault(), r.onSelect(x);
    }, role: "tab" }, typeof g == "function" ? o.createElement("title", null) : g);
  }), o.createElement(h, { menuName: s, actions: r })), l), o.createElement(vh, { id: "panel-tab-content", bordered: a, absolute: n }, d.map(({ id: g, active: x, render: y }) => o.createElement(y, { key: g, active: x }, null)))) : o.createElement(ic, null, o.createElement(b.Fragment, { key: "title" }, "Nothing found"));
});
qn.displayName = "Tabs";
qn.defaultProps = { id: null, children: null, tools: null, selected: null, absolute: !1, bordered: !1, menuName: "Tabs" };
var bc = class extends b.Component {
  constructor(e) {
    super(e), this.handlers = { onSelect: (t) => this.setState({ selected: t }) }, this.state = { selected: e.initial };
  }
  render() {
    let { bordered: e = !1, absolute: t = !1, children: r, backgroundColor: n, menuName: a } = this.props, { selected: l } = this.state;
    return o.createElement(qn, { bordered: e, absolute: t, selected: l, backgroundColor: n, menuName: a, actions: this.handlers }, r);
  }
};
bc.defaultProps = { children: [], initial: null, absolute: !1, bordered: !1, backgroundColor: "", menuName: void 0 };
var yc = _.span(({ theme: e }) => ({ width: 1, height: 20, background: e.appBorderColor, marginTop: 10, marginLeft: 6, marginRight: 2 }), ({ force: e }) => e ? {} : { "& + &": { display: "none" } });
yc.displayName = "Separator";
var Eh = ir`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`, xh = _.div(({ size: e = 32 }) => ({ borderRadius: "50%", cursor: "progress", display: "inline-block", overflow: "hidden", position: "absolute", transition: "all 200ms ease-out", verticalAlign: "top", top: "50%", left: "50%", marginTop: -(e / 2), marginLeft: -(e / 2), height: e, width: e, zIndex: 4, borderWidth: 2, borderStyle: "solid", borderColor: "rgba(97, 97, 97, 0.29)", borderTopColor: "rgb(100,100,100)", animation: `${Eh} 0.7s linear infinite`, mixBlendMode: "difference" })), Ai = _.div({ position: "absolute", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }), wh = _.div(({ theme: e }) => ({ position: "relative", width: "80%", marginBottom: "0.75rem", maxWidth: 300, height: 5, borderRadius: 5, background: Ee(0.8, e.color.secondary), overflow: "hidden", cursor: "progress" })), Ah = _.div(({ theme: e }) => ({ position: "absolute", top: 0, left: 0, height: "100%", background: e.color.secondary })), Si = _.div(({ theme: e }) => ({ minHeight: "2em", fontSize: `${e.typography.size.s1}px`, color: e.barTextColor })), Sh = _(ve)(({ theme: e }) => ({ width: 20, height: 20, marginBottom: "0.5rem", color: e.textMutedColor })), Ch = ir`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`, kh = _.span({ "&::after": { content: "'...'", animation: `${Ch} 1s linear infinite`, animationDelay: "1s", display: "inline-block", width: "1em", height: "auto" } }), vc = ({ progress: e, error: t, size: r, ...n }) => {
  if (t)
    return o.createElement(Ai, { "aria-label": t.toString(), "aria-live": "polite", role: "status", ...n }, o.createElement(Sh, { icon: "lightningoff" }), o.createElement(Si, null, t.message));
  if (e) {
    let { value: a, modules: l } = e, { message: i } = e;
    return l && (i += ` ${l.complete} / ${l.total} modules`), o.createElement(Ai, { "aria-label": "Content is loading...", "aria-live": "polite", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": a * 100, "aria-valuetext": i, role: "progressbar", ...n }, o.createElement(wh, null, o.createElement(Ah, { style: { width: `${a * 100}%` } })), o.createElement(Si, null, i, a < 1 && o.createElement(kh, { key: i })));
  }
  return o.createElement(xh, { "aria-label": "Content is loading...", "aria-live": "polite", role: "status", size: r, ...n });
};
function _h(e) {
  let t = {}, r = e.split("&");
  for (let n = 0; n < r.length; n++) {
    let a = r[n].split("=");
    t[decodeURIComponent(a[0])] = decodeURIComponent(a[1] || "");
  }
  return t;
}
var Ec = (e, t, r = {}) => {
  let [n, a] = e.split("?"), l = a ? { ..._h(a), ...r, id: t } : { ...r, id: t };
  return `${n}?${Object.entries(l).map((i) => `${i[0]}=${i[1]}`).join("&")}`;
};
_.pre`
  line-height: 18px;
  padding: 11px 1rem;
  white-space: pre-wrap;
  background: rgba(0, 0, 0, 0.05);
  color: ${N.darkest};
  border-radius: 3px;
  margin: 1rem 0;
  width: 100%;
  display: block;
  overflow: hidden;
  font-family: ${tt.fonts.mono};
  font-size: ${tt.size.s2 - 1}px;
`;
var xc = oc;
Object.keys(oc).forEach((e) => {
  b.forwardRef((t, r) => b.createElement(e, { ...t, ref: r }));
});
const Th = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  A: Hu,
  ActionBar: Mo,
  Bar: nl,
  Blockquote: Zu,
  Button: dc,
  Code: Yo,
  DL: zu,
  Div: Vu,
  ErrorFormatter: uc,
  FlexBar: zn,
  Form: Ne,
  H1: qu,
  H2: Ko,
  H3: Xo,
  H4: Uu,
  H5: Wu,
  H6: Gu,
  HR: Yu,
  IconButton: Pt,
  IconButtonSkeleton: hc,
  Icons: ve,
  Img: Ku,
  LI: Xu,
  Link: Bt,
  ListItem: el,
  Loader: vc,
  OL: Ju,
  P: Qu,
  Placeholder: ic,
  Pre: ec,
  ResetWrapper: Jo,
  ScrollArea: Io,
  Separator: yc,
  Span: tc,
  SyntaxHighlighter: Hn,
  TT: nc,
  TabBar: al,
  TabButton: Vr,
  Table: rc,
  Tabs: qn,
  TabsState: bc,
  TooltipLinkList: tl,
  TooltipNote: eh,
  UL: ac,
  WithTooltip: Xg,
  WithTooltipPure: mc,
  Zoom: sc,
  codeCommon: mt,
  components: xc,
  createCopyToClipboardFunction: Au,
  getStoryHref: Ec,
  icons: Lr,
  nameSpaceClassNames: ee,
  withReset: re
}, Symbol.toStringTag, { value: "Module" }));
function Oh(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, bo(e, t);
}
function Rh(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function dn(e, t, r) {
  return id() ? dn = Reflect.construct.bind() : dn = function(a, l, i) {
    var u = [null];
    u.push.apply(u, l);
    var s = Function.bind.apply(a, u), c = new s();
    return i && bo(c, i.prototype), c;
  }, dn.apply(null, arguments);
}
function no(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return no = function(n) {
    if (n === null || !Rh(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(n))
        return t.get(n);
      t.set(n, a);
    }
    function a() {
      return dn(n, arguments, sd(this).constructor);
    }
    return a.prototype = Object.create(n.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), bo(a, n);
  }, no(e);
}
var Fh = {
  1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
  2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
  3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
  4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
  5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
  6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
  7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
  8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
  9: `Please provide a number of steps to the modularScale helper.

`,
  10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
  12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
  13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
  14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  16: `You must provide a template to this method.

`,
  17: `You passed an unsupported selector state to this method.

`,
  18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  23: `fontFace expects a name of a font-family.

`,
  24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  25: `fontFace expects localFonts to be an array.

`,
  26: `fontFace expects fileFormats to be an array.

`,
  27: `radialGradient requries at least 2 color-stops to properly render.

`,
  28: `Please supply a filename to retinaImage() as the first argument.

`,
  29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
  32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
  33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
  34: `borderRadius expects a radius value as a string or number as the second argument.

`,
  35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  36: `Property must be a string value.

`,
  37: `Syntax Error at %s.

`,
  38: `Formula contains a function that needs parentheses at %s.

`,
  39: `Formula is missing closing parenthesis at %s.

`,
  40: `Formula has too many closing parentheses at %s.

`,
  41: `All values in a formula must have the same unit or be unitless.

`,
  42: `Please provide a number of steps to the modularScale helper.

`,
  43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
  45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
  46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
  47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
  51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
  52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  53: `fontFace expects localFonts to be an array.

`,
  54: `fontFace expects fileFormats to be an array.

`,
  55: `fontFace expects a name of a font-family.

`,
  56: `linearGradient requries at least 2 color-stops to properly render.

`,
  57: `radialGradient requries at least 2 color-stops to properly render.

`,
  58: `Please supply a filename to retinaImage() as the first argument.

`,
  59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  61: `Property must be a string value.

`,
  62: `borderRadius expects a radius value as a string or number as the second argument.

`,
  63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
  65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
  66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
  67: `You must provide a template to this method.

`,
  68: `You passed an unsupported selector state to this method.

`,
  69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
  70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
  71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
  72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
  73: `Please provide a valid CSS variable.

`,
  74: `CSS variable not found and no default was provided.

`,
  75: `important requires a valid style object, got a %s instead.

`,
  76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
  77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
  78: `base must be set in "px" or "%" but you set it in "%s".
`
};
function $h() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], a = [], l;
  for (l = 1; l < t.length; l += 1)
    a.push(t[l]);
  return a.forEach(function(i) {
    n = n.replace(/%[a-z]/, i);
  }), n;
}
var nt = /* @__PURE__ */ function(e) {
  Oh(t, e);
  function t(r) {
    var n;
    if (process.env.NODE_ENV === "production")
      n = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + r + " for more information.") || this;
    else {
      for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++)
        l[i - 1] = arguments[i];
      n = e.call(this, $h.apply(void 0, [Fh[r]].concat(l))) || this;
    }
    return ud(n);
  }
  return t;
}(/* @__PURE__ */ no(Error));
function va(e) {
  return Math.round(e * 255);
}
function Dh(e, t, r) {
  return va(e) + "," + va(t) + "," + va(r);
}
function Mr(e, t, r, n) {
  if (n === void 0 && (n = Dh), t === 0)
    return n(r, r, r);
  var a = (e % 360 + 360) % 360 / 60, l = (1 - Math.abs(2 * r - 1)) * t, i = l * (1 - Math.abs(a % 2 - 1)), u = 0, s = 0, c = 0;
  a >= 0 && a < 1 ? (u = l, s = i) : a >= 1 && a < 2 ? (u = i, s = l) : a >= 2 && a < 3 ? (s = l, c = i) : a >= 3 && a < 4 ? (s = i, c = l) : a >= 4 && a < 5 ? (u = i, c = l) : a >= 5 && a < 6 && (u = l, c = i);
  var d = r - l / 2, m = u + d, f = s + d, p = c + d;
  return n(m, f, p);
}
var Ci = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function Lh(e) {
  if (typeof e != "string")
    return e;
  var t = e.toLowerCase();
  return Ci[t] ? "#" + Ci[t] : e;
}
var Mh = /^#[a-fA-F0-9]{6}$/, Bh = /^#[a-fA-F0-9]{8}$/, Ih = /^#[a-fA-F0-9]{3}$/, Ph = /^#[a-fA-F0-9]{4}$/, Ea = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, jh = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, Nh = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, Hh = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Un(e) {
  if (typeof e != "string")
    throw new nt(3);
  var t = Lh(e);
  if (t.match(Mh))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
  if (t.match(Bh)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: r
    };
  }
  if (t.match(Ih))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
  if (t.match(Ph)) {
    var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: n
    };
  }
  var a = Ea.exec(t);
  if (a)
    return {
      red: parseInt("" + a[1], 10),
      green: parseInt("" + a[2], 10),
      blue: parseInt("" + a[3], 10)
    };
  var l = jh.exec(t.substring(0, 50));
  if (l)
    return {
      red: parseInt("" + l[1], 10),
      green: parseInt("" + l[2], 10),
      blue: parseInt("" + l[3], 10),
      alpha: parseFloat("" + l[4]) > 1 ? parseFloat("" + l[4]) / 100 : parseFloat("" + l[4])
    };
  var i = Nh.exec(t);
  if (i) {
    var u = parseInt("" + i[1], 10), s = parseInt("" + i[2], 10) / 100, c = parseInt("" + i[3], 10) / 100, d = "rgb(" + Mr(u, s, c) + ")", m = Ea.exec(d);
    if (!m)
      throw new nt(4, t, d);
    return {
      red: parseInt("" + m[1], 10),
      green: parseInt("" + m[2], 10),
      blue: parseInt("" + m[3], 10)
    };
  }
  var f = Hh.exec(t.substring(0, 50));
  if (f) {
    var p = parseInt("" + f[1], 10), h = parseInt("" + f[2], 10) / 100, g = parseInt("" + f[3], 10) / 100, x = "rgb(" + Mr(p, h, g) + ")", y = Ea.exec(x);
    if (!y)
      throw new nt(4, t, x);
    return {
      red: parseInt("" + y[1], 10),
      green: parseInt("" + y[2], 10),
      blue: parseInt("" + y[3], 10),
      alpha: parseFloat("" + f[4]) > 1 ? parseFloat("" + f[4]) / 100 : parseFloat("" + f[4])
    };
  }
  throw new nt(5);
}
function Zh(e) {
  var t = e.red / 255, r = e.green / 255, n = e.blue / 255, a = Math.max(t, r, n), l = Math.min(t, r, n), i = (a + l) / 2;
  if (a === l)
    return e.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: i,
      alpha: e.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: i
    };
  var u, s = a - l, c = i > 0.5 ? s / (2 - a - l) : s / (a + l);
  switch (a) {
    case t:
      u = (r - n) / s + (r < n ? 6 : 0);
      break;
    case r:
      u = (n - t) / s + 2;
      break;
    default:
      u = (t - r) / s + 4;
      break;
  }
  return u *= 60, e.alpha !== void 0 ? {
    hue: u,
    saturation: c,
    lightness: i,
    alpha: e.alpha
  } : {
    hue: u,
    saturation: c,
    lightness: i
  };
}
function wc(e) {
  return Zh(Un(e));
}
var Vh = function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, ao = Vh;
function Rt(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function xa(e) {
  return Rt(Math.round(e * 255));
}
function zh(e, t, r) {
  return ao("#" + xa(e) + xa(t) + xa(r));
}
function wn(e, t, r) {
  return Mr(e, t, r, zh);
}
function qh(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return wn(e, t, r);
  if (typeof e == "object" && t === void 0 && r === void 0)
    return wn(e.hue, e.saturation, e.lightness);
  throw new nt(1);
}
function Uh(e, t, r, n) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
    return n >= 1 ? wn(e, t, r) : "rgba(" + Mr(e, t, r) + "," + n + ")";
  if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1 ? wn(e.hue, e.saturation, e.lightness) : "rgba(" + Mr(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new nt(2);
}
function oo(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return ao("#" + Rt(e) + Rt(t) + Rt(r));
  if (typeof e == "object" && t === void 0 && r === void 0)
    return ao("#" + Rt(e.red) + Rt(e.green) + Rt(e.blue));
  throw new nt(6);
}
function dt(e, t, r, n) {
  if (typeof e == "string" && typeof t == "number") {
    var a = Un(e);
    return "rgba(" + a.red + "," + a.green + "," + a.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
      return n >= 1 ? oo(e, t, r) : "rgba(" + e + "," + t + "," + r + "," + n + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1 ? oo(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new nt(7);
}
var Wh = function(t) {
  return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && (typeof t.alpha != "number" || typeof t.alpha > "u");
}, Gh = function(t) {
  return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && typeof t.alpha == "number";
}, Yh = function(t) {
  return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && (typeof t.alpha != "number" || typeof t.alpha > "u");
}, Kh = function(t) {
  return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && typeof t.alpha == "number";
};
function Ac(e) {
  if (typeof e != "object")
    throw new nt(8);
  if (Gh(e))
    return dt(e);
  if (Wh(e))
    return oo(e);
  if (Kh(e))
    return Uh(e);
  if (Yh(e))
    return qh(e);
  throw new nt(8);
}
function Sc(e, t, r) {
  return function() {
    var a = r.concat(Array.prototype.slice.call(arguments));
    return a.length >= t ? e.apply(this, a) : Sc(e, t, a);
  };
}
function Wn(e) {
  return Sc(e, e.length, []);
}
function Gn(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function Xh(e, t) {
  if (t === "transparent")
    return t;
  var r = wc(t);
  return Ac(kn({}, r, {
    lightness: Gn(0, 1, r.lightness - parseFloat(e))
  }));
}
var Jh = /* @__PURE__ */ Wn(Xh), Ke = Jh;
function Qh(e, t) {
  if (t === "transparent")
    return t;
  var r = wc(t);
  return Ac(kn({}, r, {
    lightness: Gn(0, 1, r.lightness + parseFloat(e))
  }));
}
var eb = /* @__PURE__ */ Wn(Qh), Ft = eb;
function tb(e, t) {
  if (t === "transparent")
    return t;
  var r = Un(t), n = typeof r.alpha == "number" ? r.alpha : 1, a = kn({}, r, {
    alpha: Gn(0, 1, (n * 100 + parseFloat(e) * 100) / 100)
  });
  return dt(a);
}
var rb = /* @__PURE__ */ Wn(tb), Jr = rb;
function nb(e, t) {
  if (t === "transparent")
    return t;
  var r = Un(t), n = typeof r.alpha == "number" ? r.alpha : 1, a = kn({}, r, {
    alpha: Gn(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100)
  });
  return dt(a);
}
var ab = /* @__PURE__ */ Wn(nb), te = ab, ob = ms, lb = I0, ib = Object.prototype, sb = ib.hasOwnProperty;
function ub(e, t, r) {
  var n = e[t];
  (!(sb.call(e, t) && lb(n, r)) || r === void 0 && !(t in e)) && ob(e, t, r);
}
var ol = ub, cb = ol, db = gs, pb = P0, ki = Sn, fb = j0;
function mb(e, t, r, n) {
  if (!ki(e))
    return e;
  t = db(t, e);
  for (var a = -1, l = t.length, i = l - 1, u = e; u != null && ++a < l; ) {
    var s = fb(t[a]), c = r;
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return e;
    if (a != i) {
      var d = u[s];
      c = n ? n(d, s, u) : void 0, c === void 0 && (c = ki(d) ? d : pb(t[a + 1]) ? [] : {});
    }
    cb(u, s, c), u = u[s];
  }
  return e;
}
var gb = mb, hb = N0, bb = gb, yb = gs;
function vb(e, t, r) {
  for (var n = -1, a = t.length, l = {}; ++n < a; ) {
    var i = t[n], u = hb(e, i);
    r(u, i) && bb(l, yb(i, e), u);
  }
  return l;
}
var Eb = vb, xb = H0, wb = hs, Ab = bs, Sb = Z0, Cb = Object.getOwnPropertySymbols, kb = Cb ? function(e) {
  for (var t = []; e; )
    xb(t, Ab(e)), e = wb(e);
  return t;
} : Sb, Cc = kb;
function _b(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Tb = _b, Ob = Sn, Rb = ys, Fb = Tb, $b = Object.prototype, Db = $b.hasOwnProperty;
function Lb(e) {
  if (!Ob(e))
    return Fb(e);
  var t = Rb(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Db.call(e, n)) || r.push(n);
  return r;
}
var Mb = Lb, Bb = V0, Ib = Mb, Pb = z0;
function jb(e) {
  return Pb(e) ? Bb(e, !0) : Ib(e);
}
var ll = jb, Nb = q0, Hb = Cc, Zb = ll;
function Vb(e) {
  return Nb(e, Zb, Hb);
}
var kc = Vb, zb = U0, qb = W0, Ub = Eb, Wb = kc;
function Gb(e, t) {
  if (e == null)
    return {};
  var r = zb(Wb(e), function(n) {
    return [n];
  });
  return t = qb(t), Ub(e, r, function(n, a) {
    return t(n, a[0]);
  });
}
var Yb = Gb;
const Kb = /* @__PURE__ */ Cn(Yb);
function Dt() {
  return Dt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Dt.apply(this, arguments);
}
const Xb = ["children", "options"], _i = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, t) => (e[t.toLowerCase()] = t, e), { for: "htmlFor" }), Ti = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, Jb = ["style", "script"], Qb = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, ey = /mailto:/i, ty = /\n{2,}$/, _c = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/, ry = /^ *> ?/gm, ny = /^ {2,}\n/, ay = /^(?:( *[-*_])){3,} *(?:\n *)+\n/, Tc = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/, Oc = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, oy = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/, ly = /^(?:\n *)*\n/, iy = /\r\n?/g, sy = /^\[\^([^\]]+)](:.*)\n/, uy = /^\[\^([^\]]+)]/, cy = /\f/g, dy = /^\s*?\[(x|\s)\]/, Rc = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Fc = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, $c = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, lo = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i, py = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, Dc = /^<!--[\s\S]*?(?:-->)/, fy = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, io = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, my = /^\{.*\}$/, gy = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, hy = /^<([^ >]+@[^ >]+)>/, by = /^<([^ >]+:\/[^ >]+)>/, yy = /-([a-z])?/gi, Lc = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/, vy = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, Ey = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, xy = /^\[([^\]]*)\] ?\[([^\]]*)\]/, wy = /(\[|\])/g, Ay = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, Sy = /\t/g, Cy = /^ *\| */, ky = /(^ *\||\| *$)/g, _y = / *$/, Ty = /^ *:-+: *$/, Oy = /^ *:-+ *$/, Ry = /^ *-+: *$/, Fy = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/, $y = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/, Dy = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/, Ly = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/, My = /^\\([^0-9A-Za-z\s])/, By = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i, Iy = /^\n+/, Py = /^([ \t]*)/, jy = /\\([^\\])/g, Oi = / *\n+$/, Ny = /(?:^|\n)( *)$/, il = "(?:\\d+\\.)", sl = "(?:[*+-])";
function Mc(e) {
  return "( *)(" + (e === 1 ? il : sl) + ") +";
}
const Bc = Mc(1), Ic = Mc(2);
function Pc(e) {
  return new RegExp("^" + (e === 1 ? Bc : Ic));
}
const Hy = Pc(1), Zy = Pc(2);
function jc(e) {
  return new RegExp("^" + (e === 1 ? Bc : Ic) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? il : sl) + " )[^\\n]*)*(\\n|$)", "gm");
}
const Nc = jc(1), Hc = jc(2);
function Zc(e) {
  const t = e === 1 ? il : sl;
  return new RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)");
}
const Vc = Zc(1), zc = Zc(2);
function Ri(e, t) {
  const r = t === 1, n = r ? Vc : zc, a = r ? Nc : Hc, l = r ? Hy : Zy;
  return { t(i, u, s) {
    const c = Ny.exec(s);
    return c && (u.o || !u._ && !u.u) ? n.exec(i = c[1] + i) : null;
  }, i: q.HIGH, l(i, u, s) {
    const c = r ? +i[2] : void 0, d = i[0].replace(ty, `
`).match(a);
    let m = !1;
    return { p: d.map(function(f, p) {
      const h = l.exec(f)[0].length, g = new RegExp("^ {1," + h + "}", "gm"), x = f.replace(g, "").replace(l, ""), y = p === d.length - 1, w = x.indexOf(`

`) !== -1 || y && m;
      m = w;
      const v = s._, E = s.o;
      let A;
      s.o = !0, w ? (s._ = !1, A = x.replace(Oi, `

`)) : (s._ = !0, A = x.replace(Oi, ""));
      const S = u(A, s);
      return s._ = v, s.o = E, S;
    }), m: r, g: c };
  }, h: (i, u, s) => e(i.m ? "ol" : "ul", { key: s.k, start: i.g }, i.p.map(function(c, d) {
    return e("li", { key: d }, u(c, s));
  })) };
}
const Vy = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, zy = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, qc = [_c, Tc, Oc, Rc, $c, Fc, Dc, Lc, Nc, Vc, Hc, zc], qy = [...qc, /^[^\n]+(?:  \n|\n{2,})/, lo, io];
function Uy(e) {
  return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function Wy(e) {
  return Ry.test(e) ? "right" : Ty.test(e) ? "center" : Oy.test(e) ? "left" : null;
}
function Fi(e, t, r) {
  const n = r.$;
  r.$ = !0;
  const a = t(e.trim(), r);
  r.$ = n;
  let l = [[]];
  return a.forEach(function(i, u) {
    i.type === "tableSeparator" ? u !== 0 && u !== a.length - 1 && l.push([]) : (i.type !== "text" || a[u + 1] != null && a[u + 1].type !== "tableSeparator" || (i.v = i.v.replace(_y, "")), l[l.length - 1].push(i));
  }), l;
}
function Gy(e, t, r) {
  r._ = !0;
  const n = Fi(e[1], t, r), a = e[2].replace(ky, "").split("|").map(Wy), l = function(i, u, s) {
    return i.trim().split(`
`).map(function(c) {
      return Fi(c, u, s);
    });
  }(e[3], t, r);
  return r._ = !1, { S: a, A: l, L: n, type: "table" };
}
function $i(e, t) {
  return e.S[t] == null ? {} : { textAlign: e.S[t] };
}
function ht(e) {
  return function(t, r) {
    return r._ ? e.exec(t) : null;
  };
}
function bt(e) {
  return function(t, r) {
    return r._ || r.u ? e.exec(t) : null;
  };
}
function ut(e) {
  return function(t, r) {
    return r._ || r.u ? null : e.exec(t);
  };
}
function yr(e) {
  return function(t) {
    return e.exec(t);
  };
}
function Yy(e, t, r) {
  if (t._ || t.u || r && !r.endsWith(`
`))
    return null;
  let n = "";
  e.split(`
`).every((l) => !qc.some((i) => i.test(l)) && (n += l + `
`, l.trim()));
  const a = n.trimEnd();
  return a == "" ? null : [n, a];
}
function Ut(e) {
  try {
    if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i))
      return;
  } catch {
    return null;
  }
  return e;
}
function Di(e) {
  return e.replace(jy, "$1");
}
function pn(e, t, r) {
  const n = r._ || !1, a = r.u || !1;
  r._ = !0, r.u = !0;
  const l = e(t, r);
  return r._ = n, r.u = a, l;
}
function Ky(e, t, r) {
  const n = r._ || !1, a = r.u || !1;
  r._ = !1, r.u = !0;
  const l = e(t, r);
  return r._ = n, r.u = a, l;
}
function Xy(e, t, r) {
  return r._ = !1, e(t, r);
}
const wa = (e, t, r) => ({ v: pn(t, e[1], r) });
function Aa() {
  return {};
}
function Sa() {
  return null;
}
function Jy(...e) {
  return e.filter(Boolean).join(" ");
}
function Ca(e, t, r) {
  let n = e;
  const a = t.split(".");
  for (; a.length && (n = n[a[0]], n !== void 0); )
    a.shift();
  return n || r;
}
var q;
function Qy(e, t = {}) {
  t.overrides = t.overrides || {}, t.slugify = t.slugify || Uy, t.namedCodesToUnicode = t.namedCodesToUnicode ? Dt({}, Ti, t.namedCodesToUnicode) : Ti;
  const r = t.createElement || b.createElement;
  function n(p, h, ...g) {
    const x = Ca(t.overrides, `${p}.props`, {});
    return r(function(y, w) {
      const v = Ca(w, y);
      return v ? typeof v == "function" || typeof v == "object" && "render" in v ? v : Ca(w, `${y}.component`, y) : y;
    }(p, t.overrides), Dt({}, h, x, { className: Jy(h == null ? void 0 : h.className, x.className) || void 0 }), ...g);
  }
  function a(p) {
    let h = !1;
    t.forceInline ? h = !0 : t.forceBlock || (h = Ay.test(p) === !1);
    const g = d(c(h ? p : `${p.trimEnd().replace(Iy, "")}

`, { _: h }));
    for (; typeof g[g.length - 1] == "string" && !g[g.length - 1].trim(); )
      g.pop();
    if (t.wrapper === null)
      return g;
    const x = t.wrapper || (h ? "span" : "div");
    let y;
    if (g.length > 1 || t.forceWrapper)
      y = g;
    else {
      if (g.length === 1)
        return y = g[0], typeof y == "string" ? n("span", { key: "outer" }, y) : y;
      y = null;
    }
    return b.createElement(x, { key: "outer" }, y);
  }
  function l(p) {
    const h = p.match(Qb);
    return h ? h.reduce(function(g, x, y) {
      const w = x.indexOf("=");
      if (w !== -1) {
        const v = function(k) {
          return k.indexOf("-") !== -1 && k.match(fy) === null && (k = k.replace(yy, function(C, T) {
            return T.toUpperCase();
          })), k;
        }(x.slice(0, w)).trim(), E = function(k) {
          const C = k[0];
          return (C === '"' || C === "'") && k.length >= 2 && k[k.length - 1] === C ? k.slice(1, -1) : k;
        }(x.slice(w + 1).trim()), A = _i[v] || v, S = g[A] = function(k, C) {
          return k === "style" ? C.split(/;\s?/).reduce(function(T, O) {
            const R = O.slice(0, O.indexOf(":"));
            return T[R.replace(/(-[a-z])/g, ($) => $[1].toUpperCase())] = O.slice(R.length + 1).trim(), T;
          }, {}) : k === "href" ? Ut(C) : (C.match(my) && (C = C.slice(1, C.length - 1)), C === "true" || C !== "false" && C);
        }(v, E);
        typeof S == "string" && (lo.test(S) || io.test(S)) && (g[A] = b.cloneElement(a(S.trim()), { key: y }));
      } else
        x !== "style" && (g[_i[x] || x] = !0);
      return g;
    }, {}) : null;
  }
  const i = [], u = {}, s = { blockQuote: { t: ut(_c), i: q.HIGH, l: (p, h, g) => ({ v: h(p[0].replace(ry, ""), g) }), h: (p, h, g) => n("blockquote", { key: g.k }, h(p.v, g)) }, breakLine: { t: yr(ny), i: q.HIGH, l: Aa, h: (p, h, g) => n("br", { key: g.k }) }, breakThematic: { t: ut(ay), i: q.HIGH, l: Aa, h: (p, h, g) => n("hr", { key: g.k }) }, codeBlock: { t: ut(Oc), i: q.MAX, l: (p) => ({ v: p[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""), M: void 0 }), h: (p, h, g) => n("pre", { key: g.k }, n("code", Dt({}, p.O, { className: p.M ? `lang-${p.M}` : "" }), p.v)) }, codeFenced: { t: ut(Tc), i: q.MAX, l: (p) => ({ O: l(p[3] || ""), v: p[4], M: p[2] || void 0, type: "codeBlock" }) }, codeInline: { t: bt(oy), i: q.LOW, l: (p) => ({ v: p[2] }), h: (p, h, g) => n("code", { key: g.k }, p.v) }, footnote: { t: ut(sy), i: q.MAX, l: (p) => (i.push({ I: p[2], j: p[1] }), {}), h: Sa }, footnoteReference: { t: ht(uy), i: q.HIGH, l: (p) => ({ v: p[1], B: `#${t.slugify(p[1])}` }), h: (p, h, g) => n("a", { key: g.k, href: Ut(p.B) }, n("sup", { key: g.k }, p.v)) }, gfmTask: { t: ht(dy), i: q.HIGH, l: (p) => ({ R: p[1].toLowerCase() === "x" }), h: (p, h, g) => n("input", { checked: p.R, key: g.k, readOnly: !0, type: "checkbox" }) }, heading: { t: ut(t.enforceAtxHeadings ? Fc : Rc), i: q.HIGH, l: (p, h, g) => ({ v: pn(h, p[2], g), T: t.slugify(p[2]), C: p[1].length }), h: (p, h, g) => n(`h${p.C}`, { id: p.T, key: g.k }, h(p.v, g)) }, headingSetext: { t: ut($c), i: q.MAX, l: (p, h, g) => ({ v: pn(h, p[1], g), C: p[2] === "=" ? 1 : 2, type: "heading" }) }, htmlComment: { t: yr(Dc), i: q.HIGH, l: () => ({}), h: Sa }, image: { t: bt(zy), i: q.HIGH, l: (p) => ({ D: p[1], B: Di(p[2]), F: p[3] }), h: (p, h, g) => n("img", { key: g.k, alt: p.D || void 0, title: p.F || void 0, src: Ut(p.B) }) }, link: { t: ht(Vy), i: q.LOW, l: (p, h, g) => ({ v: Ky(h, p[1], g), B: Di(p[2]), F: p[3] }), h: (p, h, g) => n("a", { key: g.k, href: Ut(p.B), title: p.F }, h(p.v, g)) }, linkAngleBraceStyleDetector: { t: ht(by), i: q.MAX, l: (p) => ({ v: [{ v: p[1], type: "text" }], B: p[1], type: "link" }) }, linkBareUrlDetector: { t: (p, h) => h.N ? null : ht(gy)(p, h), i: q.MAX, l: (p) => ({ v: [{ v: p[1], type: "text" }], B: p[1], F: void 0, type: "link" }) }, linkMailtoDetector: { t: ht(hy), i: q.MAX, l(p) {
    let h = p[1], g = p[1];
    return ey.test(g) || (g = "mailto:" + g), { v: [{ v: h.replace("mailto:", ""), type: "text" }], B: g, type: "link" };
  } }, orderedList: Ri(n, 1), unorderedList: Ri(n, 2), newlineCoalescer: { t: ut(ly), i: q.LOW, l: Aa, h: () => `
` }, paragraph: { t: Yy, i: q.LOW, l: wa, h: (p, h, g) => n("p", { key: g.k }, h(p.v, g)) }, ref: { t: ht(vy), i: q.MAX, l: (p) => (u[p[1]] = { B: p[2], F: p[4] }, {}), h: Sa }, refImage: { t: bt(Ey), i: q.MAX, l: (p) => ({ D: p[1] || void 0, P: p[2] }), h: (p, h, g) => n("img", { key: g.k, alt: p.D, src: Ut(u[p.P].B), title: u[p.P].F }) }, refLink: { t: ht(xy), i: q.MAX, l: (p, h, g) => ({ v: h(p[1], g), Z: h(p[0].replace(wy, "\\$1"), g), P: p[2] }), h: (p, h, g) => u[p.P] ? n("a", { key: g.k, href: Ut(u[p.P].B), title: u[p.P].F }, h(p.v, g)) : n("span", { key: g.k }, h(p.Z, g)) }, table: { t: ut(Lc), i: q.HIGH, l: Gy, h: (p, h, g) => n("table", { key: g.k }, n("thead", null, n("tr", null, p.L.map(function(x, y) {
    return n("th", { key: y, style: $i(p, y) }, h(x, g));
  }))), n("tbody", null, p.A.map(function(x, y) {
    return n("tr", { key: y }, x.map(function(w, v) {
      return n("td", { key: v, style: $i(p, v) }, h(w, g));
    }));
  }))) }, tableSeparator: { t: function(p, h) {
    return h.$ ? (h._ = !0, Cy.exec(p)) : null;
  }, i: q.HIGH, l: function() {
    return { type: "tableSeparator" };
  }, h: () => " | " }, text: { t: yr(By), i: q.MIN, l: (p) => ({ v: p[0].replace(py, (h, g) => t.namedCodesToUnicode[g] ? t.namedCodesToUnicode[g] : h) }), h: (p) => p.v }, textBolded: { t: bt(Fy), i: q.MED, l: (p, h, g) => ({ v: h(p[2], g) }), h: (p, h, g) => n("strong", { key: g.k }, h(p.v, g)) }, textEmphasized: { t: bt($y), i: q.LOW, l: (p, h, g) => ({ v: h(p[2], g) }), h: (p, h, g) => n("em", { key: g.k }, h(p.v, g)) }, textEscaped: { t: bt(My), i: q.HIGH, l: (p) => ({ v: p[1], type: "text" }) }, textMarked: { t: bt(Dy), i: q.LOW, l: wa, h: (p, h, g) => n("mark", { key: g.k }, h(p.v, g)) }, textStrikethroughed: { t: bt(Ly), i: q.LOW, l: wa, h: (p, h, g) => n("del", { key: g.k }, h(p.v, g)) } };
  t.disableParsingRawHTML !== !0 && (s.htmlBlock = { t: yr(lo), i: q.HIGH, l(p, h, g) {
    const [, x] = p[3].match(Py), y = new RegExp(`^${x}`, "gm"), w = p[3].replace(y, ""), v = (E = w, qy.some((C) => C.test(E)) ? Xy : pn);
    var E;
    const A = p[1].toLowerCase(), S = Jb.indexOf(A) !== -1;
    g.N = g.N || A === "a";
    const k = S ? p[3] : v(h, w, g);
    return g.N = !1, { O: l(p[2]), v: k, G: S, H: S ? A : p[1] };
  }, h: (p, h, g) => n(p.H, Dt({ key: g.k }, p.O), p.G ? p.v : h(p.v, g)) }, s.htmlSelfClosing = { t: yr(io), i: q.HIGH, l: (p) => ({ O: l(p[2] || ""), H: p[1] }), h: (p, h, g) => n(p.H, Dt({}, p.O, { key: g.k })) });
  const c = function(p) {
    let h = Object.keys(p);
    function g(x, y) {
      let w = [], v = "";
      for (; x; ) {
        let E = 0;
        for (; E < h.length; ) {
          const A = h[E], S = p[A], k = S.t(x, y, v);
          if (k) {
            const C = k[0];
            x = x.substring(C.length);
            const T = S.l(k, g, y);
            T.type == null && (T.type = A), w.push(T), v = C;
            break;
          }
          E++;
        }
      }
      return w;
    }
    return h.sort(function(x, y) {
      let w = p[x].i, v = p[y].i;
      return w !== v ? w - v : x < y ? -1 : 1;
    }), function(x, y) {
      return g(function(w) {
        return w.replace(iy, `
`).replace(cy, "").replace(Sy, "    ");
      }(x), y);
    };
  }(s), d = (m = function(p) {
    return function(h, g, x) {
      return p[h.type].h(h, g, x);
    };
  }(s), function p(h, g = {}) {
    if (Array.isArray(h)) {
      const x = g.k, y = [];
      let w = !1;
      for (let v = 0; v < h.length; v++) {
        g.k = v;
        const E = p(h[v], g), A = typeof E == "string";
        A && w ? y[y.length - 1] += E : E !== null && y.push(E), w = A;
      }
      return g.k = x, y;
    }
    return m(h, p, g);
  });
  var m;
  const f = a(e);
  return i.length ? n("div", null, f, n("footer", { key: "footer" }, i.map(function(p) {
    return n("div", { id: t.slugify(p.j), key: p.j }, p.j, d(c(p.I, { _: !0 })));
  }))) : f;
}
(function(e) {
  e[e.MAX = 0] = "MAX", e[e.HIGH = 1] = "HIGH", e[e.MED = 2] = "MED", e[e.LOW = 3] = "LOW", e[e.MIN = 4] = "MIN";
})(q || (q = {}));
const Uc = (e) => {
  let { children: t, options: r } = e, n = function(a, l) {
    if (a == null)
      return {};
    var i, u, s = {}, c = Object.keys(a);
    for (u = 0; u < c.length; u++)
      l.indexOf(i = c[u]) >= 0 || (s[i] = a[i]);
    return s;
  }(e, Xb);
  return b.cloneElement(Qy(t, r), n);
};
function ev(e, t, r, n) {
  for (var a = e.length, l = r + (n ? 1 : -1); n ? l-- : ++l < a; )
    if (t(e[l], l, e))
      return l;
  return -1;
}
var tv = ev;
function rv(e) {
  return e !== e;
}
var nv = rv;
function av(e, t, r) {
  for (var n = r - 1, a = e.length; ++n < a; )
    if (e[n] === t)
      return n;
  return -1;
}
var ov = av, lv = tv, iv = nv, sv = ov;
function uv(e, t, r) {
  return t === t ? sv(e, t, r) : lv(e, iv, r);
}
var cv = uv, dv = cv;
function pv(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && dv(e, t, 0) > -1;
}
var fv = pv;
function mv(e, t, r) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var gv = mv;
function hv() {
}
var bv = hv, ka = G0, yv = bv, vv = vs, Ev = 1 / 0, xv = ka && 1 / vv(new ka([, -0]))[1] == Ev ? function(e) {
  return new ka(e);
} : yv, wv = xv, Av = Y0, Sv = fv, Cv = gv, kv = K0, _v = wv, Tv = vs, Ov = 200;
function Rv(e, t, r) {
  var n = -1, a = Sv, l = e.length, i = !0, u = [], s = u;
  if (r)
    i = !1, a = Cv;
  else if (l >= Ov) {
    var c = t ? null : _v(e);
    if (c)
      return Tv(c);
    i = !1, a = kv, s = new Av();
  } else
    s = t ? [] : u;
  e:
    for (; ++n < l; ) {
      var d = e[n], m = t ? t(d) : d;
      if (d = r || d !== 0 ? d : 0, i && m === m) {
        for (var f = s.length; f--; )
          if (s[f] === m)
            continue e;
        t && s.push(m), u.push(d);
      } else
        a(s, m, r) || (s !== u && s.push(m), u.push(d));
    }
  return u;
}
var Fv = Rv, $v = Fv;
function Dv(e) {
  return e && e.length ? $v(e) : [];
}
var Lv = Dv;
const Mv = /* @__PURE__ */ Cn(Lv);
function Bv(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Iv = Bv, Pv = ol, jv = ms;
function Nv(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var l = -1, i = t.length; ++l < i; ) {
    var u = t[l], s = n ? n(r[u], e[u], u, r, e) : void 0;
    s === void 0 && (s = e[u]), a ? jv(r, u, s) : Pv(r, u, s);
  }
  return r;
}
var Yn = Nv, Hv = Yn, Zv = Es;
function Vv(e, t) {
  return e && Hv(t, Zv(t), e);
}
var zv = Vv, qv = Yn, Uv = ll;
function Wv(e, t) {
  return e && qv(t, Uv(t), e);
}
var Gv = Wv, An = { exports: {} };
An.exports;
(function(e, t) {
  var r = X0, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, l = a && a.exports === n, i = l ? r.Buffer : void 0, u = i ? i.allocUnsafe : void 0;
  function s(c, d) {
    if (d)
      return c.slice();
    var m = c.length, f = u ? u(m) : new c.constructor(m);
    return c.copy(f), f;
  }
  e.exports = s;
})(An, An.exports);
var Yv = An.exports;
function Kv(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Xv = Kv, Jv = Yn, Qv = bs;
function e3(e, t) {
  return Jv(e, Qv(e), t);
}
var t3 = e3, r3 = Yn, n3 = Cc;
function a3(e, t) {
  return r3(e, n3(e), t);
}
var o3 = a3, l3 = Object.prototype, i3 = l3.hasOwnProperty;
function s3(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && i3.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var u3 = s3, Li = J0;
function c3(e) {
  var t = new e.constructor(e.byteLength);
  return new Li(t).set(new Li(e)), t;
}
var ul = c3, d3 = ul;
function p3(e, t) {
  var r = t ? d3(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var f3 = p3, m3 = /\w*$/;
function g3(e) {
  var t = new e.constructor(e.source, m3.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var h3 = g3, Mi = Q0, Bi = Mi ? Mi.prototype : void 0, Ii = Bi ? Bi.valueOf : void 0;
function b3(e) {
  return Ii ? Object(Ii.call(e)) : {};
}
var y3 = b3, v3 = ul;
function E3(e, t) {
  var r = t ? v3(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var x3 = E3, w3 = ul, A3 = f3, S3 = h3, C3 = y3, k3 = x3, _3 = "[object Boolean]", T3 = "[object Date]", O3 = "[object Map]", R3 = "[object Number]", F3 = "[object RegExp]", $3 = "[object Set]", D3 = "[object String]", L3 = "[object Symbol]", M3 = "[object ArrayBuffer]", B3 = "[object DataView]", I3 = "[object Float32Array]", P3 = "[object Float64Array]", j3 = "[object Int8Array]", N3 = "[object Int16Array]", H3 = "[object Int32Array]", Z3 = "[object Uint8Array]", V3 = "[object Uint8ClampedArray]", z3 = "[object Uint16Array]", q3 = "[object Uint32Array]";
function U3(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case M3:
      return w3(e);
    case _3:
    case T3:
      return new n(+e);
    case B3:
      return A3(e, r);
    case I3:
    case P3:
    case j3:
    case N3:
    case H3:
    case Z3:
    case V3:
    case z3:
    case q3:
      return k3(e, r);
    case O3:
      return new n();
    case R3:
    case D3:
      return new n(e);
    case F3:
      return S3(e);
    case $3:
      return new n();
    case L3:
      return C3(e);
  }
}
var W3 = U3, G3 = Sn, Pi = Object.create, Y3 = function() {
  function e() {
  }
  return function(t) {
    if (!G3(t))
      return {};
    if (Pi)
      return Pi(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), K3 = Y3, X3 = K3, J3 = hs, Q3 = ys;
function e7(e) {
  return typeof e.constructor == "function" && !Q3(e) ? X3(J3(e)) : {};
}
var t7 = e7, r7 = ho, n7 = xs, a7 = "[object Map]";
function o7(e) {
  return n7(e) && r7(e) == a7;
}
var l7 = o7, i7 = l7, s7 = As, ji = ws, Ni = ji && ji.isMap, u7 = Ni ? s7(Ni) : i7, c7 = u7, d7 = ho, p7 = xs, f7 = "[object Set]";
function m7(e) {
  return p7(e) && d7(e) == f7;
}
var g7 = m7, h7 = g7, b7 = As, Hi = ws, Zi = Hi && Hi.isSet, y7 = Zi ? b7(Zi) : h7, v7 = y7, E7 = ed, x7 = Iv, w7 = ol, A7 = zv, S7 = Gv, C7 = Yv, k7 = Xv, _7 = t3, T7 = o3, O7 = rd, R7 = kc, F7 = ho, $7 = u3, D7 = W3, L7 = t7, M7 = nd, B7 = td, I7 = c7, P7 = Sn, j7 = v7, N7 = Es, H7 = ll, Z7 = 1, V7 = 2, z7 = 4, Wc = "[object Arguments]", q7 = "[object Array]", U7 = "[object Boolean]", W7 = "[object Date]", G7 = "[object Error]", Gc = "[object Function]", Y7 = "[object GeneratorFunction]", K7 = "[object Map]", X7 = "[object Number]", Yc = "[object Object]", J7 = "[object RegExp]", Q7 = "[object Set]", e4 = "[object String]", t4 = "[object Symbol]", r4 = "[object WeakMap]", n4 = "[object ArrayBuffer]", a4 = "[object DataView]", o4 = "[object Float32Array]", l4 = "[object Float64Array]", i4 = "[object Int8Array]", s4 = "[object Int16Array]", u4 = "[object Int32Array]", c4 = "[object Uint8Array]", d4 = "[object Uint8ClampedArray]", p4 = "[object Uint16Array]", f4 = "[object Uint32Array]", Q = {};
Q[Wc] = Q[q7] = Q[n4] = Q[a4] = Q[U7] = Q[W7] = Q[o4] = Q[l4] = Q[i4] = Q[s4] = Q[u4] = Q[K7] = Q[X7] = Q[Yc] = Q[J7] = Q[Q7] = Q[e4] = Q[t4] = Q[c4] = Q[d4] = Q[p4] = Q[f4] = !0;
Q[G7] = Q[Gc] = Q[r4] = !1;
function fn(e, t, r, n, a, l) {
  var i, u = t & Z7, s = t & V7, c = t & z7;
  if (r && (i = a ? r(e, n, a, l) : r(e)), i !== void 0)
    return i;
  if (!P7(e))
    return e;
  var d = M7(e);
  if (d) {
    if (i = $7(e), !u)
      return k7(e, i);
  } else {
    var m = F7(e), f = m == Gc || m == Y7;
    if (B7(e))
      return C7(e, u);
    if (m == Yc || m == Wc || f && !a) {
      if (i = s || f ? {} : L7(e), !u)
        return s ? T7(e, S7(i, e)) : _7(e, A7(i, e));
    } else {
      if (!Q[m])
        return a ? e : {};
      i = D7(e, m, u);
    }
  }
  l || (l = new E7());
  var p = l.get(e);
  if (p)
    return p;
  l.set(e, i), j7(e) ? e.forEach(function(x) {
    i.add(fn(x, t, r, x, e, l));
  }) : I7(e) && e.forEach(function(x, y) {
    i.set(y, fn(x, t, r, y, e, l));
  });
  var h = c ? s ? R7 : O7 : s ? H7 : N7, g = d ? void 0 : h(e);
  return x7(g || e, function(x, y) {
    g && (y = x, x = e[y]), w7(i, y, fn(x, t, r, y, e, l));
  }), i;
}
var m4 = fn, g4 = m4, h4 = 1, b4 = 4;
function y4(e) {
  return g4(e, h4 | b4);
}
var v4 = y4;
const E4 = /* @__PURE__ */ Cn(v4);
var x4 = Object.create, Kc = Object.defineProperty, w4 = Object.getOwnPropertyDescriptor, Xc = Object.getOwnPropertyNames, A4 = Object.getPrototypeOf, S4 = Object.prototype.hasOwnProperty, Ie = (e, t) => function() {
  return t || (0, e[Xc(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, C4 = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let a of Xc(t))
      !S4.call(e, a) && a !== r && Kc(e, a, { get: () => t[a], enumerable: !(n = w4(t, a)) || n.enumerable });
  return e;
}, cl = (e, t, r) => (r = e != null ? x4(A4(e)) : {}, C4(
  t || !e || !e.__esModule ? Kc(r, "default", { value: e, enumerable: !0 }) : r,
  e
)), k4 = [
  "bubbles",
  "cancelBubble",
  "cancelable",
  "composed",
  "currentTarget",
  "defaultPrevented",
  "eventPhase",
  "isTrusted",
  "returnValue",
  "srcElement",
  "target",
  "timeStamp",
  "type"
], _4 = ["detail"];
function T4(e) {
  const t = k4.filter((r) => e[r] !== void 0).reduce((r, n) => ({ ...r, [n]: e[n] }), {});
  return e instanceof CustomEvent && _4.filter((r) => e[r] !== void 0).forEach((r) => {
    t[r] = e[r];
  }), t;
}
var Jc = Ie({
  "node_modules/has-symbols/shams.js"(e, t) {
    t.exports = function() {
      if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
        return !1;
      if (typeof Symbol.iterator == "symbol")
        return !0;
      var n = {}, a = Symbol("test"), l = Object(a);
      if (typeof a == "string" || Object.prototype.toString.call(a) !== "[object Symbol]" || Object.prototype.toString.call(l) !== "[object Symbol]")
        return !1;
      var i = 42;
      n[a] = i;
      for (a in n)
        return !1;
      if (typeof Object.keys == "function" && Object.keys(n).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(n).length !== 0)
        return !1;
      var u = Object.getOwnPropertySymbols(n);
      if (u.length !== 1 || u[0] !== a || !Object.prototype.propertyIsEnumerable.call(n, a))
        return !1;
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var s = Object.getOwnPropertyDescriptor(n, a);
        if (s.value !== i || s.enumerable !== !0)
          return !1;
      }
      return !0;
    };
  }
}), Qc = Ie({
  "node_modules/has-symbols/index.js"(e, t) {
    var r = typeof Symbol < "u" && Symbol, n = Jc();
    t.exports = function() {
      return typeof r != "function" || typeof Symbol != "function" || typeof r("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : n();
    };
  }
}), O4 = Ie({
  "node_modules/function-bind/implementation.js"(e, t) {
    var r = "Function.prototype.bind called on incompatible ", n = Array.prototype.slice, a = Object.prototype.toString, l = "[object Function]";
    t.exports = function(u) {
      var s = this;
      if (typeof s != "function" || a.call(s) !== l)
        throw new TypeError(r + s);
      for (var c = n.call(arguments, 1), d, m = function() {
        if (this instanceof d) {
          var x = s.apply(
            this,
            c.concat(n.call(arguments))
          );
          return Object(x) === x ? x : this;
        } else
          return s.apply(
            u,
            c.concat(n.call(arguments))
          );
      }, f = Math.max(0, s.length - c.length), p = [], h = 0; h < f; h++)
        p.push("$" + h);
      if (d = Function("binder", "return function (" + p.join(",") + "){ return binder.apply(this,arguments); }")(m), s.prototype) {
        var g = function() {
        };
        g.prototype = s.prototype, d.prototype = new g(), g.prototype = null;
      }
      return d;
    };
  }
}), dl = Ie({
  "node_modules/function-bind/index.js"(e, t) {
    var r = O4();
    t.exports = Function.prototype.bind || r;
  }
}), R4 = Ie({
  "node_modules/has/src/index.js"(e, t) {
    var r = dl();
    t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
  }
}), e0 = Ie({
  "node_modules/get-intrinsic/index.js"(e, t) {
    var r, n = SyntaxError, a = Function, l = TypeError, i = function($) {
      try {
        return a('"use strict"; return (' + $ + ").constructor;")();
      } catch {
      }
    }, u = Object.getOwnPropertyDescriptor;
    if (u)
      try {
        u({}, "");
      } catch {
        u = null;
      }
    var s = function() {
      throw new l();
    }, c = u ? function() {
      try {
        return arguments.callee, s;
      } catch {
        try {
          return u(arguments, "callee").get;
        } catch {
          return s;
        }
      }
    }() : s, d = Qc()(), m = Object.getPrototypeOf || function($) {
      return $.__proto__;
    }, f = {}, p = typeof Uint8Array > "u" ? r : m(Uint8Array), h = {
      "%AggregateError%": typeof AggregateError > "u" ? r : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
      "%ArrayIteratorPrototype%": d ? m([][Symbol.iterator]()) : r,
      "%AsyncFromSyncIteratorPrototype%": r,
      "%AsyncFunction%": f,
      "%AsyncGenerator%": f,
      "%AsyncGeneratorFunction%": f,
      "%AsyncIteratorPrototype%": f,
      "%Atomics%": typeof Atomics > "u" ? r : Atomics,
      "%BigInt%": typeof BigInt > "u" ? r : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView > "u" ? r : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array > "u" ? r : Float32Array,
      "%Float64Array%": typeof Float64Array > "u" ? r : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? r : FinalizationRegistry,
      "%Function%": a,
      "%GeneratorFunction%": f,
      "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
      "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
      "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": d ? m(m([][Symbol.iterator]())) : r,
      "%JSON%": typeof JSON == "object" ? JSON : r,
      "%Map%": typeof Map > "u" ? r : Map,
      "%MapIteratorPrototype%": typeof Map > "u" || !d ? r : m((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise > "u" ? r : Promise,
      "%Proxy%": typeof Proxy > "u" ? r : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect > "u" ? r : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set > "u" ? r : Set,
      "%SetIteratorPrototype%": typeof Set > "u" || !d ? r : m((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? r : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": d ? m(""[Symbol.iterator]()) : r,
      "%Symbol%": d ? Symbol : r,
      "%SyntaxError%": n,
      "%ThrowTypeError%": c,
      "%TypedArray%": p,
      "%TypeError%": l,
      "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? r : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
      "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
      "%WeakRef%": typeof WeakRef > "u" ? r : WeakRef,
      "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet
    }, g = function $(F) {
      var P;
      if (F === "%AsyncFunction%")
        P = i("async function () {}");
      else if (F === "%GeneratorFunction%")
        P = i("function* () {}");
      else if (F === "%AsyncGeneratorFunction%")
        P = i("async function* () {}");
      else if (F === "%AsyncGenerator%") {
        var D = $("%AsyncGeneratorFunction%");
        D && (P = D.prototype);
      } else if (F === "%AsyncIteratorPrototype%") {
        var L = $("%AsyncGenerator%");
        L && (P = m(L.prototype));
      }
      return h[F] = P, P;
    }, x = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    }, y = dl(), w = R4(), v = y.call(Function.call, Array.prototype.concat), E = y.call(Function.apply, Array.prototype.splice), A = y.call(Function.call, String.prototype.replace), S = y.call(Function.call, String.prototype.slice), k = y.call(Function.call, RegExp.prototype.exec), C = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, T = /\\(\\)?/g, O = function(F) {
      var P = S(F, 0, 1), D = S(F, -1);
      if (P === "%" && D !== "%")
        throw new n("invalid intrinsic syntax, expected closing `%`");
      if (D === "%" && P !== "%")
        throw new n("invalid intrinsic syntax, expected opening `%`");
      var L = [];
      return A(F, C, function(j, V, B, H) {
        L[L.length] = B ? A(H, T, "$1") : V || j;
      }), L;
    }, R = function(F, P) {
      var D = F, L;
      if (w(x, D) && (L = x[D], D = "%" + L[0] + "%"), w(h, D)) {
        var j = h[D];
        if (j === f && (j = g(D)), typeof j > "u" && !P)
          throw new l("intrinsic " + F + " exists, but is not available. Please file an issue!");
        return {
          alias: L,
          name: D,
          value: j
        };
      }
      throw new n("intrinsic " + F + " does not exist!");
    };
    t.exports = function(F, P) {
      if (typeof F != "string" || F.length === 0)
        throw new l("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof P != "boolean")
        throw new l('"allowMissing" argument must be a boolean');
      if (k(/^%?[^%]*%?$/, F) === null)
        throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      var D = O(F), L = D.length > 0 ? D[0] : "", j = R("%" + L + "%", P), V = j.name, B = j.value, H = !1, X = j.alias;
      X && (L = X[0], E(D, v([0, 1], X)));
      for (var ne = 1, K = !0; ne < D.length; ne += 1) {
        var J = D[ne], I = S(J, 0, 1), z = S(J, -1);
        if ((I === '"' || I === "'" || I === "`" || z === '"' || z === "'" || z === "`") && I !== z)
          throw new n("property names with quotes must have matching quotes");
        if ((J === "constructor" || !K) && (H = !0), L += "." + J, V = "%" + L + "%", w(h, V))
          B = h[V];
        else if (B != null) {
          if (!(J in B)) {
            if (!P)
              throw new l("base intrinsic for " + F + " exists, but the property is not available.");
            return;
          }
          if (u && ne + 1 >= D.length) {
            var W = u(B, J);
            K = !!W, K && "get" in W && !("originalValue" in W.get) ? B = W.get : B = B[J];
          } else
            K = w(B, J), B = B[J];
          K && !H && (h[V] = B);
        }
      }
      return B;
    };
  }
}), F4 = Ie({
  "node_modules/call-bind/index.js"(e, t) {
    var r = dl(), n = e0(), a = n("%Function.prototype.apply%"), l = n("%Function.prototype.call%"), i = n("%Reflect.apply%", !0) || r.call(l, a), u = n("%Object.getOwnPropertyDescriptor%", !0), s = n("%Object.defineProperty%", !0), c = n("%Math.max%");
    if (s)
      try {
        s({}, "a", { value: 1 });
      } catch {
        s = null;
      }
    t.exports = function(f) {
      var p = i(r, l, arguments);
      if (u && s) {
        var h = u(p, "length");
        h.configurable && s(
          p,
          "length",
          { value: 1 + c(0, f.length - (arguments.length - 1)) }
        );
      }
      return p;
    };
    var d = function() {
      return i(r, a, arguments);
    };
    s ? s(t.exports, "apply", { value: d }) : t.exports.apply = d;
  }
}), $4 = Ie({
  "node_modules/call-bind/callBound.js"(e, t) {
    var r = e0(), n = F4(), a = n(r("String.prototype.indexOf"));
    t.exports = function(i, u) {
      var s = r(i, !!u);
      return typeof s == "function" && a(i, ".prototype.") > -1 ? n(s) : s;
    };
  }
}), D4 = Ie({
  "node_modules/has-tostringtag/shams.js"(e, t) {
    var r = Jc();
    t.exports = function() {
      return r() && !!Symbol.toStringTag;
    };
  }
}), L4 = Ie({
  "node_modules/is-regex/index.js"(e, t) {
    var r = $4(), n = D4()(), a, l, i, u;
    n && (a = r("Object.prototype.hasOwnProperty"), l = r("RegExp.prototype.exec"), i = {}, s = function() {
      throw i;
    }, u = {
      toString: s,
      valueOf: s
    }, typeof Symbol.toPrimitive == "symbol" && (u[Symbol.toPrimitive] = s));
    var s, c = r("Object.prototype.toString"), d = Object.getOwnPropertyDescriptor, m = "[object RegExp]";
    t.exports = n ? function(p) {
      if (!p || typeof p != "object")
        return !1;
      var h = d(p, "lastIndex"), g = h && a(h, "value");
      if (!g)
        return !1;
      try {
        l(p, u);
      } catch (x) {
        return x === i;
      }
    } : function(p) {
      return !p || typeof p != "object" && typeof p != "function" ? !1 : c(p) === m;
    };
  }
}), M4 = Ie({
  "node_modules/is-function/index.js"(e, t) {
    t.exports = n;
    var r = Object.prototype.toString;
    function n(a) {
      if (!a)
        return !1;
      var l = r.call(a);
      return l === "[object Function]" || typeof a == "function" && l !== "[object RegExp]" || typeof window < "u" && (a === window.setTimeout || a === window.alert || a === window.confirm || a === window.prompt);
    }
  }
}), B4 = Ie({
  "node_modules/is-symbol/index.js"(e, t) {
    var r = Object.prototype.toString, n = Qc()();
    n ? (a = Symbol.prototype.toString, l = /^Symbol\(.*\)$/, i = function(s) {
      return typeof s.valueOf() != "symbol" ? !1 : l.test(a.call(s));
    }, t.exports = function(s) {
      if (typeof s == "symbol")
        return !0;
      if (r.call(s) !== "[object Symbol]")
        return !1;
      try {
        return i(s);
      } catch {
        return !1;
      }
    }) : t.exports = function(s) {
      return !1;
    };
    var a, l, i;
  }
}), I4 = cl(L4()), P4 = cl(M4()), j4 = cl(B4());
function N4(e) {
  return e != null && typeof e == "object" && Array.isArray(e) === !1;
}
var H4 = typeof global == "object" && global && global.Object === Object && global, Z4 = H4, V4 = typeof self == "object" && self && self.Object === Object && self, z4 = Z4 || V4 || Function("return this")(), pl = z4, q4 = pl.Symbol, or = q4, t0 = Object.prototype, U4 = t0.hasOwnProperty, W4 = t0.toString, vr = or ? or.toStringTag : void 0;
function G4(e) {
  var t = U4.call(e, vr), r = e[vr];
  try {
    e[vr] = void 0;
    var n = !0;
  } catch {
  }
  var a = W4.call(e);
  return n && (t ? e[vr] = r : delete e[vr]), a;
}
var Y4 = G4, K4 = Object.prototype, X4 = K4.toString;
function J4(e) {
  return X4.call(e);
}
var Q4 = J4, e6 = "[object Null]", t6 = "[object Undefined]", Vi = or ? or.toStringTag : void 0;
function r6(e) {
  return e == null ? e === void 0 ? t6 : e6 : Vi && Vi in Object(e) ? Y4(e) : Q4(e);
}
var n6 = r6, zi = or ? or.prototype : void 0;
zi && zi.toString;
function a6(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var r0 = a6, o6 = "[object AsyncFunction]", l6 = "[object Function]", i6 = "[object GeneratorFunction]", s6 = "[object Proxy]";
function u6(e) {
  if (!r0(e))
    return !1;
  var t = n6(e);
  return t == l6 || t == i6 || t == o6 || t == s6;
}
var c6 = u6, d6 = pl["__core-js_shared__"], _a = d6, qi = function() {
  var e = /[^.]+$/.exec(_a && _a.keys && _a.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function p6(e) {
  return !!qi && qi in e;
}
var f6 = p6, m6 = Function.prototype, g6 = m6.toString;
function h6(e) {
  if (e != null) {
    try {
      return g6.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var b6 = h6, y6 = /[\\^$.*+?()[\]{}|]/g, v6 = /^\[object .+?Constructor\]$/, E6 = Function.prototype, x6 = Object.prototype, w6 = E6.toString, A6 = x6.hasOwnProperty, S6 = RegExp(
  "^" + w6.call(A6).replace(y6, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function C6(e) {
  if (!r0(e) || f6(e))
    return !1;
  var t = c6(e) ? S6 : v6;
  return t.test(b6(e));
}
var k6 = C6;
function _6(e, t) {
  return e == null ? void 0 : e[t];
}
var T6 = _6;
function O6(e, t) {
  var r = T6(e, t);
  return k6(r) ? r : void 0;
}
var n0 = O6;
function R6(e, t) {
  return e === t || e !== e && t !== t;
}
var F6 = R6, $6 = n0(Object, "create"), Br = $6;
function D6() {
  this.__data__ = Br ? Br(null) : {}, this.size = 0;
}
var L6 = D6;
function M6(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var B6 = M6, I6 = "__lodash_hash_undefined__", P6 = Object.prototype, j6 = P6.hasOwnProperty;
function N6(e) {
  var t = this.__data__;
  if (Br) {
    var r = t[e];
    return r === I6 ? void 0 : r;
  }
  return j6.call(t, e) ? t[e] : void 0;
}
var H6 = N6, Z6 = Object.prototype, V6 = Z6.hasOwnProperty;
function z6(e) {
  var t = this.__data__;
  return Br ? t[e] !== void 0 : V6.call(t, e);
}
var q6 = z6, U6 = "__lodash_hash_undefined__";
function W6(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Br && t === void 0 ? U6 : t, this;
}
var G6 = W6;
function ur(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ur.prototype.clear = L6;
ur.prototype.delete = B6;
ur.prototype.get = H6;
ur.prototype.has = q6;
ur.prototype.set = G6;
var Ui = ur;
function Y6() {
  this.__data__ = [], this.size = 0;
}
var K6 = Y6;
function X6(e, t) {
  for (var r = e.length; r--; )
    if (F6(e[r][0], t))
      return r;
  return -1;
}
var Kn = X6, J6 = Array.prototype, Q6 = J6.splice;
function eE(e) {
  var t = this.__data__, r = Kn(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Q6.call(t, r, 1), --this.size, !0;
}
var tE = eE;
function rE(e) {
  var t = this.__data__, r = Kn(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var nE = rE;
function aE(e) {
  return Kn(this.__data__, e) > -1;
}
var oE = aE;
function lE(e, t) {
  var r = this.__data__, n = Kn(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var iE = lE;
function cr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
cr.prototype.clear = K6;
cr.prototype.delete = tE;
cr.prototype.get = nE;
cr.prototype.has = oE;
cr.prototype.set = iE;
var sE = cr, uE = n0(pl, "Map"), cE = uE;
function dE() {
  this.size = 0, this.__data__ = {
    hash: new Ui(),
    map: new (cE || sE)(),
    string: new Ui()
  };
}
var pE = dE;
function fE(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var mE = fE;
function gE(e, t) {
  var r = e.__data__;
  return mE(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Xn = gE;
function hE(e) {
  var t = Xn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var bE = hE;
function yE(e) {
  return Xn(this, e).get(e);
}
var vE = yE;
function EE(e) {
  return Xn(this, e).has(e);
}
var xE = EE;
function wE(e, t) {
  var r = Xn(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var AE = wE;
function dr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
dr.prototype.clear = pE;
dr.prototype.delete = bE;
dr.prototype.get = vE;
dr.prototype.has = xE;
dr.prototype.set = AE;
var a0 = dr, SE = "Expected a function";
function fl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(SE);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], l = r.cache;
    if (l.has(a))
      return l.get(a);
    var i = e.apply(this, n);
    return r.cache = l.set(a, i) || l, i;
  };
  return r.cache = new (fl.Cache || a0)(), r;
}
fl.Cache = a0;
var CE = fl, kE = 500;
function _E(e) {
  var t = CE(e, function(n) {
    return r.size === kE && r.clear(), n;
  }), r = t.cache;
  return t;
}
var TE = _E, OE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, RE = /\\(\\)?/g;
TE(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(OE, function(r, n, a, l) {
    t.push(a ? l.replace(RE, "$1") : n || r);
  }), t;
});
var FE = N4, $E = (e) => {
  let t = null, r = !1, n = !1, a = !1, l = "";
  if (e.indexOf("//") >= 0 || e.indexOf("/*") >= 0)
    for (let i = 0; i < e.length; i += 1)
      !t && !r && !n && !a ? e[i] === '"' || e[i] === "'" || e[i] === "`" ? t = e[i] : e[i] === "/" && e[i + 1] === "*" ? r = !0 : e[i] === "/" && e[i + 1] === "/" ? n = !0 : e[i] === "/" && e[i + 1] !== "/" && (a = !0) : (t && (e[i] === t && e[i - 1] !== "\\" || e[i] === `
` && t !== "`") && (t = null), a && (e[i] === "/" && e[i - 1] !== "\\" || e[i] === `
`) && (a = !1), r && e[i - 1] === "/" && e[i - 2] === "*" && (r = !1), n && e[i] === `
` && (n = !1)), !r && !n && (l += e[i]);
  else
    l = e;
  return l;
}, DE = Nt(1e4)(
  (e) => $E(e).replace(/\n\s*/g, "").trim()
), LE = function(t, r) {
  const n = r.slice(0, r.indexOf("{")), a = r.slice(r.indexOf("{"));
  if (n.includes("=>") || n.includes("function"))
    return r;
  let l = n;
  return l = l.replace(t, "function"), l + a;
}, ME = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
function o0(e) {
  if (!FE(e))
    return e;
  let t = e, r = !1;
  return typeof Event < "u" && e instanceof Event && (t = T4(t), r = !0), t = Object.keys(t).reduce((n, a) => {
    try {
      t[a] && t[a].toJSON, n[a] = t[a];
    } catch {
      r = !0;
    }
    return n;
  }, {}), r ? t : e;
}
var BE = function(t) {
  let r, n, a, l;
  return function(u, s) {
    try {
      if (u === "")
        return l = [], r = /* @__PURE__ */ new Map([[s, "[]"]]), n = /* @__PURE__ */ new Map(), a = [], s;
      const c = n.get(this) || this;
      for (; a.length && c !== a[0]; )
        a.shift(), l.pop();
      if (typeof s == "boolean")
        return s;
      if (s === void 0)
        return t.allowUndefined ? "_undefined_" : void 0;
      if (s === null)
        return null;
      if (typeof s == "number")
        return s === -1 / 0 ? "_-Infinity_" : s === 1 / 0 ? "_Infinity_" : Number.isNaN(s) ? "_NaN_" : s;
      if (typeof s == "bigint")
        return `_bigint_${s.toString()}`;
      if (typeof s == "string")
        return ME.test(s) ? t.allowDate ? `_date_${s}` : void 0 : s;
      if ((0, I4.default)(s))
        return t.allowRegExp ? `_regexp_${s.flags}|${s.source}` : void 0;
      if ((0, P4.default)(s)) {
        if (!t.allowFunction)
          return;
        const { name: m } = s, f = s.toString();
        return f.match(
          /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
        ) ? `_function_${m}|${(() => {
        }).toString()}` : `_function_${m}|${DE(LE(u, f))}`;
      }
      if ((0, j4.default)(s)) {
        if (!t.allowSymbol)
          return;
        const m = Symbol.keyFor(s);
        return m !== void 0 ? `_gsymbol_${m}` : `_symbol_${s.toString().slice(7, -1)}`;
      }
      if (a.length >= t.maxDepth)
        return Array.isArray(s) ? `[Array(${s.length})]` : "[Object]";
      if (s === this)
        return `_duplicate_${JSON.stringify(l)}`;
      if (s instanceof Error && t.allowError)
        return {
          __isConvertedError__: !0,
          errorProperties: {
            ...s.cause ? { cause: s.cause } : {},
            ...s,
            name: s.name,
            message: s.message,
            stack: s.stack,
            "_constructor-name_": s.constructor.name
          }
        };
      if (s.constructor && s.constructor.name && s.constructor.name !== "Object" && !Array.isArray(s) && !t.allowClass)
        return;
      const d = r.get(s);
      if (!d) {
        const m = Array.isArray(s) ? s : o0(s);
        if (s.constructor && s.constructor.name && s.constructor.name !== "Object" && !Array.isArray(s) && t.allowClass)
          try {
            Object.assign(m, { "_constructor-name_": s.constructor.name });
          } catch {
          }
        return l.push(u), a.unshift(m), r.set(s, JSON.stringify(l)), s !== m && n.set(s, m), m;
      }
      return `_duplicate_${d}`;
    } catch {
      return;
    }
  };
}, IE = {
  maxDepth: 10,
  space: void 0,
  allowFunction: !0,
  allowRegExp: !0,
  allowDate: !0,
  allowClass: !0,
  allowError: !0,
  allowUndefined: !0,
  allowSymbol: !0,
  lazyEval: !0
}, PE = (e, t = {}) => {
  const r = { ...IE, ...t };
  return JSON.stringify(o0(e), BE(r), t.space);
};
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var l0 = { exports: {} }, Ta, Wi;
function jE() {
  return Wi || (Wi = 1, Ta = {
    // Where to render the table of contents.
    tocSelector: ".js-toc",
    // Where to grab the headings to build the table of contents.
    contentSelector: ".js-toc-content",
    // Which headings to grab inside of the contentSelector element.
    headingSelector: "h1, h2, h3",
    // Headings that match the ignoreSelector will be skipped.
    ignoreSelector: ".js-toc-ignore",
    // For headings inside relative or absolute positioned containers within content
    hasInnerContainers: !1,
    // Main class to add to links.
    linkClass: "toc-link",
    // Extra classes to add to links.
    extraLinkClasses: "",
    // Class to add to active links,
    // the link corresponding to the top most heading on the page.
    activeLinkClass: "is-active-link",
    // Main class to add to lists.
    listClass: "toc-list",
    // Extra classes to add to lists.
    extraListClasses: "",
    // Class that gets added when a list should be collapsed.
    isCollapsedClass: "is-collapsed",
    // Class that gets added when a list should be able
    // to be collapsed but isn't necessarily collapsed.
    collapsibleClass: "is-collapsible",
    // Class to add to list items.
    listItemClass: "toc-list-item",
    // Class to add to active list items.
    activeListItemClass: "is-active-li",
    // How many heading levels should not be collapsed.
    // For example, number 6 will show everything since
    // there are only 6 heading levels and number 0 will collapse them all.
    // The sections that are hidden will open
    // and close as you scroll to headings within them.
    collapseDepth: 0,
    // Smooth scrolling enabled.
    scrollSmooth: !0,
    // Smooth scroll duration.
    scrollSmoothDuration: 420,
    // Smooth scroll offset.
    scrollSmoothOffset: 0,
    // Callback for scroll end.
    scrollEndCallback: function(e) {
    },
    // Headings offset between the headings and the top of the document (this is meant for minor adjustments).
    headingsOffset: 1,
    // Timeout between events firing to make sure it's
    // not too rapid (for performance reasons).
    throttleTimeout: 50,
    // Element to add the positionFixedClass to.
    positionFixedSelector: null,
    // Fixed position class to add to make sidebar fixed after scrolling
    // down past the fixedSidebarOffset.
    positionFixedClass: "is-position-fixed",
    // fixedSidebarOffset can be any number but by default is set
    // to auto which sets the fixedSidebarOffset to the sidebar
    // element's offsetTop from the top of the document on init.
    fixedSidebarOffset: "auto",
    // includeHtml can be set to true to include the HTML markup from the
    // heading node instead of just including the textContent.
    includeHtml: !1,
    // includeTitleTags automatically sets the html title tag of the link
    // to match the title. This can be useful for SEO purposes or
    // when truncating titles.
    includeTitleTags: !1,
    // onclick function to apply to all links in toc. will be called with
    // the event as the first parameter, and this can be used to stop,
    // propagation, prevent default or perform action
    onClick: function(e) {
    },
    // orderedList can be set to false to generate unordered lists (ul)
    // instead of ordered lists (ol)
    orderedList: !0,
    // If there is a fixed article scroll container, set to calculate titles' offset
    scrollContainer: null,
    // prevent ToC DOM rendering if it's already rendered by an external system
    skipRendering: !1,
    // Optional callback to change heading labels.
    // For example it can be used to cut down and put ellipses on multiline headings you deem too long.
    // Called each time a heading is parsed. Expects a string and returns the modified label to display.
    // Additionally, the attribute `data-heading-label` may be used on a heading to specify
    // a shorter string to be used in the TOC.
    // function (string) => string
    headingLabelCallback: !1,
    // ignore headings that are hidden in DOM
    ignoreHiddenElements: !1,
    // Optional callback to modify properties of parsed headings.
    // The heading element is passed in node parameter and information parsed by default parser is provided in obj parameter.
    // Function has to return the same or modified obj.
    // The heading will be excluded from TOC if nothing is returned.
    // function (object, HTMLElement) => object | void
    headingObjectCallback: null,
    // Set the base path, useful if you use a `base` tag in `head`.
    basePath: "",
    // Only takes affect when `tocSelector` is scrolling,
    // keep the toc scroll position in sync with the content.
    disableTocScrollSync: !1,
    // Offset for the toc scroll (top) position when scrolling the page.
    // Only effective if `disableTocScrollSync` is false.
    tocScrollOffset: 0
  }), Ta;
}
var Oa, Gi;
function NE() {
  return Gi || (Gi = 1, Oa = function(e) {
    var t = [].forEach, r = [].some, n = document.body, a, l = !0, i = " ";
    function u(y, w) {
      var v = w.appendChild(c(y));
      if (y.children.length) {
        var E = d(y.isCollapsed);
        y.children.forEach(function(A) {
          u(A, E);
        }), v.appendChild(E);
      }
    }
    function s(y, w) {
      var v = !1, E = d(v);
      if (w.forEach(function(A) {
        u(A, E);
      }), a = y || a, a !== null)
        return a.firstChild && a.removeChild(a.firstChild), w.length === 0 ? a : a.appendChild(E);
    }
    function c(y) {
      var w = document.createElement("li"), v = document.createElement("a");
      return e.listItemClass && w.setAttribute("class", e.listItemClass), e.onClick && (v.onclick = e.onClick), e.includeTitleTags && v.setAttribute("title", y.textContent), e.includeHtml && y.childNodes.length ? t.call(y.childNodes, function(E) {
        v.appendChild(E.cloneNode(!0));
      }) : v.textContent = y.textContent, v.setAttribute("href", e.basePath + "#" + y.id), v.setAttribute("class", e.linkClass + i + "node-name--" + y.nodeName + i + e.extraLinkClasses), w.appendChild(v), w;
    }
    function d(y) {
      var w = e.orderedList ? "ol" : "ul", v = document.createElement(w), E = e.listClass + i + e.extraListClasses;
      return y && (E = E + i + e.collapsibleClass, E = E + i + e.isCollapsedClass), v.setAttribute("class", E), v;
    }
    function m() {
      if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
        var y;
        y = document.querySelector(e.scrollContainer).scrollTop;
      } else
        y = document.documentElement.scrollTop || n.scrollTop;
      var w = document.querySelector(e.positionFixedSelector);
      e.fixedSidebarOffset === "auto" && (e.fixedSidebarOffset = a.offsetTop), y > e.fixedSidebarOffset ? w.className.indexOf(e.positionFixedClass) === -1 && (w.className += i + e.positionFixedClass) : w.className = w.className.split(i + e.positionFixedClass).join("");
    }
    function f(y) {
      var w = 0;
      return y !== null && (w = y.offsetTop, e.hasInnerContainers && (w += f(y.offsetParent))), w;
    }
    function p(y) {
      if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
        var w;
        w = document.querySelector(e.scrollContainer).scrollTop;
      } else
        w = document.documentElement.scrollTop || n.scrollTop;
      e.positionFixedSelector && m();
      var v = y, E;
      if (l && a !== null && v.length > 0) {
        r.call(v, function(R, $) {
          if (f(R) > w + e.headingsOffset + 10) {
            var F = $ === 0 ? $ : $ - 1;
            return E = v[F], !0;
          } else if ($ === v.length - 1)
            return E = v[v.length - 1], !0;
        });
        var A = a.querySelector("." + e.activeLinkClass), S = a.querySelector("." + e.linkClass + ".node-name--" + E.nodeName + '[href="' + e.basePath + "#" + E.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, "\\$1") + '"]');
        if (A === S)
          return;
        var k = a.querySelectorAll("." + e.linkClass);
        t.call(k, function(R) {
          R.className = R.className.split(i + e.activeLinkClass).join("");
        });
        var C = a.querySelectorAll("." + e.listItemClass);
        t.call(C, function(R) {
          R.className = R.className.split(i + e.activeListItemClass).join("");
        }), S && S.className.indexOf(e.activeLinkClass) === -1 && (S.className += i + e.activeLinkClass);
        var T = S && S.parentNode;
        T && T.className.indexOf(e.activeListItemClass) === -1 && (T.className += i + e.activeListItemClass);
        var O = a.querySelectorAll("." + e.listClass + "." + e.collapsibleClass);
        t.call(O, function(R) {
          R.className.indexOf(e.isCollapsedClass) === -1 && (R.className += i + e.isCollapsedClass);
        }), S && S.nextSibling && S.nextSibling.className.indexOf(e.isCollapsedClass) !== -1 && (S.nextSibling.className = S.nextSibling.className.split(i + e.isCollapsedClass).join("")), h(S && S.parentNode.parentNode);
      }
    }
    function h(y) {
      return y && y.className.indexOf(e.collapsibleClass) !== -1 && y.className.indexOf(e.isCollapsedClass) !== -1 ? (y.className = y.className.split(i + e.isCollapsedClass).join(""), h(y.parentNode.parentNode)) : y;
    }
    function g(y) {
      var w = y.target || y.srcElement;
      typeof w.className != "string" || w.className.indexOf(e.linkClass) === -1 || (l = !1);
    }
    function x() {
      l = !0;
    }
    return {
      enableTocAnimation: x,
      disableTocAnimation: g,
      render: s,
      updateToc: p
    };
  }), Oa;
}
var Ra, Yi;
function HE() {
  return Yi || (Yi = 1, Ra = function(t) {
    var r = [].reduce;
    function n(d) {
      return d[d.length - 1];
    }
    function a(d) {
      return +d.nodeName.toUpperCase().replace("H", "");
    }
    function l(d) {
      try {
        return d instanceof window.HTMLElement || d instanceof window.parent.HTMLElement;
      } catch {
        return d instanceof window.HTMLElement;
      }
    }
    function i(d) {
      if (!l(d))
        return d;
      if (t.ignoreHiddenElements && (!d.offsetHeight || !d.offsetParent))
        return null;
      const m = d.getAttribute("data-heading-label") || (t.headingLabelCallback ? String(t.headingLabelCallback(d.textContent)) : d.textContent.trim());
      var f = {
        id: d.id,
        children: [],
        nodeName: d.nodeName,
        headingLevel: a(d),
        textContent: m
      };
      return t.includeHtml && (f.childNodes = d.childNodes), t.headingObjectCallback ? t.headingObjectCallback(f, d) : f;
    }
    function u(d, m) {
      for (var f = i(d), p = f.headingLevel, h = m, g = n(h), x = g ? g.headingLevel : 0, y = p - x; y > 0 && (g = n(h), !(g && p === g.headingLevel)); )
        g && g.children !== void 0 && (h = g.children), y--;
      return p >= t.collapseDepth && (f.isCollapsed = !0), h.push(f), h;
    }
    function s(d, m) {
      var f = m;
      t.ignoreSelector && (f = m.split(",").map(function(h) {
        return h.trim() + ":not(" + t.ignoreSelector + ")";
      }));
      try {
        return d.querySelectorAll(f);
      } catch {
        return console.warn("Headers not found with selector: " + f), null;
      }
    }
    function c(d) {
      return r.call(d, function(f, p) {
        var h = i(p);
        return h && u(h, f.nest), f;
      }, {
        nest: []
      });
    }
    return {
      nestHeadingsArray: c,
      selectHeadings: s
    };
  }), Ra;
}
var Fa, Ki;
function ZE() {
  return Ki || (Ki = 1, Fa = function(t) {
    var r = t.tocElement || document.querySelector(t.tocSelector);
    if (r && r.scrollHeight > r.clientHeight) {
      var n = r.querySelector("." + t.activeListItemClass);
      n && (r.scrollTop = n.offsetTop - t.tocScrollOffset);
    }
  }), Fa;
}
var $a = {}, Xi;
function VE() {
  if (Xi)
    return $a;
  Xi = 1, $a.initSmoothScrolling = e;
  function e(r) {
    var n = r.duration, a = r.offset, l = location.hash ? s(location.href) : location.href;
    i();
    function i() {
      document.body.addEventListener("click", d, !1);
      function d(m) {
        !u(m.target) || m.target.className.indexOf("no-smooth-scroll") > -1 || m.target.href.charAt(m.target.href.length - 2) === "#" && m.target.href.charAt(m.target.href.length - 1) === "!" || m.target.className.indexOf(r.linkClass) === -1 || t(m.target.hash, {
          duration: n,
          offset: a,
          callback: function() {
            c(m.target.hash);
          }
        });
      }
    }
    function u(d) {
      return d.tagName.toLowerCase() === "a" && (d.hash.length > 0 || d.href.charAt(d.href.length - 1) === "#") && (s(d.href) === l || s(d.href) + "#" === l);
    }
    function s(d) {
      return d.slice(0, d.lastIndexOf("#"));
    }
    function c(d) {
      var m = document.getElementById(d.substring(1));
      m && (/^(?:a|select|input|button|textarea)$/i.test(m.tagName) || (m.tabIndex = -1), m.focus());
    }
  }
  function t(r, n) {
    var a = window.pageYOffset, l = {
      duration: n.duration,
      offset: n.offset || 0,
      callback: n.callback,
      easing: n.easing || p
    }, i = document.querySelector('[id="' + decodeURI(r).split("#").join("") + '"]') || document.querySelector('[id="' + r.split("#").join("") + '"]'), u = typeof r == "string" ? l.offset + (r ? i && i.getBoundingClientRect().top || 0 : -(document.documentElement.scrollTop || document.body.scrollTop)) : r, s = typeof l.duration == "function" ? l.duration(u) : l.duration, c, d;
    requestAnimationFrame(function(h) {
      c = h, m(h);
    });
    function m(h) {
      d = h - c, window.scrollTo(0, l.easing(d, a, u, s)), d < s ? requestAnimationFrame(m) : f();
    }
    function f() {
      window.scrollTo(0, a + u), typeof l.callback == "function" && l.callback();
    }
    function p(h, g, x, y) {
      return h /= y / 2, h < 1 ? x / 2 * h * h + g : (h--, -x / 2 * (h * (h - 2) - 1) + g);
    }
  }
  return $a;
}
(function(e, t) {
  (function(r, n) {
    e.exports = n(r);
  })(typeof aa < "u" ? aa : window || aa, function(r) {
    var n = jE(), a = {}, l = {}, i = NE(), u = HE(), s = ZE(), c, d, m = !!r && !!r.document && !!r.document.querySelector && !!r.addEventListener;
    if (typeof window > "u" && !m)
      return;
    var f, p = Object.prototype.hasOwnProperty;
    function h() {
      for (var w = {}, v = 0; v < arguments.length; v++) {
        var E = arguments[v];
        for (var A in E)
          p.call(E, A) && (w[A] = E[A]);
      }
      return w;
    }
    function g(w, v, E) {
      v || (v = 250);
      var A, S;
      return function() {
        var k = E || this, C = +/* @__PURE__ */ new Date(), T = arguments;
        A && C < A + v ? (clearTimeout(S), S = setTimeout(function() {
          A = C, w.apply(k, T);
        }, v)) : (A = C, w.apply(k, T));
      };
    }
    function x(w) {
      try {
        return w.contentElement || document.querySelector(w.contentSelector);
      } catch {
        return console.warn("Contents element not found: " + w.contentSelector), null;
      }
    }
    function y(w) {
      try {
        return w.tocElement || document.querySelector(w.tocSelector);
      } catch {
        return console.warn("TOC element not found: " + w.tocSelector), null;
      }
    }
    return l.destroy = function() {
      var w = y(a);
      w !== null && (a.skipRendering || w && (w.innerHTML = ""), a.scrollContainer && document.querySelector(a.scrollContainer) ? (document.querySelector(a.scrollContainer).removeEventListener("scroll", this._scrollListener, !1), document.querySelector(a.scrollContainer).removeEventListener("resize", this._scrollListener, !1), c && document.querySelector(a.scrollContainer).removeEventListener("click", this._clickListener, !1)) : (document.removeEventListener("scroll", this._scrollListener, !1), document.removeEventListener("resize", this._scrollListener, !1), c && document.removeEventListener("click", this._clickListener, !1)));
    }, l.init = function(w) {
      if (m) {
        a = h(n, w || {}), this.options = a, this.state = {}, a.scrollSmooth && (a.duration = a.scrollSmoothDuration, a.offset = a.scrollSmoothOffset, l.scrollSmooth = VE().initSmoothScrolling(a)), c = i(a), d = u(a), this._buildHtml = c, this._parseContent = d, this._headingsArray = f, l.destroy();
        var v = x(a);
        if (v !== null) {
          var E = y(a);
          if (E !== null && (f = d.selectHeadings(v, a.headingSelector), f !== null)) {
            var A = d.nestHeadingsArray(f), S = A.nest;
            if (!a.skipRendering)
              c.render(E, S);
            else
              return this;
            this._scrollListener = g(function(C) {
              c.updateToc(f), !a.disableTocScrollSync && s(a);
              var T = C && C.target && C.target.scrollingElement && C.target.scrollingElement.scrollTop === 0;
              (C && (C.eventPhase === 0 || C.currentTarget === null) || T) && (c.updateToc(f), a.scrollEndCallback && a.scrollEndCallback(C));
            }, a.throttleTimeout), this._scrollListener(), a.scrollContainer && document.querySelector(a.scrollContainer) ? (document.querySelector(a.scrollContainer).addEventListener("scroll", this._scrollListener, !1), document.querySelector(a.scrollContainer).addEventListener("resize", this._scrollListener, !1)) : (document.addEventListener("scroll", this._scrollListener, !1), document.addEventListener("resize", this._scrollListener, !1));
            var k = null;
            return this._clickListener = g(function(C) {
              a.scrollSmooth && c.disableTocAnimation(C), c.updateToc(f), k && clearTimeout(k), k = setTimeout(function() {
                c.enableTocAnimation();
              }, a.scrollSmoothDuration);
            }, a.throttleTimeout), a.scrollContainer && document.querySelector(a.scrollContainer) ? document.querySelector(a.scrollContainer).addEventListener("click", this._clickListener, !1) : document.addEventListener("click", this._clickListener, !1), this;
          }
        }
      }
    }, l.refresh = function(w) {
      l.destroy(), l.init(w || this.options);
    }, r.tocbot = l, l;
  });
})(l0);
var Ji = l0.exports;
const { global: $e } = __STORYBOOK_MODULE_GLOBAL__, { deprecate: pe, once: zE, logger: ml } = __STORYBOOK_MODULE_CLIENT_LOGGER__, { filterArgTypes: qE, composeConfigs: hw, Preview: bw, DocsContext: yw } = __STORYBOOK_MODULE_PREVIEW_API__, { STORY_ARGS_UPDATED: Qi, UPDATE_STORY_ARGS: UE, RESET_STORY_ARGS: WE, GLOBALS_UPDATED: es, NAVIGATE_URL: GE } = __STORYBOOK_MODULE_CORE_EVENTS__;
__STORYBOOK_MODULE_CHANNELS__;
var YE = _.div(re, ({ theme: e }) => ({ backgroundColor: e.base === "light" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.01)", borderRadius: e.appBorderRadius, border: `1px dashed ${e.appBorderColor}`, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, margin: "25px 0 40px", color: te(0.3, e.color.defaultText), fontSize: e.typography.size.s2 })), i0 = (e) => o.createElement(YE, { ...e, className: "docblock-emptyblock sb-unstyled" }), KE = _(Hn)(({ theme: e }) => ({ fontSize: `${e.typography.size.s2 - 1}px`, lineHeight: "19px", margin: "25px 0 40px", borderRadius: e.appBorderRadius, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", "pre.prismjs": { padding: 20, background: "inherit" } })), XE = _.div(({ theme: e }) => ({ background: e.background.content, borderRadius: e.appBorderRadius, border: `1px solid ${e.appBorderColor}`, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", margin: "25px 0 40px", padding: "20px 20px 20px 22px" })), Qr = _.div(({ theme: e }) => ({ animation: `${e.animation.glow} 1.5s ease-in-out infinite`, background: e.appBorderColor, height: 17, marginTop: 1, width: "60%", [`&:first-child${qa}`]: { margin: 0 } })), JE = () => o.createElement(XE, null, o.createElement(Qr, null), o.createElement(Qr, { style: { width: "80%" } }), o.createElement(Qr, { style: { width: "30%" } }), o.createElement(Qr, { style: { width: "80%" } })), gl = ({ isLoading: e, error: t, language: r, code: n, dark: a, format: l, ...i }) => {
  if (e)
    return o.createElement(JE, null);
  if (t)
    return o.createElement(i0, null, t);
  let u = o.createElement(KE, { bordered: !0, copyable: !0, format: l, language: r, className: "docblock-source sb-unstyled", ...i }, n);
  if (typeof a > "u")
    return u;
  let s = a ? Ha.dark : Ha.light;
  return o.createElement(Us, { theme: za(s) }, u);
};
gl.defaultProps = { format: !1 };
var le = (e) => `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`, hl = 600, QE = _.h1(re, ({ theme: e }) => ({ color: e.color.defaultText, fontSize: e.typography.size.m3, fontWeight: e.typography.weight.bold, lineHeight: "32px", [`@media (min-width: ${hl}px)`]: { fontSize: e.typography.size.l1, lineHeight: "36px", marginBottom: "16px" } })), ex = _.h2(re, ({ theme: e }) => ({ fontWeight: e.typography.weight.regular, fontSize: e.typography.size.s3, lineHeight: "20px", borderBottom: "none", marginBottom: 15, [`@media (min-width: ${hl}px)`]: { fontSize: e.typography.size.m1, lineHeight: "28px", marginBottom: 24 }, color: te(0.25, e.color.defaultText) })), tx = _.div(({ theme: e }) => {
  let t = { fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }, r = { margin: "20px 0 8px", padding: 0, cursor: "text", position: "relative", color: e.color.defaultText, "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& code": { fontSize: "inherit" } }, n = { lineHeight: 1, margin: "0 2px", padding: "3px 5px", whiteSpace: "nowrap", borderRadius: 3, fontSize: e.typography.size.s2 - 1, border: e.base === "light" ? `1px solid ${e.color.mediumlight}` : `1px solid ${e.color.darker}`, color: e.base === "light" ? te(0.1, e.color.defaultText) : te(0.3, e.color.defaultText), backgroundColor: e.base === "light" ? e.color.lighter : e.color.border };
  return { maxWidth: 1e3, width: "100%", [le("a")]: { ...t, fontSize: "inherit", lineHeight: "24px", color: e.color.secondary, textDecoration: "none", "&.absent": { color: "#cc0000" }, "&.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 } }, [le("blockquote")]: { ...t, margin: "16px 0", borderLeft: `4px solid ${e.color.medium}`, padding: "0 15px", color: e.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, [le("div")]: t, [le("dl")]: { ...t, margin: "16px 0", padding: 0, "& dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", padding: 0, margin: "16px 0 4px" }, "& dt:first-of-type": { padding: 0 }, "& dt > :first-of-type": { marginTop: 0 }, "& dt > :last-child": { marginBottom: 0 }, "& dd": { margin: "0 0 16px", padding: "0 15px" }, "& dd > :first-of-type": { marginTop: 0 }, "& dd > :last-child": { marginBottom: 0 } }, [le("h1")]: { ...t, ...r, fontSize: `${e.typography.size.l1}px`, fontWeight: e.typography.weight.bold }, [le("h2")]: { ...t, ...r, fontSize: `${e.typography.size.m2}px`, paddingBottom: 4, borderBottom: `1px solid ${e.appBorderColor}` }, [le("h3")]: { ...t, ...r, fontSize: `${e.typography.size.m1}px`, fontWeight: e.typography.weight.bold }, [le("h4")]: { ...t, ...r, fontSize: `${e.typography.size.s3}px` }, [le("h5")]: { ...t, ...r, fontSize: `${e.typography.size.s2}px` }, [le("h6")]: { ...t, ...r, fontSize: `${e.typography.size.s2}px`, color: e.color.dark }, [le("hr")]: { border: "0 none", borderTop: `1px solid ${e.appBorderColor}`, height: 4, padding: 0 }, [le("img")]: { maxWidth: "100%" }, [le("li")]: { ...t, fontSize: e.typography.size.s2, color: e.color.defaultText, lineHeight: "24px", "& + li": { marginTop: ".25em" }, "& ul, & ol": { marginTop: ".25em", marginBottom: 0 }, "& code": n }, [le("ol")]: { ...t, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, [le("p")]: { ...t, margin: "16px 0", fontSize: e.typography.size.s2, lineHeight: "24px", color: e.color.defaultText, "& code": n }, [le("pre")]: { ...t, fontFamily: e.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0", "&:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "& pre, &.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px", code: { color: "inherit", fontSize: "inherit" } }, "& code": { whiteSpace: "pre" }, "& code, & tt": { border: "none" } }, [le("span")]: { ...t, "&.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${e.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: e.color.darkest, display: "block", padding: "5px 0 0" } }, "&.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "&.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "&.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "&.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } } }, [le("table")]: { ...t, margin: "16px 0", fontSize: e.typography.size.s2, lineHeight: "24px", padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${e.appBorderColor}`, backgroundColor: e.appContentBg, margin: 0, padding: 0 }, "& tr:nth-of-type(2n)": { backgroundColor: e.base === "dark" ? e.color.darker : e.color.lighter }, "& tr th": { fontWeight: "bold", color: e.color.defaultText, border: `1px solid ${e.appBorderColor}`, margin: 0, padding: "6px 13px" }, "& tr td": { border: `1px solid ${e.appBorderColor}`, color: e.color.defaultText, margin: 0, padding: "6px 13px" }, "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 }, "& tr th :last-child, & tr td :last-child": { marginBottom: 0 } }, [le("ul")]: { ...t, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 }, listStyle: "disc" } };
}), rx = _.div(({ theme: e }) => ({ background: e.background.content, display: "flex", justifyContent: "center", padding: "4rem 20px", minHeight: "100vh", boxSizing: "border-box", gap: "3rem", [`@media (min-width: ${hl}px)`]: {} })), nx = ({ children: e, toc: t }) => o.createElement(rx, { className: "sbdocs sbdocs-wrapper" }, o.createElement(tx, { className: "sbdocs sbdocs-content" }, e), t), Jn = (e) => ({ borderRadius: e.appBorderRadius, background: e.background.content, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", border: `1px solid ${e.appBorderColor}` }), ax = ({ zoom: e, resetZoom: t }) => o.createElement(o.Fragment, null, o.createElement(Pt, { key: "zoomin", onClick: (r) => {
  r.preventDefault(), e(0.8);
}, title: "Zoom in" }, o.createElement(ve, { icon: "zoom" })), o.createElement(Pt, { key: "zoomout", onClick: (r) => {
  r.preventDefault(), e(1.25);
}, title: "Zoom out" }, o.createElement(ve, { icon: "zoomout" })), o.createElement(Pt, { key: "zoomreset", onClick: (r) => {
  r.preventDefault(), t();
}, title: "Reset zoom" }, o.createElement(ve, { icon: "zoomreset" }))), ox = _(zn)({ position: "absolute", left: 0, right: 0, top: 0, transition: "transform .2s linear" }), lx = ({ isLoading: e, storyId: t, baseUrl: r, zoom: n, resetZoom: a, ...l }) => o.createElement(ox, { ...l }, o.createElement(b.Fragment, { key: "left" }, e ? [1, 2, 3].map((i) => o.createElement(hc, { key: i })) : o.createElement(ax, { zoom: n, resetZoom: a }))), s0 = b.createContext({ scale: 1 }), { window: ix } = $e, sx = class extends b.Component {
  constructor() {
    super(...arguments), this.iframe = null;
  }
  componentDidMount() {
    let { id: e } = this.props;
    this.iframe = ix.document.getElementById(e);
  }
  shouldComponentUpdate(e) {
    let { scale: t } = e;
    return t !== this.props.scale && this.setIframeBodyStyle({ width: `${t * 100}%`, height: `${t * 100}%`, transform: `scale(${1 / t})`, transformOrigin: "top left" }), !1;
  }
  setIframeBodyStyle(e) {
    return Object.assign(this.iframe.contentDocument.body.style, e);
  }
  render() {
    let { id: e, title: t, src: r, allowFullScreen: n, scale: a, ...l } = this.props;
    return o.createElement("iframe", { id: e, title: t, src: r, ...n ? { allow: "fullscreen" } : {}, loading: "lazy", ...l });
  }
}, { PREVIEW_URL: ux } = $e, cx = ux || "iframe.html", so = ({ story: e, primary: t }) => `story--${e.id}${t ? "--primary" : ""}`, dx = (e) => {
  let t = b.useRef(), [r, n] = b.useState(!0), [a, l] = b.useState(), { story: i, height: u, autoplay: s, forceInitialArgs: c, renderStoryToElement: d } = e;
  return b.useEffect(() => {
    if (!(i && t.current))
      return () => {
      };
    let m = t.current, f = d(i, m, { showMain: () => {
    }, showError: ({ title: p, description: h }) => l(new Error(`${p} - ${h}`)), showException: (p) => l(p) }, { autoplay: s, forceInitialArgs: c });
    return n(!1), () => {
      Promise.resolve().then(() => f());
    };
  }, [s, d, i]), a ? o.createElement("pre", null, o.createElement(uc, { error: a })) : o.createElement(o.Fragment, null, u ? o.createElement("style", null, `#${so(e)} { min-height: ${u}; transform: translateZ(0); overflow: auto }`) : null, r && o.createElement(bl, null), o.createElement("div", { ref: t, id: `${so(e)}-inner`, "data-name": i.name }));
}, px = ({ story: e, height: t = "500px" }) => o.createElement("div", { style: { width: "100%", height: t } }, o.createElement(s0.Consumer, null, ({ scale: r }) => o.createElement(sx, { key: "iframe", id: `iframe--${e.id}`, title: e.name, src: Ec(cx, e.id, { viewMode: "story" }), allowFullScreen: !0, scale: r, style: { width: "100%", height: "100%", border: "0 none" } }))), fx = (e) => {
  let { inline: t } = e;
  return o.createElement("div", { id: so(e), className: "sb-story sb-unstyled", "data-story-block": "true" }, t ? o.createElement(dx, { ...e }) : o.createElement(px, { ...e }));
}, bl = () => o.createElement(vc, null), mx = _.div(({ isColumn: e, columns: t, layout: r }) => ({ display: e || !t ? "block" : "flex", position: "relative", flexWrap: "wrap", overflow: "auto", flexDirection: e ? "column" : "row", "& .innerZoomElementWrapper > *": e ? { width: r !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "block" } : { maxWidth: r !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "inline-block" } }), ({ layout: e = "padded" }) => e === "centered" || e === "padded" ? { padding: "30px 20px", margin: -10, "& .innerZoomElementWrapper > *": { width: "auto", border: "10px solid transparent!important" } } : {}, ({ layout: e = "padded" }) => e === "centered" ? { display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center" } : {}, ({ columns: e }) => e && e > 1 ? { ".innerZoomElementWrapper > *": { minWidth: `calc(100% / ${e} - 20px)` } } : {}), ts = _(gl)(({ theme: e }) => ({ margin: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: e.appBorderRadius, borderBottomRightRadius: e.appBorderRadius, border: "none", background: e.base === "light" ? "rgba(0, 0, 0, 0.85)" : Ke(0.05, e.background.content), color: e.color.lightest, button: { background: e.base === "light" ? "rgba(0, 0, 0, 0.85)" : Ke(0.05, e.background.content) } })), gx = _.div(({ theme: e, withSource: t, isExpanded: r }) => ({ position: "relative", overflow: "hidden", margin: "25px 0 40px", ...Jn(e), borderBottomLeftRadius: t && r && 0, borderBottomRightRadius: t && r && 0, borderBottomWidth: r && 0, "h3 + &": { marginTop: "16px" } }), ({ withToolbar: e }) => e && { paddingTop: 40 }), hx = (e, t, r) => {
  switch (!0) {
    case !!(e && e.error):
      return { source: null, actionItem: { title: "No code available", className: "docblock-code-toggle docblock-code-toggle--disabled", disabled: !0, onClick: () => r(!1) } };
    case t:
      return { source: o.createElement(ts, { ...e, dark: !0 }), actionItem: { title: "Hide code", className: "docblock-code-toggle docblock-code-toggle--expanded", onClick: () => r(!1) } };
    default:
      return { source: o.createElement(ts, { ...e, dark: !0 }), actionItem: { title: "Show code", className: "docblock-code-toggle", onClick: () => r(!0) } };
  }
};
function bx(e) {
  if (b.Children.count(e) === 1) {
    let t = e;
    if (t.props)
      return t.props.id;
  }
  return null;
}
var yx = _(lx)({ position: "absolute", top: 0, left: 0, right: 0, height: 40 }), vx = _.div({ overflow: "hidden", position: "relative" }), uo = ({ isLoading: e, isColumn: t, columns: r, children: n, withSource: a, withToolbar: l = !1, isExpanded: i = !1, additionalActions: u, className: s, layout: c = "padded", ...d }) => {
  let [m, f] = b.useState(i), { source: p, actionItem: h } = hx(a, m, f), [g, x] = b.useState(1), y = [s].concat(["sbdocs", "sbdocs-preview", "sb-unstyled"]), w = a ? [h] : [], [v, E] = b.useState(u ? [...u] : []), A = [...w, ...v], { window: S } = $e, k = b.useCallback(async (T) => {
    let { createCopyToClipboardFunction: O } = await Promise.resolve().then(() => Th);
    O();
  }, []), C = (T) => {
    let O = S.getSelection();
    O && O.type === "Range" || (T.preventDefault(), v.filter((R) => R.title === "Copied").length === 0 && k(p.props.code).then(() => {
      E([...v, { title: "Copied", onClick: () => {
      } }]), S.setTimeout(() => E(v.filter((R) => R.title !== "Copied")), 1500);
    }));
  };
  return o.createElement(gx, { withSource: a, withToolbar: l, ...d, className: y.join(" ") }, l && o.createElement(yx, { isLoading: e, border: !0, zoom: (T) => x(g * T), resetZoom: () => x(1), storyId: bx(n), baseUrl: "./iframe.html" }), o.createElement(s0.Provider, { value: { scale: g } }, o.createElement(vx, { className: "docs-story", onCopyCapture: a && C }, o.createElement(mx, { isColumn: t || !Array.isArray(n), columns: r, layout: c }, o.createElement(sc.Element, { scale: g }, Array.isArray(n) ? n.map((T, O) => o.createElement("div", { key: O }, T)) : o.createElement("div", null, n))), o.createElement(Mo, { actionItems: A }))), a && m && p);
}, Ex = _(uo)(() => ({ ".docs-story": { paddingTop: 32, paddingBottom: 40 } })), xx = () => o.createElement(Ex, { isLoading: !0, withToolbar: !0 }, o.createElement(bl, null)), wx = _.table(({ theme: e }) => ({ "&&": { borderCollapse: "collapse", borderSpacing: 0, border: "none", tr: { border: "none !important", background: "none" }, "td, th": { padding: 0, border: "none", width: "auto!important" }, marginTop: 0, marginBottom: 0, "th:first-of-type, td:first-of-type": { paddingLeft: 0 }, "th:last-of-type, td:last-of-type": { paddingRight: 0 }, td: { paddingTop: 0, paddingBottom: 4, "&:not(:first-of-type)": { paddingLeft: 10, paddingRight: 0 } }, tbody: { boxShadow: "none", border: "none" }, code: mt({ theme: e }), div: { span: { fontWeight: "bold" } }, "& code": { margin: 0, display: "inline-block", fontSize: e.typography.size.s1 } } })), Ax = ({ tags: e }) => {
  let t = (e.params || []).filter((l) => l.description), r = t.length !== 0, n = e.deprecated != null, a = e.returns != null && e.returns.description != null;
  return !r && !a && !n ? null : o.createElement(o.Fragment, null, o.createElement(wx, null, o.createElement("tbody", null, n && o.createElement("tr", { key: "deprecated" }, o.createElement("td", { colSpan: 2 }, o.createElement("strong", null, "Deprecated"), ": ", e.deprecated)), r && t.map((l) => o.createElement("tr", { key: l.name }, o.createElement("td", null, o.createElement("code", null, l.name)), o.createElement("td", null, l.description))), a && o.createElement("tr", { key: "returns" }, o.createElement("td", null, o.createElement("code", null, "Returns")), o.createElement("td", null, e.returns.description)))));
}, co = 8, rs = _.div(({ isExpanded: e }) => ({ display: "flex", flexDirection: e ? "column" : "row", flexWrap: "wrap", alignItems: "flex-start", marginBottom: "-4px", minWidth: 100 })), Sx = _.span(mt, ({ theme: e, simple: t = !1 }) => ({ flex: "0 0 auto", fontFamily: e.typography.fonts.mono, fontSize: e.typography.size.s1, wordBreak: "break-word", whiteSpace: "normal", maxWidth: "100%", margin: 0, marginRight: "4px", marginBottom: "4px", paddingTop: "2px", paddingBottom: "2px", lineHeight: "13px", ...t && { background: "transparent", border: "0 none", paddingLeft: 0 } })), Cx = _.button(({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, color: e.color.secondary, marginBottom: "4px", background: "none", border: "none" })), kx = _.div(mt, ({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, color: e.color.secondary, fontSize: e.typography.size.s1, margin: 0, whiteSpace: "nowrap", display: "flex", alignItems: "center" })), _x = _.div(({ theme: e, width: t }) => ({ width: t, minWidth: 200, maxWidth: 800, padding: 15, fontFamily: e.typography.fonts.mono, fontSize: e.typography.size.s1, boxSizing: "content-box", "& code": { padding: "0 !important" } })), Tx = _(ve)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 }), Ox = () => o.createElement("span", null, "-"), u0 = ({ text: e, simple: t }) => o.createElement(Sx, { simple: t }, e), Rx = Nt(1e3)((e) => {
  let t = e.split(/\r?\n/);
  return `${Math.max(...t.map((r) => r.length))}ch`;
}), Fx = (e) => {
  if (!e)
    return [e];
  let t = e.split("|").map((r) => r.trim());
  return Mv(t);
}, ns = (e, t = !0) => {
  let r = e;
  return t || (r = e.slice(0, co)), r.map((n) => o.createElement(u0, { key: n, text: n === "" ? '""' : n }));
}, $x = ({ value: e, initialExpandedArgs: t }) => {
  let { summary: r, detail: n } = e, [a, l] = b.useState(!1), [i, u] = b.useState(t || !1);
  if (r == null)
    return null;
  let s = typeof r.toString == "function" ? r.toString() : r;
  if (n == null) {
    if (/[(){}[\]<>]/.test(s))
      return o.createElement(u0, { text: s });
    let c = Fx(s), d = c.length;
    return d > co ? o.createElement(rs, { isExpanded: i }, ns(c, i), o.createElement(Cx, { onClick: () => u(!i) }, i ? "Show less..." : `Show ${d - co} more...`)) : o.createElement(rs, null, ns(c));
  }
  return o.createElement(mc, { closeOnOutsideClick: !0, placement: "bottom", visible: a, onVisibleChange: (c) => {
    l(c);
  }, tooltip: o.createElement(_x, { width: Rx(n) }, o.createElement(Hn, { language: "jsx", format: !1 }, n)) }, o.createElement(kx, { className: "sbdocs-expandable" }, o.createElement("span", null, s), o.createElement(Tx, { icon: a ? "arrowup" : "arrowdown" })));
}, Da = ({ value: e, initialExpandedArgs: t }) => e == null ? o.createElement(Ox, null) : o.createElement($x, { value: e, initialExpandedArgs: t }), Dx = _.label(({ theme: e }) => ({ lineHeight: "18px", alignItems: "center", marginBottom: 8, display: "inline-block", position: "relative", whiteSpace: "nowrap", background: e.boolean.background, borderRadius: "3em", padding: 1, input: { appearance: "none", width: "100%", height: "100%", position: "absolute", left: 0, top: 0, margin: 0, padding: 0, border: "none", background: "transparent", cursor: "pointer", borderRadius: "3em", "&:focus": { outline: "none", boxShadow: `${e.color.secondary} 0 0 0 1px inset !important` } }, span: { textAlign: "center", fontSize: e.typography.size.s1, fontWeight: e.typography.weight.bold, lineHeight: "1", cursor: "pointer", display: "inline-block", padding: "7px 15px", transition: "all 100ms ease-out", userSelect: "none", borderRadius: "3em", color: te(0.5, e.color.defaultText), background: "transparent", "&:hover": { boxShadow: `${Jr(0.3, e.appBorderColor)} 0 0 0 1px inset` }, "&:active": { boxShadow: `${Jr(0.05, e.appBorderColor)} 0 0 0 2px inset`, color: Jr(1, e.appBorderColor) }, "&:first-of-type": { paddingRight: 8 }, "&:last-of-type": { paddingLeft: 8 } }, "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type": { background: e.boolean.selectedBackground, boxShadow: e.base === "light" ? `${Jr(0.1, e.appBorderColor)} 0 0 2px` : `${e.appBorderColor} 0 0 0 1px`, color: e.color.defaultText, padding: "7px 15px" } })), Lx = (e) => e === "true", Mx = ({ name: e, value: t, onChange: r, onBlur: n, onFocus: a }) => {
  let l = b.useCallback(() => r(!1), [r]);
  if (t === void 0)
    return o.createElement(Ne.Button, { id: _n(e), onClick: l }, "Set boolean");
  let i = He(e), u = typeof t == "string" ? Lx(t) : t;
  return o.createElement(Dx, { htmlFor: i, title: u ? "Change to false" : "Change to true" }, o.createElement("input", { id: i, type: "checkbox", onChange: (s) => r(s.target.checked), checked: u, name: e, onBlur: n, onFocus: a }), o.createElement("span", null, "False"), o.createElement("span", null, "True"));
}, Bx = (e) => {
  let [t, r, n] = e.split("-"), a = /* @__PURE__ */ new Date();
  return a.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(n, 10)), a;
}, Ix = (e) => {
  let [t, r] = e.split(":"), n = /* @__PURE__ */ new Date();
  return n.setHours(parseInt(t, 10)), n.setMinutes(parseInt(r, 10)), n;
}, Px = (e) => {
  let t = new Date(e), r = `000${t.getFullYear()}`.slice(-4), n = `0${t.getMonth() + 1}`.slice(-2), a = `0${t.getDate()}`.slice(-2);
  return `${r}-${n}-${a}`;
}, jx = (e) => {
  let t = new Date(e), r = `0${t.getHours()}`.slice(-2), n = `0${t.getMinutes()}`.slice(-2);
  return `${r}:${n}`;
}, Nx = _.div(({ theme: e }) => ({ flex: 1, display: "flex", input: { marginLeft: 10, flex: 1, height: 32, "&::-webkit-calendar-picker-indicator": { opacity: 0.5, height: 12, filter: e.base === "light" ? void 0 : "invert(1)" } }, "input:first-of-type": { marginLeft: 0, flexGrow: 4 }, "input:last-of-type": { flexGrow: 3 } })), Hx = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: a }) => {
  let [l, i] = b.useState(!0), u = b.useRef(), s = b.useRef();
  b.useEffect(() => {
    l !== !1 && (u && u.current && (u.current.value = Px(t)), s && s.current && (s.current.value = jx(t)));
  }, [t]);
  let c = (f) => {
    let p = Bx(f.target.value), h = new Date(t);
    h.setFullYear(p.getFullYear(), p.getMonth(), p.getDate());
    let g = h.getTime();
    g && r(g), i(!!g);
  }, d = (f) => {
    let p = Ix(f.target.value), h = new Date(t);
    h.setHours(p.getHours()), h.setMinutes(p.getMinutes());
    let g = h.getTime();
    g && r(g), i(!!g);
  }, m = He(e);
  return o.createElement(Nx, null, o.createElement(Ne.Input, { type: "date", max: "9999-12-31", ref: u, id: `${m}-date`, name: `${m}-date`, onChange: c, onFocus: n, onBlur: a }), o.createElement(Ne.Input, { type: "time", id: `${m}-time`, name: `${m}-time`, ref: s, onChange: d, onFocus: n, onBlur: a }), l ? null : o.createElement("div", null, "invalid"));
}, Zx = _.label({ display: "flex" }), Vx = (e) => {
  let t = parseFloat(e);
  return Number.isNaN(t) ? void 0 : t;
}, zx = ({ name: e, value: t, onChange: r, min: n, max: a, step: l, onBlur: i, onFocus: u }) => {
  let [s, c] = b.useState(typeof t == "number" ? t : ""), [d, m] = b.useState(!1), [f, p] = b.useState(null), h = b.useCallback((y) => {
    c(y.target.value);
    let w = parseFloat(y.target.value);
    Number.isNaN(w) ? p(new Error(`'${y.target.value}' is not a number`)) : (r(w), p(null));
  }, [r, p]), g = b.useCallback(() => {
    c("0"), r(0), m(!0);
  }, [m]), x = b.useRef(null);
  return b.useEffect(() => {
    d && x.current && x.current.select();
  }, [d]), b.useEffect(() => {
    s !== (typeof t == "number" ? t : "") && c(t);
  }, [t]), !d && t === void 0 ? o.createElement(Ne.Button, { id: _n(e), onClick: g }, "Set number") : o.createElement(Zx, null, o.createElement(Ne.Input, { ref: x, id: He(e), type: "number", onChange: h, size: "flex", placeholder: "Edit number...", value: s, valid: f ? "error" : null, autoFocus: d, name: e, min: n, max: a, step: l, onFocus: u, onBlur: i }));
}, c0 = (e, t) => {
  let r = t && Object.entries(t).find(([n, a]) => a === e);
  return r ? r[0] : void 0;
}, po = (e, t) => e && t ? Object.entries(t).filter((r) => e.includes(r[1])).map((r) => r[0]) : [], d0 = (e, t) => e && t && e.map((r) => t[r]), qx = _.div(({ isInline: e }) => e ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } }), Ux = _.span({}), Wx = _.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } }), as = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
  if (!t)
    return ml.warn(`Checkbox with no options: ${e}`), o.createElement(o.Fragment, null, "-");
  let l = po(r, t), [i, u] = b.useState(l), s = (d) => {
    let m = d.target.value, f = [...i];
    f.includes(m) ? f.splice(f.indexOf(m), 1) : f.push(m), n(d0(f, t)), u(f);
  };
  b.useEffect(() => {
    u(po(r, t));
  }, [r]);
  let c = He(e);
  return o.createElement(qx, { isInline: a }, Object.keys(t).map((d, m) => {
    let f = `${c}-${m}`;
    return o.createElement(Wx, { key: f, htmlFor: f }, o.createElement("input", { type: "checkbox", id: f, name: f, value: d, onChange: s, checked: i == null ? void 0 : i.includes(d) }), o.createElement(Ux, null, d));
  }));
}, Gx = _.div(({ isInline: e }) => e ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } }), Yx = _.span({}), Kx = _.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } }), os = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
  if (!t)
    return ml.warn(`Radio with no options: ${e}`), o.createElement(o.Fragment, null, "-");
  let l = c0(r, t), i = He(e);
  return o.createElement(Gx, { isInline: a }, Object.keys(t).map((u, s) => {
    let c = `${i}-${s}`;
    return o.createElement(Kx, { key: c, htmlFor: c }, o.createElement("input", { type: "radio", id: c, name: c, value: u, onChange: (d) => n(t[d.currentTarget.value]), checked: u === l }), o.createElement(Yx, null, u));
  }));
}, Xx = { appearance: "none", border: "0 none", boxSizing: "inherit", display: " block", margin: " 0", background: "transparent", padding: 0, fontSize: "inherit", position: "relative" }, p0 = _.select(({ theme: e }) => ({ ...Xx, boxSizing: "border-box", position: "relative", padding: "6px 10px", width: "100%", color: e.input.color || "inherit", background: e.input.background, borderRadius: e.input.borderRadius, boxShadow: `${e.input.border} 0 0 0 1px inset`, fontSize: e.typography.size.s2 - 1, lineHeight: "20px", "&:focus": { boxShadow: `${e.color.secondary} 0 0 0 1px inset`, outline: "none" }, "&[disabled]": { cursor: "not-allowed", opacity: 0.5 }, "::placeholder": { color: e.textMutedColor }, "&[multiple]": { overflow: "auto", padding: 0, option: { display: "block", padding: "6px 10px", marginLeft: 1, marginRight: 1 } } })), f0 = _.span(({ theme: e }) => ({ display: "inline-block", lineHeight: "normal", overflow: "hidden", position: "relative", verticalAlign: "top", width: "100%", svg: { position: "absolute", zIndex: 1, pointerEvents: "none", height: "12px", marginTop: "-6px", right: "12px", top: "50%", fill: e.textMutedColor, path: { fill: e.textMutedColor } } })), ls = "Choose option...", Jx = ({ name: e, value: t, options: r, onChange: n }) => {
  let a = (u) => {
    n(r[u.currentTarget.value]);
  }, l = c0(t, r) || ls, i = He(e);
  return o.createElement(f0, null, o.createElement(ve, { icon: "arrowdown" }), o.createElement(p0, { id: i, value: l, onChange: a }, o.createElement("option", { key: "no-selection", disabled: !0 }, ls), Object.keys(r).map((u) => o.createElement("option", { key: u, value: u }, u))));
}, Qx = ({ name: e, value: t, options: r, onChange: n }) => {
  let a = (u) => {
    let s = Array.from(u.currentTarget.options).filter((c) => c.selected).map((c) => c.value);
    n(d0(s, r));
  }, l = po(t, r), i = He(e);
  return o.createElement(f0, null, o.createElement(p0, { id: i, multiple: !0, value: l, onChange: a }, Object.keys(r).map((u) => o.createElement("option", { key: u, value: u }, u))));
}, is = (e) => {
  let { name: t, options: r } = e;
  return r ? e.isMulti ? o.createElement(Qx, { ...e }) : o.createElement(Jx, { ...e }) : (ml.warn(`Select with no options: ${t}`), o.createElement(o.Fragment, null, "-"));
}, e8 = (e, t) => Array.isArray(e) ? e.reduce((r, n) => (r[(t == null ? void 0 : t[n]) || String(n)] = n, r), {}) : e, t8 = { check: as, "inline-check": as, radio: os, "inline-radio": os, select: is, "multi-select": is }, Wt = (e) => {
  let { type: t = "select", labels: r, argType: n } = e, a = { ...e, options: n ? e8(n.options, r) : {}, isInline: t.includes("inline"), isMulti: t.includes("multi") }, l = t8[t];
  if (l)
    return o.createElement(l, { ...a });
  throw new Error(`Unknown options type: ${t}`);
}, yl = "value", r8 = "key", n8 = "Error", a8 = "Object", o8 = "Array", l8 = "String", i8 = "Number", s8 = "Boolean", u8 = "Date", c8 = "Null", d8 = "Undefined", p8 = "Function", f8 = "Symbol", m0 = "ADD_DELTA_TYPE", g0 = "REMOVE_DELTA_TYPE", h0 = "UPDATE_DELTA_TYPE";
function Et(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && typeof e[Symbol.iterator] == "function" ? "Iterable" : Object.prototype.toString.call(e).slice(8, -1);
}
function b0(e, t) {
  let r = Et(e), n = Et(t);
  return (r === "Function" || n === "Function") && n !== r;
}
var vl = class extends b.Component {
  constructor(e) {
    super(e), this.state = { inputRefKey: null, inputRefValue: null }, this.refInputValue = this.refInputValue.bind(this), this.refInputKey = this.refInputKey.bind(this), this.onKeydown = this.onKeydown.bind(this), this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    let { inputRefKey: e, inputRefValue: t } = this.state, { onlyValue: r } = this.props;
    e && typeof e.focus == "function" && e.focus(), r && t && typeof t.focus == "function" && t.focus(), document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(e) {
    e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.repeat || ((e.code === "Enter" || e.key === "Enter") && (e.preventDefault(), this.onSubmit()), (e.code === "Escape" || e.key === "Escape") && (e.preventDefault(), this.props.handleCancel()));
  }
  onSubmit() {
    let { handleAdd: e, onlyValue: t, onSubmitValueParser: r, keyPath: n, deep: a } = this.props, { inputRefKey: l, inputRefValue: i } = this.state, u = {};
    if (!t) {
      if (!l.value)
        return;
      u.key = l.value;
    }
    u.newValue = r(!1, n, a, u.key, i.value), e(u);
  }
  refInputKey(e) {
    this.state.inputRefKey = e;
  }
  refInputValue(e) {
    this.state.inputRefValue = e;
  }
  render() {
    let { handleCancel: e, onlyValue: t, addButtonElement: r, cancelButtonElement: n, inputElementGenerator: a, keyPath: l, deep: i } = this.props, u = b.cloneElement(r, { onClick: this.onSubmit }), s = b.cloneElement(n, { onClick: e }), c = a(yl, l, i), d = b.cloneElement(c, { placeholder: "Value", ref: this.refInputValue }), m = null;
    if (!t) {
      let f = a(r8, l, i);
      m = b.cloneElement(f, { placeholder: "Key", ref: this.refInputKey });
    }
    return o.createElement("span", { className: "rejt-add-value-node" }, m, d, s, u);
  }
};
vl.defaultProps = { onlyValue: !1, addButtonElement: o.createElement("button", null, "+"), cancelButtonElement: o.createElement("button", null, "c") };
var y0 = class extends b.Component {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    this.state = { data: e.data, name: e.name, keyPath: t, deep: e.deep, nextDeep: e.deep + 1, collapsed: e.isCollapsed(t, e.deep, e.data), addFormVisible: !1 }, this.handleCollapseMode = this.handleCollapseMode.bind(this), this.handleRemoveItem = this.handleRemoveItem.bind(this), this.handleAddMode = this.handleAddMode.bind(this), this.handleAddValueAdd = this.handleAddValueAdd.bind(this), this.handleAddValueCancel = this.handleAddValueCancel.bind(this), this.handleEditValue = this.handleEditValue.bind(this), this.onChildUpdate = this.onChildUpdate.bind(this), this.renderCollapsed = this.renderCollapsed.bind(this), this.renderNotCollapsed = this.renderNotCollapsed.bind(this);
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  onChildUpdate(e, t) {
    let { data: r, keyPath: n } = this.state;
    r[e] = t, this.setState({ data: r });
    let { onUpdate: a } = this.props, l = n.length;
    a(n[l - 1], r);
  }
  handleAddMode() {
    this.setState({ addFormVisible: !0 });
  }
  handleCollapseMode() {
    this.setState((e) => ({ collapsed: !e.collapsed }));
  }
  handleRemoveItem(e) {
    return () => {
      let { beforeRemoveAction: t, logger: r } = this.props, { data: n, keyPath: a, nextDeep: l } = this.state, i = n[e];
      t(e, a, l, i).then(() => {
        let u = { keyPath: a, deep: l, key: e, oldValue: i, type: g0 };
        n.splice(e, 1), this.setState({ data: n });
        let { onUpdate: s, onDeltaUpdate: c } = this.props;
        s(a[a.length - 1], n), c(u);
      }).catch(r.error);
    };
  }
  handleAddValueAdd({ newValue: e }) {
    let { data: t, keyPath: r, nextDeep: n } = this.state, { beforeAddAction: a, logger: l } = this.props;
    a(t.length, r, n, e).then(() => {
      let i = [...t, e];
      this.setState({ data: i }), this.handleAddValueCancel();
      let { onUpdate: u, onDeltaUpdate: s } = this.props;
      u(r[r.length - 1], i), s({ type: m0, keyPath: r, deep: n, key: i.length - 1, newValue: e });
    }).catch(l.error);
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 });
  }
  handleEditValue({ key: e, value: t }) {
    return new Promise((r, n) => {
      let { beforeUpdateAction: a } = this.props, { data: l, keyPath: i, nextDeep: u } = this.state, s = l[e];
      a(e, i, u, s, t).then(() => {
        l[e] = t, this.setState({ data: l });
        let { onUpdate: c, onDeltaUpdate: d } = this.props;
        c(i[i.length - 1], l), d({ type: h0, keyPath: i, deep: u, key: e, newValue: t, oldValue: s }), r(void 0);
      }).catch(n);
    });
  }
  renderCollapsed() {
    let { name: e, data: t, keyPath: r, deep: n } = this.state, { handleRemove: a, readOnly: l, getStyle: i, dataType: u, minusMenuElement: s } = this.props, { minus: c, collapsed: d } = i(e, t, r, n, u), m = l(e, t, r, n, u), f = b.cloneElement(s, { onClick: a, className: "rejt-minus-menu", style: c });
    return o.createElement("span", { className: "rejt-collapsed" }, o.createElement("span", { className: "rejt-collapsed-text", style: d, onClick: this.handleCollapseMode }, "[...] ", t.length, " ", t.length === 1 ? "item" : "items"), !m && f);
  }
  renderNotCollapsed() {
    let { name: e, data: t, keyPath: r, deep: n, addFormVisible: a, nextDeep: l } = this.state, { isCollapsed: i, handleRemove: u, onDeltaUpdate: s, readOnly: c, getStyle: d, dataType: m, addButtonElement: f, cancelButtonElement: p, editButtonElement: h, inputElementGenerator: g, textareaElementGenerator: x, minusMenuElement: y, plusMenuElement: w, beforeRemoveAction: v, beforeAddAction: E, beforeUpdateAction: A, logger: S, onSubmitValueParser: k } = this.props, { minus: C, plus: T, delimiter: O, ul: R, addForm: $ } = d(e, t, r, n, m), F = c(e, t, r, n, m), P = b.cloneElement(w, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: T }), D = b.cloneElement(y, { onClick: u, className: "rejt-minus-menu", style: C }), L = !0, j = "[", V = "]";
    return o.createElement("span", { className: "rejt-not-collapsed" }, o.createElement("span", { className: "rejt-not-collapsed-delimiter", style: O }, j), !a && P, o.createElement("ul", { className: "rejt-not-collapsed-list", style: R }, t.map((B, H) => o.createElement(Qn, { key: H, name: H.toString(), data: B, keyPath: r, deep: l, isCollapsed: i, handleRemove: this.handleRemoveItem(H), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate: s, readOnly: c, getStyle: d, addButtonElement: f, cancelButtonElement: p, editButtonElement: h, inputElementGenerator: g, textareaElementGenerator: x, minusMenuElement: y, plusMenuElement: w, beforeRemoveAction: v, beforeAddAction: E, beforeUpdateAction: A, logger: S, onSubmitValueParser: k }))), !F && a && o.createElement("div", { className: "rejt-add-form", style: $ }, o.createElement(vl, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, onlyValue: L, addButtonElement: f, cancelButtonElement: p, inputElementGenerator: g, keyPath: r, deep: n, onSubmitValueParser: k })), o.createElement("span", { className: "rejt-not-collapsed-delimiter", style: O }, V), !F && D);
  }
  render() {
    let { name: e, collapsed: t, data: r, keyPath: n, deep: a } = this.state, { dataType: l, getStyle: i } = this.props, u = t ? this.renderCollapsed() : this.renderNotCollapsed(), s = i(e, r, n, a, l);
    return o.createElement("div", { className: "rejt-array-node" }, o.createElement("span", { onClick: this.handleCollapseMode }, o.createElement("span", { className: "rejt-name", style: s.name }, e, " :", " ")), u);
  }
};
y0.defaultProps = { keyPath: [], deep: 0, minusMenuElement: o.createElement("span", null, " - "), plusMenuElement: o.createElement("span", null, " + ") };
var v0 = class extends b.Component {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    this.state = { value: e.value, name: e.name, keyPath: t, deep: e.deep, editEnabled: !1, inputRef: null }, this.handleEditMode = this.handleEditMode.bind(this), this.refInput = this.refInput.bind(this), this.handleCancelEdit = this.handleCancelEdit.bind(this), this.handleEdit = this.handleEdit.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  static getDerivedStateFromProps(e, t) {
    return e.value !== t.value ? { value: e.value } : null;
  }
  componentDidUpdate() {
    let { editEnabled: e, inputRef: t, name: r, value: n, keyPath: a, deep: l } = this.state, { readOnly: i, dataType: u } = this.props, s = i(r, n, a, l, u);
    e && !s && typeof t.focus == "function" && t.focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(e) {
    e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.repeat || ((e.code === "Enter" || e.key === "Enter") && (e.preventDefault(), this.handleEdit()), (e.code === "Escape" || e.key === "Escape") && (e.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let { handleUpdateValue: e, originalValue: t, logger: r, onSubmitValueParser: n, keyPath: a } = this.props, { inputRef: l, name: i, deep: u } = this.state;
    if (!l)
      return;
    let s = n(!0, a, u, i, l.value);
    e({ value: s, key: i }).then(() => {
      b0(t, s) || this.handleCancelEdit();
    }).catch(r.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: !0 });
  }
  refInput(e) {
    this.state.inputRef = e;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: !1 });
  }
  render() {
    let { name: e, value: t, editEnabled: r, keyPath: n, deep: a } = this.state, { handleRemove: l, originalValue: i, readOnly: u, dataType: s, getStyle: c, editButtonElement: d, cancelButtonElement: m, textareaElementGenerator: f, minusMenuElement: p, keyPath: h } = this.props, g = c(e, i, n, a, s), x = null, y = null, w = u(e, i, n, a, s);
    if (r && !w) {
      let v = f(yl, h, a, e, i, s), E = b.cloneElement(d, { onClick: this.handleEdit }), A = b.cloneElement(m, { onClick: this.handleCancelEdit }), S = b.cloneElement(v, { ref: this.refInput, defaultValue: i });
      x = o.createElement("span", { className: "rejt-edit-form", style: g.editForm }, S, " ", A, E), y = null;
    } else {
      x = o.createElement("span", { className: "rejt-value", style: g.value, onClick: w ? null : this.handleEditMode }, t);
      let v = b.cloneElement(p, { onClick: l, className: "rejt-minus-menu", style: g.minus });
      y = w ? null : v;
    }
    return o.createElement("li", { className: "rejt-function-value-node", style: g.li }, o.createElement("span", { className: "rejt-name", style: g.name }, e, " :", " "), x, y);
  }
};
v0.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => {
}, editButtonElement: o.createElement("button", null, "e"), cancelButtonElement: o.createElement("button", null, "c"), minusMenuElement: o.createElement("span", null, " - ") };
var Qn = class extends b.Component {
  constructor(e) {
    super(e), this.state = { data: e.data, name: e.name, keyPath: e.keyPath, deep: e.deep };
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  render() {
    let { data: e, name: t, keyPath: r, deep: n } = this.state, { isCollapsed: a, handleRemove: l, handleUpdateValue: i, onUpdate: u, onDeltaUpdate: s, readOnly: c, getStyle: d, addButtonElement: m, cancelButtonElement: f, editButtonElement: p, inputElementGenerator: h, textareaElementGenerator: g, minusMenuElement: x, plusMenuElement: y, beforeRemoveAction: w, beforeAddAction: v, beforeUpdateAction: E, logger: A, onSubmitValueParser: S } = this.props, k = () => !0, C = Et(e);
    switch (C) {
      case n8:
        return o.createElement(fo, { data: e, name: t, isCollapsed: a, keyPath: r, deep: n, handleRemove: l, onUpdate: u, onDeltaUpdate: s, readOnly: k, dataType: C, getStyle: d, addButtonElement: m, cancelButtonElement: f, editButtonElement: p, inputElementGenerator: h, textareaElementGenerator: g, minusMenuElement: x, plusMenuElement: y, beforeRemoveAction: w, beforeAddAction: v, beforeUpdateAction: E, logger: A, onSubmitValueParser: S });
      case a8:
        return o.createElement(fo, { data: e, name: t, isCollapsed: a, keyPath: r, deep: n, handleRemove: l, onUpdate: u, onDeltaUpdate: s, readOnly: c, dataType: C, getStyle: d, addButtonElement: m, cancelButtonElement: f, editButtonElement: p, inputElementGenerator: h, textareaElementGenerator: g, minusMenuElement: x, plusMenuElement: y, beforeRemoveAction: w, beforeAddAction: v, beforeUpdateAction: E, logger: A, onSubmitValueParser: S });
      case o8:
        return o.createElement(y0, { data: e, name: t, isCollapsed: a, keyPath: r, deep: n, handleRemove: l, onUpdate: u, onDeltaUpdate: s, readOnly: c, dataType: C, getStyle: d, addButtonElement: m, cancelButtonElement: f, editButtonElement: p, inputElementGenerator: h, textareaElementGenerator: g, minusMenuElement: x, plusMenuElement: y, beforeRemoveAction: w, beforeAddAction: v, beforeUpdateAction: E, logger: A, onSubmitValueParser: S });
      case l8:
        return o.createElement(yt, { name: t, value: `"${e}"`, originalValue: e, keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: c, dataType: C, getStyle: d, cancelButtonElement: f, editButtonElement: p, inputElementGenerator: h, minusMenuElement: x, logger: A, onSubmitValueParser: S });
      case i8:
        return o.createElement(yt, { name: t, value: e, originalValue: e, keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: c, dataType: C, getStyle: d, cancelButtonElement: f, editButtonElement: p, inputElementGenerator: h, minusMenuElement: x, logger: A, onSubmitValueParser: S });
      case s8:
        return o.createElement(yt, { name: t, value: e ? "true" : "false", originalValue: e, keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: c, dataType: C, getStyle: d, cancelButtonElement: f, editButtonElement: p, inputElementGenerator: h, minusMenuElement: x, logger: A, onSubmitValueParser: S });
      case u8:
        return o.createElement(yt, { name: t, value: e.toISOString(), originalValue: e, keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: k, dataType: C, getStyle: d, cancelButtonElement: f, editButtonElement: p, inputElementGenerator: h, minusMenuElement: x, logger: A, onSubmitValueParser: S });
      case c8:
        return o.createElement(yt, { name: t, value: "null", originalValue: "null", keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: c, dataType: C, getStyle: d, cancelButtonElement: f, editButtonElement: p, inputElementGenerator: h, minusMenuElement: x, logger: A, onSubmitValueParser: S });
      case d8:
        return o.createElement(yt, { name: t, value: "undefined", originalValue: "undefined", keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: c, dataType: C, getStyle: d, cancelButtonElement: f, editButtonElement: p, inputElementGenerator: h, minusMenuElement: x, logger: A, onSubmitValueParser: S });
      case p8:
        return o.createElement(v0, { name: t, value: e.toString(), originalValue: e, keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: c, dataType: C, getStyle: d, cancelButtonElement: f, editButtonElement: p, textareaElementGenerator: g, minusMenuElement: x, logger: A, onSubmitValueParser: S });
      case f8:
        return o.createElement(yt, { name: t, value: e.toString(), originalValue: e, keyPath: r, deep: n, handleRemove: l, handleUpdateValue: i, readOnly: k, dataType: C, getStyle: d, cancelButtonElement: f, editButtonElement: p, inputElementGenerator: h, minusMenuElement: x, logger: A, onSubmitValueParser: S });
      default:
        return null;
    }
  }
};
Qn.defaultProps = { keyPath: [], deep: 0 };
var fo = class extends b.Component {
  constructor(e) {
    super(e);
    let t = e.deep === -1 ? [] : [...e.keyPath, e.name];
    this.state = { name: e.name, data: e.data, keyPath: t, deep: e.deep, nextDeep: e.deep + 1, collapsed: e.isCollapsed(t, e.deep, e.data), addFormVisible: !1 }, this.handleCollapseMode = this.handleCollapseMode.bind(this), this.handleRemoveValue = this.handleRemoveValue.bind(this), this.handleAddMode = this.handleAddMode.bind(this), this.handleAddValueAdd = this.handleAddValueAdd.bind(this), this.handleAddValueCancel = this.handleAddValueCancel.bind(this), this.handleEditValue = this.handleEditValue.bind(this), this.onChildUpdate = this.onChildUpdate.bind(this), this.renderCollapsed = this.renderCollapsed.bind(this), this.renderNotCollapsed = this.renderNotCollapsed.bind(this);
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  onChildUpdate(e, t) {
    let { data: r, keyPath: n } = this.state;
    r[e] = t, this.setState({ data: r });
    let { onUpdate: a } = this.props, l = n.length;
    a(n[l - 1], r);
  }
  handleAddMode() {
    this.setState({ addFormVisible: !0 });
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 });
  }
  handleAddValueAdd({ key: e, newValue: t }) {
    let { data: r, keyPath: n, nextDeep: a } = this.state, { beforeAddAction: l, logger: i } = this.props;
    l(e, n, a, t).then(() => {
      r[e] = t, this.setState({ data: r }), this.handleAddValueCancel();
      let { onUpdate: u, onDeltaUpdate: s } = this.props;
      u(n[n.length - 1], r), s({ type: m0, keyPath: n, deep: a, key: e, newValue: t });
    }).catch(i.error);
  }
  handleRemoveValue(e) {
    return () => {
      let { beforeRemoveAction: t, logger: r } = this.props, { data: n, keyPath: a, nextDeep: l } = this.state, i = n[e];
      t(e, a, l, i).then(() => {
        let u = { keyPath: a, deep: l, key: e, oldValue: i, type: g0 };
        delete n[e], this.setState({ data: n });
        let { onUpdate: s, onDeltaUpdate: c } = this.props;
        s(a[a.length - 1], n), c(u);
      }).catch(r.error);
    };
  }
  handleCollapseMode() {
    this.setState((e) => ({ collapsed: !e.collapsed }));
  }
  handleEditValue({ key: e, value: t }) {
    return new Promise((r, n) => {
      let { beforeUpdateAction: a } = this.props, { data: l, keyPath: i, nextDeep: u } = this.state, s = l[e];
      a(e, i, u, s, t).then(() => {
        l[e] = t, this.setState({ data: l });
        let { onUpdate: c, onDeltaUpdate: d } = this.props;
        c(i[i.length - 1], l), d({ type: h0, keyPath: i, deep: u, key: e, newValue: t, oldValue: s }), r();
      }).catch(n);
    });
  }
  renderCollapsed() {
    let { name: e, keyPath: t, deep: r, data: n } = this.state, { handleRemove: a, readOnly: l, dataType: i, getStyle: u, minusMenuElement: s } = this.props, { minus: c, collapsed: d } = u(e, n, t, r, i), m = Object.getOwnPropertyNames(n), f = l(e, n, t, r, i), p = b.cloneElement(s, { onClick: a, className: "rejt-minus-menu", style: c });
    return o.createElement("span", { className: "rejt-collapsed" }, o.createElement("span", { className: "rejt-collapsed-text", style: d, onClick: this.handleCollapseMode }, "{...}", " ", m.length, " ", m.length === 1 ? "key" : "keys"), !f && p);
  }
  renderNotCollapsed() {
    let { name: e, data: t, keyPath: r, deep: n, nextDeep: a, addFormVisible: l } = this.state, { isCollapsed: i, handleRemove: u, onDeltaUpdate: s, readOnly: c, getStyle: d, dataType: m, addButtonElement: f, cancelButtonElement: p, editButtonElement: h, inputElementGenerator: g, textareaElementGenerator: x, minusMenuElement: y, plusMenuElement: w, beforeRemoveAction: v, beforeAddAction: E, beforeUpdateAction: A, logger: S, onSubmitValueParser: k } = this.props, { minus: C, plus: T, addForm: O, ul: R, delimiter: $ } = d(e, t, r, n, m), F = Object.getOwnPropertyNames(t), P = c(e, t, r, n, m), D = b.cloneElement(w, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: T }), L = b.cloneElement(y, { onClick: u, className: "rejt-minus-menu", style: C }), j = F.map((H) => o.createElement(Qn, { key: H, name: H, data: t[H], keyPath: r, deep: a, isCollapsed: i, handleRemove: this.handleRemoveValue(H), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate: s, readOnly: c, getStyle: d, addButtonElement: f, cancelButtonElement: p, editButtonElement: h, inputElementGenerator: g, textareaElementGenerator: x, minusMenuElement: y, plusMenuElement: w, beforeRemoveAction: v, beforeAddAction: E, beforeUpdateAction: A, logger: S, onSubmitValueParser: k })), V = "{", B = "}";
    return o.createElement("span", { className: "rejt-not-collapsed" }, o.createElement("span", { className: "rejt-not-collapsed-delimiter", style: $ }, V), !P && D, o.createElement("ul", { className: "rejt-not-collapsed-list", style: R }, j), !P && l && o.createElement("div", { className: "rejt-add-form", style: O }, o.createElement(vl, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, addButtonElement: f, cancelButtonElement: p, inputElementGenerator: g, keyPath: r, deep: n, onSubmitValueParser: k })), o.createElement("span", { className: "rejt-not-collapsed-delimiter", style: $ }, B), !P && L);
  }
  render() {
    let { name: e, collapsed: t, data: r, keyPath: n, deep: a } = this.state, { getStyle: l, dataType: i } = this.props, u = t ? this.renderCollapsed() : this.renderNotCollapsed(), s = l(e, r, n, a, i);
    return o.createElement("div", { className: "rejt-object-node" }, o.createElement("span", { onClick: this.handleCollapseMode }, o.createElement("span", { className: "rejt-name", style: s.name }, e, " :", " ")), u);
  }
};
fo.defaultProps = { keyPath: [], deep: 0, minusMenuElement: o.createElement("span", null, " - "), plusMenuElement: o.createElement("span", null, " + ") };
var yt = class extends b.Component {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    this.state = { value: e.value, name: e.name, keyPath: t, deep: e.deep, editEnabled: !1, inputRef: null }, this.handleEditMode = this.handleEditMode.bind(this), this.refInput = this.refInput.bind(this), this.handleCancelEdit = this.handleCancelEdit.bind(this), this.handleEdit = this.handleEdit.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  static getDerivedStateFromProps(e, t) {
    return e.value !== t.value ? { value: e.value } : null;
  }
  componentDidUpdate() {
    let { editEnabled: e, inputRef: t, name: r, value: n, keyPath: a, deep: l } = this.state, { readOnly: i, dataType: u } = this.props, s = i(r, n, a, l, u);
    e && !s && typeof t.focus == "function" && t.focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(e) {
    e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.repeat || ((e.code === "Enter" || e.key === "Enter") && (e.preventDefault(), this.handleEdit()), (e.code === "Escape" || e.key === "Escape") && (e.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let { handleUpdateValue: e, originalValue: t, logger: r, onSubmitValueParser: n, keyPath: a } = this.props, { inputRef: l, name: i, deep: u } = this.state;
    if (!l)
      return;
    let s = n(!0, a, u, i, l.value);
    e({ value: s, key: i }).then(() => {
      b0(t, s) || this.handleCancelEdit();
    }).catch(r.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: !0 });
  }
  refInput(e) {
    this.state.inputRef = e;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: !1 });
  }
  render() {
    let { name: e, value: t, editEnabled: r, keyPath: n, deep: a } = this.state, { handleRemove: l, originalValue: i, readOnly: u, dataType: s, getStyle: c, editButtonElement: d, cancelButtonElement: m, inputElementGenerator: f, minusMenuElement: p, keyPath: h } = this.props, g = c(e, i, n, a, s), x = u(e, i, n, a, s), y = r && !x, w = f(yl, h, a, e, i, s), v = b.cloneElement(d, { onClick: this.handleEdit }), E = b.cloneElement(m, { onClick: this.handleCancelEdit }), A = b.cloneElement(w, { ref: this.refInput, defaultValue: JSON.stringify(i) }), S = b.cloneElement(p, { onClick: l, className: "rejt-minus-menu", style: g.minus });
    return o.createElement("li", { className: "rejt-value-node", style: g.li }, o.createElement("span", { className: "rejt-name", style: g.name }, e, " : "), y ? o.createElement("span", { className: "rejt-edit-form", style: g.editForm }, A, " ", E, v) : o.createElement("span", { className: "rejt-value", style: g.value, onClick: x ? null : this.handleEditMode }, String(t)), !x && !y && S);
  }
};
yt.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => Promise.resolve(), editButtonElement: o.createElement("button", null, "e"), cancelButtonElement: o.createElement("button", null, "c"), minusMenuElement: o.createElement("span", null, " - ") };
var m8 = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} }, g8 = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} }, h8 = { minus: { color: "red" }, editForm: {}, value: { color: "#7bba3d" }, li: { minHeight: "22px", lineHeight: "22px", outline: "0px" }, name: { color: "#2287CD" } };
function b8(e) {
  let t = e;
  if (t.indexOf("function") === 0)
    return (0, eval)(`(${t})`);
  try {
    t = JSON.parse(e);
  } catch {
  }
  return t;
}
var E0 = class extends b.Component {
  constructor(e) {
    super(e), this.state = { data: e.data, rootName: e.rootName }, this.onUpdate = this.onUpdate.bind(this), this.removeRoot = this.removeRoot.bind(this);
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data || e.rootName !== t.rootName ? { data: e.data, rootName: e.rootName } : null;
  }
  onUpdate(e, t) {
    this.setState({ data: t }), this.props.onFullyUpdate(t);
  }
  removeRoot() {
    this.onUpdate(null, null);
  }
  render() {
    let { data: e, rootName: t } = this.state, { isCollapsed: r, onDeltaUpdate: n, readOnly: a, getStyle: l, addButtonElement: i, cancelButtonElement: u, editButtonElement: s, inputElement: c, textareaElement: d, minusMenuElement: m, plusMenuElement: f, beforeRemoveAction: p, beforeAddAction: h, beforeUpdateAction: g, logger: x, onSubmitValueParser: y, fallback: w = null } = this.props, v = Et(e), E = a;
    Et(a) === "Boolean" && (E = () => a);
    let A = c;
    c && Et(c) !== "Function" && (A = () => c);
    let S = d;
    return d && Et(d) !== "Function" && (S = () => d), v === "Object" || v === "Array" ? o.createElement("div", { className: "rejt-tree" }, o.createElement(Qn, { data: e, name: t, deep: -1, isCollapsed: r, onUpdate: this.onUpdate, onDeltaUpdate: n, readOnly: E, getStyle: l, addButtonElement: i, cancelButtonElement: u, editButtonElement: s, inputElementGenerator: A, textareaElementGenerator: S, minusMenuElement: m, plusMenuElement: f, handleRemove: this.removeRoot, beforeRemoveAction: p, beforeAddAction: h, beforeUpdateAction: g, logger: x, onSubmitValueParser: y })) : w;
  }
};
E0.defaultProps = { rootName: "root", isCollapsed: (e, t) => t !== -1, getStyle: (e, t, r, n, a) => {
  switch (a) {
    case "Object":
    case "Error":
      return m8;
    case "Array":
      return g8;
    default:
      return h8;
  }
}, readOnly: () => !1, onFullyUpdate: () => {
}, onDeltaUpdate: () => {
}, beforeRemoveAction: () => Promise.resolve(), beforeAddAction: () => Promise.resolve(), beforeUpdateAction: () => Promise.resolve(), logger: { error: () => {
} }, onSubmitValueParser: (e, t, r, n, a) => b8(a), inputElement: () => o.createElement("input", null), textareaElement: () => o.createElement("textarea", null), fallback: null };
var { window: y8 } = $e, v8 = _.div(({ theme: e }) => ({ position: "relative", display: "flex", ".rejt-tree": { marginLeft: "1rem", fontSize: "13px" }, ".rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed": { "& > svg": { opacity: 0, transition: "opacity 0.2s" } }, ".rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed": { "& > svg": { opacity: 1 } }, ".rejt-edit-form button": { display: "none" }, ".rejt-add-form": { marginLeft: 10 }, ".rejt-add-value-node": { display: "inline-flex", alignItems: "center" }, ".rejt-name": { lineHeight: "22px" }, ".rejt-not-collapsed-delimiter": { lineHeight: "22px" }, ".rejt-plus-menu": { marginLeft: 5 }, ".rejt-object-node > span > *, .rejt-array-node > span > *": { position: "relative", zIndex: 2 }, ".rejt-object-node, .rejt-array-node": { position: "relative" }, ".rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before": { content: '""', position: "absolute", top: 0, display: "block", width: "100%", marginLeft: "-1rem", padding: "0 4px 0 1rem", height: 22 }, ".rejt-collapsed::before, .rejt-not-collapsed::before": { zIndex: 1, background: "transparent", borderRadius: 4, transition: "background 0.2s", pointerEvents: "none", opacity: 0.1 }, ".rejt-object-node:hover, .rejt-array-node:hover": { "& > .rejt-collapsed::before, & > .rejt-not-collapsed::before": { background: e.color.secondary } }, ".rejt-collapsed::after, .rejt-not-collapsed::after": { content: '""', position: "absolute", display: "inline-block", pointerEvents: "none", width: 0, height: 0 }, ".rejt-collapsed::after": { left: -8, top: 8, borderTop: "3px solid transparent", borderBottom: "3px solid transparent", borderLeft: "3px solid rgba(153,153,153,0.6)" }, ".rejt-not-collapsed::after": { left: -10, top: 10, borderTop: "3px solid rgba(153,153,153,0.6)", borderLeft: "3px solid transparent", borderRight: "3px solid transparent" }, ".rejt-value": { display: "inline-block", border: "1px solid transparent", borderRadius: 4, margin: "1px 0", padding: "0 4px", cursor: "text", color: e.color.defaultText }, ".rejt-value-node:hover > .rejt-value": { background: e.color.lighter, borderColor: e.appBorderColor } })), La = _.button(({ theme: e, primary: t }) => ({ border: 0, height: 20, margin: 1, borderRadius: 4, background: t ? e.color.secondary : "transparent", color: t ? e.color.lightest : e.color.dark, fontWeight: t ? "bold" : "normal", cursor: "pointer", order: t ? "initial" : 9 })), ss = _(ve)(({ theme: e, icon: t, disabled: r }) => ({ display: "inline-block", verticalAlign: "middle", width: 15, height: 15, padding: 3, marginLeft: 5, cursor: r ? "not-allowed" : "pointer", color: e.textMutedColor, "&:hover": r ? {} : { color: t === "subtract" ? e.color.negative : e.color.ancillary }, "svg + &": { marginLeft: 0 } })), us = _.input(({ theme: e, placeholder: t }) => ({ outline: 0, margin: t ? 1 : "1px 0", padding: "3px 4px", color: e.color.defaultText, background: e.background.app, border: `1px solid ${e.appBorderColor}`, borderRadius: 4, lineHeight: "14px", width: t === "Key" ? 80 : 120, "&:focus": { border: `1px solid ${e.color.secondary}` } })), E8 = _(Pt)(({ theme: e }) => ({ position: "absolute", zIndex: 2, top: 2, right: 2, height: 21, padding: "0 3px", background: e.background.bar, border: `1px solid ${e.appBorderColor}`, borderRadius: 3, color: e.textMutedColor, fontSize: "9px", fontWeight: "bold", textDecoration: "none", span: { marginLeft: 3, marginTop: 1 } })), x8 = _(Ne.Textarea)(({ theme: e }) => ({ flex: 1, padding: "7px 6px", fontFamily: e.typography.fonts.mono, fontSize: "12px", lineHeight: "18px", "&::placeholder": { fontFamily: e.typography.fonts.base, fontSize: "13px" }, "&:placeholder-shown": { padding: "7px 10px" } })), w8 = { bubbles: !0, cancelable: !0, key: "Enter", code: "Enter", keyCode: 13 }, A8 = (e) => {
  e.currentTarget.dispatchEvent(new y8.KeyboardEvent("keydown", w8));
}, S8 = (e) => {
  e.currentTarget.select();
}, C8 = (e) => () => ({ name: { color: e.color.secondary }, collapsed: { color: e.color.dark }, ul: { listStyle: "none", margin: "0 0 0 1rem", padding: 0 }, li: { outline: 0 } }), cs = ({ name: e, value: t, onChange: r }) => {
  let n = Q1(), a = b.useMemo(() => t && E4(t), [t]), l = a != null, [i, u] = b.useState(!l), [s, c] = b.useState(null), d = b.useCallback((x) => {
    try {
      x && r(JSON.parse(x)), c(void 0);
    } catch (y) {
      c(y);
    }
  }, [r]), [m, f] = b.useState(!1), p = b.useCallback(() => {
    r({}), f(!0);
  }, [f]), h = b.useRef(null);
  if (b.useEffect(() => {
    m && h.current && h.current.select();
  }, [m]), !l)
    return o.createElement(Ne.Button, { id: _n(e), onClick: p }, "Set object");
  let g = o.createElement(x8, { ref: h, id: He(e), name: e, defaultValue: t === null ? "" : JSON.stringify(t, null, 2), onBlur: (x) => d(x.target.value), placeholder: "Edit JSON string...", autoFocus: m, valid: s ? "error" : null });
  return o.createElement(v8, null, ["Object", "Array"].includes(Et(a)) && o.createElement(E8, { href: "#", onClick: (x) => {
    x.preventDefault(), u((y) => !y);
  } }, o.createElement(ve, { icon: i ? "eyeclose" : "eye" }), o.createElement("span", null, "RAW")), i ? g : o.createElement(E0, { data: a, rootName: e, onFullyUpdate: r, getStyle: C8(n), cancelButtonElement: o.createElement(La, { type: "button" }, "Cancel"), editButtonElement: o.createElement(La, { type: "submit" }, "Save"), addButtonElement: o.createElement(La, { type: "submit", primary: !0 }, "Save"), plusMenuElement: o.createElement(ss, { icon: "add" }), minusMenuElement: o.createElement(ss, { icon: "subtract" }), inputElement: (x, y, w, v) => v ? o.createElement(us, { onFocus: S8, onBlur: A8 }) : o.createElement(us, null), fallback: g }));
}, k8 = _.input(({ theme: e, min: t, max: r, value: n }) => ({ "&": { width: "100%", backgroundColor: "transparent", appearance: "none" }, "&::-webkit-slider-runnable-track": { background: e.base === "light" ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${Ke(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${Ke(0.02, e.input.background)} 100%)` : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${Ft(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${Ft(0.02, e.input.background)} 100%)`, boxShadow: `${e.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: "pointer" }, "&::-webkit-slider-thumb": { marginTop: "-6px", width: 16, height: 16, border: `1px solid ${dt(e.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${dt(e.appBorderColor, 0.2)}`, cursor: "grab", appearance: "none", background: `${e.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${Ke(0.05, e.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${e.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: "grabbing" } }, "&:focus": { outline: "none", "&::-webkit-slider-runnable-track": { borderColor: dt(e.color.secondary, 0.4) }, "&::-webkit-slider-thumb": { borderColor: e.color.secondary, boxShadow: `0 0px 5px 0px ${e.color.secondary}` } }, "&::-moz-range-track": { background: e.base === "light" ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${Ke(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${Ke(0.02, e.input.background)} 100%)` : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${Ft(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${Ft(0.02, e.input.background)} 100%)`, boxShadow: `${e.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: "pointer", outline: "none" }, "&::-moz-range-thumb": { width: 16, height: 16, border: `1px solid ${dt(e.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${dt(e.appBorderColor, 0.2)}`, cursor: "grab", background: `${e.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${Ke(0.05, e.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${e.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: "grabbing" } }, "&::-ms-track": { background: e.base === "light" ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${Ke(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${Ke(0.02, e.input.background)} 100%)` : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${Ft(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${Ft(0.02, e.input.background)} 100%)`, boxShadow: `${e.appBorderColor} 0 0 0 1px inset`, color: "transparent", width: "100%", height: "6px", cursor: "pointer" }, "&::-ms-fill-lower": { borderRadius: 6 }, "&::-ms-fill-upper": { borderRadius: 6 }, "&::-ms-thumb": { width: 16, height: 16, background: `${e.input.background}`, border: `1px solid ${dt(e.appBorderColor, 0.2)}`, borderRadius: 50, cursor: "grab", marginTop: 0 }, "@supports (-ms-ime-align:auto)": { "input[type=range]": { margin: "0" } } })), x0 = _.span({ paddingLeft: 5, paddingRight: 5, fontSize: 12, whiteSpace: "nowrap", fontFeatureSettings: "tnum", fontVariantNumeric: "tabular-nums" }), _8 = _(x0)(({ numberOFDecimalsPlaces: e, max: t }) => ({ width: `${e + t.toString().length * 2 + 3}ch`, textAlign: "right", flexShrink: 0 })), T8 = _.div({ display: "flex", alignItems: "center", width: "100%" });
function O8(e) {
  let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
}
var R8 = ({ name: e, value: t, onChange: r, min: n = 0, max: a = 100, step: l = 1, onBlur: i, onFocus: u }) => {
  let s = (m) => {
    r(Vx(m.target.value));
  }, c = t !== void 0, d = b.useMemo(() => O8(l), [l]);
  return o.createElement(T8, null, o.createElement(x0, null, n), o.createElement(k8, { id: He(e), type: "range", onChange: s, name: e, value: t, min: n, max: a, step: l, onFocus: u, onBlur: i }), o.createElement(_8, { numberOFDecimalsPlaces: d, max: a }, c ? t.toFixed(d) : "--", " / ", a));
}, F8 = _.label({ display: "flex" }), $8 = _.div(({ isMaxed: e }) => ({ marginLeft: "0.75rem", paddingTop: "0.35rem", color: e ? "red" : void 0 })), D8 = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: a, maxLength: l }) => {
  let i = (m) => {
    r(m.target.value);
  }, [u, s] = b.useState(!1), c = b.useCallback(() => {
    r(""), s(!0);
  }, [s]);
  if (t === void 0)
    return o.createElement(Ne.Button, { id: _n(e), onClick: c }, "Set string");
  let d = typeof t == "string";
  return o.createElement(F8, null, o.createElement(Ne.Textarea, { id: He(e), maxLength: l, onChange: i, size: "flex", placeholder: "Edit string...", autoFocus: u, valid: d ? null : "error", name: e, value: d ? t : "", onFocus: n, onBlur: a }), l && o.createElement($8, { isMaxed: (t == null ? void 0 : t.length) === l }, (t == null ? void 0 : t.length) ?? 0, " / ", l));
}, L8 = _(Ne.Input)({ padding: 10 });
function M8(e) {
  e.forEach((t) => {
    t.startsWith("blob:") && URL.revokeObjectURL(t);
  });
}
var B8 = ({ onChange: e, name: t, accept: r = "image/*", value: n }) => {
  let a = b.useRef(null);
  function l(i) {
    if (!i.target.files)
      return;
    let u = Array.from(i.target.files).map((s) => URL.createObjectURL(s));
    e(u), M8(n);
  }
  return b.useEffect(() => {
    n == null && a.current && (a.current.value = null);
  }, [n, t]), o.createElement(L8, { ref: a, id: He(t), type: "file", name: t, multiple: !0, onChange: l, accept: r, size: "flex" });
}, I8 = b.lazy(() => import("./Color-6VNJS4EI-6223fecc.js")), P8 = (e) => o.createElement(b.Suspense, { fallback: o.createElement("div", null) }, o.createElement(I8, { ...e })), j8 = { array: cs, object: cs, boolean: Mx, color: P8, date: Hx, number: zx, check: Wt, "inline-check": Wt, radio: Wt, "inline-radio": Wt, select: Wt, "multi-select": Wt, range: R8, text: D8, file: B8 }, ds = () => o.createElement(o.Fragment, null, "-"), N8 = ({ row: e, arg: t, updateArgs: r, isHovered: n }) => {
  let { key: a, control: l } = e, [i, u] = b.useState(!1), [s, c] = b.useState({ value: t });
  b.useEffect(() => {
    i || c({ value: t });
  }, [i, t]);
  let d = b.useCallback((g) => (c({ value: g }), r({ [a]: g }), g), [r, a]), m = b.useCallback(() => u(!1), []), f = b.useCallback(() => u(!0), []);
  if (!l || l.disable)
    return n ? o.createElement(Bt, { href: "https://storybook.js.org/docs/react/essentials/controls", target: "_blank", withArrow: !0 }, "Setup controls") : o.createElement(ds, null);
  let p = { name: a, argType: e, value: s.value, onChange: d, onBlur: m, onFocus: f }, h = j8[l.type] || ds;
  return o.createElement(h, { ...p, ...l, controlType: l.type });
}, H8 = _.span({ fontWeight: "bold" }), Z8 = _.span(({ theme: e }) => ({ color: e.color.negative, fontFamily: e.typography.fonts.mono, cursor: "help" })), V8 = _.div(({ theme: e }) => ({ "&&": { p: { margin: "0 0 10px 0" }, a: { color: e.color.secondary } }, code: { ...mt({ theme: e }), fontSize: 12, fontFamily: e.typography.fonts.mono }, "& code": { margin: 0, display: "inline-block" }, "& pre > code": { whiteSpace: "pre-wrap" } })), z8 = _.div(({ theme: e, hasDescription: t }) => ({ color: e.base === "light" ? te(0.1, e.color.defaultText) : te(0.2, e.color.defaultText), marginTop: t ? 4 : 0 })), q8 = _.div(({ theme: e, hasDescription: t }) => ({ color: e.base === "light" ? te(0.1, e.color.defaultText) : te(0.2, e.color.defaultText), marginTop: t ? 12 : 0, marginBottom: 12 })), U8 = _.td(({ theme: e, expandable: t }) => ({ paddingLeft: t ? "40px !important" : "20px !important" })), en = (e) => {
  var g;
  let [t, r] = b.useState(!1), { row: n, updateArgs: a, compact: l, expandable: i, initialExpandedArgs: u } = e, { name: s, description: c } = n, d = n.table || {}, m = d.type || n.type, f = d.defaultValue || n.defaultValue, p = (g = n.type) == null ? void 0 : g.required, h = c != null && c !== "";
  return o.createElement("tr", { onMouseEnter: () => r(!0), onMouseLeave: () => r(!1) }, o.createElement(U8, { expandable: i }, o.createElement(H8, null, s), p ? o.createElement(Z8, { title: "Required" }, "*") : null), l ? null : o.createElement("td", null, h && o.createElement(V8, null, o.createElement(Uc, null, c)), d.jsDocTags != null ? o.createElement(o.Fragment, null, o.createElement(q8, { hasDescription: h }, o.createElement(Da, { value: m, initialExpandedArgs: u })), o.createElement(Ax, { tags: d.jsDocTags })) : o.createElement(z8, { hasDescription: h }, o.createElement(Da, { value: m, initialExpandedArgs: u }))), l ? null : o.createElement("td", null, o.createElement(Da, { value: f, initialExpandedArgs: u })), a ? o.createElement("td", null, o.createElement(N8, { ...e, isHovered: t })) : null);
}, W8 = _(ve)(({ theme: e }) => ({ marginRight: 8, marginLeft: -10, marginTop: -2, height: 12, width: 12, color: e.base === "light" ? te(0.25, e.color.defaultText) : te(0.3, e.color.defaultText), border: "none", display: "inline-block" })), G8 = _.span(({ theme: e }) => ({ display: "flex", lineHeight: "20px", alignItems: "center" })), Y8 = _.td(({ theme: e }) => ({ position: "relative", letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: e.typography.weight.bold, fontSize: e.typography.size.s1 - 1, color: e.base === "light" ? te(0.4, e.color.defaultText) : te(0.6, e.color.defaultText), background: `${e.background.app} !important`, "& ~ td": { background: `${e.background.app} !important` } })), K8 = _.td(({ theme: e }) => ({ position: "relative", fontWeight: e.typography.weight.bold, fontSize: e.typography.size.s2 - 1, background: e.background.app })), X8 = _.td(() => ({ position: "relative" })), J8 = _.tr(({ theme: e }) => ({ "&:hover > td": { backgroundColor: `${Ft(5e-3, e.background.app)} !important`, boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`, cursor: "row-resize" } })), ps = _.button(() => ({ background: "none", border: "none", padding: "0", font: "inherit", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, height: "100%", width: "100%", color: "transparent", cursor: "row-resize !important" })), Ma = ({ level: e = "section", label: t, children: r, initialExpanded: n = !0, colSpan: a = 3 }) => {
  let [l, i] = b.useState(n), u = e === "subsection" ? K8 : Y8, s = (r == null ? void 0 : r.length) || 0, c = e === "subsection" ? `${s} item${s !== 1 ? "s" : ""}` : "", d = l ? "arrowdown" : "arrowright", m = `${l ? "Hide" : "Show"} ${e === "subsection" ? s : t} item${s !== 1 ? "s" : ""}`;
  return o.createElement(o.Fragment, null, o.createElement(J8, { title: m }, o.createElement(u, { colSpan: 1 }, o.createElement(ps, { onClick: (f) => i(!l), tabIndex: 0 }, m), o.createElement(G8, null, o.createElement(W8, { icon: d }), t)), o.createElement(X8, { colSpan: a - 1 }, o.createElement(ps, { onClick: (f) => i(!l), tabIndex: -1, style: { outline: "none" } }, m), l ? null : c)), l ? r : null);
}, tn = _.div(({ theme: e }) => ({ display: "flex", gap: 16, borderBottom: `1px solid ${e.appBorderColor}`, "&:last-child": { borderBottom: 0 } })), me = _.div(({ numColumn: e }) => ({ display: "flex", flexDirection: "column", flex: e || 1, gap: 5, padding: "12px 20px" })), ie = _.div(({ theme: e, width: t, height: r }) => ({ animation: `${e.animation.glow} 1.5s ease-in-out infinite`, background: e.appBorderColor, width: t || "100%", height: r || 16, borderRadius: 3 })), ge = [2, 4, 2, 2], Q8 = () => o.createElement(o.Fragment, null, o.createElement(tn, null, o.createElement(me, { numColumn: ge[0] }, o.createElement(ie, { width: "60%" })), o.createElement(me, { numColumn: ge[1] }, o.createElement(ie, { width: "30%" })), o.createElement(me, { numColumn: ge[2] }, o.createElement(ie, { width: "60%" })), o.createElement(me, { numColumn: ge[3] }, o.createElement(ie, { width: "60%" }))), o.createElement(tn, null, o.createElement(me, { numColumn: ge[0] }, o.createElement(ie, { width: "60%" })), o.createElement(me, { numColumn: ge[1] }, o.createElement(ie, { width: "80%" }), o.createElement(ie, { width: "30%" })), o.createElement(me, { numColumn: ge[2] }, o.createElement(ie, { width: "60%" })), o.createElement(me, { numColumn: ge[3] }, o.createElement(ie, { width: "60%" }))), o.createElement(tn, null, o.createElement(me, { numColumn: ge[0] }, o.createElement(ie, { width: "60%" })), o.createElement(me, { numColumn: ge[1] }, o.createElement(ie, { width: "80%" }), o.createElement(ie, { width: "30%" })), o.createElement(me, { numColumn: ge[2] }, o.createElement(ie, { width: "60%" })), o.createElement(me, { numColumn: ge[3] }, o.createElement(ie, { width: "60%" }))), o.createElement(tn, null, o.createElement(me, { numColumn: ge[0] }, o.createElement(ie, { width: "60%" })), o.createElement(me, { numColumn: ge[1] }, o.createElement(ie, { width: "80%" }), o.createElement(ie, { width: "30%" })), o.createElement(me, { numColumn: ge[2] }, o.createElement(ie, { width: "60%" })), o.createElement(me, { numColumn: ge[3] }, o.createElement(ie, { width: "60%" })))), e9 = _.div(({ inAddonPanel: e, theme: t }) => ({ height: e ? "100%" : "auto", display: "flex", border: e ? "none" : `1px solid ${t.appBorderColor}`, borderRadius: e ? 0 : t.appBorderRadius, padding: e ? 0 : 40, alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 15, background: t.background.content, boxShadow: "rgba(0, 0, 0, 0.10) 0 1px 3px 0" })), t9 = _.div({ display: "flex", flexDirection: "column", gap: 4, maxWidth: 415 }), r9 = _.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold, fontSize: e.typography.size.s2 - 1, textAlign: "center", color: e.textColor })), n9 = _.div(({ theme: e }) => ({ fontWeight: e.typography.weight.regular, fontSize: e.typography.size.s2 - 1, textAlign: "center", color: e.textMutedColor })), a9 = _.div(({ theme: e }) => ({ display: "flex", fontSize: e.typography.size.s2 - 1, gap: 25 })), o9 = _.div(({ theme: e }) => ({ width: 1, height: 16, backgroundColor: e.appBorderColor })), l9 = ({ inAddonPanel: e }) => {
  let [t, r] = b.useState(!0);
  return b.useEffect(() => {
    let n = setTimeout(() => {
      r(!1);
    }, 100);
    return () => clearTimeout(n);
  }, []), t ? null : o.createElement(e9, { inAddonPanel: e }, o.createElement(t9, null, o.createElement(r9, null, e ? "Interactive story playground" : "Args table with interactive controls couldn't be auto-generated"), o.createElement(n9, null, "Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically.")), o.createElement(a9, null, e && o.createElement(o.Fragment, null, o.createElement(Bt, { href: "https://youtu.be/0gOfS6K0x0E", target: "_blank", withArrow: !0 }, o.createElement(ve, { icon: "video" }), " Watch 5m video"), o.createElement(o9, null), o.createElement(Bt, { href: "https://storybook.js.org/docs/react/essentials/controls", target: "_blank", withArrow: !0 }, "Read docs")), !e && o.createElement(Bt, { href: "https://storybook.js.org/docs/react/essentials/controls", target: "_blank", withArrow: !0 }, "Learn how to set that up")));
}, i9 = _.table(({ theme: e, compact: t, inAddonPanel: r }) => ({ "&&": { borderSpacing: 0, color: e.color.defaultText, "td, th": { padding: 0, border: "none", verticalAlign: "top", textOverflow: "ellipsis" }, fontSize: e.typography.size.s2 - 1, lineHeight: "20px", textAlign: "left", width: "100%", marginTop: r ? 0 : 25, marginBottom: r ? 0 : 40, "thead th:first-of-type, td:first-of-type": { width: "25%" }, "th:first-of-type, td:first-of-type": { paddingLeft: 20 }, "th:nth-of-type(2), td:nth-of-type(2)": { ...t ? null : { width: "35%" } }, "td:nth-of-type(3)": { ...t ? null : { width: "15%" } }, "th:last-of-type, td:last-of-type": { paddingRight: 20, ...t ? null : { width: "25%" } }, th: { color: e.base === "light" ? te(0.25, e.color.defaultText) : te(0.45, e.color.defaultText), paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15 }, td: { paddingTop: "10px", paddingBottom: "10px", "&:not(:first-of-type)": { paddingLeft: 15, paddingRight: 15 }, "&:last-of-type": { paddingRight: 20 } }, marginLeft: r ? 0 : 1, marginRight: r ? 0 : 1, tbody: { ...r ? null : { filter: e.base === "light" ? "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))" : "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))" }, "> tr > *": { background: e.background.content, borderTop: `1px solid ${e.appBorderColor}` }, ...r ? null : { "> tr:first-of-type > *": { borderBlockStart: `1px solid ${e.appBorderColor}` }, "> tr:last-of-type > *": { borderBlockEnd: `1px solid ${e.appBorderColor}` }, "> tr > *:first-of-type": { borderInlineStart: `1px solid ${e.appBorderColor}` }, "> tr > *:last-of-type": { borderInlineEnd: `1px solid ${e.appBorderColor}` }, "> tr:first-of-type > td:first-of-type": { borderTopLeftRadius: e.appBorderRadius }, "> tr:first-of-type > td:last-of-type": { borderTopRightRadius: e.appBorderRadius }, "> tr:last-of-type > td:first-of-type": { borderBottomLeftRadius: e.appBorderRadius }, "> tr:last-of-type > td:last-of-type": { borderBottomRightRadius: e.appBorderRadius } } } } })), s9 = _(Pt)(({ theme: e }) => ({ color: e.barTextColor, margin: "-4px -12px -4px 0" })), u9 = _.span({ display: "flex", justifyContent: "space-between" }), c9 = { alpha: (e, t) => e.name.localeCompare(t.name), requiredFirst: (e, t) => {
  var r, n;
  return +!!((r = t.type) != null && r.required) - +!!((n = e.type) != null && n.required) || e.name.localeCompare(t.name);
}, none: void 0 }, d9 = (e, t) => {
  let r = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
  if (!e)
    return r;
  Object.entries(e).forEach(([l, i]) => {
    let { category: u, subcategory: s } = (i == null ? void 0 : i.table) || {};
    if (u) {
      let c = r.sections[u] || { ungrouped: [], subsections: {} };
      if (!s)
        c.ungrouped.push({ key: l, ...i });
      else {
        let d = c.subsections[s] || [];
        d.push({ key: l, ...i }), c.subsections[s] = d;
      }
      r.sections[u] = c;
    } else if (s) {
      let c = r.ungroupedSubsections[s] || [];
      c.push({ key: l, ...i }), r.ungroupedSubsections[s] = c;
    } else
      r.ungrouped.push({ key: l, ...i });
  });
  let n = c9[t], a = (l) => n ? Object.keys(l).reduce((i, u) => ({ ...i, [u]: l[u].sort(n) }), {}) : l;
  return { ungrouped: r.ungrouped.sort(n), ungroupedSubsections: a(r.ungroupedSubsections), sections: Object.keys(r.sections).reduce((l, i) => ({ ...l, [i]: { ungrouped: r.sections[i].ungrouped.sort(n), subsections: a(r.sections[i].subsections) } }), {}) };
}, p9 = (e, t, r) => {
  try {
    return ld(e, t, r);
  } catch (n) {
    return zE.warn(n.message), !1;
  }
}, f9 = (e) => {
  let { updateArgs: t, resetArgs: r, compact: n, inAddonPanel: a, initialExpandedArgs: l, sort: i = "none", isLoading: u } = e;
  if ("error" in e) {
    let { error: w } = e;
    return o.createElement(i0, null, w, " ", o.createElement(Bt, { href: "http://storybook.js.org/docs/", target: "_blank", withArrow: !0 }, "Read the docs"));
  }
  if (u)
    return o.createElement(Q8, null);
  let { rows: s, args: c, globals: d } = "rows" in e && e, m = d9(Kb(s, (w) => {
    var v;
    return !((v = w == null ? void 0 : w.table) != null && v.disable) && p9(w, c || {}, d || {});
  }), i), f = m.ungrouped.length === 0, p = Object.entries(m.sections).length === 0, h = Object.entries(m.ungroupedSubsections).length === 0;
  if (f && p && h)
    return o.createElement(l9, { inAddonPanel: a });
  let g = 1;
  t && (g += 1), n || (g += 2);
  let x = Object.keys(m.sections).length > 0, y = { updateArgs: t, compact: n, inAddonPanel: a, initialExpandedArgs: l };
  return o.createElement(Jo, null, o.createElement(i9, { compact: n, inAddonPanel: a, className: "docblock-argstable sb-unstyled" }, o.createElement("thead", { className: "docblock-argstable-head" }, o.createElement("tr", null, o.createElement("th", null, o.createElement("span", null, "Name")), n ? null : o.createElement("th", null, o.createElement("span", null, "Description")), n ? null : o.createElement("th", null, o.createElement("span", null, "Default")), t ? o.createElement("th", null, o.createElement(u9, null, "Control", " ", !u && r && o.createElement(s9, { onClick: () => r(), title: "Reset controls" }, o.createElement(ve, { icon: "undo", "aria-hidden": !0 })))) : null)), o.createElement("tbody", { className: "docblock-argstable-body" }, m.ungrouped.map((w) => o.createElement(en, { key: w.key, row: w, arg: c && c[w.key], ...y })), Object.entries(m.ungroupedSubsections).map(([w, v]) => o.createElement(Ma, { key: w, label: w, level: "subsection", colSpan: g }, v.map((E) => o.createElement(en, { key: E.key, row: E, arg: c && c[E.key], expandable: x, ...y })))), Object.entries(m.sections).map(([w, v]) => o.createElement(Ma, { key: w, label: w, level: "section", colSpan: g }, v.ungrouped.map((E) => o.createElement(en, { key: E.key, row: E, arg: c && c[E.key], ...y })), Object.entries(v.subsections).map(([E, A]) => o.createElement(Ma, { key: E, label: E, level: "subsection", colSpan: g }, A.map((S) => o.createElement(en, { key: S.key, row: S, arg: c && c[S.key], expandable: x, ...y })))))))));
};
_.div(({ theme: e }) => ({ marginRight: 30, fontSize: `${e.typography.size.s1}px`, color: e.base === "light" ? te(0.4, e.color.defaultText) : te(0.6, e.color.defaultText) }));
_.div({ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" });
_.div({ display: "flex", flexDirection: "row", alignItems: "baseline", "&:not(:last-child)": { marginBottom: "1rem" } });
_.div(re, ({ theme: e }) => ({ ...Jn(e), margin: "25px 0 40px", padding: "30px 20px" }));
_.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold, color: e.color.defaultText }));
_.div(({ theme: e }) => ({ color: e.base === "light" ? te(0.2, e.color.defaultText) : te(0.6, e.color.defaultText) }));
_.div({ flex: "0 0 30%", lineHeight: "20px", marginTop: 5 });
_.div(({ theme: e }) => ({ flex: 1, textAlign: "center", fontFamily: e.typography.fonts.mono, fontSize: e.typography.size.s1, lineHeight: 1, overflow: "hidden", color: e.base === "light" ? te(0.4, e.color.defaultText) : te(0.6, e.color.defaultText), "> div": { display: "inline-block", overflow: "hidden", maxWidth: "100%", textOverflow: "ellipsis" }, span: { display: "block", marginTop: 2 } }));
_.div({ display: "flex", flexDirection: "row" });
_.div(({ background: e }) => ({ position: "relative", flex: 1, "&::before": { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: e, content: '""' } }));
_.div(({ theme: e }) => ({ ...Jn(e), display: "flex", flexDirection: "row", height: 50, marginBottom: 5, overflow: "hidden", backgroundColor: "white", backgroundImage: "repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)", backgroundClip: "padding-box" }));
_.div({ display: "flex", flexDirection: "column", flex: 1, position: "relative", marginBottom: 30 });
_.div({ flex: 1, display: "flex", flexDirection: "row" });
_.div({ display: "flex", alignItems: "flex-start" });
_.div({ flex: "0 0 30%" });
_.div({ flex: 1 });
_.div(({ theme: e }) => ({ display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: 20, fontWeight: e.typography.weight.bold, color: e.base === "light" ? te(0.4, e.color.defaultText) : te(0.6, e.color.defaultText) }));
_.div(({ theme: e }) => ({ fontSize: e.typography.size.s2, lineHeight: "20px", display: "flex", flexDirection: "column" }));
_.div(({ theme: e }) => ({ fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s2, color: e.color.defaultText, marginLeft: 10, lineHeight: 1.2 }));
_.div(({ theme: e }) => ({ ...Jn(e), overflow: "hidden", height: 40, width: 40, display: "flex", alignItems: "center", justifyContent: "center", flex: "none", "> img, > svg": { width: 20, height: 20 } }));
_.div({ display: "inline-flex", flexDirection: "row", alignItems: "center", flex: "0 1 calc(20% - 10px)", minWidth: 120, margin: "0px 10px 30px 0" });
_.div({ display: "flex", flexFlow: "row wrap" });
var m9 = (e) => `anchor--${e}`, g9 = ({ storyId: e, children: t }) => o.createElement("div", { id: m9(e), className: "sb-anchor" }, t);
$e && $e.__DOCS_CONTEXT__ === void 0 && ($e.__DOCS_CONTEXT__ = b.createContext(null), $e.__DOCS_CONTEXT__.displayName = "DocsContext");
var Oe = $e ? $e.__DOCS_CONTEXT__ : b.createContext(null), ea = (e, t) => b.useContext(Oe).resolveOf(e, t);
function h9(e, t = "start") {
  e.scrollIntoView({ behavior: "smooth", block: t, inline: "nearest" });
}
function b9(e, t) {
  let r = El([e], t);
  return r && r[0];
}
function El(e, t) {
  let [r, n] = b.useState({});
  return b.useEffect(() => {
    Promise.all(e.map(async (a) => {
      let l = await t.loadStory(a);
      n((i) => i[a] === l ? i : { ...i, [a]: l });
    }));
  }), e.map((a) => {
    if (r[a])
      return r[a];
    try {
      return t.storyById(a);
    } catch {
      return null;
    }
  });
}
function w0(e) {
  return PE(e);
}
var A0 = b.createContext({ sources: {} }), S0 = "--unknown--", y9 = ({ children: e, channel: t }) => {
  let [r, n] = b.useState({});
  return b.useEffect(() => {
    let a = (l, i = null, u = !1) => {
      let { id: s, args: c = void 0, source: d, format: m } = typeof l == "string" ? { id: l, source: i, format: u } : l, f = c ? w0(c) : S0;
      n((p) => ({ ...p, [s]: { ...p[s], [f]: { code: d, format: m } } }));
    };
    return t.on(Tl, a), () => t.off(Tl, a);
  }, []), o.createElement(A0.Provider, { value: { sources: r } }, e);
}, v9 = ((e) => (e.OPEN = "open", e.CLOSED = "closed", e.NONE = "none", e))(v9 || {}), E9 = (e) => {
  let t = e.map((r) => {
    var n, a;
    return (a = (n = r.parameters.docs) == null ? void 0 : n.source) == null ? void 0 : a.state;
  }).filter(Boolean);
  return t.length === 0 ? "closed" : t[0];
}, x9 = (e, t, r) => {
  let { sources: n } = r, a = n == null ? void 0 : n[e];
  return (a == null ? void 0 : a[w0(t)]) || (a == null ? void 0 : a[S0]) || { code: "" };
}, w9 = ({ snippet: e, storyContext: t, typeFromProps: r, transformFromProps: n }) => {
  var s, c, d, m, f, p;
  let { __isArgsStory: a } = t.parameters, l = ((s = t.parameters.docs) == null ? void 0 : s.source) || {}, i = r || l.type || na.AUTO;
  if (l.code !== void 0)
    return l.code;
  let u = i === na.DYNAMIC || i === na.AUTO && e && a ? e : l.originalSource || "";
  return l.transformSource && pe(xe`The \`transformSource\` parameter at \`parameters.docs.source.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `), (c = t.parameters.docs) != null && c.transformSource && pe(xe`The \`transformSource\` parameter at \`parameters.docs.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `), (d = t.parameters.jsx) != null && d.transformSource && pe(xe`The \`transformSource\` parameter at \`parameters.jsx.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `), ((p = n ?? l.transform ?? l.transformSource ?? ((m = t.parameters.docs) == null ? void 0 : m.transformSource) ?? ((f = t.parameters.jsx) == null ? void 0 : f.transformSource)) == null ? void 0 : p(u, t)) || u;
}, C0 = (e, t, r) => {
  var p, h, g;
  let n = e.ids || (e.id ? [e.id] : []), a = El(n, t), l = a, { of: i } = e;
  if ("of" in e && i === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  if (i)
    l = [t.resolveOf(i, ["story"]).story];
  else if (l.length === 0)
    try {
      l = [t.storyById()];
    } catch {
    }
  if (!a.every(Boolean))
    return { error: "Oh no! The source is not available.", state: "none" };
  let u = ((g = (h = (p = l[0]) == null ? void 0 : p.parameters) == null ? void 0 : h.docs) == null ? void 0 : g.source) || {}, { code: s } = e, c = e.format ?? u.format, d = e.language ?? u.language ?? "jsx", m = e.dark ?? u.dark ?? !1;
  s || (s = l.map((x, y) => {
    var A, S;
    if (!x)
      return "";
    let w = t.getStoryContext(x), v = e.__forceInitialArgs ? w.initialArgs : w.unmappedArgs, E = x9(x.id, v, r);
    return y === 0 && (c = E.format ?? ((S = (A = x.parameters.docs) == null ? void 0 : A.source) == null ? void 0 : S.format) ?? !1), w9({ snippet: E.code, storyContext: { ...w, args: v }, typeFromProps: e.type, transformFromProps: e.transform });
  }).join(`

`));
  let f = E9(l);
  return s ? { code: s, format: c, language: d, dark: m, state: f } : { error: "Oh no! The source is not available.", state: f };
}, k0 = (e, t) => {
  let { id: r, of: n, meta: a, story: l } = e;
  if ("of" in e && n === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  if (r)
    return pe(xe`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`), r;
  let { name: i } = e;
  return i ? (pe(xe`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`), t.storyIdByName(i)) : (l && pe(xe`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`), a && t.referenceMeta(a, !1), t.resolveOf(n || l || "story", ["story"]).story.id);
}, A9 = (e, t, r) => {
  let { parameters: n = {} } = t || {}, { docs: a = {} } = n, l = a.story || {};
  if (a.disable)
    return null;
  let { inlineStories: i, iframeHeight: u } = a;
  typeof i < "u" && pe(xe`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `);
  let s = e.inline ?? l.inline ?? i ?? !1;
  if (typeof u < "u" && pe(xe`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `), s) {
    let d = e.height ?? l.height, m = e.autoplay ?? l.autoplay ?? !1;
    return { story: t, inline: !0, height: d, autoplay: m, forceInitialArgs: !!e.__forceInitialArgs, primary: !!e.__primary, renderStoryToElement: r.renderStoryToElement };
  }
  let c = e.height ?? l.height ?? l.iframeHeight ?? u ?? "100px";
  return { story: t, inline: !1, height: c, primary: !!e.__primary };
}, S9 = (e = { __forceInitialArgs: !1, __primary: !1 }) => {
  let t = b.useContext(Oe), r = k0(e, t), n = b9(r, t);
  if (!n)
    return o.createElement(bl, null);
  let a = A9(e, n, t);
  return a ? o.createElement(fx, { ...a }) : null;
}, C9 = ({ withSource: e, mdxSource: t, children: r, layout: n, ...a }, l, i) => {
  let u = b.Children.toArray(r).filter((f) => f.props && (f.props.id || f.props.name || f.props.of)).map((f) => k0(f.props, l)), s = El(u, l), c = s.some((f) => !f), d = C0({ ...t ? { code: decodeURI(t) } : { ids: u }, ...a.of && { of: a.of } }, l, i);
  if (e === "none")
    return { isLoading: c, previewProps: a };
  let m = n;
  return b.Children.forEach(r, (f) => {
    var p, h;
    m || (m = (h = (p = f == null ? void 0 : f.props) == null ? void 0 : p.parameters) == null ? void 0 : h.layout);
  }), s.forEach((f) => {
    var p, h;
    m || !f || (m = (f == null ? void 0 : f.parameters.layout) ?? ((h = (p = f.parameters.docs) == null ? void 0 : p.canvas) == null ? void 0 : h.layout));
  }), { isLoading: c, previewProps: { ...a, layout: m ?? "padded", withSource: d, isExpanded: (e || d.state) === "open" } };
}, k9 = (e) => {
  var x, y, w, v, E, A, S, k, C, T;
  let t = b.useContext(Oe), r = b.useContext(A0), { children: n, of: a, source: l } = e;
  if ("of" in e && a === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let { isLoading: i, previewProps: u } = C9(e, t, r), s, c, d;
  try {
    ({ story: s } = ea(a || "story", ["story"]));
  } catch (O) {
    n || (d = O);
  }
  try {
    c = C0({ ...l, ...a && { of: a } }, t, r);
  } catch (O) {
    n || (d = O);
  }
  if (d)
    throw d;
  if (e.withSource && pe(xe`Setting source state with \`withSource\` is deprecated, please use \`sourceState\` with 'hidden', 'shown' or 'none' instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `), e.mdxSource && pe(xe`Setting source code with \`mdxSource\` is deprecated, please use source={{code: '...'}} instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `), (e.isColumn !== void 0 || e.columns !== void 0) && pe(xe`\`isColumn\` and \`columns\` props are deprecated as the Canvas block now only supports showing a single story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `), n)
    return pe(xe`Passing children to Canvas is deprecated, please use the \`of\` prop instead to reference a story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
  `), i ? o.createElement(xx, null) : o.createElement(uo, { ...u }, n);
  let m = e.layout ?? s.parameters.layout ?? ((y = (x = s.parameters.docs) == null ? void 0 : x.canvas) == null ? void 0 : y.layout) ?? "padded", f = e.withToolbar ?? ((v = (w = s.parameters.docs) == null ? void 0 : w.canvas) == null ? void 0 : v.withToolbar) ?? !1, p = e.additionalActions ?? ((A = (E = s.parameters.docs) == null ? void 0 : E.canvas) == null ? void 0 : A.additionalActions), h = e.sourceState ?? ((k = (S = s.parameters.docs) == null ? void 0 : S.canvas) == null ? void 0 : k.sourceState) ?? "hidden", g = e.className ?? ((T = (C = s.parameters.docs) == null ? void 0 : C.canvas) == null ? void 0 : T.className);
  return o.createElement(uo, { withSource: h === "none" ? void 0 : c, isExpanded: h === "shown", withToolbar: f, additionalActions: p, className: g, layout: m }, o.createElement(S9, { of: a || s.moduleExport, meta: e.meta, ...e.story }));
}, _9 = (e, t) => {
  let r = t.getStoryContext(e), [n, a] = b.useState(r.globals);
  return b.useEffect(() => {
    let l = (i) => {
      a(i.globals);
    };
    return t.channel.on(es, l), () => t.channel.off(es, l);
  }, [t.channel]), [n];
}, T9 = (e, t) => {
  let r = O9(e, t);
  if (!r)
    throw new Error("No result when story was defined");
  return r;
}, O9 = (e, t) => {
  let r = e ? t.getStoryContext(e) : { args: {} }, { id: n } = e || { id: "none" }, [a, l] = b.useState(r.args);
  b.useEffect(() => {
    let s = (c) => {
      c.storyId === n && l(c.args);
    };
    return t.channel.on(Qi, s), () => t.channel.off(Qi, s);
  }, [n, t.channel]);
  let i = b.useCallback((s) => t.channel.emit(UE, { storyId: n, updatedArgs: s }), [n, t.channel]), u = b.useCallback((s) => t.channel.emit(WE, { storyId: n, argNames: s }), [n, t.channel]);
  return e && [a, i, u];
}, R9 = (e) => {
  var g;
  let { of: t } = e;
  if ("of" in e && t === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let r = b.useContext(Oe), { story: n } = r.resolveOf(t || "story", ["story"]), { parameters: a, argTypes: l } = n, i = ((g = a.docs) == null ? void 0 : g.controls) || {}, u = e.include ?? i.include, s = e.exclude ?? i.exclude, c = e.sort ?? i.sort, [d, m, f] = T9(n, r), [p] = _9(n, r), h = qE(l, u, s);
  return o.createElement(f9, { rows: h, args: d, globals: p, updateArgs: m, resetArgs: f, sort: c });
}, { document: _0 } = $e, T0 = ({ className: e, children: t, ...r }) => {
  if (typeof e != "string" && (typeof t != "string" || !t.match(/[\n\r]/g)))
    return o.createElement(Yo, null, t);
  let n = e && e.split("-");
  return o.createElement(gl, { language: n && n[1] || "plaintext", format: !1, code: t, ...r });
};
function xl(e, t) {
  e.channel.emit(GE, t);
}
var mo = xc.a, F9 = ({ hash: e, children: t }) => {
  let r = b.useContext(Oe);
  return o.createElement(mo, { href: e, target: "_self", onClick: (n) => {
    let a = e.substring(1);
    _0.getElementById(a) && xl(r, e);
  } }, t);
}, O0 = (e) => {
  let { href: t, target: r, children: n, ...a } = e, l = b.useContext(Oe);
  if (t) {
    if (t.startsWith("#"))
      return o.createElement(F9, { hash: t }, n);
    if (r !== "_blank" && !t.startsWith("https://"))
      return o.createElement(mo, { href: t, onClick: (i) => {
        i.button === 0 && !i.altKey && !i.ctrlKey && !i.metaKey && !i.shiftKey && (i.preventDefault(), xl(l, i.currentTarget.getAttribute("href")));
      }, target: r, ...a }, n);
  }
  return o.createElement(mo, { ...e });
}, R0 = ["h1", "h2", "h3", "h4", "h5", "h6"], $9 = R0.reduce((e, t) => ({ ...e, [t]: _(t)({ "& svg": { position: "relative", top: "-0.1em", visibility: "hidden" }, "&:hover svg": { visibility: "visible" } }) }), {}), D9 = _.a(() => ({ float: "left", lineHeight: "inherit", paddingRight: "10px", marginLeft: "-24px", color: "inherit" })), L9 = ({ as: e, id: t, children: r, ...n }) => {
  let a = b.useContext(Oe), l = $9[e], i = `#${t}`;
  return o.createElement(l, { id: t, ...n }, o.createElement(D9, { "aria-hidden": "true", href: i, tabIndex: -1, target: "_self", onClick: (u) => {
    _0.getElementById(t) && xl(a, i);
  } }, o.createElement(ve, { icon: "link" })), r);
}, wl = (e) => {
  let { as: t, id: r, children: n, ...a } = e;
  if (r)
    return o.createElement(L9, { as: t, id: r, ...a }, n);
  let l = t, { as: i, ...u } = e;
  return o.createElement(l, { ...ee(u, t) });
}, F0 = R0.reduce((e, t) => ({ ...e, [t]: (r) => o.createElement(wl, { as: t, ...r }) }), {}), M9 = (e) => {
  var t;
  if (!e.children)
    return null;
  if (typeof e.children != "string")
    throw new Error(xe`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `);
  return o.createElement(Uc, { ...e, options: { forceBlock: !0, overrides: { code: T0, a: O0, ...F0, ...(t = e == null ? void 0 : e.options) == null ? void 0 : t.overrides }, ...e == null ? void 0 : e.options } });
}, B9 = ((e) => (e.INFO = "info", e.NOTES = "notes", e.DOCGEN = "docgen", e.AUTO = "auto", e))(B9 || {}), mn = "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#description-block-parametersnotes-and-parametersinfo", I9 = (e) => e && (typeof e == "string" ? e : Ba(e.markdown) || Ba(e.text)), P9 = (e) => e && (typeof e == "string" ? e : Ba(e.text)), j9 = (e) => null, N9 = (e) => {
  var t, r, n, a, l, i, u, s;
  switch (e.type) {
    case "story":
      return ((r = (t = e.story.parameters.docs) == null ? void 0 : t.description) == null ? void 0 : r.story) || null;
    case "meta": {
      let { parameters: c, component: d } = e.preparedMeta;
      return ((a = (n = c.docs) == null ? void 0 : n.description) == null ? void 0 : a.component) || ((i = (l = c.docs) == null ? void 0 : l.extractComponentDescription) == null ? void 0 : i.call(l, d, { component: d, parameters: c })) || null;
    }
    case "component": {
      let { component: c, projectAnnotations: { parameters: d } } = e;
      return ((s = (u = d.docs) == null ? void 0 : u.extractComponentDescription) == null ? void 0 : s.call(u, c, { component: c, parameters: d })) || null;
    }
    default:
      throw new Error(`Unrecognized module type resolved from 'useOf', got: ${e.type}`);
  }
}, H9 = ({ type: e, markdown: t, children: r }, { storyById: n }) => {
  let { component: a, parameters: l } = n();
  if (r || t)
    return r || t;
  let { notes: i, info: u, docs: s } = l;
  (i || u) && pe(`Using 'parameters.notes' or 'parameters.info' properties to describe stories is deprecated. See ${mn}`);
  let { extractComponentDescription: c = j9, description: d } = s || {}, m = d == null ? void 0 : d.component;
  if (m)
    return m;
  switch (e) {
    case "info":
      return P9(u);
    case "notes":
      return I9(i);
    case "docgen":
    case "auto":
    default:
      return c(a, { component: a, ...l });
  }
}, go = (e) => {
  let { of: t, type: r, markdown: n, children: a } = e;
  if ("of" in e && t === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let l = b.useContext(Oe), i = ea(t || "meta"), u;
  return r || n || a ? u = H9(e, l) : u = N9(i), r && pe(`Manually specifying description type is deprecated. See ${mn}`), n && pe(`The 'markdown' prop on the Description block is deprecated. See ${mn}`), a && pe(`The 'children' prop on the Description block is deprecated. See ${mn}`), u ? o.createElement(M9, null, u) : null;
}, Z9 = _.div(({ theme: e }) => ({ width: "10rem", "@media (max-width: 768px)": { display: "none" } })), V9 = _.div(({ theme: e }) => ({ position: "fixed", bottom: 0, top: 0, width: "10rem", paddingTop: "4rem", paddingBottom: "2rem", overflowY: "auto", fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s2, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch", "& *": { boxSizing: "border-box" }, "& > .toc-wrapper > .toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${e.color.mediumlight}`, ".toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${e.color.mediumlight}`, ".toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${e.color.mediumlight}` } } }, "& .toc-list-item": { position: "relative", listStyleType: "none", marginLeft: 20, paddingTop: 3, paddingBottom: 3 }, "& .toc-list-item::before": { content: '""', position: "absolute", height: "100%", top: 0, left: 0, transform: "translateX(calc(-2px - 20px))", borderLeft: `solid 2px ${e.color.mediumdark}`, opacity: 0, transition: "opacity 0.2s" }, "& .toc-list-item.is-active-li::before": { opacity: 1 }, "& .toc-list-item > a": { color: e.color.defaultText, textDecoration: "none" }, "& .toc-list-item.is-active-li > a": { fontWeight: 600, color: e.color.secondary, textDecoration: "none" } })), z9 = _.p(({ theme: e }) => ({ fontWeight: 600, fontSize: "0.875em", color: e.textColor, textTransform: "uppercase", marginBottom: 10 })), q9 = ({ title: e }) => e === null ? null : typeof e == "string" ? o.createElement(z9, null, e) : e, U9 = ({ title: e, disable: t, headingSelector: r, contentsSelector: n, ignoreSelector: a, unsafeTocbotOptions: l }) => (b.useEffect(() => {
  let i = { tocSelector: ".toc-wrapper", contentSelector: n ?? ".sbdocs-content", headingSelector: r ?? "h3", ignoreSelector: a ?? ".skip-toc", headingsOffset: 40, scrollSmoothOffset: -40, orderedList: !1, onClick: () => !1, ...l }, u = setTimeout(() => Ji.init(i), 100);
  return () => {
    clearTimeout(u), Ji.destroy();
  };
}, [t]), o.createElement(o.Fragment, null, o.createElement(Z9, null, t ? null : o.createElement(V9, null, o.createElement(q9, { title: e || null }), o.createElement("div", { className: "toc-wrapper" }))))), { document: W9, window: G9 } = $e, Y9 = ({ context: e, theme: t, children: r }) => {
  var a, l, i, u, s;
  let n;
  try {
    n = (l = (a = e.resolveOf("meta", ["meta"]).preparedMeta.parameters) == null ? void 0 : a.docs) == null ? void 0 : l.toc;
  } catch {
    n = (s = (u = (i = e == null ? void 0 : e.projectAnnotations) == null ? void 0 : i.parameters) == null ? void 0 : u.docs) == null ? void 0 : s.toc;
  }
  return b.useEffect(() => {
    let c;
    try {
      if (c = new URL(G9.parent.location.toString()), c.hash) {
        let d = W9.getElementById(c.hash.substring(1));
        d && setTimeout(() => {
          h9(d);
        }, 200);
      }
    } catch {
    }
  }), o.createElement(Oe.Provider, { value: e }, o.createElement(y9, { channel: e.channel }, o.createElement(Us, { theme: Mp(t) }, o.createElement(nx, { toc: n ? o.createElement(U9, { className: "sbdocs sbdocs-toc--custom", ...n }) : null }, r))));
}, K9 = /\s*\/\s*/, X9 = (e) => {
  let t = e.trim().split(K9);
  return t && t[t.length - 1] || e;
}, J9 = ({ children: e }) => {
  let t = b.useContext(Oe), r = e || X9(t.storyById().title);
  return r ? o.createElement(QE, { className: "sbdocs-title sb-unstyled" }, r) : null;
}, Q9 = ({ children: e }) => {
  let t = b.useContext(Oe), { parameters: r } = t.storyById(), n = e || (r == null ? void 0 : r.componentSubtitle);
  return n ? o.createElement(ex, { className: "sbdocs-subtitle sb-unstyled" }, n) : null;
}, ew = ({ children: e, disableAnchor: t }) => {
  if (t || typeof e != "string")
    return o.createElement(Xo, null, e);
  let r = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
  return o.createElement(wl, { as: "h3", id: r }, e);
}, $0 = ({ of: e, expanded: t = !0, withToolbar: r = !1, __forceInitialArgs: n = !1, __primary: a = !1 }) => {
  var u, s;
  let { story: l } = ea(e || "story", ["story"]), i = ((s = (u = l.parameters.docs) == null ? void 0 : u.canvas) == null ? void 0 : s.withToolbar) ?? r;
  return o.createElement(g9, { storyId: l.id }, t && o.createElement(o.Fragment, null, o.createElement(ew, null, l.name), o.createElement(go, { of: e })), o.createElement(k9, { of: e, withToolbar: i, story: { __forceInitialArgs: n, __primary: a }, source: { __forceInitialArgs: n } }));
}, tw = ({ name: e }) => {
  let t = b.useContext(Oe);
  e && pe(xe`\`name\` prop is deprecated on the Primary block.
    The Primary block should only be used to render the primary story, which is automatically found.
    `);
  let r = e && t.storyIdByName(e), n = t.storyById(r);
  return n ? o.createElement($0, { of: n.moduleExport, expanded: !1, __primary: !0, withToolbar: !0 }) : null;
}, rw = ({ children: e, disableAnchor: t, ...r }) => {
  if (t || typeof e != "string")
    return o.createElement(Ko, null, e);
  let n = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
  return o.createElement(wl, { as: "h2", id: n, ...r }, e);
}, nw = _(rw)(({ theme: e }) => ({ fontSize: `${e.typography.size.s2 - 1}px`, fontWeight: e.typography.weight.bold, lineHeight: "16px", letterSpacing: "0.35em", textTransform: "uppercase", color: e.textMutedColor, border: 0, marginBottom: "12px", "&:first-of-type": { marginTop: "56px" } })), D0 = ({ title: e, includePrimary: t = !0 }) => {
  let { componentStories: r } = b.useContext(Oe), n = r().filter((a) => {
    var l, i;
    return !((i = (l = a.parameters) == null ? void 0 : l.docs) != null && i.disable);
  });
  return t || (n = n.slice(1)), !n || n.length === 0 ? null : o.createElement(o.Fragment, null, o.createElement(nw, null, e), n.map((a) => a && o.createElement($0, { key: a.id, of: a.moduleExport, expanded: !0, __forceInitialArgs: !0 })));
};
D0.defaultProps = { title: "Stories" };
var aw = () => {
  let e = ea("meta", ["meta"]), { stories: t } = e.csfFile, r = Object.keys(t).length === 1;
  return o.createElement(o.Fragment, null, o.createElement(J9, null), o.createElement(Q9, null), o.createElement(go, { of: "meta" }), r ? o.createElement(go, { of: "story" }) : null, o.createElement(tw, null), o.createElement(R9, null), r ? null : o.createElement(D0, null));
};
function ow({ context: e, docsParameter: t }) {
  let r = t.container || Y9, n = t.page || aw;
  return o.createElement(r, { context: e, theme: t.theme }, o.createElement(n, null));
}
var L0 = { code: T0, a: O0, ...F0 }, lw = class extends b.Component {
  constructor() {
    super(...arguments), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(e) {
    let { showException: t } = this.props;
    t(e);
  }
  render() {
    let { hasError: e } = this.state, { children: t } = this.props;
    return e ? null : o.createElement(o.Fragment, null, t);
  }
}, iw = class {
  constructor() {
    this.render = async (e, t, r) => {
      let n = { ...L0, ...t == null ? void 0 : t.components }, a = ow;
      return new Promise((l, i) => {
        import("./index-b41da66d.js").then(({ MDXProvider: u }) => ad(o.createElement(lw, { showException: i, key: Math.random() }, o.createElement(u, { components: n }, o.createElement(a, { context: e, docsParameter: t }))), r)).then(() => l());
      });
    }, this.unmount = (e) => {
      od(e);
    };
  }
};
const vw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DocsRenderer: iw,
  defaultComponents: L0
}, Symbol.toStringTag, { value: "Module" }));
export {
  vw as D,
  Ne as F,
  ve as I,
  Po as S,
  eh as T,
  Tm as W,
  _e as _,
  Bu as a,
  Z as b,
  Au as c,
  Xg as d,
  He as g,
  Nt as m,
  _ as n,
  gw as s
};
//# sourceMappingURL=DocsRenderer-NNNQARDV-492386ce.js.map

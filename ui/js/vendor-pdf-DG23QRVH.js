import { q as xe, z as ws, u as Pl, w as kl, x as Cl, y as Fl } from "./vendor-CcpD1l-V.js";
/** @license
*
* jsPDF - PDF Document creation from JavaScript
* Version 2.5.2 Built on 2024-09-17T13:29:57.859Z
*                      CommitID 00000000
*
* Copyright (c) 2010-2021 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
*               2015-2021 yWorks GmbH, http://www.yworks.com
*               2015-2021 Lukas Holländer <lukas.hollaender@yworks.com>, https://github.com/HackbrettXXX
*               2016-2018 Aras Abbasi <aras.abbasi@gmail.com>
*               2010 Aaron Spike, https://github.com/acspike
*               2012 Willow Systems Corporation, https://github.com/willowsystems
*               2012 Pablo Hess, https://github.com/pablohess
*               2012 Florian Jenett, https://github.com/fjenett
*               2013 Warren Weckesser, https://github.com/warrenweckesser
*               2013 Youssef Beddad, https://github.com/lifof
*               2013 Lee Driscoll, https://github.com/lsdriscoll
*               2013 Stefan Slonevskiy, https://github.com/stefslon
*               2013 Jeremy Morel, https://github.com/jmorel
*               2013 Christoph Hartmann, https://github.com/chris-rock
*               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
*               2014 James Makes, https://github.com/dollaruw
*               2014 Diego Casorran, https://github.com/diegocr
*               2014 Steven Spungin, https://github.com/Flamenco
*               2014 Kenneth Glassey, https://github.com/Gavvers
*
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*
* Contributor(s):
*    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
*    kim3er, mfo, alnorth, Flamenco
*/
var Xt = /* @__PURE__ */ function() {
  return typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : this;
}();
function us() {
  Xt.console && typeof Xt.console.log == "function" && Xt.console.log.apply(Xt.console, arguments);
}
var Se = { log: us, warn: function(i) {
  Xt.console && (typeof Xt.console.warn == "function" ? Xt.console.warn.apply(Xt.console, arguments) : us.call(null, arguments));
}, error: function(i) {
  Xt.console && (typeof Xt.console.error == "function" ? Xt.console.error.apply(Xt.console, arguments) : us(i));
} };
function ls(i, e, r) {
  var a = new XMLHttpRequest();
  a.open("GET", i), a.responseType = "blob", a.onload = function() {
    ui(a.response, e, r);
  }, a.onerror = function() {
    Se.error("could not download file");
  }, a.send();
}
function iu(i) {
  var e = new XMLHttpRequest();
  e.open("HEAD", i, !1);
  try {
    e.send();
  } catch {
  }
  return e.status >= 200 && e.status <= 299;
}
function ho(i) {
  try {
    i.dispatchEvent(new MouseEvent("click"));
  } catch {
    var e = document.createEvent("MouseEvents");
    e.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), i.dispatchEvent(e);
  }
}
var ba, As, ui = Xt.saveAs || ((typeof window > "u" ? "undefined" : xe(window)) !== "object" || window !== Xt ? function() {
} : typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype ? function(i, e, r) {
  var a = Xt.URL || Xt.webkitURL, u = document.createElement("a");
  e = e || i.name || "download", u.download = e, u.rel = "noopener", typeof i == "string" ? (u.href = i, u.origin !== location.origin ? iu(u.href) ? ls(i, e, r) : ho(u, u.target = "_blank") : ho(u)) : (u.href = a.createObjectURL(i), setTimeout(function() {
    a.revokeObjectURL(u.href);
  }, 4e4), setTimeout(function() {
    ho(u);
  }, 0));
} : "msSaveOrOpenBlob" in navigator ? function(i, e, r) {
  if (e = e || i.name || "download", typeof i == "string") if (iu(i)) ls(i, e, r);
  else {
    var a = document.createElement("a");
    a.href = i, a.target = "_blank", setTimeout(function() {
      ho(a);
    });
  }
  else navigator.msSaveOrOpenBlob(function(u, o) {
    return o === void 0 ? o = { autoBom: !1 } : xe(o) !== "object" && (Se.warn("Deprecated: Expected third argument to be a object"), o = { autoBom: !o }), o.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(u.type) ? new Blob(["\uFEFF", u], { type: u.type }) : u;
  }(i, r), e);
} : function(i, e, r, a) {
  if ((a = a || open("", "_blank")) && (a.document.title = a.document.body.innerText = "downloading..."), typeof i == "string") return ls(i, e, r);
  var u = i.type === "application/octet-stream", o = /constructor/i.test(Xt.HTMLElement) || Xt.safari, f = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((f || u && o) && (typeof FileReader > "u" ? "undefined" : xe(FileReader)) === "object") {
    var h = new FileReader();
    h.onloadend = function() {
      var P = h.result;
      P = f ? P : P.replace(/^data:[^;]*;/, "data:attachment/file;"), a ? a.location.href = P : location = P, a = null;
    }, h.readAsDataURL(i);
  } else {
    var c = Xt.URL || Xt.webkitURL, g = c.createObjectURL(i);
    a ? a.location = g : location.href = g, a = null, setTimeout(function() {
      c.revokeObjectURL(g);
    }, 4e4);
  }
});
/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */
function Fu(i) {
  var e;
  i = i || "", this.ok = !1, i.charAt(0) == "#" && (i = i.substr(1, 6)), i = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dodgerblue: "1e90ff", feldspar: "d19275", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgrey: "d3d3d3", lightgreen: "90ee90", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslateblue: "8470ff", lightslategray: "778899", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "00ff00", limegreen: "32cd32", linen: "faf0e6", magenta: "ff00ff", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370d8", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "d87093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", red: "ff0000", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", violetred: "d02090", wheat: "f5deb3", white: "ffffff", whitesmoke: "f5f5f5", yellow: "ffff00", yellowgreen: "9acd32" }[i = (i = i.replace(/ /g, "")).toLowerCase()] || i;
  for (var r = [{ re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/, example: ["rgb(123, 234, 45)", "rgb(255,234,245)"], process: function(h) {
    return [parseInt(h[1]), parseInt(h[2]), parseInt(h[3])];
  } }, { re: /^(\w{2})(\w{2})(\w{2})$/, example: ["#00ff00", "336699"], process: function(h) {
    return [parseInt(h[1], 16), parseInt(h[2], 16), parseInt(h[3], 16)];
  } }, { re: /^(\w{1})(\w{1})(\w{1})$/, example: ["#fb0", "f0f"], process: function(h) {
    return [parseInt(h[1] + h[1], 16), parseInt(h[2] + h[2], 16), parseInt(h[3] + h[3], 16)];
  } }], a = 0; a < r.length; a++) {
    var u = r[a].re, o = r[a].process, f = u.exec(i);
    f && (e = o(f), this.r = e[0], this.g = e[1], this.b = e[2], this.ok = !0);
  }
  this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
    return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
  }, this.toHex = function() {
    var h = this.r.toString(16), c = this.g.toString(16), g = this.b.toString(16);
    return h.length == 1 && (h = "0" + h), c.length == 1 && (c = "0" + c), g.length == 1 && (g = "0" + g), "#" + h + c + g;
  };
}
/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */
function fs(i, e) {
  var r = i[0], a = i[1], u = i[2], o = i[3];
  r = dr(r, a, u, o, e[0], 7, -680876936), o = dr(o, r, a, u, e[1], 12, -389564586), u = dr(u, o, r, a, e[2], 17, 606105819), a = dr(a, u, o, r, e[3], 22, -1044525330), r = dr(r, a, u, o, e[4], 7, -176418897), o = dr(o, r, a, u, e[5], 12, 1200080426), u = dr(u, o, r, a, e[6], 17, -1473231341), a = dr(a, u, o, r, e[7], 22, -45705983), r = dr(r, a, u, o, e[8], 7, 1770035416), o = dr(o, r, a, u, e[9], 12, -1958414417), u = dr(u, o, r, a, e[10], 17, -42063), a = dr(a, u, o, r, e[11], 22, -1990404162), r = dr(r, a, u, o, e[12], 7, 1804603682), o = dr(o, r, a, u, e[13], 12, -40341101), u = dr(u, o, r, a, e[14], 17, -1502002290), r = pr(r, a = dr(a, u, o, r, e[15], 22, 1236535329), u, o, e[1], 5, -165796510), o = pr(o, r, a, u, e[6], 9, -1069501632), u = pr(u, o, r, a, e[11], 14, 643717713), a = pr(a, u, o, r, e[0], 20, -373897302), r = pr(r, a, u, o, e[5], 5, -701558691), o = pr(o, r, a, u, e[10], 9, 38016083), u = pr(u, o, r, a, e[15], 14, -660478335), a = pr(a, u, o, r, e[4], 20, -405537848), r = pr(r, a, u, o, e[9], 5, 568446438), o = pr(o, r, a, u, e[14], 9, -1019803690), u = pr(u, o, r, a, e[3], 14, -187363961), a = pr(a, u, o, r, e[8], 20, 1163531501), r = pr(r, a, u, o, e[13], 5, -1444681467), o = pr(o, r, a, u, e[2], 9, -51403784), u = pr(u, o, r, a, e[7], 14, 1735328473), r = gr(r, a = pr(a, u, o, r, e[12], 20, -1926607734), u, o, e[5], 4, -378558), o = gr(o, r, a, u, e[8], 11, -2022574463), u = gr(u, o, r, a, e[11], 16, 1839030562), a = gr(a, u, o, r, e[14], 23, -35309556), r = gr(r, a, u, o, e[1], 4, -1530992060), o = gr(o, r, a, u, e[4], 11, 1272893353), u = gr(u, o, r, a, e[7], 16, -155497632), a = gr(a, u, o, r, e[10], 23, -1094730640), r = gr(r, a, u, o, e[13], 4, 681279174), o = gr(o, r, a, u, e[0], 11, -358537222), u = gr(u, o, r, a, e[3], 16, -722521979), a = gr(a, u, o, r, e[6], 23, 76029189), r = gr(r, a, u, o, e[9], 4, -640364487), o = gr(o, r, a, u, e[12], 11, -421815835), u = gr(u, o, r, a, e[15], 16, 530742520), r = mr(r, a = gr(a, u, o, r, e[2], 23, -995338651), u, o, e[0], 6, -198630844), o = mr(o, r, a, u, e[7], 10, 1126891415), u = mr(u, o, r, a, e[14], 15, -1416354905), a = mr(a, u, o, r, e[5], 21, -57434055), r = mr(r, a, u, o, e[12], 6, 1700485571), o = mr(o, r, a, u, e[3], 10, -1894986606), u = mr(u, o, r, a, e[10], 15, -1051523), a = mr(a, u, o, r, e[1], 21, -2054922799), r = mr(r, a, u, o, e[8], 6, 1873313359), o = mr(o, r, a, u, e[15], 10, -30611744), u = mr(u, o, r, a, e[6], 15, -1560198380), a = mr(a, u, o, r, e[13], 21, 1309151649), r = mr(r, a, u, o, e[4], 6, -145523070), o = mr(o, r, a, u, e[11], 10, -1120210379), u = mr(u, o, r, a, e[2], 15, 718787259), a = mr(a, u, o, r, e[9], 21, -343485551), i[0] = Vn(r, i[0]), i[1] = Vn(a, i[1]), i[2] = Vn(u, i[2]), i[3] = Vn(o, i[3]);
}
function So(i, e, r, a, u, o) {
  return e = Vn(Vn(e, i), Vn(a, o)), Vn(e << u | e >>> 32 - u, r);
}
function dr(i, e, r, a, u, o, f) {
  return So(e & r | ~e & a, i, e, u, o, f);
}
function pr(i, e, r, a, u, o, f) {
  return So(e & a | r & ~a, i, e, u, o, f);
}
function gr(i, e, r, a, u, o, f) {
  return So(e ^ r ^ a, i, e, u, o, f);
}
function mr(i, e, r, a, u, o, f) {
  return So(r ^ (e | ~a), i, e, u, o, f);
}
function Tu(i) {
  var e, r = i.length, a = [1732584193, -271733879, -1732584194, 271733878];
  for (e = 64; e <= i.length; e += 64) fs(a, Tl(i.substring(e - 64, e)));
  i = i.substring(e - 64);
  var u = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (e = 0; e < i.length; e++) u[e >> 2] |= i.charCodeAt(e) << (e % 4 << 3);
  if (u[e >> 2] |= 128 << (e % 4 << 3), e > 55) for (fs(a, u), e = 0; e < 16; e++) u[e] = 0;
  return u[14] = 8 * r, fs(a, u), a;
}
function Tl(i) {
  var e, r = [];
  for (e = 0; e < 64; e += 4) r[e >> 2] = i.charCodeAt(e) + (i.charCodeAt(e + 1) << 8) + (i.charCodeAt(e + 2) << 16) + (i.charCodeAt(e + 3) << 24);
  return r;
}
ba = Xt.atob.bind(Xt), As = Xt.btoa.bind(Xt);
var au = "0123456789abcdef".split("");
function Il(i) {
  for (var e = "", r = 0; r < 4; r++) e += au[i >> 8 * r + 4 & 15] + au[i >> 8 * r & 15];
  return e;
}
function El(i) {
  return String.fromCharCode((255 & i) >> 0, (65280 & i) >> 8, (16711680 & i) >> 16, (4278190080 & i) >> 24);
}
function Ls(i) {
  return Tu(i).map(El).join("");
}
var Ol = function(i) {
  for (var e = 0; e < i.length; e++) i[e] = Il(i[e]);
  return i.join("");
}(Tu("hello")) != "5d41402abc4b2a76b9719d911017c592";
function Vn(i, e) {
  if (Ol) {
    var r = (65535 & i) + (65535 & e);
    return (i >> 16) + (e >> 16) + (r >> 16) << 16 | 65535 & r;
  }
  return i + e & 4294967295;
}
/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */
function Ns(i, e) {
  var r, a, u, o;
  if (i !== r) {
    for (var f = (u = i, o = 1 + (256 / i.length >> 0), new Array(o + 1).join(u)), h = [], c = 0; c < 256; c++) h[c] = c;
    var g = 0;
    for (c = 0; c < 256; c++) {
      var P = h[c];
      g = (g + P + f.charCodeAt(c)) % 256, h[c] = h[g], h[g] = P;
    }
    r = i, a = h;
  } else h = a;
  var A = e.length, L = 0, d = 0, x = "";
  for (c = 0; c < A; c++) d = (d + (P = h[L = (L + 1) % 256])) % 256, h[L] = h[d], h[d] = P, f = h[(h[L] + h[d]) % 256], x += String.fromCharCode(e.charCodeAt(c) ^ f);
  return x;
}
/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */
var ou = { print: 4, modify: 8, copy: 16, "annot-forms": 32 };
function qi(i, e, r, a) {
  this.v = 1, this.r = 2;
  var u = 192;
  i.forEach(function(h) {
    if (ou.perm !== void 0) throw new Error("Invalid permission: " + h);
    u += ou[h];
  }), this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";
  var o = (e + this.padding).substr(0, 32), f = (r + this.padding).substr(0, 32);
  this.O = this.processOwnerPassword(o, f), this.P = -(1 + (255 ^ u)), this.encryptionKey = Ls(o + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(a)).substr(0, 5), this.U = Ns(this.encryptionKey, this.padding);
}
function zi(i) {
  if (/[^\u0000-\u00ff]/.test(i)) throw new Error("Invalid PDF Name Object: " + i + ", Only accept ASCII characters.");
  for (var e = "", r = i.length, a = 0; a < r; a++) {
    var u = i.charCodeAt(a);
    u < 33 || u === 35 || u === 37 || u === 40 || u === 41 || u === 47 || u === 60 || u === 62 || u === 91 || u === 93 || u === 123 || u === 125 || u > 126 ? e += "#" + ("0" + u.toString(16)).slice(-2) : e += i[a];
  }
  return e;
}
function su(i) {
  if (xe(i) !== "object") throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
  var e = {};
  this.subscribe = function(r, a, u) {
    if (u = u || !1, typeof r != "string" || typeof a != "function" || typeof u != "boolean") throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
    e.hasOwnProperty(r) || (e[r] = {});
    var o = Math.random().toString(35);
    return e[r][o] = [a, !!u], o;
  }, this.unsubscribe = function(r) {
    for (var a in e) if (e[a][r]) return delete e[a][r], Object.keys(e[a]).length === 0 && delete e[a], !0;
    return !1;
  }, this.publish = function(r) {
    if (e.hasOwnProperty(r)) {
      var a = Array.prototype.slice.call(arguments, 1), u = [];
      for (var o in e[r]) {
        var f = e[r][o];
        try {
          f[0].apply(i, a);
        } catch (h) {
          Xt.console && Se.error("jsPDF PubSub Error", h.message, h);
        }
        f[1] && u.push(o);
      }
      u.length && u.forEach(this.unsubscribe);
    }
  }, this.getTopics = function() {
    return e;
  };
}
function Na(i) {
  if (!(this instanceof Na)) return new Na(i);
  var e = "opacity,stroke-opacity".split(",");
  for (var r in i) i.hasOwnProperty(r) && e.indexOf(r) >= 0 && (this[r] = i[r]);
  this.id = "", this.objectNumber = -1;
}
function Iu(i, e) {
  this.gState = i, this.matrix = e, this.id = "", this.objectNumber = -1;
}
function Wn(i, e, r, a, u) {
  if (!(this instanceof Wn)) return new Wn(i, e, r, a, u);
  this.type = i === "axial" ? 2 : 3, this.coords = e, this.colors = r, Iu.call(this, a, u);
}
function li(i, e, r, a, u) {
  if (!(this instanceof li)) return new li(i, e, r, a, u);
  this.boundingBox = i, this.xStep = e, this.yStep = r, this.stream = "", this.cloneIndex = 0, Iu.call(this, a, u);
}
function Yt(i) {
  var e, r = typeof arguments[0] == "string" ? arguments[0] : "p", a = arguments[1], u = arguments[2], o = arguments[3], f = [], h = 1, c = 16, g = "S", P = null;
  xe(i = i || {}) === "object" && (r = i.orientation, a = i.unit || a, u = i.format || u, o = i.compress || i.compressPdf || o, (P = i.encryption || null) !== null && (P.userPassword = P.userPassword || "", P.ownerPassword = P.ownerPassword || "", P.userPermissions = P.userPermissions || []), h = typeof i.userUnit == "number" ? Math.abs(i.userUnit) : 1, i.precision !== void 0 && (e = i.precision), i.floatPrecision !== void 0 && (c = i.floatPrecision), g = i.defaultPathOperation || "S"), f = i.filters || (o === !0 ? ["FlateEncode"] : f), a = a || "mm", r = ("" + (r || "P")).toLowerCase();
  var A = i.putOnlyUsedFonts || !1, L = {}, d = { internal: {}, __private__: {} };
  d.__private__.PubSub = su;
  var x = "1.3", F = d.__private__.getPdfVersion = function() {
    return x;
  };
  d.__private__.setPdfVersion = function(s) {
    x = s;
  };
  var E = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
  d.__private__.getPageFormats = function() {
    return E;
  };
  var v = d.__private__.getPageFormat = function(s) {
    return E[s];
  };
  u = u || "a4";
  var S = { COMPAT: "compat", ADVANCED: "advanced" }, C = S.COMPAT;
  function D() {
    this.saveGraphicsState(), Y(new Wt(Et, 0, 0, -Et, 0, Tn() * Et).toString() + " cm"), this.setFontSize(this.getFontSize() / Et), g = "n", C = S.ADVANCED;
  }
  function G() {
    this.restoreGraphicsState(), g = "S", C = S.COMPAT;
  }
  var $ = d.__private__.combineFontStyleAndFontWeight = function(s, w) {
    if (s == "bold" && w == "normal" || s == "bold" && w == 400 || s == "normal" && w == "italic" || s == "bold" && w == "italic") throw new Error("Invalid Combination of fontweight and fontstyle");
    return w && (s = w == 400 || w === "normal" ? s === "italic" ? "italic" : "normal" : w != 700 && w !== "bold" || s !== "normal" ? (w == 700 ? "bold" : w) + "" + s : "bold"), s;
  };
  d.advancedAPI = function(s) {
    var w = C === S.COMPAT;
    return w && D.call(this), typeof s != "function" || (s(this), w && G.call(this)), this;
  }, d.compatAPI = function(s) {
    var w = C === S.ADVANCED;
    return w && G.call(this), typeof s != "function" || (s(this), w && D.call(this)), this;
  }, d.isAdvancedAPI = function() {
    return C === S.ADVANCED;
  };
  var M, j = function(s) {
    if (C !== S.ADVANCED) throw new Error(s + " is only available in 'advanced' API mode. You need to call advancedAPI() first.");
  }, Z = d.roundToPrecision = d.__private__.roundToPrecision = function(s, w) {
    var H = e || w;
    if (isNaN(s) || isNaN(H)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
    return s.toFixed(H).replace(/0+$/, "");
  };
  M = d.hpf = d.__private__.hpf = typeof c == "number" ? function(s) {
    if (isNaN(s)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return Z(s, c);
  } : c === "smart" ? function(s) {
    if (isNaN(s)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return Z(s, s > -1 && s < 1 ? 16 : 5);
  } : function(s) {
    if (isNaN(s)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return Z(s, 16);
  };
  var Q = d.f2 = d.__private__.f2 = function(s) {
    if (isNaN(s)) throw new Error("Invalid argument passed to jsPDF.f2");
    return Z(s, 2);
  }, N = d.__private__.f3 = function(s) {
    if (isNaN(s)) throw new Error("Invalid argument passed to jsPDF.f3");
    return Z(s, 3);
  }, y = d.scale = d.__private__.scale = function(s) {
    if (isNaN(s)) throw new Error("Invalid argument passed to jsPDF.scale");
    return C === S.COMPAT ? s * Et : C === S.ADVANCED ? s : void 0;
  }, B = function(s) {
    return C === S.COMPAT ? Tn() - s : C === S.ADVANCED ? s : void 0;
  }, z = function(s) {
    return y(B(s));
  };
  d.__private__.setPrecision = d.setPrecision = function(s) {
    typeof parseInt(s, 10) == "number" && (e = parseInt(s, 10));
  };
  var lt, U = "00000000000000000000000000000000", W = d.__private__.getFileId = function() {
    return U;
  }, K = d.__private__.setFileId = function(s) {
    return U = s !== void 0 && /^[a-fA-F0-9]{32}$/.test(s) ? s.toUpperCase() : U.split("").map(function() {
      return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
    }).join(""), P !== null && (cr = new qi(P.userPermissions, P.userPassword, P.ownerPassword, U)), U;
  };
  d.setFileId = function(s) {
    return K(s), this;
  }, d.getFileId = function() {
    return W();
  };
  var J = d.__private__.convertDateToPDFDate = function(s) {
    var w = s.getTimezoneOffset(), H = w < 0 ? "+" : "-", tt = Math.floor(Math.abs(w / 60)), ut = Math.abs(w % 60), vt = [H, q(tt), "'", q(ut), "'"].join("");
    return ["D:", s.getFullYear(), q(s.getMonth() + 1), q(s.getDate()), q(s.getHours()), q(s.getMinutes()), q(s.getSeconds()), vt].join("");
  }, st = d.__private__.convertPDFDateToDate = function(s) {
    var w = parseInt(s.substr(2, 4), 10), H = parseInt(s.substr(6, 2), 10) - 1, tt = parseInt(s.substr(8, 2), 10), ut = parseInt(s.substr(10, 2), 10), vt = parseInt(s.substr(12, 2), 10), Lt = parseInt(s.substr(14, 2), 10);
    return new Date(w, H, tt, ut, vt, Lt, 0);
  }, gt = d.__private__.setCreationDate = function(s) {
    var w;
    if (s === void 0 && (s = /* @__PURE__ */ new Date()), s instanceof Date) w = J(s);
    else {
      if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(s)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
      w = s;
    }
    return lt = w;
  }, m = d.__private__.getCreationDate = function(s) {
    var w = lt;
    return s === "jsDate" && (w = st(lt)), w;
  };
  d.setCreationDate = function(s) {
    return gt(s), this;
  }, d.getCreationDate = function(s) {
    return m(s);
  };
  var O, q = d.__private__.padd2 = function(s) {
    return ("0" + parseInt(s)).slice(-2);
  }, V = d.__private__.padd2Hex = function(s) {
    return ("00" + (s = s.toString())).substr(s.length);
  }, X = 0, at = [], ft = [], dt = 0, _t = [], xt = [], Ot = !1, jt = ft, Gt = function() {
    X = 0, dt = 0, ft = [], at = [], _t = [], Br = me(), br = me();
  };
  d.__private__.setCustomOutputDestination = function(s) {
    Ot = !0, jt = s;
  };
  var mt = function(s) {
    Ot || (jt = s);
  };
  d.__private__.resetCustomOutputDestination = function() {
    Ot = !1, jt = ft;
  };
  var Y = d.__private__.out = function(s) {
    return s = s.toString(), dt += s.length + 1, jt.push(s), jt;
  }, Kt = d.__private__.write = function(s) {
    return Y(arguments.length === 1 ? s.toString() : Array.prototype.join.call(arguments, " "));
  }, Bt = d.__private__.getArrayBuffer = function(s) {
    for (var w = s.length, H = new ArrayBuffer(w), tt = new Uint8Array(H); w--; ) tt[w] = s.charCodeAt(w);
    return H;
  }, Nt = [["Helvetica", "helvetica", "normal", "WinAnsiEncoding"], ["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"], ["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"], ["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"], ["Courier", "courier", "normal", "WinAnsiEncoding"], ["Courier-Bold", "courier", "bold", "WinAnsiEncoding"], ["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"], ["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"], ["Times-Roman", "times", "normal", "WinAnsiEncoding"], ["Times-Bold", "times", "bold", "WinAnsiEncoding"], ["Times-Italic", "times", "italic", "WinAnsiEncoding"], ["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"], ["ZapfDingbats", "zapfdingbats", "normal", null], ["Symbol", "symbol", "normal", null]];
  d.__private__.getStandardFonts = function() {
    return Nt;
  };
  var Pt = i.fontSize || 16;
  d.__private__.setFontSize = d.setFontSize = function(s) {
    return Pt = C === S.ADVANCED ? s / Et : s, this;
  };
  var Tt, Ft = d.__private__.getFontSize = d.getFontSize = function() {
    return C === S.COMPAT ? Pt : Pt * Et;
  }, Ht = i.R2L || !1;
  d.__private__.setR2L = d.setR2L = function(s) {
    return Ht = s, this;
  }, d.__private__.getR2L = d.getR2L = function() {
    return Ht;
  };
  var $t, Zt = d.__private__.setZoomMode = function(s) {
    var w = [void 0, null, "fullwidth", "fullheight", "fullpage", "original"];
    if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(s)) Tt = s;
    else if (isNaN(s)) {
      if (w.indexOf(s) === -1) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + s + '" is not recognized.');
      Tt = s;
    } else Tt = parseInt(s, 10);
  };
  d.__private__.getZoomMode = function() {
    return Tt;
  };
  var te, ae = d.__private__.setPageMode = function(s) {
    if ([void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(s) == -1) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + s + '" is not recognized.');
    $t = s;
  };
  d.__private__.getPageMode = function() {
    return $t;
  };
  var fe = d.__private__.setLayoutMode = function(s) {
    if ([void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(s) == -1) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + s + '" is not recognized.');
    te = s;
  };
  d.__private__.getLayoutMode = function() {
    return te;
  }, d.__private__.setDisplayMode = d.setDisplayMode = function(s, w, H) {
    return Zt(s), fe(w), ae(H), this;
  };
  var Jt = { title: "", subject: "", author: "", keywords: "", creator: "" };
  d.__private__.getDocumentProperty = function(s) {
    if (Object.keys(Jt).indexOf(s) === -1) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
    return Jt[s];
  }, d.__private__.getDocumentProperties = function() {
    return Jt;
  }, d.__private__.setDocumentProperties = d.setProperties = d.setDocumentProperties = function(s) {
    for (var w in Jt) Jt.hasOwnProperty(w) && s[w] && (Jt[w] = s[w]);
    return this;
  }, d.__private__.setDocumentProperty = function(s, w) {
    if (Object.keys(Jt).indexOf(s) === -1) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
    return Jt[s] = w;
  };
  var oe, Et, Ge, ce, fr, be = {}, de = {}, ar = [], pe = {}, Xr = {}, Ce = {}, Ke = {}, Kr = null, Fe = 0, qt = [], ue = new su(d), vn = i.hotfixes || [], Ve = {}, Sr = {}, Tr = [], Wt = function s(w, H, tt, ut, vt, Lt) {
    if (!(this instanceof s)) return new s(w, H, tt, ut, vt, Lt);
    isNaN(w) && (w = 1), isNaN(H) && (H = 0), isNaN(tt) && (tt = 0), isNaN(ut) && (ut = 1), isNaN(vt) && (vt = 0), isNaN(Lt) && (Lt = 0), this._matrix = [w, H, tt, ut, vt, Lt];
  };
  Object.defineProperty(Wt.prototype, "sx", { get: function() {
    return this._matrix[0];
  }, set: function(s) {
    this._matrix[0] = s;
  } }), Object.defineProperty(Wt.prototype, "shy", { get: function() {
    return this._matrix[1];
  }, set: function(s) {
    this._matrix[1] = s;
  } }), Object.defineProperty(Wt.prototype, "shx", { get: function() {
    return this._matrix[2];
  }, set: function(s) {
    this._matrix[2] = s;
  } }), Object.defineProperty(Wt.prototype, "sy", { get: function() {
    return this._matrix[3];
  }, set: function(s) {
    this._matrix[3] = s;
  } }), Object.defineProperty(Wt.prototype, "tx", { get: function() {
    return this._matrix[4];
  }, set: function(s) {
    this._matrix[4] = s;
  } }), Object.defineProperty(Wt.prototype, "ty", { get: function() {
    return this._matrix[5];
  }, set: function(s) {
    this._matrix[5] = s;
  } }), Object.defineProperty(Wt.prototype, "a", { get: function() {
    return this._matrix[0];
  }, set: function(s) {
    this._matrix[0] = s;
  } }), Object.defineProperty(Wt.prototype, "b", { get: function() {
    return this._matrix[1];
  }, set: function(s) {
    this._matrix[1] = s;
  } }), Object.defineProperty(Wt.prototype, "c", { get: function() {
    return this._matrix[2];
  }, set: function(s) {
    this._matrix[2] = s;
  } }), Object.defineProperty(Wt.prototype, "d", { get: function() {
    return this._matrix[3];
  }, set: function(s) {
    this._matrix[3] = s;
  } }), Object.defineProperty(Wt.prototype, "e", { get: function() {
    return this._matrix[4];
  }, set: function(s) {
    this._matrix[4] = s;
  } }), Object.defineProperty(Wt.prototype, "f", { get: function() {
    return this._matrix[5];
  }, set: function(s) {
    this._matrix[5] = s;
  } }), Object.defineProperty(Wt.prototype, "rotation", { get: function() {
    return Math.atan2(this.shx, this.sx);
  } }), Object.defineProperty(Wt.prototype, "scaleX", { get: function() {
    return this.decompose().scale.sx;
  } }), Object.defineProperty(Wt.prototype, "scaleY", { get: function() {
    return this.decompose().scale.sy;
  } }), Object.defineProperty(Wt.prototype, "isIdentity", { get: function() {
    return this.sx === 1 && this.shy === 0 && this.shx === 0 && this.sy === 1 && this.tx === 0 && this.ty === 0;
  } }), Wt.prototype.join = function(s) {
    return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(M).join(s);
  }, Wt.prototype.multiply = function(s) {
    var w = s.sx * this.sx + s.shy * this.shx, H = s.sx * this.shy + s.shy * this.sy, tt = s.shx * this.sx + s.sy * this.shx, ut = s.shx * this.shy + s.sy * this.sy, vt = s.tx * this.sx + s.ty * this.shx + this.tx, Lt = s.tx * this.shy + s.ty * this.sy + this.ty;
    return new Wt(w, H, tt, ut, vt, Lt);
  }, Wt.prototype.decompose = function() {
    var s = this.sx, w = this.shy, H = this.shx, tt = this.sy, ut = this.tx, vt = this.ty, Lt = Math.sqrt(s * s + w * w), Dt = (s /= Lt) * H + (w /= Lt) * tt;
    H -= s * Dt, tt -= w * Dt;
    var Ut = Math.sqrt(H * H + tt * tt);
    return Dt /= Ut, s * (tt /= Ut) < w * (H /= Ut) && (s = -s, w = -w, Dt = -Dt, Lt = -Lt), { scale: new Wt(Lt, 0, 0, Ut, 0, 0), translate: new Wt(1, 0, 0, 1, ut, vt), rotate: new Wt(s, w, -w, s, 0, 0), skew: new Wt(1, 0, Dt, 1, 0, 0) };
  }, Wt.prototype.toString = function(s) {
    return this.join(" ");
  }, Wt.prototype.inversed = function() {
    var s = this.sx, w = this.shy, H = this.shx, tt = this.sy, ut = this.tx, vt = this.ty, Lt = 1 / (s * tt - w * H), Dt = tt * Lt, Ut = -w * Lt, ne = -H * Lt, ee = s * Lt;
    return new Wt(Dt, Ut, ne, ee, -Dt * ut - ne * vt, -Ut * ut - ee * vt);
  }, Wt.prototype.applyToPoint = function(s) {
    var w = s.x * this.sx + s.y * this.shx + this.tx, H = s.x * this.shy + s.y * this.sy + this.ty;
    return new Li(w, H);
  }, Wt.prototype.applyToRectangle = function(s) {
    var w = this.applyToPoint(s), H = this.applyToPoint(new Li(s.x + s.w, s.y + s.h));
    return new $i(w.x, w.y, H.x - w.x, H.y - w.y);
  }, Wt.prototype.clone = function() {
    var s = this.sx, w = this.shy, H = this.shx, tt = this.sy, ut = this.tx, vt = this.ty;
    return new Wt(s, w, H, tt, ut, vt);
  }, d.Matrix = Wt;
  var Ir = d.matrixMult = function(s, w) {
    return w.multiply(s);
  }, vr = new Wt(1, 0, 0, 1, 0, 0);
  d.unitMatrix = d.identityMatrix = vr;
  var Qe = function(s, w) {
    if (!Xr[s]) {
      var H = (w instanceof Wn ? "Sh" : "P") + (Object.keys(pe).length + 1).toString(10);
      w.id = H, Xr[s] = H, pe[H] = w, ue.publish("addPattern", w);
    }
  };
  d.ShadingPattern = Wn, d.TilingPattern = li, d.addShadingPattern = function(s, w) {
    return j("addShadingPattern()"), Qe(s, w), this;
  }, d.beginTilingPattern = function(s) {
    j("beginTilingPattern()"), qa(s.boundingBox[0], s.boundingBox[1], s.boundingBox[2] - s.boundingBox[0], s.boundingBox[3] - s.boundingBox[1], s.matrix);
  }, d.endTilingPattern = function(s, w) {
    j("endTilingPattern()"), w.stream = xt[O].join(`
`), Qe(s, w), ue.publish("endTilingPattern", w), Tr.pop().restore();
  };
  var Me = d.__private__.newObject = function() {
    var s = me();
    return tr(s, !0), s;
  }, me = d.__private__.newObjectDeferred = function() {
    return X++, at[X] = function() {
      return dt;
    }, X;
  }, tr = function(s, w) {
    return w = typeof w == "boolean" && w, at[s] = dt, w && Y(s + " 0 obj"), s;
  }, bn = d.__private__.newAdditionalObject = function() {
    var s = { objId: me(), content: "" };
    return _t.push(s), s;
  }, Br = me(), br = me(), or = d.__private__.decodeColorString = function(s) {
    var w = s.split(" ");
    if (w.length !== 2 || w[1] !== "g" && w[1] !== "G")
      w.length === 5 && (w[4] === "k" || w[4] === "K") && (w = [(1 - w[0]) * (1 - w[3]), (1 - w[1]) * (1 - w[3]), (1 - w[2]) * (1 - w[3]), "r"]);
    else {
      var H = parseFloat(w[0]);
      w = [H, H, H, "r"];
    }
    for (var tt = "#", ut = 0; ut < 3; ut++) tt += ("0" + Math.floor(255 * parseFloat(w[ut])).toString(16)).slice(-2);
    return tt;
  }, Re = d.__private__.encodeColorString = function(s) {
    var w;
    typeof s == "string" && (s = { ch1: s });
    var H = s.ch1, tt = s.ch2, ut = s.ch3, vt = s.ch4, Lt = s.pdfColorType === "draw" ? ["G", "RG", "K"] : ["g", "rg", "k"];
    if (typeof H == "string" && H.charAt(0) !== "#") {
      var Dt = new Fu(H);
      if (Dt.ok) H = Dt.toHex();
      else if (!/^\d*\.?\d*$/.test(H)) throw new Error('Invalid color "' + H + '" passed to jsPDF.encodeColorString.');
    }
    if (typeof H == "string" && /^#[0-9A-Fa-f]{3}$/.test(H) && (H = "#" + H[1] + H[1] + H[2] + H[2] + H[3] + H[3]), typeof H == "string" && /^#[0-9A-Fa-f]{6}$/.test(H)) {
      var Ut = parseInt(H.substr(1), 16);
      H = Ut >> 16 & 255, tt = Ut >> 8 & 255, ut = 255 & Ut;
    }
    if (tt === void 0 || vt === void 0 && H === tt && tt === ut) if (typeof H == "string") w = H + " " + Lt[0];
    else switch (s.precision) {
      case 2:
        w = Q(H / 255) + " " + Lt[0];
        break;
      case 3:
      default:
        w = N(H / 255) + " " + Lt[0];
    }
    else if (vt === void 0 || xe(vt) === "object") {
      if (vt && !isNaN(vt.a) && vt.a === 0) return w = ["1.", "1.", "1.", Lt[1]].join(" ");
      if (typeof H == "string") w = [H, tt, ut, Lt[1]].join(" ");
      else switch (s.precision) {
        case 2:
          w = [Q(H / 255), Q(tt / 255), Q(ut / 255), Lt[1]].join(" ");
          break;
        default:
        case 3:
          w = [N(H / 255), N(tt / 255), N(ut / 255), Lt[1]].join(" ");
      }
    } else if (typeof H == "string") w = [H, tt, ut, vt, Lt[2]].join(" ");
    else switch (s.precision) {
      case 2:
        w = [Q(H), Q(tt), Q(ut), Q(vt), Lt[2]].join(" ");
        break;
      case 3:
      default:
        w = [N(H), N(tt), N(ut), N(vt), Lt[2]].join(" ");
    }
    return w;
  }, Er = d.__private__.getFilters = function() {
    return f;
  }, yr = d.__private__.putStream = function(s) {
    var w = (s = s || {}).data || "", H = s.filters || Er(), tt = s.alreadyAppliedFilters || [], ut = s.addLength1 || !1, vt = w.length, Lt = s.objectId, Dt = function(hr) {
      return hr;
    };
    if (P !== null && Lt === void 0) throw new Error("ObjectId must be passed to putStream for file encryption");
    P !== null && (Dt = cr.encryptor(Lt, 0));
    var Ut = {};
    H === !0 && (H = ["FlateEncode"]);
    var ne = s.additionalKeyValues || [], ee = (Ut = Yt.API.processDataByFilters !== void 0 ? Yt.API.processDataByFilters(w, H) : { data: w, reverseChain: [] }).reverseChain + (Array.isArray(tt) ? tt.join(" ") : tt.toString());
    if (Ut.data.length !== 0 && (ne.push({ key: "Length", value: Ut.data.length }), ut === !0 && ne.push({ key: "Length1", value: vt })), ee.length != 0) if (ee.split("/").length - 1 == 1) ne.push({ key: "Filter", value: ee });
    else {
      ne.push({ key: "Filter", value: "[" + ee + "]" });
      for (var ge = 0; ge < ne.length; ge += 1) if (ne[ge].key === "DecodeParms") {
        for (var Ie = [], Oe = 0; Oe < Ut.reverseChain.split("/").length - 1; Oe += 1) Ie.push("null");
        Ie.push(ne[ge].value), ne[ge].value = "[" + Ie.join(" ") + "]";
      }
    }
    Y("<<");
    for (var Ye = 0; Ye < ne.length; Ye++) Y("/" + ne[Ye].key + " " + ne[Ye].value);
    Y(">>"), Ut.data.length !== 0 && (Y("stream"), Y(Dt(Ut.data)), Y("endstream"));
  }, Or = d.__private__.putPage = function(s) {
    var w = s.number, H = s.data, tt = s.objId, ut = s.contentsObjId;
    tr(tt, !0), Y("<</Type /Page"), Y("/Parent " + s.rootDictionaryObjId + " 0 R"), Y("/Resources " + s.resourceDictionaryObjId + " 0 R"), Y("/MediaBox [" + parseFloat(M(s.mediaBox.bottomLeftX)) + " " + parseFloat(M(s.mediaBox.bottomLeftY)) + " " + M(s.mediaBox.topRightX) + " " + M(s.mediaBox.topRightY) + "]"), s.cropBox !== null && Y("/CropBox [" + M(s.cropBox.bottomLeftX) + " " + M(s.cropBox.bottomLeftY) + " " + M(s.cropBox.topRightX) + " " + M(s.cropBox.topRightY) + "]"), s.bleedBox !== null && Y("/BleedBox [" + M(s.bleedBox.bottomLeftX) + " " + M(s.bleedBox.bottomLeftY) + " " + M(s.bleedBox.topRightX) + " " + M(s.bleedBox.topRightY) + "]"), s.trimBox !== null && Y("/TrimBox [" + M(s.trimBox.bottomLeftX) + " " + M(s.trimBox.bottomLeftY) + " " + M(s.trimBox.topRightX) + " " + M(s.trimBox.topRightY) + "]"), s.artBox !== null && Y("/ArtBox [" + M(s.artBox.bottomLeftX) + " " + M(s.artBox.bottomLeftY) + " " + M(s.artBox.topRightX) + " " + M(s.artBox.topRightY) + "]"), typeof s.userUnit == "number" && s.userUnit !== 1 && Y("/UserUnit " + s.userUnit), ue.publish("putPage", { objId: tt, pageContext: qt[w], pageNumber: w, page: H }), Y("/Contents " + ut + " 0 R"), Y(">>"), Y("endobj");
    var vt = H.join(`
`);
    return C === S.ADVANCED && (vt += `
Q`), tr(ut, !0), yr({ data: vt, filters: Er(), objectId: ut }), Y("endobj"), tt;
  }, ln = d.__private__.putPages = function() {
    var s, w, H = [];
    for (s = 1; s <= Fe; s++) qt[s].objId = me(), qt[s].contentsObjId = me();
    for (s = 1; s <= Fe; s++) H.push(Or({ number: s, data: xt[s], objId: qt[s].objId, contentsObjId: qt[s].contentsObjId, mediaBox: qt[s].mediaBox, cropBox: qt[s].cropBox, bleedBox: qt[s].bleedBox, trimBox: qt[s].trimBox, artBox: qt[s].artBox, userUnit: qt[s].userUnit, rootDictionaryObjId: Br, resourceDictionaryObjId: br }));
    tr(Br, !0), Y("<</Type /Pages");
    var tt = "/Kids [";
    for (w = 0; w < Fe; w++) tt += H[w] + " 0 R ";
    Y(tt + "]"), Y("/Count " + Fe), Y(">>"), Y("endobj"), ue.publish("postPutPages");
  }, kn = function(s) {
    ue.publish("putFont", { font: s, out: Y, newObject: Me, putStream: yr }), s.isAlreadyPutted !== !0 && (s.objectNumber = Me(), Y("<<"), Y("/Type /Font"), Y("/BaseFont /" + zi(s.postScriptName)), Y("/Subtype /Type1"), typeof s.encoding == "string" && Y("/Encoding /" + s.encoding), Y("/FirstChar 32"), Y("/LastChar 255"), Y(">>"), Y("endobj"));
  }, zt = function() {
    for (var s in be) be.hasOwnProperty(s) && (A === !1 || A === !0 && L.hasOwnProperty(s)) && kn(be[s]);
  }, et = function(s) {
    s.objectNumber = Me();
    var w = [];
    w.push({ key: "Type", value: "/XObject" }), w.push({ key: "Subtype", value: "/Form" }), w.push({ key: "BBox", value: "[" + [M(s.x), M(s.y), M(s.x + s.width), M(s.y + s.height)].join(" ") + "]" }), w.push({ key: "Matrix", value: "[" + s.matrix.toString() + "]" });
    var H = s.pages[1].join(`
`);
    yr({ data: H, additionalKeyValues: w, objectId: s.objectNumber }), Y("endobj");
  }, St = function() {
    for (var s in Ve) Ve.hasOwnProperty(s) && et(Ve[s]);
  }, kt = function(s, w) {
    var H, tt = [], ut = 1 / (w - 1);
    for (H = 0; H < 1; H += ut) tt.push(H);
    if (tt.push(1), s[0].offset != 0) {
      var vt = { offset: 0, color: s[0].color };
      s.unshift(vt);
    }
    if (s[s.length - 1].offset != 1) {
      var Lt = { offset: 1, color: s[s.length - 1].color };
      s.push(Lt);
    }
    for (var Dt = "", Ut = 0, ne = 0; ne < tt.length; ne++) {
      for (H = tt[ne]; H > s[Ut + 1].offset; ) Ut++;
      var ee = s[Ut].offset, ge = (H - ee) / (s[Ut + 1].offset - ee), Ie = s[Ut].color, Oe = s[Ut + 1].color;
      Dt += V(Math.round((1 - ge) * Ie[0] + ge * Oe[0]).toString(16)) + V(Math.round((1 - ge) * Ie[1] + ge * Oe[1]).toString(16)) + V(Math.round((1 - ge) * Ie[2] + ge * Oe[2]).toString(16));
    }
    return Dt.trim();
  }, he = function(s, w) {
    w || (w = 21);
    var H = Me(), tt = kt(s.colors, w), ut = [];
    ut.push({ key: "FunctionType", value: "0" }), ut.push({ key: "Domain", value: "[0.0 1.0]" }), ut.push({ key: "Size", value: "[" + w + "]" }), ut.push({ key: "BitsPerSample", value: "8" }), ut.push({ key: "Range", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), ut.push({ key: "Decode", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), yr({ data: tt, additionalKeyValues: ut, alreadyAppliedFilters: ["/ASCIIHexDecode"], objectId: H }), Y("endobj"), s.objectNumber = Me(), Y("<< /ShadingType " + s.type), Y("/ColorSpace /DeviceRGB");
    var vt = "/Coords [" + M(parseFloat(s.coords[0])) + " " + M(parseFloat(s.coords[1])) + " ";
    s.type === 2 ? vt += M(parseFloat(s.coords[2])) + " " + M(parseFloat(s.coords[3])) : vt += M(parseFloat(s.coords[2])) + " " + M(parseFloat(s.coords[3])) + " " + M(parseFloat(s.coords[4])) + " " + M(parseFloat(s.coords[5])), Y(vt += "]"), s.matrix && Y("/Matrix [" + s.matrix.toString() + "]"), Y("/Function " + H + " 0 R"), Y("/Extend [true true]"), Y(">>"), Y("endobj");
  }, er = function(s, w) {
    var H = me(), tt = Me();
    w.push({ resourcesOid: H, objectOid: tt }), s.objectNumber = tt;
    var ut = [];
    ut.push({ key: "Type", value: "/Pattern" }), ut.push({ key: "PatternType", value: "1" }), ut.push({ key: "PaintType", value: "1" }), ut.push({ key: "TilingType", value: "1" }), ut.push({ key: "BBox", value: "[" + s.boundingBox.map(M).join(" ") + "]" }), ut.push({ key: "XStep", value: M(s.xStep) }), ut.push({ key: "YStep", value: M(s.yStep) }), ut.push({ key: "Resources", value: H + " 0 R" }), s.matrix && ut.push({ key: "Matrix", value: "[" + s.matrix.toString() + "]" }), yr({ data: s.stream, additionalKeyValues: ut, objectId: s.objectNumber }), Y("endobj");
  }, Te = function(s) {
    var w;
    for (w in pe) pe.hasOwnProperty(w) && (pe[w] instanceof Wn ? he(pe[w]) : pe[w] instanceof li && er(pe[w], s));
  }, Ee = function(s) {
    for (var w in s.objectNumber = Me(), Y("<<"), s) switch (w) {
      case "opacity":
        Y("/ca " + Q(s[w]));
        break;
      case "stroke-opacity":
        Y("/CA " + Q(s[w]));
    }
    Y(">>"), Y("endobj");
  }, $r = function() {
    var s;
    for (s in Ce) Ce.hasOwnProperty(s) && Ee(Ce[s]);
  }, ke = function() {
    for (var s in Y("/XObject <<"), Ve) Ve.hasOwnProperty(s) && Ve[s].objectNumber >= 0 && Y("/" + s + " " + Ve[s].objectNumber + " 0 R");
    ue.publish("putXobjectDict"), Y(">>");
  }, Xn = function() {
    cr.oid = Me(), Y("<<"), Y("/Filter /Standard"), Y("/V " + cr.v), Y("/R " + cr.r), Y("/U <" + cr.toHexString(cr.U) + ">"), Y("/O <" + cr.toHexString(cr.O) + ">"), Y("/P " + cr.P), Y(">>"), Y("endobj");
  }, Kn = function() {
    for (var s in Y("/Font <<"), be) be.hasOwnProperty(s) && (A === !1 || A === !0 && L.hasOwnProperty(s)) && Y("/" + s + " " + be[s].objectNumber + " 0 R");
    Y(">>");
  }, Sa = function() {
    if (Object.keys(pe).length > 0) {
      for (var s in Y("/Shading <<"), pe) pe.hasOwnProperty(s) && pe[s] instanceof Wn && pe[s].objectNumber >= 0 && Y("/" + s + " " + pe[s].objectNumber + " 0 R");
      ue.publish("putShadingPatternDict"), Y(">>");
    }
  }, gi = function(s) {
    if (Object.keys(pe).length > 0) {
      for (var w in Y("/Pattern <<"), pe) pe.hasOwnProperty(w) && pe[w] instanceof d.TilingPattern && pe[w].objectNumber >= 0 && pe[w].objectNumber < s && Y("/" + w + " " + pe[w].objectNumber + " 0 R");
      ue.publish("putTilingPatternDict"), Y(">>");
    }
  }, xo = function() {
    if (Object.keys(Ce).length > 0) {
      var s;
      for (s in Y("/ExtGState <<"), Ce) Ce.hasOwnProperty(s) && Ce[s].objectNumber >= 0 && Y("/" + s + " " + Ce[s].objectNumber + " 0 R");
      ue.publish("putGStateDict"), Y(">>");
    }
  }, Be = function(s) {
    tr(s.resourcesOid, !0), Y("<<"), Y("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), Kn(), Sa(), gi(s.objectOid), xo(), ke(), Y(">>"), Y("endobj");
  }, xa = function() {
    var s = [];
    zt(), $r(), St(), Te(s), ue.publish("putResources"), s.forEach(Be), Be({ resourcesOid: br, objectOid: Number.MAX_SAFE_INTEGER }), ue.publish("postPutResources");
  }, _a = function() {
    ue.publish("putAdditionalObjects");
    for (var s = 0; s < _t.length; s++) {
      var w = _t[s];
      tr(w.objId, !0), Y(w.content), Y("endobj");
    }
    ue.publish("postPutAdditionalObjects");
  }, Pa = function(s) {
    de[s.fontName] = de[s.fontName] || {}, de[s.fontName][s.fontStyle] = s.id;
  }, Hi = function(s, w, H, tt, ut) {
    var vt = { id: "F" + (Object.keys(be).length + 1).toString(10), postScriptName: s, fontName: w, fontStyle: H, encoding: tt, isStandardFont: ut || !1, metadata: {} };
    return ue.publish("addFont", { font: vt, instance: this }), be[vt.id] = vt, Pa(vt), vt.id;
  }, _o = function(s) {
    for (var w = 0, H = Nt.length; w < H; w++) {
      var tt = Hi.call(this, s[w][0], s[w][1], s[w][2], Nt[w][3], !0);
      A === !1 && (L[tt] = !0);
      var ut = s[w][0].split("-");
      Pa({ id: tt, fontName: ut[0], fontStyle: ut[1] || "" });
    }
    ue.publish("addFonts", { fonts: be, dictionary: de });
  }, Zr = function(s) {
    return s.foo = function() {
      try {
        return s.apply(this, arguments);
      } catch (tt) {
        var w = tt.stack || "";
        ~w.indexOf(" at ") && (w = w.split(" at ")[1]);
        var H = "Error in function " + w.split(`
`)[0].split("<")[0] + ": " + tt.message;
        if (!Xt.console) throw new Error(H);
        Xt.console.error(H, tt), Xt.alert && alert(H);
      }
    }, s.foo.bar = s, s.foo;
  }, mi = function(s, w) {
    var H, tt, ut, vt, Lt, Dt, Ut, ne, ee;
    if (ut = (w = w || {}).sourceEncoding || "Unicode", Lt = w.outputEncoding, (w.autoencode || Lt) && be[oe].metadata && be[oe].metadata[ut] && be[oe].metadata[ut].encoding && (vt = be[oe].metadata[ut].encoding, !Lt && be[oe].encoding && (Lt = be[oe].encoding), !Lt && vt.codePages && (Lt = vt.codePages[0]), typeof Lt == "string" && (Lt = vt[Lt]), Lt)) {
      for (Ut = !1, Dt = [], H = 0, tt = s.length; H < tt; H++) (ne = Lt[s.charCodeAt(H)]) ? Dt.push(String.fromCharCode(ne)) : Dt.push(s[H]), Dt[H].charCodeAt(0) >> 8 && (Ut = !0);
      s = Dt.join("");
    }
    for (H = s.length; Ut === void 0 && H !== 0; ) s.charCodeAt(H - 1) >> 8 && (Ut = !0), H--;
    if (!Ut) return s;
    for (Dt = w.noBOM ? [] : [254, 255], H = 0, tt = s.length; H < tt; H++) {
      if ((ee = (ne = s.charCodeAt(H)) >> 8) >> 8) throw new Error("Character at position " + H + " of string '" + s + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
      Dt.push(ee), Dt.push(ne - (ee << 8));
    }
    return String.fromCharCode.apply(void 0, Dt);
  }, xr = d.__private__.pdfEscape = d.pdfEscape = function(s, w) {
    return mi(s, w).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  }, Ui = d.__private__.beginPage = function(s) {
    xt[++Fe] = [], qt[Fe] = { objId: 0, contentsObjId: 0, userUnit: Number(h), artBox: null, bleedBox: null, cropBox: null, trimBox: null, mediaBox: { bottomLeftX: 0, bottomLeftY: 0, topRightX: Number(s[0]), topRightY: Number(s[1]) } }, Ca(Fe), mt(xt[O]);
  }, ka = function(s, w) {
    var H, tt, ut;
    switch (r = w || r, typeof s == "string" && (H = v(s.toLowerCase()), Array.isArray(H) && (tt = H[0], ut = H[1])), Array.isArray(s) && (tt = s[0] * Et, ut = s[1] * Et), isNaN(tt) && (tt = u[0], ut = u[1]), (tt > 14400 || ut > 14400) && (Se.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), tt = Math.min(14400, tt), ut = Math.min(14400, ut)), u = [tt, ut], r.substr(0, 1)) {
      case "l":
        ut > tt && (u = [ut, tt]);
        break;
      case "p":
        tt > ut && (u = [ut, tt]);
    }
    Ui(u), ja(Yi), Y(Qr), Xi !== 0 && Y(Xi + " J"), Ki !== 0 && Y(Ki + " j"), ue.publish("addPage", { pageNumber: Fe });
  }, Po = function(s) {
    s > 0 && s <= Fe && (xt.splice(s, 1), qt.splice(s, 1), Fe--, O > Fe && (O = Fe), this.setPage(O));
  }, Ca = function(s) {
    s > 0 && s <= Fe && (O = s);
  }, ko = d.__private__.getNumberOfPages = d.getNumberOfPages = function() {
    return xt.length - 1;
  }, Fa = function(s, w, H) {
    var tt, ut = void 0;
    return H = H || {}, s = s !== void 0 ? s : be[oe].fontName, w = w !== void 0 ? w : be[oe].fontStyle, tt = s.toLowerCase(), de[tt] !== void 0 && de[tt][w] !== void 0 ? ut = de[tt][w] : de[s] !== void 0 && de[s][w] !== void 0 ? ut = de[s][w] : H.disableWarning === !1 && Se.warn("Unable to look up font label for font '" + s + "', '" + w + "'. Refer to getFontList() for available fonts."), ut || H.noFallback || (ut = de.times[w]) == null && (ut = de.times.normal), ut;
  }, Co = d.__private__.putInfo = function() {
    var s = Me(), w = function(tt) {
      return tt;
    };
    for (var H in P !== null && (w = cr.encryptor(s, 0)), Y("<<"), Y("/Producer (" + xr(w("jsPDF " + Yt.version)) + ")"), Jt) Jt.hasOwnProperty(H) && Jt[H] && Y("/" + H.substr(0, 1).toUpperCase() + H.substr(1) + " (" + xr(w(Jt[H])) + ")");
    Y("/CreationDate (" + xr(w(lt)) + ")"), Y(">>"), Y("endobj");
  }, Wi = d.__private__.putCatalog = function(s) {
    var w = (s = s || {}).rootDictionaryObjId || Br;
    switch (Me(), Y("<<"), Y("/Type /Catalog"), Y("/Pages " + w + " 0 R"), Tt || (Tt = "fullwidth"), Tt) {
      case "fullwidth":
        Y("/OpenAction [3 0 R /FitH null]");
        break;
      case "fullheight":
        Y("/OpenAction [3 0 R /FitV null]");
        break;
      case "fullpage":
        Y("/OpenAction [3 0 R /Fit]");
        break;
      case "original":
        Y("/OpenAction [3 0 R /XYZ null null 1]");
        break;
      default:
        var H = "" + Tt;
        H.substr(H.length - 1) === "%" && (Tt = parseInt(Tt) / 100), typeof Tt == "number" && Y("/OpenAction [3 0 R /XYZ null null " + Q(Tt) + "]");
    }
    switch (te || (te = "continuous"), te) {
      case "continuous":
        Y("/PageLayout /OneColumn");
        break;
      case "single":
        Y("/PageLayout /SinglePage");
        break;
      case "two":
      case "twoleft":
        Y("/PageLayout /TwoColumnLeft");
        break;
      case "tworight":
        Y("/PageLayout /TwoColumnRight");
    }
    $t && Y("/PageMode /" + $t), ue.publish("putCatalog"), Y(">>"), Y("endobj");
  }, Fo = d.__private__.putTrailer = function() {
    Y("trailer"), Y("<<"), Y("/Size " + (X + 1)), Y("/Root " + X + " 0 R"), Y("/Info " + (X - 1) + " 0 R"), P !== null && Y("/Encrypt " + cr.oid + " 0 R"), Y("/ID [ <" + U + "> <" + U + "> ]"), Y(">>");
  }, To = d.__private__.putHeader = function() {
    Y("%PDF-" + x), Y("%ºß¬à");
  }, Io = d.__private__.putXRef = function() {
    var s = "0000000000";
    Y("xref"), Y("0 " + (X + 1)), Y("0000000000 65535 f ");
    for (var w = 1; w <= X; w++)
      typeof at[w] == "function" ? Y((s + at[w]()).slice(-10) + " 00000 n ") : at[w] !== void 0 ? Y((s + at[w]).slice(-10) + " 00000 n ") : Y("0000000000 00000 n ");
  }, yn = d.__private__.buildDocument = function() {
    Gt(), mt(ft), ue.publish("buildDocument"), To(), ln(), _a(), xa(), P !== null && Xn(), Co(), Wi();
    var s = dt;
    return Io(), Fo(), Y("startxref"), Y("" + s), Y("%%EOF"), mt(xt[O]), ft.join(`
`);
  }, vi = d.__private__.getBlob = function(s) {
    return new Blob([Bt(s)], { type: "application/pdf" });
  }, bi = d.output = d.__private__.output = Zr(function(s, w) {
    switch (typeof (w = w || {}) == "string" ? w = { filename: w } : w.filename = w.filename || "generated.pdf", s) {
      case void 0:
        return yn();
      case "save":
        d.save(w.filename);
        break;
      case "arraybuffer":
        return Bt(yn());
      case "blob":
        return vi(yn());
      case "bloburi":
      case "bloburl":
        if (Xt.URL !== void 0 && typeof Xt.URL.createObjectURL == "function") return Xt.URL && Xt.URL.createObjectURL(vi(yn())) || void 0;
        Se.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
        break;
      case "datauristring":
      case "dataurlstring":
        var H = "", tt = yn();
        try {
          H = As(tt);
        } catch {
          H = As(unescape(encodeURIComponent(tt)));
        }
        return "data:application/pdf;filename=" + w.filename + ";base64," + H;
      case "pdfobjectnewwindow":
        if (Object.prototype.toString.call(Xt) === "[object Window]") {
          var ut = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js", vt = ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';
          w.pdfObjectUrl && (ut = w.pdfObjectUrl, vt = "");
          var Lt = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + ut + '"' + vt + '><\/script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(w) + ");<\/script></body></html>", Dt = Xt.open();
          return Dt !== null && Dt.document.write(Lt), Dt;
        }
        throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
      case "pdfjsnewwindow":
        if (Object.prototype.toString.call(Xt) === "[object Window]") {
          var Ut = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (w.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + w.filename + '" width="500px" height="400px" /></body></html>', ne = Xt.open();
          if (ne !== null) {
            ne.document.write(Ut);
            var ee = this;
            ne.document.documentElement.querySelector("#pdfViewer").onload = function() {
              ne.document.title = w.filename, ne.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(ee.output("bloburl"));
            };
          }
          return ne;
        }
        throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
      case "dataurlnewwindow":
        if (Object.prototype.toString.call(Xt) !== "[object Window]") throw new Error("The option dataurlnewwindow just works in a browser-environment.");
        var ge = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", w) + '"></iframe></body></html>', Ie = Xt.open();
        if (Ie !== null && (Ie.document.write(ge), Ie.document.title = w.filename), Ie || typeof safari > "u") return Ie;
        break;
      case "datauri":
      case "dataurl":
        return Xt.document.location.href = this.output("datauristring", w);
      default:
        return null;
    }
  }), Ta = function(s) {
    return Array.isArray(vn) === !0 && vn.indexOf(s) > -1;
  };
  switch (a) {
    case "pt":
      Et = 1;
      break;
    case "mm":
      Et = 72 / 25.4;
      break;
    case "cm":
      Et = 72 / 2.54;
      break;
    case "in":
      Et = 72;
      break;
    case "px":
      Et = Ta("px_scaling") == 1 ? 0.75 : 96 / 72;
      break;
    case "pc":
    case "em":
      Et = 12;
      break;
    case "ex":
      Et = 6;
      break;
    default:
      if (typeof a != "number") throw new Error("Invalid unit: " + a);
      Et = a;
  }
  var cr = null;
  gt(), K();
  var Eo = function(s) {
    return P !== null ? cr.encryptor(s, 0) : function(w) {
      return w;
    };
  }, Ia = d.__private__.getPageInfo = d.getPageInfo = function(s) {
    if (isNaN(s) || s % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
    return { objId: qt[s].objId, pageNumber: s, pageContext: qt[s] };
  }, Qt = d.__private__.getPageInfoByObjId = function(s) {
    if (isNaN(s) || s % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
    for (var w in qt) if (qt[w].objId === s) break;
    return Ia(w);
  }, Oo = d.__private__.getCurrentPageInfo = d.getCurrentPageInfo = function() {
    return { objId: qt[O].objId, pageNumber: O, pageContext: qt[O] };
  };
  d.addPage = function() {
    return ka.apply(this, arguments), this;
  }, d.setPage = function() {
    return Ca.apply(this, arguments), mt.call(this, xt[O]), this;
  }, d.insertPage = function(s) {
    return this.addPage(), this.movePage(O, s), this;
  }, d.movePage = function(s, w) {
    var H, tt;
    if (s > w) {
      H = xt[s], tt = qt[s];
      for (var ut = s; ut > w; ut--) xt[ut] = xt[ut - 1], qt[ut] = qt[ut - 1];
      xt[w] = H, qt[w] = tt, this.setPage(w);
    } else if (s < w) {
      H = xt[s], tt = qt[s];
      for (var vt = s; vt < w; vt++) xt[vt] = xt[vt + 1], qt[vt] = qt[vt + 1];
      xt[w] = H, qt[w] = tt, this.setPage(w);
    }
    return this;
  }, d.deletePage = function() {
    return Po.apply(this, arguments), this;
  }, d.__private__.text = d.text = function(s, w, H, tt, ut) {
    var vt, Lt, Dt, Ut, ne, ee, ge, Ie, Oe, Ye = (tt = tt || {}).scope || this;
    if (typeof s == "number" && typeof w == "number" && (typeof H == "string" || Array.isArray(H))) {
      var hr = H;
      H = w, w = s, s = hr;
    }
    if (arguments[3] instanceof Wt ? (j("The transform parameter of text() with a Matrix value"), Oe = ut) : (Dt = arguments[4], Ut = arguments[5], xe(ge = arguments[3]) === "object" && ge !== null || (typeof Dt == "string" && (Ut = Dt, Dt = null), typeof ge == "string" && (Ut = ge, ge = null), typeof ge == "number" && (Dt = ge, ge = null), tt = { flags: ge, angle: Dt, align: Ut })), isNaN(w) || isNaN(H) || s == null) throw new Error("Invalid arguments passed to jsPDF.text");
    if (s.length === 0) return Ye;
    var rr = "", tn = !1, jr = typeof tt.lineHeightFactor == "number" ? tt.lineHeightFactor : Zn, hn = Ye.internal.scaleFactor;
    function za(_e) {
      return _e = _e.split("	").join(Array(tt.TabLen || 9).join(" ")), xr(_e, ge);
    }
    function ea(_e) {
      for (var Pe, ze = _e.concat(), $e = [], Sn = ze.length; Sn--; ) typeof (Pe = ze.shift()) == "string" ? $e.push(Pe) : Array.isArray(_e) && (Pe.length === 1 || Pe[1] === void 0 && Pe[2] === void 0) ? $e.push(Pe[0]) : $e.push([Pe[0], Pe[1], Pe[2]]);
      return $e;
    }
    function ra(_e, Pe) {
      var ze;
      if (typeof _e == "string") ze = Pe(_e)[0];
      else if (Array.isArray(_e)) {
        for (var $e, Sn, fa = _e.concat(), Ei = [], Va = fa.length; Va--; ) typeof ($e = fa.shift()) == "string" ? Ei.push(Pe($e)[0]) : Array.isArray($e) && typeof $e[0] == "string" && (Sn = Pe($e[0], $e[1], $e[2]), Ei.push([Sn[0], Sn[1], Sn[2]]));
        ze = Ei;
      }
      return ze;
    }
    var Si = !1, na = !0;
    if (typeof s == "string") Si = !0;
    else if (Array.isArray(s)) {
      var ia = s.concat();
      Lt = [];
      for (var xi, sr = ia.length; sr--; ) (typeof (xi = ia.shift()) != "string" || Array.isArray(xi) && typeof xi[0] != "string") && (na = !1);
      Si = na;
    }
    if (Si === !1) throw new Error('Type of text must be string or Array. "' + s + '" is not recognized.');
    typeof s == "string" && (s = s.match(/[\r?\n]/) ? s.split(/\r\n|\r|\n/g) : [s]);
    var _i = Pt / Ye.internal.scaleFactor, Pi = _i * (jr - 1);
    switch (tt.baseline) {
      case "bottom":
        H -= Pi;
        break;
      case "top":
        H += _i - Pi;
        break;
      case "hanging":
        H += _i - 2 * Pi;
        break;
      case "middle":
        H += _i / 2 - Pi;
    }
    if ((ee = tt.maxWidth || 0) > 0 && (typeof s == "string" ? s = Ye.splitTextToSize(s, ee) : Object.prototype.toString.call(s) === "[object Array]" && (s = s.reduce(function(_e, Pe) {
      return _e.concat(Ye.splitTextToSize(Pe, ee));
    }, []))), vt = { text: s, x: w, y: H, options: tt, mutex: { pdfEscape: xr, activeFontKey: oe, fonts: be, activeFontSize: Pt } }, ue.publish("preProcessText", vt), s = vt.text, Dt = (tt = vt.options).angle, !(Oe instanceof Wt) && Dt && typeof Dt == "number") {
      Dt *= Math.PI / 180, tt.rotationDirection === 0 && (Dt = -Dt), C === S.ADVANCED && (Dt = -Dt);
      var ki = Math.cos(Dt), aa = Math.sin(Dt);
      Oe = new Wt(ki, aa, -aa, ki, 0, 0);
    } else Dt && Dt instanceof Wt && (Oe = Dt);
    C !== S.ADVANCED || Oe || (Oe = vr), (ne = tt.charSpace || Ai) !== void 0 && (rr += M(y(ne)) + ` Tc
`, this.setCharSpace(this.getCharSpace() || 0)), (Ie = tt.horizontalScale) !== void 0 && (rr += M(100 * Ie) + ` Tz
`), tt.lang;
    var _r = -1, Wo = tt.renderingMode !== void 0 ? tt.renderingMode : tt.stroke, oa = Ye.internal.getCurrentPageInfo().pageContext;
    switch (Wo) {
      case 0:
      case !1:
      case "fill":
        _r = 0;
        break;
      case 1:
      case !0:
      case "stroke":
        _r = 1;
        break;
      case 2:
      case "fillThenStroke":
        _r = 2;
        break;
      case 3:
      case "invisible":
        _r = 3;
        break;
      case 4:
      case "fillAndAddForClipping":
        _r = 4;
        break;
      case 5:
      case "strokeAndAddPathForClipping":
        _r = 5;
        break;
      case 6:
      case "fillThenStrokeAndAddToPathForClipping":
        _r = 6;
        break;
      case 7:
      case "addToPathForClipping":
        _r = 7;
    }
    var Ha = oa.usedRenderingMode !== void 0 ? oa.usedRenderingMode : -1;
    _r !== -1 ? rr += _r + ` Tr
` : Ha !== -1 && (rr += `0 Tr
`), _r !== -1 && (oa.usedRenderingMode = _r), Ut = tt.align || "left";
    var qr, Ci = Pt * jr, Ua = Ye.internal.pageSize.getWidth(), Wa = be[oe];
    ne = tt.charSpace || Ai, ee = tt.maxWidth || 0, ge = Object.assign({ autoencode: !0, noBOM: !0 }, tt.flags);
    var In = [], ei = function(_e) {
      return Ye.getStringUnitWidth(_e, { font: Wa, charSpace: ne, fontSize: Pt, doKerning: !1 }) * Pt / hn;
    };
    if (Object.prototype.toString.call(s) === "[object Array]") {
      var Pr;
      Lt = ea(s), Ut !== "left" && (qr = Lt.map(ei));
      var wr, En = 0;
      if (Ut === "right") {
        w -= qr[0], s = [], sr = Lt.length;
        for (var An = 0; An < sr; An++) An === 0 ? (wr = cn(w), Pr = wn(H)) : (wr = y(En - qr[An]), Pr = -Ci), s.push([Lt[An], wr, Pr]), En = qr[An];
      } else if (Ut === "center") {
        w -= qr[0] / 2, s = [], sr = Lt.length;
        for (var Ln = 0; Ln < sr; Ln++) Ln === 0 ? (wr = cn(w), Pr = wn(H)) : (wr = y((En - qr[Ln]) / 2), Pr = -Ci), s.push([Lt[Ln], wr, Pr]), En = qr[Ln];
      } else if (Ut === "left") {
        s = [], sr = Lt.length;
        for (var Fi = 0; Fi < sr; Fi++) s.push(Lt[Fi]);
      } else if (Ut === "justify" && Wa.encoding === "Identity-H") {
        s = [], sr = Lt.length, ee = ee !== 0 ? ee : Ua;
        for (var Nn = 0, qe = 0; qe < sr; qe++) if (Pr = qe === 0 ? wn(H) : -Ci, wr = qe === 0 ? cn(w) : Nn, qe < sr - 1) {
          var sa = y((ee - qr[qe]) / (Lt[qe].split(" ").length - 1)), Ar = Lt[qe].split(" ");
          s.push([Ar[0] + " ", wr, Pr]), Nn = 0;
          for (var zr = 1; zr < Ar.length; zr++) {
            var Ti = (ei(Ar[zr - 1] + " " + Ar[zr]) - ei(Ar[zr])) * hn + sa;
            zr == Ar.length - 1 ? s.push([Ar[zr], Ti, 0]) : s.push([Ar[zr] + " ", Ti, 0]), Nn -= Ti;
          }
        } else s.push([Lt[qe], wr, Pr]);
        s.push(["", Nn, 0]);
      } else {
        if (Ut !== "justify") throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
        for (s = [], sr = Lt.length, ee = ee !== 0 ? ee : Ua, qe = 0; qe < sr; qe++) Pr = qe === 0 ? wn(H) : -Ci, wr = qe === 0 ? cn(w) : 0, qe < sr - 1 ? In.push(M(y((ee - qr[qe]) / (Lt[qe].split(" ").length - 1)))) : In.push(0), s.push([Lt[qe], wr, Pr]);
      }
    }
    var Ga = typeof tt.R2L == "boolean" ? tt.R2L : Ht;
    Ga === !0 && (s = ra(s, function(_e, Pe, ze) {
      return [_e.split("").reverse().join(""), Pe, ze];
    })), vt = { text: s, x: w, y: H, options: tt, mutex: { pdfEscape: xr, activeFontKey: oe, fonts: be, activeFontSize: Pt } }, ue.publish("postProcessText", vt), s = vt.text, tn = vt.mutex.isHex || !1;
    var ua = be[oe].encoding;
    ua !== "WinAnsiEncoding" && ua !== "StandardEncoding" || (s = ra(s, function(_e, Pe, ze) {
      return [za(_e), Pe, ze];
    })), Lt = ea(s), s = [];
    for (var ri, ni, On, ii = 0, Ii = 1, ai = Array.isArray(Lt[0]) ? Ii : ii, jn = "", la = function(_e, Pe, ze) {
      var $e = "";
      return ze instanceof Wt ? (ze = typeof tt.angle == "number" ? Ir(ze, new Wt(1, 0, 0, 1, _e, Pe)) : Ir(new Wt(1, 0, 0, 1, _e, Pe), ze), C === S.ADVANCED && (ze = Ir(new Wt(1, 0, 0, -1, 0, 0), ze)), $e = ze.join(" ") + ` Tm
`) : $e = M(_e) + " " + M(Pe) + ` Td
`, $e;
    }, Hr = 0; Hr < Lt.length; Hr++) {
      switch (jn = "", ai) {
        case Ii:
          On = (tn ? "<" : "(") + Lt[Hr][0] + (tn ? ">" : ")"), ri = parseFloat(Lt[Hr][1]), ni = parseFloat(Lt[Hr][2]);
          break;
        case ii:
          On = (tn ? "<" : "(") + Lt[Hr] + (tn ? ">" : ")"), ri = cn(w), ni = wn(H);
      }
      In !== void 0 && In[Hr] !== void 0 && (jn = In[Hr] + ` Tw
`), Hr === 0 ? s.push(jn + la(ri, ni, Oe) + On) : ai === ii ? s.push(jn + On) : ai === Ii && s.push(jn + la(ri, ni, Oe) + On);
    }
    s = ai === ii ? s.join(` Tj
T* `) : s.join(` Tj
`), s += ` Tj
`;
    var Ur = `BT
/`;
    return Ur += oe + " " + Pt + ` Tf
`, Ur += M(Pt * jr) + ` TL
`, Ur += Qn + `
`, Ur += rr, Ur += s, Y(Ur += "ET"), L[oe] = !0, Ye;
  };
  var jo = d.__private__.clip = d.clip = function(s) {
    return Y(s === "evenodd" ? "W*" : "W"), this;
  };
  d.clipEvenOdd = function() {
    return jo("evenodd");
  }, d.__private__.discardPath = d.discardPath = function() {
    return Y("n"), this;
  };
  var fn = d.__private__.isValidStyle = function(s) {
    var w = !1;
    return [void 0, null, "S", "D", "F", "DF", "FD", "f", "f*", "B", "B*", "n"].indexOf(s) !== -1 && (w = !0), w;
  };
  d.__private__.setDefaultPathOperation = d.setDefaultPathOperation = function(s) {
    return fn(s) && (g = s), this;
  };
  var Ea = d.__private__.getStyle = d.getStyle = function(s) {
    var w = g;
    switch (s) {
      case "D":
      case "S":
        w = "S";
        break;
      case "F":
        w = "f";
        break;
      case "FD":
      case "DF":
        w = "B";
        break;
      case "f":
      case "f*":
      case "B":
      case "B*":
        w = s;
    }
    return w;
  }, Oa = d.close = function() {
    return Y("h"), this;
  };
  d.stroke = function() {
    return Y("S"), this;
  }, d.fill = function(s) {
    return yi("f", s), this;
  }, d.fillEvenOdd = function(s) {
    return yi("f*", s), this;
  }, d.fillStroke = function(s) {
    return yi("B", s), this;
  }, d.fillStrokeEvenOdd = function(s) {
    return yi("B*", s), this;
  };
  var yi = function(s, w) {
    xe(w) === "object" ? Mo(w, s) : Y(s);
  }, Gi = function(s) {
    s === null || C === S.ADVANCED && s === void 0 || (s = Ea(s), Y(s));
  };
  function Do(s, w, H, tt, ut) {
    var vt = new li(w || this.boundingBox, H || this.xStep, tt || this.yStep, this.gState, ut || this.matrix);
    vt.stream = this.stream;
    var Lt = s + "$$" + this.cloneIndex++ + "$$";
    return Qe(Lt, vt), vt;
  }
  var Mo = function(s, w) {
    var H = Xr[s.key], tt = pe[H];
    if (tt instanceof Wn) Y("q"), Y(Ro(w)), tt.gState && d.setGState(tt.gState), Y(s.matrix.toString() + " cm"), Y("/" + H + " sh"), Y("Q");
    else if (tt instanceof li) {
      var ut = new Wt(1, 0, 0, -1, 0, Tn());
      s.matrix && (ut = ut.multiply(s.matrix || vr), H = Do.call(tt, s.key, s.boundingBox, s.xStep, s.yStep, ut).id), Y("q"), Y("/Pattern cs"), Y("/" + H + " scn"), tt.gState && d.setGState(tt.gState), Y(w), Y("Q");
    }
  }, Ro = function(s) {
    switch (s) {
      case "f":
      case "F":
        return "W n";
      case "f*":
        return "W* n";
      case "B":
        return "W S";
      case "B*":
        return "W* S";
      case "S":
        return "W S";
      case "n":
        return "W n";
    }
  }, Vi = d.moveTo = function(s, w) {
    return Y(M(y(s)) + " " + M(z(w)) + " m"), this;
  }, $n = d.lineTo = function(s, w) {
    return Y(M(y(s)) + " " + M(z(w)) + " l"), this;
  }, Cn = d.curveTo = function(s, w, H, tt, ut, vt) {
    return Y([M(y(s)), M(z(w)), M(y(H)), M(z(tt)), M(y(ut)), M(z(vt)), "c"].join(" ")), this;
  };
  d.__private__.line = d.line = function(s, w, H, tt, ut) {
    if (isNaN(s) || isNaN(w) || isNaN(H) || isNaN(tt) || !fn(ut)) throw new Error("Invalid arguments passed to jsPDF.line");
    return C === S.COMPAT ? this.lines([[H - s, tt - w]], s, w, [1, 1], ut || "S") : this.lines([[H - s, tt - w]], s, w, [1, 1]).stroke();
  }, d.__private__.lines = d.lines = function(s, w, H, tt, ut, vt) {
    var Lt, Dt, Ut, ne, ee, ge, Ie, Oe, Ye, hr, rr, tn;
    if (typeof s == "number" && (tn = H, H = w, w = s, s = tn), tt = tt || [1, 1], vt = vt || !1, isNaN(w) || isNaN(H) || !Array.isArray(s) || !Array.isArray(tt) || !fn(ut) || typeof vt != "boolean") throw new Error("Invalid arguments passed to jsPDF.lines");
    for (Vi(w, H), Lt = tt[0], Dt = tt[1], ne = s.length, hr = w, rr = H, Ut = 0; Ut < ne; Ut++) (ee = s[Ut]).length === 2 ? (hr = ee[0] * Lt + hr, rr = ee[1] * Dt + rr, $n(hr, rr)) : (ge = ee[0] * Lt + hr, Ie = ee[1] * Dt + rr, Oe = ee[2] * Lt + hr, Ye = ee[3] * Dt + rr, hr = ee[4] * Lt + hr, rr = ee[5] * Dt + rr, Cn(ge, Ie, Oe, Ye, hr, rr));
    return vt && Oa(), Gi(ut), this;
  }, d.path = function(s) {
    for (var w = 0; w < s.length; w++) {
      var H = s[w], tt = H.c;
      switch (H.op) {
        case "m":
          Vi(tt[0], tt[1]);
          break;
        case "l":
          $n(tt[0], tt[1]);
          break;
        case "c":
          Cn.apply(this, tt);
          break;
        case "h":
          Oa();
      }
    }
    return this;
  }, d.__private__.rect = d.rect = function(s, w, H, tt, ut) {
    if (isNaN(s) || isNaN(w) || isNaN(H) || isNaN(tt) || !fn(ut)) throw new Error("Invalid arguments passed to jsPDF.rect");
    return C === S.COMPAT && (tt = -tt), Y([M(y(s)), M(z(w)), M(y(H)), M(y(tt)), "re"].join(" ")), Gi(ut), this;
  }, d.__private__.triangle = d.triangle = function(s, w, H, tt, ut, vt, Lt) {
    if (isNaN(s) || isNaN(w) || isNaN(H) || isNaN(tt) || isNaN(ut) || isNaN(vt) || !fn(Lt)) throw new Error("Invalid arguments passed to jsPDF.triangle");
    return this.lines([[H - s, tt - w], [ut - H, vt - tt], [s - ut, w - vt]], s, w, [1, 1], Lt, !0), this;
  }, d.__private__.roundedRect = d.roundedRect = function(s, w, H, tt, ut, vt, Lt) {
    if (isNaN(s) || isNaN(w) || isNaN(H) || isNaN(tt) || isNaN(ut) || isNaN(vt) || !fn(Lt)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
    var Dt = 4 / 3 * (Math.SQRT2 - 1);
    return ut = Math.min(ut, 0.5 * H), vt = Math.min(vt, 0.5 * tt), this.lines([[H - 2 * ut, 0], [ut * Dt, 0, ut, vt - vt * Dt, ut, vt], [0, tt - 2 * vt], [0, vt * Dt, -ut * Dt, vt, -ut, vt], [2 * ut - H, 0], [-ut * Dt, 0, -ut, -vt * Dt, -ut, -vt], [0, 2 * vt - tt], [0, -vt * Dt, ut * Dt, -vt, ut, -vt]], s + ut, w, [1, 1], Lt, !0), this;
  }, d.__private__.ellipse = d.ellipse = function(s, w, H, tt, ut) {
    if (isNaN(s) || isNaN(w) || isNaN(H) || isNaN(tt) || !fn(ut)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
    var vt = 4 / 3 * (Math.SQRT2 - 1) * H, Lt = 4 / 3 * (Math.SQRT2 - 1) * tt;
    return Vi(s + H, w), Cn(s + H, w - Lt, s + vt, w - tt, s, w - tt), Cn(s - vt, w - tt, s - H, w - Lt, s - H, w), Cn(s - H, w + Lt, s - vt, w + tt, s, w + tt), Cn(s + vt, w + tt, s + H, w + Lt, s + H, w), Gi(ut), this;
  }, d.__private__.circle = d.circle = function(s, w, H, tt) {
    if (isNaN(s) || isNaN(w) || isNaN(H) || !fn(tt)) throw new Error("Invalid arguments passed to jsPDF.circle");
    return this.ellipse(s, w, H, H, tt);
  }, d.setFont = function(s, w, H) {
    return H && (w = $(w, H)), oe = Fa(s, w, { disableWarning: !1 }), this;
  };
  var Bo = d.__private__.getFont = d.getFont = function() {
    return be[Fa.apply(d, arguments)];
  };
  d.__private__.getFontList = d.getFontList = function() {
    var s, w, H = {};
    for (s in de) if (de.hasOwnProperty(s)) for (w in H[s] = [], de[s]) de[s].hasOwnProperty(w) && H[s].push(w);
    return H;
  }, d.addFont = function(s, w, H, tt, ut) {
    var vt = ["StandardEncoding", "MacRomanEncoding", "Identity-H", "WinAnsiEncoding"];
    return arguments[3] && vt.indexOf(arguments[3]) !== -1 ? ut = arguments[3] : arguments[3] && vt.indexOf(arguments[3]) == -1 && (H = $(H, tt)), ut = ut || "Identity-H", Hi.call(this, s, w, H, ut);
  };
  var Zn, Yi = i.lineWidth || 0.200025, wi = d.__private__.getLineWidth = d.getLineWidth = function() {
    return Yi;
  }, ja = d.__private__.setLineWidth = d.setLineWidth = function(s) {
    return Yi = s, Y(M(y(s)) + " w"), this;
  };
  d.__private__.setLineDash = Yt.API.setLineDash = Yt.API.setLineDashPattern = function(s, w) {
    if (s = s || [], w = w || 0, isNaN(w) || !Array.isArray(s)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
    return s = s.map(function(H) {
      return M(y(H));
    }).join(" "), w = M(y(w)), Y("[" + s + "] " + w + " d"), this;
  };
  var Da = d.__private__.getLineHeight = d.getLineHeight = function() {
    return Pt * Zn;
  };
  d.__private__.getLineHeight = d.getLineHeight = function() {
    return Pt * Zn;
  };
  var Ma = d.__private__.setLineHeightFactor = d.setLineHeightFactor = function(s) {
    return typeof (s = s || 1.15) == "number" && (Zn = s), this;
  }, Ra = d.__private__.getLineHeightFactor = d.getLineHeightFactor = function() {
    return Zn;
  };
  Ma(i.lineHeight);
  var cn = d.__private__.getHorizontalCoordinate = function(s) {
    return y(s);
  }, wn = d.__private__.getVerticalCoordinate = function(s) {
    return C === S.ADVANCED ? s : qt[O].mediaBox.topRightY - qt[O].mediaBox.bottomLeftY - y(s);
  }, qo = d.__private__.getHorizontalCoordinateString = d.getHorizontalCoordinateString = function(s) {
    return M(cn(s));
  }, Fn = d.__private__.getVerticalCoordinateString = d.getVerticalCoordinateString = function(s) {
    return M(wn(s));
  }, Qr = i.strokeColor || "0 G";
  d.__private__.getStrokeColor = d.getDrawColor = function() {
    return or(Qr);
  }, d.__private__.setStrokeColor = d.setDrawColor = function(s, w, H, tt) {
    return Qr = Re({ ch1: s, ch2: w, ch3: H, ch4: tt, pdfColorType: "draw", precision: 2 }), Y(Qr), this;
  };
  var Ji = i.fillColor || "0 g";
  d.__private__.getFillColor = d.getFillColor = function() {
    return or(Ji);
  }, d.__private__.setFillColor = d.setFillColor = function(s, w, H, tt) {
    return Ji = Re({ ch1: s, ch2: w, ch3: H, ch4: tt, pdfColorType: "fill", precision: 2 }), Y(Ji), this;
  };
  var Qn = i.textColor || "0 g", zo = d.__private__.getTextColor = d.getTextColor = function() {
    return or(Qn);
  };
  d.__private__.setTextColor = d.setTextColor = function(s, w, H, tt) {
    return Qn = Re({ ch1: s, ch2: w, ch3: H, ch4: tt, pdfColorType: "text", precision: 3 }), this;
  };
  var Ai = i.charSpace, Ho = d.__private__.getCharSpace = d.getCharSpace = function() {
    return parseFloat(Ai || 0);
  };
  d.__private__.setCharSpace = d.setCharSpace = function(s) {
    if (isNaN(s)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
    return Ai = s, this;
  };
  var Xi = 0;
  d.CapJoinStyles = { 0: 0, butt: 0, but: 0, miter: 0, 1: 1, round: 1, rounded: 1, circle: 1, 2: 2, projecting: 2, project: 2, square: 2, bevel: 2 }, d.__private__.setLineCap = d.setLineCap = function(s) {
    var w = d.CapJoinStyles[s];
    if (w === void 0) throw new Error("Line cap style of '" + s + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
    return Xi = w, Y(w + " J"), this;
  };
  var Ki = 0;
  d.__private__.setLineJoin = d.setLineJoin = function(s) {
    var w = d.CapJoinStyles[s];
    if (w === void 0) throw new Error("Line join style of '" + s + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
    return Ki = w, Y(w + " j"), this;
  }, d.__private__.setLineMiterLimit = d.__private__.setMiterLimit = d.setLineMiterLimit = d.setMiterLimit = function(s) {
    if (s = s || 0, isNaN(s)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
    return Y(M(y(s)) + " M"), this;
  }, d.GState = Na, d.setGState = function(s) {
    (s = typeof s == "string" ? Ce[Ke[s]] : Ba(null, s)).equals(Kr) || (Y("/" + s.id + " gs"), Kr = s);
  };
  var Ba = function(s, w) {
    if (!s || !Ke[s]) {
      var H = !1;
      for (var tt in Ce) if (Ce.hasOwnProperty(tt) && Ce[tt].equals(w)) {
        H = !0;
        break;
      }
      if (H) w = Ce[tt];
      else {
        var ut = "GS" + (Object.keys(Ce).length + 1).toString(10);
        Ce[ut] = w, w.id = ut;
      }
      return s && (Ke[s] = w.id), ue.publish("addGState", w), w;
    }
  };
  d.addGState = function(s, w) {
    return Ba(s, w), this;
  }, d.saveGraphicsState = function() {
    return Y("q"), ar.push({ key: oe, size: Pt, color: Qn }), this;
  }, d.restoreGraphicsState = function() {
    Y("Q");
    var s = ar.pop();
    return oe = s.key, Pt = s.size, Qn = s.color, Kr = null, this;
  }, d.setCurrentTransformationMatrix = function(s) {
    return Y(s.toString() + " cm"), this;
  }, d.comment = function(s) {
    return Y("#" + s), this;
  };
  var Li = function(s, w) {
    var H = s || 0;
    Object.defineProperty(this, "x", { enumerable: !0, get: function() {
      return H;
    }, set: function(vt) {
      isNaN(vt) || (H = parseFloat(vt));
    } });
    var tt = w || 0;
    Object.defineProperty(this, "y", { enumerable: !0, get: function() {
      return tt;
    }, set: function(vt) {
      isNaN(vt) || (tt = parseFloat(vt));
    } });
    var ut = "pt";
    return Object.defineProperty(this, "type", { enumerable: !0, get: function() {
      return ut;
    }, set: function(vt) {
      ut = vt.toString();
    } }), this;
  }, $i = function(s, w, H, tt) {
    Li.call(this, s, w), this.type = "rect";
    var ut = H || 0;
    Object.defineProperty(this, "w", { enumerable: !0, get: function() {
      return ut;
    }, set: function(Lt) {
      isNaN(Lt) || (ut = parseFloat(Lt));
    } });
    var vt = tt || 0;
    return Object.defineProperty(this, "h", { enumerable: !0, get: function() {
      return vt;
    }, set: function(Lt) {
      isNaN(Lt) || (vt = parseFloat(Lt));
    } }), this;
  }, Zi = function() {
    this.page = Fe, this.currentPage = O, this.pages = xt.slice(0), this.pagesContext = qt.slice(0), this.x = Ge, this.y = ce, this.matrix = fr, this.width = ti(O), this.height = Tn(O), this.outputDestination = jt, this.id = "", this.objectNumber = -1;
  };
  Zi.prototype.restore = function() {
    Fe = this.page, O = this.currentPage, qt = this.pagesContext, xt = this.pages, Ge = this.x, ce = this.y, fr = this.matrix, Qi(O, this.width), ta(O, this.height), jt = this.outputDestination;
  };
  var qa = function(s, w, H, tt, ut) {
    Tr.push(new Zi()), Fe = O = 0, xt = [], Ge = s, ce = w, fr = ut, Ui([H, tt]);
  }, Uo = function(s) {
    if (Sr[s]) Tr.pop().restore();
    else {
      var w = new Zi(), H = "Xo" + (Object.keys(Ve).length + 1).toString(10);
      w.id = H, Sr[s] = H, Ve[H] = w, ue.publish("addFormObject", w), Tr.pop().restore();
    }
  };
  for (var Ni in d.beginFormObject = function(s, w, H, tt, ut) {
    return qa(s, w, H, tt, ut), this;
  }, d.endFormObject = function(s) {
    return Uo(s), this;
  }, d.doFormObject = function(s, w) {
    var H = Ve[Sr[s]];
    return Y("q"), Y(w.toString() + " cm"), Y("/" + H.id + " Do"), Y("Q"), this;
  }, d.getFormObject = function(s) {
    var w = Ve[Sr[s]];
    return { x: w.x, y: w.y, width: w.width, height: w.height, matrix: w.matrix };
  }, d.save = function(s, w) {
    return s = s || "generated.pdf", (w = w || {}).returnPromise = w.returnPromise || !1, w.returnPromise === !1 ? (ui(vi(yn()), s), typeof ui.unload == "function" && Xt.setTimeout && setTimeout(ui.unload, 911), this) : new Promise(function(H, tt) {
      try {
        var ut = ui(vi(yn()), s);
        typeof ui.unload == "function" && Xt.setTimeout && setTimeout(ui.unload, 911), H(ut);
      } catch (vt) {
        tt(vt.message);
      }
    });
  }, Yt.API) Yt.API.hasOwnProperty(Ni) && (Ni === "events" && Yt.API.events.length ? function(s, w) {
    var H, tt, ut;
    for (ut = w.length - 1; ut !== -1; ut--) H = w[ut][0], tt = w[ut][1], s.subscribe.apply(s, [H].concat(typeof tt == "function" ? [tt] : tt));
  }(ue, Yt.API.events) : d[Ni] = Yt.API[Ni]);
  var ti = d.getPageWidth = function(s) {
    return (qt[s = s || O].mediaBox.topRightX - qt[s].mediaBox.bottomLeftX) / Et;
  }, Qi = d.setPageWidth = function(s, w) {
    qt[s].mediaBox.topRightX = w * Et + qt[s].mediaBox.bottomLeftX;
  }, Tn = d.getPageHeight = function(s) {
    return (qt[s = s || O].mediaBox.topRightY - qt[s].mediaBox.bottomLeftY) / Et;
  }, ta = d.setPageHeight = function(s, w) {
    qt[s].mediaBox.topRightY = w * Et + qt[s].mediaBox.bottomLeftY;
  };
  return d.internal = { pdfEscape: xr, getStyle: Ea, getFont: Bo, getFontSize: Ft, getCharSpace: Ho, getTextColor: zo, getLineHeight: Da, getLineHeightFactor: Ra, getLineWidth: wi, write: Kt, getHorizontalCoordinate: cn, getVerticalCoordinate: wn, getCoordinateString: qo, getVerticalCoordinateString: Fn, collections: {}, newObject: Me, newAdditionalObject: bn, newObjectDeferred: me, newObjectDeferredBegin: tr, getFilters: Er, putStream: yr, events: ue, scaleFactor: Et, pageSize: { getWidth: function() {
    return ti(O);
  }, setWidth: function(s) {
    Qi(O, s);
  }, getHeight: function() {
    return Tn(O);
  }, setHeight: function(s) {
    ta(O, s);
  } }, encryptionOptions: P, encryption: cr, getEncryptor: Eo, output: bi, getNumberOfPages: ko, pages: xt, out: Y, f2: Q, f3: N, getPageInfo: Ia, getPageInfoByObjId: Qt, getCurrentPageInfo: Oo, getPDFVersion: F, Point: Li, Rectangle: $i, Matrix: Wt, hasHotfix: Ta }, Object.defineProperty(d.internal.pageSize, "width", { get: function() {
    return ti(O);
  }, set: function(s) {
    Qi(O, s);
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(d.internal.pageSize, "height", { get: function() {
    return Tn(O);
  }, set: function(s) {
    ta(O, s);
  }, enumerable: !0, configurable: !0 }), _o.call(d, Nt), oe = "F1", ka(u, r), ue.publish("initialized"), d;
}
qi.prototype.lsbFirstWord = function(i) {
  return String.fromCharCode(i >> 0 & 255, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255);
}, qi.prototype.toHexString = function(i) {
  return i.split("").map(function(e) {
    return ("0" + (255 & e.charCodeAt(0)).toString(16)).slice(-2);
  }).join("");
}, qi.prototype.hexToBytes = function(i) {
  for (var e = [], r = 0; r < i.length; r += 2) e.push(String.fromCharCode(parseInt(i.substr(r, 2), 16)));
  return e.join("");
}, qi.prototype.processOwnerPassword = function(i, e) {
  return Ns(Ls(e).substr(0, 5), i);
}, qi.prototype.encryptor = function(i, e) {
  var r = Ls(this.encryptionKey + String.fromCharCode(255 & i, i >> 8 & 255, i >> 16 & 255, 255 & e, e >> 8 & 255)).substr(0, 10);
  return function(a) {
    return Ns(r, a);
  };
}, Na.prototype.equals = function(i) {
  var e, r = "id,objectNumber,equals";
  if (!i || xe(i) !== xe(this)) return !1;
  var a = 0;
  for (e in this) if (!(r.indexOf(e) >= 0)) {
    if (this.hasOwnProperty(e) && !i.hasOwnProperty(e) || this[e] !== i[e]) return !1;
    a++;
  }
  for (e in i) i.hasOwnProperty(e) && r.indexOf(e) < 0 && a--;
  return a === 0;
}, Yt.API = { events: [] }, Yt.version = "2.5.2";
var De = Yt.API, Fs = 1, pi = function(i) {
  return i.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}, Ri = function(i) {
  return i.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}, re = function(i) {
  return i.toFixed(2);
}, Un = function(i) {
  return i.toFixed(5);
};
De.__acroform__ = {};
var Fr = function(i, e) {
  i.prototype = Object.create(e.prototype), i.prototype.constructor = i;
}, uu = function(i) {
  return i * Fs;
}, pn = function(i) {
  var e = new Ou(), r = Rt.internal.getHeight(i) || 0, a = Rt.internal.getWidth(i) || 0;
  return e.BBox = [0, 0, Number(re(a)), Number(re(r))], e;
}, jl = De.__acroform__.setBit = function(i, e) {
  if (i = i || 0, e = e || 0, isNaN(i) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
  return i |= 1 << e;
}, Dl = De.__acroform__.clearBit = function(i, e) {
  if (i = i || 0, e = e || 0, isNaN(i) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
  return i &= ~(1 << e);
}, Ml = De.__acroform__.getBit = function(i, e) {
  if (isNaN(i) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
  return i & 1 << e ? 1 : 0;
}, He = De.__acroform__.getBitForPdf = function(i, e) {
  if (isNaN(i) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
  return Ml(i, e - 1);
}, Ue = De.__acroform__.setBitForPdf = function(i, e) {
  if (isNaN(i) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
  return jl(i, e - 1);
}, We = De.__acroform__.clearBitForPdf = function(i, e) {
  if (isNaN(i) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
  return Dl(i, e - 1);
}, Rl = De.__acroform__.calculateCoordinates = function(i, e) {
  var r = e.internal.getHorizontalCoordinate, a = e.internal.getVerticalCoordinate, u = i[0], o = i[1], f = i[2], h = i[3], c = {};
  return c.lowerLeft_X = r(u) || 0, c.lowerLeft_Y = a(o + h) || 0, c.upperRight_X = r(u + f) || 0, c.upperRight_Y = a(o) || 0, [Number(re(c.lowerLeft_X)), Number(re(c.lowerLeft_Y)), Number(re(c.upperRight_X)), Number(re(c.upperRight_Y))];
}, Bl = function(i) {
  if (i.appearanceStreamContent) return i.appearanceStreamContent;
  if (i.V || i.DV) {
    var e = [], r = i._V || i.DV, a = Ss(i, r), u = i.scope.internal.getFont(i.fontName, i.fontStyle).id;
    e.push("/Tx BMC"), e.push("q"), e.push("BT"), e.push(i.scope.__private__.encodeColorString(i.color)), e.push("/" + u + " " + re(a.fontSize) + " Tf"), e.push("1 0 0 1 0 0 Tm"), e.push(a.text), e.push("ET"), e.push("Q"), e.push("EMC");
    var o = pn(i);
    return o.scope = i.scope, o.stream = e.join(`
`), o;
  }
}, Ss = function(i, e) {
  var r = i.fontSize === 0 ? i.maxFontSize : i.fontSize, a = { text: "", fontSize: "" }, u = (e = (e = e.substr(0, 1) == "(" ? e.substr(1) : e).substr(e.length - 1) == ")" ? e.substr(0, e.length - 1) : e).split(" ");
  u = i.multiline ? u.map(function(N) {
    return N.split(`
`);
  }) : u.map(function(N) {
    return [N];
  });
  var o = r, f = Rt.internal.getHeight(i) || 0;
  f = f < 0 ? -f : f;
  var h = Rt.internal.getWidth(i) || 0;
  h = h < 0 ? -h : h;
  var c = function(N, y, B) {
    if (N + 1 < u.length) {
      var z = y + " " + u[N + 1][0];
      return po(z, i, B).width <= h - 4;
    }
    return !1;
  };
  o++;
  t: for (; o > 0; ) {
    e = "", o--;
    var g, P, A = po("3", i, o).height, L = i.multiline ? f - o : (f - A) / 2, d = L += 2, x = 0, F = 0, E = 0;
    if (o <= 0) {
      e = `(...) Tj
`, e += "% Width of Text: " + po(e, i, o = 12).width + ", FieldWidth:" + h + `
`;
      break;
    }
    for (var v = "", S = 0, C = 0; C < u.length; C++) if (u.hasOwnProperty(C)) {
      var D = !1;
      if (u[C].length !== 1 && E !== u[C].length - 1) {
        if ((A + 2) * (S + 2) + 2 > f) continue t;
        v += u[C][E], D = !0, F = C, C--;
      } else {
        v = (v += u[C][E] + " ").substr(v.length - 1) == " " ? v.substr(0, v.length - 1) : v;
        var G = parseInt(C), $ = c(G, v, o), M = C >= u.length - 1;
        if ($ && !M) {
          v += " ", E = 0;
          continue;
        }
        if ($ || M) {
          if (M) F = G;
          else if (i.multiline && (A + 2) * (S + 2) + 2 > f) continue t;
        } else {
          if (!i.multiline || (A + 2) * (S + 2) + 2 > f) continue t;
          F = G;
        }
      }
      for (var j = "", Z = x; Z <= F; Z++) {
        var Q = u[Z];
        if (i.multiline) {
          if (Z === F) {
            j += Q[E] + " ", E = (E + 1) % Q.length;
            continue;
          }
          if (Z === x) {
            j += Q[Q.length - 1] + " ";
            continue;
          }
        }
        j += Q[0] + " ";
      }
      switch (j = j.substr(j.length - 1) == " " ? j.substr(0, j.length - 1) : j, P = po(j, i, o).width, i.textAlign) {
        case "right":
          g = h - P - 2;
          break;
        case "center":
          g = (h - P) / 2;
          break;
        case "left":
        default:
          g = 2;
      }
      e += re(g) + " " + re(d) + ` Td
`, e += "(" + pi(j) + `) Tj
`, e += -re(g) + ` 0 Td
`, d = -(o + 2), P = 0, x = D ? F : F + 1, S++, v = "";
    }
    break;
  }
  return a.text = e, a.fontSize = o, a;
}, po = function(i, e, r) {
  var a = e.scope.internal.getFont(e.fontName, e.fontStyle), u = e.scope.getStringUnitWidth(i, { font: a, fontSize: parseFloat(r), charSpace: 0 }) * parseFloat(r);
  return { height: e.scope.getStringUnitWidth("3", { font: a, fontSize: parseFloat(r), charSpace: 0 }) * parseFloat(r) * 1.5, width: u };
}, ql = { fields: [], xForms: [], acroFormDictionaryRoot: null, printedOut: !1, internal: null, isInitialized: !1 }, zl = function(i, e) {
  var r = { type: "reference", object: i };
  e.internal.getPageInfo(i.page).pageContext.annotations.find(function(a) {
    return a.type === r.type && a.object === r.object;
  }) === void 0 && e.internal.getPageInfo(i.page).pageContext.annotations.push(r);
}, Hl = function(i, e) {
  for (var r in i) if (i.hasOwnProperty(r)) {
    var a = r, u = i[r];
    e.internal.newObjectDeferredBegin(u.objId, !0), xe(u) === "object" && typeof u.putStream == "function" && u.putStream(), delete i[a];
  }
}, Ul = function(i, e) {
  if (e.scope = i, i.internal !== void 0 && (i.internal.acroformPlugin === void 0 || i.internal.acroformPlugin.isInitialized === !1)) {
    if (sn.FieldNum = 0, i.internal.acroformPlugin = JSON.parse(JSON.stringify(ql)), i.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
    Fs = i.internal.scaleFactor, i.internal.acroformPlugin.acroFormDictionaryRoot = new ju(), i.internal.acroformPlugin.acroFormDictionaryRoot.scope = i, i.internal.acroformPlugin.acroFormDictionaryRoot._eventID = i.internal.events.subscribe("postPutResources", function() {
      (function(r) {
        r.internal.events.unsubscribe(r.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete r.internal.acroformPlugin.acroFormDictionaryRoot._eventID, r.internal.acroformPlugin.printedOut = !0;
      })(i);
    }), i.internal.events.subscribe("buildDocument", function() {
      (function(r) {
        r.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
        var a = r.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
        for (var u in a) if (a.hasOwnProperty(u)) {
          var o = a[u];
          o.objId = void 0, o.hasAnnotation && zl(o, r);
        }
      })(i);
    }), i.internal.events.subscribe("putCatalog", function() {
      (function(r) {
        if (r.internal.acroformPlugin.acroFormDictionaryRoot === void 0) throw new Error("putCatalogCallback: Root missing.");
        r.internal.write("/AcroForm " + r.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R");
      })(i);
    }), i.internal.events.subscribe("postPutPages", function(r) {
      (function(a, u) {
        var o = !a;
        for (var f in a || (u.internal.newObjectDeferredBegin(u.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), u.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), a = a || u.internal.acroformPlugin.acroFormDictionaryRoot.Kids) if (a.hasOwnProperty(f)) {
          var h = a[f], c = [], g = h.Rect;
          if (h.Rect && (h.Rect = Rl(h.Rect, u)), u.internal.newObjectDeferredBegin(h.objId, !0), h.DA = Rt.createDefaultAppearanceStream(h), xe(h) === "object" && typeof h.getKeyValueListForStream == "function" && (c = h.getKeyValueListForStream()), h.Rect = g, h.hasAppearanceStream && !h.appearanceStreamContent) {
            var P = Bl(h);
            c.push({ key: "AP", value: "<</N " + P + ">>" }), u.internal.acroformPlugin.xForms.push(P);
          }
          if (h.appearanceStreamContent) {
            var A = "";
            for (var L in h.appearanceStreamContent) if (h.appearanceStreamContent.hasOwnProperty(L)) {
              var d = h.appearanceStreamContent[L];
              if (A += "/" + L + " ", A += "<<", Object.keys(d).length >= 1 || Array.isArray(d)) {
                for (var f in d) if (d.hasOwnProperty(f)) {
                  var x = d[f];
                  typeof x == "function" && (x = x.call(u, h)), A += "/" + f + " " + x + " ", u.internal.acroformPlugin.xForms.indexOf(x) >= 0 || u.internal.acroformPlugin.xForms.push(x);
                }
              } else typeof (x = d) == "function" && (x = x.call(u, h)), A += "/" + f + " " + x, u.internal.acroformPlugin.xForms.indexOf(x) >= 0 || u.internal.acroformPlugin.xForms.push(x);
              A += ">>";
            }
            c.push({ key: "AP", value: `<<
` + A + ">>" });
          }
          u.internal.putStream({ additionalKeyValues: c, objectId: h.objId }), u.internal.out("endobj");
        }
        o && Hl(u.internal.acroformPlugin.xForms, u);
      })(r, i);
    }), i.internal.acroformPlugin.isInitialized = !0;
  }
}, Eu = De.__acroform__.arrayToPdfArray = function(i, e, r) {
  var a = function(f) {
    return f;
  };
  if (Array.isArray(i)) {
    for (var u = "[", o = 0; o < i.length; o++) switch (o !== 0 && (u += " "), xe(i[o])) {
      case "boolean":
      case "number":
      case "object":
        u += i[o].toString();
        break;
      case "string":
        i[o].substr(0, 1) !== "/" ? (e !== void 0 && r && (a = r.internal.getEncryptor(e)), u += "(" + pi(a(i[o].toString())) + ")") : u += i[o].toString();
    }
    return u += "]";
  }
  throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
}, cs = function(i, e, r) {
  var a = function(u) {
    return u;
  };
  return e !== void 0 && r && (a = r.internal.getEncryptor(e)), (i = i || "").toString(), i = "(" + pi(a(i)) + ")";
}, gn = function() {
  this._objId = void 0, this._scope = void 0, Object.defineProperty(this, "objId", { get: function() {
    if (this._objId === void 0) {
      if (this.scope === void 0) return;
      this._objId = this.scope.internal.newObjectDeferred();
    }
    return this._objId;
  }, set: function(i) {
    this._objId = i;
  } }), Object.defineProperty(this, "scope", { value: this._scope, writable: !0 });
};
gn.prototype.toString = function() {
  return this.objId + " 0 R";
}, gn.prototype.putStream = function() {
  var i = this.getKeyValueListForStream();
  this.scope.internal.putStream({ data: this.stream, additionalKeyValues: i, objectId: this.objId }), this.scope.internal.out("endobj");
}, gn.prototype.getKeyValueListForStream = function() {
  var i = [], e = Object.getOwnPropertyNames(this).filter(function(o) {
    return o != "content" && o != "appearanceStreamContent" && o != "scope" && o != "objId" && o.substring(0, 1) != "_";
  });
  for (var r in e) if (Object.getOwnPropertyDescriptor(this, e[r]).configurable === !1) {
    var a = e[r], u = this[a];
    u && (Array.isArray(u) ? i.push({ key: a, value: Eu(u, this.objId, this.scope) }) : u instanceof gn ? (u.scope = this.scope, i.push({ key: a, value: u.objId + " 0 R" })) : typeof u != "function" && i.push({ key: a, value: u }));
  }
  return i;
};
var Ou = function() {
  gn.call(this), Object.defineProperty(this, "Type", { value: "/XObject", configurable: !1, writable: !0 }), Object.defineProperty(this, "Subtype", { value: "/Form", configurable: !1, writable: !0 }), Object.defineProperty(this, "FormType", { value: 1, configurable: !1, writable: !0 });
  var i, e = [];
  Object.defineProperty(this, "BBox", { configurable: !1, get: function() {
    return e;
  }, set: function(r) {
    e = r;
  } }), Object.defineProperty(this, "Resources", { value: "2 0 R", configurable: !1, writable: !0 }), Object.defineProperty(this, "stream", { enumerable: !1, configurable: !0, set: function(r) {
    i = r.trim();
  }, get: function() {
    return i || null;
  } });
};
Fr(Ou, gn);
var ju = function() {
  gn.call(this);
  var i, e = [];
  Object.defineProperty(this, "Kids", { enumerable: !1, configurable: !0, get: function() {
    return e.length > 0 ? e : void 0;
  } }), Object.defineProperty(this, "Fields", { enumerable: !1, configurable: !1, get: function() {
    return e;
  } }), Object.defineProperty(this, "DA", { enumerable: !1, configurable: !1, get: function() {
    if (i) {
      var r = function(a) {
        return a;
      };
      return this.scope && (r = this.scope.internal.getEncryptor(this.objId)), "(" + pi(r(i)) + ")";
    }
  }, set: function(r) {
    i = r;
  } });
};
Fr(ju, gn);
var sn = function i() {
  gn.call(this);
  var e = 4;
  Object.defineProperty(this, "F", { enumerable: !1, configurable: !1, get: function() {
    return e;
  }, set: function(v) {
    if (isNaN(v)) throw new Error('Invalid value "' + v + '" for attribute F supplied.');
    e = v;
  } }), Object.defineProperty(this, "showWhenPrinted", { enumerable: !0, configurable: !0, get: function() {
    return !!He(e, 3);
  }, set: function(v) {
    v ? this.F = Ue(e, 3) : this.F = We(e, 3);
  } });
  var r = 0;
  Object.defineProperty(this, "Ff", { enumerable: !1, configurable: !1, get: function() {
    return r;
  }, set: function(v) {
    if (isNaN(v)) throw new Error('Invalid value "' + v + '" for attribute Ff supplied.');
    r = v;
  } });
  var a = [];
  Object.defineProperty(this, "Rect", { enumerable: !1, configurable: !1, get: function() {
    if (a.length !== 0) return a;
  }, set: function(v) {
    a = v !== void 0 ? v : [];
  } }), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, get: function() {
    return !a || isNaN(a[0]) ? 0 : a[0];
  }, set: function(v) {
    a[0] = v;
  } }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, get: function() {
    return !a || isNaN(a[1]) ? 0 : a[1];
  }, set: function(v) {
    a[1] = v;
  } }), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, get: function() {
    return !a || isNaN(a[2]) ? 0 : a[2];
  }, set: function(v) {
    a[2] = v;
  } }), Object.defineProperty(this, "height", { enumerable: !0, configurable: !0, get: function() {
    return !a || isNaN(a[3]) ? 0 : a[3];
  }, set: function(v) {
    a[3] = v;
  } });
  var u = "";
  Object.defineProperty(this, "FT", { enumerable: !0, configurable: !1, get: function() {
    return u;
  }, set: function(v) {
    switch (v) {
      case "/Btn":
      case "/Tx":
      case "/Ch":
      case "/Sig":
        u = v;
        break;
      default:
        throw new Error('Invalid value "' + v + '" for attribute FT supplied.');
    }
  } });
  var o = null;
  Object.defineProperty(this, "T", { enumerable: !0, configurable: !1, get: function() {
    if (!o || o.length < 1) {
      if (this instanceof Lo) return;
      o = "FieldObject" + i.FieldNum++;
    }
    var v = function(S) {
      return S;
    };
    return this.scope && (v = this.scope.internal.getEncryptor(this.objId)), "(" + pi(v(o)) + ")";
  }, set: function(v) {
    o = v.toString();
  } }), Object.defineProperty(this, "fieldName", { configurable: !0, enumerable: !0, get: function() {
    return o;
  }, set: function(v) {
    o = v;
  } });
  var f = "helvetica";
  Object.defineProperty(this, "fontName", { enumerable: !0, configurable: !0, get: function() {
    return f;
  }, set: function(v) {
    f = v;
  } });
  var h = "normal";
  Object.defineProperty(this, "fontStyle", { enumerable: !0, configurable: !0, get: function() {
    return h;
  }, set: function(v) {
    h = v;
  } });
  var c = 0;
  Object.defineProperty(this, "fontSize", { enumerable: !0, configurable: !0, get: function() {
    return c;
  }, set: function(v) {
    c = v;
  } });
  var g = void 0;
  Object.defineProperty(this, "maxFontSize", { enumerable: !0, configurable: !0, get: function() {
    return g === void 0 ? 50 / Fs : g;
  }, set: function(v) {
    g = v;
  } });
  var P = "black";
  Object.defineProperty(this, "color", { enumerable: !0, configurable: !0, get: function() {
    return P;
  }, set: function(v) {
    P = v;
  } });
  var A = "/F1 0 Tf 0 g";
  Object.defineProperty(this, "DA", { enumerable: !0, configurable: !1, get: function() {
    if (!(!A || this instanceof Lo || this instanceof Yn)) return cs(A, this.objId, this.scope);
  }, set: function(v) {
    v = v.toString(), A = v;
  } });
  var L = null;
  Object.defineProperty(this, "DV", { enumerable: !1, configurable: !1, get: function() {
    if (L) return this instanceof Ze ? L : cs(L, this.objId, this.scope);
  }, set: function(v) {
    v = v.toString(), L = this instanceof Ze ? v : v.substr(0, 1) === "(" ? Ri(v.substr(1, v.length - 2)) : Ri(v);
  } }), Object.defineProperty(this, "defaultValue", { enumerable: !0, configurable: !0, get: function() {
    return this instanceof Ze ? Ri(L.substr(1, L.length - 1)) : L;
  }, set: function(v) {
    v = v.toString(), L = this instanceof Ze ? "/" + v : v;
  } });
  var d = null;
  Object.defineProperty(this, "_V", { enumerable: !1, configurable: !1, get: function() {
    if (d) return d;
  }, set: function(v) {
    this.V = v;
  } }), Object.defineProperty(this, "V", { enumerable: !1, configurable: !1, get: function() {
    if (d) return this instanceof Ze ? d : cs(d, this.objId, this.scope);
  }, set: function(v) {
    v = v.toString(), d = this instanceof Ze ? v : v.substr(0, 1) === "(" ? Ri(v.substr(1, v.length - 2)) : Ri(v);
  } }), Object.defineProperty(this, "value", { enumerable: !0, configurable: !0, get: function() {
    return this instanceof Ze ? Ri(d.substr(1, d.length - 1)) : d;
  }, set: function(v) {
    v = v.toString(), d = this instanceof Ze ? "/" + v : v;
  } }), Object.defineProperty(this, "hasAnnotation", { enumerable: !0, configurable: !0, get: function() {
    return this.Rect;
  } }), Object.defineProperty(this, "Type", { enumerable: !0, configurable: !1, get: function() {
    return this.hasAnnotation ? "/Annot" : null;
  } }), Object.defineProperty(this, "Subtype", { enumerable: !0, configurable: !1, get: function() {
    return this.hasAnnotation ? "/Widget" : null;
  } });
  var x, F = !1;
  Object.defineProperty(this, "hasAppearanceStream", { enumerable: !0, configurable: !0, get: function() {
    return F;
  }, set: function(v) {
    v = !!v, F = v;
  } }), Object.defineProperty(this, "page", { enumerable: !0, configurable: !0, get: function() {
    if (x) return x;
  }, set: function(v) {
    x = v;
  } }), Object.defineProperty(this, "readOnly", { enumerable: !0, configurable: !0, get: function() {
    return !!He(this.Ff, 1);
  }, set: function(v) {
    v ? this.Ff = Ue(this.Ff, 1) : this.Ff = We(this.Ff, 1);
  } }), Object.defineProperty(this, "required", { enumerable: !0, configurable: !0, get: function() {
    return !!He(this.Ff, 2);
  }, set: function(v) {
    v ? this.Ff = Ue(this.Ff, 2) : this.Ff = We(this.Ff, 2);
  } }), Object.defineProperty(this, "noExport", { enumerable: !0, configurable: !0, get: function() {
    return !!He(this.Ff, 3);
  }, set: function(v) {
    v ? this.Ff = Ue(this.Ff, 3) : this.Ff = We(this.Ff, 3);
  } });
  var E = null;
  Object.defineProperty(this, "Q", { enumerable: !0, configurable: !1, get: function() {
    if (E !== null) return E;
  }, set: function(v) {
    if ([0, 1, 2].indexOf(v) === -1) throw new Error('Invalid value "' + v + '" for attribute Q supplied.');
    E = v;
  } }), Object.defineProperty(this, "textAlign", { get: function() {
    var v;
    switch (E) {
      case 0:
      default:
        v = "left";
        break;
      case 1:
        v = "center";
        break;
      case 2:
        v = "right";
    }
    return v;
  }, configurable: !0, enumerable: !0, set: function(v) {
    switch (v) {
      case "right":
      case 2:
        E = 2;
        break;
      case "center":
      case 1:
        E = 1;
        break;
      case "left":
      case 0:
      default:
        E = 0;
    }
  } });
};
Fr(sn, gn);
var fi = function() {
  sn.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
  var i = 0;
  Object.defineProperty(this, "TI", { enumerable: !0, configurable: !1, get: function() {
    return i;
  }, set: function(r) {
    i = r;
  } }), Object.defineProperty(this, "topIndex", { enumerable: !0, configurable: !0, get: function() {
    return i;
  }, set: function(r) {
    i = r;
  } });
  var e = [];
  Object.defineProperty(this, "Opt", { enumerable: !0, configurable: !1, get: function() {
    return Eu(e, this.objId, this.scope);
  }, set: function(r) {
    var a, u;
    u = [], typeof (a = r) == "string" && (u = function(o, f, h) {
      h || (h = 1);
      for (var c, g = []; c = f.exec(o); ) g.push(c[h]);
      return g;
    }(a, /\((.*?)\)/g)), e = u;
  } }), this.getOptions = function() {
    return e;
  }, this.setOptions = function(r) {
    e = r, this.sort && e.sort();
  }, this.addOption = function(r) {
    r = (r = r || "").toString(), e.push(r), this.sort && e.sort();
  }, this.removeOption = function(r, a) {
    for (a = a || !1, r = (r = r || "").toString(); e.indexOf(r) !== -1 && (e.splice(e.indexOf(r), 1), a !== !1); ) ;
  }, Object.defineProperty(this, "combo", { enumerable: !0, configurable: !0, get: function() {
    return !!He(this.Ff, 18);
  }, set: function(r) {
    r ? this.Ff = Ue(this.Ff, 18) : this.Ff = We(this.Ff, 18);
  } }), Object.defineProperty(this, "edit", { enumerable: !0, configurable: !0, get: function() {
    return !!He(this.Ff, 19);
  }, set: function(r) {
    this.combo === !0 && (r ? this.Ff = Ue(this.Ff, 19) : this.Ff = We(this.Ff, 19));
  } }), Object.defineProperty(this, "sort", { enumerable: !0, configurable: !0, get: function() {
    return !!He(this.Ff, 20);
  }, set: function(r) {
    r ? (this.Ff = Ue(this.Ff, 20), e.sort()) : this.Ff = We(this.Ff, 20);
  } }), Object.defineProperty(this, "multiSelect", { enumerable: !0, configurable: !0, get: function() {
    return !!He(this.Ff, 22);
  }, set: function(r) {
    r ? this.Ff = Ue(this.Ff, 22) : this.Ff = We(this.Ff, 22);
  } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: !0, configurable: !0, get: function() {
    return !!He(this.Ff, 23);
  }, set: function(r) {
    r ? this.Ff = Ue(this.Ff, 23) : this.Ff = We(this.Ff, 23);
  } }), Object.defineProperty(this, "commitOnSelChange", { enumerable: !0, configurable: !0, get: function() {
    return !!He(this.Ff, 27);
  }, set: function(r) {
    r ? this.Ff = Ue(this.Ff, 27) : this.Ff = We(this.Ff, 27);
  } }), this.hasAppearanceStream = !1;
};
Fr(fi, sn);
var ci = function() {
  fi.call(this), this.fontName = "helvetica", this.combo = !1;
};
Fr(ci, fi);
var hi = function() {
  ci.call(this), this.combo = !0;
};
Fr(hi, ci);
var ya = function() {
  hi.call(this), this.edit = !0;
};
Fr(ya, hi);
var Ze = function() {
  sn.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", { enumerable: !0, configurable: !0, get: function() {
    return !!He(this.Ff, 15);
  }, set: function(r) {
    r ? this.Ff = Ue(this.Ff, 15) : this.Ff = We(this.Ff, 15);
  } }), Object.defineProperty(this, "radio", { enumerable: !0, configurable: !0, get: function() {
    return !!He(this.Ff, 16);
  }, set: function(r) {
    r ? this.Ff = Ue(this.Ff, 16) : this.Ff = We(this.Ff, 16);
  } }), Object.defineProperty(this, "pushButton", { enumerable: !0, configurable: !0, get: function() {
    return !!He(this.Ff, 17);
  }, set: function(r) {
    r ? this.Ff = Ue(this.Ff, 17) : this.Ff = We(this.Ff, 17);
  } }), Object.defineProperty(this, "radioIsUnison", { enumerable: !0, configurable: !0, get: function() {
    return !!He(this.Ff, 26);
  }, set: function(r) {
    r ? this.Ff = Ue(this.Ff, 26) : this.Ff = We(this.Ff, 26);
  } });
  var i, e = {};
  Object.defineProperty(this, "MK", { enumerable: !1, configurable: !1, get: function() {
    var r = function(o) {
      return o;
    };
    if (this.scope && (r = this.scope.internal.getEncryptor(this.objId)), Object.keys(e).length !== 0) {
      var a, u = [];
      for (a in u.push("<<"), e) u.push("/" + a + " (" + pi(r(e[a])) + ")");
      return u.push(">>"), u.join(`
`);
    }
  }, set: function(r) {
    xe(r) === "object" && (e = r);
  } }), Object.defineProperty(this, "caption", { enumerable: !0, configurable: !0, get: function() {
    return e.CA || "";
  }, set: function(r) {
    typeof r == "string" && (e.CA = r);
  } }), Object.defineProperty(this, "AS", { enumerable: !1, configurable: !1, get: function() {
    return i;
  }, set: function(r) {
    i = r;
  } }), Object.defineProperty(this, "appearanceState", { enumerable: !0, configurable: !0, get: function() {
    return i.substr(1, i.length - 1);
  }, set: function(r) {
    i = "/" + r;
  } });
};
Fr(Ze, sn);
var wa = function() {
  Ze.call(this), this.pushButton = !0;
};
Fr(wa, Ze);
var di = function() {
  Ze.call(this), this.radio = !0, this.pushButton = !1;
  var i = [];
  Object.defineProperty(this, "Kids", { enumerable: !0, configurable: !1, get: function() {
    return i;
  }, set: function(e) {
    i = e !== void 0 ? e : [];
  } });
};
Fr(di, Ze);
var Lo = function() {
  var i, e;
  sn.call(this), Object.defineProperty(this, "Parent", { enumerable: !1, configurable: !1, get: function() {
    return i;
  }, set: function(u) {
    i = u;
  } }), Object.defineProperty(this, "optionName", { enumerable: !1, configurable: !0, get: function() {
    return e;
  }, set: function(u) {
    e = u;
  } });
  var r, a = {};
  Object.defineProperty(this, "MK", { enumerable: !1, configurable: !1, get: function() {
    var u = function(h) {
      return h;
    };
    this.scope && (u = this.scope.internal.getEncryptor(this.objId));
    var o, f = [];
    for (o in f.push("<<"), a) f.push("/" + o + " (" + pi(u(a[o])) + ")");
    return f.push(">>"), f.join(`
`);
  }, set: function(u) {
    xe(u) === "object" && (a = u);
  } }), Object.defineProperty(this, "caption", { enumerable: !0, configurable: !0, get: function() {
    return a.CA || "";
  }, set: function(u) {
    typeof u == "string" && (a.CA = u);
  } }), Object.defineProperty(this, "AS", { enumerable: !1, configurable: !1, get: function() {
    return r;
  }, set: function(u) {
    r = u;
  } }), Object.defineProperty(this, "appearanceState", { enumerable: !0, configurable: !0, get: function() {
    return r.substr(1, r.length - 1);
  }, set: function(u) {
    r = "/" + u;
  } }), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = Rt.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName);
};
Fr(Lo, sn), di.prototype.setAppearance = function(i) {
  if (!("createAppearanceStream" in i) || !("getCA" in i)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
  for (var e in this.Kids) if (this.Kids.hasOwnProperty(e)) {
    var r = this.Kids[e];
    r.appearanceStreamContent = i.createAppearanceStream(r.optionName), r.caption = i.getCA();
  }
}, di.prototype.createOption = function(i) {
  var e = new Lo();
  return e.Parent = this, e.optionName = i, this.Kids.push(e), Wl.call(this.scope, e), e;
};
var Aa = function() {
  Ze.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = Rt.CheckBox.createAppearanceStream();
};
Fr(Aa, Ze);
var Yn = function() {
  sn.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", { enumerable: !0, configurable: !0, get: function() {
    return !!He(this.Ff, 13);
  }, set: function(e) {
    e ? this.Ff = Ue(this.Ff, 13) : this.Ff = We(this.Ff, 13);
  } }), Object.defineProperty(this, "fileSelect", { enumerable: !0, configurable: !0, get: function() {
    return !!He(this.Ff, 21);
  }, set: function(e) {
    e ? this.Ff = Ue(this.Ff, 21) : this.Ff = We(this.Ff, 21);
  } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: !0, configurable: !0, get: function() {
    return !!He(this.Ff, 23);
  }, set: function(e) {
    e ? this.Ff = Ue(this.Ff, 23) : this.Ff = We(this.Ff, 23);
  } }), Object.defineProperty(this, "doNotScroll", { enumerable: !0, configurable: !0, get: function() {
    return !!He(this.Ff, 24);
  }, set: function(e) {
    e ? this.Ff = Ue(this.Ff, 24) : this.Ff = We(this.Ff, 24);
  } }), Object.defineProperty(this, "comb", { enumerable: !0, configurable: !0, get: function() {
    return !!He(this.Ff, 25);
  }, set: function(e) {
    e ? this.Ff = Ue(this.Ff, 25) : this.Ff = We(this.Ff, 25);
  } }), Object.defineProperty(this, "richText", { enumerable: !0, configurable: !0, get: function() {
    return !!He(this.Ff, 26);
  }, set: function(e) {
    e ? this.Ff = Ue(this.Ff, 26) : this.Ff = We(this.Ff, 26);
  } });
  var i = null;
  Object.defineProperty(this, "MaxLen", { enumerable: !0, configurable: !1, get: function() {
    return i;
  }, set: function(e) {
    i = e;
  } }), Object.defineProperty(this, "maxLength", { enumerable: !0, configurable: !0, get: function() {
    return i;
  }, set: function(e) {
    Number.isInteger(e) && (i = e);
  } }), Object.defineProperty(this, "hasAppearanceStream", { enumerable: !0, configurable: !0, get: function() {
    return this.V || this.DV;
  } });
};
Fr(Yn, sn);
var La = function() {
  Yn.call(this), Object.defineProperty(this, "password", { enumerable: !0, configurable: !0, get: function() {
    return !!He(this.Ff, 14);
  }, set: function(i) {
    i ? this.Ff = Ue(this.Ff, 14) : this.Ff = We(this.Ff, 14);
  } }), this.password = !0;
};
Fr(La, Yn);
var Rt = { CheckBox: { createAppearanceStream: function() {
  return { N: { On: Rt.CheckBox.YesNormal }, D: { On: Rt.CheckBox.YesPushDown, Off: Rt.CheckBox.OffPushDown } };
}, YesPushDown: function(i) {
  var e = pn(i);
  e.scope = i.scope;
  var r = [], a = i.scope.internal.getFont(i.fontName, i.fontStyle).id, u = i.scope.__private__.encodeColorString(i.color), o = Ss(i, i.caption);
  return r.push("0.749023 g"), r.push("0 0 " + re(Rt.internal.getWidth(i)) + " " + re(Rt.internal.getHeight(i)) + " re"), r.push("f"), r.push("BMC"), r.push("q"), r.push("0 0 1 rg"), r.push("/" + a + " " + re(o.fontSize) + " Tf " + u), r.push("BT"), r.push(o.text), r.push("ET"), r.push("Q"), r.push("EMC"), e.stream = r.join(`
`), e;
}, YesNormal: function(i) {
  var e = pn(i);
  e.scope = i.scope;
  var r = i.scope.internal.getFont(i.fontName, i.fontStyle).id, a = i.scope.__private__.encodeColorString(i.color), u = [], o = Rt.internal.getHeight(i), f = Rt.internal.getWidth(i), h = Ss(i, i.caption);
  return u.push("1 g"), u.push("0 0 " + re(f) + " " + re(o) + " re"), u.push("f"), u.push("q"), u.push("0 0 1 rg"), u.push("0 0 " + re(f - 1) + " " + re(o - 1) + " re"), u.push("W"), u.push("n"), u.push("0 g"), u.push("BT"), u.push("/" + r + " " + re(h.fontSize) + " Tf " + a), u.push(h.text), u.push("ET"), u.push("Q"), e.stream = u.join(`
`), e;
}, OffPushDown: function(i) {
  var e = pn(i);
  e.scope = i.scope;
  var r = [];
  return r.push("0.749023 g"), r.push("0 0 " + re(Rt.internal.getWidth(i)) + " " + re(Rt.internal.getHeight(i)) + " re"), r.push("f"), e.stream = r.join(`
`), e;
} }, RadioButton: { Circle: { createAppearanceStream: function(i) {
  var e = { D: { Off: Rt.RadioButton.Circle.OffPushDown }, N: {} };
  return e.N[i] = Rt.RadioButton.Circle.YesNormal, e.D[i] = Rt.RadioButton.Circle.YesPushDown, e;
}, getCA: function() {
  return "l";
}, YesNormal: function(i) {
  var e = pn(i);
  e.scope = i.scope;
  var r = [], a = Rt.internal.getWidth(i) <= Rt.internal.getHeight(i) ? Rt.internal.getWidth(i) / 4 : Rt.internal.getHeight(i) / 4;
  a = Number((0.9 * a).toFixed(5));
  var u = Rt.internal.Bezier_C, o = Number((a * u).toFixed(5));
  return r.push("q"), r.push("1 0 0 1 " + Un(Rt.internal.getWidth(i) / 2) + " " + Un(Rt.internal.getHeight(i) / 2) + " cm"), r.push(a + " 0 m"), r.push(a + " " + o + " " + o + " " + a + " 0 " + a + " c"), r.push("-" + o + " " + a + " -" + a + " " + o + " -" + a + " 0 c"), r.push("-" + a + " -" + o + " -" + o + " -" + a + " 0 -" + a + " c"), r.push(o + " -" + a + " " + a + " -" + o + " " + a + " 0 c"), r.push("f"), r.push("Q"), e.stream = r.join(`
`), e;
}, YesPushDown: function(i) {
  var e = pn(i);
  e.scope = i.scope;
  var r = [], a = Rt.internal.getWidth(i) <= Rt.internal.getHeight(i) ? Rt.internal.getWidth(i) / 4 : Rt.internal.getHeight(i) / 4;
  a = Number((0.9 * a).toFixed(5));
  var u = Number((2 * a).toFixed(5)), o = Number((u * Rt.internal.Bezier_C).toFixed(5)), f = Number((a * Rt.internal.Bezier_C).toFixed(5));
  return r.push("0.749023 g"), r.push("q"), r.push("1 0 0 1 " + Un(Rt.internal.getWidth(i) / 2) + " " + Un(Rt.internal.getHeight(i) / 2) + " cm"), r.push(u + " 0 m"), r.push(u + " " + o + " " + o + " " + u + " 0 " + u + " c"), r.push("-" + o + " " + u + " -" + u + " " + o + " -" + u + " 0 c"), r.push("-" + u + " -" + o + " -" + o + " -" + u + " 0 -" + u + " c"), r.push(o + " -" + u + " " + u + " -" + o + " " + u + " 0 c"), r.push("f"), r.push("Q"), r.push("0 g"), r.push("q"), r.push("1 0 0 1 " + Un(Rt.internal.getWidth(i) / 2) + " " + Un(Rt.internal.getHeight(i) / 2) + " cm"), r.push(a + " 0 m"), r.push(a + " " + f + " " + f + " " + a + " 0 " + a + " c"), r.push("-" + f + " " + a + " -" + a + " " + f + " -" + a + " 0 c"), r.push("-" + a + " -" + f + " -" + f + " -" + a + " 0 -" + a + " c"), r.push(f + " -" + a + " " + a + " -" + f + " " + a + " 0 c"), r.push("f"), r.push("Q"), e.stream = r.join(`
`), e;
}, OffPushDown: function(i) {
  var e = pn(i);
  e.scope = i.scope;
  var r = [], a = Rt.internal.getWidth(i) <= Rt.internal.getHeight(i) ? Rt.internal.getWidth(i) / 4 : Rt.internal.getHeight(i) / 4;
  a = Number((0.9 * a).toFixed(5));
  var u = Number((2 * a).toFixed(5)), o = Number((u * Rt.internal.Bezier_C).toFixed(5));
  return r.push("0.749023 g"), r.push("q"), r.push("1 0 0 1 " + Un(Rt.internal.getWidth(i) / 2) + " " + Un(Rt.internal.getHeight(i) / 2) + " cm"), r.push(u + " 0 m"), r.push(u + " " + o + " " + o + " " + u + " 0 " + u + " c"), r.push("-" + o + " " + u + " -" + u + " " + o + " -" + u + " 0 c"), r.push("-" + u + " -" + o + " -" + o + " -" + u + " 0 -" + u + " c"), r.push(o + " -" + u + " " + u + " -" + o + " " + u + " 0 c"), r.push("f"), r.push("Q"), e.stream = r.join(`
`), e;
} }, Cross: { createAppearanceStream: function(i) {
  var e = { D: { Off: Rt.RadioButton.Cross.OffPushDown }, N: {} };
  return e.N[i] = Rt.RadioButton.Cross.YesNormal, e.D[i] = Rt.RadioButton.Cross.YesPushDown, e;
}, getCA: function() {
  return "8";
}, YesNormal: function(i) {
  var e = pn(i);
  e.scope = i.scope;
  var r = [], a = Rt.internal.calculateCross(i);
  return r.push("q"), r.push("1 1 " + re(Rt.internal.getWidth(i) - 2) + " " + re(Rt.internal.getHeight(i) - 2) + " re"), r.push("W"), r.push("n"), r.push(re(a.x1.x) + " " + re(a.x1.y) + " m"), r.push(re(a.x2.x) + " " + re(a.x2.y) + " l"), r.push(re(a.x4.x) + " " + re(a.x4.y) + " m"), r.push(re(a.x3.x) + " " + re(a.x3.y) + " l"), r.push("s"), r.push("Q"), e.stream = r.join(`
`), e;
}, YesPushDown: function(i) {
  var e = pn(i);
  e.scope = i.scope;
  var r = Rt.internal.calculateCross(i), a = [];
  return a.push("0.749023 g"), a.push("0 0 " + re(Rt.internal.getWidth(i)) + " " + re(Rt.internal.getHeight(i)) + " re"), a.push("f"), a.push("q"), a.push("1 1 " + re(Rt.internal.getWidth(i) - 2) + " " + re(Rt.internal.getHeight(i) - 2) + " re"), a.push("W"), a.push("n"), a.push(re(r.x1.x) + " " + re(r.x1.y) + " m"), a.push(re(r.x2.x) + " " + re(r.x2.y) + " l"), a.push(re(r.x4.x) + " " + re(r.x4.y) + " m"), a.push(re(r.x3.x) + " " + re(r.x3.y) + " l"), a.push("s"), a.push("Q"), e.stream = a.join(`
`), e;
}, OffPushDown: function(i) {
  var e = pn(i);
  e.scope = i.scope;
  var r = [];
  return r.push("0.749023 g"), r.push("0 0 " + re(Rt.internal.getWidth(i)) + " " + re(Rt.internal.getHeight(i)) + " re"), r.push("f"), e.stream = r.join(`
`), e;
} } }, createDefaultAppearanceStream: function(i) {
  var e = i.scope.internal.getFont(i.fontName, i.fontStyle).id, r = i.scope.__private__.encodeColorString(i.color);
  return "/" + e + " " + i.fontSize + " Tf " + r;
} };
Rt.internal = { Bezier_C: 0.551915024494, calculateCross: function(i) {
  var e = Rt.internal.getWidth(i), r = Rt.internal.getHeight(i), a = Math.min(e, r);
  return { x1: { x: (e - a) / 2, y: (r - a) / 2 + a }, x2: { x: (e - a) / 2 + a, y: (r - a) / 2 }, x3: { x: (e - a) / 2, y: (r - a) / 2 }, x4: { x: (e - a) / 2 + a, y: (r - a) / 2 + a } };
} }, Rt.internal.getWidth = function(i) {
  var e = 0;
  return xe(i) === "object" && (e = uu(i.Rect[2])), e;
}, Rt.internal.getHeight = function(i) {
  var e = 0;
  return xe(i) === "object" && (e = uu(i.Rect[3])), e;
};
var Wl = De.addField = function(i) {
  if (Ul(this, i), !(i instanceof sn)) throw new Error("Invalid argument passed to jsPDF.addField.");
  var e;
  return (e = i).scope.internal.acroformPlugin.printedOut && (e.scope.internal.acroformPlugin.printedOut = !1, e.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e), i.page = i.scope.internal.getCurrentPageInfo().pageNumber, this;
};
De.AcroFormChoiceField = fi, De.AcroFormListBox = ci, De.AcroFormComboBox = hi, De.AcroFormEditBox = ya, De.AcroFormButton = Ze, De.AcroFormPushButton = wa, De.AcroFormRadioButton = di, De.AcroFormCheckBox = Aa, De.AcroFormTextField = Yn, De.AcroFormPasswordField = La, De.AcroFormAppearance = Rt, De.AcroForm = { ChoiceField: fi, ListBox: ci, ComboBox: hi, EditBox: ya, Button: Ze, PushButton: wa, RadioButton: di, CheckBox: Aa, TextField: Yn, PasswordField: La, Appearance: Rt }, Yt.AcroForm = { ChoiceField: fi, ListBox: ci, ComboBox: hi, EditBox: ya, Button: Ze, PushButton: wa, RadioButton: di, CheckBox: Aa, TextField: Yn, PasswordField: La, Appearance: Rt };
var Gl = Yt.AcroForm;
function Du(i) {
  return i.reduce(function(e, r, a) {
    return e[r] = a, e;
  }, {});
}
(function(i) {
  i.__addimage__ = {};
  var e = "UNKNOWN", r = { PNG: [[137, 80, 78, 71]], TIFF: [[77, 77, 0, 42], [73, 73, 42, 0]], JPEG: [[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0], [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0], [255, 216, 255, 219], [255, 216, 255, 238]], JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]], GIF87a: [[71, 73, 70, 56, 55, 97]], GIF89a: [[71, 73, 70, 56, 57, 97]], WEBP: [[82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]], BMP: [[66, 77], [66, 65], [67, 73], [67, 80], [73, 67], [80, 84]] }, a = i.__addimage__.getImageFileTypeByImageData = function(N, y) {
    var B, z, lt, U, W, K = e;
    if ((y = y || e) === "RGBA" || N.data !== void 0 && N.data instanceof Uint8ClampedArray && "height" in N && "width" in N) return "RGBA";
    if ($(N)) for (W in r) for (lt = r[W], B = 0; B < lt.length; B += 1) {
      for (U = !0, z = 0; z < lt[B].length; z += 1) if (lt[B][z] !== void 0 && lt[B][z] !== N[z]) {
        U = !1;
        break;
      }
      if (U === !0) {
        K = W;
        break;
      }
    }
    else for (W in r) for (lt = r[W], B = 0; B < lt.length; B += 1) {
      for (U = !0, z = 0; z < lt[B].length; z += 1) if (lt[B][z] !== void 0 && lt[B][z] !== N.charCodeAt(z)) {
        U = !1;
        break;
      }
      if (U === !0) {
        K = W;
        break;
      }
    }
    return K === e && y !== e && (K = y), K;
  }, u = function N(y) {
    for (var B = this.internal.write, z = this.internal.putStream, lt = (0, this.internal.getFilters)(); lt.indexOf("FlateEncode") !== -1; ) lt.splice(lt.indexOf("FlateEncode"), 1);
    y.objectId = this.internal.newObject();
    var U = [];
    if (U.push({ key: "Type", value: "/XObject" }), U.push({ key: "Subtype", value: "/Image" }), U.push({ key: "Width", value: y.width }), U.push({ key: "Height", value: y.height }), y.colorSpace === E.INDEXED ? U.push({ key: "ColorSpace", value: "[/Indexed /DeviceRGB " + (y.palette.length / 3 - 1) + " " + ("sMask" in y && y.sMask !== void 0 ? y.objectId + 2 : y.objectId + 1) + " 0 R]" }) : (U.push({ key: "ColorSpace", value: "/" + y.colorSpace }), y.colorSpace === E.DEVICE_CMYK && U.push({ key: "Decode", value: "[1 0 1 0 1 0 1 0]" })), U.push({ key: "BitsPerComponent", value: y.bitsPerComponent }), "decodeParameters" in y && y.decodeParameters !== void 0 && U.push({ key: "DecodeParms", value: "<<" + y.decodeParameters + ">>" }), "transparency" in y && Array.isArray(y.transparency)) {
      for (var W = "", K = 0, J = y.transparency.length; K < J; K++) W += y.transparency[K] + " " + y.transparency[K] + " ";
      U.push({ key: "Mask", value: "[" + W + "]" });
    }
    y.sMask !== void 0 && U.push({ key: "SMask", value: y.objectId + 1 + " 0 R" });
    var st = y.filter !== void 0 ? ["/" + y.filter] : void 0;
    if (z({ data: y.data, additionalKeyValues: U, alreadyAppliedFilters: st, objectId: y.objectId }), B("endobj"), "sMask" in y && y.sMask !== void 0) {
      var gt = "/Predictor " + y.predictor + " /Colors 1 /BitsPerComponent " + y.bitsPerComponent + " /Columns " + y.width, m = { width: y.width, height: y.height, colorSpace: "DeviceGray", bitsPerComponent: y.bitsPerComponent, decodeParameters: gt, data: y.sMask };
      "filter" in y && (m.filter = y.filter), N.call(this, m);
    }
    if (y.colorSpace === E.INDEXED) {
      var O = this.internal.newObject();
      z({ data: j(new Uint8Array(y.palette)), objectId: O }), B("endobj");
    }
  }, o = function() {
    var N = this.internal.collections.addImage_images;
    for (var y in N) u.call(this, N[y]);
  }, f = function() {
    var N, y = this.internal.collections.addImage_images, B = this.internal.write;
    for (var z in y) B("/I" + (N = y[z]).index, N.objectId, "0", "R");
  }, h = function() {
    this.internal.collections.addImage_images || (this.internal.collections.addImage_images = {}, this.internal.events.subscribe("putResources", o), this.internal.events.subscribe("putXobjectDict", f));
  }, c = function() {
    var N = this.internal.collections.addImage_images;
    return h.call(this), N;
  }, g = function() {
    return Object.keys(this.internal.collections.addImage_images).length;
  }, P = function(N) {
    return typeof i["process" + N.toUpperCase()] == "function";
  }, A = function(N) {
    return xe(N) === "object" && N.nodeType === 1;
  }, L = function(N, y) {
    if (N.nodeName === "IMG" && N.hasAttribute("src")) {
      var B = "" + N.getAttribute("src");
      if (B.indexOf("data:image/") === 0) return ba(unescape(B).split("base64,").pop());
      var z = i.loadFile(B, !0);
      if (z !== void 0) return z;
    }
    if (N.nodeName === "CANVAS") {
      if (N.width === 0 || N.height === 0) throw new Error("Given canvas must have data. Canvas width: " + N.width + ", height: " + N.height);
      var lt;
      switch (y) {
        case "PNG":
          lt = "image/png";
          break;
        case "WEBP":
          lt = "image/webp";
          break;
        case "JPEG":
        case "JPG":
        default:
          lt = "image/jpeg";
      }
      return ba(N.toDataURL(lt, 1).split("base64,").pop());
    }
  }, d = function(N) {
    var y = this.internal.collections.addImage_images;
    if (y) {
      for (var B in y) if (N === y[B].alias) return y[B];
    }
  }, x = function(N, y, B) {
    return N || y || (N = -96, y = -96), N < 0 && (N = -1 * B.width * 72 / N / this.internal.scaleFactor), y < 0 && (y = -1 * B.height * 72 / y / this.internal.scaleFactor), N === 0 && (N = y * B.width / B.height), y === 0 && (y = N * B.height / B.width), [N, y];
  }, F = function(N, y, B, z, lt, U) {
    var W = x.call(this, B, z, lt), K = this.internal.getCoordinateString, J = this.internal.getVerticalCoordinateString, st = c.call(this);
    if (B = W[0], z = W[1], st[lt.index] = lt, U) {
      U *= Math.PI / 180;
      var gt = Math.cos(U), m = Math.sin(U), O = function(V) {
        return V.toFixed(4);
      }, q = [O(gt), O(m), O(-1 * m), O(gt), 0, 0, "cm"];
    }
    this.internal.write("q"), U ? (this.internal.write([1, "0", "0", 1, K(N), J(y + z), "cm"].join(" ")), this.internal.write(q.join(" ")), this.internal.write([K(B), "0", "0", K(z), "0", "0", "cm"].join(" "))) : this.internal.write([K(B), "0", "0", K(z), K(N), J(y + z), "cm"].join(" ")), this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")), this.internal.write("/I" + lt.index + " Do"), this.internal.write("Q");
  }, E = i.color_spaces = { DEVICE_RGB: "DeviceRGB", DEVICE_GRAY: "DeviceGray", DEVICE_CMYK: "DeviceCMYK", CAL_GREY: "CalGray", CAL_RGB: "CalRGB", LAB: "Lab", ICC_BASED: "ICCBased", INDEXED: "Indexed", PATTERN: "Pattern", SEPARATION: "Separation", DEVICE_N: "DeviceN" };
  i.decode = { DCT_DECODE: "DCTDecode", FLATE_DECODE: "FlateDecode", LZW_DECODE: "LZWDecode", JPX_DECODE: "JPXDecode", JBIG2_DECODE: "JBIG2Decode", ASCII85_DECODE: "ASCII85Decode", ASCII_HEX_DECODE: "ASCIIHexDecode", RUN_LENGTH_DECODE: "RunLengthDecode", CCITT_FAX_DECODE: "CCITTFaxDecode" };
  var v = i.image_compression = { NONE: "NONE", FAST: "FAST", MEDIUM: "MEDIUM", SLOW: "SLOW" }, S = i.__addimage__.sHashCode = function(N) {
    var y, B, z = 0;
    if (typeof N == "string") for (B = N.length, y = 0; y < B; y++) z = (z << 5) - z + N.charCodeAt(y), z |= 0;
    else if ($(N)) for (B = N.byteLength / 2, y = 0; y < B; y++) z = (z << 5) - z + N[y], z |= 0;
    return z;
  }, C = i.__addimage__.validateStringAsBase64 = function(N) {
    (N = N || "").toString().trim();
    var y = !0;
    return N.length === 0 && (y = !1), N.length % 4 != 0 && (y = !1), /^[A-Za-z0-9+/]+$/.test(N.substr(0, N.length - 2)) === !1 && (y = !1), /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(N.substr(-2)) === !1 && (y = !1), y;
  }, D = i.__addimage__.extractImageFromDataUrl = function(N) {
    var y = (N = N || "").split("base64,"), B = null;
    if (y.length === 2) {
      var z = /^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(y[0]);
      Array.isArray(z) && (B = { mimeType: z[1], charset: z[2], data: y[1] });
    }
    return B;
  }, G = i.__addimage__.supportsArrayBuffer = function() {
    return typeof ArrayBuffer < "u" && typeof Uint8Array < "u";
  };
  i.__addimage__.isArrayBuffer = function(N) {
    return G() && N instanceof ArrayBuffer;
  };
  var $ = i.__addimage__.isArrayBufferView = function(N) {
    return G() && typeof Uint32Array < "u" && (N instanceof Int8Array || N instanceof Uint8Array || typeof Uint8ClampedArray < "u" && N instanceof Uint8ClampedArray || N instanceof Int16Array || N instanceof Uint16Array || N instanceof Int32Array || N instanceof Uint32Array || N instanceof Float32Array || N instanceof Float64Array);
  }, M = i.__addimage__.binaryStringToUint8Array = function(N) {
    for (var y = N.length, B = new Uint8Array(y), z = 0; z < y; z++) B[z] = N.charCodeAt(z);
    return B;
  }, j = i.__addimage__.arrayBufferToBinaryString = function(N) {
    for (var y = "", B = $(N) ? N : new Uint8Array(N), z = 0; z < B.length; z += 8192) y += String.fromCharCode.apply(null, B.subarray(z, z + 8192));
    return y;
  };
  i.addImage = function() {
    var N, y, B, z, lt, U, W, K, J;
    if (typeof arguments[1] == "number" ? (y = e, B = arguments[1], z = arguments[2], lt = arguments[3], U = arguments[4], W = arguments[5], K = arguments[6], J = arguments[7]) : (y = arguments[1], B = arguments[2], z = arguments[3], lt = arguments[4], U = arguments[5], W = arguments[6], K = arguments[7], J = arguments[8]), xe(N = arguments[0]) === "object" && !A(N) && "imageData" in N) {
      var st = N;
      N = st.imageData, y = st.format || y || e, B = st.x || B || 0, z = st.y || z || 0, lt = st.w || st.width || lt, U = st.h || st.height || U, W = st.alias || W, K = st.compression || K, J = st.rotation || st.angle || J;
    }
    var gt = this.internal.getFilters();
    if (K === void 0 && gt.indexOf("FlateEncode") !== -1 && (K = "SLOW"), isNaN(B) || isNaN(z)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
    h.call(this);
    var m = Z.call(this, N, y, W, K);
    return F.call(this, B, z, lt, U, m, J), this;
  };
  var Z = function(N, y, B, z) {
    var lt, U, W;
    if (typeof N == "string" && a(N) === e) {
      N = unescape(N);
      var K = Q(N, !1);
      (K !== "" || (K = i.loadFile(N, !0)) !== void 0) && (N = K);
    }
    if (A(N) && (N = L(N, y)), y = a(N, y), !P(y)) throw new Error("addImage does not support files of type '" + y + "', please ensure that a plugin for '" + y + "' support is added.");
    if (((W = B) == null || W.length === 0) && (B = function(J) {
      return typeof J == "string" || $(J) ? S(J) : $(J.data) ? S(J.data) : null;
    }(N)), (lt = d.call(this, B)) || (G() && (N instanceof Uint8Array || y === "RGBA" || (U = N, N = M(N))), lt = this["process" + y.toUpperCase()](N, g.call(this), B, function(J) {
      return J && typeof J == "string" && (J = J.toUpperCase()), J in i.image_compression ? J : v.NONE;
    }(z), U)), !lt) throw new Error("An unknown error occurred whilst processing the image.");
    return lt;
  }, Q = i.__addimage__.convertBase64ToBinaryString = function(N, y) {
    var B;
    y = typeof y != "boolean" || y;
    var z, lt = "";
    if (typeof N == "string") {
      z = (B = D(N)) !== null ? B.data : N;
      try {
        lt = ba(z);
      } catch (U) {
        if (y) throw C(z) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + U.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ");
      }
    }
    return lt;
  };
  i.getImageProperties = function(N) {
    var y, B, z = "";
    if (A(N) && (N = L(N)), typeof N == "string" && a(N) === e && ((z = Q(N, !1)) === "" && (z = i.loadFile(N) || ""), N = z), B = a(N), !P(B)) throw new Error("addImage does not support files of type '" + B + "', please ensure that a plugin for '" + B + "' support is added.");
    if (!G() || N instanceof Uint8Array || (N = M(N)), !(y = this["process" + B.toUpperCase()](N))) throw new Error("An unknown error occurred whilst processing the image");
    return y.fileType = B, y;
  };
})(Yt.API), /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(i) {
  var e = function(r) {
    if (r !== void 0 && r != "") return !0;
  };
  Yt.API.events.push(["addPage", function(r) {
    this.internal.getPageInfo(r.pageNumber).pageContext.annotations = [];
  }]), i.events.push(["putPage", function(r) {
    for (var a, u, o, f = this.internal.getCoordinateString, h = this.internal.getVerticalCoordinateString, c = this.internal.getPageInfoByObjId(r.objId), g = r.pageContext.annotations, P = !1, A = 0; A < g.length && !P; A++) switch ((a = g[A]).type) {
      case "link":
        (e(a.options.url) || e(a.options.pageNumber)) && (P = !0);
        break;
      case "reference":
      case "text":
      case "freetext":
        P = !0;
    }
    if (P != 0) {
      this.internal.write("/Annots [");
      for (var L = 0; L < g.length; L++) {
        a = g[L];
        var d = this.internal.pdfEscape, x = this.internal.getEncryptor(r.objId);
        switch (a.type) {
          case "reference":
            this.internal.write(" " + a.object.objId + " 0 R ");
            break;
          case "text":
            var F = this.internal.newAdditionalObject(), E = this.internal.newAdditionalObject(), v = this.internal.getEncryptor(F.objId), S = a.title || "Note";
            o = "<</Type /Annot /Subtype /Text " + (u = "/Rect [" + f(a.bounds.x) + " " + h(a.bounds.y + a.bounds.h) + " " + f(a.bounds.x + a.bounds.w) + " " + h(a.bounds.y) + "] ") + "/Contents (" + d(v(a.contents)) + ")", o += " /Popup " + E.objId + " 0 R", o += " /P " + c.objId + " 0 R", o += " /T (" + d(v(S)) + ") >>", F.content = o;
            var C = F.objId + " 0 R";
            o = "<</Type /Annot /Subtype /Popup " + (u = "/Rect [" + f(a.bounds.x + 30) + " " + h(a.bounds.y + a.bounds.h) + " " + f(a.bounds.x + a.bounds.w + 30) + " " + h(a.bounds.y) + "] ") + " /Parent " + C, a.open && (o += " /Open true"), o += " >>", E.content = o, this.internal.write(F.objId, "0 R", E.objId, "0 R");
            break;
          case "freetext":
            u = "/Rect [" + f(a.bounds.x) + " " + h(a.bounds.y) + " " + f(a.bounds.x + a.bounds.w) + " " + h(a.bounds.y + a.bounds.h) + "] ";
            var D = a.color || "#000000";
            o = "<</Type /Annot /Subtype /FreeText " + u + "/Contents (" + d(x(a.contents)) + ")", o += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + D + ")", o += " /Border [0 0 0]", o += " >>", this.internal.write(o);
            break;
          case "link":
            if (a.options.name) {
              var G = this.annotations._nameMap[a.options.name];
              a.options.pageNumber = G.page, a.options.top = G.y;
            } else a.options.top || (a.options.top = 0);
            if (u = "/Rect [" + a.finalBounds.x + " " + a.finalBounds.y + " " + a.finalBounds.w + " " + a.finalBounds.h + "] ", o = "", a.options.url) o = "<</Type /Annot /Subtype /Link " + u + "/Border [0 0 0] /A <</S /URI /URI (" + d(x(a.options.url)) + ") >>";
            else if (a.options.pageNumber)
              switch (o = "<</Type /Annot /Subtype /Link " + u + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(a.options.pageNumber).objId + " 0 R", a.options.magFactor = a.options.magFactor || "XYZ", a.options.magFactor) {
                case "Fit":
                  o += " /Fit]";
                  break;
                case "FitH":
                  o += " /FitH " + a.options.top + "]";
                  break;
                case "FitV":
                  a.options.left = a.options.left || 0, o += " /FitV " + a.options.left + "]";
                  break;
                case "XYZ":
                default:
                  var $ = h(a.options.top);
                  a.options.left = a.options.left || 0, a.options.zoom === void 0 && (a.options.zoom = 0), o += " /XYZ " + a.options.left + " " + $ + " " + a.options.zoom + "]";
              }
            o != "" && (o += " >>", this.internal.write(o));
        }
      }
      this.internal.write("]");
    }
  }]), i.createAnnotation = function(r) {
    var a = this.internal.getCurrentPageInfo();
    switch (r.type) {
      case "link":
        this.link(r.bounds.x, r.bounds.y, r.bounds.w, r.bounds.h, r);
        break;
      case "text":
      case "freetext":
        a.pageContext.annotations.push(r);
    }
  }, i.link = function(r, a, u, o, f) {
    var h = this.internal.getCurrentPageInfo(), c = this.internal.getCoordinateString, g = this.internal.getVerticalCoordinateString;
    h.pageContext.annotations.push({ finalBounds: { x: c(r), y: g(a), w: c(r + u), h: g(a + o) }, options: f, type: "link" });
  }, i.textWithLink = function(r, a, u, o) {
    var f, h, c = this.getTextWidth(r), g = this.internal.getLineHeight() / this.internal.scaleFactor;
    if (o.maxWidth !== void 0) {
      h = o.maxWidth;
      var P = this.splitTextToSize(r, h).length;
      f = Math.ceil(g * P);
    } else h = c, f = g;
    return this.text(r, a, u, o), u += 0.2 * g, o.align === "center" && (a -= c / 2), o.align === "right" && (a -= c), this.link(a, u - g, h, f, o), c;
  }, i.getTextWidth = function(r) {
    var a = this.internal.getFontSize();
    return this.getStringUnitWidth(r) * a / this.internal.scaleFactor;
  };
}(Yt.API), /**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(i) {
  var e = { 1569: [65152], 1570: [65153, 65154], 1571: [65155, 65156], 1572: [65157, 65158], 1573: [65159, 65160], 1574: [65161, 65162, 65163, 65164], 1575: [65165, 65166], 1576: [65167, 65168, 65169, 65170], 1577: [65171, 65172], 1578: [65173, 65174, 65175, 65176], 1579: [65177, 65178, 65179, 65180], 1580: [65181, 65182, 65183, 65184], 1581: [65185, 65186, 65187, 65188], 1582: [65189, 65190, 65191, 65192], 1583: [65193, 65194], 1584: [65195, 65196], 1585: [65197, 65198], 1586: [65199, 65200], 1587: [65201, 65202, 65203, 65204], 1588: [65205, 65206, 65207, 65208], 1589: [65209, 65210, 65211, 65212], 1590: [65213, 65214, 65215, 65216], 1591: [65217, 65218, 65219, 65220], 1592: [65221, 65222, 65223, 65224], 1593: [65225, 65226, 65227, 65228], 1594: [65229, 65230, 65231, 65232], 1601: [65233, 65234, 65235, 65236], 1602: [65237, 65238, 65239, 65240], 1603: [65241, 65242, 65243, 65244], 1604: [65245, 65246, 65247, 65248], 1605: [65249, 65250, 65251, 65252], 1606: [65253, 65254, 65255, 65256], 1607: [65257, 65258, 65259, 65260], 1608: [65261, 65262], 1609: [65263, 65264, 64488, 64489], 1610: [65265, 65266, 65267, 65268], 1649: [64336, 64337], 1655: [64477], 1657: [64358, 64359, 64360, 64361], 1658: [64350, 64351, 64352, 64353], 1659: [64338, 64339, 64340, 64341], 1662: [64342, 64343, 64344, 64345], 1663: [64354, 64355, 64356, 64357], 1664: [64346, 64347, 64348, 64349], 1667: [64374, 64375, 64376, 64377], 1668: [64370, 64371, 64372, 64373], 1670: [64378, 64379, 64380, 64381], 1671: [64382, 64383, 64384, 64385], 1672: [64392, 64393], 1676: [64388, 64389], 1677: [64386, 64387], 1678: [64390, 64391], 1681: [64396, 64397], 1688: [64394, 64395], 1700: [64362, 64363, 64364, 64365], 1702: [64366, 64367, 64368, 64369], 1705: [64398, 64399, 64400, 64401], 1709: [64467, 64468, 64469, 64470], 1711: [64402, 64403, 64404, 64405], 1713: [64410, 64411, 64412, 64413], 1715: [64406, 64407, 64408, 64409], 1722: [64414, 64415], 1723: [64416, 64417, 64418, 64419], 1726: [64426, 64427, 64428, 64429], 1728: [64420, 64421], 1729: [64422, 64423, 64424, 64425], 1733: [64480, 64481], 1734: [64473, 64474], 1735: [64471, 64472], 1736: [64475, 64476], 1737: [64482, 64483], 1739: [64478, 64479], 1740: [64508, 64509, 64510, 64511], 1744: [64484, 64485, 64486, 64487], 1746: [64430, 64431], 1747: [64432, 64433] }, r = { 65247: { 65154: 65269, 65156: 65271, 65160: 65273, 65166: 65275 }, 65248: { 65154: 65270, 65156: 65272, 65160: 65274, 65166: 65276 }, 65165: { 65247: { 65248: { 65258: 65010 } } }, 1617: { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 } }, a = { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 }, u = [1570, 1571, 1573, 1575];
  i.__arabicParser__ = {};
  var o = i.__arabicParser__.isInArabicSubstitutionA = function(F) {
    return e[F.charCodeAt(0)] !== void 0;
  }, f = i.__arabicParser__.isArabicLetter = function(F) {
    return typeof F == "string" && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(F);
  }, h = i.__arabicParser__.isArabicEndLetter = function(F) {
    return f(F) && o(F) && e[F.charCodeAt(0)].length <= 2;
  }, c = i.__arabicParser__.isArabicAlfLetter = function(F) {
    return f(F) && u.indexOf(F.charCodeAt(0)) >= 0;
  };
  i.__arabicParser__.arabicLetterHasIsolatedForm = function(F) {
    return f(F) && o(F) && e[F.charCodeAt(0)].length >= 1;
  };
  var g = i.__arabicParser__.arabicLetterHasFinalForm = function(F) {
    return f(F) && o(F) && e[F.charCodeAt(0)].length >= 2;
  };
  i.__arabicParser__.arabicLetterHasInitialForm = function(F) {
    return f(F) && o(F) && e[F.charCodeAt(0)].length >= 3;
  };
  var P = i.__arabicParser__.arabicLetterHasMedialForm = function(F) {
    return f(F) && o(F) && e[F.charCodeAt(0)].length == 4;
  }, A = i.__arabicParser__.resolveLigatures = function(F) {
    var E = 0, v = r, S = "", C = 0;
    for (E = 0; E < F.length; E += 1) v[F.charCodeAt(E)] !== void 0 ? (C++, typeof (v = v[F.charCodeAt(E)]) == "number" && (S += String.fromCharCode(v), v = r, C = 0), E === F.length - 1 && (v = r, S += F.charAt(E - (C - 1)), E -= C - 1, C = 0)) : (v = r, S += F.charAt(E - C), E -= C, C = 0);
    return S;
  };
  i.__arabicParser__.isArabicDiacritic = function(F) {
    return F !== void 0 && a[F.charCodeAt(0)] !== void 0;
  };
  var L = i.__arabicParser__.getCorrectForm = function(F, E, v) {
    return f(F) ? o(F) === !1 ? -1 : !g(F) || !f(E) && !f(v) || !f(v) && h(E) || h(F) && !f(E) || h(F) && c(E) || h(F) && h(E) ? 0 : P(F) && f(E) && !h(E) && f(v) && g(v) ? 3 : h(F) || !f(v) ? 1 : 2 : -1;
  }, d = function(F) {
    var E = 0, v = 0, S = 0, C = "", D = "", G = "", $ = (F = F || "").split("\\s+"), M = [];
    for (E = 0; E < $.length; E += 1) {
      for (M.push(""), v = 0; v < $[E].length; v += 1) C = $[E][v], D = $[E][v - 1], G = $[E][v + 1], f(C) ? (S = L(C, D, G), M[E] += S !== -1 ? String.fromCharCode(e[C.charCodeAt(0)][S]) : C) : M[E] += C;
      M[E] = A(M[E]);
    }
    return M.join(" ");
  }, x = i.__arabicParser__.processArabic = i.processArabic = function() {
    var F, E = typeof arguments[0] == "string" ? arguments[0] : arguments[0].text, v = [];
    if (Array.isArray(E)) {
      var S = 0;
      for (v = [], S = 0; S < E.length; S += 1) Array.isArray(E[S]) ? v.push([d(E[S][0]), E[S][1], E[S][2]]) : v.push([d(E[S])]);
      F = v;
    } else F = d(E);
    return typeof arguments[0] == "string" ? F : (arguments[0].text = F, arguments[0]);
  };
  i.events.push(["preProcessText", x]);
}(Yt.API), Yt.API.autoPrint = function(i) {
  var e;
  switch ((i = i || {}).variant = i.variant || "non-conform", i.variant) {
    case "javascript":
      this.addJS("print({});");
      break;
    case "non-conform":
    default:
      this.internal.events.subscribe("postPutResources", function() {
        e = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj");
      }), this.internal.events.subscribe("putCatalog", function() {
        this.internal.out("/OpenAction " + e + " 0 R");
      });
  }
  return this;
}, /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(i) {
  var e = function() {
    var r = void 0;
    Object.defineProperty(this, "pdf", { get: function() {
      return r;
    }, set: function(h) {
      r = h;
    } });
    var a = 150;
    Object.defineProperty(this, "width", { get: function() {
      return a;
    }, set: function(h) {
      a = isNaN(h) || Number.isInteger(h) === !1 || h < 0 ? 150 : h, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = a + 1);
    } });
    var u = 300;
    Object.defineProperty(this, "height", { get: function() {
      return u;
    }, set: function(h) {
      u = isNaN(h) || Number.isInteger(h) === !1 || h < 0 ? 300 : h, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = u + 1);
    } });
    var o = [];
    Object.defineProperty(this, "childNodes", { get: function() {
      return o;
    }, set: function(h) {
      o = h;
    } });
    var f = {};
    Object.defineProperty(this, "style", { get: function() {
      return f;
    }, set: function(h) {
      f = h;
    } }), Object.defineProperty(this, "parentNode", {});
  };
  e.prototype.getContext = function(r, a) {
    var u;
    if ((r = r || "2d") !== "2d") return null;
    for (u in a) this.pdf.context2d.hasOwnProperty(u) && (this.pdf.context2d[u] = a[u]);
    return this.pdf.context2d._canvas = this, this.pdf.context2d;
  }, e.prototype.toDataURL = function() {
    throw new Error("toDataURL is not implemented.");
  }, i.events.push(["initialized", function() {
    this.canvas = new e(), this.canvas.pdf = this;
  }]);
}(Yt.API), function(i) {
  var e = { left: 0, top: 0, bottom: 0, right: 0 }, r = !1, a = function() {
    this.internal.__cell__ === void 0 && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, e), this.internal.__cell__.margins.width = this.getPageWidth(), u.call(this));
  }, u = function() {
    this.internal.__cell__.lastCell = new o(), this.internal.__cell__.pages = 1;
  }, o = function() {
    var c = arguments[0];
    Object.defineProperty(this, "x", { enumerable: !0, get: function() {
      return c;
    }, set: function(F) {
      c = F;
    } });
    var g = arguments[1];
    Object.defineProperty(this, "y", { enumerable: !0, get: function() {
      return g;
    }, set: function(F) {
      g = F;
    } });
    var P = arguments[2];
    Object.defineProperty(this, "width", { enumerable: !0, get: function() {
      return P;
    }, set: function(F) {
      P = F;
    } });
    var A = arguments[3];
    Object.defineProperty(this, "height", { enumerable: !0, get: function() {
      return A;
    }, set: function(F) {
      A = F;
    } });
    var L = arguments[4];
    Object.defineProperty(this, "text", { enumerable: !0, get: function() {
      return L;
    }, set: function(F) {
      L = F;
    } });
    var d = arguments[5];
    Object.defineProperty(this, "lineNumber", { enumerable: !0, get: function() {
      return d;
    }, set: function(F) {
      d = F;
    } });
    var x = arguments[6];
    return Object.defineProperty(this, "align", { enumerable: !0, get: function() {
      return x;
    }, set: function(F) {
      x = F;
    } }), this;
  };
  o.prototype.clone = function() {
    return new o(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align);
  }, o.prototype.toArray = function() {
    return [this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align];
  }, i.setHeaderFunction = function(c) {
    return a.call(this), this.internal.__cell__.headerFunction = typeof c == "function" ? c : void 0, this;
  }, i.getTextDimensions = function(c, g) {
    a.call(this);
    var P = (g = g || {}).fontSize || this.getFontSize(), A = g.font || this.getFont(), L = g.scaleFactor || this.internal.scaleFactor, d = 0, x = 0, F = 0, E = this;
    if (!Array.isArray(c) && typeof c != "string") {
      if (typeof c != "number") throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
      c = String(c);
    }
    var v = g.maxWidth;
    v > 0 ? typeof c == "string" ? c = this.splitTextToSize(c, v) : Object.prototype.toString.call(c) === "[object Array]" && (c = c.reduce(function(C, D) {
      return C.concat(E.splitTextToSize(D, v));
    }, [])) : c = Array.isArray(c) ? c : [c];
    for (var S = 0; S < c.length; S++) d < (F = this.getStringUnitWidth(c[S], { font: A }) * P) && (d = F);
    return d !== 0 && (x = c.length), { w: d /= L, h: Math.max((x * P * this.getLineHeightFactor() - P * (this.getLineHeightFactor() - 1)) / L, 0) };
  }, i.cellAddPage = function() {
    a.call(this), this.addPage();
    var c = this.internal.__cell__.margins || e;
    return this.internal.__cell__.lastCell = new o(c.left, c.top, void 0, void 0), this.internal.__cell__.pages += 1, this;
  };
  var f = i.cell = function() {
    var c;
    c = arguments[0] instanceof o ? arguments[0] : new o(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), a.call(this);
    var g = this.internal.__cell__.lastCell, P = this.internal.__cell__.padding, A = this.internal.__cell__.margins || e, L = this.internal.__cell__.tableHeaderRow, d = this.internal.__cell__.printHeaders;
    return g.lineNumber !== void 0 && (g.lineNumber === c.lineNumber ? (c.x = (g.x || 0) + (g.width || 0), c.y = g.y || 0) : g.y + g.height + c.height + A.bottom > this.getPageHeight() ? (this.cellAddPage(), c.y = A.top, d && L && (this.printHeaderRow(c.lineNumber, !0), c.y += L[0].height)) : c.y = g.y + g.height || c.y), c.text[0] !== void 0 && (this.rect(c.x, c.y, c.width, c.height, r === !0 ? "FD" : void 0), c.align === "right" ? this.text(c.text, c.x + c.width - P, c.y + P, { align: "right", baseline: "top" }) : c.align === "center" ? this.text(c.text, c.x + c.width / 2, c.y + P, { align: "center", baseline: "top", maxWidth: c.width - P - P }) : this.text(c.text, c.x + P, c.y + P, { align: "left", baseline: "top", maxWidth: c.width - P - P })), this.internal.__cell__.lastCell = c, this;
  };
  i.table = function(c, g, P, A, L) {
    if (a.call(this), !P) throw new Error("No data for PDF table.");
    var d, x, F, E, v = [], S = [], C = [], D = {}, G = {}, $ = [], M = [], j = (L = L || {}).autoSize || !1, Z = L.printHeaders !== !1, Q = L.css && L.css["font-size"] !== void 0 ? 16 * L.css["font-size"] : L.fontSize || 12, N = L.margins || Object.assign({ width: this.getPageWidth() }, e), y = typeof L.padding == "number" ? L.padding : 3, B = L.headerBackgroundColor || "#c8c8c8", z = L.headerTextColor || "#000";
    if (u.call(this), this.internal.__cell__.printHeaders = Z, this.internal.__cell__.margins = N, this.internal.__cell__.table_font_size = Q, this.internal.__cell__.padding = y, this.internal.__cell__.headerBackgroundColor = B, this.internal.__cell__.headerTextColor = z, this.setFontSize(Q), A == null) S = v = Object.keys(P[0]), C = v.map(function() {
      return "left";
    });
    else if (Array.isArray(A) && xe(A[0]) === "object") for (v = A.map(function(st) {
      return st.name;
    }), S = A.map(function(st) {
      return st.prompt || st.name || "";
    }), C = A.map(function(st) {
      return st.align || "left";
    }), d = 0; d < A.length; d += 1) G[A[d].name] = A[d].width * (19.049976 / 25.4);
    else Array.isArray(A) && typeof A[0] == "string" && (S = v = A, C = v.map(function() {
      return "left";
    }));
    if (j || Array.isArray(A) && typeof A[0] == "string") for (d = 0; d < v.length; d += 1) {
      for (D[E = v[d]] = P.map(function(st) {
        return st[E];
      }), this.setFont(void 0, "bold"), $.push(this.getTextDimensions(S[d], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w), x = D[E], this.setFont(void 0, "normal"), F = 0; F < x.length; F += 1) $.push(this.getTextDimensions(x[F], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w);
      G[E] = Math.max.apply(null, $) + y + y, $ = [];
    }
    if (Z) {
      var lt = {};
      for (d = 0; d < v.length; d += 1) lt[v[d]] = {}, lt[v[d]].text = S[d], lt[v[d]].align = C[d];
      var U = h.call(this, lt, G);
      M = v.map(function(st) {
        return new o(c, g, G[st], U, lt[st].text, void 0, lt[st].align);
      }), this.setTableHeaderRow(M), this.printHeaderRow(1, !1);
    }
    var W = A.reduce(function(st, gt) {
      return st[gt.name] = gt.align, st;
    }, {});
    for (d = 0; d < P.length; d += 1) {
      "rowStart" in L && L.rowStart instanceof Function && L.rowStart({ row: d, data: P[d] }, this);
      var K = h.call(this, P[d], G);
      for (F = 0; F < v.length; F += 1) {
        var J = P[d][v[F]];
        "cellStart" in L && L.cellStart instanceof Function && L.cellStart({ row: d, col: F, data: J }, this), f.call(this, new o(c, g, G[v[F]], K, J, d + 2, W[v[F]]));
      }
    }
    return this.internal.__cell__.table_x = c, this.internal.__cell__.table_y = g, this;
  };
  var h = function(c, g) {
    var P = this.internal.__cell__.padding, A = this.internal.__cell__.table_font_size, L = this.internal.scaleFactor;
    return Object.keys(c).map(function(d) {
      var x = c[d];
      return this.splitTextToSize(x.hasOwnProperty("text") ? x.text : x, g[d] - P - P);
    }, this).map(function(d) {
      return this.getLineHeightFactor() * d.length * A / L + P + P;
    }, this).reduce(function(d, x) {
      return Math.max(d, x);
    }, 0);
  };
  i.setTableHeaderRow = function(c) {
    a.call(this), this.internal.__cell__.tableHeaderRow = c;
  }, i.printHeaderRow = function(c, g) {
    if (a.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
    var P;
    if (r = !0, typeof this.internal.__cell__.headerFunction == "function") {
      var A = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
      this.internal.__cell__.lastCell = new o(A[0], A[1], A[2], A[3], void 0, -1);
    }
    this.setFont(void 0, "bold");
    for (var L = [], d = 0; d < this.internal.__cell__.tableHeaderRow.length; d += 1) {
      P = this.internal.__cell__.tableHeaderRow[d].clone(), g && (P.y = this.internal.__cell__.margins.top || 0, L.push(P)), P.lineNumber = c;
      var x = this.getTextColor();
      this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), f.call(this, P), this.setTextColor(x);
    }
    L.length > 0 && this.setTableHeaderRow(L), this.setFont(void 0, "normal"), r = !1;
  };
}(Yt.API);
var Mu = { italic: ["italic", "oblique", "normal"], oblique: ["oblique", "italic", "normal"], normal: ["normal", "oblique", "italic"] }, Ru = ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"], xs = Du(Ru), Bu = [100, 200, 300, 400, 500, 600, 700, 800, 900], Vl = Du(Bu);
function _s(i) {
  var e = i.family.replace(/"|'/g, "").toLowerCase(), r = function(o) {
    return Mu[o = o || "normal"] ? o : "normal";
  }(i.style), a = function(o) {
    if (!o) return 400;
    if (typeof o == "number") return o >= 100 && o <= 900 && o % 100 == 0 ? o : 400;
    if (/^\d00$/.test(o)) return parseInt(o);
    switch (o) {
      case "bold":
        return 700;
      case "normal":
      default:
        return 400;
    }
  }(i.weight), u = function(o) {
    return typeof xs[o = o || "normal"] == "number" ? o : "normal";
  }(i.stretch);
  return { family: e, style: r, weight: a, stretch: u, src: i.src || [], ref: i.ref || { name: e, style: [u, r, a].join(" ") } };
}
function lu(i, e, r, a) {
  var u;
  for (u = r; u >= 0 && u < e.length; u += a) if (i[e[u]]) return i[e[u]];
  for (u = r; u >= 0 && u < e.length; u -= a) if (i[e[u]]) return i[e[u]];
}
var Yl = { "sans-serif": "helvetica", fixed: "courier", monospace: "courier", terminal: "courier", cursive: "times", fantasy: "times", serif: "times" }, fu = { caption: "times", icon: "times", menu: "times", "message-box": "times", "small-caption": "times", "status-bar": "times" };
function cu(i) {
  return [i.stretch, i.style, i.weight, i.family].join(" ");
}
function Jl(i, e, r) {
  for (var a = (r = r || {}).defaultFontFamily || "times", u = Object.assign({}, Yl, r.genericFontFamilies || {}), o = null, f = null, h = 0; h < e.length; ++h) if (u[(o = _s(e[h])).family] && (o.family = u[o.family]), i.hasOwnProperty(o.family)) {
    f = i[o.family];
    break;
  }
  if (!(f = f || i[a])) throw new Error("Could not find a font-family for the rule '" + cu(o) + "' and default family '" + a + "'.");
  if (f = function(c, g) {
    if (g[c]) return g[c];
    var P = xs[c], A = P <= xs.normal ? -1 : 1, L = lu(g, Ru, P, A);
    if (!L) throw new Error("Could not find a matching font-stretch value for " + c);
    return L;
  }(o.stretch, f), f = function(c, g) {
    if (g[c]) return g[c];
    for (var P = Mu[c], A = 0; A < P.length; ++A) if (g[P[A]]) return g[P[A]];
    throw new Error("Could not find a matching font-style for " + c);
  }(o.style, f), !(f = function(c, g) {
    if (g[c]) return g[c];
    if (c === 400 && g[500]) return g[500];
    if (c === 500 && g[400]) return g[400];
    var P = Vl[c], A = lu(g, Bu, P, c < 400 ? -1 : 1);
    if (!A) throw new Error("Could not find a matching font-weight for value " + c);
    return A;
  }(o.weight, f))) throw new Error("Failed to resolve a font for the rule '" + cu(o) + "'.");
  return f;
}
function hu(i) {
  return i.trimLeft();
}
function Xl(i, e) {
  for (var r = 0; r < i.length; ) {
    if (i.charAt(r) === e) return [i.substring(0, r), i.substring(r + 1)];
    r += 1;
  }
  return null;
}
function Kl(i) {
  var e = i.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
  return e === null ? null : [e[0], i.substring(e[0].length)];
}
var go, du, pu, hs = ["times"];
(function(i) {
  var e, r, a, u, o, f, h, c, g, P = function(m) {
    return m = m || {}, this.isStrokeTransparent = m.isStrokeTransparent || !1, this.strokeOpacity = m.strokeOpacity || 1, this.strokeStyle = m.strokeStyle || "#000000", this.fillStyle = m.fillStyle || "#000000", this.isFillTransparent = m.isFillTransparent || !1, this.fillOpacity = m.fillOpacity || 1, this.font = m.font || "10px sans-serif", this.textBaseline = m.textBaseline || "alphabetic", this.textAlign = m.textAlign || "left", this.lineWidth = m.lineWidth || 1, this.lineJoin = m.lineJoin || "miter", this.lineCap = m.lineCap || "butt", this.path = m.path || [], this.transform = m.transform !== void 0 ? m.transform.clone() : new c(), this.globalCompositeOperation = m.globalCompositeOperation || "normal", this.globalAlpha = m.globalAlpha || 1, this.clip_path = m.clip_path || [], this.currentPoint = m.currentPoint || new f(), this.miterLimit = m.miterLimit || 10, this.lastPoint = m.lastPoint || new f(), this.lineDashOffset = m.lineDashOffset || 0, this.lineDash = m.lineDash || [], this.margin = m.margin || [0, 0, 0, 0], this.prevPageLastElemOffset = m.prevPageLastElemOffset || 0, this.ignoreClearRect = typeof m.ignoreClearRect != "boolean" || m.ignoreClearRect, this;
  };
  i.events.push(["initialized", function() {
    this.context2d = new A(this), e = this.internal.f2, r = this.internal.getCoordinateString, a = this.internal.getVerticalCoordinateString, u = this.internal.getHorizontalCoordinate, o = this.internal.getVerticalCoordinate, f = this.internal.Point, h = this.internal.Rectangle, c = this.internal.Matrix, g = new P();
  }]);
  var A = function(m) {
    Object.defineProperty(this, "canvas", { get: function() {
      return { parentNode: !1, style: !1 };
    } });
    var O = m;
    Object.defineProperty(this, "pdf", { get: function() {
      return O;
    } });
    var q = !1;
    Object.defineProperty(this, "pageWrapXEnabled", { get: function() {
      return q;
    }, set: function(mt) {
      q = !!mt;
    } });
    var V = !1;
    Object.defineProperty(this, "pageWrapYEnabled", { get: function() {
      return V;
    }, set: function(mt) {
      V = !!mt;
    } });
    var X = 0;
    Object.defineProperty(this, "posX", { get: function() {
      return X;
    }, set: function(mt) {
      isNaN(mt) || (X = mt);
    } });
    var at = 0;
    Object.defineProperty(this, "posY", { get: function() {
      return at;
    }, set: function(mt) {
      isNaN(mt) || (at = mt);
    } }), Object.defineProperty(this, "margin", { get: function() {
      return g.margin;
    }, set: function(mt) {
      var Y;
      typeof mt == "number" ? Y = [mt, mt, mt, mt] : ((Y = new Array(4))[0] = mt[0], Y[1] = mt.length >= 2 ? mt[1] : Y[0], Y[2] = mt.length >= 3 ? mt[2] : Y[0], Y[3] = mt.length >= 4 ? mt[3] : Y[1]), g.margin = Y;
    } });
    var ft = !1;
    Object.defineProperty(this, "autoPaging", { get: function() {
      return ft;
    }, set: function(mt) {
      ft = mt;
    } });
    var dt = 0;
    Object.defineProperty(this, "lastBreak", { get: function() {
      return dt;
    }, set: function(mt) {
      dt = mt;
    } });
    var _t = [];
    Object.defineProperty(this, "pageBreaks", { get: function() {
      return _t;
    }, set: function(mt) {
      _t = mt;
    } }), Object.defineProperty(this, "ctx", { get: function() {
      return g;
    }, set: function(mt) {
      mt instanceof P && (g = mt);
    } }), Object.defineProperty(this, "path", { get: function() {
      return g.path;
    }, set: function(mt) {
      g.path = mt;
    } });
    var xt = [];
    Object.defineProperty(this, "ctxStack", { get: function() {
      return xt;
    }, set: function(mt) {
      xt = mt;
    } }), Object.defineProperty(this, "fillStyle", { get: function() {
      return this.ctx.fillStyle;
    }, set: function(mt) {
      var Y;
      Y = L(mt), this.ctx.fillStyle = Y.style, this.ctx.isFillTransparent = Y.a === 0, this.ctx.fillOpacity = Y.a, this.pdf.setFillColor(Y.r, Y.g, Y.b, { a: Y.a }), this.pdf.setTextColor(Y.r, Y.g, Y.b, { a: Y.a });
    } }), Object.defineProperty(this, "strokeStyle", { get: function() {
      return this.ctx.strokeStyle;
    }, set: function(mt) {
      var Y = L(mt);
      this.ctx.strokeStyle = Y.style, this.ctx.isStrokeTransparent = Y.a === 0, this.ctx.strokeOpacity = Y.a, Y.a === 0 ? this.pdf.setDrawColor(255, 255, 255) : (Y.a, this.pdf.setDrawColor(Y.r, Y.g, Y.b));
    } }), Object.defineProperty(this, "lineCap", { get: function() {
      return this.ctx.lineCap;
    }, set: function(mt) {
      ["butt", "round", "square"].indexOf(mt) !== -1 && (this.ctx.lineCap = mt, this.pdf.setLineCap(mt));
    } }), Object.defineProperty(this, "lineWidth", { get: function() {
      return this.ctx.lineWidth;
    }, set: function(mt) {
      isNaN(mt) || (this.ctx.lineWidth = mt, this.pdf.setLineWidth(mt));
    } }), Object.defineProperty(this, "lineJoin", { get: function() {
      return this.ctx.lineJoin;
    }, set: function(mt) {
      ["bevel", "round", "miter"].indexOf(mt) !== -1 && (this.ctx.lineJoin = mt, this.pdf.setLineJoin(mt));
    } }), Object.defineProperty(this, "miterLimit", { get: function() {
      return this.ctx.miterLimit;
    }, set: function(mt) {
      isNaN(mt) || (this.ctx.miterLimit = mt, this.pdf.setMiterLimit(mt));
    } }), Object.defineProperty(this, "textBaseline", { get: function() {
      return this.ctx.textBaseline;
    }, set: function(mt) {
      this.ctx.textBaseline = mt;
    } }), Object.defineProperty(this, "textAlign", { get: function() {
      return this.ctx.textAlign;
    }, set: function(mt) {
      ["right", "end", "center", "left", "start"].indexOf(mt) !== -1 && (this.ctx.textAlign = mt);
    } });
    var Ot = null;
    function jt(mt, Y) {
      if (Ot === null) {
        var Kt = function(Bt) {
          var Nt = [];
          return Object.keys(Bt).forEach(function(Pt) {
            Bt[Pt].forEach(function(Tt) {
              var Ft = null;
              switch (Tt) {
                case "bold":
                  Ft = { family: Pt, weight: "bold" };
                  break;
                case "italic":
                  Ft = { family: Pt, style: "italic" };
                  break;
                case "bolditalic":
                  Ft = { family: Pt, weight: "bold", style: "italic" };
                  break;
                case "":
                case "normal":
                  Ft = { family: Pt };
              }
              Ft !== null && (Ft.ref = { name: Pt, style: Tt }, Nt.push(Ft));
            });
          }), Nt;
        }(mt.getFontList());
        Ot = function(Bt) {
          for (var Nt = {}, Pt = 0; Pt < Bt.length; ++Pt) {
            var Tt = _s(Bt[Pt]), Ft = Tt.family, Ht = Tt.stretch, $t = Tt.style, Zt = Tt.weight;
            Nt[Ft] = Nt[Ft] || {}, Nt[Ft][Ht] = Nt[Ft][Ht] || {}, Nt[Ft][Ht][$t] = Nt[Ft][Ht][$t] || {}, Nt[Ft][Ht][$t][Zt] = Tt;
          }
          return Nt;
        }(Kt.concat(Y));
      }
      return Ot;
    }
    var Gt = null;
    Object.defineProperty(this, "fontFaces", { get: function() {
      return Gt;
    }, set: function(mt) {
      Ot = null, Gt = mt;
    } }), Object.defineProperty(this, "font", { get: function() {
      return this.ctx.font;
    }, set: function(mt) {
      var Y;
      if (this.ctx.font = mt, (Y = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(mt)) !== null) {
        var Kt = Y[1], Bt = (Y[2], Y[3]), Nt = Y[4], Pt = (Y[5], Y[6]), Tt = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(Nt)[2];
        Nt = Math.floor(Tt === "px" ? parseFloat(Nt) * this.pdf.internal.scaleFactor : Tt === "em" ? parseFloat(Nt) * this.pdf.getFontSize() : parseFloat(Nt) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(Nt);
        var Ft = function(Jt) {
          var oe, Et, Ge = [], ce = Jt.trim();
          if (ce === "") return hs;
          if (ce in fu) return [fu[ce]];
          for (; ce !== ""; ) {
            switch (Et = null, oe = (ce = hu(ce)).charAt(0)) {
              case '"':
              case "'":
                Et = Xl(ce.substring(1), oe);
                break;
              default:
                Et = Kl(ce);
            }
            if (Et === null || (Ge.push(Et[0]), (ce = hu(Et[1])) !== "" && ce.charAt(0) !== ",")) return hs;
            ce = ce.replace(/^,/, "");
          }
          return Ge;
        }(Pt);
        if (this.fontFaces) {
          var Ht = Jl(jt(this.pdf, this.fontFaces), Ft.map(function(Jt) {
            return { family: Jt, stretch: "normal", weight: Bt, style: Kt };
          }));
          this.pdf.setFont(Ht.ref.name, Ht.ref.style);
        } else {
          var $t = "";
          (Bt === "bold" || parseInt(Bt, 10) >= 700 || Kt === "bold") && ($t = "bold"), Kt === "italic" && ($t += "italic"), $t.length === 0 && ($t = "normal");
          for (var Zt = "", te = { arial: "Helvetica", Arial: "Helvetica", verdana: "Helvetica", Verdana: "Helvetica", helvetica: "Helvetica", Helvetica: "Helvetica", "sans-serif": "Helvetica", fixed: "Courier", monospace: "Courier", terminal: "Courier", cursive: "Times", fantasy: "Times", serif: "Times" }, ae = 0; ae < Ft.length; ae++) {
            if (this.pdf.internal.getFont(Ft[ae], $t, { noFallback: !0, disableWarning: !0 }) !== void 0) {
              Zt = Ft[ae];
              break;
            }
            if ($t === "bolditalic" && this.pdf.internal.getFont(Ft[ae], "bold", { noFallback: !0, disableWarning: !0 }) !== void 0) Zt = Ft[ae], $t = "bold";
            else if (this.pdf.internal.getFont(Ft[ae], "normal", { noFallback: !0, disableWarning: !0 }) !== void 0) {
              Zt = Ft[ae], $t = "normal";
              break;
            }
          }
          if (Zt === "") {
            for (var fe = 0; fe < Ft.length; fe++) if (te[Ft[fe]]) {
              Zt = te[Ft[fe]];
              break;
            }
          }
          Zt = Zt === "" ? "Times" : Zt, this.pdf.setFont(Zt, $t);
        }
      }
    } }), Object.defineProperty(this, "globalCompositeOperation", { get: function() {
      return this.ctx.globalCompositeOperation;
    }, set: function(mt) {
      this.ctx.globalCompositeOperation = mt;
    } }), Object.defineProperty(this, "globalAlpha", { get: function() {
      return this.ctx.globalAlpha;
    }, set: function(mt) {
      this.ctx.globalAlpha = mt;
    } }), Object.defineProperty(this, "lineDashOffset", { get: function() {
      return this.ctx.lineDashOffset;
    }, set: function(mt) {
      this.ctx.lineDashOffset = mt, gt.call(this);
    } }), Object.defineProperty(this, "lineDash", { get: function() {
      return this.ctx.lineDash;
    }, set: function(mt) {
      this.ctx.lineDash = mt, gt.call(this);
    } }), Object.defineProperty(this, "ignoreClearRect", { get: function() {
      return this.ctx.ignoreClearRect;
    }, set: function(mt) {
      this.ctx.ignoreClearRect = !!mt;
    } });
  };
  A.prototype.setLineDash = function(m) {
    this.lineDash = m;
  }, A.prototype.getLineDash = function() {
    return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice();
  }, A.prototype.fill = function() {
    D.call(this, "fill", !1);
  }, A.prototype.stroke = function() {
    D.call(this, "stroke", !1);
  }, A.prototype.beginPath = function() {
    this.path = [{ type: "begin" }];
  }, A.prototype.moveTo = function(m, O) {
    if (isNaN(m) || isNaN(O)) throw Se.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
    var q = this.ctx.transform.applyToPoint(new f(m, O));
    this.path.push({ type: "mt", x: q.x, y: q.y }), this.ctx.lastPoint = new f(m, O);
  }, A.prototype.closePath = function() {
    var m = new f(0, 0), O = 0;
    for (O = this.path.length - 1; O !== -1; O--) if (this.path[O].type === "begin" && xe(this.path[O + 1]) === "object" && typeof this.path[O + 1].x == "number") {
      m = new f(this.path[O + 1].x, this.path[O + 1].y);
      break;
    }
    this.path.push({ type: "close" }), this.ctx.lastPoint = new f(m.x, m.y);
  }, A.prototype.lineTo = function(m, O) {
    if (isNaN(m) || isNaN(O)) throw Se.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
    var q = this.ctx.transform.applyToPoint(new f(m, O));
    this.path.push({ type: "lt", x: q.x, y: q.y }), this.ctx.lastPoint = new f(q.x, q.y);
  }, A.prototype.clip = function() {
    this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), D.call(this, null, !0);
  }, A.prototype.quadraticCurveTo = function(m, O, q, V) {
    if (isNaN(q) || isNaN(V) || isNaN(m) || isNaN(O)) throw Se.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
    var X = this.ctx.transform.applyToPoint(new f(q, V)), at = this.ctx.transform.applyToPoint(new f(m, O));
    this.path.push({ type: "qct", x1: at.x, y1: at.y, x: X.x, y: X.y }), this.ctx.lastPoint = new f(X.x, X.y);
  }, A.prototype.bezierCurveTo = function(m, O, q, V, X, at) {
    if (isNaN(X) || isNaN(at) || isNaN(m) || isNaN(O) || isNaN(q) || isNaN(V)) throw Se.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
    var ft = this.ctx.transform.applyToPoint(new f(X, at)), dt = this.ctx.transform.applyToPoint(new f(m, O)), _t = this.ctx.transform.applyToPoint(new f(q, V));
    this.path.push({ type: "bct", x1: dt.x, y1: dt.y, x2: _t.x, y2: _t.y, x: ft.x, y: ft.y }), this.ctx.lastPoint = new f(ft.x, ft.y);
  }, A.prototype.arc = function(m, O, q, V, X, at) {
    if (isNaN(m) || isNaN(O) || isNaN(q) || isNaN(V) || isNaN(X)) throw Se.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
    if (at = !!at, !this.ctx.transform.isIdentity) {
      var ft = this.ctx.transform.applyToPoint(new f(m, O));
      m = ft.x, O = ft.y;
      var dt = this.ctx.transform.applyToPoint(new f(0, q)), _t = this.ctx.transform.applyToPoint(new f(0, 0));
      q = Math.sqrt(Math.pow(dt.x - _t.x, 2) + Math.pow(dt.y - _t.y, 2));
    }
    Math.abs(X - V) >= 2 * Math.PI && (V = 0, X = 2 * Math.PI), this.path.push({ type: "arc", x: m, y: O, radius: q, startAngle: V, endAngle: X, counterclockwise: at });
  }, A.prototype.arcTo = function(m, O, q, V, X) {
    throw new Error("arcTo not implemented.");
  }, A.prototype.rect = function(m, O, q, V) {
    if (isNaN(m) || isNaN(O) || isNaN(q) || isNaN(V)) throw Se.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
    this.moveTo(m, O), this.lineTo(m + q, O), this.lineTo(m + q, O + V), this.lineTo(m, O + V), this.lineTo(m, O), this.lineTo(m + q, O), this.lineTo(m, O);
  }, A.prototype.fillRect = function(m, O, q, V) {
    if (isNaN(m) || isNaN(O) || isNaN(q) || isNaN(V)) throw Se.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
    if (!d.call(this)) {
      var X = {};
      this.lineCap !== "butt" && (X.lineCap = this.lineCap, this.lineCap = "butt"), this.lineJoin !== "miter" && (X.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(m, O, q, V), this.fill(), X.hasOwnProperty("lineCap") && (this.lineCap = X.lineCap), X.hasOwnProperty("lineJoin") && (this.lineJoin = X.lineJoin);
    }
  }, A.prototype.strokeRect = function(m, O, q, V) {
    if (isNaN(m) || isNaN(O) || isNaN(q) || isNaN(V)) throw Se.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
    x.call(this) || (this.beginPath(), this.rect(m, O, q, V), this.stroke());
  }, A.prototype.clearRect = function(m, O, q, V) {
    if (isNaN(m) || isNaN(O) || isNaN(q) || isNaN(V)) throw Se.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
    this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(m, O, q, V));
  }, A.prototype.save = function(m) {
    m = typeof m != "boolean" || m;
    for (var O = this.pdf.internal.getCurrentPageInfo().pageNumber, q = 0; q < this.pdf.internal.getNumberOfPages(); q++) this.pdf.setPage(q + 1), this.pdf.internal.out("q");
    if (this.pdf.setPage(O), m) {
      this.ctx.fontSize = this.pdf.internal.getFontSize();
      var V = new P(this.ctx);
      this.ctxStack.push(this.ctx), this.ctx = V;
    }
  }, A.prototype.restore = function(m) {
    m = typeof m != "boolean" || m;
    for (var O = this.pdf.internal.getCurrentPageInfo().pageNumber, q = 0; q < this.pdf.internal.getNumberOfPages(); q++) this.pdf.setPage(q + 1), this.pdf.internal.out("Q");
    this.pdf.setPage(O), m && this.ctxStack.length !== 0 && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, this.lineDashOffset = this.ctx.lineDashOffset);
  }, A.prototype.toDataURL = function() {
    throw new Error("toDataUrl not implemented.");
  };
  var L = function(m) {
    var O, q, V, X;
    if (m.isCanvasGradient === !0 && (m = m.getColor()), !m) return { r: 0, g: 0, b: 0, a: 0, style: m };
    if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(m)) O = 0, q = 0, V = 0, X = 0;
    else {
      var at = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(m);
      if (at !== null) O = parseInt(at[1]), q = parseInt(at[2]), V = parseInt(at[3]), X = 1;
      else if ((at = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(m)) !== null) O = parseInt(at[1]), q = parseInt(at[2]), V = parseInt(at[3]), X = parseFloat(at[4]);
      else {
        if (X = 1, typeof m == "string" && m.charAt(0) !== "#") {
          var ft = new Fu(m);
          m = ft.ok ? ft.toHex() : "#000000";
        }
        m.length === 4 ? (O = m.substring(1, 2), O += O, q = m.substring(2, 3), q += q, V = m.substring(3, 4), V += V) : (O = m.substring(1, 3), q = m.substring(3, 5), V = m.substring(5, 7)), O = parseInt(O, 16), q = parseInt(q, 16), V = parseInt(V, 16);
      }
    }
    return { r: O, g: q, b: V, a: X, style: m };
  }, d = function() {
    return this.ctx.isFillTransparent || this.globalAlpha == 0;
  }, x = function() {
    return !!(this.ctx.isStrokeTransparent || this.globalAlpha == 0);
  };
  A.prototype.fillText = function(m, O, q, V) {
    if (isNaN(O) || isNaN(q) || typeof m != "string") throw Se.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
    if (V = isNaN(V) ? void 0 : V, !d.call(this)) {
      var X = K(this.ctx.transform.rotation), at = this.ctx.transform.scaleX;
      y.call(this, { text: m, x: O, y: q, scale: at, angle: X, align: this.textAlign, maxWidth: V });
    }
  }, A.prototype.strokeText = function(m, O, q, V) {
    if (isNaN(O) || isNaN(q) || typeof m != "string") throw Se.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
    if (!x.call(this)) {
      V = isNaN(V) ? void 0 : V;
      var X = K(this.ctx.transform.rotation), at = this.ctx.transform.scaleX;
      y.call(this, { text: m, x: O, y: q, scale: at, renderingMode: "stroke", angle: X, align: this.textAlign, maxWidth: V });
    }
  }, A.prototype.measureText = function(m) {
    if (typeof m != "string") throw Se.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
    var O = this.pdf, q = this.pdf.internal.scaleFactor, V = O.internal.getFontSize(), X = O.getStringUnitWidth(m) * V / O.internal.scaleFactor, at = function(ft) {
      var dt = (ft = ft || {}).width || 0;
      return Object.defineProperty(this, "width", { get: function() {
        return dt;
      } }), this;
    };
    return new at({ width: X *= Math.round(96 * q / 72 * 1e4) / 1e4 });
  }, A.prototype.scale = function(m, O) {
    if (isNaN(m) || isNaN(O)) throw Se.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
    var q = new c(m, 0, 0, O, 0, 0);
    this.ctx.transform = this.ctx.transform.multiply(q);
  }, A.prototype.rotate = function(m) {
    if (isNaN(m)) throw Se.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
    var O = new c(Math.cos(m), Math.sin(m), -Math.sin(m), Math.cos(m), 0, 0);
    this.ctx.transform = this.ctx.transform.multiply(O);
  }, A.prototype.translate = function(m, O) {
    if (isNaN(m) || isNaN(O)) throw Se.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
    var q = new c(1, 0, 0, 1, m, O);
    this.ctx.transform = this.ctx.transform.multiply(q);
  }, A.prototype.transform = function(m, O, q, V, X, at) {
    if (isNaN(m) || isNaN(O) || isNaN(q) || isNaN(V) || isNaN(X) || isNaN(at)) throw Se.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
    var ft = new c(m, O, q, V, X, at);
    this.ctx.transform = this.ctx.transform.multiply(ft);
  }, A.prototype.setTransform = function(m, O, q, V, X, at) {
    m = isNaN(m) ? 1 : m, O = isNaN(O) ? 0 : O, q = isNaN(q) ? 0 : q, V = isNaN(V) ? 1 : V, X = isNaN(X) ? 0 : X, at = isNaN(at) ? 0 : at, this.ctx.transform = new c(m, O, q, V, X, at);
  };
  var F = function() {
    return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0;
  };
  A.prototype.drawImage = function(m, O, q, V, X, at, ft, dt, _t) {
    var xt = this.pdf.getImageProperties(m), Ot = 1, jt = 1, Gt = 1, mt = 1;
    V !== void 0 && dt !== void 0 && (Gt = dt / V, mt = _t / X, Ot = xt.width / V * dt / V, jt = xt.height / X * _t / X), at === void 0 && (at = O, ft = q, O = 0, q = 0), V !== void 0 && dt === void 0 && (dt = V, _t = X), V === void 0 && dt === void 0 && (dt = xt.width, _t = xt.height);
    for (var Y, Kt = this.ctx.transform.decompose(), Bt = K(Kt.rotate.shx), Nt = new c(), Pt = (Nt = (Nt = (Nt = Nt.multiply(Kt.translate)).multiply(Kt.skew)).multiply(Kt.scale)).applyToRectangle(new h(at - O * Gt, ft - q * mt, V * Ot, X * jt)), Tt = E.call(this, Pt), Ft = [], Ht = 0; Ht < Tt.length; Ht += 1) Ft.indexOf(Tt[Ht]) === -1 && Ft.push(Tt[Ht]);
    if (C(Ft), this.autoPaging) for (var $t = Ft[0], Zt = Ft[Ft.length - 1], te = $t; te < Zt + 1; te++) {
      this.pdf.setPage(te);
      var ae = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], fe = te === 1 ? this.posY + this.margin[0] : this.margin[0], Jt = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], oe = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], Et = te === 1 ? 0 : Jt + (te - 2) * oe;
      if (this.ctx.clip_path.length !== 0) {
        var Ge = this.path;
        Y = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = S(Y, this.posX + this.margin[3], -Et + fe + this.ctx.prevPageLastElemOffset), G.call(this, "fill", !0), this.path = Ge;
      }
      var ce = JSON.parse(JSON.stringify(Pt));
      ce = S([ce], this.posX + this.margin[3], -Et + fe + this.ctx.prevPageLastElemOffset)[0];
      var fr = (te > $t || te < Zt) && F.call(this);
      fr && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], ae, oe, null).clip().discardPath()), this.pdf.addImage(m, "JPEG", ce.x, ce.y, ce.w, ce.h, null, null, Bt), fr && this.pdf.restoreGraphicsState();
    }
    else this.pdf.addImage(m, "JPEG", Pt.x, Pt.y, Pt.w, Pt.h, null, null, Bt);
  };
  var E = function(m, O, q) {
    var V = [];
    O = O || this.pdf.internal.pageSize.width, q = q || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
    var X = this.posY + this.ctx.prevPageLastElemOffset;
    switch (m.type) {
      default:
      case "mt":
      case "lt":
        V.push(Math.floor((m.y + X) / q) + 1);
        break;
      case "arc":
        V.push(Math.floor((m.y + X - m.radius) / q) + 1), V.push(Math.floor((m.y + X + m.radius) / q) + 1);
        break;
      case "qct":
        var at = J(this.ctx.lastPoint.x, this.ctx.lastPoint.y, m.x1, m.y1, m.x, m.y);
        V.push(Math.floor((at.y + X) / q) + 1), V.push(Math.floor((at.y + at.h + X) / q) + 1);
        break;
      case "bct":
        var ft = st(this.ctx.lastPoint.x, this.ctx.lastPoint.y, m.x1, m.y1, m.x2, m.y2, m.x, m.y);
        V.push(Math.floor((ft.y + X) / q) + 1), V.push(Math.floor((ft.y + ft.h + X) / q) + 1);
        break;
      case "rect":
        V.push(Math.floor((m.y + X) / q) + 1), V.push(Math.floor((m.y + m.h + X) / q) + 1);
    }
    for (var dt = 0; dt < V.length; dt += 1) for (; this.pdf.internal.getNumberOfPages() < V[dt]; ) v.call(this);
    return V;
  }, v = function() {
    var m = this.fillStyle, O = this.strokeStyle, q = this.font, V = this.lineCap, X = this.lineWidth, at = this.lineJoin;
    this.pdf.addPage(), this.fillStyle = m, this.strokeStyle = O, this.font = q, this.lineCap = V, this.lineWidth = X, this.lineJoin = at;
  }, S = function(m, O, q) {
    for (var V = 0; V < m.length; V++) switch (m[V].type) {
      case "bct":
        m[V].x2 += O, m[V].y2 += q;
      case "qct":
        m[V].x1 += O, m[V].y1 += q;
      case "mt":
      case "lt":
      case "arc":
      default:
        m[V].x += O, m[V].y += q;
    }
    return m;
  }, C = function(m) {
    return m.sort(function(O, q) {
      return O - q;
    });
  }, D = function(m, O) {
    for (var q, V, X = this.fillStyle, at = this.strokeStyle, ft = this.lineCap, dt = this.lineWidth, _t = Math.abs(dt * this.ctx.transform.scaleX), xt = this.lineJoin, Ot = JSON.parse(JSON.stringify(this.path)), jt = JSON.parse(JSON.stringify(this.path)), Gt = [], mt = 0; mt < jt.length; mt++) if (jt[mt].x !== void 0) for (var Y = E.call(this, jt[mt]), Kt = 0; Kt < Y.length; Kt += 1) Gt.indexOf(Y[Kt]) === -1 && Gt.push(Y[Kt]);
    for (var Bt = 0; Bt < Gt.length; Bt++) for (; this.pdf.internal.getNumberOfPages() < Gt[Bt]; ) v.call(this);
    if (C(Gt), this.autoPaging) for (var Nt = Gt[0], Pt = Gt[Gt.length - 1], Tt = Nt; Tt < Pt + 1; Tt++) {
      this.pdf.setPage(Tt), this.fillStyle = X, this.strokeStyle = at, this.lineCap = ft, this.lineWidth = _t, this.lineJoin = xt;
      var Ft = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], Ht = Tt === 1 ? this.posY + this.margin[0] : this.margin[0], $t = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], Zt = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], te = Tt === 1 ? 0 : $t + (Tt - 2) * Zt;
      if (this.ctx.clip_path.length !== 0) {
        var ae = this.path;
        q = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = S(q, this.posX + this.margin[3], -te + Ht + this.ctx.prevPageLastElemOffset), G.call(this, m, !0), this.path = ae;
      }
      if (V = JSON.parse(JSON.stringify(Ot)), this.path = S(V, this.posX + this.margin[3], -te + Ht + this.ctx.prevPageLastElemOffset), O === !1 || Tt === 0) {
        var fe = (Tt > Nt || Tt < Pt) && F.call(this);
        fe && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], Ft, Zt, null).clip().discardPath()), G.call(this, m, O), fe && this.pdf.restoreGraphicsState();
      }
      this.lineWidth = dt;
    }
    else this.lineWidth = _t, G.call(this, m, O), this.lineWidth = dt;
    this.path = Ot;
  }, G = function(m, O) {
    if ((m !== "stroke" || O || !x.call(this)) && (m === "stroke" || O || !d.call(this))) {
      for (var q, V, X = [], at = this.path, ft = 0; ft < at.length; ft++) {
        var dt = at[ft];
        switch (dt.type) {
          case "begin":
            X.push({ begin: !0 });
            break;
          case "close":
            X.push({ close: !0 });
            break;
          case "mt":
            X.push({ start: dt, deltas: [], abs: [] });
            break;
          case "lt":
            var _t = X.length;
            if (at[ft - 1] && !isNaN(at[ft - 1].x) && (q = [dt.x - at[ft - 1].x, dt.y - at[ft - 1].y], _t > 0)) {
              for (; _t >= 0; _t--) if (X[_t - 1].close !== !0 && X[_t - 1].begin !== !0) {
                X[_t - 1].deltas.push(q), X[_t - 1].abs.push(dt);
                break;
              }
            }
            break;
          case "bct":
            q = [dt.x1 - at[ft - 1].x, dt.y1 - at[ft - 1].y, dt.x2 - at[ft - 1].x, dt.y2 - at[ft - 1].y, dt.x - at[ft - 1].x, dt.y - at[ft - 1].y], X[X.length - 1].deltas.push(q);
            break;
          case "qct":
            var xt = at[ft - 1].x + 2 / 3 * (dt.x1 - at[ft - 1].x), Ot = at[ft - 1].y + 2 / 3 * (dt.y1 - at[ft - 1].y), jt = dt.x + 2 / 3 * (dt.x1 - dt.x), Gt = dt.y + 2 / 3 * (dt.y1 - dt.y), mt = dt.x, Y = dt.y;
            q = [xt - at[ft - 1].x, Ot - at[ft - 1].y, jt - at[ft - 1].x, Gt - at[ft - 1].y, mt - at[ft - 1].x, Y - at[ft - 1].y], X[X.length - 1].deltas.push(q);
            break;
          case "arc":
            X.push({ deltas: [], abs: [], arc: !0 }), Array.isArray(X[X.length - 1].abs) && X[X.length - 1].abs.push(dt);
        }
      }
      V = O ? null : m === "stroke" ? "stroke" : "fill";
      for (var Kt = !1, Bt = 0; Bt < X.length; Bt++) if (X[Bt].arc) for (var Nt = X[Bt].abs, Pt = 0; Pt < Nt.length; Pt++) {
        var Tt = Nt[Pt];
        Tt.type === "arc" ? j.call(this, Tt.x, Tt.y, Tt.radius, Tt.startAngle, Tt.endAngle, Tt.counterclockwise, void 0, O, !Kt) : B.call(this, Tt.x, Tt.y), Kt = !0;
      }
      else if (X[Bt].close === !0) this.pdf.internal.out("h"), Kt = !1;
      else if (X[Bt].begin !== !0) {
        var Ft = X[Bt].start.x, Ht = X[Bt].start.y;
        z.call(this, X[Bt].deltas, Ft, Ht), Kt = !0;
      }
      V && Z.call(this, V), O && Q.call(this);
    }
  }, $ = function(m) {
    var O = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor, q = O * (this.pdf.internal.getLineHeightFactor() - 1);
    switch (this.ctx.textBaseline) {
      case "bottom":
        return m - q;
      case "top":
        return m + O - q;
      case "hanging":
        return m + O - 2 * q;
      case "middle":
        return m + O / 2 - q;
      case "ideographic":
        return m;
      case "alphabetic":
      default:
        return m;
    }
  }, M = function(m) {
    return m + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1);
  };
  A.prototype.createLinearGradient = function() {
    var m = function() {
    };
    return m.colorStops = [], m.addColorStop = function(O, q) {
      this.colorStops.push([O, q]);
    }, m.getColor = function() {
      return this.colorStops.length === 0 ? "#000000" : this.colorStops[0][1];
    }, m.isCanvasGradient = !0, m;
  }, A.prototype.createPattern = function() {
    return this.createLinearGradient();
  }, A.prototype.createRadialGradient = function() {
    return this.createLinearGradient();
  };
  var j = function(m, O, q, V, X, at, ft, dt, _t) {
    for (var xt = U.call(this, q, V, X, at), Ot = 0; Ot < xt.length; Ot++) {
      var jt = xt[Ot];
      Ot === 0 && (_t ? N.call(this, jt.x1 + m, jt.y1 + O) : B.call(this, jt.x1 + m, jt.y1 + O)), lt.call(this, m, O, jt.x2, jt.y2, jt.x3, jt.y3, jt.x4, jt.y4);
    }
    dt ? Q.call(this) : Z.call(this, ft);
  }, Z = function(m) {
    switch (m) {
      case "stroke":
        this.pdf.internal.out("S");
        break;
      case "fill":
        this.pdf.internal.out("f");
    }
  }, Q = function() {
    this.pdf.clip(), this.pdf.discardPath();
  }, N = function(m, O) {
    this.pdf.internal.out(r(m) + " " + a(O) + " m");
  }, y = function(m) {
    var O;
    switch (m.align) {
      case "right":
      case "end":
        O = "right";
        break;
      case "center":
        O = "center";
        break;
      case "left":
      case "start":
      default:
        O = "left";
    }
    var q = this.pdf.getTextDimensions(m.text), V = $.call(this, m.y), X = M.call(this, V) - q.h, at = this.ctx.transform.applyToPoint(new f(m.x, V)), ft = this.ctx.transform.decompose(), dt = new c();
    dt = (dt = (dt = dt.multiply(ft.translate)).multiply(ft.skew)).multiply(ft.scale);
    for (var _t, xt, Ot, jt = this.ctx.transform.applyToRectangle(new h(m.x, V, q.w, q.h)), Gt = dt.applyToRectangle(new h(m.x, X, q.w, q.h)), mt = E.call(this, Gt), Y = [], Kt = 0; Kt < mt.length; Kt += 1) Y.indexOf(mt[Kt]) === -1 && Y.push(mt[Kt]);
    if (C(Y), this.autoPaging) for (var Bt = Y[0], Nt = Y[Y.length - 1], Pt = Bt; Pt < Nt + 1; Pt++) {
      this.pdf.setPage(Pt);
      var Tt = Pt === 1 ? this.posY + this.margin[0] : this.margin[0], Ft = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], Ht = this.pdf.internal.pageSize.height - this.margin[2], $t = Ht - this.margin[0], Zt = this.pdf.internal.pageSize.width - this.margin[1], te = Zt - this.margin[3], ae = Pt === 1 ? 0 : Ft + (Pt - 2) * $t;
      if (this.ctx.clip_path.length !== 0) {
        var fe = this.path;
        _t = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = S(_t, this.posX + this.margin[3], -1 * ae + Tt), G.call(this, "fill", !0), this.path = fe;
      }
      var Jt = S([JSON.parse(JSON.stringify(Gt))], this.posX + this.margin[3], -ae + Tt + this.ctx.prevPageLastElemOffset)[0];
      m.scale >= 0.01 && (xt = this.pdf.internal.getFontSize(), this.pdf.setFontSize(xt * m.scale), Ot = this.lineWidth, this.lineWidth = Ot * m.scale);
      var oe = this.autoPaging !== "text";
      if (oe || Jt.y + Jt.h <= Ht) {
        if (oe || Jt.y >= Tt && Jt.x <= Zt) {
          var Et = oe ? m.text : this.pdf.splitTextToSize(m.text, m.maxWidth || Zt - Jt.x)[0], Ge = S([JSON.parse(JSON.stringify(jt))], this.posX + this.margin[3], -ae + Tt + this.ctx.prevPageLastElemOffset)[0], ce = oe && (Pt > Bt || Pt < Nt) && F.call(this);
          ce && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], te, $t, null).clip().discardPath()), this.pdf.text(Et, Ge.x, Ge.y, { angle: m.angle, align: O, renderingMode: m.renderingMode }), ce && this.pdf.restoreGraphicsState();
        }
      } else Jt.y < Ht && (this.ctx.prevPageLastElemOffset += Ht - Jt.y);
      m.scale >= 0.01 && (this.pdf.setFontSize(xt), this.lineWidth = Ot);
    }
    else m.scale >= 0.01 && (xt = this.pdf.internal.getFontSize(), this.pdf.setFontSize(xt * m.scale), Ot = this.lineWidth, this.lineWidth = Ot * m.scale), this.pdf.text(m.text, at.x + this.posX, at.y + this.posY, { angle: m.angle, align: O, renderingMode: m.renderingMode, maxWidth: m.maxWidth }), m.scale >= 0.01 && (this.pdf.setFontSize(xt), this.lineWidth = Ot);
  }, B = function(m, O, q, V) {
    q = q || 0, V = V || 0, this.pdf.internal.out(r(m + q) + " " + a(O + V) + " l");
  }, z = function(m, O, q) {
    return this.pdf.lines(m, O, q, null, null);
  }, lt = function(m, O, q, V, X, at, ft, dt) {
    this.pdf.internal.out([e(u(q + m)), e(o(V + O)), e(u(X + m)), e(o(at + O)), e(u(ft + m)), e(o(dt + O)), "c"].join(" "));
  }, U = function(m, O, q, V) {
    for (var X = 2 * Math.PI, at = Math.PI / 2; O > q; ) O -= X;
    var ft = Math.abs(q - O);
    ft < X && V && (ft = X - ft);
    for (var dt = [], _t = V ? -1 : 1, xt = O; ft > 1e-5; ) {
      var Ot = xt + _t * Math.min(ft, at);
      dt.push(W.call(this, m, xt, Ot)), ft -= Math.abs(Ot - xt), xt = Ot;
    }
    return dt;
  }, W = function(m, O, q) {
    var V = (q - O) / 2, X = m * Math.cos(V), at = m * Math.sin(V), ft = X, dt = -at, _t = ft * ft + dt * dt, xt = _t + ft * X + dt * at, Ot = 4 / 3 * (Math.sqrt(2 * _t * xt) - xt) / (ft * at - dt * X), jt = ft - Ot * dt, Gt = dt + Ot * ft, mt = jt, Y = -Gt, Kt = V + O, Bt = Math.cos(Kt), Nt = Math.sin(Kt);
    return { x1: m * Math.cos(O), y1: m * Math.sin(O), x2: jt * Bt - Gt * Nt, y2: jt * Nt + Gt * Bt, x3: mt * Bt - Y * Nt, y3: mt * Nt + Y * Bt, x4: m * Math.cos(q), y4: m * Math.sin(q) };
  }, K = function(m) {
    return 180 * m / Math.PI;
  }, J = function(m, O, q, V, X, at) {
    var ft = m + 0.5 * (q - m), dt = O + 0.5 * (V - O), _t = X + 0.5 * (q - X), xt = at + 0.5 * (V - at), Ot = Math.min(m, X, ft, _t), jt = Math.max(m, X, ft, _t), Gt = Math.min(O, at, dt, xt), mt = Math.max(O, at, dt, xt);
    return new h(Ot, Gt, jt - Ot, mt - Gt);
  }, st = function(m, O, q, V, X, at, ft, dt) {
    var _t, xt, Ot, jt, Gt, mt, Y, Kt, Bt, Nt, Pt, Tt, Ft, Ht, $t = q - m, Zt = V - O, te = X - q, ae = at - V, fe = ft - X, Jt = dt - at;
    for (xt = 0; xt < 41; xt++) Bt = (Y = (Ot = m + (_t = xt / 40) * $t) + _t * ((Gt = q + _t * te) - Ot)) + _t * (Gt + _t * (X + _t * fe - Gt) - Y), Nt = (Kt = (jt = O + _t * Zt) + _t * ((mt = V + _t * ae) - jt)) + _t * (mt + _t * (at + _t * Jt - mt) - Kt), xt == 0 ? (Pt = Bt, Tt = Nt, Ft = Bt, Ht = Nt) : (Pt = Math.min(Pt, Bt), Tt = Math.min(Tt, Nt), Ft = Math.max(Ft, Bt), Ht = Math.max(Ht, Nt));
    return new h(Math.round(Pt), Math.round(Tt), Math.round(Ft - Pt), Math.round(Ht - Tt));
  }, gt = function() {
    if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
      var m, O, q = (m = this.ctx.lineDash, O = this.ctx.lineDashOffset, JSON.stringify({ lineDash: m, lineDashOffset: O }));
      this.prevLineDash !== q && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), this.prevLineDash = q);
    }
  };
})(Yt.API), /**
 * @license
 * jsPDF filters PlugIn
 * Copyright (c) 2014 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(i) {
  var e = function(o) {
    var f, h, c, g, P, A, L, d, x, F;
    for (h = [], c = 0, g = (o += f = "\0\0\0\0".slice(o.length % 4 || 4)).length; g > c; c += 4) (P = (o.charCodeAt(c) << 24) + (o.charCodeAt(c + 1) << 16) + (o.charCodeAt(c + 2) << 8) + o.charCodeAt(c + 3)) !== 0 ? (A = (P = ((P = ((P = ((P = (P - (F = P % 85)) / 85) - (x = P % 85)) / 85) - (d = P % 85)) / 85) - (L = P % 85)) / 85) % 85, h.push(A + 33, L + 33, d + 33, x + 33, F + 33)) : h.push(122);
    return function(E, v) {
      for (var S = v; S > 0; S--) E.pop();
    }(h, f.length), String.fromCharCode.apply(String, h) + "~>";
  }, r = function(o) {
    var f, h, c, g, P, A = String, L = "length", d = 255, x = "charCodeAt", F = "slice", E = "replace";
    for (o[F](-2), o = o[F](0, -2)[E](/\s/g, "")[E]("z", "!!!!!"), c = [], g = 0, P = (o += f = "uuuuu"[F](o[L] % 5 || 5))[L]; P > g; g += 5) h = 52200625 * (o[x](g) - 33) + 614125 * (o[x](g + 1) - 33) + 7225 * (o[x](g + 2) - 33) + 85 * (o[x](g + 3) - 33) + (o[x](g + 4) - 33), c.push(d & h >> 24, d & h >> 16, d & h >> 8, d & h);
    return function(v, S) {
      for (var C = S; C > 0; C--) v.pop();
    }(c, f[L]), A.fromCharCode.apply(A, c);
  }, a = function(o) {
    var f = new RegExp(/^([0-9A-Fa-f]{2})+$/);
    if ((o = o.replace(/\s/g, "")).indexOf(">") !== -1 && (o = o.substr(0, o.indexOf(">"))), o.length % 2 && (o += "0"), f.test(o) === !1) return "";
    for (var h = "", c = 0; c < o.length; c += 2) h += String.fromCharCode("0x" + (o[c] + o[c + 1]));
    return h;
  }, u = function(o) {
    for (var f = new Uint8Array(o.length), h = o.length; h--; ) f[h] = o.charCodeAt(h);
    return o = (f = ws(f)).reduce(function(c, g) {
      return c + String.fromCharCode(g);
    }, "");
  };
  i.processDataByFilters = function(o, f) {
    var h = 0, c = o || "", g = [];
    for (typeof (f = f || []) == "string" && (f = [f]), h = 0; h < f.length; h += 1) switch (f[h]) {
      case "ASCII85Decode":
      case "/ASCII85Decode":
        c = r(c), g.push("/ASCII85Encode");
        break;
      case "ASCII85Encode":
      case "/ASCII85Encode":
        c = e(c), g.push("/ASCII85Decode");
        break;
      case "ASCIIHexDecode":
      case "/ASCIIHexDecode":
        c = a(c), g.push("/ASCIIHexEncode");
        break;
      case "ASCIIHexEncode":
      case "/ASCIIHexEncode":
        c = c.split("").map(function(P) {
          return ("0" + P.charCodeAt().toString(16)).slice(-2);
        }).join("") + ">", g.push("/ASCIIHexDecode");
        break;
      case "FlateEncode":
      case "/FlateEncode":
        c = u(c), g.push("/FlateDecode");
        break;
      default:
        throw new Error('The filter: "' + f[h] + '" is not implemented');
    }
    return { data: c, reverseChain: g.reverse().join(" ") };
  };
}(Yt.API), /**
 * @license
 * jsPDF fileloading PlugIn
 * Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(i) {
  i.loadFile = function(e, r, a) {
    return function(u, o, f) {
      o = o !== !1, f = typeof f == "function" ? f : function() {
      };
      var h = void 0;
      try {
        h = function(c, g, P) {
          var A = new XMLHttpRequest(), L = 0, d = function(x) {
            var F = x.length, E = [], v = String.fromCharCode;
            for (L = 0; L < F; L += 1) E.push(v(255 & x.charCodeAt(L)));
            return E.join("");
          };
          if (A.open("GET", c, !g), A.overrideMimeType("text/plain; charset=x-user-defined"), g === !1 && (A.onload = function() {
            A.status === 200 ? P(d(this.responseText)) : P(void 0);
          }), A.send(null), g && A.status === 200) return d(A.responseText);
        }(u, o, f);
      } catch {
      }
      return h;
    }(e, r, a);
  }, i.loadImageFile = i.loadFile;
}(Yt.API), function(i) {
  function e() {
    return (Xt.html2canvas ? Promise.resolve(Xt.html2canvas) : import("./vendor-canvas-B1H7M-Ap.js").then((f) => f.h)).catch(function(f) {
      return Promise.reject(new Error("Could not load html2canvas: " + f));
    }).then(function(f) {
      return f.default ? f.default : f;
    });
  }
  function r() {
    return (Xt.DOMPurify ? Promise.resolve(Xt.DOMPurify) : Promise.resolve().then(() => Jf)).catch(function(f) {
      return Promise.reject(new Error("Could not load dompurify: " + f));
    }).then(function(f) {
      return f.default ? f.default : f;
    });
  }
  var a = function(f) {
    var h = xe(f);
    return h === "undefined" ? "undefined" : h === "string" || f instanceof String ? "string" : h === "number" || f instanceof Number ? "number" : h === "function" || f instanceof Function ? "function" : f && f.constructor === Array ? "array" : f && f.nodeType === 1 ? "element" : h === "object" ? "object" : "unknown";
  }, u = function(f, h) {
    var c = document.createElement(f);
    for (var g in h.className && (c.className = h.className), h.innerHTML && h.dompurify && (c.innerHTML = h.dompurify.sanitize(h.innerHTML)), h.style) c.style[g] = h.style[g];
    return c;
  }, o = function f(h) {
    var c = Object.assign(f.convert(Promise.resolve()), JSON.parse(JSON.stringify(f.template))), g = f.convert(Promise.resolve(), c);
    return g = (g = g.setProgress(1, f, 1, [f])).set(h);
  };
  (o.prototype = Object.create(Promise.prototype)).constructor = o, o.convert = function(f, h) {
    return f.__proto__ = h || o.prototype, f;
  }, o.template = { prop: { src: null, container: null, overlay: null, canvas: null, img: null, pdf: null, pageSize: null, callback: function() {
  } }, progress: { val: 0, state: null, n: 0, stack: [] }, opt: { filename: "file.pdf", margin: [0, 0, 0, 0], enableLinks: !0, x: 0, y: 0, html2canvas: {}, jsPDF: {}, backgroundColor: "transparent" } }, o.prototype.from = function(f, h) {
    return this.then(function() {
      switch (h = h || function(c) {
        switch (a(c)) {
          case "string":
            return "string";
          case "element":
            return c.nodeName.toLowerCase() === "canvas" ? "canvas" : "element";
          default:
            return "unknown";
        }
      }(f)) {
        case "string":
          return this.then(r).then(function(c) {
            return this.set({ src: u("div", { innerHTML: f, dompurify: c }) });
          });
        case "element":
          return this.set({ src: f });
        case "canvas":
          return this.set({ canvas: f });
        case "img":
          return this.set({ img: f });
        default:
          return this.error("Unknown source type.");
      }
    });
  }, o.prototype.to = function(f) {
    switch (f) {
      case "container":
        return this.toContainer();
      case "canvas":
        return this.toCanvas();
      case "img":
        return this.toImg();
      case "pdf":
        return this.toPdf();
      default:
        return this.error("Invalid target.");
    }
  }, o.prototype.toContainer = function() {
    return this.thenList([function() {
      return this.prop.src || this.error("Cannot duplicate - no source HTML.");
    }, function() {
      return this.prop.pageSize || this.setPageSize();
    }]).then(function() {
      var f = { position: "relative", display: "inline-block", width: (typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px", left: 0, right: 0, top: 0, margin: "auto", backgroundColor: this.opt.backgroundColor }, h = function c(g, P) {
        for (var A = g.nodeType === 3 ? document.createTextNode(g.nodeValue) : g.cloneNode(!1), L = g.firstChild; L; L = L.nextSibling) P !== !0 && L.nodeType === 1 && L.nodeName === "SCRIPT" || A.appendChild(c(L, P));
        return g.nodeType === 1 && (g.nodeName === "CANVAS" ? (A.width = g.width, A.height = g.height, A.getContext("2d").drawImage(g, 0, 0)) : g.nodeName !== "TEXTAREA" && g.nodeName !== "SELECT" || (A.value = g.value), A.addEventListener("load", function() {
          A.scrollTop = g.scrollTop, A.scrollLeft = g.scrollLeft;
        }, !0)), A;
      }(this.prop.src, this.opt.html2canvas.javascriptEnabled);
      h.tagName === "BODY" && (f.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = u("div", { className: "html2pdf__overlay", style: { position: "fixed", overflow: "hidden", zIndex: 1e3, left: "-100000px", right: 0, bottom: 0, top: 0 } }), this.prop.container = u("div", { className: "html2pdf__container", style: f }), this.prop.container.appendChild(h), this.prop.container.firstChild.appendChild(u("div", { style: { clear: "both", border: "0 none transparent", margin: 0, padding: 0, height: 0 } })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px";
    });
  }, o.prototype.toCanvas = function() {
    var f = [function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }];
    return this.thenList(f).then(e).then(function(h) {
      var c = Object.assign({}, this.opt.html2canvas);
      return delete c.onrendered, h(this.prop.container, c);
    }).then(function(h) {
      (this.opt.html2canvas.onrendered || function() {
      })(h), this.prop.canvas = h, document.body.removeChild(this.prop.overlay);
    });
  }, o.prototype.toContext2d = function() {
    var f = [function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }];
    return this.thenList(f).then(e).then(function(h) {
      var c = this.opt.jsPDF, g = this.opt.fontFaces, P = typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth, A = Object.assign({ async: !0, allowTaint: !0, scale: P, scrollX: this.opt.scrollX || 0, scrollY: this.opt.scrollY || 0, backgroundColor: "#ffffff", imageTimeout: 15e3, logging: !0, proxy: null, removeContainer: !0, foreignObjectRendering: !1, useCORS: !1 }, this.opt.html2canvas);
      if (delete A.onrendered, c.context2d.autoPaging = this.opt.autoPaging === void 0 || this.opt.autoPaging, c.context2d.posX = this.opt.x, c.context2d.posY = this.opt.y, c.context2d.margin = this.opt.margin, c.context2d.fontFaces = g, g) for (var L = 0; L < g.length; ++L) {
        var d = g[L], x = d.src.find(function(F) {
          return F.format === "truetype";
        });
        x && c.addFont(x.url, d.ref.name, d.ref.style);
      }
      return A.windowHeight = A.windowHeight || 0, A.windowHeight = A.windowHeight == 0 ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : A.windowHeight, c.context2d.save(!0), h(this.prop.container, A);
    }).then(function(h) {
      this.opt.jsPDF.context2d.restore(!0), (this.opt.html2canvas.onrendered || function() {
      })(h), this.prop.canvas = h, document.body.removeChild(this.prop.overlay);
    });
  }, o.prototype.toImg = function() {
    return this.thenList([function() {
      return this.prop.canvas || this.toCanvas();
    }]).then(function() {
      var f = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
      this.prop.img = document.createElement("img"), this.prop.img.src = f;
    });
  }, o.prototype.toPdf = function() {
    return this.thenList([function() {
      return this.toContext2d();
    }]).then(function() {
      this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
    });
  }, o.prototype.output = function(f, h, c) {
    return (c = c || "pdf").toLowerCase() === "img" || c.toLowerCase() === "image" ? this.outputImg(f, h) : this.outputPdf(f, h);
  }, o.prototype.outputPdf = function(f, h) {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).then(function() {
      return this.prop.pdf.output(f, h);
    });
  }, o.prototype.outputImg = function(f) {
    return this.thenList([function() {
      return this.prop.img || this.toImg();
    }]).then(function() {
      switch (f) {
        case void 0:
        case "img":
          return this.prop.img;
        case "datauristring":
        case "dataurlstring":
          return this.prop.img.src;
        case "datauri":
        case "dataurl":
          return document.location.href = this.prop.img.src;
        default:
          throw 'Image output type "' + f + '" is not supported.';
      }
    });
  }, o.prototype.save = function(f) {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).set(f ? { filename: f } : null).then(function() {
      this.prop.pdf.save(this.opt.filename);
    });
  }, o.prototype.doCallback = function() {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).then(function() {
      this.prop.callback(this.prop.pdf);
    });
  }, o.prototype.set = function(f) {
    if (a(f) !== "object") return this;
    var h = Object.keys(f || {}).map(function(c) {
      if (c in o.template.prop) return function() {
        this.prop[c] = f[c];
      };
      switch (c) {
        case "margin":
          return this.setMargin.bind(this, f.margin);
        case "jsPDF":
          return function() {
            return this.opt.jsPDF = f.jsPDF, this.setPageSize();
          };
        case "pageSize":
          return this.setPageSize.bind(this, f.pageSize);
        default:
          return function() {
            this.opt[c] = f[c];
          };
      }
    }, this);
    return this.then(function() {
      return this.thenList(h);
    });
  }, o.prototype.get = function(f, h) {
    return this.then(function() {
      var c = f in o.template.prop ? this.prop[f] : this.opt[f];
      return h ? h(c) : c;
    });
  }, o.prototype.setMargin = function(f) {
    return this.then(function() {
      switch (a(f)) {
        case "number":
          f = [f, f, f, f];
        case "array":
          if (f.length === 2 && (f = [f[0], f[1], f[0], f[1]]), f.length === 4) break;
        default:
          return this.error("Invalid margin array.");
      }
      this.opt.margin = f;
    }).then(this.setPageSize);
  }, o.prototype.setPageSize = function(f) {
    function h(c, g) {
      return Math.floor(c * g / 72 * 96);
    }
    return this.then(function() {
      (f = f || Yt.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (f.inner = { width: f.width - this.opt.margin[1] - this.opt.margin[3], height: f.height - this.opt.margin[0] - this.opt.margin[2] }, f.inner.px = { width: h(f.inner.width, f.k), height: h(f.inner.height, f.k) }, f.inner.ratio = f.inner.height / f.inner.width), this.prop.pageSize = f;
    });
  }, o.prototype.setProgress = function(f, h, c, g) {
    return f != null && (this.progress.val = f), h != null && (this.progress.state = h), c != null && (this.progress.n = c), g != null && (this.progress.stack = g), this.progress.ratio = this.progress.val / this.progress.state, this;
  }, o.prototype.updateProgress = function(f, h, c, g) {
    return this.setProgress(f ? this.progress.val + f : null, h || null, c ? this.progress.n + c : null, g ? this.progress.stack.concat(g) : null);
  }, o.prototype.then = function(f, h) {
    var c = this;
    return this.thenCore(f, h, function(g, P) {
      return c.updateProgress(null, null, 1, [g]), Promise.prototype.then.call(this, function(A) {
        return c.updateProgress(null, g), A;
      }).then(g, P).then(function(A) {
        return c.updateProgress(1), A;
      });
    });
  }, o.prototype.thenCore = function(f, h, c) {
    c = c || Promise.prototype.then, f && (f = f.bind(this)), h && (h = h.bind(this));
    var g = Promise.toString().indexOf("[native code]") !== -1 && Promise.name === "Promise" ? this : o.convert(Object.assign({}, this), Promise.prototype), P = c.call(g, f, h);
    return o.convert(P, this.__proto__);
  }, o.prototype.thenExternal = function(f, h) {
    return Promise.prototype.then.call(this, f, h);
  }, o.prototype.thenList = function(f) {
    var h = this;
    return f.forEach(function(c) {
      h = h.thenCore(c);
    }), h;
  }, o.prototype.catch = function(f) {
    f && (f = f.bind(this));
    var h = Promise.prototype.catch.call(this, f);
    return o.convert(h, this);
  }, o.prototype.catchExternal = function(f) {
    return Promise.prototype.catch.call(this, f);
  }, o.prototype.error = function(f) {
    return this.then(function() {
      throw new Error(f);
    });
  }, o.prototype.using = o.prototype.set, o.prototype.saveAs = o.prototype.save, o.prototype.export = o.prototype.output, o.prototype.run = o.prototype.then, Yt.getPageSize = function(f, h, c) {
    if (xe(f) === "object") {
      var g = f;
      f = g.orientation, h = g.unit || h, c = g.format || c;
    }
    h = h || "mm", c = c || "a4", f = ("" + (f || "P")).toLowerCase();
    var P, A = ("" + c).toLowerCase(), L = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
    switch (h) {
      case "pt":
        P = 1;
        break;
      case "mm":
        P = 72 / 25.4;
        break;
      case "cm":
        P = 72 / 2.54;
        break;
      case "in":
        P = 72;
        break;
      case "px":
        P = 0.75;
        break;
      case "pc":
      case "em":
        P = 12;
        break;
      case "ex":
        P = 6;
        break;
      default:
        throw "Invalid unit: " + h;
    }
    var d, x = 0, F = 0;
    if (L.hasOwnProperty(A)) x = L[A][1] / P, F = L[A][0] / P;
    else try {
      x = c[1], F = c[0];
    } catch {
      throw new Error("Invalid format: " + c);
    }
    if (f === "p" || f === "portrait") f = "p", F > x && (d = F, F = x, x = d);
    else {
      if (f !== "l" && f !== "landscape") throw "Invalid orientation: " + f;
      f = "l", x > F && (d = F, F = x, x = d);
    }
    return { width: F, height: x, unit: h, k: P, orientation: f };
  }, i.html = function(f, h) {
    (h = h || {}).callback = h.callback || function() {
    }, h.html2canvas = h.html2canvas || {}, h.html2canvas.canvas = h.html2canvas.canvas || this.canvas, h.jsPDF = h.jsPDF || this, h.fontFaces = h.fontFaces ? h.fontFaces.map(_s) : null;
    var c = new o(h);
    return h.worker ? c : c.from(f).doCallback();
  };
}(Yt.API), Yt.API.addJS = function(i) {
  return pu = i, this.internal.events.subscribe("postPutResources", function() {
    go = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (go + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), du = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + pu + ")"), this.internal.out(">>"), this.internal.out("endobj");
  }), this.internal.events.subscribe("putCatalog", function() {
    go !== void 0 && du !== void 0 && this.internal.out("/Names <</JavaScript " + go + " 0 R>>");
  }), this;
}, /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(i) {
  var e;
  i.events.push(["postPutResources", function() {
    var r = this, a = /^(\d+) 0 obj$/;
    if (this.outline.root.children.length > 0) for (var u = r.outline.render().split(/\r\n/), o = 0; o < u.length; o++) {
      var f = u[o], h = a.exec(f);
      if (h != null) {
        var c = h[1];
        r.internal.newObjectDeferredBegin(c, !1);
      }
      r.internal.write(f);
    }
    if (this.outline.createNamedDestinations) {
      var g = this.internal.pages.length, P = [];
      for (o = 0; o < g; o++) {
        var A = r.internal.newObject();
        P.push(A);
        var L = r.internal.getPageInfo(o + 1);
        r.internal.write("<< /D[" + L.objId + " 0 R /XYZ null null null]>> endobj");
      }
      var d = r.internal.newObject();
      for (r.internal.write("<< /Names [ "), o = 0; o < P.length; o++) r.internal.write("(page_" + (o + 1) + ")" + P[o] + " 0 R");
      r.internal.write(" ] >>", "endobj"), e = r.internal.newObject(), r.internal.write("<< /Dests " + d + " 0 R"), r.internal.write(">>", "endobj");
    }
  }]), i.events.push(["putCatalog", function() {
    this.outline.root.children.length > 0 && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && this.internal.write("/Names " + e + " 0 R"));
  }]), i.events.push(["initialized", function() {
    var r = this;
    r.outline = { createNamedDestinations: !1, root: { children: [] } }, r.outline.add = function(a, u, o) {
      var f = { title: u, options: o, children: [] };
      return a == null && (a = this.root), a.children.push(f), f;
    }, r.outline.render = function() {
      return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = r, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
    }, r.outline.genIds_r = function(a) {
      a.id = r.internal.newObjectDeferred();
      for (var u = 0; u < a.children.length; u++) this.genIds_r(a.children[u]);
    }, r.outline.renderRoot = function(a) {
      this.objStart(a), this.line("/Type /Outlines"), a.children.length > 0 && (this.line("/First " + this.makeRef(a.children[0])), this.line("/Last " + this.makeRef(a.children[a.children.length - 1]))), this.line("/Count " + this.count_r({ count: 0 }, a)), this.objEnd();
    }, r.outline.renderItems = function(a) {
      for (var u = this.ctx.pdf.internal.getVerticalCoordinateString, o = 0; o < a.children.length; o++) {
        var f = a.children[o];
        this.objStart(f), this.line("/Title " + this.makeString(f.title)), this.line("/Parent " + this.makeRef(a)), o > 0 && this.line("/Prev " + this.makeRef(a.children[o - 1])), o < a.children.length - 1 && this.line("/Next " + this.makeRef(a.children[o + 1])), f.children.length > 0 && (this.line("/First " + this.makeRef(f.children[0])), this.line("/Last " + this.makeRef(f.children[f.children.length - 1])));
        var h = this.count = this.count_r({ count: 0 }, f);
        if (h > 0 && this.line("/Count " + h), f.options && f.options.pageNumber) {
          var c = r.internal.getPageInfo(f.options.pageNumber);
          this.line("/Dest [" + c.objId + " 0 R /XYZ 0 " + u(0) + " 0]");
        }
        this.objEnd();
      }
      for (var g = 0; g < a.children.length; g++) this.renderItems(a.children[g]);
    }, r.outline.line = function(a) {
      this.ctx.val += a + `\r
`;
    }, r.outline.makeRef = function(a) {
      return a.id + " 0 R";
    }, r.outline.makeString = function(a) {
      return "(" + r.internal.pdfEscape(a) + ")";
    }, r.outline.objStart = function(a) {
      this.ctx.val += `\r
` + a.id + ` 0 obj\r
<<\r
`;
    }, r.outline.objEnd = function() {
      this.ctx.val += `>> \r
endobj\r
`;
    }, r.outline.count_r = function(a, u) {
      for (var o = 0; o < u.children.length; o++) a.count++, this.count_r(a, u.children[o]);
      return a.count;
    };
  }]);
}(Yt.API), /**
 * @license
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(i) {
  var e = [192, 193, 194, 195, 196, 197, 198, 199];
  i.processJPEG = function(r, a, u, o, f, h) {
    var c, g = this.decode.DCT_DECODE, P = null;
    if (typeof r == "string" || this.__addimage__.isArrayBuffer(r) || this.__addimage__.isArrayBufferView(r)) {
      switch (r = f || r, r = this.__addimage__.isArrayBuffer(r) ? new Uint8Array(r) : r, (c = function(A) {
        for (var L, d = 256 * A.charCodeAt(4) + A.charCodeAt(5), x = A.length, F = { width: 0, height: 0, numcomponents: 1 }, E = 4; E < x; E += 2) {
          if (E += d, e.indexOf(A.charCodeAt(E + 1)) !== -1) {
            L = 256 * A.charCodeAt(E + 5) + A.charCodeAt(E + 6), F = { width: 256 * A.charCodeAt(E + 7) + A.charCodeAt(E + 8), height: L, numcomponents: A.charCodeAt(E + 9) };
            break;
          }
          d = 256 * A.charCodeAt(E + 2) + A.charCodeAt(E + 3);
        }
        return F;
      }(r = this.__addimage__.isArrayBufferView(r) ? this.__addimage__.arrayBufferToBinaryString(r) : r)).numcomponents) {
        case 1:
          h = this.color_spaces.DEVICE_GRAY;
          break;
        case 4:
          h = this.color_spaces.DEVICE_CMYK;
          break;
        case 3:
          h = this.color_spaces.DEVICE_RGB;
      }
      P = { data: r, width: c.width, height: c.height, colorSpace: h, bitsPerComponent: 8, filter: g, index: a, alias: u };
    }
    return P;
  };
}(Yt.API);
var Bi, mo, gu, mu, vu, $l = function() {
  var i, e, r;
  function a(o) {
    var f, h, c, g, P, A, L, d, x, F, E, v, S, C;
    for (this.data = o, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, A = null; ; ) {
      switch (f = this.readUInt32(), x = (function() {
        var D, G;
        for (G = [], D = 0; D < 4; ++D) G.push(String.fromCharCode(this.data[this.pos++]));
        return G;
      }).call(this).join("")) {
        case "IHDR":
          this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
          break;
        case "acTL":
          this.animation = { numFrames: this.readUInt32(), numPlays: this.readUInt32() || 1 / 0, frames: [] };
          break;
        case "PLTE":
          this.palette = this.read(f);
          break;
        case "fcTL":
          A && this.animation.frames.push(A), this.pos += 4, A = { width: this.readUInt32(), height: this.readUInt32(), xOffset: this.readUInt32(), yOffset: this.readUInt32() }, P = this.readUInt16(), g = this.readUInt16() || 100, A.delay = 1e3 * P / g, A.disposeOp = this.data[this.pos++], A.blendOp = this.data[this.pos++], A.data = [];
          break;
        case "IDAT":
        case "fdAT":
          for (x === "fdAT" && (this.pos += 4, f -= 4), o = (A != null ? A.data : void 0) || this.imgData, v = 0; 0 <= f ? v < f : v > f; 0 <= f ? ++v : --v) o.push(this.data[this.pos++]);
          break;
        case "tRNS":
          switch (this.transparency = {}, this.colorType) {
            case 3:
              if (c = this.palette.length / 3, this.transparency.indexed = this.read(f), this.transparency.indexed.length > c) throw new Error("More transparent colors than palette size");
              if ((F = c - this.transparency.indexed.length) > 0) for (S = 0; 0 <= F ? S < F : S > F; 0 <= F ? ++S : --S) this.transparency.indexed.push(255);
              break;
            case 0:
              this.transparency.grayscale = this.read(f)[0];
              break;
            case 2:
              this.transparency.rgb = this.read(f);
          }
          break;
        case "tEXt":
          L = (E = this.read(f)).indexOf(0), d = String.fromCharCode.apply(String, E.slice(0, L)), this.text[d] = String.fromCharCode.apply(String, E.slice(L + 1));
          break;
        case "IEND":
          return A && this.animation.frames.push(A), this.colors = (function() {
            switch (this.colorType) {
              case 0:
              case 3:
              case 4:
                return 1;
              case 2:
              case 6:
                return 3;
            }
          }).call(this), this.hasAlphaChannel = (C = this.colorType) === 4 || C === 6, h = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * h, this.colorSpace = (function() {
            switch (this.colors) {
              case 1:
                return "DeviceGray";
              case 3:
                return "DeviceRGB";
            }
          }).call(this), void (this.imgData = new Uint8Array(this.imgData));
        default:
          this.pos += f;
      }
      if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file");
    }
  }
  a.prototype.read = function(o) {
    var f, h;
    for (h = [], f = 0; 0 <= o ? f < o : f > o; 0 <= o ? ++f : --f) h.push(this.data[this.pos++]);
    return h;
  }, a.prototype.readUInt32 = function() {
    return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++];
  }, a.prototype.readUInt16 = function() {
    return this.data[this.pos++] << 8 | this.data[this.pos++];
  }, a.prototype.decodePixels = function(o) {
    var f = this.pixelBitlength / 8, h = new Uint8Array(this.width * this.height * f), c = 0, g = this;
    if (o == null && (o = this.imgData), o.length === 0) return new Uint8Array(0);
    function P(A, L, d, x) {
      var F, E, v, S, C, D, G, $, M, j, Z, Q, N, y, B, z, lt, U, W, K, J, st = Math.ceil((g.width - A) / d), gt = Math.ceil((g.height - L) / x), m = g.width == st && g.height == gt;
      for (y = f * st, Q = m ? h : new Uint8Array(y * gt), D = o.length, N = 0, E = 0; N < gt && c < D; ) {
        switch (o[c++]) {
          case 0:
            for (S = lt = 0; lt < y; S = lt += 1) Q[E++] = o[c++];
            break;
          case 1:
            for (S = U = 0; U < y; S = U += 1) F = o[c++], C = S < f ? 0 : Q[E - f], Q[E++] = (F + C) % 256;
            break;
          case 2:
            for (S = W = 0; W < y; S = W += 1) F = o[c++], v = (S - S % f) / f, B = N && Q[(N - 1) * y + v * f + S % f], Q[E++] = (B + F) % 256;
            break;
          case 3:
            for (S = K = 0; K < y; S = K += 1) F = o[c++], v = (S - S % f) / f, C = S < f ? 0 : Q[E - f], B = N && Q[(N - 1) * y + v * f + S % f], Q[E++] = (F + Math.floor((C + B) / 2)) % 256;
            break;
          case 4:
            for (S = J = 0; J < y; S = J += 1) F = o[c++], v = (S - S % f) / f, C = S < f ? 0 : Q[E - f], N === 0 ? B = z = 0 : (B = Q[(N - 1) * y + v * f + S % f], z = v && Q[(N - 1) * y + (v - 1) * f + S % f]), G = C + B - z, $ = Math.abs(G - C), j = Math.abs(G - B), Z = Math.abs(G - z), M = $ <= j && $ <= Z ? C : j <= Z ? B : z, Q[E++] = (F + M) % 256;
            break;
          default:
            throw new Error("Invalid filter algorithm: " + o[c - 1]);
        }
        if (!m) {
          var O = ((L + N * x) * g.width + A) * f, q = N * y;
          for (S = 0; S < st; S += 1) {
            for (var V = 0; V < f; V += 1) h[O++] = Q[q++];
            O += (d - 1) * f;
          }
        }
        N++;
      }
    }
    return o = Pl(o), g.interlaceMethod == 1 ? (P(0, 0, 8, 8), P(4, 0, 8, 8), P(0, 4, 4, 8), P(2, 0, 4, 4), P(0, 2, 2, 4), P(1, 0, 2, 2), P(0, 1, 1, 2)) : P(0, 0, 1, 1), h;
  }, a.prototype.decodePalette = function() {
    var o, f, h, c, g, P, A, L, d;
    for (h = this.palette, P = this.transparency.indexed || [], g = new Uint8Array((P.length || 0) + h.length), c = 0, o = 0, f = A = 0, L = h.length; A < L; f = A += 3) g[c++] = h[f], g[c++] = h[f + 1], g[c++] = h[f + 2], g[c++] = (d = P[o++]) != null ? d : 255;
    return g;
  }, a.prototype.copyToImageData = function(o, f) {
    var h, c, g, P, A, L, d, x, F, E, v;
    if (c = this.colors, F = null, h = this.hasAlphaChannel, this.palette.length && (F = (v = this._decodedPalette) != null ? v : this._decodedPalette = this.decodePalette(), c = 4, h = !0), x = (g = o.data || o).length, A = F || f, P = L = 0, c === 1) for (; P < x; ) d = F ? 4 * f[P / 4] : L, E = A[d++], g[P++] = E, g[P++] = E, g[P++] = E, g[P++] = h ? A[d++] : 255, L = d;
    else for (; P < x; ) d = F ? 4 * f[P / 4] : L, g[P++] = A[d++], g[P++] = A[d++], g[P++] = A[d++], g[P++] = h ? A[d++] : 255, L = d;
  }, a.prototype.decode = function() {
    var o;
    return o = new Uint8Array(this.width * this.height * 4), this.copyToImageData(o, this.decodePixels()), o;
  };
  var u = function() {
    if (Object.prototype.toString.call(Xt) === "[object Window]") {
      try {
        e = Xt.document.createElement("canvas"), r = e.getContext("2d");
      } catch {
        return !1;
      }
      return !0;
    }
    return !1;
  };
  return u(), i = function(o) {
    var f;
    if (u() === !0) return r.width = o.width, r.height = o.height, r.clearRect(0, 0, o.width, o.height), r.putImageData(o, 0, 0), (f = new Image()).src = e.toDataURL(), f;
    throw new Error("This method requires a Browser with Canvas-capability.");
  }, a.prototype.decodeFrames = function(o) {
    var f, h, c, g, P, A, L, d;
    if (this.animation) {
      for (d = [], h = P = 0, A = (L = this.animation.frames).length; P < A; h = ++P) f = L[h], c = o.createImageData(f.width, f.height), g = this.decodePixels(new Uint8Array(f.data)), this.copyToImageData(c, g), f.imageData = c, d.push(f.image = i(c));
      return d;
    }
  }, a.prototype.renderFrame = function(o, f) {
    var h, c, g;
    return h = (c = this.animation.frames)[f], g = c[f - 1], f === 0 && o.clearRect(0, 0, this.width, this.height), (g != null ? g.disposeOp : void 0) === 1 ? o.clearRect(g.xOffset, g.yOffset, g.width, g.height) : (g != null ? g.disposeOp : void 0) === 2 && o.putImageData(g.imageData, g.xOffset, g.yOffset), h.blendOp === 0 && o.clearRect(h.xOffset, h.yOffset, h.width, h.height), o.drawImage(h.image, h.xOffset, h.yOffset);
  }, a.prototype.animate = function(o) {
    var f, h, c, g, P, A, L = this;
    return h = 0, A = this.animation, g = A.numFrames, c = A.frames, P = A.numPlays, (f = function() {
      var d, x;
      if (d = h++ % g, x = c[d], L.renderFrame(o, d), g > 1 && h / g < P) return L.animation._timeout = setTimeout(f, x.delay);
    })();
  }, a.prototype.stopAnimation = function() {
    var o;
    return clearTimeout((o = this.animation) != null ? o._timeout : void 0);
  }, a.prototype.render = function(o) {
    var f, h;
    return o._png && o._png.stopAnimation(), o._png = this, o.width = this.width, o.height = this.height, f = o.getContext("2d"), this.animation ? (this.decodeFrames(f), this.animate(f)) : (h = f.createImageData(this.width, this.height), this.copyToImageData(h, this.decodePixels()), f.putImageData(h, 0, 0));
  }, a;
}();
/**
 * @license
 *
 * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
/**
 * @license
 * (c) Dean McNamee <dean@gmail.com>, 2013.
 *
 * https://github.com/deanm/omggif
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
 * including animation and compression.  It does not rely on any specific
 * underlying system, so should run in the browser, Node, or Plask.
 */
function Zl(i) {
  var e = 0;
  if (i[e++] !== 71 || i[e++] !== 73 || i[e++] !== 70 || i[e++] !== 56 || (i[e++] + 1 & 253) != 56 || i[e++] !== 97) throw new Error("Invalid GIF 87a/89a header.");
  var r = i[e++] | i[e++] << 8, a = i[e++] | i[e++] << 8, u = i[e++], o = u >> 7, f = 1 << (7 & u) + 1;
  i[e++], i[e++];
  var h = null, c = null;
  o && (h = e, c = f, e += 3 * f);
  var g = !0, P = [], A = 0, L = null, d = 0, x = null;
  for (this.width = r, this.height = a; g && e < i.length; ) switch (i[e++]) {
    case 33:
      switch (i[e++]) {
        case 255:
          if (i[e] !== 11 || i[e + 1] == 78 && i[e + 2] == 69 && i[e + 3] == 84 && i[e + 4] == 83 && i[e + 5] == 67 && i[e + 6] == 65 && i[e + 7] == 80 && i[e + 8] == 69 && i[e + 9] == 50 && i[e + 10] == 46 && i[e + 11] == 48 && i[e + 12] == 3 && i[e + 13] == 1 && i[e + 16] == 0) e += 14, x = i[e++] | i[e++] << 8, e++;
          else for (e += 12; ; ) {
            if (!((N = i[e++]) >= 0)) throw Error("Invalid block size");
            if (N === 0) break;
            e += N;
          }
          break;
        case 249:
          if (i[e++] !== 4 || i[e + 4] !== 0) throw new Error("Invalid graphics extension block.");
          var F = i[e++];
          A = i[e++] | i[e++] << 8, L = i[e++], !(1 & F) && (L = null), d = F >> 2 & 7, e++;
          break;
        case 254:
          for (; ; ) {
            if (!((N = i[e++]) >= 0)) throw Error("Invalid block size");
            if (N === 0) break;
            e += N;
          }
          break;
        default:
          throw new Error("Unknown graphic control label: 0x" + i[e - 1].toString(16));
      }
      break;
    case 44:
      var E = i[e++] | i[e++] << 8, v = i[e++] | i[e++] << 8, S = i[e++] | i[e++] << 8, C = i[e++] | i[e++] << 8, D = i[e++], G = D >> 6 & 1, $ = 1 << (7 & D) + 1, M = h, j = c, Z = !1;
      D >> 7 && (Z = !0, M = e, j = $, e += 3 * $);
      var Q = e;
      for (e++; ; ) {
        var N;
        if (!((N = i[e++]) >= 0)) throw Error("Invalid block size");
        if (N === 0) break;
        e += N;
      }
      P.push({ x: E, y: v, width: S, height: C, has_local_palette: Z, palette_offset: M, palette_size: j, data_offset: Q, data_length: e - Q, transparent_index: L, interlaced: !!G, delay: A, disposal: d });
      break;
    case 59:
      g = !1;
      break;
    default:
      throw new Error("Unknown gif block: 0x" + i[e - 1].toString(16));
  }
  this.numFrames = function() {
    return P.length;
  }, this.loopCount = function() {
    return x;
  }, this.frameInfo = function(y) {
    if (y < 0 || y >= P.length) throw new Error("Frame index out of range.");
    return P[y];
  }, this.decodeAndBlitFrameBGRA = function(y, B) {
    var z = this.frameInfo(y), lt = z.width * z.height, U = new Uint8Array(lt);
    bu(i, z.data_offset, U, lt);
    var W = z.palette_offset, K = z.transparent_index;
    K === null && (K = 256);
    var J = z.width, st = r - J, gt = J, m = 4 * (z.y * r + z.x), O = 4 * ((z.y + z.height) * r + z.x), q = m, V = 4 * st;
    z.interlaced === !0 && (V += 4 * r * 7);
    for (var X = 8, at = 0, ft = U.length; at < ft; ++at) {
      var dt = U[at];
      if (gt === 0 && (gt = J, (q += V) >= O && (V = 4 * st + 4 * r * (X - 1), q = m + (J + st) * (X << 1), X >>= 1)), dt === K) q += 4;
      else {
        var _t = i[W + 3 * dt], xt = i[W + 3 * dt + 1], Ot = i[W + 3 * dt + 2];
        B[q++] = Ot, B[q++] = xt, B[q++] = _t, B[q++] = 255;
      }
      --gt;
    }
  }, this.decodeAndBlitFrameRGBA = function(y, B) {
    var z = this.frameInfo(y), lt = z.width * z.height, U = new Uint8Array(lt);
    bu(i, z.data_offset, U, lt);
    var W = z.palette_offset, K = z.transparent_index;
    K === null && (K = 256);
    var J = z.width, st = r - J, gt = J, m = 4 * (z.y * r + z.x), O = 4 * ((z.y + z.height) * r + z.x), q = m, V = 4 * st;
    z.interlaced === !0 && (V += 4 * r * 7);
    for (var X = 8, at = 0, ft = U.length; at < ft; ++at) {
      var dt = U[at];
      if (gt === 0 && (gt = J, (q += V) >= O && (V = 4 * st + 4 * r * (X - 1), q = m + (J + st) * (X << 1), X >>= 1)), dt === K) q += 4;
      else {
        var _t = i[W + 3 * dt], xt = i[W + 3 * dt + 1], Ot = i[W + 3 * dt + 2];
        B[q++] = _t, B[q++] = xt, B[q++] = Ot, B[q++] = 255;
      }
      --gt;
    }
  };
}
function bu(i, e, r, a) {
  for (var u = i[e++], o = 1 << u, f = o + 1, h = f + 1, c = u + 1, g = (1 << c) - 1, P = 0, A = 0, L = 0, d = i[e++], x = new Int32Array(4096), F = null; ; ) {
    for (; P < 16 && d !== 0; ) A |= i[e++] << P, P += 8, d === 1 ? d = i[e++] : --d;
    if (P < c) break;
    var E = A & g;
    if (A >>= c, P -= c, E !== o) {
      if (E === f) break;
      for (var v = E < h ? E : F, S = 0, C = v; C > o; ) C = x[C] >> 8, ++S;
      var D = C;
      if (L + S + (v !== E ? 1 : 0) > a) return void Se.log("Warning, gif stream longer than expected.");
      r[L++] = D;
      var G = L += S;
      for (v !== E && (r[L++] = D), C = v; S--; ) C = x[C], r[--G] = 255 & C, C >>= 8;
      F !== null && h < 4096 && (x[h++] = F << 8 | D, h >= g + 1 && c < 12 && (++c, g = g << 1 | 1)), F = E;
    } else h = f + 1, g = (1 << (c = u + 1)) - 1, F = null;
  }
  return L !== a && Se.log("Warning, gif stream shorter than expected."), r;
}
/**
 * @license
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function ds(i) {
  var e, r, a, u, o, f = Math.floor, h = new Array(64), c = new Array(64), g = new Array(64), P = new Array(64), A = new Array(65535), L = new Array(65535), d = new Array(64), x = new Array(64), F = [], E = 0, v = 7, S = new Array(64), C = new Array(64), D = new Array(64), G = new Array(256), $ = new Array(2048), M = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63], j = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], Z = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], Q = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125], N = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250], y = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], B = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], z = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119], lt = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
  function U(m, O) {
    for (var q = 0, V = 0, X = new Array(), at = 1; at <= 16; at++) {
      for (var ft = 1; ft <= m[at]; ft++) X[O[V]] = [], X[O[V]][0] = q, X[O[V]][1] = at, V++, q++;
      q *= 2;
    }
    return X;
  }
  function W(m) {
    for (var O = m[0], q = m[1] - 1; q >= 0; ) O & 1 << q && (E |= 1 << v), q--, --v < 0 && (E == 255 ? (K(255), K(0)) : K(E), v = 7, E = 0);
  }
  function K(m) {
    F.push(m);
  }
  function J(m) {
    K(m >> 8 & 255), K(255 & m);
  }
  function st(m, O, q, V, X) {
    for (var at, ft = X[0], dt = X[240], _t = function(Nt, Pt) {
      var Tt, Ft, Ht, $t, Zt, te, ae, fe, Jt, oe, Et = 0;
      for (Jt = 0; Jt < 8; ++Jt) {
        Tt = Nt[Et], Ft = Nt[Et + 1], Ht = Nt[Et + 2], $t = Nt[Et + 3], Zt = Nt[Et + 4], te = Nt[Et + 5], ae = Nt[Et + 6];
        var Ge = Tt + (fe = Nt[Et + 7]), ce = Tt - fe, fr = Ft + ae, be = Ft - ae, de = Ht + te, ar = Ht - te, pe = $t + Zt, Xr = $t - Zt, Ce = Ge + pe, Ke = Ge - pe, Kr = fr + de, Fe = fr - de;
        Nt[Et] = Ce + Kr, Nt[Et + 4] = Ce - Kr;
        var qt = 0.707106781 * (Fe + Ke);
        Nt[Et + 2] = Ke + qt, Nt[Et + 6] = Ke - qt;
        var ue = 0.382683433 * ((Ce = Xr + ar) - (Fe = be + ce)), vn = 0.5411961 * Ce + ue, Ve = 1.306562965 * Fe + ue, Sr = 0.707106781 * (Kr = ar + be), Tr = ce + Sr, Wt = ce - Sr;
        Nt[Et + 5] = Wt + vn, Nt[Et + 3] = Wt - vn, Nt[Et + 1] = Tr + Ve, Nt[Et + 7] = Tr - Ve, Et += 8;
      }
      for (Et = 0, Jt = 0; Jt < 8; ++Jt) {
        Tt = Nt[Et], Ft = Nt[Et + 8], Ht = Nt[Et + 16], $t = Nt[Et + 24], Zt = Nt[Et + 32], te = Nt[Et + 40], ae = Nt[Et + 48];
        var Ir = Tt + (fe = Nt[Et + 56]), vr = Tt - fe, Qe = Ft + ae, Me = Ft - ae, me = Ht + te, tr = Ht - te, bn = $t + Zt, Br = $t - Zt, br = Ir + bn, or = Ir - bn, Re = Qe + me, Er = Qe - me;
        Nt[Et] = br + Re, Nt[Et + 32] = br - Re;
        var yr = 0.707106781 * (Er + or);
        Nt[Et + 16] = or + yr, Nt[Et + 48] = or - yr;
        var Or = 0.382683433 * ((br = Br + tr) - (Er = Me + vr)), ln = 0.5411961 * br + Or, kn = 1.306562965 * Er + Or, zt = 0.707106781 * (Re = tr + Me), et = vr + zt, St = vr - zt;
        Nt[Et + 40] = St + ln, Nt[Et + 24] = St - ln, Nt[Et + 8] = et + kn, Nt[Et + 56] = et - kn, Et++;
      }
      for (Jt = 0; Jt < 64; ++Jt) oe = Nt[Jt] * Pt[Jt], d[Jt] = oe > 0 ? oe + 0.5 | 0 : oe - 0.5 | 0;
      return d;
    }(m, O), xt = 0; xt < 64; ++xt) x[M[xt]] = _t[xt];
    var Ot = x[0] - q;
    q = x[0], Ot == 0 ? W(V[0]) : (W(V[L[at = 32767 + Ot]]), W(A[at]));
    for (var jt = 63; jt > 0 && x[jt] == 0; ) jt--;
    if (jt == 0) return W(ft), q;
    for (var Gt, mt = 1; mt <= jt; ) {
      for (var Y = mt; x[mt] == 0 && mt <= jt; ) ++mt;
      var Kt = mt - Y;
      if (Kt >= 16) {
        Gt = Kt >> 4;
        for (var Bt = 1; Bt <= Gt; ++Bt) W(dt);
        Kt &= 15;
      }
      at = 32767 + x[mt], W(X[(Kt << 4) + L[at]]), W(A[at]), mt++;
    }
    return jt != 63 && W(ft), q;
  }
  function gt(m) {
    m = Math.min(Math.max(m, 1), 100), o != m && (function(O) {
      for (var q = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], V = 0; V < 64; V++) {
        var X = f((q[V] * O + 50) / 100);
        X = Math.min(Math.max(X, 1), 255), h[M[V]] = X;
      }
      for (var at = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], ft = 0; ft < 64; ft++) {
        var dt = f((at[ft] * O + 50) / 100);
        dt = Math.min(Math.max(dt, 1), 255), c[M[ft]] = dt;
      }
      for (var _t = [1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961, 0.275899379], xt = 0, Ot = 0; Ot < 8; Ot++) for (var jt = 0; jt < 8; jt++) g[xt] = 1 / (h[M[xt]] * _t[Ot] * _t[jt] * 8), P[xt] = 1 / (c[M[xt]] * _t[Ot] * _t[jt] * 8), xt++;
    }(m < 50 ? Math.floor(5e3 / m) : Math.floor(200 - 2 * m)), o = m);
  }
  this.encode = function(m, O) {
    O && gt(O), F = new Array(), E = 0, v = 7, J(65496), J(65504), J(16), K(74), K(70), K(73), K(70), K(0), K(1), K(1), K(0), J(1), J(1), K(0), K(0), function() {
      J(65499), J(132), K(0);
      for (var Ft = 0; Ft < 64; Ft++) K(h[Ft]);
      K(1);
      for (var Ht = 0; Ht < 64; Ht++) K(c[Ht]);
    }(), function(Ft, Ht) {
      J(65472), J(17), K(8), J(Ht), J(Ft), K(3), K(1), K(17), K(0), K(2), K(17), K(1), K(3), K(17), K(1);
    }(m.width, m.height), function() {
      J(65476), J(418), K(0);
      for (var Ft = 0; Ft < 16; Ft++) K(j[Ft + 1]);
      for (var Ht = 0; Ht <= 11; Ht++) K(Z[Ht]);
      K(16);
      for (var $t = 0; $t < 16; $t++) K(Q[$t + 1]);
      for (var Zt = 0; Zt <= 161; Zt++) K(N[Zt]);
      K(1);
      for (var te = 0; te < 16; te++) K(y[te + 1]);
      for (var ae = 0; ae <= 11; ae++) K(B[ae]);
      K(17);
      for (var fe = 0; fe < 16; fe++) K(z[fe + 1]);
      for (var Jt = 0; Jt <= 161; Jt++) K(lt[Jt]);
    }(), J(65498), J(12), K(3), K(1), K(0), K(2), K(17), K(3), K(17), K(0), K(63), K(0);
    var q = 0, V = 0, X = 0;
    E = 0, v = 7, this.encode.displayName = "_encode_";
    for (var at, ft, dt, _t, xt, Ot, jt, Gt, mt, Y = m.data, Kt = m.width, Bt = m.height, Nt = 4 * Kt, Pt = 0; Pt < Bt; ) {
      for (at = 0; at < Nt; ) {
        for (xt = Nt * Pt + at, jt = -1, Gt = 0, mt = 0; mt < 64; mt++) Ot = xt + (Gt = mt >> 3) * Nt + (jt = 4 * (7 & mt)), Pt + Gt >= Bt && (Ot -= Nt * (Pt + 1 + Gt - Bt)), at + jt >= Nt && (Ot -= at + jt - Nt + 4), ft = Y[Ot++], dt = Y[Ot++], _t = Y[Ot++], S[mt] = ($[ft] + $[dt + 256 >> 0] + $[_t + 512 >> 0] >> 16) - 128, C[mt] = ($[ft + 768 >> 0] + $[dt + 1024 >> 0] + $[_t + 1280 >> 0] >> 16) - 128, D[mt] = ($[ft + 1280 >> 0] + $[dt + 1536 >> 0] + $[_t + 1792 >> 0] >> 16) - 128;
        q = st(S, g, q, e, a), V = st(C, P, V, r, u), X = st(D, P, X, r, u), at += 32;
      }
      Pt += 8;
    }
    if (v >= 0) {
      var Tt = [];
      Tt[1] = v + 1, Tt[0] = (1 << v + 1) - 1, W(Tt);
    }
    return J(65497), new Uint8Array(F);
  }, i = i || 50, function() {
    for (var m = String.fromCharCode, O = 0; O < 256; O++) G[O] = m(O);
  }(), e = U(j, Z), r = U(y, B), a = U(Q, N), u = U(z, lt), function() {
    for (var m = 1, O = 2, q = 1; q <= 15; q++) {
      for (var V = m; V < O; V++) L[32767 + V] = q, A[32767 + V] = [], A[32767 + V][1] = q, A[32767 + V][0] = V;
      for (var X = -(O - 1); X <= -m; X++) L[32767 + X] = q, A[32767 + X] = [], A[32767 + X][1] = q, A[32767 + X][0] = O - 1 + X;
      m <<= 1, O <<= 1;
    }
  }(), function() {
    for (var m = 0; m < 256; m++) $[m] = 19595 * m, $[m + 256 >> 0] = 38470 * m, $[m + 512 >> 0] = 7471 * m + 32768, $[m + 768 >> 0] = -11059 * m, $[m + 1024 >> 0] = -21709 * m, $[m + 1280 >> 0] = 32768 * m + 8421375, $[m + 1536 >> 0] = -27439 * m, $[m + 1792 >> 0] = -5329 * m;
  }(), gt(i);
}
/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function nn(i, e) {
  if (this.pos = 0, this.buffer = i, this.datav = new DataView(i.buffer), this.is_with_alpha = !!e, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag) === -1) throw new Error("Invalid BMP File");
  this.parseHeader(), this.parseBGR();
}
function yu(i) {
  function e(j) {
    if (!j) throw Error("assert :P");
  }
  function r(j, Z, Q) {
    for (var N = 0; 4 > N; N++) if (j[Z + N] != Q.charCodeAt(N)) return !0;
    return !1;
  }
  function a(j, Z, Q, N, y) {
    for (var B = 0; B < y; B++) j[Z + B] = Q[N + B];
  }
  function u(j, Z, Q, N) {
    for (var y = 0; y < N; y++) j[Z + y] = Q;
  }
  function o(j) {
    return new Int32Array(j);
  }
  function f(j, Z) {
    for (var Q = [], N = 0; N < j; N++) Q.push(new Z());
    return Q;
  }
  function h(j, Z) {
    var Q = [];
    return function N(y, B, z) {
      for (var lt = z[B], U = 0; U < lt && (y.push(z.length > B + 1 ? [] : new Z()), !(z.length < B + 1)); U++) N(y[U], B + 1, z);
    }(Q, 0, j), Q;
  }
  var c = function() {
    var j = this;
    function Z(t, n) {
      for (var l = 1 << n - 1 >>> 0; t & l; ) l >>>= 1;
      return l ? (t & l - 1) + l : t;
    }
    function Q(t, n, l, p, b) {
      e(!(p % l));
      do
        t[n + (p -= l)] = b;
      while (0 < p);
    }
    function N(t, n, l, p, b) {
      if (e(2328 >= b), 512 >= b) var _ = o(512);
      else if ((_ = o(b)) == null) return 0;
      return function(k, T, I, R, rt, ct) {
        var ht, ot, wt = T, pt = 1 << I, nt = o(16), it = o(16);
        for (e(rt != 0), e(R != null), e(k != null), e(0 < I), ot = 0; ot < rt; ++ot) {
          if (15 < R[ot]) return 0;
          ++nt[R[ot]];
        }
        if (nt[0] == rt) return 0;
        for (it[1] = 0, ht = 1; 15 > ht; ++ht) {
          if (nt[ht] > 1 << ht) return 0;
          it[ht + 1] = it[ht] + nt[ht];
        }
        for (ot = 0; ot < rt; ++ot) ht = R[ot], 0 < R[ot] && (ct[it[ht]++] = ot);
        if (it[15] == 1) return (R = new y()).g = 0, R.value = ct[0], Q(k, wt, 1, pt, R), pt;
        var bt, At = -1, yt = pt - 1, Mt = 0, Ct = 1, Vt = 1, It = 1 << I;
        for (ot = 0, ht = 1, rt = 2; ht <= I; ++ht, rt <<= 1) {
          if (Ct += Vt <<= 1, 0 > (Vt -= nt[ht])) return 0;
          for (; 0 < nt[ht]; --nt[ht]) (R = new y()).g = ht, R.value = ct[ot++], Q(k, wt + Mt, rt, It, R), Mt = Z(Mt, ht);
        }
        for (ht = I + 1, rt = 2; 15 >= ht; ++ht, rt <<= 1) {
          if (Ct += Vt <<= 1, 0 > (Vt -= nt[ht])) return 0;
          for (; 0 < nt[ht]; --nt[ht]) {
            if (R = new y(), (Mt & yt) != At) {
              for (wt += It, bt = 1 << (At = ht) - I; 15 > At && !(0 >= (bt -= nt[At])); ) ++At, bt <<= 1;
              pt += It = 1 << (bt = At - I), k[T + (At = Mt & yt)].g = bt + I, k[T + At].value = wt - T - At;
            }
            R.g = ht - I, R.value = ct[ot++], Q(k, wt + (Mt >> I), rt, It, R), Mt = Z(Mt, ht);
          }
        }
        return Ct != 2 * it[15] - 1 ? 0 : pt;
      }(t, n, l, p, b, _);
    }
    function y() {
      this.value = this.g = 0;
    }
    function B() {
      this.value = this.g = 0;
    }
    function z() {
      this.G = f(5, y), this.H = o(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = f(sr, B);
    }
    function lt(t, n, l, p) {
      e(t != null), e(n != null), e(2147483648 > p), t.Ca = 254, t.I = 0, t.b = -8, t.Ka = 0, t.oa = n, t.pa = l, t.Jd = n, t.Yc = l + p, t.Zc = 4 <= p ? l + p - 4 + 1 : l, at(t);
    }
    function U(t, n) {
      for (var l = 0; 0 < n--; ) l |= dt(t, 128) << n;
      return l;
    }
    function W(t, n) {
      var l = U(t, n);
      return ft(t) ? -l : l;
    }
    function K(t, n, l, p) {
      var b, _ = 0;
      for (e(t != null), e(n != null), e(4294967288 > p), t.Sb = p, t.Ra = 0, t.u = 0, t.h = 0, 4 < p && (p = 4), b = 0; b < p; ++b) _ += n[l + b] << 8 * b;
      t.Ra = _, t.bb = p, t.oa = n, t.pa = l;
    }
    function J(t) {
      for (; 8 <= t.u && t.bb < t.Sb; ) t.Ra >>>= 8, t.Ra += t.oa[t.pa + t.bb] << ki - 8 >>> 0, ++t.bb, t.u -= 8;
      q(t) && (t.h = 1, t.u = 0);
    }
    function st(t, n) {
      if (e(0 <= n), !t.h && n <= Pi) {
        var l = O(t) & _i[n];
        return t.u += n, J(t), l;
      }
      return t.h = 1, t.u = 0;
    }
    function gt() {
      this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0;
    }
    function m() {
      this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0;
    }
    function O(t) {
      return t.Ra >>> (t.u & ki - 1) >>> 0;
    }
    function q(t) {
      return e(t.bb <= t.Sb), t.h || t.bb == t.Sb && t.u > ki;
    }
    function V(t, n) {
      t.u = n, t.h = q(t);
    }
    function X(t) {
      t.u >= aa && (e(t.u >= aa), J(t));
    }
    function at(t) {
      e(t != null && t.oa != null), t.pa < t.Zc ? (t.I = (t.oa[t.pa++] | t.I << 8) >>> 0, t.b += 8) : (e(t != null && t.oa != null), t.pa < t.Yc ? (t.b += 8, t.I = t.oa[t.pa++] | t.I << 8) : t.Ka ? t.b = 0 : (t.I <<= 8, t.b += 8, t.Ka = 1));
    }
    function ft(t) {
      return U(t, 1);
    }
    function dt(t, n) {
      var l = t.Ca;
      0 > t.b && at(t);
      var p = t.b, b = l * n >>> 8, _ = (t.I >>> p > b) + 0;
      for (_ ? (l -= b, t.I -= b + 1 << p >>> 0) : l = b + 1, p = l, b = 0; 256 <= p; ) b += 8, p >>= 8;
      return p = 7 ^ b + _r[p], t.b -= p, t.Ca = (l << p) - 1, _;
    }
    function _t(t, n, l) {
      t[n + 0] = l >> 24 & 255, t[n + 1] = l >> 16 & 255, t[n + 2] = l >> 8 & 255, t[n + 3] = l >> 0 & 255;
    }
    function xt(t, n) {
      return t[n + 0] << 0 | t[n + 1] << 8;
    }
    function Ot(t, n) {
      return xt(t, n) | t[n + 2] << 16;
    }
    function jt(t, n) {
      return xt(t, n) | xt(t, n + 2) << 16;
    }
    function Gt(t, n) {
      var l = 1 << n;
      return e(t != null), e(0 < n), t.X = o(l), t.X == null ? 0 : (t.Mb = 32 - n, t.Xa = n, 1);
    }
    function mt(t, n) {
      e(t != null), e(n != null), e(t.Xa == n.Xa), a(n.X, 0, t.X, 0, 1 << n.Xa);
    }
    function Y() {
      this.X = [], this.Xa = this.Mb = 0;
    }
    function Kt(t, n, l, p) {
      e(l != null), e(p != null);
      var b = l[0], _ = p[0];
      return b == 0 && (b = (t * _ + n / 2) / n), _ == 0 && (_ = (n * b + t / 2) / t), 0 >= b || 0 >= _ ? 0 : (l[0] = b, p[0] = _, 1);
    }
    function Bt(t, n) {
      return t + (1 << n) - 1 >>> n;
    }
    function Nt(t, n) {
      return ((4278255360 & t) + (4278255360 & n) >>> 0 & 4278255360) + ((16711935 & t) + (16711935 & n) >>> 0 & 16711935) >>> 0;
    }
    function Pt(t, n) {
      j[n] = function(l, p, b, _, k, T, I) {
        var R;
        for (R = 0; R < k; ++R) {
          var rt = j[t](T[I + R - 1], b, _ + R);
          T[I + R] = Nt(l[p + R], rt);
        }
      };
    }
    function Tt() {
      this.ud = this.hd = this.jd = 0;
    }
    function Ft(t, n) {
      return ((4278124286 & (t ^ n)) >>> 1) + (t & n) >>> 0;
    }
    function Ht(t) {
      return 0 <= t && 256 > t ? t : 0 > t ? 0 : 255 < t ? 255 : void 0;
    }
    function $t(t, n) {
      return Ht(t + (t - n + 0.5 >> 1));
    }
    function Zt(t, n, l) {
      return Math.abs(n - l) - Math.abs(t - l);
    }
    function te(t, n, l, p, b, _, k) {
      for (p = _[k - 1], l = 0; l < b; ++l) _[k + l] = p = Nt(t[n + l], p);
    }
    function ae(t, n, l, p, b) {
      var _;
      for (_ = 0; _ < l; ++_) {
        var k = t[n + _], T = k >> 8 & 255, I = 16711935 & (I = (I = 16711935 & k) + ((T << 16) + T));
        p[b + _] = (4278255360 & k) + I >>> 0;
      }
    }
    function fe(t, n) {
      n.jd = t >> 0 & 255, n.hd = t >> 8 & 255, n.ud = t >> 16 & 255;
    }
    function Jt(t, n, l, p, b, _) {
      var k;
      for (k = 0; k < p; ++k) {
        var T = n[l + k], I = T >>> 8, R = T, rt = 255 & (rt = (rt = T >>> 16) + ((t.jd << 24 >> 24) * (I << 24 >> 24) >>> 5));
        R = 255 & (R = (R = R + ((t.hd << 24 >> 24) * (I << 24 >> 24) >>> 5)) + ((t.ud << 24 >> 24) * (rt << 24 >> 24) >>> 5)), b[_ + k] = (4278255360 & T) + (rt << 16) + R;
      }
    }
    function oe(t, n, l, p, b) {
      j[n] = function(_, k, T, I, R, rt, ct, ht, ot) {
        for (I = ct; I < ht; ++I) for (ct = 0; ct < ot; ++ct) R[rt++] = b(T[p(_[k++])]);
      }, j[t] = function(_, k, T, I, R, rt, ct) {
        var ht = 8 >> _.b, ot = _.Ea, wt = _.K[0], pt = _.w;
        if (8 > ht) for (_ = (1 << _.b) - 1, pt = (1 << ht) - 1; k < T; ++k) {
          var nt, it = 0;
          for (nt = 0; nt < ot; ++nt) nt & _ || (it = p(I[R++])), rt[ct++] = b(wt[it & pt]), it >>= ht;
        }
        else j["VP8LMapColor" + l](I, R, wt, pt, rt, ct, k, T, ot);
      };
    }
    function Et(t, n, l, p, b) {
      for (l = n + l; n < l; ) {
        var _ = t[n++];
        p[b++] = _ >> 16 & 255, p[b++] = _ >> 8 & 255, p[b++] = _ >> 0 & 255;
      }
    }
    function Ge(t, n, l, p, b) {
      for (l = n + l; n < l; ) {
        var _ = t[n++];
        p[b++] = _ >> 16 & 255, p[b++] = _ >> 8 & 255, p[b++] = _ >> 0 & 255, p[b++] = _ >> 24 & 255;
      }
    }
    function ce(t, n, l, p, b) {
      for (l = n + l; n < l; ) {
        var _ = (k = t[n++]) >> 16 & 240 | k >> 12 & 15, k = k >> 0 & 240 | k >> 28 & 15;
        p[b++] = _, p[b++] = k;
      }
    }
    function fr(t, n, l, p, b) {
      for (l = n + l; n < l; ) {
        var _ = (k = t[n++]) >> 16 & 248 | k >> 13 & 7, k = k >> 5 & 224 | k >> 3 & 31;
        p[b++] = _, p[b++] = k;
      }
    }
    function be(t, n, l, p, b) {
      for (l = n + l; n < l; ) {
        var _ = t[n++];
        p[b++] = _ >> 0 & 255, p[b++] = _ >> 8 & 255, p[b++] = _ >> 16 & 255;
      }
    }
    function de(t, n, l, p, b, _) {
      if (_ == 0) for (l = n + l; n < l; ) _t(p, ((_ = t[n++])[0] >> 24 | _[1] >> 8 & 65280 | _[2] << 8 & 16711680 | _[3] << 24) >>> 0), b += 32;
      else a(p, b, t, n, l);
    }
    function ar(t, n) {
      j[n][0] = j[t + "0"], j[n][1] = j[t + "1"], j[n][2] = j[t + "2"], j[n][3] = j[t + "3"], j[n][4] = j[t + "4"], j[n][5] = j[t + "5"], j[n][6] = j[t + "6"], j[n][7] = j[t + "7"], j[n][8] = j[t + "8"], j[n][9] = j[t + "9"], j[n][10] = j[t + "10"], j[n][11] = j[t + "11"], j[n][12] = j[t + "12"], j[n][13] = j[t + "13"], j[n][14] = j[t + "0"], j[n][15] = j[t + "0"];
    }
    function pe(t) {
      return t == Yo || t == Jo || t == Za || t == Xo;
    }
    function Xr() {
      this.eb = [], this.size = this.A = this.fb = 0;
    }
    function Ce() {
      this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0;
    }
    function Ke() {
      this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new Xr(), this.f.kb = new Ce(), this.sd = null;
    }
    function Kr() {
      this.width = [0], this.height = [0], this.Pd = [0], this.Qd = [0], this.format = [0];
    }
    function Fe() {
      this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0;
    }
    function qt(t) {
      return alert("todo:WebPSamplerProcessPlane"), t.T;
    }
    function ue(t, n) {
      var l = t.T, p = n.ba.f.RGBA, b = p.eb, _ = p.fb + t.ka * p.A, k = Gr[n.ba.S], T = t.y, I = t.O, R = t.f, rt = t.N, ct = t.ea, ht = t.W, ot = n.cc, wt = n.dc, pt = n.Mc, nt = n.Nc, it = t.ka, bt = t.ka + t.T, At = t.U, yt = At + 1 >> 1;
      for (it == 0 ? k(T, I, null, null, R, rt, ct, ht, R, rt, ct, ht, b, _, null, null, At) : (k(n.ec, n.fc, T, I, ot, wt, pt, nt, R, rt, ct, ht, b, _ - p.A, b, _, At), ++l); it + 2 < bt; it += 2) ot = R, wt = rt, pt = ct, nt = ht, rt += t.Rc, ht += t.Rc, _ += 2 * p.A, k(T, (I += 2 * t.fa) - t.fa, T, I, ot, wt, pt, nt, R, rt, ct, ht, b, _ - p.A, b, _, At);
      return I += t.fa, t.j + bt < t.o ? (a(n.ec, n.fc, T, I, At), a(n.cc, n.dc, R, rt, yt), a(n.Mc, n.Nc, ct, ht, yt), l--) : 1 & bt || k(T, I, null, null, R, rt, ct, ht, R, rt, ct, ht, b, _ + p.A, null, null, At), l;
    }
    function vn(t, n, l) {
      var p = t.F, b = [t.J];
      if (p != null) {
        var _ = t.U, k = n.ba.S, T = k == $a || k == Za;
        n = n.ba.f.RGBA;
        var I = [0], R = t.ka;
        I[0] = t.T, t.Kb && (R == 0 ? --I[0] : (--R, b[0] -= t.width), t.j + t.ka + t.T == t.o && (I[0] = t.o - t.j - R));
        var rt = n.eb;
        R = n.fb + R * n.A, t = Pe(p, b[0], t.width, _, I, rt, R + (T ? 0 : 3), n.A), e(l == I), t && pe(k) && Ur(rt, R, T, _, I, n.A);
      }
      return 0;
    }
    function Ve(t) {
      var n = t.ma, l = n.ba.S, p = 11 > l, b = l == Xa || l == Ka || l == $a || l == Vo || l == 12 || pe(l);
      if (n.memory = null, n.Ib = null, n.Jb = null, n.Nd = null, !na(n.Oa, t, b ? 11 : 12)) return 0;
      if (b && pe(l) && Lt(), t.da) alert("todo:use_scaling");
      else {
        if (p) {
          if (n.Ib = qt, t.Kb) {
            if (l = t.U + 1 >> 1, n.memory = o(t.U + 2 * l), n.memory == null) return 0;
            n.ec = n.memory, n.fc = 0, n.cc = n.ec, n.dc = n.fc + t.U, n.Mc = n.cc, n.Nc = n.dc + l, n.Ib = ue, Lt();
          }
        } else alert("todo:EmitYUV");
        b && (n.Jb = vn, p && ut());
      }
      if (p && !qs) {
        for (t = 0; 256 > t; ++t) ul[t] = 89858 * (t - 128) + to >> Qa, cl[t] = -22014 * (t - 128) + to, fl[t] = -45773 * (t - 128), ll[t] = 113618 * (t - 128) + to >> Qa;
        for (t = ha; t < Zo; ++t) n = 76283 * (t - 16) + to >> Qa, hl[t - ha] = jr(n, 255), dl[t - ha] = jr(n + 8 >> 4, 15);
        qs = 1;
      }
      return 1;
    }
    function Sr(t) {
      var n = t.ma, l = t.U, p = t.T;
      return e(!(1 & t.ka)), 0 >= l || 0 >= p ? 0 : (l = n.Ib(t, n), n.Jb != null && n.Jb(t, n, l), n.Dc += l, 1);
    }
    function Tr(t) {
      t.ma.memory = null;
    }
    function Wt(t, n, l, p) {
      return st(t, 8) != 47 ? 0 : (n[0] = st(t, 14) + 1, l[0] = st(t, 14) + 1, p[0] = st(t, 1), st(t, 3) != 0 ? 0 : !t.h);
    }
    function Ir(t, n) {
      if (4 > t) return t + 1;
      var l = t - 2 >> 1;
      return (2 + (1 & t) << l) + st(n, l) + 1;
    }
    function vr(t, n) {
      return 120 < n ? n - 120 : 1 <= (l = ((l = Ju[n - 1]) >> 4) * t + (8 - (15 & l))) ? l : 1;
      var l;
    }
    function Qe(t, n, l) {
      var p = O(l), b = t[n += 255 & p].g - 8;
      return 0 < b && (V(l, l.u + 8), p = O(l), n += t[n].value, n += p & (1 << b) - 1), V(l, l.u + t[n].g), t[n].value;
    }
    function Me(t, n, l) {
      return l.g += t.g, l.value += t.value << n >>> 0, e(8 >= l.g), t.g;
    }
    function me(t, n, l) {
      var p = t.xc;
      return e((n = p == 0 ? 0 : t.vc[t.md * (l >> p) + (n >> p)]) < t.Wb), t.Ya[n];
    }
    function tr(t, n, l, p) {
      var b = t.ab, _ = t.c * n, k = t.C;
      n = k + n;
      var T = l, I = p;
      for (p = t.Ta, l = t.Ua; 0 < b--; ) {
        var R = t.gc[b], rt = k, ct = n, ht = T, ot = I, wt = (I = p, T = l, R.Ea);
        switch (e(rt < ct), e(ct <= R.nc), R.hc) {
          case 2:
            Ha(ht, ot, (ct - rt) * wt, I, T);
            break;
          case 0:
            var pt = rt, nt = ct, it = I, bt = T, At = (It = R).Ea;
            pt == 0 && (Wo(ht, ot, null, null, 1, it, bt), te(ht, ot + 1, 0, 0, At - 1, it, bt + 1), ot += At, bt += At, ++pt);
            for (var yt = 1 << It.b, Mt = yt - 1, Ct = Bt(At, It.b), Vt = It.K, It = It.w + (pt >> It.b) * Ct; pt < nt; ) {
              var ye = Vt, we = It, ve = 1;
              for (oa(ht, ot, it, bt - At, 1, it, bt); ve < At; ) {
                var le = (ve & ~Mt) + yt;
                le > At && (le = At), (0, In[ye[we++] >> 8 & 15])(ht, ot + +ve, it, bt + ve - At, le - ve, it, bt + ve), ve = le;
              }
              ot += At, bt += At, ++pt & Mt || (It += Ct);
            }
            ct != R.nc && a(I, T - wt, I, T + (ct - rt - 1) * wt, wt);
            break;
          case 1:
            for (wt = ht, nt = ot, At = (ht = R.Ea) - (bt = ht & ~(it = (ot = 1 << R.b) - 1)), pt = Bt(ht, R.b), yt = R.K, R = R.w + (rt >> R.b) * pt; rt < ct; ) {
              for (Mt = yt, Ct = R, Vt = new Tt(), It = nt + bt, ye = nt + ht; nt < It; ) fe(Mt[Ct++], Vt), ei(Vt, wt, nt, ot, I, T), nt += ot, T += ot;
              nt < ye && (fe(Mt[Ct++], Vt), ei(Vt, wt, nt, At, I, T), nt += At, T += At), ++rt & it || (R += pt);
            }
            break;
          case 3:
            if (ht == I && ot == T && 0 < R.b) {
              for (nt = I, ht = wt = T + (ct - rt) * wt - (bt = (ct - rt) * Bt(R.Ea, R.b)), ot = I, it = T, pt = [], bt = (At = bt) - 1; 0 <= bt; --bt) pt[bt] = ot[it + bt];
              for (bt = At - 1; 0 <= bt; --bt) nt[ht + bt] = pt[bt];
              qr(R, rt, ct, I, wt, I, T);
            } else qr(R, rt, ct, ht, ot, I, T);
        }
        T = p, I = l;
      }
      I != l && a(p, l, T, I, _);
    }
    function bn(t, n) {
      var l = t.V, p = t.Ba + t.c * t.C, b = n - t.C;
      if (e(n <= t.l.o), e(16 >= b), 0 < b) {
        var _ = t.l, k = t.Ta, T = t.Ua, I = _.width;
        if (tr(t, b, l, p), b = T = [T], e((l = t.C) < (p = n)), e(_.v < _.va), p > _.o && (p = _.o), l < _.j) {
          var R = _.j - l;
          l = _.j, b[0] += R * I;
        }
        if (l >= p ? l = 0 : (b[0] += 4 * _.v, _.ka = l - _.j, _.U = _.va - _.v, _.T = p - l, l = 1), l) {
          if (T = T[0], 11 > (l = t.ca).S) {
            var rt = l.f.RGBA, ct = (p = l.S, b = _.U, _ = _.T, R = rt.eb, rt.A), ht = _;
            for (rt = rt.fb + t.Ma * rt.A; 0 < ht--; ) {
              var ot = k, wt = T, pt = b, nt = R, it = rt;
              switch (p) {
                case Ja:
                  Pr(ot, wt, pt, nt, it);
                  break;
                case Xa:
                  wr(ot, wt, pt, nt, it);
                  break;
                case Yo:
                  wr(ot, wt, pt, nt, it), Ur(nt, it, 0, pt, 1, 0);
                  break;
                case Ts:
                  Ln(ot, wt, pt, nt, it);
                  break;
                case Ka:
                  de(ot, wt, pt, nt, it, 1);
                  break;
                case Jo:
                  de(ot, wt, pt, nt, it, 1), Ur(nt, it, 0, pt, 1, 0);
                  break;
                case $a:
                  de(ot, wt, pt, nt, it, 0);
                  break;
                case Za:
                  de(ot, wt, pt, nt, it, 0), Ur(nt, it, 1, pt, 1, 0);
                  break;
                case Vo:
                  En(ot, wt, pt, nt, it);
                  break;
                case Xo:
                  En(ot, wt, pt, nt, it), _e(nt, it, pt, 1, 0);
                  break;
                case Is:
                  An(ot, wt, pt, nt, it);
                  break;
                default:
                  e(0);
              }
              T += I, rt += ct;
            }
            t.Ma += _;
          } else alert("todo:EmitRescaledRowsYUVA");
          e(t.Ma <= l.height);
        }
      }
      t.C = n, e(t.C <= t.i);
    }
    function Br(t) {
      var n;
      if (0 < t.ua) return 0;
      for (n = 0; n < t.Wb; ++n) {
        var l = t.Ya[n].G, p = t.Ya[n].H;
        if (0 < l[1][p[1] + 0].g || 0 < l[2][p[2] + 0].g || 0 < l[3][p[3] + 0].g) return 0;
      }
      return 1;
    }
    function br(t, n, l, p, b, _) {
      if (t.Z != 0) {
        var k = t.qd, T = t.rd;
        for (e(Mn[t.Z] != null); n < l; ++n) Mn[t.Z](k, T, p, b, p, b, _), k = p, T = b, b += _;
        t.qd = k, t.rd = T;
      }
    }
    function or(t, n) {
      var l = t.l.ma, p = l.Z == 0 || l.Z == 1 ? t.l.j : t.C;
      if (p = t.C < p ? p : t.C, e(n <= t.l.o), n > p) {
        var b = t.l.width, _ = l.ca, k = l.tb + b * p, T = t.V, I = t.Ba + t.c * p, R = t.gc;
        e(t.ab == 1), e(R[0].hc == 3), Ua(R[0], p, n, T, I, _, k), br(l, p, n, _, k, b);
      }
      t.C = t.Ma = n;
    }
    function Re(t, n, l, p, b, _, k) {
      var T = t.$ / p, I = t.$ % p, R = t.m, rt = t.s, ct = l + t.$, ht = ct;
      b = l + p * b;
      var ot = l + p * _, wt = 280 + rt.ua, pt = t.Pb ? T : 16777216, nt = 0 < rt.ua ? rt.Wa : null, it = rt.wc, bt = ct < ot ? me(rt, I, T) : null;
      e(t.C < _), e(ot <= b);
      var At = !1;
      t: for (; ; ) {
        for (; At || ct < ot; ) {
          var yt = 0;
          if (T >= pt) {
            var Mt = ct - l;
            e((pt = t).Pb), pt.wd = pt.m, pt.xd = Mt, 0 < pt.s.ua && mt(pt.s.Wa, pt.s.vb), pt = T + Ku;
          }
          if (I & it || (bt = me(rt, I, T)), e(bt != null), bt.Qb && (n[ct] = bt.qb, At = !0), !At) if (X(R), bt.jc) {
            yt = R, Mt = n;
            var Ct = ct, Vt = bt.pd[O(yt) & sr - 1];
            e(bt.jc), 256 > Vt.g ? (V(yt, yt.u + Vt.g), Mt[Ct] = Vt.value, yt = 0) : (V(yt, yt.u + Vt.g - 256), e(256 <= Vt.value), yt = Vt.value), yt == 0 && (At = !0);
          } else yt = Qe(bt.G[0], bt.H[0], R);
          if (R.h) break;
          if (At || 256 > yt) {
            if (!At) if (bt.nd) n[ct] = (bt.qb | yt << 8) >>> 0;
            else {
              if (X(R), At = Qe(bt.G[1], bt.H[1], R), X(R), Mt = Qe(bt.G[2], bt.H[2], R), Ct = Qe(bt.G[3], bt.H[3], R), R.h) break;
              n[ct] = (Ct << 24 | At << 16 | yt << 8 | Mt) >>> 0;
            }
            if (At = !1, ++ct, ++I >= p && (I = 0, ++T, k != null && T <= _ && !(T % 16) && k(t, T), nt != null)) for (; ht < ct; ) yt = n[ht++], nt.X[(506832829 * yt & 4294967295) >>> nt.Mb] = yt;
          } else if (280 > yt) {
            if (yt = Ir(yt - 256, R), Mt = Qe(bt.G[4], bt.H[4], R), X(R), Mt = vr(p, Mt = Ir(Mt, R)), R.h) break;
            if (ct - l < Mt || b - ct < yt) break t;
            for (Ct = 0; Ct < yt; ++Ct) n[ct + Ct] = n[ct + Ct - Mt];
            for (ct += yt, I += yt; I >= p; ) I -= p, ++T, k != null && T <= _ && !(T % 16) && k(t, T);
            if (e(ct <= b), I & it && (bt = me(rt, I, T)), nt != null) for (; ht < ct; ) yt = n[ht++], nt.X[(506832829 * yt & 4294967295) >>> nt.Mb] = yt;
          } else {
            if (!(yt < wt)) break t;
            for (At = yt - 280, e(nt != null); ht < ct; ) yt = n[ht++], nt.X[(506832829 * yt & 4294967295) >>> nt.Mb] = yt;
            yt = ct, e(!(At >>> (Mt = nt).Xa)), n[yt] = Mt.X[At], At = !0;
          }
          At || e(R.h == q(R));
        }
        if (t.Pb && R.h && ct < b) e(t.m.h), t.a = 5, t.m = t.wd, t.$ = t.xd, 0 < t.s.ua && mt(t.s.vb, t.s.Wa);
        else {
          if (R.h) break t;
          k != null && k(t, T > _ ? _ : T), t.a = 0, t.$ = ct - l;
        }
        return 1;
      }
      return t.a = 3, 0;
    }
    function Er(t) {
      e(t != null), t.vc = null, t.yc = null, t.Ya = null;
      var n = t.Wa;
      n != null && (n.X = null), t.vb = null, e(t != null);
    }
    function yr() {
      var t = new Uo();
      return t == null ? null : (t.a = 0, t.xb = js, ar("Predictor", "VP8LPredictors"), ar("Predictor", "VP8LPredictors_C"), ar("PredictorAdd", "VP8LPredictorsAdd"), ar("PredictorAdd", "VP8LPredictorsAdd_C"), Ha = ae, ei = Jt, Pr = Et, wr = Ge, En = ce, An = fr, Ln = be, j.VP8LMapColor32b = Ci, j.VP8LMapColor8b = Wa, t);
    }
    function Or(t, n, l, p, b) {
      var _ = 1, k = [t], T = [n], I = p.m, R = p.s, rt = null, ct = 0;
      t: for (; ; ) {
        if (l) for (; _ && st(I, 1); ) {
          var ht = k, ot = T, wt = p, pt = 1, nt = wt.m, it = wt.gc[wt.ab], bt = st(nt, 2);
          if (wt.Oc & 1 << bt) _ = 0;
          else {
            switch (wt.Oc |= 1 << bt, it.hc = bt, it.Ea = ht[0], it.nc = ot[0], it.K = [null], ++wt.ab, e(4 >= wt.ab), bt) {
              case 0:
              case 1:
                it.b = st(nt, 3) + 2, pt = Or(Bt(it.Ea, it.b), Bt(it.nc, it.b), 0, wt, it.K), it.K = it.K[0];
                break;
              case 3:
                var At, yt = st(nt, 8) + 1, Mt = 16 < yt ? 0 : 4 < yt ? 1 : 2 < yt ? 2 : 3;
                if (ht[0] = Bt(it.Ea, Mt), it.b = Mt, At = pt = Or(yt, 1, 0, wt, it.K)) {
                  var Ct, Vt = yt, It = it, ye = 1 << (8 >> It.b), we = o(ye);
                  if (we == null) At = 0;
                  else {
                    var ve = It.K[0], le = It.w;
                    for (we[0] = It.K[0][0], Ct = 1; Ct < 1 * Vt; ++Ct) we[Ct] = Nt(ve[le + Ct], we[Ct - 1]);
                    for (; Ct < 4 * ye; ++Ct) we[Ct] = 0;
                    It.K[0] = null, It.K[0] = we, At = 1;
                  }
                }
                pt = At;
                break;
              case 2:
                break;
              default:
                e(0);
            }
            _ = pt;
          }
        }
        if (k = k[0], T = T[0], _ && st(I, 1) && !(_ = 1 <= (ct = st(I, 4)) && 11 >= ct)) {
          p.a = 3;
          break t;
        }
        var Ne;
        if (Ne = _) e: {
          var Le, ie, Je, kr = p, Xe = k, Cr = T, Ae = ct, Mr = l, Rr = kr.m, nr = kr.s, ur = [null], Lr = 1, Vr = 0, dn = Xu[Ae];
          r: for (; ; ) {
            if (Mr && st(Rr, 1)) {
              var ir = st(Rr, 3) + 2, _n = Bt(Xe, ir), oi = Bt(Cr, ir), Oi = _n * oi;
              if (!Or(_n, oi, 0, kr, ur)) break r;
              for (ur = ur[0], nr.xc = ir, Le = 0; Le < Oi; ++Le) {
                var Rn = ur[Le] >> 8 & 65535;
                ur[Le] = Rn, Rn >= Lr && (Lr = Rn + 1);
              }
            }
            if (Rr.h) break r;
            for (ie = 0; 5 > ie; ++ie) {
              var je = Es[ie];
              !ie && 0 < Ae && (je += 1 << Ae), Vr < je && (Vr = je);
            }
            var Qo = f(Lr * dn, y), Us = Lr, Ws = f(Us, z);
            if (Ws == null) var ro = null;
            else e(65536 >= Us), ro = Ws;
            var da = o(Vr);
            if (ro == null || da == null || Qo == null) {
              kr.a = 1;
              break r;
            }
            var no = Qo;
            for (Le = Je = 0; Le < Lr; ++Le) {
              var rn = ro[Le], ji = rn.G, Di = rn.H, Gs = 0, io = 1, Vs = 0;
              for (ie = 0; 5 > ie; ++ie) {
                je = Es[ie], ji[ie] = no, Di[ie] = Je, !ie && 0 < Ae && (je += 1 << Ae);
                i: {
                  var ao, ts = je, oo = kr, pa = da, ml = no, vl = Je, es = 0, Bn = oo.m, bl = st(Bn, 1);
                  if (u(pa, 0, 0, ts), bl) {
                    var yl = st(Bn, 1) + 1, wl = st(Bn, 1), Ys = st(Bn, wl == 0 ? 1 : 8);
                    pa[Ys] = 1, yl == 2 && (pa[Ys = st(Bn, 8)] = 1);
                    var so = 1;
                  } else {
                    var Js = o(19), Xs = st(Bn, 4) + 4;
                    if (19 < Xs) {
                      oo.a = 3;
                      var uo = 0;
                      break i;
                    }
                    for (ao = 0; ao < Xs; ++ao) Js[Yu[ao]] = st(Bn, 3);
                    var rs = void 0, ga = void 0, Ks = oo, Al = Js, lo = ts, $s = pa, ns = 0, qn = Ks.m, Zs = 8, Qs = f(128, y);
                    n: for (; N(Qs, 0, 7, Al, 19); ) {
                      if (st(qn, 1)) {
                        var Ll = 2 + 2 * st(qn, 3);
                        if ((rs = 2 + st(qn, Ll)) > lo) break n;
                      } else rs = lo;
                      for (ga = 0; ga < lo && rs--; ) {
                        X(qn);
                        var tu = Qs[0 + (127 & O(qn))];
                        V(qn, qn.u + tu.g);
                        var Mi = tu.value;
                        if (16 > Mi) $s[ga++] = Mi, Mi != 0 && (Zs = Mi);
                        else {
                          var Nl = Mi == 16, eu = Mi - 16, Sl = Gu[eu], ru = st(qn, Wu[eu]) + Sl;
                          if (ga + ru > lo) break n;
                          for (var xl = Nl ? Zs : 0; 0 < ru--; ) $s[ga++] = xl;
                        }
                      }
                      ns = 1;
                      break n;
                    }
                    ns || (Ks.a = 3), so = ns;
                  }
                  (so = so && !Bn.h) && (es = N(ml, vl, 8, pa, ts)), so && es != 0 ? uo = es : (oo.a = 3, uo = 0);
                }
                if (uo == 0) break r;
                if (io && Vu[ie] == 1 && (io = no[Je].g == 0), Gs += no[Je].g, Je += uo, 3 >= ie) {
                  var ma, is = da[0];
                  for (ma = 1; ma < je; ++ma) da[ma] > is && (is = da[ma]);
                  Vs += is;
                }
              }
              if (rn.nd = io, rn.Qb = 0, io && (rn.qb = (ji[3][Di[3] + 0].value << 24 | ji[1][Di[1] + 0].value << 16 | ji[2][Di[2] + 0].value) >>> 0, Gs == 0 && 256 > ji[0][Di[0] + 0].value && (rn.Qb = 1, rn.qb += ji[0][Di[0] + 0].value << 8)), rn.jc = !rn.Qb && 6 > Vs, rn.jc) {
                var fo, Pn = rn;
                for (fo = 0; fo < sr; ++fo) {
                  var zn = fo, Hn = Pn.pd[zn], co = Pn.G[0][Pn.H[0] + zn];
                  256 <= co.value ? (Hn.g = co.g + 256, Hn.value = co.value) : (Hn.g = 0, Hn.value = 0, zn >>= Me(co, 8, Hn), zn >>= Me(Pn.G[1][Pn.H[1] + zn], 16, Hn), zn >>= Me(Pn.G[2][Pn.H[2] + zn], 0, Hn), Me(Pn.G[3][Pn.H[3] + zn], 24, Hn));
                }
              }
            }
            nr.vc = ur, nr.Wb = Lr, nr.Ya = ro, nr.yc = Qo, Ne = 1;
            break e;
          }
          Ne = 0;
        }
        if (!(_ = Ne)) {
          p.a = 3;
          break t;
        }
        if (0 < ct) {
          if (R.ua = 1 << ct, !Gt(R.Wa, ct)) {
            p.a = 1, _ = 0;
            break t;
          }
        } else R.ua = 0;
        var as = p, nu = k, _l = T, os = as.s, ss = os.xc;
        if (as.c = nu, as.i = _l, os.md = Bt(nu, ss), os.wc = ss == 0 ? -1 : (1 << ss) - 1, l) {
          p.xb = nl;
          break t;
        }
        if ((rt = o(k * T)) == null) {
          p.a = 1, _ = 0;
          break t;
        }
        _ = (_ = Re(p, rt, 0, k, T, T, null)) && !I.h;
        break t;
      }
      return _ ? (b != null ? b[0] = rt : (e(rt == null), e(l)), p.$ = 0, l || Er(R)) : Er(R), _;
    }
    function ln(t, n) {
      var l = t.c * t.i, p = l + n + 16 * n;
      return e(t.c <= n), t.V = o(p), t.V == null ? (t.Ta = null, t.Ua = 0, t.a = 1, 0) : (t.Ta = t.V, t.Ua = t.Ba + l + n, 1);
    }
    function kn(t, n) {
      var l = t.C, p = n - l, b = t.V, _ = t.Ba + t.c * l;
      for (e(n <= t.l.o); 0 < p; ) {
        var k = 16 < p ? 16 : p, T = t.l.ma, I = t.l.width, R = I * k, rt = T.ca, ct = T.tb + I * l, ht = t.Ta, ot = t.Ua;
        tr(t, k, b, _), ze(ht, ot, rt, ct, R), br(T, l, l + k, rt, ct, I), p -= k, b += k * t.c, l += k;
      }
      e(l == n), t.C = t.Ma = n;
    }
    function zt() {
      this.ub = this.yd = this.td = this.Rb = 0;
    }
    function et() {
      this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
    }
    function St() {
      this.Fb = this.Bb = this.Cb = 0, this.Zb = o(4), this.Lb = o(4);
    }
    function kt() {
      this.Yb = function() {
        var t = [];
        return function n(l, p, b) {
          for (var _ = b[p], k = 0; k < _ && (l.push(b.length > p + 1 ? [] : 0), !(b.length < p + 1)); k++) n(l[k], p + 1, b);
        }(t, 0, [3, 11]), t;
      }();
    }
    function he() {
      this.jb = o(3), this.Wc = h([4, 8], kt), this.Xc = h([4, 17], kt);
    }
    function er() {
      this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new o(4), this.od = new o(4);
    }
    function Te() {
      this.ld = this.La = this.dd = this.tc = 0;
    }
    function Ee() {
      this.Na = this.la = 0;
    }
    function $r() {
      this.Sc = [0, 0], this.Eb = [0, 0], this.Qc = [0, 0], this.ia = this.lc = 0;
    }
    function ke() {
      this.ad = o(384), this.Za = 0, this.Ob = o(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0;
    }
    function Xn() {
      this.uc = this.M = this.Nb = 0, this.wa = Array(new Te()), this.Y = 0, this.ya = Array(new ke()), this.aa = 0, this.l = new gi();
    }
    function Kn() {
      this.y = o(16), this.f = o(8), this.ea = o(8);
    }
    function Sa() {
      this.cb = this.a = 0, this.sc = "", this.m = new gt(), this.Od = new zt(), this.Kc = new et(), this.ed = new er(), this.Qa = new St(), this.Ic = this.$c = this.Aa = 0, this.D = new Xn(), this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = f(8, gt), this.ia = 0, this.pb = f(4, $r), this.Pa = new he(), this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [0, 0, 0, 0], this.Gd = Array(new Kn()), this.Hd = 0, this.rb = Array(new Ee()), this.sb = 0, this.wa = Array(new Te()), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new ke()), this.L = this.aa = 0, this.gd = h([4, 2], Te), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0;
    }
    function gi() {
      this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0;
    }
    function xo() {
      var t = new Sa();
      return t != null && (t.a = 0, t.sc = "OK", t.cb = 0, t.Xb = 0, ca || (ca = Pa)), t;
    }
    function Be(t, n, l) {
      return t.a == 0 && (t.a = n, t.sc = l, t.cb = 0), 0;
    }
    function xa(t, n, l) {
      return 3 <= l && t[n + 0] == 157 && t[n + 1] == 1 && t[n + 2] == 42;
    }
    function _a(t, n) {
      if (t == null) return 0;
      if (t.a = 0, t.sc = "OK", n == null) return Be(t, 2, "null VP8Io passed to VP8GetHeaders()");
      var l = n.data, p = n.w, b = n.ha;
      if (4 > b) return Be(t, 7, "Truncated header.");
      var _ = l[p + 0] | l[p + 1] << 8 | l[p + 2] << 16, k = t.Od;
      if (k.Rb = !(1 & _), k.td = _ >> 1 & 7, k.yd = _ >> 4 & 1, k.ub = _ >> 5, 3 < k.td) return Be(t, 3, "Incorrect keyframe parameters.");
      if (!k.yd) return Be(t, 4, "Frame not displayable.");
      p += 3, b -= 3;
      var T = t.Kc;
      if (k.Rb) {
        if (7 > b) return Be(t, 7, "cannot parse picture header");
        if (!xa(l, p, b)) return Be(t, 3, "Bad code word");
        T.c = 16383 & (l[p + 4] << 8 | l[p + 3]), T.Td = l[p + 4] >> 6, T.i = 16383 & (l[p + 6] << 8 | l[p + 5]), T.Ud = l[p + 6] >> 6, p += 7, b -= 7, t.za = T.c + 15 >> 4, t.Ub = T.i + 15 >> 4, n.width = T.c, n.height = T.i, n.Da = 0, n.j = 0, n.v = 0, n.va = n.width, n.o = n.height, n.da = 0, n.ib = n.width, n.hb = n.height, n.U = n.width, n.T = n.height, u((_ = t.Pa).jb, 0, 255, _.jb.length), e((_ = t.Qa) != null), _.Cb = 0, _.Bb = 0, _.Fb = 1, u(_.Zb, 0, 0, _.Zb.length), u(_.Lb, 0, 0, _.Lb);
      }
      if (k.ub > b) return Be(t, 7, "bad partition length");
      lt(_ = t.m, l, p, k.ub), p += k.ub, b -= k.ub, k.Rb && (T.Ld = ft(_), T.Kd = ft(_)), T = t.Qa;
      var I, R = t.Pa;
      if (e(_ != null), e(T != null), T.Cb = ft(_), T.Cb) {
        if (T.Bb = ft(_), ft(_)) {
          for (T.Fb = ft(_), I = 0; 4 > I; ++I) T.Zb[I] = ft(_) ? W(_, 7) : 0;
          for (I = 0; 4 > I; ++I) T.Lb[I] = ft(_) ? W(_, 6) : 0;
        }
        if (T.Bb) for (I = 0; 3 > I; ++I) R.jb[I] = ft(_) ? U(_, 8) : 255;
      } else T.Bb = 0;
      if (_.Ka) return Be(t, 3, "cannot parse segment header");
      if ((T = t.ed).zd = ft(_), T.Tb = U(_, 6), T.wb = U(_, 3), T.Pc = ft(_), T.Pc && ft(_)) {
        for (R = 0; 4 > R; ++R) ft(_) && (T.vd[R] = W(_, 6));
        for (R = 0; 4 > R; ++R) ft(_) && (T.od[R] = W(_, 6));
      }
      if (t.L = T.Tb == 0 ? 0 : T.zd ? 1 : 2, _.Ka) return Be(t, 3, "cannot parse filter header");
      var rt = b;
      if (b = I = p, p = I + rt, T = rt, t.Xb = (1 << U(t.m, 2)) - 1, rt < 3 * (R = t.Xb)) l = 7;
      else {
        for (I += 3 * R, T -= 3 * R, rt = 0; rt < R; ++rt) {
          var ct = l[b + 0] | l[b + 1] << 8 | l[b + 2] << 16;
          ct > T && (ct = T), lt(t.Jc[+rt], l, I, ct), I += ct, T -= ct, b += 3;
        }
        lt(t.Jc[+R], l, I, T), l = I < p ? 0 : 5;
      }
      if (l != 0) return Be(t, l, "cannot parse partitions");
      for (l = U(I = t.m, 7), b = ft(I) ? W(I, 4) : 0, p = ft(I) ? W(I, 4) : 0, T = ft(I) ? W(I, 4) : 0, R = ft(I) ? W(I, 4) : 0, I = ft(I) ? W(I, 4) : 0, rt = t.Qa, ct = 0; 4 > ct; ++ct) {
        if (rt.Cb) {
          var ht = rt.Zb[ct];
          rt.Fb || (ht += l);
        } else {
          if (0 < ct) {
            t.pb[ct] = t.pb[0];
            continue;
          }
          ht = l;
        }
        var ot = t.pb[ct];
        ot.Sc[0] = Ko[jr(ht + b, 127)], ot.Sc[1] = $o[jr(ht + 0, 127)], ot.Eb[0] = 2 * Ko[jr(ht + p, 127)], ot.Eb[1] = 101581 * $o[jr(ht + T, 127)] >> 16, 8 > ot.Eb[1] && (ot.Eb[1] = 8), ot.Qc[0] = Ko[jr(ht + R, 117)], ot.Qc[1] = $o[jr(ht + I, 127)], ot.lc = ht + I;
      }
      if (!k.Rb) return Be(t, 4, "Not a key frame.");
      for (ft(_), k = t.Pa, l = 0; 4 > l; ++l) {
        for (b = 0; 8 > b; ++b) for (p = 0; 3 > p; ++p) for (T = 0; 11 > T; ++T) R = dt(_, el[l][b][p][T]) ? U(_, 8) : Qu[l][b][p][T], k.Wc[l][b].Yb[p][T] = R;
        for (b = 0; 17 > b; ++b) k.Xc[l][b] = k.Wc[l][rl[b]];
      }
      return t.kc = ft(_), t.kc && (t.Bd = U(_, 8)), t.cb = 1;
    }
    function Pa(t, n, l, p, b, _, k) {
      var T = n[b].Yb[l];
      for (l = 0; 16 > b; ++b) {
        if (!dt(t, T[l + 0])) return b;
        for (; !dt(t, T[l + 1]); ) if (T = n[++b].Yb[0], l = 0, b == 16) return 16;
        var I = n[b + 1].Yb;
        if (dt(t, T[l + 2])) {
          var R = t, rt = 0;
          if (dt(R, (ht = T)[(ct = l) + 3])) if (dt(R, ht[ct + 6])) {
            for (T = 0, ct = 2 * (rt = dt(R, ht[ct + 8])) + (ht = dt(R, ht[ct + 9 + rt])), rt = 0, ht = $u[ct]; ht[T]; ++T) rt += rt + dt(R, ht[T]);
            rt += 3 + (8 << ct);
          } else dt(R, ht[ct + 7]) ? (rt = 7 + 2 * dt(R, 165), rt += dt(R, 145)) : rt = 5 + dt(R, 159);
          else rt = dt(R, ht[ct + 4]) ? 3 + dt(R, ht[ct + 5]) : 2;
          T = I[2];
        } else rt = 1, T = I[1];
        I = k + Zu[b], 0 > (R = t).b && at(R);
        var ct, ht = R.b, ot = (ct = R.Ca >> 1) - (R.I >> ht) >> 31;
        --R.b, R.Ca += ot, R.Ca |= 1, R.I -= (ct + 1 & ot) << ht, _[I] = ((rt ^ ot) - ot) * p[(0 < b) + 0];
      }
      return 16;
    }
    function Hi(t) {
      var n = t.rb[t.sb - 1];
      n.la = 0, n.Na = 0, u(t.zc, 0, 0, t.zc.length), t.ja = 0;
    }
    function _o(t, n) {
      if (t == null) return 0;
      if (n == null) return Be(t, 2, "NULL VP8Io parameter in VP8Decode().");
      if (!t.cb && !_a(t, n)) return 0;
      if (e(t.cb), n.ac == null || n.ac(n)) {
        n.ob && (t.L = 0);
        var l = eo[t.L];
        if (t.L == 2 ? (t.yb = 0, t.zb = 0) : (t.yb = n.v - l >> 4, t.zb = n.j - l >> 4, 0 > t.yb && (t.yb = 0), 0 > t.zb && (t.zb = 0)), t.Va = n.o + 15 + l >> 4, t.Hb = n.va + 15 + l >> 4, t.Hb > t.za && (t.Hb = t.za), t.Va > t.Ub && (t.Va = t.Ub), 0 < t.L) {
          var p = t.ed;
          for (l = 0; 4 > l; ++l) {
            var b;
            if (t.Qa.Cb) {
              var _ = t.Qa.Lb[l];
              t.Qa.Fb || (_ += p.Tb);
            } else _ = p.Tb;
            for (b = 0; 1 >= b; ++b) {
              var k = t.gd[l][b], T = _;
              if (p.Pc && (T += p.vd[0], b && (T += p.od[0])), 0 < (T = 0 > T ? 0 : 63 < T ? 63 : T)) {
                var I = T;
                0 < p.wb && (I = 4 < p.wb ? I >> 2 : I >> 1) > 9 - p.wb && (I = 9 - p.wb), 1 > I && (I = 1), k.dd = I, k.tc = 2 * T + I, k.ld = 40 <= T ? 2 : 15 <= T ? 1 : 0;
              } else k.tc = 0;
              k.La = b;
            }
          }
        }
        l = 0;
      } else Be(t, 6, "Frame setup failed"), l = t.a;
      if (l = l == 0) {
        if (l) {
          t.$c = 0, 0 < t.Aa || (t.Ic = gl);
          t: {
            l = t.Ic, p = 4 * (I = t.za);
            var R = 32 * I, rt = I + 1, ct = 0 < t.L ? I * (0 < t.Aa ? 2 : 1) : 0, ht = (t.Aa == 2 ? 2 : 1) * I;
            if ((k = p + 832 + (b = 3 * (16 * l + eo[t.L]) / 2 * R) + (_ = t.Fa != null && 0 < t.Fa.length ? t.Kc.c * t.Kc.i : 0)) != k) l = 0;
            else {
              if (k > t.Vb) {
                if (t.Vb = 0, t.Ec = o(k), t.Fc = 0, t.Ec == null) {
                  l = Be(t, 1, "no memory during frame initialization.");
                  break t;
                }
                t.Vb = k;
              }
              k = t.Ec, T = t.Fc, t.Ac = k, t.Bc = T, T += p, t.Gd = f(R, Kn), t.Hd = 0, t.rb = f(rt + 1, Ee), t.sb = 1, t.wa = ct ? f(ct, Te) : null, t.Y = 0, t.D.Nb = 0, t.D.wa = t.wa, t.D.Y = t.Y, 0 < t.Aa && (t.D.Y += I), e(!0), t.oc = k, t.pc = T, T += 832, t.ya = f(ht, ke), t.aa = 0, t.D.ya = t.ya, t.D.aa = t.aa, t.Aa == 2 && (t.D.aa += I), t.R = 16 * I, t.B = 8 * I, I = (R = eo[t.L]) * t.R, R = R / 2 * t.B, t.sa = k, t.ta = T + I, t.qa = t.sa, t.ra = t.ta + 16 * l * t.R + R, t.Ha = t.qa, t.Ia = t.ra + 8 * l * t.B + R, t.$c = 0, T += b, t.mb = _ ? k : null, t.nb = _ ? T : null, e(T + _ <= t.Fc + t.Vb), Hi(t), u(t.Ac, t.Bc, 0, p), l = 1;
            }
          }
          if (l) {
            if (n.ka = 0, n.y = t.sa, n.O = t.ta, n.f = t.qa, n.N = t.ra, n.ea = t.Ha, n.Vd = t.Ia, n.fa = t.R, n.Rc = t.B, n.F = null, n.J = 0, !Va) {
              for (l = -255; 255 >= l; ++l) $e[255 + l] = 0 > l ? -l : l;
              for (l = -1020; 1020 >= l; ++l) Sn[1020 + l] = -128 > l ? -128 : 127 < l ? 127 : l;
              for (l = -112; 112 >= l; ++l) fa[112 + l] = -16 > l ? -16 : 15 < l ? 15 : l;
              for (l = -255; 510 >= l; ++l) Ei[255 + l] = 0 > l ? 0 : 255 < l ? 255 : l;
              Va = 1;
            }
            Fi = Co, Nn = Po, sa = Ca, Ar = ko, zr = Fa, qe = ka, Ti = Ji, Ga = Qn, ua = Ho, ri = Xi, ni = zo, On = Ai, ii = Ki, Ii = Ba, ai = Ra, jn = cn, la = wn, Hr = qo, en[0] = fn, en[1] = Fo, en[2] = Oo, en[3] = jo, en[4] = Ea, en[5] = yi, en[6] = Oa, en[7] = Gi, en[8] = Mo, en[9] = Do, Dn[0] = Ta, Dn[1] = Io, Dn[2] = yn, Dn[3] = vi, Dn[4] = cr, Dn[5] = Eo, Dn[6] = Ia, xn[0] = Cn, xn[1] = To, xn[2] = Ro, xn[3] = Vi, xn[4] = Zn, xn[5] = Bo, xn[6] = Yi, l = 1;
          } else l = 0;
        }
        l && (l = function(ot, wt) {
          for (ot.M = 0; ot.M < ot.Va; ++ot.M) {
            var pt, nt = ot.Jc[ot.M & ot.Xb], it = ot.m, bt = ot;
            for (pt = 0; pt < bt.za; ++pt) {
              var At = it, yt = bt, Mt = yt.Ac, Ct = yt.Bc + 4 * pt, Vt = yt.zc, It = yt.ya[yt.aa + pt];
              if (yt.Qa.Bb ? It.$b = dt(At, yt.Pa.jb[0]) ? 2 + dt(At, yt.Pa.jb[2]) : dt(At, yt.Pa.jb[1]) : It.$b = 0, yt.kc && (It.Ad = dt(At, yt.Bd)), It.Za = !dt(At, 145) + 0, It.Za) {
                var ye = It.Ob, we = 0;
                for (yt = 0; 4 > yt; ++yt) {
                  var ve, le = Vt[0 + yt];
                  for (ve = 0; 4 > ve; ++ve) {
                    le = tl[Mt[Ct + ve]][le];
                    for (var Ne = Os[dt(At, le[0])]; 0 < Ne; ) Ne = Os[2 * Ne + dt(At, le[Ne])];
                    le = -Ne, Mt[Ct + ve] = le;
                  }
                  a(ye, we, Mt, Ct, 4), we += 4, Vt[0 + yt] = le;
                }
              } else le = dt(At, 156) ? dt(At, 128) ? 1 : 3 : dt(At, 163) ? 2 : 0, It.Ob[0] = le, u(Mt, Ct, le, 4), u(Vt, 0, le, 4);
              It.Dd = dt(At, 142) ? dt(At, 114) ? dt(At, 183) ? 1 : 3 : 2 : 0;
            }
            if (bt.m.Ka) return Be(ot, 7, "Premature end-of-partition0 encountered.");
            for (; ot.ja < ot.za; ++ot.ja) {
              if (bt = nt, At = (it = ot).rb[it.sb - 1], Mt = it.rb[it.sb + it.ja], pt = it.ya[it.aa + it.ja], Ct = it.kc ? pt.Ad : 0) At.la = Mt.la = 0, pt.Za || (At.Na = Mt.Na = 0), pt.Hc = 0, pt.Gc = 0, pt.ia = 0;
              else {
                var Le, ie;
                if (At = Mt, Mt = bt, Ct = it.Pa.Xc, Vt = it.ya[it.aa + it.ja], It = it.pb[Vt.$b], yt = Vt.ad, ye = 0, we = it.rb[it.sb - 1], le = ve = 0, u(yt, ye, 0, 384), Vt.Za) var Je = 0, kr = Ct[3];
                else {
                  Ne = o(16);
                  var Xe = At.Na + we.Na;
                  if (Xe = ca(Mt, Ct[1], Xe, It.Eb, 0, Ne, 0), At.Na = we.Na = (0 < Xe) + 0, 1 < Xe) Fi(Ne, 0, yt, ye);
                  else {
                    var Cr = Ne[0] + 3 >> 3;
                    for (Ne = 0; 256 > Ne; Ne += 16) yt[ye + Ne] = Cr;
                  }
                  Je = 1, kr = Ct[0];
                }
                var Ae = 15 & At.la, Mr = 15 & we.la;
                for (Ne = 0; 4 > Ne; ++Ne) {
                  var Rr = 1 & Mr;
                  for (Cr = ie = 0; 4 > Cr; ++Cr) Ae = Ae >> 1 | (Rr = (Xe = ca(Mt, kr, Xe = Rr + (1 & Ae), It.Sc, Je, yt, ye)) > Je) << 7, ie = ie << 2 | (3 < Xe ? 3 : 1 < Xe ? 2 : yt[ye + 0] != 0), ye += 16;
                  Ae >>= 4, Mr = Mr >> 1 | Rr << 7, ve = (ve << 8 | ie) >>> 0;
                }
                for (kr = Ae, Je = Mr >> 4, Le = 0; 4 > Le; Le += 2) {
                  for (ie = 0, Ae = At.la >> 4 + Le, Mr = we.la >> 4 + Le, Ne = 0; 2 > Ne; ++Ne) {
                    for (Rr = 1 & Mr, Cr = 0; 2 > Cr; ++Cr) Xe = Rr + (1 & Ae), Ae = Ae >> 1 | (Rr = 0 < (Xe = ca(Mt, Ct[2], Xe, It.Qc, 0, yt, ye))) << 3, ie = ie << 2 | (3 < Xe ? 3 : 1 < Xe ? 2 : yt[ye + 0] != 0), ye += 16;
                    Ae >>= 2, Mr = Mr >> 1 | Rr << 5;
                  }
                  le |= ie << 4 * Le, kr |= Ae << 4 << Le, Je |= (240 & Mr) << Le;
                }
                At.la = kr, we.la = Je, Vt.Hc = ve, Vt.Gc = le, Vt.ia = 43690 & le ? 0 : It.ia, Ct = !(ve | le);
              }
              if (0 < it.L && (it.wa[it.Y + it.ja] = it.gd[pt.$b][pt.Za], it.wa[it.Y + it.ja].La |= !Ct), bt.Ka) return Be(ot, 7, "Premature end-of-file encountered.");
            }
            if (Hi(ot), it = wt, bt = 1, pt = (nt = ot).D, At = 0 < nt.L && nt.M >= nt.zb && nt.M <= nt.Va, nt.Aa == 0) t: {
              if (pt.M = nt.M, pt.uc = At, ra(nt, pt), bt = 1, pt = (ie = nt.D).Nb, At = (le = eo[nt.L]) * nt.R, Mt = le / 2 * nt.B, Ne = 16 * pt * nt.R, Cr = 8 * pt * nt.B, Ct = nt.sa, Vt = nt.ta - At + Ne, It = nt.qa, yt = nt.ra - Mt + Cr, ye = nt.Ha, we = nt.Ia - Mt + Cr, Mr = (Ae = ie.M) == 0, ve = Ae >= nt.Va - 1, nt.Aa == 2 && ra(nt, ie), ie.uc) for (Rr = (Xe = nt).D.M, e(Xe.D.uc), ie = Xe.yb; ie < Xe.Hb; ++ie) {
                Je = ie, kr = Rr;
                var nr = (ur = (je = Xe).D).Nb;
                Le = je.R;
                var ur = ur.wa[ur.Y + Je], Lr = je.sa, Vr = je.ta + 16 * nr * Le + 16 * Je, dn = ur.dd, ir = ur.tc;
                if (ir != 0) if (e(3 <= ir), je.L == 1) 0 < Je && jn(Lr, Vr, Le, ir + 4), ur.La && Hr(Lr, Vr, Le, ir), 0 < kr && ai(Lr, Vr, Le, ir + 4), ur.La && la(Lr, Vr, Le, ir);
                else {
                  var _n = je.B, oi = je.qa, Oi = je.ra + 8 * nr * _n + 8 * Je, Rn = je.Ha, je = je.Ia + 8 * nr * _n + 8 * Je;
                  nr = ur.ld, 0 < Je && (Ga(Lr, Vr, Le, ir + 4, dn, nr), ri(oi, Oi, Rn, je, _n, ir + 4, dn, nr)), ur.La && (On(Lr, Vr, Le, ir, dn, nr), Ii(oi, Oi, Rn, je, _n, ir, dn, nr)), 0 < kr && (Ti(Lr, Vr, Le, ir + 4, dn, nr), ua(oi, Oi, Rn, je, _n, ir + 4, dn, nr)), ur.La && (ni(Lr, Vr, Le, ir, dn, nr), ii(oi, Oi, Rn, je, _n, ir, dn, nr));
                }
              }
              if (nt.ia && alert("todo:DitherRow"), it.put != null) {
                if (ie = 16 * Ae, Ae = 16 * (Ae + 1), Mr ? (it.y = nt.sa, it.O = nt.ta + Ne, it.f = nt.qa, it.N = nt.ra + Cr, it.ea = nt.Ha, it.W = nt.Ia + Cr) : (ie -= le, it.y = Ct, it.O = Vt, it.f = It, it.N = yt, it.ea = ye, it.W = we), ve || (Ae -= le), Ae > it.o && (Ae = it.o), it.F = null, it.J = null, nt.Fa != null && 0 < nt.Fa.length && ie < Ae && (it.J = ta(nt, it, ie, Ae - ie), it.F = nt.mb, it.F == null && it.F.length == 0)) {
                  bt = Be(nt, 3, "Could not decode alpha data.");
                  break t;
                }
                ie < it.j && (le = it.j - ie, ie = it.j, e(!(1 & le)), it.O += nt.R * le, it.N += nt.B * (le >> 1), it.W += nt.B * (le >> 1), it.F != null && (it.J += it.width * le)), ie < Ae && (it.O += it.v, it.N += it.v >> 1, it.W += it.v >> 1, it.F != null && (it.J += it.v), it.ka = ie - it.j, it.U = it.va - it.v, it.T = Ae - ie, bt = it.put(it));
              }
              pt + 1 != nt.Ic || ve || (a(nt.sa, nt.ta - At, Ct, Vt + 16 * nt.R, At), a(nt.qa, nt.ra - Mt, It, yt + 8 * nt.B, Mt), a(nt.Ha, nt.Ia - Mt, ye, we + 8 * nt.B, Mt));
            }
            if (!bt) return Be(ot, 6, "Output aborted.");
          }
          return 1;
        }(t, n)), n.bc != null && n.bc(n), l &= 1;
      }
      return l ? (t.cb = 0, l) : 0;
    }
    function Zr(t, n, l, p, b) {
      b = t[n + l + 32 * p] + (b >> 3), t[n + l + 32 * p] = -256 & b ? 0 > b ? 0 : 255 : b;
    }
    function mi(t, n, l, p, b, _) {
      Zr(t, n, 0, l, p + b), Zr(t, n, 1, l, p + _), Zr(t, n, 2, l, p - _), Zr(t, n, 3, l, p - b);
    }
    function xr(t) {
      return (20091 * t >> 16) + t;
    }
    function Ui(t, n, l, p) {
      var b, _ = 0, k = o(16);
      for (b = 0; 4 > b; ++b) {
        var T = t[n + 0] + t[n + 8], I = t[n + 0] - t[n + 8], R = (35468 * t[n + 4] >> 16) - xr(t[n + 12]), rt = xr(t[n + 4]) + (35468 * t[n + 12] >> 16);
        k[_ + 0] = T + rt, k[_ + 1] = I + R, k[_ + 2] = I - R, k[_ + 3] = T - rt, _ += 4, n++;
      }
      for (b = _ = 0; 4 > b; ++b) T = (t = k[_ + 0] + 4) + k[_ + 8], I = t - k[_ + 8], R = (35468 * k[_ + 4] >> 16) - xr(k[_ + 12]), Zr(l, p, 0, 0, T + (rt = xr(k[_ + 4]) + (35468 * k[_ + 12] >> 16))), Zr(l, p, 1, 0, I + R), Zr(l, p, 2, 0, I - R), Zr(l, p, 3, 0, T - rt), _++, p += 32;
    }
    function ka(t, n, l, p) {
      var b = t[n + 0] + 4, _ = 35468 * t[n + 4] >> 16, k = xr(t[n + 4]), T = 35468 * t[n + 1] >> 16;
      mi(l, p, 0, b + k, t = xr(t[n + 1]), T), mi(l, p, 1, b + _, t, T), mi(l, p, 2, b - _, t, T), mi(l, p, 3, b - k, t, T);
    }
    function Po(t, n, l, p, b) {
      Ui(t, n, l, p), b && Ui(t, n + 16, l, p + 4);
    }
    function Ca(t, n, l, p) {
      Nn(t, n + 0, l, p, 1), Nn(t, n + 32, l, p + 128, 1);
    }
    function ko(t, n, l, p) {
      var b;
      for (t = t[n + 0] + 4, b = 0; 4 > b; ++b) for (n = 0; 4 > n; ++n) Zr(l, p, n, b, t);
    }
    function Fa(t, n, l, p) {
      t[n + 0] && Ar(t, n + 0, l, p), t[n + 16] && Ar(t, n + 16, l, p + 4), t[n + 32] && Ar(t, n + 32, l, p + 128), t[n + 48] && Ar(t, n + 48, l, p + 128 + 4);
    }
    function Co(t, n, l, p) {
      var b, _ = o(16);
      for (b = 0; 4 > b; ++b) {
        var k = t[n + 0 + b] + t[n + 12 + b], T = t[n + 4 + b] + t[n + 8 + b], I = t[n + 4 + b] - t[n + 8 + b], R = t[n + 0 + b] - t[n + 12 + b];
        _[0 + b] = k + T, _[8 + b] = k - T, _[4 + b] = R + I, _[12 + b] = R - I;
      }
      for (b = 0; 4 > b; ++b) k = (t = _[0 + 4 * b] + 3) + _[3 + 4 * b], T = _[1 + 4 * b] + _[2 + 4 * b], I = _[1 + 4 * b] - _[2 + 4 * b], R = t - _[3 + 4 * b], l[p + 0] = k + T >> 3, l[p + 16] = R + I >> 3, l[p + 32] = k - T >> 3, l[p + 48] = R - I >> 3, p += 64;
    }
    function Wi(t, n, l) {
      var p, b = n - 32, _ = Dr, k = 255 - t[b - 1];
      for (p = 0; p < l; ++p) {
        var T, I = _, R = k + t[n - 1];
        for (T = 0; T < l; ++T) t[n + T] = I[R + t[b + T]];
        n += 32;
      }
    }
    function Fo(t, n) {
      Wi(t, n, 4);
    }
    function To(t, n) {
      Wi(t, n, 8);
    }
    function Io(t, n) {
      Wi(t, n, 16);
    }
    function yn(t, n) {
      var l;
      for (l = 0; 16 > l; ++l) a(t, n + 32 * l, t, n - 32, 16);
    }
    function vi(t, n) {
      var l;
      for (l = 16; 0 < l; --l) u(t, n, t[n - 1], 16), n += 32;
    }
    function bi(t, n, l) {
      var p;
      for (p = 0; 16 > p; ++p) u(n, l + 32 * p, t, 16);
    }
    function Ta(t, n) {
      var l, p = 16;
      for (l = 0; 16 > l; ++l) p += t[n - 1 + 32 * l] + t[n + l - 32];
      bi(p >> 5, t, n);
    }
    function cr(t, n) {
      var l, p = 8;
      for (l = 0; 16 > l; ++l) p += t[n - 1 + 32 * l];
      bi(p >> 4, t, n);
    }
    function Eo(t, n) {
      var l, p = 8;
      for (l = 0; 16 > l; ++l) p += t[n + l - 32];
      bi(p >> 4, t, n);
    }
    function Ia(t, n) {
      bi(128, t, n);
    }
    function Qt(t, n, l) {
      return t + 2 * n + l + 2 >> 2;
    }
    function Oo(t, n) {
      var l, p = n - 32;
      for (p = new Uint8Array([Qt(t[p - 1], t[p + 0], t[p + 1]), Qt(t[p + 0], t[p + 1], t[p + 2]), Qt(t[p + 1], t[p + 2], t[p + 3]), Qt(t[p + 2], t[p + 3], t[p + 4])]), l = 0; 4 > l; ++l) a(t, n + 32 * l, p, 0, p.length);
    }
    function jo(t, n) {
      var l = t[n - 1], p = t[n - 1 + 32], b = t[n - 1 + 64], _ = t[n - 1 + 96];
      _t(t, n + 0, 16843009 * Qt(t[n - 1 - 32], l, p)), _t(t, n + 32, 16843009 * Qt(l, p, b)), _t(t, n + 64, 16843009 * Qt(p, b, _)), _t(t, n + 96, 16843009 * Qt(b, _, _));
    }
    function fn(t, n) {
      var l, p = 4;
      for (l = 0; 4 > l; ++l) p += t[n + l - 32] + t[n - 1 + 32 * l];
      for (p >>= 3, l = 0; 4 > l; ++l) u(t, n + 32 * l, p, 4);
    }
    function Ea(t, n) {
      var l = t[n - 1 + 0], p = t[n - 1 + 32], b = t[n - 1 + 64], _ = t[n - 1 - 32], k = t[n + 0 - 32], T = t[n + 1 - 32], I = t[n + 2 - 32], R = t[n + 3 - 32];
      t[n + 0 + 96] = Qt(p, b, t[n - 1 + 96]), t[n + 1 + 96] = t[n + 0 + 64] = Qt(l, p, b), t[n + 2 + 96] = t[n + 1 + 64] = t[n + 0 + 32] = Qt(_, l, p), t[n + 3 + 96] = t[n + 2 + 64] = t[n + 1 + 32] = t[n + 0 + 0] = Qt(k, _, l), t[n + 3 + 64] = t[n + 2 + 32] = t[n + 1 + 0] = Qt(T, k, _), t[n + 3 + 32] = t[n + 2 + 0] = Qt(I, T, k), t[n + 3 + 0] = Qt(R, I, T);
    }
    function Oa(t, n) {
      var l = t[n + 1 - 32], p = t[n + 2 - 32], b = t[n + 3 - 32], _ = t[n + 4 - 32], k = t[n + 5 - 32], T = t[n + 6 - 32], I = t[n + 7 - 32];
      t[n + 0 + 0] = Qt(t[n + 0 - 32], l, p), t[n + 1 + 0] = t[n + 0 + 32] = Qt(l, p, b), t[n + 2 + 0] = t[n + 1 + 32] = t[n + 0 + 64] = Qt(p, b, _), t[n + 3 + 0] = t[n + 2 + 32] = t[n + 1 + 64] = t[n + 0 + 96] = Qt(b, _, k), t[n + 3 + 32] = t[n + 2 + 64] = t[n + 1 + 96] = Qt(_, k, T), t[n + 3 + 64] = t[n + 2 + 96] = Qt(k, T, I), t[n + 3 + 96] = Qt(T, I, I);
    }
    function yi(t, n) {
      var l = t[n - 1 + 0], p = t[n - 1 + 32], b = t[n - 1 + 64], _ = t[n - 1 - 32], k = t[n + 0 - 32], T = t[n + 1 - 32], I = t[n + 2 - 32], R = t[n + 3 - 32];
      t[n + 0 + 0] = t[n + 1 + 64] = _ + k + 1 >> 1, t[n + 1 + 0] = t[n + 2 + 64] = k + T + 1 >> 1, t[n + 2 + 0] = t[n + 3 + 64] = T + I + 1 >> 1, t[n + 3 + 0] = I + R + 1 >> 1, t[n + 0 + 96] = Qt(b, p, l), t[n + 0 + 64] = Qt(p, l, _), t[n + 0 + 32] = t[n + 1 + 96] = Qt(l, _, k), t[n + 1 + 32] = t[n + 2 + 96] = Qt(_, k, T), t[n + 2 + 32] = t[n + 3 + 96] = Qt(k, T, I), t[n + 3 + 32] = Qt(T, I, R);
    }
    function Gi(t, n) {
      var l = t[n + 0 - 32], p = t[n + 1 - 32], b = t[n + 2 - 32], _ = t[n + 3 - 32], k = t[n + 4 - 32], T = t[n + 5 - 32], I = t[n + 6 - 32], R = t[n + 7 - 32];
      t[n + 0 + 0] = l + p + 1 >> 1, t[n + 1 + 0] = t[n + 0 + 64] = p + b + 1 >> 1, t[n + 2 + 0] = t[n + 1 + 64] = b + _ + 1 >> 1, t[n + 3 + 0] = t[n + 2 + 64] = _ + k + 1 >> 1, t[n + 0 + 32] = Qt(l, p, b), t[n + 1 + 32] = t[n + 0 + 96] = Qt(p, b, _), t[n + 2 + 32] = t[n + 1 + 96] = Qt(b, _, k), t[n + 3 + 32] = t[n + 2 + 96] = Qt(_, k, T), t[n + 3 + 64] = Qt(k, T, I), t[n + 3 + 96] = Qt(T, I, R);
    }
    function Do(t, n) {
      var l = t[n - 1 + 0], p = t[n - 1 + 32], b = t[n - 1 + 64], _ = t[n - 1 + 96];
      t[n + 0 + 0] = l + p + 1 >> 1, t[n + 2 + 0] = t[n + 0 + 32] = p + b + 1 >> 1, t[n + 2 + 32] = t[n + 0 + 64] = b + _ + 1 >> 1, t[n + 1 + 0] = Qt(l, p, b), t[n + 3 + 0] = t[n + 1 + 32] = Qt(p, b, _), t[n + 3 + 32] = t[n + 1 + 64] = Qt(b, _, _), t[n + 3 + 64] = t[n + 2 + 64] = t[n + 0 + 96] = t[n + 1 + 96] = t[n + 2 + 96] = t[n + 3 + 96] = _;
    }
    function Mo(t, n) {
      var l = t[n - 1 + 0], p = t[n - 1 + 32], b = t[n - 1 + 64], _ = t[n - 1 + 96], k = t[n - 1 - 32], T = t[n + 0 - 32], I = t[n + 1 - 32], R = t[n + 2 - 32];
      t[n + 0 + 0] = t[n + 2 + 32] = l + k + 1 >> 1, t[n + 0 + 32] = t[n + 2 + 64] = p + l + 1 >> 1, t[n + 0 + 64] = t[n + 2 + 96] = b + p + 1 >> 1, t[n + 0 + 96] = _ + b + 1 >> 1, t[n + 3 + 0] = Qt(T, I, R), t[n + 2 + 0] = Qt(k, T, I), t[n + 1 + 0] = t[n + 3 + 32] = Qt(l, k, T), t[n + 1 + 32] = t[n + 3 + 64] = Qt(p, l, k), t[n + 1 + 64] = t[n + 3 + 96] = Qt(b, p, l), t[n + 1 + 96] = Qt(_, b, p);
    }
    function Ro(t, n) {
      var l;
      for (l = 0; 8 > l; ++l) a(t, n + 32 * l, t, n - 32, 8);
    }
    function Vi(t, n) {
      var l;
      for (l = 0; 8 > l; ++l) u(t, n, t[n - 1], 8), n += 32;
    }
    function $n(t, n, l) {
      var p;
      for (p = 0; 8 > p; ++p) u(n, l + 32 * p, t, 8);
    }
    function Cn(t, n) {
      var l, p = 8;
      for (l = 0; 8 > l; ++l) p += t[n + l - 32] + t[n - 1 + 32 * l];
      $n(p >> 4, t, n);
    }
    function Bo(t, n) {
      var l, p = 4;
      for (l = 0; 8 > l; ++l) p += t[n + l - 32];
      $n(p >> 3, t, n);
    }
    function Zn(t, n) {
      var l, p = 4;
      for (l = 0; 8 > l; ++l) p += t[n - 1 + 32 * l];
      $n(p >> 3, t, n);
    }
    function Yi(t, n) {
      $n(128, t, n);
    }
    function wi(t, n, l) {
      var p = t[n - l], b = t[n + 0], _ = 3 * (b - p) + Go[1020 + t[n - 2 * l] - t[n + l]], k = Ya[112 + (_ + 4 >> 3)];
      t[n - l] = Dr[255 + p + Ya[112 + (_ + 3 >> 3)]], t[n + 0] = Dr[255 + b - k];
    }
    function ja(t, n, l, p) {
      var b = t[n + 0], _ = t[n + l];
      return Wr[255 + t[n - 2 * l] - t[n - l]] > p || Wr[255 + _ - b] > p;
    }
    function Da(t, n, l, p) {
      return 4 * Wr[255 + t[n - l] - t[n + 0]] + Wr[255 + t[n - 2 * l] - t[n + l]] <= p;
    }
    function Ma(t, n, l, p, b) {
      var _ = t[n - 3 * l], k = t[n - 2 * l], T = t[n - l], I = t[n + 0], R = t[n + l], rt = t[n + 2 * l], ct = t[n + 3 * l];
      return 4 * Wr[255 + T - I] + Wr[255 + k - R] > p ? 0 : Wr[255 + t[n - 4 * l] - _] <= b && Wr[255 + _ - k] <= b && Wr[255 + k - T] <= b && Wr[255 + ct - rt] <= b && Wr[255 + rt - R] <= b && Wr[255 + R - I] <= b;
    }
    function Ra(t, n, l, p) {
      var b = 2 * p + 1;
      for (p = 0; 16 > p; ++p) Da(t, n + p, l, b) && wi(t, n + p, l);
    }
    function cn(t, n, l, p) {
      var b = 2 * p + 1;
      for (p = 0; 16 > p; ++p) Da(t, n + p * l, 1, b) && wi(t, n + p * l, 1);
    }
    function wn(t, n, l, p) {
      var b;
      for (b = 3; 0 < b; --b) Ra(t, n += 4 * l, l, p);
    }
    function qo(t, n, l, p) {
      var b;
      for (b = 3; 0 < b; --b) cn(t, n += 4, l, p);
    }
    function Fn(t, n, l, p, b, _, k, T) {
      for (_ = 2 * _ + 1; 0 < b--; ) {
        if (Ma(t, n, l, _, k)) if (ja(t, n, l, T)) wi(t, n, l);
        else {
          var I = t, R = n, rt = l, ct = I[R - 2 * rt], ht = I[R - rt], ot = I[R + 0], wt = I[R + rt], pt = I[R + 2 * rt], nt = 27 * (bt = Go[1020 + 3 * (ot - ht) + Go[1020 + ct - wt]]) + 63 >> 7, it = 18 * bt + 63 >> 7, bt = 9 * bt + 63 >> 7;
          I[R - 3 * rt] = Dr[255 + I[R - 3 * rt] + bt], I[R - 2 * rt] = Dr[255 + ct + it], I[R - rt] = Dr[255 + ht + nt], I[R + 0] = Dr[255 + ot - nt], I[R + rt] = Dr[255 + wt - it], I[R + 2 * rt] = Dr[255 + pt - bt];
        }
        n += p;
      }
    }
    function Qr(t, n, l, p, b, _, k, T) {
      for (_ = 2 * _ + 1; 0 < b--; ) {
        if (Ma(t, n, l, _, k)) if (ja(t, n, l, T)) wi(t, n, l);
        else {
          var I = t, R = n, rt = l, ct = I[R - rt], ht = I[R + 0], ot = I[R + rt], wt = Ya[112 + ((pt = 3 * (ht - ct)) + 4 >> 3)], pt = Ya[112 + (pt + 3 >> 3)], nt = wt + 1 >> 1;
          I[R - 2 * rt] = Dr[255 + I[R - 2 * rt] + nt], I[R - rt] = Dr[255 + ct + pt], I[R + 0] = Dr[255 + ht - wt], I[R + rt] = Dr[255 + ot - nt];
        }
        n += p;
      }
    }
    function Ji(t, n, l, p, b, _) {
      Fn(t, n, l, 1, 16, p, b, _);
    }
    function Qn(t, n, l, p, b, _) {
      Fn(t, n, 1, l, 16, p, b, _);
    }
    function zo(t, n, l, p, b, _) {
      var k;
      for (k = 3; 0 < k; --k) Qr(t, n += 4 * l, l, 1, 16, p, b, _);
    }
    function Ai(t, n, l, p, b, _) {
      var k;
      for (k = 3; 0 < k; --k) Qr(t, n += 4, 1, l, 16, p, b, _);
    }
    function Ho(t, n, l, p, b, _, k, T) {
      Fn(t, n, b, 1, 8, _, k, T), Fn(l, p, b, 1, 8, _, k, T);
    }
    function Xi(t, n, l, p, b, _, k, T) {
      Fn(t, n, 1, b, 8, _, k, T), Fn(l, p, 1, b, 8, _, k, T);
    }
    function Ki(t, n, l, p, b, _, k, T) {
      Qr(t, n + 4 * b, b, 1, 8, _, k, T), Qr(l, p + 4 * b, b, 1, 8, _, k, T);
    }
    function Ba(t, n, l, p, b, _, k, T) {
      Qr(t, n + 4, 1, b, 8, _, k, T), Qr(l, p + 4, 1, b, 8, _, k, T);
    }
    function Li() {
      this.ba = new Ke(), this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new Fe(), this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc";
    }
    function $i() {
      this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0;
    }
    function Zi() {
      this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0;
    }
    function qa() {
      this.ua = 0, this.Wa = new Y(), this.vb = new Y(), this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new z(), this.yc = new y();
    }
    function Uo() {
      this.xb = this.a = 0, this.l = new gi(), this.ca = new Ke(), this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new m(), this.Pb = 0, this.wd = new m(), this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new qa(), this.ab = 0, this.gc = f(4, Zi), this.Oc = 0;
    }
    function Ni() {
      this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new gi(), this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0;
    }
    function ti(t, n, l, p, b, _, k) {
      for (t = t == null ? 0 : t[n + 0], n = 0; n < k; ++n) b[_ + n] = t + l[p + n] & 255, t = b[_ + n];
    }
    function Qi(t, n, l, p, b, _, k) {
      var T;
      if (t == null) ti(null, null, l, p, b, _, k);
      else for (T = 0; T < k; ++T) b[_ + T] = t[n + T] + l[p + T] & 255;
    }
    function Tn(t, n, l, p, b, _, k) {
      if (t == null) ti(null, null, l, p, b, _, k);
      else {
        var T, I = t[n + 0], R = I, rt = I;
        for (T = 0; T < k; ++T) R = rt + (I = t[n + T]) - R, rt = l[p + T] + (-256 & R ? 0 > R ? 0 : 255 : R) & 255, R = I, b[_ + T] = rt;
      }
    }
    function ta(t, n, l, p) {
      var b = n.width, _ = n.o;
      if (e(t != null && n != null), 0 > l || 0 >= p || l + p > _) return null;
      if (!t.Cc) {
        if (t.ga == null) {
          var k;
          if (t.ga = new Ni(), (k = t.ga == null) || (k = n.width * n.o, e(t.Gb.length == 0), t.Gb = o(k), t.Uc = 0, t.Gb == null ? k = 0 : (t.mb = t.Gb, t.nb = t.Uc, t.rc = null, k = 1), k = !k), !k) {
            k = t.ga;
            var T = t.Fa, I = t.P, R = t.qc, rt = t.mb, ct = t.nb, ht = I + 1, ot = R - 1, wt = k.l;
            if (e(T != null && rt != null && n != null), Mn[0] = null, Mn[1] = ti, Mn[2] = Qi, Mn[3] = Tn, k.ca = rt, k.tb = ct, k.c = n.width, k.i = n.height, e(0 < k.c && 0 < k.i), 1 >= R) n = 0;
            else if (k.$a = T[I + 0] >> 0 & 3, k.Z = T[I + 0] >> 2 & 3, k.Lc = T[I + 0] >> 4 & 3, I = T[I + 0] >> 6 & 3, 0 > k.$a || 1 < k.$a || 4 <= k.Z || 1 < k.Lc || I) n = 0;
            else if (wt.put = Sr, wt.ac = Ve, wt.bc = Tr, wt.ma = k, wt.width = n.width, wt.height = n.height, wt.Da = n.Da, wt.v = n.v, wt.va = n.va, wt.j = n.j, wt.o = n.o, k.$a) t: {
              e(k.$a == 1), n = yr();
              e: for (; ; ) {
                if (n == null) {
                  n = 0;
                  break t;
                }
                if (e(k != null), k.mc = n, n.c = k.c, n.i = k.i, n.l = k.l, n.l.ma = k, n.l.width = k.c, n.l.height = k.i, n.a = 0, K(n.m, T, ht, ot), !Or(k.c, k.i, 1, n, null) || (n.ab == 1 && n.gc[0].hc == 3 && Br(n.s) ? (k.ic = 1, T = n.c * n.i, n.Ta = null, n.Ua = 0, n.V = o(T), n.Ba = 0, n.V == null ? (n.a = 1, n = 0) : n = 1) : (k.ic = 0, n = ln(n, k.c)), !n)) break e;
                n = 1;
                break t;
              }
              k.mc = null, n = 0;
            }
            else n = ot >= k.c * k.i;
            k = !n;
          }
          if (k) return null;
          t.ga.Lc != 1 ? t.Ga = 0 : p = _ - l;
        }
        e(t.ga != null), e(l + p <= _);
        t: {
          if (n = (T = t.ga).c, _ = T.l.o, T.$a == 0) {
            if (ht = t.rc, ot = t.Vc, wt = t.Fa, I = t.P + 1 + l * n, R = t.mb, rt = t.nb + l * n, e(I <= t.P + t.qc), T.Z != 0) for (e(Mn[T.Z] != null), k = 0; k < p; ++k) Mn[T.Z](ht, ot, wt, I, R, rt, n), ht = R, ot = rt, rt += n, I += n;
            else for (k = 0; k < p; ++k) a(R, rt, wt, I, n), ht = R, ot = rt, rt += n, I += n;
            t.rc = ht, t.Vc = ot;
          } else {
            if (e(T.mc != null), n = l + p, e((k = T.mc) != null), e(n <= k.i), k.C >= n) n = 1;
            else if (T.ic || ut(), T.ic) {
              T = k.V, ht = k.Ba, ot = k.c;
              var pt = k.i, nt = (wt = 1, I = k.$ / ot, R = k.$ % ot, rt = k.m, ct = k.s, k.$), it = ot * pt, bt = ot * n, At = ct.wc, yt = nt < bt ? me(ct, R, I) : null;
              e(nt <= it), e(n <= pt), e(Br(ct));
              e: for (; ; ) {
                for (; !rt.h && nt < bt; ) {
                  if (R & At || (yt = me(ct, R, I)), e(yt != null), X(rt), 256 > (pt = Qe(yt.G[0], yt.H[0], rt))) T[ht + nt] = pt, ++nt, ++R >= ot && (R = 0, ++I <= n && !(I % 16) && or(k, I));
                  else {
                    if (!(280 > pt)) {
                      wt = 0;
                      break e;
                    }
                    pt = Ir(pt - 256, rt);
                    var Mt, Ct = Qe(yt.G[4], yt.H[4], rt);
                    if (X(rt), !(nt >= (Ct = vr(ot, Ct = Ir(Ct, rt))) && it - nt >= pt)) {
                      wt = 0;
                      break e;
                    }
                    for (Mt = 0; Mt < pt; ++Mt) T[ht + nt + Mt] = T[ht + nt + Mt - Ct];
                    for (nt += pt, R += pt; R >= ot; ) R -= ot, ++I <= n && !(I % 16) && or(k, I);
                    nt < bt && R & At && (yt = me(ct, R, I));
                  }
                  e(rt.h == q(rt));
                }
                or(k, I > n ? n : I);
                break e;
              }
              !wt || rt.h && nt < it ? (wt = 0, k.a = rt.h ? 5 : 3) : k.$ = nt, n = wt;
            } else n = Re(k, k.V, k.Ba, k.c, k.i, n, kn);
            if (!n) {
              p = 0;
              break t;
            }
          }
          l + p >= _ && (t.Cc = 1), p = 1;
        }
        if (!p) return null;
        if (t.Cc && ((p = t.ga) != null && (p.mc = null), t.ga = null, 0 < t.Ga)) return alert("todo:WebPDequantizeLevels"), null;
      }
      return t.nb + l * b;
    }
    function s(t, n, l, p, b, _) {
      for (; 0 < b--; ) {
        var k, T = t, I = n + (l ? 1 : 0), R = t, rt = n + (l ? 0 : 3);
        for (k = 0; k < p; ++k) {
          var ct = R[rt + 4 * k];
          ct != 255 && (ct *= 32897, T[I + 4 * k + 0] = T[I + 4 * k + 0] * ct >> 23, T[I + 4 * k + 1] = T[I + 4 * k + 1] * ct >> 23, T[I + 4 * k + 2] = T[I + 4 * k + 2] * ct >> 23);
        }
        n += _;
      }
    }
    function w(t, n, l, p, b) {
      for (; 0 < p--; ) {
        var _;
        for (_ = 0; _ < l; ++_) {
          var k = t[n + 2 * _ + 0], T = 15 & (R = t[n + 2 * _ + 1]), I = 4369 * T, R = (240 & R | R >> 4) * I >> 16;
          t[n + 2 * _ + 0] = (240 & k | k >> 4) * I >> 16 & 240 | (15 & k | k << 4) * I >> 16 >> 4 & 15, t[n + 2 * _ + 1] = 240 & R | T;
        }
        n += b;
      }
    }
    function H(t, n, l, p, b, _, k, T) {
      var I, R, rt = 255;
      for (R = 0; R < b; ++R) {
        for (I = 0; I < p; ++I) {
          var ct = t[n + I];
          _[k + 4 * I] = ct, rt &= ct;
        }
        n += l, k += T;
      }
      return rt != 255;
    }
    function tt(t, n, l, p, b) {
      var _;
      for (_ = 0; _ < b; ++_) l[p + _] = t[n + _] >> 8;
    }
    function ut() {
      Ur = s, _e = w, Pe = H, ze = tt;
    }
    function vt(t, n, l) {
      j[t] = function(p, b, _, k, T, I, R, rt, ct, ht, ot, wt, pt, nt, it, bt, At) {
        var yt, Mt = At - 1 >> 1, Ct = T[I + 0] | R[rt + 0] << 16, Vt = ct[ht + 0] | ot[wt + 0] << 16;
        e(p != null);
        var It = 3 * Ct + Vt + 131074 >> 2;
        for (n(p[b + 0], 255 & It, It >> 16, pt, nt), _ != null && (It = 3 * Vt + Ct + 131074 >> 2, n(_[k + 0], 255 & It, It >> 16, it, bt)), yt = 1; yt <= Mt; ++yt) {
          var ye = T[I + yt] | R[rt + yt] << 16, we = ct[ht + yt] | ot[wt + yt] << 16, ve = Ct + ye + Vt + we + 524296, le = ve + 2 * (ye + Vt) >> 3;
          It = le + Ct >> 1, Ct = (ve = ve + 2 * (Ct + we) >> 3) + ye >> 1, n(p[b + 2 * yt - 1], 255 & It, It >> 16, pt, nt + (2 * yt - 1) * l), n(p[b + 2 * yt - 0], 255 & Ct, Ct >> 16, pt, nt + (2 * yt - 0) * l), _ != null && (It = ve + Vt >> 1, Ct = le + we >> 1, n(_[k + 2 * yt - 1], 255 & It, It >> 16, it, bt + (2 * yt - 1) * l), n(_[k + 2 * yt + 0], 255 & Ct, Ct >> 16, it, bt + (2 * yt + 0) * l)), Ct = ye, Vt = we;
        }
        1 & At || (It = 3 * Ct + Vt + 131074 >> 2, n(p[b + At - 1], 255 & It, It >> 16, pt, nt + (At - 1) * l), _ != null && (It = 3 * Vt + Ct + 131074 >> 2, n(_[k + At - 1], 255 & It, It >> 16, it, bt + (At - 1) * l)));
      };
    }
    function Lt() {
      Gr[Ja] = il, Gr[Xa] = Ds, Gr[Ts] = al, Gr[Ka] = Ms, Gr[$a] = Rs, Gr[Vo] = Bs, Gr[Is] = ol, Gr[Yo] = Ds, Gr[Jo] = Ms, Gr[Za] = Rs, Gr[Xo] = Bs;
    }
    function Dt(t) {
      return t & -16384 ? 0 > t ? 0 : 255 : t >> sl;
    }
    function Ut(t, n) {
      return Dt((19077 * t >> 8) + (26149 * n >> 8) - 14234);
    }
    function ne(t, n, l) {
      return Dt((19077 * t >> 8) - (6419 * n >> 8) - (13320 * l >> 8) + 8708);
    }
    function ee(t, n) {
      return Dt((19077 * t >> 8) + (33050 * n >> 8) - 17685);
    }
    function ge(t, n, l, p, b) {
      p[b + 0] = Ut(t, l), p[b + 1] = ne(t, n, l), p[b + 2] = ee(t, n);
    }
    function Ie(t, n, l, p, b) {
      p[b + 0] = ee(t, n), p[b + 1] = ne(t, n, l), p[b + 2] = Ut(t, l);
    }
    function Oe(t, n, l, p, b) {
      var _ = ne(t, n, l);
      n = _ << 3 & 224 | ee(t, n) >> 3, p[b + 0] = 248 & Ut(t, l) | _ >> 5, p[b + 1] = n;
    }
    function Ye(t, n, l, p, b) {
      var _ = 240 & ee(t, n) | 15;
      p[b + 0] = 240 & Ut(t, l) | ne(t, n, l) >> 4, p[b + 1] = _;
    }
    function hr(t, n, l, p, b) {
      p[b + 0] = 255, ge(t, n, l, p, b + 1);
    }
    function rr(t, n, l, p, b) {
      Ie(t, n, l, p, b), p[b + 3] = 255;
    }
    function tn(t, n, l, p, b) {
      ge(t, n, l, p, b), p[b + 3] = 255;
    }
    function jr(t, n) {
      return 0 > t ? 0 : t > n ? n : t;
    }
    function hn(t, n, l) {
      j[t] = function(p, b, _, k, T, I, R, rt, ct) {
        for (var ht = rt + (-2 & ct) * l; rt != ht; ) n(p[b + 0], _[k + 0], T[I + 0], R, rt), n(p[b + 1], _[k + 0], T[I + 0], R, rt + l), b += 2, ++k, ++I, rt += 2 * l;
        1 & ct && n(p[b + 0], _[k + 0], T[I + 0], R, rt);
      };
    }
    function za(t, n, l) {
      return l == 0 ? t == 0 ? n == 0 ? 6 : 5 : n == 0 ? 4 : 0 : l;
    }
    function ea(t, n, l, p, b) {
      switch (t >>> 30) {
        case 3:
          Nn(n, l, p, b, 0);
          break;
        case 2:
          qe(n, l, p, b);
          break;
        case 1:
          Ar(n, l, p, b);
      }
    }
    function ra(t, n) {
      var l, p, b = n.M, _ = n.Nb, k = t.oc, T = t.pc + 40, I = t.oc, R = t.pc + 584, rt = t.oc, ct = t.pc + 600;
      for (l = 0; 16 > l; ++l) k[T + 32 * l - 1] = 129;
      for (l = 0; 8 > l; ++l) I[R + 32 * l - 1] = 129, rt[ct + 32 * l - 1] = 129;
      for (0 < b ? k[T - 1 - 32] = I[R - 1 - 32] = rt[ct - 1 - 32] = 129 : (u(k, T - 32 - 1, 127, 21), u(I, R - 32 - 1, 127, 9), u(rt, ct - 32 - 1, 127, 9)), p = 0; p < t.za; ++p) {
        var ht = n.ya[n.aa + p];
        if (0 < p) {
          for (l = -1; 16 > l; ++l) a(k, T + 32 * l - 4, k, T + 32 * l + 12, 4);
          for (l = -1; 8 > l; ++l) a(I, R + 32 * l - 4, I, R + 32 * l + 4, 4), a(rt, ct + 32 * l - 4, rt, ct + 32 * l + 4, 4);
        }
        var ot = t.Gd, wt = t.Hd + p, pt = ht.ad, nt = ht.Hc;
        if (0 < b && (a(k, T - 32, ot[wt].y, 0, 16), a(I, R - 32, ot[wt].f, 0, 8), a(rt, ct - 32, ot[wt].ea, 0, 8)), ht.Za) {
          var it = k, bt = T - 32 + 16;
          for (0 < b && (p >= t.za - 1 ? u(it, bt, ot[wt].y[15], 4) : a(it, bt, ot[wt + 1].y, 0, 4)), l = 0; 4 > l; l++) it[bt + 128 + l] = it[bt + 256 + l] = it[bt + 384 + l] = it[bt + 0 + l];
          for (l = 0; 16 > l; ++l, nt <<= 2) it = k, bt = T + zs[l], en[ht.Ob[l]](it, bt), ea(nt, pt, 16 * +l, it, bt);
        } else if (it = za(p, b, ht.Ob[0]), Dn[it](k, T), nt != 0) for (l = 0; 16 > l; ++l, nt <<= 2) ea(nt, pt, 16 * +l, k, T + zs[l]);
        for (l = ht.Gc, it = za(p, b, ht.Dd), xn[it](I, R), xn[it](rt, ct), nt = pt, it = I, bt = R, 255 & (ht = l >> 0) && (170 & ht ? sa(nt, 256, it, bt) : zr(nt, 256, it, bt)), ht = rt, nt = ct, 255 & (l >>= 8) && (170 & l ? sa(pt, 320, ht, nt) : zr(pt, 320, ht, nt)), b < t.Ub - 1 && (a(ot[wt].y, 0, k, T + 480, 16), a(ot[wt].f, 0, I, R + 224, 8), a(ot[wt].ea, 0, rt, ct + 224, 8)), l = 8 * _ * t.B, ot = t.sa, wt = t.ta + 16 * p + 16 * _ * t.R, pt = t.qa, ht = t.ra + 8 * p + l, nt = t.Ha, it = t.Ia + 8 * p + l, l = 0; 16 > l; ++l) a(ot, wt + l * t.R, k, T + 32 * l, 16);
        for (l = 0; 8 > l; ++l) a(pt, ht + l * t.B, I, R + 32 * l, 8), a(nt, it + l * t.B, rt, ct + 32 * l, 8);
      }
    }
    function Si(t, n, l, p, b, _, k, T, I) {
      var R = [0], rt = [0], ct = 0, ht = I != null ? I.kd : 0, ot = I ?? new $i();
      if (t == null || 12 > l) return 7;
      ot.data = t, ot.w = n, ot.ha = l, n = [n], l = [l], ot.gb = [ot.gb];
      t: {
        var wt = n, pt = l, nt = ot.gb;
        if (e(t != null), e(pt != null), e(nt != null), nt[0] = 0, 12 <= pt[0] && !r(t, wt[0], "RIFF")) {
          if (r(t, wt[0] + 8, "WEBP")) {
            nt = 3;
            break t;
          }
          var it = jt(t, wt[0] + 4);
          if (12 > it || 4294967286 < it) {
            nt = 3;
            break t;
          }
          if (ht && it > pt[0] - 8) {
            nt = 7;
            break t;
          }
          nt[0] = it, wt[0] += 12, pt[0] -= 12;
        }
        nt = 0;
      }
      if (nt != 0) return nt;
      for (it = 0 < ot.gb[0], l = l[0]; ; ) {
        t: {
          var bt = t;
          pt = n, nt = l;
          var At = R, yt = rt, Mt = wt = [0];
          if ((It = ct = [ct])[0] = 0, 8 > nt[0]) nt = 7;
          else {
            if (!r(bt, pt[0], "VP8X")) {
              if (jt(bt, pt[0] + 4) != 10) {
                nt = 3;
                break t;
              }
              if (18 > nt[0]) {
                nt = 7;
                break t;
              }
              var Ct = jt(bt, pt[0] + 8), Vt = 1 + Ot(bt, pt[0] + 12);
              if (2147483648 <= Vt * (bt = 1 + Ot(bt, pt[0] + 15))) {
                nt = 3;
                break t;
              }
              Mt != null && (Mt[0] = Ct), At != null && (At[0] = Vt), yt != null && (yt[0] = bt), pt[0] += 18, nt[0] -= 18, It[0] = 1;
            }
            nt = 0;
          }
        }
        if (ct = ct[0], wt = wt[0], nt != 0) return nt;
        if (pt = !!(2 & wt), !it && ct) return 3;
        if (_ != null && (_[0] = !!(16 & wt)), k != null && (k[0] = pt), T != null && (T[0] = 0), k = R[0], wt = rt[0], ct && pt && I == null) {
          nt = 0;
          break;
        }
        if (4 > l) {
          nt = 7;
          break;
        }
        if (it && ct || !it && !ct && !r(t, n[0], "ALPH")) {
          l = [l], ot.na = [ot.na], ot.P = [ot.P], ot.Sa = [ot.Sa];
          t: {
            Ct = t, nt = n, it = l;
            var It = ot.gb;
            At = ot.na, yt = ot.P, Mt = ot.Sa, Vt = 22, e(Ct != null), e(it != null), bt = nt[0];
            var ye = it[0];
            for (e(At != null), e(Mt != null), At[0] = null, yt[0] = null, Mt[0] = 0; ; ) {
              if (nt[0] = bt, it[0] = ye, 8 > ye) {
                nt = 7;
                break t;
              }
              var we = jt(Ct, bt + 4);
              if (4294967286 < we) {
                nt = 3;
                break t;
              }
              var ve = 8 + we + 1 & -2;
              if (Vt += ve, 0 < It && Vt > It) {
                nt = 3;
                break t;
              }
              if (!r(Ct, bt, "VP8 ") || !r(Ct, bt, "VP8L")) {
                nt = 0;
                break t;
              }
              if (ye[0] < ve) {
                nt = 7;
                break t;
              }
              r(Ct, bt, "ALPH") || (At[0] = Ct, yt[0] = bt + 8, Mt[0] = we), bt += ve, ye -= ve;
            }
          }
          if (l = l[0], ot.na = ot.na[0], ot.P = ot.P[0], ot.Sa = ot.Sa[0], nt != 0) break;
        }
        l = [l], ot.Ja = [ot.Ja], ot.xa = [ot.xa];
        t: if (It = t, nt = n, it = l, At = ot.gb[0], yt = ot.Ja, Mt = ot.xa, Ct = nt[0], bt = !r(It, Ct, "VP8 "), Vt = !r(It, Ct, "VP8L"), e(It != null), e(it != null), e(yt != null), e(Mt != null), 8 > it[0]) nt = 7;
        else {
          if (bt || Vt) {
            if (It = jt(It, Ct + 4), 12 <= At && It > At - 12) {
              nt = 3;
              break t;
            }
            if (ht && It > it[0] - 8) {
              nt = 7;
              break t;
            }
            yt[0] = It, nt[0] += 8, it[0] -= 8, Mt[0] = Vt;
          } else Mt[0] = 5 <= it[0] && It[Ct + 0] == 47 && !(It[Ct + 4] >> 5), yt[0] = it[0];
          nt = 0;
        }
        if (l = l[0], ot.Ja = ot.Ja[0], ot.xa = ot.xa[0], n = n[0], nt != 0) break;
        if (4294967286 < ot.Ja) return 3;
        if (T == null || pt || (T[0] = ot.xa ? 2 : 1), k = [k], wt = [wt], ot.xa) {
          if (5 > l) {
            nt = 7;
            break;
          }
          T = k, ht = wt, pt = _, t == null || 5 > l ? t = 0 : 5 <= l && t[n + 0] == 47 && !(t[n + 4] >> 5) ? (it = [0], It = [0], At = [0], K(yt = new m(), t, n, l), Wt(yt, it, It, At) ? (T != null && (T[0] = it[0]), ht != null && (ht[0] = It[0]), pt != null && (pt[0] = At[0]), t = 1) : t = 0) : t = 0;
        } else {
          if (10 > l) {
            nt = 7;
            break;
          }
          T = wt, t == null || 10 > l || !xa(t, n + 3, l - 3) ? t = 0 : (ht = t[n + 0] | t[n + 1] << 8 | t[n + 2] << 16, pt = 16383 & (t[n + 7] << 8 | t[n + 6]), t = 16383 & (t[n + 9] << 8 | t[n + 8]), 1 & ht || 3 < (ht >> 1 & 7) || !(ht >> 4 & 1) || ht >> 5 >= ot.Ja || !pt || !t ? t = 0 : (k && (k[0] = pt), T && (T[0] = t), t = 1));
        }
        if (!t || (k = k[0], wt = wt[0], ct && (R[0] != k || rt[0] != wt))) return 3;
        I != null && (I[0] = ot, I.offset = n - I.w, e(4294967286 > n - I.w), e(I.offset == I.ha - l));
        break;
      }
      return nt == 0 || nt == 7 && ct && I == null ? (_ != null && (_[0] |= ot.na != null && 0 < ot.na.length), p != null && (p[0] = k), b != null && (b[0] = wt), 0) : nt;
    }
    function na(t, n, l) {
      var p = n.width, b = n.height, _ = 0, k = 0, T = p, I = b;
      if (n.Da = t != null && 0 < t.Da, n.Da && (T = t.cd, I = t.bd, _ = t.v, k = t.j, 11 > l || (_ &= -2, k &= -2), 0 > _ || 0 > k || 0 >= T || 0 >= I || _ + T > p || k + I > b)) return 0;
      if (n.v = _, n.j = k, n.va = _ + T, n.o = k + I, n.U = T, n.T = I, n.da = t != null && 0 < t.da, n.da) {
        if (!Kt(T, I, l = [t.ib], _ = [t.hb])) return 0;
        n.ib = l[0], n.hb = _[0];
      }
      return n.ob = t != null && t.ob, n.Kb = t == null || !t.Sd, n.da && (n.ob = n.ib < 3 * p / 4 && n.hb < 3 * b / 4, n.Kb = 0), 1;
    }
    function ia(t) {
      if (t == null) return 2;
      if (11 > t.S) {
        var n = t.f.RGBA;
        n.fb += (t.height - 1) * n.A, n.A = -n.A;
      } else n = t.f.kb, t = t.height, n.O += (t - 1) * n.fa, n.fa = -n.fa, n.N += (t - 1 >> 1) * n.Ab, n.Ab = -n.Ab, n.W += (t - 1 >> 1) * n.Db, n.Db = -n.Db, n.F != null && (n.J += (t - 1) * n.lb, n.lb = -n.lb);
      return 0;
    }
    function xi(t, n, l, p) {
      if (p == null || 0 >= t || 0 >= n) return 2;
      if (l != null) {
        if (l.Da) {
          var b = l.cd, _ = l.bd, k = -2 & l.v, T = -2 & l.j;
          if (0 > k || 0 > T || 0 >= b || 0 >= _ || k + b > t || T + _ > n) return 2;
          t = b, n = _;
        }
        if (l.da) {
          if (!Kt(t, n, b = [l.ib], _ = [l.hb])) return 2;
          t = b[0], n = _[0];
        }
      }
      p.width = t, p.height = n;
      t: {
        var I = p.width, R = p.height;
        if (t = p.S, 0 >= I || 0 >= R || !(t >= Ja && 13 > t)) t = 2;
        else {
          if (0 >= p.Rd && p.sd == null) {
            k = _ = b = n = 0;
            var rt = (T = I * Hs[t]) * R;
            if (11 > t || (_ = (R + 1) / 2 * (n = (I + 1) / 2), t == 12 && (k = (b = I) * R)), (R = o(rt + 2 * _ + k)) == null) {
              t = 1;
              break t;
            }
            p.sd = R, 11 > t ? ((I = p.f.RGBA).eb = R, I.fb = 0, I.A = T, I.size = rt) : ((I = p.f.kb).y = R, I.O = 0, I.fa = T, I.Fd = rt, I.f = R, I.N = 0 + rt, I.Ab = n, I.Cd = _, I.ea = R, I.W = 0 + rt + _, I.Db = n, I.Ed = _, t == 12 && (I.F = R, I.J = 0 + rt + 2 * _), I.Tc = k, I.lb = b);
          }
          if (n = 1, b = p.S, _ = p.width, k = p.height, b >= Ja && 13 > b) if (11 > b) t = p.f.RGBA, n &= (T = Math.abs(t.A)) * (k - 1) + _ <= t.size, n &= T >= _ * Hs[b], n &= t.eb != null;
          else {
            t = p.f.kb, T = (_ + 1) / 2, rt = (k + 1) / 2, I = Math.abs(t.fa), R = Math.abs(t.Ab);
            var ct = Math.abs(t.Db), ht = Math.abs(t.lb), ot = ht * (k - 1) + _;
            n &= I * (k - 1) + _ <= t.Fd, n &= R * (rt - 1) + T <= t.Cd, n = (n &= ct * (rt - 1) + T <= t.Ed) & I >= _ & R >= T & ct >= T, n &= t.y != null, n &= t.f != null, n &= t.ea != null, b == 12 && (n &= ht >= _, n &= ot <= t.Tc, n &= t.F != null);
          }
          else n = 0;
          t = n ? 0 : 2;
        }
      }
      return t != 0 || l != null && l.fd && (t = ia(p)), t;
    }
    var sr = 64, _i = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215], Pi = 24, ki = 32, aa = 8, _r = [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
    Pt("Predictor0", "PredictorAdd0"), j.Predictor0 = function() {
      return 4278190080;
    }, j.Predictor1 = function(t) {
      return t;
    }, j.Predictor2 = function(t, n, l) {
      return n[l + 0];
    }, j.Predictor3 = function(t, n, l) {
      return n[l + 1];
    }, j.Predictor4 = function(t, n, l) {
      return n[l - 1];
    }, j.Predictor5 = function(t, n, l) {
      return Ft(Ft(t, n[l + 1]), n[l + 0]);
    }, j.Predictor6 = function(t, n, l) {
      return Ft(t, n[l - 1]);
    }, j.Predictor7 = function(t, n, l) {
      return Ft(t, n[l + 0]);
    }, j.Predictor8 = function(t, n, l) {
      return Ft(n[l - 1], n[l + 0]);
    }, j.Predictor9 = function(t, n, l) {
      return Ft(n[l + 0], n[l + 1]);
    }, j.Predictor10 = function(t, n, l) {
      return Ft(Ft(t, n[l - 1]), Ft(n[l + 0], n[l + 1]));
    }, j.Predictor11 = function(t, n, l) {
      var p = n[l + 0];
      return 0 >= Zt(p >> 24 & 255, t >> 24 & 255, (n = n[l - 1]) >> 24 & 255) + Zt(p >> 16 & 255, t >> 16 & 255, n >> 16 & 255) + Zt(p >> 8 & 255, t >> 8 & 255, n >> 8 & 255) + Zt(255 & p, 255 & t, 255 & n) ? p : t;
    }, j.Predictor12 = function(t, n, l) {
      var p = n[l + 0];
      return (Ht((t >> 24 & 255) + (p >> 24 & 255) - ((n = n[l - 1]) >> 24 & 255)) << 24 | Ht((t >> 16 & 255) + (p >> 16 & 255) - (n >> 16 & 255)) << 16 | Ht((t >> 8 & 255) + (p >> 8 & 255) - (n >> 8 & 255)) << 8 | Ht((255 & t) + (255 & p) - (255 & n))) >>> 0;
    }, j.Predictor13 = function(t, n, l) {
      var p = n[l - 1];
      return ($t((t = Ft(t, n[l + 0])) >> 24 & 255, p >> 24 & 255) << 24 | $t(t >> 16 & 255, p >> 16 & 255) << 16 | $t(t >> 8 & 255, p >> 8 & 255) << 8 | $t(t >> 0 & 255, p >> 0 & 255)) >>> 0;
    };
    var Wo = j.PredictorAdd0;
    j.PredictorAdd1 = te, Pt("Predictor2", "PredictorAdd2"), Pt("Predictor3", "PredictorAdd3"), Pt("Predictor4", "PredictorAdd4"), Pt("Predictor5", "PredictorAdd5"), Pt("Predictor6", "PredictorAdd6"), Pt("Predictor7", "PredictorAdd7"), Pt("Predictor8", "PredictorAdd8"), Pt("Predictor9", "PredictorAdd9"), Pt("Predictor10", "PredictorAdd10"), Pt("Predictor11", "PredictorAdd11"), Pt("Predictor12", "PredictorAdd12"), Pt("Predictor13", "PredictorAdd13");
    var oa = j.PredictorAdd2;
    oe("ColorIndexInverseTransform", "MapARGB", "32b", function(t) {
      return t >> 8 & 255;
    }, function(t) {
      return t;
    }), oe("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", function(t) {
      return t;
    }, function(t) {
      return t >> 8 & 255;
    });
    var Ha, qr = j.ColorIndexInverseTransform, Ci = j.MapARGB, Ua = j.VP8LColorIndexInverseTransformAlpha, Wa = j.MapAlpha, In = j.VP8LPredictorsAdd = [];
    In.length = 16, (j.VP8LPredictors = []).length = 16, (j.VP8LPredictorsAdd_C = []).length = 16, (j.VP8LPredictors_C = []).length = 16;
    var ei, Pr, wr, En, An, Ln, Fi, Nn, qe, sa, Ar, zr, Ti, Ga, ua, ri, ni, On, ii, Ii, ai, jn, la, Hr, Ur, _e, Pe, ze, $e = o(511), Sn = o(2041), fa = o(225), Ei = o(767), Va = 0, Go = Sn, Ya = fa, Dr = Ei, Wr = $e, Ja = 0, Xa = 1, Ts = 2, Ka = 3, $a = 4, Vo = 5, Is = 6, Yo = 7, Jo = 8, Za = 9, Xo = 10, Wu = [2, 3, 7], Gu = [3, 3, 11], Es = [280, 256, 256, 256, 40], Vu = [0, 1, 1, 1, 0], Yu = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], Ju = [24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112], Xu = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004], Ku = 8, Ko = [4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157], $o = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284], ca = null, $u = [[173, 148, 140, 0], [176, 155, 140, 135, 0], [180, 157, 141, 134, 130, 0], [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]], Zu = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15], Os = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9], Qu = [[[[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]], [[253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128], [189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128], [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]], [[1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128], [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128], [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]], [[1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128], [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128], [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]], [[1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128], [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128], [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]], [[1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128], [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128], [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]], [[1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128], [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128], [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62], [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1], [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]], [[1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128], [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128], [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]], [[1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128], [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128], [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]], [[1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128], [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128], [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]], [[1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128], [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128], [22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]], [[1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128], [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128], [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]], [[1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128], [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128], [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]], [[1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128], [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128], [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]]], [[[253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128], [175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128], [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]], [[1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128], [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128], [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]], [[1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128], [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128], [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]], [[1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128], [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128], [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]], [[1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128], [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128], [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128], [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128], [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128], [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128], [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255], [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128], [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]], [[1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128], [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128], [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]], [[1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128], [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128], [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]], [[1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128], [149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128], [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]], [[1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128], [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128], [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]], [[1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128], [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128], [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]], [[1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128], [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128], [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]]]], tl = [[[231, 120, 48, 89, 115, 113, 120, 152, 112], [152, 179, 64, 126, 170, 118, 46, 70, 95], [175, 69, 143, 80, 85, 82, 72, 155, 103], [56, 58, 10, 171, 218, 189, 17, 13, 152], [114, 26, 17, 163, 44, 195, 21, 10, 173], [121, 24, 80, 195, 26, 62, 44, 64, 85], [144, 71, 10, 38, 171, 213, 144, 34, 26], [170, 46, 55, 19, 136, 160, 33, 206, 71], [63, 20, 8, 114, 114, 208, 12, 9, 226], [81, 40, 11, 96, 182, 84, 29, 16, 36]], [[134, 183, 89, 137, 98, 101, 106, 165, 148], [72, 187, 100, 130, 157, 111, 32, 75, 80], [66, 102, 167, 99, 74, 62, 40, 234, 128], [41, 53, 9, 178, 241, 141, 26, 8, 107], [74, 43, 26, 146, 73, 166, 49, 23, 157], [65, 38, 105, 160, 51, 52, 31, 115, 128], [104, 79, 12, 27, 217, 255, 87, 17, 7], [87, 68, 71, 44, 114, 51, 15, 186, 23], [47, 41, 14, 110, 182, 183, 21, 17, 194], [66, 45, 25, 102, 197, 189, 23, 18, 22]], [[88, 88, 147, 150, 42, 46, 45, 196, 205], [43, 97, 183, 117, 85, 38, 35, 179, 61], [39, 53, 200, 87, 26, 21, 43, 232, 171], [56, 34, 51, 104, 114, 102, 29, 93, 77], [39, 28, 85, 171, 58, 165, 90, 98, 64], [34, 22, 116, 206, 23, 34, 43, 166, 73], [107, 54, 32, 26, 51, 1, 81, 43, 31], [68, 25, 106, 22, 64, 171, 36, 225, 114], [34, 19, 21, 102, 132, 188, 16, 76, 124], [62, 18, 78, 95, 85, 57, 50, 48, 51]], [[193, 101, 35, 159, 215, 111, 89, 46, 111], [60, 148, 31, 172, 219, 228, 21, 18, 111], [112, 113, 77, 85, 179, 255, 38, 120, 114], [40, 42, 1, 196, 245, 209, 10, 25, 109], [88, 43, 29, 140, 166, 213, 37, 43, 154], [61, 63, 30, 155, 67, 45, 68, 1, 209], [100, 80, 8, 43, 154, 1, 51, 26, 71], [142, 78, 78, 16, 255, 128, 34, 197, 171], [41, 40, 5, 102, 211, 183, 4, 1, 221], [51, 50, 17, 168, 209, 192, 23, 25, 82]], [[138, 31, 36, 171, 27, 166, 38, 44, 229], [67, 87, 58, 169, 82, 115, 26, 59, 179], [63, 59, 90, 180, 59, 166, 93, 73, 154], [40, 40, 21, 116, 143, 209, 34, 39, 175], [47, 15, 16, 183, 34, 223, 49, 45, 183], [46, 17, 33, 183, 6, 98, 15, 32, 183], [57, 46, 22, 24, 128, 1, 54, 17, 37], [65, 32, 73, 115, 28, 128, 23, 128, 205], [40, 3, 9, 115, 51, 192, 18, 6, 223], [87, 37, 9, 115, 59, 77, 64, 21, 47]], [[104, 55, 44, 218, 9, 54, 53, 130, 226], [64, 90, 70, 205, 40, 41, 23, 26, 57], [54, 57, 112, 184, 5, 41, 38, 166, 213], [30, 34, 26, 133, 152, 116, 10, 32, 134], [39, 19, 53, 221, 26, 114, 32, 73, 255], [31, 9, 65, 234, 2, 15, 1, 118, 73], [75, 32, 12, 51, 192, 255, 160, 43, 51], [88, 31, 35, 67, 102, 85, 55, 186, 85], [56, 21, 23, 111, 59, 205, 45, 37, 192], [55, 38, 70, 124, 73, 102, 1, 34, 98]], [[125, 98, 42, 88, 104, 85, 117, 175, 82], [95, 84, 53, 89, 128, 100, 113, 101, 45], [75, 79, 123, 47, 51, 128, 81, 171, 1], [57, 17, 5, 71, 102, 57, 53, 41, 49], [38, 33, 13, 121, 57, 73, 26, 1, 85], [41, 10, 67, 138, 77, 110, 90, 47, 114], [115, 21, 2, 10, 102, 255, 166, 23, 6], [101, 29, 16, 10, 85, 128, 101, 196, 26], [57, 18, 10, 102, 102, 213, 34, 20, 43], [117, 20, 15, 36, 163, 128, 68, 1, 26]], [[102, 61, 71, 37, 34, 53, 31, 243, 192], [69, 60, 71, 38, 73, 119, 28, 222, 37], [68, 45, 128, 34, 1, 47, 11, 245, 171], [62, 17, 19, 70, 146, 85, 55, 62, 70], [37, 43, 37, 154, 100, 163, 85, 160, 1], [63, 9, 92, 136, 28, 64, 32, 201, 85], [75, 15, 9, 9, 64, 255, 184, 119, 16], [86, 6, 28, 5, 64, 255, 25, 248, 1], [56, 8, 17, 132, 137, 255, 55, 116, 128], [58, 15, 20, 82, 135, 57, 26, 121, 40]], [[164, 50, 31, 137, 154, 133, 25, 35, 218], [51, 103, 44, 131, 131, 123, 31, 6, 158], [86, 40, 64, 135, 148, 224, 45, 183, 128], [22, 26, 17, 131, 240, 154, 14, 1, 209], [45, 16, 21, 91, 64, 222, 7, 1, 197], [56, 21, 39, 155, 60, 138, 23, 102, 213], [83, 12, 13, 54, 192, 255, 68, 47, 28], [85, 26, 85, 85, 128, 128, 32, 146, 171], [18, 11, 7, 63, 144, 171, 4, 4, 246], [35, 27, 10, 146, 174, 171, 12, 26, 128]], [[190, 80, 35, 99, 180, 80, 126, 54, 45], [85, 126, 47, 87, 176, 51, 41, 20, 32], [101, 75, 128, 139, 118, 146, 116, 128, 85], [56, 41, 15, 176, 236, 85, 37, 9, 62], [71, 30, 17, 119, 118, 255, 17, 18, 138], [101, 38, 60, 138, 55, 70, 43, 26, 142], [146, 36, 19, 30, 171, 255, 97, 27, 20], [138, 45, 61, 62, 219, 1, 81, 188, 64], [32, 41, 20, 117, 151, 142, 20, 21, 163], [112, 19, 12, 61, 195, 128, 48, 4, 24]]], el = [[[[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255], [249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255], [234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255], [239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255], [250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255], [234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255], [247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255], [234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255], [251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255], [248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255], [248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255], [249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]]], rl = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0], Dn = [], en = [], xn = [], nl = 1, js = 2, Mn = [], Gr = [];
    vt("UpsampleRgbLinePair", ge, 3), vt("UpsampleBgrLinePair", Ie, 3), vt("UpsampleRgbaLinePair", tn, 4), vt("UpsampleBgraLinePair", rr, 4), vt("UpsampleArgbLinePair", hr, 4), vt("UpsampleRgba4444LinePair", Ye, 2), vt("UpsampleRgb565LinePair", Oe, 2);
    var il = j.UpsampleRgbLinePair, al = j.UpsampleBgrLinePair, Ds = j.UpsampleRgbaLinePair, Ms = j.UpsampleBgraLinePair, Rs = j.UpsampleArgbLinePair, Bs = j.UpsampleRgba4444LinePair, ol = j.UpsampleRgb565LinePair, Qa = 16, to = 1 << Qa - 1, ha = -227, Zo = 482, sl = 6, qs = 0, ul = o(256), ll = o(256), fl = o(256), cl = o(256), hl = o(Zo - ha), dl = o(Zo - ha);
    hn("YuvToRgbRow", ge, 3), hn("YuvToBgrRow", Ie, 3), hn("YuvToRgbaRow", tn, 4), hn("YuvToBgraRow", rr, 4), hn("YuvToArgbRow", hr, 4), hn("YuvToRgba4444Row", Ye, 2), hn("YuvToRgb565Row", Oe, 2);
    var zs = [0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396], eo = [0, 2, 8], pl = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1], gl = 1;
    this.WebPDecodeRGBA = function(t, n, l, p, b) {
      var _ = Xa, k = new Li(), T = new Ke();
      k.ba = T, T.S = _, T.width = [T.width], T.height = [T.height];
      var I = T.width, R = T.height, rt = new Kr();
      if (rt == null || t == null) var ct = 2;
      else e(rt != null), ct = Si(t, n, l, rt.width, rt.height, rt.Pd, rt.Qd, rt.format, null);
      if (ct != 0 ? I = 0 : (I != null && (I[0] = rt.width[0]), R != null && (R[0] = rt.height[0]), I = 1), I) {
        T.width = T.width[0], T.height = T.height[0], p != null && (p[0] = T.width), b != null && (b[0] = T.height);
        t: {
          if (p = new gi(), (b = new $i()).data = t, b.w = n, b.ha = l, b.kd = 1, n = [0], e(b != null), ((t = Si(b.data, b.w, b.ha, null, null, null, n, null, b)) == 0 || t == 7) && n[0] && (t = 4), (n = t) == 0) {
            if (e(k != null), p.data = b.data, p.w = b.w + b.offset, p.ha = b.ha - b.offset, p.put = Sr, p.ac = Ve, p.bc = Tr, p.ma = k, b.xa) {
              if ((t = yr()) == null) {
                k = 1;
                break t;
              }
              if (function(ht, ot) {
                var wt = [0], pt = [0], nt = [0];
                e: for (; ; ) {
                  if (ht == null) return 0;
                  if (ot == null) return ht.a = 2, 0;
                  if (ht.l = ot, ht.a = 0, K(ht.m, ot.data, ot.w, ot.ha), !Wt(ht.m, wt, pt, nt)) {
                    ht.a = 3;
                    break e;
                  }
                  if (ht.xb = js, ot.width = wt[0], ot.height = pt[0], !Or(wt[0], pt[0], 1, ht, null)) break e;
                  return 1;
                }
                return e(ht.a != 0), 0;
              }(t, p)) {
                if (p = (n = xi(p.width, p.height, k.Oa, k.ba)) == 0) {
                  e: {
                    p = t;
                    r: for (; ; ) {
                      if (p == null) {
                        p = 0;
                        break e;
                      }
                      if (e(p.s.yc != null), e(p.s.Ya != null), e(0 < p.s.Wb), e((l = p.l) != null), e((b = l.ma) != null), p.xb != 0) {
                        if (p.ca = b.ba, p.tb = b.tb, e(p.ca != null), !na(b.Oa, l, Ka)) {
                          p.a = 2;
                          break r;
                        }
                        if (!ln(p, l.width) || l.da) break r;
                        if ((l.da || pe(p.ca.S)) && ut(), 11 > p.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), p.ca.f.kb.F != null && ut()), p.Pb && 0 < p.s.ua && p.s.vb.X == null && !Gt(p.s.vb, p.s.Wa.Xa)) {
                          p.a = 1;
                          break r;
                        }
                        p.xb = 0;
                      }
                      if (!Re(p, p.V, p.Ba, p.c, p.i, l.o, bn)) break r;
                      b.Dc = p.Ma, p = 1;
                      break e;
                    }
                    e(p.a != 0), p = 0;
                  }
                  p = !p;
                }
                p && (n = t.a);
              } else n = t.a;
            } else {
              if ((t = new xo()) == null) {
                k = 1;
                break t;
              }
              if (t.Fa = b.na, t.P = b.P, t.qc = b.Sa, _a(t, p)) {
                if ((n = xi(p.width, p.height, k.Oa, k.ba)) == 0) {
                  if (t.Aa = 0, l = k.Oa, e((b = t) != null), l != null) {
                    if (0 < (I = 0 > (I = l.Md) ? 0 : 100 < I ? 255 : 255 * I / 100)) {
                      for (R = rt = 0; 4 > R; ++R) 12 > (ct = b.pb[R]).lc && (ct.ia = I * pl[0 > ct.lc ? 0 : ct.lc] >> 3), rt |= ct.ia;
                      rt && (alert("todo:VP8InitRandom"), b.ia = 1);
                    }
                    b.Ga = l.Id, 100 < b.Ga ? b.Ga = 100 : 0 > b.Ga && (b.Ga = 0);
                  }
                  _o(t, p) || (n = t.a);
                }
              } else n = t.a;
            }
            n == 0 && k.Oa != null && k.Oa.fd && (n = ia(k.ba));
          }
          k = n;
        }
        _ = k != 0 ? null : 11 > _ ? T.f.RGBA.eb : T.f.kb.y;
      } else _ = null;
      return _;
    };
    var Hs = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1];
  };
  function g(j, Z) {
    for (var Q = "", N = 0; N < 4; N++) Q += String.fromCharCode(j[Z++]);
    return Q;
  }
  function P(j, Z) {
    return (j[Z + 0] << 0 | j[Z + 1] << 8 | j[Z + 2] << 16) >>> 0;
  }
  function A(j, Z) {
    return (j[Z + 0] << 0 | j[Z + 1] << 8 | j[Z + 2] << 16 | j[Z + 3] << 24) >>> 0;
  }
  new c();
  var L = [0], d = [0], x = [], F = new c(), E = i, v = function(j, Z) {
    var Q = {}, N = 0, y = !1, B = 0, z = 0;
    if (Q.frames = [], !/** @license
       * Copyright (c) 2017 Dominik Homberger
      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      https://webpjs.appspot.com
      WebPRiffParser dominikhlbg@gmail.com
      */
    function(O, q, V, X) {
      for (var at = 0; at < X; at++) if (O[q + at] != V.charCodeAt(at)) return !0;
      return !1;
    }(j, Z, "RIFF", 4)) {
      var lt, U;
      for (A(j, Z += 4), Z += 8; Z < j.length; ) {
        var W = g(j, Z), K = A(j, Z += 4);
        Z += 4;
        var J = K + (1 & K);
        switch (W) {
          case "VP8 ":
          case "VP8L":
            Q.frames[N] === void 0 && (Q.frames[N] = {}), (m = Q.frames[N]).src_off = y ? z : Z - 8, m.src_size = B + K + 8, N++, y && (y = !1, B = 0, z = 0);
            break;
          case "VP8X":
            (m = Q.header = {}).feature_flags = j[Z];
            var st = Z + 4;
            m.canvas_width = 1 + P(j, st), st += 3, m.canvas_height = 1 + P(j, st), st += 3;
            break;
          case "ALPH":
            y = !0, B = J + 8, z = Z - 8;
            break;
          case "ANIM":
            (m = Q.header).bgcolor = A(j, Z), st = Z + 4, m.loop_count = (lt = j)[(U = st) + 0] << 0 | lt[U + 1] << 8, st += 2;
            break;
          case "ANMF":
            var gt, m;
            (m = Q.frames[N] = {}).offset_x = 2 * P(j, Z), Z += 3, m.offset_y = 2 * P(j, Z), Z += 3, m.width = 1 + P(j, Z), Z += 3, m.height = 1 + P(j, Z), Z += 3, m.duration = P(j, Z), Z += 3, gt = j[Z++], m.dispose = 1 & gt, m.blend = gt >> 1 & 1;
        }
        W != "ANMF" && (Z += J);
      }
      return Q;
    }
  }(E, 0);
  v.response = E, v.rgbaoutput = !0, v.dataurl = !1;
  var S = v.header ? v.header : null, C = v.frames ? v.frames : null;
  if (S) {
    S.loop_counter = S.loop_count, L = [S.canvas_height], d = [S.canvas_width];
    for (var D = 0; D < C.length && C[D].blend != 0; D++) ;
  }
  var G = C[0], $ = F.WebPDecodeRGBA(E, G.src_off, G.src_size, d, L);
  G.rgba = $, G.imgwidth = d[0], G.imgheight = L[0];
  for (var M = 0; M < d[0] * L[0] * 4; M++) x[M] = $[M];
  return this.width = d, this.height = L, this.data = x, this;
}
(function(i) {
  var e = function() {
    return typeof ws == "function";
  }, r = function(L, d, x, F) {
    var E = 4, v = f;
    switch (F) {
      case i.image_compression.FAST:
        E = 1, v = o;
        break;
      case i.image_compression.MEDIUM:
        E = 6, v = h;
        break;
      case i.image_compression.SLOW:
        E = 9, v = c;
    }
    L = a(L, d, x, v);
    var S = ws(L, { level: E });
    return i.__addimage__.arrayBufferToBinaryString(S);
  }, a = function(L, d, x, F) {
    for (var E, v, S, C = L.length / d, D = new Uint8Array(L.length + C), G = P(), $ = 0; $ < C; $ += 1) {
      if (S = $ * d, E = L.subarray(S, S + d), F) D.set(F(E, x, v), S + $);
      else {
        for (var M, j = G.length, Z = []; M < j; M += 1) Z[M] = G[M](E, x, v);
        var Q = A(Z.concat());
        D.set(Z[Q], S + $);
      }
      v = E;
    }
    return D;
  }, u = function(L) {
    var d = Array.apply([], L);
    return d.unshift(0), d;
  }, o = function(L, d) {
    var x, F = [], E = L.length;
    F[0] = 1;
    for (var v = 0; v < E; v += 1) x = L[v - d] || 0, F[v + 1] = L[v] - x + 256 & 255;
    return F;
  }, f = function(L, d, x) {
    var F, E = [], v = L.length;
    E[0] = 2;
    for (var S = 0; S < v; S += 1) F = x && x[S] || 0, E[S + 1] = L[S] - F + 256 & 255;
    return E;
  }, h = function(L, d, x) {
    var F, E, v = [], S = L.length;
    v[0] = 3;
    for (var C = 0; C < S; C += 1) F = L[C - d] || 0, E = x && x[C] || 0, v[C + 1] = L[C] + 256 - (F + E >>> 1) & 255;
    return v;
  }, c = function(L, d, x) {
    var F, E, v, S, C = [], D = L.length;
    C[0] = 4;
    for (var G = 0; G < D; G += 1) F = L[G - d] || 0, E = x && x[G] || 0, v = x && x[G - d] || 0, S = g(F, E, v), C[G + 1] = L[G] - S + 256 & 255;
    return C;
  }, g = function(L, d, x) {
    if (L === d && d === x) return L;
    var F = Math.abs(d - x), E = Math.abs(L - x), v = Math.abs(L + d - x - x);
    return F <= E && F <= v ? L : E <= v ? d : x;
  }, P = function() {
    return [u, o, f, h, c];
  }, A = function(L) {
    var d = L.map(function(x) {
      return x.reduce(function(F, E) {
        return F + Math.abs(E);
      }, 0);
    });
    return d.indexOf(Math.min.apply(null, d));
  };
  i.processPNG = function(L, d, x, F) {
    var E, v, S, C, D, G, $, M, j, Z, Q, N, y, B, z, lt = this.decode.FLATE_DECODE, U = "";
    if (this.__addimage__.isArrayBuffer(L) && (L = new Uint8Array(L)), this.__addimage__.isArrayBufferView(L)) {
      if (L = (S = new $l(L)).imgData, v = S.bits, E = S.colorSpace, D = S.colors, [4, 6].indexOf(S.colorType) !== -1) {
        if (S.bits === 8) {
          j = (M = S.pixelBitlength == 32 ? new Uint32Array(S.decodePixels().buffer) : S.pixelBitlength == 16 ? new Uint16Array(S.decodePixels().buffer) : new Uint8Array(S.decodePixels().buffer)).length, Q = new Uint8Array(j * S.colors), Z = new Uint8Array(j);
          var W, K = S.pixelBitlength - S.bits;
          for (B = 0, z = 0; B < j; B++) {
            for (y = M[B], W = 0; W < K; ) Q[z++] = y >>> W & 255, W += S.bits;
            Z[B] = y >>> W & 255;
          }
        }
        if (S.bits === 16) {
          j = (M = new Uint32Array(S.decodePixels().buffer)).length, Q = new Uint8Array(j * (32 / S.pixelBitlength) * S.colors), Z = new Uint8Array(j * (32 / S.pixelBitlength)), N = S.colors > 1, B = 0, z = 0;
          for (var J = 0; B < j; ) y = M[B++], Q[z++] = y >>> 0 & 255, N && (Q[z++] = y >>> 16 & 255, y = M[B++], Q[z++] = y >>> 0 & 255), Z[J++] = y >>> 16 & 255;
          v = 8;
        }
        F !== i.image_compression.NONE && e() ? (L = r(Q, S.width * S.colors, S.colors, F), $ = r(Z, S.width, 1, F)) : (L = Q, $ = Z, lt = void 0);
      }
      if (S.colorType === 3 && (E = this.color_spaces.INDEXED, G = S.palette, S.transparency.indexed)) {
        var st = S.transparency.indexed, gt = 0;
        for (B = 0, j = st.length; B < j; ++B) gt += st[B];
        if ((gt /= 255) === j - 1 && st.indexOf(0) !== -1) C = [st.indexOf(0)];
        else if (gt !== j) {
          for (M = S.decodePixels(), Z = new Uint8Array(M.length), B = 0, j = M.length; B < j; B++) Z[B] = st[M[B]];
          $ = r(Z, S.width, 1);
        }
      }
      var m = function(O) {
        var q;
        switch (O) {
          case i.image_compression.FAST:
            q = 11;
            break;
          case i.image_compression.MEDIUM:
            q = 13;
            break;
          case i.image_compression.SLOW:
            q = 14;
            break;
          default:
            q = 12;
        }
        return q;
      }(F);
      return lt === this.decode.FLATE_DECODE && (U = "/Predictor " + m + " "), U += "/Colors " + D + " /BitsPerComponent " + v + " /Columns " + S.width, (this.__addimage__.isArrayBuffer(L) || this.__addimage__.isArrayBufferView(L)) && (L = this.__addimage__.arrayBufferToBinaryString(L)), ($ && this.__addimage__.isArrayBuffer($) || this.__addimage__.isArrayBufferView($)) && ($ = this.__addimage__.arrayBufferToBinaryString($)), { alias: x, data: L, index: d, filter: lt, decodeParameters: U, transparency: C, palette: G, sMask: $, predictor: m, width: S.width, height: S.height, bitsPerComponent: v, colorSpace: E };
    }
  };
})(Yt.API), function(i) {
  i.processGIF89A = function(e, r, a, u) {
    var o = new Zl(e), f = o.width, h = o.height, c = [];
    o.decodeAndBlitFrameRGBA(0, c);
    var g = { data: c, width: f, height: h }, P = new ds(100).encode(g, 100);
    return i.processJPEG.call(this, P, r, a, u);
  }, i.processGIF87A = i.processGIF89A;
}(Yt.API), nn.prototype.parseHeader = function() {
  if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.bitPP === 16 && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
    var i = this.colors === 0 ? 1 << this.bitPP : this.colors;
    this.palette = new Array(i);
    for (var e = 0; e < i; e++) {
      var r = this.datav.getUint8(this.pos++, !0), a = this.datav.getUint8(this.pos++, !0), u = this.datav.getUint8(this.pos++, !0), o = this.datav.getUint8(this.pos++, !0);
      this.palette[e] = { red: u, green: a, blue: r, quad: o };
    }
  }
  this.height < 0 && (this.height *= -1, this.bottom_up = !1);
}, nn.prototype.parseBGR = function() {
  this.pos = this.offset;
  try {
    var i = "bit" + this.bitPP, e = this.width * this.height * 4;
    this.data = new Uint8Array(e), this[i]();
  } catch (r) {
    Se.log("bit decode error:" + r);
  }
}, nn.prototype.bit1 = function() {
  var i, e = Math.ceil(this.width / 8), r = e % 4;
  for (i = this.height - 1; i >= 0; i--) {
    for (var a = this.bottom_up ? i : this.height - 1 - i, u = 0; u < e; u++) for (var o = this.datav.getUint8(this.pos++, !0), f = a * this.width * 4 + 8 * u * 4, h = 0; h < 8 && 8 * u + h < this.width; h++) {
      var c = this.palette[o >> 7 - h & 1];
      this.data[f + 4 * h] = c.blue, this.data[f + 4 * h + 1] = c.green, this.data[f + 4 * h + 2] = c.red, this.data[f + 4 * h + 3] = 255;
    }
    r !== 0 && (this.pos += 4 - r);
  }
}, nn.prototype.bit4 = function() {
  for (var i = Math.ceil(this.width / 2), e = i % 4, r = this.height - 1; r >= 0; r--) {
    for (var a = this.bottom_up ? r : this.height - 1 - r, u = 0; u < i; u++) {
      var o = this.datav.getUint8(this.pos++, !0), f = a * this.width * 4 + 2 * u * 4, h = o >> 4, c = 15 & o, g = this.palette[h];
      if (this.data[f] = g.blue, this.data[f + 1] = g.green, this.data[f + 2] = g.red, this.data[f + 3] = 255, 2 * u + 1 >= this.width) break;
      g = this.palette[c], this.data[f + 4] = g.blue, this.data[f + 4 + 1] = g.green, this.data[f + 4 + 2] = g.red, this.data[f + 4 + 3] = 255;
    }
    e !== 0 && (this.pos += 4 - e);
  }
}, nn.prototype.bit8 = function() {
  for (var i = this.width % 4, e = this.height - 1; e >= 0; e--) {
    for (var r = this.bottom_up ? e : this.height - 1 - e, a = 0; a < this.width; a++) {
      var u = this.datav.getUint8(this.pos++, !0), o = r * this.width * 4 + 4 * a;
      if (u < this.palette.length) {
        var f = this.palette[u];
        this.data[o] = f.red, this.data[o + 1] = f.green, this.data[o + 2] = f.blue, this.data[o + 3] = 255;
      } else this.data[o] = 255, this.data[o + 1] = 255, this.data[o + 2] = 255, this.data[o + 3] = 255;
    }
    i !== 0 && (this.pos += 4 - i);
  }
}, nn.prototype.bit15 = function() {
  for (var i = this.width % 3, e = parseInt("11111", 2), r = this.height - 1; r >= 0; r--) {
    for (var a = this.bottom_up ? r : this.height - 1 - r, u = 0; u < this.width; u++) {
      var o = this.datav.getUint16(this.pos, !0);
      this.pos += 2;
      var f = (o & e) / e * 255 | 0, h = (o >> 5 & e) / e * 255 | 0, c = (o >> 10 & e) / e * 255 | 0, g = o >> 15 ? 255 : 0, P = a * this.width * 4 + 4 * u;
      this.data[P] = c, this.data[P + 1] = h, this.data[P + 2] = f, this.data[P + 3] = g;
    }
    this.pos += i;
  }
}, nn.prototype.bit16 = function() {
  for (var i = this.width % 3, e = parseInt("11111", 2), r = parseInt("111111", 2), a = this.height - 1; a >= 0; a--) {
    for (var u = this.bottom_up ? a : this.height - 1 - a, o = 0; o < this.width; o++) {
      var f = this.datav.getUint16(this.pos, !0);
      this.pos += 2;
      var h = (f & e) / e * 255 | 0, c = (f >> 5 & r) / r * 255 | 0, g = (f >> 11) / e * 255 | 0, P = u * this.width * 4 + 4 * o;
      this.data[P] = g, this.data[P + 1] = c, this.data[P + 2] = h, this.data[P + 3] = 255;
    }
    this.pos += i;
  }
}, nn.prototype.bit24 = function() {
  for (var i = this.height - 1; i >= 0; i--) {
    for (var e = this.bottom_up ? i : this.height - 1 - i, r = 0; r < this.width; r++) {
      var a = this.datav.getUint8(this.pos++, !0), u = this.datav.getUint8(this.pos++, !0), o = this.datav.getUint8(this.pos++, !0), f = e * this.width * 4 + 4 * r;
      this.data[f] = o, this.data[f + 1] = u, this.data[f + 2] = a, this.data[f + 3] = 255;
    }
    this.pos += this.width % 4;
  }
}, nn.prototype.bit32 = function() {
  for (var i = this.height - 1; i >= 0; i--) for (var e = this.bottom_up ? i : this.height - 1 - i, r = 0; r < this.width; r++) {
    var a = this.datav.getUint8(this.pos++, !0), u = this.datav.getUint8(this.pos++, !0), o = this.datav.getUint8(this.pos++, !0), f = this.datav.getUint8(this.pos++, !0), h = e * this.width * 4 + 4 * r;
    this.data[h] = o, this.data[h + 1] = u, this.data[h + 2] = a, this.data[h + 3] = f;
  }
}, nn.prototype.getData = function() {
  return this.data;
}, /**
 * @license
 * Copyright (c) 2018 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(i) {
  i.processBMP = function(e, r, a, u) {
    var o = new nn(e, !1), f = o.width, h = o.height, c = { data: o.getData(), width: f, height: h }, g = new ds(100).encode(c, 100);
    return i.processJPEG.call(this, g, r, a, u);
  };
}(Yt.API), yu.prototype.getData = function() {
  return this.data;
}, /**
 * @license
 * Copyright (c) 2019 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(i) {
  i.processWEBP = function(e, r, a, u) {
    var o = new yu(e), f = o.width, h = o.height, c = { data: o.getData(), width: f, height: h }, g = new ds(100).encode(c, 100);
    return i.processJPEG.call(this, g, r, a, u);
  };
}(Yt.API), Yt.API.processRGBA = function(i, e, r) {
  for (var a = i.data, u = a.length, o = new Uint8Array(u / 4 * 3), f = new Uint8Array(u / 4), h = 0, c = 0, g = 0; g < u; g += 4) {
    var P = a[g], A = a[g + 1], L = a[g + 2], d = a[g + 3];
    o[h++] = P, o[h++] = A, o[h++] = L, f[c++] = d;
  }
  var x = this.__addimage__.arrayBufferToBinaryString(o);
  return { alpha: this.__addimage__.arrayBufferToBinaryString(f), data: x, index: e, alias: r, colorSpace: "DeviceRGB", bitsPerComponent: 8, width: i.width, height: i.height };
}, Yt.API.setLanguage = function(i) {
  return this.internal.languageSettings === void 0 && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = !1), { af: "Afrikaans", sq: "Albanian", ar: "Arabic (Standard)", "ar-DZ": "Arabic (Algeria)", "ar-BH": "Arabic (Bahrain)", "ar-EG": "Arabic (Egypt)", "ar-IQ": "Arabic (Iraq)", "ar-JO": "Arabic (Jordan)", "ar-KW": "Arabic (Kuwait)", "ar-LB": "Arabic (Lebanon)", "ar-LY": "Arabic (Libya)", "ar-MA": "Arabic (Morocco)", "ar-OM": "Arabic (Oman)", "ar-QA": "Arabic (Qatar)", "ar-SA": "Arabic (Saudi Arabia)", "ar-SY": "Arabic (Syria)", "ar-TN": "Arabic (Tunisia)", "ar-AE": "Arabic (U.A.E.)", "ar-YE": "Arabic (Yemen)", an: "Aragonese", hy: "Armenian", as: "Assamese", ast: "Asturian", az: "Azerbaijani", eu: "Basque", be: "Belarusian", bn: "Bengali", bs: "Bosnian", br: "Breton", bg: "Bulgarian", my: "Burmese", ca: "Catalan", ch: "Chamorro", ce: "Chechen", zh: "Chinese", "zh-HK": "Chinese (Hong Kong)", "zh-CN": "Chinese (PRC)", "zh-SG": "Chinese (Singapore)", "zh-TW": "Chinese (Taiwan)", cv: "Chuvash", co: "Corsican", cr: "Cree", hr: "Croatian", cs: "Czech", da: "Danish", nl: "Dutch (Standard)", "nl-BE": "Dutch (Belgian)", en: "English", "en-AU": "English (Australia)", "en-BZ": "English (Belize)", "en-CA": "English (Canada)", "en-IE": "English (Ireland)", "en-JM": "English (Jamaica)", "en-NZ": "English (New Zealand)", "en-PH": "English (Philippines)", "en-ZA": "English (South Africa)", "en-TT": "English (Trinidad & Tobago)", "en-GB": "English (United Kingdom)", "en-US": "English (United States)", "en-ZW": "English (Zimbabwe)", eo: "Esperanto", et: "Estonian", fo: "Faeroese", fj: "Fijian", fi: "Finnish", fr: "French (Standard)", "fr-BE": "French (Belgium)", "fr-CA": "French (Canada)", "fr-FR": "French (France)", "fr-LU": "French (Luxembourg)", "fr-MC": "French (Monaco)", "fr-CH": "French (Switzerland)", fy: "Frisian", fur: "Friulian", gd: "Gaelic (Scots)", "gd-IE": "Gaelic (Irish)", gl: "Galacian", ka: "Georgian", de: "German (Standard)", "de-AT": "German (Austria)", "de-DE": "German (Germany)", "de-LI": "German (Liechtenstein)", "de-LU": "German (Luxembourg)", "de-CH": "German (Switzerland)", el: "Greek", gu: "Gujurati", ht: "Haitian", he: "Hebrew", hi: "Hindi", hu: "Hungarian", is: "Icelandic", id: "Indonesian", iu: "Inuktitut", ga: "Irish", it: "Italian (Standard)", "it-CH": "Italian (Switzerland)", ja: "Japanese", kn: "Kannada", ks: "Kashmiri", kk: "Kazakh", km: "Khmer", ky: "Kirghiz", tlh: "Klingon", ko: "Korean", "ko-KP": "Korean (North Korea)", "ko-KR": "Korean (South Korea)", la: "Latin", lv: "Latvian", lt: "Lithuanian", lb: "Luxembourgish", mk: "North Macedonia", ms: "Malay", ml: "Malayalam", mt: "Maltese", mi: "Maori", mr: "Marathi", mo: "Moldavian", nv: "Navajo", ng: "Ndonga", ne: "Nepali", no: "Norwegian", nb: "Norwegian (Bokmal)", nn: "Norwegian (Nynorsk)", oc: "Occitan", or: "Oriya", om: "Oromo", fa: "Persian", "fa-IR": "Persian/Iran", pl: "Polish", pt: "Portuguese", "pt-BR": "Portuguese (Brazil)", pa: "Punjabi", "pa-IN": "Punjabi (India)", "pa-PK": "Punjabi (Pakistan)", qu: "Quechua", rm: "Rhaeto-Romanic", ro: "Romanian", "ro-MO": "Romanian (Moldavia)", ru: "Russian", "ru-MO": "Russian (Moldavia)", sz: "Sami (Lappish)", sg: "Sango", sa: "Sanskrit", sc: "Sardinian", sd: "Sindhi", si: "Singhalese", sr: "Serbian", sk: "Slovak", sl: "Slovenian", so: "Somani", sb: "Sorbian", es: "Spanish", "es-AR": "Spanish (Argentina)", "es-BO": "Spanish (Bolivia)", "es-CL": "Spanish (Chile)", "es-CO": "Spanish (Colombia)", "es-CR": "Spanish (Costa Rica)", "es-DO": "Spanish (Dominican Republic)", "es-EC": "Spanish (Ecuador)", "es-SV": "Spanish (El Salvador)", "es-GT": "Spanish (Guatemala)", "es-HN": "Spanish (Honduras)", "es-MX": "Spanish (Mexico)", "es-NI": "Spanish (Nicaragua)", "es-PA": "Spanish (Panama)", "es-PY": "Spanish (Paraguay)", "es-PE": "Spanish (Peru)", "es-PR": "Spanish (Puerto Rico)", "es-ES": "Spanish (Spain)", "es-UY": "Spanish (Uruguay)", "es-VE": "Spanish (Venezuela)", sx: "Sutu", sw: "Swahili", sv: "Swedish", "sv-FI": "Swedish (Finland)", "sv-SV": "Swedish (Sweden)", ta: "Tamil", tt: "Tatar", te: "Teluga", th: "Thai", tig: "Tigre", ts: "Tsonga", tn: "Tswana", tr: "Turkish", tk: "Turkmen", uk: "Ukrainian", hsb: "Upper Sorbian", ur: "Urdu", ve: "Venda", vi: "Vietnamese", vo: "Volapuk", wa: "Walloon", cy: "Welsh", xh: "Xhosa", ji: "Yiddish", zu: "Zulu" }[i] !== void 0 && (this.internal.languageSettings.languageCode = i, this.internal.languageSettings.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
    this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
  }), this.internal.languageSettings.isSubscribed = !0)), this;
}, Bi = Yt.API, mo = Bi.getCharWidthsArray = function(i, e) {
  var r, a, u = (e = e || {}).font || this.internal.getFont(), o = e.fontSize || this.internal.getFontSize(), f = e.charSpace || this.internal.getCharSpace(), h = e.widths ? e.widths : u.metadata.Unicode.widths, c = h.fof ? h.fof : 1, g = e.kerning ? e.kerning : u.metadata.Unicode.kerning, P = g.fof ? g.fof : 1, A = e.doKerning !== !1, L = 0, d = i.length, x = 0, F = h[0] || c, E = [];
  for (r = 0; r < d; r++) a = i.charCodeAt(r), typeof u.metadata.widthOfString == "function" ? E.push((u.metadata.widthOfGlyph(u.metadata.characterToGlyph(a)) + f * (1e3 / o) || 0) / 1e3) : (L = A && xe(g[a]) === "object" && !isNaN(parseInt(g[a][x], 10)) ? g[a][x] / P : 0, E.push((h[a] || F) / c + L)), x = a;
  return E;
}, gu = Bi.getStringUnitWidth = function(i, e) {
  var r = (e = e || {}).fontSize || this.internal.getFontSize(), a = e.font || this.internal.getFont(), u = e.charSpace || this.internal.getCharSpace();
  return Bi.processArabic && (i = Bi.processArabic(i)), typeof a.metadata.widthOfString == "function" ? a.metadata.widthOfString(i, r, u) / r : mo.apply(this, arguments).reduce(function(o, f) {
    return o + f;
  }, 0);
}, mu = function(i, e, r, a) {
  for (var u = [], o = 0, f = i.length, h = 0; o !== f && h + e[o] < r; ) h += e[o], o++;
  u.push(i.slice(0, o));
  var c = o;
  for (h = 0; o !== f; ) h + e[o] > a && (u.push(i.slice(c, o)), h = 0, c = o), h += e[o], o++;
  return c !== o && u.push(i.slice(c, o)), u;
}, vu = function(i, e, r) {
  r || (r = {});
  var a, u, o, f, h, c, g, P = [], A = [P], L = r.textIndent || 0, d = 0, x = 0, F = i.split(" "), E = mo.apply(this, [" ", r])[0];
  if (c = r.lineIndent === -1 ? F[0].length + 2 : r.lineIndent || 0) {
    var v = Array(c).join(" "), S = [];
    F.map(function(D) {
      (D = D.split(/\s*\n/)).length > 1 ? S = S.concat(D.map(function(G, $) {
        return ($ && G.length ? `
` : "") + G;
      })) : S.push(D[0]);
    }), F = S, c = gu.apply(this, [v, r]);
  }
  for (o = 0, f = F.length; o < f; o++) {
    var C = 0;
    if (a = F[o], c && a[0] == `
` && (a = a.substr(1), C = 1), L + d + (x = (u = mo.apply(this, [a, r])).reduce(function(D, G) {
      return D + G;
    }, 0)) > e || C) {
      if (x > e) {
        for (h = mu.apply(this, [a, u, e - (L + d), e]), P.push(h.shift()), P = [h.pop()]; h.length; ) A.push([h.shift()]);
        x = u.slice(a.length - (P[0] ? P[0].length : 0)).reduce(function(D, G) {
          return D + G;
        }, 0);
      } else P = [a];
      A.push(P), L = x + c, d = E;
    } else P.push(a), L += d + x, d = E;
  }
  return g = c ? function(D, G) {
    return (G ? v : "") + D.join(" ");
  } : function(D) {
    return D.join(" ");
  }, A.map(g);
}, Bi.splitTextToSize = function(i, e, r) {
  var a, u = (r = r || {}).fontSize || this.internal.getFontSize(), o = (function(P) {
    if (P.widths && P.kerning) return { widths: P.widths, kerning: P.kerning };
    var A = this.internal.getFont(P.fontName, P.fontStyle);
    return A.metadata.Unicode ? { widths: A.metadata.Unicode.widths || { 0: 1 }, kerning: A.metadata.Unicode.kerning || {} } : { font: A.metadata, fontSize: this.internal.getFontSize(), charSpace: this.internal.getCharSpace() };
  }).call(this, r);
  a = Array.isArray(i) ? i : String(i).split(/\r?\n/);
  var f = 1 * this.internal.scaleFactor * e / u;
  o.textIndent = r.textIndent ? 1 * r.textIndent * this.internal.scaleFactor / u : 0, o.lineIndent = r.lineIndent;
  var h, c, g = [];
  for (h = 0, c = a.length; h < c; h++) g = g.concat(vu.apply(this, [a[h], f, o]));
  return g;
}, function(i) {
  i.__fontmetrics__ = i.__fontmetrics__ || {};
  for (var e = "klmnopqrstuvwxyz", r = {}, a = {}, u = 0; u < e.length; u++) r[e[u]] = "0123456789abcdef"[u], a["0123456789abcdef"[u]] = e[u];
  var o = function(A) {
    return "0x" + parseInt(A, 10).toString(16);
  }, f = i.__fontmetrics__.compress = function(A) {
    var L, d, x, F, E = ["{"];
    for (var v in A) {
      if (L = A[v], isNaN(parseInt(v, 10)) ? d = "'" + v + "'" : (v = parseInt(v, 10), d = (d = o(v).slice(2)).slice(0, -1) + a[d.slice(-1)]), typeof L == "number") L < 0 ? (x = o(L).slice(3), F = "-") : (x = o(L).slice(2), F = ""), x = F + x.slice(0, -1) + a[x.slice(-1)];
      else {
        if (xe(L) !== "object") throw new Error("Don't know what to do with value type " + xe(L) + ".");
        x = f(L);
      }
      E.push(d + x);
    }
    return E.push("}"), E.join("");
  }, h = i.__fontmetrics__.uncompress = function(A) {
    if (typeof A != "string") throw new Error("Invalid argument passed to uncompress.");
    for (var L, d, x, F, E = {}, v = 1, S = E, C = [], D = "", G = "", $ = A.length - 1, M = 1; M < $; M += 1) (F = A[M]) == "'" ? L ? (x = L.join(""), L = void 0) : L = [] : L ? L.push(F) : F == "{" ? (C.push([S, x]), S = {}, x = void 0) : F == "}" ? ((d = C.pop())[0][d[1]] = S, x = void 0, S = d[0]) : F == "-" ? v = -1 : x === void 0 ? r.hasOwnProperty(F) ? (D += r[F], x = parseInt(D, 16) * v, v = 1, D = "") : D += F : r.hasOwnProperty(F) ? (G += r[F], S[x] = parseInt(G, 16) * v, v = 1, x = void 0, G = "") : G += F;
    return E;
  }, c = { codePages: ["WinAnsiEncoding"], WinAnsiEncoding: h("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}") }, g = { Unicode: { Courier: c, "Courier-Bold": c, "Courier-BoldOblique": c, "Courier-Oblique": c, Helvetica: c, "Helvetica-Bold": c, "Helvetica-BoldOblique": c, "Helvetica-Oblique": c, "Times-Roman": c, "Times-Bold": c, "Times-BoldItalic": c, "Times-Italic": c } }, P = { Unicode: { "Courier-Oblique": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-BoldItalic": h("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"), "Helvetica-Bold": h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), Courier: h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-BoldOblique": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Bold": h("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"), Symbol: h("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"), Helvetica: h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"), "Helvetica-BoldOblique": h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), ZapfDingbats: h("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-Bold": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Italic": h("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"), "Times-Roman": h("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"), "Helvetica-Oblique": h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}") } };
  i.events.push(["addFont", function(A) {
    var L = A.font, d = P.Unicode[L.postScriptName];
    d && (L.metadata.Unicode = {}, L.metadata.Unicode.widths = d.widths, L.metadata.Unicode.kerning = d.kerning);
    var x = g.Unicode[L.postScriptName];
    x && (L.metadata.Unicode.encoding = x, L.encoding = x.codePages[0]);
  }]);
}(Yt.API), /**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(i) {
  var e = function(r) {
    for (var a = r.length, u = new Uint8Array(a), o = 0; o < a; o++) u[o] = r.charCodeAt(o);
    return u;
  };
  i.API.events.push(["addFont", function(r) {
    var a = void 0, u = r.font, o = r.instance;
    if (!u.isStandardFont) {
      if (o === void 0) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + u.postScriptName + "').");
      if (typeof (a = o.existsFileInVFS(u.postScriptName) === !1 ? o.loadFile(u.postScriptName) : o.getFileFromVFS(u.postScriptName)) != "string") throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + u.postScriptName + "').");
      (function(f, h) {
        h = /^\x00\x01\x00\x00/.test(h) ? e(h) : e(ba(h)), f.metadata = i.API.TTFFont.open(h), f.metadata.Unicode = f.metadata.Unicode || { encoding: {}, kerning: {}, widths: [] }, f.metadata.glyIdsUsed = [0];
      })(u, a);
    }
  }]);
}(Yt), /** @license
 * Copyright (c) 2012 Willow Systems Corporation, https://github.com/willowsystems
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
function(i) {
  function e() {
    return (Xt.canvg ? Promise.resolve(Xt.canvg) : import("./vendor-canvas-B1H7M-Ap.js").then((r) => r.i)).catch(function(r) {
      return Promise.reject(new Error("Could not load canvg: " + r));
    }).then(function(r) {
      return r.default ? r.default : r;
    });
  }
  Yt.API.addSvgAsImage = function(r, a, u, o, f, h, c, g) {
    if (isNaN(a) || isNaN(u)) throw Se.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
    if (isNaN(o) || isNaN(f)) throw Se.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
    var P = document.createElement("canvas");
    P.width = o, P.height = f;
    var A = P.getContext("2d");
    A.fillStyle = "#fff", A.fillRect(0, 0, P.width, P.height);
    var L = { ignoreMouse: !0, ignoreAnimation: !0, ignoreDimensions: !0 }, d = this;
    return e().then(function(x) {
      return x.fromString(A, r, L);
    }, function() {
      return Promise.reject(new Error("Could not load canvg."));
    }).then(function(x) {
      return x.render(L);
    }).then(function() {
      d.addImage(P.toDataURL("image/jpeg", 1), a, u, o, f, c, g);
    });
  };
}(), Yt.API.putTotalPages = function(i) {
  var e, r = 0;
  parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (e = new RegExp(i, "g"), r = this.internal.getNumberOfPages()) : (e = new RegExp(this.pdfEscape16(i, this.internal.getFont()), "g"), r = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
  for (var a = 1; a <= this.internal.getNumberOfPages(); a++) for (var u = 0; u < this.internal.pages[a].length; u++) this.internal.pages[a][u] = this.internal.pages[a][u].replace(e, r);
  return this;
}, Yt.API.viewerPreferences = function(i, e) {
  var r;
  i = i || {}, e = e || !1;
  var a, u, o, f = { HideToolbar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideMenubar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideWindowUI: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, FitWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, CenterWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, DisplayDocTitle: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.4 }, NonFullScreenPageMode: { defaultValue: "UseNone", value: "UseNone", type: "name", explicitSet: !1, valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"], pdfVersion: 1.3 }, Direction: { defaultValue: "L2R", value: "L2R", type: "name", explicitSet: !1, valueSet: ["L2R", "R2L"], pdfVersion: 1.3 }, ViewArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, ViewClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintScaling: { defaultValue: "AppDefault", value: "AppDefault", type: "name", explicitSet: !1, valueSet: ["AppDefault", "None"], pdfVersion: 1.6 }, Duplex: { defaultValue: "", value: "none", type: "name", explicitSet: !1, valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"], pdfVersion: 1.7 }, PickTrayByPDFSize: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.7 }, PrintPageRange: { defaultValue: "", value: "", type: "array", explicitSet: !1, valueSet: null, pdfVersion: 1.7 }, NumCopies: { defaultValue: 1, value: 1, type: "integer", explicitSet: !1, valueSet: null, pdfVersion: 1.7 } }, h = Object.keys(f), c = [], g = 0, P = 0, A = 0;
  function L(x, F) {
    var E, v = !1;
    for (E = 0; E < x.length; E += 1) x[E] === F && (v = !0);
    return v;
  }
  if (this.internal.viewerpreferences === void 0 && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(f)), this.internal.viewerpreferences.isSubscribed = !1), r = this.internal.viewerpreferences.configuration, i === "reset" || e === !0) {
    var d = h.length;
    for (A = 0; A < d; A += 1) r[h[A]].value = r[h[A]].defaultValue, r[h[A]].explicitSet = !1;
  }
  if (xe(i) === "object") {
    for (u in i) if (o = i[u], L(h, u) && o !== void 0) {
      if (r[u].type === "boolean" && typeof o == "boolean") r[u].value = o;
      else if (r[u].type === "name" && L(r[u].valueSet, o)) r[u].value = o;
      else if (r[u].type === "integer" && Number.isInteger(o)) r[u].value = o;
      else if (r[u].type === "array") {
        for (g = 0; g < o.length; g += 1) if (a = !0, o[g].length === 1 && typeof o[g][0] == "number") c.push(String(o[g] - 1));
        else if (o[g].length > 1) {
          for (P = 0; P < o[g].length; P += 1) typeof o[g][P] != "number" && (a = !1);
          a === !0 && c.push([o[g][0] - 1, o[g][1] - 1].join(" "));
        }
        r[u].value = "[" + c.join(" ") + "]";
      } else r[u].value = r[u].defaultValue;
      r[u].explicitSet = !0;
    }
  }
  return this.internal.viewerpreferences.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
    var x, F = [];
    for (x in r) r[x].explicitSet === !0 && (r[x].type === "name" ? F.push("/" + x + " /" + r[x].value) : F.push("/" + x + " " + r[x].value));
    F.length !== 0 && this.internal.write(`/ViewerPreferences
<<
` + F.join(`
`) + `
>>`);
  }), this.internal.viewerpreferences.isSubscribed = !0), this.internal.viewerpreferences.configuration = r, this;
}, /** ====================================================================
 * @license
 * jsPDF XMP metadata plugin
 * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
function(i) {
  var e = function() {
    var a = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceuri + '"><jspdf:metadata>', u = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')), o = unescape(encodeURIComponent(a)), f = unescape(encodeURIComponent(this.internal.__metadata__.metadata)), h = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")), c = unescape(encodeURIComponent("</x:xmpmeta>")), g = o.length + f.length + h.length + u.length + c.length;
    this.internal.__metadata__.metadata_object_number = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + g + " >>"), this.internal.write("stream"), this.internal.write(u + o + f + h + c), this.internal.write("endstream"), this.internal.write("endobj");
  }, r = function() {
    this.internal.__metadata__.metadata_object_number && this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R");
  };
  i.addMetadata = function(a, u) {
    return this.internal.__metadata__ === void 0 && (this.internal.__metadata__ = { metadata: a, namespaceuri: u || "http://jspdf.default.namespaceuri/" }, this.internal.events.subscribe("putCatalog", r), this.internal.events.subscribe("postPutResources", e)), this;
  };
}(Yt.API), function(i) {
  var e = i.API, r = e.pdfEscape16 = function(o, f) {
    for (var h, c = f.metadata.Unicode.widths, g = ["", "0", "00", "000", "0000"], P = [""], A = 0, L = o.length; A < L; ++A) {
      if (h = f.metadata.characterToGlyph(o.charCodeAt(A)), f.metadata.glyIdsUsed.push(h), f.metadata.toUnicode[h] = o.charCodeAt(A), c.indexOf(h) == -1 && (c.push(h), c.push([parseInt(f.metadata.widthOfGlyph(h), 10)])), h == "0") return P.join("");
      h = h.toString(16), P.push(g[4 - h.length], h);
    }
    return P.join("");
  }, a = function(o) {
    var f, h, c, g, P, A, L;
    for (P = `/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange`, c = [], A = 0, L = (h = Object.keys(o).sort(function(d, x) {
      return d - x;
    })).length; A < L; A++) f = h[A], c.length >= 100 && (P += `
` + c.length + ` beginbfchar
` + c.join(`
`) + `
endbfchar`, c = []), o[f] !== void 0 && o[f] !== null && typeof o[f].toString == "function" && (g = ("0000" + o[f].toString(16)).slice(-4), f = ("0000" + (+f).toString(16)).slice(-4), c.push("<" + f + "><" + g + ">"));
    return c.length && (P += `
` + c.length + ` beginbfchar
` + c.join(`
`) + `
endbfchar
`), P += `endcmap
CMapName currentdict /CMap defineresource pop
end
end`;
  };
  e.events.push(["putFont", function(o) {
    (function(f) {
      var h = f.font, c = f.out, g = f.newObject, P = f.putStream;
      if (h.metadata instanceof i.API.TTFFont && h.encoding === "Identity-H") {
        for (var A = h.metadata.Unicode.widths, L = h.metadata.subset.encode(h.metadata.glyIdsUsed, 1), d = "", x = 0; x < L.length; x++) d += String.fromCharCode(L[x]);
        var F = g();
        P({ data: d, addLength1: !0, objectId: F }), c("endobj");
        var E = g();
        P({ data: a(h.metadata.toUnicode), addLength1: !0, objectId: E }), c("endobj");
        var v = g();
        c("<<"), c("/Type /FontDescriptor"), c("/FontName /" + zi(h.fontName)), c("/FontFile2 " + F + " 0 R"), c("/FontBBox " + i.API.PDFObject.convert(h.metadata.bbox)), c("/Flags " + h.metadata.flags), c("/StemV " + h.metadata.stemV), c("/ItalicAngle " + h.metadata.italicAngle), c("/Ascent " + h.metadata.ascender), c("/Descent " + h.metadata.decender), c("/CapHeight " + h.metadata.capHeight), c(">>"), c("endobj");
        var S = g();
        c("<<"), c("/Type /Font"), c("/BaseFont /" + zi(h.fontName)), c("/FontDescriptor " + v + " 0 R"), c("/W " + i.API.PDFObject.convert(A)), c("/CIDToGIDMap /Identity"), c("/DW 1000"), c("/Subtype /CIDFontType2"), c("/CIDSystemInfo"), c("<<"), c("/Supplement 0"), c("/Registry (Adobe)"), c("/Ordering (" + h.encoding + ")"), c(">>"), c(">>"), c("endobj"), h.objectNumber = g(), c("<<"), c("/Type /Font"), c("/Subtype /Type0"), c("/ToUnicode " + E + " 0 R"), c("/BaseFont /" + zi(h.fontName)), c("/Encoding /" + h.encoding), c("/DescendantFonts [" + S + " 0 R]"), c(">>"), c("endobj"), h.isAlreadyPutted = !0;
      }
    })(o);
  }]), e.events.push(["putFont", function(o) {
    (function(f) {
      var h = f.font, c = f.out, g = f.newObject, P = f.putStream;
      if (h.metadata instanceof i.API.TTFFont && h.encoding === "WinAnsiEncoding") {
        for (var A = h.metadata.rawData, L = "", d = 0; d < A.length; d++) L += String.fromCharCode(A[d]);
        var x = g();
        P({ data: L, addLength1: !0, objectId: x }), c("endobj");
        var F = g();
        P({ data: a(h.metadata.toUnicode), addLength1: !0, objectId: F }), c("endobj");
        var E = g();
        c("<<"), c("/Descent " + h.metadata.decender), c("/CapHeight " + h.metadata.capHeight), c("/StemV " + h.metadata.stemV), c("/Type /FontDescriptor"), c("/FontFile2 " + x + " 0 R"), c("/Flags 96"), c("/FontBBox " + i.API.PDFObject.convert(h.metadata.bbox)), c("/FontName /" + zi(h.fontName)), c("/ItalicAngle " + h.metadata.italicAngle), c("/Ascent " + h.metadata.ascender), c(">>"), c("endobj"), h.objectNumber = g();
        for (var v = 0; v < h.metadata.hmtx.widths.length; v++) h.metadata.hmtx.widths[v] = parseInt(h.metadata.hmtx.widths[v] * (1e3 / h.metadata.head.unitsPerEm));
        c("<</Subtype/TrueType/Type/Font/ToUnicode " + F + " 0 R/BaseFont/" + zi(h.fontName) + "/FontDescriptor " + E + " 0 R/Encoding/" + h.encoding + " /FirstChar 29 /LastChar 255 /Widths " + i.API.PDFObject.convert(h.metadata.hmtx.widths) + ">>"), c("endobj"), h.isAlreadyPutted = !0;
      }
    })(o);
  }]);
  var u = function(o) {
    var f, h = o.text || "", c = o.x, g = o.y, P = o.options || {}, A = o.mutex || {}, L = A.pdfEscape, d = A.activeFontKey, x = A.fonts, F = d, E = "", v = 0, S = "", C = x[F].encoding;
    if (x[F].encoding !== "Identity-H") return { text: h, x: c, y: g, options: P, mutex: A };
    for (S = h, F = d, Array.isArray(h) && (S = h[0]), v = 0; v < S.length; v += 1) x[F].metadata.hasOwnProperty("cmap") && (f = x[F].metadata.cmap.unicode.codeMap[S[v].charCodeAt(0)]), f || S[v].charCodeAt(0) < 256 && x[F].metadata.hasOwnProperty("Unicode") ? E += S[v] : E += "";
    var D = "";
    return parseInt(F.slice(1)) < 14 || C === "WinAnsiEncoding" ? D = L(E, F).split("").map(function(G) {
      return G.charCodeAt(0).toString(16);
    }).join("") : C === "Identity-H" && (D = r(E, x[F])), A.isHex = !0, { text: D, x: c, y: g, options: P, mutex: A };
  };
  e.events.push(["postProcessText", function(o) {
    var f = o.text || "", h = [], c = { text: f, x: o.x, y: o.y, options: o.options, mutex: o.mutex };
    if (Array.isArray(f)) {
      var g = 0;
      for (g = 0; g < f.length; g += 1) Array.isArray(f[g]) && f[g].length === 3 ? h.push([u(Object.assign({}, c, { text: f[g][0] })).text, f[g][1], f[g][2]]) : h.push(u(Object.assign({}, c, { text: f[g] })).text);
      o.text = h;
    } else o.text = u(Object.assign({}, c, { text: f })).text;
  }]);
}(Yt), /**
 * @license
 * jsPDF virtual FileSystem functionality
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function(i) {
  var e = function() {
    return this.internal.vFS === void 0 && (this.internal.vFS = {}), !0;
  };
  i.existsFileInVFS = function(r) {
    return e.call(this), this.internal.vFS[r] !== void 0;
  }, i.addFileToVFS = function(r, a) {
    return e.call(this), this.internal.vFS[r] = a, this;
  }, i.getFileFromVFS = function(r) {
    return e.call(this), this.internal.vFS[r] !== void 0 ? this.internal.vFS[r] : null;
  };
}(Yt.API), /**
 * @license
 * Unicode Bidi Engine based on the work of Alex Shensis (@asthensis)
 * MIT License
 */
function(i) {
  i.__bidiEngine__ = i.prototype.__bidiEngine__ = function(a) {
    var u, o, f, h, c, g, P, A = e, L = [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]], d = [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]], x = { L: 0, R: 1, EN: 2, AN: 3, N: 4, B: 5, S: 6 }, F = { 0: 0, 5: 1, 6: 2, 7: 3, 32: 4, 251: 5, 254: 6, 255: 7 }, E = ["(", ")", "(", "<", ">", "<", "[", "]", "[", "{", "}", "{", "«", "»", "«", "‹", "›", "‹", "⁅", "⁆", "⁅", "⁽", "⁾", "⁽", "₍", "₎", "₍", "≤", "≥", "≤", "〈", "〉", "〈", "﹙", "﹚", "﹙", "﹛", "﹜", "﹛", "﹝", "﹞", "﹝", "﹤", "﹥", "﹤"], v = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), S = !1, C = 0;
    this.__bidiEngine__ = {};
    var D = function(N) {
      var y = N.charCodeAt(), B = y >> 8, z = F[B];
      return z !== void 0 ? A[256 * z + (255 & y)] : B === 252 || B === 253 ? "AL" : v.test(B) ? "L" : B === 8 ? "R" : "N";
    }, G = function(N) {
      for (var y, B = 0; B < N.length; B++) {
        if ((y = D(N.charAt(B))) === "L") return !1;
        if (y === "R") return !0;
      }
      return !1;
    }, $ = function(N, y, B, z) {
      var lt, U, W, K, J = y[z];
      switch (J) {
        case "L":
        case "R":
          S = !1;
          break;
        case "N":
        case "AN":
          break;
        case "EN":
          S && (J = "AN");
          break;
        case "AL":
          S = !0, J = "R";
          break;
        case "WS":
          J = "N";
          break;
        case "CS":
          z < 1 || z + 1 >= y.length || (lt = B[z - 1]) !== "EN" && lt !== "AN" || (U = y[z + 1]) !== "EN" && U !== "AN" ? J = "N" : S && (U = "AN"), J = U === lt ? U : "N";
          break;
        case "ES":
          J = (lt = z > 0 ? B[z - 1] : "B") === "EN" && z + 1 < y.length && y[z + 1] === "EN" ? "EN" : "N";
          break;
        case "ET":
          if (z > 0 && B[z - 1] === "EN") {
            J = "EN";
            break;
          }
          if (S) {
            J = "N";
            break;
          }
          for (W = z + 1, K = y.length; W < K && y[W] === "ET"; ) W++;
          J = W < K && y[W] === "EN" ? "EN" : "N";
          break;
        case "NSM":
          if (f && !h) {
            for (K = y.length, W = z + 1; W < K && y[W] === "NSM"; ) W++;
            if (W < K) {
              var st = N[z], gt = st >= 1425 && st <= 2303 || st === 64286;
              if (lt = y[W], gt && (lt === "R" || lt === "AL")) {
                J = "R";
                break;
              }
            }
          }
          J = z < 1 || (lt = y[z - 1]) === "B" ? "N" : B[z - 1];
          break;
        case "B":
          S = !1, u = !0, J = C;
          break;
        case "S":
          o = !0, J = "N";
          break;
        case "LRE":
        case "RLE":
        case "LRO":
        case "RLO":
        case "PDF":
          S = !1;
          break;
        case "BN":
          J = "N";
      }
      return J;
    }, M = function(N, y, B) {
      var z = N.split("");
      return B && j(z, B, { hiLevel: C }), z.reverse(), y && y.reverse(), z.join("");
    }, j = function(N, y, B) {
      var z, lt, U, W, K, J = -1, st = N.length, gt = 0, m = [], O = C ? d : L, q = [];
      for (S = !1, u = !1, o = !1, lt = 0; lt < st; lt++) q[lt] = D(N[lt]);
      for (U = 0; U < st; U++) {
        if (K = gt, m[U] = $(N, q, m, U), z = 240 & (gt = O[K][x[m[U]]]), gt &= 15, y[U] = W = O[gt][5], z > 0) if (z === 16) {
          for (lt = J; lt < U; lt++) y[lt] = 1;
          J = -1;
        } else J = -1;
        if (O[gt][6]) J === -1 && (J = U);
        else if (J > -1) {
          for (lt = J; lt < U; lt++) y[lt] = W;
          J = -1;
        }
        q[U] === "B" && (y[U] = 0), B.hiLevel |= W;
      }
      o && function(V, X, at) {
        for (var ft = 0; ft < at; ft++) if (V[ft] === "S") {
          X[ft] = C;
          for (var dt = ft - 1; dt >= 0 && V[dt] === "WS"; dt--) X[dt] = C;
        }
      }(q, y, st);
    }, Z = function(N, y, B, z, lt) {
      if (!(lt.hiLevel < N)) {
        if (N === 1 && C === 1 && !u) return y.reverse(), void (B && B.reverse());
        for (var U, W, K, J, st = y.length, gt = 0; gt < st; ) {
          if (z[gt] >= N) {
            for (K = gt + 1; K < st && z[K] >= N; ) K++;
            for (J = gt, W = K - 1; J < W; J++, W--) U = y[J], y[J] = y[W], y[W] = U, B && (U = B[J], B[J] = B[W], B[W] = U);
            gt = K;
          }
          gt++;
        }
      }
    }, Q = function(N, y, B) {
      var z = N.split(""), lt = { hiLevel: C };
      return B || (B = []), j(z, B, lt), function(U, W, K) {
        if (K.hiLevel !== 0 && P) for (var J, st = 0; st < U.length; st++) W[st] === 1 && (J = E.indexOf(U[st])) >= 0 && (U[st] = E[J + 1]);
      }(z, B, lt), Z(2, z, y, B, lt), Z(1, z, y, B, lt), z.join("");
    };
    return this.__bidiEngine__.doBidiReorder = function(N, y, B) {
      if (function(lt, U) {
        if (U) for (var W = 0; W < lt.length; W++) U[W] = W;
        h === void 0 && (h = G(lt)), g === void 0 && (g = G(lt));
      }(N, y), f || !c || g) if (f && c && h ^ g) C = h ? 1 : 0, N = M(N, y, B);
      else if (!f && c && g) C = h ? 1 : 0, N = Q(N, y, B), N = M(N, y);
      else if (!f || h || c || g) {
        if (f && !c && h ^ g) N = M(N, y), h ? (C = 0, N = Q(N, y, B)) : (C = 1, N = Q(N, y, B), N = M(N, y));
        else if (f && h && !c && g) C = 1, N = Q(N, y, B), N = M(N, y);
        else if (!f && !c && h ^ g) {
          var z = P;
          h ? (C = 1, N = Q(N, y, B), C = 0, P = !1, N = Q(N, y, B), P = z) : (C = 0, N = Q(N, y, B), N = M(N, y), C = 1, P = !1, N = Q(N, y, B), P = z, N = M(N, y));
        }
      } else C = 0, N = Q(N, y, B);
      else C = h ? 1 : 0, N = Q(N, y, B);
      return N;
    }, this.__bidiEngine__.setOptions = function(N) {
      N && (f = N.isInputVisual, c = N.isOutputVisual, h = N.isInputRtl, g = N.isOutputRtl, P = N.isSymmetricSwapping);
    }, this.__bidiEngine__.setOptions(a), this.__bidiEngine__;
  };
  var e = ["BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "N", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "L", "N", "N", "BN", "N", "N", "ET", "ET", "EN", "EN", "N", "L", "N", "N", "N", "EN", "L", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "N", "N", "N", "N", "N", "ET", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "NSM", "R", "NSM", "NSM", "R", "NSM", "NSM", "R", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AN", "AN", "AN", "AN", "AN", "AN", "N", "N", "AL", "ET", "ET", "AL", "CS", "AL", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "N", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "R", "N", "N", "N", "N", "R", "N", "N", "N", "N", "N", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "BN", "BN", "BN", "L", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "B", "LRE", "RLE", "PDF", "LRO", "RLO", "CS", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "BN", "BN", "BN", "BN", "BN", "N", "LRI", "RLI", "FSI", "PDI", "BN", "BN", "BN", "BN", "BN", "BN", "EN", "L", "N", "N", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "L", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "R", "NSM", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "ES", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "R", "R", "R", "R", "R", "N", "R", "N", "R", "R", "N", "R", "R", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "CS", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "ET", "N", "N", "ES", "ES", "N", "N", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "BN", "N", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "N", "N", "N", "ET", "ET", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"], r = new i.__bidiEngine__({ isInputVisual: !0 });
  i.API.events.push(["postProcessText", function(a) {
    var u = a.text, o = (a.x, a.y, a.options || {}), f = (a.mutex, o.lang, []);
    if (o.isInputVisual = typeof o.isInputVisual != "boolean" || o.isInputVisual, r.setOptions(o), Object.prototype.toString.call(u) === "[object Array]") {
      var h = 0;
      for (f = [], h = 0; h < u.length; h += 1) Object.prototype.toString.call(u[h]) === "[object Array]" ? f.push([r.doBidiReorder(u[h][0]), u[h][1], u[h][2]]) : f.push([r.doBidiReorder(u[h])]);
      a.text = f;
    } else a.text = r.doBidiReorder(u);
    r.setOptions({ isInputVisual: !0 });
  }]);
}(Yt), Yt.API.TTFFont = function() {
  function i(e) {
    var r;
    if (this.rawData = e, r = this.contents = new Jn(e), this.contents.pos = 4, r.readString(4) === "ttcf") throw new Error("TTCF not supported.");
    r.pos = 0, this.parse(), this.subset = new pf(this), this.registerTTF();
  }
  return i.open = function(e) {
    return new i(e);
  }, i.prototype.parse = function() {
    return this.directory = new Ql(this.contents), this.head = new ef(this), this.name = new sf(this), this.cmap = new qu(this), this.toUnicode = {}, this.hhea = new rf(this), this.maxp = new uf(this), this.hmtx = new lf(this), this.post = new af(this), this.os2 = new nf(this), this.loca = new df(this), this.glyf = new ff(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax];
  }, i.prototype.registerTTF = function() {
    var e, r, a, u, o;
    if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = (function() {
      var f, h, c, g;
      for (g = [], f = 0, h = (c = this.bbox).length; f < h; f++) e = c[f], g.push(Math.round(e * this.scaleFactor));
      return g;
    }).call(this), this.stemV = 0, this.post.exists ? (a = 255 & (u = this.post.italic_angle), 32768 & (r = u >> 16) && (r = -(1 + (65535 ^ r))), this.italicAngle = +(r + "." + a)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = (o = this.familyClass) === 1 || o === 2 || o === 3 || o === 4 || o === 5 || o === 7, this.isScript = this.familyClass === 10, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), this.italicAngle !== 0 && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font");
  }, i.prototype.characterToGlyph = function(e) {
    var r;
    return ((r = this.cmap.unicode) != null ? r.codeMap[e] : void 0) || 0;
  }, i.prototype.widthOfGlyph = function(e) {
    var r;
    return r = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(e).advance * r;
  }, i.prototype.widthOfString = function(e, r, a) {
    var u, o, f, h;
    for (f = 0, o = 0, h = (e = "" + e).length; 0 <= h ? o < h : o > h; o = 0 <= h ? ++o : --o) u = e.charCodeAt(o), f += this.widthOfGlyph(this.characterToGlyph(u)) + a * (1e3 / r) || 0;
    return f * (r / 1e3);
  }, i.prototype.lineHeight = function(e, r) {
    var a;
    return r == null && (r = !1), a = r ? this.lineGap : 0, (this.ascender + a - this.decender) / 1e3 * e;
  }, i;
}();
var un, Jn = function() {
  function i(e) {
    this.data = e ?? [], this.pos = 0, this.length = this.data.length;
  }
  return i.prototype.readByte = function() {
    return this.data[this.pos++];
  }, i.prototype.writeByte = function(e) {
    return this.data[this.pos++] = e;
  }, i.prototype.readUInt32 = function() {
    return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte();
  }, i.prototype.writeUInt32 = function(e) {
    return this.writeByte(e >>> 24 & 255), this.writeByte(e >> 16 & 255), this.writeByte(e >> 8 & 255), this.writeByte(255 & e);
  }, i.prototype.readInt32 = function() {
    var e;
    return (e = this.readUInt32()) >= 2147483648 ? e - 4294967296 : e;
  }, i.prototype.writeInt32 = function(e) {
    return e < 0 && (e += 4294967296), this.writeUInt32(e);
  }, i.prototype.readUInt16 = function() {
    return this.readByte() << 8 | this.readByte();
  }, i.prototype.writeUInt16 = function(e) {
    return this.writeByte(e >> 8 & 255), this.writeByte(255 & e);
  }, i.prototype.readInt16 = function() {
    var e;
    return (e = this.readUInt16()) >= 32768 ? e - 65536 : e;
  }, i.prototype.writeInt16 = function(e) {
    return e < 0 && (e += 65536), this.writeUInt16(e);
  }, i.prototype.readString = function(e) {
    var r, a;
    for (a = [], r = 0; 0 <= e ? r < e : r > e; r = 0 <= e ? ++r : --r) a[r] = String.fromCharCode(this.readByte());
    return a.join("");
  }, i.prototype.writeString = function(e) {
    var r, a, u;
    for (u = [], r = 0, a = e.length; 0 <= a ? r < a : r > a; r = 0 <= a ? ++r : --r) u.push(this.writeByte(e.charCodeAt(r)));
    return u;
  }, i.prototype.readShort = function() {
    return this.readInt16();
  }, i.prototype.writeShort = function(e) {
    return this.writeInt16(e);
  }, i.prototype.readLongLong = function() {
    var e, r, a, u, o, f, h, c;
    return e = this.readByte(), r = this.readByte(), a = this.readByte(), u = this.readByte(), o = this.readByte(), f = this.readByte(), h = this.readByte(), c = this.readByte(), 128 & e ? -1 * (72057594037927940 * (255 ^ e) + 281474976710656 * (255 ^ r) + 1099511627776 * (255 ^ a) + 4294967296 * (255 ^ u) + 16777216 * (255 ^ o) + 65536 * (255 ^ f) + 256 * (255 ^ h) + (255 ^ c) + 1) : 72057594037927940 * e + 281474976710656 * r + 1099511627776 * a + 4294967296 * u + 16777216 * o + 65536 * f + 256 * h + c;
  }, i.prototype.writeLongLong = function(e) {
    var r, a;
    return r = Math.floor(e / 4294967296), a = 4294967295 & e, this.writeByte(r >> 24 & 255), this.writeByte(r >> 16 & 255), this.writeByte(r >> 8 & 255), this.writeByte(255 & r), this.writeByte(a >> 24 & 255), this.writeByte(a >> 16 & 255), this.writeByte(a >> 8 & 255), this.writeByte(255 & a);
  }, i.prototype.readInt = function() {
    return this.readInt32();
  }, i.prototype.writeInt = function(e) {
    return this.writeInt32(e);
  }, i.prototype.read = function(e) {
    var r, a;
    for (r = [], a = 0; 0 <= e ? a < e : a > e; a = 0 <= e ? ++a : --a) r.push(this.readByte());
    return r;
  }, i.prototype.write = function(e) {
    var r, a, u, o;
    for (o = [], a = 0, u = e.length; a < u; a++) r = e[a], o.push(this.writeByte(r));
    return o;
  }, i;
}(), Ql = function() {
  var i;
  function e(r) {
    var a, u, o;
    for (this.scalarType = r.readInt(), this.tableCount = r.readShort(), this.searchRange = r.readShort(), this.entrySelector = r.readShort(), this.rangeShift = r.readShort(), this.tables = {}, u = 0, o = this.tableCount; 0 <= o ? u < o : u > o; u = 0 <= o ? ++u : --u) a = { tag: r.readString(4), checksum: r.readInt(), offset: r.readInt(), length: r.readInt() }, this.tables[a.tag] = a;
  }
  return e.prototype.encode = function(r) {
    var a, u, o, f, h, c, g, P, A, L, d, x, F;
    for (F in d = Object.keys(r).length, c = Math.log(2), A = 16 * Math.floor(Math.log(d) / c), f = Math.floor(A / c), P = 16 * d - A, (u = new Jn()).writeInt(this.scalarType), u.writeShort(d), u.writeShort(A), u.writeShort(f), u.writeShort(P), o = 16 * d, g = u.pos + o, h = null, x = [], r) for (L = r[F], u.writeString(F), u.writeInt(i(L)), u.writeInt(g), u.writeInt(L.length), x = x.concat(L), F === "head" && (h = g), g += L.length; g % 4; ) x.push(0), g++;
    return u.write(x), a = 2981146554 - i(u.data), u.pos = h + 8, u.writeUInt32(a), u.data;
  }, i = function(r) {
    var a, u, o, f;
    for (r = zu.call(r); r.length % 4; ) r.push(0);
    for (o = new Jn(r), u = 0, a = 0, f = r.length; a < f; a = a += 4) u += o.readUInt32();
    return 4294967295 & u;
  }, e;
}(), tf = {}.hasOwnProperty, mn = function(i, e) {
  for (var r in e) tf.call(e, r) && (i[r] = e[r]);
  function a() {
    this.constructor = i;
  }
  return a.prototype = e.prototype, i.prototype = new a(), i.__super__ = e.prototype, i;
};
un = function() {
  function i(e) {
    var r;
    this.file = e, r = this.file.directory.tables[this.tag], this.exists = !!r, r && (this.offset = r.offset, this.length = r.length, this.parse(this.file.contents));
  }
  return i.prototype.parse = function() {
  }, i.prototype.encode = function() {
  }, i.prototype.raw = function() {
    return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null;
  }, i;
}();
var ef = function(i) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return mn(e, un), e.prototype.tag = "head", e.prototype.parse = function(r) {
    return r.pos = this.offset, this.version = r.readInt(), this.revision = r.readInt(), this.checkSumAdjustment = r.readInt(), this.magicNumber = r.readInt(), this.flags = r.readShort(), this.unitsPerEm = r.readShort(), this.created = r.readLongLong(), this.modified = r.readLongLong(), this.xMin = r.readShort(), this.yMin = r.readShort(), this.xMax = r.readShort(), this.yMax = r.readShort(), this.macStyle = r.readShort(), this.lowestRecPPEM = r.readShort(), this.fontDirectionHint = r.readShort(), this.indexToLocFormat = r.readShort(), this.glyphDataFormat = r.readShort();
  }, e.prototype.encode = function(r) {
    var a;
    return (a = new Jn()).writeInt(this.version), a.writeInt(this.revision), a.writeInt(this.checkSumAdjustment), a.writeInt(this.magicNumber), a.writeShort(this.flags), a.writeShort(this.unitsPerEm), a.writeLongLong(this.created), a.writeLongLong(this.modified), a.writeShort(this.xMin), a.writeShort(this.yMin), a.writeShort(this.xMax), a.writeShort(this.yMax), a.writeShort(this.macStyle), a.writeShort(this.lowestRecPPEM), a.writeShort(this.fontDirectionHint), a.writeShort(r), a.writeShort(this.glyphDataFormat), a.data;
  }, e;
}(), wu = function() {
  function i(e, r) {
    var a, u, o, f, h, c, g, P, A, L, d, x, F, E, v, S, C;
    switch (this.platformID = e.readUInt16(), this.encodingID = e.readShort(), this.offset = r + e.readInt(), A = e.pos, e.pos = this.offset, this.format = e.readUInt16(), this.length = e.readUInt16(), this.language = e.readUInt16(), this.isUnicode = this.platformID === 3 && this.encodingID === 1 && this.format === 4 || this.platformID === 0 && this.format === 4, this.codeMap = {}, this.format) {
      case 0:
        for (c = 0; c < 256; ++c) this.codeMap[c] = e.readByte();
        break;
      case 4:
        for (d = e.readUInt16(), L = d / 2, e.pos += 6, o = function() {
          var D, G;
          for (G = [], c = D = 0; 0 <= L ? D < L : D > L; c = 0 <= L ? ++D : --D) G.push(e.readUInt16());
          return G;
        }(), e.pos += 2, F = function() {
          var D, G;
          for (G = [], c = D = 0; 0 <= L ? D < L : D > L; c = 0 <= L ? ++D : --D) G.push(e.readUInt16());
          return G;
        }(), g = function() {
          var D, G;
          for (G = [], c = D = 0; 0 <= L ? D < L : D > L; c = 0 <= L ? ++D : --D) G.push(e.readUInt16());
          return G;
        }(), P = function() {
          var D, G;
          for (G = [], c = D = 0; 0 <= L ? D < L : D > L; c = 0 <= L ? ++D : --D) G.push(e.readUInt16());
          return G;
        }(), u = (this.length - e.pos + this.offset) / 2, h = function() {
          var D, G;
          for (G = [], c = D = 0; 0 <= u ? D < u : D > u; c = 0 <= u ? ++D : --D) G.push(e.readUInt16());
          return G;
        }(), c = v = 0, C = o.length; v < C; c = ++v) for (E = o[c], a = S = x = F[c]; x <= E ? S <= E : S >= E; a = x <= E ? ++S : --S) P[c] === 0 ? f = a + g[c] : (f = h[P[c] / 2 + (a - x) - (L - c)] || 0) !== 0 && (f += g[c]), this.codeMap[a] = 65535 & f;
    }
    e.pos = A;
  }
  return i.encode = function(e, r) {
    var a, u, o, f, h, c, g, P, A, L, d, x, F, E, v, S, C, D, G, $, M, j, Z, Q, N, y, B, z, lt, U, W, K, J, st, gt, m, O, q, V, X, at, ft, dt, _t, xt, Ot;
    switch (z = new Jn(), f = Object.keys(e).sort(function(jt, Gt) {
      return jt - Gt;
    }), r) {
      case "macroman":
        for (F = 0, E = function() {
          var jt = [];
          for (x = 0; x < 256; ++x) jt.push(0);
          return jt;
        }(), S = { 0: 0 }, o = {}, lt = 0, J = f.length; lt < J; lt++) S[dt = e[u = f[lt]]] == null && (S[dt] = ++F), o[u] = { old: e[u], new: S[e[u]] }, E[u] = S[e[u]];
        return z.writeUInt16(1), z.writeUInt16(0), z.writeUInt32(12), z.writeUInt16(0), z.writeUInt16(262), z.writeUInt16(0), z.write(E), { charMap: o, subtable: z.data, maxGlyphID: F + 1 };
      case "unicode":
        for (y = [], A = [], C = 0, S = {}, a = {}, v = g = null, U = 0, st = f.length; U < st; U++) S[G = e[u = f[U]]] == null && (S[G] = ++C), a[u] = { old: G, new: S[G] }, h = S[G] - u, v != null && h === g || (v && A.push(v), y.push(u), g = h), v = u;
        for (v && A.push(v), A.push(65535), y.push(65535), Q = 2 * (Z = y.length), j = 2 * Math.pow(Math.log(Z) / Math.LN2, 2), L = Math.log(j / 2) / Math.LN2, M = 2 * Z - j, c = [], $ = [], d = [], x = W = 0, gt = y.length; W < gt; x = ++W) {
          if (N = y[x], P = A[x], N === 65535) {
            c.push(0), $.push(0);
            break;
          }
          if (N - (B = a[N].new) >= 32768) for (c.push(0), $.push(2 * (d.length + Z - x)), u = K = N; N <= P ? K <= P : K >= P; u = N <= P ? ++K : --K) d.push(a[u].new);
          else c.push(B - N), $.push(0);
        }
        for (z.writeUInt16(3), z.writeUInt16(1), z.writeUInt32(12), z.writeUInt16(4), z.writeUInt16(16 + 8 * Z + 2 * d.length), z.writeUInt16(0), z.writeUInt16(Q), z.writeUInt16(j), z.writeUInt16(L), z.writeUInt16(M), at = 0, m = A.length; at < m; at++) u = A[at], z.writeUInt16(u);
        for (z.writeUInt16(0), ft = 0, O = y.length; ft < O; ft++) u = y[ft], z.writeUInt16(u);
        for (_t = 0, q = c.length; _t < q; _t++) h = c[_t], z.writeUInt16(h);
        for (xt = 0, V = $.length; xt < V; xt++) D = $[xt], z.writeUInt16(D);
        for (Ot = 0, X = d.length; Ot < X; Ot++) F = d[Ot], z.writeUInt16(F);
        return { charMap: a, subtable: z.data, maxGlyphID: C + 1 };
    }
  }, i;
}(), qu = function(i) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return mn(e, un), e.prototype.tag = "cmap", e.prototype.parse = function(r) {
    var a, u, o;
    for (r.pos = this.offset, this.version = r.readUInt16(), o = r.readUInt16(), this.tables = [], this.unicode = null, u = 0; 0 <= o ? u < o : u > o; u = 0 <= o ? ++u : --u) a = new wu(r, this.offset), this.tables.push(a), a.isUnicode && this.unicode == null && (this.unicode = a);
    return !0;
  }, e.encode = function(r, a) {
    var u, o;
    return a == null && (a = "macroman"), u = wu.encode(r, a), (o = new Jn()).writeUInt16(0), o.writeUInt16(1), u.table = o.data.concat(u.subtable), u;
  }, e;
}(), rf = function(i) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return mn(e, un), e.prototype.tag = "hhea", e.prototype.parse = function(r) {
    return r.pos = this.offset, this.version = r.readInt(), this.ascender = r.readShort(), this.decender = r.readShort(), this.lineGap = r.readShort(), this.advanceWidthMax = r.readShort(), this.minLeftSideBearing = r.readShort(), this.minRightSideBearing = r.readShort(), this.xMaxExtent = r.readShort(), this.caretSlopeRise = r.readShort(), this.caretSlopeRun = r.readShort(), this.caretOffset = r.readShort(), r.pos += 8, this.metricDataFormat = r.readShort(), this.numberOfMetrics = r.readUInt16();
  }, e;
}(), nf = function(i) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return mn(e, un), e.prototype.tag = "OS/2", e.prototype.parse = function(r) {
    if (r.pos = this.offset, this.version = r.readUInt16(), this.averageCharWidth = r.readShort(), this.weightClass = r.readUInt16(), this.widthClass = r.readUInt16(), this.type = r.readShort(), this.ySubscriptXSize = r.readShort(), this.ySubscriptYSize = r.readShort(), this.ySubscriptXOffset = r.readShort(), this.ySubscriptYOffset = r.readShort(), this.ySuperscriptXSize = r.readShort(), this.ySuperscriptYSize = r.readShort(), this.ySuperscriptXOffset = r.readShort(), this.ySuperscriptYOffset = r.readShort(), this.yStrikeoutSize = r.readShort(), this.yStrikeoutPosition = r.readShort(), this.familyClass = r.readShort(), this.panose = function() {
      var a, u;
      for (u = [], a = 0; a < 10; ++a) u.push(r.readByte());
      return u;
    }(), this.charRange = function() {
      var a, u;
      for (u = [], a = 0; a < 4; ++a) u.push(r.readInt());
      return u;
    }(), this.vendorID = r.readString(4), this.selection = r.readShort(), this.firstCharIndex = r.readShort(), this.lastCharIndex = r.readShort(), this.version > 0 && (this.ascent = r.readShort(), this.descent = r.readShort(), this.lineGap = r.readShort(), this.winAscent = r.readShort(), this.winDescent = r.readShort(), this.codePageRange = function() {
      var a, u;
      for (u = [], a = 0; a < 2; a = ++a) u.push(r.readInt());
      return u;
    }(), this.version > 1)) return this.xHeight = r.readShort(), this.capHeight = r.readShort(), this.defaultChar = r.readShort(), this.breakChar = r.readShort(), this.maxContext = r.readShort();
  }, e;
}(), af = function(i) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return mn(e, un), e.prototype.tag = "post", e.prototype.parse = function(r) {
    var a, u, o;
    switch (r.pos = this.offset, this.format = r.readInt(), this.italicAngle = r.readInt(), this.underlinePosition = r.readShort(), this.underlineThickness = r.readShort(), this.isFixedPitch = r.readInt(), this.minMemType42 = r.readInt(), this.maxMemType42 = r.readInt(), this.minMemType1 = r.readInt(), this.maxMemType1 = r.readInt(), this.format) {
      case 65536:
        break;
      case 131072:
        var f;
        for (u = r.readUInt16(), this.glyphNameIndex = [], f = 0; 0 <= u ? f < u : f > u; f = 0 <= u ? ++f : --f) this.glyphNameIndex.push(r.readUInt16());
        for (this.names = [], o = []; r.pos < this.offset + this.length; ) a = r.readByte(), o.push(this.names.push(r.readString(a)));
        return o;
      case 151552:
        return u = r.readUInt16(), this.offsets = r.read(u);
      case 196608:
        break;
      case 262144:
        return this.map = (function() {
          var h, c, g;
          for (g = [], f = h = 0, c = this.file.maxp.numGlyphs; 0 <= c ? h < c : h > c; f = 0 <= c ? ++h : --h) g.push(r.readUInt32());
          return g;
        }).call(this);
    }
  }, e;
}(), of = function(i, e) {
  this.raw = i, this.length = i.length, this.platformID = e.platformID, this.encodingID = e.encodingID, this.languageID = e.languageID;
}, sf = function(i) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return mn(e, un), e.prototype.tag = "name", e.prototype.parse = function(r) {
    var a, u, o, f, h, c, g, P, A, L, d;
    for (r.pos = this.offset, r.readShort(), a = r.readShort(), c = r.readShort(), u = [], f = 0; 0 <= a ? f < a : f > a; f = 0 <= a ? ++f : --f) u.push({ platformID: r.readShort(), encodingID: r.readShort(), languageID: r.readShort(), nameID: r.readShort(), length: r.readShort(), offset: this.offset + c + r.readShort() });
    for (g = {}, f = A = 0, L = u.length; A < L; f = ++A) o = u[f], r.pos = o.offset, P = r.readString(o.length), h = new of(P, o), g[d = o.nameID] == null && (g[d] = []), g[o.nameID].push(h);
    this.strings = g, this.copyright = g[0], this.fontFamily = g[1], this.fontSubfamily = g[2], this.uniqueSubfamily = g[3], this.fontName = g[4], this.version = g[5];
    try {
      this.postscriptName = g[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
    } catch {
      this.postscriptName = g[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
    }
    return this.trademark = g[7], this.manufacturer = g[8], this.designer = g[9], this.description = g[10], this.vendorUrl = g[11], this.designerUrl = g[12], this.license = g[13], this.licenseUrl = g[14], this.preferredFamily = g[15], this.preferredSubfamily = g[17], this.compatibleFull = g[18], this.sampleText = g[19];
  }, e;
}(), uf = function(i) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return mn(e, un), e.prototype.tag = "maxp", e.prototype.parse = function(r) {
    return r.pos = this.offset, this.version = r.readInt(), this.numGlyphs = r.readUInt16(), this.maxPoints = r.readUInt16(), this.maxContours = r.readUInt16(), this.maxCompositePoints = r.readUInt16(), this.maxComponentContours = r.readUInt16(), this.maxZones = r.readUInt16(), this.maxTwilightPoints = r.readUInt16(), this.maxStorage = r.readUInt16(), this.maxFunctionDefs = r.readUInt16(), this.maxInstructionDefs = r.readUInt16(), this.maxStackElements = r.readUInt16(), this.maxSizeOfInstructions = r.readUInt16(), this.maxComponentElements = r.readUInt16(), this.maxComponentDepth = r.readUInt16();
  }, e;
}(), lf = function(i) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return mn(e, un), e.prototype.tag = "hmtx", e.prototype.parse = function(r) {
    var a, u, o, f, h, c, g;
    for (r.pos = this.offset, this.metrics = [], a = 0, c = this.file.hhea.numberOfMetrics; 0 <= c ? a < c : a > c; a = 0 <= c ? ++a : --a) this.metrics.push({ advance: r.readUInt16(), lsb: r.readInt16() });
    for (o = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = function() {
      var P, A;
      for (A = [], a = P = 0; 0 <= o ? P < o : P > o; a = 0 <= o ? ++P : --P) A.push(r.readInt16());
      return A;
    }(), this.widths = (function() {
      var P, A, L, d;
      for (d = [], P = 0, A = (L = this.metrics).length; P < A; P++) f = L[P], d.push(f.advance);
      return d;
    }).call(this), u = this.widths[this.widths.length - 1], g = [], a = h = 0; 0 <= o ? h < o : h > o; a = 0 <= o ? ++h : --h) g.push(this.widths.push(u));
    return g;
  }, e.prototype.forGlyph = function(r) {
    return r in this.metrics ? this.metrics[r] : { advance: this.metrics[this.metrics.length - 1].advance, lsb: this.leftSideBearings[r - this.metrics.length] };
  }, e;
}(), zu = [].slice, ff = function(i) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return mn(e, un), e.prototype.tag = "glyf", e.prototype.parse = function() {
    return this.cache = {};
  }, e.prototype.glyphFor = function(r) {
    var a, u, o, f, h, c, g, P, A, L;
    return r in this.cache ? this.cache[r] : (f = this.file.loca, a = this.file.contents, u = f.indexOf(r), (o = f.lengthOf(r)) === 0 ? this.cache[r] = null : (a.pos = this.offset + u, h = (c = new Jn(a.read(o))).readShort(), P = c.readShort(), L = c.readShort(), g = c.readShort(), A = c.readShort(), this.cache[r] = h === -1 ? new hf(c, P, L, g, A) : new cf(c, h, P, L, g, A), this.cache[r]));
  }, e.prototype.encode = function(r, a, u) {
    var o, f, h, c, g;
    for (h = [], f = [], c = 0, g = a.length; c < g; c++) o = r[a[c]], f.push(h.length), o && (h = h.concat(o.encode(u)));
    return f.push(h.length), { table: h, offsets: f };
  }, e;
}(), cf = function() {
  function i(e, r, a, u, o, f) {
    this.raw = e, this.numberOfContours = r, this.xMin = a, this.yMin = u, this.xMax = o, this.yMax = f, this.compound = !1;
  }
  return i.prototype.encode = function() {
    return this.raw.data;
  }, i;
}(), hf = function() {
  function i(e, r, a, u, o) {
    var f, h;
    for (this.raw = e, this.xMin = r, this.yMin = a, this.xMax = u, this.yMax = o, this.compound = !0, this.glyphIDs = [], this.glyphOffsets = [], f = this.raw; h = f.readShort(), this.glyphOffsets.push(f.pos), this.glyphIDs.push(f.readUInt16()), 32 & h; ) f.pos += 1 & h ? 4 : 2, 128 & h ? f.pos += 8 : 64 & h ? f.pos += 4 : 8 & h && (f.pos += 2);
  }
  return i.prototype.encode = function() {
    var e, r, a;
    for (r = new Jn(zu.call(this.raw.data)), e = 0, a = this.glyphIDs.length; e < a; ++e) r.pos = this.glyphOffsets[e];
    return r.data;
  }, i;
}(), df = function(i) {
  function e() {
    return e.__super__.constructor.apply(this, arguments);
  }
  return mn(e, un), e.prototype.tag = "loca", e.prototype.parse = function(r) {
    var a, u;
    return r.pos = this.offset, a = this.file.head.indexToLocFormat, this.offsets = a === 0 ? (function() {
      var o, f;
      for (f = [], u = 0, o = this.length; u < o; u += 2) f.push(2 * r.readUInt16());
      return f;
    }).call(this) : (function() {
      var o, f;
      for (f = [], u = 0, o = this.length; u < o; u += 4) f.push(r.readUInt32());
      return f;
    }).call(this);
  }, e.prototype.indexOf = function(r) {
    return this.offsets[r];
  }, e.prototype.lengthOf = function(r) {
    return this.offsets[r + 1] - this.offsets[r];
  }, e.prototype.encode = function(r, a) {
    for (var u = new Uint32Array(this.offsets.length), o = 0, f = 0, h = 0; h < u.length; ++h) if (u[h] = o, f < a.length && a[f] == h) {
      ++f, u[h] = o;
      var c = this.offsets[h], g = this.offsets[h + 1] - c;
      g > 0 && (o += g);
    }
    for (var P = new Array(4 * u.length), A = 0; A < u.length; ++A) P[4 * A + 3] = 255 & u[A], P[4 * A + 2] = (65280 & u[A]) >> 8, P[4 * A + 1] = (16711680 & u[A]) >> 16, P[4 * A] = (4278190080 & u[A]) >> 24;
    return P;
  }, e;
}(), pf = function() {
  function i(e) {
    this.font = e, this.subset = {}, this.unicodes = {}, this.next = 33;
  }
  return i.prototype.generateCmap = function() {
    var e, r, a, u, o;
    for (r in u = this.font.cmap.tables[0].codeMap, e = {}, o = this.subset) a = o[r], e[r] = u[a];
    return e;
  }, i.prototype.glyphsFor = function(e) {
    var r, a, u, o, f, h, c;
    for (u = {}, f = 0, h = e.length; f < h; f++) u[o = e[f]] = this.font.glyf.glyphFor(o);
    for (o in r = [], u) (a = u[o]) != null && a.compound && r.push.apply(r, a.glyphIDs);
    if (r.length > 0) for (o in c = this.glyphsFor(r)) a = c[o], u[o] = a;
    return u;
  }, i.prototype.encode = function(e, r) {
    var a, u, o, f, h, c, g, P, A, L, d, x, F, E, v;
    for (u in a = qu.encode(this.generateCmap(), "unicode"), f = this.glyphsFor(e), d = { 0: 0 }, v = a.charMap) d[(c = v[u]).old] = c.new;
    for (x in L = a.maxGlyphID, f) x in d || (d[x] = L++);
    return P = function(S) {
      var C, D;
      for (C in D = {}, S) D[S[C]] = C;
      return D;
    }(d), A = Object.keys(P).sort(function(S, C) {
      return S - C;
    }), F = function() {
      var S, C, D;
      for (D = [], S = 0, C = A.length; S < C; S++) h = A[S], D.push(P[h]);
      return D;
    }(), o = this.font.glyf.encode(f, F, d), g = this.font.loca.encode(o.offsets, F), E = { cmap: this.font.cmap.raw(), glyf: o.table, loca: g, hmtx: this.font.hmtx.raw(), hhea: this.font.hhea.raw(), maxp: this.font.maxp.raw(), post: this.font.post.raw(), name: this.font.name.raw(), head: this.font.head.encode(r) }, this.font.os2.exists && (E["OS/2"] = this.font.os2.raw()), this.font.directory.encode(E);
  }, i;
}();
Yt.API.PDFObject = function() {
  var i;
  function e() {
  }
  return i = function(r, a) {
    return (Array(a + 1).join("0") + r).slice(-a);
  }, e.convert = function(r) {
    var a, u, o, f;
    if (Array.isArray(r)) return "[" + function() {
      var h, c, g;
      for (g = [], h = 0, c = r.length; h < c; h++) a = r[h], g.push(e.convert(a));
      return g;
    }().join(" ") + "]";
    if (typeof r == "string") return "/" + r;
    if (r != null && r.isString) return "(" + r + ")";
    if (r instanceof Date) return "(D:" + i(r.getUTCFullYear(), 4) + i(r.getUTCMonth(), 2) + i(r.getUTCDate(), 2) + i(r.getUTCHours(), 2) + i(r.getUTCMinutes(), 2) + i(r.getUTCSeconds(), 2) + "Z)";
    if ({}.toString.call(r) === "[object Object]") {
      for (u in o = ["<<"], r) f = r[u], o.push("/" + u + " " + e.convert(f));
      return o.push(">>"), o.join(`
`);
    }
    return "" + r;
  }, e;
}();
const gf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, AcroForm: Gl, AcroFormAppearance: Rt, AcroFormButton: Ze, AcroFormCheckBox: Aa, AcroFormChoiceField: fi, AcroFormComboBox: hi, AcroFormEditBox: ya, AcroFormListBox: ci, AcroFormPasswordField: La, AcroFormPushButton: wa, AcroFormRadioButton: di, AcroFormTextField: Yn, GState: Na, ShadingPattern: Wn, TilingPattern: li, default: Yt, jsPDF: Yt }, Symbol.toStringTag, { value: "Module" }));
var yo = { exports: {} };
const mf = /* @__PURE__ */ kl(gf);
/*!
* 
*               jsPDF AutoTable plugin v3.8.4
*
*               Copyright (c) 2024 Simon Bengtsson, https://github.com/simonbengtsson/jsPDF-AutoTable
*               Licensed under the MIT License.
*               http://opensource.org/licenses/mit-license
*
*/
var Au = yo.exports, Lu;
function vf() {
  return Lu || (Lu = 1, function(i, e) {
    (function(a, u) {
      i.exports = u(function() {
        try {
          return mf;
        } catch {
        }
      }());
    })(typeof globalThis < "u" ? globalThis : typeof Au < "u" ? Au : typeof window < "u" ? window : typeof self < "u" ? self : Cl, function(r) {
      return (
        /******/
        function() {
          var a = {
            /***/
            172: (
              /***/
              function(h, c) {
                var g = this && this.__extends || /* @__PURE__ */ function() {
                  var L = function(d, x) {
                    return L = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(F, E) {
                      F.__proto__ = E;
                    } || function(F, E) {
                      for (var v in E) Object.prototype.hasOwnProperty.call(E, v) && (F[v] = E[v]);
                    }, L(d, x);
                  };
                  return function(d, x) {
                    if (typeof x != "function" && x !== null)
                      throw new TypeError("Class extends value " + String(x) + " is not a constructor or null");
                    L(d, x);
                    function F() {
                      this.constructor = d;
                    }
                    d.prototype = x === null ? Object.create(x) : (F.prototype = x.prototype, new F());
                  };
                }();
                Object.defineProperty(c, "__esModule", { value: !0 }), c.CellHookData = c.HookData = void 0;
                var P = (
                  /** @class */
                  /* @__PURE__ */ function() {
                    function L(d, x, F) {
                      this.table = x, this.pageNumber = x.pageNumber, this.pageCount = this.pageNumber, this.settings = x.settings, this.cursor = F, this.doc = d.getDocument();
                    }
                    return L;
                  }()
                );
                c.HookData = P;
                var A = (
                  /** @class */
                  function(L) {
                    g(d, L);
                    function d(x, F, E, v, S, C) {
                      var D = L.call(this, x, F, C) || this;
                      return D.cell = E, D.row = v, D.column = S, D.section = v.section, D;
                    }
                    return d;
                  }(P)
                );
                c.CellHookData = A;
              }
            ),
            /***/
            340: (
              /***/
              function(h, c, g) {
                Object.defineProperty(c, "__esModule", { value: !0 });
                var P = g(4), A = g(136), L = g(744), d = g(776), x = g(664), F = g(972);
                function E(v) {
                  v.API.autoTable = function() {
                    for (var S = [], C = 0; C < arguments.length; C++)
                      S[C] = arguments[C];
                    var D;
                    S.length === 1 ? D = S[0] : (console.error("Use of deprecated autoTable initiation"), D = S[2] || {}, D.columns = S[0], D.body = S[1]);
                    var G = (0, d.parseInput)(this, D), $ = (0, F.createTable)(this, G);
                    return (0, x.drawTable)(this, $), this;
                  }, v.API.lastAutoTable = !1, v.API.previousAutoTable = !1, v.API.autoTable.previous = !1, v.API.autoTableText = function(S, C, D, G) {
                    (0, A.default)(S, C, D, G, this);
                  }, v.API.autoTableSetDefaults = function(S) {
                    return L.DocHandler.setDefaults(S, this), this;
                  }, v.autoTableSetDefaults = function(S, C) {
                    L.DocHandler.setDefaults(S, C);
                  }, v.API.autoTableHtmlToJson = function(S, C) {
                    var D;
                    if (C === void 0 && (C = !1), typeof window > "u")
                      return console.error("Cannot run autoTableHtmlToJson in non browser environment"), null;
                    var G = new L.DocHandler(this), $ = (0, P.parseHtml)(G, S, window, C, !1), M = $.head, j = $.body, Z = ((D = M[0]) === null || D === void 0 ? void 0 : D.map(function(Q) {
                      return Q.content;
                    })) || [];
                    return { columns: Z, rows: j, data: j };
                  }, v.API.autoTableEndPosY = function() {
                    console.error("Use of deprecated function: autoTableEndPosY. Use doc.lastAutoTable.finalY instead.");
                    var S = this.lastAutoTable;
                    return S && S.finalY ? S.finalY : 0;
                  }, v.API.autoTableAddPageContent = function(S) {
                    return console.error("Use of deprecated function: autoTableAddPageContent. Use jsPDF.autoTableSetDefaults({didDrawPage: () => {}}) instead."), v.API.autoTable.globalDefaults || (v.API.autoTable.globalDefaults = {}), v.API.autoTable.globalDefaults.addPageContent = S, this;
                  }, v.API.autoTableAddPage = function() {
                    return console.error("Use of deprecated function: autoTableAddPage. Use doc.addPage()"), this.addPage(), this;
                  };
                }
                c.default = E;
              }
            ),
            /***/
            136: (
              /***/
              function(h, c) {
                Object.defineProperty(c, "__esModule", { value: !0 });
                function g(P, A, L, d, x) {
                  d = d || {};
                  var F = 1.15, E = x.internal.scaleFactor, v = x.internal.getFontSize() / E, S = x.getLineHeightFactor ? x.getLineHeightFactor() : F, C = v * S, D = /\r\n|\r|\n/g, G = "", $ = 1;
                  if ((d.valign === "middle" || d.valign === "bottom" || d.halign === "center" || d.halign === "right") && (G = typeof P == "string" ? P.split(D) : P, $ = G.length || 1), L += v * (2 - F), d.valign === "middle" ? L -= $ / 2 * C : d.valign === "bottom" && (L -= $ * C), d.halign === "center" || d.halign === "right") {
                    var M = v;
                    if (d.halign === "center" && (M *= 0.5), G && $ >= 1) {
                      for (var j = 0; j < G.length; j++)
                        x.text(G[j], A - x.getStringUnitWidth(G[j]) * M, L), L += C;
                      return x;
                    }
                    A -= x.getStringUnitWidth(P) * M;
                  }
                  return d.halign === "justify" ? x.text(P, A, L, {
                    maxWidth: d.maxWidth || 100,
                    align: "justify"
                  }) : x.text(P, A, L), x;
                }
                c.default = g;
              }
            ),
            /***/
            420: (
              /***/
              function(h, c) {
                Object.defineProperty(c, "__esModule", { value: !0 }), c.getPageAvailableWidth = c.parseSpacing = c.getFillStyle = c.addTableBorder = c.getStringWidth = void 0;
                function g(x, F, E) {
                  E.applyStyles(F, !0);
                  var v = Array.isArray(x) ? x : [x], S = v.map(function(C) {
                    return E.getTextWidth(C);
                  }).reduce(function(C, D) {
                    return Math.max(C, D);
                  }, 0);
                  return S;
                }
                c.getStringWidth = g;
                function P(x, F, E, v) {
                  var S = F.settings.tableLineWidth, C = F.settings.tableLineColor;
                  x.applyStyles({ lineWidth: S, lineColor: C });
                  var D = A(S, !1);
                  D && x.rect(E.x, E.y, F.getWidth(x.pageSize().width), v.y - E.y, D);
                }
                c.addTableBorder = P;
                function A(x, F) {
                  var E = x > 0, v = F || F === 0;
                  return E && v ? "DF" : E ? "S" : v ? "F" : null;
                }
                c.getFillStyle = A;
                function L(x, F) {
                  var E, v, S, C;
                  if (x = x || F, Array.isArray(x)) {
                    if (x.length >= 4)
                      return {
                        top: x[0],
                        right: x[1],
                        bottom: x[2],
                        left: x[3]
                      };
                    if (x.length === 3)
                      return {
                        top: x[0],
                        right: x[1],
                        bottom: x[2],
                        left: x[1]
                      };
                    if (x.length === 2)
                      return {
                        top: x[0],
                        right: x[1],
                        bottom: x[0],
                        left: x[1]
                      };
                    x.length === 1 ? x = x[0] : x = F;
                  }
                  return typeof x == "object" ? (typeof x.vertical == "number" && (x.top = x.vertical, x.bottom = x.vertical), typeof x.horizontal == "number" && (x.right = x.horizontal, x.left = x.horizontal), {
                    left: (E = x.left) !== null && E !== void 0 ? E : F,
                    top: (v = x.top) !== null && v !== void 0 ? v : F,
                    right: (S = x.right) !== null && S !== void 0 ? S : F,
                    bottom: (C = x.bottom) !== null && C !== void 0 ? C : F
                  }) : (typeof x != "number" && (x = F), { top: x, right: x, bottom: x, left: x });
                }
                c.parseSpacing = L;
                function d(x, F) {
                  var E = L(F.settings.margin, 0);
                  return x.pageSize().width - (E.left + E.right);
                }
                c.getPageAvailableWidth = d;
              }
            ),
            /***/
            796: (
              /***/
              function(h, c) {
                var g = this && this.__extends || /* @__PURE__ */ function() {
                  var d = function(x, F) {
                    return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(E, v) {
                      E.__proto__ = v;
                    } || function(E, v) {
                      for (var S in v) Object.prototype.hasOwnProperty.call(v, S) && (E[S] = v[S]);
                    }, d(x, F);
                  };
                  return function(x, F) {
                    if (typeof F != "function" && F !== null)
                      throw new TypeError("Class extends value " + String(F) + " is not a constructor or null");
                    d(x, F);
                    function E() {
                      this.constructor = x;
                    }
                    x.prototype = F === null ? Object.create(F) : (E.prototype = F.prototype, new E());
                  };
                }();
                Object.defineProperty(c, "__esModule", { value: !0 }), c.getTheme = c.defaultStyles = c.HtmlRowInput = void 0;
                var P = (
                  /** @class */
                  function(d) {
                    g(x, d);
                    function x(F) {
                      var E = d.call(this) || this;
                      return E._element = F, E;
                    }
                    return x;
                  }(Array)
                );
                c.HtmlRowInput = P;
                function A(d) {
                  return {
                    font: "helvetica",
                    // helvetica, times, courier
                    fontStyle: "normal",
                    // normal, bold, italic, bolditalic
                    overflow: "linebreak",
                    // linebreak, ellipsize, visible or hidden
                    fillColor: !1,
                    // Either false for transparent, rbg array e.g. [255, 255, 255] or gray level e.g 200
                    textColor: 20,
                    halign: "left",
                    // left, center, right, justify
                    valign: "top",
                    // top, middle, bottom
                    fontSize: 10,
                    cellPadding: 5 / d,
                    // number or {top,left,right,left,vertical,horizontal}
                    lineColor: 200,
                    lineWidth: 0,
                    cellWidth: "auto",
                    // 'auto'|'wrap'|number
                    minCellHeight: 0,
                    minCellWidth: 0
                  };
                }
                c.defaultStyles = A;
                function L(d) {
                  var x = {
                    striped: {
                      table: { fillColor: 255, textColor: 80, fontStyle: "normal" },
                      head: { textColor: 255, fillColor: [41, 128, 185], fontStyle: "bold" },
                      body: {},
                      foot: { textColor: 255, fillColor: [41, 128, 185], fontStyle: "bold" },
                      alternateRow: { fillColor: 245 }
                    },
                    grid: {
                      table: {
                        fillColor: 255,
                        textColor: 80,
                        fontStyle: "normal",
                        lineWidth: 0.1
                      },
                      head: {
                        textColor: 255,
                        fillColor: [26, 188, 156],
                        fontStyle: "bold",
                        lineWidth: 0
                      },
                      body: {},
                      foot: {
                        textColor: 255,
                        fillColor: [26, 188, 156],
                        fontStyle: "bold",
                        lineWidth: 0
                      },
                      alternateRow: {}
                    },
                    plain: {
                      head: { fontStyle: "bold" },
                      foot: { fontStyle: "bold" }
                    }
                  };
                  return x[d];
                }
                c.getTheme = L;
              }
            ),
            /***/
            903: (
              /***/
              function(h, c, g) {
                Object.defineProperty(c, "__esModule", { value: !0 }), c.parseCss = void 0;
                var P = g(420);
                function A(E, v, S, C, D) {
                  var G = {}, $ = 1.3333333333333333, M = d(v, function(J) {
                    return D.getComputedStyle(J).backgroundColor;
                  });
                  M != null && (G.fillColor = M);
                  var j = d(v, function(J) {
                    return D.getComputedStyle(J).color;
                  });
                  j != null && (G.textColor = j);
                  var Z = F(C, S);
                  Z && (G.cellPadding = Z);
                  var Q = "borderTopColor", N = $ * S, y = C.borderTopWidth;
                  if (C.borderBottomWidth === y && C.borderRightWidth === y && C.borderLeftWidth === y) {
                    var B = (parseFloat(y) || 0) / N;
                    B && (G.lineWidth = B);
                  } else
                    G.lineWidth = {
                      top: (parseFloat(C.borderTopWidth) || 0) / N,
                      right: (parseFloat(C.borderRightWidth) || 0) / N,
                      bottom: (parseFloat(C.borderBottomWidth) || 0) / N,
                      left: (parseFloat(C.borderLeftWidth) || 0) / N
                    }, G.lineWidth.top || (G.lineWidth.right ? Q = "borderRightColor" : G.lineWidth.bottom ? Q = "borderBottomColor" : G.lineWidth.left && (Q = "borderLeftColor"));
                  var z = d(v, function(J) {
                    return D.getComputedStyle(J)[Q];
                  });
                  z != null && (G.lineColor = z);
                  var lt = ["left", "right", "center", "justify"];
                  lt.indexOf(C.textAlign) !== -1 && (G.halign = C.textAlign), lt = ["middle", "bottom", "top"], lt.indexOf(C.verticalAlign) !== -1 && (G.valign = C.verticalAlign);
                  var U = parseInt(C.fontSize || "");
                  isNaN(U) || (G.fontSize = U / $);
                  var W = L(C);
                  W && (G.fontStyle = W);
                  var K = (C.fontFamily || "").toLowerCase();
                  return E.indexOf(K) !== -1 && (G.font = K), G;
                }
                c.parseCss = A;
                function L(E) {
                  var v = "";
                  return (E.fontWeight === "bold" || E.fontWeight === "bolder" || parseInt(E.fontWeight) >= 700) && (v = "bold"), (E.fontStyle === "italic" || E.fontStyle === "oblique") && (v += "italic"), v;
                }
                function d(E, v) {
                  var S = x(E, v);
                  if (!S)
                    return null;
                  var C = S.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);
                  if (!C || !Array.isArray(C))
                    return null;
                  var D = [
                    parseInt(C[1]),
                    parseInt(C[2]),
                    parseInt(C[3])
                  ], G = parseInt(C[4]);
                  return G === 0 || isNaN(D[0]) || isNaN(D[1]) || isNaN(D[2]) ? null : D;
                }
                function x(E, v) {
                  var S = v(E);
                  return S === "rgba(0, 0, 0, 0)" || S === "transparent" || S === "initial" || S === "inherit" ? E.parentElement == null ? null : x(E.parentElement, v) : S;
                }
                function F(E, v) {
                  var S = [
                    E.paddingTop,
                    E.paddingRight,
                    E.paddingBottom,
                    E.paddingLeft
                  ], C = 96 / (72 / v), D = (parseInt(E.lineHeight) - parseInt(E.fontSize)) / v / 2, G = S.map(function(M) {
                    return parseInt(M || "0") / C;
                  }), $ = (0, P.parseSpacing)(G, 0);
                  return D > $.top && ($.top = D), D > $.bottom && ($.bottom = D), $;
                }
              }
            ),
            /***/
            744: (
              /***/
              function(h, c) {
                Object.defineProperty(c, "__esModule", { value: !0 }), c.DocHandler = void 0;
                var g = {}, P = (
                  /** @class */
                  function() {
                    function A(L) {
                      this.jsPDFDocument = L, this.userStyles = {
                        // Black for versions of jspdf without getTextColor
                        textColor: L.getTextColor ? this.jsPDFDocument.getTextColor() : 0,
                        fontSize: L.internal.getFontSize(),
                        fontStyle: L.internal.getFont().fontStyle,
                        font: L.internal.getFont().fontName,
                        // 0 for versions of jspdf without getLineWidth
                        lineWidth: L.getLineWidth ? this.jsPDFDocument.getLineWidth() : 0,
                        // Black for versions of jspdf without getDrawColor
                        lineColor: L.getDrawColor ? this.jsPDFDocument.getDrawColor() : 0
                      };
                    }
                    return A.setDefaults = function(L, d) {
                      d === void 0 && (d = null), d ? d.__autoTableDocumentDefaults = L : g = L;
                    }, A.unifyColor = function(L) {
                      return Array.isArray(L) ? L : typeof L == "number" ? [L, L, L] : typeof L == "string" ? [L] : null;
                    }, A.prototype.applyStyles = function(L, d) {
                      var x, F, E;
                      d === void 0 && (d = !1), L.fontStyle && this.jsPDFDocument.setFontStyle && this.jsPDFDocument.setFontStyle(L.fontStyle);
                      var v = this.jsPDFDocument.internal.getFont(), S = v.fontStyle, C = v.fontName;
                      if (L.font && (C = L.font), L.fontStyle) {
                        S = L.fontStyle;
                        var D = this.getFontList()[C];
                        D && D.indexOf(S) === -1 && (this.jsPDFDocument.setFontStyle && this.jsPDFDocument.setFontStyle(D[0]), S = D[0]);
                      }
                      if (this.jsPDFDocument.setFont(C, S), L.fontSize && this.jsPDFDocument.setFontSize(L.fontSize), !d) {
                        var G = A.unifyColor(L.fillColor);
                        G && (x = this.jsPDFDocument).setFillColor.apply(x, G), G = A.unifyColor(L.textColor), G && (F = this.jsPDFDocument).setTextColor.apply(F, G), G = A.unifyColor(L.lineColor), G && (E = this.jsPDFDocument).setDrawColor.apply(E, G), typeof L.lineWidth == "number" && this.jsPDFDocument.setLineWidth(L.lineWidth);
                      }
                    }, A.prototype.splitTextToSize = function(L, d, x) {
                      return this.jsPDFDocument.splitTextToSize(L, d, x);
                    }, A.prototype.rect = function(L, d, x, F, E) {
                      return this.jsPDFDocument.rect(L, d, x, F, E);
                    }, A.prototype.getLastAutoTable = function() {
                      return this.jsPDFDocument.lastAutoTable || null;
                    }, A.prototype.getTextWidth = function(L) {
                      return this.jsPDFDocument.getTextWidth(L);
                    }, A.prototype.getDocument = function() {
                      return this.jsPDFDocument;
                    }, A.prototype.setPage = function(L) {
                      this.jsPDFDocument.setPage(L);
                    }, A.prototype.addPage = function() {
                      return this.jsPDFDocument.addPage();
                    }, A.prototype.getFontList = function() {
                      return this.jsPDFDocument.getFontList();
                    }, A.prototype.getGlobalOptions = function() {
                      return g || {};
                    }, A.prototype.getDocumentOptions = function() {
                      return this.jsPDFDocument.__autoTableDocumentDefaults || {};
                    }, A.prototype.pageSize = function() {
                      var L = this.jsPDFDocument.internal.pageSize;
                      return L.width == null && (L = {
                        width: L.getWidth(),
                        height: L.getHeight()
                      }), L;
                    }, A.prototype.scaleFactor = function() {
                      return this.jsPDFDocument.internal.scaleFactor;
                    }, A.prototype.getLineHeightFactor = function() {
                      var L = this.jsPDFDocument;
                      return L.getLineHeightFactor ? L.getLineHeightFactor() : 1.15;
                    }, A.prototype.getLineHeight = function(L) {
                      return L / this.scaleFactor() * this.getLineHeightFactor();
                    }, A.prototype.pageNumber = function() {
                      var L = this.jsPDFDocument.internal.getCurrentPageInfo();
                      return L ? L.pageNumber : this.jsPDFDocument.internal.getNumberOfPages();
                    }, A;
                  }()
                );
                c.DocHandler = P;
              }
            ),
            /***/
            4: (
              /***/
              function(h, c, g) {
                Object.defineProperty(c, "__esModule", { value: !0 }), c.parseHtml = void 0;
                var P = g(903), A = g(796);
                function L(F, E, v, S, C) {
                  var D, G;
                  S === void 0 && (S = !1), C === void 0 && (C = !1);
                  var $;
                  typeof E == "string" ? $ = v.document.querySelector(E) : $ = E;
                  var M = Object.keys(F.getFontList()), j = F.scaleFactor(), Z = [], Q = [], N = [];
                  if (!$)
                    return console.error("Html table could not be found with input: ", E), { head: Z, body: Q, foot: N };
                  for (var y = 0; y < $.rows.length; y++) {
                    var B = $.rows[y], z = (G = (D = B == null ? void 0 : B.parentElement) === null || D === void 0 ? void 0 : D.tagName) === null || G === void 0 ? void 0 : G.toLowerCase(), lt = d(M, j, v, B, S, C);
                    lt && (z === "thead" ? Z.push(lt) : z === "tfoot" ? N.push(lt) : Q.push(lt));
                  }
                  return { head: Z, body: Q, foot: N };
                }
                c.parseHtml = L;
                function d(F, E, v, S, C, D) {
                  for (var G = new A.HtmlRowInput(S), $ = 0; $ < S.cells.length; $++) {
                    var M = S.cells[$], j = v.getComputedStyle(M);
                    if (C || j.display !== "none") {
                      var Z = void 0;
                      D && (Z = (0, P.parseCss)(F, M, E, j, v)), G.push({
                        rowSpan: M.rowSpan,
                        colSpan: M.colSpan,
                        styles: Z,
                        _element: M,
                        content: x(M)
                      });
                    }
                  }
                  var Q = v.getComputedStyle(S);
                  if (G.length > 0 && (C || Q.display !== "none"))
                    return G;
                }
                function x(F) {
                  var E = F.cloneNode(!0);
                  return E.innerHTML = E.innerHTML.replace(/\n/g, "").replace(/ +/g, " "), E.innerHTML = E.innerHTML.split(/<br.*?>/).map(function(v) {
                    return v.trim();
                  }).join(`
`), E.innerText || E.textContent || "";
                }
              }
            ),
            /***/
            776: (
              /***/
              function(h, c, g) {
                Object.defineProperty(c, "__esModule", { value: !0 }), c.parseInput = void 0;
                var P = g(4), A = g(356), L = g(420), d = g(744), x = g(792);
                function F($, M) {
                  var j = new d.DocHandler($), Z = j.getDocumentOptions(), Q = j.getGlobalOptions();
                  (0, x.default)(j, Q, Z, M);
                  var N = (0, A.assign)({}, Q, Z, M), y;
                  typeof window < "u" && (y = window);
                  var B = E(Q, Z, M), z = v(Q, Z, M), lt = S(j, N), U = D(j, N, y);
                  return {
                    id: M.tableId,
                    content: U,
                    hooks: z,
                    styles: B,
                    settings: lt
                  };
                }
                c.parseInput = F;
                function E($, M, j) {
                  for (var Z = {
                    styles: {},
                    headStyles: {},
                    bodyStyles: {},
                    footStyles: {},
                    alternateRowStyles: {},
                    columnStyles: {}
                  }, Q = function(z) {
                    if (z === "columnStyles") {
                      var lt = $[z], U = M[z], W = j[z];
                      Z.columnStyles = (0, A.assign)({}, lt, U, W);
                    } else {
                      var K = [$, M, j], J = K.map(function(st) {
                        return st[z] || {};
                      });
                      Z[z] = (0, A.assign)({}, J[0], J[1], J[2]);
                    }
                  }, N = 0, y = Object.keys(Z); N < y.length; N++) {
                    var B = y[N];
                    Q(B);
                  }
                  return Z;
                }
                function v($, M, j) {
                  for (var Z = [$, M, j], Q = {
                    didParseCell: [],
                    willDrawCell: [],
                    didDrawCell: [],
                    willDrawPage: [],
                    didDrawPage: []
                  }, N = 0, y = Z; N < y.length; N++) {
                    var B = y[N];
                    B.didParseCell && Q.didParseCell.push(B.didParseCell), B.willDrawCell && Q.willDrawCell.push(B.willDrawCell), B.didDrawCell && Q.didDrawCell.push(B.didDrawCell), B.willDrawPage && Q.willDrawPage.push(B.willDrawPage), B.didDrawPage && Q.didDrawPage.push(B.didDrawPage);
                  }
                  return Q;
                }
                function S($, M) {
                  var j, Z, Q, N, y, B, z, lt, U, W, K, J, st = (0, L.parseSpacing)(M.margin, 40 / $.scaleFactor()), gt = (j = C($, M.startY)) !== null && j !== void 0 ? j : st.top, m;
                  M.showFoot === !0 ? m = "everyPage" : M.showFoot === !1 ? m = "never" : m = (Z = M.showFoot) !== null && Z !== void 0 ? Z : "everyPage";
                  var O;
                  M.showHead === !0 ? O = "everyPage" : M.showHead === !1 ? O = "never" : O = (Q = M.showHead) !== null && Q !== void 0 ? Q : "everyPage";
                  var q = (N = M.useCss) !== null && N !== void 0 ? N : !1, V = M.theme || (q ? "plain" : "striped"), X = !!M.horizontalPageBreak, at = (y = M.horizontalPageBreakRepeat) !== null && y !== void 0 ? y : null;
                  return {
                    includeHiddenHtml: (B = M.includeHiddenHtml) !== null && B !== void 0 ? B : !1,
                    useCss: q,
                    theme: V,
                    startY: gt,
                    margin: st,
                    pageBreak: (z = M.pageBreak) !== null && z !== void 0 ? z : "auto",
                    rowPageBreak: (lt = M.rowPageBreak) !== null && lt !== void 0 ? lt : "auto",
                    tableWidth: (U = M.tableWidth) !== null && U !== void 0 ? U : "auto",
                    showHead: O,
                    showFoot: m,
                    tableLineWidth: (W = M.tableLineWidth) !== null && W !== void 0 ? W : 0,
                    tableLineColor: (K = M.tableLineColor) !== null && K !== void 0 ? K : 200,
                    horizontalPageBreak: X,
                    horizontalPageBreakRepeat: at,
                    horizontalPageBreakBehaviour: (J = M.horizontalPageBreakBehaviour) !== null && J !== void 0 ? J : "afterAllRows"
                  };
                }
                function C($, M) {
                  var j = $.getLastAutoTable(), Z = $.scaleFactor(), Q = $.pageNumber(), N = !1;
                  if (j && j.startPageNumber) {
                    var y = j.startPageNumber + j.pageNumber - 1;
                    N = y === Q;
                  }
                  return typeof M == "number" ? M : (M == null || M === !1) && N && (j == null ? void 0 : j.finalY) != null ? j.finalY + 20 / Z : null;
                }
                function D($, M, j) {
                  var Z = M.head || [], Q = M.body || [], N = M.foot || [];
                  if (M.html) {
                    var y = M.includeHiddenHtml;
                    if (j) {
                      var B = (0, P.parseHtml)($, M.html, j, y, M.useCss) || {};
                      Z = B.head || Z, Q = B.body || Z, N = B.foot || Z;
                    } else
                      console.error("Cannot parse html in non browser environment");
                  }
                  var z = M.columns || G(Z, Q, N);
                  return {
                    columns: z,
                    head: Z,
                    body: Q,
                    foot: N
                  };
                }
                function G($, M, j) {
                  var Z = $[0] || M[0] || j[0] || [], Q = [];
                  return Object.keys(Z).filter(function(N) {
                    return N !== "_element";
                  }).forEach(function(N) {
                    var y = 1, B;
                    Array.isArray(Z) ? B = Z[parseInt(N)] : B = Z[N], typeof B == "object" && !Array.isArray(B) && (y = (B == null ? void 0 : B.colSpan) || 1);
                    for (var z = 0; z < y; z++) {
                      var lt = void 0;
                      Array.isArray(Z) ? lt = Q.length : lt = N + (z > 0 ? "_".concat(z) : "");
                      var U = { dataKey: lt };
                      Q.push(U);
                    }
                  }), Q;
                }
              }
            ),
            /***/
            792: (
              /***/
              function(h, c) {
                Object.defineProperty(c, "__esModule", { value: !0 });
                function g(A, L, d, x) {
                  for (var F = function(C) {
                    C && typeof C != "object" && console.error("The options parameter should be of type object, is: " + typeof C), typeof C.extendWidth < "u" && (C.tableWidth = C.extendWidth ? "auto" : "wrap", console.error("Use of deprecated option: extendWidth, use tableWidth instead.")), typeof C.margins < "u" && (typeof C.margin > "u" && (C.margin = C.margins), console.error("Use of deprecated option: margins, use margin instead.")), C.startY && typeof C.startY != "number" && (console.error("Invalid value for startY option", C.startY), delete C.startY), !C.didDrawPage && (C.afterPageContent || C.beforePageContent || C.afterPageAdd) && (console.error("The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use didDrawPage instead"), C.didDrawPage = function(N) {
                      A.applyStyles(A.userStyles), C.beforePageContent && C.beforePageContent(N), A.applyStyles(A.userStyles), C.afterPageContent && C.afterPageContent(N), A.applyStyles(A.userStyles), C.afterPageAdd && N.pageNumber > 1 && N.afterPageAdd(N), A.applyStyles(A.userStyles);
                    }), [
                      "createdHeaderCell",
                      "drawHeaderRow",
                      "drawRow",
                      "drawHeaderCell"
                    ].forEach(function(N) {
                      C[N] && console.error('The "'.concat(N, '" hook has changed in version 3.0, check the changelog for how to migrate.'));
                    }), [
                      ["showFoot", "showFooter"],
                      ["showHead", "showHeader"],
                      ["didDrawPage", "addPageContent"],
                      ["didParseCell", "createdCell"],
                      ["headStyles", "headerStyles"]
                    ].forEach(function(N) {
                      var y = N[0], B = N[1];
                      C[B] && (console.error("Use of deprecated option ".concat(B, ". Use ").concat(y, " instead")), C[y] = C[B]);
                    }), [
                      ["padding", "cellPadding"],
                      ["lineHeight", "rowHeight"],
                      "fontSize",
                      "overflow"
                    ].forEach(function(N) {
                      var y = typeof N == "string" ? N : N[0], B = typeof N == "string" ? N : N[1];
                      typeof C[y] < "u" && (typeof C.styles[B] > "u" && (C.styles[B] = C[y]), console.error("Use of deprecated option: " + y + ", use the style " + B + " instead."));
                    });
                    for (var D = 0, G = [
                      "styles",
                      "bodyStyles",
                      "headStyles",
                      "footStyles"
                    ]; D < G.length; D++) {
                      var $ = G[D];
                      P(C[$] || {});
                    }
                    for (var M = C.columnStyles || {}, j = 0, Z = Object.keys(M); j < Z.length; j++) {
                      var Q = Z[j];
                      P(M[Q] || {});
                    }
                  }, E = 0, v = [L, d, x]; E < v.length; E++) {
                    var S = v[E];
                    F(S);
                  }
                }
                c.default = g;
                function P(A) {
                  A.rowHeight ? (console.error("Use of deprecated style rowHeight. It is renamed to minCellHeight."), A.minCellHeight || (A.minCellHeight = A.rowHeight)) : A.columnWidth && (console.error("Use of deprecated style columnWidth. It is renamed to cellWidth."), A.cellWidth || (A.cellWidth = A.columnWidth));
                }
              }
            ),
            /***/
            260: (
              /***/
              function(h, c, g) {
                Object.defineProperty(c, "__esModule", { value: !0 }), c.Column = c.Cell = c.Row = c.Table = void 0;
                var P = g(796), A = g(172), L = g(420), d = (
                  /** @class */
                  function() {
                    function v(S, C) {
                      this.pageNumber = 1, this.pageCount = 1, this.id = S.id, this.settings = S.settings, this.styles = S.styles, this.hooks = S.hooks, this.columns = C.columns, this.head = C.head, this.body = C.body, this.foot = C.foot;
                    }
                    return v.prototype.getHeadHeight = function(S) {
                      return this.head.reduce(function(C, D) {
                        return C + D.getMaxCellHeight(S);
                      }, 0);
                    }, v.prototype.getFootHeight = function(S) {
                      return this.foot.reduce(function(C, D) {
                        return C + D.getMaxCellHeight(S);
                      }, 0);
                    }, v.prototype.allRows = function() {
                      return this.head.concat(this.body).concat(this.foot);
                    }, v.prototype.callCellHooks = function(S, C, D, G, $, M) {
                      for (var j = 0, Z = C; j < Z.length; j++) {
                        var Q = Z[j], N = new A.CellHookData(S, this, D, G, $, M), y = Q(N) === !1;
                        if (D.text = Array.isArray(D.text) ? D.text : [D.text], y)
                          return !1;
                      }
                      return !0;
                    }, v.prototype.callEndPageHooks = function(S, C) {
                      S.applyStyles(S.userStyles);
                      for (var D = 0, G = this.hooks.didDrawPage; D < G.length; D++) {
                        var $ = G[D];
                        $(new A.HookData(S, this, C));
                      }
                    }, v.prototype.callWillDrawPageHooks = function(S, C) {
                      for (var D = 0, G = this.hooks.willDrawPage; D < G.length; D++) {
                        var $ = G[D];
                        $(new A.HookData(S, this, C));
                      }
                    }, v.prototype.getWidth = function(S) {
                      if (typeof this.settings.tableWidth == "number")
                        return this.settings.tableWidth;
                      if (this.settings.tableWidth === "wrap") {
                        var C = this.columns.reduce(function(G, $) {
                          return G + $.wrappedWidth;
                        }, 0);
                        return C;
                      } else {
                        var D = this.settings.margin;
                        return S - D.left - D.right;
                      }
                    }, v;
                  }()
                );
                c.Table = d;
                var x = (
                  /** @class */
                  function() {
                    function v(S, C, D, G, $) {
                      $ === void 0 && ($ = !1), this.height = 0, this.raw = S, S instanceof P.HtmlRowInput && (this.raw = S._element, this.element = S._element), this.index = C, this.section = D, this.cells = G, this.spansMultiplePages = $;
                    }
                    return v.prototype.getMaxCellHeight = function(S) {
                      var C = this;
                      return S.reduce(function(D, G) {
                        var $;
                        return Math.max(D, (($ = C.cells[G.index]) === null || $ === void 0 ? void 0 : $.height) || 0);
                      }, 0);
                    }, v.prototype.hasRowSpan = function(S) {
                      var C = this;
                      return S.filter(function(D) {
                        var G = C.cells[D.index];
                        return G ? G.rowSpan > 1 : !1;
                      }).length > 0;
                    }, v.prototype.canEntireRowFit = function(S, C) {
                      return this.getMaxCellHeight(C) <= S;
                    }, v.prototype.getMinimumRowHeight = function(S, C) {
                      var D = this;
                      return S.reduce(function(G, $) {
                        var M = D.cells[$.index];
                        if (!M)
                          return 0;
                        var j = C.getLineHeight(M.styles.fontSize), Z = M.padding("vertical"), Q = Z + j;
                        return Q > G ? Q : G;
                      }, 0);
                    }, v;
                  }()
                );
                c.Row = x;
                var F = (
                  /** @class */
                  function() {
                    function v(S, C, D) {
                      var G, $;
                      this.contentHeight = 0, this.contentWidth = 0, this.wrappedWidth = 0, this.minReadableWidth = 0, this.minWidth = 0, this.width = 0, this.height = 0, this.x = 0, this.y = 0, this.styles = C, this.section = D, this.raw = S;
                      var M = S;
                      S != null && typeof S == "object" && !Array.isArray(S) ? (this.rowSpan = S.rowSpan || 1, this.colSpan = S.colSpan || 1, M = ($ = (G = S.content) !== null && G !== void 0 ? G : S.title) !== null && $ !== void 0 ? $ : S, S._element && (this.raw = S._element)) : (this.rowSpan = 1, this.colSpan = 1);
                      var j = M != null ? "" + M : "", Z = /\r\n|\r|\n/g;
                      this.text = j.split(Z);
                    }
                    return v.prototype.getTextPos = function() {
                      var S;
                      if (this.styles.valign === "top")
                        S = this.y + this.padding("top");
                      else if (this.styles.valign === "bottom")
                        S = this.y + this.height - this.padding("bottom");
                      else {
                        var C = this.height - this.padding("vertical");
                        S = this.y + C / 2 + this.padding("top");
                      }
                      var D;
                      if (this.styles.halign === "right")
                        D = this.x + this.width - this.padding("right");
                      else if (this.styles.halign === "center") {
                        var G = this.width - this.padding("horizontal");
                        D = this.x + G / 2 + this.padding("left");
                      } else
                        D = this.x + this.padding("left");
                      return { x: D, y: S };
                    }, v.prototype.getContentHeight = function(S, C) {
                      C === void 0 && (C = 1.15);
                      var D = Array.isArray(this.text) ? this.text.length : 1, G = this.styles.fontSize / S * C, $ = D * G + this.padding("vertical");
                      return Math.max($, this.styles.minCellHeight);
                    }, v.prototype.padding = function(S) {
                      var C = (0, L.parseSpacing)(this.styles.cellPadding, 0);
                      return S === "vertical" ? C.top + C.bottom : S === "horizontal" ? C.left + C.right : C[S];
                    }, v;
                  }()
                );
                c.Cell = F;
                var E = (
                  /** @class */
                  function() {
                    function v(S, C, D) {
                      this.wrappedWidth = 0, this.minReadableWidth = 0, this.minWidth = 0, this.width = 0, this.dataKey = S, this.raw = C, this.index = D;
                    }
                    return v.prototype.getMaxCustomCellWidth = function(S) {
                      for (var C = 0, D = 0, G = S.allRows(); D < G.length; D++) {
                        var $ = G[D], M = $.cells[this.index];
                        M && typeof M.styles.cellWidth == "number" && (C = Math.max(C, M.styles.cellWidth));
                      }
                      return C;
                    }, v;
                  }()
                );
                c.Column = E;
              }
            ),
            /***/
            356: (
              /***/
              function(h, c) {
                Object.defineProperty(c, "__esModule", { value: !0 }), c.assign = void 0;
                function g(P, A, L, d, x) {
                  if (P == null)
                    throw new TypeError("Cannot convert undefined or null to object");
                  for (var F = Object(P), E = 1; E < arguments.length; E++) {
                    var v = arguments[E];
                    if (v != null)
                      for (var S in v)
                        Object.prototype.hasOwnProperty.call(v, S) && (F[S] = v[S]);
                  }
                  return F;
                }
                c.assign = g;
              }
            ),
            /***/
            972: (
              /***/
              function(h, c, g) {
                Object.defineProperty(c, "__esModule", { value: !0 }), c.createTable = void 0;
                var P = g(744), A = g(260), L = g(324), d = g(796), x = g(356);
                function F($, M) {
                  var j = new P.DocHandler($), Z = E(M, j.scaleFactor()), Q = new A.Table(M, Z);
                  return (0, L.calculateWidths)(j, Q), j.applyStyles(j.userStyles), Q;
                }
                c.createTable = F;
                function E($, M) {
                  var j = $.content, Z = D(j.columns);
                  if (j.head.length === 0) {
                    var Q = S(Z, "head");
                    Q && j.head.push(Q);
                  }
                  if (j.foot.length === 0) {
                    var Q = S(Z, "foot");
                    Q && j.foot.push(Q);
                  }
                  var N = $.settings.theme, y = $.styles;
                  return {
                    columns: Z,
                    head: v("head", j.head, Z, y, N, M),
                    body: v("body", j.body, Z, y, N, M),
                    foot: v("foot", j.foot, Z, y, N, M)
                  };
                }
                function v($, M, j, Z, Q, N) {
                  var y = {}, B = M.map(function(z, lt) {
                    for (var U = 0, W = {}, K = 0, J = 0, st = 0, gt = j; st < gt.length; st++) {
                      var m = gt[st];
                      if (y[m.index] == null || y[m.index].left === 0)
                        if (J === 0) {
                          var O = void 0;
                          Array.isArray(z) ? O = z[m.index - K - U] : O = z[m.dataKey];
                          var q = {};
                          typeof O == "object" && !Array.isArray(O) && (q = (O == null ? void 0 : O.styles) || {});
                          var V = G($, m, lt, Q, Z, N, q), X = new A.Cell(O, V, $);
                          W[m.dataKey] = X, W[m.index] = X, J = X.colSpan - 1, y[m.index] = {
                            left: X.rowSpan - 1,
                            times: J
                          };
                        } else
                          J--, K++;
                      else
                        y[m.index].left--, J = y[m.index].times, U++;
                    }
                    return new A.Row(z, lt, $, W);
                  });
                  return B;
                }
                function S($, M) {
                  var j = {};
                  return $.forEach(function(Z) {
                    if (Z.raw != null) {
                      var Q = C(M, Z.raw);
                      Q != null && (j[Z.dataKey] = Q);
                    }
                  }), Object.keys(j).length > 0 ? j : null;
                }
                function C($, M) {
                  if ($ === "head") {
                    if (typeof M == "object")
                      return M.header || M.title || null;
                    if (typeof M == "string" || typeof M == "number")
                      return M;
                  } else if ($ === "foot" && typeof M == "object")
                    return M.footer;
                  return null;
                }
                function D($) {
                  return $.map(function(M, j) {
                    var Z, Q, N;
                    return typeof M == "object" ? N = (Q = (Z = M.dataKey) !== null && Z !== void 0 ? Z : M.key) !== null && Q !== void 0 ? Q : j : N = j, new A.Column(N, M, j);
                  });
                }
                function G($, M, j, Z, Q, N, y) {
                  var B = (0, d.getTheme)(Z), z;
                  $ === "head" ? z = Q.headStyles : $ === "body" ? z = Q.bodyStyles : $ === "foot" && (z = Q.footStyles);
                  var lt = (0, x.assign)({}, B.table, B[$], Q.styles, z), U = Q.columnStyles[M.dataKey] || Q.columnStyles[M.index] || {}, W = $ === "body" ? U : {}, K = $ === "body" && j % 2 === 0 ? (0, x.assign)({}, B.alternateRow, Q.alternateRowStyles) : {}, J = (0, d.defaultStyles)(N), st = (0, x.assign)({}, J, lt, K, W);
                  return (0, x.assign)(st, y);
                }
              }
            ),
            /***/
            664: (
              /***/
              function(h, c, g) {
                Object.defineProperty(c, "__esModule", { value: !0 }), c.addPage = c.drawTable = void 0;
                var P = g(420), A = g(260), L = g(744), d = g(356), x = g(136), F = g(224);
                function E(U, W) {
                  var K = W.settings, J = K.startY, st = K.margin, gt = {
                    x: st.left,
                    y: J
                  }, m = W.getHeadHeight(W.columns) + W.getFootHeight(W.columns), O = J + st.bottom + m;
                  if (K.pageBreak === "avoid") {
                    var q = W.body, V = q.reduce(function(ft, dt) {
                      return ft + dt.height;
                    }, 0);
                    O += V;
                  }
                  var X = new L.DocHandler(U);
                  (K.pageBreak === "always" || K.startY != null && O > X.pageSize().height) && (lt(X), gt.y = st.top), W.callWillDrawPageHooks(X, gt);
                  var at = (0, d.assign)({}, gt);
                  W.startPageNumber = X.pageNumber(), K.horizontalPageBreak ? v(X, W, at, gt) : (X.applyStyles(X.userStyles), (K.showHead === "firstPage" || K.showHead === "everyPage") && W.head.forEach(function(ft) {
                    return Q(X, W, ft, gt, W.columns);
                  }), X.applyStyles(X.userStyles), W.body.forEach(function(ft, dt) {
                    var _t = dt === W.body.length - 1;
                    Z(X, W, ft, _t, at, gt, W.columns);
                  }), X.applyStyles(X.userStyles), (K.showFoot === "lastPage" || K.showFoot === "everyPage") && W.foot.forEach(function(ft) {
                    return Q(X, W, ft, gt, W.columns);
                  })), (0, P.addTableBorder)(X, W, at, gt), W.callEndPageHooks(X, gt), W.finalY = gt.y, U.lastAutoTable = W, U.previousAutoTable = W, U.autoTable && (U.autoTable.previous = W), X.applyStyles(X.userStyles);
                }
                c.drawTable = E;
                function v(U, W, K, J) {
                  var st = (0, F.calculateAllColumnsCanFitInPage)(U, W), gt = W.settings;
                  if (gt.horizontalPageBreakBehaviour === "afterAllRows")
                    st.forEach(function(V, X) {
                      U.applyStyles(U.userStyles), X > 0 ? z(U, W, K, J, V.columns, !0) : S(U, W, J, V.columns), C(U, W, K, J, V.columns), G(U, W, J, V.columns);
                    });
                  else
                    for (var m = -1, O = st[0], q = function() {
                      var V = m;
                      if (O) {
                        U.applyStyles(U.userStyles);
                        var X = O.columns;
                        m >= 0 ? z(U, W, K, J, X, !0) : S(U, W, J, X), V = D(U, W, m + 1, J, X), G(U, W, J, X);
                      }
                      var at = V - m;
                      st.slice(1).forEach(function(ft) {
                        U.applyStyles(U.userStyles), z(U, W, K, J, ft.columns, !0), D(U, W, m + 1, J, ft.columns, at), G(U, W, J, ft.columns);
                      }), m = V;
                    }; m < W.body.length - 1; )
                      q();
                }
                function S(U, W, K, J) {
                  var st = W.settings;
                  U.applyStyles(U.userStyles), (st.showHead === "firstPage" || st.showHead === "everyPage") && W.head.forEach(function(gt) {
                    return Q(U, W, gt, K, J);
                  });
                }
                function C(U, W, K, J, st) {
                  U.applyStyles(U.userStyles), W.body.forEach(function(gt, m) {
                    var O = m === W.body.length - 1;
                    Z(U, W, gt, O, K, J, st);
                  });
                }
                function D(U, W, K, J, st, gt) {
                  U.applyStyles(U.userStyles), gt = gt ?? W.body.length;
                  var m = Math.min(K + gt, W.body.length), O = -1;
                  return W.body.slice(K, m).forEach(function(q, V) {
                    var X = K + V === W.body.length - 1, at = B(U, W, X, J);
                    q.canEntireRowFit(at, st) && (Q(U, W, q, J, st), O = K + V);
                  }), O;
                }
                function G(U, W, K, J) {
                  var st = W.settings;
                  U.applyStyles(U.userStyles), (st.showFoot === "lastPage" || st.showFoot === "everyPage") && W.foot.forEach(function(gt) {
                    return Q(U, W, gt, K, J);
                  });
                }
                function $(U, W, K) {
                  var J = K.getLineHeight(U.styles.fontSize), st = U.padding("vertical"), gt = Math.floor((W - st) / J);
                  return Math.max(0, gt);
                }
                function M(U, W, K, J) {
                  var st = {};
                  U.spansMultiplePages = !0, U.height = 0;
                  for (var gt = 0, m = 0, O = K.columns; m < O.length; m++) {
                    var q = O[m], V = U.cells[q.index];
                    if (V) {
                      Array.isArray(V.text) || (V.text = [V.text]);
                      var X = new A.Cell(V.raw, V.styles, V.section);
                      X = (0, d.assign)(X, V), X.text = [];
                      var at = $(V, W, J);
                      V.text.length > at && (X.text = V.text.splice(at, V.text.length));
                      var ft = J.scaleFactor(), dt = J.getLineHeightFactor();
                      V.contentHeight = V.getContentHeight(ft, dt), V.contentHeight >= W && (V.contentHeight = W, X.styles.minCellHeight -= W), V.contentHeight > U.height && (U.height = V.contentHeight), X.contentHeight = X.getContentHeight(ft, dt), X.contentHeight > gt && (gt = X.contentHeight), st[q.index] = X;
                    }
                  }
                  var _t = new A.Row(U.raw, -1, U.section, st, !0);
                  _t.height = gt;
                  for (var xt = 0, Ot = K.columns; xt < Ot.length; xt++) {
                    var q = Ot[xt], X = _t.cells[q.index];
                    X && (X.height = _t.height);
                    var V = U.cells[q.index];
                    V && (V.height = U.height);
                  }
                  return _t;
                }
                function j(U, W, K, J) {
                  var st = U.pageSize().height, gt = J.settings.margin, m = gt.top + gt.bottom, O = st - m;
                  W.section === "body" && (O -= J.getHeadHeight(J.columns) + J.getFootHeight(J.columns));
                  var q = W.getMinimumRowHeight(J.columns, U), V = q < K;
                  if (q > O)
                    return console.error("Will not be able to print row ".concat(W.index, " correctly since it's minimum height is larger than page height")), !0;
                  if (!V)
                    return !1;
                  var X = W.hasRowSpan(J.columns), at = W.getMaxCellHeight(J.columns) > O;
                  return at ? (X && console.error("The content of row ".concat(W.index, " will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported.")), !0) : !(X || J.settings.rowPageBreak === "avoid");
                }
                function Z(U, W, K, J, st, gt, m) {
                  var O = B(U, W, J, gt);
                  if (K.canEntireRowFit(O, m))
                    Q(U, W, K, gt, m);
                  else if (j(U, K, O, W)) {
                    var q = M(K, O, W, U);
                    Q(U, W, K, gt, m), z(U, W, st, gt, m), Z(U, W, q, J, st, gt, m);
                  } else
                    z(U, W, st, gt, m), Z(U, W, K, J, st, gt, m);
                }
                function Q(U, W, K, J, st) {
                  J.x = W.settings.margin.left;
                  for (var gt = 0, m = st; gt < m.length; gt++) {
                    var O = m[gt], q = K.cells[O.index];
                    if (!q) {
                      J.x += O.width;
                      continue;
                    }
                    U.applyStyles(q.styles), q.x = J.x, q.y = J.y;
                    var V = W.callCellHooks(U, W.hooks.willDrawCell, q, K, O, J);
                    if (V === !1) {
                      J.x += O.width;
                      continue;
                    }
                    N(U, q, J);
                    var X = q.getTextPos();
                    (0, x.default)(q.text, X.x, X.y, {
                      halign: q.styles.halign,
                      valign: q.styles.valign,
                      maxWidth: Math.ceil(q.width - q.padding("left") - q.padding("right"))
                    }, U.getDocument()), W.callCellHooks(U, W.hooks.didDrawCell, q, K, O, J), J.x += O.width;
                  }
                  J.y += K.height;
                }
                function N(U, W, K) {
                  var J = W.styles;
                  if (U.getDocument().setFillColor(U.getDocument().getFillColor()), typeof J.lineWidth == "number") {
                    var st = (0, P.getFillStyle)(J.lineWidth, J.fillColor);
                    st && U.rect(W.x, K.y, W.width, W.height, st);
                  } else typeof J.lineWidth == "object" && (J.fillColor && U.rect(W.x, K.y, W.width, W.height, "F"), y(U, W, K, J.lineWidth));
                }
                function y(U, W, K, J) {
                  var st, gt, m, O;
                  J.top && (st = K.x, gt = K.y, m = K.x + W.width, O = K.y, J.right && (m += 0.5 * J.right), J.left && (st -= 0.5 * J.left), q(J.top, st, gt, m, O)), J.bottom && (st = K.x, gt = K.y + W.height, m = K.x + W.width, O = K.y + W.height, J.right && (m += 0.5 * J.right), J.left && (st -= 0.5 * J.left), q(J.bottom, st, gt, m, O)), J.left && (st = K.x, gt = K.y, m = K.x, O = K.y + W.height, J.top && (gt -= 0.5 * J.top), J.bottom && (O += 0.5 * J.bottom), q(J.left, st, gt, m, O)), J.right && (st = K.x + W.width, gt = K.y, m = K.x + W.width, O = K.y + W.height, J.top && (gt -= 0.5 * J.top), J.bottom && (O += 0.5 * J.bottom), q(J.right, st, gt, m, O));
                  function q(V, X, at, ft, dt) {
                    U.getDocument().setLineWidth(V), U.getDocument().line(X, at, ft, dt, "S");
                  }
                }
                function B(U, W, K, J) {
                  var st = W.settings.margin.bottom, gt = W.settings.showFoot;
                  return (gt === "everyPage" || gt === "lastPage" && K) && (st += W.getFootHeight(W.columns)), U.pageSize().height - J.y - st;
                }
                function z(U, W, K, J, st, gt) {
                  st === void 0 && (st = []), gt === void 0 && (gt = !1), U.applyStyles(U.userStyles), W.settings.showFoot === "everyPage" && !gt && W.foot.forEach(function(O) {
                    return Q(U, W, O, J, st);
                  }), W.callEndPageHooks(U, J);
                  var m = W.settings.margin;
                  (0, P.addTableBorder)(U, W, K, J), lt(U), W.pageNumber++, W.pageCount++, J.x = m.left, J.y = m.top, K.y = m.top, W.callWillDrawPageHooks(U, J), W.settings.showHead === "everyPage" && (W.head.forEach(function(O) {
                    return Q(U, W, O, J, st);
                  }), U.applyStyles(U.userStyles));
                }
                c.addPage = z;
                function lt(U) {
                  var W = U.pageNumber();
                  U.setPage(W + 1);
                  var K = U.pageNumber();
                  return K === W ? (U.addPage(), !0) : !1;
                }
              }
            ),
            /***/
            224: (
              /***/
              function(h, c, g) {
                Object.defineProperty(c, "__esModule", { value: !0 }), c.calculateAllColumnsCanFitInPage = void 0;
                var P = g(420);
                function A(d, x, F) {
                  var E;
                  F === void 0 && (F = {});
                  var v = (0, P.getPageAvailableWidth)(d, x), S = /* @__PURE__ */ new Map(), C = [], D = [], G = [];
                  x.settings.horizontalPageBreakRepeat, Array.isArray(x.settings.horizontalPageBreakRepeat) ? G = x.settings.horizontalPageBreakRepeat : (typeof x.settings.horizontalPageBreakRepeat == "string" || typeof x.settings.horizontalPageBreakRepeat == "number") && (G = [x.settings.horizontalPageBreakRepeat]), G.forEach(function(Z) {
                    var Q = x.columns.find(function(N) {
                      return N.dataKey === Z || N.index === Z;
                    });
                    Q && !S.has(Q.index) && (S.set(Q.index, !0), C.push(Q.index), D.push(x.columns[Q.index]), v -= Q.wrappedWidth);
                  });
                  for (var $ = !0, M = (E = F == null ? void 0 : F.start) !== null && E !== void 0 ? E : 0; M < x.columns.length; ) {
                    if (S.has(M)) {
                      M++;
                      continue;
                    }
                    var j = x.columns[M].wrappedWidth;
                    if ($ || v >= j)
                      $ = !1, C.push(M), D.push(x.columns[M]), v -= j;
                    else
                      break;
                    M++;
                  }
                  return { colIndexes: C, columns: D, lastIndex: M - 1 };
                }
                function L(d, x) {
                  for (var F = [], E = 0; E < x.columns.length; E++) {
                    var v = A(d, x, { start: E });
                    v.columns.length && (F.push(v), E = v.lastIndex);
                  }
                  return F;
                }
                c.calculateAllColumnsCanFitInPage = L;
              }
            ),
            /***/
            324: (
              /***/
              function(h, c, g) {
                Object.defineProperty(c, "__esModule", { value: !0 }), c.ellipsize = c.resizeColumns = c.calculateWidths = void 0;
                var P = g(420);
                function A(C, D) {
                  L(C, D);
                  var G = [], $ = 0;
                  D.columns.forEach(function(j) {
                    var Z = j.getMaxCustomCellWidth(D);
                    Z ? j.width = Z : (j.width = j.wrappedWidth, G.push(j)), $ += j.width;
                  });
                  var M = D.getWidth(C.pageSize().width) - $;
                  M && (M = d(G, M, function(j) {
                    return Math.max(j.minReadableWidth, j.minWidth);
                  })), M && (M = d(G, M, function(j) {
                    return j.minWidth;
                  })), M = Math.abs(M), !D.settings.horizontalPageBreak && M > 0.1 / C.scaleFactor() && (M = M < 1 ? M : Math.round(M), console.warn("Of the table content, ".concat(M, " units width could not fit page"))), F(D), E(D, C), x(D);
                }
                c.calculateWidths = A;
                function L(C, D) {
                  var G = C.scaleFactor(), $ = D.settings.horizontalPageBreak, M = (0, P.getPageAvailableWidth)(C, D);
                  D.allRows().forEach(function(j) {
                    for (var Z = 0, Q = D.columns; Z < Q.length; Z++) {
                      var N = Q[Z], y = j.cells[N.index];
                      if (y) {
                        var B = D.hooks.didParseCell;
                        D.callCellHooks(C, B, y, j, N, null);
                        var z = y.padding("horizontal");
                        y.contentWidth = (0, P.getStringWidth)(y.text, y.styles, C) + z;
                        var lt = (0, P.getStringWidth)(y.text.join(" ").split(/[^\S\u00A0]+/), y.styles, C);
                        if (y.minReadableWidth = lt + y.padding("horizontal"), typeof y.styles.cellWidth == "number")
                          y.minWidth = y.styles.cellWidth, y.wrappedWidth = y.styles.cellWidth;
                        else if (y.styles.cellWidth === "wrap" || $ === !0)
                          y.contentWidth > M ? (y.minWidth = M, y.wrappedWidth = M) : (y.minWidth = y.contentWidth, y.wrappedWidth = y.contentWidth);
                        else {
                          var U = 10 / G;
                          y.minWidth = y.styles.minCellWidth || U, y.wrappedWidth = y.contentWidth, y.minWidth > y.wrappedWidth && (y.wrappedWidth = y.minWidth);
                        }
                      }
                    }
                  }), D.allRows().forEach(function(j) {
                    for (var Z = 0, Q = D.columns; Z < Q.length; Z++) {
                      var N = Q[Z], y = j.cells[N.index];
                      if (y && y.colSpan === 1)
                        N.wrappedWidth = Math.max(N.wrappedWidth, y.wrappedWidth), N.minWidth = Math.max(N.minWidth, y.minWidth), N.minReadableWidth = Math.max(N.minReadableWidth, y.minReadableWidth);
                      else {
                        var B = D.styles.columnStyles[N.dataKey] || D.styles.columnStyles[N.index] || {}, z = B.cellWidth || B.minCellWidth;
                        z && typeof z == "number" && (N.minWidth = z, N.wrappedWidth = z);
                      }
                      y && (y.colSpan > 1 && !N.minWidth && (N.minWidth = y.minWidth), y.colSpan > 1 && !N.wrappedWidth && (N.wrappedWidth = y.minWidth));
                    }
                  });
                }
                function d(C, D, G) {
                  for (var $ = D, M = C.reduce(function(U, W) {
                    return U + W.wrappedWidth;
                  }, 0), j = 0; j < C.length; j++) {
                    var Z = C[j], Q = Z.wrappedWidth / M, N = $ * Q, y = Z.width + N, B = G(Z), z = y < B ? B : y;
                    D -= z - Z.width, Z.width = z;
                  }
                  if (D = Math.round(D * 1e10) / 1e10, D) {
                    var lt = C.filter(function(U) {
                      return D < 0 ? U.width > G(U) : !0;
                    });
                    lt.length && (D = d(lt, D, G));
                  }
                  return D;
                }
                c.resizeColumns = d;
                function x(C) {
                  for (var D = {}, G = 1, $ = C.allRows(), M = 0; M < $.length; M++)
                    for (var j = $[M], Z = 0, Q = C.columns; Z < Q.length; Z++) {
                      var N = Q[Z], y = D[N.index];
                      if (G > 1)
                        G--, delete j.cells[N.index];
                      else if (y)
                        y.cell.height += j.height, G = y.cell.colSpan, delete j.cells[N.index], y.left--, y.left <= 1 && delete D[N.index];
                      else {
                        var B = j.cells[N.index];
                        if (!B)
                          continue;
                        if (B.height = j.height, B.rowSpan > 1) {
                          var z = $.length - M, lt = B.rowSpan > z ? z : B.rowSpan;
                          D[N.index] = { cell: B, left: lt, row: j };
                        }
                      }
                    }
                }
                function F(C) {
                  for (var D = C.allRows(), G = 0; G < D.length; G++)
                    for (var $ = D[G], M = null, j = 0, Z = 0, Q = 0; Q < C.columns.length; Q++) {
                      var N = C.columns[Q];
                      if (Z -= 1, Z > 1 && C.columns[Q + 1])
                        j += N.width, delete $.cells[N.index];
                      else if (M) {
                        var y = M;
                        delete $.cells[N.index], M = null, y.width = N.width + j;
                      } else {
                        var y = $.cells[N.index];
                        if (!y)
                          continue;
                        if (Z = y.colSpan, j = 0, y.colSpan > 1) {
                          M = y, j += N.width;
                          continue;
                        }
                        y.width = N.width + j;
                      }
                    }
                }
                function E(C, D) {
                  for (var G = { count: 0, height: 0 }, $ = 0, M = C.allRows(); $ < M.length; $++) {
                    for (var j = M[$], Z = 0, Q = C.columns; Z < Q.length; Z++) {
                      var N = Q[Z], y = j.cells[N.index];
                      if (y) {
                        D.applyStyles(y.styles, !0);
                        var B = y.width - y.padding("horizontal");
                        if (y.styles.overflow === "linebreak")
                          y.text = D.splitTextToSize(y.text, B + 1 / D.scaleFactor(), { fontSize: y.styles.fontSize });
                        else if (y.styles.overflow === "ellipsize")
                          y.text = v(y.text, B, y.styles, D, "...");
                        else if (y.styles.overflow === "hidden")
                          y.text = v(y.text, B, y.styles, D, "");
                        else if (typeof y.styles.overflow == "function") {
                          var z = y.styles.overflow(y.text, B);
                          typeof z == "string" ? y.text = [z] : y.text = z;
                        }
                        y.contentHeight = y.getContentHeight(D.scaleFactor(), D.getLineHeightFactor());
                        var lt = y.contentHeight / y.rowSpan;
                        y.rowSpan > 1 && G.count * G.height < lt * y.rowSpan ? G = { height: lt, count: y.rowSpan } : G && G.count > 0 && G.height > lt && (lt = G.height), lt > j.height && (j.height = lt);
                      }
                    }
                    G.count--;
                  }
                }
                function v(C, D, G, $, M) {
                  return C.map(function(j) {
                    return S(j, D, G, $, M);
                  });
                }
                c.ellipsize = v;
                function S(C, D, G, $, M) {
                  var j = 1e4 * $.scaleFactor();
                  if (D = Math.ceil(D * j) / j, D >= (0, P.getStringWidth)(C, G, $))
                    return C;
                  for (; D < (0, P.getStringWidth)(C + M, G, $) && !(C.length <= 1); )
                    C = C.substring(0, C.length - 1);
                  return C.trim() + M;
                }
              }
            ),
            /***/
            964: (
              /***/
              function(h) {
                if (typeof r > "u") {
                  var c = new Error("Cannot find module 'undefined'");
                  throw c.code = "MODULE_NOT_FOUND", c;
                }
                h.exports = r;
              }
            )
            /******/
          }, u = {};
          function o(h) {
            var c = u[h];
            if (c !== void 0)
              return c.exports;
            var g = u[h] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            return a[h].call(g.exports, g, g.exports, o), g.exports;
          }
          var f = {};
          return function() {
            var h = f;
            Object.defineProperty(h, "__esModule", { value: !0 }), h.Cell = h.Column = h.Row = h.Table = h.CellHookData = h.__drawTable = h.__createTable = h.applyPlugin = void 0;
            var c = o(340), g = o(776), P = o(664), A = o(972), L = o(260);
            Object.defineProperty(h, "Table", { enumerable: !0, get: function() {
              return L.Table;
            } });
            var d = o(172);
            Object.defineProperty(h, "CellHookData", { enumerable: !0, get: function() {
              return d.CellHookData;
            } });
            var x = o(260);
            Object.defineProperty(h, "Cell", { enumerable: !0, get: function() {
              return x.Cell;
            } }), Object.defineProperty(h, "Column", { enumerable: !0, get: function() {
              return x.Column;
            } }), Object.defineProperty(h, "Row", { enumerable: !0, get: function() {
              return x.Row;
            } });
            function F(D) {
              (0, c.default)(D);
            }
            h.applyPlugin = F;
            function E(D, G) {
              var $ = (0, g.parseInput)(D, G), M = (0, A.createTable)(D, $);
              (0, P.drawTable)(D, M);
            }
            function v(D, G) {
              var $ = (0, g.parseInput)(D, G);
              return (0, A.createTable)(D, $);
            }
            h.__createTable = v;
            function S(D, G) {
              (0, P.drawTable)(D, G);
            }
            h.__drawTable = S;
            try {
              var C = o(964);
              C.jsPDF && (C = C.jsPDF), F(C);
            } catch {
            }
            h.default = E;
          }(), f;
        }()
      );
    });
  }(yo)), yo.exports;
}
var bf = vf();
const Kf = /* @__PURE__ */ Fl(bf);
/*! @license DOMPurify 2.5.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.8/LICENSE */
function Gn(i) {
  "@babel/helpers - typeof";
  return Gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Gn(i);
}
function Ps(i, e) {
  return Ps = Object.setPrototypeOf || function(a, u) {
    return a.__proto__ = u, a;
  }, Ps(i, e);
}
function yf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function wo(i, e, r) {
  return yf() ? wo = Reflect.construct : wo = function(u, o, f) {
    var h = [null];
    h.push.apply(h, o);
    var c = Function.bind.apply(u, h), g = new c();
    return f && Ps(g, f.prototype), g;
  }, wo.apply(null, arguments);
}
function on(i) {
  return wf(i) || Af(i) || Lf(i) || Nf();
}
function wf(i) {
  if (Array.isArray(i)) return ks(i);
}
function Af(i) {
  if (typeof Symbol < "u" && i[Symbol.iterator] != null || i["@@iterator"] != null) return Array.from(i);
}
function Lf(i, e) {
  if (i) {
    if (typeof i == "string") return ks(i, e);
    var r = Object.prototype.toString.call(i).slice(8, -1);
    if (r === "Object" && i.constructor && (r = i.constructor.name), r === "Map" || r === "Set") return Array.from(i);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ks(i, e);
  }
}
function ks(i, e) {
  (e == null || e > i.length) && (e = i.length);
  for (var r = 0, a = new Array(e); r < e; r++) a[r] = i[r];
  return a;
}
function Nf() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Sf = Object.hasOwnProperty, Nu = Object.setPrototypeOf, xf = Object.isFrozen, _f = Object.getPrototypeOf, Pf = Object.getOwnPropertyDescriptor, Nr = Object.freeze, Yr = Object.seal, kf = Object.create, Hu = typeof Reflect < "u" && Reflect, No = Hu.apply, Cs = Hu.construct;
No || (No = function(e, r, a) {
  return e.apply(r, a);
});
Nr || (Nr = function(e) {
  return e;
});
Yr || (Yr = function(e) {
  return e;
});
Cs || (Cs = function(e, r) {
  return wo(e, on(r));
});
var Cf = Jr(Array.prototype.forEach), Su = Jr(Array.prototype.pop), va = Jr(Array.prototype.push), Ao = Jr(String.prototype.toLowerCase), ps = Jr(String.prototype.toString), xu = Jr(String.prototype.match), an = Jr(String.prototype.replace), Ff = Jr(String.prototype.indexOf), Tf = Jr(String.prototype.trim), lr = Jr(RegExp.prototype.test), gs = If(TypeError);
function Jr(i) {
  return function(e) {
    for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
      a[u - 1] = arguments[u];
    return No(i, e, a);
  };
}
function If(i) {
  return function() {
    for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++)
      r[a] = arguments[a];
    return Cs(i, r);
  };
}
function se(i, e, r) {
  var a;
  r = (a = r) !== null && a !== void 0 ? a : Ao, Nu && Nu(i, null);
  for (var u = e.length; u--; ) {
    var o = e[u];
    if (typeof o == "string") {
      var f = r(o);
      f !== o && (xf(e) || (e[u] = f), o = f);
    }
    i[o] = !0;
  }
  return i;
}
function si(i) {
  var e = kf(null), r;
  for (r in i)
    No(Sf, i, [r]) === !0 && (e[r] = i[r]);
  return e;
}
function vo(i, e) {
  for (; i !== null; ) {
    var r = Pf(i, e);
    if (r) {
      if (r.get)
        return Jr(r.get);
      if (typeof r.value == "function")
        return Jr(r.value);
    }
    i = _f(i);
  }
  function a(u) {
    return console.warn("fallback value for", u), null;
  }
  return a;
}
var _u = Nr(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ms = Nr(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), vs = Nr(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ef = Nr(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), bs = Nr(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Of = Nr(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Pu = Nr(["#text"]), ku = Nr(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), ys = Nr(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Cu = Nr(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), bo = Nr(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), jf = Yr(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Df = Yr(/<%[\w\W]*|[\w\W]*%>/gm), Mf = Yr(/\${[\w\W]*}/gm), Rf = Yr(/^data-[\-\w.\u00B7-\uFFFF]+$/), Bf = Yr(/^aria-[\-\w]+$/), qf = Yr(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), zf = Yr(/^(?:\w+script|data):/i), Hf = Yr(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Uf = Yr(/^html$/i), Wf = Yr(/^[a-z][.\w]*(-[.\w]+)+$/i), Gf = function() {
  return typeof window > "u" ? null : window;
}, Vf = function(e, r) {
  if (Gn(e) !== "object" || typeof e.createPolicy != "function")
    return null;
  var a = null, u = "data-tt-policy-suffix";
  r.currentScript && r.currentScript.hasAttribute(u) && (a = r.currentScript.getAttribute(u));
  var o = "dompurify" + (a ? "#" + a : "");
  try {
    return e.createPolicy(o, {
      createHTML: function(h) {
        return h;
      },
      createScriptURL: function(h) {
        return h;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
};
function Uu() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Gf(), e = function(et) {
    return Uu(et);
  };
  if (e.version = "2.5.8", e.removed = [], !i || !i.document || i.document.nodeType !== 9)
    return e.isSupported = !1, e;
  var r = i.document, a = i.document, u = i.DocumentFragment, o = i.HTMLTemplateElement, f = i.Node, h = i.Element, c = i.NodeFilter, g = i.NamedNodeMap, P = g === void 0 ? i.NamedNodeMap || i.MozNamedAttrMap : g, A = i.HTMLFormElement, L = i.DOMParser, d = i.trustedTypes, x = h.prototype, F = vo(x, "cloneNode"), E = vo(x, "nextSibling"), v = vo(x, "childNodes"), S = vo(x, "parentNode");
  if (typeof o == "function") {
    var C = a.createElement("template");
    C.content && C.content.ownerDocument && (a = C.content.ownerDocument);
  }
  var D = Vf(d, r), G = D ? D.createHTML("") : "", $ = a, M = $.implementation, j = $.createNodeIterator, Z = $.createDocumentFragment, Q = $.getElementsByTagName, N = r.importNode, y = {};
  try {
    y = si(a).documentMode ? a.documentMode : {};
  } catch {
  }
  var B = {};
  e.isSupported = typeof S == "function" && M && M.createHTMLDocument !== void 0 && y !== 9;
  var z = jf, lt = Df, U = Mf, W = Rf, K = Bf, J = zf, st = Hf, gt = Wf, m = qf, O = null, q = se({}, [].concat(on(_u), on(ms), on(vs), on(bs), on(Pu))), V = null, X = se({}, [].concat(on(ku), on(ys), on(Cu), on(bo))), at = Object.seal(Object.create(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), ft = null, dt = null, _t = !0, xt = !0, Ot = !1, jt = !0, Gt = !1, mt = !0, Y = !1, Kt = !1, Bt = !1, Nt = !1, Pt = !1, Tt = !1, Ft = !0, Ht = !1, $t = "user-content-", Zt = !0, te = !1, ae = {}, fe = null, Jt = se({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), oe = null, Et = se({}, ["audio", "video", "img", "source", "image", "track"]), Ge = null, ce = se({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), fr = "http://www.w3.org/1998/Math/MathML", be = "http://www.w3.org/2000/svg", de = "http://www.w3.org/1999/xhtml", ar = de, pe = !1, Xr = null, Ce = se({}, [fr, be, de], ps), Ke, Kr = ["application/xhtml+xml", "text/html"], Fe = "text/html", qt, ue = null, vn = a.createElement("form"), Ve = function(et) {
    return et instanceof RegExp || et instanceof Function;
  }, Sr = function(et) {
    ue && ue === et || ((!et || Gn(et) !== "object") && (et = {}), et = si(et), Ke = // eslint-disable-next-line unicorn/prefer-includes
    Kr.indexOf(et.PARSER_MEDIA_TYPE) === -1 ? Ke = Fe : Ke = et.PARSER_MEDIA_TYPE, qt = Ke === "application/xhtml+xml" ? ps : Ao, O = "ALLOWED_TAGS" in et ? se({}, et.ALLOWED_TAGS, qt) : q, V = "ALLOWED_ATTR" in et ? se({}, et.ALLOWED_ATTR, qt) : X, Xr = "ALLOWED_NAMESPACES" in et ? se({}, et.ALLOWED_NAMESPACES, ps) : Ce, Ge = "ADD_URI_SAFE_ATTR" in et ? se(
      si(ce),
      // eslint-disable-line indent
      et.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      qt
      // eslint-disable-line indent
    ) : ce, oe = "ADD_DATA_URI_TAGS" in et ? se(
      si(Et),
      // eslint-disable-line indent
      et.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      qt
      // eslint-disable-line indent
    ) : Et, fe = "FORBID_CONTENTS" in et ? se({}, et.FORBID_CONTENTS, qt) : Jt, ft = "FORBID_TAGS" in et ? se({}, et.FORBID_TAGS, qt) : {}, dt = "FORBID_ATTR" in et ? se({}, et.FORBID_ATTR, qt) : {}, ae = "USE_PROFILES" in et ? et.USE_PROFILES : !1, _t = et.ALLOW_ARIA_ATTR !== !1, xt = et.ALLOW_DATA_ATTR !== !1, Ot = et.ALLOW_UNKNOWN_PROTOCOLS || !1, jt = et.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Gt = et.SAFE_FOR_TEMPLATES || !1, mt = et.SAFE_FOR_XML !== !1, Y = et.WHOLE_DOCUMENT || !1, Nt = et.RETURN_DOM || !1, Pt = et.RETURN_DOM_FRAGMENT || !1, Tt = et.RETURN_TRUSTED_TYPE || !1, Bt = et.FORCE_BODY || !1, Ft = et.SANITIZE_DOM !== !1, Ht = et.SANITIZE_NAMED_PROPS || !1, Zt = et.KEEP_CONTENT !== !1, te = et.IN_PLACE || !1, m = et.ALLOWED_URI_REGEXP || m, ar = et.NAMESPACE || de, at = et.CUSTOM_ELEMENT_HANDLING || {}, et.CUSTOM_ELEMENT_HANDLING && Ve(et.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (at.tagNameCheck = et.CUSTOM_ELEMENT_HANDLING.tagNameCheck), et.CUSTOM_ELEMENT_HANDLING && Ve(et.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (at.attributeNameCheck = et.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), et.CUSTOM_ELEMENT_HANDLING && typeof et.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (at.allowCustomizedBuiltInElements = et.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Gt && (xt = !1), Pt && (Nt = !0), ae && (O = se({}, on(Pu)), V = [], ae.html === !0 && (se(O, _u), se(V, ku)), ae.svg === !0 && (se(O, ms), se(V, ys), se(V, bo)), ae.svgFilters === !0 && (se(O, vs), se(V, ys), se(V, bo)), ae.mathMl === !0 && (se(O, bs), se(V, Cu), se(V, bo))), et.ADD_TAGS && (O === q && (O = si(O)), se(O, et.ADD_TAGS, qt)), et.ADD_ATTR && (V === X && (V = si(V)), se(V, et.ADD_ATTR, qt)), et.ADD_URI_SAFE_ATTR && se(Ge, et.ADD_URI_SAFE_ATTR, qt), et.FORBID_CONTENTS && (fe === Jt && (fe = si(fe)), se(fe, et.FORBID_CONTENTS, qt)), Zt && (O["#text"] = !0), Y && se(O, ["html", "head", "body"]), O.table && (se(O, ["tbody"]), delete ft.tbody), Nr && Nr(et), ue = et);
  }, Tr = se({}, ["mi", "mo", "mn", "ms", "mtext"]), Wt = se({}, ["annotation-xml"]), Ir = se({}, ["title", "style", "font", "a", "script"]), vr = se({}, ms);
  se(vr, vs), se(vr, Ef);
  var Qe = se({}, bs);
  se(Qe, Of);
  var Me = function(et) {
    var St = S(et);
    (!St || !St.tagName) && (St = {
      namespaceURI: ar,
      tagName: "template"
    });
    var kt = Ao(et.tagName), he = Ao(St.tagName);
    return Xr[et.namespaceURI] ? et.namespaceURI === be ? St.namespaceURI === de ? kt === "svg" : St.namespaceURI === fr ? kt === "svg" && (he === "annotation-xml" || Tr[he]) : !!vr[kt] : et.namespaceURI === fr ? St.namespaceURI === de ? kt === "math" : St.namespaceURI === be ? kt === "math" && Wt[he] : !!Qe[kt] : et.namespaceURI === de ? St.namespaceURI === be && !Wt[he] || St.namespaceURI === fr && !Tr[he] ? !1 : !Qe[kt] && (Ir[kt] || !vr[kt]) : !!(Ke === "application/xhtml+xml" && Xr[et.namespaceURI]) : !1;
  }, me = function(et) {
    va(e.removed, {
      element: et
    });
    try {
      et.parentNode.removeChild(et);
    } catch {
      try {
        et.outerHTML = G;
      } catch {
        et.remove();
      }
    }
  }, tr = function(et, St) {
    try {
      va(e.removed, {
        attribute: St.getAttributeNode(et),
        from: St
      });
    } catch {
      va(e.removed, {
        attribute: null,
        from: St
      });
    }
    if (St.removeAttribute(et), et === "is" && !V[et])
      if (Nt || Pt)
        try {
          me(St);
        } catch {
        }
      else
        try {
          St.setAttribute(et, "");
        } catch {
        }
  }, bn = function(et) {
    var St, kt;
    if (Bt)
      et = "<remove></remove>" + et;
    else {
      var he = xu(et, /^[\r\n\t ]+/);
      kt = he && he[0];
    }
    Ke === "application/xhtml+xml" && ar === de && (et = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + et + "</body></html>");
    var er = D ? D.createHTML(et) : et;
    if (ar === de)
      try {
        St = new L().parseFromString(er, Ke);
      } catch {
      }
    if (!St || !St.documentElement) {
      St = M.createDocument(ar, "template", null);
      try {
        St.documentElement.innerHTML = pe ? G : er;
      } catch {
      }
    }
    var Te = St.body || St.documentElement;
    return et && kt && Te.insertBefore(a.createTextNode(kt), Te.childNodes[0] || null), ar === de ? Q.call(St, Y ? "html" : "body")[0] : Y ? St.documentElement : Te;
  }, Br = function(et) {
    return j.call(
      et.ownerDocument || et,
      et,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, br = function(et) {
    return et instanceof A && (typeof et.nodeName != "string" || typeof et.textContent != "string" || typeof et.removeChild != "function" || !(et.attributes instanceof P) || typeof et.removeAttribute != "function" || typeof et.setAttribute != "function" || typeof et.namespaceURI != "string" || typeof et.insertBefore != "function" || typeof et.hasChildNodes != "function");
  }, or = function(et) {
    return Gn(f) === "object" ? et instanceof f : et && Gn(et) === "object" && typeof et.nodeType == "number" && typeof et.nodeName == "string";
  }, Re = function(et, St, kt) {
    B[et] && Cf(B[et], function(he) {
      he.call(e, St, kt, ue);
    });
  }, Er = function(et) {
    var St;
    if (Re("beforeSanitizeElements", et, null), br(et) || lr(/[\u0080-\uFFFF]/, et.nodeName))
      return me(et), !0;
    var kt = qt(et.nodeName);
    if (Re("uponSanitizeElement", et, {
      tagName: kt,
      allowedTags: O
    }), et.hasChildNodes() && !or(et.firstElementChild) && (!or(et.content) || !or(et.content.firstElementChild)) && lr(/<[/\w]/g, et.innerHTML) && lr(/<[/\w]/g, et.textContent) || kt === "select" && lr(/<template/i, et.innerHTML) || et.nodeType === 7 || mt && et.nodeType === 8 && lr(/<[/\w]/g, et.data))
      return me(et), !0;
    if (!O[kt] || ft[kt]) {
      if (!ft[kt] && Or(kt) && (at.tagNameCheck instanceof RegExp && lr(at.tagNameCheck, kt) || at.tagNameCheck instanceof Function && at.tagNameCheck(kt)))
        return !1;
      if (Zt && !fe[kt]) {
        var he = S(et) || et.parentNode, er = v(et) || et.childNodes;
        if (er && he)
          for (var Te = er.length, Ee = Te - 1; Ee >= 0; --Ee) {
            var $r = F(er[Ee], !0);
            $r.__removalCount = (et.__removalCount || 0) + 1, he.insertBefore($r, E(et));
          }
      }
      return me(et), !0;
    }
    return et instanceof h && !Me(et) || (kt === "noscript" || kt === "noembed" || kt === "noframes") && lr(/<\/no(script|embed|frames)/i, et.innerHTML) ? (me(et), !0) : (Gt && et.nodeType === 3 && (St = et.textContent, St = an(St, z, " "), St = an(St, lt, " "), St = an(St, U, " "), et.textContent !== St && (va(e.removed, {
      element: et.cloneNode()
    }), et.textContent = St)), Re("afterSanitizeElements", et, null), !1);
  }, yr = function(et, St, kt) {
    if (Ft && (St === "id" || St === "name") && (kt in a || kt in vn))
      return !1;
    if (!(xt && !dt[St] && lr(W, St))) {
      if (!(_t && lr(K, St))) {
        if (!V[St] || dt[St]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Or(et) && (at.tagNameCheck instanceof RegExp && lr(at.tagNameCheck, et) || at.tagNameCheck instanceof Function && at.tagNameCheck(et)) && (at.attributeNameCheck instanceof RegExp && lr(at.attributeNameCheck, St) || at.attributeNameCheck instanceof Function && at.attributeNameCheck(St)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            St === "is" && at.allowCustomizedBuiltInElements && (at.tagNameCheck instanceof RegExp && lr(at.tagNameCheck, kt) || at.tagNameCheck instanceof Function && at.tagNameCheck(kt)))
          ) return !1;
        } else if (!Ge[St]) {
          if (!lr(m, an(kt, st, ""))) {
            if (!((St === "src" || St === "xlink:href" || St === "href") && et !== "script" && Ff(kt, "data:") === 0 && oe[et])) {
              if (!(Ot && !lr(J, an(kt, st, "")))) {
                if (kt)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Or = function(et) {
    return et !== "annotation-xml" && xu(et, gt);
  }, ln = function(et) {
    var St, kt, he, er;
    Re("beforeSanitizeAttributes", et, null);
    var Te = et.attributes;
    if (!(!Te || br(et))) {
      var Ee = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: V
      };
      for (er = Te.length; er--; ) {
        St = Te[er];
        var $r = St, ke = $r.name, Xn = $r.namespaceURI;
        if (kt = ke === "value" ? St.value : Tf(St.value), he = qt(ke), Ee.attrName = he, Ee.attrValue = kt, Ee.keepAttr = !0, Ee.forceKeepAttr = void 0, Re("uponSanitizeAttribute", et, Ee), kt = Ee.attrValue, !Ee.forceKeepAttr && (tr(ke, et), !!Ee.keepAttr)) {
          if (!jt && lr(/\/>/i, kt)) {
            tr(ke, et);
            continue;
          }
          Gt && (kt = an(kt, z, " "), kt = an(kt, lt, " "), kt = an(kt, U, " "));
          var Kn = qt(et.nodeName);
          if (yr(Kn, he, kt)) {
            if (Ht && (he === "id" || he === "name") && (tr(ke, et), kt = $t + kt), mt && lr(/((--!?|])>)|<\/(style|title)/i, kt)) {
              tr(ke, et);
              continue;
            }
            if (D && Gn(d) === "object" && typeof d.getAttributeType == "function" && !Xn)
              switch (d.getAttributeType(Kn, he)) {
                case "TrustedHTML": {
                  kt = D.createHTML(kt);
                  break;
                }
                case "TrustedScriptURL": {
                  kt = D.createScriptURL(kt);
                  break;
                }
              }
            try {
              Xn ? et.setAttributeNS(Xn, ke, kt) : et.setAttribute(ke, kt), br(et) ? me(et) : Su(e.removed);
            } catch {
            }
          }
        }
      }
      Re("afterSanitizeAttributes", et, null);
    }
  }, kn = function zt(et) {
    var St, kt = Br(et);
    for (Re("beforeSanitizeShadowDOM", et, null); St = kt.nextNode(); )
      Re("uponSanitizeShadowNode", St, null), Er(St), ln(St), St.content instanceof u && zt(St.content);
    Re("afterSanitizeShadowDOM", et, null);
  };
  return e.sanitize = function(zt) {
    var et = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, St, kt, he, er, Te;
    if (pe = !zt, pe && (zt = "<!-->"), typeof zt != "string" && !or(zt))
      if (typeof zt.toString == "function") {
        if (zt = zt.toString(), typeof zt != "string")
          throw gs("dirty is not a string, aborting");
      } else
        throw gs("toString is not a function");
    if (!e.isSupported) {
      if (Gn(i.toStaticHTML) === "object" || typeof i.toStaticHTML == "function") {
        if (typeof zt == "string")
          return i.toStaticHTML(zt);
        if (or(zt))
          return i.toStaticHTML(zt.outerHTML);
      }
      return zt;
    }
    if (Kt || Sr(et), e.removed = [], typeof zt == "string" && (te = !1), te) {
      if (zt.nodeName) {
        var Ee = qt(zt.nodeName);
        if (!O[Ee] || ft[Ee])
          throw gs("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (zt instanceof f)
      St = bn("<!---->"), kt = St.ownerDocument.importNode(zt, !0), kt.nodeType === 1 && kt.nodeName === "BODY" || kt.nodeName === "HTML" ? St = kt : St.appendChild(kt);
    else {
      if (!Nt && !Gt && !Y && // eslint-disable-next-line unicorn/prefer-includes
      zt.indexOf("<") === -1)
        return D && Tt ? D.createHTML(zt) : zt;
      if (St = bn(zt), !St)
        return Nt ? null : Tt ? G : "";
    }
    St && Bt && me(St.firstChild);
    for (var $r = Br(te ? zt : St); he = $r.nextNode(); )
      he.nodeType === 3 && he === er || (Er(he), ln(he), he.content instanceof u && kn(he.content), er = he);
    if (er = null, te)
      return zt;
    if (Nt) {
      if (Pt)
        for (Te = Z.call(St.ownerDocument); St.firstChild; )
          Te.appendChild(St.firstChild);
      else
        Te = St;
      return (V.shadowroot || V.shadowrootmod) && (Te = N.call(r, Te, !0)), Te;
    }
    var ke = Y ? St.outerHTML : St.innerHTML;
    return Y && O["!doctype"] && St.ownerDocument && St.ownerDocument.doctype && St.ownerDocument.doctype.name && lr(Uf, St.ownerDocument.doctype.name) && (ke = "<!DOCTYPE " + St.ownerDocument.doctype.name + `>
` + ke), Gt && (ke = an(ke, z, " "), ke = an(ke, lt, " "), ke = an(ke, U, " ")), D && Tt ? D.createHTML(ke) : ke;
  }, e.setConfig = function(zt) {
    Sr(zt), Kt = !0;
  }, e.clearConfig = function() {
    ue = null, Kt = !1;
  }, e.isValidAttribute = function(zt, et, St) {
    ue || Sr({});
    var kt = qt(zt), he = qt(et);
    return yr(kt, he, St);
  }, e.addHook = function(zt, et) {
    typeof et == "function" && (B[zt] = B[zt] || [], va(B[zt], et));
  }, e.removeHook = function(zt) {
    if (B[zt])
      return Su(B[zt]);
  }, e.removeHooks = function(zt) {
    B[zt] && (B[zt] = []);
  }, e.removeAllHooks = function() {
    B = {};
  }, e;
}
var Yf = Uu();
const Jf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Yf }, Symbol.toStringTag, { value: "Module" }));
export {
  Yt as E,
  Kf as a
};

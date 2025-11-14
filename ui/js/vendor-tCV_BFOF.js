import { E as Ot } from "./vendor-socketio-C18vLChF.js";
import { I as Dt, i as $r } from "./vendor-pako-Bv9j8L58.js";
var Kr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ve(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var je = { exports: {} }, ot, Bt;
function Qr() {
  if (Bt) return ot;
  Bt = 1;
  var n = 1e3, e = n * 60, r = e * 60, t = r * 24, s = t * 7, o = t * 365.25;
  ot = function(a, c) {
    c = c || {};
    var u = typeof a;
    if (u === "string" && a.length > 0)
      return y(a);
    if (u === "number" && isFinite(a))
      return c.long ? f(a) : i(a);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(a)
    );
  };
  function y(a) {
    if (a = String(a), !(a.length > 100)) {
      var c = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        a
      );
      if (c) {
        var u = parseFloat(c[1]), l = (c[2] || "ms").toLowerCase();
        switch (l) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return u * o;
          case "weeks":
          case "week":
          case "w":
            return u * s;
          case "days":
          case "day":
          case "d":
            return u * t;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return u * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return u * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return u * n;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return u;
          default:
            return;
        }
      }
    }
  }
  function i(a) {
    var c = Math.abs(a);
    return c >= t ? Math.round(a / t) + "d" : c >= r ? Math.round(a / r) + "h" : c >= e ? Math.round(a / e) + "m" : c >= n ? Math.round(a / n) + "s" : a + "ms";
  }
  function f(a) {
    var c = Math.abs(a);
    return c >= t ? h(a, c, t, "day") : c >= r ? h(a, c, r, "hour") : c >= e ? h(a, c, e, "minute") : c >= n ? h(a, c, n, "second") : a + " ms";
  }
  function h(a, c, u, l) {
    var m = c >= u * 1.5;
    return Math.round(a / u) + " " + l + (m ? "s" : "");
  }
  return ot;
}
var ht, Pt;
function Gr() {
  if (Pt) return ht;
  Pt = 1;
  function n(e) {
    t.debug = t, t.default = t, t.coerce = h, t.disable = i, t.enable = o, t.enabled = f, t.humanize = Qr(), t.destroy = a, Object.keys(e).forEach((c) => {
      t[c] = e[c];
    }), t.names = [], t.skips = [], t.formatters = {};
    function r(c) {
      let u = 0;
      for (let l = 0; l < c.length; l++)
        u = (u << 5) - u + c.charCodeAt(l), u |= 0;
      return t.colors[Math.abs(u) % t.colors.length];
    }
    t.selectColor = r;
    function t(c) {
      let u, l = null, m, v;
      function w(...x) {
        if (!w.enabled)
          return;
        const P = w, A = Number(/* @__PURE__ */ new Date()), N = A - (u || A);
        P.diff = N, P.prev = u, P.curr = A, u = A, x[0] = t.coerce(x[0]), typeof x[0] != "string" && x.unshift("%O");
        let I = 0;
        x[0] = x[0].replace(/%([a-zA-Z%])/g, (b, p) => {
          if (b === "%%")
            return "%";
          I++;
          const d = t.formatters[p];
          if (typeof d == "function") {
            const g = x[I];
            b = d.call(P, g), x.splice(I, 1), I--;
          }
          return b;
        }), t.formatArgs.call(P, x), (P.log || t.log).apply(P, x);
      }
      return w.namespace = c, w.useColors = t.useColors(), w.color = t.selectColor(c), w.extend = s, w.destroy = t.destroy, Object.defineProperty(w, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => l !== null ? l : (m !== t.namespaces && (m = t.namespaces, v = t.enabled(c)), v),
        set: (x) => {
          l = x;
        }
      }), typeof t.init == "function" && t.init(w), w;
    }
    function s(c, u) {
      const l = t(this.namespace + (typeof u > "u" ? ":" : u) + c);
      return l.log = this.log, l;
    }
    function o(c) {
      t.save(c), t.namespaces = c, t.names = [], t.skips = [];
      const u = (typeof c == "string" ? c : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const l of u)
        l[0] === "-" ? t.skips.push(l.slice(1)) : t.names.push(l);
    }
    function y(c, u) {
      let l = 0, m = 0, v = -1, w = 0;
      for (; l < c.length; )
        if (m < u.length && (u[m] === c[l] || u[m] === "*"))
          u[m] === "*" ? (v = m, w = l, m++) : (l++, m++);
        else if (v !== -1)
          m = v + 1, w++, l = w;
        else
          return !1;
      for (; m < u.length && u[m] === "*"; )
        m++;
      return m === u.length;
    }
    function i() {
      const c = [
        ...t.names,
        ...t.skips.map((u) => "-" + u)
      ].join(",");
      return t.enable(""), c;
    }
    function f(c) {
      for (const u of t.skips)
        if (y(c, u))
          return !1;
      for (const u of t.names)
        if (y(c, u))
          return !0;
      return !1;
    }
    function h(c) {
      return c instanceof Error ? c.stack || c.message : c;
    }
    function a() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return t.enable(t.load()), t;
  }
  return ht = n, ht;
}
var qt;
function Zr() {
  return qt || (qt = 1, (function(n, e) {
    e.formatArgs = t, e.save = s, e.load = o, e.useColors = r, e.storage = y(), e.destroy = /* @__PURE__ */ (() => {
      let f = !1;
      return () => {
        f || (f = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), e.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function r() {
      if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
        return !0;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
        return !1;
      let f;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && (f = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(f[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function t(f) {
      if (f[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + f[0] + (this.useColors ? "%c " : " ") + "+" + n.exports.humanize(this.diff), !this.useColors)
        return;
      const h = "color: " + this.color;
      f.splice(1, 0, h, "color: inherit");
      let a = 0, c = 0;
      f[0].replace(/%[a-zA-Z%]/g, (u) => {
        u !== "%%" && (a++, u === "%c" && (c = a));
      }), f.splice(c, 0, h);
    }
    e.log = console.debug || console.log || (() => {
    });
    function s(f) {
      try {
        f ? e.storage.setItem("debug", f) : e.storage.removeItem("debug");
      } catch {
      }
    }
    function o() {
      let f;
      try {
        f = e.storage.getItem("debug") || e.storage.getItem("DEBUG");
      } catch {
      }
      return !f && typeof process < "u" && "env" in process && (f = void 0), f;
    }
    function y() {
      try {
        return localStorage;
      } catch {
      }
    }
    n.exports = Gr()(e);
    const { formatters: i } = n.exports;
    i.j = function(f) {
      try {
        return JSON.stringify(f);
      } catch (h) {
        return "[UnexpectedJSONParseError]: " + h.message;
      }
    };
  })(je, je.exports)), je.exports;
}
var Jr = Zr();
const $s = /* @__PURE__ */ Ve(Jr);
var Ye = { exports: {} }, ft, Ht;
function en() {
  if (Ht) return ft;
  Ht = 1;
  var n = 1e3, e = n * 60, r = e * 60, t = r * 24, s = t * 7, o = t * 365.25;
  ft = function(a, c) {
    c = c || {};
    var u = typeof a;
    if (u === "string" && a.length > 0)
      return y(a);
    if (u === "number" && isFinite(a))
      return c.long ? f(a) : i(a);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(a)
    );
  };
  function y(a) {
    if (a = String(a), !(a.length > 100)) {
      var c = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        a
      );
      if (c) {
        var u = parseFloat(c[1]), l = (c[2] || "ms").toLowerCase();
        switch (l) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return u * o;
          case "weeks":
          case "week":
          case "w":
            return u * s;
          case "days":
          case "day":
          case "d":
            return u * t;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return u * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return u * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return u * n;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return u;
          default:
            return;
        }
      }
    }
  }
  function i(a) {
    var c = Math.abs(a);
    return c >= t ? Math.round(a / t) + "d" : c >= r ? Math.round(a / r) + "h" : c >= e ? Math.round(a / e) + "m" : c >= n ? Math.round(a / n) + "s" : a + "ms";
  }
  function f(a) {
    var c = Math.abs(a);
    return c >= t ? h(a, c, t, "day") : c >= r ? h(a, c, r, "hour") : c >= e ? h(a, c, e, "minute") : c >= n ? h(a, c, n, "second") : a + " ms";
  }
  function h(a, c, u, l) {
    var m = c >= u * 1.5;
    return Math.round(a / u) + " " + l + (m ? "s" : "");
  }
  return ft;
}
var ct, Vt;
function tn() {
  if (Vt) return ct;
  Vt = 1;
  function n(e) {
    t.debug = t, t.default = t, t.coerce = h, t.disable = i, t.enable = o, t.enabled = f, t.humanize = en(), t.destroy = a, Object.keys(e).forEach((c) => {
      t[c] = e[c];
    }), t.names = [], t.skips = [], t.formatters = {};
    function r(c) {
      let u = 0;
      for (let l = 0; l < c.length; l++)
        u = (u << 5) - u + c.charCodeAt(l), u |= 0;
      return t.colors[Math.abs(u) % t.colors.length];
    }
    t.selectColor = r;
    function t(c) {
      let u, l = null, m, v;
      function w(...x) {
        if (!w.enabled)
          return;
        const P = w, A = Number(/* @__PURE__ */ new Date()), N = A - (u || A);
        P.diff = N, P.prev = u, P.curr = A, u = A, x[0] = t.coerce(x[0]), typeof x[0] != "string" && x.unshift("%O");
        let I = 0;
        x[0] = x[0].replace(/%([a-zA-Z%])/g, (b, p) => {
          if (b === "%%")
            return "%";
          I++;
          const d = t.formatters[p];
          if (typeof d == "function") {
            const g = x[I];
            b = d.call(P, g), x.splice(I, 1), I--;
          }
          return b;
        }), t.formatArgs.call(P, x), (P.log || t.log).apply(P, x);
      }
      return w.namespace = c, w.useColors = t.useColors(), w.color = t.selectColor(c), w.extend = s, w.destroy = t.destroy, Object.defineProperty(w, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => l !== null ? l : (m !== t.namespaces && (m = t.namespaces, v = t.enabled(c)), v),
        set: (x) => {
          l = x;
        }
      }), typeof t.init == "function" && t.init(w), w;
    }
    function s(c, u) {
      const l = t(this.namespace + (typeof u > "u" ? ":" : u) + c);
      return l.log = this.log, l;
    }
    function o(c) {
      t.save(c), t.namespaces = c, t.names = [], t.skips = [];
      const u = (typeof c == "string" ? c : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const l of u)
        l[0] === "-" ? t.skips.push(l.slice(1)) : t.names.push(l);
    }
    function y(c, u) {
      let l = 0, m = 0, v = -1, w = 0;
      for (; l < c.length; )
        if (m < u.length && (u[m] === c[l] || u[m] === "*"))
          u[m] === "*" ? (v = m, w = l, m++) : (l++, m++);
        else if (v !== -1)
          m = v + 1, w++, l = w;
        else
          return !1;
      for (; m < u.length && u[m] === "*"; )
        m++;
      return m === u.length;
    }
    function i() {
      const c = [
        ...t.names,
        ...t.skips.map((u) => "-" + u)
      ].join(",");
      return t.enable(""), c;
    }
    function f(c) {
      for (const u of t.skips)
        if (y(c, u))
          return !1;
      for (const u of t.names)
        if (y(c, u))
          return !0;
      return !1;
    }
    function h(c) {
      return c instanceof Error ? c.stack || c.message : c;
    }
    function a() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return t.enable(t.load()), t;
  }
  return ct = n, ct;
}
var Wt;
function rn() {
  return Wt || (Wt = 1, (function(n, e) {
    e.formatArgs = t, e.save = s, e.load = o, e.useColors = r, e.storage = y(), e.destroy = /* @__PURE__ */ (() => {
      let f = !1;
      return () => {
        f || (f = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), e.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function r() {
      if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
        return !0;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
        return !1;
      let f;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && (f = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(f[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function t(f) {
      if (f[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + f[0] + (this.useColors ? "%c " : " ") + "+" + n.exports.humanize(this.diff), !this.useColors)
        return;
      const h = "color: " + this.color;
      f.splice(1, 0, h, "color: inherit");
      let a = 0, c = 0;
      f[0].replace(/%[a-zA-Z%]/g, (u) => {
        u !== "%%" && (a++, u === "%c" && (c = a));
      }), f.splice(c, 0, h);
    }
    e.log = console.debug || console.log || (() => {
    });
    function s(f) {
      try {
        f ? e.storage.setItem("debug", f) : e.storage.removeItem("debug");
      } catch {
      }
    }
    function o() {
      let f;
      try {
        f = e.storage.getItem("debug") || e.storage.getItem("DEBUG");
      } catch {
      }
      return !f && typeof process < "u" && "env" in process && (f = void 0), f;
    }
    function y() {
      try {
        return localStorage;
      } catch {
      }
    }
    n.exports = tn()(e);
    const { formatters: i } = n.exports;
    i.j = function(f) {
      try {
        return JSON.stringify(f);
      } catch (h) {
        return "[UnexpectedJSONParseError]: " + h.message;
      }
    };
  })(Ye, Ye.exports)), Ye.exports;
}
var nn = rn();
const Ks = /* @__PURE__ */ Ve(nn), Te = /* @__PURE__ */ Object.create(null);
Te.open = "0";
Te.close = "1";
Te.ping = "2";
Te.pong = "3";
Te.message = "4";
Te.upgrade = "5";
Te.noop = "6";
const Qe = /* @__PURE__ */ Object.create(null);
Object.keys(Te).forEach((n) => {
  Qe[Te[n]] = n;
});
const Ct = { type: "error", data: "parser error" }, _r = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", wr = typeof ArrayBuffer == "function", Cr = (n) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(n) : n && n.buffer instanceof ArrayBuffer, kt = ({ type: n, data: e }, r, t) => _r && e instanceof Blob ? r ? t(e) : Xt(e, t) : wr && (e instanceof ArrayBuffer || Cr(e)) ? r ? t(e) : Xt(new Blob([e]), t) : t(Te[n] + (e || "")), Xt = (n, e) => {
  const r = new FileReader();
  return r.onload = function() {
    const t = r.result.split(",")[1];
    e("b" + (t || ""));
  }, r.readAsDataURL(n);
};
function jt(n) {
  return n instanceof Uint8Array ? n : n instanceof ArrayBuffer ? new Uint8Array(n) : new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
}
let ut;
function sn(n, e) {
  if (_r && n.data instanceof Blob)
    return n.data.arrayBuffer().then(jt).then(e);
  if (wr && (n.data instanceof ArrayBuffer || Cr(n.data)))
    return e(jt(n.data));
  kt(n, !1, (r) => {
    ut || (ut = new TextEncoder()), e(ut.encode(r));
  });
}
const Yt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Pe = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let n = 0; n < Yt.length; n++)
  Pe[Yt.charCodeAt(n)] = n;
const an = (n) => {
  let e = n.length * 0.75, r = n.length, t, s = 0, o, y, i, f;
  n[n.length - 1] === "=" && (e--, n[n.length - 2] === "=" && e--);
  const h = new ArrayBuffer(e), a = new Uint8Array(h);
  for (t = 0; t < r; t += 4)
    o = Pe[n.charCodeAt(t)], y = Pe[n.charCodeAt(t + 1)], i = Pe[n.charCodeAt(t + 2)], f = Pe[n.charCodeAt(t + 3)], a[s++] = o << 2 | y >> 4, a[s++] = (y & 15) << 4 | i >> 2, a[s++] = (i & 3) << 6 | f & 63;
  return h;
}, on = typeof ArrayBuffer == "function", Rt = (n, e) => {
  if (typeof n != "string")
    return {
      type: "message",
      data: br(n, e)
    };
  const r = n.charAt(0);
  return r === "b" ? {
    type: "message",
    data: hn(n.substring(1), e)
  } : Qe[r] ? n.length > 1 ? {
    type: Qe[r],
    data: n.substring(1)
  } : {
    type: Qe[r]
  } : Ct;
}, hn = (n, e) => {
  if (on) {
    const r = an(n);
    return br(r, e);
  } else
    return { base64: !0, data: n };
}, br = (n, e) => {
  switch (e) {
    case "blob":
      return n instanceof Blob ? n : new Blob([n]);
    case "arraybuffer":
    default:
      return n instanceof ArrayBuffer ? n : n.buffer;
  }
}, Er = "", fn = (n, e) => {
  const r = n.length, t = new Array(r);
  let s = 0;
  n.forEach((o, y) => {
    kt(o, !1, (i) => {
      t[y] = i, ++s === r && e(t.join(Er));
    });
  });
}, cn = (n, e) => {
  const r = n.split(Er), t = [];
  for (let s = 0; s < r.length; s++) {
    const o = Rt(r[s], e);
    if (t.push(o), o.type === "error")
      break;
  }
  return t;
};
function un() {
  return new TransformStream({
    transform(n, e) {
      sn(n, (r) => {
        const t = r.length;
        let s;
        if (t < 126)
          s = new Uint8Array(1), new DataView(s.buffer).setUint8(0, t);
        else if (t < 65536) {
          s = new Uint8Array(3);
          const o = new DataView(s.buffer);
          o.setUint8(0, 126), o.setUint16(1, t);
        } else {
          s = new Uint8Array(9);
          const o = new DataView(s.buffer);
          o.setUint8(0, 127), o.setBigUint64(1, BigInt(t));
        }
        n.data && typeof n.data != "string" && (s[0] |= 128), e.enqueue(s), e.enqueue(r);
      });
    }
  });
}
let lt;
function ze(n) {
  return n.reduce((e, r) => e + r.length, 0);
}
function $e(n, e) {
  if (n[0].length === e)
    return n.shift();
  const r = new Uint8Array(e);
  let t = 0;
  for (let s = 0; s < e; s++)
    r[s] = n[0][t++], t === n[0].length && (n.shift(), t = 0);
  return n.length && t < n[0].length && (n[0] = n[0].slice(t)), r;
}
function ln(n, e) {
  lt || (lt = new TextDecoder());
  const r = [];
  let t = 0, s = -1, o = !1;
  return new TransformStream({
    transform(y, i) {
      for (r.push(y); ; ) {
        if (t === 0) {
          if (ze(r) < 1)
            break;
          const f = $e(r, 1);
          o = (f[0] & 128) === 128, s = f[0] & 127, s < 126 ? t = 3 : s === 126 ? t = 1 : t = 2;
        } else if (t === 1) {
          if (ze(r) < 2)
            break;
          const f = $e(r, 2);
          s = new DataView(f.buffer, f.byteOffset, f.length).getUint16(0), t = 3;
        } else if (t === 2) {
          if (ze(r) < 8)
            break;
          const f = $e(r, 8), h = new DataView(f.buffer, f.byteOffset, f.length), a = h.getUint32(0);
          if (a > Math.pow(2, 21) - 1) {
            i.enqueue(Ct);
            break;
          }
          s = a * Math.pow(2, 32) + h.getUint32(4), t = 3;
        } else {
          if (ze(r) < s)
            break;
          const f = $e(r, s);
          i.enqueue(Rt(o ? f : lt.decode(f), e)), t = 0;
        }
        if (s === 0 || s > n) {
          i.enqueue(Ct);
          break;
        }
      }
    }
  });
}
const Tr = 4, Nt = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, r) => r(e, 0), ve = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), dn = "arraybuffer";
function xr(n, ...e) {
  return e.reduce((r, t) => (n.hasOwnProperty(t) && (r[t] = n[t]), r), {});
}
const pn = ve.setTimeout, yn = ve.clearTimeout;
function Ft(n, e) {
  e.useNativeTimers ? (n.setTimeoutFn = pn.bind(ve), n.clearTimeoutFn = yn.bind(ve)) : (n.setTimeoutFn = ve.setTimeout.bind(ve), n.clearTimeoutFn = ve.clearTimeout.bind(ve));
}
const gn = 1.33;
function mn(n) {
  return typeof n == "string" ? vn(n) : Math.ceil((n.byteLength || n.size) * gn);
}
function vn(n) {
  let e = 0, r = 0;
  for (let t = 0, s = n.length; t < s; t++)
    e = n.charCodeAt(t), e < 128 ? r += 1 : e < 2048 ? r += 2 : e < 55296 || e >= 57344 ? r += 3 : (t++, r += 4);
  return r;
}
function Ar() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function _n(n) {
  let e = "";
  for (let r in n)
    n.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(n[r]));
  return e;
}
function wn(n) {
  let e = {}, r = n.split("&");
  for (let t = 0, s = r.length; t < s; t++) {
    let o = r[t].split("=");
    e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
  }
  return e;
}
class Cn extends Error {
  constructor(e, r, t) {
    super(e), this.description = r, this.context = t, this.type = "TransportError";
  }
}
class Ut extends Ot {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, Ft(this, e), this.opts = e, this.query = e.query, this.socket = e.socket, this.supportsBinary = !e.forceBase64;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(e, r, t) {
    return super.emitReserved("error", new Cn(e, r, t)), this;
  }
  /**
   * Opens the transport.
   */
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  /**
   * Closes the transport.
   */
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(e) {
    this.readyState === "open" && this.write(e);
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(e) {
    const r = Rt(e, this.socket.binaryType);
    this.onPacket(r);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(e) {
    super.emitReserved("packet", e);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(e) {
    this.readyState = "closed", super.emitReserved("close", e);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(e) {
  }
  createUri(e, r = {}) {
    return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(r);
  }
  _hostname() {
    const e = this.opts.hostname;
    return e.indexOf(":") === -1 ? e : "[" + e + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(e) {
    const r = _n(e);
    return r.length ? "?" + r : "";
  }
}
class bn extends Ut {
  constructor() {
    super(...arguments), this._polling = !1;
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this._poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(e) {
    this.readyState = "pausing";
    const r = () => {
      this.readyState = "paused", e();
    };
    if (this._polling || !this.writable) {
      let t = 0;
      this._polling && (t++, this.once("pollComplete", function() {
        --t || r();
      })), this.writable || (t++, this.once("drain", function() {
        --t || r();
      }));
    } else
      r();
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  _poll() {
    this._polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(e) {
    const r = (t) => {
      if (this.readyState === "opening" && t.type === "open" && this.onOpen(), t.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(t);
    };
    cn(e, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const e = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? e() : this.once("open", e);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(e) {
    this.writable = !1, fn(e, (r) => {
      this.doWrite(r, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const e = this.opts.secure ? "https" : "http", r = this.query || {};
    return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = Ar()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(e, r);
  }
}
let Or = !1;
try {
  Or = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const En = Or;
function Tn() {
}
class xn extends bn {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(e) {
    if (super(e), typeof location < "u") {
      const r = location.protocol === "https:";
      let t = location.port;
      t || (t = r ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || t !== e.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(e, r) {
    const t = this.request({
      method: "POST",
      data: e
    });
    t.on("success", r), t.on("error", (s, o) => {
      this.onError("xhr post error", s, o);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const e = this.request();
    e.on("data", this.onData.bind(this)), e.on("error", (r, t) => {
      this.onError("xhr poll error", r, t);
    }), this.pollXhr = e;
  }
}
class Ee extends Ot {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, r, t) {
    super(), this.createRequest = e, Ft(this, t), this._opts = t, this._method = t.method || "GET", this._uri = r, this._data = t.data !== void 0 ? t.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var e;
    const r = xr(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    r.xdomain = !!this._opts.xd;
    const t = this._xhr = this.createRequest(r);
    try {
      t.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0);
          for (let s in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(s) && t.setRequestHeader(s, this._opts.extraHeaders[s]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          t.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        t.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(t), "withCredentials" in t && (t.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (t.timeout = this._opts.requestTimeout), t.onreadystatechange = () => {
        var s;
        t.readyState === 3 && ((s = this._opts.cookieJar) === null || s === void 0 || s.parseCookies(
          // @ts-ignore
          t.getResponseHeader("set-cookie")
        )), t.readyState === 4 && (t.status === 200 || t.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof t.status == "number" ? t.status : 0);
        }, 0));
      }, t.send(this._data);
    } catch (s) {
      this.setTimeoutFn(() => {
        this._onError(s);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = Ee.requestsCount++, Ee.requests[this._index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(e) {
    this.emitReserved("error", e, this._xhr), this._cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(e) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (this._xhr.onreadystatechange = Tn, e)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Ee.requests[this._index], this._xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const e = this._xhr.responseText;
    e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this._cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this._cleanup();
  }
}
Ee.requestsCount = 0;
Ee.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", zt);
  else if (typeof addEventListener == "function") {
    const n = "onpagehide" in ve ? "pagehide" : "unload";
    addEventListener(n, zt, !1);
  }
}
function zt() {
  for (let n in Ee.requests)
    Ee.requests.hasOwnProperty(n) && Ee.requests[n].abort();
}
const An = (function() {
  const n = kr({
    xdomain: !1
  });
  return n && n.responseType !== null;
})();
class On extends xn {
  constructor(e) {
    super(e);
    const r = e && e.forceBase64;
    this.supportsBinary = An && !r;
  }
  request(e = {}) {
    return Object.assign(e, { xd: this.xd }, this.opts), new Ee(kr, this.uri(), e);
  }
}
function kr(n) {
  const e = n.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || En))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new ve[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Rr = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class kn extends Ut {
  get name() {
    return "websocket";
  }
  doOpen() {
    const e = this.uri(), r = this.opts.protocols, t = Rr ? {} : xr(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (t.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(e, r, t);
    } catch (s) {
      return this.emitReserved("error", s);
    }
    this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (e) => this.onClose({
      description: "websocket connection closed",
      context: e
    }), this.ws.onmessage = (e) => this.onData(e.data), this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(e) {
    this.writable = !1;
    for (let r = 0; r < e.length; r++) {
      const t = e[r], s = r === e.length - 1;
      kt(t, this.supportsBinary, (o) => {
        try {
          this.doWrite(t, o);
        } catch {
        }
        s && Nt(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.onerror = () => {
    }, this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const e = this.opts.secure ? "wss" : "ws", r = this.query || {};
    return this.opts.timestampRequests && (r[this.opts.timestampParam] = Ar()), this.supportsBinary || (r.b64 = 1), this.createUri(e, r);
  }
}
const dt = ve.WebSocket || ve.MozWebSocket;
class Rn extends kn {
  createSocket(e, r, t) {
    return Rr ? new dt(e, r, t) : r ? new dt(e, r) : new dt(e);
  }
  doWrite(e, r) {
    this.ws.send(r);
  }
}
class Nn extends Ut {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (e) {
      return this.emitReserved("error", e);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((e) => {
      this.onError("webtransport error", e);
    }), this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((e) => {
        const r = ln(Number.MAX_SAFE_INTEGER, this.socket.binaryType), t = e.readable.pipeThrough(r).getReader(), s = un();
        s.readable.pipeTo(e.writable), this._writer = s.writable.getWriter();
        const o = () => {
          t.read().then(({ done: i, value: f }) => {
            i || (this.onPacket(f), o());
          }).catch((i) => {
          });
        };
        o();
        const y = { type: "open" };
        this.query.sid && (y.data = `{"sid":"${this.query.sid}"}`), this._writer.write(y).then(() => this.onOpen());
      });
    });
  }
  write(e) {
    this.writable = !1;
    for (let r = 0; r < e.length; r++) {
      const t = e[r], s = r === e.length - 1;
      this._writer.write(t).then(() => {
        s && Nt(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var e;
    (e = this._transport) === null || e === void 0 || e.close();
  }
}
const Fn = {
  websocket: Rn,
  webtransport: Nn,
  polling: On
}, Un = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Mn = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function $t(n) {
  if (n.length > 8e3)
    throw "URI too long";
  const e = n, r = n.indexOf("["), t = n.indexOf("]");
  r != -1 && t != -1 && (n = n.substring(0, r) + n.substring(r, t).replace(/:/g, ";") + n.substring(t, n.length));
  let s = Un.exec(n || ""), o = {}, y = 14;
  for (; y--; )
    o[Mn[y]] = s[y] || "";
  return r != -1 && t != -1 && (o.source = e, o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":"), o.authority = o.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), o.ipv6uri = !0), o.pathNames = Sn(o, o.path), o.queryKey = In(o, o.query), o;
}
function Sn(n, e) {
  const r = /\/{2,9}/g, t = e.replace(r, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && t.splice(0, 1), e.slice(-1) == "/" && t.splice(t.length - 1, 1), t;
}
function In(n, e) {
  const r = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(t, s, o) {
    s && (r[s] = o);
  }), r;
}
const bt = typeof addEventListener == "function" && typeof removeEventListener == "function", Ge = [];
bt && addEventListener("offline", () => {
  Ge.forEach((n) => n());
}, !1);
class Fe extends Ot {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, r) {
    if (super(), this.binaryType = dn, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, e && typeof e == "object" && (r = e, e = null), e) {
      const t = $t(e);
      r.hostname = t.host, r.secure = t.protocol === "https" || t.protocol === "wss", r.port = t.port, t.query && (r.query = t.query);
    } else r.host && (r.hostname = $t(r.host).host);
    Ft(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, r.transports.forEach((t) => {
      const s = t.prototype.name;
      this.transports.push(s), this._transportsByName[s] = t;
    }), this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      addTrailingSlash: !0,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !1
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = wn(this.opts.query)), bt && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, Ge.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(e) {
    const r = Object.assign({}, this.opts.query);
    r.EIO = Tr, r.transport = e, this.id && (r.sid = this.id);
    const t = Object.assign({}, this.opts, {
      query: r,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[e]);
    return new this._transportsByName[e](t);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const e = this.opts.rememberUpgrade && Fe.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const r = this.createTransport(e);
    r.open(), this.setTransport(r);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(e) {
    this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (r) => this._onClose("transport close", r));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", Fe.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), e.type) {
        case "open":
          this.onHandshake(JSON.parse(e.data));
          break;
        case "ping":
          this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
          break;
        case "error":
          const r = new Error("server error");
          r.code = e.data, this._onError(r);
          break;
        case "message":
          this.emitReserved("data", e.data), this.emitReserved("message", e.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(e) {
    this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this._pingInterval = e.pingInterval, this._pingTimeout = e.pingTimeout, this._maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const e = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + e, this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, e), this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const e = this._getWritablePackets();
      this.transport.send(e), this._prevBufferLen = e.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  _getWritablePackets() {
    if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let r = 1;
    for (let t = 0; t < this.writeBuffer.length; t++) {
      const s = this.writeBuffer[t].data;
      if (s && (r += mn(s)), t > 0 && r > this._maxPayload)
        return this.writeBuffer.slice(0, t);
      r += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
   *
   * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
   * `write()` method then the message would not be buffered by the Socket.IO client.
   *
   * @return {boolean}
   * @private
   */
  /* private */
  _hasPingExpired() {
    if (!this._pingTimeoutTime)
      return !0;
    const e = Date.now() > this._pingTimeoutTime;
    return e && (this._pingTimeoutTime = 0, Nt(() => {
      this._onClose("ping timeout");
    }, this.setTimeoutFn)), e;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(e, r, t) {
    return this._sendPacket("message", e, r, t), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(e, r, t) {
    return this._sendPacket("message", e, r, t), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  _sendPacket(e, r, t, s) {
    if (typeof r == "function" && (s = r, r = void 0), typeof t == "function" && (s = t, t = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    t = t || {}, t.compress = t.compress !== !1;
    const o = {
      type: e,
      data: r,
      options: t
    };
    this.emitReserved("packetCreate", o), this.writeBuffer.push(o), s && this.once("flush", s), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const e = () => {
      this._onClose("forced close"), this.transport.close();
    }, r = () => {
      this.off("upgrade", r), this.off("upgradeError", r), e();
    }, t = () => {
      this.once("upgrade", r), this.once("upgradeError", r);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? t() : e();
    }) : this.upgrading ? t() : e()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(e) {
    if (Fe.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", e), this._onClose("transport error", e);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(e, r) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), bt && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const t = Ge.indexOf(this._offlineEventListener);
        t !== -1 && Ge.splice(t, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", e, r), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Fe.protocol = Tr;
class Ln extends Fe {
  constructor() {
    super(...arguments), this._upgrades = [];
  }
  onOpen() {
    if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
      for (let e = 0; e < this._upgrades.length; e++)
        this._probe(this._upgrades[e]);
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(e) {
    let r = this.createTransport(e), t = !1;
    Fe.priorWebsocketSuccess = !1;
    const s = () => {
      t || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (c) => {
        if (!t)
          if (c.type === "pong" && c.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", r), !r)
              return;
            Fe.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
              t || this.readyState !== "closed" && (a(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = !1, this.flush());
            });
          } else {
            const u = new Error("probe error");
            u.transport = r.name, this.emitReserved("upgradeError", u);
          }
      }));
    };
    function o() {
      t || (t = !0, a(), r.close(), r = null);
    }
    const y = (c) => {
      const u = new Error("probe error: " + c);
      u.transport = r.name, o(), this.emitReserved("upgradeError", u);
    };
    function i() {
      y("transport closed");
    }
    function f() {
      y("socket closed");
    }
    function h(c) {
      r && c.name !== r.name && o();
    }
    const a = () => {
      r.removeListener("open", s), r.removeListener("error", y), r.removeListener("close", i), this.off("close", f), this.off("upgrading", h);
    };
    r.once("open", s), r.once("error", y), r.once("close", i), this.once("close", f), this.once("upgrading", h), this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
      t || r.open();
    }, 200) : r.open();
  }
  onHandshake(e) {
    this._upgrades = this._filterUpgrades(e.upgrades), super.onHandshake(e);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(e) {
    const r = [];
    for (let t = 0; t < e.length; t++)
      ~this.transports.indexOf(e[t]) && r.push(e[t]);
    return r;
  }
}
class Qs extends Ln {
  constructor(e, r = {}) {
    const t = typeof e == "object" ? e : r;
    (!t.transports || t.transports && typeof t.transports[0] == "string") && (t.transports = (t.transports || ["polling", "websocket", "webtransport"]).map((s) => Fn[s]).filter((s) => !!s)), super(e, t);
  }
}
function He(n) {
  "@babel/helpers - typeof";
  return He = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, He(n);
}
var be = Uint8Array, me = Uint16Array, Mt = Int32Array, St = new be([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), It = new be([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), Kt = new be([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Nr = function(n, e) {
  for (var r = new me(31), t = 0; t < 31; ++t)
    r[t] = e += 1 << n[t - 1];
  for (var s = new Mt(r[30]), t = 1; t < 30; ++t)
    for (var o = r[t]; o < r[t + 1]; ++o)
      s[o] = o - r[t] << 5 | t;
  return { b: r, r: s };
}, Fr = Nr(St, 2), Dn = Fr.b, Et = Fr.r;
Dn[28] = 258, Et[258] = 28;
var Bn = Nr(It, 0), Qt = Bn.r, Tt = new me(32768);
for (var re = 0; re < 32768; ++re) {
  var Re = (re & 43690) >> 1 | (re & 21845) << 1;
  Re = (Re & 52428) >> 2 | (Re & 13107) << 2, Re = (Re & 61680) >> 4 | (Re & 3855) << 4, Tt[re] = ((Re & 65280) >> 8 | (Re & 255) << 8) >> 1;
}
var qe = (function(n, e, r) {
  for (var t = n.length, s = 0, o = new me(e); s < t; ++s)
    n[s] && ++o[n[s] - 1];
  var y = new me(e);
  for (s = 1; s < e; ++s)
    y[s] = y[s - 1] + o[s - 1] << 1;
  var i;
  if (r) {
    i = new me(1 << e);
    var f = 15 - e;
    for (s = 0; s < t; ++s)
      if (n[s])
        for (var h = s << 4 | n[s], a = e - n[s], c = y[n[s] - 1]++ << a, u = c | (1 << a) - 1; c <= u; ++c)
          i[Tt[c] >> f] = h;
  } else
    for (i = new me(t), s = 0; s < t; ++s)
      n[s] && (i[s] = Tt[y[n[s] - 1]++] >> 15 - n[s]);
  return i;
}), Se = new be(288);
for (var re = 0; re < 144; ++re)
  Se[re] = 8;
for (var re = 144; re < 256; ++re)
  Se[re] = 9;
for (var re = 256; re < 280; ++re)
  Se[re] = 7;
for (var re = 280; re < 288; ++re)
  Se[re] = 8;
var tt = new be(32);
for (var re = 0; re < 32; ++re)
  tt[re] = 5;
var Pn = /* @__PURE__ */ qe(Se, 9, 0), qn = /* @__PURE__ */ qe(tt, 5, 0), Ur = function(n) {
  return (n + 7) / 8 | 0;
}, Hn = function(n, e, r) {
  return (r == null || r > n.length) && (r = n.length), new be(n.subarray(e, r));
}, xe = function(n, e, r) {
  r <<= e & 7;
  var t = e / 8 | 0;
  n[t] |= r, n[t + 1] |= r >> 8;
}, Le = function(n, e, r) {
  r <<= e & 7;
  var t = e / 8 | 0;
  n[t] |= r, n[t + 1] |= r >> 8, n[t + 2] |= r >> 16;
}, pt = function(n, e) {
  for (var r = [], t = 0; t < n.length; ++t)
    n[t] && r.push({ s: t, f: n[t] });
  var s = r.length, o = r.slice();
  if (!s)
    return { t: Sr, l: 0 };
  if (s == 1) {
    var y = new be(r[0].s + 1);
    return y[r[0].s] = 1, { t: y, l: 1 };
  }
  r.sort(function(I, M) {
    return I.f - M.f;
  }), r.push({ s: -1, f: 25001 });
  var i = r[0], f = r[1], h = 0, a = 1, c = 2;
  for (r[0] = { s: -1, f: i.f + f.f, l: i, r: f }; a != s - 1; )
    i = r[r[h].f < r[c].f ? h++ : c++], f = r[h != a && r[h].f < r[c].f ? h++ : c++], r[a++] = { s: -1, f: i.f + f.f, l: i, r: f };
  for (var u = o[0].s, t = 1; t < s; ++t)
    o[t].s > u && (u = o[t].s);
  var l = new me(u + 1), m = xt(r[a - 1], l, 0);
  if (m > e) {
    var t = 0, v = 0, w = m - e, x = 1 << w;
    for (o.sort(function(M, b) {
      return l[b.s] - l[M.s] || M.f - b.f;
    }); t < s; ++t) {
      var P = o[t].s;
      if (l[P] > e)
        v += x - (1 << m - l[P]), l[P] = e;
      else
        break;
    }
    for (v >>= w; v > 0; ) {
      var A = o[t].s;
      l[A] < e ? v -= 1 << e - l[A]++ - 1 : ++t;
    }
    for (; t >= 0 && v; --t) {
      var N = o[t].s;
      l[N] == e && (--l[N], ++v);
    }
    m = e;
  }
  return { t: new be(l), l: m };
}, xt = function(n, e, r) {
  return n.s == -1 ? Math.max(xt(n.l, e, r + 1), xt(n.r, e, r + 1)) : e[n.s] = r;
}, Gt = function(n) {
  for (var e = n.length; e && !n[--e]; )
    ;
  for (var r = new me(++e), t = 0, s = n[0], o = 1, y = function(f) {
    r[t++] = f;
  }, i = 1; i <= e; ++i)
    if (n[i] == s && i != e)
      ++o;
    else {
      if (!s && o > 2) {
        for (; o > 138; o -= 138)
          y(32754);
        o > 2 && (y(o > 10 ? o - 11 << 5 | 28690 : o - 3 << 5 | 12305), o = 0);
      } else if (o > 3) {
        for (y(s), --o; o > 6; o -= 6)
          y(8304);
        o > 2 && (y(o - 3 << 5 | 8208), o = 0);
      }
      for (; o--; )
        y(s);
      o = 1, s = n[i];
    }
  return { c: r.subarray(0, t), n: e };
}, De = function(n, e) {
  for (var r = 0, t = 0; t < e.length; ++t)
    r += n[t] * e[t];
  return r;
}, Mr = function(n, e, r) {
  var t = r.length, s = Ur(e + 2);
  n[s] = t & 255, n[s + 1] = t >> 8, n[s + 2] = n[s] ^ 255, n[s + 3] = n[s + 1] ^ 255;
  for (var o = 0; o < t; ++o)
    n[s + o + 4] = r[o];
  return (s + 4 + t) * 8;
}, Zt = function(n, e, r, t, s, o, y, i, f, h, a) {
  xe(e, a++, r), ++s[256];
  for (var c = pt(s, 15), u = c.t, l = c.l, m = pt(o, 15), v = m.t, w = m.l, x = Gt(u), P = x.c, A = x.n, N = Gt(v), I = N.c, M = N.n, b = new me(19), p = 0; p < P.length; ++p)
    ++b[P[p] & 31];
  for (var p = 0; p < I.length; ++p)
    ++b[I[p] & 31];
  for (var d = pt(b, 7), g = d.t, E = d.l, C = 19; C > 4 && !g[Kt[C - 1]]; --C)
    ;
  var F = h + 5 << 3, D = De(s, Se) + De(o, tt) + y, W = De(s, u) + De(o, v) + y + 14 + 3 * C + De(b, g) + 2 * b[16] + 3 * b[17] + 7 * b[18];
  if (f >= 0 && F <= D && F <= W)
    return Mr(e, a, n.subarray(f, f + h));
  var z, k, L, T;
  if (xe(e, a, 1 + (W < D)), a += 2, W < D) {
    z = qe(u, l, 0), k = u, L = qe(v, w, 0), T = v;
    var B = qe(g, E, 0);
    xe(e, a, A - 257), xe(e, a + 5, M - 1), xe(e, a + 10, C - 4), a += 14;
    for (var p = 0; p < C; ++p)
      xe(e, a + 3 * p, g[Kt[p]]);
    a += 3 * C;
    for (var R = [P, I], U = 0; U < 2; ++U)
      for (var O = R[U], p = 0; p < O.length; ++p) {
        var X = O[p] & 31;
        xe(e, a, B[X]), a += g[X], X > 15 && (xe(e, a, O[p] >> 5 & 127), a += O[p] >> 12);
      }
  } else
    z = Pn, k = Se, L = qn, T = tt;
  for (var p = 0; p < i; ++p) {
    var q = t[p];
    if (q > 255) {
      var X = q >> 18 & 31;
      Le(e, a, z[X + 257]), a += k[X + 257], X > 7 && (xe(e, a, q >> 23 & 31), a += St[X]);
      var Z = q & 31;
      Le(e, a, L[Z]), a += T[Z], Z > 3 && (Le(e, a, q >> 5 & 8191), a += It[Z]);
    } else
      Le(e, a, z[q]), a += k[q];
  }
  return Le(e, a, z[256]), a + k[256];
}, Vn = /* @__PURE__ */ new Mt([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Sr = /* @__PURE__ */ new be(0), Wn = function(n, e, r, t, s, o) {
  var y = o.z || n.length, i = new be(t + y + 5 * (1 + Math.ceil(y / 7e3)) + s), f = i.subarray(t, i.length - s), h = o.l, a = (o.r || 0) & 7;
  if (e) {
    a && (f[0] = o.r >> 3);
    for (var c = Vn[e - 1], u = c >> 13, l = c & 8191, m = (1 << r) - 1, v = o.p || new me(32768), w = o.h || new me(m + 1), x = Math.ceil(r / 3), P = 2 * x, A = function(j) {
      return (n[j] ^ n[j + 1] << x ^ n[j + 2] << P) & m;
    }, N = new Mt(25e3), I = new me(288), M = new me(32), b = 0, p = 0, d = o.i || 0, g = 0, E = o.w || 0, C = 0; d + 2 < y; ++d) {
      var F = A(d), D = d & 32767, W = w[F];
      if (v[D] = W, w[F] = D, E <= d) {
        var z = y - d;
        if ((b > 7e3 || g > 24576) && (z > 423 || !h)) {
          a = Zt(n, f, 0, N, I, M, p, g, C, d - C, a), g = b = p = 0, C = d;
          for (var k = 0; k < 286; ++k)
            I[k] = 0;
          for (var k = 0; k < 30; ++k)
            M[k] = 0;
        }
        var L = 2, T = 0, B = l, R = D - W & 32767;
        if (z > 2 && F == A(d - R))
          for (var U = Math.min(u, z) - 1, O = Math.min(32767, d), X = Math.min(258, z); R <= O && --B && D != W; ) {
            if (n[d + L] == n[d + L - R]) {
              for (var q = 0; q < X && n[d + q] == n[d + q - R]; ++q)
                ;
              if (q > L) {
                if (L = q, T = R, q > U)
                  break;
                for (var Z = Math.min(R, q - 2), ie = 0, k = 0; k < Z; ++k) {
                  var V = d - R + k & 32767, $ = v[V], G = V - $ & 32767;
                  G > ie && (ie = G, W = V);
                }
              }
            }
            D = W, W = v[D], R += D - W & 32767;
          }
        if (T) {
          N[g++] = 268435456 | Et[L] << 18 | Qt[T];
          var S = Et[L] & 31, J = Qt[T] & 31;
          p += St[S] + It[J], ++I[257 + S], ++M[J], E = d + L, ++b;
        } else
          N[g++] = n[d], ++I[n[d]];
      }
    }
    for (d = Math.max(d, E); d < y; ++d)
      N[g++] = n[d], ++I[n[d]];
    a = Zt(n, f, h, N, I, M, p, g, C, d - C, a), h || (o.r = a & 7 | f[a / 8 | 0] << 3, a -= 7, o.h = w, o.p = v, o.i = d, o.w = E);
  } else {
    for (var d = o.w || 0; d < y + h; d += 65535) {
      var ee = d + 65535;
      ee >= y && (f[a / 8 | 0] = h, ee = y), a = Mr(f, a + 1, n.subarray(d, ee));
    }
    o.i = y;
  }
  return Hn(i, 0, t + Ur(a) + s);
}, Ir = function() {
  var n = 1, e = 0;
  return {
    p: function(r) {
      for (var t = n, s = e, o = r.length | 0, y = 0; y != o; ) {
        for (var i = Math.min(y + 2655, o); y < i; ++y)
          s += t += r[y];
        t = (t & 65535) + 15 * (t >> 16), s = (s & 65535) + 15 * (s >> 16);
      }
      n = t, e = s;
    },
    d: function() {
      return n %= 65521, e %= 65521, (n & 255) << 24 | (n & 65280) << 8 | (e & 255) << 8 | e >> 8;
    }
  };
}, Xn = function(n, e, r, t, s) {
  if (!s && (s = { l: 1 }, e.dictionary)) {
    var o = e.dictionary.subarray(-32768), y = new be(o.length + n.length);
    y.set(o), y.set(n, o.length), n = y, s.w = o.length;
  }
  return Wn(n, e.level == null ? 6 : e.level, e.mem == null ? s.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(n.length))) * 1.5) : 20 : 12 + e.mem, r, t, s);
}, Lr = function(n, e, r) {
  for (; r; ++e)
    n[e] = r, r >>>= 8;
}, jn = function(n, e) {
  var r = e.level, t = r == 0 ? 0 : r < 6 ? 1 : r == 9 ? 3 : 2;
  if (n[0] = 120, n[1] = t << 6 | (e.dictionary && 32), n[1] |= 31 - (n[0] << 8 | n[1]) % 31, e.dictionary) {
    var s = Ir();
    s.p(e.dictionary), Lr(n, 2, s.d());
  }
};
function Gs(n, e) {
  e || (e = {});
  var r = Ir();
  r.p(n);
  var t = Xn(n, e, e.dictionary ? 6 : 2, 4);
  return jn(t, e), Lr(t, t.length - 4, r.d()), t;
}
var Yn = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), zn = 0;
try {
  Yn.decode(Sr, { stream: !0 }), zn = 1;
} catch {
}
function $n(n) {
  if (Array.isArray(n)) return n;
}
function Kn(n, e) {
  var r = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (r != null) {
    var t, s, o, y, i = [], f = !0, h = !1;
    try {
      if (o = (r = r.call(n)).next, e !== 0) for (; !(f = (t = o.call(r)).done) && (i.push(t.value), i.length !== e); f = !0) ;
    } catch (a) {
      h = !0, s = a;
    } finally {
      try {
        if (!f && r.return != null && (y = r.return(), Object(y) !== y)) return;
      } finally {
        if (h) throw s;
      }
    }
    return i;
  }
}
function Jt(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var r = 0, t = Array(e); r < e; r++) t[r] = n[r];
  return t;
}
function Qn(n, e) {
  if (n) {
    if (typeof n == "string") return Jt(n, e);
    var r = {}.toString.call(n).slice(8, -1);
    return r === "Object" && n.constructor && (r = n.constructor.name), r === "Map" || r === "Set" ? Array.from(n) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Jt(n, e) : void 0;
  }
}
function Gn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zs(n, e) {
  return $n(n) || Kn(n, e) || Qn(n, e) || Gn();
}
function er(n, e = "utf8") {
  return new TextDecoder(e).decode(n);
}
const Zn = new TextEncoder();
function Jn(n) {
  return Zn.encode(n);
}
const es = 1024 * 8, ts = (() => {
  const n = new Uint8Array(4), e = new Uint32Array(n.buffer);
  return !((e[0] = 1) & n[0]);
})(), yt = {
  int8: globalThis.Int8Array,
  uint8: globalThis.Uint8Array,
  int16: globalThis.Int16Array,
  uint16: globalThis.Uint16Array,
  int32: globalThis.Int32Array,
  uint32: globalThis.Uint32Array,
  uint64: globalThis.BigUint64Array,
  int64: globalThis.BigInt64Array,
  float32: globalThis.Float32Array,
  float64: globalThis.Float64Array
};
class Lt {
  /**
   * Reference to the internal ArrayBuffer object.
   */
  buffer;
  /**
   * Byte length of the internal ArrayBuffer.
   */
  byteLength;
  /**
   * Byte offset of the internal ArrayBuffer.
   */
  byteOffset;
  /**
   * Byte length of the internal ArrayBuffer.
   */
  length;
  /**
   * The current offset of the buffer's pointer.
   */
  offset;
  lastWrittenByte;
  littleEndian;
  _data;
  _mark;
  _marks;
  /**
   * Create a new IOBuffer.
   * @param data - The data to construct the IOBuffer with.
   * If data is a number, it will be the new buffer's length<br>
   * If data is `undefined`, the buffer will be initialized with a default length of 8Kb<br>
   * If data is an ArrayBuffer, SharedArrayBuffer, an ArrayBufferView (Typed Array), an IOBuffer instance,
   * or a Node.js Buffer, a view will be created over the underlying ArrayBuffer.
   * @param options - An object for the options.
   * @returns A new IOBuffer instance.
   */
  constructor(e = es, r = {}) {
    let t = !1;
    typeof e == "number" ? e = new ArrayBuffer(e) : (t = !0, this.lastWrittenByte = e.byteLength);
    const s = r.offset ? r.offset >>> 0 : 0, o = e.byteLength - s;
    let y = s;
    (ArrayBuffer.isView(e) || e instanceof Lt) && (e.byteLength !== e.buffer.byteLength && (y = e.byteOffset + s), e = e.buffer), t ? this.lastWrittenByte = o : this.lastWrittenByte = 0, this.buffer = e, this.length = o, this.byteLength = o, this.byteOffset = y, this.offset = 0, this.littleEndian = !0, this._data = new DataView(this.buffer, y, o), this._mark = 0, this._marks = [];
  }
  /**
   * Checks if the memory allocated to the buffer is sufficient to store more
   * bytes after the offset.
   * @param byteLength - The needed memory in bytes.
   * @returns `true` if there is sufficient space and `false` otherwise.
   */
  available(e = 1) {
    return this.offset + e <= this.length;
  }
  /**
   * Check if little-endian mode is used for reading and writing multi-byte
   * values.
   * @returns `true` if little-endian mode is used, `false` otherwise.
   */
  isLittleEndian() {
    return this.littleEndian;
  }
  /**
   * Set little-endian mode for reading and writing multi-byte values.
   * @returns This.
   */
  setLittleEndian() {
    return this.littleEndian = !0, this;
  }
  /**
   * Check if big-endian mode is used for reading and writing multi-byte values.
   * @returns `true` if big-endian mode is used, `false` otherwise.
   */
  isBigEndian() {
    return !this.littleEndian;
  }
  /**
   * Switches to big-endian mode for reading and writing multi-byte values.
   * @returns This.
   */
  setBigEndian() {
    return this.littleEndian = !1, this;
  }
  /**
   * Move the pointer n bytes forward.
   * @param n - Number of bytes to skip.
   * @returns This.
   */
  skip(e = 1) {
    return this.offset += e, this;
  }
  /**
   * Move the pointer n bytes backward.
   * @param n - Number of bytes to move back.
   * @returns This.
   */
  back(e = 1) {
    return this.offset -= e, this;
  }
  /**
   * Move the pointer to the given offset.
   * @param offset - The offset to move to.
   * @returns This.
   */
  seek(e) {
    return this.offset = e, this;
  }
  /**
   * Store the current pointer offset.
   * @see {@link IOBuffer#reset}
   * @returns This.
   */
  mark() {
    return this._mark = this.offset, this;
  }
  /**
   * Move the pointer back to the last pointer offset set by mark.
   * @see {@link IOBuffer#mark}
   * @returns This.
   */
  reset() {
    return this.offset = this._mark, this;
  }
  /**
   * Push the current pointer offset to the mark stack.
   * @see {@link IOBuffer#popMark}
   * @returns This.
   */
  pushMark() {
    return this._marks.push(this.offset), this;
  }
  /**
   * Pop the last pointer offset from the mark stack, and set the current
   * pointer offset to the popped value.
   * @see {@link IOBuffer#pushMark}
   * @returns This.
   */
  popMark() {
    const e = this._marks.pop();
    if (e === void 0)
      throw new Error("Mark stack empty");
    return this.seek(e), this;
  }
  /**
   * Move the pointer offset back to 0.
   * @returns This.
   */
  rewind() {
    return this.offset = 0, this;
  }
  /**
   * Make sure the buffer has sufficient memory to write a given byteLength at
   * the current pointer offset.
   * If the buffer's memory is insufficient, this method will create a new
   * buffer (a copy) with a length that is twice (byteLength + current offset).
   * @param byteLength - The needed memory in bytes.
   * @returns This.
   */
  ensureAvailable(e = 1) {
    if (!this.available(e)) {
      const t = (this.offset + e) * 2, s = new Uint8Array(t);
      s.set(new Uint8Array(this.buffer)), this.buffer = s.buffer, this.length = t, this.byteLength = t, this._data = new DataView(this.buffer);
    }
    return this;
  }
  /**
   * Read a byte and return false if the byte's value is 0, or true otherwise.
   * Moves pointer forward by one byte.
   * @returns The read boolean.
   */
  readBoolean() {
    return this.readUint8() !== 0;
  }
  /**
   * Read a signed 8-bit integer and move pointer forward by 1 byte.
   * @returns The read byte.
   */
  readInt8() {
    return this._data.getInt8(this.offset++);
  }
  /**
   * Read an unsigned 8-bit integer and move pointer forward by 1 byte.
   * @returns The read byte.
   */
  readUint8() {
    return this._data.getUint8(this.offset++);
  }
  /**
   * Alias for {@link IOBuffer#readUint8}.
   * @returns The read byte.
   */
  readByte() {
    return this.readUint8();
  }
  /**
   * Read `n` bytes and move pointer forward by `n` bytes.
   * @param n - Number of bytes to read.
   * @returns The read bytes.
   */
  readBytes(e = 1) {
    return this.readArray(e, "uint8");
  }
  /**
   * Creates an array of corresponding to the type `type` and size `size`.
   * For example type `uint8` will create a `Uint8Array`.
   * @param size - size of the resulting array
   * @param type - number type of elements to read
   * @returns The read array.
   */
  readArray(e, r) {
    const t = yt[r].BYTES_PER_ELEMENT * e, s = this.byteOffset + this.offset, o = this.buffer.slice(s, s + t);
    if (this.littleEndian === ts && r !== "uint8" && r !== "int8") {
      const i = new Uint8Array(this.buffer.slice(s, s + t));
      i.reverse();
      const f = new yt[r](i.buffer);
      return this.offset += t, f.reverse(), f;
    }
    const y = new yt[r](o);
    return this.offset += t, y;
  }
  /**
   * Read a 16-bit signed integer and move pointer forward by 2 bytes.
   * @returns The read value.
   */
  readInt16() {
    const e = this._data.getInt16(this.offset, this.littleEndian);
    return this.offset += 2, e;
  }
  /**
   * Read a 16-bit unsigned integer and move pointer forward by 2 bytes.
   * @returns The read value.
   */
  readUint16() {
    const e = this._data.getUint16(this.offset, this.littleEndian);
    return this.offset += 2, e;
  }
  /**
   * Read a 32-bit signed integer and move pointer forward by 4 bytes.
   * @returns The read value.
   */
  readInt32() {
    const e = this._data.getInt32(this.offset, this.littleEndian);
    return this.offset += 4, e;
  }
  /**
   * Read a 32-bit unsigned integer and move pointer forward by 4 bytes.
   * @returns The read value.
   */
  readUint32() {
    const e = this._data.getUint32(this.offset, this.littleEndian);
    return this.offset += 4, e;
  }
  /**
   * Read a 32-bit floating number and move pointer forward by 4 bytes.
   * @returns The read value.
   */
  readFloat32() {
    const e = this._data.getFloat32(this.offset, this.littleEndian);
    return this.offset += 4, e;
  }
  /**
   * Read a 64-bit floating number and move pointer forward by 8 bytes.
   * @returns The read value.
   */
  readFloat64() {
    const e = this._data.getFloat64(this.offset, this.littleEndian);
    return this.offset += 8, e;
  }
  /**
   * Read a 64-bit signed integer number and move pointer forward by 8 bytes.
   * @returns The read value.
   */
  readBigInt64() {
    const e = this._data.getBigInt64(this.offset, this.littleEndian);
    return this.offset += 8, e;
  }
  /**
   * Read a 64-bit unsigned integer number and move pointer forward by 8 bytes.
   * @returns The read value.
   */
  readBigUint64() {
    const e = this._data.getBigUint64(this.offset, this.littleEndian);
    return this.offset += 8, e;
  }
  /**
   * Read a 1-byte ASCII character and move pointer forward by 1 byte.
   * @returns The read character.
   */
  readChar() {
    return String.fromCharCode(this.readInt8());
  }
  /**
   * Read `n` 1-byte ASCII characters and move pointer forward by `n` bytes.
   * @param n - Number of characters to read.
   * @returns The read characters.
   */
  readChars(e = 1) {
    let r = "";
    for (let t = 0; t < e; t++)
      r += this.readChar();
    return r;
  }
  /**
   * Read the next `n` bytes, return a UTF-8 decoded string and move pointer
   * forward by `n` bytes.
   * @param n - Number of bytes to read.
   * @returns The decoded string.
   */
  readUtf8(e = 1) {
    return er(this.readBytes(e));
  }
  /**
   * Read the next `n` bytes, return a string decoded with `encoding` and move pointer
   * forward by `n` bytes.
   * If no encoding is passed, the function is equivalent to @see {@link IOBuffer#readUtf8}
   * @param n - Number of bytes to read.
   * @param encoding - The encoding to use. Default is 'utf8'.
   * @returns The decoded string.
   */
  decodeText(e = 1, r = "utf8") {
    return er(this.readBytes(e), r);
  }
  /**
   * Write 0xff if the passed value is truthy, 0x00 otherwise and move pointer
   * forward by 1 byte.
   * @param value - The value to write.
   * @returns This.
   */
  writeBoolean(e) {
    return this.writeUint8(e ? 255 : 0), this;
  }
  /**
   * Write `value` as an 8-bit signed integer and move pointer forward by 1 byte.
   * @param value - The value to write.
   * @returns This.
   */
  writeInt8(e) {
    return this.ensureAvailable(1), this._data.setInt8(this.offset++, e), this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as an 8-bit unsigned integer and move pointer forward by 1
   * byte.
   * @param value - The value to write.
   * @returns This.
   */
  writeUint8(e) {
    return this.ensureAvailable(1), this._data.setUint8(this.offset++, e), this._updateLastWrittenByte(), this;
  }
  /**
   * An alias for {@link IOBuffer#writeUint8}.
   * @param value - The value to write.
   * @returns This.
   */
  writeByte(e) {
    return this.writeUint8(e);
  }
  /**
   * Write all elements of `bytes` as uint8 values and move pointer forward by
   * `bytes.length` bytes.
   * @param bytes - The array of bytes to write.
   * @returns This.
   */
  writeBytes(e) {
    this.ensureAvailable(e.length);
    for (let r = 0; r < e.length; r++)
      this._data.setUint8(this.offset++, e[r]);
    return this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 16-bit signed integer and move pointer forward by 2
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeInt16(e) {
    return this.ensureAvailable(2), this._data.setInt16(this.offset, e, this.littleEndian), this.offset += 2, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 16-bit unsigned integer and move pointer forward by 2
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeUint16(e) {
    return this.ensureAvailable(2), this._data.setUint16(this.offset, e, this.littleEndian), this.offset += 2, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 32-bit signed integer and move pointer forward by 4
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeInt32(e) {
    return this.ensureAvailable(4), this._data.setInt32(this.offset, e, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 32-bit unsigned integer and move pointer forward by 4
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeUint32(e) {
    return this.ensureAvailable(4), this._data.setUint32(this.offset, e, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 32-bit floating number and move pointer forward by 4
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeFloat32(e) {
    return this.ensureAvailable(4), this._data.setFloat32(this.offset, e, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 64-bit floating number and move pointer forward by 8
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeFloat64(e) {
    return this.ensureAvailable(8), this._data.setFloat64(this.offset, e, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 64-bit signed bigint and move pointer forward by 8
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeBigInt64(e) {
    return this.ensureAvailable(8), this._data.setBigInt64(this.offset, e, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 64-bit unsigned bigint and move pointer forward by 8
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeBigUint64(e) {
    return this.ensureAvailable(8), this._data.setBigUint64(this.offset, e, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
  }
  /**
   * Write the charCode of `str`'s first character as an 8-bit unsigned integer
   * and move pointer forward by 1 byte.
   * @param str - The character to write.
   * @returns This.
   */
  writeChar(e) {
    return this.writeUint8(e.charCodeAt(0));
  }
  /**
   * Write the charCodes of all `str`'s characters as 8-bit unsigned integers
   * and move pointer forward by `str.length` bytes.
   * @param str - The characters to write.
   * @returns This.
   */
  writeChars(e) {
    for (let r = 0; r < e.length; r++)
      this.writeUint8(e.charCodeAt(r));
    return this;
  }
  /**
   * UTF-8 encode and write `str` to the current pointer offset and move pointer
   * forward according to the encoded length.
   * @param str - The string to write.
   * @returns This.
   */
  writeUtf8(e) {
    return this.writeBytes(Jn(e));
  }
  /**
   * Export a Uint8Array view of the internal buffer.
   * The view starts at the byte offset and its length
   * is calculated to stop at the last written byte or the original length.
   * @returns A new Uint8Array view.
   */
  toArray() {
    return new Uint8Array(this.buffer, this.byteOffset, this.lastWrittenByte);
  }
  /**
   *  Get the total number of bytes written so far, regardless of the current offset.
   * @returns - Total number of bytes.
   */
  getWrittenByteLength() {
    return this.lastWrittenByte - this.byteOffset;
  }
  /**
   * Update the last written byte offset
   * @private
   */
  _updateLastWrittenByte() {
    this.offset > this.lastWrittenByte && (this.lastWrittenByte = this.offset);
  }
}
const Dr = [];
for (let n = 0; n < 256; n++) {
  let e = n;
  for (let r = 0; r < 8; r++)
    e & 1 ? e = 3988292384 ^ e >>> 1 : e = e >>> 1;
  Dr[n] = e;
}
const tr = 4294967295;
function rs(n, e, r) {
  let t = n;
  for (let s = 0; s < r; s++)
    t = Dr[(t ^ e[s]) & 255] ^ t >>> 8;
  return t;
}
function ns(n, e) {
  return (rs(tr, n, e) ^ tr) >>> 0;
}
function rr(n, e, r) {
  const t = n.readUint32(), s = ns(new Uint8Array(n.buffer, n.byteOffset + n.offset - e - 4, e), e);
  if (s !== t)
    throw new Error(`CRC mismatch for chunk ${r}. Expected ${t}, found ${s}`);
}
function Br(n, e, r) {
  for (let t = 0; t < r; t++)
    e[t] = n[t];
}
function Pr(n, e, r, t) {
  let s = 0;
  for (; s < t; s++)
    e[s] = n[s];
  for (; s < r; s++)
    e[s] = n[s] + e[s - t] & 255;
}
function qr(n, e, r, t) {
  let s = 0;
  if (r.length === 0)
    for (; s < t; s++)
      e[s] = n[s];
  else
    for (; s < t; s++)
      e[s] = n[s] + r[s] & 255;
}
function Hr(n, e, r, t, s) {
  let o = 0;
  if (r.length === 0) {
    for (; o < s; o++)
      e[o] = n[o];
    for (; o < t; o++)
      e[o] = n[o] + (e[o - s] >> 1) & 255;
  } else {
    for (; o < s; o++)
      e[o] = n[o] + (r[o] >> 1) & 255;
    for (; o < t; o++)
      e[o] = n[o] + (e[o - s] + r[o] >> 1) & 255;
  }
}
function Vr(n, e, r, t, s) {
  let o = 0;
  if (r.length === 0) {
    for (; o < s; o++)
      e[o] = n[o];
    for (; o < t; o++)
      e[o] = n[o] + e[o - s] & 255;
  } else {
    for (; o < s; o++)
      e[o] = n[o] + r[o] & 255;
    for (; o < t; o++)
      e[o] = n[o] + ss(e[o - s], r[o], r[o - s]) & 255;
  }
}
function ss(n, e, r) {
  const t = n + e - r, s = Math.abs(t - n), o = Math.abs(t - e), y = Math.abs(t - r);
  return s <= o && s <= y ? n : o <= y ? e : r;
}
function is(n, e, r, t, s, o) {
  switch (n) {
    case 0:
      Br(e, r, s);
      break;
    case 1:
      Pr(e, r, s, o);
      break;
    case 2:
      qr(e, r, t, s);
      break;
    case 3:
      Hr(e, r, t, s, o);
      break;
    case 4:
      Vr(e, r, t, s, o);
      break;
    default:
      throw new Error(`Unsupported filter: ${n}`);
  }
}
const as = new Uint16Array([255]), os = new Uint8Array(as.buffer), hs = os[0] === 255;
function fs(n) {
  const { data: e, width: r, height: t, channels: s, depth: o } = n, y = [
    { x: 0, y: 0, xStep: 8, yStep: 8 },
    // Pass 1
    { x: 4, y: 0, xStep: 8, yStep: 8 },
    // Pass 2
    { x: 0, y: 4, xStep: 4, yStep: 8 },
    // Pass 3
    { x: 2, y: 0, xStep: 4, yStep: 4 },
    // Pass 4
    { x: 0, y: 2, xStep: 2, yStep: 4 },
    // Pass 5
    { x: 1, y: 0, xStep: 2, yStep: 2 },
    // Pass 6
    { x: 0, y: 1, xStep: 1, yStep: 2 }
    // Pass 7
  ], i = Math.ceil(o / 8) * s, f = new Uint8Array(t * r * i);
  let h = 0;
  for (let a = 0; a < 7; a++) {
    const c = y[a], u = Math.ceil((r - c.x) / c.xStep), l = Math.ceil((t - c.y) / c.yStep);
    if (u <= 0 || l <= 0)
      continue;
    const m = u * i, v = new Uint8Array(m);
    for (let w = 0; w < l; w++) {
      const x = e[h++], P = e.subarray(h, h + m);
      h += m;
      const A = new Uint8Array(m);
      is(x, P, A, v, m, i), v.set(A);
      for (let N = 0; N < u; N++) {
        const I = c.x + N * c.xStep, M = c.y + w * c.yStep;
        if (!(I >= r || M >= t))
          for (let b = 0; b < i; b++)
            f[(M * r + I) * i + b] = A[N * i + b];
      }
    }
  }
  if (o === 16) {
    const a = new Uint16Array(f.buffer);
    if (hs)
      for (let c = 0; c < a.length; c++)
        a[c] = cs(a[c]);
    return a;
  } else
    return f;
}
function cs(n) {
  return (n & 255) << 8 | n >> 8 & 255;
}
const us = new Uint16Array([255]), ls = new Uint8Array(us.buffer), ds = ls[0] === 255, ps = new Uint8Array(0);
function nr(n) {
  const { data: e, width: r, height: t, channels: s, depth: o } = n, y = Math.ceil(o / 8) * s, i = Math.ceil(o / 8 * s * r), f = new Uint8Array(t * i);
  let h = ps, a = 0, c, u;
  for (let l = 0; l < t; l++) {
    switch (c = e.subarray(a + 1, a + 1 + i), u = f.subarray(l * i, (l + 1) * i), e[a]) {
      case 0:
        Br(c, u, i);
        break;
      case 1:
        Pr(c, u, i, y);
        break;
      case 2:
        qr(c, u, h, i);
        break;
      case 3:
        Hr(c, u, h, i, y);
        break;
      case 4:
        Vr(c, u, h, i, y);
        break;
      default:
        throw new Error(`Unsupported filter: ${e[a]}`);
    }
    h = u, a += i + 1;
  }
  if (o === 16) {
    const l = new Uint16Array(f.buffer);
    if (ds)
      for (let m = 0; m < l.length; m++)
        l[m] = ys(l[m]);
    return l;
  } else
    return f;
}
function ys(n) {
  return (n & 255) << 8 | n >> 8 & 255;
}
const Ze = Uint8Array.of(137, 80, 78, 71, 13, 10, 26, 10);
function sr(n) {
  if (!gs(n.readBytes(Ze.length)))
    throw new Error("wrong PNG signature");
}
function gs(n) {
  if (n.length < Ze.length)
    return !1;
  for (let e = 0; e < Ze.length; e++)
    if (n[e] !== Ze[e])
      return !1;
  return !0;
}
const ms = "tEXt", vs = 0, Wr = new TextDecoder("latin1");
function _s(n) {
  if (Cs(n), n.length === 0 || n.length > 79)
    throw new Error("keyword length must be between 1 and 79");
}
const ws = /^[\u0000-\u00FF]*$/;
function Cs(n) {
  if (!ws.test(n))
    throw new Error("invalid latin1 text");
}
function bs(n, e, r) {
  const t = Xr(e);
  n[t] = Es(e, r - t.length - 1);
}
function Xr(n) {
  for (n.mark(); n.readByte() !== vs; )
    ;
  const e = n.offset;
  n.reset();
  const r = Wr.decode(n.readBytes(e - n.offset - 1));
  return n.skip(1), _s(r), r;
}
function Es(n, e) {
  return Wr.decode(n.readBytes(e));
}
const ge = {
  UNKNOWN: -1,
  GREYSCALE: 0,
  TRUECOLOUR: 2,
  INDEXED_COLOUR: 3,
  GREYSCALE_ALPHA: 4,
  TRUECOLOUR_ALPHA: 6
}, gt = {
  UNKNOWN: -1,
  DEFLATE: 0
}, ir = {
  UNKNOWN: -1,
  ADAPTIVE: 0
}, mt = {
  UNKNOWN: -1,
  NO_INTERLACE: 0,
  ADAM7: 1
}, Ke = {
  NONE: 0,
  BACKGROUND: 1,
  PREVIOUS: 2
}, vt = {
  SOURCE: 0,
  OVER: 1
};
class Ts extends Lt {
  _checkCrc;
  _inflator;
  _png;
  _apng;
  _end;
  _hasPalette;
  _palette;
  _hasTransparency;
  _transparency;
  _compressionMethod;
  _filterMethod;
  _interlaceMethod;
  _colorType;
  _isAnimated;
  _numberOfFrames;
  _numberOfPlays;
  _frames;
  _writingDataChunks;
  constructor(e, r = {}) {
    super(e);
    const { checkCrc: t = !1 } = r;
    this._checkCrc = t, this._inflator = new Dt(), this._png = {
      width: -1,
      height: -1,
      channels: -1,
      data: new Uint8Array(0),
      depth: 1,
      text: {}
    }, this._apng = {
      width: -1,
      height: -1,
      channels: -1,
      depth: 1,
      numberOfFrames: 1,
      numberOfPlays: 0,
      text: {},
      frames: []
    }, this._end = !1, this._hasPalette = !1, this._palette = [], this._hasTransparency = !1, this._transparency = new Uint16Array(0), this._compressionMethod = gt.UNKNOWN, this._filterMethod = ir.UNKNOWN, this._interlaceMethod = mt.UNKNOWN, this._colorType = ge.UNKNOWN, this._isAnimated = !1, this._numberOfFrames = 1, this._numberOfPlays = 0, this._frames = [], this._writingDataChunks = !1, this.setBigEndian();
  }
  decode() {
    for (sr(this); !this._end; ) {
      const e = this.readUint32(), r = this.readChars(4);
      this.decodeChunk(e, r);
    }
    return this.decodeImage(), this._png;
  }
  decodeApng() {
    for (sr(this); !this._end; ) {
      const e = this.readUint32(), r = this.readChars(4);
      this.decodeApngChunk(e, r);
    }
    return this.decodeApngImage(), this._apng;
  }
  // https://www.w3.org/TR/PNG/#5Chunk-layout
  decodeChunk(e, r) {
    const t = this.offset;
    switch (r) {
      // 11.2 Critical chunks
      case "IHDR":
        this.decodeIHDR();
        break;
      case "PLTE":
        this.decodePLTE(e);
        break;
      case "IDAT":
        this.decodeIDAT(e);
        break;
      case "IEND":
        this._end = !0;
        break;
      // 11.3 Ancillary chunks
      case "tRNS":
        this.decodetRNS(e);
        break;
      case "iCCP":
        this.decodeiCCP(e);
        break;
      case ms:
        bs(this._png.text, this, e);
        break;
      case "pHYs":
        this.decodepHYs();
        break;
      default:
        this.skip(e);
        break;
    }
    if (this.offset - t !== e)
      throw new Error(`Length mismatch while decoding chunk ${r}`);
    this._checkCrc ? rr(this, e + 4, r) : this.skip(4);
  }
  decodeApngChunk(e, r) {
    const t = this.offset;
    switch (r !== "fdAT" && r !== "IDAT" && this._writingDataChunks && this.pushDataToFrame(), r) {
      case "acTL":
        this.decodeACTL();
        break;
      case "fcTL":
        this.decodeFCTL();
        break;
      case "fdAT":
        this.decodeFDAT(e);
        break;
      default:
        this.decodeChunk(e, r), this.offset = t + e;
        break;
    }
    if (this.offset - t !== e)
      throw new Error(`Length mismatch while decoding chunk ${r}`);
    this._checkCrc ? rr(this, e + 4, r) : this.skip(4);
  }
  // https://www.w3.org/TR/PNG/#11IHDR
  decodeIHDR() {
    const e = this._png;
    e.width = this.readUint32(), e.height = this.readUint32(), e.depth = xs(this.readUint8());
    const r = this.readUint8();
    this._colorType = r;
    let t;
    switch (r) {
      case ge.GREYSCALE:
        t = 1;
        break;
      case ge.TRUECOLOUR:
        t = 3;
        break;
      case ge.INDEXED_COLOUR:
        t = 1;
        break;
      case ge.GREYSCALE_ALPHA:
        t = 2;
        break;
      case ge.TRUECOLOUR_ALPHA:
        t = 4;
        break;
      // Kept for exhaustiveness.
      // eslint-disable-next-line unicorn/no-useless-switch-case
      case ge.UNKNOWN:
      default:
        throw new Error(`Unknown color type: ${r}`);
    }
    if (this._png.channels = t, this._compressionMethod = this.readUint8(), this._compressionMethod !== gt.DEFLATE)
      throw new Error(`Unsupported compression method: ${this._compressionMethod}`);
    this._filterMethod = this.readUint8(), this._interlaceMethod = this.readUint8();
  }
  decodeACTL() {
    this._numberOfFrames = this.readUint32(), this._numberOfPlays = this.readUint32(), this._isAnimated = !0;
  }
  decodeFCTL() {
    const e = {
      sequenceNumber: this.readUint32(),
      width: this.readUint32(),
      height: this.readUint32(),
      xOffset: this.readUint32(),
      yOffset: this.readUint32(),
      delayNumber: this.readUint16(),
      delayDenominator: this.readUint16(),
      disposeOp: this.readUint8(),
      blendOp: this.readUint8(),
      data: new Uint8Array(0)
    };
    this._frames.push(e);
  }
  // https://www.w3.org/TR/PNG/#11PLTE
  decodePLTE(e) {
    if (e % 3 !== 0)
      throw new RangeError(`PLTE field length must be a multiple of 3. Got ${e}`);
    const r = e / 3;
    this._hasPalette = !0;
    const t = [];
    this._palette = t;
    for (let s = 0; s < r; s++)
      t.push([this.readUint8(), this.readUint8(), this.readUint8()]);
  }
  // https://www.w3.org/TR/PNG/#11IDAT
  decodeIDAT(e) {
    this._writingDataChunks = !0;
    const r = e, t = this.offset + this.byteOffset;
    if (this._inflator.push(new Uint8Array(this.buffer, t, r)), this._inflator.err)
      throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    this.skip(e);
  }
  decodeFDAT(e) {
    this._writingDataChunks = !0;
    let r = e, t = this.offset + this.byteOffset;
    if (t += 4, r -= 4, this._inflator.push(new Uint8Array(this.buffer, t, r)), this._inflator.err)
      throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    this.skip(e);
  }
  // https://www.w3.org/TR/PNG/#11tRNS
  decodetRNS(e) {
    switch (this._colorType) {
      case ge.GREYSCALE:
      case ge.TRUECOLOUR: {
        if (e % 2 !== 0)
          throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${e}`);
        if (e / 2 > this._png.width * this._png.height)
          throw new Error(`tRNS chunk contains more alpha values than there are pixels (${e / 2} vs ${this._png.width * this._png.height})`);
        this._hasTransparency = !0, this._transparency = new Uint16Array(e / 2);
        for (let r = 0; r < e / 2; r++)
          this._transparency[r] = this.readUint16();
        break;
      }
      case ge.INDEXED_COLOUR: {
        if (e > this._palette.length)
          throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${e} vs ${this._palette.length})`);
        let r = 0;
        for (; r < e; r++) {
          const t = this.readByte();
          this._palette[r].push(t);
        }
        for (; r < this._palette.length; r++)
          this._palette[r].push(255);
        break;
      }
      // Kept for exhaustiveness.
      /* eslint-disable unicorn/no-useless-switch-case */
      case ge.UNKNOWN:
      case ge.GREYSCALE_ALPHA:
      case ge.TRUECOLOUR_ALPHA:
      default:
        throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`);
    }
  }
  // https://www.w3.org/TR/PNG/#11iCCP
  decodeiCCP(e) {
    const r = Xr(this), t = this.readUint8();
    if (t !== gt.DEFLATE)
      throw new Error(`Unsupported iCCP compression method: ${t}`);
    const s = this.readBytes(e - r.length - 2);
    this._png.iccEmbeddedProfile = {
      name: r,
      profile: $r(s)
    };
  }
  // https://www.w3.org/TR/PNG/#11pHYs
  decodepHYs() {
    const e = this.readUint32(), r = this.readUint32(), t = this.readByte();
    this._png.resolution = { x: e, y: r, unit: t };
  }
  decodeApngImage() {
    this._apng.width = this._png.width, this._apng.height = this._png.height, this._apng.channels = this._png.channels, this._apng.depth = this._png.depth, this._apng.numberOfFrames = this._numberOfFrames, this._apng.numberOfPlays = this._numberOfPlays, this._apng.text = this._png.text, this._apng.resolution = this._png.resolution;
    for (let e = 0; e < this._numberOfFrames; e++) {
      const r = {
        sequenceNumber: this._frames[e].sequenceNumber,
        delayNumber: this._frames[e].delayNumber,
        delayDenominator: this._frames[e].delayDenominator,
        data: this._apng.depth === 8 ? new Uint8Array(this._apng.width * this._apng.height * this._apng.channels) : new Uint16Array(this._apng.width * this._apng.height * this._apng.channels)
      }, t = this._frames.at(e);
      if (t) {
        if (t.data = nr({
          data: t.data,
          width: t.width,
          height: t.height,
          channels: this._apng.channels,
          depth: this._apng.depth
        }), this._hasPalette && (this._apng.palette = this._palette), this._hasTransparency && (this._apng.transparency = this._transparency), e === 0 || t.xOffset === 0 && t.yOffset === 0 && t.width === this._png.width && t.height === this._png.height)
          r.data = t.data;
        else {
          const s = this._apng.frames.at(e - 1);
          this.disposeFrame(t, s, r), this.addFrameDataToCanvas(r, t);
        }
        this._apng.frames.push(r);
      }
    }
    return this._apng;
  }
  disposeFrame(e, r, t) {
    switch (e.disposeOp) {
      case Ke.NONE:
        break;
      case Ke.BACKGROUND:
        for (let s = 0; s < this._png.height; s++)
          for (let o = 0; o < this._png.width; o++) {
            const y = (s * e.width + o) * this._png.channels;
            for (let i = 0; i < this._png.channels; i++)
              t.data[y + i] = 0;
          }
        break;
      case Ke.PREVIOUS:
        t.data.set(r.data);
        break;
      default:
        throw new Error("Unknown disposeOp");
    }
  }
  addFrameDataToCanvas(e, r) {
    const t = 1 << this._png.depth, s = (o, y) => {
      const i = ((o + r.yOffset) * this._png.width + r.xOffset + y) * this._png.channels, f = (o * r.width + y) * this._png.channels;
      return { index: i, frameIndex: f };
    };
    switch (r.blendOp) {
      case vt.SOURCE:
        for (let o = 0; o < r.height; o++)
          for (let y = 0; y < r.width; y++) {
            const { index: i, frameIndex: f } = s(o, y);
            for (let h = 0; h < this._png.channels; h++)
              e.data[i + h] = r.data[f + h];
          }
        break;
      // https://www.w3.org/TR/png-3/#13Alpha-channel-processing
      case vt.OVER:
        for (let o = 0; o < r.height; o++)
          for (let y = 0; y < r.width; y++) {
            const { index: i, frameIndex: f } = s(o, y);
            for (let h = 0; h < this._png.channels; h++) {
              const a = r.data[f + this._png.channels - 1] / t, c = h % (this._png.channels - 1) === 0 ? 1 : r.data[f + h], u = Math.floor(a * c + (1 - a) * e.data[i + h]);
              e.data[i + h] += u;
            }
          }
        break;
      default:
        throw new Error("Unknown blendOp");
    }
  }
  decodeImage() {
    if (this._inflator.err)
      throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    const e = this._isAnimated ? (this._frames?.at(0)).data : this._inflator.result;
    if (this._filterMethod !== ir.ADAPTIVE)
      throw new Error(`Filter method ${this._filterMethod} not supported`);
    if (this._interlaceMethod === mt.NO_INTERLACE)
      this._png.data = nr({
        data: e,
        width: this._png.width,
        height: this._png.height,
        channels: this._png.channels,
        depth: this._png.depth
      });
    else if (this._interlaceMethod === mt.ADAM7)
      this._png.data = fs({
        data: e,
        width: this._png.width,
        height: this._png.height,
        channels: this._png.channels,
        depth: this._png.depth
      });
    else
      throw new Error(`Interlace method ${this._interlaceMethod} not supported`);
    this._hasPalette && (this._png.palette = this._palette), this._hasTransparency && (this._png.transparency = this._transparency);
  }
  pushDataToFrame() {
    const e = this._inflator.result, r = this._frames.at(-1);
    r ? r.data = e : this._frames.push({
      sequenceNumber: 0,
      width: this._png.width,
      height: this._png.height,
      xOffset: 0,
      yOffset: 0,
      delayNumber: 0,
      delayDenominator: 0,
      disposeOp: Ke.NONE,
      blendOp: vt.SOURCE,
      data: e
    }), this._inflator = new Dt(), this._writingDataChunks = !1;
  }
}
function xs(n) {
  if (n !== 1 && n !== 2 && n !== 4 && n !== 8 && n !== 16)
    throw new Error(`invalid bit depth: ${n}`);
  return n;
}
var ar;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.METRE = 1] = "METRE";
})(ar || (ar = {}));
function Js(n, e) {
  return new Ts(n, e).decode();
}
var Je = { exports: {} };
/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/
var As = Je.exports, or;
function Os() {
  return or || (or = 1, (function(n, e) {
    ((r, t) => {
      n.exports = t();
    })(As, function r() {
      var t = typeof self < "u" ? self : typeof window < "u" ? window : t !== void 0 ? t : {}, s, o = !t.document && !!t.postMessage, y = t.IS_PAPA_WORKER || !1, i = {}, f = 0, h = {};
      function a(p) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, function(d) {
          var g = I(d);
          g.chunkSize = parseInt(g.chunkSize), d.step || d.chunk || (g.chunkSize = null), this._handle = new v(g), (this._handle.streamer = this)._config = g;
        }.call(this, p), this.parseChunk = function(d, g) {
          var E = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < E) {
            let F = this._config.newline;
            F || (C = this._config.quoteChar || '"', F = this._handle.guessLineEndings(d, C)), d = [...d.split(F).slice(E)].join(F);
          }
          this.isFirstChunk && b(this._config.beforeFirstChunk) && (C = this._config.beforeFirstChunk(d)) !== void 0 && (d = C), this.isFirstChunk = !1, this._halted = !1;
          var E = this._partialLine + d, C = (this._partialLine = "", this._handle.parse(E, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (d = C.meta.cursor, E = (this._finished || (this._partialLine = E.substring(d - this._baseIndex), this._baseIndex = d), C && C.data && (this._rowCount += C.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), y) t.postMessage({ results: C, workerId: h.WORKER_ID, finished: E });
            else if (b(this._config.chunk) && !g) {
              if (this._config.chunk(C, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = C = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(C.data), this._completeResults.errors = this._completeResults.errors.concat(C.errors), this._completeResults.meta = C.meta), this._completed || !E || !b(this._config.complete) || C && C.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), E || C && C.meta.paused || this._nextChunk(), C;
          }
          this._halted = !0;
        }, this._sendError = function(d) {
          b(this._config.error) ? this._config.error(d) : y && this._config.error && t.postMessage({ workerId: h.WORKER_ID, error: d, finished: !1 });
        };
      }
      function c(p) {
        var d;
        (p = p || {}).chunkSize || (p.chunkSize = h.RemoteChunkSize), a.call(this, p), this._nextChunk = o ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(g) {
          this._input = g, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (d = new XMLHttpRequest(), this._config.withCredentials && (d.withCredentials = this._config.withCredentials), o || (d.onload = M(this._chunkLoaded, this), d.onerror = M(this._chunkError, this)), d.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !o), this._config.downloadRequestHeaders) {
              var g, E = this._config.downloadRequestHeaders;
              for (g in E) d.setRequestHeader(g, E[g]);
            }
            var C;
            this._config.chunkSize && (C = this._start + this._config.chunkSize - 1, d.setRequestHeader("Range", "bytes=" + this._start + "-" + C));
            try {
              d.send(this._config.downloadRequestBody);
            } catch (F) {
              this._chunkError(F.message);
            }
            o && d.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          d.readyState === 4 && (d.status < 200 || 400 <= d.status ? this._chunkError() : (this._start += this._config.chunkSize || d.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((g) => (g = g.getResponseHeader("Content-Range")) !== null ? parseInt(g.substring(g.lastIndexOf("/") + 1)) : -1)(d), this.parseChunk(d.responseText)));
        }, this._chunkError = function(g) {
          g = d.statusText || g, this._sendError(new Error(g));
        };
      }
      function u(p) {
        (p = p || {}).chunkSize || (p.chunkSize = h.LocalChunkSize), a.call(this, p);
        var d, g, E = typeof FileReader < "u";
        this.stream = function(C) {
          this._input = C, g = C.slice || C.webkitSlice || C.mozSlice, E ? ((d = new FileReader()).onload = M(this._chunkLoaded, this), d.onerror = M(this._chunkError, this)) : d = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var C = this._input, F = (this._config.chunkSize && (F = Math.min(this._start + this._config.chunkSize, this._input.size), C = g.call(C, this._start, F)), d.readAsText(C, this._config.encoding));
          E || this._chunkLoaded({ target: { result: F } });
        }, this._chunkLoaded = function(C) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(C.target.result);
        }, this._chunkError = function() {
          this._sendError(d.error);
        };
      }
      function l(p) {
        var d;
        a.call(this, p = p || {}), this.stream = function(g) {
          return d = g, this._nextChunk();
        }, this._nextChunk = function() {
          var g, E;
          if (!this._finished) return g = this._config.chunkSize, d = g ? (E = d.substring(0, g), d.substring(g)) : (E = d, ""), this._finished = !d, this.parseChunk(E);
        };
      }
      function m(p) {
        a.call(this, p = p || {});
        var d = [], g = !0, E = !1;
        this.pause = function() {
          a.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          a.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(C) {
          this._input = C, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          E && d.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), d.length ? this.parseChunk(d.shift()) : g = !0;
        }, this._streamData = M(function(C) {
          try {
            d.push(typeof C == "string" ? C : C.toString(this._config.encoding)), g && (g = !1, this._checkIsFinished(), this.parseChunk(d.shift()));
          } catch (F) {
            this._streamError(F);
          }
        }, this), this._streamError = M(function(C) {
          this._streamCleanUp(), this._sendError(C);
        }, this), this._streamEnd = M(function() {
          this._streamCleanUp(), E = !0, this._streamData("");
        }, this), this._streamCleanUp = M(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function v(p) {
        var d, g, E, C, F = Math.pow(2, 53), D = -F, W = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, z = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, k = this, L = 0, T = 0, B = !1, R = !1, U = [], O = { data: [], errors: [], meta: {} };
        function X(V) {
          return p.skipEmptyLines === "greedy" ? V.join("").trim() === "" : V.length === 1 && V[0].length === 0;
        }
        function q() {
          if (O && E && (ie("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + h.DefaultDelimiter + "'"), E = !1), p.skipEmptyLines && (O.data = O.data.filter(function(S) {
            return !X(S);
          })), Z()) {
            let S = function(J, ee) {
              b(p.transformHeader) && (J = p.transformHeader(J, ee)), U.push(J);
            };
            if (O) if (Array.isArray(O.data[0])) {
              for (var V = 0; Z() && V < O.data.length; V++) O.data[V].forEach(S);
              O.data.splice(0, 1);
            } else O.data.forEach(S);
          }
          function $(S, J) {
            for (var ee = p.header ? {} : [], j = 0; j < S.length; j++) {
              var K = j, Y = S[j], Y = ((ce, H) => ((te) => (p.dynamicTypingFunction && p.dynamicTyping[te] === void 0 && (p.dynamicTyping[te] = p.dynamicTypingFunction(te)), (p.dynamicTyping[te] || p.dynamicTyping) === !0))(ce) ? H === "true" || H === "TRUE" || H !== "false" && H !== "FALSE" && (((te) => {
                if (W.test(te) && (te = parseFloat(te), D < te && te < F))
                  return 1;
              })(H) ? parseFloat(H) : z.test(H) ? new Date(H) : H === "" ? null : H) : H)(K = p.header ? j >= U.length ? "__parsed_extra" : U[j] : K, Y = p.transform ? p.transform(Y, K) : Y);
              K === "__parsed_extra" ? (ee[K] = ee[K] || [], ee[K].push(Y)) : ee[K] = Y;
            }
            return p.header && (j > U.length ? ie("FieldMismatch", "TooManyFields", "Too many fields: expected " + U.length + " fields but parsed " + j, T + J) : j < U.length && ie("FieldMismatch", "TooFewFields", "Too few fields: expected " + U.length + " fields but parsed " + j, T + J)), ee;
          }
          var G;
          O && (p.header || p.dynamicTyping || p.transform) && (G = 1, !O.data.length || Array.isArray(O.data[0]) ? (O.data = O.data.map($), G = O.data.length) : O.data = $(O.data, 0), p.header && O.meta && (O.meta.fields = U), T += G);
        }
        function Z() {
          return p.header && U.length === 0;
        }
        function ie(V, $, G, S) {
          V = { type: V, code: $, message: G }, S !== void 0 && (V.row = S), O.errors.push(V);
        }
        b(p.step) && (C = p.step, p.step = function(V) {
          O = V, Z() ? q() : (q(), O.data.length !== 0 && (L += V.data.length, p.preview && L > p.preview ? g.abort() : (O.data = O.data[0], C(O, k))));
        }), this.parse = function(V, $, G) {
          var S = p.quoteChar || '"', S = (p.newline || (p.newline = this.guessLineEndings(V, S)), E = !1, p.delimiter ? b(p.delimiter) && (p.delimiter = p.delimiter(V), O.meta.delimiter = p.delimiter) : ((S = ((J, ee, j, K, Y) => {
            var ce, H, te, he;
            Y = Y || [",", "	", "|", ";", h.RECORD_SEP, h.UNIT_SEP];
            for (var ue = 0; ue < Y.length; ue++) {
              for (var ae, pe = Y[ue], Q = 0, le = 0, ne = 0, oe = (te = void 0, new x({ comments: K, delimiter: pe, newline: ee, preview: 10 }).parse(J)), ye = 0; ye < oe.data.length; ye++) j && X(oe.data[ye]) ? ne++ : (ae = oe.data[ye].length, le += ae, te === void 0 ? te = ae : 0 < ae && (Q += Math.abs(ae - te), te = ae));
              0 < oe.data.length && (le /= oe.data.length - ne), (H === void 0 || Q <= H) && (he === void 0 || he < le) && 1.99 < le && (H = Q, ce = pe, he = le);
            }
            return { successful: !!(p.delimiter = ce), bestDelimiter: ce };
          })(V, p.newline, p.skipEmptyLines, p.comments, p.delimitersToGuess)).successful ? p.delimiter = S.bestDelimiter : (E = !0, p.delimiter = h.DefaultDelimiter), O.meta.delimiter = p.delimiter), I(p));
          return p.preview && p.header && S.preview++, d = V, g = new x(S), O = g.parse(d, $, G), q(), B ? { meta: { paused: !0 } } : O || { meta: { paused: !1 } };
        }, this.paused = function() {
          return B;
        }, this.pause = function() {
          B = !0, g.abort(), d = b(p.chunk) ? "" : d.substring(g.getCharIndex());
        }, this.resume = function() {
          k.streamer._halted ? (B = !1, k.streamer.parseChunk(d, !0)) : setTimeout(k.resume, 3);
        }, this.aborted = function() {
          return R;
        }, this.abort = function() {
          R = !0, g.abort(), O.meta.aborted = !0, b(p.complete) && p.complete(O), d = "";
        }, this.guessLineEndings = function(J, S) {
          J = J.substring(0, 1048576);
          var S = new RegExp(w(S) + "([^]*?)" + w(S), "gm"), G = (J = J.replace(S, "")).split("\r"), S = J.split(`
`), J = 1 < S.length && S[0].length < G[0].length;
          if (G.length === 1 || J) return `
`;
          for (var ee = 0, j = 0; j < G.length; j++) G[j][0] === `
` && ee++;
          return ee >= G.length / 2 ? `\r
` : "\r";
        };
      }
      function w(p) {
        return p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function x(p) {
        var d = (p = p || {}).delimiter, g = p.newline, E = p.comments, C = p.step, F = p.preview, D = p.fastMode, W = null, z = !1, k = p.quoteChar == null ? '"' : p.quoteChar, L = k;
        if (p.escapeChar !== void 0 && (L = p.escapeChar), (typeof d != "string" || -1 < h.BAD_DELIMITERS.indexOf(d)) && (d = ","), E === d) throw new Error("Comment character same as delimiter");
        E === !0 ? E = "#" : (typeof E != "string" || -1 < h.BAD_DELIMITERS.indexOf(E)) && (E = !1), g !== `
` && g !== "\r" && g !== `\r
` && (g = `
`);
        var T = 0, B = !1;
        this.parse = function(R, U, O) {
          if (typeof R != "string") throw new Error("Input must be a string");
          var X = R.length, q = d.length, Z = g.length, ie = E.length, V = b(C), $ = [], G = [], S = [], J = T = 0;
          if (!R) return Q();
          if (D || D !== !1 && R.indexOf(k) === -1) {
            for (var ee = R.split(g), j = 0; j < ee.length; j++) {
              if (S = ee[j], T += S.length, j !== ee.length - 1) T += g.length;
              else if (O) return Q();
              if (!E || S.substring(0, ie) !== E) {
                if (V) {
                  if ($ = [], he(S.split(d)), le(), B) return Q();
                } else he(S.split(d));
                if (F && F <= j) return $ = $.slice(0, F), Q(!0);
              }
            }
            return Q();
          }
          for (var K = R.indexOf(d, T), Y = R.indexOf(g, T), ce = new RegExp(w(L) + w(k), "g"), H = R.indexOf(k, T); ; ) if (R[T] === k) for (H = T, T++; ; ) {
            if ((H = R.indexOf(k, H + 1)) === -1) return O || G.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: $.length, index: T }), ae();
            if (H === X - 1) return ae(R.substring(T, H).replace(ce, k));
            if (k === L && R[H + 1] === L) H++;
            else if (k === L || H === 0 || R[H - 1] !== L) {
              K !== -1 && K < H + 1 && (K = R.indexOf(d, H + 1));
              var te = ue((Y = Y !== -1 && Y < H + 1 ? R.indexOf(g, H + 1) : Y) === -1 ? K : Math.min(K, Y));
              if (R.substr(H + 1 + te, q) === d) {
                S.push(R.substring(T, H).replace(ce, k)), R[T = H + 1 + te + q] !== k && (H = R.indexOf(k, T)), K = R.indexOf(d, T), Y = R.indexOf(g, T);
                break;
              }
              if (te = ue(Y), R.substring(H + 1 + te, H + 1 + te + Z) === g) {
                if (S.push(R.substring(T, H).replace(ce, k)), pe(H + 1 + te + Z), K = R.indexOf(d, T), H = R.indexOf(k, T), V && (le(), B)) return Q();
                if (F && $.length >= F) return Q(!0);
                break;
              }
              G.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: $.length, index: T }), H++;
            }
          }
          else if (E && S.length === 0 && R.substring(T, T + ie) === E) {
            if (Y === -1) return Q();
            T = Y + Z, Y = R.indexOf(g, T), K = R.indexOf(d, T);
          } else if (K !== -1 && (K < Y || Y === -1)) S.push(R.substring(T, K)), T = K + q, K = R.indexOf(d, T);
          else {
            if (Y === -1) break;
            if (S.push(R.substring(T, Y)), pe(Y + Z), V && (le(), B)) return Q();
            if (F && $.length >= F) return Q(!0);
          }
          return ae();
          function he(ne) {
            $.push(ne), J = T;
          }
          function ue(ne) {
            var oe = 0;
            return oe = ne !== -1 && (ne = R.substring(H + 1, ne)) && ne.trim() === "" ? ne.length : oe;
          }
          function ae(ne) {
            return O || (ne === void 0 && (ne = R.substring(T)), S.push(ne), T = X, he(S), V && le()), Q();
          }
          function pe(ne) {
            T = ne, he(S), S = [], Y = R.indexOf(g, T);
          }
          function Q(ne) {
            if (p.header && !U && $.length && !z) {
              var oe = $[0], ye = /* @__PURE__ */ Object.create(null), Oe = new Set(oe);
              let Ue = !1;
              for (let _e = 0; _e < oe.length; _e++) {
                let fe = oe[_e];
                if (ye[fe = b(p.transformHeader) ? p.transformHeader(fe, _e) : fe]) {
                  let ke, Ie = ye[fe];
                  for (; ke = fe + "_" + Ie, Ie++, Oe.has(ke); ) ;
                  Oe.add(ke), oe[_e] = ke, ye[fe]++, Ue = !0, (W = W === null ? {} : W)[ke] = fe;
                } else ye[fe] = 1, oe[_e] = fe;
                Oe.add(fe);
              }
              Ue && console.warn("Duplicate headers found and renamed."), z = !0;
            }
            return { data: $, errors: G, meta: { delimiter: d, linebreak: g, aborted: B, truncated: !!ne, cursor: J + (U || 0), renamedHeaders: W } };
          }
          function le() {
            C(Q()), $ = [], G = [];
          }
        }, this.abort = function() {
          B = !0;
        }, this.getCharIndex = function() {
          return T;
        };
      }
      function P(p) {
        var d = p.data, g = i[d.workerId], E = !1;
        if (d.error) g.userError(d.error, d.file);
        else if (d.results && d.results.data) {
          var C = { abort: function() {
            E = !0, A(d.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: N, resume: N };
          if (b(g.userStep)) {
            for (var F = 0; F < d.results.data.length && (g.userStep({ data: d.results.data[F], errors: d.results.errors, meta: d.results.meta }, C), !E); F++) ;
            delete d.results;
          } else b(g.userChunk) && (g.userChunk(d.results, C, d.file), delete d.results);
        }
        d.finished && !E && A(d.workerId, d.results);
      }
      function A(p, d) {
        var g = i[p];
        b(g.userComplete) && g.userComplete(d), g.terminate(), delete i[p];
      }
      function N() {
        throw new Error("Not implemented.");
      }
      function I(p) {
        if (typeof p != "object" || p === null) return p;
        var d, g = Array.isArray(p) ? [] : {};
        for (d in p) g[d] = I(p[d]);
        return g;
      }
      function M(p, d) {
        return function() {
          p.apply(d, arguments);
        };
      }
      function b(p) {
        return typeof p == "function";
      }
      return h.parse = function(p, d) {
        var g = (d = d || {}).dynamicTyping || !1;
        if (b(g) && (d.dynamicTypingFunction = g, g = {}), d.dynamicTyping = g, d.transform = !!b(d.transform) && d.transform, !d.worker || !h.WORKERS_SUPPORTED) return g = null, h.NODE_STREAM_INPUT, typeof p == "string" ? (p = ((E) => E.charCodeAt(0) !== 65279 ? E : E.slice(1))(p), g = new (d.download ? c : l)(d)) : p.readable === !0 && b(p.read) && b(p.on) ? g = new m(d) : (t.File && p instanceof File || p instanceof Object) && (g = new u(d)), g.stream(p);
        (g = (() => {
          var E;
          return !!h.WORKERS_SUPPORTED && (E = (() => {
            var C = t.URL || t.webkitURL || null, F = r.toString();
            return h.BLOB_URL || (h.BLOB_URL = C.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", F, ")();"], { type: "text/javascript" })));
          })(), (E = new t.Worker(E)).onmessage = P, E.id = f++, i[E.id] = E);
        })()).userStep = d.step, g.userChunk = d.chunk, g.userComplete = d.complete, g.userError = d.error, d.step = b(d.step), d.chunk = b(d.chunk), d.complete = b(d.complete), d.error = b(d.error), delete d.worker, g.postMessage({ input: p, config: d, workerId: g.id });
      }, h.unparse = function(p, d) {
        var g = !1, E = !0, C = ",", F = `\r
`, D = '"', W = D + D, z = !1, k = null, L = !1, T = ((() => {
          if (typeof d == "object") {
            if (typeof d.delimiter != "string" || h.BAD_DELIMITERS.filter(function(U) {
              return d.delimiter.indexOf(U) !== -1;
            }).length || (C = d.delimiter), typeof d.quotes != "boolean" && typeof d.quotes != "function" && !Array.isArray(d.quotes) || (g = d.quotes), typeof d.skipEmptyLines != "boolean" && typeof d.skipEmptyLines != "string" || (z = d.skipEmptyLines), typeof d.newline == "string" && (F = d.newline), typeof d.quoteChar == "string" && (D = d.quoteChar), typeof d.header == "boolean" && (E = d.header), Array.isArray(d.columns)) {
              if (d.columns.length === 0) throw new Error("Option columns is empty");
              k = d.columns;
            }
            d.escapeChar !== void 0 && (W = d.escapeChar + D), d.escapeFormulae instanceof RegExp ? L = d.escapeFormulae : typeof d.escapeFormulae == "boolean" && d.escapeFormulae && (L = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(w(D), "g"));
        if (typeof p == "string" && (p = JSON.parse(p)), Array.isArray(p)) {
          if (!p.length || Array.isArray(p[0])) return B(null, p, z);
          if (typeof p[0] == "object") return B(k || Object.keys(p[0]), p, z);
        } else if (typeof p == "object") return typeof p.data == "string" && (p.data = JSON.parse(p.data)), Array.isArray(p.data) && (p.fields || (p.fields = p.meta && p.meta.fields || k), p.fields || (p.fields = Array.isArray(p.data[0]) ? p.fields : typeof p.data[0] == "object" ? Object.keys(p.data[0]) : []), Array.isArray(p.data[0]) || typeof p.data[0] == "object" || (p.data = [p.data])), B(p.fields || [], p.data || [], z);
        throw new Error("Unable to serialize unrecognized input");
        function B(U, O, X) {
          var q = "", Z = (typeof U == "string" && (U = JSON.parse(U)), typeof O == "string" && (O = JSON.parse(O)), Array.isArray(U) && 0 < U.length), ie = !Array.isArray(O[0]);
          if (Z && E) {
            for (var V = 0; V < U.length; V++) 0 < V && (q += C), q += R(U[V], V);
            0 < O.length && (q += F);
          }
          for (var $ = 0; $ < O.length; $++) {
            var G = (Z ? U : O[$]).length, S = !1, J = Z ? Object.keys(O[$]).length === 0 : O[$].length === 0;
            if (X && !Z && (S = X === "greedy" ? O[$].join("").trim() === "" : O[$].length === 1 && O[$][0].length === 0), X === "greedy" && Z) {
              for (var ee = [], j = 0; j < G; j++) {
                var K = ie ? U[j] : j;
                ee.push(O[$][K]);
              }
              S = ee.join("").trim() === "";
            }
            if (!S) {
              for (var Y = 0; Y < G; Y++) {
                0 < Y && !J && (q += C);
                var ce = Z && ie ? U[Y] : Y;
                q += R(O[$][ce], Y);
              }
              $ < O.length - 1 && (!X || 0 < G && !J) && (q += F);
            }
          }
          return q;
        }
        function R(U, O) {
          var X, q;
          return U == null ? "" : U.constructor === Date ? JSON.stringify(U).slice(1, 25) : (q = !1, L && typeof U == "string" && L.test(U) && (U = "'" + U, q = !0), X = U.toString().replace(T, W), (q = q || g === !0 || typeof g == "function" && g(U, O) || Array.isArray(g) && g[O] || ((Z, ie) => {
            for (var V = 0; V < ie.length; V++) if (-1 < Z.indexOf(ie[V])) return !0;
            return !1;
          })(X, h.BAD_DELIMITERS) || -1 < X.indexOf(C) || X.charAt(0) === " " || X.charAt(X.length - 1) === " ") ? D + X + D : X);
        }
      }, h.RECORD_SEP = "", h.UNIT_SEP = "", h.BYTE_ORDER_MARK = "\uFEFF", h.BAD_DELIMITERS = ["\r", `
`, '"', h.BYTE_ORDER_MARK], h.WORKERS_SUPPORTED = !o && !!t.Worker, h.NODE_STREAM_INPUT = 1, h.LocalChunkSize = 10485760, h.RemoteChunkSize = 5242880, h.DefaultDelimiter = ",", h.Parser = x, h.ParserHandle = v, h.NetworkStreamer = c, h.FileStreamer = u, h.StringStreamer = l, h.ReadableStreamStreamer = m, t.jQuery && ((s = t.jQuery).fn.parse = function(p) {
        var d = p.config || {}, g = [];
        return this.each(function(F) {
          if (!(s(this).prop("tagName").toUpperCase() === "INPUT" && s(this).attr("type").toLowerCase() === "file" && t.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var D = 0; D < this.files.length; D++) g.push({ file: this.files[D], inputElem: this, instanceConfig: s.extend({}, d) });
        }), E(), this;
        function E() {
          if (g.length === 0) b(p.complete) && p.complete();
          else {
            var F, D, W, z, k = g[0];
            if (b(p.before)) {
              var L = p.before(k.file, k.inputElem);
              if (typeof L == "object") {
                if (L.action === "abort") return F = "AbortError", D = k.file, W = k.inputElem, z = L.reason, void (b(p.error) && p.error({ name: F }, D, W, z));
                if (L.action === "skip") return void C();
                typeof L.config == "object" && (k.instanceConfig = s.extend(k.instanceConfig, L.config));
              } else if (L === "skip") return void C();
            }
            var T = k.instanceConfig.complete;
            k.instanceConfig.complete = function(B) {
              b(T) && T(B, k.file, k.inputElem), C();
            }, h.parse(k.file, k.instanceConfig);
          }
        }
        function C() {
          g.splice(0, 1), E();
        }
      }), y && (t.onmessage = function(p) {
        p = p.data, h.WORKER_ID === void 0 && p && (h.WORKER_ID = p.workerId), typeof p.input == "string" ? t.postMessage({ workerId: h.WORKER_ID, results: h.parse(p.input, p.config), finished: !0 }) : (t.File && p.input instanceof File || p.input instanceof Object) && (p = h.parse(p.input, p.config)) && t.postMessage({ workerId: h.WORKER_ID, results: p, finished: !0 });
      }), (c.prototype = Object.create(a.prototype)).constructor = c, (u.prototype = Object.create(a.prototype)).constructor = u, (l.prototype = Object.create(l.prototype)).constructor = l, (m.prototype = Object.create(a.prototype)).constructor = m, h;
    });
  })(Je)), Je.exports;
}
var ks = Os();
const ei = /* @__PURE__ */ Ve(ks);
function hr(n, e, r, t, s, o, y) {
  try {
    var i = n[o](y), f = i.value;
  } catch (h) {
    return void r(h);
  }
  i.done ? e(f) : Promise.resolve(f).then(t, s);
}
function ti(n) {
  return function() {
    var e = this, r = arguments;
    return new Promise(function(t, s) {
      var o = n.apply(e, r);
      function y(f) {
        hr(o, t, s, y, i, "next", f);
      }
      function i(f) {
        hr(o, t, s, y, i, "throw", f);
      }
      y(void 0);
    });
  };
}
function Rs(n, e) {
  if (He(n) != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(n, e);
    if (He(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function Ns(n) {
  var e = Rs(n, "string");
  return He(e) == "symbol" ? e : e + "";
}
function ri(n, e, r) {
  return (e = Ns(e)) in n ? Object.defineProperty(n, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[e] = r, n;
}
var Be = { exports: {} }, Me = { exports: {} }, Fs = Me.exports, fr;
function Us() {
  return fr || (fr = 1, (function() {
    var n, e, r, t, s, o;
    typeof performance < "u" && performance !== null && performance.now ? Me.exports = function() {
      return performance.now();
    } : typeof process < "u" && process !== null && process.hrtime ? (Me.exports = function() {
      return (n() - s) / 1e6;
    }, e = process.hrtime, n = function() {
      var y;
      return y = e(), y[0] * 1e9 + y[1];
    }, t = n(), o = process.uptime() * 1e9, s = t - o) : Date.now ? (Me.exports = function() {
      return Date.now() - r;
    }, r = Date.now()) : (Me.exports = function() {
      return (/* @__PURE__ */ new Date()).getTime() - r;
    }, r = (/* @__PURE__ */ new Date()).getTime());
  }).call(Fs)), Me.exports;
}
var cr;
function Ms() {
  if (cr) return Be.exports;
  cr = 1;
  for (var n = Us(), e = typeof window > "u" ? Kr : window, r = ["moz", "webkit"], t = "AnimationFrame", s = e["request" + t], o = e["cancel" + t] || e["cancelRequest" + t], y = 0; !s && y < r.length; y++)
    s = e[r[y] + "Request" + t], o = e[r[y] + "Cancel" + t] || e[r[y] + "CancelRequest" + t];
  if (!s || !o) {
    var i = 0, f = 0, h = [], a = 1e3 / 60;
    s = function(c) {
      if (h.length === 0) {
        var u = n(), l = Math.max(0, a - (u - i));
        i = l + u, setTimeout(function() {
          var m = h.slice(0);
          h.length = 0;
          for (var v = 0; v < m.length; v++)
            if (!m[v].cancelled)
              try {
                m[v].callback(i);
              } catch (w) {
                setTimeout(function() {
                  throw w;
                }, 0);
              }
        }, Math.round(l));
      }
      return h.push({
        handle: ++f,
        callback: c,
        cancelled: !1
      }), f;
    }, o = function(c) {
      for (var u = 0; u < h.length; u++)
        h[u].handle === c && (h[u].cancelled = !0);
    };
  }
  return Be.exports = function(c) {
    return s.call(e, c);
  }, Be.exports.cancel = function() {
    o.apply(e, arguments);
  }, Be.exports.polyfill = function(c) {
    c || (c = e), c.requestAnimationFrame = s, c.cancelAnimationFrame = o;
  }, Be.exports;
}
var Ss = Ms();
const ni = /* @__PURE__ */ Ve(Ss);
var _t, ur;
function Is() {
  return ur || (ur = 1, _t = function(n) {
    this.ok = !1, this.alpha = 1, n.charAt(0) == "#" && (n = n.substr(1, 6)), n = n.replace(/ /g, ""), n = n.toLowerCase();
    var e = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "00ffff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000000",
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
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dodgerblue: "1e90ff",
      feldspar: "d19275",
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
      lightgrey: "d3d3d3",
      lightgreen: "90ee90",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslateblue: "8470ff",
      lightslategray: "778899",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "00ff00",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "ff00ff",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370d8",
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
      palevioletred: "d87093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "663399",
      red: "ff0000",
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
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      violetred: "d02090",
      wheat: "f5deb3",
      white: "ffffff",
      whitesmoke: "f5f5f5",
      yellow: "ffff00",
      yellowgreen: "9acd32"
    };
    n = e[n] || n;
    for (var r = [
      {
        re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
        example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
        process: function(f) {
          return [
            parseInt(f[1]),
            parseInt(f[2]),
            parseInt(f[3]),
            parseFloat(f[4])
          ];
        }
      },
      {
        re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
        example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
        process: function(f) {
          return [
            parseInt(f[1]),
            parseInt(f[2]),
            parseInt(f[3])
          ];
        }
      },
      {
        re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        example: ["#00ff00", "336699"],
        process: function(f) {
          return [
            parseInt(f[1], 16),
            parseInt(f[2], 16),
            parseInt(f[3], 16)
          ];
        }
      },
      {
        re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        example: ["#fb0", "f0f"],
        process: function(f) {
          return [
            parseInt(f[1] + f[1], 16),
            parseInt(f[2] + f[2], 16),
            parseInt(f[3] + f[3], 16)
          ];
        }
      }
    ], t = 0; t < r.length; t++) {
      var s = r[t].re, o = r[t].process, y = s.exec(n);
      if (y) {
        var i = o(y);
        this.r = i[0], this.g = i[1], this.b = i[2], i.length > 3 && (this.alpha = i[3]), this.ok = !0;
      }
    }
    this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha, this.toRGB = function() {
      return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    }, this.toRGBA = function() {
      return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
    }, this.toHex = function() {
      var f = this.r.toString(16), h = this.g.toString(16), a = this.b.toString(16);
      return f.length == 1 && (f = "0" + f), h.length == 1 && (h = "0" + h), a.length == 1 && (a = "0" + a), "#" + f + h + a;
    }, this.getHelpXML = function() {
      for (var f = new Array(), h = 0; h < r.length; h++)
        for (var a = r[h].example, c = 0; c < a.length; c++)
          f[f.length] = a[c];
      for (var u in e)
        f[f.length] = u;
      var l = document.createElement("ul");
      l.setAttribute("id", "rgbcolor-examples");
      for (var h = 0; h < f.length; h++)
        try {
          var m = document.createElement("li"), v = new RGBColor(f[h]), w = document.createElement("div");
          w.style.cssText = "margin: 3px; border: 1px solid black; background:" + v.toHex() + "; color:" + v.toHex(), w.appendChild(document.createTextNode("test"));
          var x = document.createTextNode(
            " " + f[h] + " -> " + v.toRGB() + " -> " + v.toHex()
          );
          m.appendChild(w), m.appendChild(x), l.appendChild(m);
        } catch {
        }
      return l;
    };
  }), _t;
}
var Ls = Is();
const si = /* @__PURE__ */ Ve(Ls);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var jr = function(n, e) {
  return (jr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, t) {
    r.__proto__ = t;
  } || function(r, t) {
    for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (r[s] = t[s]);
  })(n, e);
};
function Yr(n, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  function r() {
    this.constructor = n;
  }
  jr(n, e), n.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
function Ds(n) {
  var e = "";
  Array.isArray(n) || (n = [n]);
  for (var r = 0; r < n.length; r++) {
    var t = n[r];
    if (t.type === _.CLOSE_PATH) e += "z";
    else if (t.type === _.HORIZ_LINE_TO) e += (t.relative ? "h" : "H") + t.x;
    else if (t.type === _.VERT_LINE_TO) e += (t.relative ? "v" : "V") + t.y;
    else if (t.type === _.MOVE_TO) e += (t.relative ? "m" : "M") + t.x + " " + t.y;
    else if (t.type === _.LINE_TO) e += (t.relative ? "l" : "L") + t.x + " " + t.y;
    else if (t.type === _.CURVE_TO) e += (t.relative ? "c" : "C") + t.x1 + " " + t.y1 + " " + t.x2 + " " + t.y2 + " " + t.x + " " + t.y;
    else if (t.type === _.SMOOTH_CURVE_TO) e += (t.relative ? "s" : "S") + t.x2 + " " + t.y2 + " " + t.x + " " + t.y;
    else if (t.type === _.QUAD_TO) e += (t.relative ? "q" : "Q") + t.x1 + " " + t.y1 + " " + t.x + " " + t.y;
    else if (t.type === _.SMOOTH_QUAD_TO) e += (t.relative ? "t" : "T") + t.x + " " + t.y;
    else {
      if (t.type !== _.ARC) throw new Error('Unexpected command type "' + t.type + '" at index ' + r + ".");
      e += (t.relative ? "a" : "A") + t.rX + " " + t.rY + " " + t.xRot + " " + +t.lArcFlag + " " + +t.sweepFlag + " " + t.x + " " + t.y;
    }
  }
  return e;
}
function At(n, e) {
  var r = n[0], t = n[1];
  return [r * Math.cos(e) - t * Math.sin(e), r * Math.sin(e) + t * Math.cos(e)];
}
function Ce() {
  for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
  for (var r = 0; r < n.length; r++) if (typeof n[r] != "number") throw new Error("assertNumbers arguments[" + r + "] is not a number. " + typeof n[r] + " == typeof " + n[r]);
  return !0;
}
var Ne = Math.PI;
function wt(n, e, r) {
  n.lArcFlag = n.lArcFlag === 0 ? 0 : 1, n.sweepFlag = n.sweepFlag === 0 ? 0 : 1;
  var t = n.rX, s = n.rY, o = n.x, y = n.y;
  t = Math.abs(n.rX), s = Math.abs(n.rY);
  var i = At([(e - o) / 2, (r - y) / 2], -n.xRot / 180 * Ne), f = i[0], h = i[1], a = Math.pow(f, 2) / Math.pow(t, 2) + Math.pow(h, 2) / Math.pow(s, 2);
  1 < a && (t *= Math.sqrt(a), s *= Math.sqrt(a)), n.rX = t, n.rY = s;
  var c = Math.pow(t, 2) * Math.pow(h, 2) + Math.pow(s, 2) * Math.pow(f, 2), u = (n.lArcFlag !== n.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(t, 2) * Math.pow(s, 2) - c) / c)), l = t * h / s * u, m = -s * f / t * u, v = At([l, m], n.xRot / 180 * Ne);
  n.cX = v[0] + (e + o) / 2, n.cY = v[1] + (r + y) / 2, n.phi1 = Math.atan2((h - m) / s, (f - l) / t), n.phi2 = Math.atan2((-h - m) / s, (-f - l) / t), n.sweepFlag === 0 && n.phi2 > n.phi1 && (n.phi2 -= 2 * Ne), n.sweepFlag === 1 && n.phi2 < n.phi1 && (n.phi2 += 2 * Ne), n.phi1 *= 180 / Ne, n.phi2 *= 180 / Ne;
}
function lr(n, e, r) {
  Ce(n, e, r);
  var t = n * n + e * e - r * r;
  if (0 > t) return [];
  if (t === 0) return [[n * r / (n * n + e * e), e * r / (n * n + e * e)]];
  var s = Math.sqrt(t);
  return [[(n * r + e * s) / (n * n + e * e), (e * r - n * s) / (n * n + e * e)], [(n * r - e * s) / (n * n + e * e), (e * r + n * s) / (n * n + e * e)]];
}
var se, Ae = Math.PI / 180;
function dr(n, e, r) {
  return (1 - r) * n + r * e;
}
function pr(n, e, r, t) {
  return n + Math.cos(t / 180 * Ne) * e + Math.sin(t / 180 * Ne) * r;
}
function yr(n, e, r, t) {
  var s = 1e-6, o = e - n, y = r - e, i = 3 * o + 3 * (t - r) - 6 * y, f = 6 * (y - o), h = 3 * o;
  return Math.abs(i) < s ? [-h / f] : (function(a, c, u) {
    var l = a * a / 4 - c;
    if (l < -u) return [];
    if (l <= u) return [-a / 2];
    var m = Math.sqrt(l);
    return [-a / 2 - m, -a / 2 + m];
  })(f / i, h / i, s);
}
function gr(n, e, r, t, s) {
  var o = 1 - s;
  return n * (o * o * o) + e * (3 * o * o * s) + r * (3 * o * s * s) + t * (s * s * s);
}
(function(n) {
  function e() {
    return s((function(i, f, h) {
      return i.relative && (i.x1 !== void 0 && (i.x1 += f), i.y1 !== void 0 && (i.y1 += h), i.x2 !== void 0 && (i.x2 += f), i.y2 !== void 0 && (i.y2 += h), i.x !== void 0 && (i.x += f), i.y !== void 0 && (i.y += h), i.relative = !1), i;
    }));
  }
  function r() {
    var i = NaN, f = NaN, h = NaN, a = NaN;
    return s((function(c, u, l) {
      return c.type & _.SMOOTH_CURVE_TO && (c.type = _.CURVE_TO, i = isNaN(i) ? u : i, f = isNaN(f) ? l : f, c.x1 = c.relative ? u - i : 2 * u - i, c.y1 = c.relative ? l - f : 2 * l - f), c.type & _.CURVE_TO ? (i = c.relative ? u + c.x2 : c.x2, f = c.relative ? l + c.y2 : c.y2) : (i = NaN, f = NaN), c.type & _.SMOOTH_QUAD_TO && (c.type = _.QUAD_TO, h = isNaN(h) ? u : h, a = isNaN(a) ? l : a, c.x1 = c.relative ? u - h : 2 * u - h, c.y1 = c.relative ? l - a : 2 * l - a), c.type & _.QUAD_TO ? (h = c.relative ? u + c.x1 : c.x1, a = c.relative ? l + c.y1 : c.y1) : (h = NaN, a = NaN), c;
    }));
  }
  function t() {
    var i = NaN, f = NaN;
    return s((function(h, a, c) {
      if (h.type & _.SMOOTH_QUAD_TO && (h.type = _.QUAD_TO, i = isNaN(i) ? a : i, f = isNaN(f) ? c : f, h.x1 = h.relative ? a - i : 2 * a - i, h.y1 = h.relative ? c - f : 2 * c - f), h.type & _.QUAD_TO) {
        i = h.relative ? a + h.x1 : h.x1, f = h.relative ? c + h.y1 : h.y1;
        var u = h.x1, l = h.y1;
        h.type = _.CURVE_TO, h.x1 = ((h.relative ? 0 : a) + 2 * u) / 3, h.y1 = ((h.relative ? 0 : c) + 2 * l) / 3, h.x2 = (h.x + 2 * u) / 3, h.y2 = (h.y + 2 * l) / 3;
      } else i = NaN, f = NaN;
      return h;
    }));
  }
  function s(i) {
    var f = 0, h = 0, a = NaN, c = NaN;
    return function(u) {
      if (isNaN(a) && !(u.type & _.MOVE_TO)) throw new Error("path must start with moveto");
      var l = i(u, f, h, a, c);
      return u.type & _.CLOSE_PATH && (f = a, h = c), u.x !== void 0 && (f = u.relative ? f + u.x : u.x), u.y !== void 0 && (h = u.relative ? h + u.y : u.y), u.type & _.MOVE_TO && (a = f, c = h), l;
    };
  }
  function o(i, f, h, a, c, u) {
    return Ce(i, f, h, a, c, u), s((function(l, m, v, w) {
      var x = l.x1, P = l.x2, A = l.relative && !isNaN(w), N = l.x !== void 0 ? l.x : A ? 0 : m, I = l.y !== void 0 ? l.y : A ? 0 : v;
      function M(U) {
        return U * U;
      }
      l.type & _.HORIZ_LINE_TO && f !== 0 && (l.type = _.LINE_TO, l.y = l.relative ? 0 : v), l.type & _.VERT_LINE_TO && h !== 0 && (l.type = _.LINE_TO, l.x = l.relative ? 0 : m), l.x !== void 0 && (l.x = l.x * i + I * h + (A ? 0 : c)), l.y !== void 0 && (l.y = N * f + l.y * a + (A ? 0 : u)), l.x1 !== void 0 && (l.x1 = l.x1 * i + l.y1 * h + (A ? 0 : c)), l.y1 !== void 0 && (l.y1 = x * f + l.y1 * a + (A ? 0 : u)), l.x2 !== void 0 && (l.x2 = l.x2 * i + l.y2 * h + (A ? 0 : c)), l.y2 !== void 0 && (l.y2 = P * f + l.y2 * a + (A ? 0 : u));
      var b = i * a - f * h;
      if (l.xRot !== void 0 && (i !== 1 || f !== 0 || h !== 0 || a !== 1)) if (b === 0) delete l.rX, delete l.rY, delete l.xRot, delete l.lArcFlag, delete l.sweepFlag, l.type = _.LINE_TO;
      else {
        var p = l.xRot * Math.PI / 180, d = Math.sin(p), g = Math.cos(p), E = 1 / M(l.rX), C = 1 / M(l.rY), F = M(g) * E + M(d) * C, D = 2 * d * g * (E - C), W = M(d) * E + M(g) * C, z = F * a * a - D * f * a + W * f * f, k = D * (i * a + f * h) - 2 * (F * h * a + W * i * f), L = F * h * h - D * i * h + W * i * i, T = (Math.atan2(k, z - L) + Math.PI) % Math.PI / 2, B = Math.sin(T), R = Math.cos(T);
        l.rX = Math.abs(b) / Math.sqrt(z * M(R) + k * B * R + L * M(B)), l.rY = Math.abs(b) / Math.sqrt(z * M(B) - k * B * R + L * M(R)), l.xRot = 180 * T / Math.PI;
      }
      return l.sweepFlag !== void 0 && 0 > b && (l.sweepFlag = +!l.sweepFlag), l;
    }));
  }
  function y() {
    return function(i) {
      var f = {};
      for (var h in i) f[h] = i[h];
      return f;
    };
  }
  n.ROUND = function(i) {
    function f(h) {
      return Math.round(h * i) / i;
    }
    return i === void 0 && (i = 1e13), Ce(i), function(h) {
      return h.x1 !== void 0 && (h.x1 = f(h.x1)), h.y1 !== void 0 && (h.y1 = f(h.y1)), h.x2 !== void 0 && (h.x2 = f(h.x2)), h.y2 !== void 0 && (h.y2 = f(h.y2)), h.x !== void 0 && (h.x = f(h.x)), h.y !== void 0 && (h.y = f(h.y)), h.rX !== void 0 && (h.rX = f(h.rX)), h.rY !== void 0 && (h.rY = f(h.rY)), h;
    };
  }, n.TO_ABS = e, n.TO_REL = function() {
    return s((function(i, f, h) {
      return i.relative || (i.x1 !== void 0 && (i.x1 -= f), i.y1 !== void 0 && (i.y1 -= h), i.x2 !== void 0 && (i.x2 -= f), i.y2 !== void 0 && (i.y2 -= h), i.x !== void 0 && (i.x -= f), i.y !== void 0 && (i.y -= h), i.relative = !0), i;
    }));
  }, n.NORMALIZE_HVZ = function(i, f, h) {
    return i === void 0 && (i = !0), f === void 0 && (f = !0), h === void 0 && (h = !0), s((function(a, c, u, l, m) {
      if (isNaN(l) && !(a.type & _.MOVE_TO)) throw new Error("path must start with moveto");
      return f && a.type & _.HORIZ_LINE_TO && (a.type = _.LINE_TO, a.y = a.relative ? 0 : u), h && a.type & _.VERT_LINE_TO && (a.type = _.LINE_TO, a.x = a.relative ? 0 : c), i && a.type & _.CLOSE_PATH && (a.type = _.LINE_TO, a.x = a.relative ? l - c : l, a.y = a.relative ? m - u : m), a.type & _.ARC && (a.rX === 0 || a.rY === 0) && (a.type = _.LINE_TO, delete a.rX, delete a.rY, delete a.xRot, delete a.lArcFlag, delete a.sweepFlag), a;
    }));
  }, n.NORMALIZE_ST = r, n.QT_TO_C = t, n.INFO = s, n.SANITIZE = function(i) {
    i === void 0 && (i = 0), Ce(i);
    var f = NaN, h = NaN, a = NaN, c = NaN;
    return s((function(u, l, m, v, w) {
      var x = Math.abs, P = !1, A = 0, N = 0;
      if (u.type & _.SMOOTH_CURVE_TO && (A = isNaN(f) ? 0 : l - f, N = isNaN(h) ? 0 : m - h), u.type & (_.CURVE_TO | _.SMOOTH_CURVE_TO) ? (f = u.relative ? l + u.x2 : u.x2, h = u.relative ? m + u.y2 : u.y2) : (f = NaN, h = NaN), u.type & _.SMOOTH_QUAD_TO ? (a = isNaN(a) ? l : 2 * l - a, c = isNaN(c) ? m : 2 * m - c) : u.type & _.QUAD_TO ? (a = u.relative ? l + u.x1 : u.x1, c = u.relative ? m + u.y1 : u.y2) : (a = NaN, c = NaN), u.type & _.LINE_COMMANDS || u.type & _.ARC && (u.rX === 0 || u.rY === 0 || !u.lArcFlag) || u.type & _.CURVE_TO || u.type & _.SMOOTH_CURVE_TO || u.type & _.QUAD_TO || u.type & _.SMOOTH_QUAD_TO) {
        var I = u.x === void 0 ? 0 : u.relative ? u.x : u.x - l, M = u.y === void 0 ? 0 : u.relative ? u.y : u.y - m;
        A = isNaN(a) ? u.x1 === void 0 ? A : u.relative ? u.x : u.x1 - l : a - l, N = isNaN(c) ? u.y1 === void 0 ? N : u.relative ? u.y : u.y1 - m : c - m;
        var b = u.x2 === void 0 ? 0 : u.relative ? u.x : u.x2 - l, p = u.y2 === void 0 ? 0 : u.relative ? u.y : u.y2 - m;
        x(I) <= i && x(M) <= i && x(A) <= i && x(N) <= i && x(b) <= i && x(p) <= i && (P = !0);
      }
      return u.type & _.CLOSE_PATH && x(l - v) <= i && x(m - w) <= i && (P = !0), P ? [] : u;
    }));
  }, n.MATRIX = o, n.ROTATE = function(i, f, h) {
    f === void 0 && (f = 0), h === void 0 && (h = 0), Ce(i, f, h);
    var a = Math.sin(i), c = Math.cos(i);
    return o(c, a, -a, c, f - f * c + h * a, h - f * a - h * c);
  }, n.TRANSLATE = function(i, f) {
    return f === void 0 && (f = 0), Ce(i, f), o(1, 0, 0, 1, i, f);
  }, n.SCALE = function(i, f) {
    return f === void 0 && (f = i), Ce(i, f), o(i, 0, 0, f, 0, 0);
  }, n.SKEW_X = function(i) {
    return Ce(i), o(1, 0, Math.atan(i), 1, 0, 0);
  }, n.SKEW_Y = function(i) {
    return Ce(i), o(1, Math.atan(i), 0, 1, 0, 0);
  }, n.X_AXIS_SYMMETRY = function(i) {
    return i === void 0 && (i = 0), Ce(i), o(-1, 0, 0, 1, i, 0);
  }, n.Y_AXIS_SYMMETRY = function(i) {
    return i === void 0 && (i = 0), Ce(i), o(1, 0, 0, -1, 0, i);
  }, n.A_TO_C = function() {
    return s((function(i, f, h) {
      return _.ARC === i.type ? (function(a, c, u) {
        var l, m, v, w;
        a.cX || wt(a, c, u);
        for (var x = Math.min(a.phi1, a.phi2), P = Math.max(a.phi1, a.phi2) - x, A = Math.ceil(P / 90), N = new Array(A), I = c, M = u, b = 0; b < A; b++) {
          var p = dr(a.phi1, a.phi2, b / A), d = dr(a.phi1, a.phi2, (b + 1) / A), g = d - p, E = 4 / 3 * Math.tan(g * Ae / 4), C = [Math.cos(p * Ae) - E * Math.sin(p * Ae), Math.sin(p * Ae) + E * Math.cos(p * Ae)], F = C[0], D = C[1], W = [Math.cos(d * Ae), Math.sin(d * Ae)], z = W[0], k = W[1], L = [z + E * Math.sin(d * Ae), k - E * Math.cos(d * Ae)], T = L[0], B = L[1];
          N[b] = { relative: a.relative, type: _.CURVE_TO };
          var R = function(U, O) {
            var X = At([U * a.rX, O * a.rY], a.xRot), q = X[0], Z = X[1];
            return [a.cX + q, a.cY + Z];
          };
          l = R(F, D), N[b].x1 = l[0], N[b].y1 = l[1], m = R(T, B), N[b].x2 = m[0], N[b].y2 = m[1], v = R(z, k), N[b].x = v[0], N[b].y = v[1], a.relative && (N[b].x1 -= I, N[b].y1 -= M, N[b].x2 -= I, N[b].y2 -= M, N[b].x -= I, N[b].y -= M), I = (w = [N[b].x, N[b].y])[0], M = w[1];
        }
        return N;
      })(i, i.relative ? 0 : f, i.relative ? 0 : h) : i;
    }));
  }, n.ANNOTATE_ARCS = function() {
    return s((function(i, f, h) {
      return i.relative && (f = 0, h = 0), _.ARC === i.type && wt(i, f, h), i;
    }));
  }, n.CLONE = y, n.CALCULATE_BOUNDS = function() {
    var i = function(u) {
      var l = {};
      for (var m in u) l[m] = u[m];
      return l;
    }, f = e(), h = t(), a = r(), c = s((function(u, l, m) {
      var v = a(h(f(i(u))));
      function w(B) {
        B > c.maxX && (c.maxX = B), B < c.minX && (c.minX = B);
      }
      function x(B) {
        B > c.maxY && (c.maxY = B), B < c.minY && (c.minY = B);
      }
      if (v.type & _.DRAWING_COMMANDS && (w(l), x(m)), v.type & _.HORIZ_LINE_TO && w(v.x), v.type & _.VERT_LINE_TO && x(v.y), v.type & _.LINE_TO && (w(v.x), x(v.y)), v.type & _.CURVE_TO) {
        w(v.x), x(v.y);
        for (var P = 0, A = yr(l, v.x1, v.x2, v.x); P < A.length; P++)
          0 < (T = A[P]) && 1 > T && w(gr(l, v.x1, v.x2, v.x, T));
        for (var N = 0, I = yr(m, v.y1, v.y2, v.y); N < I.length; N++)
          0 < (T = I[N]) && 1 > T && x(gr(m, v.y1, v.y2, v.y, T));
      }
      if (v.type & _.ARC) {
        w(v.x), x(v.y), wt(v, l, m);
        for (var M = v.xRot / 180 * Math.PI, b = Math.cos(M) * v.rX, p = Math.sin(M) * v.rX, d = -Math.sin(M) * v.rY, g = Math.cos(M) * v.rY, E = v.phi1 < v.phi2 ? [v.phi1, v.phi2] : -180 > v.phi2 ? [v.phi2 + 360, v.phi1 + 360] : [v.phi2, v.phi1], C = E[0], F = E[1], D = function(B) {
          var R = B[0], U = B[1], O = 180 * Math.atan2(U, R) / Math.PI;
          return O < C ? O + 360 : O;
        }, W = 0, z = lr(d, -b, 0).map(D); W < z.length; W++)
          (T = z[W]) > C && T < F && w(pr(v.cX, b, d, T));
        for (var k = 0, L = lr(g, -p, 0).map(D); k < L.length; k++) {
          var T;
          (T = L[k]) > C && T < F && x(pr(v.cY, p, g, T));
        }
      }
      return u;
    }));
    return c.minX = 1 / 0, c.maxX = -1 / 0, c.minY = 1 / 0, c.maxY = -1 / 0, c;
  };
})(se || (se = {}));
var we, zr = (function() {
  function n() {
  }
  return n.prototype.round = function(e) {
    return this.transform(se.ROUND(e));
  }, n.prototype.toAbs = function() {
    return this.transform(se.TO_ABS());
  }, n.prototype.toRel = function() {
    return this.transform(se.TO_REL());
  }, n.prototype.normalizeHVZ = function(e, r, t) {
    return this.transform(se.NORMALIZE_HVZ(e, r, t));
  }, n.prototype.normalizeST = function() {
    return this.transform(se.NORMALIZE_ST());
  }, n.prototype.qtToC = function() {
    return this.transform(se.QT_TO_C());
  }, n.prototype.aToC = function() {
    return this.transform(se.A_TO_C());
  }, n.prototype.sanitize = function(e) {
    return this.transform(se.SANITIZE(e));
  }, n.prototype.translate = function(e, r) {
    return this.transform(se.TRANSLATE(e, r));
  }, n.prototype.scale = function(e, r) {
    return this.transform(se.SCALE(e, r));
  }, n.prototype.rotate = function(e, r, t) {
    return this.transform(se.ROTATE(e, r, t));
  }, n.prototype.matrix = function(e, r, t, s, o, y) {
    return this.transform(se.MATRIX(e, r, t, s, o, y));
  }, n.prototype.skewX = function(e) {
    return this.transform(se.SKEW_X(e));
  }, n.prototype.skewY = function(e) {
    return this.transform(se.SKEW_Y(e));
  }, n.prototype.xSymmetry = function(e) {
    return this.transform(se.X_AXIS_SYMMETRY(e));
  }, n.prototype.ySymmetry = function(e) {
    return this.transform(se.Y_AXIS_SYMMETRY(e));
  }, n.prototype.annotateArcs = function() {
    return this.transform(se.ANNOTATE_ARCS());
  }, n;
})(), Bs = function(n) {
  return n === " " || n === "	" || n === "\r" || n === `
`;
}, mr = function(n) {
  return 48 <= n.charCodeAt(0) && n.charCodeAt(0) <= 57;
}, Ps = (function(n) {
  function e() {
    var r = n.call(this) || this;
    return r.curNumber = "", r.curCommandType = -1, r.curCommandRelative = !1, r.canParseCommandOrComma = !0, r.curNumberHasExp = !1, r.curNumberHasExpDigits = !1, r.curNumberHasDecimal = !1, r.curArgs = [], r;
  }
  return Yr(e, n), e.prototype.finish = function(r) {
    if (r === void 0 && (r = []), this.parse(" ", r), this.curArgs.length !== 0 || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
    return r;
  }, e.prototype.parse = function(r, t) {
    var s = this;
    t === void 0 && (t = []);
    for (var o = function(c) {
      t.push(c), s.curArgs.length = 0, s.canParseCommandOrComma = !0;
    }, y = 0; y < r.length; y++) {
      var i = r[y], f = !(this.curCommandType !== _.ARC || this.curArgs.length !== 3 && this.curArgs.length !== 4 || this.curNumber.length !== 1 || this.curNumber !== "0" && this.curNumber !== "1"), h = mr(i) && (this.curNumber === "0" && i === "0" || f);
      if (!mr(i) || h) if (i !== "e" && i !== "E") if (i !== "-" && i !== "+" || !this.curNumberHasExp || this.curNumberHasExpDigits) if (i !== "." || this.curNumberHasExp || this.curNumberHasDecimal || f) {
        if (this.curNumber && this.curCommandType !== -1) {
          var a = Number(this.curNumber);
          if (isNaN(a)) throw new SyntaxError("Invalid number ending at " + y);
          if (this.curCommandType === _.ARC) {
            if (this.curArgs.length === 0 || this.curArgs.length === 1) {
              if (0 > a) throw new SyntaxError('Expected positive number, got "' + a + '" at index "' + y + '"');
            } else if ((this.curArgs.length === 3 || this.curArgs.length === 4) && this.curNumber !== "0" && this.curNumber !== "1") throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + y + '"');
          }
          this.curArgs.push(a), this.curArgs.length === qs[this.curCommandType] && (_.HORIZ_LINE_TO === this.curCommandType ? o({ type: _.HORIZ_LINE_TO, relative: this.curCommandRelative, x: a }) : _.VERT_LINE_TO === this.curCommandType ? o({ type: _.VERT_LINE_TO, relative: this.curCommandRelative, y: a }) : this.curCommandType === _.MOVE_TO || this.curCommandType === _.LINE_TO || this.curCommandType === _.SMOOTH_QUAD_TO ? (o({ type: this.curCommandType, relative: this.curCommandRelative, x: this.curArgs[0], y: this.curArgs[1] }), _.MOVE_TO === this.curCommandType && (this.curCommandType = _.LINE_TO)) : this.curCommandType === _.CURVE_TO ? o({ type: _.CURVE_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x2: this.curArgs[2], y2: this.curArgs[3], x: this.curArgs[4], y: this.curArgs[5] }) : this.curCommandType === _.SMOOTH_CURVE_TO ? o({ type: _.SMOOTH_CURVE_TO, relative: this.curCommandRelative, x2: this.curArgs[0], y2: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === _.QUAD_TO ? o({ type: _.QUAD_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === _.ARC && o({ type: _.ARC, relative: this.curCommandRelative, rX: this.curArgs[0], rY: this.curArgs[1], xRot: this.curArgs[2], lArcFlag: this.curArgs[3], sweepFlag: this.curArgs[4], x: this.curArgs[5], y: this.curArgs[6] })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
        }
        if (!Bs(i)) if (i === "," && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;
        else if (i !== "+" && i !== "-" && i !== ".") if (h) this.curNumber = i, this.curNumberHasDecimal = !1;
        else {
          if (this.curArgs.length !== 0) throw new SyntaxError("Unterminated command at index " + y + ".");
          if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + i + '" at index ' + y + ". Command cannot follow comma");
          if (this.canParseCommandOrComma = !1, i !== "z" && i !== "Z") if (i === "h" || i === "H") this.curCommandType = _.HORIZ_LINE_TO, this.curCommandRelative = i === "h";
          else if (i === "v" || i === "V") this.curCommandType = _.VERT_LINE_TO, this.curCommandRelative = i === "v";
          else if (i === "m" || i === "M") this.curCommandType = _.MOVE_TO, this.curCommandRelative = i === "m";
          else if (i === "l" || i === "L") this.curCommandType = _.LINE_TO, this.curCommandRelative = i === "l";
          else if (i === "c" || i === "C") this.curCommandType = _.CURVE_TO, this.curCommandRelative = i === "c";
          else if (i === "s" || i === "S") this.curCommandType = _.SMOOTH_CURVE_TO, this.curCommandRelative = i === "s";
          else if (i === "q" || i === "Q") this.curCommandType = _.QUAD_TO, this.curCommandRelative = i === "q";
          else if (i === "t" || i === "T") this.curCommandType = _.SMOOTH_QUAD_TO, this.curCommandRelative = i === "t";
          else {
            if (i !== "a" && i !== "A") throw new SyntaxError('Unexpected character "' + i + '" at index ' + y + ".");
            this.curCommandType = _.ARC, this.curCommandRelative = i === "a";
          }
          else t.push({ type: _.CLOSE_PATH }), this.canParseCommandOrComma = !0, this.curCommandType = -1;
        }
        else this.curNumber = i, this.curNumberHasDecimal = i === ".";
      } else this.curNumber += i, this.curNumberHasDecimal = !0;
      else this.curNumber += i;
      else this.curNumber += i, this.curNumberHasExp = !0;
      else this.curNumber += i, this.curNumberHasExpDigits = this.curNumberHasExp;
    }
    return t;
  }, e.prototype.transform = function(r) {
    return Object.create(this, { parse: { value: function(t, s) {
      s === void 0 && (s = []);
      for (var o = 0, y = Object.getPrototypeOf(this).parse.call(this, t); o < y.length; o++) {
        var i = y[o], f = r(i);
        Array.isArray(f) ? s.push.apply(s, f) : s.push(f);
      }
      return s;
    } } });
  }, e;
})(zr), _ = (function(n) {
  function e(r) {
    var t = n.call(this) || this;
    return t.commands = typeof r == "string" ? e.parse(r) : r, t;
  }
  return Yr(e, n), e.prototype.encode = function() {
    return e.encode(this.commands);
  }, e.prototype.getBounds = function() {
    var r = se.CALCULATE_BOUNDS();
    return this.transform(r), r;
  }, e.prototype.transform = function(r) {
    for (var t = [], s = 0, o = this.commands; s < o.length; s++) {
      var y = r(o[s]);
      Array.isArray(y) ? t.push.apply(t, y) : t.push(y);
    }
    return this.commands = t, this;
  }, e.encode = function(r) {
    return Ds(r);
  }, e.parse = function(r) {
    var t = new Ps(), s = [];
    return t.parse(r, s), t.finish(s), s;
  }, e.CLOSE_PATH = 1, e.MOVE_TO = 2, e.HORIZ_LINE_TO = 4, e.VERT_LINE_TO = 8, e.LINE_TO = 16, e.CURVE_TO = 32, e.SMOOTH_CURVE_TO = 64, e.QUAD_TO = 128, e.SMOOTH_QUAD_TO = 256, e.ARC = 512, e.LINE_COMMANDS = e.LINE_TO | e.HORIZ_LINE_TO | e.VERT_LINE_TO, e.DRAWING_COMMANDS = e.HORIZ_LINE_TO | e.VERT_LINE_TO | e.LINE_TO | e.CURVE_TO | e.SMOOTH_CURVE_TO | e.QUAD_TO | e.SMOOTH_QUAD_TO | e.ARC, e;
})(zr), qs = ((we = {})[_.MOVE_TO] = 2, we[_.LINE_TO] = 2, we[_.HORIZ_LINE_TO] = 1, we[_.VERT_LINE_TO] = 1, we[_.CLOSE_PATH] = 0, we[_.QUAD_TO] = 4, we[_.SMOOTH_QUAD_TO] = 2, we[_.CURVE_TO] = 6, we[_.SMOOTH_CURVE_TO] = 4, we[_.ARC] = 7, we);
function et(n) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? et = function(e) {
    return typeof e;
  } : et = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, et(n);
}
function Hs(n, e) {
  if (!(n instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var Vs = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259], Ws = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
function Xs(n, e, r, t, s) {
  if (typeof n == "string" && (n = document.getElementById(n)), !n || et(n) !== "object" || !("getContext" in n))
    throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
  var o = n.getContext("2d");
  try {
    return o.getImageData(e, r, t, s);
  } catch (y) {
    throw new Error("unable to access image data: " + y);
  }
}
function ii(n, e, r, t, s, o) {
  if (!(isNaN(o) || o < 1)) {
    o |= 0;
    var y = Xs(n, e, r, t, s);
    y = js(y, e, r, t, s, o), n.getContext("2d").putImageData(y, e, r);
  }
}
function js(n, e, r, t, s, o) {
  for (var y = n.data, i = 2 * o + 1, f = t - 1, h = s - 1, a = o + 1, c = a * (a + 1) / 2, u = new vr(), l = u, m, v = 1; v < i; v++)
    l = l.next = new vr(), v === a && (m = l);
  l.next = u;
  for (var w = null, x = null, P = 0, A = 0, N = Vs[o], I = Ws[o], M = 0; M < s; M++) {
    l = u;
    for (var b = y[A], p = y[A + 1], d = y[A + 2], g = y[A + 3], E = 0; E < a; E++)
      l.r = b, l.g = p, l.b = d, l.a = g, l = l.next;
    for (var C = 0, F = 0, D = 0, W = 0, z = a * b, k = a * p, L = a * d, T = a * g, B = c * b, R = c * p, U = c * d, O = c * g, X = 1; X < a; X++) {
      var q = A + ((f < X ? f : X) << 2), Z = y[q], ie = y[q + 1], V = y[q + 2], $ = y[q + 3], G = a - X;
      B += (l.r = Z) * G, R += (l.g = ie) * G, U += (l.b = V) * G, O += (l.a = $) * G, C += Z, F += ie, D += V, W += $, l = l.next;
    }
    w = u, x = m;
    for (var S = 0; S < t; S++) {
      var J = O * N >>> I;
      if (y[A + 3] = J, J !== 0) {
        var ee = 255 / J;
        y[A] = (B * N >>> I) * ee, y[A + 1] = (R * N >>> I) * ee, y[A + 2] = (U * N >>> I) * ee;
      } else
        y[A] = y[A + 1] = y[A + 2] = 0;
      B -= z, R -= k, U -= L, O -= T, z -= w.r, k -= w.g, L -= w.b, T -= w.a;
      var j = S + o + 1;
      j = P + (j < f ? j : f) << 2, C += w.r = y[j], F += w.g = y[j + 1], D += w.b = y[j + 2], W += w.a = y[j + 3], B += C, R += F, U += D, O += W, w = w.next;
      var K = x, Y = K.r, ce = K.g, H = K.b, te = K.a;
      z += Y, k += ce, L += H, T += te, C -= Y, F -= ce, D -= H, W -= te, x = x.next, A += 4;
    }
    P += t;
  }
  for (var he = 0; he < t; he++) {
    A = he << 2;
    var ue = y[A], ae = y[A + 1], pe = y[A + 2], Q = y[A + 3], le = a * ue, ne = a * ae, oe = a * pe, ye = a * Q, Oe = c * ue, Ue = c * ae, _e = c * pe, fe = c * Q;
    l = u;
    for (var ke = 0; ke < a; ke++)
      l.r = ue, l.g = ae, l.b = pe, l.a = Q, l = l.next;
    for (var Ie = t, rt = 0, nt = 0, st = 0, it = 0, We = 1; We <= o; We++) {
      A = Ie + he << 2;
      var Xe = a - We;
      Oe += (l.r = ue = y[A]) * Xe, Ue += (l.g = ae = y[A + 1]) * Xe, _e += (l.b = pe = y[A + 2]) * Xe, fe += (l.a = Q = y[A + 3]) * Xe, it += ue, rt += ae, nt += pe, st += Q, l = l.next, We < h && (Ie += t);
    }
    A = he, w = u, x = m;
    for (var at = 0; at < s; at++) {
      var de = A << 2;
      y[de + 3] = Q = fe * N >>> I, Q > 0 ? (Q = 255 / Q, y[de] = (Oe * N >>> I) * Q, y[de + 1] = (Ue * N >>> I) * Q, y[de + 2] = (_e * N >>> I) * Q) : y[de] = y[de + 1] = y[de + 2] = 0, Oe -= le, Ue -= ne, _e -= oe, fe -= ye, le -= w.r, ne -= w.g, oe -= w.b, ye -= w.a, de = he + ((de = at + a) < h ? de : h) * t << 2, Oe += it += w.r = y[de], Ue += rt += w.g = y[de + 1], _e += nt += w.b = y[de + 2], fe += st += w.a = y[de + 3], w = w.next, le += ue = x.r, ne += ae = x.g, oe += pe = x.b, ye += Q = x.a, it -= ue, rt -= ae, nt -= pe, st -= Q, x = x.next, A += t;
    }
  }
  return n;
}
var vr = (
  /**
   * Set properties.
   */
  function n() {
    Hs(this, n), this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
  }
);
export {
  ei as P,
  si as R,
  Qs as S,
  ti as _,
  _ as a,
  ri as b,
  $s as c,
  Kr as d,
  He as e,
  Js as f,
  Ve as g,
  Zs as h,
  $t as i,
  Ft as j,
  Ks as k,
  Nt as n,
  ii as p,
  ni as r,
  Gs as z
};

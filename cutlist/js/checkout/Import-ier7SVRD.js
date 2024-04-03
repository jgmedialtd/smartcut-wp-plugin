import { _ as ye, o as ve, k as ke, l as Ce, t as De, q as Re, E as xe, G as Oe, H as Ie, I as _e, r as Te, n as Le } from "./main-Cn7rH0vF.js";
const Se = {
  name: "Drop",
  props: {
    requiredType: {
      type: String,
      default: "text/csv"
    },
    label: {
      type: String,
      default: "Drop file here"
    },
    thinking: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["drop"],
  data() {
    return {
      dropClass: null,
      events: ["dragenter", "dragover", "dragleave", "dragend", "drop"],
      loadingProgress: 0
    };
  },
  mounted() {
    this.events.forEach((i) => {
      document.body.addEventListener(i, this.eventHandler);
    });
  },
  unmounted() {
    this.events.forEach((i) => {
      document.body.removeEventListener(i, this.eventHandler);
    });
  },
  methods: {
    onDrop(i) {
      const g = i.dataTransfer.files[0];
      g.type !== this.requiredType && alert(
        "We did not detect a valid file type - this might be safe to ignore"
      );
      const l = new FileReader();
      l.addEventListener("progress", (m) => {
        if (m.loaded && m.total) {
          const L = m.loaded / m.total * 100;
          this.loadingProgress = L;
        }
      }), l.addEventListener("loadend", () => {
        this.file = l.result, this.$emit("drop", l.result);
      }), l.readAsText(g);
    },
    eventHandler(i) {
      this.dropClass = (i == null ? void 0 : i.type) ?? null, i.preventDefault();
    }
  }
};
function Ae(i, g, c, l, m, L) {
  return ve(), ke("div", {
    id: "drop",
    class: Re({ thinking: c.thinking, [m.dropClass]: !0 }),
    onDrop: g[0] || (g[0] = xe((...K) => L.onDrop && L.onDrop(...K), ["prevent"]))
  }, [
    Ce("div", null, De(c.thinking ? "Loading, please wait..." : c.label), 1)
  ], 34);
}
const Fe = /* @__PURE__ */ ye(Se, [["render", Ae]]);
var Me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function qe(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var we = { exports: {} };
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
(function(i, g) {
  (function(c, l) {
    i.exports = l();
  })(Me, function c() {
    var l = typeof self < "u" ? self : typeof window < "u" ? window : l !== void 0 ? l : {}, m = !l.document && !!l.postMessage, L = l.IS_PAPA_WORKER || !1, K = {}, be = 0, f = { parse: function(t, e) {
      var r = (e = e || {}).dynamicTyping || !1;
      if (v(r) && (e.dynamicTypingFunction = r, r = {}), e.dynamicTyping = r, e.transform = !!v(e.transform) && e.transform, e.worker && f.WORKERS_SUPPORTED) {
        var n = function() {
          if (!f.WORKERS_SUPPORTED)
            return !1;
          var d = (F = l.URL || l.webkitURL || null, D = c.toString(), f.BLOB_URL || (f.BLOB_URL = F.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", D, ")();"], { type: "text/javascript" })))), p = new l.Worker(d), F, D;
          return p.onmessage = Ee, p.id = be++, K[p.id] = p;
        }();
        return n.userStep = e.step, n.userChunk = e.chunk, n.userComplete = e.complete, n.userError = e.error, e.step = v(e.step), e.chunk = v(e.chunk), e.complete = v(e.complete), e.error = v(e.error), delete e.worker, void n.postMessage({ input: t, config: e, workerId: n.id });
      }
      var a = null;
      return f.NODE_STREAM_INPUT, typeof t == "string" ? (t = function(d) {
        return d.charCodeAt(0) === 65279 ? d.slice(1) : d;
      }(t), a = e.download ? new ae(e) : new ne(e)) : t.readable === !0 && v(t.read) && v(t.on) ? a = new ue(e) : (l.File && t instanceof File || t instanceof Object) && (a = new oe(e)), a.stream(t);
    }, unparse: function(t, e) {
      var r = !1, n = !0, a = ",", d = `\r
`, p = '"', F = p + p, D = !1, o = null, x = !1;
      (function() {
        if (typeof e == "object") {
          if (typeof e.delimiter != "string" || f.BAD_DELIMITERS.filter(function(s) {
            return e.delimiter.indexOf(s) !== -1;
          }).length || (a = e.delimiter), (typeof e.quotes == "boolean" || typeof e.quotes == "function" || Array.isArray(e.quotes)) && (r = e.quotes), typeof e.skipEmptyLines != "boolean" && typeof e.skipEmptyLines != "string" || (D = e.skipEmptyLines), typeof e.newline == "string" && (d = e.newline), typeof e.quoteChar == "string" && (p = e.quoteChar), typeof e.header == "boolean" && (n = e.header), Array.isArray(e.columns)) {
            if (e.columns.length === 0)
              throw new Error("Option columns is empty");
            o = e.columns;
          }
          e.escapeChar !== void 0 && (F = e.escapeChar + p), (typeof e.escapeFormulae == "boolean" || e.escapeFormulae instanceof RegExp) && (x = e.escapeFormulae instanceof RegExp ? e.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      })();
      var h = new RegExp(se(p), "g");
      if (typeof t == "string" && (t = JSON.parse(t)), Array.isArray(t)) {
        if (!t.length || Array.isArray(t[0]))
          return B(null, t, D);
        if (typeof t[0] == "object")
          return B(o || Object.keys(t[0]), t, D);
      } else if (typeof t == "object")
        return typeof t.data == "string" && (t.data = JSON.parse(t.data)), Array.isArray(t.data) && (t.fields || (t.fields = t.meta && t.meta.fields || o), t.fields || (t.fields = Array.isArray(t.data[0]) ? t.fields : typeof t.data[0] == "object" ? Object.keys(t.data[0]) : []), Array.isArray(t.data[0]) || typeof t.data[0] == "object" || (t.data = [t.data])), B(t.fields || [], t.data || [], D);
      throw new Error("Unable to serialize unrecognized input");
      function B(s, b, z) {
        var R = "";
        typeof s == "string" && (s = JSON.parse(s)), typeof b == "string" && (b = JSON.parse(b));
        var M = Array.isArray(s) && 0 < s.length, S = !Array.isArray(b[0]);
        if (M && n) {
          for (var A = 0; A < s.length; A++)
            0 < A && (R += a), R += q(s[A], A);
          0 < b.length && (R += d);
        }
        for (var u = 0; u < b.length; u++) {
          var _ = M ? s.length : b[u].length, E = !1, T = M ? Object.keys(b[u]).length === 0 : b[u].length === 0;
          if (z && !M && (E = z === "greedy" ? b[u].join("").trim() === "" : b[u].length === 1 && b[u][0].length === 0), z === "greedy" && M) {
            for (var k = [], H = 0; H < _; H++) {
              var O = S ? s[H] : H;
              k.push(b[u][O]);
            }
            E = k.join("").trim() === "";
          }
          if (!E) {
            for (var w = 0; w < _; w++) {
              0 < w && !T && (R += a);
              var W = M && S ? s[w] : w;
              R += q(b[u][W], w);
            }
            u < b.length - 1 && (!z || 0 < _ && !T) && (R += d);
          }
        }
        return R;
      }
      function q(s, b) {
        if (s == null)
          return "";
        if (s.constructor === Date)
          return JSON.stringify(s).slice(1, 25);
        var z = !1;
        x && typeof s == "string" && x.test(s) && (s = "'" + s, z = !0);
        var R = s.toString().replace(h, F);
        return (z = z || r === !0 || typeof r == "function" && r(s, b) || Array.isArray(r) && r[b] || function(M, S) {
          for (var A = 0; A < S.length; A++)
            if (-1 < M.indexOf(S[A]))
              return !0;
          return !1;
        }(R, f.BAD_DELIMITERS) || -1 < R.indexOf(a) || R.charAt(0) === " " || R.charAt(R.length - 1) === " ") ? p + R + p : R;
      }
    } };
    if (f.RECORD_SEP = "", f.UNIT_SEP = "", f.BYTE_ORDER_MARK = "\uFEFF", f.BAD_DELIMITERS = ["\r", `
`, '"', f.BYTE_ORDER_MARK], f.WORKERS_SUPPORTED = !m && !!l.Worker, f.NODE_STREAM_INPUT = 1, f.LocalChunkSize = 10485760, f.RemoteChunkSize = 5242880, f.DefaultDelimiter = ",", f.Parser = he, f.ParserHandle = ce, f.NetworkStreamer = ae, f.FileStreamer = oe, f.StringStreamer = ne, f.ReadableStreamStreamer = ue, l.jQuery) {
      var ie = l.jQuery;
      ie.fn.parse = function(t) {
        var e = t.config || {}, r = [];
        return this.each(function(d) {
          if (!(ie(this).prop("tagName").toUpperCase() === "INPUT" && ie(this).attr("type").toLowerCase() === "file" && l.FileReader) || !this.files || this.files.length === 0)
            return !0;
          for (var p = 0; p < this.files.length; p++)
            r.push({ file: this.files[p], inputElem: this, instanceConfig: ie.extend({}, e) });
        }), n(), this;
        function n() {
          if (r.length !== 0) {
            var d, p, F, D, o = r[0];
            if (v(t.before)) {
              var x = t.before(o.file, o.inputElem);
              if (typeof x == "object") {
                if (x.action === "abort")
                  return d = "AbortError", p = o.file, F = o.inputElem, D = x.reason, void (v(t.error) && t.error({ name: d }, p, F, D));
                if (x.action === "skip")
                  return void a();
                typeof x.config == "object" && (o.instanceConfig = ie.extend(o.instanceConfig, x.config));
              } else if (x === "skip")
                return void a();
            }
            var h = o.instanceConfig.complete;
            o.instanceConfig.complete = function(B) {
              v(h) && h(B, o.file, o.inputElem), a();
            }, f.parse(o.file, o.instanceConfig);
          } else
            v(t.complete) && t.complete();
        }
        function a() {
          r.splice(0, 1), n();
        }
      };
    }
    function Q(t) {
      this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(e) {
        var r = de(e);
        r.chunkSize = parseInt(r.chunkSize), e.step || e.chunk || (r.chunkSize = null), this._handle = new ce(r), (this._handle.streamer = this)._config = r;
      }).call(this, t), this.parseChunk = function(e, r) {
        if (this.isFirstChunk && v(this._config.beforeFirstChunk)) {
          var n = this._config.beforeFirstChunk(e);
          n !== void 0 && (e = n);
        }
        this.isFirstChunk = !1, this._halted = !1;
        var a = this._partialLine + e;
        this._partialLine = "";
        var d = this._handle.parse(a, this._baseIndex, !this._finished);
        if (!this._handle.paused() && !this._handle.aborted()) {
          var p = d.meta.cursor;
          this._finished || (this._partialLine = a.substring(p - this._baseIndex), this._baseIndex = p), d && d.data && (this._rowCount += d.data.length);
          var F = this._finished || this._config.preview && this._rowCount >= this._config.preview;
          if (L)
            l.postMessage({ results: d, workerId: f.WORKER_ID, finished: F });
          else if (v(this._config.chunk) && !r) {
            if (this._config.chunk(d, this._handle), this._handle.paused() || this._handle.aborted())
              return void (this._halted = !0);
            d = void 0, this._completeResults = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(d.data), this._completeResults.errors = this._completeResults.errors.concat(d.errors), this._completeResults.meta = d.meta), this._completed || !F || !v(this._config.complete) || d && d.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), F || d && d.meta.paused || this._nextChunk(), d;
        }
        this._halted = !0;
      }, this._sendError = function(e) {
        v(this._config.error) ? this._config.error(e) : L && this._config.error && l.postMessage({ workerId: f.WORKER_ID, error: e, finished: !1 });
      };
    }
    function ae(t) {
      var e;
      (t = t || {}).chunkSize || (t.chunkSize = f.RemoteChunkSize), Q.call(this, t), this._nextChunk = m ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(r) {
        this._input = r, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished)
          this._chunkLoaded();
        else {
          if (e = new XMLHttpRequest(), this._config.withCredentials && (e.withCredentials = this._config.withCredentials), m || (e.onload = G(this._chunkLoaded, this), e.onerror = G(this._chunkError, this)), e.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !m), this._config.downloadRequestHeaders) {
            var r = this._config.downloadRequestHeaders;
            for (var n in r)
              e.setRequestHeader(n, r[n]);
          }
          if (this._config.chunkSize) {
            var a = this._start + this._config.chunkSize - 1;
            e.setRequestHeader("Range", "bytes=" + this._start + "-" + a);
          }
          try {
            e.send(this._config.downloadRequestBody);
          } catch (d) {
            this._chunkError(d.message);
          }
          m && e.status === 0 && this._chunkError();
        }
      }, this._chunkLoaded = function() {
        e.readyState === 4 && (e.status < 200 || 400 <= e.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : e.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(r) {
          var n = r.getResponseHeader("Content-Range");
          return n === null ? -1 : parseInt(n.substring(n.lastIndexOf("/") + 1));
        }(e), this.parseChunk(e.responseText)));
      }, this._chunkError = function(r) {
        var n = e.statusText || r;
        this._sendError(new Error(n));
      };
    }
    function oe(t) {
      var e, r;
      (t = t || {}).chunkSize || (t.chunkSize = f.LocalChunkSize), Q.call(this, t);
      var n = typeof FileReader < "u";
      this.stream = function(a) {
        this._input = a, r = a.slice || a.webkitSlice || a.mozSlice, n ? ((e = new FileReader()).onload = G(this._chunkLoaded, this), e.onerror = G(this._chunkError, this)) : e = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function() {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function() {
        var a = this._input;
        if (this._config.chunkSize) {
          var d = Math.min(this._start + this._config.chunkSize, this._input.size);
          a = r.call(a, this._start, d);
        }
        var p = e.readAsText(a, this._config.encoding);
        n || this._chunkLoaded({ target: { result: p } });
      }, this._chunkLoaded = function(a) {
        this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(a.target.result);
      }, this._chunkError = function() {
        this._sendError(e.error);
      };
    }
    function ne(t) {
      var e;
      Q.call(this, t = t || {}), this.stream = function(r) {
        return e = r, this._nextChunk();
      }, this._nextChunk = function() {
        if (!this._finished) {
          var r, n = this._config.chunkSize;
          return n ? (r = e.substring(0, n), e = e.substring(n)) : (r = e, e = ""), this._finished = !e, this.parseChunk(r);
        }
      };
    }
    function ue(t) {
      Q.call(this, t = t || {});
      var e = [], r = !0, n = !1;
      this.pause = function() {
        Q.prototype.pause.apply(this, arguments), this._input.pause();
      }, this.resume = function() {
        Q.prototype.resume.apply(this, arguments), this._input.resume();
      }, this.stream = function(a) {
        this._input = a, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
      }, this._checkIsFinished = function() {
        n && e.length === 1 && (this._finished = !0);
      }, this._nextChunk = function() {
        this._checkIsFinished(), e.length ? this.parseChunk(e.shift()) : r = !0;
      }, this._streamData = G(function(a) {
        try {
          e.push(typeof a == "string" ? a : a.toString(this._config.encoding)), r && (r = !1, this._checkIsFinished(), this.parseChunk(e.shift()));
        } catch (d) {
          this._streamError(d);
        }
      }, this), this._streamError = G(function(a) {
        this._streamCleanUp(), this._sendError(a);
      }, this), this._streamEnd = G(function() {
        this._streamCleanUp(), n = !0, this._streamData("");
      }, this), this._streamCleanUp = G(function() {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function ce(t) {
      var e, r, n, a = Math.pow(2, 53), d = -a, p = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, F = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, D = this, o = 0, x = 0, h = !1, B = !1, q = [], s = { data: [], errors: [], meta: {} };
      if (v(t.step)) {
        var b = t.step;
        t.step = function(u) {
          if (s = u, M())
            R();
          else {
            if (R(), s.data.length === 0)
              return;
            o += u.data.length, t.preview && o > t.preview ? r.abort() : (s.data = s.data[0], b(s, D));
          }
        };
      }
      function z(u) {
        return t.skipEmptyLines === "greedy" ? u.join("").trim() === "" : u.length === 1 && u[0].length === 0;
      }
      function R() {
        return s && n && (A("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + f.DefaultDelimiter + "'"), n = !1), t.skipEmptyLines && (s.data = s.data.filter(function(u) {
          return !z(u);
        })), M() && function() {
          if (!s)
            return;
          function u(E, T) {
            v(t.transformHeader) && (E = t.transformHeader(E, T)), q.push(E);
          }
          if (Array.isArray(s.data[0])) {
            for (var _ = 0; M() && _ < s.data.length; _++)
              s.data[_].forEach(u);
            s.data.splice(0, 1);
          } else
            s.data.forEach(u);
        }(), function() {
          if (!s || !t.header && !t.dynamicTyping && !t.transform)
            return s;
          function u(E, T) {
            var k, H = t.header ? {} : [];
            for (k = 0; k < E.length; k++) {
              var O = k, w = E[k];
              t.header && (O = k >= q.length ? "__parsed_extra" : q[k]), t.transform && (w = t.transform(w, O)), w = S(O, w), O === "__parsed_extra" ? (H[O] = H[O] || [], H[O].push(w)) : H[O] = w;
            }
            return t.header && (k > q.length ? A("FieldMismatch", "TooManyFields", "Too many fields: expected " + q.length + " fields but parsed " + k, x + T) : k < q.length && A("FieldMismatch", "TooFewFields", "Too few fields: expected " + q.length + " fields but parsed " + k, x + T)), H;
          }
          var _ = 1;
          return !s.data.length || Array.isArray(s.data[0]) ? (s.data = s.data.map(u), _ = s.data.length) : s.data = u(s.data, 0), t.header && s.meta && (s.meta.fields = q), x += _, s;
        }();
      }
      function M() {
        return t.header && q.length === 0;
      }
      function S(u, _) {
        return E = u, t.dynamicTypingFunction && t.dynamicTyping[E] === void 0 && (t.dynamicTyping[E] = t.dynamicTypingFunction(E)), (t.dynamicTyping[E] || t.dynamicTyping) === !0 ? _ === "true" || _ === "TRUE" || _ !== "false" && _ !== "FALSE" && (function(T) {
          if (p.test(T)) {
            var k = parseFloat(T);
            if (d < k && k < a)
              return !0;
          }
          return !1;
        }(_) ? parseFloat(_) : F.test(_) ? new Date(_) : _ === "" ? null : _) : _;
        var E;
      }
      function A(u, _, E, T) {
        var k = { type: u, code: _, message: E };
        T !== void 0 && (k.row = T), s.errors.push(k);
      }
      this.parse = function(u, _, E) {
        var T = t.quoteChar || '"';
        if (t.newline || (t.newline = function(O, w) {
          O = O.substring(0, 1048576);
          var W = new RegExp(se(w) + "([^]*?)" + se(w), "gm"), P = (O = O.replace(W, "")).split("\r"), $ = O.split(`
`), V = 1 < $.length && $[0].length < P[0].length;
          if (P.length === 1 || V)
            return `
`;
          for (var U = 0, C = 0; C < P.length; C++)
            P[C][0] === `
` && U++;
          return U >= P.length / 2 ? `\r
` : "\r";
        }(u, T)), n = !1, t.delimiter)
          v(t.delimiter) && (t.delimiter = t.delimiter(u), s.meta.delimiter = t.delimiter);
        else {
          var k = function(O, w, W, P, $) {
            var V, U, C, I;
            $ = $ || [",", "	", "|", ";", f.RECORD_SEP, f.UNIT_SEP];
            for (var ee = 0; ee < $.length; ee++) {
              var y = $[ee], re = 0, J = 0, te = 0;
              C = void 0;
              for (var Z = new he({ comments: P, delimiter: y, newline: w, preview: 10 }).parse(O), Y = 0; Y < Z.data.length; Y++)
                if (W && z(Z.data[Y]))
                  te++;
                else {
                  var X = Z.data[Y].length;
                  J += X, C !== void 0 ? 0 < X && (re += Math.abs(X - C), C = X) : C = X;
                }
              0 < Z.data.length && (J /= Z.data.length - te), (U === void 0 || re <= U) && (I === void 0 || I < J) && 1.99 < J && (U = re, V = y, I = J);
            }
            return { successful: !!(t.delimiter = V), bestDelimiter: V };
          }(u, t.newline, t.skipEmptyLines, t.comments, t.delimitersToGuess);
          k.successful ? t.delimiter = k.bestDelimiter : (n = !0, t.delimiter = f.DefaultDelimiter), s.meta.delimiter = t.delimiter;
        }
        var H = de(t);
        return t.preview && t.header && H.preview++, e = u, r = new he(H), s = r.parse(e, _, E), R(), h ? { meta: { paused: !0 } } : s || { meta: { paused: !1 } };
      }, this.paused = function() {
        return h;
      }, this.pause = function() {
        h = !0, r.abort(), e = v(t.chunk) ? "" : e.substring(r.getCharIndex());
      }, this.resume = function() {
        D.streamer._halted ? (h = !1, D.streamer.parseChunk(e, !0)) : setTimeout(D.resume, 3);
      }, this.aborted = function() {
        return B;
      }, this.abort = function() {
        B = !0, r.abort(), s.meta.aborted = !0, v(t.complete) && t.complete(s), e = "";
      };
    }
    function se(t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function he(t) {
      var e, r = (t = t || {}).delimiter, n = t.newline, a = t.comments, d = t.step, p = t.preview, F = t.fastMode, D = e = t.quoteChar === void 0 || t.quoteChar === null ? '"' : t.quoteChar;
      if (t.escapeChar !== void 0 && (D = t.escapeChar), (typeof r != "string" || -1 < f.BAD_DELIMITERS.indexOf(r)) && (r = ","), a === r)
        throw new Error("Comment character same as delimiter");
      a === !0 ? a = "#" : (typeof a != "string" || -1 < f.BAD_DELIMITERS.indexOf(a)) && (a = !1), n !== `
` && n !== "\r" && n !== `\r
` && (n = `
`);
      var o = 0, x = !1;
      this.parse = function(h, B, q) {
        if (typeof h != "string")
          throw new Error("Input must be a string");
        var s = h.length, b = r.length, z = n.length, R = a.length, M = v(d), S = [], A = [], u = [], _ = o = 0;
        if (!h)
          return j();
        if (t.header && !B) {
          var E = h.split(n)[0].split(r), T = [], k = {}, H = !1;
          for (var O in E) {
            var w = E[O];
            v(t.transformHeader) && (w = t.transformHeader(w, O));
            var W = w, P = k[w] || 0;
            for (0 < P && (H = !0, W = w + "_" + P), k[w] = P + 1; T.includes(W); )
              W = W + "_" + P;
            T.push(W);
          }
          if (H) {
            var $ = h.split(n);
            $[0] = T.join(r), h = $.join(n);
          }
        }
        if (F || F !== !1 && h.indexOf(e) === -1) {
          for (var V = h.split(n), U = 0; U < V.length; U++) {
            if (u = V[U], o += u.length, U !== V.length - 1)
              o += n.length;
            else if (q)
              return j();
            if (!a || u.substring(0, R) !== a) {
              if (M) {
                if (S = [], te(u.split(r)), le(), x)
                  return j();
              } else
                te(u.split(r));
              if (p && p <= U)
                return S = S.slice(0, p), j(!0);
            }
          }
          return j();
        }
        for (var C = h.indexOf(r, o), I = h.indexOf(n, o), ee = new RegExp(se(D) + se(e), "g"), y = h.indexOf(e, o); ; )
          if (h[o] !== e)
            if (a && u.length === 0 && h.substring(o, o + R) === a) {
              if (I === -1)
                return j();
              o = I + z, I = h.indexOf(n, o), C = h.indexOf(r, o);
            } else if (C !== -1 && (C < I || I === -1))
              u.push(h.substring(o, C)), o = C + b, C = h.indexOf(r, o);
            else {
              if (I === -1)
                break;
              if (u.push(h.substring(o, I)), X(I + z), M && (le(), x))
                return j();
              if (p && S.length >= p)
                return j(!0);
            }
          else
            for (y = o, o++; ; ) {
              if ((y = h.indexOf(e, y + 1)) === -1)
                return q || A.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: S.length, index: o }), Y();
              if (y === s - 1)
                return Y(h.substring(o, y).replace(ee, e));
              if (e !== D || h[y + 1] !== D) {
                if (e === D || y === 0 || h[y - 1] !== D) {
                  C !== -1 && C < y + 1 && (C = h.indexOf(r, y + 1)), I !== -1 && I < y + 1 && (I = h.indexOf(n, y + 1));
                  var re = Z(I === -1 ? C : Math.min(C, I));
                  if (h.substr(y + 1 + re, b) === r) {
                    u.push(h.substring(o, y).replace(ee, e)), h[o = y + 1 + re + b] !== e && (y = h.indexOf(e, o)), C = h.indexOf(r, o), I = h.indexOf(n, o);
                    break;
                  }
                  var J = Z(I);
                  if (h.substring(y + 1 + J, y + 1 + J + z) === n) {
                    if (u.push(h.substring(o, y).replace(ee, e)), X(y + 1 + J + z), C = h.indexOf(r, o), y = h.indexOf(e, o), M && (le(), x))
                      return j();
                    if (p && S.length >= p)
                      return j(!0);
                    break;
                  }
                  A.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: S.length, index: o }), y++;
                }
              } else
                y++;
            }
        return Y();
        function te(N) {
          S.push(N), _ = o;
        }
        function Z(N) {
          var me = 0;
          if (N !== -1) {
            var fe = h.substring(y + 1, N);
            fe && fe.trim() === "" && (me = fe.length);
          }
          return me;
        }
        function Y(N) {
          return q || (N === void 0 && (N = h.substring(o)), u.push(N), o = s, te(u), M && le()), j();
        }
        function X(N) {
          o = N, te(u), u = [], I = h.indexOf(n, o);
        }
        function j(N) {
          return { data: S, errors: A, meta: { delimiter: r, linebreak: n, aborted: x, truncated: !!N, cursor: _ + (B || 0) } };
        }
        function le() {
          d(j()), S = [], A = [];
        }
      }, this.abort = function() {
        x = !0;
      }, this.getCharIndex = function() {
        return o;
      };
    }
    function Ee(t) {
      var e = t.data, r = K[e.workerId], n = !1;
      if (e.error)
        r.userError(e.error, e.file);
      else if (e.results && e.results.data) {
        var a = { abort: function() {
          n = !0, pe(e.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: ge, resume: ge };
        if (v(r.userStep)) {
          for (var d = 0; d < e.results.data.length && (r.userStep({ data: e.results.data[d], errors: e.results.errors, meta: e.results.meta }, a), !n); d++)
            ;
          delete e.results;
        } else
          v(r.userChunk) && (r.userChunk(e.results, a, e.file), delete e.results);
      }
      e.finished && !n && pe(e.workerId, e.results);
    }
    function pe(t, e) {
      var r = K[t];
      v(r.userComplete) && r.userComplete(e), r.terminate(), delete K[t];
    }
    function ge() {
      throw new Error("Not implemented.");
    }
    function de(t) {
      if (typeof t != "object" || t === null)
        return t;
      var e = Array.isArray(t) ? [] : {};
      for (var r in t)
        e[r] = de(t[r]);
      return e;
    }
    function G(t, e) {
      return function() {
        t.apply(e, arguments);
      };
    }
    function v(t) {
      return typeof t == "function";
    }
    return L && (l.onmessage = function(t) {
      var e = t.data;
      if (f.WORKER_ID === void 0 && e && (f.WORKER_ID = e.workerId), typeof e.input == "string")
        l.postMessage({ workerId: f.WORKER_ID, results: f.parse(e.input, e.config), finished: !0 });
      else if (l.File && e.input instanceof File || e.input instanceof Object) {
        var r = f.parse(e.input, e.config);
        r && l.postMessage({ workerId: f.WORKER_ID, results: r, finished: !0 });
      }
    }), (ae.prototype = Object.create(Q.prototype)).constructor = ae, (oe.prototype = Object.create(Q.prototype)).constructor = oe, (ne.prototype = Object.create(ne.prototype)).constructor = ne, (ue.prototype = Object.create(Q.prototype)).constructor = ue, f;
  });
})(we);
var ze = we.exports;
const He = /* @__PURE__ */ qe(ze), Pe = {
  name: "ImportCSV",
  components: {
    Drop: Fe
  },
  props: {
    units: {
      type: String,
      default: "decimal"
    }
  },
  emits: ["error", "import"],
  data() {
    return {
      // headings: true,
      importType: "stock",
      items: [],
      // itemValidation: {},
      userRows: [],
      userHeaders: [],
      showManualMap: !1,
      multiSelect: !1,
      createMatchingStock: !1,
      showCellInfo: !1,
      cellInfo: "",
      rounding: 2,
      previewLimit: 10,
      mappedHeaders: [],
      columnMap: {},
      duplicateIndexes: [],
      showDataMismatch: !1,
      partFields: [
        "l",
        "w",
        "t",
        "q",
        "orientationLock",
        "name",
        "material",
        "banding",
        "cost"
      ],
      fieldNames: Oe,
      manualMapping: {
        selectedColumnHeading: "",
        selectedColumnIndex: "",
        mappedKey: ""
      }
    };
  },
  computed: {
    locale() {
      return navigator.language.toUpperCase();
    },
    fieldFormat() {
      return {
        l: this.units === "decimal" ? "Decimal" : "Fraction",
        w: this.units === "decimal" ? "Decimal" : "Fraction",
        q: "Number",
        orientationLock: "L or W",
        name: "Text"
      };
    },
    separators() {
      return Ie();
    },
    someInvalid() {
      return Object.values(this.itemValidation).some((i) => Object.values(i).some(
        (g) => g === !1 && Object.keys(i).some(
          (c) => this.partFields.includes(c)
        )
      ));
    },
    someDuplicates() {
      var i, g;
      return ((g = (i = this.duplicateIndexes) == null ? void 0 : i.flat()) == null ? void 0 : g.length) > 0;
    },
    itemValidation() {
      const i = {};
      return this.items.forEach((g, c) => {
        i[c] = {};
        for (const [l, m] of Object.entries(g)) {
          if (!this.partFields.includes(l))
            continue;
          const L = this.validate(l, m);
          (L === !0 || L === !1) && (i[c][l] = L);
        }
      }), i;
    }
  },
  methods: {
    parse(i) {
      He.parse(i, {
        header: !1,
        dynamicTyping: !1,
        //parse numbers
        worker: !0,
        complete: (g) => this.process(g),
        error: () => this.$emit("error")
      });
    },
    process(i) {
      this.userRows = i, this.userRows = this.userRows.data.filter(
        (g) => g.some((c) => c)
      ), this.userHeaders = this.userRows[0], this.columnMap = {};
      for (let g = this.userHeaders.length; g--; ) {
        const c = this.userHeaders[g], l = this.predictHeadingType(c);
        l ? this.columnMap[g] = l : this.columnMap[g] = null;
      }
      this.processColumnMap(), this.userRows.shift(), this.populateColumnData(), this.importParts();
    },
    predictHeadingType(i) {
      const c = Object.entries({
        size: [
          "dimensions",
          "dim",
          "d",
          "size",
          "dimension",
          "dimen",
          "dimns"
        ],
        l: ["length", "l", "len", "lng", "long", "lgth", "lg"],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high"],
        name: [
          "name",
          "nom",
          "n",
          "nm",
          "nme",
          "label",
          "lbl",
          "description",
          "desc"
        ],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt"],
        orientationLock: [
          "rotation",
          "rot",
          "ro",
          "r",
          "o",
          "orientation",
          "orient",
          "or",
          "direction",
          "dir"
        ]
      }).reduce(
        (l, [m, L]) => (L.some((K) => i && i.toLowerCase() === K) && l.push(m), l),
        []
      );
      return c.length > 1 ? null : c[0];
    },
    processColumnMap() {
      this.showDataMismatch = !1, this.mappedHeaders = Object.values(this.columnMap).map(
        (c) => !c || c === "N" ? null : this.partFields.includes(c) ? c : (this.showDataMismatch = !0, null)
      );
      const g = this.mappedHeaders.filter(
        (c, l) => this.mappedHeaders.indexOf(c) !== l
      ).map(
        (c) => this.mappedHeaders.reduce(
          (l, m, L) => (m && m === c && l.push(L), l),
          []
        )
      );
      this.duplicateIndexes = g;
    },
    stripSpacesAroundCommas(i) {
      return i && i.replace(/\s*,\s*/g, ",");
    },
    validate(i, g) {
      if (g === "???")
        return !0;
      function c(m) {
        return !m || (m = m.trim().toLowerCase(), m === "l" || m === "w");
      }
      const l = {
        orientationLock: (m) => c(m)
      };
      return i in l ? l[i](g) : null;
    },
    populateColumnData() {
      const i = this.userRows.map((g) => {
        const c = {};
        return this.userHeaders.forEach((l, m) => {
          if (this.duplicateIndexes.flat().includes(m))
            return c[this.columnMap[m]] = "???";
          c[this.columnMap[m]] = g[m];
        }), c;
      });
      this.items = i;
    },
    convertPartDataToInputData() {
      return this.items.map((i) => ({
        l: this.units === "decimal" ? _e(i.l) : i.l,
        w: this.units === "decimal" ? _e(i.w) : i.w,
        q: i.q,
        orientationLock: i.orientationLock,
        name: i.name,
        units: "decimal"
      }));
    },
    importParts() {
      const i = this.convertPartDataToInputData();
      i != null && i.length && this.$emit("import", i);
    },
    isDuplicate(i) {
      return this.duplicateIndexes.some(
        (g) => g.includes(i)
      );
    }
  }
}, Ue = { id: "import-file" };
function je(i, g, c, l, m, L) {
  const K = Te("Drop");
  return ve(), ke("div", Ue, [
    Le(K, {
      label: "Drop CSV file here",
      "required-type": "text/csv",
      onDrop: L.parse
    }, null, 8, ["onDrop"])
  ]);
}
const Be = /* @__PURE__ */ ye(Pe, [["render", je]]);
export {
  Be as default
};

import { _ as ke, o as we, k as be, l as De, t as Re, q as Oe, E as Ie, G as Te, H as Fe, I as Se, J as ye, r as Le, n as Ae, K as ve } from "./main-CSm4HxgH.js";
const Me = {
  name: "Drop",
  props: {
    requiredType: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "Drop file here"
    },
    thinking: {
      type: Boolean,
      default: !1
    },
    maxFiles: {
      type: Number,
      default: 1
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
    readFileAsync(i) {
      return new Promise((c, h) => {
        const u = new FileReader();
        u.onloadend = () => {
          c(u.result);
        }, u.onerror = h, u.readAsText(i);
      });
    },
    async onDrop(i) {
      const c = [...i.dataTransfer.files];
      if (this.maxFiles && c.length > this.maxFiles) {
        alert(
          `You can only drop ${this.maxFiles} file${this.maxFiles > 1 ? "s" : ""} at a time`
        );
        return;
      }
      this.requiredType && (c.every((h) => h.type === this.requiredType) || alert(
        "We did not detect a valid file type - this might be safe to ignore"
      )), this.files = [];
      for (let h = 0; h < c.length; h++) {
        const u = c[h];
        let g;
        try {
          g = await this.readFileAsync(u);
        } catch (he) {
          console.error(he), alert(`Error reading file ${h + 1}`);
          return;
        }
        const F = {
          data: g,
          name: u.name
        };
        this.files.push(F);
        const H = h / c.length * 100;
        this.loadingProgress = H;
      }
      this.$emit("drop", this.files);
    },
    eventHandler(i) {
      this.dropClass = (i == null ? void 0 : i.type) ?? null, i.preventDefault();
    }
  }
};
function qe(i, c, h, u, g, F) {
  return we(), be("div", {
    id: "drop",
    class: Oe({ thinking: h.thinking, [g.dropClass]: !0 }),
    onDrop: c[0] || (c[0] = Ie((...H) => F.onDrop && F.onDrop(...H), ["prevent"]))
  }, [
    De("div", null, Re(h.thinking ? "Loading, please wait..." : h.label), 1)
  ], 34);
}
const Pe = /* @__PURE__ */ ke(Me, [["render", qe]]);
var ze = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function He(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Ee = { exports: {} };
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
(function(i, c) {
  (function(h, u) {
    i.exports = u();
  })(ze, function h() {
    var u = typeof self < "u" ? self : typeof window < "u" ? window : u !== void 0 ? u : {}, g = !u.document && !!u.postMessage, F = u.IS_PAPA_WORKER || !1, H = {}, he = 0, p = { parse: function(t, e) {
      var r = (e = e || {}).dynamicTyping || !1;
      if (v(r) && (e.dynamicTypingFunction = r, r = {}), e.dynamicTyping = r, e.transform = !!v(e.transform) && e.transform, e.worker && p.WORKERS_SUPPORTED) {
        var n = function() {
          if (!p.WORKERS_SUPPORTED)
            return !1;
          var f = (A = u.URL || u.webkitURL || null, x = h.toString(), p.BLOB_URL || (p.BLOB_URL = A.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", x, ")();"], { type: "text/javascript" })))), m = new u.Worker(f), A, x;
          return m.onmessage = xe, m.id = he++, H[m.id] = m;
        }();
        return n.userStep = e.step, n.userChunk = e.chunk, n.userComplete = e.complete, n.userError = e.error, e.step = v(e.step), e.chunk = v(e.chunk), e.complete = v(e.complete), e.error = v(e.error), delete e.worker, void n.postMessage({ input: t, config: e, workerId: n.id });
      }
      var a = null;
      return p.NODE_STREAM_INPUT, typeof t == "string" ? (t = function(f) {
        return f.charCodeAt(0) === 65279 ? f.slice(1) : f;
      }(t), a = e.download ? new ae(e) : new ne(e)) : t.readable === !0 && v(t.read) && v(t.on) ? a = new ue(e) : (u.File && t instanceof File || t instanceof Object) && (a = new oe(e)), a.stream(t);
    }, unparse: function(t, e) {
      var r = !1, n = !0, a = ",", f = `\r
`, m = '"', A = m + m, x = !1, o = null, R = !1;
      (function() {
        if (typeof e == "object") {
          if (typeof e.delimiter != "string" || p.BAD_DELIMITERS.filter(function(s) {
            return e.delimiter.indexOf(s) !== -1;
          }).length || (a = e.delimiter), (typeof e.quotes == "boolean" || typeof e.quotes == "function" || Array.isArray(e.quotes)) && (r = e.quotes), typeof e.skipEmptyLines != "boolean" && typeof e.skipEmptyLines != "string" || (x = e.skipEmptyLines), typeof e.newline == "string" && (f = e.newline), typeof e.quoteChar == "string" && (m = e.quoteChar), typeof e.header == "boolean" && (n = e.header), Array.isArray(e.columns)) {
            if (e.columns.length === 0)
              throw new Error("Option columns is empty");
            o = e.columns;
          }
          e.escapeChar !== void 0 && (A = e.escapeChar + m), (typeof e.escapeFormulae == "boolean" || e.escapeFormulae instanceof RegExp) && (R = e.escapeFormulae instanceof RegExp ? e.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      })();
      var d = new RegExp(se(m), "g");
      if (typeof t == "string" && (t = JSON.parse(t)), Array.isArray(t)) {
        if (!t.length || Array.isArray(t[0]))
          return K(null, t, x);
        if (typeof t[0] == "object")
          return K(o || Object.keys(t[0]), t, x);
      } else if (typeof t == "object")
        return typeof t.data == "string" && (t.data = JSON.parse(t.data)), Array.isArray(t.data) && (t.fields || (t.fields = t.meta && t.meta.fields || o), t.fields || (t.fields = Array.isArray(t.data[0]) ? t.fields : typeof t.data[0] == "object" ? Object.keys(t.data[0]) : []), Array.isArray(t.data[0]) || typeof t.data[0] == "object" || (t.data = [t.data])), K(t.fields || [], t.data || [], x);
      throw new Error("Unable to serialize unrecognized input");
      function K(s, b, P) {
        var D = "";
        typeof s == "string" && (s = JSON.parse(s)), typeof b == "string" && (b = JSON.parse(b));
        var M = Array.isArray(s) && 0 < s.length, S = !Array.isArray(b[0]);
        if (M && n) {
          for (var L = 0; L < s.length; L++)
            0 < L && (D += a), D += q(s[L], L);
          0 < b.length && (D += f);
        }
        for (var l = 0; l < b.length; l++) {
          var _ = M ? s.length : b[l].length, E = !1, T = M ? Object.keys(b[l]).length === 0 : b[l].length === 0;
          if (P && !M && (E = P === "greedy" ? b[l].join("").trim() === "" : b[l].length === 1 && b[l][0].length === 0), P === "greedy" && M) {
            for (var k = [], z = 0; z < _; z++) {
              var O = S ? s[z] : z;
              k.push(b[l][O]);
            }
            E = k.join("").trim() === "";
          }
          if (!E) {
            for (var w = 0; w < _; w++) {
              0 < w && !T && (D += a);
              var W = M && S ? s[w] : w;
              D += q(b[l][W], w);
            }
            l < b.length - 1 && (!P || 0 < _ && !T) && (D += f);
          }
        }
        return D;
      }
      function q(s, b) {
        if (s == null)
          return "";
        if (s.constructor === Date)
          return JSON.stringify(s).slice(1, 25);
        var P = !1;
        R && typeof s == "string" && R.test(s) && (s = "'" + s, P = !0);
        var D = s.toString().replace(d, A);
        return (P = P || r === !0 || typeof r == "function" && r(s, b) || Array.isArray(r) && r[b] || function(M, S) {
          for (var L = 0; L < S.length; L++)
            if (-1 < M.indexOf(S[L]))
              return !0;
          return !1;
        }(D, p.BAD_DELIMITERS) || -1 < D.indexOf(a) || D.charAt(0) === " " || D.charAt(D.length - 1) === " ") ? m + D + m : D;
      }
    } };
    if (p.RECORD_SEP = "", p.UNIT_SEP = "", p.BYTE_ORDER_MARK = "\uFEFF", p.BAD_DELIMITERS = ["\r", `
`, '"', p.BYTE_ORDER_MARK], p.WORKERS_SUPPORTED = !g && !!u.Worker, p.NODE_STREAM_INPUT = 1, p.LocalChunkSize = 10485760, p.RemoteChunkSize = 5242880, p.DefaultDelimiter = ",", p.Parser = de, p.ParserHandle = pe, p.NetworkStreamer = ae, p.FileStreamer = oe, p.StringStreamer = ne, p.ReadableStreamStreamer = ue, u.jQuery) {
      var ie = u.jQuery;
      ie.fn.parse = function(t) {
        var e = t.config || {}, r = [];
        return this.each(function(f) {
          if (!(ie(this).prop("tagName").toUpperCase() === "INPUT" && ie(this).attr("type").toLowerCase() === "file" && u.FileReader) || !this.files || this.files.length === 0)
            return !0;
          for (var m = 0; m < this.files.length; m++)
            r.push({ file: this.files[m], inputElem: this, instanceConfig: ie.extend({}, e) });
        }), n(), this;
        function n() {
          if (r.length !== 0) {
            var f, m, A, x, o = r[0];
            if (v(t.before)) {
              var R = t.before(o.file, o.inputElem);
              if (typeof R == "object") {
                if (R.action === "abort")
                  return f = "AbortError", m = o.file, A = o.inputElem, x = R.reason, void (v(t.error) && t.error({ name: f }, m, A, x));
                if (R.action === "skip")
                  return void a();
                typeof R.config == "object" && (o.instanceConfig = ie.extend(o.instanceConfig, R.config));
              } else if (R === "skip")
                return void a();
            }
            var d = o.instanceConfig.complete;
            o.instanceConfig.complete = function(K) {
              v(d) && d(K, o.file, o.inputElem), a();
            }, p.parse(o.file, o.instanceConfig);
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
        var r = fe(e);
        r.chunkSize = parseInt(r.chunkSize), e.step || e.chunk || (r.chunkSize = null), this._handle = new pe(r), (this._handle.streamer = this)._config = r;
      }).call(this, t), this.parseChunk = function(e, r) {
        if (this.isFirstChunk && v(this._config.beforeFirstChunk)) {
          var n = this._config.beforeFirstChunk(e);
          n !== void 0 && (e = n);
        }
        this.isFirstChunk = !1, this._halted = !1;
        var a = this._partialLine + e;
        this._partialLine = "";
        var f = this._handle.parse(a, this._baseIndex, !this._finished);
        if (!this._handle.paused() && !this._handle.aborted()) {
          var m = f.meta.cursor;
          this._finished || (this._partialLine = a.substring(m - this._baseIndex), this._baseIndex = m), f && f.data && (this._rowCount += f.data.length);
          var A = this._finished || this._config.preview && this._rowCount >= this._config.preview;
          if (F)
            u.postMessage({ results: f, workerId: p.WORKER_ID, finished: A });
          else if (v(this._config.chunk) && !r) {
            if (this._config.chunk(f, this._handle), this._handle.paused() || this._handle.aborted())
              return void (this._halted = !0);
            f = void 0, this._completeResults = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(f.data), this._completeResults.errors = this._completeResults.errors.concat(f.errors), this._completeResults.meta = f.meta), this._completed || !A || !v(this._config.complete) || f && f.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), A || f && f.meta.paused || this._nextChunk(), f;
        }
        this._halted = !0;
      }, this._sendError = function(e) {
        v(this._config.error) ? this._config.error(e) : F && this._config.error && u.postMessage({ workerId: p.WORKER_ID, error: e, finished: !1 });
      };
    }
    function ae(t) {
      var e;
      (t = t || {}).chunkSize || (t.chunkSize = p.RemoteChunkSize), Q.call(this, t), this._nextChunk = g ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(r) {
        this._input = r, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished)
          this._chunkLoaded();
        else {
          if (e = new XMLHttpRequest(), this._config.withCredentials && (e.withCredentials = this._config.withCredentials), g || (e.onload = G(this._chunkLoaded, this), e.onerror = G(this._chunkError, this)), e.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !g), this._config.downloadRequestHeaders) {
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
          } catch (f) {
            this._chunkError(f.message);
          }
          g && e.status === 0 && this._chunkError();
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
      (t = t || {}).chunkSize || (t.chunkSize = p.LocalChunkSize), Q.call(this, t);
      var n = typeof FileReader < "u";
      this.stream = function(a) {
        this._input = a, r = a.slice || a.webkitSlice || a.mozSlice, n ? ((e = new FileReader()).onload = G(this._chunkLoaded, this), e.onerror = G(this._chunkError, this)) : e = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function() {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function() {
        var a = this._input;
        if (this._config.chunkSize) {
          var f = Math.min(this._start + this._config.chunkSize, this._input.size);
          a = r.call(a, this._start, f);
        }
        var m = e.readAsText(a, this._config.encoding);
        n || this._chunkLoaded({ target: { result: m } });
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
        } catch (f) {
          this._streamError(f);
        }
      }, this), this._streamError = G(function(a) {
        this._streamCleanUp(), this._sendError(a);
      }, this), this._streamEnd = G(function() {
        this._streamCleanUp(), n = !0, this._streamData("");
      }, this), this._streamCleanUp = G(function() {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function pe(t) {
      var e, r, n, a = Math.pow(2, 53), f = -a, m = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, A = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, x = this, o = 0, R = 0, d = !1, K = !1, q = [], s = { data: [], errors: [], meta: {} };
      if (v(t.step)) {
        var b = t.step;
        t.step = function(l) {
          if (s = l, M())
            D();
          else {
            if (D(), s.data.length === 0)
              return;
            o += l.data.length, t.preview && o > t.preview ? r.abort() : (s.data = s.data[0], b(s, x));
          }
        };
      }
      function P(l) {
        return t.skipEmptyLines === "greedy" ? l.join("").trim() === "" : l.length === 1 && l[0].length === 0;
      }
      function D() {
        return s && n && (L("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + p.DefaultDelimiter + "'"), n = !1), t.skipEmptyLines && (s.data = s.data.filter(function(l) {
          return !P(l);
        })), M() && function() {
          if (!s)
            return;
          function l(E, T) {
            v(t.transformHeader) && (E = t.transformHeader(E, T)), q.push(E);
          }
          if (Array.isArray(s.data[0])) {
            for (var _ = 0; M() && _ < s.data.length; _++)
              s.data[_].forEach(l);
            s.data.splice(0, 1);
          } else
            s.data.forEach(l);
        }(), function() {
          if (!s || !t.header && !t.dynamicTyping && !t.transform)
            return s;
          function l(E, T) {
            var k, z = t.header ? {} : [];
            for (k = 0; k < E.length; k++) {
              var O = k, w = E[k];
              t.header && (O = k >= q.length ? "__parsed_extra" : q[k]), t.transform && (w = t.transform(w, O)), w = S(O, w), O === "__parsed_extra" ? (z[O] = z[O] || [], z[O].push(w)) : z[O] = w;
            }
            return t.header && (k > q.length ? L("FieldMismatch", "TooManyFields", "Too many fields: expected " + q.length + " fields but parsed " + k, R + T) : k < q.length && L("FieldMismatch", "TooFewFields", "Too few fields: expected " + q.length + " fields but parsed " + k, R + T)), z;
          }
          var _ = 1;
          return !s.data.length || Array.isArray(s.data[0]) ? (s.data = s.data.map(l), _ = s.data.length) : s.data = l(s.data, 0), t.header && s.meta && (s.meta.fields = q), R += _, s;
        }();
      }
      function M() {
        return t.header && q.length === 0;
      }
      function S(l, _) {
        return E = l, t.dynamicTypingFunction && t.dynamicTyping[E] === void 0 && (t.dynamicTyping[E] = t.dynamicTypingFunction(E)), (t.dynamicTyping[E] || t.dynamicTyping) === !0 ? _ === "true" || _ === "TRUE" || _ !== "false" && _ !== "FALSE" && (function(T) {
          if (m.test(T)) {
            var k = parseFloat(T);
            if (f < k && k < a)
              return !0;
          }
          return !1;
        }(_) ? parseFloat(_) : A.test(_) ? new Date(_) : _ === "" ? null : _) : _;
        var E;
      }
      function L(l, _, E, T) {
        var k = { type: l, code: _, message: E };
        T !== void 0 && (k.row = T), s.errors.push(k);
      }
      this.parse = function(l, _, E) {
        var T = t.quoteChar || '"';
        if (t.newline || (t.newline = function(O, w) {
          O = O.substring(0, 1048576);
          var W = new RegExp(se(w) + "([^]*?)" + se(w), "gm"), U = (O = O.replace(W, "")).split("\r"), $ = O.split(`
`), J = 1 < $.length && $[0].length < U[0].length;
          if (U.length === 1 || J)
            return `
`;
          for (var N = 0, C = 0; C < U.length; C++)
            U[C][0] === `
` && N++;
          return N >= U.length / 2 ? `\r
` : "\r";
        }(l, T)), n = !1, t.delimiter)
          v(t.delimiter) && (t.delimiter = t.delimiter(l), s.meta.delimiter = t.delimiter);
        else {
          var k = function(O, w, W, U, $) {
            var J, N, C, I;
            $ = $ || [",", "	", "|", ";", p.RECORD_SEP, p.UNIT_SEP];
            for (var ee = 0; ee < $.length; ee++) {
              var y = $[ee], re = 0, V = 0, te = 0;
              C = void 0;
              for (var Y = new de({ comments: U, delimiter: y, newline: w, preview: 10 }).parse(O), Z = 0; Z < Y.data.length; Z++)
                if (W && P(Y.data[Z]))
                  te++;
                else {
                  var X = Y.data[Z].length;
                  V += X, C !== void 0 ? 0 < X && (re += Math.abs(X - C), C = X) : C = X;
                }
              0 < Y.data.length && (V /= Y.data.length - te), (N === void 0 || re <= N) && (I === void 0 || I < V) && 1.99 < V && (N = re, J = y, I = V);
            }
            return { successful: !!(t.delimiter = J), bestDelimiter: J };
          }(l, t.newline, t.skipEmptyLines, t.comments, t.delimitersToGuess);
          k.successful ? t.delimiter = k.bestDelimiter : (n = !0, t.delimiter = p.DefaultDelimiter), s.meta.delimiter = t.delimiter;
        }
        var z = fe(t);
        return t.preview && t.header && z.preview++, e = l, r = new de(z), s = r.parse(e, _, E), D(), d ? { meta: { paused: !0 } } : s || { meta: { paused: !1 } };
      }, this.paused = function() {
        return d;
      }, this.pause = function() {
        d = !0, r.abort(), e = v(t.chunk) ? "" : e.substring(r.getCharIndex());
      }, this.resume = function() {
        x.streamer._halted ? (d = !1, x.streamer.parseChunk(e, !0)) : setTimeout(x.resume, 3);
      }, this.aborted = function() {
        return K;
      }, this.abort = function() {
        K = !0, r.abort(), s.meta.aborted = !0, v(t.complete) && t.complete(s), e = "";
      };
    }
    function se(t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function de(t) {
      var e, r = (t = t || {}).delimiter, n = t.newline, a = t.comments, f = t.step, m = t.preview, A = t.fastMode, x = e = t.quoteChar === void 0 || t.quoteChar === null ? '"' : t.quoteChar;
      if (t.escapeChar !== void 0 && (x = t.escapeChar), (typeof r != "string" || -1 < p.BAD_DELIMITERS.indexOf(r)) && (r = ","), a === r)
        throw new Error("Comment character same as delimiter");
      a === !0 ? a = "#" : (typeof a != "string" || -1 < p.BAD_DELIMITERS.indexOf(a)) && (a = !1), n !== `
` && n !== "\r" && n !== `\r
` && (n = `
`);
      var o = 0, R = !1;
      this.parse = function(d, K, q) {
        if (typeof d != "string")
          throw new Error("Input must be a string");
        var s = d.length, b = r.length, P = n.length, D = a.length, M = v(f), S = [], L = [], l = [], _ = o = 0;
        if (!d)
          return j();
        if (t.header && !K) {
          var E = d.split(n)[0].split(r), T = [], k = {}, z = !1;
          for (var O in E) {
            var w = E[O];
            v(t.transformHeader) && (w = t.transformHeader(w, O));
            var W = w, U = k[w] || 0;
            for (0 < U && (z = !0, W = w + "_" + U), k[w] = U + 1; T.includes(W); )
              W = W + "_" + U;
            T.push(W);
          }
          if (z) {
            var $ = d.split(n);
            $[0] = T.join(r), d = $.join(n);
          }
        }
        if (A || A !== !1 && d.indexOf(e) === -1) {
          for (var J = d.split(n), N = 0; N < J.length; N++) {
            if (l = J[N], o += l.length, N !== J.length - 1)
              o += n.length;
            else if (q)
              return j();
            if (!a || l.substring(0, D) !== a) {
              if (M) {
                if (S = [], te(l.split(r)), le(), R)
                  return j();
              } else
                te(l.split(r));
              if (m && m <= N)
                return S = S.slice(0, m), j(!0);
            }
          }
          return j();
        }
        for (var C = d.indexOf(r, o), I = d.indexOf(n, o), ee = new RegExp(se(x) + se(e), "g"), y = d.indexOf(e, o); ; )
          if (d[o] !== e)
            if (a && l.length === 0 && d.substring(o, o + D) === a) {
              if (I === -1)
                return j();
              o = I + P, I = d.indexOf(n, o), C = d.indexOf(r, o);
            } else if (C !== -1 && (C < I || I === -1))
              l.push(d.substring(o, C)), o = C + b, C = d.indexOf(r, o);
            else {
              if (I === -1)
                break;
              if (l.push(d.substring(o, I)), X(I + P), M && (le(), R))
                return j();
              if (m && S.length >= m)
                return j(!0);
            }
          else
            for (y = o, o++; ; ) {
              if ((y = d.indexOf(e, y + 1)) === -1)
                return q || L.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: S.length, index: o }), Z();
              if (y === s - 1)
                return Z(d.substring(o, y).replace(ee, e));
              if (e !== x || d[y + 1] !== x) {
                if (e === x || y === 0 || d[y - 1] !== x) {
                  C !== -1 && C < y + 1 && (C = d.indexOf(r, y + 1)), I !== -1 && I < y + 1 && (I = d.indexOf(n, y + 1));
                  var re = Y(I === -1 ? C : Math.min(C, I));
                  if (d.substr(y + 1 + re, b) === r) {
                    l.push(d.substring(o, y).replace(ee, e)), d[o = y + 1 + re + b] !== e && (y = d.indexOf(e, o)), C = d.indexOf(r, o), I = d.indexOf(n, o);
                    break;
                  }
                  var V = Y(I);
                  if (d.substring(y + 1 + V, y + 1 + V + P) === n) {
                    if (l.push(d.substring(o, y).replace(ee, e)), X(y + 1 + V + P), C = d.indexOf(r, o), y = d.indexOf(e, o), M && (le(), R))
                      return j();
                    if (m && S.length >= m)
                      return j(!0);
                    break;
                  }
                  L.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: S.length, index: o }), y++;
                }
              } else
                y++;
            }
        return Z();
        function te(B) {
          S.push(B), _ = o;
        }
        function Y(B) {
          var _e = 0;
          if (B !== -1) {
            var ce = d.substring(y + 1, B);
            ce && ce.trim() === "" && (_e = ce.length);
          }
          return _e;
        }
        function Z(B) {
          return q || (B === void 0 && (B = d.substring(o)), l.push(B), o = s, te(l), M && le()), j();
        }
        function X(B) {
          o = B, te(l), l = [], I = d.indexOf(n, o);
        }
        function j(B) {
          return { data: S, errors: L, meta: { delimiter: r, linebreak: n, aborted: R, truncated: !!B, cursor: _ + (K || 0) } };
        }
        function le() {
          f(j()), S = [], L = [];
        }
      }, this.abort = function() {
        R = !0;
      }, this.getCharIndex = function() {
        return o;
      };
    }
    function xe(t) {
      var e = t.data, r = H[e.workerId], n = !1;
      if (e.error)
        r.userError(e.error, e.file);
      else if (e.results && e.results.data) {
        var a = { abort: function() {
          n = !0, me(e.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: ge, resume: ge };
        if (v(r.userStep)) {
          for (var f = 0; f < e.results.data.length && (r.userStep({ data: e.results.data[f], errors: e.results.errors, meta: e.results.meta }, a), !n); f++)
            ;
          delete e.results;
        } else
          v(r.userChunk) && (r.userChunk(e.results, a, e.file), delete e.results);
      }
      e.finished && !n && me(e.workerId, e.results);
    }
    function me(t, e) {
      var r = H[t];
      v(r.userComplete) && r.userComplete(e), r.terminate(), delete H[t];
    }
    function ge() {
      throw new Error("Not implemented.");
    }
    function fe(t) {
      if (typeof t != "object" || t === null)
        return t;
      var e = Array.isArray(t) ? [] : {};
      for (var r in t)
        e[r] = fe(t[r]);
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
    return F && (u.onmessage = function(t) {
      var e = t.data;
      if (p.WORKER_ID === void 0 && e && (p.WORKER_ID = e.workerId), typeof e.input == "string")
        u.postMessage({ workerId: p.WORKER_ID, results: p.parse(e.input, e.config), finished: !0 });
      else if (u.File && e.input instanceof File || e.input instanceof Object) {
        var r = p.parse(e.input, e.config);
        r && u.postMessage({ workerId: p.WORKER_ID, results: r, finished: !0 });
      }
    }), (ae.prototype = Object.create(Q.prototype)).constructor = ae, (oe.prototype = Object.create(Q.prototype)).constructor = oe, (ne.prototype = Object.create(ne.prototype)).constructor = ne, (ue.prototype = Object.create(Q.prototype)).constructor = ue, p;
  });
})(Ee);
var Ue = Ee.exports;
const Ne = /* @__PURE__ */ He(Ue), Ce = {
  name: "ImportCSV",
  components: {
    Drop: Pe
  },
  props: {
    units: {
      type: String,
      default: "decimal"
    }
  },
  emits: ["error", "import"],
  setup() {
    const { t: i, locale: c, fallbackLocale: h } = Te({
      locale: "en_US"
    });
    return {
      t: i,
      locale: c,
      fallbackLocale: h
    };
  },
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
      fieldNames: Fe,
      manualMapping: {
        selectedColumnHeading: "",
        selectedColumnIndex: "",
        mappedKey: ""
      }
    };
  },
  computed: {
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
      return Se();
    },
    someInvalid() {
      return Object.values(this.itemValidation).some((i) => Object.values(i).some(
        (c) => c === !1 && Object.keys(i).some(
          (h) => this.partFields.includes(h)
        )
      ));
    },
    someDuplicates() {
      var i, c;
      return ((c = (i = this.duplicateIndexes) == null ? void 0 : i.flat()) == null ? void 0 : c.length) > 0;
    },
    itemValidation() {
      const i = {};
      return this.items.forEach((c, h) => {
        i[h] = {};
        for (const [u, g] of Object.entries(c)) {
          if (!this.partFields.includes(u))
            continue;
          const F = this.validate(u, g);
          (F === !0 || F === !1) && (i[h][u] = F);
        }
      }), i;
    }
  },
  methods: {
    parse(i) {
      var h;
      const c = (h = i == null ? void 0 : i[0]) == null ? void 0 : h.data;
      c && Ne.parse(c, {
        header: !1,
        dynamicTyping: !1,
        //parse numbers
        worker: !0,
        complete: (u) => this.process(u),
        error: () => this.$emit("error")
      });
    },
    process(i) {
      this.userRows = i, this.userRows = this.userRows.data.filter(
        (c) => c.some((h) => h)
      ), this.userHeaders = this.userRows[0], this.columnMap = {};
      for (let c = this.userHeaders.length; c--; ) {
        const h = this.userHeaders[c], u = this.predictHeadingType(h);
        u ? this.columnMap[c] = u : this.columnMap[c] = null;
      }
      this.processColumnMap(), this.userRows.shift(), this.populateColumnData(), this.importParts();
    },
    predictHeadingType(i) {
      const h = Object.entries({
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
        (u, [g, F]) => (F.some((H) => i && i.toLowerCase() === H) && u.push(g), u),
        []
      );
      return h.length > 1 ? null : h[0];
    },
    processColumnMap() {
      this.showDataMismatch = !1, this.mappedHeaders = Object.values(this.columnMap).map(
        (h) => !h || h === "N" ? null : this.partFields.includes(h) ? h : (this.showDataMismatch = !0, null)
      );
      const c = this.mappedHeaders.filter(
        (h, u) => this.mappedHeaders.indexOf(h) !== u
      ).map(
        (h) => this.mappedHeaders.reduce(
          (u, g, F) => (g && g === h && u.push(F), u),
          []
        )
      );
      this.duplicateIndexes = c;
    },
    stripSpacesAroundCommas(i) {
      return i && i.replace(/\s*,\s*/g, ",");
    },
    validate(i, c) {
      if (c === "???")
        return !0;
      function h(g) {
        return !g || (g = g.trim().toLowerCase(), g === "l" || g === "w");
      }
      const u = {
        orientationLock: (g) => h(g)
      };
      return i in u ? u[i](c) : null;
    },
    populateColumnData() {
      const i = this.userRows.map((c) => {
        const h = {};
        return this.userHeaders.forEach((u, g) => {
          if (this.duplicateIndexes.flat().includes(g))
            return h[this.columnMap[g]] = "???";
          h[this.columnMap[g]] = c[g];
        }), h;
      });
      this.items = i;
    },
    convertPartDataToInputData() {
      return this.items.map((i) => ({
        l: this.units === "decimal" ? ye(i.l) : i.l,
        w: this.units === "decimal" ? ye(i.w) : i.w,
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
        (c) => c.includes(i)
      );
    }
  }
}, je = { id: "import-file" };
function Be(i, c, h, u, g, F) {
  const H = Le("Drop");
  return we(), be("div", je, [
    Ae(H, {
      label: u.t("Drop CSV file here"),
      "required-type": "text/csv",
      onDrop: F.parse
    }, null, 8, ["label", "onDrop"])
  ]);
}
typeof ve == "function" && ve(Ce);
const We = /* @__PURE__ */ ke(Ce, [["render", Be]]);
export {
  We as default
};

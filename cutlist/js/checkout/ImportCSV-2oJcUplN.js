import { l as xe, _ as ve, o as ke, e as we, h as De, t as Re, n as Ie, J as Le, K as Se, L as Te, M as Fe, N as Ae, O as Me, P as pe, r as qe, D as Pe, Q as be } from "./main-Db3RcMN2.js";
const He = {
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
      loadingProgress: 0,
      files: xe([])
    };
  },
  mounted() {
    this.events.forEach((n) => {
      this.$el.addEventListener(n, this.eventHandler);
    });
  },
  unmounted() {
    this.events.forEach((n) => {
      this.$el.removeEventListener(n, this.eventHandler);
    });
  },
  methods: {
    readFileAsync(n) {
      return new Promise((h, s) => {
        const r = new FileReader();
        r.onloadend = () => {
          h(r.result);
        }, r.onerror = s, r.readAsText(n);
      });
    },
    async onDrop(n) {
      const h = [...n.dataTransfer.files];
      if (this.maxFiles && h.length > this.maxFiles) {
        alert(`You can only drop ${this.maxFiles} file${this.maxFiles > 1 ? "s" : ""} at a time`);
        return;
      }
      this.requiredType && (h.every((s) => s.type === this.requiredType) || alert("We did not detect a valid file type - this might be safe to ignore")), this.files.length = 0;
      for (let s = 0; s < h.length; s++) {
        const r = h[s];
        let f;
        try {
          f = await this.readFileAsync(r);
        } catch (F) {
          console.error(F), alert(`Error reading file ${s + 1}`);
          return;
        }
        const _ = {
          data: f,
          name: r.name
        };
        this.files.push(_);
        const R = s / h.length * 100;
        this.loadingProgress = R;
      }
      this.$emit("drop", structuredClone(this.files)), this.files.length = 0;
    },
    eventHandler(n) {
      this.dropClass = (n == null ? void 0 : n.type) ?? null, n.preventDefault();
    }
  }
};
function ze(n, h, s, r, f, _) {
  return ke(), we("div", {
    id: "drop",
    class: Ie({ thinking: s.thinking, [f.dropClass]: !0 }),
    onDrop: h[0] || (h[0] = Le((...R) => _.onDrop && _.onDrop(...R), ["prevent"]))
  }, [
    De("div", null, Re(s.thinking ? "Loading, please wait..." : s.label), 1)
  ], 34);
}
const je = /* @__PURE__ */ ve(He, [["render", ze]]);
var Ce = { exports: {} };
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
(function(n, h) {
  (function(s, r) {
    n.exports = r();
  })(Te, function s() {
    var r = typeof self < "u" ? self : typeof window < "u" ? window : r !== void 0 ? r : {}, f = !r.document && !!r.postMessage, _ = r.IS_PAPA_WORKER || !1, R = {}, F = 0, m = { parse: function(t, e) {
      var i = (e = e || {}).dynamicTyping || !1;
      if (v(i) && (e.dynamicTypingFunction = i, i = {}), e.dynamicTyping = i, e.transform = !!v(e.transform) && e.transform, e.worker && m.WORKERS_SUPPORTED) {
        var a = function() {
          if (!m.WORKERS_SUPPORTED) return !1;
          var p = (q = r.URL || r.webkitURL || null, x = s.toString(), m.BLOB_URL || (m.BLOB_URL = q.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", x, ")();"], { type: "text/javascript" })))), g = new r.Worker(p), q, x;
          return g.onmessage = Oe, g.id = F++, R[g.id] = g;
        }();
        return a.userStep = e.step, a.userChunk = e.chunk, a.userComplete = e.complete, a.userError = e.error, e.step = v(e.step), e.chunk = v(e.chunk), e.complete = v(e.complete), e.error = v(e.error), delete e.worker, void a.postMessage({ input: t, config: e, workerId: a.id });
      }
      var u = null;
      return m.NODE_STREAM_INPUT, typeof t == "string" ? (t = function(p) {
        return p.charCodeAt(0) === 65279 ? p.slice(1) : p;
      }(t), u = e.download ? new oe(e) : new se(e)) : t.readable === !0 && v(t.read) && v(t.on) ? u = new le(e) : (r.File && t instanceof File || t instanceof Object) && (u = new ue(e)), u.stream(t);
    }, unparse: function(t, e) {
      var i = !1, a = !0, u = ",", p = `\r
`, g = '"', q = g + g, x = !1, l = null, I = !1;
      (function() {
        if (typeof e == "object") {
          if (typeof e.delimiter != "string" || m.BAD_DELIMITERS.filter(function(o) {
            return e.delimiter.indexOf(o) !== -1;
          }).length || (u = e.delimiter), (typeof e.quotes == "boolean" || typeof e.quotes == "function" || Array.isArray(e.quotes)) && (i = e.quotes), typeof e.skipEmptyLines != "boolean" && typeof e.skipEmptyLines != "string" || (x = e.skipEmptyLines), typeof e.newline == "string" && (p = e.newline), typeof e.quoteChar == "string" && (g = e.quoteChar), typeof e.header == "boolean" && (a = e.header), Array.isArray(e.columns)) {
            if (e.columns.length === 0) throw new Error("Option columns is empty");
            l = e.columns;
          }
          e.escapeChar !== void 0 && (q = e.escapeChar + g), (typeof e.escapeFormulae == "boolean" || e.escapeFormulae instanceof RegExp) && (I = e.escapeFormulae instanceof RegExp ? e.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      })();
      var c = new RegExp(ae(g), "g");
      if (typeof t == "string" && (t = JSON.parse(t)), Array.isArray(t)) {
        if (!t.length || Array.isArray(t[0])) return W(null, t, x);
        if (typeof t[0] == "object") return W(l || Object.keys(t[0]), t, x);
      } else if (typeof t == "object") return typeof t.data == "string" && (t.data = JSON.parse(t.data)), Array.isArray(t.data) && (t.fields || (t.fields = t.meta && t.meta.fields || l), t.fields || (t.fields = Array.isArray(t.data[0]) ? t.fields : typeof t.data[0] == "object" ? Object.keys(t.data[0]) : []), Array.isArray(t.data[0]) || typeof t.data[0] == "object" || (t.data = [t.data])), W(t.fields || [], t.data || [], x);
      throw new Error("Unable to serialize unrecognized input");
      function W(o, C, z) {
        var D = "";
        typeof o == "string" && (o = JSON.parse(o)), typeof C == "string" && (C = JSON.parse(C));
        var P = Array.isArray(o) && 0 < o.length, A = !Array.isArray(C[0]);
        if (P && a) {
          for (var M = 0; M < o.length; M++) 0 < M && (D += u), D += H(o[M], M);
          0 < C.length && (D += p);
        }
        for (var d = 0; d < C.length; d++) {
          var y = P ? o.length : C[d].length, E = !1, T = P ? Object.keys(C[d]).length === 0 : C[d].length === 0;
          if (z && !P && (E = z === "greedy" ? C[d].join("").trim() === "" : C[d].length === 1 && C[d][0].length === 0), z === "greedy" && P) {
            for (var k = [], j = 0; j < y; j++) {
              var L = A ? o[j] : j;
              k.push(C[d][L]);
            }
            E = k.join("").trim() === "";
          }
          if (!E) {
            for (var w = 0; w < y; w++) {
              0 < w && !T && (D += u);
              var V = P && A ? o[w] : w;
              D += H(C[d][V], w);
            }
            d < C.length - 1 && (!z || 0 < y && !T) && (D += p);
          }
        }
        return D;
      }
      function H(o, C) {
        if (o == null) return "";
        if (o.constructor === Date) return JSON.stringify(o).slice(1, 25);
        var z = !1;
        I && typeof o == "string" && I.test(o) && (o = "'" + o, z = !0);
        var D = o.toString().replace(c, q);
        return (z = z || i === !0 || typeof i == "function" && i(o, C) || Array.isArray(i) && i[C] || function(P, A) {
          for (var M = 0; M < A.length; M++) if (-1 < P.indexOf(A[M])) return !0;
          return !1;
        }(D, m.BAD_DELIMITERS) || -1 < D.indexOf(u) || D.charAt(0) === " " || D.charAt(D.length - 1) === " ") ? g + D + g : D;
      }
    } };
    if (m.RECORD_SEP = "", m.UNIT_SEP = "", m.BYTE_ORDER_MARK = "\uFEFF", m.BAD_DELIMITERS = ["\r", `
`, '"', m.BYTE_ORDER_MARK], m.WORKERS_SUPPORTED = !f && !!r.Worker, m.NODE_STREAM_INPUT = 1, m.LocalChunkSize = 10485760, m.RemoteChunkSize = 5242880, m.DefaultDelimiter = ",", m.Parser = de, m.ParserHandle = me, m.NetworkStreamer = oe, m.FileStreamer = ue, m.StringStreamer = se, m.ReadableStreamStreamer = le, r.jQuery) {
      var re = r.jQuery;
      re.fn.parse = function(t) {
        var e = t.config || {}, i = [];
        return this.each(function(p) {
          if (!(re(this).prop("tagName").toUpperCase() === "INPUT" && re(this).attr("type").toLowerCase() === "file" && r.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var g = 0; g < this.files.length; g++) i.push({ file: this.files[g], inputElem: this, instanceConfig: re.extend({}, e) });
        }), a(), this;
        function a() {
          if (i.length !== 0) {
            var p, g, q, x, l = i[0];
            if (v(t.before)) {
              var I = t.before(l.file, l.inputElem);
              if (typeof I == "object") {
                if (I.action === "abort") return p = "AbortError", g = l.file, q = l.inputElem, x = I.reason, void (v(t.error) && t.error({ name: p }, g, q, x));
                if (I.action === "skip") return void u();
                typeof I.config == "object" && (l.instanceConfig = re.extend(l.instanceConfig, I.config));
              } else if (I === "skip") return void u();
            }
            var c = l.instanceConfig.complete;
            l.instanceConfig.complete = function(W) {
              v(c) && c(W, l.file, l.inputElem), u();
            }, m.parse(l.file, l.instanceConfig);
          } else v(t.complete) && t.complete();
        }
        function u() {
          i.splice(0, 1), a();
        }
      };
    }
    function Q(t) {
      this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(e) {
        var i = ce(e);
        i.chunkSize = parseInt(i.chunkSize), e.step || e.chunk || (i.chunkSize = null), this._handle = new me(i), (this._handle.streamer = this)._config = i;
      }).call(this, t), this.parseChunk = function(e, i) {
        if (this.isFirstChunk && v(this._config.beforeFirstChunk)) {
          var a = this._config.beforeFirstChunk(e);
          a !== void 0 && (e = a);
        }
        this.isFirstChunk = !1, this._halted = !1;
        var u = this._partialLine + e;
        this._partialLine = "";
        var p = this._handle.parse(u, this._baseIndex, !this._finished);
        if (!this._handle.paused() && !this._handle.aborted()) {
          var g = p.meta.cursor;
          this._finished || (this._partialLine = u.substring(g - this._baseIndex), this._baseIndex = g), p && p.data && (this._rowCount += p.data.length);
          var q = this._finished || this._config.preview && this._rowCount >= this._config.preview;
          if (_) r.postMessage({ results: p, workerId: m.WORKER_ID, finished: q });
          else if (v(this._config.chunk) && !i) {
            if (this._config.chunk(p, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
            p = void 0, this._completeResults = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(p.data), this._completeResults.errors = this._completeResults.errors.concat(p.errors), this._completeResults.meta = p.meta), this._completed || !q || !v(this._config.complete) || p && p.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), q || p && p.meta.paused || this._nextChunk(), p;
        }
        this._halted = !0;
      }, this._sendError = function(e) {
        v(this._config.error) ? this._config.error(e) : _ && this._config.error && r.postMessage({ workerId: m.WORKER_ID, error: e, finished: !1 });
      };
    }
    function oe(t) {
      var e;
      (t = t || {}).chunkSize || (t.chunkSize = m.RemoteChunkSize), Q.call(this, t), this._nextChunk = f ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(i) {
        this._input = i, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished) this._chunkLoaded();
        else {
          if (e = new XMLHttpRequest(), this._config.withCredentials && (e.withCredentials = this._config.withCredentials), f || (e.onload = Y(this._chunkLoaded, this), e.onerror = Y(this._chunkError, this)), e.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !f), this._config.downloadRequestHeaders) {
            var i = this._config.downloadRequestHeaders;
            for (var a in i) e.setRequestHeader(a, i[a]);
          }
          if (this._config.chunkSize) {
            var u = this._start + this._config.chunkSize - 1;
            e.setRequestHeader("Range", "bytes=" + this._start + "-" + u);
          }
          try {
            e.send(this._config.downloadRequestBody);
          } catch (p) {
            this._chunkError(p.message);
          }
          f && e.status === 0 && this._chunkError();
        }
      }, this._chunkLoaded = function() {
        e.readyState === 4 && (e.status < 200 || 400 <= e.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : e.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(i) {
          var a = i.getResponseHeader("Content-Range");
          return a === null ? -1 : parseInt(a.substring(a.lastIndexOf("/") + 1));
        }(e), this.parseChunk(e.responseText)));
      }, this._chunkError = function(i) {
        var a = e.statusText || i;
        this._sendError(new Error(a));
      };
    }
    function ue(t) {
      var e, i;
      (t = t || {}).chunkSize || (t.chunkSize = m.LocalChunkSize), Q.call(this, t);
      var a = typeof FileReader < "u";
      this.stream = function(u) {
        this._input = u, i = u.slice || u.webkitSlice || u.mozSlice, a ? ((e = new FileReader()).onload = Y(this._chunkLoaded, this), e.onerror = Y(this._chunkError, this)) : e = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function() {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function() {
        var u = this._input;
        if (this._config.chunkSize) {
          var p = Math.min(this._start + this._config.chunkSize, this._input.size);
          u = i.call(u, this._start, p);
        }
        var g = e.readAsText(u, this._config.encoding);
        a || this._chunkLoaded({ target: { result: g } });
      }, this._chunkLoaded = function(u) {
        this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(u.target.result);
      }, this._chunkError = function() {
        this._sendError(e.error);
      };
    }
    function se(t) {
      var e;
      Q.call(this, t = t || {}), this.stream = function(i) {
        return e = i, this._nextChunk();
      }, this._nextChunk = function() {
        if (!this._finished) {
          var i, a = this._config.chunkSize;
          return a ? (i = e.substring(0, a), e = e.substring(a)) : (i = e, e = ""), this._finished = !e, this.parseChunk(i);
        }
      };
    }
    function le(t) {
      Q.call(this, t = t || {});
      var e = [], i = !0, a = !1;
      this.pause = function() {
        Q.prototype.pause.apply(this, arguments), this._input.pause();
      }, this.resume = function() {
        Q.prototype.resume.apply(this, arguments), this._input.resume();
      }, this.stream = function(u) {
        this._input = u, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
      }, this._checkIsFinished = function() {
        a && e.length === 1 && (this._finished = !0);
      }, this._nextChunk = function() {
        this._checkIsFinished(), e.length ? this.parseChunk(e.shift()) : i = !0;
      }, this._streamData = Y(function(u) {
        try {
          e.push(typeof u == "string" ? u : u.toString(this._config.encoding)), i && (i = !1, this._checkIsFinished(), this.parseChunk(e.shift()));
        } catch (p) {
          this._streamError(p);
        }
      }, this), this._streamError = Y(function(u) {
        this._streamCleanUp(), this._sendError(u);
      }, this), this._streamEnd = Y(function() {
        this._streamCleanUp(), a = !0, this._streamData("");
      }, this), this._streamCleanUp = Y(function() {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function me(t) {
      var e, i, a, u = Math.pow(2, 53), p = -u, g = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, q = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, x = this, l = 0, I = 0, c = !1, W = !1, H = [], o = { data: [], errors: [], meta: {} };
      if (v(t.step)) {
        var C = t.step;
        t.step = function(d) {
          if (o = d, P()) D();
          else {
            if (D(), o.data.length === 0) return;
            l += d.data.length, t.preview && l > t.preview ? i.abort() : (o.data = o.data[0], C(o, x));
          }
        };
      }
      function z(d) {
        return t.skipEmptyLines === "greedy" ? d.join("").trim() === "" : d.length === 1 && d[0].length === 0;
      }
      function D() {
        return o && a && (M("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + m.DefaultDelimiter + "'"), a = !1), t.skipEmptyLines && (o.data = o.data.filter(function(d) {
          return !z(d);
        })), P() && function() {
          if (!o) return;
          function d(E, T) {
            v(t.transformHeader) && (E = t.transformHeader(E, T)), H.push(E);
          }
          if (Array.isArray(o.data[0])) {
            for (var y = 0; P() && y < o.data.length; y++) o.data[y].forEach(d);
            o.data.splice(0, 1);
          } else o.data.forEach(d);
        }(), function() {
          if (!o || !t.header && !t.dynamicTyping && !t.transform) return o;
          function d(E, T) {
            var k, j = t.header ? {} : [];
            for (k = 0; k < E.length; k++) {
              var L = k, w = E[k];
              t.header && (L = k >= H.length ? "__parsed_extra" : H[k]), t.transform && (w = t.transform(w, L)), w = A(L, w), L === "__parsed_extra" ? (j[L] = j[L] || [], j[L].push(w)) : j[L] = w;
            }
            return t.header && (k > H.length ? M("FieldMismatch", "TooManyFields", "Too many fields: expected " + H.length + " fields but parsed " + k, I + T) : k < H.length && M("FieldMismatch", "TooFewFields", "Too few fields: expected " + H.length + " fields but parsed " + k, I + T)), j;
          }
          var y = 1;
          return !o.data.length || Array.isArray(o.data[0]) ? (o.data = o.data.map(d), y = o.data.length) : o.data = d(o.data, 0), t.header && o.meta && (o.meta.fields = H), I += y, o;
        }();
      }
      function P() {
        return t.header && H.length === 0;
      }
      function A(d, y) {
        return E = d, t.dynamicTypingFunction && t.dynamicTyping[E] === void 0 && (t.dynamicTyping[E] = t.dynamicTypingFunction(E)), (t.dynamicTyping[E] || t.dynamicTyping) === !0 ? y === "true" || y === "TRUE" || y !== "false" && y !== "FALSE" && (function(T) {
          if (g.test(T)) {
            var k = parseFloat(T);
            if (p < k && k < u) return !0;
          }
          return !1;
        }(y) ? parseFloat(y) : q.test(y) ? new Date(y) : y === "" ? null : y) : y;
        var E;
      }
      function M(d, y, E, T) {
        var k = { type: d, code: y, message: E };
        T !== void 0 && (k.row = T), o.errors.push(k);
      }
      this.parse = function(d, y, E) {
        var T = t.quoteChar || '"';
        if (t.newline || (t.newline = function(L, w) {
          L = L.substring(0, 1048576);
          var V = new RegExp(ae(w) + "([^]*?)" + ae(w), "gm"), U = (L = L.replace(V, "")).split("\r"), $ = L.split(`
`), J = 1 < $.length && $[0].length < U[0].length;
          if (U.length === 1 || J) return `
`;
          for (var N = 0, O = 0; O < U.length; O++) U[O][0] === `
` && N++;
          return N >= U.length / 2 ? `\r
` : "\r";
        }(d, T)), a = !1, t.delimiter) v(t.delimiter) && (t.delimiter = t.delimiter(d), o.meta.delimiter = t.delimiter);
        else {
          var k = function(L, w, V, U, $) {
            var J, N, O, S;
            $ = $ || [",", "	", "|", ";", m.RECORD_SEP, m.UNIT_SEP];
            for (var te = 0; te < $.length; te++) {
              var b = $[te], ne = 0, G = 0, ie = 0;
              O = void 0;
              for (var Z = new de({ comments: U, delimiter: b, newline: w, preview: 10 }).parse(L), X = 0; X < Z.data.length; X++) if (V && z(Z.data[X])) ie++;
              else {
                var ee = Z.data[X].length;
                G += ee, O !== void 0 ? 0 < ee && (ne += Math.abs(ee - O), O = ee) : O = ee;
              }
              0 < Z.data.length && (G /= Z.data.length - ie), (N === void 0 || ne <= N) && (S === void 0 || S < G) && 1.99 < G && (N = ne, J = b, S = G);
            }
            return { successful: !!(t.delimiter = J), bestDelimiter: J };
          }(d, t.newline, t.skipEmptyLines, t.comments, t.delimitersToGuess);
          k.successful ? t.delimiter = k.bestDelimiter : (a = !0, t.delimiter = m.DefaultDelimiter), o.meta.delimiter = t.delimiter;
        }
        var j = ce(t);
        return t.preview && t.header && j.preview++, e = d, i = new de(j), o = i.parse(e, y, E), D(), c ? { meta: { paused: !0 } } : o || { meta: { paused: !1 } };
      }, this.paused = function() {
        return c;
      }, this.pause = function() {
        c = !0, i.abort(), e = v(t.chunk) ? "" : e.substring(i.getCharIndex());
      }, this.resume = function() {
        x.streamer._halted ? (c = !1, x.streamer.parseChunk(e, !0)) : setTimeout(x.resume, 3);
      }, this.aborted = function() {
        return W;
      }, this.abort = function() {
        W = !0, i.abort(), o.meta.aborted = !0, v(t.complete) && t.complete(o), e = "";
      };
    }
    function ae(t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function de(t) {
      var e, i = (t = t || {}).delimiter, a = t.newline, u = t.comments, p = t.step, g = t.preview, q = t.fastMode, x = e = t.quoteChar === void 0 || t.quoteChar === null ? '"' : t.quoteChar;
      if (t.escapeChar !== void 0 && (x = t.escapeChar), (typeof i != "string" || -1 < m.BAD_DELIMITERS.indexOf(i)) && (i = ","), u === i) throw new Error("Comment character same as delimiter");
      u === !0 ? u = "#" : (typeof u != "string" || -1 < m.BAD_DELIMITERS.indexOf(u)) && (u = !1), a !== `
` && a !== "\r" && a !== `\r
` && (a = `
`);
      var l = 0, I = !1;
      this.parse = function(c, W, H) {
        if (typeof c != "string") throw new Error("Input must be a string");
        var o = c.length, C = i.length, z = a.length, D = u.length, P = v(p), A = [], M = [], d = [], y = l = 0;
        if (!c) return B();
        if (t.header && !W) {
          var E = c.split(a)[0].split(i), T = [], k = {}, j = !1;
          for (var L in E) {
            var w = E[L];
            v(t.transformHeader) && (w = t.transformHeader(w, L));
            var V = w, U = k[w] || 0;
            for (0 < U && (j = !0, V = w + "_" + U), k[w] = U + 1; T.includes(V); ) V = V + "_" + U;
            T.push(V);
          }
          if (j) {
            var $ = c.split(a);
            $[0] = T.join(i), c = $.join(a);
          }
        }
        if (q || q !== !1 && c.indexOf(e) === -1) {
          for (var J = c.split(a), N = 0; N < J.length; N++) {
            if (d = J[N], l += d.length, N !== J.length - 1) l += a.length;
            else if (H) return B();
            if (!u || d.substring(0, D) !== u) {
              if (P) {
                if (A = [], ie(d.split(i)), he(), I) return B();
              } else ie(d.split(i));
              if (g && g <= N) return A = A.slice(0, g), B(!0);
            }
          }
          return B();
        }
        for (var O = c.indexOf(i, l), S = c.indexOf(a, l), te = new RegExp(ae(x) + ae(e), "g"), b = c.indexOf(e, l); ; ) if (c[l] !== e) if (u && d.length === 0 && c.substring(l, l + D) === u) {
          if (S === -1) return B();
          l = S + z, S = c.indexOf(a, l), O = c.indexOf(i, l);
        } else if (O !== -1 && (O < S || S === -1)) d.push(c.substring(l, O)), l = O + C, O = c.indexOf(i, l);
        else {
          if (S === -1) break;
          if (d.push(c.substring(l, S)), ee(S + z), P && (he(), I)) return B();
          if (g && A.length >= g) return B(!0);
        }
        else for (b = l, l++; ; ) {
          if ((b = c.indexOf(e, b + 1)) === -1) return H || M.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: A.length, index: l }), X();
          if (b === o - 1) return X(c.substring(l, b).replace(te, e));
          if (e !== x || c[b + 1] !== x) {
            if (e === x || b === 0 || c[b - 1] !== x) {
              O !== -1 && O < b + 1 && (O = c.indexOf(i, b + 1)), S !== -1 && S < b + 1 && (S = c.indexOf(a, b + 1));
              var ne = Z(S === -1 ? O : Math.min(O, S));
              if (c.substr(b + 1 + ne, C) === i) {
                d.push(c.substring(l, b).replace(te, e)), c[l = b + 1 + ne + C] !== e && (b = c.indexOf(e, l)), O = c.indexOf(i, l), S = c.indexOf(a, l);
                break;
              }
              var G = Z(S);
              if (c.substring(b + 1 + G, b + 1 + G + z) === a) {
                if (d.push(c.substring(l, b).replace(te, e)), ee(b + 1 + G + z), O = c.indexOf(i, l), b = c.indexOf(e, l), P && (he(), I)) return B();
                if (g && A.length >= g) return B(!0);
                break;
              }
              M.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: A.length, index: l }), b++;
            }
          } else b++;
        }
        return X();
        function ie(K) {
          A.push(K), y = l;
        }
        function Z(K) {
          var ye = 0;
          if (K !== -1) {
            var fe = c.substring(b + 1, K);
            fe && fe.trim() === "" && (ye = fe.length);
          }
          return ye;
        }
        function X(K) {
          return H || (K === void 0 && (K = c.substring(l)), d.push(K), l = o, ie(d), P && he()), B();
        }
        function ee(K) {
          l = K, ie(d), d = [], S = c.indexOf(a, l);
        }
        function B(K) {
          return { data: A, errors: M, meta: { delimiter: i, linebreak: a, aborted: I, truncated: !!K, cursor: y + (W || 0) } };
        }
        function he() {
          p(B()), A = [], M = [];
        }
      }, this.abort = function() {
        I = !0;
      }, this.getCharIndex = function() {
        return l;
      };
    }
    function Oe(t) {
      var e = t.data, i = R[e.workerId], a = !1;
      if (e.error) i.userError(e.error, e.file);
      else if (e.results && e.results.data) {
        var u = { abort: function() {
          a = !0, ge(e.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: _e, resume: _e };
        if (v(i.userStep)) {
          for (var p = 0; p < e.results.data.length && (i.userStep({ data: e.results.data[p], errors: e.results.errors, meta: e.results.meta }, u), !a); p++) ;
          delete e.results;
        } else v(i.userChunk) && (i.userChunk(e.results, u, e.file), delete e.results);
      }
      e.finished && !a && ge(e.workerId, e.results);
    }
    function ge(t, e) {
      var i = R[t];
      v(i.userComplete) && i.userComplete(e), i.terminate(), delete R[t];
    }
    function _e() {
      throw new Error("Not implemented.");
    }
    function ce(t) {
      if (typeof t != "object" || t === null) return t;
      var e = Array.isArray(t) ? [] : {};
      for (var i in t) e[i] = ce(t[i]);
      return e;
    }
    function Y(t, e) {
      return function() {
        t.apply(e, arguments);
      };
    }
    function v(t) {
      return typeof t == "function";
    }
    return _ && (r.onmessage = function(t) {
      var e = t.data;
      if (m.WORKER_ID === void 0 && e && (m.WORKER_ID = e.workerId), typeof e.input == "string") r.postMessage({ workerId: m.WORKER_ID, results: m.parse(e.input, e.config), finished: !0 });
      else if (r.File && e.input instanceof File || e.input instanceof Object) {
        var i = m.parse(e.input, e.config);
        i && r.postMessage({ workerId: m.WORKER_ID, results: i, finished: !0 });
      }
    }), (oe.prototype = Object.create(Q.prototype)).constructor = oe, (ue.prototype = Object.create(Q.prototype)).constructor = ue, (se.prototype = Object.create(se.prototype)).constructor = se, (le.prototype = Object.create(Q.prototype)).constructor = le, m;
  });
})(Ce);
var Ue = Ce.exports;
const Ne = /* @__PURE__ */ Se(Ue), Ee = {
  name: "ImportCSV",
  components: {
    Drop: je
  },
  props: {
    units: {
      type: String,
      default: "decimal"
    },
    options: {
      type: Object,
      default: () => ({
        locale: "en_US"
      })
    },
    bandingOptions: {
      type: Object,
      default: () => {
      }
    },
    bandingLabels: {
      type: Array,
      default: () => []
    },
    customFields: {
      type: Array,
      default: () => []
    }
  },
  emits: ["error", "import"],
  setup() {
    const { t: n, locale: h, fallbackLocale: s } = Fe({
      locale: "en_US"
    });
    return {
      t: n,
      locale: h,
      fallbackLocale: s
    };
  },
  data() {
    return {
      // headings: true,
      importType: "stock",
      items: [],
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
      fieldNames: Ae,
      manualMapping: {
        selectedColumnHeading: "",
        selectedColumnIndex: "",
        mappedKey: ""
      },
      bandingChoiceCombinations: null
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
      return Me();
    },
    someInvalid() {
      return Object.values(this.itemValidation).some((n) => Object.values(n).some((h) => h === !1 && Object.keys(n).some((s) => this.partFields.includes(s))));
    },
    itemValidation() {
      const n = {};
      return this.items.forEach((h, s) => {
        n[s] = {};
        for (const [r, f] of Object.entries(h)) {
          if (!this.partFields.includes(r)) continue;
          const _ = this.validate(r, f);
          (_ === !0 || _ === !1) && (n[s][r] = _);
        }
      }), n;
    },
    customFieldLabels() {
      return this.customFields.map((n) => n.label);
    }
  },
  mounted() {
    if (this.locale = this.options.locale, this.bandingOptions) {
      const n = Object.keys(this.bandingOptions), h = [[]];
      n.forEach((r) => {
        const f = this.bandingOptions[r], _ = [];
        h.forEach((R) => {
          f.forEach((F) => _.push([...R, F]));
        }), h.splice(0, h.length, ..._);
      });
      const s = /* @__PURE__ */ new Set();
      h.forEach((r) => s.add(r.join("|").toLowerCase())), this.bandingChoiceCombinations = s;
    }
  },
  methods: {
    parse(n) {
      var s;
      const h = (s = n == null ? void 0 : n[0]) == null ? void 0 : s.data;
      h && Ne.parse(h, {
        header: !1,
        dynamicTyping: !1,
        //parse numbers
        worker: !0,
        complete: (r) => this.process(r),
        error: () => this.$emit("error")
      });
    },
    process(n) {
      this.userRows = n, this.userRows = this.userRows.data.filter((h) => h.some((s) => s)), this.userHeaders = this.userRows[0], this.columnMap = {};
      for (let h = this.userHeaders.length; h--; ) {
        const s = this.userHeaders[h], r = this.predictHeadingType(s);
        r ? this.columnMap[h] = r : (this.columnMap[h] = null, this.customFieldLabels.includes(s) && (this.columnMap[h] = "customData." + this.customFields.find((f) => f.label === s).id));
      }
      this.processColumnMap(), this.userRows.shift(), this.populateColumnData(), this.importParts();
    },
    predictHeadingType(n) {
      const h = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", this.t("l"), this.t("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", this.t("w"), this.t("width")],
        t: [
          "thickness",
          "t",
          "th",
          "depth",
          "dp",
          "dpth",
          "thk",
          "thick",
          this.t("t"),
          this.t("thickness")
        ],
        name: [
          "name",
          "nom",
          "n",
          "nm",
          "nme",
          "label",
          "lbl",
          "description",
          "desc",
          this.t("name")
        ],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", this.t("quantity"), this.t("q"), "count"],
        material: [
          "material",
          "mat",
          "m",
          "matl",
          "mtl",
          "mtrl",
          "mtr",
          this.t("quantity")
        ],
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
          "dir",
          this.t("orientation")
        ],
        banding: [
          "b",
          "banding",
          "band",
          "ba",
          "bnd",
          "edging",
          "edge",
          "edn",
          this.t("banding")
        ]
      }, s = Object.entries(h).reduce(
        (r, [f, _]) => (_.some((R) => n && n.toLowerCase() === R) && r.push(f), r),
        []
      );
      return s.length > 1 ? null : s[0];
    },
    processColumnMap() {
      this.showDataMismatch = !1, this.mappedHeaders = Object.values(this.columnMap).map((s) => !s || s === "N" ? null : this.partFields.includes(s) ? s : (this.showDataMismatch = !0, null));
      const h = this.mappedHeaders.filter((s, r) => this.mappedHeaders.indexOf(s) !== r).map((s) => this.mappedHeaders.reduce(
        (r, f, _) => (f && f === s && r.push(_), r),
        []
      ));
      this.duplicateIndexes = h;
    },
    stripSpacesAroundCommas(n) {
      return n && n.replace(/\s*,\s*/g, ",");
    },
    validate(n, h) {
      if (h === "???") return !0;
      function s(f) {
        return !f || (f = f.trim().toLowerCase(), f === "l" || f === "w");
      }
      const r = {
        banding: (f) => {
          if (f = this.stripSpacesAroundCommas(f), !f) return !0;
          const _ = f.split(",");
          if (_.every((F) => this.isValidBandingCombination(F))) return !0;
          const R = _.filter((F) => !this.isValidBandingCombination(F));
          return console.log("Valid choices..."), console.table(Array.from(this.bandingChoiceCombinations)), console.log("The following banding choices are invalid", R), !(R.length > 0);
        },
        orientationLock: (f) => s(f)
      };
      return n in r ? r[n](h) : null;
    },
    parseItemValue(n, h) {
      const s = {
        bandingOptions: (r) => {
          if (r = this.stripSpacesAroundCommas(r), !r)
            return {
              y1: "",
              y2: "",
              x1: "",
              x2: ""
            };
          let f = r.split(",").map((R) => R.toLowerCase());
          const _ = {
            y1: {},
            y2: {},
            x1: {},
            x2: {}
          };
          for (const R in this.bandingOptions) {
            const F = Object.keys(this.bandingOptions).indexOf(R);
            _.y1[this.bandingLabels[F]] = f[0].split("|")[F], _.y2[this.bandingLabels[F]] = f[1].split("|")[F], _.x1[this.bandingLabels[F]] = f[2].split("|")[F], _.x2[this.bandingLabels[F]] = f[3].split("|")[F];
          }
          return _;
        }
      };
      if (n in s) return s[n](h);
    },
    populateColumnData() {
      const n = this.userRows.map((h) => {
        const s = {};
        return this.userHeaders.forEach((r, f) => {
          if (this.duplicateIndexes.flat().includes(f))
            return s[this.columnMap[f]] = "???";
          s[this.columnMap[f]] = h[f];
        }), s;
      });
      this.items = n;
    },
    transformCustomData(n) {
      let h = {};
      for (let s in n)
        if (s.startsWith("customData.")) {
          let r = s.slice(11);
          h[r] = n[s];
        }
      return h;
    },
    convertPartDataToInputData() {
      return this.items.map((n, h) => {
        const s = {
          l: this.units === "decimal" ? pe(n.l) : n.l,
          w: this.units === "decimal" ? pe(n.w) : n.w,
          t: this.units === "decimal" ? pe(n.t) : n.t,
          q: n.q,
          orientationLock: n.orientationLock,
          //cater for Y/1 value
          name: n.name,
          material: n.material,
          bandingOptions: this.itemValidation[h].banding ? this.parseItemValue("bandingOptions", n.banding) : null,
          units: this.units,
          customData: this.transformCustomData(n)
        };
        return console.log(s.bandingOptions), s;
      });
    },
    importParts() {
      const n = this.convertPartDataToInputData();
      n != null && n.length && this.$emit("import", n);
    },
    isValidBandingCombination(n) {
      return n ? this.bandingChoiceCombinations.has(n.toLowerCase()) : !0;
    }
  }
}, Be = { id: "import-file" };
function Ke(n, h, s, r, f, _) {
  const R = qe("Drop");
  return ke(), we("div", Be, [
    Pe(R, {
      label: r.t("Drop CSV file here"),
      "required-type": "text/csv",
      onDrop: _.parse
    }, null, 8, ["label", "onDrop"])
  ]);
}
typeof be == "function" && be(Ee);
const Ve = /* @__PURE__ */ ve(Ee, [["render", Ke]]);
export {
  Ve as default
};

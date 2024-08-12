import { m as De, _ as be, o as ke, l as Ce, n as Oe, t as Re, u as Se, A as Ie, B as Te, D as Fe, E as Le, G as Ae, H as Me, I as pe, r as qe, p as He, J as ve } from "./main-CBNueZtF.js";
const Pe = {
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
      files: De([])
    };
  },
  mounted() {
    this.events.forEach((r) => {
      this.$el.addEventListener(r, this.eventHandler);
    });
  },
  unmounted() {
    this.events.forEach((r) => {
      this.$el.removeEventListener(r, this.eventHandler);
    });
  },
  methods: {
    readFileAsync(r) {
      return new Promise((d, s) => {
        const n = new FileReader();
        n.onloadend = () => {
          d(n.result);
        }, n.onerror = s, n.readAsText(r);
      });
    },
    async onDrop(r) {
      const d = [...r.dataTransfer.files];
      if (this.maxFiles && d.length > this.maxFiles) {
        alert(`You can only drop ${this.maxFiles} file${this.maxFiles > 1 ? "s" : ""} at a time`);
        return;
      }
      this.requiredType && (d.every((s) => s.type === this.requiredType) || alert("We did not detect a valid file type - this might be safe to ignore")), this.files.length = 0;
      for (let s = 0; s < d.length; s++) {
        const n = d[s];
        let u;
        try {
          u = await this.readFileAsync(n);
        } catch (H) {
          console.error(H), alert(`Error reading file ${s + 1}`);
          return;
        }
        const g = {
          data: u,
          name: n.name
        };
        this.files.push(g);
        const D = s / d.length * 100;
        this.loadingProgress = D;
      }
      this.$emit("drop", structuredClone(this.files)), this.files.length = 0;
    },
    eventHandler(r) {
      this.dropClass = (r == null ? void 0 : r.type) ?? null, r.preventDefault();
    }
  }
};
function ze(r, d, s, n, u, g) {
  return ke(), Ce("div", {
    id: "drop",
    class: Se({ thinking: s.thinking, [u.dropClass]: !0 }),
    onDrop: d[0] || (d[0] = Ie((...D) => g.onDrop && g.onDrop(...D), ["prevent"]))
  }, [
    Oe("div", null, Re(s.thinking ? "Loading, please wait..." : s.label), 1)
  ], 34);
}
const je = /* @__PURE__ */ be(Pe, [["render", ze]]);
var we = { exports: {} };
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
(function(r, d) {
  (function(s, n) {
    r.exports = n();
  })(Fe, function s() {
    var n = typeof self < "u" ? self : typeof window < "u" ? window : n !== void 0 ? n : {}, u = !n.document && !!n.postMessage, g = n.IS_PAPA_WORKER || !1, D = {}, H = 0, m = { parse: function(t, e) {
      var i = (e = e || {}).dynamicTyping || !1;
      if (b(i) && (e.dynamicTypingFunction = i, i = {}), e.dynamicTyping = i, e.transform = !!b(e.transform) && e.transform, e.worker && m.WORKERS_SUPPORTED) {
        var a = function() {
          if (!m.WORKERS_SUPPORTED) return !1;
          var p = (M = n.URL || n.webkitURL || null, O = s.toString(), m.BLOB_URL || (m.BLOB_URL = M.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", O, ")();"], { type: "text/javascript" })))), _ = new n.Worker(p), M, O;
          return _.onmessage = xe, _.id = H++, D[_.id] = _;
        }();
        return a.userStep = e.step, a.userChunk = e.chunk, a.userComplete = e.complete, a.userError = e.error, e.step = b(e.step), e.chunk = b(e.chunk), e.complete = b(e.complete), e.error = b(e.error), delete e.worker, void a.postMessage({ input: t, config: e, workerId: a.id });
      }
      var l = null;
      return m.NODE_STREAM_INPUT, typeof t == "string" ? (t = function(p) {
        return p.charCodeAt(0) === 65279 ? p.slice(1) : p;
      }(t), l = e.download ? new oe(e) : new se(e)) : t.readable === !0 && b(t.read) && b(t.on) ? l = new le(e) : (n.File && t instanceof File || t instanceof Object) && (l = new ue(e)), l.stream(t);
    }, unparse: function(t, e) {
      var i = !1, a = !0, l = ",", p = `\r
`, _ = '"', M = _ + _, O = !1, h = null, S = !1;
      (function() {
        if (typeof e == "object") {
          if (typeof e.delimiter != "string" || m.BAD_DELIMITERS.filter(function(o) {
            return e.delimiter.indexOf(o) !== -1;
          }).length || (l = e.delimiter), (typeof e.quotes == "boolean" || typeof e.quotes == "function" || Array.isArray(e.quotes)) && (i = e.quotes), typeof e.skipEmptyLines != "boolean" && typeof e.skipEmptyLines != "string" || (O = e.skipEmptyLines), typeof e.newline == "string" && (p = e.newline), typeof e.quoteChar == "string" && (_ = e.quoteChar), typeof e.header == "boolean" && (a = e.header), Array.isArray(e.columns)) {
            if (e.columns.length === 0) throw new Error("Option columns is empty");
            h = e.columns;
          }
          e.escapeChar !== void 0 && (M = e.escapeChar + _), (typeof e.escapeFormulae == "boolean" || e.escapeFormulae instanceof RegExp) && (S = e.escapeFormulae instanceof RegExp ? e.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      })();
      var f = new RegExp(ae(_), "g");
      if (typeof t == "string" && (t = JSON.parse(t)), Array.isArray(t)) {
        if (!t.length || Array.isArray(t[0])) return V(null, t, O);
        if (typeof t[0] == "object") return V(h || Object.keys(t[0]), t, O);
      } else if (typeof t == "object") return typeof t.data == "string" && (t.data = JSON.parse(t.data)), Array.isArray(t.data) && (t.fields || (t.fields = t.meta && t.meta.fields || h), t.fields || (t.fields = Array.isArray(t.data[0]) ? t.fields : typeof t.data[0] == "object" ? Object.keys(t.data[0]) : []), Array.isArray(t.data[0]) || typeof t.data[0] == "object" || (t.data = [t.data])), V(t.fields || [], t.data || [], O);
      throw new Error("Unable to serialize unrecognized input");
      function V(o, w, z) {
        var R = "";
        typeof o == "string" && (o = JSON.parse(o)), typeof w == "string" && (w = JSON.parse(w));
        var q = Array.isArray(o) && 0 < o.length, L = !Array.isArray(w[0]);
        if (q && a) {
          for (var A = 0; A < o.length; A++) 0 < A && (R += l), R += P(o[A], A);
          0 < w.length && (R += p);
        }
        for (var c = 0; c < w.length; c++) {
          var y = q ? o.length : w[c].length, E = !1, F = q ? Object.keys(w[c]).length === 0 : w[c].length === 0;
          if (z && !q && (E = z === "greedy" ? w[c].join("").trim() === "" : w[c].length === 1 && w[c][0].length === 0), z === "greedy" && q) {
            for (var k = [], j = 0; j < y; j++) {
              var I = L ? o[j] : j;
              k.push(w[c][I]);
            }
            E = k.join("").trim() === "";
          }
          if (!E) {
            for (var C = 0; C < y; C++) {
              0 < C && !F && (R += l);
              var $ = q && L ? o[C] : C;
              R += P(w[c][$], C);
            }
            c < w.length - 1 && (!z || 0 < y && !F) && (R += p);
          }
        }
        return R;
      }
      function P(o, w) {
        if (o == null) return "";
        if (o.constructor === Date) return JSON.stringify(o).slice(1, 25);
        var z = !1;
        S && typeof o == "string" && S.test(o) && (o = "'" + o, z = !0);
        var R = o.toString().replace(f, M);
        return (z = z || i === !0 || typeof i == "function" && i(o, w) || Array.isArray(i) && i[w] || function(q, L) {
          for (var A = 0; A < L.length; A++) if (-1 < q.indexOf(L[A])) return !0;
          return !1;
        }(R, m.BAD_DELIMITERS) || -1 < R.indexOf(l) || R.charAt(0) === " " || R.charAt(R.length - 1) === " ") ? _ + R + _ : R;
      }
    } };
    if (m.RECORD_SEP = "", m.UNIT_SEP = "", m.BYTE_ORDER_MARK = "\uFEFF", m.BAD_DELIMITERS = ["\r", `
`, '"', m.BYTE_ORDER_MARK], m.WORKERS_SUPPORTED = !u && !!n.Worker, m.NODE_STREAM_INPUT = 1, m.LocalChunkSize = 10485760, m.RemoteChunkSize = 5242880, m.DefaultDelimiter = ",", m.Parser = de, m.ParserHandle = me, m.NetworkStreamer = oe, m.FileStreamer = ue, m.StringStreamer = se, m.ReadableStreamStreamer = le, n.jQuery) {
      var ne = n.jQuery;
      ne.fn.parse = function(t) {
        var e = t.config || {}, i = [];
        return this.each(function(p) {
          if (!(ne(this).prop("tagName").toUpperCase() === "INPUT" && ne(this).attr("type").toLowerCase() === "file" && n.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var _ = 0; _ < this.files.length; _++) i.push({ file: this.files[_], inputElem: this, instanceConfig: ne.extend({}, e) });
        }), a(), this;
        function a() {
          if (i.length !== 0) {
            var p, _, M, O, h = i[0];
            if (b(t.before)) {
              var S = t.before(h.file, h.inputElem);
              if (typeof S == "object") {
                if (S.action === "abort") return p = "AbortError", _ = h.file, M = h.inputElem, O = S.reason, void (b(t.error) && t.error({ name: p }, _, M, O));
                if (S.action === "skip") return void l();
                typeof S.config == "object" && (h.instanceConfig = ne.extend(h.instanceConfig, S.config));
              } else if (S === "skip") return void l();
            }
            var f = h.instanceConfig.complete;
            h.instanceConfig.complete = function(V) {
              b(f) && f(V, h.file, h.inputElem), l();
            }, m.parse(h.file, h.instanceConfig);
          } else b(t.complete) && t.complete();
        }
        function l() {
          i.splice(0, 1), a();
        }
      };
    }
    function Q(t) {
      this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(e) {
        var i = ce(e);
        i.chunkSize = parseInt(i.chunkSize), e.step || e.chunk || (i.chunkSize = null), this._handle = new me(i), (this._handle.streamer = this)._config = i;
      }).call(this, t), this.parseChunk = function(e, i) {
        if (this.isFirstChunk && b(this._config.beforeFirstChunk)) {
          var a = this._config.beforeFirstChunk(e);
          a !== void 0 && (e = a);
        }
        this.isFirstChunk = !1, this._halted = !1;
        var l = this._partialLine + e;
        this._partialLine = "";
        var p = this._handle.parse(l, this._baseIndex, !this._finished);
        if (!this._handle.paused() && !this._handle.aborted()) {
          var _ = p.meta.cursor;
          this._finished || (this._partialLine = l.substring(_ - this._baseIndex), this._baseIndex = _), p && p.data && (this._rowCount += p.data.length);
          var M = this._finished || this._config.preview && this._rowCount >= this._config.preview;
          if (g) n.postMessage({ results: p, workerId: m.WORKER_ID, finished: M });
          else if (b(this._config.chunk) && !i) {
            if (this._config.chunk(p, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
            p = void 0, this._completeResults = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(p.data), this._completeResults.errors = this._completeResults.errors.concat(p.errors), this._completeResults.meta = p.meta), this._completed || !M || !b(this._config.complete) || p && p.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), M || p && p.meta.paused || this._nextChunk(), p;
        }
        this._halted = !0;
      }, this._sendError = function(e) {
        b(this._config.error) ? this._config.error(e) : g && this._config.error && n.postMessage({ workerId: m.WORKER_ID, error: e, finished: !1 });
      };
    }
    function oe(t) {
      var e;
      (t = t || {}).chunkSize || (t.chunkSize = m.RemoteChunkSize), Q.call(this, t), this._nextChunk = u ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(i) {
        this._input = i, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished) this._chunkLoaded();
        else {
          if (e = new XMLHttpRequest(), this._config.withCredentials && (e.withCredentials = this._config.withCredentials), u || (e.onload = Y(this._chunkLoaded, this), e.onerror = Y(this._chunkError, this)), e.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !u), this._config.downloadRequestHeaders) {
            var i = this._config.downloadRequestHeaders;
            for (var a in i) e.setRequestHeader(a, i[a]);
          }
          if (this._config.chunkSize) {
            var l = this._start + this._config.chunkSize - 1;
            e.setRequestHeader("Range", "bytes=" + this._start + "-" + l);
          }
          try {
            e.send(this._config.downloadRequestBody);
          } catch (p) {
            this._chunkError(p.message);
          }
          u && e.status === 0 && this._chunkError();
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
      this.stream = function(l) {
        this._input = l, i = l.slice || l.webkitSlice || l.mozSlice, a ? ((e = new FileReader()).onload = Y(this._chunkLoaded, this), e.onerror = Y(this._chunkError, this)) : e = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function() {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function() {
        var l = this._input;
        if (this._config.chunkSize) {
          var p = Math.min(this._start + this._config.chunkSize, this._input.size);
          l = i.call(l, this._start, p);
        }
        var _ = e.readAsText(l, this._config.encoding);
        a || this._chunkLoaded({ target: { result: _ } });
      }, this._chunkLoaded = function(l) {
        this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(l.target.result);
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
      }, this.stream = function(l) {
        this._input = l, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
      }, this._checkIsFinished = function() {
        a && e.length === 1 && (this._finished = !0);
      }, this._nextChunk = function() {
        this._checkIsFinished(), e.length ? this.parseChunk(e.shift()) : i = !0;
      }, this._streamData = Y(function(l) {
        try {
          e.push(typeof l == "string" ? l : l.toString(this._config.encoding)), i && (i = !1, this._checkIsFinished(), this.parseChunk(e.shift()));
        } catch (p) {
          this._streamError(p);
        }
      }, this), this._streamError = Y(function(l) {
        this._streamCleanUp(), this._sendError(l);
      }, this), this._streamEnd = Y(function() {
        this._streamCleanUp(), a = !0, this._streamData("");
      }, this), this._streamCleanUp = Y(function() {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function me(t) {
      var e, i, a, l = Math.pow(2, 53), p = -l, _ = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, M = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, O = this, h = 0, S = 0, f = !1, V = !1, P = [], o = { data: [], errors: [], meta: {} };
      if (b(t.step)) {
        var w = t.step;
        t.step = function(c) {
          if (o = c, q()) R();
          else {
            if (R(), o.data.length === 0) return;
            h += c.data.length, t.preview && h > t.preview ? i.abort() : (o.data = o.data[0], w(o, O));
          }
        };
      }
      function z(c) {
        return t.skipEmptyLines === "greedy" ? c.join("").trim() === "" : c.length === 1 && c[0].length === 0;
      }
      function R() {
        return o && a && (A("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + m.DefaultDelimiter + "'"), a = !1), t.skipEmptyLines && (o.data = o.data.filter(function(c) {
          return !z(c);
        })), q() && function() {
          if (!o) return;
          function c(E, F) {
            b(t.transformHeader) && (E = t.transformHeader(E, F)), P.push(E);
          }
          if (Array.isArray(o.data[0])) {
            for (var y = 0; q() && y < o.data.length; y++) o.data[y].forEach(c);
            o.data.splice(0, 1);
          } else o.data.forEach(c);
        }(), function() {
          if (!o || !t.header && !t.dynamicTyping && !t.transform) return o;
          function c(E, F) {
            var k, j = t.header ? {} : [];
            for (k = 0; k < E.length; k++) {
              var I = k, C = E[k];
              t.header && (I = k >= P.length ? "__parsed_extra" : P[k]), t.transform && (C = t.transform(C, I)), C = L(I, C), I === "__parsed_extra" ? (j[I] = j[I] || [], j[I].push(C)) : j[I] = C;
            }
            return t.header && (k > P.length ? A("FieldMismatch", "TooManyFields", "Too many fields: expected " + P.length + " fields but parsed " + k, S + F) : k < P.length && A("FieldMismatch", "TooFewFields", "Too few fields: expected " + P.length + " fields but parsed " + k, S + F)), j;
          }
          var y = 1;
          return !o.data.length || Array.isArray(o.data[0]) ? (o.data = o.data.map(c), y = o.data.length) : o.data = c(o.data, 0), t.header && o.meta && (o.meta.fields = P), S += y, o;
        }();
      }
      function q() {
        return t.header && P.length === 0;
      }
      function L(c, y) {
        return E = c, t.dynamicTypingFunction && t.dynamicTyping[E] === void 0 && (t.dynamicTyping[E] = t.dynamicTypingFunction(E)), (t.dynamicTyping[E] || t.dynamicTyping) === !0 ? y === "true" || y === "TRUE" || y !== "false" && y !== "FALSE" && (function(F) {
          if (_.test(F)) {
            var k = parseFloat(F);
            if (p < k && k < l) return !0;
          }
          return !1;
        }(y) ? parseFloat(y) : M.test(y) ? new Date(y) : y === "" ? null : y) : y;
        var E;
      }
      function A(c, y, E, F) {
        var k = { type: c, code: y, message: E };
        F !== void 0 && (k.row = F), o.errors.push(k);
      }
      this.parse = function(c, y, E) {
        var F = t.quoteChar || '"';
        if (t.newline || (t.newline = function(I, C) {
          I = I.substring(0, 1048576);
          var $ = new RegExp(ae(C) + "([^]*?)" + ae(C), "gm"), B = (I = I.replace($, "")).split("\r"), K = I.split(`
`), J = 1 < K.length && K[0].length < B[0].length;
          if (B.length === 1 || J) return `
`;
          for (var U = 0, x = 0; x < B.length; x++) B[x][0] === `
` && U++;
          return U >= B.length / 2 ? `\r
` : "\r";
        }(c, F)), a = !1, t.delimiter) b(t.delimiter) && (t.delimiter = t.delimiter(c), o.meta.delimiter = t.delimiter);
        else {
          var k = function(I, C, $, B, K) {
            var J, U, x, T;
            K = K || [",", "	", "|", ";", m.RECORD_SEP, m.UNIT_SEP];
            for (var te = 0; te < K.length; te++) {
              var v = K[te], re = 0, G = 0, ie = 0;
              x = void 0;
              for (var Z = new de({ comments: B, delimiter: v, newline: C, preview: 10 }).parse(I), X = 0; X < Z.data.length; X++) if ($ && z(Z.data[X])) ie++;
              else {
                var ee = Z.data[X].length;
                G += ee, x !== void 0 ? 0 < ee && (re += Math.abs(ee - x), x = ee) : x = ee;
              }
              0 < Z.data.length && (G /= Z.data.length - ie), (U === void 0 || re <= U) && (T === void 0 || T < G) && 1.99 < G && (U = re, J = v, T = G);
            }
            return { successful: !!(t.delimiter = J), bestDelimiter: J };
          }(c, t.newline, t.skipEmptyLines, t.comments, t.delimitersToGuess);
          k.successful ? t.delimiter = k.bestDelimiter : (a = !0, t.delimiter = m.DefaultDelimiter), o.meta.delimiter = t.delimiter;
        }
        var j = ce(t);
        return t.preview && t.header && j.preview++, e = c, i = new de(j), o = i.parse(e, y, E), R(), f ? { meta: { paused: !0 } } : o || { meta: { paused: !1 } };
      }, this.paused = function() {
        return f;
      }, this.pause = function() {
        f = !0, i.abort(), e = b(t.chunk) ? "" : e.substring(i.getCharIndex());
      }, this.resume = function() {
        O.streamer._halted ? (f = !1, O.streamer.parseChunk(e, !0)) : setTimeout(O.resume, 3);
      }, this.aborted = function() {
        return V;
      }, this.abort = function() {
        V = !0, i.abort(), o.meta.aborted = !0, b(t.complete) && t.complete(o), e = "";
      };
    }
    function ae(t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function de(t) {
      var e, i = (t = t || {}).delimiter, a = t.newline, l = t.comments, p = t.step, _ = t.preview, M = t.fastMode, O = e = t.quoteChar === void 0 || t.quoteChar === null ? '"' : t.quoteChar;
      if (t.escapeChar !== void 0 && (O = t.escapeChar), (typeof i != "string" || -1 < m.BAD_DELIMITERS.indexOf(i)) && (i = ","), l === i) throw new Error("Comment character same as delimiter");
      l === !0 ? l = "#" : (typeof l != "string" || -1 < m.BAD_DELIMITERS.indexOf(l)) && (l = !1), a !== `
` && a !== "\r" && a !== `\r
` && (a = `
`);
      var h = 0, S = !1;
      this.parse = function(f, V, P) {
        if (typeof f != "string") throw new Error("Input must be a string");
        var o = f.length, w = i.length, z = a.length, R = l.length, q = b(p), L = [], A = [], c = [], y = h = 0;
        if (!f) return N();
        if (t.header && !V) {
          var E = f.split(a)[0].split(i), F = [], k = {}, j = !1;
          for (var I in E) {
            var C = E[I];
            b(t.transformHeader) && (C = t.transformHeader(C, I));
            var $ = C, B = k[C] || 0;
            for (0 < B && (j = !0, $ = C + "_" + B), k[C] = B + 1; F.includes($); ) $ = $ + "_" + B;
            F.push($);
          }
          if (j) {
            var K = f.split(a);
            K[0] = F.join(i), f = K.join(a);
          }
        }
        if (M || M !== !1 && f.indexOf(e) === -1) {
          for (var J = f.split(a), U = 0; U < J.length; U++) {
            if (c = J[U], h += c.length, U !== J.length - 1) h += a.length;
            else if (P) return N();
            if (!l || c.substring(0, R) !== l) {
              if (q) {
                if (L = [], ie(c.split(i)), he(), S) return N();
              } else ie(c.split(i));
              if (_ && _ <= U) return L = L.slice(0, _), N(!0);
            }
          }
          return N();
        }
        for (var x = f.indexOf(i, h), T = f.indexOf(a, h), te = new RegExp(ae(O) + ae(e), "g"), v = f.indexOf(e, h); ; ) if (f[h] !== e) if (l && c.length === 0 && f.substring(h, h + R) === l) {
          if (T === -1) return N();
          h = T + z, T = f.indexOf(a, h), x = f.indexOf(i, h);
        } else if (x !== -1 && (x < T || T === -1)) c.push(f.substring(h, x)), h = x + w, x = f.indexOf(i, h);
        else {
          if (T === -1) break;
          if (c.push(f.substring(h, T)), ee(T + z), q && (he(), S)) return N();
          if (_ && L.length >= _) return N(!0);
        }
        else for (v = h, h++; ; ) {
          if ((v = f.indexOf(e, v + 1)) === -1) return P || A.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: L.length, index: h }), X();
          if (v === o - 1) return X(f.substring(h, v).replace(te, e));
          if (e !== O || f[v + 1] !== O) {
            if (e === O || v === 0 || f[v - 1] !== O) {
              x !== -1 && x < v + 1 && (x = f.indexOf(i, v + 1)), T !== -1 && T < v + 1 && (T = f.indexOf(a, v + 1));
              var re = Z(T === -1 ? x : Math.min(x, T));
              if (f.substr(v + 1 + re, w) === i) {
                c.push(f.substring(h, v).replace(te, e)), f[h = v + 1 + re + w] !== e && (v = f.indexOf(e, h)), x = f.indexOf(i, h), T = f.indexOf(a, h);
                break;
              }
              var G = Z(T);
              if (f.substring(v + 1 + G, v + 1 + G + z) === a) {
                if (c.push(f.substring(h, v).replace(te, e)), ee(v + 1 + G + z), x = f.indexOf(i, h), v = f.indexOf(e, h), q && (he(), S)) return N();
                if (_ && L.length >= _) return N(!0);
                break;
              }
              A.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: L.length, index: h }), v++;
            }
          } else v++;
        }
        return X();
        function ie(W) {
          L.push(W), y = h;
        }
        function Z(W) {
          var ye = 0;
          if (W !== -1) {
            var fe = f.substring(v + 1, W);
            fe && fe.trim() === "" && (ye = fe.length);
          }
          return ye;
        }
        function X(W) {
          return P || (W === void 0 && (W = f.substring(h)), c.push(W), h = o, ie(c), q && he()), N();
        }
        function ee(W) {
          h = W, ie(c), c = [], T = f.indexOf(a, h);
        }
        function N(W) {
          return { data: L, errors: A, meta: { delimiter: i, linebreak: a, aborted: S, truncated: !!W, cursor: y + (V || 0) } };
        }
        function he() {
          p(N()), L = [], A = [];
        }
      }, this.abort = function() {
        S = !0;
      }, this.getCharIndex = function() {
        return h;
      };
    }
    function xe(t) {
      var e = t.data, i = D[e.workerId], a = !1;
      if (e.error) i.userError(e.error, e.file);
      else if (e.results && e.results.data) {
        var l = { abort: function() {
          a = !0, ge(e.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: _e, resume: _e };
        if (b(i.userStep)) {
          for (var p = 0; p < e.results.data.length && (i.userStep({ data: e.results.data[p], errors: e.results.errors, meta: e.results.meta }, l), !a); p++) ;
          delete e.results;
        } else b(i.userChunk) && (i.userChunk(e.results, l, e.file), delete e.results);
      }
      e.finished && !a && ge(e.workerId, e.results);
    }
    function ge(t, e) {
      var i = D[t];
      b(i.userComplete) && i.userComplete(e), i.terminate(), delete D[t];
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
    function b(t) {
      return typeof t == "function";
    }
    return g && (n.onmessage = function(t) {
      var e = t.data;
      if (m.WORKER_ID === void 0 && e && (m.WORKER_ID = e.workerId), typeof e.input == "string") n.postMessage({ workerId: m.WORKER_ID, results: m.parse(e.input, e.config), finished: !0 });
      else if (n.File && e.input instanceof File || e.input instanceof Object) {
        var i = m.parse(e.input, e.config);
        i && n.postMessage({ workerId: m.WORKER_ID, results: i, finished: !0 });
      }
    }), (oe.prototype = Object.create(Q.prototype)).constructor = oe, (ue.prototype = Object.create(Q.prototype)).constructor = ue, (se.prototype = Object.create(se.prototype)).constructor = se, (le.prototype = Object.create(Q.prototype)).constructor = le, m;
  });
})(we);
var Be = we.exports;
const Ue = /* @__PURE__ */ Te(Be), Ee = {
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
    bandingChoices: {
      type: Object,
      default: () => {
      }
    },
    customFields: {
      type: Array,
      default: () => []
    }
  },
  emits: ["error", "import"],
  setup() {
    const { t: r, locale: d, fallbackLocale: s } = Le({
      locale: "en_US"
    });
    return {
      t: r,
      locale: d,
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
      return Object.values(this.itemValidation).some((r) => Object.values(r).some((d) => d === !1 && Object.keys(r).some((s) => this.partFields.includes(s))));
    },
    itemValidation() {
      const r = {};
      return this.items.forEach((d, s) => {
        r[s] = {};
        for (const [n, u] of Object.entries(d)) {
          if (!this.partFields.includes(n)) continue;
          const g = this.validate(n, u);
          (g === !0 || g === !1) && (r[s][n] = g);
        }
      }), r;
    },
    isSingleBandingChoice() {
      const r = Object.keys(this.bandingChoices);
      return r.length === 1 && this.bandingChoices[r[0]].length === 0;
    },
    customFieldLabels() {
      return this.customFields.map((r) => r.label);
    }
  },
  mounted() {
    if (this.locale = this.options.locale, this.bandingChoices) {
      if (this.isSingleBandingChoice) {
        this.bandingChoiceCombinations = /* @__PURE__ */ new Set(["1", "0"]);
        return;
      }
      const r = Object.keys(this.bandingChoices), d = [[]];
      r.forEach((n) => {
        const u = this.bandingChoices[n], g = [];
        d.forEach((D) => {
          u.forEach((H) => g.push([...D, H]));
        }), d.splice(
          0,
          d.length,
          ...g
        );
      });
      const s = /* @__PURE__ */ new Set();
      d.forEach((n) => s.add(n.join("|").toLowerCase())), this.bandingChoiceCombinations = s;
    }
  },
  methods: {
    parse(r) {
      var s;
      const d = (s = r == null ? void 0 : r[0]) == null ? void 0 : s.data;
      d && Ue.parse(d, {
        header: !1,
        dynamicTyping: !1,
        //parse numbers
        worker: !0,
        complete: (n) => this.process(n),
        error: () => this.$emit("error")
      });
    },
    process(r) {
      this.userRows = r, this.userRows = this.userRows.data.filter((d) => d.some((s) => s)), this.userHeaders = this.userRows[0], this.columnMap = {};
      for (let d = this.userHeaders.length; d--; ) {
        const s = this.userHeaders[d], n = this.predictHeadingType(s);
        n ? this.columnMap[d] = n : (this.columnMap[d] = null, this.customFieldLabels.includes(s) && (this.columnMap[d] = "customData." + this.customFields.find((u) => u.label === s).id));
      }
      this.processColumnMap(), this.userRows.shift(), this.populateColumnData(), this.importParts();
    },
    predictHeadingType(r) {
      const d = {
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
      }, s = Object.entries(d).reduce(
        (n, [u, g]) => (g.some((D) => r && r.toLowerCase() === D) && n.push(u), n),
        []
      );
      return s.length > 1 ? null : s[0];
    },
    processColumnMap() {
      this.showDataMismatch = !1, this.mappedHeaders = Object.values(this.columnMap).map((s) => !s || s === "N" ? null : this.partFields.includes(s) ? s : (this.showDataMismatch = !0, null));
      const d = this.mappedHeaders.filter((s, n) => this.mappedHeaders.indexOf(s) !== n).map((s) => this.mappedHeaders.reduce(
        (n, u, g) => (u && u === s && n.push(g), n),
        []
      ));
      this.duplicateIndexes = d;
    },
    stripSpacesAroundCommas(r) {
      return r && r.replace(/\s*,\s*/g, ",");
    },
    validate(r, d) {
      if (d === "???") return !0;
      function s(u) {
        return !u || (u = u.trim().toLowerCase(), u === "l" || u === "w");
      }
      const n = {
        banding: (u) => {
          if (u = this.stripSpacesAroundCommas(u), !u) return !0;
          const g = u.split(",");
          if (g.every((H) => this.isValidBandingCombination(H))) return !0;
          const D = g.filter((H) => !this.isValidBandingCombination(H));
          return console.log("The following banding choices are invalid", D), console.log("Valid choices..."), console.table(Array.from(this.bandingChoiceCombinations)), !1;
        },
        orientationLock: (u) => s(u)
      };
      return r in n ? n[r](d) : null;
    },
    parseItemValue(r, d) {
      const s = {
        bandingChoices: (n) => {
          if (n = this.stripSpacesAroundCommas(n), !n)
            return {
              y1: "",
              y2: "",
              x1: "",
              x2: ""
            };
          let u = n.split(",").map((g) => g.toLowerCase());
          if (this.isSingleBandingChoice) {
            const g = Object.keys(this.bandingChoices);
            return u = u.map((H) => H === "1" ? g[0] : ""), {
              y1: u[0] ? { [u[0]]: !0 } : null,
              y2: u[1] ? { [u[1]]: !0 } : null,
              x1: u[2] ? { [u[2]]: !0 } : null,
              x2: u[3] ? { [u[3]]: !0 } : null
            };
          } else {
            const g = {
              y1: {},
              y2: {},
              x1: {},
              x2: {}
            };
            return Object.entries(this.bandingChoices).forEach(([D], H) => {
              g.y1[D] = u[0].split("|")[H], g.y2[D] = u[1].split("|")[H], g.x1[D] = u[2].split("|")[H], g.x2[D] = u[3].split("|")[H];
            }), g;
          }
        }
      };
      if (r in s) return s[r](d);
    },
    populateColumnData() {
      const r = this.userRows.map((d) => {
        const s = {};
        return this.userHeaders.forEach((n, u) => {
          if (this.duplicateIndexes.flat().includes(u))
            return s[this.columnMap[u]] = "???";
          s[this.columnMap[u]] = d[u];
        }), s;
      });
      this.items = r;
    },
    transformCustomData(r) {
      let d = {};
      for (let s in r)
        if (s.startsWith("customData.")) {
          let n = s.slice(11);
          d[n] = r[s];
        }
      return d;
    },
    convertPartDataToInputData() {
      return this.items.map((r, d) => ({
        l: this.units === "decimal" ? pe(r.l) : r.l,
        w: this.units === "decimal" ? pe(r.w) : r.w,
        t: this.units === "decimal" ? pe(r.t) : r.t,
        q: r.q,
        orientationLock: r.orientationLock,
        //cater for Y/1 value
        name: r.name,
        material: r.material,
        bandingOptions: this.itemValidation[d].banding ? this.parseItemValue("bandingChoices", r.banding) : null,
        units: this.units,
        customData: this.transformCustomData(r)
      }));
    },
    importParts() {
      const r = this.convertPartDataToInputData();
      r != null && r.length && this.$emit("import", r);
    },
    isValidBandingCombination(r) {
      return this.bandingChoiceCombinations.has(r.toLowerCase());
    }
  }
}, Ne = { id: "import-file" };
function We(r, d, s, n, u, g) {
  const D = qe("Drop");
  return ke(), Ce("div", Ne, [
    He(D, {
      label: n.t("Drop CSV file here"),
      "required-type": "text/csv",
      onDrop: g.parse
    }, null, 8, ["label", "onDrop"])
  ]);
}
typeof ve == "function" && ve(Ee);
const $e = /* @__PURE__ */ be(Ee, [["render", We]]);
export {
  $e as default
};

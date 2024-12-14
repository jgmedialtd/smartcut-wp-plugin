import { _ as Oe, a as xe, d as Re, o as ye } from "./Launch-DODp9tWR.js";
import { m as De, j as we, k as Ce, t as Le, v as Te, p as Ae, S as Se, B as Ie, E as Fe, r as Z, C as ke, o as qe, I as Me, u as ze } from "./main-DMp66kT2.js";
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
    this.events.forEach((q) => {
      this.$el.addEventListener(q, this.eventHandler);
    });
  },
  unmounted() {
    this.events.forEach((q) => {
      this.$el.removeEventListener(q, this.eventHandler);
    });
  },
  methods: {
    readFileAsync(q) {
      return new Promise((P, _) => {
        const g = new FileReader();
        g.onloadend = () => {
          P(g.result);
        }, g.onerror = _, g.readAsText(q);
      });
    },
    async onDrop(q) {
      const P = [...q.dataTransfer.files];
      if (this.maxFiles && P.length > this.maxFiles) {
        alert(`You can only drop ${this.maxFiles} file${this.maxFiles > 1 ? "s" : ""} at a time`);
        return;
      }
      this.requiredType && (P.every((_) => _.type === this.requiredType) || alert("We did not detect a valid file type - this might be safe to ignore")), this.files.length = 0;
      for (let _ = 0; _ < P.length; _++) {
        const g = P[_];
        let x;
        try {
          x = await this.readFileAsync(g);
        } catch (X) {
          console.error(X), alert(`Error reading file ${_ + 1}`);
          return;
        }
        const B = {
          data: x,
          name: g.name
        };
        this.files.push(B);
        const j = _ / P.length * 100;
        this.loadingProgress = j;
      }
      this.$emit("drop", structuredClone(this.files)), this.files.length = 0;
    },
    eventHandler(q) {
      this.dropClass = (q == null ? void 0 : q.type) ?? null, q.preventDefault();
    }
  }
};
function je(q, P, _, g, x, B) {
  return we(), Ce("div", {
    id: "drop",
    class: Ae({ thinking: _.thinking, [x.dropClass]: !0 }),
    onDrop: P[0] || (P[0] = Se((...j) => B.onDrop && B.onDrop(...j), ["prevent"]))
  }, [
    Le("div", null, Te(_.thinking ? "Loading, please wait..." : _.label), 1)
  ], 34);
}
const Ue = /* @__PURE__ */ Oe(Pe, [["render", je]]);
var Ee = { exports: {} };
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
(function(q, P) {
  (function(_, g) {
    q.exports = g();
  })(xe, function _() {
    var g = typeof self < "u" ? self : typeof window < "u" ? window : g !== void 0 ? g : {}, x = !g.document && !!g.postMessage, B = g.IS_PAPA_WORKER || !1, j = {}, X = 0, c = { parse: function(t, e) {
      var r = (e = e || {}).dynamicTyping || !1;
      if (b(r) && (e.dynamicTypingFunction = r, r = {}), e.dynamicTyping = r, e.transform = !!b(e.transform) && e.transform, e.worker && c.WORKERS_SUPPORTED) {
        var u = function() {
          if (!c.WORKERS_SUPPORTED) return !1;
          var f = (i = g.URL || g.webkitURL || null, a = _.toString(), c.BLOB_URL || (c.BLOB_URL = i.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", a, ")();"], { type: "text/javascript" })))), p = new g.Worker(f), i, a;
          return p.onmessage = _e, p.id = X++, j[p.id] = p;
        }();
        return u.userStep = e.step, u.userChunk = e.chunk, u.userComplete = e.complete, u.userError = e.error, e.step = b(e.step), e.chunk = b(e.chunk), e.complete = b(e.complete), e.error = b(e.error), delete e.worker, void u.postMessage({ input: t, config: e, workerId: u.id });
      }
      var l = null;
      return c.NODE_STREAM_INPUT, typeof t == "string" ? (t = function(f) {
        return f.charCodeAt(0) === 65279 ? f.slice(1) : f;
      }(t), l = e.download ? new ie(e) : new ee(e)) : t.readable === !0 && b(t.read) && b(t.on) ? l = new ae(e) : (g.File && t instanceof File || t instanceof Object) && (l = new se(e)), l.stream(t);
    }, unparse: function(t, e) {
      var r = !1, u = !0, l = ",", f = `\r
`, p = '"', i = p + p, a = !1, n = null, h = !1;
      (function() {
        if (typeof e == "object") {
          if (typeof e.delimiter != "string" || c.BAD_DELIMITERS.filter(function(o) {
            return e.delimiter.indexOf(o) !== -1;
          }).length || (l = e.delimiter), (typeof e.quotes == "boolean" || typeof e.quotes == "function" || Array.isArray(e.quotes)) && (r = e.quotes), typeof e.skipEmptyLines != "boolean" && typeof e.skipEmptyLines != "string" || (a = e.skipEmptyLines), typeof e.newline == "string" && (f = e.newline), typeof e.quoteChar == "string" && (p = e.quoteChar), typeof e.header == "boolean" && (u = e.header), Array.isArray(e.columns)) {
            if (e.columns.length === 0) throw new Error("Option columns is empty");
            n = e.columns;
          }
          e.escapeChar !== void 0 && (i = e.escapeChar + p), (typeof e.escapeFormulae == "boolean" || e.escapeFormulae instanceof RegExp) && (h = e.escapeFormulae instanceof RegExp ? e.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      })();
      var s = new RegExp(oe(p), "g");
      if (typeof t == "string" && (t = JSON.parse(t)), Array.isArray(t)) {
        if (!t.length || Array.isArray(t[0])) return m(null, t, a);
        if (typeof t[0] == "object") return m(n || Object.keys(t[0]), t, a);
      } else if (typeof t == "object") return typeof t.data == "string" && (t.data = JSON.parse(t.data)), Array.isArray(t.data) && (t.fields || (t.fields = t.meta && t.meta.fields || n), t.fields || (t.fields = Array.isArray(t.data[0]) ? t.fields : typeof t.data[0] == "object" ? Object.keys(t.data[0]) : []), Array.isArray(t.data[0]) || typeof t.data[0] == "object" || (t.data = [t.data])), m(t.fields || [], t.data || [], a);
      throw new Error("Unable to serialize unrecognized input");
      function m(o, k, L) {
        var E = "";
        typeof o == "string" && (o = JSON.parse(o)), typeof k == "string" && (k = JSON.parse(k));
        var M = Array.isArray(o) && 0 < o.length, I = !Array.isArray(k[0]);
        if (M && u) {
          for (var F = 0; F < o.length; F++) 0 < F && (E += l), E += v(o[F], F);
          0 < k.length && (E += f);
        }
        for (var d = 0; d < k.length; d++) {
          var y = M ? o.length : k[d].length, R = !1, S = M ? Object.keys(k[d]).length === 0 : k[d].length === 0;
          if (L && !M && (R = L === "greedy" ? k[d].join("").trim() === "" : k[d].length === 1 && k[d][0].length === 0), L === "greedy" && M) {
            for (var C = [], z = 0; z < y; z++) {
              var T = I ? o[z] : z;
              C.push(k[d][T]);
            }
            R = C.join("").trim() === "";
          }
          if (!R) {
            for (var O = 0; O < y; O++) {
              0 < O && !S && (E += l);
              var V = M && I ? o[O] : O;
              E += v(k[d][V], O);
            }
            d < k.length - 1 && (!L || 0 < y && !S) && (E += f);
          }
        }
        return E;
      }
      function v(o, k) {
        if (o == null) return "";
        if (o.constructor === Date) return JSON.stringify(o).slice(1, 25);
        var L = !1;
        h && typeof o == "string" && h.test(o) && (o = "'" + o, L = !0);
        var E = o.toString().replace(s, i);
        return (L = L || r === !0 || typeof r == "function" && r(o, k) || Array.isArray(r) && r[k] || function(M, I) {
          for (var F = 0; F < I.length; F++) if (-1 < M.indexOf(I[F])) return !0;
          return !1;
        }(E, c.BAD_DELIMITERS) || -1 < E.indexOf(l) || E.charAt(0) === " " || E.charAt(E.length - 1) === " ") ? p + E + p : E;
      }
    } };
    if (c.RECORD_SEP = "", c.UNIT_SEP = "", c.BYTE_ORDER_MARK = "\uFEFF", c.BAD_DELIMITERS = ["\r", `
`, '"', c.BYTE_ORDER_MARK], c.WORKERS_SUPPORTED = !x && !!g.Worker, c.NODE_STREAM_INPUT = 1, c.LocalChunkSize = 10485760, c.RemoteChunkSize = 5242880, c.DefaultDelimiter = ",", c.Parser = he, c.ParserHandle = fe, c.NetworkStreamer = ie, c.FileStreamer = se, c.StringStreamer = ee, c.ReadableStreamStreamer = ae, g.jQuery) {
      var U = g.jQuery;
      U.fn.parse = function(t) {
        var e = t.config || {}, r = [];
        return this.each(function(f) {
          if (!(U(this).prop("tagName").toUpperCase() === "INPUT" && U(this).attr("type").toLowerCase() === "file" && g.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var p = 0; p < this.files.length; p++) r.push({ file: this.files[p], inputElem: this, instanceConfig: U.extend({}, e) });
        }), u(), this;
        function u() {
          if (r.length !== 0) {
            var f, p, i, a, n = r[0];
            if (b(t.before)) {
              var h = t.before(n.file, n.inputElem);
              if (typeof h == "object") {
                if (h.action === "abort") return f = "AbortError", p = n.file, i = n.inputElem, a = h.reason, void (b(t.error) && t.error({ name: f }, p, i, a));
                if (h.action === "skip") return void l();
                typeof h.config == "object" && (n.instanceConfig = U.extend(n.instanceConfig, h.config));
              } else if (h === "skip") return void l();
            }
            var s = n.instanceConfig.complete;
            n.instanceConfig.complete = function(m) {
              b(s) && s(m, n.file, n.inputElem), l();
            }, c.parse(n.file, n.instanceConfig);
          } else b(t.complete) && t.complete();
        }
        function l() {
          r.splice(0, 1), u();
        }
      };
    }
    function N(t) {
      this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(e) {
        var r = de(e);
        r.chunkSize = parseInt(r.chunkSize), e.step || e.chunk || (r.chunkSize = null), this._handle = new fe(r), (this._handle.streamer = this)._config = r;
      }).call(this, t), this.parseChunk = function(e, r) {
        if (this.isFirstChunk && b(this._config.beforeFirstChunk)) {
          var u = this._config.beforeFirstChunk(e);
          u !== void 0 && (e = u);
        }
        this.isFirstChunk = !1, this._halted = !1;
        var l = this._partialLine + e;
        this._partialLine = "";
        var f = this._handle.parse(l, this._baseIndex, !this._finished);
        if (!this._handle.paused() && !this._handle.aborted()) {
          var p = f.meta.cursor;
          this._finished || (this._partialLine = l.substring(p - this._baseIndex), this._baseIndex = p), f && f.data && (this._rowCount += f.data.length);
          var i = this._finished || this._config.preview && this._rowCount >= this._config.preview;
          if (B) g.postMessage({ results: f, workerId: c.WORKER_ID, finished: i });
          else if (b(this._config.chunk) && !r) {
            if (this._config.chunk(f, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
            f = void 0, this._completeResults = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(f.data), this._completeResults.errors = this._completeResults.errors.concat(f.errors), this._completeResults.meta = f.meta), this._completed || !i || !b(this._config.complete) || f && f.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), i || f && f.meta.paused || this._nextChunk(), f;
        }
        this._halted = !0;
      }, this._sendError = function(e) {
        b(this._config.error) ? this._config.error(e) : B && this._config.error && g.postMessage({ workerId: c.WORKER_ID, error: e, finished: !1 });
      };
    }
    function ie(t) {
      var e;
      (t = t || {}).chunkSize || (t.chunkSize = c.RemoteChunkSize), N.call(this, t), this._nextChunk = x ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(r) {
        this._input = r, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished) this._chunkLoaded();
        else {
          if (e = new XMLHttpRequest(), this._config.withCredentials && (e.withCredentials = this._config.withCredentials), x || (e.onload = Q(this._chunkLoaded, this), e.onerror = Q(this._chunkError, this)), e.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !x), this._config.downloadRequestHeaders) {
            var r = this._config.downloadRequestHeaders;
            for (var u in r) e.setRequestHeader(u, r[u]);
          }
          if (this._config.chunkSize) {
            var l = this._start + this._config.chunkSize - 1;
            e.setRequestHeader("Range", "bytes=" + this._start + "-" + l);
          }
          try {
            e.send(this._config.downloadRequestBody);
          } catch (f) {
            this._chunkError(f.message);
          }
          x && e.status === 0 && this._chunkError();
        }
      }, this._chunkLoaded = function() {
        e.readyState === 4 && (e.status < 200 || 400 <= e.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : e.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(r) {
          var u = r.getResponseHeader("Content-Range");
          return u === null ? -1 : parseInt(u.substring(u.lastIndexOf("/") + 1));
        }(e), this.parseChunk(e.responseText)));
      }, this._chunkError = function(r) {
        var u = e.statusText || r;
        this._sendError(new Error(u));
      };
    }
    function se(t) {
      var e, r;
      (t = t || {}).chunkSize || (t.chunkSize = c.LocalChunkSize), N.call(this, t);
      var u = typeof FileReader < "u";
      this.stream = function(l) {
        this._input = l, r = l.slice || l.webkitSlice || l.mozSlice, u ? ((e = new FileReader()).onload = Q(this._chunkLoaded, this), e.onerror = Q(this._chunkError, this)) : e = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function() {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function() {
        var l = this._input;
        if (this._config.chunkSize) {
          var f = Math.min(this._start + this._config.chunkSize, this._input.size);
          l = r.call(l, this._start, f);
        }
        var p = e.readAsText(l, this._config.encoding);
        u || this._chunkLoaded({ target: { result: p } });
      }, this._chunkLoaded = function(l) {
        this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(l.target.result);
      }, this._chunkError = function() {
        this._sendError(e.error);
      };
    }
    function ee(t) {
      var e;
      N.call(this, t = t || {}), this.stream = function(r) {
        return e = r, this._nextChunk();
      }, this._nextChunk = function() {
        if (!this._finished) {
          var r, u = this._config.chunkSize;
          return u ? (r = e.substring(0, u), e = e.substring(u)) : (r = e, e = ""), this._finished = !e, this.parseChunk(r);
        }
      };
    }
    function ae(t) {
      N.call(this, t = t || {});
      var e = [], r = !0, u = !1;
      this.pause = function() {
        N.prototype.pause.apply(this, arguments), this._input.pause();
      }, this.resume = function() {
        N.prototype.resume.apply(this, arguments), this._input.resume();
      }, this.stream = function(l) {
        this._input = l, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
      }, this._checkIsFinished = function() {
        u && e.length === 1 && (this._finished = !0);
      }, this._nextChunk = function() {
        this._checkIsFinished(), e.length ? this.parseChunk(e.shift()) : r = !0;
      }, this._streamData = Q(function(l) {
        try {
          e.push(typeof l == "string" ? l : l.toString(this._config.encoding)), r && (r = !1, this._checkIsFinished(), this.parseChunk(e.shift()));
        } catch (f) {
          this._streamError(f);
        }
      }, this), this._streamError = Q(function(l) {
        this._streamCleanUp(), this._sendError(l);
      }, this), this._streamEnd = Q(function() {
        this._streamCleanUp(), u = !0, this._streamData("");
      }, this), this._streamCleanUp = Q(function() {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function fe(t) {
      var e, r, u, l = Math.pow(2, 53), f = -l, p = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, i = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, a = this, n = 0, h = 0, s = !1, m = !1, v = [], o = { data: [], errors: [], meta: {} };
      if (b(t.step)) {
        var k = t.step;
        t.step = function(d) {
          if (o = d, M()) E();
          else {
            if (E(), o.data.length === 0) return;
            n += d.data.length, t.preview && n > t.preview ? r.abort() : (o.data = o.data[0], k(o, a));
          }
        };
      }
      function L(d) {
        return t.skipEmptyLines === "greedy" ? d.join("").trim() === "" : d.length === 1 && d[0].length === 0;
      }
      function E() {
        return o && u && (F("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + c.DefaultDelimiter + "'"), u = !1), t.skipEmptyLines && (o.data = o.data.filter(function(d) {
          return !L(d);
        })), M() && function() {
          if (!o) return;
          function d(R, S) {
            b(t.transformHeader) && (R = t.transformHeader(R, S)), v.push(R);
          }
          if (Array.isArray(o.data[0])) {
            for (var y = 0; M() && y < o.data.length; y++) o.data[y].forEach(d);
            o.data.splice(0, 1);
          } else o.data.forEach(d);
        }(), function() {
          if (!o || !t.header && !t.dynamicTyping && !t.transform) return o;
          function d(R, S) {
            var C, z = t.header ? {} : [];
            for (C = 0; C < R.length; C++) {
              var T = C, O = R[C];
              t.header && (T = C >= v.length ? "__parsed_extra" : v[C]), t.transform && (O = t.transform(O, T)), O = I(T, O), T === "__parsed_extra" ? (z[T] = z[T] || [], z[T].push(O)) : z[T] = O;
            }
            return t.header && (C > v.length ? F("FieldMismatch", "TooManyFields", "Too many fields: expected " + v.length + " fields but parsed " + C, h + S) : C < v.length && F("FieldMismatch", "TooFewFields", "Too few fields: expected " + v.length + " fields but parsed " + C, h + S)), z;
          }
          var y = 1;
          return !o.data.length || Array.isArray(o.data[0]) ? (o.data = o.data.map(d), y = o.data.length) : o.data = d(o.data, 0), t.header && o.meta && (o.meta.fields = v), h += y, o;
        }();
      }
      function M() {
        return t.header && v.length === 0;
      }
      function I(d, y) {
        return R = d, t.dynamicTypingFunction && t.dynamicTyping[R] === void 0 && (t.dynamicTyping[R] = t.dynamicTypingFunction(R)), (t.dynamicTyping[R] || t.dynamicTyping) === !0 ? y === "true" || y === "TRUE" || y !== "false" && y !== "FALSE" && (function(S) {
          if (p.test(S)) {
            var C = parseFloat(S);
            if (f < C && C < l) return !0;
          }
          return !1;
        }(y) ? parseFloat(y) : i.test(y) ? new Date(y) : y === "" ? null : y) : y;
        var R;
      }
      function F(d, y, R, S) {
        var C = { type: d, code: y, message: R };
        S !== void 0 && (C.row = S), o.errors.push(C);
      }
      this.parse = function(d, y, R) {
        var S = t.quoteChar || '"';
        if (t.newline || (t.newline = function(T, O) {
          T = T.substring(0, 1048576);
          var V = new RegExp(oe(O) + "([^]*?)" + oe(O), "gm"), H = (T = T.replace(V, "")).split("\r"), J = T.split(`
`), G = 1 < J.length && J[0].length < H[0].length;
          if (H.length === 1 || G) return `
`;
          for (var K = 0, D = 0; D < H.length; D++) H[D][0] === `
` && K++;
          return K >= H.length / 2 ? `\r
` : "\r";
        }(d, S)), u = !1, t.delimiter) b(t.delimiter) && (t.delimiter = t.delimiter(d), o.meta.delimiter = t.delimiter);
        else {
          var C = function(T, O, V, H, J) {
            var G, K, D, A;
            J = J || [",", "	", "|", ";", c.RECORD_SEP, c.UNIT_SEP];
            for (var ue = 0; ue < J.length; ue++) {
              var w = J[ue], ce = 0, Y = 0, le = 0;
              D = void 0;
              for (var te = new he({ comments: H, delimiter: w, newline: O, preview: 10 }).parse(T), ne = 0; ne < te.data.length; ne++) if (V && L(te.data[ne])) le++;
              else {
                var re = te.data[ne].length;
                Y += re, D !== void 0 ? 0 < re && (ce += Math.abs(re - D), D = re) : D = re;
              }
              0 < te.data.length && (Y /= te.data.length - le), (K === void 0 || ce <= K) && (A === void 0 || A < Y) && 1.99 < Y && (K = ce, G = w, A = Y);
            }
            return { successful: !!(t.delimiter = G), bestDelimiter: G };
          }(d, t.newline, t.skipEmptyLines, t.comments, t.delimitersToGuess);
          C.successful ? t.delimiter = C.bestDelimiter : (u = !0, t.delimiter = c.DefaultDelimiter), o.meta.delimiter = t.delimiter;
        }
        var z = de(t);
        return t.preview && t.header && z.preview++, e = d, r = new he(z), o = r.parse(e, y, R), E(), s ? { meta: { paused: !0 } } : o || { meta: { paused: !1 } };
      }, this.paused = function() {
        return s;
      }, this.pause = function() {
        s = !0, r.abort(), e = b(t.chunk) ? "" : e.substring(r.getCharIndex());
      }, this.resume = function() {
        a.streamer._halted ? (s = !1, a.streamer.parseChunk(e, !0)) : setTimeout(a.resume, 3);
      }, this.aborted = function() {
        return m;
      }, this.abort = function() {
        m = !0, r.abort(), o.meta.aborted = !0, b(t.complete) && t.complete(o), e = "";
      };
    }
    function oe(t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function he(t) {
      var e, r = (t = t || {}).delimiter, u = t.newline, l = t.comments, f = t.step, p = t.preview, i = t.fastMode, a = e = t.quoteChar === void 0 || t.quoteChar === null ? '"' : t.quoteChar;
      if (t.escapeChar !== void 0 && (a = t.escapeChar), (typeof r != "string" || -1 < c.BAD_DELIMITERS.indexOf(r)) && (r = ","), l === r) throw new Error("Comment character same as delimiter");
      l === !0 ? l = "#" : (typeof l != "string" || -1 < c.BAD_DELIMITERS.indexOf(l)) && (l = !1), u !== `
` && u !== "\r" && u !== `\r
` && (u = `
`);
      var n = 0, h = !1;
      this.parse = function(s, m, v) {
        if (typeof s != "string") throw new Error("Input must be a string");
        var o = s.length, k = r.length, L = u.length, E = l.length, M = b(f), I = [], F = [], d = [], y = n = 0;
        if (!s) return W();
        if (t.header && !m) {
          var R = s.split(u)[0].split(r), S = [], C = {}, z = !1;
          for (var T in R) {
            var O = R[T];
            b(t.transformHeader) && (O = t.transformHeader(O, T));
            var V = O, H = C[O] || 0;
            for (0 < H && (z = !0, V = O + "_" + H), C[O] = H + 1; S.includes(V); ) V = V + "_" + H;
            S.push(V);
          }
          if (z) {
            var J = s.split(u);
            J[0] = S.join(r), s = J.join(u);
          }
        }
        if (i || i !== !1 && s.indexOf(e) === -1) {
          for (var G = s.split(u), K = 0; K < G.length; K++) {
            if (d = G[K], n += d.length, K !== G.length - 1) n += u.length;
            else if (v) return W();
            if (!l || d.substring(0, E) !== l) {
              if (M) {
                if (I = [], le(d.split(r)), me(), h) return W();
              } else le(d.split(r));
              if (p && p <= K) return I = I.slice(0, p), W(!0);
            }
          }
          return W();
        }
        for (var D = s.indexOf(r, n), A = s.indexOf(u, n), ue = new RegExp(oe(a) + oe(e), "g"), w = s.indexOf(e, n); ; ) if (s[n] !== e) if (l && d.length === 0 && s.substring(n, n + E) === l) {
          if (A === -1) return W();
          n = A + L, A = s.indexOf(u, n), D = s.indexOf(r, n);
        } else if (D !== -1 && (D < A || A === -1)) d.push(s.substring(n, D)), n = D + k, D = s.indexOf(r, n);
        else {
          if (A === -1) break;
          if (d.push(s.substring(n, A)), re(A + L), M && (me(), h)) return W();
          if (p && I.length >= p) return W(!0);
        }
        else for (w = n, n++; ; ) {
          if ((w = s.indexOf(e, w + 1)) === -1) return v || F.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: I.length, index: n }), ne();
          if (w === o - 1) return ne(s.substring(n, w).replace(ue, e));
          if (e !== a || s[w + 1] !== a) {
            if (e === a || w === 0 || s[w - 1] !== a) {
              D !== -1 && D < w + 1 && (D = s.indexOf(r, w + 1)), A !== -1 && A < w + 1 && (A = s.indexOf(u, w + 1));
              var ce = te(A === -1 ? D : Math.min(D, A));
              if (s.substr(w + 1 + ce, k) === r) {
                d.push(s.substring(n, w).replace(ue, e)), s[n = w + 1 + ce + k] !== e && (w = s.indexOf(e, n)), D = s.indexOf(r, n), A = s.indexOf(u, n);
                break;
              }
              var Y = te(A);
              if (s.substring(w + 1 + Y, w + 1 + Y + L) === u) {
                if (d.push(s.substring(n, w).replace(ue, e)), re(w + 1 + Y + L), D = s.indexOf(r, n), w = s.indexOf(e, n), M && (me(), h)) return W();
                if (p && I.length >= p) return W(!0);
                break;
              }
              F.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: I.length, index: n }), w++;
            }
          } else w++;
        }
        return ne();
        function le($) {
          I.push($), y = n;
        }
        function te($) {
          var be = 0;
          if ($ !== -1) {
            var ve = s.substring(w + 1, $);
            ve && ve.trim() === "" && (be = ve.length);
          }
          return be;
        }
        function ne($) {
          return v || ($ === void 0 && ($ = s.substring(n)), d.push($), n = o, le(d), M && me()), W();
        }
        function re($) {
          n = $, le(d), d = [], A = s.indexOf(u, n);
        }
        function W($) {
          return { data: I, errors: F, meta: { delimiter: r, linebreak: u, aborted: h, truncated: !!$, cursor: y + (m || 0) } };
        }
        function me() {
          f(W()), I = [], F = [];
        }
      }, this.abort = function() {
        h = !0;
      }, this.getCharIndex = function() {
        return n;
      };
    }
    function _e(t) {
      var e = t.data, r = j[e.workerId], u = !1;
      if (e.error) r.userError(e.error, e.file);
      else if (e.results && e.results.data) {
        var l = { abort: function() {
          u = !0, pe(e.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: ge, resume: ge };
        if (b(r.userStep)) {
          for (var f = 0; f < e.results.data.length && (r.userStep({ data: e.results.data[f], errors: e.results.errors, meta: e.results.meta }, l), !u); f++) ;
          delete e.results;
        } else b(r.userChunk) && (r.userChunk(e.results, l, e.file), delete e.results);
      }
      e.finished && !u && pe(e.workerId, e.results);
    }
    function pe(t, e) {
      var r = j[t];
      b(r.userComplete) && r.userComplete(e), r.terminate(), delete j[t];
    }
    function ge() {
      throw new Error("Not implemented.");
    }
    function de(t) {
      if (typeof t != "object" || t === null) return t;
      var e = Array.isArray(t) ? [] : {};
      for (var r in t) e[r] = de(t[r]);
      return e;
    }
    function Q(t, e) {
      return function() {
        t.apply(e, arguments);
      };
    }
    function b(t) {
      return typeof t == "function";
    }
    return B && (g.onmessage = function(t) {
      var e = t.data;
      if (c.WORKER_ID === void 0 && e && (c.WORKER_ID = e.workerId), typeof e.input == "string") g.postMessage({ workerId: c.WORKER_ID, results: c.parse(e.input, e.config), finished: !0 });
      else if (g.File && e.input instanceof File || e.input instanceof Object) {
        var r = c.parse(e.input, e.config);
        r && g.postMessage({ workerId: c.WORKER_ID, results: r, finished: !0 });
      }
    }), (ie.prototype = Object.create(N.prototype)).constructor = ie, (se.prototype = Object.create(N.prototype)).constructor = se, (ee.prototype = Object.create(ee.prototype)).constructor = ee, (ae.prototype = Object.create(N.prototype)).constructor = ae, c;
  });
})(Ee);
var Be = Ee.exports;
const Ne = /* @__PURE__ */ Re(Be), He = { id: "import-file" }, $e = /* @__PURE__ */ Ie({
  __name: "ImportCSV",
  props: {
    units: {
      type: String,
      default: "decimal"
    },
    bandingOptions: {
      type: Object,
      default: () => ({})
    },
    finishOptions: {
      type: Object,
      default: () => ({})
    },
    bandingLabels: {
      type: Array,
      default: () => []
    },
    finishLabels: {
      type: Array,
      default: () => []
    },
    customFields: {
      type: Array,
      default: () => []
    }
  },
  emits: ["error", "import"],
  setup(q, { emit: P }) {
    const _ = q, g = P, { t: x } = Fe({
      inheritLocale: !0,
      useScope: "global"
    }), B = Z([]), j = Z([]), X = Z([]), c = Z([]), U = Z({}), N = Z([]), ie = Z(!1), se = Z(null), ee = Z(null), ae = [
      "l",
      "w",
      "t",
      "q",
      "orientationLock",
      "name",
      "material",
      "banding",
      "finish",
      "cost"
    ], fe = ke(() => {
      const i = {};
      return B.value.forEach((a, n) => {
        i[n] = {};
        for (const [h, s] of Object.entries(a)) {
          if (!ae.includes(h)) continue;
          const m = _e(h, s);
          (m === !0 || m === !1) && (i[n][h] = m);
        }
      }), i;
    }), oe = ke(() => _.customFields.map((i) => i.label)), he = (i, a) => {
      if (a) {
        const n = Object.keys(a), h = [[]];
        n.forEach((m) => {
          const v = a[m], o = [];
          h.forEach((k) => {
            v.forEach((L) => o.push([...k, L]));
          }), h.splice(0, h.length, ...o);
        });
        const s = /* @__PURE__ */ new Set();
        h.forEach((m) => s.add(m.join("|").toLowerCase())), i === "banding" ? se.value = s : ee.value = s;
      }
    }, _e = (i, a) => {
      if (a === "???") return !0;
      function n(s) {
        return s ? (s = s.trim().toLowerCase(), s === "l" || s === "w") : !0;
      }
      const h = {
        banding: (s) => pe(s, se.value, "banding"),
        finish: (s) => pe(s, ee.value, "finish"),
        orientationLock: n
      };
      return i in h ? h[i](a) : null;
    }, pe = (i, a, n) => {
      if (i = u(i), !i) return !0;
      const h = i.split(","), s = h.every((m) => !m || a.has(m.toLowerCase()));
      if (!s) {
        const m = h.filter((v) => !a.has(v.toLowerCase()));
        console.log(`Valid ${n} choices...`), console.table(Array.from(a)), console.log(`The following ${n} choices are invalid`, m);
      }
      return s;
    }, ge = (i, a) => {
      const n = {
        bandingOptions: (h) => de(h, _.bandingOptions, _.bandingLabels, ["y1", "y2", "x1", "x2"]),
        finishOptions: (h) => de(h, _.finishOptions, _.finishLabels, ["a", "b"])
      };
      return i in n ? n[i](a) : null;
    }, de = (i, a, n, h) => {
      if (i = u(i), !i)
        return h.reduce((v, o) => ({ ...v, [o]: {} }), {});
      const s = i.split(",").map((v) => v.toLowerCase()), m = {};
      return h.forEach((v, o) => {
        m[v] = {}, Object.keys(a).forEach((k, L) => {
          var E;
          m[v][n[L]] = ((E = s[o]) == null ? void 0 : E.split("|")[L]) || "";
        });
      }), m;
    }, Q = () => B.value.map((i, a) => ({
      l: _.units === "decimal" ? ye(i.l) : i.l,
      w: _.units === "decimal" ? ye(i.w) : i.w,
      t: _.units === "decimal" ? ye(i.t) : i.t,
      q: i.q,
      orientationLock: i.orientationLock,
      name: i.name,
      material: i.material,
      bandingOptions: fe.value[a].banding ? ge("bandingOptions", i.banding) : null,
      finishOptions: fe.value[a].finish ? ge("finishOptions", i.finish) : null,
      units: _.units,
      customData: f(i)
    })), b = (i) => {
      var n;
      const a = (n = i == null ? void 0 : i[0]) == null ? void 0 : n.data;
      a && Ne.parse(a, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (h) => t(h),
        error: () => g("error")
      });
    }, t = (i) => {
      j.value = i.data.filter((a) => a.some((n) => n)), X.value = j.value[0], U.value = {};
      for (let a = X.value.length; a--; ) {
        const n = X.value[a], h = e(n);
        h ? U.value[a] = h : (U.value[a] = null, oe.value.includes(n) && (U.value[a] = "customData." + _.customFields.find((s) => s.label === n).id));
      }
      r(), j.value.shift(), l(), p();
    }, e = (i) => {
      const a = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", x("l"), x("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", x("w"), x("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", x("t"), x("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", x("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", x("quantity"), x("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", x("quantity")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", x("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", x("banding")],
        finish: ["finish", "paint"]
      }, n = Object.entries(a).reduce(
        (h, [s, m]) => (m.some((v) => i && i.toLowerCase() === v) && h.push(s), h),
        []
      );
      return n.length > 1 ? null : n[0];
    }, r = () => {
      ie.value = !1, c.value = Object.values(U.value).map((a) => !a || a === "N" ? null : ae.includes(a) ? a : (ie.value = !0, null));
      const i = c.value.filter((a, n) => c.value.indexOf(a) !== n);
      N.value = i.map((a) => c.value.reduce(
        (n, h, s) => (h && h === a && n.push(s), n),
        []
      ));
    }, u = (i) => i && i.replace(/\s*,\s*/g, ","), l = () => {
      const i = j.value.map((a) => {
        const n = {};
        return X.value.forEach((h, s) => {
          if (N.value.flat().includes(s))
            return n[U.value[s]] = "???";
          n[U.value[s]] = a[s];
        }), n;
      });
      B.value = i;
    }, f = (i) => {
      let a = {};
      for (let n in i)
        if (n.startsWith("customData.")) {
          let h = n.slice(11);
          a[h] = i[n];
        }
      return a;
    }, p = () => {
      const i = Q();
      i != null && i.length && g("import", i);
    };
    return qe(() => {
      he("banding", _.bandingOptions), he("finish", _.finishOptions);
    }), (i, a) => (we(), Ce("div", He, [
      Me(Ue, {
        label: ze(x)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: b
      }, null, 8, ["label"])
    ]));
  }
});
export {
  $e as default
};

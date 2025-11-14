import { g as ue } from "./vendor-tCV_BFOF.js";
var $ = { exports: {} }, Y, ae;
function le() {
  if (ae) return Y;
  ae = 1;
  function C(a, t) {
    var e = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(a);
      t && (r = r.filter(function(n) {
        return Object.getOwnPropertyDescriptor(a, n).enumerable;
      })), e.push.apply(e, r);
    }
    return e;
  }
  function m(a) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t] != null ? arguments[t] : {};
      t % 2 ? C(Object(e), !0).forEach(function(r) {
        L(a, r, e[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(e)) : C(Object(e)).forEach(function(r) {
        Object.defineProperty(a, r, Object.getOwnPropertyDescriptor(e, r));
      });
    }
    return a;
  }
  function L(a, t, e) {
    return t in a ? Object.defineProperty(a, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : a[t] = e, a;
  }
  function U(a, t) {
    if (!(a instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function c(a, t) {
    for (var e = 0; e < t.length; e++) {
      var r = t[e];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(a, r.key, r);
    }
  }
  function l(a, t, e) {
    return t && c(a.prototype, t), a;
  }
  var u = /* @__PURE__ */ (function() {
    function a(t) {
      U(this, a), this.query = t.query;
    }
    return l(a, [{
      key: "booleanOpt",
      value: function(e) {
        return typeof e == "string" ? e === "true" : e;
      }
      /**
       * Handle options that are strings or objects (including arrays)
       *
       * @param {object|string} option
       * @return {object|string}
       * */
    }, {
      key: "optObjectOrString",
      value: function(e) {
        var r = ["{", "["], n = ["}", "]"], h = e[0] && r.includes(e[0]), w = e[e.length - 1] && n.includes(e[e.length - 1]), x = h && w;
        try {
          return x ? JSON.parse(e) : e;
        } catch {
          return {};
        }
      }
      /**
       * Yields the "query" parameter for Model.paginate()
       * given any attributes of the Express req.query-Object,
       * */
    }, {
      key: "getQuery",
      value: function() {
        var e, r = (e = this.query) === null || e === void 0 ? void 0 : e.query;
        if (!r) return {};
        try {
          return JSON.parse(r);
        } catch {
          return {};
        }
      }
      /**
       * Yields the "options" parameter for Model.paginate(),
       * given any attributes of the Express req.query-Object
       * */
    }, {
      key: "getOptions",
      value: function() {
        if (!this.query) return {};
        var e = {}, r = this.query.select, n = this.query.collation, h = this.query.sort, w = this.query.populate, x = this.query.projection, S = this.query.lean, _ = this.query.leanWithId, d = this.query.leanWithVirtuals, q = this.query.offset, k = this.query.page, v = this.query.limit, i = this.query.customLabels, O = this.query.pagination, b = this.query.useEstimatedCount, y = this.query.useCustomCountFn, P = this.query.forceCountFn, f = this.query.allowDiskUse, p = this.query.read, g = this.query.options;
        return r && (e.select = this.optObjectOrString(r)), n && (e.collation = this.optObjectOrString(n)), h && (e.sort = this.optObjectOrString(h)), w && (e.populate = this.optObjectOrString(w)), x !== void 0 && (e.projection = this.optObjectOrString(x)), S !== void 0 && (e.lean = this.booleanOpt(S)), _ !== void 0 && (e.leanWithId = this.booleanOpt(_)), d !== void 0 && (e.leanWithVirtuals = this.booleanOpt(d)), q && (e.offset = Number(q)), k && (e.page = Number(k)), (v || v == 0) && (e.limit = Number(v)), i && (e.customLabels = this.optObjectOrString(i)), O !== void 0 && (e.pagination = this.booleanOpt(O)), b !== void 0 && (e.useEstimatedCount = this.booleanOpt(b)), y !== void 0 && (e.useCustomCountFn = this.booleanOpt(y)), P !== void 0 && (e.forceCountFn = this.booleanOpt(P)), f && (e.allowDiskUse = this.booleanOpt(f)), p && (e.read = this.optObjectOrString(p)), g && (e.options = this.getOptions(g)), e;
      }
      /**
       * Yields an array with positions:
       * [0] "query" parameter, for Model.paginate()
       * [1] "options" parameter, for Model.paginate()
       * */
    }, {
      key: "get",
      value: function() {
        return [m({}, this.getQuery()), m({}, this.getOptions())];
      }
    }]), a;
  })();
  return Y = u, Y;
}
var z, ne;
function fe() {
  if (ne) return z;
  ne = 1;
  function C(c, l) {
    var u = Object.keys(c);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(c);
      l && (a = a.filter(function(t) {
        return Object.getOwnPropertyDescriptor(c, t).enumerable;
      })), u.push.apply(u, a);
    }
    return u;
  }
  function m(c) {
    for (var l = 1; l < arguments.length; l++) {
      var u = arguments[l] != null ? arguments[l] : {};
      l % 2 ? C(Object(u), !0).forEach(function(a) {
        L(c, a, u[a]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(u)) : C(Object(u)).forEach(function(a) {
        Object.defineProperty(c, a, Object.getOwnPropertyDescriptor(u, a));
      });
    }
    return c;
  }
  function L(c, l, u) {
    return l in c ? Object.defineProperty(c, l, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : c[l] = u, c;
  }
  function U(c, l, u) {
    function a(v) {
      var i = v.populate, O = v.page, b = O === void 0 ? 1 : O, y = v.limit, P = y === void 0 ? 10 : y;
      if (!i)
        throw new Error("populate is required");
      var f = (b - 1) * P;
      v.offset = f;
      var p = {
        skip: f,
        limit: P
      };
      return typeof i == "string" ? i = m({
        path: i
      }, p) : typeof i == "object" && !Array.isArray(i) && (i = Object.assign(i, p)), v.populate = i, i;
    }
    function t(v, i) {
      return v.populate(i);
    }
    function e(v, i) {
      var O = i.populate, b = i.offset, y = b === void 0 ? 0 : b, P = i.page, f = P === void 0 ? 1 : P, p = i.limit, g = p === void 0 ? 10 : p, W = O.path, H = i.count, j = v[W];
      if (!j)
        throw new Error(`Parse error! Cannot find key on result with path ${W}`);
      f = Math.ceil((y + 1) / g);
      var s = {
        docs: j,
        totalDocs: H || 1,
        limit: g,
        page: f,
        prevPage: null,
        nextPage: null,
        hasPrevPage: !1,
        hasNextPage: !1
      }, N = g > 0 ? Math.ceil(H / g) || 1 : null;
      s.totalPages = N, s.pagingCounter = (f - 1) * g + 1, f > 1 ? (s.hasPrevPage = !0, s.prevPage = f - 1) : f == 1 && y !== 0 && (s.hasPrevPage = !0, s.prevPage = 1), f < N && (s.hasNextPage = !0, s.nextPage = f + 1), g == 0 && (s.limit = 0, s.totalPages = 1, s.page = 1, s.pagingCounter = 1), Object.defineProperty(v, W, {
        value: s,
        writable: !1
      });
    }
    var r = l.populate, n = l.read, h = n === void 0 ? {} : n, w = l.select, x = w === void 0 ? "" : w, S = l.pagination, _ = S === void 0 ? !0 : S, d = l.pagingOptions, q = l.projection, k = this.findOne(c, q);
    return h && h.pref && k.read(h.pref, h.tags), x && k.select(x), new Promise(function(v, i) {
      k.exec().then(function(O) {
        var b = [];
        if (r && b.push(b), _ && d)
          if (Array.isArray(d))
            d.forEach(function(P) {
              var f = a(P);
              P.count = O[f.path].length, b.push(f);
            });
          else {
            var y = a(d);
            d.count = O[y.path].length, b.push(y);
          }
        t(O, b).then(function(P) {
          _ && d && (Array.isArray(d) ? d.forEach(function(f) {
            e(P, f);
          }) : e(P, d)), u && u(null, P), v(P);
        });
      }).catch(function(O) {
        console.error(O.message), u && u(O, null), i(O);
      });
    });
  }
  return z = U, z;
}
var G, ie;
function ce() {
  if (ie) return G;
  ie = 1;
  function C(m) {
    return this.model.paginate(this.getQuery(), m);
  }
  return G = C, G;
}
var oe;
function pe() {
  if (oe) return $.exports;
  oe = 1;
  function C(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter(function(h) {
        return Object.getOwnPropertyDescriptor(t, h).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function m(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e] != null ? arguments[e] : {};
      e % 2 ? C(Object(r), !0).forEach(function(n) {
        L(t, n, r[n]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach(function(n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
      });
    }
    return t;
  }
  function L(t, e, r) {
    return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
  }
  var U = le(), c = fe(), l = ce(), u = {
    customLabels: {
      totalDocs: "totalDocs",
      limit: "limit",
      page: "page",
      totalPages: "totalPages",
      docs: "docs",
      nextPage: "nextPage",
      prevPage: "prevPage",
      pagingCounter: "pagingCounter",
      hasPrevPage: "hasPrevPage",
      hasNextPage: "hasNextPage",
      meta: null
    },
    collation: {},
    lean: !1,
    leanWithId: !0,
    leanWithVirtuals: !1,
    limit: 10,
    projection: {},
    select: "",
    options: {},
    pagination: !0,
    useEstimatedCount: !1,
    useCustomCountFn: !1,
    forceCountFn: !1,
    allowDiskUse: !1,
    customFind: "find"
  };
  function a(t, e, r) {
    e = m(m(m({}, u), a.options), e), t = t || {};
    var n = e, h = n.collation, w = n.lean, x = n.leanWithId, S = n.leanWithVirtuals, _ = n.populate, d = n.projection, q = n.read, k = n.select, v = n.sort, i = n.pagination, O = n.useEstimatedCount, b = n.useCustomCountFn, y = n.forceCountFn, P = n.allowDiskUse, f = n.customFind, p = m(m({}, u.customLabels), e.customLabels), g = u.limit;
    i && !isNaN(Number(e.limit)) && (g = parseInt(e.limit, 10) > 0 ? parseInt(e.limit, 10) : 0);
    var W = typeof r == "function", H = e.options, j, s, N, A = [], X = p.docs, K = p.limit, T = p.nextPage, Z = p.page, ee = p.pagingCounter, M = p.prevPage, se = p.totalDocs, J = p.totalPages, V = p.hasPrevPage, Q = p.hasNextPage, te = p.meta;
    Object.prototype.hasOwnProperty.call(e, "offset") ? (j = parseInt(e.offset, 10), N = j) : Object.prototype.hasOwnProperty.call(e, "page") ? (s = parseInt(e.page, 10) > 0 ? parseInt(e.page, 10) : 1, N = (s - 1) * g) : (j = 0, s = 1, N = j), i || (s = 1);
    var I;
    if (i && (y === !0 ? Object.keys(h).length > 0 ? I = this.countDocuments(t, H).collation(h).exec() : I = this.countDocuments(t).exec() : O === !0 ? I = this.estimatedDocumentCount().exec() : typeof b == "function" ? I = b() : Object.keys(h).length > 0 ? I = this.countDocuments(t, H).collation(h).exec() : I = this.countDocuments(t).exec()), g) {
      var D = this[f](t, d, H);
      _ && D.populate(_), D.select(k), D.sort(v), w && (S ? D.lean({
        virtuals: S
      }) : D.lean(w)), q && q.pref && D.read(q.pref, q.tags), Object.keys(h).length > 0 && D.collation(h), i && (D.skip(N), D.limit(g));
      try {
        P === !0 && D.allowDiskUse();
      } catch {
        console.error("Your MongoDB version does not support `allowDiskUse`.");
      }
      A = D.exec(), w && x && (A = A.then(function(E) {
        return E.forEach(function(F) {
          F._id && (F.id = String(F._id));
        }), E;
      }));
    }
    return Promise.all([I, A]).then(function(E) {
      var F = E[0], R = E[1];
      i !== !0 && (F = R.length);
      var o = {
        [se]: F
      }, B = {};
      typeof j < "u" && (o.offset = j, s = Math.ceil((j + 1) / g));
      var re = g > 0 ? Math.ceil(F / g) || 1 : null;
      return o[K] = F, o[J] = 1, o[Z] = s, o[ee] = (s - 1) * g + 1, o[V] = !1, o[Q] = !1, o[M] = null, o[T] = null, i && (o[K] = g, o[J] = re, s > 1 ? (o[V] = !0, o[M] = s - 1) : s == 1 && typeof j < "u" && j !== 0 && (o[V] = !0, o[M] = 1), s < re && (o[Q] = !0, o[T] = s + 1)), delete o.false, g == 0 && (o[K] = 0, o[J] = 1, o[Z] = 1, o[ee] = 1, o[M] = null, o[T] = null, o[V] = !1, o[Q] = !1), te ? B = {
        [X]: R,
        [te]: o
      } : B = m({
        [X]: R
      }, o), W ? r(null, B) : Promise.resolve(B);
    }).catch(function(E) {
      return W ? r(E) : Promise.reject(E);
    });
  }
  return $.exports = function(t) {
    t.statics.paginate = a, t.statics.paginateSubDocs = c, t.query.paginate = l;
  }, $.exports.PaginationParameters = U, $.exports.paginateSubDocs = c, $.exports.paginate = a, $.exports;
}
var ge = pe();
const ve = /* @__PURE__ */ ue(ge);
export {
  ve as m
};

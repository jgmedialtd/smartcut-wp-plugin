const c = (a) => typeof a == "string", H = () => {
  let a, e;
  const t = new Promise((n, s) => {
    a = n, e = s;
  });
  return t.resolve = a, t.reject = e, t;
}, ie = (a) => a == null ? "" : "" + a, Ce = (a, e, t) => {
  a.forEach((n) => {
    e[n] && (t[n] = e[n]);
  });
}, ke = /###/g, re = (a) => a && a.indexOf("###") > -1 ? a.replace(ke, ".") : a, ae = (a) => !a || c(a), z = (a, e, t) => {
  const n = c(e) ? e.split(".") : e;
  let s = 0;
  for (; s < n.length - 1; ) {
    if (ae(a)) return {};
    const i = re(n[s]);
    !a[i] && t && (a[i] = new t()), Object.prototype.hasOwnProperty.call(a, i) ? a = a[i] : a = {}, ++s;
  }
  return ae(a) ? {} : {
    obj: a,
    k: re(n[s])
  };
}, oe = (a, e, t) => {
  const {
    obj: n,
    k: s
  } = z(a, e, Object);
  if (n !== void 0 || e.length === 1) {
    n[s] = t;
    return;
  }
  let i = e[e.length - 1], r = e.slice(0, e.length - 1), l = z(a, r, Object);
  for (; l.obj === void 0 && r.length; )
    i = `${r[r.length - 1]}.${i}`, r = r.slice(0, r.length - 1), l = z(a, r, Object), l != null && l.obj && typeof l.obj[`${l.k}.${i}`] < "u" && (l.obj = void 0);
  l.obj[`${l.k}.${i}`] = t;
}, $e = (a, e, t, n) => {
  const {
    obj: s,
    k: i
  } = z(a, e, Object);
  s[i] = s[i] || [], s[i].push(t);
}, Q = (a, e) => {
  const {
    obj: t,
    k: n
  } = z(a, e);
  if (t && Object.prototype.hasOwnProperty.call(t, n))
    return t[n];
}, Re = (a, e, t) => {
  const n = Q(a, t);
  return n !== void 0 ? n : Q(e, t);
}, we = (a, e, t) => {
  for (const n in e)
    n !== "__proto__" && n !== "constructor" && (n in a ? c(a[n]) || a[n] instanceof String || c(e[n]) || e[n] instanceof String ? t && (a[n] = e[n]) : we(a[n], e[n], t) : a[n] = e[n]);
  return a;
}, j = (a) => a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Pe = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Ne = (a) => c(a) ? a.replace(/[&<>"'\/]/g, (e) => Pe[e]) : a;
class Fe {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0)
      return t;
    const n = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, n), this.regExpQueue.push(e), n;
  }
}
const Ee = [" ", ",", "?", "!", ";"], De = new Fe(20), je = (a, e, t) => {
  e = e || "", t = t || "";
  const n = Ee.filter((r) => e.indexOf(r) < 0 && t.indexOf(r) < 0);
  if (n.length === 0) return !0;
  const s = De.getRegExp(`(${n.map((r) => r === "?" ? "\\?" : r).join("|")})`);
  let i = !s.test(a);
  if (!i) {
    const r = a.indexOf(t);
    r > 0 && !s.test(a.substring(0, r)) && (i = !0);
  }
  return i;
}, _ = function(a, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!a) return;
  if (a[e])
    return Object.prototype.hasOwnProperty.call(a, e) ? a[e] : void 0;
  const n = e.split(t);
  let s = a;
  for (let i = 0; i < n.length; ) {
    if (!s || typeof s != "object")
      return;
    let r, l = "";
    for (let o = i; o < n.length; ++o)
      if (o !== i && (l += t), l += n[o], r = s[l], r !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof r) > -1 && o < n.length - 1)
          continue;
        i += o - i + 1;
        break;
      }
    s = r;
  }
  return s;
}, Y = (a) => a == null ? void 0 : a.replace("_", "-"), Ae = {
  type: "logger",
  log(a) {
    this.output("log", a);
  },
  warn(a) {
    this.output("warn", a);
  },
  error(a) {
    this.output("error", a);
  },
  output(a, e) {
    var t, n;
    (n = (t = console == null ? void 0 : console[a]) == null ? void 0 : t.apply) == null || n.call(t, console, e);
  }
};
class q {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || Ae, this.options = t, this.debug = t.debug;
  }
  log() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, "log", "", !0);
  }
  warn() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, "warn", "", !0);
  }
  error() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, "error", "");
  }
  deprecate() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, n, s) {
    return s && !this.debug ? null : (c(e[0]) && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new q(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new q(this.logger, e);
  }
}
var P = new q();
class Z {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((n) => {
      this.observers[n] || (this.observers[n] = /* @__PURE__ */ new Map());
      const s = this.observers[n].get(t) || 0;
      this.observers[n].set(t, s + 1);
    }), this;
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
      n[s - 1] = arguments[s];
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((r) => {
      let [l, o] = r;
      for (let u = 0; u < o; u++)
        l(...n);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((r) => {
      let [l, o] = r;
      for (let u = 0; u < o; u++)
        l.apply(l, [e, ...n]);
    });
  }
}
class le extends Z {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, n) {
    var u, d;
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, r = s.ignoreJSONStructure !== void 0 ? s.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let l;
    e.indexOf(".") > -1 ? l = e.split(".") : (l = [e, t], n && (Array.isArray(n) ? l.push(...n) : c(n) && i ? l.push(...n.split(i)) : l.push(n)));
    const o = Q(this.data, l);
    return !o && !t && !n && e.indexOf(".") > -1 && (e = l[0], t = l[1], n = l.slice(2).join(".")), o || !r || !c(n) ? o : _((d = (u = this.data) == null ? void 0 : u[e]) == null ? void 0 : d[t], n, i);
  }
  addResource(e, t, n, s) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const r = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let l = [e, t];
    n && (l = l.concat(r ? n.split(r) : n)), e.indexOf(".") > -1 && (l = e.split("."), s = t, t = l[1]), this.addNamespaces(t), oe(this.data, l, s), i.silent || this.emit("added", e, t, n, s);
  }
  addResources(e, t, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const i in n)
      (c(n[i]) || Array.isArray(n[i])) && this.addResource(e, t, i, n[i], {
        silent: !0
      });
    s.silent || this.emit("added", e, t, n);
  }
  addResourceBundle(e, t, n, s, i) {
    let r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, l = [e, t];
    e.indexOf(".") > -1 && (l = e.split("."), s = n, n = t, t = l[1]), this.addNamespaces(t);
    let o = Q(this.data, l) || {};
    r.skipCopy || (n = JSON.parse(JSON.stringify(n))), s ? we(o, n, i) : o = {
      ...o,
      ...n
    }, oe(this.data, l, o), r.silent || this.emit("added", e, t, n);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return t || (t = this.options.defaultNS), this.getResource(e, t);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!(t && Object.keys(t) || []).find((s) => t[s] && Object.keys(t[s]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Oe = {
  processors: {},
  addPostProcessor(a) {
    this.processors[a.name] = a;
  },
  handle(a, e, t, n, s) {
    return a.forEach((i) => {
      var r;
      e = ((r = this.processors[i]) == null ? void 0 : r.process(e, t, n, s)) ?? e;
    }), e;
  }
};
const ue = {}, fe = (a) => !c(a) && typeof a != "boolean" && typeof a != "number";
class G extends Z {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Ce(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = P.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (e == null)
      return !1;
    const n = this.resolve(e, t);
    return (n == null ? void 0 : n.res) !== void 0;
  }
  extractFromKey(e, t) {
    let n = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    n === void 0 && (n = ":");
    const s = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let i = t.ns || this.options.defaultNS || [];
    const r = n && e.indexOf(n) > -1, l = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !je(e, n, s);
    if (r && !l) {
      const o = e.match(this.interpolator.nestingRegexp);
      if (o && o.length > 0)
        return {
          key: e,
          namespaces: c(i) ? [i] : i
        };
      const u = e.split(n);
      (n !== s || n === s && this.options.ns.indexOf(u[0]) > -1) && (i = u.shift()), e = u.join(s);
    }
    return {
      key: e,
      namespaces: c(i) ? [i] : i
    };
  }
  translate(e, t, n) {
    if (typeof t != "object" && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), typeof options == "object" && (t = {
      ...t
    }), t || (t = {}), e == null) return "";
    Array.isArray(e) || (e = [String(e)]);
    const s = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails, i = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator, {
      key: r,
      namespaces: l
    } = this.extractFromKey(e[e.length - 1], t), o = l[l.length - 1], u = t.lng || this.language, d = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((u == null ? void 0 : u.toLowerCase()) === "cimode") {
      if (d) {
        const L = t.nsSeparator || this.options.nsSeparator;
        return s ? {
          res: `${o}${L}${r}`,
          usedKey: r,
          exactUsedKey: r,
          usedLng: u,
          usedNS: o,
          usedParams: this.getUsedParamsDetails(t)
        } : `${o}${L}${r}`;
      }
      return s ? {
        res: r,
        usedKey: r,
        exactUsedKey: r,
        usedLng: u,
        usedNS: o,
        usedParams: this.getUsedParamsDetails(t)
      } : r;
    }
    const h = this.resolve(e, t);
    let f = h == null ? void 0 : h.res;
    const m = (h == null ? void 0 : h.usedKey) || r, g = (h == null ? void 0 : h.exactUsedKey) || r, p = ["[object Number]", "[object Function]", "[object RegExp]"], x = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, b = !this.i18nFormat || this.i18nFormat.handleAsObject, w = t.count !== void 0 && !c(t.count), $ = G.hasDefaultValue(t), C = w ? this.pluralResolver.getSuffix(u, t.count, t) : "", V = t.ordinal && w ? this.pluralResolver.getSuffix(u, t.count, {
      ordinal: !1
    }) : "", U = w && !t.ordinal && t.count === 0, y = U && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${C}`] || t[`defaultValue${V}`] || t.defaultValue;
    let O = f;
    b && !f && $ && (O = y);
    const E = fe(O), D = Object.prototype.toString.apply(O);
    if (b && O && E && p.indexOf(D) < 0 && !(c(x) && Array.isArray(O))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const L = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(m, O, {
          ...t,
          ns: l
        }) : `key '${r} (${this.language})' returned an object instead of string.`;
        return s ? (h.res = L, h.usedParams = this.getUsedParamsDetails(t), h) : L;
      }
      if (i) {
        const L = Array.isArray(O), k = L ? [] : {}, ee = L ? g : m;
        for (const R in O)
          if (Object.prototype.hasOwnProperty.call(O, R)) {
            const N = `${ee}${i}${R}`;
            $ && !f ? k[R] = this.translate(N, {
              ...t,
              defaultValue: fe(y) ? y[R] : void 0,
              joinArrays: !1,
              ns: l
            }) : k[R] = this.translate(N, {
              ...t,
              joinArrays: !1,
              ns: l
            }), k[R] === N && (k[R] = O[R]);
          }
        f = k;
      }
    } else if (b && c(x) && Array.isArray(f))
      f = f.join(x), f && (f = this.extendTranslation(f, e, t, n));
    else {
      let L = !1, k = !1;
      !this.isValidLookup(f) && $ && (L = !0, f = y), this.isValidLookup(f) || (k = !0, f = r);
      const R = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && k ? void 0 : f, N = $ && y !== f && this.options.updateMissing;
      if (k || L || N) {
        if (this.logger.log(N ? "updateKey" : "missingKey", u, o, r, N ? y : f), i) {
          const v = this.resolve(r, {
            ...t,
            keySeparator: !1
          });
          v && v.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let K = [];
        const J = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && J && J[0])
          for (let v = 0; v < J.length; v++)
            K.push(J[v]);
        else this.options.saveMissingTo === "all" ? K = this.languageUtils.toResolveHierarchy(t.lng || this.language) : K.push(t.lng || this.language);
        const te = (v, F, M) => {
          var se;
          const ne = $ && M !== f ? M : R;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(v, o, F, ne, N, t) : (se = this.backendConnector) != null && se.saveMissing && this.backendConnector.saveMissing(v, o, F, ne, N, t), this.emit("missingKey", v, o, F, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && w ? K.forEach((v) => {
          const F = this.pluralResolver.getSuffixes(v, t);
          U && t[`defaultValue${this.options.pluralSeparator}zero`] && F.indexOf(`${this.options.pluralSeparator}zero`) < 0 && F.push(`${this.options.pluralSeparator}zero`), F.forEach((M) => {
            te([v], r + M, t[`defaultValue${M}`] || y);
          });
        }) : te(K, r, y));
      }
      f = this.extendTranslation(f, e, t, h, n), k && f === r && this.options.appendNamespaceToMissingKey && (f = `${o}:${r}`), (k || L) && this.options.parseMissingKeyHandler && (f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${o}:${r}` : r, L ? f : void 0));
    }
    return s ? (h.res = f, h.usedParams = this.getUsedParamsDetails(t), h) : f;
  }
  extendTranslation(e, t, n, s, i) {
    var u, d;
    var r = this;
    if ((u = this.i18nFormat) != null && u.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...n
      }, n.lng || this.language || s.usedLng, s.usedNS, s.usedKey, {
        resolved: s
      });
    else if (!n.skipInterpolation) {
      n.interpolation && this.interpolator.init({
        ...n,
        interpolation: {
          ...this.options.interpolation,
          ...n.interpolation
        }
      });
      const h = c(e) && (((d = n == null ? void 0 : n.interpolation) == null ? void 0 : d.skipOnVariables) !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let f;
      if (h) {
        const g = e.match(this.interpolator.nestingRegexp);
        f = g && g.length;
      }
      let m = n.replace && !c(n.replace) ? n.replace : n;
      if (this.options.interpolation.defaultVariables && (m = {
        ...this.options.interpolation.defaultVariables,
        ...m
      }), e = this.interpolator.interpolate(e, m, n.lng || this.language || s.usedLng, n), h) {
        const g = e.match(this.interpolator.nestingRegexp), p = g && g.length;
        f < p && (n.nest = !1);
      }
      !n.lng && s && s.res && (n.lng = this.language || s.usedLng), n.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var g = arguments.length, p = new Array(g), x = 0; x < g; x++)
          p[x] = arguments[x];
        return (i == null ? void 0 : i[0]) === p[0] && !n.context ? (r.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${t[0]}`), null) : r.translate(...p, t);
      }, n)), n.interpolation && this.interpolator.reset();
    }
    const l = n.postProcess || this.options.postProcess, o = c(l) ? [l] : l;
    return e != null && (o != null && o.length) && n.applyPostProcessor !== !1 && (e = Oe.handle(o, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...s,
        usedParams: this.getUsedParamsDetails(n)
      },
      ...n
    } : n, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, s, i, r, l;
    return c(e) && (e = [e]), e.forEach((o) => {
      if (this.isValidLookup(n)) return;
      const u = this.extractFromKey(o, t), d = u.key;
      s = d;
      let h = u.namespaces;
      this.options.fallbackNS && (h = h.concat(this.options.fallbackNS));
      const f = t.count !== void 0 && !c(t.count), m = f && !t.ordinal && t.count === 0, g = t.context !== void 0 && (c(t.context) || typeof t.context == "number") && t.context !== "", p = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      h.forEach((x) => {
        var b, w;
        this.isValidLookup(n) || (l = x, !ue[`${p[0]}-${x}`] && ((b = this.utils) != null && b.hasLoadedNamespace) && !((w = this.utils) != null && w.hasLoadedNamespace(l)) && (ue[`${p[0]}-${x}`] = !0, this.logger.warn(`key "${s}" for languages "${p.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), p.forEach(($) => {
          var U;
          if (this.isValidLookup(n)) return;
          r = $;
          const C = [d];
          if ((U = this.i18nFormat) != null && U.addLookupKeys)
            this.i18nFormat.addLookupKeys(C, d, $, x, t);
          else {
            let y;
            f && (y = this.pluralResolver.getSuffix($, t.count, t));
            const O = `${this.options.pluralSeparator}zero`, E = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (C.push(d + y), t.ordinal && y.indexOf(E) === 0 && C.push(d + y.replace(E, this.options.pluralSeparator)), m && C.push(d + O)), g) {
              const D = `${d}${this.options.contextSeparator}${t.context}`;
              C.push(D), f && (C.push(D + y), t.ordinal && y.indexOf(E) === 0 && C.push(D + y.replace(E, this.options.pluralSeparator)), m && C.push(D + O));
            }
          }
          let V;
          for (; V = C.pop(); )
            this.isValidLookup(n) || (i = V, n = this.getResource($, x, V, t));
        }));
      });
    }), {
      res: n,
      usedKey: s,
      exactUsedKey: i,
      usedLng: r,
      usedNS: l
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, n) {
    var i;
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (i = this.i18nFormat) != null && i.getResource ? this.i18nFormat.getResource(e, t, n, s) : this.resourceStore.getResource(e, t, n, s);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], n = e.replace && !c(e.replace);
    let s = n ? e.replace : e;
    if (n && typeof e.count < "u" && (s.count = e.count), this.options.interpolation.defaultVariables && (s = {
      ...this.options.interpolation.defaultVariables,
      ...s
    }), !n) {
      s = {
        ...s
      };
      for (const i of t)
        delete s[i];
    }
    return s;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const n in e)
      if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && e[n] !== void 0)
        return !0;
    return !1;
  }
}
class de {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = P.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = Y(e), !e || e.indexOf("-") < 0) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = Y(e), !e || e.indexOf("-") < 0) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (c(e) && e.indexOf("-") > -1) {
      let t;
      try {
        t = Intl.getCanonicalLocales(e)[0];
      } catch {
      }
      return t && this.options.lowerCaseLng && (t = t.toLowerCase()), t || (this.options.lowerCaseLng ? e.toLowerCase() : e);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return e.forEach((n) => {
      if (t) return;
      const s = this.formatLanguageCode(n);
      (!this.options.supportedLngs || this.isSupportedCode(s)) && (t = s);
    }), !t && this.options.supportedLngs && e.forEach((n) => {
      if (t) return;
      const s = this.getScriptPartFromCode(n);
      if (this.isSupportedCode(s)) return t = s;
      const i = this.getLanguagePartFromCode(n);
      if (this.isSupportedCode(i)) return t = i;
      t = this.options.supportedLngs.find((r) => {
        if (r === i) return r;
        if (!(r.indexOf("-") < 0 && i.indexOf("-") < 0) && (r.indexOf("-") > 0 && i.indexOf("-") < 0 && r.substring(0, r.indexOf("-")) === i || r.indexOf(i) === 0 && i.length > 1))
          return r;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(t)), c(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let n = e[t];
    return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || [];
  }
  toResolveHierarchy(e, t) {
    const n = this.getFallbackCodes(t || this.options.fallbackLng || [], e), s = [], i = (r) => {
      r && (this.isSupportedCode(r) ? s.push(r) : this.logger.warn(`rejecting language code not found in supportedLngs: ${r}`));
    };
    return c(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(e))) : c(e) && i(this.formatLanguageCode(e)), n.forEach((r) => {
      s.indexOf(r) < 0 && i(this.formatLanguageCode(r));
    }), s;
  }
}
const he = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, ge = {
  select: (a) => a === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class Ie {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = P.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = Y(e === "dev" ? "en" : e), s = t.ordinal ? "ordinal" : "cardinal", i = JSON.stringify({
      cleanedCode: n,
      type: s
    });
    if (i in this.pluralRulesCache)
      return this.pluralRulesCache[i];
    let r;
    try {
      r = new Intl.PluralRules(n, {
        type: s
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), ge;
      if (!e.match(/-|_/)) return ge;
      const o = this.languageUtils.getLanguagePartFromCode(e);
      r = this.getRule(o, t);
    }
    return this.pluralRulesCache[i] = r, r;
  }
  needsPlural(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = this.getRule(e, t);
    return n || (n = this.getRule("dev", t)), (n == null ? void 0 : n.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, n).map((s) => `${t}${s}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = this.getRule(e, t);
    return n || (n = this.getRule("dev", t)), n ? n.resolvedOptions().pluralCategories.sort((s, i) => he[s] - he[i]).map((s) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${s}`) : [];
  }
  getSuffix(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = this.getRule(e, n);
    return s ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${s.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, n));
  }
}
const ce = function(a, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = Re(a, e, t);
  return !i && s && c(t) && (i = _(a, t, n), i === void 0 && (i = _(e, t, n))), i;
}, X = (a) => a.replace(/\$/g, "$$$$");
class Te {
  constructor() {
    var t;
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = P.create("interpolator"), this.options = e, this.format = ((t = e == null ? void 0 : e.interpolation) == null ? void 0 : t.format) || ((n) => n), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: n,
      useRawValueToEscape: s,
      prefix: i,
      prefixEscaped: r,
      suffix: l,
      suffixEscaped: o,
      formatSeparator: u,
      unescapeSuffix: d,
      unescapePrefix: h,
      nestingPrefix: f,
      nestingPrefixEscaped: m,
      nestingSuffix: g,
      nestingSuffixEscaped: p,
      nestingOptionsSeparator: x,
      maxReplaces: b,
      alwaysFormat: w
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Ne, this.escapeValue = n !== void 0 ? n : !0, this.useRawValueToEscape = s !== void 0 ? s : !1, this.prefix = i ? j(i) : r || "{{", this.suffix = l ? j(l) : o || "}}", this.formatSeparator = u || ",", this.unescapePrefix = d ? "" : h || "-", this.unescapeSuffix = this.unescapePrefix ? "" : d || "", this.nestingPrefix = f ? j(f) : m || j("$t("), this.nestingSuffix = g ? j(g) : p || j(")"), this.nestingOptionsSeparator = x || ",", this.maxReplaces = b || 1e3, this.alwaysFormat = w !== void 0 ? w : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, n) => (t == null ? void 0 : t.source) === n ? (t.lastIndex = 0, t) : new RegExp(n, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, n, s) {
    var m;
    let i, r, l;
    const o = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (g) => {
      if (g.indexOf(this.formatSeparator) < 0) {
        const w = ce(t, o, g, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(w, void 0, n, {
          ...s,
          ...t,
          interpolationkey: g
        }) : w;
      }
      const p = g.split(this.formatSeparator), x = p.shift().trim(), b = p.join(this.formatSeparator).trim();
      return this.format(ce(t, o, x, this.options.keySeparator, this.options.ignoreJSONStructure), b, n, {
        ...s,
        ...t,
        interpolationkey: x
      });
    };
    this.resetRegExp();
    const d = (s == null ? void 0 : s.missingInterpolationHandler) || this.options.missingInterpolationHandler, h = ((m = s == null ? void 0 : s.interpolation) == null ? void 0 : m.skipOnVariables) !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (g) => X(g)
    }, {
      regex: this.regexp,
      safeValue: (g) => this.escapeValue ? X(this.escape(g)) : X(g)
    }].forEach((g) => {
      for (l = 0; i = g.regex.exec(e); ) {
        const p = i[1].trim();
        if (r = u(p), r === void 0)
          if (typeof d == "function") {
            const b = d(e, i, s);
            r = c(b) ? b : "";
          } else if (s && Object.prototype.hasOwnProperty.call(s, p))
            r = "";
          else if (h) {
            r = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${p} for interpolating ${e}`), r = "";
        else !c(r) && !this.useRawValueToEscape && (r = ie(r));
        const x = g.safeValue(r);
        if (e = e.replace(i[0], x), h ? (g.regex.lastIndex += r.length, g.regex.lastIndex -= i[0].length) : g.regex.lastIndex = 0, l++, l >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s, i, r;
    const l = (o, u) => {
      const d = this.nestingOptionsSeparator;
      if (o.indexOf(d) < 0) return o;
      const h = o.split(new RegExp(`${d}[ ]*{`));
      let f = `{${h[1]}`;
      o = h[0], f = this.interpolate(f, r);
      const m = f.match(/'/g), g = f.match(/"/g);
      (((m == null ? void 0 : m.length) ?? 0) % 2 === 0 && !g || g.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        r = JSON.parse(f), u && (r = {
          ...u,
          ...r
        });
      } catch (p) {
        return this.logger.warn(`failed parsing options string in nesting for key ${o}`, p), `${o}${d}${f}`;
      }
      return r.defaultValue && r.defaultValue.indexOf(this.prefix) > -1 && delete r.defaultValue, o;
    };
    for (; s = this.nestingRegexp.exec(e); ) {
      let o = [];
      r = {
        ...n
      }, r = r.replace && !c(r.replace) ? r.replace : r, r.applyPostProcessor = !1, delete r.defaultValue;
      let u = !1;
      if (s[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(s[1])) {
        const d = s[1].split(this.formatSeparator).map((h) => h.trim());
        s[1] = d.shift(), o = d, u = !0;
      }
      if (i = t(l.call(this, s[1].trim(), r), r), i && s[0] === e && !c(i)) return i;
      c(i) || (i = ie(i)), i || (this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`), i = ""), u && (i = o.reduce((d, h) => this.format(d, h, n.lng, {
        ...n,
        interpolationkey: s[1].trim()
      }), i.trim())), e = e.replace(s[0], i), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const Ve = (a) => {
  let e = a.toLowerCase().trim();
  const t = {};
  if (a.indexOf("(") > -1) {
    const n = a.split("(");
    e = n[0].toLowerCase().trim();
    const s = n[1].substring(0, n[1].length - 1);
    e === "currency" && s.indexOf(":") < 0 ? t.currency || (t.currency = s.trim()) : e === "relativetime" && s.indexOf(":") < 0 ? t.range || (t.range = s.trim()) : s.split(";").forEach((r) => {
      if (r) {
        const [l, ...o] = r.split(":"), u = o.join(":").trim().replace(/^'+|'+$/g, ""), d = l.trim();
        t[d] || (t[d] = u), u === "false" && (t[d] = !1), u === "true" && (t[d] = !0), isNaN(u) || (t[d] = parseInt(u, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, A = (a) => {
  const e = {};
  return (t, n, s) => {
    let i = s;
    s && s.interpolationkey && s.formatParams && s.formatParams[s.interpolationkey] && s[s.interpolationkey] && (i = {
      ...i,
      [s.interpolationkey]: void 0
    });
    const r = n + JSON.stringify(i);
    let l = e[r];
    return l || (l = a(Y(n), s), e[r] = l), l(t);
  };
};
class Ue {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = P.create("formatter"), this.options = e, this.formats = {
      number: A((t, n) => {
        const s = new Intl.NumberFormat(t, {
          ...n
        });
        return (i) => s.format(i);
      }),
      currency: A((t, n) => {
        const s = new Intl.NumberFormat(t, {
          ...n,
          style: "currency"
        });
        return (i) => s.format(i);
      }),
      datetime: A((t, n) => {
        const s = new Intl.DateTimeFormat(t, {
          ...n
        });
        return (i) => s.format(i);
      }),
      relativetime: A((t, n) => {
        const s = new Intl.RelativeTimeFormat(t, {
          ...n
        });
        return (i) => s.format(i, n.range || "day");
      }),
      list: A((t, n) => {
        const s = new Intl.ListFormat(t, {
          ...n
        });
        return (i) => s.format(i);
      })
    }, this.init(e);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = t.interpolation.formatSeparator || ",";
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = A(t);
  }
  format(e, t, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = t.split(this.formatSeparator);
    if (i.length > 1 && i[0].indexOf("(") > 1 && i[0].indexOf(")") < 0 && i.find((l) => l.indexOf(")") > -1)) {
      const l = i.findIndex((o) => o.indexOf(")") > -1);
      i[0] = [i[0], ...i.splice(1, l)].join(this.formatSeparator);
    }
    return i.reduce((l, o) => {
      var h;
      const {
        formatName: u,
        formatOptions: d
      } = Ve(o);
      if (this.formats[u]) {
        let f = l;
        try {
          const m = ((h = s == null ? void 0 : s.formatParams) == null ? void 0 : h[s.interpolationkey]) || {}, g = m.locale || m.lng || s.locale || s.lng || n;
          f = this.formats[u](l, g, {
            ...d,
            ...s,
            ...m
          });
        } catch (m) {
          this.logger.warn(m);
        }
        return f;
      } else
        this.logger.warn(`there was no format function for ${u}`);
      return l;
    }, e);
  }
}
const Ke = (a, e) => {
  a.pending[e] !== void 0 && (delete a.pending[e], a.pendingCount--);
};
class Me extends Z {
  constructor(e, t, n) {
    var i, r;
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = s, this.logger = P.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = s.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, this.state = {}, this.queue = [], (r = (i = this.backend) == null ? void 0 : i.init) == null || r.call(i, n, s.backend, s);
  }
  queueLoad(e, t, n, s) {
    const i = {}, r = {}, l = {}, o = {};
    return e.forEach((u) => {
      let d = !0;
      t.forEach((h) => {
        const f = `${u}|${h}`;
        !n.reload && this.store.hasResourceBundle(u, h) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? r[f] === void 0 && (r[f] = !0) : (this.state[f] = 1, d = !1, r[f] === void 0 && (r[f] = !0), i[f] === void 0 && (i[f] = !0), o[h] === void 0 && (o[h] = !0)));
      }), d || (l[u] = !0);
    }), (Object.keys(i).length || Object.keys(r).length) && this.queue.push({
      pending: r,
      pendingCount: Object.keys(r).length,
      loaded: {},
      errors: [],
      callback: s
    }), {
      toLoad: Object.keys(i),
      pending: Object.keys(r),
      toLoadLanguages: Object.keys(l),
      toLoadNamespaces: Object.keys(o)
    };
  }
  loaded(e, t, n) {
    const s = e.split("|"), i = s[0], r = s[1];
    t && this.emit("failedLoading", i, r, t), !t && n && this.store.addResourceBundle(i, r, n, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && n && (this.state[e] = 0);
    const l = {};
    this.queue.forEach((o) => {
      $e(o.loaded, [i], r), Ke(o, e), t && o.errors.push(t), o.pendingCount === 0 && !o.done && (Object.keys(o.loaded).forEach((u) => {
        l[u] || (l[u] = {});
        const d = o.loaded[u];
        d.length && d.forEach((h) => {
          l[u][h] === void 0 && (l[u][h] = !0);
        });
      }), o.done = !0, o.errors.length ? o.callback(o.errors) : o.callback());
    }), this.emit("loaded", l), this.queue = this.queue.filter((o) => !o.done);
  }
  read(e, t, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, r = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length) return r(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: n,
        tried: s,
        wait: i,
        callback: r
      });
      return;
    }
    this.readingCalls++;
    const l = (u, d) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const h = this.waitingReads.shift();
        this.read(h.lng, h.ns, h.fcName, h.tried, h.wait, h.callback);
      }
      if (u && d && s < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, n, s + 1, i * 2, r);
        }, i);
        return;
      }
      r(u, d);
    }, o = this.backend[n].bind(this.backend);
    if (o.length === 2) {
      try {
        const u = o(e, t);
        u && typeof u.then == "function" ? u.then((d) => l(null, d)).catch(l) : l(null, u);
      } catch (u) {
        l(u);
      }
      return;
    }
    return o(e, t, l);
  }
  prepareLoading(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), s && s();
    c(e) && (e = this.languageUtils.toResolveHierarchy(e)), c(t) && (t = [t]);
    const i = this.queueLoad(e, t, n, s);
    if (!i.toLoad.length)
      return i.pending.length || s(), null;
    i.toLoad.forEach((r) => {
      this.loadOne(r);
    });
  }
  load(e, t, n) {
    this.prepareLoading(e, t, {}, n);
  }
  reload(e, t, n) {
    this.prepareLoading(e, t, {
      reload: !0
    }, n);
  }
  loadOne(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const n = e.split("|"), s = n[0], i = n[1];
    this.read(s, i, "read", void 0, void 0, (r, l) => {
      r && this.logger.warn(`${t}loading namespace ${i} for language ${s} failed`, r), !r && l && this.logger.log(`${t}loaded namespace ${i} for language ${s}`, l), this.loaded(e, r, l);
    });
  }
  saveMissing(e, t, n, s, i) {
    var o, u, d, h, f;
    let r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, l = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if ((u = (o = this.services) == null ? void 0 : o.utils) != null && u.hasLoadedNamespace && !((h = (d = this.services) == null ? void 0 : d.utils) != null && h.hasLoadedNamespace(t))) {
      this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(n == null || n === "")) {
      if ((f = this.backend) != null && f.create) {
        const m = {
          ...r,
          isUpdate: i
        }, g = this.backend.create.bind(this.backend);
        if (g.length < 6)
          try {
            let p;
            g.length === 5 ? p = g(e, t, n, s, m) : p = g(e, t, n, s), p && typeof p.then == "function" ? p.then((x) => l(null, x)).catch(l) : l(null, p);
          } catch (p) {
            l(p);
          }
        else
          g(e, t, n, s, l, m);
      }
      !e || !e[0] || this.store.addResource(e[0], t, n, s);
    }
  }
}
const pe = () => ({
  debug: !1,
  initAsync: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (a) => {
    let e = {};
    if (typeof a[1] == "object" && (e = a[1]), c(a[1]) && (e.defaultValue = a[1]), c(a[2]) && (e.tDescription = a[2]), typeof a[2] == "object" || typeof a[3] == "object") {
      const t = a[3] || a[2];
      Object.keys(t).forEach((n) => {
        e[n] = t[n];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (a) => a,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  }
}), me = (a) => {
  var e, t;
  return c(a.ns) && (a.ns = [a.ns]), c(a.fallbackLng) && (a.fallbackLng = [a.fallbackLng]), c(a.fallbackNS) && (a.fallbackNS = [a.fallbackNS]), ((t = (e = a.supportedLngs) == null ? void 0 : e.indexOf) == null ? void 0 : t.call(e, "cimode")) < 0 && (a.supportedLngs = a.supportedLngs.concat(["cimode"])), typeof a.initImmediate == "boolean" && (a.initAsync = a.initImmediate), a;
}, W = () => {
}, He = (a) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(a)).forEach((t) => {
    typeof a[t] == "function" && (a[t] = a[t].bind(a));
  });
};
class B extends Z {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = me(e), this.services = {}, this.logger = P, this.modules = {
      external: []
    }, He(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof t == "function" && (n = t, t = {}), t.defaultNS == null && t.ns && (c(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const s = pe();
    this.options = {
      ...s,
      ...this.options,
      ...me(t)
    }, this.options.interpolation = {
      ...s.interpolation,
      ...this.options.interpolation
    }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const i = (d) => d ? typeof d == "function" ? new d() : d : null;
    if (!this.options.isClone) {
      this.modules.logger ? P.init(i(this.modules.logger), this.options) : P.init(null, this.options);
      let d;
      this.modules.formatter ? d = this.modules.formatter : d = Ue;
      const h = new de(this.options);
      this.store = new le(this.options.resources, this.options);
      const f = this.services;
      f.logger = P, f.resourceStore = this.store, f.languageUtils = h, f.pluralResolver = new Ie(h, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), d && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (f.formatter = i(d), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new Te(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new Me(i(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(m) {
        for (var g = arguments.length, p = new Array(g > 1 ? g - 1 : 0), x = 1; x < g; x++)
          p[x - 1] = arguments[x];
        e.emit(m, ...p);
      }), this.modules.languageDetector && (f.languageDetector = i(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = i(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new G(this.services, this.options), this.translator.on("*", function(m) {
        for (var g = arguments.length, p = new Array(g > 1 ? g - 1 : 0), x = 1; x < g; x++)
          p[x - 1] = arguments[x];
        e.emit(m, ...p);
      }), this.modules.external.forEach((m) => {
        m.init && m.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, n || (n = W), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const d = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      d.length > 0 && d[0] !== "dev" && (this.options.lng = d[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((d) => {
      this[d] = function() {
        return e.store[d](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((d) => {
      this[d] = function() {
        return e.store[d](...arguments), e;
      };
    });
    const o = H(), u = () => {
      const d = (h, f) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), o.resolve(f), n(h, f);
      };
      if (this.languages && !this.isInitialized) return d(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, d);
    };
    return this.options.resources || !this.options.initAsync ? u() : setTimeout(u, 0), o;
  }
  loadResources(e) {
    var i, r;
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
    const s = c(e) ? e : this.language;
    if (typeof e == "function" && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
      if ((s == null ? void 0 : s.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return n();
      const l = [], o = (u) => {
        if (!u || u === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(u).forEach((h) => {
          h !== "cimode" && l.indexOf(h) < 0 && l.push(h);
        });
      };
      s ? o(s) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((d) => o(d)), (r = (i = this.options.preload) == null ? void 0 : i.forEach) == null || r.call(i, (u) => o(u)), this.services.backendConnector.load(l, this.options.ns, (u) => {
        !u && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), n(u);
      });
    } else
      n(null);
  }
  reloadResources(e, t, n) {
    const s = H();
    return typeof e == "function" && (n = e, e = void 0), typeof t == "function" && (n = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), n || (n = W), this.services.backendConnector.reload(e, t, (i) => {
      s.resolve(), n(i);
    }), s;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Oe.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
      for (let t = 0; t < this.languages.length; t++) {
        const n = this.languages[t];
        if (!(["cimode", "dev"].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
          this.resolvedLanguage = n;
          break;
        }
      }
  }
  changeLanguage(e, t) {
    var n = this;
    this.isLanguageChangingTo = e;
    const s = H();
    this.emit("languageChanging", e);
    const i = (o) => {
      this.language = o, this.languages = this.services.languageUtils.toResolveHierarchy(o), this.resolvedLanguage = void 0, this.setResolvedLanguage(o);
    }, r = (o, u) => {
      u ? this.isLanguageChangingTo === e && (i(u), this.translator.changeLanguage(u), this.isLanguageChangingTo = void 0, this.emit("languageChanged", u), this.logger.log("languageChanged", u)) : this.isLanguageChangingTo = void 0, s.resolve(function() {
        return n.t(...arguments);
      }), t && t(o, function() {
        return n.t(...arguments);
      });
    }, l = (o) => {
      var d, h;
      !e && !o && this.services.languageDetector && (o = []);
      const u = this.services.languageUtils.getBestMatchFromCodes(c(o) ? [o] : o);
      u && (this.language || i(u), this.translator.language || this.translator.changeLanguage(u), (h = (d = this.services.languageDetector) == null ? void 0 : d.cacheUserLanguage) == null || h.call(d, u)), this.loadResources(u, (f) => {
        r(f, u);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? l(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(l) : this.services.languageDetector.detect(l) : l(e), s;
  }
  getFixedT(e, t, n) {
    var s = this;
    const i = function(r, l) {
      let o;
      if (typeof l != "object") {
        for (var u = arguments.length, d = new Array(u > 2 ? u - 2 : 0), h = 2; h < u; h++)
          d[h - 2] = arguments[h];
        o = s.options.overloadTranslationOptionHandler([r, l].concat(d));
      } else
        o = {
          ...l
        };
      o.lng = o.lng || i.lng, o.lngs = o.lngs || i.lngs, o.ns = o.ns || i.ns, o.keyPrefix !== "" && (o.keyPrefix = o.keyPrefix || n || i.keyPrefix);
      const f = s.options.keySeparator || ".";
      let m;
      return o.keyPrefix && Array.isArray(r) ? m = r.map((g) => `${o.keyPrefix}${f}${g}`) : m = o.keyPrefix ? `${o.keyPrefix}${f}${r}` : r, s.t(m, o);
    };
    return c(e) ? i.lng = e : i.lngs = e, i.ns = t, i.keyPrefix = n, i;
  }
  t() {
    var s;
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return (s = this.translator) == null ? void 0 : s.translate(...t);
  }
  exists() {
    var s;
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return (s = this.translator) == null ? void 0 : s.exists(...t);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const n = t.lng || this.resolvedLanguage || this.languages[0], s = this.options ? this.options.fallbackLng : !1, i = this.languages[this.languages.length - 1];
    if (n.toLowerCase() === "cimode") return !0;
    const r = (l, o) => {
      const u = this.services.backendConnector.state[`${l}|${o}`];
      return u === -1 || u === 0 || u === 2;
    };
    if (t.precheck) {
      const l = t.precheck(this, r);
      if (l !== void 0) return l;
    }
    return !!(this.hasResourceBundle(n, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || r(n, e) && (!s || r(i, e)));
  }
  loadNamespaces(e, t) {
    const n = H();
    return this.options.ns ? (c(e) && (e = [e]), e.forEach((s) => {
      this.options.ns.indexOf(s) < 0 && this.options.ns.push(s);
    }), this.loadResources((s) => {
      n.resolve(), t && t(s);
    }), n) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const n = H();
    c(e) && (e = [e]);
    const s = this.options.preload || [], i = e.filter((r) => s.indexOf(r) < 0 && this.services.languageUtils.isSupportedCode(r));
    return i.length ? (this.options.preload = s.concat(i), this.loadResources((r) => {
      n.resolve(), t && t(r);
    }), n) : (t && t(), Promise.resolve());
  }
  dir(e) {
    var s, i;
    if (e || (e = this.resolvedLanguage || (((s = this.languages) == null ? void 0 : s.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], n = ((i = this.services) == null ? void 0 : i.languageUtils) || new de(pe());
    return t.indexOf(n.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new B(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
    const n = e.forkResourceStore;
    n && delete e.forkResourceStore;
    const s = {
      ...this.options,
      ...e,
      isClone: !0
    }, i = new B(s);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (i.logger = i.logger.clone(e)), ["store", "services", "language"].forEach((l) => {
      i[l] = this[l];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, n) {
      const l = Object.keys(this.store.data).reduce((o, u) => (o[u] = {
        ...this.store.data[u]
      }, Object.keys(o[u]).reduce((d, h) => (d[h] = {
        ...o[u][h]
      }, d), {})), {});
      i.store = new le(l, s), i.services.resourceStore = i.store;
    }
    return i.translator = new G(i.services, s), i.translator.on("*", function(l) {
      for (var o = arguments.length, u = new Array(o > 1 ? o - 1 : 0), d = 1; d < o; d++)
        u[d - 1] = arguments[d];
      i.emit(l, ...u);
    }), i.init(s, t), i.translator.options = s, i.translator.backendConnector.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, i;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const S = B.createInstance();
S.createInstance = B.createInstance;
S.createInstance;
S.dir;
S.init;
S.loadResources;
S.reloadResources;
S.use;
S.changeLanguage;
S.getFixedT;
S.t;
S.exists;
S.setDefaultNamespace;
S.hasLoadedNamespace;
S.loadNamespaces;
S.loadLanguages;
const {
  slice: ze,
  forEach: Be
} = [];
function Je(a) {
  return Be.call(ze.call(arguments, 1), (e) => {
    if (e)
      for (const t in e)
        a[t] === void 0 && (a[t] = e[t]);
  }), a;
}
const xe = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, We = function(a, e) {
  const n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    path: "/"
  }, s = encodeURIComponent(e);
  let i = `${a}=${s}`;
  if (n.maxAge > 0) {
    const r = n.maxAge - 0;
    if (Number.isNaN(r)) throw new Error("maxAge should be a Number");
    i += `; Max-Age=${Math.floor(r)}`;
  }
  if (n.domain) {
    if (!xe.test(n.domain))
      throw new TypeError("option domain is invalid");
    i += `; Domain=${n.domain}`;
  }
  if (n.path) {
    if (!xe.test(n.path))
      throw new TypeError("option path is invalid");
    i += `; Path=${n.path}`;
  }
  if (n.expires) {
    if (typeof n.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    i += `; Expires=${n.expires.toUTCString()}`;
  }
  if (n.httpOnly && (i += "; HttpOnly"), n.secure && (i += "; Secure"), n.sameSite)
    switch (typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite) {
      case !0:
        i += "; SameSite=Strict";
        break;
      case "lax":
        i += "; SameSite=Lax";
        break;
      case "strict":
        i += "; SameSite=Strict";
        break;
      case "none":
        i += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return i;
}, ye = {
  create(a, e, t, n) {
    let s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    t && (s.expires = /* @__PURE__ */ new Date(), s.expires.setTime(s.expires.getTime() + t * 60 * 1e3)), n && (s.domain = n), document.cookie = We(a, encodeURIComponent(e), s);
  },
  read(a) {
    const e = `${a}=`, t = document.cookie.split(";");
    for (let n = 0; n < t.length; n++) {
      let s = t[n];
      for (; s.charAt(0) === " "; ) s = s.substring(1, s.length);
      if (s.indexOf(e) === 0) return s.substring(e.length, s.length);
    }
    return null;
  },
  remove(a) {
    this.create(a, "", -1);
  }
};
var Qe = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(a) {
    let {
      lookupCookie: e
    } = a;
    if (e && typeof document < "u")
      return ye.read(e) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(a, e) {
    let {
      lookupCookie: t,
      cookieMinutes: n,
      cookieDomain: s,
      cookieOptions: i
    } = e;
    t && typeof document < "u" && ye.create(t, a, n, s, i);
  }
}, Ye = {
  name: "querystring",
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(a) {
    var n;
    let {
      lookupQuerystring: e
    } = a, t;
    if (typeof window < "u") {
      let {
        search: s
      } = window.location;
      !window.location.search && ((n = window.location.hash) == null ? void 0 : n.indexOf("?")) > -1 && (s = window.location.hash.substring(window.location.hash.indexOf("?")));
      const r = s.substring(1).split("&");
      for (let l = 0; l < r.length; l++) {
        const o = r[l].indexOf("=");
        o > 0 && r[l].substring(0, o) === e && (t = r[l].substring(o + 1));
      }
    }
    return t;
  }
};
let I = null;
const Se = () => {
  if (I !== null) return I;
  try {
    if (I = typeof window < "u" && window.localStorage !== null, !I)
      return !1;
    const a = "i18next.translate.boo";
    window.localStorage.setItem(a, "foo"), window.localStorage.removeItem(a);
  } catch {
    I = !1;
  }
  return I;
};
var qe = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(a) {
    let {
      lookupLocalStorage: e
    } = a;
    if (e && Se())
      return window.localStorage.getItem(e) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(a, e) {
    let {
      lookupLocalStorage: t
    } = e;
    t && Se() && window.localStorage.setItem(t, a);
  }
};
let T = null;
const be = () => {
  if (T !== null) return T;
  try {
    if (T = typeof window < "u" && window.sessionStorage !== null, !T)
      return !1;
    const a = "i18next.translate.boo";
    window.sessionStorage.setItem(a, "foo"), window.sessionStorage.removeItem(a);
  } catch {
    T = !1;
  }
  return T;
};
var Ge = {
  name: "sessionStorage",
  lookup(a) {
    let {
      lookupSessionStorage: e
    } = a;
    if (e && be())
      return window.sessionStorage.getItem(e) || void 0;
  },
  cacheUserLanguage(a, e) {
    let {
      lookupSessionStorage: t
    } = e;
    t && be() && window.sessionStorage.setItem(t, a);
  }
}, Ze = {
  name: "navigator",
  lookup(a) {
    const e = [];
    if (typeof navigator < "u") {
      const {
        languages: t,
        userLanguage: n,
        language: s
      } = navigator;
      if (t)
        for (let i = 0; i < t.length; i++)
          e.push(t[i]);
      n && e.push(n), s && e.push(s);
    }
    return e.length > 0 ? e : void 0;
  }
}, Xe = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(a) {
    let {
      htmlTag: e
    } = a, t;
    const n = e || (typeof document < "u" ? document.documentElement : null);
    return n && typeof n.getAttribute == "function" && (t = n.getAttribute("lang")), t;
  }
}, _e = {
  name: "path",
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(a) {
    var s;
    let {
      lookupFromPathIndex: e
    } = a;
    if (typeof window > "u") return;
    const t = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    return Array.isArray(t) ? (s = t[typeof e == "number" ? e : 0]) == null ? void 0 : s.replace("/", "") : void 0;
  }
}, et = {
  name: "subdomain",
  lookup(a) {
    var s, i;
    let {
      lookupFromSubdomainIndex: e
    } = a;
    const t = typeof e == "number" ? e + 1 : 1, n = typeof window < "u" && ((i = (s = window.location) == null ? void 0 : s.hostname) == null ? void 0 : i.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
    if (n)
      return n[t];
  }
};
let Le = !1;
try {
  document.cookie, Le = !0;
} catch {
}
const ve = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
Le || ve.splice(1, 1);
const tt = () => ({
  order: ve,
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  // cache user language
  caches: ["localStorage"],
  excludeCacheFor: ["cimode"],
  // cookieMinutes: 10,
  // cookieDomain: 'myDomain'
  convertDetectedLanguage: (a) => a
});
class nt {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(e, t);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      languageUtils: {}
    }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = e, this.options = Je(t, this.options || {}, tt()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (s) => s.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = n, this.addDetector(Qe), this.addDetector(Ye), this.addDetector(qe), this.addDetector(Ge), this.addDetector(Ze), this.addDetector(Xe), this.addDetector(_e), this.addDetector(et);
  }
  addDetector(e) {
    return this.detectors[e.name] = e, this;
  }
  detect() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order, t = [];
    return e.forEach((n) => {
      if (this.detectors[n]) {
        let s = this.detectors[n].lookup(this.options);
        s && typeof s == "string" && (s = [s]), s && (t = t.concat(s));
      }
    }), t = t.map((n) => this.options.convertDetectedLanguage(n)), this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes ? t : t.length > 0 ? t[0] : null;
  }
  cacheUserLanguage(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
    t && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach((n) => {
      this.detectors[n] && this.detectors[n].cacheUserLanguage(e, this.options);
    }));
  }
}
nt.type = "languageDetector";
export {
  nt as B,
  S as i
};

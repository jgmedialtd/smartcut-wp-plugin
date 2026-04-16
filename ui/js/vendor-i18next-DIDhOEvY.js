const d = (r) => typeof r == "string", H = () => {
  let r, e;
  const t = new Promise((s, i) => {
    r = s, e = i;
  });
  return t.resolve = r, t.reject = e, t;
}, re = (r) => r == null ? "" : String(r), Pe = (r, e, t) => {
  r.forEach((s) => {
    e[s] && (t[s] = e[s]);
  });
}, Re = /###/g, oe = (r) => r && r.includes("###") ? r.replace(Re, ".") : r, ae = (r) => !r || d(r), M = (r, e, t) => {
  const s = d(e) ? e.split(".") : e;
  let i = 0;
  for (; i < s.length - 1; ) {
    if (ae(r)) return {};
    const n = oe(s[i]);
    !r[n] && t && (r[n] = new t()), Object.prototype.hasOwnProperty.call(r, n) ? r = r[n] : r = {}, ++i;
  }
  return ae(r) ? {} : {
    obj: r,
    k: oe(s[i])
  };
}, le = (r, e, t) => {
  const {
    obj: s,
    k: i
  } = M(r, e, Object);
  if (s !== void 0 || e.length === 1) {
    s[i] = t;
    return;
  }
  let n = e[e.length - 1], o = e.slice(0, e.length - 1), a = M(r, o, Object);
  for (; a.obj === void 0 && o.length; )
    n = `${o[o.length - 1]}.${n}`, o = o.slice(0, o.length - 1), a = M(r, o, Object), a?.obj && typeof a.obj[`${a.k}.${n}`] < "u" && (a.obj = void 0);
  a.obj[`${a.k}.${n}`] = t;
}, Ne = (r, e, t, s) => {
  const {
    obj: i,
    k: n
  } = M(r, e, Object);
  i[n] = i[n] || [], i[n].push(t);
}, Q = (r, e) => {
  const {
    obj: t,
    k: s
  } = M(r, e);
  if (t && Object.prototype.hasOwnProperty.call(t, s))
    return t[s];
}, Fe = (r, e, t) => {
  const s = Q(r, t);
  return s !== void 0 ? s : Q(e, t);
}, we = (r, e, t) => {
  for (const s in e)
    s !== "__proto__" && s !== "constructor" && (s in r ? d(r[s]) || r[s] instanceof String || d(e[s]) || e[s] instanceof String ? t && (r[s] = e[s]) : we(r[s], e[s], t) : r[s] = e[s]);
  return r;
}, j = (r) => r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), Ee = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
}, je = (r) => d(r) ? r.replace(/[&<>"'\/]/g, (e) => Ee[e]) : r;
class De {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0)
      return t;
    const s = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, s), this.regExpQueue.push(e), s;
  }
}
const Ie = [" ", ",", "?", "!", ";"], Te = new De(20), Ae = (r, e, t) => {
  e = e || "", t = t || "";
  const s = Ie.filter((o) => !e.includes(o) && !t.includes(o));
  if (s.length === 0) return !0;
  const i = Te.getRegExp(`(${s.map((o) => o === "?" ? "\\?" : o).join("|")})`);
  let n = !i.test(r);
  if (!n) {
    const o = r.indexOf(t);
    o > 0 && !i.test(r.substring(0, o)) && (n = !0);
  }
  return n;
}, ee = (r, e, t = ".") => {
  if (!r) return;
  if (r[e])
    return Object.prototype.hasOwnProperty.call(r, e) ? r[e] : void 0;
  const s = e.split(t);
  let i = r;
  for (let n = 0; n < s.length; ) {
    if (!i || typeof i != "object")
      return;
    let o, a = "";
    for (let l = n; l < s.length; ++l)
      if (l !== n && (a += t), a += s[l], o = i[a], o !== void 0) {
        if (["string", "number", "boolean"].includes(typeof o) && l < s.length - 1)
          continue;
        n += l - n + 1;
        break;
      }
    i = o;
  }
  return i;
}, B = (r) => r?.replace(/_/g, "-"), Ke = {
  type: "logger",
  log(r) {
    this.output("log", r);
  },
  warn(r) {
    this.output("warn", r);
  },
  error(r) {
    this.output("error", r);
  },
  output(r, e) {
    console?.[r]?.apply?.(console, e);
  }
};
class _ {
  constructor(e, t = {}) {
    this.init(e, t);
  }
  init(e, t = {}) {
    this.prefix = t.prefix || "i18next:", this.logger = e || Ke, this.options = t, this.debug = t.debug;
  }
  log(...e) {
    return this.forward(e, "log", "", !0);
  }
  warn(...e) {
    return this.forward(e, "warn", "", !0);
  }
  error(...e) {
    return this.forward(e, "error", "");
  }
  deprecate(...e) {
    return this.forward(e, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, s, i) {
    return i && !this.debug ? null : (d(e[0]) && (e[0] = `${s}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new _(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new _(this.logger, e);
  }
}
var $ = new _();
class q {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((s) => {
      this.observers[s] || (this.observers[s] = /* @__PURE__ */ new Map());
      const i = this.observers[s].get(t) || 0;
      this.observers[s].set(t, i + 1);
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
  once(e, t) {
    const s = (...i) => {
      t(...i), this.off(e, s);
    };
    return this.on(e, s), this;
  }
  emit(e, ...t) {
    this.observers[e] && Array.from(this.observers[e].entries()).forEach(([i, n]) => {
      for (let o = 0; o < n; o++)
        i(...t);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([i, n]) => {
      for (let o = 0; o < n; o++)
        i(e, ...t);
    });
  }
}
class ue extends q {
  constructor(e, t = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.includes(e) || this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, s, i = {}) {
    const n = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, o = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a;
    e.includes(".") ? a = e.split(".") : (a = [e, t], s && (Array.isArray(s) ? a.push(...s) : d(s) && n ? a.push(...s.split(n)) : a.push(s)));
    const l = Q(this.data, a);
    return !l && !t && !s && e.includes(".") && (e = a[0], t = a[1], s = a.slice(2).join(".")), l || !o || !d(s) ? l : ee(this.data?.[e]?.[t], s, n);
  }
  addResource(e, t, s, i, n = {
    silent: !1
  }) {
    const o = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let a = [e, t];
    s && (a = a.concat(o ? s.split(o) : s)), e.includes(".") && (a = e.split("."), i = t, t = a[1]), this.addNamespaces(t), le(this.data, a, i), n.silent || this.emit("added", e, t, s, i);
  }
  addResources(e, t, s, i = {
    silent: !1
  }) {
    for (const n in s)
      (d(s[n]) || Array.isArray(s[n])) && this.addResource(e, t, n, s[n], {
        silent: !0
      });
    i.silent || this.emit("added", e, t, s);
  }
  addResourceBundle(e, t, s, i, n, o = {
    silent: !1,
    skipCopy: !1
  }) {
    let a = [e, t];
    e.includes(".") && (a = e.split("."), i = s, s = t, t = a[1]), this.addNamespaces(t);
    let l = Q(this.data, a) || {};
    o.skipCopy || (s = JSON.parse(JSON.stringify(s))), i ? we(l, s, n) : l = {
      ...l,
      ...s
    }, le(this.data, a, l), o.silent || this.emit("added", e, t, s);
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
    return !!(t && Object.keys(t) || []).find((i) => t[i] && Object.keys(t[i]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Le = {
  processors: {},
  addPostProcessor(r) {
    this.processors[r.name] = r;
  },
  handle(r, e, t, s, i) {
    return r.forEach((n) => {
      e = this.processors[n]?.process(e, t, s, i) ?? e;
    }), e;
  }
};
const ve = /* @__PURE__ */ Symbol("i18next/PATH_KEY");
function Ve() {
  const r = [], e = /* @__PURE__ */ Object.create(null);
  let t;
  return e.get = (s, i) => (t?.revoke?.(), i === ve ? r : (r.push(i), t = Proxy.revocable(s, e), t.proxy)), Proxy.revocable(/* @__PURE__ */ Object.create(null), e).proxy;
}
function K(r, e) {
  const {
    [ve]: t
  } = r(Ve()), s = e?.keySeparator ?? ".", i = e?.nsSeparator ?? ":";
  if (t.length > 1 && i) {
    const n = e?.ns, o = Array.isArray(n) ? n : null;
    if (o && o.length > 1 && o.slice(1).includes(t[0]))
      return `${t[0]}${i}${t.slice(1).join(s)}`;
  }
  return t.join(s);
}
const Z = (r) => !d(r) && typeof r != "boolean" && typeof r != "number";
class Y extends q {
  constructor(e, t = {}) {
    super(), Pe(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = $.create("translator"), this.checkedLoadedFor = {};
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e, t = {
    interpolation: {}
  }) {
    const s = {
      ...t
    };
    if (e == null) return !1;
    const i = this.resolve(e, s);
    if (i?.res === void 0) return !1;
    const n = Z(i.res);
    return !(s.returnObjects === !1 && n);
  }
  extractFromKey(e, t) {
    let s = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    s === void 0 && (s = ":");
    const i = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let n = t.ns || this.options.defaultNS || [];
    const o = s && e.includes(s), a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !Ae(e, s, i);
    if (o && !a) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: e,
          namespaces: d(n) ? [n] : n
        };
      const u = e.split(s);
      (s !== i || s === i && this.options.ns.includes(u[0])) && (n = u.shift()), e = u.join(i);
    }
    return {
      key: e,
      namespaces: d(n) ? [n] : n
    };
  }
  translate(e, t, s) {
    let i = typeof t == "object" ? {
      ...t
    } : t;
    if (typeof i != "object" && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), typeof i == "object" && (i = {
      ...i
    }), i || (i = {}), e == null) return "";
    typeof e == "function" && (e = K(e, {
      ...this.options,
      ...i
    })), Array.isArray(e) || (e = [String(e)]), e = e.map((S) => typeof S == "function" ? K(S, {
      ...this.options,
      ...i
    }) : String(S));
    const n = i.returnDetails !== void 0 ? i.returnDetails : this.options.returnDetails, o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, {
      key: a,
      namespaces: l
    } = this.extractFromKey(e[e.length - 1], i), u = l[l.length - 1];
    let f = i.nsSeparator !== void 0 ? i.nsSeparator : this.options.nsSeparator;
    f === void 0 && (f = ":");
    const c = i.lng || this.language, h = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (c?.toLowerCase() === "cimode")
      return h ? n ? {
        res: `${u}${f}${a}`,
        usedKey: a,
        exactUsedKey: a,
        usedLng: c,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(i)
      } : `${u}${f}${a}` : n ? {
        res: a,
        usedKey: a,
        exactUsedKey: a,
        usedLng: c,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(i)
      } : a;
    const p = this.resolve(e, i);
    let g = p?.res;
    const m = p?.usedKey || a, x = p?.exactUsedKey || a, v = ["[object Number]", "[object Function]", "[object RegExp]"], y = i.joinArrays !== void 0 ? i.joinArrays : this.options.joinArrays, F = !this.i18nFormat || this.i18nFormat.handleAsObject, L = i.count !== void 0 && !d(i.count), R = Y.hasDefaultValue(i), D = L ? this.pluralResolver.getSuffix(c, i.count, i) : "", I = i.ordinal && L ? this.pluralResolver.getSuffix(c, i.count, {
      ordinal: !1
    }) : "", te = L && !i.ordinal && i.count === 0, N = te && i[`defaultValue${this.options.pluralSeparator}zero`] || i[`defaultValue${D}`] || i[`defaultValue${I}`] || i.defaultValue;
    let k = g;
    F && !g && R && (k = N);
    const Ce = Z(k), $e = Object.prototype.toString.apply(k);
    if (F && k && Ce && !v.includes($e) && !(d(y) && Array.isArray(k))) {
      if (!i.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const S = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(m, k, {
          ...i,
          ns: l
        }) : `key '${a} (${this.language})' returned an object instead of string.`;
        return n ? (p.res = S, p.usedParams = this.getUsedParamsDetails(i), p) : S;
      }
      if (o) {
        const S = Array.isArray(k), O = S ? [] : {}, se = S ? x : m;
        for (const C in k)
          if (Object.prototype.hasOwnProperty.call(k, C)) {
            const P = `${se}${o}${C}`;
            R && !g ? O[C] = this.translate(P, {
              ...i,
              defaultValue: Z(N) ? N[C] : void 0,
              joinArrays: !1,
              ns: l
            }) : O[C] = this.translate(P, {
              ...i,
              joinArrays: !1,
              ns: l
            }), O[C] === P && (O[C] = k[C]);
          }
        g = O;
      }
    } else if (F && d(y) && Array.isArray(g))
      g = g.join(y), g && (g = this.extendTranslation(g, e, i, s));
    else {
      let S = !1, O = !1;
      !this.isValidLookup(g) && R && (S = !0, g = N), this.isValidLookup(g) || (O = !0, g = a);
      const C = (i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && O ? void 0 : g, P = R && N !== g && this.options.updateMissing;
      if (O || S || P) {
        if (this.logger.log(P ? "updateKey" : "missingKey", c, u, a, P ? N : g), o) {
          const w = this.resolve(a, {
            ...i,
            keySeparator: !1
          });
          w && w.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let V = [];
        const J = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && J && J[0])
          for (let w = 0; w < J.length; w++)
            V.push(J[w]);
        else this.options.saveMissingTo === "all" ? V = this.languageUtils.toResolveHierarchy(i.lng || this.language) : V.push(i.lng || this.language);
        const ie = (w, E, U) => {
          const ne = R && U !== g ? U : C;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(w, u, E, ne, P, i) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(w, u, E, ne, P, i), this.emit("missingKey", w, u, E, g);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && L ? V.forEach((w) => {
          const E = this.pluralResolver.getSuffixes(w, i);
          te && i[`defaultValue${this.options.pluralSeparator}zero`] && !E.includes(`${this.options.pluralSeparator}zero`) && E.push(`${this.options.pluralSeparator}zero`), E.forEach((U) => {
            ie([w], a + U, i[`defaultValue${U}`] || N);
          });
        }) : ie(V, a, N));
      }
      g = this.extendTranslation(g, e, i, p, s), O && g === a && this.options.appendNamespaceToMissingKey && (g = `${u}${f}${a}`), (O || S) && this.options.parseMissingKeyHandler && (g = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}${f}${a}` : a, S ? g : void 0, i));
    }
    return n ? (p.res = g, p.usedParams = this.getUsedParamsDetails(i), p) : g;
  }
  extendTranslation(e, t, s, i, n) {
    if (this.i18nFormat?.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...s
      }, s.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
        resolved: i
      });
    else if (!s.skipInterpolation) {
      s.interpolation && this.interpolator.init({
        ...s,
        interpolation: {
          ...this.options.interpolation,
          ...s.interpolation
        }
      });
      const l = d(e) && (s?.interpolation?.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let u;
      if (l) {
        const c = e.match(this.interpolator.nestingRegexp);
        u = c && c.length;
      }
      let f = s.replace && !d(s.replace) ? s.replace : s;
      if (this.options.interpolation.defaultVariables && (f = {
        ...this.options.interpolation.defaultVariables,
        ...f
      }), e = this.interpolator.interpolate(e, f, s.lng || this.language || i.usedLng, s), l) {
        const c = e.match(this.interpolator.nestingRegexp), h = c && c.length;
        u < h && (s.nest = !1);
      }
      !s.lng && i && i.res && (s.lng = this.language || i.usedLng), s.nest !== !1 && (e = this.interpolator.nest(e, (...c) => n?.[0] === c[0] && !s.context ? (this.logger.warn(`It seems you are nesting recursively key: ${c[0]} in key: ${t[0]}`), null) : this.translate(...c, t), s)), s.interpolation && this.interpolator.reset();
    }
    const o = s.postProcess || this.options.postProcess, a = d(o) ? [o] : o;
    return e != null && a?.length && s.applyPostProcessor !== !1 && (e = Le.handle(a, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...i,
        usedParams: this.getUsedParamsDetails(s)
      },
      ...s
    } : s, this)), e;
  }
  resolve(e, t = {}) {
    let s, i, n, o, a;
    return d(e) && (e = [e]), Array.isArray(e) && (e = e.map((l) => typeof l == "function" ? K(l, {
      ...this.options,
      ...t
    }) : l)), e.forEach((l) => {
      if (this.isValidLookup(s)) return;
      const u = this.extractFromKey(l, t), f = u.key;
      i = f;
      let c = u.namespaces;
      this.options.fallbackNS && (c = c.concat(this.options.fallbackNS));
      const h = t.count !== void 0 && !d(t.count), p = h && !t.ordinal && t.count === 0, g = t.context !== void 0 && (d(t.context) || typeof t.context == "number") && t.context !== "", m = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      c.forEach((x) => {
        this.isValidLookup(s) || (a = x, !this.checkedLoadedFor[`${m[0]}-${x}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(a) && (this.checkedLoadedFor[`${m[0]}-${x}`] = !0, this.logger.warn(`key "${i}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach((v) => {
          if (this.isValidLookup(s)) return;
          o = v;
          const y = [f];
          if (this.i18nFormat?.addLookupKeys)
            this.i18nFormat.addLookupKeys(y, f, v, x, t);
          else {
            let L;
            h && (L = this.pluralResolver.getSuffix(v, t.count, t));
            const R = `${this.options.pluralSeparator}zero`, D = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (h && (t.ordinal && L.startsWith(D) && y.push(f + L.replace(D, this.options.pluralSeparator)), y.push(f + L), p && y.push(f + R)), g) {
              const I = `${f}${this.options.contextSeparator || "_"}${t.context}`;
              y.push(I), h && (t.ordinal && L.startsWith(D) && y.push(I + L.replace(D, this.options.pluralSeparator)), y.push(I + L), p && y.push(I + R));
            }
          }
          let F;
          for (; F = y.pop(); )
            this.isValidLookup(s) || (n = F, s = this.getResource(v, x, F, t));
        }));
      });
    }), {
      res: s,
      usedKey: i,
      exactUsedKey: n,
      usedLng: o,
      usedNS: a
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, s, i = {}) {
    return this.i18nFormat?.getResource ? this.i18nFormat.getResource(e, t, s, i) : this.resourceStore.getResource(e, t, s, i);
  }
  getUsedParamsDetails(e = {}) {
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], s = e.replace && !d(e.replace);
    let i = s ? e.replace : e;
    if (s && typeof e.count < "u" && (i.count = e.count), this.options.interpolation.defaultVariables && (i = {
      ...this.options.interpolation.defaultVariables,
      ...i
    }), !s) {
      i = {
        ...i
      };
      for (const n of t)
        delete i[n];
    }
    return i;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const s in e)
      if (Object.prototype.hasOwnProperty.call(e, s) && s.startsWith(t) && e[s] !== void 0)
        return !0;
    return !1;
  }
}
class ce {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = $.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = B(e), !e || !e.includes("-")) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = B(e), !e || !e.includes("-")) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (d(e) && e.includes("-")) {
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
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.includes(e);
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return e.forEach((s) => {
      if (t) return;
      const i = this.formatLanguageCode(s);
      (!this.options.supportedLngs || this.isSupportedCode(i)) && (t = i);
    }), !t && this.options.supportedLngs && e.forEach((s) => {
      if (t) return;
      const i = this.getScriptPartFromCode(s);
      if (this.isSupportedCode(i)) return t = i;
      const n = this.getLanguagePartFromCode(s);
      if (this.isSupportedCode(n)) return t = n;
      t = this.options.supportedLngs.find((o) => o === n ? !0 : !o.includes("-") && !n.includes("-") ? !1 : !!(o.includes("-") && !n.includes("-") && o.slice(0, o.indexOf("-")) === n || o.startsWith(n) && n.length > 1));
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(t)), d(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let s = e[t];
    return s || (s = e[this.getScriptPartFromCode(t)]), s || (s = e[this.formatLanguageCode(t)]), s || (s = e[this.getLanguagePartFromCode(t)]), s || (s = e.default), s || [];
  }
  toResolveHierarchy(e, t) {
    const s = this.getFallbackCodes((t === !1 ? [] : t) || this.options.fallbackLng || [], e), i = [], n = (o) => {
      o && (this.isSupportedCode(o) ? i.push(o) : this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`));
    };
    return d(e) && (e.includes("-") || e.includes("_")) ? (this.options.load !== "languageOnly" && n(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && n(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && n(this.getLanguagePartFromCode(e))) : d(e) && n(this.formatLanguageCode(e)), s.forEach((o) => {
      i.includes(o) || n(this.formatLanguageCode(o));
    }), i;
  }
}
const fe = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, he = {
  select: (r) => r === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class Ue {
  constructor(e, t = {}) {
    this.languageUtils = e, this.options = t, this.logger = $.create("pluralResolver"), this.pluralRulesCache = {};
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e, t = {}) {
    const s = B(e === "dev" ? "en" : e), i = t.ordinal ? "ordinal" : "cardinal", n = JSON.stringify({
      cleanedCode: s,
      type: i
    });
    if (n in this.pluralRulesCache)
      return this.pluralRulesCache[n];
    let o;
    try {
      o = new Intl.PluralRules(s, {
        type: i
      });
    } catch {
      if (typeof Intl > "u")
        return this.logger.error("No Intl support, please use an Intl polyfill!"), he;
      if (!e.match(/-|_/)) return he;
      const l = this.languageUtils.getLanguagePartFromCode(e);
      o = this.getRule(l, t);
    }
    return this.pluralRulesCache[n] = o, o;
  }
  needsPlural(e, t = {}) {
    let s = this.getRule(e, t);
    return s || (s = this.getRule("dev", t)), s?.resolvedOptions().pluralCategories.length > 1;
  }
  getPluralFormsOfKey(e, t, s = {}) {
    return this.getSuffixes(e, s).map((i) => `${t}${i}`);
  }
  getSuffixes(e, t = {}) {
    let s = this.getRule(e, t);
    return s || (s = this.getRule("dev", t)), s ? s.resolvedOptions().pluralCategories.sort((i, n) => fe[i] - fe[n]).map((i) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : [];
  }
  getSuffix(e, t, s = {}) {
    const i = this.getRule(e, s);
    return i ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, s));
  }
}
const de = (r, e, t, s = ".", i = !0) => {
  let n = Fe(r, e, t);
  return !n && i && d(t) && (n = ee(r, t, s), n === void 0 && (n = ee(e, t, s))), n;
}, G = (r) => r.replace(/\$/g, "$$$$");
class ge {
  constructor(e = {}) {
    this.logger = $.create("interpolator"), this.options = e, this.format = e?.interpolation?.format || ((t) => t), this.init(e);
  }
  init(e = {}) {
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: s,
      useRawValueToEscape: i,
      prefix: n,
      prefixEscaped: o,
      suffix: a,
      suffixEscaped: l,
      formatSeparator: u,
      unescapeSuffix: f,
      unescapePrefix: c,
      nestingPrefix: h,
      nestingPrefixEscaped: p,
      nestingSuffix: g,
      nestingSuffixEscaped: m,
      nestingOptionsSeparator: x,
      maxReplaces: v,
      alwaysFormat: y
    } = e.interpolation;
    this.escape = t !== void 0 ? t : je, this.escapeValue = s !== void 0 ? s : !0, this.useRawValueToEscape = i !== void 0 ? i : !1, this.prefix = n ? j(n) : o || "{{", this.suffix = a ? j(a) : l || "}}", this.formatSeparator = u || ",", this.unescapePrefix = f ? "" : c || "-", this.unescapeSuffix = this.unescapePrefix ? "" : f || "", this.nestingPrefix = h ? j(h) : p || j("$t("), this.nestingSuffix = g ? j(g) : m || j(")"), this.nestingOptionsSeparator = x || ",", this.maxReplaces = v || 1e3, this.alwaysFormat = y !== void 0 ? y : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, s) => t?.source === s ? (t.lastIndex = 0, t) : new RegExp(s, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(e, t, s, i) {
    let n, o, a;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (p) => {
      if (!p.includes(this.formatSeparator)) {
        const v = de(t, l, p, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(v, void 0, s, {
          ...i,
          ...t,
          interpolationkey: p
        }) : v;
      }
      const g = p.split(this.formatSeparator), m = g.shift().trim(), x = g.join(this.formatSeparator).trim();
      return this.format(de(t, l, m, this.options.keySeparator, this.options.ignoreJSONStructure), x, s, {
        ...i,
        ...t,
        interpolationkey: m
      });
    };
    this.resetRegExp();
    const f = i?.missingInterpolationHandler || this.options.missingInterpolationHandler, c = i?.interpolation?.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (p) => G(p)
    }, {
      regex: this.regexp,
      safeValue: (p) => this.escapeValue ? G(this.escape(p)) : G(p)
    }].forEach((p) => {
      for (a = 0; n = p.regex.exec(e); ) {
        const g = n[1].trim();
        if (o = u(g), o === void 0)
          if (typeof f == "function") {
            const x = f(e, n, i);
            o = d(x) ? x : "";
          } else if (i && Object.prototype.hasOwnProperty.call(i, g))
            o = "";
          else if (c) {
            o = n[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${g} for interpolating ${e}`), o = "";
        else !d(o) && !this.useRawValueToEscape && (o = re(o));
        const m = p.safeValue(o);
        if (e = e.replace(n[0], m), c ? (p.regex.lastIndex += o.length, p.regex.lastIndex -= n[0].length) : p.regex.lastIndex = 0, a++, a >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t, s = {}) {
    let i, n, o;
    const a = (l, u) => {
      const f = this.nestingOptionsSeparator;
      if (!l.includes(f)) return l;
      const c = l.split(new RegExp(`${j(f)}[ ]*{`));
      let h = `{${c[1]}`;
      l = c[0], h = this.interpolate(h, o);
      const p = h.match(/'/g), g = h.match(/"/g);
      ((p?.length ?? 0) % 2 === 0 && !g || (g?.length ?? 0) % 2 !== 0) && (h = h.replace(/'/g, '"'));
      try {
        o = JSON.parse(h), u && (o = {
          ...u,
          ...o
        });
      } catch (m) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, m), `${l}${f}${h}`;
      }
      return o.defaultValue && o.defaultValue.includes(this.prefix) && delete o.defaultValue, l;
    };
    for (; i = this.nestingRegexp.exec(e); ) {
      let l = [];
      o = {
        ...s
      }, o = o.replace && !d(o.replace) ? o.replace : o, o.applyPostProcessor = !1, delete o.defaultValue;
      const u = /{.*}/.test(i[1]) ? i[1].lastIndexOf("}") + 1 : i[1].indexOf(this.formatSeparator);
      if (u !== -1 && (l = i[1].slice(u).split(this.formatSeparator).map((f) => f.trim()).filter(Boolean), i[1] = i[1].slice(0, u)), n = t(a.call(this, i[1].trim(), o), o), n && i[0] === e && !d(n)) return n;
      d(n) || (n = re(n)), n || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`), n = ""), l.length && (n = l.reduce((f, c) => this.format(f, c, s.lng, {
        ...s,
        interpolationkey: i[1].trim()
      }), n.trim())), e = e.replace(i[0], n), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const He = (r) => {
  let e = r.toLowerCase().trim();
  const t = {};
  if (r.includes("(")) {
    const s = r.split("(");
    e = s[0].toLowerCase().trim();
    const i = s[1].slice(0, -1);
    e === "currency" && !i.includes(":") ? t.currency || (t.currency = i.trim()) : e === "relativetime" && !i.includes(":") ? t.range || (t.range = i.trim()) : i.split(";").forEach((o) => {
      if (o) {
        const [a, ...l] = o.split(":"), u = l.join(":").trim().replace(/^'+|'+$/g, ""), f = a.trim();
        t[f] || (t[f] = u), u === "false" && (t[f] = !1), u === "true" && (t[f] = !0), isNaN(u) || (t[f] = parseInt(u, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, pe = (r) => {
  const e = {};
  return (t, s, i) => {
    let n = i;
    i && i.interpolationkey && i.formatParams && i.formatParams[i.interpolationkey] && i[i.interpolationkey] && (n = {
      ...n,
      [i.interpolationkey]: void 0
    });
    const o = s + JSON.stringify(n);
    let a = e[o];
    return a || (a = r(B(s), i), e[o] = a), a(t);
  };
}, Me = (r) => (e, t, s) => r(B(t), s)(e);
class ze {
  constructor(e = {}) {
    this.logger = $.create("formatter"), this.options = e, this.init(e);
  }
  init(e, t = {
    interpolation: {}
  }) {
    this.formatSeparator = t.interpolation.formatSeparator || ",";
    const s = t.cacheInBuiltFormats ? pe : Me;
    this.formats = {
      number: s((i, n) => {
        const o = new Intl.NumberFormat(i, {
          ...n
        });
        return (a) => o.format(a);
      }),
      currency: s((i, n) => {
        const o = new Intl.NumberFormat(i, {
          ...n,
          style: "currency"
        });
        return (a) => o.format(a);
      }),
      datetime: s((i, n) => {
        const o = new Intl.DateTimeFormat(i, {
          ...n
        });
        return (a) => o.format(a);
      }),
      relativetime: s((i, n) => {
        const o = new Intl.RelativeTimeFormat(i, {
          ...n
        });
        return (a) => o.format(a, n.range || "day");
      }),
      list: s((i, n) => {
        const o = new Intl.ListFormat(i, {
          ...n
        });
        return (a) => o.format(a);
      })
    };
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = pe(t);
  }
  format(e, t, s, i = {}) {
    if (!t || e == null) return e;
    const n = t.split(this.formatSeparator);
    if (n.length > 1 && n[0].indexOf("(") > 1 && !n[0].includes(")") && n.find((a) => a.includes(")"))) {
      const a = n.findIndex((l) => l.includes(")"));
      n[0] = [n[0], ...n.splice(1, a)].join(this.formatSeparator);
    }
    return n.reduce((a, l) => {
      const {
        formatName: u,
        formatOptions: f
      } = He(l);
      if (this.formats[u]) {
        let c = a;
        try {
          const h = i?.formatParams?.[i.interpolationkey] || {}, p = h.locale || h.lng || i.locale || i.lng || s;
          c = this.formats[u](a, p, {
            ...f,
            ...i,
            ...h
          });
        } catch (h) {
          this.logger.warn(h);
        }
        return c;
      } else
        this.logger.warn(`there was no format function for ${u}`);
      return a;
    }, e);
  }
}
const Be = (r, e) => {
  r.pending[e] !== void 0 && (delete r.pending[e], r.pendingCount--);
};
class Je extends q {
  constructor(e, t, s, i = {}) {
    super(), this.backend = e, this.store = t, this.services = s, this.languageUtils = s.languageUtils, this.options = i, this.logger = $.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(s, i.backend, i);
  }
  queueLoad(e, t, s, i) {
    const n = {}, o = {}, a = {}, l = {};
    return e.forEach((u) => {
      let f = !0;
      t.forEach((c) => {
        const h = `${u}|${c}`;
        !s.reload && this.store.hasResourceBundle(u, c) ? this.state[h] = 2 : this.state[h] < 0 || (this.state[h] === 1 ? o[h] === void 0 && (o[h] = !0) : (this.state[h] = 1, f = !1, o[h] === void 0 && (o[h] = !0), n[h] === void 0 && (n[h] = !0), l[c] === void 0 && (l[c] = !0)));
      }), f || (a[u] = !0);
    }), (Object.keys(n).length || Object.keys(o).length) && this.queue.push({
      pending: o,
      pendingCount: Object.keys(o).length,
      loaded: {},
      errors: [],
      callback: i
    }), {
      toLoad: Object.keys(n),
      pending: Object.keys(o),
      toLoadLanguages: Object.keys(a),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(e, t, s) {
    const i = e.split("|"), n = i[0], o = i[1];
    t && this.emit("failedLoading", n, o, t), !t && s && this.store.addResourceBundle(n, o, s, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && s && (this.state[e] = 0);
    const a = {};
    this.queue.forEach((l) => {
      Ne(l.loaded, [n], o), Be(l, e), t && l.errors.push(t), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((u) => {
        a[u] || (a[u] = {});
        const f = l.loaded[u];
        f.length && f.forEach((c) => {
          a[u][c] === void 0 && (a[u][c] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", a), this.queue = this.queue.filter((l) => !l.done);
  }
  read(e, t, s, i = 0, n = this.retryTimeout, o) {
    if (!e.length) return o(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: s,
        tried: i,
        wait: n,
        callback: o
      });
      return;
    }
    this.readingCalls++;
    const a = (u, f) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const c = this.waitingReads.shift();
        this.read(c.lng, c.ns, c.fcName, c.tried, c.wait, c.callback);
      }
      if (u && f && i < this.maxRetries) {
        setTimeout(() => {
          this.read(e, t, s, i + 1, n * 2, o);
        }, n);
        return;
      }
      o(u, f);
    }, l = this.backend[s].bind(this.backend);
    if (l.length === 2) {
      try {
        const u = l(e, t);
        u && typeof u.then == "function" ? u.then((f) => a(null, f)).catch(a) : a(null, u);
      } catch (u) {
        a(u);
      }
      return;
    }
    return l(e, t, a);
  }
  prepareLoading(e, t, s = {}, i) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
    d(e) && (e = this.languageUtils.toResolveHierarchy(e)), d(t) && (t = [t]);
    const n = this.queueLoad(e, t, s, i);
    if (!n.toLoad.length)
      return n.pending.length || i(), null;
    n.toLoad.forEach((o) => {
      this.loadOne(o);
    });
  }
  load(e, t, s) {
    this.prepareLoading(e, t, {}, s);
  }
  reload(e, t, s) {
    this.prepareLoading(e, t, {
      reload: !0
    }, s);
  }
  loadOne(e, t = "") {
    const s = e.split("|"), i = s[0], n = s[1];
    this.read(i, n, "read", void 0, void 0, (o, a) => {
      o && this.logger.warn(`${t}loading namespace ${n} for language ${i} failed`, o), !o && a && this.logger.log(`${t}loaded namespace ${n} for language ${i}`, a), this.loaded(e, o, a);
    });
  }
  saveMissing(e, t, s, i, n, o = {}, a = () => {
  }) {
    if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(t)) {
      this.logger.warn(`did not save key "${s}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(s == null || s === "")) {
      if (this.backend?.create) {
        const l = {
          ...o,
          isUpdate: n
        }, u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let f;
            u.length === 5 ? f = u(e, t, s, i, l) : f = u(e, t, s, i), f && typeof f.then == "function" ? f.then((c) => a(null, c)).catch(a) : a(null, f);
          } catch (f) {
            a(f);
          }
        else
          u(e, t, s, i, a, l);
      }
      !e || !e[0] || this.store.addResource(e[0], t, s, i);
    }
  }
}
const X = () => ({
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
  overloadTranslationOptionHandler: (r) => {
    let e = {};
    if (typeof r[1] == "object" && (e = r[1]), d(r[1]) && (e.defaultValue = r[1]), d(r[2]) && (e.tDescription = r[2]), typeof r[2] == "object" || typeof r[3] == "object") {
      const t = r[3] || r[2];
      Object.keys(t).forEach((s) => {
        e[s] = t[s];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  },
  cacheInBuiltFormats: !0
}), me = (r) => (d(r.ns) && (r.ns = [r.ns]), d(r.fallbackLng) && (r.fallbackLng = [r.fallbackLng]), d(r.fallbackNS) && (r.fallbackNS = [r.fallbackNS]), r.supportedLngs && !r.supportedLngs.includes("cimode") && (r.supportedLngs = r.supportedLngs.concat(["cimode"])), r), W = () => {
}, We = (r) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((t) => {
    typeof r[t] == "function" && (r[t] = r[t].bind(r));
  });
};
class z extends q {
  constructor(e = {}, t) {
    if (super(), this.options = me(e), this.services = {}, this.logger = $, this.modules = {
      external: []
    }, We(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init(e = {}, t) {
    this.isInitializing = !0, typeof e == "function" && (t = e, e = {}), e.defaultNS == null && e.ns && (d(e.ns) ? e.defaultNS = e.ns : e.ns.includes("translation") || (e.defaultNS = e.ns[0]));
    const s = X();
    this.options = {
      ...s,
      ...this.options,
      ...me(e)
    }, this.options.interpolation = {
      ...s.interpolation,
      ...this.options.interpolation
    }, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator), typeof this.options.overloadTranslationOptionHandler != "function" && (this.options.overloadTranslationOptionHandler = s.overloadTranslationOptionHandler);
    const i = (u) => u ? typeof u == "function" ? new u() : u : null;
    if (!this.options.isClone) {
      this.modules.logger ? $.init(i(this.modules.logger), this.options) : $.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : u = ze;
      const f = new ce(this.options);
      this.store = new ue(this.options.resources, this.options);
      const c = this.services;
      c.logger = $, c.resourceStore = this.store, c.languageUtils = f, c.pluralResolver = new Ue(f, {
        prepend: this.options.pluralSeparator
      }), u && (c.formatter = i(u), c.formatter.init && c.formatter.init(c, this.options), this.options.interpolation.format = c.formatter.format.bind(c.formatter)), c.interpolator = new ge(this.options), c.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, c.backendConnector = new Je(i(this.modules.backend), c.resourceStore, c, this.options), c.backendConnector.on("*", (h, ...p) => {
        this.emit(h, ...p);
      }), this.modules.languageDetector && (c.languageDetector = i(this.modules.languageDetector), c.languageDetector.init && c.languageDetector.init(c, this.options.detection, this.options)), this.modules.i18nFormat && (c.i18nFormat = i(this.modules.i18nFormat), c.i18nFormat.init && c.i18nFormat.init(this)), this.translator = new Y(this.services, this.options), this.translator.on("*", (h, ...p) => {
        this.emit(h, ...p);
      }), this.modules.external.forEach((h) => {
        h.init && h.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, t || (t = W), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      u.length > 0 && u[0] !== "dev" && (this.options.lng = u[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((u) => {
      this[u] = (...f) => this.store[u](...f);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((u) => {
      this[u] = (...f) => (this.store[u](...f), this);
    });
    const a = H(), l = () => {
      const u = (f, c) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), a.resolve(c), t(f, c);
      };
      if (this.languages && !this.isInitialized) return u(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, u);
    };
    return this.options.resources || !this.options.initAsync ? l() : setTimeout(l, 0), a;
  }
  loadResources(e, t = W) {
    let s = t;
    const i = d(e) ? e : this.language;
    if (typeof e == "function" && (s = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (i?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return s();
      const n = [], o = (a) => {
        if (!a || a === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(a).forEach((u) => {
          u !== "cimode" && (n.includes(u) || n.push(u));
        });
      };
      i ? o(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => o(l)), this.options.preload?.forEach?.((a) => o(a)), this.services.backendConnector.load(n, this.options.ns, (a) => {
        !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), s(a);
      });
    } else
      s(null);
  }
  reloadResources(e, t, s) {
    const i = H();
    return typeof e == "function" && (s = e, e = void 0), typeof t == "function" && (s = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), s || (s = W), this.services.backendConnector.reload(e, t, (n) => {
      i.resolve(), s(n);
    }), i;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Le.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !["cimode", "dev"].includes(e)) {
      for (let t = 0; t < this.languages.length; t++) {
        const s = this.languages[t];
        if (!["cimode", "dev"].includes(s) && this.store.hasLanguageSomeTranslations(s)) {
          this.resolvedLanguage = s;
          break;
        }
      }
      !this.resolvedLanguage && !this.languages.includes(e) && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e));
    }
  }
  changeLanguage(e, t) {
    this.isLanguageChangingTo = e;
    const s = H();
    this.emit("languageChanging", e);
    const i = (a) => {
      this.language = a, this.languages = this.services.languageUtils.toResolveHierarchy(a), this.resolvedLanguage = void 0, this.setResolvedLanguage(a);
    }, n = (a, l) => {
      l ? this.isLanguageChangingTo === e && (i(l), this.translator.changeLanguage(l), this.isLanguageChangingTo = void 0, this.emit("languageChanged", l), this.logger.log("languageChanged", l)) : this.isLanguageChangingTo = void 0, s.resolve((...u) => this.t(...u)), t && t(a, (...u) => this.t(...u));
    }, o = (a) => {
      !e && !a && this.services.languageDetector && (a = []);
      const l = d(a) ? a : a && a[0], u = this.store.hasLanguageSomeTranslations(l) ? l : this.services.languageUtils.getBestMatchFromCodes(d(a) ? [a] : a);
      u && (this.language || i(u), this.translator.language || this.translator.changeLanguage(u), this.services.languageDetector?.cacheUserLanguage?.(u)), this.loadResources(u, (f) => {
        n(f, u);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? o(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(e), s;
  }
  getFixedT(e, t, s) {
    const i = (n, o, ...a) => {
      let l;
      typeof o != "object" ? l = this.options.overloadTranslationOptionHandler([n, o].concat(a)) : l = {
        ...o
      }, l.lng = l.lng || i.lng, l.lngs = l.lngs || i.lngs, l.ns = l.ns || i.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || s || i.keyPrefix);
      const u = {
        ...this.options,
        ...l
      };
      typeof l.keyPrefix == "function" && (l.keyPrefix = K(l.keyPrefix, u));
      const f = this.options.keySeparator || ".";
      let c;
      return l.keyPrefix && Array.isArray(n) ? c = n.map((h) => (typeof h == "function" && (h = K(h, u)), `${l.keyPrefix}${f}${h}`)) : (typeof n == "function" && (n = K(n, u)), c = l.keyPrefix ? `${l.keyPrefix}${f}${n}` : n), this.t(c, l);
    };
    return d(e) ? i.lng = e : i.lngs = e, i.ns = t, i.keyPrefix = s, i;
  }
  t(...e) {
    return this.translator?.translate(...e);
  }
  exists(...e) {
    return this.translator?.exists(...e);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e, t = {}) {
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const s = t.lng || this.resolvedLanguage || this.languages[0], i = this.options ? this.options.fallbackLng : !1, n = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === "cimode") return !0;
    const o = (a, l) => {
      const u = this.services.backendConnector.state[`${a}|${l}`];
      return u === -1 || u === 0 || u === 2;
    };
    if (t.precheck) {
      const a = t.precheck(this, o);
      if (a !== void 0) return a;
    }
    return !!(this.hasResourceBundle(s, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || o(s, e) && (!i || o(n, e)));
  }
  loadNamespaces(e, t) {
    const s = H();
    return this.options.ns ? (d(e) && (e = [e]), e.forEach((i) => {
      this.options.ns.includes(i) || this.options.ns.push(i);
    }), this.loadResources((i) => {
      s.resolve(), t && t(i);
    }), s) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const s = H();
    d(e) && (e = [e]);
    const i = this.options.preload || [], n = e.filter((o) => !i.includes(o) && this.services.languageUtils.isSupportedCode(o));
    return n.length ? (this.options.preload = i.concat(n), this.loadResources((o) => {
      s.resolve(), t && t(o);
    }), s) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    try {
      const i = new Intl.Locale(e);
      if (i && i.getTextInfo) {
        const n = i.getTextInfo();
        if (n && n.direction) return n.direction;
      }
    } catch {
    }
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], s = this.services?.languageUtils || new ce(X());
    return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : t.includes(s.getLanguagePartFromCode(e)) || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(e = {}, t) {
    const s = new z(e, t);
    return s.createInstance = z.createInstance, s;
  }
  cloneInstance(e = {}, t = W) {
    const s = e.forkResourceStore;
    s && delete e.forkResourceStore;
    const i = {
      ...this.options,
      ...e,
      isClone: !0
    }, n = new z(i);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (n.logger = n.logger.clone(e)), ["store", "services", "language"].forEach((a) => {
      n[a] = this[a];
    }), n.services = {
      ...this.services
    }, n.services.utils = {
      hasLoadedNamespace: n.hasLoadedNamespace.bind(n)
    }, s) {
      const a = Object.keys(this.store.data).reduce((l, u) => (l[u] = {
        ...this.store.data[u]
      }, l[u] = Object.keys(l[u]).reduce((f, c) => (f[c] = {
        ...l[u][c]
      }, f), l[u]), l), {});
      n.store = new ue(a, i), n.services.resourceStore = n.store;
    }
    if (e.interpolation) {
      const l = {
        ...X().interpolation,
        ...this.options.interpolation,
        ...e.interpolation
      }, u = {
        ...i,
        interpolation: l
      };
      n.services.interpolator = new ge(u);
    }
    return n.translator = new Y(n.services, i), n.translator.on("*", (a, ...l) => {
      n.emit(a, ...l);
    }), n.init(i, t), n.translator.options = i, n.translator.backendConnector.services.utils = {
      hasLoadedNamespace: n.hasLoadedNamespace.bind(n)
    }, n;
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
const b = z.createInstance();
b.createInstance;
b.dir;
b.init;
b.loadResources;
b.reloadResources;
b.use;
b.changeLanguage;
b.getFixedT;
b.t;
b.exists;
b.setDefaultNamespace;
b.hasLoadedNamespace;
b.loadNamespaces;
b.loadLanguages;
const {
  slice: Qe,
  forEach: _e
} = [];
function Ye(r) {
  return _e.call(Qe.call(arguments, 1), (e) => {
    if (e)
      for (const t in e)
        r[t] === void 0 && (r[t] = e[t]);
  }), r;
}
function qe(r) {
  return typeof r != "string" ? !1 : [/<\s*script.*?>/i, /<\s*\/\s*script\s*>/i, /<\s*img.*?on\w+\s*=/i, /<\s*\w+\s*on\w+\s*=.*?>/i, /javascript\s*:/i, /vbscript\s*:/i, /expression\s*\(/i, /eval\s*\(/i, /alert\s*\(/i, /document\.cookie/i, /document\.write\s*\(/i, /window\.location/i, /innerHTML/i].some((t) => t.test(r));
}
const ye = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, Ze = function(r, e) {
  const s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    path: "/"
  }, i = encodeURIComponent(e);
  let n = `${r}=${i}`;
  if (s.maxAge > 0) {
    const o = s.maxAge - 0;
    if (Number.isNaN(o)) throw new Error("maxAge should be a Number");
    n += `; Max-Age=${Math.floor(o)}`;
  }
  if (s.domain) {
    if (!ye.test(s.domain))
      throw new TypeError("option domain is invalid");
    n += `; Domain=${s.domain}`;
  }
  if (s.path) {
    if (!ye.test(s.path))
      throw new TypeError("option path is invalid");
    n += `; Path=${s.path}`;
  }
  if (s.expires) {
    if (typeof s.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    n += `; Expires=${s.expires.toUTCString()}`;
  }
  if (s.httpOnly && (n += "; HttpOnly"), s.secure && (n += "; Secure"), s.sameSite)
    switch (typeof s.sameSite == "string" ? s.sameSite.toLowerCase() : s.sameSite) {
      case !0:
        n += "; SameSite=Strict";
        break;
      case "lax":
        n += "; SameSite=Lax";
        break;
      case "strict":
        n += "; SameSite=Strict";
        break;
      case "none":
        n += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return s.partitioned && (n += "; Partitioned"), n;
}, xe = {
  create(r, e, t, s) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    t && (i.expires = /* @__PURE__ */ new Date(), i.expires.setTime(i.expires.getTime() + t * 60 * 1e3)), s && (i.domain = s), document.cookie = Ze(r, e, i);
  },
  read(r) {
    const e = `${r}=`, t = document.cookie.split(";");
    for (let s = 0; s < t.length; s++) {
      let i = t[s];
      for (; i.charAt(0) === " "; ) i = i.substring(1, i.length);
      if (i.indexOf(e) === 0) return i.substring(e.length, i.length);
    }
    return null;
  },
  remove(r, e) {
    this.create(r, "", -1, e);
  }
};
var Ge = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(r) {
    let {
      lookupCookie: e
    } = r;
    if (e && typeof document < "u")
      return xe.read(e) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(r, e) {
    let {
      lookupCookie: t,
      cookieMinutes: s,
      cookieDomain: i,
      cookieOptions: n
    } = e;
    t && typeof document < "u" && xe.create(t, r, s, i, n);
  }
}, Xe = {
  name: "querystring",
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(r) {
    let {
      lookupQuerystring: e
    } = r, t;
    if (typeof window < "u") {
      let {
        search: s
      } = window.location;
      !window.location.search && window.location.hash?.indexOf("?") > -1 && (s = window.location.hash.substring(window.location.hash.indexOf("?")));
      const n = s.substring(1).split("&");
      for (let o = 0; o < n.length; o++) {
        const a = n[o].indexOf("=");
        a > 0 && n[o].substring(0, a) === e && (t = n[o].substring(a + 1));
      }
    }
    return t;
  }
}, et = {
  name: "hash",
  // Deconstruct the options object and extract the lookupHash property and the lookupFromHashIndex property
  lookup(r) {
    let {
      lookupHash: e,
      lookupFromHashIndex: t
    } = r, s;
    if (typeof window < "u") {
      const {
        hash: i
      } = window.location;
      if (i && i.length > 2) {
        const n = i.substring(1);
        if (e) {
          const o = n.split("&");
          for (let a = 0; a < o.length; a++) {
            const l = o[a].indexOf("=");
            l > 0 && o[a].substring(0, l) === e && (s = o[a].substring(l + 1));
          }
        }
        if (s) return s;
        if (!s && t > -1) {
          const o = i.match(/\/([a-zA-Z-]*)/g);
          return Array.isArray(o) ? o[typeof t == "number" ? t : 0]?.replace("/", "") : void 0;
        }
      }
    }
    return s;
  }
};
let T = null;
const Se = () => {
  if (T !== null) return T;
  try {
    if (T = typeof window < "u" && window.localStorage !== null, !T)
      return !1;
    const r = "i18next.translate.boo";
    window.localStorage.setItem(r, "foo"), window.localStorage.removeItem(r);
  } catch {
    T = !1;
  }
  return T;
};
var tt = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(r) {
    let {
      lookupLocalStorage: e
    } = r;
    if (e && Se())
      return window.localStorage.getItem(e) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(r, e) {
    let {
      lookupLocalStorage: t
    } = e;
    t && Se() && window.localStorage.setItem(t, r);
  }
};
let A = null;
const be = () => {
  if (A !== null) return A;
  try {
    if (A = typeof window < "u" && window.sessionStorage !== null, !A)
      return !1;
    const r = "i18next.translate.boo";
    window.sessionStorage.setItem(r, "foo"), window.sessionStorage.removeItem(r);
  } catch {
    A = !1;
  }
  return A;
};
var st = {
  name: "sessionStorage",
  lookup(r) {
    let {
      lookupSessionStorage: e
    } = r;
    if (e && be())
      return window.sessionStorage.getItem(e) || void 0;
  },
  cacheUserLanguage(r, e) {
    let {
      lookupSessionStorage: t
    } = e;
    t && be() && window.sessionStorage.setItem(t, r);
  }
}, it = {
  name: "navigator",
  lookup(r) {
    const e = [];
    if (typeof navigator < "u") {
      const {
        languages: t,
        userLanguage: s,
        language: i
      } = navigator;
      if (t)
        for (let n = 0; n < t.length; n++)
          e.push(t[n]);
      s && e.push(s), i && e.push(i);
    }
    return e.length > 0 ? e : void 0;
  }
}, nt = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(r) {
    let {
      htmlTag: e
    } = r, t;
    const s = e || (typeof document < "u" ? document.documentElement : null);
    return s && typeof s.getAttribute == "function" && (t = s.getAttribute("lang")), t;
  }
}, rt = {
  name: "path",
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(r) {
    let {
      lookupFromPathIndex: e
    } = r;
    if (typeof window > "u") return;
    const t = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    return Array.isArray(t) ? t[typeof e == "number" ? e : 0]?.replace("/", "") : void 0;
  }
}, ot = {
  name: "subdomain",
  lookup(r) {
    let {
      lookupFromSubdomainIndex: e
    } = r;
    const t = typeof e == "number" ? e + 1 : 1, s = typeof window < "u" && window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
    if (s)
      return s[t];
  }
};
let Oe = !1;
try {
  document.cookie, Oe = !0;
} catch {
}
const ke = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
Oe || ke.splice(1, 1);
const at = () => ({
  order: ke,
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  // cache user language
  caches: ["localStorage"],
  excludeCacheFor: ["cimode"],
  // cookieMinutes: 10,
  // cookieDomain: 'myDomain'
  convertDetectedLanguage: (r) => r
});
class lt {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(e, t);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      languageUtils: {}
    }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = e, this.options = Ye(t, this.options || {}, at()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (i) => i.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = s, this.addDetector(Ge), this.addDetector(Xe), this.addDetector(tt), this.addDetector(st), this.addDetector(it), this.addDetector(nt), this.addDetector(rt), this.addDetector(ot), this.addDetector(et);
  }
  addDetector(e) {
    return this.detectors[e.name] = e, this;
  }
  detect() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order, t = [];
    return e.forEach((s) => {
      if (this.detectors[s]) {
        let i = this.detectors[s].lookup(this.options);
        i && typeof i == "string" && (i = [i]), i && (t = t.concat(i));
      }
    }), t = t.filter((s) => s != null && !qe(s)).map((s) => this.options.convertDetectedLanguage(s)), this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes ? t : t.length > 0 ? t[0] : null;
  }
  cacheUserLanguage(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
    t && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach((s) => {
      this.detectors[s] && this.detectors[s].cacheUserLanguage(e, this.options);
    }));
  }
}
lt.type = "languageDetector";
export {
  lt as B,
  b as i
};

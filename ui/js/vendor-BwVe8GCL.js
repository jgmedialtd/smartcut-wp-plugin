import { I as $s, i as Vm } from "./vendor-pako-Bv9j8L58.js";
const Lc = Object.freeze({
  status: "aborted"
});
function g(e, t, r) {
  function i(s, c) {
    if (s._zod || Object.defineProperty(s, "_zod", {
      value: {
        def: c,
        constr: a,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), s._zod.traits.has(e))
      return;
    s._zod.traits.add(e), t(s, c);
    const u = a.prototype, l = Object.keys(u);
    for (let d = 0; d < l.length; d++) {
      const f = l[d];
      f in s || (s[f] = u[f].bind(s));
    }
  }
  const n = r?.Parent ?? Object;
  class o extends n {
  }
  Object.defineProperty(o, "name", { value: e });
  function a(s) {
    var c;
    const u = r?.Parent ? new o() : this;
    i(u, s), (c = u._zod).deferred ?? (c.deferred = []);
    for (const l of u._zod.deferred)
      l();
    return u;
  }
  return Object.defineProperty(a, "init", { value: i }), Object.defineProperty(a, Symbol.hasInstance, {
    value: (s) => r?.Parent && s instanceof r.Parent ? !0 : s?._zod?.traits?.has(e)
  }), Object.defineProperty(a, "name", { value: e }), a;
}
const Mc = /* @__PURE__ */ Symbol("zod_brand");
let Nt = class extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}, Sr = class extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
};
const lr = {};
function Ce(e) {
  return e && Object.assign(lr, e), lr;
}
function qm(e) {
  return e;
}
function Wm(e) {
  return e;
}
function Km(e) {
}
function Gm(e) {
  throw new Error("Unexpected value in exhaustive check");
}
function Hm(e) {
}
function uo(e) {
  const t = Object.values(e).filter((i) => typeof i == "number");
  return Object.entries(e).filter(([i, n]) => t.indexOf(+i) === -1).map(([i, n]) => n);
}
function I(e, t = "|") {
  return e.map((r) => M(r)).join(t);
}
function dr(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function $n(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function Dt(e) {
  return e == null;
}
function Ir(e) {
  const t = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}
function Bc(e, t) {
  const r = (e.toString().split(".")[1] || "").length, i = t.toString();
  let n = (i.split(".")[1] || "").length;
  if (n === 0 && /\d?e-\d?/.test(i)) {
    const c = i.match(/\d?e-(\d?)/);
    c?.[1] && (n = Number.parseInt(c[1]));
  }
  const o = r > n ? r : n, a = Number.parseInt(e.toFixed(o).replace(".", "")), s = Number.parseInt(t.toFixed(o).replace(".", ""));
  return a % s / 10 ** o;
}
const bs = /* @__PURE__ */ Symbol("evaluating");
function te(e, t, r) {
  let i;
  Object.defineProperty(e, t, {
    get() {
      if (i !== bs)
        return i === void 0 && (i = bs, i = r()), i;
    },
    set(n) {
      Object.defineProperty(e, t, {
        value: n
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Xm(e) {
  return Object.create(Object.getPrototypeOf(e), Object.getOwnPropertyDescriptors(e));
}
function It(e, t, r) {
  Object.defineProperty(e, t, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function lt(...e) {
  const t = {};
  for (const r of e) {
    const i = Object.getOwnPropertyDescriptors(r);
    Object.assign(t, i);
  }
  return Object.defineProperties({}, t);
}
function Ym(e) {
  return lt(e._zod.def);
}
function Qm(e, t) {
  return t ? t.reduce((r, i) => r?.[i], e) : e;
}
function eg(e) {
  const t = Object.keys(e), r = t.map((i) => e[i]);
  return Promise.all(r).then((i) => {
    const n = {};
    for (let o = 0; o < t.length; o++)
      n[t[o]] = i[o];
    return n;
  });
}
function tg(e = 10) {
  const t = "abcdefghijklmnopqrstuvwxyz";
  let r = "";
  for (let i = 0; i < e; i++)
    r += t[Math.floor(Math.random() * t.length)];
  return r;
}
function Ji(e) {
  return JSON.stringify(e);
}
function Jc(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const lo = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Bt(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Vc = $n(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function Ct(e) {
  if (Bt(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const r = t.prototype;
  return !(Bt(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function zr(e) {
  return Ct(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
function ng(e) {
  let t = 0;
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t++;
  return t;
}
const rg = (e) => {
  const t = typeof e;
  switch (t) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(e) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      return Array.isArray(e) ? "array" : e === null ? "null" : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? "promise" : typeof Map < "u" && e instanceof Map ? "map" : typeof Set < "u" && e instanceof Set ? "set" : typeof Date < "u" && e instanceof Date ? "date" : typeof File < "u" && e instanceof File ? "file" : "object";
    default:
      throw new Error(`Unknown data type: ${t}`);
  }
}, fr = /* @__PURE__ */ new Set(["string", "number", "symbol"]), qc = /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function ht(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Qe(e, t, r) {
  const i = new e._zod.constr(t ?? e._zod.def);
  return (!t || r?.parent) && (i._zod.parent = e), i;
}
function b(e) {
  const t = e;
  if (!t)
    return {};
  if (typeof t == "string")
    return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function ig(e) {
  let t;
  return new Proxy({}, {
    get(r, i, n) {
      return t ?? (t = e()), Reflect.get(t, i, n);
    },
    set(r, i, n, o) {
      return t ?? (t = e()), Reflect.set(t, i, n, o);
    },
    has(r, i) {
      return t ?? (t = e()), Reflect.has(t, i);
    },
    deleteProperty(r, i) {
      return t ?? (t = e()), Reflect.deleteProperty(t, i);
    },
    ownKeys(r) {
      return t ?? (t = e()), Reflect.ownKeys(t);
    },
    getOwnPropertyDescriptor(r, i) {
      return t ?? (t = e()), Reflect.getOwnPropertyDescriptor(t, i);
    },
    defineProperty(r, i, n) {
      return t ?? (t = e()), Reflect.defineProperty(t, i, n);
    }
  });
}
function M(e) {
  return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function Wc(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const Kc = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, Gc = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function Hc(e, t) {
  const r = e._zod.def, i = r.checks;
  if (i && i.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const o = lt(e._zod.def, {
    get shape() {
      const a = {};
      for (const s in t) {
        if (!(s in r.shape))
          throw new Error(`Unrecognized key: "${s}"`);
        t[s] && (a[s] = r.shape[s]);
      }
      return It(this, "shape", a), a;
    },
    checks: []
  });
  return Qe(e, o);
}
function Xc(e, t) {
  const r = e._zod.def, i = r.checks;
  if (i && i.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const o = lt(e._zod.def, {
    get shape() {
      const a = { ...e._zod.def.shape };
      for (const s in t) {
        if (!(s in r.shape))
          throw new Error(`Unrecognized key: "${s}"`);
        t[s] && delete a[s];
      }
      return It(this, "shape", a), a;
    },
    checks: []
  });
  return Qe(e, o);
}
function Yc(e, t) {
  if (!Ct(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const r = e._zod.def.checks;
  if (r && r.length > 0) {
    const o = e._zod.def.shape;
    for (const a in t)
      if (Object.getOwnPropertyDescriptor(o, a) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const n = lt(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...t };
      return It(this, "shape", o), o;
    }
  });
  return Qe(e, n);
}
function Qc(e, t) {
  if (!Ct(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const r = lt(e._zod.def, {
    get shape() {
      const i = { ...e._zod.def.shape, ...t };
      return It(this, "shape", i), i;
    }
  });
  return Qe(e, r);
}
function eu(e, t) {
  const r = lt(e._zod.def, {
    get shape() {
      const i = { ...e._zod.def.shape, ...t._zod.def.shape };
      return It(this, "shape", i), i;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return Qe(e, r);
}
function tu(e, t, r) {
  const n = t._zod.def.checks;
  if (n && n.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const a = lt(t._zod.def, {
    get shape() {
      const s = t._zod.def.shape, c = { ...s };
      if (r)
        for (const u in r) {
          if (!(u in s))
            throw new Error(`Unrecognized key: "${u}"`);
          r[u] && (c[u] = e ? new e({
            type: "optional",
            innerType: s[u]
          }) : s[u]);
        }
      else
        for (const u in s)
          c[u] = e ? new e({
            type: "optional",
            innerType: s[u]
          }) : s[u];
      return It(this, "shape", c), c;
    },
    checks: []
  });
  return Qe(t, a);
}
function nu(e, t, r) {
  const i = lt(t._zod.def, {
    get shape() {
      const n = t._zod.def.shape, o = { ...n };
      if (r)
        for (const a in r) {
          if (!(a in o))
            throw new Error(`Unrecognized key: "${a}"`);
          r[a] && (o[a] = new e({
            type: "nonoptional",
            innerType: n[a]
          }));
        }
      else
        for (const a in n)
          o[a] = new e({
            type: "nonoptional",
            innerType: n[a]
          });
      return It(this, "shape", o), o;
    }
  });
  return Qe(t, i);
}
function Tt(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let r = t; r < e.issues.length; r++)
    if (e.issues[r]?.continue !== !0)
      return !0;
  return !1;
}
function ot(e, t) {
  return t.map((r) => {
    var i;
    return (i = r).path ?? (i.path = []), r.path.unshift(e), r;
  });
}
function un(e) {
  return typeof e == "string" ? e : e?.message;
}
function Ye(e, t, r) {
  const i = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const n = un(e.inst?._zod.def?.error?.(e)) ?? un(t?.error?.(e)) ?? un(r.customError?.(e)) ?? un(r.localeError?.(e)) ?? "Invalid input";
    i.message = n;
  }
  return delete i.inst, delete i.continue, t?.reportInput || delete i.input, i;
}
function xr(e) {
  return e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof File ? "file" : "unknown";
}
function Or(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function V(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "nan" : "number";
    case "object": {
      if (e === null)
        return "null";
      if (Array.isArray(e))
        return "array";
      const r = e;
      if (r && Object.getPrototypeOf(r) !== Object.prototype && "constructor" in r && r.constructor)
        return r.constructor.name;
    }
  }
  return t;
}
function Jt(...e) {
  const [t, r, i] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: r,
    inst: i
  } : { ...t };
}
function og(e) {
  return Object.entries(e).filter(([t, r]) => Number.isNaN(Number.parseInt(t, 10))).map((t) => t[1]);
}
function ru(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function iu(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    t += String.fromCharCode(e[r]);
  return btoa(t);
}
function ag(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), r = "=".repeat((4 - t.length % 4) % 4);
  return ru(t + r);
}
function sg(e) {
  return iu(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function cg(e) {
  const t = e.replace(/^0x/, "");
  if (t.length % 2 !== 0)
    throw new Error("Invalid hex string length");
  const r = new Uint8Array(t.length / 2);
  for (let i = 0; i < t.length; i += 2)
    r[i / 2] = Number.parseInt(t.slice(i, i + 2), 16);
  return r;
}
function ug(e) {
  return Array.from(e).map((t) => t.toString(16).padStart(2, "0")).join("");
}
class lg {
  constructor(...t) {
  }
}
const ou = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, BIGINT_FORMAT_RANGES: Gc, Class: lg, NUMBER_FORMAT_RANGES: Kc, aborted: Tt, allowsEval: Vc, assert: Hm, assertEqual: qm, assertIs: Km, assertNever: Gm, assertNotEqual: Wm, assignProp: It, base64ToUint8Array: ru, base64urlToUint8Array: ag, cached: $n, captureStackTrace: lo, cleanEnum: og, cleanRegex: Ir, clone: Qe, cloneDef: Ym, createTransparentProxy: ig, defineLazy: te, esc: Ji, escapeRegex: ht, extend: Yc, finalizeIssue: Ye, floatSafeRemainder: Bc, getElementAtPath: Qm, getEnumValues: uo, getLengthableOrigin: Or, getParsedType: rg, getSizableOrigin: xr, hexToUint8Array: cg, isObject: Bt, isPlainObject: Ct, issue: Jt, joinValues: I, jsonStringifyReplacer: dr, merge: eu, mergeDefs: lt, normalizeParams: b, nullish: Dt, numKeys: ng, objectClone: Xm, omit: Xc, optionalKeys: Wc, parsedType: V, partial: tu, pick: Hc, prefixIssues: ot, primitiveTypes: qc, promiseAllObject: eg, propertyKeyTypes: fr, randomString: tg, required: nu, safeExtend: Qc, shallowClone: zr, slugify: Jc, stringifyPrimitive: M, uint8ArrayToBase64: iu, uint8ArrayToBase64url: sg, uint8ArrayToHex: ug, unwrapMessage: un }, Symbol.toStringTag, { value: "Module" })), au = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, dr, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, fo = g("$ZodError", au), We = g("$ZodError", au, { Parent: Error });
function ho(e, t = (r) => r.message) {
  const r = {}, i = [];
  for (const n of e.issues)
    n.path.length > 0 ? (r[n.path[0]] = r[n.path[0]] || [], r[n.path[0]].push(t(n))) : i.push(t(n));
  return { formErrors: i, fieldErrors: r };
}
function po(e, t = (r) => r.message) {
  const r = { _errors: [] }, i = (n) => {
    for (const o of n.issues)
      if (o.code === "invalid_union" && o.errors.length)
        o.errors.map((a) => i({ issues: a }));
      else if (o.code === "invalid_key")
        i({ issues: o.issues });
      else if (o.code === "invalid_element")
        i({ issues: o.issues });
      else if (o.path.length === 0)
        r._errors.push(t(o));
      else {
        let a = r, s = 0;
        for (; s < o.path.length; ) {
          const c = o.path[s];
          s === o.path.length - 1 ? (a[c] = a[c] || { _errors: [] }, a[c]._errors.push(t(o))) : a[c] = a[c] || { _errors: [] }, a = a[c], s++;
        }
      }
  };
  return i(e), r;
}
function su(e, t = (r) => r.message) {
  const r = { errors: [] }, i = (n, o = []) => {
    var a, s;
    for (const c of n.issues)
      if (c.code === "invalid_union" && c.errors.length)
        c.errors.map((u) => i({ issues: u }, c.path));
      else if (c.code === "invalid_key")
        i({ issues: c.issues }, c.path);
      else if (c.code === "invalid_element")
        i({ issues: c.issues }, c.path);
      else {
        const u = [...o, ...c.path];
        if (u.length === 0) {
          r.errors.push(t(c));
          continue;
        }
        let l = r, d = 0;
        for (; d < u.length; ) {
          const f = u[d], h = d === u.length - 1;
          typeof f == "string" ? (l.properties ?? (l.properties = {}), (a = l.properties)[f] ?? (a[f] = { errors: [] }), l = l.properties[f]) : (l.items ?? (l.items = []), (s = l.items)[f] ?? (s[f] = { errors: [] }), l = l.items[f]), h && l.errors.push(t(c)), d++;
        }
      }
  };
  return i(e), r;
}
function cu(e) {
  const t = [], r = e.map((i) => typeof i == "object" ? i.key : i);
  for (const i of r)
    typeof i == "number" ? t.push(`[${i}]`) : typeof i == "symbol" ? t.push(`[${JSON.stringify(String(i))}]`) : /[^\w$]/.test(i) ? t.push(`[${JSON.stringify(i)}]`) : (t.length && t.push("."), t.push(i));
  return t.join("");
}
function uu(e) {
  const t = [], r = [...e.issues].sort((i, n) => (i.path ?? []).length - (n.path ?? []).length);
  for (const i of r)
    t.push(`✖ ${i.message}`), i.path?.length && t.push(`  → at ${cu(i.path)}`);
  return t.join(`
`);
}
const bn = (e) => (t, r, i, n) => {
  const o = i ? Object.assign(i, { async: !1 }) : { async: !1 }, a = t._zod.run({ value: r, issues: [] }, o);
  if (a instanceof Promise)
    throw new Nt();
  if (a.issues.length) {
    const s = new (n?.Err ?? e)(a.issues.map((c) => Ye(c, o, Ce())));
    throw lo(s, n?.callee), s;
  }
  return a.value;
}, Vi = /* @__PURE__ */ bn(We), kn = (e) => async (t, r, i, n) => {
  const o = i ? Object.assign(i, { async: !0 }) : { async: !0 };
  let a = t._zod.run({ value: r, issues: [] }, o);
  if (a instanceof Promise && (a = await a), a.issues.length) {
    const s = new (n?.Err ?? e)(a.issues.map((c) => Ye(c, o, Ce())));
    throw lo(s, n?.callee), s;
  }
  return a.value;
}, qi = /* @__PURE__ */ kn(We), wn = (e) => (t, r, i) => {
  const n = i ? { ...i, async: !1 } : { async: !1 }, o = t._zod.run({ value: r, issues: [] }, n);
  if (o instanceof Promise)
    throw new Nt();
  return o.issues.length ? {
    success: !1,
    error: new (e ?? fo)(o.issues.map((a) => Ye(a, n, Ce())))
  } : { success: !0, data: o.value };
}, lu = /* @__PURE__ */ wn(We), Sn = (e) => async (t, r, i) => {
  const n = i ? Object.assign(i, { async: !0 }) : { async: !0 };
  let o = t._zod.run({ value: r, issues: [] }, n);
  return o instanceof Promise && (o = await o), o.issues.length ? {
    success: !1,
    error: new e(o.issues.map((a) => Ye(a, n, Ce())))
  } : { success: !0, data: o.value };
}, du = /* @__PURE__ */ Sn(We), mo = (e) => (t, r, i) => {
  const n = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return bn(e)(t, r, n);
}, dg = /* @__PURE__ */ mo(We), go = (e) => (t, r, i) => bn(e)(t, r, i), fg = /* @__PURE__ */ go(We), vo = (e) => async (t, r, i) => {
  const n = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return kn(e)(t, r, n);
}, hg = /* @__PURE__ */ vo(We), _o = (e) => async (t, r, i) => kn(e)(t, r, i), pg = /* @__PURE__ */ _o(We), yo = (e) => (t, r, i) => {
  const n = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return wn(e)(t, r, n);
}, mg = /* @__PURE__ */ yo(We), $o = (e) => (t, r, i) => wn(e)(t, r, i), gg = /* @__PURE__ */ $o(We), bo = (e) => async (t, r, i) => {
  const n = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return Sn(e)(t, r, n);
}, vg = /* @__PURE__ */ bo(We), ko = (e) => async (t, r, i) => Sn(e)(t, r, i), _g = /* @__PURE__ */ ko(We), fu = /^[cC][^\s-]{8,}$/, hu = /^[0-9a-z]+$/, pu = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, mu = /^[0-9a-vA-V]{20}$/, gu = /^[A-Za-z0-9]{27}$/, vu = /^[a-zA-Z0-9_-]{21}$/, _u = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, yg = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, yu = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Vt = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, $g = /* @__PURE__ */ Vt(4), bg = /* @__PURE__ */ Vt(6), kg = /* @__PURE__ */ Vt(7), $u = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, wg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, Sg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, bu = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u, Ig = bu, zg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, xg = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function ku() {
  return new RegExp(xg, "u");
}
const wu = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Su = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Iu = (e) => {
  const t = ht(e ?? ":");
  return new RegExp(`^(?:[0-9A-F]{2}${t}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${t}){5}[0-9a-f]{2}$`);
}, zu = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, xu = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Ou = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, wo = /^[A-Za-z0-9_-]*$/, Eu = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, Tu = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, Nu = /^\+[1-9]\d{6,14}$/, Cu = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Uu = /* @__PURE__ */ new RegExp(`^${Cu}$`);
function Au(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Zu(e) {
  return new RegExp(`^${Au(e)}$`);
}
function Du(e) {
  const t = Au({ precision: e.precision }), r = ["Z"];
  e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const i = `${t}(?:${r.join("|")})`;
  return new RegExp(`^${Cu}T(?:${i})$`);
}
const ju = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, Pu = /^-?\d+n?$/, Ru = /^-?\d+$/, So = /^-?\d+(?:\.\d+)?$/, Fu = /^(?:true|false)$/i, Lu = /^null$/i, Mu = /^undefined$/i, Bu = /^[^A-Z]*$/, Ju = /^[^a-z]*$/, Vu = /^[0-9a-fA-F]*$/;
function In(e, t) {
  return new RegExp(`^[A-Za-z0-9+/]{${e}}${t}$`);
}
function zn(e) {
  return new RegExp(`^[A-Za-z0-9_-]{${e}}$`);
}
const Og = /^[0-9a-fA-F]{32}$/, Eg = /* @__PURE__ */ In(22, "=="), Tg = /* @__PURE__ */ zn(22), Ng = /^[0-9a-fA-F]{40}$/, Cg = /* @__PURE__ */ In(27, "="), Ug = /* @__PURE__ */ zn(27), Ag = /^[0-9a-fA-F]{64}$/, Zg = /* @__PURE__ */ In(43, "="), Dg = /* @__PURE__ */ zn(43), jg = /^[0-9a-fA-F]{96}$/, Pg = /* @__PURE__ */ In(64, ""), Rg = /* @__PURE__ */ zn(64), Fg = /^[0-9a-fA-F]{128}$/, Lg = /* @__PURE__ */ In(86, "=="), Mg = /* @__PURE__ */ zn(86), Io = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, base64: Ou, base64url: wo, bigint: Pu, boolean: Fu, browserEmail: zg, cidrv4: zu, cidrv6: xu, cuid: fu, cuid2: hu, date: Uu, datetime: Du, domain: Tu, duration: _u, e164: Nu, email: $u, emoji: ku, extendedDuration: yg, guid: yu, hex: Vu, hostname: Eu, html5Email: wg, idnEmail: Ig, integer: Ru, ipv4: wu, ipv6: Su, ksuid: gu, lowercase: Bu, mac: Iu, md5_base64: Eg, md5_base64url: Tg, md5_hex: Og, nanoid: vu, null: Lu, number: So, rfc5322Email: Sg, sha1_base64: Cg, sha1_base64url: Ug, sha1_hex: Ng, sha256_base64: Zg, sha256_base64url: Dg, sha256_hex: Ag, sha384_base64: Pg, sha384_base64url: Rg, sha384_hex: jg, sha512_base64: Lg, sha512_base64url: Mg, sha512_hex: Fg, string: ju, time: Zu, ulid: pu, undefined: Mu, unicodeEmail: bu, uppercase: Ju, uuid: Vt, uuid4: $g, uuid6: bg, uuid7: kg, xid: mu }, Symbol.toStringTag, { value: "Module" })), ye = /* @__PURE__ */ g("$ZodCheck", (e, t) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
}), qu = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, zo = /* @__PURE__ */ g("$ZodCheckLessThan", (e, t) => {
  ye.init(e, t);
  const r = qu[typeof t.value];
  e._zod.onattach.push((i) => {
    const n = i._zod.bag, o = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < o && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value);
  }), e._zod.check = (i) => {
    (t.inclusive ? i.value <= t.value : i.value < t.value) || i.issues.push({
      origin: r,
      code: "too_big",
      maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
      input: i.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), xo = /* @__PURE__ */ g("$ZodCheckGreaterThan", (e, t) => {
  ye.init(e, t);
  const r = qu[typeof t.value];
  e._zod.onattach.push((i) => {
    const n = i._zod.bag, o = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > o && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value);
  }), e._zod.check = (i) => {
    (t.inclusive ? i.value >= t.value : i.value > t.value) || i.issues.push({
      origin: r,
      code: "too_small",
      minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
      input: i.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), Wu = /* @__PURE__ */ g("$ZodCheckMultipleOf", (e, t) => {
  ye.init(e, t), e._zod.onattach.push((r) => {
    var i;
    (i = r._zod.bag).multipleOf ?? (i.multipleOf = t.value);
  }), e._zod.check = (r) => {
    if (typeof r.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof r.value == "bigint" ? r.value % t.value === BigInt(0) : Bc(r.value, t.value) === 0) || r.issues.push({
      origin: typeof r.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ku = /* @__PURE__ */ g("$ZodCheckNumberFormat", (e, t) => {
  ye.init(e, t), t.format = t.format || "float64";
  const r = t.format?.includes("int"), i = r ? "int" : "number", [n, o] = Kc[t.format];
  e._zod.onattach.push((a) => {
    const s = a._zod.bag;
    s.format = t.format, s.minimum = n, s.maximum = o, r && (s.pattern = Ru);
  }), e._zod.check = (a) => {
    const s = a.value;
    if (r) {
      if (!Number.isInteger(s)) {
        a.issues.push({
          expected: i,
          format: t.format,
          code: "invalid_type",
          continue: !1,
          input: s,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(s)) {
        s > 0 ? a.issues.push({
          input: s,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: i,
          inclusive: !0,
          continue: !t.abort
        }) : a.issues.push({
          input: s,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: i,
          inclusive: !0,
          continue: !t.abort
        });
        return;
      }
    }
    s < n && a.issues.push({
      origin: "number",
      input: s,
      code: "too_small",
      minimum: n,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), s > o && a.issues.push({
      origin: "number",
      input: s,
      code: "too_big",
      maximum: o,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    });
  };
}), Gu = /* @__PURE__ */ g("$ZodCheckBigIntFormat", (e, t) => {
  ye.init(e, t);
  const [r, i] = Gc[t.format];
  e._zod.onattach.push((n) => {
    const o = n._zod.bag;
    o.format = t.format, o.minimum = r, o.maximum = i;
  }), e._zod.check = (n) => {
    const o = n.value;
    o < r && n.issues.push({
      origin: "bigint",
      input: o,
      code: "too_small",
      minimum: r,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), o > i && n.issues.push({
      origin: "bigint",
      input: o,
      code: "too_big",
      maximum: i,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    });
  };
}), Hu = /* @__PURE__ */ g("$ZodCheckMaxSize", (e, t) => {
  var r;
  ye.init(e, t), (r = e._zod.def).when ?? (r.when = (i) => {
    const n = i.value;
    return !Dt(n) && n.size !== void 0;
  }), e._zod.onattach.push((i) => {
    const n = i._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < n && (i._zod.bag.maximum = t.maximum);
  }), e._zod.check = (i) => {
    const n = i.value;
    n.size <= t.maximum || i.issues.push({
      origin: xr(n),
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), Xu = /* @__PURE__ */ g("$ZodCheckMinSize", (e, t) => {
  var r;
  ye.init(e, t), (r = e._zod.def).when ?? (r.when = (i) => {
    const n = i.value;
    return !Dt(n) && n.size !== void 0;
  }), e._zod.onattach.push((i) => {
    const n = i._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > n && (i._zod.bag.minimum = t.minimum);
  }), e._zod.check = (i) => {
    const n = i.value;
    n.size >= t.minimum || i.issues.push({
      origin: xr(n),
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), Yu = /* @__PURE__ */ g("$ZodCheckSizeEquals", (e, t) => {
  var r;
  ye.init(e, t), (r = e._zod.def).when ?? (r.when = (i) => {
    const n = i.value;
    return !Dt(n) && n.size !== void 0;
  }), e._zod.onattach.push((i) => {
    const n = i._zod.bag;
    n.minimum = t.size, n.maximum = t.size, n.size = t.size;
  }), e._zod.check = (i) => {
    const n = i.value, o = n.size;
    if (o === t.size)
      return;
    const a = o > t.size;
    i.issues.push({
      origin: xr(n),
      ...a ? { code: "too_big", maximum: t.size } : { code: "too_small", minimum: t.size },
      inclusive: !0,
      exact: !0,
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Qu = /* @__PURE__ */ g("$ZodCheckMaxLength", (e, t) => {
  var r;
  ye.init(e, t), (r = e._zod.def).when ?? (r.when = (i) => {
    const n = i.value;
    return !Dt(n) && n.length !== void 0;
  }), e._zod.onattach.push((i) => {
    const n = i._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < n && (i._zod.bag.maximum = t.maximum);
  }), e._zod.check = (i) => {
    const n = i.value;
    if (n.length <= t.maximum)
      return;
    const a = Or(n);
    i.issues.push({
      origin: a,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), el = /* @__PURE__ */ g("$ZodCheckMinLength", (e, t) => {
  var r;
  ye.init(e, t), (r = e._zod.def).when ?? (r.when = (i) => {
    const n = i.value;
    return !Dt(n) && n.length !== void 0;
  }), e._zod.onattach.push((i) => {
    const n = i._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > n && (i._zod.bag.minimum = t.minimum);
  }), e._zod.check = (i) => {
    const n = i.value;
    if (n.length >= t.minimum)
      return;
    const a = Or(n);
    i.issues.push({
      origin: a,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), tl = /* @__PURE__ */ g("$ZodCheckLengthEquals", (e, t) => {
  var r;
  ye.init(e, t), (r = e._zod.def).when ?? (r.when = (i) => {
    const n = i.value;
    return !Dt(n) && n.length !== void 0;
  }), e._zod.onattach.push((i) => {
    const n = i._zod.bag;
    n.minimum = t.length, n.maximum = t.length, n.length = t.length;
  }), e._zod.check = (i) => {
    const n = i.value, o = n.length;
    if (o === t.length)
      return;
    const a = Or(n), s = o > t.length;
    i.issues.push({
      origin: a,
      ...s ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), xn = /* @__PURE__ */ g("$ZodCheckStringFormat", (e, t) => {
  var r, i;
  ye.init(e, t), e._zod.onattach.push((n) => {
    const o = n._zod.bag;
    o.format = t.format, t.pattern && (o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(t.pattern));
  }), t.pattern ? (r = e._zod).check ?? (r.check = (n) => {
    t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: n.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (i = e._zod).check ?? (i.check = () => {
  });
}), nl = /* @__PURE__ */ g("$ZodCheckRegex", (e, t) => {
  xn.init(e, t), e._zod.check = (r) => {
    t.pattern.lastIndex = 0, !t.pattern.test(r.value) && r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: r.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), rl = /* @__PURE__ */ g("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = Bu), xn.init(e, t);
}), il = /* @__PURE__ */ g("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = Ju), xn.init(e, t);
}), ol = /* @__PURE__ */ g("$ZodCheckIncludes", (e, t) => {
  ye.init(e, t);
  const r = ht(t.includes), i = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${r}` : r);
  t.pattern = i, e._zod.onattach.push((n) => {
    const o = n._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(i);
  }), e._zod.check = (n) => {
    n.value.includes(t.includes, t.position) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), al = /* @__PURE__ */ g("$ZodCheckStartsWith", (e, t) => {
  ye.init(e, t);
  const r = new RegExp(`^${ht(t.prefix)}.*`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((i) => {
    const n = i._zod.bag;
    n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(r);
  }), e._zod.check = (i) => {
    i.value.startsWith(t.prefix) || i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), sl = /* @__PURE__ */ g("$ZodCheckEndsWith", (e, t) => {
  ye.init(e, t);
  const r = new RegExp(`.*${ht(t.suffix)}$`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((i) => {
    const n = i._zod.bag;
    n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(r);
  }), e._zod.check = (i) => {
    i.value.endsWith(t.suffix) || i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function ks(e, t, r) {
  e.issues.length && t.issues.push(...ot(r, e.issues));
}
const cl = /* @__PURE__ */ g("$ZodCheckProperty", (e, t) => {
  ye.init(e, t), e._zod.check = (r) => {
    const i = t.schema._zod.run({
      value: r.value[t.property],
      issues: []
    }, {});
    if (i instanceof Promise)
      return i.then((n) => ks(n, r, t.property));
    ks(i, r, t.property);
  };
}), ul = /* @__PURE__ */ g("$ZodCheckMimeType", (e, t) => {
  ye.init(e, t);
  const r = new Set(t.mime);
  e._zod.onattach.push((i) => {
    i._zod.bag.mime = t.mime;
  }), e._zod.check = (i) => {
    r.has(i.value.type) || i.issues.push({
      code: "invalid_value",
      values: t.mime,
      input: i.value.type,
      inst: e,
      continue: !t.abort
    });
  };
}), ll = /* @__PURE__ */ g("$ZodCheckOverwrite", (e, t) => {
  ye.init(e, t), e._zod.check = (r) => {
    r.value = t.tx(r.value);
  };
});
let dl = class {
  constructor(t = []) {
    this.content = [], this.indent = 0, this && (this.args = t);
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const i = t.split(`
`).filter((a) => a), n = Math.min(...i.map((a) => a.length - a.trimStart().length)), o = i.map((a) => a.slice(n)).map((a) => " ".repeat(this.indent * 2) + a);
    for (const a of o)
      this.content.push(a);
  }
  compile() {
    const t = Function, r = this?.args, n = [...(this?.content ?? [""]).map((o) => `  ${o}`)];
    return new t(...r, n.join(`
`));
  }
};
const fl = {
  major: 4,
  minor: 3,
  patch: 6
}, G = /* @__PURE__ */ g("$ZodType", (e, t) => {
  var r;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = fl;
  const i = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && i.unshift(e);
  for (const n of i)
    for (const o of n._zod.onattach)
      o(e);
  if (i.length === 0)
    (r = e._zod).deferred ?? (r.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const n = (a, s, c) => {
      let u = Tt(a), l;
      for (const d of s) {
        if (d._zod.def.when) {
          if (!d._zod.def.when(a))
            continue;
        } else if (u)
          continue;
        const f = a.issues.length, h = d._zod.check(a);
        if (h instanceof Promise && c?.async === !1)
          throw new Nt();
        if (l || h instanceof Promise)
          l = (l ?? Promise.resolve()).then(async () => {
            await h, a.issues.length !== f && (u || (u = Tt(a, f)));
          });
        else {
          if (a.issues.length === f)
            continue;
          u || (u = Tt(a, f));
        }
      }
      return l ? l.then(() => a) : a;
    }, o = (a, s, c) => {
      if (Tt(a))
        return a.aborted = !0, a;
      const u = n(s, i, c);
      if (u instanceof Promise) {
        if (c.async === !1)
          throw new Nt();
        return u.then((l) => e._zod.parse(l, c));
      }
      return e._zod.parse(u, c);
    };
    e._zod.run = (a, s) => {
      if (s.skipChecks)
        return e._zod.parse(a, s);
      if (s.direction === "backward") {
        const u = e._zod.parse({ value: a.value, issues: [] }, { ...s, skipChecks: !0 });
        return u instanceof Promise ? u.then((l) => o(l, a, s)) : o(u, a, s);
      }
      const c = e._zod.parse(a, s);
      if (c instanceof Promise) {
        if (s.async === !1)
          throw new Nt();
        return c.then((u) => n(u, i, s));
      }
      return n(c, i, s);
    };
  }
  te(e, "~standard", () => ({
    validate: (n) => {
      try {
        const o = lu(e, n);
        return o.success ? { value: o.data } : { issues: o.error?.issues };
      } catch {
        return du(e, n).then((a) => a.success ? { value: a.data } : { issues: a.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), On = /* @__PURE__ */ g("$ZodString", (e, t) => {
  G.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? ju(e._zod.bag), e._zod.parse = (r, i) => {
    if (t.coerce)
      try {
        r.value = String(r.value);
      } catch {
      }
    return typeof r.value == "string" || r.issues.push({
      expected: "string",
      code: "invalid_type",
      input: r.value,
      inst: e
    }), r;
  };
}), me = /* @__PURE__ */ g("$ZodStringFormat", (e, t) => {
  xn.init(e, t), On.init(e, t);
}), hl = /* @__PURE__ */ g("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = yu), me.init(e, t);
}), pl = /* @__PURE__ */ g("$ZodUUID", (e, t) => {
  if (t.version) {
    const i = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (i === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = Vt(i));
  } else
    t.pattern ?? (t.pattern = Vt());
  me.init(e, t);
}), ml = /* @__PURE__ */ g("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = $u), me.init(e, t);
}), gl = /* @__PURE__ */ g("$ZodURL", (e, t) => {
  me.init(e, t), e._zod.check = (r) => {
    try {
      const i = r.value.trim(), n = new URL(i);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(n.hostname) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(n.protocol.endsWith(":") ? n.protocol.slice(0, -1) : n.protocol) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? r.value = n.href : r.value = i;
      return;
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "url",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), vl = /* @__PURE__ */ g("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = ku()), me.init(e, t);
}), _l = /* @__PURE__ */ g("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = vu), me.init(e, t);
}), yl = /* @__PURE__ */ g("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = fu), me.init(e, t);
}), $l = /* @__PURE__ */ g("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = hu), me.init(e, t);
}), bl = /* @__PURE__ */ g("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = pu), me.init(e, t);
}), kl = /* @__PURE__ */ g("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = mu), me.init(e, t);
}), wl = /* @__PURE__ */ g("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = gu), me.init(e, t);
}), Sl = /* @__PURE__ */ g("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = Du(t)), me.init(e, t);
}), Il = /* @__PURE__ */ g("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = Uu), me.init(e, t);
}), zl = /* @__PURE__ */ g("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = Zu(t)), me.init(e, t);
}), xl = /* @__PURE__ */ g("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = _u), me.init(e, t);
}), Ol = /* @__PURE__ */ g("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = wu), me.init(e, t), e._zod.bag.format = "ipv4";
}), El = /* @__PURE__ */ g("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = Su), me.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (r) => {
    try {
      new URL(`http://[${r.value}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), Tl = /* @__PURE__ */ g("$ZodMAC", (e, t) => {
  t.pattern ?? (t.pattern = Iu(t.delimiter)), me.init(e, t), e._zod.bag.format = "mac";
}), Nl = /* @__PURE__ */ g("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = zu), me.init(e, t);
}), Cl = /* @__PURE__ */ g("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = xu), me.init(e, t), e._zod.check = (r) => {
    const i = r.value.split("/");
    try {
      if (i.length !== 2)
        throw new Error();
      const [n, o] = i;
      if (!o)
        throw new Error();
      const a = Number(o);
      if (`${a}` !== o)
        throw new Error();
      if (a < 0 || a > 128)
        throw new Error();
      new URL(`http://[${n}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function Oo(e) {
  if (e === "")
    return !0;
  if (e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const Ul = /* @__PURE__ */ g("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = Ou), me.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (r) => {
    Oo(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function Al(e) {
  if (!wo.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (i) => i === "-" ? "+" : "/"), r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return Oo(r);
}
const Zl = /* @__PURE__ */ g("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = wo), me.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (r) => {
    Al(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Dl = /* @__PURE__ */ g("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = Nu), me.init(e, t);
});
function jl(e, t = null) {
  try {
    const r = e.split(".");
    if (r.length !== 3)
      return !1;
    const [i] = r;
    if (!i)
      return !1;
    const n = JSON.parse(atob(i));
    return !("typ" in n && n?.typ !== "JWT" || !n.alg || t && (!("alg" in n) || n.alg !== t));
  } catch {
    return !1;
  }
}
const Pl = /* @__PURE__ */ g("$ZodJWT", (e, t) => {
  me.init(e, t), e._zod.check = (r) => {
    jl(r.value, t.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Rl = /* @__PURE__ */ g("$ZodCustomStringFormat", (e, t) => {
  me.init(e, t), e._zod.check = (r) => {
    t.fn(r.value) || r.issues.push({
      code: "invalid_format",
      format: t.format,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Eo = /* @__PURE__ */ g("$ZodNumber", (e, t) => {
  G.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? So, e._zod.parse = (r, i) => {
    if (t.coerce)
      try {
        r.value = Number(r.value);
      } catch {
      }
    const n = r.value;
    if (typeof n == "number" && !Number.isNaN(n) && Number.isFinite(n))
      return r;
    const o = typeof n == "number" ? Number.isNaN(n) ? "NaN" : Number.isFinite(n) ? void 0 : "Infinity" : void 0;
    return r.issues.push({
      expected: "number",
      code: "invalid_type",
      input: n,
      inst: e,
      ...o ? { received: o } : {}
    }), r;
  };
}), Fl = /* @__PURE__ */ g("$ZodNumberFormat", (e, t) => {
  Ku.init(e, t), Eo.init(e, t);
}), To = /* @__PURE__ */ g("$ZodBoolean", (e, t) => {
  G.init(e, t), e._zod.pattern = Fu, e._zod.parse = (r, i) => {
    if (t.coerce)
      try {
        r.value = !!r.value;
      } catch {
      }
    const n = r.value;
    return typeof n == "boolean" || r.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), No = /* @__PURE__ */ g("$ZodBigInt", (e, t) => {
  G.init(e, t), e._zod.pattern = Pu, e._zod.parse = (r, i) => {
    if (t.coerce)
      try {
        r.value = BigInt(r.value);
      } catch {
      }
    return typeof r.value == "bigint" || r.issues.push({
      expected: "bigint",
      code: "invalid_type",
      input: r.value,
      inst: e
    }), r;
  };
}), Ll = /* @__PURE__ */ g("$ZodBigIntFormat", (e, t) => {
  Gu.init(e, t), No.init(e, t);
}), Ml = /* @__PURE__ */ g("$ZodSymbol", (e, t) => {
  G.init(e, t), e._zod.parse = (r, i) => {
    const n = r.value;
    return typeof n == "symbol" || r.issues.push({
      expected: "symbol",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), Bl = /* @__PURE__ */ g("$ZodUndefined", (e, t) => {
  G.init(e, t), e._zod.pattern = Mu, e._zod.values = /* @__PURE__ */ new Set([void 0]), e._zod.optin = "optional", e._zod.optout = "optional", e._zod.parse = (r, i) => {
    const n = r.value;
    return typeof n > "u" || r.issues.push({
      expected: "undefined",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), Jl = /* @__PURE__ */ g("$ZodNull", (e, t) => {
  G.init(e, t), e._zod.pattern = Lu, e._zod.values = /* @__PURE__ */ new Set([null]), e._zod.parse = (r, i) => {
    const n = r.value;
    return n === null || r.issues.push({
      expected: "null",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), Vl = /* @__PURE__ */ g("$ZodAny", (e, t) => {
  G.init(e, t), e._zod.parse = (r) => r;
}), ql = /* @__PURE__ */ g("$ZodUnknown", (e, t) => {
  G.init(e, t), e._zod.parse = (r) => r;
}), Wl = /* @__PURE__ */ g("$ZodNever", (e, t) => {
  G.init(e, t), e._zod.parse = (r, i) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: e
  }), r);
}), Kl = /* @__PURE__ */ g("$ZodVoid", (e, t) => {
  G.init(e, t), e._zod.parse = (r, i) => {
    const n = r.value;
    return typeof n > "u" || r.issues.push({
      expected: "void",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), Gl = /* @__PURE__ */ g("$ZodDate", (e, t) => {
  G.init(e, t), e._zod.parse = (r, i) => {
    if (t.coerce)
      try {
        r.value = new Date(r.value);
      } catch {
      }
    const n = r.value, o = n instanceof Date;
    return o && !Number.isNaN(n.getTime()) || r.issues.push({
      expected: "date",
      code: "invalid_type",
      input: n,
      ...o ? { received: "Invalid Date" } : {},
      inst: e
    }), r;
  };
});
function ws(e, t, r) {
  e.issues.length && t.issues.push(...ot(r, e.issues)), t.value[r] = e.value;
}
const Hl = /* @__PURE__ */ g("$ZodArray", (e, t) => {
  G.init(e, t), e._zod.parse = (r, i) => {
    const n = r.value;
    if (!Array.isArray(n))
      return r.issues.push({
        expected: "array",
        code: "invalid_type",
        input: n,
        inst: e
      }), r;
    r.value = Array(n.length);
    const o = [];
    for (let a = 0; a < n.length; a++) {
      const s = n[a], c = t.element._zod.run({
        value: s,
        issues: []
      }, i);
      c instanceof Promise ? o.push(c.then((u) => ws(u, r, a))) : ws(c, r, a);
    }
    return o.length ? Promise.all(o).then(() => r) : r;
  };
});
function hr(e, t, r, i, n) {
  if (e.issues.length) {
    if (n && !(r in i))
      return;
    t.issues.push(...ot(r, e.issues));
  }
  e.value === void 0 ? r in i && (t.value[r] = void 0) : t.value[r] = e.value;
}
function Xl(e) {
  const t = Object.keys(e.shape);
  for (const i of t)
    if (!e.shape?.[i]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${i}": expected a Zod schema`);
  const r = Wc(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(r)
  };
}
function Yl(e, t, r, i, n, o) {
  const a = [], s = n.keySet, c = n.catchall._zod, u = c.def.type, l = c.optout === "optional";
  for (const d in t) {
    if (s.has(d))
      continue;
    if (u === "never") {
      a.push(d);
      continue;
    }
    const f = c.run({ value: t[d], issues: [] }, i);
    f instanceof Promise ? e.push(f.then((h) => hr(h, r, d, t, l))) : hr(f, r, d, t, l);
  }
  return a.length && r.issues.push({
    code: "unrecognized_keys",
    keys: a,
    input: t,
    inst: o
  }), e.length ? Promise.all(e).then(() => r) : r;
}
const Ql = /* @__PURE__ */ g("$ZodObject", (e, t) => {
  if (G.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    const s = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const c = { ...s };
        return Object.defineProperty(t, "shape", {
          value: c
        }), c;
      }
    });
  }
  const i = $n(() => Xl(t));
  te(e._zod, "propValues", () => {
    const s = t.shape, c = {};
    for (const u in s) {
      const l = s[u]._zod;
      if (l.values) {
        c[u] ?? (c[u] = /* @__PURE__ */ new Set());
        for (const d of l.values)
          c[u].add(d);
      }
    }
    return c;
  });
  const n = Bt, o = t.catchall;
  let a;
  e._zod.parse = (s, c) => {
    a ?? (a = i.value);
    const u = s.value;
    if (!n(u))
      return s.issues.push({
        expected: "object",
        code: "invalid_type",
        input: u,
        inst: e
      }), s;
    s.value = {};
    const l = [], d = a.shape;
    for (const f of a.keys) {
      const h = d[f], v = h._zod.optout === "optional", _ = h._zod.run({ value: u[f], issues: [] }, c);
      _ instanceof Promise ? l.push(_.then((k) => hr(k, s, f, u, v))) : hr(_, s, f, u, v);
    }
    return o ? Yl(l, u, s, c, i.value, e) : l.length ? Promise.all(l).then(() => s) : s;
  };
}), ed = /* @__PURE__ */ g("$ZodObjectJIT", (e, t) => {
  Ql.init(e, t);
  const r = e._zod.parse, i = $n(() => Xl(t)), n = (f) => {
    const h = new dl(["shape", "payload", "ctx"]), v = i.value, _ = (S) => {
      const O = Ji(S);
      return `shape[${O}]._zod.run({ value: input[${O}], issues: [] }, ctx)`;
    };
    h.write("const input = payload.value;");
    const k = /* @__PURE__ */ Object.create(null);
    let T = 0;
    for (const S of v.keys)
      k[S] = `key_${T++}`;
    h.write("const newResult = {};");
    for (const S of v.keys) {
      const O = k[S], U = Ji(S), z = f[S]?._zod?.optout === "optional";
      h.write(`const ${O} = ${_(S)};`), z ? h.write(`
        if (${O}.issues.length) {
          if (${U} in input) {
            payload.issues = payload.issues.concat(${O}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${U}, ...iss.path] : [${U}]
            })));
          }
        }
        
        if (${O}.value === undefined) {
          if (${U} in input) {
            newResult[${U}] = undefined;
          }
        } else {
          newResult[${U}] = ${O}.value;
        }
        
      `) : h.write(`
        if (${O}.issues.length) {
          payload.issues = payload.issues.concat(${O}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${U}, ...iss.path] : [${U}]
          })));
        }
        
        if (${O}.value === undefined) {
          if (${U} in input) {
            newResult[${U}] = undefined;
          }
        } else {
          newResult[${U}] = ${O}.value;
        }
        
      `);
    }
    h.write("payload.value = newResult;"), h.write("return payload;");
    const B = h.compile();
    return (S, O) => B(f, S, O);
  };
  let o;
  const a = Bt, s = !lr.jitless, u = s && Vc.value, l = t.catchall;
  let d;
  e._zod.parse = (f, h) => {
    d ?? (d = i.value);
    const v = f.value;
    return a(v) ? s && u && h?.async === !1 && h.jitless !== !0 ? (o || (o = n(t.shape)), f = o(f, h), l ? Yl([], v, f, h, d, e) : f) : r(f, h) : (f.issues.push({
      expected: "object",
      code: "invalid_type",
      input: v,
      inst: e
    }), f);
  };
});
function Ss(e, t, r, i) {
  for (const o of e)
    if (o.issues.length === 0)
      return t.value = o.value, t;
  const n = e.filter((o) => !Tt(o));
  return n.length === 1 ? (t.value = n[0].value, n[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: r,
    errors: e.map((o) => o.issues.map((a) => Ye(a, i, Ce())))
  }), t);
}
const Er = /* @__PURE__ */ g("$ZodUnion", (e, t) => {
  G.init(e, t), te(e._zod, "optin", () => t.options.some((n) => n._zod.optin === "optional") ? "optional" : void 0), te(e._zod, "optout", () => t.options.some((n) => n._zod.optout === "optional") ? "optional" : void 0), te(e._zod, "values", () => {
    if (t.options.every((n) => n._zod.values))
      return new Set(t.options.flatMap((n) => Array.from(n._zod.values)));
  }), te(e._zod, "pattern", () => {
    if (t.options.every((n) => n._zod.pattern)) {
      const n = t.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${n.map((o) => Ir(o.source)).join("|")})$`);
    }
  });
  const r = t.options.length === 1, i = t.options[0]._zod.run;
  e._zod.parse = (n, o) => {
    if (r)
      return i(n, o);
    let a = !1;
    const s = [];
    for (const c of t.options) {
      const u = c._zod.run({
        value: n.value,
        issues: []
      }, o);
      if (u instanceof Promise)
        s.push(u), a = !0;
      else {
        if (u.issues.length === 0)
          return u;
        s.push(u);
      }
    }
    return a ? Promise.all(s).then((c) => Ss(c, n, e, o)) : Ss(s, n, e, o);
  };
});
function Is(e, t, r, i) {
  const n = e.filter((o) => o.issues.length === 0);
  return n.length === 1 ? (t.value = n[0].value, t) : (n.length === 0 ? t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: r,
    errors: e.map((o) => o.issues.map((a) => Ye(a, i, Ce())))
  }) : t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: r,
    errors: [],
    inclusive: !1
  }), t);
}
const td = /* @__PURE__ */ g("$ZodXor", (e, t) => {
  Er.init(e, t), t.inclusive = !1;
  const r = t.options.length === 1, i = t.options[0]._zod.run;
  e._zod.parse = (n, o) => {
    if (r)
      return i(n, o);
    let a = !1;
    const s = [];
    for (const c of t.options) {
      const u = c._zod.run({
        value: n.value,
        issues: []
      }, o);
      u instanceof Promise ? (s.push(u), a = !0) : s.push(u);
    }
    return a ? Promise.all(s).then((c) => Is(c, n, e, o)) : Is(s, n, e, o);
  };
}), nd = /* @__PURE__ */ g("$ZodDiscriminatedUnion", (e, t) => {
  t.inclusive = !1, Er.init(e, t);
  const r = e._zod.parse;
  te(e._zod, "propValues", () => {
    const n = {};
    for (const o of t.options) {
      const a = o._zod.propValues;
      if (!a || Object.keys(a).length === 0)
        throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(o)}"`);
      for (const [s, c] of Object.entries(a)) {
        n[s] || (n[s] = /* @__PURE__ */ new Set());
        for (const u of c)
          n[s].add(u);
      }
    }
    return n;
  });
  const i = $n(() => {
    const n = t.options, o = /* @__PURE__ */ new Map();
    for (const a of n) {
      const s = a._zod.propValues?.[t.discriminator];
      if (!s || s.size === 0)
        throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(a)}"`);
      for (const c of s) {
        if (o.has(c))
          throw new Error(`Duplicate discriminator value "${String(c)}"`);
        o.set(c, a);
      }
    }
    return o;
  });
  e._zod.parse = (n, o) => {
    const a = n.value;
    if (!Bt(a))
      return n.issues.push({
        code: "invalid_type",
        expected: "object",
        input: a,
        inst: e
      }), n;
    const s = i.value.get(a?.[t.discriminator]);
    return s ? s._zod.run(n, o) : t.unionFallback ? r(n, o) : (n.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: t.discriminator,
      input: a,
      path: [t.discriminator],
      inst: e
    }), n);
  };
}), rd = /* @__PURE__ */ g("$ZodIntersection", (e, t) => {
  G.init(e, t), e._zod.parse = (r, i) => {
    const n = r.value, o = t.left._zod.run({ value: n, issues: [] }, i), a = t.right._zod.run({ value: n, issues: [] }, i);
    return o instanceof Promise || a instanceof Promise ? Promise.all([o, a]).then(([c, u]) => zs(r, c, u)) : zs(r, o, a);
  };
});
function Wi(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (Ct(e) && Ct(t)) {
    const r = Object.keys(t), i = Object.keys(e).filter((o) => r.indexOf(o) !== -1), n = { ...e, ...t };
    for (const o of i) {
      const a = Wi(e[o], t[o]);
      if (!a.valid)
        return {
          valid: !1,
          mergeErrorPath: [o, ...a.mergeErrorPath]
        };
      n[o] = a.data;
    }
    return { valid: !0, data: n };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const r = [];
    for (let i = 0; i < e.length; i++) {
      const n = e[i], o = t[i], a = Wi(n, o);
      if (!a.valid)
        return {
          valid: !1,
          mergeErrorPath: [i, ...a.mergeErrorPath]
        };
      r.push(a.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function zs(e, t, r) {
  const i = /* @__PURE__ */ new Map();
  let n;
  for (const s of t.issues)
    if (s.code === "unrecognized_keys") {
      n ?? (n = s);
      for (const c of s.keys)
        i.has(c) || i.set(c, {}), i.get(c).l = !0;
    } else
      e.issues.push(s);
  for (const s of r.issues)
    if (s.code === "unrecognized_keys")
      for (const c of s.keys)
        i.has(c) || i.set(c, {}), i.get(c).r = !0;
    else
      e.issues.push(s);
  const o = [...i].filter(([, s]) => s.l && s.r).map(([s]) => s);
  if (o.length && n && e.issues.push({ ...n, keys: o }), Tt(e))
    return e;
  const a = Wi(t.value, r.value);
  if (!a.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);
  return e.value = a.data, e;
}
const Co = /* @__PURE__ */ g("$ZodTuple", (e, t) => {
  G.init(e, t);
  const r = t.items;
  e._zod.parse = (i, n) => {
    const o = i.value;
    if (!Array.isArray(o))
      return i.issues.push({
        input: o,
        inst: e,
        expected: "tuple",
        code: "invalid_type"
      }), i;
    i.value = [];
    const a = [], s = [...r].reverse().findIndex((l) => l._zod.optin !== "optional"), c = s === -1 ? 0 : r.length - s;
    if (!t.rest) {
      const l = o.length > r.length, d = o.length < c - 1;
      if (l || d)
        return i.issues.push({
          ...l ? { code: "too_big", maximum: r.length, inclusive: !0 } : { code: "too_small", minimum: r.length },
          input: o,
          inst: e,
          origin: "array"
        }), i;
    }
    let u = -1;
    for (const l of r) {
      if (u++, u >= o.length && u >= c)
        continue;
      const d = l._zod.run({
        value: o[u],
        issues: []
      }, n);
      d instanceof Promise ? a.push(d.then((f) => qn(f, i, u))) : qn(d, i, u);
    }
    if (t.rest) {
      const l = o.slice(r.length);
      for (const d of l) {
        u++;
        const f = t.rest._zod.run({
          value: d,
          issues: []
        }, n);
        f instanceof Promise ? a.push(f.then((h) => qn(h, i, u))) : qn(f, i, u);
      }
    }
    return a.length ? Promise.all(a).then(() => i) : i;
  };
});
function qn(e, t, r) {
  e.issues.length && t.issues.push(...ot(r, e.issues)), t.value[r] = e.value;
}
const id = /* @__PURE__ */ g("$ZodRecord", (e, t) => {
  G.init(e, t), e._zod.parse = (r, i) => {
    const n = r.value;
    if (!Ct(n))
      return r.issues.push({
        expected: "record",
        code: "invalid_type",
        input: n,
        inst: e
      }), r;
    const o = [], a = t.keyType._zod.values;
    if (a) {
      r.value = {};
      const s = /* @__PURE__ */ new Set();
      for (const u of a)
        if (typeof u == "string" || typeof u == "number" || typeof u == "symbol") {
          s.add(typeof u == "number" ? u.toString() : u);
          const l = t.valueType._zod.run({ value: n[u], issues: [] }, i);
          l instanceof Promise ? o.push(l.then((d) => {
            d.issues.length && r.issues.push(...ot(u, d.issues)), r.value[u] = d.value;
          })) : (l.issues.length && r.issues.push(...ot(u, l.issues)), r.value[u] = l.value);
        }
      let c;
      for (const u in n)
        s.has(u) || (c = c ?? [], c.push(u));
      c && c.length > 0 && r.issues.push({
        code: "unrecognized_keys",
        input: n,
        inst: e,
        keys: c
      });
    } else {
      r.value = {};
      for (const s of Reflect.ownKeys(n)) {
        if (s === "__proto__")
          continue;
        let c = t.keyType._zod.run({ value: s, issues: [] }, i);
        if (c instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (typeof s == "string" && So.test(s) && c.issues.length) {
          const d = t.keyType._zod.run({ value: Number(s), issues: [] }, i);
          if (d instanceof Promise)
            throw new Error("Async schemas not supported in object keys currently");
          d.issues.length === 0 && (c = d);
        }
        if (c.issues.length) {
          t.mode === "loose" ? r.value[s] = n[s] : r.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: c.issues.map((d) => Ye(d, i, Ce())),
            input: s,
            path: [s],
            inst: e
          });
          continue;
        }
        const l = t.valueType._zod.run({ value: n[s], issues: [] }, i);
        l instanceof Promise ? o.push(l.then((d) => {
          d.issues.length && r.issues.push(...ot(s, d.issues)), r.value[c.value] = d.value;
        })) : (l.issues.length && r.issues.push(...ot(s, l.issues)), r.value[c.value] = l.value);
      }
    }
    return o.length ? Promise.all(o).then(() => r) : r;
  };
}), od = /* @__PURE__ */ g("$ZodMap", (e, t) => {
  G.init(e, t), e._zod.parse = (r, i) => {
    const n = r.value;
    if (!(n instanceof Map))
      return r.issues.push({
        expected: "map",
        code: "invalid_type",
        input: n,
        inst: e
      }), r;
    const o = [];
    r.value = /* @__PURE__ */ new Map();
    for (const [a, s] of n) {
      const c = t.keyType._zod.run({ value: a, issues: [] }, i), u = t.valueType._zod.run({ value: s, issues: [] }, i);
      c instanceof Promise || u instanceof Promise ? o.push(Promise.all([c, u]).then(([l, d]) => {
        xs(l, d, r, a, n, e, i);
      })) : xs(c, u, r, a, n, e, i);
    }
    return o.length ? Promise.all(o).then(() => r) : r;
  };
});
function xs(e, t, r, i, n, o, a) {
  e.issues.length && (fr.has(typeof i) ? r.issues.push(...ot(i, e.issues)) : r.issues.push({
    code: "invalid_key",
    origin: "map",
    input: n,
    inst: o,
    issues: e.issues.map((s) => Ye(s, a, Ce()))
  })), t.issues.length && (fr.has(typeof i) ? r.issues.push(...ot(i, t.issues)) : r.issues.push({
    origin: "map",
    code: "invalid_element",
    input: n,
    inst: o,
    key: i,
    issues: t.issues.map((s) => Ye(s, a, Ce()))
  })), r.value.set(e.value, t.value);
}
const ad = /* @__PURE__ */ g("$ZodSet", (e, t) => {
  G.init(e, t), e._zod.parse = (r, i) => {
    const n = r.value;
    if (!(n instanceof Set))
      return r.issues.push({
        input: n,
        inst: e,
        expected: "set",
        code: "invalid_type"
      }), r;
    const o = [];
    r.value = /* @__PURE__ */ new Set();
    for (const a of n) {
      const s = t.valueType._zod.run({ value: a, issues: [] }, i);
      s instanceof Promise ? o.push(s.then((c) => Os(c, r))) : Os(s, r);
    }
    return o.length ? Promise.all(o).then(() => r) : r;
  };
});
function Os(e, t) {
  e.issues.length && t.issues.push(...e.issues), t.value.add(e.value);
}
const sd = /* @__PURE__ */ g("$ZodEnum", (e, t) => {
  G.init(e, t);
  const r = uo(t.entries), i = new Set(r);
  e._zod.values = i, e._zod.pattern = new RegExp(`^(${r.filter((n) => fr.has(typeof n)).map((n) => typeof n == "string" ? ht(n) : n.toString()).join("|")})$`), e._zod.parse = (n, o) => {
    const a = n.value;
    return i.has(a) || n.issues.push({
      code: "invalid_value",
      values: r,
      input: a,
      inst: e
    }), n;
  };
}), cd = /* @__PURE__ */ g("$ZodLiteral", (e, t) => {
  if (G.init(e, t), t.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const r = new Set(t.values);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${t.values.map((i) => typeof i == "string" ? ht(i) : i ? ht(i.toString()) : String(i)).join("|")})$`), e._zod.parse = (i, n) => {
    const o = i.value;
    return r.has(o) || i.issues.push({
      code: "invalid_value",
      values: t.values,
      input: o,
      inst: e
    }), i;
  };
}), ud = /* @__PURE__ */ g("$ZodFile", (e, t) => {
  G.init(e, t), e._zod.parse = (r, i) => {
    const n = r.value;
    return n instanceof File || r.issues.push({
      expected: "file",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), ld = /* @__PURE__ */ g("$ZodTransform", (e, t) => {
  G.init(e, t), e._zod.parse = (r, i) => {
    if (i.direction === "backward")
      throw new Sr(e.constructor.name);
    const n = t.transform(r.value, r);
    if (i.async)
      return (n instanceof Promise ? n : Promise.resolve(n)).then((a) => (r.value = a, r));
    if (n instanceof Promise)
      throw new Nt();
    return r.value = n, r;
  };
});
function Es(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const Uo = /* @__PURE__ */ g("$ZodOptional", (e, t) => {
  G.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", te(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), te(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${Ir(r.source)})?$`) : void 0;
  }), e._zod.parse = (r, i) => {
    if (t.innerType._zod.optin === "optional") {
      const n = t.innerType._zod.run(r, i);
      return n instanceof Promise ? n.then((o) => Es(o, r.value)) : Es(n, r.value);
    }
    return r.value === void 0 ? r : t.innerType._zod.run(r, i);
  };
}), dd = /* @__PURE__ */ g("$ZodExactOptional", (e, t) => {
  Uo.init(e, t), te(e._zod, "values", () => t.innerType._zod.values), te(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (r, i) => t.innerType._zod.run(r, i);
}), fd = /* @__PURE__ */ g("$ZodNullable", (e, t) => {
  G.init(e, t), te(e._zod, "optin", () => t.innerType._zod.optin), te(e._zod, "optout", () => t.innerType._zod.optout), te(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${Ir(r.source)}|null)$`) : void 0;
  }), te(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (r, i) => r.value === null ? r : t.innerType._zod.run(r, i);
}), hd = /* @__PURE__ */ g("$ZodDefault", (e, t) => {
  G.init(e, t), e._zod.optin = "optional", te(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, i) => {
    if (i.direction === "backward")
      return t.innerType._zod.run(r, i);
    if (r.value === void 0)
      return r.value = t.defaultValue, r;
    const n = t.innerType._zod.run(r, i);
    return n instanceof Promise ? n.then((o) => Ts(o, t)) : Ts(n, t);
  };
});
function Ts(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const pd = /* @__PURE__ */ g("$ZodPrefault", (e, t) => {
  G.init(e, t), e._zod.optin = "optional", te(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, i) => (i.direction === "backward" || r.value === void 0 && (r.value = t.defaultValue), t.innerType._zod.run(r, i));
}), md = /* @__PURE__ */ g("$ZodNonOptional", (e, t) => {
  G.init(e, t), te(e._zod, "values", () => {
    const r = t.innerType._zod.values;
    return r ? new Set([...r].filter((i) => i !== void 0)) : void 0;
  }), e._zod.parse = (r, i) => {
    const n = t.innerType._zod.run(r, i);
    return n instanceof Promise ? n.then((o) => Ns(o, e)) : Ns(n, e);
  };
});
function Ns(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const gd = /* @__PURE__ */ g("$ZodSuccess", (e, t) => {
  G.init(e, t), e._zod.parse = (r, i) => {
    if (i.direction === "backward")
      throw new Sr("ZodSuccess");
    const n = t.innerType._zod.run(r, i);
    return n instanceof Promise ? n.then((o) => (r.value = o.issues.length === 0, r)) : (r.value = n.issues.length === 0, r);
  };
}), vd = /* @__PURE__ */ g("$ZodCatch", (e, t) => {
  G.init(e, t), te(e._zod, "optin", () => t.innerType._zod.optin), te(e._zod, "optout", () => t.innerType._zod.optout), te(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, i) => {
    if (i.direction === "backward")
      return t.innerType._zod.run(r, i);
    const n = t.innerType._zod.run(r, i);
    return n instanceof Promise ? n.then((o) => (r.value = o.value, o.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: o.issues.map((a) => Ye(a, i, Ce()))
      },
      input: r.value
    }), r.issues = []), r)) : (r.value = n.value, n.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: n.issues.map((o) => Ye(o, i, Ce()))
      },
      input: r.value
    }), r.issues = []), r);
  };
}), _d = /* @__PURE__ */ g("$ZodNaN", (e, t) => {
  G.init(e, t), e._zod.parse = (r, i) => ((typeof r.value != "number" || !Number.isNaN(r.value)) && r.issues.push({
    input: r.value,
    inst: e,
    expected: "nan",
    code: "invalid_type"
  }), r);
}), yd = /* @__PURE__ */ g("$ZodPipe", (e, t) => {
  G.init(e, t), te(e._zod, "values", () => t.in._zod.values), te(e._zod, "optin", () => t.in._zod.optin), te(e._zod, "optout", () => t.out._zod.optout), te(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, i) => {
    if (i.direction === "backward") {
      const o = t.out._zod.run(r, i);
      return o instanceof Promise ? o.then((a) => Wn(a, t.in, i)) : Wn(o, t.in, i);
    }
    const n = t.in._zod.run(r, i);
    return n instanceof Promise ? n.then((o) => Wn(o, t.out, i)) : Wn(n, t.out, i);
  };
});
function Wn(e, t, r) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, r);
}
const Ao = /* @__PURE__ */ g("$ZodCodec", (e, t) => {
  G.init(e, t), te(e._zod, "values", () => t.in._zod.values), te(e._zod, "optin", () => t.in._zod.optin), te(e._zod, "optout", () => t.out._zod.optout), te(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, i) => {
    if ((i.direction || "forward") === "forward") {
      const o = t.in._zod.run(r, i);
      return o instanceof Promise ? o.then((a) => Kn(a, t, i)) : Kn(o, t, i);
    } else {
      const o = t.out._zod.run(r, i);
      return o instanceof Promise ? o.then((a) => Kn(a, t, i)) : Kn(o, t, i);
    }
  };
});
function Kn(e, t, r) {
  if (e.issues.length)
    return e.aborted = !0, e;
  if ((r.direction || "forward") === "forward") {
    const n = t.transform(e.value, e);
    return n instanceof Promise ? n.then((o) => Gn(e, o, t.out, r)) : Gn(e, n, t.out, r);
  } else {
    const n = t.reverseTransform(e.value, e);
    return n instanceof Promise ? n.then((o) => Gn(e, o, t.in, r)) : Gn(e, n, t.in, r);
  }
}
function Gn(e, t, r, i) {
  return e.issues.length ? (e.aborted = !0, e) : r._zod.run({ value: t, issues: e.issues }, i);
}
const $d = /* @__PURE__ */ g("$ZodReadonly", (e, t) => {
  G.init(e, t), te(e._zod, "propValues", () => t.innerType._zod.propValues), te(e._zod, "values", () => t.innerType._zod.values), te(e._zod, "optin", () => t.innerType?._zod?.optin), te(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (r, i) => {
    if (i.direction === "backward")
      return t.innerType._zod.run(r, i);
    const n = t.innerType._zod.run(r, i);
    return n instanceof Promise ? n.then(Cs) : Cs(n);
  };
});
function Cs(e) {
  return e.value = Object.freeze(e.value), e;
}
const bd = /* @__PURE__ */ g("$ZodTemplateLiteral", (e, t) => {
  G.init(e, t);
  const r = [];
  for (const i of t.parts)
    if (typeof i == "object" && i !== null) {
      if (!i._zod.pattern)
        throw new Error(`Invalid template literal part, no pattern found: ${[...i._zod.traits].shift()}`);
      const n = i._zod.pattern instanceof RegExp ? i._zod.pattern.source : i._zod.pattern;
      if (!n)
        throw new Error(`Invalid template literal part: ${i._zod.traits}`);
      const o = n.startsWith("^") ? 1 : 0, a = n.endsWith("$") ? n.length - 1 : n.length;
      r.push(n.slice(o, a));
    } else if (i === null || qc.has(typeof i))
      r.push(ht(`${i}`));
    else
      throw new Error(`Invalid template literal part: ${i}`);
  e._zod.pattern = new RegExp(`^${r.join("")}$`), e._zod.parse = (i, n) => typeof i.value != "string" ? (i.issues.push({
    input: i.value,
    inst: e,
    expected: "string",
    code: "invalid_type"
  }), i) : (e._zod.pattern.lastIndex = 0, e._zod.pattern.test(i.value) || i.issues.push({
    input: i.value,
    inst: e,
    code: "invalid_format",
    format: t.format ?? "template_literal",
    pattern: e._zod.pattern.source
  }), i);
}), kd = /* @__PURE__ */ g("$ZodFunction", (e, t) => (G.init(e, t), e._def = t, e._zod.def = t, e.implement = (r) => {
  if (typeof r != "function")
    throw new Error("implement() must be called with a function");
  return function(...i) {
    const n = e._def.input ? Vi(e._def.input, i) : i, o = Reflect.apply(r, this, n);
    return e._def.output ? Vi(e._def.output, o) : o;
  };
}, e.implementAsync = (r) => {
  if (typeof r != "function")
    throw new Error("implementAsync() must be called with a function");
  return async function(...i) {
    const n = e._def.input ? await qi(e._def.input, i) : i, o = await Reflect.apply(r, this, n);
    return e._def.output ? await qi(e._def.output, o) : o;
  };
}, e._zod.parse = (r, i) => typeof r.value != "function" ? (r.issues.push({
  code: "invalid_type",
  expected: "function",
  input: r.value,
  inst: e
}), r) : (e._def.output && e._def.output._zod.def.type === "promise" ? r.value = e.implementAsync(r.value) : r.value = e.implement(r.value), r), e.input = (...r) => {
  const i = e.constructor;
  return Array.isArray(r[0]) ? new i({
    type: "function",
    input: new Co({
      type: "tuple",
      items: r[0],
      rest: r[1]
    }),
    output: e._def.output
  }) : new i({
    type: "function",
    input: r[0],
    output: e._def.output
  });
}, e.output = (r) => {
  const i = e.constructor;
  return new i({
    type: "function",
    input: e._def.input,
    output: r
  });
}, e)), wd = /* @__PURE__ */ g("$ZodPromise", (e, t) => {
  G.init(e, t), e._zod.parse = (r, i) => Promise.resolve(r.value).then((n) => t.innerType._zod.run({ value: n, issues: [] }, i));
}), Sd = /* @__PURE__ */ g("$ZodLazy", (e, t) => {
  G.init(e, t), te(e._zod, "innerType", () => t.getter()), te(e._zod, "pattern", () => e._zod.innerType?._zod?.pattern), te(e._zod, "propValues", () => e._zod.innerType?._zod?.propValues), te(e._zod, "optin", () => e._zod.innerType?._zod?.optin ?? void 0), te(e._zod, "optout", () => e._zod.innerType?._zod?.optout ?? void 0), e._zod.parse = (r, i) => e._zod.innerType._zod.run(r, i);
}), Id = /* @__PURE__ */ g("$ZodCustom", (e, t) => {
  ye.init(e, t), G.init(e, t), e._zod.parse = (r, i) => r, e._zod.check = (r) => {
    const i = r.value, n = t.fn(i);
    if (n instanceof Promise)
      return n.then((o) => Us(o, r, i, e));
    Us(n, r, i, e);
  };
});
function Us(e, t, r, i) {
  if (!e) {
    const n = {
      code: "custom",
      input: r,
      inst: i,
      // incorporates params.error into issue reporting
      path: [...i._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !i._zod.def.abort
      // params: inst._zod.def.params,
    };
    i._zod.def.params && (n.params = i._zod.def.params), t.issues.push(Jt(n));
  }
}
const Bg = () => {
  const e = {
    string: { unit: "حرف", verb: "أن يحوي" },
    file: { unit: "بايت", verb: "أن يحوي" },
    array: { unit: "عنصر", verb: "أن يحوي" },
    set: { unit: "عنصر", verb: "أن يحوي" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "مدخل",
    email: "بريد إلكتروني",
    url: "رابط",
    emoji: "إيموجي",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "تاريخ ووقت بمعيار ISO",
    date: "تاريخ بمعيار ISO",
    time: "وقت بمعيار ISO",
    duration: "مدة بمعيار ISO",
    ipv4: "عنوان IPv4",
    ipv6: "عنوان IPv6",
    cidrv4: "مدى عناوين بصيغة IPv4",
    cidrv6: "مدى عناوين بصيغة IPv6",
    base64: "نَص بترميز base64-encoded",
    base64url: "نَص بترميز base64url-encoded",
    json_string: "نَص على هيئة JSON",
    e164: "رقم هاتف بمعيار E.164",
    jwt: "JWT",
    template_literal: "مدخل"
  }, i = {
    nan: "NaN"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `مدخلات غير مقبولة: يفترض إدخال instanceof ${n.expected}، ولكن تم إدخال ${s}` : `مدخلات غير مقبولة: يفترض إدخال ${o}، ولكن تم إدخال ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `مدخلات غير مقبولة: يفترض إدخال ${M(n.values[0])}` : `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? ` أكبر من اللازم: يفترض أن تكون ${n.origin ?? "القيمة"} ${o} ${n.maximum.toString()} ${a.unit ?? "عنصر"}` : `أكبر من اللازم: يفترض أن تكون ${n.origin ?? "القيمة"} ${o} ${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `أصغر من اللازم: يفترض لـ ${n.origin} أن يكون ${o} ${n.minimum.toString()} ${a.unit}` : `أصغر من اللازم: يفترض لـ ${n.origin} أن يكون ${o} ${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `نَص غير مقبول: يجب أن يبدأ بـ "${n.prefix}"` : o.format === "ends_with" ? `نَص غير مقبول: يجب أن ينتهي بـ "${o.suffix}"` : o.format === "includes" ? `نَص غير مقبول: يجب أن يتضمَّن "${o.includes}"` : o.format === "regex" ? `نَص غير مقبول: يجب أن يطابق النمط ${o.pattern}` : `${r[o.format] ?? n.format} غير مقبول`;
      }
      case "not_multiple_of":
        return `رقم غير مقبول: يجب أن يكون من مضاعفات ${n.divisor}`;
      case "unrecognized_keys":
        return `معرف${n.keys.length > 1 ? "ات" : ""} غريب${n.keys.length > 1 ? "ة" : ""}: ${I(n.keys, "، ")}`;
      case "invalid_key":
        return `معرف غير مقبول في ${n.origin}`;
      case "invalid_union":
        return "مدخل غير مقبول";
      case "invalid_element":
        return `مدخل غير مقبول في ${n.origin}`;
      default:
        return "مدخل غير مقبول";
    }
  };
};
function Jg() {
  return {
    localeError: Bg()
  };
}
const Vg = () => {
  const e = {
    string: { unit: "simvol", verb: "olmalıdır" },
    file: { unit: "bayt", verb: "olmalıdır" },
    array: { unit: "element", verb: "olmalıdır" },
    set: { unit: "element", verb: "olmalıdır" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  }, i = {
    nan: "NaN"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Yanlış dəyər: gözlənilən instanceof ${n.expected}, daxil olan ${s}` : `Yanlış dəyər: gözlənilən ${o}, daxil olan ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Yanlış dəyər: gözlənilən ${M(n.values[0])}` : `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Çox böyük: gözlənilən ${n.origin ?? "dəyər"} ${o}${n.maximum.toString()} ${a.unit ?? "element"}` : `Çox böyük: gözlənilən ${n.origin ?? "dəyər"} ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Çox kiçik: gözlənilən ${n.origin} ${o}${n.minimum.toString()} ${a.unit}` : `Çox kiçik: gözlənilən ${n.origin} ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Yanlış mətn: "${o.prefix}" ilə başlamalıdır` : o.format === "ends_with" ? `Yanlış mətn: "${o.suffix}" ilə bitməlidir` : o.format === "includes" ? `Yanlış mətn: "${o.includes}" daxil olmalıdır` : o.format === "regex" ? `Yanlış mətn: ${o.pattern} şablonuna uyğun olmalıdır` : `Yanlış ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Yanlış ədəd: ${n.divisor} ilə bölünə bilən olmalıdır`;
      case "unrecognized_keys":
        return `Tanınmayan açar${n.keys.length > 1 ? "lar" : ""}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} daxilində yanlış açar`;
      case "invalid_union":
        return "Yanlış dəyər";
      case "invalid_element":
        return `${n.origin} daxilində yanlış dəyər`;
      default:
        return "Yanlış dəyər";
    }
  };
};
function qg() {
  return {
    localeError: Vg()
  };
}
function As(e, t, r, i) {
  const n = Math.abs(e), o = n % 10, a = n % 100;
  return a >= 11 && a <= 19 ? i : o === 1 ? t : o >= 2 && o <= 4 ? r : i;
}
const Wg = () => {
  const e = {
    string: {
      unit: {
        one: "сімвал",
        few: "сімвалы",
        many: "сімвалаў"
      },
      verb: "мець"
    },
    array: {
      unit: {
        one: "элемент",
        few: "элементы",
        many: "элементаў"
      },
      verb: "мець"
    },
    set: {
      unit: {
        one: "элемент",
        few: "элементы",
        many: "элементаў"
      },
      verb: "мець"
    },
    file: {
      unit: {
        one: "байт",
        few: "байты",
        many: "байтаў"
      },
      verb: "мець"
    }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "увод",
    email: "email адрас",
    url: "URL",
    emoji: "эмодзі",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO дата і час",
    date: "ISO дата",
    time: "ISO час",
    duration: "ISO працягласць",
    ipv4: "IPv4 адрас",
    ipv6: "IPv6 адрас",
    cidrv4: "IPv4 дыяпазон",
    cidrv6: "IPv6 дыяпазон",
    base64: "радок у фармаце base64",
    base64url: "радок у фармаце base64url",
    json_string: "JSON радок",
    e164: "нумар E.164",
    jwt: "JWT",
    template_literal: "увод"
  }, i = {
    nan: "NaN",
    number: "лік",
    array: "масіў"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Няправільны ўвод: чакаўся instanceof ${n.expected}, атрымана ${s}` : `Няправільны ўвод: чакаўся ${o}, атрымана ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Няправільны ўвод: чакалася ${M(n.values[0])}` : `Няправільны варыянт: чакаўся адзін з ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        if (a) {
          const s = Number(n.maximum), c = As(s, a.unit.one, a.unit.few, a.unit.many);
          return `Занадта вялікі: чакалася, што ${n.origin ?? "значэнне"} павінна ${a.verb} ${o}${n.maximum.toString()} ${c}`;
        }
        return `Занадта вялікі: чакалася, што ${n.origin ?? "значэнне"} павінна быць ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        if (a) {
          const s = Number(n.minimum), c = As(s, a.unit.one, a.unit.few, a.unit.many);
          return `Занадта малы: чакалася, што ${n.origin} павінна ${a.verb} ${o}${n.minimum.toString()} ${c}`;
        }
        return `Занадта малы: чакалася, што ${n.origin} павінна быць ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Няправільны радок: павінен пачынацца з "${o.prefix}"` : o.format === "ends_with" ? `Няправільны радок: павінен заканчвацца на "${o.suffix}"` : o.format === "includes" ? `Няправільны радок: павінен змяшчаць "${o.includes}"` : o.format === "regex" ? `Няправільны радок: павінен адпавядаць шаблону ${o.pattern}` : `Няправільны ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Няправільны лік: павінен быць кратным ${n.divisor}`;
      case "unrecognized_keys":
        return `Нераспазнаны ${n.keys.length > 1 ? "ключы" : "ключ"}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Няправільны ключ у ${n.origin}`;
      case "invalid_union":
        return "Няправільны ўвод";
      case "invalid_element":
        return `Няправільнае значэнне ў ${n.origin}`;
      default:
        return "Няправільны ўвод";
    }
  };
};
function Kg() {
  return {
    localeError: Wg()
  };
}
const Gg = () => {
  const e = {
    string: { unit: "символа", verb: "да съдържа" },
    file: { unit: "байта", verb: "да съдържа" },
    array: { unit: "елемента", verb: "да съдържа" },
    set: { unit: "елемента", verb: "да съдържа" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "вход",
    email: "имейл адрес",
    url: "URL",
    emoji: "емоджи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO време",
    date: "ISO дата",
    time: "ISO време",
    duration: "ISO продължителност",
    ipv4: "IPv4 адрес",
    ipv6: "IPv6 адрес",
    cidrv4: "IPv4 диапазон",
    cidrv6: "IPv6 диапазон",
    base64: "base64-кодиран низ",
    base64url: "base64url-кодиран низ",
    json_string: "JSON низ",
    e164: "E.164 номер",
    jwt: "JWT",
    template_literal: "вход"
  }, i = {
    nan: "NaN",
    number: "число",
    array: "масив"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Невалиден вход: очакван instanceof ${n.expected}, получен ${s}` : `Невалиден вход: очакван ${o}, получен ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Невалиден вход: очакван ${M(n.values[0])}` : `Невалидна опция: очаквано едно от ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Твърде голямо: очаква се ${n.origin ?? "стойност"} да съдържа ${o}${n.maximum.toString()} ${a.unit ?? "елемента"}` : `Твърде голямо: очаква се ${n.origin ?? "стойност"} да бъде ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Твърде малко: очаква се ${n.origin} да съдържа ${o}${n.minimum.toString()} ${a.unit}` : `Твърде малко: очаква се ${n.origin} да бъде ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        if (o.format === "starts_with")
          return `Невалиден низ: трябва да започва с "${o.prefix}"`;
        if (o.format === "ends_with")
          return `Невалиден низ: трябва да завършва с "${o.suffix}"`;
        if (o.format === "includes")
          return `Невалиден низ: трябва да включва "${o.includes}"`;
        if (o.format === "regex")
          return `Невалиден низ: трябва да съвпада с ${o.pattern}`;
        let a = "Невалиден";
        return o.format === "emoji" && (a = "Невалидно"), o.format === "datetime" && (a = "Невалидно"), o.format === "date" && (a = "Невалидна"), o.format === "time" && (a = "Невалидно"), o.format === "duration" && (a = "Невалидна"), `${a} ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Невалидно число: трябва да бъде кратно на ${n.divisor}`;
      case "unrecognized_keys":
        return `Неразпознат${n.keys.length > 1 ? "и" : ""} ключ${n.keys.length > 1 ? "ове" : ""}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Невалиден ключ в ${n.origin}`;
      case "invalid_union":
        return "Невалиден вход";
      case "invalid_element":
        return `Невалидна стойност в ${n.origin}`;
      default:
        return "Невалиден вход";
    }
  };
};
function Hg() {
  return {
    localeError: Gg()
  };
}
const Xg = () => {
  const e = {
    string: { unit: "caràcters", verb: "contenir" },
    file: { unit: "bytes", verb: "contenir" },
    array: { unit: "elements", verb: "contenir" },
    set: { unit: "elements", verb: "contenir" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "entrada",
    email: "adreça electrònica",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "durada ISO",
    ipv4: "adreça IPv4",
    ipv6: "adreça IPv6",
    cidrv4: "rang IPv4",
    cidrv6: "rang IPv6",
    base64: "cadena codificada en base64",
    base64url: "cadena codificada en base64url",
    json_string: "cadena JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  }, i = {
    nan: "NaN"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Tipus invàlid: s'esperava instanceof ${n.expected}, s'ha rebut ${s}` : `Tipus invàlid: s'esperava ${o}, s'ha rebut ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Valor invàlid: s'esperava ${M(n.values[0])}` : `Opció invàlida: s'esperava una de ${I(n.values, " o ")}`;
      case "too_big": {
        const o = n.inclusive ? "com a màxim" : "menys de", a = t(n.origin);
        return a ? `Massa gran: s'esperava que ${n.origin ?? "el valor"} contingués ${o} ${n.maximum.toString()} ${a.unit ?? "elements"}` : `Massa gran: s'esperava que ${n.origin ?? "el valor"} fos ${o} ${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? "com a mínim" : "més de", a = t(n.origin);
        return a ? `Massa petit: s'esperava que ${n.origin} contingués ${o} ${n.minimum.toString()} ${a.unit}` : `Massa petit: s'esperava que ${n.origin} fos ${o} ${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Format invàlid: ha de començar amb "${o.prefix}"` : o.format === "ends_with" ? `Format invàlid: ha d'acabar amb "${o.suffix}"` : o.format === "includes" ? `Format invàlid: ha d'incloure "${o.includes}"` : o.format === "regex" ? `Format invàlid: ha de coincidir amb el patró ${o.pattern}` : `Format invàlid per a ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Número invàlid: ha de ser múltiple de ${n.divisor}`;
      case "unrecognized_keys":
        return `Clau${n.keys.length > 1 ? "s" : ""} no reconeguda${n.keys.length > 1 ? "s" : ""}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Clau invàlida a ${n.origin}`;
      case "invalid_union":
        return "Entrada invàlida";
      // Could also be "Tipus d'unió invàlid" but "Entrada invàlida" is more general
      case "invalid_element":
        return `Element invàlid a ${n.origin}`;
      default:
        return "Entrada invàlida";
    }
  };
};
function Yg() {
  return {
    localeError: Xg()
  };
}
const Qg = () => {
  const e = {
    string: { unit: "znaků", verb: "mít" },
    file: { unit: "bajtů", verb: "mít" },
    array: { unit: "prvků", verb: "mít" },
    set: { unit: "prvků", verb: "mít" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "regulární výraz",
    email: "e-mailová adresa",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "datum a čas ve formátu ISO",
    date: "datum ve formátu ISO",
    time: "čas ve formátu ISO",
    duration: "doba trvání ISO",
    ipv4: "IPv4 adresa",
    ipv6: "IPv6 adresa",
    cidrv4: "rozsah IPv4",
    cidrv6: "rozsah IPv6",
    base64: "řetězec zakódovaný ve formátu base64",
    base64url: "řetězec zakódovaný ve formátu base64url",
    json_string: "řetězec ve formátu JSON",
    e164: "číslo E.164",
    jwt: "JWT",
    template_literal: "vstup"
  }, i = {
    nan: "NaN",
    number: "číslo",
    string: "řetězec",
    function: "funkce",
    array: "pole"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Neplatný vstup: očekáváno instanceof ${n.expected}, obdrženo ${s}` : `Neplatný vstup: očekáváno ${o}, obdrženo ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Neplatný vstup: očekáváno ${M(n.values[0])}` : `Neplatná možnost: očekávána jedna z hodnot ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Hodnota je příliš velká: ${n.origin ?? "hodnota"} musí mít ${o}${n.maximum.toString()} ${a.unit ?? "prvků"}` : `Hodnota je příliš velká: ${n.origin ?? "hodnota"} musí být ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Hodnota je příliš malá: ${n.origin ?? "hodnota"} musí mít ${o}${n.minimum.toString()} ${a.unit ?? "prvků"}` : `Hodnota je příliš malá: ${n.origin ?? "hodnota"} musí být ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Neplatný řetězec: musí začínat na "${o.prefix}"` : o.format === "ends_with" ? `Neplatný řetězec: musí končit na "${o.suffix}"` : o.format === "includes" ? `Neplatný řetězec: musí obsahovat "${o.includes}"` : o.format === "regex" ? `Neplatný řetězec: musí odpovídat vzoru ${o.pattern}` : `Neplatný formát ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Neplatné číslo: musí být násobkem ${n.divisor}`;
      case "unrecognized_keys":
        return `Neznámé klíče: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Neplatný klíč v ${n.origin}`;
      case "invalid_union":
        return "Neplatný vstup";
      case "invalid_element":
        return `Neplatná hodnota v ${n.origin}`;
      default:
        return "Neplatný vstup";
    }
  };
};
function ev() {
  return {
    localeError: Qg()
  };
}
const tv = () => {
  const e = {
    string: { unit: "tegn", verb: "havde" },
    file: { unit: "bytes", verb: "havde" },
    array: { unit: "elementer", verb: "indeholdt" },
    set: { unit: "elementer", verb: "indeholdt" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "input",
    email: "e-mailadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkeslæt",
    date: "ISO-dato",
    time: "ISO-klokkeslæt",
    duration: "ISO-varighed",
    ipv4: "IPv4-område",
    ipv6: "IPv6-område",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodet streng",
    base64url: "base64url-kodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  }, i = {
    nan: "NaN",
    string: "streng",
    number: "tal",
    boolean: "boolean",
    array: "liste",
    object: "objekt",
    set: "sæt",
    file: "fil"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Ugyldigt input: forventede instanceof ${n.expected}, fik ${s}` : `Ugyldigt input: forventede ${o}, fik ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Ugyldig værdi: forventede ${M(n.values[0])}` : `Ugyldigt valg: forventede en af følgende ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin), s = i[n.origin] ?? n.origin;
        return a ? `For stor: forventede ${s ?? "value"} ${a.verb} ${o} ${n.maximum.toString()} ${a.unit ?? "elementer"}` : `For stor: forventede ${s ?? "value"} havde ${o} ${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin), s = i[n.origin] ?? n.origin;
        return a ? `For lille: forventede ${s} ${a.verb} ${o} ${n.minimum.toString()} ${a.unit}` : `For lille: forventede ${s} havde ${o} ${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Ugyldig streng: skal starte med "${o.prefix}"` : o.format === "ends_with" ? `Ugyldig streng: skal ende med "${o.suffix}"` : o.format === "includes" ? `Ugyldig streng: skal indeholde "${o.includes}"` : o.format === "regex" ? `Ugyldig streng: skal matche mønsteret ${o.pattern}` : `Ugyldig ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ugyldigt tal: skal være deleligt med ${n.divisor}`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig nøgle i ${n.origin}`;
      case "invalid_union":
        return "Ugyldigt input: matcher ingen af de tilladte typer";
      case "invalid_element":
        return `Ugyldig værdi i ${n.origin}`;
      default:
        return "Ugyldigt input";
    }
  };
};
function nv() {
  return {
    localeError: tv()
  };
}
const rv = () => {
  const e = {
    string: { unit: "Zeichen", verb: "zu haben" },
    file: { unit: "Bytes", verb: "zu haben" },
    array: { unit: "Elemente", verb: "zu haben" },
    set: { unit: "Elemente", verb: "zu haben" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "Eingabe",
    email: "E-Mail-Adresse",
    url: "URL",
    emoji: "Emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-Datum und -Uhrzeit",
    date: "ISO-Datum",
    time: "ISO-Uhrzeit",
    duration: "ISO-Dauer",
    ipv4: "IPv4-Adresse",
    ipv6: "IPv6-Adresse",
    cidrv4: "IPv4-Bereich",
    cidrv6: "IPv6-Bereich",
    base64: "Base64-codierter String",
    base64url: "Base64-URL-codierter String",
    json_string: "JSON-String",
    e164: "E.164-Nummer",
    jwt: "JWT",
    template_literal: "Eingabe"
  }, i = {
    nan: "NaN",
    number: "Zahl",
    array: "Array"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Ungültige Eingabe: erwartet instanceof ${n.expected}, erhalten ${s}` : `Ungültige Eingabe: erwartet ${o}, erhalten ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Ungültige Eingabe: erwartet ${M(n.values[0])}` : `Ungültige Option: erwartet eine von ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Zu groß: erwartet, dass ${n.origin ?? "Wert"} ${o}${n.maximum.toString()} ${a.unit ?? "Elemente"} hat` : `Zu groß: erwartet, dass ${n.origin ?? "Wert"} ${o}${n.maximum.toString()} ist`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Zu klein: erwartet, dass ${n.origin} ${o}${n.minimum.toString()} ${a.unit} hat` : `Zu klein: erwartet, dass ${n.origin} ${o}${n.minimum.toString()} ist`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Ungültiger String: muss mit "${o.prefix}" beginnen` : o.format === "ends_with" ? `Ungültiger String: muss mit "${o.suffix}" enden` : o.format === "includes" ? `Ungültiger String: muss "${o.includes}" enthalten` : o.format === "regex" ? `Ungültiger String: muss dem Muster ${o.pattern} entsprechen` : `Ungültig: ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ungültige Zahl: muss ein Vielfaches von ${n.divisor} sein`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Ungültiger Schlüssel in ${n.origin}`;
      case "invalid_union":
        return "Ungültige Eingabe";
      case "invalid_element":
        return `Ungültiger Wert in ${n.origin}`;
      default:
        return "Ungültige Eingabe";
    }
  };
};
function iv() {
  return {
    localeError: rv()
  };
}
const ov = () => {
  const e = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    mac: "MAC address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  }, i = {
    // Compatibility: "nan" -> "NaN" for display
    nan: "NaN"
    // All other type names omitted - they fall back to raw values via ?? operator
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return `Invalid input: expected ${o}, received ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Invalid input: expected ${M(n.values[0])}` : `Invalid option: expected one of ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Too big: expected ${n.origin ?? "value"} to have ${o}${n.maximum.toString()} ${a.unit ?? "elements"}` : `Too big: expected ${n.origin ?? "value"} to be ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Too small: expected ${n.origin} to have ${o}${n.minimum.toString()} ${a.unit}` : `Too small: expected ${n.origin} to be ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Invalid string: must start with "${o.prefix}"` : o.format === "ends_with" ? `Invalid string: must end with "${o.suffix}"` : o.format === "includes" ? `Invalid string: must include "${o.includes}"` : o.format === "regex" ? `Invalid string: must match pattern ${o.pattern}` : `Invalid ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${n.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${n.keys.length > 1 ? "s" : ""}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${n.origin}`;
      case "invalid_union":
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${n.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function zd() {
  return {
    localeError: ov()
  };
}
const av = () => {
  const e = {
    string: { unit: "karaktrojn", verb: "havi" },
    file: { unit: "bajtojn", verb: "havi" },
    array: { unit: "elementojn", verb: "havi" },
    set: { unit: "elementojn", verb: "havi" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "enigo",
    email: "retadreso",
    url: "URL",
    emoji: "emoĝio",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datotempo",
    date: "ISO-dato",
    time: "ISO-tempo",
    duration: "ISO-daŭro",
    ipv4: "IPv4-adreso",
    ipv6: "IPv6-adreso",
    cidrv4: "IPv4-rango",
    cidrv6: "IPv6-rango",
    base64: "64-ume kodita karaktraro",
    base64url: "URL-64-ume kodita karaktraro",
    json_string: "JSON-karaktraro",
    e164: "E.164-nombro",
    jwt: "JWT",
    template_literal: "enigo"
  }, i = {
    nan: "NaN",
    number: "nombro",
    array: "tabelo",
    null: "senvalora"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Nevalida enigo: atendiĝis instanceof ${n.expected}, riceviĝis ${s}` : `Nevalida enigo: atendiĝis ${o}, riceviĝis ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Nevalida enigo: atendiĝis ${M(n.values[0])}` : `Nevalida opcio: atendiĝis unu el ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Tro granda: atendiĝis ke ${n.origin ?? "valoro"} havu ${o}${n.maximum.toString()} ${a.unit ?? "elementojn"}` : `Tro granda: atendiĝis ke ${n.origin ?? "valoro"} havu ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Tro malgranda: atendiĝis ke ${n.origin} havu ${o}${n.minimum.toString()} ${a.unit}` : `Tro malgranda: atendiĝis ke ${n.origin} estu ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Nevalida karaktraro: devas komenciĝi per "${o.prefix}"` : o.format === "ends_with" ? `Nevalida karaktraro: devas finiĝi per "${o.suffix}"` : o.format === "includes" ? `Nevalida karaktraro: devas inkluzivi "${o.includes}"` : o.format === "regex" ? `Nevalida karaktraro: devas kongrui kun la modelo ${o.pattern}` : `Nevalida ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Nevalida nombro: devas esti oblo de ${n.divisor}`;
      case "unrecognized_keys":
        return `Nekonata${n.keys.length > 1 ? "j" : ""} ŝlosilo${n.keys.length > 1 ? "j" : ""}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Nevalida ŝlosilo en ${n.origin}`;
      case "invalid_union":
        return "Nevalida enigo";
      case "invalid_element":
        return `Nevalida valoro en ${n.origin}`;
      default:
        return "Nevalida enigo";
    }
  };
};
function sv() {
  return {
    localeError: av()
  };
}
const cv = () => {
  const e = {
    string: { unit: "caracteres", verb: "tener" },
    file: { unit: "bytes", verb: "tener" },
    array: { unit: "elementos", verb: "tener" },
    set: { unit: "elementos", verb: "tener" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "entrada",
    email: "dirección de correo electrónico",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "fecha y hora ISO",
    date: "fecha ISO",
    time: "hora ISO",
    duration: "duración ISO",
    ipv4: "dirección IPv4",
    ipv6: "dirección IPv6",
    cidrv4: "rango IPv4",
    cidrv6: "rango IPv6",
    base64: "cadena codificada en base64",
    base64url: "URL codificada en base64",
    json_string: "cadena JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  }, i = {
    nan: "NaN",
    string: "texto",
    number: "número",
    boolean: "booleano",
    array: "arreglo",
    object: "objeto",
    set: "conjunto",
    file: "archivo",
    date: "fecha",
    bigint: "número grande",
    symbol: "símbolo",
    undefined: "indefinido",
    null: "nulo",
    function: "función",
    map: "mapa",
    record: "registro",
    tuple: "tupla",
    enum: "enumeración",
    union: "unión",
    literal: "literal",
    promise: "promesa",
    void: "vacío",
    never: "nunca",
    unknown: "desconocido",
    any: "cualquiera"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Entrada inválida: se esperaba instanceof ${n.expected}, recibido ${s}` : `Entrada inválida: se esperaba ${o}, recibido ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Entrada inválida: se esperaba ${M(n.values[0])}` : `Opción inválida: se esperaba una de ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin), s = i[n.origin] ?? n.origin;
        return a ? `Demasiado grande: se esperaba que ${s ?? "valor"} tuviera ${o}${n.maximum.toString()} ${a.unit ?? "elementos"}` : `Demasiado grande: se esperaba que ${s ?? "valor"} fuera ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin), s = i[n.origin] ?? n.origin;
        return a ? `Demasiado pequeño: se esperaba que ${s} tuviera ${o}${n.minimum.toString()} ${a.unit}` : `Demasiado pequeño: se esperaba que ${s} fuera ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Cadena inválida: debe comenzar con "${o.prefix}"` : o.format === "ends_with" ? `Cadena inválida: debe terminar en "${o.suffix}"` : o.format === "includes" ? `Cadena inválida: debe incluir "${o.includes}"` : o.format === "regex" ? `Cadena inválida: debe coincidir con el patrón ${o.pattern}` : `Inválido ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Número inválido: debe ser múltiplo de ${n.divisor}`;
      case "unrecognized_keys":
        return `Llave${n.keys.length > 1 ? "s" : ""} desconocida${n.keys.length > 1 ? "s" : ""}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Llave inválida en ${i[n.origin] ?? n.origin}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inválido en ${i[n.origin] ?? n.origin}`;
      default:
        return "Entrada inválida";
    }
  };
};
function uv() {
  return {
    localeError: cv()
  };
}
const lv = () => {
  const e = {
    string: { unit: "کاراکتر", verb: "داشته باشد" },
    file: { unit: "بایت", verb: "داشته باشد" },
    array: { unit: "آیتم", verb: "داشته باشد" },
    set: { unit: "آیتم", verb: "داشته باشد" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "ورودی",
    email: "آدرس ایمیل",
    url: "URL",
    emoji: "ایموجی",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "تاریخ و زمان ایزو",
    date: "تاریخ ایزو",
    time: "زمان ایزو",
    duration: "مدت زمان ایزو",
    ipv4: "IPv4 آدرس",
    ipv6: "IPv6 آدرس",
    cidrv4: "IPv4 دامنه",
    cidrv6: "IPv6 دامنه",
    base64: "base64-encoded رشته",
    base64url: "base64url-encoded رشته",
    json_string: "JSON رشته",
    e164: "E.164 عدد",
    jwt: "JWT",
    template_literal: "ورودی"
  }, i = {
    nan: "NaN",
    number: "عدد",
    array: "آرایه"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `ورودی نامعتبر: می‌بایست instanceof ${n.expected} می‌بود، ${s} دریافت شد` : `ورودی نامعتبر: می‌بایست ${o} می‌بود، ${s} دریافت شد`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `ورودی نامعتبر: می‌بایست ${M(n.values[0])} می‌بود` : `گزینه نامعتبر: می‌بایست یکی از ${I(n.values, "|")} می‌بود`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `خیلی بزرگ: ${n.origin ?? "مقدار"} باید ${o}${n.maximum.toString()} ${a.unit ?? "عنصر"} باشد` : `خیلی بزرگ: ${n.origin ?? "مقدار"} باید ${o}${n.maximum.toString()} باشد`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `خیلی کوچک: ${n.origin} باید ${o}${n.minimum.toString()} ${a.unit} باشد` : `خیلی کوچک: ${n.origin} باید ${o}${n.minimum.toString()} باشد`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `رشته نامعتبر: باید با "${o.prefix}" شروع شود` : o.format === "ends_with" ? `رشته نامعتبر: باید با "${o.suffix}" تمام شود` : o.format === "includes" ? `رشته نامعتبر: باید شامل "${o.includes}" باشد` : o.format === "regex" ? `رشته نامعتبر: باید با الگوی ${o.pattern} مطابقت داشته باشد` : `${r[o.format] ?? n.format} نامعتبر`;
      }
      case "not_multiple_of":
        return `عدد نامعتبر: باید مضرب ${n.divisor} باشد`;
      case "unrecognized_keys":
        return `کلید${n.keys.length > 1 ? "های" : ""} ناشناس: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `کلید ناشناس در ${n.origin}`;
      case "invalid_union":
        return "ورودی نامعتبر";
      case "invalid_element":
        return `مقدار نامعتبر در ${n.origin}`;
      default:
        return "ورودی نامعتبر";
    }
  };
};
function dv() {
  return {
    localeError: lv()
  };
}
const fv = () => {
  const e = {
    string: { unit: "merkkiä", subject: "merkkijonon" },
    file: { unit: "tavua", subject: "tiedoston" },
    array: { unit: "alkiota", subject: "listan" },
    set: { unit: "alkiota", subject: "joukon" },
    number: { unit: "", subject: "luvun" },
    bigint: { unit: "", subject: "suuren kokonaisluvun" },
    int: { unit: "", subject: "kokonaisluvun" },
    date: { unit: "", subject: "päivämäärän" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "säännöllinen lauseke",
    email: "sähköpostiosoite",
    url: "URL-osoite",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-aikaleima",
    date: "ISO-päivämäärä",
    time: "ISO-aika",
    duration: "ISO-kesto",
    ipv4: "IPv4-osoite",
    ipv6: "IPv6-osoite",
    cidrv4: "IPv4-alue",
    cidrv6: "IPv6-alue",
    base64: "base64-koodattu merkkijono",
    base64url: "base64url-koodattu merkkijono",
    json_string: "JSON-merkkijono",
    e164: "E.164-luku",
    jwt: "JWT",
    template_literal: "templaattimerkkijono"
  }, i = {
    nan: "NaN"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Virheellinen tyyppi: odotettiin instanceof ${n.expected}, oli ${s}` : `Virheellinen tyyppi: odotettiin ${o}, oli ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Virheellinen syöte: täytyy olla ${M(n.values[0])}` : `Virheellinen valinta: täytyy olla yksi seuraavista: ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Liian suuri: ${a.subject} täytyy olla ${o}${n.maximum.toString()} ${a.unit}`.trim() : `Liian suuri: arvon täytyy olla ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Liian pieni: ${a.subject} täytyy olla ${o}${n.minimum.toString()} ${a.unit}`.trim() : `Liian pieni: arvon täytyy olla ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Virheellinen syöte: täytyy alkaa "${o.prefix}"` : o.format === "ends_with" ? `Virheellinen syöte: täytyy loppua "${o.suffix}"` : o.format === "includes" ? `Virheellinen syöte: täytyy sisältää "${o.includes}"` : o.format === "regex" ? `Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${o.pattern}` : `Virheellinen ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Virheellinen luku: täytyy olla luvun ${n.divisor} monikerta`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return "Virheellinen avain tietueessa";
      case "invalid_union":
        return "Virheellinen unioni";
      case "invalid_element":
        return "Virheellinen arvo joukossa";
      default:
        return "Virheellinen syöte";
    }
  };
};
function hv() {
  return {
    localeError: fv()
  };
}
const pv = () => {
  const e = {
    string: { unit: "caractères", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "éléments", verb: "avoir" },
    set: { unit: "éléments", verb: "avoir" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "entrée",
    email: "adresse e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date et heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "durée ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "chaîne encodée en base64",
    base64url: "chaîne encodée en base64url",
    json_string: "chaîne JSON",
    e164: "numéro E.164",
    jwt: "JWT",
    template_literal: "entrée"
  }, i = {
    nan: "NaN",
    number: "nombre",
    array: "tableau"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Entrée invalide : instanceof ${n.expected} attendu, ${s} reçu` : `Entrée invalide : ${o} attendu, ${s} reçu`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Entrée invalide : ${M(n.values[0])} attendu` : `Option invalide : une valeur parmi ${I(n.values, "|")} attendue`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Trop grand : ${n.origin ?? "valeur"} doit ${a.verb} ${o}${n.maximum.toString()} ${a.unit ?? "élément(s)"}` : `Trop grand : ${n.origin ?? "valeur"} doit être ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Trop petit : ${n.origin} doit ${a.verb} ${o}${n.minimum.toString()} ${a.unit}` : `Trop petit : ${n.origin} doit être ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Chaîne invalide : doit commencer par "${o.prefix}"` : o.format === "ends_with" ? `Chaîne invalide : doit se terminer par "${o.suffix}"` : o.format === "includes" ? `Chaîne invalide : doit inclure "${o.includes}"` : o.format === "regex" ? `Chaîne invalide : doit correspondre au modèle ${o.pattern}` : `${r[o.format] ?? n.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit être un multiple de ${n.divisor}`;
      case "unrecognized_keys":
        return `Clé${n.keys.length > 1 ? "s" : ""} non reconnue${n.keys.length > 1 ? "s" : ""} : ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Clé invalide dans ${n.origin}`;
      case "invalid_union":
        return "Entrée invalide";
      case "invalid_element":
        return `Valeur invalide dans ${n.origin}`;
      default:
        return "Entrée invalide";
    }
  };
};
function mv() {
  return {
    localeError: pv()
  };
}
const gv = () => {
  const e = {
    string: { unit: "caractères", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "éléments", verb: "avoir" },
    set: { unit: "éléments", verb: "avoir" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "entrée",
    email: "adresse courriel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date-heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "durée ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "chaîne encodée en base64",
    base64url: "chaîne encodée en base64url",
    json_string: "chaîne JSON",
    e164: "numéro E.164",
    jwt: "JWT",
    template_literal: "entrée"
  }, i = {
    nan: "NaN"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Entrée invalide : attendu instanceof ${n.expected}, reçu ${s}` : `Entrée invalide : attendu ${o}, reçu ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Entrée invalide : attendu ${M(n.values[0])}` : `Option invalide : attendu l'une des valeurs suivantes ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "≤" : "<", a = t(n.origin);
        return a ? `Trop grand : attendu que ${n.origin ?? "la valeur"} ait ${o}${n.maximum.toString()} ${a.unit}` : `Trop grand : attendu que ${n.origin ?? "la valeur"} soit ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? "≥" : ">", a = t(n.origin);
        return a ? `Trop petit : attendu que ${n.origin} ait ${o}${n.minimum.toString()} ${a.unit}` : `Trop petit : attendu que ${n.origin} soit ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Chaîne invalide : doit commencer par "${o.prefix}"` : o.format === "ends_with" ? `Chaîne invalide : doit se terminer par "${o.suffix}"` : o.format === "includes" ? `Chaîne invalide : doit inclure "${o.includes}"` : o.format === "regex" ? `Chaîne invalide : doit correspondre au motif ${o.pattern}` : `${r[o.format] ?? n.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit être un multiple de ${n.divisor}`;
      case "unrecognized_keys":
        return `Clé${n.keys.length > 1 ? "s" : ""} non reconnue${n.keys.length > 1 ? "s" : ""} : ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Clé invalide dans ${n.origin}`;
      case "invalid_union":
        return "Entrée invalide";
      case "invalid_element":
        return `Valeur invalide dans ${n.origin}`;
      default:
        return "Entrée invalide";
    }
  };
};
function vv() {
  return {
    localeError: gv()
  };
}
const _v = () => {
  const e = {
    string: { label: "מחרוזת", gender: "f" },
    number: { label: "מספר", gender: "m" },
    boolean: { label: "ערך בוליאני", gender: "m" },
    bigint: { label: "BigInt", gender: "m" },
    date: { label: "תאריך", gender: "m" },
    array: { label: "מערך", gender: "m" },
    object: { label: "אובייקט", gender: "m" },
    null: { label: "ערך ריק (null)", gender: "m" },
    undefined: { label: "ערך לא מוגדר (undefined)", gender: "m" },
    symbol: { label: "סימבול (Symbol)", gender: "m" },
    function: { label: "פונקציה", gender: "f" },
    map: { label: "מפה (Map)", gender: "f" },
    set: { label: "קבוצה (Set)", gender: "f" },
    file: { label: "קובץ", gender: "m" },
    promise: { label: "Promise", gender: "m" },
    NaN: { label: "NaN", gender: "m" },
    unknown: { label: "ערך לא ידוע", gender: "m" },
    value: { label: "ערך", gender: "m" }
  }, t = {
    string: { unit: "תווים", shortLabel: "קצר", longLabel: "ארוך" },
    file: { unit: "בייטים", shortLabel: "קטן", longLabel: "גדול" },
    array: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" },
    set: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" },
    number: { unit: "", shortLabel: "קטן", longLabel: "גדול" }
    // no unit
  }, r = (u) => u ? e[u] : void 0, i = (u) => {
    const l = r(u);
    return l ? l.label : u ?? e.unknown.label;
  }, n = (u) => `ה${i(u)}`, o = (u) => (r(u)?.gender ?? "m") === "f" ? "צריכה להיות" : "צריך להיות", a = (u) => u ? t[u] ?? null : null, s = {
    regex: { label: "קלט", gender: "m" },
    email: { label: "כתובת אימייל", gender: "f" },
    url: { label: "כתובת רשת", gender: "f" },
    emoji: { label: "אימוג'י", gender: "m" },
    uuid: { label: "UUID", gender: "m" },
    nanoid: { label: "nanoid", gender: "m" },
    guid: { label: "GUID", gender: "m" },
    cuid: { label: "cuid", gender: "m" },
    cuid2: { label: "cuid2", gender: "m" },
    ulid: { label: "ULID", gender: "m" },
    xid: { label: "XID", gender: "m" },
    ksuid: { label: "KSUID", gender: "m" },
    datetime: { label: "תאריך וזמן ISO", gender: "m" },
    date: { label: "תאריך ISO", gender: "m" },
    time: { label: "זמן ISO", gender: "m" },
    duration: { label: "משך זמן ISO", gender: "m" },
    ipv4: { label: "כתובת IPv4", gender: "f" },
    ipv6: { label: "כתובת IPv6", gender: "f" },
    cidrv4: { label: "טווח IPv4", gender: "m" },
    cidrv6: { label: "טווח IPv6", gender: "m" },
    base64: { label: "מחרוזת בבסיס 64", gender: "f" },
    base64url: { label: "מחרוזת בבסיס 64 לכתובות רשת", gender: "f" },
    json_string: { label: "מחרוזת JSON", gender: "f" },
    e164: { label: "מספר E.164", gender: "m" },
    jwt: { label: "JWT", gender: "m" },
    ends_with: { label: "קלט", gender: "m" },
    includes: { label: "קלט", gender: "m" },
    lowercase: { label: "קלט", gender: "m" },
    starts_with: { label: "קלט", gender: "m" },
    uppercase: { label: "קלט", gender: "m" }
  }, c = {
    nan: "NaN"
  };
  return (u) => {
    switch (u.code) {
      case "invalid_type": {
        const l = u.expected, d = c[l ?? ""] ?? i(l), f = V(u.input), h = c[f] ?? e[f]?.label ?? f;
        return /^[A-Z]/.test(u.expected) ? `קלט לא תקין: צריך להיות instanceof ${u.expected}, התקבל ${h}` : `קלט לא תקין: צריך להיות ${d}, התקבל ${h}`;
      }
      case "invalid_value": {
        if (u.values.length === 1)
          return `ערך לא תקין: הערך חייב להיות ${M(u.values[0])}`;
        const l = u.values.map((h) => M(h));
        if (u.values.length === 2)
          return `ערך לא תקין: האפשרויות המתאימות הן ${l[0]} או ${l[1]}`;
        const d = l[l.length - 1];
        return `ערך לא תקין: האפשרויות המתאימות הן ${l.slice(0, -1).join(", ")} או ${d}`;
      }
      case "too_big": {
        const l = a(u.origin), d = n(u.origin ?? "value");
        if (u.origin === "string")
          return `${l?.longLabel ?? "ארוך"} מדי: ${d} צריכה להכיל ${u.maximum.toString()} ${l?.unit ?? ""} ${u.inclusive ? "או פחות" : "לכל היותר"}`.trim();
        if (u.origin === "number") {
          const v = u.inclusive ? `קטן או שווה ל-${u.maximum}` : `קטן מ-${u.maximum}`;
          return `גדול מדי: ${d} צריך להיות ${v}`;
        }
        if (u.origin === "array" || u.origin === "set") {
          const v = u.origin === "set" ? "צריכה" : "צריך", _ = u.inclusive ? `${u.maximum} ${l?.unit ?? ""} או פחות` : `פחות מ-${u.maximum} ${l?.unit ?? ""}`;
          return `גדול מדי: ${d} ${v} להכיל ${_}`.trim();
        }
        const f = u.inclusive ? "<=" : "<", h = o(u.origin ?? "value");
        return l?.unit ? `${l.longLabel} מדי: ${d} ${h} ${f}${u.maximum.toString()} ${l.unit}` : `${l?.longLabel ?? "גדול"} מדי: ${d} ${h} ${f}${u.maximum.toString()}`;
      }
      case "too_small": {
        const l = a(u.origin), d = n(u.origin ?? "value");
        if (u.origin === "string")
          return `${l?.shortLabel ?? "קצר"} מדי: ${d} צריכה להכיל ${u.minimum.toString()} ${l?.unit ?? ""} ${u.inclusive ? "או יותר" : "לפחות"}`.trim();
        if (u.origin === "number") {
          const v = u.inclusive ? `גדול או שווה ל-${u.minimum}` : `גדול מ-${u.minimum}`;
          return `קטן מדי: ${d} צריך להיות ${v}`;
        }
        if (u.origin === "array" || u.origin === "set") {
          const v = u.origin === "set" ? "צריכה" : "צריך";
          if (u.minimum === 1 && u.inclusive) {
            const k = (u.origin === "set", "לפחות פריט אחד");
            return `קטן מדי: ${d} ${v} להכיל ${k}`;
          }
          const _ = u.inclusive ? `${u.minimum} ${l?.unit ?? ""} או יותר` : `יותר מ-${u.minimum} ${l?.unit ?? ""}`;
          return `קטן מדי: ${d} ${v} להכיל ${_}`.trim();
        }
        const f = u.inclusive ? ">=" : ">", h = o(u.origin ?? "value");
        return l?.unit ? `${l.shortLabel} מדי: ${d} ${h} ${f}${u.minimum.toString()} ${l.unit}` : `${l?.shortLabel ?? "קטן"} מדי: ${d} ${h} ${f}${u.minimum.toString()}`;
      }
      case "invalid_format": {
        const l = u;
        if (l.format === "starts_with")
          return `המחרוזת חייבת להתחיל ב "${l.prefix}"`;
        if (l.format === "ends_with")
          return `המחרוזת חייבת להסתיים ב "${l.suffix}"`;
        if (l.format === "includes")
          return `המחרוזת חייבת לכלול "${l.includes}"`;
        if (l.format === "regex")
          return `המחרוזת חייבת להתאים לתבנית ${l.pattern}`;
        const d = s[l.format], f = d?.label ?? l.format, v = (d?.gender ?? "m") === "f" ? "תקינה" : "תקין";
        return `${f} לא ${v}`;
      }
      case "not_multiple_of":
        return `מספר לא תקין: חייב להיות מכפלה של ${u.divisor}`;
      case "unrecognized_keys":
        return `מפתח${u.keys.length > 1 ? "ות" : ""} לא מזוה${u.keys.length > 1 ? "ים" : "ה"}: ${I(u.keys, ", ")}`;
      case "invalid_key":
        return "שדה לא תקין באובייקט";
      case "invalid_union":
        return "קלט לא תקין";
      case "invalid_element":
        return `ערך לא תקין ב${n(u.origin ?? "array")}`;
      default:
        return "קלט לא תקין";
    }
  };
};
function yv() {
  return {
    localeError: _v()
  };
}
const $v = () => {
  const e = {
    string: { unit: "karakter", verb: "legyen" },
    file: { unit: "byte", verb: "legyen" },
    array: { unit: "elem", verb: "legyen" },
    set: { unit: "elem", verb: "legyen" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "bemenet",
    email: "email cím",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO időbélyeg",
    date: "ISO dátum",
    time: "ISO idő",
    duration: "ISO időintervallum",
    ipv4: "IPv4 cím",
    ipv6: "IPv6 cím",
    cidrv4: "IPv4 tartomány",
    cidrv6: "IPv6 tartomány",
    base64: "base64-kódolt string",
    base64url: "base64url-kódolt string",
    json_string: "JSON string",
    e164: "E.164 szám",
    jwt: "JWT",
    template_literal: "bemenet"
  }, i = {
    nan: "NaN",
    number: "szám",
    array: "tömb"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Érvénytelen bemenet: a várt érték instanceof ${n.expected}, a kapott érték ${s}` : `Érvénytelen bemenet: a várt érték ${o}, a kapott érték ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Érvénytelen bemenet: a várt érték ${M(n.values[0])}` : `Érvénytelen opció: valamelyik érték várt ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Túl nagy: ${n.origin ?? "érték"} mérete túl nagy ${o}${n.maximum.toString()} ${a.unit ?? "elem"}` : `Túl nagy: a bemeneti érték ${n.origin ?? "érték"} túl nagy: ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Túl kicsi: a bemeneti érték ${n.origin} mérete túl kicsi ${o}${n.minimum.toString()} ${a.unit}` : `Túl kicsi: a bemeneti érték ${n.origin} túl kicsi ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Érvénytelen string: "${o.prefix}" értékkel kell kezdődnie` : o.format === "ends_with" ? `Érvénytelen string: "${o.suffix}" értékkel kell végződnie` : o.format === "includes" ? `Érvénytelen string: "${o.includes}" értéket kell tartalmaznia` : o.format === "regex" ? `Érvénytelen string: ${o.pattern} mintának kell megfelelnie` : `Érvénytelen ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Érvénytelen szám: ${n.divisor} többszörösének kell lennie`;
      case "unrecognized_keys":
        return `Ismeretlen kulcs${n.keys.length > 1 ? "s" : ""}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Érvénytelen kulcs ${n.origin}`;
      case "invalid_union":
        return "Érvénytelen bemenet";
      case "invalid_element":
        return `Érvénytelen érték: ${n.origin}`;
      default:
        return "Érvénytelen bemenet";
    }
  };
};
function bv() {
  return {
    localeError: $v()
  };
}
function Zs(e, t, r) {
  return Math.abs(e) === 1 ? t : r;
}
function Rt(e) {
  if (!e)
    return "";
  const t = ["ա", "ե", "ը", "ի", "ո", "ու", "օ"], r = e[e.length - 1];
  return e + (t.includes(r) ? "ն" : "ը");
}
const kv = () => {
  const e = {
    string: {
      unit: {
        one: "նշան",
        many: "նշաններ"
      },
      verb: "ունենալ"
    },
    file: {
      unit: {
        one: "բայթ",
        many: "բայթեր"
      },
      verb: "ունենալ"
    },
    array: {
      unit: {
        one: "տարր",
        many: "տարրեր"
      },
      verb: "ունենալ"
    },
    set: {
      unit: {
        one: "տարր",
        many: "տարրեր"
      },
      verb: "ունենալ"
    }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "մուտք",
    email: "էլ. հասցե",
    url: "URL",
    emoji: "էմոջի",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO ամսաթիվ և ժամ",
    date: "ISO ամսաթիվ",
    time: "ISO ժամ",
    duration: "ISO տևողություն",
    ipv4: "IPv4 հասցե",
    ipv6: "IPv6 հասցե",
    cidrv4: "IPv4 միջակայք",
    cidrv6: "IPv6 միջակայք",
    base64: "base64 ձևաչափով տող",
    base64url: "base64url ձևաչափով տող",
    json_string: "JSON տող",
    e164: "E.164 համար",
    jwt: "JWT",
    template_literal: "մուտք"
  }, i = {
    nan: "NaN",
    number: "թիվ",
    array: "զանգված"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Սխալ մուտքագրում․ սպասվում էր instanceof ${n.expected}, ստացվել է ${s}` : `Սխալ մուտքագրում․ սպասվում էր ${o}, ստացվել է ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Սխալ մուտքագրում․ սպասվում էր ${M(n.values[1])}` : `Սխալ տարբերակ․ սպասվում էր հետևյալներից մեկը՝ ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        if (a) {
          const s = Number(n.maximum), c = Zs(s, a.unit.one, a.unit.many);
          return `Չափազանց մեծ արժեք․ սպասվում է, որ ${Rt(n.origin ?? "արժեք")} կունենա ${o}${n.maximum.toString()} ${c}`;
        }
        return `Չափազանց մեծ արժեք․ սպասվում է, որ ${Rt(n.origin ?? "արժեք")} լինի ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        if (a) {
          const s = Number(n.minimum), c = Zs(s, a.unit.one, a.unit.many);
          return `Չափազանց փոքր արժեք․ սպասվում է, որ ${Rt(n.origin)} կունենա ${o}${n.minimum.toString()} ${c}`;
        }
        return `Չափազանց փոքր արժեք․ սպասվում է, որ ${Rt(n.origin)} լինի ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Սխալ տող․ պետք է սկսվի "${o.prefix}"-ով` : o.format === "ends_with" ? `Սխալ տող․ պետք է ավարտվի "${o.suffix}"-ով` : o.format === "includes" ? `Սխալ տող․ պետք է պարունակի "${o.includes}"` : o.format === "regex" ? `Սխալ տող․ պետք է համապատասխանի ${o.pattern} ձևաչափին` : `Սխալ ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Սխալ թիվ․ պետք է բազմապատիկ լինի ${n.divisor}-ի`;
      case "unrecognized_keys":
        return `Չճանաչված բանալի${n.keys.length > 1 ? "ներ" : ""}. ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Սխալ բանալի ${Rt(n.origin)}-ում`;
      case "invalid_union":
        return "Սխալ մուտքագրում";
      case "invalid_element":
        return `Սխալ արժեք ${Rt(n.origin)}-ում`;
      default:
        return "Սխալ մուտքագրում";
    }
  };
};
function wv() {
  return {
    localeError: kv()
  };
}
const Sv = () => {
  const e = {
    string: { unit: "karakter", verb: "memiliki" },
    file: { unit: "byte", verb: "memiliki" },
    array: { unit: "item", verb: "memiliki" },
    set: { unit: "item", verb: "memiliki" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "input",
    email: "alamat email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tanggal dan waktu format ISO",
    date: "tanggal format ISO",
    time: "jam format ISO",
    duration: "durasi format ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "rentang alamat IPv4",
    cidrv6: "rentang alamat IPv6",
    base64: "string dengan enkode base64",
    base64url: "string dengan enkode base64url",
    json_string: "string JSON",
    e164: "angka E.164",
    jwt: "JWT",
    template_literal: "input"
  }, i = {
    nan: "NaN"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Input tidak valid: diharapkan instanceof ${n.expected}, diterima ${s}` : `Input tidak valid: diharapkan ${o}, diterima ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Input tidak valid: diharapkan ${M(n.values[0])}` : `Pilihan tidak valid: diharapkan salah satu dari ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Terlalu besar: diharapkan ${n.origin ?? "value"} memiliki ${o}${n.maximum.toString()} ${a.unit ?? "elemen"}` : `Terlalu besar: diharapkan ${n.origin ?? "value"} menjadi ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Terlalu kecil: diharapkan ${n.origin} memiliki ${o}${n.minimum.toString()} ${a.unit}` : `Terlalu kecil: diharapkan ${n.origin} menjadi ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `String tidak valid: harus dimulai dengan "${o.prefix}"` : o.format === "ends_with" ? `String tidak valid: harus berakhir dengan "${o.suffix}"` : o.format === "includes" ? `String tidak valid: harus menyertakan "${o.includes}"` : o.format === "regex" ? `String tidak valid: harus sesuai pola ${o.pattern}` : `${r[o.format] ?? n.format} tidak valid`;
      }
      case "not_multiple_of":
        return `Angka tidak valid: harus kelipatan dari ${n.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali ${n.keys.length > 1 ? "s" : ""}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak valid di ${n.origin}`;
      case "invalid_union":
        return "Input tidak valid";
      case "invalid_element":
        return `Nilai tidak valid di ${n.origin}`;
      default:
        return "Input tidak valid";
    }
  };
};
function Iv() {
  return {
    localeError: Sv()
  };
}
const zv = () => {
  const e = {
    string: { unit: "stafi", verb: "að hafa" },
    file: { unit: "bæti", verb: "að hafa" },
    array: { unit: "hluti", verb: "að hafa" },
    set: { unit: "hluti", verb: "að hafa" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "gildi",
    email: "netfang",
    url: "vefslóð",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dagsetning og tími",
    date: "ISO dagsetning",
    time: "ISO tími",
    duration: "ISO tímalengd",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded strengur",
    base64url: "base64url-encoded strengur",
    json_string: "JSON strengur",
    e164: "E.164 tölugildi",
    jwt: "JWT",
    template_literal: "gildi"
  }, i = {
    nan: "NaN",
    number: "númer",
    array: "fylki"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Rangt gildi: Þú slóst inn ${s} þar sem á að vera instanceof ${n.expected}` : `Rangt gildi: Þú slóst inn ${s} þar sem á að vera ${o}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Rangt gildi: gert ráð fyrir ${M(n.values[0])}` : `Ógilt val: má vera eitt af eftirfarandi ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Of stórt: gert er ráð fyrir að ${n.origin ?? "gildi"} hafi ${o}${n.maximum.toString()} ${a.unit ?? "hluti"}` : `Of stórt: gert er ráð fyrir að ${n.origin ?? "gildi"} sé ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Of lítið: gert er ráð fyrir að ${n.origin} hafi ${o}${n.minimum.toString()} ${a.unit}` : `Of lítið: gert er ráð fyrir að ${n.origin} sé ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Ógildur strengur: verður að byrja á "${o.prefix}"` : o.format === "ends_with" ? `Ógildur strengur: verður að enda á "${o.suffix}"` : o.format === "includes" ? `Ógildur strengur: verður að innihalda "${o.includes}"` : o.format === "regex" ? `Ógildur strengur: verður að fylgja mynstri ${o.pattern}` : `Rangt ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Röng tala: verður að vera margfeldi af ${n.divisor}`;
      case "unrecognized_keys":
        return `Óþekkt ${n.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Rangur lykill í ${n.origin}`;
      case "invalid_union":
        return "Rangt gildi";
      case "invalid_element":
        return `Rangt gildi í ${n.origin}`;
      default:
        return "Rangt gildi";
    }
  };
};
function xv() {
  return {
    localeError: zv()
  };
}
const Ov = () => {
  const e = {
    string: { unit: "caratteri", verb: "avere" },
    file: { unit: "byte", verb: "avere" },
    array: { unit: "elementi", verb: "avere" },
    set: { unit: "elementi", verb: "avere" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "input",
    email: "indirizzo email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e ora ISO",
    date: "data ISO",
    time: "ora ISO",
    duration: "durata ISO",
    ipv4: "indirizzo IPv4",
    ipv6: "indirizzo IPv6",
    cidrv4: "intervallo IPv4",
    cidrv6: "intervallo IPv6",
    base64: "stringa codificata in base64",
    base64url: "URL codificata in base64",
    json_string: "stringa JSON",
    e164: "numero E.164",
    jwt: "JWT",
    template_literal: "input"
  }, i = {
    nan: "NaN",
    number: "numero",
    array: "vettore"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Input non valido: atteso instanceof ${n.expected}, ricevuto ${s}` : `Input non valido: atteso ${o}, ricevuto ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Input non valido: atteso ${M(n.values[0])}` : `Opzione non valida: atteso uno tra ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Troppo grande: ${n.origin ?? "valore"} deve avere ${o}${n.maximum.toString()} ${a.unit ?? "elementi"}` : `Troppo grande: ${n.origin ?? "valore"} deve essere ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Troppo piccolo: ${n.origin} deve avere ${o}${n.minimum.toString()} ${a.unit}` : `Troppo piccolo: ${n.origin} deve essere ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Stringa non valida: deve iniziare con "${o.prefix}"` : o.format === "ends_with" ? `Stringa non valida: deve terminare con "${o.suffix}"` : o.format === "includes" ? `Stringa non valida: deve includere "${o.includes}"` : o.format === "regex" ? `Stringa non valida: deve corrispondere al pattern ${o.pattern}` : `Invalid ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Numero non valido: deve essere un multiplo di ${n.divisor}`;
      case "unrecognized_keys":
        return `Chiav${n.keys.length > 1 ? "i" : "e"} non riconosciut${n.keys.length > 1 ? "e" : "a"}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Chiave non valida in ${n.origin}`;
      case "invalid_union":
        return "Input non valido";
      case "invalid_element":
        return `Valore non valido in ${n.origin}`;
      default:
        return "Input non valido";
    }
  };
};
function Ev() {
  return {
    localeError: Ov()
  };
}
const Tv = () => {
  const e = {
    string: { unit: "文字", verb: "である" },
    file: { unit: "バイト", verb: "である" },
    array: { unit: "要素", verb: "である" },
    set: { unit: "要素", verb: "である" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "入力値",
    email: "メールアドレス",
    url: "URL",
    emoji: "絵文字",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO日時",
    date: "ISO日付",
    time: "ISO時刻",
    duration: "ISO期間",
    ipv4: "IPv4アドレス",
    ipv6: "IPv6アドレス",
    cidrv4: "IPv4範囲",
    cidrv6: "IPv6範囲",
    base64: "base64エンコード文字列",
    base64url: "base64urlエンコード文字列",
    json_string: "JSON文字列",
    e164: "E.164番号",
    jwt: "JWT",
    template_literal: "入力値"
  }, i = {
    nan: "NaN",
    number: "数値",
    array: "配列"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `無効な入力: instanceof ${n.expected}が期待されましたが、${s}が入力されました` : `無効な入力: ${o}が期待されましたが、${s}が入力されました`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `無効な入力: ${M(n.values[0])}が期待されました` : `無効な選択: ${I(n.values, "、")}のいずれかである必要があります`;
      case "too_big": {
        const o = n.inclusive ? "以下である" : "より小さい", a = t(n.origin);
        return a ? `大きすぎる値: ${n.origin ?? "値"}は${n.maximum.toString()}${a.unit ?? "要素"}${o}必要があります` : `大きすぎる値: ${n.origin ?? "値"}は${n.maximum.toString()}${o}必要があります`;
      }
      case "too_small": {
        const o = n.inclusive ? "以上である" : "より大きい", a = t(n.origin);
        return a ? `小さすぎる値: ${n.origin}は${n.minimum.toString()}${a.unit}${o}必要があります` : `小さすぎる値: ${n.origin}は${n.minimum.toString()}${o}必要があります`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `無効な文字列: "${o.prefix}"で始まる必要があります` : o.format === "ends_with" ? `無効な文字列: "${o.suffix}"で終わる必要があります` : o.format === "includes" ? `無効な文字列: "${o.includes}"を含む必要があります` : o.format === "regex" ? `無効な文字列: パターン${o.pattern}に一致する必要があります` : `無効な${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `無効な数値: ${n.divisor}の倍数である必要があります`;
      case "unrecognized_keys":
        return `認識されていないキー${n.keys.length > 1 ? "群" : ""}: ${I(n.keys, "、")}`;
      case "invalid_key":
        return `${n.origin}内の無効なキー`;
      case "invalid_union":
        return "無効な入力";
      case "invalid_element":
        return `${n.origin}内の無効な値`;
      default:
        return "無効な入力";
    }
  };
};
function Nv() {
  return {
    localeError: Tv()
  };
}
const Cv = () => {
  const e = {
    string: { unit: "სიმბოლო", verb: "უნდა შეიცავდეს" },
    file: { unit: "ბაიტი", verb: "უნდა შეიცავდეს" },
    array: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
    set: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "შეყვანა",
    email: "ელ-ფოსტის მისამართი",
    url: "URL",
    emoji: "ემოჯი",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "თარიღი-დრო",
    date: "თარიღი",
    time: "დრო",
    duration: "ხანგრძლივობა",
    ipv4: "IPv4 მისამართი",
    ipv6: "IPv6 მისამართი",
    cidrv4: "IPv4 დიაპაზონი",
    cidrv6: "IPv6 დიაპაზონი",
    base64: "base64-კოდირებული სტრინგი",
    base64url: "base64url-კოდირებული სტრინგი",
    json_string: "JSON სტრინგი",
    e164: "E.164 ნომერი",
    jwt: "JWT",
    template_literal: "შეყვანა"
  }, i = {
    nan: "NaN",
    number: "რიცხვი",
    string: "სტრინგი",
    boolean: "ბულეანი",
    function: "ფუნქცია",
    array: "მასივი"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `არასწორი შეყვანა: მოსალოდნელი instanceof ${n.expected}, მიღებული ${s}` : `არასწორი შეყვანა: მოსალოდნელი ${o}, მიღებული ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `არასწორი შეყვანა: მოსალოდნელი ${M(n.values[0])}` : `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${I(n.values, "|")}-დან`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `ზედმეტად დიდი: მოსალოდნელი ${n.origin ?? "მნიშვნელობა"} ${a.verb} ${o}${n.maximum.toString()} ${a.unit}` : `ზედმეტად დიდი: მოსალოდნელი ${n.origin ?? "მნიშვნელობა"} იყოს ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `ზედმეტად პატარა: მოსალოდნელი ${n.origin} ${a.verb} ${o}${n.minimum.toString()} ${a.unit}` : `ზედმეტად პატარა: მოსალოდნელი ${n.origin} იყოს ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `არასწორი სტრინგი: უნდა იწყებოდეს "${o.prefix}"-ით` : o.format === "ends_with" ? `არასწორი სტრინგი: უნდა მთავრდებოდეს "${o.suffix}"-ით` : o.format === "includes" ? `არასწორი სტრინგი: უნდა შეიცავდეს "${o.includes}"-ს` : o.format === "regex" ? `არასწორი სტრინგი: უნდა შეესაბამებოდეს შაბლონს ${o.pattern}` : `არასწორი ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `არასწორი რიცხვი: უნდა იყოს ${n.divisor}-ის ჯერადი`;
      case "unrecognized_keys":
        return `უცნობი გასაღებ${n.keys.length > 1 ? "ები" : "ი"}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `არასწორი გასაღები ${n.origin}-ში`;
      case "invalid_union":
        return "არასწორი შეყვანა";
      case "invalid_element":
        return `არასწორი მნიშვნელობა ${n.origin}-ში`;
      default:
        return "არასწორი შეყვანა";
    }
  };
};
function Uv() {
  return {
    localeError: Cv()
  };
}
const Av = () => {
  const e = {
    string: { unit: "តួអក្សរ", verb: "គួរមាន" },
    file: { unit: "បៃ", verb: "គួរមាន" },
    array: { unit: "ធាតុ", verb: "គួរមាន" },
    set: { unit: "ធាតុ", verb: "គួរមាន" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "ទិន្នន័យបញ្ចូល",
    email: "អាសយដ្ឋានអ៊ីមែល",
    url: "URL",
    emoji: "សញ្ញាអារម្មណ៍",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
    date: "កាលបរិច្ឆេទ ISO",
    time: "ម៉ោង ISO",
    duration: "រយៈពេល ISO",
    ipv4: "អាសយដ្ឋាន IPv4",
    ipv6: "អាសយដ្ឋាន IPv6",
    cidrv4: "ដែនអាសយដ្ឋាន IPv4",
    cidrv6: "ដែនអាសយដ្ឋាន IPv6",
    base64: "ខ្សែអក្សរអ៊ិកូដ base64",
    base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
    json_string: "ខ្សែអក្សរ JSON",
    e164: "លេខ E.164",
    jwt: "JWT",
    template_literal: "ទិន្នន័យបញ្ចូល"
  }, i = {
    nan: "NaN",
    number: "លេខ",
    array: "អារេ (Array)",
    null: "គ្មានតម្លៃ (null)"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ instanceof ${n.expected} ប៉ុន្តែទទួលបាន ${s}` : `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${o} ប៉ុន្តែទទួលបាន ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${M(n.values[0])}` : `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `ធំពេក៖ ត្រូវការ ${n.origin ?? "តម្លៃ"} ${o} ${n.maximum.toString()} ${a.unit ?? "ធាតុ"}` : `ធំពេក៖ ត្រូវការ ${n.origin ?? "តម្លៃ"} ${o} ${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `តូចពេក៖ ត្រូវការ ${n.origin} ${o} ${n.minimum.toString()} ${a.unit}` : `តូចពេក៖ ត្រូវការ ${n.origin} ${o} ${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${o.prefix}"` : o.format === "ends_with" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${o.suffix}"` : o.format === "includes" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${o.includes}"` : o.format === "regex" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${o.pattern}` : `មិនត្រឹមត្រូវ៖ ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${n.divisor}`;
      case "unrecognized_keys":
        return `រកឃើញសោមិនស្គាល់៖ ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `សោមិនត្រឹមត្រូវនៅក្នុង ${n.origin}`;
      case "invalid_union":
        return "ទិន្នន័យមិនត្រឹមត្រូវ";
      case "invalid_element":
        return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${n.origin}`;
      default:
        return "ទិន្នន័យមិនត្រឹមត្រូវ";
    }
  };
};
function xd() {
  return {
    localeError: Av()
  };
}
function Zv() {
  return xd();
}
const Dv = () => {
  const e = {
    string: { unit: "문자", verb: "to have" },
    file: { unit: "바이트", verb: "to have" },
    array: { unit: "개", verb: "to have" },
    set: { unit: "개", verb: "to have" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "입력",
    email: "이메일 주소",
    url: "URL",
    emoji: "이모지",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO 날짜시간",
    date: "ISO 날짜",
    time: "ISO 시간",
    duration: "ISO 기간",
    ipv4: "IPv4 주소",
    ipv6: "IPv6 주소",
    cidrv4: "IPv4 범위",
    cidrv6: "IPv6 범위",
    base64: "base64 인코딩 문자열",
    base64url: "base64url 인코딩 문자열",
    json_string: "JSON 문자열",
    e164: "E.164 번호",
    jwt: "JWT",
    template_literal: "입력"
  }, i = {
    nan: "NaN"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `잘못된 입력: 예상 타입은 instanceof ${n.expected}, 받은 타입은 ${s}입니다` : `잘못된 입력: 예상 타입은 ${o}, 받은 타입은 ${s}입니다`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `잘못된 입력: 값은 ${M(n.values[0])} 이어야 합니다` : `잘못된 옵션: ${I(n.values, "또는 ")} 중 하나여야 합니다`;
      case "too_big": {
        const o = n.inclusive ? "이하" : "미만", a = o === "미만" ? "이어야 합니다" : "여야 합니다", s = t(n.origin), c = s?.unit ?? "요소";
        return s ? `${n.origin ?? "값"}이 너무 큽니다: ${n.maximum.toString()}${c} ${o}${a}` : `${n.origin ?? "값"}이 너무 큽니다: ${n.maximum.toString()} ${o}${a}`;
      }
      case "too_small": {
        const o = n.inclusive ? "이상" : "초과", a = o === "이상" ? "이어야 합니다" : "여야 합니다", s = t(n.origin), c = s?.unit ?? "요소";
        return s ? `${n.origin ?? "값"}이 너무 작습니다: ${n.minimum.toString()}${c} ${o}${a}` : `${n.origin ?? "값"}이 너무 작습니다: ${n.minimum.toString()} ${o}${a}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `잘못된 문자열: "${o.prefix}"(으)로 시작해야 합니다` : o.format === "ends_with" ? `잘못된 문자열: "${o.suffix}"(으)로 끝나야 합니다` : o.format === "includes" ? `잘못된 문자열: "${o.includes}"을(를) 포함해야 합니다` : o.format === "regex" ? `잘못된 문자열: 정규식 ${o.pattern} 패턴과 일치해야 합니다` : `잘못된 ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `잘못된 숫자: ${n.divisor}의 배수여야 합니다`;
      case "unrecognized_keys":
        return `인식할 수 없는 키: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `잘못된 키: ${n.origin}`;
      case "invalid_union":
        return "잘못된 입력";
      case "invalid_element":
        return `잘못된 값: ${n.origin}`;
      default:
        return "잘못된 입력";
    }
  };
};
function jv() {
  return {
    localeError: Dv()
  };
}
const rn = (e) => e.charAt(0).toUpperCase() + e.slice(1);
function Ds(e) {
  const t = Math.abs(e), r = t % 10, i = t % 100;
  return i >= 11 && i <= 19 || r === 0 ? "many" : r === 1 ? "one" : "few";
}
const Pv = () => {
  const e = {
    string: {
      unit: {
        one: "simbolis",
        few: "simboliai",
        many: "simbolių"
      },
      verb: {
        smaller: {
          inclusive: "turi būti ne ilgesnė kaip",
          notInclusive: "turi būti trumpesnė kaip"
        },
        bigger: {
          inclusive: "turi būti ne trumpesnė kaip",
          notInclusive: "turi būti ilgesnė kaip"
        }
      }
    },
    file: {
      unit: {
        one: "baitas",
        few: "baitai",
        many: "baitų"
      },
      verb: {
        smaller: {
          inclusive: "turi būti ne didesnis kaip",
          notInclusive: "turi būti mažesnis kaip"
        },
        bigger: {
          inclusive: "turi būti ne mažesnis kaip",
          notInclusive: "turi būti didesnis kaip"
        }
      }
    },
    array: {
      unit: {
        one: "elementą",
        few: "elementus",
        many: "elementų"
      },
      verb: {
        smaller: {
          inclusive: "turi turėti ne daugiau kaip",
          notInclusive: "turi turėti mažiau kaip"
        },
        bigger: {
          inclusive: "turi turėti ne mažiau kaip",
          notInclusive: "turi turėti daugiau kaip"
        }
      }
    },
    set: {
      unit: {
        one: "elementą",
        few: "elementus",
        many: "elementų"
      },
      verb: {
        smaller: {
          inclusive: "turi turėti ne daugiau kaip",
          notInclusive: "turi turėti mažiau kaip"
        },
        bigger: {
          inclusive: "turi turėti ne mažiau kaip",
          notInclusive: "turi turėti daugiau kaip"
        }
      }
    }
  };
  function t(n, o, a, s) {
    const c = e[n] ?? null;
    return c === null ? c : {
      unit: c.unit[o],
      verb: c.verb[s][a ? "inclusive" : "notInclusive"]
    };
  }
  const r = {
    regex: "įvestis",
    email: "el. pašto adresas",
    url: "URL",
    emoji: "jaustukas",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO data ir laikas",
    date: "ISO data",
    time: "ISO laikas",
    duration: "ISO trukmė",
    ipv4: "IPv4 adresas",
    ipv6: "IPv6 adresas",
    cidrv4: "IPv4 tinklo prefiksas (CIDR)",
    cidrv6: "IPv6 tinklo prefiksas (CIDR)",
    base64: "base64 užkoduota eilutė",
    base64url: "base64url užkoduota eilutė",
    json_string: "JSON eilutė",
    e164: "E.164 numeris",
    jwt: "JWT",
    template_literal: "įvestis"
  }, i = {
    nan: "NaN",
    number: "skaičius",
    bigint: "sveikasis skaičius",
    string: "eilutė",
    boolean: "loginė reikšmė",
    undefined: "neapibrėžta reikšmė",
    function: "funkcija",
    symbol: "simbolis",
    array: "masyvas",
    object: "objektas",
    null: "nulinė reikšmė"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Gautas tipas ${s}, o tikėtasi - instanceof ${n.expected}` : `Gautas tipas ${s}, o tikėtasi - ${o}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Privalo būti ${M(n.values[0])}` : `Privalo būti vienas iš ${I(n.values, "|")} pasirinkimų`;
      case "too_big": {
        const o = i[n.origin] ?? n.origin, a = t(n.origin, Ds(Number(n.maximum)), n.inclusive ?? !1, "smaller");
        if (a?.verb)
          return `${rn(o ?? n.origin ?? "reikšmė")} ${a.verb} ${n.maximum.toString()} ${a.unit ?? "elementų"}`;
        const s = n.inclusive ? "ne didesnis kaip" : "mažesnis kaip";
        return `${rn(o ?? n.origin ?? "reikšmė")} turi būti ${s} ${n.maximum.toString()} ${a?.unit}`;
      }
      case "too_small": {
        const o = i[n.origin] ?? n.origin, a = t(n.origin, Ds(Number(n.minimum)), n.inclusive ?? !1, "bigger");
        if (a?.verb)
          return `${rn(o ?? n.origin ?? "reikšmė")} ${a.verb} ${n.minimum.toString()} ${a.unit ?? "elementų"}`;
        const s = n.inclusive ? "ne mažesnis kaip" : "didesnis kaip";
        return `${rn(o ?? n.origin ?? "reikšmė")} turi būti ${s} ${n.minimum.toString()} ${a?.unit}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Eilutė privalo prasidėti "${o.prefix}"` : o.format === "ends_with" ? `Eilutė privalo pasibaigti "${o.suffix}"` : o.format === "includes" ? `Eilutė privalo įtraukti "${o.includes}"` : o.format === "regex" ? `Eilutė privalo atitikti ${o.pattern}` : `Neteisingas ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Skaičius privalo būti ${n.divisor} kartotinis.`;
      case "unrecognized_keys":
        return `Neatpažint${n.keys.length > 1 ? "i" : "as"} rakt${n.keys.length > 1 ? "ai" : "as"}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return "Rastas klaidingas raktas";
      case "invalid_union":
        return "Klaidinga įvestis";
      case "invalid_element": {
        const o = i[n.origin] ?? n.origin;
        return `${rn(o ?? n.origin ?? "reikšmė")} turi klaidingą įvestį`;
      }
      default:
        return "Klaidinga įvestis";
    }
  };
};
function Rv() {
  return {
    localeError: Pv()
  };
}
const Fv = () => {
  const e = {
    string: { unit: "знаци", verb: "да имаат" },
    file: { unit: "бајти", verb: "да имаат" },
    array: { unit: "ставки", verb: "да имаат" },
    set: { unit: "ставки", verb: "да имаат" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "внес",
    email: "адреса на е-пошта",
    url: "URL",
    emoji: "емоџи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO датум и време",
    date: "ISO датум",
    time: "ISO време",
    duration: "ISO времетраење",
    ipv4: "IPv4 адреса",
    ipv6: "IPv6 адреса",
    cidrv4: "IPv4 опсег",
    cidrv6: "IPv6 опсег",
    base64: "base64-енкодирана низа",
    base64url: "base64url-енкодирана низа",
    json_string: "JSON низа",
    e164: "E.164 број",
    jwt: "JWT",
    template_literal: "внес"
  }, i = {
    nan: "NaN",
    number: "број",
    array: "низа"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Грешен внес: се очекува instanceof ${n.expected}, примено ${s}` : `Грешен внес: се очекува ${o}, примено ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Invalid input: expected ${M(n.values[0])}` : `Грешана опција: се очекува една ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Премногу голем: се очекува ${n.origin ?? "вредноста"} да има ${o}${n.maximum.toString()} ${a.unit ?? "елементи"}` : `Премногу голем: се очекува ${n.origin ?? "вредноста"} да биде ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Премногу мал: се очекува ${n.origin} да има ${o}${n.minimum.toString()} ${a.unit}` : `Премногу мал: се очекува ${n.origin} да биде ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Неважечка низа: мора да започнува со "${o.prefix}"` : o.format === "ends_with" ? `Неважечка низа: мора да завршува со "${o.suffix}"` : o.format === "includes" ? `Неважечка низа: мора да вклучува "${o.includes}"` : o.format === "regex" ? `Неважечка низа: мора да одгоара на патернот ${o.pattern}` : `Invalid ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Грешен број: мора да биде делив со ${n.divisor}`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Грешен клуч во ${n.origin}`;
      case "invalid_union":
        return "Грешен внес";
      case "invalid_element":
        return `Грешна вредност во ${n.origin}`;
      default:
        return "Грешен внес";
    }
  };
};
function Lv() {
  return {
    localeError: Fv()
  };
}
const Mv = () => {
  const e = {
    string: { unit: "aksara", verb: "mempunyai" },
    file: { unit: "bait", verb: "mempunyai" },
    array: { unit: "elemen", verb: "mempunyai" },
    set: { unit: "elemen", verb: "mempunyai" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "input",
    email: "alamat e-mel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tarikh masa ISO",
    date: "tarikh ISO",
    time: "masa ISO",
    duration: "tempoh ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "julat IPv4",
    cidrv6: "julat IPv6",
    base64: "string dikodkan base64",
    base64url: "string dikodkan base64url",
    json_string: "string JSON",
    e164: "nombor E.164",
    jwt: "JWT",
    template_literal: "input"
  }, i = {
    nan: "NaN",
    number: "nombor"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Input tidak sah: dijangka instanceof ${n.expected}, diterima ${s}` : `Input tidak sah: dijangka ${o}, diterima ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Input tidak sah: dijangka ${M(n.values[0])}` : `Pilihan tidak sah: dijangka salah satu daripada ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Terlalu besar: dijangka ${n.origin ?? "nilai"} ${a.verb} ${o}${n.maximum.toString()} ${a.unit ?? "elemen"}` : `Terlalu besar: dijangka ${n.origin ?? "nilai"} adalah ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Terlalu kecil: dijangka ${n.origin} ${a.verb} ${o}${n.minimum.toString()} ${a.unit}` : `Terlalu kecil: dijangka ${n.origin} adalah ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `String tidak sah: mesti bermula dengan "${o.prefix}"` : o.format === "ends_with" ? `String tidak sah: mesti berakhir dengan "${o.suffix}"` : o.format === "includes" ? `String tidak sah: mesti mengandungi "${o.includes}"` : o.format === "regex" ? `String tidak sah: mesti sepadan dengan corak ${o.pattern}` : `${r[o.format] ?? n.format} tidak sah`;
      }
      case "not_multiple_of":
        return `Nombor tidak sah: perlu gandaan ${n.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak sah dalam ${n.origin}`;
      case "invalid_union":
        return "Input tidak sah";
      case "invalid_element":
        return `Nilai tidak sah dalam ${n.origin}`;
      default:
        return "Input tidak sah";
    }
  };
};
function Bv() {
  return {
    localeError: Mv()
  };
}
const Jv = () => {
  const e = {
    string: { unit: "tekens", verb: "heeft" },
    file: { unit: "bytes", verb: "heeft" },
    array: { unit: "elementen", verb: "heeft" },
    set: { unit: "elementen", verb: "heeft" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "invoer",
    email: "emailadres",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum en tijd",
    date: "ISO datum",
    time: "ISO tijd",
    duration: "ISO duur",
    ipv4: "IPv4-adres",
    ipv6: "IPv6-adres",
    cidrv4: "IPv4-bereik",
    cidrv6: "IPv6-bereik",
    base64: "base64-gecodeerde tekst",
    base64url: "base64 URL-gecodeerde tekst",
    json_string: "JSON string",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "invoer"
  }, i = {
    nan: "NaN",
    number: "getal"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Ongeldige invoer: verwacht instanceof ${n.expected}, ontving ${s}` : `Ongeldige invoer: verwacht ${o}, ontving ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Ongeldige invoer: verwacht ${M(n.values[0])}` : `Ongeldige optie: verwacht één van ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin), s = n.origin === "date" ? "laat" : n.origin === "string" ? "lang" : "groot";
        return a ? `Te ${s}: verwacht dat ${n.origin ?? "waarde"} ${o}${n.maximum.toString()} ${a.unit ?? "elementen"} ${a.verb}` : `Te ${s}: verwacht dat ${n.origin ?? "waarde"} ${o}${n.maximum.toString()} is`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin), s = n.origin === "date" ? "vroeg" : n.origin === "string" ? "kort" : "klein";
        return a ? `Te ${s}: verwacht dat ${n.origin} ${o}${n.minimum.toString()} ${a.unit} ${a.verb}` : `Te ${s}: verwacht dat ${n.origin} ${o}${n.minimum.toString()} is`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Ongeldige tekst: moet met "${o.prefix}" beginnen` : o.format === "ends_with" ? `Ongeldige tekst: moet op "${o.suffix}" eindigen` : o.format === "includes" ? `Ongeldige tekst: moet "${o.includes}" bevatten` : o.format === "regex" ? `Ongeldige tekst: moet overeenkomen met patroon ${o.pattern}` : `Ongeldig: ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ongeldig getal: moet een veelvoud van ${n.divisor} zijn`;
      case "unrecognized_keys":
        return `Onbekende key${n.keys.length > 1 ? "s" : ""}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Ongeldige key in ${n.origin}`;
      case "invalid_union":
        return "Ongeldige invoer";
      case "invalid_element":
        return `Ongeldige waarde in ${n.origin}`;
      default:
        return "Ongeldige invoer";
    }
  };
};
function Vv() {
  return {
    localeError: Jv()
  };
}
const qv = () => {
  const e = {
    string: { unit: "tegn", verb: "å ha" },
    file: { unit: "bytes", verb: "å ha" },
    array: { unit: "elementer", verb: "å inneholde" },
    set: { unit: "elementer", verb: "å inneholde" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "input",
    email: "e-postadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkeslett",
    date: "ISO-dato",
    time: "ISO-klokkeslett",
    duration: "ISO-varighet",
    ipv4: "IPv4-område",
    ipv6: "IPv6-område",
    cidrv4: "IPv4-spekter",
    cidrv6: "IPv6-spekter",
    base64: "base64-enkodet streng",
    base64url: "base64url-enkodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  }, i = {
    nan: "NaN",
    number: "tall",
    array: "liste"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Ugyldig input: forventet instanceof ${n.expected}, fikk ${s}` : `Ugyldig input: forventet ${o}, fikk ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Ugyldig verdi: forventet ${M(n.values[0])}` : `Ugyldig valg: forventet en av ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `For stor(t): forventet ${n.origin ?? "value"} til å ha ${o}${n.maximum.toString()} ${a.unit ?? "elementer"}` : `For stor(t): forventet ${n.origin ?? "value"} til å ha ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `For lite(n): forventet ${n.origin} til å ha ${o}${n.minimum.toString()} ${a.unit}` : `For lite(n): forventet ${n.origin} til å ha ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Ugyldig streng: må starte med "${o.prefix}"` : o.format === "ends_with" ? `Ugyldig streng: må ende med "${o.suffix}"` : o.format === "includes" ? `Ugyldig streng: må inneholde "${o.includes}"` : o.format === "regex" ? `Ugyldig streng: må matche mønsteret ${o.pattern}` : `Ugyldig ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ugyldig tall: må være et multiplum av ${n.divisor}`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig nøkkel i ${n.origin}`;
      case "invalid_union":
        return "Ugyldig input";
      case "invalid_element":
        return `Ugyldig verdi i ${n.origin}`;
      default:
        return "Ugyldig input";
    }
  };
};
function Wv() {
  return {
    localeError: qv()
  };
}
const Kv = () => {
  const e = {
    string: { unit: "harf", verb: "olmalıdır" },
    file: { unit: "bayt", verb: "olmalıdır" },
    array: { unit: "unsur", verb: "olmalıdır" },
    set: { unit: "unsur", verb: "olmalıdır" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "giren",
    email: "epostagâh",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO hengâmı",
    date: "ISO tarihi",
    time: "ISO zamanı",
    duration: "ISO müddeti",
    ipv4: "IPv4 nişânı",
    ipv6: "IPv6 nişânı",
    cidrv4: "IPv4 menzili",
    cidrv6: "IPv6 menzili",
    base64: "base64-şifreli metin",
    base64url: "base64url-şifreli metin",
    json_string: "JSON metin",
    e164: "E.164 sayısı",
    jwt: "JWT",
    template_literal: "giren"
  }, i = {
    nan: "NaN",
    number: "numara",
    array: "saf",
    null: "gayb"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Fâsit giren: umulan instanceof ${n.expected}, alınan ${s}` : `Fâsit giren: umulan ${o}, alınan ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Fâsit giren: umulan ${M(n.values[0])}` : `Fâsit tercih: mûteberler ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Fazla büyük: ${n.origin ?? "value"}, ${o}${n.maximum.toString()} ${a.unit ?? "elements"} sahip olmalıydı.` : `Fazla büyük: ${n.origin ?? "value"}, ${o}${n.maximum.toString()} olmalıydı.`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Fazla küçük: ${n.origin}, ${o}${n.minimum.toString()} ${a.unit} sahip olmalıydı.` : `Fazla küçük: ${n.origin}, ${o}${n.minimum.toString()} olmalıydı.`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Fâsit metin: "${o.prefix}" ile başlamalı.` : o.format === "ends_with" ? `Fâsit metin: "${o.suffix}" ile bitmeli.` : o.format === "includes" ? `Fâsit metin: "${o.includes}" ihtivâ etmeli.` : o.format === "regex" ? `Fâsit metin: ${o.pattern} nakşına uymalı.` : `Fâsit ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Fâsit sayı: ${n.divisor} katı olmalıydı.`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar ${n.keys.length > 1 ? "s" : ""}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} için tanınmayan anahtar var.`;
      case "invalid_union":
        return "Giren tanınamadı.";
      case "invalid_element":
        return `${n.origin} için tanınmayan kıymet var.`;
      default:
        return "Kıymet tanınamadı.";
    }
  };
};
function Gv() {
  return {
    localeError: Kv()
  };
}
const Hv = () => {
  const e = {
    string: { unit: "توکي", verb: "ولري" },
    file: { unit: "بایټس", verb: "ولري" },
    array: { unit: "توکي", verb: "ولري" },
    set: { unit: "توکي", verb: "ولري" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "ورودي",
    email: "بریښنالیک",
    url: "یو آر ال",
    emoji: "ایموجي",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "نیټه او وخت",
    date: "نېټه",
    time: "وخت",
    duration: "موده",
    ipv4: "د IPv4 پته",
    ipv6: "د IPv6 پته",
    cidrv4: "د IPv4 ساحه",
    cidrv6: "د IPv6 ساحه",
    base64: "base64-encoded متن",
    base64url: "base64url-encoded متن",
    json_string: "JSON متن",
    e164: "د E.164 شمېره",
    jwt: "JWT",
    template_literal: "ورودي"
  }, i = {
    nan: "NaN",
    number: "عدد",
    array: "ارې"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `ناسم ورودي: باید instanceof ${n.expected} وای, مګر ${s} ترلاسه شو` : `ناسم ورودي: باید ${o} وای, مګر ${s} ترلاسه شو`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `ناسم ورودي: باید ${M(n.values[0])} وای` : `ناسم انتخاب: باید یو له ${I(n.values, "|")} څخه وای`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `ډیر لوی: ${n.origin ?? "ارزښت"} باید ${o}${n.maximum.toString()} ${a.unit ?? "عنصرونه"} ولري` : `ډیر لوی: ${n.origin ?? "ارزښت"} باید ${o}${n.maximum.toString()} وي`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `ډیر کوچنی: ${n.origin} باید ${o}${n.minimum.toString()} ${a.unit} ولري` : `ډیر کوچنی: ${n.origin} باید ${o}${n.minimum.toString()} وي`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `ناسم متن: باید د "${o.prefix}" سره پیل شي` : o.format === "ends_with" ? `ناسم متن: باید د "${o.suffix}" سره پای ته ورسيږي` : o.format === "includes" ? `ناسم متن: باید "${o.includes}" ولري` : o.format === "regex" ? `ناسم متن: باید د ${o.pattern} سره مطابقت ولري` : `${r[o.format] ?? n.format} ناسم دی`;
      }
      case "not_multiple_of":
        return `ناسم عدد: باید د ${n.divisor} مضرب وي`;
      case "unrecognized_keys":
        return `ناسم ${n.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `ناسم کلیډ په ${n.origin} کې`;
      case "invalid_union":
        return "ناسمه ورودي";
      case "invalid_element":
        return `ناسم عنصر په ${n.origin} کې`;
      default:
        return "ناسمه ورودي";
    }
  };
};
function Xv() {
  return {
    localeError: Hv()
  };
}
const Yv = () => {
  const e = {
    string: { unit: "znaków", verb: "mieć" },
    file: { unit: "bajtów", verb: "mieć" },
    array: { unit: "elementów", verb: "mieć" },
    set: { unit: "elementów", verb: "mieć" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "wyrażenie",
    email: "adres email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i godzina w formacie ISO",
    date: "data w formacie ISO",
    time: "godzina w formacie ISO",
    duration: "czas trwania ISO",
    ipv4: "adres IPv4",
    ipv6: "adres IPv6",
    cidrv4: "zakres IPv4",
    cidrv6: "zakres IPv6",
    base64: "ciąg znaków zakodowany w formacie base64",
    base64url: "ciąg znaków zakodowany w formacie base64url",
    json_string: "ciąg znaków w formacie JSON",
    e164: "liczba E.164",
    jwt: "JWT",
    template_literal: "wejście"
  }, i = {
    nan: "NaN",
    number: "liczba",
    array: "tablica"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Nieprawidłowe dane wejściowe: oczekiwano instanceof ${n.expected}, otrzymano ${s}` : `Nieprawidłowe dane wejściowe: oczekiwano ${o}, otrzymano ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Nieprawidłowe dane wejściowe: oczekiwano ${M(n.values[0])}` : `Nieprawidłowa opcja: oczekiwano jednej z wartości ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Za duża wartość: oczekiwano, że ${n.origin ?? "wartość"} będzie mieć ${o}${n.maximum.toString()} ${a.unit ?? "elementów"}` : `Zbyt duż(y/a/e): oczekiwano, że ${n.origin ?? "wartość"} będzie wynosić ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Za mała wartość: oczekiwano, że ${n.origin ?? "wartość"} będzie mieć ${o}${n.minimum.toString()} ${a.unit ?? "elementów"}` : `Zbyt mał(y/a/e): oczekiwano, że ${n.origin ?? "wartość"} będzie wynosić ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Nieprawidłowy ciąg znaków: musi zaczynać się od "${o.prefix}"` : o.format === "ends_with" ? `Nieprawidłowy ciąg znaków: musi kończyć się na "${o.suffix}"` : o.format === "includes" ? `Nieprawidłowy ciąg znaków: musi zawierać "${o.includes}"` : o.format === "regex" ? `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${o.pattern}` : `Nieprawidłow(y/a/e) ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Nieprawidłowa liczba: musi być wielokrotnością ${n.divisor}`;
      case "unrecognized_keys":
        return `Nierozpoznane klucze${n.keys.length > 1 ? "s" : ""}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Nieprawidłowy klucz w ${n.origin}`;
      case "invalid_union":
        return "Nieprawidłowe dane wejściowe";
      case "invalid_element":
        return `Nieprawidłowa wartość w ${n.origin}`;
      default:
        return "Nieprawidłowe dane wejściowe";
    }
  };
};
function Qv() {
  return {
    localeError: Yv()
  };
}
const e_ = () => {
  const e = {
    string: { unit: "caracteres", verb: "ter" },
    file: { unit: "bytes", verb: "ter" },
    array: { unit: "itens", verb: "ter" },
    set: { unit: "itens", verb: "ter" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "padrão",
    email: "endereço de e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "duração ISO",
    ipv4: "endereço IPv4",
    ipv6: "endereço IPv6",
    cidrv4: "faixa de IPv4",
    cidrv6: "faixa de IPv6",
    base64: "texto codificado em base64",
    base64url: "URL codificada em base64",
    json_string: "texto JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  }, i = {
    nan: "NaN",
    number: "número",
    null: "nulo"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Tipo inválido: esperado instanceof ${n.expected}, recebido ${s}` : `Tipo inválido: esperado ${o}, recebido ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Entrada inválida: esperado ${M(n.values[0])}` : `Opção inválida: esperada uma das ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Muito grande: esperado que ${n.origin ?? "valor"} tivesse ${o}${n.maximum.toString()} ${a.unit ?? "elementos"}` : `Muito grande: esperado que ${n.origin ?? "valor"} fosse ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Muito pequeno: esperado que ${n.origin} tivesse ${o}${n.minimum.toString()} ${a.unit}` : `Muito pequeno: esperado que ${n.origin} fosse ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Texto inválido: deve começar com "${o.prefix}"` : o.format === "ends_with" ? `Texto inválido: deve terminar com "${o.suffix}"` : o.format === "includes" ? `Texto inválido: deve incluir "${o.includes}"` : o.format === "regex" ? `Texto inválido: deve corresponder ao padrão ${o.pattern}` : `${r[o.format] ?? n.format} inválido`;
      }
      case "not_multiple_of":
        return `Número inválido: deve ser múltiplo de ${n.divisor}`;
      case "unrecognized_keys":
        return `Chave${n.keys.length > 1 ? "s" : ""} desconhecida${n.keys.length > 1 ? "s" : ""}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Chave inválida em ${n.origin}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inválido em ${n.origin}`;
      default:
        return "Campo inválido";
    }
  };
};
function t_() {
  return {
    localeError: e_()
  };
}
function js(e, t, r, i) {
  const n = Math.abs(e), o = n % 10, a = n % 100;
  return a >= 11 && a <= 19 ? i : o === 1 ? t : o >= 2 && o <= 4 ? r : i;
}
const n_ = () => {
  const e = {
    string: {
      unit: {
        one: "символ",
        few: "символа",
        many: "символов"
      },
      verb: "иметь"
    },
    file: {
      unit: {
        one: "байт",
        few: "байта",
        many: "байт"
      },
      verb: "иметь"
    },
    array: {
      unit: {
        one: "элемент",
        few: "элемента",
        many: "элементов"
      },
      verb: "иметь"
    },
    set: {
      unit: {
        one: "элемент",
        few: "элемента",
        many: "элементов"
      },
      verb: "иметь"
    }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "ввод",
    email: "email адрес",
    url: "URL",
    emoji: "эмодзи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO дата и время",
    date: "ISO дата",
    time: "ISO время",
    duration: "ISO длительность",
    ipv4: "IPv4 адрес",
    ipv6: "IPv6 адрес",
    cidrv4: "IPv4 диапазон",
    cidrv6: "IPv6 диапазон",
    base64: "строка в формате base64",
    base64url: "строка в формате base64url",
    json_string: "JSON строка",
    e164: "номер E.164",
    jwt: "JWT",
    template_literal: "ввод"
  }, i = {
    nan: "NaN",
    number: "число",
    array: "массив"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Неверный ввод: ожидалось instanceof ${n.expected}, получено ${s}` : `Неверный ввод: ожидалось ${o}, получено ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Неверный ввод: ожидалось ${M(n.values[0])}` : `Неверный вариант: ожидалось одно из ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        if (a) {
          const s = Number(n.maximum), c = js(s, a.unit.one, a.unit.few, a.unit.many);
          return `Слишком большое значение: ожидалось, что ${n.origin ?? "значение"} будет иметь ${o}${n.maximum.toString()} ${c}`;
        }
        return `Слишком большое значение: ожидалось, что ${n.origin ?? "значение"} будет ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        if (a) {
          const s = Number(n.minimum), c = js(s, a.unit.one, a.unit.few, a.unit.many);
          return `Слишком маленькое значение: ожидалось, что ${n.origin} будет иметь ${o}${n.minimum.toString()} ${c}`;
        }
        return `Слишком маленькое значение: ожидалось, что ${n.origin} будет ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Неверная строка: должна начинаться с "${o.prefix}"` : o.format === "ends_with" ? `Неверная строка: должна заканчиваться на "${o.suffix}"` : o.format === "includes" ? `Неверная строка: должна содержать "${o.includes}"` : o.format === "regex" ? `Неверная строка: должна соответствовать шаблону ${o.pattern}` : `Неверный ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Неверное число: должно быть кратным ${n.divisor}`;
      case "unrecognized_keys":
        return `Нераспознанн${n.keys.length > 1 ? "ые" : "ый"} ключ${n.keys.length > 1 ? "и" : ""}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Неверный ключ в ${n.origin}`;
      case "invalid_union":
        return "Неверные входные данные";
      case "invalid_element":
        return `Неверное значение в ${n.origin}`;
      default:
        return "Неверные входные данные";
    }
  };
};
function r_() {
  return {
    localeError: n_()
  };
}
const i_ = () => {
  const e = {
    string: { unit: "znakov", verb: "imeti" },
    file: { unit: "bajtov", verb: "imeti" },
    array: { unit: "elementov", verb: "imeti" },
    set: { unit: "elementov", verb: "imeti" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "vnos",
    email: "e-poštni naslov",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum in čas",
    date: "ISO datum",
    time: "ISO čas",
    duration: "ISO trajanje",
    ipv4: "IPv4 naslov",
    ipv6: "IPv6 naslov",
    cidrv4: "obseg IPv4",
    cidrv6: "obseg IPv6",
    base64: "base64 kodiran niz",
    base64url: "base64url kodiran niz",
    json_string: "JSON niz",
    e164: "E.164 številka",
    jwt: "JWT",
    template_literal: "vnos"
  }, i = {
    nan: "NaN",
    number: "število",
    array: "tabela"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Neveljaven vnos: pričakovano instanceof ${n.expected}, prejeto ${s}` : `Neveljaven vnos: pričakovano ${o}, prejeto ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Neveljaven vnos: pričakovano ${M(n.values[0])}` : `Neveljavna možnost: pričakovano eno izmed ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Preveliko: pričakovano, da bo ${n.origin ?? "vrednost"} imelo ${o}${n.maximum.toString()} ${a.unit ?? "elementov"}` : `Preveliko: pričakovano, da bo ${n.origin ?? "vrednost"} ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Premajhno: pričakovano, da bo ${n.origin} imelo ${o}${n.minimum.toString()} ${a.unit}` : `Premajhno: pričakovano, da bo ${n.origin} ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Neveljaven niz: mora se začeti z "${o.prefix}"` : o.format === "ends_with" ? `Neveljaven niz: mora se končati z "${o.suffix}"` : o.format === "includes" ? `Neveljaven niz: mora vsebovati "${o.includes}"` : o.format === "regex" ? `Neveljaven niz: mora ustrezati vzorcu ${o.pattern}` : `Neveljaven ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Neveljavno število: mora biti večkratnik ${n.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznan${n.keys.length > 1 ? "i ključi" : " ključ"}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Neveljaven ključ v ${n.origin}`;
      case "invalid_union":
        return "Neveljaven vnos";
      case "invalid_element":
        return `Neveljavna vrednost v ${n.origin}`;
      default:
        return "Neveljaven vnos";
    }
  };
};
function o_() {
  return {
    localeError: i_()
  };
}
const a_ = () => {
  const e = {
    string: { unit: "tecken", verb: "att ha" },
    file: { unit: "bytes", verb: "att ha" },
    array: { unit: "objekt", verb: "att innehålla" },
    set: { unit: "objekt", verb: "att innehålla" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "reguljärt uttryck",
    email: "e-postadress",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datum och tid",
    date: "ISO-datum",
    time: "ISO-tid",
    duration: "ISO-varaktighet",
    ipv4: "IPv4-intervall",
    ipv6: "IPv6-intervall",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodad sträng",
    base64url: "base64url-kodad sträng",
    json_string: "JSON-sträng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "mall-literal"
  }, i = {
    nan: "NaN",
    number: "antal",
    array: "lista"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Ogiltig inmatning: förväntat instanceof ${n.expected}, fick ${s}` : `Ogiltig inmatning: förväntat ${o}, fick ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Ogiltig inmatning: förväntat ${M(n.values[0])}` : `Ogiltigt val: förväntade en av ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `För stor(t): förväntade ${n.origin ?? "värdet"} att ha ${o}${n.maximum.toString()} ${a.unit ?? "element"}` : `För stor(t): förväntat ${n.origin ?? "värdet"} att ha ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `För lite(t): förväntade ${n.origin ?? "värdet"} att ha ${o}${n.minimum.toString()} ${a.unit}` : `För lite(t): förväntade ${n.origin ?? "värdet"} att ha ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Ogiltig sträng: måste börja med "${o.prefix}"` : o.format === "ends_with" ? `Ogiltig sträng: måste sluta med "${o.suffix}"` : o.format === "includes" ? `Ogiltig sträng: måste innehålla "${o.includes}"` : o.format === "regex" ? `Ogiltig sträng: måste matcha mönstret "${o.pattern}"` : `Ogiltig(t) ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ogiltigt tal: måste vara en multipel av ${n.divisor}`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Ogiltig nyckel i ${n.origin ?? "värdet"}`;
      case "invalid_union":
        return "Ogiltig input";
      case "invalid_element":
        return `Ogiltigt värde i ${n.origin ?? "värdet"}`;
      default:
        return "Ogiltig input";
    }
  };
};
function s_() {
  return {
    localeError: a_()
  };
}
const c_ = () => {
  const e = {
    string: { unit: "எழுத்துக்கள்", verb: "கொண்டிருக்க வேண்டும்" },
    file: { unit: "பைட்டுகள்", verb: "கொண்டிருக்க வேண்டும்" },
    array: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
    set: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "உள்ளீடு",
    email: "மின்னஞ்சல் முகவரி",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO தேதி நேரம்",
    date: "ISO தேதி",
    time: "ISO நேரம்",
    duration: "ISO கால அளவு",
    ipv4: "IPv4 முகவரி",
    ipv6: "IPv6 முகவரி",
    cidrv4: "IPv4 வரம்பு",
    cidrv6: "IPv6 வரம்பு",
    base64: "base64-encoded சரம்",
    base64url: "base64url-encoded சரம்",
    json_string: "JSON சரம்",
    e164: "E.164 எண்",
    jwt: "JWT",
    template_literal: "input"
  }, i = {
    nan: "NaN",
    number: "எண்",
    array: "அணி",
    null: "வெறுமை"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது instanceof ${n.expected}, பெறப்பட்டது ${s}` : `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${o}, பெறப்பட்டது ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${M(n.values[0])}` : `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${I(n.values, "|")} இல் ஒன்று`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${n.origin ?? "மதிப்பு"} ${o}${n.maximum.toString()} ${a.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்` : `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${n.origin ?? "மதிப்பு"} ${o}${n.maximum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${n.origin} ${o}${n.minimum.toString()} ${a.unit} ஆக இருக்க வேண்டும்` : `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${n.origin} ${o}${n.minimum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `தவறான சரம்: "${o.prefix}" இல் தொடங்க வேண்டும்` : o.format === "ends_with" ? `தவறான சரம்: "${o.suffix}" இல் முடிவடைய வேண்டும்` : o.format === "includes" ? `தவறான சரம்: "${o.includes}" ஐ உள்ளடக்க வேண்டும்` : o.format === "regex" ? `தவறான சரம்: ${o.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்` : `தவறான ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `தவறான எண்: ${n.divisor} இன் பலமாக இருக்க வேண்டும்`;
      case "unrecognized_keys":
        return `அடையாளம் தெரியாத விசை${n.keys.length > 1 ? "கள்" : ""}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} இல் தவறான விசை`;
      case "invalid_union":
        return "தவறான உள்ளீடு";
      case "invalid_element":
        return `${n.origin} இல் தவறான மதிப்பு`;
      default:
        return "தவறான உள்ளீடு";
    }
  };
};
function u_() {
  return {
    localeError: c_()
  };
}
const l_ = () => {
  const e = {
    string: { unit: "ตัวอักษร", verb: "ควรมี" },
    file: { unit: "ไบต์", verb: "ควรมี" },
    array: { unit: "รายการ", verb: "ควรมี" },
    set: { unit: "รายการ", verb: "ควรมี" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "ข้อมูลที่ป้อน",
    email: "ที่อยู่อีเมล",
    url: "URL",
    emoji: "อิโมจิ",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "วันที่เวลาแบบ ISO",
    date: "วันที่แบบ ISO",
    time: "เวลาแบบ ISO",
    duration: "ช่วงเวลาแบบ ISO",
    ipv4: "ที่อยู่ IPv4",
    ipv6: "ที่อยู่ IPv6",
    cidrv4: "ช่วง IP แบบ IPv4",
    cidrv6: "ช่วง IP แบบ IPv6",
    base64: "ข้อความแบบ Base64",
    base64url: "ข้อความแบบ Base64 สำหรับ URL",
    json_string: "ข้อความแบบ JSON",
    e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
    jwt: "โทเคน JWT",
    template_literal: "ข้อมูลที่ป้อน"
  }, i = {
    nan: "NaN",
    number: "ตัวเลข",
    array: "อาร์เรย์ (Array)",
    null: "ไม่มีค่า (null)"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น instanceof ${n.expected} แต่ได้รับ ${s}` : `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${o} แต่ได้รับ ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `ค่าไม่ถูกต้อง: ควรเป็น ${M(n.values[0])}` : `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "ไม่เกิน" : "น้อยกว่า", a = t(n.origin);
        return a ? `เกินกำหนด: ${n.origin ?? "ค่า"} ควรมี${o} ${n.maximum.toString()} ${a.unit ?? "รายการ"}` : `เกินกำหนด: ${n.origin ?? "ค่า"} ควรมี${o} ${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? "อย่างน้อย" : "มากกว่า", a = t(n.origin);
        return a ? `น้อยกว่ากำหนด: ${n.origin} ควรมี${o} ${n.minimum.toString()} ${a.unit}` : `น้อยกว่ากำหนด: ${n.origin} ควรมี${o} ${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${o.prefix}"` : o.format === "ends_with" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${o.suffix}"` : o.format === "includes" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${o.includes}" อยู่ในข้อความ` : o.format === "regex" ? `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${o.pattern}` : `รูปแบบไม่ถูกต้อง: ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${n.divisor} ได้ลงตัว`;
      case "unrecognized_keys":
        return `พบคีย์ที่ไม่รู้จัก: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `คีย์ไม่ถูกต้องใน ${n.origin}`;
      case "invalid_union":
        return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
      case "invalid_element":
        return `ข้อมูลไม่ถูกต้องใน ${n.origin}`;
      default:
        return "ข้อมูลไม่ถูกต้อง";
    }
  };
};
function d_() {
  return {
    localeError: l_()
  };
}
const f_ = () => {
  const e = {
    string: { unit: "karakter", verb: "olmalı" },
    file: { unit: "bayt", verb: "olmalı" },
    array: { unit: "öğe", verb: "olmalı" },
    set: { unit: "öğe", verb: "olmalı" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "girdi",
    email: "e-posta adresi",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO tarih ve saat",
    date: "ISO tarih",
    time: "ISO saat",
    duration: "ISO süre",
    ipv4: "IPv4 adresi",
    ipv6: "IPv6 adresi",
    cidrv4: "IPv4 aralığı",
    cidrv6: "IPv6 aralığı",
    base64: "base64 ile şifrelenmiş metin",
    base64url: "base64url ile şifrelenmiş metin",
    json_string: "JSON dizesi",
    e164: "E.164 sayısı",
    jwt: "JWT",
    template_literal: "Şablon dizesi"
  }, i = {
    nan: "NaN"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Geçersiz değer: beklenen instanceof ${n.expected}, alınan ${s}` : `Geçersiz değer: beklenen ${o}, alınan ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Geçersiz değer: beklenen ${M(n.values[0])}` : `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Çok büyük: beklenen ${n.origin ?? "değer"} ${o}${n.maximum.toString()} ${a.unit ?? "öğe"}` : `Çok büyük: beklenen ${n.origin ?? "değer"} ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Çok küçük: beklenen ${n.origin} ${o}${n.minimum.toString()} ${a.unit}` : `Çok küçük: beklenen ${n.origin} ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Geçersiz metin: "${o.prefix}" ile başlamalı` : o.format === "ends_with" ? `Geçersiz metin: "${o.suffix}" ile bitmeli` : o.format === "includes" ? `Geçersiz metin: "${o.includes}" içermeli` : o.format === "regex" ? `Geçersiz metin: ${o.pattern} desenine uymalı` : `Geçersiz ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Geçersiz sayı: ${n.divisor} ile tam bölünebilmeli`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar${n.keys.length > 1 ? "lar" : ""}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} içinde geçersiz anahtar`;
      case "invalid_union":
        return "Geçersiz değer";
      case "invalid_element":
        return `${n.origin} içinde geçersiz değer`;
      default:
        return "Geçersiz değer";
    }
  };
};
function h_() {
  return {
    localeError: f_()
  };
}
const p_ = () => {
  const e = {
    string: { unit: "символів", verb: "матиме" },
    file: { unit: "байтів", verb: "матиме" },
    array: { unit: "елементів", verb: "матиме" },
    set: { unit: "елементів", verb: "матиме" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "вхідні дані",
    email: "адреса електронної пошти",
    url: "URL",
    emoji: "емодзі",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "дата та час ISO",
    date: "дата ISO",
    time: "час ISO",
    duration: "тривалість ISO",
    ipv4: "адреса IPv4",
    ipv6: "адреса IPv6",
    cidrv4: "діапазон IPv4",
    cidrv6: "діапазон IPv6",
    base64: "рядок у кодуванні base64",
    base64url: "рядок у кодуванні base64url",
    json_string: "рядок JSON",
    e164: "номер E.164",
    jwt: "JWT",
    template_literal: "вхідні дані"
  }, i = {
    nan: "NaN",
    number: "число",
    array: "масив"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Неправильні вхідні дані: очікується instanceof ${n.expected}, отримано ${s}` : `Неправильні вхідні дані: очікується ${o}, отримано ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Неправильні вхідні дані: очікується ${M(n.values[0])}` : `Неправильна опція: очікується одне з ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Занадто велике: очікується, що ${n.origin ?? "значення"} ${a.verb} ${o}${n.maximum.toString()} ${a.unit ?? "елементів"}` : `Занадто велике: очікується, що ${n.origin ?? "значення"} буде ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Занадто мале: очікується, що ${n.origin} ${a.verb} ${o}${n.minimum.toString()} ${a.unit}` : `Занадто мале: очікується, що ${n.origin} буде ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Неправильний рядок: повинен починатися з "${o.prefix}"` : o.format === "ends_with" ? `Неправильний рядок: повинен закінчуватися на "${o.suffix}"` : o.format === "includes" ? `Неправильний рядок: повинен містити "${o.includes}"` : o.format === "regex" ? `Неправильний рядок: повинен відповідати шаблону ${o.pattern}` : `Неправильний ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Неправильне число: повинно бути кратним ${n.divisor}`;
      case "unrecognized_keys":
        return `Нерозпізнаний ключ${n.keys.length > 1 ? "і" : ""}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Неправильний ключ у ${n.origin}`;
      case "invalid_union":
        return "Неправильні вхідні дані";
      case "invalid_element":
        return `Неправильне значення у ${n.origin}`;
      default:
        return "Неправильні вхідні дані";
    }
  };
};
function Od() {
  return {
    localeError: p_()
  };
}
function m_() {
  return Od();
}
const g_ = () => {
  const e = {
    string: { unit: "حروف", verb: "ہونا" },
    file: { unit: "بائٹس", verb: "ہونا" },
    array: { unit: "آئٹمز", verb: "ہونا" },
    set: { unit: "آئٹمز", verb: "ہونا" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "ان پٹ",
    email: "ای میل ایڈریس",
    url: "یو آر ایل",
    emoji: "ایموجی",
    uuid: "یو یو آئی ڈی",
    uuidv4: "یو یو آئی ڈی وی 4",
    uuidv6: "یو یو آئی ڈی وی 6",
    nanoid: "نینو آئی ڈی",
    guid: "جی یو آئی ڈی",
    cuid: "سی یو آئی ڈی",
    cuid2: "سی یو آئی ڈی 2",
    ulid: "یو ایل آئی ڈی",
    xid: "ایکس آئی ڈی",
    ksuid: "کے ایس یو آئی ڈی",
    datetime: "آئی ایس او ڈیٹ ٹائم",
    date: "آئی ایس او تاریخ",
    time: "آئی ایس او وقت",
    duration: "آئی ایس او مدت",
    ipv4: "آئی پی وی 4 ایڈریس",
    ipv6: "آئی پی وی 6 ایڈریس",
    cidrv4: "آئی پی وی 4 رینج",
    cidrv6: "آئی پی وی 6 رینج",
    base64: "بیس 64 ان کوڈڈ سٹرنگ",
    base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
    json_string: "جے ایس او این سٹرنگ",
    e164: "ای 164 نمبر",
    jwt: "جے ڈبلیو ٹی",
    template_literal: "ان پٹ"
  }, i = {
    nan: "NaN",
    number: "نمبر",
    array: "آرے",
    null: "نل"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `غلط ان پٹ: instanceof ${n.expected} متوقع تھا، ${s} موصول ہوا` : `غلط ان پٹ: ${o} متوقع تھا، ${s} موصول ہوا`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `غلط ان پٹ: ${M(n.values[0])} متوقع تھا` : `غلط آپشن: ${I(n.values, "|")} میں سے ایک متوقع تھا`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `بہت بڑا: ${n.origin ?? "ویلیو"} کے ${o}${n.maximum.toString()} ${a.unit ?? "عناصر"} ہونے متوقع تھے` : `بہت بڑا: ${n.origin ?? "ویلیو"} کا ${o}${n.maximum.toString()} ہونا متوقع تھا`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `بہت چھوٹا: ${n.origin} کے ${o}${n.minimum.toString()} ${a.unit} ہونے متوقع تھے` : `بہت چھوٹا: ${n.origin} کا ${o}${n.minimum.toString()} ہونا متوقع تھا`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `غلط سٹرنگ: "${o.prefix}" سے شروع ہونا چاہیے` : o.format === "ends_with" ? `غلط سٹرنگ: "${o.suffix}" پر ختم ہونا چاہیے` : o.format === "includes" ? `غلط سٹرنگ: "${o.includes}" شامل ہونا چاہیے` : o.format === "regex" ? `غلط سٹرنگ: پیٹرن ${o.pattern} سے میچ ہونا چاہیے` : `غلط ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `غلط نمبر: ${n.divisor} کا مضاعف ہونا چاہیے`;
      case "unrecognized_keys":
        return `غیر تسلیم شدہ کی${n.keys.length > 1 ? "ز" : ""}: ${I(n.keys, "، ")}`;
      case "invalid_key":
        return `${n.origin} میں غلط کی`;
      case "invalid_union":
        return "غلط ان پٹ";
      case "invalid_element":
        return `${n.origin} میں غلط ویلیو`;
      default:
        return "غلط ان پٹ";
    }
  };
};
function v_() {
  return {
    localeError: g_()
  };
}
const __ = () => {
  const e = {
    string: { unit: "belgi", verb: "bo‘lishi kerak" },
    file: { unit: "bayt", verb: "bo‘lishi kerak" },
    array: { unit: "element", verb: "bo‘lishi kerak" },
    set: { unit: "element", verb: "bo‘lishi kerak" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "kirish",
    email: "elektron pochta manzili",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO sana va vaqti",
    date: "ISO sana",
    time: "ISO vaqt",
    duration: "ISO davomiylik",
    ipv4: "IPv4 manzil",
    ipv6: "IPv6 manzil",
    mac: "MAC manzil",
    cidrv4: "IPv4 diapazon",
    cidrv6: "IPv6 diapazon",
    base64: "base64 kodlangan satr",
    base64url: "base64url kodlangan satr",
    json_string: "JSON satr",
    e164: "E.164 raqam",
    jwt: "JWT",
    template_literal: "kirish"
  }, i = {
    nan: "NaN",
    number: "raqam",
    array: "massiv"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Noto‘g‘ri kirish: kutilgan instanceof ${n.expected}, qabul qilingan ${s}` : `Noto‘g‘ri kirish: kutilgan ${o}, qabul qilingan ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Noto‘g‘ri kirish: kutilgan ${M(n.values[0])}` : `Noto‘g‘ri variant: quyidagilardan biri kutilgan ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Juda katta: kutilgan ${n.origin ?? "qiymat"} ${o}${n.maximum.toString()} ${a.unit} ${a.verb}` : `Juda katta: kutilgan ${n.origin ?? "qiymat"} ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Juda kichik: kutilgan ${n.origin} ${o}${n.minimum.toString()} ${a.unit} ${a.verb}` : `Juda kichik: kutilgan ${n.origin} ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Noto‘g‘ri satr: "${o.prefix}" bilan boshlanishi kerak` : o.format === "ends_with" ? `Noto‘g‘ri satr: "${o.suffix}" bilan tugashi kerak` : o.format === "includes" ? `Noto‘g‘ri satr: "${o.includes}" ni o‘z ichiga olishi kerak` : o.format === "regex" ? `Noto‘g‘ri satr: ${o.pattern} shabloniga mos kelishi kerak` : `Noto‘g‘ri ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Noto‘g‘ri raqam: ${n.divisor} ning karralisi bo‘lishi kerak`;
      case "unrecognized_keys":
        return `Noma’lum kalit${n.keys.length > 1 ? "lar" : ""}: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} dagi kalit noto‘g‘ri`;
      case "invalid_union":
        return "Noto‘g‘ri kirish";
      case "invalid_element":
        return `${n.origin} da noto‘g‘ri qiymat`;
      default:
        return "Noto‘g‘ri kirish";
    }
  };
};
function y_() {
  return {
    localeError: __()
  };
}
const $_ = () => {
  const e = {
    string: { unit: "ký tự", verb: "có" },
    file: { unit: "byte", verb: "có" },
    array: { unit: "phần tử", verb: "có" },
    set: { unit: "phần tử", verb: "có" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "đầu vào",
    email: "địa chỉ email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ngày giờ ISO",
    date: "ngày ISO",
    time: "giờ ISO",
    duration: "khoảng thời gian ISO",
    ipv4: "địa chỉ IPv4",
    ipv6: "địa chỉ IPv6",
    cidrv4: "dải IPv4",
    cidrv6: "dải IPv6",
    base64: "chuỗi mã hóa base64",
    base64url: "chuỗi mã hóa base64url",
    json_string: "chuỗi JSON",
    e164: "số E.164",
    jwt: "JWT",
    template_literal: "đầu vào"
  }, i = {
    nan: "NaN",
    number: "số",
    array: "mảng"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Đầu vào không hợp lệ: mong đợi instanceof ${n.expected}, nhận được ${s}` : `Đầu vào không hợp lệ: mong đợi ${o}, nhận được ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Đầu vào không hợp lệ: mong đợi ${M(n.values[0])}` : `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Quá lớn: mong đợi ${n.origin ?? "giá trị"} ${a.verb} ${o}${n.maximum.toString()} ${a.unit ?? "phần tử"}` : `Quá lớn: mong đợi ${n.origin ?? "giá trị"} ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Quá nhỏ: mong đợi ${n.origin} ${a.verb} ${o}${n.minimum.toString()} ${a.unit}` : `Quá nhỏ: mong đợi ${n.origin} ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Chuỗi không hợp lệ: phải bắt đầu bằng "${o.prefix}"` : o.format === "ends_with" ? `Chuỗi không hợp lệ: phải kết thúc bằng "${o.suffix}"` : o.format === "includes" ? `Chuỗi không hợp lệ: phải bao gồm "${o.includes}"` : o.format === "regex" ? `Chuỗi không hợp lệ: phải khớp với mẫu ${o.pattern}` : `${r[o.format] ?? n.format} không hợp lệ`;
      }
      case "not_multiple_of":
        return `Số không hợp lệ: phải là bội số của ${n.divisor}`;
      case "unrecognized_keys":
        return `Khóa không được nhận dạng: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Khóa không hợp lệ trong ${n.origin}`;
      case "invalid_union":
        return "Đầu vào không hợp lệ";
      case "invalid_element":
        return `Giá trị không hợp lệ trong ${n.origin}`;
      default:
        return "Đầu vào không hợp lệ";
    }
  };
};
function b_() {
  return {
    localeError: $_()
  };
}
const k_ = () => {
  const e = {
    string: { unit: "字符", verb: "包含" },
    file: { unit: "字节", verb: "包含" },
    array: { unit: "项", verb: "包含" },
    set: { unit: "项", verb: "包含" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "输入",
    email: "电子邮件",
    url: "URL",
    emoji: "表情符号",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO日期时间",
    date: "ISO日期",
    time: "ISO时间",
    duration: "ISO时长",
    ipv4: "IPv4地址",
    ipv6: "IPv6地址",
    cidrv4: "IPv4网段",
    cidrv6: "IPv6网段",
    base64: "base64编码字符串",
    base64url: "base64url编码字符串",
    json_string: "JSON字符串",
    e164: "E.164号码",
    jwt: "JWT",
    template_literal: "输入"
  }, i = {
    nan: "NaN",
    number: "数字",
    array: "数组",
    null: "空值(null)"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `无效输入：期望 instanceof ${n.expected}，实际接收 ${s}` : `无效输入：期望 ${o}，实际接收 ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `无效输入：期望 ${M(n.values[0])}` : `无效选项：期望以下之一 ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `数值过大：期望 ${n.origin ?? "值"} ${o}${n.maximum.toString()} ${a.unit ?? "个元素"}` : `数值过大：期望 ${n.origin ?? "值"} ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `数值过小：期望 ${n.origin} ${o}${n.minimum.toString()} ${a.unit}` : `数值过小：期望 ${n.origin} ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `无效字符串：必须以 "${o.prefix}" 开头` : o.format === "ends_with" ? `无效字符串：必须以 "${o.suffix}" 结尾` : o.format === "includes" ? `无效字符串：必须包含 "${o.includes}"` : o.format === "regex" ? `无效字符串：必须满足正则表达式 ${o.pattern}` : `无效${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `无效数字：必须是 ${n.divisor} 的倍数`;
      case "unrecognized_keys":
        return `出现未知的键(key): ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} 中的键(key)无效`;
      case "invalid_union":
        return "无效输入";
      case "invalid_element":
        return `${n.origin} 中包含无效值(value)`;
      default:
        return "无效输入";
    }
  };
};
function w_() {
  return {
    localeError: k_()
  };
}
const S_ = () => {
  const e = {
    string: { unit: "字元", verb: "擁有" },
    file: { unit: "位元組", verb: "擁有" },
    array: { unit: "項目", verb: "擁有" },
    set: { unit: "項目", verb: "擁有" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "輸入",
    email: "郵件地址",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO 日期時間",
    date: "ISO 日期",
    time: "ISO 時間",
    duration: "ISO 期間",
    ipv4: "IPv4 位址",
    ipv6: "IPv6 位址",
    cidrv4: "IPv4 範圍",
    cidrv6: "IPv6 範圍",
    base64: "base64 編碼字串",
    base64url: "base64url 編碼字串",
    json_string: "JSON 字串",
    e164: "E.164 數值",
    jwt: "JWT",
    template_literal: "輸入"
  }, i = {
    nan: "NaN"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `無效的輸入值：預期為 instanceof ${n.expected}，但收到 ${s}` : `無效的輸入值：預期為 ${o}，但收到 ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `無效的輸入值：預期為 ${M(n.values[0])}` : `無效的選項：預期為以下其中之一 ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `數值過大：預期 ${n.origin ?? "值"} 應為 ${o}${n.maximum.toString()} ${a.unit ?? "個元素"}` : `數值過大：預期 ${n.origin ?? "值"} 應為 ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `數值過小：預期 ${n.origin} 應為 ${o}${n.minimum.toString()} ${a.unit}` : `數值過小：預期 ${n.origin} 應為 ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `無效的字串：必須以 "${o.prefix}" 開頭` : o.format === "ends_with" ? `無效的字串：必須以 "${o.suffix}" 結尾` : o.format === "includes" ? `無效的字串：必須包含 "${o.includes}"` : o.format === "regex" ? `無效的字串：必須符合格式 ${o.pattern}` : `無效的 ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `無效的數字：必須為 ${n.divisor} 的倍數`;
      case "unrecognized_keys":
        return `無法識別的鍵值${n.keys.length > 1 ? "們" : ""}：${I(n.keys, "、")}`;
      case "invalid_key":
        return `${n.origin} 中有無效的鍵值`;
      case "invalid_union":
        return "無效的輸入值";
      case "invalid_element":
        return `${n.origin} 中有無效的值`;
      default:
        return "無效的輸入值";
    }
  };
};
function I_() {
  return {
    localeError: S_()
  };
}
const z_ = () => {
  const e = {
    string: { unit: "àmi", verb: "ní" },
    file: { unit: "bytes", verb: "ní" },
    array: { unit: "nkan", verb: "ní" },
    set: { unit: "nkan", verb: "ní" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = {
    regex: "ẹ̀rọ ìbáwọlé",
    email: "àdírẹ́sì ìmẹ́lì",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "àkókò ISO",
    date: "ọjọ́ ISO",
    time: "àkókò ISO",
    duration: "àkókò tó pé ISO",
    ipv4: "àdírẹ́sì IPv4",
    ipv6: "àdírẹ́sì IPv6",
    cidrv4: "àgbègbè IPv4",
    cidrv6: "àgbègbè IPv6",
    base64: "ọ̀rọ̀ tí a kọ́ ní base64",
    base64url: "ọ̀rọ̀ base64url",
    json_string: "ọ̀rọ̀ JSON",
    e164: "nọ́mbà E.164",
    jwt: "JWT",
    template_literal: "ẹ̀rọ ìbáwọlé"
  }, i = {
    nan: "NaN",
    number: "nọ́mbà",
    array: "akopọ"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type": {
        const o = i[n.expected] ?? n.expected, a = V(n.input), s = i[a] ?? a;
        return /^[A-Z]/.test(n.expected) ? `Ìbáwọlé aṣìṣe: a ní láti fi instanceof ${n.expected}, àmọ̀ a rí ${s}` : `Ìbáwọlé aṣìṣe: a ní láti fi ${o}, àmọ̀ a rí ${s}`;
      }
      case "invalid_value":
        return n.values.length === 1 ? `Ìbáwọlé aṣìṣe: a ní láti fi ${M(n.values[0])}` : `Àṣàyàn aṣìṣe: yan ọ̀kan lára ${I(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", a = t(n.origin);
        return a ? `Tó pọ̀ jù: a ní láti jẹ́ pé ${n.origin ?? "iye"} ${a.verb} ${o}${n.maximum} ${a.unit}` : `Tó pọ̀ jù: a ní láti jẹ́ ${o}${n.maximum}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", a = t(n.origin);
        return a ? `Kéré ju: a ní láti jẹ́ pé ${n.origin} ${a.verb} ${o}${n.minimum} ${a.unit}` : `Kéré ju: a ní láti jẹ́ ${o}${n.minimum}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${o.prefix}"` : o.format === "ends_with" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${o.suffix}"` : o.format === "includes" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${o.includes}"` : o.format === "regex" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${o.pattern}` : `Aṣìṣe: ${r[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${n.divisor}`;
      case "unrecognized_keys":
        return `Bọtìnì àìmọ̀: ${I(n.keys, ", ")}`;
      case "invalid_key":
        return `Bọtìnì aṣìṣe nínú ${n.origin}`;
      case "invalid_union":
        return "Ìbáwọlé aṣìṣe";
      case "invalid_element":
        return `Iye aṣìṣe nínú ${n.origin}`;
      default:
        return "Ìbáwọlé aṣìṣe";
    }
  };
};
function x_() {
  return {
    localeError: z_()
  };
}
const Ed = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, ar: Jg, az: qg, be: Kg, bg: Hg, ca: Yg, cs: ev, da: nv, de: iv, en: zd, eo: sv, es: uv, fa: dv, fi: hv, fr: mv, frCA: vv, he: yv, hu: bv, hy: wv, id: Iv, is: xv, it: Ev, ja: Nv, ka: Uv, kh: Zv, km: xd, ko: jv, lt: Rv, mk: Lv, ms: Bv, nl: Vv, no: Wv, ota: Gv, pl: Qv, ps: Xv, pt: t_, ru: r_, sl: o_, sv: s_, ta: u_, th: d_, tr: h_, ua: m_, uk: Od, ur: v_, uz: y_, vi: b_, yo: x_, zhCN: w_, zhTW: I_ }, Symbol.toStringTag, { value: "Module" }));
var Ps;
const Td = /* @__PURE__ */ Symbol("ZodOutput"), Nd = /* @__PURE__ */ Symbol("ZodInput");
let Cd = class {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...r) {
    const i = r[0];
    return this._map.set(t, i), i && typeof i == "object" && "id" in i && this._idmap.set(i.id, t), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const r = this._map.get(t);
    return r && typeof r == "object" && "id" in r && this._idmap.delete(r.id), this._map.delete(t), this;
  }
  get(t) {
    const r = t._zod.parent;
    if (r) {
      const i = { ...this.get(r) ?? {} };
      delete i.id;
      const n = { ...i, ...this._map.get(t) };
      return Object.keys(n).length ? n : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
};
function Zo() {
  return new Cd();
}
(Ps = globalThis).__zod_globalRegistry ?? (Ps.__zod_globalRegistry = Zo());
const He = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function Ud(e, t) {
  return new e({
    type: "string",
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ad(e, t) {
  return new e({
    type: "string",
    coerce: !0,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Do(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function pr(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function jo(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Po(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ro(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Fo(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Tr(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Lo(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Mo(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Bo(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Jo(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Vo(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function qo(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Wo(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ko(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Go(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Zd(e, t) {
  return new e({
    type: "string",
    format: "mac",
    check: "string_format",
    abort: !1,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ho(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Xo(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Yo(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Qo(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ea(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ta(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...b(t)
  });
}
const Dd = {
  Any: null,
  Minute: -1,
  Second: 0,
  Millisecond: 3,
  Microsecond: 6
};
// @__NO_SIDE_EFFECTS__
function jd(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Pd(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Rd(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Fd(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ld(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Md(e, t) {
  return new e({
    type: "number",
    coerce: !0,
    checks: [],
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Bd(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Jd(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float32",
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Vd(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float64",
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function qd(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "int32",
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Wd(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "uint32",
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Kd(e, t) {
  return new e({
    type: "boolean",
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Gd(e, t) {
  return new e({
    type: "boolean",
    coerce: !0,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Hd(e, t) {
  return new e({
    type: "bigint",
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Xd(e, t) {
  return new e({
    type: "bigint",
    coerce: !0,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Yd(e, t) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "int64",
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Qd(e, t) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "uint64",
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ef(e, t) {
  return new e({
    type: "symbol",
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function tf(e, t) {
  return new e({
    type: "undefined",
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function nf(e, t) {
  return new e({
    type: "null",
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function rf(e) {
  return new e({
    type: "any"
  });
}
// @__NO_SIDE_EFFECTS__
function of(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function af(e, t) {
  return new e({
    type: "never",
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function sf(e, t) {
  return new e({
    type: "void",
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function cf(e, t) {
  return new e({
    type: "date",
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function uf(e, t) {
  return new e({
    type: "date",
    coerce: !0,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function lf(e, t) {
  return new e({
    type: "nan",
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function $t(e, t) {
  return new zo({
    check: "less_than",
    ...b(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Xe(e, t) {
  return new zo({
    check: "less_than",
    ...b(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function bt(e, t) {
  return new xo({
    check: "greater_than",
    ...b(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Le(e, t) {
  return new xo({
    check: "greater_than",
    ...b(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function na(e) {
  return /* @__PURE__ */ bt(0, e);
}
// @__NO_SIDE_EFFECTS__
function ra(e) {
  return /* @__PURE__ */ $t(0, e);
}
// @__NO_SIDE_EFFECTS__
function ia(e) {
  return /* @__PURE__ */ Xe(0, e);
}
// @__NO_SIDE_EFFECTS__
function oa(e) {
  return /* @__PURE__ */ Le(0, e);
}
// @__NO_SIDE_EFFECTS__
function qt(e, t) {
  return new Wu({
    check: "multiple_of",
    ...b(t),
    value: e
  });
}
// @__NO_SIDE_EFFECTS__
function Yt(e, t) {
  return new Hu({
    check: "max_size",
    ...b(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function kt(e, t) {
  return new Xu({
    check: "min_size",
    ...b(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function En(e, t) {
  return new Yu({
    check: "size_equals",
    ...b(t),
    size: e
  });
}
// @__NO_SIDE_EFFECTS__
function Tn(e, t) {
  return new Qu({
    check: "max_length",
    ...b(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Ut(e, t) {
  return new el({
    check: "min_length",
    ...b(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Nn(e, t) {
  return new tl({
    check: "length_equals",
    ...b(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function Nr(e, t) {
  return new nl({
    check: "string_format",
    format: "regex",
    ...b(t),
    pattern: e
  });
}
// @__NO_SIDE_EFFECTS__
function Cr(e) {
  return new rl({
    check: "string_format",
    format: "lowercase",
    ...b(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Ur(e) {
  return new il({
    check: "string_format",
    format: "uppercase",
    ...b(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Ar(e, t) {
  return new ol({
    check: "string_format",
    format: "includes",
    ...b(t),
    includes: e
  });
}
// @__NO_SIDE_EFFECTS__
function Zr(e, t) {
  return new al({
    check: "string_format",
    format: "starts_with",
    ...b(t),
    prefix: e
  });
}
// @__NO_SIDE_EFFECTS__
function Dr(e, t) {
  return new sl({
    check: "string_format",
    format: "ends_with",
    ...b(t),
    suffix: e
  });
}
// @__NO_SIDE_EFFECTS__
function aa(e, t, r) {
  return new cl({
    check: "property",
    property: e,
    schema: t,
    ...b(r)
  });
}
// @__NO_SIDE_EFFECTS__
function jr(e, t) {
  return new ul({
    check: "mime_type",
    mime: e,
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function pt(e) {
  return new ll({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function Pr(e) {
  return /* @__PURE__ */ pt((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function Rr() {
  return /* @__PURE__ */ pt((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function Fr() {
  return /* @__PURE__ */ pt((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function Lr() {
  return /* @__PURE__ */ pt((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function Mr() {
  return /* @__PURE__ */ pt((e) => Jc(e));
}
// @__NO_SIDE_EFFECTS__
function df(e, t, r) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...b(r)
  });
}
// @__NO_SIDE_EFFECTS__
function O_(e, t, r) {
  return new e({
    type: "union",
    options: t,
    ...b(r)
  });
}
function E_(e, t, r) {
  return new e({
    type: "union",
    options: t,
    inclusive: !1,
    ...b(r)
  });
}
// @__NO_SIDE_EFFECTS__
function T_(e, t, r, i) {
  return new e({
    type: "union",
    options: r,
    discriminator: t,
    ...b(i)
  });
}
// @__NO_SIDE_EFFECTS__
function N_(e, t, r) {
  return new e({
    type: "intersection",
    left: t,
    right: r
  });
}
// @__NO_SIDE_EFFECTS__
function C_(e, t, r, i) {
  const n = r instanceof G, o = n ? i : r, a = n ? r : null;
  return new e({
    type: "tuple",
    items: t,
    rest: a,
    ...b(o)
  });
}
// @__NO_SIDE_EFFECTS__
function U_(e, t, r, i) {
  return new e({
    type: "record",
    keyType: t,
    valueType: r,
    ...b(i)
  });
}
// @__NO_SIDE_EFFECTS__
function A_(e, t, r, i) {
  return new e({
    type: "map",
    keyType: t,
    valueType: r,
    ...b(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Z_(e, t, r) {
  return new e({
    type: "set",
    valueType: t,
    ...b(r)
  });
}
// @__NO_SIDE_EFFECTS__
function D_(e, t, r) {
  const i = Array.isArray(t) ? Object.fromEntries(t.map((n) => [n, n])) : t;
  return new e({
    type: "enum",
    entries: i,
    ...b(r)
  });
}
// @__NO_SIDE_EFFECTS__
function j_(e, t, r) {
  return new e({
    type: "enum",
    entries: t,
    ...b(r)
  });
}
// @__NO_SIDE_EFFECTS__
function P_(e, t, r) {
  return new e({
    type: "literal",
    values: Array.isArray(t) ? t : [t],
    ...b(r)
  });
}
// @__NO_SIDE_EFFECTS__
function ff(e, t) {
  return new e({
    type: "file",
    ...b(t)
  });
}
// @__NO_SIDE_EFFECTS__
function R_(e, t) {
  return new e({
    type: "transform",
    transform: t
  });
}
// @__NO_SIDE_EFFECTS__
function F_(e, t) {
  return new e({
    type: "optional",
    innerType: t
  });
}
// @__NO_SIDE_EFFECTS__
function L_(e, t) {
  return new e({
    type: "nullable",
    innerType: t
  });
}
// @__NO_SIDE_EFFECTS__
function M_(e, t, r) {
  return new e({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : zr(r);
    }
  });
}
// @__NO_SIDE_EFFECTS__
function B_(e, t, r) {
  return new e({
    type: "nonoptional",
    innerType: t,
    ...b(r)
  });
}
// @__NO_SIDE_EFFECTS__
function J_(e, t) {
  return new e({
    type: "success",
    innerType: t
  });
}
// @__NO_SIDE_EFFECTS__
function V_(e, t, r) {
  return new e({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
// @__NO_SIDE_EFFECTS__
function q_(e, t, r) {
  return new e({
    type: "pipe",
    in: t,
    out: r
  });
}
// @__NO_SIDE_EFFECTS__
function W_(e, t) {
  return new e({
    type: "readonly",
    innerType: t
  });
}
// @__NO_SIDE_EFFECTS__
function K_(e, t, r) {
  return new e({
    type: "template_literal",
    parts: t,
    ...b(r)
  });
}
// @__NO_SIDE_EFFECTS__
function G_(e, t) {
  return new e({
    type: "lazy",
    getter: t
  });
}
// @__NO_SIDE_EFFECTS__
function H_(e, t) {
  return new e({
    type: "promise",
    innerType: t
  });
}
// @__NO_SIDE_EFFECTS__
function hf(e, t, r) {
  const i = b(r);
  return i.abort ?? (i.abort = !0), new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...i
  });
}
// @__NO_SIDE_EFFECTS__
function pf(e, t, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...b(r)
  });
}
// @__NO_SIDE_EFFECTS__
function mf(e) {
  const t = /* @__PURE__ */ gf((r) => (r.addIssue = (i) => {
    if (typeof i == "string")
      r.issues.push(Jt(i, r.value, t._zod.def));
    else {
      const n = i;
      n.fatal && (n.continue = !1), n.code ?? (n.code = "custom"), n.input ?? (n.input = r.value), n.inst ?? (n.inst = t), n.continue ?? (n.continue = !t._zod.def.abort), r.issues.push(Jt(n));
    }
  }, e(r.value, r)));
  return t;
}
// @__NO_SIDE_EFFECTS__
function gf(e, t) {
  const r = new ye({
    check: "custom",
    ...b(t)
  });
  return r._zod.check = e, r;
}
// @__NO_SIDE_EFFECTS__
function vf(e) {
  const t = new ye({ check: "describe" });
  return t._zod.onattach = [
    (r) => {
      const i = He.get(r) ?? {};
      He.add(r, { ...i, description: e });
    }
  ], t._zod.check = () => {
  }, t;
}
// @__NO_SIDE_EFFECTS__
function _f(e) {
  const t = new ye({ check: "meta" });
  return t._zod.onattach = [
    (r) => {
      const i = He.get(r) ?? {};
      He.add(r, { ...i, ...e });
    }
  ], t._zod.check = () => {
  }, t;
}
// @__NO_SIDE_EFFECTS__
function yf(e, t) {
  const r = b(t);
  let i = r.truthy ?? ["true", "1", "yes", "on", "y", "enabled"], n = r.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  r.case !== "sensitive" && (i = i.map((h) => typeof h == "string" ? h.toLowerCase() : h), n = n.map((h) => typeof h == "string" ? h.toLowerCase() : h));
  const o = new Set(i), a = new Set(n), s = e.Codec ?? Ao, c = e.Boolean ?? To, u = e.String ?? On, l = new u({ type: "string", error: r.error }), d = new c({ type: "boolean", error: r.error }), f = new s({
    type: "pipe",
    in: l,
    out: d,
    transform: ((h, v) => {
      let _ = h;
      return r.case !== "sensitive" && (_ = _.toLowerCase()), o.has(_) ? !0 : a.has(_) ? !1 : (v.issues.push({
        code: "invalid_value",
        expected: "stringbool",
        values: [...o, ...a],
        input: v.value,
        inst: f,
        continue: !1
      }), {});
    }),
    reverseTransform: ((h, v) => h === !0 ? i[0] || "true" : n[0] || "false"),
    error: r.error
  });
  return f;
}
// @__NO_SIDE_EFFECTS__
function Cn(e, t, r, i = {}) {
  const n = b(i), o = {
    ...b(i),
    check: "string_format",
    type: "string",
    format: t,
    fn: typeof r == "function" ? r : (s) => r.test(s),
    ...n
  };
  return r instanceof RegExp && (o.pattern = r), new e(o);
}
function Wt(e) {
  let t = e?.target ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: e?.metadata ?? He,
    target: t,
    unrepresentable: e?.unrepresentable ?? "throw",
    override: e?.override ?? (() => {
    }),
    io: e?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: e?.cycles ?? "ref",
    reused: e?.reused ?? "inline",
    external: e?.external ?? void 0
  };
}
function he(e, t, r = { path: [], schemaPath: [] }) {
  var i;
  const n = e._zod.def, o = t.seen.get(e);
  if (o)
    return o.count++, r.schemaPath.includes(e) && (o.cycle = r.path), o.schema;
  const a = { schema: {}, count: 1, cycle: void 0, path: r.path };
  t.seen.set(e, a);
  const s = e._zod.toJSONSchema?.();
  if (s)
    a.schema = s;
  else {
    const l = {
      ...r,
      schemaPath: [...r.schemaPath, e],
      path: r.path
    };
    if (e._zod.processJSONSchema)
      e._zod.processJSONSchema(t, a.schema, l);
    else {
      const f = a.schema, h = t.processors[n.type];
      if (!h)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${n.type}`);
      h(e, t, f, l);
    }
    const d = e._zod.parent;
    d && (a.ref || (a.ref = d), he(d, t, l), t.seen.get(d).isParent = !0);
  }
  const c = t.metadataRegistry.get(e);
  return c && Object.assign(a.schema, c), t.io === "input" && Ze(e) && (delete a.schema.examples, delete a.schema.default), t.io === "input" && a.schema._prefault && ((i = a.schema).default ?? (i.default = a.schema._prefault)), delete a.schema._prefault, t.seen.get(e).schema;
}
function Kt(e, t) {
  const r = e.seen.get(t);
  if (!r)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const i = /* @__PURE__ */ new Map();
  for (const a of e.seen.entries()) {
    const s = e.metadataRegistry.get(a[0])?.id;
    if (s) {
      const c = i.get(s);
      if (c && c !== a[0])
        throw new Error(`Duplicate schema id "${s}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      i.set(s, a[0]);
    }
  }
  const n = (a) => {
    const s = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const d = e.external.registry.get(a[0])?.id, f = e.external.uri ?? ((v) => v);
      if (d)
        return { ref: f(d) };
      const h = a[1].defId ?? a[1].schema.id ?? `schema${e.counter++}`;
      return a[1].defId = h, { defId: h, ref: `${f("__shared")}#/${s}/${h}` };
    }
    if (a[1] === r)
      return { ref: "#" };
    const u = `#/${s}/`, l = a[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: l, ref: u + l };
  }, o = (a) => {
    if (a[1].schema.$ref)
      return;
    const s = a[1], { ref: c, defId: u } = n(a);
    s.def = { ...s.schema }, u && (s.defId = u);
    const l = s.schema;
    for (const d in l)
      delete l[d];
    l.$ref = c;
  };
  if (e.cycles === "throw")
    for (const a of e.seen.entries()) {
      const s = a[1];
      if (s.cycle)
        throw new Error(`Cycle detected: #/${s.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const a of e.seen.entries()) {
    const s = a[1];
    if (t === a[0]) {
      o(a);
      continue;
    }
    if (e.external) {
      const u = e.external.registry.get(a[0])?.id;
      if (t !== a[0] && u) {
        o(a);
        continue;
      }
    }
    if (e.metadataRegistry.get(a[0])?.id) {
      o(a);
      continue;
    }
    if (s.cycle) {
      o(a);
      continue;
    }
    if (s.count > 1 && e.reused === "ref") {
      o(a);
      continue;
    }
  }
}
function Gt(e, t) {
  const r = e.seen.get(t);
  if (!r)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const i = (a) => {
    const s = e.seen.get(a);
    if (s.ref === null)
      return;
    const c = s.def ?? s.schema, u = { ...c }, l = s.ref;
    if (s.ref = null, l) {
      i(l);
      const f = e.seen.get(l), h = f.schema;
      if (h.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (c.allOf = c.allOf ?? [], c.allOf.push(h)) : Object.assign(c, h), Object.assign(c, u), a._zod.parent === l)
        for (const _ in c)
          _ === "$ref" || _ === "allOf" || _ in u || delete c[_];
      if (h.$ref && f.def)
        for (const _ in c)
          _ === "$ref" || _ === "allOf" || _ in f.def && JSON.stringify(c[_]) === JSON.stringify(f.def[_]) && delete c[_];
    }
    const d = a._zod.parent;
    if (d && d !== l) {
      i(d);
      const f = e.seen.get(d);
      if (f?.schema.$ref && (c.$ref = f.schema.$ref, f.def))
        for (const h in c)
          h === "$ref" || h === "allOf" || h in f.def && JSON.stringify(c[h]) === JSON.stringify(f.def[h]) && delete c[h];
    }
    e.override({
      zodSchema: a,
      jsonSchema: c,
      path: s.path ?? []
    });
  };
  for (const a of [...e.seen.entries()].reverse())
    i(a[0]);
  const n = {};
  if (e.target === "draft-2020-12" ? n.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? n.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? n.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
    const a = e.external.registry.get(t)?.id;
    if (!a)
      throw new Error("Schema is missing an `id` property");
    n.$id = e.external.uri(a);
  }
  Object.assign(n, r.def ?? r.schema);
  const o = e.external?.defs ?? {};
  for (const a of e.seen.entries()) {
    const s = a[1];
    s.def && s.defId && (o[s.defId] = s.def);
  }
  e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? n.$defs = o : n.definitions = o);
  try {
    const a = JSON.parse(JSON.stringify(n));
    return Object.defineProperty(a, "~standard", {
      value: {
        ...t["~standard"],
        jsonSchema: {
          input: hn(t, "input", e.processors),
          output: hn(t, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), a;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function Ze(e, t) {
  const r = t ?? { seen: /* @__PURE__ */ new Set() };
  if (r.seen.has(e))
    return !1;
  r.seen.add(e);
  const i = e._zod.def;
  if (i.type === "transform")
    return !0;
  if (i.type === "array")
    return Ze(i.element, r);
  if (i.type === "set")
    return Ze(i.valueType, r);
  if (i.type === "lazy")
    return Ze(i.getter(), r);
  if (i.type === "promise" || i.type === "optional" || i.type === "nonoptional" || i.type === "nullable" || i.type === "readonly" || i.type === "default" || i.type === "prefault")
    return Ze(i.innerType, r);
  if (i.type === "intersection")
    return Ze(i.left, r) || Ze(i.right, r);
  if (i.type === "record" || i.type === "map")
    return Ze(i.keyType, r) || Ze(i.valueType, r);
  if (i.type === "pipe")
    return Ze(i.in, r) || Ze(i.out, r);
  if (i.type === "object") {
    for (const n in i.shape)
      if (Ze(i.shape[n], r))
        return !0;
    return !1;
  }
  if (i.type === "union") {
    for (const n of i.options)
      if (Ze(n, r))
        return !0;
    return !1;
  }
  if (i.type === "tuple") {
    for (const n of i.items)
      if (Ze(n, r))
        return !0;
    return !!(i.rest && Ze(i.rest, r));
  }
  return !1;
}
const $f = (e, t = {}) => (r) => {
  const i = Wt({ ...r, processors: t });
  return he(e, i), Kt(i, e), Gt(i, e);
}, hn = (e, t, r = {}) => (i) => {
  const { libraryOptions: n, target: o } = i ?? {}, a = Wt({ ...n ?? {}, target: o, io: t, processors: r });
  return he(e, a), Kt(a, e), Gt(a, e);
}, X_ = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, bf = (e, t, r, i) => {
  const n = r;
  n.type = "string";
  const { minimum: o, maximum: a, format: s, patterns: c, contentEncoding: u } = e._zod.bag;
  if (typeof o == "number" && (n.minLength = o), typeof a == "number" && (n.maxLength = a), s && (n.format = X_[s] ?? s, n.format === "" && delete n.format, s === "time" && delete n.format), u && (n.contentEncoding = u), c && c.size > 0) {
    const l = [...c];
    l.length === 1 ? n.pattern = l[0].source : l.length > 1 && (n.allOf = [
      ...l.map((d) => ({
        ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: d.source
      }))
    ]);
  }
}, kf = (e, t, r, i) => {
  const n = r, { minimum: o, maximum: a, format: s, multipleOf: c, exclusiveMaximum: u, exclusiveMinimum: l } = e._zod.bag;
  typeof s == "string" && s.includes("int") ? n.type = "integer" : n.type = "number", typeof l == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (n.minimum = l, n.exclusiveMinimum = !0) : n.exclusiveMinimum = l), typeof o == "number" && (n.minimum = o, typeof l == "number" && t.target !== "draft-04" && (l >= o ? delete n.minimum : delete n.exclusiveMinimum)), typeof u == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (n.maximum = u, n.exclusiveMaximum = !0) : n.exclusiveMaximum = u), typeof a == "number" && (n.maximum = a, typeof u == "number" && t.target !== "draft-04" && (u <= a ? delete n.maximum : delete n.exclusiveMaximum)), typeof c == "number" && (n.multipleOf = c);
}, wf = (e, t, r, i) => {
  r.type = "boolean";
}, Sf = (e, t, r, i) => {
  if (t.unrepresentable === "throw")
    throw new Error("BigInt cannot be represented in JSON Schema");
}, If = (e, t, r, i) => {
  if (t.unrepresentable === "throw")
    throw new Error("Symbols cannot be represented in JSON Schema");
}, zf = (e, t, r, i) => {
  t.target === "openapi-3.0" ? (r.type = "string", r.nullable = !0, r.enum = [null]) : r.type = "null";
}, xf = (e, t, r, i) => {
  if (t.unrepresentable === "throw")
    throw new Error("Undefined cannot be represented in JSON Schema");
}, Of = (e, t, r, i) => {
  if (t.unrepresentable === "throw")
    throw new Error("Void cannot be represented in JSON Schema");
}, Ef = (e, t, r, i) => {
  r.not = {};
}, Tf = (e, t, r, i) => {
}, Nf = (e, t, r, i) => {
}, Cf = (e, t, r, i) => {
  if (t.unrepresentable === "throw")
    throw new Error("Date cannot be represented in JSON Schema");
}, Uf = (e, t, r, i) => {
  const n = e._zod.def, o = uo(n.entries);
  o.every((a) => typeof a == "number") && (r.type = "number"), o.every((a) => typeof a == "string") && (r.type = "string"), r.enum = o;
}, Af = (e, t, r, i) => {
  const n = e._zod.def, o = [];
  for (const a of n.values)
    if (a === void 0) {
      if (t.unrepresentable === "throw")
        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if (typeof a == "bigint") {
      if (t.unrepresentable === "throw")
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      o.push(Number(a));
    } else
      o.push(a);
  if (o.length !== 0) if (o.length === 1) {
    const a = o[0];
    r.type = a === null ? "null" : typeof a, t.target === "draft-04" || t.target === "openapi-3.0" ? r.enum = [a] : r.const = a;
  } else
    o.every((a) => typeof a == "number") && (r.type = "number"), o.every((a) => typeof a == "string") && (r.type = "string"), o.every((a) => typeof a == "boolean") && (r.type = "boolean"), o.every((a) => a === null) && (r.type = "null"), r.enum = o;
}, Zf = (e, t, r, i) => {
  if (t.unrepresentable === "throw")
    throw new Error("NaN cannot be represented in JSON Schema");
}, Df = (e, t, r, i) => {
  const n = r, o = e._zod.pattern;
  if (!o)
    throw new Error("Pattern not found in template literal");
  n.type = "string", n.pattern = o.source;
}, jf = (e, t, r, i) => {
  const n = r, o = {
    type: "string",
    format: "binary",
    contentEncoding: "binary"
  }, { minimum: a, maximum: s, mime: c } = e._zod.bag;
  a !== void 0 && (o.minLength = a), s !== void 0 && (o.maxLength = s), c ? c.length === 1 ? (o.contentMediaType = c[0], Object.assign(n, o)) : (Object.assign(n, o), n.anyOf = c.map((u) => ({ contentMediaType: u }))) : Object.assign(n, o);
}, Pf = (e, t, r, i) => {
  r.type = "boolean";
}, Rf = (e, t, r, i) => {
  if (t.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, Ff = (e, t, r, i) => {
  if (t.unrepresentable === "throw")
    throw new Error("Function types cannot be represented in JSON Schema");
}, Lf = (e, t, r, i) => {
  if (t.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, Mf = (e, t, r, i) => {
  if (t.unrepresentable === "throw")
    throw new Error("Map cannot be represented in JSON Schema");
}, Bf = (e, t, r, i) => {
  if (t.unrepresentable === "throw")
    throw new Error("Set cannot be represented in JSON Schema");
}, Jf = (e, t, r, i) => {
  const n = r, o = e._zod.def, { minimum: a, maximum: s } = e._zod.bag;
  typeof a == "number" && (n.minItems = a), typeof s == "number" && (n.maxItems = s), n.type = "array", n.items = he(o.element, t, { ...i, path: [...i.path, "items"] });
}, Vf = (e, t, r, i) => {
  const n = r, o = e._zod.def;
  n.type = "object", n.properties = {};
  const a = o.shape;
  for (const u in a)
    n.properties[u] = he(a[u], t, {
      ...i,
      path: [...i.path, "properties", u]
    });
  const s = new Set(Object.keys(a)), c = new Set([...s].filter((u) => {
    const l = o.shape[u]._zod;
    return t.io === "input" ? l.optin === void 0 : l.optout === void 0;
  }));
  c.size > 0 && (n.required = Array.from(c)), o.catchall?._zod.def.type === "never" ? n.additionalProperties = !1 : o.catchall ? o.catchall && (n.additionalProperties = he(o.catchall, t, {
    ...i,
    path: [...i.path, "additionalProperties"]
  })) : t.io === "output" && (n.additionalProperties = !1);
}, sa = (e, t, r, i) => {
  const n = e._zod.def, o = n.inclusive === !1, a = n.options.map((s, c) => he(s, t, {
    ...i,
    path: [...i.path, o ? "oneOf" : "anyOf", c]
  }));
  o ? r.oneOf = a : r.anyOf = a;
}, qf = (e, t, r, i) => {
  const n = e._zod.def, o = he(n.left, t, {
    ...i,
    path: [...i.path, "allOf", 0]
  }), a = he(n.right, t, {
    ...i,
    path: [...i.path, "allOf", 1]
  }), s = (u) => "allOf" in u && Object.keys(u).length === 1, c = [
    ...s(o) ? o.allOf : [o],
    ...s(a) ? a.allOf : [a]
  ];
  r.allOf = c;
}, Wf = (e, t, r, i) => {
  const n = r, o = e._zod.def;
  n.type = "array";
  const a = t.target === "draft-2020-12" ? "prefixItems" : "items", s = t.target === "draft-2020-12" || t.target === "openapi-3.0" ? "items" : "additionalItems", c = o.items.map((f, h) => he(f, t, {
    ...i,
    path: [...i.path, a, h]
  })), u = o.rest ? he(o.rest, t, {
    ...i,
    path: [...i.path, s, ...t.target === "openapi-3.0" ? [o.items.length] : []]
  }) : null;
  t.target === "draft-2020-12" ? (n.prefixItems = c, u && (n.items = u)) : t.target === "openapi-3.0" ? (n.items = {
    anyOf: c
  }, u && n.items.anyOf.push(u), n.minItems = c.length, u || (n.maxItems = c.length)) : (n.items = c, u && (n.additionalItems = u));
  const { minimum: l, maximum: d } = e._zod.bag;
  typeof l == "number" && (n.minItems = l), typeof d == "number" && (n.maxItems = d);
}, Kf = (e, t, r, i) => {
  const n = r, o = e._zod.def;
  n.type = "object";
  const a = o.keyType, c = a._zod.bag?.patterns;
  if (o.mode === "loose" && c && c.size > 0) {
    const l = he(o.valueType, t, {
      ...i,
      path: [...i.path, "patternProperties", "*"]
    });
    n.patternProperties = {};
    for (const d of c)
      n.patternProperties[d.source] = l;
  } else
    (t.target === "draft-07" || t.target === "draft-2020-12") && (n.propertyNames = he(o.keyType, t, {
      ...i,
      path: [...i.path, "propertyNames"]
    })), n.additionalProperties = he(o.valueType, t, {
      ...i,
      path: [...i.path, "additionalProperties"]
    });
  const u = a._zod.values;
  if (u) {
    const l = [...u].filter((d) => typeof d == "string" || typeof d == "number");
    l.length > 0 && (n.required = l);
  }
}, Gf = (e, t, r, i) => {
  const n = e._zod.def, o = he(n.innerType, t, i), a = t.seen.get(e);
  t.target === "openapi-3.0" ? (a.ref = n.innerType, r.nullable = !0) : r.anyOf = [o, { type: "null" }];
}, Hf = (e, t, r, i) => {
  const n = e._zod.def;
  he(n.innerType, t, i);
  const o = t.seen.get(e);
  o.ref = n.innerType;
}, Xf = (e, t, r, i) => {
  const n = e._zod.def;
  he(n.innerType, t, i);
  const o = t.seen.get(e);
  o.ref = n.innerType, r.default = JSON.parse(JSON.stringify(n.defaultValue));
}, Yf = (e, t, r, i) => {
  const n = e._zod.def;
  he(n.innerType, t, i);
  const o = t.seen.get(e);
  o.ref = n.innerType, t.io === "input" && (r._prefault = JSON.parse(JSON.stringify(n.defaultValue)));
}, Qf = (e, t, r, i) => {
  const n = e._zod.def;
  he(n.innerType, t, i);
  const o = t.seen.get(e);
  o.ref = n.innerType;
  let a;
  try {
    a = n.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  r.default = a;
}, eh = (e, t, r, i) => {
  const n = e._zod.def, o = t.io === "input" ? n.in._zod.def.type === "transform" ? n.out : n.in : n.out;
  he(o, t, i);
  const a = t.seen.get(e);
  a.ref = o;
}, th = (e, t, r, i) => {
  const n = e._zod.def;
  he(n.innerType, t, i);
  const o = t.seen.get(e);
  o.ref = n.innerType, r.readOnly = !0;
}, nh = (e, t, r, i) => {
  const n = e._zod.def;
  he(n.innerType, t, i);
  const o = t.seen.get(e);
  o.ref = n.innerType;
}, ca = (e, t, r, i) => {
  const n = e._zod.def;
  he(n.innerType, t, i);
  const o = t.seen.get(e);
  o.ref = n.innerType;
}, rh = (e, t, r, i) => {
  const n = e._zod.innerType;
  he(n, t, i);
  const o = t.seen.get(e);
  o.ref = n;
}, Ki = {
  string: bf,
  number: kf,
  boolean: wf,
  bigint: Sf,
  symbol: If,
  null: zf,
  undefined: xf,
  void: Of,
  never: Ef,
  any: Tf,
  unknown: Nf,
  date: Cf,
  enum: Uf,
  literal: Af,
  nan: Zf,
  template_literal: Df,
  file: jf,
  success: Pf,
  custom: Rf,
  function: Ff,
  transform: Lf,
  map: Mf,
  set: Bf,
  array: Jf,
  object: Vf,
  union: sa,
  intersection: qf,
  tuple: Wf,
  record: Kf,
  nullable: Gf,
  nonoptional: Hf,
  default: Xf,
  prefault: Yf,
  catch: Qf,
  pipe: eh,
  readonly: th,
  promise: nh,
  optional: ca,
  lazy: rh
};
function ih(e, t) {
  if ("_idmap" in e) {
    const i = e, n = Wt({ ...t, processors: Ki }), o = {};
    for (const c of i._idmap.entries()) {
      const [u, l] = c;
      he(l, n);
    }
    const a = {}, s = {
      registry: i,
      uri: t?.uri,
      defs: o
    };
    n.external = s;
    for (const c of i._idmap.entries()) {
      const [u, l] = c;
      Kt(n, l), a[u] = Gt(n, l);
    }
    if (Object.keys(o).length > 0) {
      const c = n.target === "draft-2020-12" ? "$defs" : "definitions";
      a.__shared = {
        [c]: o
      };
    }
    return { schemas: a };
  }
  const r = Wt({ ...t, processors: Ki });
  return he(e, r), Kt(r, e), Gt(r, e);
}
class Y_ {
  /** @deprecated Access via ctx instead */
  get metadataRegistry() {
    return this.ctx.metadataRegistry;
  }
  /** @deprecated Access via ctx instead */
  get target() {
    return this.ctx.target;
  }
  /** @deprecated Access via ctx instead */
  get unrepresentable() {
    return this.ctx.unrepresentable;
  }
  /** @deprecated Access via ctx instead */
  get override() {
    return this.ctx.override;
  }
  /** @deprecated Access via ctx instead */
  get io() {
    return this.ctx.io;
  }
  /** @deprecated Access via ctx instead */
  get counter() {
    return this.ctx.counter;
  }
  set counter(t) {
    this.ctx.counter = t;
  }
  /** @deprecated Access via ctx instead */
  get seen() {
    return this.ctx.seen;
  }
  constructor(t) {
    let r = t?.target ?? "draft-2020-12";
    r === "draft-4" && (r = "draft-04"), r === "draft-7" && (r = "draft-07"), this.ctx = Wt({
      processors: Ki,
      target: r,
      ...t?.metadata && { metadata: t.metadata },
      ...t?.unrepresentable && { unrepresentable: t.unrepresentable },
      ...t?.override && { override: t.override },
      ...t?.io && { io: t.io }
    });
  }
  /**
   * Process a schema to prepare it for JSON Schema generation.
   * This must be called before emit().
   */
  process(t, r = { path: [], schemaPath: [] }) {
    return he(t, this.ctx, r);
  }
  /**
   * Emit the final JSON Schema after processing.
   * Must call process() first.
   */
  emit(t, r) {
    r && (r.cycles && (this.ctx.cycles = r.cycles), r.reused && (this.ctx.reused = r.reused), r.external && (this.ctx.external = r.external)), Kt(this.ctx, t);
    const i = Gt(this.ctx, t), { "~standard": n, ...o } = i;
    return o;
  }
}
const Q_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null }, Symbol.toStringTag, { value: "Module" })), ey = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, $ZodAny: Vl, $ZodArray: Hl, $ZodAsyncError: Nt, $ZodBase64: Ul, $ZodBase64URL: Zl, $ZodBigInt: No, $ZodBigIntFormat: Ll, $ZodBoolean: To, $ZodCIDRv4: Nl, $ZodCIDRv6: Cl, $ZodCUID: yl, $ZodCUID2: $l, $ZodCatch: vd, $ZodCheck: ye, $ZodCheckBigIntFormat: Gu, $ZodCheckEndsWith: sl, $ZodCheckGreaterThan: xo, $ZodCheckIncludes: ol, $ZodCheckLengthEquals: tl, $ZodCheckLessThan: zo, $ZodCheckLowerCase: rl, $ZodCheckMaxLength: Qu, $ZodCheckMaxSize: Hu, $ZodCheckMimeType: ul, $ZodCheckMinLength: el, $ZodCheckMinSize: Xu, $ZodCheckMultipleOf: Wu, $ZodCheckNumberFormat: Ku, $ZodCheckOverwrite: ll, $ZodCheckProperty: cl, $ZodCheckRegex: nl, $ZodCheckSizeEquals: Yu, $ZodCheckStartsWith: al, $ZodCheckStringFormat: xn, $ZodCheckUpperCase: il, $ZodCodec: Ao, $ZodCustom: Id, $ZodCustomStringFormat: Rl, $ZodDate: Gl, $ZodDefault: hd, $ZodDiscriminatedUnion: nd, $ZodE164: Dl, $ZodEmail: ml, $ZodEmoji: vl, $ZodEncodeError: Sr, $ZodEnum: sd, $ZodError: fo, $ZodExactOptional: dd, $ZodFile: ud, $ZodFunction: kd, $ZodGUID: hl, $ZodIPv4: Ol, $ZodIPv6: El, $ZodISODate: Il, $ZodISODateTime: Sl, $ZodISODuration: xl, $ZodISOTime: zl, $ZodIntersection: rd, $ZodJWT: Pl, $ZodKSUID: wl, $ZodLazy: Sd, $ZodLiteral: cd, $ZodMAC: Tl, $ZodMap: od, $ZodNaN: _d, $ZodNanoID: _l, $ZodNever: Wl, $ZodNonOptional: md, $ZodNull: Jl, $ZodNullable: fd, $ZodNumber: Eo, $ZodNumberFormat: Fl, $ZodObject: Ql, $ZodObjectJIT: ed, $ZodOptional: Uo, $ZodPipe: yd, $ZodPrefault: pd, $ZodPromise: wd, $ZodReadonly: $d, $ZodRealError: We, $ZodRecord: id, $ZodRegistry: Cd, $ZodSet: ad, $ZodString: On, $ZodStringFormat: me, $ZodSuccess: gd, $ZodSymbol: Ml, $ZodTemplateLiteral: bd, $ZodTransform: ld, $ZodTuple: Co, $ZodType: G, $ZodULID: bl, $ZodURL: gl, $ZodUUID: pl, $ZodUndefined: Bl, $ZodUnion: Er, $ZodUnknown: ql, $ZodVoid: Kl, $ZodXID: kl, $ZodXor: td, $brand: Mc, $constructor: g, $input: Nd, $output: Td, Doc: dl, JSONSchema: Q_, JSONSchemaGenerator: Y_, NEVER: Lc, TimePrecision: Dd, _any: rf, _array: df, _base64: Yo, _base64url: Qo, _bigint: Hd, _boolean: Kd, _catch: V_, _check: gf, _cidrv4: Ho, _cidrv6: Xo, _coercedBigint: Xd, _coercedBoolean: Gd, _coercedDate: uf, _coercedNumber: Md, _coercedString: Ad, _cuid: Bo, _cuid2: Jo, _custom: hf, _date: cf, _decode: go, _decodeAsync: _o, _default: M_, _discriminatedUnion: T_, _e164: ea, _email: Do, _emoji: Lo, _encode: mo, _encodeAsync: vo, _endsWith: Dr, _enum: D_, _file: ff, _float32: Jd, _float64: Vd, _gt: bt, _gte: Le, _guid: pr, _includes: Ar, _int: Bd, _int32: qd, _int64: Yd, _intersection: N_, _ipv4: Ko, _ipv6: Go, _isoDate: Pd, _isoDateTime: jd, _isoDuration: Fd, _isoTime: Rd, _jwt: ta, _ksuid: Wo, _lazy: G_, _length: Nn, _literal: P_, _lowercase: Cr, _lt: $t, _lte: Xe, _mac: Zd, _map: A_, _max: Xe, _maxLength: Tn, _maxSize: Yt, _mime: jr, _min: Le, _minLength: Ut, _minSize: kt, _multipleOf: qt, _nan: lf, _nanoid: Mo, _nativeEnum: j_, _negative: ra, _never: af, _nonnegative: oa, _nonoptional: B_, _nonpositive: ia, _normalize: Pr, _null: nf, _nullable: L_, _number: Ld, _optional: F_, _overwrite: pt, _parse: bn, _parseAsync: kn, _pipe: q_, _positive: na, _promise: H_, _property: aa, _readonly: W_, _record: U_, _refine: pf, _regex: Nr, _safeDecode: $o, _safeDecodeAsync: ko, _safeEncode: yo, _safeEncodeAsync: bo, _safeParse: wn, _safeParseAsync: Sn, _set: Z_, _size: En, _slugify: Mr, _startsWith: Zr, _string: Ud, _stringFormat: Cn, _stringbool: yf, _success: J_, _superRefine: mf, _symbol: ef, _templateLiteral: K_, _toLowerCase: Fr, _toUpperCase: Lr, _transform: R_, _trim: Rr, _tuple: C_, _uint32: Wd, _uint64: Qd, _ulid: Vo, _undefined: tf, _union: O_, _unknown: of, _uppercase: Ur, _url: Tr, _uuid: jo, _uuidv4: Po, _uuidv6: Ro, _uuidv7: Fo, _void: sf, _xid: qo, _xor: E_, clone: Qe, config: Ce, createStandardJSONSchemaMethod: hn, createToJSONSchemaMethod: $f, decode: fg, decodeAsync: pg, describe: vf, encode: dg, encodeAsync: hg, extractDefs: Kt, finalize: Gt, flattenError: ho, formatError: po, globalConfig: lr, globalRegistry: He, initializeContext: Wt, isValidBase64: Oo, isValidBase64URL: Al, isValidJWT: jl, locales: Ed, meta: _f, parse: Vi, parseAsync: qi, prettifyError: uu, process: he, regexes: Io, registry: Zo, safeDecode: gg, safeDecodeAsync: _g, safeEncode: mg, safeEncodeAsync: vg, safeParse: lu, safeParseAsync: du, toDotPath: cu, toJSONSchema: ih, treeifyError: su, util: ou, version: fl }, Symbol.toStringTag, { value: "Module" })), ty = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, endsWith: Dr, gt: bt, gte: Le, includes: Ar, length: Nn, lowercase: Cr, lt: $t, lte: Xe, maxLength: Tn, maxSize: Yt, mime: jr, minLength: Ut, minSize: kt, multipleOf: qt, negative: ra, nonnegative: oa, nonpositive: ia, normalize: Pr, overwrite: pt, positive: na, property: aa, regex: Nr, size: En, slugify: Mr, startsWith: Zr, toLowerCase: Fr, toUpperCase: Lr, trim: Rr, uppercase: Ur }, Symbol.toStringTag, { value: "Module" })), ua = /* @__PURE__ */ g("ZodISODateTime", (e, t) => {
  Sl.init(e, t), ge.init(e, t);
});
function oh(e) {
  return /* @__PURE__ */ jd(ua, e);
}
const la = /* @__PURE__ */ g("ZodISODate", (e, t) => {
  Il.init(e, t), ge.init(e, t);
});
function ah(e) {
  return /* @__PURE__ */ Pd(la, e);
}
const da = /* @__PURE__ */ g("ZodISOTime", (e, t) => {
  zl.init(e, t), ge.init(e, t);
});
function sh(e) {
  return /* @__PURE__ */ Rd(da, e);
}
const fa = /* @__PURE__ */ g("ZodISODuration", (e, t) => {
  xl.init(e, t), ge.init(e, t);
});
function ch(e) {
  return /* @__PURE__ */ Fd(fa, e);
}
const uh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, ZodISODate: la, ZodISODateTime: ua, ZodISODuration: fa, ZodISOTime: da, date: ah, datetime: oh, duration: ch, time: sh }, Symbol.toStringTag, { value: "Module" })), lh = (e, t) => {
  fo.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (r) => po(e, r)
      // enumerable: false,
    },
    flatten: {
      value: (r) => ho(e, r)
      // enumerable: false,
    },
    addIssue: {
      value: (r) => {
        e.issues.push(r), e.message = JSON.stringify(e.issues, dr, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (r) => {
        e.issues.push(...r), e.message = JSON.stringify(e.issues, dr, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return e.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, ny = g("ZodError", lh), Ke = g("ZodError", lh, {
  Parent: Error
}), dh = /* @__PURE__ */ bn(Ke), fh = /* @__PURE__ */ kn(Ke), hh = /* @__PURE__ */ wn(Ke), ph = /* @__PURE__ */ Sn(Ke), mh = /* @__PURE__ */ mo(Ke), gh = /* @__PURE__ */ go(Ke), vh = /* @__PURE__ */ vo(Ke), _h = /* @__PURE__ */ _o(Ke), yh = /* @__PURE__ */ yo(Ke), $h = /* @__PURE__ */ $o(Ke), bh = /* @__PURE__ */ bo(Ke), kh = /* @__PURE__ */ ko(Ke), Y = /* @__PURE__ */ g("ZodType", (e, t) => (G.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: hn(e, "input"),
    output: hn(e, "output")
  }
}), e.toJSONSchema = $f(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...r) => e.clone(lt(t, {
  checks: [
    ...t.checks ?? [],
    ...r.map((i) => typeof i == "function" ? { _zod: { check: i, def: { check: "custom" }, onattach: [] } } : i)
  ]
}), {
  parent: !0
}), e.with = e.check, e.clone = (r, i) => Qe(e, r, i), e.brand = () => e, e.register = ((r, i) => (r.add(e, i), e)), e.parse = (r, i) => dh(e, r, i, { callee: e.parse }), e.safeParse = (r, i) => hh(e, r, i), e.parseAsync = async (r, i) => fh(e, r, i, { callee: e.parseAsync }), e.safeParseAsync = async (r, i) => ph(e, r, i), e.spa = e.safeParseAsync, e.encode = (r, i) => mh(e, r, i), e.decode = (r, i) => gh(e, r, i), e.encodeAsync = async (r, i) => vh(e, r, i), e.decodeAsync = async (r, i) => _h(e, r, i), e.safeEncode = (r, i) => yh(e, r, i), e.safeDecode = (r, i) => $h(e, r, i), e.safeEncodeAsync = async (r, i) => bh(e, r, i), e.safeDecodeAsync = async (r, i) => kh(e, r, i), e.refine = (r, i) => e.check(ns(r, i)), e.superRefine = (r) => e.check(rs(r)), e.overwrite = (r) => e.check(/* @__PURE__ */ pt(r)), e.optional = () => mn(e), e.exactOptional = () => Pa(e), e.nullable = () => gn(e), e.nullish = () => mn(gn(e)), e.nonoptional = (r) => Ja(e, r), e.array = () => Pn(e), e.or = (r) => ui([e, r]), e.and = (r) => Oa(e, r), e.transform = (r) => vn(e, di(r)), e.default = (r) => La(e, r), e.prefault = (r) => Ba(e, r), e.catch = (r) => Wa(e, r), e.pipe = (r) => vn(e, r), e.readonly = () => Ha(e), e.describe = (r) => {
  const i = e.clone();
  return He.add(i, { description: r }), i;
}, Object.defineProperty(e, "description", {
  get() {
    return He.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...r) => {
  if (r.length === 0)
    return He.get(e);
  const i = e.clone();
  return He.add(i, r[0]), i;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (r) => r(e), e)), Br = /* @__PURE__ */ g("_ZodString", (e, t) => {
  On.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (i, n, o) => bf(e, i, n);
  const r = e._zod.bag;
  e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...i) => e.check(/* @__PURE__ */ Nr(...i)), e.includes = (...i) => e.check(/* @__PURE__ */ Ar(...i)), e.startsWith = (...i) => e.check(/* @__PURE__ */ Zr(...i)), e.endsWith = (...i) => e.check(/* @__PURE__ */ Dr(...i)), e.min = (...i) => e.check(/* @__PURE__ */ Ut(...i)), e.max = (...i) => e.check(/* @__PURE__ */ Tn(...i)), e.length = (...i) => e.check(/* @__PURE__ */ Nn(...i)), e.nonempty = (...i) => e.check(/* @__PURE__ */ Ut(1, ...i)), e.lowercase = (i) => e.check(/* @__PURE__ */ Cr(i)), e.uppercase = (i) => e.check(/* @__PURE__ */ Ur(i)), e.trim = () => e.check(/* @__PURE__ */ Rr()), e.normalize = (...i) => e.check(/* @__PURE__ */ Pr(...i)), e.toLowerCase = () => e.check(/* @__PURE__ */ Fr()), e.toUpperCase = () => e.check(/* @__PURE__ */ Lr()), e.slugify = () => e.check(/* @__PURE__ */ Mr());
}), Un = /* @__PURE__ */ g("ZodString", (e, t) => {
  On.init(e, t), Br.init(e, t), e.email = (r) => e.check(/* @__PURE__ */ Do(Jr, r)), e.url = (r) => e.check(/* @__PURE__ */ Tr(An, r)), e.jwt = (r) => e.check(/* @__PURE__ */ ta(oi, r)), e.emoji = (r) => e.check(/* @__PURE__ */ Lo(Vr, r)), e.guid = (r) => e.check(/* @__PURE__ */ pr(pn, r)), e.uuid = (r) => e.check(/* @__PURE__ */ jo(st, r)), e.uuidv4 = (r) => e.check(/* @__PURE__ */ Po(st, r)), e.uuidv6 = (r) => e.check(/* @__PURE__ */ Ro(st, r)), e.uuidv7 = (r) => e.check(/* @__PURE__ */ Fo(st, r)), e.nanoid = (r) => e.check(/* @__PURE__ */ Mo(qr, r)), e.guid = (r) => e.check(/* @__PURE__ */ pr(pn, r)), e.cuid = (r) => e.check(/* @__PURE__ */ Bo(Wr, r)), e.cuid2 = (r) => e.check(/* @__PURE__ */ Jo(Kr, r)), e.ulid = (r) => e.check(/* @__PURE__ */ Vo(Gr, r)), e.base64 = (r) => e.check(/* @__PURE__ */ Yo(ni, r)), e.base64url = (r) => e.check(/* @__PURE__ */ Qo(ri, r)), e.xid = (r) => e.check(/* @__PURE__ */ qo(Hr, r)), e.ksuid = (r) => e.check(/* @__PURE__ */ Wo(Xr, r)), e.ipv4 = (r) => e.check(/* @__PURE__ */ Ko(Yr, r)), e.ipv6 = (r) => e.check(/* @__PURE__ */ Go(Qr, r)), e.cidrv4 = (r) => e.check(/* @__PURE__ */ Ho(ei, r)), e.cidrv6 = (r) => e.check(/* @__PURE__ */ Xo(ti, r)), e.e164 = (r) => e.check(/* @__PURE__ */ ea(ii, r)), e.datetime = (r) => e.check(oh(r)), e.date = (r) => e.check(ah(r)), e.time = (r) => e.check(sh(r)), e.duration = (r) => e.check(ch(r));
});
function mr(e) {
  return /* @__PURE__ */ Ud(Un, e);
}
const ge = /* @__PURE__ */ g("ZodStringFormat", (e, t) => {
  me.init(e, t), Br.init(e, t);
}), Jr = /* @__PURE__ */ g("ZodEmail", (e, t) => {
  ml.init(e, t), ge.init(e, t);
});
function wh(e) {
  return /* @__PURE__ */ Do(Jr, e);
}
const pn = /* @__PURE__ */ g("ZodGUID", (e, t) => {
  hl.init(e, t), ge.init(e, t);
});
function Sh(e) {
  return /* @__PURE__ */ pr(pn, e);
}
const st = /* @__PURE__ */ g("ZodUUID", (e, t) => {
  pl.init(e, t), ge.init(e, t);
});
function Ih(e) {
  return /* @__PURE__ */ jo(st, e);
}
function zh(e) {
  return /* @__PURE__ */ Po(st, e);
}
function xh(e) {
  return /* @__PURE__ */ Ro(st, e);
}
function Oh(e) {
  return /* @__PURE__ */ Fo(st, e);
}
const An = /* @__PURE__ */ g("ZodURL", (e, t) => {
  gl.init(e, t), ge.init(e, t);
});
function Eh(e) {
  return /* @__PURE__ */ Tr(An, e);
}
function Th(e) {
  return /* @__PURE__ */ Tr(An, {
    protocol: /^https?$/,
    hostname: Tu,
    ...b(e)
  });
}
const Vr = /* @__PURE__ */ g("ZodEmoji", (e, t) => {
  vl.init(e, t), ge.init(e, t);
});
function Nh(e) {
  return /* @__PURE__ */ Lo(Vr, e);
}
const qr = /* @__PURE__ */ g("ZodNanoID", (e, t) => {
  _l.init(e, t), ge.init(e, t);
});
function Ch(e) {
  return /* @__PURE__ */ Mo(qr, e);
}
const Wr = /* @__PURE__ */ g("ZodCUID", (e, t) => {
  yl.init(e, t), ge.init(e, t);
});
function Uh(e) {
  return /* @__PURE__ */ Bo(Wr, e);
}
const Kr = /* @__PURE__ */ g("ZodCUID2", (e, t) => {
  $l.init(e, t), ge.init(e, t);
});
function Ah(e) {
  return /* @__PURE__ */ Jo(Kr, e);
}
const Gr = /* @__PURE__ */ g("ZodULID", (e, t) => {
  bl.init(e, t), ge.init(e, t);
});
function Zh(e) {
  return /* @__PURE__ */ Vo(Gr, e);
}
const Hr = /* @__PURE__ */ g("ZodXID", (e, t) => {
  kl.init(e, t), ge.init(e, t);
});
function Dh(e) {
  return /* @__PURE__ */ qo(Hr, e);
}
const Xr = /* @__PURE__ */ g("ZodKSUID", (e, t) => {
  wl.init(e, t), ge.init(e, t);
});
function jh(e) {
  return /* @__PURE__ */ Wo(Xr, e);
}
const Yr = /* @__PURE__ */ g("ZodIPv4", (e, t) => {
  Ol.init(e, t), ge.init(e, t);
});
function Ph(e) {
  return /* @__PURE__ */ Ko(Yr, e);
}
const ha = /* @__PURE__ */ g("ZodMAC", (e, t) => {
  Tl.init(e, t), ge.init(e, t);
});
function Rh(e) {
  return /* @__PURE__ */ Zd(ha, e);
}
const Qr = /* @__PURE__ */ g("ZodIPv6", (e, t) => {
  El.init(e, t), ge.init(e, t);
});
function Fh(e) {
  return /* @__PURE__ */ Go(Qr, e);
}
const ei = /* @__PURE__ */ g("ZodCIDRv4", (e, t) => {
  Nl.init(e, t), ge.init(e, t);
});
function Lh(e) {
  return /* @__PURE__ */ Ho(ei, e);
}
const ti = /* @__PURE__ */ g("ZodCIDRv6", (e, t) => {
  Cl.init(e, t), ge.init(e, t);
});
function Mh(e) {
  return /* @__PURE__ */ Xo(ti, e);
}
const ni = /* @__PURE__ */ g("ZodBase64", (e, t) => {
  Ul.init(e, t), ge.init(e, t);
});
function Bh(e) {
  return /* @__PURE__ */ Yo(ni, e);
}
const ri = /* @__PURE__ */ g("ZodBase64URL", (e, t) => {
  Zl.init(e, t), ge.init(e, t);
});
function Jh(e) {
  return /* @__PURE__ */ Qo(ri, e);
}
const ii = /* @__PURE__ */ g("ZodE164", (e, t) => {
  Dl.init(e, t), ge.init(e, t);
});
function Vh(e) {
  return /* @__PURE__ */ ea(ii, e);
}
const oi = /* @__PURE__ */ g("ZodJWT", (e, t) => {
  Pl.init(e, t), ge.init(e, t);
});
function qh(e) {
  return /* @__PURE__ */ ta(oi, e);
}
const Qt = /* @__PURE__ */ g("ZodCustomStringFormat", (e, t) => {
  Rl.init(e, t), ge.init(e, t);
});
function Wh(e, t, r = {}) {
  return /* @__PURE__ */ Cn(Qt, e, t, r);
}
function Kh(e) {
  return /* @__PURE__ */ Cn(Qt, "hostname", Eu, e);
}
function Gh(e) {
  return /* @__PURE__ */ Cn(Qt, "hex", Vu, e);
}
function Hh(e, t) {
  const r = t?.enc ?? "hex", i = `${e}_${r}`, n = Io[i];
  if (!n)
    throw new Error(`Unrecognized hash format: ${i}`);
  return /* @__PURE__ */ Cn(Qt, i, n, t);
}
const Zn = /* @__PURE__ */ g("ZodNumber", (e, t) => {
  Eo.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (i, n, o) => kf(e, i, n), e.gt = (i, n) => e.check(/* @__PURE__ */ bt(i, n)), e.gte = (i, n) => e.check(/* @__PURE__ */ Le(i, n)), e.min = (i, n) => e.check(/* @__PURE__ */ Le(i, n)), e.lt = (i, n) => e.check(/* @__PURE__ */ $t(i, n)), e.lte = (i, n) => e.check(/* @__PURE__ */ Xe(i, n)), e.max = (i, n) => e.check(/* @__PURE__ */ Xe(i, n)), e.int = (i) => e.check(gr(i)), e.safe = (i) => e.check(gr(i)), e.positive = (i) => e.check(/* @__PURE__ */ bt(0, i)), e.nonnegative = (i) => e.check(/* @__PURE__ */ Le(0, i)), e.negative = (i) => e.check(/* @__PURE__ */ $t(0, i)), e.nonpositive = (i) => e.check(/* @__PURE__ */ Xe(0, i)), e.multipleOf = (i, n) => e.check(/* @__PURE__ */ qt(i, n)), e.step = (i, n) => e.check(/* @__PURE__ */ qt(i, n)), e.finite = () => e;
  const r = e._zod.bag;
  e.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5), e.isFinite = !0, e.format = r.format ?? null;
});
function pa(e) {
  return /* @__PURE__ */ Ld(Zn, e);
}
const jt = /* @__PURE__ */ g("ZodNumberFormat", (e, t) => {
  Fl.init(e, t), Zn.init(e, t);
});
function gr(e) {
  return /* @__PURE__ */ Bd(jt, e);
}
function Xh(e) {
  return /* @__PURE__ */ Jd(jt, e);
}
function Yh(e) {
  return /* @__PURE__ */ Vd(jt, e);
}
function Qh(e) {
  return /* @__PURE__ */ qd(jt, e);
}
function ep(e) {
  return /* @__PURE__ */ Wd(jt, e);
}
const Dn = /* @__PURE__ */ g("ZodBoolean", (e, t) => {
  To.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => wf(e, r, i);
});
function ma(e) {
  return /* @__PURE__ */ Kd(Dn, e);
}
const jn = /* @__PURE__ */ g("ZodBigInt", (e, t) => {
  No.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (i, n, o) => Sf(e, i), e.gte = (i, n) => e.check(/* @__PURE__ */ Le(i, n)), e.min = (i, n) => e.check(/* @__PURE__ */ Le(i, n)), e.gt = (i, n) => e.check(/* @__PURE__ */ bt(i, n)), e.gte = (i, n) => e.check(/* @__PURE__ */ Le(i, n)), e.min = (i, n) => e.check(/* @__PURE__ */ Le(i, n)), e.lt = (i, n) => e.check(/* @__PURE__ */ $t(i, n)), e.lte = (i, n) => e.check(/* @__PURE__ */ Xe(i, n)), e.max = (i, n) => e.check(/* @__PURE__ */ Xe(i, n)), e.positive = (i) => e.check(/* @__PURE__ */ bt(BigInt(0), i)), e.negative = (i) => e.check(/* @__PURE__ */ $t(BigInt(0), i)), e.nonpositive = (i) => e.check(/* @__PURE__ */ Xe(BigInt(0), i)), e.nonnegative = (i) => e.check(/* @__PURE__ */ Le(BigInt(0), i)), e.multipleOf = (i, n) => e.check(/* @__PURE__ */ qt(i, n));
  const r = e._zod.bag;
  e.minValue = r.minimum ?? null, e.maxValue = r.maximum ?? null, e.format = r.format ?? null;
});
function tp(e) {
  return /* @__PURE__ */ Hd(jn, e);
}
const ai = /* @__PURE__ */ g("ZodBigIntFormat", (e, t) => {
  Ll.init(e, t), jn.init(e, t);
});
function np(e) {
  return /* @__PURE__ */ Yd(ai, e);
}
function rp(e) {
  return /* @__PURE__ */ Qd(ai, e);
}
const ga = /* @__PURE__ */ g("ZodSymbol", (e, t) => {
  Ml.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => If(e, r);
});
function ip(e) {
  return /* @__PURE__ */ ef(ga, e);
}
const va = /* @__PURE__ */ g("ZodUndefined", (e, t) => {
  Bl.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => xf(e, r);
});
function op(e) {
  return /* @__PURE__ */ tf(va, e);
}
const _a = /* @__PURE__ */ g("ZodNull", (e, t) => {
  Jl.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => zf(e, r, i);
});
function ya(e) {
  return /* @__PURE__ */ nf(_a, e);
}
const $a = /* @__PURE__ */ g("ZodAny", (e, t) => {
  Vl.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => Tf();
});
function ap() {
  return /* @__PURE__ */ rf($a);
}
const ba = /* @__PURE__ */ g("ZodUnknown", (e, t) => {
  ql.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => Nf();
});
function At() {
  return /* @__PURE__ */ of(ba);
}
const ka = /* @__PURE__ */ g("ZodNever", (e, t) => {
  Wl.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => Ef(e, r, i);
});
function si(e) {
  return /* @__PURE__ */ af(ka, e);
}
const wa = /* @__PURE__ */ g("ZodVoid", (e, t) => {
  Kl.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => Of(e, r);
});
function sp(e) {
  return /* @__PURE__ */ sf(wa, e);
}
const ci = /* @__PURE__ */ g("ZodDate", (e, t) => {
  Gl.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (i, n, o) => Cf(e, i), e.min = (i, n) => e.check(/* @__PURE__ */ Le(i, n)), e.max = (i, n) => e.check(/* @__PURE__ */ Xe(i, n));
  const r = e._zod.bag;
  e.minDate = r.minimum ? new Date(r.minimum) : null, e.maxDate = r.maximum ? new Date(r.maximum) : null;
});
function cp(e) {
  return /* @__PURE__ */ cf(ci, e);
}
const Sa = /* @__PURE__ */ g("ZodArray", (e, t) => {
  Hl.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => Jf(e, r, i, n), e.element = t.element, e.min = (r, i) => e.check(/* @__PURE__ */ Ut(r, i)), e.nonempty = (r) => e.check(/* @__PURE__ */ Ut(1, r)), e.max = (r, i) => e.check(/* @__PURE__ */ Tn(r, i)), e.length = (r, i) => e.check(/* @__PURE__ */ Nn(r, i)), e.unwrap = () => e.element;
});
function Pn(e, t) {
  return /* @__PURE__ */ df(Sa, e, t);
}
function up(e) {
  const t = e._zod.def.shape;
  return li(Object.keys(t));
}
const Rn = /* @__PURE__ */ g("ZodObject", (e, t) => {
  ed.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => Vf(e, r, i, n), te(e, "shape", () => t.shape), e.keyof = () => li(Object.keys(e._zod.def.shape)), e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: At() }), e.loose = () => e.clone({ ...e._zod.def, catchall: At() }), e.strict = () => e.clone({ ...e._zod.def, catchall: si() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (r) => Yc(e, r), e.safeExtend = (r) => Qc(e, r), e.merge = (r) => eu(e, r), e.pick = (r) => Hc(e, r), e.omit = (r) => Xc(e, r), e.partial = (...r) => tu(fi, e, r[0]), e.required = (...r) => nu(hi, e, r[0]);
});
function lp(e, t) {
  const r = {
    type: "object",
    shape: e ?? {},
    ...b(t)
  };
  return new Rn(r);
}
function dp(e, t) {
  return new Rn({
    type: "object",
    shape: e,
    catchall: si(),
    ...b(t)
  });
}
function fp(e, t) {
  return new Rn({
    type: "object",
    shape: e,
    catchall: At(),
    ...b(t)
  });
}
const Fn = /* @__PURE__ */ g("ZodUnion", (e, t) => {
  Er.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => sa(e, r, i, n), e.options = t.options;
});
function ui(e, t) {
  return new Fn({
    type: "union",
    options: e,
    ...b(t)
  });
}
const Ia = /* @__PURE__ */ g("ZodXor", (e, t) => {
  Fn.init(e, t), td.init(e, t), e._zod.processJSONSchema = (r, i, n) => sa(e, r, i, n), e.options = t.options;
});
function hp(e, t) {
  return new Ia({
    type: "union",
    options: e,
    inclusive: !1,
    ...b(t)
  });
}
const za = /* @__PURE__ */ g("ZodDiscriminatedUnion", (e, t) => {
  Fn.init(e, t), nd.init(e, t);
});
function pp(e, t, r) {
  return new za({
    type: "union",
    options: t,
    discriminator: e,
    ...b(r)
  });
}
const xa = /* @__PURE__ */ g("ZodIntersection", (e, t) => {
  rd.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => qf(e, r, i, n);
});
function Oa(e, t) {
  return new xa({
    type: "intersection",
    left: e,
    right: t
  });
}
const Ea = /* @__PURE__ */ g("ZodTuple", (e, t) => {
  Co.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => Wf(e, r, i, n), e.rest = (r) => e.clone({
    ...e._zod.def,
    rest: r
  });
});
function Ta(e, t, r) {
  const i = t instanceof G, n = i ? r : t, o = i ? t : null;
  return new Ea({
    type: "tuple",
    items: e,
    rest: o,
    ...b(n)
  });
}
const Ln = /* @__PURE__ */ g("ZodRecord", (e, t) => {
  id.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => Kf(e, r, i, n), e.keyType = t.keyType, e.valueType = t.valueType;
});
function Na(e, t, r) {
  return new Ln({
    type: "record",
    keyType: e,
    valueType: t,
    ...b(r)
  });
}
function mp(e, t, r) {
  const i = Qe(e);
  return i._zod.values = void 0, new Ln({
    type: "record",
    keyType: i,
    valueType: t,
    ...b(r)
  });
}
function gp(e, t, r) {
  return new Ln({
    type: "record",
    keyType: e,
    valueType: t,
    mode: "loose",
    ...b(r)
  });
}
const Ca = /* @__PURE__ */ g("ZodMap", (e, t) => {
  od.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => Mf(e, r), e.keyType = t.keyType, e.valueType = t.valueType, e.min = (...r) => e.check(/* @__PURE__ */ kt(...r)), e.nonempty = (r) => e.check(/* @__PURE__ */ kt(1, r)), e.max = (...r) => e.check(/* @__PURE__ */ Yt(...r)), e.size = (...r) => e.check(/* @__PURE__ */ En(...r));
});
function vp(e, t, r) {
  return new Ca({
    type: "map",
    keyType: e,
    valueType: t,
    ...b(r)
  });
}
const Ua = /* @__PURE__ */ g("ZodSet", (e, t) => {
  ad.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => Bf(e, r), e.min = (...r) => e.check(/* @__PURE__ */ kt(...r)), e.nonempty = (r) => e.check(/* @__PURE__ */ kt(1, r)), e.max = (...r) => e.check(/* @__PURE__ */ Yt(...r)), e.size = (...r) => e.check(/* @__PURE__ */ En(...r));
});
function _p(e, t) {
  return new Ua({
    type: "set",
    valueType: e,
    ...b(t)
  });
}
const Ht = /* @__PURE__ */ g("ZodEnum", (e, t) => {
  sd.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (i, n, o) => Uf(e, i, n), e.enum = t.entries, e.options = Object.values(t.entries);
  const r = new Set(Object.keys(t.entries));
  e.extract = (i, n) => {
    const o = {};
    for (const a of i)
      if (r.has(a))
        o[a] = t.entries[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new Ht({
      ...t,
      checks: [],
      ...b(n),
      entries: o
    });
  }, e.exclude = (i, n) => {
    const o = { ...t.entries };
    for (const a of i)
      if (r.has(a))
        delete o[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new Ht({
      ...t,
      checks: [],
      ...b(n),
      entries: o
    });
  };
});
function li(e, t) {
  const r = Array.isArray(e) ? Object.fromEntries(e.map((i) => [i, i])) : e;
  return new Ht({
    type: "enum",
    entries: r,
    ...b(t)
  });
}
function yp(e, t) {
  return new Ht({
    type: "enum",
    entries: e,
    ...b(t)
  });
}
const Aa = /* @__PURE__ */ g("ZodLiteral", (e, t) => {
  cd.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => Af(e, r, i), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function $p(e, t) {
  return new Aa({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...b(t)
  });
}
const Za = /* @__PURE__ */ g("ZodFile", (e, t) => {
  ud.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => jf(e, r, i), e.min = (r, i) => e.check(/* @__PURE__ */ kt(r, i)), e.max = (r, i) => e.check(/* @__PURE__ */ Yt(r, i)), e.mime = (r, i) => e.check(/* @__PURE__ */ jr(Array.isArray(r) ? r : [r], i));
});
function bp(e) {
  return /* @__PURE__ */ ff(Za, e);
}
const Da = /* @__PURE__ */ g("ZodTransform", (e, t) => {
  ld.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => Lf(e, r), e._zod.parse = (r, i) => {
    if (i.direction === "backward")
      throw new Sr(e.constructor.name);
    r.addIssue = (o) => {
      if (typeof o == "string")
        r.issues.push(Jt(o, r.value, t));
      else {
        const a = o;
        a.fatal && (a.continue = !1), a.code ?? (a.code = "custom"), a.input ?? (a.input = r.value), a.inst ?? (a.inst = e), r.issues.push(Jt(a));
      }
    };
    const n = t.transform(r.value, r);
    return n instanceof Promise ? n.then((o) => (r.value = o, r)) : (r.value = n, r);
  };
});
function di(e) {
  return new Da({
    type: "transform",
    transform: e
  });
}
const fi = /* @__PURE__ */ g("ZodOptional", (e, t) => {
  Uo.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => ca(e, r, i, n), e.unwrap = () => e._zod.def.innerType;
});
function mn(e) {
  return new fi({
    type: "optional",
    innerType: e
  });
}
const ja = /* @__PURE__ */ g("ZodExactOptional", (e, t) => {
  dd.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => ca(e, r, i, n), e.unwrap = () => e._zod.def.innerType;
});
function Pa(e) {
  return new ja({
    type: "optional",
    innerType: e
  });
}
const Ra = /* @__PURE__ */ g("ZodNullable", (e, t) => {
  fd.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => Gf(e, r, i, n), e.unwrap = () => e._zod.def.innerType;
});
function gn(e) {
  return new Ra({
    type: "nullable",
    innerType: e
  });
}
function kp(e) {
  return mn(gn(e));
}
const Fa = /* @__PURE__ */ g("ZodDefault", (e, t) => {
  hd.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => Xf(e, r, i, n), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function La(e, t) {
  return new Fa({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : zr(t);
    }
  });
}
const Ma = /* @__PURE__ */ g("ZodPrefault", (e, t) => {
  pd.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => Yf(e, r, i, n), e.unwrap = () => e._zod.def.innerType;
});
function Ba(e, t) {
  return new Ma({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : zr(t);
    }
  });
}
const hi = /* @__PURE__ */ g("ZodNonOptional", (e, t) => {
  md.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => Hf(e, r, i, n), e.unwrap = () => e._zod.def.innerType;
});
function Ja(e, t) {
  return new hi({
    type: "nonoptional",
    innerType: e,
    ...b(t)
  });
}
const Va = /* @__PURE__ */ g("ZodSuccess", (e, t) => {
  gd.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => Pf(e, r, i), e.unwrap = () => e._zod.def.innerType;
});
function wp(e) {
  return new Va({
    type: "success",
    innerType: e
  });
}
const qa = /* @__PURE__ */ g("ZodCatch", (e, t) => {
  vd.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => Qf(e, r, i, n), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Wa(e, t) {
  return new qa({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Ka = /* @__PURE__ */ g("ZodNaN", (e, t) => {
  _d.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => Zf(e, r);
});
function Sp(e) {
  return /* @__PURE__ */ lf(Ka, e);
}
const pi = /* @__PURE__ */ g("ZodPipe", (e, t) => {
  yd.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => eh(e, r, i, n), e.in = t.in, e.out = t.out;
});
function vn(e, t) {
  return new pi({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const mi = /* @__PURE__ */ g("ZodCodec", (e, t) => {
  pi.init(e, t), Ao.init(e, t);
});
function Ip(e, t, r) {
  return new mi({
    type: "pipe",
    in: e,
    out: t,
    transform: r.decode,
    reverseTransform: r.encode
  });
}
const Ga = /* @__PURE__ */ g("ZodReadonly", (e, t) => {
  $d.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => th(e, r, i, n), e.unwrap = () => e._zod.def.innerType;
});
function Ha(e) {
  return new Ga({
    type: "readonly",
    innerType: e
  });
}
const Xa = /* @__PURE__ */ g("ZodTemplateLiteral", (e, t) => {
  bd.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => Df(e, r, i);
});
function zp(e, t) {
  return new Xa({
    type: "template_literal",
    parts: e,
    ...b(t)
  });
}
const Ya = /* @__PURE__ */ g("ZodLazy", (e, t) => {
  Sd.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => rh(e, r, i, n), e.unwrap = () => e._zod.def.getter();
});
function Qa(e) {
  return new Ya({
    type: "lazy",
    getter: e
  });
}
const es = /* @__PURE__ */ g("ZodPromise", (e, t) => {
  wd.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => nh(e, r, i, n), e.unwrap = () => e._zod.def.innerType;
});
function xp(e) {
  return new es({
    type: "promise",
    innerType: e
  });
}
const ts = /* @__PURE__ */ g("ZodFunction", (e, t) => {
  kd.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => Ff(e, r);
});
function vr(e) {
  return new ts({
    type: "function",
    input: Array.isArray(e?.input) ? Ta(e?.input) : e?.input ?? Pn(At()),
    output: e?.output ?? At()
  });
}
const Mn = /* @__PURE__ */ g("ZodCustom", (e, t) => {
  Id.init(e, t), Y.init(e, t), e._zod.processJSONSchema = (r, i, n) => Rf(e, r);
});
function Op(e) {
  const t = new ye({
    check: "custom"
    // ...util.normalizeParams(params),
  });
  return t._zod.check = e, t;
}
function Ep(e, t) {
  return /* @__PURE__ */ hf(Mn, e ?? (() => !0), t);
}
function ns(e, t = {}) {
  return /* @__PURE__ */ pf(Mn, e, t);
}
function rs(e) {
  return /* @__PURE__ */ mf(e);
}
const Tp = vf, Np = _f;
function Cp(e, t = {}) {
  const r = new Mn({
    type: "custom",
    check: "custom",
    fn: (i) => i instanceof e,
    abort: !0,
    ...b(t)
  });
  return r._zod.bag.Class = e, r._zod.check = (i) => {
    i.value instanceof e || i.issues.push({
      code: "invalid_type",
      expected: e.name,
      input: i.value,
      inst: r,
      path: [...r._zod.def.path ?? []]
    });
  }, r;
}
const Up = (...e) => /* @__PURE__ */ yf({
  Codec: mi,
  Boolean: Dn,
  String: Un
}, ...e);
function Ap(e) {
  const t = Qa(() => ui([mr(e), pa(), ma(), ya(), Pn(t), Na(mr(), t)]));
  return t;
}
function Zp(e, t) {
  return vn(di(e), t);
}
const ry = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, ZodAny: $a, ZodArray: Sa, ZodBase64: ni, ZodBase64URL: ri, ZodBigInt: jn, ZodBigIntFormat: ai, ZodBoolean: Dn, ZodCIDRv4: ei, ZodCIDRv6: ti, ZodCUID: Wr, ZodCUID2: Kr, ZodCatch: qa, ZodCodec: mi, ZodCustom: Mn, ZodCustomStringFormat: Qt, ZodDate: ci, ZodDefault: Fa, ZodDiscriminatedUnion: za, ZodE164: ii, ZodEmail: Jr, ZodEmoji: Vr, ZodEnum: Ht, ZodExactOptional: ja, ZodFile: Za, ZodFunction: ts, ZodGUID: pn, ZodIPv4: Yr, ZodIPv6: Qr, ZodIntersection: xa, ZodJWT: oi, ZodKSUID: Xr, ZodLazy: Ya, ZodLiteral: Aa, ZodMAC: ha, ZodMap: Ca, ZodNaN: Ka, ZodNanoID: qr, ZodNever: ka, ZodNonOptional: hi, ZodNull: _a, ZodNullable: Ra, ZodNumber: Zn, ZodNumberFormat: jt, ZodObject: Rn, ZodOptional: fi, ZodPipe: pi, ZodPrefault: Ma, ZodPromise: es, ZodReadonly: Ga, ZodRecord: Ln, ZodSet: Ua, ZodString: Un, ZodStringFormat: ge, ZodSuccess: Va, ZodSymbol: ga, ZodTemplateLiteral: Xa, ZodTransform: Da, ZodTuple: Ea, ZodType: Y, ZodULID: Gr, ZodURL: An, ZodUUID: st, ZodUndefined: va, ZodUnion: Fn, ZodUnknown: ba, ZodVoid: wa, ZodXID: Hr, ZodXor: Ia, _ZodString: Br, _default: La, _function: vr, any: ap, array: Pn, base64: Bh, base64url: Jh, bigint: tp, boolean: ma, catch: Wa, check: Op, cidrv4: Lh, cidrv6: Mh, codec: Ip, cuid: Uh, cuid2: Ah, custom: Ep, date: cp, describe: Tp, discriminatedUnion: pp, e164: Vh, email: wh, emoji: Nh, enum: li, exactOptional: Pa, file: bp, float32: Xh, float64: Yh, function: vr, guid: Sh, hash: Hh, hex: Gh, hostname: Kh, httpUrl: Th, instanceof: Cp, int: gr, int32: Qh, int64: np, intersection: Oa, ipv4: Ph, ipv6: Fh, json: Ap, jwt: qh, keyof: up, ksuid: jh, lazy: Qa, literal: $p, looseObject: fp, looseRecord: gp, mac: Rh, map: vp, meta: Np, nan: Sp, nanoid: Ch, nativeEnum: yp, never: si, nonoptional: Ja, null: ya, nullable: gn, nullish: kp, number: pa, object: lp, optional: mn, partialRecord: mp, pipe: vn, prefault: Ba, preprocess: Zp, promise: xp, readonly: Ha, record: Na, refine: ns, set: _p, strictObject: dp, string: mr, stringFormat: Wh, stringbool: Up, success: wp, superRefine: rs, symbol: ip, templateLiteral: zp, transform: di, tuple: Ta, uint32: ep, uint64: rp, ulid: Zh, undefined: op, union: ui, unknown: At, url: Eh, uuid: Ih, uuidv4: zh, uuidv6: xh, uuidv7: Oh, void: sp, xid: Dh, xor: hp }, Symbol.toStringTag, { value: "Module" })), iy = {
  invalid_type: "invalid_type",
  too_big: "too_big",
  too_small: "too_small",
  invalid_format: "invalid_format",
  not_multiple_of: "not_multiple_of",
  unrecognized_keys: "unrecognized_keys",
  invalid_union: "invalid_union",
  invalid_key: "invalid_key",
  invalid_element: "invalid_element",
  invalid_value: "invalid_value",
  custom: "custom"
};
function oy(e) {
  Ce({
    customError: e
  });
}
function ay() {
  return Ce().customError;
}
var Gi;
Gi || (Gi = {});
const C = {
  ...ry,
  ...ty,
  iso: uh
}, sy = /* @__PURE__ */ new Set([
  // Schema identification
  "$schema",
  "$ref",
  "$defs",
  "definitions",
  // Core schema keywords
  "$id",
  "id",
  "$comment",
  "$anchor",
  "$vocabulary",
  "$dynamicRef",
  "$dynamicAnchor",
  // Type
  "type",
  "enum",
  "const",
  // Composition
  "anyOf",
  "oneOf",
  "allOf",
  "not",
  // Object
  "properties",
  "required",
  "additionalProperties",
  "patternProperties",
  "propertyNames",
  "minProperties",
  "maxProperties",
  // Array
  "items",
  "prefixItems",
  "additionalItems",
  "minItems",
  "maxItems",
  "uniqueItems",
  "contains",
  "minContains",
  "maxContains",
  // String
  "minLength",
  "maxLength",
  "pattern",
  "format",
  // Number
  "minimum",
  "maximum",
  "exclusiveMinimum",
  "exclusiveMaximum",
  "multipleOf",
  // Already handled metadata
  "description",
  "default",
  // Content
  "contentEncoding",
  "contentMediaType",
  "contentSchema",
  // Unsupported (error-throwing)
  "unevaluatedItems",
  "unevaluatedProperties",
  "if",
  "then",
  "else",
  "dependentSchemas",
  "dependentRequired",
  // OpenAPI
  "nullable",
  "readOnly"
]);
function cy(e, t) {
  const r = e.$schema;
  return r === "https://json-schema.org/draft/2020-12/schema" ? "draft-2020-12" : r === "http://json-schema.org/draft-07/schema#" ? "draft-7" : r === "http://json-schema.org/draft-04/schema#" ? "draft-4" : t ?? "draft-2020-12";
}
function uy(e, t) {
  if (!e.startsWith("#"))
    throw new Error("External $ref is not supported, only local refs (#/...) are allowed");
  const r = e.slice(1).split("/").filter(Boolean);
  if (r.length === 0)
    return t.rootSchema;
  const i = t.version === "draft-2020-12" ? "$defs" : "definitions";
  if (r[0] === i) {
    const n = r[1];
    if (!n || !t.defs[n])
      throw new Error(`Reference not found: ${e}`);
    return t.defs[n];
  }
  throw new Error(`Reference not found: ${e}`);
}
function Dp(e, t) {
  if (e.not !== void 0) {
    if (typeof e.not == "object" && Object.keys(e.not).length === 0)
      return C.never();
    throw new Error("not is not supported in Zod (except { not: {} } for never)");
  }
  if (e.unevaluatedItems !== void 0)
    throw new Error("unevaluatedItems is not supported");
  if (e.unevaluatedProperties !== void 0)
    throw new Error("unevaluatedProperties is not supported");
  if (e.if !== void 0 || e.then !== void 0 || e.else !== void 0)
    throw new Error("Conditional schemas (if/then/else) are not supported");
  if (e.dependentSchemas !== void 0 || e.dependentRequired !== void 0)
    throw new Error("dependentSchemas and dependentRequired are not supported");
  if (e.$ref) {
    const n = e.$ref;
    if (t.refs.has(n))
      return t.refs.get(n);
    if (t.processing.has(n))
      return C.lazy(() => {
        if (!t.refs.has(n))
          throw new Error(`Circular reference not resolved: ${n}`);
        return t.refs.get(n);
      });
    t.processing.add(n);
    const o = uy(n, t), a = Ne(o, t);
    return t.refs.set(n, a), t.processing.delete(n), a;
  }
  if (e.enum !== void 0) {
    const n = e.enum;
    if (t.version === "openapi-3.0" && e.nullable === !0 && n.length === 1 && n[0] === null)
      return C.null();
    if (n.length === 0)
      return C.never();
    if (n.length === 1)
      return C.literal(n[0]);
    if (n.every((a) => typeof a == "string"))
      return C.enum(n);
    const o = n.map((a) => C.literal(a));
    return o.length < 2 ? o[0] : C.union([o[0], o[1], ...o.slice(2)]);
  }
  if (e.const !== void 0)
    return C.literal(e.const);
  const r = e.type;
  if (Array.isArray(r)) {
    const n = r.map((o) => {
      const a = { ...e, type: o };
      return Dp(a, t);
    });
    return n.length === 0 ? C.never() : n.length === 1 ? n[0] : C.union(n);
  }
  if (!r)
    return C.any();
  let i;
  switch (r) {
    case "string": {
      let n = C.string();
      if (e.format) {
        const o = e.format;
        o === "email" ? n = n.check(C.email()) : o === "uri" || o === "uri-reference" ? n = n.check(C.url()) : o === "uuid" || o === "guid" ? n = n.check(C.uuid()) : o === "date-time" ? n = n.check(C.iso.datetime()) : o === "date" ? n = n.check(C.iso.date()) : o === "time" ? n = n.check(C.iso.time()) : o === "duration" ? n = n.check(C.iso.duration()) : o === "ipv4" ? n = n.check(C.ipv4()) : o === "ipv6" ? n = n.check(C.ipv6()) : o === "mac" ? n = n.check(C.mac()) : o === "cidr" ? n = n.check(C.cidrv4()) : o === "cidr-v6" ? n = n.check(C.cidrv6()) : o === "base64" ? n = n.check(C.base64()) : o === "base64url" ? n = n.check(C.base64url()) : o === "e164" ? n = n.check(C.e164()) : o === "jwt" ? n = n.check(C.jwt()) : o === "emoji" ? n = n.check(C.emoji()) : o === "nanoid" ? n = n.check(C.nanoid()) : o === "cuid" ? n = n.check(C.cuid()) : o === "cuid2" ? n = n.check(C.cuid2()) : o === "ulid" ? n = n.check(C.ulid()) : o === "xid" ? n = n.check(C.xid()) : o === "ksuid" && (n = n.check(C.ksuid()));
      }
      typeof e.minLength == "number" && (n = n.min(e.minLength)), typeof e.maxLength == "number" && (n = n.max(e.maxLength)), e.pattern && (n = n.regex(new RegExp(e.pattern))), i = n;
      break;
    }
    case "number":
    case "integer": {
      let n = r === "integer" ? C.number().int() : C.number();
      typeof e.minimum == "number" && (n = n.min(e.minimum)), typeof e.maximum == "number" && (n = n.max(e.maximum)), typeof e.exclusiveMinimum == "number" ? n = n.gt(e.exclusiveMinimum) : e.exclusiveMinimum === !0 && typeof e.minimum == "number" && (n = n.gt(e.minimum)), typeof e.exclusiveMaximum == "number" ? n = n.lt(e.exclusiveMaximum) : e.exclusiveMaximum === !0 && typeof e.maximum == "number" && (n = n.lt(e.maximum)), typeof e.multipleOf == "number" && (n = n.multipleOf(e.multipleOf)), i = n;
      break;
    }
    case "boolean": {
      i = C.boolean();
      break;
    }
    case "null": {
      i = C.null();
      break;
    }
    case "object": {
      const n = {}, o = e.properties || {}, a = new Set(e.required || []);
      for (const [c, u] of Object.entries(o)) {
        const l = Ne(u, t);
        n[c] = a.has(c) ? l : l.optional();
      }
      if (e.propertyNames) {
        const c = Ne(e.propertyNames, t), u = e.additionalProperties && typeof e.additionalProperties == "object" ? Ne(e.additionalProperties, t) : C.any();
        if (Object.keys(n).length === 0) {
          i = C.record(c, u);
          break;
        }
        const l = C.object(n).passthrough(), d = C.looseRecord(c, u);
        i = C.intersection(l, d);
        break;
      }
      if (e.patternProperties) {
        const c = e.patternProperties, u = Object.keys(c), l = [];
        for (const f of u) {
          const h = Ne(c[f], t), v = C.string().regex(new RegExp(f));
          l.push(C.looseRecord(v, h));
        }
        const d = [];
        if (Object.keys(n).length > 0 && d.push(C.object(n).passthrough()), d.push(...l), d.length === 0)
          i = C.object({}).passthrough();
        else if (d.length === 1)
          i = d[0];
        else {
          let f = C.intersection(d[0], d[1]);
          for (let h = 2; h < d.length; h++)
            f = C.intersection(f, d[h]);
          i = f;
        }
        break;
      }
      const s = C.object(n);
      e.additionalProperties === !1 ? i = s.strict() : typeof e.additionalProperties == "object" ? i = s.catchall(Ne(e.additionalProperties, t)) : i = s.passthrough();
      break;
    }
    case "array": {
      const n = e.prefixItems, o = e.items;
      if (n && Array.isArray(n)) {
        const a = n.map((c) => Ne(c, t)), s = o && typeof o == "object" && !Array.isArray(o) ? Ne(o, t) : void 0;
        s ? i = C.tuple(a).rest(s) : i = C.tuple(a), typeof e.minItems == "number" && (i = i.check(C.minLength(e.minItems))), typeof e.maxItems == "number" && (i = i.check(C.maxLength(e.maxItems)));
      } else if (Array.isArray(o)) {
        const a = o.map((c) => Ne(c, t)), s = e.additionalItems && typeof e.additionalItems == "object" ? Ne(e.additionalItems, t) : void 0;
        s ? i = C.tuple(a).rest(s) : i = C.tuple(a), typeof e.minItems == "number" && (i = i.check(C.minLength(e.minItems))), typeof e.maxItems == "number" && (i = i.check(C.maxLength(e.maxItems)));
      } else if (o !== void 0) {
        const a = Ne(o, t);
        let s = C.array(a);
        typeof e.minItems == "number" && (s = s.min(e.minItems)), typeof e.maxItems == "number" && (s = s.max(e.maxItems)), i = s;
      } else
        i = C.array(C.any());
      break;
    }
    default:
      throw new Error(`Unsupported type: ${r}`);
  }
  return e.description && (i = i.describe(e.description)), e.default !== void 0 && (i = i.default(e.default)), i;
}
function Ne(e, t) {
  if (typeof e == "boolean")
    return e ? C.any() : C.never();
  let r = Dp(e, t);
  const i = e.type || e.enum !== void 0 || e.const !== void 0;
  if (e.anyOf && Array.isArray(e.anyOf)) {
    const s = e.anyOf.map((u) => Ne(u, t)), c = C.union(s);
    r = i ? C.intersection(r, c) : c;
  }
  if (e.oneOf && Array.isArray(e.oneOf)) {
    const s = e.oneOf.map((u) => Ne(u, t)), c = C.xor(s);
    r = i ? C.intersection(r, c) : c;
  }
  if (e.allOf && Array.isArray(e.allOf))
    if (e.allOf.length === 0)
      r = i ? r : C.any();
    else {
      let s = i ? r : Ne(e.allOf[0], t);
      const c = i ? 0 : 1;
      for (let u = c; u < e.allOf.length; u++)
        s = C.intersection(s, Ne(e.allOf[u], t));
      r = s;
    }
  e.nullable === !0 && t.version === "openapi-3.0" && (r = C.nullable(r)), e.readOnly === !0 && (r = C.readonly(r));
  const n = {}, o = ["$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor"];
  for (const s of o)
    s in e && (n[s] = e[s]);
  const a = ["contentEncoding", "contentMediaType", "contentSchema"];
  for (const s of a)
    s in e && (n[s] = e[s]);
  for (const s of Object.keys(e))
    sy.has(s) || (n[s] = e[s]);
  return Object.keys(n).length > 0 && t.registry.add(r, n), r;
}
function ly(e, t) {
  if (typeof e == "boolean")
    return e ? C.any() : C.never();
  const r = cy(e, t?.defaultTarget), i = e.$defs || e.definitions || {}, n = {
    version: r,
    defs: i,
    refs: /* @__PURE__ */ new Map(),
    processing: /* @__PURE__ */ new Set(),
    rootSchema: e,
    registry: t?.registry ?? He
  };
  return Ne(e, n);
}
function dy(e) {
  return /* @__PURE__ */ Ad(Un, e);
}
function fy(e) {
  return /* @__PURE__ */ Md(Zn, e);
}
function hy(e) {
  return /* @__PURE__ */ Gd(Dn, e);
}
function py(e) {
  return /* @__PURE__ */ Xd(jn, e);
}
function my(e) {
  return /* @__PURE__ */ uf(ci, e);
}
const gy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, bigint: py, boolean: hy, date: my, number: fy, string: dy }, Symbol.toStringTag, { value: "Module" }));
Ce(zd());
const kS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, $brand: Mc, $input: Nd, $output: Td, NEVER: Lc, TimePrecision: Dd, ZodAny: $a, ZodArray: Sa, ZodBase64: ni, ZodBase64URL: ri, ZodBigInt: jn, ZodBigIntFormat: ai, ZodBoolean: Dn, ZodCIDRv4: ei, ZodCIDRv6: ti, ZodCUID: Wr, ZodCUID2: Kr, ZodCatch: qa, ZodCodec: mi, ZodCustom: Mn, ZodCustomStringFormat: Qt, ZodDate: ci, ZodDefault: Fa, ZodDiscriminatedUnion: za, ZodE164: ii, ZodEmail: Jr, ZodEmoji: Vr, ZodEnum: Ht, ZodError: ny, ZodExactOptional: ja, ZodFile: Za, get ZodFirstPartyTypeKind() {
  return Gi;
}, ZodFunction: ts, ZodGUID: pn, ZodIPv4: Yr, ZodIPv6: Qr, ZodISODate: la, ZodISODateTime: ua, ZodISODuration: fa, ZodISOTime: da, ZodIntersection: xa, ZodIssueCode: iy, ZodJWT: oi, ZodKSUID: Xr, ZodLazy: Ya, ZodLiteral: Aa, ZodMAC: ha, ZodMap: Ca, ZodNaN: Ka, ZodNanoID: qr, ZodNever: ka, ZodNonOptional: hi, ZodNull: _a, ZodNullable: Ra, ZodNumber: Zn, ZodNumberFormat: jt, ZodObject: Rn, ZodOptional: fi, ZodPipe: pi, ZodPrefault: Ma, ZodPromise: es, ZodReadonly: Ga, ZodRealError: Ke, ZodRecord: Ln, ZodSet: Ua, ZodString: Un, ZodStringFormat: ge, ZodSuccess: Va, ZodSymbol: ga, ZodTemplateLiteral: Xa, ZodTransform: Da, ZodTuple: Ea, ZodType: Y, ZodULID: Gr, ZodURL: An, ZodUUID: st, ZodUndefined: va, ZodUnion: Fn, ZodUnknown: ba, ZodVoid: wa, ZodXID: Hr, ZodXor: Ia, _ZodString: Br, _default: La, _function: vr, any: ap, array: Pn, base64: Bh, base64url: Jh, bigint: tp, boolean: ma, catch: Wa, check: Op, cidrv4: Lh, cidrv6: Mh, clone: Qe, codec: Ip, coerce: gy, config: Ce, core: ey, cuid: Uh, cuid2: Ah, custom: Ep, date: cp, decode: gh, decodeAsync: _h, describe: Tp, discriminatedUnion: pp, e164: Vh, email: wh, emoji: Nh, encode: mh, encodeAsync: vh, endsWith: Dr, enum: li, exactOptional: Pa, file: bp, flattenError: ho, float32: Xh, float64: Yh, formatError: po, fromJSONSchema: ly, function: vr, getErrorMap: ay, globalRegistry: He, gt: bt, gte: Le, guid: Sh, hash: Hh, hex: Gh, hostname: Kh, httpUrl: Th, includes: Ar, instanceof: Cp, int: gr, int32: Qh, int64: np, intersection: Oa, ipv4: Ph, ipv6: Fh, iso: uh, json: Ap, jwt: qh, keyof: up, ksuid: jh, lazy: Qa, length: Nn, literal: $p, locales: Ed, looseObject: fp, looseRecord: gp, lowercase: Cr, lt: $t, lte: Xe, mac: Rh, map: vp, maxLength: Tn, maxSize: Yt, meta: Np, mime: jr, minLength: Ut, minSize: kt, multipleOf: qt, nan: Sp, nanoid: Ch, nativeEnum: yp, negative: ra, never: si, nonnegative: oa, nonoptional: Ja, nonpositive: ia, normalize: Pr, null: ya, nullable: gn, nullish: kp, number: pa, object: lp, optional: mn, overwrite: pt, parse: dh, parseAsync: fh, partialRecord: mp, pipe: vn, positive: na, prefault: Ba, preprocess: Zp, prettifyError: uu, promise: xp, property: aa, readonly: Ha, record: Na, refine: ns, regex: Nr, regexes: Io, registry: Zo, safeDecode: $h, safeDecodeAsync: kh, safeEncode: yh, safeEncodeAsync: bh, safeParse: hh, safeParseAsync: ph, set: _p, setErrorMap: oy, size: En, slugify: Mr, startsWith: Zr, strictObject: dp, string: mr, stringFormat: Wh, stringbool: Up, success: wp, superRefine: rs, symbol: ip, templateLiteral: zp, toJSONSchema: ih, toLowerCase: Fr, toUpperCase: Lr, transform: di, treeifyError: su, trim: Rr, tuple: Ta, uint32: ep, uint64: rp, ulid: Zh, undefined: op, union: ui, unknown: At, uppercase: Ur, url: Eh, util: ou, uuid: Ih, uuidv4: zh, uuidv6: xh, uuidv7: Oh, void: sp, xid: Dh, xor: hp }, Symbol.toStringTag, { value: "Module" }));
function $(e, t, r) {
  function i(s, c) {
    if (s._zod || Object.defineProperty(s, "_zod", {
      value: {
        def: c,
        constr: a,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), s._zod.traits.has(e))
      return;
    s._zod.traits.add(e), t(s, c);
    const u = a.prototype, l = Object.keys(u);
    for (let d = 0; d < l.length; d++) {
      const f = l[d];
      f in s || (s[f] = u[f].bind(s));
    }
  }
  const n = r?.Parent ?? Object;
  class o extends n {
  }
  Object.defineProperty(o, "name", { value: e });
  function a(s) {
    var c;
    const u = r?.Parent ? new o() : this;
    i(u, s), (c = u._zod).deferred ?? (c.deferred = []);
    for (const l of u._zod.deferred)
      l();
    return u;
  }
  return Object.defineProperty(a, "init", { value: i }), Object.defineProperty(a, Symbol.hasInstance, {
    value: (s) => r?.Parent && s instanceof r.Parent ? !0 : s?._zod?.traits?.has(e)
  }), Object.defineProperty(a, "name", { value: e }), a;
}
class Mt extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class jp extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const Pp = {};
function wt(e) {
  return Pp;
}
function Rp(e) {
  const t = Object.values(e).filter((i) => typeof i == "number");
  return Object.entries(e).filter(([i, n]) => t.indexOf(+i) === -1).map(([i, n]) => n);
}
function Hi(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function is(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function os(e) {
  return e == null;
}
function as(e) {
  const t = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}
function vy(e, t) {
  const r = (e.toString().split(".")[1] || "").length, i = t.toString();
  let n = (i.split(".")[1] || "").length;
  if (n === 0 && /\d?e-\d?/.test(i)) {
    const c = i.match(/\d?e-(\d?)/);
    c?.[1] && (n = Number.parseInt(c[1]));
  }
  const o = r > n ? r : n, a = Number.parseInt(e.toFixed(o).replace(".", "")), s = Number.parseInt(t.toFixed(o).replace(".", ""));
  return a % s / 10 ** o;
}
const Rs = /* @__PURE__ */ Symbol("evaluating");
function fe(e, t, r) {
  let i;
  Object.defineProperty(e, t, {
    get() {
      if (i !== Rs)
        return i === void 0 && (i = Rs, i = r()), i;
    },
    set(n) {
      Object.defineProperty(e, t, {
        value: n
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Pt(e, t, r) {
  Object.defineProperty(e, t, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function zt(...e) {
  const t = {};
  for (const r of e) {
    const i = Object.getOwnPropertyDescriptors(r);
    Object.assign(t, i);
  }
  return Object.defineProperties({}, t);
}
function Fs(e) {
  return JSON.stringify(e);
}
function _y(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const Fp = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function _r(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const yy = is(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function Xt(e) {
  if (_r(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const r = t.prototype;
  return !(_r(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function Lp(e) {
  return Xt(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const $y = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function gi(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function xt(e, t, r) {
  const i = new e._zod.constr(t ?? e._zod.def);
  return (!t || r?.parent) && (i._zod.parent = e), i;
}
function P(e) {
  const t = e;
  if (!t)
    return {};
  if (typeof t == "string")
    return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function by(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const ky = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function wy(e, t) {
  const r = e._zod.def, i = r.checks;
  if (i && i.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const o = zt(e._zod.def, {
    get shape() {
      const a = {};
      for (const s in t) {
        if (!(s in r.shape))
          throw new Error(`Unrecognized key: "${s}"`);
        t[s] && (a[s] = r.shape[s]);
      }
      return Pt(this, "shape", a), a;
    },
    checks: []
  });
  return xt(e, o);
}
function Sy(e, t) {
  const r = e._zod.def, i = r.checks;
  if (i && i.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const o = zt(e._zod.def, {
    get shape() {
      const a = { ...e._zod.def.shape };
      for (const s in t) {
        if (!(s in r.shape))
          throw new Error(`Unrecognized key: "${s}"`);
        t[s] && delete a[s];
      }
      return Pt(this, "shape", a), a;
    },
    checks: []
  });
  return xt(e, o);
}
function Iy(e, t) {
  if (!Xt(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const r = e._zod.def.checks;
  if (r && r.length > 0) {
    const o = e._zod.def.shape;
    for (const a in t)
      if (Object.getOwnPropertyDescriptor(o, a) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const n = zt(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...t };
      return Pt(this, "shape", o), o;
    }
  });
  return xt(e, n);
}
function zy(e, t) {
  if (!Xt(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const r = zt(e._zod.def, {
    get shape() {
      const i = { ...e._zod.def.shape, ...t };
      return Pt(this, "shape", i), i;
    }
  });
  return xt(e, r);
}
function xy(e, t) {
  const r = zt(e._zod.def, {
    get shape() {
      const i = { ...e._zod.def.shape, ...t._zod.def.shape };
      return Pt(this, "shape", i), i;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return xt(e, r);
}
function Oy(e, t, r) {
  const n = t._zod.def.checks;
  if (n && n.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const a = zt(t._zod.def, {
    get shape() {
      const s = t._zod.def.shape, c = { ...s };
      if (r)
        for (const u in r) {
          if (!(u in s))
            throw new Error(`Unrecognized key: "${u}"`);
          r[u] && (c[u] = e ? new e({
            type: "optional",
            innerType: s[u]
          }) : s[u]);
        }
      else
        for (const u in s)
          c[u] = e ? new e({
            type: "optional",
            innerType: s[u]
          }) : s[u];
      return Pt(this, "shape", c), c;
    },
    checks: []
  });
  return xt(t, a);
}
function Ey(e, t, r) {
  const i = zt(t._zod.def, {
    get shape() {
      const n = t._zod.def.shape, o = { ...n };
      if (r)
        for (const a in r) {
          if (!(a in o))
            throw new Error(`Unrecognized key: "${a}"`);
          r[a] && (o[a] = new e({
            type: "nonoptional",
            innerType: n[a]
          }));
        }
      else
        for (const a in n)
          o[a] = new e({
            type: "nonoptional",
            innerType: n[a]
          });
      return Pt(this, "shape", o), o;
    }
  });
  return xt(t, i);
}
function Ft(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let r = t; r < e.issues.length; r++)
    if (e.issues[r]?.continue !== !0)
      return !0;
  return !1;
}
function Lt(e, t) {
  return t.map((r) => {
    var i;
    return (i = r).path ?? (i.path = []), r.path.unshift(e), r;
  });
}
function Hn(e) {
  return typeof e == "string" ? e : e?.message;
}
function St(e, t, r) {
  const i = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const n = Hn(e.inst?._zod.def?.error?.(e)) ?? Hn(t?.error?.(e)) ?? Hn(r.customError?.(e)) ?? Hn(r.localeError?.(e)) ?? "Invalid input";
    i.message = n;
  }
  return delete i.inst, delete i.continue, t?.reportInput || delete i.input, i;
}
function ss(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function _n(...e) {
  const [t, r, i] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: r,
    inst: i
  } : { ...t };
}
const Mp = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, Hi, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, Bp = $("$ZodError", Mp), Jp = $("$ZodError", Mp, { Parent: Error });
function Ty(e, t = (r) => r.message) {
  const r = {}, i = [];
  for (const n of e.issues)
    n.path.length > 0 ? (r[n.path[0]] = r[n.path[0]] || [], r[n.path[0]].push(t(n))) : i.push(t(n));
  return { formErrors: i, fieldErrors: r };
}
function Ny(e, t = (r) => r.message) {
  const r = { _errors: [] }, i = (n) => {
    for (const o of n.issues)
      if (o.code === "invalid_union" && o.errors.length)
        o.errors.map((a) => i({ issues: a }));
      else if (o.code === "invalid_key")
        i({ issues: o.issues });
      else if (o.code === "invalid_element")
        i({ issues: o.issues });
      else if (o.path.length === 0)
        r._errors.push(t(o));
      else {
        let a = r, s = 0;
        for (; s < o.path.length; ) {
          const c = o.path[s];
          s === o.path.length - 1 ? (a[c] = a[c] || { _errors: [] }, a[c]._errors.push(t(o))) : a[c] = a[c] || { _errors: [] }, a = a[c], s++;
        }
      }
  };
  return i(e), r;
}
const cs = (e) => (t, r, i, n) => {
  const o = i ? Object.assign(i, { async: !1 }) : { async: !1 }, a = t._zod.run({ value: r, issues: [] }, o);
  if (a instanceof Promise)
    throw new Mt();
  if (a.issues.length) {
    const s = new (n?.Err ?? e)(a.issues.map((c) => St(c, o, wt())));
    throw Fp(s, n?.callee), s;
  }
  return a.value;
}, us = (e) => async (t, r, i, n) => {
  const o = i ? Object.assign(i, { async: !0 }) : { async: !0 };
  let a = t._zod.run({ value: r, issues: [] }, o);
  if (a instanceof Promise && (a = await a), a.issues.length) {
    const s = new (n?.Err ?? e)(a.issues.map((c) => St(c, o, wt())));
    throw Fp(s, n?.callee), s;
  }
  return a.value;
}, vi = (e) => (t, r, i) => {
  const n = i ? { ...i, async: !1 } : { async: !1 }, o = t._zod.run({ value: r, issues: [] }, n);
  if (o instanceof Promise)
    throw new Mt();
  return o.issues.length ? {
    success: !1,
    error: new (e ?? Bp)(o.issues.map((a) => St(a, n, wt())))
  } : { success: !0, data: o.value };
}, Cy = /* @__PURE__ */ vi(Jp), _i = (e) => async (t, r, i) => {
  const n = i ? Object.assign(i, { async: !0 }) : { async: !0 };
  let o = t._zod.run({ value: r, issues: [] }, n);
  return o instanceof Promise && (o = await o), o.issues.length ? {
    success: !1,
    error: new e(o.issues.map((a) => St(a, n, wt())))
  } : { success: !0, data: o.value };
}, Uy = /* @__PURE__ */ _i(Jp), Ay = (e) => (t, r, i) => {
  const n = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return cs(e)(t, r, n);
}, Zy = (e) => (t, r, i) => cs(e)(t, r, i), Dy = (e) => async (t, r, i) => {
  const n = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return us(e)(t, r, n);
}, jy = (e) => async (t, r, i) => us(e)(t, r, i), Py = (e) => (t, r, i) => {
  const n = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return vi(e)(t, r, n);
}, Ry = (e) => (t, r, i) => vi(e)(t, r, i), Fy = (e) => async (t, r, i) => {
  const n = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return _i(e)(t, r, n);
}, Ly = (e) => async (t, r, i) => _i(e)(t, r, i), My = /^[cC][^\s-]{8,}$/, By = /^[0-9a-z]+$/, Jy = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Vy = /^[0-9a-vA-V]{20}$/, qy = /^[A-Za-z0-9]{27}$/, Wy = /^[a-zA-Z0-9_-]{21}$/, Ky = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Gy = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Ls = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Hy = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Xy = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Yy() {
  return new RegExp(Xy, "u");
}
const Qy = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, e$ = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, t$ = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, n$ = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, r$ = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Vp = /^[A-Za-z0-9_-]*$/, i$ = /^\+[1-9]\d{6,14}$/, qp = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", o$ = /* @__PURE__ */ new RegExp(`^${qp}$`);
function Wp(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function a$(e) {
  return new RegExp(`^${Wp(e)}$`);
}
function s$(e) {
  const t = Wp({ precision: e.precision }), r = ["Z"];
  e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const i = `${t}(?:${r.join("|")})`;
  return new RegExp(`^${qp}T(?:${i})$`);
}
const c$ = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, u$ = /^-?\d+$/, Kp = /^-?\d+(?:\.\d+)?$/, l$ = /^(?:true|false)$/i, d$ = /^[^A-Z]*$/, f$ = /^[^a-z]*$/, Me = /* @__PURE__ */ $("$ZodCheck", (e, t) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
}), Gp = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, Hp = /* @__PURE__ */ $("$ZodCheckLessThan", (e, t) => {
  Me.init(e, t);
  const r = Gp[typeof t.value];
  e._zod.onattach.push((i) => {
    const n = i._zod.bag, o = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < o && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value);
  }), e._zod.check = (i) => {
    (t.inclusive ? i.value <= t.value : i.value < t.value) || i.issues.push({
      origin: r,
      code: "too_big",
      maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
      input: i.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), Xp = /* @__PURE__ */ $("$ZodCheckGreaterThan", (e, t) => {
  Me.init(e, t);
  const r = Gp[typeof t.value];
  e._zod.onattach.push((i) => {
    const n = i._zod.bag, o = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > o && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value);
  }), e._zod.check = (i) => {
    (t.inclusive ? i.value >= t.value : i.value > t.value) || i.issues.push({
      origin: r,
      code: "too_small",
      minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
      input: i.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), h$ = /* @__PURE__ */ $("$ZodCheckMultipleOf", (e, t) => {
  Me.init(e, t), e._zod.onattach.push((r) => {
    var i;
    (i = r._zod.bag).multipleOf ?? (i.multipleOf = t.value);
  }), e._zod.check = (r) => {
    if (typeof r.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof r.value == "bigint" ? r.value % t.value === BigInt(0) : vy(r.value, t.value) === 0) || r.issues.push({
      origin: typeof r.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), p$ = /* @__PURE__ */ $("$ZodCheckNumberFormat", (e, t) => {
  Me.init(e, t), t.format = t.format || "float64";
  const r = t.format?.includes("int"), i = r ? "int" : "number", [n, o] = ky[t.format];
  e._zod.onattach.push((a) => {
    const s = a._zod.bag;
    s.format = t.format, s.minimum = n, s.maximum = o, r && (s.pattern = u$);
  }), e._zod.check = (a) => {
    const s = a.value;
    if (r) {
      if (!Number.isInteger(s)) {
        a.issues.push({
          expected: i,
          format: t.format,
          code: "invalid_type",
          continue: !1,
          input: s,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(s)) {
        s > 0 ? a.issues.push({
          input: s,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: i,
          inclusive: !0,
          continue: !t.abort
        }) : a.issues.push({
          input: s,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: i,
          inclusive: !0,
          continue: !t.abort
        });
        return;
      }
    }
    s < n && a.issues.push({
      origin: "number",
      input: s,
      code: "too_small",
      minimum: n,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), s > o && a.issues.push({
      origin: "number",
      input: s,
      code: "too_big",
      maximum: o,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    });
  };
}), m$ = /* @__PURE__ */ $("$ZodCheckMaxLength", (e, t) => {
  var r;
  Me.init(e, t), (r = e._zod.def).when ?? (r.when = (i) => {
    const n = i.value;
    return !os(n) && n.length !== void 0;
  }), e._zod.onattach.push((i) => {
    const n = i._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < n && (i._zod.bag.maximum = t.maximum);
  }), e._zod.check = (i) => {
    const n = i.value;
    if (n.length <= t.maximum)
      return;
    const a = ss(n);
    i.issues.push({
      origin: a,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), g$ = /* @__PURE__ */ $("$ZodCheckMinLength", (e, t) => {
  var r;
  Me.init(e, t), (r = e._zod.def).when ?? (r.when = (i) => {
    const n = i.value;
    return !os(n) && n.length !== void 0;
  }), e._zod.onattach.push((i) => {
    const n = i._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > n && (i._zod.bag.minimum = t.minimum);
  }), e._zod.check = (i) => {
    const n = i.value;
    if (n.length >= t.minimum)
      return;
    const a = ss(n);
    i.issues.push({
      origin: a,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), v$ = /* @__PURE__ */ $("$ZodCheckLengthEquals", (e, t) => {
  var r;
  Me.init(e, t), (r = e._zod.def).when ?? (r.when = (i) => {
    const n = i.value;
    return !os(n) && n.length !== void 0;
  }), e._zod.onattach.push((i) => {
    const n = i._zod.bag;
    n.minimum = t.length, n.maximum = t.length, n.length = t.length;
  }), e._zod.check = (i) => {
    const n = i.value, o = n.length;
    if (o === t.length)
      return;
    const a = ss(n), s = o > t.length;
    i.issues.push({
      origin: a,
      ...s ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), yi = /* @__PURE__ */ $("$ZodCheckStringFormat", (e, t) => {
  var r, i;
  Me.init(e, t), e._zod.onattach.push((n) => {
    const o = n._zod.bag;
    o.format = t.format, t.pattern && (o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(t.pattern));
  }), t.pattern ? (r = e._zod).check ?? (r.check = (n) => {
    t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: n.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (i = e._zod).check ?? (i.check = () => {
  });
}), _$ = /* @__PURE__ */ $("$ZodCheckRegex", (e, t) => {
  yi.init(e, t), e._zod.check = (r) => {
    t.pattern.lastIndex = 0, !t.pattern.test(r.value) && r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: r.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), y$ = /* @__PURE__ */ $("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = d$), yi.init(e, t);
}), $$ = /* @__PURE__ */ $("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = f$), yi.init(e, t);
}), b$ = /* @__PURE__ */ $("$ZodCheckIncludes", (e, t) => {
  Me.init(e, t);
  const r = gi(t.includes), i = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${r}` : r);
  t.pattern = i, e._zod.onattach.push((n) => {
    const o = n._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(i);
  }), e._zod.check = (n) => {
    n.value.includes(t.includes, t.position) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), k$ = /* @__PURE__ */ $("$ZodCheckStartsWith", (e, t) => {
  Me.init(e, t);
  const r = new RegExp(`^${gi(t.prefix)}.*`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((i) => {
    const n = i._zod.bag;
    n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(r);
  }), e._zod.check = (i) => {
    i.value.startsWith(t.prefix) || i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), w$ = /* @__PURE__ */ $("$ZodCheckEndsWith", (e, t) => {
  Me.init(e, t);
  const r = new RegExp(`.*${gi(t.suffix)}$`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((i) => {
    const n = i._zod.bag;
    n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(r);
  }), e._zod.check = (i) => {
    i.value.endsWith(t.suffix) || i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), S$ = /* @__PURE__ */ $("$ZodCheckOverwrite", (e, t) => {
  Me.init(e, t), e._zod.check = (r) => {
    r.value = t.tx(r.value);
  };
});
class I$ {
  constructor(t = []) {
    this.content = [], this.indent = 0, this && (this.args = t);
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const i = t.split(`
`).filter((a) => a), n = Math.min(...i.map((a) => a.length - a.trimStart().length)), o = i.map((a) => a.slice(n)).map((a) => " ".repeat(this.indent * 2) + a);
    for (const a of o)
      this.content.push(a);
  }
  compile() {
    const t = Function, r = this?.args, n = [...(this?.content ?? [""]).map((o) => `  ${o}`)];
    return new t(...r, n.join(`
`));
  }
}
const z$ = {
  major: 4,
  minor: 3,
  patch: 6
}, be = /* @__PURE__ */ $("$ZodType", (e, t) => {
  var r;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = z$;
  const i = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && i.unshift(e);
  for (const n of i)
    for (const o of n._zod.onattach)
      o(e);
  if (i.length === 0)
    (r = e._zod).deferred ?? (r.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const n = (a, s, c) => {
      let u = Ft(a), l;
      for (const d of s) {
        if (d._zod.def.when) {
          if (!d._zod.def.when(a))
            continue;
        } else if (u)
          continue;
        const f = a.issues.length, h = d._zod.check(a);
        if (h instanceof Promise && c?.async === !1)
          throw new Mt();
        if (l || h instanceof Promise)
          l = (l ?? Promise.resolve()).then(async () => {
            await h, a.issues.length !== f && (u || (u = Ft(a, f)));
          });
        else {
          if (a.issues.length === f)
            continue;
          u || (u = Ft(a, f));
        }
      }
      return l ? l.then(() => a) : a;
    }, o = (a, s, c) => {
      if (Ft(a))
        return a.aborted = !0, a;
      const u = n(s, i, c);
      if (u instanceof Promise) {
        if (c.async === !1)
          throw new Mt();
        return u.then((l) => e._zod.parse(l, c));
      }
      return e._zod.parse(u, c);
    };
    e._zod.run = (a, s) => {
      if (s.skipChecks)
        return e._zod.parse(a, s);
      if (s.direction === "backward") {
        const u = e._zod.parse({ value: a.value, issues: [] }, { ...s, skipChecks: !0 });
        return u instanceof Promise ? u.then((l) => o(l, a, s)) : o(u, a, s);
      }
      const c = e._zod.parse(a, s);
      if (c instanceof Promise) {
        if (s.async === !1)
          throw new Mt();
        return c.then((u) => n(u, i, s));
      }
      return n(c, i, s);
    };
  }
  fe(e, "~standard", () => ({
    validate: (n) => {
      try {
        const o = Cy(e, n);
        return o.success ? { value: o.data } : { issues: o.error?.issues };
      } catch {
        return Uy(e, n).then((a) => a.success ? { value: a.data } : { issues: a.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), ls = /* @__PURE__ */ $("$ZodString", (e, t) => {
  be.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? c$(e._zod.bag), e._zod.parse = (r, i) => {
    if (t.coerce)
      try {
        r.value = String(r.value);
      } catch {
      }
    return typeof r.value == "string" || r.issues.push({
      expected: "string",
      code: "invalid_type",
      input: r.value,
      inst: e
    }), r;
  };
}), $e = /* @__PURE__ */ $("$ZodStringFormat", (e, t) => {
  yi.init(e, t), ls.init(e, t);
}), x$ = /* @__PURE__ */ $("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = Gy), $e.init(e, t);
}), O$ = /* @__PURE__ */ $("$ZodUUID", (e, t) => {
  if (t.version) {
    const i = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (i === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = Ls(i));
  } else
    t.pattern ?? (t.pattern = Ls());
  $e.init(e, t);
}), E$ = /* @__PURE__ */ $("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = Hy), $e.init(e, t);
}), T$ = /* @__PURE__ */ $("$ZodURL", (e, t) => {
  $e.init(e, t), e._zod.check = (r) => {
    try {
      const i = r.value.trim(), n = new URL(i);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(n.hostname) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(n.protocol.endsWith(":") ? n.protocol.slice(0, -1) : n.protocol) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? r.value = n.href : r.value = i;
      return;
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "url",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), N$ = /* @__PURE__ */ $("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = Yy()), $e.init(e, t);
}), C$ = /* @__PURE__ */ $("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = Wy), $e.init(e, t);
}), U$ = /* @__PURE__ */ $("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = My), $e.init(e, t);
}), A$ = /* @__PURE__ */ $("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = By), $e.init(e, t);
}), Z$ = /* @__PURE__ */ $("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = Jy), $e.init(e, t);
}), D$ = /* @__PURE__ */ $("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = Vy), $e.init(e, t);
}), j$ = /* @__PURE__ */ $("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = qy), $e.init(e, t);
}), P$ = /* @__PURE__ */ $("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = s$(t)), $e.init(e, t);
}), R$ = /* @__PURE__ */ $("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = o$), $e.init(e, t);
}), F$ = /* @__PURE__ */ $("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = a$(t)), $e.init(e, t);
}), L$ = /* @__PURE__ */ $("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = Ky), $e.init(e, t);
}), M$ = /* @__PURE__ */ $("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = Qy), $e.init(e, t), e._zod.bag.format = "ipv4";
}), B$ = /* @__PURE__ */ $("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = e$), $e.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (r) => {
    try {
      new URL(`http://[${r.value}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), J$ = /* @__PURE__ */ $("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = t$), $e.init(e, t);
}), V$ = /* @__PURE__ */ $("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = n$), $e.init(e, t), e._zod.check = (r) => {
    const i = r.value.split("/");
    try {
      if (i.length !== 2)
        throw new Error();
      const [n, o] = i;
      if (!o)
        throw new Error();
      const a = Number(o);
      if (`${a}` !== o)
        throw new Error();
      if (a < 0 || a > 128)
        throw new Error();
      new URL(`http://[${n}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function Yp(e) {
  if (e === "")
    return !0;
  if (e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const q$ = /* @__PURE__ */ $("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = r$), $e.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (r) => {
    Yp(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function W$(e) {
  if (!Vp.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (i) => i === "-" ? "+" : "/"), r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return Yp(r);
}
const K$ = /* @__PURE__ */ $("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = Vp), $e.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (r) => {
    W$(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), G$ = /* @__PURE__ */ $("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = i$), $e.init(e, t);
});
function H$(e, t = null) {
  try {
    const r = e.split(".");
    if (r.length !== 3)
      return !1;
    const [i] = r;
    if (!i)
      return !1;
    const n = JSON.parse(atob(i));
    return !("typ" in n && n?.typ !== "JWT" || !n.alg || t && (!("alg" in n) || n.alg !== t));
  } catch {
    return !1;
  }
}
const X$ = /* @__PURE__ */ $("$ZodJWT", (e, t) => {
  $e.init(e, t), e._zod.check = (r) => {
    H$(r.value, t.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Qp = /* @__PURE__ */ $("$ZodNumber", (e, t) => {
  be.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Kp, e._zod.parse = (r, i) => {
    if (t.coerce)
      try {
        r.value = Number(r.value);
      } catch {
      }
    const n = r.value;
    if (typeof n == "number" && !Number.isNaN(n) && Number.isFinite(n))
      return r;
    const o = typeof n == "number" ? Number.isNaN(n) ? "NaN" : Number.isFinite(n) ? void 0 : "Infinity" : void 0;
    return r.issues.push({
      expected: "number",
      code: "invalid_type",
      input: n,
      inst: e,
      ...o ? { received: o } : {}
    }), r;
  };
}), Y$ = /* @__PURE__ */ $("$ZodNumberFormat", (e, t) => {
  p$.init(e, t), Qp.init(e, t);
}), Q$ = /* @__PURE__ */ $("$ZodBoolean", (e, t) => {
  be.init(e, t), e._zod.pattern = l$, e._zod.parse = (r, i) => {
    if (t.coerce)
      try {
        r.value = !!r.value;
      } catch {
      }
    const n = r.value;
    return typeof n == "boolean" || r.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), eb = /* @__PURE__ */ $("$ZodAny", (e, t) => {
  be.init(e, t), e._zod.parse = (r) => r;
}), tb = /* @__PURE__ */ $("$ZodUnknown", (e, t) => {
  be.init(e, t), e._zod.parse = (r) => r;
}), nb = /* @__PURE__ */ $("$ZodNever", (e, t) => {
  be.init(e, t), e._zod.parse = (r, i) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: e
  }), r);
});
function Ms(e, t, r) {
  e.issues.length && t.issues.push(...Lt(r, e.issues)), t.value[r] = e.value;
}
const rb = /* @__PURE__ */ $("$ZodArray", (e, t) => {
  be.init(e, t), e._zod.parse = (r, i) => {
    const n = r.value;
    if (!Array.isArray(n))
      return r.issues.push({
        expected: "array",
        code: "invalid_type",
        input: n,
        inst: e
      }), r;
    r.value = Array(n.length);
    const o = [];
    for (let a = 0; a < n.length; a++) {
      const s = n[a], c = t.element._zod.run({
        value: s,
        issues: []
      }, i);
      c instanceof Promise ? o.push(c.then((u) => Ms(u, r, a))) : Ms(c, r, a);
    }
    return o.length ? Promise.all(o).then(() => r) : r;
  };
});
function yr(e, t, r, i, n) {
  if (e.issues.length) {
    if (n && !(r in i))
      return;
    t.issues.push(...Lt(r, e.issues));
  }
  e.value === void 0 ? r in i && (t.value[r] = void 0) : t.value[r] = e.value;
}
function em(e) {
  const t = Object.keys(e.shape);
  for (const i of t)
    if (!e.shape?.[i]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${i}": expected a Zod schema`);
  const r = by(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(r)
  };
}
function tm(e, t, r, i, n, o) {
  const a = [], s = n.keySet, c = n.catchall._zod, u = c.def.type, l = c.optout === "optional";
  for (const d in t) {
    if (s.has(d))
      continue;
    if (u === "never") {
      a.push(d);
      continue;
    }
    const f = c.run({ value: t[d], issues: [] }, i);
    f instanceof Promise ? e.push(f.then((h) => yr(h, r, d, t, l))) : yr(f, r, d, t, l);
  }
  return a.length && r.issues.push({
    code: "unrecognized_keys",
    keys: a,
    input: t,
    inst: o
  }), e.length ? Promise.all(e).then(() => r) : r;
}
const ib = /* @__PURE__ */ $("$ZodObject", (e, t) => {
  if (be.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    const s = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const c = { ...s };
        return Object.defineProperty(t, "shape", {
          value: c
        }), c;
      }
    });
  }
  const i = is(() => em(t));
  fe(e._zod, "propValues", () => {
    const s = t.shape, c = {};
    for (const u in s) {
      const l = s[u]._zod;
      if (l.values) {
        c[u] ?? (c[u] = /* @__PURE__ */ new Set());
        for (const d of l.values)
          c[u].add(d);
      }
    }
    return c;
  });
  const n = _r, o = t.catchall;
  let a;
  e._zod.parse = (s, c) => {
    a ?? (a = i.value);
    const u = s.value;
    if (!n(u))
      return s.issues.push({
        expected: "object",
        code: "invalid_type",
        input: u,
        inst: e
      }), s;
    s.value = {};
    const l = [], d = a.shape;
    for (const f of a.keys) {
      const h = d[f], v = h._zod.optout === "optional", _ = h._zod.run({ value: u[f], issues: [] }, c);
      _ instanceof Promise ? l.push(_.then((k) => yr(k, s, f, u, v))) : yr(_, s, f, u, v);
    }
    return o ? tm(l, u, s, c, i.value, e) : l.length ? Promise.all(l).then(() => s) : s;
  };
}), ob = /* @__PURE__ */ $("$ZodObjectJIT", (e, t) => {
  ib.init(e, t);
  const r = e._zod.parse, i = is(() => em(t)), n = (f) => {
    const h = new I$(["shape", "payload", "ctx"]), v = i.value, _ = (S) => {
      const O = Fs(S);
      return `shape[${O}]._zod.run({ value: input[${O}], issues: [] }, ctx)`;
    };
    h.write("const input = payload.value;");
    const k = /* @__PURE__ */ Object.create(null);
    let T = 0;
    for (const S of v.keys)
      k[S] = `key_${T++}`;
    h.write("const newResult = {};");
    for (const S of v.keys) {
      const O = k[S], U = Fs(S), z = f[S]?._zod?.optout === "optional";
      h.write(`const ${O} = ${_(S)};`), z ? h.write(`
        if (${O}.issues.length) {
          if (${U} in input) {
            payload.issues = payload.issues.concat(${O}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${U}, ...iss.path] : [${U}]
            })));
          }
        }
        
        if (${O}.value === undefined) {
          if (${U} in input) {
            newResult[${U}] = undefined;
          }
        } else {
          newResult[${U}] = ${O}.value;
        }
        
      `) : h.write(`
        if (${O}.issues.length) {
          payload.issues = payload.issues.concat(${O}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${U}, ...iss.path] : [${U}]
          })));
        }
        
        if (${O}.value === undefined) {
          if (${U} in input) {
            newResult[${U}] = undefined;
          }
        } else {
          newResult[${U}] = ${O}.value;
        }
        
      `);
    }
    h.write("payload.value = newResult;"), h.write("return payload;");
    const B = h.compile();
    return (S, O) => B(f, S, O);
  };
  let o;
  const a = _r, s = !Pp.jitless, u = s && yy.value, l = t.catchall;
  let d;
  e._zod.parse = (f, h) => {
    d ?? (d = i.value);
    const v = f.value;
    return a(v) ? s && u && h?.async === !1 && h.jitless !== !0 ? (o || (o = n(t.shape)), f = o(f, h), l ? tm([], v, f, h, d, e) : f) : r(f, h) : (f.issues.push({
      expected: "object",
      code: "invalid_type",
      input: v,
      inst: e
    }), f);
  };
});
function Bs(e, t, r, i) {
  for (const o of e)
    if (o.issues.length === 0)
      return t.value = o.value, t;
  const n = e.filter((o) => !Ft(o));
  return n.length === 1 ? (t.value = n[0].value, n[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: r,
    errors: e.map((o) => o.issues.map((a) => St(a, i, wt())))
  }), t);
}
const ab = /* @__PURE__ */ $("$ZodUnion", (e, t) => {
  be.init(e, t), fe(e._zod, "optin", () => t.options.some((n) => n._zod.optin === "optional") ? "optional" : void 0), fe(e._zod, "optout", () => t.options.some((n) => n._zod.optout === "optional") ? "optional" : void 0), fe(e._zod, "values", () => {
    if (t.options.every((n) => n._zod.values))
      return new Set(t.options.flatMap((n) => Array.from(n._zod.values)));
  }), fe(e._zod, "pattern", () => {
    if (t.options.every((n) => n._zod.pattern)) {
      const n = t.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${n.map((o) => as(o.source)).join("|")})$`);
    }
  });
  const r = t.options.length === 1, i = t.options[0]._zod.run;
  e._zod.parse = (n, o) => {
    if (r)
      return i(n, o);
    let a = !1;
    const s = [];
    for (const c of t.options) {
      const u = c._zod.run({
        value: n.value,
        issues: []
      }, o);
      if (u instanceof Promise)
        s.push(u), a = !0;
      else {
        if (u.issues.length === 0)
          return u;
        s.push(u);
      }
    }
    return a ? Promise.all(s).then((c) => Bs(c, n, e, o)) : Bs(s, n, e, o);
  };
}), sb = /* @__PURE__ */ $("$ZodIntersection", (e, t) => {
  be.init(e, t), e._zod.parse = (r, i) => {
    const n = r.value, o = t.left._zod.run({ value: n, issues: [] }, i), a = t.right._zod.run({ value: n, issues: [] }, i);
    return o instanceof Promise || a instanceof Promise ? Promise.all([o, a]).then(([c, u]) => Js(r, c, u)) : Js(r, o, a);
  };
});
function Xi(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (Xt(e) && Xt(t)) {
    const r = Object.keys(t), i = Object.keys(e).filter((o) => r.indexOf(o) !== -1), n = { ...e, ...t };
    for (const o of i) {
      const a = Xi(e[o], t[o]);
      if (!a.valid)
        return {
          valid: !1,
          mergeErrorPath: [o, ...a.mergeErrorPath]
        };
      n[o] = a.data;
    }
    return { valid: !0, data: n };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const r = [];
    for (let i = 0; i < e.length; i++) {
      const n = e[i], o = t[i], a = Xi(n, o);
      if (!a.valid)
        return {
          valid: !1,
          mergeErrorPath: [i, ...a.mergeErrorPath]
        };
      r.push(a.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Js(e, t, r) {
  const i = /* @__PURE__ */ new Map();
  let n;
  for (const s of t.issues)
    if (s.code === "unrecognized_keys") {
      n ?? (n = s);
      for (const c of s.keys)
        i.has(c) || i.set(c, {}), i.get(c).l = !0;
    } else
      e.issues.push(s);
  for (const s of r.issues)
    if (s.code === "unrecognized_keys")
      for (const c of s.keys)
        i.has(c) || i.set(c, {}), i.get(c).r = !0;
    else
      e.issues.push(s);
  const o = [...i].filter(([, s]) => s.l && s.r).map(([s]) => s);
  if (o.length && n && e.issues.push({ ...n, keys: o }), Ft(e))
    return e;
  const a = Xi(t.value, r.value);
  if (!a.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);
  return e.value = a.data, e;
}
const cb = /* @__PURE__ */ $("$ZodRecord", (e, t) => {
  be.init(e, t), e._zod.parse = (r, i) => {
    const n = r.value;
    if (!Xt(n))
      return r.issues.push({
        expected: "record",
        code: "invalid_type",
        input: n,
        inst: e
      }), r;
    const o = [], a = t.keyType._zod.values;
    if (a) {
      r.value = {};
      const s = /* @__PURE__ */ new Set();
      for (const u of a)
        if (typeof u == "string" || typeof u == "number" || typeof u == "symbol") {
          s.add(typeof u == "number" ? u.toString() : u);
          const l = t.valueType._zod.run({ value: n[u], issues: [] }, i);
          l instanceof Promise ? o.push(l.then((d) => {
            d.issues.length && r.issues.push(...Lt(u, d.issues)), r.value[u] = d.value;
          })) : (l.issues.length && r.issues.push(...Lt(u, l.issues)), r.value[u] = l.value);
        }
      let c;
      for (const u in n)
        s.has(u) || (c = c ?? [], c.push(u));
      c && c.length > 0 && r.issues.push({
        code: "unrecognized_keys",
        input: n,
        inst: e,
        keys: c
      });
    } else {
      r.value = {};
      for (const s of Reflect.ownKeys(n)) {
        if (s === "__proto__")
          continue;
        let c = t.keyType._zod.run({ value: s, issues: [] }, i);
        if (c instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (typeof s == "string" && Kp.test(s) && c.issues.length) {
          const d = t.keyType._zod.run({ value: Number(s), issues: [] }, i);
          if (d instanceof Promise)
            throw new Error("Async schemas not supported in object keys currently");
          d.issues.length === 0 && (c = d);
        }
        if (c.issues.length) {
          t.mode === "loose" ? r.value[s] = n[s] : r.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: c.issues.map((d) => St(d, i, wt())),
            input: s,
            path: [s],
            inst: e
          });
          continue;
        }
        const l = t.valueType._zod.run({ value: n[s], issues: [] }, i);
        l instanceof Promise ? o.push(l.then((d) => {
          d.issues.length && r.issues.push(...Lt(s, d.issues)), r.value[c.value] = d.value;
        })) : (l.issues.length && r.issues.push(...Lt(s, l.issues)), r.value[c.value] = l.value);
      }
    }
    return o.length ? Promise.all(o).then(() => r) : r;
  };
}), ub = /* @__PURE__ */ $("$ZodEnum", (e, t) => {
  be.init(e, t);
  const r = Rp(t.entries), i = new Set(r);
  e._zod.values = i, e._zod.pattern = new RegExp(`^(${r.filter((n) => $y.has(typeof n)).map((n) => typeof n == "string" ? gi(n) : n.toString()).join("|")})$`), e._zod.parse = (n, o) => {
    const a = n.value;
    return i.has(a) || n.issues.push({
      code: "invalid_value",
      values: r,
      input: a,
      inst: e
    }), n;
  };
}), lb = /* @__PURE__ */ $("$ZodTransform", (e, t) => {
  be.init(e, t), e._zod.parse = (r, i) => {
    if (i.direction === "backward")
      throw new jp(e.constructor.name);
    const n = t.transform(r.value, r);
    if (i.async)
      return (n instanceof Promise ? n : Promise.resolve(n)).then((a) => (r.value = a, r));
    if (n instanceof Promise)
      throw new Mt();
    return r.value = n, r;
  };
});
function Vs(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const nm = /* @__PURE__ */ $("$ZodOptional", (e, t) => {
  be.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", fe(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), fe(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${as(r.source)})?$`) : void 0;
  }), e._zod.parse = (r, i) => {
    if (t.innerType._zod.optin === "optional") {
      const n = t.innerType._zod.run(r, i);
      return n instanceof Promise ? n.then((o) => Vs(o, r.value)) : Vs(n, r.value);
    }
    return r.value === void 0 ? r : t.innerType._zod.run(r, i);
  };
}), db = /* @__PURE__ */ $("$ZodExactOptional", (e, t) => {
  nm.init(e, t), fe(e._zod, "values", () => t.innerType._zod.values), fe(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (r, i) => t.innerType._zod.run(r, i);
}), fb = /* @__PURE__ */ $("$ZodNullable", (e, t) => {
  be.init(e, t), fe(e._zod, "optin", () => t.innerType._zod.optin), fe(e._zod, "optout", () => t.innerType._zod.optout), fe(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${as(r.source)}|null)$`) : void 0;
  }), fe(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (r, i) => r.value === null ? r : t.innerType._zod.run(r, i);
}), hb = /* @__PURE__ */ $("$ZodDefault", (e, t) => {
  be.init(e, t), e._zod.optin = "optional", fe(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, i) => {
    if (i.direction === "backward")
      return t.innerType._zod.run(r, i);
    if (r.value === void 0)
      return r.value = t.defaultValue, r;
    const n = t.innerType._zod.run(r, i);
    return n instanceof Promise ? n.then((o) => qs(o, t)) : qs(n, t);
  };
});
function qs(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const pb = /* @__PURE__ */ $("$ZodPrefault", (e, t) => {
  be.init(e, t), e._zod.optin = "optional", fe(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, i) => (i.direction === "backward" || r.value === void 0 && (r.value = t.defaultValue), t.innerType._zod.run(r, i));
}), mb = /* @__PURE__ */ $("$ZodNonOptional", (e, t) => {
  be.init(e, t), fe(e._zod, "values", () => {
    const r = t.innerType._zod.values;
    return r ? new Set([...r].filter((i) => i !== void 0)) : void 0;
  }), e._zod.parse = (r, i) => {
    const n = t.innerType._zod.run(r, i);
    return n instanceof Promise ? n.then((o) => Ws(o, e)) : Ws(n, e);
  };
});
function Ws(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const gb = /* @__PURE__ */ $("$ZodCatch", (e, t) => {
  be.init(e, t), fe(e._zod, "optin", () => t.innerType._zod.optin), fe(e._zod, "optout", () => t.innerType._zod.optout), fe(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, i) => {
    if (i.direction === "backward")
      return t.innerType._zod.run(r, i);
    const n = t.innerType._zod.run(r, i);
    return n instanceof Promise ? n.then((o) => (r.value = o.value, o.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: o.issues.map((a) => St(a, i, wt()))
      },
      input: r.value
    }), r.issues = []), r)) : (r.value = n.value, n.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: n.issues.map((o) => St(o, i, wt()))
      },
      input: r.value
    }), r.issues = []), r);
  };
}), vb = /* @__PURE__ */ $("$ZodPipe", (e, t) => {
  be.init(e, t), fe(e._zod, "values", () => t.in._zod.values), fe(e._zod, "optin", () => t.in._zod.optin), fe(e._zod, "optout", () => t.out._zod.optout), fe(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, i) => {
    if (i.direction === "backward") {
      const o = t.out._zod.run(r, i);
      return o instanceof Promise ? o.then((a) => Xn(a, t.in, i)) : Xn(o, t.in, i);
    }
    const n = t.in._zod.run(r, i);
    return n instanceof Promise ? n.then((o) => Xn(o, t.out, i)) : Xn(n, t.out, i);
  };
});
function Xn(e, t, r) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, r);
}
const _b = /* @__PURE__ */ $("$ZodReadonly", (e, t) => {
  be.init(e, t), fe(e._zod, "propValues", () => t.innerType._zod.propValues), fe(e._zod, "values", () => t.innerType._zod.values), fe(e._zod, "optin", () => t.innerType?._zod?.optin), fe(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (r, i) => {
    if (i.direction === "backward")
      return t.innerType._zod.run(r, i);
    const n = t.innerType._zod.run(r, i);
    return n instanceof Promise ? n.then(Ks) : Ks(n);
  };
});
function Ks(e) {
  return e.value = Object.freeze(e.value), e;
}
const yb = /* @__PURE__ */ $("$ZodCustom", (e, t) => {
  Me.init(e, t), be.init(e, t), e._zod.parse = (r, i) => r, e._zod.check = (r) => {
    const i = r.value, n = t.fn(i);
    if (n instanceof Promise)
      return n.then((o) => Gs(o, r, i, e));
    Gs(n, r, i, e);
  };
});
function Gs(e, t, r, i) {
  if (!e) {
    const n = {
      code: "custom",
      input: r,
      inst: i,
      // incorporates params.error into issue reporting
      path: [...i._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !i._zod.def.abort
      // params: inst._zod.def.params,
    };
    i._zod.def.params && (n.params = i._zod.def.params), t.issues.push(_n(n));
  }
}
var Hs;
class $b {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...r) {
    const i = r[0];
    return this._map.set(t, i), i && typeof i == "object" && "id" in i && this._idmap.set(i.id, t), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const r = this._map.get(t);
    return r && typeof r == "object" && "id" in r && this._idmap.delete(r.id), this._map.delete(t), this;
  }
  get(t) {
    const r = t._zod.parent;
    if (r) {
      const i = { ...this.get(r) ?? {} };
      delete i.id;
      const n = { ...i, ...this._map.get(t) };
      return Object.keys(n).length ? n : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function bb() {
  return new $b();
}
(Hs = globalThis).__zod_globalRegistry ?? (Hs.__zod_globalRegistry = bb());
const ln = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function kb(e, t) {
  return new e({
    type: "string",
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function wb(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Xs(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Sb(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ib(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function zb(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function xb(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ob(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Eb(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Tb(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Nb(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Cb(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ub(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ab(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Zb(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Db(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function jb(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Pb(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Rb(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Fb(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Lb(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Mb(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Bb(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Jb(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Vb(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function qb(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Wb(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Kb(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Gb(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Hb(e, t) {
  return new e({
    type: "boolean",
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Xb(e) {
  return new e({
    type: "any"
  });
}
// @__NO_SIDE_EFFECTS__
function Yb(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function Qb(e, t) {
  return new e({
    type: "never",
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ys(e, t) {
  return new Hp({
    check: "less_than",
    ...P(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function xi(e, t) {
  return new Hp({
    check: "less_than",
    ...P(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Qs(e, t) {
  return new Xp({
    check: "greater_than",
    ...P(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Oi(e, t) {
  return new Xp({
    check: "greater_than",
    ...P(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function ec(e, t) {
  return new h$({
    check: "multiple_of",
    ...P(t),
    value: e
  });
}
// @__NO_SIDE_EFFECTS__
function rm(e, t) {
  return new m$({
    check: "max_length",
    ...P(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function $r(e, t) {
  return new g$({
    check: "min_length",
    ...P(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function im(e, t) {
  return new v$({
    check: "length_equals",
    ...P(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function e0(e, t) {
  return new _$({
    check: "string_format",
    format: "regex",
    ...P(t),
    pattern: e
  });
}
// @__NO_SIDE_EFFECTS__
function t0(e) {
  return new y$({
    check: "string_format",
    format: "lowercase",
    ...P(e)
  });
}
// @__NO_SIDE_EFFECTS__
function n0(e) {
  return new $$({
    check: "string_format",
    format: "uppercase",
    ...P(e)
  });
}
// @__NO_SIDE_EFFECTS__
function r0(e, t) {
  return new b$({
    check: "string_format",
    format: "includes",
    ...P(t),
    includes: e
  });
}
// @__NO_SIDE_EFFECTS__
function i0(e, t) {
  return new k$({
    check: "string_format",
    format: "starts_with",
    ...P(t),
    prefix: e
  });
}
// @__NO_SIDE_EFFECTS__
function o0(e, t) {
  return new w$({
    check: "string_format",
    format: "ends_with",
    ...P(t),
    suffix: e
  });
}
// @__NO_SIDE_EFFECTS__
function en(e) {
  return new S$({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function a0(e) {
  return /* @__PURE__ */ en((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function s0() {
  return /* @__PURE__ */ en((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function c0() {
  return /* @__PURE__ */ en((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function u0() {
  return /* @__PURE__ */ en((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function l0() {
  return /* @__PURE__ */ en((e) => _y(e));
}
// @__NO_SIDE_EFFECTS__
function d0(e, t, r) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...P(r)
  });
}
// @__NO_SIDE_EFFECTS__
function f0(e, t, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...P(r)
  });
}
// @__NO_SIDE_EFFECTS__
function h0(e) {
  const t = /* @__PURE__ */ p0((r) => (r.addIssue = (i) => {
    if (typeof i == "string")
      r.issues.push(_n(i, r.value, t._zod.def));
    else {
      const n = i;
      n.fatal && (n.continue = !1), n.code ?? (n.code = "custom"), n.input ?? (n.input = r.value), n.inst ?? (n.inst = t), n.continue ?? (n.continue = !t._zod.def.abort), r.issues.push(_n(n));
    }
  }, e(r.value, r)));
  return t;
}
// @__NO_SIDE_EFFECTS__
function p0(e, t) {
  const r = new Me({
    check: "custom",
    ...P(t)
  });
  return r._zod.check = e, r;
}
function om(e) {
  let t = e?.target ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: e?.metadata ?? ln,
    target: t,
    unrepresentable: e?.unrepresentable ?? "throw",
    override: e?.override ?? (() => {
    }),
    io: e?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: e?.cycles ?? "ref",
    reused: e?.reused ?? "inline",
    external: e?.external ?? void 0
  };
}
function xe(e, t, r = { path: [], schemaPath: [] }) {
  var i;
  const n = e._zod.def, o = t.seen.get(e);
  if (o)
    return o.count++, r.schemaPath.includes(e) && (o.cycle = r.path), o.schema;
  const a = { schema: {}, count: 1, cycle: void 0, path: r.path };
  t.seen.set(e, a);
  const s = e._zod.toJSONSchema?.();
  if (s)
    a.schema = s;
  else {
    const l = {
      ...r,
      schemaPath: [...r.schemaPath, e],
      path: r.path
    };
    if (e._zod.processJSONSchema)
      e._zod.processJSONSchema(t, a.schema, l);
    else {
      const f = a.schema, h = t.processors[n.type];
      if (!h)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${n.type}`);
      h(e, t, f, l);
    }
    const d = e._zod.parent;
    d && (a.ref || (a.ref = d), xe(d, t, l), t.seen.get(d).isParent = !0);
  }
  const c = t.metadataRegistry.get(e);
  return c && Object.assign(a.schema, c), t.io === "input" && De(e) && (delete a.schema.examples, delete a.schema.default), t.io === "input" && a.schema._prefault && ((i = a.schema).default ?? (i.default = a.schema._prefault)), delete a.schema._prefault, t.seen.get(e).schema;
}
function am(e, t) {
  const r = e.seen.get(t);
  if (!r)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const i = /* @__PURE__ */ new Map();
  for (const a of e.seen.entries()) {
    const s = e.metadataRegistry.get(a[0])?.id;
    if (s) {
      const c = i.get(s);
      if (c && c !== a[0])
        throw new Error(`Duplicate schema id "${s}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      i.set(s, a[0]);
    }
  }
  const n = (a) => {
    const s = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const d = e.external.registry.get(a[0])?.id, f = e.external.uri ?? ((v) => v);
      if (d)
        return { ref: f(d) };
      const h = a[1].defId ?? a[1].schema.id ?? `schema${e.counter++}`;
      return a[1].defId = h, { defId: h, ref: `${f("__shared")}#/${s}/${h}` };
    }
    if (a[1] === r)
      return { ref: "#" };
    const u = `#/${s}/`, l = a[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: l, ref: u + l };
  }, o = (a) => {
    if (a[1].schema.$ref)
      return;
    const s = a[1], { ref: c, defId: u } = n(a);
    s.def = { ...s.schema }, u && (s.defId = u);
    const l = s.schema;
    for (const d in l)
      delete l[d];
    l.$ref = c;
  };
  if (e.cycles === "throw")
    for (const a of e.seen.entries()) {
      const s = a[1];
      if (s.cycle)
        throw new Error(`Cycle detected: #/${s.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const a of e.seen.entries()) {
    const s = a[1];
    if (t === a[0]) {
      o(a);
      continue;
    }
    if (e.external) {
      const u = e.external.registry.get(a[0])?.id;
      if (t !== a[0] && u) {
        o(a);
        continue;
      }
    }
    if (e.metadataRegistry.get(a[0])?.id) {
      o(a);
      continue;
    }
    if (s.cycle) {
      o(a);
      continue;
    }
    if (s.count > 1 && e.reused === "ref") {
      o(a);
      continue;
    }
  }
}
function sm(e, t) {
  const r = e.seen.get(t);
  if (!r)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const i = (a) => {
    const s = e.seen.get(a);
    if (s.ref === null)
      return;
    const c = s.def ?? s.schema, u = { ...c }, l = s.ref;
    if (s.ref = null, l) {
      i(l);
      const f = e.seen.get(l), h = f.schema;
      if (h.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (c.allOf = c.allOf ?? [], c.allOf.push(h)) : Object.assign(c, h), Object.assign(c, u), a._zod.parent === l)
        for (const _ in c)
          _ === "$ref" || _ === "allOf" || _ in u || delete c[_];
      if (h.$ref && f.def)
        for (const _ in c)
          _ === "$ref" || _ === "allOf" || _ in f.def && JSON.stringify(c[_]) === JSON.stringify(f.def[_]) && delete c[_];
    }
    const d = a._zod.parent;
    if (d && d !== l) {
      i(d);
      const f = e.seen.get(d);
      if (f?.schema.$ref && (c.$ref = f.schema.$ref, f.def))
        for (const h in c)
          h === "$ref" || h === "allOf" || h in f.def && JSON.stringify(c[h]) === JSON.stringify(f.def[h]) && delete c[h];
    }
    e.override({
      zodSchema: a,
      jsonSchema: c,
      path: s.path ?? []
    });
  };
  for (const a of [...e.seen.entries()].reverse())
    i(a[0]);
  const n = {};
  if (e.target === "draft-2020-12" ? n.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? n.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? n.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
    const a = e.external.registry.get(t)?.id;
    if (!a)
      throw new Error("Schema is missing an `id` property");
    n.$id = e.external.uri(a);
  }
  Object.assign(n, r.def ?? r.schema);
  const o = e.external?.defs ?? {};
  for (const a of e.seen.entries()) {
    const s = a[1];
    s.def && s.defId && (o[s.defId] = s.def);
  }
  e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? n.$defs = o : n.definitions = o);
  try {
    const a = JSON.parse(JSON.stringify(n));
    return Object.defineProperty(a, "~standard", {
      value: {
        ...t["~standard"],
        jsonSchema: {
          input: br(t, "input", e.processors),
          output: br(t, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), a;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function De(e, t) {
  const r = t ?? { seen: /* @__PURE__ */ new Set() };
  if (r.seen.has(e))
    return !1;
  r.seen.add(e);
  const i = e._zod.def;
  if (i.type === "transform")
    return !0;
  if (i.type === "array")
    return De(i.element, r);
  if (i.type === "set")
    return De(i.valueType, r);
  if (i.type === "lazy")
    return De(i.getter(), r);
  if (i.type === "promise" || i.type === "optional" || i.type === "nonoptional" || i.type === "nullable" || i.type === "readonly" || i.type === "default" || i.type === "prefault")
    return De(i.innerType, r);
  if (i.type === "intersection")
    return De(i.left, r) || De(i.right, r);
  if (i.type === "record" || i.type === "map")
    return De(i.keyType, r) || De(i.valueType, r);
  if (i.type === "pipe")
    return De(i.in, r) || De(i.out, r);
  if (i.type === "object") {
    for (const n in i.shape)
      if (De(i.shape[n], r))
        return !0;
    return !1;
  }
  if (i.type === "union") {
    for (const n of i.options)
      if (De(n, r))
        return !0;
    return !1;
  }
  if (i.type === "tuple") {
    for (const n of i.items)
      if (De(n, r))
        return !0;
    return !!(i.rest && De(i.rest, r));
  }
  return !1;
}
const m0 = (e, t = {}) => (r) => {
  const i = om({ ...r, processors: t });
  return xe(e, i), am(i, e), sm(i, e);
}, br = (e, t, r = {}) => (i) => {
  const { libraryOptions: n, target: o } = i ?? {}, a = om({ ...n ?? {}, target: o, io: t, processors: r });
  return xe(e, a), am(a, e), sm(a, e);
}, g0 = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, v0 = (e, t, r, i) => {
  const n = r;
  n.type = "string";
  const { minimum: o, maximum: a, format: s, patterns: c, contentEncoding: u } = e._zod.bag;
  if (typeof o == "number" && (n.minLength = o), typeof a == "number" && (n.maxLength = a), s && (n.format = g0[s] ?? s, n.format === "" && delete n.format, s === "time" && delete n.format), u && (n.contentEncoding = u), c && c.size > 0) {
    const l = [...c];
    l.length === 1 ? n.pattern = l[0].source : l.length > 1 && (n.allOf = [
      ...l.map((d) => ({
        ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: d.source
      }))
    ]);
  }
}, _0 = (e, t, r, i) => {
  const n = r, { minimum: o, maximum: a, format: s, multipleOf: c, exclusiveMaximum: u, exclusiveMinimum: l } = e._zod.bag;
  typeof s == "string" && s.includes("int") ? n.type = "integer" : n.type = "number", typeof l == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (n.minimum = l, n.exclusiveMinimum = !0) : n.exclusiveMinimum = l), typeof o == "number" && (n.minimum = o, typeof l == "number" && t.target !== "draft-04" && (l >= o ? delete n.minimum : delete n.exclusiveMinimum)), typeof u == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (n.maximum = u, n.exclusiveMaximum = !0) : n.exclusiveMaximum = u), typeof a == "number" && (n.maximum = a, typeof u == "number" && t.target !== "draft-04" && (u <= a ? delete n.maximum : delete n.exclusiveMaximum)), typeof c == "number" && (n.multipleOf = c);
}, y0 = (e, t, r, i) => {
  r.type = "boolean";
}, $0 = (e, t, r, i) => {
  r.not = {};
}, b0 = (e, t, r, i) => {
}, k0 = (e, t, r, i) => {
}, w0 = (e, t, r, i) => {
  const n = e._zod.def, o = Rp(n.entries);
  o.every((a) => typeof a == "number") && (r.type = "number"), o.every((a) => typeof a == "string") && (r.type = "string"), r.enum = o;
}, S0 = (e, t, r, i) => {
  if (t.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, I0 = (e, t, r, i) => {
  if (t.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, z0 = (e, t, r, i) => {
  const n = r, o = e._zod.def, { minimum: a, maximum: s } = e._zod.bag;
  typeof a == "number" && (n.minItems = a), typeof s == "number" && (n.maxItems = s), n.type = "array", n.items = xe(o.element, t, { ...i, path: [...i.path, "items"] });
}, x0 = (e, t, r, i) => {
  const n = r, o = e._zod.def;
  n.type = "object", n.properties = {};
  const a = o.shape;
  for (const u in a)
    n.properties[u] = xe(a[u], t, {
      ...i,
      path: [...i.path, "properties", u]
    });
  const s = new Set(Object.keys(a)), c = new Set([...s].filter((u) => {
    const l = o.shape[u]._zod;
    return t.io === "input" ? l.optin === void 0 : l.optout === void 0;
  }));
  c.size > 0 && (n.required = Array.from(c)), o.catchall?._zod.def.type === "never" ? n.additionalProperties = !1 : o.catchall ? o.catchall && (n.additionalProperties = xe(o.catchall, t, {
    ...i,
    path: [...i.path, "additionalProperties"]
  })) : t.io === "output" && (n.additionalProperties = !1);
}, O0 = (e, t, r, i) => {
  const n = e._zod.def, o = n.inclusive === !1, a = n.options.map((s, c) => xe(s, t, {
    ...i,
    path: [...i.path, o ? "oneOf" : "anyOf", c]
  }));
  o ? r.oneOf = a : r.anyOf = a;
}, E0 = (e, t, r, i) => {
  const n = e._zod.def, o = xe(n.left, t, {
    ...i,
    path: [...i.path, "allOf", 0]
  }), a = xe(n.right, t, {
    ...i,
    path: [...i.path, "allOf", 1]
  }), s = (u) => "allOf" in u && Object.keys(u).length === 1, c = [
    ...s(o) ? o.allOf : [o],
    ...s(a) ? a.allOf : [a]
  ];
  r.allOf = c;
}, T0 = (e, t, r, i) => {
  const n = r, o = e._zod.def;
  n.type = "object";
  const a = o.keyType, c = a._zod.bag?.patterns;
  if (o.mode === "loose" && c && c.size > 0) {
    const l = xe(o.valueType, t, {
      ...i,
      path: [...i.path, "patternProperties", "*"]
    });
    n.patternProperties = {};
    for (const d of c)
      n.patternProperties[d.source] = l;
  } else
    (t.target === "draft-07" || t.target === "draft-2020-12") && (n.propertyNames = xe(o.keyType, t, {
      ...i,
      path: [...i.path, "propertyNames"]
    })), n.additionalProperties = xe(o.valueType, t, {
      ...i,
      path: [...i.path, "additionalProperties"]
    });
  const u = a._zod.values;
  if (u) {
    const l = [...u].filter((d) => typeof d == "string" || typeof d == "number");
    l.length > 0 && (n.required = l);
  }
}, N0 = (e, t, r, i) => {
  const n = e._zod.def, o = xe(n.innerType, t, i), a = t.seen.get(e);
  t.target === "openapi-3.0" ? (a.ref = n.innerType, r.nullable = !0) : r.anyOf = [o, { type: "null" }];
}, C0 = (e, t, r, i) => {
  const n = e._zod.def;
  xe(n.innerType, t, i);
  const o = t.seen.get(e);
  o.ref = n.innerType;
}, U0 = (e, t, r, i) => {
  const n = e._zod.def;
  xe(n.innerType, t, i);
  const o = t.seen.get(e);
  o.ref = n.innerType, r.default = JSON.parse(JSON.stringify(n.defaultValue));
}, A0 = (e, t, r, i) => {
  const n = e._zod.def;
  xe(n.innerType, t, i);
  const o = t.seen.get(e);
  o.ref = n.innerType, t.io === "input" && (r._prefault = JSON.parse(JSON.stringify(n.defaultValue)));
}, Z0 = (e, t, r, i) => {
  const n = e._zod.def;
  xe(n.innerType, t, i);
  const o = t.seen.get(e);
  o.ref = n.innerType;
  let a;
  try {
    a = n.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  r.default = a;
}, D0 = (e, t, r, i) => {
  const n = e._zod.def, o = t.io === "input" ? n.in._zod.def.type === "transform" ? n.out : n.in : n.out;
  xe(o, t, i);
  const a = t.seen.get(e);
  a.ref = o;
}, j0 = (e, t, r, i) => {
  const n = e._zod.def;
  xe(n.innerType, t, i);
  const o = t.seen.get(e);
  o.ref = n.innerType, r.readOnly = !0;
}, cm = (e, t, r, i) => {
  const n = e._zod.def;
  xe(n.innerType, t, i);
  const o = t.seen.get(e);
  o.ref = n.innerType;
}, P0 = /* @__PURE__ */ $("ZodISODateTime", (e, t) => {
  P$.init(e, t), we.init(e, t);
});
function R0(e) {
  return /* @__PURE__ */ Jb(P0, e);
}
const F0 = /* @__PURE__ */ $("ZodISODate", (e, t) => {
  R$.init(e, t), we.init(e, t);
});
function L0(e) {
  return /* @__PURE__ */ Vb(F0, e);
}
const M0 = /* @__PURE__ */ $("ZodISOTime", (e, t) => {
  F$.init(e, t), we.init(e, t);
});
function B0(e) {
  return /* @__PURE__ */ qb(M0, e);
}
const J0 = /* @__PURE__ */ $("ZodISODuration", (e, t) => {
  L$.init(e, t), we.init(e, t);
});
function V0(e) {
  return /* @__PURE__ */ Wb(J0, e);
}
const q0 = (e, t) => {
  Bp.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (r) => Ny(e, r)
      // enumerable: false,
    },
    flatten: {
      value: (r) => Ty(e, r)
      // enumerable: false,
    },
    addIssue: {
      value: (r) => {
        e.issues.push(r), e.message = JSON.stringify(e.issues, Hi, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (r) => {
        e.issues.push(...r), e.message = JSON.stringify(e.issues, Hi, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return e.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, et = $("ZodError", q0, {
  Parent: Error
}), W0 = /* @__PURE__ */ cs(et), K0 = /* @__PURE__ */ us(et), G0 = /* @__PURE__ */ vi(et), H0 = /* @__PURE__ */ _i(et), X0 = /* @__PURE__ */ Ay(et), Y0 = /* @__PURE__ */ Zy(et), Q0 = /* @__PURE__ */ Dy(et), ek = /* @__PURE__ */ jy(et), tk = /* @__PURE__ */ Py(et), nk = /* @__PURE__ */ Ry(et), rk = /* @__PURE__ */ Fy(et), ik = /* @__PURE__ */ Ly(et), ke = /* @__PURE__ */ $("ZodType", (e, t) => (be.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: br(e, "input"),
    output: br(e, "output")
  }
}), e.toJSONSchema = m0(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...r) => e.clone(zt(t, {
  checks: [
    ...t.checks ?? [],
    ...r.map((i) => typeof i == "function" ? { _zod: { check: i, def: { check: "custom" }, onattach: [] } } : i)
  ]
}), {
  parent: !0
}), e.with = e.check, e.clone = (r, i) => xt(e, r, i), e.brand = () => e, e.register = ((r, i) => (r.add(e, i), e)), e.parse = (r, i) => W0(e, r, i, { callee: e.parse }), e.safeParse = (r, i) => G0(e, r, i), e.parseAsync = async (r, i) => K0(e, r, i, { callee: e.parseAsync }), e.safeParseAsync = async (r, i) => H0(e, r, i), e.spa = e.safeParseAsync, e.encode = (r, i) => X0(e, r, i), e.decode = (r, i) => Y0(e, r, i), e.encodeAsync = async (r, i) => Q0(e, r, i), e.decodeAsync = async (r, i) => ek(e, r, i), e.safeEncode = (r, i) => tk(e, r, i), e.safeDecode = (r, i) => nk(e, r, i), e.safeEncodeAsync = async (r, i) => rk(e, r, i), e.safeDecodeAsync = async (r, i) => ik(e, r, i), e.refine = (r, i) => e.check(ew(r, i)), e.superRefine = (r) => e.check(tw(r)), e.overwrite = (r) => e.check(/* @__PURE__ */ en(r)), e.optional = () => ic(e), e.exactOptional = () => Lk(e), e.nullable = () => oc(e), e.nullish = () => ic(oc(e)), e.nonoptional = (r) => Wk(e, r), e.array = () => Tk(e), e.or = (r) => Uk([e, r]), e.and = (r) => Zk(e, r), e.transform = (r) => ac(e, Rk(r)), e.default = (r) => Jk(e, r), e.prefault = (r) => qk(e, r), e.catch = (r) => Gk(e, r), e.pipe = (r) => ac(e, r), e.readonly = () => Yk(e), e.describe = (r) => {
  const i = e.clone();
  return ln.add(i, { description: r }), i;
}, Object.defineProperty(e, "description", {
  get() {
    return ln.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...r) => {
  if (r.length === 0)
    return ln.get(e);
  const i = e.clone();
  return ln.add(i, r[0]), i;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (r) => r(e), e)), um = /* @__PURE__ */ $("_ZodString", (e, t) => {
  ls.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (i, n, o) => v0(e, i, n);
  const r = e._zod.bag;
  e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...i) => e.check(/* @__PURE__ */ e0(...i)), e.includes = (...i) => e.check(/* @__PURE__ */ r0(...i)), e.startsWith = (...i) => e.check(/* @__PURE__ */ i0(...i)), e.endsWith = (...i) => e.check(/* @__PURE__ */ o0(...i)), e.min = (...i) => e.check(/* @__PURE__ */ $r(...i)), e.max = (...i) => e.check(/* @__PURE__ */ rm(...i)), e.length = (...i) => e.check(/* @__PURE__ */ im(...i)), e.nonempty = (...i) => e.check(/* @__PURE__ */ $r(1, ...i)), e.lowercase = (i) => e.check(/* @__PURE__ */ t0(i)), e.uppercase = (i) => e.check(/* @__PURE__ */ n0(i)), e.trim = () => e.check(/* @__PURE__ */ s0()), e.normalize = (...i) => e.check(/* @__PURE__ */ a0(...i)), e.toLowerCase = () => e.check(/* @__PURE__ */ c0()), e.toUpperCase = () => e.check(/* @__PURE__ */ u0()), e.slugify = () => e.check(/* @__PURE__ */ l0());
}), ok = /* @__PURE__ */ $("ZodString", (e, t) => {
  ls.init(e, t), um.init(e, t), e.email = (r) => e.check(/* @__PURE__ */ wb(ak, r)), e.url = (r) => e.check(/* @__PURE__ */ Ob(sk, r)), e.jwt = (r) => e.check(/* @__PURE__ */ Bb(kk, r)), e.emoji = (r) => e.check(/* @__PURE__ */ Eb(ck, r)), e.guid = (r) => e.check(/* @__PURE__ */ Xs(tc, r)), e.uuid = (r) => e.check(/* @__PURE__ */ Sb(Yn, r)), e.uuidv4 = (r) => e.check(/* @__PURE__ */ Ib(Yn, r)), e.uuidv6 = (r) => e.check(/* @__PURE__ */ zb(Yn, r)), e.uuidv7 = (r) => e.check(/* @__PURE__ */ xb(Yn, r)), e.nanoid = (r) => e.check(/* @__PURE__ */ Tb(uk, r)), e.guid = (r) => e.check(/* @__PURE__ */ Xs(tc, r)), e.cuid = (r) => e.check(/* @__PURE__ */ Nb(lk, r)), e.cuid2 = (r) => e.check(/* @__PURE__ */ Cb(dk, r)), e.ulid = (r) => e.check(/* @__PURE__ */ Ub(fk, r)), e.base64 = (r) => e.check(/* @__PURE__ */ Fb(yk, r)), e.base64url = (r) => e.check(/* @__PURE__ */ Lb($k, r)), e.xid = (r) => e.check(/* @__PURE__ */ Ab(hk, r)), e.ksuid = (r) => e.check(/* @__PURE__ */ Zb(pk, r)), e.ipv4 = (r) => e.check(/* @__PURE__ */ Db(mk, r)), e.ipv6 = (r) => e.check(/* @__PURE__ */ jb(gk, r)), e.cidrv4 = (r) => e.check(/* @__PURE__ */ Pb(vk, r)), e.cidrv6 = (r) => e.check(/* @__PURE__ */ Rb(_k, r)), e.e164 = (r) => e.check(/* @__PURE__ */ Mb(bk, r)), e.datetime = (r) => e.check(R0(r)), e.date = (r) => e.check(L0(r)), e.time = (r) => e.check(B0(r)), e.duration = (r) => e.check(V0(r));
});
function wS(e) {
  return /* @__PURE__ */ kb(ok, e);
}
const we = /* @__PURE__ */ $("ZodStringFormat", (e, t) => {
  $e.init(e, t), um.init(e, t);
}), ak = /* @__PURE__ */ $("ZodEmail", (e, t) => {
  E$.init(e, t), we.init(e, t);
}), tc = /* @__PURE__ */ $("ZodGUID", (e, t) => {
  x$.init(e, t), we.init(e, t);
}), Yn = /* @__PURE__ */ $("ZodUUID", (e, t) => {
  O$.init(e, t), we.init(e, t);
}), sk = /* @__PURE__ */ $("ZodURL", (e, t) => {
  T$.init(e, t), we.init(e, t);
}), ck = /* @__PURE__ */ $("ZodEmoji", (e, t) => {
  N$.init(e, t), we.init(e, t);
}), uk = /* @__PURE__ */ $("ZodNanoID", (e, t) => {
  C$.init(e, t), we.init(e, t);
}), lk = /* @__PURE__ */ $("ZodCUID", (e, t) => {
  U$.init(e, t), we.init(e, t);
}), dk = /* @__PURE__ */ $("ZodCUID2", (e, t) => {
  A$.init(e, t), we.init(e, t);
}), fk = /* @__PURE__ */ $("ZodULID", (e, t) => {
  Z$.init(e, t), we.init(e, t);
}), hk = /* @__PURE__ */ $("ZodXID", (e, t) => {
  D$.init(e, t), we.init(e, t);
}), pk = /* @__PURE__ */ $("ZodKSUID", (e, t) => {
  j$.init(e, t), we.init(e, t);
}), mk = /* @__PURE__ */ $("ZodIPv4", (e, t) => {
  M$.init(e, t), we.init(e, t);
}), gk = /* @__PURE__ */ $("ZodIPv6", (e, t) => {
  B$.init(e, t), we.init(e, t);
}), vk = /* @__PURE__ */ $("ZodCIDRv4", (e, t) => {
  J$.init(e, t), we.init(e, t);
}), _k = /* @__PURE__ */ $("ZodCIDRv6", (e, t) => {
  V$.init(e, t), we.init(e, t);
}), yk = /* @__PURE__ */ $("ZodBase64", (e, t) => {
  q$.init(e, t), we.init(e, t);
}), $k = /* @__PURE__ */ $("ZodBase64URL", (e, t) => {
  K$.init(e, t), we.init(e, t);
}), bk = /* @__PURE__ */ $("ZodE164", (e, t) => {
  G$.init(e, t), we.init(e, t);
}), kk = /* @__PURE__ */ $("ZodJWT", (e, t) => {
  X$.init(e, t), we.init(e, t);
}), lm = /* @__PURE__ */ $("ZodNumber", (e, t) => {
  Qp.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (i, n, o) => _0(e, i, n), e.gt = (i, n) => e.check(/* @__PURE__ */ Qs(i, n)), e.gte = (i, n) => e.check(/* @__PURE__ */ Oi(i, n)), e.min = (i, n) => e.check(/* @__PURE__ */ Oi(i, n)), e.lt = (i, n) => e.check(/* @__PURE__ */ Ys(i, n)), e.lte = (i, n) => e.check(/* @__PURE__ */ xi(i, n)), e.max = (i, n) => e.check(/* @__PURE__ */ xi(i, n)), e.int = (i) => e.check(nc(i)), e.safe = (i) => e.check(nc(i)), e.positive = (i) => e.check(/* @__PURE__ */ Qs(0, i)), e.nonnegative = (i) => e.check(/* @__PURE__ */ Oi(0, i)), e.negative = (i) => e.check(/* @__PURE__ */ Ys(0, i)), e.nonpositive = (i) => e.check(/* @__PURE__ */ xi(0, i)), e.multipleOf = (i, n) => e.check(/* @__PURE__ */ ec(i, n)), e.step = (i, n) => e.check(/* @__PURE__ */ ec(i, n)), e.finite = () => e;
  const r = e._zod.bag;
  e.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5), e.isFinite = !0, e.format = r.format ?? null;
});
function SS(e) {
  return /* @__PURE__ */ Kb(lm, e);
}
const wk = /* @__PURE__ */ $("ZodNumberFormat", (e, t) => {
  Y$.init(e, t), lm.init(e, t);
});
function nc(e) {
  return /* @__PURE__ */ Gb(wk, e);
}
const Sk = /* @__PURE__ */ $("ZodBoolean", (e, t) => {
  Q$.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, i, n) => y0(e, r, i);
});
function IS(e) {
  return /* @__PURE__ */ Hb(Sk, e);
}
const Ik = /* @__PURE__ */ $("ZodAny", (e, t) => {
  eb.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, i, n) => b0();
});
function zS() {
  return /* @__PURE__ */ Xb(Ik);
}
const zk = /* @__PURE__ */ $("ZodUnknown", (e, t) => {
  tb.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, i, n) => k0();
});
function rc() {
  return /* @__PURE__ */ Yb(zk);
}
const xk = /* @__PURE__ */ $("ZodNever", (e, t) => {
  nb.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, i, n) => $0(e, r, i);
});
function Ok(e) {
  return /* @__PURE__ */ Qb(xk, e);
}
const Ek = /* @__PURE__ */ $("ZodArray", (e, t) => {
  rb.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, i, n) => z0(e, r, i, n), e.element = t.element, e.min = (r, i) => e.check(/* @__PURE__ */ $r(r, i)), e.nonempty = (r) => e.check(/* @__PURE__ */ $r(1, r)), e.max = (r, i) => e.check(/* @__PURE__ */ rm(r, i)), e.length = (r, i) => e.check(/* @__PURE__ */ im(r, i)), e.unwrap = () => e.element;
});
function Tk(e, t) {
  return /* @__PURE__ */ d0(Ek, e, t);
}
const Nk = /* @__PURE__ */ $("ZodObject", (e, t) => {
  ob.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, i, n) => x0(e, r, i, n), fe(e, "shape", () => t.shape), e.keyof = () => jk(Object.keys(e._zod.def.shape)), e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: rc() }), e.loose = () => e.clone({ ...e._zod.def, catchall: rc() }), e.strict = () => e.clone({ ...e._zod.def, catchall: Ok() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (r) => Iy(e, r), e.safeExtend = (r) => zy(e, r), e.merge = (r) => xy(e, r), e.pick = (r) => wy(e, r), e.omit = (r) => Sy(e, r), e.partial = (...r) => Oy(dm, e, r[0]), e.required = (...r) => Ey(fm, e, r[0]);
});
function xS(e, t) {
  const r = {
    type: "object",
    shape: e ?? {},
    ...P(t)
  };
  return new Nk(r);
}
const Ck = /* @__PURE__ */ $("ZodUnion", (e, t) => {
  ab.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, i, n) => O0(e, r, i, n), e.options = t.options;
});
function Uk(e, t) {
  return new Ck({
    type: "union",
    options: e,
    ...P(t)
  });
}
const Ak = /* @__PURE__ */ $("ZodIntersection", (e, t) => {
  sb.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, i, n) => E0(e, r, i, n);
});
function Zk(e, t) {
  return new Ak({
    type: "intersection",
    left: e,
    right: t
  });
}
const Dk = /* @__PURE__ */ $("ZodRecord", (e, t) => {
  cb.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, i, n) => T0(e, r, i, n), e.keyType = t.keyType, e.valueType = t.valueType;
});
function OS(e, t, r) {
  return new Dk({
    type: "record",
    keyType: e,
    valueType: t,
    ...P(r)
  });
}
const Yi = /* @__PURE__ */ $("ZodEnum", (e, t) => {
  ub.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (i, n, o) => w0(e, i, n), e.enum = t.entries, e.options = Object.values(t.entries);
  const r = new Set(Object.keys(t.entries));
  e.extract = (i, n) => {
    const o = {};
    for (const a of i)
      if (r.has(a))
        o[a] = t.entries[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new Yi({
      ...t,
      checks: [],
      ...P(n),
      entries: o
    });
  }, e.exclude = (i, n) => {
    const o = { ...t.entries };
    for (const a of i)
      if (r.has(a))
        delete o[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new Yi({
      ...t,
      checks: [],
      ...P(n),
      entries: o
    });
  };
});
function jk(e, t) {
  const r = Array.isArray(e) ? Object.fromEntries(e.map((i) => [i, i])) : e;
  return new Yi({
    type: "enum",
    entries: r,
    ...P(t)
  });
}
const Pk = /* @__PURE__ */ $("ZodTransform", (e, t) => {
  lb.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, i, n) => I0(e, r), e._zod.parse = (r, i) => {
    if (i.direction === "backward")
      throw new jp(e.constructor.name);
    r.addIssue = (o) => {
      if (typeof o == "string")
        r.issues.push(_n(o, r.value, t));
      else {
        const a = o;
        a.fatal && (a.continue = !1), a.code ?? (a.code = "custom"), a.input ?? (a.input = r.value), a.inst ?? (a.inst = e), r.issues.push(_n(a));
      }
    };
    const n = t.transform(r.value, r);
    return n instanceof Promise ? n.then((o) => (r.value = o, r)) : (r.value = n, r);
  };
});
function Rk(e) {
  return new Pk({
    type: "transform",
    transform: e
  });
}
const dm = /* @__PURE__ */ $("ZodOptional", (e, t) => {
  nm.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, i, n) => cm(e, r, i, n), e.unwrap = () => e._zod.def.innerType;
});
function ic(e) {
  return new dm({
    type: "optional",
    innerType: e
  });
}
const Fk = /* @__PURE__ */ $("ZodExactOptional", (e, t) => {
  db.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, i, n) => cm(e, r, i, n), e.unwrap = () => e._zod.def.innerType;
});
function Lk(e) {
  return new Fk({
    type: "optional",
    innerType: e
  });
}
const Mk = /* @__PURE__ */ $("ZodNullable", (e, t) => {
  fb.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, i, n) => N0(e, r, i, n), e.unwrap = () => e._zod.def.innerType;
});
function oc(e) {
  return new Mk({
    type: "nullable",
    innerType: e
  });
}
const Bk = /* @__PURE__ */ $("ZodDefault", (e, t) => {
  hb.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, i, n) => U0(e, r, i, n), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Jk(e, t) {
  return new Bk({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Lp(t);
    }
  });
}
const Vk = /* @__PURE__ */ $("ZodPrefault", (e, t) => {
  pb.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, i, n) => A0(e, r, i, n), e.unwrap = () => e._zod.def.innerType;
});
function qk(e, t) {
  return new Vk({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Lp(t);
    }
  });
}
const fm = /* @__PURE__ */ $("ZodNonOptional", (e, t) => {
  mb.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, i, n) => C0(e, r, i, n), e.unwrap = () => e._zod.def.innerType;
});
function Wk(e, t) {
  return new fm({
    type: "nonoptional",
    innerType: e,
    ...P(t)
  });
}
const Kk = /* @__PURE__ */ $("ZodCatch", (e, t) => {
  gb.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, i, n) => Z0(e, r, i, n), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Gk(e, t) {
  return new Kk({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Hk = /* @__PURE__ */ $("ZodPipe", (e, t) => {
  vb.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, i, n) => D0(e, r, i, n), e.in = t.in, e.out = t.out;
});
function ac(e, t) {
  return new Hk({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const Xk = /* @__PURE__ */ $("ZodReadonly", (e, t) => {
  _b.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, i, n) => j0(e, r, i, n), e.unwrap = () => e._zod.def.innerType;
});
function Yk(e) {
  return new Xk({
    type: "readonly",
    innerType: e
  });
}
const Qk = /* @__PURE__ */ $("ZodCustom", (e, t) => {
  yb.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, i, n) => S0(e, r);
});
function ew(e, t = {}) {
  return /* @__PURE__ */ f0(Qk, e, t);
}
function tw(e) {
  return /* @__PURE__ */ h0(e);
}
var nw = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qn = { exports: {} }, Ei, sc;
function rw() {
  if (sc) return Ei;
  sc = 1;
  var e = 1e3, t = e * 60, r = t * 60, i = r * 24, n = i * 7, o = i * 365.25;
  Ei = function(l, d) {
    d = d || {};
    var f = typeof l;
    if (f === "string" && l.length > 0)
      return a(l);
    if (f === "number" && isFinite(l))
      return d.long ? c(l) : s(l);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(l)
    );
  };
  function a(l) {
    if (l = String(l), !(l.length > 100)) {
      var d = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        l
      );
      if (d) {
        var f = parseFloat(d[1]), h = (d[2] || "ms").toLowerCase();
        switch (h) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return f * o;
          case "weeks":
          case "week":
          case "w":
            return f * n;
          case "days":
          case "day":
          case "d":
            return f * i;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return f * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return f * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return f * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return f;
          default:
            return;
        }
      }
    }
  }
  function s(l) {
    var d = Math.abs(l);
    return d >= i ? Math.round(l / i) + "d" : d >= r ? Math.round(l / r) + "h" : d >= t ? Math.round(l / t) + "m" : d >= e ? Math.round(l / e) + "s" : l + "ms";
  }
  function c(l) {
    var d = Math.abs(l);
    return d >= i ? u(l, d, i, "day") : d >= r ? u(l, d, r, "hour") : d >= t ? u(l, d, t, "minute") : d >= e ? u(l, d, e, "second") : l + " ms";
  }
  function u(l, d, f, h) {
    var v = d >= f * 1.5;
    return Math.round(l / f) + " " + h + (v ? "s" : "");
  }
  return Ei;
}
var Ti, cc;
function iw() {
  if (cc) return Ti;
  cc = 1;
  function e(t) {
    i.debug = i, i.default = i, i.coerce = u, i.disable = s, i.enable = o, i.enabled = c, i.humanize = rw(), i.destroy = l, Object.keys(t).forEach((d) => {
      i[d] = t[d];
    }), i.names = [], i.skips = [], i.formatters = {};
    function r(d) {
      let f = 0;
      for (let h = 0; h < d.length; h++)
        f = (f << 5) - f + d.charCodeAt(h), f |= 0;
      return i.colors[Math.abs(f) % i.colors.length];
    }
    i.selectColor = r;
    function i(d) {
      let f, h = null, v, _;
      function k(...T) {
        if (!k.enabled)
          return;
        const B = k, S = Number(/* @__PURE__ */ new Date()), O = S - (f || S);
        B.diff = O, B.prev = f, B.curr = S, f = S, T[0] = i.coerce(T[0]), typeof T[0] != "string" && T.unshift("%O");
        let U = 0;
        T[0] = T[0].replace(/%([a-zA-Z%])/g, (z, m) => {
          if (z === "%%")
            return "%";
          U++;
          const p = i.formatters[m];
          if (typeof p == "function") {
            const y = T[U];
            z = p.call(B, y), T.splice(U, 1), U--;
          }
          return z;
        }), i.formatArgs.call(B, T), (B.log || i.log).apply(B, T);
      }
      return k.namespace = d, k.useColors = i.useColors(), k.color = i.selectColor(d), k.extend = n, k.destroy = i.destroy, Object.defineProperty(k, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => h !== null ? h : (v !== i.namespaces && (v = i.namespaces, _ = i.enabled(d)), _),
        set: (T) => {
          h = T;
        }
      }), typeof i.init == "function" && i.init(k), k;
    }
    function n(d, f) {
      const h = i(this.namespace + (typeof f > "u" ? ":" : f) + d);
      return h.log = this.log, h;
    }
    function o(d) {
      i.save(d), i.namespaces = d, i.names = [], i.skips = [];
      const f = (typeof d == "string" ? d : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const h of f)
        h[0] === "-" ? i.skips.push(h.slice(1)) : i.names.push(h);
    }
    function a(d, f) {
      let h = 0, v = 0, _ = -1, k = 0;
      for (; h < d.length; )
        if (v < f.length && (f[v] === d[h] || f[v] === "*"))
          f[v] === "*" ? (_ = v, k = h, v++) : (h++, v++);
        else if (_ !== -1)
          v = _ + 1, k++, h = k;
        else
          return !1;
      for (; v < f.length && f[v] === "*"; )
        v++;
      return v === f.length;
    }
    function s() {
      const d = [
        ...i.names,
        ...i.skips.map((f) => "-" + f)
      ].join(",");
      return i.enable(""), d;
    }
    function c(d) {
      for (const f of i.skips)
        if (a(d, f))
          return !1;
      for (const f of i.names)
        if (a(d, f))
          return !0;
      return !1;
    }
    function u(d) {
      return d instanceof Error ? d.stack || d.message : d;
    }
    function l() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return i.enable(i.load()), i;
  }
  return Ti = e, Ti;
}
var uc;
function ow() {
  return uc || (uc = 1, (function(e, t) {
    t.formatArgs = i, t.save = n, t.load = o, t.useColors = r, t.storage = a(), t.destroy = /* @__PURE__ */ (() => {
      let c = !1;
      return () => {
        c || (c = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), t.colors = [
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
      let c;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && (c = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(c[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function i(c) {
      if (c[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + c[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
        return;
      const u = "color: " + this.color;
      c.splice(1, 0, u, "color: inherit");
      let l = 0, d = 0;
      c[0].replace(/%[a-zA-Z%]/g, (f) => {
        f !== "%%" && (l++, f === "%c" && (d = l));
      }), c.splice(d, 0, u);
    }
    t.log = console.debug || console.log || (() => {
    });
    function n(c) {
      try {
        c ? t.storage.setItem("debug", c) : t.storage.removeItem("debug");
      } catch {
      }
    }
    function o() {
      let c;
      try {
        c = t.storage.getItem("debug") || t.storage.getItem("DEBUG");
      } catch {
      }
      return !c && typeof process < "u" && "env" in process && (c = void 0), c;
    }
    function a() {
      try {
        return localStorage;
      } catch {
      }
    }
    e.exports = iw()(t);
    const { formatters: s } = e.exports;
    s.j = function(c) {
      try {
        return JSON.stringify(c);
      } catch (u) {
        return "[UnexpectedJSONParseError]: " + u.message;
      }
    };
  })(Qn, Qn.exports)), Qn.exports;
}
var aw = ow();
const ES = /* @__PURE__ */ Bn(aw);
var er = { exports: {} }, Ni, lc;
function sw() {
  if (lc) return Ni;
  lc = 1;
  var e = 1e3, t = e * 60, r = t * 60, i = r * 24, n = i * 7, o = i * 365.25;
  Ni = function(l, d) {
    d = d || {};
    var f = typeof l;
    if (f === "string" && l.length > 0)
      return a(l);
    if (f === "number" && isFinite(l))
      return d.long ? c(l) : s(l);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(l)
    );
  };
  function a(l) {
    if (l = String(l), !(l.length > 100)) {
      var d = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        l
      );
      if (d) {
        var f = parseFloat(d[1]), h = (d[2] || "ms").toLowerCase();
        switch (h) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return f * o;
          case "weeks":
          case "week":
          case "w":
            return f * n;
          case "days":
          case "day":
          case "d":
            return f * i;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return f * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return f * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return f * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return f;
          default:
            return;
        }
      }
    }
  }
  function s(l) {
    var d = Math.abs(l);
    return d >= i ? Math.round(l / i) + "d" : d >= r ? Math.round(l / r) + "h" : d >= t ? Math.round(l / t) + "m" : d >= e ? Math.round(l / e) + "s" : l + "ms";
  }
  function c(l) {
    var d = Math.abs(l);
    return d >= i ? u(l, d, i, "day") : d >= r ? u(l, d, r, "hour") : d >= t ? u(l, d, t, "minute") : d >= e ? u(l, d, e, "second") : l + " ms";
  }
  function u(l, d, f, h) {
    var v = d >= f * 1.5;
    return Math.round(l / f) + " " + h + (v ? "s" : "");
  }
  return Ni;
}
var Ci, dc;
function cw() {
  if (dc) return Ci;
  dc = 1;
  function e(t) {
    i.debug = i, i.default = i, i.coerce = u, i.disable = s, i.enable = o, i.enabled = c, i.humanize = sw(), i.destroy = l, Object.keys(t).forEach((d) => {
      i[d] = t[d];
    }), i.names = [], i.skips = [], i.formatters = {};
    function r(d) {
      let f = 0;
      for (let h = 0; h < d.length; h++)
        f = (f << 5) - f + d.charCodeAt(h), f |= 0;
      return i.colors[Math.abs(f) % i.colors.length];
    }
    i.selectColor = r;
    function i(d) {
      let f, h = null, v, _;
      function k(...T) {
        if (!k.enabled)
          return;
        const B = k, S = Number(/* @__PURE__ */ new Date()), O = S - (f || S);
        B.diff = O, B.prev = f, B.curr = S, f = S, T[0] = i.coerce(T[0]), typeof T[0] != "string" && T.unshift("%O");
        let U = 0;
        T[0] = T[0].replace(/%([a-zA-Z%])/g, (z, m) => {
          if (z === "%%")
            return "%";
          U++;
          const p = i.formatters[m];
          if (typeof p == "function") {
            const y = T[U];
            z = p.call(B, y), T.splice(U, 1), U--;
          }
          return z;
        }), i.formatArgs.call(B, T), (B.log || i.log).apply(B, T);
      }
      return k.namespace = d, k.useColors = i.useColors(), k.color = i.selectColor(d), k.extend = n, k.destroy = i.destroy, Object.defineProperty(k, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => h !== null ? h : (v !== i.namespaces && (v = i.namespaces, _ = i.enabled(d)), _),
        set: (T) => {
          h = T;
        }
      }), typeof i.init == "function" && i.init(k), k;
    }
    function n(d, f) {
      const h = i(this.namespace + (typeof f > "u" ? ":" : f) + d);
      return h.log = this.log, h;
    }
    function o(d) {
      i.save(d), i.namespaces = d, i.names = [], i.skips = [];
      const f = (typeof d == "string" ? d : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const h of f)
        h[0] === "-" ? i.skips.push(h.slice(1)) : i.names.push(h);
    }
    function a(d, f) {
      let h = 0, v = 0, _ = -1, k = 0;
      for (; h < d.length; )
        if (v < f.length && (f[v] === d[h] || f[v] === "*"))
          f[v] === "*" ? (_ = v, k = h, v++) : (h++, v++);
        else if (_ !== -1)
          v = _ + 1, k++, h = k;
        else
          return !1;
      for (; v < f.length && f[v] === "*"; )
        v++;
      return v === f.length;
    }
    function s() {
      const d = [
        ...i.names,
        ...i.skips.map((f) => "-" + f)
      ].join(",");
      return i.enable(""), d;
    }
    function c(d) {
      for (const f of i.skips)
        if (a(d, f))
          return !1;
      for (const f of i.names)
        if (a(d, f))
          return !0;
      return !1;
    }
    function u(d) {
      return d instanceof Error ? d.stack || d.message : d;
    }
    function l() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return i.enable(i.load()), i;
  }
  return Ci = e, Ci;
}
var fc;
function uw() {
  return fc || (fc = 1, (function(e, t) {
    t.formatArgs = i, t.save = n, t.load = o, t.useColors = r, t.storage = a(), t.destroy = /* @__PURE__ */ (() => {
      let c = !1;
      return () => {
        c || (c = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), t.colors = [
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
      let c;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && (c = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(c[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function i(c) {
      if (c[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + c[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
        return;
      const u = "color: " + this.color;
      c.splice(1, 0, u, "color: inherit");
      let l = 0, d = 0;
      c[0].replace(/%[a-zA-Z%]/g, (f) => {
        f !== "%%" && (l++, f === "%c" && (d = l));
      }), c.splice(d, 0, u);
    }
    t.log = console.debug || console.log || (() => {
    });
    function n(c) {
      try {
        c ? t.storage.setItem("debug", c) : t.storage.removeItem("debug");
      } catch {
      }
    }
    function o() {
      let c;
      try {
        c = t.storage.getItem("debug") || t.storage.getItem("DEBUG");
      } catch {
      }
      return !c && typeof process < "u" && "env" in process && (c = void 0), c;
    }
    function a() {
      try {
        return localStorage;
      } catch {
      }
    }
    e.exports = cw()(t);
    const { formatters: s } = e.exports;
    s.j = function(c) {
      try {
        return JSON.stringify(c);
      } catch (u) {
        return "[UnexpectedJSONParseError]: " + u.message;
      }
    };
  })(er, er.exports)), er.exports;
}
var lw = uw();
const TS = /* @__PURE__ */ Bn(lw), ut = /* @__PURE__ */ Object.create(null);
ut.open = "0";
ut.close = "1";
ut.ping = "2";
ut.pong = "3";
ut.message = "4";
ut.upgrade = "5";
ut.noop = "6";
const ir = /* @__PURE__ */ Object.create(null);
Object.keys(ut).forEach((e) => {
  ir[ut[e]] = e;
});
const Qi = { type: "error", data: "parser error" }, hm = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", pm = typeof ArrayBuffer == "function", mm = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, ds = ({ type: e, data: t }, r, i) => hm && t instanceof Blob ? r ? i(t) : hc(t, i) : pm && (t instanceof ArrayBuffer || mm(t)) ? r ? i(t) : hc(new Blob([t]), i) : i(ut[e] + (t || "")), hc = (e, t) => {
  const r = new FileReader();
  return r.onload = function() {
    const i = r.result.split(",")[1];
    t("b" + (i || ""));
  }, r.readAsDataURL(e);
};
function pc(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let Ui;
function dw(e, t) {
  if (hm && e.data instanceof Blob)
    return e.data.arrayBuffer().then(pc).then(t);
  if (pm && (e.data instanceof ArrayBuffer || mm(e.data)))
    return t(pc(e.data));
  ds(e, !1, (r) => {
    Ui || (Ui = new TextEncoder()), t(Ui.encode(r));
  });
}
const mc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", dn = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < mc.length; e++)
  dn[mc.charCodeAt(e)] = e;
const fw = (e) => {
  let t = e.length * 0.75, r = e.length, i, n = 0, o, a, s, c;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const u = new ArrayBuffer(t), l = new Uint8Array(u);
  for (i = 0; i < r; i += 4)
    o = dn[e.charCodeAt(i)], a = dn[e.charCodeAt(i + 1)], s = dn[e.charCodeAt(i + 2)], c = dn[e.charCodeAt(i + 3)], l[n++] = o << 2 | a >> 4, l[n++] = (a & 15) << 4 | s >> 2, l[n++] = (s & 3) << 6 | c & 63;
  return u;
}, hw = typeof ArrayBuffer == "function", fs = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: gm(e, t)
    };
  const r = e.charAt(0);
  return r === "b" ? {
    type: "message",
    data: pw(e.substring(1), t)
  } : ir[r] ? e.length > 1 ? {
    type: ir[r],
    data: e.substring(1)
  } : {
    type: ir[r]
  } : Qi;
}, pw = (e, t) => {
  if (hw) {
    const r = fw(e);
    return gm(r, t);
  } else
    return { base64: !0, data: e };
}, gm = (e, t) => t === "blob" ? e instanceof Blob ? e : new Blob([e]) : e instanceof ArrayBuffer ? e : e.buffer, vm = "", mw = (e, t) => {
  const r = e.length, i = new Array(r);
  let n = 0;
  e.forEach((o, a) => {
    ds(o, !1, (s) => {
      i[a] = s, ++n === r && t(i.join(vm));
    });
  });
}, gw = (e, t) => {
  const r = e.split(vm), i = [];
  for (let n = 0; n < r.length; n++) {
    const o = fs(r[n], t);
    if (i.push(o), o.type === "error")
      break;
  }
  return i;
};
function vw() {
  return new TransformStream({
    transform(e, t) {
      dw(e, (r) => {
        const i = r.length;
        let n;
        if (i < 126)
          n = new Uint8Array(1), new DataView(n.buffer).setUint8(0, i);
        else if (i < 65536) {
          n = new Uint8Array(3);
          const o = new DataView(n.buffer);
          o.setUint8(0, 126), o.setUint16(1, i);
        } else {
          n = new Uint8Array(9);
          const o = new DataView(n.buffer);
          o.setUint8(0, 127), o.setBigUint64(1, BigInt(i));
        }
        e.data && typeof e.data != "string" && (n[0] |= 128), t.enqueue(n), t.enqueue(r);
      });
    }
  });
}
let Ai;
function tr(e) {
  return e.reduce((t, r) => t + r.length, 0);
}
function nr(e, t) {
  if (e[0].length === t)
    return e.shift();
  const r = new Uint8Array(t);
  let i = 0;
  for (let n = 0; n < t; n++)
    r[n] = e[0][i++], i === e[0].length && (e.shift(), i = 0);
  return e.length && i < e[0].length && (e[0] = e[0].slice(i)), r;
}
function _w(e, t) {
  Ai || (Ai = new TextDecoder());
  const r = [];
  let i = 0, n = -1, o = !1;
  return new TransformStream({
    transform(a, s) {
      for (r.push(a); ; ) {
        if (i === 0) {
          if (tr(r) < 1)
            break;
          const c = nr(r, 1);
          o = (c[0] & 128) === 128, n = c[0] & 127, n < 126 ? i = 3 : n === 126 ? i = 1 : i = 2;
        } else if (i === 1) {
          if (tr(r) < 2)
            break;
          const c = nr(r, 2);
          n = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), i = 3;
        } else if (i === 2) {
          if (tr(r) < 8)
            break;
          const c = nr(r, 8), u = new DataView(c.buffer, c.byteOffset, c.length), l = u.getUint32(0);
          if (l > Math.pow(2, 21) - 1) {
            s.enqueue(Qi);
            break;
          }
          n = l * Math.pow(2, 32) + u.getUint32(4), i = 3;
        } else {
          if (tr(r) < n)
            break;
          const c = nr(r, n);
          s.enqueue(fs(o ? c : Ai.decode(c), t)), i = 0;
        }
        if (n === 0 || n > e) {
          s.enqueue(Qi);
          break;
        }
      }
    }
  });
}
const _m = 4;
function ze(e) {
  if (e) return yw(e);
}
function yw(e) {
  for (var t in ze.prototype)
    e[t] = ze.prototype[t];
  return e;
}
ze.prototype.on = ze.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
ze.prototype.once = function(e, t) {
  function r() {
    this.off(e, r), t.apply(this, arguments);
  }
  return r.fn = t, this.on(e, r), this;
};
ze.prototype.off = ze.prototype.removeListener = ze.prototype.removeAllListeners = ze.prototype.removeEventListener = function(e, t) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var r = this._callbacks["$" + e];
  if (!r) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + e], this;
  for (var i, n = 0; n < r.length; n++)
    if (i = r[n], i === t || i.fn === t) {
      r.splice(n, 1);
      break;
    }
  return r.length === 0 && delete this._callbacks["$" + e], this;
};
ze.prototype.emit = function(e) {
  this._callbacks = this._callbacks || {};
  for (var t = new Array(arguments.length - 1), r = this._callbacks["$" + e], i = 1; i < arguments.length; i++)
    t[i - 1] = arguments[i];
  if (r) {
    r = r.slice(0);
    for (var i = 0, n = r.length; i < n; ++i)
      r[i].apply(this, t);
  }
  return this;
};
ze.prototype.emitReserved = ze.prototype.emit;
ze.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
ze.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const $i = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, r) => r(t, 0), Ge = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), $w = "arraybuffer";
function ym(e, ...t) {
  return t.reduce((r, i) => (e.hasOwnProperty(i) && (r[i] = e[i]), r), {});
}
const bw = Ge.setTimeout, kw = Ge.clearTimeout;
function bi(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = bw.bind(Ge), e.clearTimeoutFn = kw.bind(Ge)) : (e.setTimeoutFn = Ge.setTimeout.bind(Ge), e.clearTimeoutFn = Ge.clearTimeout.bind(Ge));
}
const ww = 1.33;
function Sw(e) {
  return typeof e == "string" ? Iw(e) : Math.ceil((e.byteLength || e.size) * ww);
}
function Iw(e) {
  let t = 0, r = 0;
  for (let i = 0, n = e.length; i < n; i++)
    t = e.charCodeAt(i), t < 128 ? r += 1 : t < 2048 ? r += 2 : t < 55296 || t >= 57344 ? r += 3 : (i++, r += 4);
  return r;
}
function $m() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function zw(e) {
  let t = "";
  for (let r in e)
    e.hasOwnProperty(r) && (t.length && (t += "&"), t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
  return t;
}
function xw(e) {
  let t = {}, r = e.split("&");
  for (let i = 0, n = r.length; i < n; i++) {
    let o = r[i].split("=");
    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
  }
  return t;
}
class Ow extends Error {
  constructor(t, r, i) {
    super(t), this.description = r, this.context = i, this.type = "TransportError";
  }
}
class hs extends ze {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, bi(this, t), this.opts = t, this.query = t.query, this.socket = t.socket, this.supportsBinary = !t.forceBase64;
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
  onError(t, r, i) {
    return super.emitReserved("error", new Ow(t, r, i)), this;
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
  send(t) {
    this.readyState === "open" && this.write(t);
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
  onData(t) {
    const r = fs(t, this.socket.binaryType);
    this.onPacket(r);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(t) {
    this.readyState = "closed", super.emitReserved("close", t);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(t) {
  }
  createUri(t, r = {}) {
    return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(r);
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(t) {
    const r = zw(t);
    return r.length ? "?" + r : "";
  }
}
class Ew extends hs {
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
  pause(t) {
    this.readyState = "pausing";
    const r = () => {
      this.readyState = "paused", t();
    };
    if (this._polling || !this.writable) {
      let i = 0;
      this._polling && (i++, this.once("pollComplete", function() {
        --i || r();
      })), this.writable || (i++, this.once("drain", function() {
        --i || r();
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
  onData(t) {
    const r = (i) => {
      if (this.readyState === "opening" && i.type === "open" && this.onOpen(), i.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(i);
    };
    gw(t, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(t) {
    this.writable = !1, mw(t, (r) => {
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
    const t = this.opts.secure ? "https" : "http", r = this.query || {};
    return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = $m()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(t, r);
  }
}
let bm = !1;
try {
  bm = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Tw = bm;
function Nw() {
}
class Cw extends Ew {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(t) {
    if (super(t), typeof location < "u") {
      const r = location.protocol === "https:";
      let i = location.port;
      i || (i = r ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || i !== t.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(t, r) {
    const i = this.request({
      method: "POST",
      data: t
    });
    i.on("success", r), i.on("error", (n, o) => {
      this.onError("xhr post error", n, o);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)), t.on("error", (r, i) => {
      this.onError("xhr poll error", r, i);
    }), this.pollXhr = t;
  }
}
class ct extends ze {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, r, i) {
    super(), this.createRequest = t, bi(this, i), this._opts = i, this._method = i.method || "GET", this._uri = r, this._data = i.data !== void 0 ? i.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var t;
    const r = ym(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    r.xdomain = !!this._opts.xd;
    const i = this._xhr = this.createRequest(r);
    try {
      i.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
          for (let n in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(n) && i.setRequestHeader(n, this._opts.extraHeaders[n]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          i.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        i.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (t = this._opts.cookieJar) === null || t === void 0 || t.addCookies(i), "withCredentials" in i && (i.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (i.timeout = this._opts.requestTimeout), i.onreadystatechange = () => {
        var n;
        i.readyState === 3 && ((n = this._opts.cookieJar) === null || n === void 0 || n.parseCookies(
          // @ts-ignore
          i.getResponseHeader("set-cookie")
        )), i.readyState === 4 && (i.status === 200 || i.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof i.status == "number" ? i.status : 0);
        }, 0));
      }, i.send(this._data);
    } catch (n) {
      this.setTimeoutFn(() => {
        this._onError(n);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = ct.requestsCount++, ct.requests[this._index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(t) {
    this.emitReserved("error", t, this._xhr), this._cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(t) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (this._xhr.onreadystatechange = Nw, t)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete ct.requests[this._index], this._xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const t = this._xhr.responseText;
    t !== null && (this.emitReserved("data", t), this.emitReserved("success"), this._cleanup());
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
ct.requestsCount = 0;
ct.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", gc);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in Ge ? "pagehide" : "unload";
    addEventListener(e, gc, !1);
  }
}
function gc() {
  for (let e in ct.requests)
    ct.requests.hasOwnProperty(e) && ct.requests[e].abort();
}
const Uw = (function() {
  const e = km({
    xdomain: !1
  });
  return e && e.responseType !== null;
})();
class Aw extends Cw {
  constructor(t) {
    super(t);
    const r = t && t.forceBase64;
    this.supportsBinary = Uw && !r;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new ct(km, this.uri(), t);
  }
}
function km(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || Tw))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new Ge[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const wm = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Zw extends hs {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(), r = this.opts.protocols, i = wm ? {} : ym(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(t, r, i);
    } catch (n) {
      return this.emitReserved("error", n);
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
    }, this.ws.onclose = (t) => this.onClose({
      description: "websocket connection closed",
      context: t
    }), this.ws.onmessage = (t) => this.onData(t.data), this.ws.onerror = (t) => this.onError("websocket error", t);
  }
  write(t) {
    this.writable = !1;
    for (let r = 0; r < t.length; r++) {
      const i = t[r], n = r === t.length - 1;
      ds(i, this.supportsBinary, (o) => {
        try {
          this.doWrite(i, o);
        } catch {
        }
        n && $i(() => {
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
    const t = this.opts.secure ? "wss" : "ws", r = this.query || {};
    return this.opts.timestampRequests && (r[this.opts.timestampParam] = $m()), this.supportsBinary || (r.b64 = 1), this.createUri(t, r);
  }
}
const Zi = Ge.WebSocket || Ge.MozWebSocket;
class Dw extends Zw {
  createSocket(t, r, i) {
    return wm ? new Zi(t, r, i) : r ? new Zi(t, r) : new Zi(t);
  }
  doWrite(t, r) {
    this.ws.send(r);
  }
}
class jw extends hs {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (t) {
      return this.emitReserved("error", t);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((t) => {
      this.onError("webtransport error", t);
    }), this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((t) => {
        const r = _w(Number.MAX_SAFE_INTEGER, this.socket.binaryType), i = t.readable.pipeThrough(r).getReader(), n = vw();
        n.readable.pipeTo(t.writable), this._writer = n.writable.getWriter();
        const o = () => {
          i.read().then(({ done: s, value: c }) => {
            s || (this.onPacket(c), o());
          }).catch((s) => {
          });
        };
        o();
        const a = { type: "open" };
        this.query.sid && (a.data = `{"sid":"${this.query.sid}"}`), this._writer.write(a).then(() => this.onOpen());
      });
    });
  }
  write(t) {
    this.writable = !1;
    for (let r = 0; r < t.length; r++) {
      const i = t[r], n = r === t.length - 1;
      this._writer.write(i).then(() => {
        n && $i(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t;
    (t = this._transport) === null || t === void 0 || t.close();
  }
}
const Pw = {
  websocket: Dw,
  webtransport: jw,
  polling: Aw
}, Rw = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Fw = [
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
function eo(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const t = e, r = e.indexOf("["), i = e.indexOf("]");
  r != -1 && i != -1 && (e = e.substring(0, r) + e.substring(r, i).replace(/:/g, ";") + e.substring(i, e.length));
  let n = Rw.exec(e || ""), o = {}, a = 14;
  for (; a--; )
    o[Fw[a]] = n[a] || "";
  return r != -1 && i != -1 && (o.source = t, o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":"), o.authority = o.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), o.ipv6uri = !0), o.pathNames = Lw(o, o.path), o.queryKey = Mw(o, o.query), o;
}
function Lw(e, t) {
  const r = /\/{2,9}/g, i = t.replace(r, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && i.splice(0, 1), t.slice(-1) == "/" && i.splice(i.length - 1, 1), i;
}
function Mw(e, t) {
  const r = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, n, o) {
    n && (r[n] = o);
  }), r;
}
const to = typeof addEventListener == "function" && typeof removeEventListener == "function", or = [];
to && addEventListener("offline", () => {
  or.forEach((e) => e());
}, !1);
class yt extends ze {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, r) {
    if (super(), this.binaryType = $w, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (r = t, t = null), t) {
      const i = eo(t);
      r.hostname = i.host, r.secure = i.protocol === "https" || i.protocol === "wss", r.port = i.port, i.query && (r.query = i.query);
    } else r.host && (r.hostname = eo(r.host).host);
    bi(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, r.transports.forEach((i) => {
      const n = i.prototype.name;
      this.transports.push(n), this._transportsByName[n] = i;
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
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = xw(this.opts.query)), to && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, or.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(t) {
    const r = Object.assign({}, this.opts.query);
    r.EIO = _m, r.transport = t, this.id && (r.sid = this.id);
    const i = Object.assign({}, this.opts, {
      query: r,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[t]);
    return new this._transportsByName[t](i);
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
    const t = this.opts.rememberUpgrade && yt.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const r = this.createTransport(t);
    r.open(), this.setTransport(r);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (r) => this._onClose("transport close", r));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", yt.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(t) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
          break;
        case "error":
          const r = new Error("server error");
          r.code = t.data, this._onError(r);
          break;
        case "message":
          this.emitReserved("data", t.data), this.emitReserved("message", t.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(t) {
    this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this._pingInterval = t.pingInterval, this._pingTimeout = t.pingTimeout, this._maxPayload = t.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const t = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + t, this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, t), this.opts.autoUnref && this._pingTimeoutTimer.unref();
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
      const t = this._getWritablePackets();
      this.transport.send(t), this._prevBufferLen = t.length, this.emitReserved("flush");
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
    for (let i = 0; i < this.writeBuffer.length; i++) {
      const n = this.writeBuffer[i].data;
      if (n && (r += Sw(n)), i > 0 && r > this._maxPayload)
        return this.writeBuffer.slice(0, i);
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
    const t = Date.now() > this._pingTimeoutTime;
    return t && (this._pingTimeoutTime = 0, $i(() => {
      this._onClose("ping timeout");
    }, this.setTimeoutFn)), t;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(t, r, i) {
    return this._sendPacket("message", t, r, i), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(t, r, i) {
    return this._sendPacket("message", t, r, i), this;
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
  _sendPacket(t, r, i, n) {
    if (typeof r == "function" && (n = r, r = void 0), typeof i == "function" && (n = i, i = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    i = i || {}, i.compress = i.compress !== !1;
    const o = {
      type: t,
      data: r,
      options: i
    };
    this.emitReserved("packetCreate", o), this.writeBuffer.push(o), n && this.once("flush", n), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const t = () => {
      this._onClose("forced close"), this.transport.close();
    }, r = () => {
      this.off("upgrade", r), this.off("upgradeError", r), t();
    }, i = () => {
      this.once("upgrade", r), this.once("upgradeError", r);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? i() : t();
    }) : this.upgrading ? i() : t()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(t) {
    if (yt.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", t), this._onClose("transport error", t);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(t, r) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), to && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const i = or.indexOf(this._offlineEventListener);
        i !== -1 && or.splice(i, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, r), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
yt.protocol = _m;
class Bw extends yt {
  constructor() {
    super(...arguments), this._upgrades = [];
  }
  onOpen() {
    if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
      for (let t = 0; t < this._upgrades.length; t++)
        this._probe(this._upgrades[t]);
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(t) {
    let r = this.createTransport(t), i = !1;
    yt.priorWebsocketSuccess = !1;
    const n = () => {
      i || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (d) => {
        if (!i)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", r), !r)
              return;
            yt.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
              i || this.readyState !== "closed" && (l(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = !1, this.flush());
            });
          } else {
            const f = new Error("probe error");
            f.transport = r.name, this.emitReserved("upgradeError", f);
          }
      }));
    };
    function o() {
      i || (i = !0, l(), r.close(), r = null);
    }
    const a = (d) => {
      const f = new Error("probe error: " + d);
      f.transport = r.name, o(), this.emitReserved("upgradeError", f);
    };
    function s() {
      a("transport closed");
    }
    function c() {
      a("socket closed");
    }
    function u(d) {
      r && d.name !== r.name && o();
    }
    const l = () => {
      r.removeListener("open", n), r.removeListener("error", a), r.removeListener("close", s), this.off("close", c), this.off("upgrading", u);
    };
    r.once("open", n), r.once("error", a), r.once("close", s), this.once("close", c), this.once("upgrading", u), this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn(() => {
      i || r.open();
    }, 200) : r.open();
  }
  onHandshake(t) {
    this._upgrades = this._filterUpgrades(t.upgrades), super.onHandshake(t);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(t) {
    const r = [];
    for (let i = 0; i < t.length; i++)
      ~this.transports.indexOf(t[i]) && r.push(t[i]);
    return r;
  }
}
let Jw = class extends Bw {
  constructor(t, r = {}) {
    const i = typeof t == "object" ? t : r;
    (!i.transports || i.transports && typeof i.transports[0] == "string") && (i.transports = (i.transports || ["polling", "websocket", "webtransport"]).map((n) => Pw[n]).filter((n) => !!n)), super(t, i);
  }
};
function Vw(e, t = "", r) {
  let i = e;
  r = r || typeof location < "u" && location, e == null && (e = r.protocol + "//" + r.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = r.protocol + e : e = r.host + e), /^(https?|wss?):\/\//.test(e) || (typeof r < "u" ? e = r.protocol + "//" + e : e = "https://" + e), i = eo(e)), i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")), i.path = i.path || "/";
  const o = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
  return i.id = i.protocol + "://" + o + ":" + i.port + t, i.href = i.protocol + "://" + o + (r && r.port === i.port ? "" : ":" + i.port), i;
}
const qw = typeof ArrayBuffer == "function", Ww = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Sm = Object.prototype.toString, Kw = typeof Blob == "function" || typeof Blob < "u" && Sm.call(Blob) === "[object BlobConstructor]", Gw = typeof File == "function" || typeof File < "u" && Sm.call(File) === "[object FileConstructor]";
function ps(e) {
  return qw && (e instanceof ArrayBuffer || Ww(e)) || Kw && e instanceof Blob || Gw && e instanceof File;
}
function ar(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let r = 0, i = e.length; r < i; r++)
      if (ar(e[r]))
        return !0;
    return !1;
  }
  if (ps(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return ar(e.toJSON(), !0);
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && ar(e[r]))
      return !0;
  return !1;
}
function Hw(e) {
  const t = [], r = e.data, i = e;
  return i.data = no(r, t), i.attachments = t.length, { packet: i, buffers: t };
}
function no(e, t) {
  if (!e)
    return e;
  if (ps(e)) {
    const r = { _placeholder: !0, num: t.length };
    return t.push(e), r;
  } else if (Array.isArray(e)) {
    const r = new Array(e.length);
    for (let i = 0; i < e.length; i++)
      r[i] = no(e[i], t);
    return r;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const r = {};
    for (const i in e)
      Object.prototype.hasOwnProperty.call(e, i) && (r[i] = no(e[i], t));
    return r;
  }
  return e;
}
function Xw(e, t) {
  return e.data = ro(e.data, t), delete e.attachments, e;
}
function ro(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let r = 0; r < e.length; r++)
      e[r] = ro(e[r], t);
  else if (typeof e == "object")
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (e[r] = ro(e[r], t));
  return e;
}
const Im = [
  "connect",
  // used on the client side
  "connect_error",
  // used on the client side
  "disconnect",
  // used on both sides
  "disconnecting",
  // used on the server side
  "newListener",
  // used by the Node.js EventEmitter
  "removeListener"
  // used by the Node.js EventEmitter
], Yw = 5;
var ee;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(ee || (ee = {}));
class Qw {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(t) {
    this.replacer = t;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(t) {
    return (t.type === ee.EVENT || t.type === ee.ACK) && ar(t) ? this.encodeAsBinary({
      type: t.type === ee.EVENT ? ee.BINARY_EVENT : ee.BINARY_ACK,
      nsp: t.nsp,
      data: t.data,
      id: t.id
    }) : [this.encodeAsString(t)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(t) {
    let r = "" + t.type;
    return (t.type === ee.BINARY_EVENT || t.type === ee.BINARY_ACK) && (r += t.attachments + "-"), t.nsp && t.nsp !== "/" && (r += t.nsp + ","), t.id != null && (r += t.id), t.data != null && (r += JSON.stringify(t.data, this.replacer)), r;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const r = Hw(t), i = this.encodeAsString(r.packet), n = r.buffers;
    return n.unshift(i), n;
  }
}
class ms extends ze {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(t) {
    super(), this.reviver = t;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(t) {
    let r;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      r = this.decodeString(t);
      const i = r.type === ee.BINARY_EVENT;
      i || r.type === ee.BINARY_ACK ? (r.type = i ? ee.EVENT : ee.ACK, this.reconstructor = new e1(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
    } else if (ps(t) || t.base64)
      if (this.reconstructor)
        r = this.reconstructor.takeBinaryData(t), r && (this.reconstructor = null, super.emitReserved("decoded", r));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + t);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(t) {
    let r = 0;
    const i = {
      type: Number(t.charAt(0))
    };
    if (ee[i.type] === void 0)
      throw new Error("unknown packet type " + i.type);
    if (i.type === ee.BINARY_EVENT || i.type === ee.BINARY_ACK) {
      const o = r + 1;
      for (; t.charAt(++r) !== "-" && r != t.length; )
        ;
      const a = t.substring(o, r);
      if (a != Number(a) || t.charAt(r) !== "-")
        throw new Error("Illegal attachments");
      i.attachments = Number(a);
    }
    if (t.charAt(r + 1) === "/") {
      const o = r + 1;
      for (; ++r && !(t.charAt(r) === "," || r === t.length); )
        ;
      i.nsp = t.substring(o, r);
    } else
      i.nsp = "/";
    const n = t.charAt(r + 1);
    if (n !== "" && Number(n) == n) {
      const o = r + 1;
      for (; ++r; ) {
        const a = t.charAt(r);
        if (a == null || Number(a) != a) {
          --r;
          break;
        }
        if (r === t.length)
          break;
      }
      i.id = Number(t.substring(o, r + 1));
    }
    if (t.charAt(++r)) {
      const o = this.tryParse(t.substr(r));
      if (ms.isPayloadValid(i.type, o))
        i.data = o;
      else
        throw new Error("invalid payload");
    }
    return i;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, r) {
    switch (t) {
      case ee.CONNECT:
        return kr(r);
      case ee.DISCONNECT:
        return r === void 0;
      case ee.CONNECT_ERROR:
        return typeof r == "string" || kr(r);
      case ee.EVENT:
      case ee.BINARY_EVENT:
        return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && Im.indexOf(r[0]) === -1);
      case ee.ACK:
      case ee.BINARY_ACK:
        return Array.isArray(r);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class e1 {
  constructor(t) {
    this.packet = t, this.buffers = [], this.reconPack = t;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(t) {
    if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
      const r = Xw(this.reconPack, this.buffers);
      return this.finishedReconstruction(), r;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
function t1(e) {
  return typeof e == "string";
}
const n1 = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
};
function r1(e) {
  return e === void 0 || n1(e);
}
function kr(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function i1(e, t) {
  switch (e) {
    case ee.CONNECT:
      return t === void 0 || kr(t);
    case ee.DISCONNECT:
      return t === void 0;
    case ee.EVENT:
      return Array.isArray(t) && (typeof t[0] == "number" || typeof t[0] == "string" && Im.indexOf(t[0]) === -1);
    case ee.ACK:
      return Array.isArray(t);
    case ee.CONNECT_ERROR:
      return typeof t == "string" || kr(t);
    default:
      return !1;
  }
}
function o1(e) {
  return t1(e.nsp) && r1(e.id) && i1(e.type, e.data);
}
const a1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, Decoder: ms, Encoder: Qw, get PacketType() {
  return ee;
}, isPacketValid: o1, protocol: Yw }, Symbol.toStringTag, { value: "Module" }));
function it(e, t, r) {
  return e.on(t, r), function() {
    e.off(t, r);
  };
}
const s1 = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class zm extends ze {
  /**
   * `Socket` constructor.
   */
  constructor(t, r, i) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = r, i && i.auth && (this.auth = i.auth), this._opts = Object.assign({}, i), this.io._autoConnect && this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const t = this.io;
    this.subs = [
      it(t, "open", this.onopen.bind(this)),
      it(t, "packet", this.onpacket.bind(this)),
      it(t, "error", this.onerror.bind(this)),
      it(t, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(t, ...r) {
    var i, n, o;
    if (s1.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (r.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(r), this;
    const a = {
      type: ee.EVENT,
      data: r
    };
    if (a.options = {}, a.options.compress = this.flags.compress !== !1, typeof r[r.length - 1] == "function") {
      const l = this.ids++, d = r.pop();
      this._registerAckCallback(l, d), a.id = l;
    }
    const s = (n = (i = this.io.engine) === null || i === void 0 ? void 0 : i.transport) === null || n === void 0 ? void 0 : n.writable, c = this.connected && !(!((o = this.io.engine) === null || o === void 0) && o._hasPingExpired());
    return this.flags.volatile && !s || (c ? (this.notifyOutgoingListeners(a), this.packet(a)) : this.sendBuffer.push(a)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(t, r) {
    var i;
    const n = (i = this.flags.timeout) !== null && i !== void 0 ? i : this._opts.ackTimeout;
    if (n === void 0) {
      this.acks[t] = r;
      return;
    }
    const o = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let s = 0; s < this.sendBuffer.length; s++)
        this.sendBuffer[s].id === t && this.sendBuffer.splice(s, 1);
      r.call(this, new Error("operation has timed out"));
    }, n), a = (...s) => {
      this.io.clearTimeoutFn(o), r.apply(this, s);
    };
    a.withError = !0, this.acks[t] = a;
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(t, ...r) {
    return new Promise((i, n) => {
      const o = (a, s) => a ? n(a) : i(s);
      o.withError = !0, r.push(o), this.emit(t, ...r);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(t) {
    let r;
    typeof t[t.length - 1] == "function" && (r = t.pop());
    const i = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    t.push((n, ...o) => (this._queue[0], n !== null ? i.tryCount > this._opts.retries && (this._queue.shift(), r && r(n)) : (this._queue.shift(), r && r(null, ...o)), i.pending = !1, this._drainQueue())), this._queue.push(i), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const r = this._queue[0];
    r.pending && !t || (r.pending = !0, r.tryCount++, this.flags = r.flags, this.emit.apply(this, r.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(t) {
    t.nsp = this.nsp, this.io._packet(t);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((t) => {
      this._sendConnectPacket(t);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(t) {
    this.packet({
      type: ee.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t) : t
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(t, r) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", t, r), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((i) => String(i.id) === t)) {
        const i = this.acks[t];
        delete this.acks[t], i.withError && i.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case ee.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case ee.EVENT:
        case ee.BINARY_EVENT:
          this.onevent(t);
          break;
        case ee.ACK:
        case ee.BINARY_ACK:
          this.onack(t);
          break;
        case ee.DISCONNECT:
          this.ondisconnect();
          break;
        case ee.CONNECT_ERROR:
          this.destroy();
          const i = new Error(t.data.message);
          i.data = t.data.data, this.emitReserved("connect_error", i);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(t) {
    const r = t.data || [];
    t.id != null && r.push(this.ack(t.id)), this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const r = this._anyListeners.slice();
      for (const i of r)
        i.apply(this, t);
    }
    super.emit.apply(this, t), this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(t) {
    const r = this;
    let i = !1;
    return function(...n) {
      i || (i = !0, r.packet({
        type: ee.ACK,
        id: t,
        data: n
      }));
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(t) {
    const r = this.acks[t.id];
    typeof r == "function" && (delete this.acks[t.id], r.withError && t.data.unshift(null), r.apply(this, t.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(t, r) {
    this.id = t, this.recovered = r && this._pid === r, this._pid = r, this.connected = !0, this.emitBuffered(), this._drainQueue(!0), this.emitReserved("connect");
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)), this.receiveBuffer = [], this.sendBuffer.forEach((t) => {
      this.notifyOutgoingListeners(t), this.packet(t);
    }), this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), this.subs = void 0), this.io._destroy(this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    return this.connected && this.packet({ type: ee.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(t) {
    return this.flags.compress = t, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(t) {
    return this.flags.timeout = t, this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(t) {
    if (!this._anyListeners)
      return this;
    if (t) {
      const r = this._anyListeners;
      for (let i = 0; i < r.length; i++)
        if (t === r[i])
          return r.splice(i, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners)
      return this;
    if (t) {
      const r = this._anyOutgoingListeners;
      for (let i = 0; i < r.length; i++)
        if (t === r[i])
          return r.splice(i, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const r = this._anyOutgoingListeners.slice();
      for (const i of r)
        i.apply(this, t.data);
    }
  }
}
function tn(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
tn.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), r = Math.floor(t * this.jitter * e);
    e = (Math.floor(t * 10) & 1) == 0 ? e - r : e + r;
  }
  return Math.min(e, this.max) | 0;
};
tn.prototype.reset = function() {
  this.attempts = 0;
};
tn.prototype.setMin = function(e) {
  this.ms = e;
};
tn.prototype.setMax = function(e) {
  this.max = e;
};
tn.prototype.setJitter = function(e) {
  this.jitter = e;
};
class io extends ze {
  constructor(t, r) {
    var i;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (r = t, t = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, bi(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((i = r.randomizationFactor) !== null && i !== void 0 ? i : 0.5), this.backoff = new tn({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = t;
    const n = r.parser || a1;
    this.encoder = new n.Encoder(), this.decoder = new n.Decoder(), this._autoConnect = r.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length ? (this._reconnection = !!t, t || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this);
  }
  reconnectionDelay(t) {
    var r;
    return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t, (r = this.backoff) === null || r === void 0 || r.setMin(t), this);
  }
  randomizationFactor(t) {
    var r;
    return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t, (r = this.backoff) === null || r === void 0 || r.setJitter(t), this);
  }
  reconnectionDelayMax(t) {
    var r;
    return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, (r = this.backoff) === null || r === void 0 || r.setMax(t), this);
  }
  timeout(t) {
    return arguments.length ? (this._timeout = t, this) : this._timeout;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(t) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Jw(this.uri, this.opts);
    const r = this.engine, i = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const n = it(r, "open", function() {
      i.onopen(), t && t();
    }), o = (s) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", s), t ? t(s) : this.maybeReconnectOnOpen();
    }, a = it(r, "error", o);
    if (this._timeout !== !1) {
      const s = this._timeout, c = this.setTimeoutFn(() => {
        n(), o(new Error("timeout")), r.close();
      }, s);
      this.opts.autoUnref && c.unref(), this.subs.push(() => {
        this.clearTimeoutFn(c);
      });
    }
    return this.subs.push(n), this.subs.push(a), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(t) {
    return this.open(t);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const t = this.engine;
    this.subs.push(
      it(t, "ping", this.onping.bind(this)),
      it(t, "data", this.ondata.bind(this)),
      it(t, "error", this.onerror.bind(this)),
      it(t, "close", this.onclose.bind(this)),
      // @ts-ignore
      it(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (r) {
      this.onclose("parse error", r);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(t) {
    $i(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(t) {
    this.emitReserved("error", t);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(t, r) {
    let i = this.nsps[t];
    return i ? this._autoConnect && !i.active && i.connect() : (i = new zm(this, t, r), this.nsps[t] = i), i;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(t) {
    const r = Object.keys(this.nsps);
    for (const i of r)
      if (this.nsps[i].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(t) {
    const r = this.encoder.encode(t);
    for (let i = 0; i < r.length; i++)
      this.engine.write(r[i], t.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((t) => t()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close");
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called when:
   *
   * - the low-level engine is closed
   * - the parser encountered a badly formatted packet
   * - all sockets are disconnected
   *
   * @private
   */
  onclose(t, r) {
    var i;
    this.cleanup(), (i = this.engine) === null || i === void 0 || i.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, r), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const r = this.backoff.duration();
      this._reconnecting = !0;
      const i = this.setTimeoutFn(() => {
        t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open((n) => {
          n ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", n)) : t.onreconnect();
        }));
      }, r);
      this.opts.autoUnref && i.unref(), this.subs.push(() => {
        this.clearTimeoutFn(i);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const t = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t);
  }
}
const on = {};
function Di(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const r = Vw(e, t.path || "/socket.io"), i = r.source, n = r.id, o = r.path, a = on[n] && o in on[n].nsps, s = t.forceNew || t["force new connection"] || t.multiplex === !1 || a;
  let c;
  return s ? c = new io(i, t) : (on[n] || (on[n] = new io(i, t)), c = on[n]), r.query && !t.query && (t.query = r.queryKey), c.socket(r.path, t);
}
Object.assign(Di, {
  Manager: io,
  Socket: zm,
  io: Di,
  connect: Di
});
function yn(e) {
  "@babel/helpers - typeof";
  return yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yn(e);
}
var at = Uint8Array, qe = Uint16Array, gs = Int32Array, vs = new at([
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
]), _s = new at([
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
]), vc = new at([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), xm = function(e, t) {
  for (var r = new qe(31), i = 0; i < 31; ++i)
    r[i] = t += 1 << e[i - 1];
  for (var n = new gs(r[30]), i = 1; i < 30; ++i)
    for (var o = r[i]; o < r[i + 1]; ++o)
      n[o] = o - r[i] << 5 | i;
  return { b: r, r: n };
}, Om = xm(vs, 2), c1 = Om.b, oo = Om.r;
c1[28] = 258, oo[258] = 28;
var u1 = xm(_s, 0), _c = u1.r, ao = new qe(32768);
for (var _e = 0; _e < 32768; ++_e) {
  var vt = (_e & 43690) >> 1 | (_e & 21845) << 1;
  vt = (vt & 52428) >> 2 | (vt & 13107) << 2, vt = (vt & 61680) >> 4 | (vt & 3855) << 4, ao[_e] = ((vt & 65280) >> 8 | (vt & 255) << 8) >> 1;
}
var fn = (function(e, t, r) {
  for (var i = e.length, n = 0, o = new qe(t); n < i; ++n)
    e[n] && ++o[e[n] - 1];
  var a = new qe(t);
  for (n = 1; n < t; ++n)
    a[n] = a[n - 1] + o[n - 1] << 1;
  var s;
  if (r) {
    s = new qe(1 << t);
    var c = 15 - t;
    for (n = 0; n < i; ++n)
      if (e[n])
        for (var u = n << 4 | e[n], l = t - e[n], d = a[e[n] - 1]++ << l, f = d | (1 << l) - 1; d <= f; ++d)
          s[ao[d] >> c] = u;
  } else
    for (s = new qe(i), n = 0; n < i; ++n)
      e[n] && (s[n] = ao[a[e[n] - 1]++] >> 15 - e[n]);
  return s;
}), Zt = new at(288);
for (var _e = 0; _e < 144; ++_e)
  Zt[_e] = 8;
for (var _e = 144; _e < 256; ++_e)
  Zt[_e] = 9;
for (var _e = 256; _e < 280; ++_e)
  Zt[_e] = 7;
for (var _e = 280; _e < 288; ++_e)
  Zt[_e] = 8;
var wr = new at(32);
for (var _e = 0; _e < 32; ++_e)
  wr[_e] = 5;
var l1 = /* @__PURE__ */ fn(Zt, 9, 0), d1 = /* @__PURE__ */ fn(wr, 5, 0), Em = function(e) {
  return (e + 7) / 8 | 0;
}, f1 = function(e, t, r) {
  return (r == null || r > e.length) && (r = e.length), new at(e.subarray(t, r));
}, dt = function(e, t, r) {
  r <<= t & 7;
  var i = t / 8 | 0;
  e[i] |= r, e[i + 1] |= r >> 8;
}, an = function(e, t, r) {
  r <<= t & 7;
  var i = t / 8 | 0;
  e[i] |= r, e[i + 1] |= r >> 8, e[i + 2] |= r >> 16;
}, ji = function(e, t) {
  for (var r = [], i = 0; i < e.length; ++i)
    e[i] && r.push({ s: i, f: e[i] });
  var n = r.length, o = r.slice();
  if (!n)
    return { t: Nm, l: 0 };
  if (n == 1) {
    var a = new at(r[0].s + 1);
    return a[r[0].s] = 1, { t: a, l: 1 };
  }
  r.sort(function(U, R) {
    return U.f - R.f;
  }), r.push({ s: -1, f: 25001 });
  var s = r[0], c = r[1], u = 0, l = 1, d = 2;
  for (r[0] = { s: -1, f: s.f + c.f, l: s, r: c }; l != n - 1; )
    s = r[r[u].f < r[d].f ? u++ : d++], c = r[u != l && r[u].f < r[d].f ? u++ : d++], r[l++] = { s: -1, f: s.f + c.f, l: s, r: c };
  for (var f = o[0].s, i = 1; i < n; ++i)
    o[i].s > f && (f = o[i].s);
  var h = new qe(f + 1), v = so(r[l - 1], h, 0);
  if (v > t) {
    var i = 0, _ = 0, k = v - t, T = 1 << k;
    for (o.sort(function(R, z) {
      return h[z.s] - h[R.s] || R.f - z.f;
    }); i < n; ++i) {
      var B = o[i].s;
      if (h[B] > t)
        _ += T - (1 << v - h[B]), h[B] = t;
      else
        break;
    }
    for (_ >>= k; _ > 0; ) {
      var S = o[i].s;
      h[S] < t ? _ -= 1 << t - h[S]++ - 1 : ++i;
    }
    for (; i >= 0 && _; --i) {
      var O = o[i].s;
      h[O] == t && (--h[O], ++_);
    }
    v = t;
  }
  return { t: new at(h), l: v };
}, so = function(e, t, r) {
  return e.s == -1 ? Math.max(so(e.l, t, r + 1), so(e.r, t, r + 1)) : t[e.s] = r;
}, yc = function(e) {
  for (var t = e.length; t && !e[--t]; )
    ;
  for (var r = new qe(++t), i = 0, n = e[0], o = 1, a = function(c) {
    r[i++] = c;
  }, s = 1; s <= t; ++s)
    if (e[s] == n && s != t)
      ++o;
    else {
      if (!n && o > 2) {
        for (; o > 138; o -= 138)
          a(32754);
        o > 2 && (a(o > 10 ? o - 11 << 5 | 28690 : o - 3 << 5 | 12305), o = 0);
      } else if (o > 3) {
        for (a(n), --o; o > 6; o -= 6)
          a(8304);
        o > 2 && (a(o - 3 << 5 | 8208), o = 0);
      }
      for (; o--; )
        a(n);
      o = 1, n = e[s];
    }
  return { c: r.subarray(0, i), n: t };
}, sn = function(e, t) {
  for (var r = 0, i = 0; i < t.length; ++i)
    r += e[i] * t[i];
  return r;
}, Tm = function(e, t, r) {
  var i = r.length, n = Em(t + 2);
  e[n] = i & 255, e[n + 1] = i >> 8, e[n + 2] = e[n] ^ 255, e[n + 3] = e[n + 1] ^ 255;
  for (var o = 0; o < i; ++o)
    e[n + o + 4] = r[o];
  return (n + 4 + i) * 8;
}, $c = function(e, t, r, i, n, o, a, s, c, u, l) {
  dt(t, l++, r), ++n[256];
  for (var d = ji(n, 15), f = d.t, h = d.l, v = ji(o, 15), _ = v.t, k = v.l, T = yc(f), B = T.c, S = T.n, O = yc(_), U = O.c, R = O.n, z = new qe(19), m = 0; m < B.length; ++m)
    ++z[B[m] & 31];
  for (var m = 0; m < U.length; ++m)
    ++z[U[m] & 31];
  for (var p = ji(z, 7), y = p.t, E = p.l, x = 19; x > 4 && !y[vc[x - 1]]; --x)
    ;
  var j = u + 5 << 3, q = sn(n, Zt) + sn(o, wr) + a, Q = sn(n, f) + sn(o, _) + a + 14 + 3 * x + sn(z, y) + 2 * z[16] + 3 * z[17] + 7 * z[18];
  if (c >= 0 && j <= q && j <= Q)
    return Tm(t, l, e.subarray(c, c + u));
  var oe, Z, J, N;
  if (dt(t, l, 1 + (Q < q)), l += 2, Q < q) {
    oe = fn(f, h, 0), Z = f, J = fn(_, k, 0), N = _;
    var W = fn(y, E, 0);
    dt(t, l, S - 257), dt(t, l + 5, R - 1), dt(t, l + 10, x - 4), l += 14;
    for (var m = 0; m < x; ++m)
      dt(t, l + 3 * m, y[vc[m]]);
    l += 3 * x;
    for (var D = [B, U], F = 0; F < 2; ++F)
      for (var A = D[F], m = 0; m < A.length; ++m) {
        var ne = A[m] & 31;
        dt(t, l, W[ne]), l += y[ne], ne > 15 && (dt(t, l, A[m] >> 5 & 127), l += A[m] >> 12);
      }
  } else
    oe = l1, Z = Zt, J = d1, N = wr;
  for (var m = 0; m < s; ++m) {
    var K = i[m];
    if (K > 255) {
      var ne = K >> 18 & 31;
      an(t, l, oe[ne + 257]), l += Z[ne + 257], ne > 7 && (dt(t, l, K >> 23 & 31), l += vs[ne]);
      var le = K & 31;
      an(t, l, J[le]), l += N[le], le > 3 && (an(t, l, K >> 5 & 8191), l += _s[le]);
    } else
      an(t, l, oe[K]), l += Z[K];
  }
  return an(t, l, oe[256]), l + Z[256];
}, h1 = /* @__PURE__ */ new gs([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Nm = /* @__PURE__ */ new at(0), p1 = function(e, t, r, i, n, o) {
  var a = o.z || e.length, s = new at(i + a + 5 * (1 + Math.ceil(a / 7e3)) + n), c = s.subarray(i, s.length - n), u = o.l, l = (o.r || 0) & 7;
  if (t) {
    l && (c[0] = o.r >> 3);
    for (var d = h1[t - 1], f = d >> 13, h = d & 8191, v = (1 << r) - 1, _ = o.p || new qe(32768), k = o.h || new qe(v + 1), T = Math.ceil(r / 3), B = 2 * T, S = function(re) {
      return (e[re] ^ e[re + 1] << T ^ e[re + 2] << B) & v;
    }, O = new gs(25e3), U = new qe(288), R = new qe(32), z = 0, m = 0, p = o.i || 0, y = 0, E = o.w || 0, x = 0; p + 2 < a; ++p) {
      var j = S(p), q = p & 32767, Q = k[j];
      if (_[q] = Q, k[j] = q, E <= p) {
        var oe = a - p;
        if ((z > 7e3 || y > 24576) && (oe > 423 || !u)) {
          l = $c(e, c, 0, O, U, R, m, y, x, p - x, l), y = z = m = 0, x = p;
          for (var Z = 0; Z < 286; ++Z)
            U[Z] = 0;
          for (var Z = 0; Z < 30; ++Z)
            R[Z] = 0;
        }
        var J = 2, N = 0, W = h, D = q - Q & 32767;
        if (oe > 2 && j == S(p - D))
          for (var F = Math.min(f, oe) - 1, A = Math.min(32767, p), ne = Math.min(258, oe); D <= A && --W && q != Q; ) {
            if (e[p + J] == e[p + J - D]) {
              for (var K = 0; K < ne && e[p + K] == e[p + K - D]; ++K)
                ;
              if (K > J) {
                if (J = K, N = D, K > F)
                  break;
                for (var le = Math.min(D, K - 2), Oe = 0, Z = 0; Z < le; ++Z) {
                  var X = p - D + Z & 32767, ae = _[X], ue = X - ae & 32767;
                  ue > Oe && (Oe = ue, Q = X);
                }
              }
            }
            q = Q, Q = _[q], D += q - Q & 32767;
          }
        if (N) {
          O[y++] = 268435456 | oo[J] << 18 | _c[N];
          var L = oo[J] & 31, de = _c[N] & 31;
          m += vs[L] + _s[de], ++U[257 + L], ++R[de], E = p + J, ++z;
        } else
          O[y++] = e[p], ++U[e[p]];
      }
    }
    for (p = Math.max(p, E); p < a; ++p)
      O[y++] = e[p], ++U[e[p]];
    l = $c(e, c, u, O, U, R, m, y, x, p - x, l), u || (o.r = l & 7 | c[l / 8 | 0] << 3, l -= 7, o.h = k, o.p = _, o.i = p, o.w = E);
  } else {
    for (var p = o.w || 0; p < a + u; p += 65535) {
      var pe = p + 65535;
      pe >= a && (c[l / 8 | 0] = u, pe = a), l = Tm(c, l + 1, e.subarray(p, pe));
    }
    o.i = a;
  }
  return f1(s, 0, i + Em(l) + n);
}, Cm = function() {
  var e = 1, t = 0;
  return {
    p: function(r) {
      for (var i = e, n = t, o = r.length | 0, a = 0; a != o; ) {
        for (var s = Math.min(a + 2655, o); a < s; ++a)
          n += i += r[a];
        i = (i & 65535) + 15 * (i >> 16), n = (n & 65535) + 15 * (n >> 16);
      }
      e = i, t = n;
    },
    d: function() {
      return e %= 65521, t %= 65521, (e & 255) << 24 | (e & 65280) << 8 | (t & 255) << 8 | t >> 8;
    }
  };
}, m1 = function(e, t, r, i, n) {
  if (!n && (n = { l: 1 }, t.dictionary)) {
    var o = t.dictionary.subarray(-32768), a = new at(o.length + e.length);
    a.set(o), a.set(e, o.length), e = a, n.w = o.length;
  }
  return p1(e, t.level == null ? 6 : t.level, t.mem == null ? n.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(e.length))) * 1.5) : 20 : 12 + t.mem, r, i, n);
}, Um = function(e, t, r) {
  for (; r; ++t)
    e[t] = r, r >>>= 8;
}, g1 = function(e, t) {
  var r = t.level, i = r == 0 ? 0 : r < 6 ? 1 : r == 9 ? 3 : 2;
  if (e[0] = 120, e[1] = i << 6 | (t.dictionary && 32), e[1] |= 31 - (e[0] << 8 | e[1]) % 31, t.dictionary) {
    var n = Cm();
    n.p(t.dictionary), Um(e, 2, n.d());
  }
};
function CS(e, t) {
  t || (t = {});
  var r = Cm();
  r.p(e);
  var i = m1(e, t, t.dictionary ? 6 : 2, 4);
  return g1(i, t), Um(i, i.length - 4, r.d()), i;
}
var v1 = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), _1 = 0;
try {
  v1.decode(Nm, { stream: !0 }), _1 = 1;
} catch {
}
function y1(e) {
  if (Array.isArray(e)) return e;
}
function $1(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var i, n, o, a, s = [], c = !0, u = !1;
    try {
      if (o = (r = r.call(e)).next, t !== 0) for (; !(c = (i = o.call(r)).done) && (s.push(i.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, n = l;
    } finally {
      try {
        if (!c && r.return != null && (a = r.return(), Object(a) !== a)) return;
      } finally {
        if (u) throw n;
      }
    }
    return s;
  }
}
function bc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
  return i;
}
function b1(e, t) {
  if (e) {
    if (typeof e == "string") return bc(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? bc(e, t) : void 0;
  }
}
function k1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function US(e, t) {
  return y1(e) || $1(e, t) || b1(e, t) || k1();
}
function kc(e, t = "utf8") {
  return new TextDecoder(t).decode(e);
}
const w1 = new TextEncoder();
function S1(e) {
  return w1.encode(e);
}
const I1 = 1024 * 8, z1 = (() => {
  const e = new Uint8Array(4), t = new Uint32Array(e.buffer);
  return !((t[0] = 1) & e[0]);
})(), Pi = {
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
class ys {
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
  constructor(t = I1, r = {}) {
    let i = !1;
    typeof t == "number" ? t = new ArrayBuffer(t) : (i = !0, this.lastWrittenByte = t.byteLength);
    const n = r.offset ? r.offset >>> 0 : 0, o = t.byteLength - n;
    let a = n;
    (ArrayBuffer.isView(t) || t instanceof ys) && (t.byteLength !== t.buffer.byteLength && (a = t.byteOffset + n), t = t.buffer), i ? this.lastWrittenByte = o : this.lastWrittenByte = 0, this.buffer = t, this.length = o, this.byteLength = o, this.byteOffset = a, this.offset = 0, this.littleEndian = !0, this._data = new DataView(this.buffer, a, o), this._mark = 0, this._marks = [];
  }
  /**
   * Checks if the memory allocated to the buffer is sufficient to store more
   * bytes after the offset.
   * @param byteLength - The needed memory in bytes.
   * @returns `true` if there is sufficient space and `false` otherwise.
   */
  available(t = 1) {
    return this.offset + t <= this.length;
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
  skip(t = 1) {
    return this.offset += t, this;
  }
  /**
   * Move the pointer n bytes backward.
   * @param n - Number of bytes to move back.
   * @returns This.
   */
  back(t = 1) {
    return this.offset -= t, this;
  }
  /**
   * Move the pointer to the given offset.
   * @param offset - The offset to move to.
   * @returns This.
   */
  seek(t) {
    return this.offset = t, this;
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
    const t = this._marks.pop();
    if (t === void 0)
      throw new Error("Mark stack empty");
    return this.seek(t), this;
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
  ensureAvailable(t = 1) {
    if (!this.available(t)) {
      const i = (this.offset + t) * 2, n = new Uint8Array(i);
      n.set(new Uint8Array(this.buffer)), this.buffer = n.buffer, this.length = i, this.byteLength = i, this._data = new DataView(this.buffer);
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
  readBytes(t = 1) {
    return this.readArray(t, "uint8");
  }
  /**
   * Creates an array of corresponding to the type `type` and size `size`.
   * For example type `uint8` will create a `Uint8Array`.
   * @param size - size of the resulting array
   * @param type - number type of elements to read
   * @returns The read array.
   */
  readArray(t, r) {
    const i = Pi[r].BYTES_PER_ELEMENT * t, n = this.byteOffset + this.offset, o = this.buffer.slice(n, n + i);
    if (this.littleEndian === z1 && r !== "uint8" && r !== "int8") {
      const s = new Uint8Array(this.buffer.slice(n, n + i));
      s.reverse();
      const c = new Pi[r](s.buffer);
      return this.offset += i, c.reverse(), c;
    }
    const a = new Pi[r](o);
    return this.offset += i, a;
  }
  /**
   * Read a 16-bit signed integer and move pointer forward by 2 bytes.
   * @returns The read value.
   */
  readInt16() {
    const t = this._data.getInt16(this.offset, this.littleEndian);
    return this.offset += 2, t;
  }
  /**
   * Read a 16-bit unsigned integer and move pointer forward by 2 bytes.
   * @returns The read value.
   */
  readUint16() {
    const t = this._data.getUint16(this.offset, this.littleEndian);
    return this.offset += 2, t;
  }
  /**
   * Read a 32-bit signed integer and move pointer forward by 4 bytes.
   * @returns The read value.
   */
  readInt32() {
    const t = this._data.getInt32(this.offset, this.littleEndian);
    return this.offset += 4, t;
  }
  /**
   * Read a 32-bit unsigned integer and move pointer forward by 4 bytes.
   * @returns The read value.
   */
  readUint32() {
    const t = this._data.getUint32(this.offset, this.littleEndian);
    return this.offset += 4, t;
  }
  /**
   * Read a 32-bit floating number and move pointer forward by 4 bytes.
   * @returns The read value.
   */
  readFloat32() {
    const t = this._data.getFloat32(this.offset, this.littleEndian);
    return this.offset += 4, t;
  }
  /**
   * Read a 64-bit floating number and move pointer forward by 8 bytes.
   * @returns The read value.
   */
  readFloat64() {
    const t = this._data.getFloat64(this.offset, this.littleEndian);
    return this.offset += 8, t;
  }
  /**
   * Read a 64-bit signed integer number and move pointer forward by 8 bytes.
   * @returns The read value.
   */
  readBigInt64() {
    const t = this._data.getBigInt64(this.offset, this.littleEndian);
    return this.offset += 8, t;
  }
  /**
   * Read a 64-bit unsigned integer number and move pointer forward by 8 bytes.
   * @returns The read value.
   */
  readBigUint64() {
    const t = this._data.getBigUint64(this.offset, this.littleEndian);
    return this.offset += 8, t;
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
  readChars(t = 1) {
    let r = "";
    for (let i = 0; i < t; i++)
      r += this.readChar();
    return r;
  }
  /**
   * Read the next `n` bytes, return a UTF-8 decoded string and move pointer
   * forward by `n` bytes.
   * @param n - Number of bytes to read.
   * @returns The decoded string.
   */
  readUtf8(t = 1) {
    return kc(this.readBytes(t));
  }
  /**
   * Read the next `n` bytes, return a string decoded with `encoding` and move pointer
   * forward by `n` bytes.
   * If no encoding is passed, the function is equivalent to @see {@link IOBuffer#readUtf8}
   * @param n - Number of bytes to read.
   * @param encoding - The encoding to use. Default is 'utf8'.
   * @returns The decoded string.
   */
  decodeText(t = 1, r = "utf8") {
    return kc(this.readBytes(t), r);
  }
  /**
   * Write 0xff if the passed value is truthy, 0x00 otherwise and move pointer
   * forward by 1 byte.
   * @param value - The value to write.
   * @returns This.
   */
  writeBoolean(t) {
    return this.writeUint8(t ? 255 : 0), this;
  }
  /**
   * Write `value` as an 8-bit signed integer and move pointer forward by 1 byte.
   * @param value - The value to write.
   * @returns This.
   */
  writeInt8(t) {
    return this.ensureAvailable(1), this._data.setInt8(this.offset++, t), this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as an 8-bit unsigned integer and move pointer forward by 1
   * byte.
   * @param value - The value to write.
   * @returns This.
   */
  writeUint8(t) {
    return this.ensureAvailable(1), this._data.setUint8(this.offset++, t), this._updateLastWrittenByte(), this;
  }
  /**
   * An alias for {@link IOBuffer#writeUint8}.
   * @param value - The value to write.
   * @returns This.
   */
  writeByte(t) {
    return this.writeUint8(t);
  }
  /**
   * Write all elements of `bytes` as uint8 values and move pointer forward by
   * `bytes.length` bytes.
   * @param bytes - The array of bytes to write.
   * @returns This.
   */
  writeBytes(t) {
    this.ensureAvailable(t.length);
    for (let r = 0; r < t.length; r++)
      this._data.setUint8(this.offset++, t[r]);
    return this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 16-bit signed integer and move pointer forward by 2
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeInt16(t) {
    return this.ensureAvailable(2), this._data.setInt16(this.offset, t, this.littleEndian), this.offset += 2, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 16-bit unsigned integer and move pointer forward by 2
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeUint16(t) {
    return this.ensureAvailable(2), this._data.setUint16(this.offset, t, this.littleEndian), this.offset += 2, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 32-bit signed integer and move pointer forward by 4
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeInt32(t) {
    return this.ensureAvailable(4), this._data.setInt32(this.offset, t, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 32-bit unsigned integer and move pointer forward by 4
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeUint32(t) {
    return this.ensureAvailable(4), this._data.setUint32(this.offset, t, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 32-bit floating number and move pointer forward by 4
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeFloat32(t) {
    return this.ensureAvailable(4), this._data.setFloat32(this.offset, t, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 64-bit floating number and move pointer forward by 8
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeFloat64(t) {
    return this.ensureAvailable(8), this._data.setFloat64(this.offset, t, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 64-bit signed bigint and move pointer forward by 8
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeBigInt64(t) {
    return this.ensureAvailable(8), this._data.setBigInt64(this.offset, t, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 64-bit unsigned bigint and move pointer forward by 8
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeBigUint64(t) {
    return this.ensureAvailable(8), this._data.setBigUint64(this.offset, t, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
  }
  /**
   * Write the charCode of `str`'s first character as an 8-bit unsigned integer
   * and move pointer forward by 1 byte.
   * @param str - The character to write.
   * @returns This.
   */
  writeChar(t) {
    return this.writeUint8(t.charCodeAt(0));
  }
  /**
   * Write the charCodes of all `str`'s characters as 8-bit unsigned integers
   * and move pointer forward by `str.length` bytes.
   * @param str - The characters to write.
   * @returns This.
   */
  writeChars(t) {
    for (let r = 0; r < t.length; r++)
      this.writeUint8(t.charCodeAt(r));
    return this;
  }
  /**
   * UTF-8 encode and write `str` to the current pointer offset and move pointer
   * forward according to the encoded length.
   * @param str - The string to write.
   * @returns This.
   */
  writeUtf8(t) {
    return this.writeBytes(S1(t));
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
const Am = [];
for (let e = 0; e < 256; e++) {
  let t = e;
  for (let r = 0; r < 8; r++)
    t & 1 ? t = 3988292384 ^ t >>> 1 : t = t >>> 1;
  Am[e] = t;
}
const wc = 4294967295;
function x1(e, t, r) {
  let i = e;
  for (let n = 0; n < r; n++)
    i = Am[(i ^ t[n]) & 255] ^ i >>> 8;
  return i;
}
function O1(e, t) {
  return (x1(wc, e, t) ^ wc) >>> 0;
}
function Sc(e, t, r) {
  const i = e.readUint32(), n = O1(new Uint8Array(e.buffer, e.byteOffset + e.offset - t - 4, t), t);
  if (n !== i)
    throw new Error(`CRC mismatch for chunk ${r}. Expected ${i}, found ${n}`);
}
function Zm(e, t, r) {
  for (let i = 0; i < r; i++)
    t[i] = e[i];
}
function Dm(e, t, r, i) {
  let n = 0;
  for (; n < i; n++)
    t[n] = e[n];
  for (; n < r; n++)
    t[n] = e[n] + t[n - i] & 255;
}
function jm(e, t, r, i) {
  let n = 0;
  if (r.length === 0)
    for (; n < i; n++)
      t[n] = e[n];
  else
    for (; n < i; n++)
      t[n] = e[n] + r[n] & 255;
}
function Pm(e, t, r, i, n) {
  let o = 0;
  if (r.length === 0) {
    for (; o < n; o++)
      t[o] = e[o];
    for (; o < i; o++)
      t[o] = e[o] + (t[o - n] >> 1) & 255;
  } else {
    for (; o < n; o++)
      t[o] = e[o] + (r[o] >> 1) & 255;
    for (; o < i; o++)
      t[o] = e[o] + (t[o - n] + r[o] >> 1) & 255;
  }
}
function Rm(e, t, r, i, n) {
  let o = 0;
  if (r.length === 0) {
    for (; o < n; o++)
      t[o] = e[o];
    for (; o < i; o++)
      t[o] = e[o] + t[o - n] & 255;
  } else {
    for (; o < n; o++)
      t[o] = e[o] + r[o] & 255;
    for (; o < i; o++)
      t[o] = e[o] + E1(t[o - n], r[o], r[o - n]) & 255;
  }
}
function E1(e, t, r) {
  const i = e + t - r, n = Math.abs(i - e), o = Math.abs(i - t), a = Math.abs(i - r);
  return n <= o && n <= a ? e : o <= a ? t : r;
}
function T1(e, t, r, i, n, o) {
  switch (e) {
    case 0:
      Zm(t, r, n);
      break;
    case 1:
      Dm(t, r, n, o);
      break;
    case 2:
      jm(t, r, i, n);
      break;
    case 3:
      Pm(t, r, i, n, o);
      break;
    case 4:
      Rm(t, r, i, n, o);
      break;
    default:
      throw new Error(`Unsupported filter: ${e}`);
  }
}
const N1 = new Uint16Array([255]), C1 = new Uint8Array(N1.buffer), U1 = C1[0] === 255;
function A1(e) {
  const { data: t, width: r, height: i, channels: n, depth: o } = e, a = [
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
  ], s = Math.ceil(o / 8) * n, c = new Uint8Array(i * r * s);
  let u = 0;
  for (let l = 0; l < 7; l++) {
    const d = a[l], f = Math.ceil((r - d.x) / d.xStep), h = Math.ceil((i - d.y) / d.yStep);
    if (f <= 0 || h <= 0)
      continue;
    const v = f * s, _ = new Uint8Array(v);
    for (let k = 0; k < h; k++) {
      const T = t[u++], B = t.subarray(u, u + v);
      u += v;
      const S = new Uint8Array(v);
      T1(T, B, S, _, v, s), _.set(S);
      for (let O = 0; O < f; O++) {
        const U = d.x + O * d.xStep, R = d.y + k * d.yStep;
        if (!(U >= r || R >= i))
          for (let z = 0; z < s; z++)
            c[(R * r + U) * s + z] = S[O * s + z];
      }
    }
  }
  if (o === 16) {
    const l = new Uint16Array(c.buffer);
    if (U1)
      for (let d = 0; d < l.length; d++)
        l[d] = Z1(l[d]);
    return l;
  } else
    return c;
}
function Z1(e) {
  return (e & 255) << 8 | e >> 8 & 255;
}
const D1 = new Uint16Array([255]), j1 = new Uint8Array(D1.buffer), P1 = j1[0] === 255, R1 = new Uint8Array(0);
function Ic(e) {
  const { data: t, width: r, height: i, channels: n, depth: o } = e, a = Math.ceil(o / 8) * n, s = Math.ceil(o / 8 * n * r), c = new Uint8Array(i * s);
  let u = R1, l = 0, d, f;
  for (let h = 0; h < i; h++) {
    switch (d = t.subarray(l + 1, l + 1 + s), f = c.subarray(h * s, (h + 1) * s), t[l]) {
      case 0:
        Zm(d, f, s);
        break;
      case 1:
        Dm(d, f, s, a);
        break;
      case 2:
        jm(d, f, u, s);
        break;
      case 3:
        Pm(d, f, u, s, a);
        break;
      case 4:
        Rm(d, f, u, s, a);
        break;
      default:
        throw new Error(`Unsupported filter: ${t[l]}`);
    }
    u = f, l += s + 1;
  }
  if (o === 16) {
    const h = new Uint16Array(c.buffer);
    if (P1)
      for (let v = 0; v < h.length; v++)
        h[v] = F1(h[v]);
    return h;
  } else
    return c;
}
function F1(e) {
  return (e & 255) << 8 | e >> 8 & 255;
}
const sr = Uint8Array.of(137, 80, 78, 71, 13, 10, 26, 10);
function zc(e) {
  if (!L1(e.readBytes(sr.length)))
    throw new Error("wrong PNG signature");
}
function L1(e) {
  if (e.length < sr.length)
    return !1;
  for (let t = 0; t < sr.length; t++)
    if (e[t] !== sr[t])
      return !1;
  return !0;
}
const M1 = "tEXt", B1 = 0, Fm = new TextDecoder("latin1");
function J1(e) {
  if (q1(e), e.length === 0 || e.length > 79)
    throw new Error("keyword length must be between 1 and 79");
}
const V1 = /^[\u0000-\u00FF]*$/;
function q1(e) {
  if (!V1.test(e))
    throw new Error("invalid latin1 text");
}
function W1(e, t, r) {
  const i = Lm(t);
  e[i] = K1(t, r - i.length - 1);
}
function Lm(e) {
  for (e.mark(); e.readByte() !== B1; )
    ;
  const t = e.offset;
  e.reset();
  const r = Fm.decode(e.readBytes(t - e.offset - 1));
  return e.skip(1), J1(r), r;
}
function K1(e, t) {
  return Fm.decode(e.readBytes(t));
}
const Ve = {
  UNKNOWN: -1,
  GREYSCALE: 0,
  TRUECOLOUR: 2,
  INDEXED_COLOUR: 3,
  GREYSCALE_ALPHA: 4,
  TRUECOLOUR_ALPHA: 6
}, Ri = {
  UNKNOWN: -1,
  DEFLATE: 0
}, xc = {
  UNKNOWN: -1,
  ADAPTIVE: 0
}, Fi = {
  UNKNOWN: -1,
  NO_INTERLACE: 0,
  ADAM7: 1
}, rr = {
  NONE: 0,
  BACKGROUND: 1,
  PREVIOUS: 2
}, Li = {
  SOURCE: 0,
  OVER: 1
};
class G1 extends ys {
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
  constructor(t, r = {}) {
    super(t);
    const { checkCrc: i = !1 } = r;
    this._checkCrc = i, this._inflator = new $s(), this._png = {
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
    }, this._end = !1, this._hasPalette = !1, this._palette = [], this._hasTransparency = !1, this._transparency = new Uint16Array(0), this._compressionMethod = Ri.UNKNOWN, this._filterMethod = xc.UNKNOWN, this._interlaceMethod = Fi.UNKNOWN, this._colorType = Ve.UNKNOWN, this._isAnimated = !1, this._numberOfFrames = 1, this._numberOfPlays = 0, this._frames = [], this._writingDataChunks = !1, this.setBigEndian();
  }
  decode() {
    for (zc(this); !this._end; ) {
      const t = this.readUint32(), r = this.readChars(4);
      this.decodeChunk(t, r);
    }
    return this.decodeImage(), this._png;
  }
  decodeApng() {
    for (zc(this); !this._end; ) {
      const t = this.readUint32(), r = this.readChars(4);
      this.decodeApngChunk(t, r);
    }
    return this.decodeApngImage(), this._apng;
  }
  // https://www.w3.org/TR/PNG/#5Chunk-layout
  decodeChunk(t, r) {
    const i = this.offset;
    switch (r) {
      // 11.2 Critical chunks
      case "IHDR":
        this.decodeIHDR();
        break;
      case "PLTE":
        this.decodePLTE(t);
        break;
      case "IDAT":
        this.decodeIDAT(t);
        break;
      case "IEND":
        this._end = !0;
        break;
      // 11.3 Ancillary chunks
      case "tRNS":
        this.decodetRNS(t);
        break;
      case "iCCP":
        this.decodeiCCP(t);
        break;
      case M1:
        W1(this._png.text, this, t);
        break;
      case "pHYs":
        this.decodepHYs();
        break;
      default:
        this.skip(t);
        break;
    }
    if (this.offset - i !== t)
      throw new Error(`Length mismatch while decoding chunk ${r}`);
    this._checkCrc ? Sc(this, t + 4, r) : this.skip(4);
  }
  decodeApngChunk(t, r) {
    const i = this.offset;
    switch (r !== "fdAT" && r !== "IDAT" && this._writingDataChunks && this.pushDataToFrame(), r) {
      case "acTL":
        this.decodeACTL();
        break;
      case "fcTL":
        this.decodeFCTL();
        break;
      case "fdAT":
        this.decodeFDAT(t);
        break;
      default:
        this.decodeChunk(t, r), this.offset = i + t;
        break;
    }
    if (this.offset - i !== t)
      throw new Error(`Length mismatch while decoding chunk ${r}`);
    this._checkCrc ? Sc(this, t + 4, r) : this.skip(4);
  }
  // https://www.w3.org/TR/PNG/#11IHDR
  decodeIHDR() {
    const t = this._png;
    t.width = this.readUint32(), t.height = this.readUint32(), t.depth = H1(this.readUint8());
    const r = this.readUint8();
    this._colorType = r;
    let i;
    switch (r) {
      case Ve.GREYSCALE:
        i = 1;
        break;
      case Ve.TRUECOLOUR:
        i = 3;
        break;
      case Ve.INDEXED_COLOUR:
        i = 1;
        break;
      case Ve.GREYSCALE_ALPHA:
        i = 2;
        break;
      case Ve.TRUECOLOUR_ALPHA:
        i = 4;
        break;
      // Kept for exhaustiveness.
      // eslint-disable-next-line unicorn/no-useless-switch-case
      case Ve.UNKNOWN:
      default:
        throw new Error(`Unknown color type: ${r}`);
    }
    if (this._png.channels = i, this._compressionMethod = this.readUint8(), this._compressionMethod !== Ri.DEFLATE)
      throw new Error(`Unsupported compression method: ${this._compressionMethod}`);
    this._filterMethod = this.readUint8(), this._interlaceMethod = this.readUint8();
  }
  decodeACTL() {
    this._numberOfFrames = this.readUint32(), this._numberOfPlays = this.readUint32(), this._isAnimated = !0;
  }
  decodeFCTL() {
    const t = {
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
    this._frames.push(t);
  }
  // https://www.w3.org/TR/PNG/#11PLTE
  decodePLTE(t) {
    if (t % 3 !== 0)
      throw new RangeError(`PLTE field length must be a multiple of 3. Got ${t}`);
    const r = t / 3;
    this._hasPalette = !0;
    const i = [];
    this._palette = i;
    for (let n = 0; n < r; n++)
      i.push([this.readUint8(), this.readUint8(), this.readUint8()]);
  }
  // https://www.w3.org/TR/PNG/#11IDAT
  decodeIDAT(t) {
    this._writingDataChunks = !0;
    const r = t, i = this.offset + this.byteOffset;
    if (this._inflator.push(new Uint8Array(this.buffer, i, r)), this._inflator.err)
      throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    this.skip(t);
  }
  decodeFDAT(t) {
    this._writingDataChunks = !0;
    let r = t, i = this.offset + this.byteOffset;
    if (i += 4, r -= 4, this._inflator.push(new Uint8Array(this.buffer, i, r)), this._inflator.err)
      throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    this.skip(t);
  }
  // https://www.w3.org/TR/PNG/#11tRNS
  decodetRNS(t) {
    switch (this._colorType) {
      case Ve.GREYSCALE:
      case Ve.TRUECOLOUR: {
        if (t % 2 !== 0)
          throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${t}`);
        if (t / 2 > this._png.width * this._png.height)
          throw new Error(`tRNS chunk contains more alpha values than there are pixels (${t / 2} vs ${this._png.width * this._png.height})`);
        this._hasTransparency = !0, this._transparency = new Uint16Array(t / 2);
        for (let r = 0; r < t / 2; r++)
          this._transparency[r] = this.readUint16();
        break;
      }
      case Ve.INDEXED_COLOUR: {
        if (t > this._palette.length)
          throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${t} vs ${this._palette.length})`);
        let r = 0;
        for (; r < t; r++) {
          const i = this.readByte();
          this._palette[r].push(i);
        }
        for (; r < this._palette.length; r++)
          this._palette[r].push(255);
        break;
      }
      // Kept for exhaustiveness.
      /* eslint-disable unicorn/no-useless-switch-case */
      case Ve.UNKNOWN:
      case Ve.GREYSCALE_ALPHA:
      case Ve.TRUECOLOUR_ALPHA:
      default:
        throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`);
    }
  }
  // https://www.w3.org/TR/PNG/#11iCCP
  decodeiCCP(t) {
    const r = Lm(this), i = this.readUint8();
    if (i !== Ri.DEFLATE)
      throw new Error(`Unsupported iCCP compression method: ${i}`);
    const n = this.readBytes(t - r.length - 2);
    this._png.iccEmbeddedProfile = {
      name: r,
      profile: Vm(n)
    };
  }
  // https://www.w3.org/TR/PNG/#11pHYs
  decodepHYs() {
    const t = this.readUint32(), r = this.readUint32(), i = this.readByte();
    this._png.resolution = { x: t, y: r, unit: i };
  }
  decodeApngImage() {
    this._apng.width = this._png.width, this._apng.height = this._png.height, this._apng.channels = this._png.channels, this._apng.depth = this._png.depth, this._apng.numberOfFrames = this._numberOfFrames, this._apng.numberOfPlays = this._numberOfPlays, this._apng.text = this._png.text, this._apng.resolution = this._png.resolution;
    for (let t = 0; t < this._numberOfFrames; t++) {
      const r = {
        sequenceNumber: this._frames[t].sequenceNumber,
        delayNumber: this._frames[t].delayNumber,
        delayDenominator: this._frames[t].delayDenominator,
        data: this._apng.depth === 8 ? new Uint8Array(this._apng.width * this._apng.height * this._apng.channels) : new Uint16Array(this._apng.width * this._apng.height * this._apng.channels)
      }, i = this._frames.at(t);
      if (i) {
        if (i.data = Ic({
          data: i.data,
          width: i.width,
          height: i.height,
          channels: this._apng.channels,
          depth: this._apng.depth
        }), this._hasPalette && (this._apng.palette = this._palette), this._hasTransparency && (this._apng.transparency = this._transparency), t === 0 || i.xOffset === 0 && i.yOffset === 0 && i.width === this._png.width && i.height === this._png.height)
          r.data = i.data;
        else {
          const n = this._apng.frames.at(t - 1);
          this.disposeFrame(i, n, r), this.addFrameDataToCanvas(r, i);
        }
        this._apng.frames.push(r);
      }
    }
    return this._apng;
  }
  disposeFrame(t, r, i) {
    switch (t.disposeOp) {
      case rr.NONE:
        break;
      case rr.BACKGROUND:
        for (let n = 0; n < this._png.height; n++)
          for (let o = 0; o < this._png.width; o++) {
            const a = (n * t.width + o) * this._png.channels;
            for (let s = 0; s < this._png.channels; s++)
              i.data[a + s] = 0;
          }
        break;
      case rr.PREVIOUS:
        i.data.set(r.data);
        break;
      default:
        throw new Error("Unknown disposeOp");
    }
  }
  addFrameDataToCanvas(t, r) {
    const i = 1 << this._png.depth, n = (o, a) => {
      const s = ((o + r.yOffset) * this._png.width + r.xOffset + a) * this._png.channels, c = (o * r.width + a) * this._png.channels;
      return { index: s, frameIndex: c };
    };
    switch (r.blendOp) {
      case Li.SOURCE:
        for (let o = 0; o < r.height; o++)
          for (let a = 0; a < r.width; a++) {
            const { index: s, frameIndex: c } = n(o, a);
            for (let u = 0; u < this._png.channels; u++)
              t.data[s + u] = r.data[c + u];
          }
        break;
      // https://www.w3.org/TR/png-3/#13Alpha-channel-processing
      case Li.OVER:
        for (let o = 0; o < r.height; o++)
          for (let a = 0; a < r.width; a++) {
            const { index: s, frameIndex: c } = n(o, a);
            for (let u = 0; u < this._png.channels; u++) {
              const l = r.data[c + this._png.channels - 1] / i, d = u % (this._png.channels - 1) === 0 ? 1 : r.data[c + u], f = Math.floor(l * d + (1 - l) * t.data[s + u]);
              t.data[s + u] += f;
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
    const t = this._isAnimated ? (this._frames?.at(0)).data : this._inflator.result;
    if (this._filterMethod !== xc.ADAPTIVE)
      throw new Error(`Filter method ${this._filterMethod} not supported`);
    if (this._interlaceMethod === Fi.NO_INTERLACE)
      this._png.data = Ic({
        data: t,
        width: this._png.width,
        height: this._png.height,
        channels: this._png.channels,
        depth: this._png.depth
      });
    else if (this._interlaceMethod === Fi.ADAM7)
      this._png.data = A1({
        data: t,
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
    const t = this._inflator.result, r = this._frames.at(-1);
    r ? r.data = t : this._frames.push({
      sequenceNumber: 0,
      width: this._png.width,
      height: this._png.height,
      xOffset: 0,
      yOffset: 0,
      delayNumber: 0,
      delayDenominator: 0,
      disposeOp: rr.NONE,
      blendOp: Li.SOURCE,
      data: t
    }), this._inflator = new $s(), this._writingDataChunks = !1;
  }
}
function H1(e) {
  if (e !== 1 && e !== 2 && e !== 4 && e !== 8 && e !== 16)
    throw new Error(`invalid bit depth: ${e}`);
  return e;
}
var Oc;
(function(e) {
  e[e.UNKNOWN = 0] = "UNKNOWN", e[e.METRE = 1] = "METRE";
})(Oc || (Oc = {}));
function AS(e, t) {
  return new G1(e, t).decode();
}
var cr = { exports: {} };
var X1 = cr.exports, Ec;
function Y1() {
  return Ec || (Ec = 1, (function(e, t) {
    ((r, i) => {
      e.exports = i();
    })(X1, function r() {
      var i = typeof self < "u" ? self : typeof window < "u" ? window : i !== void 0 ? i : {}, n, o = !i.document && !!i.postMessage, a = i.IS_PAPA_WORKER || !1, s = {}, c = 0, u = {};
      function l(m) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, function(p) {
          var y = U(p);
          y.chunkSize = parseInt(y.chunkSize), p.step || p.chunk || (y.chunkSize = null), this._handle = new _(y), (this._handle.streamer = this)._config = y;
        }.call(this, m), this.parseChunk = function(p, y) {
          var E = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < E) {
            let j = this._config.newline;
            j || (x = this._config.quoteChar || '"', j = this._handle.guessLineEndings(p, x)), p = [...p.split(j).slice(E)].join(j);
          }
          this.isFirstChunk && z(this._config.beforeFirstChunk) && (x = this._config.beforeFirstChunk(p)) !== void 0 && (p = x), this.isFirstChunk = !1, this._halted = !1;
          var E = this._partialLine + p, x = (this._partialLine = "", this._handle.parse(E, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (p = x.meta.cursor, E = (this._finished || (this._partialLine = E.substring(p - this._baseIndex), this._baseIndex = p), x && x.data && (this._rowCount += x.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), a) i.postMessage({ results: x, workerId: u.WORKER_ID, finished: E });
            else if (z(this._config.chunk) && !y) {
              if (this._config.chunk(x, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = x = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(x.data), this._completeResults.errors = this._completeResults.errors.concat(x.errors), this._completeResults.meta = x.meta), this._completed || !E || !z(this._config.complete) || x && x.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), E || x && x.meta.paused || this._nextChunk(), x;
          }
          this._halted = !0;
        }, this._sendError = function(p) {
          z(this._config.error) ? this._config.error(p) : a && this._config.error && i.postMessage({ workerId: u.WORKER_ID, error: p, finished: !1 });
        };
      }
      function d(m) {
        var p;
        (m = m || {}).chunkSize || (m.chunkSize = u.RemoteChunkSize), l.call(this, m), this._nextChunk = o ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(y) {
          this._input = y, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (p = new XMLHttpRequest(), this._config.withCredentials && (p.withCredentials = this._config.withCredentials), o || (p.onload = R(this._chunkLoaded, this), p.onerror = R(this._chunkError, this)), p.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !o), this._config.downloadRequestHeaders) {
              var y, E = this._config.downloadRequestHeaders;
              for (y in E) p.setRequestHeader(y, E[y]);
            }
            var x;
            this._config.chunkSize && (x = this._start + this._config.chunkSize - 1, p.setRequestHeader("Range", "bytes=" + this._start + "-" + x));
            try {
              p.send(this._config.downloadRequestBody);
            } catch (j) {
              this._chunkError(j.message);
            }
            o && p.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          p.readyState === 4 && (p.status < 200 || 400 <= p.status ? this._chunkError() : (this._start += this._config.chunkSize || p.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((y) => (y = y.getResponseHeader("Content-Range")) !== null ? parseInt(y.substring(y.lastIndexOf("/") + 1)) : -1)(p), this.parseChunk(p.responseText)));
        }, this._chunkError = function(y) {
          y = p.statusText || y, this._sendError(new Error(y));
        };
      }
      function f(m) {
        (m = m || {}).chunkSize || (m.chunkSize = u.LocalChunkSize), l.call(this, m);
        var p, y, E = typeof FileReader < "u";
        this.stream = function(x) {
          this._input = x, y = x.slice || x.webkitSlice || x.mozSlice, E ? ((p = new FileReader()).onload = R(this._chunkLoaded, this), p.onerror = R(this._chunkError, this)) : p = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var x = this._input, j = (this._config.chunkSize && (j = Math.min(this._start + this._config.chunkSize, this._input.size), x = y.call(x, this._start, j)), p.readAsText(x, this._config.encoding));
          E || this._chunkLoaded({ target: { result: j } });
        }, this._chunkLoaded = function(x) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(x.target.result);
        }, this._chunkError = function() {
          this._sendError(p.error);
        };
      }
      function h(m) {
        var p;
        l.call(this, m = m || {}), this.stream = function(y) {
          return p = y, this._nextChunk();
        }, this._nextChunk = function() {
          var y, E;
          if (!this._finished) return y = this._config.chunkSize, p = y ? (E = p.substring(0, y), p.substring(y)) : (E = p, ""), this._finished = !p, this.parseChunk(E);
        };
      }
      function v(m) {
        l.call(this, m = m || {});
        var p = [], y = !0, E = !1;
        this.pause = function() {
          l.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          l.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(x) {
          this._input = x, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          E && p.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), p.length ? this.parseChunk(p.shift()) : y = !0;
        }, this._streamData = R(function(x) {
          try {
            p.push(typeof x == "string" ? x : x.toString(this._config.encoding)), y && (y = !1, this._checkIsFinished(), this.parseChunk(p.shift()));
          } catch (j) {
            this._streamError(j);
          }
        }, this), this._streamError = R(function(x) {
          this._streamCleanUp(), this._sendError(x);
        }, this), this._streamEnd = R(function() {
          this._streamCleanUp(), E = !0, this._streamData("");
        }, this), this._streamCleanUp = R(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function _(m) {
        var p, y, E, x, j = Math.pow(2, 53), q = -j, Q = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, oe = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, Z = this, J = 0, N = 0, W = !1, D = !1, F = [], A = { data: [], errors: [], meta: {} };
        function ne(X) {
          return m.skipEmptyLines === "greedy" ? X.join("").trim() === "" : X.length === 1 && X[0].length === 0;
        }
        function K() {
          if (A && E && (Oe("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + u.DefaultDelimiter + "'"), E = !1), m.skipEmptyLines && (A.data = A.data.filter(function(L) {
            return !ne(L);
          })), le()) {
            let L = function(de, pe) {
              z(m.transformHeader) && (de = m.transformHeader(de, pe)), F.push(de);
            };
            if (A) if (Array.isArray(A.data[0])) {
              for (var X = 0; le() && X < A.data.length; X++) A.data[X].forEach(L);
              A.data.splice(0, 1);
            } else A.data.forEach(L);
          }
          function ae(L, de) {
            for (var pe = m.header ? {} : [], re = 0; re < L.length; re++) {
              var se = re, ie = L[re], ie = ((je, H) => ((ve) => (m.dynamicTypingFunction && m.dynamicTyping[ve] === void 0 && (m.dynamicTyping[ve] = m.dynamicTypingFunction(ve)), (m.dynamicTyping[ve] || m.dynamicTyping) === !0))(je) ? H === "true" || H === "TRUE" || H !== "false" && H !== "FALSE" && (((ve) => {
                if (Q.test(ve) && (ve = parseFloat(ve), q < ve && ve < j))
                  return 1;
              })(H) ? parseFloat(H) : oe.test(H) ? new Date(H) : H === "" ? null : H) : H)(se = m.header ? re >= F.length ? "__parsed_extra" : F[re] : se, ie = m.transform ? m.transform(ie, se) : ie);
              se === "__parsed_extra" ? (pe[se] = pe[se] || [], pe[se].push(ie)) : pe[se] = ie;
            }
            return m.header && (re > F.length ? Oe("FieldMismatch", "TooManyFields", "Too many fields: expected " + F.length + " fields but parsed " + re, N + de) : re < F.length && Oe("FieldMismatch", "TooFewFields", "Too few fields: expected " + F.length + " fields but parsed " + re, N + de)), pe;
          }
          var ue;
          A && (m.header || m.dynamicTyping || m.transform) && (ue = 1, !A.data.length || Array.isArray(A.data[0]) ? (A.data = A.data.map(ae), ue = A.data.length) : A.data = ae(A.data, 0), m.header && A.meta && (A.meta.fields = F), N += ue);
        }
        function le() {
          return m.header && F.length === 0;
        }
        function Oe(X, ae, ue, L) {
          X = { type: X, code: ae, message: ue }, L !== void 0 && (X.row = L), A.errors.push(X);
        }
        z(m.step) && (x = m.step, m.step = function(X) {
          A = X, le() ? K() : (K(), A.data.length !== 0 && (J += X.data.length, m.preview && J > m.preview ? y.abort() : (A.data = A.data[0], x(A, Z))));
        }), this.parse = function(X, ae, ue) {
          var L = m.quoteChar || '"', L = (m.newline || (m.newline = this.guessLineEndings(X, L)), E = !1, m.delimiter ? z(m.delimiter) && (m.delimiter = m.delimiter(X), A.meta.delimiter = m.delimiter) : ((L = ((de, pe, re, se, ie) => {
            var je, H, ve, Ue;
            ie = ie || [",", "	", "|", ";", u.RECORD_SEP, u.UNIT_SEP];
            for (var Pe = 0; Pe < ie.length; Pe++) {
              for (var Ee, Be = ie[Pe], ce = 0, Re = 0, Se = 0, Te = (ve = void 0, new T({ comments: se, delimiter: Be, newline: pe, preview: 10 }).parse(de)), Je = 0; Je < Te.data.length; Je++) re && ne(Te.data[Je]) ? Se++ : (Ee = Te.data[Je].length, Re += Ee, ve === void 0 ? ve = Ee : 0 < Ee && (ce += Math.abs(Ee - ve), ve = Ee));
              0 < Te.data.length && (Re /= Te.data.length - Se), (H === void 0 || ce <= H) && (Ue === void 0 || Ue < Re) && 1.99 < Re && (H = ce, je = Be, Ue = Re);
            }
            return { successful: !!(m.delimiter = je), bestDelimiter: je };
          })(X, m.newline, m.skipEmptyLines, m.comments, m.delimitersToGuess)).successful ? m.delimiter = L.bestDelimiter : (E = !0, m.delimiter = u.DefaultDelimiter), A.meta.delimiter = m.delimiter), U(m));
          return m.preview && m.header && L.preview++, p = X, y = new T(L), A = y.parse(p, ae, ue), K(), W ? { meta: { paused: !0 } } : A || { meta: { paused: !1 } };
        }, this.paused = function() {
          return W;
        }, this.pause = function() {
          W = !0, y.abort(), p = z(m.chunk) ? "" : p.substring(y.getCharIndex());
        }, this.resume = function() {
          Z.streamer._halted ? (W = !1, Z.streamer.parseChunk(p, !0)) : setTimeout(Z.resume, 3);
        }, this.aborted = function() {
          return D;
        }, this.abort = function() {
          D = !0, y.abort(), A.meta.aborted = !0, z(m.complete) && m.complete(A), p = "";
        }, this.guessLineEndings = function(de, L) {
          de = de.substring(0, 1048576);
          var L = new RegExp(k(L) + "([^]*?)" + k(L), "gm"), ue = (de = de.replace(L, "")).split("\r"), L = de.split(`
`), de = 1 < L.length && L[0].length < ue[0].length;
          if (ue.length === 1 || de) return `
`;
          for (var pe = 0, re = 0; re < ue.length; re++) ue[re][0] === `
` && pe++;
          return pe >= ue.length / 2 ? `\r
` : "\r";
        };
      }
      function k(m) {
        return m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function T(m) {
        var p = (m = m || {}).delimiter, y = m.newline, E = m.comments, x = m.step, j = m.preview, q = m.fastMode, Q = null, oe = !1, Z = m.quoteChar == null ? '"' : m.quoteChar, J = Z;
        if (m.escapeChar !== void 0 && (J = m.escapeChar), (typeof p != "string" || -1 < u.BAD_DELIMITERS.indexOf(p)) && (p = ","), E === p) throw new Error("Comment character same as delimiter");
        E === !0 ? E = "#" : (typeof E != "string" || -1 < u.BAD_DELIMITERS.indexOf(E)) && (E = !1), y !== `
` && y !== "\r" && y !== `\r
` && (y = `
`);
        var N = 0, W = !1;
        this.parse = function(D, F, A) {
          if (typeof D != "string") throw new Error("Input must be a string");
          var ne = D.length, K = p.length, le = y.length, Oe = E.length, X = z(x), ae = [], ue = [], L = [], de = N = 0;
          if (!D) return ce();
          if (q || q !== !1 && D.indexOf(Z) === -1) {
            for (var pe = D.split(y), re = 0; re < pe.length; re++) {
              if (L = pe[re], N += L.length, re !== pe.length - 1) N += y.length;
              else if (A) return ce();
              if (!E || L.substring(0, Oe) !== E) {
                if (X) {
                  if (ae = [], Ue(L.split(p)), Re(), W) return ce();
                } else Ue(L.split(p));
                if (j && j <= re) return ae = ae.slice(0, j), ce(!0);
              }
            }
            return ce();
          }
          for (var se = D.indexOf(p, N), ie = D.indexOf(y, N), je = new RegExp(k(J) + k(Z), "g"), H = D.indexOf(Z, N); ; ) if (D[N] === Z) for (H = N, N++; ; ) {
            if ((H = D.indexOf(Z, H + 1)) === -1) return A || ue.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: ae.length, index: N }), Ee();
            if (H === ne - 1) return Ee(D.substring(N, H).replace(je, Z));
            if (Z === J && D[H + 1] === J) H++;
            else if (Z === J || H === 0 || D[H - 1] !== J) {
              se !== -1 && se < H + 1 && (se = D.indexOf(p, H + 1));
              var ve = Pe((ie = ie !== -1 && ie < H + 1 ? D.indexOf(y, H + 1) : ie) === -1 ? se : Math.min(se, ie));
              if (D.substr(H + 1 + ve, K) === p) {
                L.push(D.substring(N, H).replace(je, Z)), D[N = H + 1 + ve + K] !== Z && (H = D.indexOf(Z, N)), se = D.indexOf(p, N), ie = D.indexOf(y, N);
                break;
              }
              if (ve = Pe(ie), D.substring(H + 1 + ve, H + 1 + ve + le) === y) {
                if (L.push(D.substring(N, H).replace(je, Z)), Be(H + 1 + ve + le), se = D.indexOf(p, N), H = D.indexOf(Z, N), X && (Re(), W)) return ce();
                if (j && ae.length >= j) return ce(!0);
                break;
              }
              ue.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: ae.length, index: N }), H++;
            }
          }
          else if (E && L.length === 0 && D.substring(N, N + Oe) === E) {
            if (ie === -1) return ce();
            N = ie + le, ie = D.indexOf(y, N), se = D.indexOf(p, N);
          } else if (se !== -1 && (se < ie || ie === -1)) L.push(D.substring(N, se)), N = se + K, se = D.indexOf(p, N);
          else {
            if (ie === -1) break;
            if (L.push(D.substring(N, ie)), Be(ie + le), X && (Re(), W)) return ce();
            if (j && ae.length >= j) return ce(!0);
          }
          return Ee();
          function Ue(Se) {
            ae.push(Se), de = N;
          }
          function Pe(Se) {
            var Te = 0;
            return Te = Se !== -1 && (Se = D.substring(H + 1, Se)) && Se.trim() === "" ? Se.length : Te;
          }
          function Ee(Se) {
            return A || (Se === void 0 && (Se = D.substring(N)), L.push(Se), N = ne, Ue(L), X && Re()), ce();
          }
          function Be(Se) {
            N = Se, Ue(L), L = [], ie = D.indexOf(y, N);
          }
          function ce(Se) {
            if (m.header && !F && ae.length && !oe) {
              var Te = ae[0], Je = /* @__PURE__ */ Object.create(null), mt = new Set(Te);
              let Ot = !1;
              for (let tt = 0; tt < Te.length; tt++) {
                let Ae = Te[tt];
                if (Je[Ae = z(m.transformHeader) ? m.transformHeader(Ae, tt) : Ae]) {
                  let gt, nn = Je[Ae];
                  for (; gt = Ae + "_" + nn, nn++, mt.has(gt); ) ;
                  mt.add(gt), Te[tt] = gt, Je[Ae]++, Ot = !0, (Q = Q === null ? {} : Q)[gt] = Ae;
                } else Je[Ae] = 1, Te[tt] = Ae;
                mt.add(Ae);
              }
              Ot && console.warn("Duplicate headers found and renamed."), oe = !0;
            }
            return { data: ae, errors: ue, meta: { delimiter: p, linebreak: y, aborted: W, truncated: !!Se, cursor: de + (F || 0), renamedHeaders: Q } };
          }
          function Re() {
            x(ce()), ae = [], ue = [];
          }
        }, this.abort = function() {
          W = !0;
        }, this.getCharIndex = function() {
          return N;
        };
      }
      function B(m) {
        var p = m.data, y = s[p.workerId], E = !1;
        if (p.error) y.userError(p.error, p.file);
        else if (p.results && p.results.data) {
          var x = { abort: function() {
            E = !0, S(p.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: O, resume: O };
          if (z(y.userStep)) {
            for (var j = 0; j < p.results.data.length && (y.userStep({ data: p.results.data[j], errors: p.results.errors, meta: p.results.meta }, x), !E); j++) ;
            delete p.results;
          } else z(y.userChunk) && (y.userChunk(p.results, x, p.file), delete p.results);
        }
        p.finished && !E && S(p.workerId, p.results);
      }
      function S(m, p) {
        var y = s[m];
        z(y.userComplete) && y.userComplete(p), y.terminate(), delete s[m];
      }
      function O() {
        throw new Error("Not implemented.");
      }
      function U(m) {
        if (typeof m != "object" || m === null) return m;
        var p, y = Array.isArray(m) ? [] : {};
        for (p in m) y[p] = U(m[p]);
        return y;
      }
      function R(m, p) {
        return function() {
          m.apply(p, arguments);
        };
      }
      function z(m) {
        return typeof m == "function";
      }
      return u.parse = function(m, p) {
        var y = (p = p || {}).dynamicTyping || !1;
        if (z(y) && (p.dynamicTypingFunction = y, y = {}), p.dynamicTyping = y, p.transform = !!z(p.transform) && p.transform, !p.worker || !u.WORKERS_SUPPORTED) return y = null, u.NODE_STREAM_INPUT, typeof m == "string" ? (m = ((E) => E.charCodeAt(0) !== 65279 ? E : E.slice(1))(m), y = new (p.download ? d : h)(p)) : m.readable === !0 && z(m.read) && z(m.on) ? y = new v(p) : (i.File && m instanceof File || m instanceof Object) && (y = new f(p)), y.stream(m);
        (y = (() => {
          var E;
          return !!u.WORKERS_SUPPORTED && (E = (() => {
            var x = i.URL || i.webkitURL || null, j = r.toString();
            return u.BLOB_URL || (u.BLOB_URL = x.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", j, ")();"], { type: "text/javascript" })));
          })(), (E = new i.Worker(E)).onmessage = B, E.id = c++, s[E.id] = E);
        })()).userStep = p.step, y.userChunk = p.chunk, y.userComplete = p.complete, y.userError = p.error, p.step = z(p.step), p.chunk = z(p.chunk), p.complete = z(p.complete), p.error = z(p.error), delete p.worker, y.postMessage({ input: m, config: p, workerId: y.id });
      }, u.unparse = function(m, p) {
        var y = !1, E = !0, x = ",", j = `\r
`, q = '"', Q = q + q, oe = !1, Z = null, J = !1, N = ((() => {
          if (typeof p == "object") {
            if (typeof p.delimiter != "string" || u.BAD_DELIMITERS.filter(function(F) {
              return p.delimiter.indexOf(F) !== -1;
            }).length || (x = p.delimiter), typeof p.quotes != "boolean" && typeof p.quotes != "function" && !Array.isArray(p.quotes) || (y = p.quotes), typeof p.skipEmptyLines != "boolean" && typeof p.skipEmptyLines != "string" || (oe = p.skipEmptyLines), typeof p.newline == "string" && (j = p.newline), typeof p.quoteChar == "string" && (q = p.quoteChar), typeof p.header == "boolean" && (E = p.header), Array.isArray(p.columns)) {
              if (p.columns.length === 0) throw new Error("Option columns is empty");
              Z = p.columns;
            }
            p.escapeChar !== void 0 && (Q = p.escapeChar + q), p.escapeFormulae instanceof RegExp ? J = p.escapeFormulae : typeof p.escapeFormulae == "boolean" && p.escapeFormulae && (J = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(k(q), "g"));
        if (typeof m == "string" && (m = JSON.parse(m)), Array.isArray(m)) {
          if (!m.length || Array.isArray(m[0])) return W(null, m, oe);
          if (typeof m[0] == "object") return W(Z || Object.keys(m[0]), m, oe);
        } else if (typeof m == "object") return typeof m.data == "string" && (m.data = JSON.parse(m.data)), Array.isArray(m.data) && (m.fields || (m.fields = m.meta && m.meta.fields || Z), m.fields || (m.fields = Array.isArray(m.data[0]) ? m.fields : typeof m.data[0] == "object" ? Object.keys(m.data[0]) : []), Array.isArray(m.data[0]) || typeof m.data[0] == "object" || (m.data = [m.data])), W(m.fields || [], m.data || [], oe);
        throw new Error("Unable to serialize unrecognized input");
        function W(F, A, ne) {
          var K = "", le = (typeof F == "string" && (F = JSON.parse(F)), typeof A == "string" && (A = JSON.parse(A)), Array.isArray(F) && 0 < F.length), Oe = !Array.isArray(A[0]);
          if (le && E) {
            for (var X = 0; X < F.length; X++) 0 < X && (K += x), K += D(F[X], X);
            0 < A.length && (K += j);
          }
          for (var ae = 0; ae < A.length; ae++) {
            var ue = (le ? F : A[ae]).length, L = !1, de = le ? Object.keys(A[ae]).length === 0 : A[ae].length === 0;
            if (ne && !le && (L = ne === "greedy" ? A[ae].join("").trim() === "" : A[ae].length === 1 && A[ae][0].length === 0), ne === "greedy" && le) {
              for (var pe = [], re = 0; re < ue; re++) {
                var se = Oe ? F[re] : re;
                pe.push(A[ae][se]);
              }
              L = pe.join("").trim() === "";
            }
            if (!L) {
              for (var ie = 0; ie < ue; ie++) {
                0 < ie && !de && (K += x);
                var je = le && Oe ? F[ie] : ie;
                K += D(A[ae][je], ie);
              }
              ae < A.length - 1 && (!ne || 0 < ue && !de) && (K += j);
            }
          }
          return K;
        }
        function D(F, A) {
          var ne, K;
          return F == null ? "" : F.constructor === Date ? JSON.stringify(F).slice(1, 25) : (K = !1, J && typeof F == "string" && J.test(F) && (F = "'" + F, K = !0), ne = F.toString().replace(N, Q), (K = K || y === !0 || typeof y == "function" && y(F, A) || Array.isArray(y) && y[A] || ((le, Oe) => {
            for (var X = 0; X < Oe.length; X++) if (-1 < le.indexOf(Oe[X])) return !0;
            return !1;
          })(ne, u.BAD_DELIMITERS) || -1 < ne.indexOf(x) || ne.charAt(0) === " " || ne.charAt(ne.length - 1) === " ") ? q + ne + q : ne);
        }
      }, u.RECORD_SEP = "", u.UNIT_SEP = "", u.BYTE_ORDER_MARK = "\uFEFF", u.BAD_DELIMITERS = ["\r", `
`, '"', u.BYTE_ORDER_MARK], u.WORKERS_SUPPORTED = !o && !!i.Worker, u.NODE_STREAM_INPUT = 1, u.LocalChunkSize = 10485760, u.RemoteChunkSize = 5242880, u.DefaultDelimiter = ",", u.Parser = T, u.ParserHandle = _, u.NetworkStreamer = d, u.FileStreamer = f, u.StringStreamer = h, u.ReadableStreamStreamer = v, i.jQuery && ((n = i.jQuery).fn.parse = function(m) {
        var p = m.config || {}, y = [];
        return this.each(function(j) {
          if (!(n(this).prop("tagName").toUpperCase() === "INPUT" && n(this).attr("type").toLowerCase() === "file" && i.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var q = 0; q < this.files.length; q++) y.push({ file: this.files[q], inputElem: this, instanceConfig: n.extend({}, p) });
        }), E(), this;
        function E() {
          if (y.length === 0) z(m.complete) && m.complete();
          else {
            var j, q, Q, oe, Z = y[0];
            if (z(m.before)) {
              var J = m.before(Z.file, Z.inputElem);
              if (typeof J == "object") {
                if (J.action === "abort") return j = "AbortError", q = Z.file, Q = Z.inputElem, oe = J.reason, void (z(m.error) && m.error({ name: j }, q, Q, oe));
                if (J.action === "skip") return void x();
                typeof J.config == "object" && (Z.instanceConfig = n.extend(Z.instanceConfig, J.config));
              } else if (J === "skip") return void x();
            }
            var N = Z.instanceConfig.complete;
            Z.instanceConfig.complete = function(W) {
              z(N) && N(W, Z.file, Z.inputElem), x();
            }, u.parse(Z.file, Z.instanceConfig);
          }
        }
        function x() {
          y.splice(0, 1), E();
        }
      }), a && (i.onmessage = function(m) {
        m = m.data, u.WORKER_ID === void 0 && m && (u.WORKER_ID = m.workerId), typeof m.input == "string" ? i.postMessage({ workerId: u.WORKER_ID, results: u.parse(m.input, m.config), finished: !0 }) : (i.File && m.input instanceof File || m.input instanceof Object) && (m = u.parse(m.input, m.config)) && i.postMessage({ workerId: u.WORKER_ID, results: m, finished: !0 });
      }), (d.prototype = Object.create(l.prototype)).constructor = d, (f.prototype = Object.create(l.prototype)).constructor = f, (h.prototype = Object.create(h.prototype)).constructor = h, (v.prototype = Object.create(l.prototype)).constructor = v, u;
    });
  })(cr)), cr.exports;
}
var Q1 = Y1();
const ZS = /* @__PURE__ */ Bn(Q1);
function Tc(e, t, r, i, n, o, a) {
  try {
    var s = e[o](a), c = s.value;
  } catch (u) {
    return void r(u);
  }
  s.done ? t(c) : Promise.resolve(c).then(i, n);
}
function DS(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(i, n) {
      var o = e.apply(t, r);
      function a(c) {
        Tc(o, i, n, a, s, "next", c);
      }
      function s(c) {
        Tc(o, i, n, a, s, "throw", c);
      }
      a(void 0);
    });
  };
}
function eS(e, t) {
  if (yn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(e, t);
    if (yn(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function tS(e) {
  var t = eS(e, "string");
  return yn(t) == "symbol" ? t : t + "";
}
function jS(e, t, r) {
  return (t = tS(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var cn = { exports: {} }, Et = { exports: {} }, nS = Et.exports, Nc;
function rS() {
  return Nc || (Nc = 1, (function() {
    var e, t, r, i, n, o;
    typeof performance < "u" && performance !== null && performance.now ? Et.exports = function() {
      return performance.now();
    } : typeof process < "u" && process !== null && process.hrtime ? (Et.exports = function() {
      return (e() - n) / 1e6;
    }, t = process.hrtime, e = function() {
      var a;
      return a = t(), a[0] * 1e9 + a[1];
    }, i = e(), o = process.uptime() * 1e9, n = i - o) : Date.now ? (Et.exports = function() {
      return Date.now() - r;
    }, r = Date.now()) : (Et.exports = function() {
      return (/* @__PURE__ */ new Date()).getTime() - r;
    }, r = (/* @__PURE__ */ new Date()).getTime());
  }).call(nS)), Et.exports;
}
var Cc;
function iS() {
  if (Cc) return cn.exports;
  Cc = 1;
  for (var e = rS(), t = typeof window > "u" ? nw : window, r = ["moz", "webkit"], i = "AnimationFrame", n = t["request" + i], o = t["cancel" + i] || t["cancelRequest" + i], a = 0; !n && a < r.length; a++)
    n = t[r[a] + "Request" + i], o = t[r[a] + "Cancel" + i] || t[r[a] + "CancelRequest" + i];
  if (!n || !o) {
    var s = 0, c = 0, u = [], l = 1e3 / 60;
    n = function(d) {
      if (u.length === 0) {
        var f = e(), h = Math.max(0, l - (f - s));
        s = h + f, setTimeout(function() {
          var v = u.slice(0);
          u.length = 0;
          for (var _ = 0; _ < v.length; _++)
            if (!v[_].cancelled)
              try {
                v[_].callback(s);
              } catch (k) {
                setTimeout(function() {
                  throw k;
                }, 0);
              }
        }, Math.round(h));
      }
      return u.push({
        handle: ++c,
        callback: d,
        cancelled: !1
      }), c;
    }, o = function(d) {
      for (var f = 0; f < u.length; f++)
        u[f].handle === d && (u[f].cancelled = !0);
    };
  }
  return cn.exports = function(d) {
    return n.call(t, d);
  }, cn.exports.cancel = function() {
    o.apply(t, arguments);
  }, cn.exports.polyfill = function(d) {
    d || (d = t), d.requestAnimationFrame = n, d.cancelAnimationFrame = o;
  }, cn.exports;
}
var oS = iS();
const PS = /* @__PURE__ */ Bn(oS);
var Mi, Uc;
function aS() {
  return Uc || (Uc = 1, Mi = function(e) {
    this.ok = !1, this.alpha = 1, e.charAt(0) == "#" && (e = e.substr(1, 6)), e = e.replace(/ /g, ""), e = e.toLowerCase();
    var t = {
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
    e = t[e] || e;
    for (var r = [
      {
        re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
        example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
        process: function(c) {
          return [
            parseInt(c[1]),
            parseInt(c[2]),
            parseInt(c[3]),
            parseFloat(c[4])
          ];
        }
      },
      {
        re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
        example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
        process: function(c) {
          return [
            parseInt(c[1]),
            parseInt(c[2]),
            parseInt(c[3])
          ];
        }
      },
      {
        re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        example: ["#00ff00", "336699"],
        process: function(c) {
          return [
            parseInt(c[1], 16),
            parseInt(c[2], 16),
            parseInt(c[3], 16)
          ];
        }
      },
      {
        re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        example: ["#fb0", "f0f"],
        process: function(c) {
          return [
            parseInt(c[1] + c[1], 16),
            parseInt(c[2] + c[2], 16),
            parseInt(c[3] + c[3], 16)
          ];
        }
      }
    ], i = 0; i < r.length; i++) {
      var n = r[i].re, o = r[i].process, a = n.exec(e);
      if (a) {
        var s = o(a);
        this.r = s[0], this.g = s[1], this.b = s[2], s.length > 3 && (this.alpha = s[3]), this.ok = !0;
      }
    }
    this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha, this.toRGB = function() {
      return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    }, this.toRGBA = function() {
      return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
    }, this.toHex = function() {
      var c = this.r.toString(16), u = this.g.toString(16), l = this.b.toString(16);
      return c.length == 1 && (c = "0" + c), u.length == 1 && (u = "0" + u), l.length == 1 && (l = "0" + l), "#" + c + u + l;
    }, this.getHelpXML = function() {
      for (var c = new Array(), u = 0; u < r.length; u++)
        for (var l = r[u].example, d = 0; d < l.length; d++)
          c[c.length] = l[d];
      for (var f in t)
        c[c.length] = f;
      var h = document.createElement("ul");
      h.setAttribute("id", "rgbcolor-examples");
      for (var u = 0; u < c.length; u++)
        try {
          var v = document.createElement("li"), _ = new RGBColor(c[u]), k = document.createElement("div");
          k.style.cssText = "margin: 3px; border: 1px solid black; background:" + _.toHex() + "; color:" + _.toHex(), k.appendChild(document.createTextNode("test"));
          var T = document.createTextNode(
            " " + c[u] + " -> " + _.toRGB() + " -> " + _.toHex()
          );
          v.appendChild(k), v.appendChild(T), h.appendChild(v);
        } catch {
        }
      return h;
    };
  }), Mi;
}
var sS = aS();
const RS = /* @__PURE__ */ Bn(sS);
var Mm = function(e, t) {
  return (Mm = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
    r.__proto__ = i;
  } || function(r, i) {
    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (r[n] = i[n]);
  })(e, t);
};
function Bm(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  function r() {
    this.constructor = e;
  }
  Mm(e, t), e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
function cS(e) {
  var t = "";
  Array.isArray(e) || (e = [e]);
  for (var r = 0; r < e.length; r++) {
    var i = e[r];
    if (i.type === w.CLOSE_PATH) t += "z";
    else if (i.type === w.HORIZ_LINE_TO) t += (i.relative ? "h" : "H") + i.x;
    else if (i.type === w.VERT_LINE_TO) t += (i.relative ? "v" : "V") + i.y;
    else if (i.type === w.MOVE_TO) t += (i.relative ? "m" : "M") + i.x + " " + i.y;
    else if (i.type === w.LINE_TO) t += (i.relative ? "l" : "L") + i.x + " " + i.y;
    else if (i.type === w.CURVE_TO) t += (i.relative ? "c" : "C") + i.x1 + " " + i.y1 + " " + i.x2 + " " + i.y2 + " " + i.x + " " + i.y;
    else if (i.type === w.SMOOTH_CURVE_TO) t += (i.relative ? "s" : "S") + i.x2 + " " + i.y2 + " " + i.x + " " + i.y;
    else if (i.type === w.QUAD_TO) t += (i.relative ? "q" : "Q") + i.x1 + " " + i.y1 + " " + i.x + " " + i.y;
    else if (i.type === w.SMOOTH_QUAD_TO) t += (i.relative ? "t" : "T") + i.x + " " + i.y;
    else {
      if (i.type !== w.ARC) throw new Error('Unexpected command type "' + i.type + '" at index ' + r + ".");
      t += (i.relative ? "a" : "A") + i.rX + " " + i.rY + " " + i.xRot + " " + +i.lArcFlag + " " + +i.sweepFlag + " " + i.x + " " + i.y;
    }
  }
  return t;
}
function co(e, t) {
  var r = e[0], i = e[1];
  return [r * Math.cos(t) - i * Math.sin(t), r * Math.sin(t) + i * Math.cos(t)];
}
function rt() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var r = 0; r < e.length; r++) if (typeof e[r] != "number") throw new Error("assertNumbers arguments[" + r + "] is not a number. " + typeof e[r] + " == typeof " + e[r]);
  return !0;
}
var _t = Math.PI;
function Bi(e, t, r) {
  e.lArcFlag = e.lArcFlag === 0 ? 0 : 1, e.sweepFlag = e.sweepFlag === 0 ? 0 : 1;
  var i = e.rX, n = e.rY, o = e.x, a = e.y;
  i = Math.abs(e.rX), n = Math.abs(e.rY);
  var s = co([(t - o) / 2, (r - a) / 2], -e.xRot / 180 * _t), c = s[0], u = s[1], l = Math.pow(c, 2) / Math.pow(i, 2) + Math.pow(u, 2) / Math.pow(n, 2);
  1 < l && (i *= Math.sqrt(l), n *= Math.sqrt(l)), e.rX = i, e.rY = n;
  var d = Math.pow(i, 2) * Math.pow(u, 2) + Math.pow(n, 2) * Math.pow(c, 2), f = (e.lArcFlag !== e.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(i, 2) * Math.pow(n, 2) - d) / d)), h = i * u / n * f, v = -n * c / i * f, _ = co([h, v], e.xRot / 180 * _t);
  e.cX = _[0] + (t + o) / 2, e.cY = _[1] + (r + a) / 2, e.phi1 = Math.atan2((u - v) / n, (c - h) / i), e.phi2 = Math.atan2((-u - v) / n, (-c - h) / i), e.sweepFlag === 0 && e.phi2 > e.phi1 && (e.phi2 -= 2 * _t), e.sweepFlag === 1 && e.phi2 < e.phi1 && (e.phi2 += 2 * _t), e.phi1 *= 180 / _t, e.phi2 *= 180 / _t;
}
function Ac(e, t, r) {
  rt(e, t, r);
  var i = e * e + t * t - r * r;
  if (0 > i) return [];
  if (i === 0) return [[e * r / (e * e + t * t), t * r / (e * e + t * t)]];
  var n = Math.sqrt(i);
  return [[(e * r + t * n) / (e * e + t * t), (t * r - e * n) / (e * e + t * t)], [(e * r - t * n) / (e * e + t * t), (t * r + e * n) / (e * e + t * t)]];
}
var Ie, ft = Math.PI / 180;
function Zc(e, t, r) {
  return (1 - r) * e + r * t;
}
function Dc(e, t, r, i) {
  return e + Math.cos(i / 180 * _t) * t + Math.sin(i / 180 * _t) * r;
}
function jc(e, t, r, i) {
  var n = 1e-6, o = t - e, a = r - t, s = 3 * o + 3 * (i - r) - 6 * a, c = 6 * (a - o), u = 3 * o;
  return Math.abs(s) < n ? [-u / c] : (function(l, d, f) {
    var h = l * l / 4 - d;
    if (h < -f) return [];
    if (h <= f) return [-l / 2];
    var v = Math.sqrt(h);
    return [-l / 2 - v, -l / 2 + v];
  })(c / s, u / s, n);
}
function Pc(e, t, r, i, n) {
  var o = 1 - n;
  return e * (o * o * o) + t * (3 * o * o * n) + r * (3 * o * n * n) + i * (n * n * n);
}
(function(e) {
  function t() {
    return n((function(s, c, u) {
      return s.relative && (s.x1 !== void 0 && (s.x1 += c), s.y1 !== void 0 && (s.y1 += u), s.x2 !== void 0 && (s.x2 += c), s.y2 !== void 0 && (s.y2 += u), s.x !== void 0 && (s.x += c), s.y !== void 0 && (s.y += u), s.relative = !1), s;
    }));
  }
  function r() {
    var s = NaN, c = NaN, u = NaN, l = NaN;
    return n((function(d, f, h) {
      return d.type & w.SMOOTH_CURVE_TO && (d.type = w.CURVE_TO, s = isNaN(s) ? f : s, c = isNaN(c) ? h : c, d.x1 = d.relative ? f - s : 2 * f - s, d.y1 = d.relative ? h - c : 2 * h - c), d.type & w.CURVE_TO ? (s = d.relative ? f + d.x2 : d.x2, c = d.relative ? h + d.y2 : d.y2) : (s = NaN, c = NaN), d.type & w.SMOOTH_QUAD_TO && (d.type = w.QUAD_TO, u = isNaN(u) ? f : u, l = isNaN(l) ? h : l, d.x1 = d.relative ? f - u : 2 * f - u, d.y1 = d.relative ? h - l : 2 * h - l), d.type & w.QUAD_TO ? (u = d.relative ? f + d.x1 : d.x1, l = d.relative ? h + d.y1 : d.y1) : (u = NaN, l = NaN), d;
    }));
  }
  function i() {
    var s = NaN, c = NaN;
    return n((function(u, l, d) {
      if (u.type & w.SMOOTH_QUAD_TO && (u.type = w.QUAD_TO, s = isNaN(s) ? l : s, c = isNaN(c) ? d : c, u.x1 = u.relative ? l - s : 2 * l - s, u.y1 = u.relative ? d - c : 2 * d - c), u.type & w.QUAD_TO) {
        s = u.relative ? l + u.x1 : u.x1, c = u.relative ? d + u.y1 : u.y1;
        var f = u.x1, h = u.y1;
        u.type = w.CURVE_TO, u.x1 = ((u.relative ? 0 : l) + 2 * f) / 3, u.y1 = ((u.relative ? 0 : d) + 2 * h) / 3, u.x2 = (u.x + 2 * f) / 3, u.y2 = (u.y + 2 * h) / 3;
      } else s = NaN, c = NaN;
      return u;
    }));
  }
  function n(s) {
    var c = 0, u = 0, l = NaN, d = NaN;
    return function(f) {
      if (isNaN(l) && !(f.type & w.MOVE_TO)) throw new Error("path must start with moveto");
      var h = s(f, c, u, l, d);
      return f.type & w.CLOSE_PATH && (c = l, u = d), f.x !== void 0 && (c = f.relative ? c + f.x : f.x), f.y !== void 0 && (u = f.relative ? u + f.y : f.y), f.type & w.MOVE_TO && (l = c, d = u), h;
    };
  }
  function o(s, c, u, l, d, f) {
    return rt(s, c, u, l, d, f), n((function(h, v, _, k) {
      var T = h.x1, B = h.x2, S = h.relative && !isNaN(k), O = h.x !== void 0 ? h.x : S ? 0 : v, U = h.y !== void 0 ? h.y : S ? 0 : _;
      function R(F) {
        return F * F;
      }
      h.type & w.HORIZ_LINE_TO && c !== 0 && (h.type = w.LINE_TO, h.y = h.relative ? 0 : _), h.type & w.VERT_LINE_TO && u !== 0 && (h.type = w.LINE_TO, h.x = h.relative ? 0 : v), h.x !== void 0 && (h.x = h.x * s + U * u + (S ? 0 : d)), h.y !== void 0 && (h.y = O * c + h.y * l + (S ? 0 : f)), h.x1 !== void 0 && (h.x1 = h.x1 * s + h.y1 * u + (S ? 0 : d)), h.y1 !== void 0 && (h.y1 = T * c + h.y1 * l + (S ? 0 : f)), h.x2 !== void 0 && (h.x2 = h.x2 * s + h.y2 * u + (S ? 0 : d)), h.y2 !== void 0 && (h.y2 = B * c + h.y2 * l + (S ? 0 : f));
      var z = s * l - c * u;
      if (h.xRot !== void 0 && (s !== 1 || c !== 0 || u !== 0 || l !== 1)) if (z === 0) delete h.rX, delete h.rY, delete h.xRot, delete h.lArcFlag, delete h.sweepFlag, h.type = w.LINE_TO;
      else {
        var m = h.xRot * Math.PI / 180, p = Math.sin(m), y = Math.cos(m), E = 1 / R(h.rX), x = 1 / R(h.rY), j = R(y) * E + R(p) * x, q = 2 * p * y * (E - x), Q = R(p) * E + R(y) * x, oe = j * l * l - q * c * l + Q * c * c, Z = q * (s * l + c * u) - 2 * (j * u * l + Q * s * c), J = j * u * u - q * s * u + Q * s * s, N = (Math.atan2(Z, oe - J) + Math.PI) % Math.PI / 2, W = Math.sin(N), D = Math.cos(N);
        h.rX = Math.abs(z) / Math.sqrt(oe * R(D) + Z * W * D + J * R(W)), h.rY = Math.abs(z) / Math.sqrt(oe * R(W) - Z * W * D + J * R(D)), h.xRot = 180 * N / Math.PI;
      }
      return h.sweepFlag !== void 0 && 0 > z && (h.sweepFlag = +!h.sweepFlag), h;
    }));
  }
  function a() {
    return function(s) {
      var c = {};
      for (var u in s) c[u] = s[u];
      return c;
    };
  }
  e.ROUND = function(s) {
    function c(u) {
      return Math.round(u * s) / s;
    }
    return s === void 0 && (s = 1e13), rt(s), function(u) {
      return u.x1 !== void 0 && (u.x1 = c(u.x1)), u.y1 !== void 0 && (u.y1 = c(u.y1)), u.x2 !== void 0 && (u.x2 = c(u.x2)), u.y2 !== void 0 && (u.y2 = c(u.y2)), u.x !== void 0 && (u.x = c(u.x)), u.y !== void 0 && (u.y = c(u.y)), u.rX !== void 0 && (u.rX = c(u.rX)), u.rY !== void 0 && (u.rY = c(u.rY)), u;
    };
  }, e.TO_ABS = t, e.TO_REL = function() {
    return n((function(s, c, u) {
      return s.relative || (s.x1 !== void 0 && (s.x1 -= c), s.y1 !== void 0 && (s.y1 -= u), s.x2 !== void 0 && (s.x2 -= c), s.y2 !== void 0 && (s.y2 -= u), s.x !== void 0 && (s.x -= c), s.y !== void 0 && (s.y -= u), s.relative = !0), s;
    }));
  }, e.NORMALIZE_HVZ = function(s, c, u) {
    return s === void 0 && (s = !0), c === void 0 && (c = !0), u === void 0 && (u = !0), n((function(l, d, f, h, v) {
      if (isNaN(h) && !(l.type & w.MOVE_TO)) throw new Error("path must start with moveto");
      return c && l.type & w.HORIZ_LINE_TO && (l.type = w.LINE_TO, l.y = l.relative ? 0 : f), u && l.type & w.VERT_LINE_TO && (l.type = w.LINE_TO, l.x = l.relative ? 0 : d), s && l.type & w.CLOSE_PATH && (l.type = w.LINE_TO, l.x = l.relative ? h - d : h, l.y = l.relative ? v - f : v), l.type & w.ARC && (l.rX === 0 || l.rY === 0) && (l.type = w.LINE_TO, delete l.rX, delete l.rY, delete l.xRot, delete l.lArcFlag, delete l.sweepFlag), l;
    }));
  }, e.NORMALIZE_ST = r, e.QT_TO_C = i, e.INFO = n, e.SANITIZE = function(s) {
    s === void 0 && (s = 0), rt(s);
    var c = NaN, u = NaN, l = NaN, d = NaN;
    return n((function(f, h, v, _, k) {
      var T = Math.abs, B = !1, S = 0, O = 0;
      if (f.type & w.SMOOTH_CURVE_TO && (S = isNaN(c) ? 0 : h - c, O = isNaN(u) ? 0 : v - u), f.type & (w.CURVE_TO | w.SMOOTH_CURVE_TO) ? (c = f.relative ? h + f.x2 : f.x2, u = f.relative ? v + f.y2 : f.y2) : (c = NaN, u = NaN), f.type & w.SMOOTH_QUAD_TO ? (l = isNaN(l) ? h : 2 * h - l, d = isNaN(d) ? v : 2 * v - d) : f.type & w.QUAD_TO ? (l = f.relative ? h + f.x1 : f.x1, d = f.relative ? v + f.y1 : f.y2) : (l = NaN, d = NaN), f.type & w.LINE_COMMANDS || f.type & w.ARC && (f.rX === 0 || f.rY === 0 || !f.lArcFlag) || f.type & w.CURVE_TO || f.type & w.SMOOTH_CURVE_TO || f.type & w.QUAD_TO || f.type & w.SMOOTH_QUAD_TO) {
        var U = f.x === void 0 ? 0 : f.relative ? f.x : f.x - h, R = f.y === void 0 ? 0 : f.relative ? f.y : f.y - v;
        S = isNaN(l) ? f.x1 === void 0 ? S : f.relative ? f.x : f.x1 - h : l - h, O = isNaN(d) ? f.y1 === void 0 ? O : f.relative ? f.y : f.y1 - v : d - v;
        var z = f.x2 === void 0 ? 0 : f.relative ? f.x : f.x2 - h, m = f.y2 === void 0 ? 0 : f.relative ? f.y : f.y2 - v;
        T(U) <= s && T(R) <= s && T(S) <= s && T(O) <= s && T(z) <= s && T(m) <= s && (B = !0);
      }
      return f.type & w.CLOSE_PATH && T(h - _) <= s && T(v - k) <= s && (B = !0), B ? [] : f;
    }));
  }, e.MATRIX = o, e.ROTATE = function(s, c, u) {
    c === void 0 && (c = 0), u === void 0 && (u = 0), rt(s, c, u);
    var l = Math.sin(s), d = Math.cos(s);
    return o(d, l, -l, d, c - c * d + u * l, u - c * l - u * d);
  }, e.TRANSLATE = function(s, c) {
    return c === void 0 && (c = 0), rt(s, c), o(1, 0, 0, 1, s, c);
  }, e.SCALE = function(s, c) {
    return c === void 0 && (c = s), rt(s, c), o(s, 0, 0, c, 0, 0);
  }, e.SKEW_X = function(s) {
    return rt(s), o(1, 0, Math.atan(s), 1, 0, 0);
  }, e.SKEW_Y = function(s) {
    return rt(s), o(1, Math.atan(s), 0, 1, 0, 0);
  }, e.X_AXIS_SYMMETRY = function(s) {
    return s === void 0 && (s = 0), rt(s), o(-1, 0, 0, 1, s, 0);
  }, e.Y_AXIS_SYMMETRY = function(s) {
    return s === void 0 && (s = 0), rt(s), o(1, 0, 0, -1, 0, s);
  }, e.A_TO_C = function() {
    return n((function(s, c, u) {
      return w.ARC === s.type ? (function(l, d, f) {
        var h, v, _, k;
        l.cX || Bi(l, d, f);
        for (var T = Math.min(l.phi1, l.phi2), B = Math.max(l.phi1, l.phi2) - T, S = Math.ceil(B / 90), O = new Array(S), U = d, R = f, z = 0; z < S; z++) {
          var m = Zc(l.phi1, l.phi2, z / S), p = Zc(l.phi1, l.phi2, (z + 1) / S), y = p - m, E = 4 / 3 * Math.tan(y * ft / 4), x = [Math.cos(m * ft) - E * Math.sin(m * ft), Math.sin(m * ft) + E * Math.cos(m * ft)], j = x[0], q = x[1], Q = [Math.cos(p * ft), Math.sin(p * ft)], oe = Q[0], Z = Q[1], J = [oe + E * Math.sin(p * ft), Z - E * Math.cos(p * ft)], N = J[0], W = J[1];
          O[z] = { relative: l.relative, type: w.CURVE_TO };
          var D = function(F, A) {
            var ne = co([F * l.rX, A * l.rY], l.xRot), K = ne[0], le = ne[1];
            return [l.cX + K, l.cY + le];
          };
          h = D(j, q), O[z].x1 = h[0], O[z].y1 = h[1], v = D(N, W), O[z].x2 = v[0], O[z].y2 = v[1], _ = D(oe, Z), O[z].x = _[0], O[z].y = _[1], l.relative && (O[z].x1 -= U, O[z].y1 -= R, O[z].x2 -= U, O[z].y2 -= R, O[z].x -= U, O[z].y -= R), U = (k = [O[z].x, O[z].y])[0], R = k[1];
        }
        return O;
      })(s, s.relative ? 0 : c, s.relative ? 0 : u) : s;
    }));
  }, e.ANNOTATE_ARCS = function() {
    return n((function(s, c, u) {
      return s.relative && (c = 0, u = 0), w.ARC === s.type && Bi(s, c, u), s;
    }));
  }, e.CLONE = a, e.CALCULATE_BOUNDS = function() {
    var s = function(f) {
      var h = {};
      for (var v in f) h[v] = f[v];
      return h;
    }, c = t(), u = i(), l = r(), d = n((function(f, h, v) {
      var _ = l(u(c(s(f))));
      function k(W) {
        W > d.maxX && (d.maxX = W), W < d.minX && (d.minX = W);
      }
      function T(W) {
        W > d.maxY && (d.maxY = W), W < d.minY && (d.minY = W);
      }
      if (_.type & w.DRAWING_COMMANDS && (k(h), T(v)), _.type & w.HORIZ_LINE_TO && k(_.x), _.type & w.VERT_LINE_TO && T(_.y), _.type & w.LINE_TO && (k(_.x), T(_.y)), _.type & w.CURVE_TO) {
        k(_.x), T(_.y);
        for (var B = 0, S = jc(h, _.x1, _.x2, _.x); B < S.length; B++)
          0 < (N = S[B]) && 1 > N && k(Pc(h, _.x1, _.x2, _.x, N));
        for (var O = 0, U = jc(v, _.y1, _.y2, _.y); O < U.length; O++)
          0 < (N = U[O]) && 1 > N && T(Pc(v, _.y1, _.y2, _.y, N));
      }
      if (_.type & w.ARC) {
        k(_.x), T(_.y), Bi(_, h, v);
        for (var R = _.xRot / 180 * Math.PI, z = Math.cos(R) * _.rX, m = Math.sin(R) * _.rX, p = -Math.sin(R) * _.rY, y = Math.cos(R) * _.rY, E = _.phi1 < _.phi2 ? [_.phi1, _.phi2] : -180 > _.phi2 ? [_.phi2 + 360, _.phi1 + 360] : [_.phi2, _.phi1], x = E[0], j = E[1], q = function(W) {
          var D = W[0], F = W[1], A = 180 * Math.atan2(F, D) / Math.PI;
          return A < x ? A + 360 : A;
        }, Q = 0, oe = Ac(p, -z, 0).map(q); Q < oe.length; Q++)
          (N = oe[Q]) > x && N < j && k(Dc(_.cX, z, p, N));
        for (var Z = 0, J = Ac(y, -m, 0).map(q); Z < J.length; Z++) {
          var N;
          (N = J[Z]) > x && N < j && T(Dc(_.cY, m, y, N));
        }
      }
      return f;
    }));
    return d.minX = 1 / 0, d.maxX = -1 / 0, d.minY = 1 / 0, d.maxY = -1 / 0, d;
  };
})(Ie || (Ie = {}));
var nt, Jm = (function() {
  function e() {
  }
  return e.prototype.round = function(t) {
    return this.transform(Ie.ROUND(t));
  }, e.prototype.toAbs = function() {
    return this.transform(Ie.TO_ABS());
  }, e.prototype.toRel = function() {
    return this.transform(Ie.TO_REL());
  }, e.prototype.normalizeHVZ = function(t, r, i) {
    return this.transform(Ie.NORMALIZE_HVZ(t, r, i));
  }, e.prototype.normalizeST = function() {
    return this.transform(Ie.NORMALIZE_ST());
  }, e.prototype.qtToC = function() {
    return this.transform(Ie.QT_TO_C());
  }, e.prototype.aToC = function() {
    return this.transform(Ie.A_TO_C());
  }, e.prototype.sanitize = function(t) {
    return this.transform(Ie.SANITIZE(t));
  }, e.prototype.translate = function(t, r) {
    return this.transform(Ie.TRANSLATE(t, r));
  }, e.prototype.scale = function(t, r) {
    return this.transform(Ie.SCALE(t, r));
  }, e.prototype.rotate = function(t, r, i) {
    return this.transform(Ie.ROTATE(t, r, i));
  }, e.prototype.matrix = function(t, r, i, n, o, a) {
    return this.transform(Ie.MATRIX(t, r, i, n, o, a));
  }, e.prototype.skewX = function(t) {
    return this.transform(Ie.SKEW_X(t));
  }, e.prototype.skewY = function(t) {
    return this.transform(Ie.SKEW_Y(t));
  }, e.prototype.xSymmetry = function(t) {
    return this.transform(Ie.X_AXIS_SYMMETRY(t));
  }, e.prototype.ySymmetry = function(t) {
    return this.transform(Ie.Y_AXIS_SYMMETRY(t));
  }, e.prototype.annotateArcs = function() {
    return this.transform(Ie.ANNOTATE_ARCS());
  }, e;
})(), uS = function(e) {
  return e === " " || e === "	" || e === "\r" || e === `
`;
}, Rc = function(e) {
  return 48 <= e.charCodeAt(0) && e.charCodeAt(0) <= 57;
}, lS = (function(e) {
  function t() {
    var r = e.call(this) || this;
    return r.curNumber = "", r.curCommandType = -1, r.curCommandRelative = !1, r.canParseCommandOrComma = !0, r.curNumberHasExp = !1, r.curNumberHasExpDigits = !1, r.curNumberHasDecimal = !1, r.curArgs = [], r;
  }
  return Bm(t, e), t.prototype.finish = function(r) {
    if (r === void 0 && (r = []), this.parse(" ", r), this.curArgs.length !== 0 || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
    return r;
  }, t.prototype.parse = function(r, i) {
    var n = this;
    i === void 0 && (i = []);
    for (var o = function(d) {
      i.push(d), n.curArgs.length = 0, n.canParseCommandOrComma = !0;
    }, a = 0; a < r.length; a++) {
      var s = r[a], c = !(this.curCommandType !== w.ARC || this.curArgs.length !== 3 && this.curArgs.length !== 4 || this.curNumber.length !== 1 || this.curNumber !== "0" && this.curNumber !== "1"), u = Rc(s) && (this.curNumber === "0" && s === "0" || c);
      if (!Rc(s) || u) if (s !== "e" && s !== "E") if (s !== "-" && s !== "+" || !this.curNumberHasExp || this.curNumberHasExpDigits) if (s !== "." || this.curNumberHasExp || this.curNumberHasDecimal || c) {
        if (this.curNumber && this.curCommandType !== -1) {
          var l = Number(this.curNumber);
          if (isNaN(l)) throw new SyntaxError("Invalid number ending at " + a);
          if (this.curCommandType === w.ARC) {
            if (this.curArgs.length === 0 || this.curArgs.length === 1) {
              if (0 > l) throw new SyntaxError('Expected positive number, got "' + l + '" at index "' + a + '"');
            } else if ((this.curArgs.length === 3 || this.curArgs.length === 4) && this.curNumber !== "0" && this.curNumber !== "1") throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + a + '"');
          }
          this.curArgs.push(l), this.curArgs.length === dS[this.curCommandType] && (w.HORIZ_LINE_TO === this.curCommandType ? o({ type: w.HORIZ_LINE_TO, relative: this.curCommandRelative, x: l }) : w.VERT_LINE_TO === this.curCommandType ? o({ type: w.VERT_LINE_TO, relative: this.curCommandRelative, y: l }) : this.curCommandType === w.MOVE_TO || this.curCommandType === w.LINE_TO || this.curCommandType === w.SMOOTH_QUAD_TO ? (o({ type: this.curCommandType, relative: this.curCommandRelative, x: this.curArgs[0], y: this.curArgs[1] }), w.MOVE_TO === this.curCommandType && (this.curCommandType = w.LINE_TO)) : this.curCommandType === w.CURVE_TO ? o({ type: w.CURVE_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x2: this.curArgs[2], y2: this.curArgs[3], x: this.curArgs[4], y: this.curArgs[5] }) : this.curCommandType === w.SMOOTH_CURVE_TO ? o({ type: w.SMOOTH_CURVE_TO, relative: this.curCommandRelative, x2: this.curArgs[0], y2: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === w.QUAD_TO ? o({ type: w.QUAD_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === w.ARC && o({ type: w.ARC, relative: this.curCommandRelative, rX: this.curArgs[0], rY: this.curArgs[1], xRot: this.curArgs[2], lArcFlag: this.curArgs[3], sweepFlag: this.curArgs[4], x: this.curArgs[5], y: this.curArgs[6] })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
        }
        if (!uS(s)) if (s === "," && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;
        else if (s !== "+" && s !== "-" && s !== ".") if (u) this.curNumber = s, this.curNumberHasDecimal = !1;
        else {
          if (this.curArgs.length !== 0) throw new SyntaxError("Unterminated command at index " + a + ".");
          if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + s + '" at index ' + a + ". Command cannot follow comma");
          if (this.canParseCommandOrComma = !1, s !== "z" && s !== "Z") if (s === "h" || s === "H") this.curCommandType = w.HORIZ_LINE_TO, this.curCommandRelative = s === "h";
          else if (s === "v" || s === "V") this.curCommandType = w.VERT_LINE_TO, this.curCommandRelative = s === "v";
          else if (s === "m" || s === "M") this.curCommandType = w.MOVE_TO, this.curCommandRelative = s === "m";
          else if (s === "l" || s === "L") this.curCommandType = w.LINE_TO, this.curCommandRelative = s === "l";
          else if (s === "c" || s === "C") this.curCommandType = w.CURVE_TO, this.curCommandRelative = s === "c";
          else if (s === "s" || s === "S") this.curCommandType = w.SMOOTH_CURVE_TO, this.curCommandRelative = s === "s";
          else if (s === "q" || s === "Q") this.curCommandType = w.QUAD_TO, this.curCommandRelative = s === "q";
          else if (s === "t" || s === "T") this.curCommandType = w.SMOOTH_QUAD_TO, this.curCommandRelative = s === "t";
          else {
            if (s !== "a" && s !== "A") throw new SyntaxError('Unexpected character "' + s + '" at index ' + a + ".");
            this.curCommandType = w.ARC, this.curCommandRelative = s === "a";
          }
          else i.push({ type: w.CLOSE_PATH }), this.canParseCommandOrComma = !0, this.curCommandType = -1;
        }
        else this.curNumber = s, this.curNumberHasDecimal = s === ".";
      } else this.curNumber += s, this.curNumberHasDecimal = !0;
      else this.curNumber += s;
      else this.curNumber += s, this.curNumberHasExp = !0;
      else this.curNumber += s, this.curNumberHasExpDigits = this.curNumberHasExp;
    }
    return i;
  }, t.prototype.transform = function(r) {
    return Object.create(this, { parse: { value: function(i, n) {
      n === void 0 && (n = []);
      for (var o = 0, a = Object.getPrototypeOf(this).parse.call(this, i); o < a.length; o++) {
        var s = a[o], c = r(s);
        Array.isArray(c) ? n.push.apply(n, c) : n.push(c);
      }
      return n;
    } } });
  }, t;
})(Jm), w = (function(e) {
  function t(r) {
    var i = e.call(this) || this;
    return i.commands = typeof r == "string" ? t.parse(r) : r, i;
  }
  return Bm(t, e), t.prototype.encode = function() {
    return t.encode(this.commands);
  }, t.prototype.getBounds = function() {
    var r = Ie.CALCULATE_BOUNDS();
    return this.transform(r), r;
  }, t.prototype.transform = function(r) {
    for (var i = [], n = 0, o = this.commands; n < o.length; n++) {
      var a = r(o[n]);
      Array.isArray(a) ? i.push.apply(i, a) : i.push(a);
    }
    return this.commands = i, this;
  }, t.encode = function(r) {
    return cS(r);
  }, t.parse = function(r) {
    var i = new lS(), n = [];
    return i.parse(r, n), i.finish(n), n;
  }, t.CLOSE_PATH = 1, t.MOVE_TO = 2, t.HORIZ_LINE_TO = 4, t.VERT_LINE_TO = 8, t.LINE_TO = 16, t.CURVE_TO = 32, t.SMOOTH_CURVE_TO = 64, t.QUAD_TO = 128, t.SMOOTH_QUAD_TO = 256, t.ARC = 512, t.LINE_COMMANDS = t.LINE_TO | t.HORIZ_LINE_TO | t.VERT_LINE_TO, t.DRAWING_COMMANDS = t.HORIZ_LINE_TO | t.VERT_LINE_TO | t.LINE_TO | t.CURVE_TO | t.SMOOTH_CURVE_TO | t.QUAD_TO | t.SMOOTH_QUAD_TO | t.ARC, t;
})(Jm), dS = ((nt = {})[w.MOVE_TO] = 2, nt[w.LINE_TO] = 2, nt[w.HORIZ_LINE_TO] = 1, nt[w.VERT_LINE_TO] = 1, nt[w.CLOSE_PATH] = 0, nt[w.QUAD_TO] = 4, nt[w.SMOOTH_QUAD_TO] = 2, nt[w.CURVE_TO] = 6, nt[w.SMOOTH_CURVE_TO] = 4, nt[w.ARC] = 7, nt);
function ur(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ur = function(t) {
    return typeof t;
  } : ur = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ur(e);
}
function fS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var hS = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259], pS = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
function mS(e, t, r, i, n) {
  if (typeof e == "string" && (e = document.getElementById(e)), !e || ur(e) !== "object" || !("getContext" in e))
    throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
  var o = e.getContext("2d");
  try {
    return o.getImageData(t, r, i, n);
  } catch (a) {
    throw new Error("unable to access image data: " + a);
  }
}
function FS(e, t, r, i, n, o) {
  if (!(isNaN(o) || o < 1)) {
    o |= 0;
    var a = mS(e, t, r, i, n);
    a = gS(a, t, r, i, n, o), e.getContext("2d").putImageData(a, t, r);
  }
}
function gS(e, t, r, i, n, o) {
  for (var a = e.data, s = 2 * o + 1, c = i - 1, u = n - 1, l = o + 1, d = l * (l + 1) / 2, f = new Fc(), h = f, v, _ = 1; _ < s; _++)
    h = h.next = new Fc(), _ === l && (v = h);
  h.next = f;
  for (var k = null, T = null, B = 0, S = 0, O = hS[o], U = pS[o], R = 0; R < n; R++) {
    h = f;
    for (var z = a[S], m = a[S + 1], p = a[S + 2], y = a[S + 3], E = 0; E < l; E++)
      h.r = z, h.g = m, h.b = p, h.a = y, h = h.next;
    for (var x = 0, j = 0, q = 0, Q = 0, oe = l * z, Z = l * m, J = l * p, N = l * y, W = d * z, D = d * m, F = d * p, A = d * y, ne = 1; ne < l; ne++) {
      var K = S + ((c < ne ? c : ne) << 2), le = a[K], Oe = a[K + 1], X = a[K + 2], ae = a[K + 3], ue = l - ne;
      W += (h.r = le) * ue, D += (h.g = Oe) * ue, F += (h.b = X) * ue, A += (h.a = ae) * ue, x += le, j += Oe, q += X, Q += ae, h = h.next;
    }
    k = f, T = v;
    for (var L = 0; L < i; L++) {
      var de = A * O >>> U;
      if (a[S + 3] = de, de !== 0) {
        var pe = 255 / de;
        a[S] = (W * O >>> U) * pe, a[S + 1] = (D * O >>> U) * pe, a[S + 2] = (F * O >>> U) * pe;
      } else
        a[S] = a[S + 1] = a[S + 2] = 0;
      W -= oe, D -= Z, F -= J, A -= N, oe -= k.r, Z -= k.g, J -= k.b, N -= k.a;
      var re = L + o + 1;
      re = B + (re < c ? re : c) << 2, x += k.r = a[re], j += k.g = a[re + 1], q += k.b = a[re + 2], Q += k.a = a[re + 3], W += x, D += j, F += q, A += Q, k = k.next;
      var se = T, ie = se.r, je = se.g, H = se.b, ve = se.a;
      oe += ie, Z += je, J += H, N += ve, x -= ie, j -= je, q -= H, Q -= ve, T = T.next, S += 4;
    }
    B += i;
  }
  for (var Ue = 0; Ue < i; Ue++) {
    S = Ue << 2;
    var Pe = a[S], Ee = a[S + 1], Be = a[S + 2], ce = a[S + 3], Re = l * Pe, Se = l * Ee, Te = l * Be, Je = l * ce, mt = d * Pe, Ot = d * Ee, tt = d * Be, Ae = d * ce;
    h = f;
    for (var gt = 0; gt < l; gt++)
      h.r = Pe, h.g = Ee, h.b = Be, h.a = ce, h = h.next;
    for (var nn = i, ki = 0, wi = 0, Si = 0, Ii = 0, Jn = 1; Jn <= o; Jn++) {
      S = nn + Ue << 2;
      var Vn = l - Jn;
      mt += (h.r = Pe = a[S]) * Vn, Ot += (h.g = Ee = a[S + 1]) * Vn, tt += (h.b = Be = a[S + 2]) * Vn, Ae += (h.a = ce = a[S + 3]) * Vn, Ii += Pe, ki += Ee, wi += Be, Si += ce, h = h.next, Jn < u && (nn += i);
    }
    S = Ue, k = f, T = v;
    for (var zi = 0; zi < n; zi++) {
      var Fe = S << 2;
      a[Fe + 3] = ce = Ae * O >>> U, ce > 0 ? (ce = 255 / ce, a[Fe] = (mt * O >>> U) * ce, a[Fe + 1] = (Ot * O >>> U) * ce, a[Fe + 2] = (tt * O >>> U) * ce) : a[Fe] = a[Fe + 1] = a[Fe + 2] = 0, mt -= Re, Ot -= Se, tt -= Te, Ae -= Je, Re -= k.r, Se -= k.g, Te -= k.b, Je -= k.a, Fe = Ue + ((Fe = zi + l) < u ? Fe : u) * i << 2, mt += Ii += k.r = a[Fe], Ot += ki += k.g = a[Fe + 1], tt += wi += k.b = a[Fe + 2], Ae += Si += k.a = a[Fe + 3], k = k.next, Re += Pe = T.r, Se += Ee = T.g, Te += Be = T.b, Je += ce = T.a, Ii -= Pe, ki -= Ee, wi -= Be, Si -= ce, T = T.next, S += i;
    }
  }
  return e;
}
var Fc = (
  /**
   * Set properties.
   */
  function e() {
    fS(this, e), this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
  }
);
export {
  Y as $,
  OS as A,
  SS as B,
  zS as C,
  wS as D,
  jk as E,
  Ok as F,
  Zp as G,
  $p as H,
  Qa as I,
  Fn as J,
  Zn as K,
  Un as L,
  Dn as M,
  Ht as N,
  Sa as O,
  ZS as P,
  Rn as Q,
  RS as R,
  fi as S,
  Ra as T,
  Fa as U,
  Di as V,
  si as W,
  ya as X,
  kS as Y,
  ny as Z,
  DS as _,
  w as a,
  Ep as a0,
  op as a1,
  dy as a2,
  vp as a3,
  TS as a4,
  jS as b,
  nw as c,
  yn as d,
  AS as e,
  US as f,
  Bn as g,
  Na as h,
  mr as i,
  Pn as j,
  li as k,
  ap as l,
  ma as m,
  At as n,
  lp as o,
  FS as p,
  pa as q,
  PS as r,
  oy as s,
  my as t,
  ui as u,
  ES as v,
  xS as w,
  IS as x,
  Tk as y,
  CS as z
};

import { i as lo, e as pa } from "./vendor-locales-7x6Wc8A7.js";
const fo = Object.freeze({
  status: "aborted"
});
function a(e, n, t) {
  function r(u, c) {
    var l;
    Object.defineProperty(u, "_zod", {
      value: u._zod ?? {},
      enumerable: !1
    }), (l = u._zod).traits ?? (l.traits = /* @__PURE__ */ new Set()), u._zod.traits.add(e), n(u, c);
    for (const d in s.prototype)
      d in u || Object.defineProperty(u, d, { value: s.prototype[d].bind(u) });
    u._zod.constr = s, u._zod.def = c;
  }
  const o = t?.Parent ?? Object;
  class i extends o {
  }
  Object.defineProperty(i, "name", { value: e });
  function s(u) {
    var c;
    const l = t?.Parent ? new i() : this;
    r(l, u), (c = l._zod).deferred ?? (c.deferred = []);
    for (const d of l._zod.deferred)
      d();
    return l;
  }
  return Object.defineProperty(s, "init", { value: r }), Object.defineProperty(s, Symbol.hasInstance, {
    value: (u) => t?.Parent && u instanceof t.Parent ? !0 : u?._zod?.traits?.has(e)
  }), Object.defineProperty(s, "name", { value: e }), s;
}
const po = Symbol("zod_brand");
let re = class extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}, on = class extends Error {
  constructor(n) {
    super(`Encountered unidirectional transform during encode: ${n}`), this.name = "ZodEncodeError";
  }
};
const We = {};
function R(e) {
  return e && Object.assign(We, e), We;
}
function ha(e) {
  return e;
}
function ma(e) {
  return e;
}
function _a(e) {
}
function ga(e) {
  throw new Error();
}
function va(e) {
}
function Fn(e) {
  const n = Object.values(e).filter((r) => typeof r == "number");
  return Object.entries(e).filter(([r, o]) => n.indexOf(+r) === -1).map(([r, o]) => o);
}
function $a(e, n = "|") {
  return e.map((t) => go(t)).join(n);
}
function Ge(e, n) {
  return typeof n == "bigint" ? n.toString() : n;
}
function Ie(e) {
  return {
    get value() {
      {
        const n = e();
        return Object.defineProperty(this, "value", { value: n }), n;
      }
    }
  };
}
function ue(e) {
  return e == null;
}
function sn(e) {
  const n = e.startsWith("^") ? 1 : 0, t = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(n, t);
}
function ho(e, n) {
  const t = (e.toString().split(".")[1] || "").length, r = n.toString();
  let o = (r.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(r)) {
    const c = r.match(/\d?e-(\d?)/);
    c?.[1] && (o = Number.parseInt(c[1]));
  }
  const i = t > o ? t : o, s = Number.parseInt(e.toFixed(i).replace(".", "")), u = Number.parseInt(n.toFixed(i).replace(".", ""));
  return s % u / 10 ** i;
}
const Ar = Symbol("evaluating");
function Z(e, n, t) {
  let r;
  Object.defineProperty(e, n, {
    get() {
      if (r !== Ar)
        return r === void 0 && (r = Ar, r = t()), r;
    },
    set(o) {
      Object.defineProperty(e, n, {
        value: o
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function ba(e) {
  return Object.create(Object.getPrototypeOf(e), Object.getOwnPropertyDescriptors(e));
}
function Q(e, n, t) {
  Object.defineProperty(e, n, {
    value: t,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Y(...e) {
  const n = {};
  for (const t of e) {
    const r = Object.getOwnPropertyDescriptors(t);
    Object.assign(n, r);
  }
  return Object.defineProperties({}, n);
}
function za(e) {
  return Y(e._zod.def);
}
function ya(e, n) {
  return n ? n.reduce((t, r) => t?.[r], e) : e;
}
function wa(e) {
  const n = Object.keys(e), t = n.map((r) => e[r]);
  return Promise.all(t).then((r) => {
    const o = {};
    for (let i = 0; i < n.length; i++)
      o[n[i]] = r[i];
    return o;
  });
}
function Za(e = 10) {
  const n = "abcdefghijklmnopqrstuvwxyz";
  let t = "";
  for (let r = 0; r < e; r++)
    t += n[Math.floor(Math.random() * n.length)];
  return t;
}
function Sn(e) {
  return JSON.stringify(e);
}
const Un = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function he(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const mo = Ie(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function oe(e) {
  if (he(e) === !1)
    return !1;
  const n = e.constructor;
  if (n === void 0)
    return !0;
  const t = n.prototype;
  return !(he(t) === !1 || Object.prototype.hasOwnProperty.call(t, "isPrototypeOf") === !1);
}
function un(e) {
  return oe(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
function ka(e) {
  let n = 0;
  for (const t in e)
    Object.prototype.hasOwnProperty.call(e, t) && n++;
  return n;
}
const Ia = (e) => {
  const n = typeof e;
  switch (n) {
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
      throw new Error(`Unknown data type: ${n}`);
  }
}, Ke = /* @__PURE__ */ new Set(["string", "number", "symbol"]), _o = /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function q(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function V(e, n, t) {
  const r = new e._zod.constr(n ?? e._zod.def);
  return (!n || t?.parent) && (r._zod.parent = e), r;
}
function h(e) {
  const n = e;
  if (!n)
    return {};
  if (typeof n == "string")
    return { error: () => n };
  if (n?.message !== void 0) {
    if (n?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    n.error = n.message;
  }
  return delete n.message, typeof n.error == "string" ? { ...n, error: () => n.error } : n;
}
function Ea(e) {
  let n;
  return new Proxy({}, {
    get(t, r, o) {
      return n ?? (n = e()), Reflect.get(n, r, o);
    },
    set(t, r, o, i) {
      return n ?? (n = e()), Reflect.set(n, r, o, i);
    },
    has(t, r) {
      return n ?? (n = e()), Reflect.has(n, r);
    },
    deleteProperty(t, r) {
      return n ?? (n = e()), Reflect.deleteProperty(n, r);
    },
    ownKeys(t) {
      return n ?? (n = e()), Reflect.ownKeys(n);
    },
    getOwnPropertyDescriptor(t, r) {
      return n ?? (n = e()), Reflect.getOwnPropertyDescriptor(n, r);
    },
    defineProperty(t, r, o) {
      return n ?? (n = e()), Reflect.defineProperty(n, r, o);
    }
  });
}
function go(e) {
  return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function vo(e) {
  return Object.keys(e).filter((n) => e[n]._zod.optin === "optional" && e[n]._zod.optout === "optional");
}
const $o = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, bo = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function zo(e, n) {
  const t = e._zod.def, r = Y(e._zod.def, {
    get shape() {
      const o = {};
      for (const i in n) {
        if (!(i in t.shape))
          throw new Error(`Unrecognized key: "${i}"`);
        n[i] && (o[i] = t.shape[i]);
      }
      return Q(this, "shape", o), o;
    },
    checks: []
  });
  return V(e, r);
}
function yo(e, n) {
  const t = e._zod.def, r = Y(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape };
      for (const i in n) {
        if (!(i in t.shape))
          throw new Error(`Unrecognized key: "${i}"`);
        n[i] && delete o[i];
      }
      return Q(this, "shape", o), o;
    },
    checks: []
  });
  return V(e, r);
}
function wo(e, n) {
  if (!oe(n))
    throw new Error("Invalid input to extend: expected a plain object");
  const t = e._zod.def.checks;
  if (t && t.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const o = Y(e._zod.def, {
    get shape() {
      const i = { ...e._zod.def.shape, ...n };
      return Q(this, "shape", i), i;
    },
    checks: []
  });
  return V(e, o);
}
function Zo(e, n) {
  if (!oe(n))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const t = {
    ...e._zod.def,
    get shape() {
      const r = { ...e._zod.def.shape, ...n };
      return Q(this, "shape", r), r;
    },
    checks: e._zod.def.checks
  };
  return V(e, t);
}
function ko(e, n) {
  const t = Y(e._zod.def, {
    get shape() {
      const r = { ...e._zod.def.shape, ...n._zod.def.shape };
      return Q(this, "shape", r), r;
    },
    get catchall() {
      return n._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return V(e, t);
}
function Io(e, n, t) {
  const r = Y(n._zod.def, {
    get shape() {
      const o = n._zod.def.shape, i = { ...o };
      if (t)
        for (const s in t) {
          if (!(s in o))
            throw new Error(`Unrecognized key: "${s}"`);
          t[s] && (i[s] = e ? new e({
            type: "optional",
            innerType: o[s]
          }) : o[s]);
        }
      else
        for (const s in o)
          i[s] = e ? new e({
            type: "optional",
            innerType: o[s]
          }) : o[s];
      return Q(this, "shape", i), i;
    },
    checks: []
  });
  return V(n, r);
}
function Eo(e, n, t) {
  const r = Y(n._zod.def, {
    get shape() {
      const o = n._zod.def.shape, i = { ...o };
      if (t)
        for (const s in t) {
          if (!(s in i))
            throw new Error(`Unrecognized key: "${s}"`);
          t[s] && (i[s] = new e({
            type: "nonoptional",
            innerType: o[s]
          }));
        }
      else
        for (const s in o)
          i[s] = new e({
            type: "nonoptional",
            innerType: o[s]
          });
      return Q(this, "shape", i), i;
    },
    checks: []
  });
  return V(n, r);
}
function ne(e, n = 0) {
  if (e.aborted === !0)
    return !0;
  for (let t = n; t < e.issues.length; t++)
    if (e.issues[t]?.continue !== !0)
      return !0;
  return !1;
}
function J(e, n) {
  return n.map((t) => {
    var r;
    return (r = t).path ?? (r.path = []), t.path.unshift(e), t;
  });
}
function ze(e) {
  return typeof e == "string" ? e : e?.message;
}
function G(e, n, t) {
  const r = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const o = ze(e.inst?._zod.def?.error?.(e)) ?? ze(n?.error?.(e)) ?? ze(t.customError?.(e)) ?? ze(t.localeError?.(e)) ?? "Invalid input";
    r.message = o;
  }
  return delete r.inst, delete r.continue, n?.reportInput || delete r.input, r;
}
function cn(e) {
  return e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof File ? "file" : "unknown";
}
function an(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function me(...e) {
  const [n, t, r] = e;
  return typeof n == "string" ? {
    message: n,
    code: "custom",
    input: t,
    inst: r
  } : { ...n };
}
function Sa(e) {
  return Object.entries(e).filter(([n, t]) => Number.isNaN(Number.parseInt(n, 10))).map((n) => n[1]);
}
function So(e) {
  const n = atob(e), t = new Uint8Array(n.length);
  for (let r = 0; r < n.length; r++)
    t[r] = n.charCodeAt(r);
  return t;
}
function To(e) {
  let n = "";
  for (let t = 0; t < e.length; t++)
    n += String.fromCharCode(e[t]);
  return btoa(n);
}
function Ta(e) {
  const n = e.replace(/-/g, "+").replace(/_/g, "/"), t = "=".repeat((4 - n.length % 4) % 4);
  return So(n + t);
}
function Aa(e) {
  return To(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function Oa(e) {
  const n = e.replace(/^0x/, "");
  if (n.length % 2 !== 0)
    throw new Error("Invalid hex string length");
  const t = new Uint8Array(n.length / 2);
  for (let r = 0; r < n.length; r += 2)
    t[r / 2] = Number.parseInt(n.slice(r, r + 2), 16);
  return t;
}
function Pa(e) {
  return Array.from(e).map((n) => n.toString(16).padStart(2, "0")).join("");
}
class xa {
  constructor(...n) {
  }
}
const Ao = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, BIGINT_FORMAT_RANGES: bo, Class: xa, NUMBER_FORMAT_RANGES: $o, aborted: ne, allowsEval: mo, assert: va, assertEqual: ha, assertIs: _a, assertNever: ga, assertNotEqual: ma, assignProp: Q, base64ToUint8Array: So, base64urlToUint8Array: Ta, cached: Ie, captureStackTrace: Un, cleanEnum: Sa, cleanRegex: sn, clone: V, cloneDef: za, createTransparentProxy: Ea, defineLazy: Z, esc: Sn, escapeRegex: q, extend: wo, finalizeIssue: G, floatSafeRemainder: ho, getElementAtPath: ya, getEnumValues: Fn, getLengthableOrigin: an, getParsedType: Ia, getSizableOrigin: cn, hexToUint8Array: Oa, isObject: he, isPlainObject: oe, issue: me, joinValues: $a, jsonStringifyReplacer: Ge, merge: ko, mergeDefs: Y, normalizeParams: h, nullish: ue, numKeys: ka, objectClone: ba, omit: yo, optionalKeys: vo, partial: Io, pick: zo, prefixIssues: J, primitiveTypes: _o, promiseAllObject: wa, propertyKeyTypes: Ke, randomString: Za, required: Eo, safeExtend: Zo, shallowClone: un, stringifyPrimitive: go, uint8ArrayToBase64: To, uint8ArrayToBase64url: Aa, uint8ArrayToHex: Pa, unwrapMessage: ze }, Symbol.toStringTag, { value: "Module" })), Oo = (e, n) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: n,
    enumerable: !1
  }), e.message = JSON.stringify(n, Ge, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, Mn = a("$ZodError", Oo), M = a("$ZodError", Oo, { Parent: Error });
function Ln(e, n = (t) => t.message) {
  const t = {}, r = [];
  for (const o of e.issues)
    o.path.length > 0 ? (t[o.path[0]] = t[o.path[0]] || [], t[o.path[0]].push(n(o))) : r.push(n(o));
  return { formErrors: r, fieldErrors: t };
}
function Vn(e, n = (t) => t.message) {
  const t = { _errors: [] }, r = (o) => {
    for (const i of o.issues)
      if (i.code === "invalid_union" && i.errors.length)
        i.errors.map((s) => r({ issues: s }));
      else if (i.code === "invalid_key")
        r({ issues: i.issues });
      else if (i.code === "invalid_element")
        r({ issues: i.issues });
      else if (i.path.length === 0)
        t._errors.push(n(i));
      else {
        let s = t, u = 0;
        for (; u < i.path.length; ) {
          const c = i.path[u];
          u === i.path.length - 1 ? (s[c] = s[c] || { _errors: [] }, s[c]._errors.push(n(i))) : s[c] = s[c] || { _errors: [] }, s = s[c], u++;
        }
      }
  };
  return r(e), t;
}
function Po(e, n = (t) => t.message) {
  const t = { errors: [] }, r = (o, i = []) => {
    var s, u;
    for (const c of o.issues)
      if (c.code === "invalid_union" && c.errors.length)
        c.errors.map((l) => r({ issues: l }, c.path));
      else if (c.code === "invalid_key")
        r({ issues: c.issues }, c.path);
      else if (c.code === "invalid_element")
        r({ issues: c.issues }, c.path);
      else {
        const l = [...i, ...c.path];
        if (l.length === 0) {
          t.errors.push(n(c));
          continue;
        }
        let d = t, m = 0;
        for (; m < l.length; ) {
          const g = l[m], _ = m === l.length - 1;
          typeof g == "string" ? (d.properties ?? (d.properties = {}), (s = d.properties)[g] ?? (s[g] = { errors: [] }), d = d.properties[g]) : (d.items ?? (d.items = []), (u = d.items)[g] ?? (u[g] = { errors: [] }), d = d.items[g]), _ && d.errors.push(n(c)), m++;
        }
      }
  };
  return r(e), t;
}
function xo(e) {
  const n = [], t = e.map((r) => typeof r == "object" ? r.key : r);
  for (const r of t)
    typeof r == "number" ? n.push(`[${r}]`) : typeof r == "symbol" ? n.push(`[${JSON.stringify(String(r))}]`) : /[^\w$]/.test(r) ? n.push(`[${JSON.stringify(r)}]`) : (n.length && n.push("."), n.push(r));
  return n.join("");
}
function No(e) {
  const n = [], t = [...e.issues].sort((r, o) => (r.path ?? []).length - (o.path ?? []).length);
  for (const r of t)
    n.push(`✖ ${r.message}`), r.path?.length && n.push(`  → at ${xo(r.path)}`);
  return n.join(`
`);
}
const Ee = (e) => (n, t, r, o) => {
  const i = r ? Object.assign(r, { async: !1 }) : { async: !1 }, s = n._zod.run({ value: t, issues: [] }, i);
  if (s instanceof Promise)
    throw new re();
  if (s.issues.length) {
    const u = new (o?.Err ?? e)(s.issues.map((c) => G(c, i, R())));
    throw Un(u, o?.callee), u;
  }
  return s.value;
}, Tn = /* @__PURE__ */ Ee(M), Se = (e) => async (n, t, r, o) => {
  const i = r ? Object.assign(r, { async: !0 }) : { async: !0 };
  let s = n._zod.run({ value: t, issues: [] }, i);
  if (s instanceof Promise && (s = await s), s.issues.length) {
    const u = new (o?.Err ?? e)(s.issues.map((c) => G(c, i, R())));
    throw Un(u, o?.callee), u;
  }
  return s.value;
}, An = /* @__PURE__ */ Se(M), Te = (e) => (n, t, r) => {
  const o = r ? { ...r, async: !1 } : { async: !1 }, i = n._zod.run({ value: t, issues: [] }, o);
  if (i instanceof Promise)
    throw new re();
  return i.issues.length ? {
    success: !1,
    error: new (e ?? Mn)(i.issues.map((s) => G(s, o, R())))
  } : { success: !0, data: i.value };
}, jo = /* @__PURE__ */ Te(M), Ae = (e) => async (n, t, r) => {
  const o = r ? Object.assign(r, { async: !0 }) : { async: !0 };
  let i = n._zod.run({ value: t, issues: [] }, o);
  return i instanceof Promise && (i = await i), i.issues.length ? {
    success: !1,
    error: new e(i.issues.map((s) => G(s, o, R())))
  } : { success: !0, data: i.value };
}, Do = /* @__PURE__ */ Ae(M), Bn = (e) => (n, t, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return Ee(e)(n, t, o);
}, Na = /* @__PURE__ */ Bn(M), Jn = (e) => (n, t, r) => Ee(e)(n, t, r), ja = /* @__PURE__ */ Jn(M), Wn = (e) => async (n, t, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return Se(e)(n, t, o);
}, Da = /* @__PURE__ */ Wn(M), Gn = (e) => async (n, t, r) => Se(e)(n, t, r), Ca = /* @__PURE__ */ Gn(M), Kn = (e) => (n, t, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return Te(e)(n, t, o);
}, Ra = /* @__PURE__ */ Kn(M), Yn = (e) => (n, t, r) => Te(e)(n, t, r), Fa = /* @__PURE__ */ Yn(M), qn = (e) => async (n, t, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return Ae(e)(n, t, o);
}, Ua = /* @__PURE__ */ qn(M), Xn = (e) => async (n, t, r) => Ae(e)(n, t, r), Ma = /* @__PURE__ */ Xn(M), Co = /^[cC][^\s-]{8,}$/, Ro = /^[0-9a-z]+$/, Fo = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Uo = /^[0-9a-vA-V]{20}$/, Mo = /^[A-Za-z0-9]{27}$/, Lo = /^[a-zA-Z0-9_-]{21}$/, Vo = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, La = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Bo = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, _e = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Va = /* @__PURE__ */ _e(4), Ba = /* @__PURE__ */ _e(6), Ja = /* @__PURE__ */ _e(7), Jo = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Wa = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, Ga = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, Wo = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u, Ka = Wo, Ya = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, qa = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Go() {
  return new RegExp(qa, "u");
}
const Ko = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Yo = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, qo = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Xo = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Ho = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Hn = /^[A-Za-z0-9_-]*$/, Qn = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, Qo = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, ei = /^\+(?:[0-9]){6,14}[0-9]$/, ni = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", ti = /* @__PURE__ */ new RegExp(`^${ni}$`);
function ri(e) {
  const n = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${n}` : e.precision === 0 ? `${n}:[0-5]\\d` : `${n}:[0-5]\\d\\.\\d{${e.precision}}` : `${n}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function oi(e) {
  return new RegExp(`^${ri(e)}$`);
}
function ii(e) {
  const n = ri({ precision: e.precision }), t = ["Z"];
  e.local && t.push(""), e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const r = `${n}(?:${t.join("|")})`;
  return new RegExp(`^${ni}T(?:${r})$`);
}
const si = (e) => {
  const n = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${n}$`);
}, ui = /^-?\d+n?$/, ci = /^-?\d+$/, ai = /^-?\d+(?:\.\d+)?/, li = /^(?:true|false)$/i, fi = /^null$/i, di = /^undefined$/i, pi = /^[^A-Z]*$/, hi = /^[^a-z]*$/, mi = /^[0-9a-fA-F]*$/;
function Oe(e, n) {
  return new RegExp(`^[A-Za-z0-9+/]{${e}}${n}$`);
}
function Pe(e) {
  return new RegExp(`^[A-Za-z0-9_-]{${e}}$`);
}
const Xa = /^[0-9a-fA-F]{32}$/, Ha = /* @__PURE__ */ Oe(22, "=="), Qa = /* @__PURE__ */ Pe(22), el = /^[0-9a-fA-F]{40}$/, nl = /* @__PURE__ */ Oe(27, "="), tl = /* @__PURE__ */ Pe(27), rl = /^[0-9a-fA-F]{64}$/, ol = /* @__PURE__ */ Oe(43, "="), il = /* @__PURE__ */ Pe(43), sl = /^[0-9a-fA-F]{96}$/, ul = /* @__PURE__ */ Oe(64, ""), cl = /* @__PURE__ */ Pe(64), al = /^[0-9a-fA-F]{128}$/, ll = /* @__PURE__ */ Oe(86, "=="), fl = /* @__PURE__ */ Pe(86), et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, base64: Ho, base64url: Hn, bigint: ui, boolean: li, browserEmail: Ya, cidrv4: qo, cidrv6: Xo, cuid: Co, cuid2: Ro, date: ti, datetime: ii, domain: Qo, duration: Vo, e164: ei, email: Jo, emoji: Go, extendedDuration: La, guid: Bo, hex: mi, hostname: Qn, html5Email: Wa, idnEmail: Ka, integer: ci, ipv4: Ko, ipv6: Yo, ksuid: Mo, lowercase: pi, md5_base64: Ha, md5_base64url: Qa, md5_hex: Xa, nanoid: Lo, null: fi, number: ai, rfc5322Email: Ga, sha1_base64: nl, sha1_base64url: tl, sha1_hex: el, sha256_base64: ol, sha256_base64url: il, sha256_hex: rl, sha384_base64: ul, sha384_base64url: cl, sha384_hex: sl, sha512_base64: ll, sha512_base64url: fl, sha512_hex: al, string: si, time: oi, ulid: Fo, undefined: di, unicodeEmail: Wo, uppercase: hi, uuid: _e, uuid4: Va, uuid6: Ba, uuid7: Ja, xid: Uo }, Symbol.toStringTag, { value: "Module" })), N = /* @__PURE__ */ a("$ZodCheck", (e, n) => {
  var t;
  e._zod ?? (e._zod = {}), e._zod.def = n, (t = e._zod).onattach ?? (t.onattach = []);
}), _i = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, nt = /* @__PURE__ */ a("$ZodCheckLessThan", (e, n) => {
  N.init(e, n);
  const t = _i[typeof n.value];
  e._zod.onattach.push((r) => {
    const o = r._zod.bag, i = (n.inclusive ? o.maximum : o.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    n.value < i && (n.inclusive ? o.maximum = n.value : o.exclusiveMaximum = n.value);
  }), e._zod.check = (r) => {
    (n.inclusive ? r.value <= n.value : r.value < n.value) || r.issues.push({
      origin: t,
      code: "too_big",
      maximum: n.value,
      input: r.value,
      inclusive: n.inclusive,
      inst: e,
      continue: !n.abort
    });
  };
}), tt = /* @__PURE__ */ a("$ZodCheckGreaterThan", (e, n) => {
  N.init(e, n);
  const t = _i[typeof n.value];
  e._zod.onattach.push((r) => {
    const o = r._zod.bag, i = (n.inclusive ? o.minimum : o.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    n.value > i && (n.inclusive ? o.minimum = n.value : o.exclusiveMinimum = n.value);
  }), e._zod.check = (r) => {
    (n.inclusive ? r.value >= n.value : r.value > n.value) || r.issues.push({
      origin: t,
      code: "too_small",
      minimum: n.value,
      input: r.value,
      inclusive: n.inclusive,
      inst: e,
      continue: !n.abort
    });
  };
}), gi = /* @__PURE__ */ a("$ZodCheckMultipleOf", (e, n) => {
  N.init(e, n), e._zod.onattach.push((t) => {
    var r;
    (r = t._zod.bag).multipleOf ?? (r.multipleOf = n.value);
  }), e._zod.check = (t) => {
    if (typeof t.value != typeof n.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof t.value == "bigint" ? t.value % n.value === BigInt(0) : ho(t.value, n.value) === 0) || t.issues.push({
      origin: typeof t.value,
      code: "not_multiple_of",
      divisor: n.value,
      input: t.value,
      inst: e,
      continue: !n.abort
    });
  };
}), vi = /* @__PURE__ */ a("$ZodCheckNumberFormat", (e, n) => {
  N.init(e, n), n.format = n.format || "float64";
  const t = n.format?.includes("int"), r = t ? "int" : "number", [o, i] = $o[n.format];
  e._zod.onattach.push((s) => {
    const u = s._zod.bag;
    u.format = n.format, u.minimum = o, u.maximum = i, t && (u.pattern = ci);
  }), e._zod.check = (s) => {
    const u = s.value;
    if (t) {
      if (!Number.isInteger(u)) {
        s.issues.push({
          expected: r,
          format: n.format,
          code: "invalid_type",
          continue: !1,
          input: u,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(u)) {
        u > 0 ? s.issues.push({
          input: u,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: r,
          continue: !n.abort
        }) : s.issues.push({
          input: u,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: r,
          continue: !n.abort
        });
        return;
      }
    }
    u < o && s.issues.push({
      origin: "number",
      input: u,
      code: "too_small",
      minimum: o,
      inclusive: !0,
      inst: e,
      continue: !n.abort
    }), u > i && s.issues.push({
      origin: "number",
      input: u,
      code: "too_big",
      maximum: i,
      inst: e
    });
  };
}), $i = /* @__PURE__ */ a("$ZodCheckBigIntFormat", (e, n) => {
  N.init(e, n);
  const [t, r] = bo[n.format];
  e._zod.onattach.push((o) => {
    const i = o._zod.bag;
    i.format = n.format, i.minimum = t, i.maximum = r;
  }), e._zod.check = (o) => {
    const i = o.value;
    i < t && o.issues.push({
      origin: "bigint",
      input: i,
      code: "too_small",
      minimum: t,
      inclusive: !0,
      inst: e,
      continue: !n.abort
    }), i > r && o.issues.push({
      origin: "bigint",
      input: i,
      code: "too_big",
      maximum: r,
      inst: e
    });
  };
}), bi = /* @__PURE__ */ a("$ZodCheckMaxSize", (e, n) => {
  var t;
  N.init(e, n), (t = e._zod.def).when ?? (t.when = (r) => {
    const o = r.value;
    return !ue(o) && o.size !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    n.maximum < o && (r._zod.bag.maximum = n.maximum);
  }), e._zod.check = (r) => {
    const o = r.value;
    o.size <= n.maximum || r.issues.push({
      origin: cn(o),
      code: "too_big",
      maximum: n.maximum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !n.abort
    });
  };
}), zi = /* @__PURE__ */ a("$ZodCheckMinSize", (e, n) => {
  var t;
  N.init(e, n), (t = e._zod.def).when ?? (t.when = (r) => {
    const o = r.value;
    return !ue(o) && o.size !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    n.minimum > o && (r._zod.bag.minimum = n.minimum);
  }), e._zod.check = (r) => {
    const o = r.value;
    o.size >= n.minimum || r.issues.push({
      origin: cn(o),
      code: "too_small",
      minimum: n.minimum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !n.abort
    });
  };
}), yi = /* @__PURE__ */ a("$ZodCheckSizeEquals", (e, n) => {
  var t;
  N.init(e, n), (t = e._zod.def).when ?? (t.when = (r) => {
    const o = r.value;
    return !ue(o) && o.size !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.minimum = n.size, o.maximum = n.size, o.size = n.size;
  }), e._zod.check = (r) => {
    const o = r.value, i = o.size;
    if (i === n.size)
      return;
    const s = i > n.size;
    r.issues.push({
      origin: cn(o),
      ...s ? { code: "too_big", maximum: n.size } : { code: "too_small", minimum: n.size },
      inclusive: !0,
      exact: !0,
      input: r.value,
      inst: e,
      continue: !n.abort
    });
  };
}), wi = /* @__PURE__ */ a("$ZodCheckMaxLength", (e, n) => {
  var t;
  N.init(e, n), (t = e._zod.def).when ?? (t.when = (r) => {
    const o = r.value;
    return !ue(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    n.maximum < o && (r._zod.bag.maximum = n.maximum);
  }), e._zod.check = (r) => {
    const o = r.value;
    if (o.length <= n.maximum)
      return;
    const s = an(o);
    r.issues.push({
      origin: s,
      code: "too_big",
      maximum: n.maximum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !n.abort
    });
  };
}), Zi = /* @__PURE__ */ a("$ZodCheckMinLength", (e, n) => {
  var t;
  N.init(e, n), (t = e._zod.def).when ?? (t.when = (r) => {
    const o = r.value;
    return !ue(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    n.minimum > o && (r._zod.bag.minimum = n.minimum);
  }), e._zod.check = (r) => {
    const o = r.value;
    if (o.length >= n.minimum)
      return;
    const s = an(o);
    r.issues.push({
      origin: s,
      code: "too_small",
      minimum: n.minimum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !n.abort
    });
  };
}), ki = /* @__PURE__ */ a("$ZodCheckLengthEquals", (e, n) => {
  var t;
  N.init(e, n), (t = e._zod.def).when ?? (t.when = (r) => {
    const o = r.value;
    return !ue(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.minimum = n.length, o.maximum = n.length, o.length = n.length;
  }), e._zod.check = (r) => {
    const o = r.value, i = o.length;
    if (i === n.length)
      return;
    const s = an(o), u = i > n.length;
    r.issues.push({
      origin: s,
      ...u ? { code: "too_big", maximum: n.length } : { code: "too_small", minimum: n.length },
      inclusive: !0,
      exact: !0,
      input: r.value,
      inst: e,
      continue: !n.abort
    });
  };
}), xe = /* @__PURE__ */ a("$ZodCheckStringFormat", (e, n) => {
  var t, r;
  N.init(e, n), e._zod.onattach.push((o) => {
    const i = o._zod.bag;
    i.format = n.format, n.pattern && (i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(n.pattern));
  }), n.pattern ? (t = e._zod).check ?? (t.check = (o) => {
    n.pattern.lastIndex = 0, !n.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: n.format,
      input: o.value,
      ...n.pattern ? { pattern: n.pattern.toString() } : {},
      inst: e,
      continue: !n.abort
    });
  }) : (r = e._zod).check ?? (r.check = () => {
  });
}), Ii = /* @__PURE__ */ a("$ZodCheckRegex", (e, n) => {
  xe.init(e, n), e._zod.check = (t) => {
    n.pattern.lastIndex = 0, !n.pattern.test(t.value) && t.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: t.value,
      pattern: n.pattern.toString(),
      inst: e,
      continue: !n.abort
    });
  };
}), Ei = /* @__PURE__ */ a("$ZodCheckLowerCase", (e, n) => {
  n.pattern ?? (n.pattern = pi), xe.init(e, n);
}), Si = /* @__PURE__ */ a("$ZodCheckUpperCase", (e, n) => {
  n.pattern ?? (n.pattern = hi), xe.init(e, n);
}), Ti = /* @__PURE__ */ a("$ZodCheckIncludes", (e, n) => {
  N.init(e, n);
  const t = q(n.includes), r = new RegExp(typeof n.position == "number" ? `^.{${n.position}}${t}` : t);
  n.pattern = r, e._zod.onattach.push((o) => {
    const i = o._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(r);
  }), e._zod.check = (o) => {
    o.value.includes(n.includes, n.position) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: n.includes,
      input: o.value,
      inst: e,
      continue: !n.abort
    });
  };
}), Ai = /* @__PURE__ */ a("$ZodCheckStartsWith", (e, n) => {
  N.init(e, n);
  const t = new RegExp(`^${q(n.prefix)}.*`);
  n.pattern ?? (n.pattern = t), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(t);
  }), e._zod.check = (r) => {
    r.value.startsWith(n.prefix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: n.prefix,
      input: r.value,
      inst: e,
      continue: !n.abort
    });
  };
}), Oi = /* @__PURE__ */ a("$ZodCheckEndsWith", (e, n) => {
  N.init(e, n);
  const t = new RegExp(`.*${q(n.suffix)}$`);
  n.pattern ?? (n.pattern = t), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(t);
  }), e._zod.check = (r) => {
    r.value.endsWith(n.suffix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: n.suffix,
      input: r.value,
      inst: e,
      continue: !n.abort
    });
  };
});
function Or(e, n, t) {
  e.issues.length && n.issues.push(...J(t, e.issues));
}
const Pi = /* @__PURE__ */ a("$ZodCheckProperty", (e, n) => {
  N.init(e, n), e._zod.check = (t) => {
    const r = n.schema._zod.run({
      value: t.value[n.property],
      issues: []
    }, {});
    if (r instanceof Promise)
      return r.then((o) => Or(o, t, n.property));
    Or(r, t, n.property);
  };
}), xi = /* @__PURE__ */ a("$ZodCheckMimeType", (e, n) => {
  N.init(e, n);
  const t = new Set(n.mime);
  e._zod.onattach.push((r) => {
    r._zod.bag.mime = n.mime;
  }), e._zod.check = (r) => {
    t.has(r.value.type) || r.issues.push({
      code: "invalid_value",
      values: n.mime,
      input: r.value.type,
      inst: e,
      continue: !n.abort
    });
  };
}), Ni = /* @__PURE__ */ a("$ZodCheckOverwrite", (e, n) => {
  N.init(e, n), e._zod.check = (t) => {
    t.value = n.tx(t.value);
  };
});
let ji = class {
  constructor(n = []) {
    this.content = [], this.indent = 0, this && (this.args = n);
  }
  indented(n) {
    this.indent += 1, n(this), this.indent -= 1;
  }
  write(n) {
    if (typeof n == "function") {
      n(this, { execution: "sync" }), n(this, { execution: "async" });
      return;
    }
    const r = n.split(`
`).filter((s) => s), o = Math.min(...r.map((s) => s.length - s.trimStart().length)), i = r.map((s) => s.slice(o)).map((s) => " ".repeat(this.indent * 2) + s);
    for (const s of i)
      this.content.push(s);
  }
  compile() {
    const n = Function, t = this?.args, o = [...(this?.content ?? [""]).map((i) => `  ${i}`)];
    return new n(...t, o.join(`
`));
  }
};
const Di = {
  major: 4,
  minor: 1,
  patch: 12
}, z = /* @__PURE__ */ a("$ZodType", (e, n) => {
  var t;
  e ?? (e = {}), e._zod.def = n, e._zod.bag = e._zod.bag || {}, e._zod.version = Di;
  const r = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && r.unshift(e);
  for (const o of r)
    for (const i of o._zod.onattach)
      i(e);
  if (r.length === 0)
    (t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const o = (s, u, c) => {
      let l = ne(s), d;
      for (const m of u) {
        if (m._zod.def.when) {
          if (!m._zod.def.when(s))
            continue;
        } else if (l)
          continue;
        const g = s.issues.length, _ = m._zod.check(s);
        if (_ instanceof Promise && c?.async === !1)
          throw new re();
        if (d || _ instanceof Promise)
          d = (d ?? Promise.resolve()).then(async () => {
            await _, s.issues.length !== g && (l || (l = ne(s, g)));
          });
        else {
          if (s.issues.length === g)
            continue;
          l || (l = ne(s, g));
        }
      }
      return d ? d.then(() => s) : s;
    }, i = (s, u, c) => {
      if (ne(s))
        return s.aborted = !0, s;
      const l = o(u, r, c);
      if (l instanceof Promise) {
        if (c.async === !1)
          throw new re();
        return l.then((d) => e._zod.parse(d, c));
      }
      return e._zod.parse(l, c);
    };
    e._zod.run = (s, u) => {
      if (u.skipChecks)
        return e._zod.parse(s, u);
      if (u.direction === "backward") {
        const l = e._zod.parse({ value: s.value, issues: [] }, { ...u, skipChecks: !0 });
        return l instanceof Promise ? l.then((d) => i(d, s, u)) : i(l, s, u);
      }
      const c = e._zod.parse(s, u);
      if (c instanceof Promise) {
        if (u.async === !1)
          throw new re();
        return c.then((l) => o(l, r, u));
      }
      return o(c, r, u);
    };
  }
  e["~standard"] = {
    validate: (o) => {
      try {
        const i = jo(e, o);
        return i.success ? { value: i.data } : { issues: i.error?.issues };
      } catch {
        return Do(e, o).then((s) => s.success ? { value: s.data } : { issues: s.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), Ne = /* @__PURE__ */ a("$ZodString", (e, n) => {
  z.init(e, n), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? si(e._zod.bag), e._zod.parse = (t, r) => {
    if (n.coerce)
      try {
        t.value = String(t.value);
      } catch {
      }
    return typeof t.value == "string" || t.issues.push({
      expected: "string",
      code: "invalid_type",
      input: t.value,
      inst: e
    }), t;
  };
}), T = /* @__PURE__ */ a("$ZodStringFormat", (e, n) => {
  xe.init(e, n), Ne.init(e, n);
}), Ci = /* @__PURE__ */ a("$ZodGUID", (e, n) => {
  n.pattern ?? (n.pattern = Bo), T.init(e, n);
}), Ri = /* @__PURE__ */ a("$ZodUUID", (e, n) => {
  if (n.version) {
    const r = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[n.version];
    if (r === void 0)
      throw new Error(`Invalid UUID version: "${n.version}"`);
    n.pattern ?? (n.pattern = _e(r));
  } else
    n.pattern ?? (n.pattern = _e());
  T.init(e, n);
}), Fi = /* @__PURE__ */ a("$ZodEmail", (e, n) => {
  n.pattern ?? (n.pattern = Jo), T.init(e, n);
}), Ui = /* @__PURE__ */ a("$ZodURL", (e, n) => {
  T.init(e, n), e._zod.check = (t) => {
    try {
      const r = t.value.trim(), o = new URL(r);
      n.hostname && (n.hostname.lastIndex = 0, n.hostname.test(o.hostname) || t.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: Qn.source,
        input: t.value,
        inst: e,
        continue: !n.abort
      })), n.protocol && (n.protocol.lastIndex = 0, n.protocol.test(o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol) || t.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: n.protocol.source,
        input: t.value,
        inst: e,
        continue: !n.abort
      })), n.normalize ? t.value = o.href : t.value = r;
      return;
    } catch {
      t.issues.push({
        code: "invalid_format",
        format: "url",
        input: t.value,
        inst: e,
        continue: !n.abort
      });
    }
  };
}), Mi = /* @__PURE__ */ a("$ZodEmoji", (e, n) => {
  n.pattern ?? (n.pattern = Go()), T.init(e, n);
}), Li = /* @__PURE__ */ a("$ZodNanoID", (e, n) => {
  n.pattern ?? (n.pattern = Lo), T.init(e, n);
}), Vi = /* @__PURE__ */ a("$ZodCUID", (e, n) => {
  n.pattern ?? (n.pattern = Co), T.init(e, n);
}), Bi = /* @__PURE__ */ a("$ZodCUID2", (e, n) => {
  n.pattern ?? (n.pattern = Ro), T.init(e, n);
}), Ji = /* @__PURE__ */ a("$ZodULID", (e, n) => {
  n.pattern ?? (n.pattern = Fo), T.init(e, n);
}), Wi = /* @__PURE__ */ a("$ZodXID", (e, n) => {
  n.pattern ?? (n.pattern = Uo), T.init(e, n);
}), Gi = /* @__PURE__ */ a("$ZodKSUID", (e, n) => {
  n.pattern ?? (n.pattern = Mo), T.init(e, n);
}), Ki = /* @__PURE__ */ a("$ZodISODateTime", (e, n) => {
  n.pattern ?? (n.pattern = ii(n)), T.init(e, n);
}), Yi = /* @__PURE__ */ a("$ZodISODate", (e, n) => {
  n.pattern ?? (n.pattern = ti), T.init(e, n);
}), qi = /* @__PURE__ */ a("$ZodISOTime", (e, n) => {
  n.pattern ?? (n.pattern = oi(n)), T.init(e, n);
}), Xi = /* @__PURE__ */ a("$ZodISODuration", (e, n) => {
  n.pattern ?? (n.pattern = Vo), T.init(e, n);
}), Hi = /* @__PURE__ */ a("$ZodIPv4", (e, n) => {
  n.pattern ?? (n.pattern = Ko), T.init(e, n), e._zod.onattach.push((t) => {
    const r = t._zod.bag;
    r.format = "ipv4";
  });
}), Qi = /* @__PURE__ */ a("$ZodIPv6", (e, n) => {
  n.pattern ?? (n.pattern = Yo), T.init(e, n), e._zod.onattach.push((t) => {
    const r = t._zod.bag;
    r.format = "ipv6";
  }), e._zod.check = (t) => {
    try {
      new URL(`http://[${t.value}]`);
    } catch {
      t.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: t.value,
        inst: e,
        continue: !n.abort
      });
    }
  };
}), es = /* @__PURE__ */ a("$ZodCIDRv4", (e, n) => {
  n.pattern ?? (n.pattern = qo), T.init(e, n);
}), ns = /* @__PURE__ */ a("$ZodCIDRv6", (e, n) => {
  n.pattern ?? (n.pattern = Xo), T.init(e, n), e._zod.check = (t) => {
    const r = t.value.split("/");
    try {
      if (r.length !== 2)
        throw new Error();
      const [o, i] = r;
      if (!i)
        throw new Error();
      const s = Number(i);
      if (`${s}` !== i)
        throw new Error();
      if (s < 0 || s > 128)
        throw new Error();
      new URL(`http://[${o}]`);
    } catch {
      t.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: t.value,
        inst: e,
        continue: !n.abort
      });
    }
  };
});
function rt(e) {
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
const ts = /* @__PURE__ */ a("$ZodBase64", (e, n) => {
  n.pattern ?? (n.pattern = Ho), T.init(e, n), e._zod.onattach.push((t) => {
    t._zod.bag.contentEncoding = "base64";
  }), e._zod.check = (t) => {
    rt(t.value) || t.issues.push({
      code: "invalid_format",
      format: "base64",
      input: t.value,
      inst: e,
      continue: !n.abort
    });
  };
});
function rs(e) {
  if (!Hn.test(e))
    return !1;
  const n = e.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), t = n.padEnd(Math.ceil(n.length / 4) * 4, "=");
  return rt(t);
}
const os = /* @__PURE__ */ a("$ZodBase64URL", (e, n) => {
  n.pattern ?? (n.pattern = Hn), T.init(e, n), e._zod.onattach.push((t) => {
    t._zod.bag.contentEncoding = "base64url";
  }), e._zod.check = (t) => {
    rs(t.value) || t.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: t.value,
      inst: e,
      continue: !n.abort
    });
  };
}), is = /* @__PURE__ */ a("$ZodE164", (e, n) => {
  n.pattern ?? (n.pattern = ei), T.init(e, n);
});
function ss(e, n = null) {
  try {
    const t = e.split(".");
    if (t.length !== 3)
      return !1;
    const [r] = t;
    if (!r)
      return !1;
    const o = JSON.parse(atob(r));
    return !("typ" in o && o?.typ !== "JWT" || !o.alg || n && (!("alg" in o) || o.alg !== n));
  } catch {
    return !1;
  }
}
const us = /* @__PURE__ */ a("$ZodJWT", (e, n) => {
  T.init(e, n), e._zod.check = (t) => {
    ss(t.value, n.alg) || t.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: t.value,
      inst: e,
      continue: !n.abort
    });
  };
}), cs = /* @__PURE__ */ a("$ZodCustomStringFormat", (e, n) => {
  T.init(e, n), e._zod.check = (t) => {
    n.fn(t.value) || t.issues.push({
      code: "invalid_format",
      format: n.format,
      input: t.value,
      inst: e,
      continue: !n.abort
    });
  };
}), ot = /* @__PURE__ */ a("$ZodNumber", (e, n) => {
  z.init(e, n), e._zod.pattern = e._zod.bag.pattern ?? ai, e._zod.parse = (t, r) => {
    if (n.coerce)
      try {
        t.value = Number(t.value);
      } catch {
      }
    const o = t.value;
    if (typeof o == "number" && !Number.isNaN(o) && Number.isFinite(o))
      return t;
    const i = typeof o == "number" ? Number.isNaN(o) ? "NaN" : Number.isFinite(o) ? void 0 : "Infinity" : void 0;
    return t.issues.push({
      expected: "number",
      code: "invalid_type",
      input: o,
      inst: e,
      ...i ? { received: i } : {}
    }), t;
  };
}), as = /* @__PURE__ */ a("$ZodNumber", (e, n) => {
  vi.init(e, n), ot.init(e, n);
}), it = /* @__PURE__ */ a("$ZodBoolean", (e, n) => {
  z.init(e, n), e._zod.pattern = li, e._zod.parse = (t, r) => {
    if (n.coerce)
      try {
        t.value = !!t.value;
      } catch {
      }
    const o = t.value;
    return typeof o == "boolean" || t.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: o,
      inst: e
    }), t;
  };
}), st = /* @__PURE__ */ a("$ZodBigInt", (e, n) => {
  z.init(e, n), e._zod.pattern = ui, e._zod.parse = (t, r) => {
    if (n.coerce)
      try {
        t.value = BigInt(t.value);
      } catch {
      }
    return typeof t.value == "bigint" || t.issues.push({
      expected: "bigint",
      code: "invalid_type",
      input: t.value,
      inst: e
    }), t;
  };
}), ls = /* @__PURE__ */ a("$ZodBigInt", (e, n) => {
  $i.init(e, n), st.init(e, n);
}), fs = /* @__PURE__ */ a("$ZodSymbol", (e, n) => {
  z.init(e, n), e._zod.parse = (t, r) => {
    const o = t.value;
    return typeof o == "symbol" || t.issues.push({
      expected: "symbol",
      code: "invalid_type",
      input: o,
      inst: e
    }), t;
  };
}), ds = /* @__PURE__ */ a("$ZodUndefined", (e, n) => {
  z.init(e, n), e._zod.pattern = di, e._zod.values = /* @__PURE__ */ new Set([void 0]), e._zod.optin = "optional", e._zod.optout = "optional", e._zod.parse = (t, r) => {
    const o = t.value;
    return typeof o > "u" || t.issues.push({
      expected: "undefined",
      code: "invalid_type",
      input: o,
      inst: e
    }), t;
  };
}), ps = /* @__PURE__ */ a("$ZodNull", (e, n) => {
  z.init(e, n), e._zod.pattern = fi, e._zod.values = /* @__PURE__ */ new Set([null]), e._zod.parse = (t, r) => {
    const o = t.value;
    return o === null || t.issues.push({
      expected: "null",
      code: "invalid_type",
      input: o,
      inst: e
    }), t;
  };
}), hs = /* @__PURE__ */ a("$ZodAny", (e, n) => {
  z.init(e, n), e._zod.parse = (t) => t;
}), ms = /* @__PURE__ */ a("$ZodUnknown", (e, n) => {
  z.init(e, n), e._zod.parse = (t) => t;
}), _s = /* @__PURE__ */ a("$ZodNever", (e, n) => {
  z.init(e, n), e._zod.parse = (t, r) => (t.issues.push({
    expected: "never",
    code: "invalid_type",
    input: t.value,
    inst: e
  }), t);
}), gs = /* @__PURE__ */ a("$ZodVoid", (e, n) => {
  z.init(e, n), e._zod.parse = (t, r) => {
    const o = t.value;
    return typeof o > "u" || t.issues.push({
      expected: "void",
      code: "invalid_type",
      input: o,
      inst: e
    }), t;
  };
}), vs = /* @__PURE__ */ a("$ZodDate", (e, n) => {
  z.init(e, n), e._zod.parse = (t, r) => {
    if (n.coerce)
      try {
        t.value = new Date(t.value);
      } catch {
      }
    const o = t.value, i = o instanceof Date;
    return i && !Number.isNaN(o.getTime()) || t.issues.push({
      expected: "date",
      code: "invalid_type",
      input: o,
      ...i ? { received: "Invalid Date" } : {},
      inst: e
    }), t;
  };
});
function Pr(e, n, t) {
  e.issues.length && n.issues.push(...J(t, e.issues)), n.value[t] = e.value;
}
const $s = /* @__PURE__ */ a("$ZodArray", (e, n) => {
  z.init(e, n), e._zod.parse = (t, r) => {
    const o = t.value;
    if (!Array.isArray(o))
      return t.issues.push({
        expected: "array",
        code: "invalid_type",
        input: o,
        inst: e
      }), t;
    t.value = Array(o.length);
    const i = [];
    for (let s = 0; s < o.length; s++) {
      const u = o[s], c = n.element._zod.run({
        value: u,
        issues: []
      }, r);
      c instanceof Promise ? i.push(c.then((l) => Pr(l, t, s))) : Pr(c, t, s);
    }
    return i.length ? Promise.all(i).then(() => t) : t;
  };
});
function Ye(e, n, t, r) {
  e.issues.length && n.issues.push(...J(t, e.issues)), e.value === void 0 ? t in r && (n.value[t] = void 0) : n.value[t] = e.value;
}
function bs(e) {
  const n = Object.keys(e.shape);
  for (const r of n)
    if (!e.shape?.[r]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
  const t = vo(e.shape);
  return {
    ...e,
    keys: n,
    keySet: new Set(n),
    numKeys: n.length,
    optionalKeys: new Set(t)
  };
}
function zs(e, n, t, r, o, i) {
  const s = [], u = o.keySet, c = o.catchall._zod, l = c.def.type;
  for (const d of Object.keys(n)) {
    if (u.has(d))
      continue;
    if (l === "never") {
      s.push(d);
      continue;
    }
    const m = c.run({ value: n[d], issues: [] }, r);
    m instanceof Promise ? e.push(m.then((g) => Ye(g, t, d, n))) : Ye(m, t, d, n);
  }
  return s.length && t.issues.push({
    code: "unrecognized_keys",
    keys: s,
    input: n,
    inst: i
  }), e.length ? Promise.all(e).then(() => t) : t;
}
const ys = /* @__PURE__ */ a("$ZodObject", (e, n) => {
  if (z.init(e, n), !Object.getOwnPropertyDescriptor(n, "shape")?.get) {
    const u = n.shape;
    Object.defineProperty(n, "shape", {
      get: () => {
        const c = { ...u };
        return Object.defineProperty(n, "shape", {
          value: c
        }), c;
      }
    });
  }
  const r = Ie(() => bs(n));
  Z(e._zod, "propValues", () => {
    const u = n.shape, c = {};
    for (const l in u) {
      const d = u[l]._zod;
      if (d.values) {
        c[l] ?? (c[l] = /* @__PURE__ */ new Set());
        for (const m of d.values)
          c[l].add(m);
      }
    }
    return c;
  });
  const o = he, i = n.catchall;
  let s;
  e._zod.parse = (u, c) => {
    s ?? (s = r.value);
    const l = u.value;
    if (!o(l))
      return u.issues.push({
        expected: "object",
        code: "invalid_type",
        input: l,
        inst: e
      }), u;
    u.value = {};
    const d = [], m = s.shape;
    for (const g of s.keys) {
      const f = m[g]._zod.run({ value: l[g], issues: [] }, c);
      f instanceof Promise ? d.push(f.then((v) => Ye(v, u, g, l))) : Ye(f, u, g, l);
    }
    return i ? zs(d, l, u, c, r.value, e) : d.length ? Promise.all(d).then(() => u) : u;
  };
}), ws = /* @__PURE__ */ a("$ZodObjectJIT", (e, n) => {
  ys.init(e, n);
  const t = e._zod.parse, r = Ie(() => bs(n)), o = (g) => {
    const _ = new ji(["shape", "payload", "ctx"]), f = r.value, v = (w) => {
      const k = Sn(w);
      return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
    };
    _.write("const input = payload.value;");
    const $ = /* @__PURE__ */ Object.create(null);
    let E = 0;
    for (const w of f.keys)
      $[w] = `key_${E++}`;
    _.write("const newResult = {};");
    for (const w of f.keys) {
      const k = $[w], C = Sn(w);
      _.write(`const ${k} = ${v(w)};`), _.write(`
        if (${k}.issues.length) {
          payload.issues = payload.issues.concat(${k}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${C}, ...iss.path] : [${C}]
          })));
        }
        
        
        if (${k}.value === undefined) {
          if (${C} in input) {
            newResult[${C}] = undefined;
          }
        } else {
          newResult[${C}] = ${k}.value;
        }
        
      `);
    }
    _.write("payload.value = newResult;"), _.write("return payload;");
    const I = _.compile();
    return (w, k) => I(g, w, k);
  };
  let i;
  const s = he, u = !We.jitless, l = u && mo.value, d = n.catchall;
  let m;
  e._zod.parse = (g, _) => {
    m ?? (m = r.value);
    const f = g.value;
    return s(f) ? u && l && _?.async === !1 && _.jitless !== !0 ? (i || (i = o(n.shape)), g = i(g, _), d ? zs([], f, g, _, m, e) : g) : t(g, _) : (g.issues.push({
      expected: "object",
      code: "invalid_type",
      input: f,
      inst: e
    }), g);
  };
});
function xr(e, n, t, r) {
  for (const i of e)
    if (i.issues.length === 0)
      return n.value = i.value, n;
  const o = e.filter((i) => !ne(i));
  return o.length === 1 ? (n.value = o[0].value, o[0]) : (n.issues.push({
    code: "invalid_union",
    input: n.value,
    inst: t,
    errors: e.map((i) => i.issues.map((s) => G(s, r, R())))
  }), n);
}
const ut = /* @__PURE__ */ a("$ZodUnion", (e, n) => {
  z.init(e, n), Z(e._zod, "optin", () => n.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), Z(e._zod, "optout", () => n.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), Z(e._zod, "values", () => {
    if (n.options.every((o) => o._zod.values))
      return new Set(n.options.flatMap((o) => Array.from(o._zod.values)));
  }), Z(e._zod, "pattern", () => {
    if (n.options.every((o) => o._zod.pattern)) {
      const o = n.options.map((i) => i._zod.pattern);
      return new RegExp(`^(${o.map((i) => sn(i.source)).join("|")})$`);
    }
  });
  const t = n.options.length === 1, r = n.options[0]._zod.run;
  e._zod.parse = (o, i) => {
    if (t)
      return r(o, i);
    let s = !1;
    const u = [];
    for (const c of n.options) {
      const l = c._zod.run({
        value: o.value,
        issues: []
      }, i);
      if (l instanceof Promise)
        u.push(l), s = !0;
      else {
        if (l.issues.length === 0)
          return l;
        u.push(l);
      }
    }
    return s ? Promise.all(u).then((c) => xr(c, o, e, i)) : xr(u, o, e, i);
  };
}), Zs = /* @__PURE__ */ a("$ZodDiscriminatedUnion", (e, n) => {
  ut.init(e, n);
  const t = e._zod.parse;
  Z(e._zod, "propValues", () => {
    const o = {};
    for (const i of n.options) {
      const s = i._zod.propValues;
      if (!s || Object.keys(s).length === 0)
        throw new Error(`Invalid discriminated union option at index "${n.options.indexOf(i)}"`);
      for (const [u, c] of Object.entries(s)) {
        o[u] || (o[u] = /* @__PURE__ */ new Set());
        for (const l of c)
          o[u].add(l);
      }
    }
    return o;
  });
  const r = Ie(() => {
    const o = n.options, i = /* @__PURE__ */ new Map();
    for (const s of o) {
      const u = s._zod.propValues?.[n.discriminator];
      if (!u || u.size === 0)
        throw new Error(`Invalid discriminated union option at index "${n.options.indexOf(s)}"`);
      for (const c of u) {
        if (i.has(c))
          throw new Error(`Duplicate discriminator value "${String(c)}"`);
        i.set(c, s);
      }
    }
    return i;
  });
  e._zod.parse = (o, i) => {
    const s = o.value;
    if (!he(s))
      return o.issues.push({
        code: "invalid_type",
        expected: "object",
        input: s,
        inst: e
      }), o;
    const u = r.value.get(s?.[n.discriminator]);
    return u ? u._zod.run(o, i) : n.unionFallback ? t(o, i) : (o.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: n.discriminator,
      input: s,
      path: [n.discriminator],
      inst: e
    }), o);
  };
}), ks = /* @__PURE__ */ a("$ZodIntersection", (e, n) => {
  z.init(e, n), e._zod.parse = (t, r) => {
    const o = t.value, i = n.left._zod.run({ value: o, issues: [] }, r), s = n.right._zod.run({ value: o, issues: [] }, r);
    return i instanceof Promise || s instanceof Promise ? Promise.all([i, s]).then(([c, l]) => Nr(t, c, l)) : Nr(t, i, s);
  };
});
function On(e, n) {
  if (e === n)
    return { valid: !0, data: e };
  if (e instanceof Date && n instanceof Date && +e == +n)
    return { valid: !0, data: e };
  if (oe(e) && oe(n)) {
    const t = Object.keys(n), r = Object.keys(e).filter((i) => t.indexOf(i) !== -1), o = { ...e, ...n };
    for (const i of r) {
      const s = On(e[i], n[i]);
      if (!s.valid)
        return {
          valid: !1,
          mergeErrorPath: [i, ...s.mergeErrorPath]
        };
      o[i] = s.data;
    }
    return { valid: !0, data: o };
  }
  if (Array.isArray(e) && Array.isArray(n)) {
    if (e.length !== n.length)
      return { valid: !1, mergeErrorPath: [] };
    const t = [];
    for (let r = 0; r < e.length; r++) {
      const o = e[r], i = n[r], s = On(o, i);
      if (!s.valid)
        return {
          valid: !1,
          mergeErrorPath: [r, ...s.mergeErrorPath]
        };
      t.push(s.data);
    }
    return { valid: !0, data: t };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Nr(e, n, t) {
  if (n.issues.length && e.issues.push(...n.issues), t.issues.length && e.issues.push(...t.issues), ne(e))
    return e;
  const r = On(n.value, t.value);
  if (!r.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);
  return e.value = r.data, e;
}
const ct = /* @__PURE__ */ a("$ZodTuple", (e, n) => {
  z.init(e, n);
  const t = n.items, r = t.length - [...t].reverse().findIndex((o) => o._zod.optin !== "optional");
  e._zod.parse = (o, i) => {
    const s = o.value;
    if (!Array.isArray(s))
      return o.issues.push({
        input: s,
        inst: e,
        expected: "tuple",
        code: "invalid_type"
      }), o;
    o.value = [];
    const u = [];
    if (!n.rest) {
      const l = s.length > t.length, d = s.length < r - 1;
      if (l || d)
        return o.issues.push({
          ...l ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
          input: s,
          inst: e,
          origin: "array"
        }), o;
    }
    let c = -1;
    for (const l of t) {
      if (c++, c >= s.length && c >= r)
        continue;
      const d = l._zod.run({
        value: s[c],
        issues: []
      }, i);
      d instanceof Promise ? u.push(d.then((m) => Re(m, o, c))) : Re(d, o, c);
    }
    if (n.rest) {
      const l = s.slice(t.length);
      for (const d of l) {
        c++;
        const m = n.rest._zod.run({
          value: d,
          issues: []
        }, i);
        m instanceof Promise ? u.push(m.then((g) => Re(g, o, c))) : Re(m, o, c);
      }
    }
    return u.length ? Promise.all(u).then(() => o) : o;
  };
});
function Re(e, n, t) {
  e.issues.length && n.issues.push(...J(t, e.issues)), n.value[t] = e.value;
}
const Is = /* @__PURE__ */ a("$ZodRecord", (e, n) => {
  z.init(e, n), e._zod.parse = (t, r) => {
    const o = t.value;
    if (!oe(o))
      return t.issues.push({
        expected: "record",
        code: "invalid_type",
        input: o,
        inst: e
      }), t;
    const i = [];
    if (n.keyType._zod.values) {
      const s = n.keyType._zod.values;
      t.value = {};
      for (const c of s)
        if (typeof c == "string" || typeof c == "number" || typeof c == "symbol") {
          const l = n.valueType._zod.run({ value: o[c], issues: [] }, r);
          l instanceof Promise ? i.push(l.then((d) => {
            d.issues.length && t.issues.push(...J(c, d.issues)), t.value[c] = d.value;
          })) : (l.issues.length && t.issues.push(...J(c, l.issues)), t.value[c] = l.value);
        }
      let u;
      for (const c in o)
        s.has(c) || (u = u ?? [], u.push(c));
      u && u.length > 0 && t.issues.push({
        code: "unrecognized_keys",
        input: o,
        inst: e,
        keys: u
      });
    } else {
      t.value = {};
      for (const s of Reflect.ownKeys(o)) {
        if (s === "__proto__")
          continue;
        const u = n.keyType._zod.run({ value: s, issues: [] }, r);
        if (u instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (u.issues.length) {
          t.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: u.issues.map((l) => G(l, r, R())),
            input: s,
            path: [s],
            inst: e
          }), t.value[u.value] = u.value;
          continue;
        }
        const c = n.valueType._zod.run({ value: o[s], issues: [] }, r);
        c instanceof Promise ? i.push(c.then((l) => {
          l.issues.length && t.issues.push(...J(s, l.issues)), t.value[u.value] = l.value;
        })) : (c.issues.length && t.issues.push(...J(s, c.issues)), t.value[u.value] = c.value);
      }
    }
    return i.length ? Promise.all(i).then(() => t) : t;
  };
}), Es = /* @__PURE__ */ a("$ZodMap", (e, n) => {
  z.init(e, n), e._zod.parse = (t, r) => {
    const o = t.value;
    if (!(o instanceof Map))
      return t.issues.push({
        expected: "map",
        code: "invalid_type",
        input: o,
        inst: e
      }), t;
    const i = [];
    t.value = /* @__PURE__ */ new Map();
    for (const [s, u] of o) {
      const c = n.keyType._zod.run({ value: s, issues: [] }, r), l = n.valueType._zod.run({ value: u, issues: [] }, r);
      c instanceof Promise || l instanceof Promise ? i.push(Promise.all([c, l]).then(([d, m]) => {
        jr(d, m, t, s, o, e, r);
      })) : jr(c, l, t, s, o, e, r);
    }
    return i.length ? Promise.all(i).then(() => t) : t;
  };
});
function jr(e, n, t, r, o, i, s) {
  e.issues.length && (Ke.has(typeof r) ? t.issues.push(...J(r, e.issues)) : t.issues.push({
    code: "invalid_key",
    origin: "map",
    input: o,
    inst: i,
    issues: e.issues.map((u) => G(u, s, R()))
  })), n.issues.length && (Ke.has(typeof r) ? t.issues.push(...J(r, n.issues)) : t.issues.push({
    origin: "map",
    code: "invalid_element",
    input: o,
    inst: i,
    key: r,
    issues: n.issues.map((u) => G(u, s, R()))
  })), t.value.set(e.value, n.value);
}
const Ss = /* @__PURE__ */ a("$ZodSet", (e, n) => {
  z.init(e, n), e._zod.parse = (t, r) => {
    const o = t.value;
    if (!(o instanceof Set))
      return t.issues.push({
        input: o,
        inst: e,
        expected: "set",
        code: "invalid_type"
      }), t;
    const i = [];
    t.value = /* @__PURE__ */ new Set();
    for (const s of o) {
      const u = n.valueType._zod.run({ value: s, issues: [] }, r);
      u instanceof Promise ? i.push(u.then((c) => Dr(c, t))) : Dr(u, t);
    }
    return i.length ? Promise.all(i).then(() => t) : t;
  };
});
function Dr(e, n) {
  e.issues.length && n.issues.push(...e.issues), n.value.add(e.value);
}
const Ts = /* @__PURE__ */ a("$ZodEnum", (e, n) => {
  z.init(e, n);
  const t = Fn(n.entries), r = new Set(t);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${t.filter((o) => Ke.has(typeof o)).map((o) => typeof o == "string" ? q(o) : o.toString()).join("|")})$`), e._zod.parse = (o, i) => {
    const s = o.value;
    return r.has(s) || o.issues.push({
      code: "invalid_value",
      values: t,
      input: s,
      inst: e
    }), o;
  };
}), As = /* @__PURE__ */ a("$ZodLiteral", (e, n) => {
  if (z.init(e, n), n.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  e._zod.values = new Set(n.values), e._zod.pattern = new RegExp(`^(${n.values.map((t) => typeof t == "string" ? q(t) : t ? q(t.toString()) : String(t)).join("|")})$`), e._zod.parse = (t, r) => {
    const o = t.value;
    return e._zod.values.has(o) || t.issues.push({
      code: "invalid_value",
      values: n.values,
      input: o,
      inst: e
    }), t;
  };
}), Os = /* @__PURE__ */ a("$ZodFile", (e, n) => {
  z.init(e, n), e._zod.parse = (t, r) => {
    const o = t.value;
    return o instanceof File || t.issues.push({
      expected: "file",
      code: "invalid_type",
      input: o,
      inst: e
    }), t;
  };
}), Ps = /* @__PURE__ */ a("$ZodTransform", (e, n) => {
  z.init(e, n), e._zod.parse = (t, r) => {
    if (r.direction === "backward")
      throw new on(e.constructor.name);
    const o = n.transform(t.value, t);
    if (r.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((s) => (t.value = s, t));
    if (o instanceof Promise)
      throw new re();
    return t.value = o, t;
  };
});
function Cr(e, n) {
  return e.issues.length && n === void 0 ? { issues: [], value: void 0 } : e;
}
const xs = /* @__PURE__ */ a("$ZodOptional", (e, n) => {
  z.init(e, n), e._zod.optin = "optional", e._zod.optout = "optional", Z(e._zod, "values", () => n.innerType._zod.values ? /* @__PURE__ */ new Set([...n.innerType._zod.values, void 0]) : void 0), Z(e._zod, "pattern", () => {
    const t = n.innerType._zod.pattern;
    return t ? new RegExp(`^(${sn(t.source)})?$`) : void 0;
  }), e._zod.parse = (t, r) => {
    if (n.innerType._zod.optin === "optional") {
      const o = n.innerType._zod.run(t, r);
      return o instanceof Promise ? o.then((i) => Cr(i, t.value)) : Cr(o, t.value);
    }
    return t.value === void 0 ? t : n.innerType._zod.run(t, r);
  };
}), Ns = /* @__PURE__ */ a("$ZodNullable", (e, n) => {
  z.init(e, n), Z(e._zod, "optin", () => n.innerType._zod.optin), Z(e._zod, "optout", () => n.innerType._zod.optout), Z(e._zod, "pattern", () => {
    const t = n.innerType._zod.pattern;
    return t ? new RegExp(`^(${sn(t.source)}|null)$`) : void 0;
  }), Z(e._zod, "values", () => n.innerType._zod.values ? /* @__PURE__ */ new Set([...n.innerType._zod.values, null]) : void 0), e._zod.parse = (t, r) => t.value === null ? t : n.innerType._zod.run(t, r);
}), js = /* @__PURE__ */ a("$ZodDefault", (e, n) => {
  z.init(e, n), e._zod.optin = "optional", Z(e._zod, "values", () => n.innerType._zod.values), e._zod.parse = (t, r) => {
    if (r.direction === "backward")
      return n.innerType._zod.run(t, r);
    if (t.value === void 0)
      return t.value = n.defaultValue, t;
    const o = n.innerType._zod.run(t, r);
    return o instanceof Promise ? o.then((i) => Rr(i, n)) : Rr(o, n);
  };
});
function Rr(e, n) {
  return e.value === void 0 && (e.value = n.defaultValue), e;
}
const Ds = /* @__PURE__ */ a("$ZodPrefault", (e, n) => {
  z.init(e, n), e._zod.optin = "optional", Z(e._zod, "values", () => n.innerType._zod.values), e._zod.parse = (t, r) => (r.direction === "backward" || t.value === void 0 && (t.value = n.defaultValue), n.innerType._zod.run(t, r));
}), Cs = /* @__PURE__ */ a("$ZodNonOptional", (e, n) => {
  z.init(e, n), Z(e._zod, "values", () => {
    const t = n.innerType._zod.values;
    return t ? new Set([...t].filter((r) => r !== void 0)) : void 0;
  }), e._zod.parse = (t, r) => {
    const o = n.innerType._zod.run(t, r);
    return o instanceof Promise ? o.then((i) => Fr(i, e)) : Fr(o, e);
  };
});
function Fr(e, n) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: n
  }), e;
}
const Rs = /* @__PURE__ */ a("$ZodSuccess", (e, n) => {
  z.init(e, n), e._zod.parse = (t, r) => {
    if (r.direction === "backward")
      throw new on("ZodSuccess");
    const o = n.innerType._zod.run(t, r);
    return o instanceof Promise ? o.then((i) => (t.value = i.issues.length === 0, t)) : (t.value = o.issues.length === 0, t);
  };
}), Fs = /* @__PURE__ */ a("$ZodCatch", (e, n) => {
  z.init(e, n), Z(e._zod, "optin", () => n.innerType._zod.optin), Z(e._zod, "optout", () => n.innerType._zod.optout), Z(e._zod, "values", () => n.innerType._zod.values), e._zod.parse = (t, r) => {
    if (r.direction === "backward")
      return n.innerType._zod.run(t, r);
    const o = n.innerType._zod.run(t, r);
    return o instanceof Promise ? o.then((i) => (t.value = i.value, i.issues.length && (t.value = n.catchValue({
      ...t,
      error: {
        issues: i.issues.map((s) => G(s, r, R()))
      },
      input: t.value
    }), t.issues = []), t)) : (t.value = o.value, o.issues.length && (t.value = n.catchValue({
      ...t,
      error: {
        issues: o.issues.map((i) => G(i, r, R()))
      },
      input: t.value
    }), t.issues = []), t);
  };
}), Us = /* @__PURE__ */ a("$ZodNaN", (e, n) => {
  z.init(e, n), e._zod.parse = (t, r) => ((typeof t.value != "number" || !Number.isNaN(t.value)) && t.issues.push({
    input: t.value,
    inst: e,
    expected: "nan",
    code: "invalid_type"
  }), t);
}), Ms = /* @__PURE__ */ a("$ZodPipe", (e, n) => {
  z.init(e, n), Z(e._zod, "values", () => n.in._zod.values), Z(e._zod, "optin", () => n.in._zod.optin), Z(e._zod, "optout", () => n.out._zod.optout), Z(e._zod, "propValues", () => n.in._zod.propValues), e._zod.parse = (t, r) => {
    if (r.direction === "backward") {
      const i = n.out._zod.run(t, r);
      return i instanceof Promise ? i.then((s) => Fe(s, n.in, r)) : Fe(i, n.in, r);
    }
    const o = n.in._zod.run(t, r);
    return o instanceof Promise ? o.then((i) => Fe(i, n.out, r)) : Fe(o, n.out, r);
  };
});
function Fe(e, n, t) {
  return e.issues.length ? (e.aborted = !0, e) : n._zod.run({ value: e.value, issues: e.issues }, t);
}
const at = /* @__PURE__ */ a("$ZodCodec", (e, n) => {
  z.init(e, n), Z(e._zod, "values", () => n.in._zod.values), Z(e._zod, "optin", () => n.in._zod.optin), Z(e._zod, "optout", () => n.out._zod.optout), Z(e._zod, "propValues", () => n.in._zod.propValues), e._zod.parse = (t, r) => {
    if ((r.direction || "forward") === "forward") {
      const i = n.in._zod.run(t, r);
      return i instanceof Promise ? i.then((s) => Ue(s, n, r)) : Ue(i, n, r);
    } else {
      const i = n.out._zod.run(t, r);
      return i instanceof Promise ? i.then((s) => Ue(s, n, r)) : Ue(i, n, r);
    }
  };
});
function Ue(e, n, t) {
  if (e.issues.length)
    return e.aborted = !0, e;
  if ((t.direction || "forward") === "forward") {
    const o = n.transform(e.value, e);
    return o instanceof Promise ? o.then((i) => Me(e, i, n.out, t)) : Me(e, o, n.out, t);
  } else {
    const o = n.reverseTransform(e.value, e);
    return o instanceof Promise ? o.then((i) => Me(e, i, n.in, t)) : Me(e, o, n.in, t);
  }
}
function Me(e, n, t, r) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: n, issues: e.issues }, r);
}
const Ls = /* @__PURE__ */ a("$ZodReadonly", (e, n) => {
  z.init(e, n), Z(e._zod, "propValues", () => n.innerType._zod.propValues), Z(e._zod, "values", () => n.innerType._zod.values), Z(e._zod, "optin", () => n.innerType._zod.optin), Z(e._zod, "optout", () => n.innerType._zod.optout), e._zod.parse = (t, r) => {
    if (r.direction === "backward")
      return n.innerType._zod.run(t, r);
    const o = n.innerType._zod.run(t, r);
    return o instanceof Promise ? o.then(Ur) : Ur(o);
  };
});
function Ur(e) {
  return e.value = Object.freeze(e.value), e;
}
const Vs = /* @__PURE__ */ a("$ZodTemplateLiteral", (e, n) => {
  z.init(e, n);
  const t = [];
  for (const r of n.parts)
    if (typeof r == "object" && r !== null) {
      if (!r._zod.pattern)
        throw new Error(`Invalid template literal part, no pattern found: ${[...r._zod.traits].shift()}`);
      const o = r._zod.pattern instanceof RegExp ? r._zod.pattern.source : r._zod.pattern;
      if (!o)
        throw new Error(`Invalid template literal part: ${r._zod.traits}`);
      const i = o.startsWith("^") ? 1 : 0, s = o.endsWith("$") ? o.length - 1 : o.length;
      t.push(o.slice(i, s));
    } else if (r === null || _o.has(typeof r))
      t.push(q(`${r}`));
    else
      throw new Error(`Invalid template literal part: ${r}`);
  e._zod.pattern = new RegExp(`^${t.join("")}$`), e._zod.parse = (r, o) => typeof r.value != "string" ? (r.issues.push({
    input: r.value,
    inst: e,
    expected: "template_literal",
    code: "invalid_type"
  }), r) : (e._zod.pattern.lastIndex = 0, e._zod.pattern.test(r.value) || r.issues.push({
    input: r.value,
    inst: e,
    code: "invalid_format",
    format: n.format ?? "template_literal",
    pattern: e._zod.pattern.source
  }), r);
}), Bs = /* @__PURE__ */ a("$ZodFunction", (e, n) => (z.init(e, n), e._def = n, e._zod.def = n, e.implement = (t) => {
  if (typeof t != "function")
    throw new Error("implement() must be called with a function");
  return function(...r) {
    const o = e._def.input ? Tn(e._def.input, r) : r, i = Reflect.apply(t, this, o);
    return e._def.output ? Tn(e._def.output, i) : i;
  };
}, e.implementAsync = (t) => {
  if (typeof t != "function")
    throw new Error("implementAsync() must be called with a function");
  return async function(...r) {
    const o = e._def.input ? await An(e._def.input, r) : r, i = await Reflect.apply(t, this, o);
    return e._def.output ? await An(e._def.output, i) : i;
  };
}, e._zod.parse = (t, r) => typeof t.value != "function" ? (t.issues.push({
  code: "invalid_type",
  expected: "function",
  input: t.value,
  inst: e
}), t) : (e._def.output && e._def.output._zod.def.type === "promise" ? t.value = e.implementAsync(t.value) : t.value = e.implement(t.value), t), e.input = (...t) => {
  const r = e.constructor;
  return Array.isArray(t[0]) ? new r({
    type: "function",
    input: new ct({
      type: "tuple",
      items: t[0],
      rest: t[1]
    }),
    output: e._def.output
  }) : new r({
    type: "function",
    input: t[0],
    output: e._def.output
  });
}, e.output = (t) => {
  const r = e.constructor;
  return new r({
    type: "function",
    input: e._def.input,
    output: t
  });
}, e)), Js = /* @__PURE__ */ a("$ZodPromise", (e, n) => {
  z.init(e, n), e._zod.parse = (t, r) => Promise.resolve(t.value).then((o) => n.innerType._zod.run({ value: o, issues: [] }, r));
}), Ws = /* @__PURE__ */ a("$ZodLazy", (e, n) => {
  z.init(e, n), Z(e._zod, "innerType", () => n.getter()), Z(e._zod, "pattern", () => e._zod.innerType._zod.pattern), Z(e._zod, "propValues", () => e._zod.innerType._zod.propValues), Z(e._zod, "optin", () => e._zod.innerType._zod.optin ?? void 0), Z(e._zod, "optout", () => e._zod.innerType._zod.optout ?? void 0), e._zod.parse = (t, r) => e._zod.innerType._zod.run(t, r);
}), Gs = /* @__PURE__ */ a("$ZodCustom", (e, n) => {
  N.init(e, n), z.init(e, n), e._zod.parse = (t, r) => t, e._zod.check = (t) => {
    const r = t.value, o = n.fn(r);
    if (o instanceof Promise)
      return o.then((i) => Mr(i, t, r, e));
    Mr(o, t, r, e);
  };
});
function Mr(e, n, t, r) {
  if (!e) {
    const o = {
      code: "custom",
      input: t,
      inst: r,
      // incorporates params.error into issue reporting
      path: [...r._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !r._zod.def.abort
      // params: inst._zod.def.params,
    };
    r._zod.def.params && (o.params = r._zod.def.params), n.issues.push(me(o));
  }
}
const Ks = Symbol("ZodOutput"), Ys = Symbol("ZodInput");
let lt = class {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(n, ...t) {
    const r = t[0];
    if (this._map.set(n, r), r && typeof r == "object" && "id" in r) {
      if (this._idmap.has(r.id))
        throw new Error(`ID ${r.id} already exists in the registry`);
      this._idmap.set(r.id, n);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(n) {
    const t = this._map.get(n);
    return t && typeof t == "object" && "id" in t && this._idmap.delete(t.id), this._map.delete(n), this;
  }
  get(n) {
    const t = n._zod.parent;
    if (t) {
      const r = { ...this.get(t) ?? {} };
      delete r.id;
      const o = { ...r, ...this._map.get(n) };
      return Object.keys(o).length ? o : void 0;
    }
    return this._map.get(n);
  }
  has(n) {
    return this._map.has(n);
  }
};
function ft() {
  return new lt();
}
const te = /* @__PURE__ */ ft();
function qs(e, n) {
  return new e({
    type: "string",
    ...h(n)
  });
}
function Xs(e, n) {
  return new e({
    type: "string",
    coerce: !0,
    ...h(n)
  });
}
function dt(e, n) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...h(n)
  });
}
function qe(e, n) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...h(n)
  });
}
function pt(e, n) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...h(n)
  });
}
function ht(e, n) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...h(n)
  });
}
function mt(e, n) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...h(n)
  });
}
function _t(e, n) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...h(n)
  });
}
function ln(e, n) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...h(n)
  });
}
function gt(e, n) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...h(n)
  });
}
function vt(e, n) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...h(n)
  });
}
function $t(e, n) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...h(n)
  });
}
function bt(e, n) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...h(n)
  });
}
function zt(e, n) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...h(n)
  });
}
function yt(e, n) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...h(n)
  });
}
function wt(e, n) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...h(n)
  });
}
function Zt(e, n) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...h(n)
  });
}
function kt(e, n) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...h(n)
  });
}
function It(e, n) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...h(n)
  });
}
function Et(e, n) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...h(n)
  });
}
function St(e, n) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...h(n)
  });
}
function Tt(e, n) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...h(n)
  });
}
function At(e, n) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...h(n)
  });
}
function Ot(e, n) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...h(n)
  });
}
const Hs = {
  Any: null,
  Minute: -1,
  Second: 0,
  Millisecond: 3,
  Microsecond: 6
};
function Qs(e, n) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...h(n)
  });
}
function eu(e, n) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...h(n)
  });
}
function nu(e, n) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...h(n)
  });
}
function tu(e, n) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...h(n)
  });
}
function ru(e, n) {
  return new e({
    type: "number",
    checks: [],
    ...h(n)
  });
}
function ou(e, n) {
  return new e({
    type: "number",
    coerce: !0,
    checks: [],
    ...h(n)
  });
}
function iu(e, n) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...h(n)
  });
}
function su(e, n) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float32",
    ...h(n)
  });
}
function uu(e, n) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float64",
    ...h(n)
  });
}
function cu(e, n) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "int32",
    ...h(n)
  });
}
function au(e, n) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "uint32",
    ...h(n)
  });
}
function lu(e, n) {
  return new e({
    type: "boolean",
    ...h(n)
  });
}
function fu(e, n) {
  return new e({
    type: "boolean",
    coerce: !0,
    ...h(n)
  });
}
function du(e, n) {
  return new e({
    type: "bigint",
    ...h(n)
  });
}
function pu(e, n) {
  return new e({
    type: "bigint",
    coerce: !0,
    ...h(n)
  });
}
function hu(e, n) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "int64",
    ...h(n)
  });
}
function mu(e, n) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "uint64",
    ...h(n)
  });
}
function _u(e, n) {
  return new e({
    type: "symbol",
    ...h(n)
  });
}
function gu(e, n) {
  return new e({
    type: "undefined",
    ...h(n)
  });
}
function vu(e, n) {
  return new e({
    type: "null",
    ...h(n)
  });
}
function $u(e) {
  return new e({
    type: "any"
  });
}
function bu(e) {
  return new e({
    type: "unknown"
  });
}
function zu(e, n) {
  return new e({
    type: "never",
    ...h(n)
  });
}
function yu(e, n) {
  return new e({
    type: "void",
    ...h(n)
  });
}
function wu(e, n) {
  return new e({
    type: "date",
    ...h(n)
  });
}
function Zu(e, n) {
  return new e({
    type: "date",
    coerce: !0,
    ...h(n)
  });
}
function ku(e, n) {
  return new e({
    type: "nan",
    ...h(n)
  });
}
function ie(e, n) {
  return new nt({
    check: "less_than",
    ...h(n),
    value: e,
    inclusive: !1
  });
}
function W(e, n) {
  return new nt({
    check: "less_than",
    ...h(n),
    value: e,
    inclusive: !0
  });
}
function se(e, n) {
  return new tt({
    check: "greater_than",
    ...h(n),
    value: e,
    inclusive: !1
  });
}
function U(e, n) {
  return new tt({
    check: "greater_than",
    ...h(n),
    value: e,
    inclusive: !0
  });
}
function Iu(e) {
  return se(0, e);
}
function Eu(e) {
  return ie(0, e);
}
function Su(e) {
  return W(0, e);
}
function Tu(e) {
  return U(0, e);
}
function ye(e, n) {
  return new gi({
    check: "multiple_of",
    ...h(n),
    value: e
  });
}
function fn(e, n) {
  return new bi({
    check: "max_size",
    ...h(n),
    maximum: e
  });
}
function we(e, n) {
  return new zi({
    check: "min_size",
    ...h(n),
    minimum: e
  });
}
function Pt(e, n) {
  return new yi({
    check: "size_equals",
    ...h(n),
    size: e
  });
}
function dn(e, n) {
  return new wi({
    check: "max_length",
    ...h(n),
    maximum: e
  });
}
function ge(e, n) {
  return new Zi({
    check: "min_length",
    ...h(n),
    minimum: e
  });
}
function pn(e, n) {
  return new ki({
    check: "length_equals",
    ...h(n),
    length: e
  });
}
function xt(e, n) {
  return new Ii({
    check: "string_format",
    format: "regex",
    ...h(n),
    pattern: e
  });
}
function Nt(e) {
  return new Ei({
    check: "string_format",
    format: "lowercase",
    ...h(e)
  });
}
function jt(e) {
  return new Si({
    check: "string_format",
    format: "uppercase",
    ...h(e)
  });
}
function Dt(e, n) {
  return new Ti({
    check: "string_format",
    format: "includes",
    ...h(n),
    includes: e
  });
}
function Ct(e, n) {
  return new Ai({
    check: "string_format",
    format: "starts_with",
    ...h(n),
    prefix: e
  });
}
function Rt(e, n) {
  return new Oi({
    check: "string_format",
    format: "ends_with",
    ...h(n),
    suffix: e
  });
}
function Au(e, n, t) {
  return new Pi({
    check: "property",
    property: e,
    schema: n,
    ...h(t)
  });
}
function Ft(e, n) {
  return new xi({
    check: "mime_type",
    mime: e,
    ...h(n)
  });
}
function ce(e) {
  return new Ni({
    check: "overwrite",
    tx: e
  });
}
function Ut(e) {
  return ce((n) => n.normalize(e));
}
function Mt() {
  return ce((e) => e.trim());
}
function Lt() {
  return ce((e) => e.toLowerCase());
}
function Vt() {
  return ce((e) => e.toUpperCase());
}
function Ou(e, n, t) {
  return new e({
    type: "array",
    element: n,
    // get element() {
    //   return element;
    // },
    ...h(t)
  });
}
function dl(e, n, t) {
  return new e({
    type: "union",
    options: n,
    ...h(t)
  });
}
function pl(e, n, t, r) {
  return new e({
    type: "union",
    options: t,
    discriminator: n,
    ...h(r)
  });
}
function hl(e, n, t) {
  return new e({
    type: "intersection",
    left: n,
    right: t
  });
}
function ml(e, n, t, r) {
  const o = t instanceof z, i = o ? r : t, s = o ? t : null;
  return new e({
    type: "tuple",
    items: n,
    rest: s,
    ...h(i)
  });
}
function _l(e, n, t, r) {
  return new e({
    type: "record",
    keyType: n,
    valueType: t,
    ...h(r)
  });
}
function gl(e, n, t, r) {
  return new e({
    type: "map",
    keyType: n,
    valueType: t,
    ...h(r)
  });
}
function vl(e, n, t) {
  return new e({
    type: "set",
    valueType: n,
    ...h(t)
  });
}
function $l(e, n, t) {
  const r = Array.isArray(n) ? Object.fromEntries(n.map((o) => [o, o])) : n;
  return new e({
    type: "enum",
    entries: r,
    ...h(t)
  });
}
function bl(e, n, t) {
  return new e({
    type: "enum",
    entries: n,
    ...h(t)
  });
}
function zl(e, n, t) {
  return new e({
    type: "literal",
    values: Array.isArray(n) ? n : [n],
    ...h(t)
  });
}
function Pu(e, n) {
  return new e({
    type: "file",
    ...h(n)
  });
}
function yl(e, n) {
  return new e({
    type: "transform",
    transform: n
  });
}
function wl(e, n) {
  return new e({
    type: "optional",
    innerType: n
  });
}
function Zl(e, n) {
  return new e({
    type: "nullable",
    innerType: n
  });
}
function kl(e, n, t) {
  return new e({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof t == "function" ? t() : un(t);
    }
  });
}
function Il(e, n, t) {
  return new e({
    type: "nonoptional",
    innerType: n,
    ...h(t)
  });
}
function El(e, n) {
  return new e({
    type: "success",
    innerType: n
  });
}
function Sl(e, n, t) {
  return new e({
    type: "catch",
    innerType: n,
    catchValue: typeof t == "function" ? t : () => t
  });
}
function Tl(e, n, t) {
  return new e({
    type: "pipe",
    in: n,
    out: t
  });
}
function Al(e, n) {
  return new e({
    type: "readonly",
    innerType: n
  });
}
function Ol(e, n, t) {
  return new e({
    type: "template_literal",
    parts: n,
    ...h(t)
  });
}
function Pl(e, n) {
  return new e({
    type: "lazy",
    getter: n
  });
}
function xl(e, n) {
  return new e({
    type: "promise",
    innerType: n
  });
}
function xu(e, n, t) {
  const r = h(t);
  return r.abort ?? (r.abort = !0), new e({
    type: "custom",
    check: "custom",
    fn: n,
    ...r
  });
}
function Nu(e, n, t) {
  return new e({
    type: "custom",
    check: "custom",
    fn: n,
    ...h(t)
  });
}
function ju(e) {
  const n = Du((t) => (t.addIssue = (r) => {
    if (typeof r == "string")
      t.issues.push(me(r, t.value, n._zod.def));
    else {
      const o = r;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = t.value), o.inst ?? (o.inst = n), o.continue ?? (o.continue = !n._zod.def.abort), t.issues.push(me(o));
    }
  }, e(t.value, t)));
  return n;
}
function Du(e, n) {
  const t = new N({
    check: "custom",
    ...h(n)
  });
  return t._zod.check = e, t;
}
function Cu(e, n) {
  const t = h(n);
  let r = t.truthy ?? ["true", "1", "yes", "on", "y", "enabled"], o = t.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  t.case !== "sensitive" && (r = r.map((_) => typeof _ == "string" ? _.toLowerCase() : _), o = o.map((_) => typeof _ == "string" ? _.toLowerCase() : _));
  const i = new Set(r), s = new Set(o), u = e.Codec ?? at, c = e.Boolean ?? it, l = e.String ?? Ne, d = new l({ type: "string", error: t.error }), m = new c({ type: "boolean", error: t.error }), g = new u({
    type: "pipe",
    in: d,
    out: m,
    transform: ((_, f) => {
      let v = _;
      return t.case !== "sensitive" && (v = v.toLowerCase()), i.has(v) ? !0 : s.has(v) ? !1 : (f.issues.push({
        code: "invalid_value",
        expected: "stringbool",
        values: [...i, ...s],
        input: f.value,
        inst: g,
        continue: !1
      }), {});
    }),
    reverseTransform: ((_, f) => _ === !0 ? r[0] || "true" : o[0] || "false"),
    error: t.error
  });
  return g;
}
function je(e, n, t, r = {}) {
  const o = h(r), i = {
    ...h(r),
    check: "string_format",
    type: "string",
    format: n,
    fn: typeof t == "function" ? t : (u) => t.test(u),
    ...o
  };
  return t instanceof RegExp && (i.pattern = t), new e(i);
}
class Pn {
  constructor(n) {
    this.counter = 0, this.metadataRegistry = n?.metadata ?? te, this.target = n?.target ?? "draft-2020-12", this.unrepresentable = n?.unrepresentable ?? "throw", this.override = n?.override ?? (() => {
    }), this.io = n?.io ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(n, t = { path: [], schemaPath: [] }) {
    var r;
    const o = n._zod.def, i = {
      guid: "uuid",
      url: "uri",
      datetime: "date-time",
      json_string: "json-string",
      regex: ""
      // do not set
    }, s = this.seen.get(n);
    if (s)
      return s.count++, t.schemaPath.includes(n) && (s.cycle = t.path), s.schema;
    const u = { schema: {}, count: 1, cycle: void 0, path: t.path };
    this.seen.set(n, u);
    const c = n._zod.toJSONSchema?.();
    if (c)
      u.schema = c;
    else {
      const m = {
        ...t,
        schemaPath: [...t.schemaPath, n],
        path: t.path
      }, g = n._zod.parent;
      if (g)
        u.ref = g, this.process(g, m), this.seen.get(g).isParent = !0;
      else {
        const _ = u.schema;
        switch (o.type) {
          case "string": {
            const f = _;
            f.type = "string";
            const { minimum: v, maximum: $, format: E, patterns: I, contentEncoding: w } = n._zod.bag;
            if (typeof v == "number" && (f.minLength = v), typeof $ == "number" && (f.maxLength = $), E && (f.format = i[E] ?? E, f.format === "" && delete f.format), w && (f.contentEncoding = w), I && I.size > 0) {
              const k = [...I];
              k.length === 1 ? f.pattern = k[0].source : k.length > 1 && (u.schema.allOf = [
                ...k.map((C) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: C.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const f = _, { minimum: v, maximum: $, format: E, multipleOf: I, exclusiveMaximum: w, exclusiveMinimum: k } = n._zod.bag;
            typeof E == "string" && E.includes("int") ? f.type = "integer" : f.type = "number", typeof k == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (f.minimum = k, f.exclusiveMinimum = !0) : f.exclusiveMinimum = k), typeof v == "number" && (f.minimum = v, typeof k == "number" && this.target !== "draft-4" && (k >= v ? delete f.minimum : delete f.exclusiveMinimum)), typeof w == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (f.maximum = w, f.exclusiveMaximum = !0) : f.exclusiveMaximum = w), typeof $ == "number" && (f.maximum = $, typeof w == "number" && this.target !== "draft-4" && (w <= $ ? delete f.maximum : delete f.exclusiveMaximum)), typeof I == "number" && (f.multipleOf = I);
            break;
          }
          case "boolean": {
            const f = _;
            f.type = "boolean";
            break;
          }
          case "bigint": {
            if (this.unrepresentable === "throw")
              throw new Error("BigInt cannot be represented in JSON Schema");
            break;
          }
          case "symbol": {
            if (this.unrepresentable === "throw")
              throw new Error("Symbols cannot be represented in JSON Schema");
            break;
          }
          case "null": {
            this.target === "openapi-3.0" ? (_.type = "string", _.nullable = !0, _.enum = [null]) : _.type = "null";
            break;
          }
          case "any":
            break;
          case "unknown":
            break;
          case "undefined": {
            if (this.unrepresentable === "throw")
              throw new Error("Undefined cannot be represented in JSON Schema");
            break;
          }
          case "void": {
            if (this.unrepresentable === "throw")
              throw new Error("Void cannot be represented in JSON Schema");
            break;
          }
          case "never": {
            _.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            const f = _, { minimum: v, maximum: $ } = n._zod.bag;
            typeof v == "number" && (f.minItems = v), typeof $ == "number" && (f.maxItems = $), f.type = "array", f.items = this.process(o.element, { ...m, path: [...m.path, "items"] });
            break;
          }
          case "object": {
            const f = _;
            f.type = "object", f.properties = {};
            const v = o.shape;
            for (const I in v)
              f.properties[I] = this.process(v[I], {
                ...m,
                path: [...m.path, "properties", I]
              });
            const $ = new Set(Object.keys(v)), E = new Set([...$].filter((I) => {
              const w = o.shape[I]._zod;
              return this.io === "input" ? w.optin === void 0 : w.optout === void 0;
            }));
            E.size > 0 && (f.required = Array.from(E)), o.catchall?._zod.def.type === "never" ? f.additionalProperties = !1 : o.catchall ? o.catchall && (f.additionalProperties = this.process(o.catchall, {
              ...m,
              path: [...m.path, "additionalProperties"]
            })) : this.io === "output" && (f.additionalProperties = !1);
            break;
          }
          case "union": {
            const f = _, v = o.options.map(($, E) => this.process($, {
              ...m,
              path: [...m.path, "anyOf", E]
            }));
            f.anyOf = v;
            break;
          }
          case "intersection": {
            const f = _, v = this.process(o.left, {
              ...m,
              path: [...m.path, "allOf", 0]
            }), $ = this.process(o.right, {
              ...m,
              path: [...m.path, "allOf", 1]
            }), E = (w) => "allOf" in w && Object.keys(w).length === 1, I = [
              ...E(v) ? v.allOf : [v],
              ...E($) ? $.allOf : [$]
            ];
            f.allOf = I;
            break;
          }
          case "tuple": {
            const f = _;
            f.type = "array";
            const v = this.target === "draft-2020-12" ? "prefixItems" : "items", $ = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", E = o.items.map((C, da) => this.process(C, {
              ...m,
              path: [...m.path, v, da]
            })), I = o.rest ? this.process(o.rest, {
              ...m,
              path: [...m.path, $, ...this.target === "openapi-3.0" ? [o.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (f.prefixItems = E, I && (f.items = I)) : this.target === "openapi-3.0" ? (f.items = {
              anyOf: E
            }, I && f.items.anyOf.push(I), f.minItems = E.length, I || (f.maxItems = E.length)) : (f.items = E, I && (f.additionalItems = I));
            const { minimum: w, maximum: k } = n._zod.bag;
            typeof w == "number" && (f.minItems = w), typeof k == "number" && (f.maxItems = k);
            break;
          }
          case "record": {
            const f = _;
            f.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (f.propertyNames = this.process(o.keyType, {
              ...m,
              path: [...m.path, "propertyNames"]
            })), f.additionalProperties = this.process(o.valueType, {
              ...m,
              path: [...m.path, "additionalProperties"]
            });
            break;
          }
          case "map": {
            if (this.unrepresentable === "throw")
              throw new Error("Map cannot be represented in JSON Schema");
            break;
          }
          case "set": {
            if (this.unrepresentable === "throw")
              throw new Error("Set cannot be represented in JSON Schema");
            break;
          }
          case "enum": {
            const f = _, v = Fn(o.entries);
            v.every(($) => typeof $ == "number") && (f.type = "number"), v.every(($) => typeof $ == "string") && (f.type = "string"), f.enum = v;
            break;
          }
          case "literal": {
            const f = _, v = [];
            for (const $ of o.values)
              if ($ === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof $ == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                v.push(Number($));
              } else
                v.push($);
            if (v.length !== 0) if (v.length === 1) {
              const $ = v[0];
              f.type = $ === null ? "null" : typeof $, this.target === "draft-4" || this.target === "openapi-3.0" ? f.enum = [$] : f.const = $;
            } else
              v.every(($) => typeof $ == "number") && (f.type = "number"), v.every(($) => typeof $ == "string") && (f.type = "string"), v.every(($) => typeof $ == "boolean") && (f.type = "string"), v.every(($) => $ === null) && (f.type = "null"), f.enum = v;
            break;
          }
          case "file": {
            const f = _, v = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: $, maximum: E, mime: I } = n._zod.bag;
            $ !== void 0 && (v.minLength = $), E !== void 0 && (v.maxLength = E), I ? I.length === 1 ? (v.contentMediaType = I[0], Object.assign(f, v)) : f.anyOf = I.map((w) => ({ ...v, contentMediaType: w })) : Object.assign(f, v);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const f = this.process(o.innerType, m);
            this.target === "openapi-3.0" ? (u.ref = o.innerType, _.nullable = !0) : _.anyOf = [f, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(o.innerType, m), u.ref = o.innerType;
            break;
          }
          case "success": {
            const f = _;
            f.type = "boolean";
            break;
          }
          case "default": {
            this.process(o.innerType, m), u.ref = o.innerType, _.default = JSON.parse(JSON.stringify(o.defaultValue));
            break;
          }
          case "prefault": {
            this.process(o.innerType, m), u.ref = o.innerType, this.io === "input" && (_._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
            break;
          }
          case "catch": {
            this.process(o.innerType, m), u.ref = o.innerType;
            let f;
            try {
              f = o.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            _.default = f;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const f = _, v = n._zod.pattern;
            if (!v)
              throw new Error("Pattern not found in template literal");
            f.type = "string", f.pattern = v.source;
            break;
          }
          case "pipe": {
            const f = this.io === "input" ? o.in._zod.def.type === "transform" ? o.out : o.in : o.out;
            this.process(f, m), u.ref = f;
            break;
          }
          case "readonly": {
            this.process(o.innerType, m), u.ref = o.innerType, _.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(o.innerType, m), u.ref = o.innerType;
            break;
          }
          case "optional": {
            this.process(o.innerType, m), u.ref = o.innerType;
            break;
          }
          case "lazy": {
            const f = n._zod.innerType;
            this.process(f, m), u.ref = f;
            break;
          }
          case "custom": {
            if (this.unrepresentable === "throw")
              throw new Error("Custom types cannot be represented in JSON Schema");
            break;
          }
          case "function": {
            if (this.unrepresentable === "throw")
              throw new Error("Function types cannot be represented in JSON Schema");
            break;
          }
        }
      }
    }
    const l = this.metadataRegistry.get(n);
    return l && Object.assign(u.schema, l), this.io === "input" && D(n) && (delete u.schema.examples, delete u.schema.default), this.io === "input" && u.schema._prefault && ((r = u.schema).default ?? (r.default = u.schema._prefault)), delete u.schema._prefault, this.seen.get(n).schema;
  }
  emit(n, t) {
    const r = {
      cycles: t?.cycles ?? "ref",
      reused: t?.reused ?? "inline",
      // unrepresentable: _params?.unrepresentable ?? "throw",
      // uri: _params?.uri ?? ((id) => `${id}`),
      external: t?.external ?? void 0
    }, o = this.seen.get(n);
    if (!o)
      throw new Error("Unprocessed schema. This is a bug in Zod.");
    const i = (d) => {
      const m = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (r.external) {
        const v = r.external.registry.get(d[0])?.id, $ = r.external.uri ?? ((I) => I);
        if (v)
          return { ref: $(v) };
        const E = d[1].defId ?? d[1].schema.id ?? `schema${this.counter++}`;
        return d[1].defId = E, { defId: E, ref: `${$("__shared")}#/${m}/${E}` };
      }
      if (d[1] === o)
        return { ref: "#" };
      const _ = `#/${m}/`, f = d[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: f, ref: _ + f };
    }, s = (d) => {
      if (d[1].schema.$ref)
        return;
      const m = d[1], { ref: g, defId: _ } = i(d);
      m.def = { ...m.schema }, _ && (m.defId = _);
      const f = m.schema;
      for (const v in f)
        delete f[v];
      f.$ref = g;
    };
    if (r.cycles === "throw")
      for (const d of this.seen.entries()) {
        const m = d[1];
        if (m.cycle)
          throw new Error(`Cycle detected: #/${m.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const d of this.seen.entries()) {
      const m = d[1];
      if (n === d[0]) {
        s(d);
        continue;
      }
      if (r.external) {
        const _ = r.external.registry.get(d[0])?.id;
        if (n !== d[0] && _) {
          s(d);
          continue;
        }
      }
      if (this.metadataRegistry.get(d[0])?.id) {
        s(d);
        continue;
      }
      if (m.cycle) {
        s(d);
        continue;
      }
      if (m.count > 1 && r.reused === "ref") {
        s(d);
        continue;
      }
    }
    const u = (d, m) => {
      const g = this.seen.get(d), _ = g.def ?? g.schema, f = { ..._ };
      if (g.ref === null)
        return;
      const v = g.ref;
      if (g.ref = null, v) {
        u(v, m);
        const $ = this.seen.get(v).schema;
        $.$ref && (m.target === "draft-7" || m.target === "draft-4" || m.target === "openapi-3.0") ? (_.allOf = _.allOf ?? [], _.allOf.push($)) : (Object.assign(_, $), Object.assign(_, f));
      }
      g.isParent || this.override({
        zodSchema: d,
        jsonSchema: _,
        path: g.path ?? []
      });
    };
    for (const d of [...this.seen.entries()].reverse())
      u(d[0], { target: this.target });
    const c = {};
    if (this.target === "draft-2020-12" ? c.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? c.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? c.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), r.external?.uri) {
      const d = r.external.registry.get(n)?.id;
      if (!d)
        throw new Error("Schema is missing an `id` property");
      c.$id = r.external.uri(d);
    }
    Object.assign(c, o.def);
    const l = r.external?.defs ?? {};
    for (const d of this.seen.entries()) {
      const m = d[1];
      m.def && m.defId && (l[m.defId] = m.def);
    }
    r.external || Object.keys(l).length > 0 && (this.target === "draft-2020-12" ? c.$defs = l : c.definitions = l);
    try {
      return JSON.parse(JSON.stringify(c));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function Ru(e, n) {
  if (e instanceof lt) {
    const r = new Pn(n), o = {};
    for (const u of e._idmap.entries()) {
      const [c, l] = u;
      r.process(l);
    }
    const i = {}, s = {
      registry: e,
      uri: n?.uri,
      defs: o
    };
    for (const u of e._idmap.entries()) {
      const [c, l] = u;
      i[c] = r.emit(l, {
        ...n,
        external: s
      });
    }
    if (Object.keys(o).length > 0) {
      const u = r.target === "draft-2020-12" ? "$defs" : "definitions";
      i.__shared = {
        [u]: o
      };
    }
    return { schemas: i };
  }
  const t = new Pn(n);
  return t.process(e), t.emit(e, n);
}
function D(e, n) {
  const t = n ?? { seen: /* @__PURE__ */ new Set() };
  if (t.seen.has(e))
    return !1;
  t.seen.add(e);
  const o = e._zod.def;
  switch (o.type) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "date":
    case "symbol":
    case "undefined":
    case "null":
    case "any":
    case "unknown":
    case "never":
    case "void":
    case "literal":
    case "enum":
    case "nan":
    case "file":
    case "template_literal":
      return !1;
    case "array":
      return D(o.element, t);
    case "object": {
      for (const i in o.shape)
        if (D(o.shape[i], t))
          return !0;
      return !1;
    }
    case "union": {
      for (const i of o.options)
        if (D(i, t))
          return !0;
      return !1;
    }
    case "intersection":
      return D(o.left, t) || D(o.right, t);
    case "tuple": {
      for (const i of o.items)
        if (D(i, t))
          return !0;
      return !!(o.rest && D(o.rest, t));
    }
    case "record":
      return D(o.keyType, t) || D(o.valueType, t);
    case "map":
      return D(o.keyType, t) || D(o.valueType, t);
    case "set":
      return D(o.valueType, t);
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return D(o.innerType, t);
    case "lazy":
      return D(o.getter(), t);
    case "default":
      return D(o.innerType, t);
    case "prefault":
      return D(o.innerType, t);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return D(o.in, t) || D(o.out, t);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${o.type}`);
}
const Nl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null }, Symbol.toStringTag, { value: "Module" })), jl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, $ZodAny: hs, $ZodArray: $s, $ZodAsyncError: re, $ZodBase64: ts, $ZodBase64URL: os, $ZodBigInt: st, $ZodBigIntFormat: ls, $ZodBoolean: it, $ZodCIDRv4: es, $ZodCIDRv6: ns, $ZodCUID: Vi, $ZodCUID2: Bi, $ZodCatch: Fs, $ZodCheck: N, $ZodCheckBigIntFormat: $i, $ZodCheckEndsWith: Oi, $ZodCheckGreaterThan: tt, $ZodCheckIncludes: Ti, $ZodCheckLengthEquals: ki, $ZodCheckLessThan: nt, $ZodCheckLowerCase: Ei, $ZodCheckMaxLength: wi, $ZodCheckMaxSize: bi, $ZodCheckMimeType: xi, $ZodCheckMinLength: Zi, $ZodCheckMinSize: zi, $ZodCheckMultipleOf: gi, $ZodCheckNumberFormat: vi, $ZodCheckOverwrite: Ni, $ZodCheckProperty: Pi, $ZodCheckRegex: Ii, $ZodCheckSizeEquals: yi, $ZodCheckStartsWith: Ai, $ZodCheckStringFormat: xe, $ZodCheckUpperCase: Si, $ZodCodec: at, $ZodCustom: Gs, $ZodCustomStringFormat: cs, $ZodDate: vs, $ZodDefault: js, $ZodDiscriminatedUnion: Zs, $ZodE164: is, $ZodEmail: Fi, $ZodEmoji: Mi, $ZodEncodeError: on, $ZodEnum: Ts, $ZodError: Mn, $ZodFile: Os, $ZodFunction: Bs, $ZodGUID: Ci, $ZodIPv4: Hi, $ZodIPv6: Qi, $ZodISODate: Yi, $ZodISODateTime: Ki, $ZodISODuration: Xi, $ZodISOTime: qi, $ZodIntersection: ks, $ZodJWT: us, $ZodKSUID: Gi, $ZodLazy: Ws, $ZodLiteral: As, $ZodMap: Es, $ZodNaN: Us, $ZodNanoID: Li, $ZodNever: _s, $ZodNonOptional: Cs, $ZodNull: ps, $ZodNullable: Ns, $ZodNumber: ot, $ZodNumberFormat: as, $ZodObject: ys, $ZodObjectJIT: ws, $ZodOptional: xs, $ZodPipe: Ms, $ZodPrefault: Ds, $ZodPromise: Js, $ZodReadonly: Ls, $ZodRealError: M, $ZodRecord: Is, $ZodRegistry: lt, $ZodSet: Ss, $ZodString: Ne, $ZodStringFormat: T, $ZodSuccess: Rs, $ZodSymbol: fs, $ZodTemplateLiteral: Vs, $ZodTransform: Ps, $ZodTuple: ct, $ZodType: z, $ZodULID: Ji, $ZodURL: Ui, $ZodUUID: Ri, $ZodUndefined: ds, $ZodUnion: ut, $ZodUnknown: ms, $ZodVoid: gs, $ZodXID: Wi, $brand: po, $constructor: a, $input: Ys, $output: Ks, Doc: ji, JSONSchema: Nl, JSONSchemaGenerator: Pn, NEVER: fo, TimePrecision: Hs, _any: $u, _array: Ou, _base64: St, _base64url: Tt, _bigint: du, _boolean: lu, _catch: Sl, _check: Du, _cidrv4: It, _cidrv6: Et, _coercedBigint: pu, _coercedBoolean: fu, _coercedDate: Zu, _coercedNumber: ou, _coercedString: Xs, _cuid: $t, _cuid2: bt, _custom: xu, _date: wu, _decode: Jn, _decodeAsync: Gn, _default: kl, _discriminatedUnion: pl, _e164: At, _email: dt, _emoji: gt, _encode: Bn, _encodeAsync: Wn, _endsWith: Rt, _enum: $l, _file: Pu, _float32: su, _float64: uu, _gt: se, _gte: U, _guid: qe, _includes: Dt, _int: iu, _int32: cu, _int64: hu, _intersection: hl, _ipv4: Zt, _ipv6: kt, _isoDate: eu, _isoDateTime: Qs, _isoDuration: tu, _isoTime: nu, _jwt: Ot, _ksuid: wt, _lazy: Pl, _length: pn, _literal: zl, _lowercase: Nt, _lt: ie, _lte: W, _map: gl, _max: W, _maxLength: dn, _maxSize: fn, _mime: Ft, _min: U, _minLength: ge, _minSize: we, _multipleOf: ye, _nan: ku, _nanoid: vt, _nativeEnum: bl, _negative: Eu, _never: zu, _nonnegative: Tu, _nonoptional: Il, _nonpositive: Su, _normalize: Ut, _null: vu, _nullable: Zl, _number: ru, _optional: wl, _overwrite: ce, _parse: Ee, _parseAsync: Se, _pipe: Tl, _positive: Iu, _promise: xl, _property: Au, _readonly: Al, _record: _l, _refine: Nu, _regex: xt, _safeDecode: Yn, _safeDecodeAsync: Xn, _safeEncode: Kn, _safeEncodeAsync: qn, _safeParse: Te, _safeParseAsync: Ae, _set: vl, _size: Pt, _startsWith: Ct, _string: qs, _stringFormat: je, _stringbool: Cu, _success: El, _superRefine: ju, _symbol: _u, _templateLiteral: Ol, _toLowerCase: Lt, _toUpperCase: Vt, _transform: yl, _trim: Mt, _tuple: ml, _uint32: au, _uint64: mu, _ulid: zt, _undefined: gu, _union: dl, _unknown: bu, _uppercase: jt, _url: ln, _uuid: pt, _uuidv4: ht, _uuidv6: mt, _uuidv7: _t, _void: yu, _xid: yt, clone: V, config: R, decode: ja, decodeAsync: Ca, encode: Na, encodeAsync: Da, flattenError: Ln, formatError: Vn, globalConfig: We, globalRegistry: te, isValidBase64: rt, isValidBase64URL: rs, isValidJWT: ss, locales: lo, parse: Tn, parseAsync: An, prettifyError: No, regexes: et, registry: ft, safeDecode: Fa, safeDecodeAsync: Ma, safeEncode: Ra, safeEncodeAsync: Ua, safeParse: jo, safeParseAsync: Do, toDotPath: xo, toJSONSchema: Ru, treeifyError: Po, util: Ao, version: Di }, Symbol.toStringTag, { value: "Module" })), Bt = /* @__PURE__ */ a("ZodISODateTime", (e, n) => {
  Ki.init(e, n), A.init(e, n);
});
function Fu(e) {
  return Qs(Bt, e);
}
const Jt = /* @__PURE__ */ a("ZodISODate", (e, n) => {
  Yi.init(e, n), A.init(e, n);
});
function Uu(e) {
  return eu(Jt, e);
}
const Wt = /* @__PURE__ */ a("ZodISOTime", (e, n) => {
  qi.init(e, n), A.init(e, n);
});
function Mu(e) {
  return nu(Wt, e);
}
const Gt = /* @__PURE__ */ a("ZodISODuration", (e, n) => {
  Xi.init(e, n), A.init(e, n);
});
function Lu(e) {
  return tu(Gt, e);
}
const Dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, ZodISODate: Jt, ZodISODateTime: Bt, ZodISODuration: Gt, ZodISOTime: Wt, date: Uu, datetime: Fu, duration: Lu, time: Mu }, Symbol.toStringTag, { value: "Module" })), Vu = (e, n) => {
  Mn.init(e, n), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (t) => Vn(e, t)
      // enumerable: false,
    },
    flatten: {
      value: (t) => Ln(e, t)
      // enumerable: false,
    },
    addIssue: {
      value: (t) => {
        e.issues.push(t), e.message = JSON.stringify(e.issues, Ge, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (t) => {
        e.issues.push(...t), e.message = JSON.stringify(e.issues, Ge, 2);
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
}, Cl = a("ZodError", Vu), L = a("ZodError", Vu, {
  Parent: Error
}), Bu = /* @__PURE__ */ Ee(L), Ju = /* @__PURE__ */ Se(L), Wu = /* @__PURE__ */ Te(L), Gu = /* @__PURE__ */ Ae(L), Ku = /* @__PURE__ */ Bn(L), Yu = /* @__PURE__ */ Jn(L), qu = /* @__PURE__ */ Wn(L), Xu = /* @__PURE__ */ Gn(L), Hu = /* @__PURE__ */ Kn(L), Qu = /* @__PURE__ */ Yn(L), ec = /* @__PURE__ */ qn(L), nc = /* @__PURE__ */ Xn(L), y = /* @__PURE__ */ a("ZodType", (e, n) => (z.init(e, n), e.def = n, e.type = n.type, Object.defineProperty(e, "_def", { value: n }), e.check = (...t) => e.clone(Y(n, {
  checks: [
    ...n.checks ?? [],
    ...t.map((r) => typeof r == "function" ? { _zod: { check: r, def: { check: "custom" }, onattach: [] } } : r)
  ]
})), e.clone = (t, r) => V(e, t, r), e.brand = () => e, e.register = ((t, r) => (t.add(e, r), e)), e.parse = (t, r) => Bu(e, t, r, { callee: e.parse }), e.safeParse = (t, r) => Wu(e, t, r), e.parseAsync = async (t, r) => Ju(e, t, r, { callee: e.parseAsync }), e.safeParseAsync = async (t, r) => Gu(e, t, r), e.spa = e.safeParseAsync, e.encode = (t, r) => Ku(e, t, r), e.decode = (t, r) => Yu(e, t, r), e.encodeAsync = async (t, r) => qu(e, t, r), e.decodeAsync = async (t, r) => Xu(e, t, r), e.safeEncode = (t, r) => Hu(e, t, r), e.safeDecode = (t, r) => Qu(e, t, r), e.safeEncodeAsync = async (t, r) => ec(e, t, r), e.safeDecodeAsync = async (t, r) => nc(e, t, r), e.refine = (t, r) => e.check(Mc(t, r)), e.superRefine = (t) => e.check(Lc(t)), e.overwrite = (t) => e.check(ce(t)), e.optional = () => He(e), e.nullable = () => Qe(e), e.nullish = () => He(Qe(e)), e.nonoptional = (t) => Tc(e, t), e.array = () => $n(e), e.or = (t) => mr([e, t]), e.and = (t) => mc(e, t), e.transform = (t) => en(e, vr(t)), e.default = (t) => Ic(e, t), e.prefault = (t) => Sc(e, t), e.catch = (t) => Pc(e, t), e.pipe = (t) => en(e, t), e.readonly = () => jc(e), e.describe = (t) => {
  const r = e.clone();
  return te.add(r, { description: t }), r;
}, Object.defineProperty(e, "description", {
  get() {
    return te.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...t) => {
  if (t.length === 0)
    return te.get(e);
  const r = e.clone();
  return te.add(r, t[0]), r;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), Kt = /* @__PURE__ */ a("_ZodString", (e, n) => {
  Ne.init(e, n), y.init(e, n);
  const t = e._zod.bag;
  e.format = t.format ?? null, e.minLength = t.minimum ?? null, e.maxLength = t.maximum ?? null, e.regex = (...r) => e.check(xt(...r)), e.includes = (...r) => e.check(Dt(...r)), e.startsWith = (...r) => e.check(Ct(...r)), e.endsWith = (...r) => e.check(Rt(...r)), e.min = (...r) => e.check(ge(...r)), e.max = (...r) => e.check(dn(...r)), e.length = (...r) => e.check(pn(...r)), e.nonempty = (...r) => e.check(ge(1, ...r)), e.lowercase = (r) => e.check(Nt(r)), e.uppercase = (r) => e.check(jt(r)), e.trim = () => e.check(Mt()), e.normalize = (...r) => e.check(Ut(...r)), e.toLowerCase = () => e.check(Lt()), e.toUpperCase = () => e.check(Vt());
}), hn = /* @__PURE__ */ a("ZodString", (e, n) => {
  Ne.init(e, n), Kt.init(e, n), e.email = (t) => e.check(dt(Yt, t)), e.url = (t) => e.check(ln(mn, t)), e.jwt = (t) => e.check(Ot(lr, t)), e.emoji = (t) => e.check(gt(qt, t)), e.guid = (t) => e.check(qe(Xe, t)), e.uuid = (t) => e.check(pt(K, t)), e.uuidv4 = (t) => e.check(ht(K, t)), e.uuidv6 = (t) => e.check(mt(K, t)), e.uuidv7 = (t) => e.check(_t(K, t)), e.nanoid = (t) => e.check(vt(Xt, t)), e.guid = (t) => e.check(qe(Xe, t)), e.cuid = (t) => e.check($t(Ht, t)), e.cuid2 = (t) => e.check(bt(Qt, t)), e.ulid = (t) => e.check(zt(er, t)), e.base64 = (t) => e.check(St(ur, t)), e.base64url = (t) => e.check(Tt(cr, t)), e.xid = (t) => e.check(yt(nr, t)), e.ksuid = (t) => e.check(wt(tr, t)), e.ipv4 = (t) => e.check(Zt(rr, t)), e.ipv6 = (t) => e.check(kt(or, t)), e.cidrv4 = (t) => e.check(It(ir, t)), e.cidrv6 = (t) => e.check(Et(sr, t)), e.e164 = (t) => e.check(At(ar, t)), e.datetime = (t) => e.check(Fu(t)), e.date = (t) => e.check(Uu(t)), e.time = (t) => e.check(Mu(t)), e.duration = (t) => e.check(Lu(t));
});
function xn(e) {
  return qs(hn, e);
}
const A = /* @__PURE__ */ a("ZodStringFormat", (e, n) => {
  T.init(e, n), Kt.init(e, n);
}), Yt = /* @__PURE__ */ a("ZodEmail", (e, n) => {
  Fi.init(e, n), A.init(e, n);
});
function Rl(e) {
  return dt(Yt, e);
}
const Xe = /* @__PURE__ */ a("ZodGUID", (e, n) => {
  Ci.init(e, n), A.init(e, n);
});
function Fl(e) {
  return qe(Xe, e);
}
const K = /* @__PURE__ */ a("ZodUUID", (e, n) => {
  Ri.init(e, n), A.init(e, n);
});
function Ul(e) {
  return pt(K, e);
}
function Ml(e) {
  return ht(K, e);
}
function Ll(e) {
  return mt(K, e);
}
function Vl(e) {
  return _t(K, e);
}
const mn = /* @__PURE__ */ a("ZodURL", (e, n) => {
  Ui.init(e, n), A.init(e, n);
});
function Bl(e) {
  return ln(mn, e);
}
function Jl(e) {
  return ln(mn, {
    protocol: /^https?$/,
    hostname: Qo,
    ...h(e)
  });
}
const qt = /* @__PURE__ */ a("ZodEmoji", (e, n) => {
  Mi.init(e, n), A.init(e, n);
});
function Wl(e) {
  return gt(qt, e);
}
const Xt = /* @__PURE__ */ a("ZodNanoID", (e, n) => {
  Li.init(e, n), A.init(e, n);
});
function Gl(e) {
  return vt(Xt, e);
}
const Ht = /* @__PURE__ */ a("ZodCUID", (e, n) => {
  Vi.init(e, n), A.init(e, n);
});
function Kl(e) {
  return $t(Ht, e);
}
const Qt = /* @__PURE__ */ a("ZodCUID2", (e, n) => {
  Bi.init(e, n), A.init(e, n);
});
function Yl(e) {
  return bt(Qt, e);
}
const er = /* @__PURE__ */ a("ZodULID", (e, n) => {
  Ji.init(e, n), A.init(e, n);
});
function ql(e) {
  return zt(er, e);
}
const nr = /* @__PURE__ */ a("ZodXID", (e, n) => {
  Wi.init(e, n), A.init(e, n);
});
function Xl(e) {
  return yt(nr, e);
}
const tr = /* @__PURE__ */ a("ZodKSUID", (e, n) => {
  Gi.init(e, n), A.init(e, n);
});
function Hl(e) {
  return wt(tr, e);
}
const rr = /* @__PURE__ */ a("ZodIPv4", (e, n) => {
  Hi.init(e, n), A.init(e, n);
});
function Ql(e) {
  return Zt(rr, e);
}
const or = /* @__PURE__ */ a("ZodIPv6", (e, n) => {
  Qi.init(e, n), A.init(e, n);
});
function ef(e) {
  return kt(or, e);
}
const ir = /* @__PURE__ */ a("ZodCIDRv4", (e, n) => {
  es.init(e, n), A.init(e, n);
});
function nf(e) {
  return It(ir, e);
}
const sr = /* @__PURE__ */ a("ZodCIDRv6", (e, n) => {
  ns.init(e, n), A.init(e, n);
});
function tf(e) {
  return Et(sr, e);
}
const ur = /* @__PURE__ */ a("ZodBase64", (e, n) => {
  ts.init(e, n), A.init(e, n);
});
function rf(e) {
  return St(ur, e);
}
const cr = /* @__PURE__ */ a("ZodBase64URL", (e, n) => {
  os.init(e, n), A.init(e, n);
});
function of(e) {
  return Tt(cr, e);
}
const ar = /* @__PURE__ */ a("ZodE164", (e, n) => {
  is.init(e, n), A.init(e, n);
});
function sf(e) {
  return At(ar, e);
}
const lr = /* @__PURE__ */ a("ZodJWT", (e, n) => {
  us.init(e, n), A.init(e, n);
});
function uf(e) {
  return Ot(lr, e);
}
const De = /* @__PURE__ */ a("ZodCustomStringFormat", (e, n) => {
  cs.init(e, n), A.init(e, n);
});
function cf(e, n, t = {}) {
  return je(De, e, n, t);
}
function af(e) {
  return je(De, "hostname", Qn, e);
}
function lf(e) {
  return je(De, "hex", mi, e);
}
function ff(e, n) {
  const t = n?.enc ?? "hex", r = `${e}_${t}`, o = et[r];
  if (!o)
    throw new Error(`Unrecognized hash format: ${r}`);
  return je(De, r, o, n);
}
const _n = /* @__PURE__ */ a("ZodNumber", (e, n) => {
  ot.init(e, n), y.init(e, n), e.gt = (r, o) => e.check(se(r, o)), e.gte = (r, o) => e.check(U(r, o)), e.min = (r, o) => e.check(U(r, o)), e.lt = (r, o) => e.check(ie(r, o)), e.lte = (r, o) => e.check(W(r, o)), e.max = (r, o) => e.check(W(r, o)), e.int = (r) => e.check(Nn(r)), e.safe = (r) => e.check(Nn(r)), e.positive = (r) => e.check(se(0, r)), e.nonnegative = (r) => e.check(U(0, r)), e.negative = (r) => e.check(ie(0, r)), e.nonpositive = (r) => e.check(W(0, r)), e.multipleOf = (r, o) => e.check(ye(r, o)), e.step = (r, o) => e.check(ye(r, o)), e.finite = () => e;
  const t = e._zod.bag;
  e.minValue = Math.max(t.minimum ?? Number.NEGATIVE_INFINITY, t.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(t.maximum ?? Number.POSITIVE_INFINITY, t.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (t.format ?? "").includes("int") || Number.isSafeInteger(t.multipleOf ?? 0.5), e.isFinite = !0, e.format = t.format ?? null;
});
function tc(e) {
  return ru(_n, e);
}
const be = /* @__PURE__ */ a("ZodNumberFormat", (e, n) => {
  as.init(e, n), _n.init(e, n);
});
function Nn(e) {
  return iu(be, e);
}
function df(e) {
  return su(be, e);
}
function pf(e) {
  return uu(be, e);
}
function hf(e) {
  return cu(be, e);
}
function mf(e) {
  return au(be, e);
}
const gn = /* @__PURE__ */ a("ZodBoolean", (e, n) => {
  it.init(e, n), y.init(e, n);
});
function rc(e) {
  return lu(gn, e);
}
const vn = /* @__PURE__ */ a("ZodBigInt", (e, n) => {
  st.init(e, n), y.init(e, n), e.gte = (r, o) => e.check(U(r, o)), e.min = (r, o) => e.check(U(r, o)), e.gt = (r, o) => e.check(se(r, o)), e.gte = (r, o) => e.check(U(r, o)), e.min = (r, o) => e.check(U(r, o)), e.lt = (r, o) => e.check(ie(r, o)), e.lte = (r, o) => e.check(W(r, o)), e.max = (r, o) => e.check(W(r, o)), e.positive = (r) => e.check(se(BigInt(0), r)), e.negative = (r) => e.check(ie(BigInt(0), r)), e.nonpositive = (r) => e.check(W(BigInt(0), r)), e.nonnegative = (r) => e.check(U(BigInt(0), r)), e.multipleOf = (r, o) => e.check(ye(r, o));
  const t = e._zod.bag;
  e.minValue = t.minimum ?? null, e.maxValue = t.maximum ?? null, e.format = t.format ?? null;
});
function _f(e) {
  return du(vn, e);
}
const fr = /* @__PURE__ */ a("ZodBigIntFormat", (e, n) => {
  ls.init(e, n), vn.init(e, n);
});
function gf(e) {
  return hu(fr, e);
}
function vf(e) {
  return mu(fr, e);
}
const oc = /* @__PURE__ */ a("ZodSymbol", (e, n) => {
  fs.init(e, n), y.init(e, n);
});
function $f(e) {
  return _u(oc, e);
}
const ic = /* @__PURE__ */ a("ZodUndefined", (e, n) => {
  ds.init(e, n), y.init(e, n);
});
function bf(e) {
  return gu(ic, e);
}
const sc = /* @__PURE__ */ a("ZodNull", (e, n) => {
  ps.init(e, n), y.init(e, n);
});
function uc(e) {
  return vu(sc, e);
}
const cc = /* @__PURE__ */ a("ZodAny", (e, n) => {
  hs.init(e, n), y.init(e, n);
});
function zf() {
  return $u(cc);
}
const ac = /* @__PURE__ */ a("ZodUnknown", (e, n) => {
  ms.init(e, n), y.init(e, n);
});
function ve() {
  return bu(ac);
}
const lc = /* @__PURE__ */ a("ZodNever", (e, n) => {
  _s.init(e, n), y.init(e, n);
});
function dr(e) {
  return zu(lc, e);
}
const fc = /* @__PURE__ */ a("ZodVoid", (e, n) => {
  gs.init(e, n), y.init(e, n);
});
function yf(e) {
  return yu(fc, e);
}
const pr = /* @__PURE__ */ a("ZodDate", (e, n) => {
  vs.init(e, n), y.init(e, n), e.min = (r, o) => e.check(U(r, o)), e.max = (r, o) => e.check(W(r, o));
  const t = e._zod.bag;
  e.minDate = t.minimum ? new Date(t.minimum) : null, e.maxDate = t.maximum ? new Date(t.maximum) : null;
});
function wf(e) {
  return wu(pr, e);
}
const dc = /* @__PURE__ */ a("ZodArray", (e, n) => {
  $s.init(e, n), y.init(e, n), e.element = n.element, e.min = (t, r) => e.check(ge(t, r)), e.nonempty = (t) => e.check(ge(1, t)), e.max = (t, r) => e.check(dn(t, r)), e.length = (t, r) => e.check(pn(t, r)), e.unwrap = () => e.element;
});
function $n(e, n) {
  return Ou(dc, e, n);
}
function Zf(e) {
  const n = e._zod.def.shape;
  return gr(Object.keys(n));
}
const bn = /* @__PURE__ */ a("ZodObject", (e, n) => {
  ws.init(e, n), y.init(e, n), Z(e, "shape", () => n.shape), e.keyof = () => gr(Object.keys(e._zod.def.shape)), e.catchall = (t) => e.clone({ ...e._zod.def, catchall: t }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: ve() }), e.loose = () => e.clone({ ...e._zod.def, catchall: ve() }), e.strict = () => e.clone({ ...e._zod.def, catchall: dr() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (t) => wo(e, t), e.safeExtend = (t) => Zo(e, t), e.merge = (t) => ko(e, t), e.pick = (t) => zo(e, t), e.omit = (t) => yo(e, t), e.partial = (...t) => Io($r, e, t[0]), e.required = (...t) => Eo(br, e, t[0]);
});
function kf(e, n) {
  const t = {
    type: "object",
    shape: e ?? {},
    ...h(n)
  };
  return new bn(t);
}
function If(e, n) {
  return new bn({
    type: "object",
    shape: e,
    catchall: dr(),
    ...h(n)
  });
}
function Ef(e, n) {
  return new bn({
    type: "object",
    shape: e,
    catchall: ve(),
    ...h(n)
  });
}
const hr = /* @__PURE__ */ a("ZodUnion", (e, n) => {
  ut.init(e, n), y.init(e, n), e.options = n.options;
});
function mr(e, n) {
  return new hr({
    type: "union",
    options: e,
    ...h(n)
  });
}
const pc = /* @__PURE__ */ a("ZodDiscriminatedUnion", (e, n) => {
  hr.init(e, n), Zs.init(e, n);
});
function Sf(e, n, t) {
  return new pc({
    type: "union",
    options: n,
    discriminator: e,
    ...h(t)
  });
}
const hc = /* @__PURE__ */ a("ZodIntersection", (e, n) => {
  ks.init(e, n), y.init(e, n);
});
function mc(e, n) {
  return new hc({
    type: "intersection",
    left: e,
    right: n
  });
}
const _c = /* @__PURE__ */ a("ZodTuple", (e, n) => {
  ct.init(e, n), y.init(e, n), e.rest = (t) => e.clone({
    ...e._zod.def,
    rest: t
  });
});
function gc(e, n, t) {
  const r = n instanceof z, o = r ? t : n, i = r ? n : null;
  return new _c({
    type: "tuple",
    items: e,
    rest: i,
    ...h(o)
  });
}
const _r = /* @__PURE__ */ a("ZodRecord", (e, n) => {
  Is.init(e, n), y.init(e, n), e.keyType = n.keyType, e.valueType = n.valueType;
});
function vc(e, n, t) {
  return new _r({
    type: "record",
    keyType: e,
    valueType: n,
    ...h(t)
  });
}
function Tf(e, n, t) {
  const r = V(e);
  return r._zod.values = void 0, new _r({
    type: "record",
    keyType: r,
    valueType: n,
    ...h(t)
  });
}
const $c = /* @__PURE__ */ a("ZodMap", (e, n) => {
  Es.init(e, n), y.init(e, n), e.keyType = n.keyType, e.valueType = n.valueType;
});
function Af(e, n, t) {
  return new $c({
    type: "map",
    keyType: e,
    valueType: n,
    ...h(t)
  });
}
const bc = /* @__PURE__ */ a("ZodSet", (e, n) => {
  Ss.init(e, n), y.init(e, n), e.min = (...t) => e.check(we(...t)), e.nonempty = (t) => e.check(we(1, t)), e.max = (...t) => e.check(fn(...t)), e.size = (...t) => e.check(Pt(...t));
});
function Of(e, n) {
  return new bc({
    type: "set",
    valueType: e,
    ...h(n)
  });
}
const Ze = /* @__PURE__ */ a("ZodEnum", (e, n) => {
  Ts.init(e, n), y.init(e, n), e.enum = n.entries, e.options = Object.values(n.entries);
  const t = new Set(Object.keys(n.entries));
  e.extract = (r, o) => {
    const i = {};
    for (const s of r)
      if (t.has(s))
        i[s] = n.entries[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new Ze({
      ...n,
      checks: [],
      ...h(o),
      entries: i
    });
  }, e.exclude = (r, o) => {
    const i = { ...n.entries };
    for (const s of r)
      if (t.has(s))
        delete i[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new Ze({
      ...n,
      checks: [],
      ...h(o),
      entries: i
    });
  };
});
function gr(e, n) {
  const t = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
  return new Ze({
    type: "enum",
    entries: t,
    ...h(n)
  });
}
function Pf(e, n) {
  return new Ze({
    type: "enum",
    entries: e,
    ...h(n)
  });
}
const zc = /* @__PURE__ */ a("ZodLiteral", (e, n) => {
  As.init(e, n), y.init(e, n), e.values = new Set(n.values), Object.defineProperty(e, "value", {
    get() {
      if (n.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return n.values[0];
    }
  });
});
function xf(e, n) {
  return new zc({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...h(n)
  });
}
const yc = /* @__PURE__ */ a("ZodFile", (e, n) => {
  Os.init(e, n), y.init(e, n), e.min = (t, r) => e.check(we(t, r)), e.max = (t, r) => e.check(fn(t, r)), e.mime = (t, r) => e.check(Ft(Array.isArray(t) ? t : [t], r));
});
function Nf(e) {
  return Pu(yc, e);
}
const wc = /* @__PURE__ */ a("ZodTransform", (e, n) => {
  Ps.init(e, n), y.init(e, n), e._zod.parse = (t, r) => {
    if (r.direction === "backward")
      throw new on(e.constructor.name);
    t.addIssue = (i) => {
      if (typeof i == "string")
        t.issues.push(me(i, t.value, n));
      else {
        const s = i;
        s.fatal && (s.continue = !1), s.code ?? (s.code = "custom"), s.input ?? (s.input = t.value), s.inst ?? (s.inst = e), t.issues.push(me(s));
      }
    };
    const o = n.transform(t.value, t);
    return o instanceof Promise ? o.then((i) => (t.value = i, t)) : (t.value = o, t);
  };
});
function vr(e) {
  return new wc({
    type: "transform",
    transform: e
  });
}
const $r = /* @__PURE__ */ a("ZodOptional", (e, n) => {
  xs.init(e, n), y.init(e, n), e.unwrap = () => e._zod.def.innerType;
});
function He(e) {
  return new $r({
    type: "optional",
    innerType: e
  });
}
const Zc = /* @__PURE__ */ a("ZodNullable", (e, n) => {
  Ns.init(e, n), y.init(e, n), e.unwrap = () => e._zod.def.innerType;
});
function Qe(e) {
  return new Zc({
    type: "nullable",
    innerType: e
  });
}
function jf(e) {
  return He(Qe(e));
}
const kc = /* @__PURE__ */ a("ZodDefault", (e, n) => {
  js.init(e, n), y.init(e, n), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Ic(e, n) {
  return new kc({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof n == "function" ? n() : un(n);
    }
  });
}
const Ec = /* @__PURE__ */ a("ZodPrefault", (e, n) => {
  Ds.init(e, n), y.init(e, n), e.unwrap = () => e._zod.def.innerType;
});
function Sc(e, n) {
  return new Ec({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof n == "function" ? n() : un(n);
    }
  });
}
const br = /* @__PURE__ */ a("ZodNonOptional", (e, n) => {
  Cs.init(e, n), y.init(e, n), e.unwrap = () => e._zod.def.innerType;
});
function Tc(e, n) {
  return new br({
    type: "nonoptional",
    innerType: e,
    ...h(n)
  });
}
const Ac = /* @__PURE__ */ a("ZodSuccess", (e, n) => {
  Rs.init(e, n), y.init(e, n), e.unwrap = () => e._zod.def.innerType;
});
function Df(e) {
  return new Ac({
    type: "success",
    innerType: e
  });
}
const Oc = /* @__PURE__ */ a("ZodCatch", (e, n) => {
  Fs.init(e, n), y.init(e, n), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Pc(e, n) {
  return new Oc({
    type: "catch",
    innerType: e,
    catchValue: typeof n == "function" ? n : () => n
  });
}
const xc = /* @__PURE__ */ a("ZodNaN", (e, n) => {
  Us.init(e, n), y.init(e, n);
});
function Cf(e) {
  return ku(xc, e);
}
const zr = /* @__PURE__ */ a("ZodPipe", (e, n) => {
  Ms.init(e, n), y.init(e, n), e.in = n.in, e.out = n.out;
});
function en(e, n) {
  return new zr({
    type: "pipe",
    in: e,
    out: n
    // ...util.normalizeParams(params),
  });
}
const yr = /* @__PURE__ */ a("ZodCodec", (e, n) => {
  zr.init(e, n), at.init(e, n);
});
function Rf(e, n, t) {
  return new yr({
    type: "pipe",
    in: e,
    out: n,
    transform: t.decode,
    reverseTransform: t.encode
  });
}
const Nc = /* @__PURE__ */ a("ZodReadonly", (e, n) => {
  Ls.init(e, n), y.init(e, n), e.unwrap = () => e._zod.def.innerType;
});
function jc(e) {
  return new Nc({
    type: "readonly",
    innerType: e
  });
}
const Dc = /* @__PURE__ */ a("ZodTemplateLiteral", (e, n) => {
  Vs.init(e, n), y.init(e, n);
});
function Ff(e, n) {
  return new Dc({
    type: "template_literal",
    parts: e,
    ...h(n)
  });
}
const Cc = /* @__PURE__ */ a("ZodLazy", (e, n) => {
  Ws.init(e, n), y.init(e, n), e.unwrap = () => e._zod.def.getter();
});
function Rc(e) {
  return new Cc({
    type: "lazy",
    getter: e
  });
}
const Fc = /* @__PURE__ */ a("ZodPromise", (e, n) => {
  Js.init(e, n), y.init(e, n), e.unwrap = () => e._zod.def.innerType;
});
function Uf(e) {
  return new Fc({
    type: "promise",
    innerType: e
  });
}
const Uc = /* @__PURE__ */ a("ZodFunction", (e, n) => {
  Bs.init(e, n), y.init(e, n);
});
function Lr(e) {
  return new Uc({
    type: "function",
    input: Array.isArray(e?.input) ? gc(e?.input) : e?.input ?? $n(ve()),
    output: e?.output ?? ve()
  });
}
const zn = /* @__PURE__ */ a("ZodCustom", (e, n) => {
  Gs.init(e, n), y.init(e, n);
});
function Mf(e) {
  const n = new N({
    check: "custom"
    // ...util.normalizeParams(params),
  });
  return n._zod.check = e, n;
}
function Lf(e, n) {
  return xu(zn, e ?? (() => !0), n);
}
function Mc(e, n = {}) {
  return Nu(zn, e, n);
}
function Lc(e) {
  return ju(e);
}
function Vf(e, n = {
  error: `Input not instance of ${e.name}`
}) {
  const t = new zn({
    type: "custom",
    check: "custom",
    fn: (r) => r instanceof e,
    abort: !0,
    ...h(n)
  });
  return t._zod.bag.Class = e, t;
}
const Bf = (...e) => Cu({
  Codec: yr,
  Boolean: gn,
  String: hn
}, ...e);
function Jf(e) {
  const n = Rc(() => mr([xn(e), tc(), rc(), uc(), $n(n), vc(xn(), n)]));
  return n;
}
function Wf(e, n) {
  return en(vr(e), n);
}
const Gf = {
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
function Kf(e) {
  R({
    customError: e
  });
}
function Yf() {
  return R().customError;
}
var jn;
jn || (jn = {});
function qf(e) {
  return Xs(hn, e);
}
function Xf(e) {
  return ou(_n, e);
}
function Hf(e) {
  return fu(gn, e);
}
function Qf(e) {
  return pu(vn, e);
}
function ed(e) {
  return Zu(pr, e);
}
const nd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, bigint: Qf, boolean: Hf, date: ed, number: Xf, string: qf }, Symbol.toStringTag, { value: "Module" }));
R(pa());
const y_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, $brand: po, $input: Ys, $output: Ks, NEVER: fo, TimePrecision: Hs, ZodAny: cc, ZodArray: dc, ZodBase64: ur, ZodBase64URL: cr, ZodBigInt: vn, ZodBigIntFormat: fr, ZodBoolean: gn, ZodCIDRv4: ir, ZodCIDRv6: sr, ZodCUID: Ht, ZodCUID2: Qt, ZodCatch: Oc, ZodCodec: yr, ZodCustom: zn, ZodCustomStringFormat: De, ZodDate: pr, ZodDefault: kc, ZodDiscriminatedUnion: pc, ZodE164: ar, ZodEmail: Yt, ZodEmoji: qt, ZodEnum: Ze, ZodError: Cl, ZodFile: yc, get ZodFirstPartyTypeKind() {
  return jn;
}, ZodFunction: Uc, ZodGUID: Xe, ZodIPv4: rr, ZodIPv6: or, ZodISODate: Jt, ZodISODateTime: Bt, ZodISODuration: Gt, ZodISOTime: Wt, ZodIntersection: hc, ZodIssueCode: Gf, ZodJWT: lr, ZodKSUID: tr, ZodLazy: Cc, ZodLiteral: zc, ZodMap: $c, ZodNaN: xc, ZodNanoID: Xt, ZodNever: lc, ZodNonOptional: br, ZodNull: sc, ZodNullable: Zc, ZodNumber: _n, ZodNumberFormat: be, ZodObject: bn, ZodOptional: $r, ZodPipe: zr, ZodPrefault: Ec, ZodPromise: Fc, ZodReadonly: Nc, ZodRealError: L, ZodRecord: _r, ZodSet: bc, ZodString: hn, ZodStringFormat: A, ZodSuccess: Ac, ZodSymbol: oc, ZodTemplateLiteral: Dc, ZodTransform: wc, ZodTuple: _c, ZodType: y, ZodULID: er, ZodURL: mn, ZodUUID: K, ZodUndefined: ic, ZodUnion: hr, ZodUnknown: ac, ZodVoid: fc, ZodXID: nr, _ZodString: Kt, _default: Ic, _function: Lr, any: zf, array: $n, base64: rf, base64url: of, bigint: _f, boolean: rc, catch: Pc, check: Mf, cidrv4: nf, cidrv6: tf, clone: V, codec: Rf, coerce: nd, config: R, core: jl, cuid: Kl, cuid2: Yl, custom: Lf, date: wf, decode: Yu, decodeAsync: Xu, discriminatedUnion: Sf, e164: sf, email: Rl, emoji: Wl, encode: Ku, encodeAsync: qu, endsWith: Rt, enum: gr, file: Nf, flattenError: Ln, float32: df, float64: pf, formatError: Vn, function: Lr, getErrorMap: Yf, globalRegistry: te, gt: se, gte: U, guid: Fl, hash: ff, hex: lf, hostname: af, httpUrl: Jl, includes: Dt, instanceof: Vf, int: Nn, int32: hf, int64: gf, intersection: mc, ipv4: Ql, ipv6: ef, iso: Dl, json: Jf, jwt: uf, keyof: Zf, ksuid: Hl, lazy: Rc, length: pn, literal: xf, locales: lo, looseObject: Ef, lowercase: Nt, lt: ie, lte: W, map: Af, maxLength: dn, maxSize: fn, mime: Ft, minLength: ge, minSize: we, multipleOf: ye, nan: Cf, nanoid: Gl, nativeEnum: Pf, negative: Eu, never: dr, nonnegative: Tu, nonoptional: Tc, nonpositive: Su, normalize: Ut, null: uc, nullable: Qe, nullish: jf, number: tc, object: kf, optional: He, overwrite: ce, parse: Bu, parseAsync: Ju, partialRecord: Tf, pipe: en, positive: Iu, prefault: Sc, preprocess: Wf, prettifyError: No, promise: Uf, property: Au, readonly: jc, record: vc, refine: Mc, regex: xt, regexes: et, registry: ft, safeDecode: Qu, safeDecodeAsync: nc, safeEncode: Hu, safeEncodeAsync: ec, safeParse: Wu, safeParseAsync: Gu, set: Of, setErrorMap: Kf, size: Pt, startsWith: Ct, strictObject: If, string: xn, stringFormat: cf, stringbool: Bf, success: Df, superRefine: Lc, symbol: $f, templateLiteral: Ff, toJSONSchema: Ru, toLowerCase: Lt, toUpperCase: Vt, transform: vr, treeifyError: Po, trim: Mt, tuple: gc, uint32: mf, uint64: vf, ulid: ql, undefined: bf, union: mr, unknown: ve, uppercase: jt, url: Bl, util: Ao, uuid: Ul, uuidv4: Ml, uuidv6: Ll, uuidv7: Vl, void: yf, xid: Xl }, Symbol.toStringTag, { value: "Module" }));
function p(e, n, t) {
  function r(u, c) {
    var l;
    Object.defineProperty(u, "_zod", {
      value: u._zod ?? {},
      enumerable: !1
    }), (l = u._zod).traits ?? (l.traits = /* @__PURE__ */ new Set()), u._zod.traits.add(e), n(u, c);
    for (const d in s.prototype)
      d in u || Object.defineProperty(u, d, { value: s.prototype[d].bind(u) });
    u._zod.constr = s, u._zod.def = c;
  }
  const o = t?.Parent ?? Object;
  class i extends o {
  }
  Object.defineProperty(i, "name", { value: e });
  function s(u) {
    var c;
    const l = t?.Parent ? new i() : this;
    r(l, u), (c = l._zod).deferred ?? (c.deferred = []);
    for (const d of l._zod.deferred)
      d();
    return l;
  }
  return Object.defineProperty(s, "init", { value: r }), Object.defineProperty(s, Symbol.hasInstance, {
    value: (u) => t?.Parent && u instanceof t.Parent ? !0 : u?._zod?.traits?.has(e)
  }), Object.defineProperty(s, "name", { value: e }), s;
}
class pe extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Vc extends Error {
  constructor(n) {
    super(`Encountered unidirectional transform during encode: ${n}`), this.name = "ZodEncodeError";
  }
}
const Bc = {};
function X(e) {
  return Bc;
}
function td(e) {
  const n = Object.values(e).filter((r) => typeof r == "number");
  return Object.entries(e).filter(([r, o]) => n.indexOf(+r) === -1).map(([r, o]) => o);
}
function Dn(e, n) {
  return typeof n == "bigint" ? n.toString() : n;
}
function wr(e) {
  return {
    get value() {
      {
        const n = e();
        return Object.defineProperty(this, "value", { value: n }), n;
      }
    }
  };
}
function Zr(e) {
  return e == null;
}
function kr(e) {
  const n = e.startsWith("^") ? 1 : 0, t = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(n, t);
}
function rd(e, n) {
  const t = (e.toString().split(".")[1] || "").length, r = n.toString();
  let o = (r.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(r)) {
    const c = r.match(/\d?e-(\d?)/);
    c?.[1] && (o = Number.parseInt(c[1]));
  }
  const i = t > o ? t : o, s = Number.parseInt(e.toFixed(i).replace(".", "")), u = Number.parseInt(n.toFixed(i).replace(".", ""));
  return s % u / 10 ** i;
}
const Vr = Symbol("evaluating");
function S(e, n, t) {
  let r;
  Object.defineProperty(e, n, {
    get() {
      if (r !== Vr)
        return r === void 0 && (r = Vr, r = t()), r;
    },
    set(o) {
      Object.defineProperty(e, n, {
        value: o
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function ae(e, n, t) {
  Object.defineProperty(e, n, {
    value: t,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function le(...e) {
  const n = {};
  for (const t of e) {
    const r = Object.getOwnPropertyDescriptors(t);
    Object.assign(n, r);
  }
  return Object.defineProperties({}, n);
}
function Br(e) {
  return JSON.stringify(e);
}
const Jc = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function nn(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const od = wr(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function $e(e) {
  if (nn(e) === !1)
    return !1;
  const n = e.constructor;
  if (n === void 0)
    return !0;
  const t = n.prototype;
  return !(nn(t) === !1 || Object.prototype.hasOwnProperty.call(t, "isPrototypeOf") === !1);
}
function Wc(e) {
  return $e(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const id = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function yn(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ee(e, n, t) {
  const r = new e._zod.constr(n ?? e._zod.def);
  return (!n || t?.parent) && (r._zod.parent = e), r;
}
function b(e) {
  const n = e;
  if (!n)
    return {};
  if (typeof n == "string")
    return { error: () => n };
  if (n?.message !== void 0) {
    if (n?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    n.error = n.message;
  }
  return delete n.message, typeof n.error == "string" ? { ...n, error: () => n.error } : n;
}
function sd(e) {
  return Object.keys(e).filter((n) => e[n]._zod.optin === "optional" && e[n]._zod.optout === "optional");
}
const ud = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function cd(e, n) {
  const t = e._zod.def, r = le(e._zod.def, {
    get shape() {
      const o = {};
      for (const i in n) {
        if (!(i in t.shape))
          throw new Error(`Unrecognized key: "${i}"`);
        n[i] && (o[i] = t.shape[i]);
      }
      return ae(this, "shape", o), o;
    },
    checks: []
  });
  return ee(e, r);
}
function ad(e, n) {
  const t = e._zod.def, r = le(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape };
      for (const i in n) {
        if (!(i in t.shape))
          throw new Error(`Unrecognized key: "${i}"`);
        n[i] && delete o[i];
      }
      return ae(this, "shape", o), o;
    },
    checks: []
  });
  return ee(e, r);
}
function ld(e, n) {
  if (!$e(n))
    throw new Error("Invalid input to extend: expected a plain object");
  const t = e._zod.def.checks;
  if (t && t.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const o = le(e._zod.def, {
    get shape() {
      const i = { ...e._zod.def.shape, ...n };
      return ae(this, "shape", i), i;
    },
    checks: []
  });
  return ee(e, o);
}
function fd(e, n) {
  if (!$e(n))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const t = {
    ...e._zod.def,
    get shape() {
      const r = { ...e._zod.def.shape, ...n };
      return ae(this, "shape", r), r;
    },
    checks: e._zod.def.checks
  };
  return ee(e, t);
}
function dd(e, n) {
  const t = le(e._zod.def, {
    get shape() {
      const r = { ...e._zod.def.shape, ...n._zod.def.shape };
      return ae(this, "shape", r), r;
    },
    get catchall() {
      return n._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return ee(e, t);
}
function pd(e, n, t) {
  const r = le(n._zod.def, {
    get shape() {
      const o = n._zod.def.shape, i = { ...o };
      if (t)
        for (const s in t) {
          if (!(s in o))
            throw new Error(`Unrecognized key: "${s}"`);
          t[s] && (i[s] = e ? new e({
            type: "optional",
            innerType: o[s]
          }) : o[s]);
        }
      else
        for (const s in o)
          i[s] = e ? new e({
            type: "optional",
            innerType: o[s]
          }) : o[s];
      return ae(this, "shape", i), i;
    },
    checks: []
  });
  return ee(n, r);
}
function hd(e, n, t) {
  const r = le(n._zod.def, {
    get shape() {
      const o = n._zod.def.shape, i = { ...o };
      if (t)
        for (const s in t) {
          if (!(s in i))
            throw new Error(`Unrecognized key: "${s}"`);
          t[s] && (i[s] = new e({
            type: "nonoptional",
            innerType: o[s]
          }));
        }
      else
        for (const s in o)
          i[s] = new e({
            type: "nonoptional",
            innerType: o[s]
          });
      return ae(this, "shape", i), i;
    },
    checks: []
  });
  return ee(n, r);
}
function fe(e, n = 0) {
  if (e.aborted === !0)
    return !0;
  for (let t = n; t < e.issues.length; t++)
    if (e.issues[t]?.continue !== !0)
      return !0;
  return !1;
}
function de(e, n) {
  return n.map((t) => {
    var r;
    return (r = t).path ?? (r.path = []), t.path.unshift(e), t;
  });
}
function Le(e) {
  return typeof e == "string" ? e : e?.message;
}
function H(e, n, t) {
  const r = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const o = Le(e.inst?._zod.def?.error?.(e)) ?? Le(n?.error?.(e)) ?? Le(t.customError?.(e)) ?? Le(t.localeError?.(e)) ?? "Invalid input";
    r.message = o;
  }
  return delete r.inst, delete r.continue, n?.reportInput || delete r.input, r;
}
function Ir(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function ke(...e) {
  const [n, t, r] = e;
  return typeof n == "string" ? {
    message: n,
    code: "custom",
    input: t,
    inst: r
  } : { ...n };
}
const Gc = (e, n) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: n,
    enumerable: !1
  }), e.message = JSON.stringify(n, Dn, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, Kc = p("$ZodError", Gc), Yc = p("$ZodError", Gc, { Parent: Error });
function md(e, n = (t) => t.message) {
  const t = {}, r = [];
  for (const o of e.issues)
    o.path.length > 0 ? (t[o.path[0]] = t[o.path[0]] || [], t[o.path[0]].push(n(o))) : r.push(n(o));
  return { formErrors: r, fieldErrors: t };
}
function _d(e, n = (t) => t.message) {
  const t = { _errors: [] }, r = (o) => {
    for (const i of o.issues)
      if (i.code === "invalid_union" && i.errors.length)
        i.errors.map((s) => r({ issues: s }));
      else if (i.code === "invalid_key")
        r({ issues: i.issues });
      else if (i.code === "invalid_element")
        r({ issues: i.issues });
      else if (i.path.length === 0)
        t._errors.push(n(i));
      else {
        let s = t, u = 0;
        for (; u < i.path.length; ) {
          const c = i.path[u];
          u === i.path.length - 1 ? (s[c] = s[c] || { _errors: [] }, s[c]._errors.push(n(i))) : s[c] = s[c] || { _errors: [] }, s = s[c], u++;
        }
      }
  };
  return r(e), t;
}
const Er = (e) => (n, t, r, o) => {
  const i = r ? Object.assign(r, { async: !1 }) : { async: !1 }, s = n._zod.run({ value: t, issues: [] }, i);
  if (s instanceof Promise)
    throw new pe();
  if (s.issues.length) {
    const u = new (o?.Err ?? e)(s.issues.map((c) => H(c, i, X())));
    throw Jc(u, o?.callee), u;
  }
  return s.value;
}, Sr = (e) => async (n, t, r, o) => {
  const i = r ? Object.assign(r, { async: !0 }) : { async: !0 };
  let s = n._zod.run({ value: t, issues: [] }, i);
  if (s instanceof Promise && (s = await s), s.issues.length) {
    const u = new (o?.Err ?? e)(s.issues.map((c) => H(c, i, X())));
    throw Jc(u, o?.callee), u;
  }
  return s.value;
}, wn = (e) => (n, t, r) => {
  const o = r ? { ...r, async: !1 } : { async: !1 }, i = n._zod.run({ value: t, issues: [] }, o);
  if (i instanceof Promise)
    throw new pe();
  return i.issues.length ? {
    success: !1,
    error: new (e ?? Kc)(i.issues.map((s) => H(s, o, X())))
  } : { success: !0, data: i.value };
}, gd = /* @__PURE__ */ wn(Yc), Zn = (e) => async (n, t, r) => {
  const o = r ? Object.assign(r, { async: !0 }) : { async: !0 };
  let i = n._zod.run({ value: t, issues: [] }, o);
  return i instanceof Promise && (i = await i), i.issues.length ? {
    success: !1,
    error: new e(i.issues.map((s) => H(s, o, X())))
  } : { success: !0, data: i.value };
}, vd = /* @__PURE__ */ Zn(Yc), $d = (e) => (n, t, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return Er(e)(n, t, o);
}, bd = (e) => (n, t, r) => Er(e)(n, t, r), zd = (e) => async (n, t, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return Sr(e)(n, t, o);
}, yd = (e) => async (n, t, r) => Sr(e)(n, t, r), wd = (e) => (n, t, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return wn(e)(n, t, o);
}, Zd = (e) => (n, t, r) => wn(e)(n, t, r), kd = (e) => async (n, t, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return Zn(e)(n, t, o);
}, Id = (e) => async (n, t, r) => Zn(e)(n, t, r), Ed = /^[cC][^\s-]{8,}$/, Sd = /^[0-9a-z]+$/, Td = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Ad = /^[0-9a-vA-V]{20}$/, Od = /^[A-Za-z0-9]{27}$/, Pd = /^[a-zA-Z0-9_-]{21}$/, xd = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Nd = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Jr = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, jd = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Dd = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Cd() {
  return new RegExp(Dd, "u");
}
const Rd = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Fd = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Ud = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Md = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Ld = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, qc = /^[A-Za-z0-9_-]*$/, Vd = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, Bd = /^\+(?:[0-9]){6,14}[0-9]$/, Xc = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Jd = /* @__PURE__ */ new RegExp(`^${Xc}$`);
function Hc(e) {
  const n = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${n}` : e.precision === 0 ? `${n}:[0-5]\\d` : `${n}:[0-5]\\d\\.\\d{${e.precision}}` : `${n}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Wd(e) {
  return new RegExp(`^${Hc(e)}$`);
}
function Gd(e) {
  const n = Hc({ precision: e.precision }), t = ["Z"];
  e.local && t.push(""), e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const r = `${n}(?:${t.join("|")})`;
  return new RegExp(`^${Xc}T(?:${r})$`);
}
const Kd = (e) => {
  const n = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${n}$`);
}, Yd = /^-?\d+$/, qd = /^-?\d+(?:\.\d+)?/, Xd = /^(?:true|false)$/i, Hd = /^[^A-Z]*$/, Qd = /^[^a-z]*$/, F = /* @__PURE__ */ p("$ZodCheck", (e, n) => {
  var t;
  e._zod ?? (e._zod = {}), e._zod.def = n, (t = e._zod).onattach ?? (t.onattach = []);
}), Qc = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, ea = /* @__PURE__ */ p("$ZodCheckLessThan", (e, n) => {
  F.init(e, n);
  const t = Qc[typeof n.value];
  e._zod.onattach.push((r) => {
    const o = r._zod.bag, i = (n.inclusive ? o.maximum : o.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    n.value < i && (n.inclusive ? o.maximum = n.value : o.exclusiveMaximum = n.value);
  }), e._zod.check = (r) => {
    (n.inclusive ? r.value <= n.value : r.value < n.value) || r.issues.push({
      origin: t,
      code: "too_big",
      maximum: n.value,
      input: r.value,
      inclusive: n.inclusive,
      inst: e,
      continue: !n.abort
    });
  };
}), na = /* @__PURE__ */ p("$ZodCheckGreaterThan", (e, n) => {
  F.init(e, n);
  const t = Qc[typeof n.value];
  e._zod.onattach.push((r) => {
    const o = r._zod.bag, i = (n.inclusive ? o.minimum : o.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    n.value > i && (n.inclusive ? o.minimum = n.value : o.exclusiveMinimum = n.value);
  }), e._zod.check = (r) => {
    (n.inclusive ? r.value >= n.value : r.value > n.value) || r.issues.push({
      origin: t,
      code: "too_small",
      minimum: n.value,
      input: r.value,
      inclusive: n.inclusive,
      inst: e,
      continue: !n.abort
    });
  };
}), ep = /* @__PURE__ */ p("$ZodCheckMultipleOf", (e, n) => {
  F.init(e, n), e._zod.onattach.push((t) => {
    var r;
    (r = t._zod.bag).multipleOf ?? (r.multipleOf = n.value);
  }), e._zod.check = (t) => {
    if (typeof t.value != typeof n.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof t.value == "bigint" ? t.value % n.value === BigInt(0) : rd(t.value, n.value) === 0) || t.issues.push({
      origin: typeof t.value,
      code: "not_multiple_of",
      divisor: n.value,
      input: t.value,
      inst: e,
      continue: !n.abort
    });
  };
}), np = /* @__PURE__ */ p("$ZodCheckNumberFormat", (e, n) => {
  F.init(e, n), n.format = n.format || "float64";
  const t = n.format?.includes("int"), r = t ? "int" : "number", [o, i] = ud[n.format];
  e._zod.onattach.push((s) => {
    const u = s._zod.bag;
    u.format = n.format, u.minimum = o, u.maximum = i, t && (u.pattern = Yd);
  }), e._zod.check = (s) => {
    const u = s.value;
    if (t) {
      if (!Number.isInteger(u)) {
        s.issues.push({
          expected: r,
          format: n.format,
          code: "invalid_type",
          continue: !1,
          input: u,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(u)) {
        u > 0 ? s.issues.push({
          input: u,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: r,
          continue: !n.abort
        }) : s.issues.push({
          input: u,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: r,
          continue: !n.abort
        });
        return;
      }
    }
    u < o && s.issues.push({
      origin: "number",
      input: u,
      code: "too_small",
      minimum: o,
      inclusive: !0,
      inst: e,
      continue: !n.abort
    }), u > i && s.issues.push({
      origin: "number",
      input: u,
      code: "too_big",
      maximum: i,
      inst: e
    });
  };
}), tp = /* @__PURE__ */ p("$ZodCheckMaxLength", (e, n) => {
  var t;
  F.init(e, n), (t = e._zod.def).when ?? (t.when = (r) => {
    const o = r.value;
    return !Zr(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    n.maximum < o && (r._zod.bag.maximum = n.maximum);
  }), e._zod.check = (r) => {
    const o = r.value;
    if (o.length <= n.maximum)
      return;
    const s = Ir(o);
    r.issues.push({
      origin: s,
      code: "too_big",
      maximum: n.maximum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !n.abort
    });
  };
}), rp = /* @__PURE__ */ p("$ZodCheckMinLength", (e, n) => {
  var t;
  F.init(e, n), (t = e._zod.def).when ?? (t.when = (r) => {
    const o = r.value;
    return !Zr(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    n.minimum > o && (r._zod.bag.minimum = n.minimum);
  }), e._zod.check = (r) => {
    const o = r.value;
    if (o.length >= n.minimum)
      return;
    const s = Ir(o);
    r.issues.push({
      origin: s,
      code: "too_small",
      minimum: n.minimum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !n.abort
    });
  };
}), op = /* @__PURE__ */ p("$ZodCheckLengthEquals", (e, n) => {
  var t;
  F.init(e, n), (t = e._zod.def).when ?? (t.when = (r) => {
    const o = r.value;
    return !Zr(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.minimum = n.length, o.maximum = n.length, o.length = n.length;
  }), e._zod.check = (r) => {
    const o = r.value, i = o.length;
    if (i === n.length)
      return;
    const s = Ir(o), u = i > n.length;
    r.issues.push({
      origin: s,
      ...u ? { code: "too_big", maximum: n.length } : { code: "too_small", minimum: n.length },
      inclusive: !0,
      exact: !0,
      input: r.value,
      inst: e,
      continue: !n.abort
    });
  };
}), kn = /* @__PURE__ */ p("$ZodCheckStringFormat", (e, n) => {
  var t, r;
  F.init(e, n), e._zod.onattach.push((o) => {
    const i = o._zod.bag;
    i.format = n.format, n.pattern && (i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(n.pattern));
  }), n.pattern ? (t = e._zod).check ?? (t.check = (o) => {
    n.pattern.lastIndex = 0, !n.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: n.format,
      input: o.value,
      ...n.pattern ? { pattern: n.pattern.toString() } : {},
      inst: e,
      continue: !n.abort
    });
  }) : (r = e._zod).check ?? (r.check = () => {
  });
}), ip = /* @__PURE__ */ p("$ZodCheckRegex", (e, n) => {
  kn.init(e, n), e._zod.check = (t) => {
    n.pattern.lastIndex = 0, !n.pattern.test(t.value) && t.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: t.value,
      pattern: n.pattern.toString(),
      inst: e,
      continue: !n.abort
    });
  };
}), sp = /* @__PURE__ */ p("$ZodCheckLowerCase", (e, n) => {
  n.pattern ?? (n.pattern = Hd), kn.init(e, n);
}), up = /* @__PURE__ */ p("$ZodCheckUpperCase", (e, n) => {
  n.pattern ?? (n.pattern = Qd), kn.init(e, n);
}), cp = /* @__PURE__ */ p("$ZodCheckIncludes", (e, n) => {
  F.init(e, n);
  const t = yn(n.includes), r = new RegExp(typeof n.position == "number" ? `^.{${n.position}}${t}` : t);
  n.pattern = r, e._zod.onattach.push((o) => {
    const i = o._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(r);
  }), e._zod.check = (o) => {
    o.value.includes(n.includes, n.position) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: n.includes,
      input: o.value,
      inst: e,
      continue: !n.abort
    });
  };
}), ap = /* @__PURE__ */ p("$ZodCheckStartsWith", (e, n) => {
  F.init(e, n);
  const t = new RegExp(`^${yn(n.prefix)}.*`);
  n.pattern ?? (n.pattern = t), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(t);
  }), e._zod.check = (r) => {
    r.value.startsWith(n.prefix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: n.prefix,
      input: r.value,
      inst: e,
      continue: !n.abort
    });
  };
}), lp = /* @__PURE__ */ p("$ZodCheckEndsWith", (e, n) => {
  F.init(e, n);
  const t = new RegExp(`.*${yn(n.suffix)}$`);
  n.pattern ?? (n.pattern = t), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(t);
  }), e._zod.check = (r) => {
    r.value.endsWith(n.suffix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: n.suffix,
      input: r.value,
      inst: e,
      continue: !n.abort
    });
  };
}), fp = /* @__PURE__ */ p("$ZodCheckOverwrite", (e, n) => {
  F.init(e, n), e._zod.check = (t) => {
    t.value = n.tx(t.value);
  };
});
class dp {
  constructor(n = []) {
    this.content = [], this.indent = 0, this && (this.args = n);
  }
  indented(n) {
    this.indent += 1, n(this), this.indent -= 1;
  }
  write(n) {
    if (typeof n == "function") {
      n(this, { execution: "sync" }), n(this, { execution: "async" });
      return;
    }
    const r = n.split(`
`).filter((s) => s), o = Math.min(...r.map((s) => s.length - s.trimStart().length)), i = r.map((s) => s.slice(o)).map((s) => " ".repeat(this.indent * 2) + s);
    for (const s of i)
      this.content.push(s);
  }
  compile() {
    const n = Function, t = this?.args, o = [...(this?.content ?? [""]).map((i) => `  ${i}`)];
    return new n(...t, o.join(`
`));
  }
}
const pp = {
  major: 4,
  minor: 1,
  patch: 12
}, P = /* @__PURE__ */ p("$ZodType", (e, n) => {
  var t;
  e ?? (e = {}), e._zod.def = n, e._zod.bag = e._zod.bag || {}, e._zod.version = pp;
  const r = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && r.unshift(e);
  for (const o of r)
    for (const i of o._zod.onattach)
      i(e);
  if (r.length === 0)
    (t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const o = (s, u, c) => {
      let l = fe(s), d;
      for (const m of u) {
        if (m._zod.def.when) {
          if (!m._zod.def.when(s))
            continue;
        } else if (l)
          continue;
        const g = s.issues.length, _ = m._zod.check(s);
        if (_ instanceof Promise && c?.async === !1)
          throw new pe();
        if (d || _ instanceof Promise)
          d = (d ?? Promise.resolve()).then(async () => {
            await _, s.issues.length !== g && (l || (l = fe(s, g)));
          });
        else {
          if (s.issues.length === g)
            continue;
          l || (l = fe(s, g));
        }
      }
      return d ? d.then(() => s) : s;
    }, i = (s, u, c) => {
      if (fe(s))
        return s.aborted = !0, s;
      const l = o(u, r, c);
      if (l instanceof Promise) {
        if (c.async === !1)
          throw new pe();
        return l.then((d) => e._zod.parse(d, c));
      }
      return e._zod.parse(l, c);
    };
    e._zod.run = (s, u) => {
      if (u.skipChecks)
        return e._zod.parse(s, u);
      if (u.direction === "backward") {
        const l = e._zod.parse({ value: s.value, issues: [] }, { ...u, skipChecks: !0 });
        return l instanceof Promise ? l.then((d) => i(d, s, u)) : i(l, s, u);
      }
      const c = e._zod.parse(s, u);
      if (c instanceof Promise) {
        if (u.async === !1)
          throw new pe();
        return c.then((l) => o(l, r, u));
      }
      return o(c, r, u);
    };
  }
  e["~standard"] = {
    validate: (o) => {
      try {
        const i = gd(e, o);
        return i.success ? { value: i.data } : { issues: i.error?.issues };
      } catch {
        return vd(e, o).then((s) => s.success ? { value: s.data } : { issues: s.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), Tr = /* @__PURE__ */ p("$ZodString", (e, n) => {
  P.init(e, n), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? Kd(e._zod.bag), e._zod.parse = (t, r) => {
    if (n.coerce)
      try {
        t.value = String(t.value);
      } catch {
      }
    return typeof t.value == "string" || t.issues.push({
      expected: "string",
      code: "invalid_type",
      input: t.value,
      inst: e
    }), t;
  };
}), O = /* @__PURE__ */ p("$ZodStringFormat", (e, n) => {
  kn.init(e, n), Tr.init(e, n);
}), hp = /* @__PURE__ */ p("$ZodGUID", (e, n) => {
  n.pattern ?? (n.pattern = Nd), O.init(e, n);
}), mp = /* @__PURE__ */ p("$ZodUUID", (e, n) => {
  if (n.version) {
    const r = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[n.version];
    if (r === void 0)
      throw new Error(`Invalid UUID version: "${n.version}"`);
    n.pattern ?? (n.pattern = Jr(r));
  } else
    n.pattern ?? (n.pattern = Jr());
  O.init(e, n);
}), _p = /* @__PURE__ */ p("$ZodEmail", (e, n) => {
  n.pattern ?? (n.pattern = jd), O.init(e, n);
}), gp = /* @__PURE__ */ p("$ZodURL", (e, n) => {
  O.init(e, n), e._zod.check = (t) => {
    try {
      const r = t.value.trim(), o = new URL(r);
      n.hostname && (n.hostname.lastIndex = 0, n.hostname.test(o.hostname) || t.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: Vd.source,
        input: t.value,
        inst: e,
        continue: !n.abort
      })), n.protocol && (n.protocol.lastIndex = 0, n.protocol.test(o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol) || t.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: n.protocol.source,
        input: t.value,
        inst: e,
        continue: !n.abort
      })), n.normalize ? t.value = o.href : t.value = r;
      return;
    } catch {
      t.issues.push({
        code: "invalid_format",
        format: "url",
        input: t.value,
        inst: e,
        continue: !n.abort
      });
    }
  };
}), vp = /* @__PURE__ */ p("$ZodEmoji", (e, n) => {
  n.pattern ?? (n.pattern = Cd()), O.init(e, n);
}), $p = /* @__PURE__ */ p("$ZodNanoID", (e, n) => {
  n.pattern ?? (n.pattern = Pd), O.init(e, n);
}), bp = /* @__PURE__ */ p("$ZodCUID", (e, n) => {
  n.pattern ?? (n.pattern = Ed), O.init(e, n);
}), zp = /* @__PURE__ */ p("$ZodCUID2", (e, n) => {
  n.pattern ?? (n.pattern = Sd), O.init(e, n);
}), yp = /* @__PURE__ */ p("$ZodULID", (e, n) => {
  n.pattern ?? (n.pattern = Td), O.init(e, n);
}), wp = /* @__PURE__ */ p("$ZodXID", (e, n) => {
  n.pattern ?? (n.pattern = Ad), O.init(e, n);
}), Zp = /* @__PURE__ */ p("$ZodKSUID", (e, n) => {
  n.pattern ?? (n.pattern = Od), O.init(e, n);
}), kp = /* @__PURE__ */ p("$ZodISODateTime", (e, n) => {
  n.pattern ?? (n.pattern = Gd(n)), O.init(e, n);
}), Ip = /* @__PURE__ */ p("$ZodISODate", (e, n) => {
  n.pattern ?? (n.pattern = Jd), O.init(e, n);
}), Ep = /* @__PURE__ */ p("$ZodISOTime", (e, n) => {
  n.pattern ?? (n.pattern = Wd(n)), O.init(e, n);
}), Sp = /* @__PURE__ */ p("$ZodISODuration", (e, n) => {
  n.pattern ?? (n.pattern = xd), O.init(e, n);
}), Tp = /* @__PURE__ */ p("$ZodIPv4", (e, n) => {
  n.pattern ?? (n.pattern = Rd), O.init(e, n), e._zod.onattach.push((t) => {
    const r = t._zod.bag;
    r.format = "ipv4";
  });
}), Ap = /* @__PURE__ */ p("$ZodIPv6", (e, n) => {
  n.pattern ?? (n.pattern = Fd), O.init(e, n), e._zod.onattach.push((t) => {
    const r = t._zod.bag;
    r.format = "ipv6";
  }), e._zod.check = (t) => {
    try {
      new URL(`http://[${t.value}]`);
    } catch {
      t.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: t.value,
        inst: e,
        continue: !n.abort
      });
    }
  };
}), Op = /* @__PURE__ */ p("$ZodCIDRv4", (e, n) => {
  n.pattern ?? (n.pattern = Ud), O.init(e, n);
}), Pp = /* @__PURE__ */ p("$ZodCIDRv6", (e, n) => {
  n.pattern ?? (n.pattern = Md), O.init(e, n), e._zod.check = (t) => {
    const r = t.value.split("/");
    try {
      if (r.length !== 2)
        throw new Error();
      const [o, i] = r;
      if (!i)
        throw new Error();
      const s = Number(i);
      if (`${s}` !== i)
        throw new Error();
      if (s < 0 || s > 128)
        throw new Error();
      new URL(`http://[${o}]`);
    } catch {
      t.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: t.value,
        inst: e,
        continue: !n.abort
      });
    }
  };
});
function ta(e) {
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
const xp = /* @__PURE__ */ p("$ZodBase64", (e, n) => {
  n.pattern ?? (n.pattern = Ld), O.init(e, n), e._zod.onattach.push((t) => {
    t._zod.bag.contentEncoding = "base64";
  }), e._zod.check = (t) => {
    ta(t.value) || t.issues.push({
      code: "invalid_format",
      format: "base64",
      input: t.value,
      inst: e,
      continue: !n.abort
    });
  };
});
function Np(e) {
  if (!qc.test(e))
    return !1;
  const n = e.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), t = n.padEnd(Math.ceil(n.length / 4) * 4, "=");
  return ta(t);
}
const jp = /* @__PURE__ */ p("$ZodBase64URL", (e, n) => {
  n.pattern ?? (n.pattern = qc), O.init(e, n), e._zod.onattach.push((t) => {
    t._zod.bag.contentEncoding = "base64url";
  }), e._zod.check = (t) => {
    Np(t.value) || t.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: t.value,
      inst: e,
      continue: !n.abort
    });
  };
}), Dp = /* @__PURE__ */ p("$ZodE164", (e, n) => {
  n.pattern ?? (n.pattern = Bd), O.init(e, n);
});
function Cp(e, n = null) {
  try {
    const t = e.split(".");
    if (t.length !== 3)
      return !1;
    const [r] = t;
    if (!r)
      return !1;
    const o = JSON.parse(atob(r));
    return !("typ" in o && o?.typ !== "JWT" || !o.alg || n && (!("alg" in o) || o.alg !== n));
  } catch {
    return !1;
  }
}
const Rp = /* @__PURE__ */ p("$ZodJWT", (e, n) => {
  O.init(e, n), e._zod.check = (t) => {
    Cp(t.value, n.alg) || t.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: t.value,
      inst: e,
      continue: !n.abort
    });
  };
}), ra = /* @__PURE__ */ p("$ZodNumber", (e, n) => {
  P.init(e, n), e._zod.pattern = e._zod.bag.pattern ?? qd, e._zod.parse = (t, r) => {
    if (n.coerce)
      try {
        t.value = Number(t.value);
      } catch {
      }
    const o = t.value;
    if (typeof o == "number" && !Number.isNaN(o) && Number.isFinite(o))
      return t;
    const i = typeof o == "number" ? Number.isNaN(o) ? "NaN" : Number.isFinite(o) ? void 0 : "Infinity" : void 0;
    return t.issues.push({
      expected: "number",
      code: "invalid_type",
      input: o,
      inst: e,
      ...i ? { received: i } : {}
    }), t;
  };
}), Fp = /* @__PURE__ */ p("$ZodNumber", (e, n) => {
  np.init(e, n), ra.init(e, n);
}), Up = /* @__PURE__ */ p("$ZodBoolean", (e, n) => {
  P.init(e, n), e._zod.pattern = Xd, e._zod.parse = (t, r) => {
    if (n.coerce)
      try {
        t.value = !!t.value;
      } catch {
      }
    const o = t.value;
    return typeof o == "boolean" || t.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: o,
      inst: e
    }), t;
  };
}), Mp = /* @__PURE__ */ p("$ZodAny", (e, n) => {
  P.init(e, n), e._zod.parse = (t) => t;
}), Lp = /* @__PURE__ */ p("$ZodUnknown", (e, n) => {
  P.init(e, n), e._zod.parse = (t) => t;
}), Vp = /* @__PURE__ */ p("$ZodNever", (e, n) => {
  P.init(e, n), e._zod.parse = (t, r) => (t.issues.push({
    expected: "never",
    code: "invalid_type",
    input: t.value,
    inst: e
  }), t);
});
function Wr(e, n, t) {
  e.issues.length && n.issues.push(...de(t, e.issues)), n.value[t] = e.value;
}
const Bp = /* @__PURE__ */ p("$ZodArray", (e, n) => {
  P.init(e, n), e._zod.parse = (t, r) => {
    const o = t.value;
    if (!Array.isArray(o))
      return t.issues.push({
        expected: "array",
        code: "invalid_type",
        input: o,
        inst: e
      }), t;
    t.value = Array(o.length);
    const i = [];
    for (let s = 0; s < o.length; s++) {
      const u = o[s], c = n.element._zod.run({
        value: u,
        issues: []
      }, r);
      c instanceof Promise ? i.push(c.then((l) => Wr(l, t, s))) : Wr(c, t, s);
    }
    return i.length ? Promise.all(i).then(() => t) : t;
  };
});
function tn(e, n, t, r) {
  e.issues.length && n.issues.push(...de(t, e.issues)), e.value === void 0 ? t in r && (n.value[t] = void 0) : n.value[t] = e.value;
}
function oa(e) {
  const n = Object.keys(e.shape);
  for (const r of n)
    if (!e.shape?.[r]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
  const t = sd(e.shape);
  return {
    ...e,
    keys: n,
    keySet: new Set(n),
    numKeys: n.length,
    optionalKeys: new Set(t)
  };
}
function ia(e, n, t, r, o, i) {
  const s = [], u = o.keySet, c = o.catchall._zod, l = c.def.type;
  for (const d of Object.keys(n)) {
    if (u.has(d))
      continue;
    if (l === "never") {
      s.push(d);
      continue;
    }
    const m = c.run({ value: n[d], issues: [] }, r);
    m instanceof Promise ? e.push(m.then((g) => tn(g, t, d, n))) : tn(m, t, d, n);
  }
  return s.length && t.issues.push({
    code: "unrecognized_keys",
    keys: s,
    input: n,
    inst: i
  }), e.length ? Promise.all(e).then(() => t) : t;
}
const Jp = /* @__PURE__ */ p("$ZodObject", (e, n) => {
  if (P.init(e, n), !Object.getOwnPropertyDescriptor(n, "shape")?.get) {
    const u = n.shape;
    Object.defineProperty(n, "shape", {
      get: () => {
        const c = { ...u };
        return Object.defineProperty(n, "shape", {
          value: c
        }), c;
      }
    });
  }
  const r = wr(() => oa(n));
  S(e._zod, "propValues", () => {
    const u = n.shape, c = {};
    for (const l in u) {
      const d = u[l]._zod;
      if (d.values) {
        c[l] ?? (c[l] = /* @__PURE__ */ new Set());
        for (const m of d.values)
          c[l].add(m);
      }
    }
    return c;
  });
  const o = nn, i = n.catchall;
  let s;
  e._zod.parse = (u, c) => {
    s ?? (s = r.value);
    const l = u.value;
    if (!o(l))
      return u.issues.push({
        expected: "object",
        code: "invalid_type",
        input: l,
        inst: e
      }), u;
    u.value = {};
    const d = [], m = s.shape;
    for (const g of s.keys) {
      const f = m[g]._zod.run({ value: l[g], issues: [] }, c);
      f instanceof Promise ? d.push(f.then((v) => tn(v, u, g, l))) : tn(f, u, g, l);
    }
    return i ? ia(d, l, u, c, r.value, e) : d.length ? Promise.all(d).then(() => u) : u;
  };
}), Wp = /* @__PURE__ */ p("$ZodObjectJIT", (e, n) => {
  Jp.init(e, n);
  const t = e._zod.parse, r = wr(() => oa(n)), o = (g) => {
    const _ = new dp(["shape", "payload", "ctx"]), f = r.value, v = (w) => {
      const k = Br(w);
      return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
    };
    _.write("const input = payload.value;");
    const $ = /* @__PURE__ */ Object.create(null);
    let E = 0;
    for (const w of f.keys)
      $[w] = `key_${E++}`;
    _.write("const newResult = {};");
    for (const w of f.keys) {
      const k = $[w], C = Br(w);
      _.write(`const ${k} = ${v(w)};`), _.write(`
        if (${k}.issues.length) {
          payload.issues = payload.issues.concat(${k}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${C}, ...iss.path] : [${C}]
          })));
        }
        
        
        if (${k}.value === undefined) {
          if (${C} in input) {
            newResult[${C}] = undefined;
          }
        } else {
          newResult[${C}] = ${k}.value;
        }
        
      `);
    }
    _.write("payload.value = newResult;"), _.write("return payload;");
    const I = _.compile();
    return (w, k) => I(g, w, k);
  };
  let i;
  const s = nn, u = !Bc.jitless, l = u && od.value, d = n.catchall;
  let m;
  e._zod.parse = (g, _) => {
    m ?? (m = r.value);
    const f = g.value;
    return s(f) ? u && l && _?.async === !1 && _.jitless !== !0 ? (i || (i = o(n.shape)), g = i(g, _), d ? ia([], f, g, _, m, e) : g) : t(g, _) : (g.issues.push({
      expected: "object",
      code: "invalid_type",
      input: f,
      inst: e
    }), g);
  };
});
function Gr(e, n, t, r) {
  for (const i of e)
    if (i.issues.length === 0)
      return n.value = i.value, n;
  const o = e.filter((i) => !fe(i));
  return o.length === 1 ? (n.value = o[0].value, o[0]) : (n.issues.push({
    code: "invalid_union",
    input: n.value,
    inst: t,
    errors: e.map((i) => i.issues.map((s) => H(s, r, X())))
  }), n);
}
const Gp = /* @__PURE__ */ p("$ZodUnion", (e, n) => {
  P.init(e, n), S(e._zod, "optin", () => n.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), S(e._zod, "optout", () => n.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), S(e._zod, "values", () => {
    if (n.options.every((o) => o._zod.values))
      return new Set(n.options.flatMap((o) => Array.from(o._zod.values)));
  }), S(e._zod, "pattern", () => {
    if (n.options.every((o) => o._zod.pattern)) {
      const o = n.options.map((i) => i._zod.pattern);
      return new RegExp(`^(${o.map((i) => kr(i.source)).join("|")})$`);
    }
  });
  const t = n.options.length === 1, r = n.options[0]._zod.run;
  e._zod.parse = (o, i) => {
    if (t)
      return r(o, i);
    let s = !1;
    const u = [];
    for (const c of n.options) {
      const l = c._zod.run({
        value: o.value,
        issues: []
      }, i);
      if (l instanceof Promise)
        u.push(l), s = !0;
      else {
        if (l.issues.length === 0)
          return l;
        u.push(l);
      }
    }
    return s ? Promise.all(u).then((c) => Gr(c, o, e, i)) : Gr(u, o, e, i);
  };
}), Kp = /* @__PURE__ */ p("$ZodIntersection", (e, n) => {
  P.init(e, n), e._zod.parse = (t, r) => {
    const o = t.value, i = n.left._zod.run({ value: o, issues: [] }, r), s = n.right._zod.run({ value: o, issues: [] }, r);
    return i instanceof Promise || s instanceof Promise ? Promise.all([i, s]).then(([c, l]) => Kr(t, c, l)) : Kr(t, i, s);
  };
});
function Cn(e, n) {
  if (e === n)
    return { valid: !0, data: e };
  if (e instanceof Date && n instanceof Date && +e == +n)
    return { valid: !0, data: e };
  if ($e(e) && $e(n)) {
    const t = Object.keys(n), r = Object.keys(e).filter((i) => t.indexOf(i) !== -1), o = { ...e, ...n };
    for (const i of r) {
      const s = Cn(e[i], n[i]);
      if (!s.valid)
        return {
          valid: !1,
          mergeErrorPath: [i, ...s.mergeErrorPath]
        };
      o[i] = s.data;
    }
    return { valid: !0, data: o };
  }
  if (Array.isArray(e) && Array.isArray(n)) {
    if (e.length !== n.length)
      return { valid: !1, mergeErrorPath: [] };
    const t = [];
    for (let r = 0; r < e.length; r++) {
      const o = e[r], i = n[r], s = Cn(o, i);
      if (!s.valid)
        return {
          valid: !1,
          mergeErrorPath: [r, ...s.mergeErrorPath]
        };
      t.push(s.data);
    }
    return { valid: !0, data: t };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Kr(e, n, t) {
  if (n.issues.length && e.issues.push(...n.issues), t.issues.length && e.issues.push(...t.issues), fe(e))
    return e;
  const r = Cn(n.value, t.value);
  if (!r.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);
  return e.value = r.data, e;
}
const Yp = /* @__PURE__ */ p("$ZodRecord", (e, n) => {
  P.init(e, n), e._zod.parse = (t, r) => {
    const o = t.value;
    if (!$e(o))
      return t.issues.push({
        expected: "record",
        code: "invalid_type",
        input: o,
        inst: e
      }), t;
    const i = [];
    if (n.keyType._zod.values) {
      const s = n.keyType._zod.values;
      t.value = {};
      for (const c of s)
        if (typeof c == "string" || typeof c == "number" || typeof c == "symbol") {
          const l = n.valueType._zod.run({ value: o[c], issues: [] }, r);
          l instanceof Promise ? i.push(l.then((d) => {
            d.issues.length && t.issues.push(...de(c, d.issues)), t.value[c] = d.value;
          })) : (l.issues.length && t.issues.push(...de(c, l.issues)), t.value[c] = l.value);
        }
      let u;
      for (const c in o)
        s.has(c) || (u = u ?? [], u.push(c));
      u && u.length > 0 && t.issues.push({
        code: "unrecognized_keys",
        input: o,
        inst: e,
        keys: u
      });
    } else {
      t.value = {};
      for (const s of Reflect.ownKeys(o)) {
        if (s === "__proto__")
          continue;
        const u = n.keyType._zod.run({ value: s, issues: [] }, r);
        if (u instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (u.issues.length) {
          t.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: u.issues.map((l) => H(l, r, X())),
            input: s,
            path: [s],
            inst: e
          }), t.value[u.value] = u.value;
          continue;
        }
        const c = n.valueType._zod.run({ value: o[s], issues: [] }, r);
        c instanceof Promise ? i.push(c.then((l) => {
          l.issues.length && t.issues.push(...de(s, l.issues)), t.value[u.value] = l.value;
        })) : (c.issues.length && t.issues.push(...de(s, c.issues)), t.value[u.value] = c.value);
      }
    }
    return i.length ? Promise.all(i).then(() => t) : t;
  };
}), qp = /* @__PURE__ */ p("$ZodEnum", (e, n) => {
  P.init(e, n);
  const t = td(n.entries), r = new Set(t);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${t.filter((o) => id.has(typeof o)).map((o) => typeof o == "string" ? yn(o) : o.toString()).join("|")})$`), e._zod.parse = (o, i) => {
    const s = o.value;
    return r.has(s) || o.issues.push({
      code: "invalid_value",
      values: t,
      input: s,
      inst: e
    }), o;
  };
}), Xp = /* @__PURE__ */ p("$ZodTransform", (e, n) => {
  P.init(e, n), e._zod.parse = (t, r) => {
    if (r.direction === "backward")
      throw new Vc(e.constructor.name);
    const o = n.transform(t.value, t);
    if (r.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((s) => (t.value = s, t));
    if (o instanceof Promise)
      throw new pe();
    return t.value = o, t;
  };
});
function Yr(e, n) {
  return e.issues.length && n === void 0 ? { issues: [], value: void 0 } : e;
}
const Hp = /* @__PURE__ */ p("$ZodOptional", (e, n) => {
  P.init(e, n), e._zod.optin = "optional", e._zod.optout = "optional", S(e._zod, "values", () => n.innerType._zod.values ? /* @__PURE__ */ new Set([...n.innerType._zod.values, void 0]) : void 0), S(e._zod, "pattern", () => {
    const t = n.innerType._zod.pattern;
    return t ? new RegExp(`^(${kr(t.source)})?$`) : void 0;
  }), e._zod.parse = (t, r) => {
    if (n.innerType._zod.optin === "optional") {
      const o = n.innerType._zod.run(t, r);
      return o instanceof Promise ? o.then((i) => Yr(i, t.value)) : Yr(o, t.value);
    }
    return t.value === void 0 ? t : n.innerType._zod.run(t, r);
  };
}), Qp = /* @__PURE__ */ p("$ZodNullable", (e, n) => {
  P.init(e, n), S(e._zod, "optin", () => n.innerType._zod.optin), S(e._zod, "optout", () => n.innerType._zod.optout), S(e._zod, "pattern", () => {
    const t = n.innerType._zod.pattern;
    return t ? new RegExp(`^(${kr(t.source)}|null)$`) : void 0;
  }), S(e._zod, "values", () => n.innerType._zod.values ? /* @__PURE__ */ new Set([...n.innerType._zod.values, null]) : void 0), e._zod.parse = (t, r) => t.value === null ? t : n.innerType._zod.run(t, r);
}), eh = /* @__PURE__ */ p("$ZodDefault", (e, n) => {
  P.init(e, n), e._zod.optin = "optional", S(e._zod, "values", () => n.innerType._zod.values), e._zod.parse = (t, r) => {
    if (r.direction === "backward")
      return n.innerType._zod.run(t, r);
    if (t.value === void 0)
      return t.value = n.defaultValue, t;
    const o = n.innerType._zod.run(t, r);
    return o instanceof Promise ? o.then((i) => qr(i, n)) : qr(o, n);
  };
});
function qr(e, n) {
  return e.value === void 0 && (e.value = n.defaultValue), e;
}
const nh = /* @__PURE__ */ p("$ZodPrefault", (e, n) => {
  P.init(e, n), e._zod.optin = "optional", S(e._zod, "values", () => n.innerType._zod.values), e._zod.parse = (t, r) => (r.direction === "backward" || t.value === void 0 && (t.value = n.defaultValue), n.innerType._zod.run(t, r));
}), th = /* @__PURE__ */ p("$ZodNonOptional", (e, n) => {
  P.init(e, n), S(e._zod, "values", () => {
    const t = n.innerType._zod.values;
    return t ? new Set([...t].filter((r) => r !== void 0)) : void 0;
  }), e._zod.parse = (t, r) => {
    const o = n.innerType._zod.run(t, r);
    return o instanceof Promise ? o.then((i) => Xr(i, e)) : Xr(o, e);
  };
});
function Xr(e, n) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: n
  }), e;
}
const rh = /* @__PURE__ */ p("$ZodCatch", (e, n) => {
  P.init(e, n), S(e._zod, "optin", () => n.innerType._zod.optin), S(e._zod, "optout", () => n.innerType._zod.optout), S(e._zod, "values", () => n.innerType._zod.values), e._zod.parse = (t, r) => {
    if (r.direction === "backward")
      return n.innerType._zod.run(t, r);
    const o = n.innerType._zod.run(t, r);
    return o instanceof Promise ? o.then((i) => (t.value = i.value, i.issues.length && (t.value = n.catchValue({
      ...t,
      error: {
        issues: i.issues.map((s) => H(s, r, X()))
      },
      input: t.value
    }), t.issues = []), t)) : (t.value = o.value, o.issues.length && (t.value = n.catchValue({
      ...t,
      error: {
        issues: o.issues.map((i) => H(i, r, X()))
      },
      input: t.value
    }), t.issues = []), t);
  };
}), oh = /* @__PURE__ */ p("$ZodPipe", (e, n) => {
  P.init(e, n), S(e._zod, "values", () => n.in._zod.values), S(e._zod, "optin", () => n.in._zod.optin), S(e._zod, "optout", () => n.out._zod.optout), S(e._zod, "propValues", () => n.in._zod.propValues), e._zod.parse = (t, r) => {
    if (r.direction === "backward") {
      const i = n.out._zod.run(t, r);
      return i instanceof Promise ? i.then((s) => Ve(s, n.in, r)) : Ve(i, n.in, r);
    }
    const o = n.in._zod.run(t, r);
    return o instanceof Promise ? o.then((i) => Ve(i, n.out, r)) : Ve(o, n.out, r);
  };
});
function Ve(e, n, t) {
  return e.issues.length ? (e.aborted = !0, e) : n._zod.run({ value: e.value, issues: e.issues }, t);
}
const ih = /* @__PURE__ */ p("$ZodReadonly", (e, n) => {
  P.init(e, n), S(e._zod, "propValues", () => n.innerType._zod.propValues), S(e._zod, "values", () => n.innerType._zod.values), S(e._zod, "optin", () => n.innerType._zod.optin), S(e._zod, "optout", () => n.innerType._zod.optout), e._zod.parse = (t, r) => {
    if (r.direction === "backward")
      return n.innerType._zod.run(t, r);
    const o = n.innerType._zod.run(t, r);
    return o instanceof Promise ? o.then(Hr) : Hr(o);
  };
});
function Hr(e) {
  return e.value = Object.freeze(e.value), e;
}
const sh = /* @__PURE__ */ p("$ZodCustom", (e, n) => {
  F.init(e, n), P.init(e, n), e._zod.parse = (t, r) => t, e._zod.check = (t) => {
    const r = t.value, o = n.fn(r);
    if (o instanceof Promise)
      return o.then((i) => Qr(i, t, r, e));
    Qr(o, t, r, e);
  };
});
function Qr(e, n, t, r) {
  if (!e) {
    const o = {
      code: "custom",
      input: t,
      inst: r,
      // incorporates params.error into issue reporting
      path: [...r._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !r._zod.def.abort
      // params: inst._zod.def.params,
    };
    r._zod.def.params && (o.params = r._zod.def.params), n.issues.push(ke(o));
  }
}
class uh {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(n, ...t) {
    const r = t[0];
    if (this._map.set(n, r), r && typeof r == "object" && "id" in r) {
      if (this._idmap.has(r.id))
        throw new Error(`ID ${r.id} already exists in the registry`);
      this._idmap.set(r.id, n);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(n) {
    const t = this._map.get(n);
    return t && typeof t == "object" && "id" in t && this._idmap.delete(t.id), this._map.delete(n), this;
  }
  get(n) {
    const t = n._zod.parent;
    if (t) {
      const r = { ...this.get(t) ?? {} };
      delete r.id;
      const o = { ...r, ...this._map.get(n) };
      return Object.keys(o).length ? o : void 0;
    }
    return this._map.get(n);
  }
  has(n) {
    return this._map.has(n);
  }
}
function ch() {
  return new uh();
}
const Be = /* @__PURE__ */ ch();
function ah(e, n) {
  return new e({
    type: "string",
    ...b(n)
  });
}
function lh(e, n) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...b(n)
  });
}
function eo(e, n) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...b(n)
  });
}
function fh(e, n) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...b(n)
  });
}
function dh(e, n) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...b(n)
  });
}
function ph(e, n) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...b(n)
  });
}
function hh(e, n) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...b(n)
  });
}
function mh(e, n) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...b(n)
  });
}
function _h(e, n) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...b(n)
  });
}
function gh(e, n) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...b(n)
  });
}
function vh(e, n) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...b(n)
  });
}
function $h(e, n) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...b(n)
  });
}
function bh(e, n) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...b(n)
  });
}
function zh(e, n) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...b(n)
  });
}
function yh(e, n) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...b(n)
  });
}
function wh(e, n) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...b(n)
  });
}
function Zh(e, n) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...b(n)
  });
}
function kh(e, n) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...b(n)
  });
}
function Ih(e, n) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...b(n)
  });
}
function Eh(e, n) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...b(n)
  });
}
function Sh(e, n) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...b(n)
  });
}
function Th(e, n) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...b(n)
  });
}
function Ah(e, n) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...b(n)
  });
}
function Oh(e, n) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...b(n)
  });
}
function Ph(e, n) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...b(n)
  });
}
function xh(e, n) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...b(n)
  });
}
function Nh(e, n) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...b(n)
  });
}
function jh(e, n) {
  return new e({
    type: "number",
    checks: [],
    ...b(n)
  });
}
function Dh(e, n) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...b(n)
  });
}
function Ch(e, n) {
  return new e({
    type: "boolean",
    ...b(n)
  });
}
function Rh(e) {
  return new e({
    type: "any"
  });
}
function Fh(e) {
  return new e({
    type: "unknown"
  });
}
function Uh(e, n) {
  return new e({
    type: "never",
    ...b(n)
  });
}
function no(e, n) {
  return new ea({
    check: "less_than",
    ...b(n),
    value: e,
    inclusive: !1
  });
}
function In(e, n) {
  return new ea({
    check: "less_than",
    ...b(n),
    value: e,
    inclusive: !0
  });
}
function to(e, n) {
  return new na({
    check: "greater_than",
    ...b(n),
    value: e,
    inclusive: !1
  });
}
function En(e, n) {
  return new na({
    check: "greater_than",
    ...b(n),
    value: e,
    inclusive: !0
  });
}
function ro(e, n) {
  return new ep({
    check: "multiple_of",
    ...b(n),
    value: e
  });
}
function sa(e, n) {
  return new tp({
    check: "max_length",
    ...b(n),
    maximum: e
  });
}
function rn(e, n) {
  return new rp({
    check: "min_length",
    ...b(n),
    minimum: e
  });
}
function ua(e, n) {
  return new op({
    check: "length_equals",
    ...b(n),
    length: e
  });
}
function Mh(e, n) {
  return new ip({
    check: "string_format",
    format: "regex",
    ...b(n),
    pattern: e
  });
}
function Lh(e) {
  return new sp({
    check: "string_format",
    format: "lowercase",
    ...b(e)
  });
}
function Vh(e) {
  return new up({
    check: "string_format",
    format: "uppercase",
    ...b(e)
  });
}
function Bh(e, n) {
  return new cp({
    check: "string_format",
    format: "includes",
    ...b(n),
    includes: e
  });
}
function Jh(e, n) {
  return new ap({
    check: "string_format",
    format: "starts_with",
    ...b(n),
    prefix: e
  });
}
function Wh(e, n) {
  return new lp({
    check: "string_format",
    format: "ends_with",
    ...b(n),
    suffix: e
  });
}
function Ce(e) {
  return new fp({
    check: "overwrite",
    tx: e
  });
}
function Gh(e) {
  return Ce((n) => n.normalize(e));
}
function Kh() {
  return Ce((e) => e.trim());
}
function Yh() {
  return Ce((e) => e.toLowerCase());
}
function qh() {
  return Ce((e) => e.toUpperCase());
}
function Xh(e, n, t) {
  return new e({
    type: "array",
    element: n,
    // get element() {
    //   return element;
    // },
    ...b(t)
  });
}
function Hh(e, n, t) {
  return new e({
    type: "custom",
    check: "custom",
    fn: n,
    ...b(t)
  });
}
function Qh(e) {
  const n = em((t) => (t.addIssue = (r) => {
    if (typeof r == "string")
      t.issues.push(ke(r, t.value, n._zod.def));
    else {
      const o = r;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = t.value), o.inst ?? (o.inst = n), o.continue ?? (o.continue = !n._zod.def.abort), t.issues.push(ke(o));
    }
  }, e(t.value, t)));
  return n;
}
function em(e, n) {
  const t = new F({
    check: "custom",
    ...b(n)
  });
  return t._zod.check = e, t;
}
const nm = /* @__PURE__ */ p("ZodISODateTime", (e, n) => {
  kp.init(e, n), x.init(e, n);
});
function tm(e) {
  return Oh(nm, e);
}
const rm = /* @__PURE__ */ p("ZodISODate", (e, n) => {
  Ip.init(e, n), x.init(e, n);
});
function om(e) {
  return Ph(rm, e);
}
const im = /* @__PURE__ */ p("ZodISOTime", (e, n) => {
  Ep.init(e, n), x.init(e, n);
});
function sm(e) {
  return xh(im, e);
}
const um = /* @__PURE__ */ p("ZodISODuration", (e, n) => {
  Sp.init(e, n), x.init(e, n);
});
function cm(e) {
  return Nh(um, e);
}
const am = (e, n) => {
  Kc.init(e, n), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (t) => _d(e, t)
      // enumerable: false,
    },
    flatten: {
      value: (t) => md(e, t)
      // enumerable: false,
    },
    addIssue: {
      value: (t) => {
        e.issues.push(t), e.message = JSON.stringify(e.issues, Dn, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (t) => {
        e.issues.push(...t), e.message = JSON.stringify(e.issues, Dn, 2);
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
}, B = p("ZodError", am, {
  Parent: Error
}), lm = /* @__PURE__ */ Er(B), fm = /* @__PURE__ */ Sr(B), dm = /* @__PURE__ */ wn(B), pm = /* @__PURE__ */ Zn(B), hm = /* @__PURE__ */ $d(B), mm = /* @__PURE__ */ bd(B), _m = /* @__PURE__ */ zd(B), gm = /* @__PURE__ */ yd(B), vm = /* @__PURE__ */ wd(B), $m = /* @__PURE__ */ Zd(B), bm = /* @__PURE__ */ kd(B), zm = /* @__PURE__ */ Id(B), j = /* @__PURE__ */ p("ZodType", (e, n) => (P.init(e, n), e.def = n, e.type = n.type, Object.defineProperty(e, "_def", { value: n }), e.check = (...t) => e.clone(le(n, {
  checks: [
    ...n.checks ?? [],
    ...t.map((r) => typeof r == "function" ? { _zod: { check: r, def: { check: "custom" }, onattach: [] } } : r)
  ]
})), e.clone = (t, r) => ee(e, t, r), e.brand = () => e, e.register = ((t, r) => (t.add(e, r), e)), e.parse = (t, r) => lm(e, t, r, { callee: e.parse }), e.safeParse = (t, r) => dm(e, t, r), e.parseAsync = async (t, r) => fm(e, t, r, { callee: e.parseAsync }), e.safeParseAsync = async (t, r) => pm(e, t, r), e.spa = e.safeParseAsync, e.encode = (t, r) => hm(e, t, r), e.decode = (t, r) => mm(e, t, r), e.encodeAsync = async (t, r) => _m(e, t, r), e.decodeAsync = async (t, r) => gm(e, t, r), e.safeEncode = (t, r) => vm(e, t, r), e.safeDecode = (t, r) => $m(e, t, r), e.safeEncodeAsync = async (t, r) => bm(e, t, r), e.safeDecodeAsync = async (t, r) => zm(e, t, r), e.refine = (t, r) => e.check(m_(t, r)), e.superRefine = (t) => e.check(__(t)), e.overwrite = (t) => e.check(Ce(t)), e.optional = () => uo(e), e.nullable = () => co(e), e.nullish = () => uo(co(e)), e.nonoptional = (t) => c_(e, t), e.array = () => Gm(e), e.or = (t) => qm([e, t]), e.and = (t) => Hm(e, t), e.transform = (t) => ao(e, t_(t)), e.default = (t) => i_(e, t), e.prefault = (t) => u_(e, t), e.catch = (t) => l_(e, t), e.pipe = (t) => ao(e, t), e.readonly = () => p_(e), e.describe = (t) => {
  const r = e.clone();
  return Be.add(r, { description: t }), r;
}, Object.defineProperty(e, "description", {
  get() {
    return Be.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...t) => {
  if (t.length === 0)
    return Be.get(e);
  const r = e.clone();
  return Be.add(r, t[0]), r;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), ca = /* @__PURE__ */ p("_ZodString", (e, n) => {
  Tr.init(e, n), j.init(e, n);
  const t = e._zod.bag;
  e.format = t.format ?? null, e.minLength = t.minimum ?? null, e.maxLength = t.maximum ?? null, e.regex = (...r) => e.check(Mh(...r)), e.includes = (...r) => e.check(Bh(...r)), e.startsWith = (...r) => e.check(Jh(...r)), e.endsWith = (...r) => e.check(Wh(...r)), e.min = (...r) => e.check(rn(...r)), e.max = (...r) => e.check(sa(...r)), e.length = (...r) => e.check(ua(...r)), e.nonempty = (...r) => e.check(rn(1, ...r)), e.lowercase = (r) => e.check(Lh(r)), e.uppercase = (r) => e.check(Vh(r)), e.trim = () => e.check(Kh()), e.normalize = (...r) => e.check(Gh(...r)), e.toLowerCase = () => e.check(Yh()), e.toUpperCase = () => e.check(qh());
}), ym = /* @__PURE__ */ p("ZodString", (e, n) => {
  Tr.init(e, n), ca.init(e, n), e.email = (t) => e.check(lh(wm, t)), e.url = (t) => e.check(mh(Zm, t)), e.jwt = (t) => e.check(Ah(Fm, t)), e.emoji = (t) => e.check(_h(km, t)), e.guid = (t) => e.check(eo(oo, t)), e.uuid = (t) => e.check(fh(Je, t)), e.uuidv4 = (t) => e.check(dh(Je, t)), e.uuidv6 = (t) => e.check(ph(Je, t)), e.uuidv7 = (t) => e.check(hh(Je, t)), e.nanoid = (t) => e.check(gh(Im, t)), e.guid = (t) => e.check(eo(oo, t)), e.cuid = (t) => e.check(vh(Em, t)), e.cuid2 = (t) => e.check($h(Sm, t)), e.ulid = (t) => e.check(bh(Tm, t)), e.base64 = (t) => e.check(Eh(Dm, t)), e.base64url = (t) => e.check(Sh(Cm, t)), e.xid = (t) => e.check(zh(Am, t)), e.ksuid = (t) => e.check(yh(Om, t)), e.ipv4 = (t) => e.check(wh(Pm, t)), e.ipv6 = (t) => e.check(Zh(xm, t)), e.cidrv4 = (t) => e.check(kh(Nm, t)), e.cidrv6 = (t) => e.check(Ih(jm, t)), e.e164 = (t) => e.check(Th(Rm, t)), e.datetime = (t) => e.check(tm(t)), e.date = (t) => e.check(om(t)), e.time = (t) => e.check(sm(t)), e.duration = (t) => e.check(cm(t));
});
function w_(e) {
  return ah(ym, e);
}
const x = /* @__PURE__ */ p("ZodStringFormat", (e, n) => {
  O.init(e, n), ca.init(e, n);
}), wm = /* @__PURE__ */ p("ZodEmail", (e, n) => {
  _p.init(e, n), x.init(e, n);
}), oo = /* @__PURE__ */ p("ZodGUID", (e, n) => {
  hp.init(e, n), x.init(e, n);
}), Je = /* @__PURE__ */ p("ZodUUID", (e, n) => {
  mp.init(e, n), x.init(e, n);
}), Zm = /* @__PURE__ */ p("ZodURL", (e, n) => {
  gp.init(e, n), x.init(e, n);
}), km = /* @__PURE__ */ p("ZodEmoji", (e, n) => {
  vp.init(e, n), x.init(e, n);
}), Im = /* @__PURE__ */ p("ZodNanoID", (e, n) => {
  $p.init(e, n), x.init(e, n);
}), Em = /* @__PURE__ */ p("ZodCUID", (e, n) => {
  bp.init(e, n), x.init(e, n);
}), Sm = /* @__PURE__ */ p("ZodCUID2", (e, n) => {
  zp.init(e, n), x.init(e, n);
}), Tm = /* @__PURE__ */ p("ZodULID", (e, n) => {
  yp.init(e, n), x.init(e, n);
}), Am = /* @__PURE__ */ p("ZodXID", (e, n) => {
  wp.init(e, n), x.init(e, n);
}), Om = /* @__PURE__ */ p("ZodKSUID", (e, n) => {
  Zp.init(e, n), x.init(e, n);
}), Pm = /* @__PURE__ */ p("ZodIPv4", (e, n) => {
  Tp.init(e, n), x.init(e, n);
}), xm = /* @__PURE__ */ p("ZodIPv6", (e, n) => {
  Ap.init(e, n), x.init(e, n);
}), Nm = /* @__PURE__ */ p("ZodCIDRv4", (e, n) => {
  Op.init(e, n), x.init(e, n);
}), jm = /* @__PURE__ */ p("ZodCIDRv6", (e, n) => {
  Pp.init(e, n), x.init(e, n);
}), Dm = /* @__PURE__ */ p("ZodBase64", (e, n) => {
  xp.init(e, n), x.init(e, n);
}), Cm = /* @__PURE__ */ p("ZodBase64URL", (e, n) => {
  jp.init(e, n), x.init(e, n);
}), Rm = /* @__PURE__ */ p("ZodE164", (e, n) => {
  Dp.init(e, n), x.init(e, n);
}), Fm = /* @__PURE__ */ p("ZodJWT", (e, n) => {
  Rp.init(e, n), x.init(e, n);
}), aa = /* @__PURE__ */ p("ZodNumber", (e, n) => {
  ra.init(e, n), j.init(e, n), e.gt = (r, o) => e.check(to(r, o)), e.gte = (r, o) => e.check(En(r, o)), e.min = (r, o) => e.check(En(r, o)), e.lt = (r, o) => e.check(no(r, o)), e.lte = (r, o) => e.check(In(r, o)), e.max = (r, o) => e.check(In(r, o)), e.int = (r) => e.check(io(r)), e.safe = (r) => e.check(io(r)), e.positive = (r) => e.check(to(0, r)), e.nonnegative = (r) => e.check(En(0, r)), e.negative = (r) => e.check(no(0, r)), e.nonpositive = (r) => e.check(In(0, r)), e.multipleOf = (r, o) => e.check(ro(r, o)), e.step = (r, o) => e.check(ro(r, o)), e.finite = () => e;
  const t = e._zod.bag;
  e.minValue = Math.max(t.minimum ?? Number.NEGATIVE_INFINITY, t.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(t.maximum ?? Number.POSITIVE_INFINITY, t.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (t.format ?? "").includes("int") || Number.isSafeInteger(t.multipleOf ?? 0.5), e.isFinite = !0, e.format = t.format ?? null;
});
function Z_(e) {
  return jh(aa, e);
}
const Um = /* @__PURE__ */ p("ZodNumberFormat", (e, n) => {
  Fp.init(e, n), aa.init(e, n);
});
function io(e) {
  return Dh(Um, e);
}
const Mm = /* @__PURE__ */ p("ZodBoolean", (e, n) => {
  Up.init(e, n), j.init(e, n);
});
function k_(e) {
  return Ch(Mm, e);
}
const Lm = /* @__PURE__ */ p("ZodAny", (e, n) => {
  Mp.init(e, n), j.init(e, n);
});
function I_() {
  return Rh(Lm);
}
const Vm = /* @__PURE__ */ p("ZodUnknown", (e, n) => {
  Lp.init(e, n), j.init(e, n);
});
function so() {
  return Fh(Vm);
}
const Bm = /* @__PURE__ */ p("ZodNever", (e, n) => {
  Vp.init(e, n), j.init(e, n);
});
function Jm(e) {
  return Uh(Bm, e);
}
const Wm = /* @__PURE__ */ p("ZodArray", (e, n) => {
  Bp.init(e, n), j.init(e, n), e.element = n.element, e.min = (t, r) => e.check(rn(t, r)), e.nonempty = (t) => e.check(rn(1, t)), e.max = (t, r) => e.check(sa(t, r)), e.length = (t, r) => e.check(ua(t, r)), e.unwrap = () => e.element;
});
function Gm(e, n) {
  return Xh(Wm, e, n);
}
const Km = /* @__PURE__ */ p("ZodObject", (e, n) => {
  Wp.init(e, n), j.init(e, n), S(e, "shape", () => n.shape), e.keyof = () => e_(Object.keys(e._zod.def.shape)), e.catchall = (t) => e.clone({ ...e._zod.def, catchall: t }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: so() }), e.loose = () => e.clone({ ...e._zod.def, catchall: so() }), e.strict = () => e.clone({ ...e._zod.def, catchall: Jm() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (t) => ld(e, t), e.safeExtend = (t) => fd(e, t), e.merge = (t) => dd(e, t), e.pick = (t) => cd(e, t), e.omit = (t) => ad(e, t), e.partial = (...t) => pd(la, e, t[0]), e.required = (...t) => hd(fa, e, t[0]);
});
function E_(e, n) {
  const t = {
    type: "object",
    shape: e ?? {},
    ...b(n)
  };
  return new Km(t);
}
const Ym = /* @__PURE__ */ p("ZodUnion", (e, n) => {
  Gp.init(e, n), j.init(e, n), e.options = n.options;
});
function qm(e, n) {
  return new Ym({
    type: "union",
    options: e,
    ...b(n)
  });
}
const Xm = /* @__PURE__ */ p("ZodIntersection", (e, n) => {
  Kp.init(e, n), j.init(e, n);
});
function Hm(e, n) {
  return new Xm({
    type: "intersection",
    left: e,
    right: n
  });
}
const Qm = /* @__PURE__ */ p("ZodRecord", (e, n) => {
  Yp.init(e, n), j.init(e, n), e.keyType = n.keyType, e.valueType = n.valueType;
});
function S_(e, n, t) {
  return new Qm({
    type: "record",
    keyType: e,
    valueType: n,
    ...b(t)
  });
}
const Rn = /* @__PURE__ */ p("ZodEnum", (e, n) => {
  qp.init(e, n), j.init(e, n), e.enum = n.entries, e.options = Object.values(n.entries);
  const t = new Set(Object.keys(n.entries));
  e.extract = (r, o) => {
    const i = {};
    for (const s of r)
      if (t.has(s))
        i[s] = n.entries[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new Rn({
      ...n,
      checks: [],
      ...b(o),
      entries: i
    });
  }, e.exclude = (r, o) => {
    const i = { ...n.entries };
    for (const s of r)
      if (t.has(s))
        delete i[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new Rn({
      ...n,
      checks: [],
      ...b(o),
      entries: i
    });
  };
});
function e_(e, n) {
  const t = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
  return new Rn({
    type: "enum",
    entries: t,
    ...b(n)
  });
}
const n_ = /* @__PURE__ */ p("ZodTransform", (e, n) => {
  Xp.init(e, n), j.init(e, n), e._zod.parse = (t, r) => {
    if (r.direction === "backward")
      throw new Vc(e.constructor.name);
    t.addIssue = (i) => {
      if (typeof i == "string")
        t.issues.push(ke(i, t.value, n));
      else {
        const s = i;
        s.fatal && (s.continue = !1), s.code ?? (s.code = "custom"), s.input ?? (s.input = t.value), s.inst ?? (s.inst = e), t.issues.push(ke(s));
      }
    };
    const o = n.transform(t.value, t);
    return o instanceof Promise ? o.then((i) => (t.value = i, t)) : (t.value = o, t);
  };
});
function t_(e) {
  return new n_({
    type: "transform",
    transform: e
  });
}
const la = /* @__PURE__ */ p("ZodOptional", (e, n) => {
  Hp.init(e, n), j.init(e, n), e.unwrap = () => e._zod.def.innerType;
});
function uo(e) {
  return new la({
    type: "optional",
    innerType: e
  });
}
const r_ = /* @__PURE__ */ p("ZodNullable", (e, n) => {
  Qp.init(e, n), j.init(e, n), e.unwrap = () => e._zod.def.innerType;
});
function co(e) {
  return new r_({
    type: "nullable",
    innerType: e
  });
}
const o_ = /* @__PURE__ */ p("ZodDefault", (e, n) => {
  eh.init(e, n), j.init(e, n), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function i_(e, n) {
  return new o_({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof n == "function" ? n() : Wc(n);
    }
  });
}
const s_ = /* @__PURE__ */ p("ZodPrefault", (e, n) => {
  nh.init(e, n), j.init(e, n), e.unwrap = () => e._zod.def.innerType;
});
function u_(e, n) {
  return new s_({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof n == "function" ? n() : Wc(n);
    }
  });
}
const fa = /* @__PURE__ */ p("ZodNonOptional", (e, n) => {
  th.init(e, n), j.init(e, n), e.unwrap = () => e._zod.def.innerType;
});
function c_(e, n) {
  return new fa({
    type: "nonoptional",
    innerType: e,
    ...b(n)
  });
}
const a_ = /* @__PURE__ */ p("ZodCatch", (e, n) => {
  rh.init(e, n), j.init(e, n), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function l_(e, n) {
  return new a_({
    type: "catch",
    innerType: e,
    catchValue: typeof n == "function" ? n : () => n
  });
}
const f_ = /* @__PURE__ */ p("ZodPipe", (e, n) => {
  oh.init(e, n), j.init(e, n), e.in = n.in, e.out = n.out;
});
function ao(e, n) {
  return new f_({
    type: "pipe",
    in: e,
    out: n
    // ...util.normalizeParams(params),
  });
}
const d_ = /* @__PURE__ */ p("ZodReadonly", (e, n) => {
  ih.init(e, n), j.init(e, n), e.unwrap = () => e._zod.def.innerType;
});
function p_(e) {
  return new d_({
    type: "readonly",
    innerType: e
  });
}
const h_ = /* @__PURE__ */ p("ZodCustom", (e, n) => {
  sh.init(e, n), j.init(e, n);
});
function m_(e, n = {}) {
  return Hh(h_, e, n);
}
function __(e) {
  return Qh(e);
}
export {
  gn as A,
  Ze as B,
  dc as C,
  $a as D,
  go as E,
  Kf as F,
  E_ as G,
  k_ as H,
  Gm as I,
  S_ as J,
  Jm as K,
  w_ as L,
  Z_ as M,
  I_ as N,
  e_ as O,
  ve as P,
  y as Z,
  gr as _,
  $n as a,
  rc as b,
  zf as c,
  uc as d,
  bn as e,
  Lf as f,
  qf as g,
  bf as h,
  Cl as i,
  hr as j,
  _n as k,
  xf as l,
  Af as m,
  tc as n,
  kf as o,
  Wf as p,
  hn as q,
  vc as r,
  xn as s,
  $r as t,
  mr as u,
  Zc as v,
  kc as w,
  dr as x,
  Rc as y,
  y_ as z
};

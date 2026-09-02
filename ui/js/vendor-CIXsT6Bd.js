import { I as cn, i as Do } from "./vendor-pako-Bv9j8L58.js";
function g(e, t, r) {
  function n(a, c) {
    if (a._zod || Object.defineProperty(a, "_zod", {
      value: {
        def: c,
        constr: o,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), a._zod.traits.has(e))
      return;
    a._zod.traits.add(e), t(a, c);
    const u = o.prototype, h = Object.keys(u);
    for (let f = 0; f < h.length; f++) {
      const l = h[f];
      l in a || (a[l] = u[l].bind(a));
    }
  }
  const s = r?.Parent ?? Object;
  class i extends s {
  }
  Object.defineProperty(i, "name", { value: e });
  function o(a) {
    var c;
    const u = r?.Parent ? new i() : this;
    n(u, a), (c = u._zod).deferred ?? (c.deferred = []);
    for (const h of u._zod.deferred)
      h();
    return u;
  }
  return Object.defineProperty(o, "init", { value: n }), Object.defineProperty(o, Symbol.hasInstance, {
    value: (a) => r?.Parent && a instanceof r.Parent ? !0 : a?._zod?.traits?.has(e)
  }), Object.defineProperty(o, "name", { value: e }), o;
}
class st extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class rs extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const dr = {};
function ze(e) {
  return e && Object.assign(dr, e), dr;
}
function ns(e) {
  const t = Object.values(e).filter((n) => typeof n == "number");
  return Object.entries(e).filter(([n, s]) => t.indexOf(+n) === -1).map(([n, s]) => s);
}
function un(e, t = "|") {
  return e.map((r) => os(r)).join(t);
}
function pr(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function Pr(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function at(e) {
  return e == null;
}
function Zr(e) {
  const t = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}
function Mo(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = t.toString();
  let s = (n.split(".")[1] || "").length;
  if (s === 0 && /\d?e-\d?/.test(n)) {
    const c = n.match(/\d?e-(\d?)/);
    c?.[1] && (s = Number.parseInt(c[1]));
  }
  const i = r > s ? r : s, o = Number.parseInt(e.toFixed(i).replace(".", "")), a = Number.parseInt(t.toFixed(i).replace(".", ""));
  return o % a / 10 ** i;
}
const hn = /* @__PURE__ */ Symbol("evaluating");
function G(e, t, r) {
  let n;
  Object.defineProperty(e, t, {
    get() {
      if (n !== hn)
        return n === void 0 && (n = hn, n = r()), n;
    },
    set(s) {
      Object.defineProperty(e, t, {
        value: s
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function et(e, t, r) {
  Object.defineProperty(e, t, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Ke(...e) {
  const t = {};
  for (const r of e) {
    const n = Object.getOwnPropertyDescriptors(r);
    Object.assign(t, n);
  }
  return Object.defineProperties({}, t);
}
function fn(e) {
  return JSON.stringify(e);
}
function Fo(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const ss = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Zt(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Lo = Pr(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function it(e) {
  if (Zt(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const r = t.prototype;
  return !(Zt(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function is(e) {
  return it(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const mr = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function ot(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ve(e, t, r) {
  const n = new e._zod.constr(t ?? e._zod.def);
  return (!t || r?.parent) && (n._zod.parent = e), n;
}
function S(e) {
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
function os(e) {
  return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function Bo(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const jo = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Vo(e, t) {
  const r = e._zod.def, n = r.checks;
  if (n && n.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const i = Ke(e._zod.def, {
    get shape() {
      const o = {};
      for (const a in t) {
        if (!(a in r.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        t[a] && (o[a] = r.shape[a]);
      }
      return et(this, "shape", o), o;
    },
    checks: []
  });
  return Ve(e, i);
}
function qo(e, t) {
  const r = e._zod.def, n = r.checks;
  if (n && n.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const i = Ke(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape };
      for (const a in t) {
        if (!(a in r.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        t[a] && delete o[a];
      }
      return et(this, "shape", o), o;
    },
    checks: []
  });
  return Ve(e, i);
}
function Ho(e, t) {
  if (!it(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const r = e._zod.def.checks;
  if (r && r.length > 0) {
    const i = e._zod.def.shape;
    for (const o in t)
      if (Object.getOwnPropertyDescriptor(i, o) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const s = Ke(e._zod.def, {
    get shape() {
      const i = { ...e._zod.def.shape, ...t };
      return et(this, "shape", i), i;
    }
  });
  return Ve(e, s);
}
function Wo(e, t) {
  if (!it(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const r = Ke(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape, ...t };
      return et(this, "shape", n), n;
    }
  });
  return Ve(e, r);
}
function Jo(e, t) {
  const r = Ke(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape, ...t._zod.def.shape };
      return et(this, "shape", n), n;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return Ve(e, r);
}
function Yo(e, t, r) {
  const s = t._zod.def.checks;
  if (s && s.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const o = Ke(t._zod.def, {
    get shape() {
      const a = t._zod.def.shape, c = { ...a };
      if (r)
        for (const u in r) {
          if (!(u in a))
            throw new Error(`Unrecognized key: "${u}"`);
          r[u] && (c[u] = e ? new e({
            type: "optional",
            innerType: a[u]
          }) : a[u]);
        }
      else
        for (const u in a)
          c[u] = e ? new e({
            type: "optional",
            innerType: a[u]
          }) : a[u];
      return et(this, "shape", c), c;
    },
    checks: []
  });
  return Ve(t, o);
}
function Ko(e, t, r) {
  const n = Ke(t._zod.def, {
    get shape() {
      const s = t._zod.def.shape, i = { ...s };
      if (r)
        for (const o in r) {
          if (!(o in i))
            throw new Error(`Unrecognized key: "${o}"`);
          r[o] && (i[o] = new e({
            type: "nonoptional",
            innerType: s[o]
          }));
        }
      else
        for (const o in s)
          i[o] = new e({
            type: "nonoptional",
            innerType: s[o]
          });
      return et(this, "shape", i), i;
    }
  });
  return Ve(t, n);
}
function rt(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let r = t; r < e.issues.length; r++)
    if (e.issues[r]?.continue !== !0)
      return !0;
  return !1;
}
function je(e, t) {
  return t.map((r) => {
    var n;
    return (n = r).path ?? (n.path = []), r.path.unshift(e), r;
  });
}
function Ot(e) {
  return typeof e == "string" ? e : e?.message;
}
function Me(e, t, r) {
  const n = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const s = Ot(e.inst?._zod.def?.error?.(e)) ?? Ot(t?.error?.(e)) ?? Ot(r.customError?.(e)) ?? Ot(r.localeError?.(e)) ?? "Invalid input";
    n.message = s;
  }
  return delete n.inst, delete n.continue, t?.reportInput || delete n.input, n;
}
function Dr(e) {
  return e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof File ? "file" : "unknown";
}
function Mr(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function Xo(e) {
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
function vt(...e) {
  const [t, r, n] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: r,
    inst: n
  } : { ...t };
}
const as = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, pr, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, cs = g("$ZodError", as), us = g("$ZodError", as, { Parent: Error });
function hs(e, t = (r) => r.message) {
  const r = {}, n = [];
  for (const s of e.issues)
    s.path.length > 0 ? (r[s.path[0]] = r[s.path[0]] || [], r[s.path[0]].push(t(s))) : n.push(t(s));
  return { formErrors: n, fieldErrors: r };
}
function fs(e, t = (r) => r.message) {
  const r = { _errors: [] }, n = (s) => {
    for (const i of s.issues)
      if (i.code === "invalid_union" && i.errors.length)
        i.errors.map((o) => n({ issues: o }));
      else if (i.code === "invalid_key")
        n({ issues: i.issues });
      else if (i.code === "invalid_element")
        n({ issues: i.issues });
      else if (i.path.length === 0)
        r._errors.push(t(i));
      else {
        let o = r, a = 0;
        for (; a < i.path.length; ) {
          const c = i.path[a];
          a === i.path.length - 1 ? (o[c] = o[c] || { _errors: [] }, o[c]._errors.push(t(i))) : o[c] = o[c] || { _errors: [] }, o = o[c], a++;
        }
      }
  };
  return n(e), r;
}
const Fr = (e) => (t, r, n, s) => {
  const i = n ? Object.assign(n, { async: !1 }) : { async: !1 }, o = t._zod.run({ value: r, issues: [] }, i);
  if (o instanceof Promise)
    throw new st();
  if (o.issues.length) {
    const a = new (s?.Err ?? e)(o.issues.map((c) => Me(c, i, ze())));
    throw ss(a, s?.callee), a;
  }
  return o.value;
}, Lr = (e) => async (t, r, n, s) => {
  const i = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let o = t._zod.run({ value: r, issues: [] }, i);
  if (o instanceof Promise && (o = await o), o.issues.length) {
    const a = new (s?.Err ?? e)(o.issues.map((c) => Me(c, i, ze())));
    throw ss(a, s?.callee), a;
  }
  return o.value;
}, jt = (e) => (t, r, n) => {
  const s = n ? { ...n, async: !1 } : { async: !1 }, i = t._zod.run({ value: r, issues: [] }, s);
  if (i instanceof Promise)
    throw new st();
  return i.issues.length ? {
    success: !1,
    error: new (e ?? cs)(i.issues.map((o) => Me(o, s, ze())))
  } : { success: !0, data: i.value };
}, Go = /* @__PURE__ */ jt(us), Vt = (e) => async (t, r, n) => {
  const s = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let i = t._zod.run({ value: r, issues: [] }, s);
  return i instanceof Promise && (i = await i), i.issues.length ? {
    success: !1,
    error: new e(i.issues.map((o) => Me(o, s, ze())))
  } : { success: !0, data: i.value };
}, Qo = /* @__PURE__ */ Vt(us), ea = (e) => (t, r, n) => {
  const s = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Fr(e)(t, r, s);
}, ta = (e) => (t, r, n) => Fr(e)(t, r, n), ra = (e) => async (t, r, n) => {
  const s = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Lr(e)(t, r, s);
}, na = (e) => async (t, r, n) => Lr(e)(t, r, n), sa = (e) => (t, r, n) => {
  const s = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return jt(e)(t, r, s);
}, ia = (e) => (t, r, n) => jt(e)(t, r, n), oa = (e) => async (t, r, n) => {
  const s = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Vt(e)(t, r, s);
}, aa = (e) => async (t, r, n) => Vt(e)(t, r, n), ca = /^[cC][^\s-]{8,}$/, ua = /^[0-9a-z]+$/, ha = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, fa = /^[0-9a-vA-V]{20}$/, la = /^[A-Za-z0-9]{27}$/, da = /^[a-zA-Z0-9_-]{21}$/, pa = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, ma = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, ln = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, ga = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, _a = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function ya() {
  return new RegExp(_a, "u");
}
const va = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ba = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, wa = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, ka = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Ea = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, ls = /^[A-Za-z0-9_-]*$/, Oa = /^\+[1-9]\d{6,14}$/, ds = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Ta = /* @__PURE__ */ new RegExp(`^${ds}$`);
function ps(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Ca(e) {
  return new RegExp(`^${ps(e)}$`);
}
function Aa(e) {
  const t = ps({ precision: e.precision }), r = ["Z"];
  e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const n = `${t}(?:${r.join("|")})`;
  return new RegExp(`^${ds}T(?:${n})$`);
}
const Na = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, xa = /^-?\d+$/, ms = /^-?\d+(?:\.\d+)?$/, za = /^(?:true|false)$/i, Sa = /^null$/i, Ra = /^undefined$/i, Ia = /^[^A-Z]*$/, $a = /^[^a-z]*$/, ye = /* @__PURE__ */ g("$ZodCheck", (e, t) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
}), gs = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, _s = /* @__PURE__ */ g("$ZodCheckLessThan", (e, t) => {
  ye.init(e, t);
  const r = gs[typeof t.value];
  e._zod.onattach.push((n) => {
    const s = n._zod.bag, i = (t.inclusive ? s.maximum : s.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < i && (t.inclusive ? s.maximum = t.value : s.exclusiveMaximum = t.value);
  }), e._zod.check = (n) => {
    (t.inclusive ? n.value <= t.value : n.value < t.value) || n.issues.push({
      origin: r,
      code: "too_big",
      maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
      input: n.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), ys = /* @__PURE__ */ g("$ZodCheckGreaterThan", (e, t) => {
  ye.init(e, t);
  const r = gs[typeof t.value];
  e._zod.onattach.push((n) => {
    const s = n._zod.bag, i = (t.inclusive ? s.minimum : s.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > i && (t.inclusive ? s.minimum = t.value : s.exclusiveMinimum = t.value);
  }), e._zod.check = (n) => {
    (t.inclusive ? n.value >= t.value : n.value > t.value) || n.issues.push({
      origin: r,
      code: "too_small",
      minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
      input: n.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), Ua = /* @__PURE__ */ g("$ZodCheckMultipleOf", (e, t) => {
  ye.init(e, t), e._zod.onattach.push((r) => {
    var n;
    (n = r._zod.bag).multipleOf ?? (n.multipleOf = t.value);
  }), e._zod.check = (r) => {
    if (typeof r.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof r.value == "bigint" ? r.value % t.value === BigInt(0) : Mo(r.value, t.value) === 0) || r.issues.push({
      origin: typeof r.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Pa = /* @__PURE__ */ g("$ZodCheckNumberFormat", (e, t) => {
  ye.init(e, t), t.format = t.format || "float64";
  const r = t.format?.includes("int"), n = r ? "int" : "number", [s, i] = jo[t.format];
  e._zod.onattach.push((o) => {
    const a = o._zod.bag;
    a.format = t.format, a.minimum = s, a.maximum = i, r && (a.pattern = xa);
  }), e._zod.check = (o) => {
    const a = o.value;
    if (r) {
      if (!Number.isInteger(a)) {
        o.issues.push({
          expected: n,
          format: t.format,
          code: "invalid_type",
          continue: !1,
          input: a,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(a)) {
        a > 0 ? o.issues.push({
          input: a,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: n,
          inclusive: !0,
          continue: !t.abort
        }) : o.issues.push({
          input: a,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: n,
          inclusive: !0,
          continue: !t.abort
        });
        return;
      }
    }
    a < s && o.issues.push({
      origin: "number",
      input: a,
      code: "too_small",
      minimum: s,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), a > i && o.issues.push({
      origin: "number",
      input: a,
      code: "too_big",
      maximum: i,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    });
  };
}), Za = /* @__PURE__ */ g("$ZodCheckMaxSize", (e, t) => {
  var r;
  ye.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const s = n.value;
    return !at(s) && s.size !== void 0;
  }), e._zod.onattach.push((n) => {
    const s = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < s && (n._zod.bag.maximum = t.maximum);
  }), e._zod.check = (n) => {
    const s = n.value;
    s.size <= t.maximum || n.issues.push({
      origin: Dr(s),
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: s,
      inst: e,
      continue: !t.abort
    });
  };
}), Da = /* @__PURE__ */ g("$ZodCheckMinSize", (e, t) => {
  var r;
  ye.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const s = n.value;
    return !at(s) && s.size !== void 0;
  }), e._zod.onattach.push((n) => {
    const s = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > s && (n._zod.bag.minimum = t.minimum);
  }), e._zod.check = (n) => {
    const s = n.value;
    s.size >= t.minimum || n.issues.push({
      origin: Dr(s),
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: s,
      inst: e,
      continue: !t.abort
    });
  };
}), Ma = /* @__PURE__ */ g("$ZodCheckSizeEquals", (e, t) => {
  var r;
  ye.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const s = n.value;
    return !at(s) && s.size !== void 0;
  }), e._zod.onattach.push((n) => {
    const s = n._zod.bag;
    s.minimum = t.size, s.maximum = t.size, s.size = t.size;
  }), e._zod.check = (n) => {
    const s = n.value, i = s.size;
    if (i === t.size)
      return;
    const o = i > t.size;
    n.issues.push({
      origin: Dr(s),
      ...o ? { code: "too_big", maximum: t.size } : { code: "too_small", minimum: t.size },
      inclusive: !0,
      exact: !0,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Fa = /* @__PURE__ */ g("$ZodCheckMaxLength", (e, t) => {
  var r;
  ye.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const s = n.value;
    return !at(s) && s.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const s = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < s && (n._zod.bag.maximum = t.maximum);
  }), e._zod.check = (n) => {
    const s = n.value;
    if (s.length <= t.maximum)
      return;
    const o = Mr(s);
    n.issues.push({
      origin: o,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: s,
      inst: e,
      continue: !t.abort
    });
  };
}), La = /* @__PURE__ */ g("$ZodCheckMinLength", (e, t) => {
  var r;
  ye.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const s = n.value;
    return !at(s) && s.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const s = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > s && (n._zod.bag.minimum = t.minimum);
  }), e._zod.check = (n) => {
    const s = n.value;
    if (s.length >= t.minimum)
      return;
    const o = Mr(s);
    n.issues.push({
      origin: o,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: s,
      inst: e,
      continue: !t.abort
    });
  };
}), Ba = /* @__PURE__ */ g("$ZodCheckLengthEquals", (e, t) => {
  var r;
  ye.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const s = n.value;
    return !at(s) && s.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const s = n._zod.bag;
    s.minimum = t.length, s.maximum = t.length, s.length = t.length;
  }), e._zod.check = (n) => {
    const s = n.value, i = s.length;
    if (i === t.length)
      return;
    const o = Mr(s), a = i > t.length;
    n.issues.push({
      origin: o,
      ...a ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), qt = /* @__PURE__ */ g("$ZodCheckStringFormat", (e, t) => {
  var r, n;
  ye.init(e, t), e._zod.onattach.push((s) => {
    const i = s._zod.bag;
    i.format = t.format, t.pattern && (i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(t.pattern));
  }), t.pattern ? (r = e._zod).check ?? (r.check = (s) => {
    t.pattern.lastIndex = 0, !t.pattern.test(s.value) && s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: s.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (n = e._zod).check ?? (n.check = () => {
  });
}), ja = /* @__PURE__ */ g("$ZodCheckRegex", (e, t) => {
  qt.init(e, t), e._zod.check = (r) => {
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
}), Va = /* @__PURE__ */ g("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = Ia), qt.init(e, t);
}), qa = /* @__PURE__ */ g("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = $a), qt.init(e, t);
}), Ha = /* @__PURE__ */ g("$ZodCheckIncludes", (e, t) => {
  ye.init(e, t);
  const r = ot(t.includes), n = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${r}` : r);
  t.pattern = n, e._zod.onattach.push((s) => {
    const i = s._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(n);
  }), e._zod.check = (s) => {
    s.value.includes(t.includes, t.position) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: s.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Wa = /* @__PURE__ */ g("$ZodCheckStartsWith", (e, t) => {
  ye.init(e, t);
  const r = new RegExp(`^${ot(t.prefix)}.*`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((n) => {
    const s = n._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(r);
  }), e._zod.check = (n) => {
    n.value.startsWith(t.prefix) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ja = /* @__PURE__ */ g("$ZodCheckEndsWith", (e, t) => {
  ye.init(e, t);
  const r = new RegExp(`.*${ot(t.suffix)}$`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((n) => {
    const s = n._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(r);
  }), e._zod.check = (n) => {
    n.value.endsWith(t.suffix) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ya = /* @__PURE__ */ g("$ZodCheckOverwrite", (e, t) => {
  ye.init(e, t), e._zod.check = (r) => {
    r.value = t.tx(r.value);
  };
});
class Ka {
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
    const n = t.split(`
`).filter((o) => o), s = Math.min(...n.map((o) => o.length - o.trimStart().length)), i = n.map((o) => o.slice(s)).map((o) => " ".repeat(this.indent * 2) + o);
    for (const o of i)
      this.content.push(o);
  }
  compile() {
    const t = Function, r = this?.args, s = [...(this?.content ?? [""]).map((i) => `  ${i}`)];
    return new t(...r, s.join(`
`));
  }
}
const Xa = {
  major: 4,
  minor: 3,
  patch: 6
}, te = /* @__PURE__ */ g("$ZodType", (e, t) => {
  var r;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Xa;
  const n = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && n.unshift(e);
  for (const s of n)
    for (const i of s._zod.onattach)
      i(e);
  if (n.length === 0)
    (r = e._zod).deferred ?? (r.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const s = (o, a, c) => {
      let u = rt(o), h;
      for (const f of a) {
        if (f._zod.def.when) {
          if (!f._zod.def.when(o))
            continue;
        } else if (u)
          continue;
        const l = o.issues.length, d = f._zod.check(o);
        if (d instanceof Promise && c?.async === !1)
          throw new st();
        if (h || d instanceof Promise)
          h = (h ?? Promise.resolve()).then(async () => {
            await d, o.issues.length !== l && (u || (u = rt(o, l)));
          });
        else {
          if (o.issues.length === l)
            continue;
          u || (u = rt(o, l));
        }
      }
      return h ? h.then(() => o) : o;
    }, i = (o, a, c) => {
      if (rt(o))
        return o.aborted = !0, o;
      const u = s(a, n, c);
      if (u instanceof Promise) {
        if (c.async === !1)
          throw new st();
        return u.then((h) => e._zod.parse(h, c));
      }
      return e._zod.parse(u, c);
    };
    e._zod.run = (o, a) => {
      if (a.skipChecks)
        return e._zod.parse(o, a);
      if (a.direction === "backward") {
        const u = e._zod.parse({ value: o.value, issues: [] }, { ...a, skipChecks: !0 });
        return u instanceof Promise ? u.then((h) => i(h, o, a)) : i(u, o, a);
      }
      const c = e._zod.parse(o, a);
      if (c instanceof Promise) {
        if (a.async === !1)
          throw new st();
        return c.then((u) => s(u, n, a));
      }
      return s(c, n, a);
    };
  }
  G(e, "~standard", () => ({
    validate: (s) => {
      try {
        const i = Go(e, s);
        return i.success ? { value: i.data } : { issues: i.error?.issues };
      } catch {
        return Qo(e, s).then((o) => o.success ? { value: o.data } : { issues: o.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), Br = /* @__PURE__ */ g("$ZodString", (e, t) => {
  te.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? Na(e._zod.bag), e._zod.parse = (r, n) => {
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
}), ue = /* @__PURE__ */ g("$ZodStringFormat", (e, t) => {
  qt.init(e, t), Br.init(e, t);
}), Ga = /* @__PURE__ */ g("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = ma), ue.init(e, t);
}), Qa = /* @__PURE__ */ g("$ZodUUID", (e, t) => {
  if (t.version) {
    const n = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (n === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = ln(n));
  } else
    t.pattern ?? (t.pattern = ln());
  ue.init(e, t);
}), ec = /* @__PURE__ */ g("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = ga), ue.init(e, t);
}), tc = /* @__PURE__ */ g("$ZodURL", (e, t) => {
  ue.init(e, t), e._zod.check = (r) => {
    try {
      const n = r.value.trim(), s = new URL(n);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(s.hostname) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(s.protocol.endsWith(":") ? s.protocol.slice(0, -1) : s.protocol) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? r.value = s.href : r.value = n;
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
}), rc = /* @__PURE__ */ g("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = ya()), ue.init(e, t);
}), nc = /* @__PURE__ */ g("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = da), ue.init(e, t);
}), sc = /* @__PURE__ */ g("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = ca), ue.init(e, t);
}), ic = /* @__PURE__ */ g("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = ua), ue.init(e, t);
}), oc = /* @__PURE__ */ g("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = ha), ue.init(e, t);
}), ac = /* @__PURE__ */ g("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = fa), ue.init(e, t);
}), cc = /* @__PURE__ */ g("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = la), ue.init(e, t);
}), uc = /* @__PURE__ */ g("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = Aa(t)), ue.init(e, t);
}), hc = /* @__PURE__ */ g("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = Ta), ue.init(e, t);
}), fc = /* @__PURE__ */ g("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = Ca(t)), ue.init(e, t);
}), lc = /* @__PURE__ */ g("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = pa), ue.init(e, t);
}), dc = /* @__PURE__ */ g("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = va), ue.init(e, t), e._zod.bag.format = "ipv4";
}), pc = /* @__PURE__ */ g("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = ba), ue.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (r) => {
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
}), mc = /* @__PURE__ */ g("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = wa), ue.init(e, t);
}), gc = /* @__PURE__ */ g("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = ka), ue.init(e, t), e._zod.check = (r) => {
    const n = r.value.split("/");
    try {
      if (n.length !== 2)
        throw new Error();
      const [s, i] = n;
      if (!i)
        throw new Error();
      const o = Number(i);
      if (`${o}` !== i)
        throw new Error();
      if (o < 0 || o > 128)
        throw new Error();
      new URL(`http://[${s}]`);
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
function vs(e) {
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
const _c = /* @__PURE__ */ g("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = Ea), ue.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (r) => {
    vs(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function yc(e) {
  if (!ls.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (n) => n === "-" ? "+" : "/"), r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return vs(r);
}
const vc = /* @__PURE__ */ g("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = ls), ue.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (r) => {
    yc(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), bc = /* @__PURE__ */ g("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = Oa), ue.init(e, t);
});
function wc(e, t = null) {
  try {
    const r = e.split(".");
    if (r.length !== 3)
      return !1;
    const [n] = r;
    if (!n)
      return !1;
    const s = JSON.parse(atob(n));
    return !("typ" in s && s?.typ !== "JWT" || !s.alg || t && (!("alg" in s) || s.alg !== t));
  } catch {
    return !1;
  }
}
const kc = /* @__PURE__ */ g("$ZodJWT", (e, t) => {
  ue.init(e, t), e._zod.check = (r) => {
    wc(r.value, t.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), bs = /* @__PURE__ */ g("$ZodNumber", (e, t) => {
  te.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? ms, e._zod.parse = (r, n) => {
    if (t.coerce)
      try {
        r.value = Number(r.value);
      } catch {
      }
    const s = r.value;
    if (typeof s == "number" && !Number.isNaN(s) && Number.isFinite(s))
      return r;
    const i = typeof s == "number" ? Number.isNaN(s) ? "NaN" : Number.isFinite(s) ? void 0 : "Infinity" : void 0;
    return r.issues.push({
      expected: "number",
      code: "invalid_type",
      input: s,
      inst: e,
      ...i ? { received: i } : {}
    }), r;
  };
}), Ec = /* @__PURE__ */ g("$ZodNumberFormat", (e, t) => {
  Pa.init(e, t), bs.init(e, t);
}), Oc = /* @__PURE__ */ g("$ZodBoolean", (e, t) => {
  te.init(e, t), e._zod.pattern = za, e._zod.parse = (r, n) => {
    if (t.coerce)
      try {
        r.value = !!r.value;
      } catch {
      }
    const s = r.value;
    return typeof s == "boolean" || r.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: s,
      inst: e
    }), r;
  };
}), Tc = /* @__PURE__ */ g("$ZodUndefined", (e, t) => {
  te.init(e, t), e._zod.pattern = Ra, e._zod.values = /* @__PURE__ */ new Set([void 0]), e._zod.optin = "optional", e._zod.optout = "optional", e._zod.parse = (r, n) => {
    const s = r.value;
    return typeof s > "u" || r.issues.push({
      expected: "undefined",
      code: "invalid_type",
      input: s,
      inst: e
    }), r;
  };
}), Cc = /* @__PURE__ */ g("$ZodNull", (e, t) => {
  te.init(e, t), e._zod.pattern = Sa, e._zod.values = /* @__PURE__ */ new Set([null]), e._zod.parse = (r, n) => {
    const s = r.value;
    return s === null || r.issues.push({
      expected: "null",
      code: "invalid_type",
      input: s,
      inst: e
    }), r;
  };
}), Ac = /* @__PURE__ */ g("$ZodAny", (e, t) => {
  te.init(e, t), e._zod.parse = (r) => r;
}), Nc = /* @__PURE__ */ g("$ZodUnknown", (e, t) => {
  te.init(e, t), e._zod.parse = (r) => r;
}), xc = /* @__PURE__ */ g("$ZodNever", (e, t) => {
  te.init(e, t), e._zod.parse = (r, n) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: e
  }), r);
}), zc = /* @__PURE__ */ g("$ZodDate", (e, t) => {
  te.init(e, t), e._zod.parse = (r, n) => {
    if (t.coerce)
      try {
        r.value = new Date(r.value);
      } catch {
      }
    const s = r.value, i = s instanceof Date;
    return i && !Number.isNaN(s.getTime()) || r.issues.push({
      expected: "date",
      code: "invalid_type",
      input: s,
      ...i ? { received: "Invalid Date" } : {},
      inst: e
    }), r;
  };
});
function dn(e, t, r) {
  e.issues.length && t.issues.push(...je(r, e.issues)), t.value[r] = e.value;
}
const Sc = /* @__PURE__ */ g("$ZodArray", (e, t) => {
  te.init(e, t), e._zod.parse = (r, n) => {
    const s = r.value;
    if (!Array.isArray(s))
      return r.issues.push({
        expected: "array",
        code: "invalid_type",
        input: s,
        inst: e
      }), r;
    r.value = Array(s.length);
    const i = [];
    for (let o = 0; o < s.length; o++) {
      const a = s[o], c = t.element._zod.run({
        value: a,
        issues: []
      }, n);
      c instanceof Promise ? i.push(c.then((u) => dn(u, r, o))) : dn(c, r, o);
    }
    return i.length ? Promise.all(i).then(() => r) : r;
  };
});
function Dt(e, t, r, n, s) {
  if (e.issues.length) {
    if (s && !(r in n))
      return;
    t.issues.push(...je(r, e.issues));
  }
  e.value === void 0 ? r in n && (t.value[r] = void 0) : t.value[r] = e.value;
}
function ws(e) {
  const t = Object.keys(e.shape);
  for (const n of t)
    if (!e.shape?.[n]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${n}": expected a Zod schema`);
  const r = Bo(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(r)
  };
}
function ks(e, t, r, n, s, i) {
  const o = [], a = s.keySet, c = s.catchall._zod, u = c.def.type, h = c.optout === "optional";
  for (const f in t) {
    if (a.has(f))
      continue;
    if (u === "never") {
      o.push(f);
      continue;
    }
    const l = c.run({ value: t[f], issues: [] }, n);
    l instanceof Promise ? e.push(l.then((d) => Dt(d, r, f, t, h))) : Dt(l, r, f, t, h);
  }
  return o.length && r.issues.push({
    code: "unrecognized_keys",
    keys: o,
    input: t,
    inst: i
  }), e.length ? Promise.all(e).then(() => r) : r;
}
const Rc = /* @__PURE__ */ g("$ZodObject", (e, t) => {
  if (te.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    const a = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const c = { ...a };
        return Object.defineProperty(t, "shape", {
          value: c
        }), c;
      }
    });
  }
  const n = Pr(() => ws(t));
  G(e._zod, "propValues", () => {
    const a = t.shape, c = {};
    for (const u in a) {
      const h = a[u]._zod;
      if (h.values) {
        c[u] ?? (c[u] = /* @__PURE__ */ new Set());
        for (const f of h.values)
          c[u].add(f);
      }
    }
    return c;
  });
  const s = Zt, i = t.catchall;
  let o;
  e._zod.parse = (a, c) => {
    o ?? (o = n.value);
    const u = a.value;
    if (!s(u))
      return a.issues.push({
        expected: "object",
        code: "invalid_type",
        input: u,
        inst: e
      }), a;
    a.value = {};
    const h = [], f = o.shape;
    for (const l of o.keys) {
      const d = f[l], v = d._zod.optout === "optional", y = d._zod.run({ value: u[l], issues: [] }, c);
      y instanceof Promise ? h.push(y.then((E) => Dt(E, a, l, u, v))) : Dt(y, a, l, u, v);
    }
    return i ? ks(h, u, a, c, n.value, e) : h.length ? Promise.all(h).then(() => a) : a;
  };
}), Ic = /* @__PURE__ */ g("$ZodObjectJIT", (e, t) => {
  Rc.init(e, t);
  const r = e._zod.parse, n = Pr(() => ws(t)), s = (l) => {
    const d = new Ka(["shape", "payload", "ctx"]), v = n.value, y = (T) => {
      const A = fn(T);
      return `shape[${A}]._zod.run({ value: input[${A}], issues: [] }, ctx)`;
    };
    d.write("const input = payload.value;");
    const E = /* @__PURE__ */ Object.create(null);
    let R = 0;
    for (const T of v.keys)
      E[T] = `key_${R++}`;
    d.write("const newResult = {};");
    for (const T of v.keys) {
      const A = E[T], $ = fn(T), k = l[T]?._zod?.optout === "optional";
      d.write(`const ${A} = ${y(T)};`), k ? d.write(`
        if (${A}.issues.length) {
          if (${$} in input) {
            payload.issues = payload.issues.concat(${A}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${$}, ...iss.path] : [${$}]
            })));
          }
        }
        
        if (${A}.value === undefined) {
          if (${$} in input) {
            newResult[${$}] = undefined;
          }
        } else {
          newResult[${$}] = ${A}.value;
        }
        
      `) : d.write(`
        if (${A}.issues.length) {
          payload.issues = payload.issues.concat(${A}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${$}, ...iss.path] : [${$}]
          })));
        }
        
        if (${A}.value === undefined) {
          if (${$} in input) {
            newResult[${$}] = undefined;
          }
        } else {
          newResult[${$}] = ${A}.value;
        }
        
      `);
    }
    d.write("payload.value = newResult;"), d.write("return payload;");
    const W = d.compile();
    return (T, A) => W(l, T, A);
  };
  let i;
  const o = Zt, a = !dr.jitless, u = a && Lo.value, h = t.catchall;
  let f;
  e._zod.parse = (l, d) => {
    f ?? (f = n.value);
    const v = l.value;
    return o(v) ? a && u && d?.async === !1 && d.jitless !== !0 ? (i || (i = s(t.shape)), l = i(l, d), h ? ks([], v, l, d, f, e) : l) : r(l, d) : (l.issues.push({
      expected: "object",
      code: "invalid_type",
      input: v,
      inst: e
    }), l);
  };
});
function pn(e, t, r, n) {
  for (const i of e)
    if (i.issues.length === 0)
      return t.value = i.value, t;
  const s = e.filter((i) => !rt(i));
  return s.length === 1 ? (t.value = s[0].value, s[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: r,
    errors: e.map((i) => i.issues.map((o) => Me(o, n, ze())))
  }), t);
}
const $c = /* @__PURE__ */ g("$ZodUnion", (e, t) => {
  te.init(e, t), G(e._zod, "optin", () => t.options.some((s) => s._zod.optin === "optional") ? "optional" : void 0), G(e._zod, "optout", () => t.options.some((s) => s._zod.optout === "optional") ? "optional" : void 0), G(e._zod, "values", () => {
    if (t.options.every((s) => s._zod.values))
      return new Set(t.options.flatMap((s) => Array.from(s._zod.values)));
  }), G(e._zod, "pattern", () => {
    if (t.options.every((s) => s._zod.pattern)) {
      const s = t.options.map((i) => i._zod.pattern);
      return new RegExp(`^(${s.map((i) => Zr(i.source)).join("|")})$`);
    }
  });
  const r = t.options.length === 1, n = t.options[0]._zod.run;
  e._zod.parse = (s, i) => {
    if (r)
      return n(s, i);
    let o = !1;
    const a = [];
    for (const c of t.options) {
      const u = c._zod.run({
        value: s.value,
        issues: []
      }, i);
      if (u instanceof Promise)
        a.push(u), o = !0;
      else {
        if (u.issues.length === 0)
          return u;
        a.push(u);
      }
    }
    return o ? Promise.all(a).then((c) => pn(c, s, e, i)) : pn(a, s, e, i);
  };
}), Uc = /* @__PURE__ */ g("$ZodIntersection", (e, t) => {
  te.init(e, t), e._zod.parse = (r, n) => {
    const s = r.value, i = t.left._zod.run({ value: s, issues: [] }, n), o = t.right._zod.run({ value: s, issues: [] }, n);
    return i instanceof Promise || o instanceof Promise ? Promise.all([i, o]).then(([c, u]) => mn(r, c, u)) : mn(r, i, o);
  };
});
function gr(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (it(e) && it(t)) {
    const r = Object.keys(t), n = Object.keys(e).filter((i) => r.indexOf(i) !== -1), s = { ...e, ...t };
    for (const i of n) {
      const o = gr(e[i], t[i]);
      if (!o.valid)
        return {
          valid: !1,
          mergeErrorPath: [i, ...o.mergeErrorPath]
        };
      s[i] = o.data;
    }
    return { valid: !0, data: s };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const r = [];
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = t[n], o = gr(s, i);
      if (!o.valid)
        return {
          valid: !1,
          mergeErrorPath: [n, ...o.mergeErrorPath]
        };
      r.push(o.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function mn(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  let s;
  for (const a of t.issues)
    if (a.code === "unrecognized_keys") {
      s ?? (s = a);
      for (const c of a.keys)
        n.has(c) || n.set(c, {}), n.get(c).l = !0;
    } else
      e.issues.push(a);
  for (const a of r.issues)
    if (a.code === "unrecognized_keys")
      for (const c of a.keys)
        n.has(c) || n.set(c, {}), n.get(c).r = !0;
    else
      e.issues.push(a);
  const i = [...n].filter(([, a]) => a.l && a.r).map(([a]) => a);
  if (i.length && s && e.issues.push({ ...s, keys: i }), rt(e))
    return e;
  const o = gr(t.value, r.value);
  if (!o.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
  return e.value = o.data, e;
}
const Pc = /* @__PURE__ */ g("$ZodTuple", (e, t) => {
  te.init(e, t);
  const r = t.items;
  e._zod.parse = (n, s) => {
    const i = n.value;
    if (!Array.isArray(i))
      return n.issues.push({
        input: i,
        inst: e,
        expected: "tuple",
        code: "invalid_type"
      }), n;
    n.value = [];
    const o = [], a = [...r].reverse().findIndex((h) => h._zod.optin !== "optional"), c = a === -1 ? 0 : r.length - a;
    if (!t.rest) {
      const h = i.length > r.length, f = i.length < c - 1;
      if (h || f)
        return n.issues.push({
          ...h ? { code: "too_big", maximum: r.length, inclusive: !0 } : { code: "too_small", minimum: r.length },
          input: i,
          inst: e,
          origin: "array"
        }), n;
    }
    let u = -1;
    for (const h of r) {
      if (u++, u >= i.length && u >= c)
        continue;
      const f = h._zod.run({
        value: i[u],
        issues: []
      }, s);
      f instanceof Promise ? o.push(f.then((l) => Tt(l, n, u))) : Tt(f, n, u);
    }
    if (t.rest) {
      const h = i.slice(r.length);
      for (const f of h) {
        u++;
        const l = t.rest._zod.run({
          value: f,
          issues: []
        }, s);
        l instanceof Promise ? o.push(l.then((d) => Tt(d, n, u))) : Tt(l, n, u);
      }
    }
    return o.length ? Promise.all(o).then(() => n) : n;
  };
});
function Tt(e, t, r) {
  e.issues.length && t.issues.push(...je(r, e.issues)), t.value[r] = e.value;
}
const Zc = /* @__PURE__ */ g("$ZodRecord", (e, t) => {
  te.init(e, t), e._zod.parse = (r, n) => {
    const s = r.value;
    if (!it(s))
      return r.issues.push({
        expected: "record",
        code: "invalid_type",
        input: s,
        inst: e
      }), r;
    const i = [], o = t.keyType._zod.values;
    if (o) {
      r.value = {};
      const a = /* @__PURE__ */ new Set();
      for (const u of o)
        if (typeof u == "string" || typeof u == "number" || typeof u == "symbol") {
          a.add(typeof u == "number" ? u.toString() : u);
          const h = t.valueType._zod.run({ value: s[u], issues: [] }, n);
          h instanceof Promise ? i.push(h.then((f) => {
            f.issues.length && r.issues.push(...je(u, f.issues)), r.value[u] = f.value;
          })) : (h.issues.length && r.issues.push(...je(u, h.issues)), r.value[u] = h.value);
        }
      let c;
      for (const u in s)
        a.has(u) || (c = c ?? [], c.push(u));
      c && c.length > 0 && r.issues.push({
        code: "unrecognized_keys",
        input: s,
        inst: e,
        keys: c
      });
    } else {
      r.value = {};
      for (const a of Reflect.ownKeys(s)) {
        if (a === "__proto__")
          continue;
        let c = t.keyType._zod.run({ value: a, issues: [] }, n);
        if (c instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (typeof a == "string" && ms.test(a) && c.issues.length) {
          const f = t.keyType._zod.run({ value: Number(a), issues: [] }, n);
          if (f instanceof Promise)
            throw new Error("Async schemas not supported in object keys currently");
          f.issues.length === 0 && (c = f);
        }
        if (c.issues.length) {
          t.mode === "loose" ? r.value[a] = s[a] : r.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: c.issues.map((f) => Me(f, n, ze())),
            input: a,
            path: [a],
            inst: e
          });
          continue;
        }
        const h = t.valueType._zod.run({ value: s[a], issues: [] }, n);
        h instanceof Promise ? i.push(h.then((f) => {
          f.issues.length && r.issues.push(...je(a, f.issues)), r.value[c.value] = f.value;
        })) : (h.issues.length && r.issues.push(...je(a, h.issues)), r.value[c.value] = h.value);
      }
    }
    return i.length ? Promise.all(i).then(() => r) : r;
  };
}), Dc = /* @__PURE__ */ g("$ZodMap", (e, t) => {
  te.init(e, t), e._zod.parse = (r, n) => {
    const s = r.value;
    if (!(s instanceof Map))
      return r.issues.push({
        expected: "map",
        code: "invalid_type",
        input: s,
        inst: e
      }), r;
    const i = [];
    r.value = /* @__PURE__ */ new Map();
    for (const [o, a] of s) {
      const c = t.keyType._zod.run({ value: o, issues: [] }, n), u = t.valueType._zod.run({ value: a, issues: [] }, n);
      c instanceof Promise || u instanceof Promise ? i.push(Promise.all([c, u]).then(([h, f]) => {
        gn(h, f, r, o, s, e, n);
      })) : gn(c, u, r, o, s, e, n);
    }
    return i.length ? Promise.all(i).then(() => r) : r;
  };
});
function gn(e, t, r, n, s, i, o) {
  e.issues.length && (mr.has(typeof n) ? r.issues.push(...je(n, e.issues)) : r.issues.push({
    code: "invalid_key",
    origin: "map",
    input: s,
    inst: i,
    issues: e.issues.map((a) => Me(a, o, ze()))
  })), t.issues.length && (mr.has(typeof n) ? r.issues.push(...je(n, t.issues)) : r.issues.push({
    origin: "map",
    code: "invalid_element",
    input: s,
    inst: i,
    key: n,
    issues: t.issues.map((a) => Me(a, o, ze()))
  })), r.value.set(e.value, t.value);
}
const Mc = /* @__PURE__ */ g("$ZodEnum", (e, t) => {
  te.init(e, t);
  const r = ns(t.entries), n = new Set(r);
  e._zod.values = n, e._zod.pattern = new RegExp(`^(${r.filter((s) => mr.has(typeof s)).map((s) => typeof s == "string" ? ot(s) : s.toString()).join("|")})$`), e._zod.parse = (s, i) => {
    const o = s.value;
    return n.has(o) || s.issues.push({
      code: "invalid_value",
      values: r,
      input: o,
      inst: e
    }), s;
  };
}), Fc = /* @__PURE__ */ g("$ZodLiteral", (e, t) => {
  if (te.init(e, t), t.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const r = new Set(t.values);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${t.values.map((n) => typeof n == "string" ? ot(n) : n ? ot(n.toString()) : String(n)).join("|")})$`), e._zod.parse = (n, s) => {
    const i = n.value;
    return r.has(i) || n.issues.push({
      code: "invalid_value",
      values: t.values,
      input: i,
      inst: e
    }), n;
  };
}), Lc = /* @__PURE__ */ g("$ZodTransform", (e, t) => {
  te.init(e, t), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      throw new rs(e.constructor.name);
    const s = t.transform(r.value, r);
    if (n.async)
      return (s instanceof Promise ? s : Promise.resolve(s)).then((o) => (r.value = o, r));
    if (s instanceof Promise)
      throw new st();
    return r.value = s, r;
  };
});
function _n(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const Es = /* @__PURE__ */ g("$ZodOptional", (e, t) => {
  te.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", G(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), G(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${Zr(r.source)})?$`) : void 0;
  }), e._zod.parse = (r, n) => {
    if (t.innerType._zod.optin === "optional") {
      const s = t.innerType._zod.run(r, n);
      return s instanceof Promise ? s.then((i) => _n(i, r.value)) : _n(s, r.value);
    }
    return r.value === void 0 ? r : t.innerType._zod.run(r, n);
  };
}), Bc = /* @__PURE__ */ g("$ZodExactOptional", (e, t) => {
  Es.init(e, t), G(e._zod, "values", () => t.innerType._zod.values), G(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (r, n) => t.innerType._zod.run(r, n);
}), jc = /* @__PURE__ */ g("$ZodNullable", (e, t) => {
  te.init(e, t), G(e._zod, "optin", () => t.innerType._zod.optin), G(e._zod, "optout", () => t.innerType._zod.optout), G(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${Zr(r.source)}|null)$`) : void 0;
  }), G(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (r, n) => r.value === null ? r : t.innerType._zod.run(r, n);
}), Vc = /* @__PURE__ */ g("$ZodDefault", (e, t) => {
  te.init(e, t), e._zod.optin = "optional", G(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    if (r.value === void 0)
      return r.value = t.defaultValue, r;
    const s = t.innerType._zod.run(r, n);
    return s instanceof Promise ? s.then((i) => yn(i, t)) : yn(s, t);
  };
});
function yn(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const qc = /* @__PURE__ */ g("$ZodPrefault", (e, t) => {
  te.init(e, t), e._zod.optin = "optional", G(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => (n.direction === "backward" || r.value === void 0 && (r.value = t.defaultValue), t.innerType._zod.run(r, n));
}), Hc = /* @__PURE__ */ g("$ZodNonOptional", (e, t) => {
  te.init(e, t), G(e._zod, "values", () => {
    const r = t.innerType._zod.values;
    return r ? new Set([...r].filter((n) => n !== void 0)) : void 0;
  }), e._zod.parse = (r, n) => {
    const s = t.innerType._zod.run(r, n);
    return s instanceof Promise ? s.then((i) => vn(i, e)) : vn(s, e);
  };
});
function vn(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const Wc = /* @__PURE__ */ g("$ZodCatch", (e, t) => {
  te.init(e, t), G(e._zod, "optin", () => t.innerType._zod.optin), G(e._zod, "optout", () => t.innerType._zod.optout), G(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    const s = t.innerType._zod.run(r, n);
    return s instanceof Promise ? s.then((i) => (r.value = i.value, i.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: i.issues.map((o) => Me(o, n, ze()))
      },
      input: r.value
    }), r.issues = []), r)) : (r.value = s.value, s.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: s.issues.map((i) => Me(i, n, ze()))
      },
      input: r.value
    }), r.issues = []), r);
  };
}), Jc = /* @__PURE__ */ g("$ZodPipe", (e, t) => {
  te.init(e, t), G(e._zod, "values", () => t.in._zod.values), G(e._zod, "optin", () => t.in._zod.optin), G(e._zod, "optout", () => t.out._zod.optout), G(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, n) => {
    if (n.direction === "backward") {
      const i = t.out._zod.run(r, n);
      return i instanceof Promise ? i.then((o) => Ct(o, t.in, n)) : Ct(i, t.in, n);
    }
    const s = t.in._zod.run(r, n);
    return s instanceof Promise ? s.then((i) => Ct(i, t.out, n)) : Ct(s, t.out, n);
  };
});
function Ct(e, t, r) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, r);
}
const Yc = /* @__PURE__ */ g("$ZodReadonly", (e, t) => {
  te.init(e, t), G(e._zod, "propValues", () => t.innerType._zod.propValues), G(e._zod, "values", () => t.innerType._zod.values), G(e._zod, "optin", () => t.innerType?._zod?.optin), G(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    const s = t.innerType._zod.run(r, n);
    return s instanceof Promise ? s.then(bn) : bn(s);
  };
});
function bn(e) {
  return e.value = Object.freeze(e.value), e;
}
const Kc = /* @__PURE__ */ g("$ZodLazy", (e, t) => {
  te.init(e, t), G(e._zod, "innerType", () => t.getter()), G(e._zod, "pattern", () => e._zod.innerType?._zod?.pattern), G(e._zod, "propValues", () => e._zod.innerType?._zod?.propValues), G(e._zod, "optin", () => e._zod.innerType?._zod?.optin ?? void 0), G(e._zod, "optout", () => e._zod.innerType?._zod?.optout ?? void 0), e._zod.parse = (r, n) => e._zod.innerType._zod.run(r, n);
}), Xc = /* @__PURE__ */ g("$ZodCustom", (e, t) => {
  ye.init(e, t), te.init(e, t), e._zod.parse = (r, n) => r, e._zod.check = (r) => {
    const n = r.value, s = t.fn(n);
    if (s instanceof Promise)
      return s.then((i) => wn(i, r, n, e));
    wn(s, r, n, e);
  };
});
function wn(e, t, r, n) {
  if (!e) {
    const s = {
      code: "custom",
      input: r,
      inst: n,
      // incorporates params.error into issue reporting
      path: [...n._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !n._zod.def.abort
      // params: inst._zod.def.params,
    };
    n._zod.def.params && (s.params = n._zod.def.params), t.issues.push(vt(s));
  }
}
const Gc = () => {
  const e = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" }
  };
  function t(s) {
    return e[s] ?? null;
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
  }, n = {
    // Compatibility: "nan" -> "NaN" for display
    nan: "NaN"
    // All other type names omitted - they fall back to raw values via ?? operator
  };
  return (s) => {
    switch (s.code) {
      case "invalid_type": {
        const i = n[s.expected] ?? s.expected, o = Xo(s.input), a = n[o] ?? o;
        return `Invalid input: expected ${i}, received ${a}`;
      }
      case "invalid_value":
        return s.values.length === 1 ? `Invalid input: expected ${os(s.values[0])}` : `Invalid option: expected one of ${un(s.values, "|")}`;
      case "too_big": {
        const i = s.inclusive ? "<=" : "<", o = t(s.origin);
        return o ? `Too big: expected ${s.origin ?? "value"} to have ${i}${s.maximum.toString()} ${o.unit ?? "elements"}` : `Too big: expected ${s.origin ?? "value"} to be ${i}${s.maximum.toString()}`;
      }
      case "too_small": {
        const i = s.inclusive ? ">=" : ">", o = t(s.origin);
        return o ? `Too small: expected ${s.origin} to have ${i}${s.minimum.toString()} ${o.unit}` : `Too small: expected ${s.origin} to be ${i}${s.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = s;
        return i.format === "starts_with" ? `Invalid string: must start with "${i.prefix}"` : i.format === "ends_with" ? `Invalid string: must end with "${i.suffix}"` : i.format === "includes" ? `Invalid string: must include "${i.includes}"` : i.format === "regex" ? `Invalid string: must match pattern ${i.pattern}` : `Invalid ${r[i.format] ?? s.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${s.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${s.keys.length > 1 ? "s" : ""}: ${un(s.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${s.origin}`;
      case "invalid_union":
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${s.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function Qc() {
  return {
    localeError: Gc()
  };
}
var kn;
class eu {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...r) {
    const n = r[0];
    return this._map.set(t, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, t), this;
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
      const n = { ...this.get(r) ?? {} };
      delete n.id;
      const s = { ...n, ...this._map.get(t) };
      return Object.keys(s).length ? s : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function Os() {
  return new eu();
}
(kn = globalThis).__zod_globalRegistry ?? (kn.__zod_globalRegistry = Os());
const nt = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function tu(e, t) {
  return new e({
    type: "string",
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ru(e, t) {
  return new e({
    type: "string",
    coerce: !0,
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function nu(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function En(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function su(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function iu(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ou(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function au(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function cu(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function uu(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function hu(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function fu(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function lu(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function du(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function pu(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function mu(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function gu(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function _u(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function yu(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function vu(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function bu(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function wu(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ku(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Eu(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ou(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Tu(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Cu(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Au(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Nu(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function xu(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function zu(e, t) {
  return new e({
    type: "boolean",
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Su(e, t) {
  return new e({
    type: "undefined",
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ru(e, t) {
  return new e({
    type: "null",
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Iu(e) {
  return new e({
    type: "any"
  });
}
// @__NO_SIDE_EFFECTS__
function $u(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function Uu(e, t) {
  return new e({
    type: "never",
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Pu(e, t) {
  return new e({
    type: "date",
    coerce: !0,
    ...S(t)
  });
}
// @__NO_SIDE_EFFECTS__
function _r(e, t) {
  return new _s({
    check: "less_than",
    ...S(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function gt(e, t) {
  return new _s({
    check: "less_than",
    ...S(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function yr(e, t) {
  return new ys({
    check: "greater_than",
    ...S(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function _t(e, t) {
  return new ys({
    check: "greater_than",
    ...S(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function vr(e, t) {
  return new Ua({
    check: "multiple_of",
    ...S(t),
    value: e
  });
}
// @__NO_SIDE_EFFECTS__
function Ts(e, t) {
  return new Za({
    check: "max_size",
    ...S(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function br(e, t) {
  return new Da({
    check: "min_size",
    ...S(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Cs(e, t) {
  return new Ma({
    check: "size_equals",
    ...S(t),
    size: e
  });
}
// @__NO_SIDE_EFFECTS__
function jr(e, t) {
  return new Fa({
    check: "max_length",
    ...S(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function bt(e, t) {
  return new La({
    check: "min_length",
    ...S(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Vr(e, t) {
  return new Ba({
    check: "length_equals",
    ...S(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function As(e, t) {
  return new ja({
    check: "string_format",
    format: "regex",
    ...S(t),
    pattern: e
  });
}
// @__NO_SIDE_EFFECTS__
function Ns(e) {
  return new Va({
    check: "string_format",
    format: "lowercase",
    ...S(e)
  });
}
// @__NO_SIDE_EFFECTS__
function xs(e) {
  return new qa({
    check: "string_format",
    format: "uppercase",
    ...S(e)
  });
}
// @__NO_SIDE_EFFECTS__
function zs(e, t) {
  return new Ha({
    check: "string_format",
    format: "includes",
    ...S(t),
    includes: e
  });
}
// @__NO_SIDE_EFFECTS__
function Ss(e, t) {
  return new Wa({
    check: "string_format",
    format: "starts_with",
    ...S(t),
    prefix: e
  });
}
// @__NO_SIDE_EFFECTS__
function Rs(e, t) {
  return new Ja({
    check: "string_format",
    format: "ends_with",
    ...S(t),
    suffix: e
  });
}
// @__NO_SIDE_EFFECTS__
function tt(e) {
  return new Ya({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function Is(e) {
  return /* @__PURE__ */ tt((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function $s() {
  return /* @__PURE__ */ tt((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function Us() {
  return /* @__PURE__ */ tt((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function Ps() {
  return /* @__PURE__ */ tt((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function Zs() {
  return /* @__PURE__ */ tt((e) => Fo(e));
}
// @__NO_SIDE_EFFECTS__
function Zu(e, t, r) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...S(r)
  });
}
// @__NO_SIDE_EFFECTS__
function Du(e, t, r) {
  const n = S(r);
  return n.abort ?? (n.abort = !0), new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...n
  });
}
// @__NO_SIDE_EFFECTS__
function Mu(e, t, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...S(r)
  });
}
// @__NO_SIDE_EFFECTS__
function Fu(e) {
  const t = /* @__PURE__ */ Lu((r) => (r.addIssue = (n) => {
    if (typeof n == "string")
      r.issues.push(vt(n, r.value, t._zod.def));
    else {
      const s = n;
      s.fatal && (s.continue = !1), s.code ?? (s.code = "custom"), s.input ?? (s.input = r.value), s.inst ?? (s.inst = t), s.continue ?? (s.continue = !t._zod.def.abort), r.issues.push(vt(s));
    }
  }, e(r.value, r)));
  return t;
}
// @__NO_SIDE_EFFECTS__
function Lu(e, t) {
  const r = new ye({
    check: "custom",
    ...S(t)
  });
  return r._zod.check = e, r;
}
function Ds(e) {
  let t = e?.target ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: e?.metadata ?? nt,
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
function fe(e, t, r = { path: [], schemaPath: [] }) {
  var n;
  const s = e._zod.def, i = t.seen.get(e);
  if (i)
    return i.count++, r.schemaPath.includes(e) && (i.cycle = r.path), i.schema;
  const o = { schema: {}, count: 1, cycle: void 0, path: r.path };
  t.seen.set(e, o);
  const a = e._zod.toJSONSchema?.();
  if (a)
    o.schema = a;
  else {
    const h = {
      ...r,
      schemaPath: [...r.schemaPath, e],
      path: r.path
    };
    if (e._zod.processJSONSchema)
      e._zod.processJSONSchema(t, o.schema, h);
    else {
      const l = o.schema, d = t.processors[s.type];
      if (!d)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${s.type}`);
      d(e, t, l, h);
    }
    const f = e._zod.parent;
    f && (o.ref || (o.ref = f), fe(f, t, h), t.seen.get(f).isParent = !0);
  }
  const c = t.metadataRegistry.get(e);
  return c && Object.assign(o.schema, c), t.io === "input" && we(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && o.schema._prefault && ((n = o.schema).default ?? (n.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function Ms(e, t) {
  const r = e.seen.get(t);
  if (!r)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const n = /* @__PURE__ */ new Map();
  for (const o of e.seen.entries()) {
    const a = e.metadataRegistry.get(o[0])?.id;
    if (a) {
      const c = n.get(a);
      if (c && c !== o[0])
        throw new Error(`Duplicate schema id "${a}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      n.set(a, o[0]);
    }
  }
  const s = (o) => {
    const a = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const f = e.external.registry.get(o[0])?.id, l = e.external.uri ?? ((v) => v);
      if (f)
        return { ref: l(f) };
      const d = o[1].defId ?? o[1].schema.id ?? `schema${e.counter++}`;
      return o[1].defId = d, { defId: d, ref: `${l("__shared")}#/${a}/${d}` };
    }
    if (o[1] === r)
      return { ref: "#" };
    const u = `#/${a}/`, h = o[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: h, ref: u + h };
  }, i = (o) => {
    if (o[1].schema.$ref)
      return;
    const a = o[1], { ref: c, defId: u } = s(o);
    a.def = { ...a.schema }, u && (a.defId = u);
    const h = a.schema;
    for (const f in h)
      delete h[f];
    h.$ref = c;
  };
  if (e.cycles === "throw")
    for (const o of e.seen.entries()) {
      const a = o[1];
      if (a.cycle)
        throw new Error(`Cycle detected: #/${a.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const o of e.seen.entries()) {
    const a = o[1];
    if (t === o[0]) {
      i(o);
      continue;
    }
    if (e.external) {
      const u = e.external.registry.get(o[0])?.id;
      if (t !== o[0] && u) {
        i(o);
        continue;
      }
    }
    if (e.metadataRegistry.get(o[0])?.id) {
      i(o);
      continue;
    }
    if (a.cycle) {
      i(o);
      continue;
    }
    if (a.count > 1 && e.reused === "ref") {
      i(o);
      continue;
    }
  }
}
function Fs(e, t) {
  const r = e.seen.get(t);
  if (!r)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const n = (o) => {
    const a = e.seen.get(o);
    if (a.ref === null)
      return;
    const c = a.def ?? a.schema, u = { ...c }, h = a.ref;
    if (a.ref = null, h) {
      n(h);
      const l = e.seen.get(h), d = l.schema;
      if (d.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (c.allOf = c.allOf ?? [], c.allOf.push(d)) : Object.assign(c, d), Object.assign(c, u), o._zod.parent === h)
        for (const y in c)
          y === "$ref" || y === "allOf" || y in u || delete c[y];
      if (d.$ref && l.def)
        for (const y in c)
          y === "$ref" || y === "allOf" || y in l.def && JSON.stringify(c[y]) === JSON.stringify(l.def[y]) && delete c[y];
    }
    const f = o._zod.parent;
    if (f && f !== h) {
      n(f);
      const l = e.seen.get(f);
      if (l?.schema.$ref && (c.$ref = l.schema.$ref, l.def))
        for (const d in c)
          d === "$ref" || d === "allOf" || d in l.def && JSON.stringify(c[d]) === JSON.stringify(l.def[d]) && delete c[d];
    }
    e.override({
      zodSchema: o,
      jsonSchema: c,
      path: a.path ?? []
    });
  };
  for (const o of [...e.seen.entries()].reverse())
    n(o[0]);
  const s = {};
  if (e.target === "draft-2020-12" ? s.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? s.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? s.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
    const o = e.external.registry.get(t)?.id;
    if (!o)
      throw new Error("Schema is missing an `id` property");
    s.$id = e.external.uri(o);
  }
  Object.assign(s, r.def ?? r.schema);
  const i = e.external?.defs ?? {};
  for (const o of e.seen.entries()) {
    const a = o[1];
    a.def && a.defId && (i[a.defId] = a.def);
  }
  e.external || Object.keys(i).length > 0 && (e.target === "draft-2020-12" ? s.$defs = i : s.definitions = i);
  try {
    const o = JSON.parse(JSON.stringify(s));
    return Object.defineProperty(o, "~standard", {
      value: {
        ...t["~standard"],
        jsonSchema: {
          input: Mt(t, "input", e.processors),
          output: Mt(t, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), o;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function we(e, t) {
  const r = t ?? { seen: /* @__PURE__ */ new Set() };
  if (r.seen.has(e))
    return !1;
  r.seen.add(e);
  const n = e._zod.def;
  if (n.type === "transform")
    return !0;
  if (n.type === "array")
    return we(n.element, r);
  if (n.type === "set")
    return we(n.valueType, r);
  if (n.type === "lazy")
    return we(n.getter(), r);
  if (n.type === "promise" || n.type === "optional" || n.type === "nonoptional" || n.type === "nullable" || n.type === "readonly" || n.type === "default" || n.type === "prefault")
    return we(n.innerType, r);
  if (n.type === "intersection")
    return we(n.left, r) || we(n.right, r);
  if (n.type === "record" || n.type === "map")
    return we(n.keyType, r) || we(n.valueType, r);
  if (n.type === "pipe")
    return we(n.in, r) || we(n.out, r);
  if (n.type === "object") {
    for (const s in n.shape)
      if (we(n.shape[s], r))
        return !0;
    return !1;
  }
  if (n.type === "union") {
    for (const s of n.options)
      if (we(s, r))
        return !0;
    return !1;
  }
  if (n.type === "tuple") {
    for (const s of n.items)
      if (we(s, r))
        return !0;
    return !!(n.rest && we(n.rest, r));
  }
  return !1;
}
const Bu = (e, t = {}) => (r) => {
  const n = Ds({ ...r, processors: t });
  return fe(e, n), Ms(n, e), Fs(n, e);
}, Mt = (e, t, r = {}) => (n) => {
  const { libraryOptions: s, target: i } = n ?? {}, o = Ds({ ...s ?? {}, target: i, io: t, processors: r });
  return fe(e, o), Ms(o, e), Fs(o, e);
}, ju = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, Vu = (e, t, r, n) => {
  const s = r;
  s.type = "string";
  const { minimum: i, maximum: o, format: a, patterns: c, contentEncoding: u } = e._zod.bag;
  if (typeof i == "number" && (s.minLength = i), typeof o == "number" && (s.maxLength = o), a && (s.format = ju[a] ?? a, s.format === "" && delete s.format, a === "time" && delete s.format), u && (s.contentEncoding = u), c && c.size > 0) {
    const h = [...c];
    h.length === 1 ? s.pattern = h[0].source : h.length > 1 && (s.allOf = [
      ...h.map((f) => ({
        ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: f.source
      }))
    ]);
  }
}, qu = (e, t, r, n) => {
  const s = r, { minimum: i, maximum: o, format: a, multipleOf: c, exclusiveMaximum: u, exclusiveMinimum: h } = e._zod.bag;
  typeof a == "string" && a.includes("int") ? s.type = "integer" : s.type = "number", typeof h == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (s.minimum = h, s.exclusiveMinimum = !0) : s.exclusiveMinimum = h), typeof i == "number" && (s.minimum = i, typeof h == "number" && t.target !== "draft-04" && (h >= i ? delete s.minimum : delete s.exclusiveMinimum)), typeof u == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (s.maximum = u, s.exclusiveMaximum = !0) : s.exclusiveMaximum = u), typeof o == "number" && (s.maximum = o, typeof u == "number" && t.target !== "draft-04" && (u <= o ? delete s.maximum : delete s.exclusiveMaximum)), typeof c == "number" && (s.multipleOf = c);
}, Hu = (e, t, r, n) => {
  r.type = "boolean";
}, Wu = (e, t, r, n) => {
  t.target === "openapi-3.0" ? (r.type = "string", r.nullable = !0, r.enum = [null]) : r.type = "null";
}, Ju = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Undefined cannot be represented in JSON Schema");
}, Yu = (e, t, r, n) => {
  r.not = {};
}, Ku = (e, t, r, n) => {
}, Xu = (e, t, r, n) => {
}, Gu = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Date cannot be represented in JSON Schema");
}, Qu = (e, t, r, n) => {
  const s = e._zod.def, i = ns(s.entries);
  i.every((o) => typeof o == "number") && (r.type = "number"), i.every((o) => typeof o == "string") && (r.type = "string"), r.enum = i;
}, eh = (e, t, r, n) => {
  const s = e._zod.def, i = [];
  for (const o of s.values)
    if (o === void 0) {
      if (t.unrepresentable === "throw")
        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if (typeof o == "bigint") {
      if (t.unrepresentable === "throw")
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      i.push(Number(o));
    } else
      i.push(o);
  if (i.length !== 0) if (i.length === 1) {
    const o = i[0];
    r.type = o === null ? "null" : typeof o, t.target === "draft-04" || t.target === "openapi-3.0" ? r.enum = [o] : r.const = o;
  } else
    i.every((o) => typeof o == "number") && (r.type = "number"), i.every((o) => typeof o == "string") && (r.type = "string"), i.every((o) => typeof o == "boolean") && (r.type = "boolean"), i.every((o) => o === null) && (r.type = "null"), r.enum = i;
}, th = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, rh = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, nh = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Map cannot be represented in JSON Schema");
}, sh = (e, t, r, n) => {
  const s = r, i = e._zod.def, { minimum: o, maximum: a } = e._zod.bag;
  typeof o == "number" && (s.minItems = o), typeof a == "number" && (s.maxItems = a), s.type = "array", s.items = fe(i.element, t, { ...n, path: [...n.path, "items"] });
}, ih = (e, t, r, n) => {
  const s = r, i = e._zod.def;
  s.type = "object", s.properties = {};
  const o = i.shape;
  for (const u in o)
    s.properties[u] = fe(o[u], t, {
      ...n,
      path: [...n.path, "properties", u]
    });
  const a = new Set(Object.keys(o)), c = new Set([...a].filter((u) => {
    const h = i.shape[u]._zod;
    return t.io === "input" ? h.optin === void 0 : h.optout === void 0;
  }));
  c.size > 0 && (s.required = Array.from(c)), i.catchall?._zod.def.type === "never" ? s.additionalProperties = !1 : i.catchall ? i.catchall && (s.additionalProperties = fe(i.catchall, t, {
    ...n,
    path: [...n.path, "additionalProperties"]
  })) : t.io === "output" && (s.additionalProperties = !1);
}, oh = (e, t, r, n) => {
  const s = e._zod.def, i = s.inclusive === !1, o = s.options.map((a, c) => fe(a, t, {
    ...n,
    path: [...n.path, i ? "oneOf" : "anyOf", c]
  }));
  i ? r.oneOf = o : r.anyOf = o;
}, ah = (e, t, r, n) => {
  const s = e._zod.def, i = fe(s.left, t, {
    ...n,
    path: [...n.path, "allOf", 0]
  }), o = fe(s.right, t, {
    ...n,
    path: [...n.path, "allOf", 1]
  }), a = (u) => "allOf" in u && Object.keys(u).length === 1, c = [
    ...a(i) ? i.allOf : [i],
    ...a(o) ? o.allOf : [o]
  ];
  r.allOf = c;
}, ch = (e, t, r, n) => {
  const s = r, i = e._zod.def;
  s.type = "array";
  const o = t.target === "draft-2020-12" ? "prefixItems" : "items", a = t.target === "draft-2020-12" || t.target === "openapi-3.0" ? "items" : "additionalItems", c = i.items.map((l, d) => fe(l, t, {
    ...n,
    path: [...n.path, o, d]
  })), u = i.rest ? fe(i.rest, t, {
    ...n,
    path: [...n.path, a, ...t.target === "openapi-3.0" ? [i.items.length] : []]
  }) : null;
  t.target === "draft-2020-12" ? (s.prefixItems = c, u && (s.items = u)) : t.target === "openapi-3.0" ? (s.items = {
    anyOf: c
  }, u && s.items.anyOf.push(u), s.minItems = c.length, u || (s.maxItems = c.length)) : (s.items = c, u && (s.additionalItems = u));
  const { minimum: h, maximum: f } = e._zod.bag;
  typeof h == "number" && (s.minItems = h), typeof f == "number" && (s.maxItems = f);
}, uh = (e, t, r, n) => {
  const s = r, i = e._zod.def;
  s.type = "object";
  const o = i.keyType, c = o._zod.bag?.patterns;
  if (i.mode === "loose" && c && c.size > 0) {
    const h = fe(i.valueType, t, {
      ...n,
      path: [...n.path, "patternProperties", "*"]
    });
    s.patternProperties = {};
    for (const f of c)
      s.patternProperties[f.source] = h;
  } else
    (t.target === "draft-07" || t.target === "draft-2020-12") && (s.propertyNames = fe(i.keyType, t, {
      ...n,
      path: [...n.path, "propertyNames"]
    })), s.additionalProperties = fe(i.valueType, t, {
      ...n,
      path: [...n.path, "additionalProperties"]
    });
  const u = o._zod.values;
  if (u) {
    const h = [...u].filter((f) => typeof f == "string" || typeof f == "number");
    h.length > 0 && (s.required = h);
  }
}, hh = (e, t, r, n) => {
  const s = e._zod.def, i = fe(s.innerType, t, n), o = t.seen.get(e);
  t.target === "openapi-3.0" ? (o.ref = s.innerType, r.nullable = !0) : r.anyOf = [i, { type: "null" }];
}, fh = (e, t, r, n) => {
  const s = e._zod.def;
  fe(s.innerType, t, n);
  const i = t.seen.get(e);
  i.ref = s.innerType;
}, lh = (e, t, r, n) => {
  const s = e._zod.def;
  fe(s.innerType, t, n);
  const i = t.seen.get(e);
  i.ref = s.innerType, r.default = JSON.parse(JSON.stringify(s.defaultValue));
}, dh = (e, t, r, n) => {
  const s = e._zod.def;
  fe(s.innerType, t, n);
  const i = t.seen.get(e);
  i.ref = s.innerType, t.io === "input" && (r._prefault = JSON.parse(JSON.stringify(s.defaultValue)));
}, ph = (e, t, r, n) => {
  const s = e._zod.def;
  fe(s.innerType, t, n);
  const i = t.seen.get(e);
  i.ref = s.innerType;
  let o;
  try {
    o = s.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  r.default = o;
}, mh = (e, t, r, n) => {
  const s = e._zod.def, i = t.io === "input" ? s.in._zod.def.type === "transform" ? s.out : s.in : s.out;
  fe(i, t, n);
  const o = t.seen.get(e);
  o.ref = i;
}, gh = (e, t, r, n) => {
  const s = e._zod.def;
  fe(s.innerType, t, n);
  const i = t.seen.get(e);
  i.ref = s.innerType, r.readOnly = !0;
}, Ls = (e, t, r, n) => {
  const s = e._zod.def;
  fe(s.innerType, t, n);
  const i = t.seen.get(e);
  i.ref = s.innerType;
}, _h = (e, t, r, n) => {
  const s = e._zod.innerType;
  fe(s, t, n);
  const i = t.seen.get(e);
  i.ref = s;
}, Bs = /* @__PURE__ */ g("ZodISODateTime", (e, t) => {
  uc.init(e, t), he.init(e, t);
});
function yh(e) {
  return /* @__PURE__ */ Ou(Bs, e);
}
const js = /* @__PURE__ */ g("ZodISODate", (e, t) => {
  hc.init(e, t), he.init(e, t);
});
function vh(e) {
  return /* @__PURE__ */ Tu(js, e);
}
const Vs = /* @__PURE__ */ g("ZodISOTime", (e, t) => {
  fc.init(e, t), he.init(e, t);
});
function bh(e) {
  return /* @__PURE__ */ Cu(Vs, e);
}
const qs = /* @__PURE__ */ g("ZodISODuration", (e, t) => {
  lc.init(e, t), he.init(e, t);
});
function wh(e) {
  return /* @__PURE__ */ Au(qs, e);
}
const Hs = (e, t) => {
  cs.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (r) => fs(e, r)
      // enumerable: false,
    },
    flatten: {
      value: (r) => hs(e, r)
      // enumerable: false,
    },
    addIssue: {
      value: (r) => {
        e.issues.push(r), e.message = JSON.stringify(e.issues, pr, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (r) => {
        e.issues.push(...r), e.message = JSON.stringify(e.issues, pr, 2);
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
}, kh = g("ZodError", Hs), Se = g("ZodError", Hs, {
  Parent: Error
}), Ws = /* @__PURE__ */ Fr(Se), Js = /* @__PURE__ */ Lr(Se), Ys = /* @__PURE__ */ jt(Se), Ks = /* @__PURE__ */ Vt(Se), Xs = /* @__PURE__ */ ea(Se), Gs = /* @__PURE__ */ ta(Se), Qs = /* @__PURE__ */ ra(Se), ei = /* @__PURE__ */ na(Se), ti = /* @__PURE__ */ sa(Se), ri = /* @__PURE__ */ ia(Se), ni = /* @__PURE__ */ oa(Se), si = /* @__PURE__ */ aa(Se), re = /* @__PURE__ */ g("ZodType", (e, t) => (te.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: Mt(e, "input"),
    output: Mt(e, "output")
  }
}), e.toJSONSchema = Bu(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...r) => e.clone(Ke(t, {
  checks: [
    ...t.checks ?? [],
    ...r.map((n) => typeof n == "function" ? { _zod: { check: n, def: { check: "custom" }, onattach: [] } } : n)
  ]
}), {
  parent: !0
}), e.with = e.check, e.clone = (r, n) => Ve(e, r, n), e.brand = () => e, e.register = ((r, n) => (r.add(e, n), e)), e.parse = (r, n) => Ws(e, r, n, { callee: e.parse }), e.safeParse = (r, n) => Ys(e, r, n), e.parseAsync = async (r, n) => Js(e, r, n, { callee: e.parseAsync }), e.safeParseAsync = async (r, n) => Ks(e, r, n), e.spa = e.safeParseAsync, e.encode = (r, n) => Xs(e, r, n), e.decode = (r, n) => Gs(e, r, n), e.encodeAsync = async (r, n) => Qs(e, r, n), e.decodeAsync = async (r, n) => ei(e, r, n), e.safeEncode = (r, n) => ti(e, r, n), e.safeDecode = (r, n) => ri(e, r, n), e.safeEncodeAsync = async (r, n) => ni(e, r, n), e.safeDecodeAsync = async (r, n) => si(e, r, n), e.refine = (r, n) => e.check(so(r, n)), e.superRefine = (r) => e.check(io(r)), e.overwrite = (r) => e.check(/* @__PURE__ */ tt(r)), e.optional = () => Or(e), e.exactOptional = () => qi(e), e.nullable = () => Tr(e), e.nullish = () => Or(Tr(e)), e.nonoptional = (r) => Xi(e, r), e.array = () => Ri(e), e.or = (r) => Ui([e, r]), e.and = (r) => Zi(e, r), e.transform = (r) => Lt(e, Jr(r)), e.default = (r) => Ji(e, r), e.prefault = (r) => Ki(e, r), e.catch = (r) => Qi(e, r), e.pipe = (r) => Lt(e, r), e.readonly = () => ro(e), e.describe = (r) => {
  const n = e.clone();
  return nt.add(n, { description: r }), n;
}, Object.defineProperty(e, "description", {
  get() {
    return nt.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...r) => {
  if (r.length === 0)
    return nt.get(e);
  const n = e.clone();
  return nt.add(n, r[0]), n;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (r) => r(e), e)), qr = /* @__PURE__ */ g("_ZodString", (e, t) => {
  Br.init(e, t), re.init(e, t), e._zod.processJSONSchema = (n, s, i) => Vu(e, n, s);
  const r = e._zod.bag;
  e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...n) => e.check(/* @__PURE__ */ As(...n)), e.includes = (...n) => e.check(/* @__PURE__ */ zs(...n)), e.startsWith = (...n) => e.check(/* @__PURE__ */ Ss(...n)), e.endsWith = (...n) => e.check(/* @__PURE__ */ Rs(...n)), e.min = (...n) => e.check(/* @__PURE__ */ bt(...n)), e.max = (...n) => e.check(/* @__PURE__ */ jr(...n)), e.length = (...n) => e.check(/* @__PURE__ */ Vr(...n)), e.nonempty = (...n) => e.check(/* @__PURE__ */ bt(1, ...n)), e.lowercase = (n) => e.check(/* @__PURE__ */ Ns(n)), e.uppercase = (n) => e.check(/* @__PURE__ */ xs(n)), e.trim = () => e.check(/* @__PURE__ */ $s()), e.normalize = (...n) => e.check(/* @__PURE__ */ Is(...n)), e.toLowerCase = () => e.check(/* @__PURE__ */ Us()), e.toUpperCase = () => e.check(/* @__PURE__ */ Ps()), e.slugify = () => e.check(/* @__PURE__ */ Zs());
}), Hr = /* @__PURE__ */ g("ZodString", (e, t) => {
  Br.init(e, t), qr.init(e, t), e.email = (r) => e.check(/* @__PURE__ */ nu(ii, r)), e.url = (r) => e.check(/* @__PURE__ */ cu(oi, r)), e.jwt = (r) => e.check(/* @__PURE__ */ Eu(wi, r)), e.emoji = (r) => e.check(/* @__PURE__ */ uu(ai, r)), e.guid = (r) => e.check(/* @__PURE__ */ En(wr, r)), e.uuid = (r) => e.check(/* @__PURE__ */ su(pt, r)), e.uuidv4 = (r) => e.check(/* @__PURE__ */ iu(pt, r)), e.uuidv6 = (r) => e.check(/* @__PURE__ */ ou(pt, r)), e.uuidv7 = (r) => e.check(/* @__PURE__ */ au(pt, r)), e.nanoid = (r) => e.check(/* @__PURE__ */ hu(ci, r)), e.guid = (r) => e.check(/* @__PURE__ */ En(wr, r)), e.cuid = (r) => e.check(/* @__PURE__ */ fu(ui, r)), e.cuid2 = (r) => e.check(/* @__PURE__ */ lu(hi, r)), e.ulid = (r) => e.check(/* @__PURE__ */ du(fi, r)), e.base64 = (r) => e.check(/* @__PURE__ */ bu(yi, r)), e.base64url = (r) => e.check(/* @__PURE__ */ wu(vi, r)), e.xid = (r) => e.check(/* @__PURE__ */ pu(li, r)), e.ksuid = (r) => e.check(/* @__PURE__ */ mu(di, r)), e.ipv4 = (r) => e.check(/* @__PURE__ */ gu(pi, r)), e.ipv6 = (r) => e.check(/* @__PURE__ */ _u(mi, r)), e.cidrv4 = (r) => e.check(/* @__PURE__ */ yu(gi, r)), e.cidrv6 = (r) => e.check(/* @__PURE__ */ vu(_i, r)), e.e164 = (r) => e.check(/* @__PURE__ */ ku(bi, r)), e.datetime = (r) => e.check(yh(r)), e.date = (r) => e.check(vh(r)), e.time = (r) => e.check(bh(r)), e.duration = (r) => e.check(wh(r));
});
function Eh(e) {
  return /* @__PURE__ */ tu(Hr, e);
}
const he = /* @__PURE__ */ g("ZodStringFormat", (e, t) => {
  ue.init(e, t), qr.init(e, t);
}), ii = /* @__PURE__ */ g("ZodEmail", (e, t) => {
  ec.init(e, t), he.init(e, t);
}), wr = /* @__PURE__ */ g("ZodGUID", (e, t) => {
  Ga.init(e, t), he.init(e, t);
}), pt = /* @__PURE__ */ g("ZodUUID", (e, t) => {
  Qa.init(e, t), he.init(e, t);
}), oi = /* @__PURE__ */ g("ZodURL", (e, t) => {
  tc.init(e, t), he.init(e, t);
}), ai = /* @__PURE__ */ g("ZodEmoji", (e, t) => {
  rc.init(e, t), he.init(e, t);
}), ci = /* @__PURE__ */ g("ZodNanoID", (e, t) => {
  nc.init(e, t), he.init(e, t);
}), ui = /* @__PURE__ */ g("ZodCUID", (e, t) => {
  sc.init(e, t), he.init(e, t);
}), hi = /* @__PURE__ */ g("ZodCUID2", (e, t) => {
  ic.init(e, t), he.init(e, t);
}), fi = /* @__PURE__ */ g("ZodULID", (e, t) => {
  oc.init(e, t), he.init(e, t);
}), li = /* @__PURE__ */ g("ZodXID", (e, t) => {
  ac.init(e, t), he.init(e, t);
}), di = /* @__PURE__ */ g("ZodKSUID", (e, t) => {
  cc.init(e, t), he.init(e, t);
}), pi = /* @__PURE__ */ g("ZodIPv4", (e, t) => {
  dc.init(e, t), he.init(e, t);
}), mi = /* @__PURE__ */ g("ZodIPv6", (e, t) => {
  pc.init(e, t), he.init(e, t);
}), gi = /* @__PURE__ */ g("ZodCIDRv4", (e, t) => {
  mc.init(e, t), he.init(e, t);
}), _i = /* @__PURE__ */ g("ZodCIDRv6", (e, t) => {
  gc.init(e, t), he.init(e, t);
}), yi = /* @__PURE__ */ g("ZodBase64", (e, t) => {
  _c.init(e, t), he.init(e, t);
}), vi = /* @__PURE__ */ g("ZodBase64URL", (e, t) => {
  vc.init(e, t), he.init(e, t);
}), bi = /* @__PURE__ */ g("ZodE164", (e, t) => {
  bc.init(e, t), he.init(e, t);
}), wi = /* @__PURE__ */ g("ZodJWT", (e, t) => {
  kc.init(e, t), he.init(e, t);
}), Wr = /* @__PURE__ */ g("ZodNumber", (e, t) => {
  bs.init(e, t), re.init(e, t), e._zod.processJSONSchema = (n, s, i) => qu(e, n, s), e.gt = (n, s) => e.check(/* @__PURE__ */ yr(n, s)), e.gte = (n, s) => e.check(/* @__PURE__ */ _t(n, s)), e.min = (n, s) => e.check(/* @__PURE__ */ _t(n, s)), e.lt = (n, s) => e.check(/* @__PURE__ */ _r(n, s)), e.lte = (n, s) => e.check(/* @__PURE__ */ gt(n, s)), e.max = (n, s) => e.check(/* @__PURE__ */ gt(n, s)), e.int = (n) => e.check(kr(n)), e.safe = (n) => e.check(kr(n)), e.positive = (n) => e.check(/* @__PURE__ */ yr(0, n)), e.nonnegative = (n) => e.check(/* @__PURE__ */ _t(0, n)), e.negative = (n) => e.check(/* @__PURE__ */ _r(0, n)), e.nonpositive = (n) => e.check(/* @__PURE__ */ gt(0, n)), e.multipleOf = (n, s) => e.check(/* @__PURE__ */ vr(n, s)), e.step = (n, s) => e.check(/* @__PURE__ */ vr(n, s)), e.finite = () => e;
  const r = e._zod.bag;
  e.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5), e.isFinite = !0, e.format = r.format ?? null;
});
function Oh(e) {
  return /* @__PURE__ */ Nu(Wr, e);
}
const ki = /* @__PURE__ */ g("ZodNumberFormat", (e, t) => {
  Ec.init(e, t), Wr.init(e, t);
});
function kr(e) {
  return /* @__PURE__ */ xu(ki, e);
}
const Ei = /* @__PURE__ */ g("ZodBoolean", (e, t) => {
  Oc.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => Hu(e, r, n);
});
function Th(e) {
  return /* @__PURE__ */ zu(Ei, e);
}
const Oi = /* @__PURE__ */ g("ZodUndefined", (e, t) => {
  Tc.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => Ju(e, r);
});
function Ch(e) {
  return /* @__PURE__ */ Su(Oi, e);
}
const Ti = /* @__PURE__ */ g("ZodNull", (e, t) => {
  Cc.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => Wu(e, r, n);
});
function Ah(e) {
  return /* @__PURE__ */ Ru(Ti, e);
}
const Ci = /* @__PURE__ */ g("ZodAny", (e, t) => {
  Ac.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => Ku();
});
function Nh() {
  return /* @__PURE__ */ Iu(Ci);
}
const Ai = /* @__PURE__ */ g("ZodUnknown", (e, t) => {
  Nc.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => Xu();
});
function Er() {
  return /* @__PURE__ */ $u(Ai);
}
const Ni = /* @__PURE__ */ g("ZodNever", (e, t) => {
  xc.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => Yu(e, r, n);
});
function xi(e) {
  return /* @__PURE__ */ Uu(Ni, e);
}
const zi = /* @__PURE__ */ g("ZodDate", (e, t) => {
  zc.init(e, t), re.init(e, t), e._zod.processJSONSchema = (n, s, i) => Gu(e, n), e.min = (n, s) => e.check(/* @__PURE__ */ _t(n, s)), e.max = (n, s) => e.check(/* @__PURE__ */ gt(n, s));
  const r = e._zod.bag;
  e.minDate = r.minimum ? new Date(r.minimum) : null, e.maxDate = r.maximum ? new Date(r.maximum) : null;
}), Si = /* @__PURE__ */ g("ZodArray", (e, t) => {
  Sc.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => sh(e, r, n, s), e.element = t.element, e.min = (r, n) => e.check(/* @__PURE__ */ bt(r, n)), e.nonempty = (r) => e.check(/* @__PURE__ */ bt(1, r)), e.max = (r, n) => e.check(/* @__PURE__ */ jr(r, n)), e.length = (r, n) => e.check(/* @__PURE__ */ Vr(r, n)), e.unwrap = () => e.element;
});
function Ri(e, t) {
  return /* @__PURE__ */ Zu(Si, e, t);
}
const Ii = /* @__PURE__ */ g("ZodObject", (e, t) => {
  Ic.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => ih(e, r, n, s), G(e, "shape", () => t.shape), e.keyof = () => Li(Object.keys(e._zod.def.shape)), e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: Er() }), e.loose = () => e.clone({ ...e._zod.def, catchall: Er() }), e.strict = () => e.clone({ ...e._zod.def, catchall: xi() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (r) => Ho(e, r), e.safeExtend = (r) => Wo(e, r), e.merge = (r) => Jo(e, r), e.pick = (r) => Vo(e, r), e.omit = (r) => qo(e, r), e.partial = (...r) => Yo(Yr, e, r[0]), e.required = (...r) => Ko(Kr, e, r[0]);
});
function xh(e, t) {
  const r = {
    type: "object",
    shape: e ?? {},
    ...S(t)
  };
  return new Ii(r);
}
const $i = /* @__PURE__ */ g("ZodUnion", (e, t) => {
  $c.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => oh(e, r, n, s), e.options = t.options;
});
function Ui(e, t) {
  return new $i({
    type: "union",
    options: e,
    ...S(t)
  });
}
const Pi = /* @__PURE__ */ g("ZodIntersection", (e, t) => {
  Uc.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => ah(e, r, n, s);
});
function Zi(e, t) {
  return new Pi({
    type: "intersection",
    left: e,
    right: t
  });
}
const Di = /* @__PURE__ */ g("ZodTuple", (e, t) => {
  Pc.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => ch(e, r, n, s), e.rest = (r) => e.clone({
    ...e._zod.def,
    rest: r
  });
});
function zh(e, t, r) {
  const n = t instanceof te, s = n ? r : t, i = n ? t : null;
  return new Di({
    type: "tuple",
    items: e,
    rest: i,
    ...S(s)
  });
}
const Mi = /* @__PURE__ */ g("ZodRecord", (e, t) => {
  Zc.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => uh(e, r, n, s), e.keyType = t.keyType, e.valueType = t.valueType;
});
function Sh(e, t, r) {
  return new Mi({
    type: "record",
    keyType: e,
    valueType: t,
    ...S(r)
  });
}
const Fi = /* @__PURE__ */ g("ZodMap", (e, t) => {
  Dc.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => nh(e, r), e.keyType = t.keyType, e.valueType = t.valueType, e.min = (...r) => e.check(/* @__PURE__ */ br(...r)), e.nonempty = (r) => e.check(/* @__PURE__ */ br(1, r)), e.max = (...r) => e.check(/* @__PURE__ */ Ts(...r)), e.size = (...r) => e.check(/* @__PURE__ */ Cs(...r));
});
function Rh(e, t, r) {
  return new Fi({
    type: "map",
    keyType: e,
    valueType: t,
    ...S(r)
  });
}
const Ft = /* @__PURE__ */ g("ZodEnum", (e, t) => {
  Mc.init(e, t), re.init(e, t), e._zod.processJSONSchema = (n, s, i) => Qu(e, n, s), e.enum = t.entries, e.options = Object.values(t.entries);
  const r = new Set(Object.keys(t.entries));
  e.extract = (n, s) => {
    const i = {};
    for (const o of n)
      if (r.has(o))
        i[o] = t.entries[o];
      else
        throw new Error(`Key ${o} not found in enum`);
    return new Ft({
      ...t,
      checks: [],
      ...S(s),
      entries: i
    });
  }, e.exclude = (n, s) => {
    const i = { ...t.entries };
    for (const o of n)
      if (r.has(o))
        delete i[o];
      else
        throw new Error(`Key ${o} not found in enum`);
    return new Ft({
      ...t,
      checks: [],
      ...S(s),
      entries: i
    });
  };
});
function Li(e, t) {
  const r = Array.isArray(e) ? Object.fromEntries(e.map((n) => [n, n])) : e;
  return new Ft({
    type: "enum",
    entries: r,
    ...S(t)
  });
}
const Bi = /* @__PURE__ */ g("ZodLiteral", (e, t) => {
  Fc.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => eh(e, r, n), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function Ih(e, t) {
  return new Bi({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...S(t)
  });
}
const ji = /* @__PURE__ */ g("ZodTransform", (e, t) => {
  Lc.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => rh(e, r), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      throw new rs(e.constructor.name);
    r.addIssue = (i) => {
      if (typeof i == "string")
        r.issues.push(vt(i, r.value, t));
      else {
        const o = i;
        o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = r.value), o.inst ?? (o.inst = e), r.issues.push(vt(o));
      }
    };
    const s = t.transform(r.value, r);
    return s instanceof Promise ? s.then((i) => (r.value = i, r)) : (r.value = s, r);
  };
});
function Jr(e) {
  return new ji({
    type: "transform",
    transform: e
  });
}
const Yr = /* @__PURE__ */ g("ZodOptional", (e, t) => {
  Es.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => Ls(e, r, n, s), e.unwrap = () => e._zod.def.innerType;
});
function Or(e) {
  return new Yr({
    type: "optional",
    innerType: e
  });
}
const Vi = /* @__PURE__ */ g("ZodExactOptional", (e, t) => {
  Bc.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => Ls(e, r, n, s), e.unwrap = () => e._zod.def.innerType;
});
function qi(e) {
  return new Vi({
    type: "optional",
    innerType: e
  });
}
const Hi = /* @__PURE__ */ g("ZodNullable", (e, t) => {
  jc.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => hh(e, r, n, s), e.unwrap = () => e._zod.def.innerType;
});
function Tr(e) {
  return new Hi({
    type: "nullable",
    innerType: e
  });
}
const Wi = /* @__PURE__ */ g("ZodDefault", (e, t) => {
  Vc.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => lh(e, r, n, s), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Ji(e, t) {
  return new Wi({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : is(t);
    }
  });
}
const Yi = /* @__PURE__ */ g("ZodPrefault", (e, t) => {
  qc.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => dh(e, r, n, s), e.unwrap = () => e._zod.def.innerType;
});
function Ki(e, t) {
  return new Yi({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : is(t);
    }
  });
}
const Kr = /* @__PURE__ */ g("ZodNonOptional", (e, t) => {
  Hc.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => fh(e, r, n, s), e.unwrap = () => e._zod.def.innerType;
});
function Xi(e, t) {
  return new Kr({
    type: "nonoptional",
    innerType: e,
    ...S(t)
  });
}
const Gi = /* @__PURE__ */ g("ZodCatch", (e, t) => {
  Wc.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => ph(e, r, n, s), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Qi(e, t) {
  return new Gi({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const eo = /* @__PURE__ */ g("ZodPipe", (e, t) => {
  Jc.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => mh(e, r, n, s), e.in = t.in, e.out = t.out;
});
function Lt(e, t) {
  return new eo({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const to = /* @__PURE__ */ g("ZodReadonly", (e, t) => {
  Yc.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => gh(e, r, n, s), e.unwrap = () => e._zod.def.innerType;
});
function ro(e) {
  return new to({
    type: "readonly",
    innerType: e
  });
}
const no = /* @__PURE__ */ g("ZodLazy", (e, t) => {
  Kc.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => _h(e, r, n, s), e.unwrap = () => e._zod.def.getter();
});
function $h(e) {
  return new no({
    type: "lazy",
    getter: e
  });
}
const Xr = /* @__PURE__ */ g("ZodCustom", (e, t) => {
  Xc.init(e, t), re.init(e, t), e._zod.processJSONSchema = (r, n, s) => th(e, r);
});
function Uh(e, t) {
  return /* @__PURE__ */ Du(Xr, e ?? (() => !0), t);
}
function so(e, t = {}) {
  return /* @__PURE__ */ Mu(Xr, e, t);
}
function io(e) {
  return /* @__PURE__ */ Fu(e);
}
function Ph(e, t) {
  return Lt(Jr(e), t);
}
function Zh(e) {
  ze({
    customError: e
  });
}
function Wl(e) {
  return /* @__PURE__ */ ru(Hr, e);
}
function Jl(e) {
  return /* @__PURE__ */ Pu(zi, e);
}
ze(Qc());
const Yl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, ZodAny: Ci, ZodArray: Si, ZodBase64: yi, ZodBase64URL: vi, ZodBoolean: Ei, ZodCIDRv4: gi, ZodCIDRv6: _i, ZodCUID: ui, ZodCUID2: hi, ZodCatch: Gi, ZodCustom: Xr, ZodDate: zi, ZodDefault: Wi, ZodE164: bi, ZodEmail: ii, ZodEmoji: ai, ZodEnum: Ft, ZodError: kh, ZodExactOptional: Vi, ZodGUID: wr, ZodIPv4: pi, ZodIPv6: mi, ZodISODate: js, ZodISODateTime: Bs, ZodISODuration: qs, ZodISOTime: Vs, ZodIntersection: Pi, ZodJWT: wi, ZodKSUID: di, ZodLazy: no, ZodLiteral: Bi, ZodMap: Fi, ZodNanoID: ci, ZodNever: Ni, ZodNonOptional: Kr, ZodNull: Ti, ZodNullable: Hi, ZodNumber: Wr, ZodNumberFormat: ki, ZodObject: Ii, ZodOptional: Yr, ZodPipe: eo, ZodPrefault: Yi, ZodReadonly: to, ZodRealError: Se, ZodRecord: Mi, ZodString: Hr, ZodStringFormat: he, ZodTransform: ji, ZodTuple: Di, ZodType: re, ZodULID: fi, ZodURL: oi, ZodUUID: pt, ZodUndefined: Oi, ZodUnion: $i, ZodUnknown: Ai, ZodXID: li, _ZodString: qr, _default: Ji, any: Nh, array: Ri, boolean: Th, catch: Qi, clone: Ve, config: ze, custom: Uh, decode: Gs, decodeAsync: ei, encode: Xs, encodeAsync: Qs, endsWith: Rs, enum: Li, exactOptional: qi, flattenError: hs, formatError: fs, globalRegistry: nt, gt: yr, gte: _t, includes: zs, int: kr, intersection: Zi, lazy: $h, length: Vr, literal: Ih, lowercase: Ns, lt: _r, lte: gt, map: Rh, maxLength: jr, maxSize: Ts, minLength: bt, minSize: br, multipleOf: vr, never: xi, nonoptional: Xi, normalize: Is, null: Ah, nullable: Tr, number: Oh, object: xh, optional: Or, overwrite: tt, parse: Ws, parseAsync: Js, pipe: Lt, prefault: Ki, preprocess: Ph, readonly: ro, record: Sh, refine: so, regex: As, registry: Os, safeDecode: ri, safeDecodeAsync: si, safeEncode: ti, safeEncodeAsync: ni, safeParse: Ys, safeParseAsync: Ks, setErrorMap: Zh, size: Cs, slugify: Zs, startsWith: Ss, string: Eh, superRefine: io, toLowerCase: Us, toUpperCase: Ps, transform: Jr, trim: $s, tuple: zh, undefined: Ch, union: Ui, unknown: Er, uppercase: xs }, Symbol.toStringTag, { value: "Module" }));
var Dh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ht(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var At = { exports: {} }, er, On;
function Mh() {
  if (On) return er;
  On = 1;
  var e = 1e3, t = e * 60, r = t * 60, n = r * 24, s = n * 7, i = n * 365.25;
  er = function(h, f) {
    f = f || {};
    var l = typeof h;
    if (l === "string" && h.length > 0)
      return o(h);
    if (l === "number" && isFinite(h))
      return f.long ? c(h) : a(h);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(h)
    );
  };
  function o(h) {
    if (h = String(h), !(h.length > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        h
      );
      if (f) {
        var l = parseFloat(f[1]), d = (f[2] || "ms").toLowerCase();
        switch (d) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return l * i;
          case "weeks":
          case "week":
          case "w":
            return l * s;
          case "days":
          case "day":
          case "d":
            return l * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return l * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return l * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return l * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return l;
          default:
            return;
        }
      }
    }
  }
  function a(h) {
    var f = Math.abs(h);
    return f >= n ? Math.round(h / n) + "d" : f >= r ? Math.round(h / r) + "h" : f >= t ? Math.round(h / t) + "m" : f >= e ? Math.round(h / e) + "s" : h + "ms";
  }
  function c(h) {
    var f = Math.abs(h);
    return f >= n ? u(h, f, n, "day") : f >= r ? u(h, f, r, "hour") : f >= t ? u(h, f, t, "minute") : f >= e ? u(h, f, e, "second") : h + " ms";
  }
  function u(h, f, l, d) {
    var v = f >= l * 1.5;
    return Math.round(h / l) + " " + d + (v ? "s" : "");
  }
  return er;
}
var tr, Tn;
function Fh() {
  if (Tn) return tr;
  Tn = 1;
  function e(t) {
    n.debug = n, n.default = n, n.coerce = u, n.disable = a, n.enable = i, n.enabled = c, n.humanize = Mh(), n.destroy = h, Object.keys(t).forEach((f) => {
      n[f] = t[f];
    }), n.names = [], n.skips = [], n.formatters = {};
    function r(f) {
      let l = 0;
      for (let d = 0; d < f.length; d++)
        l = (l << 5) - l + f.charCodeAt(d), l |= 0;
      return n.colors[Math.abs(l) % n.colors.length];
    }
    n.selectColor = r;
    function n(f) {
      let l, d = null, v, y;
      function E(...R) {
        if (!E.enabled)
          return;
        const W = E, T = Number(/* @__PURE__ */ new Date()), A = T - (l || T);
        W.diff = A, W.prev = l, W.curr = T, l = T, R[0] = n.coerce(R[0]), typeof R[0] != "string" && R.unshift("%O");
        let $ = 0;
        R[0] = R[0].replace(/%([a-zA-Z%])/g, (k, m) => {
          if (k === "%%")
            return "%";
          $++;
          const p = n.formatters[m];
          if (typeof p == "function") {
            const _ = R[$];
            k = p.call(W, _), R.splice($, 1), $--;
          }
          return k;
        }), n.formatArgs.call(W, R), (W.log || n.log).apply(W, R);
      }
      return E.namespace = f, E.useColors = n.useColors(), E.color = n.selectColor(f), E.extend = s, E.destroy = n.destroy, Object.defineProperty(E, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => d !== null ? d : (v !== n.namespaces && (v = n.namespaces, y = n.enabled(f)), y),
        set: (R) => {
          d = R;
        }
      }), typeof n.init == "function" && n.init(E), E;
    }
    function s(f, l) {
      const d = n(this.namespace + (typeof l > "u" ? ":" : l) + f);
      return d.log = this.log, d;
    }
    function i(f) {
      n.save(f), n.namespaces = f, n.names = [], n.skips = [];
      const l = (typeof f == "string" ? f : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const d of l)
        d[0] === "-" ? n.skips.push(d.slice(1)) : n.names.push(d);
    }
    function o(f, l) {
      let d = 0, v = 0, y = -1, E = 0;
      for (; d < f.length; )
        if (v < l.length && (l[v] === f[d] || l[v] === "*"))
          l[v] === "*" ? (y = v, E = d, v++) : (d++, v++);
        else if (y !== -1)
          v = y + 1, E++, d = E;
        else
          return !1;
      for (; v < l.length && l[v] === "*"; )
        v++;
      return v === l.length;
    }
    function a() {
      const f = [
        ...n.names,
        ...n.skips.map((l) => "-" + l)
      ].join(",");
      return n.enable(""), f;
    }
    function c(f) {
      for (const l of n.skips)
        if (o(f, l))
          return !1;
      for (const l of n.names)
        if (o(f, l))
          return !0;
      return !1;
    }
    function u(f) {
      return f instanceof Error ? f.stack || f.message : f;
    }
    function h() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return n.enable(n.load()), n;
  }
  return tr = e, tr;
}
var Cn;
function Lh() {
  return Cn || (Cn = 1, (function(e, t) {
    t.formatArgs = n, t.save = s, t.load = i, t.useColors = r, t.storage = o(), t.destroy = /* @__PURE__ */ (() => {
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
    function n(c) {
      if (c[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + c[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
        return;
      const u = "color: " + this.color;
      c.splice(1, 0, u, "color: inherit");
      let h = 0, f = 0;
      c[0].replace(/%[a-zA-Z%]/g, (l) => {
        l !== "%%" && (h++, l === "%c" && (f = h));
      }), c.splice(f, 0, u);
    }
    t.log = console.debug || console.log || (() => {
    });
    function s(c) {
      try {
        c ? t.storage.setItem("debug", c) : t.storage.removeItem("debug");
      } catch {
      }
    }
    function i() {
      let c;
      try {
        c = t.storage.getItem("debug") || t.storage.getItem("DEBUG");
      } catch {
      }
      return !c && typeof process < "u" && "env" in process && (c = void 0), c;
    }
    function o() {
      try {
        return localStorage;
      } catch {
      }
    }
    e.exports = Fh()(t);
    const { formatters: a } = e.exports;
    a.j = function(c) {
      try {
        return JSON.stringify(c);
      } catch (u) {
        return "[UnexpectedJSONParseError]: " + u.message;
      }
    };
  })(At, At.exports)), At.exports;
}
var Bh = Lh();
const Kl = /* @__PURE__ */ Ht(Bh), Fe = /* @__PURE__ */ Object.create(null);
Fe.open = "0";
Fe.close = "1";
Fe.ping = "2";
Fe.pong = "3";
Fe.message = "4";
Fe.upgrade = "5";
Fe.noop = "6";
const St = /* @__PURE__ */ Object.create(null);
Object.keys(Fe).forEach((e) => {
  St[Fe[e]] = e;
});
const Cr = { type: "error", data: "parser error" }, oo = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", ao = typeof ArrayBuffer == "function", co = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Gr = ({ type: e, data: t }, r, n) => oo && t instanceof Blob ? r ? n(t) : An(t, n) : ao && (t instanceof ArrayBuffer || co(t)) ? r ? n(t) : An(new Blob([t]), n) : n(Fe[e] + (t || "")), An = (e, t) => {
  const r = new FileReader();
  return r.onload = function() {
    const n = r.result.split(",")[1];
    t("b" + (n || ""));
  }, r.readAsDataURL(e);
};
function Nn(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let rr;
function jh(e, t) {
  if (oo && e.data instanceof Blob)
    return e.data.arrayBuffer().then(Nn).then(t);
  if (ao && (e.data instanceof ArrayBuffer || co(e.data)))
    return t(Nn(e.data));
  Gr(e, !1, (r) => {
    rr || (rr = new TextEncoder()), t(rr.encode(r));
  });
}
const xn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", mt = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < xn.length; e++)
  mt[xn.charCodeAt(e)] = e;
const Vh = (e) => {
  let t = e.length * 0.75, r = e.length, n, s = 0, i, o, a, c;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const u = new ArrayBuffer(t), h = new Uint8Array(u);
  for (n = 0; n < r; n += 4)
    i = mt[e.charCodeAt(n)], o = mt[e.charCodeAt(n + 1)], a = mt[e.charCodeAt(n + 2)], c = mt[e.charCodeAt(n + 3)], h[s++] = i << 2 | o >> 4, h[s++] = (o & 15) << 4 | a >> 2, h[s++] = (a & 3) << 6 | c & 63;
  return u;
}, qh = typeof ArrayBuffer == "function", Qr = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: uo(e, t)
    };
  const r = e.charAt(0);
  return r === "b" ? {
    type: "message",
    data: Hh(e.substring(1), t)
  } : St[r] ? e.length > 1 ? {
    type: St[r],
    data: e.substring(1)
  } : {
    type: St[r]
  } : Cr;
}, Hh = (e, t) => {
  if (qh) {
    const r = Vh(e);
    return uo(r, t);
  } else
    return { base64: !0, data: e };
}, uo = (e, t) => t === "blob" ? e instanceof Blob ? e : new Blob([e]) : e instanceof ArrayBuffer ? e : e.buffer, ho = "", Wh = (e, t) => {
  const r = e.length, n = new Array(r);
  let s = 0;
  e.forEach((i, o) => {
    Gr(i, !1, (a) => {
      n[o] = a, ++s === r && t(n.join(ho));
    });
  });
}, Jh = (e, t) => {
  const r = e.split(ho), n = [];
  for (let s = 0; s < r.length; s++) {
    const i = Qr(r[s], t);
    if (n.push(i), i.type === "error")
      break;
  }
  return n;
};
function Yh() {
  return new TransformStream({
    transform(e, t) {
      jh(e, (r) => {
        const n = r.length;
        let s;
        if (n < 126)
          s = new Uint8Array(1), new DataView(s.buffer).setUint8(0, n);
        else if (n < 65536) {
          s = new Uint8Array(3);
          const i = new DataView(s.buffer);
          i.setUint8(0, 126), i.setUint16(1, n);
        } else {
          s = new Uint8Array(9);
          const i = new DataView(s.buffer);
          i.setUint8(0, 127), i.setBigUint64(1, BigInt(n));
        }
        e.data && typeof e.data != "string" && (s[0] |= 128), t.enqueue(s), t.enqueue(r);
      });
    }
  });
}
let nr;
function Nt(e) {
  return e.reduce((t, r) => t + r.length, 0);
}
function xt(e, t) {
  if (e[0].length === t)
    return e.shift();
  const r = new Uint8Array(t);
  let n = 0;
  for (let s = 0; s < t; s++)
    r[s] = e[0][n++], n === e[0].length && (e.shift(), n = 0);
  return e.length && n < e[0].length && (e[0] = e[0].slice(n)), r;
}
function Kh(e, t) {
  nr || (nr = new TextDecoder());
  const r = [];
  let n = 0, s = -1, i = !1;
  return new TransformStream({
    transform(o, a) {
      for (r.push(o); ; ) {
        if (n === 0) {
          if (Nt(r) < 1)
            break;
          const c = xt(r, 1);
          i = (c[0] & 128) === 128, s = c[0] & 127, s < 126 ? n = 3 : s === 126 ? n = 1 : n = 2;
        } else if (n === 1) {
          if (Nt(r) < 2)
            break;
          const c = xt(r, 2);
          s = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), n = 3;
        } else if (n === 2) {
          if (Nt(r) < 8)
            break;
          const c = xt(r, 8), u = new DataView(c.buffer, c.byteOffset, c.length), h = u.getUint32(0);
          if (h > Math.pow(2, 21) - 1) {
            a.enqueue(Cr);
            break;
          }
          s = h * Math.pow(2, 32) + u.getUint32(4), n = 3;
        } else {
          if (Nt(r) < s)
            break;
          const c = xt(r, s);
          a.enqueue(Qr(i ? c : nr.decode(c), t)), n = 0;
        }
        if (s === 0 || s > e) {
          a.enqueue(Cr);
          break;
        }
      }
    }
  });
}
const fo = 4;
function pe(e) {
  if (e) return Xh(e);
}
function Xh(e) {
  for (var t in pe.prototype)
    e[t] = pe.prototype[t];
  return e;
}
pe.prototype.on = pe.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
pe.prototype.once = function(e, t) {
  function r() {
    this.off(e, r), t.apply(this, arguments);
  }
  return r.fn = t, this.on(e, r), this;
};
pe.prototype.off = pe.prototype.removeListener = pe.prototype.removeAllListeners = pe.prototype.removeEventListener = function(e, t) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var r = this._callbacks["$" + e];
  if (!r) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + e], this;
  for (var n, s = 0; s < r.length; s++)
    if (n = r[s], n === t || n.fn === t) {
      r.splice(s, 1);
      break;
    }
  return r.length === 0 && delete this._callbacks["$" + e], this;
};
pe.prototype.emit = function(e) {
  this._callbacks = this._callbacks || {};
  for (var t = new Array(arguments.length - 1), r = this._callbacks["$" + e], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  if (r) {
    r = r.slice(0);
    for (var n = 0, s = r.length; n < s; ++n)
      r[n].apply(this, t);
  }
  return this;
};
pe.prototype.emitReserved = pe.prototype.emit;
pe.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
pe.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const Wt = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, r) => r(t, 0), Re = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Gh = "arraybuffer";
function lo(e, ...t) {
  return t.reduce((r, n) => (e.hasOwnProperty(n) && (r[n] = e[n]), r), {});
}
const Qh = Re.setTimeout, ef = Re.clearTimeout;
function Jt(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = Qh.bind(Re), e.clearTimeoutFn = ef.bind(Re)) : (e.setTimeoutFn = Re.setTimeout.bind(Re), e.clearTimeoutFn = Re.clearTimeout.bind(Re));
}
const tf = 1.33;
function rf(e) {
  return typeof e == "string" ? nf(e) : Math.ceil((e.byteLength || e.size) * tf);
}
function nf(e) {
  let t = 0, r = 0;
  for (let n = 0, s = e.length; n < s; n++)
    t = e.charCodeAt(n), t < 128 ? r += 1 : t < 2048 ? r += 2 : t < 55296 || t >= 57344 ? r += 3 : (n++, r += 4);
  return r;
}
function po() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function sf(e) {
  let t = "";
  for (let r in e)
    e.hasOwnProperty(r) && (t.length && (t += "&"), t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
  return t;
}
function of(e) {
  let t = {}, r = e.split("&");
  for (let n = 0, s = r.length; n < s; n++) {
    let i = r[n].split("=");
    t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return t;
}
class af extends Error {
  constructor(t, r, n) {
    super(t), this.description = r, this.context = n, this.type = "TransportError";
  }
}
class en extends pe {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, Jt(this, t), this.opts = t, this.query = t.query, this.socket = t.socket, this.supportsBinary = !t.forceBase64;
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
  onError(t, r, n) {
    return super.emitReserved("error", new af(t, r, n)), this;
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
    const r = Qr(t, this.socket.binaryType);
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
    const r = sf(t);
    return r.length ? "?" + r : "";
  }
}
class cf extends en {
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
      let n = 0;
      this._polling && (n++, this.once("pollComplete", function() {
        --n || r();
      })), this.writable || (n++, this.once("drain", function() {
        --n || r();
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
    const r = (n) => {
      if (this.readyState === "opening" && n.type === "open" && this.onOpen(), n.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(n);
    };
    Jh(t, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, Wh(t, (r) => {
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
    return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = po()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(t, r);
  }
}
let mo = !1;
try {
  mo = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const uf = mo;
function hf() {
}
class ff extends cf {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(t) {
    if (super(t), typeof location < "u") {
      const r = location.protocol === "https:";
      let n = location.port;
      n || (n = r ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || n !== t.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data - data to send.
   * @param {Function} fn - called upon flush.
   * @private
   */
  doWrite(t, r) {
    const n = this.request({
      method: "POST",
      data: t
    });
    n.on("success", r), n.on("error", (s, i) => {
      this.onError("xhr post error", s, i);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)), t.on("error", (r, n) => {
      this.onError("xhr poll error", r, n);
    }), this.pollXhr = t;
  }
}
class De extends pe {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, r, n) {
    super(), this.createRequest = t, Jt(this, n), this._opts = n, this._method = n.method || "GET", this._uri = r, this._data = n.data !== void 0 ? n.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var t;
    const r = lo(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    r.xdomain = !!this._opts.xd;
    const n = this._xhr = this.createRequest(r);
    try {
      n.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
          for (let s in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(s) && n.setRequestHeader(s, this._opts.extraHeaders[s]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        n.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (t = this._opts.cookieJar) === null || t === void 0 || t.addCookies(n), "withCredentials" in n && (n.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (n.timeout = this._opts.requestTimeout), n.onreadystatechange = () => {
        var s;
        n.readyState === 3 && ((s = this._opts.cookieJar) === null || s === void 0 || s.parseCookies(
          // @ts-ignore
          n.getResponseHeader("set-cookie")
        )), n.readyState === 4 && (n.status === 200 || n.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof n.status == "number" ? n.status : 0);
        }, 0));
      }, n.send(this._data);
    } catch (s) {
      this.setTimeoutFn(() => {
        this._onError(s);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = De.requestsCount++, De.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = hf, t)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete De.requests[this._index], this._xhr = null;
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
De.requestsCount = 0;
De.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", zn);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in Re ? "pagehide" : "unload";
    addEventListener(e, zn, !1);
  }
}
function zn() {
  for (let e in De.requests)
    De.requests.hasOwnProperty(e) && De.requests[e].abort();
}
const lf = (function() {
  const e = go({
    xdomain: !1
  });
  return e && e.responseType !== null;
})();
class df extends ff {
  constructor(t) {
    super(t);
    const r = t && t.forceBase64;
    this.supportsBinary = lf && !r;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new De(go, this.uri(), t);
  }
}
function go(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || uf))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new Re[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const _o = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class pf extends en {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(), r = this.opts.protocols, n = _o ? {} : lo(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(t, r, n);
    } catch (s) {
      return this.emitReserved("error", s);
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
      const n = t[r], s = r === t.length - 1;
      Gr(n, this.supportsBinary, (i) => {
        try {
          this.doWrite(n, i);
        } catch {
        }
        s && Wt(() => {
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
    return this.opts.timestampRequests && (r[this.opts.timestampParam] = po()), this.supportsBinary || (r.b64 = 1), this.createUri(t, r);
  }
}
const sr = Re.WebSocket || Re.MozWebSocket;
class mf extends pf {
  createSocket(t, r, n) {
    return _o ? new sr(t, r, n) : r ? new sr(t, r) : new sr(t);
  }
  doWrite(t, r) {
    this.ws.send(r);
  }
}
class gf extends en {
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
        const r = Kh(Number.MAX_SAFE_INTEGER, this.socket.binaryType), n = t.readable.pipeThrough(r).getReader(), s = Yh();
        s.readable.pipeTo(t.writable), this._writer = s.writable.getWriter();
        const i = () => {
          n.read().then(({ done: a, value: c }) => {
            a || (this.onPacket(c), i());
          }).catch((a) => {
          });
        };
        i();
        const o = { type: "open" };
        this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`), this._writer.write(o).then(() => this.onOpen());
      });
    });
  }
  write(t) {
    this.writable = !1;
    for (let r = 0; r < t.length; r++) {
      const n = t[r], s = r === t.length - 1;
      this._writer.write(n).then(() => {
        s && Wt(() => {
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
const _f = {
  websocket: mf,
  webtransport: gf,
  polling: df
}, yf = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, vf = [
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
function Ar(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const t = e, r = e.indexOf("["), n = e.indexOf("]");
  r != -1 && n != -1 && (e = e.substring(0, r) + e.substring(r, n).replace(/:/g, ";") + e.substring(n, e.length));
  let s = yf.exec(e || ""), i = {}, o = 14;
  for (; o--; )
    i[vf[o]] = s[o] || "";
  return r != -1 && n != -1 && (i.source = t, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = bf(i, i.path), i.queryKey = wf(i, i.query), i;
}
function bf(e, t) {
  const r = /\/{2,9}/g, n = t.replace(r, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && n.splice(0, 1), t.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function wf(e, t) {
  const r = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, s, i) {
    s && (r[s] = i);
  }), r;
}
const Nr = typeof addEventListener == "function" && typeof removeEventListener == "function", Rt = [];
Nr && addEventListener("offline", () => {
  Rt.forEach((e) => e());
}, !1);
class Ye extends pe {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, r) {
    if (super(), this.binaryType = Gh, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (r = t, t = null), t) {
      const n = Ar(t);
      r.hostname = n.host, r.secure = n.protocol === "https" || n.protocol === "wss", r.port = n.port, n.query && (r.query = n.query);
    } else r.host && (r.hostname = Ar(r.host).host);
    Jt(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, r.transports.forEach((n) => {
      const s = n.prototype.name;
      this.transports.push(s), this._transportsByName[s] = n;
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
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = of(this.opts.query)), Nr && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, Rt.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    r.EIO = fo, r.transport = t, this.id && (r.sid = this.id);
    const n = Object.assign({}, this.opts, {
      query: r,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[t]);
    return new this._transportsByName[t](n);
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
    const t = this.opts.rememberUpgrade && Ye.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", Ye.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
    for (let n = 0; n < this.writeBuffer.length; n++) {
      const s = this.writeBuffer[n].data;
      if (s && (r += rf(s)), n > 0 && r > this._maxPayload)
        return this.writeBuffer.slice(0, n);
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
    return t && (this._pingTimeoutTime = 0, Wt(() => {
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
  write(t, r, n) {
    return this._sendPacket("message", t, r, n), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(t, r, n) {
    return this._sendPacket("message", t, r, n), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type - packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  _sendPacket(t, r, n, s) {
    if (typeof r == "function" && (s = r, r = void 0), typeof n == "function" && (s = n, n = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    n = n || {}, n.compress = n.compress !== !1;
    const i = {
      type: t,
      data: r,
      options: n
    };
    this.emitReserved("packetCreate", i), this.writeBuffer.push(i), s && this.once("flush", s), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const t = () => {
      this._onClose("forced close"), this.transport.close();
    }, r = () => {
      this.off("upgrade", r), this.off("upgradeError", r), t();
    }, n = () => {
      this.once("upgrade", r), this.once("upgradeError", r);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? n() : t();
    }) : this.upgrading ? n() : t()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(t) {
    if (Ye.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Nr && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const n = Rt.indexOf(this._offlineEventListener);
        n !== -1 && Rt.splice(n, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, r), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Ye.protocol = fo;
class kf extends Ye {
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
    let r = this.createTransport(t), n = !1;
    Ye.priorWebsocketSuccess = !1;
    const s = () => {
      n || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (f) => {
        if (!n)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", r), !r)
              return;
            Ye.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (h(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = !1, this.flush());
            });
          } else {
            const l = new Error("probe error");
            l.transport = r.name, this.emitReserved("upgradeError", l);
          }
      }));
    };
    function i() {
      n || (n = !0, h(), r.close(), r = null);
    }
    const o = (f) => {
      const l = new Error("probe error: " + f);
      l.transport = r.name, i(), this.emitReserved("upgradeError", l);
    };
    function a() {
      o("transport closed");
    }
    function c() {
      o("socket closed");
    }
    function u(f) {
      r && f.name !== r.name && i();
    }
    const h = () => {
      r.removeListener("open", s), r.removeListener("error", o), r.removeListener("close", a), this.off("close", c), this.off("upgrading", u);
    };
    r.once("open", s), r.once("error", o), r.once("close", a), this.once("close", c), this.once("upgrading", u), this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn(() => {
      n || r.open();
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
    for (let n = 0; n < t.length; n++)
      ~this.transports.indexOf(t[n]) && r.push(t[n]);
    return r;
  }
}
let Ef = class extends kf {
  constructor(t, r = {}) {
    const n = typeof t == "object" ? t : r;
    (!n.transports || n.transports && typeof n.transports[0] == "string") && (n.transports = (n.transports || ["polling", "websocket", "webtransport"]).map((s) => _f[s]).filter((s) => !!s)), super(t, n);
  }
};
function Of(e, t = "", r) {
  let n = e;
  r = r || typeof location < "u" && location, e == null && (e = r.protocol + "//" + r.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = r.protocol + e : e = r.host + e), /^(https?|wss?):\/\//.test(e) || (typeof r < "u" ? e = r.protocol + "//" + e : e = "https://" + e), n = Ar(e)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const i = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + i + ":" + n.port + t, n.href = n.protocol + "://" + i + (r && r.port === n.port ? "" : ":" + n.port), n;
}
const Tf = typeof ArrayBuffer == "function", Cf = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, yo = Object.prototype.toString, Af = typeof Blob == "function" || typeof Blob < "u" && yo.call(Blob) === "[object BlobConstructor]", Nf = typeof File == "function" || typeof File < "u" && yo.call(File) === "[object FileConstructor]";
function tn(e) {
  return Tf && (e instanceof ArrayBuffer || Cf(e)) || Af && e instanceof Blob || Nf && e instanceof File;
}
function It(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let r = 0, n = e.length; r < n; r++)
      if (It(e[r]))
        return !0;
    return !1;
  }
  if (tn(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return It(e.toJSON(), !0);
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && It(e[r]))
      return !0;
  return !1;
}
function xf(e) {
  const t = [], r = e.data, n = e;
  return n.data = xr(r, t), n.attachments = t.length, { packet: n, buffers: t };
}
function xr(e, t) {
  if (!e)
    return e;
  if (tn(e)) {
    const r = { _placeholder: !0, num: t.length };
    return t.push(e), r;
  } else if (Array.isArray(e)) {
    const r = new Array(e.length);
    for (let n = 0; n < e.length; n++)
      r[n] = xr(e[n], t);
    return r;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const r = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (r[n] = xr(e[n], t));
    return r;
  }
  return e;
}
function zf(e, t) {
  return e.data = zr(e.data, t), delete e.attachments, e;
}
function zr(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let r = 0; r < e.length; r++)
      e[r] = zr(e[r], t);
  else if (typeof e == "object")
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (e[r] = zr(e[r], t));
  return e;
}
const Sf = [
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
];
var X;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(X || (X = {}));
class Rf {
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
    return (t.type === X.EVENT || t.type === X.ACK) && It(t) ? this.encodeAsBinary({
      type: t.type === X.EVENT ? X.BINARY_EVENT : X.BINARY_ACK,
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
    return (t.type === X.BINARY_EVENT || t.type === X.BINARY_ACK) && (r += t.attachments + "-"), t.nsp && t.nsp !== "/" && (r += t.nsp + ","), t.id != null && (r += t.id), t.data != null && (r += JSON.stringify(t.data, this.replacer)), r;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const r = xf(t), n = this.encodeAsString(r.packet), s = r.buffers;
    return s.unshift(n), s;
  }
}
class rn extends pe {
  /**
   * Decoder constructor
   */
  constructor(t) {
    super(), this.opts = Object.assign({
      reviver: void 0,
      maxAttachments: 10
    }, typeof t == "function" ? { reviver: t } : t);
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
      const n = r.type === X.BINARY_EVENT;
      n || r.type === X.BINARY_ACK ? (r.type = n ? X.EVENT : X.ACK, this.reconstructor = new If(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
    } else if (tn(t) || t.base64)
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
    const n = {
      type: Number(t.charAt(0))
    };
    if (X[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === X.BINARY_EVENT || n.type === X.BINARY_ACK) {
      const i = r + 1;
      for (; t.charAt(++r) !== "-" && r != t.length; )
        ;
      const o = t.substring(i, r);
      if (o != Number(o) || t.charAt(r) !== "-")
        throw new Error("Illegal attachments");
      const a = Number(o);
      if (!$f(a) || a < 0)
        throw new Error("Illegal attachments");
      if (a > this.opts.maxAttachments)
        throw new Error("too many attachments");
      n.attachments = a;
    }
    if (t.charAt(r + 1) === "/") {
      const i = r + 1;
      for (; ++r && !(t.charAt(r) === "," || r === t.length); )
        ;
      n.nsp = t.substring(i, r);
    } else
      n.nsp = "/";
    const s = t.charAt(r + 1);
    if (s !== "" && Number(s) == s) {
      const i = r + 1;
      for (; ++r; ) {
        const o = t.charAt(r);
        if (o == null || Number(o) != o) {
          --r;
          break;
        }
        if (r === t.length)
          break;
      }
      n.id = Number(t.substring(i, r + 1));
    }
    if (t.charAt(++r)) {
      const i = this.tryParse(t.substr(r));
      if (rn.isPayloadValid(n.type, i))
        n.data = i;
      else
        throw new Error("invalid payload");
    }
    return n;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.opts.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, r) {
    switch (t) {
      case X.CONNECT:
        return Sn(r);
      case X.DISCONNECT:
        return r === void 0;
      case X.CONNECT_ERROR:
        return typeof r == "string" || Sn(r);
      case X.EVENT:
      case X.BINARY_EVENT:
        return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && Sf.indexOf(r[0]) === -1);
      case X.ACK:
      case X.BINARY_ACK:
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
class If {
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
      const r = zf(this.reconPack, this.buffers);
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
const $f = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
};
function Sn(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
const Uf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, Decoder: rn, Encoder: Rf, get PacketType() {
  return X;
} }, Symbol.toStringTag, { value: "Module" }));
function Pe(e, t, r) {
  return e.on(t, r), function() {
    e.off(t, r);
  };
}
const Pf = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class vo extends pe {
  /**
   * `Socket` constructor.
   */
  constructor(t, r, n) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = r, n && n.auth && (this.auth = n.auth), this._opts = Object.assign({}, n), this.io._autoConnect && this.open();
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
      Pe(t, "open", this.onopen.bind(this)),
      Pe(t, "packet", this.onpacket.bind(this)),
      Pe(t, "error", this.onerror.bind(this)),
      Pe(t, "close", this.onclose.bind(this))
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
    var n, s, i;
    if (Pf.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (r.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(r), this;
    const o = {
      type: X.EVENT,
      data: r
    };
    if (o.options = {}, o.options.compress = this.flags.compress !== !1, typeof r[r.length - 1] == "function") {
      const h = this.ids++, f = r.pop();
      this._registerAckCallback(h, f), o.id = h;
    }
    const a = (s = (n = this.io.engine) === null || n === void 0 ? void 0 : n.transport) === null || s === void 0 ? void 0 : s.writable, c = this.connected && !(!((i = this.io.engine) === null || i === void 0) && i._hasPingExpired());
    return this.flags.volatile && !a || (c ? (this.notifyOutgoingListeners(o), this.packet(o)) : this.sendBuffer.push(o)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(t, r) {
    var n;
    const s = (n = this.flags.timeout) !== null && n !== void 0 ? n : this._opts.ackTimeout;
    if (s === void 0) {
      this.acks[t] = r;
      return;
    }
    const i = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === t && this.sendBuffer.splice(a, 1);
      r.call(this, new Error("operation has timed out"));
    }, s), o = (...a) => {
      this.io.clearTimeoutFn(i), r.apply(this, a);
    };
    o.withError = !0, this.acks[t] = o;
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
    return new Promise((n, s) => {
      const i = (o, a) => o ? s(o) : n(a);
      i.withError = !0, r.push(i), this.emit(t, ...r);
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
    const n = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    t.push((s, ...i) => (this._queue[0], s !== null ? n.tryCount > this._opts.retries && (this._queue.shift(), r && r(s)) : (this._queue.shift(), r && r(null, ...i)), n.pending = !1, this._drainQueue())), this._queue.push(n), this._drainQueue();
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
      type: X.CONNECT,
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
      if (!this.sendBuffer.some((n) => String(n.id) === t)) {
        const n = this.acks[t];
        delete this.acks[t], n.withError && n.call(this, new Error("socket has been disconnected"));
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
        case X.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case X.EVENT:
        case X.BINARY_EVENT:
          this.onevent(t);
          break;
        case X.ACK:
        case X.BINARY_ACK:
          this.onack(t);
          break;
        case X.DISCONNECT:
          this.ondisconnect();
          break;
        case X.CONNECT_ERROR:
          this.destroy();
          const n = new Error(t.data.message);
          n.data = t.data.data, this.emitReserved("connect_error", n);
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
      for (const n of r)
        n.apply(this, t);
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
    let n = !1;
    return function(...s) {
      n || (n = !0, r.packet({
        type: X.ACK,
        id: t,
        data: s
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
    return this.connected && this.packet({ type: X.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
      for (let n = 0; n < r.length; n++)
        if (t === r[n])
          return r.splice(n, 1), this;
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
      for (let n = 0; n < r.length; n++)
        if (t === r[n])
          return r.splice(n, 1), this;
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
      for (const n of r)
        n.apply(this, t.data);
    }
  }
}
function ct(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
ct.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), r = Math.floor(t * this.jitter * e);
    e = (Math.floor(t * 10) & 1) == 0 ? e - r : e + r;
  }
  return Math.min(e, this.max) | 0;
};
ct.prototype.reset = function() {
  this.attempts = 0;
};
ct.prototype.setMin = function(e) {
  this.ms = e;
};
ct.prototype.setMax = function(e) {
  this.max = e;
};
ct.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Sr extends pe {
  constructor(t, r) {
    var n;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (r = t, t = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, Jt(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((n = r.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new ct({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = t;
    const s = r.parser || Uf;
    this.encoder = new s.Encoder(), this.decoder = new s.Decoder(), this._autoConnect = r.autoConnect !== !1, this._autoConnect && this.open();
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
    this.engine = new Ef(this.uri, this.opts);
    const r = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const s = Pe(r, "open", function() {
      n.onopen(), t && t();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), t ? t(a) : this.maybeReconnectOnOpen();
    }, o = Pe(r, "error", i);
    if (this._timeout !== !1) {
      const a = this._timeout, c = this.setTimeoutFn(() => {
        s(), i(new Error("timeout")), r.close();
      }, a);
      this.opts.autoUnref && c.unref(), this.subs.push(() => {
        this.clearTimeoutFn(c);
      });
    }
    return this.subs.push(s), this.subs.push(o), this;
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
      Pe(t, "ping", this.onping.bind(this)),
      Pe(t, "data", this.ondata.bind(this)),
      Pe(t, "error", this.onerror.bind(this)),
      Pe(t, "close", this.onclose.bind(this)),
      // @ts-ignore
      Pe(this.decoder, "decoded", this.ondecoded.bind(this))
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
    Wt(() => {
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
    let n = this.nsps[t];
    return n ? this._autoConnect && !n.active && n.connect() : (n = new vo(this, t, r), this.nsps[t] = n), n;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(t) {
    const r = Object.keys(this.nsps);
    for (const n of r)
      if (this.nsps[n].active)
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
    for (let n = 0; n < r.length; n++)
      this.engine.write(r[n], t.options);
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
    var n;
    this.cleanup(), (n = this.engine) === null || n === void 0 || n.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, r), this._reconnection && !this.skipReconnect && this.reconnect();
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
      const n = this.setTimeoutFn(() => {
        t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open((s) => {
          s ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", s)) : t.onreconnect();
        }));
      }, r);
      this.opts.autoUnref && n.unref(), this.subs.push(() => {
        this.clearTimeoutFn(n);
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
const ht = {};
function ir(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const r = Of(e, t.path || "/socket.io"), n = r.source, s = r.id, i = r.path, o = ht[s] && i in ht[s].nsps, a = t.forceNew || t["force new connection"] || t.multiplex === !1 || o;
  let c;
  return a ? c = new Sr(n, t) : (ht[s] || (ht[s] = new Sr(n, t)), c = ht[s]), r.query && !t.query && (t.query = r.queryKey), c.socket(r.path, t);
}
Object.assign(ir, {
  Manager: Sr,
  Socket: vo,
  io: ir,
  connect: ir
});
function wt(e) {
  "@babel/helpers - typeof";
  return wt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wt(e);
}
var Ze = Uint8Array, xe = Uint16Array, nn = Int32Array, sn = new Ze([
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
]), on = new Ze([
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
]), Rn = new Ze([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), bo = function(e, t) {
  for (var r = new xe(31), n = 0; n < 31; ++n)
    r[n] = t += 1 << e[n - 1];
  for (var s = new nn(r[30]), n = 1; n < 30; ++n)
    for (var i = r[n]; i < r[n + 1]; ++i)
      s[i] = i - r[n] << 5 | n;
  return { b: r, r: s };
}, wo = bo(sn, 2), Zf = wo.b, Rr = wo.r;
Zf[28] = 258, Rr[258] = 28;
var Df = bo(on, 0), In = Df.r, Ir = new xe(32768);
for (var ce = 0; ce < 32768; ++ce) {
  var We = (ce & 43690) >> 1 | (ce & 21845) << 1;
  We = (We & 52428) >> 2 | (We & 13107) << 2, We = (We & 61680) >> 4 | (We & 3855) << 4, Ir[ce] = ((We & 65280) >> 8 | (We & 255) << 8) >> 1;
}
var yt = (function(e, t, r) {
  for (var n = e.length, s = 0, i = new xe(t); s < n; ++s)
    e[s] && ++i[e[s] - 1];
  var o = new xe(t);
  for (s = 1; s < t; ++s)
    o[s] = o[s - 1] + i[s - 1] << 1;
  var a;
  if (r) {
    a = new xe(1 << t);
    var c = 15 - t;
    for (s = 0; s < n; ++s)
      if (e[s])
        for (var u = s << 4 | e[s], h = t - e[s], f = o[e[s] - 1]++ << h, l = f | (1 << h) - 1; f <= l; ++f)
          a[Ir[f] >> c] = u;
  } else
    for (a = new xe(n), s = 0; s < n; ++s)
      e[s] && (a[s] = Ir[o[e[s] - 1]++] >> 15 - e[s]);
  return a;
}), Qe = new Ze(288);
for (var ce = 0; ce < 144; ++ce)
  Qe[ce] = 8;
for (var ce = 144; ce < 256; ++ce)
  Qe[ce] = 9;
for (var ce = 256; ce < 280; ++ce)
  Qe[ce] = 7;
for (var ce = 280; ce < 288; ++ce)
  Qe[ce] = 8;
var Bt = new Ze(32);
for (var ce = 0; ce < 32; ++ce)
  Bt[ce] = 5;
var Mf = /* @__PURE__ */ yt(Qe, 9, 0), Ff = /* @__PURE__ */ yt(Bt, 5, 0), ko = function(e) {
  return (e + 7) / 8 | 0;
}, Lf = function(e, t, r) {
  return (r == null || r > e.length) && (r = e.length), new Ze(e.subarray(t, r));
}, Le = function(e, t, r) {
  r <<= t & 7;
  var n = t / 8 | 0;
  e[n] |= r, e[n + 1] |= r >> 8;
}, ft = function(e, t, r) {
  r <<= t & 7;
  var n = t / 8 | 0;
  e[n] |= r, e[n + 1] |= r >> 8, e[n + 2] |= r >> 16;
}, or = function(e, t) {
  for (var r = [], n = 0; n < e.length; ++n)
    e[n] && r.push({ s: n, f: e[n] });
  var s = r.length, i = r.slice();
  if (!s)
    return { t: Oo, l: 0 };
  if (s == 1) {
    var o = new Ze(r[0].s + 1);
    return o[r[0].s] = 1, { t: o, l: 1 };
  }
  r.sort(function($, P) {
    return $.f - P.f;
  }), r.push({ s: -1, f: 25001 });
  var a = r[0], c = r[1], u = 0, h = 1, f = 2;
  for (r[0] = { s: -1, f: a.f + c.f, l: a, r: c }; h != s - 1; )
    a = r[r[u].f < r[f].f ? u++ : f++], c = r[u != h && r[u].f < r[f].f ? u++ : f++], r[h++] = { s: -1, f: a.f + c.f, l: a, r: c };
  for (var l = i[0].s, n = 1; n < s; ++n)
    i[n].s > l && (l = i[n].s);
  var d = new xe(l + 1), v = $r(r[h - 1], d, 0);
  if (v > t) {
    var n = 0, y = 0, E = v - t, R = 1 << E;
    for (i.sort(function(P, k) {
      return d[k.s] - d[P.s] || P.f - k.f;
    }); n < s; ++n) {
      var W = i[n].s;
      if (d[W] > t)
        y += R - (1 << v - d[W]), d[W] = t;
      else
        break;
    }
    for (y >>= E; y > 0; ) {
      var T = i[n].s;
      d[T] < t ? y -= 1 << t - d[T]++ - 1 : ++n;
    }
    for (; n >= 0 && y; --n) {
      var A = i[n].s;
      d[A] == t && (--d[A], ++y);
    }
    v = t;
  }
  return { t: new Ze(d), l: v };
}, $r = function(e, t, r) {
  return e.s == -1 ? Math.max($r(e.l, t, r + 1), $r(e.r, t, r + 1)) : t[e.s] = r;
}, $n = function(e) {
  for (var t = e.length; t && !e[--t]; )
    ;
  for (var r = new xe(++t), n = 0, s = e[0], i = 1, o = function(c) {
    r[n++] = c;
  }, a = 1; a <= t; ++a)
    if (e[a] == s && a != t)
      ++i;
    else {
      if (!s && i > 2) {
        for (; i > 138; i -= 138)
          o(32754);
        i > 2 && (o(i > 10 ? i - 11 << 5 | 28690 : i - 3 << 5 | 12305), i = 0);
      } else if (i > 3) {
        for (o(s), --i; i > 6; i -= 6)
          o(8304);
        i > 2 && (o(i - 3 << 5 | 8208), i = 0);
      }
      for (; i--; )
        o(s);
      i = 1, s = e[a];
    }
  return { c: r.subarray(0, n), n: t };
}, lt = function(e, t) {
  for (var r = 0, n = 0; n < t.length; ++n)
    r += e[n] * t[n];
  return r;
}, Eo = function(e, t, r) {
  var n = r.length, s = ko(t + 2);
  e[s] = n & 255, e[s + 1] = n >> 8, e[s + 2] = e[s] ^ 255, e[s + 3] = e[s + 1] ^ 255;
  for (var i = 0; i < n; ++i)
    e[s + i + 4] = r[i];
  return (s + 4 + n) * 8;
}, Un = function(e, t, r, n, s, i, o, a, c, u, h) {
  Le(t, h++, r), ++s[256];
  for (var f = or(s, 15), l = f.t, d = f.l, v = or(i, 15), y = v.t, E = v.l, R = $n(l), W = R.c, T = R.n, A = $n(y), $ = A.c, P = A.n, k = new xe(19), m = 0; m < W.length; ++m)
    ++k[W[m] & 31];
  for (var m = 0; m < $.length; ++m)
    ++k[$[m] & 31];
  for (var p = or(k, 7), _ = p.t, O = p.l, w = 19; w > 4 && !_[Rn[w - 1]]; --w)
    ;
  var I = u + 5 << 3, M = lt(s, Qe) + lt(i, Bt) + o, V = lt(s, l) + lt(i, y) + o + 14 + 3 * w + lt(k, _) + 2 * k[16] + 3 * k[17] + 7 * k[18];
  if (c >= 0 && I <= M && I <= V)
    return Eo(t, h, e.subarray(c, c + u));
  var Y, x, D, C;
  if (Le(t, h, 1 + (V < M)), h += 2, V < M) {
    Y = yt(l, d, 0), x = l, D = yt(y, E, 0), C = y;
    var F = yt(_, O, 0);
    Le(t, h, T - 257), Le(t, h + 5, P - 1), Le(t, h + 10, w - 4), h += 14;
    for (var m = 0; m < w; ++m)
      Le(t, h + 3 * m, _[Rn[m]]);
    h += 3 * w;
    for (var z = [W, $], U = 0; U < 2; ++U)
      for (var N = z[U], m = 0; m < N.length; ++m) {
        var q = N[m] & 31;
        Le(t, h, F[q]), h += _[q], q > 15 && (Le(t, h, N[m] >> 5 & 127), h += N[m] >> 12);
      }
  } else
    Y = Mf, x = Qe, D = Ff, C = Bt;
  for (var m = 0; m < a; ++m) {
    var L = n[m];
    if (L > 255) {
      var q = L >> 18 & 31;
      ft(t, h, Y[q + 257]), h += x[q + 257], q > 7 && (Le(t, h, L >> 23 & 31), h += sn[q]);
      var se = L & 31;
      ft(t, h, D[se]), h += C[se], se > 3 && (ft(t, h, L >> 5 & 8191), h += on[se]);
    } else
      ft(t, h, Y[L]), h += x[L];
  }
  return ft(t, h, Y[256]), h + x[256];
}, Bf = /* @__PURE__ */ new nn([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Oo = /* @__PURE__ */ new Ze(0), jf = function(e, t, r, n, s, i) {
  var o = i.z || e.length, a = new Ze(n + o + 5 * (1 + Math.ceil(o / 7e3)) + s), c = a.subarray(n, a.length - s), u = i.l, h = (i.r || 0) & 7;
  if (t) {
    h && (c[0] = i.r >> 3);
    for (var f = Bf[t - 1], l = f >> 13, d = f & 8191, v = (1 << r) - 1, y = i.p || new xe(32768), E = i.h || new xe(v + 1), R = Math.ceil(r / 3), W = 2 * R, T = function(H) {
      return (e[H] ^ e[H + 1] << R ^ e[H + 2] << W) & v;
    }, A = new nn(25e3), $ = new xe(288), P = new xe(32), k = 0, m = 0, p = i.i || 0, _ = 0, O = i.w || 0, w = 0; p + 2 < o; ++p) {
      var I = T(p), M = p & 32767, V = E[I];
      if (y[M] = V, E[I] = M, O <= p) {
        var Y = o - p;
        if ((k > 7e3 || _ > 24576) && (Y > 423 || !u)) {
          h = Un(e, c, 0, A, $, P, m, _, w, p - w, h), _ = k = m = 0, w = p;
          for (var x = 0; x < 286; ++x)
            $[x] = 0;
          for (var x = 0; x < 30; ++x)
            P[x] = 0;
        }
        var D = 2, C = 0, F = d, z = M - V & 32767;
        if (Y > 2 && I == T(p - z))
          for (var U = Math.min(l, Y) - 1, N = Math.min(32767, p), q = Math.min(258, Y); z <= N && --F && M != V; ) {
            if (e[p + D] == e[p + D - z]) {
              for (var L = 0; L < q && e[p + L] == e[p + L - z]; ++L)
                ;
              if (L > D) {
                if (D = L, C = z, L > U)
                  break;
                for (var se = Math.min(z, L - 2), me = 0, x = 0; x < se; ++x) {
                  var j = p - z + x & 32767, K = y[j], ne = j - K & 32767;
                  ne > me && (me = ne, V = j);
                }
              }
            }
            M = V, V = y[M], z += M - V & 32767;
          }
        if (C) {
          A[_++] = 268435456 | Rr[D] << 18 | In[C];
          var Z = Rr[D] & 31, ie = In[C] & 31;
          m += sn[Z] + on[ie], ++$[257 + Z], ++P[ie], O = p + D, ++k;
        } else
          A[_++] = e[p], ++$[e[p]];
      }
    }
    for (p = Math.max(p, O); p < o; ++p)
      A[_++] = e[p], ++$[e[p]];
    h = Un(e, c, u, A, $, P, m, _, w, p - w, h), u || (i.r = h & 7 | c[h / 8 | 0] << 3, h -= 7, i.h = E, i.p = y, i.i = p, i.w = O);
  } else {
    for (var p = i.w || 0; p < o + u; p += 65535) {
      var oe = p + 65535;
      oe >= o && (c[h / 8 | 0] = u, oe = o), h = Eo(c, h + 1, e.subarray(p, oe));
    }
    i.i = o;
  }
  return Lf(a, 0, n + ko(h) + s);
}, To = function() {
  var e = 1, t = 0;
  return {
    p: function(r) {
      for (var n = e, s = t, i = r.length | 0, o = 0; o != i; ) {
        for (var a = Math.min(o + 2655, i); o < a; ++o)
          s += n += r[o];
        n = (n & 65535) + 15 * (n >> 16), s = (s & 65535) + 15 * (s >> 16);
      }
      e = n, t = s;
    },
    d: function() {
      return e %= 65521, t %= 65521, (e & 255) << 24 | (e & 65280) << 8 | (t & 255) << 8 | t >> 8;
    }
  };
}, Vf = function(e, t, r, n, s) {
  if (!s && (s = { l: 1 }, t.dictionary)) {
    var i = t.dictionary.subarray(-32768), o = new Ze(i.length + e.length);
    o.set(i), o.set(e, i.length), e = o, s.w = i.length;
  }
  return jf(e, t.level == null ? 6 : t.level, t.mem == null ? s.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(e.length))) * 1.5) : 20 : 12 + t.mem, r, n, s);
}, Co = function(e, t, r) {
  for (; r; ++t)
    e[t] = r, r >>>= 8;
}, qf = function(e, t) {
  var r = t.level, n = r == 0 ? 0 : r < 6 ? 1 : r == 9 ? 3 : 2;
  if (e[0] = 120, e[1] = n << 6 | (t.dictionary && 32), e[1] |= 31 - (e[0] << 8 | e[1]) % 31, t.dictionary) {
    var s = To();
    s.p(t.dictionary), Co(e, 2, s.d());
  }
};
function Gl(e, t) {
  t || (t = {});
  var r = To();
  r.p(e);
  var n = Vf(e, t, t.dictionary ? 6 : 2, 4);
  return qf(n, t), Co(n, n.length - 4, r.d()), n;
}
var Hf = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Wf = 0;
try {
  Hf.decode(Oo, { stream: !0 }), Wf = 1;
} catch {
}
function Jf(e) {
  if (Array.isArray(e)) return e;
}
function Yf(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, s, i, o, a = [], c = !0, u = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (a.push(n.value), a.length !== t); c = !0) ;
    } catch (h) {
      u = !0, s = h;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw s;
      }
    }
    return a;
  }
}
function Pn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Kf(e, t) {
  if (e) {
    if (typeof e == "string") return Pn(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Pn(e, t) : void 0;
  }
}
function Xf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ql(e, t) {
  return Jf(e) || Yf(e, t) || Kf(e, t) || Xf();
}
function Zn(e, t = "utf8") {
  return new TextDecoder(t).decode(e);
}
const Gf = new TextEncoder();
function Qf(e) {
  return Gf.encode(e);
}
const el = 1024 * 8, tl = (() => {
  const e = new Uint8Array(4), t = new Uint32Array(e.buffer);
  return !((t[0] = 1) & e[0]);
})(), ar = {
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
class an {
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
  constructor(t = el, r = {}) {
    let n = !1;
    typeof t == "number" ? t = new ArrayBuffer(t) : (n = !0, this.lastWrittenByte = t.byteLength);
    const s = r.offset ? r.offset >>> 0 : 0, i = t.byteLength - s;
    let o = s;
    (ArrayBuffer.isView(t) || t instanceof an) && (t.byteLength !== t.buffer.byteLength && (o = t.byteOffset + s), t = t.buffer), n ? this.lastWrittenByte = i : this.lastWrittenByte = 0, this.buffer = t, this.length = i, this.byteLength = i, this.byteOffset = o, this.offset = 0, this.littleEndian = !0, this._data = new DataView(this.buffer, o, i), this._mark = 0, this._marks = [];
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
      const n = (this.offset + t) * 2, s = new Uint8Array(n);
      s.set(new Uint8Array(this.buffer)), this.buffer = s.buffer, this.length = n, this.byteLength = n, this._data = new DataView(this.buffer);
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
    const n = ar[r].BYTES_PER_ELEMENT * t, s = this.byteOffset + this.offset, i = this.buffer.slice(s, s + n);
    if (this.littleEndian === tl && r !== "uint8" && r !== "int8") {
      const a = new Uint8Array(this.buffer.slice(s, s + n));
      a.reverse();
      const c = new ar[r](a.buffer);
      return this.offset += n, c.reverse(), c;
    }
    const o = new ar[r](i);
    return this.offset += n, o;
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
    for (let n = 0; n < t; n++)
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
    return Zn(this.readBytes(t));
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
    return Zn(this.readBytes(t), r);
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
    return this.writeBytes(Qf(t));
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
const Ao = [];
for (let e = 0; e < 256; e++) {
  let t = e;
  for (let r = 0; r < 8; r++)
    t & 1 ? t = 3988292384 ^ t >>> 1 : t = t >>> 1;
  Ao[e] = t;
}
const Dn = 4294967295;
function rl(e, t, r) {
  let n = e;
  for (let s = 0; s < r; s++)
    n = Ao[(n ^ t[s]) & 255] ^ n >>> 8;
  return n;
}
function nl(e, t) {
  return (rl(Dn, e, t) ^ Dn) >>> 0;
}
function Mn(e, t, r) {
  const n = e.readUint32(), s = nl(new Uint8Array(e.buffer, e.byteOffset + e.offset - t - 4, t), t);
  if (s !== n)
    throw new Error(`CRC mismatch for chunk ${r}. Expected ${n}, found ${s}`);
}
function No(e, t, r) {
  for (let n = 0; n < r; n++)
    t[n] = e[n];
}
function xo(e, t, r, n) {
  let s = 0;
  for (; s < n; s++)
    t[s] = e[s];
  for (; s < r; s++)
    t[s] = e[s] + t[s - n] & 255;
}
function zo(e, t, r, n) {
  let s = 0;
  if (r.length === 0)
    for (; s < n; s++)
      t[s] = e[s];
  else
    for (; s < n; s++)
      t[s] = e[s] + r[s] & 255;
}
function So(e, t, r, n, s) {
  let i = 0;
  if (r.length === 0) {
    for (; i < s; i++)
      t[i] = e[i];
    for (; i < n; i++)
      t[i] = e[i] + (t[i - s] >> 1) & 255;
  } else {
    for (; i < s; i++)
      t[i] = e[i] + (r[i] >> 1) & 255;
    for (; i < n; i++)
      t[i] = e[i] + (t[i - s] + r[i] >> 1) & 255;
  }
}
function Ro(e, t, r, n, s) {
  let i = 0;
  if (r.length === 0) {
    for (; i < s; i++)
      t[i] = e[i];
    for (; i < n; i++)
      t[i] = e[i] + t[i - s] & 255;
  } else {
    for (; i < s; i++)
      t[i] = e[i] + r[i] & 255;
    for (; i < n; i++)
      t[i] = e[i] + sl(t[i - s], r[i], r[i - s]) & 255;
  }
}
function sl(e, t, r) {
  const n = e + t - r, s = Math.abs(n - e), i = Math.abs(n - t), o = Math.abs(n - r);
  return s <= i && s <= o ? e : i <= o ? t : r;
}
function il(e, t, r, n, s, i) {
  switch (e) {
    case 0:
      No(t, r, s);
      break;
    case 1:
      xo(t, r, s, i);
      break;
    case 2:
      zo(t, r, n, s);
      break;
    case 3:
      So(t, r, n, s, i);
      break;
    case 4:
      Ro(t, r, n, s, i);
      break;
    default:
      throw new Error(`Unsupported filter: ${e}`);
  }
}
const ol = new Uint16Array([255]), al = new Uint8Array(ol.buffer), cl = al[0] === 255;
function ul(e) {
  const { data: t, width: r, height: n, channels: s, depth: i } = e, o = [
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
  ], a = Math.ceil(i / 8) * s, c = new Uint8Array(n * r * a);
  let u = 0;
  for (let h = 0; h < 7; h++) {
    const f = o[h], l = Math.ceil((r - f.x) / f.xStep), d = Math.ceil((n - f.y) / f.yStep);
    if (l <= 0 || d <= 0)
      continue;
    const v = l * a, y = new Uint8Array(v);
    for (let E = 0; E < d; E++) {
      const R = t[u++], W = t.subarray(u, u + v);
      u += v;
      const T = new Uint8Array(v);
      il(R, W, T, y, v, a), y.set(T);
      for (let A = 0; A < l; A++) {
        const $ = f.x + A * f.xStep, P = f.y + E * f.yStep;
        if (!($ >= r || P >= n))
          for (let k = 0; k < a; k++)
            c[(P * r + $) * a + k] = T[A * a + k];
      }
    }
  }
  if (i === 16) {
    const h = new Uint16Array(c.buffer);
    if (cl)
      for (let f = 0; f < h.length; f++)
        h[f] = hl(h[f]);
    return h;
  } else
    return c;
}
function hl(e) {
  return (e & 255) << 8 | e >> 8 & 255;
}
const fl = new Uint16Array([255]), ll = new Uint8Array(fl.buffer), dl = ll[0] === 255, pl = new Uint8Array(0);
function Fn(e) {
  const { data: t, width: r, height: n, channels: s, depth: i } = e, o = Math.ceil(i / 8) * s, a = Math.ceil(i / 8 * s * r), c = new Uint8Array(n * a);
  let u = pl, h = 0, f, l;
  for (let d = 0; d < n; d++) {
    switch (f = t.subarray(h + 1, h + 1 + a), l = c.subarray(d * a, (d + 1) * a), t[h]) {
      case 0:
        No(f, l, a);
        break;
      case 1:
        xo(f, l, a, o);
        break;
      case 2:
        zo(f, l, u, a);
        break;
      case 3:
        So(f, l, u, a, o);
        break;
      case 4:
        Ro(f, l, u, a, o);
        break;
      default:
        throw new Error(`Unsupported filter: ${t[h]}`);
    }
    u = l, h += a + 1;
  }
  if (i === 16) {
    const d = new Uint16Array(c.buffer);
    if (dl)
      for (let v = 0; v < d.length; v++)
        d[v] = ml(d[v]);
    return d;
  } else
    return c;
}
function ml(e) {
  return (e & 255) << 8 | e >> 8 & 255;
}
const $t = Uint8Array.of(137, 80, 78, 71, 13, 10, 26, 10);
function Ln(e) {
  if (!gl(e.readBytes($t.length)))
    throw new Error("wrong PNG signature");
}
function gl(e) {
  if (e.length < $t.length)
    return !1;
  for (let t = 0; t < $t.length; t++)
    if (e[t] !== $t[t])
      return !1;
  return !0;
}
const _l = "tEXt", yl = 0, Io = new TextDecoder("latin1");
function vl(e) {
  if (wl(e), e.length === 0 || e.length > 79)
    throw new Error("keyword length must be between 1 and 79");
}
const bl = /^[\u0000-\u00FF]*$/;
function wl(e) {
  if (!bl.test(e))
    throw new Error("invalid latin1 text");
}
function kl(e, t, r) {
  const n = $o(t);
  e[n] = El(t, r - n.length - 1);
}
function $o(e) {
  for (e.mark(); e.readByte() !== yl; )
    ;
  const t = e.offset;
  e.reset();
  const r = Io.decode(e.readBytes(t - e.offset - 1));
  return e.skip(1), vl(r), r;
}
function El(e, t) {
  return Io.decode(e.readBytes(t));
}
const Ne = {
  UNKNOWN: -1,
  GREYSCALE: 0,
  TRUECOLOUR: 2,
  INDEXED_COLOUR: 3,
  GREYSCALE_ALPHA: 4,
  TRUECOLOUR_ALPHA: 6
}, cr = {
  UNKNOWN: -1,
  DEFLATE: 0
}, Bn = {
  UNKNOWN: -1,
  ADAPTIVE: 0
}, ur = {
  UNKNOWN: -1,
  NO_INTERLACE: 0,
  ADAM7: 1
}, zt = {
  NONE: 0,
  BACKGROUND: 1,
  PREVIOUS: 2
}, hr = {
  SOURCE: 0,
  OVER: 1
};
class Ol extends an {
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
    const { checkCrc: n = !1 } = r;
    this._checkCrc = n, this._inflator = new cn(), this._png = {
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
    }, this._end = !1, this._hasPalette = !1, this._palette = [], this._hasTransparency = !1, this._transparency = new Uint16Array(0), this._compressionMethod = cr.UNKNOWN, this._filterMethod = Bn.UNKNOWN, this._interlaceMethod = ur.UNKNOWN, this._colorType = Ne.UNKNOWN, this._isAnimated = !1, this._numberOfFrames = 1, this._numberOfPlays = 0, this._frames = [], this._writingDataChunks = !1, this.setBigEndian();
  }
  decode() {
    for (Ln(this); !this._end; ) {
      const t = this.readUint32(), r = this.readChars(4);
      this.decodeChunk(t, r);
    }
    return this.decodeImage(), this._png;
  }
  decodeApng() {
    for (Ln(this); !this._end; ) {
      const t = this.readUint32(), r = this.readChars(4);
      this.decodeApngChunk(t, r);
    }
    return this.decodeApngImage(), this._apng;
  }
  // https://www.w3.org/TR/PNG/#5Chunk-layout
  decodeChunk(t, r) {
    const n = this.offset;
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
      case _l:
        kl(this._png.text, this, t);
        break;
      case "pHYs":
        this.decodepHYs();
        break;
      default:
        this.skip(t);
        break;
    }
    if (this.offset - n !== t)
      throw new Error(`Length mismatch while decoding chunk ${r}`);
    this._checkCrc ? Mn(this, t + 4, r) : this.skip(4);
  }
  decodeApngChunk(t, r) {
    const n = this.offset;
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
        this.decodeChunk(t, r), this.offset = n + t;
        break;
    }
    if (this.offset - n !== t)
      throw new Error(`Length mismatch while decoding chunk ${r}`);
    this._checkCrc ? Mn(this, t + 4, r) : this.skip(4);
  }
  // https://www.w3.org/TR/PNG/#11IHDR
  decodeIHDR() {
    const t = this._png;
    t.width = this.readUint32(), t.height = this.readUint32(), t.depth = Tl(this.readUint8());
    const r = this.readUint8();
    this._colorType = r;
    let n;
    switch (r) {
      case Ne.GREYSCALE:
        n = 1;
        break;
      case Ne.TRUECOLOUR:
        n = 3;
        break;
      case Ne.INDEXED_COLOUR:
        n = 1;
        break;
      case Ne.GREYSCALE_ALPHA:
        n = 2;
        break;
      case Ne.TRUECOLOUR_ALPHA:
        n = 4;
        break;
      // Kept for exhaustiveness.
      // eslint-disable-next-line unicorn/no-useless-switch-case
      case Ne.UNKNOWN:
      default:
        throw new Error(`Unknown color type: ${r}`);
    }
    if (this._png.channels = n, this._compressionMethod = this.readUint8(), this._compressionMethod !== cr.DEFLATE)
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
    const n = [];
    this._palette = n;
    for (let s = 0; s < r; s++)
      n.push([this.readUint8(), this.readUint8(), this.readUint8()]);
  }
  // https://www.w3.org/TR/PNG/#11IDAT
  decodeIDAT(t) {
    this._writingDataChunks = !0;
    const r = t, n = this.offset + this.byteOffset;
    if (this._inflator.push(new Uint8Array(this.buffer, n, r)), this._inflator.err)
      throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    this.skip(t);
  }
  decodeFDAT(t) {
    this._writingDataChunks = !0;
    let r = t, n = this.offset + this.byteOffset;
    if (n += 4, r -= 4, this._inflator.push(new Uint8Array(this.buffer, n, r)), this._inflator.err)
      throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    this.skip(t);
  }
  // https://www.w3.org/TR/PNG/#11tRNS
  decodetRNS(t) {
    switch (this._colorType) {
      case Ne.GREYSCALE:
      case Ne.TRUECOLOUR: {
        if (t % 2 !== 0)
          throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${t}`);
        if (t / 2 > this._png.width * this._png.height)
          throw new Error(`tRNS chunk contains more alpha values than there are pixels (${t / 2} vs ${this._png.width * this._png.height})`);
        this._hasTransparency = !0, this._transparency = new Uint16Array(t / 2);
        for (let r = 0; r < t / 2; r++)
          this._transparency[r] = this.readUint16();
        break;
      }
      case Ne.INDEXED_COLOUR: {
        if (t > this._palette.length)
          throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${t} vs ${this._palette.length})`);
        let r = 0;
        for (; r < t; r++) {
          const n = this.readByte();
          this._palette[r].push(n);
        }
        for (; r < this._palette.length; r++)
          this._palette[r].push(255);
        break;
      }
      // Kept for exhaustiveness.
      /* eslint-disable unicorn/no-useless-switch-case */
      case Ne.UNKNOWN:
      case Ne.GREYSCALE_ALPHA:
      case Ne.TRUECOLOUR_ALPHA:
      default:
        throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`);
    }
  }
  // https://www.w3.org/TR/PNG/#11iCCP
  decodeiCCP(t) {
    const r = $o(this), n = this.readUint8();
    if (n !== cr.DEFLATE)
      throw new Error(`Unsupported iCCP compression method: ${n}`);
    const s = this.readBytes(t - r.length - 2);
    this._png.iccEmbeddedProfile = {
      name: r,
      profile: Do(s)
    };
  }
  // https://www.w3.org/TR/PNG/#11pHYs
  decodepHYs() {
    const t = this.readUint32(), r = this.readUint32(), n = this.readByte();
    this._png.resolution = { x: t, y: r, unit: n };
  }
  decodeApngImage() {
    this._apng.width = this._png.width, this._apng.height = this._png.height, this._apng.channels = this._png.channels, this._apng.depth = this._png.depth, this._apng.numberOfFrames = this._numberOfFrames, this._apng.numberOfPlays = this._numberOfPlays, this._apng.text = this._png.text, this._apng.resolution = this._png.resolution;
    for (let t = 0; t < this._numberOfFrames; t++) {
      const r = {
        sequenceNumber: this._frames[t].sequenceNumber,
        delayNumber: this._frames[t].delayNumber,
        delayDenominator: this._frames[t].delayDenominator,
        data: this._apng.depth === 8 ? new Uint8Array(this._apng.width * this._apng.height * this._apng.channels) : new Uint16Array(this._apng.width * this._apng.height * this._apng.channels)
      }, n = this._frames.at(t);
      if (n) {
        if (n.data = Fn({
          data: n.data,
          width: n.width,
          height: n.height,
          channels: this._apng.channels,
          depth: this._apng.depth
        }), this._hasPalette && (this._apng.palette = this._palette), this._hasTransparency && (this._apng.transparency = this._transparency), t === 0 || n.xOffset === 0 && n.yOffset === 0 && n.width === this._png.width && n.height === this._png.height)
          r.data = n.data;
        else {
          const s = this._apng.frames.at(t - 1);
          this.disposeFrame(n, s, r), this.addFrameDataToCanvas(r, n);
        }
        this._apng.frames.push(r);
      }
    }
    return this._apng;
  }
  disposeFrame(t, r, n) {
    switch (t.disposeOp) {
      case zt.NONE:
        break;
      case zt.BACKGROUND:
        for (let s = 0; s < this._png.height; s++)
          for (let i = 0; i < this._png.width; i++) {
            const o = (s * t.width + i) * this._png.channels;
            for (let a = 0; a < this._png.channels; a++)
              n.data[o + a] = 0;
          }
        break;
      case zt.PREVIOUS:
        n.data.set(r.data);
        break;
      default:
        throw new Error("Unknown disposeOp");
    }
  }
  addFrameDataToCanvas(t, r) {
    const n = 1 << this._png.depth, s = (i, o) => {
      const a = ((i + r.yOffset) * this._png.width + r.xOffset + o) * this._png.channels, c = (i * r.width + o) * this._png.channels;
      return { index: a, frameIndex: c };
    };
    switch (r.blendOp) {
      case hr.SOURCE:
        for (let i = 0; i < r.height; i++)
          for (let o = 0; o < r.width; o++) {
            const { index: a, frameIndex: c } = s(i, o);
            for (let u = 0; u < this._png.channels; u++)
              t.data[a + u] = r.data[c + u];
          }
        break;
      // https://www.w3.org/TR/png-3/#13Alpha-channel-processing
      case hr.OVER:
        for (let i = 0; i < r.height; i++)
          for (let o = 0; o < r.width; o++) {
            const { index: a, frameIndex: c } = s(i, o);
            for (let u = 0; u < this._png.channels; u++) {
              const h = r.data[c + this._png.channels - 1] / n, f = u % (this._png.channels - 1) === 0 ? 1 : r.data[c + u], l = Math.floor(h * f + (1 - h) * t.data[a + u]);
              t.data[a + u] += l;
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
    if (this._filterMethod !== Bn.ADAPTIVE)
      throw new Error(`Filter method ${this._filterMethod} not supported`);
    if (this._interlaceMethod === ur.NO_INTERLACE)
      this._png.data = Fn({
        data: t,
        width: this._png.width,
        height: this._png.height,
        channels: this._png.channels,
        depth: this._png.depth
      });
    else if (this._interlaceMethod === ur.ADAM7)
      this._png.data = ul({
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
      disposeOp: zt.NONE,
      blendOp: hr.SOURCE,
      data: t
    }), this._inflator = new cn(), this._writingDataChunks = !1;
  }
}
function Tl(e) {
  if (e !== 1 && e !== 2 && e !== 4 && e !== 8 && e !== 16)
    throw new Error(`invalid bit depth: ${e}`);
  return e;
}
var jn;
(function(e) {
  e[e.UNKNOWN = 0] = "UNKNOWN", e[e.METRE = 1] = "METRE";
})(jn || (jn = {}));
function ed(e, t) {
  return new Ol(e, t).decode();
}
var Ut = { exports: {} };
var Cl = Ut.exports, Vn;
function Al() {
  return Vn || (Vn = 1, (function(e, t) {
    ((r, n) => {
      e.exports = n();
    })(Cl, function r() {
      var n = typeof self < "u" ? self : typeof window < "u" ? window : n !== void 0 ? n : {}, s, i = !n.document && !!n.postMessage, o = n.IS_PAPA_WORKER || !1, a = {}, c = 0, u = {};
      function h(m) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, function(p) {
          var _ = $(p);
          _.chunkSize = parseInt(_.chunkSize), p.step || p.chunk || (_.chunkSize = null), this._handle = new y(_), (this._handle.streamer = this)._config = _;
        }.call(this, m), this.parseChunk = function(p, _) {
          var O = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < O) {
            let I = this._config.newline;
            I || (w = this._config.quoteChar || '"', I = this._handle.guessLineEndings(p, w)), p = [...p.split(I).slice(O)].join(I);
          }
          this.isFirstChunk && k(this._config.beforeFirstChunk) && (w = this._config.beforeFirstChunk(p)) !== void 0 && (p = w), this.isFirstChunk = !1, this._halted = !1;
          var O = this._partialLine + p, w = (this._partialLine = "", this._handle.parse(O, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (p = w.meta.cursor, O = (this._finished || (this._partialLine = O.substring(p - this._baseIndex), this._baseIndex = p), w && w.data && (this._rowCount += w.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), o) n.postMessage({ results: w, workerId: u.WORKER_ID, finished: O });
            else if (k(this._config.chunk) && !_) {
              if (this._config.chunk(w, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = w = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(w.data), this._completeResults.errors = this._completeResults.errors.concat(w.errors), this._completeResults.meta = w.meta), this._completed || !O || !k(this._config.complete) || w && w.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), O || w && w.meta.paused || this._nextChunk(), w;
          }
          this._halted = !0;
        }, this._sendError = function(p) {
          k(this._config.error) ? this._config.error(p) : o && this._config.error && n.postMessage({ workerId: u.WORKER_ID, error: p, finished: !1 });
        };
      }
      function f(m) {
        var p;
        (m = m || {}).chunkSize || (m.chunkSize = u.RemoteChunkSize), h.call(this, m), this._nextChunk = i ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(_) {
          this._input = _, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (p = new XMLHttpRequest(), this._config.withCredentials && (p.withCredentials = this._config.withCredentials), i || (p.onload = P(this._chunkLoaded, this), p.onerror = P(this._chunkError, this)), p.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !i), this._config.downloadRequestHeaders) {
              var _, O = this._config.downloadRequestHeaders;
              for (_ in O) p.setRequestHeader(_, O[_]);
            }
            var w;
            this._config.chunkSize && (w = this._start + this._config.chunkSize - 1, p.setRequestHeader("Range", "bytes=" + this._start + "-" + w));
            try {
              p.send(this._config.downloadRequestBody);
            } catch (I) {
              this._chunkError(I.message);
            }
            i && p.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          p.readyState === 4 && (p.status < 200 || 400 <= p.status ? this._chunkError() : (this._start += this._config.chunkSize || p.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((_) => (_ = _.getResponseHeader("Content-Range")) !== null ? parseInt(_.substring(_.lastIndexOf("/") + 1)) : -1)(p), this.parseChunk(p.responseText)));
        }, this._chunkError = function(_) {
          _ = p.statusText || _, this._sendError(new Error(_));
        };
      }
      function l(m) {
        (m = m || {}).chunkSize || (m.chunkSize = u.LocalChunkSize), h.call(this, m);
        var p, _, O = typeof FileReader < "u";
        this.stream = function(w) {
          this._input = w, _ = w.slice || w.webkitSlice || w.mozSlice, O ? ((p = new FileReader()).onload = P(this._chunkLoaded, this), p.onerror = P(this._chunkError, this)) : p = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var w = this._input, I = (this._config.chunkSize && (I = Math.min(this._start + this._config.chunkSize, this._input.size), w = _.call(w, this._start, I)), p.readAsText(w, this._config.encoding));
          O || this._chunkLoaded({ target: { result: I } });
        }, this._chunkLoaded = function(w) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(w.target.result);
        }, this._chunkError = function() {
          this._sendError(p.error);
        };
      }
      function d(m) {
        var p;
        h.call(this, m = m || {}), this.stream = function(_) {
          return p = _, this._nextChunk();
        }, this._nextChunk = function() {
          var _, O;
          if (!this._finished) return _ = this._config.chunkSize, p = _ ? (O = p.substring(0, _), p.substring(_)) : (O = p, ""), this._finished = !p, this.parseChunk(O);
        };
      }
      function v(m) {
        h.call(this, m = m || {});
        var p = [], _ = !0, O = !1;
        this.pause = function() {
          h.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          h.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(w) {
          this._input = w, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          O && p.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), p.length ? this.parseChunk(p.shift()) : _ = !0;
        }, this._streamData = P(function(w) {
          try {
            p.push(typeof w == "string" ? w : w.toString(this._config.encoding)), _ && (_ = !1, this._checkIsFinished(), this.parseChunk(p.shift()));
          } catch (I) {
            this._streamError(I);
          }
        }, this), this._streamError = P(function(w) {
          this._streamCleanUp(), this._sendError(w);
        }, this), this._streamEnd = P(function() {
          this._streamCleanUp(), O = !0, this._streamData("");
        }, this), this._streamCleanUp = P(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function y(m) {
        var p, _, O, w, I = Math.pow(2, 53), M = -I, V = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, Y = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, x = this, D = 0, C = 0, F = !1, z = !1, U = [], N = { data: [], errors: [], meta: {} };
        function q(j) {
          return m.skipEmptyLines === "greedy" ? j.join("").trim() === "" : j.length === 1 && j[0].length === 0;
        }
        function L() {
          if (N && O && (me("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + u.DefaultDelimiter + "'"), O = !1), m.skipEmptyLines && (N.data = N.data.filter(function(Z) {
            return !q(Z);
          })), se()) {
            let Z = function(ie, oe) {
              k(m.transformHeader) && (ie = m.transformHeader(ie, oe)), U.push(ie);
            };
            if (N) if (Array.isArray(N.data[0])) {
              for (var j = 0; se() && j < N.data.length; j++) N.data[j].forEach(Z);
              N.data.splice(0, 1);
            } else N.data.forEach(Z);
          }
          function K(Z, ie) {
            for (var oe = m.header ? {} : [], H = 0; H < Z.length; H++) {
              var Q = H, J = Z[H], J = ((ke, B) => ((ae) => (m.dynamicTypingFunction && m.dynamicTyping[ae] === void 0 && (m.dynamicTyping[ae] = m.dynamicTypingFunction(ae)), (m.dynamicTyping[ae] || m.dynamicTyping) === !0))(ke) ? B === "true" || B === "TRUE" || B !== "false" && B !== "FALSE" && (((ae) => {
                if (V.test(ae) && (ae = parseFloat(ae), M < ae && ae < I))
                  return 1;
              })(B) ? parseFloat(B) : Y.test(B) ? new Date(B) : B === "" ? null : B) : B)(Q = m.header ? H >= U.length ? "__parsed_extra" : U[H] : Q, J = m.transform ? m.transform(J, Q) : J);
              Q === "__parsed_extra" ? (oe[Q] = oe[Q] || [], oe[Q].push(J)) : oe[Q] = J;
            }
            return m.header && (H > U.length ? me("FieldMismatch", "TooManyFields", "Too many fields: expected " + U.length + " fields but parsed " + H, C + ie) : H < U.length && me("FieldMismatch", "TooFewFields", "Too few fields: expected " + U.length + " fields but parsed " + H, C + ie)), oe;
          }
          var ne;
          N && (m.header || m.dynamicTyping || m.transform) && (ne = 1, !N.data.length || Array.isArray(N.data[0]) ? (N.data = N.data.map(K), ne = N.data.length) : N.data = K(N.data, 0), m.header && N.meta && (N.meta.fields = U), C += ne);
        }
        function se() {
          return m.header && U.length === 0;
        }
        function me(j, K, ne, Z) {
          j = { type: j, code: K, message: ne }, Z !== void 0 && (j.row = Z), N.errors.push(j);
        }
        k(m.step) && (w = m.step, m.step = function(j) {
          N = j, se() ? L() : (L(), N.data.length !== 0 && (D += j.data.length, m.preview && D > m.preview ? _.abort() : (N.data = N.data[0], w(N, x))));
        }), this.parse = function(j, K, ne) {
          var Z = m.quoteChar || '"', Z = (m.newline || (m.newline = this.guessLineEndings(j, Z)), O = !1, m.delimiter ? k(m.delimiter) && (m.delimiter = m.delimiter(j), N.meta.delimiter = m.delimiter) : ((Z = ((ie, oe, H, Q, J) => {
            var ke, B, ae, ve;
            J = J || [",", "	", "|", ";", u.RECORD_SEP, u.UNIT_SEP];
            for (var Ee = 0; Ee < J.length; Ee++) {
              for (var ge, Ce = J[Ee], ee = 0, Oe = 0, le = 0, _e = (ae = void 0, new R({ comments: Q, delimiter: Ce, newline: oe, preview: 10 }).parse(ie)), Ae = 0; Ae < _e.data.length; Ae++) H && q(_e.data[Ae]) ? le++ : (ge = _e.data[Ae].length, Oe += ge, ae === void 0 ? ae = ge : 0 < ge && (ee += Math.abs(ge - ae), ae = ge));
              0 < _e.data.length && (Oe /= _e.data.length - le), (B === void 0 || ee <= B) && (ve === void 0 || ve < Oe) && 1.99 < Oe && (B = ee, ke = Ce, ve = Oe);
            }
            return { successful: !!(m.delimiter = ke), bestDelimiter: ke };
          })(j, m.newline, m.skipEmptyLines, m.comments, m.delimitersToGuess)).successful ? m.delimiter = Z.bestDelimiter : (O = !0, m.delimiter = u.DefaultDelimiter), N.meta.delimiter = m.delimiter), $(m));
          return m.preview && m.header && Z.preview++, p = j, _ = new R(Z), N = _.parse(p, K, ne), L(), F ? { meta: { paused: !0 } } : N || { meta: { paused: !1 } };
        }, this.paused = function() {
          return F;
        }, this.pause = function() {
          F = !0, _.abort(), p = k(m.chunk) ? "" : p.substring(_.getCharIndex());
        }, this.resume = function() {
          x.streamer._halted ? (F = !1, x.streamer.parseChunk(p, !0)) : setTimeout(x.resume, 3);
        }, this.aborted = function() {
          return z;
        }, this.abort = function() {
          z = !0, _.abort(), N.meta.aborted = !0, k(m.complete) && m.complete(N), p = "";
        }, this.guessLineEndings = function(ie, Z) {
          ie = ie.substring(0, 1048576);
          var Z = new RegExp(E(Z) + "([^]*?)" + E(Z), "gm"), ne = (ie = ie.replace(Z, "")).split("\r"), Z = ie.split(`
`), ie = 1 < Z.length && Z[0].length < ne[0].length;
          if (ne.length === 1 || ie) return `
`;
          for (var oe = 0, H = 0; H < ne.length; H++) ne[H][0] === `
` && oe++;
          return oe >= ne.length / 2 ? `\r
` : "\r";
        };
      }
      function E(m) {
        return m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function R(m) {
        var p = (m = m || {}).delimiter, _ = m.newline, O = m.comments, w = m.step, I = m.preview, M = m.fastMode, V = null, Y = !1, x = m.quoteChar == null ? '"' : m.quoteChar, D = x;
        if (m.escapeChar !== void 0 && (D = m.escapeChar), (typeof p != "string" || -1 < u.BAD_DELIMITERS.indexOf(p)) && (p = ","), O === p) throw new Error("Comment character same as delimiter");
        O === !0 ? O = "#" : (typeof O != "string" || -1 < u.BAD_DELIMITERS.indexOf(O)) && (O = !1), _ !== `
` && _ !== "\r" && _ !== `\r
` && (_ = `
`);
        var C = 0, F = !1;
        this.parse = function(z, U, N) {
          if (typeof z != "string") throw new Error("Input must be a string");
          var q = z.length, L = p.length, se = _.length, me = O.length, j = k(w), K = [], ne = [], Z = [], ie = C = 0;
          if (!z) return ee();
          if (M || M !== !1 && z.indexOf(x) === -1) {
            for (var oe = z.split(_), H = 0; H < oe.length; H++) {
              if (Z = oe[H], C += Z.length, H !== oe.length - 1) C += _.length;
              else if (N) return ee();
              if (!O || Z.substring(0, me) !== O) {
                if (j) {
                  if (K = [], ve(Z.split(p)), Oe(), F) return ee();
                } else ve(Z.split(p));
                if (I && I <= H) return K = K.slice(0, I), ee(!0);
              }
            }
            return ee();
          }
          for (var Q = z.indexOf(p, C), J = z.indexOf(_, C), ke = new RegExp(E(D) + E(x), "g"), B = z.indexOf(x, C); ; ) if (z[C] === x) for (B = C, C++; ; ) {
            if ((B = z.indexOf(x, B + 1)) === -1) return N || ne.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: K.length, index: C }), ge();
            if (B === q - 1) return ge(z.substring(C, B).replace(ke, x));
            if (x === D && z[B + 1] === D) B++;
            else if (x === D || B === 0 || z[B - 1] !== D) {
              Q !== -1 && Q < B + 1 && (Q = z.indexOf(p, B + 1));
              var ae = Ee((J = J !== -1 && J < B + 1 ? z.indexOf(_, B + 1) : J) === -1 ? Q : Math.min(Q, J));
              if (z.substr(B + 1 + ae, L) === p) {
                Z.push(z.substring(C, B).replace(ke, x)), z[C = B + 1 + ae + L] !== x && (B = z.indexOf(x, C)), Q = z.indexOf(p, C), J = z.indexOf(_, C);
                break;
              }
              if (ae = Ee(J), z.substring(B + 1 + ae, B + 1 + ae + se) === _) {
                if (Z.push(z.substring(C, B).replace(ke, x)), Ce(B + 1 + ae + se), Q = z.indexOf(p, C), B = z.indexOf(x, C), j && (Oe(), F)) return ee();
                if (I && K.length >= I) return ee(!0);
                break;
              }
              ne.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: K.length, index: C }), B++;
            }
          }
          else if (O && Z.length === 0 && z.substring(C, C + me) === O) {
            if (J === -1) return ee();
            C = J + se, J = z.indexOf(_, C), Q = z.indexOf(p, C);
          } else if (Q !== -1 && (Q < J || J === -1)) Z.push(z.substring(C, Q)), C = Q + L, Q = z.indexOf(p, C);
          else {
            if (J === -1) break;
            if (Z.push(z.substring(C, J)), Ce(J + se), j && (Oe(), F)) return ee();
            if (I && K.length >= I) return ee(!0);
          }
          return ge();
          function ve(le) {
            K.push(le), ie = C;
          }
          function Ee(le) {
            var _e = 0;
            return _e = le !== -1 && (le = z.substring(B + 1, le)) && le.trim() === "" ? le.length : _e;
          }
          function ge(le) {
            return N || (le === void 0 && (le = z.substring(C)), Z.push(le), C = q, ve(Z), j && Oe()), ee();
          }
          function Ce(le) {
            C = le, ve(Z), Z = [], J = z.indexOf(_, C);
          }
          function ee(le) {
            if (m.header && !U && K.length && !Y) {
              var _e = K[0], Ae = /* @__PURE__ */ Object.create(null), qe = new Set(_e);
              let Xe = !1;
              for (let Ie = 0; Ie < _e.length; Ie++) {
                let be = _e[Ie];
                if (Ae[be = k(m.transformHeader) ? m.transformHeader(be, Ie) : be]) {
                  let He, ut = Ae[be];
                  for (; He = be + "_" + ut, ut++, qe.has(He); ) ;
                  qe.add(He), _e[Ie] = He, Ae[be]++, Xe = !0, (V = V === null ? {} : V)[He] = be;
                } else Ae[be] = 1, _e[Ie] = be;
                qe.add(be);
              }
              Xe && console.warn("Duplicate headers found and renamed."), Y = !0;
            }
            return { data: K, errors: ne, meta: { delimiter: p, linebreak: _, aborted: F, truncated: !!le, cursor: ie + (U || 0), renamedHeaders: V } };
          }
          function Oe() {
            w(ee()), K = [], ne = [];
          }
        }, this.abort = function() {
          F = !0;
        }, this.getCharIndex = function() {
          return C;
        };
      }
      function W(m) {
        var p = m.data, _ = a[p.workerId], O = !1;
        if (p.error) _.userError(p.error, p.file);
        else if (p.results && p.results.data) {
          var w = { abort: function() {
            O = !0, T(p.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: A, resume: A };
          if (k(_.userStep)) {
            for (var I = 0; I < p.results.data.length && (_.userStep({ data: p.results.data[I], errors: p.results.errors, meta: p.results.meta }, w), !O); I++) ;
            delete p.results;
          } else k(_.userChunk) && (_.userChunk(p.results, w, p.file), delete p.results);
        }
        p.finished && !O && T(p.workerId, p.results);
      }
      function T(m, p) {
        var _ = a[m];
        k(_.userComplete) && _.userComplete(p), _.terminate(), delete a[m];
      }
      function A() {
        throw new Error("Not implemented.");
      }
      function $(m) {
        if (typeof m != "object" || m === null) return m;
        var p, _ = Array.isArray(m) ? [] : {};
        for (p in m) _[p] = $(m[p]);
        return _;
      }
      function P(m, p) {
        return function() {
          m.apply(p, arguments);
        };
      }
      function k(m) {
        return typeof m == "function";
      }
      return u.parse = function(m, p) {
        var _ = (p = p || {}).dynamicTyping || !1;
        if (k(_) && (p.dynamicTypingFunction = _, _ = {}), p.dynamicTyping = _, p.transform = !!k(p.transform) && p.transform, !p.worker || !u.WORKERS_SUPPORTED) return _ = null, u.NODE_STREAM_INPUT, typeof m == "string" ? (m = ((O) => O.charCodeAt(0) !== 65279 ? O : O.slice(1))(m), _ = new (p.download ? f : d)(p)) : m.readable === !0 && k(m.read) && k(m.on) ? _ = new v(p) : (n.File && m instanceof File || m instanceof Object) && (_ = new l(p)), _.stream(m);
        (_ = (() => {
          var O;
          return !!u.WORKERS_SUPPORTED && (O = (() => {
            var w = n.URL || n.webkitURL || null, I = r.toString();
            return u.BLOB_URL || (u.BLOB_URL = w.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", I, ")();"], { type: "text/javascript" })));
          })(), (O = new n.Worker(O)).onmessage = W, O.id = c++, a[O.id] = O);
        })()).userStep = p.step, _.userChunk = p.chunk, _.userComplete = p.complete, _.userError = p.error, p.step = k(p.step), p.chunk = k(p.chunk), p.complete = k(p.complete), p.error = k(p.error), delete p.worker, _.postMessage({ input: m, config: p, workerId: _.id });
      }, u.unparse = function(m, p) {
        var _ = !1, O = !0, w = ",", I = `\r
`, M = '"', V = M + M, Y = !1, x = null, D = !1, C = ((() => {
          if (typeof p == "object") {
            if (typeof p.delimiter != "string" || u.BAD_DELIMITERS.filter(function(U) {
              return p.delimiter.indexOf(U) !== -1;
            }).length || (w = p.delimiter), typeof p.quotes != "boolean" && typeof p.quotes != "function" && !Array.isArray(p.quotes) || (_ = p.quotes), typeof p.skipEmptyLines != "boolean" && typeof p.skipEmptyLines != "string" || (Y = p.skipEmptyLines), typeof p.newline == "string" && (I = p.newline), typeof p.quoteChar == "string" && (M = p.quoteChar), typeof p.header == "boolean" && (O = p.header), Array.isArray(p.columns)) {
              if (p.columns.length === 0) throw new Error("Option columns is empty");
              x = p.columns;
            }
            p.escapeChar !== void 0 && (V = p.escapeChar + M), p.escapeFormulae instanceof RegExp ? D = p.escapeFormulae : typeof p.escapeFormulae == "boolean" && p.escapeFormulae && (D = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(E(M), "g"));
        if (typeof m == "string" && (m = JSON.parse(m)), Array.isArray(m)) {
          if (!m.length || Array.isArray(m[0])) return F(null, m, Y);
          if (typeof m[0] == "object") return F(x || Object.keys(m[0]), m, Y);
        } else if (typeof m == "object") return typeof m.data == "string" && (m.data = JSON.parse(m.data)), Array.isArray(m.data) && (m.fields || (m.fields = m.meta && m.meta.fields || x), m.fields || (m.fields = Array.isArray(m.data[0]) ? m.fields : typeof m.data[0] == "object" ? Object.keys(m.data[0]) : []), Array.isArray(m.data[0]) || typeof m.data[0] == "object" || (m.data = [m.data])), F(m.fields || [], m.data || [], Y);
        throw new Error("Unable to serialize unrecognized input");
        function F(U, N, q) {
          var L = "", se = (typeof U == "string" && (U = JSON.parse(U)), typeof N == "string" && (N = JSON.parse(N)), Array.isArray(U) && 0 < U.length), me = !Array.isArray(N[0]);
          if (se && O) {
            for (var j = 0; j < U.length; j++) 0 < j && (L += w), L += z(U[j], j);
            0 < N.length && (L += I);
          }
          for (var K = 0; K < N.length; K++) {
            var ne = (se ? U : N[K]).length, Z = !1, ie = se ? Object.keys(N[K]).length === 0 : N[K].length === 0;
            if (q && !se && (Z = q === "greedy" ? N[K].join("").trim() === "" : N[K].length === 1 && N[K][0].length === 0), q === "greedy" && se) {
              for (var oe = [], H = 0; H < ne; H++) {
                var Q = me ? U[H] : H;
                oe.push(N[K][Q]);
              }
              Z = oe.join("").trim() === "";
            }
            if (!Z) {
              for (var J = 0; J < ne; J++) {
                0 < J && !ie && (L += w);
                var ke = se && me ? U[J] : J;
                L += z(N[K][ke], J);
              }
              K < N.length - 1 && (!q || 0 < ne && !ie) && (L += I);
            }
          }
          return L;
        }
        function z(U, N) {
          var q, L;
          return U == null ? "" : U.constructor === Date ? JSON.stringify(U).slice(1, 25) : (L = !1, D && typeof U == "string" && D.test(U) && (U = "'" + U, L = !0), q = U.toString().replace(C, V), (L = L || _ === !0 || typeof _ == "function" && _(U, N) || Array.isArray(_) && _[N] || ((se, me) => {
            for (var j = 0; j < me.length; j++) if (-1 < se.indexOf(me[j])) return !0;
            return !1;
          })(q, u.BAD_DELIMITERS) || -1 < q.indexOf(w) || q.charAt(0) === " " || q.charAt(q.length - 1) === " ") ? M + q + M : q);
        }
      }, u.RECORD_SEP = "", u.UNIT_SEP = "", u.BYTE_ORDER_MARK = "\uFEFF", u.BAD_DELIMITERS = ["\r", `
`, '"', u.BYTE_ORDER_MARK], u.WORKERS_SUPPORTED = !i && !!n.Worker, u.NODE_STREAM_INPUT = 1, u.LocalChunkSize = 10485760, u.RemoteChunkSize = 5242880, u.DefaultDelimiter = ",", u.Parser = R, u.ParserHandle = y, u.NetworkStreamer = f, u.FileStreamer = l, u.StringStreamer = d, u.ReadableStreamStreamer = v, n.jQuery && ((s = n.jQuery).fn.parse = function(m) {
        var p = m.config || {}, _ = [];
        return this.each(function(I) {
          if (!(s(this).prop("tagName").toUpperCase() === "INPUT" && s(this).attr("type").toLowerCase() === "file" && n.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var M = 0; M < this.files.length; M++) _.push({ file: this.files[M], inputElem: this, instanceConfig: s.extend({}, p) });
        }), O(), this;
        function O() {
          if (_.length === 0) k(m.complete) && m.complete();
          else {
            var I, M, V, Y, x = _[0];
            if (k(m.before)) {
              var D = m.before(x.file, x.inputElem);
              if (typeof D == "object") {
                if (D.action === "abort") return I = "AbortError", M = x.file, V = x.inputElem, Y = D.reason, void (k(m.error) && m.error({ name: I }, M, V, Y));
                if (D.action === "skip") return void w();
                typeof D.config == "object" && (x.instanceConfig = s.extend(x.instanceConfig, D.config));
              } else if (D === "skip") return void w();
            }
            var C = x.instanceConfig.complete;
            x.instanceConfig.complete = function(F) {
              k(C) && C(F, x.file, x.inputElem), w();
            }, u.parse(x.file, x.instanceConfig);
          }
        }
        function w() {
          _.splice(0, 1), O();
        }
      }), o && (n.onmessage = function(m) {
        m = m.data, u.WORKER_ID === void 0 && m && (u.WORKER_ID = m.workerId), typeof m.input == "string" ? n.postMessage({ workerId: u.WORKER_ID, results: u.parse(m.input, m.config), finished: !0 }) : (n.File && m.input instanceof File || m.input instanceof Object) && (m = u.parse(m.input, m.config)) && n.postMessage({ workerId: u.WORKER_ID, results: m, finished: !0 });
      }), (f.prototype = Object.create(h.prototype)).constructor = f, (l.prototype = Object.create(h.prototype)).constructor = l, (d.prototype = Object.create(d.prototype)).constructor = d, (v.prototype = Object.create(h.prototype)).constructor = v, u;
    });
  })(Ut)), Ut.exports;
}
var Nl = Al();
const td = /* @__PURE__ */ Ht(Nl);
function qn(e, t, r, n, s, i, o) {
  try {
    var a = e[i](o), c = a.value;
  } catch (u) {
    return void r(u);
  }
  a.done ? t(c) : Promise.resolve(c).then(n, s);
}
function rd(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, s) {
      var i = e.apply(t, r);
      function o(c) {
        qn(i, n, s, o, a, "next", c);
      }
      function a(c) {
        qn(i, n, s, o, a, "throw", c);
      }
      o(void 0);
    });
  };
}
function xl(e, t) {
  if (wt(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zl(e) {
  var t = xl(e, "string");
  return wt(t) == "symbol" ? t : t + "";
}
function nd(e, t, r) {
  return (t = zl(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var dt = { exports: {} }, Ge = { exports: {} }, Sl = Ge.exports, Hn;
function Rl() {
  return Hn || (Hn = 1, (function() {
    var e, t, r, n, s, i;
    typeof performance < "u" && performance !== null && performance.now ? Ge.exports = function() {
      return performance.now();
    } : typeof process < "u" && process !== null && process.hrtime ? (Ge.exports = function() {
      return (e() - s) / 1e6;
    }, t = process.hrtime, e = function() {
      var o;
      return o = t(), o[0] * 1e9 + o[1];
    }, n = e(), i = process.uptime() * 1e9, s = n - i) : Date.now ? (Ge.exports = function() {
      return Date.now() - r;
    }, r = Date.now()) : (Ge.exports = function() {
      return (/* @__PURE__ */ new Date()).getTime() - r;
    }, r = (/* @__PURE__ */ new Date()).getTime());
  }).call(Sl)), Ge.exports;
}
var Wn;
function Il() {
  if (Wn) return dt.exports;
  Wn = 1;
  for (var e = Rl(), t = typeof window > "u" ? Dh : window, r = ["moz", "webkit"], n = "AnimationFrame", s = t["request" + n], i = t["cancel" + n] || t["cancelRequest" + n], o = 0; !s && o < r.length; o++)
    s = t[r[o] + "Request" + n], i = t[r[o] + "Cancel" + n] || t[r[o] + "CancelRequest" + n];
  if (!s || !i) {
    var a = 0, c = 0, u = [], h = 1e3 / 60;
    s = function(f) {
      if (u.length === 0) {
        var l = e(), d = Math.max(0, h - (l - a));
        a = d + l, setTimeout(function() {
          var v = u.slice(0);
          u.length = 0;
          for (var y = 0; y < v.length; y++)
            if (!v[y].cancelled)
              try {
                v[y].callback(a);
              } catch (E) {
                setTimeout(function() {
                  throw E;
                }, 0);
              }
        }, Math.round(d));
      }
      return u.push({
        handle: ++c,
        callback: f,
        cancelled: !1
      }), c;
    }, i = function(f) {
      for (var l = 0; l < u.length; l++)
        u[l].handle === f && (u[l].cancelled = !0);
    };
  }
  return dt.exports = function(f) {
    return s.call(t, f);
  }, dt.exports.cancel = function() {
    i.apply(t, arguments);
  }, dt.exports.polyfill = function(f) {
    f || (f = t), f.requestAnimationFrame = s, f.cancelAnimationFrame = i;
  }, dt.exports;
}
var $l = Il();
const sd = /* @__PURE__ */ Ht($l);
var fr, Jn;
function Ul() {
  return Jn || (Jn = 1, fr = function(e) {
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
    ], n = 0; n < r.length; n++) {
      var s = r[n].re, i = r[n].process, o = s.exec(e);
      if (o) {
        var a = i(o);
        this.r = a[0], this.g = a[1], this.b = a[2], a.length > 3 && (this.alpha = a[3]), this.ok = !0;
      }
    }
    this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha, this.toRGB = function() {
      return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    }, this.toRGBA = function() {
      return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
    }, this.toHex = function() {
      var c = this.r.toString(16), u = this.g.toString(16), h = this.b.toString(16);
      return c.length == 1 && (c = "0" + c), u.length == 1 && (u = "0" + u), h.length == 1 && (h = "0" + h), "#" + c + u + h;
    }, this.getHelpXML = function() {
      for (var c = new Array(), u = 0; u < r.length; u++)
        for (var h = r[u].example, f = 0; f < h.length; f++)
          c[c.length] = h[f];
      for (var l in t)
        c[c.length] = l;
      var d = document.createElement("ul");
      d.setAttribute("id", "rgbcolor-examples");
      for (var u = 0; u < c.length; u++)
        try {
          var v = document.createElement("li"), y = new RGBColor(c[u]), E = document.createElement("div");
          E.style.cssText = "margin: 3px; border: 1px solid black; background:" + y.toHex() + "; color:" + y.toHex(), E.appendChild(document.createTextNode("test"));
          var R = document.createTextNode(
            " " + c[u] + " -> " + y.toRGB() + " -> " + y.toHex()
          );
          v.appendChild(E), v.appendChild(R), d.appendChild(v);
        } catch {
        }
      return d;
    };
  }), fr;
}
var Pl = Ul();
const id = /* @__PURE__ */ Ht(Pl);
var Uo = function(e, t) {
  return (Uo = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (r[s] = n[s]);
  })(e, t);
};
function Po(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  function r() {
    this.constructor = e;
  }
  Uo(e, t), e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
function Zl(e) {
  var t = "";
  Array.isArray(e) || (e = [e]);
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    if (n.type === b.CLOSE_PATH) t += "z";
    else if (n.type === b.HORIZ_LINE_TO) t += (n.relative ? "h" : "H") + n.x;
    else if (n.type === b.VERT_LINE_TO) t += (n.relative ? "v" : "V") + n.y;
    else if (n.type === b.MOVE_TO) t += (n.relative ? "m" : "M") + n.x + " " + n.y;
    else if (n.type === b.LINE_TO) t += (n.relative ? "l" : "L") + n.x + " " + n.y;
    else if (n.type === b.CURVE_TO) t += (n.relative ? "c" : "C") + n.x1 + " " + n.y1 + " " + n.x2 + " " + n.y2 + " " + n.x + " " + n.y;
    else if (n.type === b.SMOOTH_CURVE_TO) t += (n.relative ? "s" : "S") + n.x2 + " " + n.y2 + " " + n.x + " " + n.y;
    else if (n.type === b.QUAD_TO) t += (n.relative ? "q" : "Q") + n.x1 + " " + n.y1 + " " + n.x + " " + n.y;
    else if (n.type === b.SMOOTH_QUAD_TO) t += (n.relative ? "t" : "T") + n.x + " " + n.y;
    else {
      if (n.type !== b.ARC) throw new Error('Unexpected command type "' + n.type + '" at index ' + r + ".");
      t += (n.relative ? "a" : "A") + n.rX + " " + n.rY + " " + n.xRot + " " + +n.lArcFlag + " " + +n.sweepFlag + " " + n.x + " " + n.y;
    }
  }
  return t;
}
function Ur(e, t) {
  var r = e[0], n = e[1];
  return [r * Math.cos(t) - n * Math.sin(t), r * Math.sin(t) + n * Math.cos(t)];
}
function Ue() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var r = 0; r < e.length; r++) if (typeof e[r] != "number") throw new Error("assertNumbers arguments[" + r + "] is not a number. " + typeof e[r] + " == typeof " + e[r]);
  return !0;
}
var Je = Math.PI;
function lr(e, t, r) {
  e.lArcFlag = e.lArcFlag === 0 ? 0 : 1, e.sweepFlag = e.sweepFlag === 0 ? 0 : 1;
  var n = e.rX, s = e.rY, i = e.x, o = e.y;
  n = Math.abs(e.rX), s = Math.abs(e.rY);
  var a = Ur([(t - i) / 2, (r - o) / 2], -e.xRot / 180 * Je), c = a[0], u = a[1], h = Math.pow(c, 2) / Math.pow(n, 2) + Math.pow(u, 2) / Math.pow(s, 2);
  1 < h && (n *= Math.sqrt(h), s *= Math.sqrt(h)), e.rX = n, e.rY = s;
  var f = Math.pow(n, 2) * Math.pow(u, 2) + Math.pow(s, 2) * Math.pow(c, 2), l = (e.lArcFlag !== e.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(n, 2) * Math.pow(s, 2) - f) / f)), d = n * u / s * l, v = -s * c / n * l, y = Ur([d, v], e.xRot / 180 * Je);
  e.cX = y[0] + (t + i) / 2, e.cY = y[1] + (r + o) / 2, e.phi1 = Math.atan2((u - v) / s, (c - d) / n), e.phi2 = Math.atan2((-u - v) / s, (-c - d) / n), e.sweepFlag === 0 && e.phi2 > e.phi1 && (e.phi2 -= 2 * Je), e.sweepFlag === 1 && e.phi2 < e.phi1 && (e.phi2 += 2 * Je), e.phi1 *= 180 / Je, e.phi2 *= 180 / Je;
}
function Yn(e, t, r) {
  Ue(e, t, r);
  var n = e * e + t * t - r * r;
  if (0 > n) return [];
  if (n === 0) return [[e * r / (e * e + t * t), t * r / (e * e + t * t)]];
  var s = Math.sqrt(n);
  return [[(e * r + t * s) / (e * e + t * t), (t * r - e * s) / (e * e + t * t)], [(e * r - t * s) / (e * e + t * t), (t * r + e * s) / (e * e + t * t)]];
}
var de, Be = Math.PI / 180;
function Kn(e, t, r) {
  return (1 - r) * e + r * t;
}
function Xn(e, t, r, n) {
  return e + Math.cos(n / 180 * Je) * t + Math.sin(n / 180 * Je) * r;
}
function Gn(e, t, r, n) {
  var s = 1e-6, i = t - e, o = r - t, a = 3 * i + 3 * (n - r) - 6 * o, c = 6 * (o - i), u = 3 * i;
  return Math.abs(a) < s ? [-u / c] : (function(h, f, l) {
    var d = h * h / 4 - f;
    if (d < -l) return [];
    if (d <= l) return [-h / 2];
    var v = Math.sqrt(d);
    return [-h / 2 - v, -h / 2 + v];
  })(c / a, u / a, s);
}
function Qn(e, t, r, n, s) {
  var i = 1 - s;
  return e * (i * i * i) + t * (3 * i * i * s) + r * (3 * i * s * s) + n * (s * s * s);
}
(function(e) {
  function t() {
    return s((function(a, c, u) {
      return a.relative && (a.x1 !== void 0 && (a.x1 += c), a.y1 !== void 0 && (a.y1 += u), a.x2 !== void 0 && (a.x2 += c), a.y2 !== void 0 && (a.y2 += u), a.x !== void 0 && (a.x += c), a.y !== void 0 && (a.y += u), a.relative = !1), a;
    }));
  }
  function r() {
    var a = NaN, c = NaN, u = NaN, h = NaN;
    return s((function(f, l, d) {
      return f.type & b.SMOOTH_CURVE_TO && (f.type = b.CURVE_TO, a = isNaN(a) ? l : a, c = isNaN(c) ? d : c, f.x1 = f.relative ? l - a : 2 * l - a, f.y1 = f.relative ? d - c : 2 * d - c), f.type & b.CURVE_TO ? (a = f.relative ? l + f.x2 : f.x2, c = f.relative ? d + f.y2 : f.y2) : (a = NaN, c = NaN), f.type & b.SMOOTH_QUAD_TO && (f.type = b.QUAD_TO, u = isNaN(u) ? l : u, h = isNaN(h) ? d : h, f.x1 = f.relative ? l - u : 2 * l - u, f.y1 = f.relative ? d - h : 2 * d - h), f.type & b.QUAD_TO ? (u = f.relative ? l + f.x1 : f.x1, h = f.relative ? d + f.y1 : f.y1) : (u = NaN, h = NaN), f;
    }));
  }
  function n() {
    var a = NaN, c = NaN;
    return s((function(u, h, f) {
      if (u.type & b.SMOOTH_QUAD_TO && (u.type = b.QUAD_TO, a = isNaN(a) ? h : a, c = isNaN(c) ? f : c, u.x1 = u.relative ? h - a : 2 * h - a, u.y1 = u.relative ? f - c : 2 * f - c), u.type & b.QUAD_TO) {
        a = u.relative ? h + u.x1 : u.x1, c = u.relative ? f + u.y1 : u.y1;
        var l = u.x1, d = u.y1;
        u.type = b.CURVE_TO, u.x1 = ((u.relative ? 0 : h) + 2 * l) / 3, u.y1 = ((u.relative ? 0 : f) + 2 * d) / 3, u.x2 = (u.x + 2 * l) / 3, u.y2 = (u.y + 2 * d) / 3;
      } else a = NaN, c = NaN;
      return u;
    }));
  }
  function s(a) {
    var c = 0, u = 0, h = NaN, f = NaN;
    return function(l) {
      if (isNaN(h) && !(l.type & b.MOVE_TO)) throw new Error("path must start with moveto");
      var d = a(l, c, u, h, f);
      return l.type & b.CLOSE_PATH && (c = h, u = f), l.x !== void 0 && (c = l.relative ? c + l.x : l.x), l.y !== void 0 && (u = l.relative ? u + l.y : l.y), l.type & b.MOVE_TO && (h = c, f = u), d;
    };
  }
  function i(a, c, u, h, f, l) {
    return Ue(a, c, u, h, f, l), s((function(d, v, y, E) {
      var R = d.x1, W = d.x2, T = d.relative && !isNaN(E), A = d.x !== void 0 ? d.x : T ? 0 : v, $ = d.y !== void 0 ? d.y : T ? 0 : y;
      function P(U) {
        return U * U;
      }
      d.type & b.HORIZ_LINE_TO && c !== 0 && (d.type = b.LINE_TO, d.y = d.relative ? 0 : y), d.type & b.VERT_LINE_TO && u !== 0 && (d.type = b.LINE_TO, d.x = d.relative ? 0 : v), d.x !== void 0 && (d.x = d.x * a + $ * u + (T ? 0 : f)), d.y !== void 0 && (d.y = A * c + d.y * h + (T ? 0 : l)), d.x1 !== void 0 && (d.x1 = d.x1 * a + d.y1 * u + (T ? 0 : f)), d.y1 !== void 0 && (d.y1 = R * c + d.y1 * h + (T ? 0 : l)), d.x2 !== void 0 && (d.x2 = d.x2 * a + d.y2 * u + (T ? 0 : f)), d.y2 !== void 0 && (d.y2 = W * c + d.y2 * h + (T ? 0 : l));
      var k = a * h - c * u;
      if (d.xRot !== void 0 && (a !== 1 || c !== 0 || u !== 0 || h !== 1)) if (k === 0) delete d.rX, delete d.rY, delete d.xRot, delete d.lArcFlag, delete d.sweepFlag, d.type = b.LINE_TO;
      else {
        var m = d.xRot * Math.PI / 180, p = Math.sin(m), _ = Math.cos(m), O = 1 / P(d.rX), w = 1 / P(d.rY), I = P(_) * O + P(p) * w, M = 2 * p * _ * (O - w), V = P(p) * O + P(_) * w, Y = I * h * h - M * c * h + V * c * c, x = M * (a * h + c * u) - 2 * (I * u * h + V * a * c), D = I * u * u - M * a * u + V * a * a, C = (Math.atan2(x, Y - D) + Math.PI) % Math.PI / 2, F = Math.sin(C), z = Math.cos(C);
        d.rX = Math.abs(k) / Math.sqrt(Y * P(z) + x * F * z + D * P(F)), d.rY = Math.abs(k) / Math.sqrt(Y * P(F) - x * F * z + D * P(z)), d.xRot = 180 * C / Math.PI;
      }
      return d.sweepFlag !== void 0 && 0 > k && (d.sweepFlag = +!d.sweepFlag), d;
    }));
  }
  function o() {
    return function(a) {
      var c = {};
      for (var u in a) c[u] = a[u];
      return c;
    };
  }
  e.ROUND = function(a) {
    function c(u) {
      return Math.round(u * a) / a;
    }
    return a === void 0 && (a = 1e13), Ue(a), function(u) {
      return u.x1 !== void 0 && (u.x1 = c(u.x1)), u.y1 !== void 0 && (u.y1 = c(u.y1)), u.x2 !== void 0 && (u.x2 = c(u.x2)), u.y2 !== void 0 && (u.y2 = c(u.y2)), u.x !== void 0 && (u.x = c(u.x)), u.y !== void 0 && (u.y = c(u.y)), u.rX !== void 0 && (u.rX = c(u.rX)), u.rY !== void 0 && (u.rY = c(u.rY)), u;
    };
  }, e.TO_ABS = t, e.TO_REL = function() {
    return s((function(a, c, u) {
      return a.relative || (a.x1 !== void 0 && (a.x1 -= c), a.y1 !== void 0 && (a.y1 -= u), a.x2 !== void 0 && (a.x2 -= c), a.y2 !== void 0 && (a.y2 -= u), a.x !== void 0 && (a.x -= c), a.y !== void 0 && (a.y -= u), a.relative = !0), a;
    }));
  }, e.NORMALIZE_HVZ = function(a, c, u) {
    return a === void 0 && (a = !0), c === void 0 && (c = !0), u === void 0 && (u = !0), s((function(h, f, l, d, v) {
      if (isNaN(d) && !(h.type & b.MOVE_TO)) throw new Error("path must start with moveto");
      return c && h.type & b.HORIZ_LINE_TO && (h.type = b.LINE_TO, h.y = h.relative ? 0 : l), u && h.type & b.VERT_LINE_TO && (h.type = b.LINE_TO, h.x = h.relative ? 0 : f), a && h.type & b.CLOSE_PATH && (h.type = b.LINE_TO, h.x = h.relative ? d - f : d, h.y = h.relative ? v - l : v), h.type & b.ARC && (h.rX === 0 || h.rY === 0) && (h.type = b.LINE_TO, delete h.rX, delete h.rY, delete h.xRot, delete h.lArcFlag, delete h.sweepFlag), h;
    }));
  }, e.NORMALIZE_ST = r, e.QT_TO_C = n, e.INFO = s, e.SANITIZE = function(a) {
    a === void 0 && (a = 0), Ue(a);
    var c = NaN, u = NaN, h = NaN, f = NaN;
    return s((function(l, d, v, y, E) {
      var R = Math.abs, W = !1, T = 0, A = 0;
      if (l.type & b.SMOOTH_CURVE_TO && (T = isNaN(c) ? 0 : d - c, A = isNaN(u) ? 0 : v - u), l.type & (b.CURVE_TO | b.SMOOTH_CURVE_TO) ? (c = l.relative ? d + l.x2 : l.x2, u = l.relative ? v + l.y2 : l.y2) : (c = NaN, u = NaN), l.type & b.SMOOTH_QUAD_TO ? (h = isNaN(h) ? d : 2 * d - h, f = isNaN(f) ? v : 2 * v - f) : l.type & b.QUAD_TO ? (h = l.relative ? d + l.x1 : l.x1, f = l.relative ? v + l.y1 : l.y2) : (h = NaN, f = NaN), l.type & b.LINE_COMMANDS || l.type & b.ARC && (l.rX === 0 || l.rY === 0 || !l.lArcFlag) || l.type & b.CURVE_TO || l.type & b.SMOOTH_CURVE_TO || l.type & b.QUAD_TO || l.type & b.SMOOTH_QUAD_TO) {
        var $ = l.x === void 0 ? 0 : l.relative ? l.x : l.x - d, P = l.y === void 0 ? 0 : l.relative ? l.y : l.y - v;
        T = isNaN(h) ? l.x1 === void 0 ? T : l.relative ? l.x : l.x1 - d : h - d, A = isNaN(f) ? l.y1 === void 0 ? A : l.relative ? l.y : l.y1 - v : f - v;
        var k = l.x2 === void 0 ? 0 : l.relative ? l.x : l.x2 - d, m = l.y2 === void 0 ? 0 : l.relative ? l.y : l.y2 - v;
        R($) <= a && R(P) <= a && R(T) <= a && R(A) <= a && R(k) <= a && R(m) <= a && (W = !0);
      }
      return l.type & b.CLOSE_PATH && R(d - y) <= a && R(v - E) <= a && (W = !0), W ? [] : l;
    }));
  }, e.MATRIX = i, e.ROTATE = function(a, c, u) {
    c === void 0 && (c = 0), u === void 0 && (u = 0), Ue(a, c, u);
    var h = Math.sin(a), f = Math.cos(a);
    return i(f, h, -h, f, c - c * f + u * h, u - c * h - u * f);
  }, e.TRANSLATE = function(a, c) {
    return c === void 0 && (c = 0), Ue(a, c), i(1, 0, 0, 1, a, c);
  }, e.SCALE = function(a, c) {
    return c === void 0 && (c = a), Ue(a, c), i(a, 0, 0, c, 0, 0);
  }, e.SKEW_X = function(a) {
    return Ue(a), i(1, 0, Math.atan(a), 1, 0, 0);
  }, e.SKEW_Y = function(a) {
    return Ue(a), i(1, Math.atan(a), 0, 1, 0, 0);
  }, e.X_AXIS_SYMMETRY = function(a) {
    return a === void 0 && (a = 0), Ue(a), i(-1, 0, 0, 1, a, 0);
  }, e.Y_AXIS_SYMMETRY = function(a) {
    return a === void 0 && (a = 0), Ue(a), i(1, 0, 0, -1, 0, a);
  }, e.A_TO_C = function() {
    return s((function(a, c, u) {
      return b.ARC === a.type ? (function(h, f, l) {
        var d, v, y, E;
        h.cX || lr(h, f, l);
        for (var R = Math.min(h.phi1, h.phi2), W = Math.max(h.phi1, h.phi2) - R, T = Math.ceil(W / 90), A = new Array(T), $ = f, P = l, k = 0; k < T; k++) {
          var m = Kn(h.phi1, h.phi2, k / T), p = Kn(h.phi1, h.phi2, (k + 1) / T), _ = p - m, O = 4 / 3 * Math.tan(_ * Be / 4), w = [Math.cos(m * Be) - O * Math.sin(m * Be), Math.sin(m * Be) + O * Math.cos(m * Be)], I = w[0], M = w[1], V = [Math.cos(p * Be), Math.sin(p * Be)], Y = V[0], x = V[1], D = [Y + O * Math.sin(p * Be), x - O * Math.cos(p * Be)], C = D[0], F = D[1];
          A[k] = { relative: h.relative, type: b.CURVE_TO };
          var z = function(U, N) {
            var q = Ur([U * h.rX, N * h.rY], h.xRot), L = q[0], se = q[1];
            return [h.cX + L, h.cY + se];
          };
          d = z(I, M), A[k].x1 = d[0], A[k].y1 = d[1], v = z(C, F), A[k].x2 = v[0], A[k].y2 = v[1], y = z(Y, x), A[k].x = y[0], A[k].y = y[1], h.relative && (A[k].x1 -= $, A[k].y1 -= P, A[k].x2 -= $, A[k].y2 -= P, A[k].x -= $, A[k].y -= P), $ = (E = [A[k].x, A[k].y])[0], P = E[1];
        }
        return A;
      })(a, a.relative ? 0 : c, a.relative ? 0 : u) : a;
    }));
  }, e.ANNOTATE_ARCS = function() {
    return s((function(a, c, u) {
      return a.relative && (c = 0, u = 0), b.ARC === a.type && lr(a, c, u), a;
    }));
  }, e.CLONE = o, e.CALCULATE_BOUNDS = function() {
    var a = function(l) {
      var d = {};
      for (var v in l) d[v] = l[v];
      return d;
    }, c = t(), u = n(), h = r(), f = s((function(l, d, v) {
      var y = h(u(c(a(l))));
      function E(F) {
        F > f.maxX && (f.maxX = F), F < f.minX && (f.minX = F);
      }
      function R(F) {
        F > f.maxY && (f.maxY = F), F < f.minY && (f.minY = F);
      }
      if (y.type & b.DRAWING_COMMANDS && (E(d), R(v)), y.type & b.HORIZ_LINE_TO && E(y.x), y.type & b.VERT_LINE_TO && R(y.y), y.type & b.LINE_TO && (E(y.x), R(y.y)), y.type & b.CURVE_TO) {
        E(y.x), R(y.y);
        for (var W = 0, T = Gn(d, y.x1, y.x2, y.x); W < T.length; W++)
          0 < (C = T[W]) && 1 > C && E(Qn(d, y.x1, y.x2, y.x, C));
        for (var A = 0, $ = Gn(v, y.y1, y.y2, y.y); A < $.length; A++)
          0 < (C = $[A]) && 1 > C && R(Qn(v, y.y1, y.y2, y.y, C));
      }
      if (y.type & b.ARC) {
        E(y.x), R(y.y), lr(y, d, v);
        for (var P = y.xRot / 180 * Math.PI, k = Math.cos(P) * y.rX, m = Math.sin(P) * y.rX, p = -Math.sin(P) * y.rY, _ = Math.cos(P) * y.rY, O = y.phi1 < y.phi2 ? [y.phi1, y.phi2] : -180 > y.phi2 ? [y.phi2 + 360, y.phi1 + 360] : [y.phi2, y.phi1], w = O[0], I = O[1], M = function(F) {
          var z = F[0], U = F[1], N = 180 * Math.atan2(U, z) / Math.PI;
          return N < w ? N + 360 : N;
        }, V = 0, Y = Yn(p, -k, 0).map(M); V < Y.length; V++)
          (C = Y[V]) > w && C < I && E(Xn(y.cX, k, p, C));
        for (var x = 0, D = Yn(_, -m, 0).map(M); x < D.length; x++) {
          var C;
          (C = D[x]) > w && C < I && R(Xn(y.cY, m, _, C));
        }
      }
      return l;
    }));
    return f.minX = 1 / 0, f.maxX = -1 / 0, f.minY = 1 / 0, f.maxY = -1 / 0, f;
  };
})(de || (de = {}));
var $e, Zo = (function() {
  function e() {
  }
  return e.prototype.round = function(t) {
    return this.transform(de.ROUND(t));
  }, e.prototype.toAbs = function() {
    return this.transform(de.TO_ABS());
  }, e.prototype.toRel = function() {
    return this.transform(de.TO_REL());
  }, e.prototype.normalizeHVZ = function(t, r, n) {
    return this.transform(de.NORMALIZE_HVZ(t, r, n));
  }, e.prototype.normalizeST = function() {
    return this.transform(de.NORMALIZE_ST());
  }, e.prototype.qtToC = function() {
    return this.transform(de.QT_TO_C());
  }, e.prototype.aToC = function() {
    return this.transform(de.A_TO_C());
  }, e.prototype.sanitize = function(t) {
    return this.transform(de.SANITIZE(t));
  }, e.prototype.translate = function(t, r) {
    return this.transform(de.TRANSLATE(t, r));
  }, e.prototype.scale = function(t, r) {
    return this.transform(de.SCALE(t, r));
  }, e.prototype.rotate = function(t, r, n) {
    return this.transform(de.ROTATE(t, r, n));
  }, e.prototype.matrix = function(t, r, n, s, i, o) {
    return this.transform(de.MATRIX(t, r, n, s, i, o));
  }, e.prototype.skewX = function(t) {
    return this.transform(de.SKEW_X(t));
  }, e.prototype.skewY = function(t) {
    return this.transform(de.SKEW_Y(t));
  }, e.prototype.xSymmetry = function(t) {
    return this.transform(de.X_AXIS_SYMMETRY(t));
  }, e.prototype.ySymmetry = function(t) {
    return this.transform(de.Y_AXIS_SYMMETRY(t));
  }, e.prototype.annotateArcs = function() {
    return this.transform(de.ANNOTATE_ARCS());
  }, e;
})(), Dl = function(e) {
  return e === " " || e === "	" || e === "\r" || e === `
`;
}, es = function(e) {
  return 48 <= e.charCodeAt(0) && e.charCodeAt(0) <= 57;
}, Ml = (function(e) {
  function t() {
    var r = e.call(this) || this;
    return r.curNumber = "", r.curCommandType = -1, r.curCommandRelative = !1, r.canParseCommandOrComma = !0, r.curNumberHasExp = !1, r.curNumberHasExpDigits = !1, r.curNumberHasDecimal = !1, r.curArgs = [], r;
  }
  return Po(t, e), t.prototype.finish = function(r) {
    if (r === void 0 && (r = []), this.parse(" ", r), this.curArgs.length !== 0 || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
    return r;
  }, t.prototype.parse = function(r, n) {
    var s = this;
    n === void 0 && (n = []);
    for (var i = function(f) {
      n.push(f), s.curArgs.length = 0, s.canParseCommandOrComma = !0;
    }, o = 0; o < r.length; o++) {
      var a = r[o], c = !(this.curCommandType !== b.ARC || this.curArgs.length !== 3 && this.curArgs.length !== 4 || this.curNumber.length !== 1 || this.curNumber !== "0" && this.curNumber !== "1"), u = es(a) && (this.curNumber === "0" && a === "0" || c);
      if (!es(a) || u) if (a !== "e" && a !== "E") if (a !== "-" && a !== "+" || !this.curNumberHasExp || this.curNumberHasExpDigits) if (a !== "." || this.curNumberHasExp || this.curNumberHasDecimal || c) {
        if (this.curNumber && this.curCommandType !== -1) {
          var h = Number(this.curNumber);
          if (isNaN(h)) throw new SyntaxError("Invalid number ending at " + o);
          if (this.curCommandType === b.ARC) {
            if (this.curArgs.length === 0 || this.curArgs.length === 1) {
              if (0 > h) throw new SyntaxError('Expected positive number, got "' + h + '" at index "' + o + '"');
            } else if ((this.curArgs.length === 3 || this.curArgs.length === 4) && this.curNumber !== "0" && this.curNumber !== "1") throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + o + '"');
          }
          this.curArgs.push(h), this.curArgs.length === Fl[this.curCommandType] && (b.HORIZ_LINE_TO === this.curCommandType ? i({ type: b.HORIZ_LINE_TO, relative: this.curCommandRelative, x: h }) : b.VERT_LINE_TO === this.curCommandType ? i({ type: b.VERT_LINE_TO, relative: this.curCommandRelative, y: h }) : this.curCommandType === b.MOVE_TO || this.curCommandType === b.LINE_TO || this.curCommandType === b.SMOOTH_QUAD_TO ? (i({ type: this.curCommandType, relative: this.curCommandRelative, x: this.curArgs[0], y: this.curArgs[1] }), b.MOVE_TO === this.curCommandType && (this.curCommandType = b.LINE_TO)) : this.curCommandType === b.CURVE_TO ? i({ type: b.CURVE_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x2: this.curArgs[2], y2: this.curArgs[3], x: this.curArgs[4], y: this.curArgs[5] }) : this.curCommandType === b.SMOOTH_CURVE_TO ? i({ type: b.SMOOTH_CURVE_TO, relative: this.curCommandRelative, x2: this.curArgs[0], y2: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === b.QUAD_TO ? i({ type: b.QUAD_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === b.ARC && i({ type: b.ARC, relative: this.curCommandRelative, rX: this.curArgs[0], rY: this.curArgs[1], xRot: this.curArgs[2], lArcFlag: this.curArgs[3], sweepFlag: this.curArgs[4], x: this.curArgs[5], y: this.curArgs[6] })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
        }
        if (!Dl(a)) if (a === "," && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;
        else if (a !== "+" && a !== "-" && a !== ".") if (u) this.curNumber = a, this.curNumberHasDecimal = !1;
        else {
          if (this.curArgs.length !== 0) throw new SyntaxError("Unterminated command at index " + o + ".");
          if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + a + '" at index ' + o + ". Command cannot follow comma");
          if (this.canParseCommandOrComma = !1, a !== "z" && a !== "Z") if (a === "h" || a === "H") this.curCommandType = b.HORIZ_LINE_TO, this.curCommandRelative = a === "h";
          else if (a === "v" || a === "V") this.curCommandType = b.VERT_LINE_TO, this.curCommandRelative = a === "v";
          else if (a === "m" || a === "M") this.curCommandType = b.MOVE_TO, this.curCommandRelative = a === "m";
          else if (a === "l" || a === "L") this.curCommandType = b.LINE_TO, this.curCommandRelative = a === "l";
          else if (a === "c" || a === "C") this.curCommandType = b.CURVE_TO, this.curCommandRelative = a === "c";
          else if (a === "s" || a === "S") this.curCommandType = b.SMOOTH_CURVE_TO, this.curCommandRelative = a === "s";
          else if (a === "q" || a === "Q") this.curCommandType = b.QUAD_TO, this.curCommandRelative = a === "q";
          else if (a === "t" || a === "T") this.curCommandType = b.SMOOTH_QUAD_TO, this.curCommandRelative = a === "t";
          else {
            if (a !== "a" && a !== "A") throw new SyntaxError('Unexpected character "' + a + '" at index ' + o + ".");
            this.curCommandType = b.ARC, this.curCommandRelative = a === "a";
          }
          else n.push({ type: b.CLOSE_PATH }), this.canParseCommandOrComma = !0, this.curCommandType = -1;
        }
        else this.curNumber = a, this.curNumberHasDecimal = a === ".";
      } else this.curNumber += a, this.curNumberHasDecimal = !0;
      else this.curNumber += a;
      else this.curNumber += a, this.curNumberHasExp = !0;
      else this.curNumber += a, this.curNumberHasExpDigits = this.curNumberHasExp;
    }
    return n;
  }, t.prototype.transform = function(r) {
    return Object.create(this, { parse: { value: function(n, s) {
      s === void 0 && (s = []);
      for (var i = 0, o = Object.getPrototypeOf(this).parse.call(this, n); i < o.length; i++) {
        var a = o[i], c = r(a);
        Array.isArray(c) ? s.push.apply(s, c) : s.push(c);
      }
      return s;
    } } });
  }, t;
})(Zo), b = (function(e) {
  function t(r) {
    var n = e.call(this) || this;
    return n.commands = typeof r == "string" ? t.parse(r) : r, n;
  }
  return Po(t, e), t.prototype.encode = function() {
    return t.encode(this.commands);
  }, t.prototype.getBounds = function() {
    var r = de.CALCULATE_BOUNDS();
    return this.transform(r), r;
  }, t.prototype.transform = function(r) {
    for (var n = [], s = 0, i = this.commands; s < i.length; s++) {
      var o = r(i[s]);
      Array.isArray(o) ? n.push.apply(n, o) : n.push(o);
    }
    return this.commands = n, this;
  }, t.encode = function(r) {
    return Zl(r);
  }, t.parse = function(r) {
    var n = new Ml(), s = [];
    return n.parse(r, s), n.finish(s), s;
  }, t.CLOSE_PATH = 1, t.MOVE_TO = 2, t.HORIZ_LINE_TO = 4, t.VERT_LINE_TO = 8, t.LINE_TO = 16, t.CURVE_TO = 32, t.SMOOTH_CURVE_TO = 64, t.QUAD_TO = 128, t.SMOOTH_QUAD_TO = 256, t.ARC = 512, t.LINE_COMMANDS = t.LINE_TO | t.HORIZ_LINE_TO | t.VERT_LINE_TO, t.DRAWING_COMMANDS = t.HORIZ_LINE_TO | t.VERT_LINE_TO | t.LINE_TO | t.CURVE_TO | t.SMOOTH_CURVE_TO | t.QUAD_TO | t.SMOOTH_QUAD_TO | t.ARC, t;
})(Zo), Fl = (($e = {})[b.MOVE_TO] = 2, $e[b.LINE_TO] = 2, $e[b.HORIZ_LINE_TO] = 1, $e[b.VERT_LINE_TO] = 1, $e[b.CLOSE_PATH] = 0, $e[b.QUAD_TO] = 4, $e[b.SMOOTH_QUAD_TO] = 2, $e[b.CURVE_TO] = 6, $e[b.SMOOTH_CURVE_TO] = 4, $e[b.ARC] = 7, $e);
function Pt(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Pt = function(t) {
    return typeof t;
  } : Pt = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pt(e);
}
function Ll(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var Bl = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259], jl = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
function Vl(e, t, r, n, s) {
  if (typeof e == "string" && (e = document.getElementById(e)), !e || Pt(e) !== "object" || !("getContext" in e))
    throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
  var i = e.getContext("2d");
  try {
    return i.getImageData(t, r, n, s);
  } catch (o) {
    throw new Error("unable to access image data: " + o);
  }
}
function od(e, t, r, n, s, i) {
  if (!(isNaN(i) || i < 1)) {
    i |= 0;
    var o = Vl(e, t, r, n, s);
    o = ql(o, t, r, n, s, i), e.getContext("2d").putImageData(o, t, r);
  }
}
function ql(e, t, r, n, s, i) {
  for (var o = e.data, a = 2 * i + 1, c = n - 1, u = s - 1, h = i + 1, f = h * (h + 1) / 2, l = new ts(), d = l, v, y = 1; y < a; y++)
    d = d.next = new ts(), y === h && (v = d);
  d.next = l;
  for (var E = null, R = null, W = 0, T = 0, A = Bl[i], $ = jl[i], P = 0; P < s; P++) {
    d = l;
    for (var k = o[T], m = o[T + 1], p = o[T + 2], _ = o[T + 3], O = 0; O < h; O++)
      d.r = k, d.g = m, d.b = p, d.a = _, d = d.next;
    for (var w = 0, I = 0, M = 0, V = 0, Y = h * k, x = h * m, D = h * p, C = h * _, F = f * k, z = f * m, U = f * p, N = f * _, q = 1; q < h; q++) {
      var L = T + ((c < q ? c : q) << 2), se = o[L], me = o[L + 1], j = o[L + 2], K = o[L + 3], ne = h - q;
      F += (d.r = se) * ne, z += (d.g = me) * ne, U += (d.b = j) * ne, N += (d.a = K) * ne, w += se, I += me, M += j, V += K, d = d.next;
    }
    E = l, R = v;
    for (var Z = 0; Z < n; Z++) {
      var ie = N * A >>> $;
      if (o[T + 3] = ie, ie !== 0) {
        var oe = 255 / ie;
        o[T] = (F * A >>> $) * oe, o[T + 1] = (z * A >>> $) * oe, o[T + 2] = (U * A >>> $) * oe;
      } else
        o[T] = o[T + 1] = o[T + 2] = 0;
      F -= Y, z -= x, U -= D, N -= C, Y -= E.r, x -= E.g, D -= E.b, C -= E.a;
      var H = Z + i + 1;
      H = W + (H < c ? H : c) << 2, w += E.r = o[H], I += E.g = o[H + 1], M += E.b = o[H + 2], V += E.a = o[H + 3], F += w, z += I, U += M, N += V, E = E.next;
      var Q = R, J = Q.r, ke = Q.g, B = Q.b, ae = Q.a;
      Y += J, x += ke, D += B, C += ae, w -= J, I -= ke, M -= B, V -= ae, R = R.next, T += 4;
    }
    W += n;
  }
  for (var ve = 0; ve < n; ve++) {
    T = ve << 2;
    var Ee = o[T], ge = o[T + 1], Ce = o[T + 2], ee = o[T + 3], Oe = h * Ee, le = h * ge, _e = h * Ce, Ae = h * ee, qe = f * Ee, Xe = f * ge, Ie = f * Ce, be = f * ee;
    d = l;
    for (var He = 0; He < h; He++)
      d.r = Ee, d.g = ge, d.b = Ce, d.a = ee, d = d.next;
    for (var ut = n, Yt = 0, Kt = 0, Xt = 0, Gt = 0, kt = 1; kt <= i; kt++) {
      T = ut + ve << 2;
      var Et = h - kt;
      qe += (d.r = Ee = o[T]) * Et, Xe += (d.g = ge = o[T + 1]) * Et, Ie += (d.b = Ce = o[T + 2]) * Et, be += (d.a = ee = o[T + 3]) * Et, Gt += Ee, Yt += ge, Kt += Ce, Xt += ee, d = d.next, kt < u && (ut += n);
    }
    T = ve, E = l, R = v;
    for (var Qt = 0; Qt < s; Qt++) {
      var Te = T << 2;
      o[Te + 3] = ee = be * A >>> $, ee > 0 ? (ee = 255 / ee, o[Te] = (qe * A >>> $) * ee, o[Te + 1] = (Xe * A >>> $) * ee, o[Te + 2] = (Ie * A >>> $) * ee) : o[Te] = o[Te + 1] = o[Te + 2] = 0, qe -= Oe, Xe -= le, Ie -= _e, be -= Ae, Oe -= E.r, le -= E.g, _e -= E.b, Ae -= E.a, Te = ve + ((Te = Qt + h) < u ? Te : u) * n << 2, qe += Gt += E.r = o[Te], Xe += Yt += E.g = o[Te + 1], Ie += Kt += E.b = o[Te + 2], be += Xt += E.a = o[Te + 3], E = E.next, Oe += Ee = R.r, le += ge = R.g, _e += Ce = R.b, Ae += ee = R.a, Gt -= Ee, Yt -= ge, Kt -= Ce, Xt -= ee, R = R.next, T += n;
    }
  }
  return e;
}
var ts = (
  /**
   * Set properties.
   */
  function e() {
    Ll(this, e), this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
  }
);
export {
  Yl as A,
  Ii as B,
  Ph as C,
  Uh as D,
  Kl as E,
  Er as F,
  Ch as G,
  Wl as H,
  kh as I,
  $i as J,
  Wr as K,
  Hr as L,
  Yr as M,
  Hi as N,
  Wi as O,
  td as P,
  xi as Q,
  id as R,
  Ei as S,
  Ft as T,
  Si as U,
  Jl as V,
  re as Z,
  wt as _,
  Ql as a,
  rd as b,
  Dh as c,
  ed as d,
  b as e,
  nd as f,
  Ht as g,
  Eh as h,
  Sh as i,
  Th as j,
  Li as k,
  Nh as l,
  Rh as m,
  Oh as n,
  xh as o,
  od as p,
  Ri as q,
  sd as r,
  Zh as s,
  ir as t,
  Ui as u,
  $h as v,
  zh as w,
  Ih as x,
  Ah as y,
  Gl as z
};

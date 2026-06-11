import { I as ro, i as Rc } from "./vendor-pako-Bv9j8L58.js";
function y(e, t, n) {
  function r(a, c) {
    if (a._zod || Object.defineProperty(a, "_zod", {
      value: {
        def: c,
        constr: i,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), a._zod.traits.has(e))
      return;
    a._zod.traits.add(e), t(a, c);
    const u = i.prototype, f = Object.keys(u);
    for (let l = 0; l < f.length; l++) {
      const h = f[l];
      h in a || (a[h] = u[h].bind(a));
    }
  }
  const o = n?.Parent ?? Object;
  class s extends o {
  }
  Object.defineProperty(s, "name", { value: e });
  function i(a) {
    var c;
    const u = n?.Parent ? new s() : this;
    r(u, a), (c = u._zod).deferred ?? (c.deferred = []);
    for (const f of u._zod.deferred)
      f();
    return u;
  }
  return Object.defineProperty(i, "init", { value: r }), Object.defineProperty(i, Symbol.hasInstance, {
    value: (a) => n?.Parent && a instanceof n.Parent ? !0 : a?._zod?.traits?.has(e)
  }), Object.defineProperty(i, "name", { value: e }), i;
}
let kt = class extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}, $s = class extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
};
const Qn = {};
function Me(e) {
  return e && Object.assign(Qn, e), Qn;
}
function Es(e) {
  const t = Object.values(e).filter((r) => typeof r == "number");
  return Object.entries(e).filter(([r, o]) => t.indexOf(+r) === -1).map(([r, o]) => o);
}
function oo(e, t = "|") {
  return e.map((n) => Cs(n)).join(t);
}
function er(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function Or(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function Ct(e) {
  return e == null;
}
function zr(e) {
  const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, n);
}
function Pc(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = t.toString();
  let o = (r.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(r)) {
    const c = r.match(/\d?e-(\d?)/);
    c?.[1] && (o = Number.parseInt(c[1]));
  }
  const s = n > o ? n : o, i = Number.parseInt(e.toFixed(s).replace(".", "")), a = Number.parseInt(t.toFixed(s).replace(".", ""));
  return i % a / 10 ** s;
}
const so = /* @__PURE__ */ Symbol("evaluating");
function ee(e, t, n) {
  let r;
  Object.defineProperty(e, t, {
    get() {
      if (r !== so)
        return r === void 0 && (r = so, r = n()), r;
    },
    set(o) {
      Object.defineProperty(e, t, {
        value: o
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function mt(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function ut(...e) {
  const t = {};
  for (const n of e) {
    const r = Object.getOwnPropertyDescriptors(n);
    Object.assign(t, r);
  }
  return Object.defineProperties({}, t);
}
function io(e) {
  return JSON.stringify(e);
}
function Fc(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const Os = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function hn(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Dc = Or(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function Et(e) {
  if (hn(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const n = t.prototype;
  return !(hn(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function zs(e) {
  return Et(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const tr = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Ot(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function tt(e, t, n) {
  const r = new e._zod.constr(t ?? e._zod.def);
  return (!t || n?.parent) && (r._zod.parent = e), r;
}
function x(e) {
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
function Cs(e) {
  return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function Uc(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const Mc = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Lc(e, t) {
  const n = e._zod.def, r = n.checks;
  if (r && r.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const s = ut(e._zod.def, {
    get shape() {
      const i = {};
      for (const a in t) {
        if (!(a in n.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        t[a] && (i[a] = n.shape[a]);
      }
      return mt(this, "shape", i), i;
    },
    checks: []
  });
  return tt(e, s);
}
function jc(e, t) {
  const n = e._zod.def, r = n.checks;
  if (r && r.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const s = ut(e._zod.def, {
    get shape() {
      const i = { ...e._zod.def.shape };
      for (const a in t) {
        if (!(a in n.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        t[a] && delete i[a];
      }
      return mt(this, "shape", i), i;
    },
    checks: []
  });
  return tt(e, s);
}
function Bc(e, t) {
  if (!Et(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const n = e._zod.def.checks;
  if (n && n.length > 0) {
    const s = e._zod.def.shape;
    for (const i in t)
      if (Object.getOwnPropertyDescriptor(s, i) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const o = ut(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape, ...t };
      return mt(this, "shape", s), s;
    }
  });
  return tt(e, o);
}
function Vc(e, t) {
  if (!Et(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const n = ut(e._zod.def, {
    get shape() {
      const r = { ...e._zod.def.shape, ...t };
      return mt(this, "shape", r), r;
    }
  });
  return tt(e, n);
}
function Jc(e, t) {
  const n = ut(e._zod.def, {
    get shape() {
      const r = { ...e._zod.def.shape, ...t._zod.def.shape };
      return mt(this, "shape", r), r;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return tt(e, n);
}
function qc(e, t, n) {
  const o = t._zod.def.checks;
  if (o && o.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const i = ut(t._zod.def, {
    get shape() {
      const a = t._zod.def.shape, c = { ...a };
      if (n)
        for (const u in n) {
          if (!(u in a))
            throw new Error(`Unrecognized key: "${u}"`);
          n[u] && (c[u] = e ? new e({
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
      return mt(this, "shape", c), c;
    },
    checks: []
  });
  return tt(t, i);
}
function Wc(e, t, n) {
  const r = ut(t._zod.def, {
    get shape() {
      const o = t._zod.def.shape, s = { ...o };
      if (n)
        for (const i in n) {
          if (!(i in s))
            throw new Error(`Unrecognized key: "${i}"`);
          n[i] && (s[i] = new e({
            type: "nonoptional",
            innerType: o[i]
          }));
        }
      else
        for (const i in o)
          s[i] = new e({
            type: "nonoptional",
            innerType: o[i]
          });
      return mt(this, "shape", s), s;
    }
  });
  return tt(t, r);
}
function yt(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n]?.continue !== !0)
      return !0;
  return !1;
}
function et(e, t) {
  return t.map((n) => {
    var r;
    return (r = n).path ?? (r.path = []), n.path.unshift(e), n;
  });
}
function Ht(e) {
  return typeof e == "string" ? e : e?.message;
}
function Ye(e, t, n) {
  const r = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const o = Ht(e.inst?._zod.def?.error?.(e)) ?? Ht(t?.error?.(e)) ?? Ht(n.customError?.(e)) ?? Ht(n.localeError?.(e)) ?? "Invalid input";
    r.message = o;
  }
  return delete r.inst, delete r.continue, t?.reportInput || delete r.input, r;
}
function Cr(e) {
  return e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof File ? "file" : "unknown";
}
function Tr(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function Hc(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "nan" : "number";
    case "object": {
      if (e === null)
        return "null";
      if (Array.isArray(e))
        return "array";
      const n = e;
      if (n && Object.getPrototypeOf(n) !== Object.prototype && "constructor" in n && n.constructor)
        return n.constructor.name;
    }
  }
  return t;
}
function Lt(...e) {
  const [t, n, r] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: n,
    inst: r
  } : { ...t };
}
const Ts = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, er, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, As = y("$ZodError", Ts), Ss = y("$ZodError", Ts, { Parent: Error });
function Ns(e, t = (n) => n.message) {
  const n = {}, r = [];
  for (const o of e.issues)
    o.path.length > 0 ? (n[o.path[0]] = n[o.path[0]] || [], n[o.path[0]].push(t(o))) : r.push(t(o));
  return { formErrors: r, fieldErrors: n };
}
function Is(e, t = (n) => n.message) {
  const n = { _errors: [] }, r = (o) => {
    for (const s of o.issues)
      if (s.code === "invalid_union" && s.errors.length)
        s.errors.map((i) => r({ issues: i }));
      else if (s.code === "invalid_key")
        r({ issues: s.issues });
      else if (s.code === "invalid_element")
        r({ issues: s.issues });
      else if (s.path.length === 0)
        n._errors.push(t(s));
      else {
        let i = n, a = 0;
        for (; a < s.path.length; ) {
          const c = s.path[a];
          a === s.path.length - 1 ? (i[c] = i[c] || { _errors: [] }, i[c]._errors.push(t(s))) : i[c] = i[c] || { _errors: [] }, i = i[c], a++;
        }
      }
  };
  return r(e), n;
}
const Ar = (e) => (t, n, r, o) => {
  const s = r ? Object.assign(r, { async: !1 }) : { async: !1 }, i = t._zod.run({ value: n, issues: [] }, s);
  if (i instanceof Promise)
    throw new kt();
  if (i.issues.length) {
    const a = new (o?.Err ?? e)(i.issues.map((c) => Ye(c, s, Me())));
    throw Os(a, o?.callee), a;
  }
  return i.value;
}, Sr = (e) => async (t, n, r, o) => {
  const s = r ? Object.assign(r, { async: !0 }) : { async: !0 };
  let i = t._zod.run({ value: n, issues: [] }, s);
  if (i instanceof Promise && (i = await i), i.issues.length) {
    const a = new (o?.Err ?? e)(i.issues.map((c) => Ye(c, s, Me())));
    throw Os(a, o?.callee), a;
  }
  return i.value;
}, kn = (e) => (t, n, r) => {
  const o = r ? { ...r, async: !1 } : { async: !1 }, s = t._zod.run({ value: n, issues: [] }, o);
  if (s instanceof Promise)
    throw new kt();
  return s.issues.length ? {
    success: !1,
    error: new (e ?? As)(s.issues.map((i) => Ye(i, o, Me())))
  } : { success: !0, data: s.value };
}, Kc = /* @__PURE__ */ kn(Ss), $n = (e) => async (t, n, r) => {
  const o = r ? Object.assign(r, { async: !0 }) : { async: !0 };
  let s = t._zod.run({ value: n, issues: [] }, o);
  return s instanceof Promise && (s = await s), s.issues.length ? {
    success: !1,
    error: new e(s.issues.map((i) => Ye(i, o, Me())))
  } : { success: !0, data: s.value };
}, Yc = /* @__PURE__ */ $n(Ss), Xc = (e) => (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return Ar(e)(t, n, o);
}, Gc = (e) => (t, n, r) => Ar(e)(t, n, r), Qc = (e) => async (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return Sr(e)(t, n, o);
}, eu = (e) => async (t, n, r) => Sr(e)(t, n, r), tu = (e) => (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return kn(e)(t, n, o);
}, nu = (e) => (t, n, r) => kn(e)(t, n, r), ru = (e) => async (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return $n(e)(t, n, o);
}, ou = (e) => async (t, n, r) => $n(e)(t, n, r), su = /^[cC][^\s-]{8,}$/, iu = /^[0-9a-z]+$/, au = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, cu = /^[0-9a-vA-V]{20}$/, uu = /^[A-Za-z0-9]{27}$/, fu = /^[a-zA-Z0-9_-]{21}$/, lu = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, hu = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, ao = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, du = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, pu = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function mu() {
  return new RegExp(pu, "u");
}
const gu = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, _u = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, yu = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, vu = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, bu = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Zs = /^[A-Za-z0-9_-]*$/, wu = /^\+[1-9]\d{6,14}$/, xs = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", ku = /* @__PURE__ */ new RegExp(`^${xs}$`);
function Rs(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function $u(e) {
  return new RegExp(`^${Rs(e)}$`);
}
function Eu(e) {
  const t = Rs({ precision: e.precision }), n = ["Z"];
  e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const r = `${t}(?:${n.join("|")})`;
  return new RegExp(`^${xs}T(?:${r})$`);
}
const Ou = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, zu = /^-?\d+$/, Ps = /^-?\d+(?:\.\d+)?$/, Cu = /^(?:true|false)$/i, Tu = /^null$/i, Au = /^undefined$/i, Su = /^[^A-Z]*$/, Nu = /^[^a-z]*$/, ze = /* @__PURE__ */ y("$ZodCheck", (e, t) => {
  var n;
  e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Fs = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, Ds = /* @__PURE__ */ y("$ZodCheckLessThan", (e, t) => {
  ze.init(e, t);
  const n = Fs[typeof t.value];
  e._zod.onattach.push((r) => {
    const o = r._zod.bag, s = (t.inclusive ? o.maximum : o.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < s && (t.inclusive ? o.maximum = t.value : o.exclusiveMaximum = t.value);
  }), e._zod.check = (r) => {
    (t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
      origin: n,
      code: "too_big",
      maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
      input: r.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), Us = /* @__PURE__ */ y("$ZodCheckGreaterThan", (e, t) => {
  ze.init(e, t);
  const n = Fs[typeof t.value];
  e._zod.onattach.push((r) => {
    const o = r._zod.bag, s = (t.inclusive ? o.minimum : o.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > s && (t.inclusive ? o.minimum = t.value : o.exclusiveMinimum = t.value);
  }), e._zod.check = (r) => {
    (t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
      origin: n,
      code: "too_small",
      minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
      input: r.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), Iu = /* @__PURE__ */ y("$ZodCheckMultipleOf", (e, t) => {
  ze.init(e, t), e._zod.onattach.push((n) => {
    var r;
    (r = n._zod.bag).multipleOf ?? (r.multipleOf = t.value);
  }), e._zod.check = (n) => {
    if (typeof n.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof n.value == "bigint" ? n.value % t.value === BigInt(0) : Pc(n.value, t.value) === 0) || n.issues.push({
      origin: typeof n.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Zu = /* @__PURE__ */ y("$ZodCheckNumberFormat", (e, t) => {
  ze.init(e, t), t.format = t.format || "float64";
  const n = t.format?.includes("int"), r = n ? "int" : "number", [o, s] = Mc[t.format];
  e._zod.onattach.push((i) => {
    const a = i._zod.bag;
    a.format = t.format, a.minimum = o, a.maximum = s, n && (a.pattern = zu);
  }), e._zod.check = (i) => {
    const a = i.value;
    if (n) {
      if (!Number.isInteger(a)) {
        i.issues.push({
          expected: r,
          format: t.format,
          code: "invalid_type",
          continue: !1,
          input: a,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(a)) {
        a > 0 ? i.issues.push({
          input: a,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: r,
          inclusive: !0,
          continue: !t.abort
        }) : i.issues.push({
          input: a,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: r,
          inclusive: !0,
          continue: !t.abort
        });
        return;
      }
    }
    a < o && i.issues.push({
      origin: "number",
      input: a,
      code: "too_small",
      minimum: o,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), a > s && i.issues.push({
      origin: "number",
      input: a,
      code: "too_big",
      maximum: s,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    });
  };
}), xu = /* @__PURE__ */ y("$ZodCheckMaxSize", (e, t) => {
  var n;
  ze.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !Ct(o) && o.size !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < o && (r._zod.bag.maximum = t.maximum);
  }), e._zod.check = (r) => {
    const o = r.value;
    o.size <= t.maximum || r.issues.push({
      origin: Cr(o),
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !t.abort
    });
  };
}), Ru = /* @__PURE__ */ y("$ZodCheckMinSize", (e, t) => {
  var n;
  ze.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !Ct(o) && o.size !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > o && (r._zod.bag.minimum = t.minimum);
  }), e._zod.check = (r) => {
    const o = r.value;
    o.size >= t.minimum || r.issues.push({
      origin: Cr(o),
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !t.abort
    });
  };
}), Pu = /* @__PURE__ */ y("$ZodCheckSizeEquals", (e, t) => {
  var n;
  ze.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !Ct(o) && o.size !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.minimum = t.size, o.maximum = t.size, o.size = t.size;
  }), e._zod.check = (r) => {
    const o = r.value, s = o.size;
    if (s === t.size)
      return;
    const i = s > t.size;
    r.issues.push({
      origin: Cr(o),
      ...i ? { code: "too_big", maximum: t.size } : { code: "too_small", minimum: t.size },
      inclusive: !0,
      exact: !0,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Fu = /* @__PURE__ */ y("$ZodCheckMaxLength", (e, t) => {
  var n;
  ze.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !Ct(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < o && (r._zod.bag.maximum = t.maximum);
  }), e._zod.check = (r) => {
    const o = r.value;
    if (o.length <= t.maximum)
      return;
    const i = Tr(o);
    r.issues.push({
      origin: i,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !t.abort
    });
  };
}), Du = /* @__PURE__ */ y("$ZodCheckMinLength", (e, t) => {
  var n;
  ze.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !Ct(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > o && (r._zod.bag.minimum = t.minimum);
  }), e._zod.check = (r) => {
    const o = r.value;
    if (o.length >= t.minimum)
      return;
    const i = Tr(o);
    r.issues.push({
      origin: i,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !t.abort
    });
  };
}), Uu = /* @__PURE__ */ y("$ZodCheckLengthEquals", (e, t) => {
  var n;
  ze.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !Ct(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.minimum = t.length, o.maximum = t.length, o.length = t.length;
  }), e._zod.check = (r) => {
    const o = r.value, s = o.length;
    if (s === t.length)
      return;
    const i = Tr(o), a = s > t.length;
    r.issues.push({
      origin: i,
      ...a ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), En = /* @__PURE__ */ y("$ZodCheckStringFormat", (e, t) => {
  var n, r;
  ze.init(e, t), e._zod.onattach.push((o) => {
    const s = o._zod.bag;
    s.format = t.format, t.pattern && (s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(t.pattern));
  }), t.pattern ? (n = e._zod).check ?? (n.check = (o) => {
    t.pattern.lastIndex = 0, !t.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: o.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (r = e._zod).check ?? (r.check = () => {
  });
}), Mu = /* @__PURE__ */ y("$ZodCheckRegex", (e, t) => {
  En.init(e, t), e._zod.check = (n) => {
    t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: n.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), Lu = /* @__PURE__ */ y("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = Su), En.init(e, t);
}), ju = /* @__PURE__ */ y("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = Nu), En.init(e, t);
}), Bu = /* @__PURE__ */ y("$ZodCheckIncludes", (e, t) => {
  ze.init(e, t);
  const n = Ot(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${n}` : n);
  t.pattern = r, e._zod.onattach.push((o) => {
    const s = o._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(r);
  }), e._zod.check = (o) => {
    o.value.includes(t.includes, t.position) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Vu = /* @__PURE__ */ y("$ZodCheckStartsWith", (e, t) => {
  ze.init(e, t);
  const n = new RegExp(`^${Ot(t.prefix)}.*`);
  t.pattern ?? (t.pattern = n), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(n);
  }), e._zod.check = (r) => {
    r.value.startsWith(t.prefix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ju = /* @__PURE__ */ y("$ZodCheckEndsWith", (e, t) => {
  ze.init(e, t);
  const n = new RegExp(`.*${Ot(t.suffix)}$`);
  t.pattern ?? (t.pattern = n), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(n);
  }), e._zod.check = (r) => {
    r.value.endsWith(t.suffix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), qu = /* @__PURE__ */ y("$ZodCheckOverwrite", (e, t) => {
  ze.init(e, t), e._zod.check = (n) => {
    n.value = t.tx(n.value);
  };
});
let Wu = class {
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
    const r = t.split(`
`).filter((i) => i), o = Math.min(...r.map((i) => i.length - i.trimStart().length)), s = r.map((i) => i.slice(o)).map((i) => " ".repeat(this.indent * 2) + i);
    for (const i of s)
      this.content.push(i);
  }
  compile() {
    const t = Function, n = this?.args, o = [...(this?.content ?? [""]).map((s) => `  ${s}`)];
    return new t(...n, o.join(`
`));
  }
};
const Hu = {
  major: 4,
  minor: 3,
  patch: 6
}, re = /* @__PURE__ */ y("$ZodType", (e, t) => {
  var n;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Hu;
  const r = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && r.unshift(e);
  for (const o of r)
    for (const s of o._zod.onattach)
      s(e);
  if (r.length === 0)
    (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const o = (i, a, c) => {
      let u = yt(i), f;
      for (const l of a) {
        if (l._zod.def.when) {
          if (!l._zod.def.when(i))
            continue;
        } else if (u)
          continue;
        const h = i.issues.length, d = l._zod.check(i);
        if (d instanceof Promise && c?.async === !1)
          throw new kt();
        if (f || d instanceof Promise)
          f = (f ?? Promise.resolve()).then(async () => {
            await d, i.issues.length !== h && (u || (u = yt(i, h)));
          });
        else {
          if (i.issues.length === h)
            continue;
          u || (u = yt(i, h));
        }
      }
      return f ? f.then(() => i) : i;
    }, s = (i, a, c) => {
      if (yt(i))
        return i.aborted = !0, i;
      const u = o(a, r, c);
      if (u instanceof Promise) {
        if (c.async === !1)
          throw new kt();
        return u.then((f) => e._zod.parse(f, c));
      }
      return e._zod.parse(u, c);
    };
    e._zod.run = (i, a) => {
      if (a.skipChecks)
        return e._zod.parse(i, a);
      if (a.direction === "backward") {
        const u = e._zod.parse({ value: i.value, issues: [] }, { ...a, skipChecks: !0 });
        return u instanceof Promise ? u.then((f) => s(f, i, a)) : s(u, i, a);
      }
      const c = e._zod.parse(i, a);
      if (c instanceof Promise) {
        if (a.async === !1)
          throw new kt();
        return c.then((u) => o(u, r, a));
      }
      return o(c, r, a);
    };
  }
  ee(e, "~standard", () => ({
    validate: (o) => {
      try {
        const s = Kc(e, o);
        return s.success ? { value: s.data } : { issues: s.error?.issues };
      } catch {
        return Yc(e, o).then((i) => i.success ? { value: i.data } : { issues: i.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), Nr = /* @__PURE__ */ y("$ZodString", (e, t) => {
  re.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? Ou(e._zod.bag), e._zod.parse = (n, r) => {
    if (t.coerce)
      try {
        n.value = String(n.value);
      } catch {
      }
    return typeof n.value == "string" || n.issues.push({
      expected: "string",
      code: "invalid_type",
      input: n.value,
      inst: e
    }), n;
  };
}), he = /* @__PURE__ */ y("$ZodStringFormat", (e, t) => {
  En.init(e, t), Nr.init(e, t);
}), Ku = /* @__PURE__ */ y("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = hu), he.init(e, t);
}), Yu = /* @__PURE__ */ y("$ZodUUID", (e, t) => {
  if (t.version) {
    const r = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (r === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = ao(r));
  } else
    t.pattern ?? (t.pattern = ao());
  he.init(e, t);
}), Xu = /* @__PURE__ */ y("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = du), he.init(e, t);
}), Gu = /* @__PURE__ */ y("$ZodURL", (e, t) => {
  he.init(e, t), e._zod.check = (n) => {
    try {
      const r = n.value.trim(), o = new URL(r);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(o.hostname) || n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: n.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol) || n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: n.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? n.value = o.href : n.value = r;
      return;
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "url",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), Qu = /* @__PURE__ */ y("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = mu()), he.init(e, t);
}), ef = /* @__PURE__ */ y("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = fu), he.init(e, t);
}), tf = /* @__PURE__ */ y("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = su), he.init(e, t);
}), nf = /* @__PURE__ */ y("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = iu), he.init(e, t);
}), rf = /* @__PURE__ */ y("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = au), he.init(e, t);
}), of = /* @__PURE__ */ y("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = cu), he.init(e, t);
}), sf = /* @__PURE__ */ y("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = uu), he.init(e, t);
}), af = /* @__PURE__ */ y("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = Eu(t)), he.init(e, t);
}), cf = /* @__PURE__ */ y("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = ku), he.init(e, t);
}), uf = /* @__PURE__ */ y("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = $u(t)), he.init(e, t);
}), ff = /* @__PURE__ */ y("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = lu), he.init(e, t);
}), lf = /* @__PURE__ */ y("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = gu), he.init(e, t), e._zod.bag.format = "ipv4";
}), hf = /* @__PURE__ */ y("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = _u), he.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
    try {
      new URL(`http://[${n.value}]`);
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), df = /* @__PURE__ */ y("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = yu), he.init(e, t);
}), pf = /* @__PURE__ */ y("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = vu), he.init(e, t), e._zod.check = (n) => {
    const r = n.value.split("/");
    try {
      if (r.length !== 2)
        throw new Error();
      const [o, s] = r;
      if (!s)
        throw new Error();
      const i = Number(s);
      if (`${i}` !== s)
        throw new Error();
      if (i < 0 || i > 128)
        throw new Error();
      new URL(`http://[${o}]`);
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function Ms(e) {
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
const mf = /* @__PURE__ */ y("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = bu), he.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
    Ms(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function gf(e) {
  if (!Zs.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), n = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return Ms(n);
}
const _f = /* @__PURE__ */ y("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = Zs), he.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
    gf(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), yf = /* @__PURE__ */ y("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = wu), he.init(e, t);
});
function vf(e, t = null) {
  try {
    const n = e.split(".");
    if (n.length !== 3)
      return !1;
    const [r] = n;
    if (!r)
      return !1;
    const o = JSON.parse(atob(r));
    return !("typ" in o && o?.typ !== "JWT" || !o.alg || t && (!("alg" in o) || o.alg !== t));
  } catch {
    return !1;
  }
}
const bf = /* @__PURE__ */ y("$ZodJWT", (e, t) => {
  he.init(e, t), e._zod.check = (n) => {
    vf(n.value, t.alg) || n.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ls = /* @__PURE__ */ y("$ZodNumber", (e, t) => {
  re.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Ps, e._zod.parse = (n, r) => {
    if (t.coerce)
      try {
        n.value = Number(n.value);
      } catch {
      }
    const o = n.value;
    if (typeof o == "number" && !Number.isNaN(o) && Number.isFinite(o))
      return n;
    const s = typeof o == "number" ? Number.isNaN(o) ? "NaN" : Number.isFinite(o) ? void 0 : "Infinity" : void 0;
    return n.issues.push({
      expected: "number",
      code: "invalid_type",
      input: o,
      inst: e,
      ...s ? { received: s } : {}
    }), n;
  };
}), wf = /* @__PURE__ */ y("$ZodNumberFormat", (e, t) => {
  Zu.init(e, t), Ls.init(e, t);
}), kf = /* @__PURE__ */ y("$ZodBoolean", (e, t) => {
  re.init(e, t), e._zod.pattern = Cu, e._zod.parse = (n, r) => {
    if (t.coerce)
      try {
        n.value = !!n.value;
      } catch {
      }
    const o = n.value;
    return typeof o == "boolean" || n.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: o,
      inst: e
    }), n;
  };
}), $f = /* @__PURE__ */ y("$ZodUndefined", (e, t) => {
  re.init(e, t), e._zod.pattern = Au, e._zod.values = /* @__PURE__ */ new Set([void 0]), e._zod.optin = "optional", e._zod.optout = "optional", e._zod.parse = (n, r) => {
    const o = n.value;
    return typeof o > "u" || n.issues.push({
      expected: "undefined",
      code: "invalid_type",
      input: o,
      inst: e
    }), n;
  };
}), Ef = /* @__PURE__ */ y("$ZodNull", (e, t) => {
  re.init(e, t), e._zod.pattern = Tu, e._zod.values = /* @__PURE__ */ new Set([null]), e._zod.parse = (n, r) => {
    const o = n.value;
    return o === null || n.issues.push({
      expected: "null",
      code: "invalid_type",
      input: o,
      inst: e
    }), n;
  };
}), Of = /* @__PURE__ */ y("$ZodAny", (e, t) => {
  re.init(e, t), e._zod.parse = (n) => n;
}), zf = /* @__PURE__ */ y("$ZodUnknown", (e, t) => {
  re.init(e, t), e._zod.parse = (n) => n;
}), Cf = /* @__PURE__ */ y("$ZodNever", (e, t) => {
  re.init(e, t), e._zod.parse = (n, r) => (n.issues.push({
    expected: "never",
    code: "invalid_type",
    input: n.value,
    inst: e
  }), n);
}), Tf = /* @__PURE__ */ y("$ZodDate", (e, t) => {
  re.init(e, t), e._zod.parse = (n, r) => {
    if (t.coerce)
      try {
        n.value = new Date(n.value);
      } catch {
      }
    const o = n.value, s = o instanceof Date;
    return s && !Number.isNaN(o.getTime()) || n.issues.push({
      expected: "date",
      code: "invalid_type",
      input: o,
      ...s ? { received: "Invalid Date" } : {},
      inst: e
    }), n;
  };
});
function co(e, t, n) {
  e.issues.length && t.issues.push(...et(n, e.issues)), t.value[n] = e.value;
}
const Af = /* @__PURE__ */ y("$ZodArray", (e, t) => {
  re.init(e, t), e._zod.parse = (n, r) => {
    const o = n.value;
    if (!Array.isArray(o))
      return n.issues.push({
        expected: "array",
        code: "invalid_type",
        input: o,
        inst: e
      }), n;
    n.value = Array(o.length);
    const s = [];
    for (let i = 0; i < o.length; i++) {
      const a = o[i], c = t.element._zod.run({
        value: a,
        issues: []
      }, r);
      c instanceof Promise ? s.push(c.then((u) => co(u, n, i))) : co(c, n, i);
    }
    return s.length ? Promise.all(s).then(() => n) : n;
  };
});
function dn(e, t, n, r, o) {
  if (e.issues.length) {
    if (o && !(n in r))
      return;
    t.issues.push(...et(n, e.issues));
  }
  e.value === void 0 ? n in r && (t.value[n] = void 0) : t.value[n] = e.value;
}
function js(e) {
  const t = Object.keys(e.shape);
  for (const r of t)
    if (!e.shape?.[r]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
  const n = Uc(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(n)
  };
}
function Bs(e, t, n, r, o, s) {
  const i = [], a = o.keySet, c = o.catchall._zod, u = c.def.type, f = c.optout === "optional";
  for (const l in t) {
    if (a.has(l))
      continue;
    if (u === "never") {
      i.push(l);
      continue;
    }
    const h = c.run({ value: t[l], issues: [] }, r);
    h instanceof Promise ? e.push(h.then((d) => dn(d, n, l, t, f))) : dn(h, n, l, t, f);
  }
  return i.length && n.issues.push({
    code: "unrecognized_keys",
    keys: i,
    input: t,
    inst: s
  }), e.length ? Promise.all(e).then(() => n) : n;
}
const Sf = /* @__PURE__ */ y("$ZodObject", (e, t) => {
  if (re.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
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
  const r = Or(() => js(t));
  ee(e._zod, "propValues", () => {
    const a = t.shape, c = {};
    for (const u in a) {
      const f = a[u]._zod;
      if (f.values) {
        c[u] ?? (c[u] = /* @__PURE__ */ new Set());
        for (const l of f.values)
          c[u].add(l);
      }
    }
    return c;
  });
  const o = hn, s = t.catchall;
  let i;
  e._zod.parse = (a, c) => {
    i ?? (i = r.value);
    const u = a.value;
    if (!o(u))
      return a.issues.push({
        expected: "object",
        code: "invalid_type",
        input: u,
        inst: e
      }), a;
    a.value = {};
    const f = [], l = i.shape;
    for (const h of i.keys) {
      const d = l[h], g = d._zod.optout === "optional", _ = d._zod.run({ value: u[h], issues: [] }, c);
      _ instanceof Promise ? f.push(_.then((w) => dn(w, a, h, u, g))) : dn(_, a, h, u, g);
    }
    return s ? Bs(f, u, a, c, r.value, e) : f.length ? Promise.all(f).then(() => a) : a;
  };
}), Nf = /* @__PURE__ */ y("$ZodObjectJIT", (e, t) => {
  Sf.init(e, t);
  const n = e._zod.parse, r = Or(() => js(t)), o = (h) => {
    const d = new Wu(["shape", "payload", "ctx"]), g = r.value, _ = ($) => {
      const z = io($);
      return `shape[${z}]._zod.run({ value: input[${z}], issues: [] }, ctx)`;
    };
    d.write("const input = payload.value;");
    const w = /* @__PURE__ */ Object.create(null);
    let T = 0;
    for (const $ of g.keys)
      w[$] = `key_${T++}`;
    d.write("const newResult = {};");
    for (const $ of g.keys) {
      const z = w[$], S = io($), E = h[$]?._zod?.optout === "optional";
      d.write(`const ${z} = ${_($)};`), E ? d.write(`
        if (${z}.issues.length) {
          if (${S} in input) {
            payload.issues = payload.issues.concat(${z}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${S}, ...iss.path] : [${S}]
            })));
          }
        }
        
        if (${z}.value === undefined) {
          if (${S} in input) {
            newResult[${S}] = undefined;
          }
        } else {
          newResult[${S}] = ${z}.value;
        }
        
      `) : d.write(`
        if (${z}.issues.length) {
          payload.issues = payload.issues.concat(${z}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${S}, ...iss.path] : [${S}]
          })));
        }
        
        if (${z}.value === undefined) {
          if (${S} in input) {
            newResult[${S}] = undefined;
          }
        } else {
          newResult[${S}] = ${z}.value;
        }
        
      `);
    }
    d.write("payload.value = newResult;"), d.write("return payload;");
    const M = d.compile();
    return ($, z) => M(h, $, z);
  };
  let s;
  const i = hn, a = !Qn.jitless, u = a && Dc.value, f = t.catchall;
  let l;
  e._zod.parse = (h, d) => {
    l ?? (l = r.value);
    const g = h.value;
    return i(g) ? a && u && d?.async === !1 && d.jitless !== !0 ? (s || (s = o(t.shape)), h = s(h, d), f ? Bs([], g, h, d, l, e) : h) : n(h, d) : (h.issues.push({
      expected: "object",
      code: "invalid_type",
      input: g,
      inst: e
    }), h);
  };
});
function uo(e, t, n, r) {
  for (const s of e)
    if (s.issues.length === 0)
      return t.value = s.value, t;
  const o = e.filter((s) => !yt(s));
  return o.length === 1 ? (t.value = o[0].value, o[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: n,
    errors: e.map((s) => s.issues.map((i) => Ye(i, r, Me())))
  }), t);
}
const If = /* @__PURE__ */ y("$ZodUnion", (e, t) => {
  re.init(e, t), ee(e._zod, "optin", () => t.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), ee(e._zod, "optout", () => t.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), ee(e._zod, "values", () => {
    if (t.options.every((o) => o._zod.values))
      return new Set(t.options.flatMap((o) => Array.from(o._zod.values)));
  }), ee(e._zod, "pattern", () => {
    if (t.options.every((o) => o._zod.pattern)) {
      const o = t.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${o.map((s) => zr(s.source)).join("|")})$`);
    }
  });
  const n = t.options.length === 1, r = t.options[0]._zod.run;
  e._zod.parse = (o, s) => {
    if (n)
      return r(o, s);
    let i = !1;
    const a = [];
    for (const c of t.options) {
      const u = c._zod.run({
        value: o.value,
        issues: []
      }, s);
      if (u instanceof Promise)
        a.push(u), i = !0;
      else {
        if (u.issues.length === 0)
          return u;
        a.push(u);
      }
    }
    return i ? Promise.all(a).then((c) => uo(c, o, e, s)) : uo(a, o, e, s);
  };
}), Zf = /* @__PURE__ */ y("$ZodIntersection", (e, t) => {
  re.init(e, t), e._zod.parse = (n, r) => {
    const o = n.value, s = t.left._zod.run({ value: o, issues: [] }, r), i = t.right._zod.run({ value: o, issues: [] }, r);
    return s instanceof Promise || i instanceof Promise ? Promise.all([s, i]).then(([c, u]) => fo(n, c, u)) : fo(n, s, i);
  };
});
function nr(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (Et(e) && Et(t)) {
    const n = Object.keys(t), r = Object.keys(e).filter((s) => n.indexOf(s) !== -1), o = { ...e, ...t };
    for (const s of r) {
      const i = nr(e[s], t[s]);
      if (!i.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...i.mergeErrorPath]
        };
      o[s] = i.data;
    }
    return { valid: !0, data: o };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const n = [];
    for (let r = 0; r < e.length; r++) {
      const o = e[r], s = t[r], i = nr(o, s);
      if (!i.valid)
        return {
          valid: !1,
          mergeErrorPath: [r, ...i.mergeErrorPath]
        };
      n.push(i.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function fo(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  let o;
  for (const a of t.issues)
    if (a.code === "unrecognized_keys") {
      o ?? (o = a);
      for (const c of a.keys)
        r.has(c) || r.set(c, {}), r.get(c).l = !0;
    } else
      e.issues.push(a);
  for (const a of n.issues)
    if (a.code === "unrecognized_keys")
      for (const c of a.keys)
        r.has(c) || r.set(c, {}), r.get(c).r = !0;
    else
      e.issues.push(a);
  const s = [...r].filter(([, a]) => a.l && a.r).map(([a]) => a);
  if (s.length && o && e.issues.push({ ...o, keys: s }), yt(e))
    return e;
  const i = nr(t.value, n.value);
  if (!i.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(i.mergeErrorPath)}`);
  return e.value = i.data, e;
}
const xf = /* @__PURE__ */ y("$ZodTuple", (e, t) => {
  re.init(e, t);
  const n = t.items;
  e._zod.parse = (r, o) => {
    const s = r.value;
    if (!Array.isArray(s))
      return r.issues.push({
        input: s,
        inst: e,
        expected: "tuple",
        code: "invalid_type"
      }), r;
    r.value = [];
    const i = [], a = [...n].reverse().findIndex((f) => f._zod.optin !== "optional"), c = a === -1 ? 0 : n.length - a;
    if (!t.rest) {
      const f = s.length > n.length, l = s.length < c - 1;
      if (f || l)
        return r.issues.push({
          ...f ? { code: "too_big", maximum: n.length, inclusive: !0 } : { code: "too_small", minimum: n.length },
          input: s,
          inst: e,
          origin: "array"
        }), r;
    }
    let u = -1;
    for (const f of n) {
      if (u++, u >= s.length && u >= c)
        continue;
      const l = f._zod.run({
        value: s[u],
        issues: []
      }, o);
      l instanceof Promise ? i.push(l.then((h) => Kt(h, r, u))) : Kt(l, r, u);
    }
    if (t.rest) {
      const f = s.slice(n.length);
      for (const l of f) {
        u++;
        const h = t.rest._zod.run({
          value: l,
          issues: []
        }, o);
        h instanceof Promise ? i.push(h.then((d) => Kt(d, r, u))) : Kt(h, r, u);
      }
    }
    return i.length ? Promise.all(i).then(() => r) : r;
  };
});
function Kt(e, t, n) {
  e.issues.length && t.issues.push(...et(n, e.issues)), t.value[n] = e.value;
}
const Rf = /* @__PURE__ */ y("$ZodRecord", (e, t) => {
  re.init(e, t), e._zod.parse = (n, r) => {
    const o = n.value;
    if (!Et(o))
      return n.issues.push({
        expected: "record",
        code: "invalid_type",
        input: o,
        inst: e
      }), n;
    const s = [], i = t.keyType._zod.values;
    if (i) {
      n.value = {};
      const a = /* @__PURE__ */ new Set();
      for (const u of i)
        if (typeof u == "string" || typeof u == "number" || typeof u == "symbol") {
          a.add(typeof u == "number" ? u.toString() : u);
          const f = t.valueType._zod.run({ value: o[u], issues: [] }, r);
          f instanceof Promise ? s.push(f.then((l) => {
            l.issues.length && n.issues.push(...et(u, l.issues)), n.value[u] = l.value;
          })) : (f.issues.length && n.issues.push(...et(u, f.issues)), n.value[u] = f.value);
        }
      let c;
      for (const u in o)
        a.has(u) || (c = c ?? [], c.push(u));
      c && c.length > 0 && n.issues.push({
        code: "unrecognized_keys",
        input: o,
        inst: e,
        keys: c
      });
    } else {
      n.value = {};
      for (const a of Reflect.ownKeys(o)) {
        if (a === "__proto__")
          continue;
        let c = t.keyType._zod.run({ value: a, issues: [] }, r);
        if (c instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (typeof a == "string" && Ps.test(a) && c.issues.length) {
          const l = t.keyType._zod.run({ value: Number(a), issues: [] }, r);
          if (l instanceof Promise)
            throw new Error("Async schemas not supported in object keys currently");
          l.issues.length === 0 && (c = l);
        }
        if (c.issues.length) {
          t.mode === "loose" ? n.value[a] = o[a] : n.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: c.issues.map((l) => Ye(l, r, Me())),
            input: a,
            path: [a],
            inst: e
          });
          continue;
        }
        const f = t.valueType._zod.run({ value: o[a], issues: [] }, r);
        f instanceof Promise ? s.push(f.then((l) => {
          l.issues.length && n.issues.push(...et(a, l.issues)), n.value[c.value] = l.value;
        })) : (f.issues.length && n.issues.push(...et(a, f.issues)), n.value[c.value] = f.value);
      }
    }
    return s.length ? Promise.all(s).then(() => n) : n;
  };
}), Pf = /* @__PURE__ */ y("$ZodMap", (e, t) => {
  re.init(e, t), e._zod.parse = (n, r) => {
    const o = n.value;
    if (!(o instanceof Map))
      return n.issues.push({
        expected: "map",
        code: "invalid_type",
        input: o,
        inst: e
      }), n;
    const s = [];
    n.value = /* @__PURE__ */ new Map();
    for (const [i, a] of o) {
      const c = t.keyType._zod.run({ value: i, issues: [] }, r), u = t.valueType._zod.run({ value: a, issues: [] }, r);
      c instanceof Promise || u instanceof Promise ? s.push(Promise.all([c, u]).then(([f, l]) => {
        lo(f, l, n, i, o, e, r);
      })) : lo(c, u, n, i, o, e, r);
    }
    return s.length ? Promise.all(s).then(() => n) : n;
  };
});
function lo(e, t, n, r, o, s, i) {
  e.issues.length && (tr.has(typeof r) ? n.issues.push(...et(r, e.issues)) : n.issues.push({
    code: "invalid_key",
    origin: "map",
    input: o,
    inst: s,
    issues: e.issues.map((a) => Ye(a, i, Me()))
  })), t.issues.length && (tr.has(typeof r) ? n.issues.push(...et(r, t.issues)) : n.issues.push({
    origin: "map",
    code: "invalid_element",
    input: o,
    inst: s,
    key: r,
    issues: t.issues.map((a) => Ye(a, i, Me()))
  })), n.value.set(e.value, t.value);
}
const Ff = /* @__PURE__ */ y("$ZodEnum", (e, t) => {
  re.init(e, t);
  const n = Es(t.entries), r = new Set(n);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${n.filter((o) => tr.has(typeof o)).map((o) => typeof o == "string" ? Ot(o) : o.toString()).join("|")})$`), e._zod.parse = (o, s) => {
    const i = o.value;
    return r.has(i) || o.issues.push({
      code: "invalid_value",
      values: n,
      input: i,
      inst: e
    }), o;
  };
}), Df = /* @__PURE__ */ y("$ZodLiteral", (e, t) => {
  if (re.init(e, t), t.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const n = new Set(t.values);
  e._zod.values = n, e._zod.pattern = new RegExp(`^(${t.values.map((r) => typeof r == "string" ? Ot(r) : r ? Ot(r.toString()) : String(r)).join("|")})$`), e._zod.parse = (r, o) => {
    const s = r.value;
    return n.has(s) || r.issues.push({
      code: "invalid_value",
      values: t.values,
      input: s,
      inst: e
    }), r;
  };
}), Uf = /* @__PURE__ */ y("$ZodTransform", (e, t) => {
  re.init(e, t), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      throw new $s(e.constructor.name);
    const o = t.transform(n.value, n);
    if (r.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((i) => (n.value = i, n));
    if (o instanceof Promise)
      throw new kt();
    return n.value = o, n;
  };
});
function ho(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const Vs = /* @__PURE__ */ y("$ZodOptional", (e, t) => {
  re.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", ee(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), ee(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${zr(n.source)})?$`) : void 0;
  }), e._zod.parse = (n, r) => {
    if (t.innerType._zod.optin === "optional") {
      const o = t.innerType._zod.run(n, r);
      return o instanceof Promise ? o.then((s) => ho(s, n.value)) : ho(o, n.value);
    }
    return n.value === void 0 ? n : t.innerType._zod.run(n, r);
  };
}), Mf = /* @__PURE__ */ y("$ZodExactOptional", (e, t) => {
  Vs.init(e, t), ee(e._zod, "values", () => t.innerType._zod.values), ee(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (n, r) => t.innerType._zod.run(n, r);
}), Lf = /* @__PURE__ */ y("$ZodNullable", (e, t) => {
  re.init(e, t), ee(e._zod, "optin", () => t.innerType._zod.optin), ee(e._zod, "optout", () => t.innerType._zod.optout), ee(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${zr(n.source)}|null)$`) : void 0;
  }), ee(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (n, r) => n.value === null ? n : t.innerType._zod.run(n, r);
}), jf = /* @__PURE__ */ y("$ZodDefault", (e, t) => {
  re.init(e, t), e._zod.optin = "optional", ee(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    if (n.value === void 0)
      return n.value = t.defaultValue, n;
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then((s) => po(s, t)) : po(o, t);
  };
});
function po(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const Bf = /* @__PURE__ */ y("$ZodPrefault", (e, t) => {
  re.init(e, t), e._zod.optin = "optional", ee(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => (r.direction === "backward" || n.value === void 0 && (n.value = t.defaultValue), t.innerType._zod.run(n, r));
}), Vf = /* @__PURE__ */ y("$ZodNonOptional", (e, t) => {
  re.init(e, t), ee(e._zod, "values", () => {
    const n = t.innerType._zod.values;
    return n ? new Set([...n].filter((r) => r !== void 0)) : void 0;
  }), e._zod.parse = (n, r) => {
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then((s) => mo(s, e)) : mo(o, e);
  };
});
function mo(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const Jf = /* @__PURE__ */ y("$ZodCatch", (e, t) => {
  re.init(e, t), ee(e._zod, "optin", () => t.innerType._zod.optin), ee(e._zod, "optout", () => t.innerType._zod.optout), ee(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then((s) => (n.value = s.value, s.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: s.issues.map((i) => Ye(i, r, Me()))
      },
      input: n.value
    }), n.issues = []), n)) : (n.value = o.value, o.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: o.issues.map((s) => Ye(s, r, Me()))
      },
      input: n.value
    }), n.issues = []), n);
  };
}), qf = /* @__PURE__ */ y("$ZodPipe", (e, t) => {
  re.init(e, t), ee(e._zod, "values", () => t.in._zod.values), ee(e._zod, "optin", () => t.in._zod.optin), ee(e._zod, "optout", () => t.out._zod.optout), ee(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (n, r) => {
    if (r.direction === "backward") {
      const s = t.out._zod.run(n, r);
      return s instanceof Promise ? s.then((i) => Yt(i, t.in, r)) : Yt(s, t.in, r);
    }
    const o = t.in._zod.run(n, r);
    return o instanceof Promise ? o.then((s) => Yt(s, t.out, r)) : Yt(o, t.out, r);
  };
});
function Yt(e, t, n) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, n);
}
const Wf = /* @__PURE__ */ y("$ZodReadonly", (e, t) => {
  re.init(e, t), ee(e._zod, "propValues", () => t.innerType._zod.propValues), ee(e._zod, "values", () => t.innerType._zod.values), ee(e._zod, "optin", () => t.innerType?._zod?.optin), ee(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then(go) : go(o);
  };
});
function go(e) {
  return e.value = Object.freeze(e.value), e;
}
const Hf = /* @__PURE__ */ y("$ZodLazy", (e, t) => {
  re.init(e, t), ee(e._zod, "innerType", () => t.getter()), ee(e._zod, "pattern", () => e._zod.innerType?._zod?.pattern), ee(e._zod, "propValues", () => e._zod.innerType?._zod?.propValues), ee(e._zod, "optin", () => e._zod.innerType?._zod?.optin ?? void 0), ee(e._zod, "optout", () => e._zod.innerType?._zod?.optout ?? void 0), e._zod.parse = (n, r) => e._zod.innerType._zod.run(n, r);
}), Kf = /* @__PURE__ */ y("$ZodCustom", (e, t) => {
  ze.init(e, t), re.init(e, t), e._zod.parse = (n, r) => n, e._zod.check = (n) => {
    const r = n.value, o = t.fn(r);
    if (o instanceof Promise)
      return o.then((s) => _o(s, n, r, e));
    _o(o, n, r, e);
  };
});
function _o(e, t, n, r) {
  if (!e) {
    const o = {
      code: "custom",
      input: n,
      inst: r,
      // incorporates params.error into issue reporting
      path: [...r._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !r._zod.def.abort
      // params: inst._zod.def.params,
    };
    r._zod.def.params && (o.params = r._zod.def.params), t.issues.push(Lt(o));
  }
}
const Yf = () => {
  const e = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" }
  };
  function t(o) {
    return e[o] ?? null;
  }
  const n = {
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
  }, r = {
    // Compatibility: "nan" -> "NaN" for display
    nan: "NaN"
    // All other type names omitted - they fall back to raw values via ?? operator
  };
  return (o) => {
    switch (o.code) {
      case "invalid_type": {
        const s = r[o.expected] ?? o.expected, i = Hc(o.input), a = r[i] ?? i;
        return `Invalid input: expected ${s}, received ${a}`;
      }
      case "invalid_value":
        return o.values.length === 1 ? `Invalid input: expected ${Cs(o.values[0])}` : `Invalid option: expected one of ${oo(o.values, "|")}`;
      case "too_big": {
        const s = o.inclusive ? "<=" : "<", i = t(o.origin);
        return i ? `Too big: expected ${o.origin ?? "value"} to have ${s}${o.maximum.toString()} ${i.unit ?? "elements"}` : `Too big: expected ${o.origin ?? "value"} to be ${s}${o.maximum.toString()}`;
      }
      case "too_small": {
        const s = o.inclusive ? ">=" : ">", i = t(o.origin);
        return i ? `Too small: expected ${o.origin} to have ${s}${o.minimum.toString()} ${i.unit}` : `Too small: expected ${o.origin} to be ${s}${o.minimum.toString()}`;
      }
      case "invalid_format": {
        const s = o;
        return s.format === "starts_with" ? `Invalid string: must start with "${s.prefix}"` : s.format === "ends_with" ? `Invalid string: must end with "${s.suffix}"` : s.format === "includes" ? `Invalid string: must include "${s.includes}"` : s.format === "regex" ? `Invalid string: must match pattern ${s.pattern}` : `Invalid ${n[s.format] ?? o.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${o.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${o.keys.length > 1 ? "s" : ""}: ${oo(o.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${o.origin}`;
      case "invalid_union":
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${o.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function Xf() {
  return {
    localeError: Yf()
  };
}
var yo;
let Gf = class {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...n) {
    const r = n[0];
    return this._map.set(t, r), r && typeof r == "object" && "id" in r && this._idmap.set(r.id, t), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const n = this._map.get(t);
    return n && typeof n == "object" && "id" in n && this._idmap.delete(n.id), this._map.delete(t), this;
  }
  get(t) {
    const n = t._zod.parent;
    if (n) {
      const r = { ...this.get(n) ?? {} };
      delete r.id;
      const o = { ...r, ...this._map.get(t) };
      return Object.keys(o).length ? o : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
};
function Js() {
  return new Gf();
}
(yo = globalThis).__zod_globalRegistry ?? (yo.__zod_globalRegistry = Js());
const vt = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function Qf(e, t) {
  return new e({
    type: "string",
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function el(e, t) {
  return new e({
    type: "string",
    coerce: !0,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function tl(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function vo(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function nl(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function rl(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ol(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function sl(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function il(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function al(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function cl(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ul(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function fl(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ll(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function hl(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function dl(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function pl(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ml(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function gl(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function _l(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function yl(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function vl(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function bl(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function wl(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function kl(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function $l(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function El(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ol(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function zl(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Cl(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Tl(e, t) {
  return new e({
    type: "boolean",
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Al(e, t) {
  return new e({
    type: "undefined",
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Sl(e, t) {
  return new e({
    type: "null",
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Nl(e) {
  return new e({
    type: "any"
  });
}
// @__NO_SIDE_EFFECTS__
function Il(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function Zl(e, t) {
  return new e({
    type: "never",
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function xl(e, t) {
  return new e({
    type: "date",
    coerce: !0,
    ...x(t)
  });
}
// @__NO_SIDE_EFFECTS__
function rr(e, t) {
  return new Ds({
    check: "less_than",
    ...x(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Dt(e, t) {
  return new Ds({
    check: "less_than",
    ...x(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function or(e, t) {
  return new Us({
    check: "greater_than",
    ...x(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Ut(e, t) {
  return new Us({
    check: "greater_than",
    ...x(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function sr(e, t) {
  return new Iu({
    check: "multiple_of",
    ...x(t),
    value: e
  });
}
// @__NO_SIDE_EFFECTS__
function qs(e, t) {
  return new xu({
    check: "max_size",
    ...x(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function ir(e, t) {
  return new Ru({
    check: "min_size",
    ...x(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Ws(e, t) {
  return new Pu({
    check: "size_equals",
    ...x(t),
    size: e
  });
}
// @__NO_SIDE_EFFECTS__
function Ir(e, t) {
  return new Fu({
    check: "max_length",
    ...x(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function jt(e, t) {
  return new Du({
    check: "min_length",
    ...x(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Zr(e, t) {
  return new Uu({
    check: "length_equals",
    ...x(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function Hs(e, t) {
  return new Mu({
    check: "string_format",
    format: "regex",
    ...x(t),
    pattern: e
  });
}
// @__NO_SIDE_EFFECTS__
function Ks(e) {
  return new Lu({
    check: "string_format",
    format: "lowercase",
    ...x(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Ys(e) {
  return new ju({
    check: "string_format",
    format: "uppercase",
    ...x(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Xs(e, t) {
  return new Bu({
    check: "string_format",
    format: "includes",
    ...x(t),
    includes: e
  });
}
// @__NO_SIDE_EFFECTS__
function Gs(e, t) {
  return new Vu({
    check: "string_format",
    format: "starts_with",
    ...x(t),
    prefix: e
  });
}
// @__NO_SIDE_EFFECTS__
function Qs(e, t) {
  return new Ju({
    check: "string_format",
    format: "ends_with",
    ...x(t),
    suffix: e
  });
}
// @__NO_SIDE_EFFECTS__
function gt(e) {
  return new qu({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function ei(e) {
  return /* @__PURE__ */ gt((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function ti() {
  return /* @__PURE__ */ gt((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function ni() {
  return /* @__PURE__ */ gt((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function ri() {
  return /* @__PURE__ */ gt((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function oi() {
  return /* @__PURE__ */ gt((e) => Fc(e));
}
// @__NO_SIDE_EFFECTS__
function Rl(e, t, n) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...x(n)
  });
}
// @__NO_SIDE_EFFECTS__
function Pl(e, t, n) {
  const r = x(n);
  return r.abort ?? (r.abort = !0), new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...r
  });
}
// @__NO_SIDE_EFFECTS__
function Fl(e, t, n) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...x(n)
  });
}
// @__NO_SIDE_EFFECTS__
function Dl(e) {
  const t = /* @__PURE__ */ Ul((n) => (n.addIssue = (r) => {
    if (typeof r == "string")
      n.issues.push(Lt(r, n.value, t._zod.def));
    else {
      const o = r;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = n.value), o.inst ?? (o.inst = t), o.continue ?? (o.continue = !t._zod.def.abort), n.issues.push(Lt(o));
    }
  }, e(n.value, n)));
  return t;
}
// @__NO_SIDE_EFFECTS__
function Ul(e, t) {
  const n = new ze({
    check: "custom",
    ...x(t)
  });
  return n._zod.check = e, n;
}
function si(e) {
  let t = e?.target ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: e?.metadata ?? vt,
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
function me(e, t, n = { path: [], schemaPath: [] }) {
  var r;
  const o = e._zod.def, s = t.seen.get(e);
  if (s)
    return s.count++, n.schemaPath.includes(e) && (s.cycle = n.path), s.schema;
  const i = { schema: {}, count: 1, cycle: void 0, path: n.path };
  t.seen.set(e, i);
  const a = e._zod.toJSONSchema?.();
  if (a)
    i.schema = a;
  else {
    const f = {
      ...n,
      schemaPath: [...n.schemaPath, e],
      path: n.path
    };
    if (e._zod.processJSONSchema)
      e._zod.processJSONSchema(t, i.schema, f);
    else {
      const h = i.schema, d = t.processors[o.type];
      if (!d)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${o.type}`);
      d(e, t, h, f);
    }
    const l = e._zod.parent;
    l && (i.ref || (i.ref = l), me(l, t, f), t.seen.get(l).isParent = !0);
  }
  const c = t.metadataRegistry.get(e);
  return c && Object.assign(i.schema, c), t.io === "input" && Ae(e) && (delete i.schema.examples, delete i.schema.default), t.io === "input" && i.schema._prefault && ((r = i.schema).default ?? (r.default = i.schema._prefault)), delete i.schema._prefault, t.seen.get(e).schema;
}
function ii(e, t) {
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = /* @__PURE__ */ new Map();
  for (const i of e.seen.entries()) {
    const a = e.metadataRegistry.get(i[0])?.id;
    if (a) {
      const c = r.get(a);
      if (c && c !== i[0])
        throw new Error(`Duplicate schema id "${a}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      r.set(a, i[0]);
    }
  }
  const o = (i) => {
    const a = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const l = e.external.registry.get(i[0])?.id, h = e.external.uri ?? ((g) => g);
      if (l)
        return { ref: h(l) };
      const d = i[1].defId ?? i[1].schema.id ?? `schema${e.counter++}`;
      return i[1].defId = d, { defId: d, ref: `${h("__shared")}#/${a}/${d}` };
    }
    if (i[1] === n)
      return { ref: "#" };
    const u = `#/${a}/`, f = i[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: f, ref: u + f };
  }, s = (i) => {
    if (i[1].schema.$ref)
      return;
    const a = i[1], { ref: c, defId: u } = o(i);
    a.def = { ...a.schema }, u && (a.defId = u);
    const f = a.schema;
    for (const l in f)
      delete f[l];
    f.$ref = c;
  };
  if (e.cycles === "throw")
    for (const i of e.seen.entries()) {
      const a = i[1];
      if (a.cycle)
        throw new Error(`Cycle detected: #/${a.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const i of e.seen.entries()) {
    const a = i[1];
    if (t === i[0]) {
      s(i);
      continue;
    }
    if (e.external) {
      const u = e.external.registry.get(i[0])?.id;
      if (t !== i[0] && u) {
        s(i);
        continue;
      }
    }
    if (e.metadataRegistry.get(i[0])?.id) {
      s(i);
      continue;
    }
    if (a.cycle) {
      s(i);
      continue;
    }
    if (a.count > 1 && e.reused === "ref") {
      s(i);
      continue;
    }
  }
}
function ai(e, t) {
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = (i) => {
    const a = e.seen.get(i);
    if (a.ref === null)
      return;
    const c = a.def ?? a.schema, u = { ...c }, f = a.ref;
    if (a.ref = null, f) {
      r(f);
      const h = e.seen.get(f), d = h.schema;
      if (d.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (c.allOf = c.allOf ?? [], c.allOf.push(d)) : Object.assign(c, d), Object.assign(c, u), i._zod.parent === f)
        for (const _ in c)
          _ === "$ref" || _ === "allOf" || _ in u || delete c[_];
      if (d.$ref && h.def)
        for (const _ in c)
          _ === "$ref" || _ === "allOf" || _ in h.def && JSON.stringify(c[_]) === JSON.stringify(h.def[_]) && delete c[_];
    }
    const l = i._zod.parent;
    if (l && l !== f) {
      r(l);
      const h = e.seen.get(l);
      if (h?.schema.$ref && (c.$ref = h.schema.$ref, h.def))
        for (const d in c)
          d === "$ref" || d === "allOf" || d in h.def && JSON.stringify(c[d]) === JSON.stringify(h.def[d]) && delete c[d];
    }
    e.override({
      zodSchema: i,
      jsonSchema: c,
      path: a.path ?? []
    });
  };
  for (const i of [...e.seen.entries()].reverse())
    r(i[0]);
  const o = {};
  if (e.target === "draft-2020-12" ? o.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? o.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? o.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
    const i = e.external.registry.get(t)?.id;
    if (!i)
      throw new Error("Schema is missing an `id` property");
    o.$id = e.external.uri(i);
  }
  Object.assign(o, n.def ?? n.schema);
  const s = e.external?.defs ?? {};
  for (const i of e.seen.entries()) {
    const a = i[1];
    a.def && a.defId && (s[a.defId] = a.def);
  }
  e.external || Object.keys(s).length > 0 && (e.target === "draft-2020-12" ? o.$defs = s : o.definitions = s);
  try {
    const i = JSON.parse(JSON.stringify(o));
    return Object.defineProperty(i, "~standard", {
      value: {
        ...t["~standard"],
        jsonSchema: {
          input: pn(t, "input", e.processors),
          output: pn(t, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), i;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function Ae(e, t) {
  const n = t ?? { seen: /* @__PURE__ */ new Set() };
  if (n.seen.has(e))
    return !1;
  n.seen.add(e);
  const r = e._zod.def;
  if (r.type === "transform")
    return !0;
  if (r.type === "array")
    return Ae(r.element, n);
  if (r.type === "set")
    return Ae(r.valueType, n);
  if (r.type === "lazy")
    return Ae(r.getter(), n);
  if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault")
    return Ae(r.innerType, n);
  if (r.type === "intersection")
    return Ae(r.left, n) || Ae(r.right, n);
  if (r.type === "record" || r.type === "map")
    return Ae(r.keyType, n) || Ae(r.valueType, n);
  if (r.type === "pipe")
    return Ae(r.in, n) || Ae(r.out, n);
  if (r.type === "object") {
    for (const o in r.shape)
      if (Ae(r.shape[o], n))
        return !0;
    return !1;
  }
  if (r.type === "union") {
    for (const o of r.options)
      if (Ae(o, n))
        return !0;
    return !1;
  }
  if (r.type === "tuple") {
    for (const o of r.items)
      if (Ae(o, n))
        return !0;
    return !!(r.rest && Ae(r.rest, n));
  }
  return !1;
}
const Ml = (e, t = {}) => (n) => {
  const r = si({ ...n, processors: t });
  return me(e, r), ii(r, e), ai(r, e);
}, pn = (e, t, n = {}) => (r) => {
  const { libraryOptions: o, target: s } = r ?? {}, i = si({ ...o ?? {}, target: s, io: t, processors: n });
  return me(e, i), ii(i, e), ai(i, e);
}, Ll = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, jl = (e, t, n, r) => {
  const o = n;
  o.type = "string";
  const { minimum: s, maximum: i, format: a, patterns: c, contentEncoding: u } = e._zod.bag;
  if (typeof s == "number" && (o.minLength = s), typeof i == "number" && (o.maxLength = i), a && (o.format = Ll[a] ?? a, o.format === "" && delete o.format, a === "time" && delete o.format), u && (o.contentEncoding = u), c && c.size > 0) {
    const f = [...c];
    f.length === 1 ? o.pattern = f[0].source : f.length > 1 && (o.allOf = [
      ...f.map((l) => ({
        ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: l.source
      }))
    ]);
  }
}, Bl = (e, t, n, r) => {
  const o = n, { minimum: s, maximum: i, format: a, multipleOf: c, exclusiveMaximum: u, exclusiveMinimum: f } = e._zod.bag;
  typeof a == "string" && a.includes("int") ? o.type = "integer" : o.type = "number", typeof f == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (o.minimum = f, o.exclusiveMinimum = !0) : o.exclusiveMinimum = f), typeof s == "number" && (o.minimum = s, typeof f == "number" && t.target !== "draft-04" && (f >= s ? delete o.minimum : delete o.exclusiveMinimum)), typeof u == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (o.maximum = u, o.exclusiveMaximum = !0) : o.exclusiveMaximum = u), typeof i == "number" && (o.maximum = i, typeof u == "number" && t.target !== "draft-04" && (u <= i ? delete o.maximum : delete o.exclusiveMaximum)), typeof c == "number" && (o.multipleOf = c);
}, Vl = (e, t, n, r) => {
  n.type = "boolean";
}, Jl = (e, t, n, r) => {
  t.target === "openapi-3.0" ? (n.type = "string", n.nullable = !0, n.enum = [null]) : n.type = "null";
}, ql = (e, t, n, r) => {
  if (t.unrepresentable === "throw")
    throw new Error("Undefined cannot be represented in JSON Schema");
}, Wl = (e, t, n, r) => {
  n.not = {};
}, Hl = (e, t, n, r) => {
}, Kl = (e, t, n, r) => {
}, Yl = (e, t, n, r) => {
  if (t.unrepresentable === "throw")
    throw new Error("Date cannot be represented in JSON Schema");
}, Xl = (e, t, n, r) => {
  const o = e._zod.def, s = Es(o.entries);
  s.every((i) => typeof i == "number") && (n.type = "number"), s.every((i) => typeof i == "string") && (n.type = "string"), n.enum = s;
}, Gl = (e, t, n, r) => {
  const o = e._zod.def, s = [];
  for (const i of o.values)
    if (i === void 0) {
      if (t.unrepresentable === "throw")
        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if (typeof i == "bigint") {
      if (t.unrepresentable === "throw")
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      s.push(Number(i));
    } else
      s.push(i);
  if (s.length !== 0) if (s.length === 1) {
    const i = s[0];
    n.type = i === null ? "null" : typeof i, t.target === "draft-04" || t.target === "openapi-3.0" ? n.enum = [i] : n.const = i;
  } else
    s.every((i) => typeof i == "number") && (n.type = "number"), s.every((i) => typeof i == "string") && (n.type = "string"), s.every((i) => typeof i == "boolean") && (n.type = "boolean"), s.every((i) => i === null) && (n.type = "null"), n.enum = s;
}, Ql = (e, t, n, r) => {
  if (t.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, eh = (e, t, n, r) => {
  if (t.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, th = (e, t, n, r) => {
  if (t.unrepresentable === "throw")
    throw new Error("Map cannot be represented in JSON Schema");
}, nh = (e, t, n, r) => {
  const o = n, s = e._zod.def, { minimum: i, maximum: a } = e._zod.bag;
  typeof i == "number" && (o.minItems = i), typeof a == "number" && (o.maxItems = a), o.type = "array", o.items = me(s.element, t, { ...r, path: [...r.path, "items"] });
}, rh = (e, t, n, r) => {
  const o = n, s = e._zod.def;
  o.type = "object", o.properties = {};
  const i = s.shape;
  for (const u in i)
    o.properties[u] = me(i[u], t, {
      ...r,
      path: [...r.path, "properties", u]
    });
  const a = new Set(Object.keys(i)), c = new Set([...a].filter((u) => {
    const f = s.shape[u]._zod;
    return t.io === "input" ? f.optin === void 0 : f.optout === void 0;
  }));
  c.size > 0 && (o.required = Array.from(c)), s.catchall?._zod.def.type === "never" ? o.additionalProperties = !1 : s.catchall ? s.catchall && (o.additionalProperties = me(s.catchall, t, {
    ...r,
    path: [...r.path, "additionalProperties"]
  })) : t.io === "output" && (o.additionalProperties = !1);
}, oh = (e, t, n, r) => {
  const o = e._zod.def, s = o.inclusive === !1, i = o.options.map((a, c) => me(a, t, {
    ...r,
    path: [...r.path, s ? "oneOf" : "anyOf", c]
  }));
  s ? n.oneOf = i : n.anyOf = i;
}, sh = (e, t, n, r) => {
  const o = e._zod.def, s = me(o.left, t, {
    ...r,
    path: [...r.path, "allOf", 0]
  }), i = me(o.right, t, {
    ...r,
    path: [...r.path, "allOf", 1]
  }), a = (u) => "allOf" in u && Object.keys(u).length === 1, c = [
    ...a(s) ? s.allOf : [s],
    ...a(i) ? i.allOf : [i]
  ];
  n.allOf = c;
}, ih = (e, t, n, r) => {
  const o = n, s = e._zod.def;
  o.type = "array";
  const i = t.target === "draft-2020-12" ? "prefixItems" : "items", a = t.target === "draft-2020-12" || t.target === "openapi-3.0" ? "items" : "additionalItems", c = s.items.map((h, d) => me(h, t, {
    ...r,
    path: [...r.path, i, d]
  })), u = s.rest ? me(s.rest, t, {
    ...r,
    path: [...r.path, a, ...t.target === "openapi-3.0" ? [s.items.length] : []]
  }) : null;
  t.target === "draft-2020-12" ? (o.prefixItems = c, u && (o.items = u)) : t.target === "openapi-3.0" ? (o.items = {
    anyOf: c
  }, u && o.items.anyOf.push(u), o.minItems = c.length, u || (o.maxItems = c.length)) : (o.items = c, u && (o.additionalItems = u));
  const { minimum: f, maximum: l } = e._zod.bag;
  typeof f == "number" && (o.minItems = f), typeof l == "number" && (o.maxItems = l);
}, ah = (e, t, n, r) => {
  const o = n, s = e._zod.def;
  o.type = "object";
  const i = s.keyType, c = i._zod.bag?.patterns;
  if (s.mode === "loose" && c && c.size > 0) {
    const f = me(s.valueType, t, {
      ...r,
      path: [...r.path, "patternProperties", "*"]
    });
    o.patternProperties = {};
    for (const l of c)
      o.patternProperties[l.source] = f;
  } else
    (t.target === "draft-07" || t.target === "draft-2020-12") && (o.propertyNames = me(s.keyType, t, {
      ...r,
      path: [...r.path, "propertyNames"]
    })), o.additionalProperties = me(s.valueType, t, {
      ...r,
      path: [...r.path, "additionalProperties"]
    });
  const u = i._zod.values;
  if (u) {
    const f = [...u].filter((l) => typeof l == "string" || typeof l == "number");
    f.length > 0 && (o.required = f);
  }
}, ch = (e, t, n, r) => {
  const o = e._zod.def, s = me(o.innerType, t, r), i = t.seen.get(e);
  t.target === "openapi-3.0" ? (i.ref = o.innerType, n.nullable = !0) : n.anyOf = [s, { type: "null" }];
}, uh = (e, t, n, r) => {
  const o = e._zod.def;
  me(o.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = o.innerType;
}, fh = (e, t, n, r) => {
  const o = e._zod.def;
  me(o.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = o.innerType, n.default = JSON.parse(JSON.stringify(o.defaultValue));
}, lh = (e, t, n, r) => {
  const o = e._zod.def;
  me(o.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = o.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
}, hh = (e, t, n, r) => {
  const o = e._zod.def;
  me(o.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = o.innerType;
  let i;
  try {
    i = o.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  n.default = i;
}, dh = (e, t, n, r) => {
  const o = e._zod.def, s = t.io === "input" ? o.in._zod.def.type === "transform" ? o.out : o.in : o.out;
  me(s, t, r);
  const i = t.seen.get(e);
  i.ref = s;
}, ph = (e, t, n, r) => {
  const o = e._zod.def;
  me(o.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = o.innerType, n.readOnly = !0;
}, ci = (e, t, n, r) => {
  const o = e._zod.def;
  me(o.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = o.innerType;
}, mh = (e, t, n, r) => {
  const o = e._zod.innerType;
  me(o, t, r);
  const s = t.seen.get(e);
  s.ref = o;
}, ui = /* @__PURE__ */ y("ZodISODateTime", (e, t) => {
  af.init(e, t), de.init(e, t);
});
function gh(e) {
  return /* @__PURE__ */ kl(ui, e);
}
const fi = /* @__PURE__ */ y("ZodISODate", (e, t) => {
  cf.init(e, t), de.init(e, t);
});
function _h(e) {
  return /* @__PURE__ */ $l(fi, e);
}
const li = /* @__PURE__ */ y("ZodISOTime", (e, t) => {
  uf.init(e, t), de.init(e, t);
});
function yh(e) {
  return /* @__PURE__ */ El(li, e);
}
const hi = /* @__PURE__ */ y("ZodISODuration", (e, t) => {
  ff.init(e, t), de.init(e, t);
});
function vh(e) {
  return /* @__PURE__ */ Ol(hi, e);
}
const di = (e, t) => {
  As.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (n) => Is(e, n)
      // enumerable: false,
    },
    flatten: {
      value: (n) => Ns(e, n)
      // enumerable: false,
    },
    addIssue: {
      value: (n) => {
        e.issues.push(n), e.message = JSON.stringify(e.issues, er, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (n) => {
        e.issues.push(...n), e.message = JSON.stringify(e.issues, er, 2);
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
}, bh = y("ZodError", di), Le = y("ZodError", di, {
  Parent: Error
}), pi = /* @__PURE__ */ Ar(Le), mi = /* @__PURE__ */ Sr(Le), gi = /* @__PURE__ */ kn(Le), _i = /* @__PURE__ */ $n(Le), yi = /* @__PURE__ */ Xc(Le), vi = /* @__PURE__ */ Gc(Le), bi = /* @__PURE__ */ Qc(Le), wi = /* @__PURE__ */ eu(Le), ki = /* @__PURE__ */ tu(Le), $i = /* @__PURE__ */ nu(Le), Ei = /* @__PURE__ */ ru(Le), Oi = /* @__PURE__ */ ou(Le), oe = /* @__PURE__ */ y("ZodType", (e, t) => (re.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: pn(e, "input"),
    output: pn(e, "output")
  }
}), e.toJSONSchema = Ml(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...n) => e.clone(ut(t, {
  checks: [
    ...t.checks ?? [],
    ...n.map((r) => typeof r == "function" ? { _zod: { check: r, def: { check: "custom" }, onattach: [] } } : r)
  ]
}), {
  parent: !0
}), e.with = e.check, e.clone = (n, r) => tt(e, n, r), e.brand = () => e, e.register = ((n, r) => (n.add(e, r), e)), e.parse = (n, r) => pi(e, n, r, { callee: e.parse }), e.safeParse = (n, r) => gi(e, n, r), e.parseAsync = async (n, r) => mi(e, n, r, { callee: e.parseAsync }), e.safeParseAsync = async (n, r) => _i(e, n, r), e.spa = e.safeParseAsync, e.encode = (n, r) => yi(e, n, r), e.decode = (n, r) => vi(e, n, r), e.encodeAsync = async (n, r) => bi(e, n, r), e.decodeAsync = async (n, r) => wi(e, n, r), e.safeEncode = (n, r) => ki(e, n, r), e.safeDecode = (n, r) => $i(e, n, r), e.safeEncodeAsync = async (n, r) => Ei(e, n, r), e.safeDecodeAsync = async (n, r) => Oi(e, n, r), e.refine = (n, r) => e.check(Oa(n, r)), e.superRefine = (n) => e.check(za(n)), e.overwrite = (n) => e.check(/* @__PURE__ */ gt(n)), e.optional = () => fr(e), e.exactOptional = () => ha(e), e.nullable = () => lr(e), e.nullish = () => fr(lr(e)), e.nonoptional = (n) => ya(e, n), e.array = () => Qi(e), e.or = (n) => na([e, n]), e.and = (n) => oa(e, n), e.transform = (n) => gn(e, Fr(n)), e.default = (n) => ma(e, n), e.prefault = (n) => _a(e, n), e.catch = (n) => ba(e, n), e.pipe = (n) => gn(e, n), e.readonly = () => $a(e), e.describe = (n) => {
  const r = e.clone();
  return vt.add(r, { description: n }), r;
}, Object.defineProperty(e, "description", {
  get() {
    return vt.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...n) => {
  if (n.length === 0)
    return vt.get(e);
  const r = e.clone();
  return vt.add(r, n[0]), r;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (n) => n(e), e)), xr = /* @__PURE__ */ y("_ZodString", (e, t) => {
  Nr.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (r, o, s) => jl(e, r, o);
  const n = e._zod.bag;
  e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, e.regex = (...r) => e.check(/* @__PURE__ */ Hs(...r)), e.includes = (...r) => e.check(/* @__PURE__ */ Xs(...r)), e.startsWith = (...r) => e.check(/* @__PURE__ */ Gs(...r)), e.endsWith = (...r) => e.check(/* @__PURE__ */ Qs(...r)), e.min = (...r) => e.check(/* @__PURE__ */ jt(...r)), e.max = (...r) => e.check(/* @__PURE__ */ Ir(...r)), e.length = (...r) => e.check(/* @__PURE__ */ Zr(...r)), e.nonempty = (...r) => e.check(/* @__PURE__ */ jt(1, ...r)), e.lowercase = (r) => e.check(/* @__PURE__ */ Ks(r)), e.uppercase = (r) => e.check(/* @__PURE__ */ Ys(r)), e.trim = () => e.check(/* @__PURE__ */ ti()), e.normalize = (...r) => e.check(/* @__PURE__ */ ei(...r)), e.toLowerCase = () => e.check(/* @__PURE__ */ ni()), e.toUpperCase = () => e.check(/* @__PURE__ */ ri()), e.slugify = () => e.check(/* @__PURE__ */ oi());
}), Rr = /* @__PURE__ */ y("ZodString", (e, t) => {
  Nr.init(e, t), xr.init(e, t), e.email = (n) => e.check(/* @__PURE__ */ tl(zi, n)), e.url = (n) => e.check(/* @__PURE__ */ il(Ci, n)), e.jwt = (n) => e.check(/* @__PURE__ */ wl(ji, n)), e.emoji = (n) => e.check(/* @__PURE__ */ al(Ti, n)), e.guid = (n) => e.check(/* @__PURE__ */ vo(ar, n)), e.uuid = (n) => e.check(/* @__PURE__ */ nl(Rt, n)), e.uuidv4 = (n) => e.check(/* @__PURE__ */ rl(Rt, n)), e.uuidv6 = (n) => e.check(/* @__PURE__ */ ol(Rt, n)), e.uuidv7 = (n) => e.check(/* @__PURE__ */ sl(Rt, n)), e.nanoid = (n) => e.check(/* @__PURE__ */ cl(Ai, n)), e.guid = (n) => e.check(/* @__PURE__ */ vo(ar, n)), e.cuid = (n) => e.check(/* @__PURE__ */ ul(Si, n)), e.cuid2 = (n) => e.check(/* @__PURE__ */ fl(Ni, n)), e.ulid = (n) => e.check(/* @__PURE__ */ ll(Ii, n)), e.base64 = (n) => e.check(/* @__PURE__ */ yl(Ui, n)), e.base64url = (n) => e.check(/* @__PURE__ */ vl(Mi, n)), e.xid = (n) => e.check(/* @__PURE__ */ hl(Zi, n)), e.ksuid = (n) => e.check(/* @__PURE__ */ dl(xi, n)), e.ipv4 = (n) => e.check(/* @__PURE__ */ pl(Ri, n)), e.ipv6 = (n) => e.check(/* @__PURE__ */ ml(Pi, n)), e.cidrv4 = (n) => e.check(/* @__PURE__ */ gl(Fi, n)), e.cidrv6 = (n) => e.check(/* @__PURE__ */ _l(Di, n)), e.e164 = (n) => e.check(/* @__PURE__ */ bl(Li, n)), e.datetime = (n) => e.check(gh(n)), e.date = (n) => e.check(_h(n)), e.time = (n) => e.check(yh(n)), e.duration = (n) => e.check(vh(n));
});
function wh(e) {
  return /* @__PURE__ */ Qf(Rr, e);
}
const de = /* @__PURE__ */ y("ZodStringFormat", (e, t) => {
  he.init(e, t), xr.init(e, t);
}), zi = /* @__PURE__ */ y("ZodEmail", (e, t) => {
  Xu.init(e, t), de.init(e, t);
}), ar = /* @__PURE__ */ y("ZodGUID", (e, t) => {
  Ku.init(e, t), de.init(e, t);
}), Rt = /* @__PURE__ */ y("ZodUUID", (e, t) => {
  Yu.init(e, t), de.init(e, t);
}), Ci = /* @__PURE__ */ y("ZodURL", (e, t) => {
  Gu.init(e, t), de.init(e, t);
}), Ti = /* @__PURE__ */ y("ZodEmoji", (e, t) => {
  Qu.init(e, t), de.init(e, t);
}), Ai = /* @__PURE__ */ y("ZodNanoID", (e, t) => {
  ef.init(e, t), de.init(e, t);
}), Si = /* @__PURE__ */ y("ZodCUID", (e, t) => {
  tf.init(e, t), de.init(e, t);
}), Ni = /* @__PURE__ */ y("ZodCUID2", (e, t) => {
  nf.init(e, t), de.init(e, t);
}), Ii = /* @__PURE__ */ y("ZodULID", (e, t) => {
  rf.init(e, t), de.init(e, t);
}), Zi = /* @__PURE__ */ y("ZodXID", (e, t) => {
  of.init(e, t), de.init(e, t);
}), xi = /* @__PURE__ */ y("ZodKSUID", (e, t) => {
  sf.init(e, t), de.init(e, t);
}), Ri = /* @__PURE__ */ y("ZodIPv4", (e, t) => {
  lf.init(e, t), de.init(e, t);
}), Pi = /* @__PURE__ */ y("ZodIPv6", (e, t) => {
  hf.init(e, t), de.init(e, t);
}), Fi = /* @__PURE__ */ y("ZodCIDRv4", (e, t) => {
  df.init(e, t), de.init(e, t);
}), Di = /* @__PURE__ */ y("ZodCIDRv6", (e, t) => {
  pf.init(e, t), de.init(e, t);
}), Ui = /* @__PURE__ */ y("ZodBase64", (e, t) => {
  mf.init(e, t), de.init(e, t);
}), Mi = /* @__PURE__ */ y("ZodBase64URL", (e, t) => {
  _f.init(e, t), de.init(e, t);
}), Li = /* @__PURE__ */ y("ZodE164", (e, t) => {
  yf.init(e, t), de.init(e, t);
}), ji = /* @__PURE__ */ y("ZodJWT", (e, t) => {
  bf.init(e, t), de.init(e, t);
}), Pr = /* @__PURE__ */ y("ZodNumber", (e, t) => {
  Ls.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (r, o, s) => Bl(e, r, o), e.gt = (r, o) => e.check(/* @__PURE__ */ or(r, o)), e.gte = (r, o) => e.check(/* @__PURE__ */ Ut(r, o)), e.min = (r, o) => e.check(/* @__PURE__ */ Ut(r, o)), e.lt = (r, o) => e.check(/* @__PURE__ */ rr(r, o)), e.lte = (r, o) => e.check(/* @__PURE__ */ Dt(r, o)), e.max = (r, o) => e.check(/* @__PURE__ */ Dt(r, o)), e.int = (r) => e.check(cr(r)), e.safe = (r) => e.check(cr(r)), e.positive = (r) => e.check(/* @__PURE__ */ or(0, r)), e.nonnegative = (r) => e.check(/* @__PURE__ */ Ut(0, r)), e.negative = (r) => e.check(/* @__PURE__ */ rr(0, r)), e.nonpositive = (r) => e.check(/* @__PURE__ */ Dt(0, r)), e.multipleOf = (r, o) => e.check(/* @__PURE__ */ sr(r, o)), e.step = (r, o) => e.check(/* @__PURE__ */ sr(r, o)), e.finite = () => e;
  const n = e._zod.bag;
  e.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? 0.5), e.isFinite = !0, e.format = n.format ?? null;
});
function kh(e) {
  return /* @__PURE__ */ zl(Pr, e);
}
const Bi = /* @__PURE__ */ y("ZodNumberFormat", (e, t) => {
  wf.init(e, t), Pr.init(e, t);
});
function cr(e) {
  return /* @__PURE__ */ Cl(Bi, e);
}
const Vi = /* @__PURE__ */ y("ZodBoolean", (e, t) => {
  kf.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => Vl(e, n, r);
});
function $h(e) {
  return /* @__PURE__ */ Tl(Vi, e);
}
const Ji = /* @__PURE__ */ y("ZodUndefined", (e, t) => {
  $f.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => ql(e, n);
});
function Eh(e) {
  return /* @__PURE__ */ Al(Ji, e);
}
const qi = /* @__PURE__ */ y("ZodNull", (e, t) => {
  Ef.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => Jl(e, n, r);
});
function Oh(e) {
  return /* @__PURE__ */ Sl(qi, e);
}
const Wi = /* @__PURE__ */ y("ZodAny", (e, t) => {
  Of.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => Hl();
});
function zh() {
  return /* @__PURE__ */ Nl(Wi);
}
const Hi = /* @__PURE__ */ y("ZodUnknown", (e, t) => {
  zf.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => Kl();
});
function ur() {
  return /* @__PURE__ */ Il(Hi);
}
const Ki = /* @__PURE__ */ y("ZodNever", (e, t) => {
  Cf.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => Wl(e, n, r);
});
function Yi(e) {
  return /* @__PURE__ */ Zl(Ki, e);
}
const Xi = /* @__PURE__ */ y("ZodDate", (e, t) => {
  Tf.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (r, o, s) => Yl(e, r), e.min = (r, o) => e.check(/* @__PURE__ */ Ut(r, o)), e.max = (r, o) => e.check(/* @__PURE__ */ Dt(r, o));
  const n = e._zod.bag;
  e.minDate = n.minimum ? new Date(n.minimum) : null, e.maxDate = n.maximum ? new Date(n.maximum) : null;
}), Gi = /* @__PURE__ */ y("ZodArray", (e, t) => {
  Af.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => nh(e, n, r, o), e.element = t.element, e.min = (n, r) => e.check(/* @__PURE__ */ jt(n, r)), e.nonempty = (n) => e.check(/* @__PURE__ */ jt(1, n)), e.max = (n, r) => e.check(/* @__PURE__ */ Ir(n, r)), e.length = (n, r) => e.check(/* @__PURE__ */ Zr(n, r)), e.unwrap = () => e.element;
});
function Qi(e, t) {
  return /* @__PURE__ */ Rl(Gi, e, t);
}
const ea = /* @__PURE__ */ y("ZodObject", (e, t) => {
  Nf.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => rh(e, n, r, o), ee(e, "shape", () => t.shape), e.keyof = () => ca(Object.keys(e._zod.def.shape)), e.catchall = (n) => e.clone({ ...e._zod.def, catchall: n }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: ur() }), e.loose = () => e.clone({ ...e._zod.def, catchall: ur() }), e.strict = () => e.clone({ ...e._zod.def, catchall: Yi() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (n) => Bc(e, n), e.safeExtend = (n) => Vc(e, n), e.merge = (n) => Jc(e, n), e.pick = (n) => Lc(e, n), e.omit = (n) => jc(e, n), e.partial = (...n) => qc(Dr, e, n[0]), e.required = (...n) => Wc(Ur, e, n[0]);
});
function Ch(e, t) {
  const n = {
    type: "object",
    shape: e ?? {},
    ...x(t)
  };
  return new ea(n);
}
const ta = /* @__PURE__ */ y("ZodUnion", (e, t) => {
  If.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => oh(e, n, r, o), e.options = t.options;
});
function na(e, t) {
  return new ta({
    type: "union",
    options: e,
    ...x(t)
  });
}
const ra = /* @__PURE__ */ y("ZodIntersection", (e, t) => {
  Zf.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => sh(e, n, r, o);
});
function oa(e, t) {
  return new ra({
    type: "intersection",
    left: e,
    right: t
  });
}
const sa = /* @__PURE__ */ y("ZodTuple", (e, t) => {
  xf.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => ih(e, n, r, o), e.rest = (n) => e.clone({
    ...e._zod.def,
    rest: n
  });
});
function Th(e, t, n) {
  const r = t instanceof re, o = r ? n : t, s = r ? t : null;
  return new sa({
    type: "tuple",
    items: e,
    rest: s,
    ...x(o)
  });
}
const ia = /* @__PURE__ */ y("ZodRecord", (e, t) => {
  Rf.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => ah(e, n, r, o), e.keyType = t.keyType, e.valueType = t.valueType;
});
function Ah(e, t, n) {
  return new ia({
    type: "record",
    keyType: e,
    valueType: t,
    ...x(n)
  });
}
const aa = /* @__PURE__ */ y("ZodMap", (e, t) => {
  Pf.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => th(e, n), e.keyType = t.keyType, e.valueType = t.valueType, e.min = (...n) => e.check(/* @__PURE__ */ ir(...n)), e.nonempty = (n) => e.check(/* @__PURE__ */ ir(1, n)), e.max = (...n) => e.check(/* @__PURE__ */ qs(...n)), e.size = (...n) => e.check(/* @__PURE__ */ Ws(...n));
});
function Sh(e, t, n) {
  return new aa({
    type: "map",
    keyType: e,
    valueType: t,
    ...x(n)
  });
}
const mn = /* @__PURE__ */ y("ZodEnum", (e, t) => {
  Ff.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (r, o, s) => Xl(e, r, o), e.enum = t.entries, e.options = Object.values(t.entries);
  const n = new Set(Object.keys(t.entries));
  e.extract = (r, o) => {
    const s = {};
    for (const i of r)
      if (n.has(i))
        s[i] = t.entries[i];
      else
        throw new Error(`Key ${i} not found in enum`);
    return new mn({
      ...t,
      checks: [],
      ...x(o),
      entries: s
    });
  }, e.exclude = (r, o) => {
    const s = { ...t.entries };
    for (const i of r)
      if (n.has(i))
        delete s[i];
      else
        throw new Error(`Key ${i} not found in enum`);
    return new mn({
      ...t,
      checks: [],
      ...x(o),
      entries: s
    });
  };
});
function ca(e, t) {
  const n = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
  return new mn({
    type: "enum",
    entries: n,
    ...x(t)
  });
}
const ua = /* @__PURE__ */ y("ZodLiteral", (e, t) => {
  Df.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => Gl(e, n, r), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function Nh(e, t) {
  return new ua({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...x(t)
  });
}
const fa = /* @__PURE__ */ y("ZodTransform", (e, t) => {
  Uf.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => eh(e, n), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      throw new $s(e.constructor.name);
    n.addIssue = (s) => {
      if (typeof s == "string")
        n.issues.push(Lt(s, n.value, t));
      else {
        const i = s;
        i.fatal && (i.continue = !1), i.code ?? (i.code = "custom"), i.input ?? (i.input = n.value), i.inst ?? (i.inst = e), n.issues.push(Lt(i));
      }
    };
    const o = t.transform(n.value, n);
    return o instanceof Promise ? o.then((s) => (n.value = s, n)) : (n.value = o, n);
  };
});
function Fr(e) {
  return new fa({
    type: "transform",
    transform: e
  });
}
const Dr = /* @__PURE__ */ y("ZodOptional", (e, t) => {
  Vs.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => ci(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function fr(e) {
  return new Dr({
    type: "optional",
    innerType: e
  });
}
const la = /* @__PURE__ */ y("ZodExactOptional", (e, t) => {
  Mf.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => ci(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function ha(e) {
  return new la({
    type: "optional",
    innerType: e
  });
}
const da = /* @__PURE__ */ y("ZodNullable", (e, t) => {
  Lf.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => ch(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function lr(e) {
  return new da({
    type: "nullable",
    innerType: e
  });
}
const pa = /* @__PURE__ */ y("ZodDefault", (e, t) => {
  jf.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => fh(e, n, r, o), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function ma(e, t) {
  return new pa({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : zs(t);
    }
  });
}
const ga = /* @__PURE__ */ y("ZodPrefault", (e, t) => {
  Bf.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => lh(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function _a(e, t) {
  return new ga({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : zs(t);
    }
  });
}
const Ur = /* @__PURE__ */ y("ZodNonOptional", (e, t) => {
  Vf.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => uh(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function ya(e, t) {
  return new Ur({
    type: "nonoptional",
    innerType: e,
    ...x(t)
  });
}
const va = /* @__PURE__ */ y("ZodCatch", (e, t) => {
  Jf.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => hh(e, n, r, o), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function ba(e, t) {
  return new va({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const wa = /* @__PURE__ */ y("ZodPipe", (e, t) => {
  qf.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => dh(e, n, r, o), e.in = t.in, e.out = t.out;
});
function gn(e, t) {
  return new wa({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const ka = /* @__PURE__ */ y("ZodReadonly", (e, t) => {
  Wf.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => ph(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function $a(e) {
  return new ka({
    type: "readonly",
    innerType: e
  });
}
const Ea = /* @__PURE__ */ y("ZodLazy", (e, t) => {
  Hf.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => mh(e, n, r, o), e.unwrap = () => e._zod.def.getter();
});
function Ih(e) {
  return new Ea({
    type: "lazy",
    getter: e
  });
}
const Mr = /* @__PURE__ */ y("ZodCustom", (e, t) => {
  Kf.init(e, t), oe.init(e, t), e._zod.processJSONSchema = (n, r, o) => Ql(e, n);
});
function Zh(e, t) {
  return /* @__PURE__ */ Pl(Mr, e ?? (() => !0), t);
}
function Oa(e, t = {}) {
  return /* @__PURE__ */ Fl(Mr, e, t);
}
function za(e) {
  return /* @__PURE__ */ Dl(e);
}
function xh(e, t) {
  return gn(Fr(e), t);
}
function Rh(e) {
  Me({
    customError: e
  });
}
function Fv(e) {
  return /* @__PURE__ */ el(Rr, e);
}
function Dv(e) {
  return /* @__PURE__ */ xl(Xi, e);
}
Me(Xf());
const Uv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, ZodAny: Wi, ZodArray: Gi, ZodBase64: Ui, ZodBase64URL: Mi, ZodBoolean: Vi, ZodCIDRv4: Fi, ZodCIDRv6: Di, ZodCUID: Si, ZodCUID2: Ni, ZodCatch: va, ZodCustom: Mr, ZodDate: Xi, ZodDefault: pa, ZodE164: Li, ZodEmail: zi, ZodEmoji: Ti, ZodEnum: mn, ZodError: bh, ZodExactOptional: la, ZodGUID: ar, ZodIPv4: Ri, ZodIPv6: Pi, ZodISODate: fi, ZodISODateTime: ui, ZodISODuration: hi, ZodISOTime: li, ZodIntersection: ra, ZodJWT: ji, ZodKSUID: xi, ZodLazy: Ea, ZodLiteral: ua, ZodMap: aa, ZodNanoID: Ai, ZodNever: Ki, ZodNonOptional: Ur, ZodNull: qi, ZodNullable: da, ZodNumber: Pr, ZodNumberFormat: Bi, ZodObject: ea, ZodOptional: Dr, ZodPipe: wa, ZodPrefault: ga, ZodReadonly: ka, ZodRealError: Le, ZodRecord: ia, ZodString: Rr, ZodStringFormat: de, ZodTransform: fa, ZodTuple: sa, ZodType: oe, ZodULID: Ii, ZodURL: Ci, ZodUUID: Rt, ZodUndefined: Ji, ZodUnion: ta, ZodUnknown: Hi, ZodXID: Zi, _ZodString: xr, _default: ma, any: zh, array: Qi, boolean: $h, catch: ba, clone: tt, config: Me, custom: Zh, decode: vi, decodeAsync: wi, encode: yi, encodeAsync: bi, endsWith: Qs, enum: ca, exactOptional: ha, flattenError: Ns, formatError: Is, globalRegistry: vt, gt: or, gte: Ut, includes: Xs, int: cr, intersection: oa, lazy: Ih, length: Zr, literal: Nh, lowercase: Ks, lt: rr, lte: Dt, map: Sh, maxLength: Ir, maxSize: qs, minLength: jt, minSize: ir, multipleOf: sr, never: Yi, nonoptional: ya, normalize: ei, null: Oh, nullable: lr, number: kh, object: Ch, optional: fr, overwrite: gt, parse: pi, parseAsync: mi, pipe: gn, prefault: _a, preprocess: xh, readonly: $a, record: Ah, refine: Oa, regex: Hs, registry: Js, safeDecode: $i, safeDecodeAsync: Oi, safeEncode: ki, safeEncodeAsync: Ei, safeParse: gi, safeParseAsync: _i, setErrorMap: Rh, size: Ws, slugify: oi, startsWith: Gs, string: wh, superRefine: za, toLowerCase: ni, toUpperCase: ri, transform: Fr, trim: ti, tuple: Th, undefined: Eh, union: na, unknown: ur, uppercase: Ys }, Symbol.toStringTag, { value: "Module" }));
function b(e, t, n) {
  function r(a, c) {
    if (a._zod || Object.defineProperty(a, "_zod", {
      value: {
        def: c,
        constr: i,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), a._zod.traits.has(e))
      return;
    a._zod.traits.add(e), t(a, c);
    const u = i.prototype, f = Object.keys(u);
    for (let l = 0; l < f.length; l++) {
      const h = f[l];
      h in a || (a[h] = u[h].bind(a));
    }
  }
  const o = n?.Parent ?? Object;
  class s extends o {
  }
  Object.defineProperty(s, "name", { value: e });
  function i(a) {
    var c;
    const u = n?.Parent ? new s() : this;
    r(u, a), (c = u._zod).deferred ?? (c.deferred = []);
    for (const f of u._zod.deferred)
      f();
    return u;
  }
  return Object.defineProperty(i, "init", { value: r }), Object.defineProperty(i, Symbol.hasInstance, {
    value: (a) => n?.Parent && a instanceof n.Parent ? !0 : a?._zod?.traits?.has(e)
  }), Object.defineProperty(i, "name", { value: e }), i;
}
class $t extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Ca extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const Ta = {};
function at(e) {
  return Ta;
}
function Aa(e) {
  const t = Object.values(e).filter((r) => typeof r == "number");
  return Object.entries(e).filter(([r, o]) => t.indexOf(+r) === -1).map(([r, o]) => o);
}
function hr(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function Lr(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function jr(e) {
  return e == null;
}
function Br(e) {
  const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, n);
}
function Ph(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = t.toString();
  let o = (r.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(r)) {
    const c = r.match(/\d?e-(\d?)/);
    c?.[1] && (o = Number.parseInt(c[1]));
  }
  const s = n > o ? n : o, i = Number.parseInt(e.toFixed(s).replace(".", "")), a = Number.parseInt(t.toFixed(s).replace(".", ""));
  return i % a / 10 ** s;
}
const bo = /* @__PURE__ */ Symbol("evaluating");
function ce(e, t, n) {
  let r;
  Object.defineProperty(e, t, {
    get() {
      if (r !== bo)
        return r === void 0 && (r = bo, r = n()), r;
    },
    set(o) {
      Object.defineProperty(e, t, {
        value: o
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function _t(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function ft(...e) {
  const t = {};
  for (const n of e) {
    const r = Object.getOwnPropertyDescriptors(n);
    Object.assign(t, r);
  }
  return Object.defineProperties({}, t);
}
function wo(e) {
  return JSON.stringify(e);
}
function Fh(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const Sa = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function _n(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Dh = Lr(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function zt(e) {
  if (_n(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const n = t.prototype;
  return !(_n(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function Na(e) {
  return zt(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const Uh = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function On(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function lt(e, t, n) {
  const r = new e._zod.constr(t ?? e._zod.def);
  return (!t || n?.parent) && (r._zod.parent = e), r;
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
function Mh(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const Lh = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function jh(e, t) {
  const n = e._zod.def, r = n.checks;
  if (r && r.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const s = ft(e._zod.def, {
    get shape() {
      const i = {};
      for (const a in t) {
        if (!(a in n.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        t[a] && (i[a] = n.shape[a]);
      }
      return _t(this, "shape", i), i;
    },
    checks: []
  });
  return lt(e, s);
}
function Bh(e, t) {
  const n = e._zod.def, r = n.checks;
  if (r && r.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const s = ft(e._zod.def, {
    get shape() {
      const i = { ...e._zod.def.shape };
      for (const a in t) {
        if (!(a in n.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        t[a] && delete i[a];
      }
      return _t(this, "shape", i), i;
    },
    checks: []
  });
  return lt(e, s);
}
function Vh(e, t) {
  if (!zt(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const n = e._zod.def.checks;
  if (n && n.length > 0) {
    const s = e._zod.def.shape;
    for (const i in t)
      if (Object.getOwnPropertyDescriptor(s, i) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const o = ft(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape, ...t };
      return _t(this, "shape", s), s;
    }
  });
  return lt(e, o);
}
function Jh(e, t) {
  if (!zt(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const n = ft(e._zod.def, {
    get shape() {
      const r = { ...e._zod.def.shape, ...t };
      return _t(this, "shape", r), r;
    }
  });
  return lt(e, n);
}
function qh(e, t) {
  const n = ft(e._zod.def, {
    get shape() {
      const r = { ...e._zod.def.shape, ...t._zod.def.shape };
      return _t(this, "shape", r), r;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return lt(e, n);
}
function Wh(e, t, n) {
  const o = t._zod.def.checks;
  if (o && o.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const i = ft(t._zod.def, {
    get shape() {
      const a = t._zod.def.shape, c = { ...a };
      if (n)
        for (const u in n) {
          if (!(u in a))
            throw new Error(`Unrecognized key: "${u}"`);
          n[u] && (c[u] = e ? new e({
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
      return _t(this, "shape", c), c;
    },
    checks: []
  });
  return lt(t, i);
}
function Hh(e, t, n) {
  const r = ft(t._zod.def, {
    get shape() {
      const o = t._zod.def.shape, s = { ...o };
      if (n)
        for (const i in n) {
          if (!(i in s))
            throw new Error(`Unrecognized key: "${i}"`);
          n[i] && (s[i] = new e({
            type: "nonoptional",
            innerType: o[i]
          }));
        }
      else
        for (const i in o)
          s[i] = new e({
            type: "nonoptional",
            innerType: o[i]
          });
      return _t(this, "shape", s), s;
    }
  });
  return lt(t, r);
}
function bt(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n]?.continue !== !0)
      return !0;
  return !1;
}
function wt(e, t) {
  return t.map((n) => {
    var r;
    return (r = n).path ?? (r.path = []), n.path.unshift(e), n;
  });
}
function Xt(e) {
  return typeof e == "string" ? e : e?.message;
}
function ct(e, t, n) {
  const r = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const o = Xt(e.inst?._zod.def?.error?.(e)) ?? Xt(t?.error?.(e)) ?? Xt(n.customError?.(e)) ?? Xt(n.localeError?.(e)) ?? "Invalid input";
    r.message = o;
  }
  return delete r.inst, delete r.continue, t?.reportInput || delete r.input, r;
}
function Vr(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function Bt(...e) {
  const [t, n, r] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: n,
    inst: r
  } : { ...t };
}
const Ia = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, hr, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, Za = b("$ZodError", Ia), xa = b("$ZodError", Ia, { Parent: Error });
function Kh(e, t = (n) => n.message) {
  const n = {}, r = [];
  for (const o of e.issues)
    o.path.length > 0 ? (n[o.path[0]] = n[o.path[0]] || [], n[o.path[0]].push(t(o))) : r.push(t(o));
  return { formErrors: r, fieldErrors: n };
}
function Yh(e, t = (n) => n.message) {
  const n = { _errors: [] }, r = (o) => {
    for (const s of o.issues)
      if (s.code === "invalid_union" && s.errors.length)
        s.errors.map((i) => r({ issues: i }));
      else if (s.code === "invalid_key")
        r({ issues: s.issues });
      else if (s.code === "invalid_element")
        r({ issues: s.issues });
      else if (s.path.length === 0)
        n._errors.push(t(s));
      else {
        let i = n, a = 0;
        for (; a < s.path.length; ) {
          const c = s.path[a];
          a === s.path.length - 1 ? (i[c] = i[c] || { _errors: [] }, i[c]._errors.push(t(s))) : i[c] = i[c] || { _errors: [] }, i = i[c], a++;
        }
      }
  };
  return r(e), n;
}
const Jr = (e) => (t, n, r, o) => {
  const s = r ? Object.assign(r, { async: !1 }) : { async: !1 }, i = t._zod.run({ value: n, issues: [] }, s);
  if (i instanceof Promise)
    throw new $t();
  if (i.issues.length) {
    const a = new (o?.Err ?? e)(i.issues.map((c) => ct(c, s, at())));
    throw Sa(a, o?.callee), a;
  }
  return i.value;
}, qr = (e) => async (t, n, r, o) => {
  const s = r ? Object.assign(r, { async: !0 }) : { async: !0 };
  let i = t._zod.run({ value: n, issues: [] }, s);
  if (i instanceof Promise && (i = await i), i.issues.length) {
    const a = new (o?.Err ?? e)(i.issues.map((c) => ct(c, s, at())));
    throw Sa(a, o?.callee), a;
  }
  return i.value;
}, zn = (e) => (t, n, r) => {
  const o = r ? { ...r, async: !1 } : { async: !1 }, s = t._zod.run({ value: n, issues: [] }, o);
  if (s instanceof Promise)
    throw new $t();
  return s.issues.length ? {
    success: !1,
    error: new (e ?? Za)(s.issues.map((i) => ct(i, o, at())))
  } : { success: !0, data: s.value };
}, Xh = /* @__PURE__ */ zn(xa), Cn = (e) => async (t, n, r) => {
  const o = r ? Object.assign(r, { async: !0 }) : { async: !0 };
  let s = t._zod.run({ value: n, issues: [] }, o);
  return s instanceof Promise && (s = await s), s.issues.length ? {
    success: !1,
    error: new e(s.issues.map((i) => ct(i, o, at())))
  } : { success: !0, data: s.value };
}, Gh = /* @__PURE__ */ Cn(xa), Qh = (e) => (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return Jr(e)(t, n, o);
}, ed = (e) => (t, n, r) => Jr(e)(t, n, r), td = (e) => async (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return qr(e)(t, n, o);
}, nd = (e) => async (t, n, r) => qr(e)(t, n, r), rd = (e) => (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return zn(e)(t, n, o);
}, od = (e) => (t, n, r) => zn(e)(t, n, r), sd = (e) => async (t, n, r) => {
  const o = r ? Object.assign(r, { direction: "backward" }) : { direction: "backward" };
  return Cn(e)(t, n, o);
}, id = (e) => async (t, n, r) => Cn(e)(t, n, r), ad = /^[cC][^\s-]{8,}$/, cd = /^[0-9a-z]+$/, ud = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, fd = /^[0-9a-vA-V]{20}$/, ld = /^[A-Za-z0-9]{27}$/, hd = /^[a-zA-Z0-9_-]{21}$/, dd = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, pd = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, ko = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, md = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, gd = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function _d() {
  return new RegExp(gd, "u");
}
const yd = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, vd = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, bd = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, wd = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, kd = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Ra = /^[A-Za-z0-9_-]*$/, $d = /^\+[1-9]\d{6,14}$/, Pa = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Ed = /* @__PURE__ */ new RegExp(`^${Pa}$`);
function Fa(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Od(e) {
  return new RegExp(`^${Fa(e)}$`);
}
function zd(e) {
  const t = Fa({ precision: e.precision }), n = ["Z"];
  e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const r = `${t}(?:${n.join("|")})`;
  return new RegExp(`^${Pa}T(?:${r})$`);
}
const Cd = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, Td = /^-?\d+$/, Da = /^-?\d+(?:\.\d+)?$/, Ad = /^(?:true|false)$/i, Sd = /^[^A-Z]*$/, Nd = /^[^a-z]*$/, Re = /* @__PURE__ */ b("$ZodCheck", (e, t) => {
  var n;
  e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Ua = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, Ma = /* @__PURE__ */ b("$ZodCheckLessThan", (e, t) => {
  Re.init(e, t);
  const n = Ua[typeof t.value];
  e._zod.onattach.push((r) => {
    const o = r._zod.bag, s = (t.inclusive ? o.maximum : o.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < s && (t.inclusive ? o.maximum = t.value : o.exclusiveMaximum = t.value);
  }), e._zod.check = (r) => {
    (t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
      origin: n,
      code: "too_big",
      maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
      input: r.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), La = /* @__PURE__ */ b("$ZodCheckGreaterThan", (e, t) => {
  Re.init(e, t);
  const n = Ua[typeof t.value];
  e._zod.onattach.push((r) => {
    const o = r._zod.bag, s = (t.inclusive ? o.minimum : o.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > s && (t.inclusive ? o.minimum = t.value : o.exclusiveMinimum = t.value);
  }), e._zod.check = (r) => {
    (t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
      origin: n,
      code: "too_small",
      minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
      input: r.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), Id = /* @__PURE__ */ b("$ZodCheckMultipleOf", (e, t) => {
  Re.init(e, t), e._zod.onattach.push((n) => {
    var r;
    (r = n._zod.bag).multipleOf ?? (r.multipleOf = t.value);
  }), e._zod.check = (n) => {
    if (typeof n.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof n.value == "bigint" ? n.value % t.value === BigInt(0) : Ph(n.value, t.value) === 0) || n.issues.push({
      origin: typeof n.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Zd = /* @__PURE__ */ b("$ZodCheckNumberFormat", (e, t) => {
  Re.init(e, t), t.format = t.format || "float64";
  const n = t.format?.includes("int"), r = n ? "int" : "number", [o, s] = Lh[t.format];
  e._zod.onattach.push((i) => {
    const a = i._zod.bag;
    a.format = t.format, a.minimum = o, a.maximum = s, n && (a.pattern = Td);
  }), e._zod.check = (i) => {
    const a = i.value;
    if (n) {
      if (!Number.isInteger(a)) {
        i.issues.push({
          expected: r,
          format: t.format,
          code: "invalid_type",
          continue: !1,
          input: a,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(a)) {
        a > 0 ? i.issues.push({
          input: a,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: r,
          inclusive: !0,
          continue: !t.abort
        }) : i.issues.push({
          input: a,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: r,
          inclusive: !0,
          continue: !t.abort
        });
        return;
      }
    }
    a < o && i.issues.push({
      origin: "number",
      input: a,
      code: "too_small",
      minimum: o,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), a > s && i.issues.push({
      origin: "number",
      input: a,
      code: "too_big",
      maximum: s,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    });
  };
}), xd = /* @__PURE__ */ b("$ZodCheckMaxLength", (e, t) => {
  var n;
  Re.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !jr(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < o && (r._zod.bag.maximum = t.maximum);
  }), e._zod.check = (r) => {
    const o = r.value;
    if (o.length <= t.maximum)
      return;
    const i = Vr(o);
    r.issues.push({
      origin: i,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !t.abort
    });
  };
}), Rd = /* @__PURE__ */ b("$ZodCheckMinLength", (e, t) => {
  var n;
  Re.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !jr(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > o && (r._zod.bag.minimum = t.minimum);
  }), e._zod.check = (r) => {
    const o = r.value;
    if (o.length >= t.minimum)
      return;
    const i = Vr(o);
    r.issues.push({
      origin: i,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !t.abort
    });
  };
}), Pd = /* @__PURE__ */ b("$ZodCheckLengthEquals", (e, t) => {
  var n;
  Re.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !jr(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.minimum = t.length, o.maximum = t.length, o.length = t.length;
  }), e._zod.check = (r) => {
    const o = r.value, s = o.length;
    if (s === t.length)
      return;
    const i = Vr(o), a = s > t.length;
    r.issues.push({
      origin: i,
      ...a ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Tn = /* @__PURE__ */ b("$ZodCheckStringFormat", (e, t) => {
  var n, r;
  Re.init(e, t), e._zod.onattach.push((o) => {
    const s = o._zod.bag;
    s.format = t.format, t.pattern && (s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(t.pattern));
  }), t.pattern ? (n = e._zod).check ?? (n.check = (o) => {
    t.pattern.lastIndex = 0, !t.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: o.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (r = e._zod).check ?? (r.check = () => {
  });
}), Fd = /* @__PURE__ */ b("$ZodCheckRegex", (e, t) => {
  Tn.init(e, t), e._zod.check = (n) => {
    t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: n.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), Dd = /* @__PURE__ */ b("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = Sd), Tn.init(e, t);
}), Ud = /* @__PURE__ */ b("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = Nd), Tn.init(e, t);
}), Md = /* @__PURE__ */ b("$ZodCheckIncludes", (e, t) => {
  Re.init(e, t);
  const n = On(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${n}` : n);
  t.pattern = r, e._zod.onattach.push((o) => {
    const s = o._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(r);
  }), e._zod.check = (o) => {
    o.value.includes(t.includes, t.position) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ld = /* @__PURE__ */ b("$ZodCheckStartsWith", (e, t) => {
  Re.init(e, t);
  const n = new RegExp(`^${On(t.prefix)}.*`);
  t.pattern ?? (t.pattern = n), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(n);
  }), e._zod.check = (r) => {
    r.value.startsWith(t.prefix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), jd = /* @__PURE__ */ b("$ZodCheckEndsWith", (e, t) => {
  Re.init(e, t);
  const n = new RegExp(`.*${On(t.suffix)}$`);
  t.pattern ?? (t.pattern = n), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(n);
  }), e._zod.check = (r) => {
    r.value.endsWith(t.suffix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Bd = /* @__PURE__ */ b("$ZodCheckOverwrite", (e, t) => {
  Re.init(e, t), e._zod.check = (n) => {
    n.value = t.tx(n.value);
  };
});
class Vd {
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
    const r = t.split(`
`).filter((i) => i), o = Math.min(...r.map((i) => i.length - i.trimStart().length)), s = r.map((i) => i.slice(o)).map((i) => " ".repeat(this.indent * 2) + i);
    for (const i of s)
      this.content.push(i);
  }
  compile() {
    const t = Function, n = this?.args, o = [...(this?.content ?? [""]).map((s) => `  ${s}`)];
    return new t(...n, o.join(`
`));
  }
}
const Jd = {
  major: 4,
  minor: 3,
  patch: 6
}, ge = /* @__PURE__ */ b("$ZodType", (e, t) => {
  var n;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Jd;
  const r = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && r.unshift(e);
  for (const o of r)
    for (const s of o._zod.onattach)
      s(e);
  if (r.length === 0)
    (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const o = (i, a, c) => {
      let u = bt(i), f;
      for (const l of a) {
        if (l._zod.def.when) {
          if (!l._zod.def.when(i))
            continue;
        } else if (u)
          continue;
        const h = i.issues.length, d = l._zod.check(i);
        if (d instanceof Promise && c?.async === !1)
          throw new $t();
        if (f || d instanceof Promise)
          f = (f ?? Promise.resolve()).then(async () => {
            await d, i.issues.length !== h && (u || (u = bt(i, h)));
          });
        else {
          if (i.issues.length === h)
            continue;
          u || (u = bt(i, h));
        }
      }
      return f ? f.then(() => i) : i;
    }, s = (i, a, c) => {
      if (bt(i))
        return i.aborted = !0, i;
      const u = o(a, r, c);
      if (u instanceof Promise) {
        if (c.async === !1)
          throw new $t();
        return u.then((f) => e._zod.parse(f, c));
      }
      return e._zod.parse(u, c);
    };
    e._zod.run = (i, a) => {
      if (a.skipChecks)
        return e._zod.parse(i, a);
      if (a.direction === "backward") {
        const u = e._zod.parse({ value: i.value, issues: [] }, { ...a, skipChecks: !0 });
        return u instanceof Promise ? u.then((f) => s(f, i, a)) : s(u, i, a);
      }
      const c = e._zod.parse(i, a);
      if (c instanceof Promise) {
        if (a.async === !1)
          throw new $t();
        return c.then((u) => o(u, r, a));
      }
      return o(c, r, a);
    };
  }
  ce(e, "~standard", () => ({
    validate: (o) => {
      try {
        const s = Xh(e, o);
        return s.success ? { value: s.data } : { issues: s.error?.issues };
      } catch {
        return Gh(e, o).then((i) => i.success ? { value: i.data } : { issues: i.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), Wr = /* @__PURE__ */ b("$ZodString", (e, t) => {
  ge.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? Cd(e._zod.bag), e._zod.parse = (n, r) => {
    if (t.coerce)
      try {
        n.value = String(n.value);
      } catch {
      }
    return typeof n.value == "string" || n.issues.push({
      expected: "string",
      code: "invalid_type",
      input: n.value,
      inst: e
    }), n;
  };
}), pe = /* @__PURE__ */ b("$ZodStringFormat", (e, t) => {
  Tn.init(e, t), Wr.init(e, t);
}), qd = /* @__PURE__ */ b("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = pd), pe.init(e, t);
}), Wd = /* @__PURE__ */ b("$ZodUUID", (e, t) => {
  if (t.version) {
    const r = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (r === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = ko(r));
  } else
    t.pattern ?? (t.pattern = ko());
  pe.init(e, t);
}), Hd = /* @__PURE__ */ b("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = md), pe.init(e, t);
}), Kd = /* @__PURE__ */ b("$ZodURL", (e, t) => {
  pe.init(e, t), e._zod.check = (n) => {
    try {
      const r = n.value.trim(), o = new URL(r);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(o.hostname) || n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: n.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol) || n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: n.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? n.value = o.href : n.value = r;
      return;
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "url",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), Yd = /* @__PURE__ */ b("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = _d()), pe.init(e, t);
}), Xd = /* @__PURE__ */ b("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = hd), pe.init(e, t);
}), Gd = /* @__PURE__ */ b("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = ad), pe.init(e, t);
}), Qd = /* @__PURE__ */ b("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = cd), pe.init(e, t);
}), ep = /* @__PURE__ */ b("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = ud), pe.init(e, t);
}), tp = /* @__PURE__ */ b("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = fd), pe.init(e, t);
}), np = /* @__PURE__ */ b("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = ld), pe.init(e, t);
}), rp = /* @__PURE__ */ b("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = zd(t)), pe.init(e, t);
}), op = /* @__PURE__ */ b("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = Ed), pe.init(e, t);
}), sp = /* @__PURE__ */ b("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = Od(t)), pe.init(e, t);
}), ip = /* @__PURE__ */ b("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = dd), pe.init(e, t);
}), ap = /* @__PURE__ */ b("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = yd), pe.init(e, t), e._zod.bag.format = "ipv4";
}), cp = /* @__PURE__ */ b("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = vd), pe.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
    try {
      new URL(`http://[${n.value}]`);
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), up = /* @__PURE__ */ b("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = bd), pe.init(e, t);
}), fp = /* @__PURE__ */ b("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = wd), pe.init(e, t), e._zod.check = (n) => {
    const r = n.value.split("/");
    try {
      if (r.length !== 2)
        throw new Error();
      const [o, s] = r;
      if (!s)
        throw new Error();
      const i = Number(s);
      if (`${i}` !== s)
        throw new Error();
      if (i < 0 || i > 128)
        throw new Error();
      new URL(`http://[${o}]`);
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function ja(e) {
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
const lp = /* @__PURE__ */ b("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = kd), pe.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
    ja(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function hp(e) {
  if (!Ra.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), n = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return ja(n);
}
const dp = /* @__PURE__ */ b("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = Ra), pe.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
    hp(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), pp = /* @__PURE__ */ b("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = $d), pe.init(e, t);
});
function mp(e, t = null) {
  try {
    const n = e.split(".");
    if (n.length !== 3)
      return !1;
    const [r] = n;
    if (!r)
      return !1;
    const o = JSON.parse(atob(r));
    return !("typ" in o && o?.typ !== "JWT" || !o.alg || t && (!("alg" in o) || o.alg !== t));
  } catch {
    return !1;
  }
}
const gp = /* @__PURE__ */ b("$ZodJWT", (e, t) => {
  pe.init(e, t), e._zod.check = (n) => {
    mp(n.value, t.alg) || n.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ba = /* @__PURE__ */ b("$ZodNumber", (e, t) => {
  ge.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Da, e._zod.parse = (n, r) => {
    if (t.coerce)
      try {
        n.value = Number(n.value);
      } catch {
      }
    const o = n.value;
    if (typeof o == "number" && !Number.isNaN(o) && Number.isFinite(o))
      return n;
    const s = typeof o == "number" ? Number.isNaN(o) ? "NaN" : Number.isFinite(o) ? void 0 : "Infinity" : void 0;
    return n.issues.push({
      expected: "number",
      code: "invalid_type",
      input: o,
      inst: e,
      ...s ? { received: s } : {}
    }), n;
  };
}), _p = /* @__PURE__ */ b("$ZodNumberFormat", (e, t) => {
  Zd.init(e, t), Ba.init(e, t);
}), yp = /* @__PURE__ */ b("$ZodBoolean", (e, t) => {
  ge.init(e, t), e._zod.pattern = Ad, e._zod.parse = (n, r) => {
    if (t.coerce)
      try {
        n.value = !!n.value;
      } catch {
      }
    const o = n.value;
    return typeof o == "boolean" || n.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: o,
      inst: e
    }), n;
  };
}), vp = /* @__PURE__ */ b("$ZodAny", (e, t) => {
  ge.init(e, t), e._zod.parse = (n) => n;
}), bp = /* @__PURE__ */ b("$ZodUnknown", (e, t) => {
  ge.init(e, t), e._zod.parse = (n) => n;
}), wp = /* @__PURE__ */ b("$ZodNever", (e, t) => {
  ge.init(e, t), e._zod.parse = (n, r) => (n.issues.push({
    expected: "never",
    code: "invalid_type",
    input: n.value,
    inst: e
  }), n);
});
function $o(e, t, n) {
  e.issues.length && t.issues.push(...wt(n, e.issues)), t.value[n] = e.value;
}
const kp = /* @__PURE__ */ b("$ZodArray", (e, t) => {
  ge.init(e, t), e._zod.parse = (n, r) => {
    const o = n.value;
    if (!Array.isArray(o))
      return n.issues.push({
        expected: "array",
        code: "invalid_type",
        input: o,
        inst: e
      }), n;
    n.value = Array(o.length);
    const s = [];
    for (let i = 0; i < o.length; i++) {
      const a = o[i], c = t.element._zod.run({
        value: a,
        issues: []
      }, r);
      c instanceof Promise ? s.push(c.then((u) => $o(u, n, i))) : $o(c, n, i);
    }
    return s.length ? Promise.all(s).then(() => n) : n;
  };
});
function yn(e, t, n, r, o) {
  if (e.issues.length) {
    if (o && !(n in r))
      return;
    t.issues.push(...wt(n, e.issues));
  }
  e.value === void 0 ? n in r && (t.value[n] = void 0) : t.value[n] = e.value;
}
function Va(e) {
  const t = Object.keys(e.shape);
  for (const r of t)
    if (!e.shape?.[r]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
  const n = Mh(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(n)
  };
}
function Ja(e, t, n, r, o, s) {
  const i = [], a = o.keySet, c = o.catchall._zod, u = c.def.type, f = c.optout === "optional";
  for (const l in t) {
    if (a.has(l))
      continue;
    if (u === "never") {
      i.push(l);
      continue;
    }
    const h = c.run({ value: t[l], issues: [] }, r);
    h instanceof Promise ? e.push(h.then((d) => yn(d, n, l, t, f))) : yn(h, n, l, t, f);
  }
  return i.length && n.issues.push({
    code: "unrecognized_keys",
    keys: i,
    input: t,
    inst: s
  }), e.length ? Promise.all(e).then(() => n) : n;
}
const $p = /* @__PURE__ */ b("$ZodObject", (e, t) => {
  if (ge.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
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
  const r = Lr(() => Va(t));
  ce(e._zod, "propValues", () => {
    const a = t.shape, c = {};
    for (const u in a) {
      const f = a[u]._zod;
      if (f.values) {
        c[u] ?? (c[u] = /* @__PURE__ */ new Set());
        for (const l of f.values)
          c[u].add(l);
      }
    }
    return c;
  });
  const o = _n, s = t.catchall;
  let i;
  e._zod.parse = (a, c) => {
    i ?? (i = r.value);
    const u = a.value;
    if (!o(u))
      return a.issues.push({
        expected: "object",
        code: "invalid_type",
        input: u,
        inst: e
      }), a;
    a.value = {};
    const f = [], l = i.shape;
    for (const h of i.keys) {
      const d = l[h], g = d._zod.optout === "optional", _ = d._zod.run({ value: u[h], issues: [] }, c);
      _ instanceof Promise ? f.push(_.then((w) => yn(w, a, h, u, g))) : yn(_, a, h, u, g);
    }
    return s ? Ja(f, u, a, c, r.value, e) : f.length ? Promise.all(f).then(() => a) : a;
  };
}), Ep = /* @__PURE__ */ b("$ZodObjectJIT", (e, t) => {
  $p.init(e, t);
  const n = e._zod.parse, r = Lr(() => Va(t)), o = (h) => {
    const d = new Vd(["shape", "payload", "ctx"]), g = r.value, _ = ($) => {
      const z = wo($);
      return `shape[${z}]._zod.run({ value: input[${z}], issues: [] }, ctx)`;
    };
    d.write("const input = payload.value;");
    const w = /* @__PURE__ */ Object.create(null);
    let T = 0;
    for (const $ of g.keys)
      w[$] = `key_${T++}`;
    d.write("const newResult = {};");
    for (const $ of g.keys) {
      const z = w[$], S = wo($), E = h[$]?._zod?.optout === "optional";
      d.write(`const ${z} = ${_($)};`), E ? d.write(`
        if (${z}.issues.length) {
          if (${S} in input) {
            payload.issues = payload.issues.concat(${z}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${S}, ...iss.path] : [${S}]
            })));
          }
        }
        
        if (${z}.value === undefined) {
          if (${S} in input) {
            newResult[${S}] = undefined;
          }
        } else {
          newResult[${S}] = ${z}.value;
        }
        
      `) : d.write(`
        if (${z}.issues.length) {
          payload.issues = payload.issues.concat(${z}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${S}, ...iss.path] : [${S}]
          })));
        }
        
        if (${z}.value === undefined) {
          if (${S} in input) {
            newResult[${S}] = undefined;
          }
        } else {
          newResult[${S}] = ${z}.value;
        }
        
      `);
    }
    d.write("payload.value = newResult;"), d.write("return payload;");
    const M = d.compile();
    return ($, z) => M(h, $, z);
  };
  let s;
  const i = _n, a = !Ta.jitless, u = a && Dh.value, f = t.catchall;
  let l;
  e._zod.parse = (h, d) => {
    l ?? (l = r.value);
    const g = h.value;
    return i(g) ? a && u && d?.async === !1 && d.jitless !== !0 ? (s || (s = o(t.shape)), h = s(h, d), f ? Ja([], g, h, d, l, e) : h) : n(h, d) : (h.issues.push({
      expected: "object",
      code: "invalid_type",
      input: g,
      inst: e
    }), h);
  };
});
function Eo(e, t, n, r) {
  for (const s of e)
    if (s.issues.length === 0)
      return t.value = s.value, t;
  const o = e.filter((s) => !bt(s));
  return o.length === 1 ? (t.value = o[0].value, o[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: n,
    errors: e.map((s) => s.issues.map((i) => ct(i, r, at())))
  }), t);
}
const Op = /* @__PURE__ */ b("$ZodUnion", (e, t) => {
  ge.init(e, t), ce(e._zod, "optin", () => t.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), ce(e._zod, "optout", () => t.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), ce(e._zod, "values", () => {
    if (t.options.every((o) => o._zod.values))
      return new Set(t.options.flatMap((o) => Array.from(o._zod.values)));
  }), ce(e._zod, "pattern", () => {
    if (t.options.every((o) => o._zod.pattern)) {
      const o = t.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${o.map((s) => Br(s.source)).join("|")})$`);
    }
  });
  const n = t.options.length === 1, r = t.options[0]._zod.run;
  e._zod.parse = (o, s) => {
    if (n)
      return r(o, s);
    let i = !1;
    const a = [];
    for (const c of t.options) {
      const u = c._zod.run({
        value: o.value,
        issues: []
      }, s);
      if (u instanceof Promise)
        a.push(u), i = !0;
      else {
        if (u.issues.length === 0)
          return u;
        a.push(u);
      }
    }
    return i ? Promise.all(a).then((c) => Eo(c, o, e, s)) : Eo(a, o, e, s);
  };
}), zp = /* @__PURE__ */ b("$ZodIntersection", (e, t) => {
  ge.init(e, t), e._zod.parse = (n, r) => {
    const o = n.value, s = t.left._zod.run({ value: o, issues: [] }, r), i = t.right._zod.run({ value: o, issues: [] }, r);
    return s instanceof Promise || i instanceof Promise ? Promise.all([s, i]).then(([c, u]) => Oo(n, c, u)) : Oo(n, s, i);
  };
});
function dr(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (zt(e) && zt(t)) {
    const n = Object.keys(t), r = Object.keys(e).filter((s) => n.indexOf(s) !== -1), o = { ...e, ...t };
    for (const s of r) {
      const i = dr(e[s], t[s]);
      if (!i.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...i.mergeErrorPath]
        };
      o[s] = i.data;
    }
    return { valid: !0, data: o };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const n = [];
    for (let r = 0; r < e.length; r++) {
      const o = e[r], s = t[r], i = dr(o, s);
      if (!i.valid)
        return {
          valid: !1,
          mergeErrorPath: [r, ...i.mergeErrorPath]
        };
      n.push(i.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Oo(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  let o;
  for (const a of t.issues)
    if (a.code === "unrecognized_keys") {
      o ?? (o = a);
      for (const c of a.keys)
        r.has(c) || r.set(c, {}), r.get(c).l = !0;
    } else
      e.issues.push(a);
  for (const a of n.issues)
    if (a.code === "unrecognized_keys")
      for (const c of a.keys)
        r.has(c) || r.set(c, {}), r.get(c).r = !0;
    else
      e.issues.push(a);
  const s = [...r].filter(([, a]) => a.l && a.r).map(([a]) => a);
  if (s.length && o && e.issues.push({ ...o, keys: s }), bt(e))
    return e;
  const i = dr(t.value, n.value);
  if (!i.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(i.mergeErrorPath)}`);
  return e.value = i.data, e;
}
const Cp = /* @__PURE__ */ b("$ZodRecord", (e, t) => {
  ge.init(e, t), e._zod.parse = (n, r) => {
    const o = n.value;
    if (!zt(o))
      return n.issues.push({
        expected: "record",
        code: "invalid_type",
        input: o,
        inst: e
      }), n;
    const s = [], i = t.keyType._zod.values;
    if (i) {
      n.value = {};
      const a = /* @__PURE__ */ new Set();
      for (const u of i)
        if (typeof u == "string" || typeof u == "number" || typeof u == "symbol") {
          a.add(typeof u == "number" ? u.toString() : u);
          const f = t.valueType._zod.run({ value: o[u], issues: [] }, r);
          f instanceof Promise ? s.push(f.then((l) => {
            l.issues.length && n.issues.push(...wt(u, l.issues)), n.value[u] = l.value;
          })) : (f.issues.length && n.issues.push(...wt(u, f.issues)), n.value[u] = f.value);
        }
      let c;
      for (const u in o)
        a.has(u) || (c = c ?? [], c.push(u));
      c && c.length > 0 && n.issues.push({
        code: "unrecognized_keys",
        input: o,
        inst: e,
        keys: c
      });
    } else {
      n.value = {};
      for (const a of Reflect.ownKeys(o)) {
        if (a === "__proto__")
          continue;
        let c = t.keyType._zod.run({ value: a, issues: [] }, r);
        if (c instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (typeof a == "string" && Da.test(a) && c.issues.length) {
          const l = t.keyType._zod.run({ value: Number(a), issues: [] }, r);
          if (l instanceof Promise)
            throw new Error("Async schemas not supported in object keys currently");
          l.issues.length === 0 && (c = l);
        }
        if (c.issues.length) {
          t.mode === "loose" ? n.value[a] = o[a] : n.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: c.issues.map((l) => ct(l, r, at())),
            input: a,
            path: [a],
            inst: e
          });
          continue;
        }
        const f = t.valueType._zod.run({ value: o[a], issues: [] }, r);
        f instanceof Promise ? s.push(f.then((l) => {
          l.issues.length && n.issues.push(...wt(a, l.issues)), n.value[c.value] = l.value;
        })) : (f.issues.length && n.issues.push(...wt(a, f.issues)), n.value[c.value] = f.value);
      }
    }
    return s.length ? Promise.all(s).then(() => n) : n;
  };
}), Tp = /* @__PURE__ */ b("$ZodEnum", (e, t) => {
  ge.init(e, t);
  const n = Aa(t.entries), r = new Set(n);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${n.filter((o) => Uh.has(typeof o)).map((o) => typeof o == "string" ? On(o) : o.toString()).join("|")})$`), e._zod.parse = (o, s) => {
    const i = o.value;
    return r.has(i) || o.issues.push({
      code: "invalid_value",
      values: n,
      input: i,
      inst: e
    }), o;
  };
}), Ap = /* @__PURE__ */ b("$ZodTransform", (e, t) => {
  ge.init(e, t), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      throw new Ca(e.constructor.name);
    const o = t.transform(n.value, n);
    if (r.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((i) => (n.value = i, n));
    if (o instanceof Promise)
      throw new $t();
    return n.value = o, n;
  };
});
function zo(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const qa = /* @__PURE__ */ b("$ZodOptional", (e, t) => {
  ge.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", ce(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), ce(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${Br(n.source)})?$`) : void 0;
  }), e._zod.parse = (n, r) => {
    if (t.innerType._zod.optin === "optional") {
      const o = t.innerType._zod.run(n, r);
      return o instanceof Promise ? o.then((s) => zo(s, n.value)) : zo(o, n.value);
    }
    return n.value === void 0 ? n : t.innerType._zod.run(n, r);
  };
}), Sp = /* @__PURE__ */ b("$ZodExactOptional", (e, t) => {
  qa.init(e, t), ce(e._zod, "values", () => t.innerType._zod.values), ce(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (n, r) => t.innerType._zod.run(n, r);
}), Np = /* @__PURE__ */ b("$ZodNullable", (e, t) => {
  ge.init(e, t), ce(e._zod, "optin", () => t.innerType._zod.optin), ce(e._zod, "optout", () => t.innerType._zod.optout), ce(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${Br(n.source)}|null)$`) : void 0;
  }), ce(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (n, r) => n.value === null ? n : t.innerType._zod.run(n, r);
}), Ip = /* @__PURE__ */ b("$ZodDefault", (e, t) => {
  ge.init(e, t), e._zod.optin = "optional", ce(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    if (n.value === void 0)
      return n.value = t.defaultValue, n;
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then((s) => Co(s, t)) : Co(o, t);
  };
});
function Co(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const Zp = /* @__PURE__ */ b("$ZodPrefault", (e, t) => {
  ge.init(e, t), e._zod.optin = "optional", ce(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => (r.direction === "backward" || n.value === void 0 && (n.value = t.defaultValue), t.innerType._zod.run(n, r));
}), xp = /* @__PURE__ */ b("$ZodNonOptional", (e, t) => {
  ge.init(e, t), ce(e._zod, "values", () => {
    const n = t.innerType._zod.values;
    return n ? new Set([...n].filter((r) => r !== void 0)) : void 0;
  }), e._zod.parse = (n, r) => {
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then((s) => To(s, e)) : To(o, e);
  };
});
function To(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const Rp = /* @__PURE__ */ b("$ZodCatch", (e, t) => {
  ge.init(e, t), ce(e._zod, "optin", () => t.innerType._zod.optin), ce(e._zod, "optout", () => t.innerType._zod.optout), ce(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then((s) => (n.value = s.value, s.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: s.issues.map((i) => ct(i, r, at()))
      },
      input: n.value
    }), n.issues = []), n)) : (n.value = o.value, o.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: o.issues.map((s) => ct(s, r, at()))
      },
      input: n.value
    }), n.issues = []), n);
  };
}), Pp = /* @__PURE__ */ b("$ZodPipe", (e, t) => {
  ge.init(e, t), ce(e._zod, "values", () => t.in._zod.values), ce(e._zod, "optin", () => t.in._zod.optin), ce(e._zod, "optout", () => t.out._zod.optout), ce(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (n, r) => {
    if (r.direction === "backward") {
      const s = t.out._zod.run(n, r);
      return s instanceof Promise ? s.then((i) => Gt(i, t.in, r)) : Gt(s, t.in, r);
    }
    const o = t.in._zod.run(n, r);
    return o instanceof Promise ? o.then((s) => Gt(s, t.out, r)) : Gt(o, t.out, r);
  };
});
function Gt(e, t, n) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, n);
}
const Fp = /* @__PURE__ */ b("$ZodReadonly", (e, t) => {
  ge.init(e, t), ce(e._zod, "propValues", () => t.innerType._zod.propValues), ce(e._zod, "values", () => t.innerType._zod.values), ce(e._zod, "optin", () => t.innerType?._zod?.optin), ce(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then(Ao) : Ao(o);
  };
});
function Ao(e) {
  return e.value = Object.freeze(e.value), e;
}
const Dp = /* @__PURE__ */ b("$ZodCustom", (e, t) => {
  Re.init(e, t), ge.init(e, t), e._zod.parse = (n, r) => n, e._zod.check = (n) => {
    const r = n.value, o = t.fn(r);
    if (o instanceof Promise)
      return o.then((s) => So(s, n, r, e));
    So(o, n, r, e);
  };
});
function So(e, t, n, r) {
  if (!e) {
    const o = {
      code: "custom",
      input: n,
      inst: r,
      // incorporates params.error into issue reporting
      path: [...r._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !r._zod.def.abort
      // params: inst._zod.def.params,
    };
    r._zod.def.params && (o.params = r._zod.def.params), t.issues.push(Bt(o));
  }
}
var No;
class Up {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...n) {
    const r = n[0];
    return this._map.set(t, r), r && typeof r == "object" && "id" in r && this._idmap.set(r.id, t), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const n = this._map.get(t);
    return n && typeof n == "object" && "id" in n && this._idmap.delete(n.id), this._map.delete(t), this;
  }
  get(t) {
    const n = t._zod.parent;
    if (n) {
      const r = { ...this.get(n) ?? {} };
      delete r.id;
      const o = { ...r, ...this._map.get(t) };
      return Object.keys(o).length ? o : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function Mp() {
  return new Up();
}
(No = globalThis).__zod_globalRegistry ?? (No.__zod_globalRegistry = Mp());
const Pt = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function Lp(e, t) {
  return new e({
    type: "string",
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function jp(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Io(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Bp(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Vp(e, t) {
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
function Jp(e, t) {
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
function qp(e, t) {
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
function Wp(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Hp(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Kp(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Yp(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Xp(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Gp(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Qp(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function em(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function tm(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function nm(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function rm(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function om(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function sm(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function im(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function am(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function cm(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function um(e, t) {
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
function fm(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function lm(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function hm(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function dm(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function pm(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function mm(e, t) {
  return new e({
    type: "boolean",
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function gm(e) {
  return new e({
    type: "any"
  });
}
// @__NO_SIDE_EFFECTS__
function _m(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function ym(e, t) {
  return new e({
    type: "never",
    ...P(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Zo(e, t) {
  return new Ma({
    check: "less_than",
    ...P(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Pn(e, t) {
  return new Ma({
    check: "less_than",
    ...P(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function xo(e, t) {
  return new La({
    check: "greater_than",
    ...P(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Fn(e, t) {
  return new La({
    check: "greater_than",
    ...P(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Ro(e, t) {
  return new Id({
    check: "multiple_of",
    ...P(t),
    value: e
  });
}
// @__NO_SIDE_EFFECTS__
function Wa(e, t) {
  return new xd({
    check: "max_length",
    ...P(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function vn(e, t) {
  return new Rd({
    check: "min_length",
    ...P(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Ha(e, t) {
  return new Pd({
    check: "length_equals",
    ...P(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function vm(e, t) {
  return new Fd({
    check: "string_format",
    format: "regex",
    ...P(t),
    pattern: e
  });
}
// @__NO_SIDE_EFFECTS__
function bm(e) {
  return new Dd({
    check: "string_format",
    format: "lowercase",
    ...P(e)
  });
}
// @__NO_SIDE_EFFECTS__
function wm(e) {
  return new Ud({
    check: "string_format",
    format: "uppercase",
    ...P(e)
  });
}
// @__NO_SIDE_EFFECTS__
function km(e, t) {
  return new Md({
    check: "string_format",
    format: "includes",
    ...P(t),
    includes: e
  });
}
// @__NO_SIDE_EFFECTS__
function $m(e, t) {
  return new Ld({
    check: "string_format",
    format: "starts_with",
    ...P(t),
    prefix: e
  });
}
// @__NO_SIDE_EFFECTS__
function Em(e, t) {
  return new jd({
    check: "string_format",
    format: "ends_with",
    ...P(t),
    suffix: e
  });
}
// @__NO_SIDE_EFFECTS__
function Tt(e) {
  return new Bd({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function Om(e) {
  return /* @__PURE__ */ Tt((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function zm() {
  return /* @__PURE__ */ Tt((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function Cm() {
  return /* @__PURE__ */ Tt((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function Tm() {
  return /* @__PURE__ */ Tt((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function Am() {
  return /* @__PURE__ */ Tt((e) => Fh(e));
}
// @__NO_SIDE_EFFECTS__
function Sm(e, t, n) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...P(n)
  });
}
// @__NO_SIDE_EFFECTS__
function Nm(e, t, n) {
  const r = P(n);
  return r.abort ?? (r.abort = !0), new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...r
  });
}
// @__NO_SIDE_EFFECTS__
function Im(e, t, n) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...P(n)
  });
}
// @__NO_SIDE_EFFECTS__
function Zm(e) {
  const t = /* @__PURE__ */ xm((n) => (n.addIssue = (r) => {
    if (typeof r == "string")
      n.issues.push(Bt(r, n.value, t._zod.def));
    else {
      const o = r;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = n.value), o.inst ?? (o.inst = t), o.continue ?? (o.continue = !t._zod.def.abort), n.issues.push(Bt(o));
    }
  }, e(n.value, n)));
  return t;
}
// @__NO_SIDE_EFFECTS__
function xm(e, t) {
  const n = new Re({
    check: "custom",
    ...P(t)
  });
  return n._zod.check = e, n;
}
function Ka(e) {
  let t = e?.target ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: e?.metadata ?? Pt,
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
function ke(e, t, n = { path: [], schemaPath: [] }) {
  var r;
  const o = e._zod.def, s = t.seen.get(e);
  if (s)
    return s.count++, n.schemaPath.includes(e) && (s.cycle = n.path), s.schema;
  const i = { schema: {}, count: 1, cycle: void 0, path: n.path };
  t.seen.set(e, i);
  const a = e._zod.toJSONSchema?.();
  if (a)
    i.schema = a;
  else {
    const f = {
      ...n,
      schemaPath: [...n.schemaPath, e],
      path: n.path
    };
    if (e._zod.processJSONSchema)
      e._zod.processJSONSchema(t, i.schema, f);
    else {
      const h = i.schema, d = t.processors[o.type];
      if (!d)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${o.type}`);
      d(e, t, h, f);
    }
    const l = e._zod.parent;
    l && (i.ref || (i.ref = l), ke(l, t, f), t.seen.get(l).isParent = !0);
  }
  const c = t.metadataRegistry.get(e);
  return c && Object.assign(i.schema, c), t.io === "input" && Se(e) && (delete i.schema.examples, delete i.schema.default), t.io === "input" && i.schema._prefault && ((r = i.schema).default ?? (r.default = i.schema._prefault)), delete i.schema._prefault, t.seen.get(e).schema;
}
function Ya(e, t) {
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = /* @__PURE__ */ new Map();
  for (const i of e.seen.entries()) {
    const a = e.metadataRegistry.get(i[0])?.id;
    if (a) {
      const c = r.get(a);
      if (c && c !== i[0])
        throw new Error(`Duplicate schema id "${a}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      r.set(a, i[0]);
    }
  }
  const o = (i) => {
    const a = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const l = e.external.registry.get(i[0])?.id, h = e.external.uri ?? ((g) => g);
      if (l)
        return { ref: h(l) };
      const d = i[1].defId ?? i[1].schema.id ?? `schema${e.counter++}`;
      return i[1].defId = d, { defId: d, ref: `${h("__shared")}#/${a}/${d}` };
    }
    if (i[1] === n)
      return { ref: "#" };
    const u = `#/${a}/`, f = i[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: f, ref: u + f };
  }, s = (i) => {
    if (i[1].schema.$ref)
      return;
    const a = i[1], { ref: c, defId: u } = o(i);
    a.def = { ...a.schema }, u && (a.defId = u);
    const f = a.schema;
    for (const l in f)
      delete f[l];
    f.$ref = c;
  };
  if (e.cycles === "throw")
    for (const i of e.seen.entries()) {
      const a = i[1];
      if (a.cycle)
        throw new Error(`Cycle detected: #/${a.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const i of e.seen.entries()) {
    const a = i[1];
    if (t === i[0]) {
      s(i);
      continue;
    }
    if (e.external) {
      const u = e.external.registry.get(i[0])?.id;
      if (t !== i[0] && u) {
        s(i);
        continue;
      }
    }
    if (e.metadataRegistry.get(i[0])?.id) {
      s(i);
      continue;
    }
    if (a.cycle) {
      s(i);
      continue;
    }
    if (a.count > 1 && e.reused === "ref") {
      s(i);
      continue;
    }
  }
}
function Xa(e, t) {
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = (i) => {
    const a = e.seen.get(i);
    if (a.ref === null)
      return;
    const c = a.def ?? a.schema, u = { ...c }, f = a.ref;
    if (a.ref = null, f) {
      r(f);
      const h = e.seen.get(f), d = h.schema;
      if (d.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (c.allOf = c.allOf ?? [], c.allOf.push(d)) : Object.assign(c, d), Object.assign(c, u), i._zod.parent === f)
        for (const _ in c)
          _ === "$ref" || _ === "allOf" || _ in u || delete c[_];
      if (d.$ref && h.def)
        for (const _ in c)
          _ === "$ref" || _ === "allOf" || _ in h.def && JSON.stringify(c[_]) === JSON.stringify(h.def[_]) && delete c[_];
    }
    const l = i._zod.parent;
    if (l && l !== f) {
      r(l);
      const h = e.seen.get(l);
      if (h?.schema.$ref && (c.$ref = h.schema.$ref, h.def))
        for (const d in c)
          d === "$ref" || d === "allOf" || d in h.def && JSON.stringify(c[d]) === JSON.stringify(h.def[d]) && delete c[d];
    }
    e.override({
      zodSchema: i,
      jsonSchema: c,
      path: a.path ?? []
    });
  };
  for (const i of [...e.seen.entries()].reverse())
    r(i[0]);
  const o = {};
  if (e.target === "draft-2020-12" ? o.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? o.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? o.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
    const i = e.external.registry.get(t)?.id;
    if (!i)
      throw new Error("Schema is missing an `id` property");
    o.$id = e.external.uri(i);
  }
  Object.assign(o, n.def ?? n.schema);
  const s = e.external?.defs ?? {};
  for (const i of e.seen.entries()) {
    const a = i[1];
    a.def && a.defId && (s[a.defId] = a.def);
  }
  e.external || Object.keys(s).length > 0 && (e.target === "draft-2020-12" ? o.$defs = s : o.definitions = s);
  try {
    const i = JSON.parse(JSON.stringify(o));
    return Object.defineProperty(i, "~standard", {
      value: {
        ...t["~standard"],
        jsonSchema: {
          input: bn(t, "input", e.processors),
          output: bn(t, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), i;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function Se(e, t) {
  const n = t ?? { seen: /* @__PURE__ */ new Set() };
  if (n.seen.has(e))
    return !1;
  n.seen.add(e);
  const r = e._zod.def;
  if (r.type === "transform")
    return !0;
  if (r.type === "array")
    return Se(r.element, n);
  if (r.type === "set")
    return Se(r.valueType, n);
  if (r.type === "lazy")
    return Se(r.getter(), n);
  if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault")
    return Se(r.innerType, n);
  if (r.type === "intersection")
    return Se(r.left, n) || Se(r.right, n);
  if (r.type === "record" || r.type === "map")
    return Se(r.keyType, n) || Se(r.valueType, n);
  if (r.type === "pipe")
    return Se(r.in, n) || Se(r.out, n);
  if (r.type === "object") {
    for (const o in r.shape)
      if (Se(r.shape[o], n))
        return !0;
    return !1;
  }
  if (r.type === "union") {
    for (const o of r.options)
      if (Se(o, n))
        return !0;
    return !1;
  }
  if (r.type === "tuple") {
    for (const o of r.items)
      if (Se(o, n))
        return !0;
    return !!(r.rest && Se(r.rest, n));
  }
  return !1;
}
const Rm = (e, t = {}) => (n) => {
  const r = Ka({ ...n, processors: t });
  return ke(e, r), Ya(r, e), Xa(r, e);
}, bn = (e, t, n = {}) => (r) => {
  const { libraryOptions: o, target: s } = r ?? {}, i = Ka({ ...o ?? {}, target: s, io: t, processors: n });
  return ke(e, i), Ya(i, e), Xa(i, e);
}, Pm = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, Fm = (e, t, n, r) => {
  const o = n;
  o.type = "string";
  const { minimum: s, maximum: i, format: a, patterns: c, contentEncoding: u } = e._zod.bag;
  if (typeof s == "number" && (o.minLength = s), typeof i == "number" && (o.maxLength = i), a && (o.format = Pm[a] ?? a, o.format === "" && delete o.format, a === "time" && delete o.format), u && (o.contentEncoding = u), c && c.size > 0) {
    const f = [...c];
    f.length === 1 ? o.pattern = f[0].source : f.length > 1 && (o.allOf = [
      ...f.map((l) => ({
        ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: l.source
      }))
    ]);
  }
}, Dm = (e, t, n, r) => {
  const o = n, { minimum: s, maximum: i, format: a, multipleOf: c, exclusiveMaximum: u, exclusiveMinimum: f } = e._zod.bag;
  typeof a == "string" && a.includes("int") ? o.type = "integer" : o.type = "number", typeof f == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (o.minimum = f, o.exclusiveMinimum = !0) : o.exclusiveMinimum = f), typeof s == "number" && (o.minimum = s, typeof f == "number" && t.target !== "draft-04" && (f >= s ? delete o.minimum : delete o.exclusiveMinimum)), typeof u == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (o.maximum = u, o.exclusiveMaximum = !0) : o.exclusiveMaximum = u), typeof i == "number" && (o.maximum = i, typeof u == "number" && t.target !== "draft-04" && (u <= i ? delete o.maximum : delete o.exclusiveMaximum)), typeof c == "number" && (o.multipleOf = c);
}, Um = (e, t, n, r) => {
  n.type = "boolean";
}, Mm = (e, t, n, r) => {
  n.not = {};
}, Lm = (e, t, n, r) => {
}, jm = (e, t, n, r) => {
}, Bm = (e, t, n, r) => {
  const o = e._zod.def, s = Aa(o.entries);
  s.every((i) => typeof i == "number") && (n.type = "number"), s.every((i) => typeof i == "string") && (n.type = "string"), n.enum = s;
}, Vm = (e, t, n, r) => {
  if (t.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, Jm = (e, t, n, r) => {
  if (t.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, qm = (e, t, n, r) => {
  const o = n, s = e._zod.def, { minimum: i, maximum: a } = e._zod.bag;
  typeof i == "number" && (o.minItems = i), typeof a == "number" && (o.maxItems = a), o.type = "array", o.items = ke(s.element, t, { ...r, path: [...r.path, "items"] });
}, Wm = (e, t, n, r) => {
  const o = n, s = e._zod.def;
  o.type = "object", o.properties = {};
  const i = s.shape;
  for (const u in i)
    o.properties[u] = ke(i[u], t, {
      ...r,
      path: [...r.path, "properties", u]
    });
  const a = new Set(Object.keys(i)), c = new Set([...a].filter((u) => {
    const f = s.shape[u]._zod;
    return t.io === "input" ? f.optin === void 0 : f.optout === void 0;
  }));
  c.size > 0 && (o.required = Array.from(c)), s.catchall?._zod.def.type === "never" ? o.additionalProperties = !1 : s.catchall ? s.catchall && (o.additionalProperties = ke(s.catchall, t, {
    ...r,
    path: [...r.path, "additionalProperties"]
  })) : t.io === "output" && (o.additionalProperties = !1);
}, Hm = (e, t, n, r) => {
  const o = e._zod.def, s = o.inclusive === !1, i = o.options.map((a, c) => ke(a, t, {
    ...r,
    path: [...r.path, s ? "oneOf" : "anyOf", c]
  }));
  s ? n.oneOf = i : n.anyOf = i;
}, Km = (e, t, n, r) => {
  const o = e._zod.def, s = ke(o.left, t, {
    ...r,
    path: [...r.path, "allOf", 0]
  }), i = ke(o.right, t, {
    ...r,
    path: [...r.path, "allOf", 1]
  }), a = (u) => "allOf" in u && Object.keys(u).length === 1, c = [
    ...a(s) ? s.allOf : [s],
    ...a(i) ? i.allOf : [i]
  ];
  n.allOf = c;
}, Ym = (e, t, n, r) => {
  const o = n, s = e._zod.def;
  o.type = "object";
  const i = s.keyType, c = i._zod.bag?.patterns;
  if (s.mode === "loose" && c && c.size > 0) {
    const f = ke(s.valueType, t, {
      ...r,
      path: [...r.path, "patternProperties", "*"]
    });
    o.patternProperties = {};
    for (const l of c)
      o.patternProperties[l.source] = f;
  } else
    (t.target === "draft-07" || t.target === "draft-2020-12") && (o.propertyNames = ke(s.keyType, t, {
      ...r,
      path: [...r.path, "propertyNames"]
    })), o.additionalProperties = ke(s.valueType, t, {
      ...r,
      path: [...r.path, "additionalProperties"]
    });
  const u = i._zod.values;
  if (u) {
    const f = [...u].filter((l) => typeof l == "string" || typeof l == "number");
    f.length > 0 && (o.required = f);
  }
}, Xm = (e, t, n, r) => {
  const o = e._zod.def, s = ke(o.innerType, t, r), i = t.seen.get(e);
  t.target === "openapi-3.0" ? (i.ref = o.innerType, n.nullable = !0) : n.anyOf = [s, { type: "null" }];
}, Gm = (e, t, n, r) => {
  const o = e._zod.def;
  ke(o.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = o.innerType;
}, Qm = (e, t, n, r) => {
  const o = e._zod.def;
  ke(o.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = o.innerType, n.default = JSON.parse(JSON.stringify(o.defaultValue));
}, eg = (e, t, n, r) => {
  const o = e._zod.def;
  ke(o.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = o.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
}, tg = (e, t, n, r) => {
  const o = e._zod.def;
  ke(o.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = o.innerType;
  let i;
  try {
    i = o.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  n.default = i;
}, ng = (e, t, n, r) => {
  const o = e._zod.def, s = t.io === "input" ? o.in._zod.def.type === "transform" ? o.out : o.in : o.out;
  ke(s, t, r);
  const i = t.seen.get(e);
  i.ref = s;
}, rg = (e, t, n, r) => {
  const o = e._zod.def;
  ke(o.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = o.innerType, n.readOnly = !0;
}, Ga = (e, t, n, r) => {
  const o = e._zod.def;
  ke(o.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = o.innerType;
}, og = /* @__PURE__ */ b("ZodISODateTime", (e, t) => {
  rp.init(e, t), ye.init(e, t);
});
function sg(e) {
  return /* @__PURE__ */ um(og, e);
}
const ig = /* @__PURE__ */ b("ZodISODate", (e, t) => {
  op.init(e, t), ye.init(e, t);
});
function ag(e) {
  return /* @__PURE__ */ fm(ig, e);
}
const cg = /* @__PURE__ */ b("ZodISOTime", (e, t) => {
  sp.init(e, t), ye.init(e, t);
});
function ug(e) {
  return /* @__PURE__ */ lm(cg, e);
}
const fg = /* @__PURE__ */ b("ZodISODuration", (e, t) => {
  ip.init(e, t), ye.init(e, t);
});
function lg(e) {
  return /* @__PURE__ */ hm(fg, e);
}
const hg = (e, t) => {
  Za.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (n) => Yh(e, n)
      // enumerable: false,
    },
    flatten: {
      value: (n) => Kh(e, n)
      // enumerable: false,
    },
    addIssue: {
      value: (n) => {
        e.issues.push(n), e.message = JSON.stringify(e.issues, hr, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (n) => {
        e.issues.push(...n), e.message = JSON.stringify(e.issues, hr, 2);
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
}, Be = b("ZodError", hg, {
  Parent: Error
}), dg = /* @__PURE__ */ Jr(Be), pg = /* @__PURE__ */ qr(Be), mg = /* @__PURE__ */ zn(Be), gg = /* @__PURE__ */ Cn(Be), _g = /* @__PURE__ */ Qh(Be), yg = /* @__PURE__ */ ed(Be), vg = /* @__PURE__ */ td(Be), bg = /* @__PURE__ */ nd(Be), wg = /* @__PURE__ */ rd(Be), kg = /* @__PURE__ */ od(Be), $g = /* @__PURE__ */ sd(Be), Eg = /* @__PURE__ */ id(Be), _e = /* @__PURE__ */ b("ZodType", (e, t) => (ge.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: bn(e, "input"),
    output: bn(e, "output")
  }
}), e.toJSONSchema = Rm(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...n) => e.clone(ft(t, {
  checks: [
    ...t.checks ?? [],
    ...n.map((r) => typeof r == "function" ? { _zod: { check: r, def: { check: "custom" }, onattach: [] } } : r)
  ]
}), {
  parent: !0
}), e.with = e.check, e.clone = (n, r) => lt(e, n, r), e.brand = () => e, e.register = ((n, r) => (n.add(e, r), e)), e.parse = (n, r) => dg(e, n, r, { callee: e.parse }), e.safeParse = (n, r) => mg(e, n, r), e.parseAsync = async (n, r) => pg(e, n, r, { callee: e.parseAsync }), e.safeParseAsync = async (n, r) => gg(e, n, r), e.spa = e.safeParseAsync, e.encode = (n, r) => _g(e, n, r), e.decode = (n, r) => yg(e, n, r), e.encodeAsync = async (n, r) => vg(e, n, r), e.decodeAsync = async (n, r) => bg(e, n, r), e.safeEncode = (n, r) => wg(e, n, r), e.safeDecode = (n, r) => kg(e, n, r), e.safeEncodeAsync = async (n, r) => $g(e, n, r), e.safeDecodeAsync = async (n, r) => Eg(e, n, r), e.refine = (n, r) => e.check(v_(n, r)), e.superRefine = (n) => e.check(b_(n)), e.overwrite = (n) => e.check(/* @__PURE__ */ Tt(n)), e.optional = () => Uo(e), e.exactOptional = () => a_(e), e.nullable = () => Mo(e), e.nullish = () => Uo(Mo(e)), e.nonoptional = (n) => d_(e, n), e.array = () => Yg(e), e.or = (n) => Qg([e, n]), e.and = (n) => t_(e, n), e.transform = (n) => Lo(e, s_(n)), e.default = (n) => f_(e, n), e.prefault = (n) => h_(e, n), e.catch = (n) => m_(e, n), e.pipe = (n) => Lo(e, n), e.readonly = () => y_(e), e.describe = (n) => {
  const r = e.clone();
  return Pt.add(r, { description: n }), r;
}, Object.defineProperty(e, "description", {
  get() {
    return Pt.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...n) => {
  if (n.length === 0)
    return Pt.get(e);
  const r = e.clone();
  return Pt.add(r, n[0]), r;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (n) => n(e), e)), Qa = /* @__PURE__ */ b("_ZodString", (e, t) => {
  Wr.init(e, t), _e.init(e, t), e._zod.processJSONSchema = (r, o, s) => Fm(e, r, o);
  const n = e._zod.bag;
  e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, e.regex = (...r) => e.check(/* @__PURE__ */ vm(...r)), e.includes = (...r) => e.check(/* @__PURE__ */ km(...r)), e.startsWith = (...r) => e.check(/* @__PURE__ */ $m(...r)), e.endsWith = (...r) => e.check(/* @__PURE__ */ Em(...r)), e.min = (...r) => e.check(/* @__PURE__ */ vn(...r)), e.max = (...r) => e.check(/* @__PURE__ */ Wa(...r)), e.length = (...r) => e.check(/* @__PURE__ */ Ha(...r)), e.nonempty = (...r) => e.check(/* @__PURE__ */ vn(1, ...r)), e.lowercase = (r) => e.check(/* @__PURE__ */ bm(r)), e.uppercase = (r) => e.check(/* @__PURE__ */ wm(r)), e.trim = () => e.check(/* @__PURE__ */ zm()), e.normalize = (...r) => e.check(/* @__PURE__ */ Om(...r)), e.toLowerCase = () => e.check(/* @__PURE__ */ Cm()), e.toUpperCase = () => e.check(/* @__PURE__ */ Tm()), e.slugify = () => e.check(/* @__PURE__ */ Am());
}), Og = /* @__PURE__ */ b("ZodString", (e, t) => {
  Wr.init(e, t), Qa.init(e, t), e.email = (n) => e.check(/* @__PURE__ */ jp(zg, n)), e.url = (n) => e.check(/* @__PURE__ */ Wp(Cg, n)), e.jwt = (n) => e.check(/* @__PURE__ */ cm(jg, n)), e.emoji = (n) => e.check(/* @__PURE__ */ Hp(Tg, n)), e.guid = (n) => e.check(/* @__PURE__ */ Io(Po, n)), e.uuid = (n) => e.check(/* @__PURE__ */ Bp(Qt, n)), e.uuidv4 = (n) => e.check(/* @__PURE__ */ Vp(Qt, n)), e.uuidv6 = (n) => e.check(/* @__PURE__ */ Jp(Qt, n)), e.uuidv7 = (n) => e.check(/* @__PURE__ */ qp(Qt, n)), e.nanoid = (n) => e.check(/* @__PURE__ */ Kp(Ag, n)), e.guid = (n) => e.check(/* @__PURE__ */ Io(Po, n)), e.cuid = (n) => e.check(/* @__PURE__ */ Yp(Sg, n)), e.cuid2 = (n) => e.check(/* @__PURE__ */ Xp(Ng, n)), e.ulid = (n) => e.check(/* @__PURE__ */ Gp(Ig, n)), e.base64 = (n) => e.check(/* @__PURE__ */ sm(Ug, n)), e.base64url = (n) => e.check(/* @__PURE__ */ im(Mg, n)), e.xid = (n) => e.check(/* @__PURE__ */ Qp(Zg, n)), e.ksuid = (n) => e.check(/* @__PURE__ */ em(xg, n)), e.ipv4 = (n) => e.check(/* @__PURE__ */ tm(Rg, n)), e.ipv6 = (n) => e.check(/* @__PURE__ */ nm(Pg, n)), e.cidrv4 = (n) => e.check(/* @__PURE__ */ rm(Fg, n)), e.cidrv6 = (n) => e.check(/* @__PURE__ */ om(Dg, n)), e.e164 = (n) => e.check(/* @__PURE__ */ am(Lg, n)), e.datetime = (n) => e.check(sg(n)), e.date = (n) => e.check(ag(n)), e.time = (n) => e.check(ug(n)), e.duration = (n) => e.check(lg(n));
});
function Mv(e) {
  return /* @__PURE__ */ Lp(Og, e);
}
const ye = /* @__PURE__ */ b("ZodStringFormat", (e, t) => {
  pe.init(e, t), Qa.init(e, t);
}), zg = /* @__PURE__ */ b("ZodEmail", (e, t) => {
  Hd.init(e, t), ye.init(e, t);
}), Po = /* @__PURE__ */ b("ZodGUID", (e, t) => {
  qd.init(e, t), ye.init(e, t);
}), Qt = /* @__PURE__ */ b("ZodUUID", (e, t) => {
  Wd.init(e, t), ye.init(e, t);
}), Cg = /* @__PURE__ */ b("ZodURL", (e, t) => {
  Kd.init(e, t), ye.init(e, t);
}), Tg = /* @__PURE__ */ b("ZodEmoji", (e, t) => {
  Yd.init(e, t), ye.init(e, t);
}), Ag = /* @__PURE__ */ b("ZodNanoID", (e, t) => {
  Xd.init(e, t), ye.init(e, t);
}), Sg = /* @__PURE__ */ b("ZodCUID", (e, t) => {
  Gd.init(e, t), ye.init(e, t);
}), Ng = /* @__PURE__ */ b("ZodCUID2", (e, t) => {
  Qd.init(e, t), ye.init(e, t);
}), Ig = /* @__PURE__ */ b("ZodULID", (e, t) => {
  ep.init(e, t), ye.init(e, t);
}), Zg = /* @__PURE__ */ b("ZodXID", (e, t) => {
  tp.init(e, t), ye.init(e, t);
}), xg = /* @__PURE__ */ b("ZodKSUID", (e, t) => {
  np.init(e, t), ye.init(e, t);
}), Rg = /* @__PURE__ */ b("ZodIPv4", (e, t) => {
  ap.init(e, t), ye.init(e, t);
}), Pg = /* @__PURE__ */ b("ZodIPv6", (e, t) => {
  cp.init(e, t), ye.init(e, t);
}), Fg = /* @__PURE__ */ b("ZodCIDRv4", (e, t) => {
  up.init(e, t), ye.init(e, t);
}), Dg = /* @__PURE__ */ b("ZodCIDRv6", (e, t) => {
  fp.init(e, t), ye.init(e, t);
}), Ug = /* @__PURE__ */ b("ZodBase64", (e, t) => {
  lp.init(e, t), ye.init(e, t);
}), Mg = /* @__PURE__ */ b("ZodBase64URL", (e, t) => {
  dp.init(e, t), ye.init(e, t);
}), Lg = /* @__PURE__ */ b("ZodE164", (e, t) => {
  pp.init(e, t), ye.init(e, t);
}), jg = /* @__PURE__ */ b("ZodJWT", (e, t) => {
  gp.init(e, t), ye.init(e, t);
}), ec = /* @__PURE__ */ b("ZodNumber", (e, t) => {
  Ba.init(e, t), _e.init(e, t), e._zod.processJSONSchema = (r, o, s) => Dm(e, r, o), e.gt = (r, o) => e.check(/* @__PURE__ */ xo(r, o)), e.gte = (r, o) => e.check(/* @__PURE__ */ Fn(r, o)), e.min = (r, o) => e.check(/* @__PURE__ */ Fn(r, o)), e.lt = (r, o) => e.check(/* @__PURE__ */ Zo(r, o)), e.lte = (r, o) => e.check(/* @__PURE__ */ Pn(r, o)), e.max = (r, o) => e.check(/* @__PURE__ */ Pn(r, o)), e.int = (r) => e.check(Fo(r)), e.safe = (r) => e.check(Fo(r)), e.positive = (r) => e.check(/* @__PURE__ */ xo(0, r)), e.nonnegative = (r) => e.check(/* @__PURE__ */ Fn(0, r)), e.negative = (r) => e.check(/* @__PURE__ */ Zo(0, r)), e.nonpositive = (r) => e.check(/* @__PURE__ */ Pn(0, r)), e.multipleOf = (r, o) => e.check(/* @__PURE__ */ Ro(r, o)), e.step = (r, o) => e.check(/* @__PURE__ */ Ro(r, o)), e.finite = () => e;
  const n = e._zod.bag;
  e.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? 0.5), e.isFinite = !0, e.format = n.format ?? null;
});
function Lv(e) {
  return /* @__PURE__ */ dm(ec, e);
}
const Bg = /* @__PURE__ */ b("ZodNumberFormat", (e, t) => {
  _p.init(e, t), ec.init(e, t);
});
function Fo(e) {
  return /* @__PURE__ */ pm(Bg, e);
}
const Vg = /* @__PURE__ */ b("ZodBoolean", (e, t) => {
  yp.init(e, t), _e.init(e, t), e._zod.processJSONSchema = (n, r, o) => Um(e, n, r);
});
function jv(e) {
  return /* @__PURE__ */ mm(Vg, e);
}
const Jg = /* @__PURE__ */ b("ZodAny", (e, t) => {
  vp.init(e, t), _e.init(e, t), e._zod.processJSONSchema = (n, r, o) => Lm();
});
function Bv() {
  return /* @__PURE__ */ gm(Jg);
}
const qg = /* @__PURE__ */ b("ZodUnknown", (e, t) => {
  bp.init(e, t), _e.init(e, t), e._zod.processJSONSchema = (n, r, o) => jm();
});
function Do() {
  return /* @__PURE__ */ _m(qg);
}
const Wg = /* @__PURE__ */ b("ZodNever", (e, t) => {
  wp.init(e, t), _e.init(e, t), e._zod.processJSONSchema = (n, r, o) => Mm(e, n, r);
});
function Hg(e) {
  return /* @__PURE__ */ ym(Wg, e);
}
const Kg = /* @__PURE__ */ b("ZodArray", (e, t) => {
  kp.init(e, t), _e.init(e, t), e._zod.processJSONSchema = (n, r, o) => qm(e, n, r, o), e.element = t.element, e.min = (n, r) => e.check(/* @__PURE__ */ vn(n, r)), e.nonempty = (n) => e.check(/* @__PURE__ */ vn(1, n)), e.max = (n, r) => e.check(/* @__PURE__ */ Wa(n, r)), e.length = (n, r) => e.check(/* @__PURE__ */ Ha(n, r)), e.unwrap = () => e.element;
});
function Yg(e, t) {
  return /* @__PURE__ */ Sm(Kg, e, t);
}
const Xg = /* @__PURE__ */ b("ZodObject", (e, t) => {
  Ep.init(e, t), _e.init(e, t), e._zod.processJSONSchema = (n, r, o) => Wm(e, n, r, o), ce(e, "shape", () => t.shape), e.keyof = () => r_(Object.keys(e._zod.def.shape)), e.catchall = (n) => e.clone({ ...e._zod.def, catchall: n }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: Do() }), e.loose = () => e.clone({ ...e._zod.def, catchall: Do() }), e.strict = () => e.clone({ ...e._zod.def, catchall: Hg() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (n) => Vh(e, n), e.safeExtend = (n) => Jh(e, n), e.merge = (n) => qh(e, n), e.pick = (n) => jh(e, n), e.omit = (n) => Bh(e, n), e.partial = (...n) => Wh(tc, e, n[0]), e.required = (...n) => Hh(nc, e, n[0]);
});
function Vv(e, t) {
  const n = {
    type: "object",
    shape: e ?? {},
    ...P(t)
  };
  return new Xg(n);
}
const Gg = /* @__PURE__ */ b("ZodUnion", (e, t) => {
  Op.init(e, t), _e.init(e, t), e._zod.processJSONSchema = (n, r, o) => Hm(e, n, r, o), e.options = t.options;
});
function Qg(e, t) {
  return new Gg({
    type: "union",
    options: e,
    ...P(t)
  });
}
const e_ = /* @__PURE__ */ b("ZodIntersection", (e, t) => {
  zp.init(e, t), _e.init(e, t), e._zod.processJSONSchema = (n, r, o) => Km(e, n, r, o);
});
function t_(e, t) {
  return new e_({
    type: "intersection",
    left: e,
    right: t
  });
}
const n_ = /* @__PURE__ */ b("ZodRecord", (e, t) => {
  Cp.init(e, t), _e.init(e, t), e._zod.processJSONSchema = (n, r, o) => Ym(e, n, r, o), e.keyType = t.keyType, e.valueType = t.valueType;
});
function Jv(e, t, n) {
  return new n_({
    type: "record",
    keyType: e,
    valueType: t,
    ...P(n)
  });
}
const pr = /* @__PURE__ */ b("ZodEnum", (e, t) => {
  Tp.init(e, t), _e.init(e, t), e._zod.processJSONSchema = (r, o, s) => Bm(e, r, o), e.enum = t.entries, e.options = Object.values(t.entries);
  const n = new Set(Object.keys(t.entries));
  e.extract = (r, o) => {
    const s = {};
    for (const i of r)
      if (n.has(i))
        s[i] = t.entries[i];
      else
        throw new Error(`Key ${i} not found in enum`);
    return new pr({
      ...t,
      checks: [],
      ...P(o),
      entries: s
    });
  }, e.exclude = (r, o) => {
    const s = { ...t.entries };
    for (const i of r)
      if (n.has(i))
        delete s[i];
      else
        throw new Error(`Key ${i} not found in enum`);
    return new pr({
      ...t,
      checks: [],
      ...P(o),
      entries: s
    });
  };
});
function r_(e, t) {
  const n = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
  return new pr({
    type: "enum",
    entries: n,
    ...P(t)
  });
}
const o_ = /* @__PURE__ */ b("ZodTransform", (e, t) => {
  Ap.init(e, t), _e.init(e, t), e._zod.processJSONSchema = (n, r, o) => Jm(e, n), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      throw new Ca(e.constructor.name);
    n.addIssue = (s) => {
      if (typeof s == "string")
        n.issues.push(Bt(s, n.value, t));
      else {
        const i = s;
        i.fatal && (i.continue = !1), i.code ?? (i.code = "custom"), i.input ?? (i.input = n.value), i.inst ?? (i.inst = e), n.issues.push(Bt(i));
      }
    };
    const o = t.transform(n.value, n);
    return o instanceof Promise ? o.then((s) => (n.value = s, n)) : (n.value = o, n);
  };
});
function s_(e) {
  return new o_({
    type: "transform",
    transform: e
  });
}
const tc = /* @__PURE__ */ b("ZodOptional", (e, t) => {
  qa.init(e, t), _e.init(e, t), e._zod.processJSONSchema = (n, r, o) => Ga(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function Uo(e) {
  return new tc({
    type: "optional",
    innerType: e
  });
}
const i_ = /* @__PURE__ */ b("ZodExactOptional", (e, t) => {
  Sp.init(e, t), _e.init(e, t), e._zod.processJSONSchema = (n, r, o) => Ga(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function a_(e) {
  return new i_({
    type: "optional",
    innerType: e
  });
}
const c_ = /* @__PURE__ */ b("ZodNullable", (e, t) => {
  Np.init(e, t), _e.init(e, t), e._zod.processJSONSchema = (n, r, o) => Xm(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function Mo(e) {
  return new c_({
    type: "nullable",
    innerType: e
  });
}
const u_ = /* @__PURE__ */ b("ZodDefault", (e, t) => {
  Ip.init(e, t), _e.init(e, t), e._zod.processJSONSchema = (n, r, o) => Qm(e, n, r, o), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function f_(e, t) {
  return new u_({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Na(t);
    }
  });
}
const l_ = /* @__PURE__ */ b("ZodPrefault", (e, t) => {
  Zp.init(e, t), _e.init(e, t), e._zod.processJSONSchema = (n, r, o) => eg(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function h_(e, t) {
  return new l_({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Na(t);
    }
  });
}
const nc = /* @__PURE__ */ b("ZodNonOptional", (e, t) => {
  xp.init(e, t), _e.init(e, t), e._zod.processJSONSchema = (n, r, o) => Gm(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function d_(e, t) {
  return new nc({
    type: "nonoptional",
    innerType: e,
    ...P(t)
  });
}
const p_ = /* @__PURE__ */ b("ZodCatch", (e, t) => {
  Rp.init(e, t), _e.init(e, t), e._zod.processJSONSchema = (n, r, o) => tg(e, n, r, o), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function m_(e, t) {
  return new p_({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const g_ = /* @__PURE__ */ b("ZodPipe", (e, t) => {
  Pp.init(e, t), _e.init(e, t), e._zod.processJSONSchema = (n, r, o) => ng(e, n, r, o), e.in = t.in, e.out = t.out;
});
function Lo(e, t) {
  return new g_({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const __ = /* @__PURE__ */ b("ZodReadonly", (e, t) => {
  Fp.init(e, t), _e.init(e, t), e._zod.processJSONSchema = (n, r, o) => rg(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function y_(e) {
  return new __({
    type: "readonly",
    innerType: e
  });
}
const rc = /* @__PURE__ */ b("ZodCustom", (e, t) => {
  Dp.init(e, t), _e.init(e, t), e._zod.processJSONSchema = (n, r, o) => Vm(e, n);
});
function qv(e, t) {
  return /* @__PURE__ */ Nm(rc, (() => !0), t);
}
function v_(e, t = {}) {
  return /* @__PURE__ */ Im(rc, e, t);
}
function b_(e) {
  return /* @__PURE__ */ Zm(e);
}
var w_ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Jt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var en = { exports: {} }, Dn, jo;
function k_() {
  if (jo) return Dn;
  jo = 1;
  var e = 1e3, t = e * 60, n = t * 60, r = n * 24, o = r * 7, s = r * 365.25;
  Dn = function(f, l) {
    l = l || {};
    var h = typeof f;
    if (h === "string" && f.length > 0)
      return i(f);
    if (h === "number" && isFinite(f))
      return l.long ? c(f) : a(f);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(f)
    );
  };
  function i(f) {
    if (f = String(f), !(f.length > 100)) {
      var l = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        f
      );
      if (l) {
        var h = parseFloat(l[1]), d = (l[2] || "ms").toLowerCase();
        switch (d) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return h * s;
          case "weeks":
          case "week":
          case "w":
            return h * o;
          case "days":
          case "day":
          case "d":
            return h * r;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return h * n;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return h * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return h * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return h;
          default:
            return;
        }
      }
    }
  }
  function a(f) {
    var l = Math.abs(f);
    return l >= r ? Math.round(f / r) + "d" : l >= n ? Math.round(f / n) + "h" : l >= t ? Math.round(f / t) + "m" : l >= e ? Math.round(f / e) + "s" : f + "ms";
  }
  function c(f) {
    var l = Math.abs(f);
    return l >= r ? u(f, l, r, "day") : l >= n ? u(f, l, n, "hour") : l >= t ? u(f, l, t, "minute") : l >= e ? u(f, l, e, "second") : f + " ms";
  }
  function u(f, l, h, d) {
    var g = l >= h * 1.5;
    return Math.round(f / h) + " " + d + (g ? "s" : "");
  }
  return Dn;
}
var Un, Bo;
function $_() {
  if (Bo) return Un;
  Bo = 1;
  function e(t) {
    r.debug = r, r.default = r, r.coerce = u, r.disable = a, r.enable = s, r.enabled = c, r.humanize = k_(), r.destroy = f, Object.keys(t).forEach((l) => {
      r[l] = t[l];
    }), r.names = [], r.skips = [], r.formatters = {};
    function n(l) {
      let h = 0;
      for (let d = 0; d < l.length; d++)
        h = (h << 5) - h + l.charCodeAt(d), h |= 0;
      return r.colors[Math.abs(h) % r.colors.length];
    }
    r.selectColor = n;
    function r(l) {
      let h, d = null, g, _;
      function w(...T) {
        if (!w.enabled)
          return;
        const M = w, $ = Number(/* @__PURE__ */ new Date()), z = $ - (h || $);
        M.diff = z, M.prev = h, M.curr = $, h = $, T[0] = r.coerce(T[0]), typeof T[0] != "string" && T.unshift("%O");
        let S = 0;
        T[0] = T[0].replace(/%([a-zA-Z%])/g, (E, m) => {
          if (E === "%%")
            return "%";
          S++;
          const p = r.formatters[m];
          if (typeof p == "function") {
            const v = T[S];
            E = p.call(M, v), T.splice(S, 1), S--;
          }
          return E;
        }), r.formatArgs.call(M, T), (M.log || r.log).apply(M, T);
      }
      return w.namespace = l, w.useColors = r.useColors(), w.color = r.selectColor(l), w.extend = o, w.destroy = r.destroy, Object.defineProperty(w, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => d !== null ? d : (g !== r.namespaces && (g = r.namespaces, _ = r.enabled(l)), _),
        set: (T) => {
          d = T;
        }
      }), typeof r.init == "function" && r.init(w), w;
    }
    function o(l, h) {
      const d = r(this.namespace + (typeof h > "u" ? ":" : h) + l);
      return d.log = this.log, d;
    }
    function s(l) {
      r.save(l), r.namespaces = l, r.names = [], r.skips = [];
      const h = (typeof l == "string" ? l : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const d of h)
        d[0] === "-" ? r.skips.push(d.slice(1)) : r.names.push(d);
    }
    function i(l, h) {
      let d = 0, g = 0, _ = -1, w = 0;
      for (; d < l.length; )
        if (g < h.length && (h[g] === l[d] || h[g] === "*"))
          h[g] === "*" ? (_ = g, w = d, g++) : (d++, g++);
        else if (_ !== -1)
          g = _ + 1, w++, d = w;
        else
          return !1;
      for (; g < h.length && h[g] === "*"; )
        g++;
      return g === h.length;
    }
    function a() {
      const l = [
        ...r.names,
        ...r.skips.map((h) => "-" + h)
      ].join(",");
      return r.enable(""), l;
    }
    function c(l) {
      for (const h of r.skips)
        if (i(l, h))
          return !1;
      for (const h of r.names)
        if (i(l, h))
          return !0;
      return !1;
    }
    function u(l) {
      return l instanceof Error ? l.stack || l.message : l;
    }
    function f() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return r.enable(r.load()), r;
  }
  return Un = e, Un;
}
var Vo;
function E_() {
  return Vo || (Vo = 1, (function(e, t) {
    t.formatArgs = r, t.save = o, t.load = s, t.useColors = n, t.storage = i(), t.destroy = /* @__PURE__ */ (() => {
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
    function n() {
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
    function r(c) {
      if (c[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + c[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
        return;
      const u = "color: " + this.color;
      c.splice(1, 0, u, "color: inherit");
      let f = 0, l = 0;
      c[0].replace(/%[a-zA-Z%]/g, (h) => {
        h !== "%%" && (f++, h === "%c" && (l = f));
      }), c.splice(l, 0, u);
    }
    t.log = console.debug || console.log || (() => {
    });
    function o(c) {
      try {
        c ? t.storage.setItem("debug", c) : t.storage.removeItem("debug");
      } catch {
      }
    }
    function s() {
      let c;
      try {
        c = t.storage.getItem("debug") || t.storage.getItem("DEBUG");
      } catch {
      }
      return !c && typeof process < "u" && "env" in process && (c = void 0), c;
    }
    function i() {
      try {
        return localStorage;
      } catch {
      }
    }
    e.exports = $_()(t);
    const { formatters: a } = e.exports;
    a.j = function(c) {
      try {
        return JSON.stringify(c);
      } catch (u) {
        return "[UnexpectedJSONParseError]: " + u.message;
      }
    };
  })(en, en.exports)), en.exports;
}
var O_ = E_();
const Wv = /* @__PURE__ */ Jt(O_);
var tn = { exports: {} }, Mn, Jo;
function z_() {
  if (Jo) return Mn;
  Jo = 1;
  var e = 1e3, t = e * 60, n = t * 60, r = n * 24, o = r * 7, s = r * 365.25;
  Mn = function(f, l) {
    l = l || {};
    var h = typeof f;
    if (h === "string" && f.length > 0)
      return i(f);
    if (h === "number" && isFinite(f))
      return l.long ? c(f) : a(f);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(f)
    );
  };
  function i(f) {
    if (f = String(f), !(f.length > 100)) {
      var l = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        f
      );
      if (l) {
        var h = parseFloat(l[1]), d = (l[2] || "ms").toLowerCase();
        switch (d) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return h * s;
          case "weeks":
          case "week":
          case "w":
            return h * o;
          case "days":
          case "day":
          case "d":
            return h * r;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return h * n;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return h * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return h * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return h;
          default:
            return;
        }
      }
    }
  }
  function a(f) {
    var l = Math.abs(f);
    return l >= r ? Math.round(f / r) + "d" : l >= n ? Math.round(f / n) + "h" : l >= t ? Math.round(f / t) + "m" : l >= e ? Math.round(f / e) + "s" : f + "ms";
  }
  function c(f) {
    var l = Math.abs(f);
    return l >= r ? u(f, l, r, "day") : l >= n ? u(f, l, n, "hour") : l >= t ? u(f, l, t, "minute") : l >= e ? u(f, l, e, "second") : f + " ms";
  }
  function u(f, l, h, d) {
    var g = l >= h * 1.5;
    return Math.round(f / h) + " " + d + (g ? "s" : "");
  }
  return Mn;
}
var Ln, qo;
function C_() {
  if (qo) return Ln;
  qo = 1;
  function e(t) {
    r.debug = r, r.default = r, r.coerce = u, r.disable = a, r.enable = s, r.enabled = c, r.humanize = z_(), r.destroy = f, Object.keys(t).forEach((l) => {
      r[l] = t[l];
    }), r.names = [], r.skips = [], r.formatters = {};
    function n(l) {
      let h = 0;
      for (let d = 0; d < l.length; d++)
        h = (h << 5) - h + l.charCodeAt(d), h |= 0;
      return r.colors[Math.abs(h) % r.colors.length];
    }
    r.selectColor = n;
    function r(l) {
      let h, d = null, g, _;
      function w(...T) {
        if (!w.enabled)
          return;
        const M = w, $ = Number(/* @__PURE__ */ new Date()), z = $ - (h || $);
        M.diff = z, M.prev = h, M.curr = $, h = $, T[0] = r.coerce(T[0]), typeof T[0] != "string" && T.unshift("%O");
        let S = 0;
        T[0] = T[0].replace(/%([a-zA-Z%])/g, (E, m) => {
          if (E === "%%")
            return "%";
          S++;
          const p = r.formatters[m];
          if (typeof p == "function") {
            const v = T[S];
            E = p.call(M, v), T.splice(S, 1), S--;
          }
          return E;
        }), r.formatArgs.call(M, T), (M.log || r.log).apply(M, T);
      }
      return w.namespace = l, w.useColors = r.useColors(), w.color = r.selectColor(l), w.extend = o, w.destroy = r.destroy, Object.defineProperty(w, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => d !== null ? d : (g !== r.namespaces && (g = r.namespaces, _ = r.enabled(l)), _),
        set: (T) => {
          d = T;
        }
      }), typeof r.init == "function" && r.init(w), w;
    }
    function o(l, h) {
      const d = r(this.namespace + (typeof h > "u" ? ":" : h) + l);
      return d.log = this.log, d;
    }
    function s(l) {
      r.save(l), r.namespaces = l, r.names = [], r.skips = [];
      const h = (typeof l == "string" ? l : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const d of h)
        d[0] === "-" ? r.skips.push(d.slice(1)) : r.names.push(d);
    }
    function i(l, h) {
      let d = 0, g = 0, _ = -1, w = 0;
      for (; d < l.length; )
        if (g < h.length && (h[g] === l[d] || h[g] === "*"))
          h[g] === "*" ? (_ = g, w = d, g++) : (d++, g++);
        else if (_ !== -1)
          g = _ + 1, w++, d = w;
        else
          return !1;
      for (; g < h.length && h[g] === "*"; )
        g++;
      return g === h.length;
    }
    function a() {
      const l = [
        ...r.names,
        ...r.skips.map((h) => "-" + h)
      ].join(",");
      return r.enable(""), l;
    }
    function c(l) {
      for (const h of r.skips)
        if (i(l, h))
          return !1;
      for (const h of r.names)
        if (i(l, h))
          return !0;
      return !1;
    }
    function u(l) {
      return l instanceof Error ? l.stack || l.message : l;
    }
    function f() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return r.enable(r.load()), r;
  }
  return Ln = e, Ln;
}
var Wo;
function T_() {
  return Wo || (Wo = 1, (function(e, t) {
    t.formatArgs = r, t.save = o, t.load = s, t.useColors = n, t.storage = i(), t.destroy = /* @__PURE__ */ (() => {
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
    function n() {
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
    function r(c) {
      if (c[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + c[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
        return;
      const u = "color: " + this.color;
      c.splice(1, 0, u, "color: inherit");
      let f = 0, l = 0;
      c[0].replace(/%[a-zA-Z%]/g, (h) => {
        h !== "%%" && (f++, h === "%c" && (l = f));
      }), c.splice(l, 0, u);
    }
    t.log = console.debug || console.log || (() => {
    });
    function o(c) {
      try {
        c ? t.storage.setItem("debug", c) : t.storage.removeItem("debug");
      } catch {
      }
    }
    function s() {
      let c;
      try {
        c = t.storage.getItem("debug") || t.storage.getItem("DEBUG");
      } catch {
      }
      return !c && typeof process < "u" && "env" in process && (c = void 0), c;
    }
    function i() {
      try {
        return localStorage;
      } catch {
      }
    }
    e.exports = C_()(t);
    const { formatters: a } = e.exports;
    a.j = function(c) {
      try {
        return JSON.stringify(c);
      } catch (u) {
        return "[UnexpectedJSONParseError]: " + u.message;
      }
    };
  })(tn, tn.exports)), tn.exports;
}
var A_ = T_();
const Hv = /* @__PURE__ */ Jt(A_), Xe = /* @__PURE__ */ Object.create(null);
Xe.open = "0";
Xe.close = "1";
Xe.ping = "2";
Xe.pong = "3";
Xe.message = "4";
Xe.upgrade = "5";
Xe.noop = "6";
const sn = /* @__PURE__ */ Object.create(null);
Object.keys(Xe).forEach((e) => {
  sn[Xe[e]] = e;
});
const mr = { type: "error", data: "parser error" }, oc = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", sc = typeof ArrayBuffer == "function", ic = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Hr = ({ type: e, data: t }, n, r) => oc && t instanceof Blob ? n ? r(t) : Ho(t, r) : sc && (t instanceof ArrayBuffer || ic(t)) ? n ? r(t) : Ho(new Blob([t]), r) : r(Xe[e] + (t || "")), Ho = (e, t) => {
  const n = new FileReader();
  return n.onload = function() {
    const r = n.result.split(",")[1];
    t("b" + (r || ""));
  }, n.readAsDataURL(e);
};
function Ko(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let jn;
function S_(e, t) {
  if (oc && e.data instanceof Blob)
    return e.data.arrayBuffer().then(Ko).then(t);
  if (sc && (e.data instanceof ArrayBuffer || ic(e.data)))
    return t(Ko(e.data));
  Hr(e, !1, (n) => {
    jn || (jn = new TextEncoder()), t(jn.encode(n));
  });
}
const Yo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ft = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Yo.length; e++)
  Ft[Yo.charCodeAt(e)] = e;
const N_ = (e) => {
  let t = e.length * 0.75, n = e.length, r, o = 0, s, i, a, c;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const u = new ArrayBuffer(t), f = new Uint8Array(u);
  for (r = 0; r < n; r += 4)
    s = Ft[e.charCodeAt(r)], i = Ft[e.charCodeAt(r + 1)], a = Ft[e.charCodeAt(r + 2)], c = Ft[e.charCodeAt(r + 3)], f[o++] = s << 2 | i >> 4, f[o++] = (i & 15) << 4 | a >> 2, f[o++] = (a & 3) << 6 | c & 63;
  return u;
}, I_ = typeof ArrayBuffer == "function", Kr = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: ac(e, t)
    };
  const n = e.charAt(0);
  return n === "b" ? {
    type: "message",
    data: Z_(e.substring(1), t)
  } : sn[n] ? e.length > 1 ? {
    type: sn[n],
    data: e.substring(1)
  } : {
    type: sn[n]
  } : mr;
}, Z_ = (e, t) => {
  if (I_) {
    const n = N_(e);
    return ac(n, t);
  } else
    return { base64: !0, data: e };
}, ac = (e, t) => t === "blob" ? e instanceof Blob ? e : new Blob([e]) : e instanceof ArrayBuffer ? e : e.buffer, cc = "", x_ = (e, t) => {
  const n = e.length, r = new Array(n);
  let o = 0;
  e.forEach((s, i) => {
    Hr(s, !1, (a) => {
      r[i] = a, ++o === n && t(r.join(cc));
    });
  });
}, R_ = (e, t) => {
  const n = e.split(cc), r = [];
  for (let o = 0; o < n.length; o++) {
    const s = Kr(n[o], t);
    if (r.push(s), s.type === "error")
      break;
  }
  return r;
};
function P_() {
  return new TransformStream({
    transform(e, t) {
      S_(e, (n) => {
        const r = n.length;
        let o;
        if (r < 126)
          o = new Uint8Array(1), new DataView(o.buffer).setUint8(0, r);
        else if (r < 65536) {
          o = new Uint8Array(3);
          const s = new DataView(o.buffer);
          s.setUint8(0, 126), s.setUint16(1, r);
        } else {
          o = new Uint8Array(9);
          const s = new DataView(o.buffer);
          s.setUint8(0, 127), s.setBigUint64(1, BigInt(r));
        }
        e.data && typeof e.data != "string" && (o[0] |= 128), t.enqueue(o), t.enqueue(n);
      });
    }
  });
}
let Bn;
function nn(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function rn(e, t) {
  if (e[0].length === t)
    return e.shift();
  const n = new Uint8Array(t);
  let r = 0;
  for (let o = 0; o < t; o++)
    n[o] = e[0][r++], r === e[0].length && (e.shift(), r = 0);
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
}
function F_(e, t) {
  Bn || (Bn = new TextDecoder());
  const n = [];
  let r = 0, o = -1, s = !1;
  return new TransformStream({
    transform(i, a) {
      for (n.push(i); ; ) {
        if (r === 0) {
          if (nn(n) < 1)
            break;
          const c = rn(n, 1);
          s = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? r = 3 : o === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (nn(n) < 2)
            break;
          const c = rn(n, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (nn(n) < 8)
            break;
          const c = rn(n, 8), u = new DataView(c.buffer, c.byteOffset, c.length), f = u.getUint32(0);
          if (f > Math.pow(2, 21) - 1) {
            a.enqueue(mr);
            break;
          }
          o = f * Math.pow(2, 32) + u.getUint32(4), r = 3;
        } else {
          if (nn(n) < o)
            break;
          const c = rn(n, o);
          a.enqueue(Kr(s ? c : Bn.decode(c), t)), r = 0;
        }
        if (o === 0 || o > e) {
          a.enqueue(mr);
          break;
        }
      }
    }
  });
}
const uc = 4;
function we(e) {
  if (e) return D_(e);
}
function D_(e) {
  for (var t in we.prototype)
    e[t] = we.prototype[t];
  return e;
}
we.prototype.on = we.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
we.prototype.once = function(e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return n.fn = t, this.on(e, n), this;
};
we.prototype.off = we.prototype.removeListener = we.prototype.removeAllListeners = we.prototype.removeEventListener = function(e, t) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var n = this._callbacks["$" + e];
  if (!n) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + e], this;
  for (var r, o = 0; o < n.length; o++)
    if (r = n[o], r === t || r.fn === t) {
      n.splice(o, 1);
      break;
    }
  return n.length === 0 && delete this._callbacks["$" + e], this;
};
we.prototype.emit = function(e) {
  this._callbacks = this._callbacks || {};
  for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (n) {
    n = n.slice(0);
    for (var r = 0, o = n.length; r < o; ++r)
      n[r].apply(this, t);
  }
  return this;
};
we.prototype.emitReserved = we.prototype.emit;
we.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
we.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const An = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, n) => n(t, 0), je = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), U_ = "arraybuffer";
function fc(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const M_ = je.setTimeout, L_ = je.clearTimeout;
function Sn(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = M_.bind(je), e.clearTimeoutFn = L_.bind(je)) : (e.setTimeoutFn = je.setTimeout.bind(je), e.clearTimeoutFn = je.clearTimeout.bind(je));
}
const j_ = 1.33;
function B_(e) {
  return typeof e == "string" ? V_(e) : Math.ceil((e.byteLength || e.size) * j_);
}
function V_(e) {
  let t = 0, n = 0;
  for (let r = 0, o = e.length; r < o; r++)
    t = e.charCodeAt(r), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++, n += 4);
  return n;
}
function lc() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function J_(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
  return t;
}
function q_(e) {
  let t = {}, n = e.split("&");
  for (let r = 0, o = n.length; r < o; r++) {
    let s = n[r].split("=");
    t[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return t;
}
class W_ extends Error {
  constructor(t, n, r) {
    super(t), this.description = n, this.context = r, this.type = "TransportError";
  }
}
class Yr extends we {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, Sn(this, t), this.opts = t, this.query = t.query, this.socket = t.socket, this.supportsBinary = !t.forceBase64;
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
  onError(t, n, r) {
    return super.emitReserved("error", new W_(t, n, r)), this;
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
    const n = Kr(t, this.socket.binaryType);
    this.onPacket(n);
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
  createUri(t, n = {}) {
    return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(n);
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(t) {
    const n = J_(t);
    return n.length ? "?" + n : "";
  }
}
class H_ extends Yr {
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
    const n = () => {
      this.readyState = "paused", t();
    };
    if (this._polling || !this.writable) {
      let r = 0;
      this._polling && (r++, this.once("pollComplete", function() {
        --r || n();
      })), this.writable || (r++, this.once("drain", function() {
        --r || n();
      }));
    } else
      n();
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
    const n = (r) => {
      if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(r);
    };
    R_(t, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, x_(t, (n) => {
      this.doWrite(n, () => {
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
    const t = this.opts.secure ? "https" : "http", n = this.query || {};
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = lc()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(t, n);
  }
}
let hc = !1;
try {
  hc = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const K_ = hc;
function Y_() {
}
class X_ extends H_ {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(t) {
    if (super(t), typeof location < "u") {
      const n = location.protocol === "https:";
      let r = location.port;
      r || (r = n ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || r !== t.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data - data to send.
   * @param {Function} fn - called upon flush.
   * @private
   */
  doWrite(t, n) {
    const r = this.request({
      method: "POST",
      data: t
    });
    r.on("success", n), r.on("error", (o, s) => {
      this.onError("xhr post error", o, s);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)), t.on("error", (n, r) => {
      this.onError("xhr poll error", n, r);
    }), this.pollXhr = t;
  }
}
class Ke extends we {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, n, r) {
    super(), this.createRequest = t, Sn(this, r), this._opts = r, this._method = r.method || "GET", this._uri = n, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var t;
    const n = fc(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    n.xdomain = !!this._opts.xd;
    const r = this._xhr = this.createRequest(n);
    try {
      r.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let o in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(o) && r.setRequestHeader(o, this._opts.extraHeaders[o]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (t = this._opts.cookieJar) === null || t === void 0 || t.addCookies(r), "withCredentials" in r && (r.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout), r.onreadystatechange = () => {
        var o;
        r.readyState === 3 && ((o = this._opts.cookieJar) === null || o === void 0 || o.parseCookies(
          // @ts-ignore
          r.getResponseHeader("set-cookie")
        )), r.readyState === 4 && (r.status === 200 || r.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof r.status == "number" ? r.status : 0);
        }, 0));
      }, r.send(this._data);
    } catch (o) {
      this.setTimeoutFn(() => {
        this._onError(o);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = Ke.requestsCount++, Ke.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = Y_, t)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Ke.requests[this._index], this._xhr = null;
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
Ke.requestsCount = 0;
Ke.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Xo);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in je ? "pagehide" : "unload";
    addEventListener(e, Xo, !1);
  }
}
function Xo() {
  for (let e in Ke.requests)
    Ke.requests.hasOwnProperty(e) && Ke.requests[e].abort();
}
const G_ = (function() {
  const e = dc({
    xdomain: !1
  });
  return e && e.responseType !== null;
})();
class Q_ extends X_ {
  constructor(t) {
    super(t);
    const n = t && t.forceBase64;
    this.supportsBinary = G_ && !n;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new Ke(dc, this.uri(), t);
  }
}
function dc(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || K_))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new je[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const pc = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class ey extends Yr {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(), n = this.opts.protocols, r = pc ? {} : fc(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(t, n, r);
    } catch (o) {
      return this.emitReserved("error", o);
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
    for (let n = 0; n < t.length; n++) {
      const r = t[n], o = n === t.length - 1;
      Hr(r, this.supportsBinary, (s) => {
        try {
          this.doWrite(r, s);
        } catch {
        }
        o && An(() => {
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
    const t = this.opts.secure ? "wss" : "ws", n = this.query || {};
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = lc()), this.supportsBinary || (n.b64 = 1), this.createUri(t, n);
  }
}
const Vn = je.WebSocket || je.MozWebSocket;
class ty extends ey {
  createSocket(t, n, r) {
    return pc ? new Vn(t, n, r) : n ? new Vn(t, n) : new Vn(t);
  }
  doWrite(t, n) {
    this.ws.send(n);
  }
}
class ny extends Yr {
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
        const n = F_(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = t.readable.pipeThrough(n).getReader(), o = P_();
        o.readable.pipeTo(t.writable), this._writer = o.writable.getWriter();
        const s = () => {
          r.read().then(({ done: a, value: c }) => {
            a || (this.onPacket(c), s());
          }).catch((a) => {
          });
        };
        s();
        const i = { type: "open" };
        this.query.sid && (i.data = `{"sid":"${this.query.sid}"}`), this._writer.write(i).then(() => this.onOpen());
      });
    });
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n], o = n === t.length - 1;
      this._writer.write(r).then(() => {
        o && An(() => {
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
const ry = {
  websocket: ty,
  webtransport: ny,
  polling: Q_
}, oy = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, sy = [
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
function gr(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const t = e, n = e.indexOf("["), r = e.indexOf("]");
  n != -1 && r != -1 && (e = e.substring(0, n) + e.substring(n, r).replace(/:/g, ";") + e.substring(r, e.length));
  let o = oy.exec(e || ""), s = {}, i = 14;
  for (; i--; )
    s[sy[i]] = o[i] || "";
  return n != -1 && r != -1 && (s.source = t, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = iy(s, s.path), s.queryKey = ay(s, s.query), s;
}
function iy(e, t) {
  const n = /\/{2,9}/g, r = t.replace(n, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1), t.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function ay(e, t) {
  const n = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, o, s) {
    o && (n[o] = s);
  }), n;
}
const _r = typeof addEventListener == "function" && typeof removeEventListener == "function", an = [];
_r && addEventListener("offline", () => {
  an.forEach((e) => e());
}, !1);
class it extends we {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, n) {
    if (super(), this.binaryType = U_, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (n = t, t = null), t) {
      const r = gr(t);
      n.hostname = r.host, n.secure = r.protocol === "https" || r.protocol === "wss", n.port = r.port, r.query && (n.query = r.query);
    } else n.host && (n.hostname = gr(n.host).host);
    Sn(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, n.transports.forEach((r) => {
      const o = r.prototype.name;
      this.transports.push(o), this._transportsByName[o] = r;
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
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = q_(this.opts.query)), _r && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, an.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(t) {
    const n = Object.assign({}, this.opts.query);
    n.EIO = uc, n.transport = t, this.id && (n.sid = this.id);
    const r = Object.assign({}, this.opts, {
      query: n,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[t]);
    return new this._transportsByName[t](r);
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
    const t = this.opts.rememberUpgrade && it.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const n = this.createTransport(t);
    n.open(), this.setTransport(n);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (n) => this._onClose("transport close", n));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", it.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
          const n = new Error("server error");
          n.code = t.data, this._onError(n);
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
    let n = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const o = this.writeBuffer[r].data;
      if (o && (n += B_(o)), r > 0 && n > this._maxPayload)
        return this.writeBuffer.slice(0, r);
      n += 2;
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
    return t && (this._pingTimeoutTime = 0, An(() => {
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
  write(t, n, r) {
    return this._sendPacket("message", t, n, r), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(t, n, r) {
    return this._sendPacket("message", t, n, r), this;
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
  _sendPacket(t, n, r, o) {
    if (typeof n == "function" && (o = n, n = void 0), typeof r == "function" && (o = r, r = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    r = r || {}, r.compress = r.compress !== !1;
    const s = {
      type: t,
      data: n,
      options: r
    };
    this.emitReserved("packetCreate", s), this.writeBuffer.push(s), o && this.once("flush", o), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const t = () => {
      this._onClose("forced close"), this.transport.close();
    }, n = () => {
      this.off("upgrade", n), this.off("upgradeError", n), t();
    }, r = () => {
      this.once("upgrade", n), this.once("upgradeError", n);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? r() : t();
    }) : this.upgrading ? r() : t()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(t) {
    if (it.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", t), this._onClose("transport error", t);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(t, n) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), _r && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = an.indexOf(this._offlineEventListener);
        r !== -1 && an.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, n), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
it.protocol = uc;
class cy extends it {
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
    let n = this.createTransport(t), r = !1;
    it.priorWebsocketSuccess = !1;
    const o = () => {
      r || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (l) => {
        if (!r)
          if (l.type === "pong" && l.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            it.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (f(), this.setTransport(n), n.send([{ type: "upgrade" }]), this.emitReserved("upgrade", n), n = null, this.upgrading = !1, this.flush());
            });
          } else {
            const h = new Error("probe error");
            h.transport = n.name, this.emitReserved("upgradeError", h);
          }
      }));
    };
    function s() {
      r || (r = !0, f(), n.close(), n = null);
    }
    const i = (l) => {
      const h = new Error("probe error: " + l);
      h.transport = n.name, s(), this.emitReserved("upgradeError", h);
    };
    function a() {
      i("transport closed");
    }
    function c() {
      i("socket closed");
    }
    function u(l) {
      n && l.name !== n.name && s();
    }
    const f = () => {
      n.removeListener("open", o), n.removeListener("error", i), n.removeListener("close", a), this.off("close", c), this.off("upgrading", u);
    };
    n.once("open", o), n.once("error", i), n.once("close", a), this.once("close", c), this.once("upgrading", u), this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn(() => {
      r || n.open();
    }, 200) : n.open();
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
    const n = [];
    for (let r = 0; r < t.length; r++)
      ~this.transports.indexOf(t[r]) && n.push(t[r]);
    return n;
  }
}
let uy = class extends cy {
  constructor(t, n = {}) {
    const r = typeof t == "object" ? t : n;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((o) => ry[o]).filter((o) => !!o)), super(t, r);
  }
};
function fy(e, t = "", n) {
  let r = e;
  n = n || typeof location < "u" && location, e == null && (e = n.protocol + "//" + n.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = n.protocol + e : e = n.host + e), /^(https?|wss?):\/\//.test(e) || (typeof n < "u" ? e = n.protocol + "//" + e : e = "https://" + e), r = gr(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const s = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + s + ":" + r.port + t, r.href = r.protocol + "://" + s + (n && n.port === r.port ? "" : ":" + r.port), r;
}
const ly = typeof ArrayBuffer == "function", hy = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, mc = Object.prototype.toString, dy = typeof Blob == "function" || typeof Blob < "u" && mc.call(Blob) === "[object BlobConstructor]", py = typeof File == "function" || typeof File < "u" && mc.call(File) === "[object FileConstructor]";
function Xr(e) {
  return ly && (e instanceof ArrayBuffer || hy(e)) || dy && e instanceof Blob || py && e instanceof File;
}
function cn(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++)
      if (cn(e[n]))
        return !0;
    return !1;
  }
  if (Xr(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return cn(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && cn(e[n]))
      return !0;
  return !1;
}
function my(e) {
  const t = [], n = e.data, r = e;
  return r.data = yr(n, t), r.attachments = t.length, { packet: r, buffers: t };
}
function yr(e, t) {
  if (!e)
    return e;
  if (Xr(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let r = 0; r < e.length; r++)
      n[r] = yr(e[r], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = yr(e[r], t));
    return n;
  }
  return e;
}
function gy(e, t) {
  return e.data = vr(e.data, t), delete e.attachments, e;
}
function vr(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
      e[n] = vr(e[n], t);
  else if (typeof e == "object")
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = vr(e[n], t));
  return e;
}
const _y = [
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
var Q;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(Q || (Q = {}));
class yy {
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
    return (t.type === Q.EVENT || t.type === Q.ACK) && cn(t) ? this.encodeAsBinary({
      type: t.type === Q.EVENT ? Q.BINARY_EVENT : Q.BINARY_ACK,
      nsp: t.nsp,
      data: t.data,
      id: t.id
    }) : [this.encodeAsString(t)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(t) {
    let n = "" + t.type;
    return (t.type === Q.BINARY_EVENT || t.type === Q.BINARY_ACK) && (n += t.attachments + "-"), t.nsp && t.nsp !== "/" && (n += t.nsp + ","), t.id != null && (n += t.id), t.data != null && (n += JSON.stringify(t.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const n = my(t), r = this.encodeAsString(n.packet), o = n.buffers;
    return o.unshift(r), o;
  }
}
class Gr extends we {
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
    let n;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(t);
      const r = n.type === Q.BINARY_EVENT;
      r || n.type === Q.BINARY_ACK ? (n.type = r ? Q.EVENT : Q.ACK, this.reconstructor = new vy(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (Xr(t) || t.base64)
      if (this.reconstructor)
        n = this.reconstructor.takeBinaryData(t), n && (this.reconstructor = null, super.emitReserved("decoded", n));
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
    let n = 0;
    const r = {
      type: Number(t.charAt(0))
    };
    if (Q[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === Q.BINARY_EVENT || r.type === Q.BINARY_ACK) {
      const s = n + 1;
      for (; t.charAt(++n) !== "-" && n != t.length; )
        ;
      const i = t.substring(s, n);
      if (i != Number(i) || t.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      const a = Number(i);
      if (!by(a) || a < 0)
        throw new Error("Illegal attachments");
      if (a > this.opts.maxAttachments)
        throw new Error("too many attachments");
      r.attachments = a;
    }
    if (t.charAt(n + 1) === "/") {
      const s = n + 1;
      for (; ++n && !(t.charAt(n) === "," || n === t.length); )
        ;
      r.nsp = t.substring(s, n);
    } else
      r.nsp = "/";
    const o = t.charAt(n + 1);
    if (o !== "" && Number(o) == o) {
      const s = n + 1;
      for (; ++n; ) {
        const i = t.charAt(n);
        if (i == null || Number(i) != i) {
          --n;
          break;
        }
        if (n === t.length)
          break;
      }
      r.id = Number(t.substring(s, n + 1));
    }
    if (t.charAt(++n)) {
      const s = this.tryParse(t.substr(n));
      if (Gr.isPayloadValid(r.type, s))
        r.data = s;
      else
        throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.opts.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, n) {
    switch (t) {
      case Q.CONNECT:
        return Go(n);
      case Q.DISCONNECT:
        return n === void 0;
      case Q.CONNECT_ERROR:
        return typeof n == "string" || Go(n);
      case Q.EVENT:
      case Q.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && _y.indexOf(n[0]) === -1);
      case Q.ACK:
      case Q.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class vy {
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
      const n = gy(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
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
const by = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
};
function Go(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
const wy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, Decoder: Gr, Encoder: yy, get PacketType() {
  return Q;
} }, Symbol.toStringTag, { value: "Module" }));
function We(e, t, n) {
  return e.on(t, n), function() {
    e.off(t, n);
  };
}
const ky = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class gc extends we {
  /**
   * `Socket` constructor.
   */
  constructor(t, n, r) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = n, r && r.auth && (this.auth = r.auth), this._opts = Object.assign({}, r), this.io._autoConnect && this.open();
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
      We(t, "open", this.onopen.bind(this)),
      We(t, "packet", this.onpacket.bind(this)),
      We(t, "error", this.onerror.bind(this)),
      We(t, "close", this.onclose.bind(this))
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
  emit(t, ...n) {
    var r, o, s;
    if (ky.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (n.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const i = {
      type: Q.EVENT,
      data: n
    };
    if (i.options = {}, i.options.compress = this.flags.compress !== !1, typeof n[n.length - 1] == "function") {
      const f = this.ids++, l = n.pop();
      this._registerAckCallback(f, l), i.id = f;
    }
    const a = (o = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || o === void 0 ? void 0 : o.writable, c = this.connected && !(!((s = this.io.engine) === null || s === void 0) && s._hasPingExpired());
    return this.flags.volatile && !a || (c ? (this.notifyOutgoingListeners(i), this.packet(i)) : this.sendBuffer.push(i)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(t, n) {
    var r;
    const o = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (o === void 0) {
      this.acks[t] = n;
      return;
    }
    const s = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === t && this.sendBuffer.splice(a, 1);
      n.call(this, new Error("operation has timed out"));
    }, o), i = (...a) => {
      this.io.clearTimeoutFn(s), n.apply(this, a);
    };
    i.withError = !0, this.acks[t] = i;
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
  emitWithAck(t, ...n) {
    return new Promise((r, o) => {
      const s = (i, a) => i ? o(i) : r(a);
      s.withError = !0, n.push(s), this.emit(t, ...n);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(t) {
    let n;
    typeof t[t.length - 1] == "function" && (n = t.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    t.push((o, ...s) => (this._queue[0], o !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), n && n(o)) : (this._queue.shift(), n && n(null, ...s)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
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
    const n = this._queue[0];
    n.pending && !t || (n.pending = !0, n.tryCount++, this.flags = n.flags, this.emit.apply(this, n.args));
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
      type: Q.CONNECT,
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
  onclose(t, n) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", t, n), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((r) => String(r.id) === t)) {
        const r = this.acks[t];
        delete this.acks[t], r.withError && r.call(this, new Error("socket has been disconnected"));
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
        case Q.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case Q.EVENT:
        case Q.BINARY_EVENT:
          this.onevent(t);
          break;
        case Q.ACK:
        case Q.BINARY_ACK:
          this.onack(t);
          break;
        case Q.DISCONNECT:
          this.ondisconnect();
          break;
        case Q.CONNECT_ERROR:
          this.destroy();
          const r = new Error(t.data.message);
          r.data = t.data.data, this.emitReserved("connect_error", r);
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
    const n = t.data || [];
    t.id != null && n.push(this.ack(t.id)), this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const r of n)
        r.apply(this, t);
    }
    super.emit.apply(this, t), this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(t) {
    const n = this;
    let r = !1;
    return function(...o) {
      r || (r = !0, n.packet({
        type: Q.ACK,
        id: t,
        data: o
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
    const n = this.acks[t.id];
    typeof n == "function" && (delete this.acks[t.id], n.withError && t.data.unshift(null), n.apply(this, t.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(t, n) {
    this.id = t, this.recovered = n && this._pid === n, this._pid = n, this.connected = !0, this.emitBuffered(), this._drainQueue(!0), this.emitReserved("connect");
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
    return this.connected && this.packet({ type: Q.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
      const n = this._anyListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r])
          return n.splice(r, 1), this;
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
      const n = this._anyOutgoingListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r])
          return n.splice(r, 1), this;
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
      const n = this._anyOutgoingListeners.slice();
      for (const r of n)
        r.apply(this, t.data);
    }
  }
}
function At(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
At.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), n = Math.floor(t * this.jitter * e);
    e = (Math.floor(t * 10) & 1) == 0 ? e - n : e + n;
  }
  return Math.min(e, this.max) | 0;
};
At.prototype.reset = function() {
  this.attempts = 0;
};
At.prototype.setMin = function(e) {
  this.ms = e;
};
At.prototype.setMax = function(e) {
  this.max = e;
};
At.prototype.setJitter = function(e) {
  this.jitter = e;
};
class br extends we {
  constructor(t, n) {
    var r;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (n = t, t = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, Sn(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new At({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = t;
    const o = n.parser || wy;
    this.encoder = new o.Encoder(), this.decoder = new o.Decoder(), this._autoConnect = n.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length ? (this._reconnection = !!t, t || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this);
  }
  reconnectionDelay(t) {
    var n;
    return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t, (n = this.backoff) === null || n === void 0 || n.setMin(t), this);
  }
  randomizationFactor(t) {
    var n;
    return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t, (n = this.backoff) === null || n === void 0 || n.setJitter(t), this);
  }
  reconnectionDelayMax(t) {
    var n;
    return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, (n = this.backoff) === null || n === void 0 || n.setMax(t), this);
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
    this.engine = new uy(this.uri, this.opts);
    const n = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const o = We(n, "open", function() {
      r.onopen(), t && t();
    }), s = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), t ? t(a) : this.maybeReconnectOnOpen();
    }, i = We(n, "error", s);
    if (this._timeout !== !1) {
      const a = this._timeout, c = this.setTimeoutFn(() => {
        o(), s(new Error("timeout")), n.close();
      }, a);
      this.opts.autoUnref && c.unref(), this.subs.push(() => {
        this.clearTimeoutFn(c);
      });
    }
    return this.subs.push(o), this.subs.push(i), this;
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
      We(t, "ping", this.onping.bind(this)),
      We(t, "data", this.ondata.bind(this)),
      We(t, "error", this.onerror.bind(this)),
      We(t, "close", this.onclose.bind(this)),
      // @ts-ignore
      We(this.decoder, "decoded", this.ondecoded.bind(this))
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
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(t) {
    An(() => {
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
  socket(t, n) {
    let r = this.nsps[t];
    return r ? this._autoConnect && !r.active && r.connect() : (r = new gc(this, t, n), this.nsps[t] = r), r;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(t) {
    const n = Object.keys(this.nsps);
    for (const r of n)
      if (this.nsps[r].active)
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
    const n = this.encoder.encode(t);
    for (let r = 0; r < n.length; r++)
      this.engine.write(n[r], t.options);
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
  onclose(t, n) {
    var r;
    this.cleanup(), (r = this.engine) === null || r === void 0 || r.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, n), this._reconnection && !this.skipReconnect && this.reconnect();
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
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open((o) => {
          o ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", o)) : t.onreconnect();
        }));
      }, n);
      this.opts.autoUnref && r.unref(), this.subs.push(() => {
        this.clearTimeoutFn(r);
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
const Nt = {};
function Jn(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const n = fy(e, t.path || "/socket.io"), r = n.source, o = n.id, s = n.path, i = Nt[o] && s in Nt[o].nsps, a = t.forceNew || t["force new connection"] || t.multiplex === !1 || i;
  let c;
  return a ? c = new br(r, t) : (Nt[o] || (Nt[o] = new br(r, t)), c = Nt[o]), n.query && !t.query && (t.query = n.queryKey), c.socket(n.path, t);
}
Object.assign(Jn, {
  Manager: br,
  Socket: gc,
  io: Jn,
  connect: Jn
});
function Vt(e) {
  "@babel/helpers - typeof";
  return Vt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vt(e);
}
var He = Uint8Array, Ue = Uint16Array, Qr = Int32Array, eo = new He([
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
]), to = new He([
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
]), Qo = new He([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), _c = function(e, t) {
  for (var n = new Ue(31), r = 0; r < 31; ++r)
    n[r] = t += 1 << e[r - 1];
  for (var o = new Qr(n[30]), r = 1; r < 30; ++r)
    for (var s = n[r]; s < n[r + 1]; ++s)
      o[s] = s - n[r] << 5 | r;
  return { b: n, r: o };
}, yc = _c(eo, 2), $y = yc.b, wr = yc.r;
$y[28] = 258, wr[258] = 28;
var Ey = _c(to, 0), es = Ey.r, kr = new Ue(32768);
for (var le = 0; le < 32768; ++le) {
  var ot = (le & 43690) >> 1 | (le & 21845) << 1;
  ot = (ot & 52428) >> 2 | (ot & 13107) << 2, ot = (ot & 61680) >> 4 | (ot & 3855) << 4, kr[le] = ((ot & 65280) >> 8 | (ot & 255) << 8) >> 1;
}
var Mt = (function(e, t, n) {
  for (var r = e.length, o = 0, s = new Ue(t); o < r; ++o)
    e[o] && ++s[e[o] - 1];
  var i = new Ue(t);
  for (o = 1; o < t; ++o)
    i[o] = i[o - 1] + s[o - 1] << 1;
  var a;
  if (n) {
    a = new Ue(1 << t);
    var c = 15 - t;
    for (o = 0; o < r; ++o)
      if (e[o])
        for (var u = o << 4 | e[o], f = t - e[o], l = i[e[o] - 1]++ << f, h = l | (1 << f) - 1; l <= h; ++l)
          a[kr[l] >> c] = u;
  } else
    for (a = new Ue(r), o = 0; o < r; ++o)
      e[o] && (a[o] = kr[i[e[o] - 1]++] >> 15 - e[o]);
  return a;
}), pt = new He(288);
for (var le = 0; le < 144; ++le)
  pt[le] = 8;
for (var le = 144; le < 256; ++le)
  pt[le] = 9;
for (var le = 256; le < 280; ++le)
  pt[le] = 7;
for (var le = 280; le < 288; ++le)
  pt[le] = 8;
var wn = new He(32);
for (var le = 0; le < 32; ++le)
  wn[le] = 5;
var Oy = /* @__PURE__ */ Mt(pt, 9, 0), zy = /* @__PURE__ */ Mt(wn, 5, 0), vc = function(e) {
  return (e + 7) / 8 | 0;
}, Cy = function(e, t, n) {
  return (n == null || n > e.length) && (n = e.length), new He(e.subarray(t, n));
}, Ge = function(e, t, n) {
  n <<= t & 7;
  var r = t / 8 | 0;
  e[r] |= n, e[r + 1] |= n >> 8;
}, It = function(e, t, n) {
  n <<= t & 7;
  var r = t / 8 | 0;
  e[r] |= n, e[r + 1] |= n >> 8, e[r + 2] |= n >> 16;
}, qn = function(e, t) {
  for (var n = [], r = 0; r < e.length; ++r)
    e[r] && n.push({ s: r, f: e[r] });
  var o = n.length, s = n.slice();
  if (!o)
    return { t: wc, l: 0 };
  if (o == 1) {
    var i = new He(n[0].s + 1);
    return i[n[0].s] = 1, { t: i, l: 1 };
  }
  n.sort(function(S, F) {
    return S.f - F.f;
  }), n.push({ s: -1, f: 25001 });
  var a = n[0], c = n[1], u = 0, f = 1, l = 2;
  for (n[0] = { s: -1, f: a.f + c.f, l: a, r: c }; f != o - 1; )
    a = n[n[u].f < n[l].f ? u++ : l++], c = n[u != f && n[u].f < n[l].f ? u++ : l++], n[f++] = { s: -1, f: a.f + c.f, l: a, r: c };
  for (var h = s[0].s, r = 1; r < o; ++r)
    s[r].s > h && (h = s[r].s);
  var d = new Ue(h + 1), g = $r(n[f - 1], d, 0);
  if (g > t) {
    var r = 0, _ = 0, w = g - t, T = 1 << w;
    for (s.sort(function(F, E) {
      return d[E.s] - d[F.s] || F.f - E.f;
    }); r < o; ++r) {
      var M = s[r].s;
      if (d[M] > t)
        _ += T - (1 << g - d[M]), d[M] = t;
      else
        break;
    }
    for (_ >>= w; _ > 0; ) {
      var $ = s[r].s;
      d[$] < t ? _ -= 1 << t - d[$]++ - 1 : ++r;
    }
    for (; r >= 0 && _; --r) {
      var z = s[r].s;
      d[z] == t && (--d[z], ++_);
    }
    g = t;
  }
  return { t: new He(d), l: g };
}, $r = function(e, t, n) {
  return e.s == -1 ? Math.max($r(e.l, t, n + 1), $r(e.r, t, n + 1)) : t[e.s] = n;
}, ts = function(e) {
  for (var t = e.length; t && !e[--t]; )
    ;
  for (var n = new Ue(++t), r = 0, o = e[0], s = 1, i = function(c) {
    n[r++] = c;
  }, a = 1; a <= t; ++a)
    if (e[a] == o && a != t)
      ++s;
    else {
      if (!o && s > 2) {
        for (; s > 138; s -= 138)
          i(32754);
        s > 2 && (i(s > 10 ? s - 11 << 5 | 28690 : s - 3 << 5 | 12305), s = 0);
      } else if (s > 3) {
        for (i(o), --s; s > 6; s -= 6)
          i(8304);
        s > 2 && (i(s - 3 << 5 | 8208), s = 0);
      }
      for (; s--; )
        i(o);
      s = 1, o = e[a];
    }
  return { c: n.subarray(0, r), n: t };
}, Zt = function(e, t) {
  for (var n = 0, r = 0; r < t.length; ++r)
    n += e[r] * t[r];
  return n;
}, bc = function(e, t, n) {
  var r = n.length, o = vc(t + 2);
  e[o] = r & 255, e[o + 1] = r >> 8, e[o + 2] = e[o] ^ 255, e[o + 3] = e[o + 1] ^ 255;
  for (var s = 0; s < r; ++s)
    e[o + s + 4] = n[s];
  return (o + 4 + r) * 8;
}, ns = function(e, t, n, r, o, s, i, a, c, u, f) {
  Ge(t, f++, n), ++o[256];
  for (var l = qn(o, 15), h = l.t, d = l.l, g = qn(s, 15), _ = g.t, w = g.l, T = ts(h), M = T.c, $ = T.n, z = ts(_), S = z.c, F = z.n, E = new Ue(19), m = 0; m < M.length; ++m)
    ++E[M[m] & 31];
  for (var m = 0; m < S.length; ++m)
    ++E[S[m] & 31];
  for (var p = qn(E, 7), v = p.t, C = p.l, O = 19; O > 4 && !v[Qo[O - 1]]; --O)
    ;
  var R = u + 5 << 3, j = Zt(o, pt) + Zt(s, wn) + i, W = Zt(o, h) + Zt(s, _) + i + 14 + 3 * O + Zt(E, v) + 2 * E[16] + 3 * E[17] + 7 * E[18];
  if (c >= 0 && R <= j && R <= W)
    return bc(t, f, e.subarray(c, c + u));
  var X, I, L, A;
  if (Ge(t, f, 1 + (W < j)), f += 2, W < j) {
    X = Mt(h, d, 0), I = h, L = Mt(_, w, 0), A = _;
    var B = Mt(v, C, 0);
    Ge(t, f, $ - 257), Ge(t, f + 5, F - 1), Ge(t, f + 10, O - 4), f += 14;
    for (var m = 0; m < O; ++m)
      Ge(t, f + 3 * m, v[Qo[m]]);
    f += 3 * O;
    for (var Z = [M, S], D = 0; D < 2; ++D)
      for (var N = Z[D], m = 0; m < N.length; ++m) {
        var H = N[m] & 31;
        Ge(t, f, B[H]), f += v[H], H > 15 && (Ge(t, f, N[m] >> 5 & 127), f += N[m] >> 12);
      }
  } else
    X = Oy, I = pt, L = zy, A = wn;
  for (var m = 0; m < a; ++m) {
    var V = r[m];
    if (V > 255) {
      var H = V >> 18 & 31;
      It(t, f, X[H + 257]), f += I[H + 257], H > 7 && (Ge(t, f, V >> 23 & 31), f += eo[H]);
      var ie = V & 31;
      It(t, f, L[ie]), f += A[ie], ie > 3 && (It(t, f, V >> 5 & 8191), f += to[ie]);
    } else
      It(t, f, X[V]), f += I[V];
  }
  return It(t, f, X[256]), f + I[256];
}, Ty = /* @__PURE__ */ new Qr([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), wc = /* @__PURE__ */ new He(0), Ay = function(e, t, n, r, o, s) {
  var i = s.z || e.length, a = new He(r + i + 5 * (1 + Math.ceil(i / 7e3)) + o), c = a.subarray(r, a.length - o), u = s.l, f = (s.r || 0) & 7;
  if (t) {
    f && (c[0] = s.r >> 3);
    for (var l = Ty[t - 1], h = l >> 13, d = l & 8191, g = (1 << n) - 1, _ = s.p || new Ue(32768), w = s.h || new Ue(g + 1), T = Math.ceil(n / 3), M = 2 * T, $ = function(K) {
      return (e[K] ^ e[K + 1] << T ^ e[K + 2] << M) & g;
    }, z = new Qr(25e3), S = new Ue(288), F = new Ue(32), E = 0, m = 0, p = s.i || 0, v = 0, C = s.w || 0, O = 0; p + 2 < i; ++p) {
      var R = $(p), j = p & 32767, W = w[R];
      if (_[j] = W, w[R] = j, C <= p) {
        var X = i - p;
        if ((E > 7e3 || v > 24576) && (X > 423 || !u)) {
          f = ns(e, c, 0, z, S, F, m, v, O, p - O, f), v = E = m = 0, O = p;
          for (var I = 0; I < 286; ++I)
            S[I] = 0;
          for (var I = 0; I < 30; ++I)
            F[I] = 0;
        }
        var L = 2, A = 0, B = d, Z = j - W & 32767;
        if (X > 2 && R == $(p - Z))
          for (var D = Math.min(h, X) - 1, N = Math.min(32767, p), H = Math.min(258, X); Z <= N && --B && j != W; ) {
            if (e[p + L] == e[p + L - Z]) {
              for (var V = 0; V < H && e[p + V] == e[p + V - Z]; ++V)
                ;
              if (V > L) {
                if (L = V, A = Z, V > D)
                  break;
                for (var ie = Math.min(Z, V - 2), $e = 0, I = 0; I < ie; ++I) {
                  var q = p - Z + I & 32767, G = _[q], se = q - G & 32767;
                  se > $e && ($e = se, W = q);
                }
              }
            }
            j = W, W = _[j], Z += j - W & 32767;
          }
        if (A) {
          z[v++] = 268435456 | wr[L] << 18 | es[A];
          var U = wr[L] & 31, ae = es[A] & 31;
          m += eo[U] + to[ae], ++S[257 + U], ++F[ae], C = p + L, ++E;
        } else
          z[v++] = e[p], ++S[e[p]];
      }
    }
    for (p = Math.max(p, C); p < i; ++p)
      z[v++] = e[p], ++S[e[p]];
    f = ns(e, c, u, z, S, F, m, v, O, p - O, f), u || (s.r = f & 7 | c[f / 8 | 0] << 3, f -= 7, s.h = w, s.p = _, s.i = p, s.w = C);
  } else {
    for (var p = s.w || 0; p < i + u; p += 65535) {
      var ue = p + 65535;
      ue >= i && (c[f / 8 | 0] = u, ue = i), f = bc(c, f + 1, e.subarray(p, ue));
    }
    s.i = i;
  }
  return Cy(a, 0, r + vc(f) + o);
}, kc = function() {
  var e = 1, t = 0;
  return {
    p: function(n) {
      for (var r = e, o = t, s = n.length | 0, i = 0; i != s; ) {
        for (var a = Math.min(i + 2655, s); i < a; ++i)
          o += r += n[i];
        r = (r & 65535) + 15 * (r >> 16), o = (o & 65535) + 15 * (o >> 16);
      }
      e = r, t = o;
    },
    d: function() {
      return e %= 65521, t %= 65521, (e & 255) << 24 | (e & 65280) << 8 | (t & 255) << 8 | t >> 8;
    }
  };
}, Sy = function(e, t, n, r, o) {
  if (!o && (o = { l: 1 }, t.dictionary)) {
    var s = t.dictionary.subarray(-32768), i = new He(s.length + e.length);
    i.set(s), i.set(e, s.length), e = i, o.w = s.length;
  }
  return Ay(e, t.level == null ? 6 : t.level, t.mem == null ? o.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(e.length))) * 1.5) : 20 : 12 + t.mem, n, r, o);
}, $c = function(e, t, n) {
  for (; n; ++t)
    e[t] = n, n >>>= 8;
}, Ny = function(e, t) {
  var n = t.level, r = n == 0 ? 0 : n < 6 ? 1 : n == 9 ? 3 : 2;
  if (e[0] = 120, e[1] = r << 6 | (t.dictionary && 32), e[1] |= 31 - (e[0] << 8 | e[1]) % 31, t.dictionary) {
    var o = kc();
    o.p(t.dictionary), $c(e, 2, o.d());
  }
};
function Yv(e, t) {
  t || (t = {});
  var n = kc();
  n.p(e);
  var r = Sy(e, t, t.dictionary ? 6 : 2, 4);
  return Ny(r, t), $c(r, r.length - 4, n.d()), r;
}
var Iy = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Zy = 0;
try {
  Iy.decode(wc, { stream: !0 }), Zy = 1;
} catch {
}
function xy(e) {
  if (Array.isArray(e)) return e;
}
function Ry(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, s, i, a = [], c = !0, u = !1;
    try {
      if (s = (n = n.call(e)).next, t !== 0) for (; !(c = (r = s.call(n)).done) && (a.push(r.value), a.length !== t); c = !0) ;
    } catch (f) {
      u = !0, o = f;
    } finally {
      try {
        if (!c && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (u) throw o;
      }
    }
    return a;
  }
}
function rs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Py(e, t) {
  if (e) {
    if (typeof e == "string") return rs(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? rs(e, t) : void 0;
  }
}
function Fy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xv(e, t) {
  return xy(e) || Ry(e, t) || Py(e, t) || Fy();
}
function os(e, t = "utf8") {
  return new TextDecoder(t).decode(e);
}
const Dy = new TextEncoder();
function Uy(e) {
  return Dy.encode(e);
}
const My = 1024 * 8, Ly = (() => {
  const e = new Uint8Array(4), t = new Uint32Array(e.buffer);
  return !((t[0] = 1) & e[0]);
})(), Wn = {
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
class no {
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
  constructor(t = My, n = {}) {
    let r = !1;
    typeof t == "number" ? t = new ArrayBuffer(t) : (r = !0, this.lastWrittenByte = t.byteLength);
    const o = n.offset ? n.offset >>> 0 : 0, s = t.byteLength - o;
    let i = o;
    (ArrayBuffer.isView(t) || t instanceof no) && (t.byteLength !== t.buffer.byteLength && (i = t.byteOffset + o), t = t.buffer), r ? this.lastWrittenByte = s : this.lastWrittenByte = 0, this.buffer = t, this.length = s, this.byteLength = s, this.byteOffset = i, this.offset = 0, this.littleEndian = !0, this._data = new DataView(this.buffer, i, s), this._mark = 0, this._marks = [];
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
      const r = (this.offset + t) * 2, o = new Uint8Array(r);
      o.set(new Uint8Array(this.buffer)), this.buffer = o.buffer, this.length = r, this.byteLength = r, this._data = new DataView(this.buffer);
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
  readArray(t, n) {
    const r = Wn[n].BYTES_PER_ELEMENT * t, o = this.byteOffset + this.offset, s = this.buffer.slice(o, o + r);
    if (this.littleEndian === Ly && n !== "uint8" && n !== "int8") {
      const a = new Uint8Array(this.buffer.slice(o, o + r));
      a.reverse();
      const c = new Wn[n](a.buffer);
      return this.offset += r, c.reverse(), c;
    }
    const i = new Wn[n](s);
    return this.offset += r, i;
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
    let n = "";
    for (let r = 0; r < t; r++)
      n += this.readChar();
    return n;
  }
  /**
   * Read the next `n` bytes, return a UTF-8 decoded string and move pointer
   * forward by `n` bytes.
   * @param n - Number of bytes to read.
   * @returns The decoded string.
   */
  readUtf8(t = 1) {
    return os(this.readBytes(t));
  }
  /**
   * Read the next `n` bytes, return a string decoded with `encoding` and move pointer
   * forward by `n` bytes.
   * If no encoding is passed, the function is equivalent to @see {@link IOBuffer#readUtf8}
   * @param n - Number of bytes to read.
   * @param encoding - The encoding to use. Default is 'utf8'.
   * @returns The decoded string.
   */
  decodeText(t = 1, n = "utf8") {
    return os(this.readBytes(t), n);
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
    for (let n = 0; n < t.length; n++)
      this._data.setUint8(this.offset++, t[n]);
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
    for (let n = 0; n < t.length; n++)
      this.writeUint8(t.charCodeAt(n));
    return this;
  }
  /**
   * UTF-8 encode and write `str` to the current pointer offset and move pointer
   * forward according to the encoded length.
   * @param str - The string to write.
   * @returns This.
   */
  writeUtf8(t) {
    return this.writeBytes(Uy(t));
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
const Ec = [];
for (let e = 0; e < 256; e++) {
  let t = e;
  for (let n = 0; n < 8; n++)
    t & 1 ? t = 3988292384 ^ t >>> 1 : t = t >>> 1;
  Ec[e] = t;
}
const ss = 4294967295;
function jy(e, t, n) {
  let r = e;
  for (let o = 0; o < n; o++)
    r = Ec[(r ^ t[o]) & 255] ^ r >>> 8;
  return r;
}
function By(e, t) {
  return (jy(ss, e, t) ^ ss) >>> 0;
}
function is(e, t, n) {
  const r = e.readUint32(), o = By(new Uint8Array(e.buffer, e.byteOffset + e.offset - t - 4, t), t);
  if (o !== r)
    throw new Error(`CRC mismatch for chunk ${n}. Expected ${r}, found ${o}`);
}
function Oc(e, t, n) {
  for (let r = 0; r < n; r++)
    t[r] = e[r];
}
function zc(e, t, n, r) {
  let o = 0;
  for (; o < r; o++)
    t[o] = e[o];
  for (; o < n; o++)
    t[o] = e[o] + t[o - r] & 255;
}
function Cc(e, t, n, r) {
  let o = 0;
  if (n.length === 0)
    for (; o < r; o++)
      t[o] = e[o];
  else
    for (; o < r; o++)
      t[o] = e[o] + n[o] & 255;
}
function Tc(e, t, n, r, o) {
  let s = 0;
  if (n.length === 0) {
    for (; s < o; s++)
      t[s] = e[s];
    for (; s < r; s++)
      t[s] = e[s] + (t[s - o] >> 1) & 255;
  } else {
    for (; s < o; s++)
      t[s] = e[s] + (n[s] >> 1) & 255;
    for (; s < r; s++)
      t[s] = e[s] + (t[s - o] + n[s] >> 1) & 255;
  }
}
function Ac(e, t, n, r, o) {
  let s = 0;
  if (n.length === 0) {
    for (; s < o; s++)
      t[s] = e[s];
    for (; s < r; s++)
      t[s] = e[s] + t[s - o] & 255;
  } else {
    for (; s < o; s++)
      t[s] = e[s] + n[s] & 255;
    for (; s < r; s++)
      t[s] = e[s] + Vy(t[s - o], n[s], n[s - o]) & 255;
  }
}
function Vy(e, t, n) {
  const r = e + t - n, o = Math.abs(r - e), s = Math.abs(r - t), i = Math.abs(r - n);
  return o <= s && o <= i ? e : s <= i ? t : n;
}
function Jy(e, t, n, r, o, s) {
  switch (e) {
    case 0:
      Oc(t, n, o);
      break;
    case 1:
      zc(t, n, o, s);
      break;
    case 2:
      Cc(t, n, r, o);
      break;
    case 3:
      Tc(t, n, r, o, s);
      break;
    case 4:
      Ac(t, n, r, o, s);
      break;
    default:
      throw new Error(`Unsupported filter: ${e}`);
  }
}
const qy = new Uint16Array([255]), Wy = new Uint8Array(qy.buffer), Hy = Wy[0] === 255;
function Ky(e) {
  const { data: t, width: n, height: r, channels: o, depth: s } = e, i = [
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
  ], a = Math.ceil(s / 8) * o, c = new Uint8Array(r * n * a);
  let u = 0;
  for (let f = 0; f < 7; f++) {
    const l = i[f], h = Math.ceil((n - l.x) / l.xStep), d = Math.ceil((r - l.y) / l.yStep);
    if (h <= 0 || d <= 0)
      continue;
    const g = h * a, _ = new Uint8Array(g);
    for (let w = 0; w < d; w++) {
      const T = t[u++], M = t.subarray(u, u + g);
      u += g;
      const $ = new Uint8Array(g);
      Jy(T, M, $, _, g, a), _.set($);
      for (let z = 0; z < h; z++) {
        const S = l.x + z * l.xStep, F = l.y + w * l.yStep;
        if (!(S >= n || F >= r))
          for (let E = 0; E < a; E++)
            c[(F * n + S) * a + E] = $[z * a + E];
      }
    }
  }
  if (s === 16) {
    const f = new Uint16Array(c.buffer);
    if (Hy)
      for (let l = 0; l < f.length; l++)
        f[l] = Yy(f[l]);
    return f;
  } else
    return c;
}
function Yy(e) {
  return (e & 255) << 8 | e >> 8 & 255;
}
const Xy = new Uint16Array([255]), Gy = new Uint8Array(Xy.buffer), Qy = Gy[0] === 255, ev = new Uint8Array(0);
function as(e) {
  const { data: t, width: n, height: r, channels: o, depth: s } = e, i = Math.ceil(s / 8) * o, a = Math.ceil(s / 8 * o * n), c = new Uint8Array(r * a);
  let u = ev, f = 0, l, h;
  for (let d = 0; d < r; d++) {
    switch (l = t.subarray(f + 1, f + 1 + a), h = c.subarray(d * a, (d + 1) * a), t[f]) {
      case 0:
        Oc(l, h, a);
        break;
      case 1:
        zc(l, h, a, i);
        break;
      case 2:
        Cc(l, h, u, a);
        break;
      case 3:
        Tc(l, h, u, a, i);
        break;
      case 4:
        Ac(l, h, u, a, i);
        break;
      default:
        throw new Error(`Unsupported filter: ${t[f]}`);
    }
    u = h, f += a + 1;
  }
  if (s === 16) {
    const d = new Uint16Array(c.buffer);
    if (Qy)
      for (let g = 0; g < d.length; g++)
        d[g] = tv(d[g]);
    return d;
  } else
    return c;
}
function tv(e) {
  return (e & 255) << 8 | e >> 8 & 255;
}
const un = Uint8Array.of(137, 80, 78, 71, 13, 10, 26, 10);
function cs(e) {
  if (!nv(e.readBytes(un.length)))
    throw new Error("wrong PNG signature");
}
function nv(e) {
  if (e.length < un.length)
    return !1;
  for (let t = 0; t < un.length; t++)
    if (e[t] !== un[t])
      return !1;
  return !0;
}
const rv = "tEXt", ov = 0, Sc = new TextDecoder("latin1");
function sv(e) {
  if (av(e), e.length === 0 || e.length > 79)
    throw new Error("keyword length must be between 1 and 79");
}
const iv = /^[\u0000-\u00FF]*$/;
function av(e) {
  if (!iv.test(e))
    throw new Error("invalid latin1 text");
}
function cv(e, t, n) {
  const r = Nc(t);
  e[r] = uv(t, n - r.length - 1);
}
function Nc(e) {
  for (e.mark(); e.readByte() !== ov; )
    ;
  const t = e.offset;
  e.reset();
  const n = Sc.decode(e.readBytes(t - e.offset - 1));
  return e.skip(1), sv(n), n;
}
function uv(e, t) {
  return Sc.decode(e.readBytes(t));
}
const De = {
  UNKNOWN: -1,
  GREYSCALE: 0,
  TRUECOLOUR: 2,
  INDEXED_COLOUR: 3,
  GREYSCALE_ALPHA: 4,
  TRUECOLOUR_ALPHA: 6
}, Hn = {
  UNKNOWN: -1,
  DEFLATE: 0
}, us = {
  UNKNOWN: -1,
  ADAPTIVE: 0
}, Kn = {
  UNKNOWN: -1,
  NO_INTERLACE: 0,
  ADAM7: 1
}, on = {
  NONE: 0,
  BACKGROUND: 1,
  PREVIOUS: 2
}, Yn = {
  SOURCE: 0,
  OVER: 1
};
class fv extends no {
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
  constructor(t, n = {}) {
    super(t);
    const { checkCrc: r = !1 } = n;
    this._checkCrc = r, this._inflator = new ro(), this._png = {
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
    }, this._end = !1, this._hasPalette = !1, this._palette = [], this._hasTransparency = !1, this._transparency = new Uint16Array(0), this._compressionMethod = Hn.UNKNOWN, this._filterMethod = us.UNKNOWN, this._interlaceMethod = Kn.UNKNOWN, this._colorType = De.UNKNOWN, this._isAnimated = !1, this._numberOfFrames = 1, this._numberOfPlays = 0, this._frames = [], this._writingDataChunks = !1, this.setBigEndian();
  }
  decode() {
    for (cs(this); !this._end; ) {
      const t = this.readUint32(), n = this.readChars(4);
      this.decodeChunk(t, n);
    }
    return this.decodeImage(), this._png;
  }
  decodeApng() {
    for (cs(this); !this._end; ) {
      const t = this.readUint32(), n = this.readChars(4);
      this.decodeApngChunk(t, n);
    }
    return this.decodeApngImage(), this._apng;
  }
  // https://www.w3.org/TR/PNG/#5Chunk-layout
  decodeChunk(t, n) {
    const r = this.offset;
    switch (n) {
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
      case rv:
        cv(this._png.text, this, t);
        break;
      case "pHYs":
        this.decodepHYs();
        break;
      default:
        this.skip(t);
        break;
    }
    if (this.offset - r !== t)
      throw new Error(`Length mismatch while decoding chunk ${n}`);
    this._checkCrc ? is(this, t + 4, n) : this.skip(4);
  }
  decodeApngChunk(t, n) {
    const r = this.offset;
    switch (n !== "fdAT" && n !== "IDAT" && this._writingDataChunks && this.pushDataToFrame(), n) {
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
        this.decodeChunk(t, n), this.offset = r + t;
        break;
    }
    if (this.offset - r !== t)
      throw new Error(`Length mismatch while decoding chunk ${n}`);
    this._checkCrc ? is(this, t + 4, n) : this.skip(4);
  }
  // https://www.w3.org/TR/PNG/#11IHDR
  decodeIHDR() {
    const t = this._png;
    t.width = this.readUint32(), t.height = this.readUint32(), t.depth = lv(this.readUint8());
    const n = this.readUint8();
    this._colorType = n;
    let r;
    switch (n) {
      case De.GREYSCALE:
        r = 1;
        break;
      case De.TRUECOLOUR:
        r = 3;
        break;
      case De.INDEXED_COLOUR:
        r = 1;
        break;
      case De.GREYSCALE_ALPHA:
        r = 2;
        break;
      case De.TRUECOLOUR_ALPHA:
        r = 4;
        break;
      // Kept for exhaustiveness.
      // eslint-disable-next-line unicorn/no-useless-switch-case
      case De.UNKNOWN:
      default:
        throw new Error(`Unknown color type: ${n}`);
    }
    if (this._png.channels = r, this._compressionMethod = this.readUint8(), this._compressionMethod !== Hn.DEFLATE)
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
    const n = t / 3;
    this._hasPalette = !0;
    const r = [];
    this._palette = r;
    for (let o = 0; o < n; o++)
      r.push([this.readUint8(), this.readUint8(), this.readUint8()]);
  }
  // https://www.w3.org/TR/PNG/#11IDAT
  decodeIDAT(t) {
    this._writingDataChunks = !0;
    const n = t, r = this.offset + this.byteOffset;
    if (this._inflator.push(new Uint8Array(this.buffer, r, n)), this._inflator.err)
      throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    this.skip(t);
  }
  decodeFDAT(t) {
    this._writingDataChunks = !0;
    let n = t, r = this.offset + this.byteOffset;
    if (r += 4, n -= 4, this._inflator.push(new Uint8Array(this.buffer, r, n)), this._inflator.err)
      throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    this.skip(t);
  }
  // https://www.w3.org/TR/PNG/#11tRNS
  decodetRNS(t) {
    switch (this._colorType) {
      case De.GREYSCALE:
      case De.TRUECOLOUR: {
        if (t % 2 !== 0)
          throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${t}`);
        if (t / 2 > this._png.width * this._png.height)
          throw new Error(`tRNS chunk contains more alpha values than there are pixels (${t / 2} vs ${this._png.width * this._png.height})`);
        this._hasTransparency = !0, this._transparency = new Uint16Array(t / 2);
        for (let n = 0; n < t / 2; n++)
          this._transparency[n] = this.readUint16();
        break;
      }
      case De.INDEXED_COLOUR: {
        if (t > this._palette.length)
          throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${t} vs ${this._palette.length})`);
        let n = 0;
        for (; n < t; n++) {
          const r = this.readByte();
          this._palette[n].push(r);
        }
        for (; n < this._palette.length; n++)
          this._palette[n].push(255);
        break;
      }
      // Kept for exhaustiveness.
      /* eslint-disable unicorn/no-useless-switch-case */
      case De.UNKNOWN:
      case De.GREYSCALE_ALPHA:
      case De.TRUECOLOUR_ALPHA:
      default:
        throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`);
    }
  }
  // https://www.w3.org/TR/PNG/#11iCCP
  decodeiCCP(t) {
    const n = Nc(this), r = this.readUint8();
    if (r !== Hn.DEFLATE)
      throw new Error(`Unsupported iCCP compression method: ${r}`);
    const o = this.readBytes(t - n.length - 2);
    this._png.iccEmbeddedProfile = {
      name: n,
      profile: Rc(o)
    };
  }
  // https://www.w3.org/TR/PNG/#11pHYs
  decodepHYs() {
    const t = this.readUint32(), n = this.readUint32(), r = this.readByte();
    this._png.resolution = { x: t, y: n, unit: r };
  }
  decodeApngImage() {
    this._apng.width = this._png.width, this._apng.height = this._png.height, this._apng.channels = this._png.channels, this._apng.depth = this._png.depth, this._apng.numberOfFrames = this._numberOfFrames, this._apng.numberOfPlays = this._numberOfPlays, this._apng.text = this._png.text, this._apng.resolution = this._png.resolution;
    for (let t = 0; t < this._numberOfFrames; t++) {
      const n = {
        sequenceNumber: this._frames[t].sequenceNumber,
        delayNumber: this._frames[t].delayNumber,
        delayDenominator: this._frames[t].delayDenominator,
        data: this._apng.depth === 8 ? new Uint8Array(this._apng.width * this._apng.height * this._apng.channels) : new Uint16Array(this._apng.width * this._apng.height * this._apng.channels)
      }, r = this._frames.at(t);
      if (r) {
        if (r.data = as({
          data: r.data,
          width: r.width,
          height: r.height,
          channels: this._apng.channels,
          depth: this._apng.depth
        }), this._hasPalette && (this._apng.palette = this._palette), this._hasTransparency && (this._apng.transparency = this._transparency), t === 0 || r.xOffset === 0 && r.yOffset === 0 && r.width === this._png.width && r.height === this._png.height)
          n.data = r.data;
        else {
          const o = this._apng.frames.at(t - 1);
          this.disposeFrame(r, o, n), this.addFrameDataToCanvas(n, r);
        }
        this._apng.frames.push(n);
      }
    }
    return this._apng;
  }
  disposeFrame(t, n, r) {
    switch (t.disposeOp) {
      case on.NONE:
        break;
      case on.BACKGROUND:
        for (let o = 0; o < this._png.height; o++)
          for (let s = 0; s < this._png.width; s++) {
            const i = (o * t.width + s) * this._png.channels;
            for (let a = 0; a < this._png.channels; a++)
              r.data[i + a] = 0;
          }
        break;
      case on.PREVIOUS:
        r.data.set(n.data);
        break;
      default:
        throw new Error("Unknown disposeOp");
    }
  }
  addFrameDataToCanvas(t, n) {
    const r = 1 << this._png.depth, o = (s, i) => {
      const a = ((s + n.yOffset) * this._png.width + n.xOffset + i) * this._png.channels, c = (s * n.width + i) * this._png.channels;
      return { index: a, frameIndex: c };
    };
    switch (n.blendOp) {
      case Yn.SOURCE:
        for (let s = 0; s < n.height; s++)
          for (let i = 0; i < n.width; i++) {
            const { index: a, frameIndex: c } = o(s, i);
            for (let u = 0; u < this._png.channels; u++)
              t.data[a + u] = n.data[c + u];
          }
        break;
      // https://www.w3.org/TR/png-3/#13Alpha-channel-processing
      case Yn.OVER:
        for (let s = 0; s < n.height; s++)
          for (let i = 0; i < n.width; i++) {
            const { index: a, frameIndex: c } = o(s, i);
            for (let u = 0; u < this._png.channels; u++) {
              const f = n.data[c + this._png.channels - 1] / r, l = u % (this._png.channels - 1) === 0 ? 1 : n.data[c + u], h = Math.floor(f * l + (1 - f) * t.data[a + u]);
              t.data[a + u] += h;
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
    if (this._filterMethod !== us.ADAPTIVE)
      throw new Error(`Filter method ${this._filterMethod} not supported`);
    if (this._interlaceMethod === Kn.NO_INTERLACE)
      this._png.data = as({
        data: t,
        width: this._png.width,
        height: this._png.height,
        channels: this._png.channels,
        depth: this._png.depth
      });
    else if (this._interlaceMethod === Kn.ADAM7)
      this._png.data = Ky({
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
    const t = this._inflator.result, n = this._frames.at(-1);
    n ? n.data = t : this._frames.push({
      sequenceNumber: 0,
      width: this._png.width,
      height: this._png.height,
      xOffset: 0,
      yOffset: 0,
      delayNumber: 0,
      delayDenominator: 0,
      disposeOp: on.NONE,
      blendOp: Yn.SOURCE,
      data: t
    }), this._inflator = new ro(), this._writingDataChunks = !1;
  }
}
function lv(e) {
  if (e !== 1 && e !== 2 && e !== 4 && e !== 8 && e !== 16)
    throw new Error(`invalid bit depth: ${e}`);
  return e;
}
var fs;
(function(e) {
  e[e.UNKNOWN = 0] = "UNKNOWN", e[e.METRE = 1] = "METRE";
})(fs || (fs = {}));
function Gv(e, t) {
  return new fv(e, t).decode();
}
var fn = { exports: {} };
var hv = fn.exports, ls;
function dv() {
  return ls || (ls = 1, (function(e, t) {
    ((n, r) => {
      e.exports = r();
    })(hv, function n() {
      var r = typeof self < "u" ? self : typeof window < "u" ? window : r !== void 0 ? r : {}, o, s = !r.document && !!r.postMessage, i = r.IS_PAPA_WORKER || !1, a = {}, c = 0, u = {};
      function f(m) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, function(p) {
          var v = S(p);
          v.chunkSize = parseInt(v.chunkSize), p.step || p.chunk || (v.chunkSize = null), this._handle = new _(v), (this._handle.streamer = this)._config = v;
        }.call(this, m), this.parseChunk = function(p, v) {
          var C = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < C) {
            let R = this._config.newline;
            R || (O = this._config.quoteChar || '"', R = this._handle.guessLineEndings(p, O)), p = [...p.split(R).slice(C)].join(R);
          }
          this.isFirstChunk && E(this._config.beforeFirstChunk) && (O = this._config.beforeFirstChunk(p)) !== void 0 && (p = O), this.isFirstChunk = !1, this._halted = !1;
          var C = this._partialLine + p, O = (this._partialLine = "", this._handle.parse(C, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (p = O.meta.cursor, C = (this._finished || (this._partialLine = C.substring(p - this._baseIndex), this._baseIndex = p), O && O.data && (this._rowCount += O.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), i) r.postMessage({ results: O, workerId: u.WORKER_ID, finished: C });
            else if (E(this._config.chunk) && !v) {
              if (this._config.chunk(O, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = O = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(O.data), this._completeResults.errors = this._completeResults.errors.concat(O.errors), this._completeResults.meta = O.meta), this._completed || !C || !E(this._config.complete) || O && O.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), C || O && O.meta.paused || this._nextChunk(), O;
          }
          this._halted = !0;
        }, this._sendError = function(p) {
          E(this._config.error) ? this._config.error(p) : i && this._config.error && r.postMessage({ workerId: u.WORKER_ID, error: p, finished: !1 });
        };
      }
      function l(m) {
        var p;
        (m = m || {}).chunkSize || (m.chunkSize = u.RemoteChunkSize), f.call(this, m), this._nextChunk = s ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(v) {
          this._input = v, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (p = new XMLHttpRequest(), this._config.withCredentials && (p.withCredentials = this._config.withCredentials), s || (p.onload = F(this._chunkLoaded, this), p.onerror = F(this._chunkError, this)), p.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !s), this._config.downloadRequestHeaders) {
              var v, C = this._config.downloadRequestHeaders;
              for (v in C) p.setRequestHeader(v, C[v]);
            }
            var O;
            this._config.chunkSize && (O = this._start + this._config.chunkSize - 1, p.setRequestHeader("Range", "bytes=" + this._start + "-" + O));
            try {
              p.send(this._config.downloadRequestBody);
            } catch (R) {
              this._chunkError(R.message);
            }
            s && p.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          p.readyState === 4 && (p.status < 200 || 400 <= p.status ? this._chunkError() : (this._start += this._config.chunkSize || p.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((v) => (v = v.getResponseHeader("Content-Range")) !== null ? parseInt(v.substring(v.lastIndexOf("/") + 1)) : -1)(p), this.parseChunk(p.responseText)));
        }, this._chunkError = function(v) {
          v = p.statusText || v, this._sendError(new Error(v));
        };
      }
      function h(m) {
        (m = m || {}).chunkSize || (m.chunkSize = u.LocalChunkSize), f.call(this, m);
        var p, v, C = typeof FileReader < "u";
        this.stream = function(O) {
          this._input = O, v = O.slice || O.webkitSlice || O.mozSlice, C ? ((p = new FileReader()).onload = F(this._chunkLoaded, this), p.onerror = F(this._chunkError, this)) : p = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var O = this._input, R = (this._config.chunkSize && (R = Math.min(this._start + this._config.chunkSize, this._input.size), O = v.call(O, this._start, R)), p.readAsText(O, this._config.encoding));
          C || this._chunkLoaded({ target: { result: R } });
        }, this._chunkLoaded = function(O) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(O.target.result);
        }, this._chunkError = function() {
          this._sendError(p.error);
        };
      }
      function d(m) {
        var p;
        f.call(this, m = m || {}), this.stream = function(v) {
          return p = v, this._nextChunk();
        }, this._nextChunk = function() {
          var v, C;
          if (!this._finished) return v = this._config.chunkSize, p = v ? (C = p.substring(0, v), p.substring(v)) : (C = p, ""), this._finished = !p, this.parseChunk(C);
        };
      }
      function g(m) {
        f.call(this, m = m || {});
        var p = [], v = !0, C = !1;
        this.pause = function() {
          f.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          f.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(O) {
          this._input = O, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          C && p.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), p.length ? this.parseChunk(p.shift()) : v = !0;
        }, this._streamData = F(function(O) {
          try {
            p.push(typeof O == "string" ? O : O.toString(this._config.encoding)), v && (v = !1, this._checkIsFinished(), this.parseChunk(p.shift()));
          } catch (R) {
            this._streamError(R);
          }
        }, this), this._streamError = F(function(O) {
          this._streamCleanUp(), this._sendError(O);
        }, this), this._streamEnd = F(function() {
          this._streamCleanUp(), C = !0, this._streamData("");
        }, this), this._streamCleanUp = F(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function _(m) {
        var p, v, C, O, R = Math.pow(2, 53), j = -R, W = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, X = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, I = this, L = 0, A = 0, B = !1, Z = !1, D = [], N = { data: [], errors: [], meta: {} };
        function H(q) {
          return m.skipEmptyLines === "greedy" ? q.join("").trim() === "" : q.length === 1 && q[0].length === 0;
        }
        function V() {
          if (N && C && ($e("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + u.DefaultDelimiter + "'"), C = !1), m.skipEmptyLines && (N.data = N.data.filter(function(U) {
            return !H(U);
          })), ie()) {
            let U = function(ae, ue) {
              E(m.transformHeader) && (ae = m.transformHeader(ae, ue)), D.push(ae);
            };
            if (N) if (Array.isArray(N.data[0])) {
              for (var q = 0; ie() && q < N.data.length; q++) N.data[q].forEach(U);
              N.data.splice(0, 1);
            } else N.data.forEach(U);
          }
          function G(U, ae) {
            for (var ue = m.header ? {} : [], K = 0; K < U.length; K++) {
              var te = K, Y = U[K], Y = ((Ne, J) => ((fe) => (m.dynamicTypingFunction && m.dynamicTyping[fe] === void 0 && (m.dynamicTyping[fe] = m.dynamicTypingFunction(fe)), (m.dynamicTyping[fe] || m.dynamicTyping) === !0))(Ne) ? J === "true" || J === "TRUE" || J !== "false" && J !== "FALSE" && (((fe) => {
                if (W.test(fe) && (fe = parseFloat(fe), j < fe && fe < R))
                  return 1;
              })(J) ? parseFloat(J) : X.test(J) ? new Date(J) : J === "" ? null : J) : J)(te = m.header ? K >= D.length ? "__parsed_extra" : D[K] : te, Y = m.transform ? m.transform(Y, te) : Y);
              te === "__parsed_extra" ? (ue[te] = ue[te] || [], ue[te].push(Y)) : ue[te] = Y;
            }
            return m.header && (K > D.length ? $e("FieldMismatch", "TooManyFields", "Too many fields: expected " + D.length + " fields but parsed " + K, A + ae) : K < D.length && $e("FieldMismatch", "TooFewFields", "Too few fields: expected " + D.length + " fields but parsed " + K, A + ae)), ue;
          }
          var se;
          N && (m.header || m.dynamicTyping || m.transform) && (se = 1, !N.data.length || Array.isArray(N.data[0]) ? (N.data = N.data.map(G), se = N.data.length) : N.data = G(N.data, 0), m.header && N.meta && (N.meta.fields = D), A += se);
        }
        function ie() {
          return m.header && D.length === 0;
        }
        function $e(q, G, se, U) {
          q = { type: q, code: G, message: se }, U !== void 0 && (q.row = U), N.errors.push(q);
        }
        E(m.step) && (O = m.step, m.step = function(q) {
          N = q, ie() ? V() : (V(), N.data.length !== 0 && (L += q.data.length, m.preview && L > m.preview ? v.abort() : (N.data = N.data[0], O(N, I))));
        }), this.parse = function(q, G, se) {
          var U = m.quoteChar || '"', U = (m.newline || (m.newline = this.guessLineEndings(q, U)), C = !1, m.delimiter ? E(m.delimiter) && (m.delimiter = m.delimiter(q), N.meta.delimiter = m.delimiter) : ((U = ((ae, ue, K, te, Y) => {
            var Ne, J, fe, Ce;
            Y = Y || [",", "	", "|", ";", u.RECORD_SEP, u.UNIT_SEP];
            for (var Ie = 0; Ie < Y.length; Ie++) {
              for (var Ee, Pe = Y[Ie], ne = 0, Ze = 0, ve = 0, Oe = (fe = void 0, new T({ comments: te, delimiter: Pe, newline: ue, preview: 10 }).parse(ae)), Fe = 0; Fe < Oe.data.length; Fe++) K && H(Oe.data[Fe]) ? ve++ : (Ee = Oe.data[Fe].length, Ze += Ee, fe === void 0 ? fe = Ee : 0 < Ee && (ne += Math.abs(Ee - fe), fe = Ee));
              0 < Oe.data.length && (Ze /= Oe.data.length - ve), (J === void 0 || ne <= J) && (Ce === void 0 || Ce < Ze) && 1.99 < Ze && (J = ne, Ne = Pe, Ce = Ze);
            }
            return { successful: !!(m.delimiter = Ne), bestDelimiter: Ne };
          })(q, m.newline, m.skipEmptyLines, m.comments, m.delimitersToGuess)).successful ? m.delimiter = U.bestDelimiter : (C = !0, m.delimiter = u.DefaultDelimiter), N.meta.delimiter = m.delimiter), S(m));
          return m.preview && m.header && U.preview++, p = q, v = new T(U), N = v.parse(p, G, se), V(), B ? { meta: { paused: !0 } } : N || { meta: { paused: !1 } };
        }, this.paused = function() {
          return B;
        }, this.pause = function() {
          B = !0, v.abort(), p = E(m.chunk) ? "" : p.substring(v.getCharIndex());
        }, this.resume = function() {
          I.streamer._halted ? (B = !1, I.streamer.parseChunk(p, !0)) : setTimeout(I.resume, 3);
        }, this.aborted = function() {
          return Z;
        }, this.abort = function() {
          Z = !0, v.abort(), N.meta.aborted = !0, E(m.complete) && m.complete(N), p = "";
        }, this.guessLineEndings = function(ae, U) {
          ae = ae.substring(0, 1048576);
          var U = new RegExp(w(U) + "([^]*?)" + w(U), "gm"), se = (ae = ae.replace(U, "")).split("\r"), U = ae.split(`
`), ae = 1 < U.length && U[0].length < se[0].length;
          if (se.length === 1 || ae) return `
`;
          for (var ue = 0, K = 0; K < se.length; K++) se[K][0] === `
` && ue++;
          return ue >= se.length / 2 ? `\r
` : "\r";
        };
      }
      function w(m) {
        return m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function T(m) {
        var p = (m = m || {}).delimiter, v = m.newline, C = m.comments, O = m.step, R = m.preview, j = m.fastMode, W = null, X = !1, I = m.quoteChar == null ? '"' : m.quoteChar, L = I;
        if (m.escapeChar !== void 0 && (L = m.escapeChar), (typeof p != "string" || -1 < u.BAD_DELIMITERS.indexOf(p)) && (p = ","), C === p) throw new Error("Comment character same as delimiter");
        C === !0 ? C = "#" : (typeof C != "string" || -1 < u.BAD_DELIMITERS.indexOf(C)) && (C = !1), v !== `
` && v !== "\r" && v !== `\r
` && (v = `
`);
        var A = 0, B = !1;
        this.parse = function(Z, D, N) {
          if (typeof Z != "string") throw new Error("Input must be a string");
          var H = Z.length, V = p.length, ie = v.length, $e = C.length, q = E(O), G = [], se = [], U = [], ae = A = 0;
          if (!Z) return ne();
          if (j || j !== !1 && Z.indexOf(I) === -1) {
            for (var ue = Z.split(v), K = 0; K < ue.length; K++) {
              if (U = ue[K], A += U.length, K !== ue.length - 1) A += v.length;
              else if (N) return ne();
              if (!C || U.substring(0, $e) !== C) {
                if (q) {
                  if (G = [], Ce(U.split(p)), Ze(), B) return ne();
                } else Ce(U.split(p));
                if (R && R <= K) return G = G.slice(0, R), ne(!0);
              }
            }
            return ne();
          }
          for (var te = Z.indexOf(p, A), Y = Z.indexOf(v, A), Ne = new RegExp(w(L) + w(I), "g"), J = Z.indexOf(I, A); ; ) if (Z[A] === I) for (J = A, A++; ; ) {
            if ((J = Z.indexOf(I, J + 1)) === -1) return N || se.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: G.length, index: A }), Ee();
            if (J === H - 1) return Ee(Z.substring(A, J).replace(Ne, I));
            if (I === L && Z[J + 1] === L) J++;
            else if (I === L || J === 0 || Z[J - 1] !== L) {
              te !== -1 && te < J + 1 && (te = Z.indexOf(p, J + 1));
              var fe = Ie((Y = Y !== -1 && Y < J + 1 ? Z.indexOf(v, J + 1) : Y) === -1 ? te : Math.min(te, Y));
              if (Z.substr(J + 1 + fe, V) === p) {
                U.push(Z.substring(A, J).replace(Ne, I)), Z[A = J + 1 + fe + V] !== I && (J = Z.indexOf(I, A)), te = Z.indexOf(p, A), Y = Z.indexOf(v, A);
                break;
              }
              if (fe = Ie(Y), Z.substring(J + 1 + fe, J + 1 + fe + ie) === v) {
                if (U.push(Z.substring(A, J).replace(Ne, I)), Pe(J + 1 + fe + ie), te = Z.indexOf(p, A), J = Z.indexOf(I, A), q && (Ze(), B)) return ne();
                if (R && G.length >= R) return ne(!0);
                break;
              }
              se.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: G.length, index: A }), J++;
            }
          }
          else if (C && U.length === 0 && Z.substring(A, A + $e) === C) {
            if (Y === -1) return ne();
            A = Y + ie, Y = Z.indexOf(v, A), te = Z.indexOf(p, A);
          } else if (te !== -1 && (te < Y || Y === -1)) U.push(Z.substring(A, te)), A = te + V, te = Z.indexOf(p, A);
          else {
            if (Y === -1) break;
            if (U.push(Z.substring(A, Y)), Pe(Y + ie), q && (Ze(), B)) return ne();
            if (R && G.length >= R) return ne(!0);
          }
          return Ee();
          function Ce(ve) {
            G.push(ve), ae = A;
          }
          function Ie(ve) {
            var Oe = 0;
            return Oe = ve !== -1 && (ve = Z.substring(J + 1, ve)) && ve.trim() === "" ? ve.length : Oe;
          }
          function Ee(ve) {
            return N || (ve === void 0 && (ve = Z.substring(A)), U.push(ve), A = H, Ce(U), q && Ze()), ne();
          }
          function Pe(ve) {
            A = ve, Ce(U), U = [], Y = Z.indexOf(v, A);
          }
          function ne(ve) {
            if (m.header && !D && G.length && !X) {
              var Oe = G[0], Fe = /* @__PURE__ */ Object.create(null), nt = new Set(Oe);
              let ht = !1;
              for (let Ve = 0; Ve < Oe.length; Ve++) {
                let Te = Oe[Ve];
                if (Fe[Te = E(m.transformHeader) ? m.transformHeader(Te, Ve) : Te]) {
                  let rt, St = Fe[Te];
                  for (; rt = Te + "_" + St, St++, nt.has(rt); ) ;
                  nt.add(rt), Oe[Ve] = rt, Fe[Te]++, ht = !0, (W = W === null ? {} : W)[rt] = Te;
                } else Fe[Te] = 1, Oe[Ve] = Te;
                nt.add(Te);
              }
              ht && console.warn("Duplicate headers found and renamed."), X = !0;
            }
            return { data: G, errors: se, meta: { delimiter: p, linebreak: v, aborted: B, truncated: !!ve, cursor: ae + (D || 0), renamedHeaders: W } };
          }
          function Ze() {
            O(ne()), G = [], se = [];
          }
        }, this.abort = function() {
          B = !0;
        }, this.getCharIndex = function() {
          return A;
        };
      }
      function M(m) {
        var p = m.data, v = a[p.workerId], C = !1;
        if (p.error) v.userError(p.error, p.file);
        else if (p.results && p.results.data) {
          var O = { abort: function() {
            C = !0, $(p.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: z, resume: z };
          if (E(v.userStep)) {
            for (var R = 0; R < p.results.data.length && (v.userStep({ data: p.results.data[R], errors: p.results.errors, meta: p.results.meta }, O), !C); R++) ;
            delete p.results;
          } else E(v.userChunk) && (v.userChunk(p.results, O, p.file), delete p.results);
        }
        p.finished && !C && $(p.workerId, p.results);
      }
      function $(m, p) {
        var v = a[m];
        E(v.userComplete) && v.userComplete(p), v.terminate(), delete a[m];
      }
      function z() {
        throw new Error("Not implemented.");
      }
      function S(m) {
        if (typeof m != "object" || m === null) return m;
        var p, v = Array.isArray(m) ? [] : {};
        for (p in m) v[p] = S(m[p]);
        return v;
      }
      function F(m, p) {
        return function() {
          m.apply(p, arguments);
        };
      }
      function E(m) {
        return typeof m == "function";
      }
      return u.parse = function(m, p) {
        var v = (p = p || {}).dynamicTyping || !1;
        if (E(v) && (p.dynamicTypingFunction = v, v = {}), p.dynamicTyping = v, p.transform = !!E(p.transform) && p.transform, !p.worker || !u.WORKERS_SUPPORTED) return v = null, u.NODE_STREAM_INPUT, typeof m == "string" ? (m = ((C) => C.charCodeAt(0) !== 65279 ? C : C.slice(1))(m), v = new (p.download ? l : d)(p)) : m.readable === !0 && E(m.read) && E(m.on) ? v = new g(p) : (r.File && m instanceof File || m instanceof Object) && (v = new h(p)), v.stream(m);
        (v = (() => {
          var C;
          return !!u.WORKERS_SUPPORTED && (C = (() => {
            var O = r.URL || r.webkitURL || null, R = n.toString();
            return u.BLOB_URL || (u.BLOB_URL = O.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", R, ")();"], { type: "text/javascript" })));
          })(), (C = new r.Worker(C)).onmessage = M, C.id = c++, a[C.id] = C);
        })()).userStep = p.step, v.userChunk = p.chunk, v.userComplete = p.complete, v.userError = p.error, p.step = E(p.step), p.chunk = E(p.chunk), p.complete = E(p.complete), p.error = E(p.error), delete p.worker, v.postMessage({ input: m, config: p, workerId: v.id });
      }, u.unparse = function(m, p) {
        var v = !1, C = !0, O = ",", R = `\r
`, j = '"', W = j + j, X = !1, I = null, L = !1, A = ((() => {
          if (typeof p == "object") {
            if (typeof p.delimiter != "string" || u.BAD_DELIMITERS.filter(function(D) {
              return p.delimiter.indexOf(D) !== -1;
            }).length || (O = p.delimiter), typeof p.quotes != "boolean" && typeof p.quotes != "function" && !Array.isArray(p.quotes) || (v = p.quotes), typeof p.skipEmptyLines != "boolean" && typeof p.skipEmptyLines != "string" || (X = p.skipEmptyLines), typeof p.newline == "string" && (R = p.newline), typeof p.quoteChar == "string" && (j = p.quoteChar), typeof p.header == "boolean" && (C = p.header), Array.isArray(p.columns)) {
              if (p.columns.length === 0) throw new Error("Option columns is empty");
              I = p.columns;
            }
            p.escapeChar !== void 0 && (W = p.escapeChar + j), p.escapeFormulae instanceof RegExp ? L = p.escapeFormulae : typeof p.escapeFormulae == "boolean" && p.escapeFormulae && (L = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(w(j), "g"));
        if (typeof m == "string" && (m = JSON.parse(m)), Array.isArray(m)) {
          if (!m.length || Array.isArray(m[0])) return B(null, m, X);
          if (typeof m[0] == "object") return B(I || Object.keys(m[0]), m, X);
        } else if (typeof m == "object") return typeof m.data == "string" && (m.data = JSON.parse(m.data)), Array.isArray(m.data) && (m.fields || (m.fields = m.meta && m.meta.fields || I), m.fields || (m.fields = Array.isArray(m.data[0]) ? m.fields : typeof m.data[0] == "object" ? Object.keys(m.data[0]) : []), Array.isArray(m.data[0]) || typeof m.data[0] == "object" || (m.data = [m.data])), B(m.fields || [], m.data || [], X);
        throw new Error("Unable to serialize unrecognized input");
        function B(D, N, H) {
          var V = "", ie = (typeof D == "string" && (D = JSON.parse(D)), typeof N == "string" && (N = JSON.parse(N)), Array.isArray(D) && 0 < D.length), $e = !Array.isArray(N[0]);
          if (ie && C) {
            for (var q = 0; q < D.length; q++) 0 < q && (V += O), V += Z(D[q], q);
            0 < N.length && (V += R);
          }
          for (var G = 0; G < N.length; G++) {
            var se = (ie ? D : N[G]).length, U = !1, ae = ie ? Object.keys(N[G]).length === 0 : N[G].length === 0;
            if (H && !ie && (U = H === "greedy" ? N[G].join("").trim() === "" : N[G].length === 1 && N[G][0].length === 0), H === "greedy" && ie) {
              for (var ue = [], K = 0; K < se; K++) {
                var te = $e ? D[K] : K;
                ue.push(N[G][te]);
              }
              U = ue.join("").trim() === "";
            }
            if (!U) {
              for (var Y = 0; Y < se; Y++) {
                0 < Y && !ae && (V += O);
                var Ne = ie && $e ? D[Y] : Y;
                V += Z(N[G][Ne], Y);
              }
              G < N.length - 1 && (!H || 0 < se && !ae) && (V += R);
            }
          }
          return V;
        }
        function Z(D, N) {
          var H, V;
          return D == null ? "" : D.constructor === Date ? JSON.stringify(D).slice(1, 25) : (V = !1, L && typeof D == "string" && L.test(D) && (D = "'" + D, V = !0), H = D.toString().replace(A, W), (V = V || v === !0 || typeof v == "function" && v(D, N) || Array.isArray(v) && v[N] || ((ie, $e) => {
            for (var q = 0; q < $e.length; q++) if (-1 < ie.indexOf($e[q])) return !0;
            return !1;
          })(H, u.BAD_DELIMITERS) || -1 < H.indexOf(O) || H.charAt(0) === " " || H.charAt(H.length - 1) === " ") ? j + H + j : H);
        }
      }, u.RECORD_SEP = "", u.UNIT_SEP = "", u.BYTE_ORDER_MARK = "\uFEFF", u.BAD_DELIMITERS = ["\r", `
`, '"', u.BYTE_ORDER_MARK], u.WORKERS_SUPPORTED = !s && !!r.Worker, u.NODE_STREAM_INPUT = 1, u.LocalChunkSize = 10485760, u.RemoteChunkSize = 5242880, u.DefaultDelimiter = ",", u.Parser = T, u.ParserHandle = _, u.NetworkStreamer = l, u.FileStreamer = h, u.StringStreamer = d, u.ReadableStreamStreamer = g, r.jQuery && ((o = r.jQuery).fn.parse = function(m) {
        var p = m.config || {}, v = [];
        return this.each(function(R) {
          if (!(o(this).prop("tagName").toUpperCase() === "INPUT" && o(this).attr("type").toLowerCase() === "file" && r.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var j = 0; j < this.files.length; j++) v.push({ file: this.files[j], inputElem: this, instanceConfig: o.extend({}, p) });
        }), C(), this;
        function C() {
          if (v.length === 0) E(m.complete) && m.complete();
          else {
            var R, j, W, X, I = v[0];
            if (E(m.before)) {
              var L = m.before(I.file, I.inputElem);
              if (typeof L == "object") {
                if (L.action === "abort") return R = "AbortError", j = I.file, W = I.inputElem, X = L.reason, void (E(m.error) && m.error({ name: R }, j, W, X));
                if (L.action === "skip") return void O();
                typeof L.config == "object" && (I.instanceConfig = o.extend(I.instanceConfig, L.config));
              } else if (L === "skip") return void O();
            }
            var A = I.instanceConfig.complete;
            I.instanceConfig.complete = function(B) {
              E(A) && A(B, I.file, I.inputElem), O();
            }, u.parse(I.file, I.instanceConfig);
          }
        }
        function O() {
          v.splice(0, 1), C();
        }
      }), i && (r.onmessage = function(m) {
        m = m.data, u.WORKER_ID === void 0 && m && (u.WORKER_ID = m.workerId), typeof m.input == "string" ? r.postMessage({ workerId: u.WORKER_ID, results: u.parse(m.input, m.config), finished: !0 }) : (r.File && m.input instanceof File || m.input instanceof Object) && (m = u.parse(m.input, m.config)) && r.postMessage({ workerId: u.WORKER_ID, results: m, finished: !0 });
      }), (l.prototype = Object.create(f.prototype)).constructor = l, (h.prototype = Object.create(f.prototype)).constructor = h, (d.prototype = Object.create(d.prototype)).constructor = d, (g.prototype = Object.create(f.prototype)).constructor = g, u;
    });
  })(fn)), fn.exports;
}
var pv = dv();
const Qv = /* @__PURE__ */ Jt(pv);
function hs(e, t, n, r, o, s, i) {
  try {
    var a = e[s](i), c = a.value;
  } catch (u) {
    return void n(u);
  }
  a.done ? t(c) : Promise.resolve(c).then(r, o);
}
function e0(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, o) {
      var s = e.apply(t, n);
      function i(c) {
        hs(s, r, o, i, a, "next", c);
      }
      function a(c) {
        hs(s, r, o, i, a, "throw", c);
      }
      i(void 0);
    });
  };
}
function mv(e, t) {
  if (Vt(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Vt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gv(e) {
  var t = mv(e, "string");
  return Vt(t) == "symbol" ? t : t + "";
}
function t0(e, t, n) {
  return (t = gv(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var xt = { exports: {} }, dt = { exports: {} }, _v = dt.exports, ds;
function yv() {
  return ds || (ds = 1, (function() {
    var e, t, n, r, o, s;
    typeof performance < "u" && performance !== null && performance.now ? dt.exports = function() {
      return performance.now();
    } : typeof process < "u" && process !== null && process.hrtime ? (dt.exports = function() {
      return (e() - o) / 1e6;
    }, t = process.hrtime, e = function() {
      var i;
      return i = t(), i[0] * 1e9 + i[1];
    }, r = e(), s = process.uptime() * 1e9, o = r - s) : Date.now ? (dt.exports = function() {
      return Date.now() - n;
    }, n = Date.now()) : (dt.exports = function() {
      return (/* @__PURE__ */ new Date()).getTime() - n;
    }, n = (/* @__PURE__ */ new Date()).getTime());
  }).call(_v)), dt.exports;
}
var ps;
function vv() {
  if (ps) return xt.exports;
  ps = 1;
  for (var e = yv(), t = typeof window > "u" ? w_ : window, n = ["moz", "webkit"], r = "AnimationFrame", o = t["request" + r], s = t["cancel" + r] || t["cancelRequest" + r], i = 0; !o && i < n.length; i++)
    o = t[n[i] + "Request" + r], s = t[n[i] + "Cancel" + r] || t[n[i] + "CancelRequest" + r];
  if (!o || !s) {
    var a = 0, c = 0, u = [], f = 1e3 / 60;
    o = function(l) {
      if (u.length === 0) {
        var h = e(), d = Math.max(0, f - (h - a));
        a = d + h, setTimeout(function() {
          var g = u.slice(0);
          u.length = 0;
          for (var _ = 0; _ < g.length; _++)
            if (!g[_].cancelled)
              try {
                g[_].callback(a);
              } catch (w) {
                setTimeout(function() {
                  throw w;
                }, 0);
              }
        }, Math.round(d));
      }
      return u.push({
        handle: ++c,
        callback: l,
        cancelled: !1
      }), c;
    }, s = function(l) {
      for (var h = 0; h < u.length; h++)
        u[h].handle === l && (u[h].cancelled = !0);
    };
  }
  return xt.exports = function(l) {
    return o.call(t, l);
  }, xt.exports.cancel = function() {
    s.apply(t, arguments);
  }, xt.exports.polyfill = function(l) {
    l || (l = t), l.requestAnimationFrame = o, l.cancelAnimationFrame = s;
  }, xt.exports;
}
var bv = vv();
const n0 = /* @__PURE__ */ Jt(bv);
var Xn, ms;
function wv() {
  return ms || (ms = 1, Xn = function(e) {
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
    for (var n = [
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
    ], r = 0; r < n.length; r++) {
      var o = n[r].re, s = n[r].process, i = o.exec(e);
      if (i) {
        var a = s(i);
        this.r = a[0], this.g = a[1], this.b = a[2], a.length > 3 && (this.alpha = a[3]), this.ok = !0;
      }
    }
    this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha, this.toRGB = function() {
      return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    }, this.toRGBA = function() {
      return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
    }, this.toHex = function() {
      var c = this.r.toString(16), u = this.g.toString(16), f = this.b.toString(16);
      return c.length == 1 && (c = "0" + c), u.length == 1 && (u = "0" + u), f.length == 1 && (f = "0" + f), "#" + c + u + f;
    }, this.getHelpXML = function() {
      for (var c = new Array(), u = 0; u < n.length; u++)
        for (var f = n[u].example, l = 0; l < f.length; l++)
          c[c.length] = f[l];
      for (var h in t)
        c[c.length] = h;
      var d = document.createElement("ul");
      d.setAttribute("id", "rgbcolor-examples");
      for (var u = 0; u < c.length; u++)
        try {
          var g = document.createElement("li"), _ = new RGBColor(c[u]), w = document.createElement("div");
          w.style.cssText = "margin: 3px; border: 1px solid black; background:" + _.toHex() + "; color:" + _.toHex(), w.appendChild(document.createTextNode("test"));
          var T = document.createTextNode(
            " " + c[u] + " -> " + _.toRGB() + " -> " + _.toHex()
          );
          g.appendChild(w), g.appendChild(T), d.appendChild(g);
        } catch {
        }
      return d;
    };
  }), Xn;
}
var kv = wv();
const r0 = /* @__PURE__ */ Jt(kv);
var Ic = function(e, t) {
  return (Ic = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
  })(e, t);
};
function Zc(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  function n() {
    this.constructor = e;
  }
  Ic(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function $v(e) {
  var t = "";
  Array.isArray(e) || (e = [e]);
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    if (r.type === k.CLOSE_PATH) t += "z";
    else if (r.type === k.HORIZ_LINE_TO) t += (r.relative ? "h" : "H") + r.x;
    else if (r.type === k.VERT_LINE_TO) t += (r.relative ? "v" : "V") + r.y;
    else if (r.type === k.MOVE_TO) t += (r.relative ? "m" : "M") + r.x + " " + r.y;
    else if (r.type === k.LINE_TO) t += (r.relative ? "l" : "L") + r.x + " " + r.y;
    else if (r.type === k.CURVE_TO) t += (r.relative ? "c" : "C") + r.x1 + " " + r.y1 + " " + r.x2 + " " + r.y2 + " " + r.x + " " + r.y;
    else if (r.type === k.SMOOTH_CURVE_TO) t += (r.relative ? "s" : "S") + r.x2 + " " + r.y2 + " " + r.x + " " + r.y;
    else if (r.type === k.QUAD_TO) t += (r.relative ? "q" : "Q") + r.x1 + " " + r.y1 + " " + r.x + " " + r.y;
    else if (r.type === k.SMOOTH_QUAD_TO) t += (r.relative ? "t" : "T") + r.x + " " + r.y;
    else {
      if (r.type !== k.ARC) throw new Error('Unexpected command type "' + r.type + '" at index ' + n + ".");
      t += (r.relative ? "a" : "A") + r.rX + " " + r.rY + " " + r.xRot + " " + +r.lArcFlag + " " + +r.sweepFlag + " " + r.x + " " + r.y;
    }
  }
  return t;
}
function Er(e, t) {
  var n = e[0], r = e[1];
  return [n * Math.cos(t) - r * Math.sin(t), n * Math.sin(t) + r * Math.cos(t)];
}
function qe() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = 0; n < e.length; n++) if (typeof e[n] != "number") throw new Error("assertNumbers arguments[" + n + "] is not a number. " + typeof e[n] + " == typeof " + e[n]);
  return !0;
}
var st = Math.PI;
function Gn(e, t, n) {
  e.lArcFlag = e.lArcFlag === 0 ? 0 : 1, e.sweepFlag = e.sweepFlag === 0 ? 0 : 1;
  var r = e.rX, o = e.rY, s = e.x, i = e.y;
  r = Math.abs(e.rX), o = Math.abs(e.rY);
  var a = Er([(t - s) / 2, (n - i) / 2], -e.xRot / 180 * st), c = a[0], u = a[1], f = Math.pow(c, 2) / Math.pow(r, 2) + Math.pow(u, 2) / Math.pow(o, 2);
  1 < f && (r *= Math.sqrt(f), o *= Math.sqrt(f)), e.rX = r, e.rY = o;
  var l = Math.pow(r, 2) * Math.pow(u, 2) + Math.pow(o, 2) * Math.pow(c, 2), h = (e.lArcFlag !== e.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(r, 2) * Math.pow(o, 2) - l) / l)), d = r * u / o * h, g = -o * c / r * h, _ = Er([d, g], e.xRot / 180 * st);
  e.cX = _[0] + (t + s) / 2, e.cY = _[1] + (n + i) / 2, e.phi1 = Math.atan2((u - g) / o, (c - d) / r), e.phi2 = Math.atan2((-u - g) / o, (-c - d) / r), e.sweepFlag === 0 && e.phi2 > e.phi1 && (e.phi2 -= 2 * st), e.sweepFlag === 1 && e.phi2 < e.phi1 && (e.phi2 += 2 * st), e.phi1 *= 180 / st, e.phi2 *= 180 / st;
}
function gs(e, t, n) {
  qe(e, t, n);
  var r = e * e + t * t - n * n;
  if (0 > r) return [];
  if (r === 0) return [[e * n / (e * e + t * t), t * n / (e * e + t * t)]];
  var o = Math.sqrt(r);
  return [[(e * n + t * o) / (e * e + t * t), (t * n - e * o) / (e * e + t * t)], [(e * n - t * o) / (e * e + t * t), (t * n + e * o) / (e * e + t * t)]];
}
var be, Qe = Math.PI / 180;
function _s(e, t, n) {
  return (1 - n) * e + n * t;
}
function ys(e, t, n, r) {
  return e + Math.cos(r / 180 * st) * t + Math.sin(r / 180 * st) * n;
}
function vs(e, t, n, r) {
  var o = 1e-6, s = t - e, i = n - t, a = 3 * s + 3 * (r - n) - 6 * i, c = 6 * (i - s), u = 3 * s;
  return Math.abs(a) < o ? [-u / c] : (function(f, l, h) {
    var d = f * f / 4 - l;
    if (d < -h) return [];
    if (d <= h) return [-f / 2];
    var g = Math.sqrt(d);
    return [-f / 2 - g, -f / 2 + g];
  })(c / a, u / a, o);
}
function bs(e, t, n, r, o) {
  var s = 1 - o;
  return e * (s * s * s) + t * (3 * s * s * o) + n * (3 * s * o * o) + r * (o * o * o);
}
(function(e) {
  function t() {
    return o((function(a, c, u) {
      return a.relative && (a.x1 !== void 0 && (a.x1 += c), a.y1 !== void 0 && (a.y1 += u), a.x2 !== void 0 && (a.x2 += c), a.y2 !== void 0 && (a.y2 += u), a.x !== void 0 && (a.x += c), a.y !== void 0 && (a.y += u), a.relative = !1), a;
    }));
  }
  function n() {
    var a = NaN, c = NaN, u = NaN, f = NaN;
    return o((function(l, h, d) {
      return l.type & k.SMOOTH_CURVE_TO && (l.type = k.CURVE_TO, a = isNaN(a) ? h : a, c = isNaN(c) ? d : c, l.x1 = l.relative ? h - a : 2 * h - a, l.y1 = l.relative ? d - c : 2 * d - c), l.type & k.CURVE_TO ? (a = l.relative ? h + l.x2 : l.x2, c = l.relative ? d + l.y2 : l.y2) : (a = NaN, c = NaN), l.type & k.SMOOTH_QUAD_TO && (l.type = k.QUAD_TO, u = isNaN(u) ? h : u, f = isNaN(f) ? d : f, l.x1 = l.relative ? h - u : 2 * h - u, l.y1 = l.relative ? d - f : 2 * d - f), l.type & k.QUAD_TO ? (u = l.relative ? h + l.x1 : l.x1, f = l.relative ? d + l.y1 : l.y1) : (u = NaN, f = NaN), l;
    }));
  }
  function r() {
    var a = NaN, c = NaN;
    return o((function(u, f, l) {
      if (u.type & k.SMOOTH_QUAD_TO && (u.type = k.QUAD_TO, a = isNaN(a) ? f : a, c = isNaN(c) ? l : c, u.x1 = u.relative ? f - a : 2 * f - a, u.y1 = u.relative ? l - c : 2 * l - c), u.type & k.QUAD_TO) {
        a = u.relative ? f + u.x1 : u.x1, c = u.relative ? l + u.y1 : u.y1;
        var h = u.x1, d = u.y1;
        u.type = k.CURVE_TO, u.x1 = ((u.relative ? 0 : f) + 2 * h) / 3, u.y1 = ((u.relative ? 0 : l) + 2 * d) / 3, u.x2 = (u.x + 2 * h) / 3, u.y2 = (u.y + 2 * d) / 3;
      } else a = NaN, c = NaN;
      return u;
    }));
  }
  function o(a) {
    var c = 0, u = 0, f = NaN, l = NaN;
    return function(h) {
      if (isNaN(f) && !(h.type & k.MOVE_TO)) throw new Error("path must start with moveto");
      var d = a(h, c, u, f, l);
      return h.type & k.CLOSE_PATH && (c = f, u = l), h.x !== void 0 && (c = h.relative ? c + h.x : h.x), h.y !== void 0 && (u = h.relative ? u + h.y : h.y), h.type & k.MOVE_TO && (f = c, l = u), d;
    };
  }
  function s(a, c, u, f, l, h) {
    return qe(a, c, u, f, l, h), o((function(d, g, _, w) {
      var T = d.x1, M = d.x2, $ = d.relative && !isNaN(w), z = d.x !== void 0 ? d.x : $ ? 0 : g, S = d.y !== void 0 ? d.y : $ ? 0 : _;
      function F(D) {
        return D * D;
      }
      d.type & k.HORIZ_LINE_TO && c !== 0 && (d.type = k.LINE_TO, d.y = d.relative ? 0 : _), d.type & k.VERT_LINE_TO && u !== 0 && (d.type = k.LINE_TO, d.x = d.relative ? 0 : g), d.x !== void 0 && (d.x = d.x * a + S * u + ($ ? 0 : l)), d.y !== void 0 && (d.y = z * c + d.y * f + ($ ? 0 : h)), d.x1 !== void 0 && (d.x1 = d.x1 * a + d.y1 * u + ($ ? 0 : l)), d.y1 !== void 0 && (d.y1 = T * c + d.y1 * f + ($ ? 0 : h)), d.x2 !== void 0 && (d.x2 = d.x2 * a + d.y2 * u + ($ ? 0 : l)), d.y2 !== void 0 && (d.y2 = M * c + d.y2 * f + ($ ? 0 : h));
      var E = a * f - c * u;
      if (d.xRot !== void 0 && (a !== 1 || c !== 0 || u !== 0 || f !== 1)) if (E === 0) delete d.rX, delete d.rY, delete d.xRot, delete d.lArcFlag, delete d.sweepFlag, d.type = k.LINE_TO;
      else {
        var m = d.xRot * Math.PI / 180, p = Math.sin(m), v = Math.cos(m), C = 1 / F(d.rX), O = 1 / F(d.rY), R = F(v) * C + F(p) * O, j = 2 * p * v * (C - O), W = F(p) * C + F(v) * O, X = R * f * f - j * c * f + W * c * c, I = j * (a * f + c * u) - 2 * (R * u * f + W * a * c), L = R * u * u - j * a * u + W * a * a, A = (Math.atan2(I, X - L) + Math.PI) % Math.PI / 2, B = Math.sin(A), Z = Math.cos(A);
        d.rX = Math.abs(E) / Math.sqrt(X * F(Z) + I * B * Z + L * F(B)), d.rY = Math.abs(E) / Math.sqrt(X * F(B) - I * B * Z + L * F(Z)), d.xRot = 180 * A / Math.PI;
      }
      return d.sweepFlag !== void 0 && 0 > E && (d.sweepFlag = +!d.sweepFlag), d;
    }));
  }
  function i() {
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
    return a === void 0 && (a = 1e13), qe(a), function(u) {
      return u.x1 !== void 0 && (u.x1 = c(u.x1)), u.y1 !== void 0 && (u.y1 = c(u.y1)), u.x2 !== void 0 && (u.x2 = c(u.x2)), u.y2 !== void 0 && (u.y2 = c(u.y2)), u.x !== void 0 && (u.x = c(u.x)), u.y !== void 0 && (u.y = c(u.y)), u.rX !== void 0 && (u.rX = c(u.rX)), u.rY !== void 0 && (u.rY = c(u.rY)), u;
    };
  }, e.TO_ABS = t, e.TO_REL = function() {
    return o((function(a, c, u) {
      return a.relative || (a.x1 !== void 0 && (a.x1 -= c), a.y1 !== void 0 && (a.y1 -= u), a.x2 !== void 0 && (a.x2 -= c), a.y2 !== void 0 && (a.y2 -= u), a.x !== void 0 && (a.x -= c), a.y !== void 0 && (a.y -= u), a.relative = !0), a;
    }));
  }, e.NORMALIZE_HVZ = function(a, c, u) {
    return a === void 0 && (a = !0), c === void 0 && (c = !0), u === void 0 && (u = !0), o((function(f, l, h, d, g) {
      if (isNaN(d) && !(f.type & k.MOVE_TO)) throw new Error("path must start with moveto");
      return c && f.type & k.HORIZ_LINE_TO && (f.type = k.LINE_TO, f.y = f.relative ? 0 : h), u && f.type & k.VERT_LINE_TO && (f.type = k.LINE_TO, f.x = f.relative ? 0 : l), a && f.type & k.CLOSE_PATH && (f.type = k.LINE_TO, f.x = f.relative ? d - l : d, f.y = f.relative ? g - h : g), f.type & k.ARC && (f.rX === 0 || f.rY === 0) && (f.type = k.LINE_TO, delete f.rX, delete f.rY, delete f.xRot, delete f.lArcFlag, delete f.sweepFlag), f;
    }));
  }, e.NORMALIZE_ST = n, e.QT_TO_C = r, e.INFO = o, e.SANITIZE = function(a) {
    a === void 0 && (a = 0), qe(a);
    var c = NaN, u = NaN, f = NaN, l = NaN;
    return o((function(h, d, g, _, w) {
      var T = Math.abs, M = !1, $ = 0, z = 0;
      if (h.type & k.SMOOTH_CURVE_TO && ($ = isNaN(c) ? 0 : d - c, z = isNaN(u) ? 0 : g - u), h.type & (k.CURVE_TO | k.SMOOTH_CURVE_TO) ? (c = h.relative ? d + h.x2 : h.x2, u = h.relative ? g + h.y2 : h.y2) : (c = NaN, u = NaN), h.type & k.SMOOTH_QUAD_TO ? (f = isNaN(f) ? d : 2 * d - f, l = isNaN(l) ? g : 2 * g - l) : h.type & k.QUAD_TO ? (f = h.relative ? d + h.x1 : h.x1, l = h.relative ? g + h.y1 : h.y2) : (f = NaN, l = NaN), h.type & k.LINE_COMMANDS || h.type & k.ARC && (h.rX === 0 || h.rY === 0 || !h.lArcFlag) || h.type & k.CURVE_TO || h.type & k.SMOOTH_CURVE_TO || h.type & k.QUAD_TO || h.type & k.SMOOTH_QUAD_TO) {
        var S = h.x === void 0 ? 0 : h.relative ? h.x : h.x - d, F = h.y === void 0 ? 0 : h.relative ? h.y : h.y - g;
        $ = isNaN(f) ? h.x1 === void 0 ? $ : h.relative ? h.x : h.x1 - d : f - d, z = isNaN(l) ? h.y1 === void 0 ? z : h.relative ? h.y : h.y1 - g : l - g;
        var E = h.x2 === void 0 ? 0 : h.relative ? h.x : h.x2 - d, m = h.y2 === void 0 ? 0 : h.relative ? h.y : h.y2 - g;
        T(S) <= a && T(F) <= a && T($) <= a && T(z) <= a && T(E) <= a && T(m) <= a && (M = !0);
      }
      return h.type & k.CLOSE_PATH && T(d - _) <= a && T(g - w) <= a && (M = !0), M ? [] : h;
    }));
  }, e.MATRIX = s, e.ROTATE = function(a, c, u) {
    c === void 0 && (c = 0), u === void 0 && (u = 0), qe(a, c, u);
    var f = Math.sin(a), l = Math.cos(a);
    return s(l, f, -f, l, c - c * l + u * f, u - c * f - u * l);
  }, e.TRANSLATE = function(a, c) {
    return c === void 0 && (c = 0), qe(a, c), s(1, 0, 0, 1, a, c);
  }, e.SCALE = function(a, c) {
    return c === void 0 && (c = a), qe(a, c), s(a, 0, 0, c, 0, 0);
  }, e.SKEW_X = function(a) {
    return qe(a), s(1, 0, Math.atan(a), 1, 0, 0);
  }, e.SKEW_Y = function(a) {
    return qe(a), s(1, Math.atan(a), 0, 1, 0, 0);
  }, e.X_AXIS_SYMMETRY = function(a) {
    return a === void 0 && (a = 0), qe(a), s(-1, 0, 0, 1, a, 0);
  }, e.Y_AXIS_SYMMETRY = function(a) {
    return a === void 0 && (a = 0), qe(a), s(1, 0, 0, -1, 0, a);
  }, e.A_TO_C = function() {
    return o((function(a, c, u) {
      return k.ARC === a.type ? (function(f, l, h) {
        var d, g, _, w;
        f.cX || Gn(f, l, h);
        for (var T = Math.min(f.phi1, f.phi2), M = Math.max(f.phi1, f.phi2) - T, $ = Math.ceil(M / 90), z = new Array($), S = l, F = h, E = 0; E < $; E++) {
          var m = _s(f.phi1, f.phi2, E / $), p = _s(f.phi1, f.phi2, (E + 1) / $), v = p - m, C = 4 / 3 * Math.tan(v * Qe / 4), O = [Math.cos(m * Qe) - C * Math.sin(m * Qe), Math.sin(m * Qe) + C * Math.cos(m * Qe)], R = O[0], j = O[1], W = [Math.cos(p * Qe), Math.sin(p * Qe)], X = W[0], I = W[1], L = [X + C * Math.sin(p * Qe), I - C * Math.cos(p * Qe)], A = L[0], B = L[1];
          z[E] = { relative: f.relative, type: k.CURVE_TO };
          var Z = function(D, N) {
            var H = Er([D * f.rX, N * f.rY], f.xRot), V = H[0], ie = H[1];
            return [f.cX + V, f.cY + ie];
          };
          d = Z(R, j), z[E].x1 = d[0], z[E].y1 = d[1], g = Z(A, B), z[E].x2 = g[0], z[E].y2 = g[1], _ = Z(X, I), z[E].x = _[0], z[E].y = _[1], f.relative && (z[E].x1 -= S, z[E].y1 -= F, z[E].x2 -= S, z[E].y2 -= F, z[E].x -= S, z[E].y -= F), S = (w = [z[E].x, z[E].y])[0], F = w[1];
        }
        return z;
      })(a, a.relative ? 0 : c, a.relative ? 0 : u) : a;
    }));
  }, e.ANNOTATE_ARCS = function() {
    return o((function(a, c, u) {
      return a.relative && (c = 0, u = 0), k.ARC === a.type && Gn(a, c, u), a;
    }));
  }, e.CLONE = i, e.CALCULATE_BOUNDS = function() {
    var a = function(h) {
      var d = {};
      for (var g in h) d[g] = h[g];
      return d;
    }, c = t(), u = r(), f = n(), l = o((function(h, d, g) {
      var _ = f(u(c(a(h))));
      function w(B) {
        B > l.maxX && (l.maxX = B), B < l.minX && (l.minX = B);
      }
      function T(B) {
        B > l.maxY && (l.maxY = B), B < l.minY && (l.minY = B);
      }
      if (_.type & k.DRAWING_COMMANDS && (w(d), T(g)), _.type & k.HORIZ_LINE_TO && w(_.x), _.type & k.VERT_LINE_TO && T(_.y), _.type & k.LINE_TO && (w(_.x), T(_.y)), _.type & k.CURVE_TO) {
        w(_.x), T(_.y);
        for (var M = 0, $ = vs(d, _.x1, _.x2, _.x); M < $.length; M++)
          0 < (A = $[M]) && 1 > A && w(bs(d, _.x1, _.x2, _.x, A));
        for (var z = 0, S = vs(g, _.y1, _.y2, _.y); z < S.length; z++)
          0 < (A = S[z]) && 1 > A && T(bs(g, _.y1, _.y2, _.y, A));
      }
      if (_.type & k.ARC) {
        w(_.x), T(_.y), Gn(_, d, g);
        for (var F = _.xRot / 180 * Math.PI, E = Math.cos(F) * _.rX, m = Math.sin(F) * _.rX, p = -Math.sin(F) * _.rY, v = Math.cos(F) * _.rY, C = _.phi1 < _.phi2 ? [_.phi1, _.phi2] : -180 > _.phi2 ? [_.phi2 + 360, _.phi1 + 360] : [_.phi2, _.phi1], O = C[0], R = C[1], j = function(B) {
          var Z = B[0], D = B[1], N = 180 * Math.atan2(D, Z) / Math.PI;
          return N < O ? N + 360 : N;
        }, W = 0, X = gs(p, -E, 0).map(j); W < X.length; W++)
          (A = X[W]) > O && A < R && w(ys(_.cX, E, p, A));
        for (var I = 0, L = gs(v, -m, 0).map(j); I < L.length; I++) {
          var A;
          (A = L[I]) > O && A < R && T(ys(_.cY, m, v, A));
        }
      }
      return h;
    }));
    return l.minX = 1 / 0, l.maxX = -1 / 0, l.minY = 1 / 0, l.maxY = -1 / 0, l;
  };
})(be || (be = {}));
var Je, xc = (function() {
  function e() {
  }
  return e.prototype.round = function(t) {
    return this.transform(be.ROUND(t));
  }, e.prototype.toAbs = function() {
    return this.transform(be.TO_ABS());
  }, e.prototype.toRel = function() {
    return this.transform(be.TO_REL());
  }, e.prototype.normalizeHVZ = function(t, n, r) {
    return this.transform(be.NORMALIZE_HVZ(t, n, r));
  }, e.prototype.normalizeST = function() {
    return this.transform(be.NORMALIZE_ST());
  }, e.prototype.qtToC = function() {
    return this.transform(be.QT_TO_C());
  }, e.prototype.aToC = function() {
    return this.transform(be.A_TO_C());
  }, e.prototype.sanitize = function(t) {
    return this.transform(be.SANITIZE(t));
  }, e.prototype.translate = function(t, n) {
    return this.transform(be.TRANSLATE(t, n));
  }, e.prototype.scale = function(t, n) {
    return this.transform(be.SCALE(t, n));
  }, e.prototype.rotate = function(t, n, r) {
    return this.transform(be.ROTATE(t, n, r));
  }, e.prototype.matrix = function(t, n, r, o, s, i) {
    return this.transform(be.MATRIX(t, n, r, o, s, i));
  }, e.prototype.skewX = function(t) {
    return this.transform(be.SKEW_X(t));
  }, e.prototype.skewY = function(t) {
    return this.transform(be.SKEW_Y(t));
  }, e.prototype.xSymmetry = function(t) {
    return this.transform(be.X_AXIS_SYMMETRY(t));
  }, e.prototype.ySymmetry = function(t) {
    return this.transform(be.Y_AXIS_SYMMETRY(t));
  }, e.prototype.annotateArcs = function() {
    return this.transform(be.ANNOTATE_ARCS());
  }, e;
})(), Ev = function(e) {
  return e === " " || e === "	" || e === "\r" || e === `
`;
}, ws = function(e) {
  return 48 <= e.charCodeAt(0) && e.charCodeAt(0) <= 57;
}, Ov = (function(e) {
  function t() {
    var n = e.call(this) || this;
    return n.curNumber = "", n.curCommandType = -1, n.curCommandRelative = !1, n.canParseCommandOrComma = !0, n.curNumberHasExp = !1, n.curNumberHasExpDigits = !1, n.curNumberHasDecimal = !1, n.curArgs = [], n;
  }
  return Zc(t, e), t.prototype.finish = function(n) {
    if (n === void 0 && (n = []), this.parse(" ", n), this.curArgs.length !== 0 || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
    return n;
  }, t.prototype.parse = function(n, r) {
    var o = this;
    r === void 0 && (r = []);
    for (var s = function(l) {
      r.push(l), o.curArgs.length = 0, o.canParseCommandOrComma = !0;
    }, i = 0; i < n.length; i++) {
      var a = n[i], c = !(this.curCommandType !== k.ARC || this.curArgs.length !== 3 && this.curArgs.length !== 4 || this.curNumber.length !== 1 || this.curNumber !== "0" && this.curNumber !== "1"), u = ws(a) && (this.curNumber === "0" && a === "0" || c);
      if (!ws(a) || u) if (a !== "e" && a !== "E") if (a !== "-" && a !== "+" || !this.curNumberHasExp || this.curNumberHasExpDigits) if (a !== "." || this.curNumberHasExp || this.curNumberHasDecimal || c) {
        if (this.curNumber && this.curCommandType !== -1) {
          var f = Number(this.curNumber);
          if (isNaN(f)) throw new SyntaxError("Invalid number ending at " + i);
          if (this.curCommandType === k.ARC) {
            if (this.curArgs.length === 0 || this.curArgs.length === 1) {
              if (0 > f) throw new SyntaxError('Expected positive number, got "' + f + '" at index "' + i + '"');
            } else if ((this.curArgs.length === 3 || this.curArgs.length === 4) && this.curNumber !== "0" && this.curNumber !== "1") throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + i + '"');
          }
          this.curArgs.push(f), this.curArgs.length === zv[this.curCommandType] && (k.HORIZ_LINE_TO === this.curCommandType ? s({ type: k.HORIZ_LINE_TO, relative: this.curCommandRelative, x: f }) : k.VERT_LINE_TO === this.curCommandType ? s({ type: k.VERT_LINE_TO, relative: this.curCommandRelative, y: f }) : this.curCommandType === k.MOVE_TO || this.curCommandType === k.LINE_TO || this.curCommandType === k.SMOOTH_QUAD_TO ? (s({ type: this.curCommandType, relative: this.curCommandRelative, x: this.curArgs[0], y: this.curArgs[1] }), k.MOVE_TO === this.curCommandType && (this.curCommandType = k.LINE_TO)) : this.curCommandType === k.CURVE_TO ? s({ type: k.CURVE_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x2: this.curArgs[2], y2: this.curArgs[3], x: this.curArgs[4], y: this.curArgs[5] }) : this.curCommandType === k.SMOOTH_CURVE_TO ? s({ type: k.SMOOTH_CURVE_TO, relative: this.curCommandRelative, x2: this.curArgs[0], y2: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === k.QUAD_TO ? s({ type: k.QUAD_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === k.ARC && s({ type: k.ARC, relative: this.curCommandRelative, rX: this.curArgs[0], rY: this.curArgs[1], xRot: this.curArgs[2], lArcFlag: this.curArgs[3], sweepFlag: this.curArgs[4], x: this.curArgs[5], y: this.curArgs[6] })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
        }
        if (!Ev(a)) if (a === "," && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;
        else if (a !== "+" && a !== "-" && a !== ".") if (u) this.curNumber = a, this.curNumberHasDecimal = !1;
        else {
          if (this.curArgs.length !== 0) throw new SyntaxError("Unterminated command at index " + i + ".");
          if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + a + '" at index ' + i + ". Command cannot follow comma");
          if (this.canParseCommandOrComma = !1, a !== "z" && a !== "Z") if (a === "h" || a === "H") this.curCommandType = k.HORIZ_LINE_TO, this.curCommandRelative = a === "h";
          else if (a === "v" || a === "V") this.curCommandType = k.VERT_LINE_TO, this.curCommandRelative = a === "v";
          else if (a === "m" || a === "M") this.curCommandType = k.MOVE_TO, this.curCommandRelative = a === "m";
          else if (a === "l" || a === "L") this.curCommandType = k.LINE_TO, this.curCommandRelative = a === "l";
          else if (a === "c" || a === "C") this.curCommandType = k.CURVE_TO, this.curCommandRelative = a === "c";
          else if (a === "s" || a === "S") this.curCommandType = k.SMOOTH_CURVE_TO, this.curCommandRelative = a === "s";
          else if (a === "q" || a === "Q") this.curCommandType = k.QUAD_TO, this.curCommandRelative = a === "q";
          else if (a === "t" || a === "T") this.curCommandType = k.SMOOTH_QUAD_TO, this.curCommandRelative = a === "t";
          else {
            if (a !== "a" && a !== "A") throw new SyntaxError('Unexpected character "' + a + '" at index ' + i + ".");
            this.curCommandType = k.ARC, this.curCommandRelative = a === "a";
          }
          else r.push({ type: k.CLOSE_PATH }), this.canParseCommandOrComma = !0, this.curCommandType = -1;
        }
        else this.curNumber = a, this.curNumberHasDecimal = a === ".";
      } else this.curNumber += a, this.curNumberHasDecimal = !0;
      else this.curNumber += a;
      else this.curNumber += a, this.curNumberHasExp = !0;
      else this.curNumber += a, this.curNumberHasExpDigits = this.curNumberHasExp;
    }
    return r;
  }, t.prototype.transform = function(n) {
    return Object.create(this, { parse: { value: function(r, o) {
      o === void 0 && (o = []);
      for (var s = 0, i = Object.getPrototypeOf(this).parse.call(this, r); s < i.length; s++) {
        var a = i[s], c = n(a);
        Array.isArray(c) ? o.push.apply(o, c) : o.push(c);
      }
      return o;
    } } });
  }, t;
})(xc), k = (function(e) {
  function t(n) {
    var r = e.call(this) || this;
    return r.commands = typeof n == "string" ? t.parse(n) : n, r;
  }
  return Zc(t, e), t.prototype.encode = function() {
    return t.encode(this.commands);
  }, t.prototype.getBounds = function() {
    var n = be.CALCULATE_BOUNDS();
    return this.transform(n), n;
  }, t.prototype.transform = function(n) {
    for (var r = [], o = 0, s = this.commands; o < s.length; o++) {
      var i = n(s[o]);
      Array.isArray(i) ? r.push.apply(r, i) : r.push(i);
    }
    return this.commands = r, this;
  }, t.encode = function(n) {
    return $v(n);
  }, t.parse = function(n) {
    var r = new Ov(), o = [];
    return r.parse(n, o), r.finish(o), o;
  }, t.CLOSE_PATH = 1, t.MOVE_TO = 2, t.HORIZ_LINE_TO = 4, t.VERT_LINE_TO = 8, t.LINE_TO = 16, t.CURVE_TO = 32, t.SMOOTH_CURVE_TO = 64, t.QUAD_TO = 128, t.SMOOTH_QUAD_TO = 256, t.ARC = 512, t.LINE_COMMANDS = t.LINE_TO | t.HORIZ_LINE_TO | t.VERT_LINE_TO, t.DRAWING_COMMANDS = t.HORIZ_LINE_TO | t.VERT_LINE_TO | t.LINE_TO | t.CURVE_TO | t.SMOOTH_CURVE_TO | t.QUAD_TO | t.SMOOTH_QUAD_TO | t.ARC, t;
})(xc), zv = ((Je = {})[k.MOVE_TO] = 2, Je[k.LINE_TO] = 2, Je[k.HORIZ_LINE_TO] = 1, Je[k.VERT_LINE_TO] = 1, Je[k.CLOSE_PATH] = 0, Je[k.QUAD_TO] = 4, Je[k.SMOOTH_QUAD_TO] = 2, Je[k.CURVE_TO] = 6, Je[k.SMOOTH_CURVE_TO] = 4, Je[k.ARC] = 7, Je);
function ln(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ln = function(t) {
    return typeof t;
  } : ln = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ln(e);
}
function Cv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var Tv = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259], Av = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
function Sv(e, t, n, r, o) {
  if (typeof e == "string" && (e = document.getElementById(e)), !e || ln(e) !== "object" || !("getContext" in e))
    throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
  var s = e.getContext("2d");
  try {
    return s.getImageData(t, n, r, o);
  } catch (i) {
    throw new Error("unable to access image data: " + i);
  }
}
function o0(e, t, n, r, o, s) {
  if (!(isNaN(s) || s < 1)) {
    s |= 0;
    var i = Sv(e, t, n, r, o);
    i = Nv(i, t, n, r, o, s), e.getContext("2d").putImageData(i, t, n);
  }
}
function Nv(e, t, n, r, o, s) {
  for (var i = e.data, a = 2 * s + 1, c = r - 1, u = o - 1, f = s + 1, l = f * (f + 1) / 2, h = new ks(), d = h, g, _ = 1; _ < a; _++)
    d = d.next = new ks(), _ === f && (g = d);
  d.next = h;
  for (var w = null, T = null, M = 0, $ = 0, z = Tv[s], S = Av[s], F = 0; F < o; F++) {
    d = h;
    for (var E = i[$], m = i[$ + 1], p = i[$ + 2], v = i[$ + 3], C = 0; C < f; C++)
      d.r = E, d.g = m, d.b = p, d.a = v, d = d.next;
    for (var O = 0, R = 0, j = 0, W = 0, X = f * E, I = f * m, L = f * p, A = f * v, B = l * E, Z = l * m, D = l * p, N = l * v, H = 1; H < f; H++) {
      var V = $ + ((c < H ? c : H) << 2), ie = i[V], $e = i[V + 1], q = i[V + 2], G = i[V + 3], se = f - H;
      B += (d.r = ie) * se, Z += (d.g = $e) * se, D += (d.b = q) * se, N += (d.a = G) * se, O += ie, R += $e, j += q, W += G, d = d.next;
    }
    w = h, T = g;
    for (var U = 0; U < r; U++) {
      var ae = N * z >>> S;
      if (i[$ + 3] = ae, ae !== 0) {
        var ue = 255 / ae;
        i[$] = (B * z >>> S) * ue, i[$ + 1] = (Z * z >>> S) * ue, i[$ + 2] = (D * z >>> S) * ue;
      } else
        i[$] = i[$ + 1] = i[$ + 2] = 0;
      B -= X, Z -= I, D -= L, N -= A, X -= w.r, I -= w.g, L -= w.b, A -= w.a;
      var K = U + s + 1;
      K = M + (K < c ? K : c) << 2, O += w.r = i[K], R += w.g = i[K + 1], j += w.b = i[K + 2], W += w.a = i[K + 3], B += O, Z += R, D += j, N += W, w = w.next;
      var te = T, Y = te.r, Ne = te.g, J = te.b, fe = te.a;
      X += Y, I += Ne, L += J, A += fe, O -= Y, R -= Ne, j -= J, W -= fe, T = T.next, $ += 4;
    }
    M += r;
  }
  for (var Ce = 0; Ce < r; Ce++) {
    $ = Ce << 2;
    var Ie = i[$], Ee = i[$ + 1], Pe = i[$ + 2], ne = i[$ + 3], Ze = f * Ie, ve = f * Ee, Oe = f * Pe, Fe = f * ne, nt = l * Ie, ht = l * Ee, Ve = l * Pe, Te = l * ne;
    d = h;
    for (var rt = 0; rt < f; rt++)
      d.r = Ie, d.g = Ee, d.b = Pe, d.a = ne, d = d.next;
    for (var St = r, Nn = 0, In = 0, Zn = 0, xn = 0, qt = 1; qt <= s; qt++) {
      $ = St + Ce << 2;
      var Wt = f - qt;
      nt += (d.r = Ie = i[$]) * Wt, ht += (d.g = Ee = i[$ + 1]) * Wt, Ve += (d.b = Pe = i[$ + 2]) * Wt, Te += (d.a = ne = i[$ + 3]) * Wt, xn += Ie, Nn += Ee, In += Pe, Zn += ne, d = d.next, qt < u && (St += r);
    }
    $ = Ce, w = h, T = g;
    for (var Rn = 0; Rn < o; Rn++) {
      var xe = $ << 2;
      i[xe + 3] = ne = Te * z >>> S, ne > 0 ? (ne = 255 / ne, i[xe] = (nt * z >>> S) * ne, i[xe + 1] = (ht * z >>> S) * ne, i[xe + 2] = (Ve * z >>> S) * ne) : i[xe] = i[xe + 1] = i[xe + 2] = 0, nt -= Ze, ht -= ve, Ve -= Oe, Te -= Fe, Ze -= w.r, ve -= w.g, Oe -= w.b, Fe -= w.a, xe = Ce + ((xe = Rn + f) < u ? xe : u) * r << 2, nt += xn += w.r = i[xe], ht += Nn += w.g = i[xe + 1], Ve += In += w.b = i[xe + 2], Te += Zn += w.a = i[xe + 3], w = w.next, Ze += Ie = T.r, ve += Ee = T.g, Oe += Pe = T.b, Fe += ne = T.a, xn -= Ie, Nn -= Ee, In -= Pe, Zn -= ne, T = T.next, $ += r;
    }
  }
  return e;
}
var ks = (
  /**
   * Set properties.
   */
  function e() {
    Cv(this, e), this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
  }
);
export {
  Ih as $,
  qv as A,
  r_ as B,
  Hg as C,
  Ah as D,
  na as E,
  Oh as F,
  Uv as G,
  ea as H,
  Nh as I,
  xh as J,
  Zh as K,
  Eh as L,
  Fv as M,
  Yi as N,
  Hv as O,
  bh as P,
  ta as Q,
  r0 as R,
  Pr as S,
  Rr as T,
  Dr as U,
  da as V,
  pa as W,
  Sh as X,
  ur as Y,
  oe as Z,
  Vt as _,
  Xv as a,
  Vi as a0,
  mn as a1,
  Gi as a2,
  Jn as a3,
  Dv as a4,
  Th as a5,
  Qv as a6,
  e0 as b,
  w_ as c,
  Gv as d,
  k as e,
  t0 as f,
  Jt as g,
  $h as h,
  ca as i,
  zh as j,
  wh as k,
  Qi as l,
  Wv as m,
  kh as n,
  Ch as o,
  o0 as p,
  Vv as q,
  n0 as r,
  Rh as s,
  Bv as t,
  jv as u,
  Yg as v,
  Jv as w,
  Lv as x,
  Mv as y,
  Yv as z
};

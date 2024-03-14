var Fp = Object.defineProperty;
var $p = (t, e, n) => e in t ? Fp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var v = (t, e, n) => ($p(t, typeof e != "symbol" ? e + "" : e, n), n);
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ba(t, e) {
  const n = new Set(t.split(","));
  return e ? (i) => n.has(i.toLowerCase()) : (i) => n.has(i);
}
const St = {}, pi = [], Ee = () => {
}, Bp = () => !1, Ks = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Ua = (t) => t.startsWith("onUpdate:"), Gt = Object.assign, qa = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, Up = Object.prototype.hasOwnProperty, dt = (t, e) => Up.call(t, e), et = Array.isArray, mi = (t) => br(t) === "[object Map]", Ii = (t) => br(t) === "[object Set]", Ql = (t) => br(t) === "[object Date]", ot = (t) => typeof t == "function", Dt = (t) => typeof t == "string", kn = (t) => typeof t == "symbol", kt = (t) => t !== null && typeof t == "object", If = (t) => (kt(t) || ot(t)) && ot(t.then) && ot(t.catch), Lf = Object.prototype.toString, br = (t) => Lf.call(t), qp = (t) => br(t).slice(8, -1), Mf = (t) => br(t) === "[object Object]", Wa = (t) => Dt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Ki = /* @__PURE__ */ Ba(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Xs = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, Wp = /-(\w)/g, Ke = Xs((t) => t.replace(Wp, (e, n) => n ? n.toUpperCase() : "")), Hp = /\B([A-Z])/g, Li = Xs(
  (t) => t.replace(Hp, "-$1").toLowerCase()
), Js = Xs((t) => t.charAt(0).toUpperCase() + t.slice(1)), xo = Xs((t) => t ? `on${Js(t)}` : ""), Sn = (t, e) => !Object.is(t, e), rs = (t, e) => {
  for (let n = 0; n < t.length; n++)
    t[n](e);
}, _s = (t, e, n) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, nr = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Zl;
const Rf = () => Zl || (Zl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function zt(t) {
  if (et(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const i = t[n], r = Dt(i) ? jp(i) : zt(i);
      if (r)
        for (const s in r)
          e[s] = r[s];
    }
    return e;
  } else if (Dt(t) || kt(t))
    return t;
}
const Vp = /;(?![^(]*\))/g, zp = /:([^]+)/, Gp = /\/\*[^]*?\*\//g;
function jp(t) {
  const e = {};
  return t.replace(Gp, "").split(Vp).forEach((n) => {
    if (n) {
      const i = n.split(zp);
      i.length > 1 && (e[i[0].trim()] = i[1].trim());
    }
  }), e;
}
function Yn(t) {
  let e = "";
  if (Dt(t))
    e = t;
  else if (et(t))
    for (let n = 0; n < t.length; n++) {
      const i = Yn(t[n]);
      i && (e += i + " ");
    }
  else if (kt(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const Yp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Kp = /* @__PURE__ */ Ba(Yp);
function Df(t) {
  return !!t || t === "";
}
function Xp(t, e) {
  if (t.length !== e.length)
    return !1;
  let n = !0;
  for (let i = 0; n && i < t.length; i++)
    n = Kn(t[i], e[i]);
  return n;
}
function Kn(t, e) {
  if (t === e)
    return !0;
  let n = Ql(t), i = Ql(e);
  if (n || i)
    return n && i ? t.getTime() === e.getTime() : !1;
  if (n = kn(t), i = kn(e), n || i)
    return t === e;
  if (n = et(t), i = et(e), n || i)
    return n && i ? Xp(t, e) : !1;
  if (n = kt(t), i = kt(e), n || i) {
    if (!n || !i)
      return !1;
    const r = Object.keys(t).length, s = Object.keys(e).length;
    if (r !== s)
      return !1;
    for (const o in t) {
      const a = t.hasOwnProperty(o), l = e.hasOwnProperty(o);
      if (a && !l || !a && l || !Kn(t[o], e[o]))
        return !1;
    }
  }
  return String(t) === String(e);
}
function Ha(t, e) {
  return t.findIndex((n) => Kn(n, e));
}
const bt = (t) => Dt(t) ? t : t == null ? "" : et(t) || kt(t) && (t.toString === Lf || !ot(t.toString)) ? JSON.stringify(t, Ff, 2) : String(t), Ff = (t, e) => e && e.__v_isRef ? Ff(t, e.value) : mi(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [i, r], s) => (n[ko(i, s) + " =>"] = r, n),
    {}
  )
} : Ii(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => ko(n))
} : kn(e) ? ko(e) : kt(e) && !et(e) && !Mf(e) ? String(e) : e, ko = (t, e = "") => {
  var n;
  return kn(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
};
/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let me;
class $f {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = me, !e && me && (this.index = (me.scopes || (me.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const n = me;
      try {
        return me = this, e();
      } finally {
        me = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    me = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    me = this.parent;
  }
  stop(e) {
    if (this._active) {
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, i = this.scopes.length; n < i; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !e) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Jp(t) {
  return new $f(t);
}
function Qp(t, e = me) {
  e && e.active && e.effects.push(t);
}
function Bf() {
  return me;
}
function Zp(t) {
  me && me.cleanups.push(t);
}
let zn;
class Va {
  constructor(e, n, i, r) {
    this.fn = e, this.trigger = n, this.scheduler = i, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Qp(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, ti();
      for (let e = 0; e < this._depsLength; e++) {
        const n = this.deps[e];
        if (n.computed && (tm(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), ei();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(e) {
    this._dirtyLevel = e ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let e = wn, n = zn;
    try {
      return wn = !0, zn = this, this._runnings++, tc(this), this.fn();
    } finally {
      ec(this), this._runnings--, zn = n, wn = e;
    }
  }
  stop() {
    var e;
    this.active && (tc(this), ec(this), (e = this.onStop) == null || e.call(this), this.active = !1);
  }
}
function tm(t) {
  return t.value;
}
function tc(t) {
  t._trackId++, t._depsLength = 0;
}
function ec(t) {
  if (t.deps.length > t._depsLength) {
    for (let e = t._depsLength; e < t.deps.length; e++)
      Uf(t.deps[e], t);
    t.deps.length = t._depsLength;
  }
}
function Uf(t, e) {
  const n = t.get(e);
  n !== void 0 && e._trackId !== n && (t.delete(e), t.size === 0 && t.cleanup());
}
let wn = !0, Vo = 0;
const qf = [];
function ti() {
  qf.push(wn), wn = !1;
}
function ei() {
  const t = qf.pop();
  wn = t === void 0 ? !0 : t;
}
function za() {
  Vo++;
}
function Ga() {
  for (Vo--; !Vo && zo.length; )
    zo.shift()();
}
function Wf(t, e, n) {
  if (e.get(t) !== t._trackId) {
    e.set(t, t._trackId);
    const i = t.deps[t._depsLength];
    i !== e ? (i && Uf(i, t), t.deps[t._depsLength++] = e) : t._depsLength++;
  }
}
const zo = [];
function Hf(t, e, n) {
  za();
  for (const i of t.keys()) {
    let r;
    i._dirtyLevel < e && (r ?? (r = t.get(i) === i._trackId)) && (i._shouldSchedule || (i._shouldSchedule = i._dirtyLevel === 0), i._dirtyLevel = e), i._shouldSchedule && (r ?? (r = t.get(i) === i._trackId)) && (i.trigger(), (!i._runnings || i.allowRecurse) && i._dirtyLevel !== 2 && (i._shouldSchedule = !1, i.scheduler && zo.push(i.scheduler)));
  }
  Ga();
}
const Vf = (t, e) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = t, n.computed = e, n;
}, Go = /* @__PURE__ */ new WeakMap(), Gn = Symbol(""), jo = Symbol("");
function le(t, e, n) {
  if (wn && zn) {
    let i = Go.get(t);
    i || Go.set(t, i = /* @__PURE__ */ new Map());
    let r = i.get(n);
    r || i.set(n, r = Vf(() => i.delete(n))), Wf(
      zn,
      r
    );
  }
}
function rn(t, e, n, i, r, s) {
  const o = Go.get(t);
  if (!o)
    return;
  let a = [];
  if (e === "clear")
    a = [...o.values()];
  else if (n === "length" && et(t)) {
    const l = Number(i);
    o.forEach((c, u) => {
      (u === "length" || !kn(u) && u >= l) && a.push(c);
    });
  } else
    switch (n !== void 0 && a.push(o.get(n)), e) {
      case "add":
        et(t) ? Wa(n) && a.push(o.get("length")) : (a.push(o.get(Gn)), mi(t) && a.push(o.get(jo)));
        break;
      case "delete":
        et(t) || (a.push(o.get(Gn)), mi(t) && a.push(o.get(jo)));
        break;
      case "set":
        mi(t) && a.push(o.get(Gn));
        break;
    }
  za();
  for (const l of a)
    l && Hf(
      l,
      4
    );
  Ga();
}
const em = /* @__PURE__ */ Ba("__proto__,__v_isRef,__isVue"), zf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(kn)
), nc = /* @__PURE__ */ nm();
function nm() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...n) {
      const i = pt(this);
      for (let s = 0, o = this.length; s < o; s++)
        le(i, "get", s + "");
      const r = i[e](...n);
      return r === -1 || r === !1 ? i[e](...n.map(pt)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...n) {
      ti(), za();
      const i = pt(this)[e].apply(this, n);
      return Ga(), ei(), i;
    };
  }), t;
}
function im(t) {
  const e = pt(this);
  return le(e, "has", t), e.hasOwnProperty(t);
}
class Gf {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n;
  }
  get(e, n, i) {
    const r = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return i === (r ? s ? gm : Xf : s ? Kf : Yf).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(i) ? e : void 0;
    const o = et(e);
    if (!r) {
      if (o && dt(nc, n))
        return Reflect.get(nc, n, i);
      if (n === "hasOwnProperty")
        return im;
    }
    const a = Reflect.get(e, n, i);
    return (kn(n) ? zf.has(n) : em(n)) || (r || le(e, "get", n), s) ? a : ne(a) ? o && Wa(n) ? a : a.value : kt(a) ? r ? Xa(a) : Ka(a) : a;
  }
}
class jf extends Gf {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, i, r) {
    let s = e[n];
    if (!this._isShallow) {
      const l = wi(s);
      if (!ws(i) && !wi(i) && (s = pt(s), i = pt(i)), !et(e) && ne(s) && !ne(i))
        return l ? !1 : (s.value = i, !0);
    }
    const o = et(e) && Wa(n) ? Number(n) < e.length : dt(e, n), a = Reflect.set(e, n, i, r);
    return e === pt(r) && (o ? Sn(i, s) && rn(e, "set", n, i) : rn(e, "add", n, i)), a;
  }
  deleteProperty(e, n) {
    const i = dt(e, n);
    e[n];
    const r = Reflect.deleteProperty(e, n);
    return r && i && rn(e, "delete", n, void 0), r;
  }
  has(e, n) {
    const i = Reflect.has(e, n);
    return (!kn(n) || !zf.has(n)) && le(e, "has", n), i;
  }
  ownKeys(e) {
    return le(
      e,
      "iterate",
      et(e) ? "length" : Gn
    ), Reflect.ownKeys(e);
  }
}
class rm extends Gf {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return !0;
  }
  deleteProperty(e, n) {
    return !0;
  }
}
const sm = /* @__PURE__ */ new jf(), om = /* @__PURE__ */ new rm(), am = /* @__PURE__ */ new jf(
  !0
), ja = (t) => t, Qs = (t) => Reflect.getPrototypeOf(t);
function Or(t, e, n = !1, i = !1) {
  t = t.__v_raw;
  const r = pt(t), s = pt(e);
  n || (Sn(e, s) && le(r, "get", e), le(r, "get", s));
  const { has: o } = Qs(r), a = i ? ja : n ? Za : ir;
  if (o.call(r, e))
    return a(t.get(e));
  if (o.call(r, s))
    return a(t.get(s));
  t !== r && t.get(e);
}
function Pr(t, e = !1) {
  const n = this.__v_raw, i = pt(n), r = pt(t);
  return e || (Sn(t, r) && le(i, "has", t), le(i, "has", r)), t === r ? n.has(t) : n.has(t) || n.has(r);
}
function Nr(t, e = !1) {
  return t = t.__v_raw, !e && le(pt(t), "iterate", Gn), Reflect.get(t, "size", t);
}
function ic(t) {
  t = pt(t);
  const e = pt(this);
  return Qs(e).has.call(e, t) || (e.add(t), rn(e, "add", t, t)), this;
}
function rc(t, e) {
  e = pt(e);
  const n = pt(this), { has: i, get: r } = Qs(n);
  let s = i.call(n, t);
  s || (t = pt(t), s = i.call(n, t));
  const o = r.call(n, t);
  return n.set(t, e), s ? Sn(e, o) && rn(n, "set", t, e) : rn(n, "add", t, e), this;
}
function sc(t) {
  const e = pt(this), { has: n, get: i } = Qs(e);
  let r = n.call(e, t);
  r || (t = pt(t), r = n.call(e, t)), i && i.call(e, t);
  const s = e.delete(t);
  return r && rn(e, "delete", t, void 0), s;
}
function oc() {
  const t = pt(this), e = t.size !== 0, n = t.clear();
  return e && rn(t, "clear", void 0, void 0), n;
}
function Ir(t, e) {
  return function(i, r) {
    const s = this, o = s.__v_raw, a = pt(o), l = e ? ja : t ? Za : ir;
    return !t && le(a, "iterate", Gn), o.forEach((c, u) => i.call(r, l(c), l(u), s));
  };
}
function Lr(t, e, n) {
  return function(...i) {
    const r = this.__v_raw, s = pt(r), o = mi(s), a = t === "entries" || t === Symbol.iterator && o, l = t === "keys" && o, c = r[t](...i), u = n ? ja : e ? Za : ir;
    return !e && le(
      s,
      "iterate",
      l ? jo : Gn
    ), {
      // iterator protocol
      next() {
        const { value: f, done: h } = c.next();
        return h ? { value: f, done: h } : {
          value: a ? [u(f[0]), u(f[1])] : u(f),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function hn(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function lm() {
  const t = {
    get(s) {
      return Or(this, s);
    },
    get size() {
      return Nr(this);
    },
    has: Pr,
    add: ic,
    set: rc,
    delete: sc,
    clear: oc,
    forEach: Ir(!1, !1)
  }, e = {
    get(s) {
      return Or(this, s, !1, !0);
    },
    get size() {
      return Nr(this);
    },
    has: Pr,
    add: ic,
    set: rc,
    delete: sc,
    clear: oc,
    forEach: Ir(!1, !0)
  }, n = {
    get(s) {
      return Or(this, s, !0);
    },
    get size() {
      return Nr(this, !0);
    },
    has(s) {
      return Pr.call(this, s, !0);
    },
    add: hn("add"),
    set: hn("set"),
    delete: hn("delete"),
    clear: hn("clear"),
    forEach: Ir(!0, !1)
  }, i = {
    get(s) {
      return Or(this, s, !0, !0);
    },
    get size() {
      return Nr(this, !0);
    },
    has(s) {
      return Pr.call(this, s, !0);
    },
    add: hn("add"),
    set: hn("set"),
    delete: hn("delete"),
    clear: hn("clear"),
    forEach: Ir(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    t[s] = Lr(
      s,
      !1,
      !1
    ), n[s] = Lr(
      s,
      !0,
      !1
    ), e[s] = Lr(
      s,
      !1,
      !0
    ), i[s] = Lr(
      s,
      !0,
      !0
    );
  }), [
    t,
    n,
    e,
    i
  ];
}
const [
  cm,
  um,
  fm,
  hm
] = /* @__PURE__ */ lm();
function Ya(t, e) {
  const n = e ? t ? hm : fm : t ? um : cm;
  return (i, r, s) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? i : Reflect.get(
    dt(n, r) && r in i ? n : i,
    r,
    s
  );
}
const dm = {
  get: /* @__PURE__ */ Ya(!1, !1)
}, pm = {
  get: /* @__PURE__ */ Ya(!1, !0)
}, mm = {
  get: /* @__PURE__ */ Ya(!0, !1)
}, Yf = /* @__PURE__ */ new WeakMap(), Kf = /* @__PURE__ */ new WeakMap(), Xf = /* @__PURE__ */ new WeakMap(), gm = /* @__PURE__ */ new WeakMap();
function ym(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function bm(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : ym(qp(t));
}
function Ka(t) {
  return wi(t) ? t : Ja(
    t,
    !1,
    sm,
    dm,
    Yf
  );
}
function vm(t) {
  return Ja(
    t,
    !1,
    am,
    pm,
    Kf
  );
}
function Xa(t) {
  return Ja(
    t,
    !0,
    om,
    mm,
    Xf
  );
}
function Ja(t, e, n, i, r) {
  if (!kt(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = r.get(t);
  if (s)
    return s;
  const o = bm(t);
  if (o === 0)
    return t;
  const a = new Proxy(
    t,
    o === 2 ? i : n
  );
  return r.set(t, a), a;
}
function gi(t) {
  return wi(t) ? gi(t.__v_raw) : !!(t && t.__v_isReactive);
}
function wi(t) {
  return !!(t && t.__v_isReadonly);
}
function ws(t) {
  return !!(t && t.__v_isShallow);
}
function Jf(t) {
  return gi(t) || wi(t);
}
function pt(t) {
  const e = t && t.__v_raw;
  return e ? pt(e) : t;
}
function Qa(t) {
  return Object.isExtensible(t) && _s(t, "__v_skip", !0), t;
}
const ir = (t) => kt(t) ? Ka(t) : t, Za = (t) => kt(t) ? Xa(t) : t;
class Qf {
  constructor(e, n, i, r) {
    this.getter = e, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Va(
      () => e(this._value),
      () => ss(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = i;
  }
  get value() {
    const e = pt(this);
    return (!e._cacheable || e.effect.dirty) && Sn(e._value, e._value = e.effect.run()) && ss(e, 4), Zf(e), e.effect._dirtyLevel >= 2 && ss(e, 2), e._value;
  }
  set value(e) {
    this._setter(e);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(e) {
    this.effect.dirty = e;
  }
  // #endregion
}
function _m(t, e, n = !1) {
  let i, r;
  const s = ot(t);
  return s ? (i = t, r = Ee) : (i = t.get, r = t.set), new Qf(i, r, s || !r, n);
}
function Zf(t) {
  var e;
  wn && zn && (t = pt(t), Wf(
    zn,
    (e = t.dep) != null ? e : t.dep = Vf(
      () => t.dep = void 0,
      t instanceof Qf ? t : void 0
    )
  ));
}
function ss(t, e = 4, n) {
  t = pt(t);
  const i = t.dep;
  i && Hf(
    i,
    e
  );
}
function ne(t) {
  return !!(t && t.__v_isRef === !0);
}
function yi(t) {
  return th(t, !1);
}
function ui(t) {
  return th(t, !0);
}
function th(t, e) {
  return ne(t) ? t : new wm(t, e);
}
class wm {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : pt(e), this._value = n ? e : ir(e);
  }
  get value() {
    return Zf(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || ws(e) || wi(e);
    e = n ? e : pt(e), Sn(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : ir(e), ss(this, 4));
  }
}
function eh(t) {
  return ne(t) ? t.value : t;
}
const xm = {
  get: (t, e, n) => eh(Reflect.get(t, e, n)),
  set: (t, e, n, i) => {
    const r = t[e];
    return ne(r) && !ne(n) ? (r.value = n, !0) : Reflect.set(t, e, n, i);
  }
};
function nh(t) {
  return gi(t) ? t : new Proxy(t, xm);
}
/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function xn(t, e, n, i) {
  try {
    return i ? t(...i) : t();
  } catch (r) {
    vr(r, e, n);
  }
}
function Me(t, e, n, i) {
  if (ot(t)) {
    const s = xn(t, e, n, i);
    return s && If(s) && s.catch((o) => {
      vr(o, e, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < t.length; s++)
    r.push(Me(t[s], e, n, i));
  return r;
}
function vr(t, e, n, i = !0) {
  const r = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const o = e.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const c = s.ec;
      if (c) {
        for (let u = 0; u < c.length; u++)
          if (c[u](t, o, a) === !1)
            return;
      }
      s = s.parent;
    }
    const l = e.appContext.config.errorHandler;
    if (l) {
      xn(
        l,
        null,
        10,
        [t, o, a]
      );
      return;
    }
  }
  km(t, n, r, i);
}
function km(t, e, n, i = !0) {
  console.error(t);
}
let rr = !1, Yo = !1;
const Xt = [];
let He = 0;
const bi = [];
let gn = null, Un = 0;
const ih = /* @__PURE__ */ Promise.resolve();
let tl = null;
function Zs(t) {
  const e = tl || ih;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Sm(t) {
  let e = He + 1, n = Xt.length;
  for (; e < n; ) {
    const i = e + n >>> 1, r = Xt[i], s = sr(r);
    s < t || s === t && r.pre ? e = i + 1 : n = i;
  }
  return e;
}
function to(t) {
  (!Xt.length || !Xt.includes(
    t,
    rr && t.allowRecurse ? He + 1 : He
  )) && (t.id == null ? Xt.push(t) : Xt.splice(Sm(t.id), 0, t), rh());
}
function rh() {
  !rr && !Yo && (Yo = !0, tl = ih.then(oh));
}
function Em(t) {
  const e = Xt.indexOf(t);
  e > He && Xt.splice(e, 1);
}
function Tm(t) {
  et(t) ? bi.push(...t) : (!gn || !gn.includes(
    t,
    t.allowRecurse ? Un + 1 : Un
  )) && bi.push(t), rh();
}
function ac(t, e, n = rr ? He + 1 : 0) {
  for (; n < Xt.length; n++) {
    const i = Xt[n];
    if (i && i.pre) {
      if (t && i.id !== t.uid)
        continue;
      Xt.splice(n, 1), n--, i();
    }
  }
}
function sh(t) {
  if (bi.length) {
    const e = [...new Set(bi)].sort(
      (n, i) => sr(n) - sr(i)
    );
    if (bi.length = 0, gn) {
      gn.push(...e);
      return;
    }
    for (gn = e, Un = 0; Un < gn.length; Un++)
      gn[Un]();
    gn = null, Un = 0;
  }
}
const sr = (t) => t.id == null ? 1 / 0 : t.id, Am = (t, e) => {
  const n = sr(t) - sr(e);
  if (n === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return n;
};
function oh(t) {
  Yo = !1, rr = !0, Xt.sort(Am);
  try {
    for (He = 0; He < Xt.length; He++) {
      const e = Xt[He];
      e && e.active !== !1 && xn(e, null, 14);
    }
  } finally {
    He = 0, Xt.length = 0, sh(), rr = !1, tl = null, (Xt.length || bi.length) && oh();
  }
}
function Cm(t, e, ...n) {
  if (t.isUnmounted)
    return;
  const i = t.vnode.props || St;
  let r = n;
  const s = e.startsWith("update:"), o = s && e.slice(7);
  if (o && o in i) {
    const u = `${o === "modelValue" ? "model" : o}Modifiers`, { number: f, trim: h } = i[u] || St;
    h && (r = n.map((p) => Dt(p) ? p.trim() : p)), f && (r = n.map(nr));
  }
  let a, l = i[a = xo(e)] || // also try camelCase event handler (#2249)
  i[a = xo(Ke(e))];
  !l && s && (l = i[a = xo(Li(e))]), l && Me(
    l,
    t,
    6,
    r
  );
  const c = i[a + "Once"];
  if (c) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[a])
      return;
    t.emitted[a] = !0, Me(
      c,
      t,
      6,
      r
    );
  }
}
function ah(t, e, n = !1) {
  const i = e.emitsCache, r = i.get(t);
  if (r !== void 0)
    return r;
  const s = t.emits;
  let o = {}, a = !1;
  if (!ot(t)) {
    const l = (c) => {
      const u = ah(c, e, !0);
      u && (a = !0, Gt(o, u));
    };
    !n && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
  }
  return !s && !a ? (kt(t) && i.set(t, null), null) : (et(s) ? s.forEach((l) => o[l] = null) : Gt(o, s), kt(t) && i.set(t, o), o);
}
function eo(t, e) {
  return !t || !Ks(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), dt(t, e[0].toLowerCase() + e.slice(1)) || dt(t, Li(e)) || dt(t, e));
}
let ee = null, no = null;
function xs(t) {
  const e = ee;
  return ee = t, no = t && t.type.__scopeId || null, e;
}
function Om(t) {
  no = t;
}
function Pm() {
  no = null;
}
function Nm(t, e = ee, n) {
  if (!e || t._n)
    return t;
  const i = (...r) => {
    i._d && bc(-1);
    const s = xs(e);
    let o;
    try {
      o = t(...r);
    } finally {
      xs(s), i._d && bc(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function So(t) {
  const {
    type: e,
    vnode: n,
    proxy: i,
    withProxy: r,
    props: s,
    propsOptions: [o],
    slots: a,
    attrs: l,
    emit: c,
    render: u,
    renderCache: f,
    data: h,
    setupState: p,
    ctx: y,
    inheritAttrs: k
  } = t;
  let w, g;
  const b = xs(t);
  try {
    if (n.shapeFlag & 4) {
      const S = r || i, O = S;
      w = We(
        u.call(
          O,
          S,
          f,
          s,
          p,
          h,
          y
        )
      ), g = l;
    } else {
      const S = e;
      w = We(
        S.length > 1 ? S(
          s,
          { attrs: l, slots: a, emit: c }
        ) : S(
          s,
          null
          /* we know it doesn't need it */
        )
      ), g = e.props ? l : Im(l);
    }
  } catch (S) {
    Zi.length = 0, vr(S, t, 1), w = mt(Xn);
  }
  let x = w;
  if (g && k !== !1) {
    const S = Object.keys(g), { shapeFlag: O } = x;
    S.length && O & 7 && (o && S.some(Ua) && (g = Lm(
      g,
      o
    )), x = xi(x, g));
  }
  return n.dirs && (x = xi(x), x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs), n.transition && (x.transition = n.transition), w = x, xs(b), w;
}
const Im = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || Ks(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, Lm = (t, e) => {
  const n = {};
  for (const i in t)
    (!Ua(i) || !(i.slice(9) in e)) && (n[i] = t[i]);
  return n;
};
function Mm(t, e, n) {
  const { props: i, children: r, component: s } = t, { props: o, children: a, patchFlag: l } = e, c = s.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? lc(i, o, c) : !!o;
    if (l & 8) {
      const u = e.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        if (o[h] !== i[h] && !eo(c, h))
          return !0;
      }
    }
  } else
    return (r || a) && (!a || !a.$stable) ? !0 : i === o ? !1 : i ? o ? lc(i, o, c) : !0 : !!o;
  return !1;
}
function lc(t, e, n) {
  const i = Object.keys(e);
  if (i.length !== Object.keys(t).length)
    return !0;
  for (let r = 0; r < i.length; r++) {
    const s = i[r];
    if (e[s] !== t[s] && !eo(n, s))
      return !0;
  }
  return !1;
}
function Rm({ vnode: t, parent: e }, n) {
  for (; e; ) {
    const i = e.subTree;
    if (i.suspense && i.suspense.activeBranch === t && (i.el = t.el), i === t)
      (t = e.vnode).el = n, e = e.parent;
    else
      break;
  }
}
const el = "components";
function si(t, e) {
  return ch(el, t, !0, e) || t;
}
const lh = Symbol.for("v-ndc");
function Dm(t) {
  return Dt(t) ? ch(el, t, !1) || t : t || lh;
}
function ch(t, e, n = !0, i = !1) {
  const r = ee || qt;
  if (r) {
    const s = r.type;
    if (t === el) {
      const a = Pg(
        s,
        !1
      );
      if (a && (a === e || a === Ke(e) || a === Js(Ke(e))))
        return s;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      cc(r[t] || s[t], e) || // global registration
      cc(r.appContext[t], e)
    );
    return !o && i ? s : o;
  }
}
function cc(t, e) {
  return t && (t[e] || t[Ke(e)] || t[Js(Ke(e))]);
}
const Fm = (t) => t.__isSuspense;
function $m(t, e) {
  e && e.pendingBranch ? et(t) ? e.effects.push(...t) : e.effects.push(t) : Tm(t);
}
const Bm = Symbol.for("v-scx"), Um = () => Qi(Bm), Mr = {};
function sn(t, e, n) {
  return uh(t, e, n);
}
function uh(t, e, {
  immediate: n,
  deep: i,
  flush: r,
  once: s,
  onTrack: o,
  onTrigger: a
} = St) {
  if (e && s) {
    const P = e;
    e = (...D) => {
      P(...D), O();
    };
  }
  const l = qt, c = (P) => i === !0 ? P : (
    // for deep: false, only traverse root-level properties
    qn(P, i === !1 ? 1 : void 0)
  );
  let u, f = !1, h = !1;
  if (ne(t) ? (u = () => t.value, f = ws(t)) : gi(t) ? (u = () => c(t), f = !0) : et(t) ? (h = !0, f = t.some((P) => gi(P) || ws(P)), u = () => t.map((P) => {
    if (ne(P))
      return P.value;
    if (gi(P))
      return c(P);
    if (ot(P))
      return xn(P, l, 2);
  })) : ot(t) ? e ? u = () => xn(t, l, 2) : u = () => (p && p(), Me(
    t,
    l,
    3,
    [y]
  )) : u = Ee, e && i) {
    const P = u;
    u = () => qn(P());
  }
  let p, y = (P) => {
    p = x.onStop = () => {
      xn(P, l, 4), p = x.onStop = void 0;
    };
  }, k;
  if (xr)
    if (y = Ee, e ? n && Me(e, l, 3, [
      u(),
      h ? [] : void 0,
      y
    ]) : u(), r === "sync") {
      const P = Um();
      k = P.__watcherHandles || (P.__watcherHandles = []);
    } else
      return Ee;
  let w = h ? new Array(t.length).fill(Mr) : Mr;
  const g = () => {
    if (!(!x.active || !x.dirty))
      if (e) {
        const P = x.run();
        (i || f || (h ? P.some((D, z) => Sn(D, w[z])) : Sn(P, w))) && (p && p(), Me(e, l, 3, [
          P,
          // pass undefined as the old value when it's changed for the first time
          w === Mr ? void 0 : h && w[0] === Mr ? [] : w,
          y
        ]), w = P);
      } else
        x.run();
  };
  g.allowRecurse = !!e;
  let b;
  r === "sync" ? b = g : r === "post" ? b = () => oe(g, l && l.suspense) : (g.pre = !0, l && (g.id = l.uid), b = () => to(g));
  const x = new Va(u, Ee, b), S = Bf(), O = () => {
    x.stop(), S && qa(S.effects, x);
  };
  return e ? n ? g() : w = x.run() : r === "post" ? oe(
    x.run.bind(x),
    l && l.suspense
  ) : x.run(), k && k.push(O), O;
}
function qm(t, e, n) {
  const i = this.proxy, r = Dt(t) ? t.includes(".") ? fh(i, t) : () => i[t] : t.bind(i, i);
  let s;
  ot(e) ? s = e : (s = e.handler, n = e);
  const o = wr(this), a = uh(r, s.bind(i), n);
  return o(), a;
}
function fh(t, e) {
  const n = e.split(".");
  return () => {
    let i = t;
    for (let r = 0; r < n.length && i; r++)
      i = i[n[r]];
    return i;
  };
}
function qn(t, e, n = 0, i) {
  if (!kt(t) || t.__v_skip)
    return t;
  if (e && e > 0) {
    if (n >= e)
      return t;
    n++;
  }
  if (i = i || /* @__PURE__ */ new Set(), i.has(t))
    return t;
  if (i.add(t), ne(t))
    qn(t.value, e, n, i);
  else if (et(t))
    for (let r = 0; r < t.length; r++)
      qn(t[r], e, n, i);
  else if (Ii(t) || mi(t))
    t.forEach((r) => {
      qn(r, e, n, i);
    });
  else if (Mf(t))
    for (const r in t)
      qn(t[r], e, n, i);
  return t;
}
function Oe(t, e) {
  if (ee === null)
    return t;
  const n = oo(ee) || ee.proxy, i = t.dirs || (t.dirs = []);
  for (let r = 0; r < e.length; r++) {
    let [s, o, a, l = St] = e[r];
    s && (ot(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && qn(o), i.push({
      dir: s,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return t;
}
function Mn(t, e, n, i) {
  const r = t.dirs, s = e && e.dirs;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    s && (a.oldValue = s[o].value);
    let l = a.dir[i];
    l && (ti(), Me(l, n, 8, [
      t.el,
      a,
      t,
      e
    ]), ei());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Mi(t, e) {
  return ot(t) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Gt({ name: t.name }, e, { setup: t })
  ) : t;
}
const os = (t) => !!t.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function hh(t) {
  ot(t) && (t = { loader: t });
  const {
    loader: e,
    loadingComponent: n,
    errorComponent: i,
    delay: r = 200,
    timeout: s,
    // undefined = never times out
    suspensible: o = !0,
    onError: a
  } = t;
  let l = null, c, u = 0;
  const f = () => (u++, l = null, h()), h = () => {
    let p;
    return l || (p = l = e().catch((y) => {
      if (y = y instanceof Error ? y : new Error(String(y)), a)
        return new Promise((k, w) => {
          a(y, () => k(f()), () => w(y), u + 1);
        });
      throw y;
    }).then((y) => p !== l && l ? l : (y && (y.__esModule || y[Symbol.toStringTag] === "Module") && (y = y.default), c = y, y)));
  };
  return /* @__PURE__ */ Mi({
    name: "AsyncComponentWrapper",
    __asyncLoader: h,
    get __asyncResolved() {
      return c;
    },
    setup() {
      const p = qt;
      if (c)
        return () => Eo(c, p);
      const y = (b) => {
        l = null, vr(
          b,
          p,
          13,
          !i
        );
      };
      if (o && p.suspense || xr)
        return h().then((b) => () => Eo(b, p)).catch((b) => (y(b), () => i ? mt(i, {
          error: b
        }) : null));
      const k = yi(!1), w = yi(), g = yi(!!r);
      return r && setTimeout(() => {
        g.value = !1;
      }, r), s != null && setTimeout(() => {
        if (!k.value && !w.value) {
          const b = new Error(
            `Async component timed out after ${s}ms.`
          );
          y(b), w.value = b;
        }
      }, s), h().then(() => {
        k.value = !0, p.parent && nl(p.parent.vnode) && (p.parent.effect.dirty = !0, to(p.parent.update));
      }).catch((b) => {
        y(b), w.value = b;
      }), () => {
        if (k.value && c)
          return Eo(c, p);
        if (w.value && i)
          return mt(i, {
            error: w.value
          });
        if (n && !g.value)
          return mt(n);
      };
    }
  });
}
function Eo(t, e) {
  const { ref: n, props: i, children: r, ce: s } = e.vnode, o = mt(t, i, r);
  return o.ref = n, o.ce = s, delete e.vnode.ce, o;
}
const nl = (t) => t.type.__isKeepAlive;
function Wm(t, e) {
  dh(t, "a", e);
}
function Hm(t, e) {
  dh(t, "da", e);
}
function dh(t, e, n = qt) {
  const i = t.__wdc || (t.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return t();
  });
  if (io(e, i, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      nl(r.parent.vnode) && Vm(i, e, n, r), r = r.parent;
  }
}
function Vm(t, e, n, i) {
  const r = io(
    e,
    t,
    i,
    !0
    /* prepend */
  );
  rl(() => {
    qa(i[e], r);
  }, n);
}
function io(t, e, n = qt, i = !1) {
  if (n) {
    const r = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...o) => {
      if (n.isUnmounted)
        return;
      ti();
      const a = wr(n), l = Me(e, n, t, o);
      return a(), ei(), l;
    });
    return i ? r.unshift(s) : r.push(s), s;
  }
}
const un = (t) => (e, n = qt) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!xr || t === "sp") && io(t, (...i) => e(...i), n)
), zm = un("bm"), il = un("m"), Gm = un("bu"), jm = un("u"), Ym = un("bum"), rl = un("um"), Km = un("sp"), Xm = un(
  "rtg"
), Jm = un(
  "rtc"
);
function Qm(t, e = qt) {
  io("ec", t, e);
}
function $n(t, e, n, i) {
  let r;
  const s = n && n[i];
  if (et(t) || Dt(t)) {
    r = new Array(t.length);
    for (let o = 0, a = t.length; o < a; o++)
      r[o] = e(t[o], o, void 0, s && s[o]);
  } else if (typeof t == "number") {
    r = new Array(t);
    for (let o = 0; o < t; o++)
      r[o] = e(o + 1, o, void 0, s && s[o]);
  } else if (kt(t))
    if (t[Symbol.iterator])
      r = Array.from(
        t,
        (o, a) => e(o, a, void 0, s && s[a])
      );
    else {
      const o = Object.keys(t);
      r = new Array(o.length);
      for (let a = 0, l = o.length; a < l; a++) {
        const c = o[a];
        r[a] = e(t[c], c, a, s && s[a]);
      }
    }
  else
    r = [];
  return n && (n[i] = r), r;
}
const Ko = (t) => t ? Eh(t) ? oo(t) || t.proxy : Ko(t.parent) : null, Xi = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Gt(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => Ko(t.parent),
    $root: (t) => Ko(t.root),
    $emit: (t) => t.emit,
    $options: (t) => sl(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      t.effect.dirty = !0, to(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Zs.bind(t.proxy)),
    $watch: (t) => qm.bind(t)
  })
), To = (t, e) => t !== St && !t.__isScriptSetup && dt(t, e), Zm = {
  get({ _: t }, e) {
    const { ctx: n, setupState: i, data: r, props: s, accessCache: o, type: a, appContext: l } = t;
    let c;
    if (e[0] !== "$") {
      const p = o[e];
      if (p !== void 0)
        switch (p) {
          case 1:
            return i[e];
          case 2:
            return r[e];
          case 4:
            return n[e];
          case 3:
            return s[e];
        }
      else {
        if (To(i, e))
          return o[e] = 1, i[e];
        if (r !== St && dt(r, e))
          return o[e] = 2, r[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = t.propsOptions[0]) && dt(c, e)
        )
          return o[e] = 3, s[e];
        if (n !== St && dt(n, e))
          return o[e] = 4, n[e];
        Xo && (o[e] = 0);
      }
    }
    const u = Xi[e];
    let f, h;
    if (u)
      return e === "$attrs" && le(t, "get", e), u(t);
    if (
      // css module (injected by vue-loader)
      (f = a.__cssModules) && (f = f[e])
    )
      return f;
    if (n !== St && dt(n, e))
      return o[e] = 4, n[e];
    if (
      // global properties
      h = l.config.globalProperties, dt(h, e)
    )
      return h[e];
  },
  set({ _: t }, e, n) {
    const { data: i, setupState: r, ctx: s } = t;
    return To(r, e) ? (r[e] = n, !0) : i !== St && dt(i, e) ? (i[e] = n, !0) : dt(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (s[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: i, appContext: r, propsOptions: s }
  }, o) {
    let a;
    return !!n[o] || t !== St && dt(t, o) || To(e, o) || (a = s[0]) && dt(a, o) || dt(i, o) || dt(Xi, o) || dt(r.config.globalProperties, o);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : dt(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
function uc(t) {
  return et(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
let Xo = !0;
function tg(t) {
  const e = sl(t), n = t.proxy, i = t.ctx;
  Xo = !1, e.beforeCreate && fc(e.beforeCreate, t, "bc");
  const {
    // state
    data: r,
    computed: s,
    methods: o,
    watch: a,
    provide: l,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: f,
    mounted: h,
    beforeUpdate: p,
    updated: y,
    activated: k,
    deactivated: w,
    beforeDestroy: g,
    beforeUnmount: b,
    destroyed: x,
    unmounted: S,
    render: O,
    renderTracked: P,
    renderTriggered: D,
    errorCaptured: z,
    serverPrefetch: F,
    // public API
    expose: H,
    inheritAttrs: $,
    // assets
    components: X,
    directives: q,
    filters: rt
  } = e;
  if (c && eg(c, i, null), o)
    for (const lt in o) {
      const at = o[lt];
      ot(at) && (i[lt] = at.bind(n));
    }
  if (r) {
    const lt = r.call(n, n);
    kt(lt) && (t.data = Ka(lt));
  }
  if (Xo = !0, s)
    for (const lt in s) {
      const at = s[lt], _t = ot(at) ? at.bind(n, n) : ot(at.get) ? at.get.bind(n, n) : Ee, ue = !ot(at) && ot(at.set) ? at.set.bind(n) : Ee, Pt = we({
        get: _t,
        set: ue
      });
      Object.defineProperty(i, lt, {
        enumerable: !0,
        configurable: !0,
        get: () => Pt.value,
        set: (Mt) => Pt.value = Mt
      });
    }
  if (a)
    for (const lt in a)
      ph(a[lt], i, n, lt);
  if (l) {
    const lt = ot(l) ? l.call(n) : l;
    Reflect.ownKeys(lt).forEach((at) => {
      ag(at, lt[at]);
    });
  }
  u && fc(u, t, "c");
  function yt(lt, at) {
    et(at) ? at.forEach((_t) => lt(_t.bind(n))) : at && lt(at.bind(n));
  }
  if (yt(zm, f), yt(il, h), yt(Gm, p), yt(jm, y), yt(Wm, k), yt(Hm, w), yt(Qm, z), yt(Jm, P), yt(Xm, D), yt(Ym, b), yt(rl, S), yt(Km, F), et(H))
    if (H.length) {
      const lt = t.exposed || (t.exposed = {});
      H.forEach((at) => {
        Object.defineProperty(lt, at, {
          get: () => n[at],
          set: (_t) => n[at] = _t
        });
      });
    } else
      t.exposed || (t.exposed = {});
  O && t.render === Ee && (t.render = O), $ != null && (t.inheritAttrs = $), X && (t.components = X), q && (t.directives = q);
}
function eg(t, e, n = Ee) {
  et(t) && (t = Jo(t));
  for (const i in t) {
    const r = t[i];
    let s;
    kt(r) ? "default" in r ? s = Qi(
      r.from || i,
      r.default,
      !0
    ) : s = Qi(r.from || i) : s = Qi(r), ne(s) ? Object.defineProperty(e, i, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (o) => s.value = o
    }) : e[i] = s;
  }
}
function fc(t, e, n) {
  Me(
    et(t) ? t.map((i) => i.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function ph(t, e, n, i) {
  const r = i.includes(".") ? fh(n, i) : () => n[i];
  if (Dt(t)) {
    const s = e[t];
    ot(s) && sn(r, s);
  } else if (ot(t))
    sn(r, t.bind(n));
  else if (kt(t))
    if (et(t))
      t.forEach((s) => ph(s, e, n, i));
    else {
      const s = ot(t.handler) ? t.handler.bind(n) : e[t.handler];
      ot(s) && sn(r, s, t);
    }
}
function sl(t) {
  const e = t.type, { mixins: n, extends: i } = e, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: o }
  } = t.appContext, a = s.get(e);
  let l;
  return a ? l = a : !r.length && !n && !i ? l = e : (l = {}, r.length && r.forEach(
    (c) => ks(l, c, o, !0)
  ), ks(l, e, o)), kt(e) && s.set(e, l), l;
}
function ks(t, e, n, i = !1) {
  const { mixins: r, extends: s } = e;
  s && ks(t, s, n, !0), r && r.forEach(
    (o) => ks(t, o, n, !0)
  );
  for (const o in e)
    if (!(i && o === "expose")) {
      const a = ng[o] || n && n[o];
      t[o] = a ? a(t[o], e[o]) : e[o];
    }
  return t;
}
const ng = {
  data: hc,
  props: dc,
  emits: dc,
  // objects
  methods: zi,
  computed: zi,
  // lifecycle
  beforeCreate: Zt,
  created: Zt,
  beforeMount: Zt,
  mounted: Zt,
  beforeUpdate: Zt,
  updated: Zt,
  beforeDestroy: Zt,
  beforeUnmount: Zt,
  destroyed: Zt,
  unmounted: Zt,
  activated: Zt,
  deactivated: Zt,
  errorCaptured: Zt,
  serverPrefetch: Zt,
  // assets
  components: zi,
  directives: zi,
  // watch
  watch: rg,
  // provide / inject
  provide: hc,
  inject: ig
};
function hc(t, e) {
  return e ? t ? function() {
    return Gt(
      ot(t) ? t.call(this, this) : t,
      ot(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function ig(t, e) {
  return zi(Jo(t), Jo(e));
}
function Jo(t) {
  if (et(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function Zt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function zi(t, e) {
  return t ? Gt(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function dc(t, e) {
  return t ? et(t) && et(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Gt(
    /* @__PURE__ */ Object.create(null),
    uc(t),
    uc(e ?? {})
  ) : e;
}
function rg(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const n = Gt(/* @__PURE__ */ Object.create(null), t);
  for (const i in e)
    n[i] = Zt(t[i], e[i]);
  return n;
}
function mh() {
  return {
    app: null,
    config: {
      isNativeTag: Bp,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let sg = 0;
function og(t, e) {
  return function(i, r = null) {
    ot(i) || (i = Gt({}, i)), r != null && !kt(r) && (r = null);
    const s = mh(), o = /* @__PURE__ */ new WeakSet();
    let a = !1;
    const l = s.app = {
      _uid: sg++,
      _component: i,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: Ig,
      get config() {
        return s.config;
      },
      set config(c) {
      },
      use(c, ...u) {
        return o.has(c) || (c && ot(c.install) ? (o.add(c), c.install(l, ...u)) : ot(c) && (o.add(c), c(l, ...u))), l;
      },
      mixin(c) {
        return s.mixins.includes(c) || s.mixins.push(c), l;
      },
      component(c, u) {
        return u ? (s.components[c] = u, l) : s.components[c];
      },
      directive(c, u) {
        return u ? (s.directives[c] = u, l) : s.directives[c];
      },
      mount(c, u, f) {
        if (!a) {
          const h = mt(i, r);
          return h.appContext = s, f === !0 ? f = "svg" : f === !1 && (f = void 0), u && e ? e(h, c) : t(h, c, f), a = !0, l._container = c, c.__vue_app__ = l, oo(h.component) || h.component.proxy;
        }
      },
      unmount() {
        a && (t(null, l._container), delete l._container.__vue_app__);
      },
      provide(c, u) {
        return s.provides[c] = u, l;
      },
      runWithContext(c) {
        const u = Ji;
        Ji = l;
        try {
          return c();
        } finally {
          Ji = u;
        }
      }
    };
    return l;
  };
}
let Ji = null;
function ag(t, e) {
  if (qt) {
    let n = qt.provides;
    const i = qt.parent && qt.parent.provides;
    i === n && (n = qt.provides = Object.create(i)), n[t] = e;
  }
}
function Qi(t, e, n = !1) {
  const i = qt || ee;
  if (i || Ji) {
    const r = i ? i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : Ji._context.provides;
    if (r && t in r)
      return r[t];
    if (arguments.length > 1)
      return n && ot(e) ? e.call(i && i.proxy) : e;
  }
}
function lg(t, e, n, i = !1) {
  const r = {}, s = {};
  _s(s, ro, 1), t.propsDefaults = /* @__PURE__ */ Object.create(null), gh(t, e, r, s);
  for (const o in t.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? t.props = i ? r : vm(r) : t.type.props ? t.props = r : t.props = s, t.attrs = s;
}
function cg(t, e, n, i) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: o }
  } = t, a = pt(r), [l] = t.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = t.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let h = u[f];
        if (eo(t.emitsOptions, h))
          continue;
        const p = e[h];
        if (l)
          if (dt(s, h))
            p !== s[h] && (s[h] = p, c = !0);
          else {
            const y = Ke(h);
            r[y] = Qo(
              l,
              a,
              y,
              p,
              t,
              !1
            );
          }
        else
          p !== s[h] && (s[h] = p, c = !0);
      }
    }
  } else {
    gh(t, e, r, s) && (c = !0);
    let u;
    for (const f in a)
      (!e || // for camelCase
      !dt(e, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Li(f)) === f || !dt(e, u))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[f] = Qo(
        l,
        a,
        f,
        void 0,
        t,
        !0
      )) : delete r[f]);
    if (s !== a)
      for (const f in s)
        (!e || !dt(e, f)) && (delete s[f], c = !0);
  }
  c && rn(t, "set", "$attrs");
}
function gh(t, e, n, i) {
  const [r, s] = t.propsOptions;
  let o = !1, a;
  if (e)
    for (let l in e) {
      if (Ki(l))
        continue;
      const c = e[l];
      let u;
      r && dt(r, u = Ke(l)) ? !s || !s.includes(u) ? n[u] = c : (a || (a = {}))[u] = c : eo(t.emitsOptions, l) || (!(l in i) || c !== i[l]) && (i[l] = c, o = !0);
    }
  if (s) {
    const l = pt(n), c = a || St;
    for (let u = 0; u < s.length; u++) {
      const f = s[u];
      n[f] = Qo(
        r,
        l,
        f,
        c[f],
        t,
        !dt(c, f)
      );
    }
  }
  return o;
}
function Qo(t, e, n, i, r, s) {
  const o = t[n];
  if (o != null) {
    const a = dt(o, "default");
    if (a && i === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && ot(l)) {
        const { propsDefaults: c } = r;
        if (n in c)
          i = c[n];
        else {
          const u = wr(r);
          i = c[n] = l.call(
            null,
            e
          ), u();
        }
      } else
        i = l;
    }
    o[
      0
      /* shouldCast */
    ] && (s && !a ? i = !1 : o[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === Li(n)) && (i = !0));
  }
  return i;
}
function yh(t, e, n = !1) {
  const i = e.propsCache, r = i.get(t);
  if (r)
    return r;
  const s = t.props, o = {}, a = [];
  let l = !1;
  if (!ot(t)) {
    const u = (f) => {
      l = !0;
      const [h, p] = yh(f, e, !0);
      Gt(o, h), p && a.push(...p);
    };
    !n && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u);
  }
  if (!s && !l)
    return kt(t) && i.set(t, pi), pi;
  if (et(s))
    for (let u = 0; u < s.length; u++) {
      const f = Ke(s[u]);
      pc(f) && (o[f] = St);
    }
  else if (s)
    for (const u in s) {
      const f = Ke(u);
      if (pc(f)) {
        const h = s[u], p = o[f] = et(h) || ot(h) ? { type: h } : Gt({}, h);
        if (p) {
          const y = yc(Boolean, p.type), k = yc(String, p.type);
          p[
            0
            /* shouldCast */
          ] = y > -1, p[
            1
            /* shouldCastTrue */
          ] = k < 0 || y < k, (y > -1 || dt(p, "default")) && a.push(f);
        }
      }
    }
  const c = [o, a];
  return kt(t) && i.set(t, c), c;
}
function pc(t) {
  return t[0] !== "$" && !Ki(t);
}
function mc(t) {
  return t === null ? "null" : typeof t == "function" ? t.name || "" : typeof t == "object" && t.constructor && t.constructor.name || "";
}
function gc(t, e) {
  return mc(t) === mc(e);
}
function yc(t, e) {
  return et(e) ? e.findIndex((n) => gc(n, t)) : ot(e) && gc(e, t) ? 0 : -1;
}
const bh = (t) => t[0] === "_" || t === "$stable", ol = (t) => et(t) ? t.map(We) : [We(t)], ug = (t, e, n) => {
  if (e._n)
    return e;
  const i = Nm((...r) => ol(e(...r)), n);
  return i._c = !1, i;
}, vh = (t, e, n) => {
  const i = t._ctx;
  for (const r in t) {
    if (bh(r))
      continue;
    const s = t[r];
    if (ot(s))
      e[r] = ug(r, s, i);
    else if (s != null) {
      const o = ol(s);
      e[r] = () => o;
    }
  }
}, _h = (t, e) => {
  const n = ol(e);
  t.slots.default = () => n;
}, fg = (t, e) => {
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (t.slots = pt(e), _s(e, "_", n)) : vh(
      e,
      t.slots = {}
    );
  } else
    t.slots = {}, e && _h(t, e);
  _s(t.slots, ro, 1);
}, hg = (t, e, n) => {
  const { vnode: i, slots: r } = t;
  let s = !0, o = St;
  if (i.shapeFlag & 32) {
    const a = e._;
    a ? n && a === 1 ? s = !1 : (Gt(r, e), !n && a === 1 && delete r._) : (s = !e.$stable, vh(e, r)), o = e;
  } else
    e && (_h(t, e), o = { default: 1 });
  if (s)
    for (const a in r)
      !bh(a) && o[a] == null && delete r[a];
};
function Zo(t, e, n, i, r = !1) {
  if (et(t)) {
    t.forEach(
      (h, p) => Zo(
        h,
        e && (et(e) ? e[p] : e),
        n,
        i,
        r
      )
    );
    return;
  }
  if (os(i) && !r)
    return;
  const s = i.shapeFlag & 4 ? oo(i.component) || i.component.proxy : i.el, o = r ? null : s, { i: a, r: l } = t, c = e && e.r, u = a.refs === St ? a.refs = {} : a.refs, f = a.setupState;
  if (c != null && c !== l && (Dt(c) ? (u[c] = null, dt(f, c) && (f[c] = null)) : ne(c) && (c.value = null)), ot(l))
    xn(l, a, 12, [o, u]);
  else {
    const h = Dt(l), p = ne(l);
    if (h || p) {
      const y = () => {
        if (t.f) {
          const k = h ? dt(f, l) ? f[l] : u[l] : l.value;
          r ? et(k) && qa(k, s) : et(k) ? k.includes(s) || k.push(s) : h ? (u[l] = [s], dt(f, l) && (f[l] = u[l])) : (l.value = [s], t.k && (u[t.k] = l.value));
        } else
          h ? (u[l] = o, dt(f, l) && (f[l] = o)) : p && (l.value = o, t.k && (u[t.k] = o));
      };
      o ? (y.id = -1, oe(y, n)) : y();
    }
  }
}
const oe = $m;
function dg(t) {
  return pg(t);
}
function pg(t, e) {
  const n = Rf();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: r,
    patchProp: s,
    createElement: o,
    createText: a,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: f,
    nextSibling: h,
    setScopeId: p = Ee,
    insertStaticContent: y
  } = t, k = (d, m, _, E = null, C = null, I = null, B = void 0, M = null, U = !!m.dynamicChildren) => {
    if (d === m)
      return;
    d && !Ui(d, m) && (E = Ce(d), Mt(d, C, I, !0), d = null), m.patchFlag === -2 && (U = !1, m.dynamicChildren = null);
    const { type: L, ref: V, shapeFlag: Q } = m;
    switch (L) {
      case _r:
        w(d, m, _, E);
        break;
      case Xn:
        g(d, m, _, E);
        break;
      case as:
        d == null && b(m, _, E, B);
        break;
      case Ft:
        X(
          d,
          m,
          _,
          E,
          C,
          I,
          B,
          M,
          U
        );
        break;
      default:
        Q & 1 ? O(
          d,
          m,
          _,
          E,
          C,
          I,
          B,
          M,
          U
        ) : Q & 6 ? q(
          d,
          m,
          _,
          E,
          C,
          I,
          B,
          M,
          U
        ) : (Q & 64 || Q & 128) && L.process(
          d,
          m,
          _,
          E,
          C,
          I,
          B,
          M,
          U,
          jt
        );
    }
    V != null && C && Zo(V, d && d.ref, I, m || d, !m);
  }, w = (d, m, _, E) => {
    if (d == null)
      i(
        m.el = a(m.children),
        _,
        E
      );
    else {
      const C = m.el = d.el;
      m.children !== d.children && c(C, m.children);
    }
  }, g = (d, m, _, E) => {
    d == null ? i(
      m.el = l(m.children || ""),
      _,
      E
    ) : m.el = d.el;
  }, b = (d, m, _, E) => {
    [d.el, d.anchor] = y(
      d.children,
      m,
      _,
      E,
      d.el,
      d.anchor
    );
  }, x = ({ el: d, anchor: m }, _, E) => {
    let C;
    for (; d && d !== m; )
      C = h(d), i(d, _, E), d = C;
    i(m, _, E);
  }, S = ({ el: d, anchor: m }) => {
    let _;
    for (; d && d !== m; )
      _ = h(d), r(d), d = _;
    r(m);
  }, O = (d, m, _, E, C, I, B, M, U) => {
    m.type === "svg" ? B = "svg" : m.type === "math" && (B = "mathml"), d == null ? P(
      m,
      _,
      E,
      C,
      I,
      B,
      M,
      U
    ) : F(
      d,
      m,
      C,
      I,
      B,
      M,
      U
    );
  }, P = (d, m, _, E, C, I, B, M) => {
    let U, L;
    const { props: V, shapeFlag: Q, transition: W, dirs: T } = d;
    if (U = d.el = o(
      d.type,
      I,
      V && V.is,
      V
    ), Q & 8 ? u(U, d.children) : Q & 16 && z(
      d.children,
      U,
      null,
      E,
      C,
      Ao(d, I),
      B,
      M
    ), T && Mn(d, null, E, "created"), D(U, d, d.scopeId, B, E), V) {
      for (const J in V)
        J !== "value" && !Ki(J) && s(
          U,
          J,
          null,
          V[J],
          I,
          d.children,
          E,
          C,
          Vt
        );
      "value" in V && s(U, "value", null, V.value, I), (L = V.onVnodeBeforeMount) && Be(L, E, d);
    }
    T && Mn(d, null, E, "beforeMount");
    const N = mg(C, W);
    N && W.beforeEnter(U), i(U, m, _), ((L = V && V.onVnodeMounted) || N || T) && oe(() => {
      L && Be(L, E, d), N && W.enter(U), T && Mn(d, null, E, "mounted");
    }, C);
  }, D = (d, m, _, E, C) => {
    if (_ && p(d, _), E)
      for (let I = 0; I < E.length; I++)
        p(d, E[I]);
    if (C) {
      let I = C.subTree;
      if (m === I) {
        const B = C.vnode;
        D(
          d,
          B,
          B.scopeId,
          B.slotScopeIds,
          C.parent
        );
      }
    }
  }, z = (d, m, _, E, C, I, B, M, U = 0) => {
    for (let L = U; L < d.length; L++) {
      const V = d[L] = M ? yn(d[L]) : We(d[L]);
      k(
        null,
        V,
        m,
        _,
        E,
        C,
        I,
        B,
        M
      );
    }
  }, F = (d, m, _, E, C, I, B) => {
    const M = m.el = d.el;
    let { patchFlag: U, dynamicChildren: L, dirs: V } = m;
    U |= d.patchFlag & 16;
    const Q = d.props || St, W = m.props || St;
    let T;
    if (_ && Rn(_, !1), (T = W.onVnodeBeforeUpdate) && Be(T, _, m, d), V && Mn(m, d, _, "beforeUpdate"), _ && Rn(_, !0), L ? H(
      d.dynamicChildren,
      L,
      M,
      _,
      E,
      Ao(m, C),
      I
    ) : B || at(
      d,
      m,
      M,
      null,
      _,
      E,
      Ao(m, C),
      I,
      !1
    ), U > 0) {
      if (U & 16)
        $(
          M,
          m,
          Q,
          W,
          _,
          E,
          C
        );
      else if (U & 2 && Q.class !== W.class && s(M, "class", null, W.class, C), U & 4 && s(M, "style", Q.style, W.style, C), U & 8) {
        const N = m.dynamicProps;
        for (let J = 0; J < N.length; J++) {
          const it = N[J], wt = Q[it], Yt = W[it];
          (Yt !== wt || it === "value") && s(
            M,
            it,
            wt,
            Yt,
            C,
            d.children,
            _,
            E,
            Vt
          );
        }
      }
      U & 1 && d.children !== m.children && u(M, m.children);
    } else
      !B && L == null && $(
        M,
        m,
        Q,
        W,
        _,
        E,
        C
      );
    ((T = W.onVnodeUpdated) || V) && oe(() => {
      T && Be(T, _, m, d), V && Mn(m, d, _, "updated");
    }, E);
  }, H = (d, m, _, E, C, I, B) => {
    for (let M = 0; M < m.length; M++) {
      const U = d[M], L = m[M], V = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        U.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (U.type === Ft || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ui(U, L) || // - In the case of a component, it could contain anything.
        U.shapeFlag & 70) ? f(U.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      k(
        U,
        L,
        V,
        null,
        E,
        C,
        I,
        B,
        !0
      );
    }
  }, $ = (d, m, _, E, C, I, B) => {
    if (_ !== E) {
      if (_ !== St)
        for (const M in _)
          !Ki(M) && !(M in E) && s(
            d,
            M,
            _[M],
            null,
            B,
            m.children,
            C,
            I,
            Vt
          );
      for (const M in E) {
        if (Ki(M))
          continue;
        const U = E[M], L = _[M];
        U !== L && M !== "value" && s(
          d,
          M,
          L,
          U,
          B,
          m.children,
          C,
          I,
          Vt
        );
      }
      "value" in E && s(d, "value", _.value, E.value, B);
    }
  }, X = (d, m, _, E, C, I, B, M, U) => {
    const L = m.el = d ? d.el : a(""), V = m.anchor = d ? d.anchor : a("");
    let { patchFlag: Q, dynamicChildren: W, slotScopeIds: T } = m;
    T && (M = M ? M.concat(T) : T), d == null ? (i(L, _, E), i(V, _, E), z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      _,
      V,
      C,
      I,
      B,
      M,
      U
    )) : Q > 0 && Q & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren ? (H(
      d.dynamicChildren,
      W,
      _,
      C,
      I,
      B,
      M
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || C && m === C.subTree) && wh(
      d,
      m,
      !0
      /* shallow */
    )) : at(
      d,
      m,
      _,
      V,
      C,
      I,
      B,
      M,
      U
    );
  }, q = (d, m, _, E, C, I, B, M, U) => {
    m.slotScopeIds = M, d == null ? m.shapeFlag & 512 ? C.ctx.activate(
      m,
      _,
      E,
      B,
      U
    ) : rt(
      m,
      _,
      E,
      C,
      I,
      B,
      U
    ) : Ht(d, m, U);
  }, rt = (d, m, _, E, C, I, B) => {
    const M = d.component = Eg(
      d,
      E,
      C
    );
    if (nl(d) && (M.ctx.renderer = jt), Tg(M), M.asyncDep) {
      if (C && C.registerDep(M, yt), !d.el) {
        const U = M.subTree = mt(Xn);
        g(null, U, m, _);
      }
    } else
      yt(
        M,
        d,
        m,
        _,
        C,
        I,
        B
      );
  }, Ht = (d, m, _) => {
    const E = m.component = d.component;
    if (Mm(d, m, _))
      if (E.asyncDep && !E.asyncResolved) {
        lt(E, m, _);
        return;
      } else
        E.next = m, Em(E.update), E.effect.dirty = !0, E.update();
    else
      m.el = d.el, E.vnode = m;
  }, yt = (d, m, _, E, C, I, B) => {
    const M = () => {
      if (d.isMounted) {
        let { next: V, bu: Q, u: W, parent: T, vnode: N } = d;
        {
          const he = xh(d);
          if (he) {
            V && (V.el = N.el, lt(d, V, B)), he.asyncDep.then(() => {
              d.isUnmounted || M();
            });
            return;
          }
        }
        let J = V, it;
        Rn(d, !1), V ? (V.el = N.el, lt(d, V, B)) : V = N, Q && rs(Q), (it = V.props && V.props.onVnodeBeforeUpdate) && Be(it, T, V, N), Rn(d, !0);
        const wt = So(d), Yt = d.subTree;
        d.subTree = wt, k(
          Yt,
          wt,
          // parent may have changed if it's in a teleport
          f(Yt.el),
          // anchor may have changed if it's in a fragment
          Ce(Yt),
          d,
          C,
          I
        ), V.el = wt.el, J === null && Rm(d, wt.el), W && oe(W, C), (it = V.props && V.props.onVnodeUpdated) && oe(
          () => Be(it, T, V, N),
          C
        );
      } else {
        let V;
        const { el: Q, props: W } = m, { bm: T, m: N, parent: J } = d, it = os(m);
        if (Rn(d, !1), T && rs(T), !it && (V = W && W.onVnodeBeforeMount) && Be(V, J, m), Rn(d, !0), Q && Ln) {
          const wt = () => {
            d.subTree = So(d), Ln(
              Q,
              d.subTree,
              d,
              C,
              null
            );
          };
          it ? m.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !d.isUnmounted && wt()
          ) : wt();
        } else {
          const wt = d.subTree = So(d);
          k(
            null,
            wt,
            _,
            E,
            d,
            C,
            I
          ), m.el = wt.el;
        }
        if (N && oe(N, C), !it && (V = W && W.onVnodeMounted)) {
          const wt = m;
          oe(
            () => Be(V, J, wt),
            C
          );
        }
        (m.shapeFlag & 256 || J && os(J.vnode) && J.vnode.shapeFlag & 256) && d.a && oe(d.a, C), d.isMounted = !0, m = _ = E = null;
      }
    }, U = d.effect = new Va(
      M,
      Ee,
      () => to(L),
      d.scope
      // track it in component's effect scope
    ), L = d.update = () => {
      U.dirty && U.run();
    };
    L.id = d.uid, Rn(d, !0), L();
  }, lt = (d, m, _) => {
    m.component = d;
    const E = d.vnode.props;
    d.vnode = m, d.next = null, cg(d, m.props, E, _), hg(d, m.children, _), ti(), ac(d), ei();
  }, at = (d, m, _, E, C, I, B, M, U = !1) => {
    const L = d && d.children, V = d ? d.shapeFlag : 0, Q = m.children, { patchFlag: W, shapeFlag: T } = m;
    if (W > 0) {
      if (W & 128) {
        ue(
          L,
          Q,
          _,
          E,
          C,
          I,
          B,
          M,
          U
        );
        return;
      } else if (W & 256) {
        _t(
          L,
          Q,
          _,
          E,
          C,
          I,
          B,
          M,
          U
        );
        return;
      }
    }
    T & 8 ? (V & 16 && Vt(L, C, I), Q !== L && u(_, Q)) : V & 16 ? T & 16 ? ue(
      L,
      Q,
      _,
      E,
      C,
      I,
      B,
      M,
      U
    ) : Vt(L, C, I, !0) : (V & 8 && u(_, ""), T & 16 && z(
      Q,
      _,
      E,
      C,
      I,
      B,
      M,
      U
    ));
  }, _t = (d, m, _, E, C, I, B, M, U) => {
    d = d || pi, m = m || pi;
    const L = d.length, V = m.length, Q = Math.min(L, V);
    let W;
    for (W = 0; W < Q; W++) {
      const T = m[W] = U ? yn(m[W]) : We(m[W]);
      k(
        d[W],
        T,
        _,
        null,
        C,
        I,
        B,
        M,
        U
      );
    }
    L > V ? Vt(
      d,
      C,
      I,
      !0,
      !1,
      Q
    ) : z(
      m,
      _,
      E,
      C,
      I,
      B,
      M,
      U,
      Q
    );
  }, ue = (d, m, _, E, C, I, B, M, U) => {
    let L = 0;
    const V = m.length;
    let Q = d.length - 1, W = V - 1;
    for (; L <= Q && L <= W; ) {
      const T = d[L], N = m[L] = U ? yn(m[L]) : We(m[L]);
      if (Ui(T, N))
        k(
          T,
          N,
          _,
          null,
          C,
          I,
          B,
          M,
          U
        );
      else
        break;
      L++;
    }
    for (; L <= Q && L <= W; ) {
      const T = d[Q], N = m[W] = U ? yn(m[W]) : We(m[W]);
      if (Ui(T, N))
        k(
          T,
          N,
          _,
          null,
          C,
          I,
          B,
          M,
          U
        );
      else
        break;
      Q--, W--;
    }
    if (L > Q) {
      if (L <= W) {
        const T = W + 1, N = T < V ? m[T].el : E;
        for (; L <= W; )
          k(
            null,
            m[L] = U ? yn(m[L]) : We(m[L]),
            _,
            N,
            C,
            I,
            B,
            M,
            U
          ), L++;
      }
    } else if (L > W)
      for (; L <= Q; )
        Mt(d[L], C, I, !0), L++;
    else {
      const T = L, N = L, J = /* @__PURE__ */ new Map();
      for (L = N; L <= W; L++) {
        const de = m[L] = U ? yn(m[L]) : We(m[L]);
        de.key != null && J.set(de.key, L);
      }
      let it, wt = 0;
      const Yt = W - N + 1;
      let he = !1, Cr = 0;
      const ii = new Array(Yt);
      for (L = 0; L < Yt; L++)
        ii[L] = 0;
      for (L = T; L <= Q; L++) {
        const de = d[L];
        if (wt >= Yt) {
          Mt(de, C, I, !0);
          continue;
        }
        let $e;
        if (de.key != null)
          $e = J.get(de.key);
        else
          for (it = N; it <= W; it++)
            if (ii[it - N] === 0 && Ui(de, m[it])) {
              $e = it;
              break;
            }
        $e === void 0 ? Mt(de, C, I, !0) : (ii[$e - N] = L + 1, $e >= Cr ? Cr = $e : he = !0, k(
          de,
          m[$e],
          _,
          null,
          C,
          I,
          B,
          M,
          U
        ), wt++);
      }
      const Xl = he ? gg(ii) : pi;
      for (it = Xl.length - 1, L = Yt - 1; L >= 0; L--) {
        const de = N + L, $e = m[de], Jl = de + 1 < V ? m[de + 1].el : E;
        ii[L] === 0 ? k(
          null,
          $e,
          _,
          Jl,
          C,
          I,
          B,
          M,
          U
        ) : he && (it < 0 || L !== Xl[it] ? Pt($e, _, Jl, 2) : it--);
      }
    }
  }, Pt = (d, m, _, E, C = null) => {
    const { el: I, type: B, transition: M, children: U, shapeFlag: L } = d;
    if (L & 6) {
      Pt(d.component.subTree, m, _, E);
      return;
    }
    if (L & 128) {
      d.suspense.move(m, _, E);
      return;
    }
    if (L & 64) {
      B.move(d, m, _, jt);
      return;
    }
    if (B === Ft) {
      i(I, m, _);
      for (let Q = 0; Q < U.length; Q++)
        Pt(U[Q], m, _, E);
      i(d.anchor, m, _);
      return;
    }
    if (B === as) {
      x(d, m, _);
      return;
    }
    if (E !== 2 && L & 1 && M)
      if (E === 0)
        M.beforeEnter(I), i(I, m, _), oe(() => M.enter(I), C);
      else {
        const { leave: Q, delayLeave: W, afterLeave: T } = M, N = () => i(I, m, _), J = () => {
          Q(I, () => {
            N(), T && T();
          });
        };
        W ? W(I, N, J) : J();
      }
    else
      i(I, m, _);
  }, Mt = (d, m, _, E = !1, C = !1) => {
    const {
      type: I,
      props: B,
      ref: M,
      children: U,
      dynamicChildren: L,
      shapeFlag: V,
      patchFlag: Q,
      dirs: W
    } = d;
    if (M != null && Zo(M, null, _, d, !0), V & 256) {
      m.ctx.deactivate(d);
      return;
    }
    const T = V & 1 && W, N = !os(d);
    let J;
    if (N && (J = B && B.onVnodeBeforeUnmount) && Be(J, m, d), V & 6)
      Qt(d.component, _, E);
    else {
      if (V & 128) {
        d.suspense.unmount(_, E);
        return;
      }
      T && Mn(d, null, m, "beforeUnmount"), V & 64 ? d.type.remove(
        d,
        m,
        _,
        C,
        jt,
        E
      ) : L && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (I !== Ft || Q > 0 && Q & 64) ? Vt(
        L,
        m,
        _,
        !1,
        !0
      ) : (I === Ft && Q & 384 || !C && V & 16) && Vt(U, m, _), E && De(d);
    }
    (N && (J = B && B.onVnodeUnmounted) || T) && oe(() => {
      J && Be(J, m, d), T && Mn(d, null, m, "unmounted");
    }, _);
  }, De = (d) => {
    const { type: m, el: _, anchor: E, transition: C } = d;
    if (m === Ft) {
      Fe(_, E);
      return;
    }
    if (m === as) {
      S(d);
      return;
    }
    const I = () => {
      r(_), C && !C.persisted && C.afterLeave && C.afterLeave();
    };
    if (d.shapeFlag & 1 && C && !C.persisted) {
      const { leave: B, delayLeave: M } = C, U = () => B(_, I);
      M ? M(d.el, I, U) : U();
    } else
      I();
  }, Fe = (d, m) => {
    let _;
    for (; d !== m; )
      _ = h(d), r(d), d = _;
    r(m);
  }, Qt = (d, m, _) => {
    const { bum: E, scope: C, update: I, subTree: B, um: M } = d;
    E && rs(E), C.stop(), I && (I.active = !1, Mt(B, d, m, _)), M && oe(M, m), oe(() => {
      d.isUnmounted = !0;
    }, m), m && m.pendingBranch && !m.isUnmounted && d.asyncDep && !d.asyncResolved && d.suspenseId === m.pendingId && (m.deps--, m.deps === 0 && m.resolve());
  }, Vt = (d, m, _, E = !1, C = !1, I = 0) => {
    for (let B = I; B < d.length; B++)
      Mt(d[B], m, _, E, C);
  }, Ce = (d) => d.shapeFlag & 6 ? Ce(d.component.subTree) : d.shapeFlag & 128 ? d.suspense.next() : h(d.anchor || d.el);
  let fe = !1;
  const be = (d, m, _) => {
    d == null ? m._vnode && Mt(m._vnode, null, null, !0) : k(
      m._vnode || null,
      d,
      m,
      null,
      null,
      null,
      _
    ), fe || (fe = !0, ac(), sh(), fe = !1), m._vnode = d;
  }, jt = {
    p: k,
    um: Mt,
    m: Pt,
    r: De,
    mt: rt,
    mc: z,
    pc: at,
    pbc: H,
    n: Ce,
    o: t
  };
  let ve, Ln;
  return e && ([ve, Ln] = e(
    jt
  )), {
    render: be,
    hydrate: ve,
    createApp: og(be, ve)
  };
}
function Ao({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function Rn({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function mg(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function wh(t, e, n = !1) {
  const i = t.children, r = e.children;
  if (et(i) && et(r))
    for (let s = 0; s < i.length; s++) {
      const o = i[s];
      let a = r[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[s] = yn(r[s]), a.el = o.el), n || wh(o, a)), a.type === _r && (a.el = o.el);
    }
}
function gg(t) {
  const e = t.slice(), n = [0];
  let i, r, s, o, a;
  const l = t.length;
  for (i = 0; i < l; i++) {
    const c = t[i];
    if (c !== 0) {
      if (r = n[n.length - 1], t[r] < c) {
        e[i] = r, n.push(i);
        continue;
      }
      for (s = 0, o = n.length - 1; s < o; )
        a = s + o >> 1, t[n[a]] < c ? s = a + 1 : o = a;
      c < t[n[s]] && (s > 0 && (e[i] = n[s - 1]), n[s] = i);
    }
  }
  for (s = n.length, o = n[s - 1]; s-- > 0; )
    n[s] = o, o = e[o];
  return n;
}
function xh(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : xh(e);
}
const yg = (t) => t.__isTeleport, Ft = Symbol.for("v-fgt"), _r = Symbol.for("v-txt"), Xn = Symbol.for("v-cmt"), as = Symbol.for("v-stc"), Zi = [];
let Ie = null;
function tt(t = !1) {
  Zi.push(Ie = t ? null : []);
}
function bg() {
  Zi.pop(), Ie = Zi[Zi.length - 1] || null;
}
let or = 1;
function bc(t) {
  or += t;
}
function kh(t) {
  return t.dynamicChildren = or > 0 ? Ie || pi : null, bg(), or > 0 && Ie && Ie.push(t), t;
}
function st(t, e, n, i, r, s) {
  return kh(
    Z(
      t,
      e,
      n,
      i,
      r,
      s,
      !0
    )
  );
}
function ar(t, e, n, i, r) {
  return kh(
    mt(
      t,
      e,
      n,
      i,
      r,
      !0
    )
  );
}
function ta(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Ui(t, e) {
  return t.type === e.type && t.key === e.key;
}
const ro = "__vInternal", Sh = ({ key: t }) => t ?? null, ls = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? Dt(t) || ne(t) || ot(t) ? { i: ee, r: t, k: e, f: !!n } : t : null);
function Z(t, e = null, n = null, i = 0, r = null, s = t === Ft ? 0 : 1, o = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Sh(e),
    ref: e && ls(e),
    scopeId: no,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: i,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ee
  };
  return a ? (al(l, n), s & 128 && t.normalize(l)) : n && (l.shapeFlag |= Dt(n) ? 8 : 16), or > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ie && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Ie.push(l), l;
}
const mt = vg;
function vg(t, e = null, n = null, i = 0, r = null, s = !1) {
  if ((!t || t === lh) && (t = Xn), ta(t)) {
    const a = xi(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && al(a, n), or > 0 && !s && Ie && (a.shapeFlag & 6 ? Ie[Ie.indexOf(t)] = a : Ie.push(a)), a.patchFlag |= -2, a;
  }
  if (Ng(t) && (t = t.__vccOpts), e) {
    e = _g(e);
    let { class: a, style: l } = e;
    a && !Dt(a) && (e.class = Yn(a)), kt(l) && (Jf(l) && !et(l) && (l = Gt({}, l)), e.style = zt(l));
  }
  const o = Dt(t) ? 1 : Fm(t) ? 128 : yg(t) ? 64 : kt(t) ? 4 : ot(t) ? 2 : 0;
  return Z(
    t,
    e,
    n,
    i,
    r,
    o,
    s,
    !0
  );
}
function _g(t) {
  return t ? Jf(t) || ro in t ? Gt({}, t) : t : null;
}
function xi(t, e, n = !1) {
  const { props: i, ref: r, patchFlag: s, children: o } = t, a = e ? xg(i || {}, e) : i;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: a,
    key: a && Sh(a),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? et(r) ? r.concat(ls(e)) : [r, ls(e)] : ls(e)
    ) : r,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: o,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== Ft ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && xi(t.ssContent),
    ssFallback: t.ssFallback && xi(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
}
function oi(t = " ", e = 0) {
  return mt(_r, null, t, e);
}
function wg(t, e) {
  const n = mt(as, null, t);
  return n.staticCount = e, n;
}
function vt(t = "", e = !1) {
  return e ? (tt(), ar(Xn, null, t)) : mt(Xn, null, t);
}
function We(t) {
  return t == null || typeof t == "boolean" ? mt(Xn) : et(t) ? mt(
    Ft,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : typeof t == "object" ? yn(t) : mt(_r, null, String(t));
}
function yn(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : xi(t);
}
function al(t, e) {
  let n = 0;
  const { shapeFlag: i } = t;
  if (e == null)
    e = null;
  else if (et(e))
    n = 16;
  else if (typeof e == "object")
    if (i & 65) {
      const r = e.default;
      r && (r._c && (r._d = !1), al(t, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = e._;
      !r && !(ro in e) ? e._ctx = ee : r === 3 && ee && (ee.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    ot(e) ? (e = { default: e, _ctx: ee }, n = 32) : (e = String(e), i & 64 ? (n = 16, e = [oi(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function xg(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    for (const r in i)
      if (r === "class")
        e.class !== i.class && (e.class = Yn([e.class, i.class]));
      else if (r === "style")
        e.style = zt([e.style, i.style]);
      else if (Ks(r)) {
        const s = e[r], o = i[r];
        o && s !== o && !(et(s) && s.includes(o)) && (e[r] = s ? [].concat(s, o) : o);
      } else
        r !== "" && (e[r] = i[r]);
  }
  return e;
}
function Be(t, e, n, i = null) {
  Me(t, e, 7, [
    n,
    i
  ]);
}
const kg = mh();
let Sg = 0;
function Eg(t, e, n) {
  const i = t.type, r = (e ? e.appContext : t.appContext) || kg, s = {
    uid: Sg++,
    vnode: t,
    type: i,
    parent: e,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new $f(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: yh(i, r),
    emitsOptions: ah(i, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: St,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: St,
    data: St,
    props: St,
    attrs: St,
    slots: St,
    refs: St,
    setupState: St,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = Cm.bind(null, s), t.ce && t.ce(s), s;
}
let qt = null;
const so = () => qt || ee;
let Ss, ea;
{
  const t = Rf(), e = (n, i) => {
    let r;
    return (r = t[n]) || (r = t[n] = []), r.push(i), (s) => {
      r.length > 1 ? r.forEach((o) => o(s)) : r[0](s);
    };
  };
  Ss = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => qt = n
  ), ea = e(
    "__VUE_SSR_SETTERS__",
    (n) => xr = n
  );
}
const wr = (t) => {
  const e = qt;
  return Ss(t), t.scope.on(), () => {
    t.scope.off(), Ss(e);
  };
}, vc = () => {
  qt && qt.scope.off(), Ss(null);
};
function Eh(t) {
  return t.vnode.shapeFlag & 4;
}
let xr = !1;
function Tg(t, e = !1) {
  e && ea(e);
  const { props: n, children: i } = t.vnode, r = Eh(t);
  lg(t, n, r, e), fg(t, i);
  const s = r ? Ag(t, e) : void 0;
  return e && ea(!1), s;
}
function Ag(t, e) {
  const n = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = Qa(new Proxy(t.ctx, Zm));
  const { setup: i } = n;
  if (i) {
    const r = t.setupContext = i.length > 1 ? Og(t) : null, s = wr(t);
    ti();
    const o = xn(
      i,
      t,
      0,
      [
        t.props,
        r
      ]
    );
    if (ei(), s(), If(o)) {
      if (o.then(vc, vc), e)
        return o.then((a) => {
          _c(t, a, e);
        }).catch((a) => {
          vr(a, t, 0);
        });
      t.asyncDep = o;
    } else
      _c(t, o, e);
  } else
    Th(t, e);
}
function _c(t, e, n) {
  ot(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : kt(e) && (t.setupState = nh(e)), Th(t, n);
}
let wc;
function Th(t, e, n) {
  const i = t.type;
  if (!t.render) {
    if (!e && wc && !i.render) {
      const r = i.template || sl(t).template;
      if (r) {
        const { isCustomElement: s, compilerOptions: o } = t.appContext.config, { delimiters: a, compilerOptions: l } = i, c = Gt(
          Gt(
            {
              isCustomElement: s,
              delimiters: a
            },
            o
          ),
          l
        );
        i.render = wc(r, c);
      }
    }
    t.render = i.render || Ee;
  }
  {
    const r = wr(t);
    ti();
    try {
      tg(t);
    } finally {
      ei(), r();
    }
  }
}
function Cg(t) {
  return t.attrsProxy || (t.attrsProxy = new Proxy(
    t.attrs,
    {
      get(e, n) {
        return le(t, "get", "$attrs"), e[n];
      }
    }
  ));
}
function Og(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    get attrs() {
      return Cg(t);
    },
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function oo(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(nh(Qa(t.exposed)), {
      get(e, n) {
        if (n in e)
          return e[n];
        if (n in Xi)
          return Xi[n](t);
      },
      has(e, n) {
        return n in e || n in Xi;
      }
    }));
}
function Pg(t, e = !0) {
  return ot(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function Ng(t) {
  return ot(t) && "__vccOpts" in t;
}
const we = (t, e) => _m(t, e, xr);
function ll(t, e, n) {
  const i = arguments.length;
  return i === 2 ? kt(e) && !et(e) ? ta(e) ? mt(t, null, [e]) : mt(t, e) : mt(t, null, e) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && ta(n) && (n = [n]), mt(t, e, n));
}
const Ig = "3.4.21";
/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Lg = "http://www.w3.org/2000/svg", Mg = "http://www.w3.org/1998/Math/MathML", bn = typeof document < "u" ? document : null, xc = bn && /* @__PURE__ */ bn.createElement("template"), Rg = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, i) => {
    const r = e === "svg" ? bn.createElementNS(Lg, t) : e === "mathml" ? bn.createElementNS(Mg, t) : bn.createElement(t, n ? { is: n } : void 0);
    return t === "select" && i && i.multiple != null && r.setAttribute("multiple", i.multiple), r;
  },
  createText: (t) => bn.createTextNode(t),
  createComment: (t) => bn.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => bn.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, n, i, r, s) {
    const o = n ? n.previousSibling : e.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; e.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      xc.innerHTML = i === "svg" ? `<svg>${t}</svg>` : i === "mathml" ? `<math>${t}</math>` : t;
      const a = xc.content;
      if (i === "svg" || i === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      e.insertBefore(a, n);
    }
    return [
      // first
      o ? o.nextSibling : e.firstChild,
      // last
      n ? n.previousSibling : e.lastChild
    ];
  }
}, Dg = Symbol("_vtc");
function Fg(t, e, n) {
  const i = t[Dg];
  i && (e = (e ? [e, ...i] : [...i]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const Es = Symbol("_vod"), Ah = Symbol("_vsh"), Ch = {
  beforeMount(t, { value: e }, { transition: n }) {
    t[Es] = t.style.display === "none" ? "" : t.style.display, n && e ? n.beforeEnter(t) : qi(t, e);
  },
  mounted(t, { value: e }, { transition: n }) {
    n && e && n.enter(t);
  },
  updated(t, { value: e, oldValue: n }, { transition: i }) {
    !e != !n && (i ? e ? (i.beforeEnter(t), qi(t, !0), i.enter(t)) : i.leave(t, () => {
      qi(t, !1);
    }) : qi(t, e));
  },
  beforeUnmount(t, { value: e }) {
    qi(t, e);
  }
};
function qi(t, e) {
  t.style.display = e ? t[Es] : "none", t[Ah] = !e;
}
const $g = Symbol(""), Bg = /(^|;)\s*display\s*:/;
function Ug(t, e, n) {
  const i = t.style, r = Dt(n);
  let s = !1;
  if (n && !r) {
    if (e)
      if (Dt(e))
        for (const o of e.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          n[a] == null && cs(i, a, "");
        }
      else
        for (const o in e)
          n[o] == null && cs(i, o, "");
    for (const o in n)
      o === "display" && (s = !0), cs(i, o, n[o]);
  } else if (r) {
    if (e !== n) {
      const o = i[$g];
      o && (n += ";" + o), i.cssText = n, s = Bg.test(n);
    }
  } else
    e && t.removeAttribute("style");
  Es in t && (t[Es] = s ? i.display : "", t[Ah] && (i.display = "none"));
}
const kc = /\s*!important$/;
function cs(t, e, n) {
  if (et(n))
    n.forEach((i) => cs(t, e, i));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const i = qg(t, e);
    kc.test(n) ? t.setProperty(
      Li(i),
      n.replace(kc, ""),
      "important"
    ) : t[i] = n;
  }
}
const Sc = ["Webkit", "Moz", "ms"], Co = {};
function qg(t, e) {
  const n = Co[e];
  if (n)
    return n;
  let i = Ke(e);
  if (i !== "filter" && i in t)
    return Co[e] = i;
  i = Js(i);
  for (let r = 0; r < Sc.length; r++) {
    const s = Sc[r] + i;
    if (s in t)
      return Co[e] = s;
  }
  return e;
}
const Ec = "http://www.w3.org/1999/xlink";
function Wg(t, e, n, i, r) {
  if (i && e.startsWith("xlink:"))
    n == null ? t.removeAttributeNS(Ec, e.slice(6, e.length)) : t.setAttributeNS(Ec, e, n);
  else {
    const s = Kp(e);
    n == null || s && !Df(n) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : n);
  }
}
function Hg(t, e, n, i, r, s, o) {
  if (e === "innerHTML" || e === "textContent") {
    i && o(i, r, s), t[e] = n ?? "";
    return;
  }
  const a = t.tagName;
  if (e === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    const c = a === "OPTION" ? t.getAttribute("value") || "" : t.value, u = n ?? "";
    (c !== u || !("_value" in t)) && (t.value = u), n == null && t.removeAttribute(e), t._value = n;
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const c = typeof t[e];
    c === "boolean" ? n = Df(n) : n == null && c === "string" ? (n = "", l = !0) : c === "number" && (n = 0, l = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  l && t.removeAttribute(e);
}
function tn(t, e, n, i) {
  t.addEventListener(e, n, i);
}
function Vg(t, e, n, i) {
  t.removeEventListener(e, n, i);
}
const Tc = Symbol("_vei");
function zg(t, e, n, i, r = null) {
  const s = t[Tc] || (t[Tc] = {}), o = s[e];
  if (i && o)
    o.value = i;
  else {
    const [a, l] = Gg(e);
    if (i) {
      const c = s[e] = Kg(i, r);
      tn(t, a, c, l);
    } else
      o && (Vg(t, a, o, l), s[e] = void 0);
  }
}
const Ac = /(?:Once|Passive|Capture)$/;
function Gg(t) {
  let e;
  if (Ac.test(t)) {
    e = {};
    let i;
    for (; i = t.match(Ac); )
      t = t.slice(0, t.length - i[0].length), e[i[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Li(t.slice(2)), e];
}
let Oo = 0;
const jg = /* @__PURE__ */ Promise.resolve(), Yg = () => Oo || (jg.then(() => Oo = 0), Oo = Date.now());
function Kg(t, e) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    Me(
      Xg(i, n.value),
      e,
      5,
      [i]
    );
  };
  return n.value = t, n.attached = Yg(), n;
}
function Xg(t, e) {
  if (et(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map((i) => (r) => !r._stopped && i && i(r));
  } else
    return e;
}
const Cc = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, Jg = (t, e, n, i, r, s, o, a, l) => {
  const c = r === "svg";
  e === "class" ? Fg(t, i, c) : e === "style" ? Ug(t, n, i) : Ks(e) ? Ua(e) || zg(t, e, n, i, o) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : Qg(t, e, i, c)) ? Hg(
    t,
    e,
    i,
    s,
    o,
    a,
    l
  ) : (e === "true-value" ? t._trueValue = i : e === "false-value" && (t._falseValue = i), Wg(t, e, i, c));
};
function Qg(t, e, n, i) {
  if (i)
    return !!(e === "innerHTML" || e === "textContent" || e in t && Cc(e) && ot(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const r = t.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Cc(e) && Dt(n) ? !1 : e in t;
}
const En = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return et(e) ? (n) => rs(e, n) : e;
};
function Zg(t) {
  t.target.composing = !0;
}
function Oc(t) {
  const e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const Te = Symbol("_assign"), Ts = {
  created(t, { modifiers: { lazy: e, trim: n, number: i } }, r) {
    t[Te] = En(r);
    const s = i || r.props && r.props.type === "number";
    tn(t, e ? "change" : "input", (o) => {
      if (o.target.composing)
        return;
      let a = t.value;
      n && (a = a.trim()), s && (a = nr(a)), t[Te](a);
    }), n && tn(t, "change", () => {
      t.value = t.value.trim();
    }), e || (tn(t, "compositionstart", Zg), tn(t, "compositionend", Oc), tn(t, "change", Oc));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(t, { value: e }) {
    t.value = e ?? "";
  },
  beforeUpdate(t, { value: e, modifiers: { lazy: n, trim: i, number: r } }, s) {
    if (t[Te] = En(s), t.composing)
      return;
    const o = r || t.type === "number" ? nr(t.value) : t.value, a = e ?? "";
    o !== a && (document.activeElement === t && t.type !== "range" && (n || i && t.value.trim() === a) || (t.value = a));
  }
}, ty = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(t, e, n) {
    t[Te] = En(n), tn(t, "change", () => {
      const i = t._modelValue, r = ki(t), s = t.checked, o = t[Te];
      if (et(i)) {
        const a = Ha(i, r), l = a !== -1;
        if (s && !l)
          o(i.concat(r));
        else if (!s && l) {
          const c = [...i];
          c.splice(a, 1), o(c);
        }
      } else if (Ii(i)) {
        const a = new Set(i);
        s ? a.add(r) : a.delete(r), o(a);
      } else
        o(Oh(t, s));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Pc,
  beforeUpdate(t, e, n) {
    t[Te] = En(n), Pc(t, e, n);
  }
};
function Pc(t, { value: e, oldValue: n }, i) {
  t._modelValue = e, et(e) ? t.checked = Ha(e, i.props.value) > -1 : Ii(e) ? t.checked = e.has(i.props.value) : e !== n && (t.checked = Kn(e, Oh(t, !0)));
}
const ey = {
  created(t, { value: e }, n) {
    t.checked = Kn(e, n.props.value), t[Te] = En(n), tn(t, "change", () => {
      t[Te](ki(t));
    });
  },
  beforeUpdate(t, { value: e, oldValue: n }, i) {
    t[Te] = En(i), e !== n && (t.checked = Kn(e, i.props.value));
  }
}, ai = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(t, { value: e, modifiers: { number: n } }, i) {
    const r = Ii(e);
    tn(t, "change", () => {
      const s = Array.prototype.filter.call(t.options, (o) => o.selected).map(
        (o) => n ? nr(ki(o)) : ki(o)
      );
      t[Te](
        t.multiple ? r ? new Set(s) : s : s[0]
      ), t._assigning = !0, Zs(() => {
        t._assigning = !1;
      });
    }), t[Te] = En(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(t, { value: e, modifiers: { number: n } }) {
    Nc(t, e, n);
  },
  beforeUpdate(t, e, n) {
    t[Te] = En(n);
  },
  updated(t, { value: e, modifiers: { number: n } }) {
    t._assigning || Nc(t, e, n);
  }
};
function Nc(t, e, n) {
  const i = t.multiple, r = et(e);
  if (!(i && !r && !Ii(e))) {
    for (let s = 0, o = t.options.length; s < o; s++) {
      const a = t.options[s], l = ki(a);
      if (i)
        if (r) {
          const c = typeof l;
          c === "string" || c === "number" ? a.selected = e.includes(
            n ? nr(l) : l
          ) : a.selected = Ha(e, l) > -1;
        } else
          a.selected = e.has(l);
      else if (Kn(ki(a), e)) {
        t.selectedIndex !== s && (t.selectedIndex = s);
        return;
      }
    }
    !i && t.selectedIndex !== -1 && (t.selectedIndex = -1);
  }
}
function ki(t) {
  return "_value" in t ? t._value : t.value;
}
function Oh(t, e) {
  const n = e ? "_trueValue" : "_falseValue";
  return n in t ? t[n] : e;
}
const Ic = {
  created(t, e, n) {
    Rr(t, e, n, null, "created");
  },
  mounted(t, e, n) {
    Rr(t, e, n, null, "mounted");
  },
  beforeUpdate(t, e, n, i) {
    Rr(t, e, n, i, "beforeUpdate");
  },
  updated(t, e, n, i) {
    Rr(t, e, n, i, "updated");
  }
};
function ny(t, e) {
  switch (t) {
    case "SELECT":
      return ai;
    case "TEXTAREA":
      return Ts;
    default:
      switch (e) {
        case "checkbox":
          return ty;
        case "radio":
          return ey;
        default:
          return Ts;
      }
  }
}
function Rr(t, e, n, i, r) {
  const o = ny(
    t.tagName,
    n.props && n.props.type
  )[r];
  o && o(t, e, n, i);
}
const iy = /* @__PURE__ */ Gt({ patchProp: Jg }, Rg);
let Lc;
function ry() {
  return Lc || (Lc = dg(iy));
}
const sy = (...t) => {
  const e = ry().createApp(...t), { mount: n } = e;
  return e.mount = (i) => {
    const r = ay(i);
    if (!r)
      return;
    const s = e._component;
    !ot(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
    const o = n(r, !1, oy(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, e;
};
function oy(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function ay(t) {
  return Dt(t) ? document.querySelector(t) : t;
}
/*!
 * shared v9.10.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
const As = typeof window < "u", Pn = (t, e = !1) => e ? Symbol.for(t) : Symbol(t), ly = (t, e, n) => cy({ l: t, k: e, s: n }), cy = (t) => JSON.stringify(t).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Wt = (t) => typeof t == "number" && isFinite(t), uy = (t) => Nh(t) === "[object Date]", Cs = (t) => Nh(t) === "[object RegExp]", ao = (t) => ht(t) && Object.keys(t).length === 0, Jt = Object.assign;
let Mc;
const cl = () => Mc || (Mc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rc(t) {
  return t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const fy = Object.prototype.hasOwnProperty;
function Os(t, e) {
  return fy.call(t, e);
}
const $t = Array.isArray, Nt = (t) => typeof t == "function", Y = (t) => typeof t == "string", Ot = (t) => typeof t == "boolean", gt = (t) => t !== null && typeof t == "object", hy = (t) => gt(t) && Nt(t.then) && Nt(t.catch), Ph = Object.prototype.toString, Nh = (t) => Ph.call(t), ht = (t) => {
  if (!gt(t))
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e.constructor === Object;
}, dy = (t) => t == null ? "" : $t(t) || ht(t) && t.toString === Ph ? JSON.stringify(t, null, 2) : String(t);
function py(t, e = "") {
  return t.reduce((n, i, r) => r === 0 ? n + i : n + e + i, "");
}
function ul(t) {
  let e = t;
  return () => ++e;
}
function my(t, e) {
  typeof console < "u" && (console.warn("[intlify] " + t), e && console.warn(e.stack));
}
const Dr = (t) => !gt(t) || $t(t);
function us(t, e) {
  if (Dr(t) || Dr(e))
    throw new Error("Invalid value");
  const n = [{ src: t, des: e }];
  for (; n.length; ) {
    const { src: i, des: r } = n.pop();
    Object.keys(i).forEach((s) => {
      Dr(i[s]) || Dr(r[s]) ? r[s] = i[s] : n.push({ src: i[s], des: r[s] });
    });
  }
}
/*!
 * message-compiler v9.10.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
function gy(t, e, n) {
  return { line: t, column: e, offset: n };
}
function na(t, e, n) {
  const i = { start: t, end: e };
  return n != null && (i.source = n), i;
}
const yy = /\{([0-9a-zA-Z]+)\}/g;
function by(t, ...e) {
  return e.length === 1 && vy(e[0]) && (e = e[0]), (!e || !e.hasOwnProperty) && (e = {}), t.replace(yy, (n, i) => e.hasOwnProperty(i) ? e[i] : "");
}
const Ih = Object.assign, Dc = (t) => typeof t == "string", vy = (t) => t !== null && typeof t == "object";
function Lh(t, e = "") {
  return t.reduce((n, i, r) => r === 0 ? n + i : n + e + i, "");
}
const nt = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16,
  // Special value for higher-order compilers to pick up the last code
  // to avoid collision of error codes. This should always be kept as the last
  // item.
  __EXTEND_POINT__: 17
}, _y = {
  // tokenizer error messages
  [nt.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [nt.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [nt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [nt.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [nt.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [nt.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [nt.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [nt.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [nt.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [nt.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [nt.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [nt.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [nt.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [nt.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [nt.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [nt.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function Ri(t, e, n = {}) {
  const { domain: i, messages: r, args: s } = n, o = by((r || _y)[t] || "", ...s || []), a = new SyntaxError(String(o));
  return a.code = t, e && (a.location = e), a.domain = i, a;
}
function wy(t) {
  throw t;
}
const Je = " ", xy = "\r", te = `
`, ky = "\u2028", Sy = "\u2029";
function Ey(t) {
  const e = t;
  let n = 0, i = 1, r = 1, s = 0;
  const o = (D) => e[D] === xy && e[D + 1] === te, a = (D) => e[D] === te, l = (D) => e[D] === Sy, c = (D) => e[D] === ky, u = (D) => o(D) || a(D) || l(D) || c(D), f = () => n, h = () => i, p = () => r, y = () => s, k = (D) => o(D) || l(D) || c(D) ? te : e[D], w = () => k(n), g = () => k(n + s);
  function b() {
    return s = 0, u(n) && (i++, r = 0), o(n) && n++, n++, r++, e[n];
  }
  function x() {
    return o(n + s) && s++, s++, e[n + s];
  }
  function S() {
    n = 0, i = 1, r = 1, s = 0;
  }
  function O(D = 0) {
    s = D;
  }
  function P() {
    const D = n + s;
    for (; D !== n; )
      b();
    s = 0;
  }
  return {
    index: f,
    line: h,
    column: p,
    peekOffset: y,
    charAt: k,
    currentChar: w,
    currentPeek: g,
    next: b,
    peek: x,
    reset: S,
    resetPeek: O,
    skipToPeek: P
  };
}
const dn = void 0, Ty = ".", Fc = "'", Ay = "tokenizer";
function Cy(t, e = {}) {
  const n = e.location !== !1, i = Ey(t), r = () => i.index(), s = () => gy(i.line(), i.column(), i.index()), o = s(), a = r(), l = {
    currentType: 14,
    offset: a,
    startLoc: o,
    endLoc: o,
    lastType: 14,
    lastOffset: a,
    lastStartLoc: o,
    lastEndLoc: o,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, c = () => l, { onError: u } = e;
  function f(d, m, _, ...E) {
    const C = c();
    if (m.column += _, m.offset += _, u) {
      const I = n ? na(C.startLoc, m) : null, B = Ri(d, I, {
        domain: Ay,
        args: E
      });
      u(B);
    }
  }
  function h(d, m, _) {
    d.endLoc = s(), d.currentType = m;
    const E = { type: m };
    return n && (E.loc = na(d.startLoc, d.endLoc)), _ != null && (E.value = _), E;
  }
  const p = (d) => h(
    d,
    14
    /* TokenTypes.EOF */
  );
  function y(d, m) {
    return d.currentChar() === m ? (d.next(), m) : (f(nt.EXPECTED_TOKEN, s(), 0, m), "");
  }
  function k(d) {
    let m = "";
    for (; d.currentPeek() === Je || d.currentPeek() === te; )
      m += d.currentPeek(), d.peek();
    return m;
  }
  function w(d) {
    const m = k(d);
    return d.skipToPeek(), m;
  }
  function g(d) {
    if (d === dn)
      return !1;
    const m = d.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m === 95;
  }
  function b(d) {
    if (d === dn)
      return !1;
    const m = d.charCodeAt(0);
    return m >= 48 && m <= 57;
  }
  function x(d, m) {
    const { currentType: _ } = m;
    if (_ !== 2)
      return !1;
    k(d);
    const E = g(d.currentPeek());
    return d.resetPeek(), E;
  }
  function S(d, m) {
    const { currentType: _ } = m;
    if (_ !== 2)
      return !1;
    k(d);
    const E = d.currentPeek() === "-" ? d.peek() : d.currentPeek(), C = b(E);
    return d.resetPeek(), C;
  }
  function O(d, m) {
    const { currentType: _ } = m;
    if (_ !== 2)
      return !1;
    k(d);
    const E = d.currentPeek() === Fc;
    return d.resetPeek(), E;
  }
  function P(d, m) {
    const { currentType: _ } = m;
    if (_ !== 8)
      return !1;
    k(d);
    const E = d.currentPeek() === ".";
    return d.resetPeek(), E;
  }
  function D(d, m) {
    const { currentType: _ } = m;
    if (_ !== 9)
      return !1;
    k(d);
    const E = g(d.currentPeek());
    return d.resetPeek(), E;
  }
  function z(d, m) {
    const { currentType: _ } = m;
    if (!(_ === 8 || _ === 12))
      return !1;
    k(d);
    const E = d.currentPeek() === ":";
    return d.resetPeek(), E;
  }
  function F(d, m) {
    const { currentType: _ } = m;
    if (_ !== 10)
      return !1;
    const E = () => {
      const I = d.currentPeek();
      return I === "{" ? g(d.peek()) : I === "@" || I === "%" || I === "|" || I === ":" || I === "." || I === Je || !I ? !1 : I === te ? (d.peek(), E()) : g(I);
    }, C = E();
    return d.resetPeek(), C;
  }
  function H(d) {
    k(d);
    const m = d.currentPeek() === "|";
    return d.resetPeek(), m;
  }
  function $(d) {
    const m = k(d), _ = d.currentPeek() === "%" && d.peek() === "{";
    return d.resetPeek(), {
      isModulo: _,
      hasSpace: m.length > 0
    };
  }
  function X(d, m = !0) {
    const _ = (C = !1, I = "", B = !1) => {
      const M = d.currentPeek();
      return M === "{" ? I === "%" ? !1 : C : M === "@" || !M ? I === "%" ? !0 : C : M === "%" ? (d.peek(), _(C, "%", !0)) : M === "|" ? I === "%" || B ? !0 : !(I === Je || I === te) : M === Je ? (d.peek(), _(!0, Je, B)) : M === te ? (d.peek(), _(!0, te, B)) : !0;
    }, E = _();
    return m && d.resetPeek(), E;
  }
  function q(d, m) {
    const _ = d.currentChar();
    return _ === dn ? dn : m(_) ? (d.next(), _) : null;
  }
  function rt(d) {
    return q(d, (_) => {
      const E = _.charCodeAt(0);
      return E >= 97 && E <= 122 || // a-z
      E >= 65 && E <= 90 || // A-Z
      E >= 48 && E <= 57 || // 0-9
      E === 95 || // _
      E === 36;
    });
  }
  function Ht(d) {
    return q(d, (_) => {
      const E = _.charCodeAt(0);
      return E >= 48 && E <= 57;
    });
  }
  function yt(d) {
    return q(d, (_) => {
      const E = _.charCodeAt(0);
      return E >= 48 && E <= 57 || // 0-9
      E >= 65 && E <= 70 || // A-F
      E >= 97 && E <= 102;
    });
  }
  function lt(d) {
    let m = "", _ = "";
    for (; m = Ht(d); )
      _ += m;
    return _;
  }
  function at(d) {
    w(d);
    const m = d.currentChar();
    return m !== "%" && f(nt.EXPECTED_TOKEN, s(), 0, m), d.next(), "%";
  }
  function _t(d) {
    let m = "";
    for (; ; ) {
      const _ = d.currentChar();
      if (_ === "{" || _ === "}" || _ === "@" || _ === "|" || !_)
        break;
      if (_ === "%")
        if (X(d))
          m += _, d.next();
        else
          break;
      else if (_ === Je || _ === te)
        if (X(d))
          m += _, d.next();
        else {
          if (H(d))
            break;
          m += _, d.next();
        }
      else
        m += _, d.next();
    }
    return m;
  }
  function ue(d) {
    w(d);
    let m = "", _ = "";
    for (; m = rt(d); )
      _ += m;
    return d.currentChar() === dn && f(nt.UNTERMINATED_CLOSING_BRACE, s(), 0), _;
  }
  function Pt(d) {
    w(d);
    let m = "";
    return d.currentChar() === "-" ? (d.next(), m += `-${lt(d)}`) : m += lt(d), d.currentChar() === dn && f(nt.UNTERMINATED_CLOSING_BRACE, s(), 0), m;
  }
  function Mt(d) {
    w(d), y(d, "'");
    let m = "", _ = "";
    const E = (I) => I !== Fc && I !== te;
    for (; m = q(d, E); )
      m === "\\" ? _ += De(d) : _ += m;
    const C = d.currentChar();
    return C === te || C === dn ? (f(nt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), C === te && (d.next(), y(d, "'")), _) : (y(d, "'"), _);
  }
  function De(d) {
    const m = d.currentChar();
    switch (m) {
      case "\\":
      case "'":
        return d.next(), `\\${m}`;
      case "u":
        return Fe(d, m, 4);
      case "U":
        return Fe(d, m, 6);
      default:
        return f(nt.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, m), "";
    }
  }
  function Fe(d, m, _) {
    y(d, m);
    let E = "";
    for (let C = 0; C < _; C++) {
      const I = yt(d);
      if (!I) {
        f(nt.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${m}${E}${d.currentChar()}`);
        break;
      }
      E += I;
    }
    return `\\${m}${E}`;
  }
  function Qt(d) {
    w(d);
    let m = "", _ = "";
    const E = (C) => C !== "{" && C !== "}" && C !== Je && C !== te;
    for (; m = q(d, E); )
      _ += m;
    return _;
  }
  function Vt(d) {
    let m = "", _ = "";
    for (; m = rt(d); )
      _ += m;
    return _;
  }
  function Ce(d) {
    const m = (_ = !1, E) => {
      const C = d.currentChar();
      return C === "{" || C === "%" || C === "@" || C === "|" || C === "(" || C === ")" || !C || C === Je ? E : C === te || C === Ty ? (E += C, d.next(), m(_, E)) : (E += C, d.next(), m(!0, E));
    };
    return m(!1, "");
  }
  function fe(d) {
    w(d);
    const m = y(
      d,
      "|"
      /* TokenChars.Pipe */
    );
    return w(d), m;
  }
  function be(d, m) {
    let _ = null;
    switch (d.currentChar()) {
      case "{":
        return m.braceNest >= 1 && f(nt.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), d.next(), _ = h(
          m,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), w(d), m.braceNest++, _;
      case "}":
        return m.braceNest > 0 && m.currentType === 2 && f(nt.EMPTY_PLACEHOLDER, s(), 0), d.next(), _ = h(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), m.braceNest--, m.braceNest > 0 && w(d), m.inLinked && m.braceNest === 0 && (m.inLinked = !1), _;
      case "@":
        return m.braceNest > 0 && f(nt.UNTERMINATED_CLOSING_BRACE, s(), 0), _ = jt(d, m) || p(m), m.braceNest = 0, _;
      default:
        let C = !0, I = !0, B = !0;
        if (H(d))
          return m.braceNest > 0 && f(nt.UNTERMINATED_CLOSING_BRACE, s(), 0), _ = h(m, 1, fe(d)), m.braceNest = 0, m.inLinked = !1, _;
        if (m.braceNest > 0 && (m.currentType === 5 || m.currentType === 6 || m.currentType === 7))
          return f(nt.UNTERMINATED_CLOSING_BRACE, s(), 0), m.braceNest = 0, ve(d, m);
        if (C = x(d, m))
          return _ = h(m, 5, ue(d)), w(d), _;
        if (I = S(d, m))
          return _ = h(m, 6, Pt(d)), w(d), _;
        if (B = O(d, m))
          return _ = h(m, 7, Mt(d)), w(d), _;
        if (!C && !I && !B)
          return _ = h(m, 13, Qt(d)), f(nt.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, _.value), w(d), _;
        break;
    }
    return _;
  }
  function jt(d, m) {
    const { currentType: _ } = m;
    let E = null;
    const C = d.currentChar();
    switch ((_ === 8 || _ === 9 || _ === 12 || _ === 10) && (C === te || C === Je) && f(nt.INVALID_LINKED_FORMAT, s(), 0), C) {
      case "@":
        return d.next(), E = h(
          m,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), m.inLinked = !0, E;
      case ".":
        return w(d), d.next(), h(
          m,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return w(d), d.next(), h(
          m,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return H(d) ? (E = h(m, 1, fe(d)), m.braceNest = 0, m.inLinked = !1, E) : P(d, m) || z(d, m) ? (w(d), jt(d, m)) : D(d, m) ? (w(d), h(m, 12, Vt(d))) : F(d, m) ? (w(d), C === "{" ? be(d, m) || E : h(m, 11, Ce(d))) : (_ === 8 && f(nt.INVALID_LINKED_FORMAT, s(), 0), m.braceNest = 0, m.inLinked = !1, ve(d, m));
    }
  }
  function ve(d, m) {
    let _ = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (m.braceNest > 0)
      return be(d, m) || p(m);
    if (m.inLinked)
      return jt(d, m) || p(m);
    switch (d.currentChar()) {
      case "{":
        return be(d, m) || p(m);
      case "}":
        return f(nt.UNBALANCED_CLOSING_BRACE, s(), 0), d.next(), h(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return jt(d, m) || p(m);
      default:
        if (H(d))
          return _ = h(m, 1, fe(d)), m.braceNest = 0, m.inLinked = !1, _;
        const { isModulo: C, hasSpace: I } = $(d);
        if (C)
          return I ? h(m, 0, _t(d)) : h(m, 4, at(d));
        if (X(d))
          return h(m, 0, _t(d));
        break;
    }
    return _;
  }
  function Ln() {
    const { currentType: d, offset: m, startLoc: _, endLoc: E } = l;
    return l.lastType = d, l.lastOffset = m, l.lastStartLoc = _, l.lastEndLoc = E, l.offset = r(), l.startLoc = s(), i.currentChar() === dn ? h(
      l,
      14
      /* TokenTypes.EOF */
    ) : ve(i, l);
  }
  return {
    nextToken: Ln,
    currentOffset: r,
    currentPosition: s,
    context: c
  };
}
const Oy = "parser", Py = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Ny(t, e, n) {
  switch (t) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const i = parseInt(e || n, 16);
      return i <= 55295 || i >= 57344 ? String.fromCodePoint(i) : "�";
    }
  }
}
function Iy(t = {}) {
  const e = t.location !== !1, { onError: n } = t;
  function i(g, b, x, S, ...O) {
    const P = g.currentPosition();
    if (P.offset += S, P.column += S, n) {
      const D = e ? na(x, P) : null, z = Ri(b, D, {
        domain: Oy,
        args: O
      });
      n(z);
    }
  }
  function r(g, b, x) {
    const S = { type: g };
    return e && (S.start = b, S.end = b, S.loc = { start: x, end: x }), S;
  }
  function s(g, b, x, S) {
    S && (g.type = S), e && (g.end = b, g.loc && (g.loc.end = x));
  }
  function o(g, b) {
    const x = g.context(), S = r(3, x.offset, x.startLoc);
    return S.value = b, s(S, g.currentOffset(), g.currentPosition()), S;
  }
  function a(g, b) {
    const x = g.context(), { lastOffset: S, lastStartLoc: O } = x, P = r(5, S, O);
    return P.index = parseInt(b, 10), g.nextToken(), s(P, g.currentOffset(), g.currentPosition()), P;
  }
  function l(g, b) {
    const x = g.context(), { lastOffset: S, lastStartLoc: O } = x, P = r(4, S, O);
    return P.key = b, g.nextToken(), s(P, g.currentOffset(), g.currentPosition()), P;
  }
  function c(g, b) {
    const x = g.context(), { lastOffset: S, lastStartLoc: O } = x, P = r(9, S, O);
    return P.value = b.replace(Py, Ny), g.nextToken(), s(P, g.currentOffset(), g.currentPosition()), P;
  }
  function u(g) {
    const b = g.nextToken(), x = g.context(), { lastOffset: S, lastStartLoc: O } = x, P = r(8, S, O);
    return b.type !== 12 ? (i(g, nt.UNEXPECTED_EMPTY_LINKED_MODIFIER, x.lastStartLoc, 0), P.value = "", s(P, S, O), {
      nextConsumeToken: b,
      node: P
    }) : (b.value == null && i(g, nt.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, Ue(b)), P.value = b.value || "", s(P, g.currentOffset(), g.currentPosition()), {
      node: P
    });
  }
  function f(g, b) {
    const x = g.context(), S = r(7, x.offset, x.startLoc);
    return S.value = b, s(S, g.currentOffset(), g.currentPosition()), S;
  }
  function h(g) {
    const b = g.context(), x = r(6, b.offset, b.startLoc);
    let S = g.nextToken();
    if (S.type === 9) {
      const O = u(g);
      x.modifier = O.node, S = O.nextConsumeToken || g.nextToken();
    }
    switch (S.type !== 10 && i(g, nt.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Ue(S)), S = g.nextToken(), S.type === 2 && (S = g.nextToken()), S.type) {
      case 11:
        S.value == null && i(g, nt.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Ue(S)), x.key = f(g, S.value || "");
        break;
      case 5:
        S.value == null && i(g, nt.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Ue(S)), x.key = l(g, S.value || "");
        break;
      case 6:
        S.value == null && i(g, nt.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Ue(S)), x.key = a(g, S.value || "");
        break;
      case 7:
        S.value == null && i(g, nt.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Ue(S)), x.key = c(g, S.value || "");
        break;
      default:
        i(g, nt.UNEXPECTED_EMPTY_LINKED_KEY, b.lastStartLoc, 0);
        const O = g.context(), P = r(7, O.offset, O.startLoc);
        return P.value = "", s(P, O.offset, O.startLoc), x.key = P, s(x, O.offset, O.startLoc), {
          nextConsumeToken: S,
          node: x
        };
    }
    return s(x, g.currentOffset(), g.currentPosition()), {
      node: x
    };
  }
  function p(g) {
    const b = g.context(), x = b.currentType === 1 ? g.currentOffset() : b.offset, S = b.currentType === 1 ? b.endLoc : b.startLoc, O = r(2, x, S);
    O.items = [];
    let P = null;
    do {
      const F = P || g.nextToken();
      switch (P = null, F.type) {
        case 0:
          F.value == null && i(g, nt.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Ue(F)), O.items.push(o(g, F.value || ""));
          break;
        case 6:
          F.value == null && i(g, nt.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Ue(F)), O.items.push(a(g, F.value || ""));
          break;
        case 5:
          F.value == null && i(g, nt.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Ue(F)), O.items.push(l(g, F.value || ""));
          break;
        case 7:
          F.value == null && i(g, nt.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Ue(F)), O.items.push(c(g, F.value || ""));
          break;
        case 8:
          const H = h(g);
          O.items.push(H.node), P = H.nextConsumeToken || null;
          break;
      }
    } while (b.currentType !== 14 && b.currentType !== 1);
    const D = b.currentType === 1 ? b.lastOffset : g.currentOffset(), z = b.currentType === 1 ? b.lastEndLoc : g.currentPosition();
    return s(O, D, z), O;
  }
  function y(g, b, x, S) {
    const O = g.context();
    let P = S.items.length === 0;
    const D = r(1, b, x);
    D.cases = [], D.cases.push(S);
    do {
      const z = p(g);
      P || (P = z.items.length === 0), D.cases.push(z);
    } while (O.currentType !== 14);
    return P && i(g, nt.MUST_HAVE_MESSAGES_IN_PLURAL, x, 0), s(D, g.currentOffset(), g.currentPosition()), D;
  }
  function k(g) {
    const b = g.context(), { offset: x, startLoc: S } = b, O = p(g);
    return b.currentType === 14 ? O : y(g, x, S, O);
  }
  function w(g) {
    const b = Cy(g, Ih({}, t)), x = b.context(), S = r(0, x.offset, x.startLoc);
    return e && S.loc && (S.loc.source = g), S.body = k(b), t.onCacheKey && (S.cacheKey = t.onCacheKey(g)), x.currentType !== 14 && i(b, nt.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, g[x.offset] || ""), s(S, b.currentOffset(), b.currentPosition()), S;
  }
  return { parse: w };
}
function Ue(t) {
  if (t.type === 14)
    return "EOF";
  const e = (t.value || "").replace(/\r?\n/gu, "\\n");
  return e.length > 10 ? e.slice(0, 9) + "…" : e;
}
function Ly(t, e = {}) {
  const n = {
    ast: t,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function $c(t, e) {
  for (let n = 0; n < t.length; n++)
    fl(t[n], e);
}
function fl(t, e) {
  switch (t.type) {
    case 1:
      $c(t.cases, e), e.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      $c(t.items, e);
      break;
    case 6:
      fl(t.key, e), e.helper(
        "linked"
        /* HelperNameMap.LINKED */
      ), e.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    case 5:
      e.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), e.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      e.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), e.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function My(t, e = {}) {
  const n = Ly(t);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), t.body && fl(t.body, n);
  const i = n.context();
  t.helpers = Array.from(i.helpers);
}
function Ry(t) {
  const e = t.body;
  return e.type === 2 ? Bc(e) : e.cases.forEach((n) => Bc(n)), t;
}
function Bc(t) {
  if (t.items.length === 1) {
    const e = t.items[0];
    (e.type === 3 || e.type === 9) && (t.static = e.value, delete e.value);
  } else {
    const e = [];
    for (let n = 0; n < t.items.length; n++) {
      const i = t.items[n];
      if (!(i.type === 3 || i.type === 9) || i.value == null)
        break;
      e.push(i.value);
    }
    if (e.length === t.items.length) {
      t.static = Lh(e);
      for (let n = 0; n < t.items.length; n++) {
        const i = t.items[n];
        (i.type === 3 || i.type === 9) && delete i.value;
      }
    }
  }
}
const Dy = "minifier";
function li(t) {
  switch (t.t = t.type, t.type) {
    case 0:
      const e = t;
      li(e.body), e.b = e.body, delete e.body;
      break;
    case 1:
      const n = t, i = n.cases;
      for (let u = 0; u < i.length; u++)
        li(i[u]);
      n.c = i, delete n.cases;
      break;
    case 2:
      const r = t, s = r.items;
      for (let u = 0; u < s.length; u++)
        li(s[u]);
      r.i = s, delete r.items, r.static && (r.s = r.static, delete r.static);
      break;
    case 3:
    case 9:
    case 8:
    case 7:
      const o = t;
      o.value && (o.v = o.value, delete o.value);
      break;
    case 6:
      const a = t;
      li(a.key), a.k = a.key, delete a.key, a.modifier && (li(a.modifier), a.m = a.modifier, delete a.modifier);
      break;
    case 5:
      const l = t;
      l.i = l.index, delete l.index;
      break;
    case 4:
      const c = t;
      c.k = c.key, delete c.key;
      break;
    default:
      throw Ri(nt.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: Dy,
        args: [t.type]
      });
  }
  delete t.type;
}
const Fy = "parser";
function $y(t, e) {
  const { sourceMap: n, filename: i, breakLineCode: r, needIndent: s } = e, o = e.location !== !1, a = {
    filename: i,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: r,
    needIndent: s,
    indentLevel: 0
  };
  o && t.loc && (a.source = t.loc.source);
  const l = () => a;
  function c(w, g) {
    a.code += w;
  }
  function u(w, g = !0) {
    const b = g ? r : "";
    c(s ? b + "  ".repeat(w) : b);
  }
  function f(w = !0) {
    const g = ++a.indentLevel;
    w && u(g);
  }
  function h(w = !0) {
    const g = --a.indentLevel;
    w && u(g);
  }
  function p() {
    u(a.indentLevel);
  }
  return {
    context: l,
    push: c,
    indent: f,
    deindent: h,
    newline: p,
    helper: (w) => `_${w}`,
    needIndent: () => a.needIndent
  };
}
function By(t, e) {
  const { helper: n } = t;
  t.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Si(t, e.key), e.modifier ? (t.push(", "), Si(t, e.modifier), t.push(", _type")) : t.push(", undefined, _type"), t.push(")");
}
function Uy(t, e) {
  const { helper: n, needIndent: i } = t;
  t.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), t.indent(i());
  const r = e.items.length;
  for (let s = 0; s < r && (Si(t, e.items[s]), s !== r - 1); s++)
    t.push(", ");
  t.deindent(i()), t.push("])");
}
function qy(t, e) {
  const { helper: n, needIndent: i } = t;
  if (e.cases.length > 1) {
    t.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), t.indent(i());
    const r = e.cases.length;
    for (let s = 0; s < r && (Si(t, e.cases[s]), s !== r - 1); s++)
      t.push(", ");
    t.deindent(i()), t.push("])");
  }
}
function Wy(t, e) {
  e.body ? Si(t, e.body) : t.push("null");
}
function Si(t, e) {
  const { helper: n } = t;
  switch (e.type) {
    case 0:
      Wy(t, e);
      break;
    case 1:
      qy(t, e);
      break;
    case 2:
      Uy(t, e);
      break;
    case 6:
      By(t, e);
      break;
    case 8:
      t.push(JSON.stringify(e.value), e);
      break;
    case 7:
      t.push(JSON.stringify(e.value), e);
      break;
    case 5:
      t.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "list"
        /* HelperNameMap.LIST */
      )}(${e.index}))`, e);
      break;
    case 4:
      t.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(e.key)}))`, e);
      break;
    case 9:
      t.push(JSON.stringify(e.value), e);
      break;
    case 3:
      t.push(JSON.stringify(e.value), e);
      break;
    default:
      throw Ri(nt.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: Fy,
        args: [e.type]
      });
  }
}
const Hy = (t, e = {}) => {
  const n = Dc(e.mode) ? e.mode : "normal", i = Dc(e.filename) ? e.filename : "message.intl", r = !!e.sourceMap, s = e.breakLineCode != null ? e.breakLineCode : n === "arrow" ? ";" : `
`, o = e.needIndent ? e.needIndent : n !== "arrow", a = t.helpers || [], l = $y(t, {
    mode: n,
    filename: i,
    sourceMap: r,
    breakLineCode: s,
    needIndent: o
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(o), a.length > 0 && (l.push(`const { ${Lh(a.map((f) => `${f}: _${f}`), ", ")} } = ctx`), l.newline()), l.push("return "), Si(l, t), l.deindent(o), l.push("}"), delete t.helpers;
  const { code: c, map: u } = l.context();
  return {
    ast: t,
    code: c,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Vy(t, e = {}) {
  const n = Ih({}, e), i = !!n.jit, r = !!n.minify, s = n.optimize == null ? !0 : n.optimize, a = Iy(n).parse(t);
  return i ? (s && Ry(a), r && li(a), { ast: a, code: "" }) : (My(a, n), Hy(a, n));
}
/*!
 * core-base v9.10.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
function zy() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (cl().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Nn = [];
Nn[
  0
  /* States.BEFORE_PATH */
] = {
  w: [
    0
    /* States.BEFORE_PATH */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
Nn[
  1
  /* States.IN_PATH */
] = {
  w: [
    1
    /* States.IN_PATH */
  ],
  ".": [
    2
    /* States.BEFORE_IDENT */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
Nn[
  2
  /* States.BEFORE_IDENT */
] = {
  w: [
    2
    /* States.BEFORE_IDENT */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ]
};
Nn[
  3
  /* States.IN_IDENT */
] = {
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ],
  w: [
    1,
    1
    /* Actions.PUSH */
  ],
  ".": [
    2,
    1
    /* Actions.PUSH */
  ],
  "[": [
    4,
    1
    /* Actions.PUSH */
  ],
  o: [
    7,
    1
    /* Actions.PUSH */
  ]
};
Nn[
  4
  /* States.IN_SUB_PATH */
] = {
  "'": [
    5,
    0
    /* Actions.APPEND */
  ],
  '"': [
    6,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  "]": [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  o: 8,
  l: [
    4,
    0
    /* Actions.APPEND */
  ]
};
Nn[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  "'": [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    5,
    0
    /* Actions.APPEND */
  ]
};
Nn[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  '"': [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const Gy = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function jy(t) {
  return Gy.test(t);
}
function Yy(t) {
  const e = t.charCodeAt(0), n = t.charCodeAt(t.length - 1);
  return e === n && (e === 34 || e === 39) ? t.slice(1, -1) : t;
}
function Ky(t) {
  if (t == null)
    return "o";
  switch (t.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return t;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function Xy(t) {
  const e = t.trim();
  return t.charAt(0) === "0" && isNaN(parseInt(t)) ? !1 : jy(e) ? Yy(e) : "*" + e;
}
function Jy(t) {
  const e = [];
  let n = -1, i = 0, r = 0, s, o, a, l, c, u, f;
  const h = [];
  h[
    0
    /* Actions.APPEND */
  ] = () => {
    o === void 0 ? o = a : o += a;
  }, h[
    1
    /* Actions.PUSH */
  ] = () => {
    o !== void 0 && (e.push(o), o = void 0);
  }, h[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    h[
      0
      /* Actions.APPEND */
    ](), r++;
  }, h[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (r > 0)
      r--, i = 4, h[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (r = 0, o === void 0 || (o = Xy(o), o === !1))
        return !1;
      h[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function p() {
    const y = t[n + 1];
    if (i === 5 && y === "'" || i === 6 && y === '"')
      return n++, a = "\\" + y, h[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; i !== null; )
    if (n++, s = t[n], !(s === "\\" && p())) {
      if (l = Ky(s), f = Nn[i], c = f[l] || f.l || 8, c === 8 || (i = c[0], c[1] !== void 0 && (u = h[c[1]], u && (a = s, u() === !1))))
        return;
      if (i === 7)
        return e;
    }
}
const Uc = /* @__PURE__ */ new Map();
function Qy(t, e) {
  return gt(t) ? t[e] : null;
}
function Zy(t, e) {
  if (!gt(t))
    return null;
  let n = Uc.get(e);
  if (n || (n = Jy(e), n && Uc.set(e, n)), !n)
    return null;
  const i = n.length;
  let r = t, s = 0;
  for (; s < i; ) {
    const o = r[n[s]];
    if (o === void 0 || Nt(r))
      return null;
    r = o, s++;
  }
  return r;
}
const tb = (t) => t, eb = (t) => "", nb = "text", ib = (t) => t.length === 0 ? "" : py(t), rb = dy;
function qc(t, e) {
  return t = Math.abs(t), e === 2 ? t ? t > 1 ? 1 : 0 : 1 : t ? Math.min(t, 2) : 0;
}
function sb(t) {
  const e = Wt(t.pluralIndex) ? t.pluralIndex : -1;
  return t.named && (Wt(t.named.count) || Wt(t.named.n)) ? Wt(t.named.count) ? t.named.count : Wt(t.named.n) ? t.named.n : e : e;
}
function ob(t, e) {
  e.count || (e.count = t), e.n || (e.n = t);
}
function ab(t = {}) {
  const e = t.locale, n = sb(t), i = gt(t.pluralRules) && Y(e) && Nt(t.pluralRules[e]) ? t.pluralRules[e] : qc, r = gt(t.pluralRules) && Y(e) && Nt(t.pluralRules[e]) ? qc : void 0, s = (g) => g[i(n, g.length, r)], o = t.list || [], a = (g) => o[g], l = t.named || {};
  Wt(t.pluralIndex) && ob(n, l);
  const c = (g) => l[g];
  function u(g) {
    const b = Nt(t.messages) ? t.messages(g) : gt(t.messages) ? t.messages[g] : !1;
    return b || (t.parent ? t.parent.message(g) : eb);
  }
  const f = (g) => t.modifiers ? t.modifiers[g] : tb, h = ht(t.processor) && Nt(t.processor.normalize) ? t.processor.normalize : ib, p = ht(t.processor) && Nt(t.processor.interpolate) ? t.processor.interpolate : rb, y = ht(t.processor) && Y(t.processor.type) ? t.processor.type : nb, w = {
    list: a,
    named: c,
    plural: s,
    linked: (g, ...b) => {
      const [x, S] = b;
      let O = "text", P = "";
      b.length === 1 ? gt(x) ? (P = x.modifier || P, O = x.type || O) : Y(x) && (P = x || P) : b.length === 2 && (Y(x) && (P = x || P), Y(S) && (O = S || O));
      const D = u(g)(w), z = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        O === "vnode" && $t(D) && P ? D[0] : D
      );
      return P ? f(P)(z, O) : z;
    },
    message: u,
    type: y,
    interpolate: p,
    normalize: h,
    values: Jt({}, o, l)
  };
  return w;
}
let lr = null;
function lb(t) {
  lr = t;
}
function cb(t, e, n) {
  lr && lr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: t,
    version: e,
    meta: n
  });
}
const ub = /* @__PURE__ */ fb(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function fb(t) {
  return (e) => lr && lr.emit(t, e);
}
const hb = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
  __EXTEND_POINT__: 8
}, Mh = nt.__EXTEND_POINT__, Dn = ul(Mh), Ve = {
  INVALID_ARGUMENT: Mh,
  // 18
  INVALID_DATE_ARGUMENT: Dn(),
  // 19
  INVALID_ISO_DATE_ARGUMENT: Dn(),
  // 20
  NOT_SUPPORT_NON_STRING_MESSAGE: Dn(),
  // 21
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: Dn(),
  // 22
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Dn(),
  // 23
  NOT_SUPPORT_LOCALE_TYPE: Dn(),
  // 24
  __EXTEND_POINT__: Dn()
  // 25
};
function nn(t) {
  return Ri(t, null, void 0);
}
function hl(t, e) {
  return e.locale != null ? Wc(e.locale) : Wc(t.locale);
}
let Po;
function Wc(t) {
  if (Y(t))
    return t;
  if (Nt(t)) {
    if (t.resolvedOnce && Po != null)
      return Po;
    if (t.constructor.name === "Function") {
      const e = t();
      if (hy(e))
        throw nn(Ve.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Po = e;
    } else
      throw nn(Ve.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw nn(Ve.NOT_SUPPORT_LOCALE_TYPE);
}
function db(t, e, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...$t(e) ? e : gt(e) ? Object.keys(e) : Y(e) ? [e] : [n]
  ])];
}
function Rh(t, e, n) {
  const i = Y(n) ? n : Ps, r = t;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let s = r.__localeChainCache.get(i);
  if (!s) {
    s = [];
    let o = [n];
    for (; $t(o); )
      o = Hc(s, o, e);
    const a = $t(e) || !ht(e) ? e : e.default ? e.default : null;
    o = Y(a) ? [a] : a, $t(o) && Hc(s, o, !1), r.__localeChainCache.set(i, s);
  }
  return s;
}
function Hc(t, e, n) {
  let i = !0;
  for (let r = 0; r < e.length && Ot(i); r++) {
    const s = e[r];
    Y(s) && (i = pb(t, e[r], n));
  }
  return i;
}
function pb(t, e, n) {
  let i;
  const r = e.split("-");
  do {
    const s = r.join("-");
    i = mb(t, s, n), r.splice(-1, 1);
  } while (r.length && i === !0);
  return i;
}
function mb(t, e, n) {
  let i = !1;
  if (!t.includes(e) && (i = !0, e)) {
    i = e[e.length - 1] !== "!";
    const r = e.replace(/!/g, "");
    t.push(r), ($t(n) || ht(n)) && n[r] && (i = n[r]);
  }
  return i;
}
const gb = "9.10.1", lo = -1, Ps = "en-US", Vc = "", zc = (t) => `${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;
function yb() {
  return {
    upper: (t, e) => e === "text" && Y(t) ? t.toUpperCase() : e === "vnode" && gt(t) && "__v_isVNode" in t ? t.children.toUpperCase() : t,
    lower: (t, e) => e === "text" && Y(t) ? t.toLowerCase() : e === "vnode" && gt(t) && "__v_isVNode" in t ? t.children.toLowerCase() : t,
    capitalize: (t, e) => e === "text" && Y(t) ? zc(t) : e === "vnode" && gt(t) && "__v_isVNode" in t ? zc(t.children) : t
  };
}
let Dh;
function bb(t) {
  Dh = t;
}
let Fh;
function vb(t) {
  Fh = t;
}
let $h;
function _b(t) {
  $h = t;
}
let Bh = null;
const wb = /* @__NO_SIDE_EFFECTS__ */ (t) => {
  Bh = t;
}, xb = /* @__NO_SIDE_EFFECTS__ */ () => Bh;
let Uh = null;
const Gc = (t) => {
  Uh = t;
}, kb = () => Uh;
let jc = 0;
function Sb(t = {}) {
  const e = Nt(t.onWarn) ? t.onWarn : my, n = Y(t.version) ? t.version : gb, i = Y(t.locale) || Nt(t.locale) ? t.locale : Ps, r = Nt(i) ? Ps : i, s = $t(t.fallbackLocale) || ht(t.fallbackLocale) || Y(t.fallbackLocale) || t.fallbackLocale === !1 ? t.fallbackLocale : r, o = ht(t.messages) ? t.messages : { [r]: {} }, a = ht(t.datetimeFormats) ? t.datetimeFormats : { [r]: {} }, l = ht(t.numberFormats) ? t.numberFormats : { [r]: {} }, c = Jt({}, t.modifiers || {}, yb()), u = t.pluralRules || {}, f = Nt(t.missing) ? t.missing : null, h = Ot(t.missingWarn) || Cs(t.missingWarn) ? t.missingWarn : !0, p = Ot(t.fallbackWarn) || Cs(t.fallbackWarn) ? t.fallbackWarn : !0, y = !!t.fallbackFormat, k = !!t.unresolving, w = Nt(t.postTranslation) ? t.postTranslation : null, g = ht(t.processor) ? t.processor : null, b = Ot(t.warnHtmlMessage) ? t.warnHtmlMessage : !0, x = !!t.escapeParameter, S = Nt(t.messageCompiler) ? t.messageCompiler : Dh, O = Nt(t.messageResolver) ? t.messageResolver : Fh || Qy, P = Nt(t.localeFallbacker) ? t.localeFallbacker : $h || db, D = gt(t.fallbackContext) ? t.fallbackContext : void 0, z = t, F = gt(z.__datetimeFormatters) ? z.__datetimeFormatters : /* @__PURE__ */ new Map(), H = gt(z.__numberFormatters) ? z.__numberFormatters : /* @__PURE__ */ new Map(), $ = gt(z.__meta) ? z.__meta : {};
  jc++;
  const X = {
    version: n,
    cid: jc,
    locale: i,
    fallbackLocale: s,
    messages: o,
    modifiers: c,
    pluralRules: u,
    missing: f,
    missingWarn: h,
    fallbackWarn: p,
    fallbackFormat: y,
    unresolving: k,
    postTranslation: w,
    processor: g,
    warnHtmlMessage: b,
    escapeParameter: x,
    messageCompiler: S,
    messageResolver: O,
    localeFallbacker: P,
    fallbackContext: D,
    onWarn: e,
    __meta: $
  };
  return X.datetimeFormats = a, X.numberFormats = l, X.__datetimeFormatters = F, X.__numberFormatters = H, __INTLIFY_PROD_DEVTOOLS__ && cb(X, n, $), X;
}
function dl(t, e, n, i, r) {
  const { missing: s, onWarn: o } = t;
  if (s !== null) {
    const a = s(t, n, e, r);
    return Y(a) ? a : e;
  } else
    return e;
}
function Wi(t, e, n) {
  const i = t;
  i.__localeChainCache = /* @__PURE__ */ new Map(), t.localeFallbacker(t, n, e);
}
function No(t) {
  return (n) => Eb(n, t);
}
function Eb(t, e) {
  const n = e.b || e.body;
  if ((n.t || n.type) === 1) {
    const i = n, r = i.c || i.cases;
    return t.plural(r.reduce((s, o) => [
      ...s,
      Yc(t, o)
    ], []));
  } else
    return Yc(t, n);
}
function Yc(t, e) {
  const n = e.s || e.static;
  if (n)
    return t.type === "text" ? n : t.normalize([n]);
  {
    const i = (e.i || e.items).reduce((r, s) => [...r, ia(t, s)], []);
    return t.normalize(i);
  }
}
function ia(t, e) {
  const n = e.t || e.type;
  switch (n) {
    case 3:
      const i = e;
      return i.v || i.value;
    case 9:
      const r = e;
      return r.v || r.value;
    case 4:
      const s = e;
      return t.interpolate(t.named(s.k || s.key));
    case 5:
      const o = e;
      return t.interpolate(t.list(o.i != null ? o.i : o.index));
    case 6:
      const a = e, l = a.m || a.modifier;
      return t.linked(ia(t, a.k || a.key), l ? ia(t, l) : void 0, t.type);
    case 7:
      const c = e;
      return c.v || c.value;
    case 8:
      const u = e;
      return u.v || u.value;
    default:
      throw new Error(`unhandled node type on format message part: ${n}`);
  }
}
const Tb = (t) => t;
let Fr = /* @__PURE__ */ Object.create(null);
const Ei = (t) => gt(t) && (t.t === 0 || t.type === 0) && ("b" in t || "body" in t);
function Ab(t, e = {}) {
  let n = !1;
  const i = e.onError || wy;
  return e.onError = (r) => {
    n = !0, i(r);
  }, { ...Vy(t, e), detectError: n };
}
function Cb(t, e) {
  if (Y(t)) {
    Ot(e.warnHtmlMessage) && e.warnHtmlMessage;
    const i = (e.onCacheKey || Tb)(t), r = Fr[i];
    if (r)
      return r;
    const { ast: s, detectError: o } = Ab(t, {
      ...e,
      location: !1,
      jit: !0
    }), a = No(s);
    return o ? a : Fr[i] = a;
  } else {
    const n = t.cacheKey;
    if (n) {
      const i = Fr[n];
      return i || (Fr[n] = No(t));
    } else
      return No(t);
  }
}
const Kc = () => "", xe = (t) => Nt(t);
function Xc(t, ...e) {
  const { fallbackFormat: n, postTranslation: i, unresolving: r, messageCompiler: s, fallbackLocale: o, messages: a } = t, [l, c] = ra(...e), u = Ot(c.missingWarn) ? c.missingWarn : t.missingWarn, f = Ot(c.fallbackWarn) ? c.fallbackWarn : t.fallbackWarn, h = Ot(c.escapeParameter) ? c.escapeParameter : t.escapeParameter, p = !!c.resolvedMessage, y = Y(c.default) || Ot(c.default) ? Ot(c.default) ? s ? l : () => l : c.default : n ? s ? l : () => l : "", k = n || y !== "", w = hl(t, c);
  h && Ob(c);
  let [g, b, x] = p ? [
    l,
    w,
    a[w] || {}
  ] : qh(t, l, w, o, f, u), S = g, O = l;
  if (!p && !(Y(S) || Ei(S) || xe(S)) && k && (S = y, O = S), !p && (!(Y(S) || Ei(S) || xe(S)) || !Y(b)))
    return r ? lo : l;
  let P = !1;
  const D = () => {
    P = !0;
  }, z = xe(S) ? S : Wh(t, l, b, S, O, D);
  if (P)
    return S;
  const F = Ib(t, b, x, c), H = ab(F), $ = Pb(t, z, H), X = i ? i($, l) : $;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const q = {
      timestamp: Date.now(),
      key: Y(l) ? l : xe(S) ? S.key : "",
      locale: b || (xe(S) ? S.locale : ""),
      format: Y(S) ? S : xe(S) ? S.source : "",
      message: X
    };
    q.meta = Jt({}, t.__meta, /* @__PURE__ */ xb() || {}), ub(q);
  }
  return X;
}
function Ob(t) {
  $t(t.list) ? t.list = t.list.map((e) => Y(e) ? Rc(e) : e) : gt(t.named) && Object.keys(t.named).forEach((e) => {
    Y(t.named[e]) && (t.named[e] = Rc(t.named[e]));
  });
}
function qh(t, e, n, i, r, s) {
  const { messages: o, onWarn: a, messageResolver: l, localeFallbacker: c } = t, u = c(t, i, n);
  let f = {}, h, p = null;
  const y = "translate";
  for (let k = 0; k < u.length && (h = u[k], f = o[h] || {}, (p = l(f, e)) === null && (p = f[e]), !(Y(p) || Ei(p) || xe(p))); k++) {
    const w = dl(
      t,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      e,
      h,
      s,
      y
    );
    w !== e && (p = w);
  }
  return [p, h, f];
}
function Wh(t, e, n, i, r, s) {
  const { messageCompiler: o, warnHtmlMessage: a } = t;
  if (xe(i)) {
    const c = i;
    return c.locale = c.locale || n, c.key = c.key || e, c;
  }
  if (o == null) {
    const c = () => i;
    return c.locale = n, c.key = e, c;
  }
  const l = o(i, Nb(t, n, r, i, a, s));
  return l.locale = n, l.key = e, l.source = i, l;
}
function Pb(t, e, n) {
  return e(n);
}
function ra(...t) {
  const [e, n, i] = t, r = {};
  if (!Y(e) && !Wt(e) && !xe(e) && !Ei(e))
    throw nn(Ve.INVALID_ARGUMENT);
  const s = Wt(e) ? String(e) : (xe(e), e);
  return Wt(n) ? r.plural = n : Y(n) ? r.default = n : ht(n) && !ao(n) ? r.named = n : $t(n) && (r.list = n), Wt(i) ? r.plural = i : Y(i) ? r.default = i : ht(i) && Jt(r, i), [s, r];
}
function Nb(t, e, n, i, r, s) {
  return {
    locale: e,
    key: n,
    warnHtmlMessage: r,
    onError: (o) => {
      throw s && s(o), o;
    },
    onCacheKey: (o) => ly(e, n, o)
  };
}
function Ib(t, e, n, i) {
  const { modifiers: r, pluralRules: s, messageResolver: o, fallbackLocale: a, fallbackWarn: l, missingWarn: c, fallbackContext: u } = t, h = {
    locale: e,
    modifiers: r,
    pluralRules: s,
    messages: (p) => {
      let y = o(n, p);
      if (y == null && u) {
        const [, , k] = qh(u, p, e, a, l, c);
        y = o(k, p);
      }
      if (Y(y) || Ei(y)) {
        let k = !1;
        const g = Wh(t, p, e, y, p, () => {
          k = !0;
        });
        return k ? Kc : g;
      } else
        return xe(y) ? y : Kc;
    }
  };
  return t.processor && (h.processor = t.processor), i.list && (h.list = i.list), i.named && (h.named = i.named), Wt(i.plural) && (h.pluralIndex = i.plural), h;
}
function Jc(t, ...e) {
  const { datetimeFormats: n, unresolving: i, fallbackLocale: r, onWarn: s, localeFallbacker: o } = t, { __datetimeFormatters: a } = t, [l, c, u, f] = sa(...e), h = Ot(u.missingWarn) ? u.missingWarn : t.missingWarn;
  Ot(u.fallbackWarn) ? u.fallbackWarn : t.fallbackWarn;
  const p = !!u.part, y = hl(t, u), k = o(
    t,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    y
  );
  if (!Y(l) || l === "")
    return new Intl.DateTimeFormat(y, f).format(c);
  let w = {}, g, b = null;
  const x = "datetime format";
  for (let P = 0; P < k.length && (g = k[P], w = n[g] || {}, b = w[l], !ht(b)); P++)
    dl(t, l, g, h, x);
  if (!ht(b) || !Y(g))
    return i ? lo : l;
  let S = `${g}__${l}`;
  ao(f) || (S = `${S}__${JSON.stringify(f)}`);
  let O = a.get(S);
  return O || (O = new Intl.DateTimeFormat(g, Jt({}, b, f)), a.set(S, O)), p ? O.formatToParts(c) : O.format(c);
}
const Hh = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function sa(...t) {
  const [e, n, i, r] = t, s = {};
  let o = {}, a;
  if (Y(e)) {
    const l = e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw nn(Ve.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    a = new Date(c);
    try {
      a.toISOString();
    } catch {
      throw nn(Ve.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (uy(e)) {
    if (isNaN(e.getTime()))
      throw nn(Ve.INVALID_DATE_ARGUMENT);
    a = e;
  } else if (Wt(e))
    a = e;
  else
    throw nn(Ve.INVALID_ARGUMENT);
  return Y(n) ? s.key = n : ht(n) && Object.keys(n).forEach((l) => {
    Hh.includes(l) ? o[l] = n[l] : s[l] = n[l];
  }), Y(i) ? s.locale = i : ht(i) && (o = i), ht(r) && (o = r), [s.key || "", a, s, o];
}
function Qc(t, e, n) {
  const i = t;
  for (const r in n) {
    const s = `${e}__${r}`;
    i.__datetimeFormatters.has(s) && i.__datetimeFormatters.delete(s);
  }
}
function Zc(t, ...e) {
  const { numberFormats: n, unresolving: i, fallbackLocale: r, onWarn: s, localeFallbacker: o } = t, { __numberFormatters: a } = t, [l, c, u, f] = oa(...e), h = Ot(u.missingWarn) ? u.missingWarn : t.missingWarn;
  Ot(u.fallbackWarn) ? u.fallbackWarn : t.fallbackWarn;
  const p = !!u.part, y = hl(t, u), k = o(
    t,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    y
  );
  if (!Y(l) || l === "")
    return new Intl.NumberFormat(y, f).format(c);
  let w = {}, g, b = null;
  const x = "number format";
  for (let P = 0; P < k.length && (g = k[P], w = n[g] || {}, b = w[l], !ht(b)); P++)
    dl(t, l, g, h, x);
  if (!ht(b) || !Y(g))
    return i ? lo : l;
  let S = `${g}__${l}`;
  ao(f) || (S = `${S}__${JSON.stringify(f)}`);
  let O = a.get(S);
  return O || (O = new Intl.NumberFormat(g, Jt({}, b, f)), a.set(S, O)), p ? O.formatToParts(c) : O.format(c);
}
const Vh = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function oa(...t) {
  const [e, n, i, r] = t, s = {};
  let o = {};
  if (!Wt(e))
    throw nn(Ve.INVALID_ARGUMENT);
  const a = e;
  return Y(n) ? s.key = n : ht(n) && Object.keys(n).forEach((l) => {
    Vh.includes(l) ? o[l] = n[l] : s[l] = n[l];
  }), Y(i) ? s.locale = i : ht(i) && (o = i), ht(r) && (o = r), [s.key || "", a, s, o];
}
function tu(t, e, n) {
  const i = t;
  for (const r in n) {
    const s = `${e}__${r}`;
    i.__numberFormatters.has(s) && i.__numberFormatters.delete(s);
  }
}
zy();
/*!
 * vue-i18n v9.10.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
const Lb = "9.10.1";
function Mb() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (cl().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const zh = hb.__EXTEND_POINT__, Qe = ul(zh);
Qe(), Qe(), Qe(), Qe(), Qe(), Qe(), Qe(), Qe(), Qe();
const Gh = Ve.__EXTEND_POINT__, ie = ul(Gh), Ae = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Gh,
  // 26
  // legacy module errors
  INVALID_ARGUMENT: ie(),
  // 27
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: ie(),
  // 28
  NOT_INSTALLED: ie(),
  // 29
  NOT_AVAILABLE_IN_LEGACY_MODE: ie(),
  // 30
  // directive module errors
  REQUIRED_VALUE: ie(),
  // 31
  INVALID_VALUE: ie(),
  // 32
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: ie(),
  // 33
  NOT_INSTALLED_WITH_PROVIDE: ie(),
  // 34
  // unexpected error
  UNEXPECTED_ERROR: ie(),
  // 35
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: ie(),
  // 36
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: ie(),
  // 37
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: ie(),
  // 38
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: ie(),
  // 39
  // for enhancement
  __EXTEND_POINT__: ie()
  // 40
};
function Re(t, ...e) {
  return Ri(t, null, void 0);
}
const aa = /* @__PURE__ */ Pn("__translateVNode"), la = /* @__PURE__ */ Pn("__datetimeParts"), ca = /* @__PURE__ */ Pn("__numberParts"), Rb = Pn("__setPluralRules"), Db = /* @__PURE__ */ Pn("__injectWithOption"), ua = /* @__PURE__ */ Pn("__dispose");
function cr(t) {
  if (!gt(t))
    return t;
  for (const e in t)
    if (Os(t, e))
      if (!e.includes("."))
        gt(t[e]) && cr(t[e]);
      else {
        const n = e.split("."), i = n.length - 1;
        let r = t, s = !1;
        for (let o = 0; o < i; o++) {
          if (n[o] in r || (r[n[o]] = {}), !gt(r[n[o]])) {
            s = !0;
            break;
          }
          r = r[n[o]];
        }
        s || (r[n[i]] = t[e], delete t[e]), gt(r[n[i]]) && cr(r[n[i]]);
      }
  return t;
}
function jh(t, e) {
  const { messages: n, __i18n: i, messageResolver: r, flatJson: s } = e, o = ht(n) ? n : $t(i) ? {} : { [t]: {} };
  if ($t(i) && i.forEach((a) => {
    if ("locale" in a && "resource" in a) {
      const { locale: l, resource: c } = a;
      l ? (o[l] = o[l] || {}, us(c, o[l])) : us(c, o);
    } else
      Y(a) && us(JSON.parse(a), o);
  }), r == null && s)
    for (const a in o)
      Os(o, a) && cr(o[a]);
  return o;
}
function Yh(t) {
  return t.type;
}
function Fb(t, e, n) {
  let i = gt(e.messages) ? e.messages : {};
  "__i18nGlobal" in n && (i = jh(t.locale.value, {
    messages: i,
    __i18n: n.__i18nGlobal
  }));
  const r = Object.keys(i);
  r.length && r.forEach((s) => {
    t.mergeLocaleMessage(s, i[s]);
  });
  {
    if (gt(e.datetimeFormats)) {
      const s = Object.keys(e.datetimeFormats);
      s.length && s.forEach((o) => {
        t.mergeDateTimeFormat(o, e.datetimeFormats[o]);
      });
    }
    if (gt(e.numberFormats)) {
      const s = Object.keys(e.numberFormats);
      s.length && s.forEach((o) => {
        t.mergeNumberFormat(o, e.numberFormats[o]);
      });
    }
  }
}
function eu(t) {
  return mt(_r, null, t, 0);
}
const nu = "__INTLIFY_META__", iu = () => [], $b = () => !1;
let ru = 0;
function su(t) {
  return (e, n, i, r) => t(n, i, so() || void 0, r);
}
const Bb = /* @__NO_SIDE_EFFECTS__ */ () => {
  const t = so();
  let e = null;
  return t && (e = Yh(t)[nu]) ? { [nu]: e } : null;
};
function Kh(t = {}, e) {
  const { __root: n, __injectWithOption: i } = t, r = n === void 0, s = t.flatJson, o = As ? yi : ui, a = !!t.translateExistCompatible;
  let l = Ot(t.inheritLocale) ? t.inheritLocale : !0;
  const c = o(
    // prettier-ignore
    n && l ? n.locale.value : Y(t.locale) ? t.locale : Ps
  ), u = o(
    // prettier-ignore
    n && l ? n.fallbackLocale.value : Y(t.fallbackLocale) || $t(t.fallbackLocale) || ht(t.fallbackLocale) || t.fallbackLocale === !1 ? t.fallbackLocale : c.value
  ), f = o(jh(c.value, t)), h = o(ht(t.datetimeFormats) ? t.datetimeFormats : { [c.value]: {} }), p = o(ht(t.numberFormats) ? t.numberFormats : { [c.value]: {} });
  let y = n ? n.missingWarn : Ot(t.missingWarn) || Cs(t.missingWarn) ? t.missingWarn : !0, k = n ? n.fallbackWarn : Ot(t.fallbackWarn) || Cs(t.fallbackWarn) ? t.fallbackWarn : !0, w = n ? n.fallbackRoot : Ot(t.fallbackRoot) ? t.fallbackRoot : !0, g = !!t.fallbackFormat, b = Nt(t.missing) ? t.missing : null, x = Nt(t.missing) ? su(t.missing) : null, S = Nt(t.postTranslation) ? t.postTranslation : null, O = n ? n.warnHtmlMessage : Ot(t.warnHtmlMessage) ? t.warnHtmlMessage : !0, P = !!t.escapeParameter;
  const D = n ? n.modifiers : ht(t.modifiers) ? t.modifiers : {};
  let z = t.pluralRules || n && n.pluralRules, F;
  F = (() => {
    r && Gc(null);
    const T = {
      version: Lb,
      locale: c.value,
      fallbackLocale: u.value,
      messages: f.value,
      modifiers: D,
      pluralRules: z,
      missing: x === null ? void 0 : x,
      missingWarn: y,
      fallbackWarn: k,
      fallbackFormat: g,
      unresolving: !0,
      postTranslation: S === null ? void 0 : S,
      warnHtmlMessage: O,
      escapeParameter: P,
      messageResolver: t.messageResolver,
      messageCompiler: t.messageCompiler,
      __meta: { framework: "vue" }
    };
    T.datetimeFormats = h.value, T.numberFormats = p.value, T.__datetimeFormatters = ht(F) ? F.__datetimeFormatters : void 0, T.__numberFormatters = ht(F) ? F.__numberFormatters : void 0;
    const N = Sb(T);
    return r && Gc(N), N;
  })(), Wi(F, c.value, u.value);
  function $() {
    return [
      c.value,
      u.value,
      f.value,
      h.value,
      p.value
    ];
  }
  const X = we({
    get: () => c.value,
    set: (T) => {
      c.value = T, F.locale = c.value;
    }
  }), q = we({
    get: () => u.value,
    set: (T) => {
      u.value = T, F.fallbackLocale = u.value, Wi(F, c.value, T);
    }
  }), rt = we(() => f.value), Ht = /* @__PURE__ */ we(() => h.value), yt = /* @__PURE__ */ we(() => p.value);
  function lt() {
    return Nt(S) ? S : null;
  }
  function at(T) {
    S = T, F.postTranslation = T;
  }
  function _t() {
    return b;
  }
  function ue(T) {
    T !== null && (x = su(T)), b = T, F.missing = x;
  }
  const Pt = (T, N, J, it, wt, Yt) => {
    $();
    let he;
    try {
      __INTLIFY_PROD_DEVTOOLS__, r || (F.fallbackContext = n ? kb() : void 0), he = T(F);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, r || (F.fallbackContext = void 0);
    }
    if (J !== "translate exists" && // for not `te` (e.g `t`)
    Wt(he) && he === lo || J === "translate exists" && !he) {
      const [Cr, ii] = N();
      return n && w ? it(n) : wt(Cr);
    } else {
      if (Yt(he))
        return he;
      throw Re(Ae.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Mt(...T) {
    return Pt((N) => Reflect.apply(Xc, null, [N, ...T]), () => ra(...T), "translate", (N) => Reflect.apply(N.t, N, [...T]), (N) => N, (N) => Y(N));
  }
  function De(...T) {
    const [N, J, it] = T;
    if (it && !gt(it))
      throw Re(Ae.INVALID_ARGUMENT);
    return Mt(N, J, Jt({ resolvedMessage: !0 }, it || {}));
  }
  function Fe(...T) {
    return Pt((N) => Reflect.apply(Jc, null, [N, ...T]), () => sa(...T), "datetime format", (N) => Reflect.apply(N.d, N, [...T]), () => Vc, (N) => Y(N));
  }
  function Qt(...T) {
    return Pt((N) => Reflect.apply(Zc, null, [N, ...T]), () => oa(...T), "number format", (N) => Reflect.apply(N.n, N, [...T]), () => Vc, (N) => Y(N));
  }
  function Vt(T) {
    return T.map((N) => Y(N) || Wt(N) || Ot(N) ? eu(String(N)) : N);
  }
  const fe = {
    normalize: Vt,
    interpolate: (T) => T,
    type: "vnode"
  };
  function be(...T) {
    return Pt(
      (N) => {
        let J;
        const it = N;
        try {
          it.processor = fe, J = Reflect.apply(Xc, null, [it, ...T]);
        } finally {
          it.processor = null;
        }
        return J;
      },
      () => ra(...T),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (N) => N[aa](...T),
      (N) => [eu(N)],
      (N) => $t(N)
    );
  }
  function jt(...T) {
    return Pt(
      (N) => Reflect.apply(Zc, null, [N, ...T]),
      () => oa(...T),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (N) => N[ca](...T),
      iu,
      (N) => Y(N) || $t(N)
    );
  }
  function ve(...T) {
    return Pt(
      (N) => Reflect.apply(Jc, null, [N, ...T]),
      () => sa(...T),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (N) => N[la](...T),
      iu,
      (N) => Y(N) || $t(N)
    );
  }
  function Ln(T) {
    z = T, F.pluralRules = z;
  }
  function d(T, N) {
    return Pt(() => {
      if (!T)
        return !1;
      const J = Y(N) ? N : c.value, it = E(J), wt = F.messageResolver(it, T);
      return a ? wt != null : Ei(wt) || xe(wt) || Y(wt);
    }, () => [T], "translate exists", (J) => Reflect.apply(J.te, J, [T, N]), $b, (J) => Ot(J));
  }
  function m(T) {
    let N = null;
    const J = Rh(F, u.value, c.value);
    for (let it = 0; it < J.length; it++) {
      const wt = f.value[J[it]] || {}, Yt = F.messageResolver(wt, T);
      if (Yt != null) {
        N = Yt;
        break;
      }
    }
    return N;
  }
  function _(T) {
    const N = m(T);
    return N ?? (n ? n.tm(T) || {} : {});
  }
  function E(T) {
    return f.value[T] || {};
  }
  function C(T, N) {
    if (s) {
      const J = { [T]: N };
      for (const it in J)
        Os(J, it) && cr(J[it]);
      N = J[T];
    }
    f.value[T] = N, F.messages = f.value;
  }
  function I(T, N) {
    f.value[T] = f.value[T] || {};
    const J = { [T]: N };
    if (s)
      for (const it in J)
        Os(J, it) && cr(J[it]);
    N = J[T], us(N, f.value[T]), F.messages = f.value;
  }
  function B(T) {
    return h.value[T] || {};
  }
  function M(T, N) {
    h.value[T] = N, F.datetimeFormats = h.value, Qc(F, T, N);
  }
  function U(T, N) {
    h.value[T] = Jt(h.value[T] || {}, N), F.datetimeFormats = h.value, Qc(F, T, N);
  }
  function L(T) {
    return p.value[T] || {};
  }
  function V(T, N) {
    p.value[T] = N, F.numberFormats = p.value, tu(F, T, N);
  }
  function Q(T, N) {
    p.value[T] = Jt(p.value[T] || {}, N), F.numberFormats = p.value, tu(F, T, N);
  }
  ru++, n && As && (sn(n.locale, (T) => {
    l && (c.value = T, F.locale = T, Wi(F, c.value, u.value));
  }), sn(n.fallbackLocale, (T) => {
    l && (u.value = T, F.fallbackLocale = T, Wi(F, c.value, u.value));
  }));
  const W = {
    id: ru,
    locale: X,
    fallbackLocale: q,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(T) {
      l = T, T && n && (c.value = n.locale.value, u.value = n.fallbackLocale.value, Wi(F, c.value, u.value));
    },
    get availableLocales() {
      return Object.keys(f.value).sort();
    },
    messages: rt,
    get modifiers() {
      return D;
    },
    get pluralRules() {
      return z || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return y;
    },
    set missingWarn(T) {
      y = T, F.missingWarn = y;
    },
    get fallbackWarn() {
      return k;
    },
    set fallbackWarn(T) {
      k = T, F.fallbackWarn = k;
    },
    get fallbackRoot() {
      return w;
    },
    set fallbackRoot(T) {
      w = T;
    },
    get fallbackFormat() {
      return g;
    },
    set fallbackFormat(T) {
      g = T, F.fallbackFormat = g;
    },
    get warnHtmlMessage() {
      return O;
    },
    set warnHtmlMessage(T) {
      O = T, F.warnHtmlMessage = T;
    },
    get escapeParameter() {
      return P;
    },
    set escapeParameter(T) {
      P = T, F.escapeParameter = T;
    },
    t: Mt,
    getLocaleMessage: E,
    setLocaleMessage: C,
    mergeLocaleMessage: I,
    getPostTranslationHandler: lt,
    setPostTranslationHandler: at,
    getMissingHandler: _t,
    setMissingHandler: ue,
    [Rb]: Ln
  };
  return W.datetimeFormats = Ht, W.numberFormats = yt, W.rt = De, W.te = d, W.tm = _, W.d = Fe, W.n = Qt, W.getDateTimeFormat = B, W.setDateTimeFormat = M, W.mergeDateTimeFormat = U, W.getNumberFormat = L, W.setNumberFormat = V, W.mergeNumberFormat = Q, W[Db] = i, W[aa] = be, W[la] = ve, W[ca] = jt, W;
}
const pl = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (t) => t === "parent" || t === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function Ub({ slots: t }, e) {
  return e.length === 1 && e[0] === "default" ? (t.default ? t.default() : []).reduce((i, r) => [
    ...i,
    // prettier-ignore
    ...r.type === Ft ? r.children : [r]
  ], []) : e.reduce((n, i) => {
    const r = t[i];
    return r && (n[i] = r()), n;
  }, {});
}
function Xh(t) {
  return Ft;
}
const qb = /* @__PURE__ */ Mi({
  /* eslint-disable */
  name: "i18n-t",
  props: Jt({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (t) => Wt(t) || !isNaN(t)
    }
  }, pl),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(t, e) {
    const { slots: n, attrs: i } = e, r = t.i18n || co({
      useScope: t.scope,
      __useComponent: !0
    });
    return () => {
      const s = Object.keys(n).filter((f) => f !== "_"), o = {};
      t.locale && (o.locale = t.locale), t.plural !== void 0 && (o.plural = Y(t.plural) ? +t.plural : t.plural);
      const a = Ub(e, s), l = r[aa](t.keypath, a, o), c = Jt({}, i), u = Y(t.tag) || gt(t.tag) ? t.tag : Xh();
      return ll(u, c, l);
    };
  }
}), ou = qb;
function Wb(t) {
  return $t(t) && !Y(t[0]);
}
function Jh(t, e, n, i) {
  const { slots: r, attrs: s } = e;
  return () => {
    const o = { part: !0 };
    let a = {};
    t.locale && (o.locale = t.locale), Y(t.format) ? o.key = t.format : gt(t.format) && (Y(t.format.key) && (o.key = t.format.key), a = Object.keys(t.format).reduce((h, p) => n.includes(p) ? Jt({}, h, { [p]: t.format[p] }) : h, {}));
    const l = i(t.value, o, a);
    let c = [o.key];
    $t(l) ? c = l.map((h, p) => {
      const y = r[h.type], k = y ? y({ [h.type]: h.value, index: p, parts: l }) : [h.value];
      return Wb(k) && (k[0].key = `${h.type}-${p}`), k;
    }) : Y(l) && (c = [l]);
    const u = Jt({}, s), f = Y(t.tag) || gt(t.tag) ? t.tag : Xh();
    return ll(f, u, c);
  };
}
const Hb = /* @__PURE__ */ Mi({
  /* eslint-disable */
  name: "i18n-n",
  props: Jt({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, pl),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(t, e) {
    const n = t.i18n || co({
      useScope: "parent",
      __useComponent: !0
    });
    return Jh(t, e, Vh, (...i) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[ca](...i)
    ));
  }
}), au = Hb, Vb = /* @__PURE__ */ Mi({
  /* eslint-disable */
  name: "i18n-d",
  props: Jt({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, pl),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(t, e) {
    const n = t.i18n || co({
      useScope: "parent",
      __useComponent: !0
    });
    return Jh(t, e, Hh, (...i) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[la](...i)
    ));
  }
}), lu = Vb;
function zb(t, e) {
  const n = t;
  if (t.mode === "composition")
    return n.__getInstance(e) || t.global;
  {
    const i = n.__getInstance(e);
    return i != null ? i.__composer : t.global.__composer;
  }
}
function Gb(t) {
  const e = (o) => {
    const { instance: a, modifiers: l, value: c } = o;
    if (!a || !a.$)
      throw Re(Ae.UNEXPECTED_ERROR);
    const u = zb(t, a.$), f = cu(c);
    return [
      Reflect.apply(u.t, u, [...uu(f)]),
      u
    ];
  };
  return {
    created: (o, a) => {
      const [l, c] = e(a);
      As && t.global === c && (o.__i18nWatcher = sn(c.locale, () => {
        a.instance && a.instance.$forceUpdate();
      })), o.__composer = c, o.textContent = l;
    },
    unmounted: (o) => {
      As && o.__i18nWatcher && (o.__i18nWatcher(), o.__i18nWatcher = void 0, delete o.__i18nWatcher), o.__composer && (o.__composer = void 0, delete o.__composer);
    },
    beforeUpdate: (o, { value: a }) => {
      if (o.__composer) {
        const l = o.__composer, c = cu(a);
        o.textContent = Reflect.apply(l.t, l, [
          ...uu(c)
        ]);
      }
    },
    getSSRProps: (o) => {
      const [a] = e(o);
      return { textContent: a };
    }
  };
}
function cu(t) {
  if (Y(t))
    return { path: t };
  if (ht(t)) {
    if (!("path" in t))
      throw Re(Ae.REQUIRED_VALUE, "path");
    return t;
  } else
    throw Re(Ae.INVALID_VALUE);
}
function uu(t) {
  const { path: e, locale: n, args: i, choice: r, plural: s } = t, o = {}, a = i || {};
  return Y(n) && (o.locale = n), Wt(r) && (o.plural = r), Wt(s) && (o.plural = s), [e, a, o];
}
function jb(t, e, ...n) {
  const i = ht(n[0]) ? n[0] : {}, r = !!i.useI18nComponentName;
  (Ot(i.globalInstall) ? i.globalInstall : !0) && ([r ? "i18n" : ou.name, "I18nT"].forEach((o) => t.component(o, ou)), [au.name, "I18nN"].forEach((o) => t.component(o, au)), [lu.name, "I18nD"].forEach((o) => t.component(o, lu))), t.directive("t", Gb(e));
}
const Yb = /* @__PURE__ */ Pn("global-vue-i18n");
function Kb(t = {}, e) {
  const n = Ot(t.globalInjection) ? t.globalInjection : !0, i = !0, r = /* @__PURE__ */ new Map(), [s, o] = Xb(t), a = /* @__PURE__ */ Pn("");
  function l(f) {
    return r.get(f) || null;
  }
  function c(f, h) {
    r.set(f, h);
  }
  function u(f) {
    r.delete(f);
  }
  {
    const f = {
      // mode
      get mode() {
        return "composition";
      },
      // allowComposition
      get allowComposition() {
        return i;
      },
      // install plugin
      async install(h, ...p) {
        if (h.__VUE_I18N_SYMBOL__ = a, h.provide(h.__VUE_I18N_SYMBOL__, f), ht(p[0])) {
          const w = p[0];
          f.__composerExtend = w.__composerExtend, f.__vueI18nExtend = w.__vueI18nExtend;
        }
        let y = null;
        n && (y = r0(h, f.global)), jb(h, f, ...p);
        const k = h.unmount;
        h.unmount = () => {
          y && y(), f.dispose(), k();
        };
      },
      // global accessor
      get global() {
        return o;
      },
      dispose() {
        s.stop();
      },
      // @internal
      __instances: r,
      // @internal
      __getInstance: l,
      // @internal
      __setInstance: c,
      // @internal
      __deleteInstance: u
    };
    return f;
  }
}
function co(t = {}) {
  const e = so();
  if (e == null)
    throw Re(Ae.MUST_BE_CALL_SETUP_TOP);
  if (!e.isCE && e.appContext.app != null && !e.appContext.app.__VUE_I18N_SYMBOL__)
    throw Re(Ae.NOT_INSTALLED);
  const n = Jb(e), i = Zb(n), r = Yh(e), s = Qb(t, r);
  if (s === "global")
    return Fb(i, t, r), i;
  if (s === "parent") {
    let l = t0(n, e, t.__useComponent);
    return l == null && (l = i), l;
  }
  const o = n;
  let a = o.__getInstance(e);
  if (a == null) {
    const l = Jt({}, t);
    "__i18n" in r && (l.__i18n = r.__i18n), i && (l.__root = i), a = Kh(l), o.__composerExtend && (a[ua] = o.__composerExtend(a)), n0(o, e, a), o.__setInstance(e, a);
  }
  return a;
}
function Xb(t, e, n) {
  const i = Jp();
  {
    const r = i.run(() => Kh(t));
    if (r == null)
      throw Re(Ae.UNEXPECTED_ERROR);
    return [i, r];
  }
}
function Jb(t) {
  {
    const e = Qi(t.isCE ? Yb : t.appContext.app.__VUE_I18N_SYMBOL__);
    if (!e)
      throw Re(t.isCE ? Ae.NOT_INSTALLED_WITH_PROVIDE : Ae.UNEXPECTED_ERROR);
    return e;
  }
}
function Qb(t, e) {
  return ao(t) ? "__i18n" in e ? "local" : "global" : t.useScope ? t.useScope : "local";
}
function Zb(t) {
  return t.mode === "composition" ? t.global : t.global.__composer;
}
function t0(t, e, n = !1) {
  let i = null;
  const r = e.root;
  let s = e0(e, n);
  for (; s != null; ) {
    const o = t;
    if (t.mode === "composition" && (i = o.__getInstance(s)), i != null || r === s)
      break;
    s = s.parent;
  }
  return i;
}
function e0(t, e = !1) {
  return t == null ? null : e && t.vnode.ctx || t.parent;
}
function n0(t, e, n) {
  il(() => {
  }, e), rl(() => {
    const i = n;
    t.__deleteInstance(e);
    const r = i[ua];
    r && (r(), delete i[ua]);
  }, e);
}
const i0 = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], fu = ["t", "rt", "d", "n", "tm", "te"];
function r0(t, e) {
  const n = /* @__PURE__ */ Object.create(null);
  return i0.forEach((r) => {
    const s = Object.getOwnPropertyDescriptor(e, r);
    if (!s)
      throw Re(Ae.UNEXPECTED_ERROR);
    const o = ne(s.value) ? {
      get() {
        return s.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(a) {
        s.value.value = a;
      }
    } : {
      get() {
        return s.get && s.get();
      }
    };
    Object.defineProperty(n, r, o);
  }), t.config.globalProperties.$i18n = n, fu.forEach((r) => {
    const s = Object.getOwnPropertyDescriptor(e, r);
    if (!s || !s.value)
      throw Re(Ae.UNEXPECTED_ERROR);
    Object.defineProperty(t.config.globalProperties, `$${r}`, s);
  }), () => {
    delete t.config.globalProperties.$i18n, fu.forEach((r) => {
      delete t.config.globalProperties[`$${r}`];
    });
  };
}
Mb();
bb(Cb);
vb(Zy);
_b(Rh);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const t = cl();
  t.__INTLIFY__ = !0, lb(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const s0 = {
  length: "Length",
  l: "L",
  width: "Width",
  w: "W",
  thickness: "Thickness",
  t: "T",
  name: "Name",
  quantity: "Quantity",
  q: "Q",
  machining: "Machining",
  orientation: "Orientation",
  "add part": "Add part",
  "remove part": "Remove part",
  calculate: "Calculate",
  "full screen": "Full screen",
  b: "B",
  banding: "Banding",
  "delete banding": "Delete banding",
  delete: "Delete",
  clear: "Clear",
  l1: "L1",
  l2: "L2",
  w1: "W1",
  w2: "W2",
  "Powered by SmartCut": "Powered by SmartCut"
}, o0 = {
  length: "Llarg",
  l: "L",
  width: "Ample",
  w: "A",
  thickness: "Gruix",
  t: "G",
  name: "Nom",
  quantity: "Quantitat",
  q: "Q",
  machining: "Mecanitzat",
  orientation: "Gir",
  "add part": "Afegeix",
  "remove part": "Elimina",
  calculate: "Calcula",
  "full screen": "Pantalla completa",
  b: "Cantell",
  banding: "Banding",
  "delete banding": "Elimina cantell",
  delete: "Elimina",
  clear: "Neteja",
  l1: "L1",
  l2: "L2",
  w1: "A1",
  w2: "A1",
  "Powered by SmartCut": "Desenvolupat per SmartCut"
}, a0 = {
  length: "Largo",
  l: "L",
  width: "Ancho",
  w: "A",
  thickness: "Grueso",
  t: "G",
  name: "Nombre",
  quantity: "Cantidad",
  q: "C",
  machining: "Mecanizado",
  orientation: "Giro",
  "add part": "Añade",
  "remove part": "Elimina",
  calculate: "Calcula",
  "full screen": "Pantalla completa",
  b: "Canto",
  banding: "Banding",
  "delete banding": "Elimina canto",
  delete: "Elimina",
  clear: "Borra",
  l1: "L1",
  l2: "L2",
  w1: "A1",
  w2: "A1",
  "Powered by SmartCut": "Desarrollado por SmartCut"
}, l0 = {
  en_US: s0,
  ca: o0,
  es_ES: a0
};
function c0(t) {
  return Bf() ? (Zp(t), !0) : !1;
}
function ml(t) {
  return typeof t == "function" ? t() : eh(t);
}
const u0 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const f0 = Object.prototype.toString, h0 = (t) => f0.call(t) === "[object Object]", d0 = () => {
};
function p0(t, e) {
  function n(...i) {
    return new Promise((r, s) => {
      Promise.resolve(t(() => e.apply(this, i), { fn: e, thisArg: this, args: i })).then(r).catch(s);
    });
  }
  return n;
}
const Qh = (t) => t();
function m0(t = Qh) {
  const e = yi(!0);
  function n() {
    e.value = !1;
  }
  function i() {
    e.value = !0;
  }
  const r = (...s) => {
    e.value && t(...s);
  };
  return { isActive: Xa(e), pause: n, resume: i, eventFilter: r };
}
function g0(t) {
  return t || so();
}
function y0(t, e, n = {}) {
  const {
    eventFilter: i = Qh,
    ...r
  } = n;
  return sn(
    t,
    p0(
      i,
      e
    ),
    r
  );
}
function b0(t, e, n = {}) {
  const {
    eventFilter: i,
    ...r
  } = n, { eventFilter: s, pause: o, resume: a, isActive: l } = m0(i);
  return { stop: y0(
    t,
    e,
    {
      ...r,
      eventFilter: s
    }
  ), pause: o, resume: a, isActive: l };
}
function v0(t, e = !0, n) {
  g0() ? il(t, n) : e ? t() : Zs(t);
}
function _0(t) {
  var e;
  const n = ml(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const Ns = u0 ? window : void 0;
function hu(...t) {
  let e, n, i, r;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, i, r] = t, e = Ns) : [e, n, i, r] = t, !e)
    return d0;
  Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]);
  const s = [], o = () => {
    s.forEach((u) => u()), s.length = 0;
  }, a = (u, f, h, p) => (u.addEventListener(f, h, p), () => u.removeEventListener(f, h, p)), l = sn(
    () => [_0(e), ml(r)],
    ([u, f]) => {
      if (o(), !u)
        return;
      const h = h0(f) ? { ...f } : f;
      s.push(
        ...n.flatMap((p) => i.map((y) => a(u, p, y, h)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    l(), o();
  };
  return c0(c), c;
}
const $r = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Br = "__vueuse_ssr_handlers__", w0 = /* @__PURE__ */ x0();
function x0() {
  return Br in $r || ($r[Br] = $r[Br] || {}), $r[Br];
}
function k0(t, e) {
  return w0[t] || e;
}
function S0(t) {
  return t == null ? "any" : t instanceof Set ? "set" : t instanceof Map ? "map" : t instanceof Date ? "date" : typeof t == "boolean" ? "boolean" : typeof t == "string" ? "string" : typeof t == "object" ? "object" : Number.isNaN(t) ? "any" : "number";
}
const E0 = {
  boolean: {
    read: (t) => t === "true",
    write: (t) => String(t)
  },
  object: {
    read: (t) => JSON.parse(t),
    write: (t) => JSON.stringify(t)
  },
  number: {
    read: (t) => Number.parseFloat(t),
    write: (t) => String(t)
  },
  any: {
    read: (t) => t,
    write: (t) => String(t)
  },
  string: {
    read: (t) => t,
    write: (t) => String(t)
  },
  map: {
    read: (t) => new Map(JSON.parse(t)),
    write: (t) => JSON.stringify(Array.from(t.entries()))
  },
  set: {
    read: (t) => new Set(JSON.parse(t)),
    write: (t) => JSON.stringify(Array.from(t))
  },
  date: {
    read: (t) => new Date(t),
    write: (t) => t.toISOString()
  }
}, du = "vueuse-storage";
function T0(t, e, n, i = {}) {
  var r;
  const {
    flush: s = "pre",
    deep: o = !0,
    listenToStorageChanges: a = !0,
    writeDefaults: l = !0,
    mergeDefaults: c = !1,
    shallow: u,
    window: f = Ns,
    eventFilter: h,
    onError: p = (H) => {
      console.error(H);
    },
    initOnMounted: y
  } = i, k = (u ? ui : yi)(typeof e == "function" ? e() : e);
  if (!n)
    try {
      n = k0("getDefaultStorage", () => {
        var H;
        return (H = Ns) == null ? void 0 : H.localStorage;
      })();
    } catch (H) {
      p(H);
    }
  if (!n)
    return k;
  const w = ml(e), g = S0(w), b = (r = i.serializer) != null ? r : E0[g], { pause: x, resume: S } = b0(
    k,
    () => P(k.value),
    { flush: s, deep: o, eventFilter: h }
  );
  f && a && v0(() => {
    hu(f, "storage", z), hu(f, du, F), y && z();
  }), y || z();
  function O(H, $) {
    f && f.dispatchEvent(new CustomEvent(du, {
      detail: {
        key: t,
        oldValue: H,
        newValue: $,
        storageArea: n
      }
    }));
  }
  function P(H) {
    try {
      const $ = n.getItem(t);
      if (H == null)
        O($, null), n.removeItem(t);
      else {
        const X = b.write(H);
        $ !== X && (n.setItem(t, X), O($, X));
      }
    } catch ($) {
      p($);
    }
  }
  function D(H) {
    const $ = H ? H.newValue : n.getItem(t);
    if ($ == null)
      return l && w != null && n.setItem(t, b.write(w)), w;
    if (!H && c) {
      const X = b.read($);
      return typeof c == "function" ? c(X, w) : g === "object" && !Array.isArray(X) ? { ...w, ...X } : X;
    } else
      return typeof $ != "string" ? $ : b.read($);
  }
  function z(H) {
    if (!(H && H.storageArea !== n)) {
      if (H && H.key == null) {
        k.value = w;
        return;
      }
      if (!(H && H.key !== t)) {
        x();
        try {
          (H == null ? void 0 : H.newValue) !== b.write(k.value) && (k.value = D(H));
        } catch ($) {
          p($);
        } finally {
          H ? Zs(S) : S();
        }
      }
    }
  }
  function F(H) {
    z(H.detail);
  }
  return k;
}
function A0(t, e, n = {}) {
  const { window: i = Ns } = n;
  return T0(t, e, i == null ? void 0 : i.localStorage, n);
}
const Xe = /* @__PURE__ */ Object.create(null);
Xe.open = "0";
Xe.close = "1";
Xe.ping = "2";
Xe.pong = "3";
Xe.message = "4";
Xe.upgrade = "5";
Xe.noop = "6";
const fs = /* @__PURE__ */ Object.create(null);
Object.keys(Xe).forEach((t) => {
  fs[Xe[t]] = t;
});
const fa = { type: "error", data: "parser error" }, Zh = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", td = typeof ArrayBuffer == "function", ed = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, gl = ({ type: t, data: e }, n, i) => Zh && e instanceof Blob ? n ? i(e) : pu(e, i) : td && (e instanceof ArrayBuffer || ed(e)) ? n ? i(e) : pu(new Blob([e]), i) : i(Xe[t] + (e || "")), pu = (t, e) => {
  const n = new FileReader();
  return n.onload = function() {
    const i = n.result.split(",")[1];
    e("b" + (i || ""));
  }, n.readAsDataURL(t);
};
function mu(t) {
  return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let Io;
function C0(t, e) {
  if (Zh && t.data instanceof Blob)
    return t.data.arrayBuffer().then(mu).then(e);
  if (td && (t.data instanceof ArrayBuffer || ed(t.data)))
    return e(mu(t.data));
  gl(t, !1, (n) => {
    Io || (Io = new TextEncoder()), e(Io.encode(n));
  });
}
const gu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Gi = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < gu.length; t++)
  Gi[gu.charCodeAt(t)] = t;
const O0 = (t) => {
  let e = t.length * 0.75, n = t.length, i, r = 0, s, o, a, l;
  t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
  const c = new ArrayBuffer(e), u = new Uint8Array(c);
  for (i = 0; i < n; i += 4)
    s = Gi[t.charCodeAt(i)], o = Gi[t.charCodeAt(i + 1)], a = Gi[t.charCodeAt(i + 2)], l = Gi[t.charCodeAt(i + 3)], u[r++] = s << 2 | o >> 4, u[r++] = (o & 15) << 4 | a >> 2, u[r++] = (a & 3) << 6 | l & 63;
  return c;
}, P0 = typeof ArrayBuffer == "function", yl = (t, e) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: nd(t, e)
    };
  const n = t.charAt(0);
  return n === "b" ? {
    type: "message",
    data: N0(t.substring(1), e)
  } : fs[n] ? t.length > 1 ? {
    type: fs[n],
    data: t.substring(1)
  } : {
    type: fs[n]
  } : fa;
}, N0 = (t, e) => {
  if (P0) {
    const n = O0(t);
    return nd(n, e);
  } else
    return { base64: !0, data: t };
}, nd = (t, e) => {
  switch (e) {
    case "blob":
      return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
      return t instanceof ArrayBuffer ? t : t.buffer;
  }
}, id = "", I0 = (t, e) => {
  const n = t.length, i = new Array(n);
  let r = 0;
  t.forEach((s, o) => {
    gl(s, !1, (a) => {
      i[o] = a, ++r === n && e(i.join(id));
    });
  });
}, L0 = (t, e) => {
  const n = t.split(id), i = [];
  for (let r = 0; r < n.length; r++) {
    const s = yl(n[r], e);
    if (i.push(s), s.type === "error")
      break;
  }
  return i;
};
function M0() {
  return new TransformStream({
    transform(t, e) {
      C0(t, (n) => {
        const i = n.length;
        let r;
        if (i < 126)
          r = new Uint8Array(1), new DataView(r.buffer).setUint8(0, i);
        else if (i < 65536) {
          r = new Uint8Array(3);
          const s = new DataView(r.buffer);
          s.setUint8(0, 126), s.setUint16(1, i);
        } else {
          r = new Uint8Array(9);
          const s = new DataView(r.buffer);
          s.setUint8(0, 127), s.setBigUint64(1, BigInt(i));
        }
        t.data && typeof t.data != "string" && (r[0] |= 128), e.enqueue(r), e.enqueue(n);
      });
    }
  });
}
let Lo;
function Ur(t) {
  return t.reduce((e, n) => e + n.length, 0);
}
function qr(t, e) {
  if (t[0].length === e)
    return t.shift();
  const n = new Uint8Array(e);
  let i = 0;
  for (let r = 0; r < e; r++)
    n[r] = t[0][i++], i === t[0].length && (t.shift(), i = 0);
  return t.length && i < t[0].length && (t[0] = t[0].slice(i)), n;
}
function R0(t, e) {
  Lo || (Lo = new TextDecoder());
  const n = [];
  let i = 0, r = -1, s = !1;
  return new TransformStream({
    transform(o, a) {
      for (n.push(o); ; ) {
        if (i === 0) {
          if (Ur(n) < 1)
            break;
          const l = qr(n, 1);
          s = (l[0] & 128) === 128, r = l[0] & 127, r < 126 ? i = 3 : r === 126 ? i = 1 : i = 2;
        } else if (i === 1) {
          if (Ur(n) < 2)
            break;
          const l = qr(n, 2);
          r = new DataView(l.buffer, l.byteOffset, l.length).getUint16(0), i = 3;
        } else if (i === 2) {
          if (Ur(n) < 8)
            break;
          const l = qr(n, 8), c = new DataView(l.buffer, l.byteOffset, l.length), u = c.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            a.enqueue(fa);
            break;
          }
          r = u * Math.pow(2, 32) + c.getUint32(4), i = 3;
        } else {
          if (Ur(n) < r)
            break;
          const l = qr(n, r);
          a.enqueue(yl(s ? l : Lo.decode(l), e)), i = 0;
        }
        if (r === 0 || r > t) {
          a.enqueue(fa);
          break;
        }
      }
    }
  });
}
const rd = 4;
function Rt(t) {
  if (t)
    return D0(t);
}
function D0(t) {
  for (var e in Rt.prototype)
    t[e] = Rt.prototype[e];
  return t;
}
Rt.prototype.on = Rt.prototype.addEventListener = function(t, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
};
Rt.prototype.once = function(t, e) {
  function n() {
    this.off(t, n), e.apply(this, arguments);
  }
  return n.fn = e, this.on(t, n), this;
};
Rt.prototype.off = Rt.prototype.removeListener = Rt.prototype.removeAllListeners = Rt.prototype.removeEventListener = function(t, e) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var n = this._callbacks["$" + t];
  if (!n)
    return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + t], this;
  for (var i, r = 0; r < n.length; r++)
    if (i = n[r], i === e || i.fn === e) {
      n.splice(r, 1);
      break;
    }
  return n.length === 0 && delete this._callbacks["$" + t], this;
};
Rt.prototype.emit = function(t) {
  this._callbacks = this._callbacks || {};
  for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], i = 1; i < arguments.length; i++)
    e[i - 1] = arguments[i];
  if (n) {
    n = n.slice(0);
    for (var i = 0, r = n.length; i < r; ++i)
      n[i].apply(this, e);
  }
  return this;
};
Rt.prototype.emitReserved = Rt.prototype.emit;
Rt.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
Rt.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const ke = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
function sd(t, ...e) {
  return e.reduce((n, i) => (t.hasOwnProperty(i) && (n[i] = t[i]), n), {});
}
const F0 = ke.setTimeout, $0 = ke.clearTimeout;
function uo(t, e) {
  e.useNativeTimers ? (t.setTimeoutFn = F0.bind(ke), t.clearTimeoutFn = $0.bind(ke)) : (t.setTimeoutFn = ke.setTimeout.bind(ke), t.clearTimeoutFn = ke.clearTimeout.bind(ke));
}
const B0 = 1.33;
function U0(t) {
  return typeof t == "string" ? q0(t) : Math.ceil((t.byteLength || t.size) * B0);
}
function q0(t) {
  let e = 0, n = 0;
  for (let i = 0, r = t.length; i < r; i++)
    e = t.charCodeAt(i), e < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (i++, n += 4);
  return n;
}
function W0(t) {
  let e = "";
  for (let n in t)
    t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
  return e;
}
function H0(t) {
  let e = {}, n = t.split("&");
  for (let i = 0, r = n.length; i < r; i++) {
    let s = n[i].split("=");
    e[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return e;
}
class V0 extends Error {
  constructor(e, n, i) {
    super(e), this.description = n, this.context = i, this.type = "TransportError";
  }
}
class bl extends Rt {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, uo(this, e), this.opts = e, this.query = e.query, this.socket = e.socket;
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
  onError(e, n, i) {
    return super.emitReserved("error", new V0(e, n, i)), this;
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
  send(e) {
    this.readyState === "open" && this.write(e);
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
  onData(e) {
    const n = yl(e, this.socket.binaryType);
    this.onPacket(n);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(e) {
    super.emitReserved("packet", e);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(e) {
    this.readyState = "closed", super.emitReserved("close", e);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(e) {
  }
  createUri(e, n = {}) {
    return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(n);
  }
  _hostname() {
    const e = this.opts.hostname;
    return e.indexOf(":") === -1 ? e : "[" + e + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(e) {
    const n = W0(e);
    return n.length ? "?" + n : "";
  }
}
const od = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), ha = 64, z0 = {};
let yu = 0, Wr = 0, bu;
function vu(t) {
  let e = "";
  do
    e = od[t % ha] + e, t = Math.floor(t / ha);
  while (t > 0);
  return e;
}
function ad() {
  const t = vu(+/* @__PURE__ */ new Date());
  return t !== bu ? (yu = 0, bu = t) : t + "." + vu(yu++);
}
for (; Wr < ha; Wr++)
  z0[od[Wr]] = Wr;
let ld = !1;
try {
  ld = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const G0 = ld;
function cd(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || G0))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new ke[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function j0() {
}
const Y0 = function() {
  return new cd({
    xdomain: !1
  }).responseType != null;
}();
class K0 extends bl {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(e) {
    if (super(e), this.polling = !1, typeof location < "u") {
      const i = location.protocol === "https:";
      let r = location.port;
      r || (r = i ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || r !== e.port;
    }
    const n = e && e.forceBase64;
    this.supportsBinary = Y0 && !n, this.opts.withCredentials && (this.cookieJar = void 0);
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
    this.poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(e) {
    this.readyState = "pausing";
    const n = () => {
      this.readyState = "paused", e();
    };
    if (this.polling || !this.writable) {
      let i = 0;
      this.polling && (i++, this.once("pollComplete", function() {
        --i || n();
      })), this.writable || (i++, this.once("drain", function() {
        --i || n();
      }));
    } else
      n();
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  poll() {
    this.polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(e) {
    const n = (i) => {
      if (this.readyState === "opening" && i.type === "open" && this.onOpen(), i.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(i);
    };
    L0(e, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const e = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? e() : this.once("open", e);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(e) {
    this.writable = !1, I0(e, (n) => {
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
    const e = this.opts.secure ? "https" : "http", n = this.query || {};
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = ad()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(e, n);
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(e = {}) {
    return Object.assign(e, { xd: this.xd, cookieJar: this.cookieJar }, this.opts), new je(this.uri(), e);
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(e, n) {
    const i = this.request({
      method: "POST",
      data: e
    });
    i.on("success", n), i.on("error", (r, s) => {
      this.onError("xhr post error", r, s);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const e = this.request();
    e.on("data", this.onData.bind(this)), e.on("error", (n, i) => {
      this.onError("xhr poll error", n, i);
    }), this.pollXhr = e;
  }
}
class je extends Rt {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, n) {
    super(), uo(this, n), this.opts = n, this.method = n.method || "GET", this.uri = e, this.data = n.data !== void 0 ? n.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    var e;
    const n = sd(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    n.xdomain = !!this.opts.xd;
    const i = this.xhr = new cd(n);
    try {
      i.open(this.method, this.uri, !0);
      try {
        if (this.opts.extraHeaders) {
          i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
          for (let r in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(r) && i.setRequestHeader(r, this.opts.extraHeaders[r]);
        }
      } catch {
      }
      if (this.method === "POST")
        try {
          i.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        i.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (e = this.opts.cookieJar) === null || e === void 0 || e.addCookies(i), "withCredentials" in i && (i.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (i.timeout = this.opts.requestTimeout), i.onreadystatechange = () => {
        var r;
        i.readyState === 3 && ((r = this.opts.cookieJar) === null || r === void 0 || r.parseCookies(i)), i.readyState === 4 && (i.status === 200 || i.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
          this.onError(typeof i.status == "number" ? i.status : 0);
        }, 0));
      }, i.send(this.data);
    } catch (r) {
      this.setTimeoutFn(() => {
        this.onError(r);
      }, 0);
      return;
    }
    typeof document < "u" && (this.index = je.requestsCount++, je.requests[this.index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  onError(e) {
    this.emitReserved("error", e, this.xhr), this.cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  cleanup(e) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
      if (this.xhr.onreadystatechange = j0, e)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete je.requests[this.index], this.xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  onLoad() {
    const e = this.xhr.responseText;
    e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this.cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this.cleanup();
  }
}
je.requestsCount = 0;
je.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", _u);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in ke ? "pagehide" : "unload";
    addEventListener(t, _u, !1);
  }
}
function _u() {
  for (let t in je.requests)
    je.requests.hasOwnProperty(t) && je.requests[t].abort();
}
const vl = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, n) => n(e, 0), Hr = ke.WebSocket || ke.MozWebSocket, wu = !0, X0 = "arraybuffer", xu = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class J0 extends bl {
  /**
   * WebSocket transport constructor.
   *
   * @param {Object} opts - connection options
   * @protected
   */
  constructor(e) {
    super(e), this.supportsBinary = !e.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check())
      return;
    const e = this.uri(), n = this.opts.protocols, i = xu ? {} : sd(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
    try {
      this.ws = wu && !xu ? n ? new Hr(e, n) : new Hr(e) : new Hr(e, n, i);
    } catch (r) {
      return this.emitReserved("error", r);
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
    }, this.ws.onclose = (e) => this.onClose({
      description: "websocket connection closed",
      context: e
    }), this.ws.onmessage = (e) => this.onData(e.data), this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(e) {
    this.writable = !1;
    for (let n = 0; n < e.length; n++) {
      const i = e[n], r = n === e.length - 1;
      gl(i, this.supportsBinary, (s) => {
        const o = {};
        try {
          wu && this.ws.send(s);
        } catch {
        }
        r && vl(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const e = this.opts.secure ? "wss" : "ws", n = this.query || {};
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = ad()), this.supportsBinary || (n.b64 = 1), this.createUri(e, n);
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!Hr;
  }
}
class Q0 extends bl {
  get name() {
    return "webtransport";
  }
  doOpen() {
    typeof WebTransport == "function" && (this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]), this.transport.closed.then(() => {
      this.onClose();
    }).catch((e) => {
      this.onError("webtransport error", e);
    }), this.transport.ready.then(() => {
      this.transport.createBidirectionalStream().then((e) => {
        const n = R0(Number.MAX_SAFE_INTEGER, this.socket.binaryType), i = e.readable.pipeThrough(n).getReader(), r = M0();
        r.readable.pipeTo(e.writable), this.writer = r.writable.getWriter();
        const s = () => {
          i.read().then(({ done: a, value: l }) => {
            a || (this.onPacket(l), s());
          }).catch((a) => {
          });
        };
        s();
        const o = { type: "open" };
        this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`), this.writer.write(o).then(() => this.onOpen());
      });
    }));
  }
  write(e) {
    this.writable = !1;
    for (let n = 0; n < e.length; n++) {
      const i = e[n], r = n === e.length - 1;
      this.writer.write(i).then(() => {
        r && vl(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var e;
    (e = this.transport) === null || e === void 0 || e.close();
  }
}
const Z0 = {
  websocket: J0,
  webtransport: Q0,
  polling: K0
}, t1 = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, e1 = [
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
function da(t) {
  if (t.length > 2e3)
    throw "URI too long";
  const e = t, n = t.indexOf("["), i = t.indexOf("]");
  n != -1 && i != -1 && (t = t.substring(0, n) + t.substring(n, i).replace(/:/g, ";") + t.substring(i, t.length));
  let r = t1.exec(t || ""), s = {}, o = 14;
  for (; o--; )
    s[e1[o]] = r[o] || "";
  return n != -1 && i != -1 && (s.source = e, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = n1(s, s.path), s.queryKey = i1(s, s.query), s;
}
function n1(t, e) {
  const n = /\/{2,9}/g, i = e.replace(n, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && i.splice(0, 1), e.slice(-1) == "/" && i.splice(i.length - 1, 1), i;
}
function i1(t, e) {
  const n = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, r, s) {
    r && (n[r] = s);
  }), n;
}
let ud = class ci extends Rt {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, n = {}) {
    super(), this.binaryType = X0, this.writeBuffer = [], e && typeof e == "object" && (n = e, e = null), e ? (e = da(e), n.hostname = e.host, n.secure = e.protocol === "https" || e.protocol === "wss", n.port = e.port, e.query && (n.query = e.query)) : n.host && (n.hostname = da(n.host).host), uo(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = n.transports || [
      "polling",
      "websocket",
      "webtransport"
    ], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
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
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = H0(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this.beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
      this.onClose("transport close", {
        description: "network connection lost"
      });
    }, addEventListener("offline", this.offlineEventListener, !1))), this.open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(e) {
    const n = Object.assign({}, this.opts.query);
    n.EIO = rd, n.transport = e, this.id && (n.sid = this.id);
    const i = Object.assign({}, this.opts, {
      query: n,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[e]);
    return new Z0[e](i);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let e;
    if (this.opts.rememberUpgrade && ci.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
      e = "websocket";
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else
      e = this.transports[0];
    this.readyState = "opening";
    try {
      e = this.createTransport(e);
    } catch {
      this.transports.shift(), this.open();
      return;
    }
    e.open(), this.setTransport(e);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(e) {
    this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (n) => this.onClose("transport close", n));
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  probe(e) {
    let n = this.createTransport(e), i = !1;
    ci.priorWebsocketSuccess = !1;
    const r = () => {
      i || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (f) => {
        if (!i)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            ci.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
              i || this.readyState !== "closed" && (u(), this.setTransport(n), n.send([{ type: "upgrade" }]), this.emitReserved("upgrade", n), n = null, this.upgrading = !1, this.flush());
            });
          } else {
            const h = new Error("probe error");
            h.transport = n.name, this.emitReserved("upgradeError", h);
          }
      }));
    };
    function s() {
      i || (i = !0, u(), n.close(), n = null);
    }
    const o = (f) => {
      const h = new Error("probe error: " + f);
      h.transport = n.name, s(), this.emitReserved("upgradeError", h);
    };
    function a() {
      o("transport closed");
    }
    function l() {
      o("socket closed");
    }
    function c(f) {
      n && f.name !== n.name && s();
    }
    const u = () => {
      n.removeListener("open", r), n.removeListener("error", o), n.removeListener("close", a), this.off("close", l), this.off("upgrading", c);
    };
    n.once("open", r), n.once("error", o), n.once("close", a), this.once("close", l), this.once("upgrading", c), this.upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
      i || n.open();
    }, 200) : n.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    if (this.readyState = "open", ci.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
      let e = 0;
      const n = this.upgrades.length;
      for (; e < n; e++)
        this.probe(this.upgrades[e]);
    }
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  onPacket(e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), this.resetPingTimeout(), e.type) {
        case "open":
          this.onHandshake(JSON.parse(e.data));
          break;
        case "ping":
          this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
          break;
        case "error":
          const n = new Error("server error");
          n.code = e.data, this.onError(n);
          break;
        case "message":
          this.emitReserved("data", e.data), this.emitReserved("message", e.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(e) {
    this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const e = this.getWritablePackets();
      this.transport.send(e), this.prevBufferLen = e.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  getWritablePackets() {
    if (!(this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let n = 1;
    for (let i = 0; i < this.writeBuffer.length; i++) {
      const r = this.writeBuffer[i].data;
      if (r && (n += U0(r)), i > 0 && n > this.maxPayload)
        return this.writeBuffer.slice(0, i);
      n += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} callback function.
   * @return {Socket} for chaining.
   */
  write(e, n, i) {
    return this.sendPacket("message", e, n, i), this;
  }
  send(e, n, i) {
    return this.sendPacket("message", e, n, i), this;
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
  sendPacket(e, n, i, r) {
    if (typeof n == "function" && (r = n, n = void 0), typeof i == "function" && (r = i, i = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    i = i || {}, i.compress = i.compress !== !1;
    const s = {
      type: e,
      data: n,
      options: i
    };
    this.emitReserved("packetCreate", s), this.writeBuffer.push(s), r && this.once("flush", r), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const e = () => {
      this.onClose("forced close"), this.transport.close();
    }, n = () => {
      this.off("upgrade", n), this.off("upgradeError", n), e();
    }, i = () => {
      this.once("upgrade", n), this.once("upgradeError", n);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? i() : e();
    }) : this.upgrading ? i() : e()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  onError(e) {
    ci.priorWebsocketSuccess = !1, this.emitReserved("error", e), this.onClose("transport error", e);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  onClose(e, n) {
    (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", e, n), this.writeBuffer = [], this.prevBufferLen = 0);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  filterUpgrades(e) {
    const n = [];
    let i = 0;
    const r = e.length;
    for (; i < r; i++)
      ~this.transports.indexOf(e[i]) && n.push(e[i]);
    return n;
  }
};
ud.protocol = rd;
function r1(t, e = "", n) {
  let i = t;
  n = n || typeof location < "u" && location, t == null && (t = n.protocol + "//" + n.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = n.protocol + t : t = n.host + t), /^(https?|wss?):\/\//.test(t) || (typeof n < "u" ? t = n.protocol + "//" + t : t = "https://" + t), i = da(t)), i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")), i.path = i.path || "/";
  const s = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
  return i.id = i.protocol + "://" + s + ":" + i.port + e, i.href = i.protocol + "://" + s + (n && n.port === i.port ? "" : ":" + i.port), i;
}
const s1 = typeof ArrayBuffer == "function", o1 = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, fd = Object.prototype.toString, a1 = typeof Blob == "function" || typeof Blob < "u" && fd.call(Blob) === "[object BlobConstructor]", l1 = typeof File == "function" || typeof File < "u" && fd.call(File) === "[object FileConstructor]";
function _l(t) {
  return s1 && (t instanceof ArrayBuffer || o1(t)) || a1 && t instanceof Blob || l1 && t instanceof File;
}
function hs(t, e) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let n = 0, i = t.length; n < i; n++)
      if (hs(t[n]))
        return !0;
    return !1;
  }
  if (_l(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return hs(t.toJSON(), !0);
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && hs(t[n]))
      return !0;
  return !1;
}
function c1(t) {
  const e = [], n = t.data, i = t;
  return i.data = pa(n, e), i.attachments = e.length, { packet: i, buffers: e };
}
function pa(t, e) {
  if (!t)
    return t;
  if (_l(t)) {
    const n = { _placeholder: !0, num: e.length };
    return e.push(t), n;
  } else if (Array.isArray(t)) {
    const n = new Array(t.length);
    for (let i = 0; i < t.length; i++)
      n[i] = pa(t[i], e);
    return n;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const n = {};
    for (const i in t)
      Object.prototype.hasOwnProperty.call(t, i) && (n[i] = pa(t[i], e));
    return n;
  }
  return t;
}
function u1(t, e) {
  return t.data = ma(t.data, e), delete t.attachments, t;
}
function ma(t, e) {
  if (!t)
    return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
      return e[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let n = 0; n < t.length; n++)
      t[n] = ma(t[n], e);
  else if (typeof t == "object")
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (t[n] = ma(t[n], e));
  return t;
}
const f1 = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], h1 = 5;
var ft;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(ft || (ft = {}));
class d1 {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(e) {
    this.replacer = e;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(e) {
    return (e.type === ft.EVENT || e.type === ft.ACK) && hs(e) ? this.encodeAsBinary({
      type: e.type === ft.EVENT ? ft.BINARY_EVENT : ft.BINARY_ACK,
      nsp: e.nsp,
      data: e.data,
      id: e.id
    }) : [this.encodeAsString(e)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(e) {
    let n = "" + e.type;
    return (e.type === ft.BINARY_EVENT || e.type === ft.BINARY_ACK) && (n += e.attachments + "-"), e.nsp && e.nsp !== "/" && (n += e.nsp + ","), e.id != null && (n += e.id), e.data != null && (n += JSON.stringify(e.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const n = c1(e), i = this.encodeAsString(n.packet), r = n.buffers;
    return r.unshift(i), r;
  }
}
function ku(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class wl extends Rt {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(e) {
    super(), this.reviver = e;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(e) {
    let n;
    if (typeof e == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(e);
      const i = n.type === ft.BINARY_EVENT;
      i || n.type === ft.BINARY_ACK ? (n.type = i ? ft.EVENT : ft.ACK, this.reconstructor = new p1(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (_l(e) || e.base64)
      if (this.reconstructor)
        n = this.reconstructor.takeBinaryData(e), n && (this.reconstructor = null, super.emitReserved("decoded", n));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + e);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(e) {
    let n = 0;
    const i = {
      type: Number(e.charAt(0))
    };
    if (ft[i.type] === void 0)
      throw new Error("unknown packet type " + i.type);
    if (i.type === ft.BINARY_EVENT || i.type === ft.BINARY_ACK) {
      const s = n + 1;
      for (; e.charAt(++n) !== "-" && n != e.length; )
        ;
      const o = e.substring(s, n);
      if (o != Number(o) || e.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      i.attachments = Number(o);
    }
    if (e.charAt(n + 1) === "/") {
      const s = n + 1;
      for (; ++n && !(e.charAt(n) === "," || n === e.length); )
        ;
      i.nsp = e.substring(s, n);
    } else
      i.nsp = "/";
    const r = e.charAt(n + 1);
    if (r !== "" && Number(r) == r) {
      const s = n + 1;
      for (; ++n; ) {
        const o = e.charAt(n);
        if (o == null || Number(o) != o) {
          --n;
          break;
        }
        if (n === e.length)
          break;
      }
      i.id = Number(e.substring(s, n + 1));
    }
    if (e.charAt(++n)) {
      const s = this.tryParse(e.substr(n));
      if (wl.isPayloadValid(i.type, s))
        i.data = s;
      else
        throw new Error("invalid payload");
    }
    return i;
  }
  tryParse(e) {
    try {
      return JSON.parse(e, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(e, n) {
    switch (e) {
      case ft.CONNECT:
        return ku(n);
      case ft.DISCONNECT:
        return n === void 0;
      case ft.CONNECT_ERROR:
        return typeof n == "string" || ku(n);
      case ft.EVENT:
      case ft.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && f1.indexOf(n[0]) === -1);
      case ft.ACK:
      case ft.BINARY_ACK:
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
class p1 {
  constructor(e) {
    this.packet = e, this.buffers = [], this.reconPack = e;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(e) {
    if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
      const n = u1(this.reconPack, this.buffers);
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
const m1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, Decoder: wl, Encoder: d1, get PacketType() {
  return ft;
}, protocol: h1 }, Symbol.toStringTag, { value: "Module" }));
function Pe(t, e, n) {
  return t.on(e, n), function() {
    t.off(e, n);
  };
}
const g1 = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class hd extends Rt {
  /**
   * `Socket` constructor.
   */
  constructor(e, n, i) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = n, i && i.auth && (this.auth = i.auth), this._opts = Object.assign({}, i), this.io._autoConnect && this.open();
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
    const e = this.io;
    this.subs = [
      Pe(e, "open", this.onopen.bind(this)),
      Pe(e, "packet", this.onpacket.bind(this)),
      Pe(e, "error", this.onerror.bind(this)),
      Pe(e, "close", this.onclose.bind(this))
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
  send(...e) {
    return e.unshift("message"), this.emit.apply(this, e), this;
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
  emit(e, ...n) {
    if (g1.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (n.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const i = {
      type: ft.EVENT,
      data: n
    };
    if (i.options = {}, i.options.compress = this.flags.compress !== !1, typeof n[n.length - 1] == "function") {
      const o = this.ids++, a = n.pop();
      this._registerAckCallback(o, a), i.id = o;
    }
    const r = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    return this.flags.volatile && (!r || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(i), this.packet(i)) : this.sendBuffer.push(i)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(e, n) {
    var i;
    const r = (i = this.flags.timeout) !== null && i !== void 0 ? i : this._opts.ackTimeout;
    if (r === void 0) {
      this.acks[e] = n;
      return;
    }
    const s = this.io.setTimeoutFn(() => {
      delete this.acks[e];
      for (let o = 0; o < this.sendBuffer.length; o++)
        this.sendBuffer[o].id === e && this.sendBuffer.splice(o, 1);
      n.call(this, new Error("operation has timed out"));
    }, r);
    this.acks[e] = (...o) => {
      this.io.clearTimeoutFn(s), n.apply(this, [null, ...o]);
    };
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
  emitWithAck(e, ...n) {
    const i = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
    return new Promise((r, s) => {
      n.push((o, a) => i ? o ? s(o) : r(a) : r(o)), this.emit(e, ...n);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(e) {
    let n;
    typeof e[e.length - 1] == "function" && (n = e.pop());
    const i = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: e,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    e.push((r, ...s) => i !== this._queue[0] ? void 0 : (r !== null ? i.tryCount > this._opts.retries && (this._queue.shift(), n && n(r)) : (this._queue.shift(), n && n(null, ...s)), i.pending = !1, this._drainQueue())), this._queue.push(i), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(e = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const n = this._queue[0];
    n.pending && !e || (n.pending = !0, n.tryCount++, this.flags = n.flags, this.emit.apply(this, n.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(e) {
    e.nsp = this.nsp, this.io._packet(e);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((e) => {
      this._sendConnectPacket(e);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(e) {
    this.packet({
      type: ft.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e) : e
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(e) {
    this.connected || this.emitReserved("connect_error", e);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(e, n) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", e, n);
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(e) {
    if (e.nsp === this.nsp)
      switch (e.type) {
        case ft.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case ft.EVENT:
        case ft.BINARY_EVENT:
          this.onevent(e);
          break;
        case ft.ACK:
        case ft.BINARY_ACK:
          this.onack(e);
          break;
        case ft.DISCONNECT:
          this.ondisconnect();
          break;
        case ft.CONNECT_ERROR:
          this.destroy();
          const i = new Error(e.data.message);
          i.data = e.data.data, this.emitReserved("connect_error", i);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(e) {
    const n = e.data || [];
    e.id != null && n.push(this.ack(e.id)), this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(e) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const i of n)
        i.apply(this, e);
    }
    super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(e) {
    const n = this;
    let i = !1;
    return function(...r) {
      i || (i = !0, n.packet({
        type: ft.ACK,
        id: e,
        data: r
      }));
    };
  }
  /**
   * Called upon a server acknowlegement.
   *
   * @param packet
   * @private
   */
  onack(e) {
    const n = this.acks[e.id];
    typeof n == "function" && (n.apply(this, e.data), delete this.acks[e.id]);
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(e, n) {
    this.id = e, this.recovered = n && this._pid === n, this._pid = n, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((e) => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach((e) => {
      this.notifyOutgoingListeners(e), this.packet(e);
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
    this.subs && (this.subs.forEach((e) => e()), this.subs = void 0), this.io._destroy(this);
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
    return this.connected && this.packet({ type: ft.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
  compress(e) {
    return this.flags.compress = e, this;
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
  timeout(e) {
    return this.flags.timeout = e, this;
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
  onAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this;
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
  prependAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this;
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
  offAny(e) {
    if (!this._anyListeners)
      return this;
    if (e) {
      const n = this._anyListeners;
      for (let i = 0; i < n.length; i++)
        if (e === n[i])
          return n.splice(i, 1), this;
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
  onAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this;
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
  prependAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this;
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
  offAnyOutgoing(e) {
    if (!this._anyOutgoingListeners)
      return this;
    if (e) {
      const n = this._anyOutgoingListeners;
      for (let i = 0; i < n.length; i++)
        if (e === n[i])
          return n.splice(i, 1), this;
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
  notifyOutgoingListeners(e) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const i of n)
        i.apply(this, e.data);
    }
  }
}
function Di(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
Di.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), n = Math.floor(e * this.jitter * t);
    t = Math.floor(e * 10) & 1 ? t + n : t - n;
  }
  return Math.min(t, this.max) | 0;
};
Di.prototype.reset = function() {
  this.attempts = 0;
};
Di.prototype.setMin = function(t) {
  this.ms = t;
};
Di.prototype.setMax = function(t) {
  this.max = t;
};
Di.prototype.setJitter = function(t) {
  this.jitter = t;
};
class ga extends Rt {
  constructor(e, n) {
    var i;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (n = e, e = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, uo(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((i = n.randomizationFactor) !== null && i !== void 0 ? i : 0.5), this.backoff = new Di({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = e;
    const r = n.parser || m1;
    this.encoder = new r.Encoder(), this.decoder = new r.Decoder(), this._autoConnect = n.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(e) {
    return arguments.length ? (this._reconnection = !!e, this) : this._reconnection;
  }
  reconnectionAttempts(e) {
    return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this);
  }
  reconnectionDelay(e) {
    var n;
    return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (n = this.backoff) === null || n === void 0 || n.setMin(e), this);
  }
  randomizationFactor(e) {
    var n;
    return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (n = this.backoff) === null || n === void 0 || n.setJitter(e), this);
  }
  reconnectionDelayMax(e) {
    var n;
    return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (n = this.backoff) === null || n === void 0 || n.setMax(e), this);
  }
  timeout(e) {
    return arguments.length ? (this._timeout = e, this) : this._timeout;
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
  open(e) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new ud(this.uri, this.opts);
    const n = this.engine, i = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const r = Pe(n, "open", function() {
      i.onopen(), e && e();
    }), s = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), e ? e(a) : this.maybeReconnectOnOpen();
    }, o = Pe(n, "error", s);
    if (this._timeout !== !1) {
      const a = this._timeout, l = this.setTimeoutFn(() => {
        r(), s(new Error("timeout")), n.close();
      }, a);
      this.opts.autoUnref && l.unref(), this.subs.push(() => {
        this.clearTimeoutFn(l);
      });
    }
    return this.subs.push(r), this.subs.push(o), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(e) {
    return this.open(e);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const e = this.engine;
    this.subs.push(Pe(e, "ping", this.onping.bind(this)), Pe(e, "data", this.ondata.bind(this)), Pe(e, "error", this.onerror.bind(this)), Pe(e, "close", this.onclose.bind(this)), Pe(this.decoder, "decoded", this.ondecoded.bind(this)));
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
  ondata(e) {
    try {
      this.decoder.add(e);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(e) {
    vl(() => {
      this.emitReserved("packet", e);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(e) {
    this.emitReserved("error", e);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(e, n) {
    let i = this.nsps[e];
    return i ? this._autoConnect && !i.active && i.connect() : (i = new hd(this, e, n), this.nsps[e] = i), i;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(e) {
    const n = Object.keys(this.nsps);
    for (const i of n)
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
  _packet(e) {
    const n = this.encoder.encode(e);
    for (let i = 0; i < n.length; i++)
      this.engine.write(n[i], e.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((e) => e()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close();
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
   * Called upon engine close.
   *
   * @private
   */
  onclose(e, n) {
    this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, n), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const e = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const i = this.setTimeoutFn(() => {
        e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open((r) => {
          r ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", r)) : e.onreconnect();
        }));
      }, n);
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
    const e = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e);
  }
}
const Hi = {};
function ds(t, e) {
  typeof t == "object" && (e = t, t = void 0), e = e || {};
  const n = r1(t, e.path || "/socket.io"), i = n.source, r = n.id, s = n.path, o = Hi[r] && s in Hi[r].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
  let l;
  return a ? l = new ga(i, e) : (Hi[r] || (Hi[r] = new ga(i, e)), l = Hi[r]), n.query && !e.query && (e.query = n.queryKey), l.socket(n.path, e);
}
Object.assign(ds, {
  Manager: ga,
  Socket: hd,
  io: ds,
  connect: ds
});
const y1 = 10;
function Su(t) {
  return typeof t < "u" && typeof t == "number";
}
const ut = {
  greaterThan(t, e, n = 1e-10) {
    return t - e > n;
  },
  greaterThanOrEqualTo(t, e, n = 1e-10) {
    return t - e >= -n;
  },
  lessThan(t, e, n = 1e-10) {
    return e - t > n;
  },
  lessThanOrEqualTo(t, e, n = 1e-10) {
    return e - t >= -n;
  },
  equalTo(t, e, n = 1e-10) {
    return Math.abs(t - e) < n;
  },
  isNumber: Su,
  round(t) {
    return Su(t) ? t.toFixed(y1) : !1;
  },
  getRandom(t) {
    return Math.floor(Math.random() * t);
  },
  //https://stackoverflow.com/a/37835673/4734460
  getRandomSample(t, e) {
    let n, i = t.length, r;
    const s = i - e, o = [];
    for (; i-- > s; )
      n = this.getRandom(i + 1), r = t[n], t[n] = t[i], t[i] = r, o.push(i), o.push(n);
    const a = t.slice(s);
    for (; e--; )
      i = o.pop(), n = o.pop(), r = t[i], t[i] = t[n], t[n] = r;
    return a;
  }
};
function A(t) {
  return !(t === void 0 || t === null || t === "" || typeof t == "object" && !Object.values(t).length);
}
function b1(t) {
  return t.reduce((e, n) => {
    const i = A(n.q) && typeof n.q == "string" ? parseInt(n.q) : n.q;
    return !isNaN(i) && i > 0 ? e + i : e;
  }, 0);
}
function v1(t) {
  if (!(t != null && t.length))
    return [];
  const e = t.filter((i) => !i.added).map((i) => (i.parentID = i.getParentID(), i)), n = {};
  return e.forEach((i) => {
    n[i.parentID] ? ++n[i.parentID].count : (n[i.parentID] = {}, n[i.parentID].count = 1, n[i.parentID].id = i.parentID, n[i.parentID].name = i != null && i.name ? i.name : i.id, n[i.parentID].l = i.l, n[i.parentID].w = i.w, n[i.parentID].t = i.t, n[i.parentID].material = i.material, n[i.parentID].rot = i.rot);
  }), Object.values(n);
}
function _1(t) {
  return t != null && t.length ? t.filter((e) => e.used && (e.stack === !1 || typeof e.stack == "number")) : [];
}
const Is = {
  //sort by width then length - use .sort(sortHeightDescWidthDesc)
  WDLD(t, e) {
    if (t.w < e.w)
      return 1;
    if (t.w > e.w)
      return -1;
    if (t.l === e.l)
      return 0;
    if (t.l < e.l)
      return 1;
    if (t.l > e.l)
      return -1;
  },
  WALA(t, e) {
    if (t.w > e.w)
      return 1;
    if (t.w < e.w)
      return -1;
    if (t.l === e.l)
      return 0;
    if (t.l > e.l)
      return 1;
    if (t.l < e.l)
      return -1;
  },
  //sort by length d then width d
  LDWD(t, e) {
    if (t.l < e.l)
      return 1;
    if (t.l > e.l)
      return -1;
    if (t.w === e.w)
      return 0;
    if (t.w < e.w)
      return 1;
    if (t.w > e.w)
      return -1;
  },
  LAWA(t, e) {
    if (t.l > e.l)
      return 1;
    if (t.l < e.l)
      return -1;
    if (t.w === e.w)
      return 0;
    if (t.w > e.w)
      return 1;
    if (t.w < e.w)
      return -1;
  },
  //sort by width d
  WD(t, e) {
    if (t.w < e.w)
      return 1;
    if (t.w > e.w)
      return -1;
    if (t.w === e.w)
      return 0;
  },
  LD(t, e) {
    if (t.l < e.l)
      return 1;
    if (t.l > e.l)
      return -1;
    if (t.l === e.l)
      return 0;
  },
  LDIDA(t, e) {
    if (t.l < e.l)
      return 1;
    if (t.l > e.l)
      return -1;
    const n = t.id.toString().split("."), i = e.id.toString().split(".");
    return n[0] !== i[0] ? parseInt(n[0]) - parseInt(i[0]) : parseInt(n[1]) - parseInt(i[1]);
  },
  WDIDA(t, e) {
    if (t.w < e.w)
      return 1;
    if (t.w > e.w)
      return -1;
    const n = t.id.toString().split("."), i = e.id.toString().split(".");
    return n[0] !== i[0] ? parseInt(n[0]) - parseInt(i[0]) : parseInt(n[1]) - parseInt(i[1]);
  },
  //sort by proportion
  /* sortProportion: function(a, b) {
  
          if (a.proportion < b.proportion) return 1;
          if (a.proportion > b.proportion) return -1;
  
          if (a.proportion === b.proportion) return a.index - b.index;
  
      } */
  //area descending
  AD(t, e) {
    const n = t.getArea(), i = e.getArea();
    if (n < i)
      return 1;
    if (n > i)
      return -1;
    if (n === i)
      return 0;
  },
  AA(t, e) {
    const n = t.getArea(), i = e.getArea();
    if (n < i)
      return -1;
    if (n > i)
      return 1;
    if (n === i)
      return 0;
  },
  AAID(t, e) {
    const n = t.getArea(), i = e.getArea();
    if (n < i)
      return -1;
    if (n > i)
      return 1;
    if (n === i) {
      const r = t.id.toString().split("."), s = e.id.toString().split(".");
      return r[0] !== s[0] ? parseInt(r[0]) - parseInt(s[0]) : parseInt(r[1]) - parseInt(s[1]);
    }
    return 0;
  },
  ADID(t, e) {
    const n = t.getArea(), i = e.getArea();
    if (n < i)
      return 1;
    if (n > i)
      return -1;
    if (n === i)
      return 0;
    if (n === i) {
      const r = t.id.toString().split("."), s = e.id.toString().split(".");
      return r[0] !== s[0] ? parseInt(r[0]) - parseInt(s[0]) : parseInt(r[1]) - parseInt(s[1]);
    }
    return 0;
  },
  //by id ascending
  ID(t, e) {
    const n = t.id.toString().split("."), i = e.id.toString().split(".");
    return n[0] !== i[0] ? parseInt(n[0]) - parseInt(i[0]) : parseInt(n[1]) - parseInt(i[1]);
  },
  IDDesc(t, e) {
    const n = t.id.toString().split("."), i = e.id.toString().split(".");
    return n[0] !== i[0] ? parseInt(i[0]) - parseInt(n[0]) : parseInt(i[1]) - parseInt(n[1]);
  },
  StockID(t, e) {
    const n = t.stock.id.toString().split("."), i = e.stock.id.toString().split(".");
    return n[0] !== i[0] ? parseInt(n[0]) - parseInt(i[0]) : parseInt(n[1]) - parseInt(i[1]);
  },
  StockIDAD(t, e) {
    const n = t.stock.id.toString().split("."), i = e.stock.id.toString().split(".");
    if (n[0] !== i[0])
      return parseInt(n[0]) - parseInt(i[0]);
    if (n[1] !== i[1])
      return parseInt(n[1]) - parseInt(i[1]);
    const r = t.getArea(), s = e.getArea();
    if (r < s)
      return 1;
    if (r > s)
      return -1;
  },
  parentID(t, e) {
    return t.parentID - e.parentID;
  },
  YX(t, e) {
    if (t.y < e.y)
      return -1;
    if (t.y > e.y)
      return 1;
    if (t.y === e.y)
      return 0;
    if (t.x < e.x)
      return -1;
    if (t.x > e.x)
      return 1;
  },
  XY(t, e) {
    if (t.x < e.x)
      return -1;
    if (t.x > e.x)
      return 1;
    if (t.x === e.x)
      return 0;
    if (t.y < e.y)
      return -1;
    if (t.y > e.y)
      return 1;
  },
  subset(t, e) {
    if (t.totalLength < e.totalLength)
      return 1;
    if (t.totalLength > e.totalLength)
      return -1;
    if (t.area === e.area)
      return 0;
    if (t.area < e.area)
      return 1;
    if (t.area > e.area)
      return -1;
  },
  placementOrder(t, e) {
    return (t == null ? void 0 : t.placementOrder) - (e == null ? void 0 : e.placementOrder);
  },
  typePlacementOrder(t, e) {
    if (t.offcut && !e.offcut)
      return 1;
    if (!t.offcut && e.offcut)
      return 0;
    if (t.offcut === e.offcut)
      return t.placementOrder - e.placementOrder;
  },
  stockIDTypePlacementOrder(t, e) {
    const n = t.stock.id.toString().split("."), i = e.stock.id.toString().split(".");
    if (n[0] !== i[0])
      return parseInt(n[0]) - parseInt(i[0]);
    if (n[1] !== i[1])
      return parseInt(n[1]) - parseInt(i[1]);
    if (t.offcut && !e.offcut)
      return 1;
    if (!t.offcut && e.offcut)
      return 0;
    if (t.offcut === e.offcut)
      return t.placementOrder - e.placementOrder;
  },
  offcutPlacementOrder(t, e) {
    var r, s;
    if (!((r = t == null ? void 0 : t.stock) != null && r.id) || !((s = e == null ? void 0 : e.stock) != null && s.id))
      return 0;
    const n = t.stock.id.toString().split("."), i = e.stock.id.toString().split(".");
    return n[0] !== i[0] ? parseInt(n[0]) - parseInt(i[0]) : n[1] !== i[1] ? parseInt(n[1]) - parseInt(i[1]) : (t == null ? void 0 : t.placementOrder) - (e == null ? void 0 : e.placementOrder);
  },
  groupPlacementOrder(t, e) {
    if (t.placementOrder - e.placementOrder, t.placementOrder > e.placementOrder)
      return 1;
    if (t.placementOrder < e.placementOrder)
      return -1;
    if (t.groupPlacementOrder === e.groupPlacementOrder)
      return 0;
    if (t.groupPlacementOrder > e.groupPlacementOrder)
      return 1;
    if (t.groupPlacementOrder < e.groupPlacementOrder)
      return -1;
  },
  swapFirstTwo(t) {
    const e = t[1];
    t[1] = t[0], t[0] = e;
  },
  //Fisher-Yates shuffle
  shuffle(t) {
    for (let e = t.length - 1; e > 0; e--) {
      const n = Math.floor(Math.random() * (e + 1));
      [t[e], t[n]] = [t[n], t[e]];
    }
  },
  /**
   * generator function which accepts a dimension to cater for shape rotation lock
   */
  fillThenArea(t) {
    return function(e, n) {
      return e.getLongSide(t) > n.getLongSide(t) ? -1 : e.getLongSide(t) < n.getLongSide(t) ? 1 : e.getArea() > n.getArea() ? -1 : e.getArea() < n.getArea() ? 1 : 0;
    };
  },
  aspect(t, e) {
    const n = t.getAspect(), i = e.getAspect();
    return n > i ? -1 : n < i ? 1 : 0;
  }
};
function w1(t, e, n = "x") {
  if (!e)
    return !1;
  const i = n === "x" ? "l" : "w";
  return !!(ut.greaterThanOrEqualTo(t[n], e[n]) && ut.lessThanOrEqualTo(t[n] + t[i], e[n] + e[i]));
}
function Eu(t, e, n) {
  if (t === "above")
    return dd(e, n);
  if (t === "right")
    return pd(e, n);
  if (t === "below")
    return k1(e, n);
  if (t === "left")
    return x1(e, n);
}
function dd(t, e) {
  return e.y === t.getTopPosition() ? ut.greaterThanOrEqualTo(e.getRightPosition(!1), t.x) && ut.lessThanOrEqualTo(e.getRightPosition(!1), t.getRightPosition(!1)) : !1;
}
function pd(t, e) {
  return e.x === t.getRightPosition() ? ut.greaterThanOrEqualTo(e.getTopPosition(!1), t.y) && ut.lessThanOrEqualTo(e.getTopPosition(!1), t.getTopPosition(!1)) : !1;
}
function x1(t, e) {
  return pd(e, t);
}
function k1(t, e) {
  return dd(e, t);
}
function md(t) {
  return t ? (t = t.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9.,_-]/gim, ""), t.trim()) : null;
}
function gd(t, e = 50) {
  return t ? (t = t.substring(0, e), t.trim()) : null;
}
class S1 {
  constructor(e) {
    v(this, "x1");
    v(this, "x2");
    v(this, "y1");
    v(this, "y2");
    v(this, "direction");
    v(this, "shapeCollisions");
    this.x1 = e.x1, this.x2 = e.x2, this.y1 = e.y1, this.y2 = e.y2, this.direction = E1(this);
  }
  getCoordinates() {
    return {
      x1: this.x1,
      x2: this.x2,
      y1: this.y1,
      y2: this.y2
    };
  }
}
function E1(t) {
  return typeof t > "u" || !ut.isNumber(t.x1) || !ut.isNumber(t.x2) || !ut.isNumber(t.y1) || !ut.isNumber(t.y2) ? null : t.x1 === t.x2 && t.y1 !== t.y2 ? "w" : t.y1 === t.y2 && t.x1 !== t.x2 ? "l" : null;
}
function T1(t) {
  if (t != null && t.direction)
    switch (t.direction) {
      case "l":
        return t.x2 - t.x1;
      case "w":
        return t.y2 - t.y1;
    }
  switch (t.type) {
    case "top":
    case "bottom":
      return t.x2 - t.x1;
    case "left":
    case "right":
      return t.y2 - t.y1;
  }
  return 0;
}
class fo extends S1 {
  //used to mark for removal
  constructor(n) {
    var i, r, s, o;
    n.x2 < n.x1 && ([n.x1, n.x2] = [n.x2, n.x1]), n.y2 < n.y1 && ([n.y1, n.y2] = [n.y2, n.y1]);
    super(n);
    v(this, "stock");
    v(this, "stockId");
    v(this, "type", null);
    v(this, "guillotine");
    v(this, "guillotineData");
    v(this, "isTrim");
    v(this, "distances");
    v(this, "beamTrimX1");
    v(this, "beamTrimY1");
    v(this, "remove");
    A(n == null ? void 0 : n.stock) && (((r = (i = n.stock) == null ? void 0 : i.constructor) == null ? void 0 : r.name) === "Stock" ? this.stock = n.stock : this.stock = new In(n.stock), this.stockId = this.stock.id), this.stockId = (s = n == null ? void 0 : n.stock) == null ? void 0 : s.id, this.type = n.type ?? null, this.guillotine = n.guillotine, this.guillotineData = A(n.guillotineData) ? n.guillotineData : {}, this.guillotineData.ptxDummyCut = (n == null ? void 0 : n.ptxDummyCut) || ((o = n == null ? void 0 : n.guillotineData) == null ? void 0 : o.ptxDummyCut) || !1, this.isTrim = A(n.isTrim) ? n.isTrim : !1, this.distances = A(n.distances) ? n.distances : {}, this.beamTrimX1 = n.beamTrimX1, this.beamTrimY1 = n.beamTrimY1;
  }
  //compress for saving / transfer
  compress() {
    var n;
    this.stockId = (this == null ? void 0 : this.stockId) ?? ((n = this == null ? void 0 : this.stock) == null ? void 0 : n.id), delete this.shapeCollisions, delete this.stock;
  }
  clone() {
    const n = structuredClone(this);
    return new fo(n);
  }
  getCoordinates() {
    return {
      x1: this.x1,
      x2: this.x2,
      y1: this.y1,
      y2: this.y2
    };
  }
  trim() {
    this.direction === "l" ? (this.x1 = this.x1 < 0 ? 0 : this.x1, this.x2 = this.x2 > this.stock.l ? this.stock.l : this.x2) : this.direction === "w" && (this.y1 = this.y1 < 0 ? 0 : this.y1, this.y2 = this.y2 > this.stock.w ? this.stock.w : this.y2);
  }
  lookupDirectionByType(n) {
    const r = {
      top: "l",
      bottom: "l",
      left: "w",
      right: "w"
    }[n];
    if (r)
      return r;
    throw new Error("no direction found in lookupDirectionByType");
  }
  isInsideStock() {
    switch (this.type) {
      case "bottom":
        return ut.greaterThan(this.y1 + this.stock.getBladeWidth() / 2, 0);
      case "left":
        return ut.greaterThan(this.x1 + this.stock.getBladeWidth() / 2, 0);
      case "top":
        return ut.lessThan(this.y1 - this.stock.getBladeWidth() / 2, this.stock.w);
      case "right":
        return ut.lessThan(this.x1 - this.stock.getBladeWidth() / 2, this.stock.l);
      default:
        return !0;
    }
  }
  /**
   * the cuts are visualised differently from their exact dimensions
   * @param {string} coord
   */
  getVisCoords(n) {
    return this[n];
  }
  getLength() {
    return T1(this);
  }
  getArea() {
    const n = this.getLength();
    return n ? n * this.stock.getBladeWidth() : 0;
  }
}
class Lt {
  constructor(e, n) {
    v(this, "x");
    v(this, "y");
    v(this, "a");
    //shape id
    v(this, "b");
    //shape id
    v(this, "fromDirection");
    v(this, "type");
    v(this, "corner");
    v(this, "grid");
    v(this, "raycast");
    v(this, "collision");
    v(this, "tooClose");
    this.x = parseFloat(e), this.y = parseFloat(n), this.validate();
  }
  clone(e = null, n = null) {
    const i = structuredClone(this), r = new Lt(e === null ? i.x : e, n === null ? i.y : n);
    for (const s in i)
      s === "x" || s === "y" || (r[s] = i[s]);
    return r;
  }
  validate() {
    if (isNaN(this.x) || isNaN(this.y))
      throw new Error("invalid point coordinates");
  }
  collidesWith(e) {
    return this.x >= e.x && this.x <= e.x + e.l && this.y >= e.y && this.y <= e.y + e.w;
  }
  isIdenticalTo(e) {
    return this.x === e.x && this.y === e.y;
  }
  //given a grid pont, get the available positions for this shape
  //does not cater for diagonals
  getAvailableShapePositions(e) {
    const n = /* @__PURE__ */ new Set();
    return (e == null ? void 0 : e.cutType) !== "efficiency" ? (this.corner === "topLeft" && (this.grid === "top" || !this.grid) && n.add("topRight"), this.corner === "bottomRight" && (this.grid === "right" || !this.grid) && n.add("topRight"), n) : (this.corner === "topRight" && ((this.grid === "top" || !this.grid) && n.add("topLeft"), (this.grid === "right" || !this.grid) && n.add("bottomRight")), this.corner === "topLeft" && ((this.grid === "top" || !this.grid) && n.add("topRight"), (this.grid === "left" || !this.grid) && n.add("bottomLeft")), this.corner === "bottomRight" && ((this.grid === "bottom" || !this.grid) && n.add("bottomLeft"), (this.grid === "right" || !this.grid) && n.add("topRight")), this.corner === "bottomLeft" && ((this.grid === "bottom" || !this.grid) && n.add("bottomRight"), (this.grid === "left" || !this.grid) && n.add("topLeft")), n);
  }
}
class ho {
  constructor(e = []) {
    v(this, "points", /* @__PURE__ */ new Map());
    e.forEach((n) => this.addPoint(n));
  }
  addPoint(e) {
    if (!(e instanceof Lt))
      throw new Error("p is not an instance of Point");
    this.points.has(this.createKey(e)) || (e.validate(), this.points.set(this.createKey(e), e));
  }
  createKey(e) {
    return `${e.x},${e.y}`;
  }
  getPoint(e) {
    return this.points.get(this.createKey(e));
  }
  addPoints(e) {
    e.forEach((n) => {
      n && (n.validate(), this.addPoint(n));
    });
  }
  deletePoint(e) {
    e.validate(), this.points.delete(this.createKey(e));
  }
  deletePoints(e) {
    e.forEach((n) => {
      n.validate(), this.deletePoint(n);
    });
  }
  clear() {
    this.points.clear();
  }
  toArray() {
    return Array.from(this.points.values());
  }
  contains(e) {
    return this.points.has(this.createKey(e));
  }
}
const pn = {
  bottom: (t, e, n) => {
    const i = new Lt(t.x, t.y - n);
    return i.corner = e, i.grid = "bottom", i;
  },
  left: (t, e, n) => {
    const i = new Lt(t.x - n, t.y);
    return i.corner = e, i.grid = "left", i;
  },
  right: (t, e, n) => {
    const i = new Lt(t.x + n, t.y);
    return i.corner = e, i.grid = "right", i;
  },
  top: (t, e, n) => {
    const i = new Lt(t.x, t.y + n);
    return i.corner = e, i.grid = "top", i;
  }
};
function A1(t, e, n, i) {
  var o, a, l, c, u, f;
  const r = new ho();
  if (n.toArray().sort(yd).forEach((h) => {
    const p = h.corner;
    if (!i)
      r.addPoint(h);
    else
      switch (p) {
        case "topRight":
          r.addPoint(pn.top(h, p, i)), r.addPoint(pn.right(h, p, i));
          break;
        case "topLeft":
          r.addPoint(pn.top(h, p, i)), r.addPoint(pn.left(h, p, i));
          break;
        case "bottomRight":
          r.addPoint(pn.bottom(h, p, i)), r.addPoint(pn.right(h, p, i));
          break;
        case "bottomLeft":
          r.addPoint(pn.bottom(h, p, i)), r.addPoint(pn.left(h, p, i));
          break;
      }
    const y = r.toArray();
    if (i)
      for (let k = y.length; k--; ) {
        const w = y[k];
        n.contains(w) && r.deletePoint(w);
      }
    else
      for (let k = y.length; k--; ) {
        const w = y[k];
        for (let g = t.length; g--; ) {
          const b = t[g];
          if (w.x === b.x && w.y === b.y) {
            r.deletePoint(w);
            break;
          }
        }
      }
  }), i) {
    const h = /* @__PURE__ */ new Set();
    let p, y, k, w;
    ((o = e == null ? void 0 : e.constructor) == null ? void 0 : o.name) === "Stock" && (e != null && e.trimmed) || ((a = e == null ? void 0 : e.constructor) == null ? void 0 : a.name) === "Segment" ? (p = 0, y = 0, k = e.x + e.l, w = e.y + e.w) : (p = (l = e == null ? void 0 : e.trim) == null ? void 0 : l.x1, y = (c = e == null ? void 0 : e.trim) == null ? void 0 : c.y1, k = e.l - ((u = e == null ? void 0 : e.trim) == null ? void 0 : u.x2), w = e.w - ((f = e == null ? void 0 : e.trim) == null ? void 0 : f.y2));
    let g = r.toArray();
    for (let b = g.length; b--; ) {
      const x = g[b];
      (ut.lessThan(x.x, p) || ut.lessThan(x.y, y) || ut.greaterThan(x.x, k) || ut.greaterThan(x.y, w)) && g.splice(b, 1);
    }
    r.clear(), r.addPoints(g), h.clear(), g = r.toArray();
    for (let b = g.length; b--; ) {
      const x = g[b];
      for (let S = t.length; S--; ) {
        const O = t[S];
        if (x.collidesWith(O)) {
          r.deletePoint(x);
          break;
        }
      }
    }
  }
  return r;
}
function C1(t, e) {
  const n = new ho();
  return t.sort(yd), t.forEach((i) => {
    Ls(i) ? i.shapes.forEach((r) => {
      n.addPoints(r.getCoords(e));
    }) : n.addPoints(i.getCoords(e));
  }), n;
}
function O1(t = [], e, n) {
  const i = n.getBladeWidth(), r = C1(t === null ? e : t, n);
  return A1(e, n, r, i);
}
function yd(t, e) {
  return t.y === e.y ? e.x - t.x : e.y - t.y;
}
function P1(t, e, n) {
  const i = new ho();
  return e.getAvailableShapePositions(n).forEach((s) => {
    switch (s) {
      case "bottomLeft":
        i.addPoint(e.clone(e.x - t.l, e.y - t.w));
        break;
      case "bottomRight":
        i.addPoint(e.clone(e.x, e.y - t.w));
        break;
      case "topLeft":
        i.addPoint(e.clone(e.x - t.l, e.y));
        break;
      case "topRight":
        i.addPoint(e.clone(e.x, e.y));
        break;
    }
  }), N1(t, n, i), i;
}
function N1(t, e, n) {
  var l, c, u, f, h, p;
  let i, r, s, o;
  ((l = e == null ? void 0 : e.constructor) == null ? void 0 : l.name) === "Stock" && (e != null && e.trimmed) || ((c = e == null ? void 0 : e.constructor) == null ? void 0 : c.name) === "Segment" ? (i = 0, r = 0, s = e.x + e.l - t.l, o = e.y + e.w - t.w) : (i = (u = e == null ? void 0 : e.trim) == null ? void 0 : u.x1, r = (f = e == null ? void 0 : e.trim) == null ? void 0 : f.y1, s = e.l - ((h = e == null ? void 0 : e.trim) == null ? void 0 : h.x2) - t.l, o = e.w - ((p = e == null ? void 0 : e.trim) == null ? void 0 : p.y2) - t.w);
  const a = n.toArray();
  for (let y = a.length; y--; ) {
    const k = a[y];
    (ut.lessThan(k.x, i) || ut.lessThan(k.y, r) || ut.greaterThan(k.x, s) || ut.greaterThan(k.y, o) || k.x < 0 || k.y < 0) && n.deletePoint(k);
  }
}
/**
* @license Fraction.js v4.3.7 31/08/2023
* https://www.xarg.org/2014/03/rational-numbers-in-javascript/
*
* Copyright (c) 2023, Robert Eisele (robert@raw.org)
* Dual licensed under the MIT or GPL Version 2 licenses.
**/
var I1 = 2e3, j = {
  s: 1,
  n: 0,
  d: 1
};
function Ze(t, e) {
  if (isNaN(t = parseInt(t, 10)))
    throw ps();
  return t * e;
}
function Ct(t, e) {
  if (e === 0)
    throw xl();
  var n = Object.create(Se.prototype);
  n.s = t < 0 ? -1 : 1, t = t < 0 ? -t : t;
  var i = fi(t, e);
  return n.n = t / i, n.d = e / i, n;
}
function Tu(t) {
  for (var e = {}, n = t, i = 2, r = 4; r <= n; ) {
    for (; n % i === 0; )
      n /= i, e[i] = (e[i] || 0) + 1;
    r += 1 + 2 * i++;
  }
  return n !== t ? n > 1 && (e[n] = (e[n] || 0) + 1) : e[t] = (e[t] || 0) + 1, e;
}
var pe = function(t, e) {
  var n = 0, i = 1, r = 1, s = 0, o = 0, a = 0, l = 1, c = 1, u = 0, f = 1, h = 1, p = 1, y = 1e7, k;
  if (t != null)
    if (e !== void 0) {
      if (n = t, i = e, r = n * i, n % 1 !== 0 || i % 1 !== 0)
        throw D1();
    } else
      switch (typeof t) {
        case "object": {
          if ("d" in t && "n" in t)
            n = t.n, i = t.d, "s" in t && (n *= t.s);
          else if (0 in t)
            n = t[0], 1 in t && (i = t[1]);
          else
            throw ps();
          r = n * i;
          break;
        }
        case "number": {
          if (t < 0 && (r = t, t = -t), t % 1 === 0)
            n = t;
          else if (t > 0) {
            for (t >= 1 && (c = Math.pow(10, Math.floor(1 + Math.log(t) / Math.LN10)), t /= c); f <= y && p <= y; )
              if (k = (u + h) / (f + p), t === k) {
                f + p <= y ? (n = u + h, i = f + p) : p > f ? (n = h, i = p) : (n = u, i = f);
                break;
              } else
                t > k ? (u += h, f += p) : (h += u, p += f), f > y ? (n = h, i = p) : (n = u, i = f);
            n *= c;
          } else
            (isNaN(t) || isNaN(e)) && (i = n = NaN);
          break;
        }
        case "string": {
          if (f = t.match(/\d+|./g), f === null)
            throw ps();
          if (f[u] === "-" ? (r = -1, u++) : f[u] === "+" && u++, f.length === u + 1 ? o = Ze(f[u++], r) : f[u + 1] === "." || f[u] === "." ? (f[u] !== "." && (s = Ze(f[u++], r)), u++, (u + 1 === f.length || f[u + 1] === "(" && f[u + 3] === ")" || f[u + 1] === "'" && f[u + 3] === "'") && (o = Ze(f[u], r), l = Math.pow(10, f[u].length), u++), (f[u] === "(" && f[u + 2] === ")" || f[u] === "'" && f[u + 2] === "'") && (a = Ze(f[u + 1], r), c = Math.pow(10, f[u + 1].length) - 1, u += 3)) : f[u + 1] === "/" || f[u + 1] === ":" ? (o = Ze(f[u], r), l = Ze(f[u + 2], 1), u += 3) : f[u + 3] === "/" && f[u + 1] === " " && (s = Ze(f[u], r), o = Ze(f[u + 2], r), l = Ze(f[u + 4], 1), u += 5), f.length <= u) {
            i = l * c, r = /* void */
            n = a + i * s + c * o;
            break;
          }
        }
        default:
          throw ps();
      }
  if (i === 0)
    throw xl();
  j.s = r < 0 ? -1 : 1, j.n = Math.abs(n), j.d = Math.abs(i);
};
function L1(t, e, n) {
  for (var i = 1; e > 0; t = t * t % n, e >>= 1)
    e & 1 && (i = i * t % n);
  return i;
}
function M1(t, e) {
  for (; e % 2 === 0; e /= 2)
    ;
  for (; e % 5 === 0; e /= 5)
    ;
  if (e === 1)
    return 0;
  for (var n = 10 % e, i = 1; n !== 1; i++)
    if (n = n * 10 % e, i > I1)
      return 0;
  return i;
}
function R1(t, e, n) {
  for (var i = 1, r = L1(10, n, e), s = 0; s < 300; s++) {
    if (i === r)
      return s;
    i = i * 10 % e, r = r * 10 % e;
  }
  return 0;
}
function fi(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  for (; ; ) {
    if (t %= e, !t)
      return e;
    if (e %= t, !e)
      return t;
  }
}
function Se(t, e) {
  if (pe(t, e), this instanceof Se)
    t = fi(j.d, j.n), this.s = j.s, this.n = j.n / t, this.d = j.d / t;
  else
    return Ct(j.s * j.n, j.d);
}
var xl = function() {
  return new Error("Division by Zero");
}, ps = function() {
  return new Error("Invalid argument");
}, D1 = function() {
  return new Error("Parameters must be integer");
};
Se.prototype = {
  s: 1,
  n: 0,
  d: 1,
  /**
   * Calculates the absolute value
   *
   * Ex: new Fraction(-4).abs() => 4
   **/
  abs: function() {
    return Ct(this.n, this.d);
  },
  /**
   * Inverts the sign of the current fraction
   *
   * Ex: new Fraction(-4).neg() => 4
   **/
  neg: function() {
    return Ct(-this.s * this.n, this.d);
  },
  /**
   * Adds two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
   **/
  add: function(t, e) {
    return pe(t, e), Ct(
      this.s * this.n * j.d + j.s * this.d * j.n,
      this.d * j.d
    );
  },
  /**
   * Subtracts two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
   **/
  sub: function(t, e) {
    return pe(t, e), Ct(
      this.s * this.n * j.d - j.s * this.d * j.n,
      this.d * j.d
    );
  },
  /**
   * Multiplies two rational numbers
   *
   * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
   **/
  mul: function(t, e) {
    return pe(t, e), Ct(
      this.s * j.s * this.n * j.n,
      this.d * j.d
    );
  },
  /**
   * Divides two rational numbers
   *
   * Ex: new Fraction("-17.(345)").inverse().div(3)
   **/
  div: function(t, e) {
    return pe(t, e), Ct(
      this.s * j.s * this.n * j.d,
      this.d * j.n
    );
  },
  /**
   * Clones the actual object
   *
   * Ex: new Fraction("-17.(345)").clone()
   **/
  clone: function() {
    return Ct(this.s * this.n, this.d);
  },
  /**
   * Calculates the modulo of two rational numbers - a more precise fmod
   *
   * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
   **/
  mod: function(t, e) {
    if (isNaN(this.n) || isNaN(this.d))
      return new Se(NaN);
    if (t === void 0)
      return Ct(this.s * this.n % this.d, 1);
    if (pe(t, e), j.n === 0 && this.d === 0)
      throw xl();
    return Ct(
      this.s * (j.d * this.n) % (j.n * this.d),
      j.d * this.d
    );
  },
  /**
   * Calculates the fractional gcd of two rational numbers
   *
   * Ex: new Fraction(5,8).gcd(3,7) => 1/56
   */
  gcd: function(t, e) {
    return pe(t, e), Ct(fi(j.n, this.n) * fi(j.d, this.d), j.d * this.d);
  },
  /**
   * Calculates the fractional lcm of two rational numbers
   *
   * Ex: new Fraction(5,8).lcm(3,7) => 15
   */
  lcm: function(t, e) {
    return pe(t, e), j.n === 0 && this.n === 0 ? Ct(0, 1) : Ct(j.n * this.n, fi(j.n, this.n) * fi(j.d, this.d));
  },
  /**
   * Calculates the ceil of a rational number
   *
   * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
   **/
  ceil: function(t) {
    return t = Math.pow(10, t || 0), isNaN(this.n) || isNaN(this.d) ? new Se(NaN) : Ct(Math.ceil(t * this.s * this.n / this.d), t);
  },
  /**
   * Calculates the floor of a rational number
   *
   * Ex: new Fraction('4.(3)').floor() => (4 / 1)
   **/
  floor: function(t) {
    return t = Math.pow(10, t || 0), isNaN(this.n) || isNaN(this.d) ? new Se(NaN) : Ct(Math.floor(t * this.s * this.n / this.d), t);
  },
  /**
   * Rounds a rational number
   *
   * Ex: new Fraction('4.(3)').round() => (4 / 1)
   **/
  round: function(t) {
    return t = Math.pow(10, t || 0), isNaN(this.n) || isNaN(this.d) ? new Se(NaN) : Ct(Math.round(t * this.s * this.n / this.d), t);
  },
  /**
   * Rounds a rational number to a multiple of another rational number
   *
   * Ex: new Fraction('0.9').roundTo("1/8") => 7 / 8
   **/
  roundTo: function(t, e) {
    return pe(t, e), Ct(this.s * Math.round(this.n * j.d / (this.d * j.n)) * j.n, j.d);
  },
  /**
   * Gets the inverse of the fraction, means numerator and denominator are exchanged
   *
   * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
   **/
  inverse: function() {
    return Ct(this.s * this.d, this.n);
  },
  /**
   * Calculates the fraction to some rational exponent, if possible
   *
   * Ex: new Fraction(-1,2).pow(-3) => -8
   */
  pow: function(t, e) {
    if (pe(t, e), j.d === 1)
      return j.s < 0 ? Ct(Math.pow(this.s * this.d, j.n), Math.pow(this.n, j.n)) : Ct(Math.pow(this.s * this.n, j.n), Math.pow(this.d, j.n));
    if (this.s < 0)
      return null;
    var n = Tu(this.n), i = Tu(this.d), r = 1, s = 1;
    for (var o in n)
      if (o !== "1") {
        if (o === "0") {
          r = 0;
          break;
        }
        if (n[o] *= j.n, n[o] % j.d === 0)
          n[o] /= j.d;
        else
          return null;
        r *= Math.pow(o, n[o]);
      }
    for (var o in i)
      if (o !== "1") {
        if (i[o] *= j.n, i[o] % j.d === 0)
          i[o] /= j.d;
        else
          return null;
        s *= Math.pow(o, i[o]);
      }
    return j.s < 0 ? Ct(s, r) : Ct(r, s);
  },
  /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/
  equals: function(t, e) {
    return pe(t, e), this.s * this.n * j.d === j.s * j.n * this.d;
  },
  /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/
  compare: function(t, e) {
    pe(t, e);
    var n = this.s * this.n * j.d - j.s * j.n * this.d;
    return (0 < n) - (n < 0);
  },
  simplify: function(t) {
    if (isNaN(this.n) || isNaN(this.d))
      return this;
    t = t || 1e-3;
    for (var e = this.abs(), n = e.toContinued(), i = 1; i < n.length; i++) {
      for (var r = Ct(n[i - 1], 1), s = i - 2; s >= 0; s--)
        r = r.inverse().add(n[s]);
      if (Math.abs(r.sub(e).valueOf()) < t)
        return r.mul(this.s);
    }
    return this;
  },
  /**
   * Check if two rational numbers are divisible
   *
   * Ex: new Fraction(19.6).divisible(1.5);
   */
  divisible: function(t, e) {
    return pe(t, e), !(!(j.n * this.d) || this.n * j.d % (j.n * this.d));
  },
  /**
   * Returns a decimal representation of the fraction
   *
   * Ex: new Fraction("100.'91823'").valueOf() => 100.91823918239183
   **/
  valueOf: function() {
    return this.s * this.n / this.d;
  },
  /**
   * Returns a string-fraction representation of a Fraction object
   *
   * Ex: new Fraction("1.'3'").toFraction(true) => "4 1/3"
   **/
  toFraction: function(t) {
    var e, n = "", i = this.n, r = this.d;
    return this.s < 0 && (n += "-"), r === 1 ? n += i : (t && (e = Math.floor(i / r)) > 0 && (n += e, n += " ", i %= r), n += i, n += "/", n += r), n;
  },
  /**
   * Returns a latex representation of a Fraction object
   *
   * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
   **/
  toLatex: function(t) {
    var e, n = "", i = this.n, r = this.d;
    return this.s < 0 && (n += "-"), r === 1 ? n += i : (t && (e = Math.floor(i / r)) > 0 && (n += e, i %= r), n += "\\frac{", n += i, n += "}{", n += r, n += "}"), n;
  },
  /**
   * Returns an array of continued fraction elements
   *
   * Ex: new Fraction("7/8").toContinued() => [0,1,7]
   */
  toContinued: function() {
    var t, e = this.n, n = this.d, i = [];
    if (isNaN(e) || isNaN(n))
      return i;
    do
      i.push(Math.floor(e / n)), t = e % n, e = n, n = t;
    while (e !== 1);
    return i;
  },
  /**
   * Creates a string representation of a fraction with all digits
   *
   * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
   **/
  toString: function(t) {
    var e = this.n, n = this.d;
    if (isNaN(e) || isNaN(n))
      return "NaN";
    t = t || 15;
    var i = M1(e, n), r = R1(e, n, i), s = this.s < 0 ? "-" : "";
    if (s += e / n | 0, e %= n, e *= 10, e && (s += "."), i) {
      for (var o = r; o--; )
        s += e / n | 0, e %= n, e *= 10;
      s += "(";
      for (var o = i; o--; )
        s += e / n | 0, e %= n, e *= 10;
      s += ")";
    } else
      for (var o = t; e && o--; )
        s += e / n | 0, e %= n, e *= 10;
    return s;
  }
};
function F1(t) {
  if (!t)
    return null;
  if (t = t.toString().trim(), typeof navigator > "u" || typeof navigator.language > "u")
    return parseFloat(t);
  const { thousandsSeparator: e, decimalSeparator: n } = $1();
  return t = Array.from(t, (i) => i === e ? "" : i === n ? "." : i).join(""), parseFloat(t);
}
function $1() {
  const t = navigator.language, e = 123456789e-2.toLocaleString(t), n = e.replace(/\d/g, ""), i = Array.from(new Set(n.split("")));
  let r = "", s = "";
  if (i.length === 1)
    s = i[0];
  else if (i.length === 2) {
    const o = e[e.length - 3];
    i.includes(o) ? (s = o, r = i.find((a) => a !== o)) : (s = i[1], r = i[0]);
  }
  return { thousandsSeparator: r, decimalSeparator: s };
}
function bd(t) {
  if (!t || typeof t == "number")
    return !1;
  t = t.toString().replace(/[^0-9/ ]/g, "");
  const e = /\b\d+\/\d+\b/g;
  return t.match(e);
}
function B1(t, e = !1) {
  if (!A(t))
    return null;
  if (t === 0)
    return "0";
  let n = t.toString().trim();
  if (!n)
    return null;
  if (bd(t))
    return n = n.replace(/[^0-9/,. - ]/g, ""), n;
  {
    n = n.replace(/[^0-9,. -]/g, ""), n.startsWith(".") && (n = "0" + n);
    let i;
    return e ? i = F1(n) : i = parseFloat(n), i ? i.toString() : null;
  }
}
function R(t, e = "decimal", n = !1, i = !1, r = 0) {
  if (!A(t) || !e)
    return null;
  if (e !== "decimal" && e !== "fraction")
    return console.error("incorrect conversion type specified for convertUnit"), null;
  try {
    const s = B1(t, i);
    if (!s)
      return 0;
    let o;
    if (e === "fraction")
      if (bd(s))
        o = new Se(s);
      else {
        const a = parseFloat(s);
        Number.isInteger(a) ? o = new Se(s) : o = new Se(a);
      }
    else
      o = new Se(s);
    switch (e) {
      case "fraction":
        if (r > 0) {
          const a = o.valueOf(), l = Math.round(a * r) / r;
          o = new Se(l);
        }
        return o.toFraction(!0);
      case "decimal":
        return n === !1 || typeof n != "number" ? o.valueOf() : parseFloat(parseFloat(o.round(10)).toFixed(n));
      default:
        return 0;
    }
  } catch (s) {
    return console.error(s), 0;
  }
}
const ge = {
  banding: (t) => {
    const e = [];
    if (!A(t))
      return [];
    if (typeof t != "object")
      return e.push("Banding must be an object."), e;
    Object.entries(t).forEach(([n, i]) => {
      A(i) && i !== !0 && i !== !1 && e.push(`Banding ${n} must be a boolean.`);
    });
  },
  //when trim provided as number
  partTrim(t, e) {
    e = R(e);
    const n = R(t.l), i = R(t.w), r = n - e * 2, s = i - e * 2;
    return r < 0 || s < 0 ? [
      `When applying trim of ${e}, part is ${r} x ${s}.`
    ] : [];
  },
  //when trim provided as object
  trim: (t) => {
    const e = [];
    if (!A(t.trim))
      return e;
    if (["x1", "x2", "y1", "y2"].forEach((n) => {
      A(t.trim[n]) || (t.trim[n] = 0);
    }), !va(t) || va(t) && !(t != null && t.trimmed)) {
      const n = R(t.l), i = R(t.w), r = R(t.trim.x1), s = R(t.trim.x2), o = R(t.trim.y1), a = R(t.trim.y2);
      Object.entries({ x1: r, x2: s, y1: o, y2: a }).forEach(([c, u]) => {
        isNaN(u) && e.push(`The value of trim ${W1[c]} is not understood.`);
      }), n && i && n > 0 && i > 0 && (r + s >= t.l && e.push(`Trim W1 + W2 = ${r + s}, which is greater than or equal to total length of ${n}.`), a + a >= t.w && e.push(`Trim L1 + L2 = ${o + a}, which is greater than or equal to total width of ${i}.`));
    }
    return e;
  },
  x: (t) => {
    const e = [];
    return A(t) ? (t = R(t), isNaN(t) ? (e.push("X value is not understood."), e) : (t < 0 && e.push("X must be greater than or equal to zero."), e)) : e;
  },
  y: (t) => {
    const e = [];
    return A(t) && (t = R(t), isNaN(t) && e.push("Y value is not understood."), t < 0 && e.push("Y must be greater than or equal to zero.")), e;
  },
  l: (t) => {
    const e = [];
    return A(t) ? (t = R(t), isNaN(t) ? (e.push("Width value is not understood."), e) : (t <= 0 && e.push("Length must be greater than zero."), e)) : (e.push("Length is required."), e);
  },
  w: (t) => {
    const e = [];
    return A(t) ? (t = R(t), isNaN(t) ? (e.push("Width value is not understood."), e) : (t <= 0 && e.push("Width must be greater than zero."), e)) : (e.push("Width is required."), e);
  },
  t: (t) => {
    const e = [];
    return A(t) ? (t = R(t), isNaN(t) ? (e.push("Thickness value is not understood."), e) : (t <= 0 && e.push("Thickness must be greater than zero."), e)) : e;
  },
  q: (t) => {
    const e = [];
    return A(t) ? (t = parseInt(t), isNaN(t) ? (e.push("Quantity value is not understood."), e) : (t <= 0 && e.push("Quantity should be greater than or equal to zero."), e)) : e;
  },
  orientationLock: (t) => {
    const e = [];
    return A(t) && (t = t.toLowerCase(), t !== "l" && t !== "w" && e.push("Orientation lock must be l or w.")), e;
  },
  grain: (t) => {
    const e = [];
    return A(t) && (t = t.toLowerCase(), t !== "l" && t !== "w" && e.push("Grain must be l or w.")), e;
  },
  stockMatch: (t, e, n = 0) => {
    t.applyPartTrim(n);
    const i = X1([t], e);
    if (!i)
      return [];
    const r = [];
    if (i.unusableShapes.length) {
      const s = i.unusableShapes[0], o = s.stockMatch;
      o.fit || r.push(`Cannot fit in any stock. Part size is ${s.l} x ${s.w}.`), o.material || r.push("No matching stock material found."), o.thickness || r.push("No matching stock thickness found."), o.width || r.push("No matching stock width found (required for linear calculations).");
    }
    return r;
  }
};
class ya {
  constructor({ x: e, y: n, diameter: i, depth: r = 0, side: s = 0, type: o = null }) {
    v(this, "x");
    v(this, "y");
    v(this, "diameter");
    v(this, "depth");
    v(this, "side");
    v(this, "valid");
    v(this, "type");
    this.x = e, this.y = n, this.diameter = i, this.depth = r, this.side = s, this.type = o;
  }
  getXDrawPosition(e) {
    let n = 0;
    const i = R(this.x);
    if (e.rot) {
      const r = R(this.y);
      n = e.l - r + ("x" in e ? e.x : 0);
    } else
      n = i + ("x" in e ? e.x : 0);
    return n;
  }
  getYDrawPosition(e, n, i) {
    let r = e.rot ? R(this.x) : R(this.y);
    return r += "y" in e ? e.y : 0, n === 1 && i && (r = i.w - r), r;
  }
  shouldShow(e, n) {
    return this.side === n || this.depth === 0 || R(this.depth) >= R(e.t);
  }
  getDistanceToEdge(e) {
    const n = this.x, i = this.y, r = this.diameter / 2, s = R(e.getLongSide()), o = R(e.getShortSide()), a = e.machining.corners.map((y) => y.type ? y.size : 0), l = [
      {
        edge: "left",
        distance: n - r
      },
      {
        edge: "right",
        distance: s - n - r
      },
      {
        edge: "bottom",
        distance: o - i - r
      },
      {
        edge: "top",
        distance: i - r
      }
    ], c = e.machining.corners.map((y, k) => {
      const w = k === 0 || k === 3, g = k < 2, b = w ? n : s - n;
      let x = null;
      this.side === 0 ? x = g ? i : o - i : this.side === 1 && (x = g ? o - i : i);
      const S = Math.sqrt(b * b + x * x);
      return {
        c: y,
        distance: S
      };
    }), u = Math.min(...l.map((y) => y.distance)), f = Math.min(...c.map((y) => y.distance)), h = c.findIndex((y) => y.distance === f), p = e.machining.corners[h];
    if (p && p.type === "radius") {
      let y = h === 0 || h === 3 ? 0 : s, k = h < 2 ? 0 : o;
      const w = h < 2;
      y += h === 0 || h === 3 ? a[h] : -a[h], k += w ? a[h] : -a[h];
      const b = n - y, x = h < 2;
      let S;
      this.side === 0 ? S = x ? i : o - i : this.side === 1 && (S = x ? o - i : i);
      const O = S - k, P = Math.sqrt(b * b + O * O), D = a[h] - P - r;
      let z = !1;
      return p.index === 0 ? z = n <= y && S <= k : p.index === 1 ? z = n >= y && S <= k : p.index === 2 ? z = n >= y && S >= k : p.index === 3 && (z = n <= y && S >= k), z && D < u ? D : u;
    } else if (p && p.type === "bevel") {
      let y, k, w;
      p.index === 0 ? (y = 1, k = 1, w = -p.size) : p.index === 1 ? (y = 1, k = -1, w = -s + p.size) : p.index === 2 ? (y = 1, k = 1, w = -s - o + p.size) : p.index === 3 && (y = -1, k = 1, w = -o + p.size);
      const g = p.index === 0 ? 1 : -1, b = (y * n + k * i + w) / Math.sqrt(y * y + k * k) * g - r;
      return b < u ? b : u;
    } else
      return u;
  }
  validate(e, n) {
    const i = [];
    return (!this.x || !this.y || !this.diameter) && i.push({
      index: n,
      message: "X, Y & diameter are all required"
    }), R(this.depth) < 0 && i.push({
      index: n,
      message: "Depth cannot be negative"
    }), "t" in e && R(e.t) > 0 && R(this.depth) > R(e.t) && i.push({
      index: n,
      message: "Depth cannot be greater than part thickness"
    }), (!("t" in e) || !e.t) && R(this.depth) > 0 && i.push({
      index: n,
      message: "Part thickness is not defined"
    }), this.getDistanceToEdge(e) < 0 && i.push({
      index: n,
      message: "Outside of part"
    }), i.length ? this.valid = !1 : this.valid = !0, i;
  }
}
class Au {
  constructor({
    position: e = null,
    //from left or bottom
    edge: n = "x1",
    side: i = 0,
    numHoles: r = null,
    diameter: s = 0,
    depth: o = 0,
    distanceFromEdge: a = 0,
    outerSpacing: l,
    hingeLength: c = 0,
    minimumHoleDistance: u = 0,
    positionLimit: f = 0
  }, h) {
    v(this, "position");
    v(this, "edge");
    v(this, "side");
    v(this, "numHoles");
    v(this, "holes", []);
    v(this, "diameter");
    v(this, "depth");
    v(this, "distanceFromEdge");
    v(this, "outerSpacing");
    v(this, "hingeLength");
    v(this, "minimumHoleDistance");
    v(this, "positionLimit");
    v(this, "valid");
    this.position = e, this.edge = n, this.side = i, this.numHoles = r, this.diameter = s, this.depth = o, this.distanceFromEdge = a, this.outerSpacing = l, this.hingeLength = c, this.minimumHoleDistance = u, this.positionLimit = f, h && this.createHoles(h);
  }
  getHoleSpacing() {
    const e = R(this.hingeLength) - R(this.outerSpacing) * 2, n = this.numHoles - 1;
    return e / n;
  }
  getHoleXPosition(e, n) {
    let i = 0;
    const r = this.getHoleSpacing();
    switch (this.edge) {
      case "x1":
        i = this.distanceFromEdge;
        break;
      case "x2":
        i = e.getLongSide() - R(this.distanceFromEdge);
        break;
      case "y1":
      case "y2":
        i = R(this.position) + R(this.outerSpacing) + r * n;
        break;
    }
    return i;
  }
  getHoleYPosition(e, n) {
    let i = 0;
    const r = this.getHoleSpacing();
    switch (this.edge) {
      case "x1":
      case "x2":
        i = R(this.position) + R(this.outerSpacing) + r * n;
        break;
      case "y1":
        i = R(this.distanceFromEdge);
        break;
      case "y2":
        i = e.getShortSide() - R(this.distanceFromEdge);
        break;
    }
    return i;
  }
  createHoles(e) {
    this.holes = [];
    for (let n = 0; n < this.numHoles; n++) {
      const i = new ya({
        x: this.getHoleXPosition(e, n),
        y: this.getHoleYPosition(e, n),
        diameter: this.diameter,
        depth: this.depth,
        side: this.side,
        type: "hinge"
      });
      this.holes.push(i);
    }
    return this.holes;
  }
  validate(e, n) {
    const i = [];
    return this.holes.forEach((r, s) => {
      const o = r.validate(e, s).map((a) => (a.index = n, a.message = `Hole ${s + 1}: ${a.message}`, a));
      i.push(...o);
    }), i.length ? this.valid = !1 : this.valid = !0, i;
  }
}
class Cu {
  constructor({ type: e = "radius", size: n, index: i }) {
    v(this, "type");
    v(this, "size");
    v(this, "index");
    v(this, "valid");
    this.type = e, this.size = n, this.index = i;
  }
  validate(e, n) {
    const i = e.getShortSide(), r = [];
    if (this.type === null) {
      this.size = null;
      const s = ["a", "b", "c", "d"][this.index];
      e.banding[s] = !1, e.bandingType[s] = "";
    }
    return this.type && R(this.size) <= 0 && r.push({
      index: n,
      message: "Corner size cannot be zero or negative"
    }), this.type && R(this.size) > i / 2 && (this.size = i / 2), r.length ? this.valid = !1 : this.valid = !0, r;
  }
}
let vd = class {
  //shelfHoles?: ShelfHoles[] = [];
  constructor({ holes: e = [], hingeHoles: n = [], corners: i = [] } = {}) {
    v(this, "holes", []);
    v(this, "corners", []);
    v(this, "hingeHoles", []);
    i && i.length === 4 ? this.corners = i.map((r) => new Cu(r)) : [0, 1, 2, 3].forEach((r) => {
      this.corners.push(new Cu({
        type: null,
        size: null,
        index: r
      }));
    }), e && (this.holes = e.map((r) => new ya(r))), n && (this.hingeHoles = n.map((r) => new Au(r)));
  }
  validateEverything(e) {
    const n = this.validate(e, "holes"), i = this.validate(e, "hingeHoles"), r = this.validate(e, "corners");
    e.issues.push(...n.map((s) => `Part ${e.parentID} hole issue: ${s.message}`)), e.issues.push(...i.map((s) => `Part ${e.parentID} hinge hole issue: ${s.message}`)), e.issues.push(...r.map((s) => `Part ${e.parentID} corner issue: ${s.message}`));
  }
  validate(e, n) {
    const i = [];
    return i.push(...this.validateAll(e, n)), i;
  }
  validateAll(e, n) {
    if (!e)
      return [];
    const i = [];
    return this[n].forEach((r, s) => i.push(...r.validate(e, s))), i;
  }
  createHole(e, n, i, r = 0, s = 0) {
    const o = new ya({
      x: e,
      y: n,
      diameter: i,
      depth: r,
      side: s
    });
    return this.holes.push(o), o;
  }
  createHingeHoles({ numHoles: e, position: n, diameter: i, depth: r = 0, edge: s = "x1", side: o = 0, distanceFromEdge: a = 0, outerSpacing: l = 0, minimumHoleDistance: c = 0, hingeLength: u = 0 }) {
    const f = new Au({
      numHoles: e,
      position: n,
      //from left or bottom
      edge: s,
      side: o,
      diameter: i,
      depth: r,
      distanceFromEdge: a,
      outerSpacing: l,
      minimumHoleDistance: c,
      hingeLength: u
    });
    return this.hingeHoles.push(f), f;
  }
  updateHingeHoles(e) {
    this.hingeHoles.forEach((n) => n.createHoles(e));
  }
  getAllHingeHoles(e) {
    const n = [];
    return this.hingeHoles.forEach((i, r) => {
      i.createHoles(e), i.validate(e, r), n.push(...i.holes);
    }), n;
  }
  getNumHoles() {
    return this.holes.length + this.hingeHoles.reduce((e, n) => e + n.numHoles, 0);
  }
  getNumCorners() {
    return this.corners.filter((e) => e.type !== null).length;
  }
};
function Ou(t, e) {
  t != null && t.length && t.forEach((n) => U1(n, e));
}
function U1(t, e) {
  if (!t.isSquare()) {
    if (t.getShortSide() === e.w && t.rot) {
      if (!t.setRotation(0, e))
        throw new Error("could not rotate shape correctly for subset calculation");
    } else if (!e.isSquare() && t.getLongSide() === e.w && !t.rot && !t.setRotation(1, e))
      throw new Error("could not rotate shape correctly for subset calculation");
  }
}
function q1(t, e, n = null, i = "l", r = !0, s = !0) {
  if (!(t != null && t.length))
    return;
  if (!e)
    throw new Error("positionShapes requires stock");
  const o = i === "l" ? "x" : "y", a = i === "l" ? "y" : "x";
  let l = 0;
  Ls(n) || Sd(n) ? Ou(t, n) : Ou(t, n ?? e), s && (i === "l" ? t.sort(Is.LDIDA) : t.sort(Is.WDIDA)), t.forEach((c, u) => {
    c[o] = n ? n[o] + l : l, n && (c[a] = n[a]), l += c[o === "x" ? "l" : "w"] + e.getBladeWidth(), n != null && n.isGroup() ? c.groupPlacementOrder = u : c.placementOrder = u, r && c.addToStock(e);
  });
}
const W1 = {
  x: "x",
  y: "y",
  l: "length",
  w: "width",
  t: "thickness",
  q: "quantity",
  orientationLock: "rotation",
  name: "name",
  material: "material",
  banding: "banding",
  cost: "cost",
  grain: "grain",
  trim: "trim",
  x1: "l1",
  x2: "l2",
  y1: "w1",
  y2: "w2"
};
function Ti(t) {
  if (!A(t) || typeof t != "object")
    return {};
  t = Object.assign({}, t);
  for (const [e, n] of Object.entries(t))
    e !== "_id" && e.startsWith("_") && (t[e.substring(1)] = n, delete t[e]);
  return t;
}
function H1(t) {
  return t.map((e) => (delete e.id, new kl(e)));
}
function V1({ stockList: t, removeScores: e = !1, saw: n = null, preventAutoRotation: i = !1, preventGrainRotation: r = !1 }) {
  return !t || !(t != null && t.length) ? [] : t.map((s) => {
    n && (s.saw = n), i && (s.preventAutoRotation = !0), r && (s.preventGrainRotation = !0);
    const o = new In(s);
    if (o.issues.length)
      throw new Error(`Issues found when attempting to recreate stock list - ${o.issues.join()}`, { cause: o.issues });
    return e && delete o.algoBenchmark, o;
  });
}
function z1({ shapeList: t, stockList: e, preventAutoRotation: n = !1 }) {
  if (typeof e > "u")
    throw new Error("recreateShapeList requires stockList");
  return !t || !(t != null && t.length) ? [] : t.map((i) => {
    n && (i.preventAutoRotation = !0);
    let r;
    if (J1(i) ? (i.shapes = i.shapes.map((o) => new on(o)), r = new Sl(i)) : r = new on(i), r.issues.length)
      throw new Error(`Issues found when attempting to recreate shape list - ${r.issues.join()}`);
    const s = e.find((o) => {
      var a;
      return o.id === (((a = i == null ? void 0 : i.stock) == null ? void 0 : a.id) ?? (i == null ? void 0 : i.stockId));
    });
    return r.stock = s, r;
  });
}
function G1({ cutList: t, stockList: e }) {
  if (typeof e > "u")
    throw new Error("recreateCutList requires stockList");
  return !t || !(t != null && t.length) ? [] : t.map((n) => {
    const i = new fo(n), r = e.find((s) => {
      var o;
      return s.id === (((o = n == null ? void 0 : n.stock) == null ? void 0 : o.id) ?? (n == null ? void 0 : n.stockId));
    });
    return i.stock = r, i;
  });
}
function j1({ segmentList: t, stockList: e }) {
  return !t || !(t != null && t.length) ? [] : t.map((n) => {
    const i = e.find((s) => {
      var o;
      return s.id === (((o = n == null ? void 0 : n.stock) == null ? void 0 : o.id) ?? (n == null ? void 0 : n.stockId));
    });
    return n.stock = i, n.preventAutoRotation = !0, new kd(n);
  });
}
function _d(t = null, e = null, n = null) {
  if (!t)
    throw new Error("no container supplied to willItFit");
  if (!e)
    throw new Error("no shape supplied to willItFit");
  const i = e.rot;
  function r(c = !1) {
    var u, f;
    return ut.equalTo(e[c ? "w" : "l"], t.l) || ut.lessThanOrEqualTo(e[c ? "w" : "l"], t.l - (((f = (u = t == null ? void 0 : t.saw) == null ? void 0 : u.options) == null ? void 0 : f.minSpacing) ?? 0));
  }
  function s(c = !1) {
    var u, f;
    return ut.equalTo(e[c ? "l" : "w"], t.w) || ut.lessThanOrEqualTo(e[c ? "l" : "w"], t.w - (((f = (u = t == null ? void 0 : t.saw) == null ? void 0 : u.options) == null ? void 0 : f.minSpacing) ?? 0));
  }
  function o(c = !0) {
    return e.setRotation(i), c;
  }
  const a = e.getNecessaryOrientation(t);
  let l = null;
  if (a && (l = a === "l" ? 0 : 1), e.orientationLock) {
    if (A(n) && n !== l)
      return o(!1);
    e.forceRotate(l);
  } else
    A(n) && e.forceRotate(n);
  return l && e.rot !== l ? o(!1) : A(n) || a ? o(r() && s()) : o(r() && s() || r(!0) && s(!0));
}
class wd {
  constructor(e, n = !1) {
    v(this, "id");
    v(this, "listId");
    v(this, "units", "decimal");
    v(this, "l");
    v(this, "w");
    v(this, "t");
    v(this, "q");
    v(this, "name");
    v(this, "material");
    v(this, "trim", {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0
    });
    v(this, "cost", null);
    v(this, "grain", "");
    v(this, "selected", !1);
    //used for multiple editing
    v(this, "multiSelect", !1);
    //is this the multi-select stock
    v(this, "type", null);
    v(this, "autoAdd", !1);
    v(this, "used");
    v(this, "saw");
    v(this, "preventGrainRotation");
    v(this, "issues", []);
    v(this, "warnings", []);
    v(this, "notes", "");
    var i, r, s, o;
    e = Ti(e), A(e.units) || console.warn("attempting to create InputStock without units"), this.units = e.units, this.id = e.id, this.listId = Date.now().toString() + Math.ceil(Math.random() * 1e16), this.l = A(e.l) ? R(e.l, this.units, !1, n) : null, this.w = A(e.w) ? R(e.w, this.units, !1, n) : null, this.t = A(e.t) ? R(e.t, this.units, !1, n) : null, this.q = A(e.q) ? typeof e.q == "string" ? parseInt(e.q) : e.q : null, this.autoAdd = A(e.autoAdd) ? e.autoAdd : !1, this.name = A(e.name) ? e.name.trim().toUpperCase() : "", this.material = A(e.material) ? e.material.trim().toUpperCase() : "", this.trim = {
      x1: A((i = e == null ? void 0 : e.trim) == null ? void 0 : i.x1) ? R(e.trim.x1, this.units, !1, n) : null,
      x2: A((r = e == null ? void 0 : e.trim) == null ? void 0 : r.x2) ? R(e.trim.x2, this.units, !1, n) : null,
      y1: A((s = e == null ? void 0 : e.trim) == null ? void 0 : s.y1) ? R(e.trim.y1, this.units, !1, n) : null,
      y2: A((o = e == null ? void 0 : e.trim) == null ? void 0 : o.y2) ? R(e.trim.y2, this.units, !1, n) : null
    }, this.cost = A(e.cost) ? e.cost : null, this.grain = A(e.grain) ? e.grain.toLowerCase() : "", this.multiSelect = e.multiSelect, this.type = e.type, this.preventGrainRotation = !0, this.notes = e.notes;
  }
  //change the units of the stock
  changeUnits(e, n, i) {
    var r, s, o, a;
    (e === "decimal" || e === "fraction") && (this.units = e, this.l = this.l ? R(this.l, e, !1, !1, i) : null, this.w = this.w ? R(this.w, e, !1, !1, i) : null, this.t = this.t ? R(this.t, e, !1, !1, i) : null, this.trim = {
      x1: A((r = this == null ? void 0 : this.trim) == null ? void 0 : r.x1) ? R(this.trim.x1, e, !1, !1, i) : null,
      x2: A((s = this == null ? void 0 : this.trim) == null ? void 0 : s.x2) ? R(this.trim.x2, e, !1, !1, i) : null,
      y1: A((o = this == null ? void 0 : this.trim) == null ? void 0 : o.y1) ? R(this.trim.y1, e, !1, !1, i) : null,
      y2: A((a = this == null ? void 0 : this.trim) == null ? void 0 : a.y1) ? R(this.trim.y2, e, !1, !1, i) : null
    });
  }
  //change the type of stock
  changeType(e) {
    switch (e !== "sheet" && (this.grain = ""), e) {
      case "linear":
        this.trim.y1 = 0, this.trim.y2 = 0;
        break;
      case "roll":
        this.trim.x1 = 0, this.trim.x2 = 0, this.trim.y1 = 0, this.trim.y2 = 0, this.t = null;
        break;
    }
  }
  //create an id from an index
  createId(e, n = 0) {
    this.id = `${e + 1}.${n}`;
  }
  getWarnings() {
    this.warnings = [], ["q"].forEach((e) => {
      this.warnings.push(...ge[e](this[e]));
    }), R(this.l, "decimal") < R(this.w, "decimal") && this.warnings.push(`Length should be greater than width and it has no impact on ${Ed(this) ? "grain direction" : "orientation"}.`);
  }
  validate() {
    return this.issues = [], ["l", "w", "t"].forEach((e) => {
      this.issues.push(...ge[e](this[e]));
    }), this.issues.push(...ge.trim(this)), this.getWarnings(), this.issues;
  }
}
class kl {
  constructor(e, n = !1) {
    v(this, "id");
    v(this, "listId");
    v(this, "units", "decimal");
    v(this, "l");
    v(this, "w");
    v(this, "t");
    v(this, "q", 1);
    v(this, "name", "");
    v(this, "material", "");
    v(this, "stockLock");
    v(this, "trim", {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0
    });
    v(this, "cost");
    v(this, "grain");
    v(this, "banding", {
      a: !1,
      b: !1,
      c: !1,
      d: !1,
      x1: !1,
      x2: !1,
      y1: !1,
      y2: !1
    });
    v(this, "bandingType", {
      a: "",
      b: "",
      c: "",
      d: "",
      x1: "",
      x2: "",
      y1: "",
      y2: ""
    });
    v(this, "orientationLock");
    v(this, "selectedMaterial");
    v(this, "selected");
    //used for multiple editing
    v(this, "multiSelect", !1);
    //is this the first shape in a multi-select shape
    v(this, "machining");
    v(this, "issues", []);
    v(this, "warnings", []);
    v(this, "notes", "");
    var i, r, s, o, a, l, c, u, f, h, p, y, k, w, g, b, x, S, O, P;
    e = e = Ti(e), this.units = e.units, this.id = e.id, this.listId = Date.now().toString() + Math.ceil(Math.random() * 1e16), this.l = A(e.l) ? R(e.l, this.units, !1, n) : null, this.w = A(e.w) ? R(e.w, this.units, !1, n) : null, this.t = A(e.t) ? R(e.t, this.units, !1, n) : null, this.q = A(e == null ? void 0 : e.q) ? typeof e.q == "string" ? parseInt(e.q) : e.q : null, this.name = A(e.name) ? e.name.trim().toUpperCase() : "", this.material = A(e.material) ? e.material.trim().toUpperCase() : "", this.trim = {
      x1: A((i = e == null ? void 0 : e.trim) == null ? void 0 : i.x1) ? R(e.trim.x1, this.units, !1, n) : null,
      x2: A((r = e == null ? void 0 : e.trim) == null ? void 0 : r.x2) ? R(e.trim.x2, this.units, !1, n) : null,
      y1: A((s = e == null ? void 0 : e.trim) == null ? void 0 : s.y1) ? R(e.trim.y1, this.units, !1, n) : null,
      y2: A((o = e == null ? void 0 : e.trim) == null ? void 0 : o.y2) ? R(e.trim.y2, this.units, !1, n) : null
    }, this.banding = {
      a: A((a = e == null ? void 0 : e.banding) == null ? void 0 : a.a) ? e.banding.a : !1,
      b: A((l = e == null ? void 0 : e.banding) == null ? void 0 : l.b) ? e.banding.b : !1,
      c: A((c = e == null ? void 0 : e.banding) == null ? void 0 : c.c) ? e.banding.c : !1,
      d: A((u = e == null ? void 0 : e.banding) == null ? void 0 : u.d) ? e.banding.d : !1,
      x1: A((f = e == null ? void 0 : e.banding) == null ? void 0 : f.x1) ? e.banding.x1 : !1,
      x2: A((h = e == null ? void 0 : e.banding) == null ? void 0 : h.x2) ? e.banding.x2 : !1,
      y1: A((p = e == null ? void 0 : e.banding) == null ? void 0 : p.y1) ? e.banding.y1 : !1,
      y2: A((y = e == null ? void 0 : e.banding) == null ? void 0 : y.y2) ? e.banding.y2 : !1
    }, this.bandingType = {
      a: A((k = e == null ? void 0 : e.bandingType) == null ? void 0 : k.a) ? e.bandingType.a : "",
      b: A((w = e == null ? void 0 : e.bandingType) == null ? void 0 : w.b) ? e.bandingType.b : "",
      c: A((g = e == null ? void 0 : e.bandingType) == null ? void 0 : g.c) ? e.bandingType.c : "",
      d: A((b = e == null ? void 0 : e.bandingType) == null ? void 0 : b.d) ? e.bandingType.d : "",
      x1: A((x = e == null ? void 0 : e.bandingType) == null ? void 0 : x.x1) ? e.bandingType.x1 : "",
      x2: A((S = e == null ? void 0 : e.bandingType) == null ? void 0 : S.x2) ? e.bandingType.x2 : "",
      y1: A((O = e == null ? void 0 : e.bandingType) == null ? void 0 : O.y1) ? e.bandingType.y1 : "",
      y2: A((P = e == null ? void 0 : e.bandingType) == null ? void 0 : P.y2) ? e.bandingType.y2 : ""
    }, this.orientationLock = A(e.orientationLock) ? e.orientationLock.toLowerCase() : "", this.selected = !1, this.multiSelect = e.multiSelect, this.machining = new vd(e.machining ?? {
      holes: [],
      corners: []
    }), this.notes = e.notes;
  }
  /**
   * change the units of the shape
   * @param {String} newUnits
   */
  changeUnits(e, n, i) {
    var r, s, o, a;
    (e === "decimal" || e === "fraction") && (this.units = e, this.l = this.l ? R(this.l, e, !1, !1, i) : null, this.w = this.w ? R(this.w, e, !1, !1, i) : null, this.t = this.t ? R(this.t, e, !1, !1, i) : null, this.trim = {
      x1: A((r = this == null ? void 0 : this.trim) == null ? void 0 : r.x1) ? R(this.trim.x1, e, !1, !1, i) : null,
      x2: A((s = this == null ? void 0 : this.trim) == null ? void 0 : s.x2) ? R(this.trim.x2, e, !1, !1, i) : null,
      y1: A((o = this == null ? void 0 : this.trim) == null ? void 0 : o.y1) ? R(this.trim.y1, e, !1, !1, i) : null,
      y2: A((a = this == null ? void 0 : this.trim) == null ? void 0 : a.y1) ? R(this.trim.y2, e, !1, !1, i) : null
    });
  }
  /**
   * change the type of the stock
   * @param {String} newType
   */
  changeStockType(e) {
    switch (e) {
      case "sheet":
      case "roll":
        this.orientationLock = "", e === "roll" && (this.t = null);
        break;
      case "linear":
        this.orientationLock = "", this.banding = {
          x1: !1,
          x2: !1,
          y1: !1,
          y2: !1
        }, this.bandingType = {
          x1: "",
          x2: "",
          y1: "",
          y2: ""
        };
        break;
    }
  }
  /**
   * create an id from an index
   * @param {Integer} index
   * @param {Integer} secondaryIndex
   */
  createId(e, n = 0) {
    this.id = `${e + 1}.${n}`;
  }
  getLongSide() {
    return R(this.l) > R(this.w) ? R(this.l) : R(this.w);
  }
  getShortSide() {
    return R(this.l) < R(this.w) ? R(this.l) : R(this.w);
  }
  //used to apply a single trim value to all sides
  applyPartTrim(e, n) {
    e = R(e), this.trim.x1 = e, this.trim.x2 = e, n !== "linear" ? (this.trim.y1 = e, this.trim.y2 = e) : (this.trim.y1 = 0, this.trim.y2 = 0);
  }
  /**
   * to align with Shape
   * @remarks input shapes are always 0
   */
  get rot() {
    return 0;
  }
  getWarnings(e, n = 0) {
    this.warnings = [], e.length && this.warnings.push(...ge.stockMatch(this, e, n)), ["q"].forEach((i) => {
      this.warnings.push(...ge[i](this[i]));
    }), R(this.l, "decimal") < R(this.w, "decimal") && this.warnings.push('Length should be greater than width and has no impact on orientation. To set rotation based on these values use the "Rotate to L/W" button.');
  }
  validate(e, n = 0) {
    return this.issues = [], n = R(n), ["l", "w", "t"].forEach((i) => {
      this.issues.push(...ge[i](this[i]));
    }), this.issues.push(...ge.partTrim(this, n)), this.issues.push(...ge.trim(this)), this.getWarnings(e, n), this.issues;
  }
}
class vn {
  //for user notes
  constructor(e) {
    v(this, "id");
    v(this, "parentID");
    v(this, "name");
    v(this, "x");
    v(this, "y");
    v(this, "l");
    v(this, "w");
    v(this, "t");
    v(this, "q");
    v(this, "material");
    v(this, "grain");
    v(this, "orientationLock");
    v(this, "duplicate");
    v(this, "_trim");
    v(this, "trimmed");
    v(this, "preventAutoRotation");
    v(this, "preventGrainRotation");
    v(this, "units");
    v(this, "issues", []);
    v(this, "stock");
    v(this, "stockId");
    //used when object is compressed
    v(this, "cost");
    v(this, "offcut");
    v(this, "notes");
    this.initRectangle(e);
  }
  validate(e) {
    ["x", "y", "l", "w", "t"].forEach((n) => {
      this.createIssues(ge[n](e[n]));
    }), this.isSegment() || this.createIssues(ge.q((e == null ? void 0 : e.q) ?? 0));
  }
  initRectangle(e) {
    var i, r, s, o, a, l;
    if (this.validate(e), this.issues.length)
      return;
    this.id = A(e.id) ? e.id.toString() : null, this.setParentID(), [
      {
        key: "x",
        default: 0,
        required: !1
      },
      {
        key: "y",
        default: 0,
        required: !1
      },
      {
        key: "l",
        default: null,
        required: !0
      },
      {
        key: "w",
        default: 1,
        //for linear
        required: !0
      },
      {
        key: "t",
        default: null,
        required: !1
      }
    ].forEach((c) => {
      let u = e[c.key];
      if (!A(u))
        return this[c.key] = c.default;
      typeof u == "string" && (u = R(u)), this[c.key] = u;
    }), A(e == null ? void 0 : e.q) ? typeof e.q == "string" ? this.q = parseInt(e.q) : this.q = e.q : this.q = 0, this.name = A(e.name) && ((i = e == null ? void 0 : e.name) != null && i.length) ? (r = gd(md(e == null ? void 0 : e.name))) == null ? void 0 : r.toUpperCase() : null, !(e != null && e.preventAutoRotation) && !e.trimmed && this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !(e != null && e.preventGrainRotation) && (this.grain = this.grain === "l" ? "w" : "l")), this.material = A(e.material) ? e.material.trim().toLowerCase() : null, this.duplicate = A(e == null ? void 0 : e.duplicate) ? e.duplicate : !1, A(e == null ? void 0 : e.stock) && (((o = (s = e.stock) == null ? void 0 : s.constructor) == null ? void 0 : o.name) === "Stock" ? this.stock = e.stock : this.stock = new In(e.stock), this.stockId = this.stock.id), A(e == null ? void 0 : e.cost) ? typeof e.cost == "string" ? this.cost = parseFloat(e.cost) : typeof e.cost == "number" && (this.cost = e.cost) : this.cost = 0, this.grain = typeof e.grain < "u" && A(e == null ? void 0 : e.grain) ? e.grain.toLowerCase() : null;
    try {
      this.trim = e == null ? void 0 : e.trim;
    } catch (c) {
      if ((a = c == null ? void 0 : c.cause) != null && a.issues)
        this.issues.push(...c.cause.issues);
      else
        throw new Error("error when attempting to set trim");
    }
    this.trimmed = A(e == null ? void 0 : e.trimmed) ? e.trimmed : !1, this.offcut = A(e == null ? void 0 : e.offcut) ? e.offcut : !1, this.notes = (l = e.notes) == null ? void 0 : l.substring(0, 200);
  }
  updateRectangle(e) {
    e.preventAutoRotation = !0, this.initRectangle(e);
  }
  set trim(e) {
    this._trim = {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0
    }, A(e) && Object.keys(e).forEach((n) => {
      let i;
      if (typeof e[n] == "string") {
        const r = R(e[n]);
        isNaN(r) || r < 0 ? (this.issues.push(this.createIssue(`${e[n] ?? "N/A"} is not a valid value for trim: ${n}`)), i = 0) : i = r;
      } else
        i = e[n];
      this._trim[n] = i;
    });
  }
  get trim() {
    return this._trim;
  }
  get rot() {
    return this.w > this.l ? 1 : 0;
  }
  setParentID() {
    this.parentID = this.getParentID();
  }
  getParentID() {
    return this.id ? this.parentID ? this.parentID : typeof this.id != "number" && this.id.includes(".") ? this.id.split(".")[0] : typeof this.id != "number" && !this.id.includes(".") ? null : this != null && this.id ? this.id.toString() : null : null;
  }
  createIssues(e) {
    e != null && e.length && e.forEach((n) => {
      this.issues.push(this.createIssue(n));
    });
  }
  createIssue(e) {
    var r;
    let n = "";
    const i = this.getClass();
    switch (i) {
      case "Shape":
        n = "part";
        break;
      case "Stock":
        n = "stock";
        break;
      default:
        n = i.toLowerCase();
        break;
    }
    return `${e} [${n.charAt(0).toUpperCase() + n.slice(1)} ${(r = this == null ? void 0 : this.name) != null && r.length ? this.name.toUpperCase() : this.parentID}]`;
  }
  getDimensions() {
    return {
      id: this.id,
      l: this.l,
      w: this.w,
      t: this.t
    };
  }
  getCoordinates() {
    return {
      id: this.id,
      x: this.x,
      y: this.y
    };
  }
  getAspect() {
    return this.l > this.w ? this.w / this.l : this.l / this.w;
  }
  getPerimeter() {
    return this.w * 2 + this.l * 2;
  }
  getLongSide() {
    return this.l > this.w ? this.l : this.w;
  }
  getShortSide() {
    return this.l < this.w ? this.l : this.w;
  }
  getSides() {
    return [
      this.getSide("bottom"),
      this.getSide("right"),
      this.getSide("top"),
      this.getSide("left")
    ];
  }
  getSide(e) {
    switch (e) {
      case "bottom":
        return {
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y,
          type: "bottom",
          parentID: this.id
        };
      case "right":
        return {
          x1: this.x + this.l,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y + this.w,
          type: "right",
          parentID: this.id
        };
      case "top":
        return {
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y + this.w,
          y2: this.y + this.w,
          type: "top",
          parentID: this.id
        };
      case "left":
        return {
          x1: this.x,
          x2: this.x,
          y1: this.y,
          y2: this.y + this.w,
          type: "left",
          parentID: this.id
        };
    }
  }
  getTopPosition(e = !0, n = null) {
    var i;
    if (e && typeof ((i = this.stock) == null ? void 0 : i.getBladeWidth) > "u" && n === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return e ? this.y + this.w + ((this.stock.getBladeWidth() || n) ?? 0) : this.y + this.w;
  }
  getRightPosition(e = !0, n = null) {
    var i;
    if (e && typeof ((i = this.stock) == null ? void 0 : i.getBladeWidth) > "u" && n === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return e ? this.x + this.l + ((this.stock.getBladeWidth() || n) ?? 0) : this.x + this.l;
  }
  getBottomPosition(e = !0, n = null) {
    var i;
    if (e && typeof ((i = this.stock) == null ? void 0 : i.getBladeWidth) > "u" && n === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return e ? this.y - ((this.stock.getBladeWidth() || n) ?? 0) : this.y;
  }
  getLeftPosition(e = !0, n = null) {
    var i;
    if (e && typeof ((i = this.stock) == null ? void 0 : i.getBladeWidth) > "u" && n === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return e ? this.x - ((this.stock.getBladeWidth() || n) ?? 0) : this.x;
  }
  sharesSide(e, n = 0, i = null) {
    switch (i) {
      case "left":
        return e.x + e.l + n === this.x;
      case "right":
        return e.x === this.x + this.l + n;
      case "bottom":
        return e.y + e.w + n === this.y;
      case "top":
        return e.y === this.y + this.w + n;
    }
    return !1;
  }
  sameSide(e, n = null) {
    switch (n) {
      case "left":
        return e.x === this.x;
      case "right":
        return e.x + e.l === this.x + this.l;
      case "bottom":
        return e.y === this.y;
      case "top":
        return e.y + e.w === this.y + this.w;
    }
    return !1;
  }
  //considers if the shape can rotate
  getLongestDimension(e) {
    return this.orientationLock ? this[e] : this.getLongSide();
  }
  getArea() {
    return this.w * this.l;
  }
  getCoords(e, n = !1) {
    const i = new Lt(this.x + this.l, this.y);
    i.corner = "bottomRight";
    const r = new Lt(this.x, this.y + this.w);
    if (r.corner = "topLeft", (e == null ? void 0 : e.cutType) !== "efficiency" && !n)
      return [r, i];
    const s = new Lt(this.x, this.y);
    s.corner = "bottomLeft";
    const o = new Lt(this.x + this.l, this.y + this.w);
    return o.corner = "topRight", [s, r, o, i];
  }
  getCorners() {
    return {
      bottomLeft: new Lt(this.x, this.y),
      topLeft: new Lt(this.x, this.y + this.w),
      topRight: new Lt(this.x + this.l, this.y + this.w),
      bottomRight: new Lt(this.x + this.l, this.y)
    };
  }
  round() {
    return {
      l: Math.round(this.l),
      w: Math.round(this.w)
    };
  }
  getClass() {
    return this.constructor.name;
  }
  /**
   * trim the rectangle
   */
  trimDimensions() {
    var e, n, i, r;
    return this.trimmed ? !1 : (this.trim && Object.values(this.trim).filter((s) => !isNaN(parseFloat(s))).length && (A(this.l) && (this.l -= ((e = this == null ? void 0 : this.trim) != null && e.x1 ? this.trim.x1 : 0) + ((n = this == null ? void 0 : this.trim) != null && n.x2 ? this.trim.x2 : 0), this.l <= 0 && (console.error(this), this.issues.push(this.createIssue("Applying trim has produced a negative length")))), A(this.w) && (this.w -= ((i = this == null ? void 0 : this.trim) != null && i.y1 ? this.trim.y1 : 0) + ((r = this == null ? void 0 : this.trim) != null && r.y2 ? this.trim.y2 : 0), this.w <= 0 && (console.error(this), this.issues.push(this.createIssue("Applying trim has produced a negative width"))))), this.trimmed = !0, !0);
  }
  /**
   * increase the size of the stock to the original size
   */
  removeTrim() {
    var e, n, i, r;
    if (this.trimmed) {
      if (this.l += (typeof ((e = this == null ? void 0 : this.trim) == null ? void 0 : e.x1) == "number" ? this.trim.x1 : 0) + (typeof ((n = this == null ? void 0 : this.trim) == null ? void 0 : n.x2) == "number" ? this.trim.x2 : 0), this.w += (typeof ((i = this == null ? void 0 : this.trim) == null ? void 0 : i.y1) == "number" ? this.trim.y1 : 0) + (typeof ((r = this == null ? void 0 : this.trim) == null ? void 0 : r.y2) == "number" ? this.trim.y2 : 0), this.l <= 0)
        throw new Error(`trimming this ${this.id} has produced a negative length`);
      if (this.w <= 0)
        throw new Error(`trimming this ${this.id} has produced a negative width`);
    }
    this.trimmed = !1;
  }
  /**
   * is this rectangle identical to another
   */
  isIdentical(e) {
    var n, i, r, s, o, a, l, c;
    if (this.getClass() !== e.getClass())
      return !1;
    if (Ls(this)) {
      if (e.id === this.id)
        return !0;
    } else if (e.getParentID() === this.getParentID())
      return !0;
    return (this.t === e.t && e.w === this.w && e.l === this.l || e.l === this.w && e.w === this.l) && e.orientationLock === this.orientationLock && ((n = this == null ? void 0 : this.trim) == null ? void 0 : n.x1) === ((i = e == null ? void 0 : e.trim) == null ? void 0 : i.x1) && ((r = this == null ? void 0 : this.trim) == null ? void 0 : r.x2) === ((s = e == null ? void 0 : e.trim) == null ? void 0 : s.x2) && ((o = this == null ? void 0 : this.trim) == null ? void 0 : o.y1) === ((a = e == null ? void 0 : e.trim) == null ? void 0 : a.y1) && ((l = this == null ? void 0 : this.trim) == null ? void 0 : l.y2) === ((c = e == null ? void 0 : e.trim) == null ? void 0 : c.y2);
  }
  /**
   * is this rectangle a square
   */
  isSquare() {
    return this.l === this.w;
  }
  getDistancesToContainerEdges(e) {
    return [
      this.x - e.x,
      e.l - (this.x + this.l),
      e.w - (this.y + this.w),
      this.y - e.y
    ];
  }
  isTooCloseToEdges(e) {
    var n, i;
    return (i = (n = e.saw) == null ? void 0 : n.options) != null && i.minSpacing ? this.getDistancesToContainerEdges(e).some((r) => {
      var s, o;
      return r > 0 && r <= ((o = (s = e.saw) == null ? void 0 : s.options) == null ? void 0 : o.minSpacing);
    }) : !1;
  }
  isInsideStock(e) {
    return !(this.x + this.l > e.l || this.y + this.w > e.w || this.x < 0 || this.y < 0);
  }
  //create rectangles used to detect proximity to other shapes
  createProximityRectangles(e, n = null, i = !0) {
    let r;
    i && n ? r = n.getBladeWidth() : r = 0;
    let s, o, a, l;
    return (n === null || this.y + this.w < n.w) && (s = new vn({
      name: "top",
      id: "p-" + this.id + "-" + this.constructor.name,
      x: this.x,
      y: this.y + this.w + r,
      l: this.l,
      w: e,
      q: 1,
      preventAutoRotation: !0
    })), (n === null || this.y > 0) && (o = new vn({
      name: "bottom",
      id: "p-" + this.id + "-" + this.constructor.name,
      x: this.x,
      y: this.y - e - r,
      l: this.l,
      w: e,
      q: 1,
      preventAutoRotation: !0
    })), (n === null || this.x > 0) && (a = new vn({
      name: "left",
      id: "p-" + this.id + "-" + this.constructor.name,
      x: this.x - e - r,
      y: this.y,
      l: e,
      w: this.w,
      q: 1,
      preventAutoRotation: !0
    })), (n === null || this.x + this.l < n.l) && (l = new vn({
      name: "right",
      id: "p-" + this.id + "-" + this.constructor.name,
      x: this.x + this.l + r,
      y: this.y,
      l: e,
      w: this.w,
      q: 1,
      preventAutoRotation: !0
    })), [a, l, o, s].filter((c) => c);
  }
  isShape() {
    return Z1(this);
  }
  isSegment() {
    return tv(this);
  }
  isStock() {
    return va(this);
  }
  isGroup() {
    return Ls(this);
  }
  isUserGroup() {
    return Sd(this);
  }
}
class xd extends vn {
  //used by evo
  constructor(n) {
    super(n);
    v(this, "type");
    v(this, "saw");
    v(this, "algoBenchmark");
    switch (["sheet", "linear", "roll", null, void 0, ""].includes(n.type) ? this.type = n.type : this.issues.push(`Container type ${n.type ?? "N/A"} is not valid`), this.type || (this.type = "sheet"), this.setSaw(n), this.cutType) {
      case "beam":
        (!A(this.t) || this.t <= 0) && this.issues.push(this.createIssue("Stock for beam saws must have a thickness set"));
        break;
    }
  }
  setSaw(n) {
    var i, r, s, o;
    if (A(n) || (this.saw = new Tn(null)), A(n == null ? void 0 : n.saw)) {
      if (!((r = n == null ? void 0 : n.saw) != null && r.cutType)) {
        const { cutType: a, cutPreference: l } = ba(n.saw.cutPreference);
        n.saw.cutType = a, n.saw.cutPreference = l;
      }
    } else {
      n.saw = {};
      const { cutType: a, cutPreference: l } = ba(n.cutPreference);
      n.saw.cutType = a, n.saw.cutPreference = l, A(n == null ? void 0 : n.bladeWidth) && (n.saw.bladeWidth = n.bladeWidth), A((i = n == null ? void 0 : n.blade) == null ? void 0 : i.width) && (n.saw.bladeWidth = n.blade.width), A(n == null ? void 0 : n.efficiencyOptions) && (n.saw.efficiencyOptions = n.efficiencyOptions), A(n == null ? void 0 : n.guillotineOptions) && (n.saw.guillotineOptions = n.guillotineOptions), A(n == null ? void 0 : n.stackHeight) && (n.saw.stackHeight = n.stackHeight);
    }
    try {
      A(n == null ? void 0 : n.saw) && (ev(n.saw) ? this.saw = n.saw : this.saw = new Tn(n.saw, this.type)), (o = (s = this.saw) == null ? void 0 : s.issues) != null && o.length && this.issues.push(...this.saw.issues);
    } catch (a) {
      throw new Error("error creating saw", { cause: a });
    }
  }
  get cutType() {
    var n, i, r, s;
    return A((n = this == null ? void 0 : this.saw) == null ? void 0 : n.cutType) ? this.saw.cutType : (i = this.stock) != null && i.isStock() ? null : ((s = (r = this == null ? void 0 : this.stock) == null ? void 0 : r.saw) == null ? void 0 : s.cutType) ?? null;
  }
  get cutPreference() {
    var n, i, r, s;
    return A((n = this.saw) == null ? void 0 : n.cutPreference) ? this.saw.cutPreference : (i = this.stock) != null && i.isStock() ? null : ((s = (r = this.stock) == null ? void 0 : r.saw) == null ? void 0 : s.cutPreference) ?? null;
  }
  get guillotineOptions() {
    var n, i, r, s;
    return A((n = this.saw) == null ? void 0 : n.guillotineOptions) ? this.saw.guillotineOptions : (i = this.stock) != null && i.isStock() ? null : ((s = (r = this == null ? void 0 : this.stock) == null ? void 0 : r.saw) == null ? void 0 : s.guillotineOptions) ?? null;
  }
  get efficiencyOptions() {
    var n, i, r, s;
    return A((n = this.saw) == null ? void 0 : n.efficiencyOptions) ? this.saw.efficiencyOptions : (i = this.stock) != null && i.isStock() ? null : ((s = (r = this == null ? void 0 : this.stock) == null ? void 0 : r.saw) == null ? void 0 : s.efficiencyOptions) ?? null;
  }
  get primaryCompression() {
    var n, i;
    return this.cutType === "efficiency" ? (i = (n = this.saw) == null ? void 0 : n.efficiencyOptions) != null && i.primaryCompression ? this.efficiencyOptions.primaryCompression : "y" : null;
  }
  getHalfBladeWidth() {
    const n = this.getBladeWidth();
    return n ? n / 2 : 0;
  }
  getBladeWidth() {
    var i, r, s;
    const n = (((i = this == null ? void 0 : this.saw) == null ? void 0 : i.bladeWidth) || ((s = (r = this == null ? void 0 : this.stock) == null ? void 0 : r.saw) == null ? void 0 : s.bladeWidth)) ?? 0;
    return isNaN(n) ? 0 : n;
  }
  getStock() {
    return this != null && this.stock ? this.stock : this;
  }
}
function ba(t) {
  let e, n;
  switch (t) {
    case "l":
    case "length":
      e = "guillotine", n = "l";
      break;
    case "w":
    case "width":
      e = "guillotine", n = "w";
      break;
    case "flex":
      e = "guillotine", n = "flex";
      break;
    case "efficiency":
      e = "efficiency", n = null;
      break;
    case "beam":
      e = "beam", n = "l";
      break;
    default:
      e = null, n = null;
      break;
  }
  return {
    cutPreference: n,
    cutType: e
  };
}
class Tn {
  constructor(e, n = "sheet") {
    v(this, "issues");
    v(this, "bladeWidth");
    v(this, "cutType");
    v(this, "cutPreference");
    v(this, "guillotineOptions");
    v(this, "efficiencyOptions");
    v(this, "stackHeight");
    v(this, "stockType");
    v(this, "options");
    switch (e = Ti(e), this.options = (e == null ? void 0 : e.options) ?? null, this.stackHeight = (e == null ? void 0 : e.stackHeight) ?? null, this.stockType = (e == null ? void 0 : e.stockType) ?? n, this.issues = [], ["sheet", "linear", "roll"].includes(this.stockType) || this.issues.push(`Saw stock type: ${this.stockType} not valid`), this.stockType || (this.stockType = "sheet"), this.cutType = e == null ? void 0 : e.cutType, this.stockType) {
      case "sheet":
        [
          "efficiency",
          "guillotine",
          "beam",
          null,
          void 0
        ].includes(this.cutType) || this.issues.push(`Saw cut type: ${this.cutType} not valid for stock type: ${this.stockType}`);
        break;
      case "roll":
        ["efficiency", "guillotine", null, void 0].includes(this.cutType) || this.issues.push(`Saw cut type: ${this.cutType} not valid for stock type: ${this.stockType}`);
        break;
      default:
        ["none", null, void 0].includes(this.cutType) || this.issues.push(`Saw cut type: ${this.cutType} not valid for stock type: ${this.stockType}`);
        break;
    }
    switch (this.cutPreference = e == null ? void 0 : e.cutPreference, this.cutType) {
      case "guillotine":
        ["l", "w", "flex"].includes(this.cutPreference) || this.issues.push(`Saw cut preference: ${this.cutPreference} not valid for cut type: ${this.cutType}`), this.cutType === "guillotine" && this.cutPreference === "l" && this.stockType === "roll" && this.issues.push(`Cut preference: ${this.cutPreference} not valid for cut type: ${this.cutType} and stock type: ${this.stockType}`);
        break;
      case "beam":
        ["l", null, void 0].includes(this.cutPreference) || this.issues.push(`Saw cut preference: ${this.cutPreference} not valid for cut type: ${this.cutType}`);
        break;
      default:
        ["none", null, void 0].includes(this.cutPreference) || this.issues.push(`Saw cut preference: ${this.cutPreference} not valid for cut type: ${this.cutType}`);
        break;
    }
    switch (A(e == null ? void 0 : e.bladeWidth) ? typeof e.bladeWidth == "string" ? this.bladeWidth = R(e.bladeWidth) : this.bladeWidth = e.bladeWidth : this.bladeWidth = 0, (isNaN(this.bladeWidth) || this.bladeWidth < 0) && (this.issues.push(`Blade width: ${this.bladeWidth ?? "N/A"} is not valid`), this.bladeWidth = 0), this.stockType) {
      case "sheet":
        [
          "efficiency",
          "guillotine",
          "beam",
          null,
          void 0
        ].includes(this.cutType) || this.issues.push(`Invalid cut type: ${this.cutType} for stock type: ${n}, cut preference: ${this.cutPreference}`), this.cutType === "guillotine" && (["l", "w", "flex"].includes(this.cutPreference) || this.issues.push(`Invalid cut preference: ${this.cutPreference} for stock type: ${n}, cut type: ${this.cutType}`)), this.cutType === "beam" && [null, void 0].includes(this.stackHeight) && this.issues.push("Beam saws require a stack height to be set"), this.cutType === "beam" && (this.cutPreference = "l"), this.cutType || (this.cutType = "efficiency");
        break;
      case "linear":
        this.cutType = null, this.cutPreference = null;
        break;
    }
    switch (this.cutType) {
      case "efficiency":
        this.efficiencyOptions = A(e == null ? void 0 : e.efficiencyOptions) ? e.efficiencyOptions : { primaryCompression: "y" };
        break;
      case "guillotine":
        this.guillotineOptions = A(e == null ? void 0 : e.guillotineOptions) ? e.guillotineOptions : { strategy: "efficiency" };
        break;
      case "beam":
        this.guillotineOptions = A(e == null ? void 0 : e.guillotineOptions) ? e.guillotineOptions : { strategy: "efficiency" }, this.cutPreference = "l", [null, void 0].includes(this.stackHeight) && this.issues.push("Beam saws require a stack height to be set");
        break;
    }
  }
  clone() {
    const e = structuredClone(this);
    return new Tn(e);
  }
  validate() {
  }
}
class In extends xd {
  //used by stock matching
  constructor(n) {
    n = Ti(n), n.preventAutoRotation = (n == null ? void 0 : n.type) === "roll";
    super(n);
    v(this, "_id");
    //used for mongo
    v(this, "autoAdd");
    v(this, "allowExactFitShapes");
    v(this, "analysis");
    v(this, "tidy");
    v(this, "used");
    v(this, "stack");
    v(this, "winningStrategy");
    //used for reporting
    v(this, "unusable");
    delete this.stock, this._id = n == null ? void 0 : n._id, this.autoAdd = A(n == null ? void 0 : n.autoAdd) ? n.autoAdd : !1, this.autoAdd && (this.q = 1), this.allowExactFitShapes = A(n == null ? void 0 : n.allowExactFitShapes) ? n.allowExactFitShapes : !1, this.analysis = A(n.analysis) ? n.analysis : null, this.tidy = A(n == null ? void 0 : n.tidy) ? n.tidy : !1, this.algoBenchmark = null, this.used = A(n == null ? void 0 : n.used) ? n.used : !1, this.stack = A(n == null ? void 0 : n.stack) ? n.stack : !1, this.initStock(n);
  }
  initStock(n) {
    switch (this.type) {
      case "linear":
      case "roll":
        this.trim.y1 = 0, this.trim.y2 = 0, this.grain = null;
        break;
    }
    this.validate(n), this.issues.length;
  }
  validate(n) {
    ["grain"].forEach((i) => {
      this.createIssues(ge[i](n[i]));
    }), this.createIssues(ge.trim(this));
  }
  /**
   * compress for saving / transfer
   */
  compress() {
    var n;
    delete this.tidy, this == null || delete this.algoBenchmark, this.stack = typeof this.stack == "number" || this.stack === !1 ? this.stack : (n = this.stack) == null ? void 0 : n.id, !this.trim.x1 && !this.trim.x2 && !this.trim.y1 && !this.trim.y2 && (this.trim = null);
  }
  resetStrategies() {
    this.algoBenchmark = null;
  }
  isIdentical(n) {
    let i = !1, r = !1, s = !1, o = !1;
    if (this.material === n.material && (i = !0), this.t === n.t && (r = !0), this.l === n.l && (s = !0), this.w === n.w && (o = !0), i && r && s && o)
      return !0;
  }
  clone(n = null) {
    const i = this.id.split(".");
    n ? i.pop() : (n = parseInt(i.pop()), n++), i.push(n.toString());
    const r = i.join("."), s = structuredClone(this);
    return s.id = r, s.used = !1, s.duplicate = !0, s.stack = !1, s.saw = this.saw, new In(s);
  }
}
class Y1 extends vn {
  constructor(n) {
    super(n);
    v(this, "addToInventory");
    //for front end selection
    v(this, "added");
    //for adding to inputStock
    v(this, "placementOrder");
    v(this, "flex");
    this.cost = this.getCost(), this.addToInventory = (n == null ? void 0 : n.addToInventory) ?? !0, this.added = !1, this.placementOrder = (n == null ? void 0 : n.placementOrder) ?? null, this.offcut = !0;
  }
  compress() {
    var n;
    this.stockId = (this == null ? void 0 : this.stockId) ?? ((n = this == null ? void 0 : this.stock) == null ? void 0 : n.id), delete this._trim, delete this.trimmed;
  }
  getCost() {
    var n;
    return (n = this.stock) != null && n.isStock() && this.stock ? parseFloat((this.getArea() / this.stock.getArea() * this.stock.cost).toFixed(2)) : 0;
  }
}
function K1({ offcuts: t, stockList: e, preventAutoRotation: n = !0 }) {
  return !t || !(t != null && t.length) ? [] : t.map((i) => {
    const r = e.find((o) => {
      var a;
      return o.id === (((a = i == null ? void 0 : i.stock) == null ? void 0 : a.id) ?? (i == null ? void 0 : i.stockId));
    });
    return i.stock = r, n && (i.preventAutoRotation = !0), new Y1(i);
  });
}
class on extends vn {
  constructor(n) {
    n = Ti(n);
    super(n);
    v(this, "added");
    v(this, "guillotineData");
    v(this, "_banding");
    v(this, "_bandingType");
    v(this, "stockLock");
    v(this, "score");
    v(this, "bestScore");
    v(this, "placementOrder");
    //groups
    v(this, "groupPlacementOrder");
    v(this, "group");
    v(this, "groupID");
    v(this, "inGroup");
    //is the shape currently part of at least one group
    v(this, "inUserGroup");
    //is the shape currently part of a user group`
    v(this, "addedAsGroup");
    v(this, "stripShape");
    v(this, "isFirstShape");
    v(this, "firstShapeSampleRotations", []);
    //used for setting the rotation of the first shape (guillotine)
    v(this, "dimension");
    //used for apex shapes
    v(this, "subsetUsed");
    v(this, "index");
    //used for ptx
    v(this, "stackedMatch");
    //used for stack detection
    v(this, "stockMatch");
    v(this, "machining");
    v(this, "weighting");
    this.initShape(n);
  }
  initShape(n) {
    this.validate(n), !this.issues.length && (this.added = A(n == null ? void 0 : n.added) ? n.added : !1, this.guillotineData = n == null ? void 0 : n.guillotineData, (n == null ? void 0 : n.orientationLock) === " " && (n.orientationLock = ""), this.orientationLock = A(n == null ? void 0 : n.orientationLock) && this.l !== this.w ? n.orientationLock.toLowerCase() : null, this.banding = n == null ? void 0 : n.banding, this.bandingType = n == null ? void 0 : n.bandingType, A(n == null ? void 0 : n.stockLock) ? Array.isArray(n == null ? void 0 : n.stockLock) && (this.stockLock = n.stockLock.map((i) => i.toString())) : this.stockLock = [], this.inGroup = A(n == null ? void 0 : n.inGroup) ? n.inGroup : !1, this.inUserGroup = A(n == null ? void 0 : n.inUserGroup) ? n.inUserGroup : !1, this.groupID = A(n == null ? void 0 : n.groupID) ? n.groupID : null, this.addedAsGroup = A(n == null ? void 0 : n.addedAsGroup) ? n.addedAsGroup : !1, this.score = A(n == null ? void 0 : n.score) ? n.score : null, this.bestScore = A(n == null ? void 0 : n.bestScore) ? n.bestScore : {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    }, this.placementOrder = A(n == null ? void 0 : n.placementOrder) ? n.placementOrder : null, this.groupPlacementOrder = A(n == null ? void 0 : n.groupPlacementOrder) ? n.groupPlacementOrder : null, this.weighting = {}, this.calculateWeighting(), this.machining = A(n == null ? void 0 : n.machining) ? new vd(n.machining) : null);
  }
  validate(n) {
    ["orientationLock", "banding"].forEach((i) => {
      this.createIssues(ge[i](n[i]));
    }), this.machining && this.machining.validateEverything(this);
  }
  //shape weighting
  calculateWeighting() {
    const n = this.w / this.l;
    this.weighting.edge = 1 - n, this.weighting.edge *= 2;
  }
  update(n) {
    n = Ti(n), this.initShape(n), this.updateRectangle(n);
  }
  set banding(n) {
    this._banding = {
      a: !1,
      b: !1,
      c: !1,
      d: !1,
      x1: !1,
      x2: !1,
      y1: !1,
      y2: !1
    }, A(n) && Object.keys(n).forEach((i) => this._banding[i] = A(n == null ? void 0 : n[i]) ? n[i] : !1);
  }
  get banding() {
    return this._banding;
  }
  set bandingType(n) {
    if (this._bandingType = {
      a: "",
      b: "",
      c: "",
      d: "",
      x1: "",
      x2: "",
      y1: "",
      y2: ""
    }, !!A(n)) {
      Object.keys(n).forEach((i) => this._bandingType[i] = A(n[i]) ? gd(md(n[i])) : "");
      for (const [i] of Object.entries(this._bandingType))
        (this._bandingType[i] || this._banding[i]) && (this._banding[i] = !0);
    }
  }
  get bandingType() {
    return this._bandingType;
  }
  //get an array of banding in the order L1, L2, W1, W2
  get bandingArray() {
    return [
      this.banding.y1,
      this.banding.y2,
      this.banding.x1,
      this.banding.x2
    ];
  }
  //get an array of banding types in the order L1, L2, W1, W2
  get bandingTypeArray() {
    return [
      this.bandingType.y1,
      this.bandingType.y2,
      this.bandingType.x1,
      this.bandingType.x2
    ];
  }
  //compress for saving / transfer
  compress() {
    var n, i, r;
    delete this.group, this == null || delete this.stripShape, this.stockId = (n = this == null ? void 0 : this.stock) == null ? void 0 : n.id, delete this.stock, delete this.score, delete this.bestScore, !this._banding.x1 && !this._banding.x2 && !this._banding.y1 && !this._banding.y2 && (this._banding = null), !this._bandingType.x1 && !this._bandingType.x2 && !this._bandingType.y1 && !this._bandingType.y2 && (this._bandingType = null), (i = this.guillotineData) == null || delete i.myStripShape, (r = this.guillotineData) == null || delete r.mySecondaryStripShape, delete this.score, delete this.inGroup, delete this.groupID, delete this.addedAsGroup;
  }
  isExactFit(n) {
    return this.orientationLock === "w" && this.w === n.w || this.orientationLock === "l" && this.l === n.l || !this.orientationLock && (this.w === n.w || this.l === n.l);
  }
  addToStock(n) {
    this.stock = n, this.added = !0, this.inGroup = !1, n.used = !0, this.grain = n.grain, n != null && n.grain && this.rot && (this.grain = n.grain === "l" ? "w" : "l");
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.added = !1;
  }
  resetPosition() {
    this.x = 0, this.y = 0, this.placementOrder = null, this.guillotineData = {};
  }
  resetScore() {
    this.score = null, this.guillotineData = {};
  }
  setBestScore(n, i = null) {
    const r = {
      x: n.x,
      y: n.y,
      rot: n.rot,
      total: n.score.total,
      score: n.score,
      group: n.group,
      weighting: null,
      point: i
    };
    this.bestScore = r;
  }
  resetBestScore() {
    const n = {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    };
    this.bestScore = n, this.guillotineData = {};
  }
  resetBothScores() {
    this.resetBestScore(), this.resetScore(), this.placementOrder = null;
  }
  reset(n = !1) {
    this.removeFromStock(), n || this.resetBothScores(), this.resetPosition(), this.setRotation(0), this.guillotineData = {}, this.placementOrder = null, this == null || delete this.isFirstShape, this.stackedMatch = !1, this.subsetUsed = !1, this.isFirstShape = !1, this.group && this.group.destroy(), this.addedAsGroup = !1, this.groupID = null, this.group = null, this.inGroup = !1, this.groupPlacementOrder = null;
  }
  round() {
    return {
      x: Math.round(this.x),
      y: Math.round(this.y),
      l: Math.round(this.l),
      w: Math.round(this.w)
    };
  }
  //get an array of allowed rotations for this container
  getAllowedRotations(n) {
    const i = [];
    for (let r = 0; r <= 1; r++)
      this.canRotate(r, n) && this.willItFit(n, r) && i.push(r);
    return i;
  }
  /**
   * checks if a shape can rotate
   * checks for fit and grain
   * does not change the shape's rotation during the checks
   * @returns false if cannot rotate or can rotate but won't fit
   */
  canRotate(n = null, i = null) {
    if (!A(n))
      throw new Error("no rotation provided to canRotate");
    if (n === !0 && (n = 1), n === !1 && (n = 0), this.isSquare() && n || i && !this.willItFit(i, n))
      return !1;
    const r = this.getNecessaryOrientation(i);
    return !(r === "l" && n === 1 || r === "w" && n === 0);
  }
  //get the orientation lock catering for container grain
  convertShapeGrainToOrientationLock(n) {
    if (!A(this.orientationLock))
      return null;
    const i = n.getStock();
    return A(i.grain) ? this.orientationLock === i.grain ? "l" : "w" : this.orientationLock;
  }
  /**
   * get the orientation lock catering for container grain
   */
  getNecessaryOrientation(n) {
    return A(this.orientationLock) ? !n || this.isGroup() ? A(this.orientationLock) ? this.orientationLock : null : this.convertShapeGrainToOrientationLock(n) : null;
  }
  /**
   * get the required grain rotation
   * checks for stock grain and part orientationLock
   * does not check for fit
   */
  getGrainRotation(n) {
    if (!A(this.orientationLock))
      return null;
    const i = n.getStock();
    return !this.orientationLock || !A(i == null ? void 0 : i.grain) ? null : this.isGroup() ? this.orientationLock === "l" ? 0 : 1 : this.orientationLock === (i == null ? void 0 : i.grain) ? 0 : 1;
  }
  /**
   * rotates the shape if allowed
   * checks for fit and grain
   * @returns false if cannot rotate or can rotate but won't fit
   */
  rotate(n = null, i = null) {
    return n === null && (n = this.rot === 0 ? 1 : 0), this.canRotate(n, i) ? (this.rot === n || this.swapDimensions(), !0) : !1;
  }
  swapDimensions() {
    [this.l, this.w] = [this.w, this.l];
  }
  forceRotate(n) {
    return n === null && (n = this.rot === 0 ? 1 : 0), this.rot === n || this.swapDimensions(), !0;
  }
  /**
   * rotates the shape if allowed
   * checks for fit and grain
   * @returns false if cannot rotate or can rotate but won't fit
   */
  setRotation(n = null, i = null) {
    return n ? n = 1 : n = 0, i && n && !this.willItFit(i, n) ? !1 : this.rotate(n, i);
  }
  /**
   * rotates the shape if allowed
   * checks for fit and grain
   * @returns false if cannot rotate or can rotate but won't fit
   */
  setRotationToOrientationLock(n) {
    if (!n)
      throw new Error("container not supplied to setRotationToOrientationLock");
    const i = this.getNecessaryOrientation(n);
    if (i === "l")
      return this.setRotation(0);
    if (i === "w")
      return this.setRotation(1);
  }
  setRotationToOrientationLockWithoutContainer() {
    if (this.orientationLock === "l")
      return this.setRotation(0);
    if (this.orientationLock === "w")
      return this.setRotation(1);
  }
  getBandingLength(n) {
    if (n === "x1" || n === "x2")
      return this.getShortSide();
    if (n === "y1" || n === "y2")
      return this.getLongSide();
  }
  getPerimeterCutVectors() {
    var r;
    const n = (r = this.stock) != null && r.isStock() ? this.stock.getBladeWidth() / 2 : null;
    return [
      //bottom
      {
        x1: this.x - n,
        x2: this.x + this.l + n,
        y1: this.y - n,
        y2: this.y - n,
        type: "bottom"
      },
      //right
      {
        x1: this.x + this.l + n,
        x2: this.x + this.l + n,
        y1: this.y - n,
        y2: this.y + this.w + n,
        type: "right"
      },
      //top
      {
        x1: this.x - n,
        x2: this.x + this.l + n,
        y1: this.y + this.w + n,
        y2: this.y + this.w + n,
        type: "top"
      },
      //left
      {
        x1: this.x - n,
        x2: this.x - n,
        y1: this.y - n,
        y2: this.y + this.w + n,
        type: "left"
      }
    ];
  }
  getTrimmedDimensions() {
    return this.trimmed ? {
      l: this.l,
      w: this.w
    } : {
      l: this.l - this.trim.x1 - this.trim.x2,
      w: this.w - this.trim.y1 - this.trim.y2
    };
  }
  /**
   * create cuts around the perimeter of a shape
   * @param {Stock} stock
   * @returns {Array} cuts
   */
  createPerimeterCuts(n = null) {
    let i = [];
    if (n = n || this.stock, !n)
      throw new Error("stock is required to create a cut");
    return this.getPerimeterCutVectors().forEach((s) => {
      var o;
      return i.push(new fo({
        stock: (o = this.stock) != null && o.isStock() ? this.stock : n,
        x1: s.x1,
        x2: s.x2,
        y1: s.y1,
        y2: s.y2,
        type: s.type
      }));
    }), i = i.filter((s) => s.isInsideStock()), i;
  }
  createOffset(n) {
    if (!this.stock)
      throw new Error("createOffset - stock not defined");
    const i = {
      x: this.x - n,
      y: this.y - n,
      l: this.l + n * 2,
      w: this.w + n * 2
    };
    return i.x < 0 && (i.x = 0, i.l -= n), i.y < 0 && (i.y = 0, i.w -= n), i.x + i.l > this.stock.l && (i.l = this.stock.l - i.x), i.y + i.w > this.stock.w && (i.w = this.stock.w - i.y), i;
  }
  setPositionToBestScore() {
    this.setRotation(this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
  }
  /**
   * will this shape fit in a container
   */
  willItFit(n, i = null) {
    return _d(n, this, i);
  }
  clone(n = null) {
    const i = this.id.split(".");
    n ? i.pop() : (n = i.pop(), n++), i.push(n);
    const r = i.join("."), s = structuredClone(this);
    return s.id = r, s.added = !1, s.duplicate = !0, delete s.score, delete s.bestScore, delete s.stock, delete s.placementOrder, delete s.inGroup, delete s.addedAsGroup, delete s.groupID, delete s.isFirstShape, new on(s);
  }
}
class kd extends xd {
  constructor(n) {
    n.preventAutoRotation = !0;
    super(n);
    v(this, "shapes");
    v(this, "cuts");
    v(this, "phase");
    v(this, "merged");
    v(this, "children");
    v(this, "siblings");
    //used by vis only
    v(this, "parent");
    v(this, "segmentType");
    v(this, "completed");
    //used by vis only
    v(this, "rowSegment");
    //used by cuts
    v(this, "placementOrder");
    v(this, "hasBeamTrim");
    v(this, "cutDirection");
    if (this.validate(n), this.issues.length)
      throw new Error(`Segment validation failed - ${this.issues.join(" ")}`);
    delete this.trim, delete this.trimmed, this.shapes = A(n == null ? void 0 : n.shapes) ? n.shapes : [], this.cuts = [], this.phase = A(n == null ? void 0 : n.phase) ? n.phase : null, this.merged = A(n == null ? void 0 : n.merged) ? n.merged : !1, this.parent = A(n == null ? void 0 : n.parent) ? n.parent : null, this.children = A(n == null ? void 0 : n.children) ? n.children : [], this.siblings = A(n == null ? void 0 : n.siblings) ? n.siblings : [], this.offcut = A(n == null ? void 0 : n.offcut) ? n.offcut : !1, this.segmentType = A(n == null ? void 0 : n.segmentType) ? n.segmentType : null, this.placementOrder = null, this.cutDirection = A(n == null ? void 0 : n.cutDirection) ? n.cutDirection : "l", this.hasBeamTrim = A(n == null ? void 0 : n.hasBeamTrim) ? n.hasBeamTrim : !1;
  }
  validate(n) {
    var i, r;
    (ut.lessThanOrEqualTo(n.w, 0) || ut.lessThanOrEqualTo(n.l, 0)) && this.issues.push(`Zero / negative dimension - l: ${n.l}, w: ${n.w}.`), (ut.lessThan(n.x, 0) || ut.lessThan(n.y, 0)) && this.issues.push(`Negative position - x: ${n == null ? void 0 : n.x}, y: ${n == null ? void 0 : n.y}.`), n != null && n.stock && (ut.greaterThan(n.x + n.l, n.stock.l) || ut.greaterThan(n.y + n.w, n.stock.w)) && this.issues.push(`Outside of stock ${n.stock.id} - x: ${n.x}, y: ${n.y}, l: ${n.l}, w: ${n.w}, sl: ${(i = n == null ? void 0 : n.stock) == null ? void 0 : i.l}, sw: ${(r = n == null ? void 0 : n.stock) == null ? void 0 : r.w}.`);
  }
  //compress for saving / transfer
  compress() {
    var n;
    this.children = this.children.map((i) => ({
      id: i.id,
      x: i.x,
      y: i.y,
      l: i.l,
      w: i.w,
      offcut: i.offcut
    })), delete this.siblings, delete this.parent, this.stockId = (this == null ? void 0 : this.stockId) ?? ((n = this == null ? void 0 : this.stock) == null ? void 0 : n.id), delete this.stock, delete this.trim, this.algoBenchmark = null;
  }
  getBladeWidth() {
    return this.stock.getBladeWidth();
  }
  /**
   * create a normalised shape list to allow searching for duplicates
   */
  getNormalisedShapes(n) {
    return n.map((i) => ({
      x: i.x - this.x,
      y: i.y - this.y,
      l: i.l,
      w: i.w
    }));
  }
}
class Sl extends on {
  constructor(n) {
    var i;
    if (!((i = n == null ? void 0 : n.shapes) != null && i.length))
      throw new Error("attempting to create a group with no shapes");
    super(n);
    v(this, "shapes");
    v(this, "joiningDimension");
    v(this, "container");
    v(this, "outOfBounds");
    v(this, "collision");
    v(this, "counter", 0);
    v(this, "type");
    if ((n == null ? void 0 : n.type) !== "user" && n.joiningDimension !== this.l && n.joiningDimension !== this.w)
      throw new Error("joiningDimension must be either w or l");
    this.shapes = n.shapes, this.joiningDimension = n.joiningDimension, this.container = n.container, this.type = (n == null ? void 0 : n.type) ?? "auto", this.initGroup();
  }
  initGroup() {
    var n;
    (n = this == null ? void 0 : this.shapes) != null && n.length && (this.shapes.forEach((i) => {
      i.inGroup = !0;
    }), this.type !== "user" && this.sortShapes());
  }
  //get the area of the shapes (does not include blade width) - overwrites the rectangle method
  getArea() {
    return this.shapes.reduce((n, i) => n + i.getArea(), 0);
  }
  destroy() {
    this.shapes.forEach((n) => {
      n.inGroup = !1, n.addedAsGroup = !1, n == null || delete n.group, n == null || delete n.groupID, n == null || delete n.groupPlacementOrder;
    });
  }
  shouldRotateShape(n) {
    return this.l === this.joiningDimension ? n.l !== this.l : n.w !== this.w;
  }
  /**
   * orientate all the shapes correctly to fit in the group
   * @param {Stock} stock
   */
  orientateShapes(n) {
    this.shapes.forEach((i) => {
      this.shouldRotateShape(i) && i.rotate(null, n);
    });
  }
  /**
   * get the primary dimension of the group
   * @returns {String} 'w' or 'l'
   */
  getPrimaryDimension() {
    return this.isSquare() ? this.shapes[0].l === this.joiningDimension ? "w" : "l" : this.l === this.joiningDimension ? "w" : "l";
  }
  /**
   * sort the shapes by size
   */
  sortShapes() {
    this.shapes.sort((n, i) => i[this.getPrimaryDimension()] - n[this.getPrimaryDimension()]);
  }
  /**
   * place the group shapes on the stock
   */
  placeShapes(n) {
    this.added = !0, this.orientateShapes(n), this.shapes.forEach((i, r) => {
      r === 0 && this.x === 0 && this.y === 0 && (i.isFirstShape = !0), i.addedAsGroup = this.id, i.inGroup = !1, i.score = this.score, i.guillotineData = this.guillotineData, i.bestScore = this.bestScore, typeof this.placementOrder == "number" && (i.groupPlacementOrder = r, i.placementOrder = this.placementOrder + r / 1e6);
    }), this.setShapeCoordinates(!0, n);
  }
  /**
   * get shape coordinates if the shapes have not yet been placed
   */
  setShapeCoordinates(n = !0, i) {
    q1(this.shapes, i, this, this.getPrimaryDimension(), n, this.type !== "user");
  }
  //this is for groups which are created once and reused between stock e.g. user groups
  orientateCorrectly(n) {
    this.orientateShapes(n), this.setRotationToOrientationLock(n);
  }
}
function X1(t, e) {
  const n = Q1(t[0]);
  if (n && (t = t.map((u) => {
    const f = new on(u);
    return f.trimDimensions(), f;
  })), Ed(e[0]) && (e = e.map((u, f) => (u.id = `${f.toString()}.0`, new In(u)))), t.some((u) => A(u.stockLock) && u.stockLock.length))
    return;
  e = e.filter((u) => u.autoAdd === !0 || A(u.q) && u.q > 0);
  const r = e.some((u) => A(u.material)), s = e.some((u) => A(u.t));
  if (!e.every((u) => A(u.type === "linear")) && !r && !s)
    return !1;
  const a = /* @__PURE__ */ new Set();
  for (let u = 0; u < t.length; u++) {
    const f = t[u];
    f.stockMatch = {
      material: [],
      thickness: [],
      width: [],
      fit: []
    };
    const h = e.filter((p, y) => (f.stockMatch.material[y] = null, f.stockMatch.thickness[y] = null, f.stockMatch.width[y] = null, f.stockMatch.fit[y] = null, _d(p, f) ? f.stockMatch.fit[y] = !0 : f.stockMatch.fit[y] = !1, r ? p.material === f.material ? f.stockMatch.material[y] = !0 : f.stockMatch.material[y] = !1 : f.stockMatch.material[y] = !0, s ? A(f.t) && A(p.t) && ut.equalTo(f.t, p.t) ? f.stockMatch.thickness[y] = !0 : f.stockMatch.thickness[y] = !1 : f.stockMatch.thickness[y] = !0, p.type === "linear" ? (f.canRotate(0, p) && ut.equalTo(f.w, p.w) || f.canRotate(1, p) && ut.equalTo(f.l, p.w)) && (f.stockMatch.width[y] = !0) : f.stockMatch.width[y] = !0, f.stockMatch.fit[y] && f.stockMatch.material[y] && f.stockMatch.thickness[y] && f.stockMatch.width[y]));
    if (f.stockMatch.fit = !f.stockMatch.fit.every((p) => p === !1), f.stockMatch.material = !f.stockMatch.material.every((p) => p === !1), f.stockMatch.thickness = !f.stockMatch.thickness.every((p) => p === !1), f.stockMatch.width = !f.stockMatch.width.every((p) => p === !1), !n) {
      if (h.length) {
        const p = h.map((y) => y.parentID);
        f.stockLock = p, p.forEach((y) => a.add(y));
      } else
        f.stockMatch.fit ? (f.stockMatch.material || f.issues.push(`materials must match - could not find any stock with ${f.material ? f.material + " material" : "no material set"}`), f.stockMatch.thickness || f.issues.push(`thicknesses must match - could not find any stock with ${f.t ? "thickness " + f.t : "no thickness set"}`), f.stockMatch.width || f.issues.push(`widths must match for linear calculations - could not find any stock with ${f.w ? "width " + f.w : "no width set"}`)) : f.issues.push("will not fit on any stock");
      f.stockMatch = null;
    }
  }
  const l = t.filter((u) => !u.stockLock.length).sort(Is.ID), c = e.filter((u) => !a.has(u.parentID)).sort(Is.ID);
  return e = e.filter((u) => a.has(u.parentID)), (r || s) && (t = t.filter((u) => u.stockLock.length)), {
    stockList: e,
    unusableShapes: l,
    shapeList: t,
    unusableStock: c
  };
}
function J1(t) {
  return t.type === "user";
}
function Ls(t) {
  return t instanceof Sl && t.type !== "user";
}
function Sd(t) {
  return t instanceof Sl && t.type === "user";
}
function Ed(t) {
  return t instanceof wd;
}
function Q1(t) {
  return t instanceof kl;
}
function va(t) {
  return t instanceof In;
}
function Z1(t) {
  return t instanceof on;
}
function tv(t) {
  return t instanceof kd;
}
function ev(t) {
  return t instanceof Tn;
}
var nv = typeof global == "object" && global && global.Object === Object && global, iv = typeof self == "object" && self && self.Object === Object && self, El = nv || iv || Function("return this")(), Ai = El.Symbol, Td = Object.prototype, rv = Td.hasOwnProperty, sv = Td.toString, Vi = Ai ? Ai.toStringTag : void 0;
function ov(t) {
  var e = rv.call(t, Vi), n = t[Vi];
  try {
    t[Vi] = void 0;
    var i = !0;
  } catch {
  }
  var r = sv.call(t);
  return i && (e ? t[Vi] = n : delete t[Vi]), r;
}
var av = Object.prototype, lv = av.toString;
function cv(t) {
  return lv.call(t);
}
var uv = "[object Null]", fv = "[object Undefined]", Pu = Ai ? Ai.toStringTag : void 0;
function Ad(t) {
  return t == null ? t === void 0 ? fv : uv : Pu && Pu in Object(t) ? ov(t) : cv(t);
}
function hv(t) {
  return t != null && typeof t == "object";
}
var dv = "[object Symbol]";
function Tl(t) {
  return typeof t == "symbol" || hv(t) && Ad(t) == dv;
}
function pv(t, e) {
  for (var n = -1, i = t == null ? 0 : t.length, r = Array(i); ++n < i; )
    r[n] = e(t[n], n, t);
  return r;
}
var Al = Array.isArray, mv = 1 / 0, Nu = Ai ? Ai.prototype : void 0, Iu = Nu ? Nu.toString : void 0;
function Cd(t) {
  if (typeof t == "string")
    return t;
  if (Al(t))
    return pv(t, Cd) + "";
  if (Tl(t))
    return Iu ? Iu.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -mv ? "-0" : e;
}
function Ms(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var gv = "[object AsyncFunction]", yv = "[object Function]", bv = "[object GeneratorFunction]", vv = "[object Proxy]";
function _v(t) {
  if (!Ms(t))
    return !1;
  var e = Ad(t);
  return e == yv || e == bv || e == gv || e == vv;
}
var Mo = El["__core-js_shared__"], Lu = function() {
  var t = /[^.]+$/.exec(Mo && Mo.keys && Mo.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function wv(t) {
  return !!Lu && Lu in t;
}
var xv = Function.prototype, kv = xv.toString;
function Sv(t) {
  if (t != null) {
    try {
      return kv.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Ev = /[\\^$.*+?()[\]{}|]/g, Tv = /^\[object .+?Constructor\]$/, Av = Function.prototype, Cv = Object.prototype, Ov = Av.toString, Pv = Cv.hasOwnProperty, Nv = RegExp(
  "^" + Ov.call(Pv).replace(Ev, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Iv(t) {
  if (!Ms(t) || wv(t))
    return !1;
  var e = _v(t) ? Nv : Tv;
  return e.test(Sv(t));
}
function Lv(t, e) {
  return t == null ? void 0 : t[e];
}
function Cl(t, e) {
  var n = Lv(t, e);
  return Iv(n) ? n : void 0;
}
var Mu = function() {
  try {
    var t = Cl(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), Mv = 9007199254740991, Rv = /^(?:0|[1-9]\d*)$/;
function Dv(t, e) {
  var n = typeof t;
  return e = e ?? Mv, !!e && (n == "number" || n != "symbol" && Rv.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Fv(t, e, n) {
  e == "__proto__" && Mu ? Mu(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function Od(t, e) {
  return t === e || t !== t && e !== e;
}
var $v = Object.prototype, Bv = $v.hasOwnProperty;
function Uv(t, e, n) {
  var i = t[e];
  (!(Bv.call(t, e) && Od(i, n)) || n === void 0 && !(e in t)) && Fv(t, e, n);
}
var qv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Wv = /^\w*$/;
function Hv(t, e) {
  if (Al(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Tl(t) ? !0 : Wv.test(t) || !qv.test(t) || e != null && t in Object(e);
}
var ur = Cl(Object, "create");
function Vv() {
  this.__data__ = ur ? ur(null) : {}, this.size = 0;
}
function zv(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Gv = "__lodash_hash_undefined__", jv = Object.prototype, Yv = jv.hasOwnProperty;
function Kv(t) {
  var e = this.__data__;
  if (ur) {
    var n = e[t];
    return n === Gv ? void 0 : n;
  }
  return Yv.call(e, t) ? e[t] : void 0;
}
var Xv = Object.prototype, Jv = Xv.hasOwnProperty;
function Qv(t) {
  var e = this.__data__;
  return ur ? e[t] !== void 0 : Jv.call(e, t);
}
var Zv = "__lodash_hash_undefined__";
function t_(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = ur && e === void 0 ? Zv : e, this;
}
function Jn(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
Jn.prototype.clear = Vv;
Jn.prototype.delete = zv;
Jn.prototype.get = Kv;
Jn.prototype.has = Qv;
Jn.prototype.set = t_;
function e_() {
  this.__data__ = [], this.size = 0;
}
function po(t, e) {
  for (var n = t.length; n--; )
    if (Od(t[n][0], e))
      return n;
  return -1;
}
var n_ = Array.prototype, i_ = n_.splice;
function r_(t) {
  var e = this.__data__, n = po(e, t);
  if (n < 0)
    return !1;
  var i = e.length - 1;
  return n == i ? e.pop() : i_.call(e, n, 1), --this.size, !0;
}
function s_(t) {
  var e = this.__data__, n = po(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function o_(t) {
  return po(this.__data__, t) > -1;
}
function a_(t, e) {
  var n = this.__data__, i = po(n, t);
  return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this;
}
function Fi(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
Fi.prototype.clear = e_;
Fi.prototype.delete = r_;
Fi.prototype.get = s_;
Fi.prototype.has = o_;
Fi.prototype.set = a_;
var l_ = Cl(El, "Map");
function c_() {
  this.size = 0, this.__data__ = {
    hash: new Jn(),
    map: new (l_ || Fi)(),
    string: new Jn()
  };
}
function u_(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function mo(t, e) {
  var n = t.__data__;
  return u_(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function f_(t) {
  var e = mo(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function h_(t) {
  return mo(this, t).get(t);
}
function d_(t) {
  return mo(this, t).has(t);
}
function p_(t, e) {
  var n = mo(this, t), i = n.size;
  return n.set(t, e), this.size += n.size == i ? 0 : 1, this;
}
function ni(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
ni.prototype.clear = c_;
ni.prototype.delete = f_;
ni.prototype.get = h_;
ni.prototype.has = d_;
ni.prototype.set = p_;
var m_ = "Expected a function";
function Ol(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(m_);
  var n = function() {
    var i = arguments, r = e ? e.apply(this, i) : i[0], s = n.cache;
    if (s.has(r))
      return s.get(r);
    var o = t.apply(this, i);
    return n.cache = s.set(r, o) || s, o;
  };
  return n.cache = new (Ol.Cache || ni)(), n;
}
Ol.Cache = ni;
var g_ = 500;
function y_(t) {
  var e = Ol(t, function(i) {
    return n.size === g_ && n.clear(), i;
  }), n = e.cache;
  return e;
}
var b_ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, v_ = /\\(\\)?/g, __ = y_(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(b_, function(n, i, r, s) {
    e.push(r ? s.replace(v_, "$1") : i || n);
  }), e;
});
function w_(t) {
  return t == null ? "" : Cd(t);
}
function Pd(t, e) {
  return Al(t) ? t : Hv(t, e) ? [t] : __(w_(t));
}
var x_ = 1 / 0;
function Nd(t) {
  if (typeof t == "string" || Tl(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -x_ ? "-0" : e;
}
function k_(t, e) {
  e = Pd(e, t);
  for (var n = 0, i = e.length; t != null && n < i; )
    t = t[Nd(e[n++])];
  return n && n == i ? t : void 0;
}
function Rs(t, e, n) {
  var i = t == null ? void 0 : k_(t, e);
  return i === void 0 ? n : i;
}
function S_(t, e, n, i) {
  if (!Ms(t))
    return t;
  e = Pd(e, t);
  for (var r = -1, s = e.length, o = s - 1, a = t; a != null && ++r < s; ) {
    var l = Nd(e[r]), c = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (r != o) {
      var u = a[l];
      c = i ? i(u, l, a) : void 0, c === void 0 && (c = Ms(u) ? u : Dv(e[r + 1]) ? [] : {});
    }
    Uv(a, l, c), a = a[l];
  }
  return t;
}
function Ru(t, e, n) {
  return t == null ? t : S_(t, e, n);
}
var _a = "http://www.w3.org/1999/xhtml";
const Du = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: _a,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Id(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Du.hasOwnProperty(e) ? { space: Du[e], local: t } : t;
}
function E_(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === _a && e.documentElement.namespaceURI === _a ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function T_(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Ld(t) {
  var e = Id(t);
  return (e.local ? T_ : E_)(e);
}
function A_() {
}
function Md(t) {
  return t == null ? A_ : function() {
    return this.querySelector(t);
  };
}
function C_(t) {
  typeof t != "function" && (t = Md(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var s = e[r], o = s.length, a = i[r] = new Array(o), l, c, u = 0; u < o; ++u)
      (l = s[u]) && (c = t.call(l, l.__data__, u, s)) && ("__data__" in l && (c.__data__ = l.__data__), a[u] = c);
  return new ce(i, this._parents);
}
function Rd(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function O_() {
  return [];
}
function P_(t) {
  return t == null ? O_ : function() {
    return this.querySelectorAll(t);
  };
}
function N_(t) {
  return function() {
    return Rd(t.apply(this, arguments));
  };
}
function I_(t) {
  typeof t == "function" ? t = N_(t) : t = P_(t);
  for (var e = this._groups, n = e.length, i = [], r = [], s = 0; s < n; ++s)
    for (var o = e[s], a = o.length, l, c = 0; c < a; ++c)
      (l = o[c]) && (i.push(t.call(l, l.__data__, c, o)), r.push(l));
  return new ce(i, r);
}
function L_(t) {
  return function() {
    return this.matches(t);
  };
}
function Dd(t) {
  return function(e) {
    return e.matches(t);
  };
}
var M_ = Array.prototype.find;
function R_(t) {
  return function() {
    return M_.call(this.children, t);
  };
}
function D_() {
  return this.firstElementChild;
}
function F_(t) {
  return this.select(t == null ? D_ : R_(typeof t == "function" ? t : Dd(t)));
}
var $_ = Array.prototype.filter;
function B_() {
  return Array.from(this.children);
}
function U_(t) {
  return function() {
    return $_.call(this.children, t);
  };
}
function q_(t) {
  return this.selectAll(t == null ? B_ : U_(typeof t == "function" ? t : Dd(t)));
}
function W_(t) {
  typeof t != "function" && (t = L_(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var s = e[r], o = s.length, a = i[r] = [], l, c = 0; c < o; ++c)
      (l = s[c]) && t.call(l, l.__data__, c, s) && a.push(l);
  return new ce(i, this._parents);
}
function Fd(t) {
  return new Array(t.length);
}
function H_() {
  return new ce(this._enter || this._groups.map(Fd), this._parents);
}
function Ds(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Ds.prototype = {
  constructor: Ds,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function V_(t) {
  return function() {
    return t;
  };
}
function z_(t, e, n, i, r, s) {
  for (var o = 0, a, l = e.length, c = s.length; o < c; ++o)
    (a = e[o]) ? (a.__data__ = s[o], i[o] = a) : n[o] = new Ds(t, s[o]);
  for (; o < l; ++o)
    (a = e[o]) && (r[o] = a);
}
function G_(t, e, n, i, r, s, o) {
  var a, l, c = /* @__PURE__ */ new Map(), u = e.length, f = s.length, h = new Array(u), p;
  for (a = 0; a < u; ++a)
    (l = e[a]) && (h[a] = p = o.call(l, l.__data__, a, e) + "", c.has(p) ? r[a] = l : c.set(p, l));
  for (a = 0; a < f; ++a)
    p = o.call(t, s[a], a, s) + "", (l = c.get(p)) ? (i[a] = l, l.__data__ = s[a], c.delete(p)) : n[a] = new Ds(t, s[a]);
  for (a = 0; a < u; ++a)
    (l = e[a]) && c.get(h[a]) === l && (r[a] = l);
}
function j_(t) {
  return t.__data__;
}
function Y_(t, e) {
  if (!arguments.length)
    return Array.from(this, j_);
  var n = e ? G_ : z_, i = this._parents, r = this._groups;
  typeof t != "function" && (t = V_(t));
  for (var s = r.length, o = new Array(s), a = new Array(s), l = new Array(s), c = 0; c < s; ++c) {
    var u = i[c], f = r[c], h = f.length, p = K_(t.call(u, u && u.__data__, c, i)), y = p.length, k = a[c] = new Array(y), w = o[c] = new Array(y), g = l[c] = new Array(h);
    n(u, f, k, w, g, p, e);
    for (var b = 0, x = 0, S, O; b < y; ++b)
      if (S = k[b]) {
        for (b >= x && (x = b + 1); !(O = w[x]) && ++x < y; )
          ;
        S._next = O || null;
      }
  }
  return o = new ce(o, i), o._enter = a, o._exit = l, o;
}
function K_(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function X_() {
  return new ce(this._exit || this._groups.map(Fd), this._parents);
}
function J_(t, e, n) {
  var i = this.enter(), r = this, s = this.exit();
  return typeof t == "function" ? (i = t(i), i && (i = i.selection())) : i = i.append(t + ""), e != null && (r = e(r), r && (r = r.selection())), n == null ? s.remove() : n(s), i && r ? i.merge(r).order() : r;
}
function Q_(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, i = e._groups, r = n.length, s = i.length, o = Math.min(r, s), a = new Array(r), l = 0; l < o; ++l)
    for (var c = n[l], u = i[l], f = c.length, h = a[l] = new Array(f), p, y = 0; y < f; ++y)
      (p = c[y] || u[y]) && (h[y] = p);
  for (; l < r; ++l)
    a[l] = n[l];
  return new ce(a, this._parents);
}
function Z_() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var i = t[e], r = i.length - 1, s = i[r], o; --r >= 0; )
      (o = i[r]) && (s && o.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(o, s), s = o);
  return this;
}
function tw(t) {
  t || (t = ew);
  function e(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var n = this._groups, i = n.length, r = new Array(i), s = 0; s < i; ++s) {
    for (var o = n[s], a = o.length, l = r[s] = new Array(a), c, u = 0; u < a; ++u)
      (c = o[u]) && (l[u] = c);
    l.sort(e);
  }
  return new ce(r, this._parents).order();
}
function ew(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function nw() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function iw() {
  return Array.from(this);
}
function rw() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, s = i.length; r < s; ++r) {
      var o = i[r];
      if (o)
        return o;
    }
  return null;
}
function sw() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function ow() {
  return !this.node();
}
function aw(t) {
  for (var e = this._groups, n = 0, i = e.length; n < i; ++n)
    for (var r = e[n], s = 0, o = r.length, a; s < o; ++s)
      (a = r[s]) && t.call(a, a.__data__, s, r);
  return this;
}
function lw(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function cw(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function uw(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function fw(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function hw(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function dw(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function pw(t, e) {
  var n = Id(t);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((e == null ? n.local ? cw : lw : typeof e == "function" ? n.local ? dw : hw : n.local ? fw : uw)(n, e));
}
function $d(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function mw(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function gw(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function yw(t, e, n) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.style.removeProperty(t) : this.style.setProperty(t, i, n);
  };
}
function bw(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? mw : typeof e == "function" ? yw : gw)(t, e, n ?? "")) : vw(this.node(), t);
}
function vw(t, e) {
  return t.style.getPropertyValue(e) || $d(t).getComputedStyle(t, null).getPropertyValue(e);
}
function _w(t) {
  return function() {
    delete this[t];
  };
}
function ww(t, e) {
  return function() {
    this[t] = e;
  };
}
function xw(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function kw(t, e) {
  return arguments.length > 1 ? this.each((e == null ? _w : typeof e == "function" ? xw : ww)(t, e)) : this.node()[t];
}
function Bd(t) {
  return t.trim().split(/^|\s+/);
}
function Pl(t) {
  return t.classList || new Ud(t);
}
function Ud(t) {
  this._node = t, this._names = Bd(t.getAttribute("class") || "");
}
Ud.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function qd(t, e) {
  for (var n = Pl(t), i = -1, r = e.length; ++i < r; )
    n.add(e[i]);
}
function Wd(t, e) {
  for (var n = Pl(t), i = -1, r = e.length; ++i < r; )
    n.remove(e[i]);
}
function Sw(t) {
  return function() {
    qd(this, t);
  };
}
function Ew(t) {
  return function() {
    Wd(this, t);
  };
}
function Tw(t, e) {
  return function() {
    (e.apply(this, arguments) ? qd : Wd)(this, t);
  };
}
function Aw(t, e) {
  var n = Bd(t + "");
  if (arguments.length < 2) {
    for (var i = Pl(this.node()), r = -1, s = n.length; ++r < s; )
      if (!i.contains(n[r]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Tw : e ? Sw : Ew)(n, e));
}
function Cw() {
  this.textContent = "";
}
function Ow(t) {
  return function() {
    this.textContent = t;
  };
}
function Pw(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Nw(t) {
  return arguments.length ? this.each(t == null ? Cw : (typeof t == "function" ? Pw : Ow)(t)) : this.node().textContent;
}
function Iw() {
  this.innerHTML = "";
}
function Lw(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Mw(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Rw(t) {
  return arguments.length ? this.each(t == null ? Iw : (typeof t == "function" ? Mw : Lw)(t)) : this.node().innerHTML;
}
function Dw() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Fw() {
  return this.each(Dw);
}
function $w() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Bw() {
  return this.each($w);
}
function Uw(t) {
  var e = typeof t == "function" ? t : Ld(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function qw() {
  return null;
}
function Ww(t, e) {
  var n = typeof t == "function" ? t : Ld(t), i = e == null ? qw : typeof e == "function" ? e : Md(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function Hw() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Vw() {
  return this.each(Hw);
}
function zw() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Gw() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function jw(t) {
  return this.select(t ? Gw : zw);
}
function Yw(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Kw(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Xw(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", i = e.indexOf(".");
    return i >= 0 && (n = e.slice(i + 1), e = e.slice(0, i)), { type: e, name: n };
  });
}
function Jw(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, i = -1, r = e.length, s; n < r; ++n)
        s = e[n], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++i] = s;
      ++i ? e.length = i : delete this.__on;
    }
  };
}
function Qw(t, e, n) {
  return function() {
    var i = this.__on, r, s = Kw(e);
    if (i) {
      for (var o = 0, a = i.length; o < a; ++o)
        if ((r = i[o]).type === t.type && r.name === t.name) {
          this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = s, r.options = n), r.value = e;
          return;
        }
    }
    this.addEventListener(t.type, s, n), r = { type: t.type, name: t.name, value: e, listener: s, options: n }, i ? i.push(r) : this.__on = [r];
  };
}
function Zw(t, e, n) {
  var i = Xw(t + ""), r, s = i.length, o;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, c = a.length, u; l < c; ++l)
        for (r = 0, u = a[l]; r < s; ++r)
          if ((o = i[r]).type === u.type && o.name === u.name)
            return u.value;
    }
    return;
  }
  for (a = e ? Qw : Jw, r = 0; r < s; ++r)
    this.each(a(i[r], e, n));
  return this;
}
function Hd(t, e, n) {
  var i = $d(t), r = i.CustomEvent;
  typeof r == "function" ? r = new r(e, n) : (r = i.document.createEvent("Event"), n ? (r.initEvent(e, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(e, !1, !1)), t.dispatchEvent(r);
}
function tx(t, e) {
  return function() {
    return Hd(this, t, e);
  };
}
function ex(t, e) {
  return function() {
    return Hd(this, t, e.apply(this, arguments));
  };
}
function nx(t, e) {
  return this.each((typeof e == "function" ? ex : tx)(t, e));
}
function* ix() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, s = i.length, o; r < s; ++r)
      (o = i[r]) && (yield o);
}
var Vd = [null];
function ce(t, e) {
  this._groups = t, this._parents = e;
}
function rx() {
  return this;
}
ce.prototype = {
  constructor: ce,
  select: C_,
  selectAll: I_,
  selectChild: F_,
  selectChildren: q_,
  filter: W_,
  data: Y_,
  enter: H_,
  exit: X_,
  join: J_,
  merge: Q_,
  selection: rx,
  order: Z_,
  sort: tw,
  call: nw,
  nodes: iw,
  node: rw,
  size: sw,
  empty: ow,
  each: aw,
  attr: pw,
  style: bw,
  property: kw,
  classed: Aw,
  text: Nw,
  html: Rw,
  raise: Fw,
  lower: Bw,
  append: Uw,
  insert: Ww,
  remove: Vw,
  clone: jw,
  datum: Yw,
  on: Zw,
  dispatch: nx,
  [Symbol.iterator]: ix
};
function sx(t) {
  return typeof t == "string" ? new ce([[document.querySelector(t)]], [document.documentElement]) : new ce([[t]], Vd);
}
function ox(t) {
  return typeof t == "string" ? new ce([document.querySelectorAll(t)], [document.documentElement]) : new ce([Rd(t)], Vd);
}
function ms(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ax(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function zd(t) {
  let e, n, i;
  t.length !== 2 ? (e = ms, n = (a, l) => ms(t(a), l), i = (a, l) => t(a) - l) : (e = t === ms || t === ax ? t : lx, n = t, i = t);
  function r(a, l, c = 0, u = a.length) {
    if (c < u) {
      if (e(l, l) !== 0)
        return u;
      do {
        const f = c + u >>> 1;
        n(a[f], l) < 0 ? c = f + 1 : u = f;
      } while (c < u);
    }
    return c;
  }
  function s(a, l, c = 0, u = a.length) {
    if (c < u) {
      if (e(l, l) !== 0)
        return u;
      do {
        const f = c + u >>> 1;
        n(a[f], l) <= 0 ? c = f + 1 : u = f;
      } while (c < u);
    }
    return c;
  }
  function o(a, l, c = 0, u = a.length) {
    const f = r(a, l, c, u - 1);
    return f > c && i(a[f - 1], l) > -i(a[f], l) ? f - 1 : f;
  }
  return { left: r, center: o, right: s };
}
function lx() {
  return 0;
}
function cx(t) {
  return t === null ? NaN : +t;
}
const ux = zd(ms), fx = ux.right;
zd(cx).center;
const hx = Math.sqrt(50), dx = Math.sqrt(10), px = Math.sqrt(2);
function Fs(t, e, n) {
  const i = (e - t) / Math.max(0, n), r = Math.floor(Math.log10(i)), s = i / Math.pow(10, r), o = s >= hx ? 10 : s >= dx ? 5 : s >= px ? 2 : 1;
  let a, l, c;
  return r < 0 ? (c = Math.pow(10, -r) / o, a = Math.round(t * c), l = Math.round(e * c), a / c < t && ++a, l / c > e && --l, c = -c) : (c = Math.pow(10, r) * o, a = Math.round(t / c), l = Math.round(e / c), a * c < t && ++a, l * c > e && --l), l < a && 0.5 <= n && n < 2 ? Fs(t, e, n * 2) : [a, l, c];
}
function mx(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0))
    return [];
  if (t === e)
    return [t];
  const i = e < t, [r, s, o] = i ? Fs(e, t, n) : Fs(t, e, n);
  if (!(s >= r))
    return [];
  const a = s - r + 1, l = new Array(a);
  if (i)
    if (o < 0)
      for (let c = 0; c < a; ++c)
        l[c] = (s - c) / -o;
    else
      for (let c = 0; c < a; ++c)
        l[c] = (s - c) * o;
  else if (o < 0)
    for (let c = 0; c < a; ++c)
      l[c] = (r + c) / -o;
  else
    for (let c = 0; c < a; ++c)
      l[c] = (r + c) * o;
  return l;
}
function wa(t, e, n) {
  return e = +e, t = +t, n = +n, Fs(t, e, n)[2];
}
function gx(t, e, n) {
  e = +e, t = +t, n = +n;
  const i = e < t, r = i ? wa(e, t, n) : wa(t, e, n);
  return (i ? -1 : 1) * (r < 0 ? 1 / -r : r);
}
function yx(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
function bx(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
    default: {
      this.domain(t), typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
  }
  return this;
}
function Nl(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Gd(t, e) {
  var n = Object.create(t.prototype);
  for (var i in e)
    n[i] = e[i];
  return n;
}
function kr() {
}
var fr = 0.7, $s = 1 / fr, vi = "\\s*([+-]?\\d+)\\s*", hr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ye = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", vx = /^#([0-9a-f]{3,8})$/, _x = new RegExp(`^rgb\\(${vi},${vi},${vi}\\)$`), wx = new RegExp(`^rgb\\(${Ye},${Ye},${Ye}\\)$`), xx = new RegExp(`^rgba\\(${vi},${vi},${vi},${hr}\\)$`), kx = new RegExp(`^rgba\\(${Ye},${Ye},${Ye},${hr}\\)$`), Sx = new RegExp(`^hsl\\(${hr},${Ye},${Ye}\\)$`), Ex = new RegExp(`^hsla\\(${hr},${Ye},${Ye},${hr}\\)$`), Fu = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Nl(kr, Ci, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: $u,
  // Deprecated! Use color.formatHex.
  formatHex: $u,
  formatHex8: Tx,
  formatHsl: Ax,
  formatRgb: Bu,
  toString: Bu
});
function $u() {
  return this.rgb().formatHex();
}
function Tx() {
  return this.rgb().formatHex8();
}
function Ax() {
  return jd(this).formatHsl();
}
function Bu() {
  return this.rgb().formatRgb();
}
function Ci(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = vx.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Uu(e) : n === 3 ? new ae(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Vr(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Vr(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = _x.exec(t)) ? new ae(e[1], e[2], e[3], 1) : (e = wx.exec(t)) ? new ae(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = xx.exec(t)) ? Vr(e[1], e[2], e[3], e[4]) : (e = kx.exec(t)) ? Vr(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Sx.exec(t)) ? Hu(e[1], e[2] / 100, e[3] / 100, 1) : (e = Ex.exec(t)) ? Hu(e[1], e[2] / 100, e[3] / 100, e[4]) : Fu.hasOwnProperty(t) ? Uu(Fu[t]) : t === "transparent" ? new ae(NaN, NaN, NaN, 0) : null;
}
function Uu(t) {
  return new ae(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Vr(t, e, n, i) {
  return i <= 0 && (t = e = n = NaN), new ae(t, e, n, i);
}
function Cx(t) {
  return t instanceof kr || (t = Ci(t)), t ? (t = t.rgb(), new ae(t.r, t.g, t.b, t.opacity)) : new ae();
}
function Ut(t, e, n, i) {
  return arguments.length === 1 ? Cx(t) : new ae(t, e, n, i ?? 1);
}
function ae(t, e, n, i) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +i;
}
Nl(ae, Ut, Gd(kr, {
  brighter(t) {
    return t = t == null ? $s : Math.pow($s, t), new ae(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? fr : Math.pow(fr, t), new ae(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ae(jn(this.r), jn(this.g), jn(this.b), Bs(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: qu,
  // Deprecated! Use color.formatHex.
  formatHex: qu,
  formatHex8: Ox,
  formatRgb: Wu,
  toString: Wu
}));
function qu() {
  return `#${Wn(this.r)}${Wn(this.g)}${Wn(this.b)}`;
}
function Ox() {
  return `#${Wn(this.r)}${Wn(this.g)}${Wn(this.b)}${Wn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Wu() {
  const t = Bs(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${jn(this.r)}, ${jn(this.g)}, ${jn(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Bs(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function jn(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Wn(t) {
  return t = jn(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Hu(t, e, n, i) {
  return i <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Ne(t, e, n, i);
}
function jd(t) {
  if (t instanceof Ne)
    return new Ne(t.h, t.s, t.l, t.opacity);
  if (t instanceof kr || (t = Ci(t)), !t)
    return new Ne();
  if (t instanceof Ne)
    return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, i = t.b / 255, r = Math.min(e, n, i), s = Math.max(e, n, i), o = NaN, a = s - r, l = (s + r) / 2;
  return a ? (e === s ? o = (n - i) / a + (n < i) * 6 : n === s ? o = (i - e) / a + 2 : o = (e - n) / a + 4, a /= l < 0.5 ? s + r : 2 - s - r, o *= 60) : a = l > 0 && l < 1 ? 0 : o, new Ne(o, a, l, t.opacity);
}
function Px(t, e, n, i) {
  return arguments.length === 1 ? jd(t) : new Ne(t, e, n, i ?? 1);
}
function Ne(t, e, n, i) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +i;
}
Nl(Ne, Px, Gd(kr, {
  brighter(t) {
    return t = t == null ? $s : Math.pow($s, t), new Ne(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? fr : Math.pow(fr, t), new Ne(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * e, r = 2 * n - i;
    return new ae(
      Ro(t >= 240 ? t - 240 : t + 120, r, i),
      Ro(t, r, i),
      Ro(t < 120 ? t + 240 : t - 120, r, i),
      this.opacity
    );
  },
  clamp() {
    return new Ne(Vu(this.h), zr(this.s), zr(this.l), Bs(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Bs(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Vu(this.h)}, ${zr(this.s) * 100}%, ${zr(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Vu(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function zr(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Ro(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Il = (t) => () => t;
function Nx(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Ix(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(i) {
    return Math.pow(t + i * e, n);
  };
}
function Lx(t) {
  return (t = +t) == 1 ? Yd : function(e, n) {
    return n - e ? Ix(e, n, t) : Il(isNaN(e) ? n : e);
  };
}
function Yd(t, e) {
  var n = e - t;
  return n ? Nx(t, n) : Il(isNaN(t) ? e : t);
}
const zu = function t(e) {
  var n = Lx(e);
  function i(r, s) {
    var o = n((r = Ut(r)).r, (s = Ut(s)).r), a = n(r.g, s.g), l = n(r.b, s.b), c = Yd(r.opacity, s.opacity);
    return function(u) {
      return r.r = o(u), r.g = a(u), r.b = l(u), r.opacity = c(u), r + "";
    };
  }
  return i.gamma = t, i;
}(1);
function Mx(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, i = e.slice(), r;
  return function(s) {
    for (r = 0; r < n; ++r)
      i[r] = t[r] * (1 - s) + e[r] * s;
    return i;
  };
}
function Rx(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Dx(t, e) {
  var n = e ? e.length : 0, i = t ? Math.min(n, t.length) : 0, r = new Array(i), s = new Array(n), o;
  for (o = 0; o < i; ++o)
    r[o] = go(t[o], e[o]);
  for (; o < n; ++o)
    s[o] = e[o];
  return function(a) {
    for (o = 0; o < i; ++o)
      s[o] = r[o](a);
    return s;
  };
}
function Fx(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(i) {
    return n.setTime(t * (1 - i) + e * i), n;
  };
}
function Us(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function $x(t, e) {
  var n = {}, i = {}, r;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (r in e)
    r in t ? n[r] = go(t[r], e[r]) : i[r] = e[r];
  return function(s) {
    for (r in n)
      i[r] = n[r](s);
    return i;
  };
}
var xa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Do = new RegExp(xa.source, "g");
function Bx(t) {
  return function() {
    return t;
  };
}
function Ux(t) {
  return function(e) {
    return t(e) + "";
  };
}
function qx(t, e) {
  var n = xa.lastIndex = Do.lastIndex = 0, i, r, s, o = -1, a = [], l = [];
  for (t = t + "", e = e + ""; (i = xa.exec(t)) && (r = Do.exec(e)); )
    (s = r.index) > n && (s = e.slice(n, s), a[o] ? a[o] += s : a[++o] = s), (i = i[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, l.push({ i: o, x: Us(i, r) })), n = Do.lastIndex;
  return n < e.length && (s = e.slice(n), a[o] ? a[o] += s : a[++o] = s), a.length < 2 ? l[0] ? Ux(l[0].x) : Bx(e) : (e = l.length, function(c) {
    for (var u = 0, f; u < e; ++u)
      a[(f = l[u]).i] = f.x(c);
    return a.join("");
  });
}
function go(t, e) {
  var n = typeof e, i;
  return e == null || n === "boolean" ? Il(e) : (n === "number" ? Us : n === "string" ? (i = Ci(e)) ? (e = i, zu) : qx : e instanceof Ci ? zu : e instanceof Date ? Fx : Rx(e) ? Mx : Array.isArray(e) ? Dx : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? $x : Us)(t, e);
}
function Kd(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
function Wx(t) {
  return function() {
    return t;
  };
}
function Hx(t) {
  return +t;
}
var Gu = [0, 1];
function _n(t) {
  return t;
}
function ka(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Wx(isNaN(e) ? NaN : 0.5);
}
function Vx(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(i) {
    return Math.max(t, Math.min(e, i));
  };
}
function zx(t, e, n) {
  var i = t[0], r = t[1], s = e[0], o = e[1];
  return r < i ? (i = ka(r, i), s = n(o, s)) : (i = ka(i, r), s = n(s, o)), function(a) {
    return s(i(a));
  };
}
function Gx(t, e, n) {
  var i = Math.min(t.length, e.length) - 1, r = new Array(i), s = new Array(i), o = -1;
  for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < i; )
    r[o] = ka(t[o], t[o + 1]), s[o] = n(e[o], e[o + 1]);
  return function(a) {
    var l = fx(t, a, 1, i) - 1;
    return s[l](r[l](a));
  };
}
function jx(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Yx() {
  var t = Gu, e = Gu, n = go, i, r, s, o = _n, a, l, c;
  function u() {
    var h = Math.min(t.length, e.length);
    return o !== _n && (o = Vx(t[0], t[h - 1])), a = h > 2 ? Gx : zx, l = c = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? s : (l || (l = a(t.map(i), e, n)))(i(o(h)));
  }
  return f.invert = function(h) {
    return o(r((c || (c = a(e, t.map(i), Us)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, Hx), u()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (e = Array.from(h), u()) : e.slice();
  }, f.rangeRound = function(h) {
    return e = Array.from(h), n = Kd, u();
  }, f.clamp = function(h) {
    return arguments.length ? (o = h ? !0 : _n, u()) : o !== _n;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, u()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (s = h, f) : s;
  }, function(h, p) {
    return i = h, r = p, u();
  };
}
function Kx() {
  return Yx()(_n, _n);
}
function Xx(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function qs(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var n, i = t.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +t.slice(n + 1)
  ];
}
function Oi(t) {
  return t = qs(Math.abs(t)), t ? t[1] : NaN;
}
function Jx(t, e) {
  return function(n, i) {
    for (var r = n.length, s = [], o = 0, a = t[0], l = 0; r > 0 && a > 0 && (l + a + 1 > i && (a = Math.max(1, i - l)), s.push(n.substring(r -= a, r + a)), !((l += a + 1) > i)); )
      a = t[o = (o + 1) % t.length];
    return s.reverse().join(e);
  };
}
function Qx(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var Zx = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ws(t) {
  if (!(e = Zx.exec(t)))
    throw new Error("invalid format: " + t);
  var e;
  return new Ll({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
Ws.prototype = Ll.prototype;
function Ll(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Ll.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function tk(t) {
  t:
    for (var e = t.length, n = 1, i = -1, r; n < e; ++n)
      switch (t[n]) {
        case ".":
          i = r = n;
          break;
        case "0":
          i === 0 && (i = n), r = n;
          break;
        default:
          if (!+t[n])
            break t;
          i > 0 && (i = 0);
          break;
      }
  return i > 0 ? t.slice(0, i) + t.slice(r + 1) : t;
}
var Xd;
function ek(t, e) {
  var n = qs(t, e);
  if (!n)
    return t + "";
  var i = n[0], r = n[1], s = r - (Xd = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, o = i.length;
  return s === o ? i : s > o ? i + new Array(s - o + 1).join("0") : s > 0 ? i.slice(0, s) + "." + i.slice(s) : "0." + new Array(1 - s).join("0") + qs(t, Math.max(0, e + s - 1))[0];
}
function ju(t, e) {
  var n = qs(t, e);
  if (!n)
    return t + "";
  var i = n[0], r = n[1];
  return r < 0 ? "0." + new Array(-r).join("0") + i : i.length > r + 1 ? i.slice(0, r + 1) + "." + i.slice(r + 1) : i + new Array(r - i.length + 2).join("0");
}
const Yu = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Xx,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => ju(t * 100, e),
  r: ju,
  s: ek,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Ku(t) {
  return t;
}
var Xu = Array.prototype.map, Ju = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function nk(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? Ku : Jx(Xu.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", i = t.currency === void 0 ? "" : t.currency[1] + "", r = t.decimal === void 0 ? "." : t.decimal + "", s = t.numerals === void 0 ? Ku : Qx(Xu.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", a = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function c(f) {
    f = Ws(f);
    var h = f.fill, p = f.align, y = f.sign, k = f.symbol, w = f.zero, g = f.width, b = f.comma, x = f.precision, S = f.trim, O = f.type;
    O === "n" ? (b = !0, O = "g") : Yu[O] || (x === void 0 && (x = 12), S = !0, O = "g"), (w || h === "0" && p === "=") && (w = !0, h = "0", p = "=");
    var P = k === "$" ? n : k === "#" && /[boxX]/.test(O) ? "0" + O.toLowerCase() : "", D = k === "$" ? i : /[%p]/.test(O) ? o : "", z = Yu[O], F = /[defgprs%]/.test(O);
    x = x === void 0 ? 6 : /[gprs]/.test(O) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function H($) {
      var X = P, q = D, rt, Ht, yt;
      if (O === "c")
        q = z($) + q, $ = "";
      else {
        $ = +$;
        var lt = $ < 0 || 1 / $ < 0;
        if ($ = isNaN($) ? l : z(Math.abs($), x), S && ($ = tk($)), lt && +$ == 0 && y !== "+" && (lt = !1), X = (lt ? y === "(" ? y : a : y === "-" || y === "(" ? "" : y) + X, q = (O === "s" ? Ju[8 + Xd / 3] : "") + q + (lt && y === "(" ? ")" : ""), F) {
          for (rt = -1, Ht = $.length; ++rt < Ht; )
            if (yt = $.charCodeAt(rt), 48 > yt || yt > 57) {
              q = (yt === 46 ? r + $.slice(rt + 1) : $.slice(rt)) + q, $ = $.slice(0, rt);
              break;
            }
        }
      }
      b && !w && ($ = e($, 1 / 0));
      var at = X.length + $.length + q.length, _t = at < g ? new Array(g - at + 1).join(h) : "";
      switch (b && w && ($ = e(_t + $, _t.length ? g - q.length : 1 / 0), _t = ""), p) {
        case "<":
          $ = X + $ + q + _t;
          break;
        case "=":
          $ = X + _t + $ + q;
          break;
        case "^":
          $ = _t.slice(0, at = _t.length >> 1) + X + $ + q + _t.slice(at);
          break;
        default:
          $ = _t + X + $ + q;
          break;
      }
      return s($);
    }
    return H.toString = function() {
      return f + "";
    }, H;
  }
  function u(f, h) {
    var p = c((f = Ws(f), f.type = "f", f)), y = Math.max(-8, Math.min(8, Math.floor(Oi(h) / 3))) * 3, k = Math.pow(10, -y), w = Ju[8 + y / 3];
    return function(g) {
      return p(k * g) + w;
    };
  }
  return {
    format: c,
    formatPrefix: u
  };
}
var Gr, Ml, Jd;
ik({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function ik(t) {
  return Gr = nk(t), Ml = Gr.format, Jd = Gr.formatPrefix, Gr;
}
function Qd(t) {
  return Math.max(0, -Oi(Math.abs(t)));
}
function rk(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Oi(e) / 3))) * 3 - Oi(Math.abs(t)));
}
function sk(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Oi(e) - Oi(t)) + 1;
}
function ok(t, e, n, i) {
  var r = gx(t, e, n), s;
  switch (i = Ws(i ?? ",f"), i.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(e));
      return i.precision == null && !isNaN(s = rk(r, o)) && (i.precision = s), Jd(i, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(s = sk(r, Math.max(Math.abs(t), Math.abs(e)))) && (i.precision = s - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(s = Qd(r)) && (i.precision = s - (i.type === "%") * 2);
      break;
    }
  }
  return Ml(i);
}
function Zd(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var i = e();
    return mx(i[0], i[i.length - 1], n ?? 10);
  }, t.tickFormat = function(n, i) {
    var r = e();
    return ok(r[0], r[r.length - 1], n ?? 10, i);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var i = e(), r = 0, s = i.length - 1, o = i[r], a = i[s], l, c, u = 10;
    for (a < o && (c = o, o = a, a = c, c = r, r = s, s = c); u-- > 0; ) {
      if (c = wa(o, a, n), c === l)
        return i[r] = o, i[s] = a, e(i);
      if (c > 0)
        o = Math.floor(o / c) * c, a = Math.ceil(a / c) * c;
      else if (c < 0)
        o = Math.ceil(o * c) / c, a = Math.floor(a * c) / c;
      else
        break;
      l = c;
    }
    return t;
  }, t;
}
function tp() {
  var t = Kx();
  return t.copy = function() {
    return jx(t, tp());
  }, yx.apply(t, arguments), Zd(t);
}
function ak() {
  var t = 0, e = 1, n, i, r, s, o = _n, a = !1, l;
  function c(f) {
    return f == null || isNaN(f = +f) ? l : o(r === 0 ? 0.5 : (f = (s(f) - n) * r, a ? Math.max(0, Math.min(1, f)) : f));
  }
  c.domain = function(f) {
    return arguments.length ? ([t, e] = f, n = s(t = +t), i = s(e = +e), r = n === i ? 0 : 1 / (i - n), c) : [t, e];
  }, c.clamp = function(f) {
    return arguments.length ? (a = !!f, c) : a;
  }, c.interpolator = function(f) {
    return arguments.length ? (o = f, c) : o;
  };
  function u(f) {
    return function(h) {
      var p, y;
      return arguments.length ? ([p, y] = h, o = f(p, y), c) : [o(0), o(1)];
    };
  }
  return c.range = u(go), c.rangeRound = u(Kd), c.unknown = function(f) {
    return arguments.length ? (l = f, c) : l;
  }, function(f) {
    return s = f, n = f(t), i = f(e), r = n === i ? 0 : 1 / (i - n), c;
  };
}
function lk(t, e) {
  return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown());
}
function ep() {
  var t = Zd(ak()(_n));
  return t.copy = function() {
    return lk(t, ep());
  }, bx.apply(t, arguments);
}
function ck(t) {
  return t;
}
var gs = 1, ys = 2, Sa = 3, ji = 4, Qu = 1e-6;
function uk(t) {
  return "translate(" + t + ",0)";
}
function fk(t) {
  return "translate(0," + t + ")";
}
function hk(t) {
  return (e) => +t(e);
}
function dk(t, e) {
  return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = Math.round(e)), (n) => +t(n) + e;
}
function pk() {
  return !this.__axis;
}
function yo(t, e) {
  var n = [], i = null, r = null, s = 6, o = 6, a = 3, l = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, c = t === gs || t === ji ? -1 : 1, u = t === ji || t === ys ? "x" : "y", f = t === gs || t === Sa ? uk : fk;
  function h(p) {
    var y = i ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), k = r ?? (e.tickFormat ? e.tickFormat.apply(e, n) : ck), w = Math.max(s, 0) + a, g = e.range(), b = +g[0] + l, x = +g[g.length - 1] + l, S = (e.bandwidth ? dk : hk)(e.copy(), l), O = p.selection ? p.selection() : p, P = O.selectAll(".domain").data([null]), D = O.selectAll(".tick").data(y, e).order(), z = D.exit(), F = D.enter().append("g").attr("class", "tick"), H = D.select("line"), $ = D.select("text");
    P = P.merge(P.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), D = D.merge(F), H = H.merge(F.append("line").attr("stroke", "currentColor").attr(u + "2", c * s)), $ = $.merge(F.append("text").attr("fill", "currentColor").attr(u, c * w).attr("dy", t === gs ? "0em" : t === Sa ? "0.71em" : "0.32em")), p !== O && (P = P.transition(p), D = D.transition(p), H = H.transition(p), $ = $.transition(p), z = z.transition(p).attr("opacity", Qu).attr("transform", function(X) {
      return isFinite(X = S(X)) ? f(X + l) : this.getAttribute("transform");
    }), F.attr("opacity", Qu).attr("transform", function(X) {
      var q = this.parentNode.__axis;
      return f((q && isFinite(q = q(X)) ? q : S(X)) + l);
    })), z.remove(), P.attr("d", t === ji || t === ys ? o ? "M" + c * o + "," + b + "H" + l + "V" + x + "H" + c * o : "M" + l + "," + b + "V" + x : o ? "M" + b + "," + c * o + "V" + l + "H" + x + "V" + c * o : "M" + b + "," + l + "H" + x), D.attr("opacity", 1).attr("transform", function(X) {
      return f(S(X) + l);
    }), H.attr(u + "2", c * s), $.attr(u, c * w).text(k), O.filter(pk).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === ys ? "start" : t === ji ? "end" : "middle"), O.each(function() {
      this.__axis = S;
    });
  }
  return h.scale = function(p) {
    return arguments.length ? (e = p, h) : e;
  }, h.ticks = function() {
    return n = Array.from(arguments), h;
  }, h.tickArguments = function(p) {
    return arguments.length ? (n = p == null ? [] : Array.from(p), h) : n.slice();
  }, h.tickValues = function(p) {
    return arguments.length ? (i = p == null ? null : Array.from(p), h) : i && i.slice();
  }, h.tickFormat = function(p) {
    return arguments.length ? (r = p, h) : r;
  }, h.tickSize = function(p) {
    return arguments.length ? (s = o = +p, h) : s;
  }, h.tickSizeInner = function(p) {
    return arguments.length ? (s = +p, h) : s;
  }, h.tickSizeOuter = function(p) {
    return arguments.length ? (o = +p, h) : o;
  }, h.tickPadding = function(p) {
    return arguments.length ? (a = +p, h) : a;
  }, h.offset = function(p) {
    return arguments.length ? (l = +p, h) : l;
  }, h;
}
function mk(t) {
  return yo(gs, t);
}
function gk(t) {
  return yo(ys, t);
}
function yk(t) {
  return yo(Sa, t);
}
function bk(t) {
  return yo(ji, t);
}
const Ea = Math.PI, Ta = 2 * Ea, Bn = 1e-6, vk = Ta - Bn;
function np(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function _k(t) {
  let e = Math.floor(t);
  if (!(e >= 0))
    throw new Error(`invalid digits: ${t}`);
  if (e > 15)
    return np;
  const n = 10 ** e;
  return function(i) {
    this._ += i[0];
    for (let r = 1, s = i.length; r < s; ++r)
      this._ += Math.round(arguments[r] * n) / n + i[r];
  };
}
class Rl {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? np : _k(e);
  }
  moveTo(e, n) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, n) {
    this._append`L${this._x1 = +e},${this._y1 = +n}`;
  }
  quadraticCurveTo(e, n, i, r) {
    this._append`Q${+e},${+n},${this._x1 = +i},${this._y1 = +r}`;
  }
  bezierCurveTo(e, n, i, r, s, o) {
    this._append`C${+e},${+n},${+i},${+r},${this._x1 = +s},${this._y1 = +o}`;
  }
  arcTo(e, n, i, r, s) {
    if (e = +e, n = +n, i = +i, r = +r, s = +s, s < 0)
      throw new Error(`negative radius: ${s}`);
    let o = this._x1, a = this._y1, l = i - e, c = r - n, u = o - e, f = a - n, h = u * u + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (h > Bn)
      if (!(Math.abs(f * l - c * u) > Bn) || !s)
        this._append`L${this._x1 = e},${this._y1 = n}`;
      else {
        let p = i - o, y = r - a, k = l * l + c * c, w = p * p + y * y, g = Math.sqrt(k), b = Math.sqrt(h), x = s * Math.tan((Ea - Math.acos((k + h - w) / (2 * g * b))) / 2), S = x / b, O = x / g;
        Math.abs(S - 1) > Bn && this._append`L${e + S * u},${n + S * f}`, this._append`A${s},${s},0,0,${+(f * p > u * y)},${this._x1 = e + O * l},${this._y1 = n + O * c}`;
      }
  }
  arc(e, n, i, r, s, o) {
    if (e = +e, n = +n, i = +i, o = !!o, i < 0)
      throw new Error(`negative radius: ${i}`);
    let a = i * Math.cos(r), l = i * Math.sin(r), c = e + a, u = n + l, f = 1 ^ o, h = o ? r - s : s - r;
    this._x1 === null ? this._append`M${c},${u}` : (Math.abs(this._x1 - c) > Bn || Math.abs(this._y1 - u) > Bn) && this._append`L${c},${u}`, i && (h < 0 && (h = h % Ta + Ta), h > vk ? this._append`A${i},${i},0,1,${f},${e - a},${n - l}A${i},${i},0,1,${f},${this._x1 = c},${this._y1 = u}` : h > Bn && this._append`A${i},${i},0,${+(h >= Ea)},${f},${this._x1 = e + i * Math.cos(s)},${this._y1 = n + i * Math.sin(s)}`);
  }
  rect(e, n, i, r) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${i = +i}v${+r}h${-i}Z`;
  }
  toString() {
    return this._;
  }
}
function ip() {
  return new Rl();
}
ip.prototype = Rl.prototype;
function _e(t) {
  return function() {
    return t;
  };
}
const Zu = Math.abs, Kt = Math.atan2, Fn = Math.cos, wk = Math.max, Fo = Math.min, qe = Math.sin, ze = Math.sqrt, re = 1e-12, Pi = Math.PI, Hs = Pi / 2, rp = 2 * Pi;
function xk(t) {
  return t > 1 ? 0 : t < -1 ? Pi : Math.acos(t);
}
function tf(t) {
  return t >= 1 ? Hs : t <= -1 ? -Hs : Math.asin(t);
}
function sp(t) {
  let e = 3;
  return t.digits = function(n) {
    if (!arguments.length)
      return e;
    if (n == null)
      e = null;
    else {
      const i = Math.floor(n);
      if (!(i >= 0))
        throw new RangeError(`invalid digits: ${n}`);
      e = i;
    }
    return t;
  }, () => new Rl(e);
}
function kk(t) {
  return t.innerRadius;
}
function Sk(t) {
  return t.outerRadius;
}
function Ek(t) {
  return t.startAngle;
}
function Tk(t) {
  return t.endAngle;
}
function Ak(t) {
  return t && t.padAngle;
}
function Ck(t, e, n, i, r, s, o, a) {
  var l = n - t, c = i - e, u = o - r, f = a - s, h = f * l - u * c;
  if (!(h * h < re))
    return h = (u * (e - s) - f * (t - r)) / h, [t + h * l, e + h * c];
}
function jr(t, e, n, i, r, s, o) {
  var a = t - n, l = e - i, c = (o ? s : -s) / ze(a * a + l * l), u = c * l, f = -c * a, h = t + u, p = e + f, y = n + u, k = i + f, w = (h + y) / 2, g = (p + k) / 2, b = y - h, x = k - p, S = b * b + x * x, O = r - s, P = h * k - y * p, D = (x < 0 ? -1 : 1) * ze(wk(0, O * O * S - P * P)), z = (P * x - b * D) / S, F = (-P * b - x * D) / S, H = (P * x + b * D) / S, $ = (-P * b + x * D) / S, X = z - w, q = F - g, rt = H - w, Ht = $ - g;
  return X * X + q * q > rt * rt + Ht * Ht && (z = H, F = $), {
    cx: z,
    cy: F,
    x01: -u,
    y01: -f,
    x11: z * (r / O - 1),
    y11: F * (r / O - 1)
  };
}
function Ok() {
  var t = kk, e = Sk, n = _e(0), i = null, r = Ek, s = Tk, o = Ak, a = null, l = sp(c);
  function c() {
    var u, f, h = +t.apply(this, arguments), p = +e.apply(this, arguments), y = r.apply(this, arguments) - Hs, k = s.apply(this, arguments) - Hs, w = Zu(k - y), g = k > y;
    if (a || (a = u = l()), p < h && (f = p, p = h, h = f), !(p > re))
      a.moveTo(0, 0);
    else if (w > rp - re)
      a.moveTo(p * Fn(y), p * qe(y)), a.arc(0, 0, p, y, k, !g), h > re && (a.moveTo(h * Fn(k), h * qe(k)), a.arc(0, 0, h, k, y, g));
    else {
      var b = y, x = k, S = y, O = k, P = w, D = w, z = o.apply(this, arguments) / 2, F = z > re && (i ? +i.apply(this, arguments) : ze(h * h + p * p)), H = Fo(Zu(p - h) / 2, +n.apply(this, arguments)), $ = H, X = H, q, rt;
      if (F > re) {
        var Ht = tf(F / h * qe(z)), yt = tf(F / p * qe(z));
        (P -= Ht * 2) > re ? (Ht *= g ? 1 : -1, S += Ht, O -= Ht) : (P = 0, S = O = (y + k) / 2), (D -= yt * 2) > re ? (yt *= g ? 1 : -1, b += yt, x -= yt) : (D = 0, b = x = (y + k) / 2);
      }
      var lt = p * Fn(b), at = p * qe(b), _t = h * Fn(O), ue = h * qe(O);
      if (H > re) {
        var Pt = p * Fn(x), Mt = p * qe(x), De = h * Fn(S), Fe = h * qe(S), Qt;
        if (w < Pi)
          if (Qt = Ck(lt, at, De, Fe, Pt, Mt, _t, ue)) {
            var Vt = lt - Qt[0], Ce = at - Qt[1], fe = Pt - Qt[0], be = Mt - Qt[1], jt = 1 / qe(xk((Vt * fe + Ce * be) / (ze(Vt * Vt + Ce * Ce) * ze(fe * fe + be * be))) / 2), ve = ze(Qt[0] * Qt[0] + Qt[1] * Qt[1]);
            $ = Fo(H, (h - ve) / (jt - 1)), X = Fo(H, (p - ve) / (jt + 1));
          } else
            $ = X = 0;
      }
      D > re ? X > re ? (q = jr(De, Fe, lt, at, p, X, g), rt = jr(Pt, Mt, _t, ue, p, X, g), a.moveTo(q.cx + q.x01, q.cy + q.y01), X < H ? a.arc(q.cx, q.cy, X, Kt(q.y01, q.x01), Kt(rt.y01, rt.x01), !g) : (a.arc(q.cx, q.cy, X, Kt(q.y01, q.x01), Kt(q.y11, q.x11), !g), a.arc(0, 0, p, Kt(q.cy + q.y11, q.cx + q.x11), Kt(rt.cy + rt.y11, rt.cx + rt.x11), !g), a.arc(rt.cx, rt.cy, X, Kt(rt.y11, rt.x11), Kt(rt.y01, rt.x01), !g))) : (a.moveTo(lt, at), a.arc(0, 0, p, b, x, !g)) : a.moveTo(lt, at), !(h > re) || !(P > re) ? a.lineTo(_t, ue) : $ > re ? (q = jr(_t, ue, Pt, Mt, h, -$, g), rt = jr(lt, at, De, Fe, h, -$, g), a.lineTo(q.cx + q.x01, q.cy + q.y01), $ < H ? a.arc(q.cx, q.cy, $, Kt(q.y01, q.x01), Kt(rt.y01, rt.x01), !g) : (a.arc(q.cx, q.cy, $, Kt(q.y01, q.x01), Kt(q.y11, q.x11), !g), a.arc(0, 0, h, Kt(q.cy + q.y11, q.cx + q.x11), Kt(rt.cy + rt.y11, rt.cx + rt.x11), g), a.arc(rt.cx, rt.cy, $, Kt(rt.y11, rt.x11), Kt(rt.y01, rt.x01), !g))) : a.arc(0, 0, h, O, S, g);
    }
    if (a.closePath(), u)
      return a = null, u + "" || null;
  }
  return c.centroid = function() {
    var u = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, f = (+r.apply(this, arguments) + +s.apply(this, arguments)) / 2 - Pi / 2;
    return [Fn(f) * u, qe(f) * u];
  }, c.innerRadius = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : _e(+u), c) : t;
  }, c.outerRadius = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : _e(+u), c) : e;
  }, c.cornerRadius = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : _e(+u), c) : n;
  }, c.padRadius = function(u) {
    return arguments.length ? (i = u == null ? null : typeof u == "function" ? u : _e(+u), c) : i;
  }, c.startAngle = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : _e(+u), c) : r;
  }, c.endAngle = function(u) {
    return arguments.length ? (s = typeof u == "function" ? u : _e(+u), c) : s;
  }, c.padAngle = function(u) {
    return arguments.length ? (o = typeof u == "function" ? u : _e(+u), c) : o;
  }, c.context = function(u) {
    return arguments.length ? (a = u ?? null, c) : a;
  }, c;
}
const Pk = {
  draw(t, e) {
    const n = ze(e / Pi);
    t.moveTo(n, 0), t.arc(0, 0, n, 0, rp);
  }
}, Nk = {
  draw(t, e) {
    const n = ze(e), i = -n / 2;
    t.rect(i, i, n, n);
  }
}, $o = ze(3), Ik = {
  draw(t, e) {
    const n = -ze(e / ($o * 3));
    t.moveTo(0, n * 2), t.lineTo(-$o * n, -n), t.lineTo($o * n, -n), t.closePath();
  }
};
function Lk(t, e) {
  let n = null, i = sp(r);
  t = typeof t == "function" ? t : _e(t || Pk), e = typeof e == "function" ? e : _e(e === void 0 ? 64 : +e);
  function r() {
    let s;
    if (n || (n = s = i()), t.apply(this, arguments).draw(n, +e.apply(this, arguments)), s)
      return n = null, s + "" || null;
  }
  return r.type = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : _e(s), r) : t;
  }, r.size = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : _e(+s), r) : e;
  }, r.context = function(s) {
    return arguments.length ? (n = s ?? null, r) : n;
  }, r;
}
const ct = {
  precisionFixed: Qd,
  format: Ml,
  select: sx,
  selectAll: ox,
  scaleLinear: tp,
  scaleSequential: ep,
  axisTop: mk,
  axisBottom: yk,
  axisRight: gk,
  axisLeft: bk,
  symbol: Lk,
  path: ip,
  arc: Ok,
  symbolTriangle: Ik,
  symbolSquare: Nk
};
function ri(t) {
  return typeof t == "string" && t.length === 6 && !isNaN(+("0x" + t.replace("#", "")));
}
class Mk {
  constructor({
    elementID: e,
    env: n = "production",
    main: i = !0,
    units: r = "decimal",
    decimalPlaces: s = 2,
    fractionRoundTo: o = 0,
    saw: a = null,
    app: l = !1,
    embed: c = !1,
    height: u = 0,
    width: f = 0,
    flipY: h = !1,
    flipX: p = !1,
    colors: y = {
      partA: "#1d9bc4",
      partB: "#127da1",
      partHover: "#29c778",
      partSelected: "#1bc319",
      stock: "#ffd166",
      text: "#ffffff"
    },
    options: k = {
      disableClick: !1
    },
    vueComponent: w
  }) {
    v(this, "env");
    v(this, "main");
    //is this the main vis or not
    v(this, "units", "decimal");
    v(this, "decimalPlaces");
    v(this, "fractionRoundTo");
    v(this, "fn");
    v(this, "saw");
    v(this, "stockType");
    v(this, "numUniqueShapes");
    v(this, "app");
    v(this, "embed");
    v(this, "height");
    v(this, "width");
    v(this, "device");
    v(this, "vueComponent");
    v(this, "elWidth");
    v(this, "elHeight");
    v(this, "w");
    v(this, "h");
    v(this, "padding");
    v(this, "mobileBreakpoint");
    //scales
    v(this, "xScale", ct.scaleLinear());
    v(this, "yScale", ct.scaleLinear());
    v(this, "yPositionScale", ct.scaleLinear());
    v(this, "xPositionScale", ct.scaleLinear());
    v(this, "yAxisScale", ct.scaleLinear());
    v(this, "measurementScale", ct.scaleLinear());
    v(this, "xAxis");
    v(this, "yAxis");
    v(this, "shapeXAxis");
    v(this, "shapeYAxis");
    v(this, "cutMeasurementXAxes");
    v(this, "cutMeasurementYAxes");
    v(this, "axisSpacing");
    v(this, "flipY");
    v(this, "flipX");
    v(this, "colors");
    v(this, "options");
    v(this, "moveMode");
    v(this, "moveRotation");
    v(this, "moving");
    v(this, "shape");
    v(this, "shapeColorScale");
    v(this, "scoreColorScale");
    v(this, "hasTouch");
    v(this, "highlightguillotine");
    v(this, "elementID");
    //the id of the element to draw the vis in
    v(this, "el");
    v(this, "htmlEl");
    v(this, "svgCanvas");
    v(this, "axisGroup");
    v(this, "stockGroup");
    v(this, "stockWrappers");
    v(this, "stock");
    v(this, "shapeGroup");
    v(this, "shapeWrappers");
    v(this, "shapes");
    v(this, "shapeIDText");
    v(this, "shapeNameText");
    v(this, "shapeLengthText");
    v(this, "shapeWidthText");
    v(this, "bandingGroup");
    v(this, "bandingWrappers");
    v(this, "banding");
    v(this, "segmentGroup");
    v(this, "segments");
    v(this, "segment");
    v(this, "positionGroup");
    v(this, "position");
    v(this, "dotGroup");
    v(this, "dot");
    v(this, "cutGroup");
    v(this, "cuts");
    v(this, "cut");
    var b;
    if (!e)
      throw new Error("elementID is required");
    if (this.el = ct.select(e), this.el === null)
      return;
    const g = this.el.node();
    if (g !== null) {
      this.htmlEl = g, this.vueComponent = w, this.env = ((b = w == null ? void 0 : w.gs) == null ? void 0 : b.env) === "development" ? "development" : "production", this.app = l || !1, this.embed = c || !1, this.height = u, this.width = f, this.device = l ? "app" : "desktop", this.elWidth = this.htmlEl.offsetWidth, this.elHeight = this.htmlEl.offsetHeight, this.w = 0, this.h = 0, this.padding = 0, this.mobileBreakpoint = 450, this.main = i, this.saw = a, this.cutMeasurementXAxes = [], this.cutMeasurementYAxes = [], this.axisSpacing = 16, this.flipY = h, this.flipX = p, y = {
        ...y
      };
      for (const [x, S] of Object.entries(y))
        S && (y[x] = S.replace("#", ""));
      this.colors = {
        partA: ri(y == null ? void 0 : y.partA) ? Ut("#" + y.partA) : Ut("#1d9bc4"),
        partB: ri(y == null ? void 0 : y.partB) ? Ut("#" + y.partB) : Ut("#127da1"),
        partHover: ri(y == null ? void 0 : y.partHover) ? Ut("#" + y.partHover) : Ut("#29c778"),
        partSelected: ri(y == null ? void 0 : y.partSelected) ? Ut("#" + y.partSelected) : Ut("#1bc319"),
        stock: ri(y == null ? void 0 : y.stock) ? Ut("#" + y.stock) : Ut("#ffd166"),
        text: ri(y == null ? void 0 : y.text) ? Ut("#" + y.text) : Ut("#ffffff")
      }, this.shapeColorScale = ct.scaleSequential([
        this.colors.partA,
        this.colors.partB
      ]), this.env = n, this.moveMode = !1, this.moving = !1, this.moveRotation = !1, this.units = r, this.decimalPlaces = s, this.fractionRoundTo = o, this.fn = (x) => R(
        x,
        this.units,
        this.decimalPlaces ?? 2,
        !1,
        this.fractionRoundTo ?? 0
      ).toString(), this.hasTouch = !1, this.options = k, this.init();
    }
  }
  /**
   * sets up the various wrappers - only needs to be called once
   * the z index is set by the order drawn
   */
  init() {
    if (!this.el)
      return !1;
    if ((this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), (this.fractionRoundTo === null || this.fractionRoundTo === void 0 || isNaN(this.fractionRoundTo)) && (this.fractionRoundTo = 0), !this.svgCanvas) {
      if (this.htmlEl.querySelector("svg") === null) {
        const n = this.el.append("svg").attr("class", "vis");
        if (n === null)
          return;
        n.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), n.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(90)").attr("id", "grain-l").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), n.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("id", "grain-w").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), this.svgCanvas = n;
      }
      this.axisGroup = this.svgCanvas.append("g").attr("class", "axis-group"), this.stockGroup = this.svgCanvas.append("g").attr("class", "stock-group"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shapes"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.segmentGroup = this.svgCanvas.append("g").attr("class", "segments").attr("display", "none"), this.positionGroup = this.svgCanvas.append("g").attr("class", "positions"), this.dotGroup = this.svgCanvas.append("g").attr("class", "dots"), this.cutGroup = this.svgCanvas.append("g").attr("class", "cuts");
    }
    this.elWidth > 0 && this.updateSize(!0), this.hasTouch = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
  trimNameToFit(e, n) {
    function i(r, s, o) {
      const a = o[s], l = ct.select(a);
      l.text(r.name);
      let c = l.text();
      const u = l.node();
      if (!u)
        return;
      let f = u.getComputedTextLength();
      const h = this.getWidthAttribute(r) - 20;
      for (; f > h && c.length > 0; )
        c = c.slice(0, -1), l.text(c.length ? c + "..." : ""), f = l.node().getComputedTextLength();
    }
    e.each(i.bind(n));
  }
  getShapeColor(e) {
    return this.env === "development" ? this.scoreColorScale(e.bestScore.total) : this.shapeColorScale(e.parentID - 1);
  }
  setDevice() {
    if (!(!this.htmlEl || this.htmlEl.style.display === "none") && this.htmlEl.offsetWidth) {
      if (this.elWidth = this.htmlEl.offsetWidth, this.elHeight = this.htmlEl.offsetHeight, this.elWidth === 0)
        return !1;
      this.main ? this.elWidth <= this.mobileBreakpoint || this.app ? (this.device = "mobile", this.padding = 0) : (this.device = "desktop", this.padding = 50) : this.padding = 0, this.w = this.elWidth;
    }
  }
  //find the largest dimensions of all the stock (not just the active one)
  findLargestStockDimensions() {
    const e = At.call(this.vueComponent, ["stockList"]).filter((r) => r.used);
    if (!(e != null && e.length))
      return [null, null];
    const n = e.reduce(
      (r, s) => r.l > s.l ? r : s
    ), i = e.reduce(
      (r, s) => r.w > s.w ? r : s
    );
    return [n, i];
  }
  debounce(e, n, i = !1) {
    let r;
    return (...s) => new Promise((o) => {
      const a = () => {
        r = null, i || o(e.apply(this, s));
      };
      clearTimeout(r), i && !r && o(e.apply(this, s)), r = setTimeout(a, n);
    });
  }
  updateSize(e = !1) {
    return this.debounce(this._updateSize.bind(this), 10, e)();
  }
  _updateSize() {
    if (!this.htmlEl || this.htmlEl.style.display === "none")
      return;
    this.vueComponent && "suppressResizeObserver" in this.vueComponent && (this.vueComponent.suppressResizeObserver = !0);
    const e = At.call(this.vueComponent, ["stockList"]), n = At.call(this.vueComponent, ["shapeList"]);
    if (!(e != null && e.length) || !(n != null && n.length))
      return !1;
    this.setDevice();
    const [i, r] = this.findLargestStockDimensions();
    if (!(i != null && i.l) || !(r != null && r.w))
      return !1;
    if (r && i) {
      this.w = this.elWidth;
      const s = i.w / i.l;
      this.xScale.domain([0, i.l]).range([this.padding, this.w - this.padding]), s < 0.15 ? this.h = this.htmlEl.clientWidth * 0.15 + this.padding * 2 : this.h = this.xScale(i.getShortSide()) + this.padding, this.yScale.domain([0, r.w]).range([this.padding, this.h - this.padding]), this.yAxisScale.domain(this.flipY ? [0, r.w] : [r.w, 0]).range([this.padding, this.h - this.padding]), this.yPositionScale.domain([0, r.w]).range(
        this.flipY ? [this.padding, this.h - this.padding] : [this.h - this.padding, this.padding]
      ), s > 2 && (this.w = this.htmlEl.clientWidth / s + this.padding * 2, this.xScale.domain([0, i.l]).range([this.padding, this.w - this.padding]), this.h = this.xScale(i.getShortSide()) + this.padding), this.xPositionScale.domain([0, i.l]).range(
        this.flipX ? [this.w - this.padding, this.padding] : [this.padding, this.w - this.padding]
      ), this.measurementScale.domain([0, i.l]).range([0, this.w - this.padding * 2]), this.w > 0 && this.h > 0 && (s > 2 ? this.el.style("width", this.w + "px") : this.el.style("width", ""), this.el.style("height", this.h + "px"));
    }
    this.refreshStock(), this.refreshShapes();
  }
  refreshStock() {
    const e = At.call(this.vueComponent, ["stockList"]);
    if (!(e != null && e.length))
      return !1;
    const n = At.call(this.vueComponent, ["activeStock"]);
    this.initStock(n), this.resetCuts();
    const i = At.call(this.vueComponent, ["activeCuts"]);
    this.initCuts(i), this.resetSegments();
    const r = At.call(this.vueComponent, [
      "activeSegments"
    ]);
    this.initSegments(r), this.resetPositions(), typeof this.vueComponent.toggleSegments == "function" && this.vueComponent.toggleSegments(!1);
  }
  refreshShapes() {
    const e = At.call(this.vueComponent, ["shapeList"]);
    if (!(e != null && e.length))
      return !1;
    this.resetPositions();
    const n = At.call(this.vueComponent, ["activeShapes"]);
    this.initShapes(n, e);
  }
  //init or update the stock
  initStock(e) {
    if (this.resetStock(), !e || !(e != null && e.w) || !(e != null && e.l) || !this.elWidth)
      return !1;
    this.stockType = e.type;
    let n;
    const [i, r] = this.findLargestStockDimensions();
    if (!(i != null && i.l) || !(r != null && r.w))
      return !1;
    typeof e == "object" && (n = [e]), this.device === "desktop" && this.main && (this.xAxis = this.axisGroup.append("g").attr("transform", `translate(0, ${this.padding})`).attr("class", "axis stock x").call(ct.axisTop(this.xScale).ticks(5).tickSize(2)).selectAll("text").attr("dy", -5), this.yAxis = this.axisGroup.append("g").attr("transform", `translate(${this.w - this.padding}, 0)`).attr("class", "axis stock y").call(ct.axisRight(this.yAxisScale).ticks(5).tickSize(2)).selectAll("text").attr("dx", 5)), this.stockGroup.data(n).attr(
      "transform",
      () => `translate(${this.padding},${this.padding})`
    ), this.stockGroup.append("rect").attr("class", "background stock-area").attr("width", this.getWidthAttribute(i)).attr("height", this.getHeightAttribute(i)), this.stockGroup.append("rect").attr("class", "background stock").style("fill", this.colors.stock).attr("width", (s) => this.getWidthAttribute(s)).attr("height", (s) => this.getHeightAttribute(s)).attr(
      "x",
      (s) => this.getRectangleCoordinate(s, "x") - this.padding
    ).attr(
      "y",
      (s) => this.getRectangleCoordinate(s, "y") - this.padding
    ), this.stock = this.stockGroup.append("rect").attr("width", (s) => this.getWidthAttribute(s)).attr("height", (s) => this.getHeightAttribute(s)).attr(
      "x",
      (s) => this.getRectangleCoordinate(s, "x") - this.padding
    ).attr(
      "y",
      (s) => this.getRectangleCoordinate(s, "y") - this.padding
    ).attr("class", "stock-pattern").style(
      "fill",
      (s) => s != null && s.grain ? `url(#grain-${s.grain.toLowerCase()})` : "url(#stripes)"
    );
  }
  getWidthAttribute(e) {
    return this.xScale(e.l) - this.padding;
  }
  getHeightAttribute(e) {
    return this.yScale(e.w) - this.padding;
  }
  //init or update the shapes
  initShapes(e, n) {
    var i, r, s;
    if (this.resetShapes(), !(!e || !e.length || !this.elWidth)) {
      if (this.numUniqueShapes = n.filter(
        (o) => !o.duplicate
      ).length, this.shapeColorScale.domain([0, this.numUniqueShapes]), (i = this == null ? void 0 : this.vueComponent) != null && i.gs) {
        this.vueComponent.gs.shapeColors = {};
        for (let o = e.length; o--; ) {
          const a = e[o];
          a.parentID && this.vueComponent.gs.shapeColors[a.parentID] || a.parentID && (this.vueComponent.gs.shapeColors[a.parentID] = Ci(
            this.shapeColorScale(parseInt(a.parentID) - 1)
          ).formatHex());
        }
      }
      if (this.env === "development") {
        let o = 1 / 0, a = -1 / 0;
        for (const u of e) {
          const f = (r = u == null ? void 0 : u.bestScore) == null ? void 0 : r.total;
          if (f !== 0 && f !== null && f !== void 0) {
            o = f, a = f;
            break;
          }
        }
        const l = e.reduce((u, f) => {
          var p;
          const h = (p = f == null ? void 0 : f.bestScore) == null ? void 0 : p.total;
          return h === 0 || h === null || h === void 0 ? u : h < u ? h : u;
        }, o), c = e.reduce((u, f) => {
          var p;
          const h = (p = f == null ? void 0 : f.bestScore) == null ? void 0 : p.total;
          return h == null ? u : h > u ? h : u;
        }, a);
        this.scoreColorScale = ct.scaleSequential([Ut(251, 224, 255), Ut(122, 0, 138)]).domain([l, c]);
      }
      if (!e || !e.length || (this.shapeWrappers = this.shapeGroup.selectAll("g").data(e).join("g").attr("class", "shape-group"), !this.shapeWrappers.size()))
        return !1;
      if (this.shapes = this.shapeWrappers.append("rect").attr("class", "shape").attr("fill", (o) => this.getShapeColor(o)).attr(
        "stroke",
        (o) => this.env === "development" && o.addedAsGroup ? Ut(53, 186, 20) : "none"
      ).attr("stroke-width", () => this.env === "development" ? 3 : 0).attr("width", (o) => this.getWidthAttribute(o)).attr("height", (o) => this.getHeightAttribute(o)), this.main) {
        const o = [];
        e.forEach((a) => {
          if (a != null && a._banding)
            for (const [l, c] of Object.entries(a._banding)) {
              if (!c || ["a", "b", "c", "d"].includes(l))
                continue;
              let u = l;
              if (a.rot)
                switch (l) {
                  case "x1":
                    u = "y1";
                    break;
                  case "x2":
                    u = "y2";
                    break;
                  case "y1":
                    u = "x2";
                    break;
                  case "y2":
                    u = "x1";
                    break;
                }
              switch (u) {
                case "x1":
                  o.push({
                    x1: a.x,
                    x2: a.x,
                    y1: a.y,
                    y2: a.y + a.w,
                    type: "x1"
                  });
                  break;
                case "x2":
                  o.push({
                    x1: a.x + a.l,
                    x2: a.x + a.l,
                    y1: a.y,
                    y2: a.y + a.w,
                    type: "x2"
                  });
                  break;
                case "y1":
                  o.push({
                    x1: a.x,
                    x2: a.x + a.l,
                    y1: a.y,
                    y2: a.y,
                    type: "y1"
                  });
                  break;
                case "y2":
                  o.push({
                    x1: a.x,
                    x2: a.x + a.l,
                    y1: a.y + a.w,
                    y2: a.y + a.w,
                    type: "y2"
                  });
                  break;
              }
            }
        }), this.bandingWrappers = this.bandingGroup.selectAll("g").data(o).join("line").attr("class", "banding").attr(
          "x1",
          (a) => this.xPositionScale(a.x1) + this.getBandingAdjustment(a.type, "x")
        ).attr(
          "x2",
          (a) => this.xPositionScale(a.x2) + this.getBandingAdjustment(a.type, "x")
        ).attr(
          "y1",
          (a) => this.yPositionScale(a.y1) + this.getBandingAdjustment(a.type, "y")
        ).attr(
          "y2",
          (a) => this.yPositionScale(a.y2) + this.getBandingAdjustment(a.type, "y")
        ).attr("stroke-width", 2).attr("stroke", "white"), this.shapeIDText = this.shapeWrappers.append("text").attr("class", "shape-text id").text((a) => this.env === "development" ? a.addedAsGroup ? a.addedAsGroup : a.getParentID() : a.parentID ? a.parentID : a.getParentID()).classed("hidden", (a, l, c) => {
          const u = c[l].getBBox();
          return u.width >= this.measurementScale(a.l) || u.height >= this.yScale(a.w) - this.padding;
        }).attr("dominant-baseline", "middle").attr("fill", this.colors.text), this.shapeNameText = this.shapeWrappers.append("text").attr("class", "shape-text name").text((a) => !(a != null && a.name) || typeof (a == null ? void 0 : a.name) != "string" ? null : a.name.toUpperCase().trim()).call(this.trimNameToFit, this).classed("hidden", (a, l, c) => c[l].getBBox().width >= this.measurementScale(a.l) || this.measurementScale(a.w) < 40).attr("dominant-baseline", "middle").attr("fill", this.colors.text), this.shapeLengthText = this.shapeWrappers.append("text").attr("class", "shape-text length").text(
          (a) => R(
            a.l,
            this.units,
            this.decimalPlaces,
            !1,
            this.fractionRoundTo
          )
        ).classed("hidden", (a, l, c) => this.app ? this.measurementScale(a.l) < 50 || this.measurementScale(a.w) < 50 : a.stock.type === "linear" ? !1 : c[l].getBBox().width >= this.measurementScale(a.l) || this.measurementScale(a.w) < 30).attr("dominant-baseline", "middle").attr("fill", this.colors.text), this.shapeWidthText = this.shapeWrappers.append("text").attr("class", "shape-text width").text(
          (a) => R(
            a.w,
            this.units,
            this.decimalPlaces,
            !1,
            this.fractionRoundTo
          )
        ).classed("hidden", (a, l, c) => {
          if (this.app)
            return this.measurementScale(a.l) < 50 || this.measurementScale(a.w) < 50;
          const u = c[l].getBBox();
          return this.measurementScale(a.l) < 30 || u.height >= this.measurementScale(a.w);
        }).attr("dominant-baseline", "middle").attr("fill", this.colors.text);
      }
      (this.main || this.app) && !((s = this == null ? void 0 : this.options) != null && s.disableClick) && (this.shapes.on("mousedown", (o, a) => {
        var l, c, u, f, h;
        if (this.moving)
          return !1;
        if (this.env === "development" && "structuredClone" in window) {
          console.clear();
          let p;
          try {
            p = structuredClone(a);
          } catch (y) {
            console.log("issue with structuredClone", y);
          }
          p && console.log(
            [
              "bestScore.point"
              // 'addedAsGroup',
              // 'weighting'
              // 'placementOrder',
              // 'guillotineData'
            ].reduce((k, w) => (k[w] = ef(p, w), k), {})
          );
        }
        if (this.app || this.embed) {
          const p = {
            name: a.name,
            id: a.id,
            x: a.x,
            y: a.y,
            l: a.l,
            w: a.w,
            banding: a != null && a.banding && typeof a.banding == "object" ? a.banding : null,
            rot: a.rot,
            stock: (l = a == null ? void 0 : a.stock) == null ? void 0 : l.id,
            color: (c = this.getShapeColor(a)) == null ? void 0 : c.toString(),
            notes: a == null ? void 0 : a.notes
          }, y = new CustomEvent("partClick", {
            detail: p
          });
          if (this.env === "development" && console.log(p), this.htmlEl.dispatchEvent(y), this.app)
            return !1;
        }
        !this.moveMode && ((u = this.vueComponent) != null && u.gs) && (this.vueComponent.gs.examineShape = a), this.device === "desktop" && (this.resetCutMeasurementAxes(), this.addShapeAxes(a)), this.shapes.classed("selected", !1), this.shapes.style("fill", (p) => this.getShapeColor(p)), this.moveMode ? (a.stock.cutType === "efficiency" || a.stock.type === "linear") && ((h = (f = this.vueComponent.$refs) == null ? void 0 : f.partsBin) == null || h.addToPartsBin(a)) : (ct.select(o.target).classed("selected", !0), ct.select(o.target).style(
          "fill",
          this.colors.partSelected.toString()
        ));
      }), !this.app && !this.hasTouch && this.shapes.on(
        "mouseover",
        (o) => {
          this != null && this.moveMode && this.moving || (ct.select(o.target).classed("hover", !0), ct.select(o.target).classed("selected") || ct.select(o.target).style(
            "fill",
            this.colors.partHover.toString()
          ));
        },
        {
          passive: !0
        }
      ).on(
        "mouseout",
        (o, a) => {
          var l;
          ct.select(o.target).classed("hover", !1), ct.select(o.target).classed("selected") || ct.select(o.target).style(
            "fill",
            (l = this.getShapeColor(a)) == null ? void 0 : l.toString()
          );
        },
        {
          passive: !0
        }
      )), this.setShapePosition();
    }
  }
  /**
   * update SHAPE visibility - used for replay
   * @param {Number} number
   */
  updateShapeVisibility(e) {
    var n;
    (n = this == null ? void 0 : this.shapeWrappers) == null || n.style("visibility", (i) => (i == null ? void 0 : i.placementOrder) >= e ? "hidden" : "visible");
  }
  isCutComplete(e, n, i) {
    return e.guillotineData.parentSegmentID === n && i && e.guillotineData.segmentCutOrder < i;
  }
  isCutInsideSegment(e, n) {
    var i;
    return ((i = e.guillotineData) == null ? void 0 : i.parentSegmentID) !== null && !(e != null && e.isTrim) ? e.guillotineData.parentSegmentID === n : !1;
  }
  //update CUT visibility
  updateCutVisibility(e, n = null) {
    var a, l, c, u, f, h, p;
    if (n === null || e == null || this != null && this.cuts.empty())
      return;
    this.resetShapeAxes(), this.resetCutMeasurementAxes(), ct.select(this.cuts.nodes()[n].parentNode).raise();
    const i = (a = e.guillotineData) == null ? void 0 : a.parentSegmentID, r = this.getHalfBladeWidth(e.stock), s = e.direction === "l" ? "y" : "x", o = (l = e == null ? void 0 : e.stock) == null ? void 0 : l.trim;
    if ((e.stock.cutType === "guillotine" || e.stock.cutType === "beam") && i !== null && typeof i < "u") {
      this.cuts.style("visibility", (x) => typeof e.guillotineData.order == "number" && x.guillotineData.order <= e.guillotineData.order || x.guillotineData.parentSegmentID === i ? "visible" : "hidden"), this.cuts.classed("highlight", (x) => e.stock.cutType === "guillotine" && x.isTrim ? x.type === e.type : x.guillotineData.order === e.guillotineData.order);
      const y = (c = e == null ? void 0 : e.guillotineData) == null ? void 0 : c.segmentCutOrder;
      if (y == null)
        return;
      this.cuts.classed("completed", (x) => this.isCutComplete(x, i, y)), this.cuts.classed("inside-segment", (x) => this.isCutInsideSegment(x, i));
      let k, w;
      const g = this.getCutSegments(e);
      if (g === !1)
        return;
      const b = (f = g == null ? void 0 : g.siblings) == null ? void 0 : f[(u = g.main) != null && u.hasBeamTrim ? y - 1 : y];
      b && ((e == null ? void 0 : e.direction) === "l" ? k = [
        [
          b.y,
          b.y + b.w
        ],
        [
          e.y1 + r,
          (g == null ? void 0 : g.main.y) + (g == null ? void 0 : g.main.w)
        ]
      ] : (e == null ? void 0 : e.direction) === "w" && (k = [
        [
          b.x,
          b.x + b.l
        ],
        [
          e.x1 + r,
          (g == null ? void 0 : g.main.x) + (g == null ? void 0 : g.main.l)
        ]
      ]), (e == null ? void 0 : e.direction) === "l" ? w = [(h = e == null ? void 0 : e.distances) == null ? void 0 : h.bottom, e == null ? void 0 : e.distances.top] : (e == null ? void 0 : e.direction) === "w" && (w = [e == null ? void 0 : e.distances.left, (p = e == null ? void 0 : e.distances) == null ? void 0 : p.right]), this.device === "desktop" && !e.isTrim && this.addCutMeasurementAxes(k, w, s));
    } else {
      this.cuts.style(
        "visibility",
        (k, w) => w <= n ? "visible" : "hidden"
      );
      let y;
      if ((e == null ? void 0 : e.direction) === "l" ? y = [
        [0 + (o.y1 ?? 0), e.y1 - r],
        [
          e.y1 + r,
          e.stock.w - (o != null && o.y2 ? o.y2 : 0)
        ]
      ] : (e == null ? void 0 : e.direction) === "w" && (y = [
        [0 + (o.x1 ?? 0), e.x1 - r],
        [
          e.x1 + r,
          e.stock.l - (o != null && o.x2 ? o.x2 : 0)
        ]
      ]), y != null && y.length) {
        const k = [
          y[0][1] - y[0][0],
          y[1][1] - y[1][0]
        ];
        this.device === "desktop" && !e.isTrim && this.addCutMeasurementAxes(y, k, s);
      }
      this.cuts.classed(
        "highlight",
        (k, w) => w === n
      );
    }
    this.cuts.attr("stroke-width", (y, k) => {
      var b;
      let w = Math.ceil(
        this.measurementScale(this.getBladeWidth(y.stock))
      );
      const g = (b = e == null ? void 0 : e.guillotineData) == null ? void 0 : b.segmentCutOrder;
      return (this.isCutComplete(y, i, g) || this.isCutInsideSegment(y, i)) && (w += 1), k === n && Math.ceil(
        this.measurementScale(this.getBladeWidth(y.stock))
      ) < 5 && (w = 5), w;
    });
  }
  //highlight a specific cut (by order or index), segments and related measurements
  showCut(e, n = null) {
    if (n === null)
      return !1;
    this.updateCutVisibility(e, n);
    const i = this.getCutSegments(e);
    if (i === !1)
      return;
    const { siblings: r } = i, s = r == null ? void 0 : r.length;
    let o = [];
    if (s) {
      for (let l = s; l--; )
        r[l] && (r[l].completed = !1);
      if (e.guillotineData.segmentCutOrder === void 0 || e.guillotineData.segmentCutOrder === null)
        return;
      const a = e.guillotineData.segmentCutOrder;
      for (let l = 0; l < s; l++)
        l < a && (r[l].completed = !0);
      o.push(...r), o = o.filter((l) => l);
    }
    o.length && (this.resetSegments(), this.initSegments(o));
  }
  /**
   * toggle the visibility of the shapes
   * @param {Boolean} show
   */
  toggleShapes(e = !1) {
    e ? (this.shapeGroup.attr("display", "block"), this.bandingGroup.attr("display", "block")) : (this.shapeGroup.attr("display", "none"), this.bandingGroup.attr("display", "none"));
  }
  /**
   * add measurements to an axis
   * @param {Array} measurements array of arrays
   * @param {Array} values array of values
   * @param {String} axis x | y
   */
  addCutMeasurementAxes(e, n, i) {
    !i || !(e != null && e.length) || e.forEach((r) => {
      const s = r[0], o = r[1];
      if (i === "x") {
        const a = ct.scaleLinear().domain([s, o]).range([
          this.xPositionScale(s),
          this.xPositionScale(o)
        ]), l = (a.domain()[1] - a.domain()[0]) / 2 + a.domain()[0], c = this.axisGroup.append("g").attr(
          "transform",
          `translate(0, ${this.h - this.padding + this.axisSpacing})`
        ).attr("class", "axis measurement x").call(
          ct.axisBottom(a).tickValues([l]).tickSize(4).tickFormat(this.fn)
        );
        c.selectAll("text").attr("x", 0).attr("y", 0).attr(
          "dy",
          (u, f, h) => h[f].getBBox().height + 10
        ), this.cutMeasurementXAxes.push(c);
      } else {
        const a = ct.scaleLinear().domain([s, o]).range([
          this.yPositionScale(s),
          this.yPositionScale(o)
        ]), l = (a.domain()[1] - a.domain()[0]) / 2 + a.domain()[0], c = this.axisGroup.append("g").attr(
          "transform",
          `translate(${this.padding - this.axisSpacing}, 0)`
        ).attr("class", "axis measurement y").call(
          ct.axisLeft(a).tickValues([l]).tickSize(4).tickFormat(this.fn)
        );
        c.selectAll("text").attr("x", 0).attr("y", 0).attr(
          "dy",
          (u, f, h) => h[f].getBBox().height + 10
        ).attr(
          "dx",
          (u, f, h) => h[f].getBBox().width / 4
        ).attr(
          "transform",
          (u, f, h) => "rotate(90) translate(" + h[f].getBBox().width / 4 + ")"
        ), this.cutMeasurementYAxes.push(c);
      }
    });
  }
  /**
   * add the shape axes
   * @param {Shape} shape
   */
  addShapeAxes(e) {
    var l;
    this.shapeXAxis && this.shapeXAxis.remove(), this.shapeYAxis && this.shapeYAxis.remove();
    const n = e.x, i = e.x + e.l, r = ct.scaleLinear().domain([n, i]).range([this.xPositionScale(n), this.xPositionScale(i)]), s = e.y, o = e.y + e.w, a = ct.scaleLinear().domain([s, o]).range([this.yPositionScale(s), this.yPositionScale(o)]);
    this.shapeXAxis = this.axisGroup.append("g").attr(
      "transform",
      `translate(0, ${this.h - this.padding + this.axisSpacing})`
    ).attr("class", "axis shape x").call(
      ct.axisBottom(r).tickValues(r.domain()).tickSize(4).tickFormat(this.fn)
    ), this.shapeXAxis.selectAll("text").attr("dx", (c, u, f) => {
      const h = f[u];
      if (h === null)
        return;
      const p = h.getBBox();
      return u === 0 ? -p.width / 2 : p.width / 2;
    }), ((l = e == null ? void 0 : e.stock) == null ? void 0 : l.type) !== "linear" && (this.shapeYAxis = this.axisGroup.append("g").attr(
      "transform",
      `translate(${this.padding - this.axisSpacing}, 0)`
    ).attr("class", "axis shape y").call(
      ct.axisLeft(a).tickValues(a.domain()).tickSize(4).tickFormat(this.fn)
    ), this.shapeYAxis.selectAll("text").attr("x", 0).attr("y", 0).attr(
      "dy",
      (c, u, f) => {
        var h, p;
        return ((p = (h = f[u]) == null ? void 0 : h.getBBox()) == null ? void 0 : p.height) + 2;
      }
    ).attr(
      "dx",
      (c, u, f) => {
        var h, p;
        return ((p = (h = f[u]) == null ? void 0 : h.getBBox()) == null ? void 0 : p.width) / 2;
      }
    ).attr("transform", (c, u, f) => {
      var h, p, y, k, w, g, b, x;
      return this.flipY ? u === 0 ? "rotate(90) translate(-" + ((p = (h = f[u]) == null ? void 0 : h.getBBox()) == null ? void 0 : p.width) / 2 + ")" : "rotate(90) translate(" + ((k = (y = f[u]) == null ? void 0 : y.getBBox()) == null ? void 0 : k.width) / 2 + ")" : u === 0 ? "rotate(90) translate(" + ((g = (w = f[u]) == null ? void 0 : w.getBBox()) == null ? void 0 : g.width) / 2 + ")" : "rotate(90) translate(-" + ((x = (b = f[u]) == null ? void 0 : b.getBBox()) == null ? void 0 : x.width) / 2 + ")";
    }));
  }
  getBandingAdjustment(e, n) {
    switch (e) {
      case "y1":
        if (n === "x")
          return 0;
        if (n === "y")
          return this.flipY ? 1 : -1;
        break;
      case "y2":
        if (n === "x")
          return 0;
        if (n === "y")
          return this.flipY ? -1 : 1;
        break;
      case "x1":
        if (n === "x")
          return this.flipX ? -1 : 1;
        if (n === "y")
          return 0;
        break;
      case "x2":
        if (n === "x")
          return this.flipX ? 1 : -1;
        if (n === "y")
          return 0;
        break;
    }
    return 0;
  }
  getRectangleCoordinate(e, n, i, r) {
    let s;
    if (n === "x") {
      let o;
      switch (i) {
        case "center":
          o = this.xPositionScale(e.x + e.l / 2), r && (o += r);
          break;
        case "right":
          o = this.xPositionScale(e.x + e.l), r && (o -= r);
          break;
        case "left":
        default:
          o = this.xPositionScale(
            this.flipX ? e.x - e.l : e.x
          ), r && (o -= r);
      }
      s = o;
    } else if (n === "y") {
      let o;
      switch (i) {
        case "center":
          o = this.yPositionScale(e.y + e.w / 2), r && (o += r);
          break;
        case "bottom":
          o = this.yPositionScale(
            this.flipY ? e.y + e.w : e.y
          ), r && (o += r);
          break;
        case "top":
        default:
          o = this.yPositionScale(
            this.flipY ? e.y : e.y + e.w
          ), r && (o -= r);
      }
      s = o;
    }
    return s;
  }
  getRotatedSide(e) {
    switch (e) {
      case "x1":
      case "l1":
        return "w1";
      case "x2":
      case "l2":
        return "w2";
      case "y1":
      case "w1":
        return "l2";
      case "y2":
      case "w2":
        return "l1";
    }
  }
  /**
   * update the position of the shapes and the content within
   */
  setShapePosition() {
    if (!this.shapes)
      return !1;
    this.shapes.attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)), this.main && (this.shapeIDText.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1), this.shapeNameText && this.shapeNameText.attr(
      "x",
      (e) => this.getRectangleCoordinate(e, "x", "center")
    ).attr(
      "y",
      (e, n, i) => this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(i[n].getBBox().height / 2 + 1)
      )
    ), this.shapeLengthText.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr(
      "y",
      (e, n, i) => this.getRectangleCoordinate(
        e,
        "y",
        "top",
        -(i[n].getBBox().height / 2 + 2)
      )
    ), this.shapeWidthText.attr(
      "transform",
      (e, n, i) => `translate(${this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(i[n].getBBox().height / 2 + 2)
      )},${this.getRectangleCoordinate(e, "y", "center")}) ${this.device === "mobile" ? "rotate(90)" : "rotate(-90)"}`
    ));
  }
  //init or update the cuts
  initCuts(e) {
    if (!e || !(e != null && e.length) || !this.main || !this.elWidth)
      return !1;
    this.cuts = this.cutGroup.selectAll("line").data(e).join("line").attr("class", "cut").attr("stroke-width", (n) => {
      const i = this.measurementScale(
        this.getBladeWidth(n.stock)
      );
      return i < 1 ? 1 : Math.ceil(i);
    }).attr("x1", (n) => this.xPositionScale(n.getVisCoords("x1"))).attr("x2", (n) => this.xPositionScale(n.getVisCoords("x2"))).attr("y1", (n) => this.yPositionScale(n.getVisCoords("y1"))).attr("y2", (n) => this.yPositionScale(n.getVisCoords("y2"))).classed("trim", (n) => n.isTrim);
  }
  //init or update the segments
  initSegments(e) {
    if (!e || !(e != null && e.length) || !this.main || !this.elWidth)
      return !1;
    this.segments = this.segmentGroup.selectAll("rect").data(e).join("rect").attr("class", "segment").style("opacity", (n) => {
      if ((n == null ? void 0 : n.offcut) === !0)
        return 0.5;
    }).classed("offcut", (n) => n.offcut).classed("merged", (n) => n.merged).classed("near", (n) => n.shapePosition === "near").classed("far", (n) => n.shapePosition === "far").classed("completed", (n) => n.completed).attr("x", (n) => this.getRectangleCoordinate(n, "x")).attr("y", (n) => this.getRectangleCoordinate(n, "y")).attr("width", (n) => this.getWidthAttribute(n)).attr("height", (n) => this.getHeightAttribute(n)), !this.app && this.env === "development" && (this.segments.on("mousedown", function(n, i) {
      const r = structuredClone(i);
      console.log(
        [
          "id",
          "x",
          "y",
          "cutDirection",
          "cutPreference"
        ].reduce((o, a) => (o[a] = ef(r, a), o), {})
      );
    }), this.hasTouch || this.segments.on(
      "mouseover",
      function() {
        ct.select(this).classed("hover", !0);
      },
      {
        passive: !0
      }
    ).on(
      "mouseout",
      function() {
        ct.select(this).classed("hover", !1);
      },
      {
        passive: !0
      }
    ));
  }
  //get relevant segments for a specific cut
  getCutSegments(e) {
    var o, a, l, c;
    const n = (o = e == null ? void 0 : e.guillotineData) == null ? void 0 : o.parentSegmentID, i = ((l = (a = this.vueComponent) == null ? void 0 : a.gs) == null ? void 0 : l.activeSegments) ?? ((c = this.vueComponent) == null ? void 0 : c.activeSegments);
    if (!i.length)
      return !1;
    const r = i.find(
      (u) => u.id === n
    );
    if (r === void 0)
      return !1;
    const s = r == null ? void 0 : r.children;
    if (s != null && s.length) {
      const u = s.map((h) => {
        const p = i.find(
          (y) => y.x === h.x && y.y === h.y && y.l === h.l && y.w === h.w
        );
        return p !== void 0 ? p : null;
      }).filter((h) => h !== null);
      return {
        main: r,
        siblings: u
      };
    }
    return !1;
  }
  /**
   * toggle the visibility of the segments
   * @param {Boolean} show
   */
  toggleSegments(e = !0) {
    e ? this.segmentGroup.attr("display", "block") : this.segmentGroup.attr("display", "none");
  }
  /**
   * show a list of possible movement positions
   */
  initPositions(e, n) {
    if (!n || !e || !this.main)
      return !1;
    let i;
    if (n.trimDimensions(), !e.willItFit(n, e.rot))
      return !1;
    n.removeTrim();
    const r = At.call(this.vueComponent, ["shapeList"]).filter(
      (a) => {
        var l;
        return a.added && ((l = a == null ? void 0 : a.stock) == null ? void 0 : l.id) === n.id;
      }
    ), s = O1(
      null,
      r,
      n
    ), o = new ho();
    s.toArray().forEach((a) => {
      o.addPoints(
        P1(e, a, n).toArray()
      );
    }), n.cutType === "efficiency" ? ([
      new Lt(0 + (n.trim.x1 ?? 0), 0 + (n.trim.y1 ?? 0)),
      new Lt(0 + (n.trim.x1 ?? 0), 0 + (n.trim.y1 ?? 0)),
      new Lt(
        n.l - e.l - (n.trim.x2 ?? 0),
        0 + (n.trim.y1 ?? 0)
      ),
      new Lt(
        0 + (n.trim.x1 ?? 0),
        n.w - e.w - (n.trim.y2 ?? 0)
      ),
      new Lt(
        n.l - e.l - (n.trim.x2 ?? 0),
        n.w - e.w - (n.trim.y2 ?? 0)
      )
    ].forEach((a) => o.addPoint(a)), i = o.toArray()) : (o.addPoint(
      new Lt(0 + (n.trim.x1 ?? 0), 0 + (n.trim.y1 ?? 0))
    ), i = o.toArray(), i = i.filter((a) => {
      const l = new on({
        x: a.x,
        y: a.y,
        l: e.l,
        w: e.w,
        stock: n
      }), c = n.cutPreference, u = c === "l" ? "x" : "y", f = u === "x" ? "y" : "x";
      if (ut.equalTo(
        l[u],
        0 + n.trim[u + 1]
      ))
        return !0;
      const h = r.find(
        (p) => ut.equalTo(p[u], n.trim[u + 1]) && w1(l, p, f)
      );
      if (!h)
        return !1;
      if (ut.equalTo(
        l[f],
        h[f]
      ))
        return !0;
      for (let p = r.length; p--; ) {
        const y = r[p], k = r.find(
          (w) => Eu(
            c === "l" ? "above" : "right",
            w,
            l
          )
        );
        if (Eu(
          c === "l" ? "right" : "above",
          y,
          l
        ) && (ut.equalTo(
          l[f],
          n.trim[f + 1]
        ) || k))
          return !0;
      }
      return !1;
    }));
    for (let a = i.length; a--; ) {
      e.x = i[a].x, e.y = i[a].y;
      for (let l = r.length; l--; )
        if (this.collision(e, r[l], n)) {
          i.splice(a, 1);
          break;
        }
    }
    return this.positionGroup.selectAll("rect").data(i).join("rect").attr("data-id", (a, l) => l).attr("class", "shape ghost").attr("x", (a) => (e.x = a.x, this.getRectangleCoordinate(e, "x"))).attr("y", (a) => (e.y = a.y, this.getRectangleCoordinate(e, "y"))).attr("width", this.getWidthAttribute(e)).attr("height", this.getHeightAttribute(e)).on("mousedown", (a, l) => {
      a.stopPropagation(), this.vueComponent.$refs.partsBin.moveShape(
        a.currentTarget,
        e,
        l
      );
    }), this.hasTouch || this.positionGroup.selectAll("rect").on(
      "mouseover",
      function(a) {
        a.stopPropagation(), ct.select(this).classed("hover", !0), ct.select(this).raise();
      },
      {
        passive: !0
      }
    ).on(
      "mouseout",
      function(a) {
        a.stopPropagation(), ct.select(this).classed("hover", !1);
      },
      {
        passive: !0
      }
    ), this.dotGroup.selectAll("circle").data(i).join("circle").attr("data-id", (a, l) => l).attr("class", "dot").attr("cx", (a) => (e.x = a.x, this.getRectangleCoordinate(e, "x"))).attr("cy", (a) => (e.y = a.y, this.getRectangleCoordinate(e, "y"))).attr("r", 8).on("mousedown", (a, l) => {
      a.stopPropagation(), this.vueComponent.$refs.partsBin.moveShape(
        a.currentTarget,
        e,
        l
      );
    }), e.x = 0, e.y = 0, this.hasTouch || this.dotGroup.selectAll("circle").on(
      "mouseover",
      function(a) {
        a.stopPropagation(), ct.select(this).classed("hover", !0);
        const l = ct.select(this).attr("data-id"), c = ct.select(`.ghost[data-id="${l}"]`);
        c.raise(), c.classed("highlight", !0);
      },
      {
        passive: !0
      }
    ).on(
      "mouseout",
      function(a) {
        a.stopPropagation(), ct.select(this).classed("hover", !1);
        const l = ct.select(this).attr("data-id");
        ct.select(`.ghost[data-id="${l}"]`).classed(
          "highlight",
          !1
        );
      },
      {
        passive: !0
      }
    ), !!(i != null && i.length);
  }
  /**
   * toggle the visibility of the cuts
   * @param {Boolean} show
   */
  toggleCuts(e = !0) {
    e ? this.cutGroup.attr("display", "block") : this.cutGroup.attr("display", "none");
  }
  clearSelection() {
    var e;
    this != null && this.shapes && (this.shapes.classed("selected", !1), this.shapes.classed("hover", !1), this.shapes.style("fill", (n) => this.getShapeColor(n))), this != null && this.cuts && (this.cuts.classed("selected", !1), this.cuts.classed("highlight", !1), this.cuts.classed("inside-segment", !1), this.cuts.style("visibility", "visible"), this.cuts.attr(
      "stroke-width",
      (n) => Math.ceil(
        this.measurementScale(
          this.getBladeWidth(n.stock)
        )
      )
    )), (e = this == null ? void 0 : this.shapes) != null && e.length && this.shapes.classed("selected", !1);
  }
  /**
   * add padding
   * this.padding will be 0 when necessary
   * @param {number} value
   */
  addPadding(e) {
    return e + this.padding;
  }
  /**
   * @param {Container} container
   * @returns {number} blade width
   */
  getBladeWidth(e = null) {
    var n, i;
    return A((n = this == null ? void 0 : this.saw) == null ? void 0 : n.bladeWidth) ? (i = this.saw) == null ? void 0 : i.bladeWidth : A(e) && e !== null ? e.getBladeWidth() : 0;
  }
  getHalfBladeWidth(e = null) {
    const n = this.getBladeWidth(e);
    return n !== void 0 && n > 0 ? n / 2 : 0;
  }
  resetShapes() {
    this.shapeGroup && this.shapeGroup.selectAll("*").remove(), this.bandingGroup && this.bandingGroup.selectAll("*").remove(), this.resetShapeAxes();
  }
  resetShapeAxes() {
    this.shapeXAxis && this.shapeXAxis.remove(), this.shapeYAxis && this.shapeYAxis.remove();
  }
  resetStock() {
    this.stockGroup && this.stockGroup.selectAll("*").remove(), this.axisGroup && this.axisGroup.selectAll("*").remove(), this.resetStockAxes();
  }
  resetStockAxes() {
    this.xAxis && this.xAxis.remove(), this.yAxis && this.yAxis.remove();
  }
  resetCuts() {
    this.cutGroup && this.cutGroup.selectAll("*").remove(), this.resetCutMeasurementAxes();
  }
  resetSegments() {
    this.segmentGroup && this.segmentGroup.selectAll("*").remove();
  }
  resetCutMeasurementAxes() {
    var e, n;
    (e = this.cutMeasurementXAxes) != null && e.length && (this.cutMeasurementXAxes.forEach((i) => i.remove()), this.cutMeasurementXAxes.length = 0), (n = this.cutMeasurementYAxes) != null && n.length && (this.cutMeasurementYAxes.forEach((i) => i.remove()), this.cutMeasurementYAxes.length = 0);
  }
  resetPositions() {
    this.positionGroup && this.positionGroup.selectAll("*").remove(), this.dotGroup && this.dotGroup.selectAll("*").remove();
  }
  reset() {
    this.resetPositions(), this.resetShapes(), this.resetStock(), this.resetCuts(), this.resetSegments();
  }
  /**
   * detect collision - required for move mode
   * @param {object} thisShape
   * @param {object} testShape
   * @param {object} container
   * @returns {boolean} true if collision
   */
  collision(e, n, i) {
    if (e.id === n.id)
      throw new Error("collision comparing to self");
    return (
      // 1 left
      e.x < n.x + n.l + this.getBladeWidth(i) && // 2 right
      e.x + e.l + this.getBladeWidth(i) > n.x && // 3 bottom
      e.y < n.y + n.w + this.getBladeWidth(i) && // 4 top
      e.y + e.w + this.getBladeWidth(i) > n.y
    );
  }
}
function ef(t, e) {
  return e.split(".").reduce((n, i) => n[i], t);
}
function xt(t, e) {
  var n;
  return t != null && t[0] ? (typeof ((n = this == null ? void 0 : this.gs) == null ? void 0 : n[t[0]]) < "u" ? Ru(this.gs, t, e) : typeof (this == null ? void 0 : this[t[0]]) < "u" && Ru(this, t, e), !0) : !1;
}
function At(t) {
  var e;
  if (!(t != null && t[0]))
    return null;
  if ("gs" in this && typeof ((e = this == null ? void 0 : this.gs) == null ? void 0 : e[t[0]]) < "u")
    return Rs(this.gs, t);
  if (typeof (this == null ? void 0 : this[t[0]]) < "u")
    return Rs(this, t);
}
function WT(t) {
  var e;
  if (!(t != null && t[0]))
    return null;
  if ("optionsStore" in this && typeof ((e = this == null ? void 0 : this.optionsStore) == null ? void 0 : e[t[0]]) < "u")
    return Rs(this.optionsStore, t);
  if (typeof (this == null ? void 0 : this[t[0]]) < "u")
    return Rs(this, t);
}
function Yr(t) {
  t.queue = 0, t.stockCount = 0, t.shapeCount = 0, t.resultCount = 0, t.complete = !1;
}
function Rk(t, e = null) {
  var n, i;
  typeof ((n = this.$refs) == null ? void 0 : n[t]) > "u" || ((i = this.$refs) == null ? void 0 : i[t]) === null || (e !== null ? this.$refs[t].visible = e : this.$refs[t].visible = !this.$refs[t].visible);
}
function Dk(t, e) {
  return t != null && t.length ? t.find((n) => n.id === e) : null;
}
function Fk(t, e) {
  if (!(t != null && t.length) || !e)
    return [];
  const n = t.filter(
    (i) => {
      var r, s;
      return (((r = i == null ? void 0 : i.stock) == null ? void 0 : r.id) ?? (i == null ? void 0 : i.stockId)) === e.id && !((s = i == null ? void 0 : i.guillotineData) != null && s.ptxDummyCut);
    }
  );
  return n.sort((i, r) => {
    var s, o;
    return ((s = i == null ? void 0 : i.guillotineData) == null ? void 0 : s.order) - ((o = r == null ? void 0 : r.guillotineData) == null ? void 0 : o.order);
  }), n;
}
function $k(t) {
  return t != null && t.length ? t.filter((e) => e.used === !0) : [];
}
function Bk(t = {
  app: !1,
  env: "production",
  main: !0,
  elementID: "#smartcut-svg-wrapper",
  units: this.units,
  decimalPlaces: 2,
  saw: this.optionsStore.saw,
  embed: !1,
  colors: this.colors,
  options: this.visOptions,
  vueComponent: this
}) {
  if (this.visInit)
    return !1;
  this.vis = new Mk(t), this.vis.initStock(this.activeStock), this.vis.initShapes(this.activeShapes, this.shapeList), this.vis.initCuts(this.activeCuts, this.activeStock), this.visInit = !0;
}
function Uk(t = !1) {
  var r;
  let e = ((r = this == null ? void 0 : this.gs) == null ? void 0 : r.inputStock) || (this == null ? void 0 : this.inputStock);
  if (!(e != null && e.length))
    return ["No stock input"];
  const n = At.call(this, ["stockList"]);
  n && (n.length = 0);
  const i = [];
  t && (e = [e[0]]);
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    !(o != null && o.q) && !o.autoAdd && !t || i.push(...this.createStock(o, s));
  }
  return i;
}
function qk() {
  var n, i;
  if (this.thinking)
    return !1;
  this.thinking = !0, this.success = !1;
  const t = [];
  if (t.push(...Gk.call(this)), t.length) {
    this.showMessage({
      heading: `Part issue${t.length > 1 ? "s" : ""}`,
      main: `<p>${t.length} issue${t.length > 1 ? "s" : ""} found with part inputs</p>`,
      list: t.slice(0, 5)
    }), this.thinking = !1;
    return;
  }
  if (this.reset(), t.push(...this.createStockList()), t.length) {
    this.showMessage({
      heading: `Stock issue${t.length > 1 ? "s" : ""}`,
      main: `<p>${t.length} issue${t.length > 1 ? "s" : ""} found with stock inputs</p>`,
      list: t.slice(0, 5)
    }), this.thinking = !1;
    return;
  }
  if (t.push(...this.createShapeList()), t.length) {
    this.showMessage({
      heading: `Part issue${t.length > 1 ? "s" : ""}`,
      main: `<p>${t.length} issue${t.length > 1 ? "s" : ""} found with part inputs</p>`,
      list: t.slice(0, 5)
    }), this.thinking = !1;
    return;
  }
  const e = new Tn(
    this.saw,
    ((n = this.saw) == null ? void 0 : n.stockType) ?? ((i = this.stockList) == null ? void 0 : i[0].type)
  );
  if (e.issues.length) {
    this.showMessage({
      heading: `Saw issue${e.issues.length > 1 ? "s" : ""}`,
      main: `<p>${e.issues.length} issue${e.issues.length > 1 ? "s" : ""} found with saw inputs</p>`,
      list: e.issues.slice(0, 5)
    }), this.thinking = !1;
    return;
  }
  this.saw = e, this.debug && console.log(
    "Smartcut - calculating...",
    this.stockList.map((r) => r.getDimensions()),
    this.shapeList.map((r) => r.getDimensions())
  ), this.socket.connect(), this.socket.compress(!0).emit(
    "calculate",
    {
      saw: this.saw,
      shapeList: this.shapeList,
      stockList: this.stockList,
      enableEvo: this.enableEvo,
      domain: this.domain
    },
    this.socket.id
  );
}
function Wk() {
  var i;
  const t = At.call(this, ["vis"]);
  if (!t)
    return;
  const e = At.call(this, ["shapeList"]);
  if (!(e != null && e.length))
    return !1;
  t.resetPositions(), t.resetShapes();
  const n = At.call(this, ["activeShapes"]);
  t.initShapes(n, e), (i = this == null ? void 0 : this.$refs) != null && i.PartsBin && this.$refs.PartsBin.clear(!1);
}
function Hk() {
  const t = At.call(this, ["vis"]);
  if (!t)
    return;
  const e = At.call(this, ["stockList"]);
  if (!(e != null && e.length))
    return !1;
  t.resetStock();
  const n = At.call(this, ["activeStock"]);
  t.initStock(n), t.resetCuts();
  const i = At.call(this, ["activeCuts"]);
  t.initCuts(i), t.resetSegments();
  const r = At.call(this, ["activeSegments"]);
  t.initSegments(r), t.resetPositions(), typeof this.toggleSegments == "function" && this.toggleSegments(!1), this != null && this.cutMode && (this == null || this.showCut(0));
}
function Vk() {
  var e;
  const t = ((e = this == null ? void 0 : this.gs) == null ? void 0 : e.vis) ?? (this == null ? void 0 : this.vis);
  t && (t.clearSelection(), t.resetShapeAxes(), t.resetCutMeasurementAxes(), t.resetPositions());
}
function zk(t) {
  At.call(this, ["examineShape"]) && (this.examineShape = null), xt.call(this, ["activeStockId"], t);
}
function Gk() {
  var i;
  const t = [], e = ((i = this == null ? void 0 : this.gs) == null ? void 0 : i.inputShapes) ?? (this == null ? void 0 : this.inputShapes);
  e.length || t.push("No valid parts found");
  const n = b1(e);
  return (!(e != null && e.length) || !n) && t.push("No quantity of parts found"), t;
}
function jk(t) {
  if (t === !1 && this.allowOnlineMessages) {
    const e = {
      heading: "Offline",
      main: "<p>Looks like you have just gone offline.</p><p>Calculations are disabled for now.</p>"
    };
    typeof this.showModalMessage == "function" && this.showModalMessage(e), this.allowOnlineMessages = !1, this.onlineTimer = setTimeout(() => {
      this.allowOnlineMessages = !0;
    }, 3e4);
  }
}
var Yk = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
function Kk(t = Yk.VITE_WS_SERVER) {
  this.socket = ds(t, {
    withCredentials: !0,
    //this is required to send passport user data
    autoConnect: !1
  }), this.socket.on("connect", () => {
    xt.call(this, ["connected"], !0);
  }), this.socket.on("maintenance", () => {
    xt.call(this, ["maintenanceMode"], !0), this.socket.disconnect(), this.env === "development" && console.log(
      "SmartCut - maintenance mode flag received from server"
    );
  }), this.socket.on("connect_error", (e) => {
    xt.call(this, ["connected"], !1), console.warn(`SmartCut - socket connect_error: ${e.message}`), typeof alert < "u" && alert(
      "We are having trouble connecting to the server. Please try again later."
    );
  }), this.socket.on("message", (e) => console.log(e)), this.socket.on("queued", () => {
    xt.call(this, ["progress", "queue"], 1);
  }), this.socket.on("jobInProgess", (e) => (alert(
    `You already have a job in progress, please wait for it to finish

Job ID: ${e}`
  ), !1)), this.socket.on(
    "jobStart",
    () => xt.call(this, ["progress", "queue"], 2)
  ), this.socket.on("progress", (e) => {
    const n = e.data;
    typeof n.shapeCount < "u" && xt.call(this, ["progress", "shapeCount"], n.shapeCount), typeof n.stockCount < "u" && xt.call(this, ["progress", "stockCount"], n.stockCount), typeof n.resultCount < "u" && xt.call(this, ["progress", "resultCount"], n.resultCount);
  }), this.socket.on("upgrade", () => {
    "showUpgradeModal" in this && typeof this.showUpgradeModal == "function" && this.showUpgradeModal(), xt.call(this, ["thinking"], !1);
  }), this.socket.on("error", (e) => {
    var i;
    xt.call(this, ["thinking"], !1);
    const n = At.call(this, ["reset"]);
    typeof n == "function" && n(), console.error("SmartCut error:", e), (i = window == null ? void 0 : window.top) == null || i.postMessage(
      {
        type: "scError",
        message: e
      },
      "*"
    ), "showMessage" in this && typeof this.showMessage == "function" && this.showMessage("Issue: " + e), typeof this.showModalMessage == "function" && this.showModalMessage({
      heading: "Issue",
      main: e ? `<p>${e}</p>` : "<p>We are having trouble connecting to the server.</p><p>Please try again later and let us know.</p>"
    });
  }), this.socket.on("result", (e) => {
    var a, l, c, u, f, h, p, y, k;
    this.socket.disconnect();
    const n = e.result, i = At.call(this, ["resetProgress"]);
    if (xt.call(this, ["unusableShapes"], n.unusableShapes), xt.call(this, ["unavailableStock"], n.unavailableStock), xt.call(this, ["metadata"], n.metadata), !((a = n.shapeList) != null && a.length) || !n.stockList.length) {
      if (i(), typeof this.showModalMessage == "function") {
        let w = "<p>We did not manage to fit any parts.</p>";
        (l = n == null ? void 0 : n.unusableShapes) != null && l.length ? (w = "<p>No parts were usable.</p><p>Click below to view the <strong>Unusable parts</strong> message in the <strong>Inputs panel</stong>.</p>", this.showModalMessage({
          heading: "Parts unusable",
          main: w,
          buttonText: "Show me",
          buttonCallback: (g) => {
            g.showPageElement("ununsable-parts");
          }
        })) : (w += "<p>Please double check your inputs.</p>", this.$nextTick(() => {
          this.showModalMessage({
            heading: "Parts unusable",
            main: w
          });
        }));
      }
      return (c = window == null ? void 0 : window.top) == null || c.postMessage(
        {
          type: "scError",
          message: "No parts were added - please double check your inputs."
        },
        "*"
      ), "showMessage" in this && typeof this.showMessage == "function" && this.showMessage(
        "No parts were added - please double check your inputs."
      ), xt.call(this, ["thinking"], !1), typeof this.toggleWidget == "function" && this.toggleWidget.call(this, "inputs", !0), !1;
    }
    n.shapeList.find((w) => !w.added) && typeof this.showModalMessage == "function" && this.$nextTick(() => {
      this.showModalMessage({
        heading: "Parts not used",
        main: "<p>We did not use all your parts.</p><p>Click below to view the <strong>Unusable parts</strong> message in the <strong>Inputs panel</stong>.</p>",
        buttonText: "Show me",
        buttonCallback: (w) => {
          w.showPageElement("ununsable-parts");
        }
      });
    }), xt.call(this, ["progress", "complete"], !0), xt.call(this, ["jobId"], e == null ? void 0 : e.jobId), this.toggleWidget("updateStock", !1), this.toggleWidget("options", !1), this.toggleWidget("offcuts", !1), this.toggleWidget("results", !1), this.toggleWidget("cutlist", !1), this.toggleWidget("export", !1), this.toggleWidget("labels", !1);
    let r;
    n != null && n.saw && (r = new Tn(
      n == null ? void 0 : n.saw,
      ((u = n == null ? void 0 : n.saw) == null ? void 0 : u.stockType) ?? ((h = (f = n.stockList) == null ? void 0 : f[0]) == null ? void 0 : h.type)
    ), xt.call(this, ["saw"], r));
    const s = V1({
      saw: r,
      stockList: n.stockList,
      removeScores: !0,
      preventAutoRotation: !0
    });
    xt.call(this, ["stockList"], s);
    const o = At.call(this, ["usedStock"]);
    o.length && this.$nextTick(() => {
      xt.call(this, ["activeStockId"], o[0].id);
    }), xt.call(
      this,
      ["shapeList"],
      z1({
        shapeList: n.shapeList,
        stockList: s,
        preventAutoRotation: !0
      })
    ), n != null && n.cutList && xt.call(
      this,
      ["cutList"],
      G1({
        cutList: n.cutList,
        stockList: s
      })
    ), n != null && n.segmentList && xt.call(
      this,
      ["segmentList"],
      j1({
        segmentList: n.segmentList,
        stockList: s
      })
    ), n != null && n.offcuts && xt.call(
      this,
      ["offcuts"],
      K1({
        offcuts: n.offcuts,
        stockList: s,
        preventAutoRotation: !0
      })
    ), n != null && n.metadata && xt.call(this, ["metadata"], n.metadata), (p = n == null ? void 0 : n.evolutionVisData) != null && p.length ? xt.call(this, ["evolutionVisData"], n.evolutionVisData) : typeof this.toggleWidget == "function" && this.toggleWidget.call(this, "evolution", !1), typeof this.toggleWidget == "function" && this.toggleWidget.call(this, "workbench", !0), xt.call(this, ["thinking"], !1), (k = (y = this.$refs) == null ? void 0 : y.inputs) != null && k.success && (this.$refs.inputs.success = !1), this.$nextTick(() => {
      var g, b;
      if (At.call(this, ["addedShapes"]).length === 0) {
        if (i(), typeof this.showModalMessage == "function") {
          let x = "<p>We could not fit any parts.</p>";
          (g = n == null ? void 0 : n.unusableShapes) != null && g.length ? (x += "<p>Some parts were not usable - click below to view the <strong>Unusable parts</strong> message in the <strong>Inputs panel</stong>.</p>", this.showModalMessage({
            heading: "No layouts",
            main: x,
            buttonText: "More info",
            buttonCallback: (S) => {
              S.showPageElement("ununsable-parts");
            }
          })) : (x += "<p>Please double check your inputs.</p>", this.showModalMessage({
            heading: "No layouts",
            main: x
          }));
        }
        (b = window == null ? void 0 : window.top) == null || b.postMessage(
          {
            type: "scError",
            message: "No parts were added."
          },
          "*"
        ), console.warn("No parts were added."), typeof this.toggleWidget == "function" && this.toggleWidget.call(this, "inputs", !0);
      }
    });
  });
}
function Vs(t, e, n, i) {
  var r, s;
  return !n || !i ? !1 : typeof ((s = (r = t == null ? void 0 : t[n]) == null ? void 0 : r[e]) == null ? void 0 : s[i]) < "u";
}
function Xk(t, e, n, i) {
  var r;
  return !n || !i ? !1 : Vs(t, e, n, i) ? (r = t[n][e][i]) == null ? void 0 : r.enabled : !1;
}
function Jk(t, e, n, i, r = !0) {
  if (!Vs(t, e, n, i))
    return !1;
  Vs(t, e, n, i) && (t[n][e][i].enabled = r);
}
function HT(t, e) {
  return t.type === "unitDependent" ? e === "decimal" ? "decimal" : "text" : t.type === "number" ? "decimal" : "text";
}
function VT(t, e) {
  return t.type === "unitDependent" ? e === "decimal" ? "number" : "text" : t.type === "boolean" ? "checkbox" : t.type === "number" ? "number" : "text";
}
function zT(t) {
  return typeof t.min > "u" ? null : typeof t.min == "function" ? t.min() : typeof t.min == "number" ? t.min : null;
}
function GT(t) {
  return typeof t.max > "u" ? null : typeof t.max == "function" ? t.max() : typeof t.max == "number" ? t.max : null;
}
const Qk = {
  name: "StockNavigation",
  props: {
    stockList: {
      type: Array,
      default: () => []
    },
    primaryColor: {
      type: String,
      default: ""
    },
    secondaryColor: {
      type: String,
      default: ""
    },
    activeStockId: {
      type: String,
      default: null
    }
  },
  emits: ["show-stock"],
  methods: {
    showStock(t) {
      this.$emit("show-stock", t);
    }
  }
}, $i = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [i, r] of e)
    n[i] = r;
  return n;
}, Zk = { id: "mini-stock-nav" }, tS = ["onMousedown"], eS = { class: "id" };
function nS(t, e, n, i, r, s) {
  return tt(), st("div", Zk, [
    (tt(!0), st(Ft, null, $n(n.stockList, (o, a) => (tt(), st("button", {
      key: a,
      class: Yn(["nav-button", { selected: o.id === n.activeStockId }]),
      type: "button",
      style: zt({
        backgroundColor: o.id === n.activeStockId ? "#" + n.secondaryColor : "#" + n.primaryColor
      }),
      onMousedown: (l) => s.showStock(o.id)
    }, [
      Z("div", eS, bt(a + 1), 1),
      Oe(Z("div", { class: "stack legibility" }, bt(o.stack), 513), [
        [Ch, typeof o.stack == "number" && o.stack > 1]
      ])
    ], 46, tS))), 128))
  ]);
}
const iS = /* @__PURE__ */ $i(Qk, [["render", nS]]), rS = {
  name: "OrientationButton",
  props: {
    shape: {
      type: Object,
      default: () => null
    },
    buttonBackground: {
      type: String,
      default: "#e4e4e4"
    },
    iconColor: {
      type: String,
      default: "#FFFFFF"
    }
  }
}, sS = /* @__PURE__ */ Z("path", { d: "m481.2 33.81c-8.938-3.656-19.31-1.656-26.16 5.219l-50.51 50.51c-40.23-35.729-92.43-57.539-148.53-57.539-99 0-187.47 66.31-215.09 161.3-3.72 12.7 3.59 26 16.31 29.7 12.81 3.781 26.06-3.625 29.75-16.31 21.73-74.59 91.23-126.69 169.03-126.69 43.12 0 83.35 16.42 114.7 43.4l-59.63 59.63c-6.875 6.875-8.906 17.19-5.219 26.16 3.719 8.969 12.47 14.81 22.19 14.81h143.9c13.259-.9 24.059-10.7 24.059-24v-144c0-9.72-5.8-18.47-14.8-22.19zm-26.5 254.29c-12.78-3.75-26.06 3.594-29.75 16.31-21.65 75.49-91.15 127.59-169.85 127.59-43.12 0-83.38-16.42-114.7-43.41l59.62-59.62c6.875-6.875 8.891-17.03 5.203-26-2.823-8.97-11.523-14.97-22.123-14.97h-143.05c-13.25 0-24.11 10.74-24.11 23.99v144c0 9.719 5.844 18.47 14.81 22.19 2.97 1.22 6.09 1.82 9.19 1.82 6.25 0 12.38-2.438 16.97-7.031l50.51-50.52c40.18 35.751 92.48 57.551 147.68 57.551 99 0 187.4-66.31 215.1-161.3 4.6-13.6-2.8-26-15.5-30.6z" }, null, -1), oS = [
  sS
], aS = /* @__PURE__ */ Z("path", { d: "m512 256c0 6.688-2.812 13.09-7.719 17.62l-104 96c-4.581 4.28-10.481 6.38-16.281 6.38-6.469 0-12.91-2.594-17.62-7.719-9-9.75-8.406-24.94 1.344-33.91l58.876-54.371h-341.22l58.91 54.38c9.75 8.969 10.34 24.16 1.344 33.91-4.734 5.11-11.134 7.71-17.634 7.71-5.812 0-11.66-2.094-16.28-6.375l-104-96c-4.907-4.525-7.72-10.925-7.72-17.625s2.812-13.09 7.719-17.62l104-96c9.781-9.08 24.981-8.38 33.881 1.32 9 9.75 8.406 24.94-1.344 33.91l-58.876 54.39h341.3l-58.91-54.38c-9.75-8.969-10.34-24.16-1.344-33.91 8.874-9.71 24.074-10.41 33.874-1.31l104 96c4.9 4.5 7.7 10.9 7.7 17.6z" }, null, -1), lS = [
  aS
], cS = {
  key: 2,
  class: "orientation",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, uS = /* @__PURE__ */ Z("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1), fS = [
  uS
];
function hS(t, e, n, i, r, s) {
  return tt(), st("div", {
    class: Yn(["orientation-button", [
      {
        "orientation-l": n.shape.orientationLock === "l",
        "orientation-w": n.shape.orientationLock === "w"
      }
    ]]),
    "aria-label": "Part orientation",
    style: zt({
      background: n.buttonBackground
    })
  }, [
    n.shape.orientationLock ? vt("", !0) : (tt(), st("svg", {
      key: 0,
      class: "no-orientation",
      style: zt({
        fill: n.iconColor
      }),
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, oS, 4)),
    n.shape.orientationLock.trim().length ? (tt(), st("svg", {
      key: 1,
      class: "orientation",
      style: zt({
        fill: n.iconColor ? n.iconColor : "#ffffff"
      }),
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, lS, 4)) : vt("", !0),
    n.shape.orientationLock === " " ? (tt(), st("svg", cS, fS)) : vt("", !0)
  ], 6);
}
const dS = /* @__PURE__ */ $i(rS, [["render", hS]]), pS = {
  name: "Spinner",
  props: {
    size: {
      type: Number,
      default: 100
    },
    showNumber: {
      type: Boolean,
      default: !0
    },
    number: {
      type: Number,
      default: 0
    },
    complete: {
      type: Boolean,
      default: !1
    }
  }
}, mS = { id: "spinner" }, gS = ["width", "height"], yS = /* @__PURE__ */ wg('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7), bS = [
  yS
], vS = /* @__PURE__ */ Z("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1), _S = [
  vS
], wS = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function xS(t, e, n, i, r, s) {
  return tt(), st("div", mS, [
    n.complete ? vt("", !0) : (tt(), st("svg", {
      key: 0,
      class: "loading",
      style: zt({ width: n.size + "px", height: n.size + "px" }),
      width: n.size,
      height: n.size,
      viewBox: "0 0 300 300"
    }, bS, 12, gS)),
    n.complete ? (tt(), st("svg", {
      key: 1,
      class: "complete",
      style: zt({ width: n.size + "px", height: n.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, _S, 4)) : vt("", !0),
    n.showNumber ? (tt(), st("div", wS, bt(n.number), 1)) : vt("", !0)
  ]);
}
const kS = /* @__PURE__ */ $i(pS, [["render", xS]]);
function SS(t) {
  var e, n, i, r, s, o, a, l;
  return t.machining ? (n = (e = t.machining) == null ? void 0 : e.holes) != null && n.length || (r = (i = t.machining) == null ? void 0 : i.hingeHoles) != null && r.length ? !0 : (o = (s = t.machining) == null ? void 0 : s.corners) != null && o.length ? (l = (a = t.machining) == null ? void 0 : a.corners) == null ? void 0 : l.some((c) => c.type && c.size) : !1 : !1;
}
const ES = /* @__PURE__ */ hh(
  () => import("./Machining-CNlM0K0b.js")
), op = {
  name: "CheckoutCalculator",
  components: {
    StockNavigation: iS,
    OrientationButton: dS,
    Spinner: kS,
    Machining: ES
    // Offcuts,
  },
  props: {
    debug: {
      type: Boolean,
      default: !1
    },
    //stock is passed as a prop, which allows it to be changed after init (e.g. variations in WP)
    stock: {
      type: Array,
      default: () => []
    }
  },
  emits: ["result", "log", "error", "debug"],
  setup() {
    const { t, locale: e, fallbackLocale: n } = co({
      locale: "en_US"
    });
    return {
      t,
      locale: e,
      fallbackLocale: n
    };
  },
  data() {
    const t = A0(
      "Checkout/inputShapes",
      [],
      {
        serializer: {
          read: (e) => {
            const n = e ? JSON.parse(e) : [];
            return H1(n);
          },
          write: (e) => {
            const n = e.filter((i) => !(i != null && i.multiSelect));
            return JSON.stringify(n);
          }
        },
        listenToStorageChanges: !1
      }
    );
    return {
      domain: window.location.hostname,
      connected: !1,
      maintenanceMode: !1,
      creditVisible: !0,
      online: !0,
      onlineTimer: null,
      allowOnlineMessages: !0,
      socket: null,
      thinking: !1,
      jobId: 0,
      //used for watchers to reset results
      height: null,
      successMetric: "areaEfficiency",
      enableEvo: !1,
      saw: {
        bladeWidth: 1,
        cutPreference: "l",
        cutType: "guillotine",
        stockType: "sheet",
        stackHeight: 0
      },
      currentInputShape: null,
      inputShapes: t.value,
      inputStock: [],
      activeStockId: null,
      stockList: ui([]),
      shapeList: ui([]),
      cutList: ui([]),
      offcuts: ui([]),
      metadata: null,
      messageVisible: !1,
      messageContent: "",
      vis: Qa({}),
      visInit: !1,
      isFullScreen: !1,
      machiningEnabled: !1,
      selectedShapeId: null,
      //default options
      options: {
        units: "decimal",
        decimalPlaces: 2,
        stackHeight: 100,
        maxParts: null,
        showBanding: !1,
        disableBanding: !1,
        disableOrientation: !1,
        bandingTypes: [],
        //array of banding strings
        showDiagram: !0,
        showProgressNumber: !0,
        locale: "en_US"
      },
      //styles are declared here to prevent tampering
      creditStyles: {
        fontSize: "11px",
        textAlign: "right",
        width: "100%",
        height: "auto",
        position: "relative",
        display: "flex",
        visibility: "visible",
        opacity: "1",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-end",
        paddingRight: "10px",
        marginTop: "10px",
        marginBottom: "10px",
        userSelect: "none"
      },
      creditLinkStyles: {
        width: "auto",
        height: "auto",
        display: "block",
        position: "relative",
        visibility: "visible",
        opacity: "1",
        color: "#4e4e4e"
      },
      machiningOptions: {
        sides: {
          enabled: !0
        },
        holes: {
          enabled: !1
        },
        corners: {
          enabled: !1,
          types: []
        },
        banding: {
          enabled: !1
        },
        hingeHoles: {
          enabled: !1
        },
        shelfHoles: {
          enabled: !1
        }
      },
      canGoFullScreen: !0,
      multiThicknesses: [],
      progress: {
        queue: 0,
        stockCount: 0,
        shapeCount: 0,
        complete: !1
      },
      colors: {
        partA: "#118ab2",
        //also used for id - needs to be set
        partB: null,
        partHover: null,
        partSelected: null,
        stock: "#ffd166",
        //also used for stock-number
        button: "#118ab2",
        buttonText: "#ffffff",
        text: "#ffffff"
      },
      visOptions: {
        disableClick: !1
      },
      viewportWidth: null,
      mounted: !1,
      loaded: !1,
      w: 0,
      h: 0,
      //remove definition to disable
      fieldDefinitions: {
        parts: {
          sheet: {
            l: {
              enabled: !0,
              type: "unitDependent"
            },
            w: {
              enabled: !0,
              type: "unitDependent"
            },
            t: {
              enabled: !1,
              type: "unitDependent"
            },
            q: {
              enabled: !0,
              type: "number",
              default: 1
            },
            name: {
              enabled: !0,
              type: "string"
            },
            orientation: {
              enabled: !0,
              type: null,
              w: "26px"
            },
            machining: {
              enabled: !1,
              type: null,
              w: "26px"
            },
            banding: {
              enabled: !0,
              type: "unitDependent"
            }
          },
          linear: {
            l: {
              enabled: !0,
              type: "unitDependent"
            },
            q: {
              enabled: !0,
              type: "number",
              default: 1
            },
            name: {
              enabled: !0,
              type: "string"
            }
          }
        }
      }
    };
  },
  computed: {
    server() {
      return this.domain === "sc-store" || this.domain === "localhost" ? "http://localhost:5000" : "https://api.cutlistevo.com/";
    },
    selectedShape() {
      return this.selectedShapeId ? this.inputShapes.find(
        (t) => t.id === this.selectedShapeId
      ) : null;
    },
    inputType() {
      return this.options.units === "decimal" ? "number" : "string";
    },
    inputMode() {
      return this.options.units === "decimal" ? "decimal" : "text";
    },
    partColumns() {
      let t = Object.values(
        this.fieldDefinitions.parts[this.saw.stockType]
      ).filter((e) => e.enabled).length;
      return this.inputShapes.length > 1 && t++, this.isFieldEnabled("parts", "banding") && t--, t;
    },
    partColumnsStyle() {
      const t = {
        id: "34px",
        del: "30px"
      }, e = [];
      for (const i in this.fieldDefinitions.parts[this.saw.stockType]) {
        if (["banding", "trim"].includes(i))
          continue;
        const r = this.fieldDefinitions.parts[this.saw.stockType][i];
        r.enabled && e.push(r.w ?? "1fr");
      }
      return e.unshift(t.id), this.inputShapes.length > 1 && e.push(t.del), e.join(" ");
    },
    addedShapes() {
      return this.shapeList.filter((t) => t.added);
    },
    uniqueShapes() {
      return this.shapeList.filter(
        (t) => t.added && !t.duplicate
      );
    },
    numUniqueShapes() {
      return this.uniqueShapes.length;
    },
    uniqueAddedShapes() {
      return this.uniqueShapes.filter((t) => t.added);
    },
    uniqueStock() {
      return this.stockList.filter(
        (t) => t.used && !t.duplicate
      );
    },
    uniqueUsedStock() {
      return this.uniqueStock.filter((t) => t.used).map((t) => (t.q = this.uniqueStock.filter((e) => e.parentID === t.parentID).reduce(
        (e, n) => e + (n == null ? void 0 : n.stack) > 0 ? n.stack : 1,
        0
      ), t));
    },
    usedStock() {
      return $k(this.stockList);
    },
    activeStock() {
      return this.activeStockId ? Dk(this.stockList, this.activeStockId) : null;
    },
    activeStockArea() {
      return this.activeStock.getArea();
    },
    stackedStock() {
      return _1(this.stockList);
    },
    activeShapes() {
      return this.shapeList.filter(
        (t) => {
          var e, n;
          return t.added && ((e = t == null ? void 0 : t.stock) == null ? void 0 : e.id) === ((n = this.activeStock) == null ? void 0 : n.id);
        }
      );
    },
    activeCuts() {
      return Fk(this.cutList, this.activeStock);
    },
    unplacedShapes() {
      return v1(this.shapeList);
    },
    totalCutLength() {
      return !this.cutList.length || !this.metadata.totalCutLength ? 0 : this.metadata.totalCutLength;
    },
    totalInputShapes() {
      return this.inputShapes.reduce((t, e) => t + e.q, 0);
    }
  },
  watch: {
    online(t) {
      jk.call(this, t);
    },
    jobId(t) {
      if (!t)
        return;
      this.visInit && this.updateVisSize(), this.metadata || this.$emit(
        "error",
        "SmartCut - no metadata received from server"
      ), this.changePartQuantitiesBasedOnThickness();
      const e = {
        jobId: this.jobId,
        metadata: this.metadata,
        parts: this.uniqueAddedShapes.map((n) => {
          var i;
          return {
            l: n.l,
            w: n.w,
            t: n == null ? void 0 : n.t,
            q: (i = this.metadata.addedPartTally) == null ? void 0 : i[n.parentID]
          };
        }),
        stock: this.uniqueUsedStock.map((n) => {
          var i;
          return {
            name: n == null ? void 0 : n.name,
            l: n.l,
            w: n.w,
            t: n == null ? void 0 : n.t,
            q: (i = this.metadata.usedStockTally) == null ? void 0 : i[n.parentID]
          };
        }),
        offcuts: this.offcuts.map((n) => ({
          l: n.l,
          w: n.w,
          t: (n == null ? void 0 : n.t) ?? null,
          q: n.q
        }))
      };
      if (this.$emit("log", ["result", e]), this.unplacedShapes.length) {
        const n = this.unplacedShapes.map((i) => i.id).join();
        this.showMessage(`The following parts did not fit: ${n}`);
      }
      this.$emit("result", e);
    },
    viewportWidth() {
      this.visInit && this.updateVisSize();
    },
    activeStockId() {
      this.visInit && this.$nextTick(() => this.refresh());
    },
    stock(t) {
      Array.isArray(t) || console.warn("SmartCut - stock must be passed as an array"), this.inputStock = [], this.multiThicknesses = [], this.setFieldEnabled("parts", "t", !1), this.inputShapes.forEach((e) => e.t = null), t.forEach((e, n) => {
        e.type = this.saw.stockType, e.t && typeof e.t == "string" && e.t.includes(",") && (e.t = e.t.split(","), e.t.length !== 2 ? this.$emit(
          "error",
          "double thickness options must have two options"
        ) : (this.setFieldEnabled("parts", "t", !0), this.multiThicknesses = e.t, e.t = e.t[0]));
        const i = this.createStockInput(e);
        this.inputStock.push(i), this.$emit("log", [`stock ${n + 1}`, i]);
      }), this.inputStock.length && (this.inputShapes.length ? this.inputShapes.forEach(
        (e) => e.t = this.inputStock[0].t
      ) : this.addShape(1, !1));
    }
  },
  mounted() {
    if (this.isCreditVisible() || alert(
      "The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support."
    ), this.mounted)
      return;
    this.locale = this.options.locale, Kk.call(this, this.server), this.viewportWidth = window.innerWidth, this.resizeTimer = null;
    const t = this.debounce(this.handleResize, 30);
    window.addEventListener("resize", t, {
      passive: !0
    }), this.mounted = !0;
  },
  methods: {
    isCreditVisible() {
      let t = !0;
      const e = document.querySelector(
        "#smartcut-app #credit"
      ), n = document.querySelector(
        "#smartcut-app #credit a"
      );
      return [e, n].forEach((i, r) => {
        if (!i)
          return t = !1;
        const s = window.getComputedStyle(i);
        if (s.display === "none" || s.display === "hidden" || s.opacity === "0" || s.color === "transparent" || s.position !== "relative" || r === 1 && s.color !== "#4e4e4e" && s.color !== "rgb(78, 78, 78)")
          return t = !1;
      }), this.creditVisible = t, t;
    },
    toggleFullScreen() {
      this.isFullScreen ? this.closeFullScreen() : this.openFullScreen();
    },
    openFullScreen() {
      document.getElementById("smartcut-checkout").requestFullscreen(), this.isFullScreen = !0;
    },
    closeFullScreen() {
      document.exitFullscreen && document.exitFullscreen(), this.isFullScreen = !1;
    },
    openMachining(t = null) {
      this.currentInputShape = t, t && t.l && t.w ? this.machiningEnabled = !0 : alert("Please enter dimensions first");
    },
    closeMachining() {
      this.machiningEnabled = !1, document.exitFullscreen && document.exitFullscreen();
    },
    hasMachining(t = null) {
      return t ? SS(t) : !1;
    },
    resetProgress() {
      Yr(this.progress);
    },
    reset() {
      Yr(this.progress), this.stockList = [], this.shapeList = [], this.cutList = [], this.jobId = 0;
    },
    async updateVisSize(t = !1) {
      if (!this.vis)
        return !1;
      await this.vis.updateSize(t), this.clearSelection();
    },
    isFieldEnabled(t, e) {
      return Xk(
        this.fieldDefinitions,
        this.saw.stockType,
        t,
        e
      );
    },
    isFieldPresent(t, e) {
      return Vs(
        this.fieldDefinitions,
        this.saw.stockType,
        t,
        e
      );
    },
    setFieldEnabled(t, e, n = !0) {
      return Jk(
        this.fieldDefinitions,
        this.saw.stockType,
        t,
        e,
        n
      );
    },
    clear() {
      this.inputShapes.length = 0, this.addShape(1, !0);
    },
    calculate() {
      var t;
      if (this.clearMessage(), (t = this.options) != null && t.maxParts && this.totalInputShapes > this.options.maxParts) {
        this.showMessage(
          `The maximum number of parts is ${this.options.maxParts}`
        );
        return;
      }
      qk.call(this);
    },
    init(t) {
      if (this.$emit("log", ["init", t]), t != null && t.type && delete t.type, t != null && t.options) {
        const e = t.options;
        [
          "stockType",
          "cutPreference",
          "bladeWidth"
        ].forEach((r) => {
          r in e || this.$emit("error", `${r} is a required option`);
        });
        const i = {
          debug: () => {
            this.$emit("debug", e.debug), this.$emit("log", ["data received", t]);
          },
          stockType: () => {
            this.saw.stockType = e.stockType;
          },
          cutPreference: () => {
            const r = [
              "efficiency",
              "length",
              "width",
              "beam"
            ];
            if (r.includes(
              e.cutPreference
            )) {
              const { cutType: s, cutPreference: o } = ba(e.cutPreference);
              this.saw.cutType = s, this.saw.cutPreference = o, this.saw.stackHeight = e.stackHeight, e.stockType === "linear" && (this.saw.cutType = null, this.saw.cutPreference = null), e.cutPreference === "beam" && (this.saw.stackHeight = e.stackHeight);
            } else
              console.warn(
                `SmartCut - ${e.cutPreference} is not one of ${r.join()}`
              );
          },
          bladeWidth: () => {
            e.bladeWidth >= 0 ? this.saw.bladeWidth = e.bladeWidth : console.warn(
              `SmartCut - you provided an incorrect blade width of: ${e.bladeWidth}`
            );
          },
          disableClick: () => {
            this.visOptions.disableClick = e.disableClick;
          },
          colors: () => {
            for (const [r, s] of Object.entries(
              e == null ? void 0 : e.colors
            ))
              s && (this.colors[r] = s);
          },
          maxParts: () => {
            this.options.maxParts = e.maxParts;
          },
          disableOrientation: () => {
            this.setFieldEnabled(
              "parts",
              "orientation",
              !e.disableOrientation
            );
          },
          disablePartName: () => {
            this.setFieldEnabled(
              "parts",
              "name",
              !e.disablePartName
            );
          },
          bandingTypes: () => e.disableBanding ? this.setFieldEnabled(
            "parts",
            "banding",
            !1
          ) : (this.options.bandingTypes = e.bandingTypes, this.options.bandingTypes && Object.values(this.options.bandingTypes).length > 0 ? this.setFieldEnabled(
            "parts",
            "banding",
            !0
          ) : this.setFieldEnabled("parts", "banding", !1)),
          locale: () => {
            this.locale = e.locale;
          },
          units: () => {
            this.options.units = e != null && e.units ? e.units : "decimal";
          },
          enableMachining: () => {
            var r, s, o, a, l;
            this.setFieldEnabled(
              "parts",
              "machining",
              e.enableMachining ?? !1
            ), this.machiningOptions = e.machining, ["holes", "hingeHoles"].forEach((c) => {
              var u, f;
              (u = e == null ? void 0 : e.machining) != null && u[c] && (this.machiningOptions[c].enabled = (f = e == null ? void 0 : e.machining) == null ? void 0 : f[c].enabled);
            }), (o = (s = (r = e == null ? void 0 : e.machining) == null ? void 0 : r.corners) == null ? void 0 : s.types) != null && o.length && (this.machiningOptions.corners.enabled = !0, this.machiningOptions.corners.types = (l = (a = e == null ? void 0 : e.machining) == null ? void 0 : a.corners) == null ? void 0 : l.types);
          }
        };
        for (const r in t == null ? void 0 : t.options)
          this.options[r] = t.options[r], r in i && i[r]();
        if (this.visInit === !1) {
          const r = {
            elementID: "#smartcut-svg-wrapper",
            env: "production",
            main: !0,
            units: this.options.units,
            decimalPlaces: this.options.decimalPlaces,
            saw: this.saw,
            app: !1,
            embed: !0,
            colors: this.colors,
            options: this.visOptions,
            vueComponent: this
          };
          Bk.call(this, r);
        }
      }
    },
    showMessage(t = {
      main: null,
      heading: null,
      list: []
    }) {
      var e;
      typeof t == "object" ? (this.messageContent = t == null ? void 0 : t.main, (e = t == null ? void 0 : t.list) != null && e.length && (this.messageContent += "<ul>", t.list.forEach((n) => {
        this.messageContent += `<li>${n}</li>`;
      }), this.messageContent += "</ul>")) : this.messageContent = t, this.messageVisible = !0;
    },
    clearMessage() {
      this.messageVisible = !1, this.messageContent = null;
    },
    createStockInput({
      l: t = null,
      w: e = null,
      t: n = null,
      q: i = 1,
      name: r = "",
      trim: s = {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
      },
      cost: o = 0
    }) {
      return new wd({
        id: (this.inputStock.length + 1).toString(),
        units: this.options.units,
        w: e,
        l: t,
        t: n,
        q: i,
        cost: o,
        autoAdd: !0,
        name: r,
        trim: s
      });
    },
    createShapeInput({
      l: t = null,
      w: e = null,
      t: n = null,
      q: i = 1,
      orientationLock: r = null
    }) {
      var o;
      return new kl({
        id: (this.inputShapes.length + 1).toString(),
        units: this.options.units,
        l: t,
        w: this.saw.stockType === "linear" ? (o = this.inputStock[0]) == null ? void 0 : o.w : e,
        t: this.multiThicknesses.length ? this.multiThicknesses[0] : n,
        q: i,
        orientationLock: r
      });
    },
    addShape(t = 1, e = !0) {
      var n, i;
      for (let r = t; r--; )
        this.inputShapes.push(
          this.createShapeInput({
            t: ((i = (n = this.inputStock) == null ? void 0 : n[0]) == null ? void 0 : i.t) ?? null
          })
        );
      e && this.$nextTick(() => {
        var r, s;
        t === 1 && (Array.isArray((r = this.$refs) == null ? void 0 : r.shapeInputFocus) ? (s = this.$refs) == null || s.shapeInputFocus.pop().focus() : this.$refs.shapeInputFocus.focus()), Yr(this.progress);
      });
    },
    removeShape(t) {
      this.inputShapes.splice(t, 1), Yr(this.progress);
    },
    createStock(t, e) {
      const n = R(t.l), i = R(t.w), r = t.t ? R(t.t) : null, s = new In({
        id: (e + 1).toString() + ".0",
        name: t != null && t.name ? t.name : `${n}x${i}`,
        l: n,
        w: i,
        t: r,
        saw: new Tn(this.saw),
        autoAdd: !0,
        cost: t == null ? void 0 : t.cost,
        trim: t.trim,
        allowExactFitShapes: t.allowExactFitShapes,
        type: this.saw.stockType
      });
      return console.log(s), this.stockList.push(s), s.issues;
    },
    createStockList() {
      return Uk.call(this, !1);
    },
    //this is for double thickness bonded sheets
    changePartQuantitiesBasedOnThickness() {
      if (this.multiThicknesses.length > 0) {
        const t = R(this.multiThicknesses[0]);
        this.shapeList.forEach((e) => {
          e.q = e.q * (R(e.t) / t), e.t = t;
        });
      }
    },
    createShapeList() {
      var e;
      const t = [];
      for (let n = 0; n < this.inputShapes.length; n++) {
        const i = this.inputShapes[n], r = new on({
          id: (n + 1).toString() + ".0",
          l: R(i == null ? void 0 : i.l),
          w: R(i == null ? void 0 : i.w),
          t: i.t ? R(i == null ? void 0 : i.t) : null,
          q: typeof i.q != "number" ? parseInt(i.q) : i.q,
          name: i.name,
          orientationLock: i.orientationLock,
          banding: i.banding,
          bandingType: i.bandingType,
          machining: i.machining
        });
        this.shapeList.push(r), (e = r == null ? void 0 : r.issues) != null && e.length && t.push(...r.issues);
      }
      return this.changePartQuantitiesBasedOnThickness(), t;
    },
    toggleShapeOrientation(t) {
      const e = ["", "l", "w"];
      let n = e.findIndex(
        (i) => i === t.orientationLock
      );
      n++, n > 2 && (n = 0), t.orientationLock = e[n];
    },
    refresh() {
      this.refreshStock(), this.refreshShapes();
    },
    refreshStock() {
      Hk.call(this);
    },
    refreshShapes() {
      Wk.call(this, this.uniqueShapes.length);
    },
    toggleWidget(t, e = null) {
      Rk.call(this, t, e);
    },
    clearSelection() {
      Vk.call(this);
    },
    showStock(t) {
      zk.call(this, t);
    },
    deleteBanding(t) {
      for (const e in t.banding)
        t.banding[e] = !1;
      for (const e in t.bandingType)
        t.bandingType[e] = "";
    },
    debounce(t, e) {
      let n;
      return function(...r) {
        const s = () => {
          clearTimeout(n), t(...r);
        };
        clearTimeout(n), n = setTimeout(s, e);
      };
    },
    handleResize() {
      this.viewportWidth = window.innerWidth;
    }
  }
};
function nf(t) {
  const e = t;
  e.__i18n = e.__i18n || [], e.__i18n.push({
    locale: "",
    resource: {
      en_US: {
        length: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Length" } },
        l: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L" } },
        width: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Width" } },
        w: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "W" } },
        thickness: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Thickness" } },
        t: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "T" } },
        name: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Name" } },
        quantity: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Quantity" } },
        q: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Q" } },
        machining: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Machining" } },
        orientation: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Orientation" } },
        "add part": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Add part" } },
        "remove part": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Remove part" } },
        calculate: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Calculate" } },
        "full screen": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Full screen" } },
        b: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "B" } },
        banding: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Banding" } },
        "delete banding": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Delete banding" } },
        delete: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Delete" } },
        clear: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Clear" } },
        l1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L1" } },
        l2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L2" } },
        w1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "W1" } },
        w2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "W2" } },
        "Powered by SmartCut": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Powered by SmartCut" } }
      },
      ca: {
        length: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Llarg" } },
        l: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L" } },
        width: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Ample" } },
        w: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "A" } },
        thickness: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Gruix" } },
        t: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "G" } },
        name: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Nom" } },
        quantity: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Quantitat" } },
        q: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Q" } },
        machining: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Mecanitzat" } },
        orientation: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Gir" } },
        "add part": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Afegeix" } },
        "remove part": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Elimina" } },
        calculate: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Calcula" } },
        "full screen": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Pantalla completa" } },
        b: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Cantell" } },
        banding: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Banding" } },
        "delete banding": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Elimina cantell" } },
        delete: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Elimina" } },
        clear: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Neteja" } },
        l1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L1" } },
        l2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L2" } },
        w1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "A1" } },
        w2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "A1" } },
        "Powered by SmartCut": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Desenvolupat per SmartCut" } }
      },
      es_ES: {
        length: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Largo" } },
        l: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L" } },
        width: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Ancho" } },
        w: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "A" } },
        thickness: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Grueso" } },
        t: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "G" } },
        name: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Nombre" } },
        quantity: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Cantidad" } },
        q: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "C" } },
        machining: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Mecanizado" } },
        orientation: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Giro" } },
        "add part": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Añade" } },
        "remove part": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Elimina" } },
        calculate: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Calcula" } },
        "full screen": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Pantalla completa" } },
        b: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Canto" } },
        banding: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Banding" } },
        "delete banding": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Elimina canto" } },
        delete: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Elimina" } },
        clear: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Borra" } },
        l1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L1" } },
        l2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "L2" } },
        w1: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "A1" } },
        w2: { t: 0, b: { t: 2, i: [{ t: 3 }], s: "A1" } },
        "Powered by SmartCut": { t: 0, b: { t: 2, i: [{ t: 3 }], s: "Desarrollado por SmartCut" } }
      }
    }
  });
}
const Sr = (t) => (Om("data-v-60a6cb0f"), t = t(), Pm(), t), TS = {
  id: "shape-input",
  class: "inputs no-margin-top grid-table"
}, AS = /* @__PURE__ */ Sr(() => /* @__PURE__ */ Z("div", { class: "cell" }, null, -1)), CS = {
  key: 0,
  class: "cell"
}, OS = {
  key: 1,
  class: "cell"
}, PS = {
  key: 2,
  class: "cell"
}, NS = { class: "cell" }, IS = {
  key: 3,
  class: "cell"
}, LS = {
  key: 4,
  class: "cell center"
}, MS = {
  key: 5,
  class: "cell center"
}, RS = {
  key: 6,
  class: "cell"
}, DS = { class: "cell" }, FS = {
  key: 0,
  class: "number length cell"
}, $S = ["for"], BS = ["id", "onUpdate:modelValue", "type", "inputmode", "placeholder"], US = {
  key: 1,
  class: "number width cell"
}, qS = ["for"], WS = ["id", "onUpdate:modelValue", "type", "inputmode", "placeholder"], HS = {
  key: 2,
  class: "thickness cell"
}, VS = ["id", "onUpdate:modelValue"], zS = ["value"], GS = { class: "number quant cell" }, jS = ["for"], YS = ["id", "onUpdate:modelValue", "placeholder"], KS = {
  key: 3,
  class: "text name cell"
}, XS = ["id", "onUpdate:modelValue", "aria-label", "placeholder"], JS = {
  key: 4,
  class: "cell"
}, QS = ["onClick"], ZS = {
  key: 6,
  class: "cell"
}, t2 = ["aria-label", "onClick"], e2 = {
  id: "banding-label",
  class: "label small-font"
}, n2 = { class: "inputs" }, i2 = ["for"], r2 = ["id", "onUpdate:modelValue"], s2 = /* @__PURE__ */ Sr(() => /* @__PURE__ */ Z("option", { value: "" }, " ✘ ", -1)), o2 = ["value"], a2 = ["for"], l2 = ["id", "onUpdate:modelValue"], c2 = /* @__PURE__ */ Sr(() => /* @__PURE__ */ Z("option", { value: "" }, " ✘ ", -1)), u2 = ["value"], f2 = ["for"], h2 = ["id", "onUpdate:modelValue"], d2 = /* @__PURE__ */ Sr(() => /* @__PURE__ */ Z("option", { value: "" }, " ✘ ", -1)), p2 = ["value"], m2 = ["for"], g2 = ["id", "onUpdate:modelValue"], y2 = /* @__PURE__ */ Sr(() => /* @__PURE__ */ Z("option", { value: "" }, " ✘ ", -1)), b2 = ["value"], v2 = ["aria-label", "onClick"], _2 = { class: "button-wrapper main" }, w2 = ["aria-label"], x2 = ["aria-label", "disabled"], k2 = ["aria-label"], S2 = { id: "part-count" }, E2 = ["innerHTML"], T2 = {
  key: 2,
  id: "progress"
}, A2 = {
  id: "smartcut-svg-wrapper",
  class: "svg-wrapper production"
}, C2 = {
  key: 0,
  id: "stack"
};
function O2(t, e, n, i, r, s) {
  var f, h, p, y, k;
  const o = si("Machining"), a = si("font-awesome-icon"), l = si("OrientationButton"), c = si("Spinner"), u = si("StockNavigation");
  return tt(), st(Ft, null, [
    r.machiningEnabled ? (tt(), ar(o, {
      key: 0,
      shape: r.currentInputShape,
      options: r.machiningOptions,
      onClose: s.closeMachining
    }, null, 8, ["shape", "options", "onClose"])) : vt("", !0),
    r.creditVisible ? (tt(), st("div", {
      key: 1,
      id: "smartcut-checkout",
      class: Yn({ fullscreen: r.isFullScreen })
    }, [
      r.canGoFullScreen ? (tt(), st("div", {
        key: 0,
        id: "smartcut-full-screen",
        class: "icon-left",
        onClick: e[0] || (e[0] = (w) => s.toggleFullScreen())
      }, [
        mt(a, { icon: ["fasr", "expand"] }),
        oi(" " + bt(i.t("full screen")), 1)
      ])) : vt("", !0),
      Z("div", TS, [
        r.inputShapes.length ? (tt(), st("div", {
          key: 0,
          class: "row table-heading",
          style: zt({ "grid-template-columns": s.partColumnsStyle })
        }, [
          AS,
          s.isFieldEnabled("parts", "l") ? (tt(), st("div", CS, [
            Z("span", null, [
              mt(a, { icon: ["fasr", "arrows-left-right"] }),
              oi(" " + bt(i.t("length")), 1)
            ])
          ])) : vt("", !0),
          s.isFieldEnabled("parts", "w") ? (tt(), st("div", OS, [
            Z("span", null, [
              mt(a, { icon: ["fasr", "arrows-up-down"] }),
              oi(" " + bt(i.t("width")), 1)
            ])
          ])) : vt("", !0),
          s.isFieldEnabled("parts", "t") ? (tt(), st("div", PS, bt(i.t("thickness")), 1)) : vt("", !0),
          Z("div", NS, bt(i.t("quantity")), 1),
          s.isFieldEnabled("parts", "name") ? (tt(), st("div", IS, bt(i.t("name")), 1)) : vt("", !0),
          s.isFieldEnabled("parts", "orientation") ? (tt(), st("div", LS, bt(i.t("orientation")), 1)) : vt("", !0),
          r.canGoFullScreen && s.isFieldEnabled("parts", "machining") ? (tt(), st("div", MS, bt(i.t("machining")), 1)) : vt("", !0),
          r.inputShapes.length > 1 ? (tt(), st("div", RS)) : vt("", !0)
        ], 4)) : vt("", !0),
        (tt(!0), st(Ft, null, $n(r.inputShapes, (w, g) => (tt(), st("div", {
          key: g,
          class: "row grid-table",
          style: zt({ "grid-template-columns": s.partColumnsStyle })
        }, [
          Z("div", DS, [
            Z("div", {
              class: "id",
              style: zt({
                background: r.colors.partA,
                color: r.colors.text
              })
            }, bt(g + 1), 5)
          ]),
          s.isFieldEnabled("parts", "l") ? (tt(), st("div", FS, [
            Z("label", {
              for: "part-length-" + g
            }, bt(i.t("length")), 9, $S),
            Oe(Z("input", {
              id: "part-length-" + g,
              ref_for: !0,
              ref: g === r.inputShapes.length - 1 ? "shapeInputFocus" : void 0,
              "onUpdate:modelValue": (b) => w.l = b,
              type: s.inputType,
              inputmode: s.inputMode,
              min: "0",
              placeholder: i.t("l")
            }, null, 8, BS), [
              [
                Ic,
                w.l,
                void 0,
                {
                  lazy: !0,
                  trim: !0
                }
              ]
            ])
          ])) : vt("", !0),
          s.isFieldEnabled("parts", "w") ? (tt(), st("div", US, [
            Z("label", {
              for: "part-width-" + g
            }, bt(i.t("width")), 9, qS),
            Oe(Z("input", {
              id: "part-width-" + g,
              "onUpdate:modelValue": (b) => w.w = b,
              type: s.inputType,
              inputmode: s.inputMode,
              min: "0",
              placeholder: i.t("w")
            }, null, 8, WS), [
              [
                Ic,
                w.w,
                void 0,
                {
                  lazy: !0,
                  trim: !0
                }
              ]
            ])
          ])) : vt("", !0),
          s.isFieldEnabled("parts", "t") ? (tt(), st("div", HS, [
            Oe(Z("select", {
              id: "part-thickness" + g,
              "onUpdate:modelValue": (b) => w.t = b,
              "aria-label": "Thickness"
            }, [
              (tt(!0), st(Ft, null, $n(r.multiThicknesses, (b, x) => (tt(), st("option", {
                key: x,
                value: b
              }, bt(b), 9, zS))), 128))
            ], 8, VS), [
              [
                ai,
                w.t,
                void 0,
                { lazy: !0 }
              ]
            ])
          ])) : vt("", !0),
          Z("div", GS, [
            Z("label", {
              for: "part-quantity-" + g
            }, bt(i.t("quantity")), 9, jS),
            Oe(Z("input", {
              id: "part-quantity-" + g,
              "onUpdate:modelValue": (b) => w.q = b,
              type: "number",
              inputmode: "numeric",
              min: "0",
              placeholder: i.t("q")
            }, null, 8, YS), [
              [
                Ts,
                w.q,
                void 0,
                {
                  lazy: !0,
                  number: !0
                }
              ]
            ])
          ]),
          s.isFieldEnabled("parts", "name") ? (tt(), st("div", KS, [
            Oe(Z("input", {
              id: "part-name-" + g,
              "onUpdate:modelValue": (b) => w.name = b,
              "aria-label": i.t("name"),
              type: "text",
              placeholder: i.t("name")
            }, null, 8, XS), [
              [
                Ts,
                w.name,
                void 0,
                { lazy: !0 }
              ]
            ])
          ])) : vt("", !0),
          s.isFieldEnabled("parts", "orientation") ? (tt(), st("div", JS, [
            mt(l, {
              shape: w,
              "button-background": r.colors.button,
              "icon-color": r.colors.buttonText,
              onClick: (b) => s.toggleShapeOrientation(w)
            }, null, 8, ["shape", "button-background", "icon-color", "onClick"])
          ])) : vt("", !0),
          r.canGoFullScreen && s.isFieldEnabled("parts", "machining") ? (tt(), st("div", {
            key: 5,
            class: Yn(["cell machining", { active: s.hasMachining(w) }])
          }, [
            Z("button", {
              type: "button",
              onClick: (b) => s.openMachining(w)
            }, [
              mt(a, { icon: ["fass", "hammer"] })
            ], 8, QS)
          ], 2)) : vt("", !0),
          r.inputShapes.length > 1 ? (tt(), st("div", ZS, [
            Z("button", {
              type: "button",
              class: "remove",
              "aria-label": i.t("remove part"),
              onClick: (b) => s.removeShape(g)
            }, [
              mt(a, { icon: ["fass", "trash"] })
            ], 8, t2)
          ])) : vt("", !0),
          s.isFieldEnabled("parts", "banding") && Object.values(r.options.bandingTypes).length > 0 ? (tt(), st("div", {
            key: 7,
            class: "group banding",
            style: zt({ "grid-column-end": "span " + (s.partColumns + 1) })
          }, [
            Z("div", e2, bt(i.t("b")), 1),
            Z("div", n2, [
              Z("div", null, [
                Z("label", {
                  for: "banding-y1-" + g
                }, bt(i.t("l1")), 9, i2),
                Oe(Z("select", {
                  id: "banding-y1-" + g,
                  "onUpdate:modelValue": (b) => w.bandingType.y1 = b
                }, [
                  s2,
                  (tt(!0), st(Ft, null, $n(r.options.bandingTypes, (b, x, S) => (tt(), st("option", {
                    key: x,
                    value: x
                  }, bt(S + 1), 9, o2))), 128))
                ], 8, r2), [
                  [
                    ai,
                    w.bandingType.y1,
                    void 0,
                    { lazy: !0 }
                  ]
                ])
              ]),
              Z("div", null, [
                Z("label", {
                  for: "banding-y2-" + g
                }, bt(i.t("l2")), 9, a2),
                Oe(Z("select", {
                  id: "banding-y2-" + g,
                  "onUpdate:modelValue": (b) => w.bandingType.y2 = b
                }, [
                  c2,
                  (tt(!0), st(Ft, null, $n(r.options.bandingTypes, (b, x, S) => (tt(), st("option", {
                    key: x,
                    value: x
                  }, bt(S + 1), 9, u2))), 128))
                ], 8, l2), [
                  [
                    ai,
                    w.bandingType.y2,
                    void 0,
                    { lazy: !0 }
                  ]
                ])
              ]),
              Z("div", null, [
                Z("label", {
                  for: "banding-x1-" + g
                }, bt(i.t("w1")), 9, f2),
                Oe(Z("select", {
                  id: "banding-x1-" + g,
                  "onUpdate:modelValue": (b) => w.bandingType.x1 = b
                }, [
                  d2,
                  (tt(!0), st(Ft, null, $n(r.options.bandingTypes, (b, x, S) => (tt(), st("option", {
                    key: x,
                    value: x
                  }, bt(S + 1), 9, p2))), 128))
                ], 8, h2), [
                  [
                    ai,
                    w.bandingType.x1,
                    void 0,
                    { lazy: !0 }
                  ]
                ])
              ]),
              Z("div", null, [
                Z("label", {
                  for: "banding-x2-" + g
                }, bt(i.t("w2")), 9, m2),
                Oe(Z("select", {
                  id: "banding-x2-" + g,
                  "onUpdate:modelValue": (b) => w.bandingType.x2 = b
                }, [
                  y2,
                  (tt(!0), st(Ft, null, $n(r.options.bandingTypes, (b, x, S) => (tt(), st("option", {
                    key: x,
                    value: x
                  }, bt(S + 1), 9, b2))), 128))
                ], 8, g2), [
                  [
                    ai,
                    w.bandingType.x2,
                    void 0,
                    { lazy: !0 }
                  ]
                ])
              ]),
              Z("button", {
                class: "delete",
                "aria-label": i.t("delete banding"),
                onClick: (b) => s.deleteBanding(w)
              }, [
                mt(a, { icon: ["fass", "trash"] })
              ], 8, v2)
            ])
          ], 4)) : vt("", !0)
        ], 4))), 128))
      ]),
      Z("div", _2, [
        Z("button", {
          type: "button",
          "aria-label": i.t("add part"),
          style: zt({ background: r.colors.button, color: r.colors.buttonText }),
          class: "add c-btn icon-left",
          onClick: e[1] || (e[1] = (w) => s.addShape(1))
        }, [
          mt(a, { icon: ["fasr", "plus-large"] }),
          oi(" Add ")
        ], 12, w2),
        Z("button", {
          class: "c-btn calculate icon-left",
          type: "button",
          "aria-label": i.t("calculate"),
          style: zt({
            background: r.colors.button,
            color: r.colors.buttonText
          }),
          disabled: !((f = r.inputStock) != null && f.length) || r.thinking,
          onClick: e[2] || (e[2] = (w) => s.calculate())
        }, [
          mt(a, { icon: ["fass", "calculator"] }),
          oi("Calculate price ")
        ], 12, x2),
        Z("button", {
          type: "button",
          class: "c-btn clear",
          "aria-label": i.t("clear"),
          onClick: e[3] || (e[3] = (w) => s.clear())
        }, [
          mt(a, { icon: ["fass", "trash"] })
        ], 8, k2),
        Z("div", S2, bt(s.totalInputShapes) + bt((h = r.options) != null && h.maxParts ? "/" + r.options.maxParts : ""), 1)
      ]),
      Z("div", {
        id: "credit",
        style: zt(r.creditStyles)
      }, [
        Z("a", {
          title: "SmartCut | Cut list optimization software",
          style: zt(r.creditLinkStyles),
          target: "_blank",
          href: "https://smartcut.dev/"
        }, bt(i.t("Powered by SmartCut")), 5)
      ], 4),
      r.messageVisible ? (tt(), st("div", {
        key: 1,
        id: "messages",
        innerHTML: r.messageContent
      }, null, 8, E2)) : vt("", !0),
      (r.options.showDiagram ? r.thinking && !r.progress.complete : r.thinking || r.progress.complete) ? (tt(), st("div", T2, [
        mt(c, {
          size: 50,
          number: r.progress.shapeCount,
          complete: r.progress.complete,
          "show-number": r.options.showProgressNumber
        }, null, 8, ["number", "complete", "show-number"])
      ])) : vt("", !0),
      Oe(Z("div", A2, [
        ((p = s.activeStock) == null ? void 0 : p.type) !== "roll" ? (tt(), st("div", C2, bt((y = s.activeStock) != null && y.stack ? (k = s.activeStock) == null ? void 0 : k.stack : 1), 1)) : vt("", !0)
      ], 512), [
        [Ch, r.options.showDiagram && r.jobId > 0 && r.progress.complete]
      ]),
      r.options.showDiagram && r.visInit && s.usedStock.length > 1 && r.jobId > 0 && r.progress.complete ? (tt(), ar(u, {
        key: 3,
        ref: "stockNavigation",
        "active-stock-id": r.activeStockId,
        "stock-list": s.stackedStock,
        "stock-count": r.stockList.length,
        "viewport-width": r.viewportWidth,
        onShowStock: s.showStock
      }, null, 8, ["active-stock-id", "stock-list", "stock-count", "viewport-width", "onShowStock"])) : vt("", !0)
    ], 2)) : vt("", !0)
  ], 64);
}
typeof nf == "function" && nf(op);
const P2 = /* @__PURE__ */ $i(op, [["render", O2], ["__scopeId", "data-v-60a6cb0f"]]), N2 = {
  name: "Wordpress",
  //needs to be Wordpress not WordPress
  components: {
    CheckoutCalculator: P2
  },
  data() {
    return {
      debug: !0,
      el: {},
      settings: {},
      options: {},
      inputs: {},
      formatting: {},
      product: {},
      stock: [],
      bandingData: {},
      variations: []
    };
  },
  created() {
    console.log(
      "💥 Powered by https://smartcut.dev",
      smartcutConfig.version
    );
  },
  mounted() {
    console.log("Launching WordPress checkout..."), this.bandingData = (smartcutConfig == null ? void 0 : smartcutConfig.banding_data) ?? null, this.machiningPricing = (smartcutConfig == null ? void 0 : smartcutConfig.machining_pricing) ?? null, this.variations = (smartcutConfig == null ? void 0 : smartcutConfig.variations) ?? null, this.cacheElements(), this.cacheInputFields(), this.configureProduct(smartcutConfig), this.configurePricing(smartcutConfig), this.initCheckout(), this.configureStock(), jQuery(".variations_form").on("reset_data", () => {
      this.disableCutToSize();
    }), jQuery(".variations_form").on("found_variation", (e, n) => {
      var r, s, o;
      this.reset(), this.stock = [];
      const i = (r = n == null ? void 0 : n.attributes) == null ? void 0 : r.attribute_thickness;
      if (this.product.selected_thickness = i, this.product.multiple_sizes) {
        const a = this.getSizes(n);
        if (!a)
          return this.disableCutToSize(), this.el.cart_button.disabled = !0, this.el.quantity.readOnly = !0, this.error(
            "The size of this multiple size product could not be found"
          );
        Array.isArray(a) ? this.enableCutToSize() : this.isFullSheetSize(a) ? (this.disableCutToSize(), this.enableFullSheet(), this.el.quantity.style.display = "inline-block") : (this.enableCutToSize(), this.el.quantity.style.display = "none"), this.log(["variation found", a, i]);
        let l;
        if ((s = this.variations) != null && s.length && this.product.selected_thickness) {
          if (Array.isArray(a)) {
            const c = this.variations.find(
              (u) => u.attributes.thickness === this.product.selected_thickness
            );
            if (!c)
              return this.error(
                `variation not found for thickness ${this.product.selected_thickness}`
              );
            l = a.map((u) => ({
              size: u,
              l: u.split("x")[0],
              w: u.split("x")[1],
              t: this.product.selected_thickness,
              price: c == null ? void 0 : c.price
            }));
          } else
            l = this.variations.filter((c) => {
              var u, f;
              return /\d+x\d+/.test((u = c == null ? void 0 : c.attributes) == null ? void 0 : u.size) ? this.product.selected_thickness === ((f = c == null ? void 0 : c.attributes) == null ? void 0 : f.thickness) : !1;
            }).map((c) => {
              var u, f, h;
              return {
                size: (u = c == null ? void 0 : c.attributes) == null ? void 0 : u.size,
                l: (f = c == null ? void 0 : c.attributes) == null ? void 0 : f.size.split("x")[0],
                w: (h = c == null ? void 0 : c.attributes) == null ? void 0 : h.size.split("x")[1],
                t: this.product.selected_thickness,
                price: c == null ? void 0 : c.price
                //the base price entered by the admin
              };
            });
          l.forEach((c) => {
            const u = this.createStock(
              c.l,
              c.w,
              c.t,
              c.price
            );
            this.stock.push(u);
          });
        }
      } else {
        this.el.quantity.style.display = "inline-block";
        const a = this.variations.find(
          (c) => c.attributes.thickness === this.product.selected_thickness
        );
        if (!a)
          return this.error(
            `variation not found for thickness ${this.product.selected_thickness}`
          );
        const l = (o = n == null ? void 0 : n.attributes) == null ? void 0 : o.attribute_thickness;
        this.stock.push(
          this.createStock(
            this.product.l,
            this.product.w,
            l,
            a.price
          )
        ), this.enableCutToSize();
      }
    }), [
      "div.quantity > input.plus",
      "div.quantity > input.minus",
      "div.quantity .qty-plus",
      "div.quantity .qty-minus"
    ].forEach((e) => {
      const n = document.querySelector(e);
      n && (n.style.display = "none");
    });
  },
  methods: {
    toggleDebug(t) {
      this.debug = t;
    },
    log(t) {
      this.debug && console.log("SmartCut -", ...t);
    },
    enableCutToSize() {
      [
        "checkout",
        "intro_text",
        "offcuts",
        "banding_key"
      ].forEach((e) => {
        const n = this.el[e];
        n && (n.style.display = "block");
      }), this.isPricingTableNeeded() && (this.el.pricing_table.style.display = "table"), this.el.cart_button.disabled = !0, this.el.quantity.readOnly = !0, this.el.quantity.style.display = "inline-block";
    },
    disableCutToSize() {
      var e;
      [
        "checkout",
        "intro_text",
        "offcuts",
        "banding_key",
        "pricing_table"
      ].forEach((n) => {
        const i = this.el[n];
        i && (i.style.display = "none");
      }), (e = this.el) != null && e.quantity && (this.el.quantity.style.display = "inline-block");
    },
    enableFullSheet() {
      this.el.cart_button.disabled = !1, this.el.quantity.readOnly = !1;
    },
    parseValue(t, e) {
      let n;
      switch (e) {
        case "string":
        case "hex":
          n = this.parseString(t);
          break;
        case "boolean":
          n = this.parseBoolean(t);
          break;
        case "int":
          n = this.parseInt(t);
          break;
        case "float":
          n = this.parseFloat(t);
          break;
        default:
          n = this.parseString(t);
          break;
      }
      return n;
    },
    parseInt(t) {
      return t ? parseInt(t) : 0;
    },
    parseFloat(t) {
      return t ? parseFloat(t) : 0;
    },
    parseBoolean(t) {
      return t ? t === "1" : !1;
    },
    parseString(t) {
      return t || "";
    },
    initCheckout() {
      var t, e, n, i, r, s, o, a, l, c, u, f, h, p, y, k, w;
      if (!smartcutConfig) {
        console.error("SmartCut config not found");
        return;
      }
      for (const g in smartcutConfig.settings_fields)
        this.settings[g] = this.parseValue(
          smartcutConfig.settings[g],
          smartcutConfig.settings_fields[g]
        );
      this.options = {
        debug: this.settings.debug,
        units: this.settings.units,
        locale: smartcutConfig.locale,
        //saw settings
        bladeWidth: this.settings.blade_width,
        stockType: this.settings.stock_type,
        cutPreference: this.settings.cut_preference,
        stackHeight: this.settings.stack_height,
        maxParts: this.settings.max_parts ?? null,
        //disable defauls options
        disableBanding: this.settings.disable_banding,
        disableOrientation: this.settings.disable_orientation,
        disablePartName: this.settings.disable_part_name,
        //diagram
        showDiagram: !this.settings.hide_diagram,
        showProgressNumber: this.settings.pricing_strategy !== "part_area",
        //banding
        bandingTypes: (smartcutConfig == null ? void 0 : smartcutConfig.banding_data) ?? null,
        enableMachining: this.settings.enable_machining,
        //machining - this needs to match the MachiningOptions type
        machining: {
          sides: {
            enabled: this.settings.machining_sides
          },
          holes: {
            enabled: this.settings.machining_holes,
            defaultDiameter: this.settings.machining_holes_default_diameter,
            diameters: this.settings.machining_holes_diameters.split(",").map((g) => g.trim()).filter((g) => g),
            minDiameter: this.settings.machining_holes_min_diameter,
            maxDiameter: this.settings.machining_holes_max_diameter,
            enableDepth: this.settings.machining_holes_depth,
            depths: this.settings.machining_holes_depths.split(",").map((g) => g.trim()).filter((g) => g),
            defaultDepth: this.settings.machining_holes_default_depth,
            minDepth: this.settings.machining_holes_min_depth,
            maxDepth: this.settings.machining_holes_max_depth
          },
          hingeHoles: {
            enabled: this.settings.machining_hinge_holes,
            minimumHoleDistance: this.settings.machining_hinge_holes_minimum_hole_distance,
            defaultDistanceFromEdge: this.settings.machining_hinge_holes_default_distance_from_edge,
            defaultOuterSpacing: this.settings.machining_hinge_holes_default_outer_spacing,
            defaultHingeLength: this.settings.machining_hinge_holes_default_hinge_length
          },
          corners: {
            enabled: this.settings.machining_radius_corners || this.settings.machining_bevel_corners,
            types: [
              this.settings.machining_radius_corners ? "radius" : null,
              this.settings.machining_bevel_corners ? "bevel" : null
            ].filter((g) => g),
            minValue: this.settings.machining_corners_min_value,
            maxValue: this.settings.machining_corners_max_value
          },
          banding: {
            enabled: !!(!this.settings.disable_banding && ((t = smartcutConfig == null ? void 0 : smartcutConfig.banding_data) != null && t.length)),
            enableCorners: this.settings.machining_corners_enable_banding,
            types: smartcutConfig == null ? void 0 : smartcutConfig.banding_data,
            enableTypes: (smartcutConfig == null ? void 0 : smartcutConfig.banding_data) ?? !1
          }
        },
        //colors
        colors: {
          partA: (e = this.settings) != null && e.part_a_color ? (n = this.settings) == null ? void 0 : n.part_a_color : "#1d9bc4",
          partB: (i = this.settings) != null && i.part_b_color ? (r = this.settings) == null ? void 0 : r.part_b_color : "#065d7a",
          partHover: (s = this.settings) != null && s.part_hover_color ? (o = this.settings) == null ? void 0 : o.part_hover_color : "#f8b029",
          partSelected: (a = this.settings) != null && a.part_selected_color ? (l = this.settings) == null ? void 0 : l.part_selected_color : "#5bc85b",
          stock: (c = this.settings) != null && c.stock_color ? (u = this.settings) == null ? void 0 : u.stock_color : "#ffd166",
          button: (f = this.settings) != null && f.button_color ? (h = this.settings) == null ? void 0 : h.button_color : "#118ab2",
          buttonText: (p = this.settings) != null && p.button_text_color ? (y = this.settings) == null ? void 0 : y.button_text_color : "#ffffff",
          text: (k = this.settings) != null && k.text_color ? (w = this.settings) == null ? void 0 : w.text_color : "#ffffff"
        }
      }, this.$refs.calculator.init({
        stock: this.stock,
        options: this.options,
        type: this.product.type,
        variations: this.variations ?? null
      });
    },
    formatPrice(t = 0) {
      return typeof t == "string" && (t = parseFloat(t)), t.toFixed(this.formatting.number_of_decimals).replace(".", this.formatting.decimal_separator);
    },
    configureProduct(t) {
      const e = (t == null ? void 0 : t.multiple_sizes) === "1";
      this.product = {
        type: t == null ? void 0 : t.product_type,
        multiple_sizes: e,
        size: t != null && t.size ? t.size.split(" | ") : [],
        l: !e && (t != null && t.l) ? this.parseFloat(t.l) : null,
        w: !e && (t != null && t.w) ? this.parseFloat(t.w) : null,
        t: (t == null ? void 0 : t.t) ?? null
        //do not parse to allow for multiple thicknesses separated by a comma
      }, this.product.stock_name = t.stock_name, this.product.multiple_sizes || (this.product.l || this.error("product 'length' attribute not available"), this.product.w || this.error("product 'width' attribute not available"));
    },
    configurePricing(t) {
      this.formatting = {
        thousands_separator: t == null ? void 0 : t.thousands_separator,
        decimal_separator: t == null ? void 0 : t.decimal_separator,
        number_of_decimals: t == null ? void 0 : t.number_of_decimals,
        currency_symbol: t == null ? void 0 : t.currency_symbol,
        currency_position: t == null ? void 0 : t.currency_position
      };
    },
    cacheElements() {
      if (this.el.checkout = document.getElementById("smartcut-app"), !this.el.checkout)
        return this.error("checkout iframe not found");
      if (this.el.intro_text = document.getElementById("smartcut-intro-text"), this.el.pricing_table = document.getElementById(
        "smartcut-pricing-table"
      ), this.el.offcuts = document.getElementById("include_offcuts_field"), this.el.banding_key = document.getElementById(
        "smartcut-banding-key"
      ), this.el.banding_total_price = document.querySelector(
        "#smartcut-banding-total bdi .smartcut-price-selector"
      ), this.el.cut_length_price = document.querySelector(
        "#smartcut-cut-length-total bdi .smartcut-price-selector"
      ), this.el.per_part_price = document.querySelector(
        "#smartcut-per-part-total bdi .smartcut-price-selector"
      ), this.el.surcharge_price = document.querySelector(
        "#smartcut-surcharge-total bdi .smartcut-price-selector"
      ), this.el.machining_total_price = document.querySelector(
        "#smartcut-machining-total bdi .smartcut-price-selector"
      ), this.el.quantity = document.querySelector(
        ".smartcut-stock-quantity"
      ), this.el.cart_button = document.querySelector(
        ".single_add_to_cart_button"
      ), !this.el.quantity)
        return this.error("quantity field not found");
      if (!this.el.cart_button)
        return this.error("cart button not found");
      this.el.quantity.readOnly = !0, this.el.cart_button.disabled = !0;
    },
    getStockTrim() {
      return {
        x1: this.settings.stock_trim_x1 ?? 0,
        x2: this.settings.stock_trim_x2 ?? 0,
        y1: this.settings.stock_type === "linear" ? 0 : this.settings.stock_trim_y1 ?? 0,
        y2: this.settings.stock_type === "linear" ? 0 : this.settings.stock_trim_y2 ?? 0
      };
    },
    createStock(t = null, e = null, n = null, i = null) {
      return {
        name: this.product.stock_name,
        type: this.settings.stock_type,
        l: t,
        w: e,
        t: n,
        cost: parseFloat(i),
        trim: this.getStockTrim()
      };
    },
    configureStock() {
      var t, e;
      (t = this.product) != null && t.stock_name || this.error("product name not specified"), this.product.type === "variable" ? this.disableCutToSize() : (this.enableCutToSize(), this.stock = [], this.product.multiple_sizes ? this.product.size.forEach((n) => {
        var o;
        const [i, r] = n.split("x"), s = this.createStock(
          i,
          r,
          (o = this.product) == null ? void 0 : o.t,
          n.price
        );
        this.stock.push(s);
      }) : this.stock.push(
        this.createStock(
          this.product.l,
          this.product.w,
          (e = this.product) == null ? void 0 : e.t
        )
      ));
    },
    getTotalBandingPrice(t) {
      var n;
      let e = 0;
      if (typeof t == "object") {
        for (let [i, r] of Object.entries(t)) {
          if (typeof r == "string" && (r = parseFloat(r)), !this.bandingData[i])
            return this.error(`Banding key ${i} not found in banding data`);
          const s = r / (this.settings.units === "fraction" ? 12 : 1e3) * parseFloat(this.bandingData[i].price);
          e += s;
        }
        if ("min_banding_charge" in this.settings) {
          const i = parseFloat(
            (n = this.settings) == null ? void 0 : n.min_banding_charge
          );
          if (i > 0 && e > 0 && e < i)
            return i;
        }
        return e;
      } else
        return 0;
    },
    getTotalMachiningPrice(t) {
      return (this.machiningPricing.holes ?? 0) * (t.metadata.numHoles ?? 0) + (this.machiningPricing.corners ?? 0) * (t.metadata.numCorners ?? 0);
    },
    reset() {
      this.el.quantity.value = 1, this.el.cart_button.disabled = !0, this.inputs["smartcut-cut-to-size-surcharge"].value = 0, this.el.banding_total_price && (this.el.banding_total_price.innerText = this.formatPrice(0)), this.el.machining_total_price && (this.el.machining_total_price.innerText = this.formatPrice(0)), this.el.cut_length_price && (this.el.cut_length_price.innerText = this.formatPrice(0)), this.el.per_part_price && (this.el.per_part_price.innerText = this.formatPrice(0));
      for (const t in this.inputs)
        this.inputs[t].value = null;
    },
    error(t) {
      console.error(`SmartCut - ${t}`);
    },
    isQuantityPricing() {
      if ((smartcutConfig == null ? void 0 : smartcutConfig.product_type) === "variable")
        return !1;
      switch (this.settings.pricing_strategy) {
        case "full_sheet":
        case "full_sheet_plus_cut_length":
        case "full_sheet_plus_num_parts":
          return !0;
      }
      return !1;
    },
    isBandingEnabled() {
      return !(this.settings.disable_banding === "1" || !this.bandingData || !Object.values(this.bandingData).length);
    },
    isMachiningEnabled() {
      return this.settings.enable_machining === "1";
    },
    isSurchargeEnabled() {
      var t, e;
      return !(((t = this.settings) == null ? void 0 : t.surcharge_type) === "none" || !((e = this == null ? void 0 : this.settings) != null && e.surcharge) || this.settings.surcharge === "0.00");
    },
    //[] update for machining
    isPricingTableNeeded() {
      return !!(this.settings.pricing_strategy === "full_sheet_plus_cut_length" || this.settings.pricing_strategy === "full_sheet_plus_num_parts" || this.isSurchargeEnabled() || this.isBandingEnabled() || this.isMachiningEnabled());
    },
    /**
     * @param {WC_Product_Variation} variation
     * @returns {string[] | string}
     */
    getSizes(t) {
      var n, i;
      let e = null;
      return t && (e = (n = t == null ? void 0 : t.attributes) == null ? void 0 : n.attribute_size), e || (e = (i = this.product) == null ? void 0 : i.size), e;
    },
    isFullSheetSize(t) {
      return /\d+x\d+/.test(t);
    },
    cacheInputFields() {
      smartcutConfig.input_fields.forEach((t) => {
        const e = t.replaceAll("_", "-");
        this.inputs[e] = document.getElementById(e);
      });
    },
    result(t) {
      var s, o, a, l;
      this.reset();
      const e = this.isQuantityPricing();
      let n = e ? t.metadata.totalStockCost / t.metadata.totalUsedStock : 0;
      if (this.log(["result event received", t]), !(t != null && t.jobId))
        return;
      switch (this.product.multiple_sizes && this.log(["result event received for multiple sizes"]), this.settings.pricing_strategy) {
        case "full_sheet":
          this.log(["calculating cost by full sheet"]), e ? this.el.quantity.value = t.metadata.totalUsedStock : this.el.quantity.value = 1, this.el.cart_button.disabled = !1;
          break;
        case "part_area":
          {
            this.log([
              "calculating cost by part area in meters / sq feet"
            ]);
            const c = this.settings.units === "fraction" ? t.metadata.totalPartArea / 144 : t.metadata.totalPartArea / 1e6;
            this.log([
              `part area in square ${this.settings.units === "fraction" ? "feet" : "meters"}`,
              c
            ]), this.el.quantity.value = c.toFixed(2), this.el.cart_button.disabled = !1;
          }
          break;
        case "cut_length":
          {
            this.log([
              "calculating cost by cut length in feet / meters"
            ]);
            const c = t.metadata.totalCutLength / (this.settings.units === "fraction" ? 12 : 1e3);
            this.el.quantity.value = c.toFixed(2), this.el.cart_button.disabled = !1;
          }
          break;
        case "full_sheet_plus_cut_length":
          {
            this.log([
              "calculating cost by full sheet plus cut length"
            ]), e ? (this.el.quantity.style.display = "inline-block", this.el.quantity.value = t.metadata.totalUsedStock) : (this.el.quantity.value = 1, this.el.quantity.style.display = "none");
            const u = t.metadata.totalCutLength / (this.settings.units === "fraction" ? 12 : 1e3) * this.settings.cut_length_price;
            this.el.cut_length_price && (this.el.cut_length_price.innerText = this.formatPrice(u)), this.inputs["smartcut-cut-length-price"].value = u, n += u, this.el.cart_button.disabled = !1;
          }
          break;
        case "full_sheet_plus_num_parts":
          {
            this.log([
              "calculating cost by full sheet plus number of parts"
            ]), e ? (this.el.quantity.style.display = "inline-block", this.el.quantity.value = t.metadata.totalUsedStock) : (this.el.quantity.value = 1, this.el.quantity.style.display = "none");
            const c = t.metadata.totalPartsProduced * this.settings.per_part_price;
            this.el.per_part_price && (this.el.per_part_price.innerText = this.formatPrice(c)), this.inputs["smartcut-per-part-price"].value = c, n += c, this.el.cart_button.disabled = !1;
          }
          break;
      }
      if (!e) {
        if (!t.metadata.totalStockCost)
          return this.error(
            "Total stock cost not returned for a multiple size product"
          );
        const c = parseFloat(t.metadata.totalStockCost);
        this.log(["total price", c]), document.getElementById(
          "smartcut-custom-price"
        ).value = c.toString(), n += c;
      }
      if (this.isBandingEnabled()) {
        const c = this.getTotalBandingPrice(
          t.metadata.bandingLengthByType
        );
        this.inputs["smartcut-banding-price"].value = c, this.el.banding_total_price && (this.el.banding_total_price.innerText = this.formatPrice(c)), n += c;
      }
      if (this.isMachiningEnabled()) {
        const c = this.getTotalMachiningPrice(t);
        this.inputs["smartcut-machining-price"].value = c, this.el.machining_total_price && (this.el.machining_total_price.innerText = this.formatPrice(c)), n += c;
      }
      if (this.isSurchargeEnabled() && (s = this.settings) != null && s.surcharge) {
        let c = 0;
        ((o = this.settings) == null ? void 0 : o.surcharge_type) === "per_sheet" ? c = parseFloat((a = this.settings) == null ? void 0 : a.surcharge) * parseFloat(t.metadata.totalUsedStock) : c = parseFloat((l = this.settings) == null ? void 0 : l.surcharge), this.inputs["smartcut-cut-to-size-surcharge"].value = c, this.el.surcharge_price && (this.el.surcharge_price.innerText = this.formatPrice(c)), this.log(["added surcharge", c]), n += c;
      }
      const i = document.querySelector(
        ".woocommerce-variation-price .smartcut-price-selector"
      );
      i && (i.innerText = this.formatPrice(n)), this.inputs["smartcut-job-id"].value = t == null ? void 0 : t.jobId, this.inputs["smartcut-total-cut-length"].value = t.metadata.totalCutLength, this.inputs["smartcut-part-area"].value = t.metadata.totalPartArea, this.inputs["smartcut-total-cuts"].value = t.metadata.totalCuts, this.inputs["smartcut-total-parts"].value = t.metadata.totalPartsProduced, this.inputs["smartcut-machining"].value = t.metadata.hasMachining ? "Y" : "N";
      const r = t == null ? void 0 : t.parts.map((c) => `${c.l}x${c.w} [${c.q}]`).join(", ");
      this.inputs["smartcut-dimensions"].value = r;
    }
  }
};
function I2(t, e, n, i, r, s) {
  const o = si("CheckoutCalculator");
  return tt(), ar(o, {
    ref: "calculator",
    debug: r.debug,
    stock: r.stock,
    onLog: s.log,
    onError: s.error,
    onDebug: s.toggleDebug,
    onResult: s.result
  }, null, 8, ["debug", "stock", "onLog", "onError", "onDebug", "onResult"]);
}
const L2 = /* @__PURE__ */ $i(N2, [["render", I2]]), M2 = /* @__PURE__ */ hh(() => import("./Vanilla-xRLJScaS.js")), R2 = /* @__PURE__ */ Mi({
  name: "Launch",
  components: {
    Wordpress: L2,
    Vanilla: M2
  },
  //props are passed from main.ts
  props: {
    type: {
      type: String,
      default: ""
    }
  },
  computed: {
    currentComponent() {
      return this.type.charAt(0).toUpperCase() + this.type.slice(1);
    }
  },
  mounted() {
    this.type === "vanilla" && (window.smartcutCheckout = this);
  },
  //these will be exposed on window.smartcutCheckout
  methods: {
    test() {
      console.log("test");
    }
    //init can be called at any time an fire up the checkout
    /* init(data) {
      this.$refs.checkout.init(data);
    }, */
  }
});
function D2(t, e, n, i, r, s) {
  return tt(), ar(Dm(t.currentComponent), { ref: "checkout" }, null, 512);
}
const F2 = /* @__PURE__ */ $i(R2, [["render", D2]]);
function rf(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function G(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? rf(Object(n), !0).forEach(function(i) {
      Bt(t, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : rf(Object(n)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return t;
}
function zs(t) {
  "@babel/helpers - typeof";
  return zs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, zs(t);
}
function $2(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function sf(t, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
  }
}
function B2(t, e, n) {
  return e && sf(t.prototype, e), n && sf(t, n), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function Bt(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function Dl(t, e) {
  return q2(t) || H2(t, e) || ap(t, e) || z2();
}
function Er(t) {
  return U2(t) || W2(t) || ap(t) || V2();
}
function U2(t) {
  if (Array.isArray(t))
    return Aa(t);
}
function q2(t) {
  if (Array.isArray(t))
    return t;
}
function W2(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function H2(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var i = [], r = !0, s = !1, o, a;
    try {
      for (n = n.call(t); !(r = (o = n.next()).done) && (i.push(o.value), !(e && i.length === e)); r = !0)
        ;
    } catch (l) {
      s = !0, a = l;
    } finally {
      try {
        !r && n.return != null && n.return();
      } finally {
        if (s)
          throw a;
      }
    }
    return i;
  }
}
function ap(t, e) {
  if (t) {
    if (typeof t == "string")
      return Aa(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Aa(t, e);
  }
}
function Aa(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, i = new Array(e); n < e; n++)
    i[n] = t[n];
  return i;
}
function V2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function z2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var of = function() {
}, Fl = {}, lp = {}, cp = null, up = {
  mark: of,
  measure: of
};
try {
  typeof window < "u" && (Fl = window), typeof document < "u" && (lp = document), typeof MutationObserver < "u" && (cp = MutationObserver), typeof performance < "u" && (up = performance);
} catch {
}
var G2 = Fl.navigator || {}, af = G2.userAgent, lf = af === void 0 ? "" : af, An = Fl, Tt = lp, cf = cp, Kr = up;
An.document;
var fn = !!Tt.documentElement && !!Tt.head && typeof Tt.addEventListener == "function" && typeof Tt.createElement == "function", fp = ~lf.indexOf("MSIE") || ~lf.indexOf("Trident/"), Xr, Jr, Qr, Zr, ts, an = "___FONT_AWESOME___", Ca = 16, hp = "fa", dp = "svg-inline--fa", Qn = "data-fa-i2svg", Oa = "data-fa-pseudo-element", j2 = "data-fa-pseudo-element-pending", $l = "data-prefix", Bl = "data-icon", uf = "fontawesome-i2svg", Y2 = "async", K2 = ["HTML", "HEAD", "STYLE", "SCRIPT"], pp = function() {
  try {
    return !0;
  } catch {
    return !1;
  }
}(), Et = "classic", It = "sharp", Ul = [Et, It];
function Tr(t) {
  return new Proxy(t, {
    get: function(n, i) {
      return i in n ? n[i] : n[Et];
    }
  });
}
var dr = Tr((Xr = {}, Bt(Xr, Et, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  fakd: "kit",
  "fa-kit": "kit",
  "fa-kit-duotone": "kit"
}), Bt(Xr, It, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), Xr)), pr = Tr((Jr = {}, Bt(Jr, Et, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), Bt(Jr, It, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), Jr)), mr = Tr((Qr = {}, Bt(Qr, Et, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), Bt(Qr, It, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), Qr)), X2 = Tr((Zr = {}, Bt(Zr, Et, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), Bt(Zr, It, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), Zr)), J2 = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, mp = "fa-layers-text", Q2 = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, Z2 = Tr((ts = {}, Bt(ts, Et, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), Bt(ts, It, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), ts)), gp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], tE = gp.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), eE = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Hn = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, gr = /* @__PURE__ */ new Set();
Object.keys(pr[Et]).map(gr.add.bind(gr));
Object.keys(pr[It]).map(gr.add.bind(gr));
var nE = [].concat(Ul, Er(gr), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Hn.GROUP, Hn.SWAP_OPACITY, Hn.PRIMARY, Hn.SECONDARY]).concat(gp.map(function(t) {
  return "".concat(t, "x");
})).concat(tE.map(function(t) {
  return "w-".concat(t);
})), tr = An.FontAwesomeConfig || {};
function iE(t) {
  var e = Tt.querySelector("script[" + t + "]");
  if (e)
    return e.getAttribute(t);
}
function rE(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
if (Tt && typeof Tt.querySelector == "function") {
  var sE = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  sE.forEach(function(t) {
    var e = Dl(t, 2), n = e[0], i = e[1], r = rE(iE(n));
    r != null && (tr[i] = r);
  });
}
var yp = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: hp,
  replacementClass: dp,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
tr.familyPrefix && (tr.cssPrefix = tr.familyPrefix);
var Ni = G(G({}, yp), tr);
Ni.autoReplaceSvg || (Ni.observeMutations = !1);
var K = {};
Object.keys(yp).forEach(function(t) {
  Object.defineProperty(K, t, {
    enumerable: !0,
    set: function(n) {
      Ni[t] = n, er.forEach(function(i) {
        return i(K);
      });
    },
    get: function() {
      return Ni[t];
    }
  });
});
Object.defineProperty(K, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Ni.cssPrefix = e, er.forEach(function(n) {
      return n(K);
    });
  },
  get: function() {
    return Ni.cssPrefix;
  }
});
An.FontAwesomeConfig = K;
var er = [];
function oE(t) {
  return er.push(t), function() {
    er.splice(er.indexOf(t), 1);
  };
}
var mn = Ca, Ge = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function aE(t) {
  if (!(!t || !fn)) {
    var e = Tt.createElement("style");
    e.setAttribute("type", "text/css"), e.innerHTML = t;
    for (var n = Tt.head.childNodes, i = null, r = n.length - 1; r > -1; r--) {
      var s = n[r], o = (s.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (i = s);
    }
    return Tt.head.insertBefore(e, i), t;
  }
}
var lE = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function yr() {
  for (var t = 12, e = ""; t-- > 0; )
    e += lE[Math.random() * 62 | 0];
  return e;
}
function Bi(t) {
  for (var e = [], n = (t || []).length >>> 0; n--; )
    e[n] = t[n];
  return e;
}
function ql(t) {
  return t.classList ? Bi(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function(e) {
    return e;
  });
}
function bp(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function cE(t) {
  return Object.keys(t || {}).reduce(function(e, n) {
    return e + "".concat(n, '="').concat(bp(t[n]), '" ');
  }, "").trim();
}
function bo(t) {
  return Object.keys(t || {}).reduce(function(e, n) {
    return e + "".concat(n, ": ").concat(t[n].trim(), ";");
  }, "");
}
function Wl(t) {
  return t.size !== Ge.size || t.x !== Ge.x || t.y !== Ge.y || t.rotate !== Ge.rotate || t.flipX || t.flipY;
}
function uE(t) {
  var e = t.transform, n = t.containerWidth, i = t.iconWidth, r = {
    transform: "translate(".concat(n / 2, " 256)")
  }, s = "translate(".concat(e.x * 32, ", ").concat(e.y * 32, ") "), o = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "), a = "rotate(".concat(e.rotate, " 0 0)"), l = {
    transform: "".concat(s, " ").concat(o, " ").concat(a)
  }, c = {
    transform: "translate(".concat(i / 2 * -1, " -256)")
  };
  return {
    outer: r,
    inner: l,
    path: c
  };
}
function fE(t) {
  var e = t.transform, n = t.width, i = n === void 0 ? Ca : n, r = t.height, s = r === void 0 ? Ca : r, o = t.startCentered, a = o === void 0 ? !1 : o, l = "";
  return a && fp ? l += "translate(".concat(e.x / mn - i / 2, "em, ").concat(e.y / mn - s / 2, "em) ") : a ? l += "translate(calc(-50% + ".concat(e.x / mn, "em), calc(-50% + ").concat(e.y / mn, "em)) ") : l += "translate(".concat(e.x / mn, "em, ").concat(e.y / mn, "em) "), l += "scale(".concat(e.size / mn * (e.flipX ? -1 : 1), ", ").concat(e.size / mn * (e.flipY ? -1 : 1), ") "), l += "rotate(".concat(e.rotate, "deg) "), l;
}
var hE = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function vp() {
  var t = hp, e = dp, n = K.cssPrefix, i = K.replacementClass, r = hE;
  if (n !== t || i !== e) {
    var s = new RegExp("\\.".concat(t, "\\-"), "g"), o = new RegExp("\\--".concat(t, "\\-"), "g"), a = new RegExp("\\.".concat(e), "g");
    r = r.replace(s, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(a, ".".concat(i));
  }
  return r;
}
var ff = !1;
function Bo() {
  K.autoAddCss && !ff && (aE(vp()), ff = !0);
}
var dE = {
  mixout: function() {
    return {
      dom: {
        css: vp,
        insertCss: Bo
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Bo();
      },
      beforeI2svg: function() {
        Bo();
      }
    };
  }
}, ln = An || {};
ln[an] || (ln[an] = {});
ln[an].styles || (ln[an].styles = {});
ln[an].hooks || (ln[an].hooks = {});
ln[an].shims || (ln[an].shims = []);
var Le = ln[an], _p = [], pE = function t() {
  Tt.removeEventListener("DOMContentLoaded", t), Gs = 1, _p.map(function(e) {
    return e();
  });
}, Gs = !1;
fn && (Gs = (Tt.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Tt.readyState), Gs || Tt.addEventListener("DOMContentLoaded", pE));
function mE(t) {
  fn && (Gs ? setTimeout(t, 0) : _p.push(t));
}
function Ar(t) {
  var e = t.tag, n = t.attributes, i = n === void 0 ? {} : n, r = t.children, s = r === void 0 ? [] : r;
  return typeof t == "string" ? bp(t) : "<".concat(e, " ").concat(cE(i), ">").concat(s.map(Ar).join(""), "</").concat(e, ">");
}
function hf(t, e, n) {
  if (t && t[e] && t[e][n])
    return {
      prefix: e,
      iconName: n,
      icon: t[e][n]
    };
}
var gE = function(e, n) {
  return function(i, r, s, o) {
    return e.call(n, i, r, s, o);
  };
}, Uo = function(e, n, i, r) {
  var s = Object.keys(e), o = s.length, a = r !== void 0 ? gE(n, r) : n, l, c, u;
  for (i === void 0 ? (l = 1, u = e[s[0]]) : (l = 0, u = i); l < o; l++)
    c = s[l], u = a(u, e[c], c, e);
  return u;
};
function yE(t) {
  for (var e = [], n = 0, i = t.length; n < i; ) {
    var r = t.charCodeAt(n++);
    if (r >= 55296 && r <= 56319 && n < i) {
      var s = t.charCodeAt(n++);
      (s & 64512) == 56320 ? e.push(((r & 1023) << 10) + (s & 1023) + 65536) : (e.push(r), n--);
    } else
      e.push(r);
  }
  return e;
}
function Pa(t) {
  var e = yE(t);
  return e.length === 1 ? e[0].toString(16) : null;
}
function bE(t, e) {
  var n = t.length, i = t.charCodeAt(e), r;
  return i >= 55296 && i <= 56319 && n > e + 1 && (r = t.charCodeAt(e + 1), r >= 56320 && r <= 57343) ? (i - 55296) * 1024 + r - 56320 + 65536 : i;
}
function df(t) {
  return Object.keys(t).reduce(function(e, n) {
    var i = t[n], r = !!i.icon;
    return r ? e[i.iconName] = i.icon : e[n] = i, e;
  }, {});
}
function Na(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = n.skipHooks, r = i === void 0 ? !1 : i, s = df(e);
  typeof Le.hooks.addPack == "function" && !r ? Le.hooks.addPack(t, df(e)) : Le.styles[t] = G(G({}, Le.styles[t] || {}), s), t === "fas" && Na("fa", e);
}
var es, ns, is, hi = Le.styles, vE = Le.shims, _E = (es = {}, Bt(es, Et, Object.values(mr[Et])), Bt(es, It, Object.values(mr[It])), es), Hl = null, wp = {}, xp = {}, kp = {}, Sp = {}, Ep = {}, wE = (ns = {}, Bt(ns, Et, Object.keys(dr[Et])), Bt(ns, It, Object.keys(dr[It])), ns);
function xE(t) {
  return ~nE.indexOf(t);
}
function kE(t, e) {
  var n = e.split("-"), i = n[0], r = n.slice(1).join("-");
  return i === t && r !== "" && !xE(r) ? r : null;
}
var Tp = function() {
  var e = function(s) {
    return Uo(hi, function(o, a, l) {
      return o[l] = Uo(a, s, {}), o;
    }, {});
  };
  wp = e(function(r, s, o) {
    if (s[3] && (r[s[3]] = o), s[2]) {
      var a = s[2].filter(function(l) {
        return typeof l == "number";
      });
      a.forEach(function(l) {
        r[l.toString(16)] = o;
      });
    }
    return r;
  }), xp = e(function(r, s, o) {
    if (r[o] = o, s[2]) {
      var a = s[2].filter(function(l) {
        return typeof l == "string";
      });
      a.forEach(function(l) {
        r[l] = o;
      });
    }
    return r;
  }), Ep = e(function(r, s, o) {
    var a = s[2];
    return r[o] = o, a.forEach(function(l) {
      r[l] = o;
    }), r;
  });
  var n = "far" in hi || K.autoFetchSvg, i = Uo(vE, function(r, s) {
    var o = s[0], a = s[1], l = s[2];
    return a === "far" && !n && (a = "fas"), typeof o == "string" && (r.names[o] = {
      prefix: a,
      iconName: l
    }), typeof o == "number" && (r.unicodes[o.toString(16)] = {
      prefix: a,
      iconName: l
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  kp = i.names, Sp = i.unicodes, Hl = vo(K.styleDefault, {
    family: K.familyDefault
  });
};
oE(function(t) {
  Hl = vo(t.styleDefault, {
    family: K.familyDefault
  });
});
Tp();
function Vl(t, e) {
  return (wp[t] || {})[e];
}
function SE(t, e) {
  return (xp[t] || {})[e];
}
function Vn(t, e) {
  return (Ep[t] || {})[e];
}
function Ap(t) {
  return kp[t] || {
    prefix: null,
    iconName: null
  };
}
function EE(t) {
  var e = Sp[t], n = Vl("fas", t);
  return e || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Cn() {
  return Hl;
}
var zl = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function vo(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = e.family, i = n === void 0 ? Et : n, r = dr[i][t], s = pr[i][t] || pr[i][r], o = t in Le.styles ? t : null;
  return s || o || null;
}
var pf = (is = {}, Bt(is, Et, Object.keys(mr[Et])), Bt(is, It, Object.keys(mr[It])), is);
function _o(t) {
  var e, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.skipLookups, r = i === void 0 ? !1 : i, s = (e = {}, Bt(e, Et, "".concat(K.cssPrefix, "-").concat(Et)), Bt(e, It, "".concat(K.cssPrefix, "-").concat(It)), e), o = null, a = Et;
  (t.includes(s[Et]) || t.some(function(c) {
    return pf[Et].includes(c);
  })) && (a = Et), (t.includes(s[It]) || t.some(function(c) {
    return pf[It].includes(c);
  })) && (a = It);
  var l = t.reduce(function(c, u) {
    var f = kE(K.cssPrefix, u);
    if (hi[u] ? (u = _E[a].includes(u) ? X2[a][u] : u, o = u, c.prefix = u) : wE[a].indexOf(u) > -1 ? (o = u, c.prefix = vo(u, {
      family: a
    })) : f ? c.iconName = f : u !== K.replacementClass && u !== s[Et] && u !== s[It] && c.rest.push(u), !r && c.prefix && c.iconName) {
      var h = o === "fa" ? Ap(c.iconName) : {}, p = Vn(c.prefix, c.iconName);
      h.prefix && (o = null), c.iconName = h.iconName || p || c.iconName, c.prefix = h.prefix || c.prefix, c.prefix === "far" && !hi.far && hi.fas && !K.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, zl());
  return (t.includes("fa-brands") || t.includes("fab")) && (l.prefix = "fab"), (t.includes("fa-duotone") || t.includes("fad")) && (l.prefix = "fad"), !l.prefix && a === It && (hi.fass || K.autoFetchSvg) && (l.prefix = "fass", l.iconName = Vn(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || o === "fa") && (l.prefix = Cn() || "fas"), l;
}
var TE = /* @__PURE__ */ function() {
  function t() {
    $2(this, t), this.definitions = {};
  }
  return B2(t, [{
    key: "add",
    value: function() {
      for (var n = this, i = arguments.length, r = new Array(i), s = 0; s < i; s++)
        r[s] = arguments[s];
      var o = r.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(a) {
        n.definitions[a] = G(G({}, n.definitions[a] || {}), o[a]), Na(a, o[a]);
        var l = mr[Et][a];
        l && Na(l, o[a]), Tp();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(n, i) {
      var r = i.prefix && i.iconName && i.icon ? {
        0: i
      } : i;
      return Object.keys(r).map(function(s) {
        var o = r[s], a = o.prefix, l = o.iconName, c = o.icon, u = c[2];
        n[a] || (n[a] = {}), u.length > 0 && u.forEach(function(f) {
          typeof f == "string" && (n[a][f] = c);
        }), n[a][l] = c;
      }), n;
    }
  }]), t;
}(), mf = [], di = {}, _i = {}, AE = Object.keys(_i);
function CE(t, e) {
  var n = e.mixoutsTo;
  return mf = t, di = {}, Object.keys(_i).forEach(function(i) {
    AE.indexOf(i) === -1 && delete _i[i];
  }), mf.forEach(function(i) {
    var r = i.mixout ? i.mixout() : {};
    if (Object.keys(r).forEach(function(o) {
      typeof r[o] == "function" && (n[o] = r[o]), zs(r[o]) === "object" && Object.keys(r[o]).forEach(function(a) {
        n[o] || (n[o] = {}), n[o][a] = r[o][a];
      });
    }), i.hooks) {
      var s = i.hooks();
      Object.keys(s).forEach(function(o) {
        di[o] || (di[o] = []), di[o].push(s[o]);
      });
    }
    i.provides && i.provides(_i);
  }), n;
}
function Ia(t, e) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
    i[r - 2] = arguments[r];
  var s = di[t] || [];
  return s.forEach(function(o) {
    e = o.apply(null, [e].concat(i));
  }), e;
}
function Zn(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    n[i - 1] = arguments[i];
  var r = di[t] || [];
  r.forEach(function(s) {
    s.apply(null, n);
  });
}
function cn() {
  var t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return _i[t] ? _i[t].apply(null, e) : void 0;
}
function La(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  var e = t.iconName, n = t.prefix || Cn();
  if (e)
    return e = Vn(n, e) || e, hf(Cp.definitions, n, e) || hf(Le.styles, n, e);
}
var Cp = new TE(), OE = function() {
  K.autoReplaceSvg = !1, K.observeMutations = !1, Zn("noAuto");
}, PE = {
  i2svg: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return fn ? (Zn("beforeI2svg", e), cn("pseudoElements2svg", e), cn("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.autoReplaceSvgRoot;
    K.autoReplaceSvg === !1 && (K.autoReplaceSvg = !0), K.observeMutations = !0, mE(function() {
      IE({
        autoReplaceSvgRoot: n
      }), Zn("watch", e);
    });
  }
}, NE = {
  icon: function(e) {
    if (e === null)
      return null;
    if (zs(e) === "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Vn(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      var n = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], i = vo(e[0]);
      return {
        prefix: i,
        iconName: Vn(i, n) || n
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(K.cssPrefix, "-")) > -1 || e.match(J2))) {
      var r = _o(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: r.prefix || Cn(),
        iconName: Vn(r.prefix, r.iconName) || r.iconName
      };
    }
    if (typeof e == "string") {
      var s = Cn();
      return {
        prefix: s,
        iconName: Vn(s, e) || e
      };
    }
  }
}, ye = {
  noAuto: OE,
  config: K,
  dom: PE,
  parse: NE,
  library: Cp,
  findIconDefinition: La,
  toHtml: Ar
}, IE = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.autoReplaceSvgRoot, i = n === void 0 ? Tt : n;
  (Object.keys(Le.styles).length > 0 || K.autoFetchSvg) && fn && K.autoReplaceSvg && ye.dom.i2svg({
    node: i
  });
};
function wo(t, e) {
  return Object.defineProperty(t, "abstract", {
    get: e
  }), Object.defineProperty(t, "html", {
    get: function() {
      return t.abstract.map(function(i) {
        return Ar(i);
      });
    }
  }), Object.defineProperty(t, "node", {
    get: function() {
      if (fn) {
        var i = Tt.createElement("div");
        return i.innerHTML = t.html, i.children;
      }
    }
  }), t;
}
function LE(t) {
  var e = t.children, n = t.main, i = t.mask, r = t.attributes, s = t.styles, o = t.transform;
  if (Wl(o) && n.found && !i.found) {
    var a = n.width, l = n.height, c = {
      x: a / l / 2,
      y: 0.5
    };
    r.style = bo(G(G({}, s), {}, {
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: r,
    children: e
  }];
}
function ME(t) {
  var e = t.prefix, n = t.iconName, i = t.children, r = t.attributes, s = t.symbol, o = s === !0 ? "".concat(e, "-").concat(K.cssPrefix, "-").concat(n) : s;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: G(G({}, r), {}, {
        id: o
      }),
      children: i
    }]
  }];
}
function Gl(t) {
  var e = t.icons, n = e.main, i = e.mask, r = t.prefix, s = t.iconName, o = t.transform, a = t.symbol, l = t.title, c = t.maskId, u = t.titleId, f = t.extra, h = t.watchable, p = h === void 0 ? !1 : h, y = i.found ? i : n, k = y.width, w = y.height, g = r === "fak", b = [K.replacementClass, s ? "".concat(K.cssPrefix, "-").concat(s) : ""].filter(function(F) {
    return f.classes.indexOf(F) === -1;
  }).filter(function(F) {
    return F !== "" || !!F;
  }).concat(f.classes).join(" "), x = {
    children: [],
    attributes: G(G({}, f.attributes), {}, {
      "data-prefix": r,
      "data-icon": s,
      class: b,
      role: f.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(k, " ").concat(w)
    })
  }, S = g && !~f.classes.indexOf("fa-fw") ? {
    width: "".concat(k / w * 16 * 0.0625, "em")
  } : {};
  p && (x.attributes[Qn] = ""), l && (x.children.push({
    tag: "title",
    attributes: {
      id: x.attributes["aria-labelledby"] || "title-".concat(u || yr())
    },
    children: [l]
  }), delete x.attributes.title);
  var O = G(G({}, x), {}, {
    prefix: r,
    iconName: s,
    main: n,
    mask: i,
    maskId: c,
    transform: o,
    symbol: a,
    styles: G(G({}, S), f.styles)
  }), P = i.found && n.found ? cn("generateAbstractMask", O) || {
    children: [],
    attributes: {}
  } : cn("generateAbstractIcon", O) || {
    children: [],
    attributes: {}
  }, D = P.children, z = P.attributes;
  return O.children = D, O.attributes = z, a ? ME(O) : LE(O);
}
function gf(t) {
  var e = t.content, n = t.width, i = t.height, r = t.transform, s = t.title, o = t.extra, a = t.watchable, l = a === void 0 ? !1 : a, c = G(G(G({}, o.attributes), s ? {
    title: s
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  l && (c[Qn] = "");
  var u = G({}, o.styles);
  Wl(r) && (u.transform = fE({
    transform: r,
    startCentered: !0,
    width: n,
    height: i
  }), u["-webkit-transform"] = u.transform);
  var f = bo(u);
  f.length > 0 && (c.style = f);
  var h = [];
  return h.push({
    tag: "span",
    attributes: c,
    children: [e]
  }), s && h.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [s]
  }), h;
}
function RE(t) {
  var e = t.content, n = t.title, i = t.extra, r = G(G(G({}, i.attributes), n ? {
    title: n
  } : {}), {}, {
    class: i.classes.join(" ")
  }), s = bo(i.styles);
  s.length > 0 && (r.style = s);
  var o = [];
  return o.push({
    tag: "span",
    attributes: r,
    children: [e]
  }), n && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), o;
}
var qo = Le.styles;
function Ma(t) {
  var e = t[0], n = t[1], i = t.slice(4), r = Dl(i, 1), s = r[0], o = null;
  return Array.isArray(s) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(K.cssPrefix, "-").concat(Hn.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(K.cssPrefix, "-").concat(Hn.SECONDARY),
        fill: "currentColor",
        d: s[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(K.cssPrefix, "-").concat(Hn.PRIMARY),
        fill: "currentColor",
        d: s[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: s
    }
  }, {
    found: !0,
    width: e,
    height: n,
    icon: o
  };
}
var DE = {
  found: !1,
  width: 512,
  height: 512
};
function FE(t, e) {
  !pp && !K.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'));
}
function Ra(t, e) {
  var n = e;
  return e === "fa" && K.styleDefault !== null && (e = Cn()), new Promise(function(i, r) {
    if (cn("missingIconAbstract"), n === "fa") {
      var s = Ap(t) || {};
      t = s.iconName || t, e = s.prefix || e;
    }
    if (t && e && qo[e] && qo[e][t]) {
      var o = qo[e][t];
      return i(Ma(o));
    }
    FE(t, e), i(G(G({}, DE), {}, {
      icon: K.showMissingIcons && t ? cn("missingIconAbstract") || {} : {}
    }));
  });
}
var yf = function() {
}, Da = K.measurePerformance && Kr && Kr.mark && Kr.measure ? Kr : {
  mark: yf,
  measure: yf
}, Yi = 'FA "6.5.1"', $E = function(e) {
  return Da.mark("".concat(Yi, " ").concat(e, " begins")), function() {
    return Op(e);
  };
}, Op = function(e) {
  Da.mark("".concat(Yi, " ").concat(e, " ends")), Da.measure("".concat(Yi, " ").concat(e), "".concat(Yi, " ").concat(e, " begins"), "".concat(Yi, " ").concat(e, " ends"));
}, jl = {
  begin: $E,
  end: Op
}, bs = function() {
};
function bf(t) {
  var e = t.getAttribute ? t.getAttribute(Qn) : null;
  return typeof e == "string";
}
function BE(t) {
  var e = t.getAttribute ? t.getAttribute($l) : null, n = t.getAttribute ? t.getAttribute(Bl) : null;
  return e && n;
}
function UE(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(K.replacementClass);
}
function qE() {
  if (K.autoReplaceSvg === !0)
    return vs.replace;
  var t = vs[K.autoReplaceSvg];
  return t || vs.replace;
}
function WE(t) {
  return Tt.createElementNS("http://www.w3.org/2000/svg", t);
}
function HE(t) {
  return Tt.createElement(t);
}
function Pp(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = e.ceFn, i = n === void 0 ? t.tag === "svg" ? WE : HE : n;
  if (typeof t == "string")
    return Tt.createTextNode(t);
  var r = i(t.tag);
  Object.keys(t.attributes || []).forEach(function(o) {
    r.setAttribute(o, t.attributes[o]);
  });
  var s = t.children || [];
  return s.forEach(function(o) {
    r.appendChild(Pp(o, {
      ceFn: i
    }));
  }), r;
}
function VE(t) {
  var e = " ".concat(t.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
var vs = {
  replace: function(e) {
    var n = e[0];
    if (n.parentNode)
      if (e[1].forEach(function(r) {
        n.parentNode.insertBefore(Pp(r), n);
      }), n.getAttribute(Qn) === null && K.keepOriginalSource) {
        var i = Tt.createComment(VE(n));
        n.parentNode.replaceChild(i, n);
      } else
        n.remove();
  },
  nest: function(e) {
    var n = e[0], i = e[1];
    if (~ql(n).indexOf(K.replacementClass))
      return vs.replace(e);
    var r = new RegExp("".concat(K.cssPrefix, "-.*"));
    if (delete i[0].attributes.id, i[0].attributes.class) {
      var s = i[0].attributes.class.split(" ").reduce(function(a, l) {
        return l === K.replacementClass || l.match(r) ? a.toSvg.push(l) : a.toNode.push(l), a;
      }, {
        toNode: [],
        toSvg: []
      });
      i[0].attributes.class = s.toSvg.join(" "), s.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", s.toNode.join(" "));
    }
    var o = i.map(function(a) {
      return Ar(a);
    }).join(`
`);
    n.setAttribute(Qn, ""), n.innerHTML = o;
  }
};
function vf(t) {
  t();
}
function Np(t, e) {
  var n = typeof e == "function" ? e : bs;
  if (t.length === 0)
    n();
  else {
    var i = vf;
    K.mutateApproach === Y2 && (i = An.requestAnimationFrame || vf), i(function() {
      var r = qE(), s = jl.begin("mutate");
      t.map(r), s(), n();
    });
  }
}
var Yl = !1;
function Ip() {
  Yl = !0;
}
function Fa() {
  Yl = !1;
}
var js = null;
function _f(t) {
  if (cf && K.observeMutations) {
    var e = t.treeCallback, n = e === void 0 ? bs : e, i = t.nodeCallback, r = i === void 0 ? bs : i, s = t.pseudoElementsCallback, o = s === void 0 ? bs : s, a = t.observeMutationsRoot, l = a === void 0 ? Tt : a;
    js = new cf(function(c) {
      if (!Yl) {
        var u = Cn();
        Bi(c).forEach(function(f) {
          if (f.type === "childList" && f.addedNodes.length > 0 && !bf(f.addedNodes[0]) && (K.searchPseudoElements && o(f.target), n(f.target)), f.type === "attributes" && f.target.parentNode && K.searchPseudoElements && o(f.target.parentNode), f.type === "attributes" && bf(f.target) && ~eE.indexOf(f.attributeName))
            if (f.attributeName === "class" && BE(f.target)) {
              var h = _o(ql(f.target)), p = h.prefix, y = h.iconName;
              f.target.setAttribute($l, p || u), y && f.target.setAttribute(Bl, y);
            } else
              UE(f.target) && r(f.target);
        });
      }
    }), fn && js.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function zE() {
  js && js.disconnect();
}
function GE(t) {
  var e = t.getAttribute("style"), n = [];
  return e && (n = e.split(";").reduce(function(i, r) {
    var s = r.split(":"), o = s[0], a = s.slice(1);
    return o && a.length > 0 && (i[o] = a.join(":").trim()), i;
  }, {})), n;
}
function jE(t) {
  var e = t.getAttribute("data-prefix"), n = t.getAttribute("data-icon"), i = t.innerText !== void 0 ? t.innerText.trim() : "", r = _o(ql(t));
  return r.prefix || (r.prefix = Cn()), e && n && (r.prefix = e, r.iconName = n), r.iconName && r.prefix || (r.prefix && i.length > 0 && (r.iconName = SE(r.prefix, t.innerText) || Vl(r.prefix, Pa(t.innerText))), !r.iconName && K.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = t.firstChild.data)), r;
}
function YE(t) {
  var e = Bi(t.attributes).reduce(function(r, s) {
    return r.name !== "class" && r.name !== "style" && (r[s.name] = s.value), r;
  }, {}), n = t.getAttribute("title"), i = t.getAttribute("data-fa-title-id");
  return K.autoA11y && (n ? e["aria-labelledby"] = "".concat(K.replacementClass, "-title-").concat(i || yr()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function KE() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Ge,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function wf(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, n = jE(t), i = n.iconName, r = n.prefix, s = n.rest, o = YE(t), a = Ia("parseNodeAttributes", {}, t), l = e.styleParser ? GE(t) : [];
  return G({
    iconName: i,
    title: t.getAttribute("title"),
    titleId: t.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: Ge,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: s,
      styles: l,
      attributes: o
    }
  }, a);
}
var XE = Le.styles;
function Lp(t) {
  var e = K.autoReplaceSvg === "nest" ? wf(t, {
    styleParser: !1
  }) : wf(t);
  return ~e.extra.classes.indexOf(mp) ? cn("generateLayersText", t, e) : cn("generateSvgReplacementMutation", t, e);
}
var On = /* @__PURE__ */ new Set();
Ul.map(function(t) {
  On.add("fa-".concat(t));
});
Object.keys(dr[Et]).map(On.add.bind(On));
Object.keys(dr[It]).map(On.add.bind(On));
On = Er(On);
function xf(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!fn)
    return Promise.resolve();
  var n = Tt.documentElement.classList, i = function(f) {
    return n.add("".concat(uf, "-").concat(f));
  }, r = function(f) {
    return n.remove("".concat(uf, "-").concat(f));
  }, s = K.autoFetchSvg ? On : Ul.map(function(u) {
    return "fa-".concat(u);
  }).concat(Object.keys(XE));
  s.includes("fa") || s.push("fa");
  var o = [".".concat(mp, ":not([").concat(Qn, "])")].concat(s.map(function(u) {
    return ".".concat(u, ":not([").concat(Qn, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var a = [];
  try {
    a = Bi(t.querySelectorAll(o));
  } catch {
  }
  if (a.length > 0)
    i("pending"), r("complete");
  else
    return Promise.resolve();
  var l = jl.begin("onTree"), c = a.reduce(function(u, f) {
    try {
      var h = Lp(f);
      h && u.push(h);
    } catch (p) {
      pp || p.name === "MissingIcon" && console.error(p);
    }
    return u;
  }, []);
  return new Promise(function(u, f) {
    Promise.all(c).then(function(h) {
      Np(h, function() {
        i("active"), i("complete"), r("pending"), typeof e == "function" && e(), l(), u();
      });
    }).catch(function(h) {
      l(), f(h);
    });
  });
}
function JE(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Lp(t).then(function(n) {
    n && Np([n], e);
  });
}
function QE(t) {
  return function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = (e || {}).icon ? e : La(e || {}), r = n.mask;
    return r && (r = (r || {}).icon ? r : La(r || {})), t(i, G(G({}, n), {}, {
      mask: r
    }));
  };
}
var ZE = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.transform, r = i === void 0 ? Ge : i, s = n.symbol, o = s === void 0 ? !1 : s, a = n.mask, l = a === void 0 ? null : a, c = n.maskId, u = c === void 0 ? null : c, f = n.title, h = f === void 0 ? null : f, p = n.titleId, y = p === void 0 ? null : p, k = n.classes, w = k === void 0 ? [] : k, g = n.attributes, b = g === void 0 ? {} : g, x = n.styles, S = x === void 0 ? {} : x;
  if (e) {
    var O = e.prefix, P = e.iconName, D = e.icon;
    return wo(G({
      type: "icon"
    }, e), function() {
      return Zn("beforeDOMElementCreation", {
        iconDefinition: e,
        params: n
      }), K.autoA11y && (h ? b["aria-labelledby"] = "".concat(K.replacementClass, "-title-").concat(y || yr()) : (b["aria-hidden"] = "true", b.focusable = "false")), Gl({
        icons: {
          main: Ma(D),
          mask: l ? Ma(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: O,
        iconName: P,
        transform: G(G({}, Ge), r),
        symbol: o,
        title: h,
        maskId: u,
        titleId: y,
        extra: {
          attributes: b,
          styles: S,
          classes: w
        }
      });
    });
  }
}, tT = {
  mixout: function() {
    return {
      icon: QE(ZE)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = xf, n.nodeCallback = JE, n;
      }
    };
  },
  provides: function(e) {
    e.i2svg = function(n) {
      var i = n.node, r = i === void 0 ? Tt : i, s = n.callback, o = s === void 0 ? function() {
      } : s;
      return xf(r, o);
    }, e.generateSvgReplacementMutation = function(n, i) {
      var r = i.iconName, s = i.title, o = i.titleId, a = i.prefix, l = i.transform, c = i.symbol, u = i.mask, f = i.maskId, h = i.extra;
      return new Promise(function(p, y) {
        Promise.all([Ra(r, a), u.iconName ? Ra(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(k) {
          var w = Dl(k, 2), g = w[0], b = w[1];
          p([n, Gl({
            icons: {
              main: g,
              mask: b
            },
            prefix: a,
            iconName: r,
            transform: l,
            symbol: c,
            maskId: f,
            title: s,
            titleId: o,
            extra: h,
            watchable: !0
          })]);
        }).catch(y);
      });
    }, e.generateAbstractIcon = function(n) {
      var i = n.children, r = n.attributes, s = n.main, o = n.transform, a = n.styles, l = bo(a);
      l.length > 0 && (r.style = l);
      var c;
      return Wl(o) && (c = cn("generateAbstractTransformGrouping", {
        main: s,
        transform: o,
        containerWidth: s.width,
        iconWidth: s.width
      })), i.push(c || s.icon), {
        children: i,
        attributes: r
      };
    };
  }
}, eT = {
  mixout: function() {
    return {
      layer: function(n) {
        var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = i.classes, s = r === void 0 ? [] : r;
        return wo({
          type: "layer"
        }, function() {
          Zn("beforeDOMElementCreation", {
            assembler: n,
            params: i
          });
          var o = [];
          return n(function(a) {
            Array.isArray(a) ? a.map(function(l) {
              o = o.concat(l.abstract);
            }) : o = o.concat(a.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(K.cssPrefix, "-layers")].concat(Er(s)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, nT = {
  mixout: function() {
    return {
      counter: function(n) {
        var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = i.title, s = r === void 0 ? null : r, o = i.classes, a = o === void 0 ? [] : o, l = i.attributes, c = l === void 0 ? {} : l, u = i.styles, f = u === void 0 ? {} : u;
        return wo({
          type: "counter",
          content: n
        }, function() {
          return Zn("beforeDOMElementCreation", {
            content: n,
            params: i
          }), RE({
            content: n.toString(),
            title: s,
            extra: {
              attributes: c,
              styles: f,
              classes: ["".concat(K.cssPrefix, "-layers-counter")].concat(Er(a))
            }
          });
        });
      }
    };
  }
}, iT = {
  mixout: function() {
    return {
      text: function(n) {
        var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = i.transform, s = r === void 0 ? Ge : r, o = i.title, a = o === void 0 ? null : o, l = i.classes, c = l === void 0 ? [] : l, u = i.attributes, f = u === void 0 ? {} : u, h = i.styles, p = h === void 0 ? {} : h;
        return wo({
          type: "text",
          content: n
        }, function() {
          return Zn("beforeDOMElementCreation", {
            content: n,
            params: i
          }), gf({
            content: n,
            transform: G(G({}, Ge), s),
            title: a,
            extra: {
              attributes: f,
              styles: p,
              classes: ["".concat(K.cssPrefix, "-layers-text")].concat(Er(c))
            }
          });
        });
      }
    };
  },
  provides: function(e) {
    e.generateLayersText = function(n, i) {
      var r = i.title, s = i.transform, o = i.extra, a = null, l = null;
      if (fp) {
        var c = parseInt(getComputedStyle(n).fontSize, 10), u = n.getBoundingClientRect();
        a = u.width / c, l = u.height / c;
      }
      return K.autoA11y && !r && (o.attributes["aria-hidden"] = "true"), Promise.resolve([n, gf({
        content: n.innerHTML,
        width: a,
        height: l,
        transform: s,
        title: r,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, rT = new RegExp('"', "ug"), kf = [1105920, 1112319];
function sT(t) {
  var e = t.replace(rT, ""), n = bE(e, 0), i = n >= kf[0] && n <= kf[1], r = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: Pa(r ? e[0] : e),
    isSecondary: i || r
  };
}
function Sf(t, e) {
  var n = "".concat(j2).concat(e.replace(":", "-"));
  return new Promise(function(i, r) {
    if (t.getAttribute(n) !== null)
      return i();
    var s = Bi(t.children), o = s.filter(function(D) {
      return D.getAttribute(Oa) === e;
    })[0], a = An.getComputedStyle(t, e), l = a.getPropertyValue("font-family").match(Q2), c = a.getPropertyValue("font-weight"), u = a.getPropertyValue("content");
    if (o && !l)
      return t.removeChild(o), i();
    if (l && u !== "none" && u !== "") {
      var f = a.getPropertyValue("content"), h = ~["Sharp"].indexOf(l[2]) ? It : Et, p = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? pr[h][l[2].toLowerCase()] : Z2[h][c], y = sT(f), k = y.value, w = y.isSecondary, g = l[0].startsWith("FontAwesome"), b = Vl(p, k), x = b;
      if (g) {
        var S = EE(k);
        S.iconName && S.prefix && (b = S.iconName, p = S.prefix);
      }
      if (b && !w && (!o || o.getAttribute($l) !== p || o.getAttribute(Bl) !== x)) {
        t.setAttribute(n, x), o && t.removeChild(o);
        var O = KE(), P = O.extra;
        P.attributes[Oa] = e, Ra(b, p).then(function(D) {
          var z = Gl(G(G({}, O), {}, {
            icons: {
              main: D,
              mask: zl()
            },
            prefix: p,
            iconName: x,
            extra: P,
            watchable: !0
          })), F = Tt.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? t.insertBefore(F, t.firstChild) : t.appendChild(F), F.outerHTML = z.map(function(H) {
            return Ar(H);
          }).join(`
`), t.removeAttribute(n), i();
        }).catch(r);
      } else
        i();
    } else
      i();
  });
}
function oT(t) {
  return Promise.all([Sf(t, "::before"), Sf(t, "::after")]);
}
function aT(t) {
  return t.parentNode !== document.head && !~K2.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(Oa) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function Ef(t) {
  if (fn)
    return new Promise(function(e, n) {
      var i = Bi(t.querySelectorAll("*")).filter(aT).map(oT), r = jl.begin("searchPseudoElements");
      Ip(), Promise.all(i).then(function() {
        r(), Fa(), e();
      }).catch(function() {
        r(), Fa(), n();
      });
    });
}
var lT = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.pseudoElementsCallback = Ef, n;
      }
    };
  },
  provides: function(e) {
    e.pseudoElements2svg = function(n) {
      var i = n.node, r = i === void 0 ? Tt : i;
      K.searchPseudoElements && Ef(r);
    };
  }
}, Tf = !1, cT = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          Ip(), Tf = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        _f(Ia("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        zE();
      },
      watch: function(n) {
        var i = n.observeMutationsRoot;
        Tf ? Fa() : _f(Ia("mutationObserverCallbacks", {
          observeMutationsRoot: i
        }));
      }
    };
  }
}, Af = function(e) {
  var n = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce(function(i, r) {
    var s = r.toLowerCase().split("-"), o = s[0], a = s.slice(1).join("-");
    if (o && a === "h")
      return i.flipX = !0, i;
    if (o && a === "v")
      return i.flipY = !0, i;
    if (a = parseFloat(a), isNaN(a))
      return i;
    switch (o) {
      case "grow":
        i.size = i.size + a;
        break;
      case "shrink":
        i.size = i.size - a;
        break;
      case "left":
        i.x = i.x - a;
        break;
      case "right":
        i.x = i.x + a;
        break;
      case "up":
        i.y = i.y - a;
        break;
      case "down":
        i.y = i.y + a;
        break;
      case "rotate":
        i.rotate = i.rotate + a;
        break;
    }
    return i;
  }, n);
}, uT = {
  mixout: function() {
    return {
      parse: {
        transform: function(n) {
          return Af(n);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(n, i) {
        var r = i.getAttribute("data-fa-transform");
        return r && (n.transform = Af(r)), n;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractTransformGrouping = function(n) {
      var i = n.main, r = n.transform, s = n.containerWidth, o = n.iconWidth, a = {
        transform: "translate(".concat(s / 2, " 256)")
      }, l = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), c = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), u = "rotate(".concat(r.rotate, " 0 0)"), f = {
        transform: "".concat(l, " ").concat(c, " ").concat(u)
      }, h = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, p = {
        outer: a,
        inner: f,
        path: h
      };
      return {
        tag: "g",
        attributes: G({}, p.outer),
        children: [{
          tag: "g",
          attributes: G({}, p.inner),
          children: [{
            tag: i.icon.tag,
            children: i.icon.children,
            attributes: G(G({}, i.icon.attributes), p.path)
          }]
        }]
      };
    };
  }
}, Wo = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Cf(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t;
}
function fT(t) {
  return t.tag === "g" ? t.children : [t];
}
var hT = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, i) {
        var r = i.getAttribute("data-fa-mask"), s = r ? _o(r.split(" ").map(function(o) {
          return o.trim();
        })) : zl();
        return s.prefix || (s.prefix = Cn()), n.mask = s, n.maskId = i.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractMask = function(n) {
      var i = n.children, r = n.attributes, s = n.main, o = n.mask, a = n.maskId, l = n.transform, c = s.width, u = s.icon, f = o.width, h = o.icon, p = uE({
        transform: l,
        containerWidth: f,
        iconWidth: c
      }), y = {
        tag: "rect",
        attributes: G(G({}, Wo), {}, {
          fill: "white"
        })
      }, k = u.children ? {
        children: u.children.map(Cf)
      } : {}, w = {
        tag: "g",
        attributes: G({}, p.inner),
        children: [Cf(G({
          tag: u.tag,
          attributes: G(G({}, u.attributes), p.path)
        }, k))]
      }, g = {
        tag: "g",
        attributes: G({}, p.outer),
        children: [w]
      }, b = "mask-".concat(a || yr()), x = "clip-".concat(a || yr()), S = {
        tag: "mask",
        attributes: G(G({}, Wo), {}, {
          id: b,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [y, g]
      }, O = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: x
          },
          children: fT(h)
        }, S]
      };
      return i.push(O, {
        tag: "rect",
        attributes: G({
          fill: "currentColor",
          "clip-path": "url(#".concat(x, ")"),
          mask: "url(#".concat(b, ")")
        }, Wo)
      }), {
        children: i,
        attributes: r
      };
    };
  }
}, dT = {
  provides: function(e) {
    var n = !1;
    An.matchMedia && (n = An.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      var i = [], r = {
        fill: "currentColor"
      }, s = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      i.push({
        tag: "path",
        attributes: G(G({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = G(G({}, s), {}, {
        attributeName: "opacity"
      }), a = {
        tag: "circle",
        attributes: G(G({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return n || a.children.push({
        tag: "animate",
        attributes: G(G({}, s), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: G(G({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), i.push(a), i.push({
        tag: "path",
        attributes: G(G({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: n ? [] : [{
          tag: "animate",
          attributes: G(G({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), n || i.push({
        tag: "path",
        attributes: G(G({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: G(G({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: i
      };
    };
  }
}, pT = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, i) {
        var r = i.getAttribute("data-fa-symbol"), s = r === null ? !1 : r === "" ? !0 : r;
        return n.symbol = s, n;
      }
    };
  }
}, mT = [dE, tT, eT, nT, iT, lT, cT, uT, hT, dT, pT];
CE(mT, {
  mixoutsTo: ye
});
ye.noAuto;
ye.config;
var gT = ye.library;
ye.dom;
var $a = ye.parse;
ye.findIconDefinition;
ye.toHtml;
var yT = ye.icon;
ye.layer;
ye.text;
ye.counter;
function Of(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function en(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Of(Object(n), !0).forEach(function(i) {
      se(t, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Of(Object(n)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return t;
}
function Ys(t) {
  "@babel/helpers - typeof";
  return Ys = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ys(t);
}
function se(t, e, n) {
  return e = wT(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function bT(t, e) {
  if (t == null)
    return {};
  var n = {}, i = Object.keys(t), r, s;
  for (s = 0; s < i.length; s++)
    r = i[s], !(e.indexOf(r) >= 0) && (n[r] = t[r]);
  return n;
}
function vT(t, e) {
  if (t == null)
    return {};
  var n = bT(t, e), i, r;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (r = 0; r < s.length; r++)
      i = s[r], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (n[i] = t[i]);
  }
  return n;
}
function _T(t, e) {
  if (typeof t != "object" || t === null)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(t, e || "default");
    if (typeof i != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function wT(t) {
  var e = _T(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
var xT = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Mp = { exports: {} };
(function(t) {
  (function(e) {
    var n = function(g, b, x) {
      if (!c(b) || f(b) || h(b) || p(b) || l(b))
        return b;
      var S, O = 0, P = 0;
      if (u(b))
        for (S = [], P = b.length; O < P; O++)
          S.push(n(g, b[O], x));
      else {
        S = {};
        for (var D in b)
          Object.prototype.hasOwnProperty.call(b, D) && (S[g(D, x)] = n(g, b[D], x));
      }
      return S;
    }, i = function(g, b) {
      b = b || {};
      var x = b.separator || "_", S = b.split || /(?=[A-Z])/;
      return g.split(S).join(x);
    }, r = function(g) {
      return y(g) ? g : (g = g.replace(/[\-_\s]+(.)?/g, function(b, x) {
        return x ? x.toUpperCase() : "";
      }), g.substr(0, 1).toLowerCase() + g.substr(1));
    }, s = function(g) {
      var b = r(g);
      return b.substr(0, 1).toUpperCase() + b.substr(1);
    }, o = function(g, b) {
      return i(g, b).toLowerCase();
    }, a = Object.prototype.toString, l = function(g) {
      return typeof g == "function";
    }, c = function(g) {
      return g === Object(g);
    }, u = function(g) {
      return a.call(g) == "[object Array]";
    }, f = function(g) {
      return a.call(g) == "[object Date]";
    }, h = function(g) {
      return a.call(g) == "[object RegExp]";
    }, p = function(g) {
      return a.call(g) == "[object Boolean]";
    }, y = function(g) {
      return g = g - 0, g === g;
    }, k = function(g, b) {
      var x = b && "process" in b ? b.process : b;
      return typeof x != "function" ? g : function(S, O) {
        return x(S, g, O);
      };
    }, w = {
      camelize: r,
      decamelize: o,
      pascalize: s,
      depascalize: o,
      camelizeKeys: function(g, b) {
        return n(k(r, b), g);
      },
      decamelizeKeys: function(g, b) {
        return n(k(o, b), g, b);
      },
      pascalizeKeys: function(g, b) {
        return n(k(s, b), g);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    t.exports ? t.exports = w : e.humps = w;
  })(xT);
})(Mp);
var kT = Mp.exports, ST = ["class", "style"];
function ET(t) {
  return t.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, n) {
    var i = n.indexOf(":"), r = kT.camelize(n.slice(0, i)), s = n.slice(i + 1).trim();
    return e[r] = s, e;
  }, {});
}
function TT(t) {
  return t.split(/\s+/).reduce(function(e, n) {
    return e[n] = !0, e;
  }, {});
}
function Rp(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var i = (t.children || []).map(function(l) {
    return Rp(l);
  }), r = Object.keys(t.attributes || {}).reduce(function(l, c) {
    var u = t.attributes[c];
    switch (c) {
      case "class":
        l.class = TT(u);
        break;
      case "style":
        l.style = ET(u);
        break;
      default:
        l.attrs[c] = u;
    }
    return l;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var s = n.style, o = s === void 0 ? {} : s, a = vT(n, ST);
  return ll(t.tag, en(en(en({}, e), {}, {
    class: r.class,
    style: en(en({}, r.style), o)
  }, r.attrs), a), i);
}
var Dp = !1;
try {
  Dp = !0;
} catch {
}
function AT() {
  if (!Dp && console && typeof console.error == "function") {
    var t;
    (t = console).error.apply(t, arguments);
  }
}
function Ho(t, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? se({}, t, e) : {};
}
function CT(t) {
  var e, n = (e = {
    "fa-spin": t.spin,
    "fa-pulse": t.pulse,
    "fa-fw": t.fixedWidth,
    "fa-border": t.border,
    "fa-li": t.listItem,
    "fa-inverse": t.inverse,
    "fa-flip": t.flip === !0,
    "fa-flip-horizontal": t.flip === "horizontal" || t.flip === "both",
    "fa-flip-vertical": t.flip === "vertical" || t.flip === "both"
  }, se(e, "fa-".concat(t.size), t.size !== null), se(e, "fa-rotate-".concat(t.rotation), t.rotation !== null), se(e, "fa-pull-".concat(t.pull), t.pull !== null), se(e, "fa-swap-opacity", t.swapOpacity), se(e, "fa-bounce", t.bounce), se(e, "fa-shake", t.shake), se(e, "fa-beat", t.beat), se(e, "fa-fade", t.fade), se(e, "fa-beat-fade", t.beatFade), se(e, "fa-flash", t.flash), se(e, "fa-spin-pulse", t.spinPulse), se(e, "fa-spin-reverse", t.spinReverse), e);
  return Object.keys(n).map(function(i) {
    return n[i] ? i : null;
  }).filter(function(i) {
    return i;
  });
}
function Pf(t) {
  if (t && Ys(t) === "object" && t.prefix && t.iconName && t.icon)
    return t;
  if ($a.icon)
    return $a.icon(t);
  if (t === null)
    return null;
  if (Ys(t) === "object" && t.prefix && t.iconName)
    return t;
  if (Array.isArray(t) && t.length === 2)
    return {
      prefix: t[0],
      iconName: t[1]
    };
  if (typeof t == "string")
    return {
      prefix: "fas",
      iconName: t
    };
}
var OT = /* @__PURE__ */ Mi({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      default: !1
    },
    fixedWidth: {
      type: Boolean,
      default: !1
    },
    flip: {
      type: [Boolean, String],
      default: !1,
      validator: function(e) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(e) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: !0
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    maskId: {
      type: String,
      default: null
    },
    listItem: {
      type: Boolean,
      default: !1
    },
    pull: {
      type: String,
      default: null,
      validator: function(e) {
        return ["right", "left"].indexOf(e) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(e) {
        return [90, 180, 270].indexOf(Number.parseInt(e, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(e) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(e) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: !1
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: !1
    },
    title: {
      type: String,
      default: null
    },
    titleId: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: !1
    },
    bounce: {
      type: Boolean,
      default: !1
    },
    shake: {
      type: Boolean,
      default: !1
    },
    beat: {
      type: Boolean,
      default: !1
    },
    fade: {
      type: Boolean,
      default: !1
    },
    beatFade: {
      type: Boolean,
      default: !1
    },
    flash: {
      type: Boolean,
      default: !1
    },
    spinPulse: {
      type: Boolean,
      default: !1
    },
    spinReverse: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(e, n) {
    var i = n.attrs, r = we(function() {
      return Pf(e.icon);
    }), s = we(function() {
      return Ho("classes", CT(e));
    }), o = we(function() {
      return Ho("transform", typeof e.transform == "string" ? $a.transform(e.transform) : e.transform);
    }), a = we(function() {
      return Ho("mask", Pf(e.mask));
    }), l = we(function() {
      return yT(r.value, en(en(en(en({}, s.value), o.value), a.value), {}, {
        symbol: e.symbol,
        title: e.title,
        titleId: e.titleId,
        maskId: e.maskId
      }));
    });
    sn(l, function(u) {
      if (!u)
        return AT("Could not find one or more icon(s)", r.value, a.value);
    }, {
      immediate: !0
    });
    var c = we(function() {
      return l.value ? Rp(l.value.abstract[0], {}, i) : null;
    });
    return function() {
      return c.value;
    };
  }
}), PT = {
  prefix: "fasr",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M493.8 273l17-17-17-17-96-96-17-17L346.9 160l17 17 55 55L93.1 232l55-55 17-17-33.9-33.9-17 17-96 96-17 17 17 17 96 96 17 17L165.1 352l-17-17-55-55 325.7 0-55 55-17 17 33.9 33.9 17-17 96-96z"]
}, NT = {
  prefix: "fasr",
  iconName: "plus-large",
  icon: [512, 512, [], "e59e", "M488 232l24 0 0 48-24 0-208 0V488l0 24H232l0-24 0-208L24 280 0 280V232l24 0 208 0 0-208 0-24 48 0V24l0 208 208 0z"]
}, IT = {
  prefix: "fasr",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M136 32h24V80H136 48v88 24H0V168 56 32H24 136zM0 344V320H48v24 88h88 24v48H136 24 0V456 344zM424 32h24V56 168v24H400V168 80H312 288V32h24H424zM400 344V320h48v24V456v24H424 312 288V432h24 88V344z"]
}, LT = {
  prefix: "fasr",
  iconName: "arrows-up-down",
  icon: [320, 512, ["arrows-v"], "f07d", "M177 18.2l-17-17-17 17-96 96-17 17L64 165.1l17-17 55-55V418.9l-55-55-17-17L30.1 380.8l17 17 96 96 17 17 17-17 96-96 17-17L256 346.9l-17 17-55 55V93.1l55 55 17 17 33.9-33.9-17-17-96-96z"]
}, MT = {
  prefix: "fass",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z"]
}, RT = {
  prefix: "fass",
  iconName: "calculator",
  icon: [384, 512, [128425], "f1ec", "M384 0H0V512H384V0zM320 64v96H64V64H320zM64 192h64v64H64V192zm64 96v64H64V288h64zM64 384H224v64H64V384zM224 192v64H160V192h64zm-64 96h64v64H160V288zm160-96v64H256V192h64zm-64 96h64v64H256V288zm64 96v64H256V384h64z"]
}, DT = {
  prefix: "fass",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M326.6 166.6L349.3 144 304 98.7l-22.6 22.6L192 210.7l-89.4-89.4L80 98.7 34.7 144l22.6 22.6L146.7 256 57.4 345.4 34.7 368 80 413.3l22.6-22.6L192 301.3l89.4 89.4L304 413.3 349.3 368l-22.6-22.6L237.3 256l89.4-89.4z"]
}, FT = {
  prefix: "fass",
  iconName: "hammer",
  icon: [576, 512, [128296], "f6e3", "M225.6 18.2L176 48l96 48v48L384 256l24-24 24 24-24 24 48 48L576 208l-48-48-24 24-24-24 24-24L405.5 37.5C381.5 13.5 348.9 0 315 0H291.5c-23.2 0-46 6.3-65.9 18.2zM0 416l96 96L330.7 248 264 181.3 0 416z"]
};
gT.add(
  DT,
  IT,
  PT,
  LT,
  FT,
  MT,
  NT,
  RT
);
const $T = Kb({
  locale: "en_US",
  fallbackLocale: "en_US",
  messages: l0
}), Nf = document.querySelector("#smartcut-app"), BT = Nf ? Nf.getAttribute("data-type") : "", Kl = sy(F2, { type: BT });
Kl.use($T);
Kl.component("font-awesome-icon", OT);
Kl.mount("#smartcut-app");
export {
  ai as A,
  Ch as B,
  P2 as C,
  Ic as D,
  Ft as F,
  $i as _,
  R as a,
  zT as b,
  ar as c,
  ct as d,
  GT as e,
  Vs as f,
  WT as g,
  HT as h,
  Xk as i,
  VT as j,
  st as k,
  Z as l,
  Qa as m,
  mt as n,
  tt as o,
  vt as p,
  Yn as q,
  si as r,
  Jk as s,
  bt as t,
  $n as u,
  A as v,
  Oe as w,
  Ts as x,
  zt as y,
  ty as z
};
